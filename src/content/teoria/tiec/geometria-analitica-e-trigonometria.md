---
titolo: Geometria analitica e cenni di trigonometria
sommario: Come si calcolano distanze e punti medi nel piano cartesiano, come si scrivono e si confrontano le equazioni di rette, circonferenze e parabole, e come si usano seno, coseno e tangente nella circonferenza goniometrica e nel triangolo rettangolo.
---

## Il piano cartesiano

:::definizione{#piano-cartesiano titolo="Piano cartesiano e coordinate"}
Un **piano cartesiano** è un piano con due rette perpendicolari orientate, l'asse $x$ orizzontale e l'asse $y$ verticale, che si incontrano nell'origine $O$, e con la stessa unità di misura su entrambe. Ogni punto $P$ del piano corrisponde a una coppia ordinata di numeri $(x;y)$, le sue **coordinate**: l'ascissa $x$ è la posizione della proiezione di $P$ sull'asse $x$, l'ordinata $y$ quella della proiezione sull'asse $y$. Gli assi dividono il piano in quattro quadranti, numerati in senso antiorario a partire da quello in alto a destra. Il punto $(-3;2)$ sta nel secondo quadrante, perché ha ascissa negativa e ordinata positiva. I punti dell'asse $x$ hanno ordinata $0$, quelli dell'asse $y$ hanno ascissa $0$.
:::

:::teorema{#distanza-due-punti titolo="Distanza tra due punti"}
La distanza tra i punti $A(x_A;y_A)$ e $B(x_B;y_B)$ è
$$
\overline{AB} = \sqrt{(x_B - x_A)^2 + (y_B - y_A)^2} .
$$
La formula viene dal teorema di Pitagora: il segmento $AB$ è l'ipotenusa di un triangolo rettangolo con i cateti paralleli agli assi, lunghi $|x_B - x_A|$ e $|y_B - y_A|$. Per $A(1;1)$ e $B(4;5)$ i cateti misurano $3$ e $4$, quindi
$$
\overline{AB} = \sqrt{3^2 + 4^2} = \sqrt{25} = 5 .
$$
L'ordine dei due punti non conta, perché le differenze compaiono al quadrato.

::grafico{punti="1,1,pieno,A;4,5,pieno,B" linee="1,1 4,5" segmenti="1,1,4,1;4,1,4,5" etichette="2.5,0.55,3;4.35,3,4" xmin=-1 xmax=6 ymin=-1 ymax=6 uguale=1 titolo="La distanza tra $A(1;1)$ e $B(4;5)$ è l'ipotenusa di un triangolo rettangolo con cateti $3$ e $4$, quindi vale $5$"}

:::

:::teorema{#punto-medio titolo="Punto medio di un segmento"}
Il punto medio $M$ del segmento di estremi $A(x_A;y_A)$ e $B(x_B;y_B)$ ha come coordinate le medie delle coordinate degli estremi:
$$
M\left( \frac{x_A + x_B}{2} ; \frac{y_A + y_B}{2} \right) .
$$
Il punto a metà strada tra due numeri sulla retta è la loro media, e lo stesso vale separatamente sui due assi. Per $A(-2;3)$ e $B(6;-1)$ si ottiene $M\left( \dfrac{-2 + 6}{2} ; \dfrac{3 - 1}{2} \right) = (2;1)$. La formula serve anche al contrario: noti $A$ e $M$, l'altro estremo è $B(2x_M - x_A;\, 2y_M - y_A)$.
:::

## La retta

:::definizione{#retta-esplicita titolo="Equazione esplicita della retta"}
Ogni retta non parallela all'asse $y$ ha un'equazione della forma
$$
y = mx + q ,
$$
detta **equazione esplicita**. Il numero $q$ è l'**ordinata all'origine**, cioè l'ordinata del punto in cui la retta taglia l'asse $y$, perché per $x = 0$ si ha $y = q$. La retta $y = 2x - 1$ taglia l'asse $y$ nel punto $(0;-1)$. Le rette parallele agli assi hanno equazioni più semplici: $y = k$ è la retta orizzontale formata dai punti di ordinata $k$, e $x = k$ è la retta verticale formata dai punti di ascissa $k$.
:::

:::definizione{#coefficiente-angolare titolo="Coefficiente angolare"}
Il numero $m$ dell'equazione esplicita è il **coefficiente angolare** e misura la pendenza della retta: è l'aumento di $y$ quando $x$ aumenta di $1$. Presi due punti distinti $(x_1;y_1)$ e $(x_2;y_2)$ della retta, con $x_1 \neq x_2$,
$$
m = \frac{y_2 - y_1}{x_2 - x_1} .
$$
Sulla retta $y = 2x - 1$ ci sono i punti $(1;1)$ e $(3;5)$, e infatti $m = \dfrac{5 - 1}{3 - 1} = 2$.

- Se $m > 0$ la retta sale da sinistra verso destra.
- Se $m < 0$ la retta scende da sinistra verso destra.
- Se $m = 0$ la retta è orizzontale.

::grafico{f="2*x-1" punti="1,1,pieno;3,5,pieno" segmenti="1,1,3,1;3,1,3,5" etichette="2,0.5,Δx = 2;3.9,3,Δy = 4" xmin=-2 xmax=5 ymin=-3 ymax=7 titolo="Sulla retta $y = 2x - 1$, quando $x$ aumenta di $2$ la $y$ aumenta di $4$: il coefficiente angolare è $m = \dfrac{4}{2} = 2$"}

:::

:::definizione{#retta-implicita titolo="Equazione implicita della retta"}
Ogni retta ha un'equazione della forma
$$
ax + by + c = 0 ,
$$
con $a$ e $b$ non entrambi nulli, detta **equazione implicita**. Questa forma comprende anche le rette verticali, che si hanno per $b = 0$. Se $b \neq 0$, ricavando $y$ si passa alla forma esplicita, quindi il coefficiente angolare è $m = -\dfrac{a}{b}$. La retta $3x - 6y + 12 = 0$ si scrive $y = \dfrac{1}{2}x + 2$, e infatti $-\dfrac{a}{b} = -\dfrac{3}{-6} = \dfrac{1}{2}$.
:::

:::teorema{#retta-per-due-punti titolo="Retta passante per due punti"}
Per due punti distinti passa una sola retta. Se $A(x_A;y_A)$ e $B(x_B;y_B)$ hanno ascisse diverse, si calcola prima il coefficiente angolare $m = \dfrac{y_B - y_A}{x_B - x_A}$ e poi si scrive la retta che passa per $A$ con quella pendenza:
$$
y - y_A = m\,(x - x_A) .
$$
L'equazione $y - y_A = m(x - x_A)$ descrive la retta di coefficiente angolare $m$ per $A$, perché è di primo grado e le coordinate di $A$ la soddisfano. Per $A(2;1)$ e $B(4;7)$ si ha $m = \dfrac{7 - 1}{4 - 2} = 3$, quindi $y - 1 = 3(x - 2)$, cioè $y = 3x - 5$. Come controllo, sostituendo $x = 4$ si ottiene $y = 7$, che è l'ordinata di $B$.
:::

:::osservazione{#appartenenza-retta titolo="Appartenenza di un punto a una retta"}
Un punto appartiene a una retta se e solo se le sue coordinate soddisfano l'equazione della retta. Il punto $P(2;1)$ appartiene alla retta $3x - y - 5 = 0$, perché $3 \cdot 2 - 1 - 5 = 0$; il punto $Q(1;1)$ non le appartiene, perché $3 \cdot 1 - 1 - 5 = -3 \neq 0$. Nei quiz questo controllo permette di scartare in pochi secondi le equazioni che non passano per un punto noto.
:::

## Rette parallele, perpendicolari e intersezioni

:::teorema{#rette-parallele-perpendicolari titolo="Rette parallele e rette perpendicolari"}
Siano $y = m_1 x + q_1$ e $y = m_2 x + q_2$ due rette non verticali.

- Le rette sono **parallele** se e solo se $m_1 = m_2$.
- Le rette sono **perpendicolari** se e solo se $m_1 \cdot m_2 = -1$, cioè $m_2 = -\dfrac{1}{m_1}$.

Due rette parallele hanno la stessa pendenza. Per la perpendicolarità, ruotando di un angolo retto il triangolo che ha cateto orizzontale $1$ e cateto verticale $m_1$, il cateto orizzontale diventa $-m_1$ e quello verticale $1$, quindi la pendenza diventa $-\dfrac{1}{m_1}$. Le rette $y = 2x + 1$ e $y = 2x - 3$ sono parallele, mentre la retta $y = -\dfrac{1}{2}x + 1$ è perpendicolare a entrambe, perché $2 \cdot \left( -\dfrac{1}{2} \right) = -1$.

::grafico{f="2*x+1;2*x-3;-0.5*x+1" legenda="y = 2x + 1;y = 2x - 3;y = -\dfrac{1}{2}x + 1" xmin=-4 xmax=5 ymin=-4 ymax=5 uguale=1 titolo="Le rette $y = 2x + 1$ e $y = 2x - 3$ sono parallele; la retta $y = -\dfrac{1}{2}x + 1$ è perpendicolare a entrambe"}

:::

:::esempio{titolo="Retta parallela e retta perpendicolare per un punto"}
La retta parallela a $y = 3x + 2$ passante per $P(1;-1)$ ha coefficiente angolare $3$, quindi è $y + 1 = 3(x - 1)$, cioè $y = 3x - 4$. La retta perpendicolare a $y = 3x + 2$ per lo stesso punto ha coefficiente angolare $-\dfrac{1}{3}$, quindi è
$$
y + 1 = -\frac{1}{3}(x - 1)
\iff
y = -\frac{1}{3}x - \frac{2}{3} .
$$
:::

:::teorema{#intersezione-rette titolo="Intersezione di due rette"}
Le coordinate del punto comune a due rette soddisfano entrambe le equazioni, quindi si trovano risolvendo il sistema formato dalle due equazioni. Per le rette $y = 2x + 1$ e $x + y = 7$:
$$
\begin{cases}
y = 2x + 1 \\
x + y = 7
\end{cases}
\iff
\begin{cases}
y = 2x + 1 \\
x + 2x + 1 = 7
\end{cases}
\iff
\begin{cases}
x = 2 \\
y = 5
\end{cases}
$$
quindi le rette si incontrano nel punto $(2;5)$. Se le due rette sono parallele e distinte, il sistema non ha soluzioni; se coincidono, ne ha infinite. Per la risoluzione dei sistemi si rimanda al capitolo su equazioni, disequazioni e sistemi.
:::

:::esempio{titolo="Punto di pareggio tra ricavi e costi"}
Un'impresa vende un prodotto a $15$ euro al pezzo e ha costi fissi di $200$ euro più $10$ euro per ogni pezzo prodotto. Con $q$ pezzi il ricavo è $R = 15q$ e il costo è $C = 10q + 200$: sono due rette nel piano con $q$ in ascissa e gli euro in ordinata. Il **punto di pareggio** è la loro intersezione, quindi si risolve $15q = 10q + 200$ e si trova $q = 40$, con ricavo e costo uguali a $600$ euro. Per $q > 40$ la retta dei ricavi sta sopra quella dei costi, perciò l'impresa è in utile.

::grafico{f="15*x+0*sqrt(x);10*x+200+0*sqrt(x)" punti="40,600,pieno" segmenti="40,0,40,600" nomi="q,€" legenda="R = 15q;C = 10q + 200" xmin=-10 xmax=90 ymin=-100 ymax=900 titolo="Le rette dei ricavi e dei costi si incontrano nel punto di pareggio $(40;600)$"}

:::

## La circonferenza

:::definizione{#equazione-circonferenza titolo="Equazione della circonferenza"}
La **circonferenza** di centro $C(\alpha;\beta)$ e raggio $r > 0$ è l'insieme dei punti del piano che distano $r$ da $C$. Per la formula della distanza, un punto $(x;y)$ le appartiene se e solo se
$$
(x - \alpha)^2 + (y - \beta)^2 = r^2 .
$$
Sviluppando i quadrati si ottiene la forma
$$
x^2 + y^2 + ax + by + c = 0 ,
\qquad
a = -2\alpha, \quad b = -2\beta, \quad c = \alpha^2 + \beta^2 - r^2 .
$$
La circonferenza di centro $(2;1)$ e raggio $3$ ha equazione $(x - 2)^2 + (y - 1)^2 = 9$, cioè $x^2 + y^2 - 4x - 2y - 4 = 0$. La circonferenza di centro l'origine e raggio $r$ ha equazione $x^2 + y^2 = r^2$.
:::

:::teorema{#centro-raggio titolo="Centro e raggio dall'equazione"}
Data l'equazione $x^2 + y^2 + ax + by + c = 0$, il centro e il raggio sono
$$
C\left( -\frac{a}{2} ; -\frac{b}{2} \right),
\qquad
r = \sqrt{\frac{a^2}{4} + \frac{b^2}{4} - c} ,
$$
purché la quantità sotto radice sia positiva. Le formule si ottengono rovesciando le relazioni tra $a$, $b$, $c$ e $\alpha$, $\beta$, $r$. Per $x^2 + y^2 - 4x - 2y - 4 = 0$ si ha $a = -4$ e $b = -2$, quindi il centro è $(2;1)$ e il raggio è $\sqrt{4 + 1 + 4} = 3$. Poiché il termine noto è $-4$, sotto radice si *aggiunge* $4$.

::grafico{curve="2+3*cos(t),1+3*sin(t),0,6.29" punti="2,1,pieno,C" segmenti="2,1,5,1" etichette="3.5,1.35,r = 3" legenda="0" xmin=-3 xmax=7 ymin=-3 ymax=5 uguale=1 titolo="La circonferenza $x^2 + y^2 - 4x - 2y - 4 = 0$ ha centro $C(2;1)$ e raggio $3$"}

:::

:::attenzione
Un'equazione della forma $x^2 + y^2 + ax + by + c = 0$ rappresenta una circonferenza solo se $\dfrac{a^2}{4} + \dfrac{b^2}{4} - c > 0$. L'equazione $x^2 + y^2 - 2x + 4y + 10 = 0$ dà $1 + 4 - 10 = -5 < 0$, quindi non è soddisfatta da alcun punto del piano. Inoltre i coefficienti di $x^2$ e di $y^2$ devono essere uguali: l'equazione $x^2 + 2y^2 = 4$ non rappresenta una circonferenza.
:::

:::osservazione{#appartenenza-circonferenza titolo="Posizione di un punto rispetto alla circonferenza"}
Un punto $P$ appartiene alla circonferenza se le sue coordinate soddisfano l'equazione. Se non la soddisfano, si confronta la distanza di $P$ dal centro con il raggio: il punto è **interno** se la distanza è minore di $r$, **esterno** se è maggiore. Con l'equazione nella forma $x^2 + y^2 + ax + by + c = 0$ basta sostituire le coordinate nel primo membro, che risulta negativo per i punti interni e positivo per quelli esterni. Per $x^2 + y^2 - 4x - 2y - 4 = 0$, il punto $(5;1)$ dà $25 + 1 - 20 - 2 - 4 = 0$ e appartiene alla circonferenza; il punto $(4;3)$ dà $16 + 9 - 16 - 6 - 4 = -1 < 0$ ed è interno.
:::

:::teorema{#retta-circonferenza titolo="Posizione di una retta rispetto alla circonferenza"}
Sia $d$ la distanza del centro dalla retta e $r$ il raggio.

- Se $d < r$ la retta è **secante**: incontra la circonferenza in due punti.
- Se $d = r$ la retta è **tangente**: ha un solo punto in comune con la circonferenza.
- Se $d > r$ la retta è **esterna**: non ha punti in comune con la circonferenza.

La distanza del punto $(x_0;y_0)$ dalla retta $ax + by + c = 0$ è $d = \dfrac{|ax_0 + by_0 + c|}{\sqrt{a^2 + b^2}}$. Per la circonferenza $x^2 + y^2 = 25$ e la retta $3x + 4y - 25 = 0$ si ha $d = \dfrac{|-25|}{\sqrt{9 + 16}} = 5 = r$, quindi la retta è tangente. In alternativa si sostituisce la $y$ della retta nell'equazione della circonferenza: l'equazione di secondo grado che si ottiene ha due soluzioni, una sola o nessuna secondo che la retta sia secante, tangente o esterna.

::grafico{curve="2*cos(t),2*sin(t),0,6.29" f="1+0*x;2+0*x;3+0*x" legenda="y = 1;y = 2;y = 3" punti="0,0,pieno,O" xmin=-4 xmax=4 ymin=-3 ymax=4 uguale=1 titolo="Rispetto alla circonferenza $x^2 + y^2 = 4$ la retta $y = 1$ è secante, la retta $y = 2$ è tangente, la retta $y = 3$ è esterna"}

:::

:::esempio{titolo="Intersezioni di una retta con una circonferenza"}
Per trovare i punti comuni alla circonferenza $x^2 + y^2 = 4$ e alla retta $y = x + 2$ si sostituisce $y$ nella prima equazione:
$$
x^2 + (x + 2)^2 = 4
\iff
2x^2 + 4x = 0
\iff
2x\,(x + 2) = 0 .
$$
Le soluzioni sono $x = 0$ e $x = -2$, quindi la retta è secante e i punti comuni sono $(0;2)$ e $(-2;0)$.
:::

## La parabola

:::definizione{#parabola titolo="Parabola con asse verticale"}
Il grafico di $y = ax^2 + bx + c$, con $a \neq 0$, è una **parabola** con asse parallelo all'asse $y$. Il segno di $a$ dà la **concavità**.

- Se $a > 0$ la parabola ha la concavità rivolta verso l'alto e il vertice è il punto più basso.
- Se $a < 0$ la parabola ha la concavità rivolta verso il basso e il vertice è il punto più alto.

Più $|a|$ è grande, più la parabola è stretta. Il termine noto $c$ è l'ordinata del punto in cui la parabola taglia l'asse $y$, perché per $x = 0$ si ha $y = c$.
:::

:::teorema{#vertice-parabola titolo="Vertice e asse della parabola"}
La parabola $y = ax^2 + bx + c$ ha per asse di simmetria la retta $x = -\dfrac{b}{2a}$, e il vertice è il punto dell'asse che sta sulla parabola:
$$
V\left( -\frac{b}{2a} ; -\frac{\Delta}{4a} \right),
\qquad
\Delta = b^2 - 4ac .
$$
Quando la parabola taglia l'asse $x$ in due punti, l'asse sta a metà strada fra i due, e la media delle soluzioni di $ax^2 + bx + c = 0$ è $\dfrac{x_1 + x_2}{2} = -\dfrac{b}{2a}$. L'ordinata del vertice si può anche ottenere sostituendo l'ascissa nell'equazione. Per $y = x^2 - 4x + 3$ l'asse è $x = 2$ e il vertice è $(2;-1)$, perché $4 - 8 + 3 = -1$.
:::

:::teorema{#intersezioni-parabola titolo="Intersezioni della parabola con gli assi"}
La parabola $y = ax^2 + bx + c$ taglia l'asse $y$ nel punto $(0;c)$. I punti in cui taglia l'asse $x$ hanno ordinata $0$, quindi le loro ascisse sono le soluzioni dell'equazione $ax^2 + bx + c = 0$.

- Se $\Delta > 0$ la parabola taglia l'asse $x$ in due punti.
- Se $\Delta = 0$ la parabola è tangente all'asse $x$ nel vertice.
- Se $\Delta < 0$ la parabola non incontra l'asse $x$.

Per $y = x^2 - 4x + 3$ si ha $\Delta = 16 - 12 = 4 > 0$, e le soluzioni di $x^2 - 4x + 3 = 0$ sono $1$ e $3$; perciò la parabola passa per $(1;0)$, $(3;0)$ e $(0;3)$. Questo grafico è anche lo strumento per studiare il segno del trinomio nelle disequazioni di secondo grado, trattate nel capitolo su equazioni, disequazioni e sistemi.

::grafico{f="x^2-4*x+3" punti="2,-1,pieno,V;1,0,pieno;3,0,pieno;0,3,pieno" segmenti="2,-2,2,6" legenda="y = x^2 - 4x + 3" xmin=-2 xmax=6 ymin=-2 ymax=6 uguale=1 titolo="La parabola $y = x^2 - 4x + 3$: vertice $V(2;-1)$, asse $x = 2$, intersezioni $(1;0)$, $(3;0)$ e $(0;3)$"}

:::

:::esempio{titolo="Intersezioni di una parabola con una retta"}
I punti comuni alla parabola $y = x^2 - 4x + 3$ e alla retta $y = x - 1$ si trovano uguagliando le due espressioni di $y$:
$$
x^2 - 4x + 3 = x - 1
\iff
x^2 - 5x + 4 = 0
\iff
x = 1 \;\vee\; x = 4 .
$$
Le ordinate si calcolano sulla retta, che è più semplice: i punti sono $(1;0)$ e $(4;3)$. Se l'equazione risolvente avesse $\Delta = 0$ la retta sarebbe tangente alla parabola; con $\Delta < 0$ non ci sarebbero punti comuni.
:::

## Angoli e circonferenza goniometrica

:::definizione{#radianti titolo="Misura degli angoli in gradi e in radianti"}
Un angolo si misura in **gradi**, con l'angolo giro di $360^\circ$, oppure in **radianti**. Un radiante è l'angolo al centro di una circonferenza che sottende un arco lungo quanto il raggio; l'angolo giro misura $2\pi$ radianti, perché la circonferenza è lunga $2\pi r$. Quindi $180^\circ$ corrispondono a $\pi$ radianti e
$$
x_{\text{rad}} = x^\circ \cdot \frac{\pi}{180} ,
\qquad
x^\circ = x_{\text{rad}} \cdot \frac{180}{\pi} .
$$
Per esempio $60^\circ = \dfrac{60\,\pi}{180} = \dfrac{\pi}{3}$ e $\dfrac{3\pi}{4} = \dfrac{3 \cdot 180^\circ}{4} = 135^\circ$. Gli angoli più usati sono $30^\circ = \dfrac{\pi}{6}$, $45^\circ = \dfrac{\pi}{4}$, $90^\circ = \dfrac{\pi}{2}$.
:::

:::definizione{#seno-coseno titolo="Seno, coseno e tangente"}
La **circonferenza goniometrica** è la circonferenza di centro l'origine e raggio $1$. Un angolo $x$ si disegna a partire dal semiasse positivo delle $x$, in senso antiorario; il secondo lato incontra la circonferenza in un punto $P$.

- Il **coseno** di $x$, $\cos x$, è l'ascissa di $P$.
- Il **seno** di $x$, $\sin x$, è l'ordinata di $P$.
- La **tangente** di $x$ è $\tan x = \dfrac{\sin x}{\cos x}$, definita quando $\cos x \neq 0$, cioè per $x \neq 90^\circ + k \cdot 180^\circ$ con $k$ intero.

Poiché $P$ sta su una circonferenza di raggio $1$, seno e coseno sono sempre compresi fra $-1$ e $1$. La tangente è il coefficiente angolare della retta $OP$, perché è il rapporto fra ordinata e ascissa di $P$. Per esempio la retta $y = x$, che ha $m = 1$, forma con l'asse $x$ un angolo di $45^\circ$, e infatti $\tan 45^\circ = 1$.

::grafico{curve="cos(t),sin(t),0,6.29" punti="0.866,0.5,pieno,P" vettori="0,0,0.866,0.5" segmenti="0.866,0,0.866,0.5" etichette="0.43,-0.15,cos x;1.12,0.25,sin x;0.3,0.06,x" legenda="0" xmin=-1.5 xmax=1.5 ymin=-1.3 ymax=1.3 uguale=1 titolo="Nella circonferenza goniometrica il punto $P$ associato all'angolo $x = 30^\circ$ ha ascissa $\cos x = \dfrac{\sqrt{3}}{2}$ e ordinata $\sin x = \dfrac{1}{2}$"}

:::

:::osservazione{#segni-quadranti titolo="Segni nei quattro quadranti"}
Il segno di seno e coseno è il segno delle coordinate di $P$, quindi dipende dal quadrante in cui cade il secondo lato dell'angolo; il segno della tangente è quello del quoziente.

- Primo quadrante, $0^\circ < x < 90^\circ$: seno, coseno e tangente positivi.
- Secondo quadrante, $90^\circ < x < 180^\circ$: seno positivo, coseno e tangente negativi.
- Terzo quadrante, $180^\circ < x < 270^\circ$: seno e coseno negativi, tangente positiva.
- Quarto quadrante, $270^\circ < x < 360^\circ$: coseno positivo, seno e tangente negativi.

L'angolo di $150^\circ$ sta nel secondo quadrante e il suo punto $P$ è il simmetrico rispetto all'asse $y$ di quello di $30^\circ$, perciò $\sin 150^\circ = \dfrac{1}{2}$ e $\cos 150^\circ = -\dfrac{\sqrt{3}}{2}$.
:::

## Valori notevoli e relazione fondamentale

:::teorema{#valori-notevoli titolo="Valori notevoli"}
Per gli angoli più usati seno, coseno e tangente valgono:
$$
\begin{array}{c|ccccc}
x & 0^\circ & 30^\circ & 45^\circ & 60^\circ & 90^\circ \\[2pt]
\hline
 & 0 & \frac{\pi}{6} & \frac{\pi}{4} & \frac{\pi}{3} & \frac{\pi}{2} \\[4pt]
\sin x & 0 & \frac{1}{2} & \frac{\sqrt{2}}{2} & \frac{\sqrt{3}}{2} & 1 \\[4pt]
\cos x & 1 & \frac{\sqrt{3}}{2} & \frac{\sqrt{2}}{2} & \frac{1}{2} & 0 \\[4pt]
\tan x & 0 & \frac{\sqrt{3}}{3} & 1 & \sqrt{3} & \text{non definita}
\end{array}
$$
I valori di $30^\circ$ e $60^\circ$ vengono dal triangolo equilatero di lato $1$ tagliato a metà dall'altezza, che ha cateti $\dfrac{1}{2}$ e $\dfrac{\sqrt{3}}{2}$; quelli di $45^\circ$ dal quadrato di lato $1$ tagliato dalla diagonale. Il seno cresce da $0$ a $1$ e il coseno ripete gli stessi valori in ordine inverso, perché $\cos x = \sin(90^\circ - x)$.
:::

::::teorema{#relazione-fondamentale titolo="Relazione fondamentale"}
Per ogni angolo $x$ vale
$$
\sin^2 x + \cos^2 x = 1 .
$$
La relazione permette di ricavare il coseno conoscendo il seno, e viceversa, a meno del segno, che si sceglie con il quadrante. Se $\sin x = \dfrac{4}{5}$ e $x$ sta nel primo quadrante, allora $\cos^2 x = 1 - \dfrac{16}{25} = \dfrac{9}{25}$ e $\cos x = \dfrac{3}{5}$; se invece $x$ sta nel secondo quadrante, $\cos x = -\dfrac{3}{5}$.

:::dimostrazione
Il punto $P(\cos x;\sin x)$ sta sulla circonferenza goniometrica, che ha equazione $x^2 + y^2 = 1$. Sostituendo le coordinate di $P$ si ottiene $\cos^2 x + \sin^2 x = 1$.
:::
::::

## Il triangolo rettangolo

:::teorema{#triangolo-rettangolo titolo="Risoluzione del triangolo rettangolo"}
In un triangolo rettangolo con ipotenusa $i$, sia $\alpha$ uno degli angoli acuti. Allora

- il cateto opposto ad $\alpha$ è $i \cdot \sin\alpha$;
- il cateto adiacente ad $\alpha$ è $i \cdot \cos\alpha$;
- il cateto opposto è uguale al cateto adiacente moltiplicato per $\tan\alpha$.

Le relazioni seguono dalla circonferenza goniometrica: ingrandendo di un fattore $i$ il triangolo formato da $O$, da $P$ e dalla proiezione di $P$ sull'asse $x$, l'ipotenusa passa da $1$ a $i$ e i cateti da $\cos\alpha$ e $\sin\alpha$ a $i\cos\alpha$ e $i\sin\alpha$. **Risolvere** un triangolo rettangolo significa trovarne lati e angoli a partire da due dati, di cui almeno uno è un lato. Con ipotenusa $8$ e un angolo di $60^\circ$, il cateto opposto è $8 \cdot \dfrac{\sqrt{3}}{2} = 4\sqrt{3}$ e quello adiacente è $8 \cdot \dfrac{1}{2} = 4$; l'altro angolo acuto misura $90^\circ - 60^\circ = 30^\circ$.

::grafico{assi=0 uguale=1 poligoni="0,0 4,0 4,6.93" etichette="2,-0.5,4;4.9,3.46,4√3;1.3,3.9,8;0.75,0.35,60°" xmin=-1 xmax=6 ymin=-1 ymax=7.5 titolo="Triangolo rettangolo con ipotenusa $8$ e un angolo di $60^\circ$: il cateto adiacente misura $8 \cos 60^\circ = 4$, quello opposto $8 \sin 60^\circ = 4\sqrt{3}$"}

:::

:::esempio{titolo="Pendenza di una rampa"}
Una rampa lunga $5$ m supera un dislivello di $3$ m. L'angolo $\alpha$ che forma con il pavimento ha $\sin\alpha = \dfrac{3}{5}$, e per il teorema di Pitagora la sua proiezione sul pavimento è lunga $\sqrt{25 - 9} = 4$ m. Quindi $\cos\alpha = \dfrac{4}{5}$ e $\tan\alpha = \dfrac{3}{4}$. La tangente è la pendenza della rampa: il dislivello è $0{,}75$ m per ogni metro in orizzontale, cioè una pendenza del $75\%$.
:::

## Metodi rapidi per i quiz

:::osservazione{#metodi-rapidi titolo="Controlli veloci sulle opzioni"}
Molti quesiti di geometria analitica si risolvono controllando le opzioni invece di rifare tutto il calcolo.

- **Sostituire un punto**: un'equazione di retta, circonferenza o parabola che deve passare per un punto noto si scarta se le coordinate del punto non la soddisfano. Per la retta per $(1;3)$ e $(3;7)$, l'opzione $y = 2x + 3$ si esclude perché per $x = 1$ dà $5$.
- **Leggere i segni**: una retta che sale ha $m > 0$; una parabola con il vertice in alto ha $a < 0$; il centro della circonferenza ha coordinate di segno opposto ai coefficienti $a$ e $b$ dell'equazione.
- **Ricordare le terne pitagoriche**: le differenze di coordinate $3$ e $4$ danno distanza $5$, $6$ e $8$ danno $10$, $5$ e $12$ danno $13$.
- **Usare i limiti dei valori**: seno e coseno stanno fra $-1$ e $1$, quindi un valore come $\dfrac{4}{3}$ si scarta subito; il segno si sceglie con il quadrante.
- **Stimare le radici**: $\sqrt{2} \approx 1{,}41$ e $\sqrt{3} \approx 1{,}73$, così un cateto $5\sqrt{3}$ vale circa $8{,}7$ e deve restare minore dell'ipotenusa.

Le opzioni sbagliate nascono spesso da un segno cambiato (centro della circonferenza, retta perpendicolare con $\dfrac{1}{m}$ al posto di $-\dfrac{1}{m}$), da una radice dimenticata (il raggio al posto del suo quadrato) o dallo scambio fra seno e coseno.
:::
