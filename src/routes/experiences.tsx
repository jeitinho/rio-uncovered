import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

const EXPERIENCES = [
  { slug: "christ-redempteur", title: "Christ Rédempteur au lever du soleil", teaser: "Le monument avant les foules, avec un local qui connaît les meilleurs points de vue." },
  { slug: "city-tour-prive", title: "City tour privé", teaser: "Une matinée pour saisir Rio : Zona Sul, Santa Teresa, Lapa, Centro." },
  { slug: "maracana", title: "Match au Maracanã", teaser: "On choisit le meilleur match de la semaine et on vous accompagne." },
  { slug: "ilha-grande", title: "Escapade à Ilha Grande", teaser: "Trois jours d'île sans voitures. Plages, jungle, silence." },
  { slug: "paraty", title: "Weekend à Paraty", teaser: "Colonial, forêt atlantique, cachaça artisanale." },
  { slug: "arraial-do-cabo", title: "Arraial do Cabo", teaser: "Les Caraïbes brésiliennes en journée." },
  { slug: "buzios", title: "Búzios", teaser: "Le weekend chic à deux heures de Rio." },
  { slug: "dois-irmaos", title: "Randonnée Dois Irmãos", teaser: "40 minutes de montée, la plus belle vue sur Ipanema." },
];

export const Route = createFileRoute("/experiences")({
  head: () => ({
    meta: [
      { title: "Expériences Jeitinho — Rio de Janeiro" },
      { name: "description", content: "Nos expériences sur mesure à Rio : Christ Rédempteur, Maracanã, City tour, Ilha Grande, Paraty, Búzios." },
      { property: "og:title", content: "Expériences Jeitinho — Rio de Janeiro" },
      { property: "og:description", content: "Christ Rédempteur, Maracanã, Ilha Grande, Paraty… Nos expériences signées Jeitinho." },
      { property: "og:url", content: "/experiences" },
    ],
    links: [{ rel: "canonical", href: "/experiences" }],
  }),
  component: ExperiencesPage,
});

function ExperiencesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-5 md:px-8 py-20 md:py-28 flex-1">
        <p className="tracked-caps text-[10px] text-terracotta">Nos expériences</p>
        <h1 className="mt-4 text-5xl md:text-6xl max-w-3xl">
          Le Brésil <em>vécu,</em> pas visité.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          Chaque expérience est construite avec un local qui la connaît sur le bout des doigts. On adapte, on affine, on vous emmène.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {EXPERIENCES.map((e) => (
            <div key={e.slug} className="group rounded-[3px] border border-border p-7 hover:border-terracotta transition-colors">
              <h2 className="text-2xl leading-tight">{e.title}</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">{e.teaser}</p>
              <Link to="/contact" className="mt-6 inline-flex tracked-caps text-[10px] text-terracotta group-hover:gap-2 gap-1 transition-all">
                Demander un devis →
              </Link>
            </div>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
