---
titolo: "Vettori, componenti e prodotti"
sommario: "Somma di vettori, modulo, componenti e prodotti scalare e vettoriale negli esercizi di Fisica."
---

## Grandezze scalari e vettoriali

:::definizione{#scalari titolo="Numero oppure modulo, direzione e verso"}
Una grandezza scalare, come la massa, è descritta da un valore con unità. Un **vettore**, come lo spostamento o la forza, ha modulo, direzione e verso. Nel piano si rappresenta con due componenti $\vec A=(A_x,A_y)$.

Lo spostamento $(3,4)\,\mathrm{m}$ indica $3\,\mathrm{m}$ lungo l'asse $x$ e $4\,\mathrm{m}$ lungo l'asse $y$. Le due componenti hanno la stessa unità.
:::

## Modulo e componenti

:::definizione{#modulo titolo="Lunghezza del vettore"}
Il modulo di $\vec A=(A_x,A_y)$ è $|\vec A|=\sqrt{A_x^2+A_y^2}$. Per $\vec A=(3,4)\,\mathrm{m}$ si ottiene $|\vec A|=5\,\mathrm{m}$.

Se l'angolo $\theta$ è misurato dal semiasse positivo $x$, allora $A_x=|\vec A|\cos\theta$ e $A_y=|\vec A|\sin\theta$. La somma dei quadrati delle componenti restituisce il quadrato del modulo, poiché $\cos^2\theta+\sin^2\theta=1$.
:::

## Somma e differenza

:::osservazione{#somma titolo="Operazioni componente per componente"}
Per $\vec A=(A_x,A_y)$ e $\vec B=(B_x,B_y)$ valgono
$$
\vec A+\vec B=(A_x+B_x,A_y+B_y),\qquad
\vec A-\vec B=(A_x-B_x,A_y-B_y).
$$
Per esempio $(3,1)+(2,-4)=(5,-3)$. Sottrarre $\vec B$ equivale a sommare $-\vec B$, che ha lo stesso modulo e verso opposto. Le forze agenti su un corpo si sommano così per ottenere la risultante.
:::

## Multipli e versori

:::definizione{#versori titolo="Fattore scalare e vettore unitario"}
Per un numero reale $k$, $k\vec A=(kA_x,kA_y)$ e $|k\vec A|=|k||\vec A|$. Un fattore negativo inverte il verso.

Per $\vec A\ne\vec0$, il versore associato è $\widehat A=\dfrac{\vec A}{|\vec A|}$ e ha modulo uno. Per $(3,4)$ il versore è $\left(\dfrac35,\dfrac45\right)$. I versori cartesiani $\hat\imath$ e $\hat\jmath$ permettono di scrivere $\vec A=A_x\hat\imath+A_y\hat\jmath$.
:::

## Prodotto scalare e lavoro

:::definizione{#scalare titolo="Uno scalare ottenuto da due vettori"}
Il prodotto scalare è $\vec A\cdot\vec B=A_xB_x+A_yB_y=|\vec A||\vec B|\cos\theta$, dove $\theta$ è l'angolo tra i vettori. Per vettori non nulli, il prodotto è zero se sono perpendicolari.

Il lavoro di una forza costante lungo uno spostamento è $W=\vec F\cdot\vec s$. Una forza di $10\,\mathrm{N}$ che forma $60^\circ$ con uno spostamento di $2\,\mathrm{m}$ compie $W=10\cdot2\cos60^\circ=10\,\mathrm{J}$. Il segno dipende dal coseno dell'angolo.
:::

## Prodotto vettoriale

:::definizione{#vettoriale titolo="Modulo, direzione e verso del prodotto"}
Nello spazio, $\vec A\times\vec B$ è perpendicolare a entrambi i vettori e ha modulo $|\vec A||\vec B|\sin\theta$. Il verso segue la regola della mano destra: le dita ruotano dal primo vettore al secondo attraverso l'angolo minore, il pollice indica il prodotto.

Per due vettori nel piano $xy$, la componente lungo $z$ è $A_xB_y-A_yB_x$. Per $(2,0,0)$ e $(0,3,0)$ il prodotto è $(0,0,6)$; invertendo l'ordine si ottiene $(0,0,-6)$. Il prodotto vettoriale si usa nel momento di una forza e nella forza magnetica.
:::
