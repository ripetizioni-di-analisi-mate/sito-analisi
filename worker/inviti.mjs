import { componiEmail, inviaEmailResend } from './email.mjs';
// «Invita un amico»: 15% di sconto a entrambi, solo sulle materie del sito (regole in src/data/inviti.ts).
//  - Ogni studente ha un codice personale e il link /invito/<CODICE>. Chi lo apre riceve il cookie «invito»
//    (30 giorni) e arriva alla pagina /invito, che spiega lo sconto.
//  - Se nei 30 giorni crea un account nuovo, l'account risulta invitato da chi ha mandato il link.
//  - Al primo acquisto di una materia l'invitato paga il 15% in meno: il Worker crea su Paddle un codice
//    di sconto personale (un solo uso, solo i prezzi delle materie) e la pagina Sblocca lo passa al checkout.
//  - Quando l'invitato compra una materia, chi lo ha invitato riceve un suo codice del 15% (un solo uso,
//    senza scadenza), applicato da solo al suo prossimo acquisto di una materia, e un'email di avviso.
// Serve il segreto PADDLE_API_KEY su Cloudflare (permessi Paddle: discount.read e discount.write).
// Senza la chiave la funzione resta spenta: niente riquadro nell'account e nessuno sconto. INVITI = "0" la spegne.
import PREZZI from '../src/data/prezzi.json';
import { SCONTO_INVITO, GIORNI_SCONTO_AMICO, GIORNI_COOKIE_INVITO, ALFABETO_INVITO, FORMATO_INVITO } from '../src/data/inviti.ts';

export const invitiAttivi = (env) => Boolean(env.PADDLE_API_KEY) && env.INVITI !== '0';
const MATERIE_SCONTO = Object.keys(PREZZI);
const variabilePrezzo = (slug) => `PADDLE_PREZZO_${slug.toUpperCase().replace(/-/g, '_')}`;
const prezziMaterie = (env) => MATERIE_SCONTO.map((s) => env[variabilePrezzo(s)]).filter(Boolean);
const casuale = (n, alfabeto = ALFABETO_INVITO) => [...crypto.getRandomValues(new Uint8Array(n))].map((b) => alfabeto[b % alfabeto.length]).join('');

// ---------- archivio (Durable Object) ----------
export function creaTabelleInviti(sql) {
  sql.exec(`
    CREATE TABLE IF NOT EXISTS inviti (email TEXT PRIMARY KEY, codice TEXT UNIQUE, creato TEXT);
    CREATE TABLE IF NOT EXISTS invitati (email TEXT PRIMARY KEY, da TEXT, creato TEXT);
    CREATE INDEX IF NOT EXISTS invitati_da ON invitati (da);
    CREATE TABLE IF NOT EXISTS sconti_invito (id TEXT PRIMARY KEY, email TEXT, tipo TEXT, amico TEXT, codice TEXT, creato TEXT, scade TEXT, usato TEXT);
    CREATE INDEX IF NOT EXISTS sconti_invito_email ON sconti_invito (email);
    CREATE TABLE IF NOT EXISTS premi_invito (amico TEXT PRIMARY KEY, invitante TEXT, creato TEXT);
  `);
}

