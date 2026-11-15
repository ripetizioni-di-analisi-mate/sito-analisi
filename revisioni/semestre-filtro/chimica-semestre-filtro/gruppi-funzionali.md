# Gruppi funzionali — autore e verifica indipendente

Autore: `bio_strutture`. Data: 15 novembre 2026. **Scrittura e controlli dell'autore conclusi; verifica indipendente successivamente completata da `bio_organizzazione`, come documentato nella sezione finale.** Nessuna build, commit o pubblicazione eseguita dagli agenti di capitolo.

## Materiale consegnato

Per ciascuna lingua: una teoria, 10 schede da due esercizi, 14 tracce con soluzione ragionata e 90 quiz. Totale: 230 Markdown, 20 esercizi svolti per lingua e 20 SVG originali, corrispondenti a 10 figure tradotte. Ogni scheda, comprese le tre gratuite, contiene una figura pertinente. `gratis: true` resta limitato alle schede 1–3.

Teoria riorganizzata in 10 sezioni, preservando tutte le 17 ancore originarie. Il validatore conta 3494 parole italiane e 3500 inglesi, incluse notazioni e didascalie. Le immagini effettive nella teoria sono 10 per lingua; il conteggio generico di elementi SVG del validatore include anche la grafica di una formula KaTeX. Non sono presenti blocchi `percorso`.

La traduzione comprende tutto il materiale, le didascalie, i testi alternativi e le etichette SVG. Identificativi, dati, sequenze delle formule, riferimenti, permutazione delle opzioni e risposta corretta sono allineati. Le 90 chiavi hanno distribuzione 23/23/22/22, seed `chimica/gruppi-funzionali/2026-11-15/v1`, serie consecutiva massima di tre chiavi uguali e nessun periodo ripetuto da uno a otto. La mediana delle spiegazioni dei quiz è di 49 parole IT e 48 EN; quella degli esercizi è rispettivamente 229 e 222 parole.

## Copertura del programma

Confrontata l'intera unità 6 del programma MUR di Chimica e propedeutica biochimica fornito nel workspace. La teoria collega struttura, nomenclatura, proprietà, condizioni sperimentali e meccanismi, senza ridursi a un elenco di gruppi funzionali.

- Alcoli, fenoli, tioli, eteri e tioeteri: classificazione, legami idrogeno, solubilità, acidità e basi coniugate; etanolo, glicerolo, ossidrili degli amminoacidi, cisteina e metionina; ossidazione, disidratazione, sostituzione e disolfuri. Apertura degli epossidi con distinzione fra condizioni basiche e acide.
- Ammine: struttura, nomi, basicità e nucleofilicità, anilina e risonanza ammidica, sali, alchilazione ripetuta, ammonio quaternario e colina. Formazione delle N-nitrosammine e significato dell'attivazione metabolica, senza generalizzare il comportamento a ogni composto.
- Aldeidi e chetoni: geometria, proprietà, ossidazione/riduzione, addizione nucleofila e idratazione. Emiacetali, emichetali, acetali, chetali, protezione del carbonile, emiacetale ciclico del glucosio, immine/basi di Schiff ed enammine.
- Idrogeni alfa, enolati e tautomeria distinta dalla risonanza; esempi di citosina, urato e fosfoenolpiruvato. Addizione e condensazione aldolica, mappa del nuovo legame C–C, donatore e accettore. Chinoni/idrochinoni, bilanci redox, ubichinone e semichinoni.
- Acidi carbossilici e derivati: nomenclatura, acidità, salificazione, anidridi, esteri, tioesteri, ammidi e acilfosfati; acetil-CoA, legame peptidico e 1,3-bisfosfoglicerato. Sostituzione acilica, Fischer, idrolisi acida e basica, transesterificazione, Claisen di esteri e tioesteri, lattoni e decarbossilazione dei chetoacidi.

## Precisioni e correzioni effettuate

Le reazioni riportano le condizioni che determinano il risultato: ossidazione anidra a un'aldeide rispetto alla prosecuzione in acqua; disponibilità di idrogeni alfa o beta; sequenza attacco/protonazione; equilibrio degli acetali e delle immine; acqua come reagente o prodotto; forma protonata o deprotonata dopo l'idrolisi. La regioselettività acida degli epossidi non è presentata come regola universale del carbonio più sostituito.

La Claisen classica specifica il ruolo della deprotonazione del beta-dicarbonile, la necessità di almeno due H alfa sul donatore in questa via, l'impiego dell'alcossido corrispondente all'estere e il trattamento acido finale. La base non viene chiamata semplicemente catalitica. Il collegamento con i tioesteri biologici distingue l'accoppiamento termodinamico dall'accelerazione enzimatica: l'enzima non modifica la costante di equilibrio.

