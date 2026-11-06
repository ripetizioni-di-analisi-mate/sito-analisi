import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readdirSync, readFileSync } from 'node:fs';
import katex from 'katex';
import { TOLC, provaTolc, demoTolc } from '../src/data/tolc.mjs';
import { gestisciTolcI } from '../worker/tolc-i.mjs';
const args={};
for(const a of readdirSync('src/content/domande/tolc-s')){
  args[a]=readdirSync(`src/content/domande/tolc-s/${a}`).sort((a,b)=>parseInt(a)-parseInt(b)).map(f=>{
    const txt=readFileSync(`src/content/domande/tolc-s/${a}/${f}`,'utf8');
    const parts=txt.split('\n## Spiegazione\n');const scelte=[...parts[0].matchAll(/^- (.+)$/gm)].map(m=>m[1]);
    const corretta=Number(txt.match(/^corretta: (\d)$/m)?.[1]);
    assert.equal(scelte.length,5,`${a}/${f}`);assert.equal(new Set(scelte).size,5);assert(corretta>=1&&corretta<=5);assert(parts[1].trim().length>65);
    for(const m of txt.matchAll(/\$([^$\n]+)\$/g))katex.renderToString(m[1],{throwOnError:true,strict:false});
    return {id:`${a}/${parseInt(f)}`,corretta,scelte,testo:parts[0],spiegazione:parts[1]};
  });
}
test('TOLC-S: 12 capitoli, 170 quiz con cinque alternative e spiegazioni',()=>{
  assert.equal(Object.keys(args).length,12);assert.equal(Object.values(args).flat().length,170);
  for(const [a,qs]of Object.entries(args)){
    const t=readFileSync(`src/content/teoria/tolc-s/${a}.md`,'utf8');assert(!t.includes('TOLC-I'));assert(t.match(/^## /gm).length>=6);
    for(const m of t.matchAll(/\$([^$\n]+)\$/g))katex.renderToString(m[1],{throwOnError:true,strict:false});
    for(const q of qs)assert(readFileSync(`src/content/dafare/tolc-s/${q.id}.md`,'utf8').includes(':::soluzione'));
  }
});
test('TOLC-S: 55 quesiti / 120 minuti, oppure 85 / 135 con inglese',()=>{
  for(let i=0;i<20;i++){
    const p=provaTolc('tolc-s',args,true);assert.deepEqual(p.map(s=>s.domande.length),[20,15,5,5,5,5,30]);
    assert.equal(p.reduce((n,s)=>n+s.minuti,0),135);assert.equal(new Set(p.flatMap(s=>s.domande.map(q=>q.id))).size,85);
    const short=provaTolc('tolc-s',args,false);assert.equal(short.flatMap(s=>s.domande).length,55);assert.equal(short.reduce((n,s)=>n+s.minuti,0),120);
  }
});
test('TOLC-S: anteprima stabile limitata a dieci quesiti e configurazioni distinte',()=>{
  assert.equal(Object.values(demoTolc('tolc-s',args)).flat().length,10);assert.equal(TOLC['tolc-i'].quesiti,50);assert.equal(TOLC['tolc-s'].quesiti,55);
  assert.throws(()=>provaTolc('inesistente',args));assert.throws(()=>provaTolc('tolc-s',{...args,biologia:[]}));
});
let signed;let user={email:'test@example.invalid',materie:['tolc-s']};
const h={json:(d,s=200)=>Response.json(d,{status:s}),utenteCollegato:async()=>user,domandeDi:async()=>({argomenti:args}),firmaToken:async(_e,t)=>{signed=t;return 'firmato';},leggiToken:async(_e,t)=>t==='firmato'?signed:null};
const req=(path,b={})=>new Request(`https://esempio.invalid${path}`,{method:'POST',body:JSON.stringify(b)});
test('API: correzione separata, massimo 55 e accesso TOLC-I non valido per TOLC-S',async()=>{
  const start='/api/tolc-s/inizia',end='/api/tolc-s/correggi';
  const r=await gestisciTolcI(req(start),{},start,h);const d=await r.json();assert.equal(r.status,200);assert.equal(signed.tipo,'tolc-s');
  assert(d.sezioni.every(s=>s.domande.every(q=>!('corretta'in q)&&!('spiegazione'in q))));
  const rs=d.sezioni.map(s=>s.domande.map(q=>args[q.id.split('/')[0]].find(x=>x.id===q.id).corretta-1));
  const e=await(await gestisciTolcI(req(end,{token:'firmato',risposte:rs}),{},end,h)).json();assert.equal(e.punti,55);assert.equal(e.massimo,55);assert.equal(e.inglese,30);
  user.materie=['tolc-i'];assert.equal((await gestisciTolcI(req(start),{},start,h)).status,403);user.materie=['tolc-s'];
  signed.tipo='tolc-i';assert.equal((await gestisciTolcI(req(end,{token:'firmato',risposte:rs}),{},end,h)).status,400);signed.tipo='tolc-s';
  signed.t=Date.now()-7*3600000;assert.equal((await gestisciTolcI(req(end,{token:'firmato',risposte:rs}),{},end,h)).status,400);
});
