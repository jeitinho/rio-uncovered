// Article registry — importe chaque article et expose des helpers.
import type { Article } from "./types";

import { article as ipanema } from "./articles/ipanema-guide-complet";
import { article as copacabana } from "./articles/copacabana-guide-complet";
import { article as leblon } from "./articles/leblon-guide-complet";
import { article as botafogo } from "./articles/botafogo-guide-complet";
import { article as flamengo } from "./articles/flamengo-guide-complet";
import { article as gloria } from "./articles/gloria-guide-complet";
import { article as catete } from "./articles/catete-guide-complet";
import { article as lapa } from "./articles/lapa-guide-complet";
import { article as lagoa } from "./articles/lagoa-guide-complet";
import { article as jardim } from "./articles/jardim-botanico-guide-complet";
import { article as barra } from "./articles/barra-da-tijuca-guide-complet";
import { article as santaTeresa } from "./articles/santa-teresa-guide-complet";
import { article as urca } from "./articles/urca-guide-complet";

import { article as rio25 } from "./articles/25-meilleures-choses-a-faire-rio";
import { article as carnaval } from "./articles/preparer-carnaval-rio";
import { article as maracana } from "./articles/guide-maracana";
import { article as ilha } from "./articles/ilha-grande-excursion";
import { article as gastro } from "./articles/guide-gastronomie-rio";
import { article as doisirmaos } from "./articles/randonnee-dois-irmaos";
import { article as conseils } from "./articles/conseils-pratiques-avant-partir-rio";
import { article as securite } from "./articles/securite-a-rio-ce-qu-il-faut-savoir";
import { article as hebergements } from "./articles/ou-loger-a-rio-comparatif-quartiers";
import { article as itineraire } from "./articles/itineraire-5-jours-rio";
import { article as reveillon } from "./articles/reveillon-rio-copacabana";
import { article as pagode } from "./articles/soiree-pagode-madureira";
import { article as baileFunk } from "./articles/baile-funk-guide";
import { article as budgetVoyage } from "./articles/budget-voyage-rio";
import { article as choisirPlage } from "./articles/comment-choisir-sa-plage-rio";
import { article as nuitCarioca } from "./articles/comprendre-la-nuit-carioca";
import { article as couchersSoleil } from "./articles/couchers-de-soleil-caches-rio";
import { article as erreursRio } from "./articles/erreurs-a-eviter-a-rio";
import { article as marchesRio } from "./articles/marches-bonnes-affaires-rio";
import { article as marquesBresiliennes } from "./articles/marques-bresiliennes-a-rapporter";
import { article as payerPix } from "./articles/payer-au-bresil-pix";
import { article as mangerPetitBudget } from "./articles/petit-budget-manger-rio";
import { article as brunchsRio } from "./articles/petits-dejeuners-brunchs-rio";
import { article as plagesNiteroi } from "./articles/plages-niteroi";
import { article as plagesZoneOuest } from "./articles/plages-zone-ouest-rio";
import { article as quandPartir } from "./articles/quand-partir-a-rio";
import { article as restaurantsRomantiques } from "./articles/restaurants-romantiques-rio";
import { article as esimRio } from "./articles/rester-connecte-rio-esim";
import { article as roadTripNordeste } from "./articles/road-trip-nordeste";
import { article as rodizios } from "./articles/rodizios-fruits-de-mer-rio";
import { article as rooftops } from "./articles/rooftops-bars-vue-rio";
import { article as sambaLapa } from "./articles/samba-a-lapa";
import { article as seDeplacer } from "./articles/se-deplacer-a-rio";
import { article as vivreCarioca } from "./articles/vivre-comme-un-carioca";
import { article as pharmacies } from "./articles/pharmacies-a-rio";

export const ARTICLES: Article[] = [
  pagode,
  baileFunk,
  budgetVoyage,
  choisirPlage,
  nuitCarioca,
  couchersSoleil,
  erreursRio,
  marchesRio,
  marquesBresiliennes,
  payerPix,
  mangerPetitBudget,
  brunchsRio,
  plagesNiteroi,
  plagesZoneOuest,
  quandPartir,
  restaurantsRomantiques,
  esimRio,
  roadTripNordeste,
  rodizios,
  rooftops,
  sambaLapa,
  seDeplacer,
  vivreCarioca,
  pharmacies,

  ipanema,
  copacabana,
  leblon,
  botafogo,
  flamengo,
  gloria,
  catete,
  lapa,
  lagoa,
  jardim,
  barra,
  santaTeresa,
  urca,

  rio25,
  carnaval,
  maracana,
  ilha,
  gastro,
  doisirmaos,
  conseils,
  securite,
  hebergements,
  itineraire,
  reveillon,
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
      score:
        (a.category === article.category ? 3 : 0) +
        a.tags.filter((t) => tagSet.has(t)).length,
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((x) => x.article);
}

export function getAdjacent(slug: string): {
  prev?: Article;
  next?: Article;
} {
  const all = getAllArticles();
  const i = all.findIndex((a) => a.slug === slug);

  if (i === -1) return {};

  return {
    prev: all[i + 1],
    next: all[i - 1],
  };
}
