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
// Espressione in x e y (per le regioni): stessa sintassi di compila.
export function compilaXY(src) {
  let js = String(src).replace(/\bln\b/g, 'log').replace(/\bpi\b/g, 'PI');
  for (const f of FUNZ) js = js.replace(new RegExp(`(?<![\\w.])${f}\\b`, 'g'), `Math.${f}`);
  const OPND = '(?:[A-Za-z_$][\\w.$]*)?\\((?:[^()]|\\([^()]*\\))*\\)|[\\w.$]+';
  const re = new RegExp(`(${OPND})\\s*\\^\\s*([+-]?(?:${OPND}))`);
  while (re.test(js)) js = js.replace(re, 'Math.pow($1,$2)');
  // eslint-disable-next-line no-new-func
  const g = new Function('x', 'y', `with (Math) { return (${js}); }`);
  return (x, y) => { try { const v = g(x, y); return Number.isFinite(v) ? v : NaN; } catch { return NaN; } };
}

// ---------------------------------------------------------------------------------------------------------
// Regioni del piano definite da disequazioni: regione="x^2+y^2<=4; y>x"
//   più condizioni separate da ";" formano un sistema (devono valere insieme); più sistemi separati da "|"
//   si uniscono (per prodotti, quozienti e casi). Simboli: <  <=  >  >=  =  !=
//   La regione viene colorata; la frontiera è a tratto continuo dove è compresa (<=, >=, =) e tratteggiata dove è
//   esclusa (<, >, !=). Le parti delle curve che non delimitano la regione restano come traccia sottile (tracce=0 le toglie).
// ---------------------------------------------------------------------------------------------------------
const RELAZIONI = /^(.*?)(<=|>=|!=|<|>|=)(.*)$/s;
export function leggiRegione(testo) {
  return lista(testo, '|').map((sistema) => lista(sistema).map((c) => {
    const m = c.match(RELAZIONI);
    if (!m) throw new Error(`regione: manca il simbolo in «${c}»`);
    const sin = compilaXY(m[1]), des = compilaXY(m[3]);
    return { rel: m[2], F: (x, y) => sin(x, y) - des(x, y) };
  }));
}
// Quanto un punto è «dentro» rispetto a una condizione: positivo dentro, negativo fuori.
const dentroDi = (c, v) => (c.rel === '<' || c.rel === '<=' ? -v : c.rel === '>' || c.rel === '>=' ? v : c.rel === '!=' ? Infinity : -Infinity);
const COMPRESA = { '<=': true, '>=': true, '=': true };

