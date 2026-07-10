import { Link, useNavigate } from "@tanstack/react-router";
import { useMemo, useState, useEffect, useRef } from "react";
import Fuse from "fuse.js";
import { Search } from "lucide-react";
import { getAllArticles } from "@/content";

export function BlogSearch({ compact = false }: { compact?: boolean }) {
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const nav = useNavigate();
  const ref = useRef<HTMLDivElement>(null);

  const fuse = useMemo(() => {
    const items = getAllArticles().map((a) => ({
      slug: a.slug, title: a.title, description: a.description, tags: a.tags.join(" "),
    }));
    return new Fuse(items, { keys: ["title", "description", "tags"], threshold: 0.4 });
  }, []);

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
          if (q) nav({ to: "/blog/recherche", search: { q } });
        }}
        className="relative"
      >
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <input
          type="search"
          value={q}
          onChange={(e) => { setQ(e.target.value); setOpen(true); }}
          onFocus={() => setOpen(true)}
          placeholder="Rechercher un guide, un quartier, un sujet…"
          className={`w-full rounded-[3px] border border-border bg-card/90 pl-11 pr-4 ${compact ? "py-2.5 text-sm" : "py-4"} text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring transition-shadow`}
          aria-label="Rechercher dans le guide Jeitinho"
        />
      </form>
      {open && results.length > 0 && (
        <div className="absolute z-30 left-0 right-0 mt-2 rounded-[3px] border border-border bg-card shadow-xl overflow-hidden">
          {results.map((r) => (
            <Link
              key={r.item.slug}
              to="/blog/$slug"
              params={{ slug: r.item.slug }}
              onClick={() => setOpen(false)}
              className="block px-4 py-3 hover:bg-cream-deep/60 border-b border-border/50 last:border-none"
            >
              <p className="text-sm font-medium text-foreground">{r.item.title}</p>
              <p className="mt-0.5 text-xs text-muted-foreground line-clamp-1">{r.item.description}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
