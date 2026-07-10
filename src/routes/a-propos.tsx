import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "À propos — Jeitinho, le blog sur Rio par des locaux" },
      { name: "description", content: "Qui écrit Jeitinho ? Une équipe de locaux passionnés qui partagent Rio de Janeiro sans langue de bois." },
      { property: "og:title", content: "À propos — Jeitinho" },
      { property: "og:url", content: "/a-propos" },
    ],
    links: [{ rel: "canonical", href: "/a-propos" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-5 md:px-8 py-20 md:py-28 flex-1">
        <p className="tracked-caps text-[10px] text-terracotta">À propos du blog</p>
        <h1 className="mt-4 text-5xl md:text-6xl">
          Rio, <em>sans filtre</em> ni langue de bois.
        </h1>

        <div className="mt-12 prose-jeitinho space-y-6 text-lg leading-relaxed">
          <p>
            Jeitinho est né d'une frustration simple : voir des voyageurs francophones débarquer à Rio avec les mêmes trois adresses et repartir sans avoir vraiment rencontré la ville.
          </p>
          <p>
            « Jeitinho », en portugais du Brésil, c'est l'art de trouver la manière — la petite ruse, l'astuce d'initié, la façon élégante de résoudre un problème. C'est l'esprit de ce blog.
          </p>
          <h2 className="text-3xl mt-10">Ce que vous trouverez ici</h2>
          <p>
            Des <strong>guides pratiques</strong> écrits sur le terrain, des <strong>reviews honnêtes</strong> de restaurants, hôtels et expériences, des <strong>interviews</strong> de cariocas — artisans, musiciens, guides — et des <strong>histoires</strong> qui racontent la ville autrement.
          </p>
          <h2 className="text-3xl mt-10">Notre équipe</h2>
          <p>
            Marina est née à Rio. Camille est française, installée depuis dix ans. Rafael est photographe et supporter du Fluminense. On est cinq à écrire, et on connaît chaque rue dont on parle.
          </p>
          <h2 className="text-3xl mt-10">Notre engagement éditorial</h2>
          <p>
            Aucune adresse ne nous rémunère pour figurer dans nos articles. Nos partenariats existent, mais ils sont toujours signalés. On préfère un « non » honnête à un « oui » de complaisance.
          </p>
          <p className="text-muted-foreground text-base pt-6 border-t border-border">
            Vous souhaitez organiser votre séjour ? Notre équipe propose un service de conciergerie sur <a href="https://www.jeitinho.fr" target="_blank" rel="noopener" className="text-terracotta underline decoration-terracotta/40 underline-offset-4">jeitinho.fr</a>.
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
