// Controlli sulle pagine prodotte dalla build, senza account o servizi remoti.
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { parse } from 'parse5';
import { execFileSync } from 'node:child_process';

const walk=(n,f)=>{f(n);for(const c of n.childNodes||[])walk(c,f);};
const attr=(n,k)=>n.attrs?.find(a=>a.name===k)?.value;
const nodes=(root,condition)=>{const out=[];walk(root,n=>{if(condition(n))out.push(n);});return out;};
const cls=(n,c)=>attr(n,'class')?.split(/\s+/).includes(c);
const read=p=>fs.readFileSync(path.join('dist',p),'utf8');
let checks=0;
const check=(name,fn)=>{fn();checks++;console.log('OK',name);};
const home=parse(read('index.html'));
check('Un campo di ricerca nella home',()=>assert.equal(nodes(home,n=>n.tagName==='input'&&attr(n,'type')==='search').length,1));
check('Materiali personali filtrati per materie autorizzate',()=>{const s=read('index.html');assert.match(s,/data-materie/);assert.match(s,/I tuoi materiali/);assert.match(s,/ms-materia-analisi-1/);});
check('Versione B compatta senza i tre collegamenti verdi',()=>{const box=nodes(home,n=>cls(n,'spazio-studente'))[0];assert.ok(box);assert.equal(nodes(box,n=>cls(n,'ss-sfide')||cls(n,'ss-oggi')||cls(n,'ss-attivita')||cls(n,'ss-traguardi')).length,0);for(const a of nodes(box,n=>n.tagName==='a'))assert.ok(!['/account','/lega','/duelli'].includes(attr(a,'href')));});
check('Pagina ricerca con filtri e un campo',()=>{const d=parse(read('cerca.html'));assert.equal(nodes(d,n=>n.tagName==='input'&&attr(n,'type')==='search').length,1);assert.equal(nodes(d,n=>n.tagName==='select').length,2);});
check('Dagli svolti ai problemi autonomi dello stesso argomento',()=>{const d=parse(read('analisi-1/limiti/esercizi-svolti.html'));const a=nodes(d,n=>n.tagName==='a'&&cls(n,'successivo'))[0];assert.equal(attr(a,'href'),'/analisi-1/limiti/esercizi');});
check('Ultima scheda svolta prosegue verso esercizi autonomi',()=>{const files=fs.readdirSync('dist/analisi-1/limiti/esercizi-svolti').filter(p=>/^\d+\.html$/.test(p)).sort((a,b)=>parseInt(a)-parseInt(b));const d=parse(read(`analisi-1/limiti/esercizi-svolti/${files.at(-1)}`));assert.equal(attr(nodes(d,n=>n.tagName==='a'&&cls(n,'successivo'))[0],'href'),'/analisi-1/limiti/esercizi');});
check('Collegamenti delle sezioni esistenti nella build',()=>{const d=parse(read('analisi-1/limiti/teoria.html'));for(const nav of nodes(d,n=>cls(n,'studio-sezioni')))for(const a of nodes(nav,n=>n.tagName==='a'))assert.ok(fs.existsSync(path.join('dist',attr(a,'href')+'.html')),attr(a,'href'));});
check('Concentrazione e Pi sono disponibili nella lezione',()=>{const s=read('analisi-1/limiti/teoria.html');assert.match(s,/data-concentrazione/);assert.match(s,/Chiedi a Pi/);});
check('Fisica zero conserva le soluzioni gratuite',()=>{const s=read('fisica-zero.html');assert.match(s,/Tutto gratuito/);const p='dist/vetrine/fisica-zero';assert.ok(!fs.existsSync(p),'Nessuna vetrina a pagamento per Fisica zero');});
check('Accesso allo spazio personale anche in inglese',()=>assert.match(read('en/account.html'),/Open your study space/));
check('Markup di testata e stemma invariato',()=>{const base=execFileSync('git',['show','origin/main:src/layouts/Base.astro'],{encoding:'utf8'});const now=fs.readFileSync('src/layouts/Base.astro','utf8');const header=s=>s.slice(s.indexOf('<header'),s.indexOf('</header>')+9);assert.equal(header(now),header(base));});
check('I sorgenti dell’account non contengono dati dimostrativi',()=>{const s=read('index.html');assert.ok(!s.includes('studente@example.invalid'));assert.ok(!s.includes('qa-banner'));});
console.log(`${checks} controlli sulle pagine superati.`);
