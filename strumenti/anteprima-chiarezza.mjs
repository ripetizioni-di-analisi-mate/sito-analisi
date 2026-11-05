// Anteprima locale con dati dimostrativi: non chiama account o pagamenti reali.
// Eseguire dopo npm run build: node strumenti/anteprima-chiarezza.mjs /percorso/anteprima
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse, parseFragment, serialize } from 'parse5';
import { spazioHome } from '../worker/spazio.mjs';
import { stemmaSVG, rangoDi, gradoDi, nomeRango, stileRango } from '../worker/stemmi.mjs';

const repo = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const dist = path.join(repo, 'dist');
const target = process.argv[2];
if (!target || !path.isAbsolute(target) || path.resolve(target).startsWith(repo + path.sep)) throw new Error('Indicare una cartella assoluta esterna al repository.');
const out = path.join(target, 'dist');
fs.mkdirSync(out, {recursive:true});
fs.mkdirSync(path.join(target,'.openai'),{recursive:true});
fs.writeFileSync(path.join(target,'.openai/hosting.json'),JSON.stringify({static:{directory:'dist'}}));

const state = { livello:5, fascia:'Matricola', frase:'Il viaggio comincia.', exp:323, base:300, prossimo:400, mancano:77, perc:23 };
const fixture = {
  stato:state, oggi:{minuti:25,corrette:4}, settimana:{minuti:85,corrette:18,giorni:[1,1,0,1,0,0,0].map(attivo=>({attivo:Boolean(attivo)}))},
  obiettivi:[{testo:'Rispondi correttamente a 10 domande sui limiti.',fatto:4,totale:10,punti:50,completato:false,link:'/analisi-1/limiti/domande'}],
  traguardi:[{nome:'Prime 10 risposte corrette',punti:50}], prossimo:{nome:'25 risposte corrette',fatto:18,totale:25,punti:80,unita:'risposte'},
  sessioni:[{materia:'analisi-1',argomento:'limiti',titolo:'Limiti e continuità',minuti:25,corrette:4,risposte:6,punti:43,inizio:Date.now()}],
  esami:[],lega:null,
};
const io={nome:'Studente',email:'studente@example.invalid',materie:['analisi-1','precorso'],dispositivi:[]};
const walk=(n,f)=>{f(n);for(const c of n.childNodes||[])walk(c,f);};
const attr=(n,k)=>n.attrs?.find(a=>a.name===k)?.value;
const setAttr=(n,k,v)=>{n.attrs??=[];const a=n.attrs.find(a=>a.name===k);if(a)a.value=v;else n.attrs.push({name:k,value:v});};
const byClass=(doc,c)=>{let found;walk(doc,n=>{if(!found&&attr(n,'class')?.split(/\s+/).includes(c))found=n;});return found;};
const byTag=(doc,t)=>{let found;walk(doc,n=>{if(!found&&n.tagName===t)found=n;});return found;};
const html=(n,s)=>{if(!n)return;n.childNodes=parseFragment(s).childNodes;for(const c of n.childNodes)c.parentNode=n;};
const text=(n,s)=>{if(!n)return;n.childNodes=[{nodeName:'#text',value:String(s),parentNode:n}];};
const escape=(s)=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;');

