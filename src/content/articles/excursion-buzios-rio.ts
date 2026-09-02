import type { Article } from "../types";
import hero from "@/assets/article-road-trip-nordeste.jpg";

export const article: Article = {
  slug: "excursion-buzios-rio",
  title: "Búzios : la presqu'île chic à quelques heures de Rio",
  titleAccent: "Búzios",
  description: "Plages, Rua das Pedras, meilleure saison, weekend ou excursion à la journée : notre guide complet pour organiser votre escapade à Búzios depuis Rio de Janeiro.",
  category: "excursions",
  tags: ["Búzios", "excursion", "plages", "Rio de Janeiro"],
  date: "2026-09-02",
  author: "equipe-jeitinho",
  hero,
  heroAlt: "Route côtière bordée de palmiers près de Rio de Janeiro",
  featured: false,
  guide: true,
  popular: false,
  relatedServices: [
    {
      label: "Excursions Jeitinho",
      href: "https://jeitinho.fr/trouver-un-jeitinho",
      description: "Trouvez un chauffeur ou une excursion organisée pour votre weekend à Búzios, transferts inclus.",
    },
  ],
  sections: [
    { type: "p", text: "À un peu moins de trois heures de route de Rio, Búzios est cette presqu'île où d'anciens pêcheurs sont devenus, en quelques décennies, les voisins d'une clientèle plutôt chic. Ruelles pavées, criques abritées, restaurants de fruits de mer et vie nocturne animée : c'est aujourd'hui l'une des escapades les plus prisées de l'État de Rio de Janeiro." },
    { type: "p", text: "Ce guide n'est pas une simple liste de plages. C'est ce qu'on dirait à un ami qui hésite entre une excursion à la journée et un vrai weekend sur place : comment y aller, où se baigner, où sortir le soir, et à quel moment de l'année y aller pour éviter la foule." },

    { type: "h2", text: "Comprendre Búzios" },
    { type: "p", text: "Búzios est un village de pêcheurs qui a basculé dans le tourisme international après le passage remarqué de l'actrice française Brigitte Bardot en 1964. Sa venue, largement relayée à l'époque, a fait connaître la presqu'île bien au-delà du Brésil et a lancé son essor comme destination balnéaire chic, avec une statue de l'actrice aujourd'hui installée sur le front de mer, devenue l'un des symboles de la ville." },
    { type: "bonasavoir", title: "Bon à savoir", text: "La presqu'île compte une vingtaine de plages aux ambiances très différentes selon leur exposition : les plages de la côte ouest, abritées, offrent des eaux calmes et claires, tandis que celles de la côte est, plus exposées à l'océan, attirent surfeurs et amateurs de vagues." },

    { type: "h2", text: "Comment se rendre à Búzios depuis Rio" },
    { type: "p", text: "Búzios se trouve à environ 170 km de Rio, soit un trajet d'environ 2h30 à 3h en voiture selon le trafic et le point de départ dans la ville. Des bus réguliers partent de la gare routière Novo Rio (Rodoviária Novo Rio), avec plusieurs départs quotidiens et une durée de trajet comparable à celle de la voiture." },
    { type: "conseil", title: "Le conseil Jeitinho", text: "Un chauffeur privé reste la solution la plus confortable pour ce trajet, surtout en haute saison ou le vendredi après-midi, lorsque la route qui mène à Búzios peut être particulièrement chargée à la sortie de Rio." },

    { type: "h2", text: "Les plages à ne pas manquer" },
    { type: "h3", text: "Praia da Ferradura" },
    { type: "p", text: "Une baie en forme de fer à cheval, protégée des vagues, avec une eau calme et claire. C'est l'une des plages les plus populaires de la presqu'île, appréciée pour la baignade tranquille et le snorkeling en bordure de rochers." },
    { type: "h3", text: "Praia de Geribá" },
    { type: "p", text: "La plage la plus animée de Búzios, longue étendue de sable exposée à l'océan, réputée pour ses vagues et très fréquentée par les surfeurs comme par une clientèle jeune qui aime enchaîner bain de mer et beach clubs." },
    { type: "h3", text: "Praia dos Ossos" },
    { type: "p", text: "Située tout près du centre historique et de la Rua das Pedras, cette petite plage doit son nom aux ossements de baleines qui y étaient autrefois retrouvés, vestiges de l'ancienne activité baleinière de la région. Pratique pour une baignade rapide sans quitter le village." },
    { type: "bonasavoir", title: "Bon à savoir", text: "Les plages de Búzios sont publiques et gratuites, comme partout au Brésil. Certaines, comme Geribá ou Ferradura, disposent de quiosques et de chaises longues payantes si vous souhaitez vous y installer côté confort." },

    { type: "h2", text: "La Rua das Pedras, le cœur de la vie nocturne" },
    { type: "p", text: "Rue pavée principale du centre historique, la Rua das Pedras concentre boutiques, restaurants et bars qui s'animent particulièrement après le coucher du soleil. C'est là que se joue l'ambiance festive et un peu glamour qui a fait la réputation de Búzios, entre dîners de fruits de mer en terrasse et sorties plus tardives." },
    { type: "aeviter", title: "À éviter", text: "Ne réservez pas votre hébergement à la dernière minute en haute saison : les meilleures pousadas du centre et près de la Rua das Pedras se remplissent vite, et les prix grimpent sensiblement le weekend et pendant les vacances scolaires brésiliennes." },

    { type: "h2", text: "Excursion à la journée ou weekend sur place ?" },
    { type: "p", text: "Avec près de 3 heures de route dans chaque sens, une excursion à la journée depuis Rio laisse en réalité assez peu de temps sur place, entre plages et centre-ville. Un weekend d'une à deux nuits permet de profiter d'au moins deux plages sans être pressé, de flâner dans la Rua das Pedras le soir, et d'éviter les longs trajets aller-retour dans la même journée. Cela dit, pour un séjour court à Rio ou une envie de simplement voir la presqu'île, une journée reste une option raisonnable, surtout organisée avec un chauffeur qui optimise les horaires." },

    { type: "h2", text: "Quelle est la meilleure saison pour visiter Búzios" },
    { type: "p", text: "La haute saison, de décembre à février et lors du carnaval, est aussi la plus animée : plages bondées, prix des hébergements en hausse et Rua das Pedras à son apogée. Les mois d'avril à juin ou septembre à novembre offrent un bon compromis, avec un temps généralement agréable et une fréquentation nettement plus calme, idéale pour profiter des plages sans la foule." },

    { type: "h2", text: "Prolonger la découverte" },
    { type: "p", text: "Si vous aimez l'idée d'une escapade nature au large de Rio, <a href=\"/blog/ilha-grande-excursion\">Ilha Grande</a> offre une expérience très différente, plus sauvage et sans voiture sur l'île. Et avant de partir, pensez à consulter notre guide pour <a href=\"/blog/comment-choisir-sa-plage-rio\">bien choisir votre plage à Rio</a> selon l'ambiance recherchée, en complément de vos journées à Búzios." },

    { type: "faq", items: [
      { q: "Combien de temps prend le trajet depuis Rio jusqu'à Búzios ?", a: "Comptez environ 2h30 à 3h de route pour environ 170 km, que ce soit en voiture ou en bus depuis la gare routière Novo Rio." },
      { q: "Faut-il rester plusieurs jours à Búzios ?", a: "Ce n'est pas obligatoire, mais un weekend d'une à deux nuits permet de profiter de plusieurs plages et de la vie nocturne de la Rua das Pedras sans être pressé par le trajet, plus long qu'une simple excursion de proximité." },
      { q: "Pourquoi Búzios est-elle associée à Brigitte Bardot ?", a: "L'actrice française y a séjourné en 1964, ce qui a fortement contribué à faire connaître ce village de pêcheurs jusqu'alors discret et à lancer son essor comme destination balnéaire prisée." },
      { q: "Quelle est la plage la plus calme pour se baigner à Búzios ?", a: "Praia da Ferradura, abritée dans une baie en forme de fer à cheval, offre une eau particulièrement calme, contrairement à Geribá, plus exposée et prisée des surfeurs." },
    ]},

    { type: "p", text: "Entre plages abritées, ruelles animées et un soupçon de glamour hérité des années 1960, Búzios reste une escapade à part depuis Rio. Que vous y passiez une journée ou tout un weekend, c'est un autre rythme de la côte carioca qui vous y attend." },
  ],
};
