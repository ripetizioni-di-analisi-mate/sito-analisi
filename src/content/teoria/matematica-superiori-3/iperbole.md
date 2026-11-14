---
titolo: Iperbole e funzione omografica
sommario: Dalla differenza delle distanze ai fuochi si ricavano le equazioni dell’iperbole. La forma canonica permette di trovare vertici, asintoti e intersezioni prima di passare alla funzione omografica.
---

## Differenza delle distanze

:::definizione{#definizione titolo="Definizione focale"}
Siano $F_1$ e $F_2$ due punti distinti, detti **fuochi**, a distanza $2c$. Fissato $a$ con $0<a<c$, l’**iperbole** è l’insieme dei punti $P$ per i quali vale
$$
|PF_1-PF_2|=2a.
$$
Se $PF_1-PF_2=2a$, il punto è più vicino a $F_2$. Se $PF_1-PF_2=-2a$, è più vicino a $F_1$. I due segni individuano i **due rami**. La perpendicolare al segmento $F_1F_2$ nel suo punto medio li separa, perché ogni punto di quella retta ha differenza delle distanze uguale a zero.
:::

:::esempio{titolo="Individuare un ramo dalle distanze"}
Siano $F_1=(-5,0)$ e $F_2=(5,0)$. Il punto $P=(3,0)$ dista $8$ da $F_1$ e $2$ da $F_2$, quindi appartiene all’iperbole di costante $2a=6$. Il punto $Q=(-3,0)$ ha le distanze scambiate e appartiene all’altro ramo. Anche $R=(5,\frac{16}{3})$ appartiene al primo ramo. La sua distanza da $F_2$ è $\dfrac{16}{3}$ e quella da $F_1$ è
$$
\sqrt{10^2+\left(\frac{16}{3}\right)^2}
=\sqrt{\frac{900+256}{9}}=\frac{34}{3}.
$$
La differenza è $\dfrac{34}{3}-\dfrac{16}{3}=6$, dunque $R$ e $P$ soddisfano la stessa condizione pur avendo distanze diverse dai fuochi.

::grafico{f="4*sqrt(x^2-9)/3;-4*sqrt(x^2-9)/3" xmin=-8 xmax=8 ymin=-6 ymax=8 uguale=1 punti="-5,0,pieno,F_1;5,0,pieno,F_2;3,0,pieno,P;-3,0,pieno,Q;5,5.333333333,pieno,R" segmenti="-5,0,5,5.333333333;5,0,5,5.333333333" legenda="y=\dfrac{4}{3}\sqrt{x^2-9};y=-\dfrac{4}{3}\sqrt{x^2-9}" titolo="I segmenti $RF_1$ e $RF_2$ hanno lunghezze diverse, con differenza $6$."}

:::

:::attenzione
La differenza in valore assoluto è al più $2c$, per la disuguaglianza triangolare applicata ai tre punti $P,F_1,F_2$. Se $2a>2c$, il luogo è vuoto. Nel caso $2a=2c$ si ottengono le due semirette della retta dei fuochi esterne al segmento, compresi i loro estremi. Con $a=0$ si ottiene invece la perpendicolare nel punto medio dei fuochi. Questi casi di uguaglianza motivano l’ipotesi $0<a<c$.
:::

## Equazioni canoniche e vertici

::::teorema{#assi titolo="Equazione con centro nell’origine"}
Con i fuochi in $(-c,0)$ e $(c,0)$ si pone $b^2=c^2-a^2$. Il **semiasse trasverso** $a$ è la distanza del centro da ciascun vertice. Il numero $b$, detto **semiasse coniugato**, determina insieme ad $a$ l’inclinazione degli asintoti. Si ottiene l’equazione
$$
\frac{x^2}{a^2}-\frac{y^2}{b^2}=1,
\qquad a,b>0.
$$
I vertici si trovano ponendo $y=0$, perché l’asse che contiene i fuochi incontra i rami proprio in quei punti. Se i fuochi sono invece sull’asse $y$, la forma è $\dfrac{y^2}{a^2}-\dfrac{x^2}{b^2}=1$ e i vertici sono $(0,\pm a)$. L’orientamento dipende dal **termine positivo**, anche quando il suo denominatore è il più piccolo.

:::dimostrazione
Indichiamo con $d_1$ e $d_2$ le distanze da $(-c,0)$ e $(c,0)$. Sul ramo destro vale $d_1-d_2=2a$. Dai quadrati delle due distanze si ottiene
$$
\begin{aligned}
2a(d_1+d_2)&=d_1^2-d_2^2\\
&=(x+c)^2+y^2-(x-c)^2-y^2\\
&=4cx .
\end{aligned}
$$
Sottraendo $d_1-d_2=2a$ da $d_1+d_2=\dfrac{2cx}{a}$ e dividendo per $2$, si trova $d_2=\dfrac{cx}{a}-a$. Poiché $d_2^2=(x-c)^2+y^2$, segue
$$
\begin{aligned}
\frac{c^2x^2}{a^2}-2cx+a^2&=x^2-2cx+c^2+y^2\\
\frac{c^2-a^2}{a^2}x^2-y^2&=c^2-a^2\\
\frac{x^2}{a^2}-\frac{y^2}{b^2}&=1.
\end{aligned}
$$
Nell’altro verso, l’equazione canonica implica $|x|\geq a$. Per $x\geq a$ si ha $\dfrac{cx}{a}\geq c>a$. Sostituendo $y^2=b^2(\dfrac{x^2}{a^2}-1)$ nelle due formule delle distanze, si ottiene
$$
d_1^2=\left(\frac{cx}{a}+a\right)^2,
\qquad
d_2^2=\left(\frac{cx}{a}-a\right)^2.
$$
Le due espressioni al quadrato sono positive prima di essere elevate al quadrato, quindi le distanze sono $\dfrac{cx}{a}+a$ e $\dfrac{cx}{a}-a$. La differenza è $2a$. La riflessione rispetto all’asse $y$ scambia le distanze e dà l’altro ramo, con la stessa differenza in valore assoluto.
:::
::::

:::esempio{titolo="Orientamento e simmetrie"}
Nell’equazione $9y^2-4x^2=36$, la divisione per $36$ dà $\dfrac{y^2}{4}-\dfrac{x^2}{9}=1$. Quindi $a=2$, $b=3$ e i vertici sono $(0,2)$ e $(0,-2)$. La sostituzione $x\mapsto -x$ conserva l’equazione e lascia ogni ramo al proprio posto. La sostituzione $y\mapsto -y$ scambia i due rami. La composizione delle due riflessioni è la simmetria centrale rispetto all’origine.
:::

## Fuochi ed eccentricità

:::teorema{#fuochi titolo="Distanza focale ed eccentricità"}
La distanza di ciascun fuoco dal centro è $c=\sqrt{a^2+b^2}$. Per i rami orizzontali i fuochi sono $(\pm c,0)$, mentre per quelli verticali sono $(0,\pm c)$. Il rapporto $e=\dfrac{c}{a}$ è l’**eccentricità**. Poiché $b^2>0$, si ha $c>a$ e quindi $e>1$. Quando tutte le lunghezze sono moltiplicate per lo stesso fattore positivo, il rapporto resta uguale ed esprime la forma dell’iperbole indipendentemente dalla sua scala.
:::

:::esempio{titolo="Ricostruire i semiassi dai dati focali"}
I fuochi sono $(0,-5)$ e $(0,5)$, e la differenza assoluta delle distanze è $8$. Dalla distanza tra i fuochi si ricava $2c=10$ e dalla differenza si ricava $2a=8$. Allora
$$
\begin{aligned}
c&=5,\qquad a=4,\\
b^2&=c^2-a^2=25-16=9,\\
e&=\frac54,\qquad \frac{y^2}{16}-\frac{x^2}{9}=1.
\end{aligned}
$$
Il termine in $y$ è positivo perché i fuochi sono sull’asse verticale. Il numero $8$ è due volte il semiasse trasverso. La distanza tra i fuochi è invece $10$. Questi dati determinano sia la posizione dei vertici sia l’ampiezza dei rami.
:::

:::osservazione
Poiché $c^2=a^2+b^2$, vale $e^2=1+\dfrac{b^2}{a^2}$. A parità di $a$, aumentando $e$ si aumenta $b$ e cambia la pendenza degli asintoti. Per esempio, con $a=3$ ed $e=\sqrt2$ si ha $b^2=9$, mentre con $a=3$ ed $e=\dfrac53$ si ha $b^2=16$. Dalla stessa distanza dei vertici dal centro si ottengono quindi forme diverse.
:::

## Asintoti e rettangolo di riferimento

::::teorema{#asintoti titolo="Asintoti delle iperboli centrate"}
Per l’iperbole con asse trasverso orizzontale, le rette a cui si avvicinano le estremità dei rami sono $y=\pm\dfrac{b}{a}x$. Sono le diagonali del rettangolo di vertici $(\pm a,\pm b)$. Nella forma verticale il rettangolo ha estensione orizzontale $2b$ e verticale $2a$, quindi le pendenze sono $\pm\dfrac{a}{b}$. In entrambi i casi la pendenza in valore assoluto è il rapporto tra il semilato verticale e quello orizzontale.

:::dimostrazione
Per $x\geq a$, l’ordinata superiore è $y=\dfrac{b}{a}\sqrt{x^2-a^2}$. La differenza verticale fra la retta crescente e quel tratto di curva è positiva. Moltiplicando per il coniugato si ottiene
$$
\begin{aligned}
\frac{b}{a}x-\frac{b}{a}\sqrt{x^2-a^2}
&=\frac{b}{a}\left(x-\sqrt{x^2-a^2}\right)\\
&=\frac{ab}{x+\sqrt{x^2-a^2}} .
\end{aligned}
$$
Quando $x$ cresce senza limite, il denominatore cresce senza limite e la differenza si avvicina a zero. Per simmetria si ottengono gli altri tre tratti, due per ogni retta. Lo scambio delle coordinate trasforma il caso orizzontale in quello verticale e trasforma le pendenze nei loro reciproci.
:::
::::

:::esempio{titolo="Dalle diagonali alla bozza del grafico"}
Per $\dfrac{x^2}{9}-\dfrac{y^2}{4}=1$ il rettangolo si estende da $x=-3$ a $x=3$ e da $y=-2$ a $y=2$. La diagonale crescente passa per il centro e per $(3,2)$, quindi ha pendenza $\dfrac{2}{3}$. I vertici della curva sono $(\pm3,0)$ e da lì i rami si avvicinano alle diagonali prolungate. A $x=6$ il punto superiore ha ordinata $2\sqrt3$, mentre la retta crescente ha ordinata $4$. La distanza verticale è ancora positiva, come previsto dall’espressione razionalizzata.

::grafico{f="2*sqrt(x^2-9)/3;-2*sqrt(x^2-9)/3;2*x/3;-2*x/3" xmin=-8 xmax=8 ymin=-6 ymax=6 uguale=1 punti="-3,0,pieno,V_1;3,0,pieno,V_2" segmenti="-3,-2,3,-2;3,-2,3,2;3,2,-3,2;-3,2,-3,-2;6,3.464101615,6,4" legenda="y=\dfrac{2}{3}\sqrt{x^2-9};y=-\dfrac{2}{3}\sqrt{x^2-9};y=\dfrac23x;y=-\dfrac23x" titolo="Il rettangolo determina le pendenze delle diagonali, mentre i vertici appartengono ai rami."}

:::

## Punti, rette e intersezioni

:::teorema{#punti titolo="Sezioni verticali e orizzontali"}
Per determinare i punti di ascissa $s$ sull’iperbole orizzontale, si sostituisce $x=s$ e si ottiene $y^2=b^2(\dfrac{s^2}{a^2}-1)$. Il segno del secondo membro determina il numero di punti.

- Se $|s|<a$, il secondo membro è negativo e l’intersezione è vuota.
- Se $|s|=a$, l’unica ordinata è $0$ e il punto è un vertice.
- Se $|s|>a$, le due ordinate sono opposte e i punti appartengono allo stesso ramo.

Una retta orizzontale $y=t$ produce invece $x^2=a^2(1+\dfrac{t^2}{b^2})>0$. In questo caso si ottiene un punto per ramo a qualsiasi altezza. I due punti si possono trovare dall’equazione oppure leggere come intersezioni tra una retta e il grafico.
:::

:::esempio{titolo="Una corda verticale e la sua lunghezza"}
Per $\dfrac{x^2}{9}-\dfrac{y^2}{16}=1$ si considera la retta $x=5$. Poiché $5>3$, ci si aspetta due punti sul ramo destro. Sostituendo l’ascissa si ottiene
$$
\begin{aligned}
\frac{y^2}{16}&=\frac{25}{9}-1=\frac{16}{9}\\
y^2&=\frac{256}{9}\\
y&=\pm\frac{16}{3}.
\end{aligned}
$$
I punti hanno la stessa ascissa, perciò la loro distanza è la differenza delle ordinate $\dfrac{32}{3}$. Il segmento che li unisce è una **corda** dell’iperbole, il cui punto medio è $(5,0)$.

::grafico{f="4*sqrt(x^2-9)/3;-4*sqrt(x^2-9)/3" xmin=-6 xmax=7 ymin=-7 ymax=7 uguale=1 punti="5,5.333333333,pieno,A;5,-5.333333333,pieno,B;-3,0;3,0" segmenti="5,-5.333333333,5,5.333333333" legenda="y=\dfrac43\sqrt{x^2-9};y=-\dfrac43\sqrt{x^2-9}" titolo="La corda $AB$ sta sul ramo destro e ha lunghezza $\dfrac{32}{3}$."}

:::

:::attenzione
Per una retta obliqua si sostituisce $y=mx+q$ e si controlla il grado dell’equazione ottenuta. Ad esempio, con $x^2-y^2=1$ e $y=x+1$, i termini in $x^2$ si cancellano e resta $-2x-1=1$. L’unico punto è $(-1,0)$. La retta è parallela a un asintoto e la sua unica intersezione viene da un’equazione di primo grado. La tangente nel vertice $(-1,0)$ è invece la verticale $x=-1$.
:::

## Iperbole equilatera

:::definizione{#equilatera titolo="Asintoti perpendicolari e prodotto costante"}
L’iperbole è **equilatera** se i due semiassi hanno la stessa lunghezza. Le pendenze dei suoi asintoti sono allora $\pm1$, dunque le rette sono perpendicolari. Se si scelgono gli asintoti come nuovi assi si ottiene la forma $uv=K$, con $K\ne0$. Per esempio, nel caso $x^2-y^2=a^2$ si può scegliere $u=\dfrac{x+y}{\sqrt2}$ e $v=\dfrac{x-y}{\sqrt2}$. Le coordinate sono misurate lungo due direzioni perpendicolari con la stessa scala e il loro prodotto è
$$
uv=\frac{(x+y)(x-y)}{2}=\frac{a^2}{2}.
$$
In coordinate $x,y$ riferite agli asintoti, la forma $xy=K$ equivale a $y=\dfrac{K}{x}$ per $x\ne0$. Se $K>0$, le coordinate hanno lo stesso segno e i rami occupano il primo e il terzo quadrante. Se $K<0$, i segni sono opposti e i rami occupano il secondo e il quarto.
:::

:::esempio{titolo="Un punto determina il prodotto"}
Per un’iperbole equilatera con asintoti gli assi, il punto $P=(-2,3)$ determina $K=(-2)\cdot3=-6$. Di conseguenza la curva è $xy=-6$. La proiezione di $P$ sui due assi individua un rettangolo di lati $2$ e $3$. Per un qualsiasi altro punto della curva, i lati sono $|x|$ e $|y|$ e l’area resta $|xy|=6$. Si può così interpretare l’equazione come condizione di area costante.
:::

## Iperboli con centro traslato

:::teorema{#traslata titolo="Centro, vertici e asintoti traslati"}
Per ottenere un centro $C=(h,k)$ si misurano le coordinate a partire da $C$. Quindi si usano $x-h$ al posto di $x$ e $y-k$ al posto di $y$ nell’equazione centrata nell’origine. In particolare, per la forma orizzontale vale
$$
\frac{(x-h)^2}{a^2}-\frac{(y-k)^2}{b^2}=1,
\qquad
y-k=\pm\frac{b}{a}(x-h) .
$$
La seconda formula dà le due rette che passano per $C$ con le pendenze originarie. I vertici sono $(h\pm a,k)$ e i fuochi $(h\pm c,k)$. Poiché una traslazione conserva tutte le distanze, conserva anche $a$, $b$, $c$ ed eccentricità. Per la forma verticale si scambiano i ruoli delle coordinate relative e si spostano vertici e fuochi lungo la retta $x=h$.
:::

:::esempio{titolo="Riconoscere il centro completando i quadrati"}
Consideriamo $4x^2-9y^2-8x-36y-68=0$. Si raccoglie il coefficiente di ciascuna coppia di termini nella stessa variabile, includendo il segno di $-9$. Poi si completano i quadrati.
$$
\begin{aligned}
4(x^2-2x)-9(y^2+4y)&=68\\
4\big((x-1)^2-1\big)-9\big((y+2)^2-4\big)&=68\\
4(x-1)^2-9(y+2)^2&=36\\
\frac{(x-1)^2}{9}-\frac{(y+2)^2}{4}&=1 .
\end{aligned}
$$
Si ottengono $C=(1,-2)$ e $a=3$. I vertici sono $(-2,-2)$ e $(4,-2)$. Gli asintoti sono $y+2=\pm\dfrac23(x-1)$, quindi traslando il centro si modificano le intercette delle rette e si conservano le pendenze.
:::

## Funzione omografica

::::teorema{#omografica titolo="Forma traslata del reciproco"}
Siano $a,b,c,d$ i coefficienti della funzione $f(x)=\dfrac{ax+b}{cx+d}$, con $c\ne0$. Il dominio si ottiene da $cx+d\ne0$. Se $ad-bc\ne0$, l’equazione del grafico equivale a
$$
(x-h)(y-k)=K,\qquad
h=-\frac dc,\qquad k=\frac ac,\qquad K=\frac{bc-ad}{c^2}.
$$
Quindi il grafico è un’iperbole equilatera con centro $(h,k)$ e asintoti $x=h$ e $y=k$. Il dominio esclude $h$ e l’insieme dei valori esclude $k$. Il segno di $K$ stabilisce in quali regioni, rispetto agli asintoti, si trovano i due rami.

:::dimostrazione
Si separa la parte costante scrivendo il numeratore come multiplo del denominatore più una costante. Per $x\ne-\dfrac dc$ si ottiene
$$
\begin{aligned}
\frac{ax+b}{cx+d}
&=\frac{\frac ac(cx+d)+b-\frac{ad}{c}}{cx+d}\\[4pt]
&=\frac ac+\frac{bc-ad}{c^2}\,\frac{1}{x+\frac dc}.
\end{aligned}
$$
Moltiplicando $y-\dfrac ac$ per $x+\dfrac dc$ resta la costante $K$. Poiché $K\ne0$, il prodotto non si annulla e le rette $x=h$ e $y=k$ sono escluse dal grafico. Viceversa, ogni $y\ne k$ è ottenuto per $x=h+\dfrac{K}{y-k}$.
:::
::::

:::esempio{titolo="Asintoti e intersezioni con gli assi"}
Per $f(x)=\dfrac{2x+3}{x-1}$, la relazione $2x+3=2(x-1)+5$ dà $f(x)=2+\dfrac{5}{x-1}$. Si leggono $h=1$, $k=2$ e $K=5$. Le differenze $x-1$ e $y-2$ hanno lo stesso segno, perciò un ramo è sopra e a destra del centro, e l’altro sotto e a sinistra. Mettendo $y=0$ si ottiene $2x+3=0$, con soluzione $x=-\dfrac32$ ammessa dal dominio. Mettendo $x=0$ si ottiene $y=-3$. Le intersezioni sono dunque $\left(-\dfrac32,0\right)$ e $(0,-3)$.

::grafico{f="2+5/(x-1)" xmin=-5 xmax=7 ymin=-5 ymax=9 uguale=1 asintoti="x=1;y=2" punti="1,2,vuoto,C;-1.5,0,pieno,A;0,-3,pieno,B" titolo="Gli asintoti dividono il piano in quattro regioni. I rami occupano quelle in cui le coordinate relative al centro hanno lo stesso segno."}

:::

:::attenzione
Se $ad-bc=0$, il termine reciproco scompare. Per esempio $\dfrac{6x-12}{3x-6}=2$ vale per $x\ne2$, perché la semplificazione del fattore $x-2$ si esegue sul dominio iniziale. Il grafico è la retta orizzontale $y=2$ con il punto $(2,2)$ escluso. In questo caso l’esclusione dal dominio produce un buco, mentre con $K\ne0$ produce un asintoto verticale.
:::
