# Onde meccaniche — rapporto dell’autore

Autore: `bio_genoma`. Data: 15 novembre 2026. Materiale completato e consegnato alla verifica indipendente del coordinatore; questo rapporto documenta i controlli dell’autore e non sostituisce la revisione indipendente.

## Materiali e copertura

Riscritti e tradotti integralmente 230 Markdown: per ciascuna lingua una teoria, dieci schede con due esercizi, quattordici tracce autonome con soluzione e novanta quiz con quattro alternative. La teoria comprende otto sezioni, 3.022 parole in italiano e 2.869 in inglese secondo il contatore del validatore. Conservate tutte le dieci ancore originali: `armonico`, `onda`, `parametri-onda`, `equazione-onda`, `interferenza`, `intensita`, `inverso-quadrato`, `suono`, `decibel`, `doppler`.

La copertura segue l’intera unità 4 del programma MUR: oscillatore armonico, parametri dell’onda e propagazione, moti trasversali e longitudinali, equazione armonica, sovrapposizione e interferenza, energia e potenza su una corda, intensità e propagazione sferica, suono nei mezzi, intensità e percezione, livelli in decibel e interpretazione qualitativa del Doppler. Le formule Doppler unidimensionali subsoniche e l’eco a due strati sviluppano esempi applicativi oltre la sola richiesta qualitativa.

Il testo distingue velocità della fase e velocità locale, pressione di picco ed efficace, pressione assoluta e perturbazione, energia e potenza, livello e intensità, interferenza locale e flusso netto. Esplicita le condizioni di non dispersione, linearità, stazionarietà, geometria e impedenza quando servono. L’esempio dell’eco è un modello fisico, senza indicazioni cliniche.

Le schede richiedono anche ricostruzione da misure, informazione insufficiente sul segno della velocità, equilibrio verticale, trasmissione fra mezzi, interferenza con ampiezze diverse, separazione fra dispersione geometrica e assorbimento, sottrazione/somma di livelli ed eco attraverso due strati. Le tracce sono esercizi aperti autonomi. I quiz mescolano calcoli, inferenze, grafici descritti, ipotesi e limiti dei modelli; le posizioni corrette sono 23/23/22/22, ottenute con seed 2026111504, e non hanno più di tre chiavi uguali consecutive.

## Figure

Create 24 SVG originali, dodici coppie IT/EN. Nove coppie sono nella teoria: fasi dell’oscillatore, moti del mezzo, profili spaziali e temporali, interferenza, dispersione sferica, pressione e spostamento, eco, scala logaritmica dei livelli e fronti Doppler. Tre coppie sono specifiche degli svolti: legge oraria misurata, ampiezze di 3/4 mm e relativo andamento di fase, percorso attraverso due strati.

Curve e fronti sono deterministici e corrispondono alle equazioni e ai dati: nessuna immagine generativa. Ispezionati tutti i 48 render a 390 e 780 px, comprese entrambe le lingue. Verificate unità, segni, scale, etichette e leggibilità; localizzati anche i separatori decimali dei testi SVG. Il diagramma stratificato dichiara esplicitamente di non essere in scala.

## Fonti consultate

