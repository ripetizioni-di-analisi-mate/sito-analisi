import assert from 'node:assert/strict';
import test from 'node:test';
import { createMarkdownProcessor } from '@astrojs/markdown-remark';
import remarkDirective from 'remark-directive';
import remarkBlocchi from '../src/plugins/remark-blocchi.mjs';

const processore = await createMarkdownProcessor({ remarkPlugins: [remarkDirective, remarkBlocchi] });

async function rendi(testo, cartella) {
  const fileURL = new URL(`file:///src/${cartella}/domande/logica-concorsi/prova/1.md`);
  return (await processore.render(testo, { fileURL })).code;
}

test('i minuti restano leggibili nel testo e nelle risposte a scelta multipla', async () => {
  const testo = 'Dalle 8:30 alle 13:05.\n\n- 10:00\n- 10\\:20';
  const html = await rendi(testo, 'content');
  assert.match(html, /Dalle 8:30 alle 13:05\./);
  assert.match(html, /<li>10:00<\/li>/);
  assert.match(html, /<li>10:20<\/li>/);
});

test('le etichette di figure e insiemi seguono la lingua del contenuto', async () => {
  const disegno = '::figura{tipo="opzione" celle="lettera:R"}';
  const insieme = '::venn{tipo="incluso" nomi="alberi,abeti"}';
  const it = await rendi(disegno + '\n\n' + insieme, 'content');
  const en = await rendi(disegno + '\n\n' + insieme.replace('}', ' etichetteNomi="trees,firs"}'), 'content-en');
  assert.match(it, /aria-label="Figura"/);
  assert.match(it, /aria-label="Diagramma di Venn"/);
  assert.match(it, />abeti<\/text>/);
  assert.match(en, /aria-label="Figure"/);
  assert.match(en, /aria-label="Venn diagram"/);
  assert.match(en, />firs<\/text>/);
});
