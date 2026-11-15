# Atomo, legami, stati della materia e termodinamica — rapporto di autore

Autore: `/root/bio_organizzazione`. Data: 15 novembre 2026. Stato: **scrittura e controllo dell’autore conclusi; pronto per la verifica indipendente assegnata dal coordinatore**. Questo rapporto non sostituisce la verifica di un altro agente.

## Materiale consegnato

| Materiale | Italiano | Inglese |
| --- | ---: | ---: |
| Teoria | 1 file, 4.206 parole | 1 file, 3.928 parole |
| Sezioni principali e ancore | 9 sezioni, 20 ancore | 9 sezioni, 20 ancore |
| Schede svolte | 10, con 20 esercizi | 10, con 20 esercizi |
| Tracce autonome con soluzione ragionata | 14 | 14 |
| Quiz con quattro opzioni | 90 | 90 |
| SVG originali tradotti | 9 | 9 |
| Totale Markdown | 115 | 115 |

Sono preservati tutti gli ID e tutte le 20 ancore originarie. Le schede svolte gratuite restano soltanto 1–3. Ogni esercizio svolto ha un solo blocco `spiegazione`. Non sono stati modificati cataloghi, accessi, codice, altre materie o capitoli. Nessuna build Astro, commit o pubblicazione eseguita.

La teoria precedente aveva contenuti validi da mantenere: la maggiore lunghezza deriva dalla copertura delle distinzioni scientifiche necessarie, senza tagliare gli approfondimenti per raggiungere una soglia artificiale. Le 14 tracce finali sono quesiti autonomi: includono correzione di errori, conteggi, confronto fra modelli, pressione assoluta e relativa, sistema chiuso/aperto e bilanci termodinamici. Non riproducono semplicemente i primi 14 quiz.

## Copertura dell’unità 1 MUR

| Voce del programma | Sviluppo nel capitolo |
| --- | --- |
| Struttura atomica, isotopi, proprietà magnetiche del nucleo | Conteggi di protoni/neutroni/elettroni; abbondanza isotopica; spin di ¹H e ¹²C; separazione energetica, radiofrequenza, segnale e gradienti; distinzione da radioattività |
| Numeri quantici, Pauli, Hund e configurazioni | Valori ammessi, occupazione p, configurazioni degli elementi H/C/N/O/P/S, cationi e serie isoelettroniche |
| Sistema periodico, volume, ionizzazione, affinità ed elettronegatività | Tendenze e limiti; confronto fra proprietà di specie libere e atomi legati; convenzione IUPAC del segno dell’affinità |
| Molecole, ioni, ioni poliatomici, masse e mole | Massa molecolare/relativa/molare, unità di massa atomica, Avogadro esatto, entità specificate, unità formula e conteggio dei gruppi |
| Legami e orbitali molecolari | Ionico/covalente/metallico/coordinazione; Lewis e limiti dell’ottetto; sigma/pi; ordine di legame; distanza ed energia; ibridazione sp/sp²/sp³ |
| Geometria e interazioni | VSEPR, domini e forma molecolare, somma vettoriale dei dipoli, legame a idrogeno, van der Waals/London, idratazione ione-dipolo ed effetto idrofobico |
| Ossidazione e nomenclatura inorganica | Carica formale distinta dal numero di ossidazione; ossidi, perossidi, idrossidi, acidi, basi e sali; nomenclatura di Stock e prefissi; nitrito/nitrato, solfito/solfato e fosfato |
| Solidi | Reticoli ionici, solidi molecolari, covalenti e metallici; confronto grafite/diamante e conduzione |
| Gas e respirazione | Kelvin, pressione assoluta, Boyle/Charles/Gay-Lussac, equazione dei gas ideali, modello respiratorio aperto; teoria cinetica, distribuzione di velocità e velocità quadratica media |
| Liquidi e fasi | Pressione di vapore, evaporazione/ebollizione, tensione superficiale, punti triplo/critico, diagrammi acqua/CO₂ e termoregolazione |
| Termodinamica e sistemi aperti | Primo principio e convenzione del lavoro; funzioni di stato; entalpia e transizioni; entropia complessiva; Gibbs, spontaneità e velocità; composizione corrente, accoppiamento meccanistico e stato stazionario |

