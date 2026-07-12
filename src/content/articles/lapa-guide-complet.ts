import type { Article } from "../types";
import hero from "@/assets/quartier-lapa.jpg";
import galerie1 from "@/assets/lapa-1.jpg";
import galerie2 from "@/assets/lapa-2.jpg";

export const article: Article = {
  slug: "lapa-guide-complet",
  title: "Lapa : le guide complet du quartier le plus festif de Rio",
  titleAccent: "festif",
  description: "Notre guide complet de Lapa : samba, Arcos, escadaria Selarón et vraies adresses de nuit. Écrit par des locaux, pas par Google Traduction.",
  category: "quartiers",
  tags: ["Lapa", "centre historique", "guide de quartier", "samba"],
  date: "2026-06-26",
  author: "equipe",
  hero,
  heroAlt: "Arcs de Lapa illuminés la nuit avec le tramway historique, Rio de Janeiro",
  featured: false,
  guide: true,
  popular: true,
  relatedServices: [
    {
      label: "City tour privé",
      href: "https://www.jeitinho.fr/experiences",
      description: "Lapa by night, samba et roda de choro avec un local qui connaît les bonnes adresses.",
    },
    {
      label: "Conciergerie sur mesure",
      href: "https://www.jeitinho.fr/trouver-un-jeitinho",
      description: "On vous réserve une table dans les meilleures gafieiras de Lapa, sans mauvaise surprise.",
    },
  ],
  sections: [
    { type: "p", text: "Lapa, c'est le cœur battant de la nuit carioca depuis plus d'un siècle. Sous les arches de son aqueduc colonial, entre les pavés de l'escadaria Selarón et les gafieiras où l'on danse la samba de pé jusqu'à l'aube, ce quartier du centre historique concentre à lui seul une bonne partie de l'âme populaire de Rio." },
    { type: "p", text: "Ce guide n'est pas une liste de bars à la mode. C'est ce qu'on dirait à un ami qui débarque : où marcher, où s'asseoir, où éviter, et à quelle heure faire quoi." },

    { type: "h2", text: "Comprendre Lapa en cinq minutes" },
    { type: "p", text: "Lapa se situe au pied de <a href=\"/blog/santa-teresa-guide-complet\">Santa Teresa</a>, dans le prolongement du centre historique de Rio. Le quartier est dominé par les Arcos da Lapa, un aqueduc du XVIIIe siècle qui achemine aujourd'hui le tramway historique menant à Santa Teresa au lieu de son eau d'origine." },
    { type: "p", text: "L'ambiance change radicalement entre le jour et la nuit : de jour, Lapa est un quartier commerçant modeste, un peu défraîchi, avec ses magasins d'instruments de musique et ses vieux immeubles décrépits. À la nuit tombée, particulièrement du jeudi au samedi, les rues se transforment en un immense dancefloor à ciel ouvert." },
    { type: "conseil", title: "Le conseil Jeitinho", text: "Ne venez pas à Lapa un lundi ou un mardi soir en espérant l'ambiance des cartes postales : le quartier vit vraiment du jeudi au samedi. En semaine, préférez une visite de jour pour l'escadaria et l'architecture." },

    { type: "h2", text: "Un peu d'histoire : de quartier aristocratique à capitale de la samba" },
    { type: "p", text: "Au XIXe siècle, Lapa était un quartier résidentiel huppé, bordé de belles demeures. Sa décadence progressive au XXe siècle, accélérée par le déplacement du centre des affaires vers d'autres zones, en a fait un territoire plus populaire, investi par les musiciens et les artistes de rue." },
    { type: "p", text: "C'est dans ce contexte que Lapa devient, à partir des années 1930 puis surtout à partir des années 1990-2000, le symbole du renouveau de la samba et du choro à Rio, avec l'ouverture de nombreuses gafieiras (salles de bal populaires) qui perdurent aujourd'hui." },

    { type: "h2", text: "Que voir de jour" },
    { type: "h3", text: "Les Arcos da Lapa" },
    { type: "p", text: "L'aqueduc colonial, achevé en 1750, reste le symbole visuel du quartier. Le tramway jaune (bondinho) qui le traverse pour rejoindre Santa Teresa en fait l'une des scènes les plus photographiées de Rio." },
    { type: "h3", text: "L'Escadaria Selarón" },
    { type: "p", text: "Ce célèbre escalier, recouvert de mosaïques colorées par l'artiste chilien Jorge Selarón pendant plus de vingt ans jusqu'à sa mort en 2013, relie Lapa à Santa Teresa. Chaque marche raconte une histoire, avec des carreaux venus du monde entier." },
    { type: "h3", text: "Les places historiques" },
    { type: "p", text: "La Praça Tiradentes et ses théâtres, ou encore le Circo Voador, salle de concert emblématique installée sous les arches, complètent la visite diurne du quartier." },
    { type: "aeviter", title: "À éviter", text: "De nuit, restez sur les rues principales et fréquentées, évitez les ruelles adjacentes isolées, et ne sortez pas d'objets de valeur inutilement. Lapa reste un quartier populaire du centre, très animé mais où la vigilance de base s'impose davantage que dans la Zona Sul." },

    { type: "h2", text: "La nuit à Lapa : samba, choro et gafieiras" },
    { type: "ul", items: [
      "Rio Scenarium — la plus célèbre gafieira du quartier, décor baroque sur trois étages, incontournable malgré son côté touristique assumé.",
      "Carioca da Gema — plus intime, réputée pour la qualité de ses musiciens de samba et choro.",
      "Circo Voador — grande salle de concert sous les arches, programmation variée allant du forró à des artistes internationaux.",
      "Fundição Progresso — ancienne fonderie reconvertie en espace culturel et salle de spectacle, souvent associée aux soirées les plus alternatives du quartier.",
    ]},
    { type: "bonasavoir", title: "Bon à savoir", text: "Beaucoup de gafieiras demandent un couvert artistique (droit d'entrée) qui inclut souvent une consommation. Arrivez avant 22h pour profiter des meilleures places avant que les salles ne se remplissent." },

    { type: "h2", text: "Où manger avant de sortir" },
    { type: "ul", items: [
      "Nova Capela — institution portugaise-brésilienne ouverte tard, cabrito assado réputé.",
      "Adega Portugália — pour des petiscos et une bière avant de rejoindre les gafieiras.",
      "Bar do Mineiro (proche, côté Santa Teresa) — pour une cuisine du Minas Gerais généreuse avant la montée vers les arches.",
    ]},

    { type: "h2", text: "Une soirée parfaite à Lapa" },
    { type: "ol", items: [
      "18h — Balade de jour à l'escadaria Selarón avant la foule du soir.",
      "19h30 — Dîner chez Nova Capela ou Adega Portugália.",
      "21h30 — Premier verre en terrasse près des Arcos da Lapa.",
      "22h30 — Entrée dans une gafieira, Rio Scenarium ou Carioca da Gema selon l'ambiance recherchée.",
      "00h30 — Poursuite de la soirée au Circo Voador ou dans la rue, au rythme des groupes de samba improvisés.",
    ]},

    { type: "faq", items: [
      { q: "Quel est le meilleur soir pour sortir à Lapa ?", a: "Le vendredi et le samedi soir concentrent l'essentiel de l'animation, avec musique live dans la plupart des établissements et une foule dense dans les rues." },
      { q: "Lapa est-il sûr le soir ?", a: "Le quartier est très fréquenté et globalement sûr sur les axes principaux et animés, mais demande davantage de vigilance que la Zona Sul, notamment dans les rues moins éclairées. Privilégiez les groupes et évitez de vous isoler." },
      { q: "Faut-il réserver dans les gafieiras ?", a: "Ce n'est généralement pas nécessaire en semaine, mais recommandé le week-end pour les tables assises dans les établissements les plus prisés comme Rio Scenarium." },
      { q: "Comment rentrer en sécurité après une soirée à Lapa ?", a: "Privilégiez les applications de VTC plutôt que de héler un taxi dans la rue, et évitez de marcher seul sur de longues distances après minuit." },
    ]},

    { type: "p", text: "Lapa ne se visite pas, elle se vit, de préférence un verre à la main, sous les arches, au son d'un cavaquinho improvisé. C'est le Rio populaire, bruyant et généreux, dans ce qu'il a de plus vrai." },
  ],
};
