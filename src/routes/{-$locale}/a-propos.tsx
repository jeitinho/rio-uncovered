import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { getAuthorsIn } from "@/content/localized";
import { LocaleLink } from "@/components/i18n/LocaleLink";
import { CONTACT_EMAIL, INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/lib/site";
import { Instagram, Mail, User, MapPin } from "lucide-react";
import { useLocale, type Locale } from "@/i18n/locale";
import { useDict } from "@/i18n/t";
import { localeFromParams, localeLinks, localizedUrl, ogLocaleMeta } from "@/i18n/seo";

const SEO: Record<Locale, { title: string; description: string; ogTitle: string; ogDescription: string }> = {
  fr: { title: "À propos — Jeitinho, le média sur Rio de Janeiro", description: "Qui écrit Jeitinho ? Une rédaction franco-brésilienne à cheval entre Rio et Paris. Notre ligne éditoriale et notre équipe.", ogTitle: "À propos — Jeitinho", ogDescription: "Une rédaction franco-brésilienne entre Rio et Paris : notre histoire, notre ligne éditoriale et les personnes qui écrivent le média Jeitinho." },
  en: { title: "About — Jeitinho, the Rio de Janeiro magazine", description: "Who writes Jeitinho? A French-Brazilian newsroom split between Rio and Paris. Our editorial line and our team.", ogTitle: "About — Jeitinho", ogDescription: "A French-Brazilian newsroom between Rio and Paris: our story, our editorial line and the people who write Jeitinho." },
  es: { title: "Quiénes somos — Jeitinho, el medio sobre Río de Janeiro", description: "¿Quién escribe Jeitinho? Una redacción franco-brasileña a caballo entre Río y París. Nuestra línea editorial y nuestro equipo.", ogTitle: "Quiénes somos — Jeitinho", ogDescription: "Una redacción franco-brasileña entre Río y París: nuestra historia, nuestra línea editorial y las personas que escriben Jeitinho." },
  pt: { title: "Sobre — Jeitinho, o veículo sobre o Rio de Janeiro", description: "Quem escreve a Jeitinho? Uma redação franco-brasileira entre o Rio e Paris. Nossa linha editorial e nossa equipe.", ogTitle: "Sobre — Jeitinho", ogDescription: "Uma redação franco-brasileira entre o Rio e Paris: nossa história, nossa linha editorial e as pessoas que escrevem a Jeitinho." },
  it: { title: "Chi siamo — Jeitinho, il magazine su Rio de Janeiro", description: "Chi scrive Jeitinho? Una redazione franco-brasiliana divisa tra Rio e Parigi. La nostra linea editoriale e il nostro team.", ogTitle: "Chi siamo — Jeitinho", ogDescription: "Una redazione franco-brasiliana tra Rio e Parigi: la nostra storia, la nostra linea editoriale e le persone che scrivono Jeitinho." },
  de: { title: "Über uns — Jeitinho, das Magazin über Rio de Janeiro", description: "Wer schreibt Jeitinho? Eine französisch-brasilianische Redaktion zwischen Rio und Paris. Unsere redaktionelle Linie und unser Team.", ogTitle: "Über uns — Jeitinho", ogDescription: "Eine französisch-brasilianische Redaktion zwischen Rio und Paris: unsere Geschichte, unsere Linie und die Menschen, die Jeitinho schreiben." },
  ru: { title: "О нас — Jeitinho, журнал о Рио-де-Жанейро", description: "Кто пишет Jeitinho? Франко-бразильская редакция между Рио и Парижем. Наша редакционная политика и команда.", ogTitle: "О нас — Jeitinho", ogDescription: "Франко-бразильская редакция между Рио и Парижем: наша история, принципы и люди, которые пишут Jeitinho." },
};

const dict = {
  fr: {
    eyebrow: "À propos du média", h1: ["Rio, ", "sans filtre", " ni langue de bois."],
    intro: [
      "Jeitinho est né d'une frustration simple : voir des voyageurs débarquer à Rio avec les mêmes trois adresses et repartir sans avoir vraiment rencontré la ville.",
      "« Jeitinho », en portugais du Brésil, c'est l'art de trouver la manière — la petite ruse, l'astuce d'initié, la façon élégante de résoudre un problème. C'est l'esprit de ce média, publié aujourd'hui en sept langues.",
    ],
    teamEyebrow: "Notre équipe", teamTitle: ["Les ", "plumes."], teamLead: "Une rédaction franco-brésilienne, à cheval entre Rio de Janeiro et Paris. Chaque auteur signe ses articles.",
    lineEyebrow: "Ligne éditoriale", lineTitle: ["Notre ", "engagement."],
    line: [
      "Aucune adresse ne nous rémunère pour figurer dans nos articles. Nos partenariats existent, mais ils sont toujours signalés.",
      "On préfère un « non » honnête à un « oui » de complaisance. Chaque article est signé — vous pouvez remonter à son auteur, à sa langue, à son expérience.",
    ],
    write: "Nous écrire",
  },
  en: {
    eyebrow: "About the magazine", h1: ["Rio, ", "unfiltered", " and straight-talking."],
    intro: [
      "Jeitinho was born out of a simple frustration: watching travelers land in Rio with the same three addresses and leave without ever really meeting the city.",
      "In Brazilian Portuguese, “jeitinho” is the art of finding a way — the clever trick, the insider tip, the elegant way around a problem. That's the spirit of this magazine, now published in seven languages.",
    ],
    teamEyebrow: "Our team", teamTitle: ["The ", "writers."], teamLead: "A French-Brazilian newsroom, split between Rio de Janeiro and Paris. Every writer signs their articles.",
    lineEyebrow: "Editorial line", lineTitle: ["Our ", "commitment."],
    line: [
      "No business pays to appear in our articles. We do have partnerships, but they are always disclosed.",
      "We'd rather give an honest “no” than a flattering “yes”. Every article is signed — you can trace it back to its writer, their language, their experience.",
    ],
    write: "Write to us",
  },
  es: {
    eyebrow: "Sobre el medio", h1: ["Río, ", "sin filtros", " ni rodeos."],
    intro: [
      "Jeitinho nació de una frustración sencilla: ver a viajeros llegar a Río con las mismas tres direcciones y marcharse sin haber conocido de verdad la ciudad.",
      "En portugués de Brasil, «jeitinho» es el arte de encontrar la manera: el pequeño truco, el consejo de iniciado, la forma elegante de resolver un problema. Ese es el espíritu de este medio, que hoy se publica en siete idiomas.",
    ],
    teamEyebrow: "Nuestro equipo", teamTitle: ["Las ", "plumas."], teamLead: "Una redacción franco-brasileña, a caballo entre Río de Janeiro y París. Cada autor firma sus artículos.",
    lineEyebrow: "Línea editorial", lineTitle: ["Nuestro ", "compromiso."],
    line: [
      "Ningún establecimiento nos paga por aparecer en nuestros artículos. Tenemos colaboraciones, pero siempre se indican.",
      "Preferimos un «no» honesto a un «sí» complaciente. Cada artículo está firmado: puedes saber quién lo escribió, en qué idioma y desde qué experiencia.",
    ],
    write: "Escríbenos",
  },
  pt: {
    eyebrow: "Sobre o veículo", h1: ["O Rio ", "sem filtro", " e sem rodeios."],
    intro: [
      "A Jeitinho nasceu de uma frustração simples: ver viajantes chegando ao Rio com os mesmos três endereços e indo embora sem ter conhecido a cidade de verdade.",
      "“Jeitinho” é a arte de dar um jeito — a pequena malandragem, a dica de quem conhece, a forma elegante de resolver um problema. Esse é o espírito do veículo, publicado hoje em sete idiomas.",
    ],
    teamEyebrow: "Nossa equipe", teamTitle: ["Quem ", "escreve."], teamLead: "Uma redação franco-brasileira, dividida entre o Rio de Janeiro e Paris. Cada autor assina seus artigos.",
    lineEyebrow: "Linha editorial", lineTitle: ["Nosso ", "compromisso."],
    line: [
      "Nenhum estabelecimento nos paga para aparecer nos nossos artigos. Temos parcerias, mas elas são sempre sinalizadas.",
      "Preferimos um “não” sincero a um “sim” de conveniência. Todo artigo é assinado — dá para saber quem escreveu, em que idioma e com que experiência.",
    ],
    write: "Fale com a gente",
  },
  it: {
    eyebrow: "Il magazine", h1: ["Rio, ", "senza filtri", " né giri di parole."],
    intro: [
      "Jeitinho è nato da una frustrazione semplice: vedere viaggiatori sbarcare a Rio con gli stessi tre indirizzi e ripartire senza aver davvero conosciuto la città.",
      "In portoghese del Brasile, «jeitinho» è l'arte di trovare il modo: il piccolo stratagemma, la dritta da insider, la soluzione elegante a un problema. È lo spirito di questo magazine, oggi pubblicato in sette lingue.",
    ],
    teamEyebrow: "Il nostro team", teamTitle: ["Le ", "firme."], teamLead: "Una redazione franco-brasiliana, divisa tra Rio de Janeiro e Parigi. Ogni autore firma i propri articoli.",
    lineEyebrow: "Linea editoriale", lineTitle: ["Il nostro ", "impegno."],
    line: [
      "Nessun locale ci paga per comparire nei nostri articoli. Le collaborazioni esistono, ma sono sempre dichiarate.",
      "Preferiamo un «no» onesto a un «sì» di comodo. Ogni articolo è firmato: puoi risalire al suo autore, alla sua lingua, alla sua esperienza.",
    ],
    write: "Scrivici",
  },
  de: {
    eyebrow: "Über das Magazin", h1: ["Rio, ", "ungefiltert", " und ehrlich."],
    intro: [
      "Jeitinho entstand aus einem einfachen Ärgernis: zu sehen, wie Reisende mit denselben drei Adressen in Rio landen und wieder abreisen, ohne die Stadt wirklich kennengelernt zu haben.",
      "„Jeitinho“ ist im brasilianischen Portugiesisch die Kunst, einen Weg zu finden: der kleine Kniff, der Insidertipp, die elegante Lösung für ein Problem. Das ist der Geist dieses Magazins, das heute in sieben Sprachen erscheint.",
    ],
    teamEyebrow: "Unser Team", teamTitle: ["Die ", "Federn."], teamLead: "Eine französisch-brasilianische Redaktion zwischen Rio de Janeiro und Paris. Jeder Artikel ist namentlich gezeichnet.",
    lineEyebrow: "Redaktionelle Linie", lineTitle: ["Unser ", "Versprechen."],
    line: [
      "Kein Betrieb bezahlt uns dafür, in unseren Artikeln zu erscheinen. Es gibt Partnerschaften, aber wir kennzeichnen sie immer.",
      "Ein ehrliches „Nein“ ist uns lieber als ein gefälliges „Ja“. Jeder Artikel ist gezeichnet: Sie wissen, wer ihn geschrieben hat, in welcher Sprache und mit welcher Erfahrung.",
    ],
    write: "Schreiben Sie uns",
  },
  ru: {
    eyebrow: "О журнале", h1: ["Рио ", "без фильтров", " и без прикрас."],
    intro: [
      "Jeitinho появился из простой досады: смотреть, как путешественники приезжают в Рио с одними и теми же тремя адресами и уезжают, так и не узнав город по-настоящему.",
      "«Жейтинью» в бразильском португальском — это искусство найти способ: маленькая хитрость, совет знающего человека, изящное решение проблемы. В этом дух журнала, который сегодня выходит на семи языках.",
    ],
    teamEyebrow: "Наша команда", teamTitle: ["Наши ", "авторы."], teamLead: "Франко-бразильская редакция между Рио-де-Жанейро и Парижем. Каждый автор подписывает свои статьи.",
    lineEyebrow: "Редакционная политика", lineTitle: ["Наши ", "принципы."],
    line: [
      "Ни одно заведение не платит нам за упоминание в статьях. Партнёрства у нас есть, но мы всегда о них сообщаем.",
      "Честное «нет» для нас лучше вежливого «да». Каждая статья подписана: вы всегда знаете, кто её написал, на каком языке и с каким опытом.",
    ],
    write: "Написать нам",
  },
};

export const Route = createFileRoute("/{-$locale}/a-propos")({
  head: ({ params }) => {
    const locale = localeFromParams(params);
    const seo = SEO[locale];
    return {
      meta: [
        { title: seo.title },
        { name: "description", content: seo.description },
        { property: "og:title", content: seo.ogTitle },
        { property: "og:description", content: seo.ogDescription },
        { property: "og:type", content: "website" },
        { property: "og:url", content: localizedUrl("/a-propos", locale) },
        ...ogLocaleMeta(locale),
      ],
      links: localeLinks("/a-propos", locale),
    };
  },
  component: AboutPage,
});

function AboutPage() {
  const locale = useLocale();
  const t = useDict(dict);
  // On exclut l'auteur générique « L'Équipe Jeitinho » pour afficher les personnes.
  const team = getAuthorsIn(locale).filter((a) => a.slug !== "equipe-jeitinho");

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="border-b border-border/60">
          <div className="mx-auto max-w-3xl px-5 md:px-8 py-20 md:py-28">
            <p className="tracked-caps text-[10px] text-terracotta">{t.eyebrow}</p>
            <h1 className="mt-4 text-5xl md:text-6xl">{t.h1[0]}<em>{t.h1[1]}</em>{t.h1[2]}</h1>
            <div className="mt-10 space-y-5 text-lg leading-relaxed text-foreground/85">
              {t.intro.map((p) => <p key={p}>{p}</p>)}
            </div>
          </div>
        </section>

        <section className="border-b border-border/60 bg-cream-deep/30">
          <div className="mx-auto max-w-6xl px-5 md:px-8 py-20 md:py-24">
            <p className="tracked-caps text-[10px] text-terracotta">{t.teamEyebrow}</p>
            <h2 className="mt-3 text-4xl md:text-5xl">{t.teamTitle[0]}<em>{t.teamTitle[1]}</em></h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">{t.teamLead}</p>

            <div className="mt-12 grid gap-8 md:grid-cols-2">
              {team.map((a) => (
                <LocaleLink
                  key={a.slug}
                  to="/{-$locale}/auteurs/$slug"
                  params={{ slug: a.slug }}
                  className="group flex gap-5 rounded-[3px] border border-border bg-background/60 p-6 hover:border-terracotta transition-colors"
                >
                  <div className="h-20 w-20 flex-none rounded-full bg-cream-deep flex items-center justify-center overflow-hidden">
                    {a.photo ? <img src={a.photo} alt={a.name} className="h-full w-full object-cover" /> : <User className="h-8 w-8 text-terracotta/60" />}
                  </div>
                  <div className="min-w-0">
                    <p className="tracked-caps text-[10px] text-terracotta">{a.role}</p>
                    <p className="mt-1 text-2xl group-hover:text-terracotta transition-colors">{a.name}</p>
                    <div className="mt-2 space-y-2 text-sm text-foreground/80 leading-relaxed">
                      {(a.longBio ?? a.bio).split("\n\n").map((para, i) => <p key={i}>{para}</p>)}
                    </div>
                    {a.location && (
                      <p className="mt-3 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                        <MapPin className="h-3 w-3" /> {a.location}
                      </p>
                    )}
                  </div>
                </LocaleLink>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-5 md:px-8 py-20">
          <p className="tracked-caps text-[10px] text-terracotta">{t.lineEyebrow}</p>
          <h2 className="mt-3 text-4xl md:text-5xl">{t.lineTitle[0]}<em>{t.lineTitle[1]}</em></h2>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-foreground/85">
            {t.line.map((p) => <p key={p}>{p}</p>)}
          </div>
        </section>

        <section className="border-t border-border/60">
          <div className="mx-auto max-w-3xl px-5 md:px-8 py-16">
            <p className="tracked-caps text-[10px] text-terracotta">{t.write}</p>
            <div className="mt-4 flex flex-col sm:flex-row gap-6 sm:items-center">
              <a href={`mailto:${CONTACT_EMAIL}`} className="inline-flex items-center gap-2 text-lg hover:text-terracotta transition-colors">
                <Mail className="h-4 w-4 text-terracotta" /> {CONTACT_EMAIL}
              </a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-lg hover:text-terracotta transition-colors">
                <Instagram className="h-4 w-4 text-terracotta" /> {INSTAGRAM_HANDLE}
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
