import { ArrowRight, BookOpen } from "lucide-react";
import { MANUEL_URL } from "@/lib/site";
import { conciergerieUrl } from "@/lib/localize-links";
import { useLocale } from "@/i18n/locale";
import { useDict } from "@/i18n/t";
import { MANUEL_PRICE_LABEL } from "@/i18n/common";

const dict = {
  fr: { eyebrow: "Le guide Jeitinho", body: "Quartiers, sécurité, plages, sorties et itinéraires prêts à l'emploi : tout ce qu'on aurait aimé savoir avant d'arriver à Rio. 79 pages, en 7 langues.", cta: "Découvrir le Manuel" },
  en: { eyebrow: "The Jeitinho guide", body: "Neighborhoods, safety, beaches, nightlife and ready-to-use itineraries: everything we wish we'd known before arriving in Rio. 79 pages, in 7 languages.", cta: "Discover the Manuel" },
  es: { eyebrow: "La guía Jeitinho", body: "Barrios, seguridad, playas, salidas e itinerarios listos para usar: todo lo que nos habría gustado saber antes de llegar a Río. 79 páginas, en 7 idiomas.", cta: "Descubrir el Manuel" },
  pt: { eyebrow: "O guia Jeitinho", body: "Bairros, segurança, praias, saídas e roteiros prontos: tudo o que a gente queria ter sabido antes de chegar ao Rio. 79 páginas, em 7 idiomas.", cta: "Conhecer o Manuel" },
  it: { eyebrow: "La guida Jeitinho", body: "Quartieri, sicurezza, spiagge, serate e itinerari pronti all'uso: tutto quello che avremmo voluto sapere prima di arrivare a Rio. 79 pagine, in 7 lingue.", cta: "Scopri il Manuel" },
  de: { eyebrow: "Der Jeitinho-Guide", body: "Viertel, Sicherheit, Strände, Ausgehen und fertige Reiserouten: alles, was wir gern vor unserer Ankunft in Rio gewusst hätten. 79 Seiten, in 7 Sprachen.", cta: "Das Manuel entdecken" },
  ru: { eyebrow: "Гид Jeitinho", body: "Районы, безопасность, пляжи, ночная жизнь и готовые маршруты: всё, что мы хотели бы знать до приезда в Рио. 79 страниц на 7 языках.", cta: "Подробнее о Manuel" },
};

/** Encart Manuel affiché en fin de chaque article. */
export function ManuelCTA() {
  const locale = useLocale();
  const t = useDict(dict);
  return (
    <aside className="mt-12 rounded-[3px] border border-terracotta/30 bg-cream-deep/40 p-8 md:p-10">
      <p className="tracked-caps text-[10px] text-terracotta inline-flex items-center gap-2">
        <BookOpen className="h-3.5 w-3.5" /> {t.eyebrow}
      </p>
      <h2 className="mt-3 text-3xl">
        <em className="italic text-terracotta">Manuel JEITINHO</em>
      </h2>
      <p className="mt-3 text-foreground/85 leading-relaxed max-w-2xl">{t.body}</p>
      <a
        href={conciergerieUrl(MANUEL_URL, locale)}
        className="mt-6 inline-flex items-center gap-2 rounded-[3px] bg-primary px-6 py-3.5 tracked-caps text-xs text-primary-foreground hover:bg-terracotta-deep transition-colors"
      >
        {t.cta} — {MANUEL_PRICE_LABEL[locale]} <ArrowRight className="h-3 w-3" />
      </a>
    </aside>
  );
}
