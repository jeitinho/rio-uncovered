import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-home.jpg";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { getArticles, getCategoriesIn, getFeaturedIn, getGuidesIn, getPopularIn } from "@/content/localized";
import { ArticleCard } from "@/components/blog/ArticleCard";
import { CategoryCard } from "@/components/blog/CategoryCard";
import { BlogSearch } from "@/components/blog/BlogSearch";
import { Newsletter } from "@/components/blog/Newsletter";
import { TranslationNotice } from "@/components/blog/TranslationNotice";
import { LocaleLink } from "@/components/i18n/LocaleLink";
import { MANUEL_URL } from "@/lib/site";
import { conciergerieUrl } from "@/lib/localize-links";
import { useLocale, type Locale } from "@/i18n/locale";
import { useDict } from "@/i18n/t";
import { localeFromParams, localeLinks, localizedUrl, ogLocaleMeta } from "@/i18n/seo";
import { MANUEL_PRICE_LABEL } from "@/i18n/common";
import { ArrowRight, BookOpen, MessageCircle, Users } from "lucide-react";

const SEO: Record<Locale, { title: string; description: string }> = {
  fr: { title: "Jeitinho — Le blog sur Rio de Janeiro, écrit par des locaux", description: "Conseils, histoires, interviews et carnet d'adresses sur Rio de Janeiro. Écrit par des locaux passionnés, en sept langues." },
  en: { title: "Jeitinho — The Rio de Janeiro blog, written by locals", description: "Tips, stories, interviews and a little black book of addresses for Rio de Janeiro. Written by passionate locals, in seven languages." },
  es: { title: "Jeitinho — El blog sobre Río de Janeiro, escrito por locales", description: "Consejos, historias, entrevistas y agenda de direcciones sobre Río de Janeiro. Escrito por locales apasionados, en siete idiomas." },
  pt: { title: "Jeitinho — O blog sobre o Rio de Janeiro, escrito por quem mora aqui", description: "Dicas, histórias, entrevistas e caderneta de endereços do Rio de Janeiro. Escrito por locais apaixonados, em sete idiomas." },
  it: { title: "Jeitinho — Il blog su Rio de Janeiro, scritto da chi ci vive", description: "Consigli, storie, interviste e indirizzi su Rio de Janeiro. Scritto da gente del posto appassionata, in sette lingue." },
  de: { title: "Jeitinho — Der Blog über Rio de Janeiro, geschrieben von Einheimischen", description: "Tipps, Geschichten, Interviews und Adressen für Rio de Janeiro. Geschrieben von leidenschaftlichen Einheimischen, in sieben Sprachen." },
  ru: { title: "Jeitinho — блог о Рио-де-Жанейро от местных жителей", description: "Советы, истории, интервью и проверенные адреса Рио-де-Жанейро. Пишут влюблённые в город местные жители — на семи языках." },
};

