import { componiEmail, inviaEmailResend } from './email.mjs';
import { stripe } from './prenotazioni.mjs';

const ADMIN = '/admin/vendite-stripe';
const SUPPORTO = 'carminetornincasa98@gmail.com';
const noStore = { 'cache-control': 'private, no-store', 'x-robots-tag': 'noindex' };
const esc = (value) => String(value ?? '').replace(/[&<>"']/g, c => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' })[c]);
const euro = cents => new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(cents / 100);
const dataOra = (s, en = false) => new Intl.DateTimeFormat(en ? 'en-GB' : 'it-IT', { dateStyle: 'medium', timeStyle: 'short', timeZone: 'Europe/Rome' }).format(new Date(s));
const json = (value, status = 200) => Response.json(value, { status, headers: noStore });
const parse = (s) => s ? JSON.parse(s) : {};

export function creaTabellePostvendita(sql) {
  sql.exec(`
    CREATE TABLE IF NOT EXISTS recessi_digitali (
      ordine_id TEXT PRIMARY KEY, nome TEXT NOT NULL, recapito TEXT NOT NULL, inviato TEXT NOT NULL,
      lingua TEXT NOT NULL, conferma INTEGER DEFAULT 0, avviso INTEGER DEFAULT 0
    );
    CREATE TABLE IF NOT EXISTS rimborsi_digitali (
      ordine_id TEXT PRIMARY KEY, confermati INTEGER NOT NULL, in_attesa INTEGER NOT NULL,
      falliti INTEGER NOT NULL, verificato INTEGER NOT NULL
    );
  `);
}

const daOrdini = ` FROM ordini_stripe o
  LEFT JOIN recessi_digitali d ON d.ordine_id = o.id
  LEFT JOIN rimborsi_digitali r ON r.ordine_id = o.id `;
const campi = `o.id,o.email,o.in_centesimi,o.pagato,o.pagamento,o.ordine,o.fatturazione,
  d.nome AS dichiarante,d.recapito,d.inviato,d.lingua AS lingua_recesso,d.conferma,d.avviso,
  COALESCE(r.confermati,0) AS rimborsati,COALESCE(r.in_attesa,0) AS in_attesa`;
const pagato = "o.stato='pagato'";

function aggiornaAbilitazioni(o, vendita) {
  // L'origine identifica l'ordine che ha concesso per primo il diritto. Le origini
  // manuali, Paddle e degli altri ordini restano intatte.
  const possibili = o.righe(`SELECT o.id,o.ordine ${daOrdini} WHERE ${pagato} AND o.email=? AND o.id!=?
    AND COALESCE(r.confermati,0)<o.in_centesimi ORDER BY o.pagato`, vendita.email, vendita.id)
    .map(x => ({ id: x.id, abilitazioni: parse(x.ordine).abilitazioni || [] }));
  const origine = 'stripe:' + vendita.id;
  for (const { materia } of o.righe('SELECT materia FROM abilitazioni WHERE email=? AND origine=?', vendita.email, origine)) {
    const altra = possibili.find(x => x.abilitazioni.includes(materia));
    if (altra) o.sql.exec('UPDATE abilitazioni SET origine=? WHERE email=? AND materia=? AND origine=?', 'stripe:' + altra.id, vendita.email, materia, origine);
    else o.sql.exec('DELETE FROM abilitazioni WHERE email=? AND materia=? AND origine=?', vendita.email, materia, origine);
  }
}

export function archivioPostvendita(o, p, c) {
  const trova = id => o.riga(`SELECT ${campi} ${daOrdini} WHERE ${pagato} AND o.id=?`, id);
  switch (p) {
    case '/postvendita-miei':
      return o.righe(`SELECT o.id,o.ordine,o.in_centesimi,o.pagato,d.inviato
        ${daOrdini} WHERE ${pagato} AND o.email=? ORDER BY o.pagato DESC`, c.email)
        .map(x => ({ id:x.id, titolo:parse(x.ordine).titolo, importo:x.in_centesimi, pagato:x.pagato, inviato:x.inviato }));
    case '/postvendita-recesso': {
      const x = trova(c.id);
      if (!x || x.email !== c.email) return null;
      o.sql.exec('INSERT OR IGNORE INTO recessi_digitali (ordine_id,nome,recapito,inviato,lingua) VALUES (?,?,?,?,?)',
        x.id, c.nome, c.recapito, new Date().toISOString(), c.lingua);
      return trova(x.id);
    }
    case '/postvendita-email-ok':
      if (c.tipo === 'cliente') o.sql.exec('UPDATE recessi_digitali SET conferma=1 WHERE ordine_id=?', c.id);
      if (c.tipo === 'titolare') o.sql.exec('UPDATE recessi_digitali SET avviso=1 WHERE ordine_id=?', c.id);
      return { ok:true };
    case '/postvendita-admin':
      return o.righe(`SELECT ${campi} ${daOrdini} WHERE ${pagato} AND
        ((o.pagato>=? AND o.pagato<?) OR (d.inviato IS NOT NULL AND COALESCE(r.confermati,0)<o.in_centesimi))
        ORDER BY (d.inviato IS NOT NULL AND COALESCE(r.confermati,0)<o.in_centesimi) DESC, o.pagato DESC`, c.da, c.a);
    case '/postvendita-vendita': return trova(c.id);
    case '/postvendita-pagamento':
      return o.riga(`SELECT id,pagamento,in_centesimi FROM ordini_stripe o WHERE ${pagato} AND pagamento=?`, c.pagamento);
    case '/postvendita-sincronizza': {
      const x = trova(c.id);
      if (!x || x.pagamento !== c.pagamento) return { ok:false };
      o.sql.exec(`INSERT INTO rimborsi_digitali (ordine_id,confermati,in_attesa,falliti,verificato)
        VALUES (?,?,?,?,?) ON CONFLICT(ordine_id) DO UPDATE SET confermati=excluded.confermati,
        in_attesa=excluded.in_attesa,falliti=excluded.falliti,verificato=excluded.verificato
        WHERE excluded.verificato>=rimborsi_digitali.verificato`, x.id, c.confermati, c.in_attesa, c.falliti, c.verificato);
      const nuovo = trova(x.id);
      if (nuovo.rimborsati >= x.in_centesimi && x.in_centesimi > 0) aggiornaAbilitazioni(o,x);
      return { ok:true };
    }
    case '/postvendita-coda': {
      const email = o.righe(`SELECT ${campi} ${daOrdini} WHERE ${pagato} AND (d.conferma=0 OR d.avviso=0) ORDER BY d.inviato LIMIT 4`);
      // Il giro a rotazione recupera anche rimborsi emessi dalla dashboard Stripe
      // se l'endpoint dell'account riceve soltanto gli eventi Checkout.
      const vendite = o.righe(`SELECT o.id,o.pagamento,o.in_centesimi ${daOrdini} WHERE ${pagato}
        AND COALESCE(r.confermati,0)<o.in_centesimi AND (r.verificato IS NULL OR r.verificato<?)
        ORDER BY r.verificato LIMIT 4`, Date.now() - 86400000);
      return { email,vendite };
    }
    default: return null;
  }
}

async function notificheRecesso(env, x, aDO) {
  const en = x.lingua_recesso === 'en', titolo = parse(x.ordine).titolo;
  if (!x.conferma) {
    const ora = dataOra(x.inviato,en);
    const righe = en ? [
      `We received your withdrawal declaration on ${ora} (Rome time).`,
      `“I, ${x.dichiarante}, give notice that I withdraw from my contract for ${titolo}.”`,
      `Order ${x.id}. Acknowledgement address: ${x.recapito}.`,
      'We will contact you about the outcome. Please keep this email for your records.',
    ] : [
      `Abbiamo ricevuto la tua dichiarazione di recesso il ${ora} (ora di Roma).`,
      `«Io, ${x.dichiarante}, comunico il recesso dal contratto per ${titolo}.»`,
      `Ordine ${x.id}. Recapito per la conferma: ${x.recapito}.`,
      'Ti contatteremo per comunicarti l’esito. Conserva questa email.',
    ];
    const msg = componiEmail({ subject: en ? 'Your withdrawal declaration was received' : 'Abbiamo ricevuto la tua dichiarazione di recesso', lingua:x.lingua_recesso, righe });
    if ((await inviaEmailResend(env,x.recapito,msg,'recesso-cliente-'+x.id,'recesso')).ok) await aDO(env,'/postvendita-email-ok',{id:x.id,tipo:'cliente'});
  }
  if (!x.avviso) {
    const msg = componiEmail({ subject:'Dichiarazione di recesso da esaminare', righe:[`È arrivata una dichiarazione per l’ordine ${x.id} del corso ${titolo}. La richiesta e i dati per rispondere sono nell’area Vendite Stripe.`],
      pulsante:['Apri le richieste','https://ripetizionidianalisi.com'+ADMIN] });
    if ((await inviaEmailResend(env,SUPPORTO,msg,'recesso-admin-'+x.id,'avviso-recesso')).ok) await aDO(env,'/postvendita-email-ok',{id:x.id,tipo:'titolare'});
  }
}

async function leggiRimborsi(env,x,aDO) {
  let confermati=0, in_attesa=0, falliti=0, ultimo='';
  const verificato=Date.now();
  do {
    const query=new URLSearchParams({payment_intent:x.pagamento,limit:'100'});
    if (ultimo) query.set('starting_after',ultimo);
    const pagina=await stripe(env,'GET','/refunds?'+query);
    for (const r of pagina.data) {
      if (r.payment_intent !== x.pagamento || r.currency !== 'eur') throw new Error('Rimborso inatteso');
      if (r.status==='succeeded') confermati+=r.amount;
      else if (r.status==='failed'||r.status==='canceled') falliti++;
      else in_attesa++;
    }
    ultimo=pagina.has_more ? pagina.data.at(-1)?.id : '';
  } while (ultimo);
  await aDO(env,'/postvendita-sincronizza',{id:x.id,pagamento:x.pagamento,confermati,in_attesa,falliti,verificato});
  return { confermati,in_attesa,falliti };
}

// L'evento è già stato autenticato dall'endpoint webhook condiviso con le lezioni.
export async function webhookPostvendita(env,ev,{aDO}) {
  if (!['charge.refunded','refund.created','refund.updated','refund.failed'].includes(ev.type)) return null;
  const pi=ev.data?.object?.payment_intent;
  if (typeof pi!=='string') return json({ok:true});
  const x=await aDO(env,'/postvendita-pagamento',{pagamento:pi});
  if (x) {
    try { await leggiRimborsi(env,x,aDO); } catch { return json({errore:'Riprova'},503); }
  }
  return json({ok:true});
}

export async function sincronizzaPostvendita(env,aDO) {
  const c=await aDO(env,'/postvendita-coda',{});
  for (const x of c.email) await notificheRecesso(env,x,aDO);
  if (env.STRIPE_SECRET_KEY) for (const x of c.vendite) {
    try { await leggiRimborsi(env,x,aDO); } catch { /* il prossimo giro riprova */ }
  }
}

export async function gestisciPostvendita(req,env,p,h) {
  const u=new URL(req.url), post=req.method==='POST';
  if (post && req.headers.get('origin')!==u.origin) return json({errore:'Origine non valida'},403);
  if (p===ADMIN || p===ADMIN+'/rimborsa' || p===ADMIN+'/aggiorna') {
    const cookie=h.leggiCookie(req,'admin');
    const sessione=cookie && await h.leggiToken(env,cookie);
    const eta=Date.now()-Number(sessione?.t);
    if (!env.ADMIN_PASSWORD || !env.CHIAVE_ACCESSO || !sessione?.admin || !Number.isFinite(eta) || eta<0 || eta>7*86400000) return Response.redirect(u.origin+'/admin',302);
    if (p===ADMIN && req.method==='GET') return paginaVendite(env,h.aDO,u);
    if (!post || p===ADMIN) return json({errore:'Metodo non consentito'},405);
    const f=await req.formData().catch(()=>null);
    const x=await h.aDO(env,'/postvendita-vendita',{id:String(f?.get('id')||'')});
    if (!x) return json({errore:'Ordine non trovato'},404);
    try {
      const stato=await leggiRimborsi(env,x,h.aDO);
      if (p===ADMIN+'/rimborsa') {
        if (f?.get('conferma')!=='si') return json({errore:'Conferma il rimborso prima di inviare.'},400);
        if (!stato.in_attesa && stato.confermati<x.in_centesimi) {
          await stripe(env,'POST','/refunds',{payment_intent:x.pagamento,amount:String(x.in_centesimi-stato.confermati)},
            'digitale-rimborso-'+x.id+'-'+stato.falliti+'-'+stato.confermati);
          await leggiRimborsi(env,x,h.aDO);
        }
      }
      return Response.redirect(u.origin+ADMIN+'?mese='+encodeURIComponent(x.pagato.slice(0,7))+'#o-'+encodeURIComponent(x.id),303);
    } catch { return json({errore:'Impossibile verificare il rimborso. Ricarica lo stato da Stripe prima di riprovare.'},502); }
  }
  if (!p.startsWith('/api/stripe/postvendita/')) return null;
  const io=await h.utenteCollegato(env,req);
  if (!io?.email) return json({errore:'Accesso richiesto'},401);
  if (p==='/api/stripe/postvendita/ordini' && req.method==='GET') return json({email:io.email,nome:io.nome||'',ordini:await h.aDO(env,'/postvendita-miei',{email:io.email})});
  if (p==='/api/stripe/postvendita/recesso' && post) {
    const c=await req.json().catch(()=>null);
    const nome=typeof c?.nome==='string' ? c.nome.trim() : '', recapito=typeof c?.recapito==='string' ? c.recapito.trim() : '';
    if (typeof c?.id!=='string'||c.id.length>80||c.conferma!==true||!nome||nome.length>180||/[\u0000-\u001f]/.test(nome)||recapito.length>200||!/^\S+@[^\s@]+\.[^\s@]+$/.test(recapito)||/[<>,;\r\n]/.test(recapito))
      return json({errore:'Dati della dichiarazione non validi'},400);
    const x=await h.aDO(env,'/postvendita-recesso',{id:c.id,email:io.email,nome,recapito,lingua:c.lingua==='en'?'en':'it'});
    if (!x) return json({errore:'Ordine non trovato'},404);
    await notificheRecesso(env,x,h.aDO);
    return json({id:x.id,inviato:x.inviato,nome:x.dichiarante,recapito:x.recapito,titolo:parse(x.ordine).titolo});
  }
  return json({errore:'Richiesta non disponibile'},404);
}

async function paginaVendite(env,aDO,url) {
  const input=url.searchParams.get('mese')||'';
  const mese=/^\d{4}-(0[1-9]|1[0-2])$/.test(input)?input:new Date().toISOString().slice(0,7);
  const fine=new Date(mese+'-01T00:00:00Z');fine.setUTCMonth(fine.getUTCMonth()+1);
  const dati=await aDO(env,'/postvendita-admin',{da:mese+'-01',a:fine.toISOString().slice(0,10)});
  const vendite=dati.map(x=>{
    const f=parse(x.fatturazione),ordine=parse(x.ordine),t=ordine.titolo;
    const fattura=[f.nome+' '+f.cognome,f.indirizzo,[f.cap,f.comune,f.provincia,f.paese].filter(Boolean).join(' '),f.cf&&'CF '+f.cf].filter(Boolean);
    const ritiro=x.inviato ? `<p><b>Recesso ricevuto</b> il ${esc(dataOra(x.inviato))} da ${esc(x.dichiarante)} · ${esc(x.recapito)}</p>` : '';
    const residuo=x.in_centesimi-x.rimborsati;
    return `<article id="o-${esc(x.id)}"><h2>${esc(t)} · ${euro(x.in_centesimi)}</h2><p>${esc(dataOra(x.pagato))} · ${esc(x.email)}<br>Ordine ${esc(x.id)}</p>
      <details><summary>Dati fattura</summary><p>${fattura.map(esc).join('<br>')}</p><small>Pagamento ${esc(x.pagamento)}</small></details>
      ${ritiro}<p>Rimborsato: ${euro(x.rimborsati)}.${x.in_attesa?' Operazione in elaborazione su Stripe.':''}</p>
      ${residuo===0 && ordine.chiavi?.some(k=>k.startsWith('video-')) ? '<p>Controlla anche le autorizzazioni delle cartelle video su Google Drive.</p>' : ''}
      <form method="post" action="${ADMIN}/aggiorna"><input type="hidden" name="id" value="${esc(x.id)}"><button>Aggiorna da Stripe</button></form>
      ${residuo>0 && !x.in_attesa ? `<details><summary>Emetti rimborso</summary><form method="post" action="${ADMIN}/rimborsa"><input type="hidden" name="id" value="${esc(x.id)}"><label><input type="checkbox" name="conferma" value="si" required> Confermo il rimborso di ${euro(residuo)} sul metodo di pagamento originale.</label><button>Rimborsa ${euro(residuo)}</button></form></details>`:''}</article>`;
  }).join('');
  return new Response(`<!doctype html><html lang="it"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Vendite digitali Stripe</title>
    <style>body{font:16px/1.5 system-ui;background:#f7f7f3;color:#263d38;margin:0}main{max-width:48rem;margin:auto;padding:1.3rem}article{background:white;border:1px solid #d5ded8;border-radius:.65rem;margin:1rem 0;padding:1rem;overflow-wrap:anywhere}a,summary{color:#205950}summary,button{cursor:pointer}h2{font-size:1.1rem}form,details{margin:.65rem 0}button,input{font:inherit;padding:.3rem .6rem}button{margin:.4rem}</style><main><a href="/admin#vendite">← Dashboard</a><h1>Vendite digitali Stripe</h1><p>Le richieste di recesso aperte compaiono anche se l’acquisto risale a un altro mese.</p>
    <form><label>Mese dell’acquisto <input name="mese" type="month" required value="${esc(mese)}"></label><button>Mostra</button></form>
    ${vendite||'<p>Nessuna vendita digitale Stripe per questo mese.</p>'}</main></html>`,{headers:{...noStore,'content-type':'text/html; charset=utf-8'}});
}
