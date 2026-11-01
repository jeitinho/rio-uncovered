import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { getArticles } from "@/content/localized";
import { ArticleCard } from "@/components/blog/ArticleCard";
import { BlogSearch } from "@/components/blog/BlogSearch";
import { z } from "zod";
import { useMemo } from "react";
import Fuse from "fuse.js";
import { useLocale, type Locale } from "@/i18n/locale";
import { useDict } from "@/i18n/t";
import { localeFromParams, localeLinks, localizedUrl, ogLocaleMeta } from "@/i18n/seo";
import { GUIDE_NAME, resultCount } from "@/i18n/common";

const searchSchema = z.object({ q: z.string().optional().default("") });

const SEO: Record<Locale, { title: string; description: string }> = {
  fr: { title: "Rechercher", description: "Cherchez parmi nos guides, conseils et récits sur Rio de Janeiro : quartiers, plages, gastronomie, sorties, budget et vie pratique." },
  en: { title: "Search", description: "Search our guides, tips and stories about Rio de Janeiro: neighborhoods, beaches, food, nightlife, budget and practical life." },
  es: { title: "Buscar", description: "Busca entre nuestras guías, consejos y relatos sobre Río de Janeiro: barrios, playas, gastronomía, salidas, presupuesto y vida práctica." },
  pt: { title: "Pesquisar", description: "Pesquise entre nossos guias, dicas e histórias sobre o Rio de Janeiro: bairros, praias, gastronomia, saídas, orçamento e dia a dia." },
  it: { title: "Cerca", description: "Cerca tra le nostre guide, i consigli e i racconti su Rio de Janeiro: quartieri, spiagge, gastronomia, serate, budget e vita pratica." },
  de: { title: "Suche", description: "Durchsuchen Sie unsere Guides, Tipps und Geschichten über Rio de Janeiro: Viertel, Strände, Essen, Ausgehen, Budget und Alltag." },
  ru: { title: "Поиск", description: "Ищите среди наших гидов, советов и историй о Рио-де-Жанейро: районы, пляжи, гастрономия, ночная жизнь, бюджет и быт." },
};

const dict = {
  fr: { eyebrow: "Recherche", title: ["Chercher un ", "guide."], forQuery: (q: string) => `pour « ${q} »` },
  en: { eyebrow: "Search", title: ["Find a ", "guide."], forQuery: (q: string) => `for “${q}”` },
  es: { eyebrow: "Búsqueda", title: ["Buscar una ", "guía."], forQuery: (q: string) => `para «${q}»` },
  pt: { eyebrow: "Pesquisa", title: ["Encontre um ", "guia."], forQuery: (q: string) => `para “${q}”` },
  it: { eyebrow: "Ricerca", title: ["Cerca una ", "guida."], forQuery: (q: string) => `per «${q}»` },
  de: { eyebrow: "Suche", title: ["Einen Guide ", "finden."], forQuery: (q: string) => `für „${q}“` },
  ru: { eyebrow: "Поиск", title: ["Найти ", "гид."], forQuery: (q: string) => `по запросу «${q}»` },
};

export const Route = createFileRoute("/{-$locale}/blog/recherche")({
  validateSearch: (s) => searchSchema.parse(s),
  head: ({ params }) => {
    const locale = localeFromParams(params);
    const seo = SEO[locale];
    return {
      meta: [
        { title: `${seo.title} — ${GUIDE_NAME[locale]}` },
        { name: "description", content: seo.description },
        { property: "og:title", content: `${seo.title} — ${GUIDE_NAME[locale]}` },
        { property: "og:description", content: seo.description },
        { property: "og:url", content: localizedUrl("/blog/recherche", locale) },
        { name: "robots", content: "noindex" },
        ...ogLocaleMeta(locale),
      ],
      links: localeLinks("/blog/recherche", locale),
    };
  },
  component: SearchPage,
});

function SearchPage() {
  const { q } = Route.useSearch();
  const locale = useLocale();
  const t = useDict(dict);
  const all = useMemo(() => getArticles(locale), [locale]);

  const fuse = useMemo(() => new Fuse(all, { keys: ["title", "description", "tags"], threshold: 0.4 }), [all]);
  const results = useMemo(() => (q ? fuse.search(q).map((r) => r.item) : []), [q, fuse]);

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-5 md:px-8 py-16 md:py-20 flex-1">
        <p className="tracked-caps text-[10px] text-terracotta">{t.eyebrow}</p>
        <h1 className="mt-3 text-4xl md:text-5xl">{t.title[0]}<em>{t.title[1]}</em></h1>
        <div className="mt-8"><BlogSearch /></div>

        {q && (
          <div className="mt-10">
            <p className="text-sm text-muted-foreground">
              {resultCount(results.length, locale)} {t.forQuery(q)}
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
