import type { Article } from "../types";
import hero from "@/assets/article-choisir-plage-rio.jpg";

export const article: Article = {
  slug: "comment-choisir-sa-plage-rio",
  title: "Comment choisir sa plage à Rio de Janeiro ?",
  titleAccent: "sa plage",
  description:
    "Copacabana, Ipanema, Leme, Grumari, Niterói... Quelle plage choisir à Rio selon votre ambiance, votre niveau de tranquillité, votre activité et votre temps ?",
  category: "plages",
  tags: [
    "plages Rio de Janeiro",
    "quelle plage à Rio",
    "Copacabana",
    "Ipanema",
    "Leme",
    "Grumari",
    "Niterói",
  ],
  date: "2026-07-15",
  author: "equipe-jeitinho",
  hero,
  heroAlt:
    "Plage de Rio de Janeiro bordée par le calçadão et les montagnes de la ville",
  featured: false,
  guide: true,
  popular: true,
  relatedServices: [
    {
      label: "Conciergerie sur mesure",
      href: "https://jeitinho.fr/trouver-un-jeitinho",
      description:
        "On vous aide à choisir les bonnes plages et à organiser vos journées à Rio.",
    },
  ],
  sections: [
    {
      type: "p",
      text:
        "À Rio, demander « quelle est la meilleure plage ? » n’a pas vraiment de sens. La vraie question est plutôt : quelle plage correspond à la journée que vous voulez vivre ?",
    },
    {
      type: "p",
      text:
        "Copacabana est la plus célèbre. Ipanema est probablement la plus emblématique auprès des Cariocas et des visiteurs. Mais certaines des plages les plus spectaculaires se trouvent plus loin, dans la Zona Oeste ou de l’autre côté de la baie, à Niterói.",
    },
    {
      type: "p",
      text:
        "Le bon choix dépend donc de votre programme : envie d’ambiance, de sport, de surf, de tranquillité, de coucher de soleil, de nature ou simplement d’une plage facile d’accès depuis votre hôtel ? Voici comment vous y retrouver.",
    },
    {
      type: "h2",
      text: "La Zona Sul : les plages que vous pouvez difficilement éviter",
    },
    {
      type: "p",
      text:
        "Pour un premier séjour à Rio, les plages de la Zona Sul restent incontournables. Elles sont faciles d’accès, entourées de quartiers où vous trouverez restaurants, bars et hébergements, et permettent de découvrir immédiatement la culture balnéaire carioca.",
    },
    {
      type: "p",
      text:
        "Elles sont aussi les plus fréquentées par les touristes. Mais cela ne signifie pas qu’elles sont artificielles ou réservées aux visiteurs : les Cariocas les fréquentent quotidiennement, et l’ambiance change énormément d’un secteur à l’autre.",
    },
    {
      type: "h2",
      text: "Copacabana : la plage pour vivre le Rio que tout le monde connaît",
    },
    {
      type: "p",
      text:
        "Copacabana est la carte postale. Son immense courbe, son calçadão en mosaïque noire et blanche, ses kiosques et la montagne en toile de fond en font la plage la plus immédiatement reconnaissable de Rio.",
    },
    {
      type: "p",
      text:
        "C’est aussi probablement la plage la plus simple à conseiller à quelqu’un qui vient pour la première fois : elle est centrale, accessible en métro, très animée et offre une vraie immersion dans le spectacle permanent de la plage carioca.",
    },
    {
      type: "h3",
      text: "Le public",
    },
    {
      type: "p",
      text:
        "Beaucoup de touristes, mais aussi des Cariocas, des sportifs, des familles, des vendeurs ambulants et des habitués du quartier. Copacabana n’est donc pas une plage « touristique » au sens où les locaux l’auraient désertée.",
    },
    {
      type: "h3",
      text: "Les avantages",
    },
    {
      type: "ul",
      items: [
        "Très facile d’accès.",
        "Énorme choix de kiosques, bars et restaurants à proximité.",
        "Ambiance animée presque toute la journée.",
        "Parfaite pour une première découverte de la plage carioca.",
        "Beaucoup d’activités sportives et de vendeurs ambulants.",
      ],
    },
    {
      type: "h3",
      text: "Les inconvénients",
    },
    {
      type: "ul",
      items: [
        "Plus fréquentée que les plages plus éloignées.",
        "Moins adaptée si vous cherchez une sensation de nature sauvage.",
        "L’ambiance peut être très différente selon l’heure et le secteur.",
      ],
    },
    {
      type: "h2",
      text: "Leme : Copacabana, mais avec une autre énergie",
    },
    {
      type: "p",
      text:
        "À l’extrémité de Copacabana, Leme offre une ambiance généralement plus tranquille. La plage reste urbaine et accessible, mais le rythme change rapidement dès que l’on s’éloigne du cœur de Copacabana.",
    },
    {
      type: "p",
      text:
        "Le secteur est notamment connu pour le Rasta Beach, l’une des barracas les plus connues du coin. C’est une bonne option si vous voulez profiter de l’ambiance de Copacabana sans forcément vous installer dans sa partie la plus animée.",
    },
    {
      type: "h3",
      text: "Pour qui ?",
    },
    {
      type: "p",
      text:
        "Pour ceux qui veulent une plage facile d’accès, avec de l’animation et des services, mais une atmosphère un peu moins intense que le centre de Copacabana.",
    },
    {
      type: "h2",
      text: "Ipanema : ne choisissez pas seulement une plage, choisissez un Posto",
    },
    {
      type: "p",
      text:
        "Ipanema est l’exemple parfait de la difficulté à parler des plages de Rio comme si elles étaient homogènes. Deux kilomètres de sable peuvent changer complètement d’ambiance selon le secteur.",
    },
    {
      type: "h3",
      text: "Posto 7 : sport et proximité d’Arpoador",
    },
    {
      type: "p",
      text:
        "Autour du Posto 7 et d’Arpoador, l’ambiance est particulièrement liée au sport, au surf et à la proximité de la Pedra do Arpoador. C’est aussi un excellent secteur pour combiner plage et coucher de soleil.",
    },
    {
      type: "h3",
      text: "Posto 8 : un secteur très vivant",
    },
    {
      type: "p",
      text:
        "Le Posto 8 se trouve dans la continuité du secteur central d’Ipanema et attire un public très mélangé. Vous y trouverez aussi une forte présence de visiteurs, tout en restant au cœur de la vie de la Zona Sul.",
    },
    {
      type: "h3",
      text: "Posto 9 : le secteur LGBTQIA+ d’Ipanema",
    },
    {
      type: "p",
      text:
        "Le Posto 9 est notamment connu comme un point de rendez-vous LGBTQIA+ de Rio. Le secteur attire également un public jeune, local et international. C’est l’un des endroits où l’on comprend le mieux pourquoi Ipanema est associée à une certaine idée de liberté et de diversité.",
    },
    {
      type: "h3",
      text: "Posto 10 : une autre ambiance",
    },
    {
      type: "p",
      text:
        "En remontant vers Leblon, l’ambiance devient progressivement plus résidentielle. C’est un secteur intéressant pour ceux qui veulent rester à Ipanema tout en s’éloignant des zones les plus animées.",
    },
    {
      type: "conseil",
      title: "Le conseil Jeitinho",
      text:
        "À Ipanema, ne dites pas simplement « je vais à Ipanema ». Regardez le Posto. Entre le 7, le 9 et les secteurs plus proches de Leblon, vous ne recherchez pas forcément la même expérience.",
    },
    {
      type: "h2",
      text: "Arpoador : pour le sport et surtout le coucher de soleil",
    },
    {
      type: "p",
      text:
        "Arpoador est moins une plage où l’on vient chercher une longue journée de farniente qu’un endroit où l’on vient vivre un moment précis. Le rocher, les vagues, les surfeurs et la vue sur Ipanema et les Dois Irmãos en font l’un des endroits les plus emblématiques de la ville.",
    },
    {
      type: "p",
      text:
        "Au coucher du soleil, les Cariocas et les visiteurs se retrouvent sur la Pedra do Arpoador pour regarder le soleil disparaître derrière les reliefs de Rio.",
    },
    {
      type: "h2",
      text: "Leblon : plus résidentiel, mais pas indispensable pour tout le monde",
    },
    {
      type: "p",
      text:
        "Leblon prolonge naturellement Ipanema vers le sud. Le quartier est plus résidentiel et réputé pour son côté chic, avec de nombreux restaurants, bars et commerces à proximité.",
    },
    {
      type: "p",
      text:
        "Si vous êtes à Rio pour quelques jours seulement, il n’est pas nécessaire de traverser toute la ville uniquement pour dire que vous avez fait Leblon. En revanche, si vous séjournez dans le secteur ou recherchez une plage urbaine plus résidentielle, c’est une excellente option.",
    },
    {
      type: "h2",
      text: "São Conrado : la plage des sportifs et des habitués du secteur",
    },
    {
      type: "p",
      text:
        "São Conrado marque déjà une vraie transition. On reste à Rio, mais l’atmosphère est différente de Copacabana ou Ipanema. La plage est notamment fréquentée par des sportifs et par les habitants du secteur.",
    },
    {
      type: "p",
      text:
        "C’est aussi un endroit très lié aux sports de plein air. La plage de Pepino accueille notamment les atterrissages des parapentes et deltaplanes qui décollent de Pedra Bonita.",
    },
    {
      type: "h3",
      text: "Pour qui ?",
    },
    {
      type: "p",
      text:
        "Pour ceux qui veulent sortir du circuit Copacabana – Ipanema, observer une autre partie de Rio et combiner plage et activités sportives.",
    },
    {
      type: "h2",
      text: "Et si vous cherchez vraiment la nature ? Direction la Zona Oeste",
    },
    {
      type: "p",
      text:
        "C’est ici que la comparaison change complètement. La Zona Oeste possède de longues plages, des secteurs plus sauvages et des paysages où l’on a parfois du mal à croire que l’on est encore dans la même ville.",
    },
    {
      type: "p",
      text:
        "Le revers de la médaille est simple : ces plages sont plus éloignées de Copacabana et Ipanema. Il faut donc accepter de perdre davantage de temps dans les transports.",
    },
    {
      type: "h2",
      text: "Barra da Tijuca : immense, sportive et pratique si vous êtes dans le secteur",
    },
    {
      type: "p",
      text:
        "Barra est la plus grande plage de Rio. Son immense bande de sable permet de s’éloigner facilement des zones les plus concentrées et offre de nombreuses possibilités pour marcher, courir et pratiquer des sports nautiques.",
    },
    {
      type: "p",
      text:
        "En revanche, si vous logez à Copacabana ou Ipanema et que vous avez seulement quelques jours, le déplacement peut être disproportionné par rapport à votre programme.",
    },
    {
      type: "h2",
      text: "Recreio et Macumba : quand la plage devient plus sportive",
    },
    {
      type: "p",
      text:
        "En continuant vers l’ouest, le littoral devient progressivement plus sauvage. Macumba est particulièrement connue pour ses vagues et le surf, tandis que Recreio offre une longue plage qui permet de s’éloigner davantage de l’agitation urbaine.",
    },
    {
      type: "h2",
      text: "Prainha : petite, sauvage et tournée vers le surf",
    },
    {
      type: "p",
      text:
        "Prainha est l’une des plages qui donnent le mieux cette impression de sortir de Rio sans réellement quitter Rio. Petite, entourée de végétation et connue pour ses vagues, elle attire particulièrement les surfeurs.",
    },
    {
      type: "p",
      text:
        "C’est magnifique, mais ce n’est pas forcément la plage la plus simple pour une famille qui cherche une eau calme, beaucoup de services et un accès facile.",
    },
    {
      type: "h2",
      text: "Grumari : le coup de cœur pour ceux qui veulent changer de décor",
    },
    {
      type: "p",
      text:
        "Grumari est probablement le meilleur exemple de ce que l’on imagine moins quand on pense à Rio. On y retrouve une plage bordée par un environnement beaucoup plus préservé, loin de la densité de la Zona Sul.",
    },
    {
      type: "p",
      text:
        "C’est mon coup de cœur pour ceux qui veulent voir un autre visage de Rio. La contrepartie est claire : l’accès demande davantage d’organisation et la mer peut être forte.",
    },
    {
      type: "bonasavoir",
      title: "Bon à savoir",
      text:
        "Grumari, Prainha et les autres plages de la Zona Oeste peuvent être beaucoup plus dépendantes des conditions de circulation, de la météo et de la houle. Prévoyez votre journée avec davantage de souplesse que pour une plage de la Zona Sul.",
    },
    {
      type: "h2",
      text: "Niterói : les plages que les visiteurs de Rio oublient souvent",
    },
    {
      type: "p",
      text:
        "De l’autre côté de la baie de Guanabara, Niterói possède cinq grandes plages océaniques : Piratininga, Sossego, Camboinhas, Itaipu et Itacoatiara. La ville offre un littoral très différent de celui de la Zona Sul, avec davantage de nature et de plages ouvertes sur l’Atlantique.",
    },
    {
      type: "p",
      text:
        "Si vous restez plusieurs jours à Rio, une journée dans la Região Oceânica de Niterói peut donc être une excellente manière de sortir du parcours classique.",
    },
    {
      type: "h3",
      text: "Itacoatiara : surf, jeunesse et nature",
    },
    {
      type: "p",
      text:
        "Itacoatiara est l’une des plages les plus impressionnantes de Niterói. Entourée de végétation et proche de la Serra da Tiririca, elle est particulièrement appréciée des surfeurs et d’un public jeune.",
    },
    {
      type: "p",
      text:
        "À son extrémité se trouve une petite plage protégée, la Prainha, où les conditions sont généralement plus calmes.",
    },
    {
      type: "h3",
      text: "Piratininga : plus polyvalente",
    },
    {
      type: "p",
      text:
        "Piratininga est une bonne option si vous recherchez une plage plus polyvalente. Sa partie principale possède de petites vagues, tandis que la Prainha offre une zone plus calme, adaptée aux enfants.",
    },
    {
      type: "h3",
      text: "Camboinhas : longue plage et sports nautiques",
    },
    {
      type: "p",
      text:
        "Camboinhas s’étend sur environ 2,6 kilomètres et possède des eaux claires. Le secteur est apprécié pour la pêche, la voile et le windsurf, avec plusieurs kiosques spécialisés dans les fruits de mer.",
    },
    {
      type: "h3",
      text: "Itaipu : calme, pêche et coucher de soleil",
    },
    {
      type: "p",
      text:
        "Itaipu est différente des autres plages océaniques de Niterói : ses eaux sont particulièrement calmes. Le quartier possède également une histoire liée à la pêche traditionnelle et plusieurs restaurants de fruits de mer en bord de mer.",
    },
    {
      type: "h3",
      text: "Sossego : pour ceux qui acceptent de marcher",
    },
    {
      type: "p",
      text:
        "Petite plage située entre Piratininga et Camboinhas, Sossego est beaucoup moins facile d’accès. C’est précisément ce qui lui donne une partie de son charme : on y va pour chercher davantage de tranquillité et de nature.",
    },
    {
      type: "h2",
      text: "Alors, quelle plage choisir ?",
    },
    {
      type: "ul",
      items: [
        "Pour une première fois à Rio : Copacabana.",
        "Pour l’ambiance carioca et le coucher de soleil : Ipanema.",
        "Pour le secteur LGBTQIA+ : Ipanema, autour du Posto 9.",
        "Pour le sport et le surf : Arpoador, São Conrado ou Itacoatiara.",
        "Pour une plage plus tranquille sans quitter la Zona Sul : Leme.",
        "Pour une plage urbaine plus résidentielle : Leblon.",
        "Pour une grande plage où marcher et faire du sport : Barra.",
        "Pour le surf et une ambiance plus sauvage : Prainha ou Macumba.",
        "Pour une vraie sensation de nature : Grumari.",
        "Pour une journée différente de Rio : les plages océaniques de Niterói.",
        "Pour une baignade plus calme à Niterói : Itaipu ou la Prainha de Piratininga.",
        "Pour une journée surf + nature : Itacoatiara.",
      ],
    },
    {
      type: "h2",
      text: "Combien coûte une journée à la plage à Rio ?",
    },
    {
      type: "p",
      text:
        "Le budget dépend énormément de la plage, de la barraca et de ce que vous consommez. Pour vous donner un ordre de grandeur, voici les prix que l’on retrouve couramment sur les plages de la Zona Sul. Ils peuvent varier selon le secteur, la saison, le jour et l’établissement — et sont généralement un peu plus bas sur les plages de la Zona Oeste et de Niterói.",
    },
    {
      type: "h3",
      text: "Installation",
    },
    {
      type: "ul",
      items: [
        "Chaise : 10 à 25 R$.",
        "Parasol classique : 25 à 30 R$.",
        "Grand parasol : 50 à 60 R$.",
      ],
    },
    {
      type: "h3",
      text: "Boissons et en-cas",
    },
    {
      type: "ul",
      items: [
        "Eau de coco : 10 à 15 R$.",
        "Mate : 12 à 15 R$ selon la taille.",
        "Açaí : 10 à 25 R$.",
        "Sandwich naturel : 5 à 20 R$.",
        "Biscoito Globo : 5 à 15 R$.",
        "Brochettes (viande, poulet, crevette) : 15 à 30 R$.",
      ],
    },
    {
      type: "aeviter",
      title: "À éviter absolument",
      text:
        "N’achetez pas de cigarettes ou dérivés auprès des vendeurs ambulants de plage : les tarifs y sont astronomiques et la qualité n’est pas garantie. Plus généralement, ne commandez jamais un produit dont le prix n’est pas clairement affiché — les établissements sérieux affichent toujours leurs tarifs.",
    },
    {
      type: "p",
      text:
        "Pour aller plus loin, direction notre guide des <a href=\"/blog/plages-zone-ouest-rio\">plages de la Zone Ouest</a> ou notre guide des <a href=\"/blog/plages-niteroi\">plages de Niterói</a>, si vous voulez creuser ces deux secteurs plus en détail.",
    },
  ],
};