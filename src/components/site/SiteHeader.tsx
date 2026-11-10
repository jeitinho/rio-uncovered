import { Menu, X, ChevronDown, ExternalLink } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import logo from "@/assets/jeitinho-logo.png";
import { getCategoriesByPillarIn } from "@/content/localized-categories";
import { CONCIERGERIE_BOOK_URL } from "@/lib/site";
import { conciergerieUrl } from "@/lib/localize-links";
import { useLocale } from "@/i18n/locale";
import { useDict } from "@/i18n/t";
import { LocaleLink } from "@/components/i18n/LocaleLink";
import { LanguageSelector } from "@/components/i18n/LanguageSelector";

const dict = {
  fr: { home: "Accueil", explore: "Explorer", manuel: "Le Manuel", about: "À propos", contact: "Contact", all: "Voir tous les articles →", conciergerie: "Conciergerie", openMenu: "Ouvrir le menu", closeMenu: "Fermer le menu" },
  en: { home: "Home", explore: "Explore", manuel: "The Manuel", about: "About", contact: "Contact", all: "See all articles →", conciergerie: "Concierge", openMenu: "Open menu", closeMenu: "Close menu" },
  es: { home: "Inicio", explore: "Explorar", manuel: "El Manuel", about: "Quiénes somos", contact: "Contacto", all: "Ver todos los artículos →", conciergerie: "Conciergería", openMenu: "Abrir el menú", closeMenu: "Cerrar el menú" },
  pt: { home: "Início", explore: "Explorar", manuel: "O Manuel", about: "Sobre", contact: "Contato", all: "Ver todos os artigos →", conciergerie: "Concierge", openMenu: "Abrir o menu", closeMenu: "Fechar o menu" },
  it: { home: "Home", explore: "Esplora", manuel: "Il Manuel", about: "Chi siamo", contact: "Contatti", all: "Vedi tutti gli articoli →", conciergerie: "Concierge", openMenu: "Apri il menu", closeMenu: "Chiudi il menu" },
  de: { home: "Startseite", explore: "Entdecken", manuel: "Das Manuel", about: "Über uns", contact: "Kontakt", all: "Alle Artikel ansehen →", conciergerie: "Concierge", openMenu: "Menü öffnen", closeMenu: "Menü schließen" },
  ru: { home: "Главная", explore: "Разделы", manuel: "Manuel", about: "О нас", contact: "Контакты", all: "Все статьи →", conciergerie: "Консьерж", openMenu: "Открыть меню", closeMenu: "Закрыть меню" },
};

const NAV_LINK = "tracked-caps text-[13px] text-foreground/80 hover:text-terracotta transition-colors";
const NAV_ACTIVE = { className: "tracked-caps text-[13px] text-terracotta" };

