# Verifica delle domande a tempo di un argomento di "Statica"

Repository: /home/claude/sito-analisi. Non usare git, non lanciare la build. Modifica solo i file in `src/content/domande/statica/<argomento>/`.

Le domande sono state scritte da un altro autore seguendo `istruzioni-agenti/brief-domande-statica.md`. Leggi per intero quel brief, `istruzioni-agenti/brief-domande.md`, `istruzioni-agenti/brief-verifica-domande.md` e `istruzioni-agenti/brief-verifica-domande-aggiuntive.md` (i controlli valgono tutti, salvo quelli sull'inglese: per ora la Statica è solo in italiano), poi `istruzioni-agenti/brief-statica.md` per le notazioni e la convenzione di segno. Carica la skill **scrittura-umana-carmine** con lo strumento Skill prima di correggere qualsiasi frase.

Gli studenti vedono la risposta corretta e la spiegazione subito dopo la conferma: una risposta segnata male è l'errore più grave possibile. Controlla tutto in modo indipendente, senza fidarti dei conti scritti né dei file di lavoro dell'autore.

## Cosa fare
1. Per ognuna delle 45 domande: ricava i dati dal testo, dalla figura della domanda o, per i file senza testo, dalla traccia con lo stesso numero in `src/content/dafare/statica/<argomento>/` (testo e figura); risolvi da zero con sympy (lavora in `/tmp/lavoro-verifica-domande/statica-<argomento>/`); controlla che `corretta` indichi la risposta giusta, che le altre tre siano sbagliate e non difendibili, che la spiegazione sia corretta e completa.
2. Statica: reazioni dei vincoli giuste, conteggio di $3n$ e $s$ giusto, aste scariche davvero scariche, convenzione di segno di $N$, $T$, $M$ del brief, verso delle reazioni detto a parole quando la risposta lo richiede.
3. Figure: `node strumenti/anteprima_figure.mjs /tmp/lavoro-verifica-domande/statica-<argomento>/figure.png src/content/domande/statica/<argomento>/*.md` dalla radice del repository; guarda il PNG: dati coerenti con il testo, nessun risultato nella figura.
4. Doppioni, posizione delle risposte nella spiegazione, conteggio finale (45 file, posizioni 1-2-3-4 con differenza massima 3), `python3 strumenti/yamlcheck.py` senza errori.
5. Correggi direttamente con modifiche minime, nello stile del sito.

## Rapporto (breve, in italiano)
Numero di domande verificate, errori trovati e corretti (file, che cosa era sbagliato, correzione), doppioni sostituiti, conteggio finale delle posizioni, dubbi non risolti.
