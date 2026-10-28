// Genera, dopo la build, le versioni "vetrina" delle pagine a pagamento:
//  - teoria: visibile fino a metà dei paragrafi, poi invito a sbloccare;
//  - esercizi da fare: traccia visibile, soluzione sostituita dall'invito.
// Il Worker serve queste varianti a chi non ha l'accesso. Le schede svolte
// oltre la terza e i PDF non hanno variante: il Worker manda alla pagina Sblocca.
// Le materie a pagamento sono quelle elencate in src/data/prezzi.json.
import { readFileSync, writeFileSync, mkdirSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const A_PAGAMENTO = Object.keys(JSON.parse(readFileSync(new URL('../src/data/prezzi.json', import.meta.url), 'utf8')));
const DIST = new URL('../dist', import.meta.url).pathname;

// Sostituisce i blocchi <details> "Mostra soluzione" rispettando l'annidamento.
function senzaSoluzioni(html, invito) {
  let out = '', i = 0;
  while (true) {
    const inizio = html.indexOf('<details class="blocco blocco-soluzione"', i);
    if (inizio === -1) { out += html.slice(i); break; }
    // chiusura bilanciata del details
    let p = inizio, profondita = 0, fine = -1;
    while (p < html.length) {
      const ap = html.indexOf('<details', p);
      const ch = html.indexOf('</details>', p);
      if (ch === -1) break;
      if (ap !== -1 && ap < ch) { profondita++; p = ap + 8; }
      else { profondita--; p = ch + 10; if (profondita === 0) { fine = p; break; } }
    }
    if (fine === -1) { out += html.slice(i); break; }
    out += html.slice(i, inizio) + invito;
    i = fine;
  }
  return out;
}

function invitoHtml(materia, cosa) {
  return `<div class="velo-blocco"><p>${cosa}</p><a class="bottone-sblocca" href="/${materia}/sblocca">Sblocca ora</a></div>`;
}

let teorie = 0, esercizi = 0;
for (const materia of A_PAGAMENTO) {
  const base = join(DIST, materia);
  if (!existsSync(base)) continue;
  for (const argomento of readdirSync(base)) {
    const cartella = join(base, argomento);
    if (!existsSync(join(cartella, 'teoria.html'))) continue;
    const dest = join(DIST, 'vetrine', materia, argomento);
    mkdirSync(join(dest, 'esercizi'), { recursive: true });

    // --- teoria a metà ---
    let t = readFileSync(join(cartella, 'teoria.html'), 'utf8');
    const posizioni = [...t.matchAll(/<h2 id="([^"]+)"/g)];
    if (posizioni.length >= 2) {
      // restano visibili solo i primi due paragrafi: un assaggio, non mezza dispensa
      const tenute = Math.min(2, posizioni.length - 1);
      const taglio = posizioni[tenute].index;
      let coda = t.indexOf('<nav class="passi"', taglio);
      if (coda === -1) coda = t.indexOf('<script', taglio);
      const nascoste = posizioni.length - tenute;
      const invito = invitoHtml(materia, `La teoria continua con ${nascoste} altri paragrafi (${posizioni.slice(tenute).map((m2) => m2[1].replace(/-/g, ' ')).slice(0, 3).join(', ')}…), oltre a tutte le schede svolte, le soluzioni e il PDF.`);
      let vetrina = t.slice(0, taglio) + invito + t.slice(coda);
      // nel riquadro "In questa pagina" restano solo i paragrafi visibili
      const visibili = new Set(posizioni.slice(0, tenute).map((m2) => m2[1]));
      vetrina = vetrina.replace(/<li><a href="#([^"]+)">(.*?)<\/a><\/li>/g, (tutto, slug) => (visibili.has(slug) ? tutto : ''));
      // niente scaricamento del PDF dalla vetrina
      vetrina = vetrina.replace(/<p class="collegamenti">PDF dell'argomento[\s\S]*?<\/p>/, '');
      writeFileSync(join(dest, 'teoria.html'), vetrina);
      teorie++;
    }

    // --- elenco degli esercizi da fare: tracce visibili, soluzioni tolte ---
    if (existsSync(join(cartella, 'esercizi.html'))) {
      const el = readFileSync(join(cartella, 'esercizi.html'), 'utf8');
      writeFileSync(join(dest, 'esercizi.html'), senzaSoluzioni(el, '<p class="soluzione-riservata">Soluzione riservata a chi ha sbloccato la materia.</p>'));
    }

    // --- esercizi da fare: soluzioni oscurate ---
    const cartellaEs = join(cartella, 'esercizi');
    if (existsSync(cartellaEs)) {
      for (const f of readdirSync(cartellaEs)) {
        if (!/^\d+\.html$/.test(f)) continue;
        const e = readFileSync(join(cartellaEs, f), 'utf8');
        writeFileSync(join(dest, 'esercizi', f), senzaSoluzioni(e, invitoHtml(materia, 'La soluzione completa di questo esercizio è nella versione sbloccata.')));
        esercizi++;
      }
    }
  }
}
console.log(`vetrine: ${teorie} teorie, ${esercizi} esercizi`);
