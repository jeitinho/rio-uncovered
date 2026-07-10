import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/jeitinho-logo.png";

const NAV = [
  { to: "/experiences", label: "Expériences" },
  { to: "/conciergerie", label: "Conciergerie" },
  { to: "/blog", label: "Le Guide" },
  { to: "/a-propos", label: "À propos" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8 md:py-5">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <img src={logo} alt="Jeitinho" className="h-7 md:h-8 w-auto" />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="tracked-caps text-[11px] text-foreground/80 hover:text-terracotta transition-colors"
              activeProps={{ className: "tracked-caps text-[11px] text-terracotta" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            to="/contact"
            className="inline-flex items-center rounded-[3px] bg-primary px-5 py-2.5 tracked-caps text-[11px] text-primary-foreground hover:bg-terracotta-deep transition-colors"
          >
            Trouver un Jeitinho →
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 text-foreground"
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border/60 bg-background">
          <nav className="flex flex-col px-5 py-4 gap-4">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="tracked-caps text-xs text-foreground/80"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-[3px] bg-primary px-5 py-3 tracked-caps text-xs text-primary-foreground"
            >
              Trouver un Jeitinho →
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
