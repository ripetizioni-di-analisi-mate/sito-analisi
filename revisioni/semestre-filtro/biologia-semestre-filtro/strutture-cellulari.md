# Strutture cellulari — autore e verifica indipendente

Revisione del 15 novembre 2026. Stato: scrittura, controlli dell'autore e verifica scientifica e linguistica indipendente completati. Restano la verifica nelle pagine Astro complete e la build del coordinatore. Nessuna pubblicazione effettuata.

## Materiale

- 115 Markdown per lingua: una teoria, 10 schede con 20 esercizi, 14 tracce autonome e 90 domande.
- Teoria: 8 sezioni, 2.784 parole italiane e 2.638 inglesi, 12 ancore esistenti conservate.
- 16 SVG originali (8 per lingua): 7 figure distribuite nella teoria e una figura numerica specifica sui motori; figure presenti in 8 schede svolte, comprese tutte le tre gratuite.
- Svolti: ragionamenti, passaggi, controlli e interpretazione di casi sperimentali. Mediana indicativa 197 parole per esercizio IT, 182,5 EN; la differenza riflette la lingua, non omissioni intenzionali.
- Quiz: enunciati autonomi, spiegazioni causali, posizioni corrette 23/23/22/22. Revisione dedicata dei distrattori per usare confusioni tra processi vicini anziché alternative estranee alla biologia cellulare.

## Copertura e scelte

Confrontata l'unità 5 del syllabus MUR 2026/27: membrane, glicocalice, asimmetria, gradienti, osmosi, canali e pompe, potenziale d'azione; topologia dei compartimenti e segnali; nucleo, condensati, Ran e casi NF-κB/SREBP1/recettori steroidei; esportazione mRNA NXF1; energetica, genoma e dinamica mitocondriale; TOM/TIM23/TIM22/SAM/OXA e spazio intermembrana; perossisomi e Zellweger; reticolo, Golgi, SRP, glicosilazione, immunoglobuline, UPR/ERAD e CFTR; COPI/COPII/clatrina, Rab, SNARE, NSF/SNAP e fosfoinositidi; LDL, transferrina, EGF, idrolasi, transcitosi, fagocitosi e autofagia; microtubuli, actina, motori, ciglia, Rho, neutrofili, distrofina, filamenti intermedi e LINC.

Esplicitate le condizioni dei modelli osmotici e del bilancio ATP. Distinti ATP usato per regolare CFTR e flusso passivo degli anioni, importazione Ran-dipendente ed esportazione mRNA, carico protetto da proteasi e localizzazione certa nella matrice, numero di autofagosomi e flusso completato.

## Fonti consultate

