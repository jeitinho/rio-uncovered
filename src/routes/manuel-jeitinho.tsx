import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { MANUEL_URL, MANUEL_READER_URL } from "@/lib/site";
import { ArrowRight, BookOpen, Check } from "lucide-react";

const TITLE = "Le Manuel JEITINHO — Le guide de Rio de Janeiro (79 pages)";
const DESCRIPTION =
  "Le guide numérique de Rio écrit par une équipe locale : quartiers, sécurité, plages, sorties, itinéraires. 79 pages en 4 langues, accès 12 mois, 30 €.";

const SOMMAIRE = [
  "Préparer son voyage",
  "Comprendre Rio et s'y déplacer",
  "Les quartiers, un par un",
  "Favelas : le contexte à connaître",
  "Choisir sa plage",
  "Manger à la carioca",
  "La nuit à Rio",
  "Expériences et excursions",
  "Prolonger vers le Nordeste",
  "Infos pratiques",
  "Itinéraires prêts à l'emploi (3, 5 et 7 jours)",
  "Checklists et bonus",
];

export const Route = createFileRoute("/manuel-jeitinho")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/manuel-jeitinho" },
    ],
    links: [{ rel: "canonical", href: "/manuel-jeitinho" }],
  }),
  component: ManuelJeitinho,
});

function ManuelJeitinho() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* HERO */}
        <section className="bg-ink text-cream">
          <div className="mx-auto max-w-5xl px-5 md:px-8 py-24 md:py-32">
            <p className="tracked-caps text-[10px] text-peach inline-flex items-center gap-2">
              <BookOpen className="h-3.5 w-3.5" /> LE GUIDE JEITINHO
            </p>
            <h1 className="mt-5 text-5xl md:text-7xl leading-[1.05] text-cream">
              Le <em className="italic font-light text-peach">Manuel JEITINHO</em>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-cream/85 leading-relaxed">
              Tout ce qu'on aurait aimé savoir avant d'arriver à Rio, réuni dans un seul guide.
            </p>
            <p className="mt-5 tracked-caps text-[11px] text-cream/70">
              79 pages · Français, English, Español, Português · Accès 12 mois · 30 €
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <a
                href={MANUEL_URL}
                className="inline-flex items-center gap-2 rounded-[3px] bg-peach px-7 py-4 tracked-caps text-xs text-ink hover:opacity-90 transition-opacity"
              >
                Découvrir le Manuel — 30 € <ArrowRight className="h-3 w-3" />
              </a>
              <a
                href={MANUEL_READER_URL}
                className="text-sm text-cream/80 underline decoration-peach underline-offset-4 hover:text-cream transition-colors"
              >
                Déjà un code d'accès ? Ouvrir le Manuel
              </a>
            </div>
          </div>
        </section>

        {/* INTRO + SOMMAIRE */}
        <section className="mx-auto max-w-3xl px-5 md:px-8 py-20 md:py-28">
          <p className="text-lg text-foreground/85 leading-relaxed">
            Écrit par une équipe qui vit à Rio, le Manuel vous aide à comprendre la ville avant d'y poser le pied : choisir son quartier, se déplacer, éviter les pièges, trouver les bonnes plages, les bonnes tables et les bonnes soirées.
          </p>

          <p className="mt-14 tracked-caps text-[10px] text-terracotta">Au sommaire</p>
          <ul className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {SOMMAIRE.map((item) => (
              <li key={item} className="flex gap-3 text-foreground/85 leading-snug">
                <Check className="mt-0.5 h-4 w-4 flex-none text-terracotta" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <section className="border-y border-border/60 bg-cream-deep/30">
          <div className="mx-auto max-w-3xl px-5 md:px-8 py-20 text-center">
            <p className="tracked-caps text-[11px] text-muted-foreground">
              79 pages · Français, English, Español, Português · Accès 12 mois · 30 €
            </p>
            <a
              href={MANUEL_URL}
              className="mt-8 inline-flex items-center gap-2 rounded-[3px] bg-primary px-7 py-4 tracked-caps text-xs text-primary-foreground hover:bg-terracotta-deep transition-colors"
            >
              Découvrir le Manuel — 30 € <ArrowRight className="h-3 w-3" />
            </a>
            <p className="mt-6">
              <a
                href={MANUEL_READER_URL}
                className="text-sm text-terracotta underline underline-offset-4 hover:text-terracotta-deep transition-colors"
              >
                Déjà un code d'accès ? Ouvrir le Manuel
              </a>
            </p>
          </div>
        </section>

        {/* RETOUR */}
        <section className="mx-auto max-w-3xl px-5 md:px-8 py-16 text-center">
          <Link to="/blog" className="tracked-caps text-xs text-terracotta hover:text-terracotta-deep transition-colors">
            ← Retour aux articles
          </Link>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
