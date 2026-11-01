import { useState } from "react";
import { Link as LinkIcon, Check, Facebook, Twitter, Linkedin, MessageCircle } from "lucide-react";
import { absoluteUrl } from "@/lib/site";
import { useDict } from "@/i18n/t";

const dict = {
  fr: { share: "Partager", on: (n: string) => `Partager sur ${n}`, copy: "Copier le lien" },
  en: { share: "Share", on: (n: string) => `Share on ${n}`, copy: "Copy link" },
  es: { share: "Compartir", on: (n: string) => `Compartir en ${n}`, copy: "Copiar el enlace" },
  pt: { share: "Compartilhar", on: (n: string) => `Compartilhar no ${n}`, copy: "Copiar o link" },
  it: { share: "Condividi", on: (n: string) => `Condividi su ${n}`, copy: "Copia il link" },
  de: { share: "Teilen", on: (n: string) => `Auf ${n} teilen`, copy: "Link kopieren" },
  ru: { share: "Поделиться", on: (n: string) => `Поделиться в ${n}`, copy: "Скопировать ссылку" },
};

export function ShareBar({ title, url }: { title: string; url: string }) {
  const t = useDict(dict);
  const [copied, setCopied] = useState(false);
  const full = absoluteUrl(url);
  const encodedUrl = encodeURIComponent(full);
  const encodedTitle = encodeURIComponent(title);

  const links = [
    { href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`, label: "Twitter", Icon: Twitter },
    { href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`, label: "Facebook", Icon: Facebook },
    { href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`, label: "LinkedIn", Icon: Linkedin },
    { href: `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`, label: "WhatsApp", Icon: MessageCircle },
  ];

  return (
    <div className="flex items-center gap-3">
      <span className="tracked-caps text-[10px] text-muted-foreground">{t.share}</span>
      {links.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t.on(label)}
          className="p-2 text-foreground/70 hover:text-terracotta transition-colors"
        >
          <Icon className="h-4 w-4" />
        </a>
      ))}
      <button
        onClick={async () => {
          try { await navigator.clipboard.writeText(full); setCopied(true); setTimeout(() => setCopied(false), 2000); } catch {}
        }}
        aria-label={t.copy}
        className="p-2 text-foreground/70 hover:text-terracotta transition-colors"
      >
        {copied ? <Check className="h-4 w-4 text-terracotta" /> : <LinkIcon className="h-4 w-4" />}
      </button>
    </div>
  );
}
