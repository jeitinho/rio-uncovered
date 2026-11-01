import type { RelatedService } from "@/content/types";
import { ArrowRight } from "lucide-react";
import { conciergerieUrl } from "@/lib/localize-links";
import { useLocale } from "@/i18n/locale";
import { useDict } from "@/i18n/t";

const dict = {
  fr: { eyebrow: "Passer à l'action", title: ", votre concierge à Rio.", body: "Ce blog vous inspire ? Notre équipe organise votre séjour sur mesure depuis", discover: "Découvrir" },
  en: { eyebrow: "Make it happen", title: ", your concierge in Rio.", body: "Inspired by the blog? Our team plans your tailor-made trip from", discover: "Discover" },
  es: { eyebrow: "Pasa a la acción", title: ", tu concierge en Río.", body: "¿Te inspira este blog? Nuestro equipo organiza tu viaje a medida desde", discover: "Descubrir" },
  pt: { eyebrow: "Hora de agir", title: ", seu concierge no Rio.", body: "Gostou do blog? Nossa equipe organiza sua viagem sob medida pelo", discover: "Conhecer" },
  it: { eyebrow: "Passa all'azione", title: ", il tuo concierge a Rio.", body: "Il blog ti ispira? Il nostro team organizza il tuo viaggio su misura da", discover: "Scopri" },
  de: { eyebrow: "Jetzt loslegen", title: ", Ihr Concierge in Rio.", body: "Lust bekommen? Unser Team plant Ihre maßgeschneiderte Reise über", discover: "Entdecken" },
  ru: { eyebrow: "От идеи к поездке", title: " — ваш консьерж в Рио.", body: "Вдохновились блогом? Наша команда организует индивидуальную поездку через", discover: "Подробнее" },
};

/** `services` est déjà dans la langue de la page (voir localizeArticleMeta). */
export function ServiceCTA({ services }: { services: RelatedService[] }) {
  const locale = useLocale();
  const t = useDict(dict);
  if (!services?.length) return null;
  return (
    <section className="my-12 rounded-[3px] bg-ink text-cream p-8 md:p-10">
      <p className="tracked-caps text-[10px] text-peach">{t.eyebrow}</p>
      <h2 className="mt-3 text-3xl text-cream">
        <em className="text-peach">Jeitinho</em>{t.title}
      </h2>
      <p className="mt-3 text-cream/80 max-w-2xl">
        {t.body}{" "}
        <a href={conciergerieUrl("https://jeitinho.fr", locale)} target="_blank" rel="noopener" className="underline decoration-peach underline-offset-4">jeitinho.fr</a>.
      </p>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {services.map((s) => {
          const href = conciergerieUrl(s.href, locale);
          const external = /^https?:\/\//.test(href);
          return (
            <a
              key={s.href + s.label}
              href={href}
              {...(external ? { target: "_blank", rel: "noopener" } : {})}
              className="group rounded-[3px] border border-cream/15 p-5 hover:border-peach hover:bg-cream/5 transition-colors block"
            >
              <p className="text-cream font-medium">{s.label}</p>
              <p className="mt-1.5 text-sm text-cream/70 leading-relaxed">{s.description}</p>
              <p className="mt-3 inline-flex items-center gap-1.5 tracked-caps text-[10px] text-peach group-hover:gap-2.5 transition-all">
                {t.discover} <ArrowRight className="h-3 w-3" />
              </p>
            </a>
          );
        })}
      </div>
    </section>
  );
}
