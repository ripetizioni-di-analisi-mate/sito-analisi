---
titolo: Circonferenza, rette e tangenti
sommario: 'Circonferenza: definizioni, metodi, esempi e condizioni da usare negli esercizi del terzo anno.'
---

## Centro e raggio

:::definizione{#centro titolo="Luogo dei punti a distanza fissata"}
La **circonferenza** di centro $C(h,k)$ e raggio $r>0$ è il luogo dei punti $P(x,y)$ per cui $CP=r$. Per la formula della distanza, la sua equazione è $(x-h)^2+(y-k)^2=r^2$. Per centro $(1,-2)$ e raggio $3$ si ottiene $(x-1)^2+(y+2)^2=9$. La regione interna usa il confronto $<r^2$.
:::

## Forma generale

:::teorema{#generale titolo="Completamento dei quadrati"}
Da $x^2+y^2+Dx+Ey+F=0$ si ricavano $C\left(-\dfrac D2,-\dfrac E2\right)$ e $r^2=\dfrac{D^2+E^2}{4}-F$. Se $r^2>0$ la circonferenza è reale; se $r^2=0$ resta un punto; se $r^2<0$ il luogo reale è vuoto. Per $x^2+y^2-2x+4y-4=0$, il centro è $(1,-2)$ e il raggio è $3$.
:::

## Appartenenza di un punto

:::teorema{#punti titolo="Confronto delle distanze"}
Un punto $P$ è sulla circonferenza se $CP^2=r^2$, interno se $CP^2<r^2$, esterno se $CP^2>r^2$. Per $x^2+y^2=25$, $(3,4)$ appartiene alla curva perché $9+16=25$; $(1,1)$ è interno. Il confronto dei quadrati evita una radice e conserva il risultato, poiché le distanze sono non negative.

::grafico{curve="5*cos(t),5*sin(t),0,6.283185307" xmin=-6 xmax=6 ymin=-6 ymax=6 uguale=1 punti="0,0,pieno,C;3,4,pieno,P;1,1,pieno,Q" legenda="x^2+y^2=25" titolo="$P(3,4)$ appartiene alla circonferenza, mentre $Q(1,1)$ è interno"}
:::

## Diametro assegnato

:::teorema{#diametro titolo="Estremi del diametro"}
Se $A$ e $B$ sono estremi di un diametro, il centro è il loro punto medio e $r=\dfrac{AB}{2}$. Per $A(-1,2)$ e $B(5,2)$, $C=(2,2)$ e $r=3$. L'equazione è $(x-2)^2+(y-2)^2=9$. I due punti devono essere distinti per avere raggio positivo.
:::

## Intersezioni con una retta

:::teorema{#intersezioni titolo="Riduzione a un'equazione quadratica"}
Per una retta non verticale si sostituisce $y=mx+q$ nell'equazione della circonferenza; per $x=t$ si sostituisce direttamente l'ascissa. Per $x^2+y^2=25$ e $y=3$, si ha $x^2=16$, quindi i punti sono $(-4,3)$ e $(4,3)$. Una radice doppia corrisponde alla tangenza.
:::

## Rette tangenti

:::teorema{#tangenti titolo="Distanza del centro dalla retta"}
Una retta è tangente se la sua distanza dal centro è uguale al raggio. Per $x^2+y^2=r^2$ e un punto $(x_0,y_0)$ sulla curva, la tangente è $x_0x+y_0y=r^2$. Per $(3,4)$ su $x^2+y^2=25$ si ottiene $3x+4y=25$. Il raggio che raggiunge il punto di contatto è perpendicolare alla tangente.
:::

## Corde

:::teorema{#corde titolo="Lunghezza da raggio e distanza"}
Una corda la cui retta dista $d<r$ dal centro ha lunghezza $L=2\sqrt{r^2-d^2}$. La perpendicolare dal centro divide la corda a metà, quindi Pitagora dà $(L/2)^2+d^2=r^2$. Se $r=5$ e $d=3$, $L=8$. Per $d=r$ la corda si riduce al punto di tangenza; per $d>r$ la retta non incontra la curva.
:::

## Due circonferenze

:::teorema{#asse-radicale titolo="Sottrazione delle equazioni"}
Sottraendo due equazioni di circonferenza in forma generale si eliminano $x^2$ e $y^2$. Se i centri sono distinti, resta la retta chiamata **asse radicale**, che contiene gli eventuali punti comuni. Per $x^2+y^2=25$ e $(x-6)^2+y^2=25$, la sottrazione dà $x=3$ e i punti comuni sono $(3,4)$ e $(3,-4)$. La retta esiste anche quando le curve non si intersecano.
:::
