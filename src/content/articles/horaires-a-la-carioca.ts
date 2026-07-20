import type { Article } from "../types";
import hero from "@/assets/hero-blog.jpg";
// TODO: remplacer par une photo de banca ou de pharmacie de nuit illuminée

export const article: Article = {
  slug: "horaires-a-la-carioca",
  title: "Les horaires à la carioca : ce qui ferme tôt, ce qui ne ferme jamais",
  titleAccent: "horaires",
  description: "Pharmacies 24h/24, bancas ouvertes dès l'aube, feiras qui disparaissent à midi : comprendre la logique des horaires à Rio pour ne jamais tomber sur porte close.",
  category: "vie-pratique-locale",
  tags: ["quotidien", "pratique"],
  date: "2026-07-21",
  author: "equipe-jeitinho",
  hero,
  heroAlt: "Kiosque banca ouvert tôt le matin dans une rue de Rio de Janeiro",
  guide: true,
  sections: [
    {
      type: "p",
      text: "À Rio, les horaires ne suivent pas toujours la logique française. Certains commerces ne ferment littéralement jamais, d'autres n'existent que quelques heures par semaine. Voici comment s'y retrouver, article central de notre série sur le quotidien à Rio.",
    },
    { type: "h2", text: "Ce qui ne ferme jamais" },
    {
      type: "ul",
      items: [
        "Les <a href=\"/blog/pharmacies-a-rio\">pharmacies 24h/24</a> — très fréquentes en Zona Sul, reconnaissables à leur enseigne « 24 horas »",
        "Les bancas (kiosques à journaux) — ouvrent souvent avant 6h du matin, ferment tard, vendent cigarettes, briquets, boissons, snacks et recharges diverses",
        "Certains restaurants et pizzerias, notamment à Copacabana, ouverts 24h/7j",
        "Les distributeurs Banco24Horas installés dans les <a href=\"/blog/pharmacies-a-rio\">pharmacies</a> et supermarchés",
      ],
    },
    { type: "h2", text: "Ce qui ferme tôt" },
    {
      type: "p",
      text: "À l'inverse, beaucoup de petits commerces de quartier (quitandas, lavanderias au kilo avec personnel, salons de coiffure) ferment autour de 18h-19h, et plus tôt encore le samedi — à l'inverse des <a href=\"/blog/laveries-pressings-rio\">lavanderias self-service</a>, souvent ouvertes bien plus tard, parfois 24h/24. Les feiras, elles, sont encore plus éphémères : montées à l'aube, elles ont souvent disparu avant 14h le même jour — voir notre article <a href=\"/blog/courses-supermarches-a-rio\">faire ses courses à Rio</a> pour les repérer.",
    },
    {
      type: "conseil",
      title: "Le conseil Jeitinho",
      text: "Ne partez jamais du principe qu'un commerce est ouvert simplement parce qu'il l'était la veille à la même heure — les horaires affichés en ligne sont rarement fiables à 100 % à Rio. Un coup de fil ou un message WhatsApp avant de se déplacer évite bien des déceptions.",
    },
    { type: "h2", text: "Le rythme des sorties" },
    {
      type: "p",
      text: "Les bars et restaurants suivent un tempo plus tardif qu'en France : une soirée carioca commence rarement avant 21h-22h. Les supermarchés, eux, ferment généralement entre 21h et 22h en semaine, un peu plus tôt le dimanche.",
    },
    {
      type: "bonasavoir",
      title: "Bon à savoir",
      text: "Pour l'argent et les paiements, le PIX fonctionne à toute heure, contrairement aux bureaux de change qui suivent des horaires de bureau classiques — voir notre article <a href=\"/blog/retirer-argent-distributeurs-rio\">retirer de l'argent à Rio</a>.",
    },
    { type: "h2", text: "En résumé : le cluster vie pratique locale" },
    {
      type: "p",
      text: "Cet article s'inscrit dans une série pensée pour le quotidien à Rio, loin des incontournables touristiques classiques : <a href=\"/blog/pharmacies-a-rio\">les pharmacies</a>, <a href=\"/blog/courses-supermarches-a-rio\">faire ses courses</a>, <a href=\"/blog/retirer-argent-distributeurs-rio\">retirer de l'argent</a>, <a href=\"/blog/se-soigner-a-rio\">se soigner</a>, <a href=\"/blog/laveries-pressings-rio\">les laveries</a> et <a href=\"/blog/numeros-urgence-adresses-utiles-rio\">les numéros utiles</a>.",
    },
    {
      type: "aeviter",
      title: "À éviter",
      text: "Ne planifiez pas un rendez-vous important en tablant sur un horaire trouvé sur Google Maps sans vérification — les fiches d'établissements sont souvent mises à jour en retard à Rio.",
    },
    {
      type: "faq",
      items: [
        {
          q: "Pourquoi tant de commerces sont-ils ouverts 24h/24 à Rio ?",
          a: "La densité de population en Zona Sul et un rythme de vie plus tardif qu'en Europe expliquent en grande partie cette habitude, particulièrement marquée pour les pharmacies et certains restaurants.",
        },
        {
          q: "Les magasins sont-ils ouverts le dimanche à Rio ?",
          a: "Oui pour la plupart des grandes enseignes et pharmacies, avec des horaires parfois réduits. Les petits commerces de quartier sont plus susceptibles d'être fermés.",
        },
        {
          q: "Comment vérifier qu'un commerce est bien ouvert avant de se déplacer ?",
          a: "Un appel ou un message WhatsApp reste la méthode la plus fiable, les horaires en ligne n'étant pas toujours à jour.",
        },
      ],
    },
  ],
  relatedServices: [
    {
      label: "Conciergerie sur mesure",
      href: "https://www.jeitinho.fr/trouver-un-jeitinho",
      description: "Notre équipe locale connaît les vrais horaires du quartier où vous logez — un message suffit.",
    },
  ],
};
