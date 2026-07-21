// src/routes/api.partenaires.ts
//
// Reçoit la candidature du formulaire /partenaires, rend l'email avec le même
// template React Email que jeitinho.fr (src/emails/candidature-partenaire.tsx),
// et l'envoie via Resend à blog@jeitinho.fr avec les médias en pièces jointes.
//
// ⚠️ Si ce fichier ne compile pas tel quel : la syntaxe exacte des routes serveur
// TanStack Start dépend de la version du projet. Colle-moi le contenu de
// src/routes/sitemap[.]xml.ts (route serveur qui fonctionne déjà chez toi)
// et j'ajuste la syntaxe pour qu'elle corresponde exactement.

import { createFileRoute } from "@tanstack/react-router";
import { render } from "@react-email/components";
import { template as candidaturePartenaire } from "@/emails/candidature-partenaire";

type PartnerMedia = {
  filename: string;
  contentType: string;
  base64: string; // sans le préfixe "data:...;base64,"
};

type PartnerPayload = {
  etablissement: string;
  responsable: string;
  email: string;
  telephone: string;
  summary?: Array<{ label: string; value: string }>;
  message?: string;
  medias?: PartnerMedia[];
};

export const Route = createFileRoute("/api/partenaires")({
  server: {
    handlers: {
      POST: async ({ request }: { request: Request }) => {
        let payload: PartnerPayload;

        try {
          payload = (await request.json()) as PartnerPayload;
        } catch {
          return new Response(JSON.stringify({ ok: false, error: "Corps de requête invalide" }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
          });
        }

        if (!payload.etablissement || !payload.email || !payload.telephone) {
          return new Response(JSON.stringify({ ok: false, error: "Champs obligatoires manquants" }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
          });
        }

        // Rendu du même composant React Email que côté jeitinho.fr
        const html = await render(candidaturePartenaire.component(payload));
        const subject =
          typeof candidaturePartenaire.subject === "function"
            ? candidaturePartenaire.subject(payload)
            : candidaturePartenaire.subject;

        const attachments = (payload.medias ?? []).map((m) => ({
          filename: m.filename,
          content: m.base64,
        }));

        const resendResponse = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "Portail Partenaires Jeitinho <partenaires@media.jeitinho.fr>",
            to: [candidaturePartenaire.to ?? "blog@jeitinho.fr"],
            reply_to: payload.email,
            subject,
            html,
            attachments,
          }),
        });

        if (!resendResponse.ok) {
          const errorText = await resendResponse.text();
          return new Response(JSON.stringify({ ok: false, error: errorText }), {
            status: 502,
            headers: { "Content-Type": "application/json" },
          });
        }

        return new Response(JSON.stringify({ ok: true }), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        });
      },
    },
  },
});
