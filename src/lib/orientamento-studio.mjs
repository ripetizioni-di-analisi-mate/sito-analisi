import { COMPETENZE_STUDIO, DOMANDE_STUDIO, PROFILI_STUDIO, VERSIONE_STUDIO } from '../data/orientamento-studio.mjs';

export const OBIETTIVI_STUDIO = Object.freeze(['iniziare', 'recuperare', 'riprendere', 'esame']);
const QUOTE = { iniziare: [4, 2], recuperare: [3, 3], riprendere: [2, 4], esame: [1, 5] };
const VALORI = new Set([0, 1, 2, 3, 'non-so', 'non-studiato']);
const perCompetenza = new Map();
for (const domanda of DOMANDE_STUDIO) {
  if (!perCompetenza.has(domanda.competenza)) perCompetenza.set(domanda.competenza, []);
  perCompetenza.get(domanda.competenza).push(domanda);
}

function profiloValido(materia, obiettivo) {
  if (typeof materia !== 'string' || !Object.hasOwn(PROFILI_STUDIO, materia)) {
    throw new TypeError('Materia non disponibile per l’orientamento.');
  }
  if (!OBIETTIVI_STUDIO.includes(obiettivo)) throw new TypeError('Obiettivo di studio non valido.');
  return PROFILI_STUDIO[materia];
}

function competenzeScelte(profilo, obiettivo) {
  const [quotaPre, quotaCorso] = QUOTE[obiettivo];
  const prescelte = [...profilo.prerequisiti.slice(0, quotaPre), ...profilo.corso.slice(0, quotaCorso)];
  // Le materie introduttive possono avere meno prerequisiti: i posti restanti
  // vanno ai nuclei del corso, mantenendo l'ordine didattico dichiarato.
  return [...new Set([...prescelte, ...profilo.corso, ...profilo.prerequisiti])].slice(0, 6);
}

function gruppoDomande(id) {
  const gruppo = perCompetenza.get(id);
  if (!COMPETENZE_STUDIO[id] || !gruppo || gruppo.length !== 4) {
    throw new Error('Banca di orientamento incompleta per la competenza: ' + id);
  }
  return gruppo;
}

function insiemeDomande(materia, obiettivo) {
  const profilo = profiloValido(materia, obiettivo);
  const competenze = competenzeScelte(profilo, obiettivo);
  const gruppi = competenze.map(gruppoDomande);
  // Interlaccia i nuclei: un eventuale abbandono non lascia osservata una sola area.
  const base = [0, 1, 2].flatMap(indice => gruppi.map(gruppo => gruppo[indice]));
  return { profilo, competenze, gruppi, base };
}

function risposteValide(risposte, insieme) {
  if (!risposte || typeof risposte !== 'object' || Array.isArray(risposte)) {
    throw new TypeError('Le risposte devono essere un oggetto domanda-risposta.');
  }
  const consentite = new Set(insieme.gruppi.flat().map(domanda => domanda.id));
  const entries = Object.entries(risposte);
  if (entries.length > 24) throw new TypeError('Sono presenti troppe risposte.');
  for (const [id, risposta] of entries) {
    if (!consentite.has(id)) throw new TypeError('Domanda non prevista per questo percorso: ' + id);
    if (!VALORI.has(risposta)) throw new TypeError('Risposta non valida per la domanda: ' + id);
  }
  return risposte;
}

function conteggio(domande, risposte) {
  const risultato = { corrette: 0, errate: 0, nonSo: 0, nonStudiato: 0, risposteDate: 0 };
  for (const domanda of domande) {
    if (!Object.hasOwn(risposte, domanda.id)) continue;
    risultato.risposteDate++;
    const risposta = risposte[domanda.id];
    if (risposta === 'non-so') risultato.nonSo++;
    else if (risposta === 'non-studiato') risultato.nonStudiato++;
    else if (risposta === domanda.corretta) risultato.corrette++;
    else risultato.errate++;
  }
  return risultato;
}

function conferme(insieme, risposte) {
  return insieme.gruppi.flatMap(gruppo => {
    const c = conteggio(gruppo.slice(0, 3), risposte);
    // Solo la batteria iniziale decide l'approfondimento. Rispondere alla quarta
    // domanda non può farla scomparire, né cambiare il denominatore del risultato.
    const contrastanti = c.corrette > 0 && (c.errate > 0 || c.nonSo > 0 || c.nonStudiato > 0);
    return c.risposteDate === 3 && contrastanti ? [gruppo[3]] : [];
  }).slice(0, 6);
}

function validaSetEffettivo(insieme, risposte) {
  risposteValide(risposte, insieme);
  const extra = conferme(insieme, risposte);
  const attese = [...insieme.base, ...extra];
  const ids = new Set(attese.map(domanda => domanda.id));
  for (const id of Object.keys(risposte)) {
    if (!ids.has(id)) throw new TypeError('Approfondimento non richiesto per questo percorso: ' + id);
  }
  return { extra, attese };
}

