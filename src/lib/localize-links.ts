// Réécrit les liens d'un fragment HTML (corps d'article, liens automatiques) vers la
// langue du lecteur : /blog/… → /en/blog/… quand l'article cible existe en anglais,
// https://jeitinho.fr/… → https://jeitinho.fr/en/… (le site de la conciergerie est
// disponible dans les 7 langues).
import { hasTranslation } from "@/content/i18n/articles";
import { localizedPath, type Locale } from "@/i18n/locale";

const SITE_UNLOCALIZED = ["/unsubscribe", "/api", "/email"];

/** "/manuel?ref=blog" → "/en/manuel?ref=blog" sur jeitinho.fr. */
export function localizeConciergeriePath(pathWithQuery: string, locale: Locale): string {
  if (locale === "fr") return pathWithQuery;
  const m = /^([^?#]*)(.*)$/.exec(pathWithQuery || "/")!;
  const path = m[1] || "/";
  if (SITE_UNLOCALIZED.some((p) => path === p || path.startsWith(`${p}/`))) return pathWithQuery;
  return `/${locale}${path === "/" ? "" : path}${m[2]}`;
}

/** URL absolue jeitinho.fr dans la langue du lecteur. */
export function conciergerieUrl(url: string, locale: Locale): string {
  const m = /^https:\/\/jeitinho\.fr(\/[^"]*)?$/.exec(url);
  if (!m) return url;
  return `https://jeitinho.fr${localizeConciergeriePath(m[1] ?? "/", locale)}`;
}

/** Chemin interne du blog dans la langue du lecteur (repli sur le français pour un article non traduit). */
export function localizeBlogPath(pathWithHash: string, locale: Locale): string {
  if (locale === "fr") return pathWithHash;
  const m = /^([^?#]*)(.*)$/.exec(pathWithHash)!;
  const path = m[1];
  const article = /^\/blog\/([^/]+)$/.exec(path);
  if (article && article[1] !== "recherche" && !hasTranslation(article[1], locale)) return pathWithHash;
  return localizedPath(path, locale) + m[2];
}

export function localizeHtmlLinks(html: string, locale: Locale): string {
  if (locale === "fr" || !html) return html;
  return html
    .replace(/href="(\/blog(?:[/?#][^"]*)?)"/g, (_, p: string) => `href="${localizeBlogPath(p, locale)}"`)
    .replace(/href="(https:\/\/jeitinho\.fr(?:\/[^"]*)?)"/g, (_, u: string) => `href="${conciergerieUrl(u, locale)}"`);
}
