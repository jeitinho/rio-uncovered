import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { getArticles, getCategoriesIn, getFeaturedIn, getGuidesIn, getPopularIn } from "@/content/localized";
import { ArticleCard } from "@/components/blog/ArticleCard";
import { CategoryCard } from "@/components/blog/CategoryCard";
import { BlogSearch } from "@/components/blog/BlogSearch";
import { Newsletter } from "@/components/blog/Newsletter";
import { TranslationNotice } from "@/components/blog/TranslationNotice";
import { LocaleLink } from "@/components/i18n/LocaleLink";
import heroImg from "@/assets/hero-blog.jpg";
import { ArrowRight } from "lucide-react";
import { useLocale, type Locale } from "@/i18n/locale";
import { useDict } from "@/i18n/t";
import { localeFromParams, localeLinks, localizedUrl, ogLocaleMeta } from "@/i18n/seo";
import { GUIDE_NAME } from "@/i18n/common";

const SEO: Record<Locale, { title: string; description: string; ogDescription: string }> = {
  fr: { title: "Le Guide Jeitinho — Blog sur Rio de Janeiro", description: "Le guide de référence sur Rio : quartiers, activités, Carnaval, gastronomie. Écrit par des locaux.", ogDescription: "Guides, itinéraires, adresses. Rio par des locaux." },
  en: { title: "The Jeitinho Guide — A blog about Rio de Janeiro", description: "The go-to guide to Rio: neighborhoods, things to do, Carnival, food. Written by locals.", ogDescription: "Guides, itineraries, addresses. Rio by locals." },
  es: { title: "La Guía Jeitinho — Blog sobre Río de Janeiro", description: "La guía de referencia sobre Río: barrios, actividades, Carnaval, gastronomía. Escrita por locales.", ogDescription: "Guías, itinerarios, direcciones. Río contada por locales." },
  pt: { title: "O Guia Jeitinho — Blog sobre o Rio de Janeiro", description: "O guia de referência sobre o Rio: bairros, atividades, Carnaval, gastronomia. Escrito por quem mora aqui.", ogDescription: "Guias, roteiros, endereços. O Rio por quem é daqui." },
  it: { title: "La Guida Jeitinho — Blog su Rio de Janeiro", description: "La guida di riferimento su Rio: quartieri, attività, Carnevale, gastronomia. Scritta da chi ci vive.", ogDescription: "Guide, itinerari, indirizzi. Rio raccontata da chi ci vive." },
  de: { title: "Der Jeitinho-Guide — Blog über Rio de Janeiro", description: "Der Referenz-Guide für Rio: Viertel, Aktivitäten, Karneval, Essen & Trinken. Geschrieben von Einheimischen.", ogDescription: "Guides, Reiserouten, Adressen. Rio von Einheimischen." },
  ru: { title: "Гид Jeitinho — блог о Рио-де-Жанейро", description: "Главный гид по Рио: районы, развлечения, карнавал, гастрономия. Пишут местные жители.", ogDescription: "Гиды, маршруты, адреса. Рио глазами местных." },
};

