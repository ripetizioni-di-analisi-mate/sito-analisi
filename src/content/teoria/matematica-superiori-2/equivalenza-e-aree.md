---
titolo: "Equivalenza delle figure piane e aree"
sommario: "Figure equivalenti, scomposizioni, aree di triangoli e quadrilateri, poligoni regolari, problemi inversi e figure composte."
---

## Misurare una superficie

:::definizione{#equivalenza titolo="Equivalenza e congruenza"}
L'**area** di una figura piana è la misura della sua superficie, cioè il numero di quadrati unitari (quadrati di lato $1$) che servono a ricoprirla. Il **perimetro** è la lunghezza del contorno, cioè la somma delle lunghezze dei lati.

Due figure sono **equivalenti** quando hanno la stessa area. Due figure sono **congruenti** quando hanno la stessa forma e le stesse dimensioni, cioè quando si possono sovrapporre esattamente spostandone una. Due figure congruenti ricoprono la stessa superficie, quindi sono anche equivalenti. Due figure equivalenti possono invece avere perimetri diversi.

Un rettangolo di lati $2$ e $6$ ha area $2\cdot6=12$ e perimetro $2+6+2+6=16$. Un rettangolo di lati $3$ e $4$ ha la stessa area $3\cdot4=12$, ma perimetro $3+4+3+4=14$. Perciò l'uguaglianza delle aree non determina quella dei contorni.

L'area si esprime in **unità quadrate**. Un centimetro quadrato ($\mathrm{cm}^2$) è l'area di un quadrato di lato $1\,\mathrm{cm}$, un metro quadrato ($\mathrm m^2$) è l'area di un quadrato di lato $1\,\mathrm m$. Poiché $1\,\mathrm m=100\,\mathrm{cm}$, il quadrato di lato $1\,\mathrm m$ contiene $100$ file da $100$ quadrati di lato $1\,\mathrm{cm}$, quindi
$$
1\,\mathrm m^2=100\cdot100\,\mathrm{cm}^2=10000\,\mathrm{cm}^2.
$$
Per convertire un'area si moltiplica perciò per il quadrato del fattore che converte le lunghezze. Allo stesso modo, poiché $1\,\mathrm{cm}=10\,\mathrm{mm}$ (millimetri), risulta $1\,\mathrm{cm}^2=10\cdot10\,\mathrm{mm}^2=100\,\mathrm{mm}^2$.
:::

:::esempio{titolo="Stessa area, contorni diversi"}
Il disegno mostra due rettangoli formati ciascuno da dodici quadrati unitari. Il primo ha lati $6$ e $2$, il secondo ha lati $4$ e $3$. Sono gli stessi dodici quadrati disposti in due modi diversi, quindi le due aree valgono entrambe $12$. Contando i lati dei quadratini che stanno sul contorno si trova invece $16$ per il primo rettangolo e $14$ per il secondo. Due rettangoli congruenti avrebbero anche i lati uguali. Questi due hanno lati diversi, perciò sono equivalenti senza essere congruenti.

::grafico{assi=0 uguale=1 xmin=-0.7 xmax=12.8 ymin=-0.7 ymax=3.8 linee="0,0 6,0 6,2 0,2 0,0;8,0 12,0 12,3 8,3 8,0;0,1 6,1;1,0 1,2;2,0 2,2;3,0 3,2;4,0 4,2;5,0 5,2;8,1 12,1;8,2 12,2;9,0 9,3;10,0 10,3;11,0 11,3" etichette="3,-0.34,6;-0.25,1.1,2;10,-0.34,4;7.73,1.59,3" titolo="Dodici quadrati unitari disposti in due rettangoli"}
:::

:::attenzione{titolo="Stesso perimetro, aree diverse"}
Anche due figure con lo stesso perimetro possono avere aree diverse. I rettangoli $4\times8$ e $5\times7$ (la scrittura $4\times8$ indica un rettangolo di lati $4$ e $8$) hanno entrambi perimetro $2(4+8)=2(5+7)=24$, ma le loro aree sono $32$ e $35$.

Fra i rettangoli in cui la somma $s$ di due lati consecutivi è la stessa (questa somma è il **semiperimetro**, cioè metà del perimetro), il quadrato di lato $\dfrac s2$ ha l'area maggiore. Per un rettangolo di lati $a$ e $b$ con $a+b=s$ la differenza fra le due aree è
$$
\left(\frac s2\right)^2-ab=\frac{(a+b)^2}{4}-ab=\frac{a^2+2ab+b^2-4ab}{4}=\frac{(a-b)^2}{4}.
$$
Il quadrato di un numero non è mai negativo, quindi la differenza è maggiore o uguale a zero. Vale zero solo quando $a=b$, cioè quando il rettangolo è un quadrato.
:::

## Scomporre e ricomporre

:::teorema{#scomposizioni titolo="Additività dell’area"}
Due parti di una figura hanno **interni disgiunti** quando non si sovrappongono, cioè quando hanno in comune al più dei tratti di bordo. Se una figura è suddivisa in parti con interni disgiunti, la sua area è la somma delle aree delle parti. Se da una figura si elimina una figura interna, l'area della regione rimasta è l'area iniziale meno l'area eliminata.

Un rettangolo $8\times5$ con un foro rettangolare $3\times2$ ha area $8\cdot5-3\cdot2=40-6=34$. Il perimetro della regione richiede un altro conto, perché il bordo comprende anche il contorno del foro.

Spostare pezzi congruenti senza sovrapporli conserva l'area totale, perché ogni pezzo mantiene la propria area. Su questa proprietà si basa il passaggio da un parallelogramma a un rettangolo, e da essa si ricavano molte formule delle aree delle figure piane.
:::

:::esempio{titolo="Una forma a L, due scomposizioni"}
La figura a L del disegno è contenuta nel rettangolo intero $10\times7$. Rispetto a quel rettangolo manca, in alto a destra, il rettangolo di lati $4$ e $3$, quindi l'area è $10\cdot7-4\cdot3=70-12=58$.

La stessa area si trova anche senza sottrarre. Il taglio verticale segnato nel disegno divide la figura in un rettangolo $6\times7$ e in un rettangolo $4\times4$. I due pezzi hanno interni disgiunti, quindi l'area è $6\cdot7+4\cdot4=42+16=58$. Il taglio si trova all'interno della regione, perciò non fa parte del contorno esterno.

::grafico{assi=0 uguale=1 xmin=-0.8 xmax=10.9 ymin=-0.8 ymax=7.9 poligoni="0,0 10,0 10,4 6,4 6,7 0,7" linee="0,0 10,0 10,4 6,4 6,7 0,7 0,0" segmenti="6,0,6,4;6,7,10,7;10,4,10,7" etichette="5,-0.35,10;-0.28,3.5,7;8,7.35,4;10.26,5.5,3" titolo="Si possono sommare i due pezzi o sottrarre il rettangolo mancante"}
:::

:::osservazione{titolo="Il foro e il ritaglio tolgono la stessa area"}
Da un rettangolo $8\times5$ si toglie un rettangolo $3\times2$. L'area rimasta è $40-6=34$ sia quando il pezzo tolto è un foro tutto interno sia quando è un ritaglio in un angolo. Il contorno esterno del rettangolo iniziale misura $2(8+5)=26$, e i due casi danno perimetri diversi.

- Con il foro interno, al contorno esterno si aggiunge il bordo del foro, lungo $2(3+2)=10$. Il totale è $26+10=36$.
- Con il ritaglio nell'angolo, dal contorno esterno spariscono due tratti lunghi $3$ e $2$, e compaiono i due lati interni del ritaglio, lunghi anch'essi $3$ e $2$. Il nuovo contorno misura quindi ancora $26$.
:::

:::esempio{titolo="Cosa fare quando le parti si sovrappongono"}
Due rettangoli, uno di lati $7$ e $3$ e uno di lati $4$ e $5$, si sovrappongono. La loro parte comune, detta **intersezione**, è il rettangolo $2\times3$ evidenziato nel disegno, di area $6$. La somma delle aree $7\cdot3+4\cdot5=21+20$ conta due volte i sei quadrati dell'intersezione. Sottraendone una copia si ottiene l'area coperta da almeno uno dei due rettangoli:
$$
21+20-6=35.
$$
Per contare solo la parte coperta da uno solo dei due rettangoli si sottrae invece l'intersezione due volte, e si ottiene $41-2\cdot6=29$.

::grafico{assi=0 uguale=1 xmin=-0.7 xmax=9.8 ymin=-0.7 ymax=5.8 linee="0,0 7,0 7,3 0,3 0,0;5,0 9,0 9,5 5,5 5,0" poligoni="5,0 7,0 7,3 5,3" etichette="3.5,-0.33,7;-0.26,1.5,3;7,5.33,4;9.28,2.5,5;6,1.5,6" titolo="La zona evidenziata appartiene a entrambi i rettangoli"}
:::

:::osservazione{titolo="Un bordo comune scompare dal contorno"}
Due rettangoli sono **accostati** lungo un segmento di lunghezza $s$ quando hanno in comune quel tratto di bordo e nessun punto interno. L'area della figura unita è la somma delle due aree. Il segmento di giunzione era contato sia nel perimetro $P_1$ del primo rettangolo sia nel perimetro $P_2$ del secondo. Nella figura unita, estremi a parte, quel segmento sta all'interno, quindi non appartiene più al contorno. Il nuovo perimetro è perciò
$$
P=P_1+P_2-2s.
$$
Per esempio, un rettangolo $6\times2$ e un rettangolo $4\times3$, accostati lungo un tratto di lunghezza $2$, hanno perimetri $16$ e $14$. La figura unita ha perimetro $16+14-2\cdot2=26$ e area $12+12=24$.
:::

## Rettangoli e parallelogrammi

:::teorema{#parallelogramma titolo="Base per altezza"}
Un **parallelogramma** è un quadrilatero con i lati opposti paralleli. Si sceglie un lato come **base**. L'**altezza** relativa a quella base è la distanza fra la retta della base e la retta del lato opposto, misurata su una perpendicolare, cioè su una retta che forma angoli retti con la base.

Un rettangolo di base $b$ e altezza $h$ ha area $A=bh$. Per esempio, un rettangolo di base $4$ e altezza $2$ è formato da $2$ file di $4$ quadrati unitari, quindi ha area $4\cdot2=8$. Un parallelogramma con la stessa base e la stessa altezza è equivalente al rettangolo, quindi la sua area si calcola con la stessa formula $A=bh$.

Il motivo è che nel parallelogramma si può tagliare un triangolo da un lato e ricollocarlo sull'altro, formando un rettangolo. Nel disegno l'altezza è il segmento verticale che scende da $D$ sulla base $AB$.

Un parallelogramma con base $7$, lato obliquo $5$ e altezza $4$ ha area $7\cdot4=28$. Il **lato obliquo** è il lato inclinato, che non è perpendicolare alla base. Per questo il prodotto $7\cdot5=35$ non è l'area.

::grafico{assi=0 uguale=1 poligoni="0,0 6,0 8,3 2,3" linee="2,0 2,3" punti="0,0,pieno,A;6,0,pieno,B;8,3,pieno,C;2,3,pieno,D" xmin=-1 xmax=9 ymin=-1 ymax=4 titolo="L’altezza è perpendicolare alla base del parallelogramma"}
:::

:::dimostrazione{titolo="Traslare il triangolo del parallelogramma"}
Il parallelogramma del disegno ha base $6$ e altezza $3$. Il taglio verticale da $D$ alla base stacca a sinistra un triangolo rettangolo di base $2$ e altezza $3$. Si sposta questo triangolo verso destra, senza ruotarlo, di una lunghezza pari alla base. I suoi lati combaciano allora con la parte vuota a destra del lato $BC$. La figura ricomposta è un rettangolo con base $6$ e altezza $3$, come il parallelogramma, e il disegno a destra mostra il pezzo trasferito. Il triangolo spostato conserva la sua area, quindi le due figure sono equivalenti.

::grafico{assi=0 uguale=1 xmin=-0.7 xmax=18 ymin=-0.65 ymax=3.7 linee="0,0 6,0 8,3 2,3 0,0;2,0 2,3;11,0 17,0 17,3 11,3 11,0;15,0 17,3" poligoni="0,0 2,0 2,3;15,0 17,0 17,3" etichette="4,-0.34,6;14,-0.34,6;17.38,1.48,3" titolo="Il triangolo a sinistra riempie lo spazio a destra senza sovrapporsi"}

La **proiezione** di $D$ sulla base è il punto in cui la perpendicolare tracciata da $D$ incontra la retta della base. Quando la proiezione di $D$ cade oltre la base, cioè fuori dal segmento $AB$, lo stesso taglio singolo può non produrre il rettangolo. Si racchiude allora la figura in un rettangolo di base $b+u$, dove $u$ è lo spostamento orizzontale del lato superiore rispetto alla base. Dentro il rettangolo e fuori dal parallelogramma restano due triangoli rettangoli congruenti, con **cateti** (i due lati che formano l'angolo retto) $u$ e $h$ e area $\dfrac{uh}{2}$ ciascuno. Togliendoli resta
$$
(b+u)h-2\cdot\frac{uh}{2}=bh+uh-uh=bh.
$$
:::

## Triangoli

:::teorema{#triangolo titolo="Metà del parallelogramma"}
In un triangolo si sceglie un lato come base. L'**altezza relativa** a quella base è il segmento perpendicolare che va dal vertice opposto alla retta della base, e il suo **piede** è il punto in cui incontra quella retta. Un triangolo di base $b$ e altezza relativa $h$ ha area $A=\dfrac{bh}{2}$. Il motivo è che due copie congruenti del triangolo formano un parallelogramma con la stessa base e la stessa altezza, di area $bh$, e ogni copia ne occupa metà.

Triangoli con la stessa base e altezze congruenti sono equivalenti. Questo accade anche quando i vertici opposti alla base occupano posizioni diverse su una retta parallela alla base, perché tutti i punti di quella retta hanno la stessa distanza dalla base. Per base $10$ e altezza $3$ l'area è sempre $\dfrac{10\cdot3}{2}=15$.

Un triangolo è **ottusangolo** quando ha un angolo maggiore di $90^\circ$. In un triangolo ottusangolo il piede di un'altezza può cadere sul **prolungamento** di un lato, cioè sulla retta del lato ma fuori dal segmento. La formula usa ancora come altezza la distanza perpendicolare del vertice dalla retta della base.

Nel disegno la base $AB$ misura $6$ e l'altezza $CH$ misura $4$, quindi l'area è $\dfrac{6\cdot4}{2}=12$.

::grafico{assi=0 uguale=1 poligoni="0,0 6,0 2,4" linee="2,0 2,4" punti="0,0,pieno,A;6,0,pieno,B;2,4,pieno,C;2,0,pieno,H" xmin=-1 xmax=7 ymin=-1 ymax=5 titolo="Base $6$ e altezza $4$ danno area $12$"}
:::

:::esempio{titolo="Altezza esterna in un triangolo ottusangolo"}

Il triangolo $ABC$ ha base $AB=6\,\mathrm{cm}$ e un angolo ottuso in $A$. Il piede $H$ dell’altezza da $C$ è sul prolungamento di $AB$ oltre $A$, con $HA=2\,\mathrm{cm}$ e $CH=3\,\mathrm{cm}$. Il triangolo $HBC$ ha base $HB=2+6=8\,\mathrm{cm}$, e quello più piccolo $HAC$ ha base $2\,\mathrm{cm}$. Entrambi hanno altezza $3\,\mathrm{cm}$. Il triangolo $ABC$ si ottiene togliendo $HAC$ da $HBC$, quindi la sua area è la differenza delle loro aree.

$$
\begin{aligned}
\mathcal A_{ABC}&=\frac{8\cdot3}{2}-\frac{2\cdot3}{2} \\[5pt]
&=12-3 \\[5pt]
&=\frac{6\cdot3}{2}=9\,\mathrm{cm}^2
\end{aligned}
$$

::grafico{assi=0 uguale=1 poligoni="0,0 6,0 -2,3" linee="-2,3 -2,0 0,0;-2,0.3 -1.7,0.3 -1.7,0" punti="0,0,pieno,A;6,0,pieno,B;-2,3,pieno,C;-2,0" etichette="-1,-0.27,2;3,-0.27,6;-2.35,1.35,3;-2.15,-0.37,H" xmin=-3 xmax=7 ymin=-1 ymax=4 titolo="L’altezza $CH$ cade sul prolungamento della base"}
:::

:::dimostrazione{titolo="Raddoppiare il triangolo con una rotazione"}
Si prende una seconda copia del triangolo $ABC$ e la si ruota di $180^\circ$, cioè di mezzo giro, attorno al punto medio di $BC$. Il punto medio sta a metà fra $B$ e $C$, quindi la rotazione porta $B$ in $C$ e $C$ in $B$. Il vertice $A$ va in un punto $D$ dall'altra parte di $BC$. Una rotazione di mezzo giro trasforma ogni retta in una retta parallela. Il segmento $AB$ diventa il segmento $DC$, quindi $AB$ e $CD$ sono paralleli. Allo stesso modo $AC$ diventa $DB$, quindi $AC$ e $BD$ sono paralleli. L'unione delle due copie è perciò un parallelogramma, con base $AB$ e altezza uguale a quella del triangolo. Le due copie sono congruenti, quindi ciascuna ha metà dell'area del parallelogramma, cioè $\dfrac{bh}{2}$.
:::

:::osservazione
Il **punto medio** $M$ di $AB$ è il punto che divide $AB$ in due parti uguali. I triangoli $AMC$ e $MBC$ hanno basi uguali, $AM=MB$, e condividono l'altezza, cioè la distanza di $C$ dalla retta $AB$. Hanno perciò la stessa area anche quando i due lati $AC$ e $BC$ sono diversi.

Più in generale, se un punto $M$ divide la base in due parti, le aree dei due triangoli stanno nello stesso rapporto delle due parti, perché l'altezza è la stessa per entrambi. Per esempio, se $AM=1$, $MB=2$ e l'area di $ABC$ è $30$, il triangolo $AMC$ ha area $30\cdot\dfrac{1}{3}=10$ e il triangolo $MBC$ ha area $30\cdot\dfrac{2}{3}=20$.
:::

:::esempio{titolo="Ricavare un'altezza esterna da un lato obliquo"}
Il piede $H$ dell'altezza da $C$ cade sul prolungamento di $AB$ oltre $B$. Il triangolo $BHC$ è allora rettangolo in $H$, con ipotenusa $BC$. Siano $AB=10$, $BH=4$ e $BC=5$. Il **teorema di Pitagora** afferma che in un triangolo rettangolo il quadrato dell'ipotenusa è uguale alla somma dei quadrati dei cateti, quindi
$$
CH=\sqrt{BC^2-BH^2}=\sqrt{5^2-4^2}=\sqrt{25-16}=\sqrt9=3.
$$
L'area di $ABC$ è perciò $\dfrac{10\cdot3}{2}=15$. Il segmento $BH$ sta sulla retta della base e serve soltanto a ricavare la perpendicolare $CH$. Per differenza si ottiene lo stesso valore. Il triangolo $AHC$ ha base $10+4=14$ e area $\dfrac{14\cdot3}{2}=21$, il triangolo $BHC$ ha area $\dfrac{4\cdot3}{2}=6$, e $21-6=15$.
:::

:::esempio{titolo="Cambiare la base richiede cambiare l'altezza"}
Se $AB=12$ e l'altezza da $C$ vale $5$, il triangolo ha area $\dfrac{12\cdot5}{2}=30$. Come base si può usare anche il lato $AC=10$. L'altezza relativa ad $AC$ è la distanza di $B$ dalla retta $AC$. L'area resta $30$, quindi da $\dfrac{10\cdot h}{2}=30$ si ricava
$$
h=\frac{2\cdot30}{10}=6.
$$
Il prodotto base per altezza vale $60$ in entrambi i casi, perciò se la base si accorcia l'altezza corrispondente aumenta. Ogni altezza è associata alla retta del proprio lato, perché è perpendicolare a quella retta e parte dal vertice opposto.
:::

## Trapezi

:::teorema{#trapezio titolo="Somma delle basi"}
Un **trapezio** è un quadrilatero con due lati paralleli, detti **basi**. La base maggiore si indica con $B$ e la base minore con $b$. L'altezza $h$ è la distanza fra le rette delle due basi. L'area del trapezio è
$$
A=\frac{(B+b)h}{2}.
$$
Una **diagonale** è un segmento che unisce due vertici non consecutivi. Tracciando una diagonale si ottengono due triangoli con interni disgiunti, uno di base $B$ e uno di base $b$. Entrambi hanno altezza $h$, perché il vertice opposto a ciascuna base sta sulla retta dell'altra base. Sommando le loro aree si dimostra la formula:
$$
\frac{Bh}{2}+\frac{bh}{2}=\frac{(B+b)h}{2}.
$$
La formula equivale a moltiplicare la lunghezza media delle basi, $\dfrac{B+b}{2}$, per l'altezza.

Per basi $9$ e $5$ e altezza $4$ l'area è $\dfrac{(9+5)\cdot4}{2}=\dfrac{56}{2}=28$, come nel disegno. Moltiplicando la formula per $2$ e dividendo per $B+b$ si ottiene la **formula inversa** dell'altezza
$$
h=\frac{2A}{B+b}.
$$
Le basi sono lunghezze positive, quindi $B+b$ è diverso da zero e la divisione è ammessa.

::grafico{assi=0 uguale=1 poligoni="0,0 9,0 7,4 2,4" linee="2,0 2,4" xmin=-1 xmax=10 ymin=-1 ymax=5 titolo="Un trapezio di basi $9$ e $5$ e altezza $4$ ha area $28$"}
:::

:::esempio{titolo="Ricavare una base e poi controllarne il ruolo"}
Un trapezio ha area $52\,\mathrm{cm}^2$, altezza $4\,\mathrm{cm}$ e base minore $10\,\mathrm{cm}$. Moltiplicando la formula dell'area per $2$ e dividendo per $h$ si ricava la somma delle basi:
$$
B+b=\frac{2A}{h}=\frac{2\cdot52}{4}=26\,\mathrm{cm}.
$$
L'altra base misura quindi $26-10=16\,\mathrm{cm}$. Sostituendo, $\dfrac{(16+10)\cdot4}{2}=52$ è l'area assegnata, e $16>10$ conferma che $10\,\mathrm{cm}$ è la base minore. Se il calcolo desse una misura positiva più piccola di $10$, i dati sarebbero **incompatibili**, cioè non potrebbero essere veri tutti insieme. In quel caso la base nota sarebbe la maggiore, in contrasto con il dato «base minore», anche se il prodotto con l'altezza restituisse l'area.
:::

## Rombi e diagonali

:::teorema{#rombo titolo="Diagonali perpendicolari"}
Un **rombo** è un quadrilatero con i quattro lati uguali. Il rombo ha diagonali perpendicolari che si dividono a metà, cioè si incontrano ad angolo retto nel loro punto medio comune. Se le diagonali misurano $D$ e $d$, le loro metà, dette **semidiagonali**, misurano $\dfrac D2$ e $\dfrac d2$. Le diagonali dividono il rombo in quattro triangoli rettangoli con cateti $\dfrac D2$ e $\dfrac d2$, quindi la somma delle aree è
$$
A=4\cdot\frac12\cdot\frac D2\cdot\frac d2=\frac{4Dd}{8}=\frac{Dd}{2}.
$$
L'area del rombo è perciò il **semiprodotto** delle diagonali, cioè metà del loro prodotto. Per diagonali $12$ e $16$, come nel disegno, le semidiagonali misurano $6$ e $8$ e l'area è $\dfrac{12\cdot16}{2}=96$. Il rombo è anche un parallelogramma, quindi resta valida la formula $A=bh$ se sono noti un lato e la relativa altezza.

La formula con il semiprodotto delle diagonali vale per i quadrilateri con diagonali perpendicolari e non si applica automaticamente a ogni quadrilatero. Il quadrato è un rombo con le diagonali uguali, quindi un quadrato di diagonale $d$ ha area $\dfrac{d\cdot d}{2}=\dfrac{d^2}{2}$. Per $d=8$ l'area è $\dfrac{64}{2}=32$.

::grafico{assi=0 uguale=1 poligoni="-8,0 0,6 8,0 0,-6" linee="-8,0 8,0;0,-6 0,6" xmin=-9 xmax=9 ymin=-7 ymax=7 titolo="Le diagonali $16$ e $12$ suddividono il rombo in quattro triangoli rettangoli"}
:::

:::dimostrazione{titolo="Perché basta la perpendicolarità"}
Un quadrilatero è **convesso** quando ogni segmento che unisce due suoi punti resta dentro la figura. In un quadrilatero convesso le due diagonali si incontrano in un punto interno. Sia $ABCD$ un quadrilatero convesso con diagonali perpendicolari $AC$ e $BD$, che si incontrano nel punto $O$. La diagonale $AC$ è la base comune dei triangoli $ABC$ e $ACD$. La diagonale $BD$ è perpendicolare ad $AC$, quindi le altezze dei due triangoli relative ad $AC$ sono i segmenti $BO$ e $DO$, con il piede nello stesso punto $O$. Sommando le due aree si ottiene
$$
\frac{AC\cdot BO}{2}+\frac{AC\cdot DO}{2}=\frac{AC\,(BO+DO)}{2}=\frac{AC\cdot BD}{2},
$$
perché $BO+DO=BD$. Il ragionamento usa solo la perpendicolarità, quindi non occorre che $O$ dimezzi le diagonali. Nel disegno $AC=6$ e $BD=4$, e l'area è $\dfrac{6\cdot4}{2}=12$ anche se $O$ non è il punto medio di nessuna delle due diagonali.

::grafico{assi=0 uguale=1 xmin=-4.8 xmax=2.8 ymin=-1.7 ymax=3.8 poligoni="-4,0 0,3 2,0 0,-1" linee="-4,0 0,3 2,0 0,-1 -4,0;0,0.22 0.22,0.22 0.22,0" segmenti="-4,0,2,0;0,-1,0,3" etichette="-4.28,0.28,A;0,3.27,B;2.29,0.27,C;0,-1.3,D;0.34,-0.34,O" titolo="Le diagonali danno l'area anche se O non è un punto medio"}
:::

:::attenzione{titolo="Due diagonali congruenti possono essere oblique"}
Un rettangolo $4\times2$ ha due diagonali congruenti, entrambe lunghe $\sqrt{4^2+2^2}=\sqrt{20}$ per il teorema di Pitagora. La metà del loro prodotto è $\dfrac{\sqrt{20}\cdot\sqrt{20}}{2}=\dfrac{20}{2}=10$, mentre l'area vale $4\cdot2=8$. Le diagonali di questo rettangolo non sono perpendicolari, quindi la formula del semiprodotto non si applica. La congruenza delle diagonali da sola non fornisce le altezze usate nella dimostrazione precedente.
:::

## Poligoni regolari

:::teorema{#regolari titolo="Perimetro e apotema"}
Un **poligono regolare** ha tutti i lati uguali e tutti gli angoli uguali, come il triangolo equilatero, il quadrato e l'esagono regolare. Il suo **centro** è il punto che ha la stessa distanza da tutti i vertici e da tutti i lati. L'**apotema** $a$ è la distanza del centro da un lato, cioè la lunghezza del segmento perpendicolare che va dal centro al punto medio del lato.

Congiungendo il centro ai vertici, il poligono si divide in triangoli che hanno per basi i lati e tutti per altezza l'apotema $a$. Sommando le aree e indicando con $P$ il perimetro,
$$
A=\frac{Pa}{2}.
$$
Un esagono regolare di lato $6$ ha perimetro $6\cdot6=36$ e apotema $3\sqrt3$, cioè l’altezza di un triangolo equilatero di lato $6$. Per il teorema di Pitagora quell'altezza vale $\sqrt{6^2-3^2}=\sqrt{27}=3\sqrt3$. La sua area è $\dfrac{36\cdot3\sqrt3}{2}=54\sqrt3$. Nel quadrato di lato $l$ l'apotema è $\dfrac l2$ e il perimetro è $4l$, quindi la formula restituisce $\dfrac{4l}{2}\cdot\dfrac l2=l^2$.

Un poligono è **circoscritto** a una circonferenza quando tutti i suoi lati sono **tangenti** alla circonferenza, cioè la toccano in un solo punto. La circonferenza si dice allora **inscritta** nel poligono. La stessa espressione $A=\dfrac{Pa}{2}$ vale per un poligono convesso circoscritto a una circonferenza, con $a$ uguale al raggio, perché la distanza del centro da tutti i lati è il raggio della circonferenza inscritta.
:::

:::esempio{titolo="Calcolo dell’apotema da una costruzione"}

Congiungendo il centro $O$ ai vertici di un esagono regolare di lato $4$ si ottengono sei triangoli. Ciascuno ha due lati uguali, che vanno dal centro a due vertici, e l'angolo fra essi misura $\dfrac{360^\circ}{6}=60^\circ$. Gli altri due angoli sono uguali, perché stanno di fronte ai due lati uguali, e insieme misurano $180^\circ-60^\circ=120^\circ$. Ciascuno misura perciò $60^\circ$, quindi i sei triangoli sono equilateri. L’apotema è l’altezza di uno di questi triangoli. In quello di vertici $O$, $A$, $B$, il piede $H$ dell’altezza divide $AB$ a metà. Nel triangolo rettangolo $OHA$ il cateto $AH$ vale $2$ e l’ipotenusa $OA$ vale $4$.

$$
\begin{aligned}
a&=\sqrt{4^2-2^2}=\sqrt{12}=2\sqrt3 \\[5pt]
\mathcal A&=\frac{(6\cdot4)\,2\sqrt3}{2}=\frac{48\sqrt3}{2}=24\sqrt3
\end{aligned}
$$

::grafico{assi=0 uguale=1 poligoni="4,0 2,3.464102 -2,3.464102 -4,0 -2,-3.464102 2,-3.464102" linee="-4,0 4,0;2,3.464102 -2,-3.464102;-2,3.464102 2,-3.464102;0,0 3,1.732051" punti="0,0;4,0,pieno,A;2,3.464102,pieno,B;3,1.732051,pieno,H" etichette="-0.55,0.3,O" xmin=-5 xmax=5 ymin=-4.3 ymax=4.3 titolo="L’apotema $OH$ è l’altezza del triangolo equilatero $OAB$"}
:::

:::dimostrazione{titolo="Quando una sola altezza dà l'intera area"}
Le basi dei triangoli con vertice nel centro sono i lati del poligono, di lunghezze $l_1,l_2,\dots,l_n$, dove $n$ è il numero dei lati. Se l'altezza è la stessa $a$ in ciascun triangolo, la somma delle aree è
$$
\frac{l_1a}{2}+\frac{l_2a}{2}+\dots+\frac{l_na}{2}=\frac{a\,(l_1+l_2+\dots+l_n)}{2}=\frac{aP}{2},
$$
perché la somma dei lati è il perimetro $P$. In un poligono regolare tutti i lati hanno lo stesso apotema, quindi la regolarità è sufficiente. Anche la tangenza a una stessa circonferenza fornisce un'altezza comune, uguale al raggio, pur con lati diversi. In un generico poligono convesso, invece, le distanze di un punto interno dai vari lati possono differire. In quel caso ogni triangolo ha la sua altezza, e le aree dei triangoli si calcolano separatamente e poi si sommano.
:::

## Problemi inversi e figure composte

:::osservazione{#problemi titolo="Incognite e unità"}
In un **problema inverso** è data l'area e si cerca una delle misure da cui essa si calcola. La formula dell'area si risolve allora rispetto alla misura mancante. Da $A=\dfrac{bh}{2}$, moltiplicando entrambi i **membri** (le espressioni a sinistra e a destra dell'uguale) per $2$, si ha $2A=bh$. Dividendo per $b$ si ottiene $h=\dfrac{2A}{b}$. Se $A=42\,\mathrm{cm}^2$ e $b=12\,\mathrm{cm}$, si ottiene $h=\dfrac{2\cdot42}{12}=\dfrac{84}{12}=7\,\mathrm{cm}$.

Quando due lunghezze dipendono dalla stessa incognita, l'area può condurre a un'**equazione di secondo grado**, cioè a un'equazione in cui l'incognita compare al quadrato. Per un rettangolo di lati $x$ e $x+3$ e area $40$ si risolve $x(x+3)=40$. La soluzione positiva è $5$.

Una **figura composta** è formata da più figure semplici, come rettangoli e triangoli. In una figura composta si indicano prima le parti da sommare o sottrarre. Le misure lineari si portano alla stessa unità prima di calcolare le aree.
:::

:::esempio{titolo="Dalla soluzione algebrica alla misura"}
Per il rettangolo di area $40$ si sviluppa il prodotto e si porta tutto al primo membro:
$$
x(x+3)=40\quad\Longrightarrow\quad x^2+3x-40=0.
$$
I due numeri con prodotto $-40$ e somma $3$ sono $8$ e $-5$, quindi l'equazione diventa $(x-5)(x+8)=0$. Un prodotto vale zero quando uno dei fattori vale zero, perciò le soluzioni algebriche sono $5$ e $-8$. Una lunghezza è positiva, quindi solo la prima rappresenta una lunghezza e i lati sono $5$ e $5+3=8$. Il loro prodotto $5\cdot8=40$ verifica l'area e la loro differenza $8-5=3$ verifica il dato iniziale. La stessa impostazione permette di scartare un valore che renda nulla o negativa una delle dimensioni.
:::

:::esempio{titolo="Portare le lunghezze alla stessa unità"}
Una lastra rettangolare misura $120\,\mathrm{cm}$ per $0{,}8\,\mathrm m$. Le due lunghezze sono espresse in unità diverse, quindi prima si convertono nella stessa unità.

- In metri, $120\,\mathrm{cm}=1{,}2\,\mathrm m$ e l'area è $1{,}2\cdot0{,}8=0{,}96\,\mathrm{m}^2$.
- In centimetri, $0{,}8\,\mathrm m=80\,\mathrm{cm}$ e l'area è $120\cdot80=9600\,\mathrm{cm}^2$.

Le due scritture coincidono, perché dividendo $9600$ per $100^2=10000$ si ottiene $0{,}96$. Il prodotto $120\cdot0{,}8=96$ dei numeri scritti senza convertire non dà direttamente un valore in metri quadrati o in centimetri quadrati.
:::

| Dati disponibili | Calcolo | Condizione da verificare |
|---|---|---|
| Base e area del triangolo | $h=\dfrac{2A}{b}$ | Altezza perpendicolare alla retta della base |
| Area e diagonale del rombo | $d=\dfrac{2A}{D}$ | Diagonali perpendicolari |
| Area, altezza e una base del trapezio | $B=\dfrac{2A}{h}-b$ | Base positiva e ordine delle basi |
| Area e perimetro di un poligono regolare | $a=\dfrac{2A}{P}$ | Altezza comune a tutti i triangoli |
