---
titolo: "Variabili aleatorie e distribuzioni continue"
sommario: "Densità e ripartizioni, uniforme, esponenziale, normale e distribuzioni per l’inferenza."
---

## Densità e probabilità di intervalli

:::definizione{#densita titolo="Variabili assolutamente continue"}
Una variabile ammette densità $f$ se $f(x)\ge0$, $\int_{\mathbb R}f(x)\,dx=1$ e
$$
P(a<X\le b)=\int_a^b f(x)\,dx.
$$
La probabilità è un'area; l'altezza $f(x)$ può superare 1. Per una variabile con densità, $P(X=x)=0$, quindi includere o escludere un singolo estremo non cambia la probabilità. Una variabile può anche avere una legge mista, con masse puntuali e una parte continua.
:::

## Ripartizione, quantili e momenti

:::definizione{#ripartizione titolo="Funzione di ripartizione"}
La ripartizione è $F(x)=P(X\le x)=\int_{-\infty}^x f(t)\,dt$. Dove la derivata esiste, $F'=f$ quasi ovunque. Un quantile di ordine $p$ è $q_p=\inf\{x:F(x)\ge p\}$. Se $F$ è continua e strettamente crescente, si risolve $F(q_p)=p$.

Quando gli integrali esistono, $E[X]=\int xf(x)\,dx$ ed $E[X^2]=\int x^2f(x)\,dx$. La varianza è $E[X^2]-E[X]^2$. Il supporto della densità determina gli estremi effettivi degli integrali.
:::

## Distribuzione uniforme

:::definizione{#uniforme titolo="Uniforme su un intervallo"}
Per $a<b$, $X\sim U(a,b)$ ha densità $1/(b-a)$ per $a<x<b$ e zero altrove. Quindi
$$
E[X]=\frac{a+b}{2},\qquad \operatorname{Var}(X)=\frac{(b-a)^2}{12},\qquad q_p=a+p(b-a).
$$
La probabilità di un sottointervallo è il rapporto tra la sua lunghezza e $b-a$. Per $U(2,8)$, $P(3<X<5)=2/6=1/3$. La formula del quantile segue dalla ripartizione lineare nell'intervallo.
:::

## Distribuzione esponenziale

:::definizione{#esponenziale titolo="Tempo di attesa esponenziale"}
Con tasso $\lambda>0$, la densità è $\lambda e^{-\lambda x}$ per $x\ge0$. Per $t\ge0$,
$$
P(X>t)=e^{-\lambda t},\qquad E[X]=\frac1\lambda,\qquad
\operatorname{Var}(X)=\frac1{\lambda^2}.
$$
Il quantile è $q_p=-\log(1-p)/\lambda$. La proprietà di assenza di memoria è $P(X>s+t\mid X>s)=P(X>t)$ per $s,t\ge0$. Il tasso ha unità inverse rispetto al tempo; il parametro di scala è il suo reciproco.
:::

## Normale e standardizzazione

:::definizione{#normale titolo="Distribuzione normale"}
$X\sim N(\mu,\sigma^2)$, con $\sigma>0$, ha densità
$$
f(x)=\frac1{\sigma\sqrt{2\pi}}e^{-\frac{(x-\mu)^2}{2\sigma^2}}.
$$
La media è $\mu$ e la varianza $\sigma^2$. La variabile $Z=(X-\mu)/\sigma$ è normale standard. Indicando con $\Phi$ la sua ripartizione,
$$
P(a<X<b)=\Phi\!\left(\frac{b-\mu}{\sigma}\right)-\Phi\!\left(\frac{a-\mu}{\sigma}\right).
$$
Per simmetria, $\Phi(-z)=1-\Phi(z)$. Il quantile è $\mu+\sigma z_p$, dove $\Phi(z_p)=p$.

::grafico{f="exp(-x*x/2)/sqrt(2*PI)" xmin=-4 xmax=4 ymin=0 ymax=0.45 titolo="Densità della normale standard"}
:::

## Gamma, chi quadrato, Student e Fisher

:::definizione{#famiglie titolo="Distribuzioni per l'inferenza"}
La gamma con forma $k>0$ e tasso $\lambda>0$ ha densità $\lambda^kx^{k-1}e^{-\lambda x}/\Gamma(k)$ per $x>0$, media $k/\lambda$ e varianza $k/\lambda^2$. La legge $\chi^2_\nu$ è una gamma con forma $\nu/2$ e tasso $1/2$.

Se $Z\sim N(0,1)$ e $U\sim\chi^2_\nu$ sono indipendenti, $Z/\sqrt{U/\nu}$ ha legge $t_\nu$ di Student. Se $U\sim\chi^2_r$ e $V\sim\chi^2_s$ sono indipendenti, $(U/r)/(V/s)$ ha legge $F_{r,s}$. I quantili di queste leggi si ricavano da tavole o software e saranno forniti negli esercizi che li richiedono.
:::

## Trasformazioni monotone

:::teorema{#trasformazioni titolo="Cambio di variabile in una densità"}
Se $Y=g(X)$ e $g$ è strettamente monotona, invertibile e derivabile con inversa derivabile sul supporto,
$$
f_Y(y)=f_X(g^{-1}(y))\left|\frac{d}{dy}g^{-1}(y)\right|.
$$
Prima si determina il supporto trasformato. Per $X\sim U(0,1)$ e $Y=2X+1$, il supporto è $(1,3)$ e la densità vale $1/2$. Per trasformazioni non iniettive si sommano i contributi delle diverse inverse, oppure si parte dalla ripartizione.
:::
