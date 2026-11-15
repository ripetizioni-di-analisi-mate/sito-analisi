// Unisce le classificazioni degli errori tipici scritte dagli agenti (brief-studio-guidato-errori.md)
// in src/data/studio-guidato-errori.json, con controlli e formule già rese in HTML per la pagina del risultato.
// Uso: node strumenti/sg-errori-unisci.mjs [cartella=/home/claude/sg-errori] [materie…]
// Il file viene aggiornato per i capitoli presenti nella cartella; gli altri capitoli restano come sono.
import fs from 'node:fs';
import path from 'node:path';
import katex from 'katex';

const radice = path.dirname(path.dirname(new URL(import.meta.url).pathname));
const [cartella = '/home/claude/sg-errori', ...materie] = process.argv.slice(2);
const uscita = path.join(radice, 'src/data/studio-guidato-errori.json');
const dati = fs.existsSync(uscita) ? JSON.parse(fs.readFileSync(uscita, 'utf8')) : { errori: {}, domande: {} };
const CLASSI = JSON.parse(fs.readFileSync(path.join(radice, 'src/data/studio-guidato-livelli.json'), 'utf8'));

const esc = (t) => t.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
// Testo con formule $…$ → HTML con KaTeX (il resto del testo viene protetto).
function html(t) {
  return t.split(/(\$[^$]+\$)/g).map((p) => p.startsWith('$') && p.endsWith('$') && p.length > 2
    ? katex.renderToString(p.slice(1, -1), { throwOnError: true, output: 'html' }) : esc(p)).join('');
}

let problemi = 0, diagnosi = 0, sbagliate = 0;
const avviso = (m) => { problemi++; console.log('ERRORE', m); };
for (const f of fs.readdirSync(cartella).filter((x) => x.endsWith('.json')).sort()) {
  const c = JSON.parse(fs.readFileSync(path.join(cartella, f), 'utf8'));
  if (materie.length && !materie.includes(c.materia)) continue;
  const chiave = `${c.materia}/${c.argomento}`;
  const abilita = CLASSI.abilita[chiave] || [];
  const ids = new Set();
  const errori = [];
  for (const e of c.errori || []) {
    if (!/^[a-z0-9-]+$/.test(e.id) || ids.has(e.id)) avviso(`${chiave}: id non valido o doppio ${e.id}`);
    if (!Number.isInteger(e.abilita) || e.abilita < 0 || e.abilita >= abilita.length) avviso(`${chiave}: abilità fuori elenco in ${e.id}`);
    if (/—|\*/.test(e.nome + e.fatto)) avviso(`${chiave}: lineetta o asterisco in ${e.id}`);
    ids.add(e.id);
    try { errori.push({ id: e.id, nome: e.nome.trim(), fatto: e.fatto.trim(), abilita: e.abilita, nomeHtml: html(e.nome.trim()), fattoHtml: html(e.fatto.trim()) }); }
    catch (x) { avviso(`${chiave}: formula non valida in ${e.id}: ${x.message}`); }
  }
  const usati = new Set();
  const domande = {};
  const cartellaDomande = path.join(radice, 'src/content/domande', c.materia, c.argomento);
  for (const nf of fs.readdirSync(cartellaDomande)) {
    const id = `${c.argomento}/${nf.replace('.md', '')}`;
    const corretta = Number(/corretta:\s*(\d)/.exec(fs.readFileSync(path.join(cartellaDomande, nf), 'utf8'))[1]);
    const d = c.domande?.[id];
    if (!d) { avviso(`${chiave}: manca ${id}`); continue; }
    const voce = {};
    for (const [k, v] of Object.entries(d)) {
      if (Number(k) === corretta) { if (v) avviso(`${chiave}: ${id} diagnosi sulla risposta corretta ${k}`); continue; }
      if (!['1', '2', '3', '4'].includes(k)) { avviso(`${chiave}: ${id} risposta ${k}`); continue; }
      sbagliate++;
      if (v === null) continue;
      if (!ids.has(v)) { avviso(`${chiave}: ${id} errore sconosciuto ${v}`); continue; }
      voce[k] = v; usati.add(v); diagnosi++;
    }
    if (Object.keys(voce).length) domande[id] = voce;
  }
  for (const e of errori) if (!usati.has(e.id)) console.log('nota', `${chiave}: errore mai usato ${e.id}`);
  dati.errori[chiave] = errori.filter((e) => usati.has(e.id));
  (dati.domande[c.materia] ||= {});
  for (const k of Object.keys(dati.domande[c.materia])) if (k.startsWith(`${c.argomento}/`)) delete dati.domande[c.materia][k];
  Object.assign(dati.domande[c.materia], domande);
  for (const p of c.problemi || []) console.log('segnalato', `${chiave}: ${p}`);
  console.log(chiave, `${errori.length} errori`, `${Object.keys(domande).length} domande con diagnosi`);
}
fs.writeFileSync(uscita, JSON.stringify(dati));
console.log(`diagnosi ${diagnosi} su ${sbagliate} risposte sbagliate; problemi ${problemi}`);
if (problemi) process.exitCode = 1;
