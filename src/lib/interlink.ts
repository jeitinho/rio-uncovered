// Auto-interlinking: rewrites plain text mentions into internal blog links
// or jeitinho.fr experience links. Skips content already inside <a> tags,
// caps total links per input, and only links each term once per input.

type Rule = { pattern: RegExp; href: string; internal: boolean; key: string };

/** Construit un lien de recherche Google Maps pour un établissement (nom + repère de quartier). */
function gmaps(query: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

// Établissements cités dans les articles — lien direct vers leur fiche Google Maps.
// Placé AVANT les règles de quartiers/expériences ci-dessous : un nom d'établissement
// (ex. « Nosso Ipanema », « Bar Urca », « Copacabana Palace ») doit être capturé en
// entier avant que la règle générique du quartier (« Ipanema », « Urca », « Copacabana »)
// ne s'applique à une sous-chaîne. Certains noms génériques partagés par deux adresses
// réellement différentes (ex. « Balcão » à Ipanema vs à Botafogo) sont volontairement
// omis pour ne pas créer de lien erroné.
const ESTABLISHMENT_RULES: Array<{ terms: string[]; href: string; internal: boolean }> = [
  // Ipanema
  { terms: ["Talho Capixaba"], href: gmaps("Talho Capixaba Ipanema Rio de Janeiro"), internal: false },
  { terms: ["Casa Camolese"], href: gmaps("Casa Camolese Ipanema Rio de Janeiro"), internal: false },
  { terms: ["Zazá Bistrô Tropical"], href: gmaps("Zazá Bistrô Tropical Ipanema Rio de Janeiro"), internal: false },
  { terms: ["Frontera"], href: gmaps("Frontera Ipanema Rio de Janeiro"), internal: false },
  { terms: ["CT Boucherie"], href: gmaps("CT Boucherie Ipanema Rio de Janeiro"), internal: false },
  { terms: ["Venga!"], href: gmaps("Venga Ipanema Rio de Janeiro"), internal: false },
  { terms: ["Barsa"], href: gmaps("Barsa Ipanema Rio de Janeiro"), internal: false },
  { terms: ["Pulë"], href: gmaps("Pulë restaurante Ipanema Rio de Janeiro"), internal: false },
  { terms: ["Temakeria & Cia"], href: gmaps("Temakeria & Cia Ipanema Rio de Janeiro"), internal: false },
  { terms: ["Bar Astor"], href: gmaps("Bar Astor Ipanema Rio de Janeiro"), internal: false },
  { terms: ["Canastra"], href: gmaps("Canastra bar Ipanema Rio de Janeiro"), internal: false },
  { terms: ["Boa Praça"], href: gmaps("Boa Praça Ipanema Rio de Janeiro"), internal: false },
  { terms: ["Boteco Belmonte"], href: gmaps("Boteco Belmonte Ipanema Rio de Janeiro"), internal: false },
  { terms: ["Nosso Ipanema"], href: gmaps("Nosso Ipanema bar Rio de Janeiro"), internal: false },
  { terms: ["Hippie Fair"], href: gmaps("Feira Hippie de Ipanema Praça General Osório Rio de Janeiro"), internal: false },
  // Copacabana
  { terms: ["Cervantes"], href: gmaps("Cervantes sanduíches Copacabana Rio de Janeiro"), internal: false },
  { terms: ["Bar Lagoa"], href: gmaps("Bar Lagoa Rio de Janeiro"), internal: false },
  { terms: ["Amir"], href: gmaps("Amir restaurante libanês Copacabana Rio de Janeiro"), internal: false },
  { terms: ["Miam Miam"], href: gmaps("Miam Miam Botafogo Rio de Janeiro"), internal: false },
  { terms: ["Marius Degustare"], href: gmaps("Marius Degustare Copacabana Rio de Janeiro"), internal: false },
  { terms: ["The Bakers"], href: gmaps("The Bakers Copacabana Rio de Janeiro"), internal: false },
  { terms: ["Parlá! Trattoria"], href: gmaps("Parlá Trattoria Copacabana Rio de Janeiro"), internal: false },
  { terms: ["Chicharrón"], href: gmaps("Chicharrón restaurante peruano Copacabana Rio de Janeiro"), internal: false },
  { terms: ["Yaya Comidaria"], href: gmaps("Yaya Comidaria Copacabana Rio de Janeiro"), internal: false },
  { terms: ["Stalos"], href: gmaps("Stalos Copacabana Rio de Janeiro"), internal: false },
  { terms: ["Sirena"], href: gmaps("Sirena bar de plage Copacabana Rio de Janeiro"), internal: false },
  { terms: ["Mud Bigode"], href: gmaps("Mud Bigode bar Copacabana Rio de Janeiro"), internal: false },
  { terms: ["Copacabana Palace"], href: gmaps("Copacabana Palace Rio de Janeiro"), internal: false },
  { terms: ["Quiosque Nativoo"], href: gmaps("Quiosque Nativoo Copacabana Rio de Janeiro"), internal: false },
  { terms: ["Quiosque Fuego"], href: gmaps("Quiosque Fuego Copacabana Rio de Janeiro"), internal: false },
  // Leblon / Jardim Botânico
  { terms: ["Madame Olympe", "Olympe"], href: gmaps("Madame Olympe restaurante Rio de Janeiro"), internal: false },
  { terms: ["Zuka"], href: gmaps("Zuka restaurante Leblon Rio de Janeiro"), internal: false },
  { terms: ["Sushi Leblon"], href: gmaps("Sushi Leblon Rio de Janeiro"), internal: false },
  { terms: ["Giuseppe Grill"], href: gmaps("Giuseppe Grill Leblon Rio de Janeiro"), internal: false },
  { terms: ["Nola"], href: gmaps("Nola restaurante Leblon Rio de Janeiro"), internal: false },
  { terms: ["Cafeína"], href: gmaps("Cafeína Leblon Rio de Janeiro"), internal: false },
  { terms: ["Emporio Jardim"], href: gmaps("Emporio Jardim Leblon Rio de Janeiro"), internal: false },
  { terms: ["Jobi"], href: gmaps("Jobi bar Leblon Rio de Janeiro"), internal: false },
  { terms: ["Bracarense"], href: gmaps("Bracarense bar Leblon Rio de Janeiro"), internal: false },
  { terms: ["Brewteco Leblon"], href: gmaps("Brewteco Leblon Rio de Janeiro"), internal: false },
  { terms: ["Balcão 201"], href: gmaps("Balcão 201 Leblon Rio de Janeiro"), internal: false },
  { terms: ["Guimas"], href: gmaps("Guimas restaurante Jardim Botânico Rio de Janeiro"), internal: false },
  { terms: ["Espaço BR"], href: gmaps("Espaço BR Jardim Botânico Rio de Janeiro"), internal: false },
  { terms: ["Instituto Moreira Salles"], href: gmaps("Instituto Moreira Salles Rio de Janeiro"), internal: false },
  // Botafogo
  { terms: ["Aconchego Carioca"], href: gmaps("Aconchego Carioca Botafogo Rio de Janeiro"), internal: false },
  { terms: ["Meza Bar"], href: gmaps("Meza Bar Botafogo Rio de Janeiro"), internal: false },
  { terms: ["Emporio Pax"], href: gmaps("Emporio Pax Botafogo Rio de Janeiro"), internal: false },
  { terms: ["Ferro e Farinha"], href: gmaps("Ferro e Farinha Botafogo Rio de Janeiro"), internal: false },
  { terms: ["Haru Sushi"], href: gmaps("Haru Sushi Botafogo Rio de Janeiro"), internal: false },
  { terms: ["Vian Cocktail Bar"], href: gmaps("Vian Cocktail Bar Botafogo Rio de Janeiro"), internal: false },
  { terms: ["Winehouse"], href: gmaps("Winehouse bar Botafogo Rio de Janeiro"), internal: false },
  { terms: ["Boteco Colarinho"], href: gmaps("Boteco Colarinho Botafogo Rio de Janeiro"), internal: false },
  { terms: ["Comuna"], href: gmaps("Comuna Botafogo Rio de Janeiro"), internal: false },
  { terms: ["Buenas Chicas"], href: gmaps("Buenas Chicas bar Botafogo Rio de Janeiro"), internal: false },
  // Flamengo / Glória / Catete
  { terms: ["Café Lamas", "Lamas"], href: gmaps("Lamas restaurante Flamengo Rio de Janeiro"), internal: false },
  { terms: ["Adega Portugalia"], href: gmaps("Adega Portugália Flamengo Rio de Janeiro"), internal: false },
  { terms: ["Marina da Glória"], href: gmaps("Marina da Glória Rio de Janeiro"), internal: false },
  { terms: ["Cais do Oriente"], href: gmaps("Cais do Oriente Centro Rio de Janeiro"), internal: false },
  { terms: ["Estrelas da Babilônia"], href: gmaps("Estrelas da Babilônia restaurante Catete Rio de Janeiro"), internal: false },
  { terms: ["Boteco Casual"], href: gmaps("Boteco Casual Catete Rio de Janeiro"), internal: false },
  // Lapa / Santa Teresa
  { terms: ["Rio Scenarium"], href: gmaps("Rio Scenarium Lapa Rio de Janeiro"), internal: false },
  { terms: ["Carioca da Gema"], href: gmaps("Carioca da Gema Lapa Rio de Janeiro"), internal: false },
  { terms: ["Circo Voador"], href: gmaps("Circo Voador Lapa Rio de Janeiro"), internal: false },
  { terms: ["Fundição Progresso"], href: gmaps("Fundição Progresso Lapa Rio de Janeiro"), internal: false },
  { terms: ["Nova Capela"], href: gmaps("Nova Capela Lapa Rio de Janeiro"), internal: false },
  { terms: ["Adega Portugália"], href: gmaps("Adega Portugália Lapa Rio de Janeiro"), internal: false },
  { terms: ["Bar do Mineiro"], href: gmaps("Bar do Mineiro Santa Teresa Rio de Janeiro"), internal: false },
  { terms: ["Aprazível"], href: gmaps("Aprazível Santa Teresa Rio de Janeiro"), internal: false },
  { terms: ["Espírito Santa"], href: gmaps("Espírito Santa restaurante Santa Teresa Rio de Janeiro"), internal: false },
  { terms: ["Café do Alto"], href: gmaps("Café do Alto Santa Teresa Rio de Janeiro"), internal: false },
  // Lagoa
  { terms: ["Palaphita Kitch"], href: gmaps("Palaphita Kitch Lagoa Rio de Janeiro"), internal: false },
  { terms: ["Braseiro da Gávea"], href: gmaps("Braseiro da Gávea Rio de Janeiro"), internal: false },
  // Barra da Tijuca
  { terms: ["Quadrifoglio Barra"], href: gmaps("Quadrifoglio Barra da Tijuca Rio de Janeiro"), internal: false },
  { terms: ["Prima Bruschetteria"], href: gmaps("Prima Bruschetteria Barra da Tijuca Rio de Janeiro"), internal: false },
  { terms: ["Estrela do Mar"], href: gmaps("Estrela do Mar restaurante Barra da Tijuca Rio de Janeiro"), internal: false },
  { terms: ["BarraShopping"], href: gmaps("BarraShopping Rio de Janeiro"), internal: false },
  { terms: ["Píer Barra"], href: gmaps("Píer Barra Rio de Janeiro"), internal: false },
  // Urca
  { terms: ["Bar Urca"], href: gmaps("Bar Urca Rio de Janeiro"), internal: false },
  { terms: ["Garota da Urca"], href: gmaps("Garota da Urca Rio de Janeiro"), internal: false },
  { terms: ["Círculo Militar da Urca"], href: gmaps("Círculo Militar da Urca Rio de Janeiro"), internal: false },
  // Joá
  { terms: ["Bar do Oswaldo"], href: gmaps("Bar do Oswaldo Estrada do Joá Rio de Janeiro"), internal: false },
  { terms: ["Concha Doce"], href: gmaps("Concha Doce Estrada do Joá Rio de Janeiro"), internal: false },
  { terms: ["Praia da Joatinga"], href: gmaps("Praia da Joatinga Rio de Janeiro"), internal: false },
  // Rocinha / Vidigal / PPG
  { terms: ["Mirante Rocinha"], href: gmaps("Mirante Rocinha Estrada da Gávea Rio de Janeiro"), internal: false },
  { terms: ["Amarelinho"], href: gmaps("Amarelinho bar Rocinha Rio de Janeiro"), internal: false },
  { terms: ["Boteco da Praça"], href: gmaps("Boteco da Praça Rocinha Rio de Janeiro"), internal: false },
  { terms: ["Trapiá Bar e Restaurante"], href: gmaps("Trapiá Bar e Restaurante Rocinha Rio de Janeiro"), internal: false },
  { terms: ["Via Ápia Rio Rooftop"], href: gmaps("Via Ápia Rooftop Rocinha Rio de Janeiro"), internal: false },
  { terms: ["Bar da Laje"], href: gmaps("Bar da Laje Vidigal Rio de Janeiro"), internal: false },
  { terms: ["Alto Vidigal"], href: gmaps("Alto Vidigal Rio de Janeiro"), internal: false },
  { terms: ["Restaurante Sabor Carioca"], href: gmaps("Sabor Carioca restaurante Vidigal Rio de Janeiro"), internal: false },
  { terms: ["Flor do Vidigal"], href: gmaps("Flor do Vidigal Rio de Janeiro"), internal: false },
  { terms: ["Brisolão"], href: gmaps("Brisolão bar Pavão-Pavãozinho Rio de Janeiro"), internal: false },
  { terms: ["Restaurante Pão e Vida"], href: gmaps("Pão e Vida restaurante Pavão-Pavãozinho Rio de Janeiro"), internal: false },
  { terms: ["Panela da Comunidade"], href: gmaps("Panela da Comunidade Pavão-Pavãozinho Rio de Janeiro"), internal: false },
  { terms: ["Pizzaria Mais Sabor"], href: gmaps("Pizzaria Mais Sabor Pavão-Pavãozinho Rio de Janeiro"), internal: false },
];

// Ordered — most specific first (multi-word before single-word).
const RAW_RULES: Array<{ terms: string[]; href: string; internal: boolean; key?: string }> = [
  // Internal — favelas / communautés. Rocinha, Vidigal et PPG pointent vers le même
  // article mais sont des lieux distincts : clé dédiée pour que chacun puisse se lier
  // indépendamment même si les trois sont cités dans la même phrase (Cantagalo fait
  // partie du même complexe que PPG, donc regroupé sous la même clé que lui).
  { terms: ["Pavão-Pavãozinho", "Pavao-Pavaozinho", "PPG", "Cantagalo"], href: "/blog/guide-favelas-rocinha-vidigal-ppg", internal: true, key: "favela-ppg" },
  { terms: ["Rocinha"], href: "/blog/guide-favelas-rocinha-vidigal-ppg", internal: true, key: "favela-rocinha" },
  { terms: ["Vidigal"], href: "/blog/guide-favelas-rocinha-vidigal-ppg", internal: true, key: "favela-vidigal" },
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
  { terms: ["Joá", "Joa"], href: "/blog/joa-guide-complet", internal: true },
  // Internal — thématiques
  { terms: ["Maracanã", "Maracana"], href: "/blog/guide-maracana", internal: true },
  { terms: ["Dois Irmãos", "Dois Irmaos"], href: "/blog/randonnee-dois-irmaos", internal: true },
  { terms: ["Ilha Grande"], href: "/blog/ilha-grande-excursion", internal: true },
  { terms: ["Carnaval"], href: "/blog/preparer-carnaval-rio", internal: true },
  { terms: ["Réveillon", "Reveillon"], href: "/blog/reveillon-rio-copacabana", internal: true },
  // Jeitinho.fr — expériences vendues
  { terms: ["Corcovado", "Christ Rédempteur", "Christ Redempteur"], href: "https://jeitinho.fr/experiences/christ-redempteur", internal: false },
  { terms: ["Pain de Sucre", "Pão de Açúcar", "Pao de Acucar"], href: "https://jeitinho.fr/experiences/pain-de-sucre", internal: false },
  { terms: ["City Tour"], href: "https://jeitinho.fr/experiences/city-tour", internal: false },
  { terms: ["Pedra da Gávea", "Pedra da Gavea"], href: "https://jeitinho.fr/experiences/pedra-da-gavea", internal: false },
  { terms: ["Pedra do Telégrafo", "Pedra do Telegrafo"], href: "https://jeitinho.fr/experiences/pedra-do-telegrafo", internal: false },
  { terms: ["Arraial do Cabo"], href: "https://jeitinho.fr/experiences/arraial-do-cabo", internal: false },
  { terms: ["Búzios", "Buzios"], href: "https://jeitinho.fr/experiences/buzios", internal: false },
  { terms: ["Angra dos Reis", "Angra"], href: "https://jeitinho.fr/experiences/excursions", internal: false },
  { terms: ["Baile Funk", "baile funk"], href: "https://jeitinho.fr/calendrier", internal: false },
  { terms: ["Stand Up Paddle", "SUP"], href: "https://jeitinho.fr/experiences/paddle-aube", internal: false },
  { terms: ["hélicoptère", "helicoptere"], href: "https://jeitinho.fr/experiences/tour-helicoptere", internal: false },
  { terms: ["Jet Ski", "jet-ski"], href: "https://jeitinho.fr/experiences/jet-ski", internal: false },
  { terms: ["favela"], href: "https://jeitinho.fr/experiences/favelas-immersion-culturelle", internal: false },
];

function escapeRegExp(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// Établissements d'abord (les plus spécifiques), puis quartiers/expériences.
const RULES: Rule[] = [...ESTABLISHMENT_RULES, ...RAW_RULES].flatMap(({ terms, href, internal, key }) =>
  terms.map((term) => ({
    key: key ?? href,
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