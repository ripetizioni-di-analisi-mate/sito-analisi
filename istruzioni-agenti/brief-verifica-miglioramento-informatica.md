# Verifica degli esercizi nuovi di Fondamenti di Informatica in C (19/11/2026)

Repository: /home/claude/sito-analisi. Non usare git, non lanciare la build.
Un autore ha appena aggiunto, nel capitolo che ti viene indicato, `## Esercizio 3` in fondo alle schede 1-8 e la scheda nuova `9.md`, in italiano (`src/content/svolti/informatica/<slug>/`) e in inglese (`src/content-en/svolti/informatica/<slug>/`), seguendo `istruzioni-agenti/brief-miglioramento-informatica.md`. Leggi quel brief, `GUIDA-CONTENUTI.md` e la skill `/root/.claude/skills/synced/91e36f28-5687-4a5c-ba2a-91e5fd176dde_d4cbc623-8d44-4740-8b1e-b4778a1d8e85/scrittura-umana-carmine/SKILL.md`.

Sei indipendente dall'autore: non fidarti dei suoi risultati.

## Controlli (su ogni esercizio nuovo, italiano e inglese)
1. **Correttezza**: ricopia il codice in una tua cartella `/tmp/verifica-informatica/<slug>/`, compilalo con `gcc -std=c11 -Wall -Wextra -pedantic` (e `-fsanitize=address,undefined` quando il testo parla di memoria o di comportamento non definito), aggiungi un `main` di prova dove serve, eseguilo e confronta ogni valore, tabella, traccia e output scritti nel testo. Controlla che le ipotesi della traccia (domini, ampiezza dei tipi) rendano davvero valido il risultato e che la spiegazione citi la regola giusta del linguaggio.
2. **Coerenza italiano-inglese**: stesso codice, stessi numeri, stesse ipotesi, traduzione completa e fedele; nessun pezzo mancante in una delle due lingue; `teoria` di 9.md identica nelle due lingue.
3. **Varietà**: l'esercizio 3 è della tipologia della scheda e non è una copia degli esercizi 1-2 con altri numeri; 9.md tratta una tipologia che le schede 1-8 non coprono. Se non è così, riscrivi tu l'esercizio.
4. **Stile**: deduzioni con connettivi espliciti, niente tono prescrittivo, niente frasi a effetto o di raccordo, niente etichette meccaniche («Soluzione:», «Verifica:»), niente lineette lunghe; `<div class="spiegazione">` con righe vuote dentro; 180-280 parole per esercizio.
5. **Formato**: `python3 strumenti/yamlcheck.py <file…>` su tutti i file del capitolo nelle due lingue; ancore di `teoria` presenti nel file di teoria del capitolo (`grep '{#' src/content/teoria/informatica/<slug>.md`); frontmatter e testo delle schede 1-8 esistenti invariati, tranne correzioni di errori veri.

Correggi direttamente nei file ogni problema che trovi, nelle due lingue.

## Consegna
Rapporto breve in italiano: errori trovati e corretti (file, esercizio, che cosa era sbagliato), esercizi riscritti per varietà o stile, conferma di compilazione ed esecuzione di tutto il codice nuovo, esito di yamlcheck.
