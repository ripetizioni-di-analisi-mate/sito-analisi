// Verifica le raccolte di domande aggiunte ai corsi Zero e alle quinte.
// Uso: node strumenti/verifica-domande.mjs [slug-materia ...]
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import assert from 'node:assert/strict';
import katex from 'katex';

const materie = process.argv.length > 2 ? process.argv.slice(2) : [
  'matematica-da-zero', 'fisica-zero', 'matematica-superiori-5', 'fisica-superiori-5',
];
let totale = 0;
let formule = 0;
for (const materia of materie) {
  const base = join('src/content/domande', materia);
  const capitoli = readdirSync(join('src/content/teoria', materia)).filter(f => f.endsWith('.md')).map(f => f.slice(0, -3));
  let domande = 0;
  for (const capitolo of capitoli) {
    const dir = join(base, capitolo);
    const files = readdirSync(dir).filter(f => /^\d+\.md$/.test(f));
    assert(files.length >= 45, `${materia}/${capitolo}: meno di 45 domande`);
    const posizioni = [0, 0, 0, 0];
    const tracce = new Set();
    for (const file of files) {
      const path = join(dir, file);
      const body = readFileSync(path, 'utf8');
      const front = body.match(/^---\ncorretta: ([1-4])\n---\n/);
      assert(front, `${path}: frontmatter non valido`);
      posizioni[Number(front[1]) - 1]++;
      const parti = body.slice(front[0].length).split('\n## Spiegazione\n');
      assert.equal(parti.length, 2, `${path}: una sola spiegazione`);
      assert(parti[1].trim().length > 65, `${path}: spiegazione incompleta`);
      const inizioScelte = parti[0].indexOf('\n- ');
      assert(inizioScelte > 0, `${path}: traccia autonoma mancante`);
      const traccia = parti[0].slice(0, inizioScelte).trim();
      assert(!tracce.has(traccia), `${path}: traccia duplicata`);
      tracce.add(traccia);
      const scelte = [...parti[0].matchAll(/^- (.+)$/gm)].map(m => m[1]);
      assert.equal(scelte.length, 4, `${path}: numero di alternative`);
      assert.equal(new Set(scelte).size, 4, `${path}: alternative duplicate`);
      assert.equal((body.match(/(?<!\\)\$/g) ?? []).length % 2, 0, `${path}: delimitatori matematici`);
      for (const f of body.matchAll(/\$([^$\n]+)\$/g)) {
        try { katex.renderToString(f[1], { throwOnError: true, strict: false }); } catch (e) { throw new Error(`${path}: ${f[1]}: ${e.message}`); }
        formule++;
      }
    }
    assert(Math.max(...posizioni) - Math.min(...posizioni) <= 2, `${materia}/${capitolo}: posizioni sbilanciate`);
    domande += files.length;
  }
  console.log(`${materia}: ${capitoli.length} capitoli, ${domande} domande verificate`);
  totale += domande;
}
console.log(`Totale: ${totale} domande; ${formule} formule KaTeX valide.`);
