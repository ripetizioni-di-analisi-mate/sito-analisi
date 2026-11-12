// Struttura CISIA verificata il 6 novembre 2026. Quesiti originali di allenamento.
export const TOLC_I_FONTE = 'https://www.cisiaonline.it/tolc/tolc-i/struttura-della-prova-e-sillabo';
export const TOLC_I_SEZIONI = [
  { slug: 'matematica', titolo: 'Matematica', numero: 20, minuti: 50, argomenti: ['aritmetica-e-algebra', 'geometria', 'funzioni-e-grafici', 'trigonometria-e-statistica'] },
  { slug: 'logica', titolo: 'Logica', numero: 10, minuti: 20, argomenti: ['logica'] },
  { slug: 'scienze', titolo: 'Scienze', numero: 10, minuti: 20, argomenti: ['fisica', 'chimica'] },
  { slug: 'comprensione', titolo: 'Comprensione verbale', numero: 10, minuti: 20, argomenti: ['comprensione-verbale'] },
  { slug: 'inglese', titolo: 'Inglese', numero: 30, minuti: 15, argomenti: ['inglese'] },
];

export function mescolaTolc(lista, casuale = Math.random) {
  const out = [...lista];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(casuale() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

// Gli argomenti si alternano: la sezione Scienze comprende fisica e chimica.
export function creaProvaTolc(argomenti, inglese = true, casuale = Math.random, sezioni = TOLC_I_SEZIONI) {
  return sezioni.filter((s) => inglese || s.slug !== 'inglese').map((s) => {
    if (s.brani) {
      const gruppi = new Map();
      for (const a of s.argomenti) {
        for (const q of argomenti[a] || []) {
          if (!q.brano) continue;
          const chiave = `${a}/${q.brano}`;
          if (!gruppi.has(chiave)) gruppi.set(chiave, []);
          gruppi.get(chiave).push(q);
        }
      }
      const completi = [...gruppi.values()].filter(g => g.length === s.numero / s.brani);
      if (completi.length < s.brani) throw new Error(`Brani insufficienti per ${s.titolo}`);
      const domande = mescolaTolc(completi, casuale).slice(0, s.brani).flat();
      return { slug: s.slug, titolo: s.titolo, minuti: s.minuti, domande };
    }
    const pile = s.argomenti.map((a) => mescolaTolc(argomenti[a] || [], casuale));
    const domande = s.quote ? pile.flatMap((p, i) => p.slice(0, s.quote[i])) : [];
    if (!s.quote) {
      while (domande.length < s.numero && pile.some((p) => p.length)) {
        for (const p of pile) if (p.length && domande.length < s.numero) domande.push(p.shift());
      }
    }
    if (domande.length !== s.numero) throw new Error(`Quesiti insufficienti per ${s.titolo}`);
    return { slug: s.slug, titolo: s.titolo, minuti: s.minuti, domande: mescolaTolc(domande, casuale) };
  });
}

export function correggiSezioneTolc(domande, risposte, senzaPenalita = false) {
  let corrette = 0, errate = 0, omesse = 0;
  for (let i = 0; i < domande.length; i++) {
    const r = risposte[i];
    if (r === null || r === undefined) omesse++;
    else if (r === domande[i].corretta - 1) corrette++;
    else errate++;
  }
  return { corrette, errate, omesse, punti: corrette - (senzaPenalita ? 0 : errate * .25), massimo: domande.length };
}

// Dieci quesiti distinti sempre uguali nell'anteprima, anche cambiando argomento.
export function anteprimaTolc(argomenti, quote = { 'aritmetica-e-algebra': 1, geometria: 1, 'funzioni-e-grafici': 1, 'trigonometria-e-statistica': 1, logica: 2, fisica: 1, chimica: 1, 'comprensione-verbale': 1, inglese: 1 }) {
  return Object.fromEntries(Object.entries(quote).map(([a, n]) => [a, (argomenti[a] || []).slice(0, n)]));
}
