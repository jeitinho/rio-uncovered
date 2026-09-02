import type { Article } from "../types";
import hero from "@/assets/article-ou-loger-rio.jpg";

export const article: Article = {
  slug: "airbnb-ou-hotel-a-rio",
  title: "Airbnb ou hôtel à Rio : ce qu'il faut savoir avant de réserver",
  titleAccent: "avant de réserver",
  description: "Avantages, pièges et arnaques classiques : notre guide pour choisir entre Airbnb et hôtel à Rio, et vérifier une annonce avant de réserver.",
  category: "hebergements",
  tags: ["hébergement", "Airbnb", "hôtel", "Rio de Janeiro"],
  date: "2026-09-02",
  author: "equipe-jeitinho",
  hero,
  heroAlt: "Vue aérienne de la Zona Sul de Rio de Janeiro avec ses immeubles face à la plage",
  featured: false,
  guide: true,
  popular: false,
  relatedServices: [
    {
      label: "Trouver un logement fiable",
      href: "https://jeitinho.fr/trouver-un-jeitinho",
      description: "On vous aide à repérer une annonce vérifiée, un hôte réactif et un emplacement réel, pour réserver sans mauvaise surprise.",
    },
  ],
  sections: [
    { type: "p", text: "Airbnb ou hôtel : la question revient à chaque préparation de voyage à Rio, et il n'y a pas de bonne réponse universelle. Les deux options ont leurs avantages, et leurs propres pièges. Ce guide n'est pas là pour trancher à votre place, mais pour vous donner les repères qui manquent souvent : comment reconnaître une annonce fiable, quelles arnaques reviennent le plus à Rio, et dans quels cas l'hôtel reste tout simplement le choix le plus sûr." },

    { type: "h2", text: "Airbnb à Rio : les vrais avantages" },
    { type: "ul", items: [
      "Le budget : sur un séjour d'une semaine ou plus, un appartement revient souvent moins cher qu'un hôtel équivalent en Zona Sul, surtout à plusieurs.",
      "L'espace et l'autonomie : une cuisine, un salon, parfois une vue que peu d'hôtels offrent au même prix.",
      "L'ancrage local : vivre dans un immeuble résidentiel, croiser des voisins brésiliens, tester le quotidien d'un quartier plutôt qu'une zone hôtelière.",
      "La flexibilité pour les groupes et familles : plusieurs chambres sous un même toit, sans multiplier les réservations.",
    ]},

    { type: "h2", text: "Airbnb à Rio : les inconvénients à connaître" },
    { type: "ul", items: [
      "Pas de réception 24h/24 : en cas de problème (serrure, eau chaude, wifi), vous dépendez de la réactivité de l'hôte, pas d'un personnel sur place.",
      "Le ménage n'est pas toujours quotidien, et parfois facturé en supplément à la sortie.",
      "La sécurité de l'immeuble varie énormément : certains bâtiments ont un portier et un accès contrôlé, d'autres non.",
      "L'accueil peut être délégué à un tiers (agence de gestion, femme de ménage) qui ne connaît pas toujours bien le logement ni le quartier.",
    ]},

    { type: "h2", text: "L'hôtel à Rio : ce qu'il apporte" },
    { type: "p", text: "L'hôtel reste imbattable sur un point précis : la simplicité. Réception disponible en permanence, personnel qui parle plusieurs langues, ménage quotidien, sécurité généralement renforcée à l'entrée, et un interlocuteur immédiat en cas de souci. Pour un séjour court, une première visite à Rio, ou simplement l'envie de ne pas gérer de logistique, c'est souvent le choix le plus reposant. Le contact humain avec la réception est aussi une vraie ressource : conseils de quartier, appel de taxi fiable, orientation en cas d'urgence." },
    { type: "conseil", title: "Le conseil Jeitinho", text: "Si c'est votre premier séjour à Rio, si vous restez moins de 4-5 nuits, ou si vous voyagez seul(e) et voulez minimiser les inconnues, l'hôtel simplifie beaucoup de choses. Gardez l'Airbnb pour un séjour plus long, une fois que vous connaissez déjà un peu la ville." },

    { type: "h2", text: "Les arnaques classiques sur les locations courte durée à Rio" },
    { type: "p", text: "Comme dans toute grande ville touristique, certaines annonces de location courte durée à Rio ne sont pas fiables. Voici les schémas qui reviennent le plus souvent, quelle que soit la plateforme utilisée." },
    { type: "ul", items: [
      "La fausse annonce : photos volées à une autre annonce (parfois d'un autre pays), adresse vague ou inexistante, prix anormalement bas pour la zone.",
      "La demande de paiement hors plateforme : un hôte qui insiste pour un virement direct, en espèces à l'avance, ou via une application de paiement externe, en dehors de tout système de protection.",
      "Le changement de logement de dernière minute : vous réservez un appartement précis, et on vous propose « un logement équivalent » à l'arrivée, souvent moins bien situé.",
      "Les faux avis : un compte hôte tout neuf avec une série d'avis très positifs postés en quelques jours, un signe classique d'avis achetés ou échangés entre comptes.",
      "L'annonce dupliquée : la même photo et la même description postées sous plusieurs profils différents, parfois à des prix différents.",
    ]},
    { type: "aeviter", title: "À éviter", text: "Ne payez jamais en dehors du système de la plateforme sur laquelle vous réservez, même si l'hôte propose une remise pour un virement direct. C'est le signal d'alarme numéro un : dès que l'argent sort du circuit protégé, vous perdez tout recours en cas de problème." },

    { type: "h2", text: "Comment vérifier une annonce avant de réserver" },
    { type: "ul", items: [
      "Des avis récents et nombreux, pas seulement une note globale élevée : lisez les 5-6 derniers commentaires, cherchez des détails concrets (bruit, accès, quartier) plutôt que des formules génériques.",
      "Un hôte réactif avant même la réservation : posez une question précise sur l'immeuble ou l'accès, la qualité et la rapidité de la réponse en disent long.",
      "La localisation exacte, vérifiée sur une carte : demandez l'adresse précise ou le nom de la rue, et repérez la distance réelle à pied jusqu'à la plage ou au métro, pas seulement le quartier annoncé.",
      "Des photos cohérentes entre elles : même luminosité, même style, mobilier reconnaissable d'une photo à l'autre. Des photos trop parfaites ou trop hétérogènes doivent interroger.",
      "L'historique du compte hôte : ancienneté, nombre d'annonces gérées, cohérence entre les logements proposés.",
    ]},
    { type: "bonasavoir", title: "Bon à savoir", text: "Demandez systématiquement si l'immeuble dispose d'un syndic (síndico) ou d'un portier (porteiro). Leur présence est un vrai indicateur de sécurité au quotidien : accès contrôlé, réception de colis, et souvent un premier niveau d'aide en cas de problème avec le logement." },

    { type: "h2", text: "Locations courte durée et copropriétés : un point souvent négligé" },
    { type: "p", text: "À Rio, de nombreuses copropriétés (condomínios) encadrent strictement la location de courte durée, voire l'interdisent purement et simplement dans leur règlement intérieur. Ce n'est pas toujours visible depuis l'annonce en ligne. Concrètement, cela peut se traduire par des restrictions d'accès pour les visiteurs, l'obligation de s'enregistrer à l'entrée, ou dans certains cas des tensions avec le voisinage si la location n'est pas officiellement autorisée par l'assemblée de copropriétaires. Un hôte sérieux doit pouvoir vous confirmer que la location est bien admise dans l'immeuble." },
    { type: "conseil", title: "Le conseil Jeitinho", text: "N'hésitez pas à demander directement à l'hôte si la copropriété autorise la location courte durée. Une réponse évasive ou l'absence de réponse claire est un signal à prendre au sérieux, surtout si vous arrivez tard le soir et dépendez de l'accès à l'immeuble." },

    { type: "h2", text: "Quand privilégier l'hôtel plutôt qu'un Airbnb" },
    { type: "ul", items: [
      "Un séjour court, de quelques nuits, où la logistique d'un check-in autonome n'apporte pas grand-chose.",
      "Un premier voyage à Rio, quand on préfère avoir un point de repère fixe et un personnel disponible pour toute question.",
      "Un voyage professionnel, où fiabilité et simplicité priment sur le budget ou l'espace.",
      "Un besoin particulier de sécurité ou de tranquillité d'esprit, notamment pour un voyage en solo.",
    ]},
    { type: "p", text: "Le comparatif de quartiers reste la première étape, quel que soit le type d'hébergement choisi : retrouvez notre <a href=\"/blog/ou-loger-a-rio-comparatif-quartiers\">comparatif des quartiers pour se loger à Rio</a>, et pour resituer ces précautions dans le contexte plus large de la ville, notre guide <a href=\"/blog/securite-a-rio-ce-qu-il-faut-savoir\">sécurité à Rio, ce qu'il faut savoir</a>." },

    { type: "faq", items: [
      { q: "Airbnb est-il dangereux à Rio ?", a: "Non, la grande majorité des locations se passent bien. Mais comme dans toute ville touristique, quelques annonces frauduleuses existent. Vérifier les avis, l'adresse exacte et la réactivité de l'hôte réduit fortement le risque." },
      { q: "Faut-il payer un acompte en dehors de la plateforme si l'hôte le demande ?", a: "Non, jamais. C'est le signal d'arnaque le plus fréquent. Tout paiement doit passer par le système de la plateforme utilisée pour bénéficier d'une protection en cas de problème." },
      { q: "Un hôtel est-il toujours plus sûr qu'un Airbnb à Rio ?", a: "Pas nécessairement plus sûr, mais généralement plus simple à gérer : réception permanente, personnel sur place, sécurité souvent renforcée à l'entrée. Un Airbnb bien vérifié, dans un immeuble avec portier, peut offrir un niveau de sécurité comparable." },
      { q: "Comment savoir si un immeuble autorise la location courte durée ?", a: "Demandez directement à l'hôte avant de réserver. Une réponse claire et rapide est bon signe ; une absence de réponse ou une réponse évasive doit vous alerter." },
    ]},

    { type: "p", text: "Le meilleur hébergement à Rio n'est pas forcément le moins cher ou le mieux noté sur le papier : c'est celui qui correspond à votre profil de voyage et où vous vous sentez en confiance dès la réservation. Prenez le temps de vérifier, posez des questions, et le reste du séjour n'en sera que plus tranquille." },
  ],
};
