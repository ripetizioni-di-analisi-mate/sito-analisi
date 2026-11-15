# Acidi, basi e reazioni redox — rapporto di autore

Autore: coordinatore. Revisore indipendente assegnato: agente bio_flusso. Data: 15 novembre 2026.

**Stato: stesura e revisione indipendente completa concluse; contenuti congelati per la verifica integrata del coordinatore.** Nessuna pubblicazione di questi materiali in produzione.

## Materiali e copertura

| Materiale | Italiano | Inglese |
| --- | ---: | ---: |
| Teoria | 1 | 1 |
| Schede svolte | 10, con 20 esercizi | 10, con 20 esercizi |
| Tracce con soluzione | 14 | 14 |
| Domande a tempo | 90 | 90 |
| Figure SVG localizzate | 9 | 9 |

Sono conservati tutti gli ID e le 18 ancore della teoria precedente. La teoria è articolata in 10 sezioni; il conteggio del validatore comprende formule e didascalie (4161/3976 parole IT/EN). Le schede 1–3 mantengono l'anteprima gratuita; non sono modificati prezzi o accesso.

La copertura segue l'unità 4 del programma MUR: definizioni di Brønsted e Lewis; anfiproticità; attività, pH, Kw e temperatura; indicatori; Ka, Kb e coppie coniugate; acidi e basi forti/deboli, poliprotici e sali; neutralizzazione prima dell'equilibrio; tamponi acidi e basici, capacità e limiti della diluizione; fosfato, bicarbonato aperto e proteine; solubilità, protonazione e complessazione; numeri di ossidazione e bilancio di atomi/carica; pile, Nernst, Gibbs e condizioni standard; ossigeno, specie radicaliche, Fenton e Haber–Weiss.

Le figure mostrano coppie coniugate, diluizione e autoprotolisi, titolazione, risposta di un tampone, solubilità e protonazione, contabilità redox, pila Daniell, Nernst e ciclo del ferro. Sono impiegate anche negli svolti pertinenti. Strutture, curve e valori sono scientifici, non immagini decorative.

## Revisione dei contenuti

La teoria valida e i dati degli esercizi precedenti sono stati conservati e approfonditi. Ogni svolto esplicita l'impostazione, il motivo dei passaggi e un controllo del risultato. La traduzione comprende tutte le spiegazioni, metadati, figure, testi alternativi e collegamenti.

Le prime 14 domande, distinte e valide, sono state rilette e ampliate nelle spiegazioni; le successive 76 sono state riscritte come casi distinti. Alternano interpretazione, calcolo, analisi dell'errore, confronto di modelli e condizioni di applicabilità, senza una serie di soli cambi numerici.

Le 90 chiavi hanno distribuzione 23/23/22/22. Il seed 2026111504 produce un ordine non ciclico; ogni permutazione è identica nelle due lingue e controllata contro la risposta semantica originaria. Il manifesto è in qa/chimica-semestre-filtro/acidi-basi-redox/quiz-permutation.json. I decimali dei quiz e delle tracce inglesi sono localizzati con il punto, senza modificare i valori.

Le 14 tracce mantengono temi, ID e ancore e hanno soluzione ragionata. Il revisore ha trasformato gli enunciati in richieste aperte autonome e ne ha verificato la corrispondenza con le soluzioni.

## Controlli eseguiti

- Lettura dell'autore dei 90 enunciati, delle quattro alternative e delle spiegazioni nelle due lingue; controllo della pertinenza dei distrattori e assenza di riferimenti alla posizione delle alternative dopo il rimescolamento.
- 48 ricalcoli separati per i quiz: logaritmi, attività, quadratiche, tamponi, bilanci di carica, ossidazione, titolazione redox, potenziali e Gibbs. Script e risultati in check-calculations.py e author-quiz-calculations.json.
- Verifica preliminare indipendente già svolta da bio_flusso: 46 ricalcoli, 20 bilanci atomici/di carica, controllo di 766 formule bilingui di teoria e svolti, tutti i punti dei grafici. Sono state precisate Henderson–Hasselbalch, costante apparente carbonica, lavoro elettrico massimo e tampone basico; migliorate due etichette della pila.
- Tutti i 18 SVG sono stati rasterizzati e ispezionati dal revisore a 390 e 1040 px. Evidenze della prima fase in qa/chimica-semestre-filtro/acidi-basi-redox/review/phase1.md.
- Validatore del capitolo: **230 Markdown, 2082 formule, zero errori e zero avvisi**. Mediana parole per esercizio 251 IT/230 EN; mediana spiegazioni quiz 51 IT/47 EN secondo il conteggio del verificatore.
- git diff --check sui percorsi del capitolo: superato.

