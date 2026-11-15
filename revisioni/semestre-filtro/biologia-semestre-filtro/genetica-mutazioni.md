# Genetica e mutazioni — rapporto dell’autore e verifica indipendente

Revisione del 15 novembre 2026. Stato: scrittura, controlli dell’autore e revisione indipendente completa conclusi. Build complessiva e controllo delle pagine complete demandati al coordinatore.

## Materiali

- 1 teoria per lingua, 8 sezioni, circa 2.555 parole italiane e 2.468 inglesi nel corpo; tutte le 10 ancore originarie conservate.
- 10 schede per lingua, 2 esercizi ciascuna: 20 casi svolti con ragionamento esplicito, mediana italiana circa 190 parole per esercizio. Anteprima gratuita mantenuta nelle sole schede 1–3.
- 14 tracce con soluzione ragionata per lingua, corrispondenti ai primi 14 quiz.
- 90 quiz per lingua, riprogettati con casi, dati, inferenze e ipotesi esplicite; distribuzione delle risposte corrette 23/23/22/22. Passaggio editoriale su tutti i distrattori, sostituendo quelli estranei con errori sullo stesso concetto.
- 7 diagrammi originali, ciascuno in italiano e inglese: cornice di lettura, riparazione, quadrato di Punnett, epistasi, fase cromosomica, imprinting, pedigree. 7 immagini nella teoria e 7 richiami pertinenti negli svolti per lingua.

## Copertura e scelte

Coperta l’unità 4 del syllabus MUR 2026/27: varianti e riparazione, alleli e fase cis/trans, eterozigosi composta, Mendel e probabilità condizionate, dominanza incompleta/codominanza/AB0, pleiotropia/epistasi, associazione completa e incompleta, mappe fisiche e genetiche, penetranza/espressività/poligenici, imprinting, cariotipo/aneuploidie/poliploidie/riarrangiamenti, eredità autosomica/X/Y/mitocondriale.

Distinte lesione e mutazione stabile, cornice conservata e funzione conservata, probabilità per gravidanza e probabilità condizionata al sesso, numero di cromosomi e quantità di DNA. I pedigree dichiarano penetranza, assenza di nuove mutazioni e altre ipotesi pertinenti. Le mappe a tre loci mostrano perché i doppi scambi modificano la distanza cumulata rispetto alla ricombinazione tra marcatori esterni. Nessuna probabilità didattica è presentata come stima clinica individuale.

## Fonti consultate

- MUR, syllabus Biologia 2026/27, unità 4: https://www.mur.gov.it/sites/default/files/2026-06/Syllabus_BIOLOGIA_%20finale%202026.pdf (testo integrale fornito dal coordinatore).
- OpenStax, Biology 2e, Chromosomal Theory and Genetic Linkage: https://openstax.org/books/biology-2e/pages/13-1-chromosomal-theory-and-genetic-linkage
- OpenStax, Biology 2e, Laws of Inheritance: https://openstax.org/books/biology-2e/pages/12-3-laws-of-inheritance
- NCBI Bookshelf, DNA Repair: https://www.ncbi.nlm.nih.gov/books/NBK26879/ (verifica mirata attraverso il testo indicizzato; apertura diretta soggetta a controllo del sito).
- GeneReviews, Resources for Genetics Professionals: https://www.ncbi.nlm.nih.gov/books/NBK535150/ (imprinting e origine parentale, verifica mirata del testo indicizzato).
- GeneReviews Glossary: https://www.ncbi.nlm.nih.gov/books/NBK5191/ (eteroplasmia, aploinsufficienza e terminologia).

Testo, problemi, dati e diagrammi sono originali; le fonti sono state usate per controllare concetti e limiti dei modelli.

## Controlli realmente eseguiti

- Parser YAML e renderer Markdown del sito su tutti i 230 file; 536 formule rese con KaTeX senza errori; conteggi, gratuità, ancore, collegamenti interni, blocchi e riferimenti alle immagini controllati.
- Parità IT–EN di chiavi funzionali, ID, ancore, opzioni, risposta corretta, struttura dei blocchi e formule (esclusi i testi tradotti nelle formule).
- 36 ricalcoli esatti con frazioni razionali e enumerazione di gameti/genotipi: incroci semplici e a due loci, probabilità condizionate/binomiali, AB0, epistasi, linkage a due/tre loci, penetranza, trasmissione X, eterozigosi composta e cornici di lettura.
- 14 SVG renderizzati a 390 e 900 px. Tutti ispezionati nel foglio di contatto a 390 px; controllati anche i PNG desktop di pedigree e cornice. Nessun testo tagliato o sovrapposto osservato.
- Nessuna modifica a prezzi, catalogo, codice condiviso, Matematica Semestre Filtro o altri capitoli.

I controlli precedenti sono quelli dell’autore. La revisione indipendente è documentata di seguito. La build Astro e la verifica del layout delle pagine complete sono demandate al coordinatore; il revisore non ha eseguito build, commit o pubblicazione.


## Verifica indipendente — bio_strutture, 15 novembre 2026

Letti integralmente e confrontati tutti i 230 file, cioè entrambe le versioni di teoria, 20 esercizi svolti, 14 tracce e 90 quiz. Confrontata la copertura con il testo integrale dell’unità 4 del syllabus MUR 2026/27. Verificati per ciascun quiz il significato delle quattro opzioni, l’unicità della risposta nel modello dichiarato e la coerenza della spiegazione; lette tutte le traduzioni, comprese opzioni, didascalie, alternative testuali e testi nelle formule.

