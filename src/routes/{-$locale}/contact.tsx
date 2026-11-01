import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { CONTACT_EMAIL, INSTAGRAM_HANDLE, INSTAGRAM_URL, CONCIERGERIE_URL } from "@/lib/site";
import { conciergerieUrl } from "@/lib/localize-links";
import { Mail, Instagram } from "lucide-react";
import { useState } from "react";
import { useLocale, type Locale } from "@/i18n/locale";
import { useDict } from "@/i18n/t";
import { localeFromParams, localeLinks, localizedUrl, ogLocaleMeta } from "@/i18n/seo";

const SEO: Record<Locale, { title: string; description: string; ogTitle: string; ogDescription: string }> = {
  fr: { title: "Contact & partenariats — Jeitinho", description: "Une idée d'article, une proposition d'interview, un partenariat ? Contactez la rédaction du média Jeitinho.", ogTitle: "Contact — Jeitinho Blog", ogDescription: "Idée d'article, interview, partenariat éditorial ou retour sur un guide : écrivez à la rédaction Jeitinho, on répond sous 48 heures." },
  en: { title: "Contact & partnerships — Jeitinho", description: "An idea for an article, an interview pitch, a partnership? Get in touch with the Jeitinho newsroom.", ogTitle: "Contact — Jeitinho Blog", ogDescription: "Article idea, interview, editorial partnership or feedback on a guide: write to the Jeitinho newsroom, we reply within 48 hours." },
  es: { title: "Contacto y colaboraciones — Jeitinho", description: "¿Una idea de artículo, una propuesta de entrevista, una colaboración? Contacta con la redacción de Jeitinho.", ogTitle: "Contacto — Jeitinho Blog", ogDescription: "Idea de artículo, entrevista, colaboración editorial o comentario sobre una guía: escribe a la redacción de Jeitinho, respondemos en 48 horas." },
  pt: { title: "Contato & parcerias — Jeitinho", description: "Uma ideia de artigo, uma proposta de entrevista, uma parceria? Fale com a redação da Jeitinho.", ogTitle: "Contato — Jeitinho Blog", ogDescription: "Ideia de artigo, entrevista, parceria editorial ou comentário sobre um guia: escreva para a redação da Jeitinho, respondemos em até 48 horas." },
  it: { title: "Contatti & collaborazioni — Jeitinho", description: "Un'idea per un articolo, una proposta di intervista, una collaborazione? Contatta la redazione di Jeitinho.", ogTitle: "Contatti — Jeitinho Blog", ogDescription: "Idea per un articolo, intervista, collaborazione editoriale o commento su una guida: scrivi alla redazione di Jeitinho, rispondiamo entro 48 ore." },
  de: { title: "Kontakt & Partnerschaften — Jeitinho", description: "Eine Artikelidee, ein Interviewvorschlag, eine Partnerschaft? Schreiben Sie der Jeitinho-Redaktion.", ogTitle: "Kontakt — Jeitinho Blog", ogDescription: "Artikelidee, Interview, redaktionelle Partnerschaft oder Feedback zu einem Guide: Schreiben Sie der Jeitinho-Redaktion, wir antworten innerhalb von 48 Stunden." },
  ru: { title: "Контакты и сотрудничество — Jeitinho", description: "Идея для статьи, предложение интервью, партнёрство? Напишите в редакцию Jeitinho.", ogTitle: "Контакты — Jeitinho Blog", ogDescription: "Идея статьи, интервью, редакционное партнёрство или отзыв о гиде: пишите в редакцию Jeitinho, мы отвечаем в течение 48 часов." },
};

