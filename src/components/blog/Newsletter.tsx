import { Mail } from "lucide-react";
import { useDict } from "@/i18n/t";

const dict = {
  fr: { title: "Nos meilleurs conseils, ", titleEm: "directement chez vous.", body: "Une lettre mensuelle avec une adresse secrète, un itinéraire, un guide. Zéro spam, jamais.", placeholder: "votre@email.com", aria: "Votre email", cta: "S'inscrire" },
  en: { title: "Our best tips, ", titleEm: "straight to your inbox.", body: "A monthly letter with a secret address, an itinerary, a guide. Zero spam, ever.", placeholder: "you@email.com", aria: "Your email", cta: "Subscribe" },
  es: { title: "Nuestros mejores consejos, ", titleEm: "directamente en tu correo.", body: "Una carta mensual con una dirección secreta, un itinerario, una guía. Cero spam, nunca.", placeholder: "tu@email.com", aria: "Tu email", cta: "Suscribirme" },
  pt: { title: "Nossas melhores dicas, ", titleEm: "direto no seu e-mail.", body: "Uma carta mensal com um endereço secreto, um roteiro, um guia. Zero spam, nunca.", placeholder: "seu@email.com", aria: "Seu e-mail", cta: "Inscrever-me" },
  it: { title: "I nostri consigli migliori, ", titleEm: "direttamente nella tua casella.", body: "Una lettera al mese con un indirizzo segreto, un itinerario, una guida. Zero spam, mai.", placeholder: "tua@email.com", aria: "La tua email", cta: "Iscriviti" },
  de: { title: "Unsere besten Tipps, ", titleEm: "direkt in Ihr Postfach.", body: "Ein monatlicher Brief mit einer Geheimadresse, einer Reiseroute, einem Guide. Kein Spam, niemals.", placeholder: "ihre@email.de", aria: "Ihre E-Mail-Adresse", cta: "Abonnieren" },
  ru: { title: "Лучшие советы — ", titleEm: "прямо в вашу почту.", body: "Раз в месяц — письмо с секретным адресом, маршрутом и гидом. Никакого спама.", placeholder: "vash@email.com", aria: "Ваш email", cta: "Подписаться" },
};

export function Newsletter({ compact = false }: { compact?: boolean }) {
  const t = useDict(dict);
  return (
    <section className={`rounded-[3px] bg-cream-deep/60 ${compact ? "p-8" : "p-10 md:p-14"} text-center`}>
      <Mail className="mx-auto h-6 w-6 text-terracotta" />
      <h2 className={`mt-4 ${compact ? "text-2xl" : "text-3xl md:text-4xl"}`}>
        {t.title}<em>{t.titleEm}</em>
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-muted-foreground">{t.body}</p>
      <form className="mx-auto mt-6 flex max-w-md flex-col sm:flex-row gap-2" onSubmit={(e) => { e.preventDefault(); }}>
        <input
          type="email"
          required
          placeholder={t.placeholder}
          className="flex-1 rounded-[3px] border border-border bg-card px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          aria-label={t.aria}
        />
        <button
          type="submit"
          className="rounded-[3px] bg-primary px-6 py-3 tracked-caps text-xs text-primary-foreground hover:bg-terracotta-deep transition-colors"
        >
          {t.cta}
        </button>
      </form>
    </section>
  );
}