const dict = {
  fr: { h1: "Les meilleurs conseils pour ", h1Em: "découvrir Rio autrement.", lead: "Guides, itinéraires, adresses testées. Sans langue de bois, par des locaux passionnés.", exploreEyebrow: "Explorer", categories: (n: number) => [`${n} `, "catégories."], featuredEyebrow: "À la Une", featuredTitle: ["Nos ", "indispensables."], recentEyebrow: "Récent", recentTitle: ["Derniers ", "articles."], popularEyebrow: "Populaires", popularTitle: ["Les plus ", "lus."], guidesEyebrow: "Guides piliers", guidesTitle: ["Les ", "incontournables."], seeAll: "Voir tout" },
  en: { h1: "The best tips to ", h1Em: "discover Rio differently.", lead: "Guides, itineraries, tried-and-tested addresses. No sugarcoating, by passionate locals.", exploreEyebrow: "Explore", categories: (n: number) => [`${n} `, "categories."], featuredEyebrow: "Featured", featuredTitle: ["Our ", "essentials."], recentEyebrow: "Recent", recentTitle: ["Latest ", "articles."], popularEyebrow: "Popular", popularTitle: ["Most ", "read."], guidesEyebrow: "Cornerstone guides", guidesTitle: ["The ", "must-reads."], seeAll: "See all" },
  es: { h1: "Los mejores consejos para ", h1Em: "descubrir Río de otra manera.", lead: "Guías, itinerarios, direcciones probadas. Sin rodeos, por locales apasionados.", exploreEyebrow: "Explorar", categories: (n: number) => [`${n} `, "categorías."], featuredEyebrow: "Destacados", featuredTitle: ["Nuestros ", "imprescindibles."], recentEyebrow: "Reciente", recentTitle: ["Últimos ", "artículos."], popularEyebrow: "Populares", popularTitle: ["Los más ", "leídos."], guidesEyebrow: "Guías esenciales", guidesTitle: ["Los ", "imprescindibles."], seeAll: "Ver todo" },
  pt: { h1: "As melhores dicas para ", h1Em: "descobrir o Rio de outro jeito.", lead: "Guias, roteiros, endereços testados. Sem rodeios, por locais apaixonados.", exploreEyebrow: "Explorar", categories: (n: number) => [`${n} `, "categorias."], featuredEyebrow: "Destaques", featuredTitle: ["Nossos ", "indispensáveis."], recentEyebrow: "Recentes", recentTitle: ["Últimos ", "artigos."], popularEyebrow: "Populares", popularTitle: ["Os mais ", "lidos."], guidesEyebrow: "Guias essenciais", guidesTitle: ["Os ", "imperdíveis."], seeAll: "Ver tudo" },
  it: { h1: "I migliori consigli per ", h1Em: "scoprire Rio in un altro modo.", lead: "Guide, itinerari, indirizzi collaudati. Senza giri di parole, da gente del posto appassionata.", exploreEyebrow: "Esplora", categories: (n: number) => [`${n} `, "categorie."], featuredEyebrow: "In primo piano", featuredTitle: ["I nostri ", "irrinunciabili."], recentEyebrow: "Recenti", recentTitle: ["Ultimi ", "articoli."], popularEyebrow: "Popolari", popularTitle: ["I più ", "letti."], guidesEyebrow: "Guide fondamentali", guidesTitle: ["Gli ", "imperdibili."], seeAll: "Vedi tutto" },
  de: { h1: "Die besten Tipps, um ", h1Em: "Rio anders zu entdecken.", lead: "Guides, Reiserouten, erprobte Adressen. Ehrlich und direkt, von leidenschaftlichen Einheimischen.", exploreEyebrow: "Entdecken", categories: (n: number) => [`${n} `, "Kategorien."], featuredEyebrow: "Im Fokus", featuredTitle: ["Unsere ", "Must-Reads."], recentEyebrow: "Neu", recentTitle: ["Neueste ", "Artikel."], popularEyebrow: "Beliebt", popularTitle: ["Meist", "gelesen."], guidesEyebrow: "Grundlagen-Guides", guidesTitle: ["Die ", "Klassiker."], seeAll: "Alle ansehen" },
  ru: { h1: "Лучшие советы, чтобы ", h1Em: "открыть Рио по-новому.", lead: "Гиды, маршруты, проверенные адреса. Честно и без прикрас — от влюблённых в город местных.", exploreEyebrow: "Разделы", categories: (n: number) => [`${n} `, "разделов."], featuredEyebrow: "Главное", featuredTitle: ["Самое ", "необходимое."], recentEyebrow: "Новое", recentTitle: ["Последние ", "статьи."], popularEyebrow: "Популярное", popularTitle: ["Самое ", "читаемое."], guidesEyebrow: "Основные гиды", guidesTitle: ["Обязательно ", "к прочтению."], seeAll: "Смотреть все" },
};

export const Route = createFileRoute("/{-$locale}/blog/")({
  head: ({ params }) => {
    const locale = localeFromParams(params);
    const seo = SEO[locale];
    return {
      meta: [
        { title: seo.title },
        { name: "description", content: seo.description },
        { property: "og:title", content: seo.title },
        { property: "og:description", content: seo.ogDescription },
        { property: "og:url", content: localizedUrl("/blog", locale) },
        { property: "og:type", content: "website" },
        ...ogLocaleMeta(locale),
      ],
      links: [...localeLinks("/blog", locale), { rel: "preload", as: "image", href: heroImg, fetchpriority: "high" } as never],
    };
  },
  component: BlogHome,
});

