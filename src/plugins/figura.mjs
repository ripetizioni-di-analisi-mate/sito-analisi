// Figure per il ragionamento figurale e spaziale (serie, matrici, opzioni, cubi), generate a tempo di build (SVG).
//
// ::figura{tipo="serie" celle="triangolo pieno | triangolo pieno r90 | triangolo pieno r180 | ?" titolo="…"}
//
//   tipo       serie (predefinito: celle in fila) · matrice (griglia, 3 colonne) · opzioni (celle con le
//              etichette A, B, C, …) · cella (una sola cella, anche dentro un elenco di risposte) ·
//              sviluppo (sviluppo del cubo) · cubi (uno o più cubi visti dall'alto, da davanti e da destra) ·
//              linee (segmenti su una griglia, per contare triangoli e quadrati)
//   celle      contenuto delle celle separato da |. Una cella vuota si scrive "-", la cella da trovare "?".
//              Ogni cella è un elenco di figure separate da ; e ogni figura è un elenco di parole:
//                forma        cerchio · anello · punto · quadrato · rombo · triangolo · squadra (triangolo
//                             rettangolo, asimmetrico) · pentagono · esagono · stella · croce · x (croce
//                             obliqua) · freccia (punta in alto) · semicerchio (arco in alto) · linea
//                             (segmento verticale) · lettera:F (una lettera o una cifra)
//                riempimento  vuoto (predefinito) · pieno · grigio · righe
//                dimensione   piccolo · medio · grande (predefinita: medio al centro, piccolo nelle altre posizioni)
//                posizione    c (centro, predefinita) · n · s · e · o · ne · no · se · so (nove posti della cella)
//                rotazione    r90, r-45, r180 … (gradi, positivi in senso orario)
//                specchio     immagine allo specchio rispetto all'asse verticale (specchio-o: asse orizzontale);
//                             lo specchio si applica prima della rotazione
//                numero       x3: tre copie della figura disposte nella cella (da x1 a x9)
//              Esempio: "freccia pieno r90; punto no; punto ne" = freccia piena verso destra e due punti in alto.
//   colonne    numero di colonne della griglia (matrice: 3; serie e opzioni: tutte in una riga)
//   etichette  "lettere" (A, B, C, …), "numeri" (1, 2, 3, …) oppure un elenco "A,B,C"; nelle opzioni
//              e nelle cubi con più di un cubo il predefinito è "lettere"
//   schema     (sviluppo) righe separate da |, x = faccia, . = vuoto; esempio ".x..|xxxx|.x.." (croce latina).
//              Le facce si scrivono in celle nell'ordine di lettura dello schema (riga per riga, da sinistra).
//   celle      (cubi) un cubo per gruppo separato da |; in ogni gruppo le facce alto / fronte / destra
//              separate da /, per esempio "croce pieno / cerchio / punto | …". Sui cubi si usano solo simboli
//              che restano uguali ruotando di 90°: cerchio, anello, punto, quadrato, croce, x.
//   segmenti   (linee) segmenti "x1,y1,x2,y2" separati da ; su una griglia da 0 a 10 (y verso il basso)
//   titolo     didascalia (formule fra dollari)
import katex from 'katex';

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const didascalia = (t) => String(t).split(/(\$[^$]+\$)/g).map((p) => (/^\$[^$]+\$$/.test(p)
  ? katex.renderToString(p.slice(1, -1), { throwOnError: false, output: 'html' })
  : esc(p))).join('');
const testoSemplice = (t) => String(t).replace(/\$([^$]+)\$/g, '$1').replace(/[\\{}]/g, '');
let contatore = 0;

const poligono = (n, r = 1, inizio = -90) => Array.from({ length: n }, (_, i) => {
  const a = ((inizio + (360 * i) / n) * Math.PI) / 180;
  return `${(r * Math.cos(a)).toFixed(3)},${(r * Math.sin(a)).toFixed(3)}`;
}).join(' ');
const stella = () => Array.from({ length: 10 }, (_, i) => {
  const r = i % 2 ? 0.42 : 1; const a = ((-90 + 36 * i) * Math.PI) / 180;
  return `${(r * Math.cos(a)).toFixed(3)},${(r * Math.sin(a)).toFixed(3)}`;
}).join(' ');
const CROCE = '-0.3,-1 0.3,-1 0.3,-0.3 1,-0.3 1,0.3 0.3,0.3 0.3,1 -0.3,1 -0.3,0.3 -1,0.3 -1,-0.3 -0.3,-0.3';

