# Radiazioni e ottica — rifacimento del Semestre Filtro

## Autore e stato

Autore: agente `bio_segnalazione`. Redazione e controllo autore conclusi il 15 novembre 2026. Il capitolo è congelato per la revisione di un agente diverso; questo rapporto non costituisce verifica indipendente né autorizza a considerarla già svolta. Non sono state eseguite build Astro, commit o pubblicazioni.

Ambito: soltanto `radiazioni-e-ottica` di `fisica-semestre-filtro`, nelle collezioni teoria, svolti, dafare e domande IT/EN, più le figure originali e questo rapporto. Gli strumenti di appoggio sono esterni ai sorgenti produttivi, in `qa/fisica-semestre-filtro/radiazioni-e-ottica/`.

## Materiali e copertura

| Materiale | Italiano | Inglese |
| --- | ---: | ---: |
| File teoria | 1 | 1 |
| Sezioni principali | 10 | 10 |
| Parole teoria, conteggio del validatore | 3352 | 3368 |
| Schede svolte | 10 | 10 |
| Esercizi svolti | 20 | 20 |
| Tracce autonome con soluzione | 14 | 14 |
| Domande a tempo | 90 | 90 |
| File Markdown complessivi | 115 | 115 |
| Figure originali SVG | 12 | 12 |

Tutte le dieci ancore preesistenti sono conservate: `onde-em`, `spettro`, `fotoni`, `attenuazione`, `decadimenti`, `decadimento-esponenziale`, `attivita`, `ionizzazione`, `snell`, `lenti`. Le schede gratuite restano soltanto 1–3. I titoli, le parole chiave, i testi alternativi, le didascalie e i testi delle figure sono tradotti; gli inglesi usano il punto decimale, con valori e formule semanticamente identici.

La copertura segue l'unità 7 del programma MUR fornito in `qa/fisica-syllabus.txt`, letto insieme al programma completo:

- Campi elettrico e magnetico perpendicolari, fase e verso del trasporto energetico; frequenza, periodo, lunghezza d'onda, velocità, ampiezza e intensità.
- Regioni dello spettro e loro ordine; confini convenzionali, distinzione tra origine dei raggi X e gamma e possibili energie sovrapposte.
- Quanti, energia individuale, potenza, tasso e conteggio dei fotoni; frequenza ed energia conservate alla rifrazione in un'interfaccia ferma, uso corretto della lunghezza d'onda nel vuoto.
- Attenuazione esponenziale, spessore emivalente, grafico semilogaritmico, assorbanza decimale e Lambert-Beer; unità del coefficiente molare, bianco, calibrazione, filtri in serie e fascio a due componenti.
- Nuclidi e isotopi, bilanci alfa/beta meno/beta più/gamma; neutrino e antineutrino, differenza fra numero di massa e massa a riposo.
- Decadimento come processo casuale, legge della popolazione media, emivita, probabilità condizionata e limite del modello in presenza di precursori o rimozione fisica.
- Attività in becquerel, integrazione dei decadimenti, probabilità di emissione e rivelazione, fondo e ipotesi sui conteggi.
- Ionizzazione a singolo fotone, dipendenza dal bersaglio, radiazioni non ionizzanti e riscaldamento; distinzione fra energia del fotone, attività e dose media assorbita in gray.
- Riflessione, Snell, normale, angolo critico, caso radente e riflessione totale; cambiamento del rivestimento di una fibra e cenno al campo evanescente.
- Lenti convergenti sottili e parassiali, convenzione unica dei segni, immagine reale e virtuale, ingrandimento, potere diottrico, raggi principali e sensibilità vicino al fuoco.

Le connessioni applicative includono calibrazione spettrofotometrica di laboratorio, attenuazione dei raggi X, conteggi di sorgenti e trasporto della luce in strumenti endoscopici. Gli esempi di dose sono bilanci ideali e non indicazioni cliniche.

## Qualità degli esercizi e dei quiz

Le venti soluzioni esplicitano la scelta della legge, le unità, il ragionamento e un controllo alternativo del risultato. Includono un fascio policromatico che cambia composizione, emissioni gamma alternative con media pesata, sopravvivenza condizionata, correzione di fondo ed efficienza e confronto reale/virtuale. La mediana del validatore è 228 parole per esercizio IT e 217 EN, comprensive del testo e delle formule secondo il suo conteggio.

