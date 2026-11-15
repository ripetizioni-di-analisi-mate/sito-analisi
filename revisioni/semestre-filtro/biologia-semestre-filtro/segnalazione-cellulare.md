# Segnalazione cellulare — rapporto dell’autore

Revisione del 15 novembre 2026. Ambito: `segnalazione-cellulare` di Biologia Semestre Filtro, italiano e inglese.

## Contenuti

- 1 teoria per lingua, 8 sezioni, tutte le 12 ancore originarie conservate. Circa 2.500 parole italiane contando intestazioni e direttive; scrittura originale con meccanismi, esempi e interpretazione di esperimenti.
- 10 schede per lingua, con 20 esercizi ragionati: confronto di campioni, controlli sperimentali, recupero di una via dopo blocco, bilanci, frazioni recettoriali e traffico di GLUT4. Le prime 3 schede conservano l’accesso gratuito.
- 14 tracce per lingua con soluzione motivata, associate alle prime 14 domande.
- 90 domande per lingua, 4 opzioni, distribuzione delle risposte corrette 23/23/22/22. Eliminati gli enunciati generici costruiti sostituendo soltanto il nome del componente. Casi su compartimenti, perturbazioni, ordine dei passaggi, dati quantitativi e limiti delle inferenze.
- 8 figure originali per lingua (16 SVG), presenti nella teoria e riutilizzate dove pertinenti in 8 esercizi svolti. Etichette e testi alternativi tradotti.

## Copertura del programma

Unità 6 del syllabus MUR 2026/27 letta integralmente: matrice, degradazione, fibronectina, integrine e meccanotrasduzione; caderine/CAM e giunzioni; modalità di segnalazione; recettori intracellulari, NO/cGMP e recettori-canale; proteine G monomeriche/eterotrimeriche, GEF/GAP; messaggeri e amplificazione; desensitizzazione e visione; EGF, Ras-MAPK, proto-oncogeni; insulina, IRS, PI3K, PIP3, Akt, PTEN e GLUT4.

## Fonti di verifica

