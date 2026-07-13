import type { Article } from "../types";
import hero from "@/assets/article-marches-rio.jpg";

export const article: Article = {
  slug: "marches-bonnes-affaires-rio",
  title: "Marchés et bonnes affaires : le shopping malin à Rio",
  titleAccent: "bonnes affaires",
  description: "Saara, Uruguaiana, marché de Copacabana, Feira de Madureira : notre guide des meilleurs marchés pour faire de bonnes affaires à Rio.",
  category: "activites",
  tags: ["shopping", "marchés", "bons plans", "Rio de Janeiro"],
  date: "2026-07-11",
  author: "equipe-jeitinho",
  hero,
  heroAlt: "Rue commerçante animée du quartier de Saara à Rio de Janeiro avec de nombreuses boutiques",
  featured: false,
  guide: true,
  popular: false,
  relatedServices: [
    {
      label: "Conciergerie sur mesure",
      href: "https://www.jeitinho.fr/trouver-un-jeitinho",
      description: "Conseils locaux, bonnes adresses et accompagnement pour vos achats à Rio.",
    },
  ],
  sections: [
    { type: "p", text: "À Rio, il n'y a pas que les centres commerciaux. Si vous cherchez des maillots à petit prix, des souvenirs, des accessoires ou des déguisements de carnaval, certains marchés sont de véritables institutions." },
    { type: "p", text: "Ce guide n'est pas une liste théorique d'adresses. C'est ce qu'on dirait à un ami qui débarque : où aller, quoi y trouver, et comment négocier intelligemment." },

    { type: "h2", text: "Les meilleurs marchés de Rio" },
    { type: "h3", text: "Saara — Centro" },
    { type: "p", text: "Le plus grand quartier commerçant populaire de Rio, avec des centaines de boutiques proposant souvenirs, vêtements, décoration, accessoires, articles de carnaval et fournitures diverses. Idéal pour faire plusieurs achats en une seule journée." },
    { type: "h3", text: "Uruguaiana — Centro" },
    { type: "p", text: "Le paradis des bonnes affaires. Maillots de football, sneakers, casquettes, lunettes, accessoires et électronique s'y côtoient à des prix imbattables." },
    { type: "h3", text: "Marché de Copacabana — entre le Posto 4 et 5" },
    { type: "p", text: "Le marché artisanal le plus connu de la Zone Sud. On y trouve souvenirs, artisanat, objets en bois, tableaux, bijoux et t-shirts, parfait pour rapporter un souvenir authentique de Rio." },
    { type: "h3", text: "Feira de Madureira — Madureira" },
    { type: "p", text: "Le plus grand marché populaire de Rio. Une immersion dans le Rio des cariocas, avec vêtements, musique, produits afro-brésiliens, décoration, accessoires et articles de carnaval, en plus d'une excellente expérience culturelle." },
    { type: "conseil", title: "Le conseil Jeitinho", text: "Pendant le Carnaval, Saara et Uruguaiana deviennent les meilleurs endroits pour acheter déguisements, paillettes, accessoires et goodies. Les prix y sont souvent bien plus intéressants que dans les zones touristiques." },

    { type: "h2", text: "Pour un maillot non officiel de bonne qualité" },
    { type: "p", text: "Demandez toujours une « estampa tailandesa ». C'est la meilleure finition disponible sur les répliques de maillots, avec un prix moyen d'environ 60 R$ (soit environ 10 €)." },
    { type: "bonasavoir", title: "Bon à savoir", text: "Le paiement en espèces et en carte est accepté dans la majorité des boutiques de ces marchés. Les horaires sont principalement du lundi au samedi, beaucoup de commerces fermant tôt en soirée." },

    { type: "h2", text: "Le mot du jour : desconto" },
    { type: "p", text: "Vous entendrez souvent « Tem desconto ? » (une réduction ?). Il est possible de négocier dans certains stands, surtout si vous achetez plusieurs articles auprès du même vendeur." },

    { type: "aeviter", title: "À éviter", text: "Si le prix d'un article paraît trop beau pour être vrai, c'est probablement une copie de mauvaise qualité. Les boutiques officielles garantissent la qualité, tandis que les marchés proposent parfois des copies très réussies : soyez conscient de la différence avant d'acheter." },

    { type: "h2", text: "Pourquoi faire ses achats dans ces marchés" },
    { type: "ul", items: [
      "Prix imbattables sur une grande partie des produits.",
      "Large choix de produits, du souvenir à l'accessoire de carnaval.",
      "Ambiance locale et authentique, très différente des centres commerciaux.",
      "Parfait pour le Carnaval et les souvenirs et cadeaux à rapporter.",
    ]},

    { type: "faq", items: [
      { q: "Peut-on négocier les prix dans les marchés de Rio ?", a: "Oui, la négociation est possible dans certains stands, en particulier si vous achetez plusieurs articles auprès du même vendeur." },
      { q: "Quel est le meilleur marché pour les souvenirs authentiques ?", a: "Le marché de Copacabana, entre le Posto 4 et 5, reste la référence pour l'artisanat et les souvenirs typiques de la Zone Sud." },
      { q: "Comment reconnaître un maillot de football de bonne qualité sur un marché ?", a: "Demandez systématiquement une « estampa tailandesa », la meilleure finition disponible pour les répliques non officielles, à un prix d'environ 60 R$." },
      { q: "Ces marchés sont-ils sûrs pour les touristes ?", a: "Oui, en journée ces marchés sont très fréquentés et globalement sûrs, mais restez attentif à vos affaires comme dans tout lieu très fréquenté et dense." },
    ]},

    { type: "p", text: "Les marchés de Rio racontent une autre facette de la ville, plus populaire et plus authentique que les centres commerciaux. Une bonne affaire s'y trouve toujours, à condition de prendre le temps de chercher." },
  ],
};
