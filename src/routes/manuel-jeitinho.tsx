import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { CONTACT_EMAIL } from "@/lib/site";
import { BookOpen, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/manuel-jeitinho")({
  head: () => ({
    meta: [
      { title: "Le Manuel Jeitinho — Bientôt disponible" },
      { name: "description", content: "Le manuel de référence pour vivre Rio de Janeiro comme un carioca. En préparation par la rédaction Jeitinho." },
      { property: "og:title", content: "Le Manuel Jeitinho" },
      { property: "og:url", content: "/manuel-jeitinho" },
      { name: "robots", content: "noindex" },
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
        <section className="border-b border-border/60 bg-cream-deep/40">
          <div className="mx-auto max-w-5xl px-5 md:px-8 py-24 md:py-32">
            <p className="tracked-caps text-[10px] text-terracotta inline-flex items-center gap-2">
              <BookOpen className="h-3.5 w-3.5" /> En préparation
            </p>
            <h1 className="mt-5 text-5xl md:text-7xl leading-[1.05]">
              Le <em>Manuel Jeitinho</em>.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Le manuel de référence pour vivre Rio de Janeiro comme un carioca. Bientôt disponible.
            </p>
          </div>
        </section>

        {/* PRÉSENTATION */}
        <section className="mx-auto max-w-3xl px-5 md:px-8 py-20">
          <p className="tracked-caps text-[10px] text-terracotta">Présentation</p>
          <h2 className="mt-3 text-3xl md:text-4xl">Qu'est-ce que le <em>Manuel Jeitinho ?</em></h2>
          <p className="mt-6 text-lg text-foreground/85 leading-relaxed">
            La rédaction prépare une édition longue, condensée et sans concession : la synthèse de plusieurs années d'expérience sur le terrain à Rio. Les détails éditoriaux, le format et la date de sortie seront communiqués prochainement.
          </p>
        </section>

        {/* AVANTAGES — placeholders structurels non-fictifs */}
        <section className="border-y border-border/60 bg-cream-deep/30">
          <div className="mx-auto max-w-5xl px-5 md:px-8 py-20">
            <p className="tracked-caps text-[10px] text-terracotta">Ce que contiendra le manuel</p>
            <h2 className="mt-3 text-3xl md:text-4xl">Les <em>bénéfices</em>.</h2>
            <p className="mt-6 max-w-2xl text-muted-foreground">
              Le sommaire détaillé sera publié à la sortie du manuel. Inscrivez-vous par email pour être prévenu·e en avant-première.
            </p>
          </div>
        </section>

        {/* APERÇU */}
        <section className="mx-auto max-w-3xl px-5 md:px-8 py-20">
          <p className="tracked-caps text-[10px] text-terracotta">Aperçu</p>
          <h2 className="mt-3 text-3xl md:text-4xl">Un <em>extrait</em> à venir.</h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Un chapitre d'exemple sera publié ici en libre accès dès qu'il sera prêt.
          </p>
        </section>

        {/* FAQ */}
        <section className="border-y border-border/60 bg-cream-deep/30">
          <div className="mx-auto max-w-3xl px-5 md:px-8 py-20">
            <p className="tracked-caps text-[10px] text-terracotta">Questions fréquentes</p>
            <h2 className="mt-3 text-3xl md:text-4xl">FAQ.</h2>
            <div className="mt-8 divide-y divide-border">
              <div className="py-5">
                <p className="font-serif text-lg">Quand sortira le Manuel Jeitinho ?</p>
                <p className="mt-2 text-muted-foreground">La date de sortie sera communiquée par email et sur ce blog.</p>
              </div>
              <div className="py-5">
                <p className="font-serif text-lg">Sous quel format sera-t-il proposé ?</p>
                <p className="mt-2 text-muted-foreground">Les formats disponibles seront précisés à la sortie.</p>
              </div>
              <div className="py-5">
                <p className="font-serif text-lg">Comment être prévenu·e en avant-première ?</p>
                <p className="mt-2 text-muted-foreground">
                  Écrivez-nous à <a href={`mailto:${CONTACT_EMAIL}`} className="text-terracotta underline decoration-terracotta/40 underline-offset-4">{CONTACT_EMAIL}</a> pour rejoindre la liste d'attente.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-3xl px-5 md:px-8 py-24">
          <div className="rounded-[3px] bg-ink text-cream p-10 md:p-12 text-center">
            <p className="tracked-caps text-[10px] text-peach">Rester informé·e</p>
            <h2 className="mt-4 text-3xl md:text-4xl text-cream">
              Soyez prévenu·e <em className="text-peach">en avant-première</em>.
            </h2>
            <p className="mt-4 text-cream/80">
              Un simple email suffit — on vous écrit quand le manuel sort.
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=Manuel%20Jeitinho%20—%20Liste%20d'attente`}
              className="mt-8 inline-flex items-center gap-2 rounded-[3px] bg-peach px-7 py-4 tracked-caps text-xs text-ink hover:opacity-90 transition-opacity"
            >
              Écrire à {CONTACT_EMAIL} <ArrowRight className="h-3 w-3" />
            </a>
          </div>
          <p className="mt-8 text-center">
            <Link to="/blog" className="tracked-caps text-xs text-terracotta">← Retour au blog</Link>
          </p>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
