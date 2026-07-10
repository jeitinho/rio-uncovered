import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { AUTHORS } from "@/content/authors";
import { CONTACT_EMAIL, INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/lib/site";
import { Instagram, Mail, User, MapPin } from "lucide-react";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "À propos — Jeitinho, le média francophone sur Rio" },
      { name: "description", content: "Qui écrit Jeitinho ? Une rédaction franco-brésilienne à cheval entre Rio et Paris. Notre ligne éditoriale et notre équipe." },
      { property: "og:title", content: "À propos — Jeitinho" },
      { property: "og:url", content: "/a-propos" },
    ],
    links: [{ rel: "canonical", href: "/a-propos" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  // On exclut l'auteur générique "L'Équipe Jeitinho" pour afficher les personnes.
  const team = AUTHORS.filter((a) => a.slug !== "equipe-jeitinho");

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* HERO */}
        <section className="border-b border-border/60">
          <div className="mx-auto max-w-3xl px-5 md:px-8 py-20 md:py-28">
            <p className="tracked-caps text-[10px] text-terracotta">À propos du média</p>
            <h1 className="mt-4 text-5xl md:text-6xl">
              Rio, <em>sans filtre</em> ni langue de bois.
            </h1>
            <div className="mt-10 space-y-5 text-lg leading-relaxed text-foreground/85">
              <p>
                Jeitinho est né d'une frustration simple : voir des voyageurs francophones débarquer à Rio avec les mêmes trois adresses et repartir sans avoir vraiment rencontré la ville.
              </p>
              <p>
                « Jeitinho », en portugais du Brésil, c'est l'art de trouver la manière — la petite ruse, l'astuce d'initié, la façon élégante de résoudre un problème. C'est l'esprit de ce média.
              </p>
            </div>
          </div>
        </section>

        {/* ÉQUIPE */}
        <section className="border-b border-border/60 bg-cream-deep/30">
          <div className="mx-auto max-w-6xl px-5 md:px-8 py-20 md:py-24">
            <p className="tracked-caps text-[10px] text-terracotta">Notre équipe</p>
            <h2 className="mt-3 text-4xl md:text-5xl">Les <em>plumes.</em></h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Une rédaction franco-brésilienne, à cheval entre Rio de Janeiro et Paris. Chaque auteur signe ses articles.
            </p>

            <div className="mt-12 grid gap-8 md:grid-cols-2">
              {team.map((a) => (
                <Link
                  key={a.slug}
                  to="/auteurs/$slug"
                  params={{ slug: a.slug }}
                  className="group flex gap-5 rounded-[3px] border border-border bg-background/60 p-6 hover:border-terracotta transition-colors"
                >
                  <div className="h-20 w-20 flex-none rounded-full bg-cream-deep flex items-center justify-center overflow-hidden">
                    {a.photo ? (
                      <img src={a.photo} alt={a.name} className="h-full w-full object-cover" />
                    ) : (
                      <User className="h-8 w-8 text-terracotta/60" />
                    )}
                  </div>
                  <div className="min-w-0">
                    <p className="tracked-caps text-[10px] text-terracotta">{a.role}</p>
                    <p className="mt-1 text-2xl group-hover:text-terracotta transition-colors">{a.name}</p>
                    <p className="mt-2 text-sm text-foreground/80 leading-relaxed">{a.longBio ?? a.bio}</p>
                    {a.location && (
                      <p className="mt-3 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                        <MapPin className="h-3 w-3" /> {a.location}
                      </p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* LIGNE ÉDITORIALE */}
        <section className="mx-auto max-w-3xl px-5 md:px-8 py-20">
          <p className="tracked-caps text-[10px] text-terracotta">Ligne éditoriale</p>
          <h2 className="mt-3 text-4xl md:text-5xl">Notre <em>engagement.</em></h2>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-foreground/85">
            <p>
              Aucune adresse ne nous rémunère pour figurer dans nos articles. Nos partenariats existent, mais ils sont toujours signalés.
            </p>
            <p>
              On préfère un « non » honnête à un « oui » de complaisance. Chaque article est signé — vous pouvez remonter à son auteur, à sa langue, à son expérience.
            </p>
          </div>
        </section>

        {/* CONTACT */}
        <section className="border-t border-border/60">
          <div className="mx-auto max-w-3xl px-5 md:px-8 py-16">
            <p className="tracked-caps text-[10px] text-terracotta">Nous écrire</p>
            <div className="mt-4 flex flex-col sm:flex-row gap-6 sm:items-center">
              <a href={`mailto:${CONTACT_EMAIL}`} className="inline-flex items-center gap-2 text-lg hover:text-terracotta transition-colors">
                <Mail className="h-4 w-4 text-terracotta" /> {CONTACT_EMAIL}
              </a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-lg hover:text-terracotta transition-colors">
                <Instagram className="h-4 w-4 text-terracotta" /> {INSTAGRAM_HANDLE}
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