Correzioni effettuate in italiano e inglese:

- Quiz 51: corretta la formulazione italiana del complemento della penetranza; i 50 individui senza manifestazione sono il 25%, complementare al 75%. Inglese allineato alla formulazione esplicita.
- Quiz 39: eliminata l’inferenza non giustificata che il 75% dei concepiti sopravviva. La sopravvivenza uguale di Aa e aa conserva il rapporto 2:1; il risultato condizionato ai nati vivi rimane 2/3.
- Quiz 48: esplicitato il doppio eterozigote AB/ab, necessario a riconoscere geneticamente due cromatidi ricombinanti dopo il singolo scambio.
- Quiz 87: esplicitato che l’esone di 90 nucleotidi appartiene interamente alla regione tradotta, rendendo univoca la perdita di 30 amminoacidi.
- Teoria e scheda svolta 8: precisato che i conteggi di 46/92 molecole riguardano il DNA nucleare.
- Quiz 4, 27 e 86 e traccia 4: sostituito «gene recessivo» con la relazione corretta tra gene e carattere recessivo.
- Quiz 38, 49 e 59: riallineate le spiegazioni alle alternative effettive, eliminando riferimenti residui a cromosomi aggiuntivi, al falso gamete AA e alle inversioni che non erano tra le opzioni.
- Quiz 50 e 55: sostituito un distrattore ridondante per ciascuno con un errore distinto e pertinente, rispettivamente sulla fase rispetto alla distanza genetica e sul mantenimento dell’imprinting dopo la fecondazione; spiegazioni aggiornate.

Controlli indipendenti effettivamente conclusi:

- 77 controlli numerici, di sequenza o di enumerazione eseguiti con frazioni esatte: incroci a uno e più loci, AB0, eventi binomiali, probabilità condizionate, epistasi, letalità con più valori di sopravvivenza comune, testcross, mappe a tre loci, doppi scambi, penetranza, trasmissione X, eterozigosi composta, non-disgiunzione e cornici di lettura. I risultati concordano con il materiale corretto.
- Parità delle 115 coppie IT/EN e delle 536 occorrenze di formule, ignorando nel confronto soltanto le parole tradotte in `\text{}`. Controllo manuale del significato dei testi tradotti.
- Validatore condiviso `strumenti/verifica-semestre-filtro-bilingue.mjs biologia-semestre-filtro genetica-mutazioni`: 230 file resi con il renderer del sito, nessun errore e nessun avviso; 90 quiz per lingua, distribuzione 23/23/22/22, 20 esercizi per lingua. Gratuità delle schede 1–3, ancore, riferimenti alle figure, collegamenti inglesi e direttive verificati.
- 14 SVG originali riletti e confrontati fra lingue, renderizzati nuovamente a 390 e 780 px: tutte le 28 rese ispezionate visivamente. Confermati proporzioni 9:3:4 dell’epistasi, gameti 40/40/10/10, quadrato di Punnett, pedigree, cornice e origine parentale; nessuna correzione ai diagrammi necessaria.
- Con il conteggio uniforme del validatore: teoria 2.675 parole IT e 2.608 EN; mediana per esercizio svolto 206 IT e 197 EN. La differenza dai valori dell’autore deriva dal criterio di conteggio, non da materiali mancanti.

Controllati in particolare i limiti del modello: 50% come limite della frequenza attesa di ricombinazione, approssimazione cM per intervalli brevi, doppi ricombinanti conteggiati in entrambi gli intervalli, recupero delle classi senza distorsioni, penetranza e assenza di nuove mutazioni nei pedigree, indipendenza nei calcoli multilocus, origine parentale ristabilita nella linea germinale e distinzione tra eredità mitocondriale e legata all’X/Y.

Riscontri supplementari del revisore:

- Kong et al., ricerca originale sulla variabilità delle frequenze di ricombinazione lungo il genoma: https://pubmed.ncbi.nlm.nih.gov/12053178/
- Sato et al., ricerca originale sulla cancellazione dell’imprinting nelle cellule germinali primordiali: https://pubmed.ncbi.nlm.nih.gov/12658632/
- NHGRI, definizione istituzionale del centimorgan: https://www.genome.gov/genetics-glossary/Centimorgan-cM
- Jackson Laboratory, distinzione tra associazione, fase, distanze e saturazione della ricombinazione: https://www.informatics.jax.org/silverbook/chapters/7-2.shtml

Esito della revisione indipendente: contenuti, risposte, dati e traduzione idonei all’integrazione. Restano al coordinatore la build complessiva e la verifica del layout delle pagine complete.


## Controllo finale delle posizioni — bio_strutture, 15 novembre 2026

Eliminata la sequenza ciclica 1–2–3–4 delle chiavi. Le opzioni di tutti i 90 quiz sono state permutate con seed fisso `genetica-mutazioni/2026-11-15/v1`, applicando esattamente la stessa permutazione alle due lingue e mantenendo il bilancio 23/23/22/22.

Verificata programmaticamente, prima della scrittura e dopo la rilettura dei 180 file, l’identità testuale della risposta semanticamente corretta e di tutte le opzioni; enunciati e spiegazioni sono rimasti identici. Controllate tutte le spiegazioni: nessun rinvio a lettere o posizioni delle opzioni. Nuova esecuzione del validatore condiviso superata: 230 file, 536 formule, zero errori e zero avvisi; parità IT/EN e controllo degli spazi nel diff superati. L’audit conserva seed, permutazioni e impronte dei file prima e dopo l’intervento.