Le novanta domande distinguono applicazione numerica, identificazione delle condizioni, interpretazione di pendenze, inferenza di dati mancanti, bilanci nucleari e limiti dei modelli. La revisione autore ha sostituito alternative troppo lontane dal problema con errori pertinenti su rapporti, segni, conversioni, riferimento sperimentale e ipotesi. Le spiegazioni motivano la risposta e gli errori principali; mediana 46 parole IT e 43 EN. I primi quattordici quiz corrispondono alle tracce, che aggiungono un controllo o una seconda inferenza e restano risolvibili senza leggere le opzioni.

Le opzioni sono permutate con seed fisso `20261115`: posizioni corrette 23/23/22/22, stessa permutazione IT/EN, nessun ciclo globale e lunghezza massima di una sequenza identica pari a tre. `quiz-data.json` e `permutations.json` documentano i contenuti e le permutazioni; un confronto dei file finali controlla tutti gli enunciati, le opzioni e le spiegazioni rispetto al dataset redatto.

## Figure e verifica geometrica

Dodici tavole per lingua: componenti dei campi, energia del fotone, attenuazione e logaritmo, catena nucleare, popolazione media e due realizzazioni discrete, attività contro popolazione, Snell, tre condizioni di riflessione totale, lente con immagine reale, lente con immagine virtuale, calibrazione di Lambert-Beer e dati di potenza trasmessa. Dieci sono nella teoria; le due tavole sperimentali aggiuntive sono nelle schede, insieme ai richiami pertinenti alle figure teoriche.

Tutti i 24 SVG sono stati resi a 390 e 780 pixel, ottenendo 48 PNG e 12 tavole di confronto; la verifica visiva ha riguardato entrambe le lingue e dimensioni. Sono state corrette etichette vicine ai raggi, la scrittura sovrapposta di A/Z e il posizionamento delle etichette dei fuochi. I file QA sono in `figures/`, con inventario `figure-render-report.json`.

I raggi delle lenti sono calcolati dalle coordinate fisiche e verificati come rette: i tre raggi individuano la medesima immagine, il parallelo passa per il fuoco posteriore, il centrale non devia e la retta incidente del terzo passa per il fuoco anteriore. Le estensioni virtuali sono tratteggiate. Negli svolti l'altezza dell'oggetto è 0,200 cm, con immagini −0,100 e +0,500 cm: i piccoli angoli sono coerenti con il modello parassiale. Il disegno amplifica le altezze rispetto alle distanze orizzontali e lo dichiara. Le deviazioni di Snell e i tre casi critici sono geometricamente esatti per gli indici dichiarati.

## Controlli realmente eseguiti dall'autore

- `node strumenti/verifica-semestre-filtro-bilingue.mjs fisica-semestre-filtro radiazioni-e-ottica`, con `RENDER_DIR`: 230 file, 2160 formule rese, zero errori e zero avvisi. Risultato finale `validation.json`; HTML in `rendered/`.
- `exact-checks.py`: 98 ricalcoli numerici e bilanci più quattro controlli di quantità, tutti superati. Lo script è separato dai generatori editoriali e ricalcola le risposte degli svolti e quelle numeriche aggiuntive dei quiz.
- Parità delle 115 coppie Markdown, formule normalizzate per il separatore decimale e per le sole parole tradotte dentro `\text{}`, assenza di virgole decimali EN, caratteri di controllo e frazioni fuori convenzione; dieci ancore originali conservate. Controllo di tutte le 90 coppie quiz e relative chiavi.
- 4012 punti delle curve analitiche estratti dagli SVG finali, 38 vincoli geometrici sui raggi, rette di calibrazione/attività/logaritmo e monotonia/conteggi interi delle quattro realizzazioni discrete IT/EN verificati. Geometria identica nelle coppie SVG tradotte.
- Controllo autore della scienza, delle alternative e della traduzione durante la redazione e la rifinitura; gli esiti automatici non sostituiscono la lettura critica del verificatore indipendente.

L'esito dei controlli è in `exact-checks.json`. `author-freeze-sha256.json` identifica i 230 Markdown e 24 SVG consegnati. Non rigenerare indiscriminatamente `theory.py` o `worked.py`: alcune correzioni finali sono applicate direttamente ai Markdown.

## Fonti primarie e istituzionali consultate

