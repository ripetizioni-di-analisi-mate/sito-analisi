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

:::esempio{titolo="Traslazione ricavata da un vertice"}
Le parabole $y=2x^2$ e $y=2(x+3)^2-4$ hanno lo stesso coefficiente del quadrato e vertici rispettivamente $(0,0)$ e $(-3,-4)$. Il vettore che collega i vertici è $(-3,-4)$, quindi si può ottenere la seconda traslando la prima di quel vettore. Si verifica la traslazione anche su un punto diverso dal vertice. Dal punto $P=(1,2)$ si ricava $P'=(-2,-2)$ e nell’equazione immagine si trova $2(-2+3)^2-4=-2$. Il segno positivo in $x+3$ indica che per risalire all’ascissa originaria si sommano $3$ unità. Sul piano, invece, il punto si è mosso di $3$ unità a sinistra. Il coefficiente $2$ misura la variazione di ordinata a distanza orizzontale unitaria dal vertice e resta lo stesso in entrambe.

::grafico{f="2*x^2;2*(x+3)^2-4" xmin=-5 xmax=3 ymin=-5 ymax=6 uguale=1 punti="0,0,pieno,V;-3,-4,pieno,V';1,2,pieno,P;-2,-2,pieno,P'" vettori="0,0,-3,-4;1,2,-2,-2" titolo="Il vertice $V$ e il punto $P$ si spostano entrambi di tre unità a sinistra e quattro in basso."}
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

::::teorema{titolo="Comporre riflessione e traslazione"}
Riflettere rispetto all’asse $x$ e poi traslare di $(0,k)$ produce la riflessione rispetto alla retta $y=\dfrac k2$. Se si inverte l’ordine, la retta di riflessione è $y=-\dfrac k2$. Le due trasformazioni coincidono per $k=0$.

:::dimostrazione
L’ascissa resta la stessa in entrambe le operazioni. Se la riflessione viene eseguita per prima, l’ordinata finale è $-y+k$ e il punto medio tra quella iniziale e quella finale ha quota $\dfrac{y-y+k}{2}=\dfrac k2$. I due punti sono sulla stessa verticale e quindi sono simmetrici rispetto a quella retta orizzontale. Nell’ordine inverso l’ordinata finale è $-(y+k)$, quindi il punto medio ha quota $-\dfrac k2$.
:::
::::

:::esempio
Con $P=(1,2)$ e $k=4$, riflettendo prima si ottiene $(1,-2)$, che la traslazione rimanda a $(1,2)$. Il punto di partenza sta dunque sulla retta $y=\dfrac42=2$, dove la riflessione composta lascia fissi i punti. Traslando prima si ottiene invece $(1,6)$, e poi $(1,-6)$. La media delle ordinate $2$ e $-6$ è $-2$, in accordo con la seconda retta di riflessione.
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

::::teorema{titolo="Omotetia inversa e controllo del centro"}
Per un’omotetia di centro $C$ e rapporto $\lambda\ne0$, l’inversa ha lo stesso centro e rapporto $\dfrac1\lambda$. La regola permette di risalire da un punto immagine a quello di partenza e di scrivere l’equazione immagine di un luogo.

:::dimostrazione
Per definizione $\overrightarrow{CP'}=\lambda\overrightarrow{CP}$. Si divide per $\lambda$, che è diverso da zero, e si ottiene $\overrightarrow{CP}=\dfrac1\lambda\overrightarrow{CP'}$. Se si applicano in successione rapporti $\lambda$ e $\mu$ dallo stesso centro, il vettore relativo al centro è moltiplicato per $\mu\lambda$. Il caso $\mu=\dfrac1\lambda$ restituisce quindi il vettore iniziale.
:::
::::

