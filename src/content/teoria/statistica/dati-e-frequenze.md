---
titolo: "Dati, frequenze e grafici"
sommario: "Popolazioni e campioni, scale di misura, distribuzioni di frequenza, istogrammi e tabelle a doppia entrata."
---

## Popolazione, campione e unità statistiche

:::definizione{#popolazione titolo="Popolazione e campione"}
La **popolazione** è l'insieme delle unità su cui verte l'indagine; il **campione** è il sottoinsieme osservato. Una rilevazione censuaria osserva tutta la popolazione. Un parametro descrive la popolazione, mentre una statistica è una funzione dei dati campionari.

Per conoscere il tempo medio di viaggio degli iscritti a un ateneo, la popolazione comprende tutti gli iscritti e l'unità statistica è il singolo studente. La media calcolata su 80 intervistati è una statistica. L'errore campionario dipende dalla selezione delle unità; aumentare il numero di interviste non corregge automaticamente un campione distorto.
:::

## Caratteri e scale di misura

:::definizione{#caratteri titolo="Tipi di variabili"}
Un carattere è **qualitativo nominale** se le modalità non hanno un ordine, come il corso di laurea; è **qualitativo ordinale** se esiste un ordine, come un giudizio di soddisfazione. Un carattere quantitativo è discreto se assume valori in un insieme finito o numerabile, come il numero di esami, e continuo se il modello ammette tutti i valori di un intervallo, come una durata.

La codifica numerica di un corso di laurea non rende quantitativo il carattere. Per una scala a intervalli sono significative le differenze; per una scala a rapporti è significativo anche lo zero assoluto. Il rapporto tra temperature Celsius non misura un rapporto di energia termica.
:::

## Frequenze assolute e relative

:::definizione{#frequenze titolo="Distribuzione di frequenza"}
Se $n_i$ osservazioni assumono la modalità $x_i$, la frequenza assoluta è $n_i$ e quella relativa è $f_i=n_i/n$, dove $n$ è il numero totale di osservazioni. Quindi
$$
\sum_i n_i=n,\qquad f_i=\frac{n_i}{n},\qquad \sum_i f_i=1.
$$
La percentuale è $100f_i$. Se 18 studenti su 60 arrivano in treno, la frequenza relativa è $0{,}3$ e quella percentuale è $30\%$. Le frequenze relative consentono confronti tra campioni di ampiezza diversa.
:::

## Frequenze cumulate e funzione empirica

:::definizione{#cumulate titolo="Frequenze cumulate"}
Per modalità ordinate, la frequenza assoluta cumulata $N_i=\sum_{j\le i}n_j$ conta le osservazioni minori o uguali a $x_i$. La cumulata relativa è $F_i=N_i/n$. La **funzione di ripartizione empirica** è
$$
F_n(x)=\frac{1}{n}\sum_{j=1}^n\mathbf{1}_{\{x_j\le x\}}.
$$
È non decrescente e continua da destra. Per i dati $1,1,3,5$, $F_n(3)=3/4$; la proporzione strettamente maggiore di 3 è $1-F_n(3)=1/4$. La cumulazione richiede un ordine tra le modalità, quindi non è definita in modo naturale per colori o nazionalità.
:::

## Dati raggruppati in classi

:::definizione{#classi titolo="Classi e punti medi"}
Le classi sono intervalli disgiunti che comprendono tutte le osservazioni. Per la classe $[a_i,b_i)$, l'ampiezza è $h_i=b_i-a_i$ e il punto medio è $c_i=(a_i+b_i)/2$. Le convenzioni sugli estremi evitano di assegnare uno stesso dato a due classi.

Sostituire ogni osservazione con il punto medio della sua classe permette di stimare medie e varianze quando sono disponibili solo frequenze raggruppate; il risultato è generalmente un'approssimazione. Una classe aperta superiormente non ha un punto medio determinato senza un'ipotesi aggiuntiva.
:::

## Grafici e densità di frequenza

:::definizione{#istogramma titolo="Istogramma"}
Nell'istogramma l'area del rettangolo rappresenta la frequenza. Con frequenze relative l'altezza è
$$
d_i=\frac{f_i}{h_i},\qquad d_i h_i=f_i.
$$
Se una classe ha frequenza relativa $0{,}2$ e ampiezza 5, l'altezza vale $0{,}04$. Con ampiezze diverse, confrontare soltanto le altezze confonde densità e frequenza. Il diagramma a barre serve invece a confrontare modalità discrete o qualitative, con barre separate.
:::

## Tabelle a doppia entrata

:::definizione{#tabelle titolo="Frequenze congiunte e marginali"}
Una tabella a doppia entrata riporta $n_{ij}$, numero di unità con modalità $i$ del primo carattere e $j$ del secondo. Le somme $n_{i\cdot}=\sum_jn_{ij}$ e $n_{\cdot j}=\sum_i n_{ij}$ sono le frequenze marginali.

La frequenza relativa congiunta è $n_{ij}/n$. La proporzione della modalità $j$ all'interno della riga $i$ è invece $n_{ij}/n_{i\cdot}$, se $n_{i\cdot}>0$. Il denominatore identifica il gruppo a cui si riferisce la percentuale.
:::

## Selezione del campione e dati mancanti

:::attenzione{#campionamento titolo="Rappresentatività e selezione"}
Un campione casuale semplice senza reinserimento assegna la stessa probabilità a ogni sottoinsieme di ampiezza fissata. Le estrazioni sono dipendenti; l'approssimazione con osservazioni indipendenti può essere ragionevole se la frazione campionaria è piccola. Un campione stratificato seleziona unità entro gruppi definiti prima dell'estrazione.

Se rispondono soltanto gli studenti che frequentano una lezione mattutina, le frequenze descrivono i rispondenti. Estenderle a tutti gli iscritti richiede ipotesi sulla selezione. Per i dati mancanti si dichiara sempre il numero di osservazioni effettivamente usate nel denominatore.
:::
