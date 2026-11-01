import { useNavigate } from "@tanstack/react-router";
import { useMemo, useState, useEffect, useRef } from "react";
import Fuse from "fuse.js";
import { Search } from "lucide-react";
import { getArticles } from "@/content/localized";
import { localeParam, useLocale } from "@/i18n/locale";
import { useDict } from "@/i18n/t";
import { LocaleLink } from "@/components/i18n/LocaleLink";

const dict = {
  fr: { placeholder: "Rechercher un guide, un quartier, un sujet…", aria: "Rechercher dans le guide Jeitinho" },
  en: { placeholder: "Search for a guide, a neighborhood, a topic…", aria: "Search the Jeitinho guide" },
  es: { placeholder: "Busca una guía, un barrio, un tema…", aria: "Buscar en la guía Jeitinho" },
  pt: { placeholder: "Procure um guia, um bairro, um assunto…", aria: "Pesquisar no guia Jeitinho" },
  it: { placeholder: "Cerca una guida, un quartiere, un argomento…", aria: "Cerca nella guida Jeitinho" },
  de: { placeholder: "Guide, Viertel oder Thema suchen…", aria: "Im Jeitinho-Guide suchen" },
  ru: { placeholder: "Найти гид, район, тему…", aria: "Поиск по гиду Jeitinho" },
};

export function BlogSearch({ compact = false }: { compact?: boolean }) {
  const locale = useLocale();
  const t = useDict(dict);
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const nav = useNavigate();
  const ref = useRef<HTMLDivElement>(null);

  const fuse = useMemo(() => {
    const items = getArticles(locale).map((a) => ({
      slug: a.slug,
      title: a.title,
      description: a.description,
      tags: a.tags.join(" "),
    }));
    return new Fuse(items, { keys: ["title", "description", "tags"], threshold: 0.4 });
  }, [locale]);

  const results = useMemo(() => (q.length < 2 ? [] : fuse.search(q).slice(0, 5)), [q, fuse]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (q) nav({ to: "/{-$locale}/blog/recherche", params: localeParam(locale), search: { q } });
        }}
        className="relative"
      >
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <input
          type="search"
          value={q}
          onChange={(e) => { setQ(e.target.value); setOpen(true); }}
          onFocus={() => setOpen(true)}
          placeholder={t.placeholder}
          className={`w-full rounded-[3px] border border-border bg-card/90 pl-11 pr-4 ${compact ? "py-2.5 text-sm" : "py-4"} text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring transition-shadow`}
          aria-label={t.aria}
        />
      </form>
      {open && results.length > 0 && (
        <div className="absolute z-30 left-0 right-0 mt-2 rounded-[3px] border border-border bg-card shadow-xl overflow-hidden">
          {results.map((r) => (
            <LocaleLink
              key={r.item.slug}
              to="/{-$locale}/blog/$slug"
              params={{ slug: r.item.slug }}
              onClick={() => setOpen(false)}
              className="block px-4 py-3 hover:bg-cream-deep/60 border-b border-border/50 last:border-none"
            >
              <p className="text-sm font-medium text-foreground">{r.item.title}</p>
              <p className="mt-0.5 text-xs text-muted-foreground line-clamp-1">{r.item.description}</p>
            </LocaleLink>
          ))}
        </div>
      )}
    </div>
  );
}