export function domandeBaseStudio(materia, obiettivo = 'iniziare') {
  return insiemeDomande(materia, obiettivo).base;
}

export function approfondimentiStudio(materia, obiettivo, risposte) {
  const insieme = insiemeDomande(materia, obiettivo);
  risposteValide(risposte, insieme);
  return conferme(insieme, risposte);
}

const ETICHETTE = {
  'da-verificare': 'Da verificare',
  'da-studiare': 'Da studiare',
  'da-riprendere': 'Da riprendere',
  'da-consolidare': 'Da consolidare',
  'riscontri-positivi': 'Riscontri positivi',
};

function statoCompetenza(c, previste, tipo) {
  if (c.risposteDate < previste) return 'da-verificare';
  if (c.nonStudiato === c.risposteDate) return 'da-studiare';
  if (c.corrette === c.risposteDate) return 'riscontri-positivi';
  if (c.corrette >= 2) return 'da-consolidare';
  if (c.errate + c.nonSo >= 2) return 'da-riprendere';
  // Una risposta corretta accanto a contenuti dichiarati nuovi non basta a
  // classificare l'intera competenza come acquisita o carente.
  return c.nonStudiato >= 2 ? 'da-studiare' : 'da-verificare';
}

function descrizione(c, stato, tipo) {
  if (stato === 'da-verificare') return 'Le risposte raccolte non bastano per indicare un punto di partenza in questa area.';
  if (stato === 'da-studiare') return tipo === 'prerequisito'
    ? 'Hai indicato che queste basi sono nuove: il percorso comincia dal materiale introduttivo collegato.'
    : 'Hai indicato che questi argomenti sono nuovi: verranno inseriti come studio iniziale, senza considerarli errori.';
  if (stato === 'riscontri-positivi') return 'Hai risolto i quesiti proposti in questa area. È un primo riscontro, da confermare con esercizi autonomi.';
  if (stato === 'da-consolidare') return 'Hai risolto parte dei quesiti, con alcune incertezze. Riprendi gli esempi collegati e prova un esercizio nuovo.';
  return 'Più risposte segnalano difficoltà o incertezza in questa area. Il materiale collegato permette di riprendere i passaggi necessari.';
}

function prioritaNumerica(c) {
  const stato = { 'da-riprendere': 0, 'da-studiare': 1, 'da-consolidare': 2, 'da-verificare': 3, 'riscontri-positivi': 4 }[c.stato];
  return (c.tipo === 'prerequisito' ? 0 : 10) + stato;
}

function pianoPraticoStudio(completo, priorita, competenze) {
  if (!completo) return [];
  const prima = priorita[0];
  if (prima) {
    const nuova = prima.stato === 'da-studiare';
    const consolidare = prima.stato === 'da-consolidare';
    const tipi = consolidare ? ['svolti', 'esercizi'] : ['teoria', 'svolti', 'esercizi'];
    const titoli = {
      teoria: (nuova ? 'Studia ' : 'Riprendi ') + prima.titolo.toLocaleLowerCase('it-IT'),
      svolti: 'Segui un esempio svolto',
      esercizi: 'Prova gli esercizi in autonomia',
    };
    const motivi = {
      teoria: nuova
        ? 'Hai indicato che questi argomenti sono ancora nuovi.'
        : 'Più risposte in questa area indicano passaggi da riprendere.',
      svolti: nuova
        ? 'Gli svolti mostrano come applicare i contenuti che hai indicato come nuovi.'
        : consolidare
          ? 'Hai risolto parte dei quesiti e gli svolti aiutano a chiarire i passaggi rimasti incerti.'
          : 'Gli svolti guidano i passaggi su cui sono emerse difficoltà nel test.',
      esercizi: nuova
        ? 'Dopo teoria e svolti, gli esercizi permettono di controllare ciò che hai appreso.'
        : 'Una prova autonoma permette di ricontrollare le incertezze emerse nel test.',
    };
    // Si riusano esclusivamente i materiali del risultato, comprese le
    // associazioni specifiche della materia: nessun URL viene costruito qui.
    return tipi.flatMap(tipo => {
      const materiale = prima.materiali.find(m => m.tipo === tipo);
      return materiale ? [{ tipo, titolo: titoli[tipo], motivo: motivi[tipo], url: materiale.url, competenza: prima.id }] : [];
    }).map((azione, indice) => ({
      passo: indice === 0 ? 'ora' : azione.tipo === 'esercizi' ? 'verifica' : 'poi',
      ...azione,
    }));
  }

  const daVerificare = competenze.find(c => c.stato === 'da-verificare');
  const tuttePositive = competenze.length > 0 && competenze.every(c => c.stato === 'riscontri-positivi');
  // Un esito positivo suggerisce una prova su un nucleo realmente osservato
  // del corso; non riparte automaticamente da una base già verificata.
  const osservata = daVerificare || (tuttePositive
    ? competenze.find(c => c.tipo === 'corso' && c.materiali.some(m => m.tipo === 'esercizi'))
      || competenze.find(c => c.materiali.some(m => m.tipo === 'esercizi'))
    : null);
  const materiale = osservata?.materiali.find(m => m.tipo === 'esercizi');
  if (!materiale) return [];
  return [{
    passo: 'ora',
    titolo: daVerificare ? 'Verifica con gli esercizi' : 'Prova gli esercizi in autonomia',
    motivo: daVerificare
      ? 'Le risposte su ' + osservata.titolo.toLocaleLowerCase('it-IT') + ' richiedono un ulteriore controllo.'
      : 'Hai risolto i quesiti su ' + osservata.titolo.toLocaleLowerCase('it-IT') + ', quindi il passo successivo è una prova autonoma.',
    url: materiale.url, tipo: materiale.tipo, competenza: osservata.id,
  }];
}