function preview(source, personal=false, variant='a'){
  const doc=parse(source);const root=byTag(doc,'html');const head=byTag(doc,'head');const body=byTag(doc,'body');
  const banner=parseFragment(`<aside class="qa-banner"><strong>Anteprima grafica · ${personal?'dati dimostrativi':'navigazione campione'}</strong><nav><a href="/">Home</a><a href="/personale-a">A · Percorso guidato</a><a href="/personale-b">B · Compatto</a><a href="/personale-c">C · Materie in primo piano</a><a href="/mobile">Telefono</a></nav></aside>`).childNodes[0];
  body.childNodes.unshift(banner);banner.parentNode=body;
  if(personal){
    setAttr(root,'class',(attr(root,'class')||'')+' collegato');setAttr(root,'data-materie',io.materie.join(' '));setAttr(root,'data-qa-variante',variant);
    for(const [selector,value]of Object.entries(spazioHome(state,io.nome,false))){
      const classes=selector.match(/\.[a-z-]+/g);let n=byClass(doc,classes.at(-1).slice(1));
      if(selector.endsWith('> span'))n=n.childNodes.find(c=>c.tagName==='span');
      if(value.stile)setAttr(n,'style',value.stile);if(value.html!==undefined)html(n,value.html);else if(value.testo!==undefined)text(n,value.testo);
    }
    text(byClass(doc,'nome-utente'),io.nome);text(byClass(doc,'exp-livello'),state.exp);text(byClass(doc,'numero-livello'),state.livello);text(byClass(doc,'fascia-nome'),nomeRango(state.livello,'it'));
    html(byClass(doc,'stemma-testata'),stemmaSVG(rangoDi(state.livello),{perc:state.perc,id:'t',grado:gradoDi(state.livello)}));
    const badge=byClass(doc,'bottone-livello');setAttr(badge,'style',stileRango(rangoDi(state.livello)));setAttr(badge,'data-stato',JSON.stringify({l:5,f:state.fascia,r:state.frase,x:323,b:300,p:400,m:77,c:23}));
  }
  const bootstrap=`const qaFetch=window.fetch.bind(window);window.fetch=async(input,options)=>{const p=new URL(typeof input==='string'?input:input.url,location.href).pathname;if(p.startsWith('/api/')){let d={},status=401;if(${personal}&&p==='/api/percorso'){d=${JSON.stringify(fixture)};status=200;}else if(${personal}&&p==='/api/ripasso'){d={oggi:[{materia:'analisi-1',n:3}]};status=200;}else if(${personal}&&p==='/api/io'){d=${JSON.stringify(io)};status=200;}return new Response(JSON.stringify(d),{status,headers:{'content-type':'application/json'}});}return qaFetch(input,options);};`;
  const script=parseFragment(`<script>${bootstrap}</script>`).childNodes[0];head.childNodes.unshift(script);script.parentNode=head;
  const css=`.qa-banner{background:#e9eee9;border-bottom:1px solid #ccd5cd;padding:.5rem 1rem;font:14px system-ui;color:#263a36}.qa-banner nav{display:flex;gap:1rem;flex-wrap:wrap;margin-top:.25rem}.qa-banner a{font-size:13px}html[data-qa-variante=b] .ss-oggi,html[data-qa-variante=b] .ss-attivita,html[data-qa-variante=b] .ss-traguardi{display:none}html[data-qa-variante=c] main .pagina{display:flex;flex-direction:column}html[data-qa-variante=c] .home-personale{order:-4}html[data-qa-variante=c] .materiali-studente{order:-3;margin-top:0}html[data-qa-variante=c] .spazio-studente{order:-2}`;
  const style=parseFragment(`<style>${css}</style>`).childNodes[0];head.childNodes.push(style);style.parentNode=head;
  return serialize(doc);
}
function save(name,source){
  const f=path.join(out,name);fs.mkdirSync(path.dirname(f),{recursive:true});fs.writeFileSync(f,source);
  if(name.endsWith('.html')&&!name.endsWith('index.html')){const clean=path.join(out,name.slice(0,-5),'index.html');fs.mkdirSync(path.dirname(clean),{recursive:true});fs.writeFileSync(clean,source);}
}
// Solo pagine pubbliche selezionate e anteprime con le soluzioni già rimosse.
for(const n of ['risorse','chi-sono','logo.svg','logo-180.png','og.png'])if(fs.existsSync(path.join(dist,n)))fs.cpSync(path.join(dist,n),path.join(out,n),{recursive:true});
for(const name of ['index.html','cerca.html','indice-ricerca.json','analisi-1.html','precorso.html','fisica-zero.html','account.html','accedi.html','en.html','en/cerca.html','en/indice-ricerca.json']){
  const s=fs.readFileSync(path.join(dist,name),'utf8');save(name,name.endsWith('.html')?preview(s):s);
}
for(const section of ['teoria','esercizi-svolti','esercizi']){
  const name=`analisi-1/limiti/${section}.html`;const protectedFile=path.join(dist,'vetrine',name);
  save(name,preview(fs.readFileSync(fs.existsSync(protectedFile)?protectedFile:path.join(dist,name),'utf8')));
}
for(const n of [1,2,3]){const name=`analisi-1/limiti/esercizi-svolti/${n}.html`;save(name,preview(fs.readFileSync(path.join(dist,name),'utf8')));}
const home=fs.readFileSync(path.join(dist,'index.html'),'utf8');
for(const v of ['a','b','c'])save(`personale-${v}.html`,preview(home,true,v));
save('mobile.html',`<!doctype html><html lang="it"><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>Anteprima su telefono</title><style>body{margin:0;background:#f1ede4;font:16px system-ui;color:#263a36}header{text-align:center;padding:14px}iframe{display:block;width:390px;max-width:100%;height:844px;border:1px solid #bbb;border-radius:12px;margin:0 auto;background:white}a,select{margin:0 8px;color:#326d66}</style><header><a href="/personale-a">Anteprima su computer</a><label>Pagina <select id="scelta"><option value="/personale-a/">Spazio personale</option><option value="/">Home</option><option value="/analisi-1/limiti/teoria/">Lezione</option><option value="/cerca/?q=limti">Ricerca</option></select></label></header><iframe title="Sito su schermo da telefono" src="/personale-a/"></iframe><script>document.querySelector('select').addEventListener('change',e=>document.querySelector('iframe').src=e.target.value);</script></html>`);
fs.writeFileSync(path.join(target,'README.txt'),'Anteprima di Missione: Chiarezza totale. Dati personali dimostrativi. I servizi account e pagamento non sono collegati.');
console.log(target);
