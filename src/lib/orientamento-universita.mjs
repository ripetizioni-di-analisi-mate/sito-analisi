import {
  VERSIONE_UNIVERSITA, AREE_UNIVERSITA, DOMANDE_UNIVERSITA,
  FONTI_UNIVERSITA, SCALA_UNIVERSITA,
} from '../data/orientamento-universita.mjs';

/**
 * Riepilogo delle risposte dichiarate e collegamenti editoriali ai percorsi.
 * Non calcola medie, classifiche, distanze o stime sulle caratteristiche personali.
 * Domande di studio, priorità e verifiche disciplinari non selezionano le aree.
 */
export const METODO_UNIVERSITA = Object.freeze({
  versione: VERSIONE_UNIVERSITA,
  domandeBase: 44,
  interessiPerArea: 2,
  massimoAreeSenzaScelta: 3,
  massimoApprofondimenti: 6,
  validato: false,
  nota: 'Il riepilogo conserva gli interessi e le preferenze che hai dichiarato. I collegamenti alle famiglie di corsi sono indicazioni editoriali da verificare nei piani di studio. Il questionario è originale, non misura capacità o attitudini e non ha una validazione psicometrica.',
  regole: Object.freeze([
    'Le risposte «Molto» e «Moltissimo» sono riportate accanto alle attività a cui si riferiscono. Le altre risposte rimangono consultabili.',
    'Ogni area comprende due attività. Il riepilogo principale mostra quelle indicate entrambe con «Molto» o «Moltissimo»; le aree con una sola risposta di questo tipo restano visibili. Se manca il primo gruppo, il riepilogo parte dal secondo.',
    'L’ordine delle aree segue il catalogo, senza una classifica. Quando le aree sono più di tre, scegli quali confrontare.',
    'Gli approfondimenti riguardano soltanto la famiglia scelta da te. Ogni risposta rimane distinta dalle attività ancora sconosciute e dalle domande senza risposta.',
    'Le preferenze sulle attività di studio e le priorità sono riportate separatamente. I risultati delle verifiche delle conoscenze non vengono usati in questo riepilogo.',
  ]),
  limiti: Object.freeze([
    'Le attività proposte rappresentano soltanto alcuni aspetti delle discipline. Il loro gradimento non descrive l’intero corso e non prevede risultati di studio o professionali.',
    'I percorsi elencati sono esempi da cercare nell’offerta ufficiale. Insegnamenti, titoli rilasciati, requisiti di accesso e attività professionali si verificano sul sito dell’istituzione.',
    'Le fonti collegate offrono strumenti e informazioni per approfondire. Non hanno validato o approvato questo questionario e nessuno dei loro quesiti è riprodotto.',
  ]),
});

const BASE = DOMANDE_UNIVERSITA.filter(q => q.blocco !== 'approfondimento');
const INTERESSI = BASE.filter(q => q.blocco === 'interessi');
const EXTRA = DOMANDE_UNIVERSITA.filter(q => q.blocco === 'approfondimento');
const AREA_PER_ID = new Map(AREE_UNIVERSITA.map(a => [a.id, a]));
const ETICHETTE = new Map(SCALA_UNIVERSITA.map(r => [r.valore, r.etichetta]));
const NUMERICO = v => Number.isInteger(v) && v >= 1 && v <= 5;
const VALIDO = v => NUMERICO(v) || v === 'non-conosco';
const EVIDENZIATO = v => v === 4 || v === 5;
const CORSI_UFFICIALI = 'https://www.universitaly.it/it/cerca-corsi';

function proprio(oggetto, chiave) {
  if (!oggetto || typeof oggetto !== 'object' || Array.isArray(oggetto)) return undefined;
  try {
    const descrittore = Object.getOwnPropertyDescriptor(oggetto, chiave);
    return descrittore && Object.hasOwn(descrittore, 'value') ? descrittore.value : undefined;
  } catch {
    return undefined;
  }
}

function input(dati, areaEsplicita) {
  const annidate = proprio(dati, 'risposte');
  const sorgente = annidate && typeof annidate === 'object' && !Array.isArray(annidate) ? annidate : dati;
  const risposte = Object.create(null);
  for (const q of DOMANDE_UNIVERSITA) {
    const valore = proprio(sorgente, q.id);
    if (VALIDO(valore)) risposte[q.id] = valore;
  }
  const scelta = typeof areaEsplicita === 'string' ? areaEsplicita : proprio(dati, 'areaScelta');
  return { risposte, areaScelta: typeof scelta === 'string' && AREA_PER_ID.has(scelta) ? scelta : null };
}

