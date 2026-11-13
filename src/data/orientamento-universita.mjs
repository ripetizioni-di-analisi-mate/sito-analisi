/**
 * Questionario originale di esplorazione dei percorsi di studio.
 * Le fonti descrivono metodi e offerta formativa; nessun quesito è riprodotto
 * o tradotto dai loro strumenti. Questa batteria non è un test validato.
 */
export const VERSIONE_UNIVERSITA = '2026-11-13.2';

export const FONTI_UNIVERSITA = [
  { titolo: 'AlmaOrièntati', url: 'https://www.almalaurea.it/orientamento/strumenti-orientamento-universitario/almaorientati', uso: 'Un percorso esterno per approfondire interessi, conoscenza dei corsi e aspettative. Il nostro riepilogo non riproduce né applica il suo test.' },
  { titolo: 'Universitaly: cosa studiare', url: 'https://www.universitaly.it/it/cerca-corsi', uso: 'Ricerca nell’offerta ufficiale, distinguendo corsi universitari e percorsi AFAM.' },
  { titolo: 'CISIA: Orientazione', url: 'https://www.cisiaonline.it/prepararsi/orientazione', uso: 'Risorse esterne per conoscere i percorsi e verificare separatamente la preparazione. Le nostre domande non sono prove CISIA o TOLC.' },
];

export const SCALA_UNIVERSITA = [
  { valore: 1, etichetta: 'Per niente' },
  { valore: 2, etichetta: 'Poco' },
  { valore: 3, etichetta: 'Abbastanza' },
  { valore: 4, etichetta: 'Molto' },
  { valore: 5, etichetta: 'Moltissimo' },
  { valore: 'non-conosco', etichetta: 'Non conosco abbastanza questa attività' },
];

const corso = (id, titolo, descrizione, tipo = 'laurea') => ({ id, titolo, descrizione, tipo });
const materia = (slug, titolo) => ({ slug, titolo, url: `/orientamento/studio?materia=${slug}` });