- MUR, [Syllabus Biologia 2026/27](https://www.mur.gov.it/sites/default/files/2026-06/Syllabus_BIOLOGIA_%20finale%202026.pdf), unità 6: PDF ufficiale scaricato e testo integrale letto.
- Alberts et al., *Molecular Biology of the Cell*, [Integrins](https://www.ncbi.nlm.nih.gov/books/NBK26867/): collegamenti con actina e filamenti intermedi.
- [Integrins: An Overview of Structural and Functional Aspects](https://www.ncbi.nlm.nih.gov/books/NBK6259/): talina, vinculina e organizzazione delle adesioni.
- Purves et al., *Neuroscience*, [Phototransduction](https://www.ncbi.nlm.nih.gov/books/NBK10806/): segno della risposta, canali cGMP e glutammato.
- *Webvision*, [Phototransduction in Rods and Cones](https://www.ncbi.nlm.nih.gov/books/NBK52768/): cascata e canali CNG.
- [Protein Regulation in Signal Transduction](https://pmc.ncbi.nlm.nih.gov/articles/PMC4888820/): GEF, GAP, Gα e Gβγ.
- *Endotext*, [The Insulin Receptor and Its Signal Transduction Network](https://www.ncbi.nlm.nih.gov/books/NBK378978/): IRS, PI3K, Akt e fosfatasi dei fosfoinositidi.
- [PTEN and the tumor suppressor balancing act](https://www.ncbi.nlm.nih.gov/books/NBK2321/): reazione PIP3/PIP2 e distinzione da IP3.

Per le pagine NCBI l’apertura diretta restituiva CAPTCHA; i passaggi citati sono stati verificati negli estratti estesi indicizzati delle fonti stesse. Non sono stati copiati esercizi o spiegazioni. I dati numerici degli esercizi sono modelli didattici dichiarati, non osservazioni cliniche.

## Controlli dell’autore eseguiti

- Rendering dei 230 Markdown con il processore Astro e i plugin effettivi del sito; nessun errore KaTeX.
- 138 occorrenze di formule controllate con KaTeX in modalità `throwOnError`.
- YAML, conteggi 115 file per lingua, 12 ancore, collegamenti alle figure, struttura delle 20 spiegazioni per lingua, flag gratuito e blocchi soluzione controllati.
- Parità IT/EN di ID, ancore, indice corretto, ordine delle opzioni, valori funzionali e formule; differiscono solo i testi tradotti nelle formule.
- Nessun enunciato esattamente duplicato e nessuna coppia di opzioni identiche nello stesso quiz. Varietà dei ragionamenti riesaminata dall’autore; il controllo semantico indipendente resta distinto.
- Ricalcoli quantitativi con aritmetica razionale Python: riduzioni relative, occupazione recettoriale, spegnimento discreto, amplificazione, bilancio del cAMP, ritorno del calcio, potenziali e redistribuzione di GLUT4.
- Tutti i 16 SVG resi a larghezza 390 px e guardati: etichette leggibili, nessun taglio o sovrapposizione. La verifica della pagina completa nella build e a larghezza desktop spetta al coordinatore.

## Stato al termine della stesura dell’autore

Questo primo resoconto documenta i controlli dell’autore. Al termine della stesura restavano la revisione scientifica e linguistica da parte di un altro agente, la build della materia e la verifica delle pagine complete; la sezione seguente registra la successiva verifica indipendente. Nessuna pubblicazione effettuata. Nessuna modifica a Matematica, prezzi, cataloghi o codice condiviso.

## Verifica indipendente — 15 novembre 2026

Revisore: **bio_genoma**, distinto dall’autore **bio_segnalazione**. È stato letto il contenuto effettivo di tutti i 230 Markdown: teoria, 20 esercizi svolti, 14 tracce e tutti i 90 quiz in italiano, con confronto integrale della corrispondente versione inglese. La revisione non si limita al rapporto dell’autore o al controllo dei conteggi.

### Difetti riscontrati e corretti

Il difetto principale era la scarsa plausibilità di numerose alternative: componenti della matrice descritti come enzimi di altre vie, scomparsa del DNA, GLUT4 nei capsidi e altri abbinamenti facilmente eliminabili senza conoscere il meccanismo. Sono stati riesaminati e riscritti i distrattori di **84 domande per lingua**, sostituendo effettivamente **231 testi di alternative errate in italiano e 232 in inglese**. Gli errori ora riguardano compartimenti, ruoli dei componenti, ordine dei passaggi, segno della risposta, misure sperimentali o interpretazione quantitativa. Le spiegazioni discutono questi errori e sono stati eliminati i riferimenti alle vecchie alternative estranee. Le riprese dello stesso principio, per esempio idrolisi del GTP in Gα e Ras, richiedono di trasferire il ragionamento fra i due sistemi.

Nessun indice della risposta corretta è stato spostato; la distribuzione resta **23/23/22/22**. Gli enunciati originali dei 90 quiz sono conservati. Nella domanda 57 la risposta corretta ora precisa che riconoscimento del ligando e poro appartengono allo stesso **complesso recettoriale**, evitando di identificare necessariamente il canale multimerico con una sola proteina. Le 14 tracce sono state riallineate alle risposte e spiegazioni aggiornate.

È stato corretto il difetto di rendering segnalato dal coordinatore nelle domande **13 e 25**, entrambe le lingue: una voce come `- 400.` veniva interpretata come lista numerata annidata e perdeva il valore visibile. Tutte le 16 alternative numeriche di questi quattro file ora usano formule, per esempio `- $400$.`. Una ricerca su tutti i quiz non trova altri casi di questo tipo.

La teoria è stata precisata in quattro punti: collegamento Gαq–PLCβ; isomerizzazione 11-cis → tutto-trans del retinale; reclutamento di Akt mediante dominio PH distinto dalla successiva fosforilazione; acquisizione o aumento di funzione nella conversione di un proto-oncogene in oncogene, distinta dalla perdita di un oncosoppressore. Le modifiche sono presenti anche in inglese. Tutte le 12 ancore e tutti i metadati funzionali sono invariati.

### Copertura e correttezza

L’unità 6 del PDF ufficiale MUR 2026/27 è stata riletta e confrontata con il capitolo. La copertura comprende tutti i punti richiesti:

| Ambito MUR | Riscontro nella teoria e negli esercizi |
| --- | --- |
| Matrice, degradazione, fibronectina, integrine e meccanotrasduzione | Trazione e compressione; metalloproteasi; talina, actina, filamenti intermedi e FAK; confronti fra substrati |
| Caderine, CAM e giunzioni | Calcio extracellulare; differenza fra barriera, ancoraggio e comunicazione citoplasmatica; sei connessine per connessone |
| Modalità di comunicazione e trasduzione | Contatto, autocrinia, paracrinia, endocrinia e sinapsi; selettività, amplificazione, scaffold e terminazione |
| Recettori intracellulari, NO, ormoni lipidici e canali | Risposte genomiche; eme–guanilato ciclasi solubile–cGMP; corrente e potenziale nei recettori-canale |
| Proteine G, GEF/GAP e messaggeri | Scambio e idrolisi distinti; Gα/Gβγ; Gs, Gi e Gq; cAMP/PKA, PLC/IP3/DAG/calcio/PKC, calmodulina e SERCA |
| Desensitizzazione e visione | GRK/arrestina, riciclo e degradazione; rodopsina–transducina–PDE6; riduzione di cGMP, iperpolarizzazione e minore rilascio di glutammato |
| RTK, EGF, Ras-MAPK e oncogeni | Grb2/SOS, ordine Raf–MEK–ERK, recuperi sperimentali dopo blocco e limiti dei marcatori di via |
| Insulina e fosfoinositidi | Recettore preassociato, IRS, PI3K/PIP3/Akt, PTEN, GLUT4 e distinzione fra numero totale e quota superficiale |

Sono stati eseguiti **44 ricalcoli indipendenti con aritmetica razionale**, ricavati dai dati degli esercizi: percentuali e punti percentuali, occupazione recettoriale, spegnimento discreto, amplificazione, bilanci produzione-rimozione, calcio rispetto al basale, variazioni del potenziale e distribuzione dei trasportatori. Tutti concordano con le soluzioni. Il valore 67,5 nel modello di spegnimento rappresenta correttamente una media, non un conteggio letterale di mezze molecole. La quota superficiale di GLUT4 e il suo aumento relativo sono distinti esplicitamente.

### Fonti consultate dal revisore

Oltre al PDF MUR ufficiale e al confronto dei riferimenti del capitolo, sono stati verificati direttamente contenuti indicizzati o abstract di questi lavori originali:

- Taylor et al., [Activation of the β1 isozyme of phospholipase C by α subunits of the Gq class of G proteins](https://www.nature.com/articles/350516a0), *Nature* 1991: specificità del collegamento Gq–PLCβ.
- Meador, Means e Quiocho, [Target enzyme recognition by calmodulin](https://pubmed.ncbi.nlm.nih.gov/1519061/), *Science* 1992: struttura del complesso calcio–calmodulina–bersaglio.
- [Ultrafast structural changes direct the first molecular events of vision](https://www.nature.com/articles/s41586-023-05863-6), *Nature* 2023: conversione del retinale dopo assorbimento della luce.
- [Signal propagation from membrane messengers to nuclear effectors revealed by reporters of phosphoinositide dynamics and Akt activity](https://pmc.ncbi.nlm.nih.gov/articles/PMC1257695/), *PNAS* 2005: fosfoinositidi di membrana, dominio PH e reclutamento di Akt.
- Maehama e Dixon, [PTEN/MMAC1 dephosphorylates the lipid second messenger PIP3](https://pubmed.ncbi.nlm.nih.gov/9593664/), *JBC* 1998: rimozione del fosfato in posizione 3 e distinzione dall’attività di PI3K.
- [Insulin-responsive human adipocytes express two glucose transporter isoforms and target them to different vesicles](https://pubmed.ncbi.nlm.nih.gov/8325954/), 1993: traslocazione delle vescicole con GLUT4; [Kinetics of GLUT4 trafficking in rat and human skeletal muscle](https://pubmed.ncbi.nlm.nih.gov/19188436/), 2009: traffico nel muscolo.

I riferimenti sostengono i meccanismi verificati; non sono stati presentati come fonti dei dati numerici inventati per i modelli didattici.

### Figure e controlli finali

Tutti i **16 SVG** sono stati resi e guardati indipendentemente sia a **390 px** sia a **780 px**. Etichette, frecce, segni e compartimenti sono coerenti con il testo; non sono stati osservati tagli o sovrapposizioni. È stata corretta la didascalia inglese della figura `cascata-en.svg`: ora indica che lo spegnimento controlla la durata del segnale, come la versione italiana. La figura corretta è stata resa e ricontrollata a entrambe le larghezze.

Il comando finale

```sh
node strumenti/verifica-semestre-filtro-bilingue.mjs biologia-semestre-filtro segnalazione-cellulare
```

termina con esito positivo: **230 Markdown resi, 172 occorrenze di formule, zero avvisi e zero errori**. Per ciascuna lingua risultano 1 teoria, 10 schede con 20 esercizi, 14 tracce, 90 quiz e 8 figure nella teoria. Il confronto indipendente con la copia precedente conferma la conservazione di metadati, 90 indici corretti per lingua, enunciati e ancore. In totale la revisione ha modificato 202 Markdown e una didascalia SVG, oltre a questo rapporto.

Le evidenze locali della revisione sono in `qa/biologia-semestre-filtro/segnalazione-cellulare/review/`: copia iniziale con hash, dati delle correzioni, ricalcoli, esito del validatore e rendering delle figure. **La verifica indipendente del materiale del capitolo è completata.** Restano al coordinatore la build della materia e il controllo delle pagine complete nel sito. Nessun commit, build Astro o pubblicazione eseguito dal revisore.
