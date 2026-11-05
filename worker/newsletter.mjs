// Newsletter (richiesta di Carmine del 05/11/2026; regole in src/data/newsletter.ts).
//  - POST /api/newsletter: iscrizione dalla barra in basso (email + consenso). Chi si iscrive per la prima volta riceve
//    un codice di sconto personale del 10% su Paddle (un solo uso, solo i prezzi delle materie), mostrato subito
//    nella barra e mandato per email (Resend). Il browser riceve il cookie firmato «nl» con l'email.
//  - Il codice si applica da solo nella pagina Sblocca (/api/sconto, dopo lo sconto dell'invito) se l'account ha la
//    stessa email dell'iscrizione oppure se il browser ha il cookie «nl». Si può anche scrivere a mano nel checkout.
//  - /newsletter/disattiva?t=…: cancellazione dall'elenco (link in fondo a ogni email).
//  - /admin/newsletter (e .csv): elenco degli iscritti per Carmine.
// Senza PADDLE_API_KEY l'iscrizione funziona lo stesso, ma senza codice. NEWSLETTER = "0" spegne la barra lato server.
import { SCONTO_NEWSLETTER } from '../src/data/newsletter.ts';
import { creaSconto } from './inviti.mjs';

const LIMITE_PERSONA = 5;   // iscrizioni al giorno dalla stessa connessione
const LIMITE_SITO = 300;    // iscrizioni al giorno in tutto (ognuna crea un codice su Paddle)
const SOGLIA_EMAIL = 80;    // email del giorno già spedite dal sito oltre le quali il benvenuto non parte (piano gratuito di Resend: 100)

// ---------- archivio (Durable Object) ----------
export function creaTabelleNewsletter(sql) {
  sql.exec(`
    CREATE TABLE IF NOT EXISTS newsletter (email TEXT PRIMARY KEY, creato TEXT, lingua TEXT, pagina TEXT,
      sconto_id TEXT, codice TEXT, usato TEXT, email_inviata INTEGER DEFAULT 0, disiscritto TEXT);
    CREATE INDEX IF NOT EXISTS newsletter_sconto ON newsletter (sconto_id);
  `);
}

export function archivioNewsletter(o, pathname, c) {
  const ora = new Date().toISOString();
  switch (pathname) {
    case '/nl-conta': { // limiti del giorno (stessa tabella del recupero password)
      const conta = (k) => o.riga('SELECT n FROM recuperi WHERE giorno = ? AND chiave = ?', c.giorno, k)?.n || 0;
      if (conta(`nl:${c.chi}`) >= LIMITE_PERSONA || conta('*newsletter') >= LIMITE_SITO) return { ok: false };
      for (const k of [`nl:${c.chi}`, '*newsletter']) {
        o.sql.exec(`INSERT INTO recuperi (giorno, chiave, n, ultimo) VALUES (?, ?, 1, ?)
          ON CONFLICT(giorno, chiave) DO UPDATE SET n = n + 1, ultimo = excluded.ultimo`, c.giorno, k, Date.now());
      }
      return { ok: true, emailOggi: conta('*sito') };
    }
    case '/nl-iscrivi': {
      const r = o.riga('SELECT email, codice, disiscritto FROM newsletter WHERE email = ?', c.email);
      if (r) {
        // chi si era cancellato e si riscrive torna nell'elenco, senza un secondo codice
        if (r.disiscritto) o.sql.exec('UPDATE newsletter SET disiscritto = NULL WHERE email = ?', c.email);
        return { nuovo: false, haCodice: Boolean(r.codice) };
      }
      o.sql.exec('INSERT INTO newsletter (email, creato, lingua, pagina) VALUES (?, ?, ?, ?)', c.email, ora, c.lingua || 'it', String(c.pagina || '').slice(0, 200));
      return { nuovo: true };
    }
    case '/nl-salva-sconto':
      o.sql.exec('UPDATE newsletter SET sconto_id = ?, codice = ? WHERE email = ?', c.id, c.codice, c.email);
      return { ok: true };
    case '/nl-email-inviata':
      o.sql.exec('UPDATE newsletter SET email_inviata = 1 WHERE email = ?', c.email);
      o.sql.exec(`INSERT INTO recuperi (giorno, chiave, n, ultimo) VALUES (?, '*sito', 1, ?)
        ON CONFLICT(giorno, chiave) DO UPDATE SET n = n + 1, ultimo = excluded.ultimo`, c.giorno, Date.now());
      return { ok: true };
    case '/nl-sconto': { // codice non ancora usato per una delle email date
      for (const e of c.email || []) {
        const r = o.riga('SELECT sconto_id FROM newsletter WHERE email = ? AND sconto_id IS NOT NULL AND usato IS NULL', e);
        if (r) return { id: r.sconto_id };
      }
      return {};
    }
    case '/nl-usato':
      o.sql.exec('UPDATE newsletter SET usato = ? WHERE sconto_id = ? AND usato IS NULL', c.transazione || ora, c.sconto);
      return { ok: true };
    case '/nl-disiscrivi':
      o.sql.exec('UPDATE newsletter SET disiscritto = ? WHERE email = ? AND disiscritto IS NULL', ora, c.email);
      return { ok: true };
    case '/nl-elenco':
      return { iscritti: o.righe('SELECT email, creato, lingua, pagina, codice, usato, email_inviata, disiscritto FROM newsletter ORDER BY creato DESC') };
    default: return null;
  }
}

