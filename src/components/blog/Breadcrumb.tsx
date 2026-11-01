import { ChevronRight } from "lucide-react";
import { useDict } from "@/i18n/t";
import { LocaleLink } from "@/components/i18n/LocaleLink";

const ARIA = { fr: "Fil d'Ariane", en: "Breadcrumb", es: "Ruta de navegación", pt: "Trilha de navegação", it: "Percorso di navigazione", de: "Brotkrumennavigation", ru: "Навигационная цепочка" };

type Crumb = { label: string; to?: "/{-$locale}" | "/{-$locale}/blog" };

export function Breadcrumb({ items }: { items: Crumb[] }) {
  const aria = useDict(ARIA);
  return (
    <nav aria-label={aria} className="flex items-center flex-wrap gap-1.5 text-xs text-muted-foreground">
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1.5">
          {i > 0 && <ChevronRight className="h-3 w-3 opacity-60" />}
          {item.to ? (
            <LocaleLink to={item.to} className="hover:text-terracotta transition-colors">
              {item.label}
            </LocaleLink>
          ) : (
            <span className="text-foreground/80">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