export const AREE_UNIVERSITA = [
  {
    id: 'ingegneria', titolo: 'Ingegneria',
    descrizione: 'Progettazione di strutture, macchine, impianti e sistemi, con modelli e verifiche quantitative.',
    percorsi: [
      corso('ing-civile', 'Ingegneria civile e ambientale', 'Strutture, territorio, opere e sistemi per l’ambiente.'),
      corso('ing-industriale', 'Ingegneria industriale', 'Macchine, energia, materiali e processi produttivi.'),
      corso('ing-informazione', 'Ingegneria dell’informazione', 'Elettronica, comunicazioni, automazione e sistemi informatici.'),
    ],
    materie: [materia('analisi-1', 'Analisi 1'), materia('fisica-1', 'Fisica 1'), materia('algebra-lineare', 'Algebra lineare')],
    cosaConfrontare: ['Confronta gli insegnamenti dei primi due anni e i laboratori dei diversi indirizzi.', 'Per ciascun corso verifica il bando di ammissione sul sito dell’ateneo.'],
  },
  {
    id: 'informatica', titolo: 'Informatica',
    descrizione: 'Algoritmi, programmazione, dati e funzionamento dei sistemi di calcolo.',
    percorsi: [
      corso('informatica-software', 'Informatica', 'Algoritmi, linguaggi, basi di dati e sistemi software.'),
      corso('informatica-dati', 'Percorsi in scienze dei dati', 'Programmazione, matematica e metodi per analizzare dati; confronta il livello e il piano dei corsi disponibili.'),
    ],
    materie: [materia('algebra-lineare', 'Algebra lineare'), materia('statistica', 'Statistica e probabilità')],
    cosaConfrontare: ['Confronta il peso di programmazione, matematica, sistemi e analisi dei dati.', 'Confronta Informatica e Ingegneria informatica attraverso i piani di studio effettivi.'],
  },
  {
    id: 'matematica-statistica', titolo: 'Matematica e statistica',
    descrizione: 'Ragionamento formale, modelli quantitativi e analisi dell’incertezza.',
    percorsi: [
      corso('matematica', 'Matematica', 'Dimostrazioni, strutture astratte e modelli matematici.'),
      corso('statistica', 'Statistica', 'Raccolta dei dati, modelli probabilistici e inferenza.'),
    ],
    materie: [materia('analisi-1', 'Analisi 1'), materia('algebra-lineare', 'Algebra lineare'), materia('statistica', 'Statistica e probabilità')],
    cosaConfrontare: ['Confronta la presenza di dimostrazioni, calcolo, programmazione e analisi di dati.', 'Leggi le descrizioni degli insegnamenti, oltre al loro titolo.'],
  },
  {
    id: 'scienze-fisiche-chimiche', titolo: 'Fisica e chimica',
    descrizione: 'Studio della materia e dei fenomeni attraverso misure, esperimenti e modelli.',
    percorsi: [
      corso('fisica', 'Fisica', 'Fenomeni fisici, modelli matematici e misure sperimentali.'),
      corso('chimica', 'Chimica', 'Struttura, proprietà e trasformazioni delle sostanze.'),
    ],
    materie: [materia('analisi-1', 'Analisi 1'), materia('fisica-1', 'Fisica 1')],
    cosaConfrontare: ['Confronta il lavoro di laboratorio e gli insegnamenti teorici dei due percorsi.', 'Cerca una lezione introduttiva o un’attività di laboratorio di orientamento.'],
  },
  {
    id: 'scienze-biologiche-ambientali', titolo: 'Biologia, natura e ambiente',
    descrizione: 'Organismi, ecosistemi e processi del pianeta studiati attraverso osservazioni e dati.',
    percorsi: [
      corso('biologia', 'Scienze biologiche', 'Organismi, cellule, evoluzione e relazioni fra i viventi.'),
      corso('natura-ambiente', 'Scienze naturali e ambientali', 'Sistemi naturali, ecosistemi e problemi ambientali.'),
      corso('geologia', 'Scienze geologiche', 'Materiali, processi e trasformazioni della Terra.'),
    ],
    materie: [materia('statistica', 'Statistica e probabilità')],
    cosaConfrontare: ['Confronta attività sul campo, laboratorio e insegnamenti su organismi e territorio.', 'Verifica quali discipline di base compaiono nel primo anno.'],
  },
  {
    id: 'agraria-veterinaria', titolo: 'Agraria, alimenti e veterinaria',
    descrizione: 'Produzioni agricole, sistemi alimentari, animali e gestione delle risorse biologiche.',
    percorsi: [
      corso('agraria', 'Scienze e tecnologie agrarie', 'Coltivazioni, suolo e gestione dei sistemi agricoli.'),
      corso('alimentari', 'Scienze e tecnologie alimentari', 'Produzione, trasformazione e qualità degli alimenti.'),
      corso('veterinaria', 'Medicina veterinaria', 'Salute animale e attività cliniche; verifica il percorso di accesso vigente.'),
    ],
    materie: [],
    cosaConfrontare: ['Distingui l’interesse per gli animali dalle attività cliniche e scientifiche del percorso veterinario.', 'Confronta il lavoro sul campo, in laboratorio e nei contesti produttivi.'],
  },
  {
    id: 'salute', titolo: 'Medicina e professioni sanitarie',
    descrizione: 'Studio della salute umana e attività di cura, assistenza, prevenzione o riabilitazione.',
    percorsi: [
      corso('medicina', 'Medicina e chirurgia', 'Studio dei processi di salute e malattia e formazione clinica.'),
      corso('infermieristica', 'Infermieristica', 'Assistenza alla persona e lavoro nei servizi sanitari.'),
      corso('riabilitazione', 'Professioni sanitarie della riabilitazione', 'Percorsi distinti, fra cui Fisioterapia; confronta le attività formative di ciascuno.'),
    ],
    materie: [],
    cosaConfrontare: ['Confronta attività quotidiane, tirocini e responsabilità dei singoli percorsi.', 'Consulta le modalità di accesso aggiornate sul sito dell’ateneo.'],
  },
  {
    id: 'sport', titolo: 'Scienze motorie e sport',
    descrizione: 'Movimento umano, attività fisica, allenamento e progettazione delle attività motorie.',
    percorsi: [
      corso('scienze-motorie', 'Scienze delle attività motorie e sportive', 'Studio del movimento e progettazione delle attività motorie.'),
      corso('sport-organizzazione', 'Percorsi su organizzazione e gestione dello sport', 'Confronta gli insegnamenti gestionali disponibili nei corsi e i requisiti del livello di studio.'),
    ],
    materie: [],
    cosaConfrontare: ['Confronta gli insegnamenti biologici, tecnici, educativi e gestionali.', 'Scienze motorie e Fisioterapia sono percorsi distinti: confronta formazione e attività professionali.'],
  },
  {
    id: 'economia', titolo: 'Economia e gestione',
    descrizione: 'Scelte economiche, funzionamento delle organizzazioni, mercati e uso delle risorse.',
    percorsi: [
      corso('economia-mercati', 'Economia', 'Mercati, scelte economiche e modelli quantitativi.'),
      corso('economia-aziendale', 'Economia aziendale e management', 'Organizzazione, bilanci, processi e decisioni delle imprese.'),
    ],
    materie: [materia('matematica-generale', 'Matematica generale'), materia('statistica', 'Statistica e probabilità')],
    cosaConfrontare: ['Confronta la presenza di economia teorica, matematica, diritto e discipline aziendali.', 'Leggi alcuni programmi di insegnamento del primo anno.'],
  },
  {
    id: 'giurisprudenza', titolo: 'Diritto e istituzioni',
    descrizione: 'Regole, interpretazione dei testi, argomentazione e funzionamento delle istituzioni.',
    percorsi: [
      corso('giurisprudenza', 'Giurisprudenza', 'Sistemi giuridici, interpretazione e applicazione delle norme.'),
      corso('servizi-giuridici', 'Scienze dei servizi giuridici', 'Ambiti applicativi del diritto; confronta obiettivi e durata con Giurisprudenza.'),
    ],
    materie: [],
    cosaConfrontare: ['Confronta i programmi, i titoli rilasciati e i requisiti delle professioni che ti interessano.', 'Prova a leggere un breve testo giuridico e a ricostruirne gli argomenti.'],
  },
  {
    id: 'scienze-sociali', titolo: 'Scienze sociali e politiche',
    descrizione: 'Società, istituzioni, comunicazione e relazioni fra persone e gruppi.',
    percorsi: [
      corso('sociologia', 'Sociologia', 'Fenomeni sociali e metodi di ricerca.'),
      corso('scienze-politiche', 'Scienze politiche e relazioni internazionali', 'Istituzioni, politiche pubbliche e contesti internazionali.'),
      corso('comunicazione', 'Scienze della comunicazione', 'Processi comunicativi, media e contesti sociali.'),
    ],
    materie: [materia('statistica', 'Statistica e probabilità')],
    cosaConfrontare: ['Confronta il peso di ricerca sociale, diritto, economia, storia e comunicazione.', 'Esamina le modalità con cui i corsi insegnano a raccogliere e interpretare dati.'],
  },
  {
    id: 'educazione-psicologia', titolo: 'Educazione e psicologia',
    descrizione: 'Apprendimento, sviluppo, comportamento e progettazione degli interventi educativi.',
    percorsi: [
      corso('educazione', 'Scienze dell’educazione e della formazione', 'Processi educativi e progettazione delle attività formative.'),
      corso('psicologia', 'Scienze e tecniche psicologiche', 'Comportamento e processi psicologici studiati con metodi scientifici.'),
    ],
    materie: [materia('statistica', 'Statistica e probabilità')],
    cosaConfrontare: ['Confronta metodi di ricerca, attività educative, tirocini e insegnamenti biologici.', 'Verifica il percorso completo richiesto dalle attività professionali che vuoi svolgere.'],
  },
  {
    id: 'lettere-filosofia-storia', titolo: 'Lettere, filosofia e storia',
    descrizione: 'Testi, idee, fonti e trasformazioni delle culture nel tempo.',
    percorsi: [
      corso('lettere', 'Lettere', 'Testi letterari, lingue e contesti culturali.'),
      corso('filosofia', 'Filosofia', 'Analisi di concetti, argomentazioni e tradizioni di pensiero.'),
      corso('storia', 'Storia', 'Fonti e interpretazione dei processi storici.'),
    ],
    materie: [],
    cosaConfrontare: ['Confronta le discipline obbligatorie e la quantità di lettura, analisi e scrittura richiesta.', 'Prova un’attività sulle fonti o una lezione introduttiva di due corsi diversi.'],
  },
  {
    id: 'lingue', titolo: 'Lingue e mediazione',
    descrizione: 'Lingue, testi e comunicazione fra contesti culturali diversi.',
    percorsi: [
      corso('lingue-culture', 'Lingue e culture moderne', 'Studio delle lingue, delle letterature e dei loro contesti.'),
      corso('mediazione', 'Mediazione linguistica', 'Uso delle lingue e mediazione fra interlocutori e contesti.'),
    ],
    materie: [],
    cosaConfrontare: ['Confronta le lingue offerte e il peso di letteratura, linguistica, traduzione e pratica linguistica.', 'Verifica i livelli iniziali richiesti per ciascuna lingua.'],
  },
  {
    id: 'arti-design', titolo: 'Arti, design e architettura',
    descrizione: 'Progettazione di spazi, oggetti e forme espressive, con attività di laboratorio e revisione.',
    percorsi: [
      corso('design', 'Design', 'Progettazione di prodotti, servizi e comunicazione visiva.'),
      corso('architettura', 'Architettura', 'Progettazione degli spazi e studio delle costruzioni e del contesto.'),
      corso('arti-visive', 'Arti visive in Accademia di belle arti', 'Percorso AFAM: confronta corsi, laboratori e titoli rilasciati.', 'afam'),
      corso('musica-spettacolo', 'Musica e arti dello spettacolo in istituzioni AFAM', 'Percorsi AFAM con discipline e prove di accesso specifiche.', 'afam'),
    ],
    materie: [],
    cosaConfrontare: ['Distingui le lauree universitarie dai diplomi accademici AFAM e verifica i requisiti dei singoli percorsi.', 'Confronta laboratori, revisioni di progetto, eventuale portfolio e prove di accesso.'],
  },
];

