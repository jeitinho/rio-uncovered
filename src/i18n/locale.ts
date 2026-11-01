import { useParams } from "@tanstack/react-router";

export const LOCALES = ["en", "es", "pt", "it", "de", "ru"] as const;
export type NonDefaultLocale = (typeof LOCALES)[number];
export type Locale = "fr" | NonDefaultLocale;
export const DEFAULT_LOCALE: "fr" = "fr";

/** Every locale, default first — the order shown in the language selector and used for hreflang. */
export const ALL_LOCALES: readonly Locale[] = [DEFAULT_LOCALE, ...LOCALES];

export const LOCALE_LABELS: Record<Locale, string> = {
  fr: "Français",
  en: "English",
  es: "Español",
  pt: "Português",
  it: "Italiano",
  de: "Deutsch",
  ru: "Русский",
};

export const LOCALE_FLAGS: Record<Locale, string> = {
  fr: "🇫🇷",
  en: "🇬🇧",
  es: "🇪🇸",
  pt: "🇧🇷",
  it: "🇮🇹",
  de: "🇩🇪",
  ru: "🇷🇺",
};

// BCP 47 tags for <html lang>, hreflang, and Schema.org — pt maps to Brazilian Portuguese.
export const LOCALE_HTML_TAG: Record<Locale, string> = {
  fr: "fr",
  en: "en",
  es: "es",
  pt: "pt-BR",
  it: "it",
  de: "de",
  ru: "ru",
};

export function isLocale(value: string | undefined | null): value is NonDefaultLocale {
  return !!value && (LOCALES as readonly string[]).includes(value);
}

/** Reads the `locale` path param from anywhere under the `{-$locale}` layout route. Defaults to "fr". */
export function useLocale(): Locale {
  const params = useParams({ strict: false }) as { locale?: string };
  return isLocale(params.locale) ? params.locale : DEFAULT_LOCALE;
}

/** Derives the locale from a raw pathname — used where hooks aren't available (e.g. the document shell). */
export function localeFromPathname(pathname: string): Locale {
  const first = pathname.split("/").filter(Boolean)[0];
  return isLocale(first) ? first : DEFAULT_LOCALE;
}

/** Removes a leading locale segment: "/en/manuel" → "/manuel", "/en" → "/". */
export function stripLocalePrefix(pathname: string): string {
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length > 0 && isLocale(parts[0])) return "/" + parts.slice(1).join("/");
  return pathname || "/";
}

/** Locale-prefixed path for a bare (French) path: ("/manuel", "en") → "/en/manuel". */
export function localizedPath(basePath: string, locale: Locale): string {
  if (locale === DEFAULT_LOCALE || isUnlocalizedPath(basePath)) return basePath;
  return `/${locale}${basePath === "/" ? "" : basePath}`;
}

/** The `params` value to pass to a `Link`/`navigate` so the current locale is preserved in the target URL. */
export function localeParam(locale: Locale): { locale: NonDefaultLocale | undefined } {
  return { locale: locale === DEFAULT_LOCALE ? undefined : locale };
}

// Paths that live outside the `{-$locale}` route tree — they only exist at
// their bare path (e.g. "/partenaires", never "/en/partenaires"). Prefixing
// them with a locale 404s, so anything that builds a locale-aware URL (the
// language selector in particular) must leave these untouched.
export const UNLOCALIZED_ROOT_PATHS = ["/partenaires", "/api", "/mcp", "/rss.xml", "/sitemap.xml"] as const;

export function isUnlocalizedPath(pathname: string): boolean {
  return UNLOCALIZED_ROOT_PATHS.some((p) => pathname === p || pathname.startsWith(`${p}/`));
}
