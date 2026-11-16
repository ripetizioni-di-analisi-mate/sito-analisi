import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import katex from 'katex';
import { TOLC, provaTolc, demoTolc, esitoTiec, TIEC_SEZIONI } from '../src/data/tolc.mjs';
import { gestisciTolcI } from '../worker/tolc-i.mjs';
import { TIEC_IMPEGNATIVE, impegnativaTiec } from '../src/data/tiec-impegnative.mjs';

// Banca dei quesiti del TIEC (Cattolica, Economia): 8 capitoli da 90 domande a quattro risposte.
const capitoli = TIEC_SEZIONI.flatMap((s) => s.argomenti);
const args = {};
for (const a of capitoli) {
  const cartella = `src/content/domande/tiec/${a}`;
  args[a] = (existsSync(cartella) ? readdirSync(cartella) : []).filter((f) => /^\d+\.md$/.test(f)).sort((x, y) => parseInt(x) - parseInt(y)).map((f) => {
    const txt = readFileSync(`${cartella}/${f}`, 'utf8');
    const parti = txt.split('\n## Spiegazione\n');
    const scelte = [...parti[0].matchAll(/^- (.+)$/gm)].map((m) => m[1]);
    const corretta = Number(txt.match(/^corretta: (\d)$/m)?.[1]);
    assert.equal(scelte.length, 4, `${a}/${f}: quattro risposte`);
    assert.equal(new Set(scelte).size, 4, `${a}/${f}: risposte distinte`);
    assert(corretta >= 1 && corretta <= 4, `${a}/${f}: corretta`);
    assert(parti[1]?.trim().length > 60, `${a}/${f}: spiegazione`);
    const testo = parti[0].replace(/^---[\s\S]*?---/, '').split(/^- /m)[0].trim();
    assert(testo.length > 10, `${a}/${f}: testo della domanda`);
    for (const m of txt.matchAll(/\$([^$\n]+)\$/g)) katex.renderToString(m[1], { throwOnError: true, strict: false });
    return { id: `${a}/${parseInt(f)}`, corretta, scelte, testo: parti[0], spiegazione: parti[1] };
  });
}

