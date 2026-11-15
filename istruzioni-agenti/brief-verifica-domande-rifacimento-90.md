# Verifica del rifacimento delle domande a tempo di un capitolo

Repository: /home/claude/ripetizioni-di-analisi-mate/sito-analisi. Non usare git, non lanciare la build. Lavori su un solo capitolo `src/content/domande/<materia>/<argomento>/` (e, per Algebra lineare, Matematica generale e Fisica 2, i file con lo stesso numero in `src/content-en/domande/<materia>/<argomento>/`).

Un altro autore ha riscritto le domande seguendo `istruzioni-agenti/brief-domande-rifacimento-90.md` (le 46–90; in Scienza delle costruzioni anche i doppioni fra le 15–45). Leggi per intero quel brief, `istruzioni-agenti/brief-domande.md`, `istruzioni-agenti/brief-verifica-domande.md`, `istruzioni-agenti/brief-verifica-domande-aggiuntive.md` e, per Statica e Scienza delle costruzioni, `istruzioni-agenti/brief-verifica-domande-statica.md`: i controlli valgono tutti. Notazioni nel brief della materia. Carica la skill **scrittura-umana-carmine** prima di correggere qualsiasi frase. Il piano dell'autore è in `/tmp/lavoro-domande/<materia>-<argomento>-90/piano.md`: usalo solo per sapere quali file sono stati riscritti, non fidarti dei suoi conti.

Gli studenti vedono la risposta corretta e la spiegazione subito dopo la conferma: una risposta segnata male è l'errore più grave possibile. Lavora in `/tmp/lavoro-verifica-domande/<materia>-<argomento>-90/`.

## Cosa fare
1. **Correttezza** di ogni domanda riscritta: risolvi da zero con sympy; `corretta` giusta; le altre tre sbagliate, diverse (valori numerici distanti almeno il 10%) e non difendibili; spiegazione corretta e completa; ipotesi esplicite; unità, segni, versi, convenzioni della materia.
2. **Ripetizioni (punto centrale della richiesta di Carmine: «cambiano solo il numero, le domande devono essere serie»)**: confronta ogni domanda riscritta con tutte le altre 89 del capitolo e con le tracce. È un doppione se chiede la stessa abilità sullo stesso oggetto con numeri diversi, se inverte dato e incognita di un'altra, se chiede la variazione o il rapporto fra due configurazioni di un oggetto già usato, o se ha lo stesso testo a stampo di un'altra. Usa anche `python3 strumenti/domande-simili.py src/content/domande/<materia>/<argomento> 0.7`, ma leggi le domande: il controllo testuale non basta. Riscrivi ogni doppione su una sezione della teoria poco coperta, con un oggetto nuovo, e ricontrollalo con sympy. Riporta le coppie trovate.
3. Figure: `node strumenti/anteprima_figure.mjs /tmp/lavoro-verifica-domande/<materia>-<argomento>-90/figure.png <file con figura…>`, guarda il PNG: dati coerenti con il testo, nessun risultato nella figura, assi orientati.
4. Inglese (Algebra lineare, Matematica generale, Fisica 2): per ogni file italiano riscritto c'è l'inglese con lo stesso numero, la stessa `corretta`, le stesse risposte nello stesso ordine e una spiegazione che traduce fedelmente (correggi l'inglese se correggi l'italiano).
5. Conteggi: 90 file (e 90 inglesi dove previsti); posizioni corrette 1-2-3-4 sulle 90 fra 20 e 25 ciascuna (riequilibra scambiando l'ordine delle risposte solo nei file riscritti, in entrambe le lingue); `python3 strumenti/yamlcheck.py` senza errori sui file toccati.
6. Correzioni minime, nello stile del sito.

## Rapporto (breve, in italiano, ultima risposta)
Domande verificate, errori trovati e corretti (file, che cosa era sbagliato, correzione), doppioni trovati e riscritti, conteggio finale delle posizioni, dubbi non risolti.