// Linee di livello zero di una griglia di valori (marching squares): restituisce spezzate in coordinate di griglia.
function livelloZero(V, nx, ny) {
  const nodo = (i, j) => V[j * (nx + 1) + i];
  const Hn = (ny + 1) * nx;
  const hId = (i, j) => j * nx + i, vId = (i, j) => Hn + j * (nx + 1) + i;
  const vicini = new Map();
  const lega = (p, q) => { (vicini.get(p) || vicini.set(p, []).get(p)).push(q); (vicini.get(q) || vicini.set(q, []).get(q)).push(p); };
  for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) {
    const a = nodo(i, j), b = nodo(i + 1, j), c = nodo(i + 1, j + 1), d = nodo(i, j + 1);
    if (Number.isNaN(a) || Number.isNaN(b) || Number.isNaN(c) || Number.isNaN(d)) continue;
    const k = (a > 0 ? 1 : 0) | (b > 0 ? 2 : 0) | (c > 0 ? 4 : 0) | (d > 0 ? 8 : 0);
    if (k === 0 || k === 15) continue;
    const B = hId(i, j), R = vId(i + 1, j), T = hId(i, j + 1), L = vId(i, j);
    if (k === 1 || k === 14) lega(L, B);
    else if (k === 2 || k === 13) lega(B, R);
    else if (k === 3 || k === 12) lega(L, R);
    else if (k === 4 || k === 11) lega(R, T);
    else if (k === 6 || k === 9) lega(B, T);
    else if (k === 7 || k === 8) lega(L, T);
    else {
      const centro = (a + b + c + d) / 4 > 0;
      if ((k === 5) === centro) { lega(L, T); lega(B, R); } else { lega(L, B); lega(R, T); }
    }
  }
  const taglio = (u, w) => { const t = u / (u - w); return Number.isFinite(t) ? Math.min(1, Math.max(0, t)) : 0.5; };
  const posizione = (id) => {
    if (id < Hn) { const j = Math.floor(id / nx), i = id - j * nx; return [i + taglio(nodo(i, j), nodo(i + 1, j)), j]; }
    const r = id - Hn, j = Math.floor(r / (nx + 1)), i = r - j * (nx + 1);
    return [i, j + taglio(nodo(i, j), nodo(i, j + 1))];
  };
  const fatti = new Set(), spezzate = [];
  const cammina = (inizio) => {
    const ids = [inizio]; fatti.add(inizio);
    let corrente = inizio, chiusa = false;
    for (;;) {
      const prossimo = (vicini.get(corrente) || []).find((q) => !fatti.has(q));
      if (prossimo === undefined) { chiusa = ids.length > 2 && (vicini.get(corrente) || []).includes(inizio); break; }
      ids.push(prossimo); fatti.add(prossimo); corrente = prossimo;
    }
    spezzate.push({ punti: ids.map(posizione), chiusa });
  };
  for (const [id, v] of vicini) if (v.length === 1 && !fatti.has(id)) cammina(id);
  for (const id of vicini.keys()) if (!fatti.has(id)) cammina(id);
  return spezzate;
}
// Toglie i punti allineati (Ramer-Douglas-Peucker), in pixel.
function sfoltisci(P, eps) {
  if (P.length < 3) return P;
  const tieni = new Uint8Array(P.length); tieni[0] = tieni[P.length - 1] = 1;
  const pila = [[0, P.length - 1]];
  while (pila.length) {
    const [i0, i1] = pila.pop();
    const [x0, y0] = P[i0], [x1, y1] = P[i1], dx = x1 - x0, dy = y1 - y0, n = Math.hypot(dx, dy) || 1;
    let max = 0, k = -1;
    const fermo = dx === 0 && dy === 0; // spezzata chiusa: si misura la distanza dal primo punto
    for (let i = i0 + 1; i < i1; i++) { const d = fermo ? Math.hypot(P[i][0] - x0, P[i][1] - y0) : Math.abs((P[i][0] - x0) * dy - (P[i][1] - y0) * dx) / n; if (d > max) { max = d; k = i; } }
    if (max > eps) { tieni[k] = 1; pila.push([i0, k], [k, i1]); }
  }
  return P.filter((_, i) => tieni[i]);
}

