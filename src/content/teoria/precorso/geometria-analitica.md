---
titolo: Geometria analitica e coniche
sommario: Punti e rette nel piano cartesiano, poi parabola, circonferenza, ellisse e iperbole, con il metodo per riconoscere una conica dalla sua equazione e disegnarla.
---

## Il piano cartesiano

:::definizione{#distanza-e-punto-medio titolo="Distanza tra due punti e punto medio"}
Dati $A(x_1, y_1)$ e $B(x_2, y_2)$:
$$
\overline{AB} = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2},
\qquad
M\left( \frac{x_1 + x_2}{2},\; \frac{y_1 + y_2}{2} \right) .
$$
La distanza è il **teorema di Pitagora** applicato al triangolo rettangolo di cateti $|x_2 - x_1|$ e $|y_2 - y_1|$; il punto medio ha per coordinate le medie delle coordinate. Queste due formule servono in tutto il capitolo: la circonferenza, l'ellisse e l'iperbole sono definite *proprio* tramite distanze.
:::

:::esempio
$A(1, 2)$ e $B(4, 6)$: la distanza è $\overline{AB} = \sqrt{3^2 + 4^2} = \sqrt{25} = 5$ e il punto medio è $M\left(\dfrac{5}{2}, 4\right)$.

::grafico{f="4/3*x+2/3+0*sqrt(x-1)+0*sqrt(4-x)" uguale=1 xmin=-1.5 xmax=7 ymin=-1 ymax=7 punti="1,2,pieno,A;4,6,pieno,B;2.5,4,pieno,M" legenda=0 segmenti="1,2,4,2;4,2,4,6" etichette="2.4,1.5,3;4.2,3.9,4;1.4,4,5" titolo="Distanza tra $A(1, 2)$ e $B(4, 6)$: i cateti misurano $3$ e $4$, l'ipotenusa $AB$ misura $5$; $M$ è il punto medio"}
:::

:::attenzione
La distanza *non* è la somma delle differenze delle coordinate. Per $A(1, 2)$ e $B(4, 6)$ si ha $|4 - 1| + |6 - 2| = 7$, mentre $\overline{AB} = 5$. Il numero $7$ è la somma dei due cateti del triangolo rettangolo di ipotenusa $AB$, e l'ipotenusa è più corta della somma dei cateti.
:::

:::esempio{titolo="Estremo di un segmento noto il punto medio"}
Il segmento $AB$ ha estremo $A(-1, 4)$ e punto medio $M(2, 1)$. Dalle formule del punto medio $\dfrac{-1 + x_B}{2} = 2$ e $\dfrac{4 + y_B}{2} = 1$, quindi $x_B = 4 + 1 = 5$ e $y_B = 2 - 4 = -2$. L'altro estremo è $B(5, -2)$, cioè il **simmetrico** di $A$ rispetto a $M$, con coordinate $x_B = 2x_M - x_A$ e $y_B = 2y_M - y_A$.
:::

## La retta

