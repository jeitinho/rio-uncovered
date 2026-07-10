import { Link } from "@tanstack/react-router";
import { Instagram, ExternalLink } from "lucide-react";
import logo from "@/assets/jeitinho-logo.png";
import { CATEGORIES } from "@/content/categories";

export function SiteFooter() {
  const primaryCats = CATEGORIES.slice(0, 8);
  const secondaryCats = CATEGORIES.slice(8);

  return (
    <footer className="mt-32 border-t border-border/60 bg-cream-deep/40">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-1">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Jeitinho" className="h-9 w-auto" />
            <span className="flex items-baseline gap-1.5">
              <span className="font-serif text-2xl">Jeitinho</span>
              <span className="tracked-caps text-[10px] text-terracotta">Blog</span>
            </span>
          </Link>
          <p className="mt-4 max-w-md text-sm text-muted-foreground leading-relaxed">
            Le guide francophone de Rio de Janeiro. Conseils, itinéraires, adresses et interviews par des locaux <em className="italic text-terracotta">passionnés.</em>
          </p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm text-foreground/80 hover:text-terracotta transition-colors"
          >
            <Instagram className="h-4 w-4" /> @jeitinho.br
          </a>
        </div>

        <div>
          <p className="tracked-caps text-[10px] text-terracotta">Catégories</p>
          <ul className="mt-4 space-y-2 text-sm">
            {primaryCats.map((c) => (
              <li key={c.slug}>
                <Link to="/blog/categorie/$slug" params={{ slug: c.slug }} className="hover:text-terracotta transition-colors">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="tracked-caps text-[10px] text-terracotta">Plus</p>
          <ul className="mt-4 space-y-2 text-sm">
            {secondaryCats.map((c) => (
              <li key={c.slug}>
                <Link to="/blog/categorie/$slug" params={{ slug: c.slug }} className="hover:text-terracotta transition-colors">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="tracked-caps text-[10px] text-terracotta">Le site</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/blog" className="hover:text-terracotta transition-colors">Tous les articles</Link></li>
            <li><Link to="/a-propos" className="hover:text-terracotta transition-colors">À propos</Link></li>
            <li><Link to="/contact" className="hover:text-terracotta transition-colors">Contact & partenariats</Link></li>
            <li>
              <a href="https://www.jeitinho.fr" target="_blank" rel="noopener" className="inline-flex items-center gap-1 hover:text-terracotta transition-colors">
                Conciergerie <ExternalLink className="h-3 w-3" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-6 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Jeitinho — Tous droits réservés.</p>
          <p className="tracked-caps text-[10px]">Feito com carinho no Rio</p>
        </div>
      </div>
    </footer>
  );
}