:::esempio
Per $C=(1,1)$, $\lambda=2$ e $P'=(7,5)$, il vettore da $C$ a $P'$ è $(6,4)$. Dimezzandolo si trova $(3,2)$, perciò il punto iniziale è $P=(4,3)$. Si verifica perché $P-C=(3,2)$ e raddoppiare quel vettore riporta a $P'$. Dimezzare direttamente $(7,5)$ sceglierebbe l’origine come centro. Il disegno permette di controllare l’ordine dei punti nel caso di rapporto positivo maggiore di $1$. Il punto $P$ è fra $C$ e $P'$.

::grafico{xmin=-1 xmax=9 ymin=-1 ymax=7 uguale=1 punti="1,1,pieno,C;4,3,pieno,P;7,5,pieno,P'" segmenti="1,1,7,5" titolo="Il vettore da $C$ a $P'$ è due volte quello da $C$ a $P$."}
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

:::esempio{titolo="Una famiglia con due rette parallele"}
Nella famiglia $x^2-4x+3+ty=0$ l’unico termine quadratico è quello in $x$. Se $t\ne0$, la variabile $y$ si può isolare, quindi la forma ottenuta è una parabola. Se $t=0$, l’equazione si riduce a un vincolo sulla sola ascissa.

$$
\begin{aligned}
(x-2)^2-1+ty&=0\\
ty&=1-(x-2)^2 .
\end{aligned}
$$

Per $t\ne0$ il vertice è $\left(2,\dfrac1t\right)$. La parabola si apre verso il basso quando $t>0$ e verso l’alto quando $t<0$. Per $t=0$ resta $(x-2)^2=1$, quindi $x=1$ oppure $x=3$ a ogni ordinata. I due membri $t=1$ e $t=-1$ sono simmetrici rispetto all’asse $x$ e lo intersecano negli stessi due punti. Le verticali del caso $t=0$ passano esattamente per quei due punti.

::grafico{f="1-(x-2)^2;(x-2)^2-1" xmin=-1 xmax=5 ymin=-5 ymax=5 uguale=1 segmenti="1,-4,1,4;3,-4,3,4" punti="1,0;3,0;2,1;2,-1" legenda="y=1-(x-2)^2;y=(x-2)^2-1" titolo="Le due parabole corrispondono a $t=1$ e $t=-1$. Per $t=0$ il luogo è formato dalle due verticali tratteggiate."}
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

:::esempio{titolo="Il secondo membro decide se esiste la curva"}
Nella famiglia $x^2+y^2-4x+2y+t=0$, le due compensazioni del completamento sono $-4$ e $-1$. Quindi si ottiene $(x-2)^2+(y+1)^2=5-t$. La coppia $(2,-1)$ annulla entrambi i quadrati per ogni valore del parametro e rappresenta il centro nei casi in cui esiste una circonferenza. Per $t=1$ il secondo membro è $4$ e il raggio è $2$. Per $t=4$ è $1$, quindi il raggio si dimezza. Con $t=5$ rimane soltanto il punto $(2,-1)$ e per $t=6$ l’uguaglianza richiede una somma di quadrati negativa. Questo esempio mostra perché conviene completare i quadrati prima di dividere per il secondo membro. Per $t=5$ si tenterebbe una divisione per zero e si perderebbe proprio il caso del punto isolato.
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

:::esempio{titolo="Intersezioni fra circonferenza e iperbole"}
Cerchiamo i punti comuni a $x^2+y^2=5$ e $x^2-y^2=3$. Le equazioni hanno gli stessi termini quadratici, con segno opposto per quello in $y$. La somma e la differenza consentono di determinare i quadrati delle coordinate separatamente.
$$
\begin{aligned}
2x^2&=5+3=8,\qquad x^2=4,\\
2y^2&=5-3=2,\qquad y^2=1 .
\end{aligned}
$$
L’ascissa può essere $-2$ oppure $2$ e l’ordinata $-1$ oppure $1$. I segni sono indipendenti, perché sostituendo ciascuna coppia le equazioni restituiscono sempre $4+1=5$ e $4-1=3$. Ci sono quindi quattro intersezioni, due per ogni ramo dell’iperbole. Tenere soltanto le coppie con segni concordi scarterebbe $(2,-1)$ e $(-2,1)$, che soddisfano le stesse due condizioni. Il disegno permette di controllare il conteggio sfruttando la simmetria rispetto a entrambi gli assi.

