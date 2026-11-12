// Voci singole della teoria (definizioni, teoremi, proposizioni), ciascuna con il proprio riquadro già reso in HTML.
// Servono alle pagine `/<materia>/<argomento>/teoria/<ancora>`: una pagina per ogni teorema o definizione, con
// l'enunciato in chiaro e la dimostrazione riservata a chi ha la materia (come la teoria).
// Il riquadro si ritaglia dall'HTML reso dell'intera pagina di teoria (`rendered.html` dell'entry), così
// formule e stile sono identici a quelli del capitolo.
import { getCollection } from 'astro:content';
import { resaVoce } from './resa';
import type { Lingua } from '../i18n';
import type { TipoVoce } from './indice-analitico';

export interface VoceTeoria {
  tipo: TipoVoce;
  ancora: string;
  titolo: string;
  numero: string;          // «3.» come nel riquadro, se c'è
  enunciato: string;       // HTML del riquadro senza la dimostrazione
  dimostrazione: string;   // HTML del blocco <details> della dimostrazione, o ''
  testo: string;           // enunciato in testo semplice (per descrizioni e dati strutturati)
  sezione: string;         // titolo del paragrafo (h2) in cui si trova
  sezioneId: string;
}

const APRI = /<div class="blocco blocco-(definizione|teorema|proposizione)" id="([^"]+)">/g;

// Fine del <div> aperto in `da`, contando i <div> annidati.
function fineDiv(html: string, da: number): number {
  let p = da, profondita = 0;
  while (p < html.length) {
    const ap = html.indexOf('<div', p);
    const ch = html.indexOf('</div>', p);
    if (ch === -1) return -1;
    if (ap !== -1 && ap < ch) { profondita++; p = ap + 4; } else { profondita--; p = ch + 6; if (profondita === 0) return p; }
  }
  return -1;
}
// Fine del <details> aperto in `da` (le dimostrazioni possono contenere altri <details>).
function fineDetails(html: string, da: number): number {
  let p = da, profondita = 0;
  while (p < html.length) {
    const ap = html.indexOf('<details', p);
    const ch = html.indexOf('</details>', p);
    if (ch === -1) return -1;
    if (ap !== -1 && ap < ch) { profondita++; p = ap + 8; } else { profondita--; p = ch + 10; if (profondita === 0) return p; }
  }
  return -1;
}

// Testo semplice di un pezzo di HTML: le formule KaTeX diventano il loro LaTeX (data-tex), i tag spariscono.
export function testoSemplice(html: string): string {
  let out = '', i = 0;
  while (true) {
    const k = html.indexOf('<span class="katex', i);
    if (k === -1) { out += html.slice(i); break; }
    const tex = html.slice(k, html.indexOf('>', k)).match(/data-tex="([^"]*)"/)?.[1];
    const fine = fineSpan(html, k);
    if (fine === -1) { out += html.slice(i); break; }
    out += html.slice(i, k) + (tex !== undefined ? ` $${decodifica(tex)}$ ` : '');
    i = fine;
  }
  return out
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ').replace(/ ([,.;:)])/g, '$1').trim();
}
function fineSpan(html: string, da: number): number {
  let p = da, profondita = 0;
  while (p < html.length) {
    const ap = html.indexOf('<span', p);
    const ch = html.indexOf('</span>', p);
    if (ch === -1) return -1;
    if (ap !== -1 && ap < ch) { profondita++; p = ap + 5; } else { profondita--; p = ch + 7; if (profondita === 0) return p; }
  }
  return -1;
}
const decodifica = (s: string) => s.replace(/&quot;/g, '"').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>');

// Le voci di una pagina di teoria, nell'ordine in cui compaiono.
export function vociDaHtml(html: string, titoli: Record<string, string> = {}): VoceTeoria[] {
  const voci: VoceTeoria[] = [];
  // paragrafi (h2) per sapere in quale sezione sta ogni voce
  const sezioni = [...html.matchAll(/<h2 id="([^"]+)"[^>]*>([\s\S]*?)<\/h2>/g)].map((m) => ({
    pos: m.index!, id: m[1], titolo: testoSemplice(m[2].replace(/<a class="ancora"[\s\S]*?<\/a>/g, '')),
  }));
  for (const m of html.matchAll(APRI)) {
    const inizio = m.index!;
    const fine = fineDiv(html, inizio);
    if (fine === -1) continue;
    let blocco = html.slice(inizio, fine);
    const etichetta = blocco.match(/<p class="blocco-etichetta">([\s\S]*?)<\/p>/);
    const numero = etichetta?.[1].match(/<span class="numero-blocco">([^<]*)<\/span>/)?.[1] ?? '';
    // il titolo viene dal Markdown (`titolo="…"`): quando coincide con il paragrafo, il riquadro non ha l'etichetta
    const titolo = titoli[m[2]] ?? testoSemplice((etichetta?.[1] ?? '').replace(/<span class="numero-blocco">[^<]*<\/span>/, ''));
    let dimostrazione = '';
    const d = blocco.indexOf('<details class="blocco blocco-dimostrazione"');
    if (d !== -1) {
      const fd = fineDetails(blocco, d);
      if (fd !== -1) { dimostrazione = blocco.slice(d, fd); blocco = blocco.slice(0, d) + blocco.slice(fd); }
    }
    const sez = sezioni.filter((s) => s.pos < inizio).pop();
    const corpo = blocco.replace(/<p class="blocco-etichetta">[\s\S]*?<\/p>/, '');
    voci.push({
      tipo: m[1] as TipoVoce, ancora: m[2], titolo, numero,
      enunciato: blocco, dimostrazione,
      testo: testoSemplice(corpo.replace(/^<div[^>]*>/, '').replace(/<\/div>$/, '')),
      sezione: sez?.titolo ?? '', sezioneId: sez?.id ?? '',
    });
  }
  return voci;
}

