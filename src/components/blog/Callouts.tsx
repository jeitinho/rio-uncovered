import type { ReactNode } from "react";
import { Lightbulb, AlertTriangle, Info } from "lucide-react";

export function ConseilJeitinho({ title = "Le conseil Jeitinho", children }: { title?: string; children: ReactNode }) {
  return (
    <aside className="my-8 rounded-[3px] border-l-4 border-terracotta bg-cream-deep/60 px-6 py-5">
      <p className="tracked-caps text-[10px] text-terracotta flex items-center gap-2">
        <Lightbulb className="h-3.5 w-3.5" /> {title}
      </p>
      <p className="mt-2 text-foreground leading-relaxed">{children}</p>
    </aside>
  );
}

export function AEviter({ title = "À éviter", children }: { title?: string; children: ReactNode }) {
  return (
    <aside className="my-8 rounded-[3px] border-l-4 border-destructive bg-destructive/8 px-6 py-5">
      <p className="tracked-caps text-[10px] text-destructive flex items-center gap-2">
        <AlertTriangle className="h-3.5 w-3.5" /> {title}
      </p>
      <p className="mt-2 text-foreground leading-relaxed">{children}</p>
    </aside>
  );
}

export function BonASavoir({ title = "Bon à savoir", children }: { title?: string; children: ReactNode }) {
  return (
    <aside className="my-8 rounded-[3px] border-l-4 border-accent bg-accent/25 px-6 py-5">
      <p className="tracked-caps text-[10px] text-terracotta-deep flex items-center gap-2">
        <Info className="h-3.5 w-3.5" /> {title}
      </p>
      <p className="mt-2 text-foreground leading-relaxed">{children}</p>
    </aside>
  );
}
