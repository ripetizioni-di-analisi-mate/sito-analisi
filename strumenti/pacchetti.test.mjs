import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { DatabaseSync } from 'node:sqlite';
import { PACCHETTI_MATERIE, PACCHETTI_VIDEO, riepilogoMaterie, riepilogoVideo, videoSovrapposti } from '../src/data/pacchetti.mjs';
import { creaTabellePacchetti, archivioPacchetti, verificaOrdinePagato, completaPacchetto } from '../worker/pacchetti.mjs';

const listino = JSON.parse(readFileSync(new URL('../src/data/prezzi.json', import.meta.url)));
const materie = Object.entries(listino).map(([slug, prezzo]) => ({ slug, prezzo, attiva: true }));
const video = [
  { slug: 'analisi-1-e-2', prezzo: 499, lezioni: 51, sblocca: ['analisi-1','analisi-2','precorso'], pacchettoDi: ['analisi-1','analisi-2'] },
  { slug: 'analisi-1', prezzo: 360, lezioni: 35, sblocca: ['analisi-1','precorso'] },
  { slug: 'analisi-2', prezzo: 192, lezioni: 16, sblocca: ['analisi-2'] },
  { slug: 'matematica-generale', prezzo: 456, lezioni: 38, sblocca: ['matematica-generale'] },
  { slug: 'algebra', prezzo: 96, lezioni: 8, sblocca: ['algebra-lineare'] },
];
const did = 'dsc_' + 'a'.repeat(26);
function banco(t) {
  const db = new DatabaseSync(':memory:'); t.after(() => db.close());
  const sql = { exec(q, ...p) {
    if (!p.length) { db.exec(q); return []; }
    if (/^\s*SELECT/i.test(q)) return db.prepare(q).all(...p);
    db.prepare(q).run(...p); return [];
  } };
  creaTabellePacchetti(sql);
  const o = { sql, riga: (q, ...p) => db.prepare(q).get(...p) || null };
  const acquisti = new Map(), abilitazioni = new Set();
  const io = { email: 'studente@example.test' };
  const h = {
    conMaterieDeiVideo: (keys) => [...new Set(keys.flatMap((k) => [k, ...(video.find((v) => `video-${v.slug}` === k)?.sblocca || [])]))],
    aDO: async (_env, p, c) => {
      if (p.startsWith('/pac-')) return archivioPacchetti(o, p, c);
      if (p === '/registra-acquisto') { const doppio = acquisti.has(c.transazione); if (!doppio) acquisti.set(c.transazione, c); return { ok: !doppio, doppio }; }
      if (p === '/abilita') { c.materie.forEach((k) => abilitazioni.add(k)); return { ok: true }; }
      throw new Error(p);
    },
  };
  return { db, o, h, io, acquisti, abilitazioni };
}

test('i pacchetti rispettano i prezzi concordati e gli scaglioni 15/20/25%', () => {
  assert.deepEqual(PACCHETTI_MATERIE.map((p) => riepilogoMaterie(p.materie, materie).totale), [8840,8840,10960,4930,4930,15600,11760]);
  assert.throws(() => riepilogoMaterie(['analisi-1','analisi-1'], materie));
  assert.throws(() => riepilogoMaterie(['analisi-1'], materie));
  assert.throws(() => riepilogoMaterie(['analisi-1','gratis'], [...materie, { slug:'gratis', prezzo:0, attiva:true }]));
  assert.throws(() => riepilogoMaterie(['analisi-1','futuro'], [...materie, { slug:'futuro', prezzo:49, attiva:false }]));
});
test('i quattro pacchetti video comprendono il materiale senza addebitarlo', () => {
  assert.deepEqual(PACCHETTI_VIDEO.map((p) => riepilogoVideo(p.id, video).totale), [49900,39900,49900,54900]);
  const q = riepilogoVideo('video-analisi-algebra', video);
  assert.equal(q.separato, 59500); assert.equal(q.sconto, 4600); assert.equal(q.lezioni,59);
  assert.deepEqual(new Set(q.inclusi), new Set(['precorso','analisi-1','analisi-2','algebra-lineare']));
  assert.equal(riepilogoVideo('video-analisi', video).sconto, 0);
});
test('un videocorso già incluso in un acquisto precedente non viene rivenduto', () => {
  assert.equal(videoSovrapposti(['video-analisi-2'], ['video-analisi-1-e-2'], video), true);
  assert.equal(videoSovrapposti(['video-analisi-1-e-2'], ['video-analisi-1'], video), true);
  assert.equal(videoSovrapposti(['video-matematica-generale','video-algebra'], ['algebra-lineare'], video), false);
});
test('il webhook respinge carrelli sostituiti, ridotti, duplicati o non pagati', () => {
  const q={prezzi:['pri_A','pri_B'],sconto_id:did};
  const d={id:'txn_pagato',status:'completed',discount_id:did,items:[{price:{id:'pri_A'},quantity:1},{price:{id:'pri_B'},quantity:1}]};
  assert.equal(verificaOrdinePagato(d,q),true);
  for(const falso of [ {...d,status:'ready'}, {...d,items:d.items.slice(0,1)}, {...d,items:[d.items[0],d.items[0]]}, {...d,items:[d.items[0],{price:{id:'pri_C'},quantity:1}]}, {...d,discount_id:'dsc_altro'}, {...d,items:[{price:{id:'pri_A'},quantity:0},d.items[1]]}, {...d,items:[{price:{id:'pri_A'},quantity:2},d.items[1]]} ]) assert.equal(verificaOrdinePagato(falso,q),false);
});
test('un pagamento sblocca tutto una volta sola e registra solo il totale reale', async (t) => {
  const b=banco(t);
  const id='ordine_legacy';
  const ordine = { ...riepilogoVideo('video-analisi-algebra',video), prezzi:['pri_analisi','pri_algebra'] };
  b.db.prepare('INSERT INTO pacchetti_ordini (id,email,creato,sconto,dati) VALUES (?,?,?,?,?)')
    .run(id,b.io.email,Date.now(),did,JSON.stringify(ordine));
  const q=archivioPacchetti(b.o,'/pac-leggi',{id});
  const pagato={id:'txn_test',status:'completed',discount_id:did,currency_code:'EUR',items:ordine.prezzi.map((priceId)=>({price:{id:priceId},quantity:1})),details:{totals:{total:'54900'}},custom_data:{email:'falso@example.test'}};
  assert.equal(await completaPacchetto(pagato,q,{},b.h),true);
  assert.equal(await completaPacchetto(pagato,q,{},b.h),true);
  assert.equal(b.acquisti.size,2);
  assert.equal([...b.acquisti.values()].reduce((s,x)=>s+Math.round(x.importo*100),0),54900);
  assert.ok([...b.acquisti.values()].every((a)=>a.email===b.io.email));
  assert.deepEqual(b.abilitazioni,new Set(['video-analisi-1-e-2','video-algebra','precorso','analisi-1','analisi-2','algebra-lineare']));
  assert.equal(archivioPacchetti(b.o,'/pac-leggi',{id}).pagato,'txn_test');
});
