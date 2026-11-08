import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { DatabaseSync } from 'node:sqlite';
import { PACCHETTI_MATERIE, PACCHETTI_VIDEO, riepilogoMaterie, riepilogoVideo, videoSovrapposti } from '../src/data/pacchetti.mjs';
import { creaTabellePacchetti, archivioPacchetti, gestisciPacchetti, verificaOrdinePagato, completaPacchetto } from '../worker/pacchetti.mjs';

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
function banco(t, posseduti = []) {
  const db = new DatabaseSync(':memory:'); t.after(() => db.close());
  const sql = { exec(q, ...p) {
    if (!p.length) { db.exec(q); return []; }
    if (/^\s*SELECT/i.test(q)) return db.prepare(q).all(...p);
    db.prepare(q).run(...p); return [];
  } };
  creaTabellePacchetti(sql);
  const o = { sql, riga: (q, ...p) => db.prepare(q).get(...p) || null };
  const acquisti = new Map(), abilitazioni = new Set(), chiamate = [];
  const io = { email: 'studente@example.test', materie: posseduti };
  const h = {
    MATERIE: materie, VIDEOCORSI: video,
    utenteCollegato: async () => io,
    json: (d, status = 200, headers = {}) => Response.json(d, { status, headers }),
    conMaterieDeiVideo: (keys) => [...new Set(keys.flatMap((k) => [k, ...(video.find((v) => `video-${v.slug}` === k)?.sblocca || [])]))],
    aDO: async (_env, p, c) => {
      if (p.startsWith('/pac-')) return archivioPacchetti(o, p, c);
      if (p === '/registra-acquisto') { const doppio = acquisti.has(c.transazione); if (!doppio) acquisti.set(c.transazione, c); return { ok: !doppio, doppio }; }
      if (p === '/abilita') { c.materie.forEach((k) => abilitazioni.add(k)); return { ok: true }; }
      throw new Error(p);
    },
  };
  const env = { PADDLE_API_KEY: 'test-only', PADDLE_CLIENT_TOKEN: 'test-only' };
  [...materie.map((m) => m.slug), ...video.map((v) => `video-${v.slug}`)].forEach((k, i) => { env[`PADDLE_PREZZO_${k.toUpperCase().replace(/-/g,'_')}`] = 'pri_' + String(i + 1).padStart(26, '0'); });
  t.mock.method(globalThis, 'fetch', async (url, opts) => { chiamate.push({ url, body: JSON.parse(opts.body) }); return Response.json({ data: { id: did } }); });
  const richiesta = (body, origin = 'https://ripetizionidianalisi.com') => new Request('https://ripetizionidianalisi.com/api/pacchetti/checkout', { method: 'POST', headers: { origin, 'content-type':'application/json' }, body: JSON.stringify(body) });
  return { db, o, h, env, io, richiesta, acquisti, abilitazioni, chiamate };
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
test('il pagamento richiede un account e respinge le richieste da altri siti', async (t) => {
  const b = banco(t); const body = { tipo:'materie', materie:['analisi-1','analisi-2'] };
  assert.equal((await gestisciPacchetti(b.richiesta(body,'https://altro.test'), b.env,b.h)).status,403);
  b.h.utenteCollegato = async () => null;
  assert.equal((await gestisciPacchetti(b.richiesta(body),b.env,b.h)).status,401);
  assert.equal(b.chiamate.length,0);
});
test('il server ignora importi falsificati e crea un solo sconto personale per tutti gli articoli', async (t) => {
  const b = banco(t);
  const r = await gestisciPacchetti(b.richiesta({ tipo:'materie', materie:['analisi-1','analisi-2'], totale:1, percentuale:99 }),b.env,b.h);
  assert.equal(r.status,200); const d=await r.json();
  assert.equal(d.totale,8840); assert.equal(d.items.length,2);
  assert.equal(b.chiamate[0].body.type,'percentage'); assert.equal(b.chiamate[0].body.amount,'15');
  assert.equal(b.chiamate[0].body.usage_limit,1);
  assert.deepEqual(b.chiamate[0].body.restrict_to,d.items.map((i)=>i.priceId));
  assert.ok(Date.parse(b.chiamate[0].body.expires_at)>Date.now());
  assert.equal(archivioPacchetti(b.o,'/pac-leggi',{ sconto:did }).email,b.io.email);
});
test('i pacchetti video applicano solo la differenza corretta rispetto ai corsi scelti', async (t) => {
  const b=banco(t);
  const d=await (await gestisciPacchetti(b.richiesta({tipo:'video',pacchetto:'video-analisi-algebra'}),b.env,b.h)).json();
  assert.equal(d.totale,54900); assert.equal(b.chiamate[0].body.amount,'4600');
  assert.equal(b.chiamate[0].body.currency_code,'EUR');
});
test('il pacchetto Analisi già esistente usa il prezzo da 499 euro senza un secondo sconto', async (t) => {
  const b=banco(t);
  const d=await (await gestisciPacchetti(b.richiesta({tipo:'video',pacchetto:'video-analisi'}),b.env,b.h)).json();
  assert.equal(d.totale,49900); assert.equal(d.discountId,null); assert.equal(b.chiamate.length,0);
});
test('materie già possedute, scelte duplicate e prezzi non configurati bloccano il pagamento', async (t) => {
  const b=banco(t,['analisi-1']);
  assert.equal((await gestisciPacchetti(b.richiesta({tipo:'materie',materie:['analisi-1','analisi-2']}),b.env,b.h)).status,409);
  assert.equal((await gestisciPacchetti(b.richiesta({tipo:'materie',materie:['fisica-1','fisica-1']}),b.env,b.h)).status,400);
  delete b.env.PADDLE_PREZZO_FISICA_2;
  assert.equal((await gestisciPacchetti(b.richiesta({tipo:'materie',materie:['fisica-1','fisica-2']}),b.env,b.h)).status,503);
  assert.equal(b.chiamate.length,0);
});
test('la quota è persistente e separata per account; il payload è limitato', async (t) => {
  const b=banco(t);
  for(let i=0;i<20;i++) assert.equal(archivioPacchetti(b.o,'/pac-nuovo',{id:`test-${i}`,email:b.io.email,dati:{}}).ok,true);
  const req=b.richiesta({tipo:'materie',materie:['fisica-1','fisica-2']});
  assert.equal((await gestisciPacchetti(req,b.env,b.h)).status,429);
  assert.equal(archivioPacchetti(b.o,'/pac-nuovo',{id:'altro',email:'altro@example.test',dati:{}}).ok,true);
  assert.equal((await gestisciPacchetti(b.richiesta({grande:'x'.repeat(5000)}),b.env,b.h)).status,413);
  assert.equal(b.chiamate.length,0);
});
test('un errore di Paddle non restituisce un checkout apparentemente valido', async (t) => {
  const b=banco(t); t.mock.method(console,'error',()=>{});
  t.mock.method(globalThis,'fetch',async()=>Response.json({error:{code:'not_authorized'}},{status:403}));
  const r=await gestisciPacchetti(b.richiesta({tipo:'materie',materie:['fisica-1','fisica-2']}),b.env,b.h);
  assert.equal(r.status,502); assert.equal((await r.json()).items,undefined);
});
test('il webhook respinge carrelli sostituiti, ridotti, duplicati o non pagati', () => {
  const q={prezzi:['pri_A','pri_B'],sconto_id:did};
  const d={id:'txn_pagato',status:'completed',discount_id:did,items:[{price:{id:'pri_A'},quantity:1},{price:{id:'pri_B'},quantity:1}]};
  assert.equal(verificaOrdinePagato(d,q),true);
  for(const falso of [ {...d,status:'ready'}, {...d,items:d.items.slice(0,1)}, {...d,items:[d.items[0],d.items[0]]}, {...d,items:[d.items[0],{price:{id:'pri_C'},quantity:1}]}, {...d,discount_id:'dsc_altro'}, {...d,items:[{price:{id:'pri_A'},quantity:0},d.items[1]]} ]) assert.equal(verificaOrdinePagato(falso,q),false);
});
test('un pagamento sblocca tutto una volta sola e registra solo il totale reale', async (t) => {
  const b=banco(t);
  const d=await (await gestisciPacchetti(b.richiesta({tipo:'video',pacchetto:'video-analisi-algebra'}),b.env,b.h)).json();
  const q=archivioPacchetti(b.o,'/pac-leggi',{id:d.id});
  const pagato={id:'txn_test',status:'completed',discount_id:d.discountId,currency_code:'EUR',items:d.items.map((i)=>({price:{id:i.priceId},quantity:1})),details:{totals:{total:'54900'}},custom_data:{email:'falso@example.test'}};
  assert.equal(await completaPacchetto(pagato,q,b.env,b.h),true);
  assert.equal(await completaPacchetto(pagato,q,b.env,b.h),true);
  assert.equal(b.acquisti.size,2);
  assert.equal([...b.acquisti.values()].reduce((s,x)=>s+Math.round(x.importo*100),0),54900);
  assert.ok([...b.acquisti.values()].every((a)=>a.email===b.io.email));
  assert.deepEqual(b.abilitazioni,new Set(['video-analisi-1-e-2','video-algebra','precorso','analisi-1','analisi-2','algebra-lineare']));
  assert.equal(archivioPacchetti(b.o,'/pac-leggi',{id:d.id}).pagato,'txn_test');
});
