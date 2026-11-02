// Figure con cursore (::cursore{tipo="…"}): per ogni tipo, i valori predefiniti, gli attributi del grafico
// in funzione del valore del cursore e i numeri da mostrare sotto la figura.
// Modulo puro (niente KaTeX, niente Node): lo usano cursore.mjs a tempo di build, per la figura statica,
// e src/scripts/cursori.ts nel browser, che ridisegna la figura quando il cursore si sposta.
//
// Ogni tipo ha:
//   predefiniti   parametri (ogni attributo della direttiva con lo stesso nome li sostituisce);
//                 min, max, passo, valore descrivono il cursore
//   figura(p, v)  attributi per disegnaSvg (gli stessi di ::grafico) con il cursore al valore v
//   valori(p, v, en)  testi dei numeri, { nome: '1,50', … }, e in «testo» la lettura per i lettori di schermo
//   testi(p, en)  { nome: tex del nome del cursore, righe: […] }: LaTeX tra $…$ e segnaposto {nome}
//   legenda(p, en)  voci della legenda (fisse: la legenda non cambia con il cursore)

import { compila } from './grafico-svg.mjs';

// Numero con la virgola decimale in italiano, il punto in inglese, il segno meno tipografico.
export function numero(x, decimali, en) {
  if (!Number.isFinite(x)) return '–';
  let s = Math.abs(x) < 0.5 * 10 ** -decimali ? (0).toFixed(decimali) : x.toFixed(decimali);
  if (!en) s = s.replace('.', ',');
  return s.replace('-', '−');
}
const nr = (x) => String(Number(x.toFixed(10)));
// Retta per (x0, y0) con pendenza k, come espressione per il grafico.
const retta = (x0, y0, k) => `${nr(y0)}+(${nr(k)})*(x-(${nr(x0)}))`;

const FATT = [1];
for (let k = 1; k <= 30; k++) FATT[k] = FATT[k - 1] * k;
// Coefficienti di McLaurin delle funzioni disponibili per il tipo «taylor».
const MCLAURIN = {
  exp: { f: 'exp(x)', c: (k) => 1 / FATT[k], tex: 'e^x', in1: 'e' },
  sin: { f: 'sin(x)', c: (k) => (k % 2 ? (k % 4 === 1 ? 1 : -1) / FATT[k] : 0), tex: '\\sin x', in1: '\\sin 1' },
  cos: { f: 'cos(x)', c: (k) => (k % 2 ? 0 : (k % 4 === 0 ? 1 : -1) / FATT[k]), tex: '\\cos x', in1: '\\cos 1' },
};