// Forme in coordinate unitarie, centrate nell'origine e contenute nel quadrato [-1, 1] × [-1, 1].
const FORME = {
  cerchio: () => '<circle r="1"/>',
  anello: () => '<path fill-rule="evenodd" d="M -1 0 A 1 1 0 1 0 1 0 A 1 1 0 1 0 -1 0 Z M -0.5 0 A 0.5 0.5 0 1 1 0.5 0 A 0.5 0.5 0 1 1 -0.5 0 Z"/>',
  punto: () => '<circle r="0.4"/>',
  quadrato: () => '<rect x="-0.85" y="-0.85" width="1.7" height="1.7"/>',
  rombo: () => '<polygon points="0,-1 1,0 0,1 -1,0"/>',
  triangolo: () => `<polygon points="${poligono(3, 1)}" transform="translate(0 0.12)"/>`,
  squadra: () => '<polygon points="-0.8,-0.85 -0.8,0.85 0.85,0.85"/>',
  pentagono: () => `<polygon points="${poligono(5, 1)}" transform="translate(0 0.08)"/>`,
  esagono: () => `<polygon points="${poligono(6, 1, 0)}"/>`,
  stella: () => `<polygon points="${stella()}" transform="translate(0 0.08)"/>`,
  croce: () => `<polygon points="${CROCE}"/>`,
  x: () => `<polygon points="${CROCE}" transform="rotate(45) scale(0.95)"/>`,
  freccia: () => '<polygon points="0,-1 0.65,-0.25 0.24,-0.25 0.24,1 -0.24,1 -0.24,-0.25 -0.65,-0.25"/>',
  semicerchio: () => '<path d="M -1 0.4 A 1 1 0 0 1 1 0.4 Z" transform="translate(0 0.1)"/>',
  linea: () => '<line class="tratto" x1="0" y1="-1" x2="0" y2="1"/>',
};
const RIEMPIMENTI = ['vuoto', 'pieno', 'grigio', 'righe'];
const DIMENSIONI = { piccolo: 12, medio: 24, grande: 38 };
const POSTI = { c: [50, 50], n: [50, 21], s: [50, 79], e: [79, 50], o: [21, 50], ne: [79, 21], no: [21, 21], se: [79, 79], so: [21, 79] };
const COPIE = {
  1: ['c'], 2: ['o', 'e'], 3: ['o', 'c', 'e'], 4: ['no', 'ne', 'so', 'se'], 5: ['no', 'ne', 'c', 'so', 'se'],
  6: ['no', 'o', 'so', 'ne', 'e', 'se'], 7: ['no', 'o', 'so', 'c', 'ne', 'e', 'se'],
  8: ['no', 'n', 'ne', 'o', 'e', 'so', 's', 'se'], 9: ['no', 'n', 'ne', 'o', 'c', 'e', 'so', 's', 'se'],
};

