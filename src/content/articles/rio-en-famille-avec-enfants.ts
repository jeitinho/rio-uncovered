import type { Article } from "../types";
import hero from "@/assets/hero-blog.jpg";

export const article: Article = {
  slug: "rio-en-famille-avec-enfants",
  title: "Rio avec des enfants : quartiers, plages et activités adaptées",
  titleAccent: "avec des enfants",
  description:
    "Quels quartiers privilégier, quelles plages sont adaptées aux enfants, comment s'organiser côté transport et santé : notre guide pratique pour un séjour à Rio en famille.",
  category: "securite",
  tags: ["Rio en famille", "voyager avec des enfants", "plages", "Rio de Janeiro"],
  date: "2026-09-02",
  author: "equipe-jeitinho",
  hero,
  heroAlt: "Plage animée de Rio de Janeiro au coucher du soleil avec des promeneurs",
  featured: false,
  guide: true,
  popular: false,
  relatedServices: [
    {
      label: "Assistance Jeitinho",
      href: "https://jeitinho.fr/trouver-un-jeitinho",
      description:
        "On vous aide à construire un programme adapté aux enfants et à trouver les bons contacts sur place (activités, conciergerie, recommandations de proximité).",
    },
  ],
  sections: [
    {
      type: "p",
      text: "Voyager à Rio avec des enfants soulève des questions différentes de celles d'un séjour en solo ou entre amis. Ce n'est pas tant une question de danger que d'organisation : où loger pour limiter les trajets, quelle plage choisir pour une eau calme, comment réagir si on se perd de vue quelques minutes sur le sable. Ce guide répond à ces questions concrètes, pour un séjour en famille aussi serein que possible.",
    },
    {
      type: "p",
      text: "Pour tout ce qui concerne la sécurité générale à Rio (quartiers, réflexes du quotidien, numéros d'urgence), notre guide <a href=\"/blog/securite-a-rio-ce-qu-il-faut-savoir\">sécurité à Rio : ce qu'il faut vraiment savoir</a> reste la référence. Ici, on se concentre sur ce qui change concrètement avec des enfants.",
    },

    { type: "h2", text: "Quels quartiers privilégier en famille" },
    {
      type: "p",
      text: "La Zona Sul reste, de loin, le secteur le plus adapté à un séjour en famille : plages à quelques minutes à pied, pharmacies et supermarchés à chaque coin de rue, et une vie de quartier qui permet de tout faire sans avoir besoin de longs trajets en voiture. Trois quartiers se détachent selon le profil de votre famille.",
    },
    {
      type: "ul",
      items: [
        "<a href=\"/blog/ipanema-guide-complet\">Ipanema</a> et <a href=\"/blog/leblon-guide-complet\">Leblon</a> : rues calmes, nombreux parcs de quartier, proximité immédiate de la plage et du <a href=\"/blog/jardim-botanico-guide-complet\">Jardim Botânico</a>. Un bon compromis entre animation et tranquillité résidentielle.",
        "<a href=\"/blog/botafogo-guide-complet\">Botafogo</a> et <a href=\"/blog/flamengo-guide-complet\">Flamengo</a> : plus abordables, avec de grands parcs en bord de baie (le Parque do Flamengo notamment) où les enfants peuvent courir, faire du vélo ou du roller sans se soucier de la circulation.",
        "<a href=\"/blog/barra-da-tijuca-guide-complet\">Barra da Tijuca</a> : pour les familles qui cherchent plus d'espace, des immeubles récents avec piscine et une plage immense et peu profonde par endroits, au prix de trajets plus longs vers le reste de la ville.",
      ],
    },
    {
      type: "conseil",
      title: "Le conseil Jeitinho",
      text: "Privilégiez un logement à distance de marche d'une plage et d'une pharmacie. Avec des enfants, la proximité compte plus que la vue : un aller-retour de 20 minutes en Uber pour un pansement ou une sieste ratée change vraiment la journée.",
    },

    { type: "h2", text: "Les plages les plus adaptées aux enfants" },
    {
      type: "p",
      text: "Toutes les plages de Rio ne se valent pas avec des enfants. Certaines ont une mer formée, des courants marqués ou peu de services à proximité — très bien pour les surfeurs, beaucoup moins pour une après-midi tranquille avec un enfant en bas âge. Notre guide <a href=\"/blog/comment-choisir-sa-plage-rio\">comment choisir sa plage à Rio</a> détaille l'ensemble des options ; voici celles qui conviennent le mieux en famille.",
    },
    {
      type: "ul",
      items: [
        "Copacabana et Leme : mer généralement plus calme que sur Ipanema/Leblon selon les secteurs, très nombreux kiosques, chaises et parasols à louer, présence policière renforcée. L'option la plus simple pour une première sortie en famille.",
        "Ipanema, secteurs proches du Posto 8 à Posto 10 : ambiance familiale, mer habituellement praticable, à distance de marche de nombreux restaurants pour une pause si besoin.",
        "Piratininga (Niterói) : sa petite Prainha protégée offre une eau particulièrement calme, adaptée aux plus jeunes.",
      ],
    },
    {
      type: "aeviter",
      title: "À éviter avec de jeunes enfants",
      text: "Arpoador, São Conrado (secteur de Pepino) ou Prainha, Macumba et Itacoatiara sont réputées pour leurs vagues et attirent les surfeurs : la mer peut y être formée et les courants plus marqués. Ce sont d'excellents spots, mais pas les plus adaptés pour une baignade tranquille avec de jeunes enfants.",
    },
    {
      type: "bonasavoir",
      title: "Bon à savoir",
      text: "Les drapeaux de couleur affichés par les maîtres-nageurs (postos) indiquent l'état de la mer. En cas de doute sur les conditions du jour, demandez directement au posto le plus proche : c'est le réflexe le plus fiable, plus que n'importe quel guide écrit à l'avance.",
    },

    { type: "h2", text: "Sécurité spécifique aux enfants sur la plage et en ville" },
    {
      type: "p",
      text: "Le sable, la foule et l'excitation des enfants font qu'on se perd de vue plus facilement qu'on ne le pense, en particulier sur les longues plages de la Zona Sul un week-end ensoleillé. Quelques réflexes simples limitent le stress si cela arrive.",
    },
    {
      type: "ul",
      items: [
        "Convenez d'un point de rendez-vous fixe et facilement reconnaissable en arrivant sur la plage (un numéro de posto, une barraca précise, un drapeau) avant même de poser vos affaires.",
        "Habillez les plus jeunes de couleurs vives, plus faciles à repérer dans la foule qu'un maillot de bain uni.",
        "Un bracelet ou une étiquette portant votre prénom et votre numéro de téléphone (WhatsApp de préférence) permet à un passant ou à un maître-nageur de vous recontacter directement en cas de séparation. Les bracelets d'identification pour enfants voyageurs, faciles à trouver avant le départ, sont utiles au-delà de la plage : dans le métro, au Corcovado ou sur un marché animé.",
        "Prévenez immédiatement un maître-nageur (posto) en cas de séparation : c'est le point de repère central de chaque secteur de plage, formé pour ce type de situation.",
      ],
    },

    { type: "h2", text: "Activités familiales à ne pas manquer" },
    {
      type: "p",
      text: "Rio compte plusieurs incontournables qui se prêtent particulièrement bien à une visite en famille, à condition de bien choisir ses horaires pour éviter la chaleur et l'affluence.",
    },
    {
      type: "ul",
      items: [
        "Le <a href=\"/blog/jardim-botanico-guide-complet\">Jardim Botânico</a> : de larges allées ombragées, des singes en liberté, un espace pensé pour la marche tranquille plutôt que la randonnée. Idéal en fin de matinée.",
        "Le téléphérique du Pain de Sucre (Pão de Açúcar) : deux tronçons de téléphérique jusqu'au sommet, sensation forte garantie sans effort physique. Réservez en ligne à l'avance pour éviter la file.",
        "Le Corcovado et le Cristo Redentor : en train à crémaillère ou en van officiel, une sortie facilement gérable avec des enfants, mais prévoyez d'arriver tôt pour limiter l'attente et la chaleur en haut.",
        "Le Parque do Flamengo : vélos et rollers en location, grands espaces verts en bord de mer, aire de jeux, sans la contrainte du sable.",
        "Le Parque Lage, au pied du Corcovado : jardins, petit café et souvent des ateliers gratuits, une bonne option pour une pause plus calme.",
      ],
    },
    {
      type: "conseil",
      title: "Le conseil Jeitinho",
      text: "Planifiez les activités « debout » (téléphérique, Corcovado, parcs) tôt le matin, et réservez les après-midis à la plage et à la sieste. Avec des enfants, un programme moins dense mais mieux rythmé fait toute la différence sur une semaine de séjour.",
    },

    { type: "h2", text: "Se déplacer en famille" },
    {
      type: "p",
      text: "Pour les trajets du quotidien, l'Uber reste l'option la plus simple et la plus sûre à Rio, comme le détaille notre guide <a href=\"/blog/se-deplacer-a-rio\">se déplacer à Rio</a>. Avec plusieurs enfants ou beaucoup de bagages (poussette, sac de plage, matériel), pensez à sélectionner une catégorie plus spacieuse type Uber XL au moment de la réservation plutôt qu'un véhicule standard.",
    },
    {
      type: "bonasavoir",
      title: "Bon à savoir",
      text: "Au Brésil, le siège auto pour enfant n'est pas légalement obligatoire dans les taxis et véhicules de plateforme comme Uber, contrairement aux véhicules particuliers. Certaines applications proposent une option siège auto dans certaines villes, mais sa disponibilité à Rio n'est pas garantie à tout moment : renseignez-vous directement dans l'application au moment de la réservation, et prévoyez si besoin votre propre siège compact ou rehausseur pliable en solution de secours.",
    },

    { type: "h2", text: "Santé : ce qu'il faut prévoir" },
    {
      type: "p",
      text: "La Zona Sul est très bien équipée en pharmacies, souvent ouvertes tard et parfois 24h/24 sur les grands axes de Copacabana et Ipanema — notre guide <a href=\"/blog/pharmacies-a-rio\">pharmacies à Rio</a> détaille comment s'y retrouver. Pour un besoin médical plus spécifique (pédiatre, urgence), les grands hôpitaux privés de la Zona Sul disposent généralement de services dédiés aux enfants ; demandez conseil à votre hébergement ou à votre assurance voyage dès l'arrivée, plutôt que d'attendre un besoin urgent pour chercher un contact.",
    },
    {
      type: "ul",
      items: [
        "Une trousse de base : antipyrétique et antidouleur adaptés au poids de l'enfant, solution de réhydratation orale, pansements, répulsif anti-moustiques adapté aux enfants, crème solaire indice élevé.",
        "Le carnet de vaccination et une copie de l'ordonnance des traitements en cours, utiles en cas de consultation sur place.",
        "Une assurance voyage couvrant les frais médicaux à l'étranger, à vérifier avant le départ plutôt qu'une fois sur place.",
      ],
    },
    {
      type: "aeviter",
      title: "À éviter",
      text: "N'attendez pas d'être face à un problème pour repérer la pharmacie et l'hôpital les plus proches de votre logement. Un simple repérage le premier jour, sur votre téléphone ou sur place, évite le stress si un besoin se présente en pleine nuit.",
    },

    { type: "h2", text: "Besoin d'un coup de main sur place ?" },
    {
      type: "p",
      text: "Que ce soit pour construire un programme adapté à l'âge de vos enfants, trouver de bons contacts (garde ponctuelle, activités encadrées) ou simplement avoir un interlocuteur en français en cas de question, n'hésitez pas à nous solliciter avant ou pendant votre séjour.",
    },
    {
      type: "conseil",
      title: "Le conseil Jeitinho",
      text: "Contactez-nous via notre service de conciergerie pour construire un programme familial sur mesure, avec nos recommandations d'activités adaptées et nos contacts de confiance sur place.",
    },

    {
      type: "faq",
      items: [
        {
          q: "Quel quartier choisir pour un séjour en famille à Rio ?",
          a: "Ipanema, Leblon, Botafogo et Flamengo sont les plus pratiques : proches des plages et des parcs, bien équipés en pharmacies et commerces, avec des trajets courts pour l'essentiel du programme.",
        },
        {
          q: "Quelle est la plage la plus adaptée aux jeunes enfants à Rio ?",
          a: "Copacabana, Leme et les secteurs centraux d'Ipanema offrent généralement une mer plus praticable et beaucoup de services à proximité. Évitez les spots réputés pour le surf (Arpoador, Prainha, Macumba) avec de très jeunes enfants.",
        },
        {
          q: "Que faire en cas de séparation avec son enfant sur la plage ?",
          a: "Prévenez immédiatement le posto (poste de maître-nageur) le plus proche : c'est le point de repère central de chaque secteur, formé pour ce type de situation. D'où l'intérêt de fixer un point de rendez-vous avant de s'installer.",
        },
        {
          q: "Faut-il un siège auto pour prendre un Uber avec un enfant à Rio ?",
          a: "Le siège auto n'est pas légalement obligatoire dans les taxis et véhicules de plateforme au Brésil. Certaines applications proposent une option siège auto selon les villes, mais sa disponibilité à Rio n'est pas garantie : vérifiez dans l'application au moment de la réservation.",
        },
      ],
    },

    {
      type: "p",
      text: "Avec un peu d'organisation, Rio se révèle une destination très accueillante pour les familles : plages accessibles, parcs nombreux, activités emblématiques faciles à adapter au rythme des enfants. L'essentiel tient en trois réflexes : choisir la bonne plage, fixer un point de rendez-vous, et garder une trousse de santé à portée de main.",
    },
  ],
};
