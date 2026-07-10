import type { Article } from "../types";
import hero from "@/assets/article-ipanema.jpg";

export const article: Article = {
  slug: "ipanema-guide-complet",
  title: "Ipanema : le guide complet du quartier le plus élégant de Rio",
  titleAccent: "élégant",
  description: "Notre guide complet d'Ipanema : plages, rues, restaurants, bars et adresses secrètes. Écrit par des locaux, pas par Google Traduction.",
  category: "quartiers",
  tags: ["Ipanema", "Zona Sul", "guide de quartier", "plages"],
  date: "2026-06-15",
  author: "Marina Alves",
  hero,
  heroAlt: "Rue bordée de palmiers à Ipanema, Rio de Janeiro, au coucher du soleil",
  featured: true,
  guide: true,
  popular: true,
  relatedServices: [
    {
      label: "Conciergerie sur mesure",
      href: "/conciergerie",
      description: "On vous ouvre les portes de nos adresses favorites à Ipanema.",
    },
    {
      label: "City tour privé",
      href: "/experiences",
      description: "Ipanema, Leblon, Lagoa — la Zona Sul en une matinée avec un local.",
    },
  ],
  sections: [
    { type: "p", text: "Ipanema, ce n'est pas seulement une plage. C'est un état d'esprit. Le quartier concentre ce que Rio a de plus raffiné : des rues bordées de figuiers, des librairies indépendantes, des bars où la caipirinha n'a rien à voir avec celle de votre hôtel, et une plage dont chaque poteau de sauveteur (posto) définit une tribu." },
    { type: "p", text: "Ce guide n'est pas une liste de « top 10 ». C'est ce qu'on dirait à un ami qui débarque : où marcher, où s'asseoir, où éviter, et à quelle heure faire quoi." },

    { type: "h2", text: "Comprendre Ipanema en cinq minutes" },
    { type: "p", text: "Ipanema s'étire entre deux repères naturels : la lagune Rodrigo de Freitas au nord, l'océan Atlantique au sud. À l'ouest, le quartier bascule dans Leblon (son grand cousin, plus discret, plus cher). À l'est, il touche Copacabana par Arpoador, la pointe rocheuse d'où l'on regarde le meilleur coucher de soleil de la ville." },
    { type: "p", text: "La grille est simple : trois axes est-ouest — la plage, Vieira Souto (le front de mer), Prudente de Morais et Visconde de Pirajá (les rues commerçantes) — traversés par les rues numérotées et par la légendaire Garcia d'Ávila." },
    { type: "conseil", title: "Le conseil Jeitinho", text: "N'essayez pas de tout faire en une journée. Ipanema se vit en trois moments : un matin de plage vers Posto 9, un déjeuner tardif dans Visconde de Pirajá, un apéro à Arpoador. Le reste, c'est du bonus." },

    { type: "h2", text: "La plage : lire les postos comme un livre" },
    { type: "p", text: "La plage d'Ipanema est divisée en zones marquées par les postos de sauveteurs (postes 7 à 10). Chaque poste attire une foule différente. Ce n'est pas anecdotique : vous asseoir devant le mauvais peut ruiner votre après-midi ou vous ouvrir la ville." },
    { type: "h3", text: "Posto 7 — Arpoador" },
    { type: "p", text: "Familles, surfeurs, coucher de soleil. C'est ici qu'on applaudit le soleil quand il tombe derrière Dois Irmãos — une tradition, pas une performance touristique." },
    { type: "h3", text: "Posto 8 — sportifs et familles" },
    { type: "p", text: "Beach-volley, futevôlei, ambiance saine. Idéal si vous voyagez en famille ou si vous avez envie d'observer les cariocas dans leur pratique la plus sérieuse : le sport de plage." },
    { type: "h3", text: "Posto 9 — le cœur social" },
    { type: "p", text: "Le posto le plus vibrant. Musique, jeunesse cool, artistes. Si vous voulez sentir Ipanema, c'est ici. Le mieux : arriver vers 15h30, rester jusqu'au coucher du soleil." },
    { type: "h3", text: "Posto 10 — chic et calme" },
    { type: "p", text: "Frontière avec Leblon. Plus tranquille, plus familial haut de gamme. Bon plan si vous fuyez la foule." },
    { type: "aeviter", title: "À éviter", text: "Ne laissez rien sur votre serviette quand vous allez à l'eau. Les vols opportunistes existent, comme partout. Un local n'emporte à la plage que le strict nécessaire — pas de sac, pas de bijoux, pas de téléphone visible." },

    { type: "h2", text: "Où manger — nos vraies adresses" },
    { type: "h3", text: "Petits-déjeuners et brunchs" },
    { type: "ul", items: [
      "Talho Capixaba — la boulangerie institutionnelle de Leblon-Ipanema. Croissants, sanduíches, ambiance de quartier.",
      "Zona Sul (le supermarché) — ne riez pas : leur padaria intégrée fait un des meilleurs pão de queijo du sud de la ville, à emporter.",
      "Casa Camolese — brunch chic côté Lagoa, pour un dimanche prolongé.",
    ]},
    { type: "h3", text: "Déjeuners" },
    { type: "ul", items: [
      "Zazá Bistrô Tropical — cuisine brésilienne modernisée, cadre bohème. Réservez.",
      "Frontera — buffet au kilo de très bonne tenue, idéal si vous voulez tester dix plats.",
      "CT Boucherie — pour la viande, la vraie. Coupes brésiliennes servies en continu.",
    ]},
    { type: "h3", text: "Dîners" },
    { type: "ul", items: [
      "Oro — étoilé, cuisine créative brésilienne, expérience.",
      "Venga! — petits plats espagnols, ambiance conviviale et sonore.",
      "Barsa — un vrai bar-restaurant carioca, pour un fim de tarde qui glisse en dîner.",
    ]},
    { type: "bonasavoir", title: "Bon à savoir", text: "À Rio, on dîne tard. Avant 20h30, la plupart des bons restaurants sont vides. Après 21h30, ils sont pleins. Réservez ou décalez." },

    { type: "h2", text: "Boire un verre : les vrais lieux" },
    { type: "p", text: "Ipanema n'est pas le meilleur quartier de nightclub — pour ça, direction Lapa. Mais pour un verre en début de soirée, difficile de faire mieux." },
    { type: "ul", items: [
      "Palaphita Kitch (côté Lagoa) — cabane éclairée aux torches, cocktails créatifs, coucher de soleil garanti.",
      "Bar Astor — sur le front de mer, une des plus belles caipirinhas de la ville.",
      "Canastra — bar à vins naturels tenu par des Français-Cariocas, jazz certains soirs.",
    ]},

    { type: "h2", text: "Shopping : la vraie Rio créative" },
    { type: "p", text: "Ipanema est le quartier des créateurs brésiliens. Ce n'est pas des chaînes globales qu'on vient chercher ici." },
    { type: "ul", items: [
      "Rua Garcia d'Ávila — l'axe luxe : Osklen, Lenny Niemeyer, joaillerie H.Stern.",
      "Rua Farme de Amoedo — plus décontracté, boutiques indépendantes.",
      "Hippie Fair (Feira Hippie) — chaque dimanche sur Praça General Osório, artisanat honnête si l'on sait chercher.",
    ]},

    { type: "h2", text: "Une journée parfaite à Ipanema" },
    { type: "ol", items: [
      "8h30 — Petit-déjeuner à Talho Capixaba, café et pão de queijo.",
      "10h — Plage côté Posto 8, deux heures et un açaí au kiosque.",
      "13h — Déjeuner tardif à Zazá.",
      "15h — Sieste ou balade dans Visconde de Pirajá.",
      "17h — Retour plage à Posto 9, jusqu'au coucher du soleil.",
      "18h30 — Coucher du soleil applaudi à Arpoador.",
      "20h30 — Dîner à Venga! ou Barsa.",
    ]},

    { type: "faq", items: [
      { q: "Ipanema ou Copacabana : où loger ?", a: "Pour un premier séjour orienté plage-restaurants-nightlife : Ipanema (ou Leblon si budget). Copacabana reste imbattable pour la vue et le rapport qualité-prix, mais l'offre restaurants et l'atmosphère de quartier sont plus faibles." },
      { q: "Ipanema est-elle sûre ?", a: "Oui, c'est l'un des quartiers les plus sûrs de Rio en journée comme le soir. Comme partout : bon sens, pas de bijoux ostentatoires, téléphone rangé dans la rue." },
      { q: "Peut-on nager à Ipanema ?", a: "Oui, mais l'océan est puissant. Baignez-vous entre les postos de sauveteurs et respectez les drapeaux. Le courant peut être fort." },
      { q: "Quand aller à la plage ?", a: "Le matin (jusqu'à 11h) pour la lumière douce, ou après 15h pour éviter le pic de chaleur. Entre 12h et 15h, l'UV est extrême." },
    ]},

    { type: "p", text: "Ipanema récompense la patience. Marchez, asseyez-vous, revenez. Vous partirez avec cette sensation particulière : celle d'avoir compris, un peu, comment vit une ville." },
  ],
};
