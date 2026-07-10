import type { Article } from "../types";
import hero from "@/assets/hero-home.jpg";

export const article: Article = {
  slug: "reveillon-rio-copacabana",
  title: "Le Réveillon de Rio : ce qu'il faut savoir",
  titleAccent: "savoir",
  description: "Le Réveillon de Copacabana attire 3 millions de personnes. Notre guide pour bien le vivre.",
  category: "evenements",
  tags: ["Réveillon", "31 décembre", "Copacabana"],
  date: "2026-07-05",
  author: "Marina Alves",
  hero,
  heroAlt: "Feux d'artifice du Réveillon de Copacabana au-dessus de la baie",
  featured: true,
  relatedServices: [{ label: "Conciergerie Réveillon", href: "/conciergerie", description: "Réservations, camarotes, transferts sécurisés." }],
  sections: [
    { type: "p", text: "Copacabana pour le Nouvel An, c'est 3 millions de personnes en blanc, 15 minutes de feux d'artifice tirés depuis la mer, et une nuit qui ne finit jamais." },
    { type: "h2", text: "Les codes" },
    { type: "ul", items: ["Blanc obligatoire — porte-bonheur.", "Sept vagues sautées à minuit — vœux à Iemanjá.", "Fleurs blanches lancées à la mer.", "Champagne partagé sur le sable."] },
    { type: "h2", text: "Où le vivre" },
    { type: "p", text: "La plage libre (gratuit, magique, dense), les camarotes hôtels (500-2000 €, confort et vue), les rooftops privés (option intermédiaire)." },
    { type: "conseil", title: "Le conseil Jeitinho", text: "Réservez votre hôtel 8 à 12 mois à l'avance. Minimum 4-5 nuits imposé. Prix multipliés par 3 à 5." },
    { type: "aeviter", title: "À éviter", text: "Prendre la voiture. Copacabana est bouclée dès 20h le 31. Métro et marche uniquement." },
  ],
};