// ---------- email di benvenuto ----------
const esc = (x) => String(x ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const TESTI = {
  it: {
    oggetto: (p) => `Il tuo sconto del ${p}%`,
    righe: (p, codice) => [
      'Ciao,',
      'grazie per esserti iscritto alla newsletter di Ripetizioni di Analisi. Riceverai le novità del sito e le aperture dei corsi di gruppo.',
      codice
        ? `Il tuo codice di sconto del ${p}% su una materia del sito è ${codice}. Si usa una volta sola e si applica da solo al pagamento quando l'account ha questa email; in alternativa si scrive nel riquadro del codice di sconto al momento del pagamento.`
        : null,
    ].filter(Boolean),
    tasto: 'Scegli la materia',
    firma: 'Carmine',
    no: 'Non vuoi più ricevere queste email? Cancellati dalla newsletter',
  },
  en: {
    oggetto: (p) => `Your ${p}% discount`,
    righe: (p, codice) => [
      'Hi,',
      'thank you for subscribing to the Ripetizioni di Analisi newsletter. You will receive news about the site and the opening of group courses.',
      codice
        ? `Your ${p}% discount code for one subject of the site is ${codice}. It can be used once and is applied automatically at checkout when your account has this email; otherwise, enter it in the discount code field at checkout.`
        : null,
    ].filter(Boolean),
    tasto: 'Choose a subject',
    firma: 'Carmine',
    no: 'No longer want these emails? Unsubscribe',
  },
};
async function mandaBenvenuto(env, { email, codice, lingua, origine, linkNo }) {
  if (!env.RESEND_API_KEY) return false;
  const T = TESTI[lingua] || TESTI.it;
  const righe = T.righe(SCONTO_NEWSLETTER, codice);
  const prezzi = `${origine}${lingua === 'en' ? '/en' : ''}/prezzi`;
  const html = `<div style="font-family:Georgia,'Times New Roman',serif;font-size:16px;line-height:1.55;color:#22302f;max-width:540px">
${righe.map((r) => `<p>${esc(r).replace(esc(codice || '§'), `<strong style="font-family:Arial,sans-serif;letter-spacing:.06em">${esc(codice)}</strong>`)}</p>`).join('\n')}
<p style="margin:24px 0"><a href="${esc(prezzi)}" style="background:#2f6f68;color:#ffffff;text-decoration:none;padding:12px 20px;border-radius:8px;font-family:Arial,sans-serif;font-size:15px;display:inline-block">${esc(T.tasto)}</a></p>
<p>${esc(T.firma)}</p>
<p style="font-family:Arial,sans-serif;font-size:12px;color:#5a6664;margin-top:28px"><a href="${esc(linkNo)}" style="color:#5a6664">${esc(T.no)}</a></p></div>`;
  const r = await fetch('https://api.resend.com/emails', {
    method: 'POST', headers: { authorization: `Bearer ${env.RESEND_API_KEY}`, 'content-type': 'application/json' },
    body: JSON.stringify({
      from: env.MITTENTE || 'Ripetizioni di Analisi <account@ripetizionidianalisi.com>', to: [email],
      subject: T.oggetto(SCONTO_NEWSLETTER), html, text: [...righe, `${T.tasto}: ${prezzi}`, T.firma, `${T.no}: ${linkNo}`].join('\n\n'),
      headers: { 'List-Unsubscribe': `<${linkNo}>`, 'List-Unsubscribe-Post': 'List-Unsubscribe=One-Click' },
    }),
  }).catch(() => null);
  return Boolean(r?.ok);
}

// Sconto della newsletter da passare al checkout (chiamato da /api/sconto quando non c'è uno sconto d'invito).
export async function scontoNewsletter(req, env, h, io) {
  const tok = h.leggiCookie(req, 'nl');
  const daCookie = tok ? (await h.leggiToken(env, tok))?.nl : null;
  const email = [...new Set([io?.email, daCookie].filter(Boolean))];
  if (!email.length) return null;
  const s = await h.aDO(env, '/nl-sconto', { email });
  return s.id ? { id: s.id, tipo: 'newsletter', percentuale: SCONTO_NEWSLETTER } : null;
}

// ---------- percorsi del Worker ----------
// h = { aDO, json, leggiCookie, leggiToken, firmaToken, emailValida, normalizza, utenteCollegato }
export async function gestisciNewsletter(req, env, ctx, p, h) {
  const { aDO, json } = h;
  const url = new URL(req.url);

  if (p === '/api/newsletter' && req.method === 'POST') {
    if (env.NEWSLETTER === '0') return json({ errore: 'spenta' }, 503);
    const c = await req.json().catch(() => ({}));
    const email = h.normalizza(c.email);
    const lingua = c.lingua === 'en' ? 'en' : 'it';
    if (!h.emailValida(email)) return json({ errore: 'email' }, 400);
    if (c.consenso !== true) return json({ errore: 'consenso' }, 400);
    const giorno = new Date().toISOString().slice(0, 10);
    const impronta = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(`${req.headers.get('cf-connecting-ip') || ''}|${req.headers.get('user-agent') || ''}`));
    const chi = [...new Uint8Array(impronta)].slice(0, 8).map((b) => b.toString(16).padStart(2, '0')).join('');
    const lim = await aDO(env, '/nl-conta', { giorno, chi });
    if (!lim.ok) return json({ errore: 'limite' }, 429);

    const r = await aDO(env, '/nl-iscrivi', { email, lingua, pagina: String(c.pagina || '') });
    const cookie = `nl=${encodeURIComponent(await h.firmaToken(env, { nl: email }))}; Path=/; Max-Age=${365 * 86400}; Secure; HttpOnly; SameSite=Lax`;
    if (!r.nuovo) return json({ ok: true, gia: true, percentuale: SCONTO_NEWSLETTER, haCodice: r.haCodice }, 200, { 'set-cookie': cookie });

    let codice = null;
    if (env.PADDLE_API_KEY) {
      try {
        const s = await creaSconto(env, { prefisso: 'NEWS', descrizione: `Newsletter: benvenuto per ${email}`, percentuale: SCONTO_NEWSLETTER });
        await aDO(env, '/nl-salva-sconto', { email, id: s.id, codice: s.codice });
        codice = s.codice;
      } catch (e) { console.log('newsletter: sconto non creato', String(e)); }
    }
    const t = await h.firmaToken(env, { scopo: 'newsletter', e: email });
    const linkNo = `${url.origin}/newsletter/disattiva?t=${encodeURIComponent(t)}`;
    if (lim.emailOggi < SOGLIA_EMAIL) {
      ctx.waitUntil(mandaBenvenuto(env, { email, codice, lingua, origine: url.origin, linkNo })
        .then((ok) => (ok ? aDO(env, '/nl-email-inviata', { email, giorno }) : null)).catch(() => {}));
    }
    return json({ ok: true, codice, percentuale: SCONTO_NEWSLETTER }, 200, { 'set-cookie': cookie });
  }

  // Riga «Sconto della newsletter» nella pagina Sblocca (solo per sapere se c'è; il codice va al checkout da /api/sconto).
  if (p === '/api/newsletter/sconto' && req.method === 'GET') {
    const io = await h.utenteCollegato(env, req).catch(() => null);
    const s = await scontoNewsletter(req, env, h, io);
    return json(s ? { percentuale: s.percentuale } : {}, 200, { 'cache-control': 'no-store' });
  }

  if (p === '/newsletter/disattiva') {
    const d = await h.leggiToken(env, url.searchParams.get('t') || '');
    const valido = d?.scopo === 'newsletter' && d.e;
    if (req.method === 'POST' && valido) await aDO(env, '/nl-disiscrivi', { email: d.e });
    return new Response(paginaDisiscrizione(valido, req.method === 'POST'), {
      status: valido ? 200 : 400, headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store', 'x-robots-tag': 'noindex' } });
  }

  if (p === '/admin/newsletter' || p === '/admin/newsletter.csv') {
    const ma = h.leggiCookie(req, 'admin');
    const sess = ma ? await h.leggiToken(env, ma) : null;
    if (!sess?.admin) return Response.redirect(`${url.origin}/admin`, 302);
    const { iscritti } = await aDO(env, '/nl-elenco', {});
    if (p === '/admin/newsletter.csv') {
      const col = ['email', 'creato', 'lingua', 'pagina', 'codice', 'usato', 'disiscritto'];
      const cella = (x) => `"${String(x ?? '').replace(/"/g, '""')}"`;
      const righe = iscritti.filter((i) => !i.disiscritto).map((i) => col.map((k) => cella(i[k])).join(';'));
      return new Response('﻿' + [col.join(';'), ...righe].join('\r\n'), { headers: { 'content-type': 'text/csv; charset=utf-8', 'content-disposition': 'attachment; filename="iscritti-newsletter.csv"' } });
    }
    return paginaAdmin(iscritti);
  }
  return null;
}

// ---------- pagine ----------
const STILE = `body{font-family:'Source Sans 3',system-ui,sans-serif;background:#faf8f2;color:#22302f;margin:0;padding:24px 16px;line-height:1.45}
main{max-width:1000px;margin:0 auto}h1{font-family:Georgia,serif;font-weight:600;margin:0 0 6px}a{color:#2f6f68}
table{border-collapse:collapse;width:100%;background:#fff;border:1px solid #ddd6c8;font-size:15px}th,td{text-align:left;padding:8px 10px;border-bottom:1px solid #eee8dc;vertical-align:top}
th{background:#f1ede4;font-size:13px;text-transform:uppercase;letter-spacing:.05em;color:#5a6664}.piccolo{font-size:13px;color:#5a6664}.tab{overflow-x:auto}
.tasto{font:inherit;font-weight:600;background:#2f6f68;color:#fff;border:0;border-radius:999px;padding:8px 18px;text-decoration:none;display:inline-block;cursor:pointer}
.numeri{display:flex;gap:10px;flex-wrap:wrap;margin:14px 0 18px}.numeri div{background:#fff;border:1px solid #ddd6c8;border-radius:10px;padding:10px 14px}.numeri b{display:block;font-size:1.4rem}`;
const dataIt = (x) => (x ? x.slice(0, 10).split('-').reverse().join('/') : '');
function paginaAdmin(iscritti) {
  const attivi = iscritti.filter((i) => !i.disiscritto);
  const oggi = new Date().toISOString().slice(0, 10);
  const settimana = new Date(Date.now() - 7 * 86400000).toISOString();
  const righe = iscritti.map((i) => `<tr${i.disiscritto ? ' style="opacity:.5"' : ''}><td>${esc(i.email)}${i.disiscritto ? ' <span class="piccolo">(cancellato)</span>' : ''}</td>
<td>${esc(dataIt(i.creato))}</td><td class="piccolo">${esc(i.pagina)}</td><td>${i.codice ? `${esc(i.codice)}${i.usato ? ' <span class="piccolo">usato</span>' : ''}` : '<span class="piccolo">nessuno</span>'}</td><td class="piccolo">${i.email_inviata ? 'sì' : 'no'}</td></tr>`).join('');
  return new Response(`<!doctype html><html lang="it"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex"><title>Newsletter · iscritti</title><style>${STILE}</style></head><body><main>
<p class="piccolo"><a href="/admin">← Dashboard</a></p>
<h1>Newsletter</h1>
<p class="piccolo">Iscrizioni dalla barra in basso del sito. Ogni nuovo iscritto riceve un codice personale del ${SCONTO_NEWSLETTER}% su una materia.</p>
<div class="numeri"><div><b>${attivi.length}</b>iscritti</div><div><b>${attivi.filter((i) => i.creato.startsWith(oggi)).length}</b>oggi</div><div><b>${attivi.filter((i) => i.creato >= settimana).length}</b>ultimi 7 giorni</div><div><b>${iscritti.filter((i) => i.usato).length}</b>codici usati</div></div>
<p><a class="tasto" href="/admin/newsletter.csv">Scarica l’elenco (CSV)</a></p>
${iscritti.length ? `<div class="tab"><table><thead><tr><th>Email</th><th>Iscritto il</th><th>Pagina</th><th>Codice</th><th>Email di benvenuto</th></tr></thead><tbody>${righe}</tbody></table></div>` : '<p class="piccolo">Nessun iscritto per ora.</p>'}
</main></body></html>`, { headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store', 'x-robots-tag': 'noindex' } });
}
function paginaDisiscrizione(valido, fatto) {
  const corpo = !valido
    ? '<p>Il link non è valido. Per cancellarti scrivi a Carmine dalla pagina <a href="/contatti">Contatti</a>.</p>'
    : fatto
      ? '<p>Fatto: non riceverai più la newsletter di Ripetizioni di Analisi.</p><p><a href="/">Torna al sito</a></p>'
      : '<p>Vuoi cancellarti dalla newsletter di Ripetizioni di Analisi?</p><form method="post"><button class="tasto" type="submit">Cancellami</button></form>';
  return `<!doctype html><html lang="it"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex">
<title>Newsletter</title><style>${STILE} main{max-width:520px;margin:48px auto}</style></head><body><main><h1>Newsletter</h1>${corpo}</main></body></html>`;
}