Per Gibbs sono dichiarate le condizioni del criterio nel sistema chiuso e distinta la variazione di reazione alla composizione presente dai flussi di energia e materia nei sistemi biologici aperti. Per i gas sono esplicitate quantità fissa, idealità, pressione assoluta e uso dei kelvin quando richiesto. I casi biomedici sono modelli delimitati.

## Quiz e lettura dell’autore

Letti uno a uno i 90 quiz in entrambe le lingue, confrontando enunciati, quattro alternative e spiegazioni. Tutte le soluzioni corrette sono state ricontrollate sul concetto o sul calcolo; non ci sono enunciati identici nella banca. La sequenza copre calcolo, interpretazione, condizioni di validità, confronto ed errore ragionato.

La rilettura ha migliorato circa 25 quesiti: proprietà periodiche, affinità/elettronegatività, conduzione metallica, ottetto incompleto, risonanza, rotazione dei legami, dispersione, effetto idrofobico, acidità/basicità, pressione cinetica, aree sotto le distribuzioni, pressione di vapore e accoppiamento. Sostituite alternative troppo evidenti e aggiornate le relative spiegazioni. Eliminato un riferimento «rispettivamente» che sarebbe diventato scorretto dopo la permutazione delle opzioni. La risposta corretta non è sistematicamente la più lunga: lo è in 35/90 casi IT e 34/90 EN, contando anche le parità.

Posizioni corrette bilanciate **23/23/22/22**, seed `2026111601`, stessa permutazione IT/EN verificata su tutti i 90 file. La sequenza non è ciclica e la massima serie di posizioni uguali è tre. Nessuna spiegazione fa riferimento a lettere delle risposte.

## Figure e controllo visivo

Nove figure didattiche, ciascuna in italiano e inglese, in `public/figure/chimica-semestre-filtro/atomo-legami-termodinamica/`:

- isotopi e carica del magnesio;
- occupazione 2p di N/O;
- molecole e atomi nel campione d’acqua;
- potenziale di legame con minimo e dissociazione;
- geometria e dipoli di CO₂/H₂O;
- Lewis di H₂O₂/NH₄⁺ con doppietti e carica;
- distribuzioni di Maxwell-Boltzmann di N₂ a 300/600 K;
- diagrammi qualitativi di fase acqua/CO₂;
- retta di Gibbs con soglia a 200 K.

Tutti i **18 SVG sono stati renderizzati e ispezionati visivamente a 390 e 1.040 px**. La rilettura visiva ha portato a spostare la carica parziale dell’ossigeno, separare etichette/fasi/isobare, distanziare l’unità dell’asse di Gibbs e indicare le unità della densità di probabilità di Maxwell. Le versioni corrette sono state nuovamente renderizzate e viste alle due larghezze. Le curve di Maxwell sono calcolate dal modello dichiarato; i diagrammi di fase sono espressamente qualitativi e non in scala. Le strutture di Lewis non pretendono di rappresentare la geometria tridimensionale.

Le nove figure sono richiamate nella teoria e, quando utili, negli svolti. La traccia 12 usa il diagramma di fase. Il contatore automatico restituisce 11 elementi grafici nella teoria perché comprende anche due SVG generati da KaTeX: i disegni didattici originali sono nove per lingua.

## Controlli effettuati

- Rilettura completa della teoria IT/EN e dei 20 esercizi svolti per lingua; confronto delle 14 tracce finali e delle relative soluzioni. Resi espliciti i domini tetraedrici NH₃/NH₄⁺ e l’ipotesi di entalpia/entropia costanti nel grafico dell’esercizio 10. Corretti segni di approssimazione e arrotondamento del bilancio accoppiato.
- **79 controlli numerici dell’autore**, eseguiti separatamente dalla generazione dei contenuti: isotopi, moli, conteggi, cariche, energie di legame, trasformazioni dei gas, pressione relativa, velocità, calore latente, lavoro, entropia e Gibbs. Per Maxwell l’integrale numerico della densità vale 1 alle due temperature; le code oltre 800 m/s valgono circa 0,06624 e 0,30898, coerenti con il confronto illustrato.
- Verificati 115 file per lingua, 20 ancore preservate, nove sezioni, 90 enunciati distinti, quattro opzioni non duplicate per quiz, assenza di `:::percorso`, caratteri di controllo e riferimenti a lettere delle alternative.
- Eseguito `node strumenti/verifica-semestre-filtro-bilingue.mjs chimica-semestre-filtro atomo-legami-termodinamica`: **230 file resi, 1.458 formule, zero errori e zero avvisi**. Validati conteggi, Markdown, YAML, blocchi, ancore, immagini e parità bilingue.
- `git diff --check` sui soli percorsi del capitolo: nessun errore.

