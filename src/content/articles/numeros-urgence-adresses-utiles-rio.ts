import type { Article } from "../types";
import hero from "@/assets/hero-blog.jpg";
// TODO: remplacer par une photo neutre (façade de commissariat ou plaque de rue)

export const article: Article = {
  slug: "numeros-urgence-adresses-utiles-rio",
  title: "Numéros d'urgence et adresses utiles à Rio",
  titleAccent: "urgence",
  description: "Les contacts essentiels à garder sur vous pendant tout votre séjour à Rio : police, ambulance, consulat, hôpitaux — pour ne jamais chercher au mauvais moment.",
  category: "vie-pratique-locale",
  tags: ["quotidien", "pratique", "sécurité"],
  date: "2026-07-20",
  author: "equipe-jeitinho",
  hero,
  heroAlt: "Rue animée de Copacabana en journée",
  sections: [
    {
      type: "p",
      text: "On espère que vous n'en aurez jamais besoin, mais mieux vaut les avoir sous la main plutôt que de les chercher dans l'urgence. Voici les contacts et adresses essentiels à Rio.",
    },
    { type: "h2", text: "Numéros d'urgence" },
    {
      type: "ul",
      items: [
        "190 — Police",
        "192 — SAMU (ambulance)",
        "193 — Pompiers",
        "199 — Défense civile",
      ],
    },
    { type: "h2", text: "Police touristique (DEAT)" },
    {
      type: "p",
      text: "La Delegacia Especial de Apoio ao Turismo est le commissariat dédié aux touristes — c'est là qu'il faut déposer plainte en cas de vol de téléphone, passeport ou portefeuille. Av. Afrânio de Melo Franco, 159, Leblon — +55 21 2332-2924.",
    },
    { type: "h2", text: "Consulat de France" },
    {
      type: "p",
      text: "Pour un passeport perdu, un document d'urgence, une assistance consulaire ou reprendre contact avec la famille : Avenida Presidente Antônio Carlos, 58, Centro — +55 21 3823-9200 — bresil.diplomatie.gouv.fr.",
    },
    { type: "h2", text: "En cas de problème de santé" },
    {
      type: "p",
      text: "Voir notre article dédié <a href=\"/blog/se-soigner-a-rio\">Se soigner à Rio</a> pour la liste complète des hôpitaux et UPA de la Zona Sul. Pour un besoin plus léger, une <a href=\"/blog/pharmacies-a-rio\">pharmacie 24h/24</a> est souvent la solution la plus rapide.",
    },
    {
      type: "conseil",
      title: "Le conseil Jeitinho",
      text: "Prenez en photo cette page (ou enregistrez-la hors ligne) dès votre arrivée à Rio — en cas de vol de téléphone, mieux vaut l'avoir déjà notée ailleurs.",
    },
    { type: "h2", text: "En cas de vol de téléphone" },
    {
      type: "ul",
      items: [
        "Bloquez votre carte bancaire",
        "Déconnectez WhatsApp depuis un autre appareil",
        "Localisez votre téléphone si possible",
        "Déposez plainte à la DEAT (police touristique)",
      ],
    },
    {
      type: "aeviter",
      title: "À éviter",
      text: "Ne poursuivez jamais un voleur, quelle que soit la valeur de l'objet. Mettez-vous en sécurité d'abord, la déclaration peut attendre quelques minutes.",
    },
    {
      type: "faq",
      items: [
        {
          q: "Les numéros d'urgence brésiliens sont-ils gratuits ?",
          a: "Oui, 190, 192, 193 et 199 sont gratuits, y compris depuis un téléphone sans forfait actif.",
        },
        {
          q: "Le personnel de la police touristique parle-t-il français ou anglais ?",
          a: "L'anglais est possible dans la plupart des cas à la DEAT, le français plus rarement. Le consulat de France peut faire l'intermédiaire si besoin.",
        },
        {
          q: "Faut-il appeler le consulat pour un simple vol de téléphone ?",
          a: "Non, sauf si un document d'identité français a aussi été volé. Pour un téléphone seul, la déclaration à la DEAT suffit généralement pour les démarches d'assurance.",
        },
      ],
    },
  ],
  relatedServices: [
    {
      label: "Assistance Jeitinho",
      href: "https://www.jeitinho.fr/trouver-un-jeitinho",
      description: "En cas de souci pendant votre séjour, notre équipe locale peut vous accompagner dans les démarches.",
    },
  ],
};
