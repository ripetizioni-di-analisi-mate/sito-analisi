import { MATERIE } from '../src/data/materie.ts';
import { usaProducts } from '../src/data/stem-usa/pricing.ts';
import { PASS_PREMIUM } from '../src/data/premium.mjs';

export function catalogoPremium() {
  return [...MATERIE, ...usaProducts]
    .filter(m => m.attiva && m.prezzo > 0 && !m.slug.startsWith('video-'))
    .map(m => m.slug);
}

// Il giorno resta lo stesso quando esiste nel mese di arrivo.
export function scadenzaPremium(inizio, mesi) {
  const d = new Date(inizio);
  const giorno = d.getUTCDate();
  d.setUTCMonth(d.getUTCMonth() + mesi + 1, 0);
  d.setUTCDate(Math.min(giorno, d.getUTCDate()));
  return d.toISOString();
}

export function premiumAttivo(o, email, adesso = new Date().toISOString()) {
  const r = o.riga(`SELECT o.id, json_extract(o.ordine, '$.premium') AS pass
    FROM ordini_stripe o
    LEFT JOIN rimborsi_digitali r ON r.ordine_id = o.id
    LEFT JOIN ordini_stripe base ON base.id = json_extract(o.ordine, '$.premium.ordineBase') AND base.email = o.email
    LEFT JOIN rimborsi_digitali rb ON rb.ordine_id = base.id
    WHERE o.email = ? AND o.stato = 'pagato' AND json_extract(o.ordine, '$.tipo') = 'premium'
      AND json_extract(o.ordine, '$.premium.scade') > ?
      AND COALESCE(r.confermati, 0) < o.in_centesimi
      AND (json_extract(o.ordine, '$.premium.ordineBase') IS NULL
        OR (base.stato = 'pagato' AND COALESCE(rb.confermati, 0) < base.in_centesimi))
    ORDER BY json_extract(o.ordine, '$.premium.scade') DESC LIMIT 1`, email, adesso);
  return r ? { ...JSON.parse(r.pass), id: r.id } : null;
}

export function attivaPremium(dati, pagato) {
  const inizio = dati.inizio || pagato;
  const scade = scadenzaPremium(inizio, PASS_PREMIUM[dati.piano].mesi);
  return dati.piano === 'semestrale'
    ? { ...dati, inizio, scade, materie: catalogoPremium() }
    : { ...dati, inizio, scade };
}

export function accessiPremium(permanenti, pass) {
  if (!pass) return permanenti;
  const catalogo = catalogoPremium();
  const incluse = pass.piano === 'annuale' ? catalogo : catalogo.filter(slug => pass.materie.includes(slug));
  return [...new Set([...permanenti, ...incluse])];
}
