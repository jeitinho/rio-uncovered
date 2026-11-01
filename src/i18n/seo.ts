import { SITE_URL } from "@/lib/site";
import { ALL_LOCALES, DEFAULT_LOCALE, LOCALE_HTML_TAG, isLocale, localizedPath, type Locale } from "./locale";

/** Locale of a route under `{-$locale}`, read from its `params` (route `head`/`loader`). */
export function localeFromParams(params: unknown): Locale {
  const value = (params as { locale?: string } | undefined)?.locale;
  return isLocale(value) ? value : DEFAULT_LOCALE;
}

/** Absolute URL of a bare (French) path in the given locale: ("/blog", "en") → "https://blog.jeitinho.fr/en/blog". */
export function localizedUrl(basePath: string, locale: Locale): string {
  return `${SITE_URL}${localizedPath(basePath, locale)}`;
}

const OG_LOCALE: Record<Locale, string> = {
  fr: "fr_FR",
  en: "en_US",
  es: "es_ES",
  pt: "pt_BR",
  it: "it_IT",
  de: "de_DE",
  ru: "ru_RU",
};

/** `og:locale` + `og:locale:alternate` tags for a page rendered in `locale` and available in `available`. */
export function ogLocaleMeta(locale: Locale, available: readonly Locale[] = ALL_LOCALES) {
  return [
    { property: "og:locale", content: OG_LOCALE[locale] },
    ...available.filter((l) => l !== locale).map((l) => ({ property: "og:locale:alternate", content: OG_LOCALE[l] })),
  ];
}

/**
 * Canonical + hreflang links for a page that exists at `basePath` in each of
 * `available` locales (every locale by default; an article only in the ones
 * it has been translated into). x-default points to the French original.
 */
export function localeLinks(basePath: string, locale: Locale, available: readonly Locale[] = ALL_LOCALES) {
  return [
    { rel: "canonical", href: localizedUrl(basePath, locale) },
    ...available.map((l) => ({ rel: "alternate", hrefLang: LOCALE_HTML_TAG[l], href: localizedUrl(basePath, l) })),
    { rel: "alternate", hrefLang: "x-default", href: localizedUrl(basePath, DEFAULT_LOCALE) },
  ];
}

/** "2026-07-12" → "12 juillet 2026" / "July 12, 2026"… */
export function formatDate(iso: string, locale: Locale): string {
  const [y, m, d] = iso.split("-").map(Number);
  if (!y || !m || !d) return iso;
  return new Date(Date.UTC(y, m - 1, d, 12)).toLocaleDateString(LOCALE_HTML_TAG[locale], {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
