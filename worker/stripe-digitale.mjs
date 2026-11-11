// Acquisti una tantum. Il browser sceglie i prodotti; listino, sconti e accessi sono decisi dal server.
import { riepilogoMaterie, riepilogoVideo, videoPosseduti, videoSovrapposti } from '../src/data/pacchetti.mjs';
import { VIDEOCORSI } from '../src/data/videocorsi.ts';
import { CONSENSO_FORNITURA, VERSIONE_CONDIZIONI } from '../src/data/consenso-digitale.mjs';
import { allegatoContrattoDigitale } from './contratto-digitale.mjs';
import { leggiFatturazione } from './fatturazione.mjs';
import { stripe } from './prenotazioni.mjs';
import { componiEmail, inviaEmailResend, SITO_EMAIL } from './email.mjs';
import { usaProduct } from '../src/data/stem-usa/pricing.ts';
import { courseUrl } from '../src/data/stem-usa/catalog.mjs';

const DURATA = 31 * 60;
const risposta = (d, status = 200) => Response.json(d, { status, headers: { 'cache-control': 'private, no-store' } });
const errore = (msg, status) => risposta({ errore: msg }, status);
const lista = (s) => [...new Set(s)];
const parse = (r) => r && { ...r, ordine: JSON.parse(r.ordine) };
const sovrapposti = (a, b) => a.some((k) => b.includes(k));
const formatoEuro = (n, en) =>
  new Intl.NumberFormat(en ? 'en-IE' : 'it-IT', { style: 'currency', currency: 'EUR' }).format(n / 100);

export function creaTabelleStripeDigitale(sql) {
  sql.exec(`CREATE TABLE IF NOT EXISTS ordini_stripe (
    id TEXT PRIMARY KEY, email TEXT NOT NULL, creato TEXT NOT NULL, stato TEXT NOT NULL DEFAULT 'in_attesa',
    in_centesimi INTEGER NOT NULL, ordine TEXT NOT NULL, fatturazione TEXT, sessione TEXT UNIQUE,
    pagamento TEXT UNIQUE, pagato TEXT, consenso TEXT NOT NULL, recesso TEXT, conferma TEXT, tentativo TEXT);
    CREATE INDEX IF NOT EXISTS ordini_stripe_email ON ordini_stripe(email, stato);
    CREATE INDEX IF NOT EXISTS ordini_stripe_recupero ON ordini_stripe(stato,tentativo,creato);`);
}

