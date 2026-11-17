// Spesa delle inserzioni Meta per campagna, letta dall'API di Meta per la dashboard (Traffico → Inserzioni Meta).
// Servono META_ADS_ACCOUNT (numero dell'account pubblicitario, in wrangler.jsonc) e il segreto META_ADS_TOKEN
// (chiave di sola lettura, permesso ads_read). Senza chiave la dashboard mostra solo il ricavo.
const VALIDITA = 30 * 60000;
import { PERIODI_DASHBOARD as PERIODI } from './periodi.mjs';
let copia = null;

const giornoRoma = (t) => new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Rome' }).format(new Date(t));

async function periodo(env, giorni, ora, prendi) {
  const base = 'https://graph.facebook.com/' + (env.META_ADS_VERSIONE ? env.META_ADS_VERSIONE + '/' : '');
  const q = new URLSearchParams({
    level: 'campaign',
    fields: 'campaign_id,campaign_name,spend',
    time_range: JSON.stringify({ since: giornoRoma(ora - (giorni - 1) * 86400000), until: giornoRoma(ora) }),
    limit: '500',
  });
  const r = await prendi(base + 'act_' + env.META_ADS_ACCOUNT + '/insights?' + q, {
    headers: { authorization: 'Bearer ' + env.META_ADS_TOKEN },
    signal: AbortSignal.timeout(8000),
  });
  const d = await r.json().catch(() => null);
  if (!r.ok || !Array.isArray(d?.data)) throw new Error(d?.error?.message || 'risposta ' + r.status);
  return d.data.map((x) => ({ campagna: String(x.campaign_id), nome: String(x.campaign_name || ''), speso: Number(x.spend) || 0 }));
}

export async function speseMeta(env, ora = Date.now(), prendi = fetch) {
  if (!env.META_ADS_TOKEN || !/^\d{5,20}$/.test(env.META_ADS_ACCOUNT || '')) return { collegato: false };
  if (copia && ora - copia.t < VALIDITA) return copia.dati;
  try {
    const righe = await Promise.all(PERIODI.map((g) => periodo(env, g, ora, prendi)));
    const dati = { collegato: true, aggiornato: new Date(ora).toISOString() };
    PERIODI.forEach((g, i) => { dati[g] = righe[i]; });
    copia = { t: ora, dati };
    return dati;
  } catch (e) {
    console.log('meta-ads', String(e?.message || e).slice(0, 200));
    // Un errore non blocca la dashboard: si riprova dopo due minuti.
    const dati = { collegato: true, errore: true };
    copia = { t: ora - VALIDITA + 120000, dati };
    return dati;
  }
}

export const azzeraSpeseMeta = () => { copia = null; };
