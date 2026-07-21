import type { Article } from "../types";

// Importation directe des photos depuis @/assets avec leurs noms exacts
import heroImg from "@/assets/IMG_4013.jpeg";
import bahiaImg from "@/assets/IMG_4007.jpeg";
import carnavallImg from "@/assets/IMG_4009.jpeg";
import pagodeImg from "@/assets/IMG_4012.jpeg";
import quiosqueMusiqueImg from "@/assets/IMG_4014.jpeg";
import quiosquePlageImg from "@/assets/IMG_4015.jpeg";

export const article: Article = {
  slug: "samba-rio-de-janeiro",
  title:
    "La samba : de Bahia aux collines de Rio, l'âme du Brésil en musique",
  titleAccent: "La samba",
  description:
    "De la Samba de Roda de Bahia aux rodas de samba et pagodes de Rio, découvrez l'histoire, la culture et les endroits phares pour vivre la samba avec la team Jeitinho.",
  category: "culture-et-traditions",
  tags: [
    "Rio de Janeiro",
    "Samba",
    "Culture carioca",
    "Pedra do Sal",
    "Pagode",
    "Roda de Samba",
    "Bahia",
    "Carnaval",
    "Musique brésilienne",
  ],
  date: "2026-07-23",
  author: "lili",
  hero: heroImg,
  heroAlt:
    "Foule réunie à Pedra do Sal dans le centre historique de Rio de Janeiro pour une roda de samba sous les palmiers",
  featured: true,
  relatedServices: [
    {
      label: "Vivre une vraie Roda de Samba avec Jeitinho",
      href: "https://www.jeitinho.fr/calendrier",
      description:
        "Rejoignez-nous pour une soirée authentique au cœur des meilleures rodas et pagodes de Rio, loin des pièges à touristes.",
    },
    {
      label: "Découvrir la vraie culture carioca",
      href: "https://www.jeitinho.fr",
      description:
        "Plages, quartiers historiques, musique et rencontres : nos expériences sur mesure pour vivre Rio comme un vrai habitant.",
    },
  ],
  sections: [
    {
      type: "p",
      text: "Les premières notes résonnent.\n\nÀ peine quelques secondes plus tard, un couple se lève, puis un deuxième. Un homme danse seul en chantant, une femme ferme les yeux et suit le rythme, un enfant essaie déjà d'imiter les grands.\n\nJe regarde autour de moi et je me fais toujours la même réflexion : ici, on a vraiment l'impression que tout le monde est né en sachant danser la samba.\n\nCe qui est fascinant, c'est que personne ne danse exactement de la même manière. Chacun apporte sa personnalité, son énergie, son histoire. Ici, on ne danse pas pour impressionner. On danse parce que la musique fait partie intégrante de la vie.\n\nC'est seulement après avoir vécu ces moments que j'ai compris que la samba était bien plus qu'une simple danse.",
    },

    { type: "h2", text: "« On a l'impression qu'ils sont nés en sachant danser »" },
    {
      type: "p",
      text: "Avant de venir au Brésil, comme beaucoup de monde, j'associais la samba au Carnaval de Rio. Les immenses costumes, les plumes, les chars majestueux, les écoles de samba… Je pensais sincèrement que tout se résumait à ça.\n\nPuis je suis arrivée ici.\n\nEt j'ai compris que la samba n'était pas seulement une danse de scène : c'est une véritable façon de vivre.\n\nElle rythme les journées, les soirées, les fêtes de famille et les plus grands événements du pays. Au Brésil, on n'écoute pas seulement la samba : on vit avec elle au quotidien.",
    },
    {
      type: "p",
      text: "Au Brésil, la samba est partout. Elle résonne dans les rues de Salvador de Bahia, accompagne les rodas de samba de Rio, anime les pagodes, les bars de quartier, les fêtes de famille, les écoles de samba et même les rassemblements improvisés sur une place ou au coin d'une rue.\n\nTrès vite, une chose m'a frappée : petits et grands, hommes et femmes, tout le monde entre dans la danse avec un naturel déconcertant.\n\nMoi qui viens d'une culture caribéenne où la danse fait aussi partie du quotidien, je pensais partir avec un petit avantage.\n\nFinalement… la samba m'a vite rappelé qu'elle avait ses propres codes !\n\nDe loin, on se dit : « Ça n'a pas l'air si compliqué. »\n\nPuis on essaie. Et on découvre que ce fameux jeu de jambes est bien plus technique et exigeant qu'il n'y paraît.\n\nJ'apprends encore aujourd'hui, et je suis bien loin d'avoir la fluidité et l'aisance des Cariocas !",
    },

    { type: "h2", text: "Une histoire qui commence à Bahia" },
    {
      type: "p",
      text: "Même si la samba est aujourd'hui indissociable de Rio de Janeiro, son histoire commence bien plus au nord, dans l'État de Bahia.\n\nÀ l'époque de l'esclavage, des millions d'Africains déportés au Brésil ont précieusement conservé leurs traditions musicales, leurs chants, leurs percussions et leurs danses. Dans la région du Recôncavo Baiano, autour de Salvador, ces influences se sont mêlées à la culture locale pour donner naissance à la Samba de Roda.\n\nCette danse, pratiquée en cercle, est bien plus qu'un divertissement. On y chante, on y joue des percussions traditionnelles, on improvise et chacun entre tour à tour dans le cercle pour exprimer sa personnalité.",
    },
    {
      type: "image",
      src: bahiaImg,
      alt: "Femmes en tenues traditionnelles baianas dansant la Samba de Roda à Bahia",
      caption: "La Samba de Roda à Bahia, véritable berceau ancestral de la samba brésilienne.",
    },
    {
      type: "bonasavoir",
      title: "Patrimoine mondial de l'UNESCO",
      text: "Aujourd'hui encore, la Samba de Roda est considérée comme l'une des racines fondamentales de toute la samba brésilienne et est inscrite au patrimoine culturel immatériel de l'UNESCO.",
    },
    {
      type: "p",
      text: "À la fin du XIXᵉ siècle, de nombreux Bahianais quittent leur région pour s'installer à Rio de Janeiro. Ils apportent dans leurs bagages leurs traditions, leurs instruments et leur musique.\n\nDans les quartiers populaires autour du port de Rio, notamment dans ce qu'on appelle aujourd'hui la Pequena África (La Petite Afrique), la samba évolue progressivement.\n\nElle devient plus urbaine, plus rapide, plus populaire.\n\nPetit à petit, elle conquiert toute la ville avant de devenir l'un des plus grands symboles du Brésil.\n\nAujourd'hui, impossible d'imaginer Rio sans samba : elle accompagne les matchs de football, les anniversaires, les fêtes de quartier, les bars, les écoles de samba et bien sûr le Carnaval.",
    },

    { type: "h2", text: "Le Carnaval n'est que la partie visible" },
    {
      type: "p",
      text: "Quand on pense samba, on pense immédiatement au Sambódromo et au Carnaval.\n\nPourtant, le Carnaval n'est que la partie la plus spectaculaire et médiatisée de cet univers. La samba se vit intensément toute l'année.",
    },
    {
      type: "image",
      src: carnavallImg,
      alt: "Défilé féérique des écoles de samba avec chars illuminés et danseurs au Sambódromo de Rio",
      caption: "Le Sambódromo pendant le Carnaval : la vitrine spectaculaire de mois de préparation collective.",
    },
    {
      type: "p",
      text: "On la retrouve au quotidien dans les pagodes, une forme plus intimiste et chaleureuse de la samba où l'on chante souvent l'amour, l'amitié, les souvenirs ou simplement la joie d'être ensemble.\n\nD'ailleurs, si vous avez lu notre article sur le pagode de Madureira, vous savez déjà de quoi je parle.\n\nCe sont des soirées où tout le monde chante, où tout le monde tape dans les mains… et où très vite, tout le monde finit par danser.",
    },
    {
      type: "image",
      src: pagodeImg,
      alt: "Musiciens jouant des percussions traditionnelles lors d'une session de pagode à Rio",
      caption: "Un pagode intimiste : percussions, convivialité et chansons reprises en cœur.",
    },

    { type: "h2", text: "La samba s'invite aussi sur les plages" },
    {
      type: "p",
      text: "À Rio, il n'y a pas que les pagodes ou les rodas de samba traditionnelles pour vivre cette ambiance. Une simple balade le long des plages de Copacabana ou d'Ipanema suffit parfois pour tomber sur un concert improvisé.\n\nEntre les différents postes de plage, vous trouverez de nombreux kiosques (appelés *quiosques* en portugais). Il ne faut pas les confondre avec les *barracas*.\n\nLes barracas sont installées directement sur le sable pour louer des chaises et des parasols. Les kiosques, eux, sont construits sur la promenade bordant l'océan. Ce sont de véritables bars-restaurants où l'on vient manger, boire une caipirinha ou profiter du coucher de soleil.",
    },
    {
      type: "image",
      src: quiosqueMusiqueImg,
      alt: "Musiciens jouant de la samba en direct dans un kiosque de bord de plage à Copacabana",
      caption: "Samba live dans un quiosque bordant l'océan à Copacabana.",
    },
    {
      type: "p",
      text: "Et c'est souvent là que la magie opère. Il n'est pas rare de voir des musiciens jouer de la samba en direct pendant que les clients mangent ou prennent un verre. Très vite, certains commencent à chanter, d'autres se lèvent pour danser.\n\nL'ambiance est incroyablement conviviale. Personne ne semble se connaître, et pourtant, le temps de quelques chansons, tout le monde partage le même moment. C'est cette spontanéité qui transforme un simple repas face à la mer en un véritable moment de fête.",
    },
    {
      type: "image",
      src: quiosquePlageImg,
      alt: "Ambiance nocturne et chaleureuse dans les quiosques le long de la promenade de la plage à Rio",
      caption: "Quand le soir tombe sur la promenade, les quiosques s'illuminent et la musique résonne.",
    },

    { type: "h2", text: "Pedra do Sal : l'âme carioca" },
    {
      type: "p",
      text: "Et s'il y a un autre lieu où la samba prend tout son sens à Rio, c'est bien Pedra do Sal.\n\nVéritable lieu emblématique de la culture carioca et berceau historique de la samba urbaine, Pedra do Sal rassemble chaque semaine des centaines de personnes venues écouter de la samba, chanter et danser jusque tard dans la nuit en plein air.\n\nL'ambiance y est populaire, chaleureuse et incroyablement conviviale. On y croise aussi bien des habitants de Rio que des voyageurs venus découvrir cette facette authentique de la ville.\n\nPeu importe que vous connaissiez les pas de samba ou non : l'essentiel est de se laisser porter par l'énergie du lieu.",
    },
    {
      type: "bonasavoir",
      title: "À venir chez Jeitinho",
      text: "Nous consacrerons très prochainement un article entier à Pedra do Sal, son histoire fascinante dans la culture afro-brésilienne et nos conseils pratiques pour profiter pleinement de cette soirée incontournable.",
    },

    { type: "h2", text: "Mon premier cours… improvisé" },
    {
      type: "p",
      text: "La première fois que j'ai vraiment essayé de danser la samba, c'était pendant un pagode avec des amis.\n\nL'un d'eux s'est mis à m'expliquer les pas. J'étais persuadée que je m'en sortais plutôt bien… jusqu'à ce que je me rende compte que je ressemblais surtout à quelqu'un qui essayait d'écraser des cafards !\n\nOn a tous éclaté de rire. Mais personne ne s'est moqué. Au contraire, ils m'ont tous encouragée à continuer.\n\nC'est ce que j'aime ici : les Brésiliens ont cette façon de transmettre la samba avec énormément de bienveillance. Ils veulent que tu danses avec eux, pas que tu sois parfait.",
    },

    { type: "h2", text: "Ce qui m'a le plus marquée" },
    {
      type: "p",
      text: "Au fil des soirées, j'ai commencé à observer attentivement les gens autour de moi.\n\nEt je me suis rendu compte que personne ne danse exactement de la même façon.\n\nÀ gauche, un couple improvise quelques pas. À droite, un homme danse seul. Un peu plus loin, une femme ferme les yeux et suit simplement le rythme.\n\nIl n'y a pas une bonne manière de danser la samba. Il y en a des centaines. Chacun y met sa personnalité, son histoire, son énergie. Et c'est probablement ce qui rend cette danse aussi vivante.",
    },

    { type: "h2", text: "Peut-on apprendre la samba ?" },
    {
      type: "p",
      text: "La bonne nouvelle, c'est que oui !\n\nÀ Rio, il existe des cours un peu partout : certaines écoles de samba proposent des initiations, des associations organisent des cours accessibles à tous et même dans plusieurs favelas, il est possible d'apprendre avec des habitants passionnés.\n\nAlors non… je ne danse toujours pas comme une Carioca. Mais je progresse petit à petit.\n\nEt finalement, je crois que la samba ne s'apprend pas uniquement avec les pieds : elle s'apprend aussi en regardant les autres, en écoutant la musique et en acceptant de rire de soi-même.",
    },

    {
      type: "conseil",
      title: "Le conseil Jeitinho pour vivre la samba",
      text: "Si vous venez à Rio, ne vous contentez pas d'écouter de la samba : allez la vivre ! Participez à une roda de samba en plein air ou à un pagode de quartier. Ce sont des moments authentiques où les habitants se retrouvent pour chanter et partager un verre sans chichi.",
    },

    { type: "h2", text: "Bien plus qu'une danse" },
    {
      type: "p",
      text: "Au fond, la samba raconte l'histoire du Brésil.\n\nUne histoire de résistance, de transmission et de métissage.\n\nAujourd'hui encore, elle rassemble toutes les générations. Et après avoir passé du temps ici, je comprends enfin pourquoi : on ne comprend vraiment la samba qu'à partir du moment où l'on cesse de la regarder… et où l'on commence à la vivre.",
    },
    {
      type: "quote",
      text: "Le Brésil ne se résume pas à ses cartes postales. Derrière chaque musique, chaque quartier et chaque tradition se cache une histoire à raconter. À très vite pour la prochaine découverte ! 🥁🇧🇷",
    },

    {
      type: "faq",
      items: [
        {
          q: "Quelle est la différence entre la Samba et le Pagode ?",
          a: "La samba est le genre musical originel et global. Le pagode est une sous-catégorie née à Rio dans les années 1970, offrant un style plus intimiste, romantique et festif, joué autour d'une table avec des instruments comme le banjo et le tantã.",
        },
        {
          q: "Où écouter de la samba authentique à Rio de Janeiro ?",
          a: "Parmi les spots emblématiques : Pedra do Sal (Saúde), Beco do Rato (Lapa), Renascença Clube (Andaraí), Samba do Trabalhador, ainsi que de nombreux quiosques le long des plages de Copacabana et Ipanema.",
        },
        {
          q: "Qu'est-ce qu'une Roda de Samba ?",
          a: "Une Roda de Samba est un rassemblement où les musiciens sont assis autour d'une table centrale et jouent ensemble, entourés par la foule qui forme un cercle pour chanter, taper des mains et danser.",
        },
        {
          q: "Faut-il savoir bien danser pour participer ?",
          a: "Absolument pas ! L'ambiance dans les rodas de samba cariocas est extrêmement bienveillante. L'important est de s'amuser, de marquer le rythme et d'échanger des sourires.",
        },
        {
          q: "Quelle est l'origine historique de la samba ?",
          a: "La samba puise ses racines dans les traditions africaines apportées à Bahia (Samba de Roda). À la fin du XIXᵉ siècle, les migrations vers le quartier portuaire de Rio (Pequena África) ont donné naissance à la samba carioca moderne.",
        },
      ],
    },
  ],
};