import type { Article } from "../types";
import hero from "@/assets/article-marches-rio.jpg";

export const article: Article = {
  slug: "marches-bonnes-affaires-rio",
  title: "Marchés et bonnes affaires : le shopping malin à Rio",
  titleAccent: "bonnes affaires",
  description:
    "Saara, Uruguaiana, marché de Copacabana, Feira de Madureira : notre guide complet des marchés de Rio, prix, négociation et bonnes affaires par quartier.",
  category: "activites",
  tags: [
    "shopping Rio de Janeiro",
    "marchés Rio",
    "bonnes affaires",
    "Saara",
    "Uruguaiana",
    "Madureira",
  ],
  date: "2026-07-11",
  author: "equipe-jeitinho",
  hero,
  heroAlt:
    "Rue commerçante animée du quartier de Saara à Rio de Janeiro avec de nombreuses boutiques",
  featured: false,
  guide: true,
  popular: false,

  relatedServices: [
    {
      label: "Conciergerie sur mesure",
      href: "https://jeitinho.fr/trouver-un-jeitinho",
      description:
        "Conseils locaux, bonnes adresses et accompagnement pour vos achats à Rio.",
    },
  ],

  sections: [
    {
      type: "p",
      text:
        "À Rio, il n'y a pas que les centres commerciaux climatisés. Si vous cherchez des maillots à petit prix, des souvenirs qui changent des aimants de frigo, des accessoires ou des déguisements de carnaval, une poignée de marchés populaires restent de véritables institutions — et une expérience carioca à part entière.",
    },
    {
      type: "p",
      text:
        "Ce guide n'est pas une liste théorique d'adresses. C'est ce qu'on dirait à un ami qui débarque : où aller selon ce que vous cherchez, quoi y trouver, comment négocier sans se faire avoir, et ce qu'il vaut mieux éviter d'acheter sur place.",
    },

    {
      type: "h2",
      text: "Les quatre marchés à connaître",
    },

    {
      type: "h3",
      text: "Saara — Centro",
    },
    {
      type: "p",
      text:
        "Le plus grand quartier commerçant populaire de Rio : plusieurs centaines de boutiques serrées les unes contre les autres, réparties sur une dizaine de rues piétonnes autour de la Rua da Alfândega. Vous y trouverez à peu près tout — souvenirs, vêtements, décoration, tissus, mercerie, accessoires et articles de carnaval — à des prix nettement en dessous de la Zona Sul.",
    },
    {
      type: "p",
      text:
        "C'est aussi le meilleur endroit pour faire plusieurs types d'achats en une seule sortie : on y vient rarement pour un seul article. Ouvert du lundi au samedi, l'ambiance est particulièrement dense en fin de matinée et début d'après-midi.",
    },

    {
      type: "h3",
      text: "Uruguaiana — Centro",
    },
    {
      type: "p",
      text:
        "À deux pas de Saara, autour de la station de métro du même nom, Uruguaiana est le paradis de la bonne affaire assumée. Maillots de football, sneakers, casquettes, lunettes de soleil, montres, accessoires et petit électronique s'y côtoient à des prix qui font sourire quand on arrive d'Europe.",
    },
    {
      type: "p",
      text:
        "L'essentiel de la marchandise n'est pas officielle — c'est précisément l'intérêt du quartier — donc gardez vos attentes de qualité alignées sur le prix payé, et négociez sans complexe.",
    },

    {
      type: "h3",
      text: "Marché de Copacabana — entre le Posto 4 et le Posto 5",
    },
    {
      type: "p",
      text:
        "Le marché artisanal le plus connu de la Zona Sul, installé le long du calçadão tous les jours. Souvenirs, artisanat, objets en bois, tableaux naïfs, bijoux fantaisie et t-shirts composent l'essentiel de l'offre : parfait pour rapporter un souvenir qui ne vient pas d'une boutique d'aéroport.",
    },
    {
      type: "p",
      text:
        "C'est aussi le plus simple à visiter sans détour, puisqu'il se trouve littéralement sur la promenade de Copacabana — pratique en sortant de la plage ou en fin d'après-midi.",
    },

    {
      type: "h3",
      text: "Feira de Madureira — Madureira",
    },
    {
      type: "p",
      text:
        "Le plus grand marché populaire de Rio, en Zona Norte. On y vient moins pour une liste précise d'achats que pour une immersion complète dans le Rio du quotidien : vêtements, musique, produits afro-brésiliens, décoration, accessoires de carnaval, épices et street food se mélangent sur plusieurs rues.",
    },
    {
      type: "p",
      text:
        "C'est aussi le quartier où se prépare une bonne partie de l'univers du carnaval et du samba populaire — voir notre guide sur <a href=\"/blog/preparer-carnaval-rio\">préparer son Carnaval à Rio</a> pour le contexte. Comptez une bonne demi-journée si vous voulez vraiment en profiter, idéalement accompagné d'un local pour une première visite.",
    },

    {
      type: "conseil",
      title: "Le conseil Jeitinho",
      text:
        "Pendant le Carnaval, Saara et Uruguaiana deviennent les meilleurs endroits pour acheter déguisements, paillettes, accessoires et goodies. Les prix y sont souvent bien plus intéressants que dans les zones touristiques, mais le choix se réduit à mesure que la date approche — n'attendez pas la dernière semaine.",
    },

    {
      type: "h2",
      text: "Comment négocier sans se faire avoir",
    },
    {
      type: "p",
      text:
        "La négociation fait partie du jeu dans ces marchés, mais elle a ses codes. Le vendeur s'attend à ce que vous discutiez le prix, surtout si vous achetez plusieurs articles au même stand — mais négocier agressivement pour quelques centimes sur un article déjà très bon marché est plutôt mal vu.",
    },
    {
      type: "ul",
      items: [
        "Repérez le prix affiché ou demandé une première fois avant de proposer un contre-prix.",
        "Achetez groupé : deux ou trois articles au même vendeur ouvrent presque toujours la porte à une réduction.",
        "Restez souriant et détendu — la négociation à Rio se fait dans la bonne humeur, pas dans la confrontation.",
        "Ayez du liquide sur vous : un paiement en espèces facilite souvent la discussion, même si la carte est de plus en plus acceptée.",
        "Si le vendeur refuse de bouger, c'est probablement que le prix est déjà juste — n'insistez pas indéfiniment.",
      ],
    },

    {
      type: "h2",
      text: "Pour un maillot non officiel de bonne qualité",
    },
    {
      type: "p",
      text:
        "Demandez toujours une « estampa tailandesa ». C'est la meilleure finition disponible sur les répliques de maillots de football, avec un prix moyen d'environ 60 R$ (soit environ 10 €) — largement en dessous des maillots officiels vendus en boutique, qui dépassent souvent les 300 R$.",
    },
    {
      type: "bonasavoir",
      title: "Bon à savoir",
      text:
        "Le paiement en espèces et en carte est accepté dans la majorité des boutiques de ces marchés, mais gardez toujours un peu de liquide pour les petits stands. Les horaires sont principalement du lundi au samedi, beaucoup de commerces fermant tôt en soirée et la plupart étant fermés le dimanche, à l'exception du marché de Copacabana.",
    },

    {
      type: "h2",
      text: "Le mot du jour : desconto",
    },
    {
      type: "p",
      text:
        "Vous entendrez souvent « Tem desconto ? » (une réduction ?). C'est la formule standard pour ouvrir une négociation, prononcée avec le sourire plutôt qu'en exigeant. Une variante plus directe : « Faz um precinho melhor ? » (vous me faites un meilleur prix ?).",
    },

    {
      type: "aeviter",
      title: "À éviter",
      text:
        "Si le prix d'un article paraît trop beau pour être vrai, c'est probablement une copie de mauvaise qualité. Les boutiques officielles garantissent l'authenticité — voir notre guide des <a href=\"/blog/marques-bresiliennes-a-rapporter\">marques brésiliennes à rapporter</a> — tandis que les marchés proposent parfois des copies très réussies : soyez conscient de la différence avant d'acheter, en particulier pour l'électronique et les lunettes de marque.",
    },

    {
      type: "h2",
      text: "Comment s'y rendre et se repérer",
    },
    {
      type: "ul",
      items: [
        "Saara et Uruguaiana — métro Uruguaiana, ligne 1, en plein Centro. À visiter en semaine, en journée, jamais seul après la fermeture des boutiques.",
        "Marché de Copacabana — sur le calçadão, entre les Postos 4 et 5, accessible à pied depuis n'importe quel point de la plage.",
        "Feira de Madureira — métro Madureira, ligne 2. Prévoyez un Uber pour le retour en soirée plutôt que le métro si vous restez tard.",
      ],
    },

    {
      type: "h2",
      text: "Pourquoi faire ses achats dans ces marchés",
    },
    {
      type: "ul",
      items: [
        "Prix imbattables sur une grande partie des produits, souvent bien en dessous des centres commerciaux.",
        "Large choix, du souvenir artisanal à l'accessoire de carnaval en passant par le maillot de foot.",
        "Ambiance locale et authentique, très différente des centres commerciaux climatisés de la Zona Sul.",
        "Le meilleur endroit pour préparer un Carnaval ou rapporter des cadeaux qui ne se trouvent pas ailleurs.",
      ],
    },

    {
      type: "faq",
      items: [
        {
          q: "Peut-on négocier les prix dans les marchés de Rio ?",
          a:
            "Oui, la négociation est possible dans la plupart des stands, en particulier si vous achetez plusieurs articles auprès du même vendeur. Restez toujours souriant : la négociation carioca se fait dans la bonne humeur.",
        },
        {
          q: "Quel est le meilleur marché pour les souvenirs authentiques ?",
          a:
            "Le marché de Copacabana, entre les Postos 4 et 5, reste la référence pour l'artisanat et les souvenirs typiques de la Zona Sul, avec l'avantage d'être directement sur le calçadão.",
        },
        {
          q: "Comment reconnaître un maillot de football de bonne qualité sur un marché ?",
          a:
            "Demandez systématiquement une « estampa tailandesa », la meilleure finition disponible pour les répliques non officielles, à un prix d'environ 60 R$.",
        },
        {
          q: "Ces marchés sont-ils sûrs pour les touristes ?",
          a:
            "Oui, en journée ces marchés sont très fréquentés et globalement sûrs, mais restez attentif à vos affaires comme dans tout lieu très dense — évitez de sortir des objets de valeur inutilement.",
        },
        {
          q: "Faut-il du liquide pour faire ses achats dans ces marchés ?",
          a:
            "La carte est acceptée dans une majorité de boutiques, mais gardez toujours un peu d'espèces sur vous : cela facilite la négociation dans les petits stands. Voir notre guide sur <a href=\"/blog/payer-au-bresil-pix\">payer au Brésil</a> pour les bons réflexes.",
        },
        {
          q: "Saara et Uruguaiana sont-ils ouverts le dimanche ?",
          a:
            "Non, la majorité des boutiques du Centro ferment le dimanche. Le marché de Copacabana, en revanche, reste ouvert tous les jours de la semaine.",
        },
      ],
    },

    {
      type: "p",
      text:
        "Les marchés de Rio racontent une autre facette de la ville, plus populaire et plus authentique que les centres commerciaux. Une bonne affaire s'y trouve toujours, à condition de prendre le temps de chercher — et d'accepter de marchander un peu, dans la bonne humeur carioca.",
    },
  ],
};
