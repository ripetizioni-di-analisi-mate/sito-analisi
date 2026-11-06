import { riepilogoMaterie, riepilogoVideo, videoSovrapposti } from '../src/data/pacchetti.mjs';

const variabilePrezzo = (chiave) => `PADDLE_PREZZO_${chiave.toUpperCase().replace(/-/g, '_')}`;

export function creaTabellePacchetti(sql) {
  sql.exec(`CREATE TABLE IF NOT EXISTS pacchetti_ordini (id TEXT PRIMARY KEY, email TEXT NOT NULL, creato INTEGER NOT NULL, sconto TEXT UNIQUE, dati TEXT NOT NULL, pagato TEXT);
    CREATE INDEX IF NOT EXISTS pacchetti_email ON pacchetti_ordini(email, creato);`);
}
export function archivioPacchetti(o, p, c) {
  switch (p) {
    case '/pac-nuovo': {
      const ora = Date.now();
      const n = o.riga('SELECT COUNT(*) AS n FROM pacchetti_ordini WHERE email = ? AND creato > ?', c.email, ora - 3600000)?.n || 0;
      if (n >= 20) return { ok: false };
      o.sql.exec('INSERT INTO pacchetti_ordini (id, email, creato, dati) VALUES (?, ?, ?, ?)', c.id, c.email, ora, JSON.stringify(c.dati));
      return { ok: true };
    }
    case '/pac-associa':
      o.sql.exec('UPDATE pacchetti_ordini SET sconto = ? WHERE id = ?', c.sconto || null, c.id);
      return { ok: true };
    case '/pac-leggi': {
      const r = (c.id ? o.riga('SELECT * FROM pacchetti_ordini WHERE id = ?', c.id) : null)
        || (c.sconto ? o.riga('SELECT * FROM pacchetti_ordini WHERE sconto = ?', c.sconto) : null);
      return r ? { ...JSON.parse(r.dati), id: r.id, email: r.email, sconto_id: r.sconto, pagato: r.pagato } : null;
    }
    case '/pac-pagato':
      o.sql.exec('UPDATE pacchetti_ordini SET pagato = COALESCE(pagato, ?) WHERE id = ?', c.transazione, c.id);
      return { ok: true };
    default: return null;
  }
}