export function archivioStripeDigitale(o, p, c) {
  const adesso = new Date().toISOString();
  const carica = (id) => parse(o.riga('SELECT * FROM ordini_stripe WHERE id = ?', id));
  switch (p) {
    case '/dig-apri': {
      const posseduti = o.materieDi(c.email);
      const video = c.ordine.tipo === 'video' || c.ordine.tipo === 'videocorso';
      if (video ? videoSovrapposti(c.ordine.chiavi, posseduti, VIDEOCORSI) : sovrapposti(c.ordine.chiavi, posseduti))
        return { posseduto: true };
      const idSconto = c.ordine.sconto?.id;
      if (c.ordine.sconto?.tipo === 'promozione' && !o.riga(
        'SELECT 1 FROM promozioni_email WHERE id=? AND email=? AND materia=? AND percentuale=? AND scade>? AND usato IS NULL',
        idSconto, c.email, c.ordine.chiavi[0], c.ordine.percentuale, Date.now(),
      )) return { scontoUsato: true };
      const usato =
        idSconto &&
        o.riga(
          `SELECT 1 FROM ordini_stripe WHERE email=? AND stato='pagato' AND json_extract(ordine,'$.sconto.id')=?
          UNION ALL SELECT 1 FROM sconti_invito WHERE email=? AND id=? AND usato IS NOT NULL
          UNION ALL SELECT 1 FROM benvenuto WHERE email=? AND sconto_id=? AND usato IS NOT NULL
          UNION ALL SELECT 1 FROM email_automatiche WHERE email=? AND sconto=? AND acquisto IS NOT NULL LIMIT 1`,
          c.email,
          idSconto,
          c.email,
          idSconto,
          c.email,
          idSconto,
          c.email,
          idSconto,
        );
      if (usato) return { scontoUsato: true };
      const pendenti = o.righe(
        "SELECT * FROM ordini_stripe WHERE email=? AND stato='in_attesa' ORDER BY creato DESC",
        c.email,
      );
      const anagrafica = JSON.stringify(c.fatturazione);
      for (const r of pendenti) {
        const q = JSON.parse(r.ordine);
        if (sovrapposti(q.risorse, c.ordine.risorse) || (q.sconto?.id && q.sconto.id === c.ordine.sconto?.id)) {
          return { pendente: r.id, uguale: r.fatturazione === anagrafica && r.ordine === JSON.stringify(c.ordine) };
        }
      }
      if (
        pendenti.length >= 5 ||
        o.riga(
          'SELECT count(*) AS n FROM ordini_stripe WHERE email=? AND creato>?',
          c.email,
          new Date(Date.now() - 3600000).toISOString(),
        ).n >= 20
      )
        return { limite: true };
      o.sql.exec(
        'INSERT INTO ordini_stripe (id,email,creato,in_centesimi,ordine,fatturazione,consenso) VALUES (?,?,?,?,?,?,?)',
        c.id,
        c.email,
        adesso,
        c.ordine.totale,
        JSON.stringify(c.ordine),
        anagrafica,
        adesso,
      );
      return { id: c.id };
    }
    case '/dig-leggi':
      return { r: carica(c.id) };
    case '/dig-sessione': {
      o.sql.exec('UPDATE ordini_stripe SET sessione=COALESCE(sessione,?) WHERE id=?', c.sessione, c.id);
      return { ok: true };
    }
    case '/dig-fallito':
    case '/dig-scaduto': {
      o.sql.exec(
        "UPDATE ordini_stripe SET stato=?,fatturazione=NULL WHERE id=? AND stato='in_attesa'",
        p === '/dig-fallito' ? 'fallito' : 'scaduto',
        c.id,
      );
      return { ok: true };
    }
    case '/dig-conferma': {
      o.sql.exec('UPDATE ordini_stripe SET conferma=? WHERE id=?', adesso, c.id);
      return { ok: true };
    }
    case '/dig-da-sessione':
      return { r: parse(o.riga('SELECT * FROM ordini_stripe WHERE sessione=? AND email=?', c.sessione, c.email)) };
    case '/dig-da-recuperare': {
      const soglia = new Date(Date.now() - 3600000).toISOString();
      const rs = o.righe(
        `SELECT * FROM ordini_stripe WHERE (stato='in_attesa' OR (stato='pagato' AND conferma IS NULL))
        AND creato<=? AND (tentativo IS NULL OR tentativo<?) ORDER BY COALESCE(tentativo,creato),creato LIMIT 12`,
        soglia,
        soglia,
      );
      for (const r of rs) o.sql.exec('UPDATE ordini_stripe SET tentativo=? WHERE id=?', adesso, r.id);
      return { righe: rs.map(parse) };
    }
    case '/dig-pagato':
      return o.state.storage.transactionSync(() => {
        const r = carica(c.id),
          s = c.sessione;
        if (
          !r ||
          !sessioneCoerente(s, r) ||
          s.payment_status !== 'paid' ||
          s.status !== 'complete' ||
          typeof s.payment_intent !== 'string' ||
          !s.payment_intent.startsWith('pi_')
        )
          return { ok: false };
        if (r.stato === 'pagato') return { ok: r.pagamento === s.payment_intent, r };
        if (r.stato !== 'in_attesa' || !r.fatturazione) return { ok: false };
        const q = r.ordine;
        q.preesistenti = o.materieDi(r.email).filter((k) => q.abilitazioni.includes(k));
        let residuo = r.in_centesimi;
        const base = q.importi.reduce((a, b) => a + b, 0);
        for (const [i, k] of q.chiavi.entries()) {
          const importo = i === q.chiavi.length - 1 ? residuo : Math.floor((r.in_centesimi * q.importi[i]) / base);
          residuo -= importo;
          o.sql.exec(
            'INSERT INTO acquisti(email,materia,importo,valuta,transazione,creato) VALUES (?,?,?,?,?,?)',
            r.email,
            k,
            importo / 100,
            'EUR',
            q.chiavi.length === 1 ? s.payment_intent : s.payment_intent + ':' + k,
            adesso,
          );
        }
        for (const k of q.abilitazioni)
          o.sql.exec(
            'INSERT OR IGNORE INTO abilitazioni(email,materia,origine,creato) VALUES (?,?,?,?)',
            r.email,
            k,
            'stripe:' + r.id,
            adesso,
          );
        if (q.sconto?.id) {
          if (q.sconto.tipo === 'promozione') o.sql.exec(
            'UPDATE promozioni_email SET usato=? WHERE id=? AND email=? AND materia=? AND usato IS NULL',
            s.payment_intent, q.sconto.id, r.email, q.chiavi[0],
          );
          o.sql.exec(
            'UPDATE sconti_invito SET usato=? WHERE email=? AND id=? AND usato IS NULL',
            s.payment_intent,
            r.email,
            q.sconto.id,
          );
          o.sql.exec(
            'UPDATE benvenuto SET usato=? WHERE email=? AND sconto_id=? AND usato IS NULL',
            s.payment_intent,
            r.email,
            q.sconto.id,
          );
          o.sql.exec(
            'UPDATE email_automatiche SET acquisto=? WHERE email=? AND sconto=? AND acquisto IS NULL',
            s.payment_intent,
            r.email,
            q.sconto.id,
          );
        }
        o.sql.exec(
          "UPDATE ordini_stripe SET stato='pagato',sessione=?,pagamento=?,pagato=?,ordine=? WHERE id=?",
          s.id,
          s.payment_intent,
          adesso,
          JSON.stringify(q),
          r.id,
        );
        o.copiaDati = null;
        return { ok: true, r: carica(r.id) };
      });
    default:
      return null;
  }
}
function sessioneCoerente(s, r) {
  return (
    s?.metadata?.ordine_digitale === r.id &&
    s.client_reference_id === r.id &&
    s.mode === 'payment' &&
    s.currency === 'eur' &&
    s.amount_total === r.in_centesimi &&
    typeof s.id === 'string' &&
    (!r.sessione || r.sessione === s.id)
  );
}

