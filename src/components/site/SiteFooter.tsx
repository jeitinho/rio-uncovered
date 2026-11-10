import { Instagram, ExternalLink, Mail } from "lucide-react";
import logo from "@/assets/jeitinho-logo.png";
import { getCategoriesByPillarIn } from "@/content/localized-categories";
import { CONCIERGERIE_URL, CONTACT_EMAIL, INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/lib/site";
import { conciergerieUrl } from "@/lib/localize-links";
import { useLocale } from "@/i18n/locale";
import { useDict } from "@/i18n/t";
import { LocaleLink } from "@/components/i18n/LocaleLink";

const dict = {
  fr: { tagline: "Le média sur Rio de Janeiro, en sept langues. Conseils, itinéraires, adresses et interviews par des locaux", taglineEm: "passionnés.", media: "Le média", all: "Tous les articles", team: "Notre équipe", manuel: "Manuel Jeitinho", about: "À propos", contact: "Contact", conciergerie: "Conciergerie", rights: "Tous droits réservés." },
  en: { tagline: "The Rio de Janeiro magazine, in seven languages. Tips, itineraries, addresses and interviews by", taglineEm: "passionate locals.", media: "The magazine", all: "All articles", team: "Our team", manuel: "Manuel Jeitinho", about: "About", contact: "Contact", conciergerie: "Concierge", rights: "All rights reserved." },
  es: { tagline: "El medio sobre Río de Janeiro, en siete idiomas. Consejos, itinerarios, direcciones y entrevistas de locales", taglineEm: "apasionados.", media: "El medio", all: "Todos los artículos", team: "Nuestro equipo", manuel: "Manuel Jeitinho", about: "Quiénes somos", contact: "Contacto", conciergerie: "Conciergería", rights: "Todos los derechos reservados." },
  pt: { tagline: "O veículo sobre o Rio de Janeiro, em sete idiomas. Dicas, roteiros, endereços e entrevistas feitos por locais", taglineEm: "apaixonados.", media: "O veículo", all: "Todos os artigos", team: "Nossa equipe", manuel: "Manuel Jeitinho", about: "Sobre", contact: "Contato", conciergerie: "Concierge", rights: "Todos os direitos reservados." },
  it: { tagline: "Il magazine su Rio de Janeiro, in sette lingue. Consigli, itinerari, indirizzi e interviste firmati da gente del posto", taglineEm: "appassionata.", media: "Il magazine", all: "Tutti gli articoli", team: "Il nostro team", manuel: "Manuel Jeitinho", about: "Chi siamo", contact: "Contatti", conciergerie: "Concierge", rights: "Tutti i diritti riservati." },
  de: { tagline: "Das Magazin über Rio de Janeiro, in sieben Sprachen. Tipps, Reiserouten, Adressen und Interviews von", taglineEm: "leidenschaftlichen Einheimischen.", media: "Das Magazin", all: "Alle Artikel", team: "Unser Team", manuel: "Manuel Jeitinho", about: "Über uns", contact: "Kontakt", conciergerie: "Concierge", rights: "Alle Rechte vorbehalten." },
  ru: { tagline: "Журнал о Рио-де-Жанейро на семи языках. Советы, маршруты, адреса и интервью от", taglineEm: "влюблённых в город местных жителей.", media: "Журнал", all: "Все статьи", team: "Наша команда", manuel: "Manuel Jeitinho", about: "О нас", contact: "Контакты", conciergerie: "Консьерж", rights: "Все права защищены." },
};

export function SiteFooter() {
  const locale = useLocale();
  const t = useDict(dict);
  const grouped = getCategoriesByPillarIn(locale);

  return (
    <footer className="mt-32 border-t border-border/60 bg-cream-deep/40">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-3">
            <LocaleLink to="/{-$locale}" className="flex items-baseline gap-2">
              <img src={logo} alt="Jeitinho" className="h-9 w-auto" />
              <span className="tracked-caps text-[11px] text-terracotta">Blog</span>
            </LocaleLink>
            <p className="mt-4 max-w-md text-sm text-muted-foreground leading-relaxed">
              {t.tagline} <em className="italic text-terracotta">{t.taglineEm}</em>
            </p>
            <div className="mt-6 flex flex-col gap-2 text-sm">
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-foreground/80 hover:text-terracotta transition-colors">
                <Instagram className="h-4 w-4" /> {INSTAGRAM_HANDLE}
              </a>
              <a href={`mailto:${CONTACT_EMAIL}`} className="inline-flex items-center gap-2 text-foreground/80 hover:text-terracotta transition-colors">
                <Mail className="h-4 w-4" /> {CONTACT_EMAIL}
              </a>
            </div>
          </div>

          <div className="md:col-span-7 grid gap-8 grid-cols-2 lg:grid-cols-3">
            {grouped.map(({ pillar, categories }) => (
              <div key={pillar.slug}>
                <p className="tracked-caps text-[10px] text-terracotta">{pillar.name}</p>
                <ul className="mt-4 space-y-2 text-sm">
                  {categories.map((c) => (
                    <li key={c.slug}>
                      <LocaleLink to="/{-$locale}/blog/categorie/$slug" params={{ slug: c.slug }} className="hover:text-terracotta transition-colors">
                        {c.name}
                      </LocaleLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="md:col-span-2">
            <p className="tracked-caps text-[10px] text-terracotta">{t.media}</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li><LocaleLink to="/{-$locale}/blog" className="hover:text-terracotta transition-colors">{t.all}</LocaleLink></li>
              <li><LocaleLink to="/{-$locale}/auteurs" className="hover:text-terracotta transition-colors">{t.team}</LocaleLink></li>
              <li><LocaleLink to="/{-$locale}/manuel-jeitinho" className="hover:text-terracotta transition-colors">{t.manuel}</LocaleLink></li>
              <li><LocaleLink to="/{-$locale}/a-propos" className="hover:text-terracotta transition-colors">{t.about}</LocaleLink></li>
              <li><LocaleLink to="/{-$locale}/contact" className="hover:text-terracotta transition-colors">{t.contact}</LocaleLink></li>
              <li>
                <a href={conciergerieUrl(CONCIERGERIE_URL, locale)} target="_blank" rel="noopener" className="inline-flex items-center gap-1 hover:text-terracotta transition-colors">
                  {t.conciergerie} <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-6 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Jeitinho — {t.rights}</p>
          <p className="tracked-caps text-[10px]" lang="pt-BR">Feito com carinho no Rio</p>
        </div>
      </div>
    </footer>
  );
}
