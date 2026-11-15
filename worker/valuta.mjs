// Verifica della risposta negli esercizi da fare.
// Lo stesso modulo serve in tre posti:
//  - nella build (src/pages/dati-risposte/…): dalla soluzione in LaTeX ricava il valore numerico del risultato;
//  - nel browser: legge ciò che lo studente scrive (3/2, e^6, sqrt(2)/2, pi/4, +inf) e lo mostra in formula;
//  - nel Worker: confronta il valore scritto dallo studente con quello della soluzione (le soluzioni non escono mai dal Worker).
// Si verificano solo gli esercizi il cui risultato è un solo numero reale (anche ±∞): limiti, integrali definiti, somme di serie, parametri.

const FUNZIONI = {
  sqrt: Math.sqrt, cbrt: Math.cbrt, ln: Math.log, log: Math.log, exp: Math.exp, abs: Math.abs,
  sin: Math.sin, cos: Math.cos, tan: Math.tan, arctan: Math.atan, atan: Math.atan, arcsin: Math.asin, asin: Math.asin, arccos: Math.acos, acos: Math.acos,
  sinh: Math.sinh, cosh: Math.cosh, tanh: Math.tanh,
};
const PAROLE = [...Object.keys({ sqrt: 1, cbrt: 1, ln: 1, log: 1, exp: 1, abs: 1, sin: 1, cos: 1, tan: 1, arctan: 1, atan: 1, arcsin: 1, asin: 1, arccos: 1, acos: 1, sinh: 1, cosh: 1, tanh: 1 }), 'pi', 'e', 'inf', 'infinito', 'infinity'];
// Lettere greche: nelle chiavi di correzione (\theta, \omega) e in ciò che scrive lo studente (θ, theta).
const GRECHE = { alpha: 'α', beta: 'β', gamma: 'γ', delta: 'δ', theta: 'θ', lambda: 'λ', mu: 'μ', rho: 'ρ', sigma: 'σ', tau: 'τ', phi: 'φ', omega: 'ω' };
const LATEX_FUNZ = { sqrt: '\\sqrt', cbrt: '\\sqrt[3]', ln: '\\ln', log: '\\ln', exp: '\\exp', abs: '', sin: '\\sin', cos: '\\cos', tan: '\\tan', arctan: '\\arctan', atan: '\\arctan', arcsin: '\\arcsin', asin: '\\arcsin', arccos: '\\arccos', acos: '\\arccos', sinh: '\\sinh', cosh: '\\cosh', tanh: '\\tanh' };

// ---------- testo scritto dallo studente → albero ----------
function pezzi(src, vars = ['x']) {
  const parole = [...PAROLE, ...vars];
  let s0 = String(src);
  for (const [nome, segno] of Object.entries(GRECHE)) s0 = s0.split(segno).join(` ${nome} `);
  const s = s0
    .replace(/ϑ/g, ' theta ').replace(/ϕ/g, ' phi ').replace(/[−–—]/g, '-').replace(/[×·⋅]/g, '*').replace(/[÷:]/g, '/').replace(/π/g, 'pi').replace(/∞/g, 'inf').replace(/√/g, 'sqrt')
    .replace(/\*\*/g, '^').replace(/(\d),(\d)/g, '$1.$2').replace(/\s+/g, ' ').trim().toLowerCase()
    .replace(/\|([^|]*)\|/g, ' abs($1) ');
  const t = s.match(/\d*\.\d+|\d+|[a-z]+|[-+*/^()]|\S/g) || [];
  // Lettere attaccate (sinx, xsinx, 2pix, ex): si separano nelle parole note, scegliendo ogni volta la più lunga.
  return t.flatMap((x) => {
    if (!/^[a-z]+$/.test(x) || parole.includes(x)) return [x];
    const out = [];
    let r = x;
    while (r) {
      const p = parole.filter((w) => r.startsWith(w)).sort((a, b) => b.length - a.length)[0];
      if (!p) return [x];
      out.push(p); r = r.slice(p.length);
    }
    return out;
  });
}
// Variabili ammesse nelle risposte che sono funzioni (primitive, derivate): x, oppure quelle indicate dalla chiave.
export function leggi(src, vars = ['x']) {
  const t = pezzi(src, vars);
  if (!t.length || t.length > 120) return null;
  let i = 0;
  const vedi = () => t[i];
  const prendi = () => t[i++];
  const iniziaPrimario = (x) => x !== undefined && (/^[\d.]/.test(x) || /^[a-z]/.test(x) || x === '(');
  function somma() {
    let n = prodotto();
    while (vedi() === '+' || vedi() === '-') { const op = prendi(); n = { op, a: n, b: prodotto() }; }
    return n;
  }
  function prodotto() {
    let n = unario();
    for (;;) {
      if (vedi() === '*' || vedi() === '/') { const op = prendi(); n = { op, a: n, b: unario() }; }
      else if (iniziaPrimario(vedi())) n = { op: '*', a: n, b: potenza() }; // moltiplicazione sottintesa: 2pi, 3sqrt(2), 2(1+x)
      else return n;
    }
  }
  function unario() {
    if (vedi() === '-') { prendi(); return { op: 'neg', a: unario() }; }
    if (vedi() === '+') { prendi(); return unario(); }
    return potenza();
  }
  function potenza() {
    const base = primario();
    if (vedi() === '^') { prendi(); return { op: '^', a: base, b: unario() }; }
    return base;
  }
  function primario() {
    const x = prendi();
    if (x === undefined) throw new Error('fine');
    if (/^[\d.]/.test(x)) { const v = Number(x); if (!Number.isFinite(v)) throw new Error('numero'); return { num: v, testo: x }; }
    if (x === '(') { const n = somma(); if (prendi() !== ')') throw new Error('parentesi'); return { op: '()', a: n }; }
    if (x === 'pi') return { cost: 'pi' };
    if (x === 'e') return { cost: 'e' };
    if (x === 'inf' || x === 'infinito' || x === 'infinity') return { cost: 'inf' };
    if (vars.includes(x)) return { v: x };
    if (FUNZIONI[x]) {
      // sqrt(2), ln 2, sin(pi/6)
      const arg = vedi() === '(' ? (prendi(), (() => { const n = somma(); if (prendi() !== ')') throw new Error('parentesi'); return n; })()) : potenza();
      return { f: x, a: arg };
    }
    throw new Error('sconosciuto');
  }
  try {
    const n = somma();
    return i === t.length ? n : null;
  } catch { return null; }
}