function copiaDomanda(q) {
  return { ...q, aree: [...q.aree], ...(q.indirizzi ? { indirizzi: [...q.indirizzi] } : {}) };
}

/** Restituisce una nuova copia delle 44 domande base, nell'ordine editoriale. */
export function domandeBaseUniversita() {
  return BASE.map(copiaDomanda);
}

function evidenza(q, risposte) {
  const valore = risposte[q.id];
  return {
    domandaId: q.id,
    testo: q.evidenza,
    domanda: q.testo,
    risposta: VALIDO(valore) ? valore : null,
    etichetta: ETICHETTE.get(valore) || 'Non hai risposto',
    stato: NUMERICO(valore) ? 'risposta' : valore === 'non-conosco' ? 'non-conosco' : 'non-risposto',
    evidenziata: EVIDENZIATO(valore),
  };
}

function conteggi(domande, risposte) {
  const risposteValide = domande.filter(q => VALIDO(risposte[q.id]));
  const valutate = risposteValide.filter(q => NUMERICO(risposte[q.id])).length;
  return {
    totali: domande.length,
    risposte: risposteValide.length,
    valutate,
    nonConosco: risposteValide.length - valutate,
    mancanti: domande.length - risposteValide.length,
    completa: risposteValide.length === domande.length,
  };
}

function descriviRisposte(domande, risposte) {
  const risposteInteressi = domande.map(q => evidenza(q, risposte));
  const motivazioni = risposteInteressi.filter(r => r.evidenziata);
  const copertura = conteggi(domande, risposte);
  return {
    risposteInteressi,
    motivazioni,
    riepilogoInteressi: {
      totali: domande.length,
      espressi: motivazioni.length,
      altreRisposte: copertura.valutate - motivazioni.length,
      nonConosco: copertura.nonConosco,
      mancanti: copertura.mancanti,
    },
  };
}

function domandeArea(area) {
  return INTERESSI.filter(q => q.aree.includes(area.id));
}

function selezionaApprofondimenti(areaScelta) {
  // Nessun ramo viene ricavato dalle risposte: lo studente sceglie una famiglia.
  return areaScelta ? EXTRA.filter(q => q.famiglia === areaScelta) : [];
}

/**
 * Senza famiglia esplicita non ci sono approfondimenti automatici.
 * Gli ID del ramo sono stabili e tutte le domande della famiglia sono proposte.
 * È ammesso sia {id: valore} sia {risposte: {id: valore}, areaScelta: id}.
 */
export function approfondimentiUniversita(dati, areaEsplicita) {
  const { areaScelta } = input(dati, areaEsplicita);
  return selezionaApprofondimenti(areaScelta).map(copiaDomanda);
}

function copiaPercorso(percorso, risposte, extraAmmessi) {
  const domande = extraAmmessi.filter(q => q.indirizzi.includes(percorso.id));
  return {
    ...percorso,
    ...descriviRisposte(domande, risposte),
    approfondimentiProposti: domande.length > 0,
  };
}

function copiaArea(area, risposte, extraAmmessi = []) {
  const extra = extraAmmessi.filter(q => q.famiglia === area.id);
  return {
    id: area.id,
    titolo: area.titolo,
    descrizione: area.descrizione,
    origine: 'domande-base',
    ...descriviRisposte(domandeArea(area), risposte),
    percorsi: area.percorsi.map(p => copiaPercorso(p, risposte, extra)),
    materie: area.materie.map(m => ({ ...m })),
    cosaConfrontare: [...area.cosaConfrontare],
    approfondita: extra.some(q => VALIDO(risposte[q.id])),
    approfondimentiProposti: extra.length > 0,
    notaPercorsi: 'Sono esempi di percorsi da cercare nell’offerta ufficiale. Le attività, i titoli e i requisiti specifici si verificano sul sito dell’istituzione.',
  };
}

function neutrale(area, risposte, extraAmmessi = []) {
  const completa = copiaArea(area, risposte, extraAmmessi);
  return completa;
}