::grafico{f="sqrt(x^2-3);-sqrt(x^2-3)" curve="sqrt(5)*cos(t),sqrt(5)*sin(t),0,6.283185307" xmin=-3.5 xmax=3.5 ymin=-3.5 ymax=3.5 uguale=1 punti="-2,1,pieno,A;2,1,pieno,B;-2,-1,pieno,C;2,-1,pieno,D" legenda="y=\sqrt{x^2-3};y=-\sqrt{x^2-3};x^2+y^2=5" titolo="I quattro punti comuni formano un rettangolo con lati paralleli agli assi."}
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

::::teorema{titolo="Tangenza a una parabola per completamento del quadrato"}
Per la parabola $y=x^2$ e una pendenza fissata $m$, la tangente è $y=mx-\dfrac{m^2}{4}$ e tocca la curva all’ascissa $\dfrac m2$. La formula permette di trovare la retta anche senza calcolare il discriminante.

:::dimostrazione
La differenza fra le ordinate di $y=x^2$ e $y=mx+q$ si può scrivere
$$
x^2-mx-q=\left(x-\frac m2\right)^2-\left(q+\frac{m^2}{4}\right).
$$
Un solo punto comune con radice doppia si ottiene quando il termine sottratto al quadrato è zero. Quindi $q=-\dfrac{m^2}{4}$ e la radice è $x=\dfrac m2$. Per un valore positivo di $q+\dfrac{m^2}{4}$ il quadrato ha due radici distinte. Per un valore negativo la differenza delle ordinate rimane positiva e la retta resta sempre sotto la parabola.
:::
::::

:::esempio
Per $m=2$, la retta tangente è $y=2x-1$. Alzando l’intercetta da $-1$ a $0$ si ottengono $(0,0)$ e $(2,4)$. Abbassandola da $-1$ a $-2$ non si ottengono punti comuni perché il quadrato $(x-1)^2$ dovrebbe valere $-1$. Le tre rette sono parallele, quindi a decidere il numero di intersezioni è soltanto il loro spostamento verticale.

::grafico{f="x^2;2*x-1;2*x" xmin=-2 xmax=3.5 ymin=-3 ymax=6 uguale=1 punti="1,1,pieno,T;0,0;2,4" segmenti="-0.5,-3,3.5,5" legenda="y=x^2;y=2x-1;y=2x" titolo="La tangente passa per $T=(1,1)$. La parallela superiore è secante, la parallela inferiore tratteggiata non incontra la curva."}
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

:::esempio{titolo="Equidistanza da due rette parallele"}
Siano $r$ e $s$ le rette $y=1$ e $y=5$. Un punto $P=(x,y)$ ha distanze $|y-1|$ e $|y-5|$, perché i segmenti perpendicolari alle rette sono verticali. Poiché le distanze sono non negative, l’uguaglianza si può elevare al quadrato senza cambiare le soluzioni.
$$
\begin{aligned}
(y-1)^2&=(y-5)^2\\
y^2-2y+1&=y^2-10y+25\\
8y&=24\\
y&=3 .
\end{aligned}
$$
L’ascissa resta libera, quindi si ottiene l’intera retta orizzontale intermedia. Un punto di quella retta dista infatti $2$ unità da ciascuna. Lo stesso ragionamento vale per due rette orizzontali distinte $y=u$ e $y=v$, sostituendo le costanti. L’ordinata del luogo è sempre $\dfrac{u+v}{2}$. Per due rette verticali distinte vale la relazione corrispondente tra le ascisse.
:::
