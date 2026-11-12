import {readFileSync,readdirSync} from 'node:fs';
import {join} from 'node:path';
import assert from 'node:assert/strict';
import katex from 'katex';
import YAML from 'yaml';
const root=new URL('../..',import.meta.url).pathname;
const base=join(root,'src/content');
const chapters=JSON.parse(readFileSync(join(root,'strumenti/finanziaria/capitoli.json')));
let files=0,formulas=0;
const stems = new Map();
assert.equal(chapters.length, 10);
for(const chapter of chapters){
 const slug=chapter.slug;
 const theory=readFileSync(join(base,'teoria/matematica-finanziaria',slug+'.md'),'utf8');
 const anchors=new Set([...theory.matchAll(/\{#([a-z0-9-]+)/g)].map(x=>x[1]));
 assert.equal(anchors.size,8,slug+': otto concetti di riferimento');
 assert.equal([...theory.matchAll(/^## /gm)].length,8);
 const paths=[join(base,'teoria/matematica-finanziaria',slug+'.md')];
 for(const [collection,count] of [['svolti',8],['dafare',14],['domande',90]]){
  const dir=join(base,collection,'matematica-finanziaria',slug);
  const names=readdirSync(dir).filter(x=>x.endsWith('.md'));
  assert.equal(names.length, count, dir);
  for (let n = 1; n <= count; n++) assert.ok(names.includes(n+'.md'), dir+'/'+n+'.md');
  for(const name of names)paths.push(join(dir,name));
 }
 for(const path of paths){
  const md=readFileSync(path,'utf8');
  const fm=md.match(/^---\n([\s\S]*?)\n---/);assert.ok(fm,path);
  const data=YAML.parse(fm[1]);
  if(data.teoria)for(const a of data.teoria)assert.ok(anchors.has(a),path+': '+a);
  if(path.includes('/svolti/')){
   assert.equal([...md.matchAll(/^## Esercizio /gm)].length,2);
   assert.equal(data.gratis,Number(path.match(/\/(\d+)\.md$/)[1])<=3);
  }
  if(path.includes('/dafare/'))assert.match(md,/:::soluzione\n[\s\S]+\n:::/);
  if(path.includes('/domande/')){
   const choices=[...md.matchAll(/^- (.+)$/gm)].map(x=>x[1]);
   assert.equal(choices.length,4);assert.equal(new Set(choices).size,4);
   assert.ok(Number.isInteger(data.corretta) && data.corretta >= 1 && data.corretta <= 4, path);
   assert.match(md, /## Spiegazione\n\n\S/, path);
   const stem = md.slice(fm[0].length).trim().split(/\n\n/)[0].replace(/\s+/g, ' ');
   assert.ok(stem, path);
   assert.ok(!stems.has(stem), path + ' ripete ' + stems.get(stem));
   stems.set(stem, path);
  }
  for(const match of md.matchAll(/\$\$([\s\S]*?)\$\$|\$([^\n$]+)\$/g)){
   try{katex.renderToString(match[1]??match[2],{throwOnError:true,strict:false,displayMode:!!match[1]});formulas++;}
   catch(e){throw Error(path+'\n'+match[0]+'\n'+e.message);}
  }
  files++;
 }
}
assert.equal(stems.size, 900);
console.log(files+' Markdown verificati: YAML, ancore, schede, soluzioni e '+formulas+' formule KaTeX.');
