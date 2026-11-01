import { createFileRoute, notFound, redirect } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { getArticleBySlug } from "@/content";
import { buildTOC, readingTime } from "@/content/types";
import { articleLocales, hasTranslation, loadLocalizedArticle } from "@/content/i18n/articles";
import { getAdjacentIn, getCategoryIn, getRelatedIn, resolveAuthorIn } from "@/content/localized";
import { absoluteUrl, SITE_NAME } from "@/lib/site";
import { Breadcrumb } from "@/components/blog/Breadcrumb";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { ArticleBody } from "@/components/blog/ArticleBody";
import { ArticleCard } from "@/components/blog/ArticleCard";
import { ServiceCTA } from "@/components/blog/ServiceCTA";
import { ManuelCTA } from "@/components/blog/ManuelCTA";
import { ShareBar } from "@/components/blog/ShareBar";
import { WhatsAppGroupCTA } from "@/components/blog/WhatsAppGroupCTA";
import { LocaleLink } from "@/components/i18n/LocaleLink";
import { ArrowLeft, ArrowRight, User } from "lucide-react";
import { LOCALE_HTML_TAG, localizedPath, useLocale } from "@/i18n/locale";
import { useDict } from "@/i18n/t";
import { formatDate, localeFromParams, localeLinks, localizedUrl, ogLocaleMeta } from "@/i18n/seo";
import { CRUMBS, readingLabel } from "@/i18n/common";

const dict = {
  fr: { by: "Par", prev: "Précédent", next: "Suivant", nextEyebrow: "À lire ensuite", related: ["Articles ", "similaires."] },
  en: { by: "By", prev: "Previous", next: "Next", nextEyebrow: "Read next", related: ["Related ", "articles."] },
  es: { by: "Por", prev: "Anterior", next: "Siguiente", nextEyebrow: "Para seguir leyendo", related: ["Artículos ", "relacionados."] },
  pt: { by: "Por", prev: "Anterior", next: "Próximo", nextEyebrow: "Leia também", related: ["Artigos ", "relacionados."] },
  it: { by: "Di", prev: "Precedente", next: "Successivo", nextEyebrow: "Da leggere dopo", related: ["Articoli ", "correlati."] },
  de: { by: "Von", prev: "Zurück", next: "Weiter", nextEyebrow: "Als Nächstes lesen", related: ["Ähnliche ", "Artikel."] },
  ru: { by: "Автор:", prev: "Предыдущая", next: "Следующая", nextEyebrow: "Читайте также", related: ["Похожие ", "статьи."] },
};

export const Route = createFileRoute("/{-$locale}/blog/$slug")({
  loader: async ({ params }) => {
    const locale = localeFromParams(params);
    const original = getArticleBySlug(params.slug);
    if (!original) throw notFound();
    // Article pas encore traduit dans cette langue → version française (redirection temporaire).
    if (!hasTranslation(original.slug, locale)) {
      throw redirect({ href: `/blog/${original.slug}`, statusCode: 302 });
    }
    return { article: await loadLocalizedArticle(original, locale) };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "404" }, { name: "robots", content: "noindex" }] };
    const locale = localeFromParams(params);
    const a = loaderData.article;
    const author = resolveAuthorIn(a.author, locale);
    const cat = getCategoryIn(a.category, locale);
    const basePath = `/blog/${a.slug}`;
    const absUrl = localizedUrl(basePath, locale);
    const available = articleLocales(a.slug);
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
          author: { "@type": "Person", name: author.name, url: localizedUrl(`/auteurs/${author.slug}`, locale) },
          publisher: { "@type": "Organization", name: SITE_NAME },
          image: absoluteUrl(a.hero),
          inLanguage: LOCALE_HTML_TAG[locale],
          ...(locale !== "fr" ? { translationOfWork: { "@type": "Article", url: localizedUrl(basePath, "fr") } } : {}),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: CRUMBS[locale].home, item: localizedUrl("/", locale) },
            { "@type": "ListItem", position: 2, name: CRUMBS[locale].guide, item: localizedUrl("/blog", locale) },
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
          inLanguage: LOCALE_HTML_TAG[locale],
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
        { property: "article:section", content: cat?.name ?? a.category },
        { property: "article:author", content: author.name },
        { property: "og:type", content: "article" },
        { property: "og:title", content: a.title },
        { property: "og:description", content: a.description },
        { property: "og:url", content: absUrl },
        { property: "og:image", content: absoluteUrl("/og-jeitinho.png") },
        { property: "og:image:alt", content: "Jeitinho" },
        ...ogLocaleMeta(locale, available),
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: a.title },
        { name: "twitter:description", content: a.description },
        { name: "twitter:image", content: absoluteUrl("/og-jeitinho.png") },
      ],
      links: [
        ...localeLinks(basePath, locale, available),
        { rel: "preload", as: "image", href: a.hero, fetchpriority: "high" } as never,
      ],
      scripts,
    };
  },
  component: ArticlePage,
});

