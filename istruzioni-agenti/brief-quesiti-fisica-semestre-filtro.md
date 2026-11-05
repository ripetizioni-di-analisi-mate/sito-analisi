# Scrivere i quesiti della simulazione per un argomento di "Fisica per il semestre filtro di Medicina"

Repository: /home/claude/sito-analisi (sito Astro, in italiano). Non usare git, non lanciare la build, non toccare file fuori dalla cartella dei quesiti del tuo argomento. Altri autori scrivono in parallelo la teoria e gli esercizi dello stesso argomento e i quesiti degli altri argomenti.

## A che cosa servono
Questi quesiti alimentano la **simulazione della prova di Fisica** del semestre filtro (pagina `/fisica-semestre-filtro/simulazione`): 31 quesiti in 50 minuti, 21 a risposta multipla con cinque opzioni e 10 a completamento, presi da tutto il programma, corretti in automatico; +1 corretta, −0,1 errata, 0 non data. La calcolatrice non è ammessa. Lo studente vede il quesito durante la prova e la spiegazione solo dopo la consegna. Le cinque opzioni vengono **mescolate** a ogni prova.

## Prima di scrivere (obbligatorio)
1. Leggi `istruzioni-agenti/brief-fisica-semestre-filtro.md`: valgono il pubblico, la prova, le **notazioni comuni**, il **programma del tuo argomento** (rispetta i suoi confini) e le regole di qualità. Ignora la parte "Cosa produrre", sostituita da questo brief.
2. Leggi `GUIDA-CONTENUTI.md` (stile) e le regole di voce `/root/.claude/skills/synced/91e36f28-5687-4a5c-ba2a-91e5fd176dde_d4cbc623-8d44-4740-8b1e-b4778a1d8e85/scrittura-umana-carmine/SKILL.md`.
3. Guarda il formato delle domande a tempo già pubblicate, simile a questo: tre file in `src/content/domande/fisica-1/fluidi/` (per esempio 1.md, 10.md, 20.md). Le differenze di questo brief (cinque opzioni, completamento, frontmatter) valgono su quel modello.
4. Se nel frattempo esiste già il file di teoria del tuo argomento (`src/content/teoria/fisica-semestre-filtro/<slug>.md`), leggilo e usa le sue notazioni; se non c'è ancora, segui le notazioni del brief.

## Cosa produrre
Cartella `src/content/quesiti/fisica-semestre-filtro/<slug>/`, file `1.md … 36.md`:
- `1.md … 24.md`: **risposta multipla**;
- `25.md … 36.md`: **completamento**.

### Risposta multipla
```
---
tipo: multipla
corretta: 3
---

Testo del quesito, nello stile della prova ministeriale.

- prima opzione
- seconda opzione
- terza opzione
- quarta opzione
- quinta opzione

## Spiegazione

Spiegazione a parole, con i conti essenziali in formula.
```
- sempre **cinque** opzioni, in un elenco puntato semplice (senza lettere); `corretta` è la posizione (1–5) dell'opzione giusta nell'elenco del file; distribuisci le posizioni corrette in modo che ogni valore da 1 a 5 compaia da 3 a 7 volte sui 24 quesiti;
- metà circa dei quesiti chiede un calcolo, l'altra metà un ragionamento qualitativo o di proporzionalità ("se il raggio si dimezza, la resistenza…"), un'unità di misura, un ordine di grandezza, l'affermazione corretta tra cinque, la lettura di un grafico (in questo caso usa `::grafico`, vedi `istruzioni-agenti/brief-figure.md`);
- le opzioni sbagliate nascono da errori tipici (fattore 2 o 10, conversione sbagliata, raggio e diametro, proporzionalità diretta al posto di quella inversa, quarta potenza del raggio dimenticata, gradi Celsius al posto dei kelvin, segno invertito); nessuna opzione assurda; nessuna opzione del tipo "nessuna delle precedenti" o "tutte le precedenti", perché l'ordine viene mescolato;
- nella spiegazione mai rimandi alla posizione o alla lettera delle opzioni ("la terza", "la B"): si nomina il valore ("il risultato $40\,\mathrm{Pa}$ nasce usando il diametro al posto del raggio").

### Completamento
```
---
tipo: completamento
risposta: "12,5"
accetta: []
---

Testo che termina con il punto da completare, indicato con ……, e con l'unità già scritta: "… La velocità del sangue nella stenosi è …… $\mathrm{cm/s}$."

## Spiegazione

Spiegazione a parole, con i conti essenziali in formula.
```
- `risposta` è una stringa: un numero con la **virgola decimale** (`"12,5"`, `"0,25"`, `"-3"`) oppure in notazione scientifica scritta così: `"3·10^4"`, `"1,5·10^-3"` (punto a metà altezza `·`, esponente dopo `^`); oppure un termine tecnico breve, in minuscolo (`"emivita"`, `"isocora"`, `"convergente"`, `"longitudinale"`);
- `accetta`: altre forme equivalenti di un **termine** (`["tempo di dimezzamento"]`, `["onda longitudinale"]`); per i numeri lascialo vuoto, perché il sito confronta il valore numerico (accetta da solo `12,5`, `12.5`, `1,25·10^1`, `1,25e1`);
- il risultato numerico è **esatto** con i dati scelti (niente arrotondamenti): scegli i dati in modo che il conto a mano dia un numero finito e semplice; se un arrotondamento è inevitabile, il testo dice "Scrivere il risultato arrotondato all'intero." e `risposta` è il valore arrotondato;
- il testo indica l'unità in cui scrivere il numero, e la risposta deve essere **univoca**: un solo numero o un solo termine possibile (per i termini, chiediti se uno studente preparato potrebbe scrivere un sinonimo corretto e, in quel caso, aggiungilo ad `accetta` oppure riformula il quesito);
- metà circa dei completamenti è numerica, metà chiede un termine.

### Regole comuni
- Testi brevi (al massimo 4–5 righe), risolvibili a mano in meno di un minuto e mezzo; $g = 10\,\mathrm{m/s^2}$ dichiarato nel testo quando serve; costanti date nel testo quando servono.
- Copri **tutto** il programma del tuo argomento, con almeno un terzo dei quesiti sulle applicazioni biomediche indicate nel programma.
- Spiegazione: 2–5 frasi complete (premessa, connettivo, conclusione), in **grassetto** il nome della legge applicata; i conti in formula; nessun tono prescrittivo; mai "la parentesi"; frazioni in colonna.
- Quesiti originali, diversi tra loro (niente due quesiti con lo stesso conto e numeri cambiati), non copiati da libri, banche dati o prove ufficiali.
- Frontmatter YAML valido. Controllo: `python3 strumenti/yamlcheck.py <file…>`.

## Qualità (l'errore più grave è una risposta sbagliata)
Ricalcola OGNI quesito da capo con Python e sympy, da una cartella tua in `/tmp/quesiti-fsf/<slug>/`, non dal repository. Controlla che nei quesiti a risposta multipla il valore corretto compaia **una sola volta** tra le cinque opzioni e nella posizione indicata da `corretta`, e che nessuna opzione sbagliata sia equivalente al risultato in un'altra forma; nei completamenti che il valore di `risposta` sia esatto e nell'unità richiesta dal testo. Le figure si controllano con `node strumenti/anteprima_figure.mjs <png> <file…>` dalla radice del repository, guardando il PNG.

## Consegna
Rapporto breve in italiano: numero di file, conteggio delle posizioni corrette (1–5) nei 24 quesiti a risposta multipla, quanti completamenti numerici e quanti con un termine; conferma che ogni risposta è stata verificata con Python e che yamlcheck dà 0 errori.
