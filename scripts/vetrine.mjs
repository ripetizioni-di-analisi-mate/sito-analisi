// Genera, dopo la build, le versioni "vetrina" delle pagine a pagamento:
//  - teoria: visibili i primi due paragrafi, poi un riquadro con i titoli dei paragrafi che mancano,
//    che cosa c'è ancora (il PDF solo nelle materie che lo hanno), prezzo e schede gratuite;
//  - esercizi da fare: traccia visibile, soluzione sostituita dall'invito.
//  - schede svolte oltre la terza: titolo, teoria usata e tracce visibili, al posto di ogni
//    svolgimento una riga che rimanda all'accesso completo, in fondo il riquadro di accesso
//    (la fine della traccia è segnata da src/plugins/remark-tracce.mjs).
// Il Worker serve queste varianti a chi non ha l'accesso. I PDF e le pagine di stampa
// non hanno variante: il Worker manda alla pagina Sblocca.
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
// Nomi completi delle materie (riquadro delle schede) e nomi brevi degli argomenti (link alle schede gratuite),
// materia per materia, perché lo stesso argomento (per esempio "derivate") compare in più materie.
function perMateria(file, inizio, campoTitolo, voceArgomento) {
  const testo = readFileSync(new URL(file, import.meta.url), 'utf8');
  const pezzi = testo.split(inizio).slice(1);
  const titoli = {}, argomenti = {};
  for (let k = 0; k < pezzi.length; k += 2) {
    const [slug, corpo] = [pezzi[k], pezzi[k + 1]];
    titoli[slug] = corpo.match(campoTitolo)?.[1];
    argomenti[slug] = Object.fromEntries([...corpo.matchAll(voceArgomento)].map((m) => [m[1], m[2]]));
  }
  return { titoli, argomenti };
}
const DATI_IT = perMateria('../src/data/materie.ts', /^ {4}slug: '([a-z0-9-]+)',$/m, /^ {4}titolo: '([^']*)'/m, /\{ slug: '([a-z0-9-]+)', titolo: '[^']*', breve: '([^']*)' \}/g);
const DATI_EN = perMateria('../src/data/materie-en.ts', /^ {2}'?([a-z0-9-]+)'?: \{$/m, /^ {4}titolo: '([^']*)'/m, /^ {6}'?([a-z0-9-]+)'?: \{ titolo: '[^']*', breve: '([^']*)' \}/gm);
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

// Fine del <div> che si apre in posizione `da`, contando i <div> annidati.
function fineDiv(html, da) {
  let p = da, profondita = 0;
  while (p < html.length) {
    const ap = html.indexOf('<div', p);
    const ch = html.indexOf('</div>', p);
    if (ch === -1) return -1;
    if (ap !== -1 && ap < ch) { profondita++; p = ap + 4; } else { profondita--; p = ch + 6; if (profondita === 0) return ch; }
  }
  return -1;
}
const SEGNO_TRACCIA = '<span class="fine-traccia" hidden></span>';

