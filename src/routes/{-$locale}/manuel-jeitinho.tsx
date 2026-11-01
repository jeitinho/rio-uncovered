import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { LocaleLink } from "@/components/i18n/LocaleLink";
import { MANUEL_URL, MANUEL_READER_URL } from "@/lib/site";
import { conciergerieUrl } from "@/lib/localize-links";
import { ArrowRight, BookOpen, Check } from "lucide-react";
import { useLocale, type Locale } from "@/i18n/locale";
import { useDict } from "@/i18n/t";
import { localeFromParams, localeLinks, localizedUrl, ogLocaleMeta } from "@/i18n/seo";
import { MANUEL_PRICE_LABEL } from "@/i18n/common";

// Les sept langues du Manuel, chacune écrite dans sa propre langue.
const LANGUAGES = "Français, English, Español, Português, Italiano, Deutsch, Русский";

const SEO: Record<Locale, { title: string; description: string }> = {
  fr: { title: "Le Manuel JEITINHO — Le guide de Rio de Janeiro (79 pages)", description: "Le guide numérique de Rio écrit par une équipe locale : quartiers, sécurité, plages, sorties, itinéraires. 79 pages en 7 langues, accès 12 mois, 30 €." },
  en: { title: "The Manuel JEITINHO — The Rio de Janeiro guide (79 pages)", description: "The digital guide to Rio written by a local team: neighborhoods, safety, beaches, nightlife, itineraries. 79 pages in 7 languages, 12-month access, €30." },
  es: { title: "El Manuel JEITINHO — La guía de Río de Janeiro (79 páginas)", description: "La guía digital de Río escrita por un equipo local: barrios, seguridad, playas, salidas, itinerarios. 79 páginas en 7 idiomas, acceso 12 meses, 30 €." },
  pt: { title: "O Manuel JEITINHO — O guia do Rio de Janeiro (79 páginas)", description: "O guia digital do Rio escrito por uma equipe local: bairros, segurança, praias, saídas, roteiros. 79 páginas em 7 idiomas, acesso por 12 meses, € 30." },
  it: { title: "Il Manuel JEITINHO — La guida di Rio de Janeiro (79 pagine)", description: "La guida digitale di Rio scritta da un team locale: quartieri, sicurezza, spiagge, serate, itinerari. 79 pagine in 7 lingue, accesso 12 mesi, 30 €." },
  de: { title: "Das Manuel JEITINHO — Der Guide für Rio de Janeiro (79 Seiten)", description: "Der digitale Rio-Guide von einem Team vor Ort: Viertel, Sicherheit, Strände, Ausgehen, Reiserouten. 79 Seiten in 7 Sprachen, 12 Monate Zugang, 30 €." },
  ru: { title: "Manuel JEITINHO — гид по Рио-де-Жанейро (79 страниц)", description: "Цифровой гид по Рио от местной команды: районы, безопасность, пляжи, ночная жизнь, маршруты. 79 страниц на 7 языках, доступ на 12 месяцев, 30 €." },
};

