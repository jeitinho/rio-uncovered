import type { Article } from "../types";
import hero from "@/assets/hero-blog.jpg";

export const article: Article = {
  slug: "guide-plages-rio",
  title: "Les plages de Rio : au-delà d'Ipanema et Copacabana",
  titleAccent: "au-delà",
  description: "Guide des plages de Rio : les grandes classiques et les criques secrètes de la Zona Oeste.",
  category: "plages",
  tags: ["plages", "Prainha", "Grumari", "Copacabana"],
  date: "2026-06-05",
  author: "Marina Alves",
  hero,
  heroAlt: "Plage sauvage de Prainha à Rio",
  guide: true,
  sections: [
    { type: "p", text: "Rio compte plus de 30 plages sur 90 km de littoral. Les cartes postales n'en montrent que deux. On vous emmène plus loin." },
    { type: "h2", text: "Les grandes classiques" },
    { type: "ul", items: ["Copacabana — 4 km d'urbanité tropicale, la calçada iconique.", "Ipanema — plus chic, ambiance créative.", "Leblon — familial haut de gamme.", "Leme — la petite sœur calme de Copacabana."] },
    { type: "h2", text: "Les sauvages" },
    { type: "ul", items: ["Prainha — courbe parfaite, surfeurs, végétation.", "Grumari — sable rosé, quasi désert en semaine.", "Joatinga — cachée entre les rochers, accès mystérieux.", "Praia Vermelha — sable rouge sous le Pain de Sucre."] },
    { type: "conseil", title: "Le conseil Jeitinho", text: "Pour Prainha ou Grumari, Uber à l'aller (30-40 min), demandez au chauffeur de revenir ou réservez le retour — pas toujours de couverture réseau." },
  ],
};
