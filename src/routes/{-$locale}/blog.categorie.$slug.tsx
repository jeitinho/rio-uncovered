import { createFileRoute, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { getCategoryBySlug } from "@/content/categories";
import { getArticlesByCategoryIn, getCategoriesIn, localizeCategory } from "@/content/localized";
import { ArticleCard } from "@/components/blog/ArticleCard";
import { Breadcrumb } from "@/components/blog/Breadcrumb";
import { FAQ } from "@/components/blog/FAQ";
import { TranslationNotice } from "@/components/blog/TranslationNotice";
import { LocaleLink } from "@/components/i18n/LocaleLink";
import { LOCALE_HTML_TAG, useLocale } from "@/i18n/locale";
import { useDict } from "@/i18n/t";
import { localeFromParams, localeLinks, localizedUrl, ogLocaleMeta } from "@/i18n/seo";
import { CRUMBS, GUIDE_NAME } from "@/i18n/common";

const dict = {
  fr: { eyebrow: "Catégorie", empty: "De nouveaux articles arrivent bientôt dans cette catégorie.", alsoEyebrow: "Explorer aussi", others: ["Autres ", "catégories."] },
  en: { eyebrow: "Category", empty: "New articles are coming soon in this category.", alsoEyebrow: "Explore more", others: ["Other ", "categories."] },
  es: { eyebrow: "Categoría", empty: "Muy pronto llegarán nuevos artículos a esta categoría.", alsoEyebrow: "Explora también", others: ["Otras ", "categorías."] },
  pt: { eyebrow: "Categoria", empty: "Novos artigos chegam em breve a esta categoria.", alsoEyebrow: "Explore também", others: ["Outras ", "categorias."] },
  it: { eyebrow: "Categoria", empty: "Nuovi articoli in arrivo in questa categoria.", alsoEyebrow: "Esplora anche", others: ["Altre ", "categorie."] },
  de: { eyebrow: "Kategorie", empty: "In dieser Kategorie erscheinen bald neue Artikel.", alsoEyebrow: "Weiter entdecken", others: ["Weitere ", "Kategorien."] },
  ru: { eyebrow: "Раздел", empty: "Скоро в этом разделе появятся новые статьи.", alsoEyebrow: "Смотрите также", others: ["Другие ", "разделы."] },
};

export const Route = createFileRoute("/{-$locale}/blog/categorie/$slug")({
  loader: ({ params }) => {
    const c = getCategoryBySlug(params.slug);
    if (!c) throw notFound();
    return { slug: c.slug };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "404" }, { name: "robots", content: "noindex" }] };
    const locale = localeFromParams(params);
    const c = localizeCategory(getCategoryBySlug(loaderData.slug)!, locale);
    const basePath = `/blog/categorie/${c.slug}`;
    return {
      meta: [
        { title: `${c.title} — ${GUIDE_NAME[locale]}` },
        { name: "description", content: c.description },
        { property: "og:title", content: c.title },
        { property: "og:description", content: c.description },
        { property: "og:url", content: localizedUrl(basePath, locale) },
        { property: "og:type", content: "website" },
        ...ogLocaleMeta(locale),
      ],
      links: localeLinks(basePath, locale),
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: c.title,
            description: c.description,
            inLanguage: LOCALE_HTML_TAG[locale],
          }),
        },
        ...(c.faq?.length
          ? [
              {
                type: "application/ld+json",
                children: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  mainEntity: c.faq.map((item) => ({
                    "@type": "Question",
                    name: item.q,
                    acceptedAnswer: { "@type": "Answer", text: item.a },
                  })),
                }),
              },
            ]
          : []),
      ],
    };
  },
  component: CategoryPage,
});

function CategoryPage() {
  const { slug } = Route.useLoaderData();
  const locale = useLocale();
  const t = useDict(dict);
  const category = localizeCategory(getCategoryBySlug(slug)!, locale);
  const articles = getArticlesByCategoryIn(category.slug, locale);
  const otherCats = getCategoriesIn(locale).filter((c) => c.slug !== category.slug).slice(0, 6);

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <TranslationNotice />
      <main className="flex-1">
        <section className="border-b border-border/60 bg-cream-deep/30">
          <div className="mx-auto max-w-5xl px-5 md:px-8 py-16 md:py-24">
            <Breadcrumb items={[
              { label: CRUMBS[locale].home, to: "/{-$locale}" },
              { label: CRUMBS[locale].guide, to: "/{-$locale}/blog" },
              { label: category.name },
            ]} />
            <p className="mt-8 tracked-caps text-[10px] text-terracotta">{t.eyebrow}</p>
            <h1 className="mt-3 text-5xl md:text-6xl max-w-3xl">{category.name}</h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">{category.intro}</p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 md:px-8 py-16 md:py-20">
          {articles.length === 0 ? (
            <p className="text-muted-foreground">{t.empty}</p>
          ) : (
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
              {articles.map((a) => <ArticleCard key={a.slug} article={a} />)}
            </div>
          )}
        </section>

        {category.faq && <div className="mx-auto max-w-3xl px-5 md:px-8 pb-16"><FAQ items={category.faq} /></div>}

        <section className="border-t border-border/60 bg-cream-deep/30">
          <div className="mx-auto max-w-7xl px-5 md:px-8 py-16">
            <p className="tracked-caps text-[10px] text-terracotta">{t.alsoEyebrow}</p>
            <h2 className="mt-3 text-3xl md:text-4xl">{t.others[0]}<em>{t.others[1]}</em></h2>
            <div className="mt-8 flex flex-wrap gap-2">
              {otherCats.map((c) => (
                <LocaleLink
                  key={c.slug}
                  to="/{-$locale}/blog/categorie/$slug"
                  params={{ slug: c.slug }}
                  className="rounded-full border border-border bg-card px-4 py-2 tracked-caps text-[10px] text-foreground hover:border-terracotta hover:text-terracotta transition-colors"
                >
                  {c.name}
                </LocaleLink>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