const dict = {
  fr: {
    eyebrow: "LE GUIDE JEITINHO", lead: "Tout ce qu'on aurait aimé savoir avant d'arriver à Rio, réuni dans un seul guide.",
    facts: (price: string) => `79 pages · ${LANGUAGES} · Accès 12 mois · ${price}`, cta: "Découvrir le Manuel", reader: "Déjà un code d'accès ? Ouvrir le Manuel",
    intro: "Écrit par une équipe qui vit à Rio, le Manuel vous aide à comprendre la ville avant d'y poser le pied : choisir son quartier, se déplacer, éviter les pièges, trouver les bonnes plages, les bonnes tables et les bonnes soirées.",
    tocTitle: "Au sommaire", back: "← Retour aux articles",
    toc: ["Préparer son voyage", "Comprendre Rio et s'y déplacer", "Les quartiers, un par un", "Favelas : le contexte à connaître", "Choisir sa plage", "Manger à la carioca", "La nuit à Rio", "Expériences et excursions", "Prolonger vers le Nordeste", "Infos pratiques", "Itinéraires prêts à l'emploi (3, 5 et 7 jours)", "Checklists et bonus"],
  },
  en: {
    eyebrow: "THE JEITINHO GUIDE", lead: "Everything we wish we'd known before arriving in Rio, gathered in a single guide.",
    facts: (price: string) => `79 pages · ${LANGUAGES} · 12-month access · ${price}`, cta: "Discover the Manuel", reader: "Already have an access code? Open the Manuel",
    intro: "Written by a team that lives in Rio, the Manuel helps you understand the city before you set foot in it: choosing your neighborhood, getting around, avoiding the traps, finding the right beaches, the right tables and the right nights out.",
    tocTitle: "Inside", back: "← Back to the articles",
    toc: ["Preparing your trip", "Understanding Rio and getting around", "The neighborhoods, one by one", "Favelas: the context you need", "Choosing your beach", "Eating like a carioca", "Rio by night", "Experiences and day trips", "Extending your trip to the Nordeste", "Practical information", "Ready-made itineraries (3, 5 and 7 days)", "Checklists and extras"],
  },
  es: {
    eyebrow: "LA GUÍA JEITINHO", lead: "Todo lo que nos habría gustado saber antes de llegar a Río, reunido en una sola guía.",
    facts: (price: string) => `79 páginas · ${LANGUAGES} · Acceso 12 meses · ${price}`, cta: "Descubrir el Manuel", reader: "¿Ya tienes un código de acceso? Abrir el Manuel",
    intro: "Escrito por un equipo que vive en Río, el Manuel te ayuda a entender la ciudad antes de pisarla: elegir barrio, moverte, evitar las trampas, encontrar las buenas playas, las buenas mesas y las buenas noches.",
    tocTitle: "Contenido", back: "← Volver a los artículos",
    toc: ["Preparar el viaje", "Entender Río y moverse por la ciudad", "Los barrios, uno a uno", "Favelas: el contexto que hay que conocer", "Elegir playa", "Comer a lo carioca", "La noche en Río", "Experiencias y excursiones", "Seguir hacia el Nordeste", "Información práctica", "Itinerarios listos para usar (3, 5 y 7 días)", "Checklists y extras"],
  },
  pt: {
    eyebrow: "O GUIA JEITINHO", lead: "Tudo o que a gente gostaria de ter sabido antes de chegar ao Rio, reunido em um só guia.",
    facts: (price: string) => `79 páginas · ${LANGUAGES} · Acesso por 12 meses · ${price}`, cta: "Conhecer o Manuel", reader: "Já tem um código de acesso? Abrir o Manuel",
    intro: "Escrito por uma equipe que vive no Rio, o Manuel ajuda você a entender a cidade antes mesmo de chegar: escolher o bairro, se locomover, evitar as armadilhas, achar as melhores praias, as melhores mesas e as melhores noites.",
    tocTitle: "No sumário", back: "← Voltar para os artigos",
    toc: ["Preparar a viagem", "Entender o Rio e se locomover", "Os bairros, um a um", "Favelas: o contexto que você precisa conhecer", "Escolher a praia", "Comer como carioca", "A noite no Rio", "Experiências e passeios", "Esticar até o Nordeste", "Informações práticas", "Roteiros prontos (3, 5 e 7 dias)", "Checklists e bônus"],
  },
  it: {
    eyebrow: "LA GUIDA JEITINHO", lead: "Tutto quello che avremmo voluto sapere prima di arrivare a Rio, riunito in un'unica guida.",
    facts: (price: string) => `79 pagine · ${LANGUAGES} · Accesso 12 mesi · ${price}`, cta: "Scopri il Manuel", reader: "Hai già un codice di accesso? Apri il Manuel",
    intro: "Scritto da un team che vive a Rio, il Manuel ti aiuta a capire la città prima ancora di metterci piede: scegliere il quartiere, spostarti, evitare le trappole, trovare le spiagge giuste, i locali giusti e le serate giuste.",
    tocTitle: "Nel sommario", back: "← Torna agli articoli",
    toc: ["Preparare il viaggio", "Capire Rio e spostarsi", "I quartieri, uno per uno", "Favelas: il contesto da conoscere", "Scegliere la spiaggia", "Mangiare da carioca", "La notte a Rio", "Esperienze ed escursioni", "Proseguire verso il Nordeste", "Informazioni pratiche", "Itinerari pronti all'uso (3, 5 e 7 giorni)", "Checklist e bonus"],
  },
  de: {
    eyebrow: "DER JEITINHO-GUIDE", lead: "Alles, was wir gern vor unserer Ankunft in Rio gewusst hätten, in einem einzigen Guide.",
    facts: (price: string) => `79 Seiten · ${LANGUAGES} · 12 Monate Zugang · ${price}`, cta: "Das Manuel entdecken", reader: "Schon einen Zugangscode? Manuel öffnen",
    intro: "Geschrieben von einem Team, das in Rio lebt, hilft Ihnen das Manuel, die Stadt zu verstehen, bevor Sie sie betreten: das richtige Viertel wählen, sich fortbewegen, Fallen vermeiden, die richtigen Strände, Restaurants und Abende finden.",
    tocTitle: "Inhalt", back: "← Zurück zu den Artikeln",
    toc: ["Die Reise vorbereiten", "Rio verstehen und sich fortbewegen", "Die Viertel, eines nach dem anderen", "Favelas: der Kontext, den man kennen sollte", "Den richtigen Strand wählen", "Essen wie ein Carioca", "Rio bei Nacht", "Erlebnisse und Ausflüge", "Weiter in den Nordosten", "Praktische Infos", "Fertige Reiserouten (3, 5 und 7 Tage)", "Checklisten und Extras"],
  },
  ru: {
    eyebrow: "ГИД JEITINHO", lead: "Всё, что мы хотели бы знать до приезда в Рио, — в одном гиде.",
    facts: (price: string) => `79 страниц · ${LANGUAGES} · Доступ на 12 месяцев · ${price}`, cta: "Подробнее о Manuel", reader: "Уже есть код доступа? Открыть Manuel",
    intro: "Manuel написан командой, которая живёт в Рио. Он поможет понять город ещё до приезда: выбрать район, разобраться с транспортом, обойти ловушки, найти хорошие пляжи, рестораны и вечеринки.",
    tocTitle: "Содержание", back: "← К статьям",
    toc: ["Подготовка к поездке", "Как понять Рио и передвигаться по нему", "Районы — один за другим", "Фавелы: что важно знать", "Как выбрать пляж", "Есть как кариока", "Ночной Рио", "Впечатления и экскурсии", "Продолжить путь на северо-восток", "Практическая информация", "Готовые маршруты (3, 5 и 7 дней)", "Чек-листы и бонусы"],
  },
};