export async function preventivoDigitale(c, io, h) {
  const tipo = c.tipo;
  const en = c.lingua === 'en';
  const materiaDigitale = (slug) => h.MATERIE.find((m) => m.slug === slug) || usaProduct(slug);
  let q;
  if (tipo === 'materie') q = riepilogoMaterie(c.materie, h.MATERIE);
  else if (tipo === 'video') q = riepilogoVideo(c.pacchetto, h.VIDEOCORSI);
  else if (tipo === 'materia' || tipo === 'videocorso') {
    const v =
      tipo === 'materia'
        ? materiaDigitale(c.slug)
        : h.VIDEOCORSI.find((x) => x.slug === c.slug);
    if (!v || (tipo === 'materia' && !v.attiva) || !(v.prezzo > 0)) throw new Error('Prodotto non acquistabile.');
    const prezzo = Math.round(v.prezzo * 100);
    q = {
      tipo,
      titolo: v.titolo,
      chiavi: [tipo === 'materia' ? v.slug : 'video-' + v.slug],
      importi: [prezzo],
      totale: prezzo,
    };
  } else throw new Error('Scegli un prodotto.');
  const video = tipo === 'video' || tipo === 'videocorso';
  if (video ? videoSovrapposti(q.chiavi, io.materie, h.VIDEOCORSI) : sovrapposti(q.chiavi, io.materie))
    throw new Error('Hai già accesso a questo materiale. Controlla il tuo account prima di acquistare.');
  const sconto = tipo === 'materia' ? await h.sconto(io, c.slug) : null;
  const percentuale = sconto?.percentuale || q.percentuale || 0;
  const totale = sconto ? Math.round((q.totale * (100 - percentuale)) / 100) : q.totale;
  const abilitazioni = h.conMaterieDeiVideo(q.chiavi);
  const selezione = { tipo };
  if (tipo === 'materie') selezione.materie = q.chiavi.join(',');
  else if (tipo === 'video') selezione.pacchetto = c.pacchetto;
  else selezione.slug = c.slug;
  const prodotti = q.chiavi.map(
    (k) => (video ? h.VIDEOCORSI.find((v) => 'video-' + v.slug === k) : materiaDigitale(k)).titolo,
  );
  return {
    tipo,
    titolo: en && tipo === 'materie' ? q.chiavi.length + ' subjects' : q.titolo,
    prodotti,
    chiavi: q.chiavi,
    importi: q.importi,
    totale,
    percentuale,
    sconto: sconto?.id ? { id: sconto.id, tipo: sconto.tipo } : null,
    abilitazioni,
    risorse: lista([...abilitazioni, ...(video ? videoPosseduti(q.chiavi, h.VIDEOCORSI) : [])]),
    lingua: en ? 'en' : 'it',
    selezione,
  };
}

