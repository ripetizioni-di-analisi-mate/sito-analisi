// Controlli sui contenuti prima della build:
//  - ancore citate dagli esercizi esistenti nella teoria;
//  - direttive aperte e chiuse in modo coerente (::: e ::::);
//  - schede di esercizi svolti con la spiegazione;
//  - formule LaTeX che KaTeX riesce a compilare.
// Uso: node scripts/verifica.mjs [materia/argomento]
import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import katex from 'katex';

const BASE = new URL('../src/content', import.meta.url).pathname;
const filtro = process.argv[2];
let errori = 0;
const err = (f, m) => { errori++; console.log(`${f}: ${m}`); };

function* md(dir) {
  if (!existsSync(dir)) return;
  for (const n of readdirSync(dir)) {
    const p = join(dir, n);
    if (statSync(p).isDirectory()) yield* md(p); else if (p.endsWith('.md')) yield p;
  }
}
const rel = (p) => p.replace(BASE + '/', '');
const dentro = (p) => !filtro || rel(p).includes(filtro);

// ancore della teoria
const ancore = {};
for (const p of md(join(BASE, 'teoria'))) {
  const chiave = rel(p).replace('teoria/', '').replace('.md', '');
  ancore[chiave] = new Set([...readFileSync(p, 'utf8').matchAll(/:{3,4}\w+\{#([\w-]+)/g)].map((m) => m[1]));
}

for (const p of [...md(join(BASE, 'teoria')), ...md(join(BASE, 'svolti')), ...md(join(BASE, 'dafare'))]) {
  if (!dentro(p)) continue;
  const s = readFileSync(p, 'utf8');
  const nome = rel(p);

  // frontmatter
  const fm = s.match(/^---\n([\s\S]*?)\n---/);
  if (!fm) { err(nome, 'frontmatter mancante'); continue; }
  if (!/^titolo:/m.test(fm[1])) err(nome, 'manca "titolo"');

  // direttive: ogni riga che inizia con ::: o :::: apre o chiude
  const pila = [];
  s.split('\n').forEach((riga, i) => {
    const m = riga.match(/^(:{3,4})(\w*)/);
    if (!m) return;
    if (riga.startsWith('::grafico')) return;
    const [, fence, nomeDir] = m;
    if (nomeDir) pila.push({ fence, nomeDir, riga: i + 1 });
    else {
      const ultimo = pila.pop();
      if (!ultimo) err(nome, `riga ${i + 1}: chiusura senza apertura`);
      else if (ultimo.fence !== fence) err(nome, `riga ${i + 1}: chiusura ${fence} per ${ultimo.nomeDir} aperto con ${ultimo.fence} (riga ${ultimo.riga})`);
    }
  });
  for (const u of pila) err(nome, `direttiva ${u.nomeDir} (riga ${u.riga}) mai chiusa`);

  // ancore citate
  if (!nome.startsWith('teoria/')) {
    const [coll, materia, argomento] = nome.split('/');
    const lista = fm[1].match(/^teoria:\s*\[([^\]]*)\]/m);
    if (lista) for (const a of lista[1].split(',').map((x) => x.trim()).filter(Boolean)) {
      if (!ancore[`${materia}/${argomento}`]?.has(a)) err(nome, `ancora "${a}" non trovata in teoria/${materia}/${argomento}.md`);
    }
    if (coll === 'svolti' && !s.includes('class="spiegazione"')) err(nome, 'manca la spiegazione a parole');
    if (coll === 'dafare' && !s.includes(':::soluzione')) err(nome, 'manca il blocco soluzione');
  }

  // formule
  const corpo = s.slice(fm[0].length);
  const formule = [...corpo.matchAll(/\$\$([\s\S]*?)\$\$/g), ...corpo.replace(/\$\$[\s\S]*?\$\$/g, '').matchAll(/\$([^$\n]+?)\$/g)];
  for (const f of formule) {
    try { katex.renderToString(f[1], { throwOnError: true, strict: false, displayMode: f[0].startsWith('$$') }); }
    catch (e) { err(nome, `formula non valida: ${f[1].slice(0, 60).replace(/\n/g, ' ')} → ${e.message.split('\n')[0]}`); }
  }
}
console.log(errori === 0 ? 'nessun errore' : `${errori} segnalazioni`);
process.exit(errori ? 1 : 0);
