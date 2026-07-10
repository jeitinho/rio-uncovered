import type { RelatedService } from "@/content/types";
import { ArrowRight } from "lucide-react";

export function ServiceCTA({ services }: { services: RelatedService[] }) {
  if (!services?.length) return null;
  return (
    <section className="my-12 rounded-[3px] bg-ink text-cream p-8 md:p-10">
      <p className="tracked-caps text-[10px] text-peach">Passer à l'action</p>
      <h2 className="mt-3 text-3xl text-cream">
        <em className="text-peach">Jeitinho</em>, votre concierge à Rio.
      </h2>
      <p className="mt-3 text-cream/80 max-w-2xl">
        Ce blog vous inspire ? Notre équipe organise votre séjour sur mesure depuis <a href="https://www.jeitinho.fr" target="_blank" rel="noopener" className="underline decoration-peach underline-offset-4">jeitinho.fr</a>.
      </p>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {services.map((s) => {
          const external = /^https?:\/\//.test(s.href);
          const commonClass = "group rounded-[3px] border border-cream/15 p-5 hover:border-peach hover:bg-cream/5 transition-colors block";
          const inner = (
            <>
              <p className="text-cream font-medium">{s.label}</p>
              <p className="mt-1.5 text-sm text-cream/70 leading-relaxed">{s.description}</p>
              <p className="mt-3 inline-flex items-center gap-1.5 tracked-caps text-[10px] text-peach group-hover:gap-2.5 transition-all">
                Découvrir <ArrowRight className="h-3 w-3" />
              </p>
            </>
          );
          return external ? (
            <a key={s.href + s.label} href={s.href} target="_blank" rel="noopener" className={commonClass}>{inner}</a>
          ) : (
            <a key={s.href + s.label} href={s.href} className={commonClass}>{inner}</a>
          );
        })}
      </div>
    </section>
  );
}