async function apriStripe(env, r, origine) {
  const q = r.ordine,
    pref = q.lingua === 'en' ? '/en' : '';
  const ritorno = origine + pref + '/acquisto',
    params = new URLSearchParams(q.selezione);
  params.set('annullato', r.id);
  return stripe(
    env,
    'POST',
    '/checkout/sessions',
    {
      mode: 'payment',
      locale: q.lingua,
      client_reference_id: r.id,
      customer_email: r.email,
      expires_at: Math.ceil(Date.parse(r.creato) / 1000) + DURATA,
      metadata: { ordine_digitale: r.id },
      payment_intent_data: { receipt_email: r.email, metadata: { ordine_digitale: r.id } },
      line_items: {
        0: { quantity: 1, price_data: { currency: 'eur', unit_amount: r.in_centesimi, product_data: { name: q.titolo } } },
      },
      cancel_url: ritorno + '?' + params,
      success_url: ritorno + '?session_id={CHECKOUT_SESSION_ID}',
    },
    'digitale-' + r.id,
  );
}

async function confermaOrdine(env, h, r) {
  if (r.conferma) return true;
  const q = r.ordine,
    en = q.lingua === 'en',
    pref = en ? '/en' : '';
  if (q.tipo === 'materia' || q.tipo === 'materie')
    await h.dopoAcquistoMateria(env, h.aDO, SITO_EMAIL, { email: r.email, transazione: r.pagamento, sconto: q.sconto?.id });
  const messaggio = componiEmail({
    lingua: q.lingua,
    subject: (en ? 'Purchase confirmation · ' : 'Conferma di acquisto · ') + q.titolo,
    categoria: en ? 'Digital purchase' : 'Acquisto digitale',
    titolo: en ? 'Your payment is confirmed' : 'Il tuo pagamento è confermato',
    righe: [
      en
        ? 'You purchased digital study content from Carmine Tornincasa. Your order is available in your account.'
        : 'Hai acquistato da Carmine Tornincasa del materiale digitale di studio. Trovi il tuo acquisto nel tuo account.',
      (en ? 'Order number: ' : 'Numero d’ordine: ') + r.id,
      (en ? 'Purchase date: ' : 'Data dell’acquisto: ') +
        new Date(r.pagato).toLocaleString(en ? 'en-GB' : 'it-IT', { timeZone: 'Europe/Rome', timeZoneName: 'short' }),
      (en ? 'Included products: ' : 'Prodotti inclusi: ') + q.prodotti.join(', '),
    ],
    scheda: { etichetta: q.titolo, valore: formatoEuro(r.in_centesimi, en) },
    dopo: [
      en
        ? 'Before payment you accepted the terms of sale and made the following declaration. Your statutory rights for defective content still apply.'
        : 'Prima del pagamento hai accettato le condizioni di vendita e confermato la dichiarazione riportata qui sotto. Restano validi i diritti per i contenuti difettosi.',
      q.consensoFornitura,
      (en ? 'Terms version: ' : 'Versione dei termini: ') + q.versioneCondizioni,
      SITO_EMAIL + pref + '/termini',
      SITO_EMAIL + pref + '/rimborsi',
      SITO_EMAIL + pref + '/recesso',
      'Carmine Tornincasa · P. IVA 04779350612 · carminetornincasa98@gmail.com',
    ],
    pulsante: [en ? 'Open your account' : 'Apri il tuo account', SITO_EMAIL + pref + '/account'],
  });
  messaggio.attachments = [allegatoContrattoDigitale(q.lingua, q.versioneCondizioni)];
  const esito = await inviaEmailResend(env, r.email, messaggio, 'conferma-digitale-' + r.id, 'acquisto-digitale');
  if (esito.ok) await h.aDO(env, '/dig-conferma', { id: r.id });
  return esito.ok;
}

