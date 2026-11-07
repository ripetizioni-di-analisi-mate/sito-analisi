// Analisi 2 è la sorgente unica dei tre capitoli comuni; ogni acquisto usa i propri URL.
import {readdirSync,readFileSync,writeFileSync,mkdirSync,existsSync,rmSync} from 'node:fs';
import {join,dirname} from 'node:path';
const root=new URL('..',import.meta.url).pathname;
const condivisi=['successioni-e-serie-di-funzioni','serie-di-potenze','serie-di-fourier'];
for(const base of ['src/content','src/content-en']) for(const tipo of ['teoria','svolti','dafare','domande']) for(const argomento of condivisi){
 const suffisso=tipo==='teoria'?argomento+'.md':argomento;
 const origine=join(root,base,tipo,'analisi-2',suffisso);
 const dest=join(root,base,tipo,'analisi-3',suffisso);
 rmSync(dest,{recursive:true,force:true});
 if(!existsSync(origine)) continue;
 for(const nome of tipo==='teoria'?['']:readdirSync(origine).filter(n=>n.endsWith('.md'))){
  const out=nome?join(dest,nome):dest; mkdirSync(dirname(out),{recursive:true});
  const contenuto=readFileSync(nome?join(origine,nome):origine,'utf8').replace(/\/analisi-2\/([a-z-]+)(?=\/)/g,(match,a)=>condivisi.includes(a)?'/analisi-3/'+a:match);
  writeFileSync(out,contenuto);
 }
}
console.log('Analisi 3: sincronizzati i tre capitoli condivisi.');
