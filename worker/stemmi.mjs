// Stemmi dei ranghi (approvati da Carmine il 31/10/2026): dal bronzo al diamante, uno per titolo.
// Ogni rango tiene gli ornamenti del precedente e ne aggiunge almeno uno; lo stemma si riempie
// di colore dal basso in proporzione agli EXP verso il livello successivo.
// Usato dal Worker (testata) e dal browser (pannello e aggiornamenti dopo ogni risposta).

export const RANGHI = [
  { it: 'Bronzo', en: 'Bronze', de: 'Bronze', chiaro: '#f6c79c', medio: '#b8743d', scuro: '#6b3a17', pallido: '#f3e3d3', corpo: 's1' },
  { it: 'Argento', en: 'Silver', de: 'Silber', chiaro: '#ffffff', medio: '#a9b3bb', scuro: '#4d5860', pallido: '#e8ecef', corpo: 's1' },
  { it: 'Oro', en: 'Gold', de: 'Gold', chiaro: '#fff3bd', medio: '#e3ab2f', scuro: '#7a4f06', pallido: '#f7ecd0', corpo: 's1' },
  { it: 'Platino', en: 'Platinum', de: 'Platin', chiaro: '#f0fdff', medio: '#86c6d4', scuro: '#2a6675', pallido: '#e1f0f3', corpo: 's2' },
  { it: 'Smeraldo', en: 'Emerald', de: 'Smaragd', chiaro: '#c4f7da', medio: '#22a866', scuro: '#0a4a2d', pallido: '#dcf1e5', corpo: 's2' },
  { it: 'Zaffiro', en: 'Sapphire', de: 'Saphir', chiaro: '#cfe5ff', medio: '#2f6fd6', scuro: '#0f2c66', pallido: '#dde8f8', corpo: 's2' },
  { it: 'Rubino', en: 'Ruby', de: 'Rubin', chiaro: '#ffd0d5', medio: '#d1263e', scuro: '#5e0915', pallido: '#f6dcdf', corpo: 's3' },
  { it: 'Ametista', en: 'Amethyst', de: 'Amethyst', chiaro: '#eedaff', medio: '#8b45d1', scuro: '#381160', pallido: '#ebe0f5', corpo: 's3' },
  { it: 'Ossidiana', en: 'Obsidian', de: 'Obsidian', chiaro: '#8c9a97', medio: '#2f3b39', scuro: '#0b0f0e', pallido: '#d9dcd9', corpo: 's3' },
  { it: 'Diamante', en: 'Diamond', de: 'Diamant', chiaro: '#d6f4ff', medio: '#3fb6ea', scuro: '#155f92', pallido: '#e3f5fc', corpo: 'diamante' },
];
const ORO = '#e2b240';
const CORPI = {
  s1: ['M60 20 L86 28 V52 C86 72 74 84 60 90 C46 84 34 72 34 52 V28 Z', 20, 90],
  s2: ['M34 26 L46 26 L60 17 L74 26 L86 26 V52 C86 72 74 84 60 90 C46 84 34 72 34 52 Z', 17, 90],
  s3: ['M33 28 C39 22 44 28 47 22 C51 16 55 20 60 13 C65 20 69 16 73 22 C76 28 81 22 87 28 L90 33 L85 37 V53 C85 72 74 84 60 92 C46 84 35 72 35 53 V37 L30 33 Z', 13, 92],
  diamante: ['M60 94 L96 48 L84 24 L36 24 L24 48 Z', 24, 94],
};

// Rango (1-10) dal livello: 1-9 → 1, 10-19 → 2, …, 90-100 → 10.
export const rangoDi = (livello) => Math.min(10, Math.floor(livello / 10) + 1);
export const coloriRango = (r) => RANGHI[r - 1];
// Gradi I, II, III dentro ogni titolo: uno ogni tre livelli (1-3, 4-6, 7-9; 10-12, 13-15, 16-19; …).
export const gradoDi = (livello) => { const da = livello < 10 ? 1 : Math.min(90, Math.floor(livello / 10) * 10); return Math.min(3, Math.floor((livello - da) / 3) + 1); };
export const ROMANI = ['I', 'II', 'III'];
export const nomeRango = (livello, lingua = 'it') => `${RANGHI[rangoDi(livello) - 1][lingua === 'de' ? 'de' : lingua === 'en' ? 'en' : 'it']} ${ROMANI[gradoDi(livello) - 1]}`;

