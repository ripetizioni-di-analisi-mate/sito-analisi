# Verifica delle domande a tempo di un argomento dei concorsi

Repository: /home/claude/sito-analisi. Non usare git, non lanciare la build. Modifica solo i file `src/content/domande/<materia>/<argomento>/*.md` del tuo argomento.

Le domande sono state scritte da un altro autore seguendo `istruzioni-agenti/brief-domande-concorsi.md` (leggilo per intero: formato e regole), insieme al brief della materia (`istruzioni-agenti/brief-matematica-concorsi.md` o `brief-logica-concorsi.md`). Le domande finiscono anche nella simulazione della prova preselettiva, corretta in automatico: una risposta segnata male, due risposte entrambe corrette o una domanda che ammette due letture sono gli errori più gravi possibili. Controlla tutto in modo indipendente, senza fidarti dei conti scritti né dei file di lavoro dell'autore.

## Cosa controllare, per ogni file
1. **Risposta corretta**: risolvi da zero la domanda con Python in `/tmp/lavoro-verifica-domande-concorsi/<materia>-<argomento>/` (sympy, `fractions`, tavole di verità con `itertools.product`, enumerazione dei modelli per i sillogismi, enumerazione completa delle assegnazioni con soluzione **unica** per deduzioni e veri/bugiardi, `datetime` per i calendari, enumerazione dei casi per combinatoria e probabilità). Il valore in posizione `corretta` deve essere quello giusto.
2. **Una sola corretta e nessuna sbagliata difendibile**: ciascuna delle altre tre risposte è falsa, anche scritta in un'altra forma; nessuna è una conseguenza della corretta, un caso particolare, un arrotondamento accettabile o una frase equivalente.
3. **Domanda**: completa e autosufficiente, con tutte le ipotesi esplicite ("o" inclusiva o esclusiva, chi dice sempre il vero o mente sempre, anno bisestile, con o senza reimmissione, IVA inclusa o esclusa); una sola lettura possibile. Se ammette due letture con risposte diverse, riscrivila.
4. **Spiegazione**: ogni passaggio è corretto e porta esattamente alla risposta in posizione `corretta`; nessun rimando alla posizione o alla lettera delle risposte ("la prima", "l'opzione B"); nessun rimando ad altre domande o alla pagina.
5. **Doppioni**: nessuna domanda uguale o quasi uguale a un'altra dell'argomento, né a un esercizio svolto o a una traccia (`src/content/svolti/…`, `src/content/dafare/…`). Se ne trovi, riscrivine una su una sezione della teoria poco coperta e ricontrollala.
6. **Stile** (GUIDA-CONTENUTI.md e regole di voce indicate nel brief): frazioni in colonna, virgola decimale `{,}`, connettivi espliciti, niente due punti al posto del connettivo, niente frasi "da IA" né lineette lunghe, mai "la parentesi". Correggi solo frasi davvero sbagliate o fuori norma, con modifiche minime.
7. **Formato e conteggi**: 45 file numerati da 1 a 45; frontmatter con il solo campo `corretta` (intero da 1 a 4); testo prima dell'elenco in ogni file; esattamente quattro risposte senza lettere; titolo `## Spiegazione`. Posizioni corrette 1-2-3-4 da 10 a 13 volte ciascuna: se devi riequilibrare, scambia l'ordine delle risposte e aggiorna `corretta`. `python3 strumenti/yamlcheck.py <file…>` senza errori.

Correggi direttamente ogni errore con modifiche minime. Se una domanda è irrimediabile, riscrivila tutta e ricontrollala.

## Rapporto (breve, in italiano)
Numero di file verificati con Python, elenco degli errori trovati e corretti (file, che cosa era sbagliato, correzione), doppioni sostituiti, conteggio finale delle posizioni, eventuali dubbi non risolti.
