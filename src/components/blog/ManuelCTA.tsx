import { ArrowRight, BookOpen } from "lucide-react";
import { MANUEL_URL } from "@/lib/site";

/** Encart Manuel affiché en fin de chaque article (gabarit blog.$slug). */
export function ManuelCTA() {
  return (
    <aside className="mt-12 rounded-[3px] border border-terracotta/30 bg-cream-deep/40 p-8 md:p-10">
      <p className="tracked-caps text-[10px] text-terracotta inline-flex items-center gap-2">
        <BookOpen className="h-3.5 w-3.5" /> Le guide Jeitinho
      </p>
      <h2 className="mt-3 text-3xl">
        Le <em className="italic text-terracotta">Manuel JEITINHO</em>
      </h2>
      <p className="mt-3 text-foreground/85 leading-relaxed max-w-2xl">
        Quartiers, sécurité, plages, sorties et itinéraires prêts à l'emploi : tout ce qu'on aurait aimé savoir avant d'arriver à Rio. 79 pages, en 4 langues.
      </p>
      <a
        href={MANUEL_URL}
        className="mt-6 inline-flex items-center gap-2 rounded-[3px] bg-primary px-6 py-3.5 tracked-caps text-xs text-primary-foreground hover:bg-terracotta-deep transition-colors"
      >
        Découvrir le Manuel — 30 € <ArrowRight className="h-3 w-3" />
      </a>
    </aside>
  );
}
