import type { Article } from "../types";
import hero from "@/assets/hero-blog.jpg";

export const article: Article = {
  slug: "transports-rio-uber-metro",
  title: "Se déplacer à Rio : Uber, métro, ce qu'il faut savoir",
  titleAccent: "déplacer",
  description: "Uber, métro, bus, taxi, vélo : le mode d'emploi complet pour se déplacer intelligemment à Rio.",
  category: "transports",
  tags: ["transports", "Uber", "métro"],
  date: "2026-05-05",
  author: "equipe-jeitinho",
  hero,
  heroAlt: "Rame du métro de Rio en station",
  sections: [
    { type: "p", text: "Bien se déplacer à Rio, c'est débloquer 80 % du séjour. Voici le mode d'emploi." },
    { type: "h2", text: "Uber : votre meilleur ami" },
    { type: "p", text: "Bon marché (3-8 € les trajets Zona Sul), fiable, sécurisé. Toujours attendre à l'intérieur d'un lobby ou d'un restaurant, pas dans la rue." },
    { type: "h2", text: "Métro : rapide sur son axe" },
    { type: "p", text: "Deux lignes, axe Ipanema-Copacabana-Centro. Ticket à 1,20 €. Impeccable, climatisé, sûr. Idéal pour aller au Maracanã les soirs de match." },
    { type: "h2", text: "Bus : à éviter en tant qu'étranger" },
    { type: "p", text: "Réseau complexe, arrêts non annoncés, peu confortable. Sauf ligne spécifique connue, préférez Uber ou métro." },
    { type: "h2", text: "Vélo : parfait le long des plages" },
    { type: "p", text: "Système Itaú de vélos partagés, 1 €/h. Pistes cyclables continues d'Ipanema à Copacabana. Le dimanche, l'avenue Vieira Souto est fermée aux voitures." },
    { type: "bonasavoir", title: "Bon à savoir", text: "Depuis l'aéroport GIG (international), un Uber Comfort coûte ~25 € jusqu'à Ipanema, contre 8 € en métro-bus. Priorisez le confort après un vol long-courrier." },
  ],
};
