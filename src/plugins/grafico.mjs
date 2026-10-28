import katex from 'katex';
import { inLatex } from './espressione.mjs';
// Genera a tempo di build un grafico SVG nel piano cartesiano.
// Assi sempre orientati: frecce ed etichette x, y; tacche con valori interi.
// Le discontinuità (salti grandi tra punti consecutivi) interrompono la curva.
//
// Attributi della direttiva ::grafico{…} (tutti facoltativi tranne il riquadro xmin/xmax):
//   f="x^2;2*x+1"                 una o più funzioni y = f(x), separate da ";" (la prima nel colore della materia)
//   curve="cos(t),sin(t),0,6.29"  curve parametriche x(t),y(t),tmin,tmax; più curve separate da ";"
//   area="x^2;0;0;2"              regione colorata tra y = sopra e y = sotto per a ≤ x ≤ b ("sopra;sotto;a;b"); più aree con "|"
//   punti="1,2;3,0,vuoto;2,4,pieno,P"   x,y[,pieno|vuoto[,etichetta]]
//   vettori="0,0,2,1,v;0,0,1,3,w" frecce da (x0,y0) a (x1,y1) con etichetta facoltativa
//   segmenti="1,0,1,2;0,2,1,2"    segmenti tratteggiati (proiezioni, distanze)
//   etichette="2,3,y = x²;…"      testi in posizione (x,y)
//   asintoti="x=0;y=1"            rette tratteggiate verticali o orizzontali
//   uguale=1                      stessa scala sui due assi (circonferenze rotonde, angoli veri)
//   nomi="Re,Im"                  nomi degli assi al posto di x, y
//   linee="0,0 4,0 4,3;…"         spezzate a tratto pieno (contorni di recipienti, piani, pareti): punti "x,y" separati da spazi
//   poligoni="0,0 4,0 4,2 0,2;…"  regioni chiuse colorate (un liquido, un corpo), punti come in linee
//   assi=0                        nessun asse cartesiano: per schemi fisici (piano inclinato, recipienti, corpi e forze)
//   riferimento="x0,y0,30,1.5,x′,y′"  sistema di assi orientati in (x0,y0), ruotato di 30° e lungo 1,5 unità, con i nomi
//   legenda="y = x^2;y = 2x-1"    voci della legenda in LaTeX, nell'ordine delle curve (prima f, poi curve);
//                                 senza legenda, le funzioni di f compaiono da sole come "y = …"; legenda=0 la toglie
//   unicolore=1                   tutti i vettori nello stesso colore (linee di campo, campi uniformi)
//   titolo="…"                    didascalia

const FUNZ = ['sin', 'cos', 'tan', 'exp', 'log', 'sqrt', 'abs', 'atan', 'asin', 'acos', 'sinh', 'cosh', 'tanh', 'floor', 'ceil', 'sign', 'cbrt', 'PI', 'E'];

function compila(src, v = 'x') {
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
const lista = (s, sep = ';') => String(s || '').split(sep).map((x) => x.trim()).filter(Boolean);
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
let contatore = 0;
// Didascalia: testo semplice con formule $…$ rese da KaTeX (frazioni in colonna, radici, esponenti).
const didascalia = (t) => String(t).split(/(\$[^$]+\$)/g).map((p) => (/^\$[^$]+\$$/.test(p)
  ? katex.renderToString(p.slice(1, -1), { throwOnError: false, output: 'html' })
  : esc(p))).join('');
const testoSemplice = (t) => String(t).replace(/\$([^$]+)\$/g, '$1')
  .replace(/\\d?frac\{((?:[^{}]|\{[^{}]*\})*)\}\{((?:[^{}]|\{[^{}]*\})*)\}/g, '($1)/($2)').replace(/\\sqrt/g, '√').replace(/[\\{}]/g, '');

export function grafico(a) {
  const id = `g${++contatore}`;
  const xmin = Number(a.xmin ?? -5), xmax = Number(a.xmax ?? 5);
  const funzioni = lista(a.f).map((s) => compila(s));
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
  const aree = lista(a.area, '|').map((s) => {
    const [sopra, sotto, a0, b0] = s.split(';').map((x) => x.trim());
    const fs = compila(sopra), fi = compila(sotto);
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
  // Legenda: un campione del tratto di ogni curva accanto alla sua formula
  const voci = [];
  if (String(a.legenda) !== '0') {
    const date = a.legenda ? String(a.legenda).split(';').map((x) => x.trim()) : null;
    const nCurve = funzioni.length + parametriche.length;
    for (let k = 0; k < nCurve; k++) {
      let tex = date ? date[k] : (k < funzioni.length ? (() => {
                const [vx, vy] = (a.nomi ? lista(a.nomi, ',') : ['x', 'y']).map((v) => v.trim());
        // la voce automatica solo per i grafici y = f(x): in fisica il nome dell'asse non è sempre quello della curva
        if (vy !== 'y' || !/^[A-Za-zα-ωΑ-Ω]$/.test(vx)) return null;
        const l = inLatex(lista(a.f)[k], vx, a.inglese);
        return l ? `${vy} = ${l}` : null;
      })() : null);
      if (tex) voci.push(`<span class="voce-legenda"><svg class="campione" viewBox="0 0 26 8" aria-hidden="true"><line class="curva c${k % 3}" x1="2" y1="4" x2="24" y2="4"/></svg>${katex.renderToString(tex, { throwOnError: false })}</span>`);
    }
  }
  const legenda = voci.length ? `<div class="legenda">${voci.join('')}</div>` : '';
  // Larghezza massima: i grafici alti si stringono, così non riempiono lo schermo
  const larghezza = Math.min(520, Math.round((340 * W) / H));

  const descr = a.titolo || (a.f ? `Grafico di y = ${a.f}` : 'Figura nel piano cartesiano');

  return `<figure class="grafico"><svg viewBox="0 0 ${W} ${H}" style="max-width: ${larghezza}px" role="img" aria-label="${esc(testoSemplice(descr))}">
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
</svg>${legenda}${a.titolo ? `<figcaption>${didascalia(a.titolo)}</figcaption>` : ''}</figure>`;
}
