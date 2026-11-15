# Flusso dell’informazione — revisione e verifica

## Perimetro e materiale

Revisione del 15 novembre 2026, limitata al capitolo `flusso-informazione` di Biologia del Semestre Filtro. In italiano e inglese sono presenti, per lingua, 1 teoria, 10 schede con 20 esercizi svolti, 14 tracce con soluzione ragionata e 90 domande a tempo. Totale: 230 file Markdown, oltre a 12 SVG originali, sei per lingua. Identificativi, 11 ancore esistenti e gratuità delle schede 1–3 conservati.

La teoria contiene otto sezioni, circa 2.900 parole italiane e 2.800 inglesi. Copre l’unità 3 del syllabus MUR 2026/27: replicazione e complesso d’inizio, forcelle e correzione, telomeri, geni e regioni regolative, operone lac, trascrizione eucariotica e terminazione, maturazione e turnover degli RNA, RNA interference, traduzione e proteostasi. Sono esplicitate le distinzioni tra filamento stampo e codificante, cis e trans, esone e regione codificante, cap e poli-A, miRNA e taglio endonucleolitico, sintesi e rimozione delle proteine. Le ipotesi dei modelli semplificati sono dichiarate.

Gli svolti richiedono orientamento delle sequenze, conteggi di filamenti e molecole, tempi di replicazione, interpretazione di mutanti regolativi, lunghezze di RNA e proteine, decadimento, cornici di lettura e diagnosi del passaggio molecolare alterato. Le spiegazioni seguono il risultato e illustrano i passaggi. Gli esercizi hanno circa 139–202 parole italiane ciascuno, con le differenze motivate dal procedimento.

La banca di quiz è stata riscritta con enunciati autonomi. I distrattori della prima stesura troppo lontani dal concetto sono stati sostituiti con confusioni tra funzioni enzimatiche, direzioni, livelli di regolazione o passaggi del medesimo processo. Le domande 1–14 corrispondono alle tracce da fare. Le posizioni corrette sono distribuite 23/23/22/22 in entrambe le lingue. La varietà comprende riconoscimento di meccanismi, dati sperimentali, previsioni su mutanti, calcoli e limiti delle inferenze; il mero controllo dei duplicati testuali non sostituisce la valutazione didattica indipendente.

## Fonti consultate per il controllo scientifico

