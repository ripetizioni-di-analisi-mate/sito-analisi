// Converte un'espressione dei grafici (sintassi JavaScript/Math: x^2-4*x+3, 1/x, sqrt(x), log(x)/log(2))
// nella formula LaTeX da mostrare in legenda, con le frazioni in colonna.
// Restituisce null se l'espressione non è una semplice funzione di x (condizioni, NaN, trucchi di disegno).

const FUNZIONI = { sin: '\\sin', cos: '\\cos', tan: '\\tan', log: '\\ln', ln: '\\ln', atan: '\\arctan', asin: '\\arcsin', acos: '\\arccos', sinh: '\\sinh', cosh: '\\cosh', tanh: '\\tanh' };

function analizza(src) {
  const t = String(src).replace(/\s+/g, '').match(/\d*\.\d+|\d+|[A-Za-z_]\w*|[-+*/^(),]/g);
  if (!t || t.join('') !== String(src).replace(/\s+/g, '')) return null;
  let i = 0;
  const vedi = () => t[i], prendi = () => t[i++];
  const somma = () => {
    let n = prodotto();
    while (vedi() === '+' || vedi() === '-') { const op = prendi(); n = { op, a: n, b: prodotto() }; }
    return n;
  };
  const prodotto = () => {
    let n = unario();
    while (vedi() === '*' || vedi() === '/') { const op = prendi(); n = { op, a: n, b: unario() }; }
    return n;
  };
  const unario = () => (vedi() === '-' ? (prendi(), { op: 'neg', a: unario() }) : vedi() === '+' ? (prendi(), unario()) : potenza());
  const potenza = () => {
    const base = primario();
    if (vedi() === '^') { prendi(); return { op: '^', a: base, b: unario() }; }
    return base;
  };
  const primario = () => {
    const x = prendi();
    if (x === undefined) throw new Error('fine');
    if (x === '(') { const n = somma(); if (prendi() !== ')') throw new Error(')'); return { op: '()', a: n }; }
    if (/^[\d.]/.test(x)) return { num: x };
    if (x === 'x') return { v: 'x' };
    if (x === 'pi' || x === 'PI') return { v: '\\pi' };
    if (x === 'E') return { v: 'e' };
    if (vedi() === '(') {
      prendi(); const a = somma(); if (prendi() !== ')') throw new Error(')');
      return { f: x, a };
    }
    throw new Error('simbolo ' + x);
  };
  try { const n = somma(); return i === t.length ? n : null; } catch { return null; }
}

const togli = (n) => (n && n.op === '()' ? togli(n.a) : n);
const semplice = (n) => { n = togli(n); return n.num !== undefined || n.v || n.f; };
// I decimali che sono frazioni semplici (0.5, 1.5, 0.25…) vanno in colonna, come nel resto del sito.
const numero = (s) => {
  if (s.includes('.')) for (const q of [2, 3, 4, 5]) {
    const p = Number(s) * q;
    if (Math.abs(p - Math.round(p)) < 1e-9) return `\\dfrac{${Math.round(p)}}{${q}}`;
  }
  return s.replace('.', '{,}');
};
const iniziaConNumero = (n) => { n = togli(n); return n.num !== undefined || n.op === 'neg' || ((n.op === '^' || n.op === '*') && iniziaConNumero(n.a)); };

function latex(n) {
  if (n.num !== undefined) return numero(n.num);
  if (n.v) return n.v;
  if (n.op === '()') return `\\left(${latex(n.a)}\\right)`;
  if (n.op === 'neg') return `-${n.a.op === '+' || n.a.op === '-' ? `\\left(${latex(n.a)}\\right)` : latex(n.a)}`;
  if (n.op === '+') return `${latex(n.a)} + ${latex(n.b)}`;
  if (n.op === '-') return `${latex(n.a)} - ${togli(n.b).op === '+' || togli(n.b).op === '-' ? `\\left(${latex(togli(n.b))}\\right)` : latex(n.b)}`;
  if (n.op === '/') {
    // log(x)/log(2) è il logaritmo in base 2
    const a = togli(n.a), b = togli(n.b);
    if (a.f === 'log' && b.f === 'log' && togli(b.a).num !== undefined) return `\\log_{${numero(togli(b.a).num)}} ${semplice(a.a) ? latex(togli(a.a)) : `\\left(${latex(togli(a.a))}\\right)`}`;
    return `\\dfrac{${latex(a)}}{${latex(b)}}`;
  }
  if (n.op === '*') {
    const a = togli(n.a), b = togli(n.b);
    if (b.v === 'x' && a.v === 'x') return 'x^2';
    const sa = a.op === '+' || a.op === '-' ? `\\left(${latex(a)}\\right)` : latex(a);
    const sb = b.op === '+' || b.op === '-' ? `\\left(${latex(b)}\\right)` : latex(b);
    return iniziaConNumero(b) ? `${sa} \\cdot ${sb}` : `${sa} ${sb}`;
  }
  if (n.op === '^') {
    const a = togli(n.a), b = togli(n.b);
    const base = semplice(a) && !a.f && !(a.num !== undefined && a.num.includes('.')) ? latex(a) : `\\left(${latex(a)}\\right)`;
    return `${base}^{${latex(b)}}`;
  }
  if (n.f) {
    const a = togli(n.a);
    if (n.f === 'sqrt') return `\\sqrt{${latex(a)}}`;
    if (n.f === 'cbrt') return `\\sqrt[3]{${latex(a)}}`;
    if (n.f === 'abs') return `\\left|${latex(a)}\\right|`;
    if (n.f === 'exp') return `e^{${latex(a)}}`;
    if (FUNZIONI[n.f]) return `${FUNZIONI[n.f]} ${semplice(a) && !a.f ? latex(a) : `\\left(${latex(a)}\\right)`}`;
    throw new Error('funzione ' + n.f);
  }
  throw new Error('nodo');
}

// Termini come 1+0*x (trucchi per disegnare una retta orizzontale) vengono semplificati.
function semplifica(n) {
  if (!n || typeof n !== 'object') return n;
  for (const k of ['a', 'b']) if (n[k]) n[k] = semplifica(n[k]);
  const zero = (m) => m && togli(m).num !== undefined && Number(togli(m).num) === 0;
  if (n.op === '*' && (zero(n.a) || zero(n.b))) return { num: '0' };
  if (n.op === '+' && zero(n.b)) return n.a;
  if (n.op === '+' && zero(n.a)) return n.b;
  if (n.op === '-' && zero(n.b)) return n.a;
  return n;
}

export function inLatex(src, variabile = 'x') {
  // numeri approssimati (più di due decimali) renderebbero la legenda illeggibile: lì basta la didascalia
  if (/\d\.\d{3,}/.test(String(src))) return null;
  const n = analizza(src);
  if (!n) return null;
  try { return latex(semplifica(n)).replace(/(?<![\\a-zA-Z])x(?![a-zA-Z])/g, variabile); } catch { return null; }
}
