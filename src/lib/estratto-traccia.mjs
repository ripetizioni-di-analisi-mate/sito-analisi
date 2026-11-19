// Un estratto viene soltanto dal testo pubblico della domanda, prima di risposte e svolgimento.
export function estrattoTraccia(body, scheda = false) {
  if (!body) return '';
  const inizio = scheda ? /^##\s+(?:Esercizio|Exercise|Ejercicio|Quesito|Problema|Problem|Question|Esempio|Example)\b[^\n]*\n+/im.exec(body) : null;
  if (scheda && !inizio) return '';
  const dopo = inizio ? body.slice(inizio.index + inizio[0].length) : body;
  const blocco = dopo.trimStart().split(/\n\s*\n|\$\$|^\s*(?:#{1,6}\s|:{2,}|<|\|)/m, 1)[0];
  const semplice = blocco.replace(/\$([^$\n]+)\$/g, (formula, testo) => /[\\{}]/.test(testo) ? formula : testo)
    .replace(/\*\*|\x60/g, '').replace(/\s+/g, ' ').trim();
  if (semplice.length < 45 || /[$\\<>|\[\]{}]/.test(semplice) || !/^\p{L}/u.test(semplice) || !/[.!?]["'’”)]?$/.test(semplice)) return '';
  if (semplice.length <= 158) return semplice;
  const frase = semplice.match(/^(.{44,155}?[.!?])\s/u);
  return frase ? frase[1] : semplice.slice(0, 155).replace(/\s+\S*$/, '') + '…';
}
