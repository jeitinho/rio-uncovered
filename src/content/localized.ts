// Accès au contenu dans une langue donnée : listes filtrées sur les articles disponibles
// dans cette langue, textes de catégories / piliers / auteurs traduits.
import type { Article } from "./types";
import { getAllArticles } from "./index";
import { AUTHORS, resolveAuthor, type Author } from "./authors";
import { AUTHOR_TEXTS } from "./i18n/authors";
import { hasTranslation, localizeArticleMeta } from "./i18n/articles";
import type { Locale } from "@/i18n/locale";

/* ---------- Articles ---------- */

/** Tous les articles disponibles dans `locale`, du plus récent au plus ancien, titres traduits. */
export function getArticles(locale: Locale): Article[] {
  return getAllArticles()
    .filter((a) => hasTranslation(a.slug, locale))
    .map((a) => localizeArticleMeta(a, locale));
}

export const getFeaturedIn = (locale: Locale) => getArticles(locale).filter((a) => a.featured);
export const getPopularIn = (locale: Locale) => getArticles(locale).filter((a) => a.popular);
export const getGuidesIn = (locale: Locale) => getArticles(locale).filter((a) => a.guide);
export const getArticlesByCategoryIn = (slug: string, locale: Locale) =>
  getArticles(locale).filter((a) => a.category === slug);
export const getArticlesByAuthorIn = (slug: string, locale: Locale) =>
  getArticles(locale).filter((a) => a.author === slug);

export function getRelatedIn(article: Article, locale: Locale, limit = 3): Article[] {
  const tagSet = new Set(article.tags);
  return getArticles(locale)
    .filter((a) => a.slug !== article.slug)
    .map((a) => ({
      article: a,
      score: (a.category === article.category ? 3 : 0) + a.tags.filter((t) => tagSet.has(t)).length,
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((x) => x.article);
}

export function getAdjacentIn(slug: string, locale: Locale): { prev?: Article; next?: Article } {
  const all = getArticles(locale);
  const i = all.findIndex((a) => a.slug === slug);
  if (i === -1) return {};
  return { prev: all[i + 1], next: all[i - 1] };
}

/* ---------- Catégories & piliers ---------- */

export {
  localizeCategory,
  localizePillar,
  getCategoriesIn,
  getCategoryIn,
  getCategoriesByPillarIn,
} from "./localized-categories";

/* ---------- Auteurs ---------- */

export function localizeAuthor(a: Author, locale: Locale): Author {
  if (locale === "fr") return a;
  const t = AUTHOR_TEXTS[locale][a.slug];
  if (!t) return a;
  return { ...a, name: t.name ?? a.name, role: t.role, bio: t.bio, longBio: t.longBio ?? a.longBio };
}

export const getAuthorsIn = (locale: Locale) => AUTHORS.map((a) => localizeAuthor(a, locale));

export function resolveAuthorIn(value: string, locale: Locale): Author {
  const a = resolveAuthor(value);
  return AUTHORS.some((x) => x.slug === a.slug && x.name === a.name) ? localizeAuthor(a, locale) : a;
}
