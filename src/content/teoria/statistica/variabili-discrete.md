---
titolo: "Variabili aleatorie e distribuzioni discrete"
sommario: "Masse, attese e varianze; Bernoulli, binomiale, geometrica, Poisson e ipergeometrica."
---

## Legge di una variabile aleatoria

:::definizione{#massa titolo="Funzione di massa e ripartizione"}
Una **variabile aleatoria discreta** associa un numero agli esiti e assume valori in un insieme finito o numerabile. La funzione di massa è $p_X(x)=P(X=x)$, con $p_X(x)\ge0$ e $\sum_xp_X(x)=1$. La ripartizione è $F_X(t)=\sum_{x\le t}p_X(x)$.

Le probabilità di intervalli si ottengono sommando le masse comprese nell'intervallo. Se $X$ assume $0,1,2$ con probabilità $0{,}2$, $0{,}5$, $0{,}3$, allora $P(X>0)=0{,}8$ e $F_X(1)=0{,}7$.
:::

## Valore atteso e varianza

:::definizione{#momenti titolo="Momenti di una variabile discreta"}
Se la somma converge assolutamente, il valore atteso è $E[X]=\sum_x xp_X(x)$. Se $E[X^2]<\infty$,
$$
\operatorname{Var}(X)=E[(X-E[X])^2]=E[X^2]-E[X]^2.
$$
Per una funzione $g$, $E[g(X)]=\sum_xg(x)p_X(x)$ quando l'attesa è definita. Inoltre $E[a+bX]=a+bE[X]$ e $\operatorname{Var}(a+bX)=b^2\operatorname{Var}(X)$. Il valore atteso può non essere un valore assunto dalla variabile: il dado regolare ha media $3{,}5$.
:::

## Bernoulli e binomiale

:::definizione{#binomiale titolo="Conteggio dei successi indipendenti"}
Una Bernoulli di parametro $p$ vale 1 con probabilità $p$ e 0 altrimenti; ha media $p$ e varianza $p(1-p)$. Se $X$ conta i successi in $n$ prove indipendenti con lo stesso $p$, allora
$$
X\sim\operatorname{Bin}(n,p),\qquad P(X=k)=\binom nkp^k(1-p)^{n-k}.
$$
La media è $np$ e la varianza $np(1-p)$. Il coefficiente conta le posizioni dei successi. Estrazioni senza reinserimento da una popolazione finita non soddisfano esattamente il modello binomiale.
:::

## Geometrica e binomiale negativa

:::definizione{#geometrica titolo="Attesa del primo successo"}
In prove indipendenti con probabilità di successo $0<p\le1$, il numero $T$ della prova del primo successo ha
$$
P(T=k)=(1-p)^{k-1}p\quad(k=1,2,\dots),\qquad
E[T]=\frac1p,\quad\operatorname{Var}(T)=\frac{1-p}{p^2}.
$$
Qui si conta anche la prova del successo. Se si contano i fallimenti, la variabile è $T-1$. Il numero della prova in cui si ottiene l'$r$-esimo successo ha legge binomiale negativa, con massa $\binom{k-1}{r-1}p^r(1-p)^{k-r}$ per $k\ge r$ e media $r/p$.
:::

## Distribuzione di Poisson

:::definizione{#poisson titolo="Conteggi su un intervallo"}
La distribuzione di Poisson di parametro $\lambda>0$ ha
$$
P(X=k)=e^{-\lambda}\frac{\lambda^k}{k!},\qquad E[X]=\operatorname{Var}(X)=\lambda.
$$
In un processo di Poisson omogeneo di intensità $r$, il numero di eventi in una durata $t$ ha parametro $rt$. L'omogeneità del tasso e l'indipendenza degli incrementi sono ipotesi del processo. Per $n$ grande e $p$ piccolo, una binomiale si può approssimare con una Poisson di parametro $np$; l'accuratezza dipende dai valori concreti.
:::

## Distribuzione ipergeometrica

:::definizione{#ipergeometrica titolo="Campionamento senza reinserimento"}
Da una popolazione di $N$ unità, con $R$ successi, si estrae uniformemente un campione di $n$ unità senza reinserimento. Il numero $X$ di successi ha massa
$$
P(X=k)=\frac{\binom Rk\binom{N-R}{n-k}}{\binom Nn}.
$$
Ponendo $p=R/N$, si ha $E[X]=np$ e, per $N>1$, $\operatorname{Var}(X)=np(1-p)(N-n)/(N-1)$. Il fattore finale tiene conto della dipendenza introdotta dall'estrazione senza reinserimento.
:::

## Scelta del modello e somme

:::teorema{#somme titolo="Somme di variabili indipendenti"}
La somma di binomiali indipendenti con lo stesso parametro $p$ è binomiale con numero di prove pari alla somma. La somma di Poisson indipendenti è Poisson con parametro pari alla somma. Per variabili indipendenti con varianza finita, la varianza della somma è la somma delle varianze.

La linearità dell'attesa $E[X+Y]=E[X]+E[Y]$ richiede solo l'esistenza delle attese. Per la varianza, in generale si deve aggiungere $2\operatorname{Cov}(X,Y)$. La distinzione sarà usata nello studio delle distribuzioni congiunte.
:::
