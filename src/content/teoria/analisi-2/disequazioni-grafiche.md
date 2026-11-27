---
titolo: Disequazioni grafiche
sommario: Come si disegna la regione del piano descritta da una disequazione in x e y con rette, parabole, circonferenze, ellissi e iperboli, per ogni simbolo, e come la regione si prepara per i domini, gli integrali doppi e i massimi e minimi.
---

## Introduzione

In Analisi 2 le funzioni dipendono da due o più variabili. Quando le variabili sono due, gli insiemi su cui si lavora sono regioni del piano, descritte da disequazioni in $x$ e $y$.

:::definizione{#dove-servono titolo="Dove servono le disequazioni grafiche"}
Una **disequazione grafica** è una disequazione in $x$ e $y$ che si risolve disegnando nel piano cartesiano l'insieme dei punti che la soddisfano. Queste regioni si incontrano in tre punti del programma.

- **Dominio di una funzione.** Le condizioni di esistenza formano un sistema di disequazioni, e il dominio è la regione che lo risolve.
- **Integrali doppi.** L'insieme di integrazione va scritto come dominio normale rispetto all'asse $x$ o all'asse $y$, perché da questa scrittura si leggono gli estremi di integrazione.
- **Massimi e minimi su un insieme, liberi o vincolati.** L'insieme va riconosciuto e scomposto in punti interni, tratti di frontiera e vertici, perché i candidati si cercano separatamente in ciascuna parte.

In tutti e tre i casi il primo passo è passare dalle disequazioni alla figura.
:::

:::esempio{titolo="Una regione, tre usi"}
La regione $D$ compresa tra la parabola $y = x^2$ e la retta $y = x + 2$ è descritta dal sistema
$$
\begin{cases}
y \geq x^2 \\[4pt]
y \leq x + 2
\end{cases}
$$
Le due curve si incontrano nei punti $A(-1, 1)$ e $B(2, 4)$.

::grafico{regione="y>=x^2; y<=x+2" xmin=-3 xmax=4 ymin=-1 ymax=6 uguale=1 linee="1,1 1,3" punti="1,1,pieno;1,3,pieno;-1,1,pieno,A;2,4,pieno,B" titolo="La regione $D$ con un segmento verticale che la attraversa"}

- Come **dominio**: $D$ è il dominio della funzione $f(x, y) = \sqrt{y - x^2} + \sqrt{x + 2 - y}$.
- Come **insieme di integrazione**: $D$ si scrive $-1 \leq x \leq 2$, $x^2 \leq y \leq x + 2$, e da questa scrittura si leggono gli estremi dell'integrale doppio:
$$
\iint_D f(x, y)\, dx\, dy = \int_{-1}^{2} \left( \int_{x^2}^{x + 2} f(x, y)\, dy \right) dx .
$$
- Come **insieme per i massimi e minimi**: i candidati si cercano tra i punti interni, sull'arco di parabola, sul segmento di retta e nei vertici $A$ e $B$.
:::

## Disequazioni in due variabili

:::definizione{#soluzioni-due-variabili titolo="Soluzioni di una disequazione in due variabili"}
Una **soluzione** della disequazione $F(x, y) > 0$ è una coppia di numeri $(x_0, y_0)$ per cui $F(x_0, y_0) > 0$ è vera. Ogni coppia è un punto del piano cartesiano, quindi l'insieme delle soluzioni è una **regione del piano**. Risolvere graficamente la disequazione significa disegnare questa regione.

Nella disequazione $x + y > 2$ il punto $(3, 1)$ è una soluzione, perché $3 + 1 = 4$ e $4 > 2$. Il punto $(0, 0)$ non è una soluzione, perché $0 > 2$ è falsa.
:::

:::definizione{#frontiera-e-simboli titolo="Frontiera e significato dei simboli"}
L'equazione $F(x, y) = 0$ descrive una curva, che divide il piano in due o più regioni. La curva si chiama **frontiera**. Il simbolo della disequazione stabilisce se la frontiera fa parte delle soluzioni.

| Simbolo | Soluzioni | Frontiera nel disegno |
| --- | --- | --- |
| $F = 0$ | i soli punti della curva | tratto continuo |
| $F < 0$, $F > 0$ | una o più regioni, curva esclusa | tratteggiata |
| $F \leq 0$, $F \geq 0$ | le stesse regioni e in più la curva | tratto continuo |
| $F \neq 0$ | tutto il piano tranne la curva | tratteggiata |

Nella figura si sceglie una curva e un simbolo, e si legge quale regione viene colorata e come è disegnata la frontiera.

::simboli{curva="circonferenza" simbolo="<=" titolo="Una curva e i sei simboli: la regione cambia con il simbolo"}
:::

:::richiamo{titolo="Teorema degli zeri"}
**Ipotesi.** $\varphi$ è continua in $[a, b]$ e $\varphi(a)$, $\varphi(b)$ hanno segno opposto.

**Tesi.** Esiste $t_0 \in (a, b)$ tale che $\varphi(t_0) = 0$.
:::

::::teorema{#segno-costante titolo="Segno costante nelle regioni"}
Sia $F$ una funzione continua in tutto il piano, come sono tutti i polinomi in $x$ e $y$. Allora in ciascuna delle regioni in cui la curva $F(x, y) = 0$ divide il piano, $F$ ha **segno costante**.

Il teorema giustifica il **metodo del punto di prova**. Si sceglie un punto in ogni regione e si calcola $F$ in quel punto. Il segno trovato è il segno di $F$ in tutta la regione.

:::dimostrazione
Sia $A$ una delle regioni, cioè un insieme di punti in cui $F \neq 0$ tale che due suoi punti qualsiasi si congiungono con un arco continuo contenuto in $A$. Si suppone per assurdo che esistano due punti $P$ e $Q$ di $A$ con $F(P) > 0$ e $F(Q) < 0$. Sia $\gamma : [0, 1] \to A$ un arco continuo con $\gamma(0) = P$ e $\gamma(1) = Q$. La funzione $\varphi(t) = F(\gamma(t))$ è continua in $[0, 1]$, perché è composizione di funzioni continue, e risulta $\varphi(0) > 0$ e $\varphi(1) < 0$. Per il teorema degli zeri esiste $t_0 \in (0, 1)$ con $F(\gamma(t_0)) = 0$. Il punto $\gamma(t_0)$ appartiene ad $A$, dove $F$ è diversa da zero, e questa è una contraddizione. Perciò $F$ ha lo stesso segno in tutti i punti di $A$.
:::
::::

:::esempio{titolo="Punto di prova"}
Nella disequazione $x^2 + y^2 - 4 > 0$ la frontiera è la circonferenza $x^2 + y^2 = 4$, che divide il piano in due regioni. Nell'origine si ha $F(0, 0) = -4$, quindi $F$ è negativa in tutti i punti interni. Nel punto $(3, 0)$ si ha $F(3, 0) = 5$, quindi $F$ è positiva in tutti i punti esterni. Le soluzioni sono perciò i **punti esterni** alla circonferenza.

::grafico{regione="x^2+y^2>4" xmin=-4 xmax=4 ymin=-4 ymax=4 uguale=1 punti="0,0,pieno,F < 0;3,0,pieno,F > 0" titolo="$x^2 + y^2 - 4 > 0$ con i due punti di prova"}
:::

:::teorema{#variabile-isolata titolo="Regola della variabile isolata"}
Quando una delle due variabili è isolata, la regione si legge dalla disequazione.

- $y > f(x)$: i punti **sopra** il grafico $y = f(x)$;
- $y < f(x)$: i punti **sotto** il grafico;
- $x > g(y)$: i punti **a destra** della curva $x = g(y)$;
- $x < g(y)$: i punti **a sinistra** della curva.

Sulla retta verticale di ascissa $x_0$ il punto del grafico ha ordinata $f(x_0)$, e un punto della stessa retta con ordinata maggiore si trova più in alto. Per le curve $x = g(y)$ il ragionamento è lo stesso sulle rette orizzontali. Con la variabile isolata la regione si ottiene quindi senza punto di prova.
:::

:::attenzione
Per isolare una variabile si può dover dividere per un numero negativo, e in quel caso il verso della disequazione cambia. Da $4x - 2y < 6$ si ottiene $-2y < -4x + 6$, quindi $y > 2x - 3$. La regione è **sopra** la retta $y = 2x - 3$, mentre il simbolo $<$ della disequazione di partenza farebbe pensare ai punti sotto la retta.
:::

## Rette e semipiani

:::definizione{#semipiano titolo="Semipiano"}
Una retta divide il piano in due regioni, dette **semipiani**.

- Retta non verticale $y = mx + q$: la disequazione $y > mx + q$ descrive il semipiano sopra la retta, $y < mx + q$ quello sotto.
- Retta verticale $x = k$: la disequazione $x > k$ descrive il semipiano a destra, $x < k$ quello a sinistra.

Per una retta in forma implicita $ax + by + c = 0$ si isola una variabile oppure si usa un punto di prova. Se $c \neq 0$ la retta non passa per l'origine, e l'origine è il punto di prova più comodo, perché il primo membro vi vale $c$.
:::

:::esempio{titolo="Quattro semipiani"}
Nella disequazione $y \geq 2x - 1$ la variabile $y$ è isolata, quindi le soluzioni sono i punti sopra la retta, retta compresa. Nella disequazione $2x + 3y < 6$ si usa l'origine come punto di prova: $0 < 6$ è vera, quindi il semipiano è quello che contiene l'origine, retta esclusa. La disequazione $x \geq -1$ descrive il semipiano a destra della retta verticale $x = -1$. Nella disequazione $y > x$ la retta passa per l'origine, quindi come punto di prova si prende $(0, 1)$: $1 > 0$ è vera, e il semipiano è quello sopra la retta.

<div class="figure-affiancate">

::grafico{regione="y>=2*x-1" xmin=-3 xmax=3 ymin=-3 ymax=3 uguale=1 titolo="$y \geq 2x - 1$"}

::grafico{regione="2*x+3*y<6" xmin=-2 xmax=4 ymin=-2 ymax=4 uguale=1 titolo="$2x + 3y < 6$"}

::grafico{regione="x>=-1" xmin=-3 xmax=3 ymin=-3 ymax=3 uguale=1 titolo="$x \geq -1$"}

::grafico{regione="y>x" xmin=-3 xmax=3 ymin=-3 ymax=3 uguale=1 punti="0,1,pieno" titolo="$y > x$ con il punto di prova $(0, 1)$"}

</div>
:::

:::definizione{#striscia titolo="Striscia"}
Una doppia disequazione con la stessa espressione al centro descrive una **striscia** compresa tra due rette parallele. La disequazione $|x| \leq 2$ equivale a $-2 \leq x \leq 2$. La disequazione $|y - x| < 1$ equivale a $-1 < y - x < 1$, cioè a $x - 1 < y < x + 1$.

<div class="figure-affiancate">

::grafico{regione="x>=-2; x<=2" xmin=-4 xmax=4 ymin=-4 ymax=4 uguale=1 titolo="$|x| \leq 2$: striscia verticale, rette comprese"}

::grafico{regione="y>x-1; y<x+1" xmin=-3 xmax=3 ymin=-3 ymax=3 uguale=1 titolo="$|y - x| < 1$: striscia tra $y = x - 1$ e $y = x + 1$, rette escluse"}

</div>

Le strisce compaiono nei domini delle funzioni $\arcsin$ e $\arccos$, il cui argomento deve essere compreso tra $-1$ e $1$.
:::

## Parabole

In una parabola una sola variabile compare al quadrato. Se al quadrato compare $x$, l'asse della parabola è verticale; se compare $y$, l'asse è orizzontale.

:::definizione{#parabola-asse-verticale titolo="Parabola con asse verticale"}
L'equazione è $y = ax^2 + bx + c$ con $a \neq 0$. Il vertice ha ascissa $x_V = -\dfrac{b}{2a}$ e ordinata $y_V = a x_V^2 + b x_V + c$. La concavità è rivolta verso l'alto se $a > 0$, verso il basso se $a < 0$.

- $y > ax^2 + bx + c$: i punti **sopra** la parabola;
- $y < ax^2 + bx + c$: i punti **sotto** la parabola.

<div class="figure-affiancate">

::grafico{regione="y>=x^2" xmin=-3 xmax=3 ymin=-1 ymax=5 uguale=1 titolo="$y \geq x^2$"}

::grafico{regione="y<x^2-4*x+3" xmin=-1 xmax=5 ymin=-2 ymax=4 uguale=1 punti="2,-1,pieno,V" titolo="$y < x^2 - 4x + 3$: vertice $(2, -1)$, intersezioni con l'asse $x$ in $1$ e $3$"}

::grafico{regione="y<=2*x-x^2" xmin=-2 xmax=4 ymin=-3 ymax=3 uguale=1 punti="1,1,pieno,V" titolo="$y \leq 2x - x^2$: vertice $(1, 1)$, concavità verso il basso"}

</div>
:::

:::definizione{#parabola-asse-orizzontale titolo="Parabola con asse orizzontale"}
L'equazione è $x = ay^2 + by + c$ con $a \neq 0$. I ruoli di $x$ e $y$ sono scambiati: il vertice ha ordinata $y_V = -\dfrac{b}{2a}$ e ascissa $x_V = a y_V^2 + b y_V + c$. La parabola si apre verso destra se $a > 0$, verso sinistra se $a < 0$.

- $x > ay^2 + by + c$: i punti **a destra** della parabola;
- $x < ay^2 + by + c$: i punti **a sinistra** della parabola.

<div class="figure-affiancate">

::grafico{regione="x>y^2" xmin=-1 xmax=5 ymin=-3 ymax=3 uguale=1 titolo="$x > y^2$"}

::grafico{regione="x<=-y^2+2*y+3" xmin=-2 xmax=5 ymin=-2.5 ymax=4.5 uguale=1 punti="4,1,pieno,V" titolo="$x \leq -y^2 + 2y + 3$: vertice $(4, 1)$, la parabola si apre verso sinistra"}

</div>

Il grafico di $y = \sqrt{x}$ è la metà superiore della parabola $x = y^2$, e quello di $y = -\sqrt{x}$ è la metà inferiore. Per questo le parabole con asse orizzontale compaiono ogni volta che in un dominio o in un integrale doppio c'è una radice quadrata.
:::

:::definizione{#parabola-traslata titolo="Parabola con il vertice fuori dall'origine"}
Con il completamento del quadrato l'equazione assume la forma $y - y_V = a(x - x_V)^2$ oppure $x - x_V = a(y - y_V)^2$. È la parabola $y = ax^2$, oppure $x = ay^2$, traslata in modo che il vertice sia $V(x_V, y_V)$. La forma con il vertice permette di disegnare la parabola senza altri calcoli.
:::

:::esempio{titolo="Dalla forma generale al vertice"}
Nella disequazione $y^2 - 4y - 2x + 6 \leq 0$ la variabile al quadrato è $y$, quindi si isola $x$.
$$
\begin{aligned}
2x &\geq y^2 - 4y + 6 \\[6pt]
x &\geq \frac{1}{2} y^2 - 2y + 3 \\[6pt]
x &\geq \frac{1}{2} (y - 2)^2 + 1
\end{aligned}
$$
La frontiera è la parabola con asse orizzontale e vertice $(1, 2)$, che si apre verso destra. La variabile $x$ è isolata con il simbolo $\geq$, quindi le soluzioni sono i punti **a destra della parabola**, parabola compresa.

::grafico{regione="x>=0.5*(y-2)^2+1" xmin=-1 xmax=6 ymin=-1.5 ymax=5.5 uguale=1 punti="1,2,pieno,V" titolo="$y^2 - 4y - 2x + 6 \leq 0$"}
:::

## Circonferenze

:::definizione{#cerchio-interno-esterno titolo="Punti interni e punti esterni a una circonferenza"}
La circonferenza di centro $C(x_0, y_0)$ e raggio $r > 0$ ha equazione $(x - x_0)^2 + (y - y_0)^2 = r^2$. Il primo membro è il quadrato della distanza del punto $(x, y)$ dal centro.

- $(x - x_0)^2 + (y - y_0)^2 < r^2$: i punti a distanza dal centro minore di $r$, cioè i **punti interni**;
- $(x - x_0)^2 + (y - y_0)^2 > r^2$: i **punti esterni**.

Con $\leq$ e $\geq$ alle soluzioni si aggiunge la circonferenza. L'insieme dei punti interni insieme alla circonferenza è il **cerchio**, detto anche disco chiuso. La doppia disequazione $r_1^2 < (x - x_0)^2 + (y - y_0)^2 < r_2^2$ descrive una **corona circolare**.
:::

:::teorema{#centro-e-raggio titolo="Dalla forma generale a centro e raggio"}
L'equazione $x^2 + y^2 + \alpha x + \beta y + \gamma = 0$ si riscrive completando i quadrati:
$$
\left( x + \frac{\alpha}{2} \right)^2 + \left( y + \frac{\beta}{2} \right)^2 = \frac{\alpha^2}{4} + \frac{\beta^2}{4} - \gamma .
$$
Indicato con $k$ il secondo membro, si hanno tre casi.

- $k > 0$: circonferenza di centro $\left( -\dfrac{\alpha}{2}, -\dfrac{\beta}{2} \right)$ e raggio $\sqrt{k}$;
- $k = 0$: il solo centro;
- $k < 0$: nessun punto.

La forma con centro e raggio è quella da cui si legge la regione, quindi il completamento dei quadrati è il primo passo di ogni disequazione con $x^2$ e $y^2$.
:::

:::esempio{titolo="Esterno di un cerchio con il centro fuori dall'origine"}
Nella disequazione $x^2 + y^2 - 2x + 4y - 4 > 0$ si completano i quadrati in $x$ e in $y$.
$$
\begin{aligned}
(x - 1)^2 - 1 + (y + 2)^2 - 4 - 4 &> 0 \\[6pt]
(x - 1)^2 + (y + 2)^2 &> 9
\end{aligned}
$$
La frontiera è la circonferenza di centro $(1, -2)$ e raggio $3$. Il quadrato della distanza dal centro è maggiore di $9$, quindi le soluzioni sono i **punti esterni**, circonferenza esclusa.

<div class="figure-affiancate">

::grafico{regione="x^2+y^2<=4" xmin=-3 xmax=3 ymin=-3 ymax=3 uguale=1 titolo="$x^2 + y^2 \leq 4$"}

::grafico{regione="(x-1)^2+(y+2)^2>9" xmin=-3 xmax=5 ymin=-6 ymax=2 uguale=1 punti="1,-2,pieno,C" titolo="$(x - 1)^2 + (y + 2)^2 > 9$"}

::grafico{regione="x^2+y^2>1; x^2+y^2<=4" xmin=-3 xmax=3 ymin=-3 ymax=3 uguale=1 titolo="$1 < x^2 + y^2 \leq 4$: circonferenza interna esclusa, esterna compresa"}

::grafico{regione="x^2+y^2<=2*x" xmin=-1.5 xmax=2.5 ymin=-2 ymax=2 uguale=1 punti="1,0,pieno,C" titolo="$x^2 + y^2 \leq 2x$, cioè $(x - 1)^2 + y^2 \leq 1$"}

</div>
:::

:::osservazione{#semicirconferenze titolo="Semicirconferenze"}
Isolando $y$ nell'equazione $x^2 + y^2 = 4$ si ottengono la semicirconferenza superiore $y = \sqrt{4 - x^2}$ e quella inferiore $y = -\sqrt{4 - x^2}$. La doppia disequazione $0 \leq y \leq \sqrt{4 - x^2}$ descrive quindi il semicerchio superiore. Con questa scrittura i cerchi compaiono negli estremi degli integrali doppi.

::grafico{regione="y>=0; x^2+y^2<=4" xmin=-3 xmax=3 ymin=-2 ymax=4 uguale=1 tracce=0 titolo="$0 \leq y \leq \sqrt{4 - x^2}$"}
:::

:::osservazione{#cerchi-degeneri titolo="Casi degeneri"}
La disequazione $(x - 1)^2 + (y + 2)^2 \leq 0$ è soddisfatta dal solo punto $(1, -2)$, perché una somma di quadrati è nulla solo se entrambi i quadrati sono nulli. La disequazione $(x - 1)^2 + (y + 2)^2 > -3$ è soddisfatta da tutti i punti del piano, perché una somma di quadrati è maggiore o uguale a zero.
:::

## Ellissi

:::definizione{#ellisse-interno-esterno titolo="Punti interni e punti esterni a un'ellisse"}
L'ellisse di centro $C(x_0, y_0)$, semiasse orizzontale $a$ e semiasse verticale $b$ ha equazione
$$
\frac{(x - x_0)^2}{a^2} + \frac{(y - y_0)^2}{b^2} = 1 .
$$
I vertici sono $(x_0 \pm a,\, y_0)$ e $(x_0,\, y_0 \pm b)$. Nel centro il primo membro vale $0$, che è minore di $1$.

- primo membro $< 1$: i **punti interni**;
- primo membro $> 1$: i **punti esterni**.

Un'equazione $Ax^2 + By^2 + Cx + Dy + E = 0$ con $A$ e $B$ dello stesso segno e diversi tra loro si porta a questa forma completando i quadrati in $x$ e in $y$ e dividendo per il termine noto. Dai semiassi si disegna l'ellisse, e dal simbolo si legge la regione.
:::

:::esempio{titolo="Ellisse con il centro fuori dall'origine"}
Nella disequazione $4x^2 + y^2 - 8x + 2y + 1 < 0$ si raccoglie il coefficiente di $x^2$ e si completano i quadrati.
$$
\begin{aligned}
4(x^2 - 2x) + (y^2 + 2y) + 1 &< 0 \\[6pt]
4(x - 1)^2 - 4 + (y + 1)^2 - 1 + 1 &< 0 \\[6pt]
4(x - 1)^2 + (y + 1)^2 &< 4 \\[6pt]
(x - 1)^2 + \frac{(y + 1)^2}{4} &< 1
\end{aligned}
$$
La frontiera è l'ellisse di centro $(1, -1)$ con $a = 1$ e $b = 2$. Il primo membro è minore di $1$, quindi le soluzioni sono i **punti interni**, ellisse esclusa.

<div class="figure-affiancate">

::grafico{regione="x^2/9+y^2/4<=1" xmin=-4 xmax=4 ymin=-4 ymax=4 uguale=1 titolo="$\dfrac{x^2}{9} + \dfrac{y^2}{4} \leq 1$"}

::grafico{regione="4*x^2+y^2>4" xmin=-3 xmax=3 ymin=-3 ymax=3 uguale=1 titolo="$4x^2 + y^2 > 4$, cioè $x^2 + \dfrac{y^2}{4} > 1$"}

::grafico{regione="(x-1)^2+(y+1)^2/4<1" xmin=-2 xmax=4 ymin=-4 ymax=2 uguale=1 punti="1,-1,pieno,C" titolo="$(x - 1)^2 + \dfrac{(y + 1)^2}{4} < 1$"}

</div>
:::

## Iperboli

L'iperbole è formata da due rami, quindi divide il piano in tre regioni.

:::definizione{#iperbole-rami-orizzontali titolo="Iperbole con i rami a destra e a sinistra"}
$$
\frac{(x - x_0)^2}{a^2} - \frac{(y - y_0)^2}{b^2} = 1
$$
Il centro è $C(x_0, y_0)$, i vertici sono $(x_0 \pm a,\, y_0)$ e gli asintoti sono le rette $y - y_0 = \pm \dfrac{b}{a} (x - x_0)$. Nel centro il primo membro vale $0$, che è minore di $1$.

- primo membro $< 1$: la regione **tra i due rami**, che contiene il centro;
- primo membro $> 1$: le due regioni **interne ai rami**, una a destra e una a sinistra.
:::

:::definizione{#iperbole-rami-verticali titolo="Iperbole con i rami in alto e in basso"}
$$
\frac{(y - y_0)^2}{b^2} - \frac{(x - x_0)^2}{a^2} = 1
$$
I vertici sono $(x_0,\, y_0 \pm b)$ e gli asintoti sono gli stessi. Anche qui il primo membro minore di $1$ descrive la regione tra i due rami, e il primo membro maggiore di $1$ le due regioni interne ai rami, una in alto e una in basso. Il segno meno davanti a $x^2$ oppure a $y^2$ stabilisce quindi da che parte stanno i rami.

<div class="figure-affiancate">

::grafico{regione="x^2-y^2>=1" xmin=-4 xmax=4 ymin=-4 ymax=4 uguale=1 segmenti="-4,-4,4,4;-4,4,4,-4" titolo="$x^2 - y^2 \geq 1$"}

::grafico{regione="y^2/4-x^2<1" xmin=-4 xmax=4 ymin=-4 ymax=4 uguale=1 segmenti="-2,-4,2,4;-2,4,2,-4" titolo="$\dfrac{y^2}{4} - x^2 < 1$: vertici $(0, \pm 2)$, asintoti $y = \pm 2x$"}

</div>
:::

:::definizione{#iperbole-equilatera titolo="Iperbole equilatera riferita agli asintoti"}
L'iperbole $xy = k$, con $k \neq 0$, ha per asintoti gli assi cartesiani. I rami si trovano nel primo e nel terzo quadrante se $k > 0$, nel secondo e nel quarto se $k < 0$. Nell'origine il prodotto $xy$ vale $0$. Per $k > 0$ si ha quindi:

- $xy < k$: la regione tra i due rami, che contiene l'origine e gli assi;
- $xy > k$: le due regioni oltre i rami.

Per $k < 0$ la regione che contiene l'origine è $xy > k$. L'iperbole $(x - x_0)(y - y_0) = k$ è la stessa curva con asintoti $x = x_0$ e $y = y_0$. Queste regioni compaiono nei domini in cui un prodotto $xy$ è argomento di un logaritmo o di una radice.
:::

:::attenzione
Dividendo per $x$ i due membri di $xy > 1$, il verso dipende dal segno di $x$.

- Per $x > 0$ si ottiene $y > \dfrac{1}{x}$.
- Per $x < 0$ si ottiene $y < \dfrac{1}{x}$.

La disequazione $y > \dfrac{1}{x}$ descrive una regione diversa da $xy > 1$, perché per $x < 0$ contiene i punti sopra il ramo del terzo quadrante.

<div class="figure-affiancate">

::grafico{regione="x*y>1" xmin=-4 xmax=4 ymin=-4 ymax=4 uguale=1 titolo="$xy > 1$"}

::grafico{regione="x>0; x*y>1 | x<0; x*y<1" xmin=-4 xmax=4 ymin=-4 ymax=4 uguale=1 tracce=0 titolo="$y > \dfrac{1}{x}$"}

</div>
:::

:::esempio{titolo="Iperbole con il centro fuori dall'origine"}
Nella disequazione $x^2 - 4y^2 - 2x - 16y - 19 \leq 0$ i coefficienti di $x^2$ e $y^2$ hanno segno opposto, quindi la frontiera è un'iperbole.
$$
\begin{aligned}
(x^2 - 2x) - 4(y^2 + 4y) - 19 &\leq 0 \\[6pt]
(x - 1)^2 - 1 - 4(y + 2)^2 + 16 - 19 &\leq 0 \\[6pt]
(x - 1)^2 - 4(y + 2)^2 &\leq 4 \\[6pt]
\frac{(x - 1)^2}{4} - (y + 2)^2 &\leq 1
\end{aligned}
$$
Il centro è $(1, -2)$, i vertici sono $(-1, -2)$ e $(3, -2)$, gli asintoti sono $y + 2 = \pm \dfrac{1}{2} (x - 1)$. Il primo membro è minore o uguale a $1$, quindi le soluzioni formano la **regione tra i due rami**, rami compresi.

::grafico{regione="(x-1)^2/4-(y+2)^2<=1" xmin=-4 xmax=6 ymin=-7 ymax=3 uguale=1 segmenti="-4,-4.5,6,0.5;-4,0.5,6,-4.5" punti="1,-2,pieno,C" titolo="$\dfrac{(x - 1)^2}{4} - (y + 2)^2 \leq 1$ con gli asintoti"}
:::

:::osservazione{#iperboli-degeneri titolo="Coppie di rette"}
L'equazione $x^2 - y^2 = 0$ equivale a $(x - y)(x + y) = 0$, cioè alle due rette $y = x$ e $y = -x$. La disequazione $x^2 - y^2 > 0$ equivale a $|x| > |y|$ e descrive i due angoli opposti che contengono l'asse $x$. Allo stesso modo $xy > 0$ descrive il primo e il terzo quadrante, assi esclusi.

<div class="figure-affiancate">

::grafico{regione="x^2-y^2>0" xmin=-3 xmax=3 ymin=-3 ymax=3 uguale=1 titolo="$x^2 - y^2 > 0$"}

::grafico{regione="x*y>0" xmin=-3 xmax=3 ymin=-3 ymax=3 uguale=1 titolo="$xy > 0$"}

</div>
:::

## Riconoscere la conica e procedimento

:::teorema{#riconoscere-la-conica titolo="Riconoscere la conica dai coefficienti"}
Nell'equazione $Ax^2 + By^2 + Cx + Dy + E = 0$, senza il termine $xy$, la curva si riconosce dai coefficienti di $x^2$ e $y^2$.

| Coefficienti | Curva |
| --- | --- |
| $A = B \neq 0$ | circonferenza |
| $A$ e $B$ concordi, $A \neq B$ | ellisse |
| $A$ e $B$ discordi | iperbole |
| $B = 0$, $A \neq 0$, $D \neq 0$ | parabola con asse verticale |
| $A = 0$, $B \neq 0$, $C \neq 0$ | parabola con asse orizzontale |

Dopo il completamento dei quadrati possono presentarsi i casi degeneri: un punto, nessun punto, una coppia di rette. Il riconoscimento dice subito quale forma canonica cercare e quindi quale regione aspettarsi.

In questo capitolo il termine $xy$ compare solo nell'iperbole $xy = k$. Le coniche con il termine $xy$ hanno gli assi ruotati e sono trattate in Algebra lineare, nel capitolo sulle coniche e quadriche. Le forme canoniche delle coniche e il completamento del quadrato sono spiegati nel Precorso, nel capitolo di geometria analitica.
:::

:::osservazione{#procedimento titolo="Procedimento"}
Una disequazione grafica si risolve in quattro passi.

1. Si portano tutti i termini al primo membro, in modo da confrontare $F(x, y)$ con $0$, oppure si isola una variabile.
2. Si riconosce la curva $F(x, y) = 0$ e la si disegna, a tratto continuo con $\leq$, $\geq$, $=$ e tratteggiata con $<$, $>$, $\neq$.
3. Si stabilisce il segno di $F$ in ogni regione, con la regola della variabile isolata o con un punto di prova.
4. Si colorano le regioni in cui la disequazione è vera.
:::

:::osservazione{#tabella-riassuntiva titolo="Tabella riassuntiva"}
Nelle rette e nelle parabole il primo membro è la variabile isolata, $y$ oppure $x$.

| Frontiera | Primo membro minore | Primo membro maggiore |
| --- | --- | --- |
| $y = mx + q$ | sotto la retta | sopra la retta |
| $x = k$ | a sinistra | a destra |
| $y = ax^2 + bx + c$ | sotto la parabola | sopra la parabola |
| $x = ay^2 + by + c$ | a sinistra della parabola | a destra della parabola |
| $(x - x_0)^2 + (y - y_0)^2 = r^2$ | punti interni | punti esterni |
| $\dfrac{(x - x_0)^2}{a^2} + \dfrac{(y - y_0)^2}{b^2} = 1$ | punti interni | punti esterni |
| $\dfrac{(x - x_0)^2}{a^2} - \dfrac{(y - y_0)^2}{b^2} = 1$ | tra i due rami | interne ai rami |
| $xy = k$, con $k > 0$ | tra i due rami | oltre i rami |
:::

## Curve che non sono coniche

La regola della variabile isolata vale per il grafico di qualsiasi funzione, quindi le regioni delimitate da esponenziali, logaritmi e funzioni goniometriche si disegnano allo stesso modo.

:::definizione{#regioni-con-grafici titolo="Regioni delimitate dal grafico di una funzione"}
Sia $f$ una funzione definita in un intervallo $I$. La disequazione $y > f(x)$ descrive i punti sopra il grafico di $f$ e la disequazione $y < f(x)$ i punti sotto, **limitatamente alle ascisse** $x \in I$. La condizione di esistenza di $f$ fa quindi parte della regione: la disequazione $y < \ln x$ equivale al sistema formato da $x > 0$ e $y < \ln x$.

<div class="figure-affiancate">

::grafico{regione="y>exp(x)" xmin=-4 xmax=3 ymin=-1 ymax=6 uguale=1 titolo="$y > e^x$"}

::grafico{regione="y<log(x)" xmin=-1 xmax=6 ymin=-4 ymax=3 uguale=1 titolo="$y < \ln x$: la regione sta a destra dell'asse $y$"}

::grafico{regione="y>=sin(x); y<=1" xmin=-7 xmax=7 ymin=-2 ymax=2 uguale=1 titolo="$\sin x \leq y \leq 1$"}

::grafico{regione="x>=0; y<=sqrt(x)" xmin=-1 xmax=6 ymin=-3 ymax=4 uguale=1 tracce=0 titolo="$y \leq \sqrt{x}$: la curva è la metà superiore di $x = y^2$"}

</div>
:::

:::teorema{#funzioni-monotone titolo="Disequazioni con logaritmi, esponenziali e radici"}
Siano $F$ e $G$ due espressioni in $x$ e $y$. Le funzioni $\ln t$, $e^t$ e $\sqrt{t}$ sono strettamente crescenti, quindi conservano il verso delle disuguaglianze.

- $\ln F \geq 0$ equivale a $F \geq 1$, e $\ln F < 0$ equivale a $0 < F < 1$;
- $e^F > e^G$ equivale a $F > G$;
- $\sqrt{F} \leq c$, con $c \geq 0$, equivale a $0 \leq F \leq c^2$;
- $|F| \leq c$, con $c \geq 0$, equivale a $-c \leq F \leq c$.

Con queste equivalenze una disequazione che contiene una funzione trascendente si riporta a una disequazione tra espressioni algebriche, e la frontiera torna a essere una retta o una conica.
:::

:::esempio{titolo="Due domini che si riportano a una conica"}
La funzione $f(x, y) = \sqrt{\ln(x^2 + y^2 - 1)}$ è definita dove $\ln(x^2 + y^2 - 1) \geq 0$, cioè dove $x^2 + y^2 - 1 \geq 1$. Il dominio è quindi l'insieme $x^2 + y^2 \geq 2$, formato dai punti esterni alla circonferenza di centro l'origine e raggio $\sqrt{2}$, circonferenza compresa.

La funzione $g(x, y) = \arcsin(x^2 + y^2 - 2)$ è definita dove $-1 \leq x^2 + y^2 - 2 \leq 1$, cioè dove $1 \leq x^2 + y^2 \leq 3$. Il dominio è la **corona circolare** compresa tra le circonferenze di raggio $1$ e $\sqrt{3}$, comprese entrambe.

<div class="figure-affiancate">

::grafico{regione="x^2+y^2>=2" xmin=-3 xmax=3 ymin=-3 ymax=3 uguale=1 titolo="Dominio di $f$: $x^2 + y^2 \geq 2$"}

::grafico{regione="x^2+y^2>=1; x^2+y^2<=3" xmin=-3 xmax=3 ymin=-3 ymax=3 uguale=1 titolo="Dominio di $g$: $1 \leq x^2 + y^2 \leq 3$"}

</div>
:::

## Sistemi, prodotti e quozienti

:::definizione{#sistema-di-disequazioni titolo="Sistema di disequazioni"}
Le soluzioni di un sistema sono i punti che soddisfano *tutte* le disequazioni, cioè l'**intersezione** delle regioni. Ogni tratto di frontiera segue il simbolo della propria disequazione. Un punto in cui una frontiera compresa incontra una frontiera esclusa non appartiene alla regione.

<div class="figure-affiancate">

::grafico{regione="y>=x^2; y<=x+2" xmin=-3 xmax=4 ymin=-1 ymax=6 uguale=1 punti="-1,1,pieno;2,4,pieno" titolo="$y \geq x^2$ e $y \leq x + 2$: le curve si incontrano in $(-1, 1)$ e $(2, 4)$"}

::grafico{regione="x^2+y^2>=1; x^2+y^2<=4; x>=0; y>=0" xmin=-1 xmax=3 ymin=-1 ymax=3 uguale=1 titolo="$1 \leq x^2 + y^2 \leq 4$ con $x \geq 0$ e $y \geq 0$"}

::grafico{regione="x>=y^2; x<4" xmin=-1 xmax=6 ymin=-3.5 ymax=3.5 uguale=1 punti="4,2,vuoto;4,-2,vuoto" titolo="$x \geq y^2$ e $x < 4$: i punti $(4, \pm 2)$ sono esclusi"}

</div>

I domini delle funzioni di due variabili sono quasi sempre sistemi, perché ogni radice, logaritmo o denominatore aggiunge una condizione.
:::

:::esempio{titolo="Un dominio con tre simboli diversi"}
La funzione $f(x, y) = \dfrac{\sqrt{y - x^2}}{\ln(4 - x^2 - y^2)}$ è definita dove il radicando è maggiore o uguale a zero, l'argomento del logaritmo è maggiore di zero e il denominatore è diverso da zero. Il logaritmo si annulla quando il suo argomento vale $1$, cioè quando $x^2 + y^2 = 3$.
$$
\begin{cases}
y \geq x^2 \\[4pt]
x^2 + y^2 < 4 \\[4pt]
x^2 + y^2 \neq 3
\end{cases}
$$
Il dominio è la parte del cerchio di raggio $2$ che sta sopra la parabola, privata dell'arco di circonferenza di raggio $\sqrt{3}$. La parabola è compresa, le due circonferenze sono escluse.

::grafico{regione="y>=x^2; x^2+y^2<4; x^2+y^2!=3" xmin=-3 xmax=3 ymin=-2.5 ymax=3.5 uguale=1 punti="1.2496,1.5616,vuoto;-1.2496,1.5616,vuoto;1.1414,1.3028,vuoto;-1.1414,1.3028,vuoto" titolo="Il dominio di $f$"}
:::

:::teorema{#prodotto-e-quoziente titolo="Prodotto e quoziente"}
La disequazione $F(x, y) \cdot G(x, y) > 0$ è vera nei punti in cui $F$ e $G$ hanno lo stesso segno. Le curve $F = 0$ e $G = 0$ dividono il piano in regioni. In ciascuna si determina il segno di $F$ e quello di $G$ e si applica la regola dei segni, come nello studio del segno di Analisi 1. Per un quoziente il procedimento è lo stesso, e la curva in cui si annulla il denominatore è *sempre* esclusa.

<div class="figure-affiancate">

::grafico{regione="x^2+y^2>=1; y>=x | x^2+y^2<=1; y<=x" xmin=-3 xmax=3 ymin=-3 ymax=3 uguale=1 titolo="$(x^2 + y^2 - 1)(y - x) \geq 0$"}

::grafico{regione="y>=x^2; x^2+y^2>4 | y<=x^2; x^2+y^2<4" xmin=-3.5 xmax=3.5 ymin=-3 ymax=4 uguale=1 punti="1.2496,1.5616,vuoto;-1.2496,1.5616,vuoto" titolo="$\dfrac{y - x^2}{x^2 + y^2 - 4} \geq 0$: parabola compresa, circonferenza esclusa"}

</div>
:::

:::osservazione{#valore-assoluto-nel-piano titolo="Valore assoluto"}
Una disequazione con valori assoluti si risolve distinguendo i casi secondo il segno degli argomenti. Ogni caso è un sistema, e la regione è l'unione delle regioni dei casi. Nella disequazione $|x| + |y| \leq 1$ il primo quadrante dà $x + y \leq 1$, e gli altri quadranti danno le rette simmetriche. La regione è il quadrato di vertici $(\pm 1, 0)$ e $(0, \pm 1)$.

<div class="figure-affiancate">

::grafico{regione="abs(x)+abs(y)<=1" xmin=-2 xmax=2 ymin=-2 ymax=2 uguale=1 titolo="$|x| + |y| \leq 1$"}

::grafico{regione="y>=abs(x)" xmin=-3 xmax=3 ymin=-2 ymax=4 uguale=1 titolo="$y \geq |x|$"}

</div>
:::

## Domini normali per gli integrali doppi

Negli integrali doppi la regione è assegnata, con una figura o con un sistema, e va riscritta in una forma da cui si leggono gli estremi di integrazione.

:::definizione{#dominio-normale-x titolo="Dominio normale rispetto all'asse x"}
Un insieme $D$ è un **dominio normale rispetto all'asse** $x$ se si scrive nella forma
$$
D = \{ (x, y) : a \leq x \leq b,\ g_1(x) \leq y \leq g_2(x) \}
$$
con $g_1$ e $g_2$ funzioni continue in $[a, b]$ e $g_1 \leq g_2$. Ogni retta verticale di ascissa compresa tra $a$ e $b$ incontra $D$ in un solo segmento, che va dal grafico di $g_1$, in basso, al grafico di $g_2$, in alto.

Nella figura il cursore sposta il segmento verticale nella regione compresa tra $y = x^2$ e $y = x + 2$. Per ogni $x$ si leggono l'ordinata di ingresso e quella di uscita.

::cursore{tipo="sezione-verticale" titolo="Segmenti verticali: da $y = x^2$ a $y = x + 2$ per ogni $x$ tra $-1$ e $2$"}
:::

:::definizione{#dominio-normale-y titolo="Dominio normale rispetto all'asse y"}
Un insieme $D$ è un **dominio normale rispetto all'asse** $y$ se si scrive nella forma
$$
D = \{ (x, y) : c \leq y \leq d,\ h_1(y) \leq x \leq h_2(y) \}
$$
con $h_1$ e $h_2$ funzioni continue in $[c, d]$ e $h_1 \leq h_2$. Ogni retta orizzontale di ordinata compresa tra $c$ e $d$ incontra $D$ in un solo segmento, che va dalla curva $x = h_1(y)$, a sinistra, alla curva $x = h_2(y)$, a destra.

Gli estremi dell'intervallo fisso e le due funzioni diventano gli estremi dell'integrale doppio. Le formule di riduzione sono nel capitolo sugli integrali doppi e tripli.
:::

:::osservazione{#forma-normale titolo="Procedimento per la forma normale"}
1. Si disegna la regione e si trovano i punti in cui le curve di frontiera si incontrano.
2. Per la forma rispetto all'asse $x$, l'intervallo $[a, b]$ è la proiezione della regione sull'asse $x$. Si isola $y$ nelle equazioni delle curve di frontiera: la curva più bassa è $g_1$, la più alta è $g_2$.
3. Per la forma rispetto all'asse $y$, l'intervallo $[c, d]$ è la proiezione sull'asse $y$. Si isola $x$: la curva a sinistra è $h_1$, quella a destra è $h_2$.

Se la curva di ingresso o di uscita cambia lungo l'intervallo, la regione si divide in più domini normali.
:::

:::esempio{titolo="La stessa regione nelle due forme"}
Sia $D$ la regione compresa tra la parabola $y = x^2$ e la retta $y = x + 2$, che si incontrano in $(-1, 1)$ e $(2, 4)$.

Rispetto all'asse $x$ la proiezione è l'intervallo $[-1, 2]$. Ogni segmento verticale entra dalla parabola ed esce dalla retta, quindi
$$
D = \{ (x, y) : -1 \leq x \leq 2,\ x^2 \leq y \leq x + 2 \} .
$$
Rispetto all'asse $y$ la proiezione è l'intervallo $[0, 4]$. Isolando $x$, la parabola dà $x = -\sqrt{y}$ e $x = \sqrt{y}$, la retta dà $x = y - 2$. La curva a destra è sempre $x = \sqrt{y}$. La curva a sinistra è $x = -\sqrt{y}$ per $0 \leq y \leq 1$ ed è la retta $x = y - 2$ per $1 \leq y \leq 4$. La regione è quindi l'unione di due domini normali:
$$
\begin{gathered}
D_1 = \{ (x, y) : 0 \leq y \leq 1,\ -\sqrt{y} \leq x \leq \sqrt{y} \} \\[6pt]
D_2 = \{ (x, y) : 1 \leq y \leq 4,\ y - 2 \leq x \leq \sqrt{y} \}
\end{gathered}
$$
Rispetto all'asse $x$ basta **un solo dominio**, quindi l'integrale doppio si calcola con un solo integrale iterato.

::cursore{tipo="sezione-orizzontale" valore=2.5 titolo="Segmenti orizzontali: sotto $y = 1$ entrano dalla parabola, sopra entrano dalla retta"}
:::

:::esempio{titolo="Tre regioni frequenti"}
<div class="figure-affiancate">

::grafico{regione="y<=x; y>=0; x<=2" xmin=-1 xmax=3 ymin=-1 ymax=3 uguale=1 tracce=0 linee="1.3,0 1.3,1.3" punti="1.3,0,pieno;1.3,1.3,pieno" titolo="Triangolo di vertici $(0, 0)$, $(2, 0)$, $(2, 2)$"}

::grafico{regione="x^2+y^2<=4" xmin=-3 xmax=3 ymin=-3 ymax=3 uguale=1 linee="1,-1.732 1,1.732" punti="1,-1.732,pieno;1,1.732,pieno" titolo="Cerchio $x^2 + y^2 \leq 4$"}

::grafico{regione="x>=y^2; x<=4" xmin=-1 xmax=6 ymin=-3.5 ymax=3.5 uguale=1 tracce=0 linee="1,1 4,1" punti="1,1,pieno;4,1,pieno" titolo="Regione tra $x = y^2$ e $x = 4$"}

</div>

- **Triangolo.** Rispetto all'asse $x$: $0 \leq x \leq 2$, $0 \leq y \leq x$. Rispetto all'asse $y$: $0 \leq y \leq 2$, $y \leq x \leq 2$.
- **Cerchio.** Rispetto all'asse $x$: $-2 \leq x \leq 2$, $-\sqrt{4 - x^2} \leq y \leq \sqrt{4 - x^2}$. Rispetto all'asse $y$: $-2 \leq y \leq 2$, $-\sqrt{4 - y^2} \leq x \leq \sqrt{4 - y^2}$.
- **Regione tra $x = y^2$ e $x = 4$.** Rispetto all'asse $x$: $0 \leq x \leq 4$, $-\sqrt{x} \leq y \leq \sqrt{x}$. Rispetto all'asse $y$: $-2 \leq y \leq 2$, $y^2 \leq x \leq 4$.
:::

:::osservazione{#regioni-non-normali titolo="Regioni che non sono normali"}
La corona $1 \leq x^2 + y^2 \leq 4$ non è un dominio normale rispetto all'asse $x$, perché la retta verticale $x = 0$ la incontra in due segmenti. Per simmetria non è normale nemmeno rispetto all'asse $y$. Una regione di questo tipo si divide in più domini normali oppure si descrive in coordinate polari.

::grafico{regione="x^2+y^2>=1; x^2+y^2<=4" xmin=-3 xmax=3 ymin=-3 ymax=3 uguale=1 linee="0,1 0,2;0,-2 0,-1" punti="0,1,pieno;0,2,pieno;0,-1,pieno;0,-2,pieno" titolo="La retta $x = 0$ incontra la corona in due segmenti"}
:::

:::definizione{#regioni-polari titolo="Cerchi, corone e settori in coordinate polari"}
Nelle **coordinate polari** $x = \rho \cos\theta$, $y = \rho \sin\theta$ il numero $\rho \geq 0$ è la distanza del punto dall'origine e $\theta$ è l'angolo che il punto forma con il semiasse positivo delle $x$. Vale $x^2 + y^2 = \rho^2$, quindi le regioni delimitate da circonferenze con centro nell'origine e da semirette uscenti dall'origine hanno estremi costanti.

| Regione | In coordinate polari |
| --- | --- |
| $x^2 + y^2 \leq 4$ | $0 \leq \rho \leq 2,\ \ 0 \leq \theta \leq 2\pi$ |
| $1 \leq x^2 + y^2 \leq 4$ | $1 \leq \rho \leq 2,\ \ 0 \leq \theta \leq 2\pi$ |
| $x^2 + y^2 \leq 4$ con $y \geq 0$ | $0 \leq \rho \leq 2,\ \ 0 \leq \theta \leq \pi$ |
| $1 \leq x^2 + y^2 \leq 4$ con $x \geq 0$, $y \geq 0$ | $1 \leq \rho \leq 2,\ \ 0 \leq \theta \leq \dfrac{\pi}{2}$ |
| $x^2 + y^2 \leq 4$ con $y \geq x$ | $0 \leq \rho \leq 2,\ \ \dfrac{\pi}{4} \leq \theta \leq \dfrac{5\pi}{4}$ |
| $x^2 + y^2 \leq 2x$ | $-\dfrac{\pi}{2} \leq \theta \leq \dfrac{\pi}{2},\ \ 0 \leq \rho \leq 2\cos\theta$ |

Nell'ultima riga la disequazione diventa $\rho^2 \leq 2\rho\cos\theta$, cioè $\rho \leq 2\cos\theta$, che richiede $\cos\theta \geq 0$. Il teorema sul cambiamento di variabili, con il fattore $\rho$ nell'integrale, è nel capitolo sugli integrali doppi e tripli.
:::

## Interno, frontiera e vertici per i massimi e minimi

Nella ricerca dei massimi e minimi su un insieme, i candidati si cercano separatamente nei punti interni, sui tratti di frontiera e nei vertici. L'insieme va quindi riconosciuto e scomposto in queste parti.

:::definizione{#scomposizione-di-una-regione titolo="Scomposizione di una regione"}
Sia $D$ una regione descritta da un sistema di disequazioni con i simboli $\leq$ e $\geq$, delimitata da rette e da coniche non degeneri.

- I **punti interni** sono quelli in cui tutte le disequazioni valgono con il simbolo stretto.
- Un **tratto di frontiera** si ottiene quando una disequazione diventa un'uguaglianza e le altre restano. È un arco di curva, e si scrive con l'equazione della curva e con l'intervallo in cui varia la variabile libera.
- I **vertici** sono i punti in cui due tratti si incontrano, e si trovano risolvendo il sistema delle due equazioni.

Su ogni tratto di frontiera la funzione $f(x, y)$ diventa una funzione di una sola variabile, da studiare con i metodi di Analisi 1. Il metodo completo è nel capitolo sui massimi e minimi.
:::

:::esempio{titolo="Tre insiemi scomposti"}
Sia $D$ la regione descritta da $y \geq x^2$ e $y \leq x + 2$.

- Punti interni: $x^2 < y < x + 2$.
- Primo tratto di frontiera: l'arco di parabola $y = x^2$ con $-1 \leq x \leq 2$. Su questo tratto si studia $f(x, x^2)$.
- Secondo tratto di frontiera: il segmento $y = x + 2$ con $-1 \leq x \leq 2$. Su questo tratto si studia $f(x, x + 2)$.
- Vertici: $A(-1, 1)$ e $B(2, 4)$.

Nel semicerchio $x^2 + y^2 \leq 4$ con $y \geq 0$ la semicirconferenza si scrive $x = 2\cos t$, $y = 2\sin t$ con $0 \leq t \leq \pi$, il diametro si scrive $y = 0$ con $-2 \leq x \leq 2$, e i vertici sono $(\pm 2, 0)$. Il triangolo $x \geq 0$, $y \geq 0$, $x + y \leq 3$ ha tre lati e i tre vertici $(0, 0)$, $(3, 0)$, $(0, 3)$.

<div class="figure-affiancate">

::grafico{regione="y>=x^2; y<=x+2" xmin=-3 xmax=4 ymin=-1 ymax=6 uguale=1 punti="-1,1,pieno,A;2,4,pieno,B" titolo="Arco di parabola, segmento e vertici $A$, $B$"}

::grafico{regione="y>=0; x^2+y^2<=4" xmin=-3 xmax=3 ymin=-2 ymax=4 uguale=1 tracce=0 punti="-2,0,pieno;2,0,pieno" titolo="Semicirconferenza, diametro e due vertici"}

::grafico{regione="x>=0; y>=0; x+y<=3" xmin=-1 xmax=4 ymin=-1 ymax=4 uguale=1 tracce=0 punti="0,0,pieno;3,0,pieno;0,3,pieno" titolo="Tre lati e tre vertici"}

</div>
:::

:::definizione{#vincolo-di-uguaglianza titolo="Vincolo di uguaglianza"}
Nei massimi e minimi vincolati l'insieme è descritto da un'equazione $g(x, y) = 0$, detta **vincolo**. L'insieme è allora la sola curva, senza punti interni, e si riconosce dai coefficienti di $x^2$ e $y^2$ come le frontiere delle regioni.

Il vincolo $x^2 + 4y^2 = 4$, diviso per $4$, diventa $\dfrac{x^2}{4} + y^2 = 1$. È l'ellisse di centro l'origine con semiassi $a = 2$ e $b = 1$, che si percorre con $x = 2\cos t$, $y = \sin t$, $0 \leq t \leq 2\pi$. Riconoscere la curva permette di parametrizzarla e di sapere se è un insieme limitato.

::grafico{regione="x^2+4*y^2=4" xmin=-3 xmax=3 ymin=-2 ymax=2 uguale=1 titolo="Il vincolo $x^2 + 4y^2 = 4$"}
:::

:::definizione{#limitati-e-chiusi titolo="Insiemi limitati e insiemi chiusi"}
Un insieme del piano è **limitato** se è contenuto in un cerchio. Un insieme descritto da un sistema in cui compaiono solo i simboli $\leq$, $\geq$, $=$, con funzioni continue, è **chiuso**.

| Insieme | Limitato |
| --- | --- |
| circonferenza, ellisse | sì |
| cerchio, punti interni a un'ellisse, corona circolare | sì |
| retta, parabola, iperbole | no |
| semipiano, striscia, punti esterni a una circonferenza o a un'ellisse | no |
| regioni delimitate da una sola parabola o da una sola iperbole | no |

Su un insieme chiuso e limitato una funzione continua ha massimo e minimo assoluti, per il **teorema di Weierstrass**. Riconoscere che l'insieme è chiuso e limitato garantisce quindi, prima di ogni calcolo, che massimo e minimo esistono. Le definizioni di insieme aperto, chiuso e connesso sono nel capitolo sulle funzioni di più variabili.
:::
