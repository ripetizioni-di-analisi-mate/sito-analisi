---
titolo: "Circonferenza, cerchio e poligoni"
sommario: "Corde, angoli al centro e alla circonferenza, tangenti, poligoni inscritti e circoscritti, archi e aree."
---

## Circonferenza e cerchio

:::definizione{#definizione titolo="Punti a distanza assegnata"}
La **circonferenza** di centro $O$ e raggio $r>0$ è l'insieme dei punti che distano $r$ da $O$. Il **cerchio** comprende la circonferenza e la regione interna. Il raggio è un segmento che unisce centro e circonferenza; una corda unisce due punti della circonferenza.

Un diametro è una corda passante per il centro e misura $2r$. Per $r=4$, il diametro misura $8$. I due estremi di una corda dividono la circonferenza in due archi, che vanno distinti quando si parla di angoli.

::grafico{curve="3*cos(t),3*sin(t),0,6.283185307" linee="0,0 3,0;-3,0 3,0" punti="0,0,pieno,O;3,0,pieno,A;-3,0,pieno,B" xmin=-4 xmax=4 ymin=-4 ymax=4 uguale=1 titolo="Un diametro e un raggio della stessa circonferenza"}
:::

## Corde e distanze

:::teorema{#corde titolo="La perpendicolare dal centro"}
La perpendicolare condotta dal centro a una corda la divide in due segmenti congruenti. I due triangoli rettangoli ottenuti hanno ipotenuse congruenti, perché sono raggi, e un cateto comune; sono quindi congruenti.

Se $d$ è la distanza della corda dal centro, la lunghezza della corda è $2\sqrt{r^2-d^2}$, con $0\le d<r$. Per $r=5$ e $d=3$, la mezza corda misura $4$ e la corda misura $8$.

In una stessa circonferenza corde congruenti hanno uguale distanza dal centro. Fra due corde, quella più vicina al centro è più lunga, come segue dalla formula precedente.

::grafico{curve="5*cos(t),5*sin(t),0,6.283185307" linee="-4,3 4,3;0,0 0,3;0,0 4,3" punti="0,0,pieno,O;-4,3,pieno,A;4,3,pieno,B;0,3,pieno,H" xmin=-6 xmax=6 ymin=-6 ymax=6 uguale=1 titolo="Con raggio $5$ e distanza $OH=3$, la corda misura $8$"}
:::

## Angoli sullo stesso arco

:::teorema{#angoli titolo="Angolo al centro e alla circonferenza"}
Un angolo al centro ha vertice nel centro. Un angolo alla circonferenza ha vertice sulla circonferenza e lati secanti la circonferenza. Quando insistono sullo stesso arco, l'angolo alla circonferenza misura la metà di quello al centro.

Per un angolo al centro di $100^\circ$, quello alla circonferenza sullo stesso arco misura $50^\circ$. Tutti gli angoli alla circonferenza che insistono sullo stesso arco sono quindi congruenti.

Nel caso in cui un lato dell'angolo passa per il centro, il triangolo formato dai due raggi è isoscele. La relazione fra angolo esterno e angoli interni mostra che l'angolo al centro è il doppio dell'angolo alla circonferenza. Gli altri casi si ottengono sommando o sottraendo due configurazioni di questo tipo.

::grafico{curve="3*cos(t),3*sin(t),0,6.283185307" linee="3,0 0,0 1.5,2.598076;-3,0 3,0;-3,0 1.5,2.598076" punti="0,0,pieno,O;3,0,pieno,A;1.5,2.598076,pieno,B;-3,0,pieno,C" xmin=-4 xmax=4 ymin=-4 ymax=4 uguale=1 titolo="Sull’arco minore $AB$, l’angolo $AOB$ è $60^\circ$ e $ACB$ è $30^\circ$"}
:::

## Semicirconferenza e quadrilateri

:::teorema{#inscritti titolo="Angoli retti e angoli opposti"}
Un angolo alla circonferenza che insiste su un diametro misura $90^\circ$, perché l'angolo al centro corrispondente misura $180^\circ$. Un triangolo inscritto con un lato coincidente con un diametro è quindi rettangolo.

In un quadrilatero convesso inscritto, gli angoli opposti sono supplementari. Essi insistono su due archi che insieme formano l'intera circonferenza; la somma delle loro misure è quindi metà di $360^\circ$.

Se un angolo di un quadrilatero inscritto misura $112^\circ$, quello opposto misura $68^\circ$. L'essere inscrivibile richiede che tutti i vertici appartengano alla stessa circonferenza.
:::

## Tangenti

:::teorema{#tangenti titolo="Perpendicolarità del raggio"}
Una tangente ha un solo punto comune con la circonferenza. Il raggio condotto al punto di contatto è perpendicolare alla tangente.

Da un punto esterno $P$, i segmenti delle due tangenti $PT$ e $PS$ sono congruenti. I triangoli rettangoli $OTP$ e $OSP$ hanno la stessa ipotenusa $OP$ e raggi congruenti, quindi sono congruenti.

Se $OP=13$ e $r=5$, il segmento tangente misura $\sqrt{13^2-5^2}=12$. Il punto deve essere esterno, cioè $OP>r$; per un punto interno non si possono tracciare tangenti reali.

::grafico{curve="3*cos(t),3*sin(t),0,6.283185307" linee="0,0 5,0 1.8,2.4 0,0" punti="0,0,pieno,O;5,0,pieno,P;1.8,2.4,pieno,T" xmin=-4 xmax=6 ymin=-4 ymax=4 uguale=1 titolo="Con $OT=3$ e $OP=5$, il segmento tangente $PT$ misura $4$"}
:::

## Poligoni regolari

:::definizione{#poligoni titolo="Angoli e apotema"}
Un **poligono regolare** ha tutti i lati e tutti gli angoli congruenti. Con $N$ lati, ogni angolo al centro misura $\dfrac{360^\circ}{N}$ e ogni angolo interno misura $\dfrac{(N-2)180^\circ}{N}$.

Il centro è comune alla circonferenza circoscritta e a quella inscritta. L'**apotema** è la distanza dal centro a un lato ed è il raggio della circonferenza inscritta.

Nell'esagono regolare il lato è uguale al raggio della circonferenza circoscritta. I sei triangoli con vertice nel centro hanno angolo al centro di $60^\circ$ e sono equilateri.

Un quadrilatero circoscritto a una circonferenza ha uguali somme dei lati opposti, perché i due segmenti tangenti condotti da ciascun vertice sono congruenti.
:::

## Circonferenze e archi

:::teorema{#lunghezze titolo="Lunghezza e proporzioni"}
La lunghezza della circonferenza è $C=2\pi r$. Un arco che corrisponde a un angolo al centro $\alpha$ espresso in gradi ha lunghezza
$$
\ell=\frac{\alpha}{360^\circ}\,2\pi r.
$$
Per $r=6$ e $\alpha=60^\circ$, l'arco misura $2\pi$. Si prende un sesto della circonferenza, perché l'angolo è un sesto dell'angolo giro.

Il raggio e l'arco vanno espressi nella stessa unità di lunghezza. Il numero $\pi$ si conserva nei risultati esatti; un'approssimazione decimale si usa quando è richiesta.
:::

## Cerchi e settori

:::teorema{#aree titolo="Superfici circolari"}
L'area del cerchio è $A=\pi r^2$. Un settore di angolo al centro $\alpha$ ha area
$$
A_{\mathrm{settore}}=\frac{\alpha}{360^\circ}\,\pi r^2.
$$
Per $r=4$ e $\alpha=90^\circ$ si ottiene $4\pi$. Una corona fra cerchi concentrici di raggi $R>r$ ha area $\pi(R^2-r^2)$.

L'area del settore e la lunghezza dell'arco usano la stessa frazione dell'angolo giro, ma moltiplicano grandezze diverse. Il perimetro di un settore comprende l'arco e i due raggi. Per un quarto di cerchio di raggio $4$, vale $2\pi+8$.
:::