export function archivioInviti(o, pathname, c) {
  const ora = new Date().toISOString();
  const haComprato = (email) => Boolean(o.riga(`SELECT 1 AS x FROM acquisti WHERE email = ? AND materia IN (${MATERIE_SCONTO.map(() => '?').join(',')}) LIMIT 1`, email, ...MATERIE_SCONTO));
  switch (pathname) {
    case '/inv-codice': { // codice personale, creato alla prima richiesta
      const r = o.riga('SELECT codice FROM inviti WHERE email = ?', c.email);
      if (r) return { codice: r.codice };
      for (let i = 0; i < 8; i++) {
        const codice = casuale(7);
        try { o.sql.exec('INSERT INTO inviti (email, codice, creato) VALUES (?, ?, ?)', c.email, codice, ora); return { codice }; } catch { /* codice già usato: si riprova */ }
      }
      return { codice: null };
    }
    case '/inv-registra': { // account nuovo arrivato con un link d'invito
      const da = o.riga('SELECT email FROM inviti WHERE codice = ?', c.codice)?.email;
      if (!da || da === c.email) return { ok: false };
      o.sql.exec('INSERT OR IGNORE INTO invitati (email, da, creato) VALUES (?, ?, ?)', c.email, da, ora);
      return { ok: true };
    }
    case '/inv-stato': {
      const codice = o.riga('SELECT codice FROM inviti WHERE email = ?', c.email)?.codice || null;
      const amici = o.righe('SELECT email FROM invitati WHERE da = ?', c.email);
      const premi = o.righe("SELECT creato, usato FROM sconti_invito WHERE email = ? AND tipo = 'premio' ORDER BY creato", c.email);
      const invitato = o.riga('SELECT da FROM invitati WHERE email = ?', c.email);
      return {
        codice,
        iscritti: amici.length,
        hannoComprato: amici.filter((a) => haComprato(a.email)).length,
        premiDisponibili: premi.filter((p) => !p.usato).length,
        premiUsati: premi.filter((p) => p.usato).length,
        scontoAmico: Boolean(invitato) && !haComprato(c.email),
      };
    }
    case '/inv-sconto': { // quale sconto spetta al prossimo acquisto di una materia
      const invitato = o.riga('SELECT da FROM invitati WHERE email = ?', c.email);
      if (invitato && !haComprato(c.email)) {
        const s = o.riga("SELECT id, scade FROM sconti_invito WHERE email = ? AND tipo = 'amico' AND usato IS NULL ORDER BY creato DESC LIMIT 1", c.email);
        // il codice dell'amico si rifà quando sta per scadere (margine di un giorno)
        if (s && s.scade > new Date(Date.now() + 86400000).toISOString()) return { tipo: 'amico', id: s.id };
        return { tipo: 'amico', crea: true };
      }
      const p = o.riga("SELECT id FROM sconti_invito WHERE email = ? AND tipo = 'premio' AND usato IS NULL ORDER BY creato LIMIT 1", c.email);
      return p ? { tipo: 'premio', id: p.id } : { tipo: null };
    }
    case '/inv-salva-sconto':
      o.sql.exec('INSERT OR REPLACE INTO sconti_invito (id, email, tipo, amico, codice, creato, scade, usato) VALUES (?, ?, ?, ?, ?, ?, ?, NULL)',
        c.id, c.email, c.tipo, c.amico || null, c.codice || null, ora, c.scade || null);
      return { ok: true };
    case '/inv-acquisto': { // dopo il pagamento di una materia (webhook Paddle)
      if (c.sconto) o.sql.exec('UPDATE sconti_invito SET usato = ? WHERE id = ? AND email = ?', c.transazione || ora, c.sconto, c.email);
      const invitante = o.riga('SELECT da FROM invitati WHERE email = ?', c.email)?.da;
      if (!invitante) return { invitante: null };
      // un premio solo per ogni amico, anche se il webhook arriva due volte o l'amico compra altre materie
      const nuovo = o.sql.exec('INSERT OR IGNORE INTO premi_invito (amico, invitante, creato) VALUES (?, ?, ?)', c.email, invitante, ora).rowsWritten > 0;
      return { invitante: nuovo ? invitante : null };
    }
    case '/inv-premio-annulla': // creazione del codice su Paddle non riuscita: il premio si potrà riassegnare
      o.sql.exec('DELETE FROM premi_invito WHERE amico = ?', c.amico);
      return { ok: true };
    case '/inv-elenco': // per la dashboard
      return {
        inviti: o.righe(`SELECT i.da AS invitante, i.email AS amico, i.creato,
          (SELECT 1 FROM premi_invito p WHERE p.amico = i.email) AS premiato FROM invitati i ORDER BY i.creato DESC LIMIT 300`),
        sconti: o.righe('SELECT email, tipo, codice, creato, usato FROM sconti_invito ORDER BY creato DESC LIMIT 300'),
      };
    default: return null;
  }
}

// ---------- Paddle ----------
async function paddle(env, metodo, percorso, corpo) {
  // PADDLE_API_URL serve solo alle prove in locale (server finto); in produzione resta vuota
  const base = env.PADDLE_API_URL || (env.PADDLE_AMBIENTE === 'sandbox' ? 'https://sandbox-api.paddle.com' : 'https://api.paddle.com');
  const r = await fetch(base + percorso, {
    method: metodo,
    headers: { authorization: `Bearer ${env.PADDLE_API_KEY}`, 'content-type': 'application/json' },
    body: corpo ? JSON.stringify(corpo) : undefined,
    signal: AbortSignal.timeout(10000),
  });
  const d = await r.json().catch(() => ({}));
  if (!r.ok) throw new Error(`Paddle ${r.status} ${d?.error?.code || ''} ${d?.error?.detail || ''}`.trim());
  return d.data;
}
// Codice di sconto personale: 15% (o la percentuale data), un solo uso, valido solo sui prezzi delle materie.
// Usato anche dallo sconto di benvenuto (worker/benvenuto.mjs) con il 10%.
export async function creaSconto(env, { prefisso, descrizione, scade, percentuale = SCONTO_INVITO, materia, codice = prefisso + casuale(8) }) {
  const prezzi = materia ? [env[variabilePrezzo(materia)]].filter(Boolean) : prezziMaterie(env);
  if (!prezzi.length) throw new Error('prezzi delle materie mancanti');
  const d = await paddle(env, 'POST', '/discounts', {
    description: descrizione.slice(0, 500),
    type: 'percentage',
    amount: String(percentuale),
    enabled_for_checkout: true,
    code: codice,
    usage_limit: 1,
    restrict_to: prezzi,
    expires_at: scade || null,
  });
  if (!d?.id) throw new Error('Paddle non ha restituito lo sconto');
  return { id: d.id, codice };
}

