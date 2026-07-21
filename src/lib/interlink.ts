type Rule = {
  pattern: RegExp;
  href: string;
  internal: boolean;
  key: string;
};

const RAW_RULES: Array<{
  terms: string[];
  href: string;
  internal: boolean;
}> = [
  // Quartiers
  { terms: ["Jardim Botânico", "Jardim Botanico"], href: "/blog/jardim-botanico-guide-complet", internal: true },
  { terms: ["Barra da Tijuca"], href: "/blog/barra-da-tijuca-guide-complet", internal: true },
  { terms: ["Santa Teresa"], href: "/blog/santa-teresa-guide-complet", internal: true },
  { terms: ["Ipanema"], href: "/blog/ipanema-guide-complet", internal: true },
  { terms: ["Copacabana"], href: "/blog/copacabana-guide-complet", internal: true },
  { terms: ["Leblon"], href: "/blog/leblon-guide-complet", internal: true },
  { terms: ["Botafogo"], href: "/blog/botafogo-guide-complet", internal: true },
  { terms: ["Flamengo"], href: "/blog/flamengo-guide-complet", internal: true },
  { terms: ["Catete"], href: "/blog/catete-guide-complet", internal: true },
  { terms: ["Glória", "Gloria"], href: "/blog/gloria-guide-complet", internal: true },
  { terms: ["Lagoa"], href: "/blog/lagoa-guide-complet", internal: true },
  { terms: ["Lapa"], href: "/blog/lapa-guide-complet", internal: true },

  // Guides
  { terms: ["Maracanã", "Maracana"], href: "/blog/guide-maracana", internal: true },
  { terms: ["Dois Irmãos", "Dois Irmaos"], href: "/blog/randonnee-dois-irmaos", internal: true },
  { terms: ["Ilha Grande"], href: "/blog/ilha-grande-excursion", internal: true },
  { terms: ["Carnaval"], href: "/blog/preparer-carnaval-rio", internal: true },
  { terms: ["Réveillon", "Reveillon"], href: "/blog/reveillon-rio-copacabana", internal: true },

  // Expériences
  { terms: ["Corcovado", "Christ Rédempteur", "Christ Redempteur"], href: "https://jeitinho.fr/experiences/christ-redempteur", internal: false },
  { terms: ["Pain de Sucre", "Pão de Açúcar", "Pao de Acucar"], href: "https://jeitinho.fr/experiences/pain-de-sucre", internal: false },
  { terms: ["City Tour"], href: "https://jeitinho.fr/experiences/city-tour", internal: false },
  { terms: ["Pedra da Gávea", "Pedra da Gavea"], href: "https://jeitinho.fr/experiences/pedra-da-gavea", internal: false },
  { terms: ["Pedra do Telégrafo", "Pedra do Telegrafo"], href: "https://jeitinho.fr/experiences/pedra-do-telegrafo", internal: false },
  { terms: ["Arraial do Cabo"], href: "https://jeitinho.fr/excursions/arraial-do-cabo", internal: false },
  { terms: ["Búzios", "Buzios"], href: "https://jeitinho.fr/excursions/buzios", internal: false },
  { terms: ["Angra dos Reis", "Angra"], href: "https://jeitinho.fr/excursions/angra", internal: false },
  { terms: ["Baile Funk"], href: "https://jeitinho.fr/calendrier", internal: false },
  { terms: ["Passinho"], href: "https://jeitinho.fr/experiences/cours-funk", internal: false },
  { terms: ["Stand Up Paddle", "SUP"], href: "https://jeitinho.fr/activites/stand-up-paddle", internal: false },
  { terms: ["hélicoptère", "helicoptere"], href: "https://jeitinho.fr/activites/helicoptere", internal: false },
  { terms: ["Jet Ski", "jet-ski"], href: "https://jeitinho.fr/activites/jet-ski", internal: false },
  { terms: ["favela"], href: "https://jeitinho.fr/experiences/favela", internal: false },
];

function escapeRegExp(str: string) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

const RULES: Rule[] = RAW_RULES.flatMap(({ terms, href, internal }) =>
  terms.map((term) => ({
    key: href,
    href,
    internal,
    pattern: new RegExp(
      `(?<![\\p{L}\\p{N}])(${escapeRegExp(term)})(?![\\p{L}\\p{N}])`,
      "giu"
    ),
  }))
);

const MAX_LINKS = 6;

export function autoLink(html: string, excludeHref?: string): string {
  if (!html) return html;

  const blocks = html.split(/(<a\b[^>]*>[\s\S]*?<\/a>)/gi);

  const used = new Set<string>();
  let count = 0;

  for (let i = 0; i < blocks.length; i++) {
    if (i % 2) continue;

    let text = blocks[i];

    for (const rule of RULES) {
      if (count >= MAX_LINKS) break;
      if (used.has(rule.key)) continue;
      if (excludeHref === rule.href) continue;

      const attrs = rule.internal
        ? 'class="underline decoration-terracotta/40 underline-offset-2 hover:decoration-terracotta"'
        : 'class="underline decoration-terracotta/40 underline-offset-2 hover:decoration-terracotta" target="_blank" rel="noopener noreferrer"';

      let replaced = false;

      text = text.replace(rule.pattern, (match) => {
        if (replaced) return match;

        replaced = true;
        used.add(rule.key);
        count++;

        return `<a href="${rule.href}" ${attrs}>${match}</a>`;
      });
    }

    blocks[i] = text;
  }

  return blocks.join("");
}