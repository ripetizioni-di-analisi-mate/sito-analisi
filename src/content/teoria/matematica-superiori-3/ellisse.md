---
titolo: Ellisse
sommario: Dalla somma delle distanze dai fuochi all’equazione dell’ellisse, con esempi su eccentricità, traslazioni, intersezioni e tangenti.
---

## Somma delle distanze dai fuochi

:::definizione{#definizione titolo="Il luogo geometrico"}
Fissati due punti $F_1$ e $F_2$, detti **fuochi**, sia $2c$ la distanza tra loro. L’ellisse è il luogo dei punti $P$ per i quali
$$
PF_1+PF_2=2a,\qquad a>c\geq0 .
$$
La costante $2a$ supera $2c$ perché, per la disuguaglianza triangolare, la somma delle distanze vale almeno $F_1F_2$. Nel caso $a=c>0$ si ottiene soltanto il segmento tra i fuochi. Se $c=0$ e $a>0$, i due fuochi coincidono e l’uguaglianza diventa $2PF_1=2a$. Si ottiene così una circonferenza di raggio $a$.
:::

:::esempio{titolo="Punti diversi con la stessa somma"}
Siano $F_1(-4,0)$, $F_2(4,0)$ e $2a=10$. Per $P(0,3)$ le distanze sono entrambe $\sqrt{4^2+3^2}=5$. Per $Q(5,0)$ le distanze sono $9$ e $1$. I due punti appartengono quindi alla stessa ellisse, sebbene solo $P$ sia equidistante dai fuochi. Muovendosi lungo la curva, le singole distanze possono variare mentre la loro somma resta $10$.

::grafico{curve="5*cos(t),3*sin(t),0,6.283185307" xmin=-6 xmax=6 ymin=-4 ymax=4 uguale=1 punti="-4,0,pieno,F_1;4,0,pieno,F_2;0,3,pieno,P;5,0,pieno,Q" segmenti="0,3,-4,0;0,3,4,0" legenda="\dfrac{x^2}{25}+\dfrac{y^2}{9}=1" titolo="Per $P$ si ha $PF_1+PF_2=5+5$, mentre per $Q$ si ha $QF_1+QF_2=9+1$."}

:::

:::teorema{#distanze-focali titolo="Quanto può variare la distanza da un fuoco"}
Siano $d_1$ e $d_2$ le distanze di un punto dell’ellisse dai fuochi. Applicando la disuguaglianza triangolare nei due sensi si ha $|d_1-d_2|\leq 2c$. Si conosce anche la somma $d_1+d_2=2a$. Sommando le due relazioni per ricavare $2d_1$, si ottiene
$$
-2c\leq d_1-d_2\leq 2c
\quad\Longrightarrow\quad a-c\leq d_1\leq a+c .
$$
Lo stesso intervallo vale per $d_2$. Per un fuoco fissato, il valore minore si raggiunge al vertice che sta dalla stessa parte del centro. Il valore maggiore si raggiunge al vertice opposto, dove il centro è tra il fuoco e il vertice.
:::

:::esempio{titolo="Una somma giusta può dare distanze impossibili"}
Per $a=6$ e $c=4$, una coppia di distanze $11$ e $1$ ha somma $12$, come richiesto. Tuttavia ogni distanza deve stare fra $a-c=2$ e $a+c=10$. Infatti se un punto distasse $1$ da un fuoco, la sua distanza dall’altro non potrebbe superare $1+8=9$. La coppia $9$ e $3$ ha invece somma $12$ e differenza $6<8$. Si può costruire un triangolo di lati $3$, $8$ e $9$ e scegliere come lato di lunghezza $8$ il segmento tra i fuochi, ottenendo così un punto dell’ellisse.
:::

## Equazione canonica e assi

::::teorema{#assi titolo="Dai fuochi ai semiassi"}
Siano $F_1(-c,0)$ e $F_2(c,0)$ i fuochi, con $a>c>0$. Ponendo $b=\sqrt{a^2-c^2}$, la condizione $PF_1+PF_2=2a$ equivale a
$$
\frac{x^2}{a^2}+\frac{y^2}{b^2}=1 .
$$
Il centro è l’origine. Le intersezioni con l’asse $x$ sono $(\pm a,0)$ e quelle con l’asse $y$ sono $(0,\pm b)$. Poiché $a>b$, i segmenti tra i due estremi orizzontali e tra i due estremi verticali sono rispettivamente l’**asse maggiore** e l’**asse minore**, di lunghezza $2a$ e $2b$.

:::dimostrazione
Indichiamo con $d_1$ e $d_2$ le distanze di $P(x,y)$ da $F_1$ e $F_2$. Le differenze dei quadrati delle distanze eliminano $y^2$.
$$
\begin{aligned}
d_1^2-d_2^2&=(x+c)^2-(x-c)^2=4cx,\\
(d_1-d_2)(d_1+d_2)&=4cx.
\end{aligned}
$$
Se $d_1+d_2=2a$, allora $d_1-d_2=\dfrac{2cx}{a}$, quindi $d_1=a+\dfrac{cx}{a}$. Imponendo il quadrato di questa distanza si ottiene
$$
\begin{aligned}
(x+c)^2+y^2&=\left(a+\frac{cx}{a}\right)^2,\\[4pt]
\left(1-\frac{c^2}{a^2}\right)x^2+y^2&=a^2-c^2,\\[4pt]
\frac{x^2}{a^2}+\frac{y^2}{a^2-c^2}&=1.
\end{aligned}
$$
Viceversa, dall’ultima equazione segue $|x|\leq a$. Sostituendola nelle formule di $d_1^2$ e $d_2^2$ si ricavano $(a+\dfrac{cx}{a})^2$ e $(a-\dfrac{cx}{a})^2$. Entrambe le basi sono positive, perché $\left|\dfrac{cx}{a}\right|\leq c<a$. Le distanze sono dunque $a+\dfrac{cx}{a}$ e $a-\dfrac{cx}{a}$, di somma $2a$. Il controllo del segno assicura l’equivalenza con la condizione iniziale.
:::
::::

:::esempio{titolo="Intersezioni, lunghezza degli assi e simmetrie"}
Per $\dfrac{x^2}{25}+\dfrac{y^2}{9}=1$, ponendo $y=0$ si ha $x^2=25$, quindi $x=\pm5$. Ponendo $x=0$ si ottiene $y=\pm3$. L’asse maggiore misura $10$, quello minore $6$. Poiché le coordinate compaiono al quadrato, cambiare il segno di una sola coordinata conserva l’equazione. La curva è quindi simmetrica rispetto a entrambi gli assi e, cambiando entrambi i segni, rispetto al centro.
:::

## Orientazione e posizione dei fuochi

:::teorema{#fuochi titolo="Il denominatore maggiore indica i fuochi"}
In un’ellisse canonica con denominatori positivi e diversi, il semiasse maggiore $a$ è la radice del denominatore maggiore. Il semiasse minore $b$ è la radice dell’altro denominatore. I fuochi sono sull’asse maggiore a distanza $c=\sqrt{a^2-b^2}$ dal centro. Se il denominatore maggiore è sotto $x^2$, i fuochi sono $(\pm c,0)$. Se è sotto $y^2$, per scambio delle coordinate i fuochi sono $(0,\pm c)$. In entrambi i casi la somma focale è $2a$.
:::

:::esempio{titolo="Asse maggiore verticale"}
Nell’ellisse $\dfrac{x^2}{9}+\dfrac{y^2}{25}=1$ l’asse maggiore è verticale, perché $25>9$ e $25$ è sotto $y^2$. Si ha quindi $a=5$, $b=3$ e $c=\sqrt{25-9}=4$. I vertici principali sono $(0,\pm5)$ e i fuochi $(0,\pm4)$. Al vertice $(0,5)$ le distanze dai fuochi sono $1$ e $9$, quindi la somma è $10$.
:::

:::attenzione
La lettera $a$ indica qui il **semiasse maggiore**. Nell’equazione $\dfrac{x^2}{9}+\dfrac{y^2}{25}=1$ il semiasse orizzontale misura $3$, mentre $a=5$. Per scegliere l’asse dei fuochi si confrontano i due denominatori e si guarda sotto quale quadrato compare il maggiore.
:::

## Eccentricità e forma

:::definizione{#eccentricita titolo="Eccentricità"}
L’**eccentricità** è il rapporto $e=\dfrac{c}{a}$. Si ha $0\leq e<1$ perché $0\leq c<a$. Poiché $c=ae$ e $b^2=a^2-c^2$, si ricava
$$
b=a\sqrt{1-e^2}.
$$
A semiasse maggiore fissato, aumentando $e$ diminuisce $b$ e la curva diventa più allungata lungo l’asse maggiore. Il caso $e=0$ dà $b=a$ e i due fuochi coincidono.
:::

:::esempio{titolo="Due ellissi con la stessa larghezza"}
Due ellissi orizzontali con $a=5$ hanno rispettivamente eccentricità $\dfrac35$ e $\dfrac45$. Nel primo caso $c=3$, quindi $b=\sqrt{25-9}=4$. Nel secondo $c=4$, quindi $b=\sqrt{25-16}=3$. Entrambe hanno larghezza $10$, ma le altezze sono rispettivamente $8$ e $6$. L’ellisse con eccentricità maggiore ha i fuochi più lontani dal centro ed è più bassa.

::grafico{curve="5*cos(t),4*sin(t),0,6.283185307;5*cos(t),3*sin(t),0,6.283185307" xmin=-6 xmax=6 ymin=-5 ymax=5 uguale=1 punti="-5,0;5,0;0,4;0,3" legenda="e=\dfrac{3}{5};e=\dfrac{4}{5}" titolo="A larghezza fissata, l’eccentricità maggiore corrisponde al semiasse verticale minore."}

:::

## Appartenenza, coordinate e intersezioni

:::teorema{#punti titolo="Ricavare una coordinata"}
Per l’ellisse $\dfrac{x^2}{a^2}+\dfrac{y^2}{b^2}=1$ con $a>b>0$, fissata l’ascissa $x=t$ le ordinate soddisfano
$$
y=\pm b\sqrt{1-\frac{t^2}{a^2}},\qquad |t|\leq a .
$$
Se $|t|<a$, si ottengono un punto sopra e uno sotto l’asse $x$. Agli estremi $t=\pm a$ l’ordinata è $0$ e il punto è unico. Fuori dall’intervallo $[-a,a]$ il radicando è negativo. L’ellisse completa quindi comprende, per molte ascisse, due ordinate diverse. Le due semicurve sono invece grafici separati di funzioni.
:::

:::esempio{titolo="Due ordinate e appartenenza"}
Per $\dfrac{x^2}{25}+\dfrac{y^2}{9}=1$ e $x=3$ si ottiene
$$
\begin{aligned}
\frac{y^2}{9}&=1-\frac{9}{25}=\frac{16}{25},\\[4pt]
y&=\pm\frac{12}{5}.
\end{aligned}
$$
La retta $x=3$ è dunque secante. Nella stessa verticale, $(3,0)$ è interno alla regione delimitata dall’ellisse, perché la somma dei due rapporti è $\dfrac{9}{25}<1$. Per $(3,3)$ la somma è $\dfrac9{25}+1>1$, quindi il punto è esterno. Il confronto con $1$ funziona perché la trasformazione che divide le coordinate per $a$ e $b$ porta l’ellisse nella circonferenza unitaria.
:::

:::esempio{titolo="Dal profilo di un arco alla quota utile"}
Un arco con luce di $8\,\mathrm m$ e altezza massima di $3\,\mathrm m$ ha il profilo della metà superiore di un’ellisse. Poniamo l’origine al centro della base e misuriamo le coordinate in metri. La luce è la distanza tra gli estremi della base, quindi il semiasse orizzontale misura $4\,\mathrm m$. Il semiasse verticale misura $3\,\mathrm m$. Per trovare la larghezza disponibile alla quota $2\,\mathrm m$, si interseca la curva con $y=2$.
$$
\begin{aligned}
\frac{x^2}{16}+\frac{4}{9}&=1,\\[4pt]
x^2&=\frac{80}{9},\\[4pt]
x&=\pm\frac{4\sqrt5}{3}.
\end{aligned}
$$
Le intersezioni stanno alla stessa distanza orizzontale dal centro e hanno ascisse opposte. La larghezza alla quota data è quindi la differenza delle ascisse, $\dfrac{8\sqrt5}{3}\,\mathrm m$. Questa misura è minore della luce alla base, perché il taglio si trova a quota positiva.
:::

## Ellissi traslate

:::teorema{#traslata titolo="Coordinate misurate dal centro"}
Con centro $C(h,k)$ e semiassi paralleli agli assi cartesiani si misurano le differenze $X=x-h$ e $Y=y-k$. Se l’asse maggiore è orizzontale, l’equazione canonica in $X,Y$ diventa
$$
\frac{(x-h)^2}{a^2}+\frac{(y-k)^2}{b^2}=1,\qquad a>b>0 .
$$
Si ottengono i vertici principali $(h\pm a,k)$ e i fuochi $(h\pm c,k)$. Se l’asse maggiore è verticale, $a^2$ compare sotto $(y-k)^2$, i vertici principali sono $(h,k\pm a)$ e i fuochi $(h,k\pm c)$. La traslazione cambia le coordinate ma conserva lunghezze e orientazione degli assi.
:::

:::esempio{titolo="Dalle coordinate relative a quelle del piano"}
Per $\dfrac{(x-2)^2}{25}+\dfrac{(y+1)^2}{9}=1$ il centro è $(2,-1)$. L’asse maggiore è orizzontale e $c=\sqrt{25-9}=4$. I fuochi sono quindi $(-2,-1)$ e $(6,-1)$, mentre gli estremi dell’asse maggiore sono $(-3,-1)$ e $(7,-1)$. Il fuoco di destra ha ascissa $6$, inferiore a $7$, perché $c<a$. Gli estremi dell’asse minore si ottengono tenendo $x=2$ e ponendo $y=-1\pm3$.

::grafico{curve="2+5*cos(t),-1+3*sin(t),0,6.283185307" xmin=-4 xmax=8 ymin=-5 ymax=3 uguale=1 punti="2,-1,pieno,C;-2,-1,pieno,F_1;6,-1,pieno,F_2;-3,-1;7,-1;2,2;2,-4" segmenti="-3,-1,7,-1;2,-4,2,2" legenda="\dfrac{(x-2)^2}{25}+\dfrac{(y+1)^2}{9}=1" titolo="Sia i fuochi sia i vertici principali hanno l’ordinata del centro $C$."}

:::

## Dati geometrici ed equazioni

:::esempio{#ricostruzione titolo="Centro, vertice e fuoco"}
Un’ellisse centrata nell’origine ha vertice principale $(5,0)$ e fuoco $(3,0)$. Il primo dato fornisce $a=5$ e il secondo $c=3$. Poiché $0<c<a$, si può ottenere un semiasse minore positivo. Si ricava $b^2=25-9=16$ e l’equazione è
$$
\frac{x^2}{25}+\frac{y^2}{16}=1 .
$$
Al vertice $(5,0)$ le distanze da $(3,0)$ e $(-3,0)$ sono $2$ e $8$, con somma $10$, come richiesto dalla definizione.
:::

:::esempio{titolo="Fuochi verticali e somma nota"}
Siano dati i fuochi $(1,-1)$ e $(1,5)$ e la somma focale $10$. Il punto medio dei fuochi è il centro $(1,2)$. La semidistanza focale è $3$ e il semiasse maggiore è $5$, quindi $b^2=25-9=16$. Poiché la direzione dei fuochi è verticale, si ottiene
$$
\frac{(x-1)^2}{16}+\frac{(y-2)^2}{25}=1 .
$$
Nella ricostruzione si usano due metà diverse. Il valore $3$ è la metà della distanza tra i fuochi, mentre $5$ è la metà della somma delle distanze da un punto sulla curva ai due fuochi.
:::

:::osservazione
Per riconoscere un’ellisse da un’equazione come $4x^2+9y^2=36$, si porta il membro destro a $1$ dividendo per $36$. Si ottiene $\dfrac{x^2}{9}+\dfrac{y^2}{4}=1$. Il coefficiente $4$ davanti a $x^2$ era il più piccolo, mentre il denominatore $9$ sotto $x^2$ è il più grande. Per la stessa ragione, un’equazione in cui manca la normalizzazione può far invertire l’asse maggiore e quello minore.
:::

:::esempio{titolo="Due punti fuori dagli assi"}
Un’ellisse centrata nell’origine, con assi paralleli a quelli cartesiani, passa per $P(4,3)$ e $Q(2,4)$. Le incognite sono i denominatori $A$ e $B$ dei termini in $x^2$ e $y^2$. Per ottenere un sistema lineare si pongono $u=\dfrac1A$ e $v=\dfrac1B$. Le due condizioni di appartenenza sono
$$
\begin{cases}
16u+9v=1,\\
4u+16v=1 .
\end{cases}
$$
Sottraendo la seconda equazione dalla prima si ha $12u=7v$. Sostituendo $u=\dfrac7{12}v$ nella seconda si ottiene
$$
\begin{aligned}
\left(\frac73+16\right)v&=1,\\[4pt]
v&=\frac3{55},\qquad u=\frac7{220}.
\end{aligned}
$$
Entrambi i valori sono positivi, quindi le due lunghezze dei semiassi sono reali e positive. L’equazione è $\dfrac{7x^2}{220}+\dfrac{3y^2}{55}=1$. Poiché $u<v$, il denominatore $A=\dfrac1u$ è maggiore di $B=\dfrac1v$ e l’asse maggiore è orizzontale. Se il sistema avesse dato una delle due incognite negativa, i due punti non avrebbero identificato un’ellisse di questo tipo.
:::

## Tangenti e rette secanti

::::teorema{#tangenti titolo="La tangente in un punto dell’ellisse"}
Siano $a,b>0$ e $P_0(x_0,y_0)$ un punto di $\dfrac{x^2}{a^2}+\dfrac{y^2}{b^2}=1$. La tangente in $P_0$ è
$$
\frac{xx_0}{a^2}+\frac{yy_0}{b^2}=1 .
$$
Per $P_0=(a,0)$ si ottiene $x=a$, mentre per $P_0=(0,b)$ si ottiene $y=b$. La stessa formula tratta quindi anche le tangenti verticali.

:::dimostrazione
Poniamo $u=\dfrac xa$ e $v=\dfrac yb$. La trasformazione è invertibile perché entrambi i semiassi sono positivi e porta l’ellisse nella circonferenza $u^2+v^2=1$. Il punto $P_0$ va in $\left(\dfrac{x_0}{a},\dfrac{y_0}{b}\right)$. La tangente alla circonferenza in quel punto ha equazione $\dfrac{x_0}{a}u+\dfrac{y_0}{b}v=1$. Sostituendo di nuovo $u$ e $v$ si ottiene l’equazione cercata. La trasformazione manda rette in rette e conserva il numero di punti comuni. Quindi la retta così trovata incontra l’ellisse soltanto nel punto assegnato.
:::
::::

:::esempio{titolo="Tangente fuori dagli assi"}
Per $\dfrac{x^2}{25}+\dfrac{y^2}{9}=1$ e $P_0\left(3,\dfrac{12}{5}\right)$ si verifica l’appartenenza con $\dfrac9{25}+\dfrac{16}{25}=1$. Applicando l’equazione della tangente si ottiene
$$
\begin{aligned}
\frac{3x}{25}+\frac{4y}{15}&=1,\\
9x+20y&=75.
\end{aligned}
$$
A differenza della circonferenza, in questo caso la tangente non è perpendicolare al segmento tra il centro e $P_0$. Infatti i coefficienti della retta sono proporzionali a $\left(\dfrac{x_0}{a^2},\dfrac{y_0}{b^2}\right)$, che in generale ha direzione diversa da $(x_0,y_0)$.

::grafico{f="(75-9*x)/20" curve="5*cos(t),3*sin(t),0,6.283185307" xmin=-6 xmax=7 ymin=-4 ymax=6 uguale=1 punti="3,2.4,pieno,P" legenda="9x+20y=75;\dfrac{x^2}{25}+\dfrac{y^2}{9}=1" titolo="La retta con equazione $9x+20y=75$ è tangente in $P$."}

:::

:::osservazione
Se è assegnata una retta $y=mx+q$ e si cerca la sua posizione rispetto all’ellisse, si sostituisce l’intera espressione $mx+q$ al posto di $y$. Il coefficiente di $x^2$ è $\dfrac1{a^2}+\dfrac{m^2}{b^2}>0$. Quindi il discriminante classifica i casi di due punti, un punto o nessun punto. Per una verticale $x=t$, basta confrontare $|t|$ con il semiasse orizzontale. Il caso di uguaglianza dà la tangenza.
:::