const interesse = (id, area, testo, evidenza) => ({ id, blocco: 'interessi', testo, aree: [area], evidenza });
const studio = (id, testo, evidenza, aree = []) => ({ id, blocco: 'studio', testo, aree, evidenza });
const priorita = (id, testo, evidenza) => ({ id, blocco: 'priorita', testo, aree: [], evidenza });
const approfondimento = (id, famiglia, indirizzi, testo, evidenza) => ({ id, blocco: 'approfondimento', testo, aree: [famiglia], famiglia, indirizzi, evidenza });

export const DOMANDE_UNIVERSITA = [
  interesse('int-ing-1', 'ingegneria', 'Quanto ti interessa progettare un oggetto o un impianto scegliendo materiali, dimensioni e condizioni di funzionamento?', 'progettare sistemi tenendo conto dei vincoli'),
  interesse('int-inf-1', 'informatica', 'Quanto ti interessa costruire una procedura che un computer possa eseguire e controllare perché produce un risultato errato?', 'scrivere procedure e cercare errori nel loro funzionamento'),
  interesse('int-mat-1', 'matematica-statistica', 'Quanto ti interessa capire perché una proprietà matematica vale in tutti i casi previsti, oltre a verificare qualche esempio?', 'ricostruire ragionamenti matematici generali'),
  interesse('int-fis-1', 'scienze-fisiche-chimiche', 'Quanto ti interessa spiegare il comportamento di un materiale o un fenomeno fisico confrontando un modello con delle misure?', 'confrontare modelli scientifici e misure'),
  interesse('int-bio-1', 'scienze-biologiche-ambientali', 'Quanto ti interessa studiare come cambiano gli organismi e gli ecosistemi al variare delle condizioni ambientali?', 'studiare organismi, ecosistemi e ambiente'),
  interesse('int-agr-1', 'agraria-veterinaria', 'Quanto ti interessa capire come suolo, acqua e condizioni di allevamento influenzano piante, animali e produzioni alimentari?', 'studiare sistemi agricoli, animali e produzioni alimentari'),
  interesse('int-sal-1', 'salute', 'Quanto ti interessa studiare il funzionamento del corpo umano per comprendere problemi di salute e interventi di cura?', 'studiare la salute umana e i processi di cura'),
  interesse('int-spo-1', 'sport', 'Quanto ti interessa analizzare un movimento e capire come modificare un esercizio per persone con obiettivi diversi?', 'analizzare il movimento e adattare attività motorie'),
  interesse('int-eco-1', 'economia', 'Quanto ti interessa capire come famiglie, imprese e istituzioni prendono decisioni quando le risorse sono limitate?', 'esaminare decisioni economiche e uso delle risorse'),
  interesse('int-giu-1', 'giurisprudenza', 'Quanto ti interessa confrontare due interpretazioni di una regola e ricostruire gli argomenti che sostengono ciascuna?', 'interpretare regole e confrontare argomentazioni'),
  interesse('int-soc-1', 'scienze-sociali', 'Quanto ti interessa capire perché gruppi sociali diversi hanno comportamenti, opportunità o opinioni differenti?', 'studiare differenze e relazioni fra gruppi sociali'),
  interesse('int-edu-1', 'educazione-psicologia', 'Quanto ti interessa capire come le persone apprendono e quali condizioni possono aiutare un percorso educativo?', 'studiare apprendimento e processi educativi'),
  interesse('int-uma-1', 'lettere-filosofia-storia', 'Quanto ti interessa leggere un testo del passato e ricostruirne il significato attraverso il contesto e le fonti?', 'interpretare testi e fonti nel loro contesto'),
  interesse('int-lin-1', 'lingue', 'Quanto ti interessa confrontare modi diversi di esprimere lo stesso concetto in due lingue, cercando le differenze di significato?', 'confrontare lingue e significati'),
  interesse('int-art-1', 'arti-design', 'Quanto ti interessa elaborare un progetto visivo, spaziale o espressivo e rivederlo dopo aver osservato come viene percepito?', 'sviluppare e rivedere progetti visivi, spaziali o espressivi'),
  interesse('int-ing-2', 'ingegneria', 'Quanto ti interessa usare calcoli e prove per capire se una struttura, una macchina o un sistema rispetta i requisiti del progetto?', 'verificare con calcoli e prove le scelte di progetto'),
  interesse('int-inf-2', 'informatica', 'Quanto ti interessa organizzare dati e istruzioni per realizzare un programma che risolva un problema in modo ripetibile?', 'organizzare dati e algoritmi per risolvere problemi'),
  interesse('int-mat-2', 'matematica-statistica', 'Quanto ti interessa costruire un modello quantitativo e discutere quali conclusioni si possono ricavare dai dati disponibili?', 'costruire modelli e discutere le conclusioni ricavate dai dati'),
  interesse('int-fis-2', 'scienze-fisiche-chimiche', 'Quanto ti interessa progettare una misura o un esperimento per distinguere due spiegazioni di un fenomeno della materia?', 'usare esperimenti per distinguere spiegazioni scientifiche'),
  interesse('int-bio-2', 'scienze-biologiche-ambientali', 'Quanto ti interessa raccogliere osservazioni su esseri viventi o territorio per ricostruire come funzionano e cambiano nel tempo?', 'interpretare osservazioni su viventi e territorio'),
  interesse('int-agr-2', 'agraria-veterinaria', 'Quanto ti interessa seguire un problema concreto che collega salute animale, coltivazioni o qualità degli alimenti a dati biologici e produttivi?', 'collegare dati biologici e problemi dei sistemi agroalimentari'),
  interesse('int-sal-2', 'salute', 'Quanto ti interessa comprendere i bisogni di una persona e il contributo di figure diverse nell’assistenza, nella prevenzione o nella riabilitazione?', 'comprendere i bisogni delle persone nei percorsi sanitari'),
  interesse('int-spo-2', 'sport', 'Quanto ti interessa progettare un’attività fisica e osservarne gli effetti su tecnica, partecipazione e prestazione?', 'progettare e valutare attività fisiche e sportive'),
  interesse('int-eco-2', 'economia', 'Quanto ti interessa confrontare costi, risultati e organizzazione di un’attività per capire quali decisioni la rendono più efficace?', 'analizzare costi, risultati e organizzazione delle attività'),
  interesse('int-giu-2', 'giurisprudenza', 'Quanto ti interessa ricostruire un caso attraverso documenti e norme, distinguendo fatti, diritti e obblighi delle persone coinvolte?', 'analizzare casi attraverso documenti, diritti e obblighi'),
  interesse('int-soc-2', 'scienze-sociali', 'Quanto ti interessa confrontare fonti, interviste o dati per capire gli effetti di una decisione pubblica o di una campagna di comunicazione?', 'valutare fenomeni pubblici e comunicativi attraverso fonti e dati'),
  interesse('int-edu-2', 'educazione-psicologia', 'Quanto ti interessa osservare come cambiano comportamento, motivazione e relazioni, distinguendo le ipotesi dalle osservazioni raccolte?', 'studiare comportamento e relazioni attraverso osservazioni'),
  interesse('int-uma-2', 'lettere-filosofia-storia', 'Quanto ti interessa confrontare interpretazioni di un evento, di un’opera o di un’idea e sostenere una lettura con argomenti precisi?', 'confrontare interpretazioni culturali, storiche e filosofiche'),
  interesse('int-lin-2', 'lingue', 'Quanto ti interessa usare una lingua per comprendere testi, conversazioni e abitudini di un contesto culturale diverso dal tuo?', 'approfondire lingue e contesti culturali'),
  interesse('int-art-2', 'arti-design', 'Quanto ti interessa sperimentare materiali, forme, immagini o suoni per trovare una soluzione espressiva o progettuale?', 'sperimentare forme, materiali e linguaggi espressivi'),

  studio('stu-dimostrazioni', 'Quanto ti piacerebbe dedicare parte dello studio a ricostruire dimostrazioni e controllare ogni passaggio di un ragionamento?', 'ricostruire ragionamenti e dimostrazioni', ['matematica-statistica', 'informatica', 'scienze-fisiche-chimiche']),
  studio('stu-problemi', 'Quanto ti piacerebbe lavorare su problemi quantitativi che richiedono più tentativi e una revisione dei calcoli?', 'risolvere problemi quantitativi con tentativi e revisioni', ['ingegneria', 'matematica-statistica', 'economia', 'scienze-fisiche-chimiche']),
  studio('stu-laboratorio', 'Quanto ti piacerebbe seguire un protocollo di laboratorio, annotare misure e discutere perché un risultato differisce dalle attese?', 'svolgere attività sperimentali e interpretare le misure', ['scienze-fisiche-chimiche', 'scienze-biologiche-ambientali', 'agraria-veterinaria', 'salute']),
  studio('stu-codice', 'Quanto ti piacerebbe scrivere e correggere codice, documentando le scelte perché altre persone possano comprenderle?', 'scrivere, correggere e documentare codice', ['informatica', 'ingegneria', 'matematica-statistica']),
  studio('stu-lettura', 'Quanto ti piacerebbe leggere testi articolati ogni settimana e prepararne un confronto scritto con argomenti e riferimenti?', 'leggere testi articolati e sviluppare argomentazioni scritte', ['giurisprudenza', 'lettere-filosofia-storia', 'lingue', 'scienze-sociali']),
  studio('stu-persone', 'Quanto ti piacerebbe svolgere attività formative in cui osservi situazioni concrete, ascolti altre persone e rifletti su quanto accaduto?', 'apprendere attraverso osservazione e confronto con le persone', ['salute', 'educazione-psicologia', 'scienze-sociali', 'sport']),
  studio('stu-campo', 'Quanto ti piacerebbe raccogliere osservazioni sul territorio o in contesti produttivi e poi analizzarle con ordine?', 'raccogliere e analizzare osservazioni sul campo', ['scienze-biologiche-ambientali', 'agraria-veterinaria', 'scienze-sociali', 'ingegneria']),
  studio('stu-progetto', 'Quanto ti piacerebbe sviluppare un progetto per più settimane e modificarlo dopo revisioni e discussioni?', 'sviluppare progetti attraverso revisioni successive', ['arti-design', 'ingegneria', 'informatica', 'economia']),
  studio('stu-lingue', 'Quanto ti piacerebbe esercitare regolarmente una lingua, alternando ascolto, conversazione, lettura e analisi dei testi?', 'esercitare una lingua con attività regolari e diverse', ['lingue']),
  studio('stu-attivita-motorie', 'Quanto ti piacerebbe alternare lo studio del movimento alla preparazione e all’osservazione di attività motorie pratiche?', 'collegare lo studio del movimento alle attività pratiche', ['sport']),
  priorita('pri-impatto', 'Quanto conta per te comprendere quali effetti concreti può avere il tuo studio sulla vita delle persone o sull’ambiente?', 'riconoscere gli effetti dello studio sulle persone o sull’ambiente'),
  priorita('pri-professione', 'Quanto conta per te conoscere fin dall’inizio il percorso formativo completo richiesto per una professione specifica?', 'conoscere il percorso completo verso una professione'),
  priorita('pri-esplorare', 'Quanto conta per te avere spazio per scegliere insegnamenti diversi e conoscere più ambiti prima di specializzarti?', 'mantenere possibilità di esplorazione prima della specializzazione'),
  priorita('pri-pratica', 'Quanto conta per te trovare laboratori, progetti o tirocini già durante il percorso di studio?', 'avere occasioni di laboratorio, progetto o tirocinio durante gli studi'),

  approfondimento('app-ing-civile-1', 'ingegneria', ['ing-civile'], 'Quanto ti interessa studiare come una struttura sostiene i carichi e come le scelte di progetto dipendono dal terreno e dal territorio?', 'studiare strutture, terreno e territorio'),
  approfondimento('app-ing-industriale-1', 'ingegneria', ['ing-industriale'], 'Quanto ti interessa analizzare una macchina o un impianto per migliorarne consumi, materiali e processo produttivo?', 'analizzare macchine, energia e processi produttivi'),
  approfondimento('app-ing-informazione-1', 'ingegneria', ['ing-informazione'], 'Quanto ti interessa collegare sensori, circuiti e programmi per controllare il comportamento di un sistema?', 'progettare sistemi con sensori, circuiti e controllo'),
  approfondimento('app-ing-civile-2', 'ingegneria', ['ing-civile'], 'Quanto ti interessa confrontare soluzioni per opere, reti idriche o protezione del territorio attraverso calcoli e dati ambientali?', 'confrontare opere e sistemi per il territorio'),
  approfondimento('app-ing-industriale-2', 'ingegneria', ['ing-industriale'], 'Quanto ti interessa seguire le trasformazioni di energia e materiali all’interno di un sistema di produzione?', 'studiare trasformazioni di energia e materiali nella produzione'),
  approfondimento('app-ing-informazione-2', 'ingegneria', ['ing-informazione'], 'Quanto ti interessa capire come un sistema acquisisce informazioni, le trasmette e le usa per eseguire un’azione automatica?', 'studiare acquisizione, trasmissione e uso delle informazioni'),
  approfondimento('app-inf-software', 'informatica', ['informatica-software'], 'Quanto ti interessa progettare il funzionamento di un’applicazione, dalle strutture dei dati ai controlli sugli errori?', 'progettare il funzionamento di applicazioni software'),
  approfondimento('app-inf-dati', 'informatica', ['informatica-dati'], 'Quanto ti interessa pulire e analizzare una raccolta di dati, usando programmi e modelli per rispondere a una domanda?', 'analizzare dati con programmi e modelli'),
  approfondimento('app-mat-teoria', 'matematica-statistica', ['matematica'], 'Quanto ti interessa studiare strutture astratte e dimostrare proprietà anche quando l’applicazione pratica arriva in un secondo momento?', 'studiare strutture astratte e dimostrazioni'),
  approfondimento('app-mat-statistica', 'matematica-statistica', ['statistica'], 'Quanto ti interessa capire quali conclusioni si possono sostenere con un campione di dati e quali incertezze rimangono?', 'valutare conclusioni e incertezze nei dati'),
  approfondimento('app-sci-fisica', 'scienze-fisiche-chimiche', ['fisica'], 'Quanto ti interessa descrivere con modelli matematici fenomeni come il moto, le onde o gli scambi di energia e confrontarli con misure?', 'studiare fenomeni fisici con modelli e misure'),
  approfondimento('app-sci-chimica', 'scienze-fisiche-chimiche', ['chimica'], 'Quanto ti interessa collegare la struttura delle sostanze alle loro proprietà e alle trasformazioni osservate in laboratorio?', 'studiare struttura e trasformazioni delle sostanze'),
  approfondimento('app-bio-organismi', 'scienze-biologiche-ambientali', ['biologia'], 'Quanto ti interessa studiare processi cellulari, ereditarietà e funzionamento degli organismi attraverso osservazioni ed esperimenti?', 'studiare cellule, ereditarietà e organismi'),
  approfondimento('app-bio-ecosistemi', 'scienze-biologiche-ambientali', ['natura-ambiente'], 'Quanto ti interessa confrontare ecosistemi e ricostruire gli effetti delle attività umane sulle loro relazioni?', 'studiare ecosistemi e cambiamenti ambientali'),
  approfondimento('app-bio-terra', 'scienze-biologiche-ambientali', ['geologia'], 'Quanto ti interessa leggere rocce, forme del paesaggio e misure del terreno per ricostruire i processi della Terra?', 'ricostruire i processi della Terra attraverso osservazioni e misure'),
  approfondimento('app-agr-colture', 'agraria-veterinaria', ['agraria'], 'Quanto ti interessa confrontare tecniche di coltivazione considerando suolo, acqua, resa e conseguenze ambientali?', 'confrontare sistemi di coltivazione e uso delle risorse'),
  approfondimento('app-agr-alimenti', 'agraria-veterinaria', ['alimentari'], 'Quanto ti interessa seguire la trasformazione di un alimento e capire come controllarne proprietà e qualità?', 'studiare trasformazioni e qualità degli alimenti'),
  approfondimento('app-agr-animali', 'agraria-veterinaria', ['veterinaria'], 'Quanto ti interessa studiare salute e malattie degli animali, comprese le attività cliniche e le procedure di laboratorio?', 'studiare salute animale e attività cliniche veterinarie'),
  approfondimento('app-sal-medica', 'salute', ['medicina'], 'Quanto ti interessa approfondire i meccanismi delle malattie e il ragionamento che guida valutazioni e scelte cliniche?', 'studiare meccanismi delle malattie e ragionamento clinico'),
  approfondimento('app-sal-assistenza', 'salute', ['infermieristica'], 'Quanto ti interessa seguire con continuità i bisogni di una persona e partecipare all’organizzazione della sua assistenza?', 'seguire bisogni e assistenza della persona'),
  approfondimento('app-sal-riabilitazione', 'salute', ['riabilitazione'], 'Quanto ti interessa osservare una funzione compromessa e seguire un percorso di recupero attraverso attività e verifiche successive?', 'seguire percorsi di riabilitazione e verificarne l’evoluzione'),
  approfondimento('app-spo-movimento', 'sport', ['scienze-motorie'], 'Quanto ti interessa costruire un programma di attività motoria confrontando obiettivi, caratteristiche delle persone e osservazioni sul movimento?', 'progettare programmi di attività motoria'),
  approfondimento('app-spo-gestione', 'sport', ['sport-organizzazione'], 'Quanto ti interessa organizzare un’attività sportiva considerando persone, strutture, costi e partecipazione?', 'organizzare attività e servizi sportivi'),
  approfondimento('app-eco-mercati', 'economia', ['economia-mercati'], 'Quanto ti interessa confrontare modelli e dati per capire come una scelta di politica economica può modificare prezzi, redditi o occupazione?', 'analizzare mercati e scelte di politica economica'),
  approfondimento('app-eco-impresa', 'economia', ['economia-aziendale'], 'Quanto ti interessa leggere risultati e processi di un’organizzazione per proporre scelte su risorse, attività e gestione?', 'analizzare organizzazioni e decisioni aziendali'),
  approfondimento('app-giu-sistemi', 'giurisprudenza', ['giurisprudenza'], 'Quanto ti interessa confrontare norme, principi e interpretazioni di più rami del diritto per ricostruire un problema giuridico?', 'approfondire sistemi giuridici e interpretazione delle norme'),
  approfondimento('app-giu-servizi', 'giurisprudenza', ['servizi-giuridici'], 'Quanto ti interessa applicare conoscenze giuridiche alla gestione di documenti, procedure e servizi di un’organizzazione?', 'applicare il diritto a procedure e servizi'),
  approfondimento('app-soc-ricerca', 'scienze-sociali', ['sociologia'], 'Quanto ti interessa progettare interviste o analizzare dati per comprendere un fenomeno sociale senza partire da una spiegazione già decisa?', 'indagare fenomeni sociali con interviste e dati'),
  approfondimento('app-soc-politica', 'scienze-sociali', ['scienze-politiche'], 'Quanto ti interessa confrontare istituzioni e decisioni pubbliche di paesi diversi attraverso storia, diritto ed economia?', 'confrontare istituzioni e decisioni pubbliche'),
  approfondimento('app-soc-media', 'scienze-sociali', ['comunicazione'], 'Quanto ti interessa studiare come cambia il significato di un messaggio secondo il mezzo usato e il pubblico che lo riceve?', 'analizzare messaggi, media e pubblici'),
  approfondimento('app-edu-formazione', 'educazione-psicologia', ['educazione'], 'Quanto ti interessa progettare un’attività educativa, osservarne lo svolgimento e modificarla in base ai bisogni emersi?', 'progettare e osservare attività educative'),
  approfondimento('app-edu-psicologia', 'educazione-psicologia', ['psicologia'], 'Quanto ti interessa confrontare spiegazioni del comportamento attraverso esperimenti, osservazioni e analisi dei dati?', 'studiare il comportamento attraverso metodi di ricerca'),
  approfondimento('app-uma-lettere', 'lettere-filosofia-storia', ['lettere'], 'Quanto ti interessa analizzare come è costruito un testo letterario e come dialoga con altri testi e con la sua epoca?', 'analizzare testi letterari e contesti culturali'),
  approfondimento('app-uma-filosofia', 'lettere-filosofia-storia', ['filosofia'], 'Quanto ti interessa ricostruire un’argomentazione su conoscenza, etica o linguaggio e valutarne le premesse?', 'analizzare concetti e argomentazioni filosofiche'),
  approfondimento('app-uma-storia', 'lettere-filosofia-storia', ['storia'], 'Quanto ti interessa confrontare documenti e testimonianze per ricostruire un cambiamento storico e discuterne le cause?', 'ricostruire processi storici attraverso le fonti'),
  approfondimento('app-lin-culture', 'lingue', ['lingue-culture'], 'Quanto ti interessa approfondire letteratura, linguistica e storia culturale attraverso testi nella lingua che studi?', 'studiare lingue attraverso testi e contesti culturali'),
  approfondimento('app-lin-mediazione', 'lingue', ['mediazione'], 'Quanto ti interessa scegliere come rendere un messaggio fra lingue diverse tenendo conto del contesto e degli interlocutori?', 'mediare messaggi fra lingue e interlocutori'),
  approfondimento('app-art-design', 'arti-design', ['design'], 'Quanto ti interessa progettare un oggetto, un servizio o un’interfaccia osservando come le persone lo usano?', 'progettare prodotti e servizi a partire dal loro uso'),
  approfondimento('app-art-architettura', 'arti-design', ['architettura'], 'Quanto ti interessa progettare uno spazio considerando forma, costruzione, uso e rapporto con il luogo?', 'progettare spazi in relazione a uso, costruzione e luogo'),
  approfondimento('app-art-visive', 'arti-design', ['arti-visive'], 'Quanto ti interessa sviluppare una ricerca espressiva attraverso immagini, materiali e pratiche artistiche?', 'sviluppare una ricerca nelle arti visive'),
  approfondimento('app-art-musica', 'arti-design', ['musica-spettacolo'], 'Quanto ti interessa dedicare una parte consistente dello studio alla pratica, all’interpretazione o alla composizione musicale o scenica?', 'approfondire pratica e ricerca musicale o scenica'),
];
