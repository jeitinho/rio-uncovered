import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import logo from "@/assets/jeitinho-logo.png";
import { LanguageProvider, useLang, type Lang } from "@/lib/i18n";
import { PartnerForm } from "@/components/partenaires/PartnerForm";
import { pt } from "@/content/partenaires/i18n.pt";
import { fr } from "@/content/partenaires/i18n.fr";
import {
  Eye, Users, BookOpen, Camera, Search, CalendarDays,
  MessageCircle, Instagram, Newspaper, Sparkles, Handshake,
} from "lucide-react";

export const Route = createFileRoute("/partenaires")({
  head: () => ({
    meta: [
      { title: pt.meta.title },
      { name: "description", content: pt.meta.description },
      { property: "og:title", content: pt.meta.title },
      { property: "og:description", content: pt.meta.description },
      { property: "og:url", content: "https://blog.jeitinho.fr/partenaires" },
    ],
    links: [{ rel: "canonical", href: "https://blog.jeitinho.fr/partenaires" }],
  }),
  component: PartenairesPage,
});

const WHATSAPP_URL = "https://chat.whatsapp.com/";

const OFFER_ICONS = [Eye, Users, BookOpen, Camera, Search, CalendarDays, MessageCircle, Instagram, Newspaper, Handshake, Sparkles];

function PartenairesPage() {
  return (
    <LanguageProvider defaultLang="pt">
      <PageInner />
    </LanguageProvider>
  );
}

