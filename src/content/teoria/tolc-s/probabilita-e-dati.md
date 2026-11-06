---
titolo: "Probabilità e dati per il TOLC-S"
sommario: "Conteggi, eventi indipendenti, probabilità condizionata, mediana e lettura delle tabelle."
---

Il modello viene prima del calcolo. Elenca gli esiti possibili, chiarisci se sono equiprobabili e controlla se l'ordine o il reinserimento cambiano il problema. La probabilità è compresa fra zero e uno: un risultato esterno a questo intervallo indica un errore.

## Insiemi ed esiti

In un esperimento con un numero finito di esiti equiprobabili, la probabilità di un evento è il rapporto tra esiti favorevoli ed esiti possibili. Nel lancio di un dado regolare i sei risultati hanno la stessa probabilità; in un dado truccato questo modello non vale.

Per due lanci di una moneta regolare gli esiti ordinati sono TT, TC, CT, CC. Ottenere una sola testa comprende due esiti e ha probabilità $2/4$. «Almeno una testa» comprende tutti gli esiti tranne CC e ha probabilità $3/4$.

## Unione e complemento

Per il complemento vale $P(A^c)=1-P(A)$. Per due eventi $P(A\cup B)=P(A)+P(B)-P(A\cap B)$. Se sono disgiunti, la probabilità dell'intersezione è zero e le probabilità si sommano direttamente.

«Ottenere uno» e «ottenere due» in un unico lancio sono disgiunti. «Ottenere un numero pari» e «ottenere un numero maggiore di tre» non lo sono: quattro e sei appartengono a entrambi.

## Indipendenza e condizionamento

Se gli eventi sono indipendenti, $P(A\cap B)=P(A)P(B)$. Il risultato di un lancio non modifica le probabilità del successivo quando i lanci sono indipendenti. Disgiunto e indipendente sono concetti diversi.

La probabilità condizionata è $P(A\mid B)=P(A\cap B)/P(B)$, se $P(B)>0$. Sapere che il risultato di un dado è pari riduce lo spazio dei risultati a 2, 4 e 6. In questo nuovo spazio la probabilità di sei è un terzo.

## Estrazioni e diagrammi ad albero

Senza reinserimento la composizione dell'urna cambia dopo la prima estrazione. Con tre palline rosse e due blu, la probabilità di due rosse consecutive è $\frac35\frac24=\frac3{10}$. Con reinserimento sarebbe $\frac35\frac35=\frac9{25}$.

In un albero delle possibilità moltiplica le probabilità lungo un percorso e somma quelle di percorsi alternativi disgiunti. Controlla a ogni nodo che le probabilità dei rami possibili sommino a uno.

## Media, mediana e variabili

Una variabile qualitativa indica una categoria; una quantitativa una misura o un conteggio. La mediana è il valore centrale dei dati ordinati; con un numero pari di dati si fa la media dei due valori centrali. È meno sensibile di una media a un singolo valore estremo.

Per i dati 1, 2, 3, 4 e 100, la mediana è 3 e la media è 22. La media non descrive sempre un valore tipico: va interpretata nel contesto, soprattutto in presenza di dati molto asimmetrici.

## Tabelle e percentuali

Per leggere una tabella individua prima la popolazione di riferimento. Il 20% degli iscritti non coincide necessariamente con il 20% dei partecipanti effettivi. In una tabella a doppia entrata, il totale di riga o di colonna può cambiare il denominatore di una probabilità condizionata.

Trasforma un testo in dati, completa i totali e solo dopo calcola la proporzione. Senza calcolatrice usa frazioni semplici e stime per confrontare le cinque alternative.
