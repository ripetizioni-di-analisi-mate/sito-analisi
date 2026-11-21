// Prova di Semrush (richiesta di Carmine del 21/11/2026): pagina /admin/semrush con il punto di partenza,
// ciò che Semrush ha fatto scoprire, gli interventi fatti sul sito e il loro effetto, per decidere sul rinnovo.
// I dati stanno in src/data/prova-semrush.json e si aggiornano a mano a ogni lettura di Semrush.
import DATI from '../src/data/prova-semrush.json';

const esc = (x) => String(x ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const dataIt = (x) => (x ? x.slice(0, 10).split('-').reverse().join('/') : '');

// h = { leggiCookie, leggiToken }
export async function gestisciProvaSemrush(req, env, ctx, p, h) {
  if (p !== '/admin/semrush') return null;
  const url = new URL(req.url);
  const ma = h.leggiCookie(req, 'admin');
  const sess = ma ? await h.leggiToken(env, ma) : null;
  if (!sess?.admin) return Response.redirect(`${url.origin}/admin`, 302);
  return pagina(DATI);
}

function pagina(d) {
  const oggi = new Date().toISOString().slice(0, 10);
  const mancano = Math.max(0, Math.round((Date.parse(d.scadenza) - Date.parse(oggi)) / 86400000));
  const misure = d.misure.map((m) => `<tr><td>${esc(m.voce)}</td><td>${esc(m.zero)}</td><td${m.ora !== m.zero ? ' class="cambiato"' : ''}>${esc(m.ora)}</td></tr>`).join('');
  const scoperte = d.scoperte.map((s) => `<li><span class="stato">${esc(s.stato)}</span>${esc(s.testo)} <span class="piccolo">${esc(dataIt(s.giorno))}</span></li>`).join('');
  const interventi = d.interventi.length
    ? `<div class="tab"><table><thead><tr><th>Giorno</th><th>Intervento sul sito</th><th>Effetto</th></tr></thead><tbody>${d.interventi.map((i) => `<tr><td>${esc(dataIt(i.giorno))}</td><td>${esc(i.testo)}</td><td>${esc(i.effetto || 'da misurare')}</td></tr>`).join('')}</tbody></table></div>`
    : '<p class="piccolo">Nessun intervento per ora.</p>';
  const diario = [...d.diario].reverse().map((g) => `<h3>${esc(dataIt(g.giorno))}</h3><ul>${g.voci.map((v) => `<li>${esc(v)}</li>`).join('')}</ul>`).join('');
  return new Response(`<!doctype html><html lang="it"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex"><title>Prova di Semrush</title><style>
body{font-family:'Source Sans 3',system-ui,sans-serif;background:#faf8f2;color:#22302f;margin:0;padding:24px 16px;line-height:1.45}
main{max-width:1000px;margin:0 auto}h1{font-family:Georgia,serif;font-weight:600;margin:0 0 6px}h2{font-family:Georgia,serif;font-weight:600;margin:28px 0 10px;font-size:1.25rem}h3{margin:14px 0 4px;font-size:1rem}a{color:#2f6f68}
table{border-collapse:collapse;width:100%;background:#fff;border:1px solid #ddd6c8;font-size:15px}th,td{text-align:left;padding:8px 10px;border-bottom:1px solid #eee8dc;vertical-align:top}
th{background:#f1ede4;font-size:13px;text-transform:uppercase;letter-spacing:.05em;color:#5a6664}.piccolo{font-size:13px;color:#5a6664}.tab{overflow-x:auto}
.cambiato{font-weight:700;color:#2f6f68}
.numeri{display:flex;gap:10px;flex-wrap:wrap;margin:14px 0 6px}.numeri div{background:#fff;border:1px solid #ddd6c8;border-radius:10px;padding:10px 14px}.numeri b{display:block;font-size:1.4rem}
.verdetto{background:#fff;border:1px solid #ddd6c8;border-left:4px solid #2f6f68;border-radius:10px;padding:12px 16px;margin:14px 0}
.verdetto b{font-size:1.15rem}ul{padding-left:20px;margin:6px 0}li{margin:5px 0}
.elenco{list-style:none;padding:0}.elenco li{background:#fff;border:1px solid #ddd6c8;border-radius:10px;padding:10px 14px}
.stato{display:inline-block;font-size:12px;text-transform:uppercase;letter-spacing:.05em;background:#f1ede4;border-radius:999px;padding:2px 10px;margin-right:8px;color:#5a6664}
</style></head><body><main>
<p class="piccolo"><a href="/admin">← Dashboard</a></p>
<h1>Prova di Semrush</h1>
<p class="piccolo">Che cosa ha fatto scoprire Semrush, che cosa è stato cambiato sul sito grazie a quei dati e con quale effetto. Serve a decidere se rinnovare.</p>
<div class="verdetto"><b>${esc(d.verdetto)}</b><br>${esc(d.notaVerdetto)}</div>
<div class="numeri"><div><b>${mancano}</b>giorni alla scadenza (${esc(dataIt(d.scadenza))})</div><div><b>${esc(d.costoMese)}</b>al mese dal rinnovo</div><div><b>${esc(d.rinnovo)}</b>rinnovo automatico</div><div><b>${d.interventi.length}</b>interventi sul sito</div></div>
<h2>Prima e dopo</h2>
<div class="tab"><table><thead><tr><th>Voce</th><th>${esc(dataIt(d.inizio))}</th><th>Ora</th></tr></thead><tbody>${misure}</tbody></table></div>
<h2>Che cosa ha fatto scoprire</h2>
<ul class="elenco">${scoperte}</ul>
<h2>Interventi sul sito</h2>
${interventi}
<h2>Diario della prova</h2>
${diario}
</main></body></html>`, { headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store', 'x-robots-tag': 'noindex' } });
}