function valutaFamiglia(area, risposte, extra) {
  const famiglia = copiaArea(area, risposte, extra);
  Object.assign(famiglia, descriviRisposte(extra, risposte), { origine: 'famiglia-scelta' });
  const tuttiPercorsi = famiglia.percorsi;
  const conInteressi = tuttiPercorsi.filter(p => p.riepilogoInteressi.espressi > 0);
  const riepilogo = famiglia.riepilogoInteressi;
  const sceltaConfronto = conInteressi.length > METODO_UNIVERSITA.massimoAreeSenzaScelta;
  const risultato = {
    tipoConfronto: 'percorsi',
    sceltaConfronto,
    candidatiConfronto: conInteressi.map(p => ({ id: p.id, titolo: p.titolo })),
    areeConUnaPreferenza: [],
    confrontoNeutrale: [{
      ...famiglia,
      percorsi: tuttiPercorsi,
    }],
  };

  if (conInteressi.length === 0) {
    let sintesi;
    if (riepilogo.mancanti === riepilogo.totali) {
      sintesi = 'Hai scelto questa famiglia. Puoi confrontare i percorsi e, se vuoi, rispondere alle domande sulle loro attività.';
    } else if (riepilogo.nonConosco > 0 && riepilogo.altreRisposte === 0) {
      sintesi = 'Hai indicato attività che non conosci ancora abbastanza. Una lezione o un laboratorio introduttivo può aiutarti a confrontare questi percorsi.';
    } else {
      sintesi = 'Nessuna attività di questo approfondimento ha ricevuto «Molto» o «Moltissimo». Le risposte e tutti i percorsi restano disponibili per il confronto.';
    }
    return {
      ...risultato,
      stato: 'da-esplorare',
      titolo: 'Confronta i percorsi di ' + area.titolo,
      sintesi,
      aree: [],
    };
  }

  famiglia.percorsi = conInteressi;
  famiglia.altriPercorsi = tuttiPercorsi.filter(p => p.riepilogoInteressi.espressi === 0);
  return {
    ...risultato,
    stato: 'orientativo',
    titolo: 'Le attività che hai indicato in ' + area.titolo,
    sintesi: sceltaConfronto
      ? 'Hai indicato «Molto» o «Moltissimo» per attività di più percorsi. Scegli due percorsi da confrontare; tutte le risposte rimangono disponibili.'
      : 'Questi percorsi sono collegati alle attività che hai indicato con «Molto» o «Moltissimo». Ogni risposta resta visibile, comprese le attività ancora da conoscere.',
    aree: [famiglia],
  };
}

function pianoPratico(risposte, areaScelta, sceltaConfronto) {
  const priorita = BASE.filter(q => q.blocco === 'priorita' && EVIDENZIATO(risposte[q.id]));
  const verifiche = [];
  if (EVIDENZIATO(risposte['pri-pratica'])) verifiche.push('laboratori, progetti e tirocini');
  if (EVIDENZIATO(risposte['pri-esplorare'])) verifiche.push('insegnamenti a scelta e possibilità di esplorare più ambiti');
  if (EVIDENZIATO(risposte['pri-professione'])) verifiche.push('titoli e ulteriori requisiti richiesti dalla professione che vuoi conoscere');
  if (EVIDENZIATO(risposte['pri-impatto'])) verifiche.push('attività formative collegate a interventi sulle persone o sull’ambiente');
  const testoConfronto = 'Leggi gli insegnamenti del primo anno e i requisiti di accesso sui siti delle istituzioni.'
    + (verifiche.length ? ' Per le priorità che hai indicato, controlla anche: ' + verifiche.join('; ') + '.' : '');
  const nomeArea = areaScelta ? AREA_PER_ID.get(areaScelta).titolo : null;
  return [
    {
      id: 'scegli-corsi',
      titolo: 'Scegli due corsi da confrontare',
      testo: nomeArea
        ? 'Cerca su Universitaly due corsi nell’area ' + nomeArea + ' e apri i rispettivi siti.'
        : sceltaConfronto
          ? 'Scegli prima due delle aree elencate, poi cerca i corsi corrispondenti su Universitaly.'
          : 'Cerca su Universitaly due corsi delle aree che vuoi conoscere e apri i rispettivi siti.',
      url: CORSI_UFFICIALI,
      etichettaLink: 'Cerca due corsi su Universitaly',
      domandeId: [],
    },
    {
      id: 'leggi-programmi',
      titolo: 'Confronta programmi e accesso',
      testo: testoConfronto,
      url: null,
      etichettaLink: null,
      domandeId: priorita.map(q => q.id),
    },
    {
      id: 'prova-attivita',
      titolo: 'Prova un’attività introduttiva',
      testo: 'Cerca una lezione aperta o un laboratorio nelle pagine di orientamento dei due corsi. Puoi rivolgere al servizio di orientamento le domande rimaste sui programmi.',
      url: null,
      etichettaLink: null,
      domandeId: [],
    },
  ];
}

/**
 * Puro e deterministico: nessun DOM, rete, orologio o dato esterno.
 * Input sconosciuti, ereditati, accessor e valori fuori scala vengono ignorati.
 * La validazione HTTP può essere più restrittiva.
 */
