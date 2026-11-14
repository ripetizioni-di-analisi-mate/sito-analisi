# Domande a tempo di un argomento riscritto di "Matematica 4° anno": 90 domande

Repository: /home/claude/sito-analisi. Non usare git, non lanciare la build. Scrivi solo nella cartella `src/content/domande/matematica-superiori-4/<slug>/`.

L'argomento è appena stato riscritto (teoria, schede, tracce) e le domande esistenti (1–45) si riferiscono alle tracce vecchie, che non ci sono più. **Cancella tutti i file della cartella e scrivi da capo 90 domande**, come nella materia gemella del 5° anno (`src/content/domande/matematica-superiori-5/`, 90 per argomento).

## Prima di scrivere
1. Leggi per intero `istruzioni-agenti/brief-domande.md` (formato del file, regole per le risposte, regole di scrittura, controlli) e `istruzioni-agenti/brief-domande-aggiuntive.md` (domande senza traccia, copertura, varietà): valgono tutti, con i numeri cambiati come sotto. Ignora la parte sull'inglese.
2. Leggi `GUIDA-CONTENUTI.md` e carica la skill **scrittura-umana-carmine** con lo strumento Skill.
3. Leggi la teoria `src/content/teoria/matematica-superiori-4/<slug>.md` (tutte le sezioni), le 14 tracce `src/content/dafare/matematica-superiori-4/<slug>/*.md` e qualche domanda del 5° anno per il livello e il formato.

## Che cosa scrivere
- File `1.md … 14.md`: una domanda per ogni traccia, con lo stesso numero (formato di `brief-domande.md`: nessun testo prima dell'elenco se la domanda coincide con la traccia, altrimenti la domanda riformulata e autosufficiente su un solo risultato).
- File `15.md … 90.md`: domande senza traccia, ciascuna con il testo completo prima dell'elenco, distribuite su tutte le sezioni della teoria; circa due terzi di calcolo e un terzo di teoria applicata a un caso concreto. Nessuna domanda uguale o quasi uguale a un'altra.
- Livello: liceo, risolvibile in due minuti con carta e penna. Spiegazione da 3 a 6 frasi, che segue le regole di scrittura del sito.
- Posizione della corretta distribuita su tutte le 90 domande: ogni posizione 1, 2, 3, 4 corretta circa lo stesso numero di volte (differenza massima di 3).

## Controllo (obbligatorio)
Ricalcola con sympy ogni risposta corretta e verifica che le tre sbagliate siano davvero diverse (anche numericamente), lavorando in `/tmp/lavoro-domande/ms4-<slug>/`. `python3 strumenti/yamlcheck.py` su tutti i file. Conta le posizioni.

## Rapporto (breve, in italiano)
File scritti, domande di calcolo e di teoria, conteggio delle posizioni 1-2-3-4, conferma di sympy e di yamlcheck senza errori.