- [MUR, Syllabus Fisica 2026/2027, unità 4](https://www.mur.gov.it/sites/default/files/2026-06/Syllabus_FISICA_%20finale%202026.pdf): copertura curricolare; testo integrale locale in `qa/fisica-syllabus.txt`.
- [MIT OpenCourseWare, Physics III: Vibrations and Waves, lecture notes](https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/resources/lecture-notes/): oscillazioni, sovrapposizione e onde meccaniche.
- [MIT OpenCourseWare, Lecture 11: Sound](https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/pages/part-i-mechanical-vibrations-and-waves/lecture-11/): natura longitudinale e velocità del suono.
- [MIT OpenCourseWare, Electromagnetics and Applications, lecture 22](https://ocw.mit.edu/courses/6-013-electromagnetics-and-applications-fall-2005/resources/lec22/): modello acustico lineare.
- [UNSW Physics, Sound: impedance, power and intensity](https://www.animations.physics.unsw.edu.au/jw/sound-impedance-intensity.htm): pressione efficace, impedenza e intensità.
- [UNSW Physics, Decibels](https://animations.physics.unsw.edu.au/jw/dB.htm): rapporti logaritmici e ipotesi delle conversioni fra pressione e intensità.
- [OpenStax, University Physics 1, Interference of Waves](https://openstax.org/books/university-physics-volume-1/pages/16-5-interference-of-waves) e [Sound Intensity](https://openstax.org/books/university-physics-volume-1/pages/17-3-sound-intensity): confronto delle formulazioni didattiche e delle condizioni del modello.

Testi, quesiti, dati combinati e disegni sono originali; nessun esercizio è copiato da una banca esterna.

## Controlli eseguiti

`node strumenti/verifica-semestre-filtro-bilingue.mjs fisica-semestre-filtro onde-meccaniche`: PASS, 230 file renderizzati, 2.024 formule, nessun errore e nessun avviso. Verificate strutture delle schede, soluzioni espandibili, quattro opzioni e indici, anteprime gratuite 1–3, collegamenti e ancore.

Il controllo aggiuntivo dell’autore ha confrontato tutte le 115 coppie e 1.012 formule per lingua, normalizzando virgola italiana/punto inglese e una parola tradotta in una formula. Il confronto per multinsieme consente il diverso ordine sintattico di dati nella traduzione; i quiz mantengono la stessa permutazione e la stessa chiave. Controllati 103 risultati numerici e geometrici, compresi integrale numerico del flusso di potenza lungo la corda e separazione dei fronti estratta dall’SVG Doppler. Non sono emerse discrepanze.

Evidenze riproducibili in `qa/fisica-semestre-filtro/onde-meccaniche/`: `validation.json`, `author-check.json`, `author-check.py`, render HTML, 48 PNG e 12 tavole di confronto. I Markdown e gli SVG di produzione sono la versione finale: gli script compositivi iniziali non vanno rieseguiti, perché sono seguiti da correzioni editoriali mirate.

Durante la lettura preliminare del revisore sono stati recepiti: velocità locale invariata quando frequenza e ampiezza cambiano reciprocamente; ipotesi di fascio stazionario e tensione costante; non dispersione per conservare la forma degli impulsi; geometria comune per sommare intensità; sinusoide per il rapporto picco/RMS; intervalli consecutivi nel quiz 15; modulo del Doppler angolare; diagrammi specifici per gli svolti 5 e 10 e correzione delle rotte teoria. La revisione indipendente e la verifica di integrazione/pubblicazione restano al coordinatore.

## Revisione indipendente conclusa

Revisore: coordinatore (`root`), distinto dall’autore. Letti integralmente tutti i 230 Markdown: teorie, enunciati, soluzioni, ogni alternativa e spiegazione dei 90 quiz, in entrambe le lingue. La lettura preliminare è stata completata confrontando tutte le differenze semantiche della versione congelata con le copie e gli hash conservati. Confrontata la copertura con ogni punto dell’unità 4 MUR. Le dieci ancore precedenti restano valide.

Ricalcolati separatamente tutti i 20 esercizi svolti e le 14 tracce; verificati anche 68 casi quantitativi o algebrici dei quiz. La lettura concettuale comprende tutti i 90 quesiti e tutte le alternative: nessuna seconda risposta corretta rilevata. Le domande distinguono ricostruzione dei parametri, convenzioni di fase, ipotesi sul mezzo, energia, geometria, pressione efficace e livelli; non sono una successione della medesima operazione con dati sostituiti.

Il revisore ha corretto o fatto correggere i rilievi elencati sopra. Nella versione finale ha inoltre esplicitato il regime stazionario nella legge dell’inverso del quadrato e il verso comune dei contributi progressivi nella somma delle intensità, in entrambe le lingue. Nel grafico della legge oraria è precisato che la pendenza è la velocità, evitando di confondere il segno della pendenza con l’intero valore della velocità.

Rigenerati dai file finali e ispezionati tutti i 48 PNG, 24 SVG a 390 e 780 px. Controllati etichette, unità, scale, versi, leggibilità e coerenza con il testo. Un calcolo indipendente sulle coordinate SVG verifica 15.640 punti delle curve di oscillazione, fase, interferenza e propagazione sferica; le distanze dei fronti Doppler restituiscono il rapporto di velocità 0,30. Il controllo usa tolleranze compatibili con l’arrotondamento delle coordinate e non sostituisce l’ispezione visiva.

Renderer finale del revisore: **230 file, 2.024 formule, zero errori e zero avvisi**. Teorie: 3.071 parole IT e 2.918 EN; mediana degli svolti 261/253 parole, spiegazioni quiz 45/41. Chiavi 23/23/22/22, identiche fra lingue, senza cicli. Evidenze in `qa/fisica-semestre-filtro/onde-meccaniche/root-review/`: `validation.json`, `independent-calculations.json`, `independent-quiz-calculations.json`, `independent-figure-checks.json`, `reviewed-hashes.json` e render.

**Esito della revisione del capitolo: superata.** La verifica della build dell’intera materia è separata. Non è stata eseguita una verifica interattiva della pagina completa nel browser; il limite dell’ambiente è dichiarato nel rapporto generale. Nessuna pubblicazione effettuata con questa revisione.

La finitura di conformità alla guida raccoglie tutta la prosa della teoria nei blocchi e dispone le frazioni matematiche in colonna. Le quattro coppie di nuovi contenitori conservano il testo e tutte le ancore; le 123 forme distinte di conversione delle frazioni italiane sono state rilette dal revisore, con valori e significato invariati. Verificata di nuovo la parità delle formule di tutte le 115 coppie IT/EN e rieseguito il renderer, sempre senza errori o avvisi. Le sole barre oblique residue sono nelle unità.
