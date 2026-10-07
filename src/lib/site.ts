// Constantes globales du média Jeitinho.
// Toutes les URLs publiques (OG, partage, sitemap, RSS, JSON-LD) partent d'ici.

export const SITE_URL = "https://blog.jeitinho.fr";
export const SITE_NAME = "Jeitinho Blog";
export const SITE_TAGLINE = "Le média francophone sur Rio de Janeiro";

export const CONTACT_EMAIL = "blog@jeitinho.fr";
export const INSTAGRAM_HANDLE = "@jeitinho.fr";
export const INSTAGRAM_URL = "https://www.instagram.com/jeitinho.fr";

export const CONCIERGERIE_URL = "https://jeitinho.fr";
export const CONCIERGERIE_BOOK_URL = "https://jeitinho.fr/trouver-un-jeitinho";
export const MANUEL_URL = "https://jeitinho.fr/manuel?ref=blog";
export const MANUEL_READER_URL = "https://manuel.jeitinho.fr";

/** Lien d'invitation du groupe WhatsApp « Le Jeitinho de Rio » (entraide francophone à Rio).
 *  Vide = le bloc d'invitation ne s'affiche pas. */
export const WHATSAPP_GROUP_URL = "LIEN_A_COLLER";

/** Construit une URL absolue à partir d'un chemin relatif. */
export function absoluteUrl(path: string): string {
  if (/^https?:\/\//.test(path)) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