export async function eventoDigitale(env, h, ev) {
  const s = ev.data?.object,
    id = s?.metadata?.ordine_digitale;
  if (!id || !ev.type.startsWith('checkout.session.')) return null;
  if (ev.type === 'checkout.session.expired' || ev.type === 'checkout.session.async_payment_failed') {
    const { r } = await h.aDO(env, '/dig-leggi', { id });
    if (r && sessioneCoerente(s, r)) {
      if (ev.type === 'checkout.session.expired' && s.status === 'expired') await h.aDO(env, '/dig-scaduto', { id });
      if (ev.type === 'checkout.session.async_payment_failed' && s.status === 'complete' && s.payment_status === 'unpaid')
        await h.aDO(env, '/dig-fallito', { id });
    }
  } else if (
    ['checkout.session.completed', 'checkout.session.async_payment_succeeded'].includes(ev.type) &&
    s.payment_status === 'paid'
  ) {
    const esito = await h.aDO(env, '/dig-pagato', { id, sessione: s });
    if (!esito?.ok) return errore('Ordine non coerente.', 400);
    if (!(await confermaOrdine(env, h, esito.r))) return errore('Conferma in attesa.', 503);
  }
  return risposta({ ok: true });
}

async function riconcilia(env, h, r) {
  if (r.stato !== 'in_attesa' || !r.sessione) return r;
  const s = await stripe(env, 'GET', '/checkout/sessions/' + encodeURIComponent(r.sessione) + '?expand[]=payment_intent');
  if (!sessioneCoerente(s, r)) throw new Error('Sessione non coerente.');
  if (s.status === 'open') return { ...r, url: s.url };
  const pagamento = s.payment_intent;
  if (pagamento && typeof pagamento === 'object') s.payment_intent = pagamento.id;
  let tipo;
  if (s.status === 'expired') tipo = 'checkout.session.expired';
  else if (s.status === 'complete' && s.payment_status === 'paid') tipo = 'checkout.session.completed';
  else if (s.status === 'complete' && s.payment_status === 'unpaid') {
    if (['requires_payment_method', 'canceled'].includes(pagamento?.status)) tipo = 'checkout.session.async_payment_failed';
    else return { ...r, stato: 'in_elaborazione' };
  }
  if (!tipo) throw new Error('Stato del pagamento non riconosciuto.');
  await eventoDigitale(env, h, { type: tipo, data: { object: s } });
  return (await h.aDO(env, '/dig-leggi', { id: r.id })).r;
}

