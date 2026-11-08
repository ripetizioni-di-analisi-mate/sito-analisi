import test,{after} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,mkdtempSync,rmSync} from 'node:fs';
import {execFileSync} from 'node:child_process';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {pathToFileURL} from 'node:url';
import {anteprimaFinanziaria,CAPITOLI_FINANZIARIA} from '../src/data/finanziaria.mjs';
const root=new URL('..',import.meta.url).pathname;
const temp=mkdtempSync(join(tmpdir(),'finanziaria-worker-')),bundle=join(temp,'worker.mjs');
execFileSync(process.execPath,[join(root,'node_modules/rolldown/bin/cli.mjs'),join(root,'worker/index.mjs'),'--file',bundle,'--format','esm','--platform','neutral'],{stdio:'pipe'});
after(()=>rmSync(temp,{recursive:true,force:true}));
const {default:worker,firmaToken}=await import(pathToFileURL(bundle));
const materia='matematica-finanziaria';
async function banco(materie=null){
 const richieste=[];
 const env={VENDITA:'1',CHIAVE_ACCESSO:'test-only-no-production',PADDLE_CLIENT_TOKEN:'test',PADDLE_PREZZO_MATEMATICA_FINANZIARIA:'test-price',
 ASSETS:{async fetch(req){const path=new URL(req.url||req).pathname;richieste.push(path);if(path==='/dati-domande/'+materia+'.json')return new Response(readFileSync(join(root,'dist',path)),{headers:{'content-type':'application/json'}});return new Response(path,{headers:{'content-type':'text/plain'}});}},
 ARCHIVIO:{idFromName:()=> 'test',get:()=>({fetch:async()=>Response.json(materie===null?null:{email:'test@example.test',nome:'Test',materie,versione:1})})}};
 const cookie=materie===null?'':'sessione='+await firmaToken(env,{e:'test@example.test',v:1,d:'test',t:Date.now()});
 const invia=(path,body)=>worker.fetch(new Request('https://ripetizionidianalisi.com'+path,{method:body?'POST':'GET',headers:{cookie,'content-type':'application/json','user-agent':'audit-bot','accept-language':'it'},...(body?{body:JSON.stringify(body)}:{})}),env,{waitUntil(){}});
 return {invia,richieste};
}
test('Matematica finanziaria ha configurazione di acquisto propria',async()=>{
 const b=await banco();assert.equal((await(await b.invia('/api/config')).json()).paddle.prezzi[materia],'test-price');
});
test('Matematica generale non concede l’accesso al corso autonomo',async()=>{
 const b=await banco(['matematica-generale']);assert.equal(await(await b.invia('/'+materia+'/regimi-e-tassi/teoria')).text(),'/vetrine/'+materia+'/regimi-e-tassi/teoria');
});
test('l’accesso al corso apre teoria, schede e soluzioni proprie',async()=>{
 const b=await banco([materia]);
 for(const c of CAPITOLI_FINANZIARIA)for(const suffix of ['teoria','esercizi-svolti/4','esercizi/1']){
  const p='/'+materia+'/'+c+'/'+suffix;assert.equal(await(await b.invia(p)).text(),p);
 }
});
test('le prime tre schede sono gratuite, le altre riservate',async()=>{
 const b=await banco();for(const n of [1,3,4,8]){
  const p='/'+materia+'/ammortamenti/esercizi-svolti/'+n;
  assert.equal(await(await b.invia(p)).text(),(n<=3?'':'/vetrine')+p);
 }
});
test('le soluzioni e i banchi delle risposte sono protetti',async()=>{
 const b=await banco();const p='/'+materia+'/obbligazioni/esercizi/1';
 assert.equal(await(await b.invia(p)).text(),'/vetrine'+p);
 assert.equal((await b.invia('/dati-domande/'+materia+'.json')).status,404);
 assert.equal((await b.invia('/dati-risposte/'+materia+'.json')).status,404);
});
test('gli stessi dieci ID delimitano l’anteprima in ogni capitolo e sessione',async()=>{
 let riferimento;
 for(const materie of [null,[],['matematica-generale']]){
  const b=await banco(materie);
  const r=await(await b.invia('/api/domande/prossima',{materia,lingua:'it',argomento:'prove-d-esame'})).json();
  assert.equal(r.totale,10);const ids=[...r.ordine].sort();
  if(riferimento)assert.deepEqual(ids,riferimento);riferimento=ids;
  for(const chapter of CAPITOLI_FINANZIARIA){
   const q=await(await b.invia('/api/domande/prossima',{materia,lingua:'it',argomento:chapter})).json();
   assert.equal(q.totale,1);assert.ok(riferimento.includes(q.id));
  }
 }
});
test('chi ha accesso può usare tutti i 320 quiz',async()=>{
 const b=await banco([materia]);const r=await(await b.invia('/api/domande/prossima',{materia,lingua:'it',argomento:'prove-d-esame'})).json();
 assert.equal(r.totale,320);
 const bank=JSON.parse(readFileSync(join(root,'dist/dati-domande/'+materia+'.json')));
 assert.equal(Object.keys(bank.argomenti).length,10);
 for(const qs of Object.values(bank.argomenti))assert.equal(qs.length,32);
});
test('il filtro anteprima conserva un solo ID per capitolo previsto',()=>{
 const bank=Object.fromEntries(CAPITOLI_FINANZIARIA.map(c=>[c,[{id:c+'/1'},{id:c+'/2'}]]));bank['altro']=[{id:'altro/1'}];
 const demo=anteprimaFinanziaria(bank);assert.equal(Object.values(demo).flat().length,10);assert.ok(!demo.altro);
});
