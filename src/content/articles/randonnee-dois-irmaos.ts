import type { Article } from "../types";
import hero from "@/assets/hero-blog.jpg";

export const article: Article = {
  slug: "randonnee-dois-irmaos",
  title: "Randonnée Dois Irmãos : la plus belle vue d'Ipanema",
  titleAccent: "plus belle",
  description: "Notre guide pour la randonnée Dois Irmãos à Rio : accès, durée, conseils sécurité, meilleure heure.",
  category: "randonnees",
  tags: ["randonnée", "Dois Irmãos", "Vidigal"],
  date: "2026-05-25",
  author: "equipe-jeitinho",
  hero,
  heroAlt: "Vue depuis le sommet du Morro Dois Irmãos sur Ipanema et Leblon",
  sections: [
    { type: "p", text: "40 minutes de montée, une vue à couper le souffle sur toute la Zona Sul. La rando la plus rentable de Rio." },
    { type: "h2", text: "L'itinéraire" },
    { type: "p", text: "Départ depuis la favela du Vidigal — on prend un mototaxi jusqu'au Bar da Laje, puis 40 min à pied par un sentier bien tracé." },
    { type: "h2", text: "Quand y aller" },
    { type: "p", text: "Tôt le matin (départ 7h) ou en fin d'après-midi (départ 15h30 pour rentrer avant la nuit). Éviter le plein soleil de midi." },
    { type: "conseil", title: "Le conseil Jeitinho", text: "Prenez un guide local. Techniquement facile, mais l'orientation dans le Vidigal et la présence d'un local sont un plus." },
    { type: "aeviter", title: "À éviter", text: "Y aller de nuit ou seul. Pas dangereux en soi, mais des règles de bon sens s'appliquent." },
  ],
};
