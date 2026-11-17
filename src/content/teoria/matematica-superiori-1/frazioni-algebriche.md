---
titolo: "Frazioni algebriche"
sommario: "Condizioni di esistenza, semplificazioni, operazioni e controllo dei valori esclusi."
---

## Condizioni di esistenza

:::definizione{#dominio titolo="Il denominatore deve essere non nullo"}
Una **frazione algebrica** è un quoziente $\dfrac{P(x)}{Q(x)}$ di polinomi, definito per i valori di $x$ che rendono $Q(x)\ne0$. Questo insieme di valori è il dominio dell’espressione.

Per $\dfrac{x+1}{x-3}$ si esclude $x=3$. Il valore $x=-1$ è invece ammesso e rende nulla la frazione. Se il denominatore è $x^2-9=(x-3)(x+3)$, si escludono entrambi i valori $3$ e $-3$. Un numeratore nullo è consentito quando il denominatore resta non nullo.
:::

## Semplificare fattori

:::teorema{#semplificare titolo="Stessa frazione nel dominio iniziale"}
Un fattore comune non nullo può essere semplificato fra numeratore e denominatore. Per $x\ne3$,

$$
\frac{x^2-9}{x-3}
=\frac{(x-3)(x+3)}{x-3}
=x+3.
$$

Il valore $x=3$ resta escluso dall’espressione iniziale. Nel grafico si usa un cerchio vuoto di coordinate $(3,6)$ perché la formula $x+3$ fornisce ordinata $6$ in quel punto.

::grafico{f="x+3" xmin=-4 xmax=7 ymin=-2 ymax=11 punti="3,6,vuoto" titolo="Grafico della frazione con il punto corrispondente a x = 3 escluso"}

:::

:::attenzione{titolo="La cancellazione riguarda i fattori"}
Per $x\ne0$ il numeratore di $\dfrac{x+3}{x}$ è una somma. Dividendo entrambi gli addendi per $x$ si ottiene $1+\dfrac3x$. Per $x=2$ il valore è $\dfrac52$, perciò cancellare il solo addendo $x$ e scrivere $3$ dà un risultato diverso.
:::

## Addizioni e sottrazioni

:::teorema{#somme titolo="Costruire un denominatore comune"}
Con denominatori uguali si sommano o sottraggono i numeratori. Con denominatori diversi si riscrivono le frazioni con un denominatore comune. Per $x\ne3,-3$,

$$
\begin{aligned}
\frac1{x-3}+\frac1{x+3}
&=\frac{(x+3)+(x-3)}{(x-3)(x+3)}\\
&=\frac{2x}{x^2-9}.
\end{aligned}
$$

Nella differenza, il secondo numeratore va sottratto per intero:

$$
\frac1{x-3}-\frac1{x+3}=\frac{(x+3)-(x-3)}{x^2-9}=\frac6{x^2-9}.
$$

Il segno meno cambia il segno di entrambi i termini del numeratore sottratto.
:::

:::esempio{titolo="Denominatori con un fattore comune"}
I denominatori $x(x-2)$ e $x-2$ hanno in comune $x-2$. Un denominatore comune è dunque $x(x-2)$. Con $x\ne0$ e $x\ne2$ soltanto la seconda frazione deve essere riscritta.

$$
\begin{aligned}
\frac{1}{x(x-2)}+\frac{2}{x-2}
&=\frac{1}{x(x-2)}+\frac{2x}{x(x-2)}\\[6pt]
&=\frac{2x+1}{x(x-2)}.
\end{aligned}
$$
:::

## Prodotti e segni

:::teorema{#prodotti titolo="Moltiplicare prima o semplificare prima"}
Nel prodotto si moltiplicano numeratori e denominatori. Quando sono visibili fattori comuni, si possono semplificare prima di sviluppare. Per $x\ne3,-3$,

$$
\frac{x-3}{x+3}\cdot\frac{x+3}{2(x-3)}=\frac12.
$$

Le condizioni iniziali restano valide anche se il risultato è costante.

Il segno meno può essere raccolto come un fattore. Poiché $-x-3=-(x+3)$, per $x\ne-3$ si ha $\dfrac{-x-3}{x+3}=-1$. Le espressioni $x-3$ e $3-x$ sono opposte, non uguali.
:::

## Divisioni fra frazioni algebriche

:::teorema{#divisioni titolo="Il divisore deve essere definito e non nullo"}
Dividere per una frazione equivale a moltiplicare per il suo reciproco. Occorre che entrambe le frazioni siano definite e che la frazione divisore sia diversa da zero.

Per $\dfrac1{x+3}:\dfrac{x-1}{x+3}$, si richiede $x\ne-3$ per i denominatori e $x\ne1$ perché il divisore non sia zero. Nel dominio così ottenuto,

$$
\frac1{x+3}\cdot\frac{x+3}{x-1}=\frac1{x-1}.
$$

Anche nella forma semplificata si lavora sul dominio iniziale, che esclude $x=-3$ e $x=1$.
:::

## Valori numerici e zeri

:::esempio{#valori titolo="Verificare prima l’ammissibilità"}
Per valutare $\dfrac{x+1}{x-3}$ in $x=5$, il denominatore vale due ed è non nullo. Si può quindi sostituire:

$$
\frac{5+1}{5-3}=\frac62=3.
$$

La sostituzione $x=3$ non produce un numero e non può essere usata come risposta.

Per trovare quando $\dfrac{x-4}{x+1}$ vale zero, si pone a zero il numeratore e si controlla il denominatore. Si ottiene $x=4$ e il denominatore vale cinque; quindi quel valore è ammesso. Nel caso di $\dfrac{(x-4)^2}{x-4}$ il numeratore si annulla ancora in $4$. Anche il denominatore è zero in quel punto, quindi la frazione non ha zeri.
:::
