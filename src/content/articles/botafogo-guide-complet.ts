import type { Article } from "../types";
import hero from "@/assets/quartier-botafogo.jpg";
import galerie1 from "@/assets/botafogo-1.jpg";
import galerie2 from "@/assets/botafogo-2.jpg";

export const article: Article = {
  slug: "botafogo-guide-complet",
  title: "Botafogo : le guide complet du quartier le plus vivant de Rio",
  titleAccent: "vivant",
  description: "Notre guide complet de Botafogo : baie, gastronomie, vie nocturne et vraies adresses de quartier. Écrit par des locaux, pas par Google Traduction.",
  category: "quartiers",
  tags: ["Botafogo", "Zona Sul", "guide de quartier", "vie locale"],
  date: "2026-06-28",
  author: "equipe",
  hero,
  heroAlt: "Baie de Botafogo avec vue sur le Pain de Sucre au coucher du soleil, Rio de Janeiro",
  featured: false,
  guide: true,
  popular: true,
  relatedServices: [
    {
      label: "Conciergerie sur mesure",
      href: "https://www.jeitinho.fr/trouver-un-jeitinho",
      description: "On vous ouvre les portes de nos adresses favorites à Botafogo.",
    },
    {
      label: "City tour privé",
      href: "https://www.jeitinho.fr/experiences",
      description: "Botafogo, Urca, Pain de Sucre — la baie de Guanabara en une matinée avec un local.",
    },
  ],
  sections: [
    { type: "p", text: "Botafogo est probablement le quartier où vivent le plus de cariocas « normaux » de toute la Zona Sul : ni la carte postale d'Ipanema, ni le glamour de Leblon, mais une vie de quartier dense, mélangée, avec des bureaux, des universités, des bars de fin de semaine et l'une des plus belles vues gratuites de la ville sur le Pain de Sucre." },
    { type: "p", text: "Ce guide n'est pas une simple liste de restaurants. C'est ce qu'on dirait à un ami qui débarque : où marcher, où s'asseoir, où éviter, et à quelle heure faire quoi." },

    { type: "h2", text: "Comprendre Botafogo en cinq minutes" },
    { type: "p", text: "Botafogo occupe le fond d'une baie éponyme, entre <a href=\"/blog/urca-guide-complet\">Urca</a> à l'est et <a href=\"/blog/flamengo-guide-complet\">Flamengo</a> à l'ouest, avec le Pain de Sucre visible depuis presque tous les points du front de mer. Contrairement aux quartiers de plage de la Zona Sul, l'eau de la baie n'est pas propice à la baignade, mais la promenade au bord de l'eau reste l'une des plus belles de Rio, notamment à la tombée du jour." },
    { type: "p", text: "Le quartier est aussi un pôle économique et culturel important, avec le siège de plusieurs grandes entreprises, le stade historique du Botafogo Futebol e Regatas, et une vie étudiante animée liée à la proximité de plusieurs universités." },
    { type: "conseil", title: "Le conseil Jeitinho", text: "Venez au Mirante do Pasmado en fin de journée : ce petit belvédère perché au-dessus du quartier offre l'une des meilleures vues sur la baie de Botafogo et le Pain de Sucre, sans la foule des points de vue plus connus." },

    { type: "h2", text: "Le front de mer et la baie" },
    { type: "p", text: "La baie de Botafogo, bordée par l'Aterro do Flamengo qui la relie au parc du même nom, est un lieu de promenade et de sport à ciel ouvert : joggeurs, cyclistes et familles s'y croisent du matin au soir, avec en toile de fond la silhouette du Pain de Sucre qui se reflète dans l'eau calme, surtout au coucher du soleil." },
    { type: "p", text: "Contrairement aux plages de la Zona Sul, on ne se baigne pas ici : l'eau de la baie est trop polluée pour la baignade. Mais c'est un excellent endroit pour le vélo, le pique-nique ou simplement s'asseoir sur la pelouse en admirant la vue." },
    { type: "aeviter", title: "À éviter", text: "Ne vous baignez pas dans la baie de Botafogo, l'eau y est impropre à la baignade contrairement aux plages océaniques de la Zona Sul. Pour nager, direction Copacabana ou Urca." },

    { type: "h2", text: "Où manger — nos vraies adresses" },
    { type: "h3", text: "Rua Voluntários da Pátria, l'axe gourmand" },
    { type: "ul", items: [
      "Miam Miam — cuisine créative dans un cadre rétro-chic tenu par une cheffe reconnue, l'une des meilleures tables du quartier.",
      "Aconchego Carioca — boteco moderne réputé pour ses sanduíches et sa bière artisanale.",
      "Meza Bar — petits plats à partager, ambiance animée en soirée.",
    ]},
    { type: "h3", text: "Institutions populaires" },
    { type: "ul", items: [
      "Balcão — restaurant-comptoir de fruits de mer, simple et généreux.",
      "Emporio Pax — bar de quartier convivial, coin idéal pour un chope entre amis.",
    ]},
    { type: "bonasavoir", title: "Bon à savoir", text: "La rua Voluntários da Pátria et ses environs concentrent une scène gastronomique en pleine expansion, souvent plus abordable qu'à Ipanema ou Leblon pour un niveau de qualité comparable." },

    { type: "h2", text: "Que voir et que faire" },
    { type: "h3", text: "Le Museu do Índio" },
    { type: "p", text: "Installé dans une ancienne demeure, ce musée dédié aux peuples autochtones du Brésil propose une collection ethnographique riche et un jardin agréable, loin de l'agitation touristique." },
    { type: "h3", text: "Le stade et la vie sportive" },
    { type: "p", text: "Le quartier est historiquement lié au club de football Botafogo, l'un des quatre grands clubs de Rio. Assister à un match dans une ambiance populaire est une expérience à part entière pour les amateurs de football." },
    { type: "h3", text: "Le Mirante do Pasmado" },
    { type: "p", text: "Petit belvédère accessible en voiture ou à pied depuis le quartier, offrant une vue exceptionnelle sur la baie de Botafogo et le Pain de Sucre, particulièrement photogénique au coucher du soleil." },

    { type: "h2", text: "Sortir le soir" },
    { type: "p", text: "Botafogo est devenu ces dernières années l'un des quartiers de sortie préférés des jeunes cariocas, avec une offre plus abordable et moins touristique que Lapa ou la Zona Sul balnéaire." },
    { type: "ul", items: [
      "Comuna — espace culturel et bar hybride, programmation musicale éclectique.",
      "Buenas Chicas — bar animé, cocktails créatifs, ambiance conviviale entre amis.",
    ]},

    { type: "h2", text: "Une journée parfaite à Botafogo" },
    { type: "ol", items: [
      "9h — Petit-déjeuner et café dans une padaria de quartier.",
      "10h30 — Promenade le long de la baie, vélo ou marche.",
      "12h — Visite du Museu do Índio.",
      "13h — Déjeuner chez Balcão ou Aconchego Carioca.",
      "15h — Détour par le Mirante do Pasmado pour la vue.",
      "18h — Coucher de soleil sur la baie depuis l'Aterro.",
      "20h — Dîner rue Voluntários da Pátria puis sortie chez Comuna.",
    ]},

    { type: "faq", items: [
      { q: "Botafogo est-il un bon quartier pour loger ?", a: "Oui, c'est un excellent compromis entre budget maîtrisé, vie de quartier authentique et bonne connexion en métro vers Ipanema, Copacabana et le centre-ville." },
      { q: "Peut-on se baigner à Botafogo ?", a: "Non, l'eau de la baie est impropre à la baignade. Il faut se rendre à Copacabana ou Urca pour nager." },
      { q: "Comment se déplacer depuis Botafogo ?", a: "Le quartier est desservi par le métro (ligne 1), ce qui en fait l'un des points de connexion les plus pratiques de la Zona Sul." },
      { q: "Botafogo est-il adapté aux familles ?", a: "Oui, le quartier est calme en journée avec de bons espaces verts, même s'il n'a pas de plage de baignade directement accessible." },
    ]},

    { type: "p", text: "Botafogo, c'est le Rio du quotidien, celui que les cariocas vivent vraiment, entre bureau, football et apéro de fin de semaine, avec le Pain de Sucre toujours en toile de fond, comme un rappel discret qu'on est bien à Rio." },
  ],
};
