---
titolo: Piano cartesiano e retta
sommario: Dalle coordinate dei punti alle equazioni delle rette, alle intersezioni e alle distanze perpendicolari.
---

## Posizione e distanza di due punti

:::definizione{#coordinate titolo="Ascissa, ordinata e spostamenti"}
Il punto $P(x,y)$ si individua con l'**ascissa** $x$, letta sull'asse orizzontale, e l'**ordinata** $y$, letta sull'asse verticale. Per passare da $A(x_1,y_1)$ a $B(x_2,y_2)$ gli spostamenti sono $\Delta x=x_2-x_1$ e $\Delta y=y_2-y_1$. Se $\Delta x<0$ ci si muove verso sinistra. Se $\Delta y<0$ ci si muove verso il basso. Gli spostamenti possono essere negativi, mentre le lunghezze dei segmenti sono non negative.
:::

::::teorema{#distanza titolo="Distanza tra due punti"}
In un piano cartesiano con assi perpendicolari e la stessa unità sui due assi, la distanza tra $A(x_1,y_1)$ e $B(x_2,y_2)$ è
$$
AB=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}.
$$

:::dimostrazione
Si introduce $C(x_2,y_1)$, così $AC$ è orizzontale e $CB$ è verticale. Quando entrambi gli spostamenti sono diversi da zero, le lunghezze dei cateti sono $|\Delta x|$ e $|\Delta y|$. Per il teorema di Pitagora, $AB^2=|\Delta x|^2+|\Delta y|^2$, da cui segue la formula. Se uno spostamento è zero, la stessa espressione dà il valore assoluto dell'altro. Se sono entrambi zero, i due punti coincidono e la distanza è zero.
:::
::::

:::esempio{titolo="Una differenza negativa in una distanza"}
Per $A(-2,3)$ e $B(1,-1)$, gli spostamenti sono $1-(-2)=3$ e $-1-3=-4$. Il primo cateto è lungo $3$ e il secondo è lungo $4$. Si ottiene $AB=\sqrt{3^2+(-4)^2}=5$.

::grafico{segmenti="-2,3,1,3;1,3,1,-1" linee="-2,3 1,-1" punti="-2,3,pieno,A;1,-1,pieno,B;1,3,pieno,C" etichette="-0.8,3.4,3;1.2,0.9,4" xmin=-4 xmax=4 ymin=-3 ymax=5 uguale=1 titolo="Gli spostamenti sono $3$ e $-4$, mentre i cateti misurano $3$ e $4$."}

:::

## Punti medi e simmetria centrale

::::teorema{#medio titolo="Metà dello spostamento"}
Il **punto medio** $M$ di $AB$ ha coordinate
$$
M\left(\frac{x_1+x_2}{2},\frac{y_1+y_2}{2}\right).
$$

:::dimostrazione
Muoversi da $A$ verso $B$ lungo il segmento significa percorrere la stessa frazione di spostamento orizzontale e verticale. In $M$ si percorre la metà di entrambi, quindi
$$
\begin{aligned}
x_M&=x_1+\frac{x_2-x_1}{2}=\frac{x_1+x_2}{2},\\[4pt]
y_M&=y_1+\frac{y_2-y_1}{2}=\frac{y_1+y_2}{2}.
\end{aligned}
$$
In questo modo gli spostamenti da $A$ a $M$ e da $M$ a $B$ sono uguali in entrambe le coordinate.
:::
::::

:::esempio{titolo="Ricostruire l'estremo dalla metà del segmento"}
Per $A(-2,1)$ e $B(4,5)$, le medie danno $M(1,3)$. Se si conoscono invece $A(-2,1)$ e $M(1,3)$, il passaggio da $A$ a $M$ aggiunge $3$ all'ascissa e $2$ all'ordinata. Ripetendo lo spostamento si ricava $B(4,5)$. Algebricamente si risolvono $x_B=2x_M-x_A$ e $y_B=2y_M-y_A$. I punti $A$ e $B$ sono uno il simmetrico dell'altro rispetto al centro $M$.
:::

## Equazioni delle rette

:::definizione{#equazione titolo="Forma implicita, pendenza e intercetta"}
L'equazione **implicita** di una retta è $ax+by+c=0$, con almeno uno fra $a$ e $b$ diverso da zero. Un punto appartiene alla retta quando le sue coordinate soddisfano l'equazione. Se $b\neq0$, isolando $y$ si ottiene la **forma esplicita**
$$
y=mx+q,\qquad m=-\frac{a}{b},\qquad q=-\frac{c}{b}.
$$
Il coefficiente $m$ è il *coefficiente angolare*. Per uno spostamento orizzontale pari a $1$, l'ordinata cambia di $m$. Il numero $q$ è l'ordinata del punto con ascissa $0$. Se $b=0$, allora $a\neq 0$ e la retta è verticale, con equazione $x=-\dfrac{c}{a}$.
:::

:::esempio{titolo="Leggere il coefficiente angolare dall'equazione"}
Per la retta $2x+4y-8=0$ si ottiene
$$
4y=-2x+8\qquad\Longrightarrow\qquad y=-\frac{1}{2}x+2.
$$
La retta passa per $(0,2)$ e, a ogni incremento di $2$ dell'ascissa, l'ordinata diminuisce di $1$. Per esempio, un secondo punto è $(2,1)$. L'intersezione con l'asse $x$ è $(4,0)$, perché imponendo $y=0$ si ha $2x-8=0$.

::grafico{f="-0.5*x+2" legenda="y=-\frac{1}{2}x+2" segmenti="0,2,2,2;2,2,2,1" punti="0,2;2,1;4,0" xmin=-2 xmax=6 ymin=-3 ymax=5 uguale=1 titolo="Avanzando di $2$ in orizzontale, la retta scende di $1$."}

:::

:::osservazione{titolo="Equazioni equivalenti"}
Moltiplicare tutta l'equazione per un numero diverso da zero conserva l'insieme delle soluzioni. Per esempio, $2x+4y-8=0$ e $x+2y-4=0$ descrivono la stessa retta. L'equazione $4x-8=0$ descrive invece la verticale $x=2$. Ogni valore di $y$ soddisfa l'equazione quando $x=2$, quindi questa retta ha infinite ordinate per la stessa ascissa.
:::

## La retta che passa per due punti

::::teorema{#due-punti titolo="Dagli spostamenti al coefficiente angolare"}
Per due punti distinti $A(x_1,y_1)$ e $B(x_2,y_2)$ con $x_1\neq x_2$, la retta che li congiunge ha equazione
$$
m=\frac{y_2-y_1}{x_2-x_1},\qquad y-y_1=m(x-x_1).
$$
Se $x_1=x_2$, la retta è $x=x_1$.

:::dimostrazione
Se la retta è esplicita, i due punti soddisfano $y_1=mx_1+q$ e $y_2=mx_2+q$. Sottraendo le uguaglianze si elimina $q$ e si ottiene $y_2-y_1=m(x_2-x_1)$. La differenza $x_2-x_1$ è diversa da zero, quindi si può dividere. Per ricavare la seconda formula si scrive $y=mx+q$ e si sottrae l'uguaglianza $y_1=mx_1+q$. Se le ascisse coincidono e le ordinate sono diverse, una stessa ascissa deve ammettere due ordinate, quindi la retta è verticale.
:::
::::

:::esempio{titolo="Una pendenza che si semplifica"}
Per $A(-1,4)$ e $B(2,-2)$,
$$
\begin{aligned}
m&=\frac{-2-4}{2-(-1)}=\frac{-6}{3}=-2,\\[4pt]
y-4&=-2(x+1),\\[4pt]
y&=-2x+2.
\end{aligned}
$$
Si controlla che in $x=-1$ l'ordinata sia $4$ e in $x=2$ sia $-2$. Nel rapporto si possono scambiare i due punti, purché si cambi l'ordine in entrambe le differenze. In quel caso sia il numeratore sia il denominatore cambiano segno e il rapporto resta uguale.
:::

## Parallelismo e coincidenza

:::teorema{#parallele titolo="Rette con la stessa direzione"}
Due rette non verticali hanno la stessa direzione se i coefficienti angolari coincidono. Con intercette diverse sono **parallele distinte**, mentre con la stessa intercetta coincidono. Infatti, se si sottraggono le ordinate nelle due rette allo stesso valore di $x$, la differenza è la costante $q_2-q_1$. Due rette verticali distinte sono parallele perché le loro ascisse sono fisse e diverse.
:::

:::esempio{titolo="La parallela in forma implicita"}
Per costruire la parallela a $2x-y+3=0$ passante per $P(2,-1)$ si mantiene la parte $2x-y$, che determina la direzione. Si cerca quindi una retta $2x-y+c=0$. Imponendo il passaggio per $P$ si ottiene $2\cdot2-(-1)+c=0$, quindi $c=-5$ e la retta è $2x-y-5=0$. Entrambe hanno coefficiente angolare $2$. Le intercette sono rispettivamente $3$ e $-5$, quindi sono distinte.
:::

:::osservazione{titolo="Verificare la direzione senza isolare y"}
Per le rette $a_1x+b_1y+c_1=0$ e $a_2x+b_2y+c_2=0$, la stessa direzione equivale a $a_1b_2-a_2b_1=0$. Se entrambi i coefficienti di $y$ sono diversi da zero, l'uguaglianza si ottiene confrontando $-\dfrac{a_1}{b_1}$ e $-\dfrac{a_2}{b_2}$. Se una retta è verticale, il criterio impone che anche l'altra sia verticale. Per stabilire se coincidono, si può prendere un punto di una retta e verificare se appartiene all'altra.
:::

## Retta perpendicolare

::::teorema{#perpendicolari titolo="Direzioni che formano un angolo retto"}
Due rette non verticali sono **perpendicolari** se e solo se $m_1m_2=-1$. Una retta verticale è perpendicolare a una orizzontale. Per le forme implicite, il criterio che comprende anche questi due casi è
$$
a_1a_2+b_1b_2=0.
$$

:::dimostrazione
Per una retta di pendenza $m$, uno spostamento lungo la retta ha componenti $(1,m)$. Una rotazione di un angolo retto lo trasforma in $(-m,1)$. Se $m\neq0$, questa nuova direzione ha pendenza $\dfrac{1}{-m}=-\dfrac{1}{m}$. Se $m=0$, il nuovo spostamento ha ascissa zero e la direzione è verticale. Per una retta implicita, lo spostamento $(b,-a)$ conserva il valore di $ax+by$, poiché $ab+b(-a)=0$. Il prodotto scalare degli spostamenti delle due rette è $b_1b_2+(-a_1)(-a_2)=a_1a_2+b_1b_2$. Vale zero esattamente quando le direzioni formano un angolo retto.
:::
::::

:::esempio{titolo="La perpendicolare a una retta obliqua"}
La retta $y=2x+1$ ha pendenza $2$, quindi la perpendicolare ha pendenza $-\dfrac{1}{2}$. Quella passante per $P(2,3)$ soddisfa $y-3=-\dfrac{1}{2}(x-2)$. Sviluppando si trova $y=-\dfrac{1}{2}x+4$. Il prodotto delle pendenze è $-1$ e in $x=2$ l'ordinata è $3$, quindi sono soddisfatte entrambe le condizioni richieste.
:::

:::esempio{#asse-segmento titolo="Asse di un segmento obliquo"}
L'**asse di un segmento** è la retta perpendicolare al segmento e passante per il suo punto medio. Siano $A(-1,1)$ e $B(3,3)$. Il punto medio è $M(1,2)$ e la pendenza del segmento è $\dfrac{3-1}{3-(-1)}=\dfrac12$. L'asse ha pendenza $-2$, quindi la sua equazione è
$$
y-2=-2(x-1)\qquad\Longleftrightarrow\qquad y=-2x+4.
$$
Il punto $P(2,0)$ appartiene all'asse. Applicando la formula della distanza si trova $PA=\sqrt{3^2+(-1)^2}=\sqrt{10}$ e $PB=\sqrt{(-1)^2+(-3)^2}=\sqrt{10}$. Anche $M$ è equidistante da $A$ e $B$ perché è il punto medio. Preso un punto dell'asse diverso da $M$, l'uguaglianza segue dai due triangoli rettangoli costruiti come $PMA$ e $PMB$, con $MA$ e $MB$ della stessa lunghezza e $PM$ in comune.
:::

## Intersezioni come soluzioni di un sistema

:::teorema{#intersezioni titolo="Punti comuni a due rette"}
Un punto è comune a due rette quando le sue coordinate soddisfano entrambe le equazioni. Il sistema ha una sola soluzione se le rette hanno direzioni diverse. Non ha soluzioni quando sono parallele distinte. Ha infinite soluzioni quando coincidono, perché ciascun punto di una retta appartiene anche all'altra.
:::

:::esempio{titolo="Intersezione di due rette esplicite"}
Per $y=2x+1$ e $y=-x+4$, al punto comune le due espressioni dell'ordinata sono uguali. Si calcola
$$
\begin{aligned}
2x+1&=-x+4\\[4pt]
3x&=3\\[4pt]
x&=1,\qquad y=2\cdot1+1=3 .
\end{aligned}
$$
Il punto è $P(1,3)$. Si verifica anche l'altra equazione, poiché $-1+4=3$.

::grafico{f="2*x+1;-x+4" xmin=-2 xmax=4 ymin=-3 ymax=8 punti="1,3,pieno,P" titolo="In $x=1$ le due rette hanno la stessa ordinata $3$."}

:::

:::esempio{titolo="Riconoscere un sistema impossibile"}
Per $2x-y=1$ e $4x-2y=3$, il doppio del primo membro della prima equazione è uguale al primo membro della seconda. Per questo, un punto che soddisfa la prima darebbe $4x-2y=2$ e non potrebbe dare $3$. Le rette sono parallele distinte. Se nella seconda equazione il termine noto fosse $2$, le due equazioni sarebbero equivalenti e le rette coinciderebbero.
:::

## Distanza di un punto da una retta

::::teorema{#punto-retta titolo="Il segmento perpendicolare"}
La distanza di $P(x_0,y_0)$ dalla retta $ax+by+c=0$, con $(a,b)\neq(0,0)$, è la lunghezza del segmento che unisce $P$ al **piede** $H$ della perpendicolare. Vale
$$
d=\frac{|ax_0+by_0+c|}{\sqrt{a^2+b^2}}.
$$

:::dimostrazione
Lo spostamento $(a,b)$ è perpendicolare alla retta perché il suo prodotto scalare con una direzione $(b,-a)$ vale zero. Pertanto $H=(x_0-ta,y_0-tb)$ per un certo numero $t$. Poiché $H$ appartiene alla retta,
$$
\begin{aligned}
a(x_0-ta)+b(y_0-tb)+c&=0\\[4pt]
t&=\frac{ax_0+by_0+c}{a^2+b^2}.
\end{aligned}
$$
La lunghezza di $PH$ è $|t|\sqrt{a^2+b^2}$, da cui si ricava la formula. Se $P$ appartiene alla retta, allora $H=P$ e la distanza è zero. Altrimenti, per ogni punto $Q$ della retta diverso da $H$, $PHQ$ è un triangolo rettangolo e $PQ^2=PH^2+HQ^2$, quindi $PQ>PH$.
:::
::::

:::esempio{titolo="Distanza dall'origine e piede della perpendicolare"}
Siano $P(0,0)$ e la retta $3x+4y-10=0$. Il numeratore della formula vale $|-10|=10$, mentre il denominatore è $\sqrt{9+16}=5$. La distanza è $2$. Per trovare $H$ si usa $t=-\dfrac{10}{25}=-\dfrac{2}{5}$. Si ottiene $H\left(\dfrac{6}{5},\dfrac{8}{5}\right)$. Il punto appartiene alla retta perché $3\cdot\dfrac{6}{5}+4\cdot\dfrac{8}{5}=10$. Il segmento $PH$ ha la direzione $(3,4)$, perpendicolare alla direzione $(4,-3)$ della retta.

::grafico{f="(10-3*x)/4" legenda="3x+4y-10=0" segmenti="0,0,1.2,1.6" punti="0,0,pieno,P;1.2,1.6,pieno,H" xmin=-2 xmax=5 ymin=-2 ymax=5 uguale=1 titolo="Il segmento più corto tra $P$ e la retta misura $2$."}

:::

:::osservazione{titolo="La distanza dipende dalla retta e dal punto"}
Se si moltiplicano $a$, $b$ e $c$ per $\lambda\neq0$, il numeratore e il denominatore della formula vengono entrambi moltiplicati per $|\lambda|$. La distanza, quindi, non cambia. Questa proprietà consente di usare qualunque equazione equivalente e servirà a stabilire se una retta è tangente a una circonferenza, confrontando la distanza dal suo centro con il raggio.
:::

:::esempio{#distanza-parallele titolo="Distanza fra due rette parallele"}
Per le rette $3x+4y=8$ e $3x+4y=18$, si può applicare la formula della distanza alla seconda retta usando un punto qualsiasi $P(x_0,y_0)$ della prima. Poiché $3x_0+4y_0=8$, il numeratore si calcola anche senza trovare le due coordinate.
$$
d=\frac{|3x_0+4y_0-18|}{\sqrt{3^2+4^2}}
=\frac{|8-18|}{5}=2.
$$
La distanza è la stessa qualunque punto della prima retta si scelga perché il valore $3x_0+4y_0$ è costante su quella retta. Se nelle due equazioni i coefficienti di $x$ e $y$ sono proporzionali, si possono prima riscrivere le equazioni con la stessa coppia di coefficienti.
:::
