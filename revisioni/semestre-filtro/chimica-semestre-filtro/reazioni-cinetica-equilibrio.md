# Reazioni, cinetica ed equilibrio — rapporto di autore

Autore: agente `bio_genoma`. Data: 15 novembre 2026. Capitolo: `chimica-semestre-filtro/reazioni-cinetica-equilibrio`.

**Stato: scrittura bilingue e revisione indipendente completate.** La sezione finale documenta separatamente il controllo del revisore `bio_flusso`. Non sono state eseguite build Astro, commit o pubblicazioni.

## Materiali consegnati

| Materiale | Italiano | Inglese |
| --- | ---: | ---: |
| Teoria | 1 | 1 |
| Schede svolte | 10, con 20 esercizi | 10, con 20 esercizi |
| Tracce con soluzione ragionata | 14 | 14 |
| Domande a tempo | 90 | 90 |
| Totale Markdown | 115 | 115 |
| Figure SVG originali | 8 | 8 |

La teoria conserva tutte le 14 ancore originali, nello stesso ordine, e sviluppa 8 sezioni illustrate. Il validatore conta 3350 parole italiane e 3162 inglesi. Le schede 1–3 mantengono `gratis: true`, le altre `false`; ogni esercizio contiene un solo blocco `spiegazione`. Tutti gli ID sono conservati. Nessuna modifica a capitoli diversi, cataloghi, prezzi o codice condiviso.

## Copertura del programma MUR, unità 3

| Argomento | Sviluppo nel capitolo |
| --- | --- |
| Conservazioni e bilanciamento | Atomi, carica, massa di un sistema aperto, scambi energetici, equazioni ioniche nette; avanzamento, limitante, resa e recupero del prodotto. |
| Cinetica e meccanismi | Velocità istantanea/media e normalizzata, volume variabile, dati iniziali, ordini sperimentali, pseudo-primo ordine, ordini negativi, molecolarità elementare, intermedi e preequilibri. |
| Evoluzione temporale | Leggi integrate di ordine zero, primo e secondo, dipendenza dei dimezzamenti, grafici e limiti fisici dell'estrapolazione. |
| Temperatura e catalisi | Arrhenius, kelvin, urti efficaci, superficie eterogenea, stato di transizione e sua teoria, barriere dei due versi, enzimi, saturazione, denaturazione e accoppiamento. |
| Equilibrio e termodinamica | Reversibilità pratica, equilibrio dinamico, isotopi, confronto con flussi stazionari; legge d'azione di massa, attività e stati standard; Q, Gibbs e calcolo con bilancio. |
| Perturbazioni ed equilibri multipli | Aggiunta/diluizione, compressione, gas inerte a V o P costante, numero di moli gassose, temperatura e van't Hoff; inversione, scalatura e somma delle equazioni. |
| Solido–liquido e casi biomedici | Prodotto di solubilità, fase effettivamente presente, diluizione prima della precipitazione, nucleazione, ione comune e controllo dell'approssimazione, complessazione, calcio/ossalato liberi, urato monosodico e acido urico come fasi distinte. |

I dati dei casi biomedici sono dichiarati come dati di modello. Il testo distingue una previsione di saturazione da una previsione clinica o da un tempo di formazione dei cristalli. Non impiega il medesimo prodotto di solubilità per acido urico neutro e urato monosodico.

## Quiz, esercizi e traduzione

I 90 quesiti sono stati riletti uno per uno con entrambe le traduzioni: enunciato, quattro alternative, risposta e spiegazione. Alternano bilancio, calcolo, analisi dimensionale, lettura di dati, meccanismi, condizioni di validità e interpretazione di perturbazioni. Non sono serie ottenute sostituendo soltanto numeri. I distrattori riguardano errori del processo studiato: coefficienti usati come ordini, scambio fra costante cinetica e termodinamica, perdita dei fattori di diluizione, attività totale al posto della libera, radice incompatibile con la stechiometria, mancata verifica di un'approssimazione.

