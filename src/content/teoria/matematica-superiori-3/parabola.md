---
titolo: Parabola e problemi di secondo grado
sommario: Dal fuoco al grafico, con esempi su vertice, intersezioni, tangenti e problemi di massimo.
---

## Fuoco, direttrice e asse di simmetria

:::definizione{#fuoco titolo="Fuoco e direttrice"}
La **parabola** è il luogo dei punti del piano che hanno la stessa distanza da un punto fisso $F$, detto fuoco, e da una retta $d$, detta direttrice. Il fuoco è esterno alla direttrice. La distanza da $d$ si misura lungo la perpendicolare a $d$ che passa per il punto considerato.

Se $d$ è orizzontale, la verticale per $F$ è l'asse di simmetria della parabola. Indicando con $h$ l'ascissa dell'asse e con $k$ l'ordinata del vertice, si possono scrivere il fuoco come $F(h,k+p)$ e la direttrice come $y=k-p$. Il numero $p\ne 0$ è lo spostamento verticale dal vertice $V(h,k)$ al fuoco. In valore assoluto è anche la distanza da $V$ alla direttrice.
:::

::::teorema{#equazione-distanze titolo="Equazione dalle distanze"}
Con $F(h,k+p)$ e $d:y=k-p$, l'equazione della parabola è
$$
(x-h)^2=4p(y-k).
$$
Poiché $(x-h)^2\ge 0$, per $p>0$ ogni punto soddisfa $y\ge k$ e per $p<0$ soddisfa $y\le k$. Sull'asse $x=h$ si ha $y=k$, quindi l'unico punto della parabola che sta sull'asse è proprio il vertice.

:::dimostrazione
Per un punto $P(x,y)$ si scrivono le due distanze e si elevano al quadrato. Le distanze sono entrambe non negative, quindi l'uguaglianza dei loro quadrati equivale all'uguaglianza di partenza.
$$
\begin{aligned}
\sqrt{(x-h)^2+(y-k-p)^2}&=|y-k+p|\\[6pt]
(x-h)^2&=(y-k+p)^2-(y-k-p)^2\\[6pt]
&=4p(y-k).
\end{aligned}
$$
Se si sostituisce $x=h+s$ oppure $x=h-s$, il quadrato a sinistra vale $s^2$ in entrambi i casi. Le due ascisse alla stessa distanza dall'asse hanno quindi la stessa ordinata.
:::
::::

:::esempio{titolo="Dal disegno all'equazione"}
Siano $F(0,1)$ e $d:y=-1$. Il vertice è a metà tra $F$ e il punto $D(0,-1)$ in cui l'asse taglia la direttrice, quindi $V=(0,0)$ e $p=1$. L'equazione è $x^2=4y$. Il punto $P(2,1)$ appartiene alla curva, perché $2^2=4\cdot 1$. Il segmento orizzontale $PF$ e la perpendicolare da $P$ alla direttrice misurano entrambi $2$.

::grafico{f="x^2/4;-1" legenda="y=\dfrac{x^2}{4};y=-1" xmin=-4 xmax=5 ymin=-2 ymax=4.5 uguale=1 punti="0,1,pieno,F;0,0,pieno,V;0,-1,pieno,D;2,1,pieno,P;2,-1,pieno,H" segmenti="0,1,2,1;2,-1,2,1" titolo="Le distanze PF e PH coincidono perché P appartiene alla parabola"}
:::

:::esempio{titolo="La direttrice sopra il fuoco"}
Siano $F(1,-2)$ e $d:y=2$. L'asse è la verticale per il fuoco, quindi $x=1$. Il suo punto d'incontro con la direttrice è $D(1,2)$. Poiché il vertice è equidistante da $F$ e da $D$ lungo l'asse, la quota del vertice è la media di $-2$ e $2$. Si ottiene $V(1,0)$. Il parametro $p$ è lo spostamento dal vertice al fuoco, quindi qui vale $-2$ e l'equazione è $(x-1)^2=-8y$.

Per controllare il verso di apertura si può individuare un punto alla quota del fuoco. Ponendo $y=-2$ si ottiene $(x-1)^2=16$, quindi le ascisse possibili sono $-3$ e $5$. Per $P(5,-2)$ il segmento orizzontale verso $F$ misura $5-1=4$. Il segmento verticale da $P$ alla direttrice misura $2-(-2)=4$. La curva passa dunque per $P$ sul lato del fuoco. La stessa equazione esclude quote positive, perché per $y>0$ il secondo membro sarebbe negativo.

::grafico{f="-(x-1)^2/8;2" legenda="y=-\dfrac{(x-1)^2}{8};y=2" xmin=-4 xmax=7 ymin=-4 ymax=3 uguale=1 segmenti="1,-2,5,-2;5,-2,5,2" punti="1,-2,pieno,F;1,0,pieno,V;1,2,pieno,D;5,-2,pieno,P;5,2,pieno,H; -3,-2" titolo="Il fuoco si trova sotto il vertice. Da P i segmenti verso F e verso la direttrice misurano entrambi 4"}
:::

## Dal trinomio alla forma con il vertice

::::teorema{#vertice titolo="Completamento del quadrato"}
Per $y=ax^2+bx+c$ con $a\ne 0$, il trinomio si può scrivere come $a(x-h)^2+k$. In questa forma $V=(h,k)$ e l'asse di simmetria è $x=h$. Indicando con $\Delta=b^2-4ac$ il discriminante, si ottiene
$$
h=-\frac{b}{2a},
\qquad
k=c-\frac{b^2}{4a}=-\frac{\Delta}{4a}.
$$
Il segno di $a$ determina il verso di apertura. Se $a>0$, l'ordinata minima è $k$. Se $a<0$, l'ordinata massima è $k$. In entrambi i casi il valore estremo si raggiunge per $x=h$.

:::dimostrazione
Si raccoglie $a$ nei termini in $x$ per ottenere un quadrato con coefficiente $1$ davanti a $x^2$. Nel quadrato $(x+u)^2$ il coefficiente di $x$ è $2u$. Per ottenere $\dfrac{b}{a}$ si sceglie quindi $u=\dfrac{b}{2a}$.
$$
\begin{aligned}
ax^2+bx+c
&=a\left(x^2+\frac{b}{a}x\right)+c\\[6pt]
&=a\left[\left(x+\frac{b}{2a}\right)^2
-\left(\frac{b}{2a}\right)^2\right]+c\\[6pt]
&=a\left(x+\frac{b}{2a}\right)^2
+c-\frac{b^2}{4a}.
\end{aligned}
$$
Il quadrato si annulla soltanto per $x=-\dfrac{b}{2a}$. Perciò in quel punto si legge l'ordinata estrema del trinomio.
:::
::::

:::esempio{titolo="Una parabola rivolta verso il basso"}
Per $y=-2x^2+8x-5$ si raccoglie $-2$ nei termini in $x$ e si aggiunge $4$ dentro il quadrato. Si sottrae la stessa quantità prima di distribuire il $-2$.
$$
\begin{aligned}
y&=-2(x^2-4x)-5\\
 &=-2\bigl[(x-2)^2-4\bigr]-5\\
 &=-2(x-2)^2+3.
\end{aligned}
$$
Segue che $V=(2,3)$. A distanza $1$ dall'asse, cioè per $x=1$ e $x=3$, il termine $-2(x-2)^2$ vale $-2$ e i punti hanno entrambi ordinata $1$. La stessa uguaglianza vale per qualunque coppia di ascisse simmetriche. Poiché $a=-2$, dalla forma geometrica si ricava $p=\dfrac{1}{4a}=-\dfrac18$. Il fuoco si trova quindi sotto il vertice e la direttrice sopra.

::grafico{f="-2*(x-2)^2+3" xmin=-0.5 xmax=4.5 ymin=-8 ymax=4.5 punti="1,1,pieno,A;2,3,pieno,V;3,1,pieno,B" asintoti="x=2" titolo="A e B hanno la stessa ordinata perché le loro ascisse distano 1 dall'asse di simmetria"}
:::

:::esempio{titolo="Stessa concavità, aperture diverse"}
Le parabole $y=x^2$ e $y=4x^2$ hanno entrambe vertice nell'origine e sono rivolte verso l'alto. Alla quota $y=1$, la prima incontra la retta orizzontale alle ascisse $-1$ e $1$. Per la seconda vale invece $4x^2=1$, quindi le ascisse sono $-\dfrac12$ e $\dfrac12$. Alla stessa quota la seconda ha una corda larga la metà. Nelle due equazioni il coefficiente di $x^2$ è positivo. La differenza tra le aperture dipende dal suo valore assoluto.
:::

:::osservazione
Nella forma $f(x)=a(x-h)^2+k$, la quantità $(x-h)^2$ misura il quadrato della distanza dall'asse. A sinistra dell'asse questa distanza diminuisce quando $x$ aumenta verso $h$. A destra dell'asse aumenta quando $x$ si allontana da $h$. Con $a>0$ le ordinate seguono la stessa variazione, quindi la funzione decresce per $x\le h$ e cresce per $x\ge h$. Con $a<0$, moltiplicare per $a$ inverte il confronto e si ottiene la monotonia opposta.

Per esempio, per $f(x)=-3(x-4)^2+2$ i punti di ascissa $3$ e $5$ distano entrambi $1$ dall'asse. Le loro ordinate valgono $-1$, mentre $f(4)=2$. Tra $3$ e $4$ l'ordinata sale e tra $4$ e $5$ scende. Il fatto che le ordinate agli estremi del tratto $[3,5]$ coincidano indica la simmetria, mentre all'interno l'ordinata varia. Questo aiuta a scegliere quando basta confrontare gli estremi di un intervallo e quando occorre valutare anche il vertice.
:::

::::teorema{#punti-stessa-ordinata titolo="Asse da due punti alla stessa quota"}
Sia $f(x)=ax^2+bx+c$ con $a\ne0$. Se $u$ e $v$ sono ascisse distinte e $f(u)=f(v)$, l'asse di simmetria passa per l'ascissa $\dfrac{u+v}{2}$. Questo permette di trovare il vertice quando il grafico o una tabella mostrano due punti alla stessa altezza, anche se entrambi si trovano fuori dall'asse $x$.

:::dimostrazione
Si sottraggono i valori di $f$ per separare il fattore $v-u$.
$$
\begin{aligned}
0 &= f(v)-f(u)\\
  &= a(v^2-u^2)+b(v-u)\\
  &= (v-u)\bigl(a(u+v)+b\bigr).
\end{aligned}
$$
Poiché $v-u\ne0$, il secondo fattore è nullo. Si ottiene $\dfrac{u+v}{2}=-\dfrac{b}{2a}$, cioè l'ascissa dell'asse.
:::
::::

:::esempio{titolo="Ricavare il coefficiente quadratico da tre valori"}
Si sa che $f(0)=f(4)=1$ e $f(2)=-3$. I primi due valori fissano l'asse $x=2$. Il terzo è proprio l'ordinata nel punto dell'asse, quindi la forma più diretta è $f(x)=a(x-2)^2-3$. L'informazione $f(0)=1$ dà $1=4a-3$, perciò $a=1$. Sostituendo l'altra ascissa si trova $f(4)=(4-2)^2-3=1$, coerentemente con il valore dato. I punti di ascisse $0$ e $4$ si trovano a due unità dall'asse. Nella formula, il quadrato di questa distanza è $4$ e coincide con la differenza di quota da $-3$ a $1$.

::grafico{f="(x-2)^2-3;1" xmin=-1 xmax=5 ymin=-4.1 ymax=5.3 asintoti="x=2" punti="0,1,pieno,A;4,1,pieno,B;2,-3,pieno,V" titolo="La corda orizzontale AB individua l'asse che passa per il suo punto medio"}
:::

## Zeri, intercetta e segno

:::teorema{#zeri titolo="Intersezioni con gli assi"}
Il grafico di $f(x)=ax^2+bx+c$, con $a\ne 0$, incontra l'asse $y$ in $(0,c)$ perché in quel punto $x=0$. I punti dell'asse $x$ hanno invece ordinata nulla, quindi le loro ascisse sono le soluzioni reali di $f(x)=0$.

- Se $\Delta>0$, il grafico incontra l'asse $x$ in due punti distinti. Se $x_1<x_2$ sono le loro ascisse, vale $f(x)=a(x-x_1)(x-x_2)$. Il segno di $f$ è quello di $a$ all'esterno di $[x_1,x_2]$ e quello opposto tra le radici.
- Se $\Delta=0$, il grafico tocca l'asse $x$ nel vertice. Il trinomio è $a(x-h)^2$, quindi ha il segno di $a$ per ogni $x\ne h$.
- Se $\Delta<0$, il grafico resta interamente al di sopra dell'asse $x$ se $a>0$, al di sotto se $a<0$. Infatti $k=-\dfrac{\Delta}{4a}$ ha lo stesso segno di $a$ e $a(x-h)^2$ ha quel segno oppure vale zero.
:::

:::esempio{titolo="Una disequazione letta sul grafico"}
Si vuole risolvere $x^2-4x+3\le 0$. La scomposizione $x^2-4x+3=(x-1)(x-3)$ fornisce gli zeri $1$ e $3$. Per $x<1$ i due fattori sono negativi, quindi il prodotto è positivo. Per $1<x<3$ i fattori hanno segno opposto e il prodotto è negativo. Per $x>3$ i due fattori sono positivi. Poiché la disequazione ammette anche l'uguaglianza, la soluzione è $[1,3]$.

L'ascissa del vertice è il punto medio delle due radici, cioè $2$. Sostituendo $x=2$ si trova l'ordinata $-1$. Il disegno permette di controllare insieme le radici, il segno e il valore minimo.

::grafico{f="x^2-4*x+3" xmin=-1 xmax=5 ymin=-2 ymax=8 punti="1,0;3,0;2,-1,pieno,V;0,3" titolo="Sull'intervallo chiuso [1, 3] il grafico sta sull'asse x oppure al di sotto"}
:::

:::attenzione
L'equazione $(x-2)^2=0$ ha la sola soluzione $2$ e questa è una radice doppia. Il grafico di $y=(x-2)^2$ tocca l'asse in $(2,0)$. Poiché il quadrato è positivo da entrambi i lati, il segno resta positivo per $x\ne2$.
:::

:::esempio{titolo="Quante intersezioni al variare di un parametro"}
Si consideri $f_q(x)=(x-1)^2+q$, con $q$ reale. Il parametro $q$ è l'ordinata minima della parabola. Spostarla in su o in giù cambia quindi il numero degli zeri, mentre l'asse resta $x=1$. Risolvendo $f_q(x)=0$ si ottiene $(x-1)^2=-q$. La distanza dall'asse che risolve l'equazione dipende da $-q$.

- Se $q=-1$, la distanza vale $1$ e si trovano le ascisse $0$ e $2$. Tra queste ascisse il quadrato è minore di $1$, quindi $f_{-1}(x)<0$.
- Se $q=0$, la distanza è zero. Il solo punto comune è $V(1,0)$ e l'asse $x$ è tangente.
- Se $q=2$, il quadrato dovrebbe valere $-2$. Il grafico resta sopra l'asse e tutte le ordinate sono almeno $2$.

I tre casi si ritrovano calcolando il discriminante dopo lo sviluppo, perché $b=-2$, $a=1$ e $c=1+q$ danno $\Delta=-4q$. La forma con il vertice identifica direttamente l'effetto della traslazione verticale.

::grafico{f="(x-1)^2-1;(x-1)^2;(x-1)^2+2" xmin=-2 xmax=4 ymin=-2.4 ymax=6.5 punti="0,0;2,0;1,0" titolo="Per lo stesso asse verticale si osservano due zeri, un contatto oppure nessuna intersezione con l'asse x"}
:::

## Ricavare l'equazione dai dati

:::teorema{#equazione titolo="Vertice e punto assegnati"}
Se una parabola ad asse verticale ha vertice $V(h,k)$ e passa per $P(x_P,y_P)$ con $x_P\ne h$, l'equazione si ricava dalla forma $y=a(x-h)^2+k$. Sostituendo il punto si trova
$$
a=\frac{y_P-k}{(x_P-h)^2}.
$$
Se $y_P=k$, il calcolo dà $a=0$ e i dati sono incompatibili con una parabola ad asse verticale. Se $x_P=h$, il punto appartiene alla parabola soltanto quando coincide con il vertice. In quel caso la condizione di passaggio è già soddisfatta per ogni $a\ne0$.
:::

:::esempio{titolo="Un vertice e un punto"}
Siano $V=(1,-2)$ e $P=(3,6)$. Sostituendo le coordinate del punto si ottiene
$$
\begin{aligned}
6&=a(3-1)^2-2\\
8&=4a\\
a&=2 .
\end{aligned}
$$
La parabola cercata è $y=2(x-1)^2-2$. Il punto $Q=(-1,6)$ si trova alla stessa distanza dall'asse $x=1$ e ha quindi la stessa ordinata di $P$. Verificando il passaggio per $P$ si ottiene $2\cdot 2^2-2=6$, come richiesto.
:::

:::esempio{titolo="Tre punti con ascisse distinte"}
Si voglia un grafico di secondo grado passante per $(0,1)$, $(1,0)$ e $(3,4)$. Poiché conosciamo tre punti e nessun vertice, si parte da $y=ax^2+bx+c$ e si sostituiscono le tre coppie di coordinate.
$$
\begin{cases}
c=1\\
a+b+c=0\\
9a+3b+c=4
\end{cases}
\qquad\Longrightarrow\qquad
\begin{cases}
c=1\\
a+b=-1\\
3a+b=1 .
\end{cases}
$$
Sottraendo la seconda equazione del sistema a destra dalla terza si ottiene $2a=2$, quindi $a=1$ e $b=-2$. Il risultato è $y=x^2-2x+1$. Il coefficiente $a$ è diverso da zero e i valori assunti per $x=0,1,3$ sono rispettivamente $1,0,4$.

In generale tre punti con ascisse distinte determinano al più un polinomio di grado al massimo due. Se due polinomi di quel grado passassero per gli stessi punti, la loro differenza avrebbe tre radici distinte e dovrebbe essere il polinomio nullo. Se i tre punti sono allineati il polinomio ottenuto ha grado al massimo uno, quindi i dati non determinano una parabola.
:::

:::esempio{titolo="Due zeri e un punto a una quota nota"}
Si cerchi la parabola con zeri $-1$ e $3$ che passa per $P(1,4)$. Gli zeri fissano i fattori $x+1$ e $x-3$. Rimane da trovare il coefficiente che scala in verticale le ordinate.
$$
\begin{aligned}
y&=a(x+1)(x-3),\\
4&=a(1+1)(1-3)=-4a,\\
a&=-1,\qquad y=-(x+1)(x-3).
\end{aligned}
$$
Poiché $1$ è il punto medio degli zeri, $P$ è il vertice. La quota del vertice è positiva, mentre $a<0$, quindi la curva sta sopra l'asse tra le radici e sotto l'asse all'esterno. Se si scegliesse $a=1$, le due ascisse d'intersezione resterebbero corrette, ma in $x=1$ l'ordinata sarebbe $-4$. La condizione sul terzo punto distingue due parabole che hanno gli stessi zeri.

::grafico{f="-(x+1)*(x-3);(x+1)*(x-3)" xmin=-2.3 xmax=4.3 ymin=-6 ymax=6 punti="-1,0;3,0;1,4,pieno,P" titolo="Entrambe le parabole passano per gli zeri assegnati. La curva che passa per P si apre verso il basso"}
:::

## Rette secanti, tangenti ed esterne

::::teorema{#intersezioni titolo="Sostituzione nel sistema"}
Per trovare i punti comuni alla parabola $y=ax^2+bx+c$ e alla retta $y=mx+q$, si uguagliano le due espressioni per $y$. Le ascisse sono quindi le soluzioni di
$$
ax^2+(b-m)x+c-q=0.
$$
Il discriminante da studiare è $(b-m)^2-4a(c-q)$. È positivo per una secante, nullo per una tangente e negativo per una retta esterna. La classificazione riguarda le **rette non verticali**, per le quali l'equazione sostituita è di secondo grado.

:::dimostrazione
Ogni soluzione $x$ dà un unico punto comune $(x,mx+q)$. Se il discriminante è nullo, la differenza tra le ordinate di parabola e retta si fattorizza come $a(x-t)^2$, dove $t$ è la radice doppia. La retta incontra il grafico in corrispondenza di $t$ e la differenza mantiene lo stesso segno sui due lati. Questo equivale alla condizione di tangenza per una retta non verticale.
:::
::::

:::esempio{titolo="Una secante e la sua corda"}
Per $y=x^2$ e $y=x+2$ si ottiene
$$
\begin{aligned}
x^2&=x+2\\
x^2-x-2&=0\\
(x+1)(x-2)&=0 .
\end{aligned}
$$
Le ascisse sono $-1$ e $2$. Sostituendo nella retta si trovano i punti $A(-1,1)$ e $B(2,4)$. Il punto medio della corda $AB$ è $\left(\dfrac12,\dfrac52\right)$. Appartiene alla retta, perché $\dfrac12+2=\dfrac52$. L'ordinata della parabola nella stessa ascissa è invece $\dfrac14$, quindi il punto medio è sopra il grafico.

::grafico{f="x^2;x+2" xmin=-2.5 xmax=3.5 ymin=-1 ymax=8.5 punti="-1,1,pieno,A;2,4,pieno,B;0.5,2.5,pieno,M" titolo="La corda AB giace sulla retta secante e il suo punto medio M è sopra la parabola"}
:::

:::attenzione
La verticale $x=1$ incontra $y=x^2$ soltanto in $(1,1)$. La condizione di radice doppia si applica quando la retta ha equazione $y=mx+q$. In questo caso l'ascissa è già fissata a $1$, quindi il sistema individua un solo punto senza fornire una tangenza. La tangente in $(1,1)$ è $y=2x-1$.
:::

## Tangente in un punto e tangenti da un punto

::::teorema{#tangenti titolo="Condizione di radice doppia"}
La tangente alla parabola $y=ax^2+bx+c$, $a\ne0$, nel punto di ascissa $t$ ha equazione
$$
y=(2at+b)x+c-at^2.
$$
Il numero $t$ identifica il punto della parabola in cui la retta la tocca. Se si cerca una tangente passante per un punto assegnato $P$, l'ascissa $t$ resta un'incognita e si determina imponendo il passaggio per $P$.

:::dimostrazione
Perché $t$ sia una radice doppia, la differenza tra la parabola e la retta $y=mx+q$ deve coincidere con $a(x-t)^2$. Uguagliando i coefficienti del termine lineare e del termine costante si ottiene
$$
\begin{aligned}
ax^2+(b-m)x+c-q&=a(x-t)^2\\
&=ax^2-2atx+at^2,\\[4pt]
\begin{cases}
b-m=-2at\\
c-q=at^2
\end{cases}
&\quad\Longrightarrow\quad
\begin{cases}
m=2at+b\\
q=c-at^2 .
\end{cases}
\end{aligned}
$$
Questi coefficienti danno la sola retta per cui la differenza ha la radice doppia $t$.
:::
::::

:::esempio{titolo="Due tangenti da un punto esterno"}
Per la parabola $y=x^2$ la tangente nel punto $(t,t^2)$ è $y=2tx-t^2$. Si vogliono le tangenti che passano per $P(0,-4)$. Sostituendo $P$ si ottiene $-4=-t^2$, quindi $t=2$ oppure $t=-2$. Le due rette sono $y=4x-4$ e $y=-4x-4$.

Per la prima, la differenza $x^2-(4x-4)$ è $(x-2)^2$. Per la seconda è $(x+2)^2$. Le due intersezioni doppie sono dunque rispettivamente $(2,4)$ e $(-2,4)$. Il punto $P$ appartiene alle rette perché entrambe hanno intercetta $-4$.

::grafico{f="x^2;4*x-4;-4*x-4" xmin=-4 xmax=4 ymin=-5.5 ymax=8.5 punti="0,-4,pieno,P;2,4,pieno,A;-2,4,pieno,B" titolo="Le tangenti da P toccano la parabola nei punti A e B"}
:::

:::osservazione
Per una tangente parallela a una retta data si conosce già la pendenza $m$. Si ricava allora $t$ da $2at+b=m$. Per esempio, per una tangente orizzontale vale $m=0$, perciò $t=-\dfrac{b}{2a}$. Il punto di contatto è il vertice e la retta ha equazione $y=k$.
:::

::::teorema{#corda-tangente-parallela titolo="Corda e tangente parallela"}
Sia $f(x)=ax^2+bx+c$ con $a\ne0$. La tangente parallela alla corda fra i punti di ascisse distinte $u$ e $v$ ha ascissa di contatto $t=\dfrac{u+v}{2}$. La retta tangente passa per $(t,f(t))$, mentre il punto medio della corda ha in generale un'altra ordinata.

:::dimostrazione
La pendenza della corda si ottiene dividendo la differenza delle ordinate per $v-u$.
$$
\begin{aligned}
m_{\mathrm{corda}}&=\frac{f(v)-f(u)}{v-u}\\[4pt]
&=\frac{(v-u)\bigl(a(v+u)+b\bigr)}{v-u}\\[4pt]
&=a(v+u)+b.
\end{aligned}
$$
La pendenza della tangente in $t$ vale $2at+b$. Poiché le due rette sono parallele, le pendenze coincidono. Togliendo $b$ e dividendo per $2a$ si ottiene la media delle due ascisse.
:::
::::

:::esempio{titolo="La tangente di una corda obliqua"}
Sulla parabola $f(x)=x^2+1$ i punti di ascisse $0$ e $4$ sono $A(0,1)$ e $B(4,17)$. La corda ha pendenza $\dfrac{17-1}{4-0}=4$ e retta $y=4x+1$. Il punto di tangenza parallela ha ascissa $2$. Si calcola $f(2)=5$, dunque la retta tangente è $y=4(x-2)+5=4x-3$. La corda a $x=2$ ha ordinata $9$. La differenza tra le ordinate delle due rette è $4$ a ogni ascissa perché hanno la stessa pendenza. Come controllo, $x^2+1-(4x-3)=(x-2)^2$, che si annulla soltanto nel punto di contatto.

::grafico{f="x^2+1;4*x+1;4*x-3" xmin=-1 xmax=5 ymin=-4.5 ymax=20 punti="0,1,pieno,A;4,17,pieno,B;2,5,pieno,T;2,9,pieno,M" segmenti="2,5,2,9" titolo="Il contatto T è alla stessa ascissa del punto medio M della corda. Le due rette sono parallele"}
:::

:::osservazione
Per contare le tangenti che attraversano $P(u,v)$ si sostituisce il punto nella formula della tangente con contatto a $t$. Indicando ancora con $f$ il trinomio, si può riscrivere la condizione come quadrato.
$$
\begin{aligned}
v&=(2at+b)u+c-at^2\\
 &=f(u)-a(t-u)^2,\\[3pt]
(t-u)^2&=\frac{f(u)-v}{a}.
\end{aligned}
$$
Il segno dell'ultimo membro determina il numero di contatti. Se è positivo ci sono due valori di $t$ e quindi due rette di pendenze diverse. Se è nullo, $P$ appartiene alla parabola e il contatto è nel punto stesso. Se è negativo, non ci sono tangenti reali per $P$. Per esempio, per $f(x)=4-x^2$ e $P(0,5)$ si ha $\dfrac{4-5}{-1}=1$, dunque $t=\pm1$. Il coefficiente di secondo grado è negativo, quindi in questo esempio il punto da cui si tracciano due tangenti è sopra la curva alla stessa ascissa. Le due rette risultano $y=5+2x$ e $y=5-2x$.
:::

## Parabole con asse orizzontale

:::definizione{#orizzontale titolo="Scambio delle coordinate"}
Una parabola con asse orizzontale si scrive
$$
x=a(y-k)^2+h,\qquad a\ne0.
$$
Il vertice è $V(h,k)$ e l'asse ha equazione $y=k$. Il quadrato si annulla quando $y=k$, quindi per $a>0$ l'ascissa minima è $h$ e l'apertura è verso destra. Per $a<0$ l'ascissa massima è $h$ e l'apertura è verso sinistra.

Riscrivendo $(y-k)^2=4p(x-h)$ si trova $p=\dfrac{1}{4a}$. Lo spostamento dal vertice al fuoco è adesso orizzontale. Si hanno $F(h+p,k)$ e direttrice $x=h-p$.
:::

:::esempio{titolo="Da un'ascissa a due ordinate"}
Per $x=(y-1)^2-2$, il vertice è $(-2,1)$. Fissando $x=2$ si ricava $(y-1)^2=4$, perciò $y=1\pm2$. La verticale $x=2$ incontra quindi la parabola in $(2,-1)$ e $(2,3)$. Le due quote sono a distanza $2$ dall'asse $y=1$.

La curva è il grafico di $x$ in funzione di $y$. Alla stessa ascissa possono però corrispondere due ordinate, come mostra la verticale che passa per i due punti. Il grafico di una funzione $y=f(x)$ deve invece assegnare una sola ordinata a ogni ascissa del dominio.

::grafico{curve="(t-1)^2-2,t,-2,4.3" legenda="x=(y-1)^2-2" xmin=-3.5 xmax=6 ymin=-2.5 ymax=4.5 asintoti="y=1" segmenti="2,-1,2,3" punti="-2,1,pieno,V;2,-1,pieno,A;2,3,pieno,B" titolo="A e B hanno la stessa ascissa e sono simmetrici rispetto alla retta y = 1"}
:::

:::esempio{titolo="Le due branche di una parabola orizzontale"}
Si consideri $x=5-2(y-1)^2$. Il vertice è $(5,1)$ e il grafico sta a sinistra della verticale per il vertice. Per descrivere l'ordinata in funzione dell'ascissa bisogna prima isolare il quadrato.
$$
\begin{aligned}
(y-1)^2 &= \frac{5-x}{2},\\[4pt]
y_+(x) &= 1+\sqrt{\frac{5-x}{2}},\\[4pt]
y_-(x) &= 1-\sqrt{\frac{5-x}{2}} .
\end{aligned}
$$
Entrambe le radici richiedono $x\le5$. La funzione $y_+$ descrive i punti sopra l'asse orizzontale e $y_-$ quelli sotto. Per $x<5$ si ottengono due quote distinte, mentre per $x=5$ entrambe valgono $1$. A $x=3$ le ordinate sono $2$ e $0$ e la corda verticale misura $2$. Il coefficiente $2$ sotto la radice proviene dalla divisione per quel coefficiente, quindi resta sotto radice quando si assegna $x$.

::grafico{curve="5-2*(t-1)^2,t,1,3.5;5-2*(t-1)^2,t,-1.5,1" legenda="y_+;y_-" xmin=-4 xmax=6 ymin=-1.6 ymax=3.6 segmenti="3,0,3,2;-4,1,5,1" punti="5,1,pieno,V;3,2,pieno,A;3,0,pieno,B" titolo="Le due funzioni hanno in comune il vertice V. La corda verticale AB riunisce un punto per ciascuna branca"}
:::

## Estremi e vincoli nei problemi

:::esempio{#massimi titolo="Area di un recinto con un lato sul muro"}
Si hanno $24\,\mathrm{m}$ di recinzione per chiudere tre lati di un rettangolo. Il quarto lato poggia contro un muro. Se $x$ è la lunghezza in metri di ciascun lato perpendicolare al muro, il lato parallelo misura $24-2x$. Le due misure devono essere positive, quindi $0<x<12$.
$$
\begin{aligned}
A(x)&=x(24-2x)\\
&=-2(x^2-12x)\\
&=-2\bigl[(x-6)^2-36\bigr]\\
&=72-2(x-6)^2 .
\end{aligned}
$$
Poiché il quadrato è non negativo, $A(x)\le72$. L'uguaglianza vale per $x=6$, che appartiene all'intervallo ammesso. Il lato parallelo al muro misura $12\,\mathrm{m}$ e l'area massima è $72\,\mathrm{m}^2$. Il vincolo usa due volte $x$, quindi le dimensioni che massimizzano l'area hanno rapporto $2$ a $1$.

::grafico{f="72-2*(x-6)^2" xmin=0 xmax=12 ymin=0 ymax=85 punti="0,0,vuoto;6,72,pieno,V;12,0,vuoto" titolo="Il vertice appartiene all'intervallo ammesso e raggiunge l'area massima di 72 metri quadrati"}
:::

:::esempio{titolo="Quando il vertice è fuori dall'intervallo"}
Un arco è rappresentato da $y=9-(x-3)^2$. La passerella che interessa occupa soltanto il tratto $4\le x\le 6$. Il vertice ha ascissa $3$, fuori dal tratto. Per $4\le x\le 6$, la distanza $x-3$ cresce da $1$ a $3$. Il quadrato cresce con essa, quindi $9-(x-3)^2$ diminuisce. Di conseguenza
$$
y(4)=9-1^2=8,
\qquad
y(6)=9-3^2=0 .
$$
Sul tratto richiesto il massimo è $8$ e il minimo è $0$. Il massimo del grafico intero sarebbe $9$, ma quel punto non è accessibile sulla passerella.
:::

:::esempio{titolo="Il prezzo va scelto tra numeri interi"}
Una scuola propone un laboratorio e può fissare il biglietto a un numero intero di euro compreso fra $4$ e $12$. Il numero di biglietti previsti a prezzo $p$ è $30-2p$. Poiché il ricavo in euro è il prodotto del prezzo per il numero di biglietti, il modello dà
$$
\begin{aligned}
R(p)&=30p-2p^2\\
    &=\frac{225}{2}-2\left(p-\frac{15}{2}\right)^2 .
\end{aligned}
$$
Per prezzi reali il vertice avrebbe ascissa $\dfrac{15}{2}$, che è tra $7$ e $8$. Il prezzo deve però essere intero. Per massimizzare $R$ si cerca il prezzo ammissibile a distanza minore da $\dfrac{15}{2}$. Sia $7$ sia $8$ distano $\dfrac12$, quindi ottengono lo stesso ricavo. Il conto diretto dà $R(7)=7\cdot16=112$ e $R(8)=8\cdot14=112$. Ogni altro prezzo consentito è più lontano dal vertice e ha ricavo minore. La restrizione ai prezzi interi cambia sia il valore massimo sia il numero di prezzi che lo producono.
:::
