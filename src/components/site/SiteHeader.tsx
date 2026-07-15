import { Link } from "@tanstack/react-router";
import { Menu, X, ChevronDown, ExternalLink } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import logo from "@/assets/jeitinho-logo.png";
import { getCategoriesByPillar } from "@/content/categories";
import { CONCIERGERIE_BOOK_URL } from "@/lib/site";

const NAV = [
  { to: "/", label: "Accueil" },
  { to: "/a-propos", label: "À propos" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [catsOpen, setCatsOpen] = useState(false);
  const [mobileCatsOpen, setMobileCatsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const grouped = getCategoriesByPillar();

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setCatsOpen(false);
      }
    }

    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10 h-24">

        <Link
          to="/"
          onClick={() => setOpen(false)}
          aria-label="Jeitinho Blog"
          className="flex items-center gap-3"
        >
          <img
            src={logo}
            alt="Jeitinho"
            className="h-20 w-auto shrink-0 object-contain"
          />

          <span className="tracked-caps text-[13px] text-terracotta">
            BLOG
          </span>
        </Link>

        {/*
          NOTE STRUCTURELLE : "Catégories" (dropdown) et "Articles" (/blog) pointaient
          vers deux entrées de nav distinctes pour un contenu quasi identique.
          On fusionne en un seul point d'entrée : le dropdown "Explorer" ci-dessous,
          qui mène soit vers /blog (tout voir), soit vers une catégorie précise,
          regroupée par pilier éditorial plutôt qu'à plat.
        */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link
            to="/"
            className="tracked-caps text-[13px] text-foreground/80 hover:text-terracotta transition-colors"
            activeOptions={{ exact: true }}
            activeProps={{
              className: "tracked-caps text-[13px] text-terracotta",
            }}
          >
            Accueil
          </Link>

          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setCatsOpen((v) => !v)}
              className="flex items-center gap-1 tracked-caps text-[13px] text-foreground/80 hover:text-terracotta transition-colors"
            >
              Explorer

              <ChevronDown
                className={`h-4 w-4 transition-transform ${
                  catsOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {catsOpen && (
              <div className="absolute left-1/2 top-full mt-5 -translate-x-1/2 w-[820px] rounded border border-border bg-background shadow-xl p-6">

                <div className="grid grid-cols-3 gap-x-8 gap-y-6">
                  {grouped.map(({ pillar, categories }) => (
                    <div key={pillar.slug}>
                      <p className="tracked-caps text-[10px] text-terracotta mb-2">
                        {pillar.name}
                      </p>
                      <div className="flex flex-col gap-1.5">
                        {categories.map((c) => (
                          <Link
                            key={c.slug}
                            to="/blog/categorie/$slug"
                            params={{ slug: c.slug }}
                            onClick={() => setCatsOpen(false)}
                            className="text-sm hover:text-terracotta transition-colors"
                          >
                            {c.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-5 border-t border-border">
                  <Link
                    to="/blog"
                    onClick={() => setCatsOpen(false)}
                    className="tracked-caps text-[12px] text-terracotta hover:text-terracotta-deep"
                  >
                    Voir tous les articles →
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link
            to="/a-propos"
            className="tracked-caps text-[13px] text-foreground/80 hover:text-terracotta transition-colors"
            activeProps={{
              className: "tracked-caps text-[13px] text-terracotta",
            }}
          >
            À propos
          </Link>

          <Link
            to="/contact"
            className="tracked-caps text-[13px] text-foreground/80 hover:text-terracotta transition-colors"
            activeProps={{
              className: "tracked-caps text-[13px] text-terracotta",
            }}
          >
            Contact
          </Link>
        </nav>

        <div className="hidden lg:block">
          <a
            href={CONCIERGERIE_BOOK_URL}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 rounded bg-primary px-5 py-3 tracked-caps text-[11px] text-primary-foreground hover:bg-terracotta-deep transition-colors"
          >
            Conciergerie

            <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2"
        >
          {open ? (
            <X className="h-7 w-7" />
          ) : (
            <Menu className="h-7 w-7" />
          )}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">

          <nav className="flex flex-col px-5 py-4 gap-2">

            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="tracked-caps text-sm py-3 border-b border-border/40"
              >
                {item.label}
              </Link>
            ))}

            <button
              onClick={() => setMobileCatsOpen((v) => !v)}
              className="flex items-center justify-between tracked-caps text-sm py-3 border-b border-border/40"
            >
              Explorer

              <ChevronDown
                className={`h-4 w-4 ${
                  mobileCatsOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {mobileCatsOpen && (
              <div className="flex flex-col gap-5 py-4">
                {grouped.map(({ pillar, categories }) => (
                  <div key={pillar.slug}>
                    <p className="tracked-caps text-[10px] text-terracotta mb-2">
                      {pillar.name}
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {categories.map((c) => (
                        <Link
                          key={c.slug}
                          to="/blog/categorie/$slug"
                          params={{ slug: c.slug }}
                          onClick={() => setOpen(false)}
                          className="text-sm py-1"
                        >
                          {c.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            <a
              href={CONCIERGERIE_BOOK_URL}
              target="_blank"
              rel="noopener"
              className="mt-4 inline-flex items-center justify-center gap-2 rounded bg-primary px-5 py-3 tracked-caps text-sm text-primary-foreground"
            >
              Conciergerie

              <ExternalLink className="h-4 w-4" />
            </a>

          </nav>

        </div>
      )}
    </header>
  );
}
