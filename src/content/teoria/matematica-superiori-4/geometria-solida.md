---
titolo: Geometria euclidea dello spazio
sommario: Rette e piani, perpendicolarità, proiezioni, diedri, prismi, piramidi, solidi di rotazione, aree, volumi e sezioni.
---

## Rette e piani nello spazio

:::definizione{#posizioni titolo="Posizioni reciproche"}
Nello spazio due rette distinte possono essere incidenti, parallele oppure **sghembe**. Le rette sghembe non appartengono a uno stesso piano, quindi non sono incidenti né parallele. Un piano è individuato da tre punti non allineati, da una retta e un punto esterno, da due rette incidenti o da due rette parallele distinte.

Una retta rispetto a un piano può essere contenuta, parallela senza intersezioni oppure incidente in un punto. Due piani distinti sono paralleli oppure si intersecano lungo una retta. Per esempio, in un cubo, due spigoli con una faccia comune sono complanari; alcuni spigoli senza faccia comune sono sghembi.
:::

## Perpendicolarità e proiezioni

:::teorema{#perpendicolarita titolo="Retta perpendicolare a un piano"}
Una retta incidente a un piano è perpendicolare al piano se e solo se è perpendicolare a due rette del piano incidenti nel punto d'intersezione. La **proiezione ortogonale** di un punto sul piano è il piede della perpendicolare condotta dal punto. La distanza del punto dal piano è la lunghezza di quel segmento.

Per esempio, se un segmento $PA$ misura $13$ e la sua proiezione $HA$ sul piano misura $12$, il triangolo $PHA$ è rettangolo in $H$. La distanza dal piano è quindi $PH=\sqrt{13^2-12^2}=5$.
:::

:::definizione{#angoli titolo="Angolo tra retta e piano e angolo diedro"}
L'angolo tra una retta obliqua e un piano è l'angolo acuto tra la retta e la sua proiezione ortogonale sul piano. Se il segmento obliquo ha lunghezza $l$ e inclinazione $\alpha$, la distanza verticale è $l\sin\alpha$ e la proiezione misura $l\cos\alpha$.

Un **diedro** è una delle due regioni determinate da due semipiani aventi la stessa retta di origine. Il suo angolo si misura tagliandolo con un piano perpendicolare allo spigolo. Per due facce adiacenti di un cubo la sezione è un angolo retto, quindi il diedro è di $90^\circ$.
:::

## Prismi e parallelepipedi

:::teorema{#prismi titolo="Aree e volume di un prisma retto"}
Un prisma ha due basi poligonali congruenti e parallele. Se gli spigoli laterali sono perpendicolari alle basi, è **retto**. Indicati con $B$ l'area di base, $p$ il perimetro di base e $h$ l'altezza, per un prisma retto valgono
$$
A_l=ph,\qquad A_t=2B+ph,\qquad V=Bh.
$$
Per un parallelepipedo rettangolo di dimensioni $a,b,c$ si ha $A_t=2(ab+ac+bc)$, $V=abc$ e diagonale $d=\sqrt{a^2+b^2+c^2}$. La diagonale si ricava applicando due volte il teorema di Pitagora.

Per esempio con dimensioni $3,4,12$, la diagonale è $13$, il volume è $144$ e l'area totale è $192$. Per un cubo di spigolo $a$ le formule diventano $A_t=6a^2$, $V=a^3$, $d=a\sqrt3$.
:::

## Piramidi

:::teorema{#piramidi titolo="Piramide regolare"}
Una piramide ha una base poligonale e facce laterali triangolari con un vertice comune. Il volume di ogni piramide è $V=\dfrac13Bh$, con $h$ distanza del vertice dal piano di base.

In una piramide regolare la base è un poligono regolare e il piede dell'altezza è il centro della base. L'altezza di ciascuna faccia laterale è l'**apotema della piramide** $l$, e l'area laterale è $A_l=\dfrac12pl$. Se $r$ è l'apotema del poligono di base, $l=\sqrt{h^2+r^2}$.

Per una piramide a base quadrata di lato $6$ e altezza $4$, l'apotema è $\sqrt{4^2+3^2}=5$. Quindi $A_l=\dfrac12\cdot24\cdot5=60$, $A_t=96$ e $V=48$. Lo spigolo laterale misura invece $\sqrt{4^2+(3\sqrt2)^2}=\sqrt{34}$, perché la distanza del centro da un vertice è metà diagonale del quadrato.
:::

## Cilindro e cono

:::teorema{#rotazione titolo="Solidi di rotazione retti"}
Per un cilindro retto di raggio $r>0$ e altezza $h>0$ si ha
$$
A_l=2\pi rh,\qquad A_t=2\pi r(r+h),\qquad V=\pi r^2h.
$$
La superficie laterale si sviluppa in un rettangolo di lati $2\pi r$ e $h$. Per un cono retto, con apotema $l=\sqrt{r^2+h^2}$,
$$
A_l=\pi rl,\qquad A_t=\pi r(r+l),\qquad V=\frac13\pi r^2h.
$$
Per esempio un cono con $r=3$ e $h=4$ ha $l=5$, $A_t=24\pi$ e $V=12\pi$. Un cilindro con la stessa base e altezza ha volume $36\pi$, cioè tre volte quello del cono.

::grafico{assi=0 linee="-3,0 0,4 3,0 -3,0" segmenti="0,0,0,4;0,0,3,0" etichette="0.4,2,h;1.5,-0.5,r;2.2,2.4,l" xmin=-4 xmax=4 ymin=-1 ymax=5 uguale=1 titolo="Sezione assiale di un cono retto con raggio $3$ e altezza $4$"}
:::

## Sfera e sezioni

:::teorema{#sfera titolo="Area e volume della sfera"}
Una superficie sferica è l'insieme dei punti dello spazio a distanza $R>0$ da un centro. La sfera comprende anche i punti interni. Le formule sono
$$
A=4\pi R^2,\qquad V=\frac43\pi R^3.
$$
Un piano a distanza $d<R$ dal centro taglia una circonferenza di raggio $r=\sqrt{R^2-d^2}$. Il raggio $R$, la distanza $d$ e il raggio della sezione formano un triangolo rettangolo. Per $R=5$ e $d=3$ si ottiene $r=4$, quindi l'area del disco di sezione è $16\pi$. Se $d=R$ il piano è tangente; se $d>R$ non incontra la sfera.

::grafico{curve="5*cos(t),5*sin(t),0,6.283185307" segmenti="0,0,0,3;0,3,4,3;0,0,4,3" punti="4,3,pieno" xmin=-6 xmax=6 ymin=-6 ymax=6 uguale=1 titolo="Sezione meridiana di una sfera: $R^2=d^2+r^2$"}
:::

## Similitudine, sezioni e tronchi

:::teorema{#similitudine titolo="Rapporti tra lunghezze, aree e volumi"}
Se due solidi sono simili con rapporto lineare $k>0$, le aree corrispondenti hanno rapporto $k^2$ e i volumi rapporto $k^3$. Una sezione di una piramide parallela alla base è simile alla base. Se dista $x$ dal vertice e l'altezza totale è $h$, il rapporto lineare è $\dfrac xh$, quindi l'area di sezione è $B\left(\dfrac xh\right)^2$.

Per esempio una piramide di altezza $12$ e base di area $81$ ha, a distanza $8$ dal vertice, una sezione di area $81\left(\dfrac8{12}\right)^2=36$.

Un tronco di cono di altezza $h$ e raggi delle basi $R>r>0$ ha volume $V=\dfrac{\pi h}{3}(R^2+Rr+r^2)$. L'apotema è $l=\sqrt{h^2+(R-r)^2}$ e l'area laterale è $\pi(R+r)l$. Le formule si ricavano sottraendo due coni simili.
:::

## Solidi composti e unità di misura

:::esempio{#composti titolo="Cilindro sormontato da una semisfera"}
Un solido è composto da un cilindro di raggio $3$ e altezza $5$, chiuso superiormente da una semisfera dello stesso raggio. Il volume è la somma
$$
V=\pi\cdot3^2\cdot5+\frac12\frac43\pi\cdot3^3=63\pi.
$$
La superficie esterna comprende la superficie laterale del cilindro, la base inferiore e la superficie curva della semisfera. Il disco di giunzione è interno, quindi
$$
A=2\pi\cdot3\cdot5+\pi\cdot3^2+2\pi\cdot3^2=57\pi.
$$
Se le lunghezze sono in centimetri, l'area è in centimetri quadrati e il volume in centimetri cubi. Un cambio di unità lineare di fattore $10$ cambia le aree di fattore $100$ e i volumi di fattore $1000$.
:::