export function valore(n, x = NaN) {
  if (!n) return NaN;
  if ('num' in n) return n.num;
  if (n.v) return typeof x === 'number' ? x : (x?.[n.v] ?? NaN);
  if (n.cost) return n.cost === 'pi' ? Math.PI : n.cost === 'e' ? Math.E : Infinity;
  if (n.f) return FUNZIONI[n.f](valore(n.a, x));
  const a = valore(n.a, x), b = n.b ? valore(n.b, x) : 0;
  switch (n.op) {
    case '()': return a;
    case 'neg': return -a;
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/': return a / b;
    case '^': return n.a.cost === 'e' ? Math.exp(b) : a ** b;
    default: return NaN;
  }
}

// Albero → LaTeX, per mostrare allo studente come è stata letta la sua risposta (frazioni in colonna).
export function latex(n) {
  if (!n) return '';
  if ('num' in n) return n.testo.replace('.', '{,}');
  if (n.v) return GRECHE[n.v] ? `\\${n.v}` : n.v;
  if (n.cost) return n.cost === 'pi' ? '\\pi' : n.cost === 'e' ? 'e' : '\\infty';
  if (n.f) {
    if (n.f === 'abs') return `\\left| ${latex(n.a)} \\right|`;
    if (n.f === 'sqrt' || n.f === 'cbrt') return `${LATEX_FUNZ[n.f]}{${latex(n.a)}}`;
    return `${LATEX_FUNZ[n.f]}\\left(${latex(n.a)}\\right)`;
  }
  const g = (x) => (x.op === '()' ? latex(x.a) : latex(x));
  switch (n.op) {
    case '()': return `\\left(${latex(n.a)}\\right)`;
    case 'neg': return `-${latex(n.a)}`;
    case '+': return `${latex(n.a)} + ${latex(n.b)}`;
    case '-': return `${latex(n.a)} - ${latex(n.b)}`;
    case '*': {
      const numeri = ('num' in n.b || (n.b.op === '^' && 'num' in n.b.a) || n.b.op === 'neg');
      return `${latex(n.a)}${numeri ? ' \\cdot ' : ' '}${latex(n.b)}`;
    }
    case '/': return `\\dfrac{${g(n.a)}}{${g(n.b)}}`;
    case '^': return `${n.a.op || n.a.f ? `\\left(${latex(n.a)}\\right)` : latex(n.a)}^{${g(n.b)}}`;
    default: return '';
  }
}

// ---------- soluzione in LaTeX → valore ----------
// Toglie un gruppo {…} che comincia in s[i] (s[i] === '{'); restituisce [contenuto, indice dopo la graffa].
function gruppo(s, i) {
  let d = 0;
  for (let j = i; j < s.length; j++) {
    if (s[j] === '{') d++;
    else if (s[j] === '}' && --d === 0) return [s.slice(i + 1, j), j + 1];
  }
  throw new Error('graffe');
}
export function daLatex(tex) {
  let s = String(tex)
    .replace(/\\(left|right|displaystyle|textstyle|,|;|!|quad|qquad)(?![a-zA-Z])/g, ' ')
    .replace(/\{,\}/g, '.')
    .replace(/\\(cdot|times)(?![a-zA-Z])/g, '*')
    .replace(/\\infty/g, ' inf ').replace(/\\pi(?![a-zA-Z])/g, ' pi ')
    .replace(/\\(ln|log|sin|cos|tan|arctan|arcsin|arccos|sinh|cosh|tanh|exp)(?![a-zA-Z])/g, ' $1 ')
    .replace(/\\mathrm\{e\}/g, ' e ')
    .replace(/\\var(theta|phi)(?![a-zA-Z])/g, ' $1 ')
    .replace(/\\(alpha|beta|gamma|delta|theta|lambda|mu|rho|sigma|tau|phi|omega)(?![a-zA-Z])/g, ' $1 ')
    .replace(/\|([^|]*)\|/g, ' abs($1) ');
  // \dfrac{a}{b}, \frac, \tfrac → ((a)/(b)); \sqrt[n]{a} → ((a)^(1/(n))); \sqrt{a} → sqrt(a); ^{…} → ^(…)
  let out = '';
  for (let i = 0; i < s.length;) {
    const m = s.slice(i).match(/^\\[dt]?frac\s*/);
    if (m) {
      const [a, j] = gruppo(s, i + m[0].length);
      const [b, k] = gruppo(s, j);
      out += `((${daLatex(a)})/(${daLatex(b)}))`; i = k; continue;
    }
    const r = s.slice(i).match(/^\\sqrt\s*(\[([^\]]+)\])?\s*/);
    if (r) {
      const [a, j] = gruppo(s, i + r[0].length);
      out += r[2] ? `((${daLatex(a)})^(1/(${daLatex(r[2])})))` : `sqrt(${daLatex(a)})`; i = j; continue;
    }
    if (s[i] === '^' && s[i + 1] === '{') { const [a, j] = gruppo(s, i + 1); out += `^(${daLatex(a)})`; i = j; continue; }
    if (s[i] === '{') { const [a, j] = gruppo(s, i); out += `(${daLatex(a)})`; i = j; continue; }
    if (s[i] === '\\') throw new Error(`comando ${s.slice(i, i + 12)}`);
    out += s[i++];
  }
  return out;
}

