import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { getAllArticles } from "@/content";
import { ArticleCard } from "@/components/blog/ArticleCard";
import { BlogSearch } from "@/components/blog/BlogSearch";
import { z } from "zod";
import { useMemo } from "react";
import Fuse from "fuse.js";

const searchSchema = z.object({ q: z.string().optional().default("") });

export const Route = createFileRoute("/blog/recherche")({
  validateSearch: (s) => searchSchema.parse(s),
  head: () => ({
    meta: [
      { title: "Rechercher — Le Guide Jeitinho" },
      { name: "description", content: "Recherchez dans nos guides sur Rio de Janeiro." },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/blog/recherche" }],
  }),
  component: SearchPage,
});

function SearchPage() {
  const { q } = Route.useSearch();
  const all = getAllArticles();

  const fuse = useMemo(() => new Fuse(all, { keys: ["title", "description", "tags"], threshold: 0.4 }), [all]);
  const results = useMemo(() => (q ? fuse.search(q).map((r) => r.item) : []), [q, fuse]);

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-5 md:px-8 py-16 md:py-20 flex-1">
        <p className="tracked-caps text-[10px] text-terracotta">Recherche</p>
        <h1 className="mt-3 text-4xl md:text-5xl">Chercher un <em>guide.</em></h1>
        <div className="mt-8"><BlogSearch /></div>

        {q && (
          <div className="mt-10">
            <p className="text-sm text-muted-foreground">
              {results.length} résultat{results.length > 1 ? "s" : ""} pour « {q} »
            </p>
            <div className="mt-6 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {results.map((a) => <ArticleCard key={a.slug} article={a} />)}
            </div>
          </div>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}
