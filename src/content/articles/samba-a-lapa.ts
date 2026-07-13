import type { Article } from "../types";
import hero from "@/assets/article-samba-lapa.jpg";

export const article: Article = {
  slug: "samba-a-lapa",
  title: "Samba à Lapa : où vivre la musique vivante de Rio",
  titleAccent: "vivante",
  description: "Beco do Rato, Pagode da Garagem, Pedra do Sal : notre guide des meilleurs spots de samba et pagode dans le berceau de la nuit carioca.",
  category: "culture",
  tags: ["samba", "musique", "Lapa", "culture carioca"],
  date: "2026-07-11",
  author: "equipe-jeitinho",
  hero,
  heroAlt: "Musiciens jouant du cavaquinho et du surdo lors d'une roda de samba de rue à Lapa, Rio de Janeiro",
  featured: false,
  guide: true,
  popular: false,
  relatedServices: [
    {
      label: "Expériences Jeitinho",
      href: "https://www.jeitinho.fr/experiences",
      description: "Accès privilégié aux meilleures rodas de samba, réservations et accompagnement local.",
    },
  ],
  sections: [
    { type: "p", text: "Le samba et le pagode sont bien plus que des styles musicaux : c'est une tradition, un mode de vie. Nés dans les quartiers populaires, ils rassemblent, racontent des histoires et font vibrer Rio depuis près d'un siècle, nulle part avec autant d'intensité qu'à <a href=\"/blog/lapa-guide-complet\">Lapa</a>." },
    { type: "p", text: "Ce guide n'est pas une simple présentation musicale. C'est ce qu'on dirait à un ami curieux : où s'installer, quand y aller, et comment se laisser porter." },

    { type: "h2", text: "Samba et pagode : quelle différence ?" },
    { type: "p", text: "Le samba est le cœur battant de la culture brésilienne. Plus traditionnel, il vient des écoles de samba et des rodas de rue. Les instruments comme le surdo, le repique, le tamborim et le cavaquinho donnent un rythme énergique et une richesse percussive unique." },
    { type: "p", text: "Le pagode est né dans les années 1980 à Rio. Plus moderne et intime, il est en général joué en petits groupes avec des instruments comme le tantã, le pandeiro, le banjo et le cavaquinho, et des paroles qui parlent du quotidien, de l'amour et de la vie." },
    { type: "conseil", title: "Le conseil Jeitinho", text: "Pour le samba : arrivez tard pour profiter de l'ambiance à son comble. Pour le pagode : arrivez tôt, les meilleures places partent vite, souvent le dimanche après-midi." },

    { type: "h2", text: "Les meilleurs spots samba et pagode" },
    { type: "h3", text: "Beco do Rato — Lapa" },
    { type: "p", text: "Institution depuis plus de 20 ans. Samba de roda authentique, ambiance de rue et public fidèle. Un classique de tous les jours, dès 21h." },
    { type: "h3", text: "Pagode da Garagem — Lapa" },
    { type: "p", text: "Référence du pagode carioca, ambiance de quartier, musiciens talentueux et énergie garantie jusqu'au petit matin. Tous les jours, dès 22h." },
    { type: "h3", text: "Samba da Pedra do Sal — Saúde" },
    { type: "p", text: "Sur le berceau du samba, au cœur de la Pedra do Sal. Gratuit, populaire et chargé d'histoire, tous les lundis dès 19h." },
    { type: "h3", text: "Samba do Xoxó — Vidigal" },
    { type: "p", text: "Samba de roda avec une vue imprenable sur Rio. Ambiance unique au coucher du soleil, tous les dimanches dès 17h." },
    { type: "h3", text: "Pagode chez Kauai — Gigoia (Barra da Tijuca)" },
    { type: "p", text: "Pagode en plein air dans un cadre paradisiaque, convivial, ensoleillé et avec vue sur le canal. Les dimanches dès 15h." },
    { type: "bonasavoir", title: "Bon à savoir", text: "Le samba et le pagode rassemblent toutes les générations. Chantez, dansez, respectez les artistes et profitez de l'instant. Ici, tout le monde est le bienvenu." },

    { type: "h2", text: "Comment profiter au maximum" },
    { type: "ol", items: [
      "Arrivez tard pour le samba, afin de sentir l'ambiance monter et profiter du peak de la soirée.",
      "Arrivez tôt pour le pagode, les meilleures places partent vite, surtout le dimanche.",
      "Installez-vous, commandez une boisson, relaxez et entrez dans le rythme.",
      "Respectez et partagez : respectez les artistes et les autres, participez aux chœurs et vibrez ensemble.",
    ]},
    { type: "aeviter", title: "À éviter", text: "Certains lieux se déroulent en extérieur : prévoyez un anti-moustique, surtout pour les événements en soirée près de la lagune ou du canal, comme à Gigoia." },

    { type: "h2", text: "Le mot du jour : roda de samba" },
    { type: "p", text: "Vous entendrez souvent « Hoje tem roda de samba ? » (il y a une roda de samba ce soir ?). Une roda de samba est un cercle de musiciens jouant du samba en live, une des expériences les plus authentiques de Rio." },

    { type: "faq", items: [
      { q: "Le samba de la Pedra do Sal est-il vraiment gratuit ?", a: "Oui, cet événement historique et populaire du lundi soir est gratuit et accessible à tous, dans le lieu considéré comme le berceau du samba carioca." },
      { q: "Quelle est la différence entre Lapa et Madureira pour le samba et le pagode ?", a: "Lapa concentre l'ambiance la plus touristique et festive, ouverte tous les soirs, tandis que des quartiers comme Madureira offrent une expérience plus locale et traditionnelle, notamment lors des rodas de pagode du week-end." },
      { q: "Faut-il réserver pour assister à une roda de samba ?", a: "Certains événements sont gratuits et en accès libre, d'autres se font sur réservation. Contactez Jeitinho pour connaître les modalités selon la soirée choisie." },
      { q: "Le pagode se joue-t-il uniquement le dimanche ?", a: "Non, mais les meilleurs pagodes ont souvent lieu le dimanche après-midi, un moment traditionnel de convivialité pour de nombreux cariocas." },
    ]},

    { type: "p", text: "Vivre une soirée samba ou pagode à Lapa, c'est toucher du doigt l'âme la plus profonde de Rio. Installez-vous, commandez une bière, et laissez-vous porter par le rythme." },
  ],
};
