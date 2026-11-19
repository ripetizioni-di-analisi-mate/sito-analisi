# Migliorare gli esercizi svolti di Fondamenti di Informatica in C (19/11/2026)

Repository: /home/claude/sito-analisi (sito Astro di teoria ed esercizi). Non usare git, non lanciare la build.
Lavori su **un solo capitolo** di `informatica` (slug nel messaggio che ricevi) e tocchi solo:
- `src/content/svolti/informatica/<slug>/` (italiano)
- `src/content-en/svolti/informatica/<slug>/` (inglese)

Non toccare teoria, tracce (`dafare`), domande, altri capitoli, altre materie. Altri autori lavorano in parallelo sugli altri capitoli.

## Perché
Carmine confronta ogni materia con Analisi 1. In Informatica in C teoria, tracce e domande a tempo sono già al livello di Analisi 1; gli esercizi svolti sono al 55%. Le schede hanno 2 esercizi ciascuna (Analisi 1: quasi 3) e le parole per esercizio sono già buone (mediana 181 contro 207). Il difetto è quindi **il numero di esercizi**, non la loro lunghezza.

## Che cosa fai
1. **Un terzo esercizio in ognuna delle schede 1-8**: aggiungi in fondo `## Esercizio 3`, della **stessa tipologia** del titolo della scheda, un po' più impegnativo dei primi due (un caso limite, un ciclo in più, un errore da trovare, una funzione da completare o da correggere, una traccia d'esecuzione più lunga). Non uguale agli esercizi 1-2 con altri numeri.
2. **Una scheda nuova `9.md`** con 3 esercizi, su una tipologia d'esame del capitolo che le schede 1-8 non coprono (leggi i titoli e gli esercizi esistenti e le tracce in `src/content/dafare/informatica/<slug>/` per capire che cosa manca; tipico all'esame scritto di Fondamenti: scrivere una funzione completa con il suo contratto, trovare e correggere gli errori di un programma, prevedere l'output di un programma intero, tracciare la memoria). Frontmatter come le altre: `titolo` (al plurale, entro 45 caratteri), `gratis: false`, `teoria` (solo ancore che esistono nel file di teoria del capitolo: controllale con grep su `{#` in `src/content/teoria/informatica/<slug>.md`), `parole` (2-4 parole chiave).
3. **Inglese**: le stesse aggiunte in `src/content-en/svolti/informatica/<slug>/` (`## Exercise 3` in fondo a ciascuna scheda 1-8 e la scheda `9.md` intera), tradotte fedelmente come il resto della versione inglese (guarda una scheda inglese esistente per lessico e formato; il `titolo` di 9.md tradotto, `teoria` identica). Il codice C resta identico nelle due lingue, commenti compresi (sono già in inglese nel sito).

**Il testo esistente non si tocca**: niente riscritture, niente cambi a titoli, frontmatter, numerazione, `gratis` delle schede 1-8 (Studio guidato, motori di ricerca e indirizzi dipendono da lì). Unica eccezione: un errore vero in un esercizio esistente (risultato sbagliato, codice che non compila o non fa ciò che dice il testo). Correggilo con il minimo indispensabile e segnalalo nel rapporto.

## Prima di scrivere (obbligatorio)
1. Leggi `GUIDA-CONTENUTI.md` per intero.
2. Leggi la skill di scrittura: `/root/.claude/skills/synced/91e36f28-5687-4a5c-ba2a-91e5fd176dde_d4cbc623-8d44-4740-8b1e-b4778a1d8e85/scrittura-umana-carmine/SKILL.md`. Ogni frase nuova supera il suo controllo finale.
3. Leggi per intero la teoria del capitolo e tutte le 8 schede (italiano e inglese), così gli esercizi nuovi usano le stesse notazioni, lo stesso stile di codice (`unsigned`, `1u`, graffe su riga propria per le funzioni, nomi in inglese, `const` dove serve) e le stesse ipotesi esplicite sui domini (per esempio $0\leq n\leq 20$, `int` a 32 bit, assenza di overflow).

## Struttura di un esercizio (come gli esistenti)
- Traccia con le ipotesi esplicite (dominio dei valori, ampiezza dei tipi, che cosa si assume sul resto del programma).
- Blocco ```` ```c ```` con il codice.
- Calcolo o risultato: tabella dei valori, catena di chiamate in formula display, output esatto del programma in un blocco di codice, codice corretto o completato.
- Sotto, `<div class="spiegazione">` (riga vuota dopo il tag di apertura e prima di quello di chiusura) con la spiegazione a parole: una frase per passaggio, premessa, connettivo esplicito (quindi, poiché, perciò, allora), conclusione. Il nome della regola del linguaggio usata (promozione intera, cortocircuito di `&&`, decadimento del vettore a puntatore, durata automatica, comportamento non definito…) e perché si applica in quel punto.
- 180-280 parole fra traccia, calcolo e spiegazione.

## Stile
- Esposizione di fatti, niente tono prescrittivo («conviene», «è importante», «ricorda», «bisogna»), niente frasi a effetto o di raccordo, niente lineette lunghe, niente «non X ma Y», niente domande retoriche.
- Niente etichette meccaniche («Soluzione:», «Dati:», «Risultato:», «Verifica:»): frasi complete.
- Formule: frazioni in colonna, virgola decimale `{,}` in italiano (punto in inglese), `\leq`.
- Gli esercizi nuovi sono originali: niente copie da libri o prove d'esame.

## Qualità (l'errore più grave è un risultato sbagliato)
- Ogni frammento di codice nuovo va **compilato ed eseguito** con `gcc -std=c11 -Wall -Wextra -pedantic` (aggiungendo un `main` di prova dove il frammento non è un programma completo) in una cartella tua `/tmp/lavoro-informatica/<slug>/`. Ogni valore, output, tabella o traccia che scrivi deve coincidere con quello che stampa il programma. Per i casi con comportamento non definito o errore di compilazione voluti, spiega il motivo con il riferimento alla regola del linguaggio e controlla con `-fsanitize=address,undefined` o con il messaggio del compilatore che il caso sia davvero quello.
- Ricontrolla allo stesso modo anche gli esercizi 1-2 esistenti delle tue schede: se trovi un errore, correggilo (e nella versione inglese) e segnalalo.
- Frontmatter YAML valido: `python3 strumenti/yamlcheck.py <file…>` dalla radice del repository, sia sui file italiani sia sugli inglesi.
- Ogni `## Esercizio k` ha un blocco di traccia riconoscibile: subito dopo il titolo la frase della traccia, poi il codice (è ciò che il sito mostra nelle anteprime gratuite).

## Consegna
Rapporto breve in italiano: per ogni scheda il tema dell'esercizio 3; titolo e tipologia di 9.md; errori trovati negli esercizi esistenti e corretti; conferma che ogni codice nuovo è stato compilato ed eseguito con gli output coincidenti; esito di yamlcheck; elenco dei file toccati.
