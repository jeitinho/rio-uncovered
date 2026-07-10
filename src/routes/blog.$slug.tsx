import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { getArticleBySlug, getRelated, getAdjacent } from "@/content";
import { getCategoryBySlug } from "@/content/categories";
import { buildTOC, readingTime } from "@/content/types";
import { Breadcrumb } from "@/components/blog/Breadcrumb";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { ArticleBody } from "@/components/blog/ArticleBody";
import { ArticleCard } from "@/components/blog/ArticleCard";
import { ServiceCTA } from "@/components/blog/ServiceCTA";
import { ShareBar } from "@/components/blog/ShareBar";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const a = getArticleBySlug(params.slug);
    if (!a) throw notFound();
    return { article: a };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Article introuvable" }, { name: "robots", content: "noindex" }] };
    const a = loaderData.article;
    const url = `/blog/${params.slug}`;
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
          author: { "@type": "Person", name: a.author },
          publisher: { "@type": "Organization", name: "Jeitinho" },
          image: a.hero,
          inLanguage: "fr",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Accueil", item: "/" },
            { "@type": "ListItem", position: 2, name: "Le Guide", item: "/blog" },
            { "@type": "ListItem", position: 3, name: a.title, item: url },
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
        { title: `${a.title} — Le Guide Jeitinho` },
        { name: "description", content: a.description },
        { name: "author", content: a.author },
        { property: "article:published_time", content: a.date },
        { property: "article:section", content: a.category },
        { property: "og:type", content: "article" },
        { property: "og:title", content: a.title },
        { property: "og:description", content: a.description },
        { property: "og:url", content: url },
        { property: "og:image", content: a.hero },
        { name: "twitter:image", content: a.hero },
      ],
      links: [
        { rel: "canonical", href: url },
        { rel: "preload", as: "image", href: a.hero, fetchpriority: "high" } as never,
      ],
      scripts,
    };
  },
  component: ArticlePage,
});

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
}

function ArticlePage() {
  const { article } = Route.useLoaderData();
  const params = Route.useParams();
  const cat = getCategoryBySlug(article.category);
  const toc = buildTOC(article.sections);
  const related = getRelated(article);
  const { prev, next } = getAdjacent(article.slug);
  const rt = readingTime(article.sections);

  // Split title around the accent word
  let titleParts: (string | { em: string })[] = [article.title];
  if (article.titleAccent && article.title.includes(article.titleAccent)) {
    const [before, ...rest] = article.title.split(article.titleAccent);
    titleParts = [before, { em: article.titleAccent }, rest.join(article.titleAccent)];
  }

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      {/* HERO */}
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
            <span>{article.author}</span>
            <span>{formatDate(article.date)}</span>
            <span>{rt} min de lecture</span>
          </div>
        </div>
      </section>

      {/* BODY + TOC */}
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

            <div className="mt-12 flex items-center justify-between pt-8 border-t border-border">
              <ShareBar title={article.title} url={`/blog/${params.slug}`} />
              <p className="tracked-caps text-[10px] text-muted-foreground">
                Par {article.author}
              </p>
            </div>

            {/* prev / next */}
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

      {/* SIMILAIRES */}
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
