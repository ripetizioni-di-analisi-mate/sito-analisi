// Pagina della dashboard riservata (/admin). I dati arrivano da /admin/api/*.
const NOMI = { precorso: 'Precorso', 'analisi-1': 'Analisi matematica 1', 'analisi-2': 'Analisi matematica 2', 'algebra-lineare': 'Algebra lineare e geometria analitica' };

export function paginaAdmin(materie) {
  const caselle = materie.map((m) => `<label class="casella"><input type="checkbox" value="${m}"> ${NOMI[m] || m}</label>`).join('');
  return `<!doctype html><html lang="it"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
<title>Dashboard · Ripetizioni di Analisi</title><style>
:root{--carta:#faf8f2;--inchiostro:#22302f;--grigio:#5a6664;--riga:#ddd6c8;--acc:#2f6f68;--rosso:#b23c2a}
*{box-sizing:border-box}body{margin:0;background:var(--carta);color:var(--inchiostro);font:15px/1.5 'Source Sans 3',system-ui,sans-serif;padding:1rem}
main{max-width:68rem;margin:0 auto}h1{font-size:1.4rem;margin:.2rem 0 1rem}
h2{font-size:1.05rem;margin:2rem 0 .6rem;border-bottom:1px solid var(--riga);padding-bottom:.35rem;display:flex;justify-content:space-between;align-items:baseline;gap:1rem}
table{border-collapse:collapse;width:100%;font-size:.9rem}td,th{border-bottom:1px solid var(--riga);padding:.4rem .5rem;text-align:left;vertical-align:top}th{color:var(--grigio);font-weight:600}
.tabella{overflow-x:auto;background:#fff;border:1px solid var(--riga);border-radius:8px}
.schede{display:grid;grid-template-columns:repeat(auto-fit,minmax(9.5rem,1fr));gap:.7rem}
.scheda{border:1px solid var(--riga);border-radius:8px;padding:.7rem .9rem;background:#fff}
.scheda b{display:block;font-size:1.5rem;color:var(--acc)}.scheda span{font-size:.85rem;color:var(--grigio)}
input,button{font:inherit;padding:.5rem .7rem;border:1px solid var(--riga);border-radius:6px;background:#fff;color:var(--inchiostro)}
button{background:var(--acc);color:#fff;border-color:var(--acc);cursor:pointer}button.secondario{background:#fff;color:var(--inchiostro);border-color:var(--riga)}
button.piccolo{padding:.15rem .5rem;font-size:.8rem;background:#fff;color:var(--rosso);border-color:var(--riga)}
.riga-modulo{display:flex;flex-wrap:wrap;gap:.6rem;align-items:center}.casella{display:inline-flex;gap:.3rem;align-items:center}
.esito{background:#fff;border:1px dashed var(--acc);padding:.6rem .8rem;border-radius:6px;margin-top:.6rem;display:none;word-break:break-all}
.barre{display:flex;align-items:flex-end;gap:3px;height:90px;margin:.6rem 0}.barre div{flex:1;background:var(--acc);border-radius:2px 2px 0 0;min-height:2px}
.nota{color:var(--grigio);font-size:.85rem;font-weight:400}#login{max-width:22rem;margin:15vh auto;text-align:center}
.pill{display:inline-block;font-size:.78rem;padding:0 .45rem;border-radius:999px;background:#e8efed;color:var(--acc);margin:0 .2rem .2rem 0}
.pill.manuale{background:#f3ece0;color:#8a5a1a}
.pill.dispositivo{background:#eef0f4;color:#3b4a5a}
</style></head><body>
<div id="login"><h1>Dashboard</h1><form onsubmit="entra();return false"><p><input id="pw" type="password" placeholder="Password" style="width:100%" autocomplete="current-password"></p><p><button>Entra</button></p></form><p class="nota" id="login-errore"></p></div>
<main id="pannello" hidden>
<h1>Ripetizioni di Analisi · Dashboard</h1>
<div class="schede" id="totali"></div>

<h2>Attiva materie <span class="nota">per chi ha pagato in altro modo: se non ha ancora l'account, le trova appena si registra con questa email</span></h2>
<div class="riga-modulo"><input id="a-email" type="email" placeholder="email dello studente" style="min-width:16rem">${caselle}<button onclick="abilita()">Attiva</button></div>
<div class="esito" id="esito-abilita"></div>

<h2>Reimposta password <span class="nota">genera una password provvisoria da comunicare allo studente e scollega i suoi dispositivi</span></h2>
<div class="riga-modulo"><input id="r-email" type="email" placeholder="email dell'account" style="min-width:16rem"><button class="secondario" onclick="reimposta()">Genera password provvisoria</button></div>
<div class="esito" id="esito-reset"></div>

<h2>Iscritti <span><input id="filtro" placeholder="Cerca email" oninput="disegnaIscritti()" style="padding:.3rem .6rem"> <button class="secondario" onclick="esporta()">Esporta CSV</button></span></h2>
<div class="tabella"><table id="iscritti"></table></div>

<h2>Pagamenti</h2>
<div class="tabella"><table id="pagamenti"></table></div>

<h2>Visite <span class="nota" id="visite-note"></span></h2>
<div class="barre" id="barre"></div>
<div class="tabella"><table id="sezioni"></table></div>
</main>
<script>
const NOMI=${JSON.stringify(NOMI)};
let D=null;
const esc=s=>String(s??'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
async function api(p,corpo){const r=await fetch('/admin/api/'+p,{method:corpo?'POST':'GET',headers:{'content-type':'application/json'},body:corpo?JSON.stringify(corpo):undefined});if(r.status===401)throw 401;return r.json()}
async function entra(){const pw=document.getElementById('pw').value;const r=await fetch('/admin/api/login',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({pw})});if(r.ok){carica()}else{document.getElementById('login-errore').textContent='Password sbagliata.'}}
function dataIt(s){if(!s)return '';const d=new Date(s);return d.toLocaleDateString('it-IT',{day:'2-digit',month:'2-digit',year:'2-digit'})+' '+d.toLocaleTimeString('it-IT',{hour:'2-digit',minute:'2-digit'})}
async function carica(){
  try{D=await api('dati')}catch(e){return}
  document.getElementById('login').hidden=true;document.getElementById('pannello').hidden=false;
  const incasso=D.totali.reduce((a,t)=>a+(t.incasso||0),0),vendite=D.totali.reduce((a,t)=>a+t.vendite,0);
  const paganti=new Set(D.acquisti.map(a=>a.email)).size;
  const oggi=new Date().toISOString().slice(0,10);
  const vOggi=(D.visite.find(v=>v.giorno===oggi)||{}).n||0,v30=D.visite.reduce((a,v)=>a+v.n,0);
  document.getElementById('totali').innerHTML=[[D.utenti.length,'iscritti'],[paganti,'clienti paganti'],[vendite,'vendite'],[incasso.toFixed(2)+' €','incasso lordo'],[vOggi,'visite oggi'],[v30,'visite 30 giorni']]
    .map(([n,t])=>'<div class="scheda"><b>'+n+'</b><span>'+t+'</span></div>').join('');
  disegnaIscritti();
  document.getElementById('pagamenti').innerHTML='<tr><th>Data</th><th>Email</th><th>Materia</th><th>Importo</th><th>Transazione</th></tr>'+
    (D.acquisti.length?D.acquisti.map(a=>'<tr><td>'+dataIt(a.creato)+'</td><td>'+esc(a.email)+'</td><td>'+esc(NOMI[a.materia]||a.materia)+'</td><td>'+Number(a.importo).toFixed(2)+' '+esc(a.valuta)+'</td><td class="nota">'+esc(a.transazione)+'</td></tr>').join(''):'<tr><td colspan="5" class="nota">Nessun pagamento ancora.</td></tr>');
  const giorni=[...D.visite].reverse(),max=Math.max(1,...giorni.map(g=>g.n));
  document.getElementById('barre').innerHTML=giorni.map(g=>'<div style="height:'+Math.round(g.n/max*100)+'%" title="'+g.giorno+': '+g.n+'"></div>').join('');
  document.getElementById('visite-note').textContent=giorni.length?('ultimi 30 giorni, dal '+giorni[0].giorno):'nessuna visita registrata';
  document.getElementById('sezioni').innerHTML='<tr><th>Sezione più visitata</th><th>Visite</th></tr>'+D.visitePerSezione.map(s=>'<tr><td>'+esc(s.sezione)+'</td><td>'+s.n+'</td></tr>').join('');
}
function disegnaIscritti(){
  if(!D)return;
  const f=document.getElementById('filtro').value.trim().toLowerCase();
  const origine={};D.abilitazioni.forEach(a=>{origine[a.email+'|'+a.materia]=a.origine});
  const righe=D.utenti.filter(u=>!f||u.email.includes(f));
  // abilitazioni manuali di email non ancora registrate
  const registrati=new Set(D.utenti.map(u=>u.email));
  const inAttesa=[...new Set(D.abilitazioni.filter(a=>!registrati.has(a.email)&&(!f||a.email.includes(f))).map(a=>a.email))];
  const pill=(email,m)=>'<span class="pill '+(origine[email+'|'+m]==='manuale'?'manuale':'')+'">'+esc(NOMI[m]||m)+' <button class="piccolo" title="Revoca" onclick="revoca(\\''+esc(email)+'\\',\\''+m+'\\')">×</button></span>';
  const disp={};(D.dispositivi||[]).forEach(d=>{(disp[d.email]||=[]).push(d)});
  const celDisp=email=>{const l=disp[email]||[];return l.length?(l.map(d=>'<span class="pill dispositivo">'+esc(d.nome)+'</span>').join('')+' <button class="piccolo" title="Scollega tutti i dispositivi" onclick="scollega(\\''+esc(email)+'\\')">scollega</button>'):'<span class="nota">nessuno</span>'};
  document.getElementById('iscritti').innerHTML='<tr><th>Email</th><th>Iscritto il</th><th>Ultimo accesso</th><th>Materie sbloccate</th><th>Dispositivi (max 2)</th></tr>'+
    righe.map(u=>'<tr><td>'+esc(u.email)+'</td><td>'+dataIt(u.creato)+'</td><td>'+dataIt(u.ultimo_accesso)+'</td><td>'+(u.materie?u.materie.split(', ').map(m=>pill(u.email,m)).join(''):'<span class="nota">nessuna</span>')+'</td><td>'+celDisp(u.email)+'</td></tr>').join('')+
    inAttesa.map(e=>'<tr><td>'+esc(e)+'</td><td class="nota" colspan="2">non ancora registrato</td><td>'+D.abilitazioni.filter(a=>a.email===e).map(a=>pill(e,a.materia)).join('')+'</td><td></td></tr>').join('')+
    (righe.length+inAttesa.length?'':'<tr><td colspan="5" class="nota">Nessun iscritto.</td></tr>');
}
async function abilita(){
  const email=document.getElementById('a-email').value.trim();
  const materie=[...document.querySelectorAll('.casella input:checked')].map(c=>c.value);
  const e=document.getElementById('esito-abilita');
  if(!email||!materie.length){e.style.display='block';e.textContent='Scrivi l\\'email e scegli almeno una materia.';return}
  const r=await api('abilita',{email,materie});
  e.style.display='block';
  e.innerHTML=r.errore?esc(r.errore):('Fatto: '+materie.map(m=>NOMI[m]||m).join(', ')+' per <b>'+esc(email)+'</b>. '+(r.account?'Lo studente le vede già nel suo account.':'Le troverà appena si registra con questa email su ripetizionidianalisi.com/accedi.'));
  carica();
}
async function scollega(email){if(!confirm('Scollegare tutti i dispositivi di '+email+'? Dovrà accedere di nuovo.'))return;await api('scollega',{email});carica()}
async function revoca(email,materia){if(!confirm('Revocare '+(NOMI[materia]||materia)+' a '+email+'?'))return;await api('revoca',{email,materia});carica()}
async function reimposta(){
  const email=document.getElementById('r-email').value.trim();if(!email)return;
  const r=await api('reset',{email});const e=document.getElementById('esito-reset');e.style.display='block';
  e.innerHTML=r.errore?esc(r.errore):('Password provvisoria per <b>'+esc(email)+'</b>: <b>'+esc(r.password)+'</b><br><span class="nota">Comunicala allo studente: potrà cambiarla dal suo account. Le sessioni aperte con la vecchia password vengono chiuse.</span>');
}
function esporta(){
  if(!D)return;const righe=[['email','iscritto','ultimo_accesso','materie']].concat(D.utenti.map(u=>[u.email,u.creato,u.ultimo_accesso||'',u.materie||'']));
  const csv=righe.map(r=>r.map(c=>'"'+String(c).replace(/"/g,'""')+'"').join(',')).join('\\n');
  const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([csv],{type:'text/csv'}));a.download='iscritti.csv';a.click();
}
carica();
</script></body></html>`;
}
