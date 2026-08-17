import type { Article } from "../types";
import hero from "@/assets/article-vivre-carioca.jpg";

export const article: Article = {
  slug: "vivre-comme-un-carioca",
  title: "Vivre comme un Carioca : expressions et coutumes locales",
  titleAccent: "Carioca",
  description:
    "Bom dia, valeu, tranquilo : notre guide complet des expressions, gestes et habitudes locales à connaître pour comprendre et vivre Rio comme un vrai carioca.",
  category: "culture",
  tags: [
    "expressions portugaises",
    "culture carioca",
    "coutumes Rio",
    "Rio de Janeiro",
  ],
  date: "2026-07-11",
  author: "equipe-jeitinho",
  hero,
  heroAlt:
    "Promeneurs sur la plage de Rio de Janeiro au coucher du soleil, ambiance carioca",
  featured: false,
  guide: true,
  popular: false,

  relatedServices: [
    {
      label: "Expériences Jeitinho",
      href: "https://jeitinho.fr/experiences",
      description:
        "Immersion locale et rencontres authentiques pour vivre Rio comme un carioca.",
    },
  ],

  sections: [
    {
      type: "p",
      text:
        "Rio, c'est plus qu'une destination. C'est une culture, un rythme et un état d'esprit. Comprendre Rio, c'est aussi comprendre les cariocas : leurs habitudes, leurs expressions et leurs petites règles de politesse non écrites, celles qu'aucun guide papier ne prend jamais le temps d'expliquer.",
    },
    {
      type: "p",
      text:
        "Ce guide n'est pas un simple lexique. C'est ce qu'on dirait à un ami qui débarque : ce qu'il faut savoir pour se sentir vite chez soi, sans passer pour quelqu'un qui découvre le pays.",
    },

    {
      type: "h2",
      text: "Les habitudes locales du quotidien",
    },
    {
      type: "ul",
      items: [
        "Dire « Bom dia » en entrant quelque part — chez le vendeur du coin, dans un ascenseur, dans une salle d'attente — c'est un réflexe systématique et très apprécié.",
        "Dire bonjour au chauffeur Uber en montant, une politesse simple mais toujours remarquée.",
        "Saluer le serveur en arrivant à table, avant même de s'asseoir.",
        "Attendre son tour naturellement, sans s'impatienter — la file d'attente carioca est plus souple qu'en Europe, mais tout aussi respectée.",
        "Prendre son temps au restaurant : le rythme y est très différent qu'en Europe, personne ne vous pressera pour libérer la table.",
      ],
    },

    {
      type: "conseil",
      title: "Le conseil Jeitinho",
      text:
        "Au Brésil, le service est souvent moins formel qu'en France, mais beaucoup plus chaleureux. Prenez le temps d'échanger quelques mots avant d'entrer dans le vif du sujet : ici, le contact humain passe avant l'efficacité.",
    },

    {
      type: "h2",
      text: "Les expressions à connaître",
    },
    {
      type: "h3",
      text: "Pour saluer et se situer dans la journée",
    },
    {
      type: "ul",
      items: [
        "Bom dia — bonjour, le matin.",
        "Boa tarde — bonjour, bon après-midi.",
        "Boa noite — bonsoir, en arrivant comme en repartant.",
      ],
    },
    {
      type: "h3",
      text: "Pour parler comme un local",
    },
    {
      type: "ul",
      items: [
        "Valeu ! — merci, ou super, selon le contexte.",
        "Beleza ? — ça va ? (littéralement « beauté »)",
        "Tranquilo ? — tout va bien ?",
        "Partiu ! — c'est parti, on y va !",
        "Demorou ! — parfait, c'est entendu !",
        "Tamo junto ! — on est ensemble, tu peux compter sur moi.",
        "Bora ! — allez, on y va, version courte et pressée.",
        "Suave — tranquille, cool, ça roule.",
      ],
    },

    {
      type: "h2",
      text: "Les gestes qui comptent",
    },
    {
      type: "ul",
      items: [
        "Pouce levé — signifie « OK », « merci » ou « parfait », utilisé en toutes circonstances.",
        "Shaka (main en forme de téléphone, pouce et auriculaire tendus) — très utilisé à Rio pour saluer ou dire « tranquille ».",
        "La bise — à Rio, on se salue généralement avec un seul bisou sur la joue, même entre personnes qui se rencontrent pour la première fois.",
        "Poignée de main — plus fréquente lors d'une première rencontre formelle, en contexte professionnel notamment.",
        "Le hug entre amis — les Brésiliens sont très tactiles et chaleureux, l'accolade franche fait partie du quotidien.",
      ],
    },

    {
      type: "bonasavoir",
      title: "Bon à savoir",
      text:
        "Dans la plupart des restaurants, 10% de service (taxa de serviço) sont ajoutés à l'addition. Cette taxe n'est pas obligatoire : si vous avez été mal servi, vous pouvez demander à la retirer. Pour demander l'addition, dites simplement « A conta, por favor ».",
    },

    {
      type: "h2",
      text: "À la plage comme un local",
    },
    {
      type: "ul",
      items: [
        "Les vendeurs ambulants sont normaux, c'est une partie intégrante de la vie de plage — répondre poliment « não, obrigado » suffit si vous ne voulez rien acheter.",
        "Gardez vos affaires près de vous en permanence, en particulier votre téléphone.",
        "Louer une chaise et un parasol auprès d'une barraca est courant et abordable — voir notre guide pour <a href=\"/blog/comment-choisir-sa-plage-rio\">choisir sa plage à Rio</a> et connaître les tarifs habituels.",
        "Le paiement par carte est très fréquent, même dans les kiosques de plage : pas besoin de sortir avec beaucoup de liquide sur soi.",
      ],
    },

    {
      type: "h2",
      text: "Les petites formules qui plaisent",
    },
    {
      type: "ul",
      items: [
        "Obrigado / Obrigada — merci (au masculin ou au féminin selon qui parle).",
        "Com licença — excusez-moi, permettez-moi de passer.",
        "Por favor — s'il vous plaît.",
        "Desculpa — désolé, pardon.",
        "Que delícia ! — quel régal, utilisé aussi bien pour la nourriture que pour une bonne nouvelle.",
      ],
    },

    {
      type: "aeviter",
      title: "À éviter",
      text:
        "Ne restez pas figé sur les codes de politesse français à tout prix : au Brésil, le contact humain et la chaleur priment souvent sur la rapidité et la formalité. Ouvrez-vous à ce rythme différent, c'est aussi ça, vivre Rio — un service un peu lent n'est presque jamais un manque de respect.",
    },

    {
      type: "h2",
      text: "Comprendre le jeitinho brasileiro",
    },
    {
      type: "p",
      text:
        "Le « jeitinho » est une notion centrale de la culture brésilienne : la capacité à trouver une solution créative, souple, parfois informelle, à un problème qui semblait bloqué. Ce n'est ni de la triche ni du laxisme — c'est un art de la débrouille sociale, chaleureuse et pragmatique, qui explique en grande partie pourquoi rien ne se passe jamais tout à fait comme prévu à Rio, et pourquoi ça finit presque toujours par bien se passer quand même.",
    },

    {
      type: "h2",
      text: "Le mot du jour : carioca",
    },
    {
      type: "p",
      text:
        "Carioca désigne un habitant de Rio de Janeiro. Vous entendrez souvent « Sou carioca » (je suis de Rio), une identité forte et revendiquée par ceux qui sont nés ou ont grandi dans la ville — à ne pas confondre avec « brasileiro », qui désigne un Brésilien en général, sans référence particulière à Rio.",
    },

    {
      type: "faq",
      items: [
        {
          q: "Faut-il absolument parler portugais pour bien s'entendre avec les cariocas ?",
          a:
            "Non, mais quelques expressions de base comme « Bom dia », « Obrigado » ou « Valeu » suffisent à créer une connexion immédiate et chaleureuse.",
        },
        {
          q: "Le pourboire est-il obligatoire à Rio ?",
          a:
            "Les 10% de service ajoutés à l'addition ne sont pas obligatoires. Vous pouvez demander à les retirer en cas de service décevant, mais ils sont généralement acceptés sans discussion.",
        },
        {
          q: "Comment saluer un carioca correctement ?",
          a:
            "Une bise sur la joue est courante entre connaissances, une poignée de main lors d'une première rencontre plus formelle, et un hug chaleureux entre amis proches.",
        },
        {
          q: "Qu'est-ce que le mot carioca signifie exactement ?",
          a:
            "Il désigne spécifiquement un habitant de la ville de Rio de Janeiro, à ne pas confondre avec « brasileiro » qui désigne un Brésilien en général.",
        },
        {
          q: "Qu'est-ce que le jeitinho brasileiro ?",
          a:
            "C'est la capacité brésilienne à trouver une solution créative et souple à une situation bloquée, souvent avec le sourire. Une notion culturelle centrale, à l'origine du nom de notre agence.",
        },
        {
          q: "Est-il mal vu d'être en retard à Rio ?",
          a:
            "Pour un rendez-vous entre amis ou une invitation informelle, un léger retard est très toléré. Pour un rendez-vous professionnel ou une excursion réservée, la ponctualité reste attendue comme ailleurs.",
        },
      ],
    },

    {
      type: "p",
      text:
        "Ouvrez votre cœur, soyez curieux et profitez de chaque instant. Rio, c'est avant tout une façon de vivre, et ces quelques codes simples suffisent à s'y sentir immédiatement chez soi.",
    },
  ],
};
