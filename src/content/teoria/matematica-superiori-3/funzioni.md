---
titolo: Funzioni, dominio e trasformazioni dei grafici
sommario: 'Funzioni: definizioni, metodi, esempi e condizioni da usare negli esercizi del terzo anno.'
---

## Una legge tra due insiemi

:::definizione{#valori titolo="Funzione e immagine di un numero"}
Una **funzione** $f:A\to B$ associa a ogni elemento di $A$ un solo elemento di $B$. $A$ è il dominio, $B$ il codominio. L'immagine $f(A)$ contiene i valori effettivamente assunti. Se $f(x)=x^2$ su $\mathbb R$, $f(-3)=9$ e l'immagine è $[0,+\infty)$. Conoscere solo la formula non determina il codominio scelto.
:::

## Dominio di una formula

:::teorema{#dominio titolo="Condizioni da imporre insieme"}
Nel dominio reale, i denominatori sono diversi da zero, i radicandi delle radici pari sono non negativi e gli argomenti dei logaritmi sono positivi. Per $f(x)=\dfrac{\sqrt{x-1}}{x-3}$ il sistema è $\begin{cases}x\geq1,\\x\neq3,\end{cases}$ quindi $D=[1,3)\cup(3,+\infty)$. Le condizioni si riferiscono alla formula iniziale anche quando un fattore si semplifica.
:::

## Zeri e segno

:::definizione{#zeri titolo="Intersezioni con gli assi"}
Gli **zeri** risolvono $f(x)=0$ nel dominio e individuano le intersezioni con l'asse $x$. L'intersezione con l'asse $y$ è $(0,f(0))$, se $0$ appartiene al dominio. Per $f(x)=\dfrac{x-2}{x+1}$, lo zero è $2$, $f(0)=-2$ e il segno è positivo per $x<-1$ oppure $x>2$. Il punto $-1$ resta escluso.
:::

## Simmetrie

:::definizione{#simmetrie titolo="Funzioni pari e dispari"}
Su un dominio simmetrico rispetto a $0$, $f$ è **pari** se $f(-x)=f(x)$ e **dispari** se $f(-x)=-f(x)$. I grafici hanno rispettivamente simmetria rispetto all'asse $y$ e all'origine. $x^2+1$ è pari, $x^3-x$ è dispari. La funzione $x^2+x$ non soddisfa nessuna delle due identità. Il controllo si fa per tutti i punti del dominio.
:::

## Composizione

:::definizione{#composizione titolo="Applicare due leggi in successione"}
La composta $(g\circ f)(x)=g(f(x))$ applica prima $f$, poi $g$. Il suo dominio contiene i punti $x\in D_f$ per cui $f(x)\in D_g$. Se $f(x)=x-1$ e $g(x)=\sqrt x$, allora $(g\circ f)(x)=\sqrt{x-1}$ con $x\geq1$; $(f\circ g)(x)=\sqrt x-1$ ha invece dominio $x\geq0$.
:::

## Funzione inversa

:::teorema{#inversa titolo="Invertire una corrispondenza"}
Una funzione ammette inversa dal suo insieme immagine al dominio se è iniettiva, cioè se valori distinti del dominio hanno immagini distinte. Per $f(x)=2x+3$, dall'equazione $y=2x+3$ si ricava $x=\dfrac{y-3}{2}$, quindi $f^{-1}(x)=\dfrac{x-3}{2}$. La funzione $x^2$ su $\mathbb R$ non è iniettiva; ristretta a $[0,+\infty)$ ha inversa $\sqrt x$.
:::

## Traslazioni del grafico

:::teorema{#traslazioni titolo="Spostamenti orizzontali e verticali"}
Il grafico di $y=f(x-h)+k$ si ottiene spostando quello di $f$ di $h$ orizzontalmente e di $k$ verticalmente. Ogni punto $(u,f(u))$ diventa $(u+h,f(u)+k)$. Per $y=(x-2)^2+1$, il vertice di $y=x^2$ passa da $(0,0)$ a $(2,1)$. Il segno dentro l'argomento si legge dalla sostituzione $u=x-h$.

::grafico{f="x^2;(x-2)^2+1" xmin=-3 xmax=5 ymin=-1 ymax=10 punti="0,0;2,1" titolo="La traslazione porta il vertice da $(0,0)$ a $(2,1)$"}
:::

## Immagine e monotonia

:::definizione{#immagine titolo="Crescenza e valori assunti"}
Una funzione è strettamente crescente su un intervallo se $x_1<x_2$ implica $f(x_1)<f(x_2)$. È strettamente decrescente se il confronto delle immagini si inverte. Per $f(x)=(x-h)^2+k$, con coefficiente del quadrato positivo, il minimo è $k$ e l'immagine è $[k,+\infty)$. Il grafico decresce fino a $h$ e cresce dopo $h$; non occorre usare le derivate per queste proprietà.
:::
