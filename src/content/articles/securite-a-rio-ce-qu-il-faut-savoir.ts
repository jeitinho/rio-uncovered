import type { Article } from "../types";
import hero from "@/assets/article-securite-rio.jpg";

export const article: Article = {
  slug: "securite-a-rio-ce-qu-il-faut-savoir",
  title: "Sécurité à Rio : ce qu'il faut vraiment savoir avant de partir",
  titleAccent: "vraiment savoir",
  description: "Ni paranoïaque ni naïf : notre guide pour comprendre la sécurité à Rio, entre vrais réflexes à adopter et fausses peurs à laisser derrière soi.",
  category: "securite",
  tags: ["sécurité", "conseils pratiques", "Rio de Janeiro"],
  date: "2026-07-13",
  author: "equipe-jeitinho",
  hero,
  heroAlt: "Rue animée et bien éclairée de la Zona Sul de Rio de Janeiro en soirée",
  featured: false,
  guide: true,
  popular: false,
  relatedServices: [
    {
      label: "Conciergerie sur mesure",
      href: "https://www.jeitinho.fr/trouver-un-jeitinho",
      description: "On vous accompagne pour un séjour serein, avec des conseils locaux à jour.",
    },
  ],
  sections: [
    { type: "p", text: "Avant un premier voyage à Rio, la plupart des visiteurs reçoivent à peu près les mêmes messages d'inquiétude de la part de leurs proches. « Tu es sûr ? », « Fais attention quand même », « Tu ne sors pas seul le soir j'espère ? ». La réalité, une fois sur place, est plus nuancée que les reportages sensationnalistes, mais aussi plus simple à gérer que ce que la peur laisse imaginer." },
    { type: "p", text: "Ce guide n'est ni alarmiste ni naïf. C'est ce qu'on dirait à un ami qui débarque : les vrais réflexes à adopter, et les fausses peurs à laisser de côté." },

    { type: "h2", text: "Ce que les cariocas font naturellement" },
    { type: "p", text: "Les habitants de Rio appliquent des réflexes simples au quotidien, sans en faire toute une histoire. Personne ne sort avec son passeport sur soi. Personne ne garde son téléphone à la main en marchant dans la rue sans raison précise. Ce n'est pas de la peur, c'est du bon sens local, comparable aux précautions qu'on prendrait naturellement dans certaines zones de n'importe quelle grande ville du monde." },
    { type: "conseil", title: "Le conseil Jeitinho", text: "Le meilleur indicateur de sécurité d'un quartier, c'est le nombre de gens dehors. À Rio, une rue vide un dimanche soir mérite plus d'attention qu'une rue bondée un jeudi à minuit. Fiez-vous à l'ambiance du lieu plus qu'à l'heure sur votre montre." },

    { type: "h2", text: "La Zona Sul, le cœur du séjour touristique" },
    { type: "p", text: "Dans la Zona Sul, entre <a href=\"/blog/botafogo-guide-complet\">Botafogo</a> et <a href=\"/blog/leblon-guide-complet\">Leblon</a>, la plupart des visiteurs se sentent aussi à l'aise que dans n'importe quelle grande ville européenne animée. Il est courant de marcher seul le soir, de rentrer à pied jusqu'au métro ou d'aller courir sur l'Aterro do Flamengo tôt le matin. La différence avec l'Europe reste surtout dans la vigilance portée au téléphone dans la rue et à l'absence de bijoux voyants en extérieur." },
    { type: "bonasavoir", title: "Bon à savoir", text: "Les zones les plus fréquentées par les touristes (Copacabana, Ipanema, Leblon, Botafogo) bénéficient d'une présence policière renforcée, en particulier autour des points d'intérêt et sur les plages. La police touristique (DEAT) est dédiée spécifiquement à l'assistance aux visiteurs." },

    { type: "h2", text: "Comprendre plutôt qu'éviter" },
    { type: "p", text: "Il ne s'agit pas d'éviter Rio, ni de vivre repliée sur soi-même pendant le séjour. Il s'agit d'accepter que certaines zones demandent plus de préparation que d'autres, comme partout dans le monde. Les favelas, par exemple, ne sont pas des zones à éviter par principe : certaines, comme Santa Marta, se visitent très bien, mais toujours avec un guide local qui connaît vraiment le terrain, jamais en improvisant seul." },
    { type: "aeviter", title: "À éviter", text: "Ne vous aventurez jamais seul dans une communauté sans accompagnement local, même si l'entrée semble ouverte à tous. Ce n'est pas une question de danger systématique, mais de respect : ce sont des lieux de vie, pas des attractions touristiques à explorer sans guide." },

    { type: "h2", text: "Les réflexes du quotidien à adopter" },
    { type: "ul", items: [
      "Gardez toujours une petite somme d'espèces séparée de votre carte, au cas où.",
      "Ne sortez votre téléphone que pour l'utiliser, jamais pour le tenir en marchant.",
      "Privilégiez systématiquement Uber le soir plutôt que de marcher de longues distances.",
      "Faites confiance à votre instinct : si une rue semble trop calme ou mal éclairée, faites un détour.",
      "Renseignez-vous localement avant de découvrir un nouveau quartier, plutôt que de vous fier uniquement à une carte.",
    ]},

    { type: "h2", text: "Et si un incident survient malgré tout" },
    { type: "p", text: "Malgré toutes les précautions, un incident peut arriver, comme dans n'importe quelle grande ville du monde. Gardez toujours les numéros d'urgence à portée de main (190 pour la police, 192 pour le SAMU), et en cas de vol, ne poursuivez jamais la personne : mettez-vous en sécurité, bloquez vos cartes, et déclarez le vol à la police touristique." },

    { type: "faq", items: [
      { q: "Rio est-elle plus dangereuse que d'autres grandes villes ?", a: "Certaines statistiques sont plus élevées qu'en Europe, mais la réalité vécue au quotidien dans la Zona Sul reste comparable à celle de nombreuses grandes métropoles, à condition d'adopter les mêmes réflexes de prudence." },
      { q: "Peut-on se promener seul le soir à Rio ?", a: "Dans la Zona Sul, sur les axes fréquentés et éclairés, oui, c'est tout à fait courant. Restez attentif comme dans toute grande ville et privilégiez un VTC pour les trajets plus longs ou tardifs." },
      { q: "Faut-il éviter complètement les favelas ?", a: "Non, certaines communautés se visitent très bien et offrent une expérience culturelle riche, mais toujours accompagné d'un guide local reconnu, jamais en autonomie sans connaissance du terrain." },
      { q: "Que faire en cas de vol à Rio ?", a: "Mettez-vous en sécurité immédiatement, ne poursuivez jamais la personne, bloquez vos cartes bancaires et déclarez le vol à la police touristique (DEAT), spécialement dédiée à l'assistance aux visiteurs." },
    ]},

    { type: "p", text: "Rio ne mérite pas la réputation de ville infréquentable qu'on lui prête parfois de loin. Avec des réflexes simples et un peu de préparation, la ville se révèle aussi accueillante que spectaculaire." },
  ],
};