I generatori di lavoro non devono essere rieseguiti dopo le correzioni del revisore. Le evidenze degli script sono materiali di coordinamento; il rapporto registra i risultati effettivi.

## Fonti

Scrittura originale, verificata sul programma MUR 2026/27, unità 4: [Chimica e propedeutica biochimica](https://www.mur.gov.it/sites/default/files/2026-06/Syllabus%20Chim.Prop_.Bioch_.%20-%20finale-%202026.pdf).

Riferimenti istituzionali per definizioni e punti delicati:

- IUPAC Gold Book, [pH](https://goldbook.iupac.org/terms/view/P04524).
- IUPAC Gold Book, [Nernst equation](https://goldbook.iupac.org/terms/view/09068).
- IUPAC Gold Book, [Fenton reaction](https://goldbook.iupac.org/terms/view/FT06786).
- IUPAC Gold Book, [Haber–Weiss reaction](https://goldbook.iupac.org/terms/view/HT06787).

## Passaggi residui

Build integrata della materia e verifica delle pagine e dei quiz a cura del coordinatore. Il controllo visivo documentato riguarda i diagrammi: non equivale a un collaudo interattivo delle pagine complete nel browser.



## Revisione indipendente completa — bio_flusso, 15 novembre 2026

**Esito: PASS.** Il controllo indipendente copre tutti i 230 Markdown, con lettura integrale delle due teorie, dei 20 esercizi svolti per lingua, delle 14 tracce e di tutte le 90 domande per lingua, incluse le quattro opzioni e le spiegazioni. Il revisore è distinto dall’autore. La prima fase è descritta in `qa/chimica-semestre-filtro/acidi-basi-redox/review/phase1.md`; la seconda completa il controllo dopo il congelamento dei quiz e delle tracce.

### Modifiche effettive

Nella prima fase sono stati precisati uso e approssimazioni di Henderson–Hasselbalch, tampone basico NH₃/NH₄⁺, costante carbonica apparente, sistema bicarbonato chiuso e lavoro elettrico massimo reversibile. La figura del fosfato è stata collocata nell’esercizio pertinente e le etichette ioniche del ponte salino sono state separate dagli altri elementi nei due SVG della pila.

Nella fase finale:

- Precisato nella domanda/traccia 7 che la quadratica dell’ammonio trascura l’autoprotolisi; aggiunto il controllo a posteriori: idrossido circa 3,0·10⁻⁹ mol/L, inferiore allo 0,1% dell’idronio. La soluzione completa del bilancio con acqua conferma pH 5,48 arrotondato a due decimali.
- Nella domanda/traccia 12, dichiarata la soluzione inizialmente satura in equilibrio con il solido presente: è questa ipotesi che permette di affermare che la protonazione porti il prodotto ionico sotto la costante.
- Precisati il sale 1:1 nella domanda 31, l’approssimazione di preparazione del tampone nella 41, la piccola dissociazione iniziale nel bilancio della 48 e temperatura/stati standard coerenti nella combinazione delle costanti della 60.
- Migliorati i distrattori delle domande 51, 57, 58, 83 e 87, mantenendoli sugli errori dello stesso concetto: sistema aperto del bicarbonato, prodotto di solubilità, complessazione, convenzione biochimica e ruolo del ferro assente dall’equazione netta. Nessuna modifica a chiavi o posizioni corrette.
- Riscritti i 14 enunciati delle tracce come richieste esplicite di ragionamento, bilancio o calcolo. Non sono copie letterali degli enunciati quiz; dati, temi, ID, ancore e risultati sono conservati. Ogni soluzione risponde ai passaggi richiesti senza dipendere dalle alternative.
- Localizzati con il punto i 231 separatori decimali rimasti in teoria e svolti inglesi. Il confronto con la copia congelata dimostra che queste modifiche cambiano soltanto il separatore. Le etichette dei nove SVG inglesi usavano già il punto: nessuna modifica alle figure o alle coordinate è stata necessaria nella fase finale.

### Verifiche concluse

- **Calcoli:** ai 46 ricalcoli indipendenti della prima fase si aggiungono 80 verifiche quantitative dei quiz/tracce. Comprendono radici quadratiche, attività, diluizione estrema con acqua, medie logaritmiche, frazioni dissociate, tamponi prima/dopo neutralizzazione, capacità media, forme fosfato, prodotti ionici, stechiometria redox, potenziali Nernst e Gibbs. Nessun risultato numerico errato individuato nei materiali.
- **Atomi e carica:** conservati i 20 controlli della prima fase e aggiunti 38 controlli esatti su 11 equazioni dei quiz, incluso nitrato/nitrito in ambiente basico. Verificata separatamente la cancellazione delle forme del ferro nella somma che dà l’equazione netta di Haber–Weiss.
- **Tutti i quiz:** lettura e controllo semantico di 90 domande per lingua; una sola risposta corretta nel modello dichiarato, quattro alternative distinte, spiegazione coerente e nessun richiamo alla posizione dell’opzione corretta. Le 90 chiavi sono state ricontrollate contro una lista annotata indipendentemente durante la lettura. Confermati bilancio 23/23/22/22 e stesso ordine IT/EN.
- **Parità e rendering Markdown:** processore reale del sito su 230 Markdown e 2088 formule; tutte le 1044 formule per lingua corrispondono normalizzando soltanto separatore decimale e spazi. Controllati YAML, due esercizi per scheda, accesso gratuito delle sole schede 1–3, blocchi delle soluzioni, link, immagini e metadati funzionali originali. Le 18 ancore sono preservate nello stesso ordine. Nessun `\frac` residuo o blocco `percorso`.
- **Figure:** tutti i 18 SVG erano stati ispezionati a 390 e 1040 px nella prima fase, comprese le immagini aggiornate della pila. I loro hash finali coincidono esattamente con quella versione. Confermati XML valido e controlli geometrici delle 401 ordinate di diluizione esatta, 401 del confronto approssimato, 501 di titolazione ed estremi della retta di Nernst. Nessuna sostituzione sulle virgole delle coordinate SVG.
- **Validatore finale:** `node strumenti/verifica-semestre-filtro-bilingue.mjs chimica-semestre-filtro acidi-basi-redox`: 230 file, 2088 formule, **zero errori e zero avvisi**. Teoria: 4161 parole IT e 3976 EN nel conteggio del validatore; dieci sezioni e nove figure distinte per lingua, con alcuni riusi.
- **Whitespace:** `git diff --check` limitato al capitolo e al rapporto: PASS.

Riscontri primari consultati indipendentemente nella prima fase: IUPAC [pH](https://goldbook.iupac.org/terms/view/P04524), [Nernst equation](https://goldbook.iupac.org/terms/view/09068), [Fenton reaction](https://goldbook.iupac.org/terms/view/FT06786) e [Haber–Weiss reaction](https://goldbook.iupac.org/terms/view/HT06787). Copertura confrontata con l’unità 4 del syllabus MUR ufficiale fornito dal coordinatore.

Evidenze finali in `qa/chimica-semestre-filtro/acidi-basi-redox/review/`: `baseline-full/`, hash delle versioni, `corrections-final.json`, `calcoli-final.py/json`, `check-final.mjs/txt`, `validator-final.json`, oltre ai file e alle immagini della prima fase. Nessun generatore dell’autore rieseguito, nessuna build Astro, commit o pubblicazione eseguiti dal revisore. La verifica delle pagine integrate resta distinta dal controllo dei diagrammi qui documentato. Nessun errore scientifico irrisolto individuato nel perimetro verificato.
