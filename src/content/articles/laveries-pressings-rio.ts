import type { Article } from "../types";
import hero from "@/assets/hero-blog.jpg";
// TODO: remplacer par une photo d'une lavanderia self-service à Rio (machines alignées, paiement carte/PIX)

export const article: Article = {
  slug: "laveries-pressings-rio",
  title: "Laveries à Rio : les lavanderias self-service, à chaque coin de rue",
  titleAccent: "laveries",
  description: "Contrairement à une idée reçue, les laveries automatiques en libre-service sont partout à Rio. Voici comment elles fonctionnent, ce qu'elles coûtent, et quand préférer une lavanderia au kilo.",
  category: "vie-pratique-locale",
  tags: ["quotidien", "pratique"],
  date: "2026-07-19",
  author: "equipe-jeitinho",
  hero,
  heroAlt: "Machines à laver en libre-service dans une lavanderia self-service à Rio de Janeiro",
  sections: [
    {
      type: "p",
      text: "Contrairement à ce qu'on pourrait croire en arrivant, la laverie automatique en libre-service n'a rien de rare à Rio : les lavanderias self-service se sont multipliées ces dernières années, et on en croise littéralement à chaque coin de rue dans la plupart des quartiers de la Zona Sul. Pour un séjour de plus d'une semaine, c'est souvent la solution la plus simple.",
    },
    { type: "h2", text: "La lavanderia self-service : l'option la plus courante" },
    {
      type: "p",
      text: "Le principe est le même qu'un laundromat à l'américaine : des machines à laver et des sèche-linge en accès libre, sans personnel, avec un paiement directement sur la machine par carte ou PIX. Des enseignes comme Laundromat ou Ambiental Wash ont essaimé dans presque tous les quartiers — Botafogo, Ipanema, Centro, Barra da Tijuca, et bien d'autres. Certaines unités, notamment à Barra da Tijuca, sont même ouvertes 24h/24, 7j/7.",
    },
    {
      type: "conseil",
      title: "Le conseil Jeitinho",
      text: "Comptez environ 18 R$ pour un cycle de lavage et 18 R$ pour le séchage, soit autour de 35-40 R$ le tout (environ 6 à 7 €) pour une machine standard. Le paiement se fait sur un terminal à côté des machines, en carte ou en PIX selon l'enseigne.",
    },
    { type: "h2", text: "La lavanderia por quilo : dépose et récupère" },
    {
      type: "p",
      text: "À côté des self-services, il existe aussi la lavanderia par quilo, plus proche de la laverie de quartier traditionnelle : vous déposez votre linge le matin, il est lavé, séché et souvent plié par le personnel, prêt en fin de journée ou le lendemain. Comptez entre 15 et 25 R$ le kilo selon le quartier — la Zona Sul touristique (Copacabana, Ipanema) est un peu plus chère que Botafogo ou Flamengo pour un service identique.",
    },
    { type: "h2", text: "Le pressing classique pour les vêtements délicats" },
    {
      type: "p",
      text: "Pour un vêtement délicat, un costume ou une robe, mieux vaut un vrai pressing (« lavanderia a seco ») qu'une lavanderia self-service ou au kilo, qui traitent tout ensemble sans distinction de tissu.",
    },
    {
      type: "bonasavoir",
      title: "Bon à savoir",
      text: "Beaucoup d'appartements loués sur des plateformes type Airbnb à Rio n'ont pas de machine à laver — mais ce n'est plus vraiment un problème vu la densité de lavanderias self-service dans la plupart des quartiers de la Zona Sul. Pour les horaires d'ouverture des lavanderias au kilo (souvent plus restreints que le self-service), voir <a href=\"/blog/horaires-a-la-carioca\">notre article sur les horaires à la carioca</a>.",
    },
    {
      type: "aeviter",
      title: "À éviter",
      text: "Ne laissez pas de linge délicat ou de valeur dans une lavanderia au kilo ou self-service sans y prêter attention — le traitement y est standardisé pour du linge du quotidien, pas pour des matières fragiles.",
    },
    {
      type: "faq",
      items: [
        {
          q: "Les laveries automatiques sont-elles vraiment courantes à Rio ?",
          a: "Oui, c'est même l'option la plus répandue aujourd'hui dans la plupart des quartiers de la Zona Sul, portée par plusieurs enseignes en franchise qui ont beaucoup ouvert ces dernières années.",
        },
        {
          q: "Peut-on payer une lavanderia self-service par carte étrangère ?",
          a: "Oui dans la grande majorité des cas, ainsi qu'en PIX pour les résidents. Gardez tout de même un peu d'espèces en petite lavanderia de quartier par précaution.",
        },
        {
          q: "Combien de temps prend un cycle en self-service ?",
          a: "Environ 30 à 40 minutes de lavage et autant pour le séchage, à faire sur place ou en revenant plus tard puisque le local est en accès libre.",
        },
      ],
    },
  ],
  relatedServices: [
    {
      label: "Conciergerie sur mesure",
      href: "https://www.jeitinho.fr/trouver-un-jeitinho",
      description: "On vous indique la lavanderia la plus proche de votre logement, self-service ou au kilo selon vos besoins.",
    },
  ],
};
