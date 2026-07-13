import type { Article } from "../types";
import hero from "@/assets/article-rooftops-rio.jpg";

export const article: Article = {
  slug: "rooftops-bars-vue-rio",
  title: "Rooftops et bars avec vue : où boire un verre à Rio",
  titleAccent: "rooftops",
  description: "Fairmont, YOO2, Terrazza 40, Mirante do Arvrão : notre sélection des meilleurs rooftops et bars avec vue pour un coucher de soleil inoubliable à Rio.",
  category: "vie-nocturne",
  tags: ["rooftop", "bar", "coucher de soleil", "Rio de Janeiro"],
  date: "2026-07-11",
  author: "equipe-jeitinho",
  hero,
  heroAlt: "Cocktails sur une table de rooftop avec vue sur le coucher de soleil et le Pain de Sucre, Rio de Janeiro",
  featured: false,
  guide: true,
  popular: true,
  relatedServices: [
    {
      label: "Conciergerie sur mesure",
      href: "https://www.jeitinho.fr/trouver-un-jeitinho",
      description: "On vous réserve une table dans les meilleurs rooftops de Rio.",
    },
  ],
  sections: [
    { type: "p", text: "À Rio, chaque coucher de soleil est un spectacle. Rooftops élégants, bars cachés ou lieux authentiques : voici notre sélection des meilleurs spots pour boire un verre et profiter de la ville sous tous ses angles." },
    { type: "p", text: "Ce guide n'est pas une simple carte de bars branchés. C'est ce qu'on dirait à un ami qui débarque : où aller selon l'ambiance recherchée, et à quelle heure y être." },

    { type: "h2", text: "Rooftops avec vue imprenable" },
    { type: "h3", text: "Rooftop Fairmont — Copacabana" },
    { type: "p", text: "Élégance et raffinement au sommet du Fairmont Rio. Vue imprenable sur Copacabana et le Pain de Sucre. Parfait pour un apéritif chic. À tester : signature cocktails." },
    { type: "h3", text: "YOO2 Rio de Janeiro — Botafogo" },
    { type: "p", text: "Rooftop moderne au 32ème étage avec piscine à débordement et vue panoramique sur la baie de Botafogo et le Pain de Sucre. À tester : gin tonica, poke bowl." },
    { type: "h3", text: "Terrazza 40 — Leblon" },
    { type: "p", text: "Rooftop italien avec vue sur Ipanema et le Morro Dois Irmãos. Cuisine méditerranéenne et cocktails créatifs. À tester : negroni, spritz." },
    { type: "h3", text: "Santa Teresa Hotel — Santa Teresa" },
    { type: "p", text: "Rooftop avec une vue spectaculaire sur le centre-ville et la baie. Ambiance bohème et exclusive. À tester : caipirinha, vin maison." },
    { type: "h3", text: "Selina Lapa — Lapa" },
    { type: "p", text: "Rooftop animé en plein cœur de Lapa. Vue sur les Arcos et le centre-ville. Idéal pour un sunset décontracté. À tester : caipiroska, bière locale." },
    { type: "conseil", title: "Le conseil Jeitinho", text: "Arrivez avant le coucher du soleil pour avoir les meilleures places. Certains spots deviennent très fréquentés le week-end. Pensez à réserver quand c'est possible." },

    { type: "h2", text: "Bars authentiques et lieux incontournables" },
    { type: "h3", text: "Mirante do Arvrão — Vidigal" },
    { type: "p", text: "Le spot le plus iconique de Vidigal pour admirer le coucher de soleil. Vue panoramique sur Ipanema, Leblon, les Dois Irmãos et la Pedra da Gávea. À tester : caipirinha, bière gelée." },
    { type: "h3", text: "Bar da Laje — Vidigal" },
    { type: "p", text: "Construit sur une dalle rocheuse, ce bar unique offre une ambiance jeune, de la musique et une vue de folie sur la plage et le Morro Dois Irmãos." },
    { type: "h3", text: "Le Quintal — Olégario" },
    { type: "p", text: "Bar de quartier au charme fou, patio arboré et esprit bohème. Parfait pour boire un verre entre amis." },
    { type: "h3", text: "Raval — Olégario" },
    { type: "p", text: "Bar à vin nature et cocktails créatifs dans un cadre intimiste et branché, avec une musique pointue et une clientèle cool." },
    { type: "h3", text: "Cafofo — Santa Teresa" },
    { type: "p", text: "Niché sur les hauteurs de Santa Teresa, le Cafofo offre une vue spectaculaire et une ambiance artistique." },
    { type: "bonasavoir", title: "Bon à savoir", text: "Les meilleurs moments pour profiter d'un rooftop : entre 17h et 18h30 pour éviter la foule, entre 18h30 et 19h30 pour la golden hour et les meilleures photos, et après 19h30 pour l'ambiance qui monte et les lieux qui s'illuminent." },

    { type: "aeviter", title: "À éviter", text: "Une tenue correcte est appréciée dans la plupart des rooftops et bars branchés de Rio, en particulier dans les hôtels comme le Fairmont ou le Santa Teresa Hotel. Certains lieux ferment tard : vérifiez toujours les horaires avant de vous déplacer." },

    { type: "h2", text: "Le mot du jour : vista" },
    { type: "p", text: "Vous entendrez souvent « Que vista incrível ! » (quelle vue incroyable !). À Rio, la vue fait souvent partie intégrante de l'expérience, autant que la carte des cocktails elle-même." },

    { type: "faq", items: [
      { q: "Faut-il réserver pour un rooftop à Rio ?", a: "C'est fortement recommandé le week-end et pour les rooftops d'hôtels comme le Fairmont ou le Santa Teresa Hotel, particulièrement prisés au coucher du soleil." },
      { q: "Quel rooftop offre la meilleure vue sur le Pain de Sucre ?", a: "Le YOO2 à Botafogo et le Rooftop Fairmont à Copacabana offrent tous deux une vue directe et spectaculaire sur le Pain de Sucre." },
      { q: "Les rooftops de Vidigal sont-ils accessibles sans voiture ?", a: "Un Uber ou un moto-taxi de communauté reste le moyen le plus simple pour rejoindre les rooftops de Vidigal, la zone étant en hauteur et peu desservie par les transports classiques." },
      { q: "Privilégier les espèces ou la carte dans ces établissements ?", a: "Privilégiez les espèces ou vérifiez si la carte est acceptée avant de commander, en particulier dans les bars plus locaux et moins touristiques." },
    ]},

    { type: "p", text: "À Rio, un simple verre au coucher du soleil peut devenir l'un des souvenirs les plus marquants du voyage. Choisissez votre vue, votre ambiance, et laissez la lumière carioca faire le reste." },
  ],
};