- Programma ufficiale MUR del Semestre Filtro fornito dal coordinatore, testo integrale `qa/fisica-syllabus.txt`, unità 7 per la copertura.
- [BIPM, definizione delle unità SI e costanti](https://www.bipm.org/en/measurement-units/) e [SI Brochure, nona edizione](https://www.bipm.org/en/si-brochure-9): costanti h, c ed e, unità e prefissi. Nei problemi sono dichiarati i valori arrotondati impiegati.
- [IUPAC Gold Book, Beer–Lambert law, B00626](https://goldbook.iupac.org/terms/view/B00626) e [molar absorption coefficient, M03972](https://goldbook.iupac.org/terms/view/M03972): forma decimale, condizioni e unità del coefficiente molare. L'accesso diretto alla prima pagina ha restituito 403 in un tentativo; la definizione ufficiale è stata consultata mediante la sua indicizzazione.
- [NIST, X-Ray Mass Attenuation Coefficients, sezione 2](https://physics.nist.gov/PhysRefData/XrayMassCoef/chap2.html): fascio stretto monoenergetico, attenuazione esponenziale, dipendenza dall'energia e contributi alla rimozione dal fascio.
- [IAEA, TECDOC-1363](https://www-pub.iaea.org/mtcd/publications/pdf/te_1363_web.pdf): radioattività, legge di decadimento, attività ed emissioni; usato per la fisica di base, senza riprendere generalizzazioni assolute sulle condizioni ambientali.
- [Canadian Nuclear Safety Commission, Nuclear and Radiation Glossary](https://www.cnsc-ccsn.gc.ca/eng/nuclear-safety-security/educational-resources/radiation/nuclear-and-radiation-glossary/): attività, becquerel, energia depositata per massa e gray.
- [MIT, Foundations of Computer Vision, capitolo Lenses](https://visionbook.mit.edu/lenses.html): angoli rispetto alla normale, Snell, approssimazione parassiale e lente sottile. Figure e testi del capitolo consegnato sono originali.

## Limiti e passaggio alla verifica indipendente

I modelli sono dichiarati nei testi: fasci ideali e coefficienti costanti quando appropriato; sorgenti isolate o produzione esplicitamente inclusa; efficienza e fondo stabili senza tempo morto; processi a singolo fotone; lenti sottili e parassiali. Le realizzazioni casuali nei grafici sono esempi deterministici riproducibili di un modello probabilistico, non dati sperimentali né intervalli di confidenza. I piccoli valori medi di popolazione non rappresentano frazioni fisiche di nucleo.

Nessun errore aperto noto dopo i controlli autore. Restano da svolgere la revisione indipendente completa e l'integrazione/build del coordinatore. Congelati Markdown e SVG: ogni ulteriore correzione del revisore va fatta sui file finali e documentata in una sezione distinta.

## Revisione indipendente conclusa — 15 novembre 2026

Verificatore: agente `bio_flusso`, diverso dall'autore `bio_segnalazione`. Sono stati letti integralmente tutti i 230 Markdown: entrambe le teorie, tutte le 20 soluzioni svolte per lingua, tutte le 14 tracce per lingua e tutti i 90 quiz per lingua, comprese le quattro alternative e le spiegazioni. Il controllo ha confrontato la copertura con l'intera unità 7 MUR. Sono confermate le condizioni dichiarate per onde piane, fasci mono/policromatici, conteggi, decadimento statistico e immagini parassiali. Le chiavi corrette originarie risultano corrette e non sono state modificate.

### Correzioni effettive

- Nelle schede 3, 4 e 7 IT/EN, spostati i risultati arrotondati alla fine di tre catene matematiche: un'approssimazione non precede più un'uguaglianza che sembrava esatta. Nella scheda 4 IT, «dimezza» è diventato «riduce» per il secondo centimetro del filtro policromatico, in accordo con i valori e con l'inglese. Nella scheda 8 IT, la lunghezza d'onda massima «raggiunge» la soglia; il confronto include l'uguaglianza. Sistemato anche un articolo italiano nella scheda 5.
- Nei quiz 16, 38, 41 e 56 IT/EN, sostituiti distrattori troppo deboli o internamente incoerenti con errori pertinenti: confusione fra onda progressiva e accumulo di energia magnetica, condizioni della misura di assorbanza, perdita assoluta contro trasmissione frazionaria e produzione del figlio senza considerare le perdite. Ogni domanda mantiene una sola alternativa corretta nella posizione originale.
- Nei quiz 22, 26, 45 e 71, rispettivamente, chiarita la falsa analogia fra rapporto di lunghezze d'onda e legge intensità-ampiezza, esplicitate le lunghezze d'onda nel vuoto, eliminata l'ambiguità inglese di «remain equal» per A e Z e precisato il caso di uguaglianza alla soglia.
- Riformulati autonomamente tutti i 14 enunciati aperti IT/EN, preservando argomenti, ID e dati. La traccia 1 ora espone esplicitamente il risultato della frequenza; le tracce 7 e 8 nominano torio-234 e azoto-14 e riportano le trasformazioni bilanciate; la traccia 8 controlla anche la carica. Nella traccia 6, trasmittanze uguali non sono più presentate come prova di filtri fisicamente identici.
- Inseriti 20 contenitori semantici per lingua intorno a prosa, formule, tabelle e figure della teoria che erano fuori blocco. Testo scientifico, dieci sezioni e dieci ancore preservati. Nessun `:::percorso` introdotto.
- Convertite 314 occorrenze di formule con divisioni orizzontali in frazioni in colonna, controllando tutte le 115 trasformazioni distinte normalizzate IT/EN e i numeratori completi. Restano le scritture convenzionali degli indici di emivita/spessore emivalente e i rapporti nelle unità fisiche. I valori restano identici.
- Normalizzato il termine dei file del capitolo con una sola nuova riga. Questa è pulizia non semantica; un file EN presenta soltanto questa modifica. Nessun SVG è stato modificato. Nel complesso sono cambiati 164 Markdown rispetto al congelamento autore, principalmente per formato e tracce.

### Controlli indipendenti ed evidenze finali

Le evidenze della revisione sono in `qa/fisica-semestre-filtro/radiazioni-e-ottica/review/`, separate da quelle dell'autore.

- `independent-checks.py` / `independent-checks.json`: 158 ricalcoli dai dati degli enunciati, che coprono i 20 svolti, i risultati numerici dei quiz e le estensioni delle tracce; sette bilanci nucleari con conservazione di nucleoni, carica e numero leptonico. Tutti superati.
- Verificati direttamente negli SVG 4012 punti delle curve e 248 punti delle realizzazioni discrete, con conteggi interi e non crescenti. Verificati 54 vincoli su raggi e leggi lineari. Per le lenti è stata usata, indipendentemente dal controllo autore, la relazione tra pendenza incidente e uscente dopo aver rimosso l'amplificazione verticale del disegno; convergenze reali e prolungamenti virtuali coincidono con le posizioni calcolate. Controllati anche Snell e i tre casi rispetto all'angolo critico. Geometria identica nelle 12 coppie tradotte.
- Rigenerate e ispezionate tutte le 48 rese dei 24 SVG finali a 390 e 780 pixel; controllate entrambe le lingue per etichette, didascalie, assi, segni, sovrapposizioni e leggibilità. Nessun rilievo aperto. Inventario `figure-render-report.json`, immagini e 12 tavole affiancate in `figures/`.
- `final-audit.py` / `final-audit.json`: 115 confronti integrali delle formule IT/EN, normalizzati soltanto per decimali e parole tradotte nei testi matematici; metadati funzionali e chiavi identici; inglese con punto decimale; dieci ancore preservate nell'ordine originale; tutti gli enunciati aperti distinti dal prompt quiz; nessun carattere di controllo; quattro opzioni distinte per ciascuno dei 90 quiz.
- Il validatore del repository con `RENDER_DIR` ha reso i 230 file e 2168 formule finali, con zero errori e zero avvisi. HTML in `rendered/`, risultato in `validation.json`. Le parole delle teorie secondo il suo conteggio sono 3499 IT e 3505 EN; rimangono 20 esercizi e 10 figure teoriche per lingua. Distribuzione delle chiavi invariata: 23/23/22/22.
- `git diff --check` sul capitolo e sul rapporto non segnala errori. Baseline e hash sono conservati in `baseline/`, `baseline-hashes.json` e `final-hashes.json`; `changed-files.json` elenca le modifiche. `targeted-changes.json` e `fraction-changes.json` documentano le correzioni. Non rieseguire i generatori dell'autore né gli script di modifica della revisione: alcuni ultimi ritocchi sono diretti sui file.

Per i punti più delicati il revisore ha consultato direttamente [NIST, coefficienti di attenuazione](https://physics.nist.gov/PhysRefData/XrayMassCoef/chap2.html), sulla rimozione dal fascio stretto e sui contributi di scattering, e [MIT, Lenses](https://visionbook.mit.edu/lenses.html), sulle ipotesi sottili/parassiali e sui raggi principali. Il testo MUR locale costituisce la fonte del controllo di copertura. La richiesta diretta alla pagina IUPAC della legge di Beer ha restituito 403 e non viene conteggiata come consultazione riuscita del revisore.

Esito: revisione indipendente completata, contenuti congelati e pronti per i controlli integrati del coordinatore. Nessuna build Astro, commit o pubblicazione eseguita dal revisore. Le statistiche e gli esiti sopra riportati riguardano i file finali e aggiornano lo stato storico del precedente rapporto autore.
