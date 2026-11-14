---
titolo: Geometria euclidea dello spazio
sommario: Come si dispongono punti, rette e piani nello spazio, che cosa sono perpendicolarità, distanze e angoli tra rette e piani, quali sono i poliedri e i solidi di rotazione e come se ne calcolano aree e volumi, fino al principio di Cavalieri e ai solidi inscritti e circoscritti.
---

## Punti, rette e piani nello spazio

:::definizione{#postulati-spazio titolo="Postulati di appartenenza nello spazio"}
Nella geometria dello spazio gli enti primitivi sono il **punto**, la **retta** e il **piano**. Gli enti primitivi non si definiscono, e le loro proprietà sono fissate da alcuni postulati. I postulati di appartenenza sono questi.
- Per tre punti non allineati passa uno e un solo piano.
- Se una retta ha due punti in un piano, allora è tutta contenuta nel piano.
- Se due piani distinti hanno un punto in comune, allora hanno in comune una retta che passa per quel punto.

I postulati servono a decidere quando più punti o più rette stanno in uno stesso piano. Un tavolo con tre gambe appoggia sempre sul pavimento, perché le estremità delle gambe sono tre punti non allineati e quindi individuano un piano; con quattro gambe il quarto punto può stare fuori da quel piano.
:::

:::teorema{#individuare-piano titolo="Come si individua un piano"}
Un piano è individuato in uno e un solo modo da tre punti non allineati, da una retta e un punto esterno a essa, da due rette incidenti oppure da due rette parallele distinte. Gli ultimi tre casi si riconducono al primo, scegliendo tre punti non allineati sulle rette e sul punto dati. Nel cubo $ABCDEFGH$, con base $ABCD$ e spigoli laterali $AE$, $BF$, $CG$ e $DH$, gli spigoli paralleli $AE$ e $CG$ individuano un piano, che taglia il cubo nel rettangolo $ACGE$.
:::

:::definizione{#posizioni-rette titolo="Posizioni reciproche di due rette"}
Due rette distinte dello spazio sono:
- **incidenti**, se hanno un solo punto in comune;
- **parallele**, se stanno in uno stesso piano e non hanno punti in comune;
- **sghembe**, se non esiste un piano che le contiene entrambe.

Le rette incidenti e le rette parallele sono **complanari**, cioè stanno in uno stesso piano. Due rette sghembe non hanno punti comuni, come due rette parallele, e i due casi differiscono per il piano, perché due rette parallele stanno in un piano e due rette sghembe no. Nel cubo della figura gli spigoli $AB$ e $BC$ sono incidenti in $B$, gli spigoli $AB$ e $HG$ sono paralleli, perché stanno nel piano $ABGH$ e non hanno punti comuni, e gli spigoli $AB$ e $CG$ sono sghembi.

::grafico{assi=0 uguale=1 linee="0,0 4,0 5.41,1.41;0,0 0,4 4,4 4,0;4,4 5.41,5.41 5.41,1.41;0,4 1.41,5.41 5.41,5.41" segmenti="0,0,1.41,1.41;1.41,1.41,5.41,1.41;1.41,1.41,1.41,5.41" etichette="-0.5,-0.5,A;4.15,-0.5,B;5.61,1.11,C;0.86,1.56,D;-0.5,4.1,E;4.15,3.55,F;5.56,5.56,G;0.96,5.61,H" xmin=-1.1 xmax=6.21 ymin=-1.1 ymax=6.21 legenda=0 titolo="Nel cubo $ABCDEFGH$ le rette $AB$ e $CG$ non hanno punti comuni e non stanno in uno stesso piano, quindi sono sghembe"}

:::

:::attenzione
Due rette senza punti comuni possono non essere parallele. Se $AB$ e $CG$ fossero parallele, starebbero in un piano che contiene $A$, $B$ e $C$, cioè nel piano della base; il punto $G$ però non sta nel piano della base, quindi le due rette sono **sghembe**.
:::

:::definizione{#posizioni-retta-piano titolo="Posizioni di una retta e di un piano e di due piani"}
Una retta e un piano possono trovarsi in tre posizioni:
- la retta è **contenuta** nel piano, se ha almeno due punti nel piano;
- la retta è **incidente** al piano, se ha un solo punto in comune con il piano;
- la retta è **parallela** al piano, se non ha punti in comune con il piano.

Due piani distinti sono invece **incidenti**, se hanno in comune una retta, oppure **paralleli**, se non hanno punti in comune; altri casi sono esclusi dal terzo postulato di appartenenza. Una retta esterna a un piano è parallela al piano quando è parallela a una retta del piano. Nel cubo lo spigolo $EF$ è parallelo allo spigolo $AB$ della base, quindi è parallelo al piano della base, mentre lo spigolo $AE$ è incidente al piano della base in $A$. Il piano della base e quello della faccia $ABFE$ sono incidenti lungo la retta $AB$; il piano della base e quello della faccia $EFGH$ sono paralleli.
:::

## Perpendicolarità tra rette e piani

:::definizione{#retta-perpendicolare-piano titolo="Retta perpendicolare a un piano"}
Una retta $r$ incidente a un piano $\alpha$ nel punto $H$ è **perpendicolare** al piano se è perpendicolare a *ogni* retta di $\alpha$ che passa per $H$. Il punto $H$ si chiama **piede** della perpendicolare. Un esempio concreto è un palo piantato verticalmente nel terreno, che forma un angolo retto con ogni retta del terreno tracciata a partire dalla sua base.

Per un punto dello spazio passa una e una sola retta perpendicolare a un piano dato, e per un punto passa uno e un solo piano perpendicolare a una retta data. Queste due proprietà permettono di parlare della perpendicolare condotta da un punto a un piano.
:::

:::teorema{#criterio-perpendicolarita titolo="Criterio di perpendicolarità tra retta e piano"}
Se una retta $r$, incidente al piano $\alpha$ nel punto $H$, è perpendicolare a due rette distinte di $\alpha$ che passano per $H$, allora $r$ è perpendicolare al piano $\alpha$.

Il criterio riduce il controllo da infinite rette a due sole. Nel cubo di spigolo $4$ lo spigolo $AE$ è perpendicolare agli spigoli $AB$ e $AD$, perché le facce sono quadrati; quindi $AE$ è perpendicolare al piano della base e, in particolare, alla diagonale $AC$. Il triangolo $ACE$ è perciò rettangolo in $A$. Poiché $AC = 4\sqrt{2}$, la diagonale del cubo misura
$$
CE = \sqrt{AE^2 + AC^2} = \sqrt{16 + 32} = \sqrt{48} = 4\sqrt{3} .
$$
:::

:::teorema{#tre-perpendicolari titolo="Teorema delle tre perpendicolari"}
Sia $PH$ un segmento perpendicolare al piano $\alpha$, con $H$ in $\alpha$, e sia $r$ una retta di $\alpha$ che non passa per $H$. Se $A$ è il piede della perpendicolare condotta da $H$ alla retta $r$, allora il segmento $PA$ è perpendicolare alla retta $r$.

::grafico{assi=0 uguale=1 curve="1.89+(7.4)*t,1.59+(0)*t,0,1" poligoni="0,0 8,0 10.12,2.12 2.12,2.12" linee="0,0 8,0 10.12,2.12 2.12,2.12 0,0;3.42,4.42 3.42,0.42;3.42,0.42 4.59,1.59;3.42,4.42 4.59,1.59;3.58,0.58 3.58,1.03 3.42,0.87;4.43,1.43 4.88,1.43 5.04,1.59" punti="3.42,4.42,pieno,P;4.59,1.59,pieno,A;3.42,0.42,pieno" etichette="2.72,0.12,H;9.29,1.84,r;7.31,0.11,α" xmin=-0.6 xmax=10.72 ymin=-0.6 ymax=5.02 legenda=0 titolo="Teorema delle tre perpendicolari: $PH$ è perpendicolare al piano $\alpha$ e $HA$ è perpendicolare alla retta $r$, quindi anche $PA$ è perpendicolare a $r$"}

Le tre perpendicolari sono $PH$ al piano, $HA$ alla retta $r$ e $PA$ alla retta $r$. Il teorema serve a trovare la distanza di un punto da una retta di un piano. Per esempio, se $PH = 3$ e la distanza di $H$ dalla retta $r$ è $HA = 4$, allora $PA$ è perpendicolare a $r$ e il triangolo $PHA$ è rettangolo in $H$, quindi la distanza di $P$ da $r$ è
$$
PA = \sqrt{3^2 + 4^2} = 5 .
$$
Il teorema servirà a riconoscere l'altezza delle facce laterali di una piramide.
:::

## Proiezioni e distanze

::::teorema{#perpendicolare-obliqua titolo="Segmento di perpendicolare e segmenti obliqui"}
Sia $P$ un punto esterno al piano $\alpha$ e sia $H$ il piede della perpendicolare condotta da $P$ ad $\alpha$; il punto $H$ si chiama **proiezione ortogonale** di $P$ su $\alpha$, e il segmento $HA$ è la proiezione del segmento obliquo $PA$. Allora:
- per ogni punto $A$ di $\alpha$ diverso da $H$ si ha $PA > PH$;
- due segmenti obliqui $PA$ e $PB$ sono congruenti se e solo se le loro proiezioni $HA$ e $HB$ sono congruenti.

::grafico{assi=0 uguale=1 curve="3.71+(4)*t,4.71+(-4)*t,0,1" poligoni="0,0 9,0 11.12,2.12 2.12,2.12" linee="0,0 9,0 11.12,2.12 2.12,2.12 0,0;3.71,4.71 3.71,0.71;3.71,0.71 7.71,0.71;4.16,0.71 4.16,1.16 3.71,1.16" punti="3.71,4.71,pieno,P;3.71,0.71,pieno,H;7.71,0.71,pieno,A" etichette="8.31,0.11,α" xmin=-0.6 xmax=11.72 ymin=-0.6 ymax=5.31 legenda=0 titolo="Il segmento di perpendicolare $PH$ e un segmento obliquo $PA$; il triangolo $PHA$ è rettangolo in $H$, quindi $PA > PH$"}

Il teorema dice che $PH$ è il segmento più corto che unisce $P$ al piano. Per esempio, con $PH = 5$ e $HA = 12$, il segmento obliquo misura $PA = \sqrt{25 + 144} = 13$, che è maggiore di $5$. La seconda parte mostra che i punti del piano a distanza fissata da $P$ formano una circonferenza di centro $H$.

:::dimostrazione
L'idea è usare il teorema di Pitagora nel triangolo $PHA$. La retta $PH$ è perpendicolare ad $\alpha$, quindi è perpendicolare alla retta $HA$, che sta in $\alpha$ e passa per $H$. Il triangolo $PHA$ è perciò rettangolo in $H$, e vale
$$
PA^2 = PH^2 + HA^2 .
$$
Poiché $A \neq H$, si ha $HA^2 > 0$, quindi $PA^2 > PH^2$ e $PA > PH$. Per la seconda parte si scrive la stessa relazione anche per $B$, cioè $PB^2 = PH^2 + HB^2$. Allora $PA = PB$ se e solo se $HA^2 = HB^2$, cioè se e solo se $HA = HB$.
:::
::::

:::definizione{#distanze titolo="Distanze nello spazio"}
La **distanza di un punto da un piano** è la lunghezza del segmento di perpendicolare $PH$, che è il più corto fra i segmenti che uniscono il punto al piano. Le altre distanze si riconducono a questa.
- La distanza fra due piani paralleli è la distanza da uno dei due piani di un punto qualsiasi dell'altro.
- La distanza fra una retta e un piano paralleli è la distanza dal piano di un punto qualsiasi della retta.
- La distanza fra due rette sghembe è la lunghezza del segmento che le unisce ed è perpendicolare a entrambe; questo segmento si chiama **perpendicolare comune** ed esiste ed è unico per ogni coppia di rette sghembe.

Nel cubo di spigolo $4$ il vertice $G$ dista $4$ dal piano della base, e la faccia superiore dista $4$ dalla base. Per le rette sghembe $AB$ e $CG$ la perpendicolare comune è lo spigolo $BC$, che è perpendicolare ad $AB$ nella base e a $CG$ nella faccia $BCGF$; quindi la loro distanza è $BC = 4$.
:::

## Angoli tra rette e piani e diedri

:::definizione{#angolo-retta-piano titolo="Angolo fra una retta e un piano"}
Se una retta $r$ è obliqua rispetto al piano $\alpha$, cioè incidente e non perpendicolare, l'**angolo fra la retta e il piano** è l'angolo acuto formato da $r$ e dalla sua proiezione ortogonale su $\alpha$. Se $r$ è perpendicolare ad $\alpha$ l'angolo è retto; se $r$ è parallela ad $\alpha$ o contenuta in $\alpha$ l'angolo è nullo.

Con il triangolo rettangolo $PHA$ l'angolo $\theta$ in $A$ si calcola con la trigonometria, perché $PH = PA \sin\theta$ e $HA = PA \cos\theta$. Nel cubo di spigolo $4$ la diagonale $CE$ ha come proiezione sulla base la diagonale $CA$, perché $A$ è la proiezione di $E$. L'angolo $\theta$ fra la diagonale del cubo e la base soddisfa quindi
$$
\tan\theta = \frac{AE}{AC} = \frac{4}{4\sqrt{2}} = \frac{\sqrt{2}}{2} ,
\qquad
\theta = \arctan\frac{\sqrt{2}}{2} \approx 35{,}3° .
$$
:::

:::definizione{#diedro titolo="Diedro e sua sezione normale"}
Due semipiani $\alpha$ e $\beta$ con la stessa retta di origine $s$ dividono lo spazio in due parti; ciascuna parte, insieme ai due semipiani, si chiama **diedro**. La retta $s$ è lo **spigolo** del diedro e i semipiani sono le **facce**. La **sezione normale** del diedro è l'angolo che si ottiene tagliandolo con un piano perpendicolare allo spigolo, cioè l'angolo formato da due semirette, una per faccia, perpendicolari a $s$ nello stesso punto.

::grafico{assi=0 uguale=1 poligoni="0,0 5,0 7.12,2.12 2.12,2.12;0,0 2.5,4.33 4.62,6.45 2.12,2.12" linee="0,0 5,0 7.12,2.12 2.12,2.12;0,0 2.5,4.33 4.62,6.45 2.12,2.12;-0.28,-0.28 2.4,2.4;5.06,1.06 1.06,1.06 3.06,4.52;2.16,1.06 2.16,1.16 2.14,1.25 2.12,1.35 2.09,1.44 2.06,1.53 2.01,1.61 1.96,1.69 1.9,1.77 1.84,1.84 1.77,1.9 1.69,1.96 1.61,2.01" etichette="2.29,1.71,θ;2.5,2.5,s;4.54,0.14,α;2.44,3.87,β" xmin=-0.88 xmax=7.72 ymin=-0.88 ymax=7.05 legenda=0 titolo="Diedro di spigolo $s$ e facce $\alpha$ e $\beta$; la sezione normale è l'angolo $\theta$ formato da due semirette perpendicolari allo spigolo"}

Tutte le sezioni normali di un diedro sono congruenti, quindi l'**ampiezza del diedro** si definisce come l'ampiezza della sua sezione normale. Un diedro è retto quando la sua sezione normale è un angolo retto; in questo caso i piani delle facce si dicono **perpendicolari**. Per esempio due facce adiacenti di un cubo formano un diedro retto, perché la sezione normale lungo lo spigolo $AB$ è l'angolo $\widehat{DAE}$, che è retto.
:::

:::esempio{titolo="Diedro fra la base e una faccia laterale di una piramide"}
Una piramide regolare ha per base il quadrato $ABCD$ di lato $6$ e altezza $VH = 4$, dove $H$ è il centro del quadrato. Si cerca l'ampiezza del diedro di spigolo $AB$ formato dalla base e dalla faccia $VAB$. Sia $M$ il punto medio di $AB$. Il segmento $HM$ è perpendicolare ad $AB$ e misura $3$, metà del lato. Per il **teorema delle tre perpendicolari**, applicato a $VH$ perpendicolare alla base e a $HM$ perpendicolare ad $AB$, anche $VM$ è perpendicolare ad $AB$. L'angolo $\widehat{VMH}$ è quindi la sezione normale del diedro, e nel triangolo $VHM$, rettangolo in $H$, vale
$$
\tan\widehat{VMH} = \frac{VH}{HM} = \frac{4}{3} ,
\qquad
\widehat{VMH} = \arctan\frac{4}{3} \approx 53{,}1° .
$$

::grafico{assi=0 uguale=1 curve="0+(-1.06)*t,4+(-5.06)*t,0,1" linee="-4.06,-1.06 1.94,-1.06 4.06,1.06;-4.06,-1.06 0,4 1.94,-1.06;0,4 4.06,1.06" segmenti="4.06,1.06,-1.94,1.06;-1.94,1.06,-4.06,-1.06;0,4,-1.94,1.06;0,4,0,0;0,0,-1.06,-1.06" etichette="-4.56,-1.56,A;2.09,-1.56,B;4.26,0.86,C;-2.49,1.16,D;0.1,4.2,V;0.15,-0.1,H;-1.01,-1.66,M;-1.13,-0.48,3;0.15,2,4" xmin=-5.16 xmax=4.86 ymin=-2.26 ymax=4.8 legenda=0 titolo="Nella piramide regolare di base quadrata $ABCD$ l'apotema $VM$ e il segmento $HM$ sono perpendicolari allo spigolo $AB$; l'angolo $\widehat{VMH}$ è la sezione normale del diedro di spigolo $AB$"}

:::

## Poliedri, prismi e parallelepipedi

:::definizione{#poliedro titolo="Poliedro"}
Un **poliedro** è la parte di spazio limitata da un numero finito di poligoni, disposti in modo che ogni lato di un poligono sia lato di uno e un solo altro poligono. I poligoni sono le **facce**, i loro lati sono gli **spigoli** e i loro vertici sono i **vertici** del poliedro. Un poliedro è **convesso** se, per ogni faccia, il poliedro sta tutto da una stessa parte del piano di quella faccia. Il cubo è un poliedro convesso con $6$ facce quadrate, $12$ spigoli e $8$ vertici.
:::

:::definizione{#prisma titolo="Prisma"}
Un **prisma** è un poliedro limitato da due poligoni congruenti che stanno su piani paralleli, le **basi**, e dai parallelogrammi che uniscono i lati corrispondenti delle basi, le **facce laterali**. L'**altezza** del prisma è la distanza fra i piani delle basi. Il prisma è **retto** se gli spigoli laterali sono perpendicolari alle basi; in questo caso le facce laterali sono rettangoli e l'altezza è uguale allo spigolo laterale. Un prisma retto è **regolare** se le basi sono poligoni regolari. Un prisma regolare con base esagonale ha $8$ facce, $18$ spigoli e $12$ vertici.
:::

::::teorema{#aree-prisma titolo="Area laterale e area totale del prisma retto"}
Sia dato un prisma retto con area di base $B$, perimetro di base $2p$ e altezza $h$. L'area laterale $A_l$ e l'area totale $A_t$ sono
$$
A_l = 2p \cdot h ,
\qquad
A_t = A_l + 2B .
$$
Per esempio, un prisma retto alto $10$ con base un triangolo rettangolo di cateti $3$ e $4$ ha ipotenusa di base $5$, perimetro $2p = 12$ e area di base $B = 6$. Quindi $A_l = 12 \cdot 10 = 120$ e $A_t = 120 + 12 = 132$.

:::dimostrazione
Le facce laterali di un prisma retto sono rettangoli che hanno per base un lato del poligono di base e per altezza lo spigolo laterale, che misura $h$. Se i lati della base sono $l_1, l_2, \dots, l_n$, la somma delle aree delle facce laterali è $l_1 h + l_2 h + \dots + l_n h = (l_1 + l_2 + \dots + l_n)\, h = 2p \cdot h$. Per l'area totale si aggiungono le aree delle due basi, che sono congruenti e misurano $B$ ciascuna.
:::
::::

:::definizione{#parallelepipedo titolo="Parallelepipedo"}
Un **parallelepipedo** è un prisma che ha per basi due parallelogrammi; tutte le sue sei facce sono quindi parallelogrammi, e le facce opposte sono congruenti e stanno su piani paralleli. Un parallelepipedo retto con base rettangolare si chiama **parallelepipedo rettangolo**: le sue facce sono sei rettangoli e i tre spigoli che escono da uno stesso vertice, di lunghezze $a$, $b$ e $c$, si chiamano **dimensioni**. Il **cubo** è il parallelepipedo rettangolo con le tre dimensioni uguali. L'area totale di un parallelepipedo rettangolo è $A_t = 2\,(ab + ac + bc)$, perché le facce sono tre coppie di rettangoli congruenti. Per $a = 3$, $b = 4$ e $c = 12$ si trova $A_t = 2\,(12 + 36 + 48) = 192$.
:::

::::teorema{#diagonale-parallelepipedo titolo="Diagonale del parallelepipedo rettangolo"}
In un parallelepipedo rettangolo di dimensioni $a$, $b$ e $c$ la diagonale misura
$$
d = \sqrt{a^2 + b^2 + c^2} .
$$
In particolare la diagonale di un cubo di spigolo $l$ misura $d = \sqrt{3l^2} = l\sqrt{3}$. Per le dimensioni $3$, $4$ e $12$ si ottiene $d = \sqrt{9 + 16 + 144} = \sqrt{169} = 13$. La formula si usa anche al contrario, per trovare una dimensione conoscendo la diagonale e le altre due dimensioni.

::grafico{assi=0 uguale=1 curve="0+(7.41)*t,0+(1.41)*t,0,1;0+(7.41)*t,0+(4.41)*t,0,1" linee="0,0 6,0 7.41,1.41;0,0 0,3 6,3 6,0;6,3 7.41,4.41 7.41,1.41;0,3 1.41,4.41 7.41,4.41" segmenti="0,0,1.41,1.41;1.41,1.41,7.41,1.41;1.41,1.41,1.41,4.41" etichette="-0.5,-0.5,A;6.15,-0.5,B;7.61,1.11,C;0.86,1.56,D;-0.5,3.1,E;6.15,2.55,F;7.56,4.56,G;0.96,4.61,H;3,-0.55,a;6.91,0.51,b;6.15,1.5,c" xmin=-1.1 xmax=8.21 ymin=-1.15 ymax=5.21 legenda=0 titolo="La diagonale $AG$ del parallelepipedo rettangolo è l'ipotenusa del triangolo $ACG$, rettangolo in $C$; $AC$ è la diagonale della base"}

:::dimostrazione
L'idea è applicare due volte il teorema di Pitagora, prima nella base e poi nel triangolo $ACG$. Siano $AB = a$, $BC = b$ e $CG = c$. Il triangolo $ABC$ è rettangolo in $B$, quindi la diagonale di base misura
$$
AC^2 = a^2 + b^2 .
$$
Lo spigolo $CG$ è perpendicolare agli spigoli $CB$ e $CD$, che stanno nella base e passano per $C$; per il criterio di perpendicolarità $CG$ è perpendicolare al piano della base e quindi alla retta $CA$. Il triangolo $ACG$ è perciò rettangolo in $C$, e
$$
AG^2 = AC^2 + CG^2 = a^2 + b^2 + c^2 .
$$
Estraendo la radice quadrata si ottiene la formula.
:::
::::

## Piramidi e tronchi di piramide

:::definizione{#piramide titolo="Piramide, piramide retta e piramide regolare"}
Una **piramide** è un poliedro limitato da un poligono, la **base**, e dai triangoli che hanno per base i lati del poligono e per vertice comune un punto $V$ esterno al piano di base. L'**altezza** è la distanza $VH$ del vertice dal piano di base. Una piramide con base triangolare si chiama **tetraedro**.

Una piramide è **retta** se nella base si può inscrivere una circonferenza e il piede $H$ dell'altezza è il centro di questa circonferenza; è **regolare** se inoltre la base è un poligono regolare. In una piramide retta le altezze delle facce laterali condotte da $V$ sono congruenti, e la loro lunghezza comune si chiama **apotema** della piramide.
:::

:::richiamo{titolo="Teorema delle tre perpendicolari"}
Se $PH$ è perpendicolare al piano $\alpha$, con $H$ in $\alpha$, e $HA$ è perpendicolare alla retta $r$ di $\alpha$, con $A$ in $r$, allora $PA$ è perpendicolare a $r$.
:::

::::teorema{#apotema-piramide titolo="Apotema della piramide retta"}
Sia data una piramide retta di altezza $h$, e sia $r$ il raggio della circonferenza inscritta nella base. L'apotema $a$ della piramide soddisfa
$$
a = \sqrt{h^2 + r^2} .
$$
Nella piramide regolare di base quadrata con lato $6$ e altezza $4$ il raggio della circonferenza inscritta nel quadrato è metà del lato, cioè $3$, quindi l'apotema è $a = \sqrt{16 + 9} = 5$. Lo spigolo laterale $VA$ si trova invece con la distanza $HA = 3\sqrt{2}$, metà della diagonale del quadrato, e misura $VA = \sqrt{16 + 18} = \sqrt{34}$.

:::dimostrazione
L'idea è riconoscere l'altezza di una faccia laterale con il teorema delle tre perpendicolari. Sia $M$ il punto in cui la circonferenza inscritta nella base tocca il lato $AB$. Il raggio $HM$ è perpendicolare ad $AB$, perché il raggio è perpendicolare alla tangente nel punto di contatto, e misura $r$. Il segmento $VH$ è perpendicolare al piano di base, quindi per il teorema delle tre perpendicolari anche $VM$ è perpendicolare ad $AB$. Perciò $VM$ è l'altezza della faccia $VAB$, cioè l'apotema $a$. Il triangolo $VHM$ è rettangolo in $H$, perché $VH$ è perpendicolare a ogni retta della base passante per $H$, e per il teorema di Pitagora $a^2 = h^2 + r^2$.
:::
::::

:::teorema{#aree-piramide titolo="Area laterale e area totale della piramide retta"}
In una piramide retta con area di base $B$, perimetro di base $2p$ e apotema $a$ valgono
$$
A_l = p \cdot a ,
\qquad
A_t = A_l + B .
$$
La formula segue dal fatto che le facce laterali sono triangoli che hanno per basi i lati del poligono di base e tutti la stessa altezza $a$; la somma delle loro aree è $\dfrac{1}{2}\,(l_1 + \dots + l_n)\,a = \dfrac{2p \cdot a}{2} = p \cdot a$. Per la piramide quadrata con lato $6$ e apotema $5$ il semiperimetro è $p = 12$, quindi $A_l = 12 \cdot 5 = 60$ e $A_t = 60 + 36 = 96$.
:::

:::teorema{#sezione-parallela-piramide titolo="Sezione di una piramide parallela alla base"}
Si taglia una piramide di altezza $h$ e area di base $B$ con un piano parallelo alla base, a distanza $x$ dal vertice, con $0 < x < h$. La sezione è un poligono simile alla base, con rapporto di similitudine $\dfrac{x}{h}$, e la sua area $B'$ è
$$
B' = B \left( \frac{x}{h} \right)^2 .
$$
Il rapporto delle aree è il quadrato del rapporto di similitudine, come per i poligoni simili del piano. Per una piramide alta $12$ con base di area $81$, la sezione a distanza $8$ dal vertice ha area $81 \cdot \left( \dfrac{8}{12} \right)^2 = 81 \cdot \dfrac{4}{9} = 36$.
:::

:::definizione{#tronco-piramide titolo="Tronco di piramide"}
Il **tronco di piramide** è la parte di piramide compresa fra la base e una sezione parallela alla base. Le due basi sono poligoni simili su piani paralleli, le facce laterali sono trapezi e l'altezza del tronco è la distanza fra le basi. Se la piramide di partenza è regolare, le facce laterali sono trapezi isosceli congruenti, e la loro altezza si chiama **apotema del tronco**. L'area laterale del tronco di piramide regolare è
$$
A_l = (p + p') \cdot a ,
$$
dove $p$ e $p'$ sono i semiperimetri delle basi e $a$ è l'apotema, perché ogni trapezio ha area uguale alla semisomma delle basi per l'altezza. Per un tronco con basi quadrate di lati $10$ e $4$ e altezza $4$ si taglia con il piano per i centri delle basi perpendicolare a due lati opposti. La sezione è un trapezio isoscele alto $4$, con basi $10$ e $4$, e i suoi lati obliqui sono apotemi; la differenza delle semibasi è $5 - 2 = 3$, quindi $a = \sqrt{16 + 9} = 5$. I semiperimetri sono $20$ e $8$, perciò $A_l = 28 \cdot 5 = 140$ e $A_t = 140 + 100 + 16 = 256$.
:::

## Poliedri regolari e relazione di Eulero

:::definizione{#poliedro-regolare titolo="Poliedro regolare"}
Un poliedro convesso è **regolare** se le sue facce sono poligoni regolari congruenti e in ogni vertice concorre lo stesso numero di facce. Il cubo è regolare, perché ha sei facce quadrate congruenti e in ogni vertice concorrono tre facce. Un prisma retto con base triangolare equilatera e facce laterali quadrate *non* è regolare, perché ha facce di due tipi diversi.
:::

::::teorema{#cinque-poliedri-regolari titolo="I cinque poliedri regolari"}
Esistono soltanto cinque poliedri regolari: il **tetraedro**, l'**ottaedro** e l'**icosaedro**, con facce triangolari, il **cubo**, con facce quadrate, e il **dodecaedro**, con facce pentagonali.

| poliedro | facce $F$ | vertici $V$ | spigoli $S$ | facce in un vertice |
| --- | --- | --- | --- | --- |
| tetraedro | $4$ | $4$ | $6$ | $3$ triangoli |
| ottaedro | $8$ | $6$ | $12$ | $4$ triangoli |
| icosaedro | $20$ | $12$ | $30$ | $5$ triangoli |
| cubo | $6$ | $8$ | $12$ | $3$ quadrati |
| dodecaedro | $12$ | $20$ | $30$ | $3$ pentagoni |

:::dimostrazione
L'idea è contare quante facce possono concorrere in un vertice. In un poliedro convesso la somma degli angoli delle facce che concorrono in un vertice è minore di $360°$; questa proprietà si accetta senza dimostrazione, e si vede con un modello di carta, perché con una somma di $360°$ le facce stanno in un piano e non formano una punta. In un vertice concorrono inoltre almeno tre facce, perché due sole facce non racchiudono una parte di spazio. Se in un vertice concorrono $k$ facce con angolo $\varphi$, deve quindi valere $k \cdot \varphi < 360°$, con $k \geq 3$.
- Con triangoli equilateri $\varphi = 60°$, quindi $k \cdot 60° < 360°$ dà $k < 6$; i valori possibili sono $k = 3, 4, 5$, che corrispondono a tetraedro, ottaedro e icosaedro.
- Con quadrati $\varphi = 90°$, quindi $k < 4$ e l'unico valore è $k = 3$, che corrisponde al cubo.
- Con pentagoni regolari $\varphi = 108°$, quindi $k < \dfrac{360}{108} \approx 3{,}3$ e l'unico valore è $k = 3$, che corrisponde al dodecaedro.
- Con esagoni regolari $\varphi = 120°$, e già $3 \cdot 120° = 360°$, quindi nessun valore $k \geq 3$ soddisfa la condizione; per poligoni con più lati l'angolo è ancora maggiore.

Perciò le combinazioni possibili sono cinque. L'esistenza dei cinque poliedri si verifica costruendoli.
:::
::::

:::teorema{#relazione-eulero titolo="Relazione di Eulero"}
In ogni poliedro convesso il numero $F$ delle facce, il numero $V$ dei vertici e il numero $S$ degli spigoli soddisfano
$$
F + V - S = 2 .
$$
La relazione si verifica nella tabella dei poliedri regolari: per il cubo $6 + 8 - 12 = 2$ e per l'icosaedro $20 + 12 - 30 = 2$. Vale anche per i poliedri che non sono regolari; il prisma esagonale ha $8 + 12 - 18 = 2$. La relazione serve a ricavare uno dei tre numeri conoscendo gli altri due. Il dodecaedro ha $12$ facce pentagonali; ogni spigolo appartiene a due facce, quindi $S = \dfrac{12 \cdot 5}{2} = 30$, e dalla relazione di Eulero $V = 2 - F + S = 2 - 12 + 30 = 20$.
:::

## Solidi di rotazione

:::definizione{#solidi-rotazione titolo="Solidi di rotazione"}
Un **solido di rotazione** è il solido descritto da una figura piana che compie un giro completo attorno a una retta del suo piano, detta **asse di rotazione**.
- Il **cilindro** è generato da un rettangolo che ruota attorno a un suo lato.
- Il **cono** è generato da un triangolo rettangolo che ruota attorno a un cateto.
- Il **tronco di cono** è generato da un trapezio rettangolo che ruota attorno al lato perpendicolare alle basi.
- La **sfera** è generata da un semicerchio che ruota attorno al diametro.

Il lato che, ruotando, descrive la superficie laterale si chiama **generatrice**. Le sezioni di un solido di rotazione con piani perpendicolari all'asse sono cerchi. Per esempio, il rettangolo di lati $3$ e $5$ che ruota attorno al lato di lunghezza $5$ genera un cilindro di raggio $3$ e altezza $5$.
:::

:::teorema{#aree-cilindro titolo="Area laterale e area totale del cilindro"}
Per un cilindro di raggio di base $r$ e altezza $h$ valgono
$$
A_l = 2\pi r h ,
\qquad
A_t = 2\pi r h + 2\pi r^2 = 2\pi r\,(h + r) .
$$
Se si taglia la superficie laterale lungo una generatrice e la si stende su un piano, si ottiene un rettangolo di base $2\pi r$, la lunghezza della circonferenza di base, e altezza $h$; da qui viene la prima formula. Il cilindro di raggio $3$ e altezza $5$ ha $A_l = 30\pi$ e $A_t = 30\pi + 18\pi = 48\pi$. Il cilindro si dice **equilatero** se $h = 2r$, cioè se la sua sezione con un piano che contiene l'asse è un quadrato.

::grafico{assi=0 uguale=1 curve="0+(3)*t,5+(0)*t,0,1" linee="-3,0 -2.97,-0.12 -2.9,-0.23 -2.77,-0.34 -2.6,-0.45 -2.38,-0.55 -2.12,-0.64 -1.83,-0.71 -1.5,-0.78 -1.15,-0.83 -0.78,-0.87 -0.39,-0.89 0,-0.9 0.39,-0.89 0.78,-0.87 1.15,-0.83 1.5,-0.78 1.83,-0.71 2.12,-0.64 2.38,-0.55 2.6,-0.45 2.77,-0.34 2.9,-0.23 2.97,-0.12 3,0;3,5 2.97,5.12 2.9,5.23 2.77,5.34 2.6,5.45 2.38,5.55 2.12,5.64 1.83,5.71 1.5,5.78 1.15,5.83 0.78,5.87 0.39,5.89 0,5.9 -0.39,5.89 -0.78,5.87 -1.15,5.83 -1.5,5.78 -1.83,5.71 -2.12,5.64 -2.38,5.55 -2.6,5.45 -2.77,5.34 -2.9,5.23 -2.97,5.12 -3,5 -2.97,4.88 -2.9,4.77 -2.77,4.66 -2.6,4.55 -2.38,4.45 -2.12,4.36 -1.83,4.29 -1.5,4.22 -1.15,4.17 -0.78,4.13 -0.39,4.11 0,4.1 0.39,4.11 0.78,4.13 1.15,4.17 1.5,4.22 1.83,4.29 2.12,4.36 2.38,4.45 2.6,4.55 2.77,4.66 2.9,4.77 2.97,4.88 3,5;-3,0 -3,5;3,0 3,5" segmenti="3,0,2.94,0.18;2.94,0.18,2.77,0.34;2.77,0.34,2.49,0.5;2.49,0.5,2.12,0.64;2.12,0.64,1.67,0.75;1.67,0.75,1.15,0.83;1.15,0.83,0.59,0.88;0.59,0.88,0,0.9;0,0.9,-0.59,0.88;-0.59,0.88,-1.15,0.83;-1.15,0.83,-1.67,0.75;-1.67,0.75,-2.12,0.64;-2.12,0.64,-2.49,0.5;-2.49,0.5,-2.77,0.34;-2.77,0.34,-2.94,0.18;-2.94,0.18,-3,0;0,0,0,5;0,0,3,0" etichette="1.2,5.25,r;0.15,2.5,h;0.15,-0.45,O;0.15,5.15,O′" xmin=-3.6 xmax=3.6 ymin=-1.5 ymax=6.5 legenda=0 titolo="Cilindro di raggio $r$ e altezza $h$; l'asse $OO'$ è perpendicolare alle due basi"}

:::

::::teorema{#aree-cono titolo="Area laterale e area totale del cono"}
Per un cono di raggio di base $r$ e altezza $h$ l'**apotema**, cioè la lunghezza della generatrice, è $a = \sqrt{h^2 + r^2}$, e valgono
$$
A_l = \pi r a ,
\qquad
A_t = \pi r a + \pi r^2 = \pi r\,(a + r) .
$$
Il cono di raggio $3$ e altezza $4$ ha apotema $a = \sqrt{16 + 9} = 5$, quindi $A_l = 15\pi$ e $A_t = 15\pi + 9\pi = 24\pi$.

::grafico{assi=0 uguale=1 curve="3+(-3)*t,0+(4)*t,0,1" linee="-3,0 -2.97,-0.12 -2.9,-0.23 -2.77,-0.34 -2.6,-0.45 -2.38,-0.55 -2.12,-0.64 -1.83,-0.71 -1.5,-0.78 -1.15,-0.83 -0.78,-0.87 -0.39,-0.89 0,-0.9 0.39,-0.89 0.78,-0.87 1.15,-0.83 1.5,-0.78 1.83,-0.71 2.12,-0.64 2.38,-0.55 2.6,-0.45 2.77,-0.34 2.9,-0.23 2.97,-0.12 3,0;-3,0 0,4 3,0" segmenti="3,0,2.94,0.18;2.94,0.18,2.77,0.34;2.77,0.34,2.49,0.5;2.49,0.5,2.12,0.64;2.12,0.64,1.67,0.75;1.67,0.75,1.15,0.83;1.15,0.83,0.59,0.88;0.59,0.88,0,0.9;0,0.9,-0.59,0.88;-0.59,0.88,-1.15,0.83;-1.15,0.83,-1.67,0.75;-1.67,0.75,-2.12,0.64;-2.12,0.64,-2.49,0.5;-2.49,0.5,-2.77,0.34;-2.77,0.34,-2.94,0.18;-2.94,0.18,-3,0;0,0,0,4;0,0,3,0" etichette="1.3,-0.5,r;0.15,1.7,h;1.75,2.2,a;0.15,4.1,V" xmin=-3.6 xmax=3.6 ymin=-1.5 ymax=4.7 legenda=0 titolo="Cono di raggio $r$ e altezza $h$; l'apotema $a$ è l'ipotenusa di un triangolo rettangolo di cateti $r$ e $h$"}

:::dimostrazione
L'idea è stendere la superficie laterale su un piano. Tagliando lungo una generatrice si ottiene un settore circolare di raggio $a$, il cui arco ha la lunghezza $2\pi r$ della circonferenza di base. L'area di un settore circolare è metà del prodotto della lunghezza dell'arco per il raggio, come l'area di un triangolo è metà del prodotto della base per l'altezza. Quindi
$$
A_l = \frac{1}{2} \cdot 2\pi r \cdot a = \pi r a .
$$
Per il cono di raggio $3$ e apotema $5$ il settore ha un angolo al centro di $\dfrac{2\pi r}{a} = \dfrac{6\pi}{5}$ radianti, cioè $216°$.
:::
::::

:::teorema{#aree-tronco-cono titolo="Area laterale del tronco di cono"}
Per un tronco di cono con raggi delle basi $R$ e $r$, con $R > r$, e altezza $h$ l'apotema è $a = \sqrt{h^2 + (R - r)^2}$ e l'area laterale è
$$
A_l = \pi\,(R + r)\,a .
$$
L'apotema è l'ipotenusa di un triangolo rettangolo che ha per cateti l'altezza e la differenza dei raggi, come si vede nel trapezio rettangolo che genera il tronco. La formula dell'area si ottiene come differenza delle aree laterali di due coni. Per $R = 6$, $r = 3$ e $h = 4$ si trova $a = \sqrt{16 + 9} = 5$, quindi $A_l = 45\pi$ e l'area totale è $A_t = 45\pi + 36\pi + 9\pi = 90\pi$.
:::

::::teorema{#sezione-sfera titolo="Sezioni piane della sfera"}
La **superficie sferica** di centro $O$ e raggio $R$ è l'insieme dei punti dello spazio che distano $R$ da $O$; la **sfera** è formata dalla superficie sferica e dai punti interni. Un piano a distanza $d$ dal centro, con $0 \leq d < R$, taglia la sfera in un cerchio di raggio
$$
r = \sqrt{R^2 - d^2} .
$$
Se $d = R$ il piano è **tangente** alla sfera e ha in comune con essa un solo punto; se $d > R$ il piano è esterno. Per $d = 0$ la sezione è un **cerchio massimo**, di raggio $R$. Per $R = 5$ e $d = 3$ la sezione ha raggio $4$ e area $16\pi$.

::grafico{assi=0 uguale=1 linee="5,0 4.98,0.44 4.92,0.87 4.83,1.29 4.7,1.71 4.53,2.11 4.33,2.5 4.1,2.87 3.83,3.21 3.54,3.54 3.21,3.83 2.87,4.1 2.5,4.33 2.11,4.53 1.71,4.7 1.29,4.83 0.87,4.92 0.44,4.98 0,5 -0.44,4.98 -0.87,4.92 -1.29,4.83 -1.71,4.7 -2.11,4.53 -2.5,4.33 -2.87,4.1 -3.21,3.83 -3.54,3.54 -3.83,3.21 -4.1,2.87 -4.33,2.5 -4.53,2.11 -4.7,1.71 -4.83,1.29 -4.92,0.87 -4.98,0.44 -5,0 -4.98,-0.44 -4.92,-0.87 -4.83,-1.29 -4.7,-1.71 -4.53,-2.11 -4.33,-2.5 -4.1,-2.87 -3.83,-3.21 -3.54,-3.54 -3.21,-3.83 -2.87,-4.1 -2.5,-4.33 -2.11,-4.53 -1.71,-4.7 -1.29,-4.83 -0.87,-4.92 -0.44,-4.98 0,-5 0.44,-4.98 0.87,-4.92 1.29,-4.83 1.71,-4.7 2.11,-4.53 2.5,-4.33 2.87,-4.1 3.21,-3.83 3.54,-3.54 3.83,-3.21 4.1,-2.87 4.33,-2.5 4.53,-2.11 4.7,-1.71 4.83,-1.29 4.92,-0.87 4.98,-0.44 5,0;-5,0 -4.96,-0.2 -4.83,-0.39 -4.62,-0.57 -4.33,-0.75 -3.97,-0.91 -3.54,-1.06 -3.04,-1.19 -2.5,-1.3 -1.91,-1.39 -1.29,-1.45 -0.65,-1.49 0,-1.5 0.65,-1.49 1.29,-1.45 1.91,-1.39 2.5,-1.3 3.04,-1.19 3.54,-1.06 3.97,-0.91 4.33,-0.75 4.62,-0.57 4.83,-0.39 4.96,-0.2 5,0;-4,3 -3.97,2.84 -3.86,2.69 -3.7,2.54 -3.46,2.4 -3.17,2.27 -2.83,2.15 -2.44,2.05 -2,1.96 -1.53,1.89 -1.04,1.84 -0.52,1.81 0,1.8 0.52,1.81 1.04,1.84 1.53,1.89 2,1.96 2.44,2.05 2.83,2.15 3.17,2.27 3.46,2.4 3.7,2.54 3.86,2.69 3.97,2.84 4,3" segmenti="5,0,4.9,0.29;4.9,0.29,4.62,0.57;4.62,0.57,4.16,0.83;4.16,0.83,3.54,1.06;3.54,1.06,2.78,1.25;2.78,1.25,1.91,1.39;1.91,1.39,0.98,1.47;0.98,1.47,0,1.5;0,1.5,-0.98,1.47;-0.98,1.47,-1.91,1.39;-1.91,1.39,-2.78,1.25;-2.78,1.25,-3.54,1.06;-3.54,1.06,-4.16,0.83;-4.16,0.83,-4.62,0.57;-4.62,0.57,-4.9,0.29;-4.9,0.29,-5,0;4,3,3.92,3.23;3.92,3.23,3.7,3.46;3.7,3.46,3.33,3.67;3.33,3.67,2.83,3.85;2.83,3.85,2.22,4;2.22,4,1.53,4.11;1.53,4.11,0.78,4.18;0.78,4.18,0,4.2;0,4.2,-0.78,4.18;-0.78,4.18,-1.53,4.11;-1.53,4.11,-2.22,4;-2.22,4,-2.83,3.85;-2.83,3.85,-3.33,3.67;-3.33,3.67,-3.7,3.46;-3.7,3.46,-3.92,3.23;-3.92,3.23,-4,3;0,0,0,3;0,3,4,3;0,0,4,3" etichette="0.15,-0.6,O;-0.55,3.15,O′;0.25,1.4,d;1.8,3.15,r;2.3,1,R" xmin=-5.6 xmax=5.6 ymin=-5.6 ymax=5.6 legenda=0 titolo="Il piano a distanza $d$ dal centro $O$ taglia la sfera di raggio $R$ in un cerchio di centro $O'$ e raggio $r = \sqrt{R^2 - d^2}$"}

:::dimostrazione
Sia $O'$ la proiezione di $O$ sul piano, così che $OO' = d$, e sia $P$ un punto comune al piano e alla superficie sferica. La retta $OO'$ è perpendicolare al piano, quindi il triangolo $OO'P$ è rettangolo in $O'$. Per il teorema di Pitagora
$$
O'P^2 = OP^2 - OO'^2 = R^2 - d^2 .
$$
Ogni punto comune ha quindi la stessa distanza $\sqrt{R^2 - d^2}$ da $O'$, perciò la sezione è il cerchio di centro $O'$ e raggio $\sqrt{R^2 - d^2}$.
:::
::::

## Volumi e principio di Cavalieri

:::teorema{#principio-cavalieri titolo="Principio di Cavalieri"}
Siano dati due solidi e un piano $\pi$. Se ogni piano parallelo a $\pi$ taglia i due solidi in sezioni equivalenti, cioè con la stessa area, allora i due solidi sono equivalenti.

Due solidi con lo stesso volume si dicono **equivalenti**, e il principio permette di confrontare un solido con un altro di cui si conosce già il volume. Una pila di monete diritta e la stessa pila spinta di lato hanno lo stesso volume, perché ogni moneta conserva la sua area a ogni altezza. Allo stesso modo un prisma obliquo e un prisma retto con basi equivalenti sullo stesso piano e uguale altezza sono equivalenti, perché ogni sezione parallela alle basi è congruente alla base.
:::

:::teorema{#volume-prisma-cilindro titolo="Volume del prisma e del cilindro"}
Un prisma, retto oppure obliquo, e un cilindro con area di base $B$ e altezza $h$ hanno volume
$$
V = B \cdot h .
$$
Il caso di partenza è il parallelepipedo rettangolo di dimensioni $a$, $b$ e $c$, che con dimensioni intere si scompone in $abc$ cubetti di spigolo $1$ e ha volume $V = abc$. Gli altri casi seguono dal principio di Cavalieri, confrontando il solido con un parallelepipedo rettangolo di base equivalente e uguale altezza. Per il cilindro $B = \pi r^2$, quindi $V = \pi r^2 h$. Il prisma retto alto $10$ con base il triangolo rettangolo di cateti $3$ e $4$ ha volume $6 \cdot 10 = 60$; il cilindro di raggio $3$ e altezza $5$ ha volume $\pi \cdot 9 \cdot 5 = 45\pi$.
:::

:::teorema{#volume-piramide-cono titolo="Volume della piramide e del cono"}
Una piramide e un cono con area di base $B$ e altezza $h$ hanno volume
$$
V = \frac{1}{3}\, B \cdot h .
$$
Un prisma a base triangolare si scompone in tre piramidi che, a due a due, hanno basi equivalenti e altezze uguali, e che quindi sono equivalenti; una delle tre ha la stessa base e la stessa altezza del prisma, perciò il suo volume è un terzo di quello del prisma. Il principio di Cavalieri estende poi la formula a tutte le piramidi e ai coni. La piramide quadrata con lato $6$ e altezza $4$ ha volume $\dfrac{1}{3} \cdot 36 \cdot 4 = 48$; il cono di raggio $3$ e altezza $4$ ha volume $\dfrac{1}{3}\,\pi \cdot 9 \cdot 4 = 12\pi$, un terzo del volume del cilindro con la stessa base e la stessa altezza.
:::

:::teorema{#volume-tronchi titolo="Volume dei tronchi"}
Un tronco di piramide con basi di aree $B$ e $B'$ e altezza $h$ e un tronco di cono con raggi $R$ e $r$ e altezza $h$ hanno volume
$$
V = \frac{h}{3} \left( B + B' + \sqrt{B B'} \right) ,
\qquad
V = \frac{\pi h}{3} \left( R^2 + R r + r^2 \right) .
$$
Le formule si ricavano sottraendo dal volume della piramide, o del cono, completa il volume della piramide, o del cono, che si stacca con la sezione. Il tronco di piramide con basi quadrate di lati $10$ e $4$ e altezza $4$ ha volume $\dfrac{4}{3}\,(100 + 16 + 40) = 208$. Il tronco di cono con $R = 6$, $r = 3$ e $h = 4$ ha volume $\dfrac{4\pi}{3}\,(36 + 18 + 9) = 84\pi$.
:::

::::teorema{#volume-sfera titolo="Volume della sfera"}
La sfera di raggio $R$ ha volume
$$
V = \frac{4}{3}\,\pi R^3 .
$$
La sfera di raggio $3$ ha volume $\dfrac{4}{3}\,\pi \cdot 27 = 36\pi$. Il volume della sfera è due terzi del volume del cilindro circoscritto, che ha raggio $R$ e altezza $2R$, perché $\dfrac{4}{3}\,\pi R^3 = \dfrac{2}{3} \cdot 2\pi R^3$.

:::dimostrazione
L'idea è confrontare con il principio di Cavalieri la semisfera di raggio $R$ con un solido di cui si sa calcolare il volume. Questo solido è l'**anticlessidra**, cioè il cilindro di raggio $R$ e altezza $R$ da cui si toglie il cono che ha per base la base superiore del cilindro e per vertice il centro della base inferiore. La semisfera e l'anticlessidra si appoggiano sullo stesso piano, e si tagliano con un piano parallelo a distanza $d$, con $0 \leq d \leq R$.

La sezione della semisfera è un cerchio di raggio $\sqrt{R^2 - d^2}$, per il teorema sulle sezioni della sfera, e ha area $\pi\,(R^2 - d^2)$. La sezione dell'anticlessidra è una corona circolare con raggio esterno $R$; il raggio interno è $d$, perché il cono ha raggio uguale all'altezza e quindi a distanza $d$ dal vertice la sua sezione ha raggio $d$. L'area della corona è perciò $\pi R^2 - \pi d^2 = \pi\,(R^2 - d^2)$.

::grafico{assi=0 uguale=1 poligoni="-2.4,1.7 2.4,1.7 2.4,1.9 -2.4,1.9;5,1.7 6.2,1.7 6.2,1.9 5,1.9;9.8,1.7 11,1.7 11,1.9 9.8,1.9" linee="3,0 2.99,0.2 2.97,0.39 2.94,0.59 2.9,0.78 2.84,0.96 2.77,1.15 2.69,1.33 2.6,1.5 2.49,1.67 2.38,1.83 2.26,1.98 2.12,2.12 1.98,2.26 1.83,2.38 1.67,2.49 1.5,2.6 1.33,2.69 1.15,2.77 0.96,2.84 0.78,2.9 0.59,2.94 0.39,2.97 0.2,2.99 0,3 -0.2,2.99 -0.39,2.97 -0.59,2.94 -0.78,2.9 -0.96,2.84 -1.15,2.77 -1.33,2.69 -1.5,2.6 -1.67,2.49 -1.83,2.38 -1.98,2.26 -2.12,2.12 -2.26,1.98 -2.38,1.83 -2.49,1.67 -2.6,1.5 -2.69,1.33 -2.77,1.15 -2.84,0.96 -2.9,0.78 -2.94,0.59 -2.97,0.39 -2.99,0.2 -3,0;-3,0 3,0;5,0 11,0 11,3 5,3 5,0;5,3 8,0 11,3" segmenti="0,0,0,1.8;8,0,8,1.8" etichette="-0.1,-0.55,O;7.9,-0.55,O′;-1.3,3.35,semisfera;5.4,3.3,anticlessidra;0.12,0.7,d;8.12,0.7,d" xmin=-3.6 xmax=11.6 ymin=-1.15 ymax=3.95 legenda=0 titolo="Sezioni assiali della semisfera di raggio $R$ e dell'anticlessidra; a distanza $d$ dal piano di base le due sezioni, in colore, hanno la stessa area $\pi\left(R^2 - d^2\right)$"}

Le sezioni hanno la stessa area per ogni $d$, quindi per il principio di Cavalieri i due solidi sono equivalenti. Il volume della semisfera è allora
$$
\pi R^2 \cdot R - \frac{1}{3}\,\pi R^2 \cdot R = \frac{2}{3}\,\pi R^3 ,
$$
e il volume della sfera è il doppio, cioè $\dfrac{4}{3}\,\pi R^3$.
:::
::::

:::teorema{#area-sfera titolo="Area della superficie sferica"}
La superficie sferica di raggio $R$ ha area $A = 4\pi R^2$, quattro volte l'area di un cerchio massimo. La formula si giustifica dividendo la superficie in tante parti piccole e unendole con il centro. Si ottengono solidi che sono quasi piramidi di altezza $R$, la cui somma dei volumi è $\dfrac{1}{3}\,A R$; uguagliando a $\dfrac{4}{3}\,\pi R^3$ si trova $A = 4\pi R^2$. Per $R = 3$ l'area è $36\pi$.
:::

:::osservazione{#solidi-simili titolo="Aree e volumi di solidi simili"}
Se due solidi sono simili con rapporto di similitudine $k$, cioè se le lunghezze del secondo sono $k$ volte quelle del primo, allora le aree stanno nel rapporto $k^2$ e i volumi nel rapporto $k^3$. Raddoppiando il raggio di una sfera, l'area diventa $4$ volte più grande e il volume $8$ volte più grande; per $R = 3$ e $R = 6$ i volumi sono $36\pi$ e $288\pi$. Lo stesso vale per il cambio di unità di misura, perché $1\,\mathrm{m} = 100\,\mathrm{cm}$ dà $1\,\mathrm{m}^2 = 10^4\,\mathrm{cm}^2$ e $1\,\mathrm{m}^3 = 10^6\,\mathrm{cm}^3$.
:::

## Solidi inscritti e circoscritti

:::definizione{#inscritto-circoscritto titolo="Solidi inscritti e circoscritti"}
Un poliedro è **inscritto** in una sfera se tutti i suoi vertici stanno sulla superficie sferica; la sfera si dice allora **circoscritta** al poliedro. Una sfera è **inscritta** in un poliedro se è tangente a tutte le facce. Lo stesso linguaggio si usa per i solidi di rotazione. Un cono è inscritto in una sfera se il vertice e la circonferenza di base stanno sulla superficie sferica, e un cilindro è inscritto in un cono se una base sta sulla base del cono e la circonferenza dell'altra base sta sulla superficie laterale.

I problemi su questi solidi si risolvono quasi sempre in una **sezione assiale**, cioè con un piano che contiene l'asse di simmetria; in questa sezione il problema diventa di geometria piana. Per un cubo di spigolo $2$ la sfera inscritta ha raggio $1$, metà dello spigolo, e la sfera circoscritta ha raggio $\sqrt{3}$, metà della diagonale $2\sqrt{3}$.
:::

::::teorema{#raggio-sfera-inscritta titolo="Raggio della sfera inscritta in un poliedro"}
Se un poliedro di volume $V$ e area totale $A_t$ ammette una sfera inscritta, il raggio della sfera è
$$
r = \frac{3V}{A_t} .
$$
Per la piramide quadrata con lato $6$ e altezza $4$ il volume è $48$ e l'area totale è $96$, quindi $r = \dfrac{3 \cdot 48}{96} = \dfrac{3}{2}$. Il risultato si controlla nella sezione con il piano che passa per $V$ ed è perpendicolare a due lati opposti della base. Questa sezione è un triangolo isoscele con base $6$ e lati $5$, il cui raggio della circonferenza inscritta è l'area divisa per il semiperimetro, cioè $\dfrac{12}{8} = \dfrac{3}{2}$.

::grafico{assi=0 uguale=1 curve="1.5*cos(t),1.5+1.5*sin(t),0,6.29;0+(1.2)*t,1.5+(0.9)*t,0,1" linee="-3,0 3,0 0,4 -3,0" segmenti="0,0,0,4" etichette="0.12,-0.5,H;0.12,4.1,V;3.1,-0.4,M;-0.45,1.5,O;0.45,2.15,r" xmin=-3.6 xmax=3.7 ymin=-1.1 ymax=4.7 legenda=0 titolo="Sezione della piramide di base quadrata con lato $6$ e altezza $4$ con il piano per $V$ perpendicolare a due lati opposti della base; il cerchio di centro $O$ e raggio $r = \dfrac{3}{2}$ è la sezione della sfera inscritta"}

:::dimostrazione
L'idea è scomporre il poliedro in piramidi con vertice nel centro $O$ della sfera inscritta. Si uniscono $O$ con i vertici del poliedro; si ottiene una piramide per ogni faccia, con base quella faccia e vertice $O$. La sfera è tangente a ogni faccia, quindi la distanza di $O$ dal piano di ogni faccia è il raggio $r$, e tutte le piramidi hanno altezza $r$. Se $B_1, B_2, \dots, B_n$ sono le aree delle facce, la somma dei volumi è
$$
V = \frac{1}{3}\,B_1 r + \frac{1}{3}\,B_2 r + \dots + \frac{1}{3}\,B_n r = \frac{1}{3}\,A_t \, r .
$$
Ricavando $r$ si ottiene $r = \dfrac{3V}{A_t}$.
:::
::::

:::esempio{titolo="Cono inscritto in una sfera"}
Un cono di altezza $h$ è inscritto in una sfera di raggio $R$, con $R < h < 2R$, così che il centro della sfera sta dentro il cono. Nella sezione assiale il centro $O$ della sfera sta sull'altezza $VK$ del cono, a distanza $h - R$ dal centro $K$ della base, e un punto $P$ della circonferenza di base dista $R$ da $O$. Il triangolo $OKP$ è rettangolo in $K$, quindi il raggio di base $r$ del cono soddisfa
$$
r^2 = R^2 - (h - R)^2 = 2Rh - h^2 .
$$
Per $R = 5$ e $h = 8$ si trova $r^2 = 80 - 64 = 16$, cioè $r = 4$, e il volume del cono è $\dfrac{1}{3}\,\pi \cdot 16 \cdot 8 = \dfrac{128}{3}\,\pi$.
:::
