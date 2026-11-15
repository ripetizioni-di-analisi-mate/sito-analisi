# Soluzioni e proprietà colligative — rapporto d’autore

Autore: `bio_flusso`. Revisione del 15 novembre 2026. **Scrittura e controlli dell’autore completati; verifica indipendente di `bio_strutture` conclusa e documentata nella sezione finale.** Nessuna build, commit o pubblicazione eseguita dall’autore.

## Materiale consegnato

Per ciascuna lingua: una teoria, 10 schede con due esercizi ciascuna, 14 tracce autonome con soluzione ragionata e 90 domande a tempo; totale 230 Markdown. Inglese completo, con gli stessi identificativi, ancore, dati, formule, ordine delle alternative e indici corretti. Le chiavi YAML restano in italiano; `gratis: true` rimane limitato alle schede 1–3.

La teoria conserva le 19 ancore e il contenuto scientificamente valido iniziale, riorganizzati in nove sezioni principali. Il conteggio del validatore è di 3.730 parole italiane e 3.368 inglesi, incluse componenti matematiche e didascalie; il conteggio per token separati da spazi nei soli corpi è rispettivamente 3.246 e 2.856. La diversa lunghezza non deriva dalla rimozione di argomenti nella traduzione.

Presenti nove figure originali per lingua, per un totale di 18 SVG: otto nella teoria e una figura dedicata alle percentuali negli svolti. Sette schede per lingua usano una figura pertinente, comprese tutte le tre gratuite. I disegni trattano fasi e dispersioni, conteggio delle particelle, denominatori delle concentrazioni, diluizione, Henry, Raoult, osmosi, tonicità e percentuali.

I 20 esercizi per lingua comprendono classificazione e interpretazione oltre ai calcoli. Le spiegazioni hanno mediana di 215 parole IT e 189 EN secondo il validatore. I quiz alternano calcolo, confronto, lettura delle ipotesi, errori di metodo e interpretazioni fisiche; la mediana delle spiegazioni è 50 parole IT e 44 EN. Le chiavi hanno distribuzione 23/23/22/22 e permutazione identica fra le lingue, generata con seed fisso `2026111503`, senza ciclo 1234.

## Copertura del programma e precisioni scientifiche

Confrontata integralmente l’unità 2 del syllabus MUR 2026/27 fornito nel workspace (`qa/chimica-syllabus.txt`, estratto dal PDF ufficiale). Sono trattati miscele omogenee ed eterogenee, soluzioni nei tre stati, colloidi e aerosol; acqua polare, solvatazione, solubilità, elettroliti e fluidi biologici; concentrazioni percentuali, molarità, molalità, frazione molare, diluizioni e mescolamenti; attività e affollamento intracellulare; equivalenti in ambito biomedico; gas disciolti, Henry e Dalton, aria inspirata ed espirata; Raoult e volatilità, crioscopia ed ebullioscopia; fattore di van’t Hoff, diffusione e osmosi; osmolarità, osmolalità, tonicità, fisiologica e glucosata, emolisi ed edema.

- Henry usa esplicitamente `c = k_H p`, con unità e temperatura dichiarate; è distinta dalla convenzione reciproca. Si usa la pressione parziale e si distingue gas fisicamente disciolto da legame all’emoglobina o trasformazioni della CO₂.
- L’attività è adimensionale e riferita a uno stato standard. Il coefficiente di attività e la concentrazione non sono intercambiabili; sono precisati il riferimento convenzionale delle attività di singolo ione e il significato delle attività ioniche medie.
- Il numero di equivalenti per mole dipende dal processo. Distinti equivalenti di carica, protoni effettivamente trasferiti e variazione redox, evitando la confusione con il fattore di equivalenza IUPAC reciproco.
- Nei bilanci si distinguono solvente e soluzione, volume misurato e volumi additivi, quantità totale e frazione disciolta, concentrazione e numero di particelle.
- Raoult distingue soluto non volatile e miscela di due volatili; le formule colligative dichiarano idealità, dissociazione, pressione esterna e cristallizzazione del solvente puro quando pertinenti.
- La pressione osmotica è definita rispetto ai lati di una membrana; l’equilibrio può comprendere un contributo idrostatico. I casi cellulari precisano permeabilità, tempi, grande serbatoio e altre ipotesi necessarie. L’urea isoosmotica permeante non è trattata come necessariamente isotonica; per il glucosio si distingue la misura iniziale dall’effetto persistente dopo trasporto e metabolismo.

