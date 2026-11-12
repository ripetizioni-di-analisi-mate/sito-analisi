// Lettura e conferma degli ordini Paddle aperti prima del passaggio a Stripe.
export function creaTabellePacchetti(sql) {
  sql.exec(`CREATE TABLE IF NOT EXISTS pacchetti_ordini (id TEXT PRIMARY KEY, email TEXT NOT NULL, creato INTEGER NOT NULL, sconto TEXT UNIQUE, dati TEXT NOT NULL, pagato TEXT);
    CREATE INDEX IF NOT EXISTS pacchetti_email ON pacchetti_ordini(email, creato);`);
}
export function archivioPacchetti(o, p, c) {
  switch (p) {
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

// L'ordine salvato è autorevole; i custom_data del checkout non possono aggiungere corsi.
export function verificaOrdinePagato(d, q) {
  if (!d?.id || !q || d.status !== 'completed') return false;
  if (d.discount_id && d.discount_id !== q.sconto_id) return false;
  const items = d.items;
  if (!Array.isArray(items) || items.length !== q.prezzi.length || new Set(items.map((x) => x.price?.id || x.price_id)).size !== items.length) return false;
  return q.prezzi.every((id) => items.some((x) => (x.price?.id || x.price_id) === id && x.quantity === 1));
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
