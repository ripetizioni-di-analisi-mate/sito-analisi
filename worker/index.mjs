// Worker del sito: serve le pagine statiche e aggiunge gli accessi a pagamento.
//  - oscuramento lato server (teoria a metà, schede oltre la 3ª, soluzioni, PDF);
//  - link personali di accesso firmati (/accesso?t=...) che impostano il cookie;
//  - dashboard riservata /admin (visite, vendite, clienti, genera accesso);
//  - webhook Paddle per gli acquisti automatici.
// Le materie a pagamento sono quelle con "prezzo" in src/data/materie.ts:
// tenere allineato l'elenco qui sotto.
const A_PAGAMENTO = ['analisi-1', 'analisi-2'];
const SCHEDE_LIBERE = 3; // le prime N schede svolte di ogni argomento restano aperte

// ---------- firvia HMAC ----------
async function chiave(env) {
  const segreto = env.CHIAVE_ACCESSO || 'chiave-provvisoria';
  return crypto.subtle.importKey('raw', new TextEncoder().encode(segreto), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign', 'verify']);
}
const b64 = (buf) => btoa(String.fromCharCode(...new Uint8Array(buf))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
const b64dec = (s) => Uint8Array.from(atob(s.replace(/-/g, '+').replace(/_/g, '/')), (c) => c.charCodeAt(0));

export async function firmaToken(env, dati) {
  const corpo = b64(new TextEncoder().encode(JSON.stringify(dati)));
  const mac = await crypto.subtle.sign('HMAC', await chiave(env), new TextEncoder().encode(corpo));
  return `${corpo}.${b64(mac)}`;
}
async function leggiToken(env, token) {
  try {
    const [corpo, mac] = token.split('.');
    const ok = await crypto.subtle.verify('HMAC', await chiave(env), b64dec(mac), new TextEncoder().encode(corpo));
    if (!ok) return null;
    return JSON.parse(new TextDecoder().decode(b64dec(corpo)));
  } catch { return null; }
}
function cookieAccesso(req) {
  const m = (req.headers.get('cookie') || '').match(/(?:^|;\s*)accesso=([^;]+)/);
  return m ? decodeURIComponent(m[1]) : null;
}
async function materieSbloccate(env, req) {
  const t = cookieAccesso(req);
  if (!t) return [];
  const dati = await leggiToken(env, t);
  return dati?.m ?? [];
}

// ---------- archivio (Durable Object con SQLite) ----------
export class Archivio {
  constructor(state) {
    this.sql = state.storage.sql;
    this.sql.exec(`
      CREATE TABLE IF NOT EXISTS accessi (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT, materie TEXT, origine TEXT, creato TEXT);
      CREATE TABLE IF NOT EXISTS acquisti (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT, materia TEXT, importo REAL, valuta TEXT, transazione TEXT UNIQUE, creato TEXT);
      CREATE TABLE IF NOT EXISTS visite (giorno TEXT, sezione TEXT, n INTEGER, PRIMARY KEY (giorno, sezione));
    `);
  }
  async fetch(req) {
    const { pathname } = new URL(req.url);
    const corpo = req.method === 'POST' ? await req.json() : {};
    if (pathname === '/visita') {
      this.sql.exec(`INSERT INTO visite (giorno, sezione, n) VALUES (?, ?, 1)
                     ON CONFLICT(giorno, sezione) DO UPDATE SET n = n + 1`, corpo.giorno, corpo.sezione);
      return Response.json({ ok: true });
    }
    if (pathname === '/registra-accesso') {
      this.sql.exec('INSERT INTO accessi (email, materie, origine, creato) VALUES (?, ?, ?, ?)',
        corpo.email, corpo.materie.join(','), corpo.origine, new Date().toISOString());
      return Response.json({ ok: true });
    }
    if (pathname === '/registra-acquisto') {
      try {
        this.sql.exec('INSERT INTO acquisti (email, materia, importo, valuta, transazione, creato) VALUES (?, ?, ?, ?, ?, ?)',
          corpo.email, corpo.materia, corpo.importo, corpo.valuta, corpo.transazione, new Date().toISOString());
      } catch { return Response.json({ ok: false, doppio: true }); }
      return Response.json({ ok: true });
    }
    if (pathname === '/dati') {
      const righe = (q, ...p) => [...this.sql.exec(q, ...p)];
      return Response.json({
        visite: righe(`SELECT giorno, SUM(n) AS n FROM visite GROUP BY giorno ORDER BY giorno DESC LIMIT 30`),
        visitePerSezione: righe(`SELECT sezione, SUM(n) AS n FROM visite GROUP BY sezione ORDER BY n DESC LIMIT 12`),
        acquisti: righe(`SELECT * FROM acquisti ORDER BY id DESC LIMIT 200`),
        accessi: righe(`SELECT * FROM accessi ORDER BY id DESC LIMIT 200`),
        totali: righe(`SELECT materia, COUNT(*) AS vendite, SUM(importo) AS incasso FROM acquisti GROUP BY materia`),
      });
    }
    return new Response('non trovato', { status: 404 });
  }
}
const archivio = (env) => env.ARCHIVIO.get(env.ARCHIVIO.idFromName('unico'));
const aDO = (env, percorso, dati) => archivio(env).fetch('https://archivio' + percorso, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(dati) });

// ---------- percorsi protetti ----------
function analizza(pathname) {
  // → { materia, argomento, tipo, n } per i percorsi dei contenuti
  let m = pathname.match(/^\/pdf\/([^/]+)\/([^/]+)\.pdf$/);
  if (m) return { materia: m[1], argomento: m[2], tipo: 'pdf' };
  m = pathname.match(/^\/([^/]+)\/([^/]+)\/(teoria|stampa|esercizi-svolti|esercizi)(?:\/(\d+))?\/?$/);
  if (m) return { materia: m[1], argomento: m[2], tipo: m[3], n: m[4] ? Number(m[4]) : undefined };
  return null;
}

async function rispostaVetrina(env, req, percorso, stato = 200) {
  const u = new URL(req.url); u.pathname = percorso; u.search = '';
  const r = await env.ASSETS.fetch(new Request(u, { headers: req.headers }));
  return new Response(r.body, { status: stato, headers: r.headers });
}

// ---------- Paddle ----------
async function verificaPaddle(req, corpo, segreto) {
  const firma = req.headers.get('paddle-signature') || '';
  const ts = firma.match(/ts=(\d+)/)?.[1];
  const h1 = firma.match(/h1=([0-9a-f]+)/)?.[1];
  if (!ts || !h1) return false;
  const k = await crypto.subtle.importKey('raw', new TextEncoder().encode(segreto), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const mac = await crypto.subtle.sign('HMAC', k, new TextEncoder().encode(`${ts}:${corpo}`));
  const esad = [...new Uint8Array(mac)].map((b) => b.toString(16).padStart(2, '0')).join('');
  return esad === h1;
}

async function inviaEmailAccesso(env, email, link, materie) {
  if (!env.RESEND_API_KEY || !env.MITTENTE) return false;
  const r = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { authorization: `Bearer ${env.RESEND_API_KEY}`, 'content-type': 'application/json' },
    body: JSON.stringify({
      from: env.MITTENTE, to: [email],
      subject: 'Il tuo accesso a Ripetizioni di Analisi',
      text: `Ciao!\n\nQuesto è il tuo link personale di accesso (${materie.join(', ')}):\n\n${link}\n\nAprilo su ogni dispositivo in cui vuoi usare il sito: i contenuti si sbloccano da soli. Conservalo.\n\nCarmine · Ripetizioni di Analisi`,
    }),
  });
  return r.ok;
}

