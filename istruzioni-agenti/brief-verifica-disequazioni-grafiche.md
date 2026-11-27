# Verifica indipendente · Analisi 2, capitolo «Disequazioni grafiche»

Repository: `/home/claude/sito-analisi`. **Non usare git, non lanciare la build.** Sei il verificatore: non hai scritto questi file. Correggi direttamente ogni errore che trovi nei file della tua consegna (solo quelli) e riportalo nel rapporto.

Leggi prima: `istruzioni-agenti/brief-disequazioni-grafiche.md` (le regole che gli autori dovevano seguire, la sintassi delle figure, le tracce fissate), `GUIDA-CONTENUTI.md`, la teoria `src/content/teoria/analisi-2/disequazioni-grafiche.md`, e carica la skill **scrittura-umana-carmine**.

## 1. Matematica (da zero, con Python)

Lavora in `/tmp/lavoro-dg/verifica-<tuo-nome>/`. Per **ogni** esercizio e **ogni** domanda, senza fidarti del testo:
- rifai il conto: completamento dei quadrati, vertice, centro, raggio, semiassi, asintoti, intersezioni (sympy);
- controlla la regione dichiarata con almeno 500 punti a caso nel riquadro della figura: la descrizione a parole, la disequazione della traccia e la stringa `regione` della figura devono dare lo stesso esito su tutti i punti (scrivi una funzione che valuta la stringa `regione`: condizioni separate da `;` in un sistema, sistemi separati da `|` in unione, `^` potenza);
- frontiera: con `<`, `>`, `!=` è esclusa (tratteggiata), con `<=`, `>=`, `=` è compresa; nei sistemi i punti di incontro fra una frontiera compresa e una esclusa sono esclusi e nella figura hanno il pallino `vuoto`; i punti indicati in `punti` stanno davvero dove il testo dice (sulla curva, nel vertice, nel centro);
- domini normali: gli estremi $a$, $b$ (o $c$, $d$) e le funzioni $g_1 \leq g_2$ (o $h_1 \leq h_2$) descrivono esattamente la regione (confronto su punti a caso); coordinate polari corrette;
- scomposizione: tratti di frontiera con l'intervallo giusto della variabile libera o del parametro, vertici giusti, insieme limitato/chiuso dichiarato correttamente;
- domande: la risposta indicata da `corretta` è giusta e **nessuna delle tre sbagliate è difendibile** (né equivalente alla giusta scritta in altra forma, né giusta per un'altra lettura ragionevole del testo). Se una domanda è ambigua, riscrivi il testo o la risposta sbagliata, senza cambiare `corretta` se possibile.

## 2. Figure

`node strumenti/anteprima_figure.mjs /tmp/lavoro-dg/verifica-<tuo-nome>.png <file…>` (a gruppi di 10-15 file) e apri i PNG: ogni figura mostra la regione del testo, la frontiera con il tratto giusto, vertici e centri nel punto giusto, tutto dentro il riquadro, `uguale=1` presente, didascalia con le frazioni in colonna. Nelle domande «dalla figura alla disequazione» la didascalia non rivela la risposta e la figura distingue davvero la risposta giusta dalle sbagliate.

## 3. Forma e lingua

- Frontmatter: `python3 strumenti/yamlcheck.py <file…>`; `teoria` contiene solo ancore dell'elenco del brief; `gratis: true` solo nelle schede 1-3; titoli come nel brief.
- Schede: `## Esercizio k`, traccia, calcolo in display, figura, `<div class="spiegazione">` con righe vuote; la spiegazione dice come si riconosce la curva, come si ottiene la forma da disegnare, perché la regione è quella, se la frontiera è compresa. Passaggi tutti espliciti.
- Esercizi da fare: traccia, `:::soluzione` con il solo risultato e la figura.
- Domande: quattro risposte, `## Spiegazione` di 3-6 frasi, nessun richiamo alla posizione delle risposte, posizioni corrette distribuite.
- Lingua, frase per frase: connettivo esplicito in ogni deduzione, i due punti non sostituiscono un connettivo, niente tono prescrittivo, niente frasi a effetto o di riempimento, niente «la parentesi», niente etichette di difficoltà, frazioni in colonna, virgola decimale `{,}`, graffa solo per condizioni da soddisfare insieme, nessun rimando alla struttura della pagina. Riscrivi le frasi che non rispettano la regola (correzione puntuale, non riscrittura dell'esercizio).
- `node strumenti/anteprima_pagina.mjs /tmp/lavoro-dg/verifica-<nome>-pagina.png <file.md>` su almeno tre file a campione: 0 formule con errore, blocchi resi bene.

## 4. Domande ripetitive (solo per chi verifica le domande)

Leggi tutte le 90 domande del capitolo (anche quelle fuori dalla tua consegna) e segnala le coppie che sono la stessa situazione con altri numeri o con dato e incognita scambiati; riscrivi quella che sta nella tua consegna. Lancia anche `python3 strumenti/domande-simili.py src/content/domande/analisi-2/disequazioni-grafiche 0.7`.

Controlla il file `/home/claude/sg-classi/dg-<primo>-<ultimo>.json` della tua consegna: una voce per domanda, livello 1-3 sensato rispetto al lavoro richiesto, abilità coerente con l'argomento (indici nel brief). Correggi le voci sbagliate; se riscrivi una domanda aggiorna la sua voce.

## Rapporto (breve, in italiano)

Numero di file controllati; elenco degli errori di matematica trovati e corretti (file, che cosa c'era, che cosa c'è ora); numero di frasi riscritte per la lingua con due esempi «com'era / com'è ora»; figure corrette; per le domande: doppioni riscritti e conteggio finale delle posizioni corrette.