export const TIPI = {
  // Definizione di limite per la retta y = m x + q in x0: L = m x0 + q, e basta δ = ε / |m|.
  'epsilon-delta': {
    predefiniti: { m: 3, q: -1, x0: 2, min: 0.3, max: 3, passo: 0.15, valore: 1.5, xmin: -1, xmax: 4, ymin: -2, ymax: 9 },
    figura(p, e) {
      const L = p.m * p.x0 + p.q, d = e / Math.abs(p.m);
      const f = `${nr(p.m)}*x${p.q < 0 ? '-' : '+'}${nr(Math.abs(p.q))}`;
      return {
        f, xmin: p.xmin, xmax: p.xmax, ymin: p.ymin, ymax: p.ymax,
        area: `${nr(L + e)};${nr(L - e)};${nr(p.x0 - d)};${nr(p.x0 + d)}`,
        punti: `${nr(p.x0)},${nr(L)},pieno`,
        // le rette y = L ± ε e x = x0 ± δ, da un bordo all'altro del riquadro
        segmenti: [[p.xmin, L + e, p.xmax, L + e], [p.xmin, L - e, p.xmax, L - e], [p.x0 - d, p.ymin, p.x0 - d, p.ymax], [p.x0 + d, p.ymin, p.x0 + d, p.ymax]]
          .map((s) => s.map(nr).join(',')).join(';'),
        etichette: `0.1,${nr(L + e + 0.5)},L + ε;0.1,${nr(L - e - 0.7)},L − ε`,
      };
    },
    valori(p, e, en) {
      const d = e / Math.abs(p.m);
      const v = { e: numero(e, 2, en), d: numero(d, 2, en) };
      return { ...v, testo: `ε = ${v.e}, δ = ${v.d}` };
    },
    testi: (p) => ({ nome: '\\varepsilon =', righe: [`$\\delta = \\dfrac{\\varepsilon}{${nr(Math.abs(p.m))}} =$ {d}`] }),
    legenda: () => null, // voce automatica: y = 3x - 1
  },

  // Secante per (x0, f(x0)) e (x0 + h, f(x0 + h)); tangente tratteggiata di pendenza f'(x0).
  secante: {
    predefiniti: { f: 'x^2', x0: 1, derivata: 2, nomef: 'x^2', min: -1.5, max: 2, passo: 0.05, valore: 1, xmin: -1, xmax: 3.4, ymin: -2, ymax: 10 },
    figura(p, h) {
      const f = compila(p.f), y0 = f(p.x0), y1 = f(p.x0 + h);
      const curve = [String(p.f), retta(p.x0, y0, p.derivata)];
      const a = { f: curve.join(';'), xmin: p.xmin, xmax: p.xmax, ymin: p.ymin, ymax: p.ymax, punti: `${nr(p.x0)},${nr(y0)},pieno`, legenda: '0' };
      if (Math.abs(h) > 1e-9) {
        a.f += `;${retta(p.x0, y0, (y1 - y0) / h)}`;
        a.punti += `;${nr(p.x0 + h)},${nr(y1)},pieno`;
        // incremento h in orizzontale e f(x0 + h) − f(x0) in verticale
        a.segmenti = `${nr(p.x0)},${nr(y0)},${nr(p.x0 + h)},${nr(y0)};${nr(p.x0 + h)},${nr(y0)},${nr(p.x0 + h)},${nr(y1)}`;
        // l'etichetta h sta dalla parte del segmento orizzontale opposta alla secante: sotto per h > 0, sopra per h < 0
        if (Math.abs(h) >= 0.4) a.etichette = `${nr(p.x0 + h / 2 - 0.05)},${nr(h > 0 ? y0 - 0.75 : y0 + 0.35)},h`;
      }
      return a;
    },
    valori(p, h, en) {
      const f = compila(p.f);
      const zero = Math.abs(h) < 1e-9;
      const r = zero ? (en ? 'not defined for h = 0' : 'non definito per h = 0') : numero((f(p.x0 + h) - f(p.x0)) / h, 2, en);
      const v = { h: numero(h, 2, en), r };
      return { ...v, testo: `h = ${v.h}, ${en ? 'difference quotient' : 'rapporto incrementale'} ${r}` };
    },
    testi: (p, en) => {
      const x0 = nr(p.x0).replace('.', en ? '.' : '{,}');
      return { nome: 'h =', righe: [`$\\dfrac{f(${x0} + h) - f(${x0})}{h} =$ {r}`, `$f'(${x0}) = ${nr(p.derivata).replace('.', en ? '.' : '{,}')}$`] };
    },
    // tangente tratteggiata (seconda curva), secante in rosso (terza)
    legenda: (p, en) => {
      const y0 = compila(p.f)(p.x0), q = y0 - p.derivata * p.x0;
      const dec = (x) => nr(x).replace('.', en ? '.' : '{,}');
      const k = p.derivata === 1 ? '' : dec(p.derivata);
      const tg = `y = ${k}x${q ? ` ${q < 0 ? '-' : '+'} ${dec(Math.abs(q))}` : ''}`;
      return `y = ${p.nomef};\\text{${en ? 'tangent' : 'tangente'} } ${tg};\\text{${en ? 'secant' : 'secante'}}`;
    },
  },

  // Somme inferiori e superiori di Riemann sulla partizione di [a, b] in n parti uguali.
  riemann: {
    predefiniti: { f: 'x^2', a: 0, b: 2, integrale: '\\int_0^2 x^2\\,dx = \\dfrac{8}{3}', min: 1, max: 50, passo: 1, valore: 4, xmin: -0.4, xmax: 2.6, ymin: -0.4, ymax: 4.6 },
    somme(p, n) {
      const f = compila(p.f), l = (p.b - p.a) / n, m = [], M = [];
      for (let i = 0; i < n; i++) {
        // estremo inferiore e superiore su [x_{i-1}, x_i], stimati su 41 punti (esatti per f monotona)
        let lo = Infinity, hi = -Infinity;
        for (let j = 0; j <= 40; j++) { const y = f(p.a + l * (i + j / 40)); lo = Math.min(lo, y); hi = Math.max(hi, y); }
        m.push(lo); M.push(hi);
      }
      return { l, m, M, s: m.reduce((t, y) => t + y * l, 0), S: M.reduce((t, y) => t + y * l, 0) };
    },
    figura(p, n) {
      const { l, m, M } = TIPI.riemann.somme(p, n);
      const x = (i) => nr(p.a + l * i);
      // rettangoli inferiori: regione colorata sotto la funzione a gradini che vale m_i su [x_{i-1}, x_i]
      const gradino = (v) => (t) => v[Math.min(n - 1, Math.max(0, Math.floor((t - p.a) / l)))];
      // rettangoli superiori: il contorno a gradini è una curva tratteggiata, i lati verticali sono segmenti
      // (finché i rettangoli non sono troppo fitti)
      const sopra = (t) => (t < p.a || t > p.b ? NaN : gradino(M)(t));
      const seg = [];
      if (n <= 24) for (let i = 0; i <= n; i++) seg.push(`${x(i)},0,${x(i)},${nr(Math.max(M[i - 1] ?? -Infinity, M[i] ?? -Infinity))}`);
      return { f: [String(p.f), sopra], xmin: p.xmin, xmax: p.xmax, ymin: p.ymin, ymax: p.ymax, area: [[gradino(m), () => 0, p.a, p.b]], segmenti: seg.join(';') };
    },
    valori(p, n, en) {
      const { s, S } = TIPI.riemann.somme(p, n);
      // integrale con la formula di Cavalieri-Simpson su 2000 intervalli
      const f = compila(p.f), k = 2000, h = (p.b - p.a) / k;
      let I = f(p.a) + f(p.b);
      for (let i = 1; i < k; i++) I += (i % 2 ? 4 : 2) * f(p.a + i * h);
      I *= h / 3;
      const v = { n: String(n), s: numero(s, 4, en), S: numero(S, 4, en), I: numero(I, 4, en) };
      return { ...v, testo: `n = ${n}, s(P) = ${v.s}, S(P) = ${v.S}` };
    },
    testi: (p) => ({ nome: 'n =', righe: ['$s(P) =$ {s}', '$S(P) =$ {S}', `$${p.integrale} \\approx$ {I}`] }),
    legenda: () => null,
  },

  // Polinomio di McLaurin T_n di e^x (o di sin x, cos x) al variare del grado n.
  taylor: {
    predefiniti: { funzione: 'exp', min: 0, max: 10, passo: 1, valore: 2, xmin: -5, xmax: 3, ymin: -2, ymax: 8 },
    polinomio(p, n) {
      const F = MCLAURIN[p.funzione];
      const termini = [];
      for (let k = 0; k <= n; k++) { const c = F.c(k); if (c) termini.push(k ? `(${c})*x^${k}` : `(${c})`); }
      return termini.join('+') || '0*x';
    },
    figura(p, n) {
      const F = MCLAURIN[p.funzione];
      // T_n tratteggiato, come seconda curva
      return { f: `${F.f};${TIPI.taylor.polinomio(p, n)}`, xmin: p.xmin, xmax: p.xmax, ymin: p.ymin, ymax: p.ymax, punti: `0,${nr(compila(F.f)(0))},pieno` };
    },
    valori(p, n, en) {
      const F = MCLAURIN[p.funzione];
      const t = compila(TIPI.taylor.polinomio(p, n))(1);
      const v = { n: String(n), t: numero(t, 4, en), f1: numero(compila(F.f)(1), 4, en) };
      return { ...v, testo: `n = ${n}, T(1) = ${v.t}` };
    },
    testi: (p) => ({ nome: 'n =', righe: ['$T_n(1) =$ {t}', `$${MCLAURIN[p.funzione].in1} \\approx$ {f1}`] }),
    legenda: (p) => `y = ${MCLAURIN[p.funzione].tex};y = T_n(x)`,
  },

  // Somme parziali s_N = a_{n0} + … + a_N di una serie, con la somma tratteggiata.
  'somme-parziali': {
    predefiniti: { termine: '1/2^n', n0: 1, somma: 1, min: 1, max: 30, passo: 1, valore: 8, xmin: -0.5, xmax: 31, ymin: -0.15, ymax: 1.25 },
    parziali(p, N) {
      const a = compila(p.termine, 'n'), s = [];
      let t = 0;
      for (let n = p.n0; n <= N; n++) { t += a(n); s.push([n, t]); }
      return s;
    },
    figura(p, N) {
      const s = TIPI['somme-parziali'].parziali(p, N);
      return { nomi: 'N,s', xmin: p.xmin, xmax: p.xmax, ymin: p.ymin, ymax: p.ymax, asintoti: `y=${nr(p.somma)}`, punti: s.map(([n, y]) => `${n},${nr(y)},pieno`).join(';') };
    },
    valori(p, N, en) {
      const s = TIPI['somme-parziali'].parziali(p, N).at(-1)[1];
      // cifre decimali sufficienti a distinguere s_N dalla somma (da 4 a 10)
      const dec = Math.min(10, Math.max(4, Math.ceil(-Math.log10(Math.abs(p.somma - s) || 1e-12)) + 1));
      const v = { N: String(N), s: numero(s, dec, en) };
      return { ...v, testo: `N = ${N}, s = ${v.s}` };
    },
    testi: () => ({ nome: 'N =', righe: ['$s_N =$ {s}'] }),
    legenda: () => null,
  },
};

// Parametri di una figura: i predefiniti del tipo, sostituiti dagli attributi della direttiva (i numeri come numeri).
export function parametri(tipo, attributi = {}) {
  const T = TIPI[tipo];
  const p = { ...T.predefiniti };
  for (const [k, v] of Object.entries(attributi)) {
    if (!(k in p)) continue;
    p[k] = typeof p[k] === 'number' ? Number(v) : String(v);
  }
  return p;
}