async function creaAccesso(env, origine, email, materie) {
  const token = await firmaToken(env, { e: email, m: materie, t: Date.now() });
  await aDO(env, '/registra-accesso', { email, materie, origine });
  return token;
}

// ---------- pagina admin ----------
function paginaAdmin() {
  return `<!doctype html><html lang="it"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Dashboard · Ripetizioni di Analisi</title><style>
:root{--carta:#faf8f2;--inchiostro:#2b2a26;--grigio:#6b6a64;--riga:#e4e0d4;--acc:#2f6f68;}
body{margin:0;background:var(--carta);color:var(--inchiostro);font:16px/1.5 system-ui,sans-serif;padding:1rem;}
main{max-width:60rem;margin:0 auto;}h1{font-size:1.4rem}h2{font-size:1.05rem;margin:1.8rem 0 .5rem;border-bottom:1px solid var(--riga);padding-bottom:.3rem}
table{border-collapse:collapse;width:100%;font-size:.9rem}td,th{border-bottom:1px solid var(--riga);padding:.35rem .5rem;text-align:left}
.schede{display:grid;grid-template-columns:repeat(auto-fit,minmax(10rem,1fr));gap:.7rem;margin:.8rem 0}
.scheda{border:1px solid var(--riga);border-radius:8px;padding:.7rem .9rem;background:#fff}
.scheda b{display:block;font-size:1.5rem;color:var(--acc)}.scheda span{font-size:.8rem;color:var(--grigio);text-transform:uppercase;letter-spacing:.05em}
input,select,button{font:inherit;padding:.5rem .7rem;border:1px solid var(--riga);border-radius:6px}
button{background:var(--acc);color:#fff;border-color:var(--acc);cursor:pointer}
#esito-genera{word-break:break-all;background:#fff;border:1px dashed var(--acc);padding:.6rem;border-radius:6px;margin-top:.6rem;display:none}
.barre{display:flex;align-items:flex-end;gap:3px;height:90px;margin:.6rem 0}.barre div{flex:1;background:var(--acc);border-radius:2px 2px 0 0;min-height:2px}
.nota{color:var(--grigio);font-size:.85rem}#login{max-width:22rem;margin:15vh auto;text-align:center}
</style></head><body>
<div id="login"><h1>Dashboard</h1><p><input id="pw" type="password" placeholder="Password" style="width:100%"></p><p><button onclick="entra()">Entra</button></p><p class="nota" id="login-errore"></p></div>
<main id="pannello" hidden>
<h1>Ripetizioni di Analisi · Dashboard</h1>
<div class="schede" id="totali"></div>
<h2>Visite (ultimi 30 giorni)</h2><div class="barre" id="barre"></div><p class="nota" id="visite-note"></p>
<h2>Genera accesso <span class="nota">(per chi ha pagato in altro modo)</span></h2>
<p><input id="g-email" type="email" placeholder="email dello studente" style="width:16rem">
<select id="g-materie"><option value="analisi-1">Analisi 1</option><option value="analisi-2">Analisi 2</option><option value="analisi-1,analisi-2">Analisi 1 + 2</option></select>
<button onclick="genera()">Genera link</button></p>
<div id="esito-genera"></div>
<h2>Acquisti</h2><table id="acquisti"><tr><th>Data</th><th>Email</th><th>Materia</th><th>Importo</th></tr></table>
<h2>Accessi consegnati</h2><table id="accessi"><tr><th>Data</th><th>Email</th><th>Materie</th><th>Origine</th></tr></table>
<h2>Sezioni più visitate</h2><table id="sezioni"><tr><th>Sezione</th><th>Visite</th></tr></table>
</main>
<script>
async function api(p,corpo){const r=await fetch('/admin/api/'+p,{method:corpo?'POST':'GET',headers:{'content-type':'application/json'},body:corpo?JSON.stringify(corpo):undefined});if(r.status===401)throw 401;return r.json()}
async function entra(){const pw=document.getElementById('pw').value;const r=await fetch('/admin/api/login',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({pw})});if(r.ok){carica()}else{document.getElementById('login-errore').textContent='Password sbagliata.'}}
function dataIt(s){return new Date(s).toLocaleDateString('it-IT',{day:'2-digit',month:'2-digit'})+' '+new Date(s).toLocaleTimeString('it-IT',{hour:'2-digit',minute:'2-digit'})}
async function carica(){
  let d;try{d=await api('dati')}catch(e){return}
  document.getElementById('login').hidden=true;document.getElementById('pannello').hidden=false;
  const incasso=d.totali.reduce((a,t)=>a+(t.incasso||0),0), vendite=d.totali.reduce((a,t)=>a+t.vendite,0);
  const oggi=new Date().toISOString().slice(0,10);
  const vOggi=(d.visite.find(v=>v.giorno===oggi)||{}).n||0, v30=d.visite.reduce((a,v)=>a+v.n,0);
  document.getElementById('totali').innerHTML=
    '<div class="scheda"><b>'+vOggi+'</b><span>visite oggi</span></div>'+
    '<div class="scheda"><b>'+v30+'</b><span>visite 30 giorni</span></div>'+
    '<div class="scheda"><b>'+vendite+'</b><span>vendite</span></div>'+
    '<div class="scheda"><b>'+incasso.toFixed(2)+' €</b><span>incasso lordo</span></div>'+
    '<div class="scheda"><b>'+d.accessi.length+'</b><span>accessi consegnati</span></div>';
  const giorni=[...d.visite].reverse(), max=Math.max(1,...giorni.map(g=>g.n));
  document.getElementById('barre').innerHTML=giorni.map(g=>'<div style="height:'+Math.round(g.n/max*100)+'%" title="'+g.giorno+': '+g.n+'"></div>').join('');
  document.getElementById('visite-note').textContent=giorni.length?('dal '+giorni[0].giorno):'nessuna visita registrata ancora';
  document.getElementById('acquisti').innerHTML='<tr><th>Data</th><th>Email</th><th>Materia</th><th>Importo</th></tr>'+d.acquisti.map(a=>'<tr><td>'+dataIt(a.creato)+'</td><td>'+a.email+'</td><td>'+a.materia+'</td><td>'+a.importo+' '+a.valuta+'</td></tr>').join('');
  document.getElementById('accessi').innerHTML='<tr><th>Data</th><th>Email</th><th>Materie</th><th>Origine</th></tr>'+d.accessi.map(a=>'<tr><td>'+dataIt(a.creato)+'</td><td>'+a.email+'</td><td>'+a.materie+'</td><td>'+a.origine+'</td></tr>').join('');
  document.getElementById('sezioni').innerHTML='<tr><th>Sezione</th><th>Visite</th></tr>'+d.visitePerSezione.map(s=>'<tr><td>'+s.sezione+'</td><td>'+s.n+'</td></tr>').join('');
}
async function genera(){
  const email=document.getElementById('g-email').value.trim();
  const materie=document.getElementById('g-materie').value.split(',');
  if(!email)return;
  const r=await api('genera',{email,materie});
  const e=document.getElementById('esito-genera');e.style.display='block';
  e.innerHTML='Link personale per <b>'+email+'</b> (copialo e mandaglielo):<br>'+r.link+(r.email_inviata?'<br><span class="nota">Inviato anche per email.</span>':'');
  carica();
}
carica();
</script></body></html>`;
}

