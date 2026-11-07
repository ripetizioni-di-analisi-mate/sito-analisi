// Rigenera le schede dai casi originali revisionabili; lascia inalterata la teoria.
import {readFileSync,writeFileSync,mkdirSync} from 'node:fs';
import {join,dirname} from 'node:path';
const root=new URL('..',import.meta.url).pathname;
const bank=JSON.parse(readFileSync(join(root,'strumenti/analisi3/banco.json'),'utf8'));
const md=(data,body)=>'---\n'+Object.entries(data).map(([k,v])=>k+': '+JSON.stringify(v)).join('\n')+'\n---\n\n'+body.trim()+'\n';
const write=(p,data,body)=>{const out=join(root,p);mkdirSync(dirname(out),{recursive:true});writeFileSync(out,md(data,body));};
for(const [slug,families] of Object.entries(bank)){
 let nq=0,nd=0;
 for(let j=0;j<families.length;j++){
  const g=families[j],base={teoria:[g.anchor],parole:[g.title.toLowerCase()]};
  const solved=g.cases.slice(0,2).map((c,k)=>'## Esercizio '+(k+1)+'\n\n'+c.q+'\n\n$$\n'+c.steps+'\n$$\n\n<div class="spiegazione">\n\n'+c.why+'\n\n</div>\n\nIl risultato è $'+c.a+'$.').join('\n\n');
  write('src/content/svolti/analisi-3/'+slug+'/'+(j+1)+'.md',{titolo:g.title,gratis:j<3,...base},solved);
  for(const c of g.cases.slice(2,4)){nd++;write('src/content/dafare/analisi-3/'+slug+'/'+nd+'.md',{titolo:g.title+' · esercizio '+nd,...base},c.q+'\n\n:::soluzione\n$'+c.a+'$\n:::');}
  for(const c of g.cases.slice(4,6)){nq++;const opts=[c.a,...c.wrong],pos=(nq-1)%4;opts.splice(pos,0,opts.shift());write('src/content/domande/analisi-3/'+slug+'/'+nq+'.md',{corretta:pos+1},c.q+'\n\n'+opts.map(a=>'- $'+a+'$').join('\n')+'\n\n## Spiegazione\n\n'+c.why+'\n\n$$\n'+c.steps+'\n$$\n\n[Teoria del procedimento](/analisi-3/'+slug+'/teoria#'+g.anchor+').');}
 }
}