export function SiteHeader() {
  const locale = useLocale();
  const t = useDict(dict);
  const [open, setOpen] = useState(false);
  const [catsOpen, setCatsOpen] = useState(false);
  const [mobileCatsOpen, setMobileCatsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const grouped = getCategoriesByPillarIn(locale);
  const bookUrl = conciergerieUrl(CONCIERGERIE_BOOK_URL, locale);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) setCatsOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  // Mobile : Accueil, puis Explorer (articles), puis le reste — même ordre que sur desktop.
  const after = [
    { to: "/{-$locale}/manuel-jeitinho", label: t.manuel },
    { to: "/{-$locale}/a-propos", label: t.about },
    { to: "/{-$locale}/contact", label: t.contact },
  ] as const;

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10 h-24">
        <LocaleLink to="/{-$locale}" onClick={() => setOpen(false)} aria-label="Jeitinho Blog" className="flex items-center gap-3">
          <img src={logo} alt="Jeitinho" className="h-20 w-auto shrink-0 object-contain" />
          <span className="tracked-caps text-[13px] text-terracotta">BLOG</span>
        </LocaleLink>

        {/*
          Un seul point d'entrée vers les articles : le menu « Explorer », qui mène soit
          vers /blog (tout voir), soit vers une catégorie, regroupée par pilier éditorial.
        */}
        <nav className="hidden lg:flex items-center gap-8">
          <LocaleLink to="/{-$locale}" className={NAV_LINK} activeOptions={{ exact: true }} activeProps={NAV_ACTIVE}>
            {t.home}
          </LocaleLink>

          <div ref={dropdownRef} className="relative">
            <button onClick={() => setCatsOpen((v) => !v)} className={`flex items-center gap-1 ${NAV_LINK}`}>
              {t.explore}
              <ChevronDown className={`h-4 w-4 transition-transform ${catsOpen ? "rotate-180" : ""}`} />
            </button>

            {catsOpen && (
              <div className="absolute left-1/2 top-full mt-5 -translate-x-1/2 w-[820px] rounded border border-border bg-background shadow-xl p-6">
                <div className="grid grid-cols-3 gap-x-8 gap-y-6">
                  {grouped.map(({ pillar, categories }) => (
                    <div key={pillar.slug}>
                      <p className="tracked-caps text-[10px] text-terracotta mb-2">{pillar.name}</p>
                      <div className="flex flex-col gap-1.5">
                        {categories.map((c) => (
                          <LocaleLink
                            key={c.slug}
                            to="/{-$locale}/blog/categorie/$slug"
                            params={{ slug: c.slug }}
                            onClick={() => setCatsOpen(false)}
                            className="text-sm hover:text-terracotta transition-colors"
                          >
                            {c.name}
                          </LocaleLink>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-5 border-t border-border">
                  <LocaleLink to="/{-$locale}/blog" onClick={() => setCatsOpen(false)} className="tracked-caps text-[12px] text-terracotta hover:text-terracotta-deep">
                    {t.all}
                  </LocaleLink>
                </div>
              </div>
            )}
          </div>

          {after.map((item) => (
            <LocaleLink key={item.to} to={item.to} className={NAV_LINK} activeProps={NAV_ACTIVE}>
              {item.label}
            </LocaleLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <LanguageSelector />
          <a
            href={bookUrl}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 rounded bg-primary px-5 py-3 tracked-caps text-[11px] text-primary-foreground hover:bg-terracotta-deep transition-colors"
          >
            {t.conciergerie}
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        <div className="lg:hidden flex items-center gap-2">
          <LanguageSelector />
          <button
            onClick={() => setOpen((v) => !v)}
            className="p-2"
            aria-label={open ? t.closeMenu : t.openMenu}
            aria-expanded={open}
          >
            {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="flex flex-col px-5 py-4 gap-2">
            <LocaleLink to="/{-$locale}" onClick={() => setOpen(false)} className="tracked-caps text-sm py-3 border-b border-border/40">
              {t.home}
            </LocaleLink>

            <button
              onClick={() => setMobileCatsOpen((v) => !v)}
              className="flex items-center justify-between tracked-caps text-sm py-3 border-b border-border/40"
            >
              {t.explore}
              <ChevronDown className={`h-4 w-4 ${mobileCatsOpen ? "rotate-180" : ""}`} />
            </button>

            {mobileCatsOpen && (
              <div className="flex flex-col gap-5 py-4">
                {grouped.map(({ pillar, categories }) => (
                  <div key={pillar.slug}>
                    <p className="tracked-caps text-[10px] text-terracotta mb-2">{pillar.name}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {categories.map((c) => (
                        <LocaleLink
                          key={c.slug}
                          to="/{-$locale}/blog/categorie/$slug"
                          params={{ slug: c.slug }}
                          onClick={() => setOpen(false)}
                          className="text-sm py-1"
                        >
                          {c.name}
                        </LocaleLink>
                      ))}
                    </div>
                  </div>
                ))}
                <LocaleLink to="/{-$locale}/blog" onClick={() => setOpen(false)} className="tracked-caps text-[12px] text-terracotta">
                  {t.all}
                </LocaleLink>
              </div>
            )}

            {after.map((item) => (
              <LocaleLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="tracked-caps text-sm py-3 border-b border-border/40"
              >
                {item.label}
              </LocaleLink>
            ))}

            <a
              href={bookUrl}
              target="_blank"
              rel="noopener"
              className="mt-4 inline-flex items-center justify-center gap-2 rounded bg-primary px-5 py-3 tracked-caps text-sm text-primary-foreground"
            >
              {t.conciergerie}
              <ExternalLink className="h-4 w-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