test('TIEC: 8 capitoli con teoria, 8 schede, 14 quiz da fare e 90 domande a quattro risposte', () => {
  assert.equal(capitoli.length, 8);
  for (const a of capitoli) {
    assert.deepEqual(args[a].map((q) => q.id), Array.from({ length: 90 }, (_, i) => `${a}/${i + 1}`), a);
    const pos = [1, 2, 3, 4].map((p) => args[a].filter((q) => q.corretta === p).length);
    assert(Math.min(...pos) >= 18 && Math.max(...pos) <= 27, `${a}: posizioni ${pos}`);
    const t = readFileSync(`src/content/teoria/tiec/${a}.md`, 'utf8');
    assert(t.match(/^## /gm).length >= 6, `${a}: sezioni`);
    assert(!/:::percorso/.test(t), `${a}: niente percorso`);
    assert.equal(readdirSync(`src/content/svolti/tiec/${a}`).filter((f) => /^\d+\.md$/.test(f)).length, 8, `${a}: schede`);
    const dafare = readdirSync(`src/content/dafare/tiec/${a}`).filter((f) => /^\d+\.md$/.test(f));
    assert.equal(dafare.length, 14, `${a}: tracce`);
    for (const f of dafare) assert.match(readFileSync(`src/content/dafare/tiec/${a}/${f}`, 'utf8'), /:::soluzione\s*\nRisposta [A-D]:/, `${a}/${f}`);
  }
});

test('TIEC: prova da 48 quesiti, 12 per area, tempo unico di 60 minuti', () => {
  assert.equal(TOLC.tiec.quesiti, 48); assert.equal(TOLC.tiec.minuti, 60); assert(TOLC.tiec.tempoUnico);
  for (let i = 0; i < 30; i++) {
    const p = provaTolc('tiec', args, false);
    assert.deepEqual(p.map((s) => s.slug), ['logica', 'matematica', 'comprensione', 'inglese']);
    assert.deepEqual(p.map((s) => s.domande.length), [12, 12, 12, 12]);
    assert.equal(new Set(p.flatMap((s) => s.domande.map((q) => q.id))).size, 48);
    const mat = p[1].domande.map((q) => q.id.split('/')[0]);
    for (const a of TIEC_SEZIONI[1].argomenti) assert(mat.filter((x) => x === a).length >= 2, `matematica: ${a}`);
  }
});

test('TIEC: soglie della Cattolica e anteprima di dieci quesiti', () => {
  const e = esitoTiec([{ slug: 'logica', corrette: 6, massimo: 12 }, { slug: 'matematica', corrette: 6, massimo: 12 }, { slug: 'comprensione', corrette: 5, massimo: 12 }, { slug: 'inglese', corrette: 12, massimo: 12 }]);
  assert.equal(e.idoneo, false); assert.equal(e.corrette, 29);
  assert.deepEqual(e.aree.map((a) => a.superata), [true, true, false, true]);
  assert.equal(e.aree[1].vpiSuperata, false);
  assert.equal(esitoTiec([{ slug: 'matematica', corrette: 7, massimo: 12 }]).aree[0].vpiSuperata, true);
  assert.equal(esitoTiec([{ slug: 'matematica', corrette: 4, massimo: 12 }]).aree[0].superata, true);
  assert.equal(Object.values(demoTolc('tiec', args)).flat().length, 10);
});

let firmato; let utente = { email: 'prova@esempio.invalid', materie: ['tiec'] };
const h = { json: (d, s = 200) => Response.json(d, { status: s }), utenteCollegato: async () => utente, domandeDi: async () => ({ argomenti: args }), firmaToken: async (_e, t) => { firmato = t; return 'firmato'; }, leggiToken: async (_e, t) => (t === 'firmato' ? firmato : null) };
const req = (path, b = {}) => new Request(`https://esempio.invalid${path}`, { method: 'POST', body: JSON.stringify(b) });

test('API TIEC: correzione per area, accesso riservato a chi ha il TIEC', async () => {
  const inizio = '/api/tiec/inizia', fine = '/api/tiec/correggi';
  const r = await gestisciTolcI(req(inizio), {}, inizio, h); const d = await r.json();
  assert.equal(r.status, 200); assert.equal(firmato.tipo, 'tiec');
  assert(d.sezioni.every((s) => s.domande.every((q) => !('corretta' in q) && !('spiegazione' in q))));
  const giuste = d.sezioni.map((s) => s.domande.map((q) => args[q.id.split('/')[0]].find((x) => x.id === q.id).corretta - 1));
  const e = await (await gestisciTolcI(req(fine, { token: 'firmato', risposte: giuste }), {}, fine, h)).json();
  assert.equal(e.tiec.corrette, 48); assert.equal(e.tiec.idoneo, true); assert(e.tiec.aree.find((a) => a.slug === 'matematica').vpiSuperata);
  const vuote = d.sezioni.map((s) => s.domande.map(() => null));
  const v = await (await gestisciTolcI(req(fine, { token: 'firmato', risposte: vuote }), {}, fine, h)).json();
  assert.equal(v.tiec.idoneo, false); assert.equal(v.tiec.corrette, 0);
  utente.materie = ['tolc-i']; assert.equal((await gestisciTolcI(req(inizio), {}, inizio, h)).status, 403); utente.materie = ['tiec'];
  firmato.tipo = 'tolc-i'; assert.equal((await gestisciTolcI(req(fine, { token: 'firmato', risposte: giuste }), {}, fine, h)).status, 400);
});

test('TIEC: nella simulazione al massimo due domande impegnative per area di logica e matematica', () => {
  for (const [a, ns] of Object.entries(TIEC_IMPEGNATIVE)) {
    assert(capitoli.includes(a), a);
    for (const n of ns) assert(n >= 1 && n <= 90, `${a}/${n}`);
  }
  let viste = 0;
  for (let i = 0; i < 200; i++) {
    const p = provaTolc('tiec', args, false);
    for (const s of p.slice(0, 2)) {
      const k = s.domande.filter((q) => impegnativaTiec(q.id)).length;
      assert(k <= 2, `${s.slug}: ${k} impegnative`); viste += k;
    }
  }
  assert(viste > 0, 'le domande impegnative compaiono ancora');
});
