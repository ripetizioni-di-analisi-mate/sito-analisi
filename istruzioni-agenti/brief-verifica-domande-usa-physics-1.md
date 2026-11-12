# Verificare le domande a tempo di un argomento di "University Physics I · Mechanics"

Repository: `/home/claude/sito-analisi`. Sei il **secondo lettore** delle 90 domande a tempo di un argomento, scritte da un altro autore con `istruzioni-agenti/brief-domande-usa-physics-1.md`. Trovi e correggi gli errori; non riscrivi ciò che è giusto.

Non usare git, non lanciare la build, non toccare file fuori da `src/content-us/domande/physics-1-mechanics/<slug>/`.

## Prima di cominciare
Leggi `istruzioni-agenti/brief-domande-usa-physics-1.md` e la teoria dell'argomento `src/content-us/teoria/physics-1-mechanics/<slug>.md`. Le domande devono stare dentro quella teoria, con le sue notazioni.

## 1. La risposta giusta è giusta, ed è l'unica
Per **ogni** domanda, senza fidarti del valore di `corretta`:
- risolvi da zero, con `python3` e sympy da una cartella tua nello scratchpad, ogni domanda di calcolo; per quelle di concetto ragiona per esteso;
- controlla che la risposta indicata da `corretta` sia quella giusta, con unità, segno e arrotondamento corretti;
- controlla che **nessuna** delle altre tre sia difendibile sotto una lettura ragionevole del testo. È l'errore più grave che può avere una domanda a tempo: lo studente che ragiona bene e viene segnato sbagliato. Casi tipici: due risposte equivalenti scritte in modi diversi; un intervallo contenuto in un altro; una risposta vera ma meno completa; un testo che non dice quale grandezza si chiede (modulo o componente, istantanea o media); un dato mancante che rende possibili due risposte;
- le risposte numeriche sbagliate distano almeno il 10% dalla giusta (salvo quando la domanda chiede proprio come scrivere un risultato, per esempio le cifre significative);
- la spiegazione dimostra la risposta giusta senza salti e non nomina mai la posizione di una risposta.

## 2. Testo e formato
- Il testo della domanda c'è sempre e si capisce da solo.
- Ipotesi fisiche dichiarate dove servono; $g = 9.81\,\mathrm{m/s^2}$ salvo dichiarazione diversa.
- Inglese americano da manuale, connettivi espliciti, niente frasi "da IA", niente lineette lunghe, niente domande retoriche, niente etichette di difficoltà.
- Punto decimale; frazioni con `\dfrac`; unità in `\mathrm` con `\,`.
- Ogni file ha esattamente 4 risposte e la sezione `## Explanation`; `corretta` fra 1 e 4.
- Distribuzione di `corretta` sulle quattro posizioni circa uniforme (fra 18 e 27 per posizione) e senza schemi regolari.
- Nessun doppione fra le 90 domande; nessuna domanda che copi una traccia (`src/content-us/dafare/physics-1-mechanics/<slug>/`) o un esercizio svolto dello stesso argomento.
- `python3 strumenti/yamlcheck.py <file…>` deve dare 0 errori.

## Consegna
Rapporto breve in italiano: il numero di domande corrette per ciascun tipo di errore (risposta indicata sbagliata, risposta sbagliata difendibile, spiegazione con errori, testo ambiguo, formato), con il numero del file; come hai verificato; la distribuzione finale di `corretta`. Se in un'area non hai trovato nulla, dillo.