## Correzioni effettuate durante i controlli

Conservati e ampliati i primi 14 quesiti numerici validi, sostituiti i successivi modelli ripetitivi con 76 quesiti distinti. La lettura finale di tutti i 90 quiz IT/EN ha portato a un’ulteriore rifinitura di 27 quesiti: rimossi distrattori estranei o palesemente impossibili, sostituiti con confusioni vicine al concetto verificato; adattate le spiegazioni interessate. Precisati idealità nel quesito sulla distribuzione del soluto permeante e permeabilità all’acqua positiva nel quesito sull’equilibrio osmotico.

Negli svolti è stata corretta una relazione dimensionalmente impropria della percentuale massa-volume: ora si calcola prima la massa contenuta in 100 mL e solo dopo si interpreta la percentuale. Le formule nelle due lingue sono state rese esattamente identiche usando simboli comuni per soluto, solvente e soluzione. Nei disegni sono state separate le etichette della tonicità, aggiunta l’indicazione dei recipienti non in scala nella diluizione e allontanata una particella dalla freccia dell’acqua nell’osmosi.

## Fonti scientifiche consultate

- MUR, syllabus ufficiale di Chimica e propedeutica biochimica 2026/27, unità 2, PDF ed estratto testuale forniti dal coordinatore.
- [IUPAC Gold Book, Henry’s law](https://goldbook.iupac.org/terms/view/H02783), [costante di solubilità c/p](https://goldbook.iupac.org/terms/view/09024) e [raccomandazioni sulle costanti di Henry](https://iupac.org/recommendation/henrys-law-constants/): convenzioni reciproche e regime di applicabilità.
- [NIST/IUPAC Solubility Data Series](https://srdata.nist.gov/solubility/intro.aspx): significato delle misure e condizioni della solubilità dei gas.
- [IUPAC Gold Book, attività](https://goldbook.iupac.org/terms/view/A00115) e [coefficiente di attività](https://goldbook.iupac.org/terms/view/A00116): stato standard e descrizione non ideale.
- [IUPAC Gold Book, entità equivalente](https://goldbook.iupac.org/terms/view/E02192) e [Compendium of Analytical Nomenclature, cap. 6.3](https://old.iupac.org/publications/analytical_compendium/Cha06sec3.pdf): equivalenti riferiti a protoni, elettroni o cariche e distinzione dal fattore di equivalenza.
- [IUPAC Gold Book, pressione osmotica](https://goldbook.iupac.org/terms/view/O04344): pressione necessaria a impedire il trasferimento di solvente e relazione con l’attività.
- [Measuring osmosis and hemolysis of red blood cells](https://journals.physiology.org/doi/full/10.1152/advan.00083.2016): riscontro sperimentale didattico sulla permeabilità e sull’urea; consultati estratti indicizzati, non dichiarata lettura integrale del testo bloccato dal server.
- [NCBI Bookshelf, Biochemistry, Hypertonicity](https://www.ncbi.nlm.nih.gov/books/NBK541095/): riscontro istituzionale delle distinzioni fra osmolarità, osmoli efficaci e tonicità. I casi restano esercizi su modelli dichiarati, senza indicazioni terapeutiche.

## Verifiche realmente eseguite e limiti

1. Validatore ufficiale `node strumenti/verifica-semestre-filtro-bilingue.mjs chimica-semestre-filtro soluzioni-proprieta-colligative`: 230 file, 1.406 formule, zero errori e zero avvisi.
2. Controllo aggiuntivo con il processore Markdown del sito e KaTeX: tutti i 230 corpi resi senza errori; YAML, 19 ancore, rimandi, blocchi soluzione/spiegazione, risorse immagine e conteggi verificati. Confronto esatto di tutte le sequenze di formule e dei metadati funzionali IT/EN.
3. Ricalcoli separati dai testi di 65 risultati aritmetici: concentrazioni, diluizioni, Henry e Dalton, equivalenti, attività, Raoult, proprietà colligative, pressioni osmotiche, diffusione e volumi cellulari. Controllati unità, segni e arrotondamenti nei testi.
4. Lettura uno a uno dei 90 quiz in entrambe le lingue, confronto di tutti i distrattori e delle spiegazioni; verifica automatica di quattro alternative distinte e della corrispondenza semantica delle 90 chiavi fra le lingue. Le 14 tracce hanno soluzione ragionata coerente con i dati originari.
5. Tutti i 18 SVG analizzati come XML, renderizzati e ispezionati a 390 e 1.040 px; ripetuta l’ispezione delle figure modificate. Nessuna etichetta sovrapposta rimasta nelle figure ispezionate.
6. `git diff --check` sul perimetro del capitolo: nessun problema. Evidenze e script riproducibili in `qa/chimica-semestre-filtro/soluzioni-proprieta-colligative/`, esterni ai sorgenti produttivi.

I controlli descritti fin qui sono quelli dell’autore. La verifica indipendente e le relative correzioni sono documentate di seguito; restano al coordinatore la build e la verifica delle pagine complete. Nessuna modifica a Biologia, altre materie o capitoli, cataloghi, accessi o codice condiviso.


## Verifica indipendente — bio_strutture, 15 novembre 2026

**Esito: capitolo verificato e stabile.** Sono stati letti integralmente tutti i 230 Markdown nelle due lingue: entrambe le teorie, i 20 esercizi per lingua, le 14 tracce per lingua e tutti i 90 quiz con le rispettive traduzioni. Per ogni quiz sono stati valutati ipotesi, unicità della risposta vera, distrattori e spiegazione. Non è stata necessaria la sostituzione di alcun risultato numerico o indice corretto.

Il confronto con l’intera unità 2 del programma MUR conferma la copertura. La verifica delle ancore contro `qa/prossime-baseline.json` conserva tutti i 19 identificativi originari. I modelli di Henry, Raoult, crioscopia, osmosi e diffusione sono stati controllati distinguendo condizioni ideali, concentrazioni e attività, particelle e cariche, solvente e soluzione, pressione parziale e totale, effetto transitorio e tonicità persistente.

### Correzioni scientifiche, linguistiche e grafiche

- Quesito e traccia 9: corretta la spiegazione del distrattore di Henry. Dividere la costante c/p per la pressione non rappresenta una diversa convenzione lecita: dà unità errate. La vera convenzione reciproca usa la costante p/c.
- Quesito e traccia 11: rese esplicite assenza di dissociazione e associazione del soluto, necessarie per usare direttamente le moli assegnate nel conteggio di Raoult. Nel quesito 46 sono state precisate le grandezze invarianti nell’aggiunta del gas inerte, evitando di dichiarare invariata l’intera fase gassosa mentre ne cambia la composizione. Nel quesito 50 è stata esplicitata l’idealità di Dalton.
- Teoria e svolto 10: esplicitati modello ideale, condizioni termiche e permeabilità all’acqua quando si deduce il verso del flusso dal confronto delle concentrazioni. Svolto 8: dichiarata l’assenza di associazione per il fattore unitario del non elettrolita. Svolto 7: la composizione del vapore è ora confrontata con il liquido all’equilibrio, evitando l’ambiguo riferimento alla composizione iniziale.
- Quesito 18: sostituito un distrattore troppo debole con una confusione plausibile fra densità dei componenti puri e numero di fasi; aggiornate entrambe le spiegazioni. Le altre alternative sono rimaste coerenti con la risposta unica verificata.
- Reintegrate nelle versioni inglesi alcune precisazioni italiane: sedimentazione e classificazione, controllo della massa, contrazione/espansione, distinzione fra conservazione e additività, equivalenti redox, errori di unità e temperatura, particelle dell’urea e condizioni esterne/meccaniche. Allineate anche le poche precisazioni presenti soltanto in inglese e corretto un testo alternativo italiano.
- Su richiesta del coordinatore, normalizzati **572 separatori decimali in 56 Markdown inglesi**: punto al posto della virgola. I valori sono identici; le versioni italiane non sono state modificate da questa normalizzazione. Verificati i testi dei nove SVG inglesi, già con punto decimale.
- Corrette quattro coppie di figure: unità mol al numeratore dei confronti molarità/molalità; unità atm sugli assi di Henry; spostamento di H₂O fuori dalla linea della membrana; cariche ioniche tutte in apice. Le 18 figure finali sono state renderizzate e ispezionate a 390 e 1.040 px, incluse le nuove rese delle figure modificate. Non sono rimaste sovrapposizioni nelle versioni ispezionate.

Le precisazioni testuali interessano 35 Markdown; includendo la normalizzazione decimale risultano modificati 73 Markdown e 8 SVG. Identificativi, accessi gratuiti e struttura del capitolo sono conservati.

### Ricalcoli e controlli conclusivi

Il revisore ha ricostruito separatamente dai programmi dell’autore **111 controlli su risultati intermedi/finali e conteggi**: percentuali, moli, concentrazioni e conversioni; diluizioni e miscelazioni; equivalenti e attività; Henry e Dalton; Raoult e composizione del vapore; crioscopia/ebullioscopia; fattore di particelle, osmolarità/osmolalità, pressioni e volume cellulare; segno e dimensioni del flusso di Fick; conteggi e cariche delle figure. Sono stati verificati arrotondamenti e denominatori. Tutti i controlli sono passati.

Il controllo aggiuntivo verifica la corrispondenza semantica di tutte le **1.406 formule** IT/EN, normalizzando soltanto il separatore decimale. Le **180 risposte corrette** (90 per lingua) mantengono lo stesso testo e significato prima/dopo le modifiche, fatta salva la medesima normalizzazione. Distribuzione confermata 23/23/22/22 e nessun ciclo ripetuto con periodo da uno a otto. Tutti i 18 SVG sono XML valido; geometria e disposizione degli elementi coincidono fra le lingue.

Validatore finale eseguito dopo tutte le correzioni:

`node strumenti/verifica-semestre-filtro-bilingue.mjs chimica-semestre-filtro soluzioni-proprieta-colligative`

Esito: **230 file, 1.406 formule, zero errori, zero avvisi**. Conteggio finale del validatore: teoria 3.739 parole IT e 3.378 EN, nove sezioni, otto figure in teoria per lingua; 10 schede e 20 esercizi, 14 tracce, 90 quiz per lingua. `git diff --check` sul perimetro del capitolo non segnala problemi. Gli HTML sono stati prodotti con il processore Markdown del sito; la build completa e l’ispezione delle pagine integrate restano al coordinatore.

Riscontri autonomi del revisore: [IUPAC, costante di Henry c/p](https://goldbook.iupac.org/terms/view/09024), [IUPAC, costanti reciproche di Henry](https://goldbook.iupac.org/terms/view/09020) e [IUPAC, pressione osmotica](https://goldbook.iupac.org/terms/view/O04344), oltre al programma MUR fornito. Il controllo usa le definizioni termodinamiche e dimensionali; la terminologia osmolarità/osmolalità resta quella richiesta dal syllabus.

Evidenze riproducibili in `qa/chimica-semestre-filtro/soluzioni-proprieta-colligative/reviewer-bio_strutture/`: inventario iniziale con hash, copie anteriori dei file corretti, registro delle modifiche, ricalcoli, confronto di parità, rese PNG e HTML, esito del validatore. Nessuna modifica ad altri capitoli durante questa revisione, né build, commit o pubblicazione.
