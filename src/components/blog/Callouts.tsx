import type { ReactNode } from "react";
import { Lightbulb, AlertTriangle, Info } from "lucide-react";
import { useDict } from "@/i18n/t";

const dict = {
  fr: { conseil: "Le conseil Jeitinho", aeviter: "À éviter", bonasavoir: "Bon à savoir" },
  en: { conseil: "The Jeitinho tip", aeviter: "Avoid", bonasavoir: "Good to know" },
  es: { conseil: "El consejo Jeitinho", aeviter: "Evita", bonasavoir: "Conviene saber" },
  pt: { conseil: "A dica Jeitinho", aeviter: "Evite", bonasavoir: "Bom saber" },
  it: { conseil: "Il consiglio Jeitinho", aeviter: "Da evitare", bonasavoir: "Buono a sapersi" },
  de: { conseil: "Der Jeitinho-Tipp", aeviter: "Besser vermeiden", bonasavoir: "Gut zu wissen" },
  ru: { conseil: "Совет Jeitinho", aeviter: "Чего избегать", bonasavoir: "Полезно знать" },
};

export function ConseilJeitinho({ title, children }: { title?: string; children: ReactNode }) {
  const t = useDict(dict);
  return (
    <aside className="my-8 rounded-[3px] border-l-4 border-terracotta bg-cream-deep/60 px-6 py-5">
      <p className="tracked-caps text-[10px] text-terracotta flex items-center gap-2">
        <Lightbulb className="h-3.5 w-3.5" /> {title ?? t.conseil}
      </p>
      <div className="mt-2 text-foreground leading-relaxed">{children}</div>
    </aside>
  );
}

export function AEviter({ title, children }: { title?: string; children: ReactNode }) {
  const t = useDict(dict);
  return (
    <aside className="my-8 rounded-[3px] border-l-4 border-destructive bg-destructive/8 px-6 py-5">
      <p className="tracked-caps text-[10px] text-destructive flex items-center gap-2">
        <AlertTriangle className="h-3.5 w-3.5" /> {title ?? t.aeviter}
      </p>
      <div className="mt-2 text-foreground leading-relaxed">{children}</div>
    </aside>
  );
}

export function BonASavoir({ title, children }: { title?: string; children: ReactNode }) {
  const t = useDict(dict);
  return (
    <aside className="my-8 rounded-[3px] border-l-4 border-accent bg-accent/25 px-6 py-5">
      <p className="tracked-caps text-[10px] text-terracotta-deep flex items-center gap-2">
        <Info className="h-3.5 w-3.5" /> {title ?? t.bonasavoir}
      </p>
      <div className="mt-2 text-foreground leading-relaxed">{children}</div>
    </aside>
  );
}
