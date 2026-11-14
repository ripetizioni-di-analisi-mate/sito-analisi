// Build divisa in pezzi paralleli (GitHub Actions, .github/workflows/pubblica.yml).
//
// Con FRAMMENTO="i/N" (i da 1 a N) Astro scrive soltanto le pagine del pezzo i; le cartelle dist dei pezzi
// si uniscono poi con scripts/unisci-pezzi.mjs. Senza FRAMMENTO la build è quella di sempre.
//
// Le pagine si dividono per gruppo e non una per una: le pagine di uno stesso argomento (teoria, voci
// singole, schede, tracce, domande) usano lo stesso HTML reso (src/lib/resa.ts), che conviene produrre
// una volta sola, nello stesso pezzo. I dati per il Worker (/dati-…) sono pochi e pesanti: uno per gruppo,
// così si spargono fra i pezzi.
const LINGUE = new Set(['en', 'es', 'de', 'fr', 'us']);

export function gruppoDi(pathname) {
  const seg = String(pathname).replace(/^\/+|\/+$/g, '').replace(/\.html$/, '').split('/');
  if (/^dati-/.test(seg[0])) return seg.join('/');
  const inizio = LINGUE.has(seg[0]) ? 1 : 0;
  return seg.slice(0, inizio + 2).join('/');
}

// FNV-1a a 32 bit: stesso risultato su ogni macchina e a ogni build.
function impronta(testo) {
  let h = 0x811c9dc5;
  for (let i = 0; i < testo.length; i++) {
    h ^= testo.charCodeAt(i);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h;
}

export function pezzoDi(pathname, totale) {
  return (impronta(gruppoDi(pathname)) % totale) + 1;
}

// "3/8" → { indice: 3, totale: 8 }; null se la variabile manca.
export function frammentoDaAmbiente(valore = process.env.FRAMMENTO) {
  if (!valore) return null;
  const m = /^(\d+)\/(\d+)$/.exec(valore.trim());
  if (!m || +m[1] < 1 || +m[1] > +m[2]) throw new Error(`FRAMMENTO non valido: "${valore}" (atteso i/N, con i da 1 a N)`);
  return { indice: +m[1], totale: +m[2] };
}