La saponificazione consuma idrossido e dà carbossilato; la sua acidificazione è un passaggio successivo. La deprotonazione dell'acido urico è distinta dalla tautomeria. La coppia chinone/idrochinone scambia elettroni e protoni e non è una coppia di tautomeri. Il conteggio del lattone comprende l'ossigeno dell'anello, mentre quello carbonilico è esterno. La decarbossilazione termica del beta-chetoacido è distinta da quella ossidativa enzimatica del piruvato.

Tutti i 90 quiz sono stati letti uno a uno in entrambe le lingue. Una rifinitura specifica ha sostituito alternative deboli in 25 quesiti con errori plausibili dello stesso argomento, aggiornando le spiegazioni interessate. Sono stati eliminati un carattere cirillico accidentale e un riferimento non autonomo all'esempio precedente. Non sono state generate serie che cambiano soltanto i numeri.

Le figure mostrano strutture e reazioni esatte, con cariche e bilanci coerenti. Il controllo visivo ha portato ad aumentare le distanze fra etichette e gruppi nella risonanza ammidica, negli acetali e nei derivati acilici; le frecce di equilibrio sono state orientate lungo le trasformazioni verticali di acetali e chinoni. Tutte le versioni finali sono state riesaminate.

## Fonti di riscontro

- MUR, programma ufficiale di Chimica e propedeutica biochimica, unità 6; PDF ed estratto `qa/chimica-syllabus.txt` forniti dal coordinatore.
- [OpenStax / Rice University, apertura degli epossidi](https://openstax.org/books/organic-chemistry/pages/18-5-reactions-of-epoxides-ring-opening): condizioni, regioselettività e attacco posteriore.
- [OpenStax / Rice University, condensazione di Claisen](https://openstax.org/books/organic-chemistry/pages/23-7-the-claisen-condensation-reaction): enolato, deprotonazione del prodotto e trattamento finale.
- [OpenStax / Rice University, tioesteri e acilfosfati](https://openstax.org/books/organic-chemistry/pages/21-8-chemistry-of-thioesters-and-acyl-phosphates-biological-carboxylic-acid-derivatives): strutture e trasferimenti acilici di interesse biologico.
- [OpenStax / Rice University, nomenclatura dei derivati carbossilici](https://openstax.org/books/organic-chemistry/pages/21-1-naming-carboxylic-acid-derivatives) e [sintesi delle reazioni del capitolo 21](https://openstax.org/books/organic-chemistry/pages/21-summary): classificazione e reattività.
- [OpenStax / Rice University, glicolisi](https://openstax.org/books/organic-chemistry/pages/29-5-catabolism-of-carbohydrates-glycolysis): fosfoenolpiruvato e stabilizzazione del piruvato.
- [IUPAC Gold Book, tautomerism](https://goldbook.iupac.org/terms/view/T06252): definizione consultata nell'estratto indicizzato; l'accesso diretto alla pagina ha restituito un blocco del server.
- [Studio originale sulla N-nitrosazione di ammine secondarie, PubMed](https://pubmed.ncbi.nlm.nih.gov/41099913/): consultato l'abstract indicizzato per il contesto nitrito/ambiente acido; non dichiarata lettura integrale dell'articolo.

Testi, esercizi e disegni sono originali; non sono riproduzioni delle figure delle fonti.

## Controlli effettivamente eseguiti

1. Validatore condiviso `node strumenti/verifica-semestre-filtro-bilingue.mjs chimica-semestre-filtro gruppi-funzionali`, ripetuto dopo l'ultima modifica: 230 Markdown e 370 formule resi tramite il processore del sito; zero errori e zero avvisi. HTML conservato fra le evidenze QA.
2. Confronto delle sequenze matematiche IT/EN: nessuna differenza, normalizzando soltanto le parole tradotte all'interno dei comandi di testo. Controllati anche 17 ancore, 10 sezioni, 10 immagini distinte per teoria, metadati, rimandi e assenza di caratteri cirillici accidentali.
3. Verifica della permutazione e della corrispondenza semantica di ogni risposta corretta con la versione originaria del quesito, in entrambe le lingue; controllo dei testi e delle 14 tracce corrispondenti. Manifesto riproducibile delle chiavi; 748 asserzioni su testi, risposte e permutazioni.
4. Ricalcolati separatamente 35 risultati numerici: rapporti e frazioni acido-base, bilanci di concentrazione, reagente limitante, stechiometria, masse, energia libera ipotetica dichiarata, avanzamenti di equilibrio e resa teorica. Verificati 11 bilanci di atomi e carica, comprese semireazioni redox, condensazioni, idrolisi e decarbossilazione.
5. Tutti i 20 SVG renderizzati e ispezionati visivamente a 390 e 780 px, confrontando IT ed EN. Controllati ordine dei legami, cariche, ossigeni degli anelli, struttura dei chinoni, leggibilità e spaziatura delle etichette.
6. `git diff --check` sul perimetro del capitolo: nessun problema. Script ed evidenze in `qa/chimica-semestre-filtro/gruppi-funzionali/`, esterni ai sorgenti produttivi.

Questi sono i controlli effettuati alla consegna dell'autore. La revisione scientifica successiva è documentata sotto; build e verifica delle pagine complete restano affidate al coordinatore. Non sono stati modificati altri capitoli, cataloghi, prezzi, accessi, codice o strumenti condivisi.

## Verifica indipendente conclusa

Revisore: `bio_organizzazione`, distinto dall'autore. Data: 15 novembre 2026. **Capitolo approvato dopo le correzioni seguenti e congelato per i controlli di pubblicazione del coordinatore.** La revisione ha riguardato integralmente entrambe le teorie, le 10 schede con 20 esercizi per lingua, le 14 tracce e tutti i 90 quiz, confrontando italiano e inglese. Sono stati esaminati anche tutti i 20 SVG finali, renderizzati separatamente a 390 e 1040 px: 40 rese effettivamente viste, con confronto dei due testi.

La copertura è stata confrontata con tutte le voci dell'unità 6 MUR. Sono stati controllati classificazione e nomenclatura, valenze e cariche, origine degli atomi nei prodotti, prerequisiti delle reazioni, conservazione dello scheletro, distribuzione acido-base, differenza fra addizione ed eliminazione, tautomeria e risonanza, chinoni e semichinoni, trasferimenti acilici e biochimici. In particolare risultano corretti la regiochimica condizionata degli epossidi, il requisito dei due H alfa della Claisen classica, il consumo stechiometrico della base, il ruolo del trattamento acido finale, il conteggio dell'ossigeno nei lattoni e la distinzione fra decarbossilazione termica e piruvato deidrogenasi.

### Correzioni realmente apportate

- Le 14 tracce riproducevano letteralmente i primi 14 quiz senza alternative. Sono state sostituite, negli stessi ID e con gli stessi rimandi, da problemi aperti: diolo con due classi alcoliche; deprotonazione selettiva; ossidazioni benziliche; tracciamento degli ossigeni dell'epossido; pKa ricavato da concentrazioni; creazione di stereocentri; idrolisi e bilancio di un acetale; due enoli del pentan-2-one; aldolica incrociata; miscela Q/QH2; ammonolisi di un estere; saponificazione di un diestere; scelta del donatore della Claisen; decarbossilazione con tracciamento del carbonio. Ogni soluzione spiega il percorso e le ipotesi.
- Nei quiz 11, 13, 24, 26, 35, 37, 40, 43, 48, 49, 52, 60, 63, 81, 86 e 88 sono stati migliorati distrattori o formulazione, eliminando diverse alternative estranee al meccanismo o riconoscibili solo per espressioni assolute. Le spiegazioni interessate sono state allineate. Il quiz 43 ora richiede interpretazione di un confronto sperimentale costruito, con controlli espliciti, senza generalizzare a tutte le nitrosammine.
- Tre sovrapposizioni sono state rimosse: il quiz 20 verifica il rapporto fra Ka a partire dai pKa; il 70 segue la chiusura di un'aldolica intramolecolare; l'84 segue l'ossigeno marcato dell'alcol nell'esterificazione di Fischer. I brevi raccordi necessari sono stati aggiunti alla teoria.
- Nel quiz 51 il frammento acetalico è stato completato in `CH(OR)2`, includendo l'H del centro derivato dall'aldeide. Nel quiz 71 «due H e due elettroni» è diventato «due protoni e due elettroni», rendendo esplicito il corretto bilancio di carica.
- Teoria, svolto 3 e quiz 38 precisano che la scarsa basicità dell'azoto ammidico non implica assenza di protonazione: nelle ammidi ordinarie è generalmente favorito O carbonilico in ambiente sufficientemente acido. L'idrolisi acida distingue ammonio da ammine protonate secondo la sostituzione di N.
- Tutti i decimali inglesi usano il punto. Le virgole dei locanti chimici, come `1,2-epoxypropane`, restano correttamente inalterate. Ritoccate alcune concordanze italiane di «aldeide» e alcune frazioni in LaTeX.

Complessivamente la revisione modifica 89 Markdown; i 20 SVG scientificamente corretti sono stati mantenuti. Le correzioni scientifiche o editoriali dei quiz interessano 22 ID in entrambe le lingue; altri cambiamenti riguardano soltanto decimali o concordanze. Non sono stati eseguiti i generatori dell'autore, modificati accessi, spostati ID o alterate le posizioni delle risposte corrette.

### Riscontri indipendenti e risultato finale

1. Ricalcolati **55 risultati numerici** a partire dai dati: rapporti e frazioni acido-base, pKa inverso, bilanci delle concentrazioni, masse, avanzamenti di esterificazione con e senza acqua iniziale, quantità massime della Claisen, bilanci redox e reagenti limitanti mono/diestere. Tutti concordano con le soluzioni e gli arrotondamenti dichiarati.
2. Verificati separatamente **22 bilanci di atomi e carica**, comprese semireazioni, idruri, aldoliche, acetali, immine, ammidi, Claisen, lattoni, decarbossilazioni e nuove tracce. Nessuna incongruenza.
3. Confrontate **115 coppie di sequenze matematiche IT/EN**, normalizzando esclusivamente decimali e parole tradotte in `\text`. Preservate tutte le **17 ancore originali**, 10 sezioni principali per teoria, 10 figure effettive per teoria, 20 esercizi per lingua, disponibilità gratuita dei soli svolti 1–3 e tutti i collegamenti.
4. Letti tutti i quiz e controllati quattro alternative differenti, un'unica risposta valida nelle ipotesi date e corrispondenza semantica IT/EN. Distribuzione finale **23/23/22/22**, serie massima di tre chiavi uguali, nessuna periodicità da uno a otto. Le 14 tracce finali non duplicano più gli enunciati dei quiz.
5. Esaminati tutti i diagrammi a entrambe le larghezze: legami e cariche ammidiche, valenza dei carbonili e degli acetali, scheletro dell'epossido, carboni delle condensazioni, coppia chinone/idrochinone, legame C(=O)–O–P e cinque membri del lattone. Nessuna etichetta tagliata o sovrapposta nelle rese finali.
6. Validatore condiviso rieseguito dopo l'ultima modifica: **230 Markdown, 500 formule, zero errori, zero avvisi**. Teorie finali: 3587 parole IT e 3591 EN secondo il conteggio del validatore. Il conteggio di 11 figure del renderer include una grafica KaTeX: le immagini didattiche esplicite sono 10 per lingua. `git diff --check` sul capitolo senza problemi.

Evidenze del revisore in `qa/chimica-semestre-filtro/gruppi-funzionali/revisore/`: snapshot prima delle correzioni, elenco dei file modificati, lettura dei 90 quiz, ricalcoli e parità, validazione finale, 40 immagini individuali più i confronti affiancati, hash SHA-256 dei 250 file finali Markdown/SVG. Gli script di intervento sono registri della revisione e non devono essere rieseguiti sul capitolo congelato.

### Fonti ricontrollate dal revisore

- Programma ufficiale MUR, unità 6, nel PDF e nell'estratto forniti dal coordinatore.
- [OpenStax / Rice University, apertura degli epossidi](https://openstax.org/books/organic-chemistry/pages/18-5-reactions-of-epoxides-ring-opening), [Claisen](https://openstax.org/books/organic-chemistry/pages/23-7-the-claisen-condensation-reaction) e [tioesteri/acilfosfati](https://openstax.org/books/organic-chemistry/pages/21-8-chemistry-of-thioesters-and-acyl-phosphates-biological-carboxylic-acid-derivatives): ricontrollo delle condizioni e delle strutture.
- [OpenStax / Rice University, esterificazione di Fischer](https://openstax.org/books/organic-chemistry/pages/21-3-reactions-of-carboxylic-acids): meccanismo e tracciamento isotopico dell'ossigeno alcolico.
- [OpenStax / Rice University, aldoliche intramolecolari](https://openstax.org/books/organic-chemistry/pages/23-6-intramolecular-aldol-reactions): chiusura a cinque termini dell'esano-2,5-dione.
- [Roberts e Caserio, *Basic Principles of Organic Chemistry*, sezione sulle ammidi come basi](https://chem.libretexts.org/Bookshelves/Organic_Chemistry/Basic_Principles_of_Organic_Chemistry_(Roberts_and_Caserio)/24%3A_Organonitrogen_Compounds_II_-_Amides_Nitriles_and_Nitro_Compounds/24.02%3A_Amides_as_Acids_and_Bases): protonazione favorita su O; testo universitario degli autori consultato nella raccolta LibreTexts sostenuta da UC Davis.
- [Nouso, Thorgeirsson e Battula, *Cancer Research* 1992, PMID 1551111](https://pubmed.ncbi.nlm.nih.gov/1551111/): abstract dello studio originale NCI sull'attivazione della nitrosodimetilammina e formazione di addotti al DNA. Usato come riscontro del principio, non come origine dei dati o del protocollo del quesito didattico.

Nessun problema scientifico o di parità rimasto aperto nel perimetro esaminato. Restano al coordinatore build e controllo delle pagine complete, comprese navigazione e presentazione nel sito. Questa revisione non costituisce una dichiarazione di pubblicazione già avvenuta.
