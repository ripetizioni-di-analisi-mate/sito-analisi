// Controlli del contenuto e rendering esatto delle figure con gli stessi plugin del sito.
import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import katex from 'katex';
import sharp from 'sharp';
import { grafico } from '../../src/plugins/grafico.mjs';
const slug='matematica-superiori-3';
const walk=(p)=>fs.readdirSync(p,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(path.join(p,e.name)):[path.join(p,e.name)]);
const files=['teoria','svolti','dafare','domande'].flatMap(c=>walk(`src/content/${c}/${slug}`));
let formule=0; const figures=[];
for(const file of files){
  const t=fs.readFileSync(file,'utf8');
  for(const m of t.matchAll(/\$\$([\s\S]*?)\$\$|(?<!\$)\$([^$\n]+)\$(?!\$)/g)){
    const tex=m[1]??m[2];
    try{katex.renderToString(tex,{throwOnError:true,strict:false,displayMode:!!m[1]});}catch(e){throw new Error(`${file}: ${tex}: ${e.message}`);}
    formule++;
  }
  for(const m of t.matchAll(/^::grafico\{(.*)\}$/gm)){
    const a={};for(const z of m[1].matchAll(/(\w+)=(?:"([^"]*)"|([^\s}]+))/g))a[z[1]]=z[2]??z[3];
    const rendered=grafico(a);
    assert(!rendered.includes('NaN'),file);
    const svg=rendered.match(/<svg[\s\S]*?<\/svg>/)[0];
    if(a.f||a.curve)assert(/class="curva[^\"]*" d="M/.test(svg),`Curva vuota: ${file}`);
    figures.push({file,svg});
  }
}
const out=process.argv[2];
if(out){
  fs.mkdirSync(out,{recursive:true});
  for(let start=0;start<figures.length;start+=8){
    const group=figures.slice(start,start+8);const composite=[];
    for(let i=0;i<group.length;i++){
      const {file,svg}=group[i];
      const decorated=svg.replace(/(<svg[^>]*>)/,'$1<style>text{font:12px sans-serif;fill:#334155}.curva{fill:none;stroke:#6b5ca5;stroke-width:2.2}.c1{stroke:#b0543a}.c2{stroke:#2f6f68}line,path{stroke:#64748b}circle{fill:#6b5ca5}.asse{stroke:#64748b}.griglia{stroke:#e2e8f0}</style>');
      const png=await sharp(Buffer.from(decorated)).resize(480,320,{fit:'contain',background:'#ffffff'}).png().toBuffer();
      const label=file.replace(`src/content/`,'').replace(`${slug}/`,'');
      const title=Buffer.from(`<svg width="480" height="32"><rect width="480" height="32" fill="white"/><text x="10" y="22" font-size="12" font-family="sans-serif">${label}</text></svg>`);
      composite.push({input:title,left:(i%2)*480,top:Math.floor(i/2)*352});
      composite.push({input:png,left:(i%2)*480,top:Math.floor(i/2)*352+32});
    }
    await sharp({create:{width:960,height:Math.ceil(group.length/2)*352,channels:4,background:'#ffffff'}}).composite(composite).png().toFile(path.join(out,`figure-${start/8+1}.png`));
  }
}
console.log(JSON.stringify({file:files.length,formule,figure:figures.length}));
