import { Languages } from "lucide-react";
import { getAllArticles } from "@/content";
import { getArticles } from "@/content/localized";
import { useLocale, type Locale } from "@/i18n/locale";

// [texte quand une partie est traduite, texte quand rien ne l'est encore, lien vers la version française]
const TEXT: Record<Exclude<Locale, "fr">, { some: (n: number, total: number) => string; none: string; cta: string }> = {
  en: { some: (n, total) => `${n} of our ${total} guides are already available in English — the rest are being translated.`, none: "Our guides are being translated into English.", cta: "Read them in French" },
  es: { some: (n, total) => `${n} de nuestras ${total} guías ya están disponibles en español; el resto se está traduciendo.`, none: "Estamos traduciendo nuestras guías al español.", cta: "Leerlas en francés" },
  pt: { some: (n, total) => `${n} dos nossos ${total} guias já estão disponíveis em português — os demais estão sendo traduzidos.`, none: "Nossos guias estão sendo traduzidos para o português.", cta: "Ler em francês" },
  it: { some: (n, total) => `${n} delle nostre ${total} guide sono già disponibili in italiano: le altre sono in fase di traduzione.`, none: "Stiamo traducendo le nostre guide in italiano.", cta: "Leggile in francese" },
  de: { some: (n, total) => `${n} unserer ${total} Guides gibt es bereits auf Deutsch, die übrigen werden gerade übersetzt.`, none: "Unsere Guides werden gerade ins Deutsche übersetzt.", cta: "Auf Französisch lesen" },
  ru: { some: (n, total) => `Уже ${n} из ${total} наших гидов доступны на русском, остальные переводятся.`, none: "Мы переводим наши гиды на русский язык.", cta: "Читать на французском" },
};

/** Bandeau affiché tant que tous les articles ne sont pas traduits dans la langue de la page. */
export function TranslationNotice() {
  const locale = useLocale();
  if (locale === "fr") return null;
  const total = getAllArticles().length;
  const n = getArticles(locale).length;
  if (n >= total) return null;
  const t = TEXT[locale];
  const text = n === 0 ? t.none : t.some(n, total);
  return (
    <div className="border-b border-border/60 bg-cream-deep/50">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-foreground/80">
        <Languages className="h-4 w-4 text-terracotta" />
        <span>{text}</span>
        <a href="/blog" lang="fr" className="text-terracotta underline underline-offset-4">{t.cta}</a>
      </div>
    </div>
  );
}
