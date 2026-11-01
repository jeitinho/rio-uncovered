// Libellés partagés par plusieurs pages / composants.
import { LOCALE_HTML_TAG, type Locale } from "./locale";

type Forms = { one: string; few?: string; many?: string; other: string };

const ARTICLE_FORMS: Record<Locale, Forms> = {
  fr: { one: "article", other: "articles" },
  en: { one: "article", other: "articles" },
  es: { one: "artículo", other: "artículos" },
  pt: { one: "artigo", other: "artigos" },
  it: { one: "articolo", other: "articoli" },
  de: { one: "Artikel", other: "Artikel" },
  ru: { one: "статья", few: "статьи", many: "статей", other: "статьи" },
};

const RESULT_FORMS: Record<Locale, Forms> = {
  fr: { one: "résultat", other: "résultats" },
  en: { one: "result", other: "results" },
  es: { one: "resultado", other: "resultados" },
  pt: { one: "resultado", other: "resultados" },
  it: { one: "risultato", other: "risultati" },
  de: { one: "Ergebnis", other: "Ergebnisse" },
  ru: { one: "результат", few: "результата", many: "результатов", other: "результата" },
};

function plural(n: number, locale: Locale, forms: Forms): string {
  // En français, 0 et 1 sont au singulier ; Intl le sait.
  const cat = new Intl.PluralRules(LOCALE_HTML_TAG[locale]).select(n) as keyof Forms;
  return `${n} ${forms[cat] ?? forms.other}`;
}

/** « 3 articles », « 1 article », « 5 статей »… */
export const articleCount = (n: number, locale: Locale) => plural(n, locale, ARTICLE_FORMS[locale]);
export const resultCount = (n: number, locale: Locale) => plural(n, locale, RESULT_FORMS[locale]);

const READING: Record<Locale, (n: number) => string> = {
  fr: (n) => `${n} min de lecture`,
  en: (n) => `${n} min read`,
  es: (n) => `${n} min de lectura`,
  pt: (n) => `${n} min de leitura`,
  it: (n) => `${n} min di lettura`,
  de: (n) => `${n} Min. Lesezeit`,
  ru: (n) => `${n} мин чтения`,
};
export const readingLabel = (n: number, locale: Locale) => READING[locale](n);

/** Fil d'Ariane : accueil et index du guide. */
export const CRUMBS: Record<Locale, { home: string; guide: string }> = {
  fr: { home: "Accueil", guide: "Le Guide" },
  en: { home: "Home", guide: "The Guide" },
  es: { home: "Inicio", guide: "La Guía" },
  pt: { home: "Início", guide: "O Guia" },
  it: { home: "Home", guide: "La Guida" },
  de: { home: "Startseite", guide: "Der Guide" },
  ru: { home: "Главная", guide: "Гид" },
};

/** Nom du guide (titres SEO, flux RSS…). */
export const GUIDE_NAME: Record<Locale, string> = {
  fr: "Le Guide Jeitinho",
  en: "The Jeitinho Guide",
  es: "La Guía Jeitinho",
  pt: "O Guia Jeitinho",
  it: "La Guida Jeitinho",
  de: "Der Jeitinho-Guide",
  ru: "Гид Jeitinho",
};

/** Prix du Manuel affiché sur le blog (même montant que MANUEL_PRICE_EUR côté jeitinho.fr). */
export const MANUEL_PRICE_LABEL: Record<Locale, string> = {
  fr: "30 €",
  en: "€30",
  es: "30 €",
  pt: "€ 30",
  it: "30 €",
  de: "30 €",
  ru: "30 €",
};
