import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { MANUEL_URL } from "@/lib/site";
import { ArrowRight, BookOpen } from "lucide-react";

export const Route = createFileRoute("/manuel-jeitinho")({
  head: () => ({
    meta: [
      { title: "Le Manuel Jeitinho — Guide numérique pour vivre Rio" },
      { name: "description", content: "Le Manuel Jeitinho est un guide numérique pour préparer et vivre son séjour à Rio de Janeiro. Prix : 30€. Disponible sur jeitinho.fr." },
      { property: "og:title", content: "Le Manuel Jeitinho — Guide numérique pour vivre Rio" },
      { property: "og:description", content: "Le guide numérique pour préparer et vivre son séjour à Rio de Janeiro. 30€ — disponible sur jeitinho.fr." },
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
              <BookOpen className="h-3.5 w-3.5" /> Guide numérique
            </p>
            <h1 className="mt-5 text-5xl md:text-7xl leading-[1.05] text-cream">
              Le <em className="italic font-light text-peach">Manuel Jeitinho</em>.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-cream/85 leading-relaxed">
              Le guide numérique de référence pour préparer son séjour à Rio de Janeiro et vivre la ville comme un carioca. Conçu par l'équipe Jeitinho.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <a
                href={MANUEL_URL}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-[3px] bg-peach px-7 py-4 tracked-caps text-xs text-ink hover:opacity-90 transition-opacity"
              >
                Acheter le Manuel — 30€ <ArrowRight className="h-3 w-3" />
              </a>
              <p className="text-cream/70 text-sm">
                Accès immédiat après l'achat.
              </p>
            </div>
          </div>
        </section>

        {/* PRÉSENTATION */}
        <section className="mx-auto max-w-3xl px-5 md:px-8 py-20 md:py-28">
          <p className="tracked-caps text-[10px] text-terracotta">Présentation</p>
          <h2 className="mt-3 text-3xl md:text-4xl">Un guide pour <em>préparer et vivre</em> Rio.</h2>
          <div className="mt-8 space-y-5 text-lg text-foreground/85 leading-relaxed">
            <p>
              Le Manuel Jeitinho condense plusieurs années d'expérience sur le terrain en un guide numérique pratique. Son objectif : vous aider à arriver à Rio avec le bon état d'esprit, les bonnes adresses et les bons réflexes.
            </p>
            <p>
              Que vous partiez pour une première semaine ou que vous envisagiez de passer plus de temps dans la ville, le manuel vous accompagne dans les grandes étapes — avant le départ, à l'arrivée, et au quotidien.
            </p>
          </div>
        </section>

        {/* PRIX / CTA */}
        <section className="border-y border-border/60 bg-cream-deep/30">
          <div className="mx-auto max-w-3xl px-5 md:px-8 py-20 text-center">
            <p className="tracked-caps text-[10px] text-terracotta">Prix</p>
            <p className="mt-4 text-5xl md:text-6xl font-light">30€</p>
            <p className="mt-3 text-muted-foreground">Guide numérique, accès immédiat.</p>
            <a
              href={MANUEL_URL}
              target="_blank"
              rel="noopener"
              className="mt-8 inline-flex items-center gap-2 rounded-[3px] bg-primary px-7 py-4 tracked-caps text-xs text-primary-foreground hover:bg-terracotta-deep transition-colors"
            >
              Acheter le Manuel — 30€ <ArrowRight className="h-3 w-3" />
            </a>
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