function BlogHome() {
  const locale = useLocale();
  const t = useDict(dict);
  const featured = getFeaturedIn(locale);
  const latest = getArticles(locale).slice(0, 6);
  const popular = getPopularIn(locale).slice(0, 4);
  const guides = getGuidesIn(locale).slice(0, 4);
  const categories = getCategoriesIn(locale);
  const [catN, catWord] = t.categories(categories.length);

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <TranslationNotice />

      {/* HERO */}
      <section className="relative isolate">
        <div className="absolute inset-0 -z-10">
          <img src={heroImg} alt="Rio de Janeiro" className="h-full w-full object-cover" width={1920} height={1000} />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="mx-auto max-w-5xl px-5 md:px-8 py-32 md:py-40 text-center">
          <p className="tracked-caps text-[11px] text-peach">{GUIDE_NAME[locale]}</p>
          <h1 className="mt-5 text-5xl md:text-7xl text-cream leading-[1.05]">
            {t.h1}<em className="italic font-light text-peach">{t.h1Em}</em>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-cream/85 text-lg">{t.lead}</p>
          <div className="mx-auto mt-10 max-w-xl">
            <BlogSearch />
          </div>
        </div>
      </section>

      {/* CATÉGORIES */}
      <section className="mx-auto max-w-7xl px-5 md:px-8 py-20 md:py-28">
        <p className="tracked-caps text-[10px] text-terracotta">{t.exploreEyebrow}</p>
        <h2 className="mt-3 text-4xl md:text-5xl">{catN}<em>{catWord}</em></h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {categories.map((c) => <CategoryCard key={c.slug} category={c} />)}
        </div>
      </section>

      {/* À LA UNE */}
      {featured.length > 0 && (
        <section className="bg-cream-deep/30">
          <div className="mx-auto max-w-7xl px-5 md:px-8 py-20">
            <p className="tracked-caps text-[10px] text-terracotta">{t.featuredEyebrow}</p>
            <h2 className="mt-3 text-4xl md:text-5xl">{t.featuredTitle[0]}<em>{t.featuredTitle[1]}</em></h2>
            <div className="mt-10 grid gap-10 md:grid-cols-3">
              {featured.slice(0, 3).map((a) => <ArticleCard key={a.slug} article={a} size="lg" />)}
            </div>
          </div>
        </section>
      )}

      {/* DERNIERS ARTICLES */}
      {latest.length > 0 && (
        <section className="mx-auto max-w-7xl px-5 md:px-8 py-20 md:py-28">
          <p className="tracked-caps text-[10px] text-terracotta">{t.recentEyebrow}</p>
          <h2 className="mt-3 text-4xl md:text-5xl">{t.recentTitle[0]}<em>{t.recentTitle[1]}</em></h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {latest.map((a) => <ArticleCard key={a.slug} article={a} />)}
          </div>
        </section>
      )}

      {/* POPULAIRES */}
      {popular.length > 0 && (
        <section className="bg-cream-deep/30">
          <div className="mx-auto max-w-7xl px-5 md:px-8 py-20">
            <p className="tracked-caps text-[10px] text-terracotta">{t.popularEyebrow}</p>
            <h2 className="mt-3 text-4xl md:text-5xl">{t.popularTitle[0]}<em>{t.popularTitle[1]}</em></h2>
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {popular.map((a) => <ArticleCard key={a.slug} article={a} />)}
            </div>
          </div>
        </section>
      )}

      {/* GUIDES INCONTOURNABLES */}
      {guides.length > 0 && (
        <section className="mx-auto max-w-7xl px-5 md:px-8 py-20 md:py-28">
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <div>
              <p className="tracked-caps text-[10px] text-terracotta">{t.guidesEyebrow}</p>
              <h2 className="mt-3 text-4xl md:text-5xl">{t.guidesTitle[0]}<em>{t.guidesTitle[1]}</em></h2>
            </div>
            <LocaleLink to="/{-$locale}/blog" className="inline-flex items-center gap-2 tracked-caps text-[11px] text-terracotta hover:gap-3 transition-all">
              {t.seeAll} <ArrowRight className="h-3.5 w-3.5" />
            </LocaleLink>
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {guides.map((g) => <ArticleCard key={g.slug} article={g} />)}
          </div>
        </section>
      )}

      {/* NEWSLETTER */}
      <section className="mx-auto max-w-4xl px-5 md:px-8 pb-20">
        <Newsletter />
      </section>

      <SiteFooter />
    </div>
  );
}