export const Route = createFileRoute("/{-$locale}/manuel-jeitinho")({
  head: ({ params }) => {
    const locale = localeFromParams(params);
    const seo = SEO[locale];
    return {
      meta: [
        { title: seo.title },
        { name: "description", content: seo.description },
        { property: "og:title", content: seo.title },
        { property: "og:description", content: seo.description },
        { property: "og:type", content: "website" },
        { property: "og:url", content: localizedUrl("/manuel-jeitinho", locale) },
        ...ogLocaleMeta(locale),
      ],
      links: localeLinks("/manuel-jeitinho", locale),
    };
  },
  component: ManuelJeitinho,
});

function ManuelJeitinho() {
  const locale = useLocale();
  const t = useDict(dict);
  const price = MANUEL_PRICE_LABEL[locale];
  const buyUrl = conciergerieUrl(MANUEL_URL, locale);
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="bg-ink text-cream">
          <div className="mx-auto max-w-5xl px-5 md:px-8 py-24 md:py-32">
            <p className="tracked-caps text-[10px] text-peach inline-flex items-center gap-2">
              <BookOpen className="h-3.5 w-3.5" /> {t.eyebrow}
            </p>
            <h1 className="mt-5 text-5xl md:text-7xl leading-[1.05] text-cream">
              <em className="italic font-light text-peach">Manuel JEITINHO</em>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-cream/85 leading-relaxed">{t.lead}</p>
            <p className="mt-5 tracked-caps text-[11px] text-cream/70">{t.facts(price)}</p>
            <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <a href={buyUrl} className="inline-flex items-center gap-2 rounded-[3px] bg-peach px-7 py-4 tracked-caps text-xs text-ink hover:opacity-90 transition-opacity">
                {t.cta} — {price} <ArrowRight className="h-3 w-3" />
              </a>
              <a href={MANUEL_READER_URL} className="text-sm text-cream/80 underline decoration-peach underline-offset-4 hover:text-cream transition-colors">
                {t.reader}
              </a>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-5 md:px-8 py-20 md:py-28">
          <p className="text-lg text-foreground/85 leading-relaxed">{t.intro}</p>
          <p className="mt-14 tracked-caps text-[10px] text-terracotta">{t.tocTitle}</p>
          <ul className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {t.toc.map((item) => (
              <li key={item} className="flex gap-3 text-foreground/85 leading-snug">
                <Check className="mt-0.5 h-4 w-4 flex-none text-terracotta" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="border-y border-border/60 bg-cream-deep/30">
          <div className="mx-auto max-w-3xl px-5 md:px-8 py-20 text-center">
            <p className="tracked-caps text-[11px] text-muted-foreground">{t.facts(price)}</p>
            <a href={buyUrl} className="mt-8 inline-flex items-center gap-2 rounded-[3px] bg-primary px-7 py-4 tracked-caps text-xs text-primary-foreground hover:bg-terracotta-deep transition-colors">
              {t.cta} — {price} <ArrowRight className="h-3 w-3" />
            </a>
            <p className="mt-6">
              <a href={MANUEL_READER_URL} className="text-sm text-terracotta underline underline-offset-4 hover:text-terracotta-deep transition-colors">
                {t.reader}
              </a>
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-5 md:px-8 py-16 text-center">
          <LocaleLink to="/{-$locale}/blog" className="tracked-caps text-xs text-terracotta hover:text-terracotta-deep transition-colors">
            {t.back}
          </LocaleLink>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