const dict = {
  fr: {
    heroAlt: "Rio de Janeiro au coucher du soleil", h1: "Rio de Janeiro ", h1Em: "raconté par des locaux.",
    lead: "Conseils, histoires, reviews, interviews et carnet d'adresses. Le guide de référence sur Rio, en sept langues.",
    pillars: [
      { title: "Conseils & guides", text: "Guides détaillés, itinéraires testés, conseils pratiques. Tout ce qu'on aurait aimé lire avant notre premier séjour." },
      { title: "Histoires & interviews", text: "Rencontres avec des cariocas, portraits d'artisans, histoires de quartiers. Rio par celles et ceux qui la font." },
      { title: "Reviews & partenariats", text: "Restaurants, hôtels, expériences : nos avis honnêtes, sans complaisance. Nos partenariats sont toujours signalés." },
    ],
    manuelEyebrow: "Guide numérique", manuelBody: "Le guide numérique pour préparer et vivre votre séjour à Rio de Janeiro.", manuelCta: "Acheter le Manuel",
    featuredEyebrow: "À la Une", featuredTitle: ["Nos ", "indispensables."], allArticles: "Tous les articles",
    exploreEyebrow: "Explorer", exploreTitle: ["Par ", "thématique."], allCategories: (n: number) => `Les ${n} catégories`,
    recentEyebrow: "Récent", recentTitle: ["Derniers ", "articles."],
    popularEyebrow: "Populaires", popularTitle: ["Les plus ", "lus."],
    guidesEyebrow: "Guides piliers", guidesTitle: ["Les ", "grands guides."],
  },
  en: {
    heroAlt: "Rio de Janeiro at sunset", h1: "Rio de Janeiro, ", h1Em: "told by locals.",
    lead: "Tips, stories, reviews, interviews and a little black book of addresses. The go-to guide to Rio, in seven languages.",
    pillars: [
      { title: "Tips & guides", text: "In-depth guides, tried-and-tested itineraries, practical advice. Everything we wish we'd read before our first trip." },
      { title: "Stories & interviews", text: "Meetings with cariocas, portraits of craftspeople, neighborhood stories. Rio through the people who make it." },
      { title: "Reviews & partnerships", text: "Restaurants, hotels, experiences: our honest opinions, no flattery. Our partnerships are always disclosed." },
    ],
    manuelEyebrow: "Digital guide", manuelBody: "The digital guide to prepare for and enjoy your stay in Rio de Janeiro.", manuelCta: "Buy the Manuel",
    featuredEyebrow: "Featured", featuredTitle: ["Our ", "essentials."], allArticles: "All articles",
    exploreEyebrow: "Explore", exploreTitle: ["By ", "topic."], allCategories: (n: number) => `All ${n} categories`,
    recentEyebrow: "Recent", recentTitle: ["Latest ", "articles."],
    popularEyebrow: "Popular", popularTitle: ["Most ", "read."],
    guidesEyebrow: "Cornerstone guides", guidesTitle: ["The ", "big guides."],
  },
  es: {
    heroAlt: "Río de Janeiro al atardecer", h1: "Río de Janeiro, ", h1Em: "contado por locales.",
    lead: "Consejos, historias, reseñas, entrevistas y agenda de direcciones. La guía de referencia sobre Río, en siete idiomas.",
    pillars: [
      { title: "Consejos y guías", text: "Guías detalladas, itinerarios probados, consejos prácticos. Todo lo que nos habría gustado leer antes de nuestro primer viaje." },
      { title: "Historias y entrevistas", text: "Encuentros con cariocas, retratos de artesanos, historias de barrio. Río contada por quienes la hacen." },
      { title: "Reseñas y colaboraciones", text: "Restaurantes, hoteles, experiencias: nuestras opiniones honestas, sin complacencia. Nuestras colaboraciones siempre se indican." },
    ],
    manuelEyebrow: "Guía digital", manuelBody: "La guía digital para preparar y vivir tu estancia en Río de Janeiro.", manuelCta: "Comprar el Manuel",
    featuredEyebrow: "Destacados", featuredTitle: ["Nuestros ", "imprescindibles."], allArticles: "Todos los artículos",
    exploreEyebrow: "Explorar", exploreTitle: ["Por ", "temas."], allCategories: (n: number) => `Las ${n} categorías`,
    recentEyebrow: "Reciente", recentTitle: ["Últimos ", "artículos."],
    popularEyebrow: "Populares", popularTitle: ["Los más ", "leídos."],
    guidesEyebrow: "Guías esenciales", guidesTitle: ["Las ", "grandes guías."],
  },
  pt: {
    heroAlt: "Rio de Janeiro ao pôr do sol", h1: "O Rio de Janeiro ", h1Em: "contado por quem mora aqui.",
    lead: "Dicas, histórias, reviews, entrevistas e caderneta de endereços. O guia de referência sobre o Rio, em sete idiomas.",
    pillars: [
      { title: "Dicas & guias", text: "Guias detalhados, roteiros testados, dicas práticas. Tudo o que a gente gostaria de ter lido antes da primeira viagem." },
      { title: "Histórias & entrevistas", text: "Encontros com cariocas, retratos de artesãos, histórias de bairro. O Rio por quem faz o Rio." },
      { title: "Reviews & parcerias", text: "Restaurantes, hotéis, experiências: nossa opinião sincera, sem rasgação de seda. Nossas parcerias são sempre sinalizadas." },
    ],
    manuelEyebrow: "Guia digital", manuelBody: "O guia digital para preparar e aproveitar sua viagem ao Rio de Janeiro.", manuelCta: "Comprar o Manuel",
    featuredEyebrow: "Destaques", featuredTitle: ["Nossos ", "indispensáveis."], allArticles: "Todos os artigos",
    exploreEyebrow: "Explorar", exploreTitle: ["Por ", "tema."], allCategories: (n: number) => `As ${n} categorias`,
    recentEyebrow: "Recentes", recentTitle: ["Últimos ", "artigos."],
    popularEyebrow: "Populares", popularTitle: ["Os mais ", "lidos."],
    guidesEyebrow: "Guias essenciais", guidesTitle: ["Os ", "grandes guias."],
  },
  it: {
    heroAlt: "Rio de Janeiro al tramonto", h1: "Rio de Janeiro ", h1Em: "raccontata da chi ci vive.",
    lead: "Consigli, storie, recensioni, interviste e indirizzi. La guida di riferimento su Rio, in sette lingue.",
    pillars: [
      { title: "Consigli & guide", text: "Guide dettagliate, itinerari collaudati, consigli pratici. Tutto quello che avremmo voluto leggere prima del nostro primo viaggio." },
      { title: "Storie & interviste", text: "Incontri con i cariocas, ritratti di artigiani, storie di quartiere. Rio raccontata da chi la fa vivere." },
      { title: "Recensioni & collaborazioni", text: "Ristoranti, hotel, esperienze: le nostre opinioni oneste, senza compiacenza. Le collaborazioni sono sempre dichiarate." },
    ],
    manuelEyebrow: "Guida digitale", manuelBody: "La guida digitale per preparare e vivere il tuo soggiorno a Rio de Janeiro.", manuelCta: "Acquista il Manuel",
    featuredEyebrow: "In primo piano", featuredTitle: ["I nostri ", "irrinunciabili."], allArticles: "Tutti gli articoli",
    exploreEyebrow: "Esplora", exploreTitle: ["Per ", "argomento."], allCategories: (n: number) => `Tutte le ${n} categorie`,
    recentEyebrow: "Recenti", recentTitle: ["Ultimi ", "articoli."],
    popularEyebrow: "Popolari", popularTitle: ["I più ", "letti."],
    guidesEyebrow: "Guide fondamentali", guidesTitle: ["Le ", "grandi guide."],
  },
  de: {
    heroAlt: "Rio de Janeiro bei Sonnenuntergang", h1: "Rio de Janeiro, ", h1Em: "erzählt von Einheimischen.",
    lead: "Tipps, Geschichten, Erfahrungsberichte, Interviews und Adressen. Der Referenz-Guide für Rio, in sieben Sprachen.",
    pillars: [
      { title: "Tipps & Guides", text: "Ausführliche Guides, erprobte Reiserouten, praktische Tipps. Alles, was wir vor unserer ersten Reise gern gelesen hätten." },
      { title: "Geschichten & Interviews", text: "Begegnungen mit Cariocas, Porträts von Kunsthandwerkern, Geschichten aus den Vierteln. Rio, erzählt von den Menschen, die es ausmachen." },
      { title: "Erfahrungsberichte & Partnerschaften", text: "Restaurants, Hotels, Erlebnisse: unsere ehrliche Meinung, ohne Gefälligkeiten. Partnerschaften kennzeichnen wir immer." },
    ],
    manuelEyebrow: "Digitaler Guide", manuelBody: "Der digitale Guide, um Ihren Aufenthalt in Rio de Janeiro vorzubereiten und zu genießen.", manuelCta: "Manuel kaufen",
    featuredEyebrow: "Im Fokus", featuredTitle: ["Unsere ", "Must-Reads."], allArticles: "Alle Artikel",
    exploreEyebrow: "Entdecken", exploreTitle: ["Nach ", "Themen."], allCategories: (n: number) => `Alle ${n} Kategorien`,
    recentEyebrow: "Neu", recentTitle: ["Neueste ", "Artikel."],
    popularEyebrow: "Beliebt", popularTitle: ["Meist", "gelesen."],
    guidesEyebrow: "Grundlagen-Guides", guidesTitle: ["Die ", "großen Guides."],
  },
  ru: {
    heroAlt: "Рио-де-Жанейро на закате", h1: "Рио-де-Жанейро ", h1Em: "глазами местных.",
    lead: "Советы, истории, отзывы, интервью и проверенные адреса. Главный гид по Рио — на семи языках.",
    pillars: [
      { title: "Советы и гиды", text: "Подробные гиды, проверенные маршруты, практические советы. Всё, что мы хотели бы прочитать перед своей первой поездкой." },
      { title: "Истории и интервью", text: "Встречи с кариоками, портреты мастеров, истории районов. Рио глазами тех, кто его создаёт." },
      { title: "Отзывы и партнёрства", text: "Рестораны, отели, впечатления: наше честное мнение, без лести. О партнёрствах мы всегда говорим открыто." },
    ],
    manuelEyebrow: "Цифровой гид", manuelBody: "Цифровой гид, который поможет подготовиться к поездке в Рио-де-Жанейро и прожить её по полной.", manuelCta: "Купить Manuel",
    featuredEyebrow: "Главное", featuredTitle: ["Самое ", "необходимое."], allArticles: "Все статьи",
    exploreEyebrow: "Разделы", exploreTitle: ["По ", "темам."], allCategories: (n: number) => `Все разделы (${n})`,
    recentEyebrow: "Новое", recentTitle: ["Последние ", "статьи."],
    popularEyebrow: "Популярное", popularTitle: ["Самое ", "читаемое."],
    guidesEyebrow: "Основные гиды", guidesTitle: ["Большие ", "гиды."],
  },
};

