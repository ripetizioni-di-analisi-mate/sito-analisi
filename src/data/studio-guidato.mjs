// Studio guidato (13/11/2026, richiesta di Carmine): test adattivo che trova le lacune
// di uno studente, ne cerca la causa nelle basi e indica i capitoli da studiare in ordine.
// Anteprima riservata ai GM: Analisi 1 (basi dal Precorso) e Analisi 2 (basi da Analisi 1, Precorso e capitoli precedenti).
//
// Per ogni argomento del corso:
//   interni = argomenti della stessa materia da cui dipende (si verificano se l'argomento risulta debole);
//   basi    = argomenti del Precorso da cui dipende (si verificano se l'argomento risulta debole).
// L'ordine delle basi conta: si verificano nell'ordine scritto, fino a MAX_BASI per argomento.

export const MATERIA_BASI = 'precorso';

export const STUDIO_GUIDATO = {
  'analisi-1': {
    dipendenze: {
      insiemi: { interni: [], basi: ['logica', 'potenze-e-radici', 'equazioni-polinomiali'] },
      'numeri-complessi': { interni: [], basi: ['equazioni-polinomiali', 'goniometriche', 'polinomi'] },
      limiti: { interni: ['insiemi'], basi: ['polinomi', 'equazioni-polinomiali', 'valore-assoluto', 'irrazionali', 'esponenziali', 'logaritmiche'] },
      derivate: { interni: ['limiti'], basi: ['potenze-e-radici', 'goniometriche', 'logaritmiche'] },
      'studio-di-funzione': { interni: ['limiti', 'derivate'], basi: ['equazioni-polinomiali', 'valore-assoluto', 'irrazionali', 'esponenziali', 'logaritmiche'] },
      integrali: { interni: ['derivate'], basi: ['polinomi', 'goniometriche'] },
      'integrali-impropri': { interni: ['integrali', 'limiti'], basi: [] },
      serie: { interni: ['limiti'], basi: [] },
      'equazioni-differenziali': { interni: ['integrali', 'derivate'], basi: ['equazioni-polinomiali', 'esponenziali', 'goniometriche'] },
    },
    // Mappa del corso nella pagina della materia (14/11/2026): si disegnano solo i collegamenti diretti
    // (riduzione transitiva di «interni»), così i fili formano un albero e non si incrociano.
    // posizioni: [colonna, riga] nel disegno orizzontale; in verticale si scambiano.
    mappa: {
      diretti: [['insiemi', 'limiti'], ['limiti', 'derivate'], ['limiti', 'serie'], ['derivate', 'studio-di-funzione'], ['derivate', 'integrali'], ['integrali', 'equazioni-differenziali'], ['integrali', 'integrali-impropri']],
      posizioni: { insiemi: [0, 1], 'numeri-complessi': [0, 2.35], limiti: [1, 1], derivate: [2, 0.45], serie: [2, 1.95], 'studio-di-funzione': [3, 0], integrali: [3, 1], 'equazioni-differenziali': [4, 0.55], 'integrali-impropri': [4, 1.55] },
      brevi: { insiemi: 'Insiemi', 'numeri-complessi': 'Complessi', limiti: 'Limiti', derivate: 'Derivate', 'studio-di-funzione': 'Studio di funzione', integrali: 'Integrali', 'integrali-impropri': 'Impropri', serie: 'Serie', 'equazioni-differenziali': 'Eq. differenziali' },
    },
  },  // Analisi 2 (14/11/2026 sera, richiesta di Carmine): le basi vengono da Analisi 1, dal Precorso e dai capitoli
  // precedenti di Analisi 2 (vedi RIMANDI). Le equazioni differenziali sono quelle di Analisi 1 (capitolo condiviso,
  // senza domande proprie): non entrano nel test di Analisi 2.
  'analisi-2': {
    dipendenze: {
      'funzioni-di-piu-variabili': { interni: [], basi: ['analisi-1/limiti', 'analisi-1/insiemi'] },
      'calcolo-differenziale': { interni: ['funzioni-di-piu-variabili'], basi: ['analisi-1/derivate'] },
      'funzioni-implicite': { interni: ['calcolo-differenziale'], basi: ['analisi-1/derivate'] },
      'massimi-e-minimi': { interni: ['calcolo-differenziale', 'funzioni-di-piu-variabili'], basi: ['analisi-1/studio-di-funzione'] },
      'curve-e-integrali-di-linea': { interni: [], basi: ['analisi-1/derivate', 'analisi-1/integrali'] },
      'campi-vettoriali': { interni: ['curve-e-integrali-di-linea', 'calcolo-differenziale', 'integrali-doppi-e-tripli'], basi: [] },
      'integrali-doppi-e-tripli': { interni: ['funzioni-di-piu-variabili'], basi: ['analisi-1/integrali'] },
      'superfici-e-flussi': { interni: ['calcolo-differenziale', 'integrali-doppi-e-tripli', 'campi-vettoriali'], basi: [] },
      'successioni-e-serie-di-funzioni': { interni: [], basi: ['analisi-1/limiti', 'analisi-1/serie'] },
      'serie-di-potenze': { interni: ['successioni-e-serie-di-funzioni'], basi: ['analisi-1/serie', 'analisi-1/derivate'] },
      'serie-di-fourier': { interni: ['successioni-e-serie-di-funzioni'], basi: ['analisi-1/integrali'] },
    },
  },

};

