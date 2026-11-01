import { useEffect, useRef, useState } from "react";
import { useRouterState, useNavigate } from "@tanstack/react-router";
import { Globe, Check } from "lucide-react";
import {
  ALL_LOCALES,
  LOCALE_FLAGS,
  LOCALE_LABELS,
  localeFromPathname,
  localizedPath,
  stripLocalePrefix,
  type Locale,
} from "@/i18n/locale";
import { hasTranslation } from "@/content/i18n/articles";

const ARIA_LABEL: Record<Locale, string> = {
  fr: "Choisir la langue",
  en: "Choose language",
  es: "Elegir idioma",
  pt: "Escolher idioma",
  it: "Scegli la lingua",
  de: "Sprache wählen",
  ru: "Выбрать язык",
};

/** Cible du changement de langue : même page, ou l'accueil du guide si l'article n'est pas encore traduit. */
function targetPath(basePath: string, locale: Locale): string {
  const article = /^\/blog\/([^/]+)$/.exec(basePath);
  if (article && article[1] !== "recherche" && !hasTranslation(article[1], locale)) {
    return localizedPath("/blog", locale);
  }
  return localizedPath(basePath, locale);
}

export function LanguageSelector({ className = "" }: { className?: string }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const search = useRouterState({ select: (s) => s.location.search });
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const current = localeFromPathname(pathname);
  const base = stripLocalePrefix(pathname);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    if (open) document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  const goTo = (locale: Locale) => {
    setOpen(false);
    if (locale === current) return;
    navigate({ to: targetPath(base, locale), search: search as never });
  };

  return (
    <div ref={ref} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-1.5 rounded-[3px] border border-border px-2.5 py-2 tracked-caps text-[11px] text-foreground/80 hover:border-terracotta hover:text-terracotta transition-colors"
        aria-label={ARIA_LABEL[current]}
        aria-expanded={open}
      >
        <Globe className="h-3.5 w-3.5" />
        <span>{current.toUpperCase()}</span>
      </button>
      {open && (
        <div className="absolute right-0 z-50 mt-2 w-44 overflow-hidden rounded-[3px] border border-border bg-background shadow-xl">
          {ALL_LOCALES.map((l) => (
            <button
              key={l}
              type="button"
              lang={l}
              onClick={() => goTo(l)}
              className="flex w-full items-center justify-between gap-3 px-3 py-2.5 text-left text-sm text-foreground hover:bg-cream-deep/60"
            >
              <span className="flex items-center gap-2">
                <span className="text-base leading-none">{LOCALE_FLAGS[l]}</span>
                <span>{LOCALE_LABELS[l]}</span>
              </span>
              {l === current && <Check className="h-3.5 w-3.5 text-terracotta" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
