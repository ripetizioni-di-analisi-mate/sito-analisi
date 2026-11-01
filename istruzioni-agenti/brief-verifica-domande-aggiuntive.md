# Verifica delle domande aggiuntive di un argomento (italiano e inglese)

Repository: /home/claude/sito-analisi. Non usare git, non lanciare la build. Modifica solo i file delle domande del tuo argomento, in `src/content/domande/<materia>/<argomento>/` e `src/content-en/domande/<materia>/<argomento>/`, e solo i file dal numero indicato nel compito in poi (le domande precedenti sono già state verificate).

Le domande sono state scritte da un altro autore seguendo `istruzioni-agenti/brief-domande-aggiuntive.md`. Leggi per intero quel brief, `istruzioni-agenti/brief-domande.md` e `istruzioni-agenti/brief-verifica-domande.md`: i controlli di quest'ultimo valgono tutti, con le aggiunte qui sotto.

Gli studenti vedono la risposta corretta e la spiegazione subito dopo la conferma: una risposta segnata male è l'errore più grave possibile. Controlla tutto in modo indipendente, senza fidarti dei conti scritti né dei file di lavoro dell'autore.

## Aggiunte
1. **Ogni domanda da sola**: testo completo prima dell'elenco, nessun rimando ad altre domande o alla pagina. Ricalcola da zero con Python e sympy (lavora in `/tmp/lavoro-verifica-domande/<materia>-<argomento>/`).
2. **Nessuna risposta sbagliata difendibile**: per ogni risposta sbagliata chiediti se uno studente potrebbe sostenere che è corretta anche lei. Casi già trovati: un sottointervallo di quello di crescenza tra le sbagliate ("su quale intervallo è crescente?" ammette anche il sottointervallo: si chiede "il più ampio intervallo"); un'affermazione che è conseguenza di quella corretta; una circonferenza tra le risposte a "quale è un'ellisse?"; una seconda descrizione dello stesso insieme. Correggi cambiando la risposta sbagliata o precisando la domanda.
3. **Doppioni**: nessuna domanda nuova uguale o quasi uguale a un'altra dell'argomento (anche tra le vecchie). Se ne trovi, riscrivine una su una sezione della teoria poco coperta e ricontrollala.
4. **Inglese**: per ogni file italiano esiste il file inglese con lo stesso numero, la stessa `corretta`, le stesse quattro risposte nello stesso ordine, e la spiegazione traduce fedelmente quella italiana (correggi l'inglese se correggi l'italiano). Regole in `istruzioni-agenti/brief-traduzione-domande.md`.
5. **Conteggi finali**: 45 file italiani e 45 inglesi; posizioni corrette 1-2-3-4 distribuite sulle 45 (differenza massima 3). Se devi riequilibrare, scambia l'ordine delle risposte in qualche domanda nuova e aggiorna `corretta` in entrambe le lingue.
6. `python3 strumenti/yamlcheck.py <file…>` su tutti i file toccati, senza errori.

## Rapporto (breve, in italiano)
Numero di file verificati, errori trovati e corretti (file, che cosa era sbagliato, correzione), doppioni sostituiti, conteggio finale delle posizioni, eventuali dubbi non risolti.
