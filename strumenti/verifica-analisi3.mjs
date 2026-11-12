// Controlli editoriali eseguiti prima di ogni build del corso.
import {readFileSync,readdirSync} from 'node:fs';
import assert from 'node:assert/strict';
import {join} from 'node:path';
import {parse} from 'yaml';
import katex from 'katex';
const root=new URL('..',import.meta.url).pathname;
const banco=JSON.parse(readFileSync(join(root,'strumenti/analisi3/banco.json'),'utf8'));
const cartella=join(root,'src/content');
let formule=0,file=0,esempi=0;
for(const [slug,schede] of Object.entries(banco)){
 const teoria=readFileSync(join(cartella,'teoria/analisi-3',slug+'.md'),'utf8');
 const ancore=new Set([...teoria.matchAll(/\{#([\w-]+)/g)].map(m=>m[1]));
 assert.ok((teoria.match(/^## /gm)||[]).length>=6,slug+': sezioni di teoria');
 assert.equal(schede.length,7);
 for(const s of schede){assert.ok(ancore.has(s.anchor),slug+': ancora '+s.anchor);assert.equal(s.cases.length,6);for(const c of s.cases)assert.equal(new Set([c.a,...c.wrong]).size,4,c.q);}
 for(const tipo of ['teoria','svolti','dafare','domande']){
  const dir=join(cartella,tipo,'analisi-3');
  const paths=tipo==='teoria'?[join(dir,slug+'.md')]:readdirSync(join(dir,slug)).filter(n=>n.endsWith('.md')).map(n=>join(dir,slug,n));
  assert.equal(paths.length,{teoria:1,svolti:7,dafare:14,domande:90}[tipo],slug+': '+tipo);
  const tracce=new Set();
  for(const path of paths){
   const text=readFileSync(path,'utf8');file++;
   const match=text.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);assert.ok(match,path+': frontmatter');
   const data=parse(match[1]),body=match[2];
   for(const a of data.teoria||[])assert.ok(ancore.has(a),path+': rimando '+a);
   for(const m of body.matchAll(/\$\$([\s\S]*?)\$\$|\$([^$\n]+)\$/g)){katex.renderToString(m[1]??m[2],{throwOnError:true,strict:false,displayMode:m[1]!==undefined});formule++;}
   const stacks=[];for(const line of body.split('\n')){const d=line.match(/^(:{3,})([a-z]+)?/);if(d){if(d[2])stacks.push(d[1].length);else assert.equal(stacks.pop(),d[1].length,path+': chiusura blocco');}}
   assert.equal(stacks.length,0,path+': blocchi rimasti aperti');
   if(tipo==='svolti'){const n=(body.match(/^## Esercizio /gm)||[]).length;assert.equal(n,2);esempi+=n;assert.equal(data.gratis,Number(path.match(/(\d+)\.md$/)[1])<=3);}
   if(tipo==='dafare')assert.match(body,/:::soluzione/);
   if(tipo==='domande'){
    const parti=body.split('## Spiegazione');
    assert.equal(parti.length,2,path+': spiegazione');
    const options=[...parti[0].matchAll(/^- (.+)$/gm)].map(m=>m[1]);
    assert.equal(options.length,4,path+': opzioni');
    assert.equal(new Set(options).size,4,path+': opzioni distinte');
    assert.ok(Number.isInteger(data.corretta)&&data.corretta>=1&&data.corretta<=4,path+': risposta corretta');
    const traccia=parti[0].split('\n- ')[0].trim().replace(/\s+/g,' ');
    assert.ok(traccia&&!tracce.has(traccia),path+': traccia autonoma e unica');
    tracce.add(traccia);
    const riferimento=parti[1].match(new RegExp('/analisi-3/'+slug+'/teoria#([\\w-]+)'));
    assert.ok(riferimento&&ancore.has(riferimento[1]),path+': rimando alla teoria');
   }
  }
 }
}
console.log('Analisi 3: '+file+' file Markdown, '+formule+' formule valide, '+esempi+' esercizi svolti; ancore, soluzioni e opzioni verificate.');
