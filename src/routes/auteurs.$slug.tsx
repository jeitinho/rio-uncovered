import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { getAuthorBySlug } from "@/content/authors";
import { getAllArticles } from "@/content";
import { ArticleCard } from "@/components/blog/ArticleCard";
import { Instagram, Twitter, Linkedin, Globe, MapPin, User } from "lucide-react";

export const Route = createFileRoute("/auteurs/$slug")({
  loader: ({ params }) => {
    const a = getAuthorBySlug(params.slug);
    if (!a) throw notFound();
    return { author: a };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Auteur introuvable" }, { name: "robots", content: "noindex" }] };
    const a = loaderData.author;
    return {
      meta: [
        { title: `${a.name} — Auteur Jeitinho` },
        { name: "description", content: a.bio },
        { property: "og:title", content: `${a.name} — Jeitinho` },
        { property: "og:description", content: a.bio },
        { property: "og:url", content: `/auteurs/${params.slug}` },
        { property: "og:type", content: "profile" },
      ],
      links: [{ rel: "canonical", href: `/auteurs/${params.slug}` }],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 flex items-center justify-center px-6 py-24">
        <div className="max-w-md text-center">
          <p className="tracked-caps text-xs text-terracotta">Erreur 404</p>
          <h1 className="mt-6 text-4xl">Auteur introuvable.</h1>
          <Link to="/auteurs" className="mt-8 inline-block tracked-caps text-xs text-terracotta">← Toute l'équipe</Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  ),
  component: AuthorPage,
});

function AuthorPage() {
  const { author } = Route.useLoaderData();
  const articles = getAllArticles().filter((a) => a.author === author.slug);

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="border-b border-border/60 bg-cream-deep/30">
          <div className="mx-auto max-w-4xl px-5 md:px-8 py-16 md:py-24 flex flex-col md:flex-row gap-8 items-start">
            <div className="h-28 w-28 md:h-32 md:w-32 flex-none rounded-full bg-cream-deep flex items-center justify-center overflow-hidden">
              {author.photo ? (
                <img src={author.photo} alt={author.name} className="h-full w-full object-cover" />
              ) : (
                <User className="h-12 w-12 text-terracotta/60" />
              )}
            </div>
            <div className="min-w-0 flex-1">
              <p className="tracked-caps text-[10px] text-terracotta">{author.role}</p>
              <h1 className="mt-3 text-5xl md:text-6xl">{author.name}</h1>
              <p className="mt-4 text-lg text-foreground/85 leading-relaxed">{author.longBio ?? author.bio}</p>
              <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                {author.location && (
                  <span className="inline-flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" /> {author.location}</span>
                )}
                <span className="tracked-caps text-[10px]">Langue : {author.language}</span>
                {author.social?.instagram && (
                  <a href={author.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-terracotta" aria-label="Instagram"><Instagram className="h-4 w-4" /></a>
                )}
                {author.social?.twitter && (
                  <a href={author.social.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-terracotta" aria-label="Twitter"><Twitter className="h-4 w-4" /></a>
                )}
                {author.social?.linkedin && (
                  <a href={author.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-terracotta" aria-label="LinkedIn"><Linkedin className="h-4 w-4" /></a>
                )}
                {author.social?.website && (
                  <a href={author.social.website} target="_blank" rel="noopener noreferrer" className="hover:text-terracotta" aria-label="Site"><Globe className="h-4 w-4" /></a>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 md:px-8 py-16 md:py-20">
          <p className="tracked-caps text-[10px] text-terracotta">Signature</p>
          <h2 className="mt-3 text-3xl md:text-4xl">Ses <em>articles.</em></h2>
          {articles.length === 0 ? (
            <p className="mt-8 text-muted-foreground">Aucun article publié pour le moment.</p>
          ) : (
            <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {articles.map((a) => <ArticleCard key={a.slug} article={a} />)}
            </div>
          )}
          <div className="mt-12">
            <Link to="/auteurs" className="tracked-caps text-xs text-terracotta">← Toute l'équipe</Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