const dict = {
  fr: { eyebrow: "Contact", h1: ["Une idée, un ", "partenariat ?"], lead: "Proposition d'article, interview, retour sur un guide, partenariat éditorial : écrivez-nous, on répond sous 48 h.", conciergerie: "Pour organiser votre séjour à Rio, notre service de conciergerie est sur", sentEyebrow: "Message reçu", sent: "Merci ! Nous revenons vers vous très vite.", firstName: "Prénom", email: "Email", subject: "Sujet (article, interview, partenariat…)", message: "Votre message", send: "Envoyer →", mailSubject: "Contact — Jeitinho Blog" },
  en: { eyebrow: "Contact", h1: ["An idea, a ", "partnership?"], lead: "Article pitch, interview, feedback on a guide, editorial partnership: write to us, we reply within 48 hours.", conciergerie: "To plan your stay in Rio, our concierge service is at", sentEyebrow: "Message received", sent: "Thank you! We'll get back to you very soon.", firstName: "First name", email: "Email", subject: "Subject (article, interview, partnership…)", message: "Your message", send: "Send →", mailSubject: "Contact — Jeitinho Blog" },
  es: { eyebrow: "Contacto", h1: ["¿Una idea, una ", "colaboración?"], lead: "Propuesta de artículo, entrevista, comentario sobre una guía, colaboración editorial: escríbenos, respondemos en 48 h.", conciergerie: "Para organizar tu estancia en Río, nuestro servicio de conciergería está en", sentEyebrow: "Mensaje recibido", sent: "¡Gracias! Te respondemos muy pronto.", firstName: "Nombre", email: "Email", subject: "Asunto (artículo, entrevista, colaboración…)", message: "Tu mensaje", send: "Enviar →", mailSubject: "Contacto — Jeitinho Blog" },
  pt: { eyebrow: "Contato", h1: ["Uma ideia, uma ", "parceria?"], lead: "Proposta de artigo, entrevista, comentário sobre um guia, parceria editorial: escreva para a gente, respondemos em até 48 h.", conciergerie: "Para organizar sua viagem ao Rio, nosso serviço de concierge está em", sentEyebrow: "Mensagem recebida", sent: "Obrigado! Respondemos rapidinho.", firstName: "Nome", email: "E-mail", subject: "Assunto (artigo, entrevista, parceria…)", message: "Sua mensagem", send: "Enviar →", mailSubject: "Contato — Jeitinho Blog" },
  it: { eyebrow: "Contatti", h1: ["Un'idea, una ", "collaborazione?"], lead: "Proposta di articolo, intervista, commento su una guida, collaborazione editoriale: scrivici, rispondiamo entro 48 ore.", conciergerie: "Per organizzare il tuo soggiorno a Rio, il nostro servizio di concierge è su", sentEyebrow: "Messaggio ricevuto", sent: "Grazie! Ti risponderemo prestissimo.", firstName: "Nome", email: "Email", subject: "Oggetto (articolo, intervista, collaborazione…)", message: "Il tuo messaggio", send: "Invia →", mailSubject: "Contatti — Jeitinho Blog" },
  de: { eyebrow: "Kontakt", h1: ["Eine Idee, eine ", "Partnerschaft?"], lead: "Artikelvorschlag, Interview, Feedback zu einem Guide, redaktionelle Partnerschaft: Schreiben Sie uns, wir antworten innerhalb von 48 Stunden.", conciergerie: "Für die Planung Ihres Aufenthalts in Rio finden Sie unseren Concierge-Service auf", sentEyebrow: "Nachricht erhalten", sent: "Danke! Wir melden uns sehr bald bei Ihnen.", firstName: "Vorname", email: "E-Mail", subject: "Betreff (Artikel, Interview, Partnerschaft…)", message: "Ihre Nachricht", send: "Senden →", mailSubject: "Kontakt — Jeitinho Blog" },
  ru: { eyebrow: "Контакты", h1: ["Есть идея или ", "предложение?"], lead: "Идея статьи, интервью, отзыв о гиде, редакционное партнёрство: напишите нам, мы ответим в течение 48 часов.", conciergerie: "Чтобы организовать поездку в Рио, обращайтесь в наш консьерж-сервис на", sentEyebrow: "Сообщение получено", sent: "Спасибо! Мы скоро с вами свяжемся.", firstName: "Имя", email: "Email", subject: "Тема (статья, интервью, партнёрство…)", message: "Ваше сообщение", send: "Отправить →", mailSubject: "Контакты — Jeitinho Blog" },
};

export const Route = createFileRoute("/{-$locale}/contact")({
  head: ({ params }) => {
    const locale = localeFromParams(params);
    const seo = SEO[locale];
    return {
      meta: [
        { title: seo.title },
        { name: "description", content: seo.description },
        { property: "og:title", content: seo.ogTitle },
        { property: "og:description", content: seo.ogDescription },
        { property: "og:type", content: "website" },
        { property: "og:url", content: localizedUrl("/contact", locale) },
        ...ogLocaleMeta(locale),
      ],
      links: localeLinks("/contact", locale),
    };
  },
  component: ContactPage,
});

function ContactPage() {
  const locale = useLocale();
  const t = useDict(dict);
  const [sent, setSent] = useState(false);
  const subject = encodeURIComponent(t.mailSubject);
  const fields = [
    { name: "prenom", label: t.firstName, type: "text" },
    { name: "email", label: t.email, type: "email" },
    { name: "sujet", label: t.subject, type: "text" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="mx-auto max-w-2xl px-5 md:px-8 py-20 md:py-28 flex-1">
        <p className="tracked-caps text-[10px] text-terracotta">{t.eyebrow}</p>
        <h1 className="mt-4 text-5xl md:text-6xl">{t.h1[0]}<em>{t.h1[1]}</em></h1>
        <p className="mt-6 text-muted-foreground leading-relaxed">{t.lead}</p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6">
          <a href={`mailto:${CONTACT_EMAIL}?subject=${subject}`} className="inline-flex items-center gap-2 rounded-[3px] border border-terracotta px-5 py-3 tracked-caps text-[11px] text-terracotta hover:bg-terracotta hover:text-primary-foreground transition-colors">
            <Mail className="h-4 w-4" /> {CONTACT_EMAIL}
          </a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-[3px] border border-border px-5 py-3 tracked-caps text-[11px] text-foreground/80 hover:border-terracotta hover:text-terracotta transition-colors">
            <Instagram className="h-4 w-4" /> {INSTAGRAM_HANDLE}
          </a>
        </div>

        <p className="mt-6 text-sm text-muted-foreground">
          {t.conciergerie}{" "}
          <a href={conciergerieUrl(CONCIERGERIE_URL, locale)} target="_blank" rel="noopener" className="text-terracotta underline decoration-terracotta/40 underline-offset-4">jeitinho.fr</a>.
        </p>

        {sent ? (
          <div className="mt-12 rounded-[3px] border border-terracotta bg-cream-deep p-8 text-center">
            <p className="tracked-caps text-[10px] text-terracotta">{t.sentEyebrow}</p>
            <p className="mt-3 text-xl">{t.sent}</p>
          </div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="mt-12 space-y-5">
            {fields.map((f) => (
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
              <label htmlFor="message" className="tracked-caps text-[10px] text-terracotta">{t.message}</label>
              <textarea
                id="message" name="message" rows={5} required
                className="mt-2 w-full rounded-[3px] border border-border bg-card px-4 py-3 focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <button type="submit" className="rounded-[3px] bg-primary px-7 py-4 tracked-caps text-xs text-primary-foreground hover:bg-terracotta-deep transition-colors">
              {t.send}
            </button>
          </form>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}
