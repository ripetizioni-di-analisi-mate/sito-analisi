import assert from 'node:assert/strict';
import { after, test } from 'node:test';
import { DatabaseSync } from 'node:sqlite';
import { execFileSync } from 'node:child_process';
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const tmp = mkdtempSync(join(tmpdir(),'stripe-postvendita-'));
after(()=>rmSync(tmp,{recursive:true,force:true}));
const bundle=join(tmp,'postvendita.mjs');
execFileSync(process.execPath,[join(root,'node_modules/rolldown/bin/cli.mjs'),join(root,'worker/stripe-postvendita.mjs'),'--file',bundle,'--format','esm','--platform','node','--logLevel','silent']);
const { creaTabellePostvendita, archivioPostvendita, gestisciPostvendita, webhookPostvendita }=await import(pathToFileURL(bundle));

function prepara(t) {
  const db=new DatabaseSync(':memory:'); t.after(()=>db.close());
  const sql={exec:(q,...a)=>a.length?db.prepare(q).run(...a):db.exec(q)};
  const o={sql,riga:(q,...a)=>db.prepare(q).get(...a)??null,righe:(q,...a)=>db.prepare(q).all(...a)};
  sql.exec('CREATE TABLE ordini_stripe(id TEXT PRIMARY KEY,email TEXT,in_centesimi INTEGER,ordine TEXT,fatturazione TEXT,pagato TEXT,pagamento TEXT,stato TEXT);CREATE TABLE abilitazioni(email TEXT, materia TEXT, origine TEXT);');
  creaTabellePostvendita(sql);
  function ordine(id,chiavi) {
    sql.exec('INSERT INTO ordini_stripe VALUES(?,?,?,?,?,?,?,?)',id,'u@example.test',4900,JSON.stringify({titolo:'Analisi',chiavi,abilitazioni:chiavi}),JSON.stringify({nome:'Persona',cognome:'Esempio',indirizzo:'Via di prova',cf:'CF-RISERVATO'}),new Date().toISOString(),'pi_'+id,'pagato');
  }
  ordine('uno',['uno','condivisa','manuale','paddle']);ordine('due',['condivisa']);
  for(const [k,ori] of [['uno','stripe:uno'],['condivisa','stripe:uno'],['manuale','manuale'],['paddle','paddle']])sql.exec('INSERT INTO abilitazioni VALUES(?,?,?)','u@example.test',k,ori);
  const h={aDO:async(_,p,c={})=>archivioPostvendita(o,p,c),utenteCollegato:async(_,req)=>({email:req.headers.get('x-utente')||'u@example.test'}),
    leggiCookie:req=>req.headers.get('x-admin'),leggiToken:async(_,token)=>token==='valido'?{admin:true,t:Date.now()}:null};
  const env={ADMIN_PASSWORD:'test',CHIAVE_ACCESSO:'test',STRIPE_SECRET_KEY:'test',RESEND_API_KEY:'test'};
  const origin='https://sito.example';
  const call=(path,body,headers={})=>gestisciPostvendita(new Request(origin+path,{method:body?'POST':'GET',body,headers:{origin,...headers}}),env,path.split('?')[0],h);
  return {o,h,env,call};
}

test('recesso autenticato, conferma consapevole e ricevuta senza duplicati; nessun dato fiscale pubblico',async t=>{
  const {h,env,call}=prepara(t), email=[];t.mock.method(globalThis,'fetch',async(url,opts)=>{
    assert.equal(url,'https://api.resend.com/emails');email.push(JSON.parse(opts.body));return Response.json({id:'test'});
  });
  const lista=await (await call('/api/stripe/postvendita/ordini')).text();assert.match(lista,/Analisi/);assert.doesNotMatch(lista,/RISERVATO|Via di prova|pi_uno/);
  const p='/api/stripe/postvendita/recesso', dati={id:'uno',nome:'Persona Esempio',recapito:'dest@example.test',lingua:'it',conferma:true};
  const req=(v,extra={})=>call(p,JSON.stringify(v),{'content-type':'application/json',...extra});
  assert.equal((await req(dati,{origin:'https://esterno.example'})).status,403);
  assert.equal((await req(dati,{'x-utente':'altro@example.test'})).status,404);
  assert.equal((await req({...dati,conferma:false})).status,400);assert.equal(email.length,0);
  const prima=await (await req(dati)).json();assert.ok(prima.inviato);assert.ok(email[0].text.includes('comunico il recesso dal contratto per Analisi'));assert.equal(email[0].to[0],'dest@example.test');
  const seconda=await (await req({...dati,nome:'Altro'})).json();assert.deepEqual(prima,seconda);assert.equal(email.length,2);
  const admin=await call('/admin/vendite-stripe',null,{'x-admin':'valido'});assert.equal(admin.headers.get('cache-control'),'private, no-store');assert.match(await admin.text(),/Recesso ricevuto.*Persona Esempio.*dest@example.test/s);
  assert.equal((await call('/admin/vendite-stripe')).status,302);
  assert.ok((await h.aDO(env,'/postvendita-coda')).email.length===0);
});

test('rimborso totale idempotente, parziale o pendente conserva i diritti, provenienze sovrapposte protette',async t=>{
  const {o,h,env,call}=prepara(t);let rimborsi=[],mutazioni=0;
  t.mock.method(globalThis,'fetch',async(url,opts)=>{
    if(opts.method==='GET')return Response.json({data:rimborsi,has_more:false});
    assert.equal(url,'https://api.stripe.com/v1/refunds');assert.equal(opts.body.get('payment_intent'),'pi_uno');assert.equal(opts.body.get('amount'),'3900');
    assert.ok(opts.headers['idempotency-key']);mutazioni++;rimborsi.push({id:'re_residuo',status:'succeeded',amount:3900,currency:'eur',payment_intent:'pi_uno'});return Response.json(rimborsi.at(-1));
  });
  const step=()=>webhookPostvendita(env,{type:'charge.refunded',data:{object:{payment_intent:'pi_uno'}}},{aDO:h.aDO});
  rimborsi=[{id:'re_primo',status:'pending',amount:1000,currency:'eur',payment_intent:'pi_uno'}];await step();
  const rimborso=()=>call('/admin/vendite-stripe/rimborsa',new URLSearchParams({id:'uno',conferma:'si'}),{'x-admin':'valido'});
  assert.equal((await rimborso()).status,303);assert.equal(mutazioni,0);assert.equal(o.righe('SELECT * FROM abilitazioni').length,4);
  rimborsi[0].status='succeeded';await step();assert.equal(o.righe('SELECT * FROM abilitazioni').length,4);
  assert.equal((await rimborso()).status,303);assert.equal(mutazioni,1);
  await rimborso();await step();assert.equal(mutazioni,1);
  assert.deepEqual(o.righe('SELECT materia,origine FROM abilitazioni ORDER BY materia').map(x=>[x.materia,x.origine]),[['condivisa','stripe:due'],['manuale','manuale'],['paddle','paddle']]);
  assert.equal((await h.aDO(env,'/postvendita-vendita',{id:'uno'})).rimborsati,4900);
});
