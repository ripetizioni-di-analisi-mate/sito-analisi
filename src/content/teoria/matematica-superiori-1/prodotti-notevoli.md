---
titolo: "Prodotti notevoli"
sommario: "Quadrati e cubi di binomi, somma per differenza, riconoscimento dei termini e applicazioni."
---

## Quadrato di un binomio

::::teorema{#quadrati titolo="Quadrato di una somma e di una differenza"}
Per ogni numero reale $a,b$ valgono

$$
\begin{aligned}
(a+b)^2&=a^2+2ab+b^2, \\[6pt](a-b)^2&=a^2-2ab+b^2.
\end{aligned}
$$

I termini estremi sono i quadrati dei due termini del binomio. Il termine centrale è il loro **doppio prodotto**.

:::dimostrazione
Si riscrive il quadrato come prodotto del binomio per se stesso. La proprietà distributiva dà $(a+b)(a+b)=a^2+ab+ab+b^2$. I due prodotti misti sono uguali, quindi la loro somma è $2ab$. Sostituendo $-b$ a $b$ si ottiene la formula della differenza.
:::
::::

:::esempio{titolo="Coefficienti e segni"}
Poiché il primo termine del binomio $2x-3$ è $2x$, il suo quadrato è $4x^2$. Il doppio prodotto è $-12x$, quindi $(2x-3)^2=4x^2-12x+9$. Elevare al quadrato solo i termini estremi perderebbe il contributo $-12x$.
:::

## Somma per differenza

::::teorema{#somma-differenza titolo="Differenza di quadrati"}
Per ogni $a,b$ reali vale

$$
(a+b)(a-b)=a^2-b^2.
$$

:::dimostrazione
Sviluppando il prodotto si ottiene $a^2-ab+ab-b^2$. I due prodotti misti sono opposti e la loro somma è zero. Restano i due quadrati con segni opposti.
:::
::::

:::esempio{titolo="Un prodotto numerico"}
Il calcolo $103\cdot97$ si può scrivere $(100+3)(100-3)=10000-9=9991$. La stessa identità vale con lettere: $(3x+2y)(3x-2y)=9x^2-4y^2$. Si eleva al quadrato l’intero termine, compreso il coefficiente.
:::

## Cubo di un binomio

:::teorema{#cubi titolo="Quattro termini nello sviluppo del cubo"}
Il cubo di una somma e quello di una differenza sono

$$
(a+b)^3=a^3+3a^2b+3ab^2+b^3,
$$

$$
(a-b)^3=a^3-3a^2b+3ab^2-b^3.
$$

Le formule si ricavano moltiplicando il quadrato del binomio per il binomio stesso e riducendo i termini simili. In ogni termine dello sviluppo la somma degli esponenti di $a$ e $b$ è tre.

Per esempio $(x-2)^3=x^3-6x^2+12x-8$. Il termine in x è positivo perché contiene il quadrato del secondo termine, mentre il termine noto è negativo.
:::

## Quadrato di una somma di tre termini

:::teorema{#trinomio titolo="Tre quadrati e tre doppi prodotti"}
Per ogni $a,b,c$ reali,

$$
(a+b+c)^2=a^2+b^2+c^2+2ab+2ac+2bc.
$$

Si può ricavare la formula considerando $a+b$ come un unico primo termine e applicando due volte il quadrato del binomio.

Per esempio

$$
(x+y+2)^2=x^2+y^2+4+2xy+4x+4y.
$$

Ogni coppia di termini produce un doppio prodotto. Se uno dei termini è negativo, il suo segno deve essere mantenuto in tutti i prodotti che lo contengono.
:::

## Riconoscere e completare una formula

:::osservazione{#riconoscimento titolo="Controllo del termine centrale"}
Per verificare se $x^2+6x+9$ è un quadrato, si riconoscono $x^2$ e $3^2$ e si controlla che il termine centrale sia $2\cdot x\cdot3=6x$. Si ottiene quindi $(x+3)^2$.

Il controllo del doppio prodotto distingue un vero quadrato da un’espressione simile. Per completare $x^2-10x+\square$, il secondo termine del binomio deve essere $-5$ perché $2\cdot(-5)=-10$. Il termine mancante è quindi $(-5)^2=25$.
:::

:::attenzione{titolo="Quadrati agli estremi e termine centrale"}
Il polinomio $x^2+3x+9$ ha gli stessi termini estremi di $(x+3)^2$. Il suo termine centrale è $3x$, mentre nel quadrato vale $6x$. Per esempio, in $x=1$ i due valori sono $13$ e $16$.
:::

:::esempio{titolo="Completare un quadrato con un coefficiente"}
In $4x^2-12x+\square$ il primo termine del binomio è $2x$. Per avere il doppio prodotto $-12x$ il secondo termine deve essere $-3$, poiché $2\cdot 2x\cdot(-3)=-12x$. Si aggiunge quindi $9$.
:::

## Differenze di aree e semplificazioni

:::esempio{#applicazioni titolo="Interpretare il doppio prodotto"}
Un quadrato di lato $x>0$ viene ingrandito portando il lato a $x+3$. L’aumento dell’area è la somma delle tre regioni che si aggiungono al quadrato iniziale.

::struttura{linee="0,0 5,0 5,5 0,5 0,0" poligoni="5,0 8,0 8,5 5,5;0,5 5,5 5,8 0,8;5,5 8,5 8,8 5,8" riferimento=0 etichette="2.5,-0.4,x;6.5,-0.4,3;-0.45,2.5,x;-0.45,6.5,3" titolo="Le tre regioni aggiunte al quadrato iniziale"}

$$
(x+3)^2-x^2=6x+9.
$$

Il termine $6x$ rappresenta due strisce rettangolari di area $3x$ ciascuna; il termine $9$ rappresenta il piccolo quadrato di lato tre.

:::

:::esempio{titolo="Cambiare formula dopo aver riconosciuto i quadrati"}
Si può trattare $(x+3)^2-(x-3)^2$ come una differenza di quadrati, con $A=x+3$ e $B=x-3$. Nella somma $A+B$ i termini costanti si annullano. Nella differenza $A-B$ si annullano invece i termini in $x$.

$$
\begin{aligned}
A+B&=(x+3)+(x-3)=2x,\\[6pt]
A-B&=(x+3)-(x-3)=6,\\[6pt]
A^2-B^2&=(2x)\cdot6=12x.
\end{aligned}
$$

Per la somma degli stessi quadrati si possono sviluppare i due binomi. I doppi prodotti sono opposti, quindi resta $2x^2+18$.
:::
