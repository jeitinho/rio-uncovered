import type { Article } from "../types";
import hero from "@/assets/hero-blog.jpg";

export const article: Article = {
  slug: "ou-dormir-rio-quartiers",
  title: "Où dormir à Rio : le vrai comparatif des quartiers",
  titleAccent: "vrai",
  description: "Ipanema, Leblon, Copacabana, Santa Teresa : notre comparatif honnête pour choisir où loger à Rio.",
  category: "hebergements",
  tags: ["hôtels", "quartiers", "hébergement"],
  date: "2026-04-10",
  author: "equipe-jeitinho",
  hero,
  heroAlt: "Terrasse d'un hôtel avec vue sur la baie de Rio",
  sections: [
    { type: "p", text: "Le choix du quartier compte plus que celui de l'hôtel. Trois profils, trois recommandations." },
    { type: "h2", text: "Premier séjour, envie de la Rio des cartes postales" },
    { type: "p", text: "Copacabana. Grand choix d'hôtels, vue mer facile, métro à disposition, ambiance vibrante. Fasano Copacabana si budget luxe, Arena Copacabana en 4* solide, Selina si budget serré." },
    { type: "h2", text: "Voyage plus raffiné, moins touristique" },
    { type: "p", text: "Ipanema ou Leblon. Restaurants, boutiques créatives, plage plus élégante. Fasano Ipanema, Praia Ipanema Hotel, Casa Mosquito (boutique)." },
    { type: "h2", text: "Envie de bohème et de couleurs" },
    { type: "p", text: "Santa Teresa. Ancienne colline aristocratique, aujourd'hui quartier d'artistes. Hotel Santa Teresa (référence), Mama Ruisa (guesthouse française)." },
    { type: "conseil", title: "Le conseil Jeitinho", text: "Ne dormez pas à Barra ni à Recreio pour un premier séjour, même si les hôtels ont l'air neufs et propres. Vous perdrez 1h à chaque déplacement." },
  ],
};
