// Disegno SVG dei grafici nel piano cartesiano: funzioni pure, senza KaTeX né moduli di Node.
// Lo usano sia grafico.mjs (a tempo di build, figure ::grafico e stato iniziale di ::cursore)
// sia il browser (src/scripts/cursori.ts), che ridisegna le figure con il cursore: così scala,
// assi, colori e caratteri sono gli stessi nei due casi. Gli attributi sono descritti in grafico.mjs.

const FUNZ = ['sin', 'cos', 'tan', 'exp', 'log', 'sqrt', 'abs', 'atan', 'asin', 'acos', 'sinh', 'cosh', 'tanh', 'floor', 'ceil', 'sign', 'cbrt', 'PI', 'E'];

export function compila(src, v = 'x') {
  let js = String(src).replace(/\bln\b/g, 'log').replace(/\bpi\b/g, 'PI');
  for (const f of FUNZ) js = js.replace(new RegExp(`(?<![\\w.])${f}\\b`, 'g'), `Math.${f}`);
  // a^b diventa Math.pow(a, b): regge anche il meno unario (exp(-x^2), 2^-x)
  const OPND = '(?:[A-Za-z_$][\\w.$]*)?\\((?:[^()]|\\([^()]*\\))*\\)|[\\w.$]+';
  const re = new RegExp(`(${OPND})\\s*\\^\\s*([+-]?(?:${OPND}))`);
  while (re.test(js)) js = js.replace(re, 'Math.pow($1,$2)');
  // eslint-disable-next-line no-new-func
  const g = new Function(v, `with (Math) { return (${js}); }`);
  return (t) => { try { const y = g(t); return Number.isFinite(y) ? y : NaN; } catch { return NaN; } };
}
export const lista = (s, sep = ';') => String(s || '').split(sep).map((x) => x.trim()).filter(Boolean);
export const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
export const testoSemplice = (t) => String(t).replace(/\$([^$]+)\$/g, '$1')
  .replace(/\\d?frac\{((?:[^{}]|\{[^{}]*\})*)\}\{((?:[^{}]|\{[^{}]*\})*)\}/g, '($1)/($2)').replace(/\\sqrt/g, '√').replace(/[\\{}]/g, '');

