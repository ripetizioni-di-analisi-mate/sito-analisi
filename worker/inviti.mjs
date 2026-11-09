import { componiEmail, inviaEmailResend } from './email.mjs';
// «Invita un amico»: 15% di sconto a entrambi, solo sulle materie del sito (regole in src/data/inviti.ts).
//  - Ogni studente ha un codice personale e il link /invito/<CODICE>. Chi lo apre riceve il cookie «invito»
//    (30 giorni) e arriva alla pagina /invito, che spiega lo sconto.
//  - Se nei 30 giorni crea un account nuovo, l'account risulta invitato da chi ha mandato il link.
// Gli sconti sono personali e vengono verificati dal sito prima di aprire Stripe Checkout.
import PREZZI from '../src/data/prezzi.json';
import { SCONTO_INVITO, GIORNI_SCONTO_AMICO, GIORNI_COOKIE_INVITO, ALFABETO_INVITO, FORMATO_INVITO } from '../src/data/inviti.ts';

export const invitiAttivi = (env) => Boolean(env.STRIPE_SECRET_KEY) && env.INVITI !== '0';
const MATERIE_SCONTO = Object.keys(PREZZI);
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
        const id = 'AMICO-' + crypto.randomUUID();
        const scade = new Date(Date.now() + GIORNI_SCONTO_AMICO * 86400000).toISOString();
        o.sql.exec("INSERT INTO sconti_invito (id,email,tipo,codice,creato,scade) VALUES (?,?,'amico',?,?,?)", id, c.email, id, ora, scade);
        return { tipo: 'amico', id };
      }
      const p = o.riga("SELECT id FROM sconti_invito WHERE email = ? AND tipo = 'premio' AND usato IS NULL ORDER BY creato LIMIT 1", c.email);
      return p ? { tipo: 'premio', id: p.id } : { tipo: null };
    }
    case '/inv-acquisto': { // dopo il pagamento di una materia
      if (c.sconto) o.sql.exec('UPDATE sconti_invito SET usato = ? WHERE id = ? AND email = ?', c.transazione || ora, c.sconto, c.email);
      const invitante = o.riga('SELECT da FROM invitati WHERE email = ?', c.email)?.da;
      if (!invitante || !c.premia) return { invitante: null };
      // un premio solo per ogni amico, anche se il webhook arriva due volte o l'amico compra altre materie
      const nuovo = o.sql.exec('INSERT OR IGNORE INTO premi_invito (amico, invitante, creato) VALUES (?, ?, ?)', c.email, invitante, ora).rowsWritten > 0;
      if (nuovo) {
        const id = 'GRAZIE-' + crypto.randomUUID();
        o.sql.exec("INSERT INTO sconti_invito (id,email,tipo,amico,codice,creato) VALUES (?,?,'premio',?,?,?)", id, invitante, c.email, id, ora);
      }
      return { invitante: nuovo ? invitante : null };
    }
    case '/inv-elenco': // per la dashboard
      return {
        inviti: o.righe(`SELECT i.da AS invitante, i.email AS amico, i.creato,
          (SELECT 1 FROM premi_invito p WHERE p.amico = i.email) AS premiato FROM invitati i ORDER BY i.creato DESC LIMIT 300`),
        sconti: o.righe('SELECT email, tipo, codice, creato, usato FROM sconti_invito ORDER BY creato DESC LIMIT 300'),
      };
    default: return null;
  }
}

export async function scontoInvito(env, aDO, io, materia) {
  if (!io || !invitiAttivi(env) || !MATERIE_SCONTO.includes(materia) || io.materie.includes(materia)) return null;
  const s = await aDO(env, '/inv-sconto', { email: io.email });
  return s.id ? { id: s.id, tipo: s.tipo, percentuale: SCONTO_INVITO } : null;
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

// Registra il premio prima di inviare la notifica. Una seconda conferma dello stesso ordine non lo duplica.
export async function dopoAcquistoMateria(env, aDO, origine, { email, transazione, sconto }) {
  const r = await aDO(env, '/inv-acquisto', { email, transazione, sconto: sconto || null, premia: invitiAttivi(env) });
  if (r.invitante) await avvisaPremio(env, r.invitante, origine);
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

  if (p === '/api/sconto' && req.method === 'GET') {
    const io = await h.utenteCollegato(env, req).catch(() => null);
    const sconto = await scontoInvito(env, aDO, io, url.searchParams.get('materia') || '');
    return json(sconto || {}, 200, { 'cache-control': 'no-store' });
  }
  return null;
}
