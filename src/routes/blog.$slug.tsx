import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { getArticleBySlug, getRelated, getAdjacent } from "@/content";
import { getCategoryBySlug } from "@/content/categories";
import { buildTOC, readingTime } from "@/content/types";
import { resolveAuthor } from "@/content/authors";
import { absoluteUrl, SITE_NAME } from "@/lib/site";
import { Breadcrumb } from "@/components/blog/Breadcrumb";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { ArticleBody } from "@/components/blog/ArticleBody";
import { ArticleCard } from "@/components/blog/ArticleCard";
import { ServiceCTA } from "@/components/blog/ServiceCTA";
import { ShareBar } from "@/components/blog/ShareBar";
import { ArrowLeft, ArrowRight, User } from "lucide-react";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const a = getArticleBySlug(params.slug);
    if (!a) throw notFound();
    return { article: a };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Article introuvable" }, { name: "robots", content: "noindex" }] };
    const a = loaderData.article;
    const author = resolveAuthor(a.author);
    const url = `/blog/${params.slug}`;
    const absUrl = absoluteUrl(url);
    const absHero = absoluteUrl(a.hero);
    const faq = a.sections.find((s) => s.type === "faq");
    const scripts: { type: string; children: string }[] = [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: a.title,
          description: a.description,
          datePublished: a.date,
          author: { "@type": "Person", name: author.name, url: absoluteUrl(`/auteurs/${author.slug}`) },
          publisher: { "@type": "Organization", name: SITE_NAME },
          image: absHero,
          inLanguage: "fr",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Accueil", item: absoluteUrl("/") },
            { "@type": "ListItem", position: 2, name: "Le Guide", item: absoluteUrl("/blog") },
            { "@type": "ListItem", position: 3, name: a.title, item: absUrl },
          ],
        }),
      },
    ];
    if (faq && faq.type === "faq") {
      scripts.push({
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faq.items.map((i) => ({
            "@type": "Question",
            name: i.q,
            acceptedAnswer: { "@type": "Answer", text: i.a },
          })),
        }),
      });
    }
    return {
      meta: [
        { title: `${a.title} — Jeitinho` },
        { name: "description", content: a.description },
        { name: "author", content: author.name },
        { property: "article:published_time", content: a.date },
        { property: "article:section", content: a.category },
        { property: "article:author", content: author.name },
        { property: "og:type", content: "article" },
        { property: "og:title", content: a.title },
        { property: "og:description", content: a.description },
    { property: "og:url", content: absUrl },
{ property: "og:image", content: absoluteUrl("/og-jeitinho.png") },
{ property: "og:image:alt", content: "Jeitinho" },

{ name: "twitter:card", content: "summary_large_image" },
{ name: "twitter:title", content: a.title },
{ name: "twitter:description", content: a.description },
{ name: "twitter:image", content: absoluteUrl("/og-jeitinho.png") },
      ],
      links: [
        { rel: "canonical", href: absUrl },
        { rel: "preload", as: "image", href: a.hero, fetchpriority: "high" } as never,
      ],
      scripts,
    };
  },
  component: ArticlePage,
});

const MONTHS_FR = ["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"];
function formatDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return `${d} ${MONTHS_FR[m - 1]} ${y}`;
}

