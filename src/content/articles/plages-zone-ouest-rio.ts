import type { Article } from "../types";
import hero from "@/assets/article-zone-ouest-rio.jpg";

export const article: Article = {
  slug: "plages-zone-ouest-rio",
  title: "Les plages sauvages de la Zone Ouest de Rio",
  titleAccent: "sauvages",
  description: "Praia da Reserva, Macumba, Prainha, Grumari, Praia do Secreto : notre guide des plages et cascades préservées de la Zone Ouest de Rio.",
  category: "plages",
  tags: ["plages", "nature", "Zone Ouest", "Rio de Janeiro"],
  date: "2026-07-11",
  author: "equipe-jeitinho",
  hero,
  heroAlt: "Plage sauvage bordée de montagnes et de végétation dans la Zone Ouest de Rio de Janeiro",
  featured: false,
  guide: true,
  popular: false,
  relatedServices: [
    {
      label: "Transferts Jeitinho",
      href: "https://www.jeitinho.fr/trouver-un-jeitinho",
      description: "Transferts privés sur mesure vers les plages et cascades de la Zone Ouest.",
    },
  ],
  sections: [
    { type: "p", text: "À l'ouest de Rio, la nature est reine. Des plages encore sauvages, idéales pour se déconnecter, et des cascades au cœur de la forêt pour se ressourcer : la Zone Ouest offre un Rio radicalement différent de la Zona Sul balnéaire, à seulement quelques dizaines de minutes de <a href=\"/blog/barra-da-tijuca-guide-complet\">Barra da Tijuca</a>." },
    { type: "p", text: "Ce guide n'est pas une simple carte de plages isolées. C'est ce qu'on dirait à un ami qui débarque : quelle plage choisir, quelle cascade visiter, et comment s'organiser." },

    { type: "h2", text: "Les plages de la Zone Ouest" },
    { type: "h3", text: "Praia da Reserva" },
    { type: "p", text: "Longue plage sauvage bordée de nature, parfaite pour les longues balades, le surf et les sports de plein air. Ambiance sauvage et paisible, accès facile en voiture." },
    { type: "h3", text: "Praia da Macumba" },
    { type: "p", text: "Très appréciée des surfeurs et des familles. Ambiance détendue avec de bons kiosques de plage, accès facile en voiture, idéale pour le surf et la baignade." },
    { type: "h3", text: "Prainha" },
    { type: "p", text: "Petite plage entourée de montagnes et de végétation, peu fréquentée. Idéale pour ceux qui cherchent calme et nature brute, avec une eau propre et une ambiance jeune et tranquille." },
    { type: "h3", text: "Praia de Grumari" },
    { type: "p", text: "Plage immense et préservée, ambiance sauvage et calme, parfaite pour la nature et le surf. L'accès se fait par une route non goudronnée, ce qui contribue à préserver sa tranquillité." },
    { type: "h3", text: "Praia do Secreto" },
    { type: "p", text: "Petite crique secrète entre les rochers, avec une piscine naturelle incroyable. Un vrai coin de paradis, intime et préservé, idéal pour la baignade et le snorkeling." },
    { type: "conseil", title: "Le conseil Jeitinho", text: "Pour profiter pleinement de la Zone Ouest, partez tôt le matin et restez jusqu'au coucher du soleil. Moins de monde, plus de nature et une lumière incroyable pour les photos." },

    { type: "h2", text: "Les cascades de la Zone Ouest" },
    { type: "h3", text: "Cachoeira do Horto" },
    { type: "p", text: "La plus célèbre et la plus accessible, avec des bassins naturels parfaits pour se baigner en famille." },
    { type: "h3", text: "Cachoeira da Penha" },
    { type: "p", text: "Plus sauvage, avec un cadre magnifique en pleine forêt. Nécessite une randonnée modérée mais la baignade y est possible." },
    { type: "h3", text: "Poço do Céu" },
    { type: "p", text: "Eau cristalline et grande piscine naturelle, accessible après une courte randonnée." },
    { type: "h3", text: "Piscina do Secreto" },
    { type: "p", text: "Piscine naturelle entre les rochers, eau cristalline et ambiance secrète. Randonnée courte mais très suave (glissante), prudence recommandée." },
    { type: "aeviter", title: "À éviter" },
    { type: "ul", items: [
      "N'oubliez pas votre crème solaire, répulsif et de bonnes chaussures : les sentiers de la Zone Ouest sont peu ombragés et parfois accidentés.",
      "Évitez de laisser des objets de valeur visibles dans votre véhicule ou sur la plage.",
      "Privilégiez l'argent liquide : peu de cartes sont acceptées dans cette zone plus isolée.",
    ]},

    { type: "h2", text: "Comment organiser sa journée" },
    { type: "p", text: "Voiture ou chauffeur privé restent les meilleures options pour explorer la Zone Ouest : les bus ne desservent pas ces zones de manière fiable, et les distances entre chaque site peuvent être importantes." },
    { type: "bonasavoir", title: "Bon à savoir", text: "Respectez la nature et faites attention sur les sentiers et dans les zones isolées. La Zone Ouest reste moins encadrée que la Zona Sul : mieux vaut y aller en groupe ou avec un guide local pour les cascades les plus reculées." },

    { type: "h2", text: "À ne pas manquer" },
    { type: "ul", items: [
      "Surf à Grumari, parfait pour les surfeurs de tous niveaux.",
      "Randonnée au Morro do Pão de Açúcar (Zona Oeste), vue panoramique spectaculaire sur la région.",
      "Baignade à la Cachoeira do Horto, un classique rafraîchissant en pleine forêt.",
      "Coucher de soleil à Macumba, l'un des plus beaux de Rio.",
      "Snorkeling à la Piscina do Secreto, eaux cristallines et vie marine au rendez-vous.",
    ]},

    { type: "faq", items: [
      { q: "La Zone Ouest est-elle loin de la Zona Sul ?", a: "Comptez entre 30 minutes et une heure en voiture depuis Ipanema ou Copacabana selon la plage ou la cascade visée et le trafic du moment." },
      { q: "Faut-il un guide pour visiter les cascades ?", a: "Ce n'est pas obligatoire pour les plus accessibles comme la Cachoeira do Horto, mais recommandé pour les sites plus isolés comme le Poço do Céu." },
      { q: "Peut-on combiner plage et cascade dans la même journée ?", a: "Oui, avec un véhicule privé ou un chauffeur, il est tout à fait possible de combiner une matinée plage et une après-midi cascade dans la Zone Ouest." },
      { q: "Les plages de la Zone Ouest sont-elles surveillées ?", a: "Certaines le sont, mais moins densément que la Zona Sul. Respectez les zones de baignade recommandées et restez prudent en l'absence de sauveteurs visibles." },
    ]},

    { type: "p", text: "La Zone Ouest, c'est le Rio que peu de touristes prennent le temps de découvrir : plages sauvages, cascades cachées et une nature encore préservée, à seulement quelques kilomètres de l'agitation de la Zona Sul." },
  ],
};
