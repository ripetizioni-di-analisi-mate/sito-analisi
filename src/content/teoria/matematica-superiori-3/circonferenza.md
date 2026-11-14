---
titolo: Circonferenza, rette e tangenti
sommario: Da centro e raggio all’equazione, con metodi per trovare intersezioni, tangenti, corde e punti comuni a due circonferenze.
---

## Centro, raggio ed equazione

:::definizione{#centro titolo="Luogo dei punti a distanza fissata"}
Per **circonferenza** di centro $C(h,k)$ e raggio $r>0$ si intende l’insieme dei punti $P(x,y)$ che soddisfano $CP=r$. Le lettere $h$ e $k$ indicano le coordinate fisse del centro, mentre $x$ e $y$ variano al variare di $P$. La distanza $CP$ è l’ipotenusa del triangolo rettangolo con proiezioni orizzontale e verticale di lunghezza $|x-h|$ e $|y-k|$. Per il teorema di Pitagora,
$$
CP^2=(x-h)^2+(y-k)^2.
$$
Poiché $CP$ e $r$ sono entrambi non negativi, l’uguaglianza delle distanze equivale all’uguaglianza dei loro quadrati. Si ottiene così l’equazione
$$
(x-h)^2+(y-k)^2=r^2 .
$$
La forma dell’equazione permette di scrivere il luogo conoscendo il centro e una sola distanza.
:::

:::esempio{titolo="Dal centro e dal raggio all’equazione"}
Per $C(1,-2)$ e $r=3$, la differenza delle ordinate è $y-(-2)=y+2$. L’equazione è quindi $(x-1)^2+(y+2)^2=9$. Sulla retta orizzontale $y=-2$ il secondo quadrato è nullo, quindi le ascisse degli estremi del diametro orizzontale sono $1-3=-2$ e $1+3=4$. Analogamente su $x=1$ si ottengono le ordinate $-5$ e $1$. Questi quattro punti consentono di disegnare la curva alla stessa scala sui due assi.

::grafico{curve="1+3*cos(t),-2+3*sin(t),0,6.283185307" xmin=-4 xmax=6 ymin=-6 ymax=3 uguale=1 punti="1,-2,pieno,C;-2,-2;4,-2;1,-5;1,1" segmenti="-2,-2,4,-2;1,-5,1,1" legenda="(x-1)^2+(y+2)^2=9" titolo="I diametri orizzontale e verticale si ottengono fissando una coordinata del centro."}

:::

:::attenzione
Nell’equazione $(x-1)^2+(y+2)^2=9$ l’ordinata del centro è $-2$. Infatti $y=-2$ annulla $y+2$. Il numero $9$ è il quadrato del raggio, quindi il raggio è $3$.
:::

## Forma generale e casi degeneri

::::teorema{#generale titolo="Completamento dei quadrati"}
Siano $D,E,F$ numeri reali nell’equazione $x^2+y^2+Dx+Ey+F=0$. Poniamo
$$
q=\frac{D^2+E^2}{4}-F .
$$
Se $q>0$, l’equazione rappresenta la circonferenza con centro $C\left(-\dfrac D2,-\dfrac E2\right)$ e raggio $r=\sqrt q$. Se $q=0$, il luogo è il solo punto $C$, detto anche circonferenza degenere. Se $q<0$, il luogo reale è vuoto. Il segno di $q$ consente quindi di stabilire se esiste una circonferenza di raggio positivo.

:::dimostrazione
Per ottenere il quadrato con termine lineare $Dx$, si eleva al quadrato il binomio $x+\dfrac D2$. Nello sviluppo compare il termine costante $\dfrac{D^2}{4}$, che va anche sottratto per conservare il polinomio iniziale. Lo stesso calcolo vale per $y^2+Ey$. Portando le costanti a destra si ottiene
$$
\begin{aligned}
x^2+Dx+y^2+Ey&=-F,\\[4pt]
\left(x+\frac D2\right)^2+\left(y+\frac E2\right)^2
&=\frac{D^2}{4}+\frac{E^2}{4}-F.
\end{aligned}
$$
Il membro sinistro è la somma di due quadrati. Può essere positivo o nullo. Nel secondo caso entrambi i quadrati devono annullarsi, quindi l’unico punto è $C$. Per un membro destro positivo si applica la definizione di circonferenza.
:::
::::

:::esempio{titolo="Un solo completamento per centro e raggio"}
Per $x^2+y^2-2x+4y-4=0$ si separano le componenti in $x$ e in $y$. Si aggiunge $1$ per completare il quadrato in $x$ e $4$ per quello in $y$.
$$
\begin{aligned}
x^2-2x+y^2+4y&=4,\\
(x^2-2x+1)+(y^2+4y+4)&=4+1+4,\\
(x-1)^2+(y+2)^2&=9 .
\end{aligned}
$$
Il centro è $C(1,-2)$ e il raggio è $3$. Nella famiglia $x^2+y^2-2x+4y+m=0$ il centro è lo stesso, mentre $q=5-m$. Per $m<5$ c’è una circonferenza, per $m=5$ rimane il solo centro e per $m>5$ il luogo è vuoto.
:::

:::osservazione
Per riconoscere la forma generale, i coefficienti di $x^2$ e $y^2$ devono essere uguali e non nulli e il coefficiente di $xy$ deve essere nullo. Per esempio, in $2x^2+2y^2-8x+6=0$ si divide tutto per $2$ prima di leggere $D=-4$ e $F=3$. In questo caso $q=1$ e il centro è $(2,0)$. Il controllo sul segno di $q$ resta necessario anche dopo la divisione.
:::

## Punti sulla curva, interni ed esterni

:::teorema{#punti titolo="Confronto dei quadrati delle distanze"}
Per una circonferenza di raggio $r>0$ e centro $C$, un punto $P$ è sulla curva se $CP^2=r^2$, interno se $CP^2<r^2$, esterno se $CP^2>r^2$. Si confrontano i quadrati per evitare di calcolare una radice. Il **cerchio chiuso** comprende i punti con $CP^2\leq r^2$.
:::

:::esempio{titolo="Tre posizioni rispetto allo stesso centro"}
Per la circonferenza $x^2+y^2=25$, confrontiamo $25$ con le distanze al quadrato dall’origine di $P(3,4)$, $Q(1,1)$ e $R(5,3)$.
$$
\begin{aligned}
CP^2 &= 3^2+4^2=25,\\
CQ^2 &= 1^2+1^2=2,\\
CR^2 &= 5^2+3^2=34 .
\end{aligned}
$$
$P$ è sulla curva, $Q$ è all’interno e $R$ all’esterno. $R$ ha la stessa ascissa del punto $(5,0)$ sulla curva. La sua ordinata non nulla aumenta la distanza dal centro, quindi si trova fuori dal cerchio.

::grafico{curve="5*cos(t),5*sin(t),0,6.283185307" xmin=-6 xmax=7 ymin=-6 ymax=6 uguale=1 punti="0,0,pieno,C;3,4,pieno,P;1,1,pieno,Q;5,3,pieno,R" segmenti="0,0,3,4" legenda="x^2+y^2=25" titolo="$P$ è sulla curva, $Q$ è interno e $R$ è esterno."}

:::

:::teorema{#distanza-curva titolo="Distanza di un punto dalla circonferenza"}
Per un punto $P$ del piano, la distanza dalla circonferenza di centro $C$ e raggio $r$ è il minimo delle distanze $PQ$ al variare di $Q$ sulla curva. Indichiamo con $\rho=CP$ la distanza dal centro. Applicando la disuguaglianza triangolare nelle due direzioni si ottiene
$$
PQ\geq CP-CQ=\rho-r,\qquad
PQ\geq CQ-CP=r-\rho .
$$
Dunque $PQ\geq |\rho-r|$. Se $P\neq C$, sulla semiretta che da $C$ passa per $P$ c’è un punto della circonferenza a distanza $|\rho-r|$ da $P$. Si raggiunge quindi il minimo:
$$
d(P,\text{circonferenza})=|\rho-r| .
$$
Quando $P=C$, tutti i punti della curva sono a distanza $r$ e la formula dà lo stesso risultato. Il valore minimo è zero esattamente nei punti della circonferenza.
:::

:::esempio{titolo="Un punto vicino al bordo di una pista"}
Il bordo di una pista è modellato da $x^2+y^2=100$, con coordinate espresse in metri. Per $P(3,4)$ la distanza dal centro è $5$. Il bordo più vicino si trova prolungando il raggio che passa per $P$ fino a distanza $10$ dal centro. Le coordinate raddoppiano e danno $Q(6,8)$. La distanza da $P$ a $Q$ è $\sqrt{3^2+4^2}=5$, ossia $10-5$. Poiché $P$ è interno, la sua distanza dal cerchio inteso come regione è invece zero.
:::

## Ricostruire la circonferenza

:::teorema{#diametro titolo="Estremi del diametro"}
Se $A$ e $B$ sono gli estremi distinti di un diametro, il centro $C$ è il loro punto medio e il raggio è $r=\dfrac{AB}{2}$. Ogni diametro passa per il centro, che ha la stessa distanza dai due estremi. Il dato di un diametro determina così una sola circonferenza.
:::

:::esempio{titolo="Un diametro obliquo"}
Per $A(-1,2)$ e $B(5,6)$ il punto medio e il quadrato del raggio valgono
$$
\begin{aligned}
C&=\left(\frac{-1+5}{2},\frac{2+6}{2}\right)=(2,4),\\[5pt]
r^2&=\frac{(5-(-1))^2+(6-2)^2}{4}=\frac{36+16}{4}=13.
\end{aligned}
$$
Dividendo per $4$ si dimezza la lunghezza $AB$ prima di elevarla al quadrato. L’equazione è $(x-2)^2+(y-4)^2=13$. Per verificare l’appartenenza di $A$ si sostituiscono le sue coordinate e si ottiene $(-3)^2+(-2)^2=13$.
:::

:::teorema{#tre-punti titolo="Circonferenza per tre punti"}
Tre punti non allineati determinano una sola circonferenza. Il centro è equidistante da due punti $A,B$, quindi appartiene all’asse perpendicolare del segmento $AB$. Lo stesso vale per il segmento $AC$. Poiché $AB$ e $AC$ hanno direzioni diverse, i due assi si incontrano in un punto. Questo punto ha la stessa distanza da tutti e tre i punti, perciò è il centro cercato. In alternativa si sostituiscono le tre coppie di coordinate nella forma generale e si ricavano $D,E,F$ da un sistema lineare.
:::

:::esempio{titolo="Assegnati tre punti con una corda orizzontale"}
Per $A(0,0)$ e $B(4,0)$ l’asse di $AB$ è $x=2$. Con il terzo punto $Q(2,4)$ il centro ha quindi forma $C(2,k)$ e deve soddisfare $CA^2=CQ^2$.
$$
\begin{aligned}
2^2+k^2&=(k-4)^2,\\
4+k^2&=k^2-8k+16,\\
k&=\frac{3}{2}.
\end{aligned}
$$
Poiché $r=CQ=4-\dfrac32=\dfrac52$, l’equazione è $(x-2)^2+\left(y-\dfrac32\right)^2=\dfrac{25}{4}$. Il punto medio di $AB$ ha ordinata $0$, mentre il centro ha ordinata $\dfrac32$. La corda $AB$ non è un diametro.
:::

## Intersezioni con una retta

:::teorema{#intersezioni titolo="Sostituzione e discriminante"}
Sia data una circonferenza di raggio positivo. Per trovare i punti comuni con una retta $y=mx+q$ si sostituisce $y$ con $mx+q$ nell’equazione della circonferenza. Il coefficiente di $x^2$ è $1+m^2>0$, quindi l’equazione risultante è di secondo grado. Se il discriminante è positivo, le soluzioni reali sono due e la retta è **secante**. Con discriminante nullo c’è un solo punto e la retta è **tangente**. Con discriminante negativo la retta è **esterna**. Per una retta verticale $x=t$ si sostituisce invece $x$ e si risolve un’equazione in $y$.
:::

:::esempio{titolo="Dalle radici alle coordinate"}
Intersechiamo $x^2+y^2=25$ con $y=x+1$. Sostituendo e semplificando si ottiene
$$
\begin{aligned}
x^2+(x+1)^2&=25,\\
x^2+x-12&=0,\\
(x+4)(x-3)&=0.
\end{aligned}
$$
Le ascisse sono $-4$ e $3$. Per ricavare le ordinate si usa l’equazione della retta, che assegna a ciascuna ascissa un solo valore. Si trovano così $A(-4,-3)$ e $B(3,4)$. Come controllo, per $B$ si ha $3^2+4^2=25$ e $4=3+1$.

::grafico{f="x+1" curve="5*cos(t),5*sin(t),0,6.283185307" xmin=-6 xmax=6 ymin=-6 ymax=7 uguale=1 punti="-4,-3,pieno,A;3,4,pieno,B" legenda="y=x+1;x^2+y^2=25" titolo="Le radici dell’equazione in $x$ danno le ascisse di $A$ e $B$."}

:::

:::esempio{titolo="Confronto tra tre rette verticali"}
Per $(x-1)^2+(y+2)^2=9$ e $x=t$ si ottiene $(y+2)^2=9-(t-1)^2$. Con $t=1$ il membro destro vale $9$, quindi $y=-5$ oppure $y=1$. Con $t=4$ vale $0$, quindi l’unica ordinata è $-2$. Con $t=5$ vale $-7$, quindi nessun punto reale appartiene a entrambe le curve.
:::

## Tangenti nel punto e di direzione assegnata

::::teorema{#tangenti titolo="Distanza del centro e direzione del raggio"}
Siano $C(h,k)$ il centro e $r>0$ il raggio. La retta $\ell\colon ax+by+c=0$, con $(a,b)\neq(0,0)$, è tangente se e solo se la distanza $d(C,\ell)$ uguaglia $r$. Se la tangenza avviene in $P_0(x_0,y_0)$, il vettore $\overrightarrow{CP_0}$ è perpendicolare alla retta, quindi l’equazione della tangente è
$$
(x_0-h)(x-h)+(y_0-k)(y-k)=r^2 .
$$

:::dimostrazione
Sia $H$ il piede della perpendicolare da $C$ a $\ell$. Per ogni punto $P$ della retta vale $CP^2=CH^2+HP^2$. Se $CH=r$, l’unico modo di ottenere $CP=r$ è imporre $HP=0$, quindi il punto comune è $H$. Se $CH<r$, le due posizioni sulla retta a distanza $\sqrt{r^2-CH^2}$ da $H$ appartengono alla circonferenza. Se $CH>r$, nessuna posizione soddisfa l’uguaglianza. Nel caso tangente $P_0=H$, quindi l’equazione si ottiene imponendo che il prodotto scalare tra $\overrightarrow{CP_0}$ e $\overrightarrow{P_0P}$ sia nullo. Spostando i termini costanti si usa $(x_0-h)^2+(y_0-k)^2=r^2$.
:::
::::

:::esempio{titolo="Tangente in un punto assegnato"}
Sulla circonferenza $x^2+y^2=25$ il punto $P_0(3,4)$ appartiene alla curva perché $3^2+4^2=25$. Il raggio ha componenti $(3,4)$, quindi la tangente per $P_0$ soddisfa
$$
3(x-3)+4(y-4)=0 \quad\Longleftrightarrow\quad 3x+4y=25 .
$$
La distanza del centro dalla retta è $\dfrac{25}{\sqrt{3^2+4^2}}=5$, come richiesto. Il metodo comprende anche la tangente verticale in $(5,0)$, perché in quel caso l’equazione diventa $5(x-5)=0$.

::grafico{f="(25-3*x)/4" curve="5*cos(t),5*sin(t),0,6.283185307" xmin=-6 xmax=7 ymin=-6 ymax=7 uguale=1 punti="0,0,pieno,C;3,4,pieno,P" segmenti="0,0,3,4" legenda="3x+4y=25;x^2+y^2=25" titolo="Il raggio $CP$ è perpendicolare alla tangente nel punto $P$."}

:::

:::esempio{titolo="Due tangenti parallele"}
Per trovare le tangenti a $(x-1)^2+(y+2)^2=9$ parallele a $4x+3y=0$, si cerca $q$ in $4x+3y=q$. Il numeratore della distanza da $C(1,-2)$ è $|4-6-q|=|q+2|$ e il denominatore è $5$. Poiché il raggio è $3$, segue
$$
\frac{|q+2|}{5}=3 \quad\Longleftrightarrow\quad q=-2\pm15 .
$$
Le due tangenti sono quindi $4x+3y=13$ e $4x+3y=-17$. Il valore medio delle due costanti è $-2$, ossia la costante della parallela che passa per il centro.
:::

:::esempio{titolo="Tangenti passanti per un punto esterno"}
Siano date la circonferenza $x^2+y^2=9$ e il punto esterno $T(5,0)$. Se $P_0(x_0,y_0)$ è un punto di contatto, la tangente in $P_0$ si scrive $x_0x+y_0y=9$. Si impone che contenga $T$, quindi $5x_0=9$. La condizione di appartenenza di $P_0$ alla circonferenza determina ancora due ordinate.
$$
\begin{aligned}
x_0&=\frac95,\\
y_0^2&=9-\left(\frac95\right)^2=\frac{144}{25},\\[4pt]
y_0&=\pm\frac{12}{5}.
\end{aligned}
$$
Dalle coordinate dei contatti si ricavano le due tangenti $9x+12y=45$ e $9x-12y=45$. Sono simmetriche rispetto all’asse $x$. In ciascuno dei due triangoli rettangoli $CTP_0$, l’ipotenusa $CT$ misura $5$ e il raggio $CP_0$ misura $3$. Quindi la lunghezza del segmento da $T$ a ciascun punto di tangenza è $\sqrt{5^2-3^2}=4$.
:::

## Corde e distanze dal centro

:::teorema{#corde titolo="Dal triangolo rettangolo alla lunghezza"}
Sia $AB$ una corda, cioè un segmento tra due punti distinti della stessa circonferenza. La perpendicolare alla retta $AB$ condotta dal centro incontra la corda nel suo punto medio $H$. Infatti i triangoli rettangoli $CHA$ e $CHB$ hanno la stessa ipotenusa $r$ e il cateto $CH$ in comune, quindi $HA=HB$. Posto $d=CH<r$, per Pitagora si ha
$$
AB=2\,HA=2\sqrt{r^2-d^2} .
$$
Se la lunghezza $L$ della corda è nota, dalla stessa relazione si ricava $d=\sqrt{r^2-\left(\dfrac L2\right)^2}$. Il caso $d=0$ dà il diametro, la corda di lunghezza maggiore.
:::

:::esempio{titolo="Dalla corda alla quota di una retta"}
Una circonferenza di centro $(0,0)$ e raggio $5$ è intersecata da una retta orizzontale in una corda di lunghezza $8$. La metà della corda misura $4$, quindi $d^2=25-16=9$. La distanza dall’origine della retta $y=q$ è $|q|$, da cui $q=3$ oppure $q=-3$. Si ottengono due corde congruenti, simmetriche rispetto all’asse $x$.

::grafico{f="3;-3" curve="5*cos(t),5*sin(t),0,6.283185307" xmin=-6 xmax=6 ymin=-6 ymax=6 uguale=1 punti="0,0,pieno,C;0,3,pieno,H;4,3,pieno,B;-4,3,pieno,A;-4,-3;4,-3" segmenti="0,0,0,3;0,0,4,3" legenda="y=3;y=-3;x^2+y^2=25" titolo="Il triangolo $CHB$ ha ipotenusa $5$ e cateti $3$ e $4$."}

:::

## Posizioni reciproche e asse radicale

:::teorema{#asse-radicale titolo="Sottrazione delle equazioni"}
Siano date due circonferenze di centri distinti in forma generale. Sottraendo membro a membro le equazioni, i termini $x^2$ e $y^2$ si eliminano. Resta l’equazione di una retta, chiamata **asse radicale**. Tutti i punti comuni appartengono a questa retta. Inversamente, ogni punto che appartiene all’asse radicale e a una delle due circonferenze appartiene anche all’altra, perché in quel punto i due polinomi hanno lo stesso valore. Per calcolare i punti comuni basta dunque intersecare una sola circonferenza con la retta.
:::

:::esempio{titolo="Due intersezioni sulla stessa verticale"}
Per $x^2+y^2=25$ e $(x-6)^2+y^2=25$, la sottrazione delle forme generali dà $-12x+36=0$, quindi $x=3$. Nella prima equazione $y^2=25-3^2=16$, da cui i punti comuni $(3,-4)$ e $(3,4)$. L’asse è a metà tra i centri perché i raggi sono uguali. Se i raggi fossero diversi, sottraendo comparirebbe anche la differenza dei loro quadrati.
:::

:::osservazione{titolo="Direzione dell’asse radicale"}
Scriviamo le circonferenze come equazioni con i quadrati centrati in $C_1(h_1,k_1)$ e $C_2(h_2,k_2)$. Nella sottrazione i coefficienti dei termini in $x$ e $y$ diventano $2(h_2-h_1)$ e $2(k_2-k_1)$, a meno di uno stesso segno. Questi coefficienti formano un vettore parallelo alla direzione da $C_1$ a $C_2$. L’asse radicale è quindi perpendicolare alla retta dei centri. Se la distanza tra i centri è fissa e cambia un solo raggio, cambia il termine costante e l’asse si sposta senza ruotare. Se i raggi sono uguali, l’asse è anche l’asse perpendicolare del segmento tra i centri, perché l’uguaglianza dei due polinomi equivale a $PC_1^2=PC_2^2$.
:::

:::osservazione{titolo="Classificazione a partire dai raggi"}
Per centri distinti, sia $d>0$ la loro distanza e siano $r_1,r_2>0$ i raggi. In presenza di un punto comune, i tre segmenti di lunghezza $d,r_1,r_2$ chiudono un triangolo, eventualmente con i vertici allineati.

- Se $|r_1-r_2|<d<r_1+r_2$, il triangolo è non degenere e il terzo vertice può stare da una parte o dall’altra della retta dei centri. Quindi i punti comuni sono due.
- Se $d=r_1+r_2$, il punto di tangenza è tra i centri. Se $d=|r_1-r_2|$, una circonferenza è interna all’altra e la tangenza è interna.
- Se $d>r_1+r_2$ oppure $d<|r_1-r_2|$, il triangolo non può chiudersi e le curve sono disgiunte.

Per centri coincidenti, raggi uguali danno due curve coincidenti e raggi diversi danno due curve disgiunte. In questi casi la sottrazione delle equazioni dà una costante, quindi non individua una retta.
:::
