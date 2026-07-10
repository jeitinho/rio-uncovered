// Constantes globales du média Jeitinho.
// Toutes les URLs publiques (OG, partage, sitemap, RSS, JSON-LD) partent d'ici.

export const SITE_URL = "https://blog.jeitinho.fr";
export const SITE_NAME = "Jeitinho Blog";
export const SITE_TAGLINE = "Le média francophone sur Rio de Janeiro";

export const CONTACT_EMAIL = "blog@jeitinho.fr";
export const INSTAGRAM_HANDLE = "@jeitinho.fr";
export const INSTAGRAM_URL = "https://www.instagram.com/jeitinho.fr";

export const CONCIERGERIE_URL = "https://www.jeitinho.fr";
export const CONCIERGERIE_BOOK_URL = "https://www.jeitinho.fr/trouver-un-jeitinho";

/** Construit une URL absolue à partir d'un chemin relatif. */
export function absoluteUrl(path: string): string {
  if (/^https?:\/\//.test(path)) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
