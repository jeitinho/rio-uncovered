import type { Article } from "../types";
import hero from "@/assets/article-maracana.jpg";

export const article: Article = {
  slug: "guide-maracana",
  title: "Le Maracanã : comment assister à un match comme un initié",
  titleAccent: "initié",
  description: "Notre guide complet du Maracanã à Rio : billetterie, secteurs, ambiance, sécurité, quel match choisir. Écrit par un supporter local.",
  category: "football",
  tags: ["Maracanã", "football", "Flamengo", "Fluminense"],
  date: "2026-06-25",
  author: "Rafael Coelho",
  hero,
  heroAlt: "Vue intérieure du stade Maracanã de Rio de Janeiro pendant un match, foule et pelouse illuminée",
  featured: true,
  popular: true,
  relatedServices: [
    { label: "Expérience Maracanã", href: "/experiences", description: "Billets, transfert, accompagnement par un supporter local. On sélectionne le meilleur match de la semaine." },
  ],
  sections: [
    { type: "p", text: "Assister à un match au Maracanã n'est pas une activité touristique. C'est une immersion dans ce que Rio a de plus intense. Encore faut-il choisir le bon match, le bon secteur, et savoir comment y aller." },

    { type: "h2", text: "Quel match choisir ?" },
    { type: "p", text: "Le Maracanã accueille surtout les quatre grands clubs cariocas : Flamengo (le géant, ambiance rouge et noir), Fluminense (le raffiné, grenat-vert-blanc), Vasco (le populaire, noir-blanc), Botafogo (le classique, noir-blanc étoilé). Notre hiérarchie pour un premier match :" },
    { type: "ol", items: [
      "Flamengo à domicile — l'ambiance la plus dingue de la planète, 60 000+ spectateurs galvanisés.",
      "Fla-Flu (Flamengo vs Fluminense) — le derby historique, un moment de sport pur.",
      "Fluminense à domicile — moins bondé, ambiance plus familiale, chants plus mélodiques.",
      "Match de Copa Libertadores — foot sud-américain de haut niveau, ambiance encore montée d'un cran.",
    ]},
    { type: "conseil", title: "Le conseil Jeitinho", text: "Évitez les matchs de mi-championnat en début de saison — stades à moitié vides, ambiance décevante. Visez toujours un match à enjeu ou un derby." },

    { type: "h2", text: "Choisir son secteur" },
    { type: "h3", text: "Secteurs Norte et Sul (populaires)" },
    { type: "p", text: "Places debout historiquement, aujourd'hui assises. C'est là que se rassemble la torcida (les fans hardcore). Ambiance électrique — mais chants, tambours, sauts non-stop. Pour l'immersion totale. Prix : 15-30 €." },
    { type: "h3", text: "Secteurs Oeste et Leste (latéraux)" },
    { type: "p", text: "Vue plus tactique, ambiance plus mixte. Recommandé pour un premier match si vous voulez à la fois voir le foot et sentir la ferveur. Prix : 25-50 €." },
    { type: "h3", text: "Secteur Maracanã Mais (VIP)" },
    { type: "p", text: "Sièges confortables, bar, moins d'ambiance. Pour qui veut « voir un match » sans plonger dans la foule. Prix : 60-120 €." },

    { type: "h2", text: "Acheter ses billets" },
    { type: "ul", items: [
      "Officiel Flamengo : site nation.flamengo.com.br — mais nécessite un CPF (identifiant fiscal brésilien).",
      "Officiel Fluminense : centraldoflu.com — même contrainte.",
      "Revendeurs légaux (Futebolcard) : plus simple pour les étrangers, majoration modérée.",
      "Concierge local : la meilleure option pour un premier match — on filtre le meilleur match de la semaine et on s'occupe des billets.",
    ]},
    { type: "aeviter", title: "À éviter", text: "Les revendeurs à la sauvette devant le stade. Faux billets fréquents. Économiser 5 € pour rater le match, c'est absurde." },

    { type: "h2", text: "Se rendre au Maracanã" },
    { type: "p", text: "Le meilleur moyen : métro, ligne 2, station Maracanã. 15 minutes depuis Copacabana. À la sortie, suivez la foule. Uber possible mais lent les jours de match. Prévoir d'être sur place 1h avant le coup d'envoi." },

    { type: "h2", text: "Sur place : les codes" },
    { type: "ul", items: [
      "Portez un maillot ou une couleur du club à domicile — jamais celle de l'équipe adverse.",
      "Alcool : disponible, mais bière légère seulement (bières \"chopp\" pas toujours).",
      "Nourriture : hot-dogs, chocolats chauds, empadinhas. Correct.",
      "Sanitaires : allez-y AVANT le coup d'envoi, sinon vous ratez.",
      "Chants : impossible d'apprendre en une soirée. Regardez, écoutez, tapez dans les mains sur le rythme. Ça suffit.",
    ]},
    { type: "bonasavoir", title: "Bon à savoir", text: "Fin de match : la sortie prend 30-45 minutes. Ne courez pas au métro — la station est saturée. Prenez un verre dans un bar à 5 min à pied, revenez en Uber calmement." },

    { type: "h2", text: "Une soirée type" },
    { type: "ol", items: [
      "17h — départ de la Zona Sul en métro (ou Uber).",
      "18h30 — arrivée au stade, entrée, place, ambiance qui monte.",
      "20h — coup d'envoi. 90 minutes intenses.",
      "22h — sortie, dîner tardif dans Tijuca ou retour Zona Sul.",
    ]},

    { type: "faq", items: [
      { q: "Est-ce dangereux d'aller au Maracanã ?", a: "Non. Le stade est très sécurisé. Les incidents concernent surtout les torcidas organizadas — que vous ne croiserez pas dans les secteurs standard." },
      { q: "Y a-t-il des visites du stade hors match ?", a: "Oui, visite guidée du Maracanã tous les jours (15-20 €). Intéressant mais bien moins que voir un match." },
      { q: "Un match sans être fan de foot, ça vaut le coup ?", a: "Absolument. C'est autant du spectacle culturel que du sport. Beaucoup de nos clients « non-footeux » citent le Maracanã dans leur top 3." },
    ]},
  ],
};
