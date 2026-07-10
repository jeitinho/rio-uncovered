import { Link } from "@tanstack/react-router";
import { Menu, X, ChevronDown, ExternalLink } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import logo from "@/assets/jeitinho-logo.png";
import { CATEGORIES } from "@/content/categories";
import { CONCIERGERIE_BOOK_URL } from "@/lib/site";

const NAV = [
  { to: "/", label: "Accueil" },
  { to: "/blog", label: "Articles" },
  { to: "/auteurs", label: "Équipe" },
  { to: "/a-propos", label: "À propos" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [catsOpen, setCatsOpen] = useState(false);
  const [mobileCatsOpen, setMobileCatsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setCatsOpen(false);
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-8 h-16 md:h-20">
        <Link
          to="/"
          className="flex items-baseline gap-2"
          onClick={() => setOpen(false)}
          aria-label="Jeitinho Blog — accueil"
        >
          <img src={logo} alt="Jeitinho" className="h-8 md:h-9 w-auto" />
          <span className="tracked-caps text-[10px] md:text-[11px] text-terracotta">Blog</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          <Link
            to="/"
            className="tracked-caps text-[11px] text-foreground/80 hover:text-terracotta transition-colors"
            activeOptions={{ exact: true }}
            activeProps={{ className: "tracked-caps text-[11px] text-terracotta" }}
          >
            Accueil
          </Link>

          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setCatsOpen((v) => !v)}
              className="flex items-center gap-1 tracked-caps text-[11px] text-foreground/80 hover:text-terracotta transition-colors"
              aria-expanded={catsOpen}
              aria-haspopup="true"
            >
              Catégories <ChevronDown className={`h-3 w-3 transition-transform ${catsOpen ? "rotate-180" : ""}`} />
            </button>
            {catsOpen && (
              <div className="absolute left-1/2 top-full mt-4 -translate-x-1/2 w-[640px] rounded-[3px] border border-border bg-background shadow-lg p-6">
                <div className="grid grid-cols-3 gap-x-6 gap-y-2">
                  {CATEGORIES.map((c) => (
                    <Link
                      key={c.slug}
                      to="/blog/categorie/$slug"
                      params={{ slug: c.slug }}
                      onClick={() => setCatsOpen(false)}
                      className="text-sm text-foreground/80 hover:text-terracotta transition-colors py-1.5"
                    >
                      {c.name}
                    </Link>
                  ))}
                </div>
                <div className="mt-5 pt-4 border-t border-border">
                  <Link
                    to="/blog"
                    onClick={() => setCatsOpen(false)}
                    className="tracked-caps text-[10px] text-terracotta hover:text-terracotta-deep"
                  >
                    Voir tous les articles →
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link
            to="/blog"
            className="tracked-caps text-[11px] text-foreground/80 hover:text-terracotta transition-colors"
            activeProps={{ className: "tracked-caps text-[11px] text-terracotta" }}
          >
            Articles
          </Link>
          <Link
            to="/auteurs"
            className="tracked-caps text-[11px] text-foreground/80 hover:text-terracotta transition-colors"
            activeProps={{ className: "tracked-caps text-[11px] text-terracotta" }}
          >
            Équipe
          </Link>
          <Link
            to="/a-propos"
            className="tracked-caps text-[11px] text-foreground/80 hover:text-terracotta transition-colors"
            activeProps={{ className: "tracked-caps text-[11px] text-terracotta" }}
          >
            À propos
          </Link>
          <Link
            to="/contact"
            className="tracked-caps text-[11px] text-foreground/80 hover:text-terracotta transition-colors"
            activeProps={{ className: "tracked-caps text-[11px] text-terracotta" }}
          >
            Contact
          </Link>
        </nav>

        <div className="hidden lg:block">
          <a
            href={CONCIERGERIE_BOOK_URL}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-1.5 rounded-[3px] bg-primary px-4 py-2.5 tracked-caps text-[10px] text-primary-foreground hover:bg-terracotta-deep transition-colors"
          >
            Conciergerie <ExternalLink className="h-3 w-3" />
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 text-foreground"
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border/60 bg-background max-h-[80vh] overflow-y-auto">
          <nav className="flex flex-col px-5 py-4 gap-1">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="tracked-caps text-xs text-foreground/80 py-3 border-b border-border/40"
              >
                {item.label}
              </Link>
            ))}

            <button
              onClick={() => setMobileCatsOpen((v) => !v)}
              className="flex items-center justify-between tracked-caps text-xs text-foreground/80 py-3 border-b border-border/40"
              aria-expanded={mobileCatsOpen}
            >
              Catégories
              <ChevronDown className={`h-3.5 w-3.5 transition-transform ${mobileCatsOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileCatsOpen && (
              <div className="grid grid-cols-2 gap-x-4 gap-y-1 py-3 border-b border-border/40">
                {CATEGORIES.map((c) => (
                  <Link
                    key={c.slug}
                    to="/blog/categorie/$slug"
                    params={{ slug: c.slug }}
                    onClick={() => setOpen(false)}
                    className="text-sm text-foreground/80 py-1.5"
                  >
                    {c.name}
                  </Link>
                ))}
              </div>
            )}

            <a
              href={CONCIERGERIE_BOOK_URL}
              target="_blank"
              rel="noopener"
              className="mt-3 inline-flex items-center justify-center gap-1.5 rounded-[3px] bg-primary px-5 py-3 tracked-caps text-xs text-primary-foreground"
            >
              Conciergerie <ExternalLink className="h-3 w-3" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
