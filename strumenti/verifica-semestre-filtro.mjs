// Verifica i nuovi contenuti con lo stesso processore Markdown usato dal sito.
// Uso: node strumenti/verifica-semestre-filtro.mjs
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import assert from 'node:assert/strict';
import { parse } from 'yaml';
import { createMarkdownProcessor } from '@astrojs/markdown-remark';
import remarkMath from 'remark-math';
import remarkDirective from 'remark-directive';
import remarkBlocchi from '../src/plugins/remark-blocchi.mjs';
import remarkTracce from '../src/plugins/remark-tracce.mjs';
import rehypeKatex from '../src/plugins/rehype-katex-tex.mjs';
import katex from 'katex';

const materia = process.argv[2] || 'chimica-semestre-filtro';
const radice = 'src/content';
const cartellaTeoria = join(radice, 'teoria', materia);
const teorie = readdirSync(cartellaTeoria).filter((f) => f.endsWith('.md')).sort();
assert.equal(teorie.length, 7, 'Servono tutte le sette unità del programma');
const processore = await createMarkdownProcessor({
  remarkPlugins: [remarkMath, remarkDirective, remarkBlocchi, remarkTracce],
  rehypePlugins: [[rehypeKatex, { strict: false, output: 'html' }]],
});
let file = 0, formule = 0;
const totali = { teoria: 0, svolti: 0, dafare: 0, domande: 0, eserciziSvolti: 0 };
const leggi = (percorso) => {
  const testo = readFileSync(percorso, 'utf8');
  const fm = testo.match(/^---\n([\s\S]*?)\n---\n/);
  assert.ok(fm, `${percorso}: frontmatter assente`);
  return { dati: parse(fm[1]), corpo: testo.slice(fm[0].length) };
};
async function rendi(percorso, corpo) {
  for (const m of corpo.matchAll(/\$\$([\s\S]*?)\$\$|(?<!\$)\$(?!\$)([^\n$]+?)\$(?!\$)/g)) {
    katex.renderToString(m[1] ?? m[2], { displayMode: m[1] !== undefined, throwOnError: true, strict: false });
    formule++;
  }
  const html = (await processore.render(corpo)).code;
  assert.ok(!html.includes('katex-error'), `${percorso}: formula non resa`);
  assert.equal((corpo.match(/<div class="spiegazione">/g) ?? []).length, (corpo.match(/<\/div>/g) ?? []).length, `${percorso}: spiegazioni non chiuse`);
  file++;
  return html;
}
const distribuzione = [0, 0, 0, 0];
for (const nome of teorie) {
  const slug = nome.slice(0, -3);
  const teoriaPath = join(cartellaTeoria, nome);
  const { dati, corpo } = leggi(teoriaPath);
  assert.equal(typeof dati.titolo, 'string', `${teoriaPath}: titolo`);
  assert.ok(!corpo.includes(':::percorso'), `${teoriaPath}: blocco escluso dal progetto`);
  const html = await rendi(teoriaPath, corpo);
  const ancore = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map((m) => m[1]));
  const sezioni = (corpo.match(/^## /gm) ?? []).length;
  assert.ok(sezioni >= 6 && sezioni <= 10, `${teoriaPath}: da 6 a 10 sezioni`);
  totali.teoria++;
  for (const tipo of ['svolti', 'dafare', 'domande']) {
    const cartella = join(radice, tipo, materia, slug);
    const nomi = readdirSync(cartella).filter((f) => /^\d+\.md$/.test(f)).sort((a,b) => parseInt(a)-parseInt(b));
    if (tipo === 'domande') {
      assert.deepEqual(nomi, Array.from({ length: 90 }, (_, i) => `${i + 1}.md`), `${cartella}: servono 90 domande con ID consecutivi`);
    } else {
      assert.ok(nomi.length >= (tipo === 'svolti' ? 10 : 14), `${cartella}: contenuti incompleti`);
    }
    for (const nomeFile of nomi) {
      const percorso = join(cartella, nomeFile);
      const { dati, corpo } = leggi(percorso);
      for (const a of dati.teoria ?? []) assert.ok(ancore.has(a), `${percorso}: ancora assente ${a}`);
      const html = await rendi(percorso, corpo);
      if (tipo === 'svolti') {
        const n = (corpo.match(/^## Esercizio \d+/gm) ?? []).length;
        assert.ok(n >= 2 && n <= 4, `${percorso}: scheda con 2-4 esercizi`);
        assert.equal(dati.gratis, parseInt(nomeFile) <= 3, `${percorso}: anteprima`);
        assert.equal((corpo.match(/<div class="spiegazione">/g) ?? []).length, n, `${percorso}: una spiegazione per esercizio`);
        totali.eserciziSvolti += n;
      } else if (tipo === 'dafare') {
        assert.ok(html.includes('blocco-soluzione'), `${percorso}: soluzione assente`);
      } else {
        assert.ok(dati.corretta >= 1 && dati.corretta <= 4, `${percorso}: indice risposta`);
        assert.ok(corpo.split(/^- /m)[0].trim() || existsSync(join(radice, 'dafare', materia, slug, nomeFile)), `${percorso}: mancano testo della domanda e traccia associata`);
        const prima = html.split(/<h2[\s>]/)[0];
        const lista = [...prima.matchAll(/<ul>([\s\S]*?)<\/ul>/g)].pop();
        const opzioni = lista ? [...lista[1].matchAll(/<li>([\s\S]*?)<\/li>/g)].map((m) => m[1].trim()) : [];
        assert.equal(opzioni.length, 4, `${percorso}: quattro opzioni`);
        assert.equal(new Set(opzioni).size, 4, `${percorso}: opzioni duplicate`);
        assert.ok(corpo.includes('## Spiegazione'), `${percorso}: motivazione assente`);
        for (const m of corpo.matchAll(new RegExp(`/${materia}/([^/]+)/teoria#([\\w-]+)`, 'g'))) {
          if (m[1] === slug) assert.ok(ancore.has(m[2]), `${percorso}: link teoria ${m[2]} assente`);
        }
        distribuzione[dati.corretta-1]++;
      }
      totali[tipo]++;
    }
  }
}
console.log(JSON.stringify({ file, formule, ...totali, distribuzioneRisposte: distribuzione }, null, 2));
