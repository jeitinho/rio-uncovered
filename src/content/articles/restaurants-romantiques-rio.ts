import type { Article } from "../types";
import hero from "@/assets/article-restaurants-romantiques-rio.jpg";

export const article: Article = {
  slug: "restaurants-romantiques-rio",
  title: "Les restaurants les plus romantiques de Rio",
  titleAccent: "romantiques",
  description: "Aprazível, Oro, Zazá Bistrô Tropical, Cipriani : notre sélection des restaurants les plus romantiques de Rio pour un dîner mémorable.",
  category: "gastronomie",
  tags: ["gastronomie", "romantique", "dîner", "Rio de Janeiro"],
  date: "2026-07-11",
  author: "equipe-jeitinho",
  hero,
  heroAlt: "Table de dîner romantique aux chandelles avec vue sur la baie de Guanabara au coucher du soleil, Rio de Janeiro",
  featured: false,
  guide: true,
  popular: false,
  relatedServices: [
    {
      label: "Conciergerie sur mesure",
      href: "https://www.jeitinho.fr/trouver-un-jeitinho",
      description: "On vous réserve une table dans les restaurants les plus romantiques de Rio.",
    },
  ],
  sections: [
    { type: "p", text: "Dîners à la lueur des bougies, vues imprenables et ambiances intimistes... Voici notre sélection des restaurants les plus romantiques de Rio pour célébrer l'amour et créer des souvenirs mémorables." },
    { type: "p", text: "Ce guide n'est pas une simple liste de bonnes adresses. C'est ce qu'on dirait à un ami qui prépare une occasion spéciale : où réserver, et pourquoi." },

    { type: "h2", text: "Nos restaurants coup de cœur" },
    { type: "h3", text: "Aprazível — Santa Teresa" },
    { type: "p", text: "Cuisine brésilienne contemporaine dans un cadre historique avec une vue spectaculaire sur le centre. Ambiance intime et élégante, à tester : moqueca de peixe." },
    { type: "h3", text: "Oro — Leblon" },
    { type: "p", text: "Expérience gastronomique unique du chef Felipe Bronze, étoilé Michelin. Menu dégustation créatif et raffiné, idéal pour les occasions spéciales." },
    { type: "h3", text: "L'Atelier Mota — Jardim Botânico" },
    { type: "p", text: "Cuisine d'auteur dans une maison charmante entourée de verdure. Calme absolu et romantisme garanti, à tester : risotto de camarão." },
    { type: "h3", text: "Zazá Bistrô Tropical — Ipanema" },
    { type: "p", text: "Bistronomie tropicale dans un jardin secret à Ipanema. Idéal pour un dîner romantique à deux, cadre intime et chaleureux avec jardin caché." },
    { type: "h3", text: "Giuseppe Grill — Ipanema" },
    { type: "p", text: "Cuisine italienne raffinée face à la mer. Un classique pour les dîners romantiques à Rio, ambiance classique et chic avec vue sur la plage d'Ipanema." },
    { type: "h3", text: "Rocco — Copacabana" },
    { type: "p", text: "Cuisine méditerranéenne avec une vue imprenable sur la Praia de Copacabana. Ambiance romantique et chic, à tester : polvo grelhado." },
    { type: "h3", text: "Eva — Leblon" },
    { type: "p", text: "Restaurant espagnol intime et élégant. Parfait pour une soirée en amoureux, à tester : paella de frutos do mar." },
    { type: "h3", text: "Cipriani — Copacabana Palace" },
    { type: "p", text: "Institution italienne mythique dans l'un des hôtels les plus iconiques de Rio. Luxe et romantisme garantis, à tester : carpaccio Cipriani." },
    { type: "h3", text: "Adega Santiago — Leblon" },
    { type: "p", text: "Cave à vin et restaurant portugais avec une ambiance tamisée et une carte de vins exceptionnelle, à tester : bacalhau à lagareiro." },
    { type: "h3", text: "Gurumê — Botafogo" },
    { type: "p", text: "Cuisine nikkei (japonaise-péruvienne) avec une vue panoramique sur la baie de Botafogo, ambiance moderne et élégante." },
    { type: "conseil", title: "Le conseil Jeitinho", text: "Réservez à l'avance, surtout le week-end et au coucher du soleil. Privilégiez les tables en terrasse ou avec vue pour une expérience encore plus magique." },

    { type: "h2", text: "Les petits plus qui font la différence" },
    { type: "ul", items: [
      "Demandez une table en terrasse ou avec vue.",
      "Réservez pour le coucher du soleil, plus impressionnant encore que le dîner lui-même dans certains établissements.",
      "Précisez une occasion spéciale : la plupart des établissements adorent rendre le moment unique.",
      "Goûtez les desserts maison, toujours une belle surprise dans ces adresses.",
      "Profitez d'un digestif ou d'un cocktail à la fin du dîner pour prolonger la soirée.",
    ]},
    { type: "bonasavoir", title: "Bon à savoir", text: "Une tenue correcte est appréciée dans la plupart de ces établissements. Les dîners commencent généralement à partir de 19h, et certains restaurants ferment le lundi ou le mardi : vérifiez les horaires avant de vous déplacer." },

    { type: "aeviter", title: "À éviter", text: "Ne réservez pas à la dernière minute pour un week-end ou une date symbolique (Saint-Valentin, anniversaire) : les meilleures tables avec vue partent plusieurs semaines à l'avance dans les adresses les plus prisées." },

    { type: "h2", text: "Le mot du jour : romântico" },
    { type: "p", text: "Vous entendrez souvent « Um jantar romântico » (un dîner romantique). N'hésitez pas à utiliser cette expression directement lors de votre réservation pour que l'établissement adapte l'accueil et, parfois, la table." },

    { type: "faq", items: [
      { q: "Quel est le restaurant le plus romantique de Rio ?", a: "Aprazível à Santa Teresa et Zazá Bistrô Tropical à Ipanema sont souvent cités parmi les plus romantiques, grâce à leurs cadres végétalisés et intimistes." },
      { q: "Faut-il réserver longtemps à l'avance pour ces restaurants ?", a: "Oui, en particulier le week-end et pour les dates symboliques comme la Saint-Valentin ou un anniversaire, où les meilleures tables avec vue partent vite." },
      { q: "Quelle tenue prévoir pour un dîner romantique à Rio ?", a: "Une tenue correcte est généralement appréciée : chemise ou robe légère suffisent dans la plupart des établissements, sauf mention contraire lors de la réservation." },
      { q: "Quel restaurant choisir pour une occasion vraiment exceptionnelle ?", a: "Oro à Leblon (étoilé Michelin) ou Cipriani au Copacabana Palace sont les références absolues pour une occasion vraiment unique." },
    ]},

    { type: "p", text: "Un dîner romantique à Rio, c'est souvent la combinaison d'une bonne cuisine, d'une vue mémorable et d'un cadre pensé pour les moments importants. Réservez à l'avance, et laissez la ville faire le reste." },
  ],
};
