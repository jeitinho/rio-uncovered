// Traductions des fiches auteurs (source : src/content/authors.ts, en français).
import type { NonDefaultLocale } from "@/i18n/locale";

type AuthorText = { name?: string; role: string; bio: string; longBio?: string };

export const AUTHOR_TEXTS: Record<NonDefaultLocale, Record<string, AuthorText>> = {
  en: {
    "equipe-jeitinho": {
      name: "The Jeitinho Team",
      role: "Editorial team",
      bio: "Jeitinho's collective newsroom — locals, expats and people in love with Rio de Janeiro.",
      longBio:
        "The Jeitinho Team brings together French and Brazilian contributors based in Rio. It signs the collective guides, the editorial updates and the articles written by several hands.",
    },
    lili: {
      role: "The expat's eye",
      bio: "Lawyer by training, former bartender, newly settled in Rio.",
      longBio:
        "A lawyer by training and a former bartender, Lili changed her life completely to build her future in tourism in Brazil. Newly settled in Rio de Janeiro, she shares the perspective of an expat discovering the city in depth.",
    },
    nawal: {
      role: "The adventurer & food lover",
      bio: "Passionate traveler, DJ and craft designer based in Rio de Janeiro.",
      longBio:
        "After working in recruitment, tourism and as a flight attendant, Nawal traveled the world with a soft spot for Latin America. After all these experiences, she chose to settle in Brazil and turn her passion for travel, meeting people and discovery into real careers.\n\nAlso a DJ with a passion for dance, she creates handmade pieces inspired by her travels and her daily life in Rio de Janeiro. Through her articles, she shares a sensitive, curious and authentic view of Rio de Janeiro, its people, its culture and its way of life.",
    },
    charline: {
      role: "The human, authentic view",
      bio: "Entrepreneur and mother, living in the Santa Marta favela.",
      longBio:
        "An entrepreneur and mother who has lived in the Santa Marta favela for almost a year, Charline is developing an innovative project around Rio. She shares a human, authentic view of the city and its people.",
    },
    rafael: {
      role: "Founder & editorial director",
      bio: "Founder of Jeitinho — French-Brazilian entrepreneur, event producer and multilingual guide.",
      longBio:
        "Founder of Jeitinho, Rafael is a French-Brazilian entrepreneur, event producer, multilingual guide and concierge specializing in Rio de Janeiro. He splits his time between Rio de Janeiro (six months a year) and Paris (six months a year), supports travelers before, during and after their stay, and leads the publication's editorial line.",
    },
  },
  es: {
    "equipe-jeitinho": {
      name: "El equipo Jeitinho",
      role: "Redacción",
      bio: "La redacción colectiva de Jeitinho: locales, expatriados y enamorados de Río de Janeiro.",
      longBio:
        "El equipo Jeitinho reúne a colaboradores franceses y brasileños instalados en Río. Firma las guías colectivas, las actualizaciones editoriales y los artículos escritos a varias manos.",
    },
    lili: {
      role: "La mirada expatriada",
      bio: "Jurista de formación, exbartender, recién instalada en Río.",
      longBio:
        "Jurista de formación y exbartender, Lili cambió de vida por completo para construir su futuro en el turismo en Brasil. Recién instalada en Río de Janeiro, comparte la mirada de una expatriada que descubre la ciudad a fondo.",
    },
    nawal: {
      role: "La mirada aventurera y sibarita",
      bio: "Viajera apasionada, DJ y creadora artesanal instalada en Río de Janeiro.",
      longBio:
        "Tras trabajar en selección de personal, en turismo y como azafata de vuelo, Nawal recorrió el mundo con un cariño especial por América Latina. Después de todas esas experiencias, decidió instalarse en Brasil y convertir su pasión por los viajes, los encuentros y el descubrimiento en verdaderos oficios.\n\nTambién es DJ, apasionada del baile, y desarrolla creaciones artesanales inspiradas en sus viajes y en su día a día en Río de Janeiro. En sus artículos comparte una mirada sensible, curiosa y auténtica sobre Río de Janeiro, su gente, su cultura y su manera de vivir.",
    },
    charline: {
      role: "La mirada humana y auténtica",
      bio: "Emprendedora y madre, instalada en la favela Santa Marta.",
      longBio:
        "Emprendedora y madre, instalada en la favela Santa Marta desde hace casi un año, Charline desarrolla un proyecto innovador en torno a Río. Comparte una mirada humana y auténtica sobre la ciudad y sus habitantes.",
    },
    rafael: {
      role: "Fundador y director editorial",
      bio: "Fundador de Jeitinho: emprendedor franco-brasileño, productor de eventos y guía multilingüe.",
      longBio:
        "Fundador de Jeitinho, Rafael es un emprendedor franco-brasileño, productor de eventos, guía multilingüe y concierge especializado en Río de Janeiro. Reparte su tiempo entre Río de Janeiro (seis meses al año) y París (seis meses al año), acompaña a los viajeros antes, durante y después de su estancia, y dirige la línea editorial del medio.",
    },
  },
  pt: {
    "equipe-jeitinho": {
      name: "Equipe Jeitinho",
      role: "Redação",
      bio: "A redação coletiva da Jeitinho — locais, expatriados e apaixonados pelo Rio de Janeiro.",
      longBio:
        "A Equipe Jeitinho reúne colaboradores franceses e brasileiros que vivem no Rio. Ela assina os guias coletivos, as atualizações editoriais e os artigos escritos a várias mãos.",
    },
    lili: {
      role: "O olhar de expatriada",
      bio: "Formada em Direito, ex-bartender, recém-chegada ao Rio.",
      longBio:
        "Formada em Direito e ex-bartender, Lili mudou de vida por completo para construir seu futuro no turismo no Brasil. Recém-chegada ao Rio de Janeiro, compartilha o olhar de uma expatriada que descobre a cidade a fundo.",
    },
    nawal: {
      role: "O olhar aventureiro e gourmet",
      bio: "Viajante apaixonada, DJ e criadora artesanal que vive no Rio de Janeiro.",
      longBio:
        "Depois de trabalhar com recrutamento, turismo e como comissária de bordo, Nawal rodou o mundo com um carinho especial pela América Latina. Depois de todas essas experiências, escolheu se fixar no Brasil e transformar sua paixão por viagens, encontros e descobertas em profissão.\n\nTambém DJ e apaixonada por dança, ela desenvolve criações artesanais inspiradas nas viagens e no seu dia a dia no Rio de Janeiro. Em seus artigos, compartilha um olhar sensível, curioso e autêntico sobre o Rio de Janeiro, sua gente, sua cultura e seu jeito de viver.",
    },
    charline: {
      role: "O olhar humano e autêntico",
      bio: "Empreendedora e mãe, moradora do Santa Marta.",
      longBio:
        "Empreendedora e mãe, moradora da favela Santa Marta há quase um ano, Charline desenvolve um projeto inovador em torno do Rio. Compartilha um olhar humano e autêntico sobre a cidade e seus moradores.",
    },
    rafael: {
      role: "Fundador & diretor editorial",
      bio: "Fundador da Jeitinho — empreendedor franco-brasileiro, produtor de eventos e guia multilíngue.",
      longBio:
        "Fundador da Jeitinho, Rafael é um empreendedor franco-brasileiro, produtor de eventos, guia multilíngue e concierge especializado no Rio de Janeiro. Divide seu tempo entre o Rio de Janeiro (seis meses por ano) e Paris (seis meses por ano), acompanha os viajantes antes, durante e depois da viagem e dirige a linha editorial do veículo.",
    },
  },
  it: {
    "equipe-jeitinho": {
      name: "Il team Jeitinho",
      role: "Redazione",
      bio: "La redazione collettiva di Jeitinho: gente del posto, expat e innamorati di Rio de Janeiro.",
      longBio:
        "Il team Jeitinho riunisce collaboratori francesi e brasiliani che vivono a Rio. Firma le guide collettive, gli aggiornamenti editoriali e gli articoli scritti a più mani.",
    },
    lili: {
      role: "Lo sguardo da expat",
      bio: "Giurista di formazione, ex barista, da poco trasferita a Rio.",
      longBio:
        "Giurista di formazione ed ex barista, Lili ha cambiato completamente vita per costruire il suo futuro nel turismo in Brasile. Da poco trasferita a Rio de Janeiro, condivide lo sguardo di un'expat che scopre la città in profondità.",
    },
    nawal: {
      role: "Lo sguardo avventuroso e buongustaio",
      bio: "Viaggiatrice appassionata, DJ e creatrice artigianale che vive a Rio de Janeiro.",
      longBio:
        "Dopo aver lavorato nella selezione del personale, nel turismo e come assistente di volo, Nawal ha girato il mondo con un debole per l'America Latina. Dopo tutte queste esperienze ha scelto di stabilirsi in Brasile e di trasformare la sua passione per i viaggi, gli incontri e la scoperta in veri e propri mestieri.\n\nAnche DJ e appassionata di danza, realizza creazioni artigianali ispirate ai suoi viaggi e alla sua vita quotidiana a Rio de Janeiro. Nei suoi articoli condivide uno sguardo sensibile, curioso e autentico su Rio de Janeiro, i suoi abitanti, la sua cultura e il suo modo di vivere.",
    },
    charline: {
      role: "Lo sguardo umano e autentico",
      bio: "Imprenditrice e mamma, vive nella favela Santa Marta.",
      longBio:
        "Imprenditrice e mamma, da quasi un anno vive nella favela Santa Marta, dove Charline sviluppa un progetto innovativo legato a Rio. Condivide uno sguardo umano e autentico sulla città e sui suoi abitanti.",
    },
    rafael: {
      role: "Fondatore & direttore editoriale",
      bio: "Fondatore di Jeitinho: imprenditore franco-brasiliano, produttore di eventi e guida multilingue.",
      longBio:
        "Fondatore di Jeitinho, Rafael è un imprenditore franco-brasiliano, produttore di eventi, guida multilingue e concierge specializzato su Rio de Janeiro. Divide il suo tempo tra Rio de Janeiro (sei mesi all'anno) e Parigi (sei mesi all'anno), accompagna i viaggiatori prima, durante e dopo il soggiorno e dirige la linea editoriale della testata.",
    },
  },
  de: {
    "equipe-jeitinho": {
      name: "Das Jeitinho-Team",
      role: "Redaktion",
      bio: "Die Gemeinschaftsredaktion von Jeitinho: Einheimische, Expats und Menschen, die Rio de Janeiro lieben.",
      longBio:
        "Im Jeitinho-Team schreiben französische und brasilianische Autorinnen und Autoren, die in Rio leben. Es zeichnet für die Gemeinschafts-Guides, die redaktionellen Aktualisierungen und die gemeinsam verfassten Artikel verantwortlich.",
    },
    lili: {
      role: "Der Blick der Expat",
      bio: "Juristin, ehemalige Barkeeperin, frisch nach Rio gezogen.",
      longBio:
        "Die ausgebildete Juristin und ehemalige Barkeeperin Lili hat ihr Leben komplett umgekrempelt, um sich eine Zukunft im Tourismus in Brasilien aufzubauen. Frisch in Rio de Janeiro angekommen, teilt sie den Blick einer Expat, die die Stadt von Grund auf entdeckt.",
    },
    nawal: {
      role: "Der abenteuerlustige Genießerblick",
      bio: "Leidenschaftliche Reisende, DJ und Kunsthandwerkerin in Rio de Janeiro.",
      longBio:
        "Nach Stationen in der Personalvermittlung, im Tourismus und als Flugbegleiterin hat Nawal die Welt bereist, mit einer besonderen Vorliebe für Lateinamerika. Nach all diesen Erfahrungen hat sie sich entschieden, in Brasilien sesshaft zu werden und ihre Leidenschaft für das Reisen, für Begegnungen und Entdeckungen zum Beruf zu machen.\n\nAls DJ und begeisterte Tänzerin entwirft sie außerdem handgemachte Stücke, inspiriert von ihren Reisen und ihrem Alltag in Rio de Janeiro. In ihren Artikeln teilt sie einen feinfühligen, neugierigen und authentischen Blick auf Rio de Janeiro, seine Menschen, seine Kultur und seine Lebensart.",
    },
    charline: {
      role: "Der menschliche, authentische Blick",
      bio: "Unternehmerin und Mutter, lebt in der Favela Santa Marta.",
      longBio:
        "Die Unternehmerin und Mutter lebt seit fast einem Jahr in der Favela Santa Marta und entwickelt dort ein innovatives Projekt rund um Rio. Charline teilt einen menschlichen, authentischen Blick auf die Stadt und ihre Bewohner.",
    },
    rafael: {
      role: "Gründer & Chefredakteur",
      bio: "Gründer von Jeitinho: französisch-brasilianischer Unternehmer, Eventproduzent und mehrsprachiger Guide.",
      longBio:
        "Rafael, Gründer von Jeitinho, ist französisch-brasilianischer Unternehmer, Eventproduzent, mehrsprachiger Guide und auf Rio de Janeiro spezialisierter Concierge. Er lebt je sechs Monate im Jahr in Rio de Janeiro und in Paris, begleitet Reisende vor, während und nach ihrem Aufenthalt und verantwortet die redaktionelle Linie des Magazins.",
    },
  },
  ru: {
    "equipe-jeitinho": {
      name: "Команда Jeitinho",
      role: "Редакция",
      bio: "Коллективная редакция Jeitinho — местные жители, экспаты и все, кто влюблён в Рио-де-Жанейро.",
      longBio:
        "Команда Jeitinho объединяет французских и бразильских авторов, живущих в Рио. Под её именем выходят коллективные гиды, редакционные обновления и статьи, написанные в соавторстве.",
    },
    lili: {
      role: "Взгляд экспата",
      bio: "Юрист по образованию, бывший бармен, недавно переехала в Рио.",
      longBio:
        "Юрист по образованию и бывший бармен, Лили полностью сменила жизнь, чтобы строить будущее в туризме в Бразилии. Недавно обосновавшись в Рио-де-Жанейро, она делится взглядом экспата, который открывает для себя город в деталях.",
    },
    nawal: {
      role: "Взгляд путешественницы и гурмана",
      bio: "Увлечённая путешественница, диджей и мастер ручной работы, живёт в Рио-де-Жанейро.",
      longBio:
        "Поработав в рекрутинге, туризме и бортпроводницей, Наваль объехала весь мир — с особой любовью к Латинской Америке. После всего этого опыта она решила осесть в Бразилии и превратить свою страсть к путешествиям, встречам и открытиям в настоящее дело.\n\nА ещё она диджей, увлекается танцами и создаёт вещи ручной работы, вдохновлённые путешествиями и жизнью в Рио-де-Жанейро. В своих статьях она делится тонким, любопытным и искренним взглядом на Рио-де-Жанейро, его жителей, культуру и образ жизни.",
    },
    charline: {
      role: "Человечный и искренний взгляд",
      bio: "Предприниматель и мама, живёт в фавеле Санта-Марта.",
      longBio:
        "Предприниматель и мама, Шарлин почти год живёт в фавеле Санта-Марта и развивает инновационный проект, связанный с Рио. Она делится человечным и искренним взглядом на город и его жителей.",
    },
    rafael: {
      role: "Основатель и главный редактор",
      bio: "Основатель Jeitinho — франко-бразильский предприниматель, продюсер мероприятий и гид на нескольких языках.",
      longBio:
        "Основатель Jeitinho Рафаэл — франко-бразильский предприниматель, продюсер мероприятий, гид на нескольких языках и консьерж, специализирующийся на Рио-де-Жанейро. Он делит время между Рио-де-Жанейро (полгода) и Парижем (полгода), сопровождает путешественников до, во время и после поездки и руководит редакционной политикой издания.",
    },
  },
};
