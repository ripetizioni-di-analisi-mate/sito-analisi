# Verifica indipendente · revisione di chiarezza di Statistica e probabilità (21/11/2026)

Un altro agente ha riscritto la teoria di un capitolo di Statistica (italiano e inglese) e ha corretto le sue domande a tempo, seguendo `istruzioni-agenti/brief-chiarezza-statistica.md`. **Leggi quel brief per intero** e il capitolo modello `src/content/teoria/statistica/dati-e-frequenze.md`. Il tuo compito è controllare il lavoro e correggerlo direttamente nei file del capitolo. Repository: `/home/claude/sito-analisi`. Stessi divieti dell'autore: nessun comando git che modifica, nessun altro file.

File: teoria `src/content/teoria/statistica/<capitolo>.md` e `src/content-en/teoria/statistica/<capitolo>.md`; domande `src/content/domande/statistica/<capitolo>/` e `src/content-en/domande/statistica/<capitolo>/`. Originale: `git show HEAD:<percorso>`. Rapporto di lettura: `/home/claude/qa-statistica/rapporti/<capitolo>.md`. Rapporto dell'autore: `/home/claude/qa-statistica/correzioni/<capitolo>.md`.

## Che cosa controllare

1. **Ogni punto del rapporto di lettura è risolto.** Spunta i punti uno per uno; quelli rimasti li risolvi tu.
2. **Le tre regole di Carmine**, blocco per blocco:
   - prima la situazione con i numeri, poi il nome, poi la formula;
   - l'introduzione iniziale dice in concreto che cosa si calcola nel capitolo, a quale domanda risponde e come si collega agli altri capitoli (con il numero);
   - nessun verbo vago al posto del contenuto («conoscere», «descrivere», «studiare», «misurare», «permettere» usati da soli).
   Dove il testo è ancora astratto, lo riscrivi tu.
3. **Ordine delle nozioni**: rileggi il capitolo italiano dall'inizio alla fine; ogni termine, simbolo e sigla è definito prima o alla prima comparsa (o ha il richiamo al capitolo precedente). Usa `grep` sui capitoli precedenti.
4. **Correttezza**: ricalcola con Python ogni numero della teoria e, per ogni domanda modificata o riscritta, la risposta giusta; controlla che nessun'altra opzione sia difendibile e che il link porti a un'ancora esistente e pertinente.
5. **Vincoli tecnici e regole editoriali** del brief (ancore, titoli, figure, contenuti tutti presenti, frazioni in colonna, connettivi, niente frasi «da IA», grassetti).
6. **Lunghezza**: oltre 1,8 volte l'originale, togli ripetizioni ed esempi doppi (mai definizioni o passaggi).
7. **Inglese**: traduzione integrale e fedele del nuovo italiano (introduzione compresa) e delle domande modificate.

Alla fine: `python3 /home/claude/sito-analisi/strumenti/controlla_capitolo.py statistica <capitolo>` senza `ERRORE`.

## Rapporto

Aggiungi in fondo a `/home/claude/qa-statistica/correzioni/<capitolo>.md` una sezione «Verifica» con: che cosa hai corretto (con un esempio «Com'era / Com'è ora» se hai riscritto un blocco), errori trovati, lunghezza finale. Risposta finale: poche righe con l'esito.
