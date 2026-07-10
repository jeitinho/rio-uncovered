import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { AUTHORS } from "@/content/authors";
import { getAllArticles } from "@/content";
import { User } from "lucide-react";

export const Route = createFileRoute("/auteurs/")({
  head: () => ({
    meta: [
      { title: "Notre équipe — Les auteurs du blog Jeitinho" },
      { name: "description", content: "Découvrez l'équipe éditoriale de Jeitinho : locaux, expatriés et amoureux de Rio de Janeiro qui écrivent le média." },
      { property: "og:title", content: "Notre équipe — Jeitinho" },
      { property: "og:url", content: "/auteurs" },
    ],
    links: [{ rel: "canonical", href: "/auteurs" }],
  }),
  component: AuthorsIndex,
});

function AuthorsIndex() {
  const all = getAllArticles();
  const counts = new Map<string, number>();
  for (const a of all) counts.set(a.author, (counts.get(a.author) ?? 0) + 1);

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-5 md:px-8 py-20 md:py-28 flex-1">
        <p className="tracked-caps text-[10px] text-terracotta">Notre équipe</p>
        <h1 className="mt-4 text-5xl md:text-6xl">Les <em>plumes</em> de Jeitinho.</h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          Une rédaction franco-brésilienne, à cheval entre Rio de Janeiro et Paris. Des regards complémentaires : locale, expatriée, entrepreneuse, fondateur.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {AUTHORS.map((a) => (
            <Link
              key={a.slug}
              to="/auteurs/$slug"
              params={{ slug: a.slug }}
              className="group flex gap-5 rounded-[3px] border border-border p-6 hover:border-terracotta transition-colors"
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
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-3">{a.bio}</p>
                <p className="mt-3 text-xs text-muted-foreground">
                  {counts.get(a.slug) ?? 0} article{(counts.get(a.slug) ?? 0) > 1 ? "s" : ""}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
