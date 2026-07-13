import type { Article } from "../types";
import hero from "@/assets/article-budget-rio.jpg";

export const article: Article = {
  slug: "budget-voyage-rio",
  title: "Quel budget prévoir pour un voyage à Rio de Janeiro ?",
  titleAccent: "budget",
  description: "Hébergement, restaurants, activités : notre guide complet pour bâtir un budget réaliste à Rio, du voyage économique au séjour premium.",
  category: "budget",
  tags: ["budget", "argent", "préparer son voyage", "Rio de Janeiro"],
  date: "2026-07-11",
  author: "equipe-jeitinho",
  hero,
  heroAlt: "Vue panoramique de Rio de Janeiro au coucher du soleil depuis le Corcovado",
  featured: false,
  guide: true,
  popular: true,
  relatedServices: [
    {
      label: "Conciergerie sur mesure",
      href: "https://www.jeitinho.fr/trouver-un-jeitinho",
      description: "On vous aide gratuitement à choisir un hébergement adapté à votre budget.",
    },
    {
      label: "Expériences Jeitinho",
      href: "https://www.jeitinho.fr/experiences",
      description: "Des expériences pour tous les budgets, du bon plan local au premium.",
    },
  ],
  sections: [
    { type: "p", text: "Un séjour à Rio peut coûter très peu... comme très cher. Tout dépend de votre façon de voyager. En privilégiant les transports en commun, la cuisine locale et les activités gratuites, il est tout à fait possible de profiter pleinement de la ville avec un budget raisonnable. À l'inverse, un voyage rythmé par des restaurants gastronomiques, des rooftops, des excursions privées ou des activités comme l'hélicoptère ou le jet-ski demandera un budget nettement plus élevé." },
    { type: "p", text: "Ce guide n'est pas une grille tarifaire abstraite. C'est ce qu'on dirait à un ami qui prépare son voyage : combien prévoir, où économiser, et où ça vaut le coup de dépenser un peu plus." },

    { type: "h2", text: "L'hébergement, votre plus grosse dépense" },
    { type: "p", text: "L'hébergement représente généralement le premier poste de dépense d'un séjour à Rio. Les tarifs varient surtout selon la période de l'année, le quartier et le type d'hébergement choisi." },
    { type: "h3", text: "Basse saison (avril à novembre, hors vacances scolaires)" },
    { type: "ul", items: [
      "Entrée / standard : 250 à 450 R$ la nuit en Airbnb, 350 à 600 R$ en hôtel 3 étoiles.",
      "Confort / supérieur : 450 à 800 R$ en Airbnb, 600 à 900 R$ en hôtel 3 étoiles.",
      "Premium / luxe : à partir de 800 R$ en Airbnb, à partir de 900 R$ en hôtel.",
    ]},
    { type: "h3", text: "Haute saison (décembre à mars, Réveillon et Carnaval)" },
    { type: "ul", items: [
      "Entrée / standard : 600 à 1 500 R$ en Airbnb, 700 à 1 200 R$ en hôtel 3 étoiles.",
      "Confort / supérieur : 1 500 à 3 000 R$ en Airbnb, 1 200 à 2 000 R$ en hôtel 3 étoiles.",
      "Premium / luxe : à partir de 3 000 R$ en Airbnb, à partir de 2 000 R$ en hôtel.",
    ]},
    { type: "conseil", title: "Le conseil Jeitinho", text: "Pour le Réveillon et le Carnaval, réservez idéalement entre 6 et 9 mois à l'avance pour bénéficier du meilleur choix et des meilleurs prix. Passé ce délai, les tarifs grimpent vite et les meilleures adresses partent en premier." },

    { type: "h2", text: "Restaurants : votre style de voyage change tout" },
    { type: "p", text: "Le budget repas dépend entièrement du type d'établissement choisi. Un restaurant local (prato feito, buffet au kilo) coûte en moyenne 30 R$, un restaurant classique ou une chaîne autour de 70 R$, et un restaurant gastronomique à partir de 120 R$ par personne." },
    { type: "bonasavoir", title: "Bon à savoir", text: "Beaucoup de restaurants ajoutent 10% de service (taxa de serviço) à l'addition. Ce n'est pas obligatoire : si le service a été décevant, vous pouvez demander à le retirer." },

    { type: "h2", text: "Combien prévoir au total pour une semaine ?" },
    { type: "p", text: "Pour une semaine à Rio, hors billets d'avion, comptez en moyenne : entre 1 500 et 2 500 € pour un voyage économique, entre 2 500 et 3 500 € pour un voyage confortable, et entre 3 500 et 5 000 € et plus pour un voyage premium incluant expériences privées, hébergements haut de gamme, hélicoptère ou jet-ski." },
    { type: "aeviter", title: "À éviter", text: "Ne changez pas de grosses sommes d'argent au bureau de change de l'aéroport : les taux y sont systématiquement moins avantageux qu'en ville. Mieux vaut changer une petite somme à l'arrivée et privilégier ensuite le PIX pour vos paiements quotidiens." },

    { type: "h2", text: "Où économiser sans sacrifier l'expérience" },
    { type: "ul", items: [
      "Privilégiez les transports en commun (métro) plutôt que les taxis pour les trajets longs dans la Zona Sul.",
      "Mangez dans les casas de comida au kilo à l'heure du déjeuner plutôt que dans les restaurants touristiques.",
      "Profitez des activités gratuites : plage, randonnée, Feira Hippie le dimanche, Aterro do Flamengo.",
      "Réservez votre hébergement plusieurs mois à l'avance en haute saison pour éviter les prix gonflés de dernière minute.",
    ]},

    { type: "h2", text: "Bien choisir son quartier pour maîtriser son budget" },
    { type: "p", text: "Le choix du quartier a un impact direct sur votre budget global. <a href=\"/blog/copacabana-guide-complet\">Copacabana</a> offre un excellent rapport qualité-prix, tandis qu'<a href=\"/blog/ipanema-guide-complet\">Ipanema</a> et surtout <a href=\"/blog/leblon-guide-complet\">Leblon</a> sont plus onéreux. <a href=\"/blog/botafogo-guide-complet\">Botafogo</a> reste une valeur sûre pour un séjour économique sans sacrifier la qualité de vie." },

    { type: "faq", items: [
      { q: "Quel est le budget minimum pour une semaine à Rio ?", a: "Comptez au minimum 1 500 € hors vol pour une semaine en voyageant de façon économique : hébergement simple, restaurants locaux et transports en commun." },
      { q: "Le Réveillon et le Carnaval coûtent-ils plus cher ?", a: "Oui, nettement : les prix de l'hébergement peuvent tripler par rapport à la basse saison. Réservez au minimum 6 mois à l'avance pour ces périodes." },
      { q: "Vaut-il mieux changer de l'argent avant de partir ?", a: "Il est recommandé de changer une petite somme (200 à 500 €) à l'arrivée et d'utiliser le PIX pour l'essentiel de vos paiements quotidiens, plus avantageux et plus sûr." },
      { q: "Quelle est la plus grosse dépense d'un voyage à Rio ?", a: "L'hébergement, suivi par les restaurants si vous privilégiez les tables gastronomiques ou les rooftops plutôt que les adresses locales." },
    ]},

    { type: "p", text: "Un budget bien préparé, c'est un voyage plus serein. Prenez le temps de définir votre style de voyage avant de partir, et Rio s'adaptera à votre rythme, quel que soit votre budget." },
  ],
};
