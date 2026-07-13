import type { Article } from "../types";
import hero from "@/assets/article-rodizio-rio.jpg";

export const article: Article = {
  slug: "rodizios-fruits-de-mer-rio",
  title: "Rodízios et fruits de mer : les meilleures tables de Rio",
  titleAccent: "rodízios",
  description: "Assador, Mocellin, Porcão, Marius Degustare, Zée Oyster Bar : notre sélection des meilleurs rodízios et adresses de fruits de mer à Rio.",
  category: "gastronomie",
  tags: ["rodízio", "fruits de mer", "gastronomie", "Rio de Janeiro"],
  date: "2026-07-11",
  author: "equipe-jeitinho",
  hero,
  heroAlt: "Viande grillée à la broche servie dans une churrascaria de Rio de Janeiro",
  featured: false,
  guide: true,
  popular: true,
  relatedServices: [
    {
      label: "Conciergerie sur mesure",
      href: "https://www.jeitinho.fr/trouver-un-jeitinho",
      description: "On vous réserve une table dans les meilleurs rodízios de Rio.",
    },
  ],
  sections: [
    { type: "p", text: "À Rio, le rodízio est une institution et les fruits de mer font partie de l'ADN carioca. Voici notre sélection des meilleures adresses pour une expérience inoubliable, entre viandes d'exception et produits de la mer d'une fraîcheur irréprochable." },
    { type: "p", text: "Ce guide n'est pas une simple liste de restaurants. C'est ce qu'on dirait à un ami qui débarque : où aller, à quelle heure, et quoi commander en priorité." },

    { type: "h2", text: "Les meilleurs rodízios de viande" },
    { type: "h3", text: "Assador — Botafogo" },
    { type: "p", text: "Référence absolue du rodízio à Rio. Viandes premium, service impeccable et buffet gastronomique complet. À tester : picanha, ancho, costela, fogo de chão, coração de frango." },
    { type: "h3", text: "Mocellin — Tijuca" },
    { type: "p", text: "Tradition depuis 1947. Qualité constante et large choix de viandes nobles dans une ambiance chaleureuse et familiale. À tester : picanha, maminha, cordeiro, costela." },
    { type: "h3", text: "Porcão Rio's — Barra da Tijuca" },
    { type: "p", text: "L'un des rodízios les plus complets de la ville. Buffet varié et viandes cuites à la perfection, dans une ambiance spacieuse et animée. À tester : picanha, fraldinha, costela, cupim." },
    { type: "h3", text: "Churrascaria Palace — Copacabana" },
    { type: "p", text: "Institution carioca depuis 1951. Un rodízio classique et généreux, parfait pour les amateurs de viande, dans un cadre classique et élégant. À tester : picanha, alcatra, linguiça, frango." },
    { type: "conseil", title: "Le conseil Jeitinho", text: "Pour le rodízio, arrivez avant 20h pour profiter de toutes les viandes proposées tout au long du service, avant que certaines pièces plus recherchées ne soient épuisées." },

    { type: "h2", text: "Les meilleures adresses de fruits de mer" },
    { type: "h3", text: "Marius Degustare — Urca" },
    { type: "p", text: "Spécialiste des fruits de mer avec une vue imprenable sur la baie. Produits ultra frais et service premium. À tester : moqueca, camarão VG, linguine aux fruits de mer." },
    { type: "h3", text: "O Príncipe de Mônaco — Copacabana" },
    { type: "p", text: "Un classique depuis 1953. Fruits de mer d'exception et recettes traditionnelles portugaises. À tester : bacalhau à Brás, lagosta, arroz de frutos do mar." },
    { type: "h3", text: "Zée Oyster Bar — Botafogo" },
    { type: "p", text: "Les meilleures huîtres de Rio et fruits de mer dans une ambiance décontractée et moderne. À tester : huîtres, crudo de peixe, poulpe grillé." },
    { type: "h3", text: "Leme Oyster Bar — Leme" },
    { type: "p", text: "Face à la mer à Leme. Produits frais, recettes généreuses et cadre les pieds dans le sable. À tester : moqueca de peixe, camarões grillés, huîtres." },
    { type: "bonasavoir", title: "Bon à savoir", text: "Pour les fruits de mer, privilégiez le déjeuner plutôt que le dîner : les produits sont généralement plus frais et l'ambiance plus calme, propice à savourer chaque plat sans se presser." },

    { type: "h2", text: "Les clés d'une expérience réussie" },
    { type: "ul", items: [
      "Réservez à l'avance, surtout le week-end et en haute saison.",
      "Allez léger avant ! Pour profiter de toutes les viandes ou fruits de mer à volonté sans regret.",
      "Prenez votre temps, une bonne expérience se savoure tranquillement, sans se presser.",
      "Profitez du cadre : Rio offre des vues uniques, savourez chaque instant.",
    ]},

    { type: "aeviter", title: "À éviter", text: "N'arrivez pas affamé après une journée entière sans manger avant un rodízio : le rythme du service et la diversité des viandes se dégustent mieux avec un appétit progressif plutôt qu'un jeûne préalable." },

    { type: "h2", text: "Le mot du jour : rodízio" },
    { type: "p", text: "Vous entendrez souvent « Vamos fazer um rodízio ? » (on fait un rodízio ?). Le principe est simple : un buffet à volonté où les serveurs circulent entre les tables avec différentes coupes de viande grillée, servies directement à la broche jusqu'à ce que vous décidiez d'arrêter." },

    { type: "faq", items: [
      { q: "Faut-il réserver pour un rodízio à Rio ?", a: "C'est fortement recommandé le week-end et en haute saison, en particulier dans les adresses les plus réputées comme Assador ou Porcão Rio's." },
      { q: "Quelle est la meilleure heure pour un rodízio ?", a: "Arrivez avant 20h pour profiter de l'intégralité des viandes proposées durant tout le service, avant que les pièces les plus populaires ne s'épuisent." },
      { q: "Où manger les meilleures huîtres à Rio ?", a: "Zée Oyster Bar à Botafogo est une référence pour les huîtres fraîches, dans une ambiance moderne et décontractée." },
      { q: "Quel est le prix moyen d'un rodízio à Rio ?", a: "Comptez généralement entre 100 et 200 R$ par personne selon l'établissement, boissons non comprises." },
    ]},

    { type: "p", text: "Un rodízio ou un déjeuner de fruits de mer à Rio, c'est bien plus qu'un repas : c'est une expérience à part entière, à savourer sans se presser, dans l'un des cadres les plus généreux de la gastronomie carioca." },
  ],
};
