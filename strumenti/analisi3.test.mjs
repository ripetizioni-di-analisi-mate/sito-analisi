import test,{after} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,mkdtempSync,rmSync} from 'node:fs';
import {execFileSync} from 'node:child_process';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {pathToFileURL} from 'node:url';
import {anteprimaAnalisi3} from '../src/data/analisi3.mjs';
const root=new URL('..',import.meta.url).pathname;
const temp=mkdtempSync(join(tmpdir(),'analisi3-worker-')),bundle=join(temp,'worker.mjs');
execFileSync(process.execPath,[join(root,'node_modules/rolldown/bin/cli.mjs'),join(root,'worker/index.mjs'),'--file',bundle,'--format','esm','--platform','neutral'],{stdio:'pipe'});
after(()=>rmSync(temp,{recursive:true,force:true}));
const {default:worker,firmaToken}=await import(pathToFileURL(bundle));
const materia='analisi-3';
async function banco(materie=null){
 const richieste=[];
 const env={VENDITA:'1',CHIAVE_ACCESSO:'test-only-no-production',STRIPE_SECRET_KEY:'test',STRIPE_WEBHOOK_SECRET:'test',
 ASSETS:{async fetch(req){const path=new URL(req.url||req).pathname;richieste.push(path);if(path==='/dati-domande/analisi-3.json')return new Response(readFileSync(join(root,'dist',path)),{headers:{'content-type':'application/json'}});return new Response(path,{headers:{'content-type':'text/plain'}});}},
 ARCHIVIO:{idFromName:()=> 'test',get:()=>({fetch:async(url)=>Response.json(new URL(url).pathname==='/sessione' && materie!==null ? {email:'test@example.test',nome:'Test',materie,versione:1} : {})})}};
 const cookie=materie===null?'':'sessione='+await firmaToken(env,{e:'test@example.test',v:1,d:'test',t:Date.now()});
 const invia=(path,body)=>worker.fetch(new Request('https://ripetizionidianalisi.com'+path,{method:body?'POST':'GET',headers:{cookie,origin:'https://ripetizionidianalisi.com','content-type':'application/json','user-agent':'audit-bot','accept-language':'it'},...(body?{body:JSON.stringify(body)}:{})}),env,{waitUntil(){}});
 return {invia,richieste};
}
test('il preventivo Stripe di Analisi 3 coincide con il listino',async()=>{
 const b=await banco([]), listino=JSON.parse(readFileSync(join(root,'src/data/prezzi.json')));
 assert.deepEqual(await(await b.invia('/api/config')).json(),{stripe:true});
 const r=await b.invia('/api/acquisti/preventivo',{tipo:'materia',slug:materia});
 assert.equal(r.status,200);const q=await r.json();
 assert.equal(listino[materia],55);assert.equal(q.totale,100*listino[materia]);assert.deepEqual(q.chiavi,[materia]);
});
test('l’acquisto di Analisi 2 non sblocca Analisi 3',async()=>{const b=await banco(['analisi-2']);assert.equal(await(await b.invia('/analisi-3/funzioni-complesse/teoria')).text(),'/vetrine/analisi-3/funzioni-complesse/teoria');});
test('l’acquisto di Analisi 3 apre capitoli nuovi e condivisi',async()=>{const b=await banco([materia]);for(const slug of ['funzioni-complesse','serie-di-fourier'])assert.equal(await(await b.invia('/analisi-3/'+slug+'/teoria')).text(),'/analisi-3/'+slug+'/teoria');});
test('le prime tre schede sono anteprime e la quarta è riservata',async()=>{const b=await banco();for(const n of [1,3,4])assert.equal(await(await b.invia('/analisi-3/funzioni-complesse/esercizi-svolti/'+n)).text(),(n<=3?'':'/vetrine')+'/analisi-3/funzioni-complesse/esercizi-svolti/'+n);});
test('il banco delle risposte non è pubblico',async()=>{const b=await banco();assert.equal((await b.invia('/dati-domande/analisi-3.json')).status,404);});
test('dieci ID fissi in tutte le sessioni senza acquisto',async()=>{let riferimento;for(const materie of [null,[],['analisi-2']]){const b=await banco(materie);const r=await(await b.invia('/api/domande/prossima',{materia,lingua:'it',argomento:'prove-d-esame'})).json();assert.equal(r.totale,10);const ids=[...r.ordine].sort();if(riferimento)assert.deepEqual(ids,riferimento);riferimento=ids;}});
test('tutti i capitoli del corso hanno quiz per chi acquista',async()=>{const b=await banco([materia]);const r=await(await b.invia('/api/domande/prossima',{materia,lingua:'it',argomento:'prove-d-esame'})).json();assert.ok(r.totale>112);const bank=JSON.parse(readFileSync(join(root,'dist/dati-domande/analisi-3.json')));assert.equal(Object.keys(bank.argomenti).length,11);});
test('l’anteprima limita anche banchi con ordine differente',()=>{const a={b:[{n:3,id:'b/3'},{n:1,id:'b/1'}],a:Array.from({length:30},(_,i)=>({n:i+1,id:'a/'+(i+1)}))};assert.equal(Object.values(anteprimaAnalisi3(a)).flat().length,10);assert.deepEqual(anteprimaAnalisi3(a),anteprimaAnalisi3({a:a.a,b:a.b}));});
test('i capitoli condivisi conservano contenuti e URL propri',()=>{for(const a of ['successioni-e-serie-di-funzioni','serie-di-potenze','serie-di-fourier']){const source=readFileSync(join(root,'src/content/teoria/analisi-2',a+'.md'),'utf8');const target=readFileSync(join(root,'src/content/teoria/analisi-3',a+'.md'),'utf8');assert.equal(target,source.replace(/\/analisi-2\/(successioni-e-serie-di-funzioni|serie-di-potenze|serie-di-fourier)(?=\/)/g,'/analisi-3/$1'));}});
test('i principali integrali del banco coincidono con quadrature indipendenti',()=>{
 function simpson(f,a,b,n=10000){let s=f(a)+f(b);for(let i=1;i<n;i++)s+=(i%2?4:2)*f(a+(b-a)*i/n);return s*(b-a)/(3*n);}
 const vicino=(x,y,tol=1e-7)=>assert.ok(Math.abs(x-y)<tol,JSON.stringify({x,y}));
 for(let k=1;k<=6;k++){
  vicino(simpson(x=>x**(2*k),0,1),1/(2*k+1));
  vicino(simpson(x=>(x**k-1/(k+1))**2,0,1),1/(2*k+1)-1/(k+1)**2);
  vicino(simpson(x=>x*Math.exp(-k*x),0,40),1/(k*k),1e-6);
  vicino(simpson(x=>Math.exp(-k*Math.abs(x))*Math.cos(.7*x),-40,40,40000),2*k/(k*k+.49),1e-7);
  vicino(simpson(x=>Math.exp(-k*x*x),-10,10),Math.sqrt(Math.PI/k));
  const h=1e-5,x=.37,t=.23;
  const heat=(s,y)=>Math.exp(-k*k*s)*Math.sin(k*y);
  const dt=(heat(t+h,x)-heat(t-h,x))/(2*h),dxx=(heat(t,x+h)-2*heat(t,x)+heat(t,x-h))/(h*h);
  vicino(dt,dxx,5e-5);
 }
});
