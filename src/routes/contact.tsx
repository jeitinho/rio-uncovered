import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Jeitinho, votre concierge à Rio" },
      { name: "description", content: "Contactez Jeitinho pour préparer votre voyage à Rio de Janeiro. Réponse sous 24h." },
      { property: "og:title", content: "Contact — Jeitinho" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="mx-auto max-w-2xl px-5 md:px-8 py-20 md:py-28 flex-1">
        <p className="tracked-caps text-[10px] text-terracotta">Contact</p>
        <h1 className="mt-4 text-5xl md:text-6xl">Parlez-nous de <em>votre voyage.</em></h1>
        <p className="mt-6 text-muted-foreground leading-relaxed">
          Dites-nous quelques mots sur vos envies. On revient vers vous en moins de 24 heures avec des idées concrètes.
        </p>

        {sent ? (
          <div className="mt-12 rounded-[3px] border border-terracotta bg-cream-deep p-8 text-center">
            <p className="tracked-caps text-[10px] text-terracotta">Message reçu</p>
            <p className="mt-3 text-xl">Merci ! Nous revenons vers vous très vite.</p>
          </div>
        ) : (
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="mt-12 space-y-5"
          >
            {[
              { name: "prenom", label: "Prénom", type: "text" },
              { name: "email", label: "Email", type: "email" },
              { name: "dates", label: "Dates approximatives", type: "text" },
            ].map((f) => (
              <div key={f.name}>
                <label htmlFor={f.name} className="tracked-caps text-[10px] text-terracotta">{f.label}</label>
                <input
                  id={f.name}
                  name={f.name}
                  type={f.type}
                  required
                  className="mt-2 w-full rounded-[3px] border border-border bg-card px-4 py-3 focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
            ))}
            <div>
              <label htmlFor="message" className="tracked-caps text-[10px] text-terracotta">Votre voyage en quelques mots</label>
              <textarea
                id="message" name="message" rows={5} required
                className="mt-2 w-full rounded-[3px] border border-border bg-card px-4 py-3 focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <button
              type="submit"
              className="rounded-[3px] bg-primary px-7 py-4 tracked-caps text-xs text-primary-foreground hover:bg-terracotta-deep transition-colors"
            >
              Envoyer →
            </button>
          </form>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}
