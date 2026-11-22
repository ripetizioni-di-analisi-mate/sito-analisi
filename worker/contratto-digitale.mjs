import novembre2026 from './condizioni-digitali/2026-11-09.1.json' with { type: 'json' };
import novembre2026b from './condizioni-digitali/2026-11-22.1.json' with { type: 'json' };

// Le email di conferma possono essere ritentate dopo una modifica dei termini.
// Si allega sempre la versione che il cliente ha accettato per il suo ordine.
// Il 10 novembre è cambiata la spunta del checkout. Le pagine legali sono le stesse.
// Il 22 novembre è stata tolta la rinuncia al recesso: la copia nuova riporta i termini
// nella versione online quel giorno (dal 13 novembre comprendono gli strumenti di orientamento).
const versioni = new Map([
  ['2026-11-09.1', novembre2026],
  ['2026-11-10.1', novembre2026],
  ['2026-11-22.1', novembre2026b],
]);

export function allegatoContrattoDigitale(lingua, versione) {
  const testo = versioni.get(versione)?.[lingua];
  if (!Array.isArray(testo)) throw new Error('Versione o lingua del contratto assente');
  const [intestazione, ...corpo] = testo;
  const bytes = new TextEncoder().encode([intestazione.replace('2026-11-09.1', versione), ...corpo].join('\n\n'));
  const nome = lingua === 'en' ? 'terms-and-refunds' : 'termini-e-rimborsi';
  return {filename: nome+'-'+versione+'.txt',content:btoa(String.fromCharCode(...bytes))};
}
