# Verifica delle domande 46–90 di un argomento di Meccanica razionale o Idraulica

Repository: /home/claude/sito-analisi. Non usare git, non lanciare la build. Modifica solo i file `46.md` … `90.md` del tuo argomento in `src/content/domande/<materia>/<argomento>/` e, per Meccanica razionale, i corrispondenti in `src/content-en/domande/meccanica-razionale/<argomento>/`.

Le domande sono state scritte da un altro autore seguendo `istruzioni-agenti/brief-domande-46-90.md`. Leggi per intero quel brief, `istruzioni-agenti/brief-domande.md`, `istruzioni-agenti/brief-verifica-domande.md`, `istruzioni-agenti/brief-verifica-domande-aggiuntive.md` e il brief di verifica della materia (`istruzioni-agenti/brief-verifica-domande-meccanica-razionale.md` oppure `istruzioni-agenti/brief-verifica-domande-idraulica.md`): i controlli valgono tutti. Notazioni nel brief della materia (`brief-meccanica-razionale.md` oppure `brief-idraulica.md`). Carica la skill **scrittura-umana-carmine** prima di correggere qualsiasi frase.

Gli studenti vedono la risposta corretta e la spiegazione subito dopo la conferma: una risposta segnata male è l'errore più grave possibile. Controlla tutto in modo indipendente (lavora in `/tmp/lavoro-verifica-domande/<materia>-<argomento>-90/`), senza fidarti dei conti né dei file di lavoro dell'autore.

## Cosa fare
1. **Correttezza** di ognuna delle 45 domande nuove: risolvi da zero con sympy; `corretta` giusta; le altre tre sbagliate, diverse (valori numerici distanti almeno il 10%) e non difendibili; spiegazione corretta e completa; unità, segni, versi, convenzioni del brief della materia.
2. **Ripetizioni (punto centrale della richiesta di Carmine)**: confronta le 45 nuove con le 45 esistenti (1–45, comprese le tracce da cui derivano le 1–14) e fra loro. Una domanda è un doppione se chiede la stessa abilità sullo stesso sistema con numeri diversi, se inverte dato e incognita di un'altra, se chiede la variazione o il rapporto fra due configurazioni di un sistema già usato, o se ha lo stesso testo a stampo di un'altra. Riscrivi ogni doppione su una sezione della teoria poco coperta, con un sistema nuovo, e ricontrollalo con sympy. Riporta nel rapporto le coppie trovate.
3. Figure: `node strumenti/anteprima_figure.mjs /tmp/lavoro-verifica-domande/<materia>-<argomento>-90/figure.png <file con figura…>`, guarda il PNG: dati coerenti con il testo, nessun risultato nella figura.
4. Meccanica razionale: per ogni file italiano 46–90 c'è l'inglese con lo stesso numero, la stessa `corretta`, le stesse risposte nello stesso ordine e una spiegazione che traduce fedelmente (correggi l'inglese se correggi l'italiano).
5. Conteggi: 90 file (e 90 inglesi per Meccanica razionale); posizioni corrette 1-2-3-4 sulle 90 fra 20 e 25 ciascuna (riequilibra scambiando l'ordine delle risposte solo nelle 46–90, in entrambe le lingue); `python3 strumenti/yamlcheck.py` senza errori sui file toccati.
6. Correzioni minime, nello stile del sito.

## Rapporto (breve, in italiano)
Domande verificate, errori trovati e corretti (file, che cosa era sbagliato, correzione), doppioni trovati e riscritti, conteggio finale delle posizioni, dubbi non risolti.
