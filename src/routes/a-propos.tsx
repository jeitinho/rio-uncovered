import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "À propos — Jeitinho, locaux passionnés à Rio" },
      { name: "description", content: "Qui sommes-nous ? Locaux passionnés de Rio, nous accompagnons les voyageurs francophones à découvrir la ville autrement." },
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
        <p className="tracked-caps text-[10px] text-terracotta">À propos</p>
        <h1 className="mt-4 text-5xl md:text-6xl">
          On croit qu'un voyage <em>bien fait</em> change quelqu'un.
        </h1>

        <div className="mt-12 prose-jeitinho">
          <p>
            Jeitinho est né d'une frustration simple : celle de voir des voyageurs francophones débarquer à Rio avec les mêmes trois adresses et repartir sans avoir vraiment rencontré la ville.
          </p>
          <p>
            « Jeitinho », en portugais du Brésil, c'est l'art de trouver la manière — la petite ruse, l'astuce d'initié, la façon élégante de résoudre un problème. C'est ce qu'on offre.
          </p>
          <h2>Notre équipe</h2>
          <p>
            Marina est née à Rio. Camille est française, installée depuis dix ans. Rafael est photographe, guide de rando, supporter du Fluminense. Ensemble, on est cinq — et on connaît chaque coin de rue dont on vous parle.
          </p>
          <h2>Notre engagement</h2>
          <p>
            Aucune adresse ne nous rémunère pour figurer dans nos guides. Nos partenariats avec des restaurants ou des hôtels existent, mais ils sont toujours mentionnés. On préfère un « non » honnête à un « oui » de complaisance.
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