Le posizioni corrette sono **23/23/22/22**, con seed fisso `261103`, ordine non ciclico e non più di tre risposte consecutive nella stessa posizione. La permutazione delle tre alternative errate e della corretta è identica in IT/EN. Le risposte corrette non sono sistematicamente le più lunghe: risultano più lunghe delle altre in 19 quiz italiani e 22 inglesi. La mediana delle sole spiegazioni, senza titolo/rimando, è 55 parole IT e 47 EN; il conteggio del validatore comprensivo del contesto è 61/54.

Le 14 tracce hanno una soluzione ragionata e un collegamento a un'ancora esistente. Le 20 soluzioni svolte mostrano impostazione, passaggi, risultato e interpretazione. La traduzione comprende titoli, parole chiave, didascalie, alternative, spiegazioni e testi delle figure.

Durante l'ultima rilettura sono stati corretti un esponente scritto con una virgola superflua nella domanda 9, un riferimento all'«ultima alternativa» incompatibile con il rimescolamento nella 39, alcune alternative inizialmente troppo facili e la legenda esponenziale del grafico cinetico. È stata esplicitata la normalizzazione del tempo nel confronto fra i tre ordini e completata la spiegazione della teoria dello stato di transizione.

## Controlli effettivamente eseguiti

- **Lettura scientifica dell'autore:** teoria integrale IT/EN, 20 esercizi svolti per lingua, tutte le 14 tracce e i 90 quiz per lingua. Verificati ipotesi, unità, segni, coefficienti, relazioni fra grandezze e corrispondenza fra spiegazioni e distrattori definitivi.
- **Ricalcolo separato dai testi:** `calcoli.py` ha superato 117 controlli numerici e di conservazione. Comprendono bilanci atomici/carica, limitante e massa residua, resa di raccolta, tre stime della stessa k, dimezzamenti, Arrhenius, barriere dirette/inverse, Gibbs, radici fisiche, fattori di compressione/diluizione, van't Hoff, combinazione di K, stato stazionario, solubilità, prodotto ionico dopo miscelazione e soluzione esatta dello ione comune. Esempi: rapporto Arrhenius circa 1,909; Gibbs circa −3,9875 kJ/mol; K a 330 K circa 17,188; rapporto di sovrasaturazione 240; solubilità esatta con ione comune circa 1,999998·10⁻⁸ mol/L.
- **Parità bilingue:** confronto di tutte le 115 coppie Markdown e di 794 formule per lingua, normalizzando esclusivamente separatore decimale, spazi e etichette linguistiche. Dati, specie chimiche, unità, algebra e ordine delle formule coincidono. Controllati separatamente gli indici e l'ordine delle opzioni, l'unicità dei 90 enunciati per lingua e la corrispondenza di tutte le tracce con le rispettive soluzioni.
- **Ancore:** confronto con il testo precedente in `baseline.json`: tutte e 14 preservate, stesso ordine in italiano e inglese.
- **Figure:** tutti i 16 SVG renderizzati a 390 e 780 px e ispezionati visivamente, anche in quattro tavole di contatto. Nessuna etichetta tagliata o sovrapposta rilevata. Controllati i livelli 0/80/45/−20 del profilo, le forme delle tre cinetiche, la retta Gibbs/Q, il vincolo del gas inerte e i rapporti di saturazione. Le figure sono riutilizzate anche nelle schede in cui chiariscono il procedimento.
- **Validatore di capitolo:** `node strumenti/verifica-semestre-filtro-bilingue.mjs chimica-semestre-filtro reazioni-cinetica-equilibrio`: PASS, **230 Markdown resi, 1588 formule, zero errori e zero avvisi**. Verifica anche frontmatter, conteggi, blocchi, riferimenti, opzioni, KaTeX e assenza del bug Markdown delle opzioni numeriche nude.
- **Whitespace:** `git diff --check` sui percorsi di proprietà: PASS.

