import { riepilogoMaterie } from '../../data/pacchetti.mjs';

export const percorsi = {
  esame: {
    it: [
      'Un esame universitario',
      'Voglio scegliere da solo il metodo davanti a una traccia nuova.',
      'Rifai una traccia a foglio bianco e motiva il primo passaggio.'
    ],
    en: [
      'A university exam',
      'I want to choose a method when I see an unfamiliar problem.',
      'Start a problem on a blank page and explain why your first step works.'
    ]
  },
  verifica: {
    it: [
      'Una verifica o un’interrogazione',
      'Vorrei saper svolgere gli esercizi e spiegarli a voce.',
      'Spiega a voce un passaggio, poi scrivilo come lo consegneresti.'
    ],
    en: [
      'A school test or oral exam',
      'I want to solve exercises and be able to explain them aloud.',
      'Explain a step aloud, then write it as you would hand it in.'
    ]
  },
  test: {
    it: [
      'Un test di ammissione o un concorso',
      'Mi serve prendere decisioni anche con il tempo contato.',
      'Cronometra una traccia e segna in quale passaggio hai speso più tempo.'
    ],
    en: [
      'An entrance or selection test',
      'I need to make decisions under time pressure.',
      'Time one problem and note which step took the longest.'
    ]
  },
  basi: {
    it: [
      'Ricostruire le basi',
      'Voglio capire i passaggi su cui si appoggiano gli argomenti successivi.',
      'Scrivi una regola con parole tue e costruisci un esempio che la soddisfa.'
    ],
    en: [
      'Rebuild my foundations',
      'I want to understand the steps that later topics depend on.',
      'Write a rule in your own words and build an example that fits it.'
    ]
  }
};

export const ostacoli = {
  inizio: {
    it: [
      'Capire da dove cominciare',
      'Ho appunti e materiali, ma scelgo ogni volta da capo.',
      'Prima di leggere la soluzione, scrivi cosa ti chiede la traccia e cerchia il dato da cui partire.',
      'Individua la richiesta',
      'Applica il primo passaggio',
      'Annota da dove ripartire'
    ],
    en: [
      'Knowing where to start',
      'I have notes and resources, but I start over each time.',
      'Before reading the solution, write down what the problem asks and circle the information you can start from.',
      'Identify the task',
      'Apply the first step',
      'Note where to start next time'
    ]
  },
  metodo: {
    it: [
      'Passare dalla teoria all’esercizio',
      'Quando leggo capisco. Davanti al foglio bianco mi fermo.',
      'Copri lo svolgimento. Scrivi la regola che useresti e la condizione che ti permette di usarla. Poi confronta la prima riga.',
      'Richiama la regola',
      'Confronta due procedimenti',
      'Rifai il primo passo da solo'
    ],
    en: [
      'Applying theory to an exercise',
      'It makes sense as I read, but I get stuck on a blank page.',
      'Cover the solution. Write the rule you would use and the condition it needs. Then compare the first line.',
      'Recall the rule',
      'Compare two approaches',
      'Redo the first step unaided'
    ]
  },
  memoria: {
    it: [
      'Ricordare dopo qualche giorno',
      'Al momento mi è chiaro. Quando riprendo devo rileggere tutto.',
      'Leggi la traccia, richiudila e riassumila con due frasi. Riaprila per controllare cosa avevi dimenticato.',
      'Richiama senza appunti',
      'Verifica sullo svolgimento',
      'Scrivi una domanda per il ripasso'
    ],
    en: [
      'Remembering a few days later',
      'I follow it at the time, then I have to reread everything.',
      'Read the problem, look away and summarise it in two sentences. Reopen it to check what you missed.',
      'Recall without notes',
      'Check against the solution',
      'Write a revision question'
    ]
  },
  tempo: {
    it: [
      'Finire una prova in tempo',
      'Il procedimento lo conosco, ma mi dilungo o controllo tutto due volte.',
      'Prima di calcolare, scegli dove controllerai il risultato. Annota il tempo impiegato nel primo passaggio.',
      'Scegli un controllo',
      'Svolgi una traccia a tempo',
      'Rivedi il passaggio più lento'
    ],
    en: [
      'Finishing within the time limit',
      'I know the method but spend too long or check everything twice.',
      'Before calculating, choose how you will check the result. Note how long the first step takes.',
      'Choose a check',
      'Time one problem',
      'Review the slowest step'
    ]
  }
};

export const orizzonti = {
  presto: {
    it: [
      'Entro una settimana',
      'Concentra le prime sedute sul capitolo prioritario. Prima della prova ripeti una traccia senza guardare.'
    ],
    en: [
      'Within a week',
      'Start with your priority chapter. Before the test repeat one problem without looking.'
    ]
  },
  mese: {
    it: [
      'Tra due e quattro settimane',
      'Alterna gli argomenti e torna sulla prima scheda la settimana successiva.'
    ],
    en: ['In two to four weeks', 'Alternate topics and return to the first sheet the following week.']
  },
  lungo: {
    it: [
      'Tra più di un mese',
      'Distribuisci il lavoro tra le materie. A ogni nuova settimana riprendi un passaggio della precedente.'
    ],
    en: [
      'More than a month from now',
      'Spread the work across subjects. Each new week, recall a step from the previous one.'
    ]
  },
  libero: {
    it: [
      'Studio senza una scadenza',
      'Inizia con un ritmo che puoi mantenere. Passa al capitolo seguente quando riesci a spiegare un esempio.'
    ],
    en: ['I have no set deadline', 'Start at a pace you can keep. Move on when you can explain an example.']
  }
};

