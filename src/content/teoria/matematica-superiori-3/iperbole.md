---
titolo: Iperbole e funzione omografica
sommario: 'Iperbole: definizioni, metodi, esempi e condizioni da usare negli esercizi del terzo anno.'
---

## Differenza delle distanze

:::definizione{#definizione titolo="Due rami di un luogo geometrico"}
L'**iperbole** è il luogo dei punti per cui il valore assoluto della differenza delle distanze da due fuochi è una costante $2a$, positiva e minore della distanza tra i fuochi $2c$. Con fuochi sull'asse $x$, $c>a>0$ e si pone $b^2=c^2-a^2$. La curva è formata da due rami separati.
:::

## Forma canonica

:::teorema{#assi titolo="Asse trasverso e vertici"}
L'iperbole $\dfrac{x^2}{a^2}-\dfrac{y^2}{b^2}=1$, con $a,b>0$, ha vertici $(\pm a,0)$ e rami verso destra e sinistra. Per $\dfrac{y^2}{a^2}-\dfrac{x^2}{b^2}=1$ i vertici sono $(0,\pm a)$. Il termine positivo determina l'asse che incontra la curva. I punti $(0,\pm b)$ della prima forma non appartengono all'iperbole.
:::

## Fuochi ed eccentricità

:::teorema{#fuochi titolo="Somma dei quadrati"}
Nella forma orizzontale, $c=\sqrt{a^2+b^2}$, i fuochi sono $(\pm c,0)$ e l'eccentricità è $e=\dfrac ca>1$. Per $\dfrac{x^2}{9}-\dfrac{y^2}{16}=1$, $a=3$, $b=4$, $c=5$ ed $e=\dfrac53$. Per l'ellisse compare una differenza, mentre qui compare la somma: entrambe le formule derivano dalla rispettiva definizione focale.
:::

## Asintoti

:::teorema{#asintoti titolo="Rette associate ai rami"}
Gli asintoti di $\dfrac{x^2}{a^2}-\dfrac{y^2}{b^2}=1$ sono $y=\pm\dfrac ba x$. Infatti l'equazione dà $y=\pm\dfrac ba\sqrt{x^2-a^2}$ e, per grandi valori di $|x|$, i rami si avvicinano alle rette indicate. Per $a=3$, $b=4$, gli asintoti hanno coefficienti $\pm\dfrac43$.

::grafico{f="4/3*sqrt(x^2-9);-4/3*sqrt(x^2-9);4/3*x;-4/3*x" xmin=-8 xmax=8 ymin=-9 ymax=9 uguale=1 legenda="y=\dfrac43\sqrt{x^2-9};y=-\dfrac43\sqrt{x^2-9};y=\dfrac43x;y=-\dfrac43x" titolo="I due rami e gli asintoti dell'iperbole con $a=3$, $b=4$"}
:::

## Punti e intersezioni

:::teorema{#punti titolo="Condizione sulle ascisse"}
Nell'iperbole orizzontale, $y^2=b^2\left(\dfrac{x^2}{a^2}-1\right)$ richiede $|x|\geq a$. Ogni ascissa con $|x|>a$ dà due ordinate opposte. Per $\dfrac{x^2}{9}-\dfrac{y^2}{16}=1$ e $x=5$, le ordinate sono $\pm\dfrac{16}{3}$. Una retta verticale può incontrare lo stesso ramo in due punti.
:::

## Iperbole equilatera

:::definizione{#equilatera titolo="Asintoti perpendicolari"}
L'iperbole è **equilatera** quando $a=b$, quindi gli asintoti della forma canonica sono $y=\pm x$. Con una rotazione degli assi si può scrivere $xy=k$, con $k\neq0$. Per $k>0$ i rami sono nei quadranti primo e terzo; per $k<0$ nel secondo e quarto. La forma $y=\dfrac kx$ ha dominio $\mathbb R\setminus\{0\}$.
:::

## Centro traslato

:::teorema{#traslata titolo="Traslare centro e asintoti"}
Per $\dfrac{(x-h)^2}{a^2}-\dfrac{(y-k)^2}{b^2}=1$, il centro è $(h,k)$ e gli asintoti sono $y-k=\pm\dfrac ba(x-h)$. I vertici diventano $(h\pm a,k)$. La traslazione conserva semiassi ed eccentricità. Tutti i punti notevoli si spostano con lo stesso vettore $(h,k)$.
:::

## Funzione omografica

:::teorema{#omografica titolo="Separare la costante e il reciproco"}
Se $c\neq0$ e $ad-bc\neq0$, $y=\dfrac{ax+b}{cx+d}$ si riscrive $y=\dfrac ac+\dfrac{bc-ad}{c^2}\dfrac1{x+\dfrac dc}$. Gli asintoti sono $x=-\dfrac dc$ e $y=\dfrac ac$. Per $y=\dfrac{2x+3}{x-1}$, si ha $y=2+\dfrac5{x-1}$ e centro $(1,2)$. Se $ad-bc=0$, resta una funzione costante con un punto escluso dal dominio.
:::
