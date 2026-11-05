import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { createMarkdownProcessor } from '@astrojs/markdown-remark';
import { parse } from 'yaml';
import remarkMath from 'remark-math';
import remarkDirective from 'remark-directive';
import remarkBlocchi from '../src/plugins/remark-blocchi.mjs';
import remarkTracce from '../src/plugins/remark-tracce.mjs';
import rehypeKatex from '../src/plugins/rehype-katex-tex.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const partial = process.argv.includes('--partial');
const output = path.resolve(root, '../output/Fisica-zero-anteprima.html');
const program = JSON.parse(fs.readFileSync(path.join(root,'review-checks/programma.json'),'utf8'));
const processor = await createMarkdownProcessor({
  remarkPlugins: [remarkMath, remarkDirective, remarkBlocchi, remarkTracce],
  rehypePlugins: [[rehypeKatex, { strict:false, output:'html' }]],
  shikiConfig: { theme:'github-light' },
});
const esc = v => String(v ?? '').replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const read = f => fs.readFileSync(path.join(root,f),'utf8');
function source(f) {
  const text=read(f), match=text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
  if (!match) throw Error('Frontmatter missing: '+f);
  return {meta:parse(match[1]),body:text.slice(match[0].length)};
}
const pages={}, missing=[], manifest=[];
const totals={teoria:0,schede:0,svolti:0,tracce:0,figure:0,formule:0};
for (const ch of program) {
  const files=[['teoria',null,`src/content/teoria/fisica-zero/${ch.slug}.md`],
    ...Array.from({length:8},(_,i)=>['svolti',i+1,`src/content/svolti/fisica-zero/${ch.slug}/${i+1}.md`]),
    ...Array.from({length:14},(_,i)=>['dafare',i+1,`src/content/dafare/fisica-zero/${ch.slug}/${i+1}.md`])];
  for (const [type,n,file] of files) {
    if (!fs.existsSync(path.join(root,file))) { missing.push(file); continue; }
    const {meta,body}=source(file);
    const rendered=await processor.render(body,{fileURL:pathToFileURL(path.join(root,file)),frontmatter:meta});
    const route=`${ch.slug}/${type}${n?'/'+n:''}`;
    const content=rendered.code.replace(/href="#([^"]+)"/g,(_,id)=>`href="#${route}~${id}"`);
    if (/class="katex-error"/.test(content)) throw Error('KaTeX rendering error in '+file);
    if (/<(?:script|iframe)\b/i.test(content)) throw Error('Unexpected active content: '+file);
    const anchors=Object.fromEntries([...body.matchAll(/^:{3,4}[a-z]+\{#([a-z0-9-]+)\s+titolo="([^"]+)"/gm)].map(m=>[m[1],m[2]]));
    pages[route]={route,chapter:ch.slug,type,n,title:meta.titolo,summary:meta.sommario||'',theory:meta.teoria||[],html:content,headings:rendered.metadata.headings,anchors};
    manifest.push({file,route,title:meta.titolo,figures:(content.match(/<figure\b/g)||[]).length,formulas:(content.match(/data-tex=/g)||[]).length});
    if(type==='teoria') {totals.teoria++;ch.summary=meta.sommario;}
    if(type==='svolti') {totals.schede++;totals.svolti+=(body.match(/^## Esercizio /gm)||[]).length;}
    if(type==='dafare') totals.tracce++;
  }
}
if(missing.length&&!partial) throw Error(`Anteprima incompleta: ${missing.length} file mancanti. Usare --partial solo durante la redazione.`);
totals.figure=manifest.reduce((n,p)=>n+p.figures,0);totals.formule=manifest.reduce((n,p)=>n+p.formulas,0);
const css=read('src/styles/global.css');
const embedUrls=(text,base)=>text.replace(/url\((['"]?)([^)'"\s]+)\1\)/g,(m,q,url)=>{
  if(url.startsWith('data:'))return m;
  const p=path.resolve(base,url), ext=path.extname(p).slice(1);
  return `url(data:font/${ext};base64,${fs.readFileSync(p).toString('base64')})`;
});
const fontCss=[];
for(const f of ['@fontsource-variable/source-serif-4/index.css','@fontsource-variable/source-serif-4/wght-italic.css','@fontsource/source-sans-3/400.css','@fontsource/source-sans-3/600.css','@fontsource/source-sans-3/700.css']){
  const abs=path.join(root,'node_modules',f);
  let c=fs.readFileSync(abs,'utf8');
  c=(c.match(/@font-face\s*\{[^}]+\}/g)||[]).filter(b=>/\/[^/]*-latin(?:-ext)?-/.test(b)).join('\n');
  c=c.replace(/,\s*url\([^)]*\.woff\)[^;]*;/g,';');
  fontCss.push(embedUrls(c,path.dirname(abs)));
}
let mathCss=read('node_modules/katex/dist/katex.min.css').replace(/,url\([^)]*\.(woff|ttf)\) format\([^)]*\)/g,'');
mathCss=embedUrls(mathCss,path.join(root,'node_modules/katex/dist'));
const logo='data:image/svg+xml;base64,'+fs.readFileSync(path.join(root,'public/logo.svg')).toString('base64');
const summary=`${totals.teoria} capitoli · ${totals.schede} schede svolte · ${totals.tracce} esercizi da fare`;
const chapterLinks=program.map((c,i)=>`<li data-chapter="${c.slug}"><details class="preview-chapter"><summary>${i+1}. ${esc(c.breve)}</summary><ol class="aperta"><li><a href="#${c.slug}/teoria">Teoria</a></li><li><a href="#${c.slug}/svolti">Esercizi svolti (8)</a></li><li><a href="#${c.slug}/dafare">Esercizi da fare (14)</a></li></ol></details></li>`).join('');
const index=`<p class="sopratitolo">Il programma</p><h1>Fisica zero</h1><p class="sommario">Per imparare la fisica dalle basi: misure, movimento, forze, energia, fluidi, calore e circuiti elettrici.</p><p class="preview-note">Bozza da verificare prima della pubblicazione.</p><p class="preview-counts">${summary}</p><ol class="griglia-argomenti">${program.map(c=>`<li><h2><a href="#${c.slug}/teoria">${esc(c.titolo)}</a></h2><p class="riassunto">${esc(c.summary||'Capitolo in redazione')}</p><nav aria-label="${esc(c.titolo)}"><a href="#${c.slug}/teoria">Teoria</a><a href="#${c.slug}/svolti">Esercizi svolti (8)</a><a href="#${c.slug}/dafare">Esercizi da fare (14)</a></nav></li>`).join('')}</ol>`;
const data=JSON.stringify({pages,program,index,totals}).replaceAll('<','\\u003c');
const html=`<!doctype html>
<html lang="it" style="--accento:#8a6a9a"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow"><meta name="color-scheme" content="light"><title>Fisica zero — Anteprima da verificare</title><link rel="icon" href="${logo}"><style>${fontCss.join('\n')}\n${mathCss}\n${css}
.preview-badge{margin-left:auto;font:600 .8rem var(--ui);color:var(--inchiostro-2);white-space:nowrap}.preview-note{font-family:var(--ui);font-size:.95rem;color:var(--inchiostro-2);padding:.75rem 1rem;border-left:3px solid var(--accento);background:color-mix(in srgb,var(--accento) 7%,var(--carta))}.preview-counts{font-family:var(--ui);font-size:.9rem;color:var(--inchiostro-2)}.preview-chapter{margin:.35rem 0}.preview-chapter>summary{padding:.4rem .5rem;cursor:pointer;font-weight:600}.preview-chapter:has(a.attiva)>summary{color:var(--accento)}.preview-chapter>summary{display:flex;align-items:center;gap:.5rem;list-style:none}.preview-chapter>summary::-webkit-details-marker{display:none}.preview-chapter>summary::before{content:"";width:.32rem;height:.32rem;border-right:1px solid var(--inchiostro-2);border-bottom:1px solid var(--inchiostro-2);opacity:.65;transform:rotate(-45deg);flex:none;margin-right:.1rem;transition:transform .15s}.preview-chapter[open]>summary::before{transform:rotate(45deg)}@media(prefers-reduced-motion:reduce){.preview-chapter>summary::before{transition:none}}.preview-tabs{display:flex;flex-wrap:wrap;gap:.4rem 1.1rem;font:600 .95rem var(--ui);border-bottom:1px solid var(--riga);padding-bottom:.7rem;margin-bottom:1.5rem}.preview-tabs a[aria-current]{color:var(--inchiostro);text-decoration:none}.preview-mobile{display:none}.preview-footer{margin:2rem 0 0;font-family:var(--ui);font-size:.85rem;color:var(--inchiostro-2)}.preview-back{font:600 .85rem var(--ui);margin:0 0 1rem}.pagina:focus{outline:none}.preview-file-note{font:400 .82rem var(--ui);color:var(--inchiostro-2);margin:.5rem 0 1rem}.review-print{font:inherit;background:none;border:1px solid var(--riga);border-radius:6px;padding:.3rem .6rem;cursor:pointer;color:var(--inchiostro-2)}.review-print:hover{background:var(--carta-2)}
@media(max-width:59.999rem){.preview-mobile{display:block;margin:0 0 1.2rem}.preview-mobile select{font:600 .95rem var(--ui);color:var(--inchiostro);background:var(--carta);width:100%;border:1px solid var(--riga);border-radius:6px;padding:.6rem}.preview-badge{font-size:.72rem}.review-print{display:none}}@media print{.preview-mobile,.preview-tabs,.preview-note,.preview-back,.review-print{display:none!important}.pagina{max-width:none}.preview-footer{display:none}.corpo{display:block}.testo-studio details:not([open])>:not(summary){display:block}.testo-studio details{content-visibility:visible}}
</style></head><body>
<header class="testata"><div class="testata-interna"><a class="marchio" href="#programma"><img class="logo" src="${logo}" alt="" width="32" height="32"><span>Ripetizioni di Analisi</span></a><a class="materia-corrente" href="#programma">Fisica zero</a><span class="preview-badge">Anteprima · non pubblicata</span><button class="review-print" id="print-page" type="button">Stampa pagina</button></div></header>
<div class="corpo"><aside class="indice" aria-label="Indice di Fisica zero"><p class="indice-testa"><a href="#programma">Programma</a></p><label class="indice-cerca"><input id="chapter-search" type="search" aria-label="Cerca un capitolo" placeholder="Cerca un capitolo…"></label><ol>${chapterLinks}</ol><p class="preview-file-note">${summary}</p></aside><main><div class="pagina" id="page" tabindex="-1">${index}</div></main></div>
<footer class="pie"><span>Ripetizioni di Analisi · Fisica zero</span><span>Bozza per la revisione dei contenuti</span></footer>
<script id="preview-data" type="application/json">${data}</script><script>
const DATA=JSON.parse(document.getElementById('preview-data').textContent);const page=document.getElementById('page');
const escapeText=s=>String(s??'').replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const label=t=>({teoria:'Teoria',svolti:'Esercizi svolti',dafare:'Esercizi da fare'}[t]);
function mobile(ch){return '<div class="preview-mobile"><label for="chapter-select" class="sopratitolo">Indice del corso</label><select id="chapter-select"><option value="programma">Programma completo</option>'+DATA.program.map((c,i)=>'<option value="'+c.slug+'/teoria"'+(ch?.slug===c.slug?' selected':'')+'>'+(i+1)+'. '+escapeText(c.breve)+'</option>').join('')+'</select></div>'}
function tabs(ch,type){return '<nav class="preview-tabs" aria-label="Sezioni del capitolo">'+['teoria','svolti','dafare'].map(t=>'<a href="#'+ch.slug+'/'+t+'"'+(t===type?' aria-current="page"':'')+'>'+label(t)+'</a>').join('')+'</nav>'}
function listHtml(ch,type){const entries=Object.values(DATA.pages).filter(p=>p.chapter===ch.slug&&p.type===type).sort((a,b)=>a.n-b.n);return '<p class="sopratitolo">'+label(type)+'</p><h1>'+escapeText(ch.titolo)+'</h1><ul class="elenco-esercizi">'+entries.map(p=>'<li><a href="#'+p.route+'"><span class="numero">'+p.n+'</span><span>'+escapeText(p.title)+'</span></a></li>').join('')+'</ul>'}
function adjustMath(){page.querySelectorAll('.katex-display').forEach(d=>{const k=d.querySelector('.katex');if(!k)return;k.style.fontSize='';const w=d.clientWidth,l=k.scrollWidth;if(w&&l>w)k.style.fontSize=Math.max(.74,(w/l)*1.08-.01)+'em'})}
function show(){const raw=decodeURIComponent(location.hash.slice(1))||'programma';const [route,anchor]=raw.split('~');const [slug,type,n]=route.split('/');const ch=DATA.program.find(c=>c.slug===slug);let h='';
if(!ch){h=mobile()+DATA.index;document.title='Fisica zero — Anteprima da verificare';}else{h=mobile(ch)+'<nav class="percorso" aria-label="Percorso"><ol><li><a href="#programma">Fisica zero</a></li><li>'+escapeText(ch.breve)+'</li><li>'+label(type)+'</li></ol></nav>'+tabs(ch,type);const p=DATA.pages[route];
if((type==='svolti'||type==='dafare')&&!n){h+=listHtml(ch,type);document.title=label(type)+' · '+ch.breve+' · Fisica zero';}
else if(p){h+='<p class="sopratitolo">'+label(type)+(n?' · '+(type==='svolti'?'Scheda ':'Esercizio ')+n:'')+'</p><h1>'+escapeText(p.title)+'</h1>'+(p.summary?'<p class="sommario">'+escapeText(p.summary)+'</p>':'');
if(p.theory.length){h+='<p class="collegamenti">Teoria usata: '+p.theory.map(a=>'<a href="#'+slug+'/teoria~'+a+'">'+escapeText(DATA.pages[slug+'/teoria']?.anchors?.[a]||a.replaceAll('-',' '))+'</a>').join(' · ')+'</p>'}
if(p.headings.length>1){h+='<details class="sommario-pagina"><summary>In questa pagina</summary><ol>'+p.headings.filter(x=>x.depth===2).map(x=>'<li><a href="#'+route+'~'+x.slug+'">'+escapeText(x.text)+'</a></li>').join('')+'</ol></details>'}
h+='<div class="testo-studio">'+p.html+'</div>';const all=Object.values(DATA.pages).filter(x=>x.chapter===slug&&x.type===type).sort((a,b)=>(a.n||0)-(b.n||0));const i=all.findIndex(x=>x.route===route),next=all[i+1];h+='<nav class="passi">'+(next?'<a class="successivo" href="#'+next.route+'"><small>Continua</small><span>'+escapeText(next.title)+'</span><span class="freccia-avanti">→</span></a>':type==='teoria'?'<a class="successivo" href="#'+slug+'/svolti"><small>Continua</small><span>Esercizi svolti</span><span class="freccia-avanti">→</span></a>':'')+'<a class="precedente" href="#'+(type==='teoria'?'programma':slug+'/'+type)+'">← '+(type==='teoria'?'Programma':'Tutti gli esercizi')+'</a></nav>';document.title=p.title+' · Fisica zero · Anteprima';}
else{h+='<p>Questa pagina è ancora in redazione.</p>'}}
page.innerHTML=h+'<p class="preview-footer">Bozza da verificare prima della pubblicazione.</p>';
if(ch&&type==='teoria'){const uses={};Object.values(DATA.pages).filter(p=>p.chapter===slug&&p.type!=='teoria').forEach(p=>p.theory.forEach(a=>{(uses[a]??={svolti:[],dafare:[]})[p.type].push(p)}));for(const [id,u]of Object.entries(uses)){const block=document.getElementById(id);if(!block||!page.contains(block))continue;const parts=[];for(const t of ['svolti','dafare'])if(u[t].length)parts.push((t==='svolti'?'svolti':'da fare')+' '+u[t].map(p=>'<a href="#'+p.route+'">'+p.n+'</a>').join(', '));const links=document.createElement('p');links.className='blocco-esercizi';links.innerHTML='Esercizi: '+parts.join(' · ');block.appendChild(links)}}
document.querySelectorAll('.indice a').forEach(a=>{a.classList.toggle('attiva',a.hash==='#'+slug+'/'+type);if(a.classList.contains('attiva'))a.closest('details').open=true});
page.querySelector('#chapter-select')?.addEventListener('change',e=>location.hash=e.target.value);adjustMath();document.fonts?.ready.then(adjustMath);if(anchor){requestAnimationFrame(()=>{const el=document.getElementById(anchor);if(el&&page.contains(el))el.scrollIntoView({block:'start'});})}else{window.scrollTo({top:0,behavior:'instant'})}}
window.addEventListener('hashchange',show);window.addEventListener('resize',adjustMath);document.getElementById('chapter-search').addEventListener('input',e=>{const term=e.target.value.toLocaleLowerCase('it');document.querySelectorAll('[data-chapter]').forEach(li=>li.hidden=!li.textContent.toLocaleLowerCase('it').includes(term))});document.getElementById('print-page').addEventListener('click',()=>window.print());show();
</script></body></html>`;
fs.mkdirSync(path.dirname(output),{recursive:true});fs.writeFileSync(output,html);
fs.mkdirSync(path.join(root,'review-tools/qa-site/dist'),{recursive:true});
fs.mkdirSync(path.join(root,'review-tools/qa-site/.openai'),{recursive:true});
fs.writeFileSync(path.join(root,'review-tools/qa-site/.openai/hosting.json'),JSON.stringify({static:{directory:'dist'}},null,2));
fs.writeFileSync(path.join(root,'review-tools/qa-site/dist/index.html'),html);
fs.writeFileSync(path.join(root,'review-checks/preview-manifest.json'),JSON.stringify({totals,complete:!missing.length,missing,files:manifest},null,2));
console.log(JSON.stringify({output,bytes:Buffer.byteLength(html),...totals,missing:missing.length}));
