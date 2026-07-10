import { Link } from "@tanstack/react-router";
import { Instagram } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border/60 bg-cream-deep/40">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <h3 className="text-3xl">
            Jeitinho<span className="text-terracotta">.</span>
          </h3>
          <p className="mt-4 max-w-md text-sm text-muted-foreground leading-relaxed">
            Conciergerie et expériences authentiques à Rio de Janeiro,
            imaginées par des locaux passionnés. Découvrez le Brésil <em className="italic text-terracotta">autrement.</em>
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
          <p className="tracked-caps text-[10px] text-terracotta">Découvrir</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/experiences" className="hover:text-terracotta transition-colors">Expériences</Link></li>
            <li><Link to="/conciergerie" className="hover:text-terracotta transition-colors">Conciergerie</Link></li>
            <li><Link to="/blog" className="hover:text-terracotta transition-colors">Le Guide Jeitinho</Link></li>
            <li><Link to="/a-propos" className="hover:text-terracotta transition-colors">À propos</Link></li>
          </ul>
        </div>

        <div>
          <p className="tracked-caps text-[10px] text-terracotta">Contact</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/contact" className="hover:text-terracotta transition-colors">Nous écrire</Link></li>
            <li className="text-muted-foreground">Rio de Janeiro, Brésil</li>
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
