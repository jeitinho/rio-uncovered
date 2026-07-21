
import { useMemo, useState } from "react";
import { useLang } from "@/lib/i18n";
import type { PartnerApplication, PartnerCategory } from "@/content/partenaires/types";

const CATEGORY_ORDER: PartnerCategory[] = [
  "restaurante", "bar", "barraca", "hotel", "pousada", "cafe", "confeitaria",
  "guia", "agencia", "transporte", "passeio", "artesao", "loja",
  "bem_estar", "vida_noturna", "eventos", "outro",
];

type Props = { onSuccess: () => void };

// Taille totale max des pièces jointes (Mo) — au-delà, on prévient plutôt que
// de risquer un échec silencieux côté Resend/Cloudflare.
const MAX_MEDIA_MB = 8;

function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      // On retire le préfixe "data:...;base64," — Resend attend le base64 brut.
      resolve(result.split(",")[1] ?? "");
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export function PartnerForm({ onSuccess }: Props) {
  const { t, lang } = useLang();
  const f = t.form;

  const [state, setState] = useState<Partial<PartnerApplication>>({
    languagesSpoken: [],
    seeking: [],
    offering: [],
    mediaFileNames: [],
  });
  // Fichiers réels (pas seulement leurs noms) — nécessaires pour joindre les
  // médias à l'email envoyé côté serveur.
  const [mediaFiles, setMediaFiles] = useState<File[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const category = state.category as PartnerCategory | undefined;
  const showFood = category && ["restaurante", "bar", "cafe", "confeitaria"].includes(category);
  const showLodging = category && ["hotel", "pousada"].includes(category);
  const showBarraca = category === "barraca";
  const showGuide = category && ["guia", "agencia"].includes(category);

  const set = <K extends keyof PartnerApplication>(k: K, v: PartnerApplication[K]) =>
    setState((s) => ({ ...s, [k]: v }));

  const toggleInList = (k: "languagesSpoken" | "seeking" | "offering", v: string) => {
    setState((s) => {
      const list = (s[k] as string[] | undefined) ?? [];
      return { ...s, [k]: list.includes(v) ? list.filter((x) => x !== v) : [...list, v] };
    });
  };

  const onFilesChange = (files: FileList | null) => {
    if (!files) return;
    const arr = Array.from(files);
    setMediaFiles(arr);
    set("mediaFileNames", arr.map((file) => file.name));
  };

  const validate = (): string | null => {
    const req = [
      "establishmentName", "contactName", "phone", "whatsapp", "email",
      "category", "address", "neighborhood",
    ] as const;
    for (const key of req) if (!state[key]) return f.errorGeneric;
    if (!state.consentUseInfo || !state.consentContact || !state.consentTerms) return f.errorGeneric;
    const totalBytes = mediaFiles.reduce((sum, file) => sum + file.size, 0);
    if (totalBytes > MAX_MEDIA_MB * 1024 * 1024) return f.errorGeneric;
    return null;
  };

  const buildPayload = (): PartnerApplication => ({
    status: "nouveau",
    lang,
    submittedAt: new Date().toISOString(),
    establishmentName: state.establishmentName ?? "",
    contactName: state.contactName ?? "",
    contactRole: state.contactRole,
    phone: state.phone ?? "",
    whatsapp: state.whatsapp ?? "",
    email: state.email ?? "",
    website: state.website,
    instagram: state.instagram,
    facebook: state.facebook,
    tiktok: state.tiktok,
    category: state.category as PartnerCategory,
    address: state.address ?? "",
    neighborhood: state.neighborhood ?? "",
    googleMapsUrl: state.googleMapsUrl,
    gpsCoordinates: state.gpsCoordinates,
    presentation: state.presentation,
    differentiation: state.differentiation,
    since: state.since,
    languagesSpoken: state.languagesSpoken ?? [],
    openingDays: state.openingDays,
    openingHours: state.openingHours,
    annualClosure: state.annualClosure,
    seats: state.seats,
    hasTerrace: state.hasTerrace,
    hasAirConditioning: state.hasAirConditioning,
    rooms: state.rooms,
    tables: state.tables,
    maxGroupSize: state.maxGroupSize,
    seeking: state.seeking ?? [],
    offering: state.offering ?? [],
    mediaFileNames: state.mediaFileNames ?? [],
    message: state.message,
    consentUseInfo: !!state.consentUseInfo,
    consentContact: !!state.consentContact,
    consentTerms: !!state.consentTerms,
  });

  // Construit le tableau { label, value } attendu par le template email,
  // en réutilisant les libellés déjà traduits par le site (PT/FR automatique).
  const buildSummary = (payload: PartnerApplication): Array<{ label: string; value: string }> => {
    const rows: Array<{ label: string; value: string }> = [];
    const add = (label: string | undefined, value?: string | boolean | string[]) => {
      if (!label) return;
      if (value === undefined || value === null || value === "") return;
      if (Array.isArray(value) && value.length === 0) return;
      if (typeof value === "boolean") {
        rows.push({ label, value: value ? f.fields.yes : f.fields.no });
        return;
      }
      rows.push({ label, value: Array.isArray(value) ? value.join(", ") : value });
    };

    add(f.fields.contactRole, payload.contactRole);
    add(f.fields.whatsapp, payload.whatsapp);
    add(f.fields.website, payload.website);
    add(f.fields.instagram, payload.instagram);
    add(f.fields.facebook, payload.facebook);
    add(f.fields.tiktok, payload.tiktok);
    add(f.fields.category, payload.category ? f.categories[payload.category] : undefined);
    add(f.fields.address, payload.address);
    add(f.fields.neighborhood, payload.neighborhood);
    add(f.fields.googleMapsUrl, payload.googleMapsUrl);
    add(f.fields.gpsCoordinates, payload.gpsCoordinates);
    add(f.fields.presentation, payload.presentation);
    add(f.fields.differentiation, payload.differentiation);
    add(f.fields.since, payload.since);
    add(f.fields.openingDays, payload.openingDays);
    add(f.fields.openingHours, payload.openingHours);
    add(f.fields.annualClosure, payload.annualClosure);
    add(f.fields.seats, payload.seats);
    add(f.fields.hasTerrace, payload.hasTerrace);
    add(f.fields.hasAirConditioning, payload.hasAirConditioning);
    add(f.fields.rooms, payload.rooms);
    add(f.fields.tables, payload.tables);
    add(f.fields.maxGroupSize, payload.maxGroupSize);
    add(f.sections.languages, payload.languagesSpoken);
    add(f.sections.seeking, payload.seeking);
    add(f.sections.offering, payload.offering);

    return rows;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const err = validate();
    if (err) { setError(err); return; }

    const payload = buildPayload();
    setSubmitting(true);

    try {
      const medias = await Promise.all(
        mediaFiles.map(async (file) => ({
          filename: file.name,
          contentType: file.type,
          base64: await fileToBase64(file),
        }))
      );

      const res = await fetch("/api/partenaires", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          etablissement: payload.establishmentName,
          responsable: payload.contactName,
          email: payload.email,
          telephone: payload.phone,
          summary: buildSummary(payload),
          message: payload.message,
          medias,
        }),
      });

      if (!res.ok) throw new Error("submit failed");
      onSuccess();
    } catch {
      setError(f.errorGeneric);
    } finally {
      setSubmitting(false);
    }
  };

  const inputCls =
    "w-full rounded-[3px] border border-[color:var(--partner-champagne)]/40 bg-white/60 px-4 py-3 text-[color:var(--partner-ink)] placeholder:text-[color:var(--partner-ink)]/40 focus:outline-none focus:border-[color:var(--partner-champagne-deep)] transition-colors";
  const labelCls = "block text-sm font-medium text-[color:var(--partner-ink)] mb-1.5";
  const sectionCls = "space-y-6";
  const sectionTitleCls = "font-serif text-2xl text-[color:var(--partner-ink)] pb-3 border-b border-[color:var(--partner-champagne)]/30 mb-6";
  const req = <span className="text-[color:var(--partner-champagne-deep)] ml-1" aria-label={f.required}>*</span>;

  const categories = useMemo(() => CATEGORY_ORDER, []);

  return (
    <form onSubmit={handleSubmit} className="space-y-14">
      {/* Général */}
      <div className={sectionCls}>
        <h3 className={sectionTitleCls}>{f.sections.general}</h3>
        <div className="grid gap-5 md:grid-cols-2">
          <Field label={<>{f.fields.establishmentName}{req}</>}><input className={inputCls} required value={state.establishmentName ?? ""} onChange={(e) => set("establishmentName", e.target.value)} /></Field>
          <Field label={<>{f.fields.contactName}{req}</>}><input className={inputCls} required value={state.contactName ?? ""} onChange={(e) => set("contactName", e.target.value)} /></Field>
          <Field label={f.fields.contactRole}><input className={inputCls} value={state.contactRole ?? ""} onChange={(e) => set("contactRole", e.target.value)} /></Field>
          <Field label={<>{f.fields.phone}{req}</>}><input type="tel" className={inputCls} required value={state.phone ?? ""} onChange={(e) => set("phone", e.target.value)} /></Field>
          <Field label={<>{f.fields.whatsapp}{req}</>}><input type="tel" className={inputCls} required value={state.whatsapp ?? ""} onChange={(e) => set("whatsapp", e.target.value)} /></Field>
          <Field label={<>{f.fields.email}{req}</>}><input type="email" className={inputCls} required value={state.email ?? ""} onChange={(e) => set("email", e.target.value)} /></Field>
          <Field label={f.fields.website}><input type="url" className={inputCls} value={state.website ?? ""} onChange={(e) => set("website", e.target.value)} /></Field>
          <Field label={f.fields.instagram}><input className={inputCls} value={state.instagram ?? ""} onChange={(e) => set("instagram", e.target.value)} /></Field>
          <Field label={f.fields.facebook}><input className={inputCls} value={state.facebook ?? ""} onChange={(e) => set("facebook", e.target.value)} /></Field>
          <Field label={f.fields.tiktok}><input className={inputCls} value={state.tiktok ?? ""} onChange={(e) => set("tiktok", e.target.value)} /></Field>
        </div>
      </div>

      {/* Catégorie */}
      <div className={sectionCls}>
        <h3 className={sectionTitleCls}>{f.sections.category}</h3>
        <Field label={<>{f.fields.category}{req}</>}>
          <select className={inputCls} required value={state.category ?? ""} onChange={(e) => set("category", e.target.value as PartnerCategory)}>
            <option value="" disabled>—</option>
            {categories.map((c) => <option key={c} value={c}>{f.categories[c]}</option>)}
          </select>
        </Field>
      </div>

      {/* Adresse */}
      <div className={sectionCls}>
        <h3 className={sectionTitleCls}>{f.sections.address}</h3>
        <div className="grid gap-5 md:grid-cols-2">
          <Field label={<>{f.fields.address}{req}</>}><input className={inputCls} required value={state.address ?? ""} onChange={(e) => set("address", e.target.value)} /></Field>
          <Field label={<>{f.fields.neighborhood}{req}</>}><input className={inputCls} required value={state.neighborhood ?? ""} onChange={(e) => set("neighborhood", e.target.value)} /></Field>
          <Field label={f.fields.googleMapsUrl}><input type="url" className={inputCls} value={state.googleMapsUrl ?? ""} onChange={(e) => set("googleMapsUrl", e.target.value)} /></Field>
          <Field label={f.fields.gpsCoordinates}><input className={inputCls} value={state.gpsCoordinates ?? ""} onChange={(e) => set("gpsCoordinates", e.target.value)} /></Field>
        </div>
      </div>

      {/* Présentation */}
      <div className={sectionCls}>
        <h3 className={sectionTitleCls}>{f.sections.presentation}</h3>
        <Field label={f.fields.presentation}><textarea rows={4} className={inputCls} value={state.presentation ?? ""} onChange={(e) => set("presentation", e.target.value)} /></Field>
        <Field label={f.fields.differentiation}><textarea rows={3} className={inputCls} value={state.differentiation ?? ""} onChange={(e) => set("differentiation", e.target.value)} /></Field>
        <Field label={f.fields.since}><input className={inputCls} value={state.since ?? ""} onChange={(e) => set("since", e.target.value)} /></Field>
      </div>

      {/* Langues */}
      <div className={sectionCls}>
        <h3 className={sectionTitleCls}>{f.sections.languages}</h3>
        <CheckboxGroup options={f.languages} selected={state.languagesSpoken ?? []} onToggle={(v) => toggleInList("languagesSpoken", v)} />
      </div>

      {/* Horaires */}
      <div className={sectionCls}>
        <h3 className={sectionTitleCls}>{f.sections.hours}</h3>
        <div className="grid gap-5 md:grid-cols-3">
          <Field label={f.fields.openingDays}><input className={inputCls} value={state.openingDays ?? ""} onChange={(e) => set("openingDays", e.target.value)} /></Field>
          <Field label={f.fields.openingHours}><input className={inputCls} value={state.openingHours ?? ""} onChange={(e) => set("openingHours", e.target.value)} /></Field>
          <Field label={f.fields.annualClosure}><input className={inputCls} value={state.annualClosure ?? ""} onChange={(e) => set("annualClosure", e.target.value)} /></Field>
        </div>
      </div>

      {/* Capacité — conditionnel */}
      {(showFood || showLodging || showBarraca || showGuide) && (
        <div className={sectionCls}>
          <h3 className={sectionTitleCls}>{f.sections.capacity}</h3>
          <div className="grid gap-5 md:grid-cols-3">
            {showFood && (
              <>
                <Field label={f.fields.seats}><input className={inputCls} value={state.seats ?? ""} onChange={(e) => set("seats", e.target.value)} /></Field>
                <YesNo label={f.fields.hasTerrace} yes={f.fields.yes} no={f.fields.no} value={state.hasTerrace} onChange={(v) => set("hasTerrace", v)} />
                <YesNo label={f.fields.hasAirConditioning} yes={f.fields.yes} no={f.fields.no} value={state.hasAirConditioning} onChange={(v) => set("hasAirConditioning", v)} />
              </>
            )}
            {showLodging && (
              <Field label={f.fields.rooms}><input className={inputCls} value={state.rooms ?? ""} onChange={(e) => set("rooms", e.target.value)} /></Field>
            )}
            {showBarraca && (
              <Field label={f.fields.tables}><input className={inputCls} value={state.tables ?? ""} onChange={(e) => set("tables", e.target.value)} /></Field>
            )}
            {showGuide && (
              <Field label={f.fields.maxGroupSize}><input className={inputCls} value={state.maxGroupSize ?? ""} onChange={(e) => set("maxGroupSize", e.target.value)} /></Field>
            )}
          </div>
        </div>
      )}

      {/* Recherche */}
      <div className={sectionCls}>
        <h3 className={sectionTitleCls}>{f.sections.seeking}</h3>
        <CheckboxGroup options={f.seeking} selected={state.seeking ?? []} onToggle={(v) => toggleInList("seeking", v)} />
      </div>

      {/* Offre */}
      <div className={sectionCls}>
        <h3 className={sectionTitleCls}>{f.sections.offering}</h3>
        <CheckboxGroup options={f.offering} selected={state.offering ?? []} onToggle={(v) => toggleInList("offering", v)} />
      </div>

      {/* Médias */}
      <div className={sectionCls}>
        <h3 className={sectionTitleCls}>{f.sections.media}</h3>
        <p className="text-sm text-[color:var(--partner-ink)]/70 mb-3">
          {f.mediaTypes.join(" · ")}
        </p>
        <label className="block cursor-pointer">
          <div className="rounded-[3px] border border-dashed border-[color:var(--partner-champagne)]/60 bg-white/40 px-6 py-10 text-center hover:bg-white/60 transition-colors">
            <p className="text-sm text-[color:var(--partner-ink)]/70">{f.mediaHint}</p>
            {(state.mediaFileNames?.length ?? 0) > 0 && (
              <p className="mt-3 text-sm text-[color:var(--partner-champagne-deep)]">
                {state.mediaFileNames!.length} file(s) — {state.mediaFileNames!.join(", ")}
              </p>
            )}
          </div>
          <input type="file" multiple className="hidden" onChange={(e) => onFilesChange(e.target.files)} />
        </label>
      </div>

      {/* Message */}
      <div className={sectionCls}>
        <h3 className={sectionTitleCls}>{f.sections.message}</h3>
        <Field label={f.fields.message}><textarea rows={4} className={inputCls} value={state.message ?? ""} onChange={(e) => set("message", e.target.value)} /></Field>
      </div>

      {/* Consentement */}
      <div className={sectionCls}>
        <h3 className={sectionTitleCls}>{f.sections.consent}</h3>
        <div className="space-y-3">
          <Consent checked={!!state.consentUseInfo} onChange={(v) => set("consentUseInfo", v)} label={f.consent.useInfo} required />
          <Consent checked={!!state.consentContact} onChange={(v) => set("consentContact", v)} label={f.consent.contact} required />
          <Consent checked={!!state.consentTerms} onChange={(v) => set("consentTerms", v)} label={f.consent.terms} required />
        </div>
      </div>

      {error && <p className="text-sm text-red-700">{error}</p>}

      <div className="pt-2">
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex items-center justify-center rounded-[3px] bg-[color:var(--partner-ink)] px-8 py-4 text-sm uppercase tracking-[0.14em] text-[color:var(--partner-ivory)] hover:bg-[color:var(--partner-champagne-deep)] transition-colors disabled:opacity-60"
        >
          {submitting ? f.submitting : f.submit}
        </button>
      </div>
    </form>
  );
}

