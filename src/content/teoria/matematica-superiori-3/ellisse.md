---
titolo: Ellisse
sommario: 'Ellisse: definizioni, metodi, esempi e condizioni da usare negli esercizi del terzo anno.'
---

## Somma delle distanze

:::definizione{#definizione titolo="Fuochi e asse maggiore"}
L'**ellisse** è il luogo dei punti la cui somma delle distanze da due fuochi è costante e maggiore della distanza tra i fuochi. Con fuochi $(\pm c,0)$, tale somma è $2a$ con $a>c\geq0$. Il semiasse minore soddisfa $b^2=a^2-c^2$. Quando $c=0$, i fuochi coincidono e il luogo è una circonferenza.
:::

## Equazione canonica

:::teorema{#assi titolo="Semiassi e vertici"}
Per $a>b>0$, l'equazione $\dfrac{x^2}{a^2}+\dfrac{y^2}{b^2}=1$ ha asse maggiore orizzontale, vertici $(\pm a,0)$ e $(0,\pm b)$. Le lunghezze degli assi sono $2a$ e $2b$. Il semiasse orizzontale si legge dal denominatore sotto $x^2$, anche quando è il minore. Nell'ellisse $\dfrac{x^2}{25}+\dfrac{y^2}{9}=1$ i semiassi misurano $5$ e $3$.
:::

## Fuochi

:::teorema{#fuochi titolo="Distanza focale"}
Con asse maggiore orizzontale si ha $c=\sqrt{a^2-b^2}$ e i fuochi sono $(\pm c,0)$. Per denominatori $25$ e $9$, $c=4$ e la somma delle distanze da ogni punto dell'ellisse ai fuochi vale $10$. Con asse maggiore verticale i fuochi sono $(0,\pm c)$ e il denominatore maggiore è sotto $y^2$.

::grafico{curve="5*cos(t),3*sin(t),0,6.283185307" xmin=-6 xmax=6 ymin=-4 ymax=4 uguale=1 punti="-4,0,pieno,F₁;4,0,pieno,F₂;0,3,pieno,P" legenda="\dfrac{x^2}{25}+\dfrac{y^2}{9}=1" titolo="I fuochi sono $(\pm4,0)$ e la somma delle distanze vale $10$"}
:::

## Eccentricità

:::definizione{#eccentricita titolo="Rapporto tra semidistanza focale e semiasse maggiore"}
L'**eccentricità** è $e=\dfrac ca$, quindi $0\leq e<1$. Indica quanto i fuochi sono separati rispetto all'asse maggiore. Per $a=5$, $c=4$, si ottiene $e=\dfrac45$ e $b=\sqrt{25-16}=3$. Se sono dati $a$ ed $e$, si usa $b=a\sqrt{1-e^2}$.
:::

## Appartenenza e ordinate

:::teorema{#punti titolo="Ricavare una coordinata"}
Da $\dfrac{x^2}{a^2}+\dfrac{y^2}{b^2}=1$ segue $y=\pm b\sqrt{1-\dfrac{x^2}{a^2}}$, con $|x|\leq a$. Il segno positivo descrive la metà superiore, il negativo quella inferiore. Per $\dfrac{x^2}{25}+\dfrac{y^2}{9}=1$ e $x=3$, si trova $y=\pm\dfrac{12}{5}$. L'ellisse completa non è il grafico di una sola funzione $y=f(x)$.
:::

## Ellisse traslata

:::teorema{#traslata titolo="Centro diverso dall'origine"}
L'equazione $\dfrac{(x-h)^2}{a^2}+\dfrac{(y-k)^2}{b^2}=1$ ha centro $(h,k)$. Con $a>b$ i fuochi sono $(h\pm c,k)$ e i vertici principali $(h\pm a,k)$. Per $\dfrac{(x-2)^2}{25}+\dfrac{(y+1)^2}{9}=1$ il centro è $(2,-1)$ e i fuochi sono $(-2,-1)$ e $(6,-1)$.
:::

## Equazione da dati geometrici

:::esempio{#ricostruzione titolo="Vertice e fuoco"}
Un'ellisse centrata nell'origine ha asse maggiore orizzontale, vertice $(5,0)$ e fuoco $(3,0)$. Quindi $a=5$, $c=3$ e $b^2=a^2-c^2=16$. L'equazione è $\dfrac{x^2}{25}+\dfrac{y^2}{16}=1$. Il dato focale deve rispettare $c<a$; altrimenti non definisce un'ellisse reale non degenere.
:::

## Tangenti e rette

:::teorema{#tangenti titolo="Tangente nel punto assegnato"}
Nel punto $(x_0,y_0)$ dell'ellisse canonica, la tangente è $\dfrac{xx_0}{a^2}+\dfrac{yy_0}{b^2}=1$. Al vertice $(a,0)$ si riduce a $x=a$. Per una retta generica, la sostituzione nell'ellisse produce un'equazione di secondo grado; il discriminante nullo caratterizza la tangenza. Il punto assegnato deve appartenere all'ellisse prima di applicare la formula.
:::