function ArticlePage() {
  const { article } = Route.useLoaderData();
  const params = Route.useParams();
  const cat = getCategoryBySlug(article.category);
  const author = resolveAuthor(article.author);
  const toc = buildTOC(article.sections);
  const related = getRelated(article);
  const { prev, next } = getAdjacent(article.slug);
  const rt = readingTime(article.sections);

  let titleParts: (string | { em: string })[] = [article.title];
  if (article.titleAccent && article.title.includes(article.titleAccent)) {
    const [before, ...rest] = article.title.split(article.titleAccent);
    titleParts = [before, { em: article.titleAccent }, rest.join(article.titleAccent)];
  }

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <section className="relative isolate">
        <div className="absolute inset-0 -z-10">
          <img src={article.hero} alt={article.heroAlt} className="h-full w-full object-cover" width={1600} height={1000} />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="mx-auto max-w-4xl px-5 md:px-8 pt-24 pb-20 md:pt-32 md:pb-24 min-h-[60vh] flex flex-col justify-end">
          {cat && (
            <Link to="/blog/categorie/$slug" params={{ slug: cat.slug }} className="tracked-caps text-[10px] text-peach hover:text-cream transition-colors">
              {cat.name}
            </Link>
          )}
          <h1 className="mt-4 text-4xl md:text-6xl text-cream leading-[1.1]">
            {titleParts.map((p, i) =>
              typeof p === "string"
                ? <span key={i}>{p}</span>
                : <em key={i} className="italic font-light text-peach">{p.em}</em>
            )}
          </h1>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-1 text-cream/85 text-sm">
            <Link to="/auteurs/$slug" params={{ slug: author.slug }} className="hover:text-peach transition-colors">
              {author.name}
            </Link>
            <span>{formatDate(article.date)}</span>
            <span>{rt} min de lecture</span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 md:px-8 py-16">
        <Breadcrumb items={[
          { label: "Accueil", to: "/" },
          { label: "Le Guide", to: "/blog" },
          ...(cat ? [{ label: cat.name, to: undefined }] : []),
        ]} />

        <div className="mt-10 grid gap-12 lg:grid-cols-[220px_1fr_180px]">
          <aside className="hidden lg:block">
            <TableOfContents items={toc} />
          </aside>

          <article className="max-w-3xl">
            <ArticleBody sections={article.sections} />

            {article.relatedServices && (
              <ServiceCTA services={article.relatedServices} />
            )}

            {/* Bloc auteur */}
            <Link
              to="/auteurs/$slug"
              params={{ slug: author.slug }}
              className="mt-12 flex gap-4 rounded-[3px] border border-border p-5 hover:border-terracotta transition-colors"
            >
              <div className="h-14 w-14 flex-none rounded-full bg-cream-deep flex items-center justify-center overflow-hidden">
                {author.photo ? (
                  <img src={author.photo} alt={author.name} className="h-full w-full object-cover" />
                ) : (
                  <User className="h-6 w-6 text-terracotta/60" />
                )}
              </div>
              <div className="min-w-0">
                <p className="tracked-caps text-[10px] text-terracotta">{author.role}</p>
                <p className="mt-0.5 text-lg">{author.name}</p>
                {author.bio && <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{author.bio}</p>}
              </div>
            </Link>

            <div className="mt-8 flex items-center justify-between pt-8 border-t border-border">
              <ShareBar title={article.title} url={`/blog/${params.slug}`} />
              <p className="tracked-caps text-[10px] text-muted-foreground">
                Par {author.name}
              </p>
            </div>

            {(prev || next) && (
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {prev && (
                  <Link to="/blog/$slug" params={{ slug: prev.slug }} className="group rounded-[3px] border border-border p-5 hover:border-terracotta transition-colors">
                    <p className="tracked-caps text-[10px] text-terracotta inline-flex items-center gap-2"><ArrowLeft className="h-3 w-3" /> Précédent</p>
                    <p className="mt-2 text-foreground leading-snug">{prev.title}</p>
                  </Link>
                )}
                {next && (
                  <Link to="/blog/$slug" params={{ slug: next.slug }} className="group rounded-[3px] border border-border p-5 hover:border-terracotta transition-colors text-right">
                    <p className="tracked-caps text-[10px] text-terracotta inline-flex items-center gap-2">Suivant <ArrowRight className="h-3 w-3" /></p>
                    <p className="mt-2 text-foreground leading-snug">{next.title}</p>
                  </Link>
                )}
              </div>
            )}
          </article>

          <aside className="hidden lg:block">
            {/* placeholder pour futur sidebar */}
          </aside>
        </div>
      </section>

      {related.length > 0 && (
        <section className="border-t border-border/60 bg-cream-deep/30">
          <div className="mx-auto max-w-7xl px-5 md:px-8 py-16 md:py-20">
            <p className="tracked-caps text-[10px] text-terracotta">À lire ensuite</p>
            <h2 className="mt-3 text-3xl md:text-4xl">Articles <em>similaires.</em></h2>
            <div className="mt-8 grid gap-8 md:grid-cols-3">
              {related.map((a) => <ArticleCard key={a.slug} article={a} />)}
            </div>
          </div>
        </section>
      )}

      <SiteFooter />
    </div>
  );
}
