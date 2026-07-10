import { Mail } from "lucide-react";

export function Newsletter({ compact = false }: { compact?: boolean }) {
  return (
    <section className={`rounded-[3px] bg-cream-deep/60 ${compact ? "p-8" : "p-10 md:p-14"} text-center`}>
      <Mail className="mx-auto h-6 w-6 text-terracotta" />
      <h2 className={`mt-4 ${compact ? "text-2xl" : "text-3xl md:text-4xl"}`}>
        Nos meilleurs conseils, <em>directement chez vous.</em>
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
        Une lettre mensuelle avec une adresse secrète, un itinéraire, un guide. Zéro spam, jamais.
      </p>
      <form
        className="mx-auto mt-6 flex max-w-md flex-col sm:flex-row gap-2"
        onSubmit={(e) => { e.preventDefault(); }}
      >
        <input
          type="email"
          required
          placeholder="votre@email.com"
          className="flex-1 rounded-[3px] border border-border bg-card px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          aria-label="Votre email"
        />
        <button
          type="submit"
          className="rounded-[3px] bg-primary px-6 py-3 tracked-caps text-xs text-primary-foreground hover:bg-terracotta-deep transition-colors"
        >
          S'inscrire
        </button>
      </form>
    </section>
  );
}