export function valutaStudio(materia, obiettivo, risposte) {
  const insieme = insiemeDomande(materia, obiettivo);
  const { attese } = validaSetEffettivo(insieme, risposte);
  const competenze = insieme.competenze.map(id => {
    const anagrafica = COMPETENZE_STUDIO[id];
    const domande = attese.filter(domanda => domanda.competenza === id);
    const c = conteggio(domande, risposte);
    const tipo = insieme.profilo.prerequisiti.includes(id) ? 'prerequisito' : 'corso';
    const stato = statoCompetenza(c, domande.length, tipo);
    return {
      id, titolo: anagrafica.titolo, tipo, stato, etichetta: ETICHETTE[stato],
      ...c, domandePreviste: domande.length, testo: descrizione(c, stato, tipo),
      materiali: insieme.profilo.materialiPerCompetenza?.[id] || anagrafica.materiali,
    };
  });
  const risposteDate = Object.keys(risposte).length;
  const completo = risposteDate === attese.length;
  const priorita = completo ? competenze
    .filter(c => ['da-riprendere', 'da-studiare', 'da-consolidare'].includes(c.stato))
    .sort((a, b) => prioritaNumerica(a) - prioritaNumerica(b))
    .slice(0, 3) : [];
  const prima = priorita[0];
  const puntoPartenza = prima ? {
    titolo: prima.titolo, url: prima.materiali[0].url, competenza: prima.id,
    motivo: prima.tipo === 'prerequisito'
      ? 'Questa base viene prima degli argomenti successivi nel percorso selezionato.'
      : prima.stato === 'da-studiare' ? 'È il primo argomento nuovo nel percorso selezionato.' : 'È il primo nucleo del corso da riprendere in base alle risposte.',
  } : {
    ...insieme.profilo.inizio, competenza: null,
    motivo: completo
      ? 'Il breve test non individua una priorità specifica: puoi seguire l’ordine del corso e verificare l’autonomia con gli esercizi.'
      : 'Completa il test per ottenere una priorità collegata alle tue risposte.',
  };
  const tuttePositive = competenze.every(c => c.stato === 'riscontri-positivi');
  const sintesi = !completo
    ? 'Completa il test per ricevere un punto di partenza.'
    : prima
      ? 'Il primo argomento da affrontare è ' + prima.titolo.toLocaleLowerCase('it-IT') + '.'
      : tuttePositive
        ? 'Hai risolto i quesiti proposti; verifica ora l’autonomia con gli esercizi.'
        : 'Serve un nuovo controllo sulle aree ancora da verificare.';
  return {
    versione: VERSIONE_STUDIO, materia, titolo: insieme.profilo.titolo, obiettivo,
    sintesi, completo, risposteDate, domandePreviste: attese.length,
    perimetro: {
      descrizione: 'Il test osserva ' + competenze.length + ' nuclei selezionati per questo obiettivo. Gli altri argomenti non sono stati verificati.',
      competenzeOsservate: competenze.map(c => c.id),
      competenzeNonOsservate: [...new Set([...insieme.profilo.prerequisiti, ...insieme.profilo.corso])].filter(id => !insieme.competenze.includes(id)),
      misura: 'Risposte a un campione di quesiti; non una certificazione di padronanza o una previsione del voto.',
    },
    competenze, priorita, puntoPartenza,
    pianoPratico: pianoPraticoStudio(completo, priorita, competenze),
    prossimiPassi: prima ? prima.materiali : [{ titolo: puntoPartenza.titolo, url: puntoPartenza.url, tipo: 'teoria' }],
  };
}
