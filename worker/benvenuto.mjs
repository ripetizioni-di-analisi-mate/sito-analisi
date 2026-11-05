// Sconto di benvenuto (richiesta di Carmine del 05/11/2026; regole in src/data/benvenuto.ts).
//  - /api/registrati con `benvenuto: true` (barra in basso, src/components/BarraSconto.astro) registra l'account
//    nella tabella `benvenuto`.
//  - Al primo acquisto di una materia la pagina Sblocca chiede /api/sconto: senza sconto dell'invito, il Worker crea
//    su Paddle un codice personale del 10% (un solo uso, solo i prezzi delle materie) e lo passa al checkout.
//    Nessuna email e nessun codice da copiare.
//  - /admin/benvenuto (e .csv): account creati dalla barra e sconti usati.
// Senza PADDLE_API_KEY la registrazione funziona, ma lo sconto non si applica.
import PREZZI from '../src/data/prezzi.json';
import { SCONTO_BENVENUTO } from '../src/data/benvenuto.ts';
import { creaSconto } from './inviti.mjs';

const MATERIE = Object.keys(PREZZI);

// ---------- archivio (Durable Object) ----------
export function creaTabelleBenvenuto(sql) {
  sql.exec(`
    CREATE TABLE IF NOT EXISTS benvenuto (email TEXT PRIMARY KEY, creato TEXT, pagina TEXT, sconto_id TEXT, codice TEXT, usato TEXT);
    CREATE INDEX IF NOT EXISTS benvenuto_sconto ON benvenuto (sconto_id);
  `);
}

export function archivioBenvenuto(o, pathname, c) {
  const ora = new Date().toISOString();
  switch (pathname) {
    case '/bv-registra':
      o.sql.exec('INSERT OR IGNORE INTO benvenuto (email, creato, pagina) VALUES (?, ?, ?)', c.email, ora, String(c.pagina || '').slice(0, 200));
      return { ok: true };
    case '/bv-stato': { // sconto ancora da usare: account dalla barra, nessuna materia comprata
      const r = o.riga('SELECT sconto_id, usato FROM benvenuto WHERE email = ?', c.email);
      if (!r || r.usato) return { spetta: false };
      const comprato = o.riga(`SELECT 1 AS x FROM acquisti WHERE email = ? AND materia IN (${MATERIE.map(() => '?').join(',')}) LIMIT 1`, c.email, ...MATERIE);
      return comprato ? { spetta: false } : { spetta: true, id: r.sconto_id || null };
    }
    case '/bv-salva-sconto':
      o.sql.exec('UPDATE benvenuto SET sconto_id = ?, codice = ? WHERE email = ?', c.id, c.codice, c.email);
      return { ok: true };
    case '/bv-usato':
      o.sql.exec('UPDATE benvenuto SET usato = ? WHERE sconto_id = ? AND usato IS NULL', c.transazione || ora, c.sconto);
      return { ok: true };
    case '/bv-elenco':
      return { righe: o.righe('SELECT b.email, b.creato, b.pagina, b.usato, u.nome FROM benvenuto b LEFT JOIN utenti u ON u.email = b.email ORDER BY b.creato DESC') };
    default: return null;
  }
}

// Sconto da passare al checkout (chiamato da /api/sconto quando non c'è uno sconto d'invito).
export async function scontoBenvenuto(env, aDO, io) {
  if (!io || !env.PADDLE_API_KEY) return null;
  const s = await aDO(env, '/bv-stato', { email: io.email });
  if (!s.spetta) return null;
  let id = s.id;
  if (!id) {
    const nuovo = await creaSconto(env, { prefisso: 'BENV', descrizione: `Sconto di benvenuto per ${io.email}`, percentuale: SCONTO_BENVENUTO });
    await aDO(env, '/bv-salva-sconto', { email: io.email, id: nuovo.id, codice: nuovo.codice });
    id = nuovo.id;
  }
  return { id, tipo: 'benvenuto', percentuale: SCONTO_BENVENUTO };
}