function disegnaRegione(a, g) {
  const { xmin, xmax, ymin, ymax, sx, sy, larga, alta } = g;
  const sistemi = leggiRegione(a.regione);
  const nx = 220, ny = Math.max(40, Math.round((nx * alta) / larga));
  const hx = (xmax - xmin) / nx, hy = (ymax - ymin) / ny;
  const X = (i) => xmin + i * hx, Y = (j) => ymin + j * hy;
  const pixel = ([gx, gy]) => [sx(xmin + gx * hx), sy(ymin + gy * hy)];
  const d = (P, chiusa) => `M${P.map(([x, y]) => `${x.toFixed(1)} ${y.toFixed(1)}`).join(' L')}${chiusa ? ' Z' : ''}`;

  // 1) colorazione: livello zero di G = max sui sistemi del minimo delle condizioni, con una cornice esterna «fuori»
  const valoreSistema = (S, x, y) => { let v = Infinity; for (const c of S) { const f = c.F(x, y); const s = Number.isNaN(f) ? -1 : dentroDi(c, f); if (s < v) v = s; } return v; };
  const G = (x, y) => { let v = -Infinity; for (const S of sistemi) { const s = valoreSistema(S, x, y); if (s > v) v = s; } return v; };
  const mx = nx + 2, my = ny + 2, V = new Float64Array((mx + 1) * (my + 1)).fill(-1e30);
  for (let j = 0; j <= ny; j++) for (let i = 0; i <= nx; i++) { const v = G(X(i), Y(j)); V[(j + 1) * (mx + 1) + i + 1] = v === Infinity ? 1e30 : v === -Infinity ? -1e30 : v; }
  const riempimento = livelloZero(V, mx, my).filter((s) => s.punti.length > 2)
    .map((s) => d(sfoltisci(s.punti.map(([gx, gy]) => pixel([Math.min(nx, Math.max(0, gx - 1)), Math.min(ny, Math.max(0, gy - 1))])), 0.25), true)).join(' ');
  const sotto = riempimento ? `<path class="regione" fill-rule="evenodd" d="${riempimento}"/>` : '';

  // 2) frontiere: la curva F = 0 di ogni condizione, divisa nei tratti che delimitano la regione e negli altri
  const tol = 1e-9;
  const debole = (c, x, y) => { if (c.rel === '!=' ) return true; const f = c.F(x, y); if (Number.isNaN(f)) return false; return c.rel === '=' ? Math.abs(f) <= 1e-6 : dentroDi(c, f) >= -tol; };
  const internoStretto = (S, x, y) => S.every((c) => { if (c.rel === '!=') return true; if (c.rel === '=') return false; const f = c.F(x, y); return !Number.isNaN(f) && dentroDi(c, f) > 1e-7; });
  const tracce = [], vere = [];
  sistemi.forEach((S, si) => {
    const conUguale = S.some((c) => c.rel === '=');
    S.forEach((c, ci) => {
      const W = new Float64Array((nx + 1) * (ny + 1));
      for (let j = 0; j <= ny; j++) for (let i = 0; i <= nx; i++) W[j * (nx + 1) + i] = c.F(X(i), Y(j));
      for (const sp of livelloZero(W, nx, ny)) {
        // ogni vertice viene portato sulla curva con due passi di Newton lungo il gradiente
        const pts = sp.punti.map(([gx, gy]) => {
          let x = xmin + gx * hx, y = ymin + gy * hy;
          for (let k = 0; k < 2; k++) {
            const f = c.F(x, y), fx = (c.F(x + hx / 2, y) - c.F(x - hx / 2, y)) / hx, fy = (c.F(x, y + hy / 2) - c.F(x, y - hy / 2)) / hy, n2 = fx * fx + fy * fy;
            if (!Number.isFinite(f) || !Number.isFinite(n2) || n2 === 0) break;
            let px = (f * fx) / n2, py = (f * fy) / n2;
            const l = Math.hypot(px / hx, py / hy); if (l > 1) { px /= l; py /= l; }
            x -= px; y -= py;
          }
          return [x, y];
        });
        if (sp.chiusa) pts.push(pts[0]);
        const attivo = (x, y) => !(conUguale && c.rel !== '=') && S.every((o, oi) => oi === ci || debole(o, x, y)) && sistemi.every((S2, s2) => s2 === si || !internoStretto(S2, x, y));
        let corrente = [], stato = null;
        const chiudi = () => { if (corrente.length > 1) (stato ? vere : tracce).push({ P: sfoltisci(corrente.map(([x, y]) => [sx(x), sy(y)]), 0.12), compresa: Boolean(COMPRESA[c.rel]) }); };
        for (let i = 0; i < pts.length - 1; i++) {
          const p = pts[i], q = pts[i + 1], s = attivo((p[0] + q[0]) / 2, (p[1] + q[1]) / 2);
          if (s !== stato) { chiudi(); corrente = [p]; stato = s; }
          corrente.push(q);
        }
        chiudi();
      }
    });
  });
  const sopra = (String(a.tracce) === '0' ? '' : tracce.map((t) => `<path class="frontiera traccia" d="${d(t.P)}"/>`).join('')) +
    vere.map((t) => `<path class="frontiera${t.compresa ? '' : ' esclusa'}" d="${d(t.P)}"/>`).join('');
  return { sotto, sopra };
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
  const senzaAssi = String(a.assi) === '0';
  const lunghezzaTaccheY = Math.max(String(Math.ceil(ymin)).length, String(Math.floor(ymax)).length);
  const sinistra = senzaAssi ? 40 : Math.max(40, 12 + 9 * lunghezzaTaccheY);
  const W = 640, m = { l: sinistra, r: 40, t: 32, b: 40 };
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
  const zeroX = xmin <= 0 && 0 <= xmax;
  const zeroY = ymin <= 0 && 0 <= ymax;
  const origineVisibile = zeroX && zeroY;
  const ox = zeroX ? sx(0) : m.l;
  const oy = zeroY ? sy(0) : H - m.b;
  const tacche = (lo, hi) => {
    const passo = Math.max(1, Math.ceil((hi - lo) / 10));
    const out = [];
    for (let v = Math.ceil(lo); v <= Math.floor(hi); v += passo) {
      if (v !== 0 || !origineVisibile) out.push(v);
    }
    return out;
  };
  const tx = tacche(xmin, xmax).map((v) =>
    `<line x1="${sx(v).toFixed(1)}" y1="${oy - 4}" x2="${sx(v).toFixed(1)}" y2="${oy + 4}"/>` +
    `<text x="${sx(v).toFixed(1)}" y="${oy + 17}" text-anchor="middle">${v}</text>`).join('');
  const ty = tacche(ymin, ymax).map((v) =>
    `<line x1="${ox - 4}" y1="${sy(v).toFixed(1)}" x2="${ox + 4}" y2="${sy(v).toFixed(1)}"/>` +
    `<text x="${ox - 8}" y="${(sy(v) + 4).toFixed(1)}" text-anchor="end">${v}</text>`).join('');
  const [nx = '', ny = ''] = a.nomi ? String(a.nomi).split(',').map((v) => v.trim()) : ['x', 'y'];
  // Un nome con unità di misura richiede più spazio di quello dopo la freccia.
  const nomeXEsteso = nx.length > 2;

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

  const reg = a.regione ? disegnaRegione(a, { xmin, xmax, ymin, ymax, sx, sy, larga: W - m.l - m.r, alta: H - m.t - m.b }) : { sotto: '', sopra: '' };

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
  const punta = (k) => `<marker id="${id}-punta${k}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path class="punta v${k}" d="M0 0 L10 5 L0 10 z"/></marker>`;
  // Larghezza massima: i grafici alti si stringono, così non riempiono lo schermo
  const larghezza = Math.min(520, Math.round((340 * W) / H));

  const descr = a.titolo || (typeof a.f === 'string' && a.f ? `Grafico di y = ${a.f}` : 'Figura nel piano cartesiano');

  return `<svg viewBox="0 0 ${W} ${H}" style="max-width: ${larghezza}px" role="img" aria-label="${esc(testoSemplice(descr))}">
<defs><marker id="${id}-freccia" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z"/></marker>${punta(0)}${punta(1)}${punta(2)}</defs>
${reg.sotto}${aree}${pol}${senzaAssi ? '' : `<g class="assi">
<line x1="${m.l - 12}" y1="${oy}" x2="${W - m.r + 12}" y2="${oy}" marker-end="url(#${id}-freccia)"/>
<line x1="${ox}" y1="${H - m.b + 12}" x2="${ox}" y2="${m.t - 12}" marker-end="url(#${id}-freccia)"/>
<text class="nome-asse" x="${W - m.r + (nomeXEsteso ? 10 : 14)}" y="${oy + (nomeXEsteso ? -9 : 18)}"${nomeXEsteso ? ' text-anchor="end"' : ''}>${esc(nx)}</text>
<text class="nome-asse" x="${ox + 10}" y="${m.t - 10}">${esc(ny)}</text>
<g class="tacche">${tx}${ty}</g>
${origineVisibile ? `<text x="${ox - 8}" y="${oy + 17}" text-anchor="end">O</text>` : ''}
</g>`}
${reg.sopra}${lin}${rif}${asint}${segm}${curve}${vett}${pt}${etich}
</svg>`;
}
