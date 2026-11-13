// Durate del servizio, condivise tra browser e archivio: non sono termini di legge.
export const GIORNI_BOZZA_ORIENTAMENTO = 30;
export const GIORNI_RISULTATO_ORIENTAMENTO = 365;
export const DURATA_BOZZA_ORIENTAMENTO = GIORNI_BOZZA_ORIENTAMENTO * 86400000;
export const DURATA_RISULTATO_ORIENTAMENTO = GIORNI_RISULTATO_ORIENTAMENTO * 86400000;

export function scadenzaRisultatoOrientamento(aggiornato) {
  const quando = Date.parse(aggiornato);
  return Number.isFinite(quando) ? new Date(quando + DURATA_RISULTATO_ORIENTAMENTO).toISOString() : null;
}