export const Route = createFileRoute("/{-$locale}/")({
  head: ({ params }) => {
    const locale = localeFromParams(params);
    const seo = SEO[locale];
    return {
      meta: [
        { title: seo.title },
        { name: "description", content: seo.description },
        { property: "og:title", content: seo.title },
        { property: "og:description", content: seo.description },
        { property: "og:url", content: localizedUrl("/", locale) },
        { name: "twitter:title", content: seo.title },
        { name: "twitter:description", content: seo.description },
        ...ogLocaleMeta(locale),
      ],
      links: [...localeLinks("/", locale), { rel: "preload", as: "image", href: heroImg, fetchpriority: "high" } as never],
    };
  },
  component: Home,
});

function Home() {
  const locale = useLocale();
  const t = useDict(dict);
  const featured = getFeaturedIn(locale).slice(0, 3);
  const latest = getArticles(locale).slice(0, 6);
  const popular = getPopularIn(locale).slice(0, 4);
  const guides = getGuidesIn(locale).slice(0, 4);
  const categories = getCategoriesIn(locale);
  const icons = [BookOpen, Users, MessageCircle];

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <TranslationNotice />

      {/* HERO */}
      <section className="relative isolate">
        <div className="absolute inset-0 -z-10">
          <img src={heroImg} alt={t.heroAlt} className="h-full w-full object-cover" width={1920} height={1200} />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="mx-auto max-w-5xl px-5 md:px-8 py-28 md:py-40 text-center">
          <h1 className="text-5xl md:text-7xl leading-[1.05] text-cream">
            {t.h1}<em className="italic font-light text-peach">{t.h1Em}</em>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-cream/85 text-lg leading-relaxed">{t.lead}</p>
          <div className="mx-auto mt-10 max-w-xl">
            <BlogSearch />
          </div>
        </div>
      </section>

      {/* PITCH — 3 piliers éditoriaux */}
      <section className="border-y border-border/60 bg-cream-deep/40">
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-16 grid gap-10 md:grid-cols-3">
          {t.pillars.map((r, i) => {
            const Icon = icons[i];
            return (
              <div key={r.title}>
                <Icon className="h-5 w-5 text-terracotta" />
                <h2 className="mt-4 text-xl">{r.title}</h2>
                <p className="mt-2 text-muted-foreground leading-relaxed">{r.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* MANUEL BANNER */}
      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-12 md:py-16 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="tracked-caps text-[10px] text-peach inline-flex items-center gap-2">
              <BookOpen className="h-3.5 w-3.5" /> {t.manuelEyebrow}
            </p>
            <h2 className="mt-3 text-2xl md:text-3xl text-cream">
              <em className="italic font-light text-peach">Manuel Jeitinho</em> — {MANUEL_PRICE_LABEL[locale]}
            </h2>
            <p className="mt-2 max-w-xl text-cream/80 leading-relaxed">{t.manuelBody}</p>
          </div>
          <a
            href={conciergerieUrl(MANUEL_URL, locale)}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 rounded-[3px] bg-peach px-6 py-3.5 tracked-caps text-[11px] text-ink hover:opacity-90 transition-opacity shrink-0"
          >
            {t.manuelCta} — {MANUEL_PRICE_LABEL[locale]} <ArrowRight className="h-3 w-3" />
          </a>
        </div>
      </section>

      {/* À LA UNE */}
      {featured.length > 0 && (
        <section className="mx-auto max-w-7xl px-5 md:px-8 py-20 md:py-28">
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <div>
              <p className="tracked-caps text-[10px] text-terracotta">{t.featuredEyebrow}</p>
              <h2 className="mt-3 text-4xl md:text-5xl">{t.featuredTitle[0]}<em>{t.featuredTitle[1]}</em></h2>
            </div>
            <LocaleLink to="/{-$locale}/blog" className="inline-flex items-center gap-2 tracked-caps text-[11px] text-terracotta hover:gap-3 transition-all">
              {t.allArticles} <ArrowRight className="h-3.5 w-3.5" />
            </LocaleLink>
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {featured.map((a) => <ArticleCard key={a.slug} article={a} />)}
          </div>
        </section>
      )}

      {/* CATÉGORIES */}
      <section className="bg-cream-deep/30">
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-20 md:py-24">
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <div>
              <p className="tracked-caps text-[10px] text-terracotta">{t.exploreEyebrow}</p>
              <h2 className="mt-3 text-4xl md:text-5xl">{t.exploreTitle[0]}<em>{t.exploreTitle[1]}</em></h2>
            </div>
            <LocaleLink to="/{-$locale}/blog" className="inline-flex items-center gap-2 tracked-caps text-[11px] text-terracotta hover:gap-3 transition-all">
              {t.allCategories(categories.length)} <ArrowRight className="h-3.5 w-3.5" />
            </LocaleLink>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {categories.slice(0, 8).map((c) => <CategoryCard key={c.slug} category={c} />)}
          </div>
        </div>
      </section>

      {/* DERNIERS */}
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

      {/* GUIDES PILIERS */}
      {guides.length > 0 && (
        <section className="mx-auto max-w-7xl px-5 md:px-8 py-20 md:py-28">
          <p className="tracked-caps text-[10px] text-terracotta">{t.guidesEyebrow}</p>
          <h2 className="mt-3 text-4xl md:text-5xl">{t.guidesTitle[0]}<em>{t.guidesTitle[1]}</em></h2>
          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {guides.map((g) => (
              <LocaleLink key={g.slug} to="/{-$locale}/blog/$slug" params={{ slug: g.slug }} className="group block">
                <div className="aspect-[4/5] overflow-hidden rounded-[3px]">
                  <img src={g.hero} alt={g.heroAlt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <h3 className="mt-4 text-lg leading-tight group-hover:text-terracotta transition-colors">{g.title}</h3>
              </LocaleLink>
            ))}
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
