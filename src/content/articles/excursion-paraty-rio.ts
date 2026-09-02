import type { Article } from "../types";
import hero from "@/assets/article-ilha-grande.jpg";

export const article: Article = {
  slug: "excursion-paraty-rio",
  title: "Paraty : entre forêt tropicale et centre colonial",
  titleAccent: "Paraty",
  description: "Centre historique classé à l'UNESCO, cascades, forêt atlantique et excursions en bateau : notre guide complet pour organiser votre séjour à Paraty depuis Rio de Janeiro.",
  category: "excursions",
  tags: ["Paraty", "excursion", "patrimoine", "Rio de Janeiro"],
  date: "2026-09-02",
  author: "equipe-jeitinho",
  hero,
  heroAlt: "Baie et végétation tropicale sur la côte verte entre Rio de Janeiro et São Paulo",
  featured: false,
  guide: true,
  popular: false,
  relatedServices: [
    {
      label: "Trouver un jeitinho",
      href: "https://jeitinho.fr/trouver-un-jeitinho",
      description: "Faites-vous aider pour organiser votre excursion ou votre séjour à Paraty : transferts, hébergement et bons plans sur place.",
    },
  ],
  sections: [
    { type: "p", text: "À environ 250 km de Rio, Paraty est souvent présentée comme une simple excursion d'une journée. C'est possible, mais c'est aussi la meilleure façon de ne rien voir : son centre historique classé au patrimoine mondial de l'UNESCO, ses cascades cachées dans la forêt atlantique et ses îles mériteraient à eux seuls plusieurs jours sur place." },
    { type: "p", text: "Ce guide n'est pas une simple fiche touristique. C'est ce qu'on dirait à un ami qui hésite entre un aller-retour dans la journée et un vrai séjour : comment s'organiser, quoi ne pas manquer, et à quoi s'attendre une fois sur place." },

    { type: "h2", text: "Comprendre Paraty" },
    { type: "p", text: "Fondée au XVIIe siècle, Paraty a longtemps été un port stratégique par lequel transitait l'or extrait dans les montagnes du Minas Gerais avant son embarquement pour le Portugal, via le fameux « Caminho do Ouro » (chemin de l'or). Ce passé colonial a laissé un centre historique remarquablement préservé, resté à l'écart du développement industriel qui a transformé la plupart des autres villes portuaires brésiliennes." },
    { type: "p", text: "En 2019, l'UNESCO a inscrit la région « Paraty et Ilha Grande – Culture et Biodiversité » sur la Liste du patrimoine mondial, au titre d'un site mixte reconnaissant à la fois la valeur culturelle du centre colonial et la richesse écologique exceptionnelle de la forêt atlantique et de la baie qui l'entourent. C'est cette double casquette, patrimoine bâti et nature préservée, qui fait tout l'intérêt d'un séjour à Paraty." },
    { type: "conseil", title: "Le conseil Jeitinho", text: "Si votre emploi du temps le permet, combinez Paraty avec Ilha Grande : les deux font partie du même site classé par l'UNESCO, et de nombreux départs en bateau relient les deux destinations. Voir notre guide sur <a href=\"/blog/ilha-grande-excursion\">Ilha Grande</a>." },

    { type: "h2", text: "Comment se rendre à Paraty depuis Rio" },
    { type: "p", text: "Le trajet se fait par la Rodovia Rio-Santos (BR-101), une route côtière qui longe la Costa Verde entre montagne et océan. Comptez environ 250 km et, selon le trafic, entre 3h30 et 4h30 de route en voiture ou avec un chauffeur privé — un transfert organisé reste la solution la plus confortable pour profiter du paysage sans se soucier de la conduite sur une route parfois sinueuse." },
    { type: "p", text: "En bus, la compagnie Costa Verde assure plusieurs liaisons quotidiennes depuis la gare routière Novo Rio, avec un trajet généralement plus long, entre 4h30 et 6h selon les arrêts et les conditions de circulation." },
    { type: "bonasavoir", title: "Bon à savoir", text: "Le centre historique de Paraty est entièrement piéton : la circulation automobile y est interdite. Si vous venez en voiture, vous devrez vous garer en périphérie du centre et terminer à pied." },

    { type: "h2", text: "Le centre historique" },
    { type: "p", text: "Les rues pavées du centre colonial, bordées de maisons blanches aux encadrements colorés, se visitent avant tout à pied et sans itinéraire précis. L'architecture portugaise du XVIIIe siècle est particulièrement bien conservée autour des trois églises historiques du centre, chacune associée à l'époque à une catégorie sociale différente de la population." },
    { type: "h3", text: "Un pavage conçu pour être inondé" },
    { type: "p", text: "Particularité unique du centre de Paraty : les rues ont été tracées au XVIIIe siècle par des ingénieurs militaires portugais selon un plan orthogonal, perpendiculaire au littoral, de façon à ce que la marée haute les inonde et les nettoie naturellement. Ce système d'assainissement fonctionne toujours aujourd'hui : lors des marées de forte amplitude, l'eau de mer remonte par les canalisations historiques et envahit certaines rues, rendant l'accès à quelques maisons impossible pendant plusieurs heures." },
    { type: "aeviter", title: "À éviter", text: "Ne portez pas vos meilleures chaussures pour explorer le centre historique : entre pavés irréguliers et rues parfois inondées à marée haute, mieux vaut des chaussures fermées et confortables, voire des sandales imperméables selon le coefficient de marée du jour." },

    { type: "h2", text: "Cascades et forêt atlantique autour de Paraty" },
    { type: "p", text: "Paraty est encerclée par la Mata Atlântica, l'une des forêts tropicales les plus riches en biodiversité au monde, et par le Parque Nacional da Serra da Bocaina, qui s'étend jusqu'aux montagnes environnantes. De nombreuses cachoeiras (cascades) sont accessibles en une demi-journée d'excursion depuis le centre-ville, certaines avec des piscines naturelles où l'on peut se baigner." },
    { type: "p", text: "Le village de Trindade, à environ une heure de route, combine plages sauvages, sentiers en forêt et piscines naturelles entre les rochers, et constitue une excursion à part entière pour qui dispose d'une journée supplémentaire." },

    { type: "h2", text: "Excursions en bateau dans la baie de Paraty" },
    { type: "p", text: "La baie de Paraty compte de nombreuses îles et criques accessibles en bateau, souvent à bord des saveiros, ces voiliers traditionnels en bois typiques de la région. Les sorties en bateau à la journée permettent de faire escale sur plusieurs plages et de nager en mer calme, loin de l'agitation du centre-ville. Les tarifs varient selon la durée et le nombre d'escales : renseignez-vous directement sur place ou auprès d'un chauffeur local pour comparer les formules du jour." },

    { type: "h2", text: "Que faire à Paraty" },
    { type: "ul", items: [
      "Flâner sans itinéraire dans les rues pavées du centre historique et son architecture coloniale.",
      "Faire une sortie en saveiro dans la baie pour découvrir plusieurs îles et plages.",
      "Randonner jusqu'à une cachoeira dans la forêt atlantique environnante.",
      "Passer une journée à Trindade, entre plages sauvages et piscines naturelles.",
      "Dîner dans l'un des restaurants du centre historique, réputé pour sa cuisine de fruits de mer.",
    ]},
    { type: "bonasavoir", title: "Bon à savoir", text: "Prévoyez de l'argent liquide pour les petits commerces et certains bateliers du centre historique, tous n'acceptant pas systématiquement la carte bancaire." },

    { type: "h2", text: "Excursion à la journée ou séjour de plusieurs jours ?" },
    { type: "p", text: "Avec 3h30 à 4h30 de route dans chaque sens, un aller-retour dans la journée laisse en réalité très peu de temps sur place, surtout si l'on souhaite dépasser le seul centre historique. Un séjour de deux à trois nuits permet de visiter la ville à un rythme tranquille, de consacrer une journée aux cascades ou à Trindade, et une autre à une sortie en bateau dans la baie — sans passer plus de temps sur la route que sur place." },

    { type: "faq", items: [
      { q: "Combien de temps prend le trajet depuis Rio jusqu'à Paraty ?", a: "Comptez environ 250 km et entre 3h30 et 4h30 de route en voiture selon le trafic sur la Rodovia Rio-Santos. En bus depuis la gare routière Novo Rio, le trajet dure généralement entre 4h30 et 6h." },
      { q: "Paraty est-elle classée au patrimoine mondial de l'UNESCO ?", a: "Oui : depuis 2019, la région « Paraty et Ilha Grande – Culture et Biodiversité » est inscrite au patrimoine mondial de l'UNESCO en tant que site mixte, reconnaissant à la fois le centre colonial et la richesse naturelle environnante." },
      { q: "Pourquoi les rues du centre historique sont-elles parfois inondées ?", a: "Le plan des rues, tracé au XVIIIe siècle, a été conçu pour que la marée haute les inonde et les nettoie naturellement. Lors des marées de forte amplitude, l'eau de mer remonte encore aujourd'hui dans certaines rues du centre." },
      { q: "Vaut-il mieux visiter Paraty à la journée ou en séjour ?", a: "Vu la distance depuis Rio, un séjour de deux à trois nuits est largement préférable à une excursion à la journée, qui laisse peu de temps réel sur place une fois la route déduite." },
    ]},

    { type: "p", text: "Entre pavés coloniaux, cascades cachées et sorties en bateau dans une baie encore préservée, Paraty offre un contraste total avec Rio, à seulement quelques heures de route. De quoi transformer une simple excursion en véritable parenthèse hors du temps." },
  ],
};