// ---------- percorsi del Worker ----------
// h = { aDO, json, leggiCookie, leggiToken, utenteCollegato }
export async function gestisciBenvenuto(req, env, ctx, p, h) {
  const { aDO, json } = h;
  const url = new URL(req.url);

  // Riga «Sconto di benvenuto…» nella pagina Sblocca (solo per sapere se spetta; il codice si crea al pagamento).
  if (p === '/api/benvenuto' && req.method === 'GET') {
    const io = await h.utenteCollegato(env, req).catch(() => null);
    if (!io || !env.PADDLE_API_KEY) return json({}, 200, { 'cache-control': 'no-store' });
    const s = await aDO(env, '/bv-stato', { email: io.email });
    return json(s.spetta ? { percentuale: SCONTO_BENVENUTO } : {}, 200, { 'cache-control': 'no-store' });
  }

  if (p === '/admin/benvenuto' || p === '/admin/benvenuto.csv') {
    const ma = h.leggiCookie(req, 'admin');
    const sess = ma ? await h.leggiToken(env, ma) : null;
    if (!sess?.admin) return Response.redirect(`${url.origin}/admin`, 302);
    const { righe } = await aDO(env, '/bv-elenco', {});
    if (p === '/admin/benvenuto.csv') {
      const col = ['nome', 'email', 'creato', 'pagina', 'usato'];
      const cella = (x) => `"${String(x ?? '').replace(/"/g, '""')}"`;
      return new Response('﻿' + [col.join(';'), ...righe.map((r) => col.map((k) => cella(r[k])).join(';'))].join('\r\n'),
        { headers: { 'content-type': 'text/csv; charset=utf-8', 'content-disposition': 'attachment; filename="account-dalla-barra.csv"' } });
    }
    return paginaAdmin(righe, Boolean(env.PADDLE_API_KEY));
  }
  return null;
}

// ---------- pagina /admin/benvenuto ----------
const esc = (x) => String(x ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const dataIt = (x) => (x ? x.slice(0, 10).split('-').reverse().join('/') : '');
function paginaAdmin(righe, attivo) {
  const oggi = new Date().toISOString().slice(0, 10);
  const settimana = new Date(Date.now() - 7 * 86400000).toISOString();
  const tab = righe.map((r) => `<tr><td><strong>${esc(r.nome)}</strong><br><span class="piccolo">${esc(r.email)}</span></td><td>${esc(dataIt(r.creato))}</td>
<td class="piccolo">${esc(r.pagina)}</td><td>${r.usato ? 'usato' : '<span class="piccolo">non ancora</span>'}</td></tr>`).join('');
  return new Response(`<!doctype html><html lang="it"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex"><title>Sconto di benvenuto · account</title><style>
body{font-family:'Source Sans 3',system-ui,sans-serif;background:#faf8f2;color:#22302f;margin:0;padding:24px 16px;line-height:1.45}
main{max-width:1000px;margin:0 auto}h1{font-family:Georgia,serif;font-weight:600;margin:0 0 6px}a{color:#2f6f68}
table{border-collapse:collapse;width:100%;background:#fff;border:1px solid #ddd6c8;font-size:15px}th,td{text-align:left;padding:8px 10px;border-bottom:1px solid #eee8dc;vertical-align:top}
th{background:#f1ede4;font-size:13px;text-transform:uppercase;letter-spacing:.05em;color:#5a6664}.piccolo{font-size:13px;color:#5a6664}.tab{overflow-x:auto}
.tasto{font-weight:600;background:#2f6f68;color:#fff;border-radius:999px;padding:8px 18px;text-decoration:none;display:inline-block}
.numeri{display:flex;gap:10px;flex-wrap:wrap;margin:14px 0 18px}.numeri div{background:#fff;border:1px solid #ddd6c8;border-radius:10px;padding:10px 14px}.numeri b{display:block;font-size:1.4rem}
.avviso{background:#fbeee0;border:1px solid #e8c9a3;border-radius:10px;padding:10px 14px}</style></head><body><main>
<p class="piccolo"><a href="/admin">← Dashboard</a></p>
<h1>Sconto di benvenuto</h1>
<p class="piccolo">Account creati dalla barra in basso del sito. Ognuno ha il ${SCONTO_BENVENUTO}% sul primo acquisto di una materia, applicato da solo al pagamento.</p>
${attivo ? '' : '<p class="avviso">Lo sconto non si applica finché su Cloudflare manca la chiave PADDLE_API_KEY (la stessa di «Invita un amico»).</p>'}
<div class="numeri"><div><b>${righe.length}</b>account dalla barra</div><div><b>${righe.filter((r) => r.creato.startsWith(oggi)).length}</b>oggi</div><div><b>${righe.filter((r) => r.creato >= settimana).length}</b>ultimi 7 giorni</div><div><b>${righe.filter((r) => r.usato).length}</b>sconti usati</div></div>
<p><a class="tasto" href="/admin/benvenuto.csv">Scarica l’elenco (CSV)</a></p>
${righe.length ? `<div class="tab"><table><thead><tr><th>Studente</th><th>Iscritto il</th><th>Pagina</th><th>Sconto</th></tr></thead><tbody>${tab}</tbody></table></div>` : '<p class="piccolo">Nessun account per ora.</p>'}
</main></body></html>`, { headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store', 'x-robots-tag': 'noindex' } });
}