// ---------- email a chi ha invitato ----------
async function avvisaPremio(env, a, origine) {
  const messaggio = componiEmail({
    subject: `Il tuo premio Invita un amico · ${SCONTO_INVITO}% di sconto`,
    titolo: 'Hai ricevuto il premio invito', categoria: 'Invita un amico', bronzo: true,
    anteprima: 'Lo sconto è disponibile sul tuo prossimo acquisto di una materia.',
    righe: ['Ciao,', 'una persona che hai invitato ha appena sbloccato una materia. Il tuo premio è disponibile nel tuo account.'],
    scheda: { valore: `−${SCONTO_INVITO}%`, nota: 'Sul prossimo acquisto di una materia' },
    dopo: ['Lo sconto si applica al pagamento quando accedi con questo account.'],
    pulsante: ['Scegli la materia', `${origine}/prezzi`],
    motivo: 'Ricevi questa email perché è maturato il premio di un tuo invito.',
  });
  return (await inviaEmailResend(env, a, messaggio)).ok;
}

// Dopo l'iscrizione: se il browser ha il cookie dell'invito, il nuovo account risulta invitato.
export async function registraInvitato(env, aDO, email, codiceCookie) {
  if (!invitiAttivi(env)) return;
  const codice = String(codiceCookie || '').toUpperCase();
  if (!FORMATO_INVITO.test(codice)) return;
  await aDO(env, '/inv-registra', { email, codice });
}

// Dopo il pagamento di una materia (webhook Paddle, transaction.completed).
export async function dopoAcquistoMateria(env, aDO, origine, { email, transazione, sconto }) {
  const r = await aDO(env, '/inv-acquisto', { email, transazione, sconto: sconto || null });
  if (!r.invitante || !invitiAttivi(env)) return;
  try {
    const s = await creaSconto(env, { prefisso: 'GRAZIE', descrizione: `Invita un amico: premio per ${r.invitante}` });
    await aDO(env, '/inv-salva-sconto', { id: s.id, email: r.invitante, tipo: 'premio', amico: email, codice: s.codice });
    await avvisaPremio(env, r.invitante, origine);
  } catch (e) {
    console.log('inviti: premio non creato', String(e));
    await aDO(env, '/inv-premio-annulla', { amico: email });
  }
}

// ---------- percorsi del Worker ----------
// h = { aDO, json, utenteCollegato, leggiCookie }
export async function gestisciInviti(req, env, ctx, p, h) {
  const { aDO, json } = h;
  const url = new URL(req.url);

  // /invito/<CODICE>: il cookie dell'invito e poi la pagina che spiega lo sconto
  const m = p.match(/^\/invito\/([A-Za-z0-9]{4,12})\/?$/);
  if (m && req.method === 'GET') {
    const codice = m[1].toUpperCase();
    const head = new Headers({ location: '/invito', 'cache-control': 'no-store', 'x-robots-tag': 'noindex' });
    if (FORMATO_INVITO.test(codice)) head.append('set-cookie', `invito=${codice}; Path=/; Max-Age=${GIORNI_COOKIE_INVITO * 86400}; Secure; SameSite=Lax`);
    return new Response(null, { status: 302, headers: head });
  }

  if (p === '/api/invito' && req.method === 'GET') {
    const io = await h.utenteCollegato(env, req).catch(() => null);
    if (!io) return json({ errore: 'non collegato' }, 401);
    if (!invitiAttivi(env)) return json({ attivo: false });
    const { codice } = await aDO(env, '/inv-codice', { email: io.email });
    const stato = await aDO(env, '/inv-stato', { email: io.email });
    return json({ attivo: true, percentuale: SCONTO_INVITO, ...stato, codice, link: codice ? `${url.origin}/invito/${codice}` : null });
  }

  // Sconto da passare al checkout di Paddle per una materia (pagina Sblocca).
  if (p === '/api/sconto' && req.method === 'GET') {
    const io = await h.utenteCollegato(env, req).catch(() => null);
    const materia = url.searchParams.get('materia') || '';
    if (!io || !invitiAttivi(env) || !MATERIE_SCONTO.includes(materia) || io.materie.includes(materia)) return json({});
    let s = await aDO(env, '/inv-sconto', { email: io.email });
    if (s.tipo === 'amico' && s.crea) {
      try {
        const scade = new Date(Date.now() + GIORNI_SCONTO_AMICO * 86400000).toISOString();
        const nuovo = await creaSconto(env, { prefisso: 'AMICO', descrizione: `Invita un amico: primo acquisto di ${io.email}`, scade });
        await aDO(env, '/inv-salva-sconto', { id: nuovo.id, email: io.email, tipo: 'amico', codice: nuovo.codice, scade });
        s = { tipo: 'amico', id: nuovo.id };
      } catch (e) {
        console.log('inviti: sconto amico non creato', String(e));
        return json({});
      }
    }
    return s.id ? json({ id: s.id, tipo: s.tipo, percentuale: SCONTO_INVITO }) : json({});
  }
  return null;
}
