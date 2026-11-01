// Couche de traduction des articles.
//
// L'article français (src/content/articles/<slug>.ts) reste la source de vérité :
// images, date, catégorie, tags, auteur… Une traduction ne porte que le texte.
//
//   src/content/translations/<locale>/<slug>.meta.ts → `meta` : titre, chapô, alt du visuel…
//                                                       (chargé d'emblée : listes, recherche, SEO)
//   src/content/translations/<locale>/<slug>.ts      → `sections` : le corps, section par section,
//                                                       dans le même ordre que l'original
//                                                       (chargé à la demande, page article seulement)
//
// Un article n'existe dans une langue que s'il a ses deux fichiers
// (contrôlé par scripts/check-translations.ts).
import type { Article, Section } from "@/content/types";
import { slugifyHeading } from "@/content/types";
import { LOCALES, type Locale, type NonDefaultLocale } from "@/i18n/locale";

export interface ArticleMetaTranslation {
  title: string;
  titleAccent?: string;
  description: string;
  heroAlt: string;
  heroCredit?: string;
  /** Même ordre que `relatedServices` dans l'article français. */
  relatedServices?: { label: string; description: string }[];
}

/** Texte d'une section, calqué sur `Section` — sans les champs non textuels (src, id, dimensions…). */
export type SectionTranslation =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string; author?: string }
  | { type: "conseil"; title?: string; text?: string }
  | { type: "aeviter"; title?: string; text?: string }
  | { type: "bonasavoir"; title?: string; text?: string }
  | { type: "faq"; items: { q: string; a: string }[] }
  | { type: "image"; alt: string; caption?: string }
  | { type: "gallery"; images: { alt: string; caption?: string }[] };

const metaModules = import.meta.glob<ArticleMetaTranslation>("../translations/*/*.meta.ts", {
  eager: true,
  import: "meta",
});
const sectionModules = import.meta.glob<SectionTranslation[]>(
  ["../translations/*/*.ts", "!../translations/*/*.meta.ts"],
  { import: "sections" },
);

const META: Partial<Record<NonDefaultLocale, Record<string, ArticleMetaTranslation>>> = {};
for (const [path, meta] of Object.entries(metaModules)) {
  const [locale, file] = path.split("/").slice(-2) as [NonDefaultLocale, string];
  if (!(LOCALES as readonly string[]).includes(locale)) continue;
  (META[locale] ??= {})[file.replace(/\.meta\.ts$/, "")] = meta;
}

function sectionPath(locale: NonDefaultLocale, slug: string) {
  return `../translations/${locale}/${slug}.ts`;
}

/** L'article `slug` est-il disponible dans `locale` ? (toujours vrai en français) */
export function hasTranslation(slug: string, locale: Locale): boolean {
  if (locale === "fr") return true;
  return !!META[locale]?.[slug] && sectionPath(locale, slug) in sectionModules;
}

/** Langues dans lesquelles l'article existe, français en tête. */
export function articleLocales(slug: string): Locale[] {
  return ["fr", ...LOCALES.filter((l) => hasTranslation(slug, l))];
}

/** Article avec titre, chapô, alt… traduits — le corps reste celui d'origine (listes, cartes, recherche). */
export function localizeArticleMeta(article: Article, locale: Locale): Article {
  if (locale === "fr") return article;
  const m = META[locale]?.[article.slug];
  if (!m) return article;
  return {
    ...article,
    title: m.title,
    titleAccent: m.titleAccent,
    description: m.description,
    heroAlt: m.heroAlt,
    heroCredit: m.heroCredit ?? article.heroCredit,
    relatedServices: article.relatedServices?.map((s, i) => ({ ...s, ...(m.relatedServices?.[i] ?? {}) })),
  };
}

/** Superpose le texte traduit sur les sections d'origine (images, ancres et structure conservées). */
export function mergeSections(original: Section[], translated: SectionTranslation[]): Section[] {
  return original.map((s, i) => {
    const t = translated[i];
    // Les ancres du sommaire restent celles de l'original : stables d'une langue à l'autre,
    // et lisibles même quand le titre traduit n'a pas de caractères latins (russe).
    const anchor = s.type === "h2" || s.type === "h3" ? s.id ?? slugifyHeading(s.text) : undefined;
    if (!t || t.type !== s.type) return anchor ? { ...s, id: anchor } : s;
    switch (s.type) {
      case "h2":
      case "h3":
        return { ...s, text: (t as { text: string }).text, id: anchor };
      case "gallery": {
        const tg = t as Extract<SectionTranslation, { type: "gallery" }>;
        return { ...s, images: s.images.map((img, j) => ({ ...img, ...(tg.images[j] ?? {}) })) };
      }
      case "conseil":
      case "aeviter":
      case "bonasavoir": {
        // Titre absent de la traduction → titre par défaut traduit (pas le titre français).
        const tc = t as { title?: string; text?: string };
        return { ...s, title: tc.title, text: tc.text ?? s.text };
      }
      case "quote": {
        const tq = t as { text: string; author?: string };
        return { ...s, text: tq.text, author: tq.author ?? s.author };
      }
      case "image": {
        const ti = t as { alt: string; caption?: string };
        return { ...s, alt: ti.alt, caption: s.caption === undefined ? undefined : ti.caption ?? s.caption };
      }
      default:
        return { ...s, ...t } as Section;
    }
  });
}

/** Article complet dans `locale` (corps compris) — chargé à la demande. */
export async function loadLocalizedArticle(article: Article, locale: Locale): Promise<Article> {
  if (locale === "fr" || !hasTranslation(article.slug, locale)) return article;
  const sections = await sectionModules[sectionPath(locale, article.slug)]();
  return { ...localizeArticleMeta(article, locale), sections: mergeSections(article.sections, sections) };
}
