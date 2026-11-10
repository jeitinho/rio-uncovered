// Catégories et piliers traduits, sans dépendance aux articles : importé par
// l'en-tête et le pied de page (présents sur toutes les pages). Passer par
// "./localized" ici embarquerait tout le corpus d'articles dans chaque page.
import { CATEGORIES, PILLARS, getCategoryBySlug, type Category, type Pillar } from "./categories";
import { CATEGORY_TEXTS, PILLAR_NAMES } from "./i18n/categories";
import type { Locale } from "@/i18n/locale";

export function localizeCategory(c: Category, locale: Locale): Category {
  if (locale === "fr") return c;
  const t = CATEGORY_TEXTS[locale][c.slug];
  return t ? { ...c, ...t, faq: undefined } : c;
}

export function localizePillar(p: Pillar, locale: Locale): Pillar {
  if (locale === "fr") return p;
  return { ...p, name: PILLAR_NAMES[locale][p.slug] ?? p.name };
}

export const getCategoriesIn = (locale: Locale) => CATEGORIES.map((c) => localizeCategory(c, locale));

export function getCategoryIn(slug: string, locale: Locale): Category | undefined {
  const c = getCategoryBySlug(slug);
  return c && localizeCategory(c, locale);
}

export function getCategoriesByPillarIn(locale: Locale): { pillar: Pillar; categories: Category[] }[] {
  return PILLARS.map((pillar) => ({
    pillar: localizePillar(pillar, locale),
    categories: CATEGORIES.filter((c) => c.pillar === pillar.slug).map((c) => localizeCategory(c, locale)),
  }));
}