// Regole del test (si possono ritoccare senza cambiare il motore). Dal 14/11/2026 sera il test lavora per
// abilità dentro un capitolo scelto dallo studente (richiesta di Carmine: poche domande, esito minuzioso).
export const REGOLE_SG = {
  maxDomandeTest: 12,       // domande di un test su un capitolo (le domande di ricerca del capitolo si aggiungono)
  livelloPrima: 2,          // livello della prima domanda di ogni abilità
  testPrecedentiViste: 3,   // domande dei test precedenti da non riproporre
};

// Rimandi di ogni abilità (stesso ordine di «abilita» in studio-guidato-livelli.json):
// «paragrafi della teoria | schede svolte | basi». I paragrafi sono le ancore dei titoli ## della teoria;
// una base è «materia/argomento#indice dell'abilità» e si verifica solo se l'abilità risulta una lacuna.
// Dopo ogni modifica: build di Analisi 1 e Precorso, poi `node scripts/studio-guidato-rimandi.mjs`
// (controlla ancore e schede e scrive i titoli in studio-guidato-rimandi.json).
export const RIMANDI = {
  'analisi-1/insiemi': [
    'operazioni-tra-insiemi,intervalli|1|precorso/equazioni-polinomiali#3',
    'estremo-superiore-e-inferiore,maggioranti-minoranti-massimo-e-minimo|2,3|precorso/logica#4',
    'il-principio-di-induzione,la-somma-dei-primi-n-naturali|5,6|precorso/logica#2',
    'i-coefficienti-binomiali,il-binomio-di-newton|8|precorso/polinomi#0',
    'dominio-naturale|9|precorso/irrazionali#0',
    'iniettività-funzione-inversa-e-composizione,simmetrie-periodicità-monotonia-e-limitatezza|10,11|',
    'esponenziale-e-logaritmo,funzioni-trigonometriche-e-loro-inverse|13,14|precorso/logaritmiche#1',
    'equazioni-e-disequazioni-elementari||precorso/valore-assoluto#4',
  ],
  'analisi-1/numeri-complessi': [
    'operazioni|1|precorso/polinomi#0',
    'coniugato,piano-di-gauss|7|precorso/potenze-e-radici#5',
    'forma-trigonometrica,forma-esponenziale|2|precorso/goniometriche#0',
    'radici-n-esime,forma-trigonometrica|3,4|analisi-1/numeri-complessi#2',
    'equazioni-in-campo-complesso|5,6|precorso/equazioni-polinomiali#1',
    'piano-di-gauss|8|precorso/geometria-analitica#5',
    'teorema-fondamentale-dellalgebra|8|precorso/polinomi#6',
  ],
  'analisi-1/limiti': [
    'operazioni-con-i-limiti-e-forme-indeterminate|1|precorso/polinomi#5',
    'operazioni-con-i-limiti-e-forme-indeterminate,infinitesimi-infiniti-e-simboli-di-landau|3,9|precorso/potenze-e-radici#0',
    'operazioni-con-i-limiti-e-forme-indeterminate|7,2|precorso/potenze-e-radici#3',
    'limiti-notevoli|4,6|precorso/goniometriche#1',
    'infinitesimi-infiniti-e-simboli-di-landau|5|analisi-1/limiti#3',
    'definizione-di-limite,funzioni-continue|10|precorso/valore-assoluto#4',
    'asintoti|8|analisi-1/limiti#1',
    'teoremi-sulle-funzioni-continue||',
  ],
  'analisi-1/derivate': [
    'derivabilità-e-continuità|4,1|analisi-1/limiti#5',
    'regole-di-derivazione|2|precorso/potenze-e-radici#1',
    'la-derivata|3|precorso/geometria-analitica#1',
    'massimi-minimi-e-teoremi-del-valore-medio,conseguenze-del-teorema-di-lagrange|5|precorso/equazioni-polinomiali#5',
    'la-formula-di-taylor|8|analisi-1/derivate#1',
    'il-teorema-di-de-lhôpital|6,7|analisi-1/limiti#3',
  ],
  'analisi-1/studio-di-funzione': [
    'lo-schema-dello-studio|1|analisi-1/insiemi#4',
    'lo-schema-dello-studio|1,3|analisi-1/limiti#6',
    'monotonia-e-punti-stazionari|3,4|analisi-1/derivate#3',
    'massimi-e-minimi-relativi,criteri-per-la-natura-dei-punti-stazionari|1|analisi-1/derivate#3',
    'massimi-e-minimi-assoluti|7|',
    'funzioni-convesse-e-concave,punti-di-flesso|6|analisi-1/derivate#1',
    'tabella-dei-segni-e-grafico-qualitativo||analisi-1/limiti#7',
    'lo-schema-dello-studio|8,2|analisi-1/derivate#0',
  ],
  'analisi-1/integrali': [
    'la-tabella-degli-integrali-elementari,primitive-e-integrale-indefinito|1|analisi-1/derivate#1',
    'integrazione-per-parti|2|analisi-1/derivate#1',
    'integrazione-per-sostituzione|3,5|analisi-1/derivate#1',
    'integrali-di-funzioni-razionali|4|precorso/polinomi#2',
    'lintegrale-definito-secondo-riemann,aree-tra-curve|6,8|analisi-1/integrali#0',
    'funzione-integrale-e-teorema-fondamentale-del-calcolo|7|analisi-1/derivate#1',
    'proprietà-dellintegrale-e-teorema-della-media||',
  ],
  'analisi-1/integrali-impropri': [
    'integrale-su-un-intervallo-illimitato|1|analisi-1/integrali#0',
    'integrale-di-una-funzione-illimitata|2|analisi-1/integrali#0',
    'integrali-campione,confronto-asintotico|3,4|analisi-1/limiti#4',
    'criterio-del-confronto,convergenza-assoluta|8|',
    'ordine-di-infinitesimo-e-di-infinito-dellintegranda|5,6|analisi-1/integrali-impropri#2',
    'più-punti-critici|7|analisi-1/integrali-impropri#2',
  ],
  'analisi-1/serie': [
    'serie-di-riferimento|1|precorso/potenze-e-radici#0',
    'serie-somme-parziali-e-carattere|2|',
    'serie-somme-parziali-e-carattere,la-condizione-necessaria||analisi-1/limiti#1',
    'serie-a-termini-non-negativi|3|analisi-1/limiti#4',
    'serie-a-termini-non-negativi|4,5|analisi-1/limiti#1',
    'serie-a-segno-variabile|6|',
    'serie-di-potenze|8|analisi-1/serie#4',
  ],
  'analisi-1/equazioni-differenziali': [
    'equazioni-a-variabili-separabili|1,2|analisi-1/integrali#0',
    'equazioni-differenziali-e-problema-di-cauchy,esistenza-e-unicità-locale|2|',
    'equazioni-lineari-del-primo-ordine|3,4|analisi-1/integrali#1',
    'equazioni-di-bernoulli|5|analisi-1/equazioni-differenziali#2',
    'secondo-ordine-a-coefficienti-costanti-equazioni-omogenee|6|precorso/equazioni-polinomiali#1',
    'equazioni-non-omogenee-il-metodo-di-somiglianza|7|analisi-1/equazioni-differenziali#4',
  ],
  'analisi-2/funzioni-di-piu-variabili': [
    'lo-spazio-ℝⁿ,punti-e-insiemi-del-piano|8,1|precorso/geometria-analitica#0,precorso/geometria-analitica#5',
    'funzioni-di-due-e-più-variabili|1|analisi-1/insiemi#4,precorso/geometria-analitica#5',
    'curve-e-superfici-di-livello,funzioni-di-due-e-più-variabili|2|precorso/geometria-analitica#5,precorso/geometria-analitica#6',
    'limiti-in-due-variabili|3|analisi-1/limiti#0,precorso/logica#5',
    'calcolo-dei-limiti-confronto-e-coordinate-polari|5,4|precorso/valore-assoluto#0,precorso/goniometriche#2',
    'calcolo-dei-limiti-confronto-e-coordinate-polari|4,7|analisi-1/limiti#3,analisi-1/limiti#4',
    'continuità|6,7|analisi-1/limiti#5,analisi-1/studio-di-funzione#7',
    'il-teorema-di-weierstrass||analisi-1/limiti#7,analisi-1/studio-di-funzione#4',
  ],
  'analisi-2/calcolo-differenziale': [
    'derivate-parziali-e-gradiente|1|analisi-1/derivate#1',
    'differenziabilità,il-teorema-del-differenziale-totale|2|analisi-2/funzioni-di-piu-variabili#4,analisi-2/funzioni-di-piu-variabili#6',
    'piano-tangente,differenziabilità|4|analisi-1/derivate#2',
    'derivate-direzionali-e-formula-del-gradiente|3|analisi-2/funzioni-di-piu-variabili#0',
    'regola-della-catena|5|analisi-1/derivate#1',
    'derivate-seconde-e-matrice-hessiana|6|analisi-1/derivate#1',
    'formula-di-taylor-al-secondo-ordine|7|analisi-1/derivate#4',
  ],
  'analisi-2/funzioni-implicite': [
    'il-teorema-di-dini,il-problema|4|analisi-2/calcolo-differenziale#0,precorso/logica#3',
    'il-teorema-di-dini|1|analisi-2/calcolo-differenziale#0,analisi-1/derivate#1',
    'derivate-successive-della-funzione-implicita|3|analisi-2/calcolo-differenziale#4,analisi-1/studio-di-funzione#3',
    'retta-tangente-a-una-curva-di-livello|2|analisi-2/calcolo-differenziale#0,precorso/geometria-analitica#1',
    'il-teorema-di-dini-in-tre-variabili|5|analisi-2/calcolo-differenziale#0',
    'il-teorema-di-dini-in-tre-variabili|5|analisi-2/calcolo-differenziale#2',
    'sistemi-di-equazioni-e-matrice-jacobiana||analisi-2/calcolo-differenziale#4',
  ],
  'analisi-2/massimi-e-minimi': [
    'massimi-e-minimi-liberi,punti-critici-e-teorema-di-fermat|1|analisi-2/calcolo-differenziale#0,analisi-1/studio-di-funzione#3',
    'la-matrice-hessiana-e-la-classificazione-dei-punti-critici|1,2|analisi-2/calcolo-differenziale#5',
    'il-caso-degenere-studio-diretto-del-segno|3|analisi-2/funzioni-di-piu-variabili#3,precorso/equazioni-polinomiali#5',
    'estremi-assoluti-su-insiemi-compatti|4,5|analisi-2/funzioni-di-piu-variabili#7,analisi-1/studio-di-funzione#4',
    'estremi-vincolati-i-moltiplicatori-di-lagrange|6|analisi-2/calcolo-differenziale#0',
    'due-vincoli-in-tre-variabili,estremi-vincolati-i-moltiplicatori-di-lagrange|6|analisi-2/calcolo-differenziale#0',
    'problemi-geometrici-di-ottimizzazione|7|analisi-1/studio-di-funzione#4,precorso/geometria-analitica#0',
  ],
  'analisi-2/curve-e-integrali-di-linea': [
    'curve-parametriche,curve-regolari-e-vettore-tangente|1|analisi-1/derivate#1,precorso/geometria-analitica#5',
    'curve-regolari-e-vettore-tangente|2,1|analisi-1/derivate#1,precorso/geometria-analitica#1',
    'lunghezza-di-una-curva|3|analisi-1/integrali#0,precorso/goniometriche#1',
    'ascissa-curvilinea||analisi-1/integrali#5',
    'integrali-di-linea-di-prima-specie|4,7|analisi-1/integrali#0,analisi-1/integrali#2',
    'integrali-di-linea-di-prima-specie|5|analisi-2/curve-e-integrali-di-linea#4,analisi-1/integrali#0',
    'integrali-di-linea-di-seconda-specie|6,7|analisi-1/integrali#0,precorso/goniometriche#1',
    'orientazione-e-segno-degli-integrali,curve-equivalenti-e-orientazione|6|analisi-1/integrali#6',
  ],
  'analisi-2/campi-vettoriali': [
    'lavoro-e-circuitazione|3|analisi-2/curve-e-integrali-di-linea#6,analisi-1/integrali#0',
    'campi-conservativi-e-potenziale,indipendenza-dal-cammino|2,7|analisi-2/calcolo-differenziale#0',
    'campi-irrotazionali|1|analisi-2/calcolo-differenziale#0,precorso/logica#3',
    'domini-semplicemente-connessi,campi-irrotazionali|4|precorso/logica#3',
    'costruzione-del-potenziale|1,7|analisi-1/integrali#0,analisi-2/calcolo-differenziale#0',
    'il-teorema-di-green|5|analisi-2/integrali-doppi-e-tripli#1,analisi-2/curve-e-integrali-di-linea#7',
    'aree-con-la-formula-di-green|6|analisi-2/curve-e-integrali-di-linea#7,precorso/goniometriche#1',
  ],
  'analisi-2/integrali-doppi-e-tripli': [
    'lintegrale-doppio-su-rettangoli|1|analisi-1/integrali#0,analisi-1/integrali#4',
    'domini-normali-e-formule-di-riduzione|2,3|precorso/geometria-analitica#1,precorso/equazioni-polinomiali#3',
    'proprietà-dellintegrale-doppio,simmetrie||analisi-1/insiemi#5,analisi-1/integrali#6',
    'cambiamento-di-variabili|4|precorso/geometria-analitica#5,analisi-2/funzioni-di-piu-variabili#4',
    'cambiamento-di-variabili|5|analisi-2/calcolo-differenziale#0,precorso/geometria-analitica#6',
    'integrali-tripli|6|analisi-2/integrali-doppi-e-tripli#1,precorso/geometria-analitica#5',
    'coordinate-cilindriche-e-sferiche|7|precorso/goniometriche#1,analisi-1/integrali#2',
    'applicazioni-aree-volumi-masse-e-baricentri|8|analisi-1/integrali#4',
  ],
  'analisi-2/superfici-e-flussi': [
    'superfici-parametriche,vettore-normale-e-piano-tangente|1|analisi-2/calcolo-differenziale#0,analisi-2/curve-e-integrali-di-linea#1',
    'vettore-normale-e-piano-tangente|1|analisi-2/calcolo-differenziale#2,analisi-2/calcolo-differenziale#0',
    'area-di-una-superficie|2,3|analisi-2/integrali-doppi-e-tripli#3,analisi-1/integrali#0',
    'integrali-di-superficie-di-funzioni-scalari|4|analisi-2/integrali-doppi-e-tripli#3,analisi-1/integrali#0',
    'superfici-orientate-e-flusso|6|analisi-2/integrali-doppi-e-tripli#3',
    'divergenza-e-rotore|5|analisi-2/calcolo-differenziale#0',
    'il-teorema-della-divergenza|7|analisi-2/integrali-doppi-e-tripli#6',
    'il-teorema-di-stokes|8|analisi-2/curve-e-integrali-di-linea#6,analisi-2/campi-vettoriali#5',
  ],
  'analisi-2/successioni-e-serie-di-funzioni': [
    'successioni-di-funzioni-e-convergenza-puntuale|1|analisi-1/limiti#3,analisi-1/limiti#1',
    'convergenza-uniforme|2|analisi-1/studio-di-funzione#4,analisi-1/derivate#1',
    'convergenza-uniforme,continuità-del-limite-uniforme|3|analisi-1/insiemi#1,analisi-1/limiti#5',
    'passaggio-al-limite-sotto-il-segno-di-integrale,continuità-integrazione-e-derivazione-termine-a-termine|5,7|analisi-1/integrali#4,analisi-1/integrali#0',
    'derivazione-per-successioni,continuità-integrazione-e-derivazione-termine-a-termine|7|analisi-1/derivate#1',
    'serie-di-funzioni|6|analisi-1/serie#4,analisi-1/serie#0',
    'serie-di-funzioni|4,6|analisi-1/serie#3,analisi-1/studio-di-funzione#4',
  ],
  'analisi-2/serie-di-potenze': [
    'serie-di-potenze-e-raggio-di-convergenza,calcolo-del-raggio|1,2|analisi-1/serie#4,analisi-1/limiti#1',
    'calcolo-del-raggio|4|precorso/irrazionali#1,analisi-1/serie#0',
    'comportamento-agli-estremi|3,1|analisi-1/serie#5,analisi-1/serie#3',
    'derivazione-e-integrazione-termine-a-termine,convergenza-totale-e-continuità-della-somma|6|analisi-1/serie#0,analisi-2/successioni-e-serie-di-funzioni#4',
    'serie-di-taylor|7|analisi-1/derivate#4,analisi-1/derivate#1',
    'sviluppi-di-maclaurin-notevoli,nuovi-sviluppi-da-quelli-noti|5|analisi-1/derivate#4,analisi-1/serie#0',
    'applicazioni|8|analisi-1/serie#0,analisi-1/limiti#4',
  ],
  'analisi-2/serie-di-fourier': [
    'funzioni-periodiche-e-polinomi-trigonometrici,coefficienti-e-serie-di-fourier|2|precorso/goniometriche#1',
    'ortogonalità-del-sistema-trigonometrico||precorso/goniometriche#1,analisi-1/integrali#4',
    'coefficienti-e-serie-di-fourier|1,3|analisi-1/integrali#1,analisi-1/integrali#4',
    'funzioni-pari-e-funzioni-dispari|2,1|analisi-1/insiemi#5,analisi-1/integrali#1',
    'convergenza-puntuale|4|analisi-1/limiti#5',
    'convergenza-uniforme,convergenza-puntuale|3|analisi-2/successioni-e-serie-di-funzioni#6,analisi-1/studio-di-funzione#7',
    'luguaglianza-di-parseval|5|analisi-1/integrali#4',
    'periodo-generico,funzioni-periodiche-e-polinomi-trigonometrici|6|precorso/goniometriche#2,analisi-1/integrali#2',
  ],
  'precorso/logica': ['proposizioni,connettivi-logici||', 'connettivi-logici|1|', 'implicazione|3|', 'condizione-necessaria-e-sufficiente|2|', 'quantificatori|1|', 'tecniche-di-dimostrazione|4|'],
  'precorso/potenze-e-radici': ['proprietà-delle-potenze|1|', 'potenze-a-esponente-razionale-e-reale|1|', 'radici-n-esime|2|', 'razionalizzazione|3|', 'confronto-tra-potenze-e-tra-radici|4|', 'radici-n-esime|2|'],
  'precorso/polinomi': ['prodotti-notevoli|1|', 'polinomi-e-grado||', 'divisione-tra-polinomi|2|', 'teorema-del-resto-e-teorema-di-ruffini,la-regola-di-ruffini|3|', 'strategia-di-fattorizzazione|1|', 'strategia-di-fattorizzazione|5|', 'radici-razionali|4|'],
  'precorso/equazioni-polinomiali': ['equazioni-di-primo-grado||', 'equazioni-di-secondo-grado|1|', 'equazioni-di-grado-superiore|2|', 'disequazioni-di-primo-grado,sistemi-di-disequazioni|6|', 'disequazioni-di-secondo-grado|3|', 'disequazioni-di-grado-superiore|4|', 'equazioni-fratte,disequazioni-fratte|7,5|'],
  'precorso/valore-assoluto': ['definizione-e-significato-geometrico,proprietà||', 'lequazione-a--k|1|', 'lequazione-a--b-1|2|', 'lequazione-a--b|1|', 'le-disequazioni-a--k-e-a--k,le-disequazioni-a--k-e-a--k-1|3,4|', 'disequazioni-con-espressione-al-secondo-membro|4|', 'due-valori-assoluti-lo-studio-per-zone|5|'],
  'precorso/irrazionali': ['condizioni-di-esistenza||', 'condizioni-di-esistenza||', 'lequazione-a--b|1|', 'lequazione-con-due-radici|2|', 'la-disequazione-a--b|3|', 'la-disequazione-a--b-1|4|', 'condizioni-di-esistenza||', 'radici-di-indice-dispari|5|'],
  'precorso/esponenziali': ['le-regole-delle-potenze||', 'la-funzione-esponenziale||', 'equazioni-con-la-stessa-base|1|', 'equazioni-risolte-con-il-logaritmo|2|', 'equazioni-con-sostituzione|3|', 'disequazioni-esponenziali|4|', 'disequazioni-con-sostituzione|5|'],
  'precorso/logaritmiche': ['il-logaritmo||', 'le-proprietà-dei-logaritmi||', 'la-funzione-logaritmica,condizioni-di-esistenza||', 'equazioni-logaritmiche|2|', 'equazioni-logaritmiche|3,1|', 'equazioni-con-sostituzione|3|', 'disequazioni-logaritmiche|4,5|'],
  'precorso/goniometriche': ['la-circonferenza-goniometrica||', 'le-identità||', 'i-grafici-di-seno-e-coseno||', 'equazioni-elementari|1|', 'equazioni-riconducibili-a-elementari|2|', 'equazioni-di-secondo-grado-in-seno-o-coseno|3|', 'equazioni-omogenee-e-lineari|4|', 'disequazioni-elementari|5|'],
  'precorso/geometria-analitica': ['il-piano-cartesiano||', 'la-retta|1|', 'la-retta|1|', 'la-retta||', 'la-parabola|2|', 'la-circonferenza|3|', 'lellisse|4|', 'liperbole|4|'],
};
