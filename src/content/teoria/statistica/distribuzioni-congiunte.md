---
titolo: "Distribuzioni congiunte, covarianza e trasformazioni"
sommario: "Marginali e condizionate, indipendenza, covarianza, correlazione, somme ed estremi."
---

## Leggi congiunte e marginali

:::definizione{#congiunta titolo="Distribuzione di una coppia"}
Per variabili discrete, $p_{X,Y}(x,y)=P(X=x,Y=y)$ è non negativa e la somma su tutte le coppie vale 1. Le marginali si ottengono sommando lungo righe o colonne:
$$
p_X(x)=\sum_y p_{X,Y}(x,y),\qquad p_Y(y)=\sum_xp_{X,Y}(x,y).
$$
Nel caso con densità congiunta, le somme si sostituiscono con integrali. Il dominio di integrazione deve rispettare il supporto: se $0<y<x<1$, per un dato $x$ la variabile $y$ va da 0 a $x$.
:::

## Condizionamento e indipendenza

:::definizione{#condizionamento titolo="Leggi condizionate"}
Nel caso discreto, $p_{Y\mid X}(y\mid x)=p_{X,Y}(x,y)/p_X(x)$ per $p_X(x)>0$. Nel caso continuo si usa $f_{Y\mid X}(y\mid x)=f_{X,Y}(x,y)/f_X(x)$ dove $f_X(x)>0$; questa è una densità condizionata, pur essendo $P(X=x)=0$.

$X$ e $Y$ sono indipendenti se la legge congiunta fattorizza nel prodotto delle marginali: per masse o densità, rispettivamente $p_{X,Y}=p_Xp_Y$ oppure $f_{X,Y}=f_Xf_Y$ quasi ovunque. La fattorizzazione va verificata sull'intero supporto.
:::

## Attese di funzioni e covarianza

:::definizione{#covarianza titolo="Covarianza"}
Per variabili con secondo momento finito,
$$
E[g(X,Y)]=\sum_{x,y}g(x,y)p_{X,Y}(x,y),\qquad
\operatorname{Cov}(X,Y)=E[XY]-E[X]E[Y].
$$
Per densità si usa l'integrale doppio. La covarianza misura la variazione lineare congiunta e dipende dalle unità di misura. Vale $\operatorname{Cov}(a+bX,c+dY)=bd\operatorname{Cov}(X,Y)$.
:::

## Correlazione e dipendenza

:::definizione{#correlazione titolo="Coefficiente di correlazione"}
Se entrambe le varianze sono positive, $\rho=\operatorname{Cov}(X,Y)/(\sigma_X\sigma_Y)$ e $-1\le\rho\le1$. Il valore assoluto è 1 esattamente quando esiste una relazione affine quasi certa tra le variabili.

L'indipendenza implica covarianza zero quando i secondi momenti esistono. L'implicazione inversa è falsa: per $X$ uniforme su $\{-1,0,1\}$ e $Y=X^2$, $E[XY]=E[X^3]=0$ e $E[X]=0$, quindi la covarianza è zero; tuttavia $Y$ è determinata da $X$. Per una coppia con legge normale congiunta, covarianza zero implica indipendenza.
:::

## Somme e combinazioni lineari

:::teorema{#somme titolo="Varianza delle combinazioni lineari"}
Per secondi momenti finiti,
$$
\operatorname{Var}(aX+bY)=a^2\sigma_X^2+b^2\sigma_Y^2+2ab\operatorname{Cov}(X,Y).
$$
La linearità dell'attesa non richiede indipendenza. Per $S=X+Y$ con variabili discrete indipendenti, $p_S(s)=\sum_xp_X(x)p_Y(s-x)$; per densità, $f_S(s)=\int f_X(x)f_Y(s-x)\,dx$. Queste formule di convoluzione sommano i modi di ottenere lo stesso valore della somma.
:::

## Massimi, minimi e trasformazioni

:::teorema{#estremi titolo="Estremi di variabili indipendenti"}
Se $X_1,\dots,X_n$ sono indipendenti con la stessa ripartizione $F$, per $M=\max_iX_i$ e $m=\min_iX_i$,
$$
P(M\le t)=F(t)^n,\qquad P(m>t)=(1-F(t))^n.
$$
Il massimo è minore o uguale a $t$ quando lo sono tutte le osservazioni. Il minimo supera $t$ quando tutte la superano. Per trasformare due variabili con un cambio biunivoco si moltiplica la densità congiunta per il valore assoluto del determinante jacobiano dell'inversa, dopo aver trasformato il supporto.
:::

## Attesa e varianza condizionate

:::teorema{#totale titolo="Scomposizione dell'attesa e della varianza"}
Se $E[|Y|]<\infty$, $E[Y]=E[E[Y\mid X]]$. Se $E[Y^2]<\infty$,
$$
\operatorname{Var}(Y)=E[\operatorname{Var}(Y\mid X)]+\operatorname{Var}(E[Y\mid X]).
$$
La prima componente descrive la variabilità interna ai gruppi definiti da $X$; la seconda descrive la variabilità tra le loro medie. La formula comprende sia modelli discreti a gruppi sia condizionamenti continui.
:::
