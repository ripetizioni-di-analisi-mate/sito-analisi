// Controllo delle chiavi di correzione (src/data/chiavi/<materia>.json o file di lavoro con la stessa forma).
// Uso: node strumenti/chiavi-controlla.mjs <materia> <file.json> [<file.json> …]
// Per ogni chiave: la compila, simula lo studente che scrive i risultati giusti (deve risultare «giusta»),
// simula un risultato sbagliato in ogni casella (non deve risultare «giusta») e avvisa se un valore numerico
// non compare nella soluzione dell'esercizio. Esce con codice 1 se c'è almeno un errore.
import fs from 'node:fs';
import path from 'node:path';
import { compilaChiave, confrontaMulti, daLatex, risultatoDaEsercizio } from '../worker/valuta.mjs';

const [materia, ...files] = process.argv.slice(2);
if (!materia || !files.length) { console.error('uso: node strumenti/chiavi-controlla.mjs <materia> <file.json> …'); process.exit(1); }
const radice = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
let errori = 0, avvisi = 0, chiavi = 0;
const norm = (t) => String(t).replace(/\\[dt]?frac/g, '\\frac').replace(/\\(left|right|,|;|!|displaystyle)/g, '').replace(/\{,\}/g, ',').replace(/\s+/g, '');
const fmt = (x) => (x === Infinity ? '+inf' : x === -Infinity ? '-inf' : String(x));
function giuste(k, c) {
  switch (c.t) {
    case 'numero': return daLatex(k.v);
    case 'funzione': return daLatex(String(k.v).replace(/\+\s*[cC]\s*$/, ''));
    case 'equazione': return String(k.v).split('=').map((x) => daLatex(x)).join('=');
    case 'valori': return k.v.map((x) => daLatex(x)).join('; ');
    case 'matrice': return k.v.map((r) => r.map((x) => daLatex(x)));
    case 'scelta': return String(c.v);
    case 'intervallo': return c.v.length ? c.v.map((i) => (i.a === i.b ? `{${fmt(i.a)}}` : `${i.ca ? '[' : '('}${fmt(i.a)}; ${fmt(i.b)}${i.cb ? ']' : ')'}`)).join(' U ') : 'vuoto';
    default: return '';
  }
}
function sbagliata(k, c) {
  switch (c.t) {
    case 'numero': return `(${daLatex(k.v)})*1.37+0.41`;
    case 'funzione': return `(${daLatex(String(k.v).replace(/\+\s*[cC]\s*$/, ''))})*1.37+${(c.vars || ['x'])[0]}`;
    case 'equazione': { const [l, r] = String(k.v).split('='); return `${daLatex(l)}=(${daLatex(r)})+0.7`; }
    case 'valori': return [`(${daLatex(k.v[0])})+0.71`, ...k.v.slice(1).map((x) => daLatex(x))].join('; ');
    case 'matrice': return k.v.map((r, i) => r.map((x, j) => (i === 0 && j === 0 ? `(${daLatex(x)})+0.71` : daLatex(x))));
    case 'scelta': return String((c.v + 1) % c.opzioni.length);
    case 'intervallo': return c.v.length ? `[1000; 1001]` : 'R';
    default: return '';
  }
}
for (const file of files) {
  const dati = JSON.parse(fs.readFileSync(file, 'utf8'));
  for (const [id, k] of Object.entries(dati)) {
    chiavi++;
    const dove = `${materia}/${id}`;
    const md = path.join(radice, 'src/content/dafare', materia, `${id}.md`);
    if (!fs.existsSync(md)) { console.log(`ERRORE ${dove}: l'esercizio non esiste`); errori++; continue; }
    const testo = fs.readFileSync(md, 'utf8');
    const soluzione = norm(testo.split(/:::soluzione/)[1] || '');
    let ch;
    try { ch = compilaChiave(k); } catch (e) { console.log(`ERRORE ${dove}: ${e.message}`); errori++; continue; }
    if (risultatoDaEsercizio(testo)) { console.log(`AVVISO ${dove}: l'esercizio ha già la verifica automatica; la chiave la sostituisce`); avvisi++; }
    if (k.campi.length > 8) { console.log(`AVVISO ${dove}: ${k.campi.length} caselle (al massimo 8 consigliate)`); avvisi++; }
    const r = confrontaMulti(ch.campi.map((c, i) => giuste(k.campi[i], c)), ch);
    if (r.esito !== 'giusta') { console.log(`ERRORE ${dove}: i risultati della chiave non risultano giusti (${r.campi.join(', ')})`); errori++; }
    ch.campi.forEach((c, i) => {
      const risposte = ch.campi.map((cc, j) => (j === i ? sbagliata(k.campi[j], cc) : giuste(k.campi[j], cc)));
      const r2 = confrontaMulti(risposte, ch);
      if (r2.esito === 'giusta') { console.log(`ERRORE ${dove}: la casella ${i + 1} accetta anche un risultato sbagliato`); errori++; }
      if (!String(k.campi[i].e || '').trim()) { console.log(`ERRORE ${dove}: la casella ${i + 1} non ha l'etichetta`); errori++; }
      const valori = c.t === 'numero' ? [k.campi[i].v] : c.t === 'valori' ? k.campi[i].v : c.t === 'matrice' ? k.campi[i].v.flat() : [];
      for (const v of valori) {
        const t = norm(v);
        if (t.length > 1 && !soluzione.includes(t)) { console.log(`AVVISO ${dove}: il valore «${v}» della casella ${i + 1} non compare scritto così nella soluzione`); avvisi++; }
      }
    });
  }
}
console.log(`${chiavi} chiavi, ${errori} errori, ${avvisi} avvisi`);
process.exit(errori ? 1 : 0);
