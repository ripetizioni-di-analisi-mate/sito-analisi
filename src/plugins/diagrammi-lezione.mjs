// I disegni vettoriali locali espongono la radice #disegno. <use> ne conserva la geometria
// e i marcatori nel file di origine e prende carattere e colore dalla lezione.
import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { esc } from './grafico-svg.mjs';
import { didascalia } from './grafico.mjs';

const vettoriale = /^\/figure\/(?:[\w-]+\/)*[\w-]+\.svg$/;
const informatica = /^\/immagini\/informatica\/(?:[\w-]+\/)*[\w-]+\.png$/;

export function geometriaDiagramma(file) {
  if (!existsSync(file)) return;
  const radice = readFileSync(file, 'utf8').match(/<svg\b[^>]*>/)?.[0] ?? '';
  const viewBox = radice.match(/\bviewBox="([^"]+)"/)?.[1];
  if (!radice.includes('id="disegno"') || !viewBox) return;
  const valori = viewBox.trim().split(/\s+/).map(Number);
  if (valori.length !== 4 || !valori.every(Number.isFinite) || valori[2] <= 0 || valori[3] <= 0) return;
  return valori;
}

function svgDellaLezione(url, alt) {
  const valori = geometriaDiagramma(resolve('public', url.slice(1)));
  if (!valori) return;
  const accesso = alt ? `role="img" aria-label="${esc(alt)}"` : 'aria-hidden="true"';
  return `<svg viewBox="${valori.join(' ')}" style="max-width:${valori[2]}px" ${accesso}><use href="${esc(url)}#disegno"></use></svg>`;
}

export function integraDiagramma(paragrafo, inTeoria) {
  const [immagine] = paragrafo.children;
  if (paragrafo.children.length !== 1 || immagine.type !== 'image') return;
  const url = immagine.url;
  if (!vettoriale.test(url) && !informatica.test(url)) return;

  // Negli esercizi l'alt può descrivere un risultato. Una didascalia visibile va indicata dall'autore.
  const legenda = immagine.title || (inTeoria ? immagine.alt : '');
  const alt = legenda && legenda === immagine.alt ? '' : immagine.alt || '';
  const svg = vettoriale.test(url) && svgDellaLezione(url, alt);
  paragrafo.data = { hName: 'figure', hProperties: { className: ['grafico', 'diagramma-lezione'] } };
  if (svg) {
    paragrafo.children = [{ type: 'html', value: svg }];
  } else {
    immagine.alt = alt;
    immagine.title = null;
    immagine.data = { hProperties: { loading: 'lazy', decoding: 'async' } };
  }
  if (legenda) paragrafo.children.push({ type: 'html', value: `<figcaption>${didascalia(legenda, 'htmlAndMathml')}</figcaption>` });
}
