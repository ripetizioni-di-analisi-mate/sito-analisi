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

::grafico{f="4/3*x+2/3+0*sqrt(x-1)+0*sqrt(4-x)" uguale=1 xmin=-1.5 xmax=7 ymin=-1 ymax=7 punti="1,2,pieno,A;4,6,pieno,B;2.5,4,pieno,M" segmenti="1,2,4,2;4,2,4,6" etichette="2.4,1.5,3;4.2,3.9,4;1.4,4,5" titolo="Distanza tra $A(1, 2)$ e $B(4, 6)$: i cateti misurano $3$ e $4$, l'ipotenusa $AB$ misura $5$; $M$ è il punto medio"}
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

::grafico{f="2*x-5;-0.5*x+3.5" uguale=1 xmin=-2.5 xmax=6 ymin=-4 ymax=4 punti="1,3,pieno,P" titolo="La retta per $P(1, 3)$ perpendicolare a $y = 2x - 5$, tratteggiata"}
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

::grafico{f="x^2-2*x-3" xmin=-3 xmax=5 ymin=-5 ymax=6 punti="1,-4" titolo="y = x² − 2x − 3 con il vertice V(1, −4)"}
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

Il completamento dei quadrati può anche portare a un **caso degenere**, come un solo punto o nessun punto per una somma di quadrati uguale a zero o a un numero negativo; il **tipo definitivo** si conferma dopo la riduzione.
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
