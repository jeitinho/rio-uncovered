// Article registry — importe chaque article et expose des helpers.
import type { Article } from "./types";

import { article as ipanema } from "./articles/ipanema-guide-complet";
import { article as rio25 } from "./articles/25-meilleures-choses-a-faire-rio";
import { article as budget } from "./articles/vrai-cout-voyage-rio";
import { article as carnaval } from "./articles/preparer-carnaval-rio";
import { article as maracana } from "./articles/guide-maracana";
import { article as ilha } from "./articles/ilha-grande-excursion";
import { article as gastro } from "./articles/guide-gastronomie-rio";
import { article as sortir } from "./articles/sortir-rio-vie-nocturne";
import { article as plages } from "./articles/guide-plages-rio";
import { article as doisirmaos } from "./articles/randonnee-dois-irmaos";
import { article as culture } from "./articles/culture-carioca-samba";
import { article as conseils } from "./articles/conseils-pratiques-avant-partir-rio";
import { article as securite } from "./articles/securite-rio-guide-honnete";
import { article as transports } from "./articles/transports-rio-uber-metro";
import { article as hebergements } from "./articles/ou-dormir-rio-quartiers";
import { article as itineraire } from "./articles/itineraire-5-jours-rio";
import { article as reveillon } from "./articles/reveillon-rio-copacabana";

export const ARTICLES: Article[] = [
  ipanema, rio25, budget, carnaval, maracana,
  ilha, gastro, sortir, plages, doisirmaos, culture,
  conseils, securite, transports, hebergements, itineraire, reveillon,
];

export function getAllArticles(): Article[] {
  return [...ARTICLES].sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

export function getArticlesByCategory(categorySlug: string): Article[] {
  return getAllArticles().filter((a) => a.category === categorySlug);
}

export function getFeatured(): Article[] {
  return getAllArticles().filter((a) => a.featured);
}

export function getPopular(): Article[] {
  return getAllArticles().filter((a) => a.popular);
}

export function getGuides(): Article[] {
  return getAllArticles().filter((a) => a.guide);
}

export function getRelated(article: Article, limit = 3): Article[] {
  const tagSet = new Set(article.tags);
  return getAllArticles()
    .filter((a) => a.slug !== article.slug)
    .map((a) => ({
      article: a,
      score: (a.category === article.category ? 3 : 0) + a.tags.filter((t) => tagSet.has(t)).length,
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((x) => x.article);
}

export function getAdjacent(slug: string): { prev?: Article; next?: Article } {
  const all = getAllArticles();
  const i = all.findIndex((a) => a.slug === slug);
  if (i === -1) return {};
  return { prev: all[i + 1], next: all[i - 1] };
}
