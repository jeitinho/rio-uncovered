import type { Article } from "../types";
import hero from "@/assets/article-carnaval.jpg";

export const article: Article = {
  slug: "blocos-de-rue-carnaval-rio",
  title: "Les blocos de rue à ne pas manquer pendant le Carnaval de Rio",
  titleAccent: "blocos de rue",
  description: "Qu'est-ce qu'un bloco, comment trouver le programme, quels cortèges suivre et comment gérer la foule sereinement : notre guide complet des blocos de rue à Rio.",
  category: "carnaval",
  tags: ["blocos", "Carnaval", "vie nocturne", "Rio de Janeiro"],
  date: "2026-09-02",
  author: "equipe-jeitinho",
  hero,
  heroAlt: "Danseuses de samba en costumes rouges au Carnaval de Rio",
  featured: false,
  guide: true,
  popular: false,
  relatedServices: [
    {
      label: "Assistance Jeitinho Carnaval",
      href: "https://jeitinho.fr/trouver-un-jeitinho",
      description: "Un bon plan pour choisir vos blocos, un souci sur place pendant le Carnaval : on vous accompagne en français.",
    },
  ],
  sections: [
    { type: "p", text: "Le <a href=\"/blog/preparer-carnaval-rio\">Sambódromo</a> est le spectacle. Les blocos, eux, sont le Carnaval. Ce sont les cortèges de rue, gratuits et ouverts à tous, qui transforment la ville entière en fête pendant deux semaines. Ce guide se concentre entièrement sur eux : comment les trouver, lesquels suivre, et surtout comment les vivre sans mauvaise surprise au milieu d'une foule de plusieurs centaines de milliers de personnes." },

    { type: "h2", text: "Qu'est-ce qu'un bloco, exactement ?" },
    { type: "p", text: "Un bloco (contraction de « bloco de carnaval ») est un défilé de rue informel : un camion ou un char ouvert porte une fanfare et des chanteurs, et la foule suit ou danse autour, costumée ou non. Aucun billet, aucune tribune, aucune inscription — on rejoint le cortège où et quand on veut, on repart quand on veut. C'est l'exact opposé du <a href=\"/blog/billets-sambodromo-rio\">défilé du Sambódromo</a>, qui est un spectacle payant, chronométré, réservé aux écoles de samba officielles. Rio compte plusieurs centaines de blocos différents pendant le Carnaval, du petit cortège de quartier de quelques centaines de personnes au mégabloco qui réunit des foules considérables dans le Centro ou la Zona Sul." },

    { type: "h2", text: "Comment trouver le programme des blocos" },
    { type: "p", text: "Le programme change chaque année et les horaires bougent parfois à la dernière minute (pluie, sécurité, changement de parcours). Trois réflexes fiables :" },
    { type: "ul", items: [
      "L'application officielle « Blocos do Rio », publiée par la mairie de Rio (Riotur) : elle liste les blocos par jour, par quartier et par horaire, avec la carte des parcours.",
      "Le site officiel du Carnaval de rue de la mairie (riotur.rio), qui publie le calendrier complet à l'approche de l'événement.",
      "Les comptes Instagram des blocos eux-mêmes et les groupes de quartier — utile pour les changements de dernière minute.",
    ]},
    { type: "conseil", title: "Le conseil Jeitinho", text: "Ne planifiez pas votre journée autour d'un seul bloco. Repérez-en deux ou trois dans la même zone et le même créneau : si l'un est bondé ou décalé, vous avez un plan B à cent mètres." },

    { type: "h2", text: "Quelques blocos emblématiques" },
    { type: "p", text: "Impossible d'être exhaustif tant l'offre change d'une année sur l'autre, mais certains noms reviennent chaque édition parmi les plus suivis :" },
    { type: "ul", items: [
      "Cordão da Bola Preta — le bloco le plus ancien de Rio (plus d'un siècle d'existence), dans le Centro. C'est historiquement l'un des plus fréquentés du Carnaval de rue, toutes générations confondues.",
      "Simpatia É Quase Amor — le grand bloco d'Ipanema, généralement le dimanche, dans une ambiance plus « Zona Sul ».",
      "Monobloco — un bloco de percussion réputé pour sa musicalité, très suivi dans la Zona Sul.",
      "Les grands blocos historiques du centre-ville — le Centro concentre chaque année plusieurs des plus gros cortèges du Carnaval de rue, souvent en fin de matinée le week-end.",
    ]},
    { type: "bonasavoir", title: "Bon à savoir", text: "Les blocos les plus connus attirent une foule très dense, surtout en fin de matinée le week-end. Pour une ambiance plus intime, les blocos de quartier moins médiatisés — repérables via l'appli plutôt que par leur notoriété — offrent souvent une bien meilleure expérience." },

    { type: "h2", text: "Comment s'habiller et se préparer" },
    { type: "p", text: "Costume léger et confortable, chaussures fermées (les pieds nus ou en tongs souffrent vite dans une foule dense), casquette ou chapeau, lunettes de soleil. Prévoyez peu : un bloco de plusieurs heures debout au soleil se vit mieux les mains libres. Le SAARA, marché populaire du Centro, est l'endroit classique pour trouver un costume ou des accessoires pour quelques euros avant de vous lancer." },

    { type: "h2", text: "La sécurité dans la foule" },
    { type: "p", text: "Un bloco n'est pas un lieu dangereux en soi, mais une foule dense et festive reste un terrain favorable au vol à la tire — le même principe que dans n'importe quel grand rassemblement dans le monde. Voir notre guide complet sur <a href=\"/blog/securite-a-rio-ce-qu-il-faut-savoir\">la sécurité à Rio</a> pour les réflexes généraux ; voici ceux qui comptent spécifiquement en bloco." },
    { type: "ul", items: [
      "Pas de sac à main ni de sac à dos ouvert : une pochette étanche portée en bandoulière contre le corps, ou une banane fermée devant vous.",
      "Le téléphone reste rangé sauf pour une photo rapide — ne le tenez jamais à la main en dansant.",
      "Cash divisé en deux endroits séparés, jamais toute la somme au même endroit.",
      "Laissez à l'hôtel passeport, bijoux de valeur et cartes que vous n'utiliserez pas ce jour-là.",
      "Une photo de carte d'identité sur le téléphone suffit largement comme preuve d'identité sur place.",
    ]},
    { type: "aeviter", title: "À éviter", text: "Ne gardez pas votre téléphone dans une poche arrière ou un sac ouvert porté dans le dos : c'est la cible numéro un dans une foule compacte." },

    { type: "h2", text: "Alcool, chaleur et hydratation" },
    { type: "p", text: "Un bloco se déroule souvent en pleine journée, sous un soleil de février qui frappe fort (30 à 40°C, forte humidité). L'alcool coule librement — vendeurs ambulants de bière et de caipirinha à chaque coin de rue — et la combinaison chaleur, marche, danse et alcool épuise plus vite qu'on ne l'imagine." },
    { type: "bonasavoir", title: "Bon à savoir", text: "Buvez de l'eau au moins autant que d'alcool, mangez avant de partir, et repérez à l'avance un endroit à l'ombre pour souffler si besoin. Crème solaire indispensable : plusieurs heures dehors en début d'après-midi brûlent vite." },

    { type: "h2", text: "Si vous êtes séparé de votre groupe" },
    { type: "p", text: "Dans une foule de plusieurs dizaines de milliers de personnes, se perdre de vue est fréquent et sans gravité si on l'a anticipé. Avant de partir, fixez avec votre groupe un point de rendez-vous fixe et facilement identifiable (une pharmacie, l'entrée d'une station de métro, un café) plutôt qu'un point mobile dans la foule. Partagez votre position en temps réel entre téléphones si possible, et gardez du réseau ou du wifi accessible : le réseau mobile sature parfois dans les zones les plus denses. En dernier recours, un chauffeur Uber ou un ami connaît toujours l'adresse de l'hôtel — gardez-la notée quelque part, pas seulement dans votre tête." },

    { type: "faq", items: [
      { q: "Faut-il payer pour suivre un bloco ?", a: "Non, les blocos de rue sont entièrement gratuits et ouverts à tous, contrairement au défilé payant du Sambódromo." },
      { q: "Comment savoir quels blocos ont lieu un jour donné ?", a: "L'application officielle Blocos do Rio de la mairie (Riotur) et le site riotur.rio publient le calendrier complet, quartier par quartier, avec les horaires de concentration et de départ." },
      { q: "Les blocos sont-ils adaptés aux enfants ?", a: "Certains, oui — plusieurs blocos ont lieu en matinée dans la Zona Sul avec une ambiance familiale. Évitez en revanche les plus grands mégablocos du Centro avec de jeunes enfants : la densité de foule y est difficile à gérer." },
      { q: "Que faire si on se fait voler quelque chose pendant un bloco ?", a: "Mettez-vous en sécurité, ne poursuivez jamais la personne, bloquez vos cartes bancaires immédiatement et déclarez le vol à la police touristique (DEAT) — voir notre guide sécurité pour les démarches complètes." },
    ]},
  ],
};
