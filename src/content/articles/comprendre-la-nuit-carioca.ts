import type { Article } from "../types";
import hero from "@/assets/article-nuit-carioca.jpg";

export const article: Article = {
  slug: "comprendre-la-nuit-carioca",
  title: "Comprendre la nuit carioca : bars, samba et clubs",
  titleAccent: "la nuit carioca",
  description: "Bars de quartier, samba et pagode, baile funk, rooftops, clubs : notre guide pour comprendre comment les cariocas sortent vraiment le soir.",
  category: "vie-nocturne",
  tags: ["vie nocturne", "sortir", "culture", "Rio de Janeiro"],
  date: "2026-07-11",
  author: "equipe-jeitinho",
  hero,
  heroAlt: "Ambiance nocturne animée dans un bar de rue à Rio de Janeiro avec musiciens et clients attablés",
  featured: false,
  guide: true,
  popular: false,
  relatedServices: [
    {
      label: "Expériences Jeitinho",
      href: "https://www.jeitinho.fr/experiences",
      description: "Sorties, soirées samba et accès aux meilleures adresses de Rio, sans prise de tête.",
    },
  ],
  sections: [
    { type: "p", text: "Le jour appartient aux plages. La nuit appartient aux cariocas. À Rio, on ne sort pas seulement pour faire la fête. On sort pour retrouver ses amis, écouter de la musique, boire un verre, dîner longtemps et profiter de la ville jusqu'au lever du soleil." },
    { type: "p", text: "Chaque quartier possède son ambiance, son style musical et son public. Choisir où sortir dépend davantage de l'expérience recherchée que du lieu lui-même." },

    { type: "h2", text: "Les grandes ambiances de la nuit à Rio" },
    { type: "h3", text: "Les bars de quartier" },
    { type: "p", text: "Le point de départ de presque toutes les soirées. On s'y retrouve après le travail pour boire une bière, partager quelques petiscos et discuter pendant des heures. C'est le cas notamment à <a href=\"/blog/botafogo-guide-complet\">Botafogo</a>, Leblon et Ipanema." },
    { type: "h3", text: "Samba et pagode" },
    { type: "p", text: "L'ambiance la plus traditionnelle. Musique live, bière bien fraîche, tout le monde chante. Atmosphère très locale et conviviale, en particulier à <a href=\"/blog/lapa-guide-complet\">Lapa</a>, en Zone Sud comme en Zone Nord." },
    { type: "h3", text: "Baile funk" },
    { type: "p", text: "La facette la plus populaire de Rio. Énergie incroyable, basses puissantes et ambiance unique, à découvrir idéalement avec un guide ou une organisation adaptée, disponible en Zone Sud comme en Zone Nord." },
    { type: "h3", text: "Rooftops" },
    { type: "p", text: "Cocktails, coucher de soleil, DJ et vue sur Rio. Parfait pour commencer la soirée en beauté avant de poursuivre la nuit, notamment à Leblon, dans le Centro, à Santa Teresa, Botafogo et Flamengo." },
    { type: "h3", text: "Clubs" },
    { type: "p", text: "House, Afro House, funk, hip-hop, techno... Les clubs commencent souvent à se remplir après minuit, principalement à Lapa, Barra, Ipanema, Centro et dans la Zona Portuária." },
    { type: "conseil", title: "Le conseil Jeitinho", text: "À Rio, personne n'est pressé. Une soirée commence rarement avant 22h et peut facilement finir au lever du soleil. Ne prévoyez pas un programme trop chargé le lendemain d'une vraie sortie carioca." },

    { type: "h2", text: "Comment se déroule une soirée carioca" },
    { type: "ol", items: [
      "18h-20h — sunset, rooftop ou plage pour profiter du coucher de soleil.",
      "20h-22h — dîner tranquille entre amis ou en amoureux.",
      "22h-00h — début de soirée dans les bars de quartier.",
      "00h-03h — clubs, samba ou baile, place à la musique et à la danse.",
      "03h-06h — fin de soirée ou after, la nuit est jeune et l'énergie continue jusqu'au lever du soleil.",
    ]},

    { type: "h2", text: "À savoir avant de sortir" },
    { type: "ul", items: [
      "Les cariocas sortent beaucoup le jeudi.",
      "Vendredi et samedi sont les nuits les plus animées.",
      "Le dimanche est le royaume du pagode et des rodas de samba.",
      "Les grandes soirées commencent souvent bien plus tard qu'en Europe.",
    ]},
    { type: "aeviter", title: "À éviter", text: "Sortez toujours en groupe et restez attentif à vos affaires, en particulier dans les zones les plus fréquentées comme Lapa. Privilégiez un VTC pour rentrer, surtout après 1h du matin." },

    { type: "h2", text: "Le mot du jour : esquenta" },
    { type: "p", text: "Vous entendrez souvent « Vamos fazer um esquenta ? » (on se retrouve avant la soirée pour boire quelques verres avec quelqu'un ?). L'esquenta se déroule dans un bar ou sur la plage, avant de rejoindre la suite de la soirée." },

    { type: "h2", text: "Pour aller plus loin" },
    { type: "p", text: "Découvrez notre guide complet du <a href=\"/blog/lapa-guide-complet\">quartier de Lapa</a>, cœur historique de la nuit carioca, ainsi que nos sélections dédiées aux <a href=\"/blog/rooftops-bars-vue-rio\">rooftops et bars avec vue</a> et au <a href=\"/blog/baile-funk-guide\">baile funk</a>, expression la plus populaire de la culture carioca." },

    { type: "faq", items: [
      { q: "Quel est le meilleur jour pour sortir à Rio ?", a: "Le jeudi, le vendredi et le samedi soir concentrent l'essentiel de l'animation nocturne carioca, avec des ambiances légèrement différentes selon le jour." },
      { q: "À quelle heure commence vraiment une soirée à Rio ?", a: "Rarement avant 22h pour l'entrée en bar ou club, et la soirée peut se prolonger jusqu'au lever du soleil selon l'ambiance et le lieu." },
      { q: "Comment rentrer en sécurité après une soirée ?", a: "Privilégiez toujours un VTC comme Uber plutôt que de héler un taxi dans la rue, en particulier après 1h du matin." },
      { q: "Quelle est la différence entre samba et baile funk ?", a: "Le samba est un genre musical traditionnel, souvent joué en live avec des instruments acoustiques, tandis que le baile funk est une musique électronique populaire née dans les favelas, à l'énergie beaucoup plus intense." },
    ]},

    { type: "p", text: "Une vraie soirée carioca ne consiste pas à enchaîner les lieux. Elle commence souvent autour d'une bière, continue dans un bar animé, passe par une roda de samba ou un rooftop au coucher du soleil, puis se termine en club ou dans un baile. L'important n'est pas de faire le plus de choses possible, mais de vivre le rythme de Rio." },
  ],
};
