// Disegni SVG incorporati nella pagina.
//
// Le figure del semestre filtro sono file SVG in public/figure/…, scritti nel Markdown come immagini:
//   ![Descrizione](/figure/<materia>/<argomento>/<nome>-it.svg)
// Come <img> restavano «incollate»: rettangolo di fondo proprio, titolo dentro il disegno, carattere diverso
// da quello del sito. Qui, a tempo di build, il file viene letto e messo dentro la pagina:
//   - si toglie il rettangolo di fondo, così il disegno sta sul fondo della pagina;
//   - il titolo in grassetto in cima al disegno diventa la didascalia sotto la figura;
//   - i caratteri sono quelli del sito (font-family tolta dal file, stile .figura-incorporata in global.css);
//   - il bianco delle forme e degli aloni diventa il colore della pagina (var(--carta));
//   - gli id (marcatori delle frecce) ricevono un prefisso, perché più disegni convivono nella stessa pagina.
// Il file in public/ non cambia: resta raggiungibile al suo indirizzo.
import fs from 'node:fs';
import path from 'node:path';
import { visit } from 'unist-util-visit';

const RADICE = path.join(process.cwd(), 'public');
const BIANCO = /^(white|#fff|#ffffff)$/i;
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const attr = (tag, nome) => (tag.match(new RegExp(`\\s${nome}="([^"]*)"`)) || [])[1];
const decodifica = (s) => String(s).replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#(\d+);/g, (a, n) => String.fromCodePoint(+n)).replace(/&amp;/g, '&');
const numero = (v) => (v == null || v === '' ? NaN : parseFloat(v));

const memoria = new Map();
let contatore = 0;

// Punto più alto occupato da un elemento (stima prudente: basta per decidere quanto ritagliare in alto).
function cima(tag, nome, corpo) {
  if (nome === 'text') return numero(attr(tag, 'y')) - (numero(attr(tag, 'font-size')) || 16);
  if (nome === 'rect') return numero(attr(tag, 'y')) || 0;
  if (nome === 'line') return Math.min(numero(attr(tag, 'y1')) || 0, numero(attr(tag, 'y2')) || 0);
  if (nome === 'circle') return (numero(attr(tag, 'cy')) || 0) - (numero(attr(tag, 'r')) || 0);
  if (nome === 'ellipse') return (numero(attr(tag, 'cy')) || 0) - (numero(attr(tag, 'ry')) || 0);
  if (nome === 'polygon' || nome === 'polyline') {
    const n = (attr(tag, 'points') || '').trim().split(/[\s,]+/).map(Number);
    let m = Infinity;
    for (let i = 1; i < n.length; i += 2) if (Number.isFinite(n[i])) m = Math.min(m, n[i]);
    return m;
  }
  if (nome === 'path') {
    // Solo percorsi con coordinate assolute semplici; negli altri casi non si ritaglia.
    const d = attr(tag, 'd') || '';
    if (/[a-z]/.test(d.replace(/[zZ]/g, '')) || /[HhVvAa]/.test(d)) return -Infinity;
    const n = (d.match(/-?\d*\.?\d+(?:e-?\d+)?/gi) || []).map(Number);
    let m = Infinity;
    for (let i = 1; i < n.length; i += 2) m = Math.min(m, n[i]);
    return m;
  }
  return NaN;
}

function prepara(file) {
  if (memoria.has(file)) return memoria.get(file);
  let esito = null;
  try {
    let s = fs.readFileSync(file, 'utf8');
    const apri = s.match(/<svg\b[^>]*>/);
    const vb = apri && (attr(apri[0], 'viewBox') || '').trim().split(/\s+/).map(Number);
    if (apri && vb && vb.length === 4 && vb.every(Number.isFinite)) {
      const [x0, y0, W, H] = vb;
      const larghezza = numero(attr(apri[0], 'width'));
      let dentro = s.slice(apri.index + apri[0].length, s.lastIndexOf('</svg>'));
      const nomeFile = ((dentro.match(/<title\b[^>]*>([\s\S]*?)<\/title>/) || [])[1] || '').replace(/\s+/g, ' ').trim();
      dentro = dentro.replace(/<title\b[^>]*>[\s\S]*?<\/title>/, '').replace(/<desc\b[^>]*>[\s\S]*?<\/desc>/, '');
      // Rettangolo di fondo: il primo <rect> fuori da <defs>, grande quanto il disegno.
      const defs = dentro.match(/<defs>[\s\S]*?<\/defs>/);
      const inizio = defs ? defs.index + defs[0].length : 0;
      const fondo = dentro.slice(inizio).match(/<rect\b[^>]*\/>/);
      if (fondo) {
        const w = attr(fondo[0], 'width'), hh = attr(fondo[0], 'height');
        if (w === '100%' || (Math.abs(numero(w) - W) < 1 && Math.abs(numero(hh) - H) < 1)) {
          dentro = dentro.slice(0, inizio + fondo.index) + dentro.slice(inizio + fondo.index + fondo[0].length);
        }
      }
      // Titolo disegnato in cima: il primo <text>, quando ripete il <title> del file oppure sta in alto, centrato
      // (o in grassetto a sinistra), e non ha lo stesso corpo della maggior parte delle altre scritte
      // (in quel caso è un'etichetta del disegno, non un titolo).
      let didascalia = '', taglio = y0;
      const primo = dentro.match(/<text\b([^>]*)>([\s\S]*?)<\/text>/);
      if (primo) {
        const tag = `<text${primo[1]}>`;
        const peso = attr(tag, 'font-weight') || '';
        const y = numero(attr(tag, 'y')), x = (numero(attr(tag, 'x')) - x0) / W;
        const testoPrimo = primo[2].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
        const corpi = [...dentro.matchAll(/<text\b[^>]*\sfont-size="([\d.]+)"/g)].map((m) => Number(m[1]));
        const uguali = corpi.slice(1).filter((c) => c === corpi[0]).length;
        const etichetta = corpi.length > 2 && uguali / (corpi.length - 1) >= 0.5;
        const grassetto = /^(bold|[6-9]00)$/.test(peso);
        const inAlto = y - y0 < H * 0.2;
        const posto = (attr(tag, 'text-anchor') === 'middle' && Math.abs(x - 0.5) < 0.04) || (grassetto && x < 0.1);
        const titolo = !/<tspan/.test(primo[2]) && inAlto && (testoPrimo === nomeFile || grassetto || (posto && !etichetta));
        if (titolo) {
          didascalia = decodifica(testoPrimo);
          dentro = dentro.slice(0, primo.index) + dentro.slice(primo.index + primo[0].length);
          // Si ritaglia lo spazio lasciato dal titolo, senza toccare ciò che resta.
          let alto = Infinity;
          const corpo = dentro.replace(/<defs>[\s\S]*?<\/defs>/, '');
          for (const m of corpo.matchAll(/<(text|rect|line|circle|ellipse|polygon|polyline|path)\b[^>]*>/g)) {
            const c = cima(m[0], m[1]);
            if (Number.isFinite(c) || c === -Infinity) alto = Math.min(alto, c);
          }
          if (Number.isFinite(alto)) taglio = Math.max(y0, Math.min(alto - 6, y + 10));
        }
      }
      // Senza un titolo disegnato la didascalia è il titolo scritto nel file.
      if (!didascalia) didascalia = decodifica(nomeFile);
      // Caratteri del sito; bianco delle forme e degli aloni uguale al fondo della pagina.
      dentro = dentro.replace(/\sfont-family="[^"]*"/g, '');
      dentro = dentro.replace(/<(?!text\b|tspan\b)([a-zA-Z]+)\b([^>]*)>/g, (tutto, nome, resto) =>
        `<${nome}${resto.replace(/\s(fill|stroke)="([^"]*)"/g, (a, quale, v) => (BIANCO.test(v) ? ` ${quale}="var(--carta)"` : a))}>`);
      dentro = dentro.replace(/<(text|tspan)\b([^>]*)>/g, (tutto, nome, resto) =>
        `<${nome}${resto.replace(/\sstroke="([^"]*)"/g, (a, v) => (BIANCO.test(v) ? ' stroke="var(--carta)"' : a))}>`);
      esito = { dentro: dentro.trim(), didascalia, x0, y: taglio, W, H: H - (taglio - y0), larghezza };
    }
  } catch { esito = null; }
  memoria.set(file, esito);
  return esito;
}

function figura(url, alt) {
  if (!/^\/figure\/[\w\-/]+\.svg$/.test(url)) return null;
  const p = prepara(path.join(RADICE, url));
  if (!p) return null;
  const pre = `fi${++contatore}-`;
  const dentro = p.dentro
    .replace(/\sid="([^"]+)"/g, ` id="${pre}$1"`)
    .replace(/url\(#([^)]+)\)/g, `url(#${pre}$1)`)
    .replace(/\s(xlink:href|href)="#([^"]+)"/g, ` $1="#${pre}$2"`);
  const r = (n) => Math.round(n * 100) / 100;
  const stile = Number.isFinite(p.larghezza) ? ` style="max-width:${r(p.larghezza)}px"` : '';
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${r(p.x0)} ${r(p.y)} ${r(p.W)} ${r(p.H)}" role="img" aria-label="${esc(alt || p.didascalia)}"${stile}>${dentro}</svg>`;
  const sotto = p.didascalia ? `<figcaption>${esc(p.didascalia)}</figcaption>` : '';
  return `<figure class="grafico figura-incorporata">${svg}${sotto}</figure>`;
}

// Sostituisce i paragrafi che contengono solo un'immagine SVG di /figure/ con la figura incorporata.
export { prepara as preparaFigura };

export function incorporaFigure(tree) {
  visit(tree, 'paragraph', (node, index, parent) => {
    if (!parent || index == null) return;
    const figli = (node.children || []).filter((c) => !(c.type === 'text' && !c.value.trim()));
    if (figli.length !== 1 || figli[0].type !== 'image') return;
    const html = figura(figli[0].url || '', figli[0].alt || '');
    if (!html) return;
    parent.children[index] = { type: 'html', value: html };
  });
}
