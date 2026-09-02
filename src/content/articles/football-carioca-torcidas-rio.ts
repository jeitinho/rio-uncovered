import type { Article } from "../types";
import hero from "@/assets/article-maracana.jpg";

export const article: Article = {
  slug: "football-carioca-torcidas-rio",
  title: "Flamengo, Fluminense, Vasco, Botafogo : comprendre le football carioca",
  titleAccent: "football carioca",
  description:
    "Couleurs, hymnes, rivalités, quartiers d'origine, codes des torcidas : notre guide pour comprendre la culture des quatre grands clubs de Rio, que vous alliez au stade ou non.",
  category: "football",
  tags: ["football", "Flamengo", "Fluminense", "Vasco", "Botafogo", "Rio de Janeiro"],
  date: "2026-09-02",
  author: "equipe-jeitinho",
  hero,
  heroAlt:
    "Tribunes du stade Maracanã pendant un match de football à Rio de Janeiro",
  featured: false,
  guide: true,
  popular: false,

  relatedServices: [
    {
      label: "Billets pour les matchs au Maracanã",
      href: "https://jeitinho.fr/calendrier",
      description:
        "Notre équipe propose des billets pour les matchs disputés au Maracanã, selon les disponibilités.",
    },
    {
      label: "Conciergerie sur mesure",
      href: "https://jeitinho.fr/trouver-un-jeitinho",
      description:
        "On vous accompagne pour organiser votre expérience football à Rio, au stade ou en dehors.",
    },
  ],

  sections: [
    {
      type: "p",
      text:
        "Ce guide n'est pas une simple fiche technique sur quatre clubs de football. C'est ce qu'on dirait à un ami qui débarque à Rio et qui voit soudain la moitié de la ville en rouge et noir un dimanche, puis en tricolore le lendemain : pourquoi ces couleurs partout, pourquoi ces noms qu'on scande dans les bars, et comment ne pas passer pour un touriste qui ne comprend rien à ce qui se joue.",
    },

    {
      type: "p",
      text:
        "Parce qu'à Rio, le football n'est pas un simple loisir du week-end. C'est une grille de lecture de la ville : chaque quartier, presque chaque famille, a son club. Et ces quatre clubs, Flamengo, Fluminense, Vasco da Gama et Botafogo, se disputent la ville depuis plus d'un siècle.",
    },

    {
      type: "p",
      text:
        "Si vous cherchez plutôt comment assister physiquement à un match, la billetterie, la biométrie et les secteurs du stade, notre <a href=\"/blog/guide-maracana\">guide complet du Maracanã</a> répond à toutes ces questions pratiques. Ici, on s'intéresse à autre chose : comprendre ce que vous regardez, avant même d'entrer dans un stade.",
    },

    {
      type: "h2",
      text: "Pourquoi Rio a-t-elle quatre grands clubs et pas un seul ?",
    },

    {
      type: "p",
      text:
        "Contrairement à beaucoup de grandes villes européennes qui se concentrent souvent autour d'un ou deux clubs dominants, Rio de Janeiro a vu naître ses grands clubs à quelques années d'écart seulement, à la toute fin du XIXe siècle et au tout début du XXe. Chacun est né dans un quartier différent, porté par un groupe social différent, ce qui explique pourquoi leurs identités restent aussi marquées aujourd'hui.",
    },

    {
      type: "p",
      text:
        "Fluminense est le plus ancien des quatre, fondé en 1908 dans le quartier chic de Laranjeiras. Vasco da Gama naît en 1898 comme club d'aviron avant de développer sa section football, porté par la communauté portugaise du quartier de São Cristóvão. Botafogo, sous sa forme actuelle, résulte de la fusion en 1942 de deux clubs distincts nés à la fin du XIXe siècle dans le quartier du même nom. Flamengo, enfin, est fondé comme club d'aviron en 1895, mais ne crée sa section football qu'en 1911, en partie avec des joueurs venus de Fluminense après un désaccord avec les dirigeants de ce dernier.",
    },

    {
      type: "bonasavoir",
      title: "Bon à savoir",
      text:
        "C'est justement cette scission de 1911 qui est à l'origine du Fla-Flu, le derby entre Flamengo et Fluminense : les deux clubs partagent une partie de leur histoire avant de devenir les meilleurs ennemis du football carioca.",
    },

    {
      type: "h2",
      text: "Flamengo : le club le plus populaire du Brésil",
    },

    {
      type: "p",
      text:
        "Rouge et noir, hymne connu de tout le pays, Flamengo est aujourd'hui le club le plus soutenu du Brésil, avec une base de supporters largement plus nombreuse que celle de ses rivaux cariocas. Sa torcida est surnommée la « Nação » (la Nation), une manière de dire qu'elle dépasse largement les frontières de Rio : on croise des maillots de Flamengo dans tout le pays, et même à l'étranger.",
    },

    {
      type: "p",
      text:
        "C'est le club que l'on associe le plus souvent, à tort, à l'ensemble du football carioca. En réalité, Flamengo n'est qu'un des quatre grands, mais sa taille et sa visibilité en font le point de repère le plus évident pour un visiteur qui découvre le sujet.",
    },

    {
      type: "h2",
      text: "Fluminense : le doyen, longtemps club de l'élite",
    },

    {
      type: "p",
      text:
        "Fondé en 1908 dans le quartier huppé de Laranjeiras, Fluminense a longtemps porté l'image d'un club de l'élite carioca, quand le football était encore une pratique réservée à une bourgeoisie blanche. Ses couleurs, le grenat, le vert et le blanc, sont reprises d'une composition inspirée de son hymne.",
    },

    {
      type: "p",
      text:
        "Les supporters de Fluminense sont parfois surnommés « Pó de Arroz » (poudre de riz). L'origine de ce surnom reste débattue : la version la plus répandue raconte qu'un joueur métis du club se serait poudré le visage pour paraître plus clair, une anecdote que d'anciens coéquipiers ont depuis contestée, expliquant plutôt un usage cosmétique banal pour l'époque. Vraie ou enjolivée, l'histoire est aujourd'hui pleinement assumée par les tricolores, qui lancent eux-mêmes de la poudre blanche à l'entrée des joueurs sur le terrain.",
    },

    {
      type: "h2",
      text: "Vasco da Gama : le club de l'immigration et de l'intégration",
    },

    {
      type: "p",
      text:
        "Fondé en 1898 par des membres de la communauté portugaise de Rio, Vasco da Gama porte le noir et blanc. Le club joue historiquement à São Januário, dans le quartier de São Cristóvão, un stade inauguré en 1927 qui reste aujourd'hui le plus grand stade privé de la ville.",
    },

    {
      type: "p",
      text:
        "Vasco occupe une place particulière dans l'histoire sociale du football brésilien : en 1923, le club remporte le championnat carioca avec une équipe mêlant joueurs blancs, noirs et de différentes classes sociales, à une époque où ce mélange n'était pas la norme dans le football d'élite. Cette victoire a durablement marqué les esprits et contribué à ouvrir le football brésilien à des joueurs jusque-là tenus à l'écart des grands clubs.",
    },

    {
      type: "h2",
      text: "Botafogo : le club des légendes, entre General Severiano et l'Engenhão",
    },

    {
      type: "p",
      text:
        "Botafogo joue en noir et blanc à rayures verticales, un maillot associé à quelques-uns des plus grands noms de l'histoire du football brésilien : Garrincha et Nílton Santos, entre autres, ont porté ces couleurs dans les années 1950 et 1960. Le club a longtemps joué au Maracanã, avant de s'installer depuis 2007 au stade olympique Nilton Santos, plus connu sous le nom d'Engenhão, construit pour les Jeux panaméricains.",
    },

    {
      type: "p",
      text:
        "Son surnom, « Estrela Solitária » (l'étoile solitaire), vient de l'étoile du matin, la planète Vénus, visible dans le ciel le jour de la fondation du club de régates dont Botafogo est issu. Cette étoile figure aujourd'hui sur l'écusson du club.",
    },

    {
      type: "h2",
      text: "Le Fla-Flu, le derby le plus intense de Rio",
    },

    {
      type: "p",
      text:
        "Parmi tous les derbies cariocas, le Fla-Flu, entre Flamengo et Fluminense, reste le plus chargé d'histoire. Les deux clubs se sont affrontés plusieurs centaines de fois depuis le début du XXe siècle, et leur confrontation la plus mémorable reste la finale du championnat carioca de 1963, qui a réuni près de 195 000 spectateurs au Maracanã, un record mondial d'affluence pour un match entre clubs.",
    },

    {
      type: "p",
      text:
        "Ce derby est souvent décrit sur place comme une sorte de carnaval hors saison : les jours de Fla-Flu, les rues, les bars et les transports changent d'ambiance bien avant le coup d'envoi.",
    },

    {
      type: "conseil",
      title: "Le conseil Jeitinho",
      text:
        "Si votre séjour tombe pendant un Fla-Flu, ne cherchez pas à en faire un match comme un autre. Que vous soyez au stade ou dans un bar, c'est souvent la rencontre la plus intense à vivre, même sans connaître le classement du championnat.",
    },

    {
      type: "h2",
      text: "Suivre un match sans aller au stade : l'expérience du boteco",
    },

    {
      type: "p",
      text:
        "Aller au Maracanã n'est pas la seule façon de vivre un match à Rio. Les jours de rencontre importante, une grande partie de la ville se retrouve dans les botecos, ces bars de quartier où l'on s'installe en terrasse devant une télévision et une bière bien fraîche.",
    },

    {
      type: "p",
      text:
        "C'est souvent une expérience plus accessible qu'un match au stade : pas de billet à trouver, pas de biométrie à préparer, et une ambiance tout aussi communicative avec les habitants du quartier. Les réactions collectives, les commentaires à voix haute, les klaxons de voitures après un but : le match se vit autant dans la rue que sur l'écran.",
    },

    {
      type: "bonasavoir",
      title: "Bon à savoir",
      text:
        "Chaque boteco a souvent son camp. Un bar peut être fréquenté majoritairement par des supporters d'un club en particulier, surtout dans les quartiers historiquement associés à ce club. Observez un peu l'ambiance et les maillots présents avant de vous installer si vous voulez éviter d'être le seul supporter adverse de la terrasse.",
    },

    {
      type: "h2",
      text: "Les codes à connaître avant de porter un maillot dans la rue",
    },

    {
      type: "p",
      text:
        "C'est probablement le conseil le plus simple de cet article, et l'un des plus utiles : ne portez jamais un maillot au hasard à Rio, que ce soit dans un bar, dans le métro ou près d'un stade.",
    },

    {
      type: "p",
      text:
        "Les rivalités entre clubs cariocas sont anciennes et se ressentent dans la vie quotidienne, pas seulement les jours de match. Un maillot du club adverse dans le mauvais quartier, ou porté au mauvais moment, peut attirer des remarques ou une ambiance désagréable. Rien de dramatique dans l'immense majorité des cas, mais autant l'éviter par méconnaissance.",
    },

    {
      type: "aeviter",
      title: "À éviter",
      text:
        "Ne portez pas le maillot d'un club dans un quartier ou un bar clairement identifié comme celui du club rival, surtout un soir de match. Si vous ne connaissez pas les rivalités locales, une tenue neutre reste le choix le plus simple.",
    },

    {
      type: "ul",
      items: [
        "Renseignez-vous sur le club associé au quartier ou au bar avant d'afficher des couleurs.",
        "Un jour de Fla-Flu ou de derby, restez particulièrement attentif à ce que vous portez.",
        "Dans le doute, une tenue neutre est toujours la solution la plus sûre.",
        "Si vous allez au Maracanã, le choix du maillot dépend aussi du secteur de votre billet : notre <a href=\"/blog/guide-maracana\">guide Maracanã</a> détaille ce point.",
      ],
    },

    {
      type: "h2",
      text: "Les hymnes, un autre pilier de l'identité des clubs",
    },

    {
      type: "p",
      text:
        "À Rio, l'hymne d'un club n'est pas un simple détail protocolaire : il est souvent chanté en intégralité et à pleine voix par les torcidas, avant même le coup d'envoi. Les couleurs de Fluminense, par exemple, sont directement inspirées de la description de son propre hymne. Ces chants font partie du folklore de chaque club, au même titre que les surnoms et les couleurs.",
    },

    {
      type: "h2",
      text: "Et si vous voulez aller au stade malgré tout",
    },

    {
      type: "p",
      text:
        "Rien ne remplace vraiment l'expérience d'un stade plein un soir de grand match. Si cet article vous a donné envie de voir tout cela en vrai plutôt que depuis une terrasse, notre <a href=\"/blog/guide-maracana\">guide complet du Maracanã</a> couvre tout ce qu'il faut savoir : comment acheter un billet, la procédure de biométrie faciale, le choix du secteur et les conseils pour l'avant et l'après-match.",
    },

    {
      type: "p",
      text:
        '→ <a href="https://jeitinho.fr/calendrier">Voir les prochains matchs et demander vos billets pour le Maracanã</a>.',
    },

    {
      type: "faq",
      items: [
        {
          q: "Quels sont les quatre grands clubs de football à Rio de Janeiro ?",
          a:
            "Flamengo, Fluminense, Vasco da Gama et Botafogo sont les quatre grands clubs cariocas. Ils sont nés à quelques années d'écart, entre la fin du XIXe siècle et le début du XXe, chacun dans un quartier différent de la ville.",
        },
        {
          q: "Qu'est-ce que le Fla-Flu ?",
          a:
            "Le Fla-Flu est le derby opposant Flamengo et Fluminense, considéré comme le plus intense du football carioca. Son origine remonte à 1911, quand la section football de Flamengo s'est en partie constituée avec des joueurs venus de Fluminense.",
        },
        {
          q: "Quel est le club le plus populaire de Rio de Janeiro ?",
          a:
            "Flamengo est le club le plus soutenu, aussi bien à Rio que dans l'ensemble du Brésil. Sa torcida, surnommée la Nação, est réputée pour sa taille et son intensité.",
        },
        {
          q: "Peut-on suivre un match sans aller au stade ?",
          a:
            "Oui, et c'est même une manière très populaire de vivre un match à Rio. Les botecos, ces bars de quartier, se remplissent les jours de match important, avec une ambiance collective qui rappelle celle du stade.",
        },
        {
          q: "Est-ce risqué de porter le maillot d'un club à Rio ?",
          a:
            "Ce n'est pas dangereux en soi, mais mieux vaut connaître le club associé au quartier ou au bar où vous vous trouvez, surtout un jour de match. Dans le doute, une tenue neutre reste le choix le plus simple.",
        },
        {
          q: "Pourquoi Fluminense est-il surnommé Pó de Arroz ?",
          a:
            "L'origine du surnom reste débattue. La version la plus connue évoque un joueur métis du club qui se serait poudré le visage pour paraître plus clair, mais d'anciens coéquipiers ont contesté cette explication, évoquant un usage cosmétique courant à l'époque. Les supporters de Fluminense ont depuis adopté le surnom.",
        },
        {
          q: "Où jouent Vasco da Gama et Botafogo quand ils ne jouent pas au Maracanã ?",
          a:
            "Vasco da Gama joue historiquement au stade São Januário, dans le quartier de São Cristóvão. Botafogo évolue depuis 2007 au stade olympique Nilton Santos, aussi appelé Engenhão.",
        },
        {
          q: "Faut-il connaître le football pour apprécier l'ambiance à Rio les jours de match ?",
          a:
            "Non. L'ambiance dans les rues, les bars et les quartiers les jours de grand match fait partie de la culture carioca à part entière, que l'on s'intéresse au classement du championnat ou non.",
        },
      ],
    },

    {
      type: "p",
      text:
        "Comprendre le football carioca, c'est comprendre une partie de l'identité de Rio. Que vous choisissiez de vivre un match dans un boteco de quartier ou de tenter l'expérience du Maracanã, ces quatre clubs et leurs rivalités racontent une histoire de la ville qu'aucune plage ni aucun belvédère ne peut vraiment raconter.",
    },
  ],
};