function figuraSingola(spec, id) {
  const parole = spec.trim().split(/\s+/).filter(Boolean);
  let forma = null, lettera = null, riemp = null, dim = null, posto = 'c', rot = 0, sx = 1, sy = 1, copie = 0;
  for (const p of parole) {
    const q = p.toLowerCase();
    if (FORME[q]) forma = q;
    else if (/^lettera:.+$/i.test(p)) { forma = 'lettera'; lettera = p.slice(8); }
    else if (RIEMPIMENTI.includes(q)) riemp = q;
    else if (DIMENSIONI[q]) dim = DIMENSIONI[q];
    else if (POSTI[q]) posto = q;
    else if (/^r-?\d+(\.\d+)?$/.test(q)) rot = Number(q.slice(1));
    else if (q === 'specchio') sx = -1;
    else if (q === 'specchio-o') sy = -1;
    else if (/^x[1-9]$/.test(q)) copie = Number(q.slice(1));
    else throw new Error(`figura: parola sconosciuta "${p}" in "${spec}"`);
  }
  if (!forma) throw new Error(`figura: manca la forma in "${spec}"`);
  if (!riemp) riemp = forma === 'punto' || forma === 'lettera' ? 'pieno' : 'vuoto';
  const posti = copie ? COPIE[copie] : [posto];
  const misura = dim ?? (copie > 1 || posto !== 'c' ? DIMENSIONI.piccolo : DIMENSIONI.medio);
  const corpo = forma === 'lettera'
    ? `<text class="lettera" x="0" y="0" text-anchor="middle" dominant-baseline="central" font-size="1.9">${esc(lettera)}</text>`
    : FORME[forma]();
  const righe = riemp === 'righe' && forma !== 'lettera' && forma !== 'linea';
  const classe = forma === 'lettera' ? 'f-lettera' : forma === 'linea' ? 'f-linea' : righe ? 'f-contorno' : `f-${riemp}`;
  return posti.map((k) => {
    const [cx, cy] = POSTI[k];
    const tr = `translate(${cx} ${cy}) rotate(${rot}) scale(${sx * misura} ${sy * misura})`;
    const sagoma = `<g class="${classe}" transform="${tr}">${corpo}</g>`;
    if (!righe) return sagoma;
    // Tratteggio: righe oblique della cella ritagliate dalla sagoma, poi il contorno sopra.
    const clip = `${id}-r${++contatore}`;
    const tratti = Array.from({ length: 34 }, (_, i) => `M ${-100 + i * 6} 100 L ${i * 6} 0`).join(' ');
    return `<clipPath id="${clip}" transform="${tr}">${corpo}</clipPath><g clip-path="url(#${clip})"><rect class="fondo-righe" x="0" y="0" width="100" height="100"/><path class="tratteggio" d="${tratti}"/></g>${sagoma}`;
  }).join('');
}

function contenutoCella(testo, id) {
  const t = String(testo).trim();
  if (t === '?') return '<text class="domanda" x="50" y="52" text-anchor="middle" dominant-baseline="central">?</text>';
  if (!t || t === '-') return '';
  return t.split(';').map((s) => s.trim()).filter(Boolean).map((s) => figuraSingola(s, id)).join('');
}

const definizioni = () => '';

function etichetteDi(attr, n, predefinite) {
  const e = attr.etichette ?? predefinite;
  if (!e || e === 'no') return null;
  if (e === 'lettere') return Array.from({ length: n }, (_, i) => String.fromCharCode(65 + i));
  if (e === 'numeri') return Array.from({ length: n }, (_, i) => String(i + 1));
  return String(e).split(',').map((x) => x.trim());
}

function avvolgi(svg, attr, larghezza) {
  const descr = attr.titolo || 'Figura';
  return `<figure class="grafico figura-logica">${svg.replace('<svg ', `<svg role="img" aria-label="${esc(testoSemplice(descr))}" style="max-width: ${larghezza}px" `)}${attr.titolo ? `<figcaption>${didascalia(attr.titolo)}</figcaption>` : ''}</figure>`;
}

function griglia(attr, celle, colonne, etich) {
  const id = `fg${++contatore}`;
  const passo = 112, alto = etich ? 136 : 112;
  const righe = Math.ceil(celle.length / colonne);
  const W = colonne * passo - 12 + 4, H = righe * alto - (etich ? 0 : 12) + 4;
  const corpo = celle.map((c, i) => {
    const x = 2 + (i % colonne) * passo, y = 2 + Math.floor(i / colonne) * alto;
    const domanda = String(c).trim() === '?';
    return `<g transform="translate(${x} ${y})"><rect class="bordo${domanda ? ' bordo-domanda' : ''}" x="0" y="0" width="100" height="100" rx="8"/><svg x="0" y="0" width="100" height="100" viewBox="0 0 100 100" overflow="hidden">${contenutoCella(c, id)}</svg>${etich ? `<text class="etichetta" x="50" y="124" text-anchor="middle">${esc(etich[i] ?? '')}</text>` : ''}</g>`;
  }).join('');
  return avvolgi(`<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">${definizioni(id)}${corpo}</svg>`, attr, Math.min(W * 1.15, 640));
}