// Tutte le voci di una lingua, pagina per pagina: `Map<"materia/argomento", VoceTeoria[]>`.
// Il risultato resta in memoria per tutta la build (migliaia di pagine lo richiedono).
const cache = new Map<Lingua, Promise<Map<string, VoceTeoria[]>>>();
export function tutteLeVoci(lingua: Lingua): Promise<Map<string, VoceTeoria[]>> {
  if (!cache.has(lingua)) cache.set(lingua, (async () => {
    const teoria = await getCollection(lingua === 'en' ? 'teoria_en' : 'teoria');
    const m = new Map<string, VoceTeoria[]>();
    for (const v of teoria) {
      const html = (await resaVoce(lingua === 'en' ? 'en' : 'it', 'teoria', v as any)).html;
      const titoli: Record<string, string> = {};
      for (const r of ((v as any).body ?? '').matchAll(/^:{3,4}(?:definizione|teorema|proposizione)\{#([\w-]+)[^}]*?titolo="([^"]+)"/gm)) titoli[r[1]] = r[2].replace(/\$/g, '');
      if (html) m.set(v.id, vociDaHtml(html, titoli));
    }
    return m;
  })());
  return cache.get(lingua)!;
}

// Testo leggibile per le descrizioni dei motori di ricerca: le formule LaTeX diventano simboli Unicode quando
// si può; una frazione o un comando non traducibile chiude il testo prima della formula.
const SIMBOLI: [RegExp, string][] = [
  [/\\mathbb\{R\}/g, 'ℝ'], [/\\mathbb\{N\}/g, 'ℕ'], [/\\mathbb\{Z\}/g, 'ℤ'], [/\\mathbb\{Q\}/g, 'ℚ'], [/\\mathbb\{C\}/g, 'ℂ'],
  [/\\cup\b/g, '∪'], [/\\cap\b/g, '∩'], [/\\setminus\b/g, '∖'], [/\\\{/g, '｛'], [/\\\}/g, '｝'], [/\\circ\b/g, '∘'], [/\\prime\b/g, "'"], [/\\dots\b|\\ldots\b|\\cdots\b/g, '…'],
  [/\\to\b/g, '→'], [/\\rightarrow\b/g, '→'], [/\\in\b/g, '∈'], [/\\notin\b/g, '∉'], [/\\subset(eq)?\b/g, '⊆'],
  [/\\le(q)?\b/g, '≤'], [/\\ge(q)?\b/g, '≥'], [/\\ne(q)?\b/g, '≠'], [/\\infty\b/g, '∞'], [/\\cdot\b/g, '·'], [/\\times\b/g, '×'],
  [/\\pm\b/g, '±'], [/\\alpha\b/g, 'α'], [/\\beta\b/g, 'β'], [/\\gamma\b/g, 'γ'], [/\\delta\b/g, 'δ'], [/\\varepsilon\b/g, 'ε'], [/\\epsilon\b/g, 'ε'],
  [/\\lambda\b/g, 'λ'], [/\\mu\b/g, 'μ'], [/\\pi\b/g, 'π'], [/\\theta\b/g, 'θ'], [/\\omega\b/g, 'ω'], [/\\sigma\b/g, 'σ'],
  [/\\forall\b/g, '∀'], [/\\exists\b/g, '∃'], [/\\partial\b/g, '∂'], [/\\nabla\b/g, '∇'], [/\\int\b/g, '∫'], [/\\sum\b/g, 'Σ'],
  [/\\lim\b/g, 'lim'], [/\\sin\b/g, 'sin'], [/\\cos\b/g, 'cos'], [/\\tan\b/g, 'tan'], [/\\ln\b/g, 'ln'], [/\\log\b/g, 'log'], [/\\exp\b/g, 'exp'],
  [/\\sqrt\{([^{}]*)\}/g, '√($1)'], [/\\left|\\right/g, ''], [/\\,|\\;|\\!|\\quad|\\ /g, ' '], [/\\text\{([^{}]*)\}/g, '$1'], [/\\mathrm\{([^{}]*)\}/g, '$1'],
  [/\^\{([^{}]*)\}/g, '^$1'], [/_\{([^{}]*)\}/g, '_$1'], [/[{}]/g, ''], [/｛/g, '{'], [/｝/g, '}'],
];
// Chiusura pulita: via la congiunzione rimasta appesa prima della formula tolta.
const chiudi = (s: string) => s.replace(/\s+/g, ' ').replace(/[\s,;:]+$/, '').replace(/\s+(Se|se|e|ed|che|tale che|tali che|allora|Allora|con|per|in|di|da|è|sia|Sia|siano|Siano|Let|let|be|then|Then|and|with|such that|if|If|where)$/, '').trim();
export function testoPiano(testo: string): string {
  const pezzi = testo.split(/\$(.*?)\$/s);
  let out = '';
  for (let i = 0; i < pezzi.length; i++) {
    if (i % 2 === 0) { out += pezzi[i]; continue; }
    let f = pezzi[i].trim();
    for (const [re, a] of SIMBOLI) f = f.replace(re, a);
    if (/\\[a-zA-Z]/.test(f)) return chiudi(out);   // comando non tradotto: si chiude qui
    out += f;
  }
  return out.replace(/\s+/g, ' ').replace(/ ([,.;:)])/g, '$1').trim();
}
