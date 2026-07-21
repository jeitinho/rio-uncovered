// Auto-interlinking: rewrites plain text mentions into internal blog links
// or jeitinho.fr experience links. Skips content already inside <a> tags,
// caps total links per input, and only links each term once per input.

type Rule = { pattern: RegExp; href: string; internal: boolean; key: string };

// Ordered — most specific first (multi-word before single-word).
const RAW_RULES: Array<{ terms: string[]; href: string; internal: boolean }> = [
  // Internal — quartiers (guides complets)
  { terms: ["Jardim Botânico", "Jardim Botanico"], href: "/blog/jardim-botanico-guide-complet", internal: true },
  { terms: ["Barra da Tijuca"], href: "/blog/barra-da-tijuca-guide-complet", internal: true },
  { terms: ["Santa Teresa"], href: "/blog/santa-teresa-guide-complet", internal: true },
  { terms: ["Ipanema"], href: "/blog/ipanema-guide-complet", internal: true },
  { terms: ["Copacabana"], href: "/blog/copacabana-guide-complet", internal: true },
  { terms: ["Leblon"], href: "/blog/leblon-guide-complet", internal: true },
  { terms: ["Botafogo"], href: "/blog/botafogo-guide-complet", internal: true },
  { terms: ["Flamengo"], href: "/blog/flamengo-guide-complet", internal: true },
  { terms: ["Catete", "Catete"], href: "/blog/catete-guide-complet", internal: true },
  { terms: ["Glória", "Gloria"], href: "/blog/gloria-guide-complet", internal: true },
  { terms: ["Lagoa"], href: "/blog/lagoa-guide-complet", internal: true },
  { terms: ["Lapa"], href: "/blog/lapa-guide-complet", internal: true },
  // Internal — thématiques
  { terms: ["Maracanã", "Maracana"], href: "/blog/guide-maracana", internal: true },
  { terms: ["Dois Irmãos", "Dois Irmaos"], href: "/blog/randonnee-dois-irmaos", internal: true },
  { terms: ["Ilha Grande"], href: "/blog/ilha-grande-excursion", internal: true },
  { terms: ["Carnaval"], href: "/blog/preparer-carnaval-rio", internal: true },
  { terms: ["Réveillon", "Reveillon"], href: "/blog/reveillon-rio-copacabana", internal: true },
  // Jeitinho.fr — expériences vendues
  { terms: ["Corcovado", "Christ Rédempteur", "Christ Redempteur"], href: "https://www.jeitinho.fr/experiences/christ-redempteur", internal: false },
  { terms: ["Pain de Sucre", "Pão de Açúcar", "Pao de Acucar"], href: "https://www.jeitinho.fr/experiences/pain-de-sucre", internal: false },
  { terms: ["City Tour"], href: "https://www.jeitinho.fr/experiences/city-tour", internal: false },
  { terms: ["Pedra da Gávea", "Pedra da Gavea"], href: "https://www.jeitinho.fr/experiences/pedra-da-gavea", internal: false },
  { terms: ["Pedra do Telégrafo", "Pedra do Telegrafo"], href: "https://www.jeitinho.fr/experiences/pedra-do-telegrafo", internal: false },
  { terms: ["Arraial do Cabo"], href: "https://www.jeitinho.fr/excursions/arraial-do-cabo", internal: false },
  { terms: ["Búzios", "Buzios"], href: "https://www.jeitinho.fr/excursions/buzios", internal: false },
  { terms: ["Angra dos Reis", "Angra"], href: "https://www.jeitinho.fr/excursions/angra", internal: false },
  { terms: ["Baile Funk", "baile funk"], href: "https://www.jeitinho.fr/calendrier", internal: false },
  { terms: ["Stand Up Paddle", "SUP"], href: "https://www.jeitinho.fr/activites/stand-up-paddle", internal: false },
  { terms: ["hélicoptère", "helicoptere"], href: "https://www.jeitinho.fr/activites/helicoptere", internal: false },
  { terms: ["Jet Ski", "jet-ski"], href: "https://www.jeitinho.fr/activites/jet-ski", internal: false },
  { terms: ["favela"], href: "https://www.jeitinho.fr/experiences/favela", internal: false },
];

function escapeRegExp(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

const RULES: Rule[] = RAW_RULES.flatMap(({ terms, href, internal }) =>
  terms.map((term) => ({
    key: href,
    href,
    internal,
    // \b doesn't play well with accented chars; use lookarounds on letter chars.
    pattern: new RegExp(`(?<![\\p{L}\\p{N}])(${escapeRegExp(term)})(?![\\p{L}\\p{N}])`, "u"),
  })),
);

const MAX_LINKS_PER_INPUT = 3;

/**
 * Auto-links known terms in an HTML string. Preserves existing <a>…</a>
 * segments untouched. Skips terms whose href matches excludeHref
 * (to avoid self-linking the current article).
 */
export function autoLink(html: string, excludeHref?: string): string {
  if (!html) return html;

  // Split around existing anchor tags so we never nest links.
  const parts = html.split(/(<a\b[^>]*>[\s\S]*?<\/a>)/gi);
  const usedKeys = new Set<string>();
  let linksAdded = 0;

  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
    if (i % 2 === 1) continue; // existing <a> block — skip
    if (!part) continue;

    let out = part;
    for (const rule of RULES) {
      if (linksAdded >= MAX_LINKS_PER_INPUT) break;
      if (usedKeys.has(rule.key)) continue;
      if (excludeHref && rule.href === excludeHref) continue;

      const m = rule.pattern.exec(out);
      if (!m) continue;

      const attrs = rule.internal
        ? 'class="underline decoration-terracotta/40 underline-offset-2 hover:decoration-terracotta"'
        : 'class="underline decoration-terracotta/40 underline-offset-2 hover:decoration-terracotta" target="_blank" rel="noopener"';
      const replacement = `<a href="${rule.href}" ${attrs}>${m[1]}</a>`;
      out = out.slice(0, m.index) + replacement + out.slice(m.index + m[0].length);
      usedKeys.add(rule.key);
      linksAdded++;
    }
    parts[i] = out;
  }

  return parts.join("");
}