function ArticlePage() {
  const { article } = Route.useLoaderData();
  const locale = useLocale();
  const t = useDict(dict);
  const cat = getCategoryIn(article.category, locale);
  const author = resolveAuthorIn(article.author, locale);
  const toc = buildTOC(article.sections);
  const related = getRelatedIn(article, locale);
  const { prev, next } = getAdjacentIn(article.slug, locale);
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
            <LocaleLink to="/{-$locale}/blog/categorie/$slug" params={{ slug: cat.slug }} className="tracked-caps text-[10px] text-peach hover:text-cream transition-colors">
              {cat.name}
            </LocaleLink>
          )}
          <h1 className="mt-4 text-4xl md:text-6xl text-cream leading-[1.1]">
            {titleParts.map((p, i) =>
              typeof p === "string"
                ? <span key={i}>{p}</span>
                : <em key={i} className="italic font-light text-peach">{p.em}</em>,
            )}
          </h1>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-1 text-cream/85 text-sm">
            <LocaleLink to="/{-$locale}/auteurs/$slug" params={{ slug: author.slug }} className="hover:text-peach transition-colors">
              {author.name}
            </LocaleLink>
            <span>{formatDate(article.date, locale)}</span>
            <span>{readingLabel(rt, locale)}</span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 md:px-8 py-16">
        <Breadcrumb items={[
          { label: CRUMBS[locale].home, to: "/{-$locale}" },
          { label: CRUMBS[locale].guide, to: "/{-$locale}/blog" },
          ...(cat ? [{ label: cat.name }] : []),
        ]} />

        <div className="mt-10 grid gap-12 lg:grid-cols-[220px_1fr_180px]">
          <aside className="hidden lg:block">
            <TableOfContents items={toc} />
          </aside>

          <article className="max-w-3xl">
            <ArticleBody sections={article.sections} currentSlug={article.slug} />

            {article.relatedServices && <ServiceCTA services={article.relatedServices} />}

            <ManuelCTA />

            {/* Bloc auteur */}
            <LocaleLink
              to="/{-$locale}/auteurs/$slug"
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
            </LocaleLink>

            <div className="mt-8 flex items-center justify-between pt-8 border-t border-border">
              <ShareBar title={article.title} url={localizedPath(`/blog/${article.slug}`, locale)} />
              <p className="tracked-caps text-[10px] text-muted-foreground">
                {t.by} {author.name}
              </p>
            </div>

            <WhatsAppGroupCTA />

            {(prev || next) && (
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {prev && (
                  <LocaleLink to="/{-$locale}/blog/$slug" params={{ slug: prev.slug }} className="group rounded-[3px] border border-border p-5 hover:border-terracotta transition-colors">
                    <p className="tracked-caps text-[10px] text-terracotta inline-flex items-center gap-2"><ArrowLeft className="h-3 w-3" /> {t.prev}</p>
                    <p className="mt-2 text-foreground leading-snug">{prev.title}</p>
                  </LocaleLink>
                )}
                {next && (
                  <LocaleLink to="/{-$locale}/blog/$slug" params={{ slug: next.slug }} className="group rounded-[3px] border border-border p-5 hover:border-terracotta transition-colors text-right">
                    <p className="tracked-caps text-[10px] text-terracotta inline-flex items-center gap-2">{t.next} <ArrowRight className="h-3 w-3" /></p>
                    <p className="mt-2 text-foreground leading-snug">{next.title}</p>
                  </LocaleLink>
                )}
              </div>
            )}
          </article>

          <aside className="hidden lg:block">{/* placeholder pour futur sidebar */}</aside>
        </div>
      </section>

      {related.length > 0 && (
        <section className="border-t border-border/60 bg-cream-deep/30">
          <div className="mx-auto max-w-7xl px-5 md:px-8 py-16 md:py-20">
            <p className="tracked-caps text-[10px] text-terracotta">{t.nextEyebrow}</p>
            <h2 className="mt-3 text-3xl md:text-4xl">{t.related[0]}<em>{t.related[1]}</em></h2>
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