// ---------- worker ----------
export default {
  async fetch(req, env, ctx) {
    const url = new URL(req.url);
    const p = url.pathname.replace(/\.html$/, '');
    const vendita = env.VENDITA !== '0';

    // --- link personale di accesso ---
    if (p === '/accesso') {
      const dati = await leggiToken(env, url.searchParams.get('t') || '');
      if (!dati) return new Response('Link di accesso non valido.', { status: 403, headers: { 'content-type': 'text/plain; charset=utf-8' } });
      const cookie = `accesso=${encodeURIComponent(url.searchParams.get('t'))}; Path=/; Max-Age=31536000; HttpOnly; Secure; SameSite=Lax`;
      return new Response(`<!doctype html><html lang="it"><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<body style="font-family:system-ui;background:#faf8f2;color:#2b2a26;display:grid;place-items:center;min-height:90vh;text-align:center;padding:1rem">
<div><h1>Accesso attivato ✓</h1><p>Su questo dispositivo ora sono sbloccati: <b>${dati.m.join(', ')}</b>.</p>
<p>Conserva il link: aprilo su ogni altro dispositivo in cui vuoi usare il sito.</p>
<p><a href="/" style="color:#2f6f68">Vai al sito →</a></p></div></body></html>`,
        { headers: { 'content-type': 'text/html; charset=utf-8', 'set-cookie': cookie } });
    }

    // --- webhook Paddle ---
    if (p === '/api/paddle/webhook' && req.method === 'POST') {
      const corpo = await req.text();
      if (!env.PADDLE_WEBHOOK_SECRET || !(await verificaPaddle(req, corpo, env.PADDLE_WEBHOOK_SECRET)))
        return new Response('firma non valida', { status: 401 });
      const ev = JSON.parse(corpo);
      if (ev.event_type === 'transaction.completed') {
        const d = ev.data;
        const email = d.customer?.email || d.customs?.email || '';
        const materia = d.custom_data?.materia || d.items?.[0]?.price?.custom_data?.materia || '';
        const importo = Number(d.details?.totals?.total || 0) / 100;
        if (email && materia) {
          await aDO(env, '/registra-acquisto', { email, materia, importo, valuta: d.currency_code || 'EUR', transazione: d.id });
          const token = await creaAccesso(env, 'paddle', email, [materia]);
          const link = `${url.origin}/accesso?t=${token}`;
          ctx.waitUntil(inviaEmailAccesso(env, email, link, [materia]));
        }
      }
      return Response.json({ ok: true });
    }

    // --- configurazione per la pagina Sblocca ---
    if (p === '/api/config') {
      return Response.json({
        paddle: env.PADDLE_CLIENT_TOKEN ? {
          token: env.PADDLE_CLIENT_TOKEN,
          ambiente: env.PADDLE_AMBIENTE || 'production',
          prezzi: { 'analisi-1': env.PADDLE_PREZZO_ANALISI_1 || null, 'analisi-2': env.PADDLE_PREZZO_ANALISI_2 || null },
        } : null,
      });
    }

    // --- dashboard ---
    if (p === '/admin') return new Response(paginaAdmin(), { headers: { 'content-type': 'text/html; charset=utf-8' } });
    if (p.startsWith('/admin/api/')) {
      const pwGiusta = env.ADMIN_PASSWORD || 'cambiami';
      if (p === '/admin/api/login' && req.method === 'POST') {
        const { pw } = await req.json();
        if (pw !== pwGiusta) return new Response('no', { status: 401 });
        const t = await firmaToken(env, { admin: true, t: Date.now() });
        return new Response('ok', { headers: { 'set-cookie': `admin=${encodeURIComponent(t)}; Path=/admin; Max-Age=604800; HttpOnly; Secure; SameSite=Strict` } });
      }
      const mc = (req.headers.get('cookie') || '').match(/(?:^|;\s*)admin=([^;]+)/);
      const sess = mc ? await leggiToken(env, decodeURIComponent(mc[1])) : null;
      if (!sess?.admin) return new Response('accesso negato', { status: 401 });
      if (p === '/admin/api/dati') return archivio(env).fetch('https://archivio/dati');
      if (p === '/admin/api/genera' && req.method === 'POST') {
        const { email, materie } = await req.json();
        const token = await creaAccesso(env, 'manuale', email, materie);
        const link = `${url.origin}/accesso?t=${token}`;
        const inviata = await inviaEmailAccesso(env, email, link, materie);
        return Response.json({ link, email_inviata: inviata });
      }
      return new Response('non trovato', { status: 404 });
    }

    // --- contenuti: oscuramento e consegna ---
    const info = analizza(url.pathname);
    const protetta = vendita && info && A_PAGAMENTO.includes(info.materia);
    let risposta;
    if (protetta) {
      const sbloccate = await materieSbloccate(env, req);
      const ha = sbloccate.includes(info.materia) || sbloccate.includes('tutte');
      if (!ha) {
        if (info.tipo === 'pdf' || info.tipo === 'stampa' || (info.tipo === 'esercizi-svolti' && info.n && info.n > SCHEDE_LIBERE)) {
          risposta = await rispostaVetrina(env, req, `/${info.materia}/sblocca.html`);
        } else if (info.tipo === 'teoria') {
          risposta = await rispostaVetrina(env, req, `/vetrine/${info.materia}/${info.argomento}/teoria.html`);
        } else if (info.tipo === 'esercizi' && info.n) {
          risposta = await rispostaVetrina(env, req, `/vetrine/${info.materia}/${info.argomento}/esercizi/${info.n}.html`);
        }
      }
    }
    if (!risposta) risposta = await env.ASSETS.fetch(req);

    // --- conteggio visite (solo pagine, non risorse) ---
    if (req.method === 'GET' && (risposta.headers.get('content-type') || '').includes('text/html') && !p.startsWith('/admin')) {
      const giorno = new Date().toISOString().slice(0, 10);
      const sezione = info ? `${info.materia}/${info.argomento}` : (url.pathname.split('/')[1] || 'home');
      ctx.waitUntil(aDO(env, '/visita', { giorno, sezione }));
    }
    return risposta;
  },
};
