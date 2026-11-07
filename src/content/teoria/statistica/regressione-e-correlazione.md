---
titolo: "Regressione lineare e correlazione"
sommario: "Minimi quadrati, residui, correlazione, inferenza sulla pendenza e intervalli di previsione."
---

## Dati appaiati e diagramma di dispersione

:::definizione{#dati titolo="Relazione tra due caratteri"}
I dati sono coppie $(x_i,y_i)$ osservate sulle stesse unità. Il diagramma di dispersione mostra forma, direzione, dispersione e punti influenti della relazione. Prima di adattare una retta si controlla se una relazione lineare è plausibile nell'intervallo osservato.

Con $\bar x$ e $\bar y$ medie campionarie, si definiscono $S_{xx}=\sum_i(x_i-\bar x)^2$, $S_{yy}=\sum_i(y_i-\bar y)^2$ e $S_{xy}=\sum_i(x_i-\bar x)(y_i-\bar y)$. Per una regressione identificabile con intercetta occorre $S_{xx}>0$.
:::

## Retta dei minimi quadrati

::::teorema{#retta titolo="Stima di intercetta e pendenza"}
La retta $\hat y=a+bx$ che minimizza $\sum_i(y_i-a-bx_i)^2$ ha
$$
b=\frac{S_{xy}}{S_{xx}},\qquad a=\bar y-b\bar x.
$$
Passa per $(\bar x,\bar y)$. La pendenza misura la variazione prevista di $y$ per un incremento unitario di $x$ e ha unità di $y$ divise per quelle di $x$.

:::dimostrazione
Derivando la somma dei quadrati rispetto ad $a$ e $b$ si ottengono $\sum_i(y_i-a-bx_i)=0$ e $\sum_ix_i(y_i-a-bx_i)=0$. La prima dà $a=\bar y-b\bar x$; sostituendola nella seconda si ottiene $bS_{xx}=S_{xy}$. La funzione obiettivo è strettamente convessa quando $S_{xx}>0$, quindi il punto è il minimo unico.
:::
::::

## Residui e qualità dell'adattamento

:::definizione{#residui titolo="Scomposizione della variabilità"}
I residui sono $e_i=y_i-\hat y_i$. Con intercetta, $\sum_ie_i=0$ e la somma totale dei quadrati si scompone come $SST=SSR+SSE$, con $SST=S_{yy}$, $SSE=\sum_ie_i^2$ e $SSR=\sum_i(\hat y_i-\bar y)^2$.

Se $SST>0$, $R^2=1-SSE/SST$. È la quota di variabilità di $y$ spiegata dalla retta nel campione. Un valore elevato non dimostra causalità e non garantisce che il modello sia adatto a previsioni fuori dall'intervallo osservato.
:::

## Correlazione di Pearson

:::definizione{#pearson titolo="Correlazione campionaria"}
Se $S_{xx}>0$ e $S_{yy}>0$, $r=S_{xy}/\sqrt{S_{xx}S_{yy}}$. Il segno coincide con quello della pendenza. Nella regressione lineare semplice con intercetta, $R^2=r^2$.

Traslare una variabile non cambia $r$; moltiplicarla per una costante positiva non lo cambia, mentre una costante negativa ne inverte il segno. La correlazione misura una relazione lineare; una relazione curva può avere correlazione nulla. Associazione statistica e relazione causale richiedono analisi diverse del disegno dello studio.
:::

## Modello lineare e inferenza sulla pendenza

:::teorema{#inferenza titolo="Errori del modello e test sulla pendenza"}
Il modello è $Y_i=\alpha+\beta x_i+\varepsilon_i$, con $x_i$ fissati, errori indipendenti di media zero e varianza comune $\sigma^2$. Per l'inferenza esatta si assume anche la normalità degli errori. Per $n>2$,
$$
s_e^2=\frac{SSE}{n-2},\qquad SE(b)=\frac{s_e}{\sqrt{S_{xx}}},\qquad
\frac{b-\beta_0}{SE(b)}\sim t_{n-2}\quad(H_0:\beta=\beta_0).
$$
L'intervallo per $\beta$ è $b\pm t_{1-\alpha/2,n-2}SE(b)$. Il denominatore $n-2$ tiene conto dei due coefficienti stimati.
:::

## Risposta media e previsione individuale

:::teorema{#previsione titolo="Incertezza della previsione"}
Nel modello normale, per $x_0$ fissato la stima della risposta media è $\hat y_0=a+bx_0$. Il suo errore standard è
$$
s_e\sqrt{\frac1n+\frac{(x_0-\bar x)^2}{S_{xx}}}.
$$
Per una nuova osservazione indipendente si aggiunge 1 sotto radice. Moltiplicando per il quantile di Student si ottengono rispettivamente un intervallo per la risposta media e un intervallo di previsione. Il secondo è più ampio perché comprende anche la variabilità della nuova osservazione.
:::

## Diagnostica e limiti del modello

:::attenzione{#diagnostica titolo="Controlli sui residui"}
Un andamento curvo dei residui rispetto ai valori adattati suggerisce una media non lineare; una dispersione crescente suggerisce varianza non costante; dipendenze nel tempo richiedono un modello degli errori adeguato. Un punto con $x$ estremo ha leva elevata e può influenzare molto la pendenza.

Le inferenze classiche richiedono le ipotesi dichiarate. L'estrapolazione usa la retta fuori dalla regione dei dati e aggiunge incertezza sul modello che gli intervalli standard non rappresentano. Per relazioni monotone o dati ordinali si può usare la correlazione di Spearman, calcolando Pearson sui ranghi e usando ranghi medi in presenza di pari merito.
:::
