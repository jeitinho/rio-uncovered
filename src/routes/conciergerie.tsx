import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

export const Route = createFileRoute("/conciergerie")({
  head: () => ({
    meta: [
      { title: "Conciergerie à Rio — Jeitinho" },
      { name: "description", content: "Notre conciergerie à Rio : réservations, transferts, adresses, ajustements en temps réel. Un local à votre écoute pendant tout votre séjour." },
      { property: "og:title", content: "Conciergerie à Rio — Jeitinho" },
      { property: "og:url", content: "/conciergerie" },
    ],
    links: [{ rel: "canonical", href: "/conciergerie" }],
  }),
  component: ConciergeriePage,
});

function ConciergeriePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-5 md:px-8 py-20 md:py-28 flex-1">
        <p className="tracked-caps text-[10px] text-terracotta">Conciergerie</p>
        <h1 className="mt-4 text-5xl md:text-6xl">Un local <em>à votre écoute,</em> tout au long du séjour.</h1>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          Réservations de restaurants, transferts, billets, ajustements imprévus, urgences : on s'occupe de tout, sur WhatsApp, avec le tact et la réactivité d'un ami sur place.
        </p>

        <div className="mt-16 space-y-10">
          {[
            { title: "Avant le départ", text: "Un appel de préparation, l'itinéraire affiné, les réservations sensibles bookées." },
            { title: "Pendant le séjour", text: "WhatsApp direct 7j/7. Une envie, une question, un changement : réponse dans l'heure." },
            { title: "Sur mesure, jamais standardisé", text: "Chaque conciergerie est unique. Nos honoraires dépendent du périmètre — on en parle." },
          ].map((s) => (
            <div key={s.title} className="border-l-2 border-terracotta pl-6">
              <h2 className="text-2xl">{s.title}</h2>
              <p className="mt-2 text-muted-foreground leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>

        <Link to="/contact" className="mt-16 inline-flex rounded-[3px] bg-primary px-7 py-4 tracked-caps text-xs text-primary-foreground hover:bg-terracotta-deep transition-colors">
          Nous contacter →
        </Link>
      </main>
      <SiteFooter />
    </div>
  );
}
