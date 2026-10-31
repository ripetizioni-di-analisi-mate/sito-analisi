// Genera, dopo la build, le versioni "vetrina" delle pagine a pagamento:
//  - teoria: visibili i primi due paragrafi, poi un riquadro con i titoli dei paragrafi che mancano,
//    che cosa c'è ancora (il PDF solo nelle materie che lo hanno), prezzo e schede gratuite;
//  - esercizi da fare: traccia visibile, soluzione sostituita dall'invito.
// Il Worker serve queste varianti a chi non ha l'accesso. Le schede svolte
// oltre la terza e i PDF non hanno variante: il Worker manda alla pagina Sblocca.
// Le materie a pagamento sono quelle elencate in src/data/prezzi.json.
import { readFileSync, writeFileSync, mkdirSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const A_PAGAMENTO = Object.keys(JSON.parse(readFileSync(new URL('../src/data/prezzi.json', import.meta.url), 'utf8')));
const DIST = new URL('../dist', import.meta.url).pathname;
const PREZZI = JSON.parse(readFileSync(new URL('../src/data/prezzi.json', import.meta.url), 'utf8'));
const PDF = new URL('../public/pdf', import.meta.url).pathname;
// Nomi brevi delle materie ("Analisi 1"), letti dai file dei dati senza importare TypeScript.
function nomiBrevi(file, re) {
  const testo = readFileSync(new URL(file, import.meta.url), 'utf8');
  return Object.fromEntries([...testo.matchAll(re)].map((m) => [m[1], m[2]]));
}
const BREVE_IT = nomiBrevi('../src/data/materie.ts', /slug: '([a-z0-9-]+)',(?:\s*[a-z]+: '[^']*',)*?\s*breve: '([^']*)'/g);
const BREVE_EN = nomiBrevi('../src/data/materie-en.ts', /^ {2}'?([a-z0-9-]+)'?: \{\s*titolo: '[^']*',\s*breve: '([^']*)'/gm);
const SCHEDE_LIBERE = 3; // come in worker/index.mjs
const contaPagine = (cartella) => (existsSync(cartella) ? readdirSync(cartella).filter((f) => /^\d+\.html$/.test(f)).length : 0);
// Testo del titolo di un paragrafo: si tiene l'HTML interno dell'<h2> (anche le formule), senza l'eventuale ancora.
const titoloH2 = (html, da) => html.slice(html.indexOf('>', da) + 1, html.indexOf('</h2>', da)).replace(/<a class="ancora"[\s\S]*?<\/a>/g, '').trim();

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

// Testi delle vetrine in ogni lingua del sito (l'italiano alla radice, le altre sotto /<lingua>).
const LINGUE = [
  { pref: '', sblocca: 'Sblocca ora', pdf: /<p class="collegamenti">PDF dell'argomento[\s\S]*?<\/p>/,
    breve: BREVE_IT, fine: 'Fine dell’anteprima gratuita',
    titolo: (n) => (n === 1 ? 'La teoria di questo argomento continua con un altro paragrafo' : `La teoria di questo argomento continua con altri ${n} paragrafi`),
    resto: (schede, esercizi, pdf) => `Nell’accesso completo si trovano anche ${schede === 1 ? 'l’altra scheda svolta' : `le altre ${schede} schede svolte`} di questo argomento e le soluzioni dei ${esercizi} esercizi da fare${pdf ? ', oltre al PDF dell’argomento' : ''}.`,
    tasto: (nome, prezzo) => `Sblocca ${nome} · ${prezzo} €`,
    gratis: (url) => `Le prime ${SCHEDE_LIBERE} schede svolte di questo argomento sono gratuite e si trovano negli <a href="${url}">esercizi svolti</a>.`,
    riservata: 'Soluzione riservata a chi ha sbloccato la materia.', soluzione: 'La soluzione completa di questo esercizio è nella versione sbloccata.' },
  { pref: '/en', sblocca: 'Unlock now', pdf: /<p class="collegamenti">Topic PDF[\s\S]*?<\/p>/,
    breve: BREVE_EN, fine: 'End of the free preview',
    titolo: (n) => (n === 1 ? 'The theory of this topic continues with one more section' : `The theory of this topic continues with ${n} more sections`),
    resto: (schede, esercizi, pdf) => `Full access also includes the other ${schede} worked example${schede === 1 ? '' : 's'} of this topic and the solutions of the ${esercizi} practice exercises${pdf ? ', plus the topic PDF' : ''}.`,
    tasto: (nome, prezzo) => `Unlock ${nome} · €${prezzo}`,
    gratis: (url) => `The first ${SCHEDE_LIBERE} worked examples of this topic are free and are in the <a href="${url}">worked examples</a>.`,
    riservata: 'Solution available to those who have unlocked the subject.', soluzione: 'The full solution of this exercise is in the unlocked version.' },
];
let L = LINGUE[0];
function invitoHtml(materia, cosa) {
  return `<div class="velo-blocco"><p>${cosa}</p><a class="bottone-sblocca" href="${L.pref}/${materia}/sblocca">${L.sblocca}</a></div>`;
}

let teorie = 0, esercizi = 0;
for (L of LINGUE) for (const materia of A_PAGAMENTO) {
  const base = join(DIST, L.pref, materia);
  if (!existsSync(base)) continue;
  for (const argomento of readdirSync(base)) {
    const cartella = join(base, argomento);
    if (!existsSync(join(cartella, 'teoria.html'))) continue;
    const dest = join(DIST, 'vetrine', L.pref, materia, argomento);
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
      const voci = posizioni.slice(tenute).map((m2) => `<li>${titoloH2(t, m2.index)}</li>`).join('');
      const schede = Math.max(0, contaPagine(join(cartella, 'esercizi-svolti')) - SCHEDE_LIBERE);
      const daFare = contaPagine(join(cartella, 'esercizi'));
      const pdf = existsSync(join(PDF, materia, `${argomento}.pdf`));
      const nome = L.breve[materia] || materia;
      const invito = `<div class="velo-blocco fine-anteprima"><p class="velo-sopra">${L.fine}</p><p class="velo-titolo">${L.titolo(nascoste)}</p>`
        + `<ol class="velo-elenco" start="${tenute + 1}">${voci}</ol>`
        + `<p>${L.resto(schede, daFare, pdf)}</p>`
        + `<a class="bottone-sblocca" href="${L.pref}/${materia}/sblocca">${L.tasto(nome, PREZZI[materia])}</a>`
        + (schede > 0 || contaPagine(join(cartella, 'esercizi-svolti')) > 0 ? `<p class="velo-gratis">${L.gratis(`${L.pref}/${materia}/${argomento}/esercizi-svolti`)}</p>` : '')
        + `</div>`;
      let vetrina = t.slice(0, taglio) + invito + t.slice(coda);
      // nel riquadro "In questa pagina" restano solo i paragrafi visibili
      const visibili = new Set(posizioni.slice(0, tenute).map((m2) => m2[1]));
      vetrina = vetrina.replace(/<li><a href="#([^"]+)">(.*?)<\/a><\/li>/g, (tutto, slug) => (visibili.has(slug) ? tutto : ''));
      // niente scaricamento del PDF dalla vetrina
      vetrina = vetrina.replace(L.pdf, '');
      writeFileSync(join(dest, 'teoria.html'), vetrina);
      teorie++;
    }

    // --- elenco degli esercizi da fare: tracce visibili, soluzioni tolte ---
    if (existsSync(join(cartella, 'esercizi.html'))) {
      const el = readFileSync(join(cartella, 'esercizi.html'), 'utf8');
      writeFileSync(join(dest, 'esercizi.html'), senzaSoluzioni(el, `<p class="soluzione-riservata">${L.riservata}</p>`));
    }

    // --- esercizi da fare: soluzioni oscurate ---
    const cartellaEs = join(cartella, 'esercizi');
    if (existsSync(cartellaEs)) {
      for (const f of readdirSync(cartellaEs)) {
        if (!/^\d+\.html$/.test(f)) continue;
        const e = readFileSync(join(cartellaEs, f), 'utf8');
        writeFileSync(join(dest, 'esercizi', f), senzaSoluzioni(e, invitoHtml(materia, L.soluzione)));
        esercizi++;
      }
    }
  }
}
console.log(`vetrine: ${teorie} teorie, ${esercizi} esercizi`);
