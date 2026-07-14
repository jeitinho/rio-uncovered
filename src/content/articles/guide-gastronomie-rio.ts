import type { Article } from "../types";
import hero from "@/assets/article-guide-gastronomie-rio.jpg";

export const article: Article = {
  slug: "guide-gastronomie-rio",
  title: "Le guide complet de la gastronomie à Rio de Janeiro",
  titleAccent: "gastronomie",
  description: "Feijoada, rodízio, açaí, fruits de mer : notre guide complet pour comprendre et bien manger à Rio, du petit budget à la table gastronomique.",
  category: "gastronomie",
  tags: ["gastronomie", "cuisine brésilienne", "Rio de Janeiro"],
  date: "2026-07-14",
  author: "equipe-jeitinho",
  hero,
  heroAlt: "Table dressée avec plats typiques brésiliens, feijoada, riz et fruits de mer, à Rio de Janeiro",
  featured: false,
  guide: true,
  popular: true,
  relatedServices: [
    {
      label: "Conciergerie sur mesure",
      href: "https://www.jeitinho.fr/trouver-un-jeitinho",
      description: "On vous réserve les meilleures tables selon vos goûts et votre budget.",
    },
  ],
  sections: [
    { type: "p", text: "La gastronomie de Rio est bien plus riche que ce que les guides internationaux laissent entendre. Entre héritage portugais, influences africaines, produits amazoniens et créativité contemporaine, la cuisine carioca mérite qu'on prenne le temps de la comprendre avant de choisir où manger." },
    { type: "p", text: "Ce guide n'est pas une simple liste de restaurants. C'est ce qu'on dirait à un ami qui débarque : ce qu'il faut absolument goûter, comment manger selon son budget, et où creuser chaque sujet plus en détail." },

    { type: "h2", text: "Les plats qu'il faut absolument goûter" },
    { type: "ul", items: [
      "Feijoada — le plat national brésilien, ragoût de haricots noirs et de viandes, traditionnellement servi le samedi.",
      "Moqueca — ragoût de poisson au lait de coco et à l'huile de dendê, hérité de la cuisine bahianaise.",
      "Picanha — la coupe de bœuf reine des rodízios, tendre et savoureuse.",
      "Pão de queijo — petit pain au fromage moelleux, indispensable au petit-déjeuner.",
      "Açaí na tigela — bowl d'açaí, énergisant et rafraîchissant, une institution de plage.",
      "Coxinha — chausson frit fourré au poulet, snack incontournable des bars et boulangeries.",
    ]},
    { type: "conseil", title: "Le conseil Jeitinho", text: "Goûtez un café de spécialité brésilien dès votre arrivée : la différence avec ce qu'on trouve habituellement en Europe est immédiatement perceptible, et le Brésil reste l'un des plus grands producteurs de café au monde." },

    { type: "h2", text: "Bien manger selon son budget" },
    { type: "p", text: "Le prato feito (plat du jour), servi le midi en semaine dans les casas de comida, reste le meilleur rapport qualité-prix de la ville : riz, haricots, viande et salade pour une trentaine de reais. Pour un repas plus soigné, comptez environ 70 R$ dans un restaurant classique, et à partir de 120 R$ par personne dans une table gastronomique." },
    { type: "p", text: "Retrouvez notre sélection complète d'adresses <a href=\"/blog/petit-budget-manger-rio\">petit budget</a> testées et approuvées, ainsi que notre guide dédié au <a href=\"/blog/budget-voyage-rio\">budget global d'un séjour à Rio</a>." },
    { type: "bonasavoir", title: "Bon à savoir", text: "Beaucoup de restaurants ajoutent 10% de service (taxa de serviço) à l'addition. Ce n'est pas obligatoire : si le service a été décevant, vous pouvez demander à le retirer." },

    { type: "h2", text: "Les grandes expériences culinaires de Rio" },
    { type: "h3", text: "Le rodízio, une institution" },
    { type: "p", text: "Buffet de viandes à volonté, servies directement à la broche. Une expérience à vivre au moins une fois, idéalement en arrivant avant 20h pour profiter de toutes les pièces proposées. Notre sélection complète des <a href=\"/blog/rodizios-fruits-de-mer-rio\">meilleurs rodízios et adresses de fruits de mer</a> vous guide dans le choix des meilleures tables." },
    { type: "h3", text: "Le brunch carioca" },
    { type: "p", text: "Entre cafés de spécialité, açaí bowls et pães de queijo, le brunch fait désormais partie intégrante du quotidien carioca, surtout le week-end. Retrouvez nos <a href=\"/blog/petits-dejeuners-brunchs-rio\">meilleures adresses de petits-déjeuners et brunchs</a>." },
    { type: "h3", text: "Les fruits de mer" },
    { type: "p", text: "Rio, ville côtière, regorge d'adresses spécialisées en fruits de mer, entre héritage portugais et produits locaux ultra frais. Le déjeuner reste le meilleur moment pour en profiter, les produits y étant généralement plus frais." },
    { type: "h3", text: "Les rooftops et bars gastronomiques" },
    { type: "p", text: "Boire un verre à Rio, c'est souvent autant une question de vue que de carte des cocktails. Découvrez notre sélection des <a href=\"/blog/rooftops-bars-vue-rio\">meilleurs rooftops et bars avec vue</a>." },
    { type: "h3", text: "Les dîners romantiques" },
    { type: "p", text: "Pour une occasion spéciale, certains restaurants de Rio offrent un cadre et une cuisine à la hauteur de l'événement. Notre sélection des <a href=\"/blog/restaurants-romantiques-rio\">restaurants les plus romantiques de la ville</a> vous aide à faire le bon choix." },

    { type: "h2", text: "Options spécifiques et régimes alimentaires" },
    { type: "p", text: "Rio propose également une offre croissante de restaurants végétariens, végans, sans gluten, halal et casher, en particulier dans les quartiers d'Ipanema, Botafogo et Leblon. La plupart des établissements sont habitués aux demandes spécifiques et sauront vous conseiller sans difficulté." },
    { type: "aeviter", title: "À éviter", text: "Ne mangez pas systématiquement dans les restaurants situés à moins de deux rues de la plage dans les zones les plus touristiques : les prix y sont généralement gonflés pour une qualité équivalente à ce que vous trouverez un peu plus loin, dans les rues commerçantes des quartiers." },

    { type: "h2", text: "Le mot du jour : rodízio" },
    { type: "p", text: "Vous entendrez souvent « Vamos fazer um rodízio ? » (on fait un rodízio ?). Le principe est simple : un buffet à volonté où les serveurs circulent entre les tables avec différentes coupes de viande grillée, servies directement à la broche jusqu'à ce que vous décidiez d'arrêter." },

    { type: "faq", items: [
      { q: "Quel est le plat le plus emblématique de Rio ?", a: "La feijoada reste le plat national par excellence, traditionnellement servi le samedi dans de nombreux établissements populaires et gastronomiques." },
      { q: "Quel est le budget moyen pour bien manger à Rio ?", a: "Comptez environ 30 R$ pour un plat du jour local, 70 R$ pour un restaurant classique, et à partir de 120 R$ par personne pour une table gastronomique." },
      { q: "Le service est-il obligatoire dans les restaurants brésiliens ?", a: "Non, la taxa de serviço de 10% ajoutée à l'addition n'est pas obligatoire : vous pouvez demander à la retirer en cas de service décevant." },
      { q: "Où trouver des options végétariennes ou sans gluten à Rio ?", a: "Ipanema, Botafogo et Leblon concentrent la plus grande offre de restaurants adaptés à ces régimes, la plupart des établissements étant habitués à ce type de demandes." },
    ]},

    { type: "p", text: "La gastronomie carioca se découvre par étapes : un plat du jour local, un rodízio mémorable, un brunch en terrasse, et un dîner d'exception pour une occasion spéciale. Prenez le temps d'explorer chaque facette de cette cuisine généreuse et vivante." },
  ],
};