Script, risultati JSON, fonti di lavoro e immagini di controllo sono in `qa/chimica-semestre-filtro/reazioni-cinetica-equilibrio/` nello spazio di coordinamento. Gli script dell'autore non vanno rieseguiti dopo eventuali correzioni del revisore, perché rigenerano i contenuti.

## Fonti consultate

Scrittura originale. Il programma di riferimento è il PDF MUR ufficiale 2026/27 fornito dal coordinatore, unità 3, conservato con l'estrazione integrale in `qa/chimica-syllabus.pdf` e `qa/chimica-syllabus.txt`.

- IUPAC, [Order of reaction](https://goldbook.iupac.org/terms/view/O04322) e [Molecularity](https://goldbook.iupac.org/terms/view/M03989): natura empirica degli ordini e significato elementare della molecolarità.
- IUPAC, [Equilibrium constant](https://goldbook.iupac.org/terms/view/E02177) e [Law of mass action](https://goldbook.iupac.org/terms/view/08184): attività, normalizzazione ed esponenti stechiometrici.
- IUPAC, [Transition state theory](https://goldbook.iupac.org/terms/view/T06470) e [Transition state](https://goldbook.iupac.org/terms/view/T06468): configurazioni attivate, barriere libere, distinzione da intermedi e da energia di attivazione di Arrhenius.
- IUPAC, [Green Book, abridged fourth edition](https://iupac.org/wp-content/uploads/2025/03/IUPAC-GB4Abridged.pdf): notazione e grandezze standard.
- NCBI Bookshelf, [Nephrolithiasis, Endotext](https://www.ncbi.nlm.nih.gov/sites/books/NBK279069/) e [Uric Acid Nephrolithiasis](https://www.ncbi.nlm.nih.gov/books/NBK560726/): ruolo di pH, composizione e fase nella cristallizzazione urinaria.
- Studio originale, [Solubility of uric acid and supersaturation of monosodium urate: why is uric acid so highly soluble in urine?](https://pubmed.ncbi.nlm.nih.gov/2795738/): distinzione fra solubilità dell'acido urico e sovrasaturazione dell'urato monosodico.

## Passaggi residui

Resta la verifica delle pagine integrate nel sito da parte del coordinatore, compresa la build comune. L'ispezione visiva qui descritta riguarda i diagrammi renderizzati e non viene presentata come collaudo delle pagine complete. Non sono noti errori irrisolti dell'autore.


## Revisione indipendente — bio_flusso, 15 novembre 2026

**Esito: PASS per l’intero capitolo bilingue.** Revisore distinto dall’autore. Letti integralmente i 230 Markdown: entrambe le teorie, tutti i 20 esercizi svolti per lingua, le 14 tracce e tutti i 90 quiz per lingua, comprese ogni alternativa e ogni spiegazione. Il controllo riguarda anche il programma MUR, unità 3. Sono stati conservati ID, accessi gratuiti, 14 ancore e loro ordine, bilancio delle risposte 23/23/22/22 e ordine delle alternative IT/EN.

### Correzioni effettive del revisore

- Nella domanda 4 e nella traccia 4, precisato che la molecolarità si definisce soltanto per uno stadio elementare; nella domanda 27, sostituita «k bimolecolare» con «k del secondo ordine», perché l’ordine osservato non dimostra la molecolarità.
- Nella teoria, esplicitato che il grafico di ln k usa il valore numerico in una unità fissata: cambiare unità sposta l’intercetta, senza modificare la pendenza di Arrhenius.
- Migliorati i distrattori delle domande 44, 45, 50 e 61: energia contro orientazione degli urti, superficie contro barriera intrinseca per sito, cinetica contro variazione di K, esaurimento del solido contro definizione del suo prodotto di solubilità. Aggiornate le spiegazioni pertinenti. Nessuna risposta corretta o posizione modificata.
- Nella domanda 49, precisata la composizione del mezzo, tenendo distinta la quantità di enzima che varia; nella domanda 80, esplicitata la presenza delle due rispettive fasi solide nel confronto delle solubilità.
- Trasformati tutti i 14 enunciati delle tracce in richieste aperte di calcolo o spiegazione, senza copiare letteralmente la domanda a scelta multipla. Dati, tema, ID e soluzioni ragionate conservati; verificata la corrispondenza delle nuove richieste con le soluzioni.
- Uniformate le frazioni a `\dfrac` in entrambe le lingue. Nessun valore numerico modificato. Inglese con punto decimale e traduzione completa delle etichette.

### Controlli conclusivi e prove conservate

- **Ricalcolo indipendente:** 112 verifiche numeriche e 33 verifiche esatte di atomi/carica su 12 reazioni, tutte superate. Comprendono ogni risultato numerico degli svolti e i quesiti quantitativi: velocità normalizzata distinta dalla scomparsa, ordini, dimezzamenti, rapporti Arrhenius, barriere dei due versi, Gibbs, radici fisiche, van’t Hoff, gas inerte a V/P costante, combinazione di costanti, stato stazionario, diluizione, saturazione e ione comune. Script originale del revisore `review/calcoli.py`, senza eseguire generatori dell’autore.
- **Figure:** ispezionati tutti i 16 SVG attuali a 390 e 1040 px, nelle due lingue. Testi leggibili, niente ritagli o collisioni rilevati. Verificati numericamente tutti i 303 punti delle tre curve cinetiche per lingua, i livelli del profilo libero 0/80/45/−20, la retta Gibbs/Q e le lunghezze dei rapporti di saturazione. XML valido per tutti i 16 SVG. Non sono state necessarie modifiche alle figure.
- **Lettura dei 90 quiz:** una sola alternativa corretta per ciascun enunciato nel modello dichiarato; chiavi controllate contro una lista indipendente annotata durante la lettura. Distrattori pertinenti, assenza di rimandi alla posizione dell’alternativa corretta e parità delle opzioni nelle due lingue. Confermate le distinzioni fra Ea e barriera libera, K adimensionale e costante cinetica, solidi presenti e solidi esauriti, urato e acido urico.
- **Parser indipendente:** 230 Markdown e 1590 formule resi senza errori. Confrontate tutte le 795 formule per lingua, normalizzando separatori decimali, spazi e soltanto le otto corrispondenze linguistiche effettivamente esaminate. Verificati metadati funzionali originali, 14 ancore originali, 20 esercizi per lingua, quattro opzioni distinte, 90 enunciati distinti, soluzioni delle tracce e collegamenti alle figure.
- **Validatore comune:** `node strumenti/verifica-semestre-filtro-bilingue.mjs chimica-semestre-filtro reazioni-cinetica-equilibrio`: 230 Markdown, 1590 formule, zero errori e zero avvisi. Conteggio finale della teoria: 3373 parole IT e 3184 EN, otto figure per lingua.
- **Whitespace:** `git diff --check` limitato ai percorsi del capitolo e al rapporto: PASS.

Conferme primarie riesaminate dal revisore: IUPAC [Order of reaction](https://goldbook.iupac.org/terms/view/O04322), [Molecularity](https://goldbook.iupac.org/terms/view/M03989), [Equilibrium constant](https://goldbook.iupac.org/terms/view/E02177), [Transition state theory](https://goldbook.iupac.org/terms/view/T06470); abstract dello [studio originale sulla solubilità di acido urico e urato monosodico](https://pubmed.ncbi.nlm.nih.gov/2795738/). Il confronto con il syllabus ufficiale usa l’unità 3 del PDF MUR fornito dal coordinatore.

Evidenze in `qa/chimica-semestre-filtro/reazioni-cinetica-equilibrio/review/`: snapshot e hash iniziali, correzioni, ricalcoli, controllo parser, risultato del validatore, 32 immagini dei diagrammi e otto tavole di contatto. Il controllo visivo riguarda le figure; il collaudo delle pagine integrate e la build comune restano al coordinatore. Non sono stati eseguiti build Astro, commit o pubblicazioni. Nessun errore scientifico irrisolto individuato nel perimetro verificato.