function PageInner() {
  const { t, lang, setLang } = useLang();
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  // update <title> per language
  useEffect(() => {
    const d = lang === "pt" ? pt : fr;
    if (typeof document !== "undefined") {
      document.title = d.meta.title;
      document.documentElement.setAttribute("lang", lang);
      const desc = document.querySelector('meta[name="description"]');
      if (desc) desc.setAttribute("content", d.meta.description);
    }
  }, [lang]);

  const scrollToForm = () => formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <div
      className="min-h-screen"
      style={{
        // Palette scoped to this route only
        // @ts-expect-error CSS custom properties
        "--partner-ivory": "#FBF6EC",
        "--partner-ivory-deep": "#F3EBD9",
        "--partner-champagne": "#C9A45C",
        "--partner-champagne-deep": "#A9823F",
        "--partner-ink": "#1F1A12",
        backgroundColor: "var(--partner-ivory)",
        color: "var(--partner-ink)",
      }}
    >
      <TopBar lang={lang} setLang={setLang} back={t.nav.back} />

      {/* HERO */}
      <section className="px-6 pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="mx-auto max-w-4xl text-center">
          <img src={logo} alt="Jeitinho" className="mx-auto h-16 md:h-20 w-auto opacity-90" />
          <h1 className="mt-10 font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight">
            {t.hero.title}
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg md:text-xl text-[color:var(--partner-ink)]/75 leading-relaxed">
            {t.hero.subtitle}
          </p>
          <button
            onClick={scrollToForm}
            className="mt-12 inline-flex items-center justify-center rounded-[3px] bg-[color:var(--partner-ink)] px-8 py-4 text-sm uppercase tracking-[0.16em] text-[color:var(--partner-ivory)] hover:bg-[color:var(--partner-champagne-deep)] transition-colors"
          >
            {t.hero.cta}
          </button>
        </div>
      </section>

      {/* WHY */}
      <Section alt>
        <SectionEyebrow>01</SectionEyebrow>
        <h2 className="font-serif text-3xl md:text-5xl leading-tight max-w-3xl">{t.why.title}</h2>
        <p className="mt-8 max-w-3xl text-lg text-[color:var(--partner-ink)]/80 leading-relaxed">{t.why.body}</p>
      </Section>

      {/* OFFER */}
      <Section>
        <SectionEyebrow>02</SectionEyebrow>
        <h2 className="font-serif text-3xl md:text-5xl leading-tight max-w-3xl">{t.offer.title}</h2>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.offer.items.map((item, i) => {
            const Icon = OFFER_ICONS[i % OFFER_ICONS.length];
            return (
              <div
                key={item}
                className="group rounded-[3px] border border-[color:var(--partner-champagne)]/30 bg-white/40 px-6 py-6 flex items-center gap-4 hover:border-[color:var(--partner-champagne-deep)] hover:bg-white/70 transition-all"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--partner-champagne)]/50">
                  <Icon size={18} className="text-[color:var(--partner-champagne-deep)]" />
                </div>
                <span className="font-serif text-lg text-[color:var(--partner-ink)]">{item}</span>
              </div>
            );
          })}
        </div>
      </Section>

      {/* LEVELS */}
      <Section alt>
        <SectionEyebrow>03</SectionEyebrow>
        <h2 className="font-serif text-3xl md:text-5xl leading-tight max-w-3xl">{t.levels.title}</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {t.levels.items.map((lvl, i) => {
            const isSoon = i === 3;
            return (
              <div
                key={lvl.name}
                className={`rounded-[3px] border p-8 flex flex-col ${
                  isSoon
                    ? "border-[color:var(--partner-champagne-deep)] bg-[color:var(--partner-ink)] text-[color:var(--partner-ivory)]"
                    : "border-[color:var(--partner-champagne)]/40 bg-white/50"
                }`}
              >
                {isSoon && (
                  <span className="self-start rounded-full border border-[color:var(--partner-champagne)] px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-[color:var(--partner-champagne)] mb-6">
                    {t.levels.soon}
                  </span>
                )}
                <h3 className={`font-serif text-xl leading-tight ${isSoon ? "text-[color:var(--partner-ivory)]" : "text-[color:var(--partner-ink)]"}`}>
                  {lvl.name}
                </h3>
                <p className={`mt-5 text-sm leading-relaxed ${isSoon ? "text-[color:var(--partner-ivory)]/80" : "text-[color:var(--partner-ink)]/75"}`}>
                  {lvl.body}
                </p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* PHILOSOPHY */}
      <Section>
        <SectionEyebrow>04</SectionEyebrow>
        <h2 className="font-serif text-3xl md:text-5xl leading-tight max-w-3xl">{t.philosophy.title}</h2>
        <p className="mt-8 max-w-3xl font-serif italic text-xl md:text-2xl text-[color:var(--partner-ink)]/85 leading-relaxed">
          {t.philosophy.body}
        </p>
      </Section>

      {/* FORM / THANKS */}
      <section
        ref={formRef}
        id="form"
        className="px-6 py-20 md:py-28"
        style={{ backgroundColor: "var(--partner-ivory-deep)" }}
      >
        <div className="mx-auto max-w-3xl">
          {submitted ? (
            <ThanksScreen />
          ) : (
            <>
              <SectionEyebrow>05</SectionEyebrow>
              <h2 className="font-serif text-3xl md:text-5xl leading-tight">{t.form.title}</h2>
              <div className="mt-12">
                <PartnerForm onSuccess={() => { setSubmitted(true); window.scrollTo({ top: formRef.current?.offsetTop ?? 0, behavior: "smooth" }); }} />
              </div>
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

function TopBar({ lang, setLang, back }: { lang: Lang; setLang: (l: Lang) => void; back: string }) {
  return (
    <div className="sticky top-0 z-30 backdrop-blur-md" style={{ backgroundColor: "color-mix(in oklab, var(--partner-ivory) 85%, transparent)" }}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="/" className="text-xs uppercase tracking-[0.16em] text-[color:var(--partner-ink)]/70 hover:text-[color:var(--partner-champagne-deep)] transition-colors">
          ← {back}
        </a>
        <div className="flex items-center gap-1 rounded-full border border-[color:var(--partner-champagne)]/40 bg-white/60 px-1 py-1">
          {(["pt", "fr"] as Lang[]).map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={`px-3 py-1 text-xs uppercase tracking-[0.14em] rounded-full transition-colors ${
                lang === l
                  ? "bg-[color:var(--partner-ink)] text-[color:var(--partner-ivory)]"
                  : "text-[color:var(--partner-ink)]/60 hover:text-[color:var(--partner-ink)]"
              }`}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function Section({ children, alt }: { children: React.ReactNode; alt?: boolean }) {
  return (
    <section
      className="px-6 py-20 md:py-28"
      style={alt ? { backgroundColor: "var(--partner-ivory-deep)" } : undefined}
    >
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-6 text-xs uppercase tracking-[0.24em] text-[color:var(--partner-champagne-deep)]">
      — {children}
    </p>
  );
}

function ThanksScreen() {
  const { t } = useLang();
  return (
    <div className="text-center py-8">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[color:var(--partner-champagne-deep)]">
        <Sparkles size={22} className="text-[color:var(--partner-champagne-deep)]" />
      </div>
      <h2 className="mt-8 font-serif text-4xl md:text-5xl">{t.thanks.title}</h2>
      <p className="mx-auto mt-6 max-w-xl text-lg text-[color:var(--partner-ink)]/75 leading-relaxed">
        {t.thanks.body}
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-3">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-[3px] bg-[color:var(--partner-ink)] px-6 py-3 text-xs uppercase tracking-[0.14em] text-[color:var(--partner-ivory)] hover:bg-[color:var(--partner-champagne-deep)] transition-colors"
        >
          {t.thanks.ctaWhatsapp}
        </a>
        <a
          href="/blog"
          className="rounded-[3px] border border-[color:var(--partner-ink)] px-6 py-3 text-xs uppercase tracking-[0.14em] text-[color:var(--partner-ink)] hover:bg-white/60 transition-colors"
        >
          {t.thanks.ctaBlog}
        </a>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="px-6 py-10 border-t border-[color:var(--partner-champagne)]/30">
      <div className="mx-auto max-w-6xl text-xs uppercase tracking-[0.16em] text-[color:var(--partner-ink)]/60 text-center">
        © Jeitinho — blog.jeitinho.fr
      </div>
    </footer>
  );
}
