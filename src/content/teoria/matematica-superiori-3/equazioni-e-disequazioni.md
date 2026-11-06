---
titolo: Equazioni, disequazioni e sistemi
sommario: 'Equazioni e disequazioni: definizioni, metodi, esempi e condizioni da usare negli esercizi del terzo anno.'
---

## Equazioni e condizioni di esistenza

:::definizione{#equazioni titolo="Insieme delle soluzioni"}
Risolvere un'equazione significa trovare tutti i valori reali che rendono uguali i due membri e per cui le espressioni sono definite. Questi valori formano l'**insieme delle soluzioni**. Per $x^2-5x+6=0$, la scomposizione $(x-2)(x-3)=0$ dà $S=\{2,3\}$. In un'equazione fratta il denominatore deve essere diverso da zero prima di qualunque semplificazione.
:::

## Secondo grado e discriminante

:::teorema{#secondo-grado titolo="Formula risolutiva"}
Per $ax^2+bx+c=0$, con $a\neq0$, si pone $\Delta=b^2-4ac$. Se $\Delta>0$, le radici sono $x_{1,2}=\dfrac{-b\pm\sqrt\Delta}{2a}$; se $\Delta=0$, c'è una radice doppia $-\dfrac b{2a}$; se $\Delta<0$, non ci sono soluzioni reali. Si ottiene la formula completando il quadrato: $(2ax+b)^2=\Delta$. Per $x^2-4x+4=0$, $\Delta=0$ e $x=2$.
:::

## Segno di un prodotto

:::teorema{#prodotti titolo="Tabella dei segni"}
Il prodotto di fattori reali è positivo quando il numero di fattori negativi è pari. Per $(x-1)(x-4)>0$, i fattori hanno lo stesso segno se $x<1$ oppure $x>4$. La soluzione è $(-\infty,1)\cup(4,+\infty)$. Gli zeri entrano nella soluzione solo se il confronto ammette l'uguaglianza. Una radice di molteplicità pari non cambia il segno del polinomio.
:::

## Disequazioni quadratiche

:::teorema{#disequazioni titolo="Segno del trinomio"}
Se $a>0$ e le radici reali distinte sono $r<s$, $a(x-r)(x-s)$ è negativo per $r<x<s$ e positivo all'esterno. Se $a<0$, i segni si invertono. Per $x^2-5x+6\leq0$ si ottiene $[2,3]$. Se il discriminante è negativo, il trinomio mantiene il segno di $a$ per ogni $x$ reale.
:::

## Frazioni algebriche

:::teorema{#fratte titolo="Segno del quoziente"}
Per risolvere $\dfrac{N(x)}{D(x)}\geq0$ si studiano separatamente i segni di numeratore e denominatore. Gli zeri di $D$ restano esclusi. Per $\dfrac{x-1}{x-3}\geq0$ la soluzione è $(-\infty,1]\cup(3,+\infty)$. Moltiplicare direttamente per $x-3$ richiederebbe conoscerne il segno, perché un fattore negativo cambia il verso della disequazione.
:::

## Sistemi di disequazioni

:::definizione{#sistemi titolo="Intersezione delle soluzioni"}
Un sistema richiede che tutte le sue condizioni siano soddisfatte insieme, quindi le soluzioni si intersecano. Il sistema $\begin{cases}(x-1)(x-5)\leq0,\\x>2\end{cases}$ dà $[1,5]\cap(2,+\infty)=(2,5]$. Una disgiunzione, espressa dalla parola «oppure», richiede invece l'unione degli insiemi. Questa distinzione serve anche nel calcolo dei domini.
:::

## Equazioni con parametro

:::teorema{#parametri titolo="Distinguere i casi prima di dividere"}
Per $(k-1)x=2$, se $k\neq1$ la soluzione è $x=\dfrac2{k-1}$; se $k=1$, l'equazione diventa $0=2$ e non ha soluzioni. Per $(k-1)x=0$, invece, $k=1$ dà ogni numero reale. In un'equazione quadratica con parametro si controlla prima che il coefficiente di $x^2$ sia diverso da zero e poi il segno di $\Delta$.
:::

## Problemi e controllo del risultato

:::esempio{#problemi titolo="Dimensioni di un rettangolo"}
Un rettangolo ha lati $x$ e $x+3$ e area $40$. Poiché le lunghezze sono positive, si richiede $x>0$. L'equazione $x(x+3)=40$ diventa $(x-5)(x+8)=0$. I candidati sono $5$ e $-8$, ma solo $5$ soddisfa la condizione geometrica. I lati sono $5$ e $8$ e il prodotto vale $40$. Il controllo usa sia l'equazione sia il significato delle incognite.
:::