const f1 = (x) => (Math.round(x * 10) / 10).toString();
function raggi(c, n, r1, r2, cy) {
  let out = '';
  for (let i = 0; i < n; i++) {
    const a = (2 * Math.PI * i) / n, w = (Math.PI / n) * 0.45;
    const p = [[60 + r2 * Math.cos(a), cy + r2 * Math.sin(a)], [60 + r1 * Math.cos(a + w), cy + r1 * Math.sin(a + w)], [60 + r1 * Math.cos(a - w), cy + r1 * Math.sin(a - w)]];
    out += `<polygon points="${p.map(([x, y]) => `${f1(x)},${f1(y)}`).join(' ')}"/>`;
  }
  return `<g fill="${c}" opacity="0.55">${out}</g>`;
}
function stella(n, R, r, cx, cy) {
  const p = [];
  for (let i = 0; i < 2 * n; i++) {
    const a = -Math.PI / 2 + (i * Math.PI) / n, rad = i % 2 === 0 ? R : r;
    p.push(`${f1(cx + rad * Math.cos(a))},${f1(cy + rad * Math.sin(a))}`);
  }
  return p.join(' ');
}
function ali(c, grandi) {
  const pts = grandi
    ? [[36, 30], [6, 16], [14, 30], [2, 34], [14, 42], [4, 48], [18, 52], [10, 60], [36, 60]]
    : [[36, 32], [16, 26], [21, 35], [11, 37], [21, 44], [14, 48], [36, 52]];
  const d = (s) => 'M' + pts.map(([x, y]) => `${s ? 120 - x : x} ${y}`).join(' L') + ' Z';
  return `<path d="${d(false)}" fill="${c}" stroke="#fff" stroke-width="1"/><path d="${d(true)}" fill="${c}" stroke="#fff" stroke-width="1"/>`;
}
function alloro(c) {
  const pts = [[27, 58, -12], [27, 68, -25], [31, 77, -42], [37, 84, -58], [93, 58, 12], [93, 68, 25], [89, 77, 42], [83, 84, 58]];
  return `<g fill="${c}">${pts.map(([x, y, r]) => `<ellipse cx="${x}" cy="${y}" rx="3" ry="6" transform="rotate(${r} ${x} ${y})"/>`).join('')}</g>`;
}
const corona = (c, y) => `<path d="M44 ${20 + y} L46 ${6 + y} L53 ${13 + y} L60 ${3 + y} L67 ${13 + y} L74 ${6 + y} L76 ${20 + y} Z" fill="${c}" stroke="#7a5410" stroke-width="1"/><circle cx="46" cy="${6 + y}" r="2" fill="${c}"/><circle cx="60" cy="${3 + y}" r="2.2" fill="${c}"/><circle cx="74" cy="${6 + y}" r="2" fill="${c}"/>`;
const gemma = (l, d, cx, cy, s) => `<polygon points="${cx},${f1(cy - 11 * s)} ${f1(cx + 10 * s)},${cy} ${cx},${f1(cy + 13 * s)} ${f1(cx - 10 * s)},${cy}" fill="${l}" stroke="${d}" stroke-width="1.2"/><path d="M${f1(cx - 10 * s)} ${cy} H${f1(cx + 10 * s)} M${cx} ${f1(cy - 11 * s)} L${f1(cx - 4 * s)} ${cy} L${cx} ${f1(cy + 13 * s)} L${f1(cx + 4 * s)} ${cy} Z" fill="none" stroke="${d}" stroke-width="0.8" opacity="0.7"/>`;
const scintilla = (x, y, s, c) => `<path d="M${x} ${y - s} L${f1(x + s * 0.28)} ${f1(y - s * 0.28)} L${x + s} ${y} L${f1(x + s * 0.28)} ${f1(y + s * 0.28)} L${x} ${y + s} L${f1(x - s * 0.28)} ${f1(y + s * 0.28)} L${x - s} ${y} L${f1(x - s * 0.28)} ${f1(y - s * 0.28)} Z" fill="${c}"/>`;

