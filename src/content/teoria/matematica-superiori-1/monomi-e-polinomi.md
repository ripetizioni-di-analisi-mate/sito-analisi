---
titolo: "Monomi e polinomi"
sommario: "Espressioni letterali, grado, operazioni fra monomi e polinomi e sostituzione di valori."
---

:::percorso
Le lettere rappresentano numeri e permettono di esprimere una regola valida per molti casi. Le proprietà delle operazioni studiate con i numeri restano applicabili alle espressioni letterali. Il calcolo dei polinomi prepara prodotti notevoli, scomposizioni ed equazioni.
:::

## Coefficiente e parte letterale

:::definizione{#monomi titolo="Il monomio"}
Un **monomio** è un prodotto di un numero, detto coefficiente, e di potenze di lettere con esponenti interi non negativi. In $-3x^2y$ il coefficiente è $-3$ e la parte letterale è $x^2y$. I monomi $5x^2y$ e $-3x^2y$ sono **simili**, perché hanno la stessa parte letterale.

Una costante non nulla è un monomio di grado zero. L’espressione $\dfrac1x$ non è un monomio secondo questa definizione, perché contiene la lettera al denominatore. Il monomio nullo è il numero zero; il suo grado non viene assegnato con la regola usata per i monomi non nulli.
:::

## Grado e forma ridotta

:::definizione{#grado titolo="Il polinomio"}
Un **polinomio** è una somma finita di monomi. Si scrive in forma ridotta sommando tutti i monomi simili. Per esempio $3x^2+2x-x^2+4=2x^2+2x+4$.

Il grado complessivo di un monomio non nullo è la somma degli esponenti delle sue lettere: $x^3y^2$ ha grado cinque e grado tre rispetto a x. Il grado di un polinomio non nullo è il massimo grado dei suoi monomi dopo la riduzione. In $x^4+2x^2-x^4+1$ i termini di quarto grado si eliminano, quindi il grado finale è due. Il termine senza lettere è il **termine noto**.
:::

## Somme, differenze e opposti

:::teorema{#somme titolo="Sommare coefficienti di monomi simili"}
Nella somma di monomi simili si sommano i coefficienti e si mantiene la parte letterale: $4x^2y-7x^2y=-3x^2y$. Termini con parti letterali diverse restano separati: $2x+3y$ è già ridotto.

L’opposto di un polinomio cambia il segno di tutti i suoi termini. Per esempio

$$
(3x^2+2x-1)-(x^2-4x+5)=2x^2+6x-6.
$$

Il termine $-4x$ del secondo polinomio diventa $+4x$ quando si sottrae il polinomio intero. Si può controllare il risultato sommando alla differenza il polinomio sottratto.
:::

## Prodotti e proprietà distributiva

:::teorema{#prodotti titolo="Moltiplicare monomi e polinomi"}
Nel prodotto di monomi si moltiplicano i coefficienti e si sommano gli esponenti delle lettere uguali. Per esempio $(3x^2y)(-2xy^3)=-6x^3y^4$.

Un monomio moltiplica ciascun termine di un polinomio: $2x(x^2-3x+1)=2x^3-6x^2+2x$. Nel prodotto di due polinomi, ogni termine del primo moltiplica ogni termine del secondo. Così

$$
(x+3)(x+2)=x^2+2x+3x+6=x^2+5x+6.
$$

La distributiva può essere letta anche in senso inverso per raccogliere un fattore comune. Questo passaggio verrà usato nel capitolo sulle scomposizioni.
:::

## Quozienti e potenze di monomi

:::teorema{#quozienti titolo="Esponenti nel quoziente e nella potenza"}
Nel quoziente si dividono i coefficienti e si sottraggono gli esponenti delle lettere uguali, dove il denominatore è non nullo. Per $x,y\ne0$,

$$
\frac{12x^4y^3}{3x^2y}=4x^2y^2.
$$

Se compare un esponente negativo, il quoziente non è un monomio secondo la definizione adottata. Per esempio $x:x^2=\dfrac1x$ per $x\ne0$.

Per elevare un monomio a potenza si eleva ogni fattore: $(-2x^3y)^2=4x^6y^2$. Il segno del coefficiente e gli esponenti vanno trattati separatamente. Le condizioni di non annullamento iniziali di un quoziente restano valide dopo la semplificazione.
:::

## Valori numerici e modelli geometrici

:::esempio{#valore titolo="Sostituire i dati in una formula"}
Per $P(x)=2x^2-3x+4$, il valore in $x=-2$ si trova sostituendo quel valore in ogni occorrenza della variabile:

$$
P(-2)=2(-2)^2-3(-2)+4=8+6+4=18.
$$

La scrittura con il valore negativo racchiuso nel prodotto rende chiaro il segno di ogni contributo.

Se un rettangolo ha base $3x$ e altezza $2x+1$, con $x>0$, la sua area è $A=3x(2x+1)=6x^2+3x$ e il perimetro è $P=2(3x+2x+1)=10x+2$. Area e perimetro richiedono operazioni diverse e hanno unità diverse.
:::
