import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readdirSync, readFileSync } from 'node:fs';
import { TOLC_I_SEZIONI, creaProvaTolc, correggiSezioneTolc, anteprimaTolc } from '../src/data/tolc-i.mjs';
import { gestisciTolcI } from '../worker/tolc-i.mjs';
import katex from 'katex';
const argomenti = {};
for (const a of readdirSync('src/content/domande/tolc-i')) {
  argomenti[a] = readdirSync(`src/content/domande/tolc-i/${a}`).sort((a,b)=>parseInt(a)-parseInt(b)).map(f=>{
    const testo=readFileSync(`src/content/domande/tolc-i/${a}/${f}`,'utf8');
    const corretta=Number(testo.match(/^corretta: (\d)$/m)?.[1]);
    const parti=testo.split('\n## Spiegazione\n');
    const scelte=[...parti[0].matchAll(/^- (.+)$/gm)].map(m=>m[1]);
    assert.equal(scelte.length,5,`${a}/${f}: cinque alternative`);
    assert.equal(new Set(scelte).size,5,`${a}/${f}: alternative distinte`);
    assert(corretta>=1&&corretta<=5);assert(parti[1]?.trim().length>65,`${a}/${f}: spiegazione`);
    for(const m of testo.matchAll(/\$([^$\n]+)\$/g))katex.renderToString(m[1],{throwOnError:true,strict:false});
    return {id:`${a}/${parseInt(f)}`,corretta,scelte,testo:parti[0],spiegazione:parti[1]};
  });
}
test('TOLC-I: 9 capitoli da 90 quesiti, cinque alternative e formule valide',()=>{
  assert.equal(Object.keys(argomenti).length,9);
  for(const [a,qs]of Object.entries(argomenti)){
    assert.deepEqual(qs.map(q=>q.id),Array.from({length:90},(_,i)=>`${a}/${i+1}`));
    const te=readFileSync(`src/content/teoria/tolc-i/${a}.md`,'utf8');
    assert(te.match(/^## /gm).length>=6);
    for(const m of te.matchAll(/\$([^$\n]+)\$/g))katex.renderToString(m[1],{throwOnError:true,strict:false});
    const cartella=`src/content/dafare/tolc-i/${a}`;
    const esercizi=readdirSync(cartella).filter(file=>/^\d+\.md$/.test(file));
    assert(esercizi.length>0);
    for(const file of esercizi) assert(readFileSync(`${cartella}/${file}`,'utf8').includes(':::soluzione'));
  }
});
test('prova 80 quesiti/125 minuti, fisica e chimica, nessun duplicato',()=>{
  for(let i=0;i<20;i++){
    const p=creaProvaTolc(argomenti);assert.deepEqual(p.map(s=>s.domande.length),[20,10,10,10,30]);
    assert.equal(p.reduce((n,s)=>n+s.minuti,0),125);
    assert.equal(new Set(p.flatMap(s=>s.domande.map(q=>q.id))).size,80);
    assert.equal(p[2].domande.filter(q=>q.id.startsWith('fisica/')).length,5);
    assert.equal(p[2].domande.filter(q=>q.id.startsWith('chimica/')).length,5);
    assert.equal(p[0].domande.filter(q=>q.id.startsWith('geometria/')).length,5);
  }
});
test('prova senza inglese 50 quesiti/110 minuti',()=>{
  const p=creaProvaTolc(argomenti,false);assert.equal(p.length,4);assert.equal(p.flatMap(s=>s.domande).length,50);assert.equal(p.reduce((n,s)=>n+s.minuti,0),110);
});
test('punteggio, omesse, penalità e inglese indipendente',()=>{
  const qs=[{corretta:1},{corretta:3},{corretta:5}];
  assert.deepEqual(correggiSezioneTolc(qs,[0,0,null]),{corrette:1,errate:1,omesse:1,punti:.75,massimo:3});
  assert.equal(correggiSezioneTolc(qs,[0,0,null],true).punti,1);
  assert.equal(correggiSezioneTolc(qs,[1,0,0]).punti,-.75);
  assert.equal(correggiSezioneTolc(qs,[null,null,null]).punti,0);
});
test('dieci soli quesiti in anteprima, stabili tra sessioni',()=>{
  const demo=Object.values(anteprimaTolc(argomenti)).flat();assert.equal(demo.length,10);assert.deepEqual(demo,Object.values(anteprimaTolc(argomenti)).flat());
});
const io={email:'test@example.invalid',materie:['tolc-i']};
let signed;
const h={json:(d,s=200)=>Response.json(d,{status:s}),utenteCollegato:async()=>io,domandeDi:async()=>({argomenti}),firmaToken:async(_env,t)=>{signed=t;return 'firmato';},leggiToken:async(_env,t)=>t==='firmato'?signed:null};
const req=(p,b={})=>new Request(`https://esempio.invalid${p}`,{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify(b)});
test('API protegge accesso e non invia soluzioni prima della consegna',async()=>{
  const denied=await gestisciTolcI(req('/api/tolc-i/inizia'),{},'/api/tolc-i/inizia',{...h,utenteCollegato:async()=>null});assert.equal(denied.status,403);
  const r=await gestisciTolcI(req('/api/tolc-i/inizia'),{},'/api/tolc-i/inizia',h);const d=await r.json();assert.equal(r.status,200);assert.equal(d.sezioni.length,5);
  assert(d.sezioni.every(s=>s.domande.every(q=>!('corretta'in q)&&!('spiegazione'in q))));
  const risposte=d.sezioni.map(s=>s.domande.map(q=>argomenti[q.id.split('/')[0]].find(x=>x.id===q.id).corretta-1));
  const c=await gestisciTolcI(req('/api/tolc-i/correggi',{token:'firmato',risposte}),{},'/api/tolc-i/correggi',h);const es=await c.json();assert.equal(es.punti,50);assert.equal(es.inglese,30);
  risposte[0][0]=99;assert.equal((await gestisciTolcI(req('/api/tolc-i/correggi',{token:'firmato',risposte}),{},'/api/tolc-i/correggi',h)).status,400);
  assert.equal((await gestisciTolcI(req('/api/tolc-i/correggi',{token:'falso',risposte}),{},'/api/tolc-i/correggi',h)).status,400);
});
