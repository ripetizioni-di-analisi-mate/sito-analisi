---
titolo: Trasformazioni e problemi sulle coniche
sommario: Traslazioni, simmetrie e omotetie cambiano le coordinate di punti e curve. Il completamento dei quadrati, i sistemi e la tangenza permettono di riconoscere le coniche e ricavarne le proprietà geometriche.
---

## Traslazioni di punti e curve

::::teorema{#traslazioni titolo="Coordinate di un punto e nuova equazione"}
La traslazione di vettore $(h,k)$ aggiunge $h$ a ogni ascissa e $k$ a ogni ordinata. Se $P=(u,v)$ è un punto della curva originaria, il suo punto immagine è $P'=(u+h,v+k)$. Se la curva originaria è descritta da $F(u,v)=0$, la sua immagine ha equazione
$$
F(x-h,y-k)=0.
$$
Qui $x$ e $y$ indicano le coordinate *dopo* la traslazione. La stessa regola permette di spostare un grafico, una conica o qualsiasi altro luogo descritto da un’equazione.

:::dimostrazione
Un punto $(x,y)$ appartiene alla curva immagine se il punto da cui proviene soddisfa l’equazione originaria. Per risalire a quel punto si risolve il sistema
$$
\begin{cases}
x=u+h,\\
y=v+k.
\end{cases}
\qquad\Longrightarrow\qquad
\begin{cases}
u=x-h,\\
v=y-k.
\end{cases}
$$
Sostituendo questi valori in $F(u,v)=0$ si caratterizzano esattamente i punti immagine. La sottrazione di $h$ e $k$ dipende dunque dal fatto che nell’equazione si usa la trasformazione inversa.
:::
::::

:::esempio{titolo="Una circonferenza spostata di due unità a destra"}
La circonferenza $u^2+v^2=9$ viene traslata del vettore $(2,-1)$. Il centro va da $(0,0)$ a $(2,-1)$. Anche il punto $(3,0)$ si sposta dello stesso vettore e diventa $(5,-1)$. L’equazione è $(x-2)^2+(y+1)^2=9$. Sostituendo $(5,-1)$ si ritrovano $9$ unità quadrate, coerenti con il raggio $3$.

::grafico{curve="3*cos(t),3*sin(t),0,6.283185307;2+3*cos(t),-1+3*sin(t),0,6.283185307" xmin=-4 xmax=7 ymin=-5 ymax=4 uguale=1 punti="0,0;2,-1,pieno,C;3,0,pieno,P;5,-1,pieno,P'" vettori="0,0,2,-1;3,0,5,-1" legenda="x^2+y^2=9;(x-2)^2+(y+1)^2=9" titolo="Il centro e il punto $P$ si spostano dello stesso vettore."}

:::

:::osservazione
Una traslazione conserva le distanze perché le differenze tra le coordinate di due punti restano uguali. Per esempio la differenza delle ascisse dopo la traslazione è $(u_2+h)-(u_1+h)=u_2-u_1$. La stessa cancellazione vale per le ordinate. Perciò una traslazione conserva il raggio di una circonferenza, l’apertura di una parabola e le pendenze delle rette che vengono spostate con la curva.
:::

## Simmetrie assiali e centrali

:::teorema{#simmetrie titolo="Riflettere le coordinate"}
La simmetria rispetto a una retta manda ciascun punto nel punto opposto alla stessa distanza dalla retta, lungo la perpendicolare. Nei casi seguenti le coordinate si ricavano direttamente.

- Rispetto all’asse $x$, $(x,y)$ diventa $(x,-y)$.
- Rispetto all’asse $y$, $(x,y)$ diventa $(-x,y)$.
- Rispetto alla bisettrice $y=x$, $(x,y)$ diventa $(y,x)$.
- Rispetto alla verticale $x=h$, $(x,y)$ diventa $(2h-x,y)$.

Nella simmetria centrale di centro $C=(h,k)$, il punto $C$ è il punto medio tra $P=(x,y)$ e la sua immagine $P'=(2h-x,2k-y)$. In particolare, rispetto all’origine si cambiano entrambi i segni. Una simmetria applicata due volte restituisce il punto di partenza, quindi per scrivere l’equazione immagine si può usare la medesima sostituzione.
:::

:::esempio{titolo="Una parabola riflessa nella bisettrice"}
Si riflette $v=u^2$ rispetto a $y=x$. Un punto immagine ha coordinate $x=v$ e $y=u$, perciò la curva immagine ha equazione $x=y^2$. Per esempio $(2,4)$ diventa $(4,2)$ e $(-2,4)$ diventa $(4,-2)$. La curva iniziale ha asse di simmetria verticale, mentre quella immagine ha asse orizzontale. Le due ordinate del nuovo grafico a $x=4$ corrispondono alle due ascisse del grafico iniziale a $y=4$.

::grafico{f="x^2;x" curve="t^2,t,-2.4,2.4" xmin=-3 xmax=6 ymin=-3 ymax=6 uguale=1 punti="2,4,pieno,P;4,2,pieno,P'" segmenti="2,4,4,2" legenda="y=x^2;y=x;x=y^2" titolo="Il segmento $PP'$ è perpendicolare alla bisettrice $y=x$."}

:::

:::esempio{titolo="Riflessione rispetto a una verticale traslata"}
La circonferenza $(u-1)^2+(v+2)^2=4$ ha centro $(1,-2)$. Riflettendo rispetto a $x=3$ il centro va in $(5,-2)$, perché $3$ è la media di $1$ e $5$. Il raggio resta $2$. Dalla sostituzione $u=6-x$, $v=y$ si ottiene infatti $(5-x)^2+(y+2)^2=4$. Essendo $(5-x)^2=(x-5)^2$, si legge il centro dalla forma usuale.
:::

## Omotetie e rapporti di scala

:::definizione{#omotetie titolo="Omotetia di centro assegnato"}
Un’**omotetia** di centro $C$ e rapporto $\lambda\ne0$ moltiplica per $\lambda$ il vettore dal centro al punto. Per $C=(h,k)$ e $P=(u,v)$, la sua immagine ha coordinate
$$
P'=\big(h+\lambda(u-h),\ k+\lambda(v-k)\big).
$$
Con $\lambda>0$ il punto immagine si trova sulla stessa semiretta che parte da $C$, mentre con $\lambda<0$ si trova su quella opposta. La distanza da $C$ è moltiplicata per $|\lambda|$. Per ogni coppia di punti le differenze delle coordinate sono moltiplicate per $\lambda$, dunque tutte le lunghezze sono moltiplicate per $|\lambda|$ e le aree per $\lambda^2$.
:::

:::esempio{titolo="Centro diverso dall’origine"}
La circonferenza di centro $A=(4,1)$ e raggio $2$ è sottoposta a un’omotetia di centro $C=(1,1)$ e rapporto $-\dfrac12$. Il vettore da $C$ ad $A$ è $(3,0)$. Perciò l’immagine di $A$ ha coordinate $A'=(1-\dfrac32,1)=(-\dfrac12,1)$. Il raggio diventa $2\cdot\dfrac12=1$. L’immagine ha equazione $(x+\dfrac12)^2+(y-1)^2=1$. La direzione da $C$ ad $A'$ è opposta a quella da $C$ ad $A$, in accordo con il segno negativo.

::grafico{curve="4+2*cos(t),1+2*sin(t),0,6.283185307;-0.5+cos(t),1+sin(t),0,6.283185307" xmin=-3 xmax=7 ymin=-2 ymax=4 uguale=1 punti="4,1,pieno,A;1,1,pieno,C;-0.5,1,pieno,A'" segmenti="-0.5,1,4,1" legenda="(x-4)^2+(y-1)^2=4;(x+\dfrac12)^2+(y-1)^2=1" titolo="I due centri $A$ e $A'$ stanno su semirette opposte da $C$."}

:::

:::esempio{titolo="Effetto sull’equazione di una parabola"}
Per un’omotetia di centro l’origine e rapporto $2$, un punto immagine $(x,y)$ proviene da $(\dfrac{x}{2},\dfrac{y}{2})$. Sostituendo in $v=u^2$ si ha $\dfrac{y}{2}=\left(\dfrac{x}{2}\right)^2$, ossia $y=\dfrac{x^2}{2}$. Il punto $(1,1)$ si sposta in $(2,2)$, che verifica la nuova equazione. Il fattore $2$ moltiplica le coordinate dei punti. Dopo la sostituzione nell’equazione il coefficiente di $x^2$ vale invece $\dfrac12$.
:::

## Riconoscere le coniche senza termine misto

:::teorema{#riconoscimento titolo="Segni e casi degeneri"}
Consideriamo $Ax^2+Cy^2+Dx+Ey+F=0$, senza il termine misto $xy$. Se $A$ e $C$ sono entrambi diversi da zero, completando i quadrati si arriva a $A(x-h)^2+C(y-k)^2=R$. A questo punto contano i segni dei tre numeri $A,C,R$.

- Se $A$ e $C$ hanno lo stesso segno, si può rendere positivo il primo membro cambiando, se serve, il segno dell’intera equazione. Con $R>0$ si ottiene un’ellisse, circonferenza se $A=C$. Con $R=0$ rimane il solo punto $(h,k)$. Con $R<0$ il luogo è vuoto. In queste tre condizioni $R$ indica il valore dopo l’eventuale cambio di segno.
- Se $A$ e $C$ hanno segni opposti, con $R\ne0$ la divisione per $R$ dà un’iperbole. Il termine positivo dopo la divisione individua l’asse trasverso. Con $R=0$ il primo membro è una differenza di quadrati e si ottengono due rette incidenti.
- Se un solo coefficiente quadratico è diverso da zero, si controlla il termine lineare nell’altra variabile. Per esempio, con $A\ne0$ e $C=0$, un coefficiente $E\ne0$ dà una parabola perché si può isolare $y$. Se anche $E=0$, resta un’equazione di secondo grado nella sola variabile $x$. A seconda delle radici reali, il luogo è formato da due verticali, da una verticale o da nessun punto.

Se $A=C=0$, l’equazione è lineare nelle coordinate. Descrive una retta quando almeno uno tra $D,E$ è diverso da zero. Se entrambi sono nulli, descrive tutto il piano per $F=0$ o nessun punto per $F\ne0$.
:::

:::esempio{titolo="Una famiglia che cambia tipo"}
Nella famiglia $(x-1)^2-4(y+2)^2=t$, per $t>0$ il termine in $x$ è positivo dopo la divisione e l’iperbole ha asse trasverso orizzontale. Per $t<0$ è positivo il termine in $y$, quindi l’asse trasverso è verticale. Per $t=0$ si fattorizza e si trova
$$
\big(x-1-2(y+2)\big)\big(x-1+2(y+2)\big)=0 .
$$
Le due rette passano per $(1,-2)$ e hanno pendenze $\pm\dfrac12$. Sono anche le rette asintotiche dei membri della famiglia con $t\ne0$.
:::

## Completare i quadrati

:::teorema{#quadrati titolo="Dalla forma generale alle coordinate del centro"}
Prima di completare il quadrato, si raccoglie il coefficiente del termine quadratico. Per $A\ne0$ vale
$$
Ax^2+Dx=A\left(x+\frac{D}{2A}\right)^2-\frac{D^2}{4A}.
$$
Infatti il termine misto nello sviluppo del quadrato deve dare $Dx$. In modo analogo si tratta $Cy^2+Ey$ se $C\ne0$. Quando entrambi i quadrati sono presenti, il centro è $(-\dfrac{D}{2A},-\dfrac{E}{2C})$. Prima di dividere per il membro destro si calcola il valore effettivo di $R$, perché quel valore indica sia la scala degli assi sia l’eventuale degenerazione.
:::

:::esempio{titolo="Centro e semiassi di un’ellisse"}
Per $4x^2+9y^2-8x+36y+4=0$, si raccolgono $4$ e $9$ prima di aggiungere e sottrarre i termini necessari ai quadrati. Così i contributi costanti sono moltiplicati dagli stessi coefficienti.
$$
\begin{aligned}
4(x^2-2x)+9(y^2+4y)+4&=0\\
4\big((x-1)^2-1\big)+9\big((y+2)^2-4\big)+4&=0\\
4(x-1)^2+9(y+2)^2&=36\\
\frac{(x-1)^2}{9}+\frac{(y+2)^2}{4}&=1 .
\end{aligned}
$$
Il centro è $(1,-2)$. Le intersezioni con la retta orizzontale $y=-2$ sono a distanza $3$ dal centro, quelle con $x=1$ a distanza $2$. I semiassi sono dunque $3$ in orizzontale e $2$ in verticale.

::grafico{curve="1+3*cos(t),-2+2*sin(t),0,6.283185307" xmin=-4 xmax=6 ymin=-6 ymax=3 uguale=1 punti="1,-2,pieno,C;-2,-2;4,-2;1,-4;1,0" segmenti="-2,-2,4,-2;1,-4,1,0" legenda="\dfrac{(x-1)^2}{9}+\dfrac{(y+2)^2}{4}=1" titolo="I diametri orizzontale e verticale individuano i due semiassi."}

:::

:::esempio{titolo="Completare un solo quadrato"}
Nell’equazione $3x^2-12x+2y+8=0$, si completa soltanto il quadrato in $x$. La variabile $y$ rimane lineare, quindi può essere isolata.
$$
\begin{aligned}
3(x^2-4x)+2y+8&=0\\
3\big((x-2)^2-4\big)+2y+8&=0\\
2y&=4-3(x-2)^2\\
y&=2-\frac32(x-2)^2 .
\end{aligned}
$$
Il vertice è $(2,2)$ e la parabola si apre verso il basso. L’ascissa $2$ annulla il quadrato e dà quindi il valore più grande di $y$.
:::

## Intersezioni fra due curve

:::teorema{#intersezioni titolo="Punti comuni come soluzioni di un sistema"}
Un punto comune a due curve soddisfa entrambe le equazioni. Quando le due equazioni assegnano $y$ in funzione di $x$, si uguagliano le ordinate e poi si sostituiscono le ascisse ottenute in una delle due formule. Quando invece le equazioni sono implicite, si può eliminare un termine con la differenza o la somma, conservando l’altra equazione nel sistema. Le coordinate ottenute devono verificare entrambe le equazioni originarie.
:::

:::esempio{titolo="Due parabole con aperture opposte"}
Per $y=x^2$ e $y=2-x^2$, uguagliando le ordinate si trova $x^2=2-x^2$. Si ottiene $2x^2=2$, quindi $x=\pm1$. Sostituendo nella prima equazione, l’ordinata vale $1$ in entrambi i casi. I punti comuni sono $(-1,1)$ e $(1,1)$. Nel grafico, tra le due ascisse la parabola $y=2-x^2$ è sopra $y=x^2$, perché la differenza $2(1-x^2)$ è positiva per $|x|<1$.

::grafico{f="x^2;2-x^2" xmin=-2.5 xmax=2.5 ymin=-2 ymax=4 uguale=1 punti="-1,1,pieno,A;1,1,pieno,B" titolo="Le parabole si incontrano in $A=(-1,1)$ e $B=(1,1)$."}

:::

:::esempio{titolo="Eliminare i quadrati fra due circonferenze"}
Per $x^2+y^2=5$ e $(x-2)^2+y^2=5$, la seconda equazione si sviluppa in $x^2-4x+4+y^2=5$. Sottraendo la prima si ottiene $-4x+4=0$. Perciò ogni punto comune ha $x=1$. Sostituendo nella prima equazione resta $y^2=4$ e si ottengono $(1,2)$ e $(1,-2)$. La retta $x=1$ contiene entrambi i punti, ma il sistema impone anche la circonferenza e seleziona solo quelle due ordinate.
:::

## Tangenza e parametri

:::teorema{#tangenza titolo="Radice doppia e punto di contatto"}
Per cercare la tangente in una famiglia di rette si sostituisce la retta nell’equazione della conica. Se l’equazione per le intersezioni è di secondo grado e la conica è non degenere, una radice doppia individua il punto di tangenza. Si trovano i valori dei parametri imponendo $\Delta=0$ e si sostituisce la radice nell’equazione della retta. Questo sistema procura il punto di contatto oltre all’equazione della tangente.
:::

:::esempio{titolo="Tangente a una parabola con pendenza fissata"}
Per $y=x^2$ e $y=2x+q$, il sistema dà $x^2-2x-q=0$. Il coefficiente di $x^2$ è $1$ per ogni $q$, quindi si può usare il discriminante.
$$
\Delta=(-2)^2-4(1)(-q)=4+4q=0
\qquad\Longrightarrow\qquad q=-1.
$$
Con questo valore l’equazione diventa $(x-1)^2=0$. Il contatto è $(1,1)$ e la tangente è $y=2x-1$. Poiché $x^2-(2x-1)=(x-1)^2\geq0$, la parabola sta sopra la tangente e ha la stessa ordinata solo nel punto trovato.
:::

:::attenzione
La condizione $\Delta=0$ richiede che il coefficiente di secondo grado sia diverso da zero. Per $x^2-y^2=1$ e $y=x+1$, il termine quadratico si cancella, quindi resta $-2x-1=1$. La sola intersezione è $(-1,0)$, ma la retta ha pendenza $1$ ed è parallela a un asintoto. La tangente nel vertice è la verticale $x=-1$. Prima di contare le radici è quindi necessario stabilire il grado dell’equazione.
:::

## Luoghi geometrici e distanze

:::teorema{#luoghi titolo="Tradurre una condizione di distanza"}
Per ottenere un luogo geometrico si attribuiscono coordinate $(x,y)$ al punto variabile e si scrivono le distanze richieste. Se due lunghezze sono uguali, anche i loro quadrati lo sono. Viceversa, due lunghezze con quadrati uguali coincidono perché sono entrambe non negative. Questo permette di eliminare le radici nelle uguaglianze tra distanze senza introdurre punti estranei.
:::

:::esempio{titolo="Punti equidistanti da due punti fissi"}
Per $A=(-2,0)$ e $B=(4,0)$, da $PA=PB$ e dalla formula della distanza si ricava
$$
\begin{aligned}
(x+2)^2+y^2&=(x-4)^2+y^2\\
x^2+4x+4&=x^2-8x+16\\
12x&=12\\
x&=1 .
\end{aligned}
$$
I quadrati si cancellano perché compaiono con lo stesso coefficiente. Il luogo è una retta perpendicolare ad $AB$ nel punto medio $(1,0)$. Ogni punto di questa retta verifica l’uguaglianza dei quadrati e quindi anche quella delle distanze.
:::

:::esempio{titolo="Distanza da un punto e da una retta"}
I punti equidistanti da $F=(0,2)$ e dalla retta $y=-2$ soddisfano $\sqrt{x^2+(y-2)^2}=|y+2|$. Il valore assoluto misura la distanza dalla retta anche per i punti sotto di essa. Elevando al quadrato si trova
$$
\begin{aligned}
x^2+(y-2)^2&=(y+2)^2\\
x^2+y^2-4y+4&=y^2+4y+4\\
x^2&=8y .
\end{aligned}
$$
Si ottiene la parabola di vertice $(0,0)$ e asse verticale. Il punto $(4,2)$ appartiene alla curva. Dista $4$ sia dal fuoco sia dalla direttrice, come richiede il luogo geometrico.

::grafico{f="x^2/8;-2" xmin=-6 xmax=6 ymin=-4 ymax=6 uguale=1 punti="0,0,pieno,V;0,2,pieno,F;4,2,pieno,P;4,-2,pieno,H" segmenti="0,2,4,2;4,2,4,-2" legenda="y=\dfrac{x^2}{8};y=-2" titolo="I segmenti $FP$ e $PH$ hanno entrambi lunghezza $4$."}

:::
