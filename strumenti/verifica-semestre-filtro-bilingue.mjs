// Controlla i materiali del Semestre Filtro con il renderer usato dal sito.
// node strumenti/verifica-semestre-filtro-bilingue.mjs biologia-semestre-filtro [capitolo]
// RENDER_DIR=/tmp/resa salva anche l'HTML completo per la verifica visiva.
import assert from 'node:assert/strict';
import { readFileSync, readdirSync, existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { resolve, join, dirname } from 'node:path';
import { pathToFileURL } from 'node:url';
import { parse } from 'yaml';
import { createMarkdownProcessor } from '@astrojs/markdown-remark';
import remarkMath from 'remark-math';
import remarkDirective from 'remark-directive';
import remarkBlocchi from '../src/plugins/remark-blocchi.mjs';
import remarkTracce from '../src/plugins/remark-tracce.mjs';
import rehypeKatex from '../src/plugins/rehype-katex-tex.mjs';
import katex from 'katex';

const [materia, capitolo] = process.argv.slice(2);
assert.ok(['biologia', 'chimica', 'fisica'].some(s => materia === `${s}-semestre-filtro`), 'Indicare una delle tre materie del Semestre Filtro');
const processore = await createMarkdownProcessor({
  remarkPlugins: [remarkMath, remarkDirective, remarkBlocchi, remarkTracce],
  rehypePlugins: [[rehypeKatex, { strict: false, output: 'html' }]],
});
const errori = [], avvisi = [], capitoli = [];
let fileResi = 0, formule = 0;
function leggi(p) {
  const t = readFileSync(p, 'utf8');
  const fm = t.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
  assert.ok(fm, `${p}: frontmatter mancante`);
  return { dati: parse(fm[1]), corpo: t.slice(fm[0].length) };
}
const parole = t => (t.replace(/<[^>]*>/g, ' ').match(/[\p{L}\p{N}]+(?:['’][\p{L}]+)?/gu) ?? []).length;
const ancore = t => [...t.matchAll(/\{#([\w-]+)/g)].map(m => m[1]).sort();
const norm = t => t.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim().normalize('NFC');
const files = p => readdirSync(p).filter(f => /^\d+\.md$/.test(f)).sort((a,b) => parseInt(a)-parseInt(b));
async function rendi(p, corpo) {
  assert.ok(!corpo.includes(':::percorso'), `${p}: percorso escluso`);
  for (const m of corpo.matchAll(/\$\$([\s\S]*?)\$\$|(?<!\$)\$(?!\$)([^\n$]+?)\$(?!\$)/g)) {
    katex.renderToString(m[1] ?? m[2], { displayMode: m[1] !== undefined, throwOnError: true, strict: false });
    formule++;
  }
  const html = (await processore.render(corpo, { fileURL: pathToFileURL(resolve(p)) })).code;
  assert.ok(!html.includes('katex-error'), `${p}: errore KaTeX`);
  assert.ok(!/(?:^|\n)\s*:{2,3}(?:definizione|teorema|dimostrazione|esempio|soluzione|grafico|struttura)\b/.test(html), `${p}: direttiva non resa`);
  for (const m of html.matchAll(/<img\b[^>]*src="([^"]+)"/g)) {
    const src = m[1];
    if (src.startsWith('/')) assert.ok(existsSync(join('public', src.split(/[?#]/)[0])), `${p}: immagine assente ${src}`);
  }
  if (process.env.RENDER_DIR) {
    const destinazione = join(process.env.RENDER_DIR, p.replace(/^src\//, '').replace(/\.md$/, '.html'));
    mkdirSync(dirname(destinazione), { recursive: true });
    writeFileSync(destinazione, html);
  }
  fileResi++;
  return html;
}

const nomi = readdirSync(join('src/content/teoria', materia)).filter(f => f.endsWith('.md')).map(f => f.slice(0,-3)).sort();
assert.equal(nomi.length, 7, 'Attese sette unità');
assert.ok(!capitolo || nomi.includes(capitolo), 'Capitolo inesistente');
for (const slug of nomi.filter(s => !capitolo || s === capitolo)) {
  const riepilogo = { capitolo: slug, lingue: {} };
  const traduzioni = new Map();
  for (const lingua of ['it', 'en']) {
    const root = lingua === 'it' ? 'src/content' : 'src/content-en';
    try {
      const teoriaPath = join(root, 'teoria', materia, `${slug}.md`);
      const teoria = leggi(teoriaPath);
      const teoriaHtml = await rendi(teoriaPath, teoria.corpo);
      const ids = new Set([...teoriaHtml.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]));
      assert.equal(typeof teoria.dati.titolo, 'string', `${teoriaPath}: titolo`);
      const sezioni = (teoria.corpo.match(/^## /gm) ?? []).length;
      assert.ok(sezioni >= 6 && sezioni <= 10, `${teoriaPath}: ${sezioni} sezioni (attese 6–10)`);
      if (lingua === 'it') traduzioni.set('ancore', ancore(teoria.corpo));
      else assert.deepEqual(ancore(teoria.corpo), traduzioni.get('ancore'), `${slug}: ancore IT/EN diverse`);
      const dati = { teoria: 1, svolti: 0, dafare: 0, domande: 0, esercizi: 0, paroleTeoria: parole(teoria.corpo), figureTeoria: (teoriaHtml.match(/<(?:svg|img)\b/g) ?? []).length, distribuzione: [0,0,0,0], spiegazioniQuiz: [], paroleSvolti: [] };
      const testiQuiz = new Set(), sequenzaCorretta = [];
      for (const [tipo, quanti] of [['svolti',10], ['dafare',14], ['domande',90]]) {
        const cartella = join(root, tipo, materia, slug);
        assert.deepEqual(files(cartella), Array.from({length:quanti},(_,i)=>`${i+1}.md`), `${cartella}: ID/quantità`);
        for (let n = 1; n <= quanti; n++) {
          const p = join(cartella, `${n}.md`);
          try {
            const { dati: fm, corpo } = leggi(p);
            const html = await rendi(p, corpo);
            for (const a of fm.teoria ?? []) assert.ok(ids.has(a), `${p}: ancora ${a} mancante`);
            for (const link of html.matchAll(/href="([^"#]*)#([\w-]+)"/g)) {
              if (link[1].includes(`/${materia}/${slug}/teoria`)) assert.ok(ids.has(link[2]), `${p}: link a ${link[2]} mancante`);
            }
            if (lingua === 'en') assert.ok(!new RegExp(`href="/${materia}/`).test(html), `${p}: link interno non inglese`);
            const key = `${tipo}/${n}`;
            if (lingua === 'it') traduzioni.set(key, fm);
            else {
              assert.deepEqual(fm.teoria ?? [], traduzioni.get(key)?.teoria ?? [], `${p}: riferimenti teoria IT/EN`);
              assert.equal(fm.gratis, traduzioni.get(key)?.gratis, `${p}: accesso IT/EN`);
              if (tipo === 'domande') assert.equal(fm.corretta, traduzioni.get(key)?.corretta, `${p}: indice corretto IT/EN`);
            }
            if (tipo === 'svolti') {
              const esercizi = [...corpo.matchAll(/^## (?:Esercizio|Exercise) (\d+)/gm)];
              assert.ok(esercizi.length >= 2 && esercizi.length <= 4, `${p}: esercizi per scheda`);
              assert.deepEqual(esercizi.map(m=>+m[1]), Array.from({length:esercizi.length},(_,i)=>i+1), `${p}: ordine esercizi`);
              assert.equal(fm.gratis, n <= 3, `${p}: anteprima`);
              const spiegazioni = [...corpo.matchAll(/<div class="spiegazione">([\s\S]*?)<\/div>/g)];
              assert.equal(spiegazioni.length, esercizi.length, `${p}: spiegazioni incomplete`);
              dati.esercizi += esercizi.length;
              dati.paroleSvolti.push(parole(corpo) / esercizi.length);
            } else if (tipo === 'dafare') {
              assert.ok(html.includes('blocco-soluzione'), `${p}: soluzione assente`);
            } else {
              assert.ok(Number.isInteger(fm.corretta) && fm.corretta >= 1 && fm.corretta <= 4, `${p}: indice corretto`);
              const i = html.search(/<h2[\s>]/);
              assert.ok(i >= 0, `${p}: titolo spiegazione assente`);
              const prima = html.slice(0,i);
              const lista = [...prima.matchAll(/<ul>([\s\S]*?)<\/ul>/g)].pop();
              assert.ok(lista, `${p}: opzioni assenti`);
              assert.ok(!/<ol\b/.test(lista[1]), `${p}: un numero con punto viene interpretato come elenco annidato; usare LaTeX`);
              const opzioni = [...lista[1].matchAll(/<li>([\s\S]*?)<\/li>/g)].map(m=>norm(m[1]));
              assert.equal(opzioni.length,4,`${p}: quattro opzioni`);
              assert.equal(new Set(opzioni).size,4,`${p}: opzioni equivalenti nel testo`);
              const testo = norm(prima.slice(0,lista.index));
              assert.ok(testo, `${p}: enunciato non autonomo`);
              assert.ok(!testiQuiz.has(testo), `${p}: enunciato duplicato`);
              testiQuiz.add(testo);
              const spiegazione = norm(html.slice(html.indexOf('</h2>',i)+5));
              assert.ok(spiegazione, `${p}: spiegazione vuota`);
              dati.spiegazioniQuiz.push(parole(spiegazione));
              dati.distribuzione[fm.corretta-1]++;
              sequenzaCorretta.push(fm.corretta);
            }
            dati[tipo]++;
          } catch(e) { errori.push(e.message); }
        }
      }
      assert.ok(Math.max(...dati.distribuzione)-Math.min(...dati.distribuzione) <= 3, `${slug}/${lingua}: risposte sbilanciate ${dati.distribuzione}`);
      for (let periodo = 1; periodo <= 8; periodo++) {
        assert.ok(!sequenzaCorretta.slice(periodo).every((v,i) => v === sequenzaCorretta[i]), `${slug}/${lingua}: posizioni corrette prevedibili, ciclo di ${periodo}`);
      }
      const mediana = a => [...a].sort((a,b)=>a-b)[Math.floor(a.length/2)];
      dati.medianaParoleQuiz = mediana(dati.spiegazioniQuiz);
      dati.medianaParoleEsercizio = Math.round(mediana(dati.paroleSvolti));
      delete dati.spiegazioniQuiz; delete dati.paroleSvolti;
      if (dati.paroleTeoria < 2200) avvisi.push(`${slug}/${lingua}: teoria breve (${dati.paroleTeoria} parole), valutare profondità`);
      if (dati.medianaParoleQuiz < 35) avvisi.push(`${slug}/${lingua}: spiegazioni quiz brevi (mediana ${dati.medianaParoleQuiz})`);
      riepilogo.lingue[lingua] = dati;
    } catch(e) { errori.push(`${slug}/${lingua}: ${e.message}`); }
  }
  capitoli.push(riepilogo);
}
console.log(JSON.stringify({ materia, fileResi, formule, capitoli, avvisi, errori }, null, 2));
if (errori.length) process.exitCode = 1;
