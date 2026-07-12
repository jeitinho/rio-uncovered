import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function FAQ({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="my-12">
      <h2 className="text-3xl">Questions <em>fréquentes</em></h2>
      <div className="mt-6 divide-y divide-border">
        {items.map((it, i) => {
          const isOpen = open === i;
          return (
            <div key={i} className="py-4">
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 text-left group"
                aria-expanded={isOpen}
              >
                <span className="font-medium text-foreground group-hover:text-terracotta transition-colors">
                  {it.q}
                </span>
                <ChevronDown className={`h-4 w-4 text-terracotta shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`} />
              </button>
              {isOpen && <div className="mt-3 text-muted-foreground leading-relaxed"><div dangerouslySetInnerHTML={{ __html: it.a }} /></div>}
            </div>
          );
        })}
      </div>
    </section>
  );
}
