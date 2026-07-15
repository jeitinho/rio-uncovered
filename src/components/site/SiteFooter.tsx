import { Link } from "@tanstack/react-router";
import { Instagram, ExternalLink, Mail } from "lucide-react";
import logo from "@/assets/jeitinho-logo.png";
import { getCategoriesByPillar } from "@/content/categories";
import { CONCIERGERIE_URL, CONTACT_EMAIL, INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/lib/site";

export function SiteFooter() {
  // AVANT : CATEGORIES.slice(0, 8) / .slice(8) — un découpage arbitraire par position.
  // APRÈS : regroupement par pilier éditorial (voir src/content/categories.ts).
  const grouped = getCategoriesByPillar();

  return (
    <footer className="mt-32 border-t border-border/60 bg-cream-deep/40">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-3">
            <Link to="/" className="flex items-baseline gap-2">
              <img src={logo} alt="Jeitinho" className="h-9 w-auto" />
              <span className="tracked-caps text-[11px] text-terracotta">Blog</span>
            </Link>
            <p className="mt-4 max-w-md text-sm text-muted-foreground leading-relaxed">
              Le média francophone sur Rio de Janeiro. Conseils, itinéraires, adresses et interviews par des locaux <em className="italic text-terracotta">passionnés.</em>
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
                      <Link to="/blog/categorie/$slug" params={{ slug: c.slug }} className="hover:text-terracotta transition-colors">
                        {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="md:col-span-2">
            <p className="tracked-caps text-[10px] text-terracotta">Le média</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/blog" className="hover:text-terracotta transition-colors">Tous les articles</Link></li>
              <li><Link to="/auteurs" className="hover:text-terracotta transition-colors">Notre équipe</Link></li>
              <li><Link to="/manuel-jeitinho" className="hover:text-terracotta transition-colors">Manuel Jeitinho</Link></li>
              <li><Link to="/a-propos" className="hover:text-terracotta transition-colors">À propos</Link></li>
              <li><Link to="/contact" className="hover:text-terracotta transition-colors">Contact</Link></li>
              <li>
                <a href={CONCIERGERIE_URL} target="_blank" rel="noopener" className="inline-flex items-center gap-1 hover:text-terracotta transition-colors">
                  Conciergerie <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>
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
