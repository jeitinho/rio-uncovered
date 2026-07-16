import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { pt } from "@/content/partenaires/i18n.pt";
import { fr } from "@/content/partenaires/i18n.fr";

export type Lang = "pt" | "fr";
const STORAGE_KEY = "jeitinho-lang";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: typeof pt;
};

const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children, defaultLang = "pt" }: { children: ReactNode; defaultLang?: Lang }) {
  const [lang, setLangState] = useState<Lang>(defaultLang);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "pt" || stored === "fr") setLangState(stored);
    } catch {}
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try { localStorage.setItem(STORAGE_KEY, l); } catch {}
  };

  const t = lang === "pt" ? pt : fr;
  return <LanguageContext.Provider value={{ lang, setLang, t }}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