export async function recuperaOrdiniDigitali(env, h) {
  const { righe } = await h.aDO(env, '/dig-da-recuperare');
  for (const r of righe) {
    try {
      if (r.stato === 'pagato') await confermaOrdine(env, h, r);
      else if (r.sessione) await riconcilia(env, h, r);
      else if (Date.now() - Date.parse(r.creato) > 86400000) await h.aDO(env, '/dig-scaduto', { id: r.id });
    } catch {
      console.error('ordine digitale: riconciliazione rinviata');
    }
  }
}

export async function gestisciAcquisti(req, env, p, h) {
  const url = new URL(req.url),
    origine = url.origin;
  if (
    req.method !== 'GET' &&
    (req.method !== 'POST' || req.headers.get('origin') !== origine || req.headers.get('sec-fetch-site') === 'cross-site')
  )
    return errore('Richiesta non consentita.', 403);
  if (env.VENDITA === '0' || !env.STRIPE_SECRET_KEY || !env.STRIPE_WEBHOOK_SECRET)
    return errore('Pagamento temporaneamente non disponibile.', 503);
  const io = await h.utenteCollegato(env, req);
  if (!io) return errore('Accedi al tuo account per continuare.', 401);
  if (p === '/api/acquisti/stato' && req.method === 'GET') {
    const sessione = url.searchParams.get('session_id') || '';
    if (!/^cs_(test|live)_[A-Za-z0-9]+$/.test(sessione)) return errore('Sessione non valida.', 400);
    const { r } = await h.aDO(env, '/dig-da-sessione', { sessione, email: io.email });
    if (!r) return errore('Ordine non trovato.', 404);
    let ordine;
    try {
      ordine = await riconcilia(env, h, r);
    } catch {
      return errore('Verifica del pagamento in corso. Riprova.', 503);
    }
    const pref = ordine.ordine.lingua === 'en' ? '/en' : '';
    const corsoUsa = ordine.ordine.selezione.tipo === 'materia' && usaProduct(ordine.ordine.selezione.slug);
    return risposta({
      stato: ordine.stato,
      titolo: ordine.ordine.titolo,
      totale: ordine.in_centesimi,
      destinazione: corsoUsa ? courseUrl(corsoUsa.slug) : pref + '/account',
      riprova: ordine.stato === 'fallito' ? pref + '/acquisto?' + new URLSearchParams(ordine.ordine.selezione) : undefined,
    });
  }
  if (req.method !== 'POST') return errore('Metodo non consentito.', 405);
  if (!req.headers.get('content-type')?.includes('application/json')) return errore('Formato non valido.', 415);
  const lettore = req.body?.getReader();
  if (!lettore) return errore('Richiesta non valida.', 400);
  let testo = '',
    size = 0;
  const decoder = new TextDecoder();
  for (;;) {
    const { value, done } = await lettore.read();
    if (done) break;
    size += value.byteLength;
    if (size > 8192) {
      await lettore.cancel();
      return errore('Richiesta troppo grande.', 413);
    }
    testo += decoder.decode(value, { stream: true });
  }
  let c;
  try {
    c = JSON.parse(testo + decoder.decode());
  } catch {
    return errore('Richiesta non valida.', 400);
  }
  if (!c || typeof c !== 'object' || Array.isArray(c)) return errore('Richiesta non valida.', 400);
  if (p === '/api/acquisti/annulla') {
    const { r } = await h.aDO(env, '/dig-leggi', { id: typeof c.id === 'string' ? c.id : '' });
    if (!r || r.email !== io.email) return errore('Ordine non trovato.', 404);
    if (r.stato !== 'in_attesa') return risposta({ stato: r.stato });
    if (!r.sessione) return errore('Sessione in preparazione.', 409);
    try {
      const s = await stripe(env, 'POST', '/checkout/sessions/' + r.sessione + '/expire');
      if (!sessioneCoerente(s, r) || s.status !== 'expired') return errore('Verifica il tuo ordine.', 409);
      await h.aDO(env, '/dig-scaduto', { id: r.id });
      return risposta({ stato: 'scaduto' });
    } catch {
      try {
        const ordine = await riconcilia(env, h, r);
        if (ordine.stato !== 'in_attesa') return risposta({ stato: ordine.stato, sessione: r.sessione });
      } catch { /* La sessione resta riservata se Stripe non risponde. */ }
      return errore('Verifica il tuo ordine prima di riprovare.', 409);
    }
  }
  if (p !== '/api/acquisti/preventivo' && p !== '/api/acquisti/checkout') return errore('Pagina non trovata.', 404);
  let q;
  try {
    q = await preventivoDigitale(c, io, h);
  } catch (e) {
    return errore(e.message, 400);
  }
  if (p.endsWith('/preventivo'))
    return risposta({ titolo: q.titolo, totale: q.totale, percentuale: q.percentuale, chiavi: q.chiavi });
  const anagrafica = leggiFatturazione(c.fatturazione);
  if (anagrafica.errore) return errore(anagrafica.errore, 400);
  if (c.versioneCondizioni !== VERSIONE_CONDIZIONI)
    return errore('Ricarica la pagina per leggere le condizioni di vendita aggiornate.', 409);
  if (c.condizioni !== true || c.immediato !== true)
    return errore('Verifica le condizioni di vendita e la richiesta di accesso immediato.', 400);
  if (c.totaleAtteso !== q.totale) return errore('Il prezzo è cambiato. Aggiorna il riepilogo prima di pagare.', 409);
  q.versioneCondizioni = VERSIONE_CONDIZIONI;
  q.consensoFornitura = CONSENSO_FORNITURA[q.lingua];
  const id = crypto.randomUUID();
  const args = { id, email: io.email, ordine: q, fatturazione: anagrafica.dati };
  try {
    let apertura = await h.aDO(env, '/dig-apri', args);
    if (apertura.pendente) {
      const { r } = await h.aDO(env, '/dig-leggi', { id: apertura.pendente });
      const precedente = await riconcilia(env, h, r);
      if (precedente.stato === 'pagato') return errore('Hai già acquistato questo materiale.', 409);
      if (precedente.stato === 'in_elaborazione') return risposta({ sessione: r.sessione });
      if (precedente.stato === 'scaduto' || precedente.stato === 'fallito') apertura = await h.aDO(env, '/dig-apri', args);
      else if (!apertura.uguale)
        return risposta(
          {
            errore: 'Hai già un pagamento aperto per questo acquisto o sconto. Puoi annullarlo prima di riprovare.',
            pendente: r.id,
          },
          409,
        );
      else if (precedente.url) return risposta({ url: precedente.url });
      else if (r.sessione) return errore('Verifica lo stato del pagamento prima di riprovare.', 409);
      else apertura = { id: r.id };
    }
    if (apertura.posseduto || apertura.scontoUsato)
      return errore('Il tuo account è cambiato. Aggiorna il riepilogo prima di pagare.', 409);
    if (!apertura.id) return errore('Pagamento già aperto o limite di tentativi raggiunto. Riprova più tardi.', 429);
    const { r } = await h.aDO(env, '/dig-leggi', { id: apertura.id });
    let s;
    try {
      s = await apriStripe(env, r, origine);
    } catch (e) {
      if ([400, 401, 403, 404].includes(e.status)) await h.aDO(env, '/dig-scaduto', { id: r.id });
      throw e;
    }
    if (!s.id || !s.url) throw new Error('sessione mancante');
    await h.aDO(env, '/dig-sessione', { id: r.id, sessione: s.id });
    return risposta({ url: s.url });
  } catch {
    return errore('Non è stato possibile aprire il pagamento. Riprova tra poco.', 502);
  }
}
