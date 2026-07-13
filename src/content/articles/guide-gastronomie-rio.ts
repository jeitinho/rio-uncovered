import type { Article } from "../types";
import hero from "@/assets/feijoada.avif";

export const article: Article = {
  slug: "guide-gastronomie-rio",
  title: "La gastronomie carioca : par où commencer",
  titleAccent: "commencer",
  description: "Rodízio, feijoada, açaí, brunchs : notre guide d'introduction à la gastronomie de Rio, avec nos adresses testées.",
  category: "gastronomie",
  tags: ["gastronomie", "restaurants", "feijoada"],
  date: "2026-04-22",
  author: "equipe-jeitinho",
  hero,
  heroAlt: "Feijoada brésilienne servie dans un cadre traditionnel",
  sections: [
    { type: "p", text: "Manger à Rio, c'est un chapitre à part entière du voyage. Voici notre carte pour ne pas tomber dans les pièges à touristes." },
    { type: "h2", text: "Les plats à goûter absolument" },
    { type: "ul", items: ["Feijoada — le samedi midi, plat national de haricots noirs et viande.", "Moqueca capixaba — poisson en cocotte, lait de coco, dendê.", "Pão de queijo — la brioche au fromage, à toute heure.", "Açaí bowl — l'énergie du surfer carioca.", "Coxinha — la petite croquette de poulet, snack partout."] },
    { type: "h2", text: "Les formats à connaître" },
    { type: "ul", items: ["Rodízio — buffet à volonté (viande, sushi).", "Kilo — buffet payé au poids, idéal le midi.", "Botequim — bar-restaurant de quartier, cœur culturel.", "Padaria — boulangerie-café-épicerie, ouverte tôt."] },
    { type: "conseil", title: "Le conseil Jeitinho", text: "Réservez pour les grandes tables (Oro, Lasai, Olympe), improvisez pour les botequins. Deux moitiés de la même passion." },
    { type: "faq", items: [{ q: "Vin ou bière ?", a: "Bière (chopp) partout, vin de qualité importée dans les bons restos. Local : essayez les cachaças artisanales." }] },
  ],
};
