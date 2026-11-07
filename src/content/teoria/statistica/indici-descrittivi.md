---
titolo: "Indici di posizione e dispersione"
sommario: "Medie, mediana, quantili, varianze, standardizzazione e confronto della dispersione."
---

## Media aritmetica e media ponderata

:::definizione{#media titolo="Media aritmetica"}
La **media** ripartisce in parti uguali la somma dei valori osservati. Per $n$ dati reali è
$$
\bar x=\frac{1}{n}\sum_{i=1}^n x_i.
$$
Con frequenze $n_j$ si usa $\bar x=\sum_j n_jx_j/n$. Con pesi positivi $w_j$ la media ponderata è $\sum_jw_jx_j/\sum_jw_j$. Se le medie di due gruppi sono 24 e 28 e i gruppi hanno 10 e 30 unità, la media complessiva è 27. La media semplice delle due medie sarebbe appropriata solo per gruppi della stessa ampiezza.
:::

## Mediana, moda e quantili

:::definizione{#quantili titolo="Mediana e quantili empirici"}
Ordinati i dati come $x_{(1)}\le\dots\le x_{(n)}$, la **mediana** è il valore centrale per $n$ dispari e la media dei due centrali per $n$ pari. Una moda è una modalità di frequenza massima; possono esserci più mode.

Per gli altri quantili empirici, in questo corso si usa, salvo diversa indicazione, $q_p=x_{(\lceil np\rceil)}$, con $0<p<1$. Per $q_{0{,}5}$ si mantiene la convenzione della mediana appena definita. Software e manuali possono usare interpolazioni diverse: gli esercizi sui quartili dichiarano la convenzione. Il primo e il terzo quartile corrispondono a $p=0{,}25$ e $p=0{,}75$.
:::

## Varianza descrittiva e varianza campionaria

:::definizione{#varianza titolo="Varianza e deviazione standard"}
La dispersione attorno alla media si misura attraverso gli scarti quadratici. La varianza descrittiva e la varianza campionaria corretta sono rispettivamente
$$
v=\frac{\sum_i(x_i-\bar x)^2}{n},\qquad
s^2=\frac{\sum_i(x_i-\bar x)^2}{n-1}\quad(n>1).
$$
Le radici quadrate sono le rispettive deviazioni standard. Per $1,3,5$, la media è 3, la somma degli scarti quadratici è 8, quindi $v=8/3$ e $s^2=4$. La varianza ha unità di misura al quadrato; la deviazione standard ha le unità dei dati.
:::

## Formule di calcolo e trasformazioni

::::teorema{#trasformazioni titolo="Scarti e trasformazioni affini"}
Per qualunque insieme di dati,
$$
\sum_i(x_i-\bar x)=0,\qquad
v=\frac{\sum_i x_i^2}{n}-\bar x^2.
$$
Se $y_i=a+bx_i$, allora $\bar y=a+b\bar x$, $v_y=b^2v_x$ e $s_y=|b|s_x$.

:::dimostrazione
Si espande $\sum_i(x_i-\bar x)^2=\sum_ix_i^2-2\bar x\sum_ix_i+n\bar x^2$ e si sostituisce $\sum_ix_i=n\bar x$. Per la trasformazione affine lo scarto è $y_i-\bar y=b(x_i-\bar x)$; elevando al quadrato si ottiene il fattore $b^2$.
:::
::::

## Confronti di dispersione

:::definizione{#dispersione titolo="Campo di variazione, IQR e coefficiente di variazione"}
Il campo di variazione è $\max x_i-\min x_i$. La distanza interquartile è $IQR=Q_3-Q_1$ e descrive l'ampiezza della metà centrale dei dati. Per misure su scala a rapporti con media positiva, il coefficiente di variazione è $CV=s/\bar x$, eventualmente espresso in percentuale.

Il CV confronta dispersioni relative quando le unità o le medie sono diverse; perde significato per scale con zero arbitrario o per medie vicine a zero. L'IQR e la mediana risentono meno di pochi valori estremi rispetto a media e deviazione standard.
:::

## Box plot e valori anomali

:::definizione{#boxplot titolo="Regola delle barriere"}
Un box plot rappresenta mediana e quartili. La regola di Tukey segnala come potenzialmente anomali i valori inferiori a $Q_1-1{,}5IQR$ o superiori a $Q_3+1{,}5IQR$. I baffi raggiungono le osservazioni più estreme comprese nelle barriere.

Una segnalazione richiede un controllo del dato e del contesto; non giustifica da sola la cancellazione dell'osservazione. La convenzione usata per i quartili può cambiare le barriere nei campioni piccoli.
:::

## Standardizzazione e asimmetria

:::definizione{#standardizzazione titolo="Punteggi standardizzati"}
Se $s>0$, il valore standardizzato di un'osservazione è $z_i=(x_i-\bar x)/s$. Esprime lo scarto dalla media in unità di deviazione standard. Per media 50 e deviazione standard 10, un valore 65 ha $z=1{,}5$.

Una coda lunga a destra può portare la media sopra la mediana; la sola differenza tra questi due indici non descrive completamente la forma. Standardizzare i dati non li rende normali. Per valutare la forma si usano anche istogramma, quantili e contesto della rilevazione.
:::
