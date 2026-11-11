---
titolo: "Prodotti notevoli"
sommario: "Quadrati e cubi di binomi, somma per differenza, riconoscimento dei termini e applicazioni."
---

:::percorso
La proprietà distributiva permette di moltiplicare qualsiasi coppia di polinomi. Alcuni prodotti hanno una struttura che si ripete e può essere descritta con una formula. Riconoscerli rende più leggibili i calcoli e prepara la scomposizione dei polinomi.
:::

## Quadrato di un binomio

::::teorema{#quadrati titolo="Quadrato di una somma e di una differenza"}
Per ogni numero reale $a,b$ valgono

$$
(a+b)^2=a^2+2ab+b^2,\qquad(a-b)^2=a^2-2ab+b^2.
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

Il controllo del doppio prodotto distingue un vero quadrato da un’espressione simile. Il polinomio $x^2+3x+9$ non è il quadrato di $x+3$. Per completare $x^2-10x+\square$ in un quadrato, il secondo termine del binomio deve essere $-5$ e il termine mancante è $25$.
:::

## Differenze di aree e semplificazioni

:::esempio{#applicazioni titolo="Interpretare il doppio prodotto"}
Un quadrato di lato $x>0$ viene ingrandito portando il lato a $x+3$. L’aumento dell’area vale

$$
(x+3)^2-x^2=6x+9.
$$

Il termine $6x$ rappresenta due strisce rettangolari di area $3x$ ciascuna; il termine $9$ rappresenta il piccolo quadrato di lato tre.

Le formule si possono combinare. Nella differenza $(x+3)^2-(x-3)^2$ i quadrati dei termini si eliminano e resta $12x$. Nella somma degli stessi due quadrati si eliminano invece i doppi prodotti e resta $2x^2+18$.
:::
