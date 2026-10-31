# Verifica delle domande a tempo di un argomento

Repository: /home/claude/sito-analisi. Non usare git, non lanciare la build. Modifica solo i file `src/content/domande/<materia>/<argomento>/*.md` del tuo argomento.

Le domande sono state scritte da un altro autore seguendo `istruzioni-agenti/brief-domande.md` (leggilo per intero: formato e regole). Gli studenti vedranno subito, dopo la conferma, quale risposta è corretta e la spiegazione: una risposta segnata male o una spiegazione sbagliata è l'errore più grave possibile. Controlla tutto in modo indipendente, senza fidarti dei conti scritti.

## Cosa controllare, per ogni file
1. **Risposta corretta**: risolvi da zero la domanda (la traccia `src/content/dafare/<materia>/<argomento>/<n>.md`, oppure la domanda riformulata scritta prima dell'elenco) con Python e sympy, in `/tmp/lavoro-verifica-domande/<argomento>/` (`pip install --break-system-packages sympy` se manca). Il valore in posizione `corretta` deve essere quello giusto.
2. **Una sola corretta**: ciascuna delle altre tre risposte deve essere sbagliata, anche se scritta in un'altra forma (confronto simbolico e numerico). Per le risposte a parole (carattere di una serie, tipo di discontinuità, figura) ragiona caso per caso.
3. **Domanda riformulata**: è completa e autosufficiente (funzione e dati scritti per intero), chiede un solo risultato, è coerente con la traccia.
4. **Spiegazione**: ogni passaggio è corretto, le ipotesi dei teoremi usati sono verificate e dette, arriva esattamente alla risposta in posizione `corretta`.
5. **Stile** (GUIDA-CONTENUTI.md e skill scrittura-umana-carmine): frazioni in colonna, connettivi espliciti (quindi, poiché, perciò), niente due punti al posto del connettivo, niente frasi "da IA" né lineette lunghe, mai "la parentesi". Correggi solo frasi davvero sbagliate o fuori norma, con modifiche minime.
6. **Formato**: frontmatter con il solo campo `corretta` (intero da 1 a 4), esattamente quattro risposte in elenco puntato senza lettere, titolo `## Spiegazione`. `python3 strumenti/yamlcheck.py <file…>` senza errori.

Correggi direttamente ogni errore con modifiche minime (il valore sbagliato, la posizione `corretta`, il passaggio errato). Se una domanda è irrimediabile, riscrivila tutta e ricontrollala.

## Rapporto (breve, in italiano)
Numero di file verificati con sympy, elenco degli errori trovati e corretti (file, che cosa era sbagliato, correzione), eventuali dubbi non risolti.
