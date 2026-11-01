import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { getArticles, getAuthorsIn } from "@/content/localized";
import { LocaleLink } from "@/components/i18n/LocaleLink";
import { User } from "lucide-react";
import { useLocale, type Locale } from "@/i18n/locale";
import { useDict } from "@/i18n/t";
import { localeFromParams, localeLinks, localizedUrl, ogLocaleMeta } from "@/i18n/seo";
import { articleCount } from "@/i18n/common";

const SEO: Record<Locale, { title: string; description: string; ogTitle: string; ogDescription: string }> = {
  fr: { title: "Notre équipe — Les auteurs du blog Jeitinho", description: "Découvrez l'équipe éditoriale de Jeitinho : locaux, expatriés et amoureux de Rio de Janeiro qui écrivent le média.", ogTitle: "Notre équipe — Jeitinho", ogDescription: "Locaux, expatriés et amoureux de Rio : découvrez les plumes qui signent les guides et récits du média Jeitinho." },
  en: { title: "Our team — The writers behind the Jeitinho blog", description: "Meet Jeitinho's editorial team: locals, expats and Rio de Janeiro lovers who write the magazine.", ogTitle: "Our team — Jeitinho", ogDescription: "Locals, expats and Rio lovers: meet the writers behind Jeitinho's guides and stories." },
  es: { title: "Nuestro equipo — Los autores del blog Jeitinho", description: "Conoce al equipo editorial de Jeitinho: locales, expatriados y enamorados de Río de Janeiro que escriben el medio.", ogTitle: "Nuestro equipo — Jeitinho", ogDescription: "Locales, expatriados y enamorados de Río: conoce a las plumas que firman las guías y relatos de Jeitinho." },
  pt: { title: "Nossa equipe — Os autores do blog Jeitinho", description: "Conheça a equipe editorial da Jeitinho: locais, expatriados e apaixonados pelo Rio de Janeiro que escrevem o veículo.", ogTitle: "Nossa equipe — Jeitinho", ogDescription: "Locais, expatriados e apaixonados pelo Rio: conheça quem assina os guias e histórias da Jeitinho." },
  it: { title: "Il nostro team — Gli autori del blog Jeitinho", description: "Scopri la redazione di Jeitinho: gente del posto, expat e innamorati di Rio de Janeiro che scrivono il magazine.", ogTitle: "Il nostro team — Jeitinho", ogDescription: "Gente del posto, expat e innamorati di Rio: scopri le firme delle guide e dei racconti di Jeitinho." },
  de: { title: "Unser Team — Die Autorinnen und Autoren des Jeitinho-Blogs", description: "Lernen Sie die Redaktion von Jeitinho kennen: Einheimische, Expats und Rio-Liebhaber, die das Magazin schreiben.", ogTitle: "Unser Team — Jeitinho", ogDescription: "Einheimische, Expats und Rio-Liebhaber: die Menschen hinter den Guides und Geschichten von Jeitinho." },
  ru: { title: "Наша команда — авторы блога Jeitinho", description: "Познакомьтесь с редакцией Jeitinho: местные жители, экспаты и влюблённые в Рио-де-Жанейро авторы журнала.", ogTitle: "Наша команда — Jeitinho", ogDescription: "Местные жители, экспаты и влюблённые в Рио: авторы гидов и историй Jeitinho." },
};

const dict = {
  fr: { eyebrow: "Notre équipe", title: ["Les ", "plumes", " de Jeitinho."], lead: "Une rédaction franco-brésilienne, à cheval entre Rio de Janeiro et Paris. Des regards complémentaires : locale, expatriée, entrepreneuse, fondateur." },
  en: { eyebrow: "Our team", title: ["The ", "writers", " of Jeitinho."], lead: "A French-Brazilian newsroom, split between Rio de Janeiro and Paris. Complementary perspectives: local, expat, entrepreneur, founder." },
  es: { eyebrow: "Nuestro equipo", title: ["Las ", "plumas", " de Jeitinho."], lead: "Una redacción franco-brasileña, a caballo entre Río de Janeiro y París. Miradas complementarias: local, expatriada, emprendedora, fundador." },
  pt: { eyebrow: "Nossa equipe", title: ["Quem ", "escreve", " a Jeitinho."], lead: "Uma redação franco-brasileira, dividida entre o Rio de Janeiro e Paris. Olhares complementares: local, expatriada, empreendedora, fundador." },
  it: { eyebrow: "Il nostro team", title: ["Le ", "firme", " di Jeitinho."], lead: "Una redazione franco-brasiliana, divisa tra Rio de Janeiro e Parigi. Sguardi complementari: locale, expat, imprenditrice, fondatore." },
  de: { eyebrow: "Unser Team", title: ["Die ", "Federn", " hinter Jeitinho."], lead: "Eine französisch-brasilianische Redaktion zwischen Rio de Janeiro und Paris. Sich ergänzende Blickwinkel: Einheimische, Expat, Unternehmerin, Gründer." },
  ru: { eyebrow: "Наша команда", title: ["", "Авторы", " Jeitinho."], lead: "Франко-бразильская редакция между Рио-де-Жанейро и Парижем. Взгляды, которые дополняют друг друга: местный житель, экспат, предприниматель, основатель." },
};

export const Route = createFileRoute("/{-$locale}/auteurs/")({
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
        { property: "og:url", content: localizedUrl("/auteurs", locale) },
        ...ogLocaleMeta(locale),
      ],
      links: localeLinks("/auteurs", locale),
    };
  },
  component: AuthorsIndex,
});

function AuthorsIndex() {
  const locale = useLocale();
  const t = useDict(dict);
  const counts = new Map<string, number>();
  for (const a of getArticles(locale)) counts.set(a.author, (counts.get(a.author) ?? 0) + 1);

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-5 md:px-8 py-20 md:py-28 flex-1">
        <p className="tracked-caps text-[10px] text-terracotta">{t.eyebrow}</p>
        <h1 className="mt-4 text-5xl md:text-6xl">{t.title[0]}<em>{t.title[1]}</em>{t.title[2]}</h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">{t.lead}</p>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {getAuthorsIn(locale).map((a) => (
            <LocaleLink
              key={a.slug}
              to="/{-$locale}/auteurs/$slug"
              params={{ slug: a.slug }}
              className="group flex gap-5 rounded-[3px] border border-border p-6 hover:border-terracotta transition-colors"
            >
              <div className="h-20 w-20 flex-none rounded-full bg-cream-deep flex items-center justify-center overflow-hidden">
                {a.photo ? <img src={a.photo} alt={a.name} className="h-full w-full object-cover" /> : <User className="h-8 w-8 text-terracotta/60" />}
              </div>
              <div className="min-w-0">
                <p className="tracked-caps text-[10px] text-terracotta">{a.role}</p>
                <p className="mt-1 text-2xl group-hover:text-terracotta transition-colors">{a.name}</p>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-3">{a.bio}</p>
                <p className="mt-3 text-xs text-muted-foreground">{articleCount(counts.get(a.slug) ?? 0, locale)}</p>
              </div>
            </LocaleLink>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