- [MUR, Syllabus Biologia 2026/27](https://www.mur.gov.it/sites/default/files/2026-06/Syllabus_BIOLOGIA_%20finale%202026.pdf), unità 5.
- [NCBI Bookshelf, compartimenti e smistamento](https://www.ncbi.nlm.nih.gov/books/NBK26907/).
- [NCBI Bookshelf, trasporto mitocondriale](https://www.ncbi.nlm.nih.gov/books/NBK26828/).
- [NCBI Bookshelf, mitocondrio](https://www.ncbi.nlm.nih.gov/books/NBK26894/).
- [NCBI Bookshelf, perossisomi](https://www.ncbi.nlm.nih.gov/books/NBK26858/), letto tenendo conto dell'età del testo.
- [NCBI Bookshelf, produzione energetica](https://www.ncbi.nlm.nih.gov/books/NBK26882/).
- [UniProt, CFTR P13569](https://www.uniprot.org/uniprotkb/P13569/entry).
- [Ricostituzione sperimentale della fusione di vescicole COPII](https://pubmed.ncbi.nlm.nih.gov/15611329/).
- [Pex3/Pex19 e biogenesi perossisomiale](https://pubmed.ncbi.nlm.nih.gov/30776093/).
- [Condensati nucleari e regolazione dell'espressione](https://pmc.ncbi.nlm.nih.gov/articles/PMC7572565/).

Testi, dati degli esercizi e diagrammi sono originali.

## Controlli dell'autore

- Parser YAML, frontmatter, 12 ancore, conteggi, `gratis` solo 1–3, blocchi di spiegazione e soluzioni: 230 file superati.
- Tutti i 230 corpi resi con il processore Markdown del sito; 144 occorrenze matematiche validate con KaTeX senza errori.
- Formule confrontate esattamente IT/EN; stesse risposte corrette e ordine delle opzioni; opzioni non duplicate e risorse figura esistenti.
- Ricalcolo con frazioni esatte di FRAP, pompe, due casi osmotici, due bilanci ATP, resa relativa del disaccoppiamento, due spostamenti e accorciamento sarcomerico.
- SVG renderizzati a 390 px; ispezione del montaggio completo e delle figure aggiunte/corrette. Render a 780 px e ispezione dei dettagli di topologia, mitocondrio e motori. Corretta una sovrapposizione nell'etichetta dei protoni e sostituito un semplice schema di percorso con un disegno effettivo della topologia luminale.
- Script e immagini di controllo in scratch; nessuna modifica a codice condiviso, altre materie, prezzi o accessi.

I conteggi e i controlli precedenti descrivono la consegna dell'autore. Gli esiti conclusivi dopo la revisione sono riportati sotto.

## Verifica indipendente — bio_genetica

Verificatore diverso dall'autore: `bio_genetica`, 15 novembre 2026. Letti integralmente e confrontati in italiano e inglese tutti i 230 Markdown: teoria, 20 esercizi svolti, 14 tracce e 90 quiz per lingua. Esaminati tutti i 16 SVG. La verifica ha riguardato correttezza scientifica, ipotesi dei modelli, risultati, corrispondenza linguistica, unicità della risposta corretta, plausibilità delle alternative e distinzione degli obiettivi dei quiz.

Confermata la copertura dell'intera unità 5 MUR. Controllati in particolare: CFTR come canale anionico regolato da ATP; esportazione prevalente degli mRNA tramite NXF1-NXT1 distinta dalle esportine Ran-dipendenti; conservazione della topologia luminale; destinazioni TOM/TIM23/TIM22/SAM/OXA; resa 30–32 ATP come stima subordinata al modello; destini differenti di LDL, transferrina ed EGF; flusso autofagico distinto dall'accumulo di strutture; polarità, motori, ciglia e regolatori dell'actina.

### Correzioni effettive

- Esplicitata la non permeabilità dei soluti del bagno esterno nel problema osmotico del quiz 1, nella traccia 1 e nell'esempio teorico. Precisati i controlli FRAP nel quiz e nella traccia 2; dichiarata la grande dimensione del reporter nello svolto 3.
- Corretta la risposta incompleta del quiz 57: l'effetto è la minore consegna di canali CFTR alla membrana plasmatica. Riscritta la parte finale della spiegazione del quiz 27, che attribuiva compartimenti errati alle alternative effettivamente presenti. Rimossa una frase estranea al ragionamento nel quiz 38 e il riferimento a inesistenti alternative nella traccia 7.
- Precisato che PTS1 si trova all'estremità carbossiterminale, non genericamente nelle sue vicinanze. Distinti l'ATPasi NSF e gli adattatori SNAP in teoria e nel quiz 66. Aggiunte le funzioni protettive e di riconoscimento del glicocalice.
- Circoscritto al modello di migrazione su una superficie adesiva il requisito dell'adesione dei neutrofili, in teoria e nel quiz 88; la teoria menziona la minore dipendenza dalle adesioni integriniche in ambienti tridimensionali confinati.
- Revisionate 198 opzioni in 72 quiz per lingua: 194 distrattori e quattro risposte corrette chiarite o riscritte (57, 66, 79, 80). Le alternative ora rappresentano errori su compartimenti, energia, topologia, segnali o fasi del processo pertinente. Rivisti tutti i 90 gruppi di alternative, compresi quelli rimasti invariati.
- Resi distinti i quiz sui motori: il 14 applica la direzione della dineina, il 79 richiede di riconoscere i limiti dell'inferenza dal solo nome «chinesina», l'80 interpreta un esperimento sulla stabilizzazione dei microtubuli da parte delle MAP. Corrette anche le due figure del citoscheletro con «molte chinesine / many kinesins», evitando una generalizzazione a tutta la famiglia.
- Rimescolate le opzioni dei 90 quiz con seed fisso `2026111505`, usando la stessa permutazione nelle due lingue. Distribuzione 23/23/22/22, senza cicli ripetuti di periodo 1–8. Controllati il mantenimento delle risposte e dei testi durante la permutazione e l'assenza di riferimenti a lettere o posizioni nelle spiegazioni.
- Uniformata la notazione numerica inglese con il punto decimale e tradotte le etichette testuali delle formule. La corrispondenza matematica resta esatta dopo la normalizzazione della notazione e delle etichette.

### Esito dei controlli conclusivi

- **23 ricalcoli con frazioni esatte:** FRAP 75% mobile e 25% non recuperato; pompa 3.600 Na⁺, 2.400 K⁺, 1.200 ATP e 1.200 cariche nette; altro quesito sulla pompa 100 cariche; fattore osmotico 1,5 e secondo volume 0,6 pL con −25%; bilanci 32 e 30 ATP; rapporti ATP/ossigeno 5 e 1 con resa relativa 20%; posizioni 5 e 11 μm entro il binario; accorciamento sarcomerico 0,5 μm, pari al 20%.
- **Verificatore del sito:** `node strumenti/verifica-semestre-filtro-bilingue.mjs biologia-semestre-filtro strutture-cellulari` completato con 230 file resi, 144 occorrenze matematiche, zero errori e zero avvisi. Conservate le 12 ancore; riferimenti, accessi, figure e parità strutturale IT/EN validi.
- Teoria conclusiva: 8 sezioni, 7 figure, 2.915 parole IT e 2.796 EN secondo il contatore del verificatore. Mediane delle spiegazioni quiz: 43 parole IT e 39 EN. Mediane degli esercizi completi: 210 IT e 201 EN.
- **Figure:** rigenerati i 32 PNG dai 16 SVG correnti a 390 e 780 px; ispezionato il montaggio completo a 390 px e i dettagli desktop di topologia, protoni, trasporti e citoscheletro. Nessun taglio o sovrapposizione riscontrato; direzioni, orientamenti e dati numerici coerenti con i testi.
- Dati, snapshot iniziale, permutazioni, ricalcoli, HTML e immagini della verifica sono conservati in `qa/biologia-semestre-filtro/strutture-cellulari/independent-review/` nello spazio di lavoro. Nessun commit, build o pubblicazione eseguito dal verificatore.

### Fonti aggiuntive per i punti critici

- [NSF, αSNAP e disassemblaggio delle SNARE, studio sperimentale](https://pubmed.ncbi.nlm.nih.gov/25492864/): distingue l'ATPasi NSF dall'adattatore.
- [Riconoscimento di PTS1 da parte di PEX5, studio strutturale](https://pubmed.ncbi.nlm.nih.gov/11101887/): posizione carbossiterminale del segnale.
- [NXF1 e trasporto nucleare, studio sperimentale](https://pmc.ncbi.nlm.nih.gov/articles/PMC3226482/): separa l'esportazione di mRNA mediata da NXF1 dal ciclo delle carioferine.
- [Confinamento e migrazione dei neutrofili, studio sperimentale](https://pubmed.ncbi.nlm.nih.gov/25525264/): distingue la migrazione adesiva bidimensionale da quella confinata meno dipendente dalle integrine.

Esito della verifica indipendente: **superata dopo le correzioni indicate**. Le pagine Astro complete e la build restano al coordinatore.
