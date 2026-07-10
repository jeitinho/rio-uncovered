import { useEffect, useState } from "react";

interface TocItem { id: string; text: string; level: 2 | 3 }

export function TableOfContents({ items }: { items: TocItem[] }) {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    items.forEach((i) => {
      const el = document.getElementById(i.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  return (
    <nav aria-label="Sommaire" className="sticky top-24">
      <p className="tracked-caps text-[10px] text-terracotta">Sommaire</p>
      <ul className="mt-3 space-y-1.5 text-sm">
        {items.map((it) => (
          <li key={it.id} className={it.level === 3 ? "pl-4" : ""}>
            <a
              href={`#${it.id}`}
              className={`block leading-snug transition-colors ${
                active === it.id ? "text-terracotta font-medium" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {it.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
