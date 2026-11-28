# Pulizia delle domande a tempo: imperativi, doppioni, simboli che tradiscono la risposta (28/11/2026)

Repository: `/home/claude/sito-analisi`. Non usare git, non lanciare la build. Lancia Python sempre con `python3 -I` (in `/tmp` c'è un `glob.py` estraneo). Lavori **solo** sui capitoli del tuo lotto: `/home/claude/rev2/lotti/<lotto>.json`.

## Prima di cominciare
Leggi `GUIDA-CONTENUTI.md`, `istruzioni-agenti/brief-domande.md`, il brief delle domande della materia se c'è (`ls istruzioni-agenti | grep <materia>`), la sezione della materia in `CLAUDE.md` e carica la skill **scrittura-umana-carmine** con lo strumento Skill. Per ogni capitolo del lotto leggi la teoria e **tutte le 90 domande** (italiano; l'inglese è in `src/content-en/domande/…` con gli stessi numeri).

## Che cosa contiene il lotto
Per ogni capitolo `materia/capitolo`:
- `imperativo`: numeri delle domande con un verbo all'imperativo o all'infinito iussivo nel testo («Calcola», «Determinare», «Risolvi», «Considera»…);
- `simbolo`: domande in cui solo la risposta corretta ha «≃» o «\approx», così si riconosce a colpo d'occhio;
- `coppie`: coppie `[somiglianza, a, b]` di domande con testo simile (numeri tolti). **Molte sono solo aperture uguali** («Quanto vale il limite…»): vanno lette;
- `artificiose: true`: il capitolo ha situazioni artificiose (sensori, display, archivi, algoritmi che «arrotondano», persone che «sostengono») da riscrivere in modo naturale;
- `coordinate: true` (Matematica 2° anno): i punti si scrivono con il punto e virgola, $(3;-4)$, come nel capitolo Piano cartesiano; le coppie con la virgola restano solo per gli intervalli $(a,b)$ e per i vettori se la teoria li scrive così. Questa regola vale nel capitolo per teoria, schede svolte, esercizi da fare e domande (italiano e inglese).

## Che cosa fare
1. **Imperativi**: trasforma la richiesta in una domanda diretta, con la modifica più piccola possibile («Calcola l'area del triangolo.» → «Quanto vale l'area del triangolo?»; «Risolvi l'equazione…» → «Quali sono le soluzioni dell'equazione…?»; «Considera la funzione f… Qual è…» → «Sia data la funzione f… Qual è…»). Stesso intervento nel file inglese («Find…» → «What is…?»). Risposte, `corretta` e spiegazione non cambiano, salvo che la spiegazione contenga anch'essa una violazione delle regole.
2. **Simbolo solo nella corretta**: rendi le risposte omogenee (tutte con «\approx» se sono valori arrotondati, oppure nessuna, con l'arrotondamento detto nel testo).
3. **Coppie**: per ogni coppia leggi le due domande. Se sono un doppione vero (stessa abilità sulla stessa situazione con altri numeri, dato e incognita invertiti, stesso testo a stampo con oggetti scambiati), riscrivi **una** delle due (non una domanda a testo vuoto, cioè senza testo proprio; di preferenza quella con il numero più alto) su una situazione che nel capitolo non c'è ancora, sulla stessa abilità e allo stesso livello. Se chiedono cose diverse, lasciale: al massimo riformula l'apertura se è identica parola per parola.
4. **Situazioni artificiose** (solo dove il lotto lo dice): riscrivi la domanda in modo naturale, da manuale o da compito d'esame, tenendo abilità, dati essenziali e, se possibile, risposta e `corretta`.
5. Ogni file che riscrivi (punti 3 e 4) segue le regole delle domande: 4 risposte (5 per TOLC), sbagliate da errori tipici plausibili e senza commenti, valori distanti almeno il 10% dalla corretta, nessuna difendibile; spiegazione di 3-6 frasi con deduzioni complete (premessa, connettivo, conclusione) che arriva al risultato; frazioni in colonna, virgola decimale `{,}` in italiano e punto in inglese, nessuna lineetta «—», niente «la parentesi», graffa solo per condizioni da soddisfare insieme; nessun rimando alla posizione delle risposte. Se la materia mette il rimando alla teoria (`[Teoria](…#id)`, per esempio Matematica 3° anno), mettilo con l'ancora giusta. Inglese: stessa `corretta`, stesse risposte nello stesso ordine, traduzione fedele.
6. **Studio guidato**: se la materia ha la classificazione (`abilita["<materia>/<capitolo>"]` in `src/data/studio-guidato-livelli.json`, per esempio Logica per concorsi) e riscrivi una domanda, dai `[livello, indice dell'abilità]` nell'esito. Non modificare il file JSON.

Non toccare domande fuori dal lotto e non riscrivere domande che vanno bene: questo lavoro corregge difetti precisi, non è una riscrittura del capitolo.

## Controllo (obbligatorio)
- Ricalcola con Python e sympy le risposte delle domande riscritte.
- `python3 -I strumenti/yamlcheck.py <file toccati>` senza errori.
- Figure toccate: `node strumenti/anteprima_figure.mjs /tmp/pul-<lotto>.png <file…>`, 0 problemi, e guarda il PNG.
- Dopo le riscritture rilancia il confronto delle coppie del capitolo e controlla che le tue domande nuove non somiglino ad altre.

## Esito
Scrivi `/home/claude/rev2/esiti/<lotto>.json`: lista di voci `{"file": "<percorso italiano>", "intervento": "imperativo" | "simbolo" | "doppione" | "artificiosa" | "coordinate", "riscritta": true|false, "livello": [l, i] | null, "nota": "<una riga>"}`. Poi, come ultima risposta, un rapporto breve in italiano: quanti file per tipo di intervento, coppie lette e doppioni veri riscritti, problemi rimasti.

## Secondo giro: situazioni artificiose (lotti `/home/claude/rev2/lotti-a/aNN.json`)
Ogni capitolo ha `artificiose_n`: le domande il cui testo contiene un oggetto o un personaggio che spesso fa da pretesto (sensore, display, archivio, programma, app, contatore, robot, foglio di calcolo, calcolatrice, registrazione, dispositivo…). Leggile una per una:
- se l'oggetto fa parte in modo naturale del problema (un problema di fisica con un sensore di posizione descritto come in un libro di testo, la registrazione di un suono in acustica), lasciala;
- se è un pretesto (lo strumento «arrotonda», «segnala», «memorizza», il programma «calcola», qualcuno «sostiene» o «scrive»), riscrivila come domanda da manuale o da compito d'esame, tenendo abilità, livello, dati essenziali e, se possibile, risposta e `corretta` (strada 4 del brief, con tutte le regole del punto 5).
Esito con `"intervento": "artificiosa"` e `"riscritta": true|false`; nella nota scrivi perché l'hai lasciata o che cosa hai cambiato.
