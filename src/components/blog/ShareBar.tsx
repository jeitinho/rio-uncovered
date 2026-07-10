import { useState } from "react";
import { Link as LinkIcon, Check, Facebook, Twitter } from "lucide-react";

export function ShareBar({ title, url }: { title: string; url: string }) {
  const [copied, setCopied] = useState(false);
  const full = typeof window !== "undefined" ? window.location.origin + url : url;

  return (
    <div className="flex items-center gap-3">
      <span className="tracked-caps text-[10px] text-muted-foreground">Partager</span>
      <a
        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(full)}&text=${encodeURIComponent(title)}`}
        target="_blank" rel="noopener noreferrer"
        aria-label="Partager sur Twitter"
        className="p-2 text-foreground/70 hover:text-terracotta transition-colors"
      >
        <Twitter className="h-4 w-4" />
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(full)}`}
        target="_blank" rel="noopener noreferrer"
        aria-label="Partager sur Facebook"
        className="p-2 text-foreground/70 hover:text-terracotta transition-colors"
      >
        <Facebook className="h-4 w-4" />
      </a>
      <button
        onClick={async () => {
          try { await navigator.clipboard.writeText(full); setCopied(true); setTimeout(() => setCopied(false), 2000); } catch {}
        }}
        aria-label="Copier le lien"
        className="p-2 text-foreground/70 hover:text-terracotta transition-colors"
      >
        {copied ? <Check className="h-4 w-4 text-terracotta" /> : <LinkIcon className="h-4 w-4" />}
      </button>
    </div>
  );
}