// Cubo in assonometria isometrica: facce alto, fronte (in basso a sinistra), destra (in basso a destra).
function cubo(facce, ox, oy, L, id) {
  const k = L / 100, c = 0.8660254 * k, s = 0.5 * k, r = 0.8660254 * L;
  const faccia = (m, contenuto, classe) => `<g transform="matrix(${m.join(' ')})"><rect class="faccia ${classe}" x="0" y="0" width="100" height="100"/><svg x="0" y="0" width="100" height="100" viewBox="0 0 100 100" overflow="hidden">${contenutoCella(contenuto, id)}</svg></g>`;
  const [alto = '', fronte = '', destra = ''] = facce;
  return faccia([c, s, -c, s, ox, oy - L], alto, 'faccia-alto')
    + faccia([c, s, 0, k, ox - r, oy - L / 2], fronte, 'faccia-fronte')
    + faccia([c, -s, 0, k, ox, oy], destra, 'faccia-destra');
}

function cubi(attr) {
  const id = `fg${++contatore}`;
  const gruppi = String(attr.celle || '').split('|').map((g) => g.split('/'));
  const etich = etichetteDi(attr, gruppi.length, gruppi.length > 1 ? 'lettere' : null);
  const L = 62, passo = 2 * 0.8660254 * L + 26, alto = 2 * L + (etich ? 34 : 8);
  const W = gruppi.length * passo, H = alto + 4;
  const corpo = gruppi.map((g, i) => {
    const ox = passo / 2 + i * passo, oy = L + 6;
    return cubo(g.map((x) => x.trim()), ox, oy, L, id) + (etich ? `<text class="etichetta" x="${ox}" y="${oy + L + 26}" text-anchor="middle">${esc(etich[i] ?? '')}</text>` : '');
  }).join('');
  return avvolgi(`<svg viewBox="0 0 ${W.toFixed(1)} ${H}" xmlns="http://www.w3.org/2000/svg">${definizioni(id)}${corpo}</svg>`, attr, Math.min(W * 1.1, 640));
}

function sviluppo(attr) {
  const id = `fg${++contatore}`;
  const righe = String(attr.schema || '.x..|xxxx|.x..').split('|').map((r) => r.trim());
  const facce = String(attr.celle || '').split('|');
  const lato = 70, colonne = Math.max(...righe.map((r) => r.length));
  let i = 0, corpo = '';
  righe.forEach((r, y) => [...r].forEach((ch, x) => {
    if (ch !== 'x') return;
    corpo += `<g transform="translate(${2 + x * lato} ${2 + y * lato}) scale(${lato / 100})"><rect class="faccia" x="0" y="0" width="100" height="100"/><svg x="0" y="0" width="100" height="100" viewBox="0 0 100 100" overflow="hidden">${contenutoCella(facce[i++] ?? '', id)}</svg></g>`;
  }));
  if (facce.length !== i) throw new Error(`figura: lo schema ha ${i} facce e le celle sono ${facce.length}`);
  const W = colonne * lato + 4, H = righe.length * lato + 4;
  return avvolgi(`<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">${definizioni(id)}${corpo}</svg>`, attr, Math.min(W * 1.2, 520));
}

function linee(attr) {
  const u = 30;
  const seg = String(attr.segmenti || '').split(';').map((s) => s.trim()).filter(Boolean).map((s) => {
    const v = s.split(',').map(Number);
    if (v.length !== 4 || v.some((n) => !Number.isFinite(n))) throw new Error(`figura: segmento non valido "${s}"`);
    return `<line class="tratto" x1="${10 + v[0] * u}" y1="${10 + v[1] * u}" x2="${10 + v[2] * u}" y2="${10 + v[3] * u}"/>`;
  }).join('');
  return avvolgi(`<svg viewBox="0 0 320 320" xmlns="http://www.w3.org/2000/svg"><g class="f-linee">${seg}</g></svg>`, attr, 300);
}

export function figura(attr) {
  const tipo = attr.tipo || 'serie';
  if (tipo === 'cubi') return cubi(attr);
  if (tipo === 'sviluppo') return sviluppo(attr);
  if (tipo === 'linee') return linee(attr);
  const celle = String(attr.celle ?? '').split('|');
  if (tipo === 'cella') return griglia(attr, [celle[0]], 1, null).replace('class="grafico figura-logica"', 'class="grafico figura-logica figura-cella"');
  const colonne = Number(attr.colonne) || (tipo === 'matrice' ? 3 : celle.length);
  const etich = etichetteDi(attr, celle.length, tipo === 'opzioni' ? 'lettere' : null);
  return griglia(attr, celle, colonne, etich);
}
