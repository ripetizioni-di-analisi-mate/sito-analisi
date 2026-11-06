---
titolo: Parabola e problemi di secondo grado
sommario: 'Parabola: definizioni, metodi, esempi e condizioni da usare negli esercizi del terzo anno.'
---

## Luogo geometrico

:::definizione{#fuoco titolo="Fuoco e direttrice"}
La **parabola** è il luogo dei punti equidistanti da un punto, il fuoco, e da una retta, la direttrice, che non contiene il fuoco. Per $(x-h)^2=4p(y-k)$, con $p\neq0$, il vertice è $(h,k)$, il fuoco $(h,k+p)$ e la direttrice $y=k-p$. Il segno di $p$ determina l'apertura verso l'alto o verso il basso.
:::

## Forma con asse verticale

:::teorema{#vertice titolo="Forma del vertice"}
Per $y=ax^2+bx+c$, $a\neq0$, il vertice è $V\left(-\dfrac b{2a},-\dfrac\Delta{4a}\right)$ e l'asse è $x=-\dfrac b{2a}$. Completando il quadrato si ottiene $y=a(x-h)^2+k$. Per $y=x^2-4x+1$, $V=(2,-3)$ e $y=(x-2)^2-3$. Inoltre $p=\dfrac1{4a}$ collega questa forma al luogo geometrico.
:::

## Intersezioni e segno

:::teorema{#zeri titolo="Intersezioni con gli assi"}
L'intersezione con l'asse $y$ è $(0,c)$. Gli zeri risolvono $ax^2+bx+c=0$, quindi dipendono dal discriminante. Per $y=x^2-4x+3$, gli zeri sono $1$ e $3$, il grafico sta sotto l'asse $x$ per $1<x<3$ e sopra all'esterno.

::grafico{f="x^2-4*x+3" xmin=-1 xmax=5 ymin=-2 ymax=8 punti="1,0;3,0;2,-1,pieno,V" titolo="Il vertice è $V(2,-1)$ e gli zeri sono $1$ e $3$"}
:::

## Determinare l'equazione

:::teorema{#equazione titolo="Vertice e punto assegnati"}
Con vertice $(h,k)$ si parte da $y=a(x-h)^2+k$. Un punto $P(x_P,y_P)$ con $x_P\neq h$ determina $a=\dfrac{y_P-k}{(x_P-h)^2}$. Se $V=(1,-2)$ e $P=(3,6)$, allora $a=2$ e $y=2(x-1)^2-2$. Tre punti con ascisse distinte possono invece determinare $a,b,c$ con un sistema lineare, purché il risultato abbia $a\neq0$.
:::

## Rette e parabola

:::teorema{#intersezioni titolo="Sostituzione nel sistema"}
Per le intersezioni con $y=mx+q$ si risolve $ax^2+(b-m)x+c-q=0$. Due radici distinte danno una secante; una radice doppia dà una tangente; nessuna radice reale dà una retta esterna. Per $y=x^2$ e $y=x+2$, le ascisse sono $-1$ e $2$, quindi i punti sono $(-1,1)$ e $(2,4)$.
:::

## Tangente in un punto

:::teorema{#tangenti titolo="Condizione di radice doppia"}
La tangente a $y=ax^2+bx+c$ nel punto di ascissa $t$ ha equazione $y=(2at+b)x+c-at^2$. Sostituendola nella parabola resta $a(x-t)^2=0$, quindi l'intersezione ha radice doppia. Per $y=x^2$ e $t=2$ si ottiene $y=4x-4$. Il risultato si ricava algebricamente senza introdurre le derivate.
:::

## Asse orizzontale

:::definizione{#orizzontale titolo="Scambio delle coordinate"}
Una parabola con asse orizzontale si scrive $x=a(y-k)^2+h$. Il vertice è $(h,k)$ e l'asse è $y=k$. Se $a>0$ si apre verso destra; se $a<0$ verso sinistra. Per $x=(y-1)^2-2$, il vertice è $(-2,1)$ e l'ascissa minima è $-2$. In generale questa curva non è il grafico di una funzione $y=f(x)$.
:::

## Massimi e minimi nei problemi

:::esempio{#massimi titolo="Area con somma dei lati fissata"}
Se due lati di un rettangolo hanno somma $s>0$, l'area è $A(x)=x(s-x)=-\left(x-\dfrac s2\right)^2+\dfrac{s^2}{4}$ per $0<x<s$. Il quadrato è non negativo, quindi il valore massimo è $\dfrac{s^2}{4}$ e si raggiunge per $x=\dfrac s2$. Il rettangolo di area massima è dunque un quadrato. Il dominio geometrico deve contenere il vertice per poter usare quel massimo.
:::
