// La sequenza descrive la navigazione, non il completamento o la padronanza.
// Le sezioni senza contenuti vengono saltate; un argomento sconosciuto non
// deve generare un collegamento accidentale al primo argomento della materia.
export function sezioniStudio(disponibili = {}) {
  return ['teoria',
    ...(disponibili.svolti ? ['esercizi-svolti'] : []),
    ...(disponibili.dafare ? ['esercizi'] : []),
    ...(disponibili.domande ? ['domande'] : []),
  ];
}

export function destinazioniStudio(argomenti, argomento, sezione, disponibili = {}) {
  const i = argomenti.indexOf(argomento);
  const sezioni = sezioniStudio(disponibili);
  const j = sezioni.indexOf(sezione);
  if (i < 0 || j < 0) return { precedente: null, successivo: null, dopo: null, sezioni };
  const dopo = argomenti[i + 1] ? { argomento: argomenti[i + 1], sezione: 'teoria' } : null;
  const precedente = j > 0
    ? { argomento, sezione: sezioni[j - 1] }
    : argomenti[i - 1] ? { argomento: argomenti[i - 1], sezione: 'teoria' } : null;
  const successivo = sezioni[j + 1] ? { argomento, sezione: sezioni[j + 1] } : dopo;
  return { precedente, successivo, dopo, sezioni };
}