:::definizione{#retta titolo="Equazione della retta"}
Una retta non verticale ha **equazione esplicita**
$$
y = mx + q ,
$$
dove $m$ è il **coefficiente angolare** e $q$ è l'ordinata del punto di intersezione con l'asse $y$. Una retta verticale ha equazione $x = c$. Ogni retta, verticale o no, si scrive in **forma implicita**
$$
ax + by + c = 0, \qquad (a, b) \neq (0, 0) ;
$$
per $b \neq 0$ le due forme si traducono l'una nell'altra con $m = -\dfrac{a}{b}$ e $q = -\dfrac{c}{b}$. La forma esplicita si legge come funzione e si disegna subito; la forma implicita comprende *anche* le rette verticali e compare nella formula della distanza punto-retta.
:::

:::definizione{#coefficiente-angolare titolo="Coefficiente angolare, rette per un punto, parallelismo e perpendicolarità"}
Il **coefficiente angolare** della retta per due punti $A(x_1, y_1)$ e $B(x_2, y_2)$ con $x_1 \neq x_2$ è
$$
m = \frac{y_2 - y_1}{x_2 - x_1} ,
$$
il rapporto tra la variazione di $y$ e la variazione di $x$. La retta di coefficiente angolare $m$ passante per il punto $P(x_0, y_0)$ è
$$
y - y_0 = m\,(x - x_0) .
$$
Due rette non verticali di coefficienti $m_1$ e $m_2$ sono **parallele** se e solo se $m_1 = m_2$; sono **perpendicolari** se e solo se $m_1 \, m_2 = -1$, cioè $m_2 = -\dfrac{1}{m_1}$. Con queste tre formule si scrive la retta richiesta in quasi tutti gli esercizi: si trova $m$ dai dati e si impone il passaggio per il punto.
:::

:::esempio
La retta per $P(1, 3)$ perpendicolare a $y = 2x - 5$ ha coefficiente angolare $m = -\dfrac{1}{2}$, quindi è $y - 3 = -\dfrac{1}{2}(x - 1)$, cioè $y = -\dfrac{1}{2}x + \dfrac{7}{2}$.

::grafico{f="2*x-5;-0.5*x+3.5" uguale=1 xmin=-2.5 xmax=6 ymin=-4 ymax=4 punti="1,3,pieno,P" titolo="La retta tratteggiata passa per $P(1, 3)$ ed è perpendicolare a $y = 2x - 5$"}
:::

::::teorema{#condizione-perpendicolarita titolo="Condizione di perpendicolarità"}
Due rette non verticali di coefficienti angolari $m_1$ e $m_2$ sono perpendicolari se e solo se $m_1 m_2 = -1$.

:::dimostrazione
L'idea è applicare il teorema di Pitagora a un triangolo con un vertice nel punto di intersezione. Se $m_1 = m_2$ le rette sono parallele, e infatti $m_1 m_2 = m_1^2 \geq 0$, quindi la condizione $m_1 m_2 = -1$ non è soddisfatta. Se $m_1 \neq m_2$ le rette si intersecano in un punto. Una traslazione che porta quel punto nell'origine non cambia gli angoli né i coefficienti angolari, quindi si può supporre che le due rette passino per l'origine $O$, con equazioni $y = m_1 x$ e $y = m_2 x$. Le rette contengono i punti $P_1(1, m_1)$ e $P_2(1, m_2)$. L'angolo in $O$ del triangolo $OP_1P_2$ è retto se e solo se $\overline{OP_1}^{\,2} + \overline{OP_2}^{\,2} = \overline{P_1P_2}^{\,2}$, per il teorema di Pitagora e il suo inverso. Con la formula della distanza l'uguaglianza diventa
$$
\begin{aligned}
(1 + m_1^2) + (1 + m_2^2) &= (m_1 - m_2)^2 \\[4pt]
2 + m_1^2 + m_2^2 &= m_1^2 - 2m_1 m_2 + m_2^2 \\[4pt]
m_1 m_2 &= -1 .
\end{aligned}
$$
Ogni passaggio si può percorrere nei due versi, quindi le rette sono perpendicolari se e solo se $m_1 m_2 = -1$.
:::

La condizione permette di calcolare il coefficiente angolare di una perpendicolare. Ad esempio, la perpendicolare a $y = \dfrac{2}{3}x$ ha coefficiente angolare $-\dfrac{3}{2}$, perché $\dfrac{2}{3} \cdot \left( -\dfrac{3}{2} \right) = -1$.
::::

:::attenzione
Le formule con $m$ valgono solo per rette *non* verticali. Per $A(2, 1)$ e $B(2, 5)$ il rapporto $\dfrac{5 - 1}{2 - 2}$ ha denominatore nullo, quindi la retta $AB$ non ha coefficiente angolare; infatti è la retta verticale $x = 2$. La perpendicolare a $x = 2$ per $P(0, 3)$ è la retta orizzontale $y = 3$, di coefficiente angolare $0$, e la condizione $m_1 m_2 = -1$ non si può applicare perché uno dei due coefficienti non esiste.
:::

:::esempio{titolo="Intersezione di due rette"}
Il punto comune alle rette $y = 2x - 1$ e $x + y = 5$ ha coordinate che soddisfano entrambe le equazioni, quindi si risolve il sistema
$$
\begin{cases}
y = 2x - 1 \\
x + y = 5 .
\end{cases}
$$
Sostituendo la prima equazione nella seconda si ottiene $x + 2x - 1 = 5$, cioè $3x = 6$ e $x = 2$; quindi $y = 2 \cdot 2 - 1 = 3$ e il punto di intersezione è $(2, 3)$. Il sistema ha una sola soluzione perché i coefficienti angolari $2$ e $-1$ sono diversi; due rette parallele distinte danno un sistema **impossibile**.

::grafico{f="2*x-1;5-x" uguale=1 xmin=-2 xmax=6 ymin=-2 ymax=6 punti="2,3,pieno,P" legenda="y = 2x - 1;x + y = 5" titolo="Le rette $y = 2x - 1$ e $x + y = 5$ si intersecano in $P(2, 3)$"}
:::

:::teorema{#distanza-punto-retta titolo="Distanza di un punto da una retta"}
La distanza del punto $P(x_0, y_0)$ dalla retta $r$ di equazione $ax + by + c = 0$ è
$$
d(P, r) = \frac{|a x_0 + b y_0 + c|}{\sqrt{a^2 + b^2}} .
$$
La retta va scritta in **forma implicita** prima di applicare la formula. La distanza punto-retta serve anche con le coniche, ad esempio per imporre che una retta sia tangente a una circonferenza: la **tangenza** equivale all'uguaglianza tra la distanza del centro dalla retta e il raggio.
:::

:::esempio
Distanza di $P(2, 1)$ dalla retta $3x - 4y + 1 = 0$:
$$
d = \frac{|3 \cdot 2 - 4 \cdot 1 + 1|}{\sqrt{9 + 16}} = \frac{3}{5} .
$$

::grafico{f="(3*x+1)/4" uguale=1 xmin=-1 xmax=4 ymin=-1 ymax=3 punti="2,1,pieno,P;1.64,1.48,pieno,H" segmenti="2,1,1.64,1.48" titolo="La distanza di $P(2, 1)$ dalla retta $3x - 4y + 1 = 0$ è la lunghezza del segmento $PH$, perpendicolare alla retta"}
:::

## La parabola

:::definizione{#parabola titolo="Parabola y = ax² + bx + c"}
Il grafico di $y = ax^2 + bx + c$ con $a \neq 0$ è una **parabola** con asse di simmetria verticale. Il **vertice** ha coordinate
$$
V\left( -\frac{b}{2a},\; c - \frac{b^2}{4a} \right) ,
$$
e l'ordinata del vertice si può anche calcolare sostituendo l'ascissa $x_V = -\dfrac{b}{2a}$ nell'equazione; l'asse di simmetria è la retta $x = x_V$. La **concavità** dipende dal segno di $a$:

- se $a > 0$ la concavità è rivolta verso l'alto e il vertice è il punto più basso;
- se $a < 0$ la concavità è rivolta verso il basso e il vertice è il punto più alto.

Le intersezioni con l'asse $x$ sono le soluzioni di $ax^2 + bx + c = 0$: due punti se $\Delta > 0$, uno se $\Delta = 0$, nessuno se $\Delta < 0$. L'intersezione con l'asse $y$ è il punto $(0, c)$. Vertice, concavità e intersezioni bastano per disegnare la parabola.
:::

:::esempio
$y = x^2 - 2x - 3$: il vertice è $V(1, -4)$, la concavità è verso l'alto poiché $a = 1 > 0$, le intersezioni con l'asse $x$ sono $(-1, 0)$ e $(3, 0)$, quella con l'asse $y$ è $(0, -3)$.

::grafico{f="x^2-2*x-3" xmin=-3 xmax=5 ymin=-5 ymax=6 punti="1,-4,pieno,V" titolo="$y = x^2 - 2x - 3$ con il vertice $V(1, -4)$"}
:::

::::teorema{#vertice-della-parabola titolo="Vertice della parabola e forma con il vertice"}
Per $a \neq 0$ vale l'identità
$$
ax^2 + bx + c = a\left( x + \frac{b}{2a} \right)^2 + c - \frac{b^2}{4a} .
$$
Di conseguenza, se $a > 0$ la funzione $y = ax^2 + bx + c$ ha il valore minimo $c - \dfrac{b^2}{4a}$ nel solo punto $x = -\dfrac{b}{2a}$, e se $a < 0$ ha in quel punto il valore massimo; il grafico è simmetrico rispetto alla retta $x = -\dfrac{b}{2a}$.

:::dimostrazione
Si raccoglie $a$ nei termini in $x$ e si completa il quadrato:
$$
\begin{aligned}
ax^2 + bx + c &= a\left( x^2 + \frac{b}{a}x \right) + c \\[4pt]
&= a\left[ \left( x + \frac{b}{2a} \right)^2 - \frac{b^2}{4a^2} \right] + c \\[4pt]
&= a\left( x + \frac{b}{2a} \right)^2 + c - \frac{b^2}{4a} .
\end{aligned}
$$
Il quadrato $\left( x + \dfrac{b}{2a} \right)^2$ è maggiore o uguale a zero e vale zero solo per $x = -\dfrac{b}{2a}$. Se $a > 0$ il primo addendo è quindi maggiore o uguale a zero, perciò $y \geq c - \dfrac{b^2}{4a}$, con l'uguaglianza solo in $x = -\dfrac{b}{2a}$; se $a < 0$ il primo addendo è minore o uguale a zero e la disuguaglianza si rovescia. Due punti alla stessa distanza $h$ da $x_V = -\dfrac{b}{2a}$, cioè $x_V + h$ e $x_V - h$, danno lo stesso quadrato $h^2$, quindi hanno la stessa ordinata, e perciò il grafico è simmetrico rispetto alla retta $x = x_V$.
:::

Con $V(x_V, y_V)$ l'identità si scrive $y = a(x - x_V)^2 + y_V$, e si usa quando il vertice è assegnato. Ad esempio, la parabola di vertice $V(2, -1)$ e con $a = 3$ è $y = 3(x - 2)^2 - 1 = 3x^2 - 12x + 11$.
::::

:::esempio{titolo="Parabola per tre punti"}
La parabola $y = ax^2 + bx + c$ passante per $(0, 1)$, $(1, 0)$ e $(2, 3)$ ha coefficienti che soddisfano le tre condizioni di passaggio insieme:
$$
\begin{cases}
c = 1 \\
a + b + c = 0 \\
4a + 2b + c = 3 .
\end{cases}
$$
Sostituendo $c = 1$ si ottiene $a + b = -1$ e $4a + 2b = 2$, cioè $2a + b = 1$; sottraendo la prima dalla seconda si trova $a = 2$, quindi $b = -1 - 2 = -3$. La parabola è $y = 2x^2 - 3x + 1$. Tre punti non allineati, con ascisse diverse, determinano una sola parabola con asse verticale.
:::

:::osservazione{#parabola-asse-orizzontale titolo="Parabola con asse orizzontale"}
L'equazione $x = ay^2 + by + c$ con $a \neq 0$ si ottiene dalla precedente scambiando i ruoli di $x$ e $y$, quindi rappresenta una parabola con asse di simmetria **orizzontale**: il vertice ha ordinata $y_V = -\dfrac{b}{2a}$, l'asse è la retta $y = y_V$, e la concavità è rivolta verso destra se $a > 0$ e verso sinistra se $a < 0$. Questa curva *non* è il grafico di una funzione $y = f(x)$, perché, per $a > 0$, a ogni ascissa maggiore di $x_V$ corrispondono due punti della curva (per $a < 0$ questo accade alle ascisse minori di $x_V$).

Per $x = y^2 - 2y$ si ha $y_V = 1$ e $x_V = 1 - 2 = -1$, quindi $V(-1, 1)$; le intersezioni con l'asse $y$ si trovano ponendo $x = 0$, cioè $y^2 - 2y = 0$, e sono $(0, 0)$ e $(0, 2)$.

::grafico{curve="t^2-2*t,t,-1.6,3.6" uguale=1 xmin=-2 xmax=5 ymin=-2 ymax=4 punti="-1,1,pieno,V;0,0;0,2" segmenti="-2,1,5,1" titolo="Parabola $x = y^2 - 2y$ con vertice $V(-1, 1)$ e asse orizzontale $y = 1$, tratteggiato"}
:::

## La circonferenza

:::definizione{#circonferenza titolo="Circonferenza"}
La circonferenza di centro $C(x_0, y_0)$ e raggio $r > 0$ è il **luogo dei punti** a distanza $r$ da $C$; elevando al quadrato la formula della distanza si ottiene l'**equazione canonica**
$$
(x - x_0)^2 + (y - y_0)^2 = r^2 .
$$
Sviluppando i quadrati si arriva alla **forma generale**
$$
x^2 + y^2 + ax + by + c = 0 ,
$$
con $a = -2x_0$, $b = -2y_0$ e $c = x_0^2 + y_0^2 - r^2$. Dalla forma generale si risale a centro e raggio:
$$
C\left( -\frac{a}{2},\; -\frac{b}{2} \right),
\qquad
r = \sqrt{\frac{a^2}{4} + \frac{b^2}{4} - c} ,
$$
*purché* la quantità sotto radice sia positiva. Una circonferenza in forma generale si riconosce da due tratti: $x^2$ e $y^2$ hanno lo stesso coefficiente e il termine $xy$ non compare.
:::

:::definizione{#completamento-dei-quadrati titolo="Completamento del quadrato"}
Per ogni $a \in \mathbb{R}$ vale
$$
x^2 + ax = \left( x + \frac{a}{2} \right)^2 - \frac{a^2}{4} .
$$
Il **completamento del quadrato** riscrive un'equazione di secondo grado in forma canonica senza formule da ricordare: si raggruppano i termini in $x$ e quelli in $y$, si completa ciascun gruppo e si porta la costante a destra. È il procedimento con cui si trovano centro e raggio di una circonferenza e con cui si riduce una conica qualunque alla sua forma canonica.
:::

:::esempio
$x^2 + y^2 - 2x - 4y + 1 = 0$. Completando i quadrati: $x^2 - 2x = (x - 1)^2 - 1$ e $y^2 - 4y = (y - 2)^2 - 4$, quindi l'equazione diventa
$$
(x - 1)^2 + (y - 2)^2 = 4 :
$$
una **circonferenza** di centro $C(1, 2)$ e raggio $r = 2$. Per disegnarla si segna il centro e si marcano i quattro punti a distanza $2$ da esso lungo le direzioni degli assi: $(3, 2)$, $(-1, 2)$, $(1, 4)$ e $(1, 0)$.

::grafico{curve="1+2*cos(t),2+2*sin(t),0,6.29" uguale=1 xmin=-2 xmax=4.5 ymin=-1 ymax=5 punti="1,2,pieno,C;3,2;-1,2;1,4;1,0" segmenti="1,2,3,2" etichette="1.8,2.2,r = 2" titolo="$(x - 1)^2 + (y - 2)^2 = 4$: centro $C(1, 2)$, raggio $2$ e i quattro punti lungo le direzioni degli assi"}
:::

:::attenzione
*Non* ogni equazione della forma $x^2 + y^2 + ax + by + c = 0$ rappresenta una circonferenza. In $x^2 + y^2 - 2x + 6 = 0$ il completamento dà $(x - 1)^2 + y^2 = -5$, e una somma di quadrati non può essere negativa, quindi **nessun punto** soddisfa l'equazione.
:::

:::osservazione{#retta-e-circonferenza titolo="Posizione di una retta rispetto a una circonferenza"}
Sia $d$ la distanza del centro dalla retta e $r$ il raggio. La retta è
- **secante** se $d < r$, con due punti in comune;
- **tangente** se $d = r$, con un solo punto in comune;
- **esterna** se $d > r$, senza punti in comune.

Gli stessi tre casi si riconoscono dal discriminante dell'equazione di secondo grado che si ottiene sostituendo l'equazione della retta in quella della circonferenza: $\Delta > 0$, $\Delta = 0$, $\Delta < 0$. Il confronto fra $d$ e $r$ fornisce soltanto la posizione, mentre la sostituzione fornisce anche le coordinate dei punti comuni. Ad esempio, sostituendo $y = x + 1$ in $x^2 + y^2 = 13$ si ottiene $2x^2 + 2x - 12 = 0$, cioè $x^2 + x - 6 = 0$, con soluzioni $x = 2$ e $x = -3$, quindi la retta è secante nei punti $(2, 3)$ e $(-3, -2)$.
:::

:::esempio{titolo="Rette tangenti di direzione assegnata"}
Le rette di coefficiente angolare $2$ tangenti alla circonferenza $x^2 + y^2 = 5$, di centro $O(0, 0)$ e raggio $\sqrt{5}$, hanno equazione $y = 2x + q$, cioè $2x - y + q = 0$. La retta è tangente se e solo se la distanza del centro dalla retta è uguale al raggio, quindi
$$
\frac{|q|}{\sqrt{2^2 + 1^2}} = \sqrt{5}
\quad\Longrightarrow\quad
|q| = 5 ,
$$
quindi le tangenti sono $y = 2x + 5$ e $y = 2x - 5$. Sostituendo $y = 2x + 5$ nell'equazione della circonferenza si ottiene $5x^2 + 20x + 20 = 0$, cioè $(x + 2)^2 = 0$, e il punto di tangenza è $(-2, 1)$; allo stesso modo l'altra tangente tocca la circonferenza in $(2, -1)$.

::grafico{curve="sqrt(5)*cos(t),sqrt(5)*sin(t),0,6.29" f="2*x+5;2*x-5" legenda="y = 2x + 5;y = 2x - 5;x^2 + y^2 = 5" uguale=1 xmin=-5 xmax=5 ymin=-4 ymax=4 punti="0,0,pieno,O;-2,1,pieno,T₁;2,-1,pieno,T₂" segmenti="0,0,-2,1;0,0,2,-1" titolo="Le tangenti $y = 2x + 5$ e $y = 2x - 5$ alla circonferenza $x^2 + y^2 = 5$: i raggi $OT_1$ e $OT_2$ sono perpendicolari alle tangenti"}
:::

## L'ellisse

:::definizione{#ellisse titolo="Ellisse in forma canonica"}
L'ellisse in forma canonica, con centro nell'origine e assi di simmetria sugli assi cartesiani, ha equazione
$$
\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1, \qquad a, b > 0 .
$$
I numeri $a$ e $b$ sono i **semiassi**: l'ellisse interseca l'asse $x$ nei **vertici** $(\pm a, 0)$ e l'asse $y$ nei vertici $(0, \pm b)$, e tutto il grafico sta nel rettangolo $-a \leq x \leq a$, $-b \leq y \leq b$. L'ellisse è il luogo dei punti per cui la somma delle distanze da due punti fissi, i **fuochi**, è costante; questo enunciato si assume. I fuochi stanno sull'asse del semiasse maggiore:

- se $a > b$ i fuochi sono $(\pm c, 0)$ con $c^2 = a^2 - b^2$;
- se $b > a$ i fuochi sono $(0, \pm c)$ con $c^2 = b^2 - a^2$.

Per disegnare l'ellisse si segnano i quattro vertici e si raccorda con una curva ovale simmetrica rispetto ai due assi.
:::

:::esempio
$\dfrac{x^2}{9} + \dfrac{y^2}{4} = 1$: i semiassi sono $a = 3$ e $b = 2$, i vertici sono $(\pm 3, 0)$ e $(0, \pm 2)$. Poiché $a > b$, i fuochi stanno sull'asse $x$: da $c^2 = 9 - 4 = 5$ segue che sono $(\pm\sqrt{5}, 0)$.

::grafico{curve="3*cos(t),2*sin(t),0,6.29" uguale=1 xmin=-4 xmax=4 ymin=-3 ymax=3 punti="3,0;-3,0;0,2;0,-2;2.236,0,vuoto,F₁;-2.236,0,vuoto,F₂" titolo="Ellisse $\dfrac{x^2}{9} + \dfrac{y^2}{4} = 1$: vertici $(\pm 3, 0)$ e $(0, \pm 2)$, fuochi $F_1$ e $F_2$ in $(\pm\sqrt{5}, 0)$"}
:::

:::attenzione
I semiassi si leggono solo dalla forma con il secondo membro uguale a $1$. L'equazione $4x^2 + 9y^2 = 36$ *non* ha semiassi $2$ lungo $x$ e $3$ lungo $y$: il punto $(2, 0)$ dà $4 \cdot 4 = 16 \neq 36$, quindi non appartiene alla curva. Dividendo per $36$ si ottiene $\dfrac{x^2}{9} + \dfrac{y^2}{4} = 1$, perciò i semiassi sono $3$ lungo $x$ e $2$ lungo $y$, e infatti il punto $(3, 0)$ dà $4 \cdot 9 = 36$.
:::

## L'iperbole

:::definizione{#iperbole titolo="Iperbole in forma canonica"}
L'iperbole in forma canonica con i fuochi sull'asse $x$ ha equazione
$$
\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1, \qquad a, b > 0 .
$$
Interseca l'asse $x$ nei vertici $(\pm a, 0)$ e non interseca l'asse $y$: il grafico è formato da **due rami**, uno a destra di $x = a$ e uno a sinistra di $x = -a$. I fuochi sono $(\pm c, 0)$ con $c^2 = a^2 + b^2$, e l'iperbole è il luogo dei punti per cui la **differenza** delle distanze dai fuochi è costante in valore assoluto; questo enunciato si assume. I due rami si avvicinano indefinitamente agli **asintoti**
$$
y = \frac{b}{a}\,x, \qquad y = -\frac{b}{a}\,x .
$$
L'equazione $\dfrac{x^2}{a^2} - \dfrac{y^2}{b^2} = -1$ rappresenta un'iperbole con i fuochi sull'asse $y$, vertici $(0, \pm b)$ e gli stessi asintoti. Per disegnare un'iperbole si traccia il rettangolo di lati $x = \pm a$ e $y = \pm b$, si prolungano le sue diagonali, che sono gli asintoti, e si disegnano i rami a partire dai vertici, avvicinandoli agli asintoti.
:::

:::esempio
$\dfrac{x^2}{4} - \dfrac{y^2}{9} = 1$: i vertici sono $(\pm 2, 0)$, da $c^2 = 4 + 9 = 13$ i fuochi sono $(\pm\sqrt{13}, 0)$, gli asintoti sono $y = \pm\dfrac{3}{2}x$. I rami passano per i vertici e si schiacciano sugli asintoti allontanandosi dall'origine.

::grafico{curve="2/cos(t),3*tan(t),0,6.2832" uguale=1 xmin=-6.5 xmax=6.5 ymin=-6 ymax=6 segmenti="-4,-6,4,6;-4,6,4,-6;2,-3,2,3;-2,-3,-2,3;-2,3,2,3;-2,-3,2,-3" punti="2,0;-2,0;3.606,0,vuoto,F₁;-3.606,0,vuoto,F₂" titolo="Iperbole $\dfrac{x^2}{4} - \dfrac{y^2}{9} = 1$: vertici $(\pm 2, 0)$, fuochi $(\pm\sqrt{13}, 0)$; i rami si avvicinano agli asintoti $y = \pm\dfrac{3}{2}x$, diagonali del rettangolo di lati $x = \pm 2$ e $y = \pm 3$"}
:::

:::osservazione{#iperbole-equilatera titolo="Iperbole equilatera riferita agli asintoti"}
Se $a = b$ gli asintoti $y = \pm x$ sono perpendicolari e l'iperbole si dice **equilatera**. Ruotata di $45°$, in modo che gli asintoti diventino gli assi cartesiani, ha equazione
$$
xy = k, \qquad k \neq 0 ,
$$
cioè $y = \dfrac{k}{x}$; questo fatto si assume. Per $k > 0$ i rami stanno nel primo e nel terzo quadrante, per $k < 0$ nel secondo e nel quarto. I vertici stanno sulla bisettrice dei quadranti che contengono i rami: per $xy = 4$ sono $(2, 2)$ e $(-2, -2)$, perché $x = y$ e $x^2 = 4$. Questa equazione contiene il termine $xy$, quindi non è della forma $A x^2 + C y^2 + D x + E y + F = 0$ usata per riconoscere le coniche; la funzione $y = \dfrac{k}{x}$ compare spesso in Analisi 1 come esempio di funzione con asintoto verticale $x = 0$ e asintoto orizzontale $y = 0$.

::grafico{f="4/x" legenda="xy = 4" uguale=1 xmin=-6 xmax=6 ymin=-6 ymax=6 punti="2,2,pieno;-2,-2,pieno" segmenti="-6,-6,6,6" etichette="2.3,1.6,(2, 2);-4.6,-2.4,(−2, −2)" titolo="Iperbole equilatera $xy = 4$: gli asintoti sono gli assi cartesiani e i vertici $(2, 2)$ e $(-2, -2)$ stanno sulla bisettrice $y = x$, tratteggiata"}
:::

## Riconoscere una conica

:::teorema{#riconoscere-una-conica titolo="Riconoscere una conica dall'equazione"}
Un'equazione di secondo grado in $x$ e $y$ senza il termine $xy$,
$$
A x^2 + C y^2 + D x + E y + F = 0 ,
$$
rappresenta una conica con assi paralleli agli assi cartesiani. Il tipo si legge dai coefficienti $A$ e $C$ dei termini quadratici:

- uno *solo* tra $A$ e $C$ è diverso da zero, e l'altra variabile compare al primo grado: parabola;
- $A = C \neq 0$: circonferenza;
- $A$ e $C$ hanno lo stesso segno ma valori diversi: ellisse;
- $A$ e $C$ hanno segni opposti: iperbole.

Il completamento dei quadrati può anche portare a un **caso degenere**, come un solo punto o nessun punto per una somma di quadrati uguale a zero o a un numero negativo, oppure una coppia di rette per una differenza di quadrati uguale a zero; il **tipo definitivo** si conferma dopo la riduzione.
:::

:::esempio{titolo="Un caso degenere: coppia di rette"}
In $x^2 - 4y^2 - 2x + 1 = 0$ i coefficienti quadratici $1$ e $-4$ hanno segni opposti, quindi ci si aspetta un'iperbole. Il completamento dà $(x - 1)^2 - 4y^2 = 0$, con secondo membro nullo, e la differenza di quadrati si scompone:
$$
(x - 1 - 2y)(x - 1 + 2y) = 0 .
$$
Un prodotto è nullo se e solo se è nullo almeno un fattore, quindi l'equazione rappresenta la coppia di rette $y = \dfrac{x - 1}{2}$ e $y = -\dfrac{x - 1}{2}$, che si incontrano in $(1, 0)$. Sono gli asintoti che avrebbero le iperboli $(x - 1)^2 - 4y^2 = k$ con $k \neq 0$.

::grafico{f="(x-1)/2;-(x-1)/2" uguale=1 xmin=-4 xmax=6 ymin=-3 ymax=3 punti="1,0,pieno" legenda="y = \dfrac{x - 1}{2};y = -\dfrac{x - 1}{2}" titolo="L'equazione $x^2 - 4y^2 - 2x + 1 = 0$ rappresenta le due rette $y = \pm\dfrac{x - 1}{2}$, che si incontrano in $(1, 0)$"}
:::

:::teorema{#ridurre-e-disegnare titolo="Procedimento per ridurre e disegnare"}
Per disegnare la conica di equazione $A x^2 + C y^2 + D x + E y + F = 0$:

1. si raccoglie $A$ nei termini in $x$ e $C$ nei termini in $y$;
2. si completa il quadrato in ciascun gruppo;
3. si porta la costante a destra e si divide per essa, ottenendo la **forma canonica** centrata in un punto $(x_0, y_0)$;
4. si segnano centro e vertici, e per l'iperbole gli asintoti, traslati nel centro.

La forma canonica è quella delle sezioni precedenti con $x - x_0$ e $y - y_0$ al posto di $x$ e $y$: la conica è quella canonica **traslata** del vettore $(x_0, y_0)$.
:::

:::esempio
$9x^2 + 4y^2 - 18x - 16y - 11 = 0$. I coefficienti dei quadrati sono $9$ e $4$, dello stesso segno e diversi, quindi l'equazione rappresenta un'**ellisse**. Raccogliendo e completando:
$$
\begin{aligned}
9(x^2 - 2x) + 4(y^2 - 4y) - 11 &= 0 \\[4pt]
9(x - 1)^2 - 9 + 4(y - 2)^2 - 16 - 11 &= 0 \\[4pt]
9(x - 1)^2 + 4(y - 2)^2 &= 36 ,
\end{aligned}
$$
e dividendo per $36$:
$$
\frac{(x - 1)^2}{4} + \frac{(y - 2)^2}{9} = 1 .
$$
È un'ellisse di centro $(1, 2)$ e semiassi $2$ lungo $x$ e $3$ lungo $y$: i vertici sono $(3, 2)$, $(-1, 2)$, $(1, 5)$ e $(1, -1)$. Poiché il semiasse maggiore è **verticale**, da $c^2 = 9 - 4 = 5$ i fuochi sono $(1, 2 \pm \sqrt{5})$.

::grafico{curve="1+2*cos(t),2+3*sin(t),0,6.29" uguale=1 xmin=-2.6 xmax=4.6 ymin=-1.5 ymax=5.5 segmenti="1,-1.5,1,5.5;-2.6,2,4.6,2" punti="1,2,pieno,C;3,2;-1,2;1,5;1,-1;1,4.236,vuoto,F₁;1,-0.236,vuoto,F₂" titolo="Ellisse $\dfrac{(x - 1)^2}{4} + \dfrac{(y - 2)^2}{9} = 1$ di centro $C(1, 2)$: i fuochi stanno sull'asse verticale $x = 1$"}
:::
