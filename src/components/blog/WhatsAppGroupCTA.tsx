import { MessageCircle } from "lucide-react";
import { WHATSAPP_GROUP_URL } from "@/lib/site";

/** Invitation au groupe WhatsApp d'entraide, en bas de chaque article. */
export function WhatsAppGroupCTA() {
  if (!/^https:\/\/chat\.whatsapp\.com\/\S+/.test(WHATSAPP_GROUP_URL)) return null;
  return (
    <section className="mt-12 rounded-[3px] border border-border bg-cream-deep/60 p-6 md:p-8">
      <p className="tracked-caps text-[10px] text-terracotta">Le Jeitinho de Rio · groupe WhatsApp</p>
      <h2 className="mt-2 text-2xl">Tu es à Rio ? Rejoins le groupe d'entraide.</h2>
      <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
        Bons plans gratuits, soirées du soir, conseils pratiques et coups de main entre francophones.
        Gratuit, bienveillant, sans pub.
      </p>
      <a
        href={WHATSAPP_GROUP_URL}
        target="_blank"
        rel="noopener"
        className="mt-5 inline-flex items-center gap-2 rounded-[3px] bg-terracotta px-5 py-3 text-sm text-cream transition-opacity hover:opacity-90"
      >
        <MessageCircle className="h-4 w-4" />
        Rejoindre le groupe
      </a>
    </section>
  );
}
