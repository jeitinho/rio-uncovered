import type { Article } from "../types";
import hero from "@/assets/hero-blog.jpg";

export const article: Article = {
  slug: "itineraire-5-jours-rio",
  title: "Itinéraire 5 jours à Rio : notre plan idéal",
  titleAccent: "idéal",
  description: "Un itinéraire de 5 jours à Rio, jour par jour, pensé par des locaux. Équilibre entre incontournables et pépites.",
  category: "itineraires",
  tags: ["itinéraire", "5 jours", "planning"],
  date: "2026-06-10",
  author: "Rafael Coelho",
  hero,
  heroAlt: "Vue panoramique de Rio depuis Pedra Bonita",
  guide: true,
  sections: [
    { type: "p", text: "5 jours à Rio, c'est le format le plus courant. Voici comment on le structurerait pour un ami." },
    { type: "h2", text: "Jour 1 — Zona Sul et sunset Arpoador" },
    { type: "p", text: "Ipanema plage matin, déjeuner, Lagoa Rodrigo de Freitas à vélo, sunset à Arpoador, dîner Ipanema." },
    { type: "h2", text: "Jour 2 — Christ Rédempteur et Santa Teresa" },
    { type: "p", text: "Christ tôt le matin, tram jaune, déjeuner Santa Teresa, Escadaria Selarón, dîner Lapa avec samba." },
    { type: "h2", text: "Jour 3 — Pain de Sucre et Botafogo" },
    { type: "p", text: "Randonnée Morro da Urca, téléphérique Pão de Açúcar, déjeuner Urca, après-midi Botafogo, dîner sur un rooftop." },
    { type: "h2", text: "Jour 4 — Journée sauvage à l'ouest" },
    { type: "p", text: "Prainha et Grumari, déjeuner de fruits de mer face à la mer, retour tardif." },
    { type: "h2", text: "Jour 5 — Maracanã ou plage libre" },
    { type: "p", text: "Si match : Maracanã en fin d'après-midi. Sinon : plage à Leblon, déjeuner tardif, shopping Visconde de Pirajá, dernier verre à Arpoador." },
    { type: "conseil", title: "Le conseil Jeitinho", text: "Prévoyez toujours une demi-journée « imprévu ». Rio récompense la spontanéité." },
  ],
};
