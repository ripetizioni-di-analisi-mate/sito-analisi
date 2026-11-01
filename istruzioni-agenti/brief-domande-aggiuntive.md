# Domande a tempo aggiuntive: portare un argomento a 45 domande (italiano e inglese)

Repository: /home/claude/sito-analisi. Non usare git, non lanciare la build. Scrivi **solo** file nuovi in `src/content/domande/<materia>/<argomento>/` e `src/content-en/domande/<materia>/<argomento>/` del tuo argomento. Non modificare i file che esistono già.

## Perché
Ogni sessione di "Domande a tempo" pesca **15 domande a caso** tra quelle dell'argomento. Carmine vuole almeno **45 domande per argomento**, così due sessioni di fila sembrano diverse. Le stesse domande compaiono anche nel capitolo finale "Prove d'esame", dove le domande di tutti gli argomenti della materia vengono mescolate tra loro.

## Prima di scrivere
1. Leggi per intero `istruzioni-agenti/brief-domande.md`: formato del file, regole per le risposte, regole di scrittura e controlli valgono tutti anche qui.
2. Leggi `GUIDA-CONTENUTI.md` e carica la skill **scrittura-umana-carmine** con lo strumento Skill.
3. Leggi la teoria dell'argomento `src/content/teoria/<materia>/<argomento>.md` (tutte le sezioni), le tracce `src/content/dafare/<materia>/<argomento>/*.md` e **tutte le domande già presenti** nella cartella delle domande, per non ripeterle.

## Che cosa scrivere
- Conta i file già presenti (k). Scrivi i file numerati da `k+1` a `45`, così l'argomento arriva a 45 domande.
- Questi numeri non hanno una traccia corrispondente: **ogni file nuovo ha il testo della domanda prima dell'elenco**, completo e autosufficiente (funzione, dati, insieme scritti per intero).
- Ogni domanda si legge da sola: verrà proposta in ordine casuale e mescolata con domande di altri argomenti. Niente rimandi ad altre domande, agli esercizi o alla pagina ("come nella domanda precedente", "nell'esercizio 3").
- **Copri tutto l'argomento**: distribuisci le domande su tutte le sezioni della teoria, in proporzione al loro peso nell'esame. Circa due terzi di calcolo (un limite, una derivata, un integrale, il carattere di una serie, le soluzioni di una disequazione, un parametro) e un terzo di teoria applicata (quale ipotesi di un teorema è soddisfatta, quale affermazione è vera, quale grafico o insieme corrisponde, un controesempio). Le domande di teoria restano concrete, su una funzione o un caso preciso, mai definizioni da recitare.
- **Varietà**: nessuna domanda nuova uguale o quasi uguale a una esistente (stessa funzione con un numero cambiato non basta, salvo che il caso cambi davvero, per esempio un parametro che porta a una forma indeterminata diversa). Varia funzioni, forme indeterminate, tecniche, tipi di risposta.
- Difficoltà come una domanda a risposta multipla d'esame: risolvibile in **due minuti** con carta e penna.
- Posizione della risposta corretta: conta **su tutte le 45 domande** dell'argomento (vecchie e nuove); alla fine ogni posizione 1, 2, 3, 4 deve essere corretta circa lo stesso numero di volte (differenza massima di 3 tra la più e la meno usata).

## Inglese
Per ogni file nuovo scrivi la traduzione `src/content-en/domande/<materia>/<argomento>/<n>.md` (stesso numero) seguendo **`istruzioni-agenti/brief-traduzione-domande.md`** (`## Spiegazione` → `## Explanation`, stessa posizione `corretta`, stesse quattro risposte nello stesso ordine). Per i termini inglesi usa la teoria inglese `src/content-en/teoria/<materia>/<argomento>.md`.

## Controllo (obbligatorio)
- Ricalcola con Python e sympy ogni risposta corretta e verifica che le tre sbagliate siano davvero diverse dalla corretta, anche numericamente (lavora in `/tmp/lavoro-domande/<materia>-<argomento>/`, `pip install --break-system-packages sympy` se manca). Per le domande di teoria ragiona caso per caso e scrivi il ragionamento nel tuo file di lavoro.
- `python3 strumenti/yamlcheck.py <file…>` dalla radice del repository su tutti i file nuovi, italiani e inglesi.
- Controlla che i file italiani e inglesi abbiano gli stessi numeri e la stessa `corretta`.

## Rapporto (breve, in italiano)
Numero di file già presenti, file nuovi scritti (italiano e inglese), divisione delle domande nuove tra le sezioni della teoria, numero di domande di calcolo e di teoria, conteggio finale delle posizioni corrette 1-2-3-4 sulle 45, conferma del controllo con sympy e di yamlcheck senza errori.