// Il server sceglie prezzi, sconto e account. Al browser non si accettano importi o abilitazioni.
export async function gestisciPacchetti(req, env, h) {
  const url = new URL(req.url);
  const risposta = (x, status = 200) => h.json(x, status, { 'cache-control': 'no-store' });
  if (req.method !== 'POST') return risposta({ errore: 'Metodo non consentito.' }, 405);
  if (req.headers.get('origin') !== url.origin || req.headers.get('sec-fetch-site') === 'cross-site') return risposta({ errore: 'Richiesta non valida.' }, 403);
  const io = await h.utenteCollegato(env, req);
  if (!io) return risposta({ errore: 'Accedi per acquistare il pacchetto.' }, 401);
  if (!env.PADDLE_API_KEY || !env.PADDLE_CLIENT_TOKEN) return risposta({ errore: 'Pagamento temporaneamente non disponibile. Riprova tra poco.' }, 503);
  // Payload piccolo e letto come stream per non fidarsi del Content-Length inviato dal client.
  const lettore = req.body?.getReader();
  if (!lettore) return risposta({ errore: 'Scegli un pacchetto.' }, 400);
  let testo = '', bytes = 0;
  const decoder = new TextDecoder();
  while (true) {
    const { done, value } = await lettore.read();
    if (done) break;
    bytes += value.byteLength;
    if (bytes > 4096) { await lettore.cancel(); return risposta({ errore: 'Richiesta troppo grande.' }, 413); }
    testo += decoder.decode(value, { stream: true });
  }
  let body, q;
  try {
    body = JSON.parse(testo + decoder.decode());
    if (!body || !['materie', 'video'].includes(body.tipo)) throw new Error('Scegli un pacchetto.');
    q = body.tipo === 'materie' ? riepilogoMaterie(body.materie, h.MATERIE) : riepilogoVideo(body.pacchetto, h.VIDEOCORSI);
  } catch (e) { return risposta({ errore: e.message || 'Scelta non valida.' }, 400); }
  const giaTuo = q.tipo === 'materie' ? q.chiavi.some((k) => io.materie.includes(k)) : videoSovrapposti(q.chiavi, io.materie, h.VIDEOCORSI);
  if (giaTuo) return risposta({ errore: 'Hai già parte di questo pacchetto. Scegli le materie che ti mancano o scrivi a Carmine per completare i videocorsi.' }, 409);
  const prezzi = q.chiavi.map((k) => env[variabilePrezzo(k)]);
  if (prezzi.some((x) => !/^pri_[a-z0-9]{26}$/.test(x || ''))) return risposta({ errore: 'Uno dei corsi non è ancora acquistabile. Scegli un altro pacchetto.' }, 503);
  const id = crypto.randomUUID();
  const ordine = { ...q, prezzi };
  const prenota = await h.aDO(env, '/pac-nuovo', { id, email: io.email, dati: ordine });
  if (!prenota.ok) return risposta({ errore: 'Hai aperto molti riepiloghi. Riprova più tardi.' }, 429);
  let scontoId = null;
  const sconto = q.tipo === 'materie' ? { type: 'percentage', amount: String(q.percentuale) }
    : q.sconto > 0 ? { type: 'flat', amount: String(q.sconto), currency_code: 'EUR' } : null;
  if (sconto) {
    try {
      const base = env.PADDLE_API_URL || (env.PADDLE_AMBIENTE === 'sandbox' ? 'https://sandbox-api.paddle.com' : 'https://api.paddle.com');
      const r = await fetch(`${base}/discounts`, { method: 'POST', signal: AbortSignal.timeout(15000),
        headers: { authorization: `Bearer ${env.PADDLE_API_KEY}`, 'content-type': 'application/json' },
        body: JSON.stringify({ description: q.titolo.startsWith('Pacchetto ') ? q.titolo : `Pacchetto ${q.titolo}`, ...sconto, mode: 'custom', enabled_for_checkout: true,
          usage_limit: 1, recur: false, restrict_to: prezzi, expires_at: new Date(Date.now() + 86400000).toISOString() }) });
      const d = await r.json();
      if (!r.ok || !/^dsc_[a-z0-9]{26}$/.test(d.data?.id || '')) throw new Error(d.error?.code || `HTTP_${r.status}`);
      scontoId = d.data.id;
      await h.aDO(env, '/pac-associa', { id, sconto: scontoId });
    } catch (e) {
      console.error(JSON.stringify({ evento: 'pacchetto_sconto_non_creato', ordine: id, errore: String(e.message).slice(0,150) }));
      return risposta({ errore: 'Non riesco ad aprire il pagamento. Riprova tra poco.' }, 502);
    }
  }
  return risposta({ id, totale: q.totale, risparmio: q.risparmio, chiavi: q.chiavi,
    items: prezzi.map((priceId) => ({ priceId, quantity: 1 })), discountId: scontoId });
}

// L'ordine salvato è autorevole; i custom_data del checkout non possono aggiungere corsi.
export function verificaOrdinePagato(d, q) {
  if (!d?.id || !q || d.status !== 'completed') return false;
  if (d.discount_id && d.discount_id !== q.sconto_id) return false;
  const items = d.items;
  if (!Array.isArray(items) || items.length !== q.prezzi.length || new Set(items.map((x) => x.price?.id || x.price_id)).size !== items.length) return false;
  return q.prezzi.every((id) => items.some((x) => (x.price?.id || x.price_id) === id && Number.isInteger(x.quantity) && x.quantity >= 1));
}

export async function completaPacchetto(d, q, env, h) {
  if (!verificaOrdinePagato(d, q)) return false;
  const totale = Number(d.details?.totals?.total);
  if (!Number.isSafeInteger(totale) || totale < 0) return false;
  // La somma delle registrazioni deve coincidere con il totale effettivamente incassato.
  const base = q.importi.reduce((a, b) => a + b, 0);
  let residuo = totale;
  for (let i = 0; i < q.chiavi.length; i++) {
    const quota = i === q.chiavi.length - 1 ? residuo : Math.floor(totale * q.importi[i] / base);
    residuo -= quota;
    await h.aDO(env, '/registra-acquisto', { email: q.email, materia: q.chiavi[i], importo: quota / 100,
      valuta: d.currency_code || 'EUR', transazione: `${d.id}:${q.chiavi[i]}` });
  }
  await h.aDO(env, '/abilita', { email: q.email, materie: h.conMaterieDeiVideo(q.chiavi), origine: 'paddle' });
  await h.aDO(env, '/pac-pagato', { id: q.id, transazione: d.id });
  return true;
}