- [MUR, Syllabus Biologia 2026/27](https://www.mur.gov.it/sites/default/files/2026-06/Syllabus_BIOLOGIA_%20finale%202026.pdf), unità 3 letta nel testo estratto dal documento ufficiale.
- [NCBI Bookshelf, DNA Replication Mechanisms](https://www.ncbi.nlm.nih.gov/books/NBK26850/), direzioni, primer, frammenti e ligasi; contenuto consultato tramite indicizzazione, poiché l’apertura diretta presentava un controllo di accesso.
- [OpenStax, Prokaryotic Gene Regulation](https://openstax.org/books/biology-2e/pages/16-2-prokaryotic-gene-regulation), controlli distinti LacI/allolattosio e CAP-cAMP; mantenuta la distinzione fra repressione e livello basale.
- [Regulation of replication origin licensing by ORC phosphorylation](https://pmc.ncbi.nlm.nih.gov/articles/PMC10629557/), separazione fra caricamento MCM e attivazione.
- [DNA-directed termination of mammalian RNA polymerase II](https://pubmed.ncbi.nlm.nih.gov/39496457/), legame fra taglio del trascritto, XRN2 e terminazione.
- [Aminoacyl-tRNA synthetases](https://pubmed.ncbi.nlm.nih.gov/32303649/), riconoscimento e controlli del caricamento.
- [Pre-mRNA splicing and its co-transcriptional connections](https://pmc.ncbi.nlm.nih.gov/articles/PMC10524715/), coordinamento trascrizione–maturazione.

Testi, quesiti e diagrammi sono originali; le fonti sono usate per il controllo dei meccanismi, non come esercizi copiati.

## Controlli dell’autore

- Parser YAML e renderer Markdown del sito su tutti i 230 file; blocchi, conteggi, quattro opzioni uniche, indici, ancore, percorsi delle immagini e gratuità controllati.
- KaTeX con errore bloccante su 116 occorrenze di formule. Formule e valori funzionali confrontati integralmente fra IT e EN.
- Ricalcolo in Python di complementarità e orientamento, marcatura semiconservativa, distanze e tempi, conteggi di esoni/codoni/amminoacidi, dimezzamenti, cornici di lettura e costo del modello di allungamento.
- Tutti i 12 SVG renderizzati a 390 e 1.040 pixel. Ispezionati tutti a larghezza telefono; il diagramma del ribosoma è stato anche riesaminato a larghezza maggiore dopo l’allineamento dei cinque residui con lo svolto. Nessuna sovrapposizione o etichetta tagliata osservata nei render ispezionati.
- Rilettura dell’autore delle coppie italiane e inglesi, inclusi titoli e testi delle figure. Non costituisce verifica indipendente.

## Passaggio dall’autore al verificatore

L’autore ha affidato la revisione scientifica e didattica a un verificatore distinto. Il controllo delle pagine nel layout reale e la build Astro restano di competenza del coordinatore. L’autore non ha eseguito una build concorrente né pubblicato modifiche.


## Verifica indipendente completata — 15 novembre 2026

Autore: `bio_flusso`. Verificatore distinto: `bio_organizzazione`. La verifica ha riguardato l’intero capitolo: entrambe le teorie, tutti i 20 esercizi svolti e le 14 tracce confrontati fra italiano e inglese, tutti i 90 quiz con quattro alternative e spiegazione in entrambe le lingue, e tutti i 12 SVG. Non è stata limitata a un campione o ai soli conteggi.

### Programma e correttezza scientifica

La copertura è stata confrontata con l’intera unità 3 del syllabus MUR 2026/27. Sono presenti replicazione procariotica ed eucariotica, origini e complesso di inizio, forcella, attività enzimatiche e proofreading, telomeri e senescenza; anatomia dei geni e controllo cis/trans; operone lac; livelli di regolazione dell’espressione; polimerasi I/II/III, fattori generali e specifici, TATA, enhancer/silencer e recettori steroidei; maturazione, editing, stabilità e RNA interference; rRNA/tRNA; codice genetico, traduzione, UTR e fattori delle tre fasi; ripiegamento, chaperon, ubiquitina, proteasoma e proteine simili all’ubiquitina.

Controllati specificamente antiparallelismo e direzioni 5′/3′, distinzione stampo/codificante, replicazione semiconservativa, attività di telomerasi, doppio controllo lattosio/glucosio, ripartizione dei prodotti fra RNA polimerasi, cap e poli-A non confusi con splicing, eccezioni alla universalità del codice, costo energetico limitato alle ipotesi dichiarate, trasferimento della catena P → A prima della traslocazione e distinzione fra quantità, sintesi, degradazione e attività proteica. Le risposte corrette restano uniche nelle condizioni dichiarate.

### Correzioni effettive del verificatore

- Nella teoria la corrispondenza fra filamento codificante e RNA è riferita allo stesso tratto del **trascritto primario**, evitando di estenderla impropriamente al messaggero dopo splicing o editing.
- In quiz e traccia 6, l’uso di U anziché T è limitato all’alfabeto convenzionale dell’esercizio: non si afferma più che ogni tRNA maturo sia privo di ribotimidina o altre basi modificate.
- In quiz e traccia 12 è esplicito che la E3 considerata marca il substrato per la degradazione proteasomiale. Si evita di attribuire lo stesso destino a ogni ubiquitinazione.
- Il quiz 81 è diventato un’interpretazione di dati: frazioni residue differenti in intervalli uguali non sono compatibili con l’emivita costante proposta. Non ripete più il mero calcolo del quiz 7 cambiando numeri e molecola.
- Sono stati migliorati distrattori o formulazioni nei quiz 12, 15, 17, 21, 36, 38, 42, 52, 57, 59, 60, 62, 63, 76, 79, 82, 84, 85, 86, 87 e 88. Eliminati suggerimenti che dichiaravano un’alternativa incompatibile con l’enunciato e varie alternative fuori dal processo studiato, fra cui riparazione del DNA da parte del lattosio, degradazione proteasomica di un esone e catalisi peptidica della coda poli-A. Nel quiz 87 tutte le alternative esprimono ora ipotesi sul livello alterato.
- Le spiegazioni dei quiz 15 e 83 sono allineate alle alternative finali. Nel quiz 87 l’abbondanza rilevata non viene usata come misura della velocità attuale di sintesi.
- Nei due SVG della replicazione semiconservativa, le due molecole interamente leggere sono chiamate «leggere/light», evitando l’ambiguo «nuove/new».

Tutte le correzioni sono state applicate nelle due lingue. Non sono stati cambiati gli ID, le 11 ancore, i dati degli esercizi svolti o gli accessi gratuiti 1–3.

### Risposte corrette e controlli riproducibili

Su richiesta del coordinatore è stato rimosso il vecchio ciclo prevedibile 1–2–3–4 delle risposte: rimescolamento deterministico con seed `2026111503`, mantenendo esattamente 23/23/22/22 risposte nelle quattro posizioni. Ogni quesito usa la stessa permutazione in italiano e inglese; durante questo passaggio il testo di tutte le opzioni e il contenuto della risposta corretta sono stati conservati con asserzioni. Le spiegazioni non rimandano a lettere o posizioni delle alternative. Il registro delle 90 permutazioni e delle risposte prima/dopo è in `verifica-indipendente-rimescolamento.json` nella cartella QA del capitolo.

Ricalcolati indipendentemente 35 risultati e trasformazioni: complementi e sequenze inverse, conteggio di molecole e filamenti marcati, tempi con una o due origini, esoni/introni/UTR/codoni, emivite e stato stazionario, inserzione e nuova cornice, legami peptidici e GTP del modello, confronto fra fattori di decadimento. Tutti superati; risultati e impronte dei 230 sorgenti finali registrati in `verifica-indipendente-calcoli.json`.

Il comando finale `node strumenti/verifica-semestre-filtro-bilingue.mjs biologia-semestre-filtro flusso-informazione` ha reso **230 file e 118 formule**, con **0 errori e 0 avvisi**. Per lingua: 1 teoria, 10 schede con 20 esercizi, 14 tracce, 90 quiz e 6 figure nella teoria. Conteggio del validatore: 2.983 parole teoriche IT e 2.870 EN; mediana degli svolti 187 parole IT e 181 EN.

Tutti i 12 SVG finali sono stati renderizzati nuovamente con Sharp a **390 e 1.040 px** e ispezionati visivamente in entrambe le versioni. Controllati etichette, estremità e frecce della forcella, conservazione dei filamenti marcati, quattro condizioni lac, prodotti dello splicing, cinque residui nel sito P più il sesto nel sito A e percorso di proteostasi. Nessun testo tagliato o sovrapposto osservato nei render finali. La geometria dei diagrammi è identica nelle due lingue.

### Fonti aggiuntive del verificatore e limite del controllo

- [Identification of a novel gene encoding a flavin-dependent tRNA:m5U methyltransferase in bacteria](https://pmc.ncbi.nlm.nih.gov/articles/PMC1178002/): ricerca originale, verificata tramite testo indicizzato, per la ribotimidina presente nei tRNA e la correzione della generalizzazione U/T.
- [Substrate Ubiquitination Controls the Unfolding Ability of the Proteasome](https://pmc.ncbi.nlm.nih.gov/articles/PMC5000099/): ricerca originale, abstract e testo indicizzato consultati, per la dipendenza del destino dalla struttura del segnale ubiquitina e il requisito esplicitato nel quesito sulla E3.
- [NCBI Bookshelf, From DNA to RNA](https://www.ncbi.nlm.nih.gov/books/NBK26887/): controllo della complementarità fra DNA stampo e RNA e della distinzione dal filamento codificante.

Nessun problema scientifico o tecnico bloccante rimasto aperto nel perimetro verificato. Questa verifica comprende i contenuti e i render SVG, non certifica il layout delle pagine Astro nel browser. Build, controllo del layout reale e pubblicazione sono svolti separatamente dal coordinatore. Non sono stati rieseguiti gli script generativi dell’autore, né effettuati commit o pubblicazioni dal verificatore.
