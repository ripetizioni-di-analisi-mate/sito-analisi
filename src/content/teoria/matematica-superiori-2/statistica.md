---
titolo: "Statistica descrittiva"
sommario: "Caratteri e frequenze, tabelle e grafici, media semplice e ponderata, mediana, moda, dispersione, varianza e deviazione standard."
---

## Dati e caratteri

:::definizione{#dati titolo="Che cosa viene osservato"}
Una **popolazione statistica** è l'insieme delle unità considerate. Un **carattere** è la proprietà osservata su ciascuna unità. Può essere qualitativo, come il mezzo usato per andare a scuola, oppure quantitativo, come il tempo del tragitto.

Un carattere quantitativo è discreto se assume valori separati, come il numero di fratelli. È continuo se può assumere i valori di un intervallo, come una lunghezza. La precisione della misura non cambia la natura continua della grandezza.

Un campione è un sottoinsieme della popolazione. Per descrivere correttamente una raccolta si indicano il gruppo osservato, il significato dei valori e l'unità di misura.
:::

## Tabelle di frequenza

:::definizione{#frequenze titolo="Conteggi, rapporti e percentuali"}
La **frequenza assoluta** $n_i$ è il numero delle osservazioni con un certo valore. Se il totale è $N>0$, la frequenza relativa è $f_i=\dfrac{n_i}{N}$ e quella percentuale è $100f_i\%$.

Le frequenze assolute sommano a $N$, quelle relative a $1$ e quelle percentuali a $100\%$. Per esempio, su venti studenti, otto che usano il bus rappresentano frequenza relativa $0{,}4$ e percentuale $40\%$.

Le frequenze cumulate sommano progressivamente le frequenze fino a un valore assegnato. Richiedono un ordine significativo dei valori e sono utili per trovare la posizione della mediana.
:::

## Grafici

:::osservazione{#grafici titolo="Barre, settori e istogrammi"}
Un diagramma a barre confronta categorie o valori discreti. L'altezza di ciascuna barra indica la frequenza e l'asse deve dichiarare se la frequenza è assoluta o relativa.

In un diagramma a settori, una categoria di frequenza relativa $f$ occupa un angolo di $360^\circ f$. Una frequenza del $25\%$ occupa $90^\circ$.

Per dati raggruppati in intervalli si usa un istogramma. Se le classi hanno ampiezze diverse, la frequenza è proporzionale all'area della barra. L'altezza deve quindi essere la densità, cioè frequenza divisa per ampiezza.

Un asse verticale che parte da un valore vicino alle altezze delle barre può far apparire grande una differenza piccola. La lettura di un grafico comprende sempre scala, etichette e unità.

::grafico{poligoni="0.7,0 1.3,0 1.3,2 0.7,2;1.7,0 2.3,0 2.3,5 1.7,5;2.7,0 3.3,0 3.3,3 2.7,3" xmin=0 xmax=4 ymin=0 ymax=6 nomi="x,n" titolo="Nel diagramma a barre i valori $1$, $2$, $3$ hanno frequenze $2$, $5$, $3$"}
:::

:::esempio{titolo="Istogramma con classi di ampiezza diversa"}
Su $20$ tragitti, $8$ durano da $0$ a meno di $10$ minuti e $12$ durano da $10$ a meno di $30$ minuti. Le ampiezze delle classi sono quindi $10$ e $20$ minuti.

$$
\begin{aligned}
d_1&=\frac8{10}=0{,}8,\\
d_2&=\frac{12}{20}=0{,}6.
\end{aligned}
$$

La seconda barra è più bassa, ma ha area maggiore perché è larga il doppio. Le frequenze si leggono dalle aree $0{,}8\cdot10=8$ e $0{,}6\cdot20=12$. L’altezza ha unità di conteggio per minuto e misura la densità.

::grafico{poligoni="0,0 10,0 10,0.8 0,0.8;10,0 30,0 30,0.6 10,0.6" xmin=-2 xmax=32 ymin=0 ymax=1 nomi="t,d" etichette="4,0.88,0.8;20,0.69,0.6" titolo="Le aree delle due barre valgono 8 e 12"}
:::

## La media

:::definizione{#media titolo="Media aritmetica e ponderata"}
La **media aritmetica** di $N>0$ valori è
$$
\bar x=\frac{x_1+\cdots+x_N}{N}.
$$
Con valori distinti $v_i$ e frequenze $n_i$ si usa la media ponderata
$$
\bar x=\frac{\sum_i n_iv_i}{\sum_i n_i}.
$$
Per i dati $4,6,8$, la media è $6$. Se $4$ compare una volta e $8$ tre volte, la media è $\dfrac{4+24}{4}=7$.

La somma degli scarti dalla media è zero, perché $\sum_i(x_i-\bar x)=\sum_i x_i-N\bar x=0$. La media risente dei valori estremi, che entrano direttamente nella somma.
:::

:::esempio{titolo="Ricavare la media di uno dei gruppi"}
Due gruppi distinti comprendono $8$ e $12$ studenti. Il tempo medio del primo gruppo per andare a scuola è $12$ minuti e la media complessiva è $15$ minuti. Indichiamo con $m$ la media del secondo gruppo.

$$
\begin{aligned}
8\cdot12+12m&=20\cdot15,\\[6pt]
12m&=300-96=204,\\[6pt]
m&=17.
\end{aligned}
$$

La media del secondo gruppo è $17$ minuti. La media complessiva, $15$ minuti, è più vicina a $17$ che a $12$, perché il secondo gruppo ha più studenti.
:::

## La mediana

:::definizione{#mediana titolo="La posizione centrale"}
La **mediana** si calcola dopo aver ordinato i dati. Se il numero delle osservazioni è dispari, è il valore centrale. Se è pari, per dati numerici si usa la media dei due valori centrali.

Per $2,3,7,9,12$ la mediana è $7$. Per $2,3,7,9$ è $\dfrac{3+7}{2}=5$. La mediana può quindi non essere uno dei valori osservati.

La mediana dipende dalla posizione, mentre la media usa tutti i valori. Nei dati $1,2,3,4,100$, la mediana è $3$ e la media è $22$. Il valore estremo modifica fortemente la media ma non cambia il valore centrale.
:::

:::esempio{titolo="Trovare la mediana dalle cumulate"}
Per trovare le osservazioni centrali di una tabella si sommano le frequenze assolute nell’ordine dei valori.

| Valore | $2$ | $4$ | $7$ | $9$ |
| --- | --- | --- | --- | --- |
| Frequenza assoluta | $2$ | $3$ | $1$ | $4$ |
| Frequenza cumulata | $2$ | $5$ | $6$ | $10$ |

Il totale è $10$, quindi servono la quinta e la sesta osservazione. La cumulata vale $5$ al valore $4$, che occupa fino alla quinta posizione. La posizione successiva corrisponde a $7$, perché lì la cumulata raggiunge $6$. Dunque la mediana è $\dfrac{4+7}{2}=5{,}5$.
:::

## Moda e scelta dell’indice

:::definizione{#moda titolo="Il valore più frequente"}
La **moda** è il valore o la categoria con frequenza massima. Può essere unica oppure possono esserci più valori di frequenza massima.

Nei dati $2,2,3,4,4,4$ la moda è $4$. Nei dati $1,1,3,3,5$, i valori $1$ e $3$ hanno entrambi frequenza massima. La moda è utilizzabile anche per caratteri qualitativi senza ordine.

Media, mediana e moda rispondono a domande diverse. Per una misura numerica con un valore molto estremo, la mediana descrive la posizione centrale, che dipende dall’ordine dei dati. Un indice si interpreta insieme alla distribuzione dei dati.
:::

## Misure di dispersione

:::definizione{#varianza titolo="Scarti e varianza descrittiva"}
Il **campo di variazione** è massimo meno minimo. Per $3,5,9$ vale $6$. Usa soltanto i due estremi e non descrive come sono distribuiti i valori intermedi.

La **varianza descrittiva** di $N>0$ valori è la media dei quadrati degli scarti dalla media.
$$
\sigma^2=\frac1N\sum_{i=1}^N(x_i-\bar x)^2.
$$
Per $2,4,6$ la media è $4$, gli scarti sono $-2,0,2$ e la varianza è $\dfrac83$.

La varianza è non negativa. È zero soltanto quando tutti i dati sono uguali, perché una somma di quadrati è zero solo se ogni quadrato è zero. Qui si divide per $N$, poiché si descrivono i dati osservati. La stima campionaria con divisore $N-1$ ha un altro scopo.
:::

:::esempio{titolo="Due gruppi con la stessa media"}
I dati $0,3,6$ hanno media $3$, come i dati $2,3,4$. Nel primo gruppo gli scarti sono $-3,0,3$ e nel secondo sono $-1,0,1$.

$$
\begin{aligned}
\sigma_A^2&=\frac{9+0+9}{3}=6,\\
\sigma_B^2&=\frac{1+0+1}{3}=\frac23.
\end{aligned}
$$

Il primo gruppo ha varianza maggiore, perché i dati ai lati della media ne distano di più. Una media uguale può quindi accompagnarsi a dispersioni diverse.
:::

## Deviazione standard e trasformazioni

:::definizione{#deviazione titolo="Una dispersione nella stessa unità"}
La **deviazione standard** è $\sigma=\sqrt{\sigma^2}$. Ha la stessa unità di misura dei dati, mentre la varianza ha l'unità al quadrato.

Per i dati $1,5$ la media è $3$, la varianza è $4$ e la deviazione standard è $2$. Aggiungendo lo stesso numero a tutti i dati cambia la media ma non cambiano gli scarti e la dispersione.

Moltiplicando tutti i dati per $k$, la media si moltiplica per $k$, la varianza per $k^2$ e la deviazione standard per $|k|$. Queste regole aiutano a controllare conversioni di unità e risultati numerici.
:::
