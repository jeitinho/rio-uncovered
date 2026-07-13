import type { Article } from "../types";
import hero from "@/assets/article-vivre-carioca.jpg";

export const article: Article = {
  slug: "vivre-comme-un-carioca",
  title: "Vivre comme un Carioca : expressions et coutumes locales",
  titleAccent: "Carioca",
  description: "Bom dia, valeu, tranquilo : les expressions, gestes et habitudes locales à connaître pour comprendre Rio comme un vrai carioca.",
  category: "culture",
  tags: ["expressions", "culture carioca", "coutumes", "Rio de Janeiro"],
  date: "2026-07-11",
  author: "equipe-jeitinho",
  hero,
  heroAlt: "Promeneurs sur la plage de Rio de Janeiro au coucher du soleil, ambiance carioca",
  featured: false,
  guide: true,
  popular: false,
  relatedServices: [
    {
      label: "Expériences Jeitinho",
      href: "https://www.jeitinho.fr/experiences",
      description: "Immersion locale et rencontres authentiques pour vivre Rio comme un carioca.",
    },
  ],
  sections: [
    { type: "p", text: "Rio, c'est plus qu'une destination. C'est une culture, un rythme et un état d'esprit. Comprendre Rio, c'est aussi comprendre les cariocas : leurs habitudes, leurs expressions et leurs petites règles de politesse non écrites." },
    { type: "p", text: "Ce guide n'est pas un simple lexique. C'est ce qu'on dirait à un ami qui débarque : ce qu'il faut savoir pour se sentir vite chez soi." },

    { type: "h2", text: "Les habitudes locales" },
    { type: "ul", items: [
      "Dire « Bom dia » en entrant quelque part, c'est un réflexe systématique et très apprécié.",
      "Dire bonjour au chauffeur Uber, une politesse simple mais remarquée.",
      "Saluer le serveur en arrivant à table.",
      "Attendre son tour naturellement, sans s'impatienter.",
      "Prendre son temps au restaurant : le rythme y est différent qu'en Europe.",
    ]},
    { type: "conseil", title: "Le conseil Jeitinho", text: "Au Brésil, le service est souvent moins formel qu'en France, mais beaucoup plus chaleureux. Prenez le temps d'échanger, ici le contact humain est essentiel." },

    { type: "h2", text: "Les expressions à connaître" },
    { type: "ul", items: [
      "Bom dia — bonjour, le matin.",
      "Boa tarde — bonjour, bon après-midi.",
      "Boa noite — bonsoir.",
      "Valeu ! — merci, ou super !",
      "Beleza ? — ça va ?",
      "Tranquilo ? — tout va bien ?",
      "Partiu ! — c'est parti !",
      "Demorou ! — parfait, c'est entendu !",
      "Tamo junto ! — on est ensemble, tu peux compter sur moi !",
      "Bora ! — allez, on y va !",
    ]},

    { type: "h2", text: "Les gestes qui comptent" },
    { type: "ul", items: [
      "Pouce levé — signifie « OK », « merci » ou « parfait ».",
      "Shaka — très utilisé à Rio pour saluer ou dire « tranquille ».",
      "La bise — à Rio, on se salue généralement avec un seul bisou sur la joue.",
      "Poignée de main — fréquente lors d'une première rencontre.",
      "Le hug entre amis — les Brésiliens sont très tactiles et chaleureux.",
    ]},
    { type: "bonasavoir", title: "Bon à savoir", text: "Dans la plupart des restaurants, 10% de service sont ajoutés à l'addition. Cette taxe n'est pas obligatoire : si vous avez été mal servi, vous pouvez demander à la retirer. Pour demander l'addition, dites simplement « A conta, por favor »." },

    { type: "h2", text: "À la plage comme un local" },
    { type: "ul", items: [
      "Les vendeurs ambulants sont normaux, c'est une partie intégrante de la vie de plage.",
      "Gardez vos affaires près de vous en permanence.",
      "Louer une chaise et un parasol est courant et abordable.",
      "Le paiement par carte est très fréquent, même dans les kiosques de plage.",
    ]},

    { type: "h2", text: "Les petites choses qui plaisent" },
    { type: "ul", items: [
      "Obrigado / Obrigada — merci.",
      "Com licença — excusez-moi, permettez-moi de passer.",
      "Por favor — s'il vous plaît.",
      "Desculpa — désolé.",
      "Valeu ! — merci, super !",
    ]},
    { type: "aeviter", title: "À éviter", text: "Ne restez pas figé sur les codes de politesse français à tout prix : au Brésil, le contact humain et la chaleur priment souvent sur la rapidité et la formalité. Ouvrez-vous à ce rythme différent, c'est aussi ça, vivre Rio." },

    { type: "h2", text: "Le mot du jour : carioca" },
    { type: "p", text: "Carioca désigne un habitant de Rio de Janeiro. Vous entendrez souvent « Sou carioca » (je suis de Rio), une identité forte et revendiquée par ceux qui sont nés ou ont grandi dans la ville." },

    { type: "faq", items: [
      { q: "Faut-il absolument parler portugais pour bien s'entendre avec les cariocas ?", a: "Non, mais quelques expressions de base comme « Bom dia », « Obrigado » ou « Valeu » suffisent à créer une connexion immédiate et chaleureuse." },
      { q: "Le pourboire est-il obligatoire à Rio ?", a: "Les 10% de service ajoutés à l'addition ne sont pas obligatoires. Vous pouvez demander à les retirer en cas de service décevant, mais ils sont généralement acceptés sans discussion." },
      { q: "Comment saluer un carioca correctement ?", a: "Une bise sur la joue est courante entre connaissances, une poignée de main lors d'une première rencontre plus formelle, et un hug chaleureux entre amis proches." },
      { q: "Qu'est-ce que le mot carioca signifie exactement ?", a: "Il désigne spécifiquement un habitant de la ville de Rio de Janeiro, à ne pas confondre avec « brasileiro » qui désigne un Brésilien en général." },
    ]},

    { type: "p", text: "Ouvrez votre cœur, soyez curieux et profitez de chaque instant. Rio, c'est avant tout une façon de vivre, et ces quelques codes simples suffisent à s'y sentir immédiatement chez soi." },
  ],
};
