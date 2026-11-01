import { createFileRoute, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { getAuthorBySlug } from "@/content/authors";
import { getArticlesByAuthorIn, localizeAuthor } from "@/content/localized";
import { ArticleCard } from "@/components/blog/ArticleCard";
import { LocaleLink } from "@/components/i18n/LocaleLink";
import { Instagram, Twitter, Linkedin, Globe, MapPin, User } from "lucide-react";
import { useLocale } from "@/i18n/locale";
import { useDict } from "@/i18n/t";
import { localeFromParams, localeLinks, localizedUrl, ogLocaleMeta } from "@/i18n/seo";

const dict = {
  fr: { titleSuffix: "Auteur Jeitinho", language: "Langue", website: "Site", signature: "Signature", articles: ["Ses ", "articles."], none: "Aucun article publié pour le moment.", back: "← Toute l'équipe", notFoundEyebrow: "Erreur 404", notFound: "Auteur introuvable." },
  en: { titleSuffix: "Jeitinho writer", language: "Language", website: "Website", signature: "Byline", articles: ["Their ", "articles."], none: "No articles published yet.", back: "← The whole team", notFoundEyebrow: "Error 404", notFound: "Writer not found." },
  es: { titleSuffix: "Autor de Jeitinho", language: "Idioma", website: "Web", signature: "Firma", articles: ["Sus ", "artículos."], none: "Todavía no hay artículos publicados.", back: "← Todo el equipo", notFoundEyebrow: "Error 404", notFound: "Autor no encontrado." },
  pt: { titleSuffix: "Autor da Jeitinho", language: "Idioma", website: "Site", signature: "Assinatura", articles: ["Seus ", "artigos."], none: "Nenhum artigo publicado por enquanto.", back: "← Toda a equipe", notFoundEyebrow: "Erro 404", notFound: "Autor não encontrado." },
  it: { titleSuffix: "Autore Jeitinho", language: "Lingua", website: "Sito", signature: "Firma", articles: ["I suoi ", "articoli."], none: "Ancora nessun articolo pubblicato.", back: "← Tutto il team", notFoundEyebrow: "Errore 404", notFound: "Autore non trovato." },
  de: { titleSuffix: "Jeitinho-Autor", language: "Sprache", website: "Website", signature: "Beiträge", articles: ["Alle ", "Artikel."], none: "Noch keine Artikel veröffentlicht.", back: "← Das ganze Team", notFoundEyebrow: "Fehler 404", notFound: "Autor nicht gefunden." },
  ru: { titleSuffix: "автор Jeitinho", language: "Язык", website: "Сайт", signature: "Публикации", articles: ["Статьи ", "автора."], none: "Пока нет опубликованных статей.", back: "← Вся команда", notFoundEyebrow: "Ошибка 404", notFound: "Автор не найден." },
};

function AuthorNotFound() {
  const t = useDict(dict);
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 flex items-center justify-center px-6 py-24">
        <div className="max-w-md text-center">
          <p className="tracked-caps text-xs text-terracotta">{t.notFoundEyebrow}</p>
          <h1 className="mt-6 text-4xl">{t.notFound}</h1>
          <LocaleLink to="/{-$locale}/auteurs" className="mt-8 inline-block tracked-caps text-xs text-terracotta">{t.back}</LocaleLink>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

export const Route = createFileRoute("/{-$locale}/auteurs/$slug")({
  loader: ({ params }) => {
    const a = getAuthorBySlug(params.slug);
    if (!a) throw notFound();
    return { slug: a.slug };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "404" }, { name: "robots", content: "noindex" }] };
    const locale = localeFromParams(params);
    const a = localizeAuthor(getAuthorBySlug(loaderData.slug)!, locale);
    const basePath = `/auteurs/${a.slug}`;
    return {
      meta: [
        { title: `${a.name} — ${dict[locale].titleSuffix}` },
        { name: "description", content: a.bio },
        { property: "og:title", content: `${a.name} — Jeitinho` },
        { property: "og:description", content: a.bio },
        { property: "og:url", content: localizedUrl(basePath, locale) },
        { property: "og:type", content: "profile" },
        ...ogLocaleMeta(locale),
      ],
      links: localeLinks(basePath, locale),
    };
  },
  notFoundComponent: AuthorNotFound,
  component: AuthorPage,
});

function AuthorPage() {
  const { slug } = Route.useLoaderData();
  const locale = useLocale();
  const t = useDict(dict);
  const author = localizeAuthor(getAuthorBySlug(slug)!, locale);
  const articles = getArticlesByAuthorIn(author.slug, locale);

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="border-b border-border/60 bg-cream-deep/30">
          <div className="mx-auto max-w-4xl px-5 md:px-8 py-16 md:py-24 flex flex-col md:flex-row gap-8 items-start">
            <div className="h-28 w-28 md:h-32 md:w-32 flex-none rounded-full bg-cream-deep flex items-center justify-center overflow-hidden">
              {author.photo ? <img src={author.photo} alt={author.name} className="h-full w-full object-cover" /> : <User className="h-12 w-12 text-terracotta/60" />}
            </div>
            <div className="min-w-0 flex-1">
              <p className="tracked-caps text-[10px] text-terracotta">{author.role}</p>
              <h1 className="mt-3 text-5xl md:text-6xl">{author.name}</h1>
              <div className="mt-4 space-y-4 text-lg text-foreground/85 leading-relaxed">
                {(author.longBio ?? author.bio).split("\n\n").map((para, i) => <p key={i}>{para}</p>)}
              </div>
              <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                {author.location && (
                  <span className="inline-flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" /> {author.location}</span>
                )}
                <span className="tracked-caps text-[10px]">{t.language}{locale === "fr" ? " :" : ":"} {author.language.toUpperCase()}</span>
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
                  <a href={author.social.website} target="_blank" rel="noopener noreferrer" className="hover:text-terracotta" aria-label={t.website}><Globe className="h-4 w-4" /></a>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 md:px-8 py-16 md:py-20">
          <p className="tracked-caps text-[10px] text-terracotta">{t.signature}</p>
          <h2 className="mt-3 text-3xl md:text-4xl">{t.articles[0]}<em>{t.articles[1]}</em></h2>
          {articles.length === 0 ? (
            <p className="mt-8 text-muted-foreground">{t.none}</p>
          ) : (
            <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {articles.map((a) => <ArticleCard key={a.slug} article={a} />)}
            </div>
          )}
          <div className="mt-12">
            <LocaleLink to="/{-$locale}/auteurs" className="tracked-caps text-xs text-terracotta">{t.back}</LocaleLink>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
