---
titolo: Piano cartesiano e retta
sommario: 'Piano cartesiano e retta: definizioni, metodi, esempi e condizioni da usare negli esercizi del terzo anno.'
---

## Coordinate e distanze

:::teorema{#distanza titolo="Distanza tra due punti"}
Per $A(x_1,y_1)$ e $B(x_2,y_2)$, la distanza è $AB=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$. Le differenze delle coordinate sono i cateti di un triangolo rettangolo, quindi la formula segue da Pitagora. Tra $(1,2)$ e $(4,6)$ si ottiene $\sqrt{9+16}=5$. La distanza è nulla solo se i due punti coincidono.
:::

## Punto medio

:::teorema{#medio titolo="Media delle coordinate"}
Il punto medio di $AB$ è $M\left(\dfrac{x_1+x_2}{2},\dfrac{y_1+y_2}{2}\right)$. Per $A(-2,1)$ e $B(4,5)$ si ha $M(1,3)$. Se si conoscono $A$ e $M$, si ricava $B$ da $x_2=2x_M-x_1$ e $y_2=2y_M-y_1$. La formula descrive anche la simmetria centrale di centro $M$.
:::

## Equazioni della retta

:::definizione{#equazione titolo="Forma implicita ed esplicita"}
Una retta ha equazione $ax+by+c=0$, con $(a,b)\neq(0,0)$. Se $b\neq0$, si scrive $y=mx+q$, dove $m=-\dfrac ab$ è il coefficiente angolare e $q=-\dfrac cb$ è l'ordinata all'origine. Le rette verticali hanno equazione $x=k$ e non ammettono la forma $y=mx+q$. Per una retta orizzontale, $m=0$.
:::

## Una retta da due punti

:::teorema{#due-punti titolo="Coefficiente angolare"}
Se $x_1\neq x_2$, la retta per $A$ e $B$ ha $m=\dfrac{y_2-y_1}{x_2-x_1}$ e si scrive $y-y_1=m(x-x_1)$. Per $A(1,2)$, $B(3,6)$, si trova $m=2$ e $y=2x$. Se $x_1=x_2$ e i punti sono distinti, la retta è verticale. Se i punti coincidono, non determinano una retta unica.
:::

## Parallelismo

:::teorema{#parallele titolo="Stessa direzione"}
Due rette non verticali sono parallele se hanno lo stesso coefficiente angolare. Con $q$ diverso sono distinte; con lo stesso $q$ coincidono. La parallela a $y=3x-2$ passante per $(1,4)$ è $y-4=3(x-1)$, quindi $y=3x+1$. Tutte le rette verticali sono parallele tra loro.
:::

## Perpendicolarità

:::teorema{#perpendicolari titolo="Prodotto dei coefficienti angolari"}
Per due rette non verticali, la perpendicolarità equivale a $m_1m_2=-1$. La perpendicolare a $y=2x+1$ per l'origine è $y=-\dfrac12x$. Una retta verticale è perpendicolare a ogni orizzontale. Per le forme implicite $a_1x+b_1y+c_1=0$ e $a_2x+b_2y+c_2=0$, il criterio è $a_1a_2+b_1b_2=0$.
:::

## Intersezione di rette

:::teorema{#intersezioni titolo="Sistema delle due equazioni"}
Il punto comune a due rette soddisfa entrambe le equazioni. Per $y=2x+1$ e $y=-x+4$, si uguagliano i secondi membri: $3x=3$, quindi $x=1$ e $y=3$. Rette parallele distinte danno un sistema impossibile; rette coincidenti danno infinite soluzioni. Il risultato si controlla sostituendo entrambe le coordinate nelle due equazioni.

::grafico{f="2*x+1;-x+4" xmin=-2 xmax=4 ymin=-3 ymax=8 punti="1,3,pieno,P" titolo="Le due rette si intersecano in $P(1,3)$"}
:::

## Distanza punto-retta

:::teorema{#punto-retta titolo="Distanza perpendicolare"}
La distanza di $P(x_0,y_0)$ da $ax+by+c=0$ è $d=\dfrac{|ax_0+by_0+c|}{\sqrt{a^2+b^2}}$. La formula è invariata se si moltiplica l'equazione della retta per un numero non nullo. Per $P(0,0)$ e $3x+4y-10=0$, si trova $d=2$. Questa distanza servirà per riconoscere le rette tangenti a una circonferenza.
:::