export const dubbi = {
  programma: {
    it: ['Il programma copre ciò che mi serve?', 'Voglio controllare i capitoli prima di decidere.'],
    en: ['Does it cover what I need?', 'I want to check the syllabus before deciding.']
  },
  costanza: {
    it: ['Riuscirò a usarlo con il tempo che ho?', 'Vorrei capire cosa farei in una settimana normale.'],
    en: ['Will I actually have time to use it?', 'I want to see what an ordinary week would look like.']
  },
  prezzo: {
    it: ['Quanto mi conviene spendere?', 'Sto valutando una sola materia o un pacchetto.'],
    en: ['How much is worth spending?', 'I am weighing up a single subject and a bundle.']
  },
  gratuito: {
    it: [
      'Vorrei prima provarlo per qualche giorno',
      'Per ora mi bastano il calendario e le schede gratuite.'
    ],
    en: ['I would like to try it for a few days', 'For now the schedule and free material are enough.']
  }
};

export function creaProfilo() {
  return {
    obiettivo: '',
    materie: [],
    priorita: '',
    temi: {},
    possedute: [],
    ostacolo: '',
    orizzonte: '',
    giorni: [1, 3, 5],
    minuti: 25,
    dubbio: '',
    primoAcquisto: true,
    pacchetto: [],
    scelta: '',
    settimana: 0
  };
}

export function selezionaMateria(p, slug, selezionata, corsi, temaIngresso) {
  if (!corsi.has(slug) || p.materie.includes(slug) === selezionata) return;
  if (selezionata) {
    p.materie.push(slug);
    const capitoli = corsi.get(slug).capitoli;
    p.temi[slug] = capitoli.some((a) => a.slug === temaIngresso) ? temaIngresso : capitoli[0].slug;
    if (!p.priorita) p.priorita = slug;
  } else {
    p.materie = p.materie.filter((k) => k !== slug);
    p.possedute = p.possedute.filter((k) => k !== slug);
    delete p.temi[slug];
    if (p.priorita === slug) p.priorita = p.materie[0] || '';
  }
  ripristinaOfferta(p, corsi);
}

export function ripristinaOfferta(p, corsi) {
  p.pacchetto = p.materie.filter((id) => corsi.get(id).prezzo > 0 && !p.possedute.includes(id));
  p.scelta = '';
}

export const capitolo = (p, c) => c.capitoli.find((a) => a.slug === p.temi[c.slug]) || c.capitoli[0];

export function programma(p, corsi, inizio, settimana = 0) {
  const rotazione = [p.priorita, ...p.materie.filter((id) => id !== p.priorita)].filter(Boolean);
  if (!rotazione.length || !p.giorni.length) return [];
  const oggi = new Date(inizio.getFullYear(), inizio.getMonth(), inizio.getDate(), 12);
  const blocchi = [Math.max(2, Math.round(p.minuti * 0.2)), Math.max(3, Math.round(p.minuti * 0.6))];
  blocchi.push(p.minuti - blocchi[0] - blocchi[1]);
  const sedi = [];
  for (let offset = 0; offset < 7; offset++) {
    const data = new Date(oggi);
    data.setDate(oggi.getDate() + settimana * 7 + offset);
    if (!p.giorni.includes(data.getDay() || 7)) continue;
    const indice = settimana * p.giorni.length + sedi.length;
    const corso = corsi.get(rotazione[indice % rotazione.length]);
    sedi.push({ data, corso, arg: capitolo(p, corso), blocchi, giro: Math.floor(indice / rotazione.length) });
  }
  return sedi;
}

export function alternative(p, corsi, benvenuto) {
  const pagabili = p.materie.filter((id) => corsi.get(id).prezzo > 0 && !p.possedute.includes(id));
  const gratis = { id: 'gratis', slugs: [], listino: 0, totale: 0, percentuale: 0 };
  const opzioni = [gratis];
  if (pagabili.length) {
    const id = pagabili.includes(p.priorita) ? p.priorita : pagabili[0];
    const listino = Math.round(corsi.get(id).prezzo * 100);
    const percentuale = p.primoAcquisto ? benvenuto : 0;
    opzioni.push({
      id: 'singola',
      slugs: [id],
      listino,
      totale: listino - Math.round((listino * percentuale) / 100),
      percentuale
    });
  }
  const gruppo = p.pacchetto.filter((id) => pagabili.includes(id));
  if (gruppo.length >= 2 && gruppo.length <= 30) {
    const ord = riepilogoMaterie(gruppo, [...corsi.values()]);
    opzioni.push({
      id: 'pacchetto',
      slugs: gruppo,
      listino: ord.separato,
      totale: ord.totale,
      percentuale: ord.percentuale
    });
  }
  let suggerita = 'gratis';
  if (pagabili.includes(p.priorita) && p.dubbio !== 'gratuito') {
    suggerita = 'singola';
    if (
      opzioni.some((o) => o.id === 'pacchetto') &&
      gruppo.includes(p.priorita) &&
      p.orizzonte !== 'presto' &&
      p.giorni.length >= 2
    )
      suggerita = 'pacchetto';
  }
  return { opzioni, suggerita, pagabili };
}

export function tappa(c, p, lingua) {
  const attivita = ostacoli[p.ostacolo][lingua].slice(3);
  return c.giro === 0
    ? attivita
    : [
        attivita[0],
        lingua === 'en' ? 'Redo the problem without the solution' : 'Rifai la traccia senza svolgimento',
        attivita[2]
      ];
}
