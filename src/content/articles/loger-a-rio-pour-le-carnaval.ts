import type { Article } from "../types";
import hero from "@/assets/article-carnaval.jpg";

export const article: Article = {
  slug: "loger-a-rio-pour-le-carnaval",
  title: "Où loger à Rio pour le Carnaval sans se faire surprendre sur les prix",
  titleAccent: "le Carnaval",
  description: "Prix qui s'envolent, réservations en avance, quartiers stratégiques, pièges à éviter : notre guide pour bien choisir son logement pendant le Carnaval de Rio.",
  category: "hebergements",
  tags: ["Carnaval", "hébergement", "Rio de Janeiro"],
  date: "2026-09-02",
  author: "equipe-jeitinho",
  hero,
  heroAlt: "Danseuses de samba en costumes rouges au Carnaval de Rio",
  featured: false,
  guide: true,
  popular: false,
  relatedServices: [
    {
      label: "Trouver un jeitinho",
      href: "https://jeitinho.fr/trouver-un-jeitinho",
      description: "On vous aide à dénicher un logement fiable pour le Carnaval, aux bonnes conditions et sans mauvaise surprise sur le prix.",
    },
  ],
  sections: [
    { type: "p", text: "Le logement est, de loin, le poste qui fait le plus dérailler un budget Carnaval. Ce n'est pas tant le prix en lui-même que la surprise : on compare avec un tarif de basse saison vu sur une appli, et on découvre trois mois plus tard que le même appartement coûte beaucoup plus cher, avec des conditions différentes. Ce guide est là pour vous éviter ça." },

    { type: "h2", text: "Pourquoi les prix s'envolent pendant le Carnaval" },
    { type: "p", text: "Rio ne désemplit pas pendant le Carnaval : Brésiliens venus d'autres États, touristes du monde entier, tout le monde converge sur la Zona Sul et le centre-ville en même temps. Sur une offre de logements qui ne bouge pas, la demande explose — et les prix suivent. Attendez-vous à des tarifs très largement supérieurs à ceux de la basse saison, avec en plus des minimums de nuitées imposés par beaucoup d'hôtes et d'hôtels (souvent plusieurs nuits d'affilée, pas de réservation à la nuit)." },
    { type: "p", text: "Le niveau exact de la hausse varie énormément selon le quartier, le type de logement et la date à laquelle vous réservez : mieux vaut le vérifier vous-même au moment de comparer les annonces plutôt que de se fier à un chiffre tout fait." },

    { type: "h2", text: "Réservez tôt, vraiment tôt" },
    { type: "p", text: "C'est la règle numéro un : les meilleurs logements (bon emplacement, bon rapport qualité-prix, hôte fiable avec de bons avis) partent en premier, souvent bien avant que la plupart des voyageurs ne commencent à chercher. Il n'est pas rare de voir des habitués de Rio boucler leur logement plusieurs mois à l'avance, parfois même l'année précédente pour les adresses les plus demandées près du Sambódromo ou en plein cœur d'Ipanema." },
    { type: "conseil", title: "Le conseil Jeitinho", text: "Si vous avez une date de Carnaval en tête, commencez à regarder les logements dès que possible, même loin en amont. Vous pourrez toujours annuler ou changer si votre plan évolue (vérifiez la politique d'annulation) — mais vous ne pourrez pas récupérer une annonce déjà réservée par quelqu'un d'autre." },

    { type: "h2", text: "Quel quartier choisir selon ce que vous voulez vivre" },
    { type: "p", text: "Il n'y a pas un seul « bon » quartier pour le Carnaval : tout dépend de votre programme. Pour une vision complète des quartiers de Rio hors période de Carnaval, notre <a href=\"/blog/ou-loger-a-rio-comparatif-quartiers\">comparatif des quartiers</a> reste une bonne base — voici comment l'ajuster pour ces quelques semaines particulières." },

    { type: "h3", text: "Zona Sul : pour la vie nocturne et les blocos" },
    { type: "p", text: "Copacabana, Ipanema, Leblon et Botafogo restent le choix le plus logique pour la majorité des voyageurs. C'est là que se concentrent le plus de blocos de rue, les plages, les restaurants et une bonne partie de l'ambiance festive. Vous êtes aussi à distance raisonnable du métro, qui reste le moyen le plus fiable pour rejoindre le Sambódromo pendant le Carnaval." },

    { type: "h3", text: "Près du Sambódromo : pour enchaîner les nuits de défilé" },
    { type: "p", text: "Si votre priorité est d'assister à plusieurs nuits de défilés au Sambódromo, un logement plus proche du centre (Centro, Glória, Catete, Santa Teresa) peut vraiment simplifier vos soirées : moins de temps de trajet, moins de dépendance aux transports bondés en pleine nuit, possibilité de rentrer à pied ou en trajet court. Pour préparer ces soirées de défilé, consultez notre article dédié aux <a href=\"/blog/billets-sambodromo-rio\">billets du Sambódromo</a>." },
    { type: "bonasavoir", title: "Bon à savoir", text: "Ces deux logiques ne s'excluent pas forcément. Beaucoup de voyageurs logent en Zona Sul pour les blocos et la plage, et acceptent simplement un trajet plus long les soirs de Sambódromo. D'autres préfèrent l'inverse. Le bon choix dépend de ce que vous voulez prioriser, pas d'une réponse universelle." },

    { type: "h2", text: "Les pièges à éviter" },
    { type: "p", text: "La période du Carnaval attire aussi son lot de mauvaises pratiques, plus rares en basse saison. Quelques points de vigilance avant de valider une réservation." },
    { type: "ul", items: [
      "Annulations abusives : certains hôtes annulent une réservation déjà confirmée en découvrant qu'ils peuvent relouer le même bien plus cher à la dernière minute. Privilégiez les hôtes avec un historique solide et beaucoup d'avis, et gardez une trace écrite de tous les échanges.",
      "Cautions élevées : la période du Carnaval s'accompagne souvent de dépôts de garantie plus importants qu'en temps normal. Vérifiez le montant, les conditions de restitution et le délai avant de réserver.",
      "Politiques d'annulation très strictes : beaucoup d'annonces passent en non-remboursable ou avec des conditions durcies pendant le Carnaval. Lisez les petites lignes avant de payer, pas après.",
      "Minimum de nuitées imposé : assurez-vous que la durée minimale exigée correspond bien à votre séjour prévu, sous peine de devoir payer des nuits que vous n'utiliserez pas.",
    ]},
    { type: "aeviter", title: "À éviter", text: "Payer en dehors de la plateforme de réservation (virement direct, espèces avant l'arrivée) pour « éviter les frais de service ». C'est le classique piège du Carnaval : sans les protections de la plateforme, vous n'avez plus aucun recours en cas d'annulation ou de logement non conforme." },

    { type: "h2", text: "Louer à plusieurs pour amortir le coût" },
    { type: "p", text: "Avec des prix qui grimpent, l'appartement partagé entre amis ou en petit groupe devient souvent la solution la plus rentable — et souvent la plus agréable. Un grand appartement ou une maison en Zona Sul, divisé entre 4 à 8 personnes, revient fréquemment moins cher par personne qu'une chambre d'hôtel individuelle, tout en offrant plus d'espace, une cuisine, et un vrai point de rendez-vous entre deux blocos." },
    { type: "conseil", title: "Le conseil Jeitinho", text: "Clarifiez dès le départ, entre vous, comment se répartissent le paiement, la caution et les responsabilités en cas de dégât. C'est la source numéro un de tensions de groupe pendant le Carnaval — et ça se règle en cinq minutes avant de réserver, pas après." },

    { type: "p", text: "Pour la préparation générale de votre séjour (dates, blocos, Sambódromo, sécurité, transport), notre <a href=\"/blog/preparer-carnaval-rio\">guide complet du Carnaval de Rio</a> couvre tout le reste. Le logement n'est qu'une pièce du puzzle — mais c'est souvent celle qui décide si votre Carnaval commence détendu ou stressé." },

    { type: "faq", items: [
      { q: "De combien les prix des logements augmentent-ils pendant le Carnaval ?", a: "La hausse varie fortement selon le quartier, le type de logement et la date de réservation. Elle est toujours significative par rapport à la basse saison : mieux vaut comparer les tarifs affichés au moment de votre recherche que se fier à un multiplicateur générique." },
      { q: "Quand faut-il réserver son logement pour le Carnaval ?", a: "Le plus tôt possible. Les logements les mieux situés et les plus fiables partent en premier, parfois plusieurs mois avant le Carnaval. Réservez dès que vos dates sont fixées, quitte à ajuster ensuite selon la politique d'annulation." },
      { q: "Vaut-il mieux loger près du Sambódromo ou en Zona Sul ?", a: "Cela dépend de votre programme. La Zona Sul offre plus de blocos, de plages et d'ambiance générale ; un logement proche du centre facilite les nuits de défilé au Sambódromo si vous comptez en enchaîner plusieurs." },
      { q: "Comment éviter les arnaques sur les logements pendant le Carnaval ?", a: "Réservez via une plateforme qui offre des protections, privilégiez les hôtes avec un historique solide et de nombreux avis, lisez attentivement la politique d'annulation et le montant de la caution, et ne payez jamais en dehors du circuit officiel de réservation." },
    ]},
  ],
};
