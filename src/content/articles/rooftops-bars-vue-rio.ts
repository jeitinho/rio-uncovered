import type { Article } from "../types";
import hero from "@/assets/article-rooftops-rio.jpg";

export const article: Article = {
  slug: "rooftops-bars-vue-rio",
  title: "Rooftops et bars : où boire un verre à Rio",
  titleAccent: "rooftops",
  description: "Du rooftop chic au boteco sans façade : notre sélection complète des meilleurs spots pour boire un verre à Rio, tous styles confondus.",
  category: "vie-nocturne",
  tags: ["rooftop", "bar", "coucher de soleil", "Rio de Janeiro"],
  date: "2026-06-20",
  author: "equipe-jeitinho",
  hero,
  heroAlt: "Cocktails sur une table de rooftop avec vue sur le coucher de soleil et le Pain de Sucre, Rio de Janeiro",
  featured: false,
  guide: true,
  popular: true,
  relatedServices: [
    {
      label: "Conciergerie sur mesure",
      href: "https://jeitinho.fr/trouver-un-jeitinho",
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
    { type: "p", text: "Rooftop de cet hôtel design de Botafogo, avec vue panoramique sur la baie de Guanabara, le Pain de Sucre et le Corcovado. À tester : gin tonica, poke bowl." },
    { type: "h3", text: "Sky Leme — Leme" },
    { type: "p", text: "Rooftop du Novotel Rio de Janeiro Leme, élu à plusieurs reprises meilleur rooftop de la ville. Vue à 360° sur la plage du Leme, Copacabana et le Pain de Sucre. À tester : cocktails signature, DJ sets en fin de semaine." },
    { type: "h3", text: "Santa Teresa Hotel — Santa Teresa" },
    { type: "p", text: "Rooftop avec une vue spectaculaire sur le centre-ville et la baie. Ambiance bohème et exclusive. À tester : caipirinha, vin maison." },
    { type: "h3", text: "Selina Lapa — Lapa" },
    { type: "p", text: "Rooftop animé en plein cœur de Lapa. Vue sur les Arcos et le centre-ville. Idéal pour un sunset décontracté. À tester : caipiroska, bière locale." },
    { type: "h3", text: "Fasano Rooftop Pool Lounge — Ipanema" },
    { type: "p", text: "Le « Bar da Piscina » de l'hôtel Fasano Rio, l'adresse la plus hype de la ville pour un coucher de soleil face à l'océan, avec sa piscine à débordement suspendue au-dessus de la plage d'Ipanema. Ambiance chic assumée, cocktails soignés. À tester : caipirinha au maracujá." },
    { type: "conseil", title: "Le conseil Jeitinho", text: "Arrivez avant le coucher du soleil pour avoir les meilleures places. Certains spots deviennent très fréquentés le week-end. Pensez à réserver quand c'est possible." },

    { type: "h2", text: "Bars authentiques et lieux incontournables" },
    { type: "h3", text: "Mirante do Arvrão — Vidigal" },
    { type: "p", text: "Le spot le plus iconique de Vidigal pour admirer le coucher de soleil. Vue panoramique sur Ipanema, Leblon, les Dois Irmãos et la Pedra da Gávea. À tester : caipirinha, bière gelée." },
    { type: "h3", text: "Bar da Laje — Vidigal" },
    { type: "p", text: "Construit sur une dalle rocheuse, ce bar unique offre une ambiance jeune, de la musique et une vue de folie sur la plage et le Morro Dois Irmãos." },
    { type: "h3", text: "Quintal da Barra — Barra da Tijuca" },
    { type: "p", text: "Sur l'animée Avenida Olegário Maciel, ce bar de quartier au charme fou avec patio arboré et esprit bohème est devenu un point de ralliement du secteur. Parfait pour boire un verre entre amis." },
    { type: "h3", text: "Raval — Barra da Tijuca" },
    { type: "p", text: "Toujours sur l'Olegário, un bar à vin nature et cocktails créatifs dans un cadre intimiste et branché, avec une musique pointue et une clientèle cool." },
    { type: "h3", text: "Cafofo Pub — Botafogo" },
    { type: "p", text: "Petit pub convivial de Botafogo, prisé pour ses bières artisanales et son ambiance décontractée entre amis, loin des adresses les plus touristiques." },
    { type: "h3", text: "Rio Scenarium — Lapa" },
    { type: "p", text: "Maison à trois étages remplie d'antiquités, samba et forró live tous les soirs. Une institution de Lapa, autant pour le décor que pour la musique." },
    { type: "h3", text: "Bar do David — Chapéu Mangueira" },
    { type: "p", text: "Niché dans une favela au-dessus de Leme, feijoada réputée et vue imprenable sur l'océan. Repéré par des chefs internationaux, resté simple et local." },
    { type: "h3", text: "Bip Bip — Copacabana" },
    { type: "p", text: "Minuscule bar sans façade, samba et choro improvisés par des musiciens de passage. Zéro décorum, l'antithèse du rooftop branché." },
    { type: "bonasavoir", title: "Bon à savoir", text: "Les meilleurs moments pour profiter d'un rooftop : entre 17h et 18h30 pour éviter la foule, entre 18h30 et 19h30 pour la golden hour et les meilleures photos, et après 19h30 pour l'ambiance qui monte et les lieux qui s'illuminent." },

    { type: "aeviter", title: "À éviter", text: "Une tenue correcte est appréciée dans la plupart des rooftops et bars branchés de Rio, en particulier dans les hôtels comme le Fairmont, le Fasano ou le Santa Teresa Hotel. Certains lieux ferment tard : vérifiez toujours les horaires avant de vous déplacer." },

    { type: "h2", text: "Le mot du jour : vista" },
    { type: "p", text: "Vous entendrez souvent « Que vista incrível ! » (quelle vue incroyable !). À Rio, la vue fait souvent partie intégrante de l'expérience, autant que la carte des cocktails elle-même." },

    { type: "faq", items: [
      { q: "Faut-il réserver pour un rooftop à Rio ?", a: "C'est fortement recommandé le week-end et pour les rooftops d'hôtels comme le Fairmont, le Fasano ou le Santa Teresa Hotel, particulièrement prisés au coucher du soleil." },
      { q: "Quel rooftop offre la meilleure vue sur le Pain de Sucre ?", a: "Le YOO2 à Botafogo et le Rooftop Fairmont à Copacabana offrent tous deux une vue directe et spectaculaire sur le Pain de Sucre." },
      { q: "Les rooftops de Vidigal sont-ils accessibles sans voiture ?", a: "Un Uber ou un moto-taxi de communauté reste le moyen le plus simple pour rejoindre les rooftops de Vidigal, la zone étant en hauteur et peu desservie par les transports classiques." },
      { q: "Où boire un verre loin de l'ambiance touristique ?", a: "Bip Bip à Copacabana ou Bar do David à Chapéu Mangueira offrent une expérience bien plus locale que les rooftops d'hôtels, avec une ambiance authentique et sans chichi." },
      { q: "Privilégier les espèces ou la carte dans ces établissements ?", a: "Privilégiez les espèces ou vérifiez si la carte est acceptée avant de commander, en particulier dans les bars plus locaux et moins touristiques." },
    ]},

    { type: "p", text: "À Rio, un simple verre au coucher du soleil peut devenir l'un des souvenirs les plus marquants du voyage. Choisissez votre vue, votre ambiance, et laissez la lumière carioca faire le reste." },
  ],
};
