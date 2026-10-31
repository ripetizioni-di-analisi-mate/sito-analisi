---
titolo: Scomposizione in fattori e frazioni algebriche
sommario: Come si scrive un polinomio come prodotto di fattori con il raccoglimento, i prodotti notevoli e il trinomio con somma e prodotto, come si calcolano MCD e mcm di polinomi e come si semplificano e si combinano le frazioni algebriche con le loro condizioni di esistenza.
---

## Che cosa vuol dire scomporre

:::definizione{#scomposizione-in-fattori titolo="Scomposizione in fattori"}
**Scomporre in fattori** un polinomio significa scriverlo come prodotto di polinomi di grado più basso. Ciascun polinomio del prodotto si chiama **fattore**. Il grado di un polinomio in $x$ è l'esponente più alto con cui compare $x$, come si è visto nell'argomento su monomi e polinomi.

In parole semplici, si trasforma una somma in una moltiplicazione, come si fa con un numero quando si scrive $12 = 2^2 \cdot 3$. Per esempio
$$
x^2 + 3x = x\,(x + 3) .
$$
Il polinomio $x^2 + 3x$ ha grado $2$, mentre i fattori $x$ e $x + 3$ hanno grado $1$. Le due scritture danno lo stesso valore per ogni numero messo al posto di $x$. Con $x = 2$ si ha $4 + 6 = 10$ e anche $2 \cdot 5 = 10$.

La scomposizione serve a semplificare le frazioni algebriche, cioè le frazioni con le lettere, e a trovare i numeri che rendono nullo un polinomio.
:::

:::esempio{titolo="Una scomposizione si controlla moltiplicando"}
Per controllare che $(x - 2)(x + 5)$ sia la scomposizione di $x^2 + 3x - 10$ si moltiplicano i due fattori:
$$
\begin{aligned}
(x - 2)(x + 5) &= x^2 + 5x - 2x - 10 \\[6pt]
&= x^2 + 3x - 10 .
\end{aligned}
$$
Il prodotto coincide con il polinomio di partenza, quindi la scomposizione è corretta.
:::

:::definizione{#polinomio-irriducibile titolo="Polinomio irriducibile e scomposizione completa"}
Un polinomio che non si può scrivere come prodotto di polinomi di grado più basso si dice **irriducibile**. Ogni polinomio di primo grado, come $x + 3$ o $2x - 5$, è irriducibile. Una scomposizione è **completa** quando tutti i fattori, esclusi i numeri, sono irriducibili.

Ogni polinomio di primo grado vale zero per un numero. Per esempio $x - 2$ vale zero per $x = 2$, e $2x + 1$ vale zero per $x = -\dfrac{1}{2}$, perché $2 \cdot \left(-\dfrac{1}{2}\right) + 1 = 0$. Un prodotto che contiene il fattore $x - 2$ vale quindi zero per $x = 2$. Il polinomio $x^2 + 4$ invece non vale mai zero, perché $x^2$ è maggiore o uguale a $0$ e perciò $x^2 + 4 \geq 4$. Quindi $x^2 + 4$ non ha fattori di primo grado ed è irriducibile.
:::

## Raccoglimento totale e parziale

:::richiamo{titolo="Proprietà distributiva"}
Per tutti i numeri $a$, $b$, $c$ vale
$$
a \cdot (b + c) = a \cdot b + a \cdot c .
$$
:::

:::teorema{#raccoglimento-totale titolo="Raccoglimento totale"}
Se tutti i termini di un polinomio hanno un fattore in comune, il polinomio è uguale al prodotto di quel fattore per il polinomio che si ottiene dividendo ogni termine per il fattore. Questo metodo si chiama **raccoglimento totale**, oppure raccoglimento a fattore comune.

È la proprietà distributiva letta da destra a sinistra. Per esempio
$$
3x + 6 = 3 \cdot x + 3 \cdot 2 = 3\,(x + 2) .
$$
Con $x = 1$ il polinomio vale $3 + 6 = 9$ e il prodotto vale $3 \cdot 3 = 9$.

::grafico{assi=0 uguale=1 poligoni="0,0 4,0 4,4 0,4;4,0 7,0 7,4 4,4" linee="0,0 7,0 7,4 0,4 0,0;4,0 4,4;0,4.6 7,4.6" etichette="1.55,1.9,x²;5.05,1.9,3x;1.85,-0.65,x;5.35,-0.65,3;-0.75,1.9,x;2.85,5.05,x + 3" xmin=-1.3 xmax=8 ymin=-1.3 ymax=5.7 titolo="Il rettangolo di lati $x$ e $x + 3$ è formato da un quadrato di area $x^2$ e da un rettangolo di area $3x$, quindi $x^2 + 3x = x\,(x + 3)$"}

:::

:::esempio{titolo="Come si sceglie il fattore comune"}
Il fattore comune è formato dal MCD dei coefficienti e dalle lettere presenti in *tutti* i termini, ciascuna con l'esponente più piccolo.

Nel polinomio $6x^3 - 9x^2$ i coefficienti sono $6$ e $9$, e $\operatorname{MCD}(6, 9) = 3$. La lettera $x$ compare in entrambi i termini, con esponente più piccolo $2$. Il fattore comune è quindi $3x^2$. Dividendo i termini si ottiene $\dfrac{6x^3}{3x^2} = 2x$ e $\dfrac{9x^2}{3x^2} = 3$, perciò
$$
6x^3 - 9x^2 = 3x^2\,(2x - 3) .
$$
Allo stesso modo $10x^2 y - 15xy^2 = 5xy\,(2x - 3y)$, perché $\operatorname{MCD}(10, 15) = 5$ e le lettere $x$ e $y$ compaiono in entrambi i termini con esponente più piccolo $1$.
:::

:::attenzione
Quando un termine coincide con il fattore comune, nel secondo fattore al suo posto resta $1$, perché il termine diviso per se stesso dà $1$. Per esempio $5x^2 + 5x = 5x\,(x + 1)$. La scrittura $5x \cdot x$ è sbagliata. Con $x = 1$ il polinomio vale $5 + 5 = 10$, mentre $5x \cdot x$ vale $5$.
:::

:::osservazione
Il fattore comune può essere un binomio. In $3x\,(x - 2) + 5\,(x - 2)$ entrambi i termini contengono $x - 2$, quindi
$$
3x\,(x - 2) + 5\,(x - 2) = (x - 2)(3x + 5) .
$$
Si può raccogliere anche un numero negativo. Per esempio $-2x - 6 = -2\,(x + 3)$, perché $-2 \cdot x = -2x$ e $-2 \cdot 3 = -6$.
:::

:::teorema{#raccoglimento-parziale titolo="Raccoglimento parziale"}
Quando i termini non hanno un fattore comune a tutti, si possono dividere in gruppi e fare un raccoglimento totale in ciascun gruppo. Se i gruppi danno lo stesso polinomio, questo si raccoglie a sua volta. Il metodo si chiama **raccoglimento parziale**. Per esempio
$$
\begin{aligned}
ax + ay + 2x + 2y &= a\,(x + y) + 2\,(x + y) \\[6pt]
&= (x + y)(a + 2) .
\end{aligned}
$$
Nel primo gruppo si raccoglie $a$, nel secondo si raccoglie $2$, e in entrambi i gruppi resta $x + y$. Con $a = 1$, $x = 3$ e $y = 4$ il polinomio vale $3 + 4 + 6 + 8 = 21$ e il prodotto vale $7 \cdot 3 = 21$.
:::

:::esempio{titolo="Raccoglimento parziale con una sola lettera"}
Nel polinomio $x^3 - 2x^2 + 3x - 6$ si raggruppano i primi due termini e gli ultimi due:
$$
\begin{aligned}
x^3 - 2x^2 + 3x - 6 &= x^2\,(x - 2) + 3\,(x - 2) \\[6pt]
&= (x - 2)(x^2 + 3) .
\end{aligned}
$$
La scomposizione è completa, perché $x - 2$ ha grado $1$ e $x^2 + 3$ non vale mai zero, dato che $x^2 + 3 \geq 3$.
:::

:::osservazione
A volte in un gruppo si raccoglie un numero negativo, per ottenere lo stesso polinomio dell'altro gruppo. Nel polinomio $ax - ay - 2x + 2y$ si raccoglie $-2$ negli ultimi due termini, perché $-2 \cdot x = -2x$ e $-2 \cdot (-y) = 2y$:
$$
\begin{aligned}
ax - ay - 2x + 2y &= a\,(x - y) - 2\,(x - y) \\[6pt]
&= (x - y)(a - 2) .
\end{aligned}
$$
:::

## Differenza di quadrati e quadrato di un binomio

:::richiamo{titolo="Prodotti notevoli"}
Per tutti i numeri $a$ e $b$ valgono
$$
(a + b)(a - b) = a^2 - b^2 ,
$$
$$
(a + b)^2 = a^2 + 2ab + b^2 ,
\qquad
(a - b)^2 = a^2 - 2ab + b^2 .
$$
:::

:::teorema{#differenza-di-quadrati titolo="Differenza di quadrati"}
La **base** di un quadrato è il numero o il monomio che, elevato al quadrato, lo dà. Una differenza di due quadrati è uguale al prodotto della somma per la differenza delle basi:
$$
a^2 - b^2 = (a + b)(a - b) .
$$
Per esempio la base di $9$ è $3$ e la base di $4x^2$ è $2x$. Perciò
$$
x^2 - 9 = (x + 3)(x - 3) ,
\qquad
4x^2 - 25 = (2x + 5)(2x - 5) .
$$
La regola serve anche nei calcoli con i numeri. Per esempio $10^2 - 3^2 = 13 \cdot 7 = 91$, e infatti $100 - 9 = 91$.

::grafico{assi=0 uguale=1 poligoni="0,0 5,0 5,3 3,3 3,5 0,5;8,0 13,0 13,3 8,3;13,0 15,0 15,3 13,3" linee="0,0 5,0 5,3 3,3 3,5 0,5 0,0;0,3 3,3;8,0 15,0 15,3 8,3 8,0;13,0 13,3" segmenti="3,5,5,5;5,3,5,5" etichette="2.3,-0.7,a;-0.7,2.4,a;3.8,5.4,b;1.0,4.0,A;2.2,1.3,B;10.3,1.3,B;13.75,1.3,A;10.6,-0.7,a + b;15.3,1.3,a − b;6.1,1.5,→" xmin=-1.2 xmax=17.6 ymin=-1.3 ymax=6 titolo="Dal quadrato di lato $a$ si toglie il quadrato di lato $b$; i due pezzi $A$ e $B$ rimasti formano un rettangolo di lati $a + b$ e $a - b$, quindi $a^2 - b^2 = (a + b)(a - b)$"}

:::

:::attenzione
La somma di due quadrati, come $x^2 + 9$, è diversa da $(x + 3)(x - 3)$ e da $(x + 3)^2$. Infatti $(x + 3)(x - 3) = x^2 - 9$ e $(x + 3)^2 = x^2 + 6x + 9$. Con $x = 1$ il binomio $x^2 + 9$ vale $10$, mentre $(x + 3)(x - 3)$ vale $-8$ e $(x + 3)^2$ vale $16$. Il binomio $x^2 + 9$ è irriducibile, perché $x^2 + 9 \geq 9$ e quindi non vale mai zero.
:::

:::teorema{#quadrato-di-binomio titolo="Trinomio quadrato di un binomio"}
Un trinomio in cui due termini sono quadrati e il terzo è il doppio prodotto delle loro basi è il quadrato di un binomio:
$$
a^2 + 2ab + b^2 = (a + b)^2 ,
\qquad
a^2 - 2ab + b^2 = (a - b)^2 .
$$
Il segno nel binomio è il segno del doppio prodotto. Nel trinomio $x^2 + 6x + 9$ i quadrati sono $x^2$ e $9 = 3^2$, e il doppio prodotto delle basi è $2 \cdot x \cdot 3 = 6x$, quindi
$$
x^2 + 6x + 9 = (x + 3)^2 .
$$
Nel trinomio $4x^2 - 20x + 25$ le basi sono $2x$ e $5$, e $2 \cdot 2x \cdot 5 = 20x$. Il doppio prodotto ha il segno meno, perciò $4x^2 - 20x + 25 = (2x - 5)^2$.

::grafico{assi=0 uguale=1 poligoni="0,0 4,0 4,4 0,4;4,0 7,0 7,4 4,4;0,4 4,4 4,7 0,7;4,4 7,4 7,7 4,7" linee="0,0 7,0 7,7 0,7 0,0;4,0 4,7;0,4 7,4" etichette="1.55,1.9,x²;5.05,1.9,3x;1.55,5.35,3x;5.3,5.35,9;1.85,-0.65,x;5.35,-0.65,3;-0.75,1.9,x;-0.75,5.35,3" xmin=-1.3 xmax=8 ymin=-1.3 ymax=7.7 titolo="Il quadrato di lato $x + 3$ è formato da un quadrato di area $x^2$, da due rettangoli di area $3x$ e da un quadrato di area $9$, quindi $(x + 3)^2 = x^2 + 6x + 9$"}

:::

:::attenzione
Il trinomio $x^2 + 2x + 4$ è diverso da $(x + 2)^2$. I termini $x^2$ e $4$ sono quadrati con basi $x$ e $2$, ma il doppio prodotto delle basi è $2 \cdot x \cdot 2 = 4x$, e nel trinomio il termine di primo grado è $2x$. Infatti $(x + 2)^2 = x^2 + 4x + 4$. Con $x = 1$ il trinomio vale $7$ e $(x + 2)^2$ vale $9$.
:::

## Trinomio con somma e prodotto

:::teorema{#trinomio-somma-prodotto titolo="Trinomio di secondo grado con somma e prodotto"}
Si considera un trinomio $x^2 + sx + p$, in cui il coefficiente di $x^2$ è $1$. Se due numeri $a$ e $b$ soddisfano
$$
\begin{cases}
a + b = s \\
a \cdot b = p
\end{cases}
$$
allora
$$
x^2 + sx + p = (x + a)(x + b) .
$$
In parole, si cercano due numeri che hanno per *somma* il coefficiente di $x$ e per *prodotto* il termine senza $x$. La regola segue dal prodotto
$$
(x + a)(x + b) = x^2 + bx + ax + ab = x^2 + (a + b)\,x + ab .
$$
Per esempio $x^2 + 5x + 6 = (x + 2)(x + 3)$, perché $2 + 3 = 5$ e $2 \cdot 3 = 6$.

::grafico{assi=0 uguale=1 poligoni="0,0 4,0 4,4 0,4;4,0 7,0 7,4 4,4;0,4 4,4 4,6 0,6;4,4 7,4 7,6 4,6" linee="0,0 7,0 7,6 0,6 0,0;4,0 4,6;0,4 7,4" etichette="1.55,1.9,x²;5.05,1.9,3x;1.55,4.85,2x;5.3,4.85,6;1.85,-0.65,x;5.35,-0.65,3;-0.75,1.9,x;-0.75,4.85,2" xmin=-1.3 xmax=8 ymin=-1.3 ymax=6.7 titolo="Il rettangolo di lati $x + 2$ e $x + 3$ ha area $x^2 + 3x + 2x + 6 = x^2 + 5x + 6$; il termine $6$ è il prodotto $2 \cdot 3$ e il coefficiente $5$ è la somma $2 + 3$"}

:::

:::esempio{titolo="Come si cercano i due numeri"}
Si parte dal prodotto, perché le coppie di numeri interi con un prodotto dato sono poche, e il segno si sceglie con la regola dei segni vista nell'argomento sui numeri relativi.

Nel trinomio $x^2 - 8x + 15$ il prodotto $15$ è positivo, quindi i due numeri hanno lo stesso segno. La somma $-8$ è negativa, perciò sono entrambi negativi. Tra le coppie $(-1, -15)$ e $(-3, -5)$ solo la seconda ha somma $-8$, quindi
$$
x^2 - 8x + 15 = (x - 3)(x - 5) .
$$
Nel trinomio $x^2 - x - 6$ il prodotto $-6$ è negativo, quindi i due numeri hanno segni opposti. La coppia $2$ e $-3$ ha prodotto $-6$ e somma $-1$, perciò $x^2 - x - 6 = (x + 2)(x - 3)$.
:::

:::osservazione
Se il coefficiente di $x^2$ è diverso da $1$ ma divide tutti i coefficienti, prima si fa il raccoglimento totale. Per esempio
$$
2x^2 + 10x + 12 = 2\,(x^2 + 5x + 6) = 2\,(x + 2)(x + 3) .
$$
Se nessuna coppia di numeri interi ha la somma e il prodotto richiesti, come accade per $x^2 + x + 1$, questo metodo non si applica.
:::

## Somma e differenza di cubi

:::teorema{#somma-differenza-cubi titolo="Somma e differenza di cubi"}
Per tutti i numeri $a$ e $b$ valgono
$$
a^3 + b^3 = (a + b)(a^2 - ab + b^2) ,
$$
$$
a^3 - b^3 = (a - b)(a^2 + ab + b^2) .
$$
La seconda uguaglianza si controlla moltiplicando, perché i termini centrali si annullano a coppie:
$$
\begin{aligned}
(a - b)(a^2 + ab + b^2) &= a^3 + a^2 b + ab^2 - a^2 b - ab^2 - b^3 \\[6pt]
&= a^3 - b^3 .
\end{aligned}
$$
La prima si controlla allo stesso modo. Per esempio
$$
x^3 - 8 = (x - 2)(x^2 + 2x + 4) ,
\qquad
27x^3 + 1 = (3x + 1)(9x^2 - 3x + 1) ,
$$
perché $8 = 2^3$, $27x^3 = (3x)^3$ e $1 = 1^3$. Con i numeri, $3^3 - 1^3 = 27 - 1 = 26$ e $(3 - 1)(9 + 3 + 1) = 2 \cdot 13 = 26$.
:::

:::osservazione{#falso-quadrato titolo="Falso quadrato"}
Il trinomio $a^2 + ab + b^2$, e anche $a^2 - ab + b^2$, si chiama **falso quadrato**, perché assomiglia al quadrato di un binomio ma ha il termine $ab$ al posto del doppio prodotto $2ab$. Un falso quadrato è irriducibile. Per esempio $x^2 + 2x + 4$ si scrive
$$
x^2 + 2x + 4 = x^2 + 2x + 1 + 3 = (x + 1)^2 + 3 .
$$
Il quadrato $(x + 1)^2$ è maggiore o uguale a $0$, quindi $x^2 + 2x + 4 \geq 3$ per ogni $x$. Il trinomio non vale mai zero e perciò non ha fattori di primo grado. La scomposizione $x^3 - 8 = (x - 2)(x^2 + 2x + 4)$ è quindi completa.
:::

:::osservazione{#scomposizione-completa titolo="Ordine dei metodi per una scomposizione completa"}
Per ottenere una scomposizione completa si applicano i metodi in quest'ordine.

1. Raccoglimento totale, se c'è un fattore comune a tutti i termini.
2. Con due termini, differenza di quadrati oppure somma o differenza di cubi.
3. Con tre termini, quadrato di un binomio oppure trinomio con somma e prodotto.
4. Con quattro termini, raccoglimento parziale.

Su ogni fattore ottenuto si ricomincia dal primo passo, finché tutti i fattori sono irriducibili. Per esempio
$$
2x^3 - 18x = 2x\,(x^2 - 9) = 2x\,(x + 3)(x - 3) ,
$$
$$
x^4 - 16 = (x^2 + 4)(x^2 - 4) = (x^2 + 4)(x + 2)(x - 2) .
$$
Nel secondo esempio $x^4 = (x^2)^2$ e $16 = 4^2$, quindi la differenza di quadrati si applica due volte. Il fattore $x^2 + 4$ è irriducibile, perché $x^2 + 4 \geq 4$.
:::

## MCD e mcm di polinomi

:::richiamo{titolo="Calcolo di MCD e mcm con la scomposizione"}
Scomposti due numeri in fattori primi, il $\operatorname{MCD}$ è il prodotto dei fattori comuni, ciascuno con l'esponente più piccolo, e il $\operatorname{mcm}$ è il prodotto dei fattori comuni e non comuni, ciascuno con l'esponente più grande.
:::

:::definizione{#mcd-mcm-polinomi titolo="MCD e mcm di polinomi"}
Il **massimo comune divisore** e il **minimo comune multiplo** di due o più polinomi si calcolano come per i numeri, dopo aver fatto la scomposizione completa di ciascun polinomio.

- Il $\operatorname{MCD}$ è il prodotto dei fattori comuni a tutti i polinomi, ciascuno con l'esponente più piccolo.
- Il $\operatorname{mcm}$ è il prodotto di tutti i fattori, comuni e non comuni, ciascuno con l'esponente più grande.

Per i numeri $12 = 2^2 \cdot 3$ e $18 = 2 \cdot 3^2$ si ottiene $\operatorname{MCD}(12, 18) = 2 \cdot 3 = 6$ e $\operatorname{mcm}(12, 18) = 2^2 \cdot 3^2 = 36$. Per i polinomi $x^2 - 4 = (x + 2)(x - 2)$ e $x^2 + 4x + 4 = (x + 2)^2$ si ottiene
$$
\operatorname{MCD} = x + 2 ,
\qquad
\operatorname{mcm} = (x + 2)^2 (x - 2) .
$$
Il $\operatorname{MCD}$ serve a semplificare le frazioni algebriche e il $\operatorname{mcm}$ è il denominatore comune nella loro somma.
:::

:::esempio{titolo="MCD e mcm con un fattore numerico"}
Si considerano $6x^2 + 6x$ e $4x^2 - 4$. Le scomposizioni complete sono
$$
6x^2 + 6x = 2 \cdot 3 \cdot x\,(x + 1) ,
\qquad
4x^2 - 4 = 2^2 \,(x + 1)(x - 1) .
$$
I fattori comuni sono $2$ e $x + 1$, con esponente più piccolo $1$, quindi $\operatorname{MCD} = 2\,(x + 1)$. Nel $\operatorname{mcm}$ entrano $2^2$, $3$, $x$, $x + 1$ e $x - 1$, perciò $\operatorname{mcm} = 12x\,(x + 1)(x - 1)$.
:::

## Frazioni algebriche e condizioni di esistenza

:::definizione{#frazione-algebrica titolo="Frazione algebrica"}
Una **frazione algebrica** è un quoziente $\dfrac{A}{B}$ in cui il numeratore $A$ e il denominatore $B$ sono polinomi, e $B$ contiene la lettera. In parole semplici, è una frazione con le lettere. Per esempio
$$
\frac{2x + 1}{x^2 - 4x}
$$
è una frazione algebrica. Sostituendo un numero al posto di $x$ si ottiene una frazione tra numeri. Con $x = 2$ si ha $\dfrac{4 + 1}{4 - 8} = \dfrac{5}{-4} = -\dfrac{5}{4}$.
:::

:::definizione{#condizioni-di-esistenza titolo="Condizioni di esistenza"}
La divisione per zero non ha significato, quindi da una frazione algebrica si escludono i numeri che rendono nullo il denominatore. Le **condizioni di esistenza** sono le condizioni che $x$ deve soddisfare perché il denominatore sia diverso da zero. In parole semplici, dicono quali numeri si possono mettere al posto di $x$.

Nella frazione $\dfrac{2x + 1}{x^2 - 4x}$, con $x = 4$ il denominatore vale $16 - 16 = 0$ e si ottiene $\dfrac{9}{0}$, che non ha significato. Il valore $x = 4$ è perciò escluso.
:::

:::teorema{#legge-annullamento-prodotto titolo="Legge di annullamento del prodotto"}
Un prodotto vale zero se e solo se almeno uno dei fattori vale zero.

Per esempio $3 \cdot 0 = 0$, mentre un prodotto di numeri tutti diversi da zero, come $2 \cdot (-5) = -10$, è diverso da zero. La legge serve a trovare i valori esclusi, perché un denominatore scomposto in fattori vale zero esattamente quando vale zero uno dei suoi fattori.

Nella frazione $\dfrac{2x + 1}{x^2 - 4x}$ il denominatore si scompone con un raccoglimento totale, $x^2 - 4x = x\,(x - 4)$. Il fattore $x$ vale zero per $x = 0$, e il fattore $x - 4$ vale zero per $x = 4$, perché $4 - 4 = 0$. Le due condizioni vanno soddisfatte insieme, quindi le condizioni di esistenza sono
$$
\begin{cases}
x \neq 0 \\
x \neq 4
\end{cases}
$$

::grafico{assi=0 uguale=1 linee="-2.5,0 6.5,0;6.3,0.1 6.5,0 6.3,-0.1;-2,-0.08 -2,0.08;-1,-0.08 -1,0.08;0,-0.08 0,0.08;1,-0.08 1,0.08;2,-0.08 2,0.08;3,-0.08 3,0.08;4,-0.08 4,0.08;5,-0.08 5,0.08;6,-0.08 6,0.08" punti="0,0,vuoto;4,0,vuoto" etichette="-2.12,-0.4,−2;-1.12,-0.4,−1;-0.05,-0.4,0;0.95,-0.4,1;1.95,-0.4,2;2.95,-0.4,3;3.95,-0.4,4;4.95,-0.4,5;5.95,-0.4,6;6.45,0.25,x" xmin=-2.8 xmax=6.9 ymin=-0.7 ymax=0.5 titolo="Per la frazione $\dfrac{2x + 1}{x^2 - 4x}$ sono esclusi i valori $x = 0$ e $x = 4$, segnati con un cerchio vuoto; tutti gli altri numeri sono ammessi"}

:::

## Semplificazione delle frazioni algebriche

:::richiamo{titolo="Proprietà invariantiva delle frazioni"}
Se si dividono numeratore e denominatore di una frazione per uno stesso numero diverso da zero, si ottiene una frazione equivalente.
:::

:::teorema{#semplificazione-frazioni-algebriche titolo="Semplificazione di una frazione algebrica"}
Per semplificare una frazione algebrica si scompongono numeratore e denominatore, si scrivono le condizioni di esistenza e si dividono numeratore e denominatore per i fattori comuni, cioè per il loro $\operatorname{MCD}$. Per la proprietà invariantiva la frazione ottenuta è equivalente a quella di partenza, per tutti i valori ammessi di $x$. Per esempio
$$
\frac{x^2 - 9}{x^2 + 3x} = \frac{(x + 3)(x - 3)}{x\,(x + 3)} = \frac{x - 3}{x} ,
\qquad
\begin{cases}
x \neq 0 \\
x \neq -3
\end{cases}
$$
Il fattore comune $x + 3$ è diverso da zero per tutti i valori ammessi, quindi la divisione per $x + 3$ è lecita. Con $x = 1$ la frazione di partenza vale $\dfrac{1 - 9}{1 + 3} = \dfrac{-8}{4} = -2$ e la frazione semplificata vale $\dfrac{1 - 3}{1} = -2$.
:::

:::attenzione
Le condizioni di esistenza si scrivono sulla frazione di partenza, prima di semplificare. La frazione $\dfrac{x - 3}{x}$ ha significato anche per $x = -3$, ma la frazione $\dfrac{x^2 - 9}{x^2 + 3x}$ con $x = -3$ diventa $\dfrac{0}{0}$, che non ha significato. Perciò anche dopo la semplificazione resta la condizione $x \neq -3$.
:::

:::attenzione
Si semplificano soltanto i *fattori* comuni a numeratore e denominatore, e mai i singoli termini di una somma. La frazione $\dfrac{x + 3}{x + 5}$ è diversa da $\dfrac{3}{5}$. Con $x = 1$ la frazione vale $\dfrac{4}{6} = \dfrac{2}{3}$, che è diverso da $\dfrac{3}{5}$.
:::

## Operazioni con le frazioni algebriche

:::teorema{#somma-frazioni-algebriche titolo="Somma e differenza di frazioni algebriche"}
Due frazioni algebriche si sommano, o si sottraggono, come le frazioni tra numeri. Il denominatore comune è il $\operatorname{mcm}$ dei denominatori; ogni numeratore si moltiplica per il quoziente tra il denominatore comune e il proprio denominatore. Con i numeri si ha
$$
\frac{1}{2} + \frac{1}{3} = \frac{3}{6} + \frac{2}{6} = \frac{5}{6} .
$$
Con le lettere, per $x \neq 1$ e $x \neq -1$, il denominatore comune di $\dfrac{1}{x - 1}$ e $\dfrac{2}{x + 1}$ è $(x - 1)(x + 1)$, quindi
$$
\begin{aligned}
\frac{1}{x - 1} + \frac{2}{x + 1} &= \frac{(x + 1) + 2\,(x - 1)}{(x - 1)(x + 1)} \\[6pt]
&= \frac{x + 1 + 2x - 2}{(x - 1)(x + 1)} \\[6pt]
&= \frac{3x - 1}{(x - 1)(x + 1)} .
\end{aligned}
$$
Con $x = 2$ la somma di partenza vale $1 + \dfrac{2}{3} = \dfrac{5}{3}$ e il risultato vale $\dfrac{6 - 1}{1 \cdot 3} = \dfrac{5}{3}$.
:::

:::teorema{#prodotto-quoziente-frazioni-algebriche titolo="Prodotto e quoziente di frazioni algebriche"}
Il prodotto di due frazioni algebriche ha per numeratore il prodotto dei numeratori e per denominatore il prodotto dei denominatori. Il quoziente si ottiene moltiplicando la prima frazione per il **reciproco** della seconda, cioè per la frazione con numeratore e denominatore scambiati. Prima di moltiplicare si scompone tutto e si semplificano i fattori comuni. Per esempio, con $x \neq -2$ e $x \neq 1$,
$$
\begin{aligned}
\frac{x^2 - 1}{x + 2} \cdot \frac{3x + 6}{x - 1} &= \frac{(x + 1)(x - 1)}{x + 2} \cdot \frac{3\,(x + 2)}{x - 1} \\[6pt]
&= 3\,(x + 1) .
\end{aligned}
$$
Nel quoziente anche il numeratore della seconda frazione va al denominatore, quindi anche quel numeratore deve essere diverso da zero. Nel quoziente
$$
\frac{x}{x + 3} : \frac{x^2}{x^2 - 9}
$$
il denominatore $x^2 - 9 = (x + 3)(x - 3)$ dà le condizioni $x \neq -3$ e $x \neq 3$, e il numeratore $x^2$ della seconda frazione dà la condizione $x \neq 0$. Le condizioni di esistenza sono perciò
$$
\begin{cases}
x \neq -3 \\
x \neq 3 \\
x \neq 0
\end{cases}
$$
e il quoziente vale
$$
\frac{x}{x + 3} \cdot \frac{(x + 3)(x - 3)}{x^2} = \frac{x - 3}{x} .
$$
Con $x = 1$ il quoziente di partenza è $\dfrac{1}{4} : \left(-\dfrac{1}{8}\right) = \dfrac{1}{4} \cdot (-8) = -2$, e il risultato è $\dfrac{1 - 3}{1} = -2$.
:::