/**
 * SVG dello stemma.
 * @param {number} r rango 1-10
 * @param {{perc?: number, livello?: number, nastro?: boolean, id?: string, classe?: string}} o
 */
export function stemmaSVG(r, o = {}) {
  r = Math.max(1, Math.min(10, r | 0));
  const { chiaro: cl, medio: md, scuro: sc, pallido: pal, corpo, it } = RANGHI[r - 1];
  const [d, y0, y1] = CORPI[corpo];
  const id = `st${o.id || ''}${r}`;
  const perc = Math.max(0, Math.min(100, o.perc ?? 0));
  const trim = r >= 7 ? ORO : sc;
  const ossidiana = it === 'Ossidiana';
  let dietro = '', davanti = '';
  if (r >= 10) dietro += `<ellipse cx="60" cy="54" rx="58" ry="20" fill="none" stroke="${md}" stroke-width="2" opacity="0.8" transform="rotate(-12 60 54)"/>`;
  if (r >= 9) dietro += `<polygon points="${stella(8, 54, 34, 60, 54)}" fill="${md}" opacity="0.35"/>`;
  if (r >= 7) dietro += raggi(r >= 8 ? ORO : md, r >= 9 ? 20 : 16, 32, r >= 9 ? 58 : 54, 54) + ali(ossidiana ? '#3b4845' : md, true);
  else if (r >= 4) dietro += ali(md, false);
  if (r >= 6) dietro += alloro(r >= 8 ? ORO : md);
  if (r >= 2 && corpo !== 'diamante') {
    if (corpo === 's1') davanti += '<path d="M60 25 L81 31.5 V52 C81 68.5 71 78.5 60 84 C49 78.5 39 68.5 39 52 V31.5 Z" fill="none" stroke="#fff" stroke-width="1.2" opacity="0.85"/>';
    else if (corpo === 's2') davanti += '<path d="M39 30.5 L48 30.5 L60 22.5 L72 30.5 L81 30.5 V52 C81 68.5 71 78.5 60 84 C49 78.5 39 68.5 39 52 Z" fill="none" stroke="#fff" stroke-width="1.2" opacity="0.85"/>';
    else davanti += '<path d="M40 38 V53 C40 70 50 79 60 86 C70 79 80 70 80 53 V38" fill="none" stroke="#fff" stroke-width="1.2" opacity="0.85"/>';
    davanti += [[41, 36], [79, 36], [41, 62], [79, 62]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="1.9" fill="${r >= 9 ? ORO : sc}"/>`).join('');
  }
  if (corpo === 'diamante') davanti += '<path d="M24 48 H96 M36 24 L48 48 L60 94 M84 24 L72 48 L60 94 M60 24 L48 48 M60 24 L72 48" fill="none" stroke="#fff" stroke-width="1.2" opacity="0.9"/>';
  if (r >= 5) davanti += gemma(corpo === 'diamante' ? '#ffffff' : cl, sc, 60, corpo === 'diamante' ? 40 : 54, r < 9 ? 1 : 1.15);
  if (r >= 8) {
    davanti += corona(ORO, corpo === 's3' ? -2 : 2);
    if (r >= 9) davanti += [[53, 16, '#d1263e'], [60, 13, '#2f6fd6'], [67, 16, '#22a866']].map(([x, y, c]) => `<circle cx="${x}" cy="${y}" r="1.6" fill="${c}"/>`).join('');
  } else if (r >= 3) {
    davanti += `<polygon points="${stella(5, 8, 3.5, 60, corpo === 's1' ? 14 : 9)}" fill="${ORO}" stroke="#7a5410" stroke-width="0.9"/>`;
  }
  // Galloni del grado (I, II, III): uno, due o tre segni a V nella parte bassa dello stemma.
  const grado = o.grado ?? (o.livello ? gradoDi(o.livello) : 0);
  const yg = r >= 5 ? 69 : 62, cg = r >= 7 ? ORO : sc;
  for (let k = 0; k < grado; k++) {
    const y = yg + 6 * k, v = `M49 ${y} L60 ${y + 5.5} L71 ${y}`;
    davanti += `<path d="${v}" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" opacity="0.9"/><path d="${v}" fill="none" stroke="${cg}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>`;
  }
  if (r >= 10) davanti += scintilla(20, 20, 6, '#ffffff') + scintilla(100, 72, 5, '#ffffff') + scintilla(98, 18, 4, '#9fe2ff') + scintilla(22, 74, 4, '#9fe2ff');
  let nastro = '';
  if (o.nastro && o.livello) {
    const y = corpo === 'diamante' ? 90 : 88;
    const fondo = ossidiana ? '#0b0f0e' : sc, testo = ossidiana ? ORO : '#ffffff';
    const bordo = r >= 6 ? ` stroke="${ORO}" stroke-width="0.8"` : '';
    nastro = `<path d="M30 ${y} H90 L85 ${y + 7} L90 ${y + 14} H30 L35 ${y + 7} Z" fill="${fondo}"${bordo}/><path d="M38 ${y - 2} H82 V${y + 12} H38 Z" fill="${fondo}" stroke="#fff" stroke-width="1"/><text x="60" y="${y + 9.5}" text-anchor="middle" font-family="Source Sans 3, system-ui, sans-serif" font-size="10" font-weight="800" fill="${testo}">${o.etichetta || 'LIV.'} ${o.livello}</text>`;
  }
  // Il colore che sale con gli EXP è più denso nei ranghi alti (bronzo tenue, diamante pieno).
  const densita = (0.42 + 0.06 * (r - 1)).toFixed(2);
  const meta = (0.55 - 0.035 * (r - 1)).toFixed(2);
  // A ogni grado (I, II, III) lo stemma si illumina un poco di più: alone dietro e riflesso in alto.
  const alone = grado ? `<path d="${d}" fill="${md}" opacity="${[0, 0.2, 0.32, 0.45][grado]}" filter="url(#f${id})" transform="translate(60 54) scale(1.1) translate(-60 -54)"/>` : '';
  const riflesso = grado ? `<rect x="0" y="0" width="120" height="108" fill="url(#l${id})"/>` : '';
  const pieno = `<rect class="stemma-pieno" x="0" y="${y0}" width="120" height="${y1 - y0}" fill="url(#g${id})" style="transform-box: fill-box; transform-origin: 50% 100%; transform: scaleY(${(perc / 100).toFixed(3)}); transition: transform 0.6s ease"/>`;
  return `<svg class="${o.classe || 'stemma-svg'}" viewBox="0 0 120 108" data-rango="${r}-${grado}" aria-hidden="true" focusable="false"><defs><linearGradient id="g${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${cl}" stop-opacity="${densita}"/><stop offset="${meta}" stop-color="${md}" stop-opacity="${densita}"/><stop offset="1" stop-color="${sc}" stop-opacity="${densita}"/></linearGradient><linearGradient id="l${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity="${[0, 0.12, 0.22, 0.32][grado] || 0}"/><stop offset="0.6" stop-color="#fff" stop-opacity="0"/></linearGradient><filter id="f${id}" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="4"/></filter><clipPath id="c${id}"><path d="${d}"/></clipPath></defs>${alone}${dietro}<path d="${d}" fill="${pal}"/><g clip-path="url(#c${id})">${pieno}${riflesso}</g><path d="${d}" fill="none" stroke="${trim}" stroke-width="2.6"/>${davanti}${nastro}</svg>`;
}

// Colori della testata per il rango: bordo e barra, testo del titolo, fondo della barra.
export function stileRango(r) {
  const c = RANGHI[Math.max(1, Math.min(10, r)) - 1];
  const bordo = c.it === 'Ossidiana' ? ORO : c.medio;
  const testo = c.it === 'Ossidiana' ? '#7a5410' : c.it === 'Diamante' ? '#1f6690' : c.scuro;
  return `--rango-bordo: ${bordo}; --rango-testo: ${testo}; --rango-pallido: ${c.pallido}`;
}