// Restituisce l'elemento <svg> del grafico; id distingue i marcatori (frecce) delle figure della stessa pagina.
export function disegnaSvg(a, id) {
  const xmin = Number(a.xmin ?? -5), xmax = Number(a.xmax ?? 5);
  // f: stringa "x^2;2*x+1" oppure, dalle figure con cursore, un elenco di stringhe e funzioni già pronte
  const funzioni = (Array.isArray(a.f) ? a.f : lista(a.f)).map((s) => (typeof s === 'function' ? s : compila(s)));
  const parametriche = lista(a.curve).map((s) => {
    const p = s.split(',').map((x) => x.trim());
    return { x: compila(p[0], 't'), y: compila(p[1], 't'), t0: Number(p[2] ?? 0), t1: Number(p[3] ?? 2 * Math.PI) };
  });
  const N = 700;

  // campionamento delle funzioni e delle curve parametriche
  const serie = funzioni.map((fn) => Array.from({ length: N + 1 }, (_, i) => { const x = xmin + ((xmax - xmin) * i) / N; return [x, fn(x)]; }));
  const serieP = parametriche.map((c) => Array.from({ length: N + 1 }, (_, i) => { const t = c.t0 + ((c.t1 - c.t0) * i) / N; return [c.x(t), c.y(t)]; }));

  let ymin = a.ymin !== undefined ? Number(a.ymin) : undefined;
  let ymax = a.ymax !== undefined ? Number(a.ymax) : undefined;
  if (ymin === undefined || ymax === undefined) {
    const fin = [...serie, ...serieP].flat().map((p) => p[1]).filter(Number.isFinite);
    const lo = fin.length ? Math.min(...fin) : -5, hi = fin.length ? Math.max(...fin) : 5;
    const mg = (hi - lo || 1) * 0.15;
    ymin ??= Math.floor(lo - mg); ymax ??= Math.ceil(hi + mg);
  }

  // Dimensioni: larghezza fissa; con uguale=1 l'altezza segue il rapporto tra gli intervalli.
  const W = 640, m = { l: 40, r: 40, t: 32, b: 40 };
  let H = 400;
  if (a.uguale) H = Math.round(Math.min(1100, Math.max(200, ((W - m.l - m.r) * (ymax - ymin)) / (xmax - xmin) + m.t + m.b)));
  const sx = (x) => m.l + ((x - xmin) / (xmax - xmin)) * (W - m.l - m.r);
  const sy = (y) => H - m.b - ((y - ymin) / (ymax - ymin)) * (H - m.t - m.b);
  const dentro = (x, y) => y >= ymin && y <= ymax && x >= xmin - 1e-9 && x <= xmax + 1e-9;

  const tracciato = (pts) => {
    let d = '', pen = false, prev = null;
    for (const [x, y] of pts) {
      if (!Number.isFinite(y) || !Number.isFinite(x) || !dentro(x, y) || (prev !== null && Math.abs(y - prev) > (ymax - ymin) * 0.6)) {
        pen = false; prev = Number.isFinite(y) ? y : null; continue;
      }
      d += `${pen ? 'L' : 'M'}${sx(x).toFixed(1)} ${sy(y).toFixed(1)} `;
      pen = true; prev = y;
    }
    return d.trim();
  };

  // Assi: passano per l'origine se è nel riquadro, altrimenti sul bordo.
  const ox = xmin <= 0 && 0 <= xmax ? sx(0) : m.l;
  const oy = ymin <= 0 && 0 <= ymax ? sy(0) : H - m.b;
  const tacche = (lo, hi) => {
    const passo = Math.max(1, Math.ceil((hi - lo) / 10));
    const out = [];
    for (let v = Math.ceil(lo); v <= Math.floor(hi); v += passo) if (v !== 0) out.push(v);
    return out;
  };
  const tx = tacche(xmin, xmax).map((v) =>
    `<line x1="${sx(v).toFixed(1)}" y1="${oy - 4}" x2="${sx(v).toFixed(1)}" y2="${oy + 4}"/>` +
    `<text x="${sx(v).toFixed(1)}" y="${oy + 17}" text-anchor="middle">${v}</text>`).join('');
  const ty = tacche(ymin, ymax).map((v) =>
    `<line x1="${ox - 4}" y1="${sy(v).toFixed(1)}" x2="${ox + 4}" y2="${sy(v).toFixed(1)}"/>` +
    `<text x="${ox - 8}" y="${(sy(v) + 4).toFixed(1)}" text-anchor="end">${v}</text>`).join('');
  const [nx = '', ny = ''] = a.nomi ? String(a.nomi).split(',').map((v) => v.trim()) : ['x', 'y'];

  // Aree colorate tra due curve
  // (dalle figure con cursore anche un elenco di [sopra, sotto, a, b] con funzioni già pronte)
  const aree = (Array.isArray(a.area) ? a.area : lista(a.area, '|').map((s) => s.split(';').map((x) => x.trim()))).map(([sopra, sotto, a0, b0]) => {
    const fs = typeof sopra === 'function' ? sopra : compila(sopra), fi = typeof sotto === 'function' ? sotto : compila(sotto);
    const x0 = Number(a0), x1 = Number(b0), M = 300;
    const su = [], giu = [];
    for (let i = 0; i <= M; i++) {
      const x = x0 + ((x1 - x0) * i) / M;
      const clamp = (y) => Math.min(ymax, Math.max(ymin, y));
      su.push(`${sx(x).toFixed(1)} ${sy(clamp(fs(x))).toFixed(1)}`);
      giu.push(`${sx(x).toFixed(1)} ${sy(clamp(fi(x))).toFixed(1)}`);
    }
    return `<path class="area" d="M${su.join(' L')} L${giu.reverse().join(' L')} Z"/>`;
  }).join('');

  const curve = serie.map((pts, i) => `<path class="curva c${i}" d="${tracciato(pts)}"/>`).join('') +
    serieP.map((pts, i) => `<path class="curva c${(i + funzioni.length) % 3}" d="${tracciato(pts)}"/>`).join('');

  const asint = lista(a.asintoti).map((s) => {
    const [tipo, val] = s.split('=');
    const v = Number(val);
    return tipo.trim() === 'x'
      ? `<line class="asintoto" x1="${sx(v).toFixed(1)}" y1="${m.t}" x2="${sx(v).toFixed(1)}" y2="${H - m.b}"/>`
      : `<line class="asintoto" x1="${m.l}" y1="${sy(v).toFixed(1)}" x2="${W - m.r}" y2="${sy(v).toFixed(1)}"/>`;
  }).join('');
  const segm = lista(a.segmenti).map((s) => {
    const [x0, y0, x1, y1] = s.split(',').map(Number);
    return `<line class="segmento" x1="${sx(x0).toFixed(1)}" y1="${sy(y0).toFixed(1)}" x2="${sx(x1).toFixed(1)}" y2="${sy(y1).toFixed(1)}"/>`;
  }).join('');
  const vett = lista(a.vettori).map((s, i) => {
    const p = s.split(',').map((x) => x.trim());
    const [x0, y0, x1, y1] = p.slice(0, 4).map(Number);
    const et = p[4] ? `<text class="etichetta-vettore" x="${(sx((x0 + x1) / 2) + 8).toFixed(1)}" y="${(sy((y0 + y1) / 2) - 8).toFixed(1)}">${esc(p[4])}</text>` : '';
    const k = String(a.unicolore) === '1' ? 0 : i % 3;
    return `<line class="vettore v${k}" x1="${sx(x0).toFixed(1)}" y1="${sy(y0).toFixed(1)}" x2="${sx(x1).toFixed(1)}" y2="${sy(y1).toFixed(1)}" marker-end="url(#${id}-punta${k})"/>${et}`;
  }).join('');
  const pt = lista(a.punti).map((s) => {
    const [x, y, tipo, et] = s.split(',').map((t) => t.trim());
    const c = `<circle class="punto ${tipo === 'vuoto' ? 'vuoto' : ''}" cx="${sx(+x).toFixed(1)}" cy="${sy(+y).toFixed(1)}" r="4.5"/>`;
    return c + (et ? `<text class="etichetta" x="${(sx(+x) + 8).toFixed(1)}" y="${(sy(+y) - 8).toFixed(1)}">${esc(et)}</text>` : '');
  }).join('');
  const etich = lista(a.etichette).map((s) => {
    const [x, y, ...t] = s.split(',');
    return `<text class="etichetta" x="${sx(+x).toFixed(1)}" y="${sy(+y).toFixed(1)}">${esc(t.join(',').trim())}</text>`;
  }).join('');

  // Spezzate e poligoni: "x,y x,y …", più elementi separati da ";"
  const coppie = (s) => s.trim().split(/\s+/).map((p) => p.split(',').map(Number)).filter((p) => p.length === 2 && p.every(Number.isFinite));
  const percorso = (pts) => pts.map(([x, y], i) => `${i ? 'L' : 'M'}${sx(x).toFixed(1)} ${sy(y).toFixed(1)}`).join(' ');
  const pol = lista(a.poligoni).map((s) => `<path class="poligono" d="${percorso(coppie(s))} Z"/>`).join('');
  const lin = lista(a.linee).map((s) => `<path class="linea" d="${percorso(coppie(s))}"/>`).join('');
  // Sistema di riferimento ruotato (per esempio lungo un piano inclinato)
  const rif = a.riferimento ? (() => {
    const [x0, y0, ang, lung, n1 = 'x′', n2 = 'y′'] = String(a.riferimento).split(',').map((t) => t.trim());
    const t = (Number(ang) * Math.PI) / 180, L = Number(lung || 1.5), X = Number(x0), Y = Number(y0);
    const x1 = X + L * Math.cos(t), y1 = Y + L * Math.sin(t), x2 = X - L * Math.sin(t), y2 = Y + L * Math.cos(t);
    return `<g class="riferimento"><line x1="${sx(X).toFixed(1)}" y1="${sy(Y).toFixed(1)}" x2="${sx(x1).toFixed(1)}" y2="${sy(y1).toFixed(1)}" marker-end="url(#${id}-freccia)"/>` +
      `<line x1="${sx(X).toFixed(1)}" y1="${sy(Y).toFixed(1)}" x2="${sx(x2).toFixed(1)}" y2="${sy(y2).toFixed(1)}" marker-end="url(#${id}-freccia)"/>` +
      `<text class="nome-asse" x="${(sx(x1) + 6).toFixed(1)}" y="${(sy(y1) + 16).toFixed(1)}">${esc(n1)}</text>` +
      `<text class="nome-asse" x="${(sx(x2) - 6).toFixed(1)}" y="${(sy(y2) - 8).toFixed(1)}" text-anchor="end">${esc(n2)}</text></g>`;
  })() : '';
  const senzaAssi = String(a.assi) === '0';

  const punta = (k) => `<marker id="${id}-punta${k}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path class="punta v${k}" d="M0 0 L10 5 L0 10 z"/></marker>`;
  // Larghezza massima: i grafici alti si stringono, così non riempiono lo schermo
  const larghezza = Math.min(520, Math.round((340 * W) / H));

  const descr = a.titolo || (typeof a.f === 'string' && a.f ? `Grafico di y = ${a.f}` : 'Figura nel piano cartesiano');

  return `<svg viewBox="0 0 ${W} ${H}" style="max-width: ${larghezza}px" role="img" aria-label="${esc(testoSemplice(descr))}">
<defs><marker id="${id}-freccia" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z"/></marker>${punta(0)}${punta(1)}${punta(2)}</defs>
${aree}${pol}${senzaAssi ? '' : `<g class="assi">
<line x1="${m.l - 12}" y1="${oy}" x2="${W - m.r + 12}" y2="${oy}" marker-end="url(#${id}-freccia)"/>
<line x1="${ox}" y1="${H - m.b + 12}" x2="${ox}" y2="${m.t - 12}" marker-end="url(#${id}-freccia)"/>
<text class="nome-asse" x="${W - m.r + 14}" y="${oy + 18}">${esc(nx)}</text>
<text class="nome-asse" x="${ox + 10}" y="${m.t - 10}">${esc(ny)}</text>
<g class="tacche">${tx}${ty}</g>
<text x="${ox - 8}" y="${oy + 17}" text-anchor="end">O</text>
</g>`}
${lin}${rif}${asint}${segm}${curve}${vett}${pt}${etich}
</svg>`;
}
