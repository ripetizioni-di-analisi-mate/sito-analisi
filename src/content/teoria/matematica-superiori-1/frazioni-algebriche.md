---
titolo: "Frazioni algebriche"
sommario: "Condizioni di esistenza, semplificazioni, operazioni e controllo dei valori esclusi."
---

:::percorso
Le operazioni con frazioni numeriche si estendono ai quozienti di polinomi. La scomposizione permette di riconoscere fattori comuni e denominatori comuni. La lettera al denominatore richiede inoltre di dichiarare i valori esclusi. Secondo la programmazione della classe, questa parte viene affrontata alla fine del primo anno o all’inizio del secondo.
:::

## Condizioni di esistenza

:::definizione{#dominio titolo="Il denominatore deve essere non nullo"}
Una **frazione algebrica** è un quoziente $\dfrac{P(x)}{Q(x)}$ di polinomi, definito per i valori di x che rendono $Q(x)\ne0$. Questo insieme di valori è il dominio dell’espressione.

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

Il valore $x=3$ resta escluso dall’espressione iniziale, anche se la formula semplificata potrebbe essere calcolata lì.

Si cancellano fattori, non singoli addendi. Per esempio $\dfrac{x+3}{x}$ non si riduce a $3$; per $x\ne0$ si può riscrivere come $1+\dfrac3x$. Un controllo numerico, per esempio $x=2$, permette di riconoscere subito la cancellazione errata.
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

La forma semplificata non cancella l’esclusione iniziale $x=-3$.
:::

## Valori numerici e zeri

:::esempio{#valori titolo="Verificare prima l’ammissibilità"}
Per valutare $\dfrac{x+1}{x-3}$ in $x=5$, il denominatore vale due ed è non nullo. Si può quindi sostituire:

$$
\frac{5+1}{5-3}=\frac62=3.
$$

La sostituzione $x=3$ non produce un numero e non può essere usata come risposta.

Per trovare quando $\dfrac{x-4}{x+1}$ vale zero, si pone a zero il numeratore e si controlla il denominatore. Si ottiene $x=4$ e il denominatore vale cinque; quindi quel valore è ammesso. Porre soltanto il numeratore uguale a zero senza il controllo del dominio potrebbe introdurre una soluzione inesistente.
:::
