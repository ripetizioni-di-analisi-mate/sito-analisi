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
const PAROLE = [...Object.keys({ sqrt: 1, cbrt: 1, ln: 1, log: 1, exp: 1, abs: 1, sin: 1, cos: 1, tan: 1, arctan: 1, atan: 1, arcsin: 1, asin: 1, arccos: 1, acos: 1, sinh: 1, cosh: 1, tanh: 1 }), 'pi', 'e', 'x', 'inf', 'infinito', 'infinity'];
const LATEX_FUNZ = { sqrt: '\\sqrt', cbrt: '\\sqrt[3]', ln: '\\ln', log: '\\ln', exp: '\\exp', abs: '', sin: '\\sin', cos: '\\cos', tan: '\\tan', arctan: '\\arctan', atan: '\\arctan', arcsin: '\\arcsin', asin: '\\arcsin', arccos: '\\arccos', acos: '\\arccos', sinh: '\\sinh', cosh: '\\cosh', tanh: '\\tanh' };

// ---------- testo scritto dallo studente → albero ----------
function pezzi(src) {
  const s = String(src)
    .replace(/[−–—]/g, '-').replace(/[×·⋅]/g, '*').replace(/[÷:]/g, '/').replace(/π/g, 'pi').replace(/∞/g, 'inf').replace(/√/g, 'sqrt')
    .replace(/\*\*/g, '^').replace(/(\d),(\d)/g, '$1.$2').replace(/\s+/g, ' ').trim().toLowerCase()
    .replace(/\|([^|]*)\|/g, ' abs($1) ');
  const t = s.match(/\d*\.\d+|\d+|[a-z]+|[-+*/^()]|\S/g) || [];
  // Lettere attaccate (sinx, xsinx, 2pix, ex): si separano nelle parole note, scegliendo ogni volta la più lunga.
  return t.flatMap((x) => {
    if (!/^[a-z]+$/.test(x) || PAROLE.includes(x)) return [x];
    const out = [];
    let r = x;
    while (r) {
      const p = PAROLE.filter((w) => r.startsWith(w)).sort((a, b) => b.length - a.length)[0];
      if (!p) return [x];
      out.push(p); r = r.slice(p.length);
    }
    return out;
  });
}
// Variabile ammessa nelle risposte che sono funzioni (primitive, derivate): x.
export function leggi(src) {
  const t = pezzi(src);
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
    if (x === 'x') return { v: 'x' };
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
  if (n.v) return x;
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
  if (n.v) return n.v;
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
//  - { tipo: 'numero', v }   una sola uguaglianza con un numero reale (o ±∞) a destra dell'ultimo "=";
//  - { tipo: 'funzione', e, primitiva }   un'espressione nella sola variabile x (derivata, funzione), oppure una primitiva "… + c".
// null se la soluzione è testo, un insieme, una disequazione, più risultati, altre variabili…
export function risultatoDaSoluzione(md) {
  const corpo = String(md || '').trim();
  const m = corpo.match(/^\$\$([\s\S]+?)\$\$$/) || corpo.match(/^\$([^$]+)\$\.?$/);
  if (!m) return null;
  const formula = m[1].trim().replace(/[.,;]\s*$/, '');
  const parti = formula.split('=');
  let destra = parti[parti.length - 1].trim();
  if (/\\(qquad|quad|text|mbox|operatorname|lim|int|sum|in|cup|cap|le|ge|leq|geq|pm|mp|neq|approx|lt|gt|mathbb|to|cdots|dots|ldots|begin)(?![a-zA-Z])|[<>&]|\\\\/.test(destra)) return null;
  const primitiva = /\+\s*[cC]\s*$/.test(destra);
  if (primitiva) destra = destra.replace(/\+\s*[cC]\s*$/, '').trim();
  const lettere = destra.replace(/\\[a-zA-Z]+/g, '').replace(/\b(inf|pi)\b/g, '');
  if (!destra || /[a-df-wyzA-Z]/.test(lettere)) return null; // solo e, x e i comandi riconosciuti
  if (parti.length < 2 && !/x/.test(lettere)) return null;   // senza "=" solo espressioni in x (primitive scritte da sole)
  let espr;
  try { espr = daLatex(destra); } catch { return null; }
  const n = leggi(espr);
  if (!n) return null;
  if (/x/.test(lettere)) {
    const punti = PUNTI.map((x) => valore(n, x)).filter(Number.isFinite);
    if (punti.length < 4) return null;
    return { tipo: 'funzione', e: espr, primitiva };
  }
  if (primitiva) return null;
  const v = valore(n);
  if (Number.isNaN(v)) return null;
  return { tipo: 'numero', v };
}
const PUNTI = [-2.31, -1.73, -1.17, -0.61, -0.29, 0.37, 0.83, 1.29, 1.87, 2.43, 3.19, 4.07];

// Confronto con il risultato della soluzione.
//  numero: valore esatto (piccola tolleranza numerica), ±∞ con lo stesso segno; "vicina" = decimale che approssima il risultato esatto;
//  funzione: stessi valori in almeno 4 punti di prova (per una primitiva basta che la differenza sia costante).
export function confronta(scritta, giusta) {
  const n = leggi(scritta);
  if (!n) return 'illeggibile';
  const conX = /(^|[^a-z])x/i.test(String(scritta).replace(/\b(exp|max)\b/gi, ''));
  if (giusta.tipo === 'funzione') {
    const g = leggi(giusta.e);
    const coppie = PUNTI.map((x) => [valore(n, x), valore(g, x)]).filter(([a, b]) => Number.isFinite(a) && Number.isFinite(b));
    if (coppie.length < 4) return conX ? 'sbagliata' : 'illeggibile';
    const d0 = giusta.primitiva ? coppie[0][0] - coppie[0][1] : 0;
    const ok = coppie.every(([a, b]) => Math.abs(a - b - d0) <= 1e-7 * Math.max(1, Math.abs(b)));
    return ok ? 'giusta' : 'sbagliata';
  }
  if (conX) return 'sbagliata';
  const v = valore(n);
  if (Number.isNaN(v)) return 'illeggibile';
  const g = giusta.v;
  if (!Number.isFinite(g) || !Number.isFinite(v)) return v === g ? 'giusta' : 'sbagliata';
  const scala = Math.max(1, Math.abs(g));
  if (Math.abs(v - g) <= 1e-9 * scala) return 'giusta';
  const decimale = /\d[.,]\d/.test(String(scritta));
  if (decimale && Math.abs(v - g) <= 5e-3 * scala) return 'vicina';
  return 'sbagliata';
}