// Risultato di una soluzione, se si può verificare:
//  - { tipo: 'numero', v, u?, d? }   un numero reale (o ±∞), con l'eventuale unità di misura u;
//                                    d = cifre decimali scritte nella soluzione, se il risultato è arrotondato;
//  - { tipo: 'funzione', e, primitiva }   un'espressione nella sola variabile x (derivata, funzione), oppure una primitiva "… + c";
//  - { tipo: 'scelta', v: 'A'…'E' }   la lettera giusta di un quiz a risposta multipla.
// null se la soluzione è un testo, un insieme, una disequazione, più risultati, altre variabili…
const PAROLE_UNITA = /^(?:gradi|grado|cm|mm|m|km|dm|cm²|m²|cm³|m³|g|kg|mg|l|ml|s|euro|€|anni|anno|mesi|giorni|ore|minuti|secondi|persone|studenti|modi|porzioni|unità|pezzi|volte|metri|centimetri|litri|chilogrammi|grammi|punti|casi|numeri|cifre|lati|diagonali|vertici|triangoli|rette|parole|anagrammi|squadre|gruppi|combinazioni|disposizioni|permutazioni|sequenze|codici|colori|libri|palline|carte|biglietti|monete)$/i;
const VIRGOLETTE = /[«»“”]/g;
// Toglie dalla formula l'unità di misura scritta in coda ($7{,}5\,\mathrm{m/s}$, $30^\circ$, $20\%$); restituisce [formula, unità].
function senzaUnita(tex) {
  let f = String(tex).replace(/\\mathrm\{e\}/g, 'e').replace(/\\(?:big|Big|bigg|Bigg)[lrm]?(?![a-zA-Z])/g, '').trim();
  // L'unità comincia con un simbolo di unità (\mathrm{…}, °, %, Ω); dopo possono venire prodotti, quozienti e potenze di unità.
  const UNITA = String.raw`\\(?:mathrm|text|textrm|mathit)\{(?:[^{}]|\{[^{}]*\})*\}|\^\{?\\circ\}?|\\circ|\\%|%|\\(?:Omega|degree)(?![a-zA-Z])|°`;
  const coda = new RegExp(String.raw`(?:\s|\\[,;:!]|~)*(?:${UNITA})(?:\s|\\[,;:!]|~|${UNITA}|\\(?:mu|cdot)(?![a-zA-Z])|\/|\^\{?-?\d+\}?)*$`);
  const m = f.match(coda);
  if (!m) return [f, ''];
  const resto = f.slice(0, m.index).trim();
  if (!/[\d}a-zA-Z)]$/.test(resto)) return [f, ''];
  const u = m[0].replace(/\\(?:mathrm|text|textrm|mathit)\{((?:[^{}]|\{[^{}]*\})*)\}/g, '$1').replace(/\\[,;:!]|~/g, ' ').replace(/\^\{?\\circ\}?|\\circ|\\degree/g, '°')
    .replace(/\\%/g, '%').replace(/\\Omega/g, 'Ω').replace(/\\mu/g, 'µ').replace(/\\cdot/g, '·').replace(/\^\{?(-?\d+)\}?/g, '^$1').replace(/[{}]/g, '').replace(/\s+/g, ' ').trim();
  return [resto, u];
}
function formulaUnica(corpo) {
  // L'intera soluzione è una formula ($…$ o $$…$$), con al più qualche parola di unità dopo («$15$ gradi», «$4$ porzioni»).
  const m = corpo.match(/^\$\$([\s\S]+?)\$\$\s*([^$]*)$/) || corpo.match(/^\$([^$]+)\$\s*([^$]*)$/);
  if (!m) return null;
  const dopo = m[2].replace(/[.;,]\s*$/, '').trim();
  if (!dopo) return { f: m[1], parole: '' };
  // Formula in display seguita da una giustificazione («perché …», «poiché …»): conta la formula.
  if (/^(?:perché|poiché|in quanto|infatti|dato che)\b/i.test(dopo) && !/\$\$/.test(dopo)) return { f: m[1], parole: '' };
  const parole = dopo.split(/\s+/);
  if (parole.length <= 2 && parole.every((w) => PAROLE_UNITA.test(w.replace(/[.,;]$/, '')))) return { f: m[1], parole: dopo };
  return null;
}
export function risultatoDaSoluzione(md) {
  const corpo = String(md || '').trim().replace(VIRGOLETTE, '');
  // Quiz: «Risposta A: …», «**Risposta corretta: B.** …», «Risposta corretta: (C)».
  const q = corpo.match(/^\**\s*(?:la\s+)?risposta(?:\s+(?:corretta|giusta|esatta))?\s*(?:è\s*)?:?\s*\(?\**\s*([A-E])\b/i);
  if (q) return { tipo: 'scelta', v: q[1].toUpperCase() };
  const unica = formulaUnica(corpo);
  if (!unica) return null;
  // Separatore delle migliaia (1\,485) e spazi sottili (4\,(x^2 - 3x)^3): non separano risultati.
  let formula = unica.f.trim().replace(/[.,;]\s*$/, '').replace(/(\d)\\,(?=\d{3}(?!\d))/g, '$1').replace(/\\[,;:!](?![a-zA-Z])/g, ' ');
  // Più risultati nella stessa formula: «x = 1 \text{ oppure } x = 2», «a = 2, \quad b = 3», sistemi, ±.
  if (/\\q?quad(?![a-zA-Z])|\\\\|\\begin|\\(?:cup|vee|lor|land|wedge|pm|mp|lor|implies|iff|Rightarrow|Leftrightarrow)(?![a-zA-Z])|(?<!\\);/.test(formula)) return null;
  if (/\\(?:text|mbox|textrm)\{[^{}]*\b(?:e|o|oppure|and|or|per|con|se|quando|dove|cioè|ovvero|quindi|mentre)\b[^{}]*\}/.test(formula)) return null;
  // Con «≈» si tiene il valore esatto prima del simbolo; se manca, il valore approssimato.
  const approx = formula.split(/\\approx|\\simeq/);
  if (approx.length > 2) return null;
  const parti = approx[0].split('=');
  let destra = parti[parti.length - 1].trim();
  let approssimato = approx[1]?.trim();
  if (approssimato !== undefined && !destra) { destra = approssimato; approssimato = undefined; }
  let unita = '';
  [destra, unita] = senzaUnita(destra);
  if (approssimato !== undefined) { const [a, u2] = senzaUnita(approssimato); approssimato = a; unita = unita || u2; }
  // Gradi dentro una funzione goniometrica (\cos 40^\circ): il valore esatto non si legge, resta quello dopo «≈».
  if (/\\(?:sin|cos|tan|cot)(?![a-zA-Z])/.test(destra) && /°|\\circ/.test(unita + destra)) {
    if (approssimato === undefined) return null;
    [destra, unita] = senzaUnita(approx[1].trim()); approssimato = undefined;
    unita = unita || unica.parole;
  }
  if (parti.slice(1, -1).some((t) => /,\s*[-\d(\\a-z]/i.test(t.replace(/\{,\}/g, '')))) return null;
  const unitaInFormula = Boolean(unita);
  unita = unita || unica.parole;
  if (/\\(qquad|quad|text|mbox|operatorname|lim|int|sum|in|cup|cap|le|ge|leq|geq|pm|mp|neq|approx|lt|gt|mathbb|to|cdots|dots|ldots|begin)(?![a-zA-Z])|[<>&]|\\\\/.test(destra)) return null;
  const primitiva = /\+\s*[cC]\s*$/.test(destra);
  if (primitiva) destra = destra.replace(/\+\s*[cC]\s*$/, '').trim();
  const lettere = destra.replace(/\\[a-zA-Z]+/g, '').replace(/\b(inf|pi)\b/g, '');
  if (!destra || /[a-df-wyzA-Z]/.test(lettere)) return null; // solo e, x e i comandi riconosciuti
  if (/,\s*[-\d(\\]/.test(destra.replace(/\{,\}/g, ''))) return null;   // più valori separati da virgole: (5, 2), x = 1, 2
  let espr;
  try { espr = daLatex(destra); } catch { return null; }
  const n = leggi(espr);
  if (!n) return null;
  if (/x/.test(lettere)) {
    if (unita) return null;
    const punti = PUNTI.map((x) => valore(n, x)).filter(Number.isFinite);
    if (punti.length < 4) return null;
    return { tipo: 'funzione', e: espr, primitiva };
  }
  if (primitiva) return null;
  if (parti.length < 2 && approssimato === undefined && /^[a-z]/i.test(unica.f.trim()) && !/^\\/.test(unica.f.trim())) return null;
  const v = valore(n);
  if (Number.isNaN(v)) return null;
  const out = { tipo: 'numero', v };
  if (unita) out.u = unita;
  // Valore arrotondato: cifre decimali scritte (7{,}5 → 1), oppure quelle del valore dopo «≈».
  const dec = (t) => { const m2 = String(t).match(/\d\{,\}(\d+)|\d\.(\d+)/); return m2 ? (m2[1] || m2[2]).length : 0; };
  if (approssimato !== undefined) {
    try { const va = valore(leggi(daLatex(approssimato))); if (Number.isFinite(va)) out.d = dec(approssimato); } catch { /* resta il valore esatto */ }
  } else if (approx.length === 2 && dec(destra)) out.d = dec(destra);
  else if (/^-?\d+(?:\{,\}|\.)\d+\\cdot10\^\{?-?\d+\}?$/.test(destra.replace(/\s/g, ''))) out.d = dec(destra); // notazione scientifica: sempre arrotondata
  else if (dec(destra) && (unita || dec(destra) >= 3) && /^-?\d+\{,\}\d+$|^-?\d+\.\d+$/.test(destra.replace(/\s/g, ''))) out.d = dec(destra);
  // Grandezze fisiche (unità scritta nella formula, non euro, percentuali o angoli): il valore è sempre arrotondato.
  if (out.d === undefined && unitaInFormula && !/^(?:euro|€|%|°|gradi|anni|anno|euro·anno.*|rad)$/.test(unita)) out.d = 0;
  return out;
}
// Esercizio intero (traccia e soluzione): esclusi quelli in cui conta la forma del risultato
// (scomporre, razionalizzare, semplificare…), perché anche l'espressione di partenza ha lo stesso valore.
// Per scomporre, sviluppare, ridurre e razionalizzare si controlla anche la forma della risposta (forma: …);
// gli altri esercizi in cui conta la forma restano senza verifica.
const FORME = [
  [/\b(?:scomponi|scomporre|fattorizza|fattorizzare)\b/i, 'prodotto'],
  [/\b(?:sviluppa|sviluppare|espandi|espandere|riduci|ridurre)\b/i, 'sviluppata'],
  [/\b(?:semplifica|semplificare)\b/i, 'sviluppata'],
  [/\b(?:razionalizza|razionalizzare)\b/i, 'razionale'],
];
const SOLO_FORMA = /\b(?:raccogli|raccogliere|scrivi in forma|scrivere in forma|esprimi in forma|esprimere in forma|scrivi come|scrivere come)\b/i;
export function risultatoDaEsercizio(md) {
  const testo = String(md || '');
  const sol = testo.match(/:::soluzione\s*\n([\s\S]*?)\n:::/)?.[1] ?? '';
  const r = risultatoDaSoluzione(sol);
  if (!r || r.tipo === 'scelta') return r;
  const traccia = testo.split(/:::soluzione/)[0].replace(/^---[\s\S]*?\n---/, '');
  if (SOLO_FORMA.test(traccia)) return null;
  const forme = FORME.filter(([re]) => re.test(traccia)).map(([, f]) => f);
  if (forme.length > 1) return null;
  if (forme.length === 1) {
    const albero = leggi(r.tipo === 'funzione' ? r.e : '');
    // La forma attesa deve essere quella della soluzione: «semplifica» con un risultato frazionario resta senza verifica.
    if (forme[0] === 'sviluppata' && (r.tipo !== 'funzione' || !inForma(albero, 'sviluppata'))) return null;
    if (forme[0] === 'prodotto' && r.tipo === 'funzione' && !inForma(albero, 'prodotto')) return null;
    if (forme[0] === 'razionale' && r.tipo !== 'numero') return null;
    if (forme[0] === 'prodotto' && r.tipo === 'numero') return null; // fattori primi: la forma della soluzione non si legge dal valore
    return { ...r, forma: forme[0] };
  }
  return r;
}
// Forma di una risposta già letta: prodotto (scomposta), sviluppata (somma di monomi, senza parentesi né frazioni con x),
// razionale (nessun denominatore con radici).
function haNodo(n, prova) {
  if (!n || typeof n !== 'object') return false;
  if (prova(n)) return true;
  return haNodo(n.a, prova) || haNodo(n.b, prova);
}
const conX = (n) => haNodo(n, (m) => m.v !== undefined);
export function inForma(n, forma) {
  if (!n) return false;
  if (forma === 'prodotto') {
    let t = n;
    while (t.op === 'neg' || t.op === '()') t = t.a;
    if (t.op === '^') return t.a.op === '()' || t.a.f !== undefined || t.a.v === 'x';
    if (t.op !== '*') return false;
    // almeno un fattore non costante che sia una somma fra parentesi o una potenza di x
    const fattori = []; const raccogli = (m) => { if (m.op === '*') { raccogli(m.a); raccogli(m.b); } else fattori.push(m); };
    raccogli(t);
    return fattori.filter((f) => conX(f)).length >= 2 || fattori.some((f) => f.op === '()' && conX(f));
  }
  if (forma === 'sviluppata') return !haNodo(n, (m) => (m.op === '()' && conX(m)) || (m.op === '/' && conX(m.b)) || (m.op === '^' && m.a.op === '()'));
  if (forma === 'razionale') return !haNodo(n, (m) => m.op === '/' && haNodo(m.b, (k) => k.f === 'sqrt' || k.f === 'cbrt' || (k.op === '^' && k.b && !Number.isInteger(valore(k.b)))));
  return true;
}
const PUNTI = [-2.31, -1.73, -1.17, -0.61, -0.29, 0.37, 0.83, 1.29, 1.87, 2.43, 3.19, 4.07];

// Confronto con il risultato della soluzione.
//  numero: valore esatto (piccola tolleranza numerica), ±∞ con lo stesso segno; "vicina" = decimale che approssima il risultato esatto;
//          se la soluzione è arrotondata (d cifre decimali), è giusto ogni valore che arrotondato dà lo stesso risultato (o entro lo 0,5%);
//          l'unità di misura scritta dallo studente si ignora, «x = 3» vale come «3», «10%» come 10 (o 0,1 se il risultato è in %);
//  funzione: stessi valori in almeno 4 punti di prova (per una primitiva basta che la differenza sia costante);
//  scelta: la lettera.
export function senzaUnitaScritta(src) {
  let t = String(src).trim();
  if (t.includes('=')) t = t.slice(t.lastIndexOf('=') + 1).trim();
  if (leggi(t)) return t;
  // Dalla fine: il prefisso più lungo che si legge, se il resto sembra un'unità di misura (m/s^2, cm², euro, °, %).
  for (let k = t.length - 1; k > 0; k--) {
    const resto = t.slice(k);
    if (!/^\s*[a-zA-Zµ°%Ω€'"²³][a-zA-Zµ°%Ω€'"²³/·*^.\s\d-]*$/.test(resto)) continue;
    // Il taglio cade fra un numero e l'unità, oppure prima di uno spazio o di un simbolo (°, %, €); mai dentro una parola.
    if (!/[\d).]$/.test(t.slice(0, k)) && !/^\s/.test(resto) && !/^[°%€'"²³]/.test(resto)) continue;
    const prima = t.slice(0, k).trim();
    if (prima && leggi(prima)) return prima;
  }
  return t;
}
export function confronta(scritta, giusta) {
  if (giusta.tipo === 'scelta') {
    const l = String(scritta).trim().replace(/^\(?\s*/, '').charAt(0).toUpperCase();
    return /^[A-E]$/.test(l) ? (l === giusta.v ? 'giusta' : 'sbagliata') : 'illeggibile';
  }
  if (giusta.tipo !== 'funzione') scritta = senzaUnitaScritta(scritta);
  const n = leggi(scritta);
  if (!n) return 'illeggibile';
  const conX = /(^|[^a-z])x/i.test(String(scritta).replace(/\b(exp|max)\b/gi, ''));
  if (giusta.tipo === 'funzione') {
    const g = leggi(giusta.e);
    const coppie = PUNTI.map((x) => [valore(n, x), valore(g, x)]).filter(([a, b]) => Number.isFinite(a) && Number.isFinite(b));
    if (coppie.length < 4) return conX ? 'sbagliata' : 'illeggibile';
    const d0 = giusta.primitiva ? coppie[0][0] - coppie[0][1] : 0;
    const ok = coppie.every(([a, b]) => Math.abs(a - b - d0) <= 1e-7 * Math.max(1, Math.abs(b)));
    if (ok && giusta.forma && !inForma(n, giusta.forma)) return 'forma-' + giusta.forma;
    return ok ? 'giusta' : 'sbagliata';
  }
  if (conX) return 'sbagliata';
  const v = valore(n);
  if (Number.isNaN(v)) return 'illeggibile';
  const g = giusta.v;
  if (!Number.isFinite(g) || !Number.isFinite(v)) return v === g ? 'giusta' : 'sbagliata';
  const vicino = (a) => {
    const scala = Math.max(1, Math.abs(g));
    if (Math.abs(a - g) <= 1e-9 * scala) return true;
    if (giusta.d !== undefined) return Math.abs(a - g) < Math.max(0.5 * 10 ** -giusta.d + 1e-12, 0.01 * Math.abs(g));
    return false;
  };
  if (vicino(v) || (giusta.u === '%' && vicino(v * 100))) return giusta.forma && !inForma(n, giusta.forma) ? 'forma-' + giusta.forma : 'giusta';
  const decimale = /\d[.,]\d/.test(String(scritta));
  if (decimale && Math.abs(v - g) <= Math.max(1e-2 * Math.abs(g), 1e-9)) return 'vicina';
  return 'sbagliata';
}

// ---------- Chiavi di correzione con più caselle ----------
// Per gli esercizi con più risultati la soluzione non basta: una chiave scritta a mano (src/data/chiavi/<materia>.json)
// dice quali caselle mostrare e che cosa contiene ciascuna. Tipi di casella:
//   numero      { v: "0{,}528", u?: "m", esatto?: true }                 un numero (unità facoltativa)
//   funzione    { v: "2x e^{x}", var?: ["x"], primitiva?, forma? }        un'espressione nelle variabili indicate
//   equazione   { v: "y = 2x - 1", var: ["x","y"] }                       un'equazione, a meno di un fattore non nullo
//   valori      { v: ["2","-3"], ordine?: false }                         più numeri: con ordine (punto, vettore) o senza (soluzioni)
//   intervallo  { v: "(-\\infty, 1) \\cup [3, +\\infty)", var?: "x" }     un sottoinsieme di ℝ (unione di intervalli)
//   matrice     { v: [["1","0"],["0","1"]] }                              una matrice
//   scelta      { opzioni: ["debole","forte"], v: "debole" }              una voce di un menu (classificazioni, sì/no)
// Ogni casella ha un'etichetta e (testo con $…$). La chiave compilata contiene i valori, quella pubblica solo la forma delle caselle.
const UNITA_ESATTE = /^(?:euro|€|%|°|gradi|anni|anno|rad)$/;
function numeroDaChiave(c) {
  const tex = String(c.v);
  const r = risultatoDaSoluzione(`$${tex}$`);
  if (!r || r.tipo !== 'numero') throw new Error(`numero non leggibile: ${tex}`);
  const out = { t: 'numero', v: r.v };
  if (r.d !== undefined) out.d = r.d;
  const u = c.u || r.u;
  if (u) out.u = u;
  if (c.esatto) delete out.d;
  else if (out.d === undefined && c.u && !UNITA_ESATTE.test(c.u)) out.d = 0;
  if (Number.isInteger(c.cifre)) out.d = c.cifre;
  return out;
}
function punti(vars) {
  return Array.from({ length: 12 }, (_, i) => Object.fromEntries(vars.map((v, j) => [v, PUNTI[(i * 5 + j * 7) % 12] + 0.13 * j])));
}
function espressioneDaLatex(tex, vars) {
  const e = daLatex(String(tex).replace(/\+\s*[cC]\s*$/, ''));
  const n = leggi(e, vars);
  if (!n) throw new Error(`espressione non leggibile: ${tex}`);
  const buoni = punti(vars).map((p) => valore(n, p)).filter(Number.isFinite);
  if (buoni.length < 4) throw new Error(`espressione non definita nei punti di prova: ${tex}`);
  return e;
}
// Insieme di numeri reali: unione di intervalli { a, b, ca, cb } (ca, cb: estremi compresi).
const PIU_INF = Infinity;
function normalizza(iv) {
  const v = iv.filter((x) => x.a < x.b || (x.a === x.b && x.ca && x.cb)).sort((p, q) => p.a - q.a || (q.ca - p.ca));
  const out = [];
  for (const x of v) {
    const u = out[out.length - 1];
    if (u && (u.b > x.a || (u.b === x.a && (u.cb || x.ca)))) {
      if (x.b > u.b || (x.b === u.b && x.cb)) { u.b = x.b; u.cb = x.cb; }
    } else out.push({ ...x });
  }
  return out;
}
function estremo(src, vars) {
  const t = String(src).trim();
  const n = leggi(t, vars);
  if (!n) throw new Error('estremo');
  const v = valore(n);
  if (Number.isNaN(v)) throw new Error('estremo');
  return v;
}
function intervallo(pezzo, opz) {
  const m = pezzo.match(/^([[\](])(.*)([[\])])$/s);
  if (!m) return null;
  const dentro = m[2];
  let a, b;
  if (dentro.includes(';')) [a, b] = dentro.split(';');
  else {
    // virgole fuori dalle parentesi: con la virgola decimale (1,5) servono il punto e virgola o il punto
    const virg = []; let d = 0;
    for (let i = 0; i < dentro.length; i++) { const ch = dentro[i]; if (ch === '(') d++; else if (ch === ')') d--; else if (ch === ',' && d === 0) virg.push(i); }
    let k;
    if (opz.virgola || virg.length === 1) k = virg[0];
    else if (virg.length === 3) k = virg[1];
    else throw new Error('separatore');
    a = dentro.slice(0, k); b = dentro.slice(k + 1);
  }
  return { a: estremo(a, opz.vars), b: estremo(b, opz.vars), ca: m[1] === '[', cb: m[3] === ']' };
}
function disuguaglianza(pezzo, v, opz) {
  const s = pezzo.replace(/≤|=</g, '<=').replace(/≥|=>/g, '>=').replace(/≠|<>/g, '!=');
  const x = v.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const OP = '(<=|>=|<|>)';
  let m = s.match(new RegExp(`^(.+?)${OP}\\s*${x}\\s*${OP}(.+)$`));
  if (m) {
    const [, l, o1, o2, r] = m;
    const p = estremo(l, opz.vars), q = estremo(r, opz.vars);
    if (o1[0] === '<' && o2[0] === '<') return [{ a: p, b: q, ca: o1 === '<=', cb: o2 === '<=' }];
    if (o1[0] === '>' && o2[0] === '>') return [{ a: q, b: p, ca: o2 === '>=', cb: o1 === '>=' }];
    throw new Error('disuguaglianza');
  }
  m = s.match(new RegExp(`^${x}\\s*(<=|>=|<|>|!=|=)\\s*(.+)$`));
  if (m) {
    const c = estremo(m[2], opz.vars);
    switch (m[1]) {
      case '<': return [{ a: -PIU_INF, b: c, ca: false, cb: false }];
      case '<=': return [{ a: -PIU_INF, b: c, ca: false, cb: true }];
      case '>': return [{ a: c, b: PIU_INF, ca: false, cb: false }];
      case '>=': return [{ a: c, b: PIU_INF, ca: true, cb: false }];
      case '!=': return [{ a: -PIU_INF, b: c, ca: false, cb: false }, { a: c, b: PIU_INF, ca: false, cb: false }];
      default: return [{ a: c, b: c, ca: true, cb: true }];
    }
  }
  m = s.match(new RegExp(`^(.+?)\\s*(<=|>=|<|>)\\s*${x}$`));
  if (m) {
    const giro = { '<': '>', '<=': '>=', '>': '<', '>=': '<=' }[m[2]];
    return disuguaglianza(`${v}${giro}${m[1]}`, v, opz);
  }
  return null;
}
export function leggiInsieme(src, v = 'x', opz = {}) {
  const o = { vars: [], ...opz };
  const s = String(src).trim().toLowerCase().replace(/\s+/g, ' ').replace(/^\{\s*([^}]*)\s*\}$/, (_, d) => (/[<>≤≥]/.test(d) ? d.replace(/^[^|:]*[|:]\s*/, '') : `{${d}}`));
  if (/^(?:r|ℝ|tutti i (?:numeri )?reali|ogni x|per ogni x|all real numbers|\(-inf[;,] ?\+?inf\))$/.test(s)) return [{ a: -PIU_INF, b: PIU_INF, ca: false, cb: false }];
  if (/^(?:∅|ø|vuoto|insieme vuoto|nessuna(?: soluzione)?|empty|\{\s*\})$/.test(s)) return [];
  const parti = s.split(/\s*(?:∪|\bu\b|\bor\b|\bo\b|\bvel\b|∨|\|\|)\s*/).filter(Boolean);
  let out = [];
  for (const p0 of parti) {
    const p = p0.trim();
    const pt = p.match(/^\{(.+)\}$/);
    if (pt) { for (const e of pt[1].split(opz.virgola ? ',' : /;|, /)) { const c = estremo(e, o.vars); out.push({ a: c, b: c, ca: true, cb: true }); } continue; }
    const i = intervallo(p, o);
    if (i) { out.push(i); continue; }
    const d = disuguaglianza(p, v, o);
    if (d) { out.push(...d); continue; }
    throw new Error('insieme');
  }
  return normalizza(out);
}
function insiemeDaLatex(tex, v) {
  const s = String(tex)
    .replace(/\\(left|right|big|Big)(?![a-zA-Z])/g, '')
    .replace(/\\cup/g, ' U ').replace(/\\mathbb\s*\{?R\}?/g, 'R').replace(/\\(emptyset|varnothing)/g, '∅')
    .replace(/\\(leq|le|leqslant)(?![a-zA-Z])/g, '<=').replace(/\\(geq|ge|geqslant)(?![a-zA-Z])/g, '>=')
    .replace(/\\(neq|ne)(?![a-zA-Z])/g, '!=').replace(/\\lt(?![a-zA-Z])/g, '<').replace(/\\gt(?![a-zA-Z])/g, '>')
    .replace(/\\\{/g, '{').replace(/\\\}/g, '}');
  const pezziU = s.split(' U ').map((p) => p.trim()).map((p) => (/^[R∅]$/.test(p) ? p : p.replace(/^([[\](])(.*)([[\])])$/s, (_, a, d, b) => `${a}${d.split(',').map((e) => daLatex(e)).join(',')}${b}`)));
  const tradotti = pezziU.map((p) => (/^[[\](]/.test(p) || /^[R∅]$/.test(p) || /^\{/.test(p) ? p : daLatex(p)));
  return leggiInsieme(tradotti.join(' U '), v, { virgola: true });
}
export function compilaChiave(k) {
  if (!k || !Array.isArray(k.campi) || !k.campi.length) throw new Error('chiave senza caselle');
  const campi = k.campi.map((c) => {
    const base = { e: String(c.e || '') };
    switch (c.t) {
      case 'numero': return { ...base, ...numeroDaChiave(c) };
      case 'funzione': {
        const vars = c.var || ['x'];
        const out = { ...base, t: 'funzione', e2: espressioneDaLatex(c.v, vars), vars };
        if (c.primitiva) out.primitiva = true;
        if (c.forma) out.forma = c.forma;
        return out;
      }
      case 'equazione': {
        const vars = c.var || ['x', 'y'];
        const [l, r, resto] = String(c.v).split('=');
        if (r === undefined || resto !== undefined) throw new Error(`equazione senza un solo «=»: ${c.v}`);
        return { ...base, t: 'equazione', e2: `(${espressioneDaLatex(l, vars)})-(${espressioneDaLatex(r, vars)})`, vars };
      }
      case 'valori': {
        if (!Array.isArray(c.v) || c.v.length < 2) throw new Error('valori: servono almeno due valori');
        return { ...base, t: 'valori', v: c.v.map((x) => numeroDaChiave({ v: x }).v), ordine: c.ordine !== false && c.ordine !== undefined ? true : !!c.ordine };
      }
      case 'intervallo': return { ...base, t: 'intervallo', v: insiemeDaLatex(c.v, c.var || 'x'), var: c.var || 'x' };
      case 'matrice': {
        if (!Array.isArray(c.v) || !c.v.length || !c.v.every((r) => Array.isArray(r) && r.length === c.v[0].length)) throw new Error('matrice non rettangolare');
        return { ...base, t: 'matrice', v: c.v.map((r) => r.map((x) => numeroDaChiave({ v: x }).v)) };
      }
      case 'scelta': {
        const opzioni = (c.opzioni || []).map(String);
        const i = typeof c.v === 'number' ? c.v : opzioni.indexOf(String(c.v));
        if (opzioni.length < 2 || i < 0 || i >= opzioni.length) throw new Error(`scelta: «${c.v}» non è tra le opzioni`);
        return { ...base, t: 'scelta', opzioni, v: i };
      }
      default: throw new Error(`tipo di casella sconosciuto: ${c.t}`);
    }
  });
  return { tipo: 'multi', campi };
}
// Forma delle caselle senza i risultati: è ciò che arriva alla pagina.
export function chiavePubblica(r) {
  return r.campi.map((c) => {
    const o = { e: c.e, t: c.t };
    if (c.u) o.u = c.u;
    if (c.vars) o.vars = c.vars;
    if (c.primitiva) o.primitiva = true;
    if (c.t === 'valori') { o.n = c.v.length; o.ordine = c.ordine; }
    if (c.t === 'matrice') { o.righe = c.v.length; o.colonne = c.v[0].length; }
    if (c.t === 'scelta') o.opzioni = c.opzioni;
    if (c.t === 'intervallo') o.var = c.var;
    return o;
  });
}
function confrontaEspressione(scritta, e2, vars, { primitiva = false, forma } = {}) {
  const n = leggi(scritta, vars);
  if (!n) return 'illeggibile';
  const g = leggi(e2, vars);
  const coppie = punti(vars).map((p) => [valore(n, p), valore(g, p)]).filter(([a, b]) => Number.isFinite(a) && Number.isFinite(b));
  if (coppie.length < 4) return 'sbagliata';
  const d0 = primitiva ? coppie[0][0] - coppie[0][1] : 0;
  const ok = coppie.every(([a, b]) => Math.abs(a - b - d0) <= 1e-7 * Math.max(1, Math.abs(b)));
  if (ok && forma && !inForma(n, forma)) return 'forma-' + forma;
  return ok ? 'giusta' : 'sbagliata';
}
function confrontaEquazione(scritta, e2, vars) {
  const [l, r, resto] = String(scritta).split('=');
  if (resto !== undefined) return 'illeggibile';
  const ns = leggi(r === undefined ? l : `(${l})-(${r})`, vars);
  if (!ns) return 'illeggibile';
  const g = leggi(e2, vars);
  const rapporti = [];
  for (const p of punti(vars)) {
    const a = valore(ns, p), b = valore(g, p);
    if (!Number.isFinite(a) || !Number.isFinite(b)) continue;
    if (Math.abs(b) < 1e-9) { if (Math.abs(a) > 1e-7) return 'sbagliata'; continue; }
    rapporti.push(a / b);
  }
  if (rapporti.length < 4) return 'sbagliata';
  const k = rapporti[0];
  if (Math.abs(k) < 1e-9) return 'sbagliata';
  return rapporti.every((x) => Math.abs(x - k) <= 1e-7 * Math.max(1, Math.abs(k))) ? 'giusta' : 'sbagliata';
}
// Più numeri in una casella: «2; -3», «(1, 2)», «x = 1, x = 4».
export function dividiValori(src, n) {
  let s = String(src).trim().replace(/^[[({]\s*/, '').replace(/\s*[\])}]$/, '');
  let parti;
  if (s.includes(';')) parti = s.split(';');
  else {
    const virg = []; let d = 0;
    for (let i = 0; i < s.length; i++) { const ch = s[i]; if ('([{'.includes(ch)) d++; else if (')]}'.includes(ch)) d--; else if (ch === ',' && d === 0) virg.push(i); }
    const conSpazio = virg.filter((i) => s[i + 1] === ' ');
    const tagli = virg.length === n - 1 ? virg : conSpazio.length === n - 1 ? conSpazio : virg.length === 2 * n - 1 ? virg.filter((_, j) => j % 2 === 1) : virg;
    parti = []; let a = 0;
    for (const i of tagli) { parti.push(s.slice(a, i)); a = i + 1; }
    parti.push(s.slice(a));
  }
  return parti.map((x) => x.trim()).filter(Boolean);
}
function confrontaNumero(scritta, v, extra = {}) {
  return confronta(scritta, { tipo: 'numero', v, ...extra });
}
export function confrontaCampo(risposta, c) {
  const vuota = (x) => x === undefined || x === null || (typeof x === 'string' && !x.trim());
  if (c.t === 'matrice') {
    if (!Array.isArray(risposta) || risposta.length !== c.v.length) return 'illeggibile';
    const esiti = c.v.flatMap((riga, i) => riga.map((g, j) => (vuota(risposta[i]?.[j]) ? 'illeggibile' : confrontaNumero(String(risposta[i][j]), g))));
    if (esiti.includes('illeggibile')) return 'illeggibile';
    return esiti.every((e) => e === 'giusta') ? 'giusta' : esiti.every((e) => e === 'giusta' || e === 'vicina') ? 'vicina' : 'sbagliata';
  }
  if (vuota(risposta)) return 'illeggibile';
  const s = String(risposta);
  switch (c.t) {
    case 'numero': return confrontaNumero(s, c.v, { u: c.u, d: c.d });
    case 'funzione': return confrontaEspressione(s.includes('=') ? s.slice(s.lastIndexOf('=') + 1) : s, c.e2, c.vars, c);
    case 'equazione': return confrontaEquazione(s, c.e2, c.vars);
    case 'scelta': return Number(s) === c.v ? 'giusta' : /^\d+$/.test(s) ? 'sbagliata' : 'illeggibile';
    case 'intervallo': {
      let ins;
      try { ins = leggiInsieme(s, c.var || 'x'); } catch { return 'illeggibile'; }
      if (ins.length !== c.v.length) return 'sbagliata';
      const uguale = (p, q) => (p === q) || Math.abs(p - q) <= 1e-7 * Math.max(1, Math.abs(q));
      return ins.every((x, i) => {
        const g = c.v[i];
        return uguale(x.a, g.a) && uguale(x.b, g.b) && (!Number.isFinite(g.a) || x.ca === g.ca) && (!Number.isFinite(g.b) || x.cb === g.cb);
      }) ? 'giusta' : 'sbagliata';
    }
    case 'valori': {
      const parti = dividiValori(s, c.v.length);
      if (parti.length !== c.v.length) return parti.every((x) => leggi(senzaUnitaScritta(x))) ? 'sbagliata' : 'illeggibile';
      if (!parti.every((x) => leggi(senzaUnitaScritta(x)))) return 'illeggibile';
      if (c.ordine) {
        const e = parti.map((x, i) => confrontaNumero(x, c.v[i]));
        return e.every((x) => x === 'giusta') ? 'giusta' : e.every((x) => x === 'giusta' || x === 'vicina') ? 'vicina' : 'sbagliata';
      }
      const rimasti = [...c.v]; let vicina = false;
      for (const x of parti) {
        let k = rimasti.findIndex((g) => confrontaNumero(x, g) === 'giusta');
        if (k < 0) { k = rimasti.findIndex((g) => confrontaNumero(x, g) === 'vicina'); if (k >= 0) vicina = true; }
        if (k < 0) return 'sbagliata';
        rimasti.splice(k, 1);
      }
      return vicina ? 'vicina' : 'giusta';
    }
    default: return 'illeggibile';
  }
}
export function confrontaMulti(risposte, chiave) {
  if (!Array.isArray(risposte) || risposte.length !== chiave.campi.length) return { esito: 'illeggibile', campi: [] };
  const campi = chiave.campi.map((c, i) => confrontaCampo(risposte[i], c));
  const giuste = campi.filter((e) => e === 'giusta').length;
  const esito = giuste === campi.length ? 'giusta' : campi.includes('illeggibile') ? 'illeggibile' : giuste ? 'parziale' : 'sbagliata';
  return { esito, campi, giuste };
}