// Testi delle vetrine in ogni lingua del sito (l'italiano alla radice, le altre sotto /<lingua>).
const LINGUE = [
  { pref: '', sblocca: 'Sblocca ora', pdf: /<p class="collegamenti">PDF dell(?:'|&#39;|&#x27;|’)argomento[\s\S]*?<\/p>/,
    breve: BREVE_IT, nomi: DATI_IT.titoli, argomenti: DATI_IT.argomenti, fine: 'Fine dell’anteprima gratuita',
    titolo: (n) => (n === 1 ? 'La teoria di questo argomento continua con un altro paragrafo' : `La teoria di questo argomento continua con altri ${n} paragrafi`),
    resto: (schede, esercizi, pdf) => `Nell’accesso completo si trovano anche ${schede === 1 ? 'l’altra scheda svolta' : `le altre ${schede} schede svolte`} di questo argomento e le soluzioni dei ${esercizi} esercizi da fare${pdf ? ', oltre al PDF dell’argomento' : ''}.`,
    tasto: (nome, prezzo) => `Sblocca ${nome} · ${prezzo} €`,
    gratis: (url) => `Le prime ${SCHEDE_LIBERE} schede svolte di questo argomento sono gratuite e si trovano negli <a href="${url}">esercizi svolti</a>.`,
    riservata: 'Soluzione riservata a chi ha sbloccato la materia.', soluzione: 'La soluzione completa di questo esercizio è nella versione sbloccata.',
    svolgimento: 'Svolgimento passo per passo nell’accesso completo.',
    schedaSopra: 'Scheda dell’accesso completo',
    schedaTitolo: (titolo) => `Le tracce sono libere, gli svolgimenti sono riservati a chi ha sbloccato ${titolo}`,
    schedaResto: (schede, argomenti, esercizi) => `Le prime ${SCHEDE_LIBERE} schede di ogni argomento sono gratuite. Con l’accesso completo ci sono tutte le ${schede} schede svolte, la teoria completa ${argomenti === 1 ? 'dell’argomento' : `dei ${argomenti} argomenti`} e le soluzioni dei ${esercizi} esercizi da fare.`,
    schedeGratis: (arg) => `Le schede gratuite di ${arg} →` },
  { pref: '/en', sblocca: 'Unlock now', pdf: /<p class="collegamenti">Topic PDF[\s\S]*?<\/p>/,
    breve: BREVE_EN, nomi: DATI_EN.titoli, argomenti: DATI_EN.argomenti, fine: 'End of the free preview',
    titolo: (n) => (n === 1 ? 'The theory of this topic continues with one more section' : `The theory of this topic continues with ${n} more sections`),
    resto: (schede, esercizi, pdf) => `Full access also includes the other ${schede} worked example${schede === 1 ? '' : 's'} of this topic and the solutions of the ${esercizi} practice exercises${pdf ? ', plus the topic PDF' : ''}.`,
    tasto: (nome, prezzo) => `Unlock ${nome} · €${prezzo}`,
    gratis: (url) => `The first ${SCHEDE_LIBERE} worked examples of this topic are free and are in the <a href="${url}">worked examples</a>.`,
    riservata: 'Solution available to those who have unlocked the subject.', soluzione: 'The full solution of this exercise is in the unlocked version.',
    svolgimento: 'Step-by-step solution in full access.',
    schedaSopra: 'Part of full access',
    schedaTitolo: (titolo) => `The exercises are free to read, the solutions are for those who have unlocked ${titolo}`,
    schedaResto: (schede, argomenti, esercizi) => `The first ${SCHEDE_LIBERE} worked examples of each topic are free. Full access includes all ${schede} worked examples, the complete theory of the ${argomenti} topic${argomenti === 1 ? '' : 's'} and the solutions of the ${esercizi} practice exercises.`,
    schedeGratis: (arg) => `Free worked examples of ${arg} →` },
];
let L = LINGUE[0];
function invitoHtml(materia, cosa) {
  return `<div class="velo-blocco"><p>${cosa}</p><a class="bottone-sblocca" href="${L.pref}/${materia}/sblocca">${L.sblocca}</a></div>`;
}

let teorie = 0, esercizi = 0, schedeVetrina = 0;
const problemi = [];
for (L of LINGUE) for (const materia of A_PAGAMENTO) {
  const base = join(DIST, L.pref, materia);
  if (!existsSync(base)) continue;
  // numeri della materia intera, per il riquadro delle schede bloccate
  const argomentiMateria = readdirSync(base).filter((a) => existsSync(join(base, a, 'teoria.html')));
  const totSchede = argomentiMateria.reduce((n, a) => n + contaPagine(join(base, a, 'esercizi-svolti')), 0);
  const totDaFare = argomentiMateria.reduce((n, a) => n + contaPagine(join(base, a, 'esercizi')), 0);
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

    // --- schede svolte oltre le gratuite: tracce visibili, svolgimenti tolti ---
    const cartellaSv = join(cartella, 'esercizi-svolti');
    if (existsSync(cartellaSv)) {
      mkdirSync(join(dest, 'esercizi-svolti'), { recursive: true });
      for (const f of readdirSync(cartellaSv)) {
        if (!/^\d+\.html$/.test(f) || parseInt(f, 10) <= SCHEDE_LIBERE) continue;
        const h = readFileSync(join(cartellaSv, f), 'utf8');
        const apre = h.indexOf('<div class="testo-studio">');
        const chiude = apre === -1 ? -1 : fineDiv(h, apre);
        if (chiude === -1) { problemi.push(`${L.pref}/${materia}/${argomento}/esercizi-svolti/${f}: testo non trovato`); continue; }
        const dentro = h.slice(apre + '<div class="testo-studio">'.length, chiude);
        const parti = dentro.split(/(?=<h2 id=")/);
        let mancanti = 0;
        const ridotto = parti.map((x) => {
          if (!x.startsWith('<h2')) return x;
          const i = x.indexOf(SEGNO_TRACCIA);
          if (i === -1) { mancanti++; return x.replace(/(<\/h2>)[\s\S]*$/, `$1<p class="svolgimento-riservato">${L.svolgimento}</p>`); }
          return `${x.slice(0, i)}<p class="svolgimento-riservato">${L.svolgimento}</p>`;
        }).join('');
        if (mancanti) problemi.push(`${L.pref}/${materia}/${argomento}/esercizi-svolti/${f}: ${mancanti} esercizi senza segno di fine traccia (mostrato solo il titolo)`);
        const nomeArg = L.argomenti[materia]?.[argomento] || argomento;
        const riquadro = `<div class="velo-blocco fine-anteprima velo-scheda"><p class="velo-sopra">${L.schedaSopra}</p>`
          + `<p class="velo-titolo">${L.schedaTitolo(L.nomi[materia] || materia)}</p>`
          + `<p>${L.schedaResto(totSchede, argomentiMateria.length, totDaFare)}</p>`
          + `<a class="bottone-sblocca" href="${L.pref}/${materia}/sblocca">${L.tasto(L.breve[materia] || materia, PREZZI[materia])}</a>`
          + `<p class="velo-gratis"><a href="${L.pref}/${materia}/${argomento}/esercizi-svolti/1">${L.schedeGratis(nomeArg)}</a></p>`
          + `</div>`;
        const vetrina = `${h.slice(0, apre)}<div class="testo-studio">${ridotto}</div>${riquadro}${h.slice(chiude + 6)}`;
        writeFileSync(join(dest, 'esercizi-svolti', f), vetrina);
        schedeVetrina++;
      }
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
console.log(`vetrine: ${teorie} teorie, ${schedeVetrina} schede svolte, ${esercizi} esercizi`);
for (const p of problemi) console.warn(`vetrine: ${p}`);
