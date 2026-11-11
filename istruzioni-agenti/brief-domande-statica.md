# Domande a tempo di "Statica": 45 domande per argomento (solo italiano)

Repository: /home/claude/sito-analisi. Non usare git, non lanciare la build. Scrivi **solo** nella cartella `src/content/domande/statica/<argomento>/` del tuo argomento. La versione inglese si farà in seguito: non scrivere in `src/content-en/`.

## Prima di scrivere
1. Leggi per intero `istruzioni-agenti/brief-domande.md` (formato del file, regole per le risposte, regole di scrittura, controlli) e `istruzioni-agenti/brief-domande-aggiuntive.md` (domande senza traccia, copertura, varietà): valgono tutte, con le differenze scritte qui.
2. Leggi `GUIDA-CONTENUTI.md`, `istruzioni-agenti/brief-statica.md` (notazioni e convenzione di segno della materia) e carica la skill **scrittura-umana-carmine** con lo strumento Skill.
3. Leggi la teoria `src/content/teoria/statica/<argomento>.md`, le schede svolte e tutte le tracce `src/content/dafare/statica/<argomento>/*.md` con le loro soluzioni.

## Che cosa scrivere
- **File 1–14**: una domanda per ogni traccia, con lo stesso numero, secondo `brief-domande.md`. Se la domanda coincide con la traccia (un solo risultato), prima dell'elenco non si scrive nulla: il sito mostra il testo della traccia con la sua figura. Se la traccia chiede più risultati, scrivi prima dell'elenco la domanda riformulata e autosufficiente che chiede **un solo risultato**, con la figura della struttura ripetuta (la stessa riga `::struttura` della traccia) quando la domanda la richiede.
- **File 15–45**: domande nuove con il testo prima dell'elenco, secondo `brief-domande-aggiuntive.md`, distribuite su tutte le sezioni della teoria. Circa due terzi di calcolo (una reazione, una forza in una cerniera, lo sforzo in un'asta, un valore di $M$ o $T$ in una sezione, il momento massimo, un baricentro, un momento d'inerzia, la posizione di un centro di rotazione, l'ordinata di una linea di influenza) e un terzo di teoria applicata a un caso preciso (la struttura in figura è labile, isostatica o iperstatica; quante reazioni esplica un vincolo; quale asta è scarica; in quale punto il diagramma ha un salto; quale diagramma corrisponde al carico; verso di una reazione).
- Le domande possono contenere una figura `::struttura` (sintassi nell'intestazione di `src/plugins/struttura.mjs`) su una riga a sé, dopo il testo e prima dell'elenco, separata da righe vuote: la Statica si legge sui disegni. Nella figura solo i dati, mai il risultato. Strutture piccole: si risolvono in **due minuti** con carta e penna (al massimo tre incognite per l'equilibrio, numeri semplici).
- Le risposte possono essere valori con unità e verso ("$6\,\mathrm{kN}$ verso l'alto"), coppie di valori, brevi frasi. Le sbagliate sono errori tipici della Statica: braccio sbagliato, risultante del carico distribuito applicata nel punto sbagliato (per il triangolare a metà invece che a un terzo), verso opposto, carico distribuito dimenticato nell'equazione di momento, conteggio dei vincoli sbagliato (cerniera tra tre corpi contata come doppia), segno della convenzione invertito, $\dfrac{qL^2}{4}$ al posto di $\dfrac{qL^2}{8}$.
- Posizione della risposta corretta distribuita sulle 45 (differenza massima 3 tra la posizione più e meno usata).

## Controllo (obbligatorio)
- Ricalcola con Python e sympy ogni risposta corretta e verifica che le tre sbagliate siano davvero diverse e non difendibili (lavora in `/tmp/lavoro-domande/statica-<argomento>/`). Per le domande di teoria scrivi il ragionamento nel file di lavoro.
- Disegna tutte le figure delle domande: `node strumenti/anteprima_figure.mjs /tmp/lavoro-domande/statica-<argomento>/figure.png src/content/domande/statica/<argomento>/*.md` dalla radice del repository, 0 problemi, e guarda il PNG.
- `python3 strumenti/yamlcheck.py` dalla radice del repository, senza errori.

## Rapporto (breve, in italiano)
File scritti, domande riformulate tra 1 e 14, divisione delle 15–45 tra le sezioni della teoria, numero di domande con figura, conteggio delle posizioni corrette 1-2-3-4, conferma del controllo con sympy, delle figure e di yamlcheck.
