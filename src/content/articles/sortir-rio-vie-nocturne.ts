import type { Article } from "../types";
import hero from "@/assets/hero-blog.jpg";

export const article: Article = {
  slug: "sortir-rio-vie-nocturne",
  title: "Sortir à Rio : la vie nocturne sans les pièges",
  titleAccent: "sans",
  description: "Bars, rooftops, samba à Lapa, clubs : notre guide pour sortir à Rio comme un carioca.",
  category: "vie-nocturne",
  tags: ["sortir", "bars", "Lapa", "samba"],
  date: "2026-05-30",
  author: "Rafael Coelho",
  hero,
  heroAlt: "Rue de Lapa, Rio, la nuit avec l'aqueduc en arrière-plan",
  sections: [
    { type: "p", text: "Rio ne dort pas. Encore faut-il savoir où poser son verre. Trois quartiers, trois vibes, un carnet." },
    { type: "h2", text: "Lapa — samba, chaos, magie" },
    { type: "p", text: "Cœur historique de la nuit carioca. Rio Scenarium, Carioca da Gema pour la samba de qualité. Vendredi et samedi principalement." },
    { type: "h2", text: "Ipanema — cocktails et art de vivre" },
    { type: "p", text: "Canastra pour le vin naturel, Palaphita pour l'apéro tropical, Bar Astor pour la caipirinha reine." },
    { type: "h2", text: "Copacabana & Botafogo — la culture des rooftops" },
    { type: "p", text: "Fasano, Emiliano, Yoo2 : la ville vue d'en haut, terracotta liquide dans le verre." },
    { type: "aeviter", title: "À éviter", text: "Les 'bars du guide' où l'on paie sa caipirinha 15 €. Un local ne dépasse jamais 4-6 € pour la même." },
  ],
};