export function valutaUniversita(dati, areaEsplicita) {
  const { risposte, areaScelta } = input(dati, areaEsplicita);
  const extra = selezionaApprofondimenti(areaScelta);
  const copertura = conteggi(BASE, risposte);
  copertura.approfondimenti = conteggi(extra, risposte);
  // Conteggi descrittivi conservati per compatibilità; nessuno è una soglia.
  copertura.areeConfrontabili = AREE_UNIVERSITA.filter(a => domandeArea(a).every(q => NUMERICO(risposte[q.id]))).length;
  copertura.areeTotali = AREE_UNIVERSITA.length;

  const risultato = {
    versione: VERSIONE_UNIVERSITA,
    tipo: 'universita',
    stato: 'da-completare',
    areaScelta,
    titolo: 'Completa il riepilogo delle attività',
    sintesi: 'Per ogni attività puoi indicare il tuo interesse oppure scegliere che non la conosci abbastanza.',
    copertura,
    aree: [],
    areeConUnaPreferenza: [],
    confrontoNeutrale: [],
    tipoConfronto: areaScelta ? 'percorsi' : 'aree',
    sceltaConfronto: false,
    candidatiConfronto: [],
    preferenzeStudio: BASE.filter(q => q.blocco === 'studio' && EVIDENZIATO(risposte[q.id])).map(q => evidenza(q, risposte)),
    priorita: BASE.filter(q => q.blocco === 'priorita' && EVIDENZIATO(risposte[q.id])).map(q => evidenza(q, risposte)),
    attivitaDaProvare: BASE.filter(q => q.blocco === 'interessi' && risposte[q.id] === 'non-conosco').map(q => ({ domandaId: q.id, testo: q.evidenza, aree: [...q.aree] })),
    notaMetodo: METODO_UNIVERSITA.nota,
    metodo: {
      titolo: 'Come viene composto il riepilogo',
      regole: [...METODO_UNIVERSITA.regole],
      limiti: [...METODO_UNIVERSITA.limiti],
    },
    fonti: FONTI_UNIVERSITA.map(f => ({ ...f })),
  };

  if (areaScelta) {
    Object.assign(risultato, valutaFamiglia(AREA_PER_ID.get(areaScelta), risposte, extra));
  } else if (copertura.completa) {
    const aree = AREE_UNIVERSITA.map(a => copiaArea(a, risposte));
    const entrambe = aree.filter(a => a.riepilogoInteressi.espressi === a.riepilogoInteressi.totali);
    const una = aree.filter(a => a.riepilogoInteressi.espressi === 1);
    const candidate = aree.filter(a => a.riepilogoInteressi.espressi > 0);
    risultato.areeConUnaPreferenza = una;
    risultato.candidatiConfronto = candidate.map(a => ({ id: a.id, titolo: a.titolo }));
    risultato.sceltaConfronto = candidate.length > METODO_UNIVERSITA.massimoAreeSenzaScelta;
    risultato.confrontoNeutrale = AREE_UNIVERSITA
      .filter(a => !candidate.some(c => c.id === a.id))
      .map(a => neutrale(a, risposte));
    if (candidate.length) {
      risultato.stato = 'orientativo';
      risultato.titolo = 'Le attività che hai indicato';
      risultato.sintesi = risultato.sceltaConfronto
        ? 'Hai indicato «Molto» o «Moltissimo» per attività presenti in più aree. Scegli due aree da confrontare.'
        : 'Il riepilogo riporta le attività indicate con «Molto» o «Moltissimo» e i percorsi collegati. Le altre risposte rimangono visibili.';
      risultato.aree = entrambe.length ? entrambe : una;
    } else {
      const note = conteggi(INTERESSI, risposte);
      risultato.stato = 'da-esplorare';
      risultato.titolo = note.valutate === 0
        ? 'Le attività da conoscere'
        : 'Nessuna attività indicata con «Molto» o «Moltissimo»';
      risultato.sintesi = note.valutate === 0
        ? 'Hai indicato di non conoscere abbastanza le attività proposte. Puoi scegliere due aree e provare una lezione introduttiva.'
        : 'Le risposte restano disponibili per il confronto. Puoi partire da un’area che vuoi conoscere e dal programma di un corso.';
    }
  }

  risultato.pianoPratico = pianoPratico(risposte, areaScelta, risultato.sceltaConfronto);
  risultato.prossimiPassi = risultato.pianoPratico.map(p => p.testo);
  return risultato;
}