function Field({ label, children }: { label: React.ReactNode; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-[color:var(--partner-ink)] mb-1.5">{label}</span>
      {children}
    </label>
  );
}

function CheckboxGroup({ options, selected, onToggle }: { options: readonly string[]; selected: string[]; onToggle: (v: string) => void }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
      {options.map((o) => {
        const active = selected.includes(o);
        return (
          <label key={o} className={`flex items-center gap-3 rounded-[3px] border px-4 py-3 cursor-pointer transition-colors ${active ? "border-[color:var(--partner-champagne-deep)] bg-[color:var(--partner-champagne)]/10" : "border-[color:var(--partner-champagne)]/30 bg-white/40 hover:bg-white/70"}`}>
            <input type="checkbox" className="accent-[color:var(--partner-champagne-deep)]" checked={active} onChange={() => onToggle(o)} />
            <span className="text-sm text-[color:var(--partner-ink)]">{o}</span>
          </label>
        );
      })}
    </div>
  );
}

function YesNo({ label, yes, no, value, onChange }: { label: string; yes: string; no: string; value: boolean | undefined; onChange: (v: boolean) => void }) {
  return (
    <div>
      <span className="block text-sm font-medium text-[color:var(--partner-ink)] mb-1.5">{label}</span>
      <div className="flex gap-2">
        {[{ v: true, l: yes }, { v: false, l: no }].map(({ v, l }) => (
          <button
            type="button"
            key={l}
            onClick={() => onChange(v)}
            className={`flex-1 rounded-[3px] border px-4 py-3 text-sm transition-colors ${value === v ? "border-[color:var(--partner-champagne-deep)] bg-[color:var(--partner-champagne)]/20 text-[color:var(--partner-ink)]" : "border-[color:var(--partner-champagne)]/30 bg-white/40 text-[color:var(--partner-ink)]/70 hover:bg-white/70"}`}
          >
            {l}
          </button>
        ))}
      </div>
    </div>
  );
}

function Consent({ checked, onChange, label, required }: { checked: boolean; onChange: (v: boolean) => void; label: string; required?: boolean }) {
  return (
    <label className="flex items-start gap-3 cursor-pointer">
      <input type="checkbox" required={required} className="mt-1 accent-[color:var(--partner-champagne-deep)]" checked={checked} onChange={(e) => onChange(e.target.checked)} />
      <span className="text-sm text-[color:var(--partner-ink)]">{label}{required && <span className="text-[color:var(--partner-champagne-deep)] ml-1">*</span>}</span>
    </label>
  );
}