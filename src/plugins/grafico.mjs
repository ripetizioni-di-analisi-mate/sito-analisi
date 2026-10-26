// Genera a tempo di build il grafico SVG di una funzione y = f(x).
// Assi sempre orientati: frecce ed etichette x, y; tacche con valori interi.
// Le discontinuità (salti grandi tra punti consecutivi) interrompono la curva.

const FUNZ = ['sin', 'cos', 'tan', 'exp', 'log', 'sqrt', 'abs', 'atan', 'asin', 'acos', 'sinh', 'cosh', 'tanh', 'floor', 'ceil', 'sign', 'PI', 'E'];

function compila(src) {
  let js = src.replace(/\bln\b/g, 'log').replace(/\bpi\b/g, 'PI');
  for (const f of FUNZ) js = js.replace(new RegExp(`(?<![\\w.])${f}\\b`, 'g'), `Math.${f}`);
  // a^b diventa Math.pow(a, b): regge anche il meno unario (exp(-x^2), 2^-x)
  const OPND = '(?:[A-Za-z_$][\\w.$]*)?\\((?:[^()]|\\([^()]*\\))*\\)|[\\w.$]+';
  const re = new RegExp(`(${OPND})\\s*\\^\\s*([+-]?(?:${OPND}))`);
  while (re.test(js)) js = js.replace(re, 'Math.pow($1,$2)');
  // eslint-disable-next-line no-new-func
  return new Function('x', `with (Math) { return (${js}); }`);
}

export function grafico({ f, xmin, xmax, ymin, ymax, punti, asintoti, titolo }) {
  const fn = compila(f);
  const N = 600;
  const xs = [], ys = [];
  for (let i = 0; i <= N; i++) {
    const x = xmin + ((xmax - xmin) * i) / N;
    let y;
    try { y = fn(x); } catch { y = NaN; }
    xs.push(x); ys.push(Number.isFinite(y) ? y : NaN);
  }
  if (ymin === undefined || ymax === undefined) {
    const fin = ys.filter(Number.isFinite);
    const lo = Math.min(...fin), hi = Math.max(...fin);
    const m = (hi - lo || 1) * 0.15;
    ymin ??= Math.floor(lo - m); ymax ??= Math.ceil(hi + m);
  }
  // Spazio per le etichette: margine attorno all'area del grafico.
  const W = 640, H = 400, m = { l: 40, r: 40, t: 32, b: 40 };
  const sx = (x) => m.l + ((x - xmin) / (xmax - xmin)) * (W - m.l - m.r);
  const sy = (y) => H - m.b - ((y - ymin) / (ymax - ymin)) * (H - m.t - m.b);
  const dentro = (y) => y >= ymin && y <= ymax;

  // Curva, spezzata dove la funzione non è definita o salta.
  let d = '', pen = false, prev = null;
  for (let i = 0; i <= N; i++) {
    const y = ys[i];
    if (!Number.isFinite(y) || !dentro(y) || (prev !== null && Math.abs(y - prev) > (ymax - ymin) * 0.6)) {
      pen = false; prev = Number.isFinite(y) ? y : null; continue;
    }
    d += `${pen ? 'L' : 'M'}${sx(xs[i]).toFixed(1)} ${sy(y).toFixed(1)} `;
    pen = true; prev = y;
  }

  // Assi: passano per l'origine se è nel riquadro, altrimenti sul bordo.
  const ox = xmin <= 0 && 0 <= xmax ? sx(0) : m.l;
  const oy = ymin <= 0 && 0 <= ymax ? sy(0) : H - m.b;

  const tacche = (a, b) => {
    const passo = Math.max(1, Math.ceil((b - a) / 10));
    const out = [];
    for (let v = Math.ceil(a); v <= Math.floor(b); v += passo) if (v !== 0) out.push(v);
    return out;
  };
  const tx = tacche(xmin, xmax).map((v) =>
    `<line x1="${sx(v).toFixed(1)}" y1="${oy - 4}" x2="${sx(v).toFixed(1)}" y2="${oy + 4}"/>` +
    `<text x="${sx(v).toFixed(1)}" y="${oy + 17}" text-anchor="middle">${v}</text>`).join('');
  const ty = tacche(ymin, ymax).map((v) =>
    `<line x1="${ox - 4}" y1="${sy(v).toFixed(1)}" x2="${ox + 4}" y2="${sy(v).toFixed(1)}"/>` +
    `<text x="${ox - 8}" y="${(sy(v) + 4).toFixed(1)}" text-anchor="end">${v}</text>`).join('');

  const asint = (asintoti || '').split(';').filter(Boolean).map((s) => {
    const [tipo, val] = s.split('=');
    const v = Number(val);
    return tipo.trim() === 'x'
      ? `<line class="asintoto" x1="${sx(v).toFixed(1)}" y1="${m.t}" x2="${sx(v).toFixed(1)}" y2="${H - m.b}"/>`
      : `<line class="asintoto" x1="${m.l}" y1="${sy(v).toFixed(1)}" x2="${W - m.r}" y2="${sy(v).toFixed(1)}"/>`;
  }).join('');
  const pt = (punti || '').split(';').filter(Boolean).map((s) => {
    const [x, y, pieno] = s.split(',').map((t) => t.trim());
    return `<circle class="punto ${pieno === 'vuoto' ? 'vuoto' : ''}" cx="${sx(+x).toFixed(1)}" cy="${sy(+y).toFixed(1)}" r="4.5"/>`;
  }).join('');

  return `<figure class="grafico"><svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Grafico di y = ${f}">
<defs><marker id="freccia" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z"/></marker></defs>
<g class="assi">
<line x1="${m.l - 12}" y1="${oy}" x2="${W - m.r + 12}" y2="${oy}" marker-end="url(#freccia)"/>
<line x1="${ox}" y1="${H - m.b + 12}" x2="${ox}" y2="${m.t - 12}" marker-end="url(#freccia)"/>
<text class="nome-asse" x="${W - m.r + 14}" y="${oy + 18}">x</text>
<text class="nome-asse" x="${ox + 10}" y="${m.t - 10}">y</text>
<g class="tacche">${tx}${ty}</g>
<text x="${ox - 8}" y="${oy + 17}" text-anchor="end">O</text>
</g>
${asint}<path class="curva" d="${d.trim()}"/>${pt}
</svg>${titolo ? `<figcaption>${titolo}</figcaption>` : ''}</figure>`;
}
