---
titolo: Statistica descrittiva e dati a due variabili
sommario: 'Statistica: definizioni, metodi, esempi e condizioni da usare negli esercizi del terzo anno.'
---

## Dati e frequenze

:::definizione{#frequenze titolo="Contare e confrontare"}
La **frequenza assoluta** $n_i$ conta quante volte si presenta un valore. Con $N$ osservazioni, la frequenza relativa è $f_i=\dfrac{n_i}{N}$ e quella percentuale è $100f_i$. Le frequenze assolute sommano a $N$, le relative a $1$. Se $6$ studenti su $24$ scelgono una risposta, la frequenza relativa è $\dfrac14$ e quella percentuale è $25\%$.
:::

## Media aritmetica

:::definizione{#media titolo="Valore medio dei dati"}
La **media aritmetica** di $x_1,\ldots,x_N$ è $\bar x=\dfrac{x_1+\cdots+x_N}{N}$. Con frequenze si usa $\bar x=\dfrac{\sum_i n_ix_i}{\sum_i n_i}$. La media di $4,6,8$ è $6$. Un valore molto lontano dagli altri può modificarla molto; per questo si confronta anche con mediana e dispersione.
:::

## Mediana e moda

:::definizione{#mediana titolo="Posizione centrale e valore più frequente"}
Ordinati i dati, la **mediana** è il dato centrale se $N$ è dispari e la media dei due centrali se $N$ è pari. La **moda** è un valore con frequenza massima e può non essere unica. Per $2,3,3,8,9$, mediana e moda sono $3$, mentre la media è $5$. L'ordinamento precede il calcolo della mediana.
:::

## Variabilità

:::definizione{#varianza titolo="Varianza della popolazione osservata"}
Per descrivere l'intero insieme di dati si usa $\sigma^2=\dfrac1N\sum_i(x_i-\bar x)^2=\dfrac1N\sum_i x_i^2-\bar x^2$. La deviazione standard è $\sigma=\sqrt{\sigma^2}$ e ha la stessa unità dei dati. Per $2,4,6$, $\bar x=4$, $\sigma^2=\dfrac83$. Qui il divisore è $N$; la stima campionaria con divisore $N-1$ risponde a uno scopo diverso.
:::

## Trasformare i dati

:::teorema{#trasformazioni titolo="Effetti di una trasformazione affine"}
Se $y_i=ax_i+b$, allora $\bar y=a\bar x+b$, $\sigma_y^2=a^2\sigma_x^2$ e $\sigma_y=|a|\sigma_x$. Aggiungere una costante cambia la media e conserva la dispersione. Moltiplicare ogni dato per $3$ moltiplica la varianza per $9$. Le formule seguono da $y_i-\bar y=a(x_i-\bar x)$.
:::

## Due variabili

:::definizione{#covarianza titolo="Variazioni osservate insieme"}
Per coppie $(x_i,y_i)$, la covarianza è $\operatorname{cov}(x,y)=\dfrac1N\sum_i(x_i-\bar x)(y_i-\bar y)$. Il segno positivo indica una tendenza congiunta crescente, quello negativo una tendenza opposta. Se entrambe le deviazioni standard sono positive, $r=\dfrac{\operatorname{cov}(x,y)}{\sigma_x\sigma_y}$ è il coefficiente di correlazione lineare e appartiene a $[-1,1]$.
:::

## Retta di regressione

:::teorema{#regressione titolo="Previsione lineare dai dati"}
Se $\sigma_x^2>0$, la retta di regressione di $y$ su $x$ è $y=mx+q$, con $m=\dfrac{\operatorname{cov}(x,y)}{\sigma_x^2}$ e $q=\bar y-m\bar x$. Minimizza la somma dei quadrati degli scarti verticali e passa per $(\bar x,\bar y)$. La retta di $x$ su $y$ risolve un problema diverso. Una previsione fuori dall'intervallo dei dati richiede cautela, perché prolunga il modello oltre le osservazioni.
:::

## Interpretazione e limiti

:::osservazione{#lettura titolo="Associazione e causalità"}
Una correlazione, anche forte, descrive un'associazione tra variabili e da sola non dimostra un rapporto di causa ed effetto. Un valore anomalo può influenzare media, correlazione e regressione. Nei grafici, origine e scala degli assi cambiano la percezione delle differenze; frequenze e unità di misura vanno dichiarate. Per confrontare due classi di numerosità diversa si usano frequenze relative.
:::