Evidenze di appoggio nella directory QA del capitolo: `validazione-finale.json`, `audit-autore.json`, `ricalcoli.json`, `quiz-permutazioni.json`, `contenuti-sha256.json` e `figure-render/`. Gli script di appoggio sono strumenti di stesura: **non vanno rigenerati dopo le correzioni del revisore**; alcuni produrrebbero nuovamente la versione anteriore alla rifinitura o le vecchie tracce.

## Fonti di controllo

- MUR, programma ufficiale di **Chimica e propedeutica biochimica**, unità didattica 1, letto integralmente nella copia fornita dal coordinatore (`qa/chimica-syllabus.txt` e PDF corrispondente).
- [BIPM — mole](https://www.bipm.org/en/si-base-units/mole) e [Brochure SI](https://www.bipm.org/en/si-brochure-9): entità specificate, costante di Avogadro e unità.
- IUPAC Gold Book: [affinità elettronica](https://goldbook.iupac.org/terms/view/E01977/plain), [numero di ossidazione](https://goldbook.iupac.org/terms/view/O04365/plain), [legame a idrogeno](https://goldbook.iupac.org/terms/view/HT07050/plain).
- [NIST — principio della MRI](https://www.nist.gov/how-do-you-measure-it/how-does-mri-machine-work) e [NIBIB — MRI](https://www.nibib.nih.gov/science-education/science-topics/magnetic-resonance-imaging-mri): campo, radiofrequenza, protoni e codifica spaziale.
- NIST Chemistry WebBook: [CO₂](https://webbook.nist.gov/cgi/cbook.cgi?ID=C124389&Mask=35) e [acqua](https://webbook.nist.gov/cgi/cbook.cgi?Mask=4&Name=water), proprietà di fase e pressione tripla.
- OpenStax, Rice University: [teoria cinetico-molecolare](https://openstax.org/books/chemistry-2e/pages/9-5-the-kinetic-molecular-theory) e [energia libera](https://openstax.org/books/chemistry-2e/pages/16-4-free-energy), per controllo di modello, distribuzioni e condizioni termodinamiche.

Non rimangono errori noti al controllo dell’autore. Restano da svolgere la **verifica indipendente** del capitolo e la verifica finale del sito del coordinatore; il controllo visivo qui descritto riguarda i diagrammi renderizzati, non una build o una sessione completa del sito.

## Revisione indipendente conclusa

Verificatore: **`/root/bio_genetica`**, distinto dall’autore. Data: 15 novembre 2026. Stato finale: **capitolo verificato e congelato per i controlli globali del coordinatore**. Le indicazioni dell’autore sulla revisione ancora da svolgere descrivono la consegna precedente e sono superate da questa sezione.

La revisione ha letto integralmente le due teorie, i 20 esercizi svolti per lingua, tutte le 14 tracce con soluzione per lingua e tutti i 90 quiz nelle due lingue, comprese le quattro alternative e le spiegazioni. Il confronto con ogni voce dell’unità 1 MUR conferma la copertura dichiarata. Controllati conteggi elettronici, valenze, nomi, geometrie, condizioni dei gas, convenzione del lavoro, passaggi di fase, unità e segni di entalpia, entropia e Gibbs. Nei quiz è stata verificata una sola risposta corretta nelle ipotesi dichiarate e la pertinenza dei distrattori; la banca non è una successione di sostituzioni numeriche.

### Correzioni effettive del revisore

- Teoria IT/EN e quiz 17: esplicitato che le abbondanze isotopiche sono frazioni riferite al **numero di atomi**. Nessun valore o indice di risposta è cambiato.
- Teoria IT/EN: precisata la definizione della tensione superficiale mediante lavoro **reversibile a temperatura costante**; resa esplicita la necessità di un meccanismo che vincoli gli avanzamenti delle reazioni accoppiate nel rapporto considerato.
- Inglese: normalizzati **216 separatori decimali in 24 Markdown**, mantenendo i valori, le cifre significative e la punteggiatura delle liste e delle quadruple quantiche. Gli SVG inglesi usavano già il punto decimale.
- Figura geometria IT/EN: rese le frecce dei dipoli esattamente parallele ai rispettivi legami O–H, con verso coerente con lo spostamento della densità elettronica dichiarato nella legenda. Ricalcolato dalle coordinate SVG l’angolo H–O–H di **104,5°**.
- Figura energia di legame IT/EN: spostata l’etichetta della dissociazione per separarla dalla freccia verticale.

Rispetto alla baseline di revisione sono stati modificati **26 Markdown e 4 SVG**, oltre al presente rapporto. Non sono stati eseguiti gli script di stesura dell’autore. Le 20 ancore originarie e gli ID sono rimasti invariati.

### Controlli indipendenti ed esito

- **91 verifiche numeriche, elettroniche o geometriche**, tutte superate, scritte separatamente dagli script dell’autore: isotopi e abbondanze, moli/entità, cariche, legami, gas, conversioni, lavoro, calore latente, entropia e Gibbs. I risultati pubblicati sono corretti con gli arrotondamenti dichiarati.
- Le curve SVG di Maxwell sono state confrontate punto per punto con la densità ricavata dal modello di N₂ ideale alle due temperature. Integrazione indipendente normalizzata a uno; frazioni oltre 800 m/s circa **0,06624 a 300 K** e **0,30898 a 600 K**. Verificati anche angoli, verso delle frecce e coordinate della retta di Gibbs. I diagrammi di fase restano esplicitamente qualitativi.
- Confrontati i multinsiemi delle formule di **tutte le 115 coppie IT/EN**, normalizzando esclusivamente il separatore decimale e le etichette testuali tradotte: piena corrispondenza. Controllati i 90 indici corretti, le quattro alternative distinte e il loro ordine bilingue.
- Distribuzione finale delle chiavi **23/23/22/22**, serie massima di tre posizioni uguali, nessun periodo ripetuto da 1 a 8; permutazioni dell’autore conservate. Nessuna spiegazione dipende dalla lettera o dalla posizione di un’opzione. Il controllo ausiliario `domande-simili.py` a soglia 0,7 non segnala coppie in nessuna lingua, a supporto della lettura manuale dell’intera banca.
- **Tutti i 18 SVG** renderizzati nuovamente a **390 e 780 px**, per 36 PNG, e ispezionati nelle nove tavole di confronto. Ricontrollata la figura energia di legame dopo lo spostamento dell’etichetta. Nessun testo tagliato o sovrapposizione residua osservata.
- Validatore del capitolo: **230 Markdown resi, 1.458 formule, zero errori e zero avvisi**. Teoria finale: 9 sezioni, 20 ancore, 4.237 parole IT e 3.958 EN secondo il contatore del validatore. Nove figure didattiche per lingua, 20 esercizi svolti, 14 tracce, 90 quiz.
- `git diff --check` sui soli percorsi assegnati: nessun errore.

Le fonti ricontrollate dal revisore includono il programma MUR fornito, [BIPM — mole](https://www.bipm.org/en/si-base-units/mole), IUPAC [lavoro superficiale](https://goldbook.iupac.org/terms/view/S06193), [affinità elettronica](https://goldbook.iupac.org/terms/view/E01977) e [numero di ossidazione](https://goldbook.iupac.org/terms/view/O04365), [NIST — MRI](https://www.nist.gov/how-do-you-measure-it/how-does-mri-machine-work), [NIST — CO₂](https://webbook.nist.gov/cgi/cbook.cgi?ID=C124389&Mask=35) e [OpenStax, Rice University — teoria cinetico-molecolare](https://openstax.org/books/chemistry-2e/pages/9-5-the-kinetic-molecular-theory).

Evidenze indipendenti: `qa/chimica-semestre-filtro/atomo-legami-termodinamica/independent-review/`, con baseline precedente alla revisione, `refinements.json`, `checks.py`, `checks.json`, `renderer-report.json`, 36 rese e hash finali. Nessun errore noto residuo. Non sono state eseguite build Astro, commit o pubblicazioni; la verifica finale del sito compete al coordinatore.
