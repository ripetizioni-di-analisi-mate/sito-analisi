---
titolo: Equazioni, disequazioni e sistemi
sommario: Come trovare le soluzioni di equazioni intere e fratte, leggere il segno di prodotti e trinomi e discutere sistemi e parametri.
---

## Il dominio e le soluzioni

:::definizione{#equazioni titolo="Insieme delle soluzioni"}
In un'equazione i due membri devono essere definiti per lo stesso valore dell'incognita. L'insieme dei valori per cui si possono calcolare entrambi i membri è il **dominio** dell'equazione. I numeri del dominio che rendono uguali i due membri formano l'**insieme delle soluzioni**, indicato con $S$.

Nell'equazione $\dfrac{x+2}{x-1}=3$ il denominatore si annulla per $x=1$, quindi il dominio è $\mathbb R\setminus\{1\}$. Per ogni numero del dominio possiamo moltiplicare per $x-1$ e tornare indietro dividendo per lo stesso fattore.

$$
\begin{aligned}
\frac{x+2}{x-1}=3
&\iff x+2=3(x-1) \\[4pt]
&\iff 2x=5 \\[4pt]
&\iff x=\frac52.
\end{aligned}
$$

Poiché $\dfrac52$ appartiene al dominio, la soluzione è $S=\left\{\dfrac52\right\}$. Il simbolo $\iff$ si legge *se e solo se*. Ogni riga dà la precedente sotto la condizione $x\neq1$.
:::

:::teorema{#equivalenza titolo="Trasformazioni equivalenti"}
Due equazioni sono **equivalenti** quando hanno lo stesso insieme delle soluzioni nel dominio in esame. Aggiungere la stessa espressione a entrambi i membri è un'operazione reversibile dove l'espressione è definita. Moltiplicare o dividere entrambi i membri per la stessa espressione è reversibile dove il suo valore è diverso da zero.

Quando un fattore può valere zero, i due casi vanno trattati prima di dividere. Per esempio, in $x(x-4)=0$ il valore $x=0$ soddisfa l'equazione. Per $x\neq0$ possiamo dividere per $x$ e otteniamo $x=4$. Si trovano così entrambe le soluzioni.
:::

:::esempio{titolo="Il prodotto nullo"}
Per ogni coppia di numeri reali $u,v$, il prodotto $uv$ vale zero se almeno uno dei fattori vale zero. Infatti, se $u\neq0$ si può dividere l'uguaglianza $uv=0$ per $u$ e si ottiene $v=0$.

Perciò $(x+3)(2x-5)=0$ equivale a $x+3=0$ oppure $2x-5=0$. Le soluzioni sono $-3$ e $\dfrac52$. Il primo valore annulla il primo fattore, il secondo annulla il secondo. Un fattore basta a rendere nullo il prodotto.
:::

## Le equazioni di secondo grado

::::teorema{#secondo-grado titolo="Formula risolutiva"}
Siano $a,b,c\in\mathbb R$ con $a\neq0$. Chiamiamo **discriminante** il numero $\Delta=b^2-4ac$. Il numero di radici reali di $ax^2+bx+c=0$ dipende dal segno di $\Delta$.

- Se $\Delta>0$, ci sono due soluzioni distinte $\dfrac{-b+\sqrt\Delta}{2a}$ e $\dfrac{-b-\sqrt\Delta}{2a}$.
- Se $\Delta=0$, c'è una sola soluzione $-\dfrac b{2a}$, detta radice doppia.
- Se $\Delta<0$, l'insieme delle soluzioni reali è vuoto.

:::dimostrazione
Si costruisce il quadrato di $2ax+b$ a partire dall'equazione. Poiché $4a\neq0$, si può moltiplicare per $4a$ e poi aggiungere $b^2-4ac$ a entrambi i membri.

$$
\begin{aligned}
ax^2+bx+c=0
&\iff 4a^2x^2+4abx+4ac=0 \\[4pt]
&\iff 4a^2x^2+4abx+b^2=b^2-4ac \\[4pt]
&\iff (2ax+b)^2=\Delta.
\end{aligned}
$$

Un quadrato reale è sempre maggiore o uguale a zero. Per $\Delta>0$ le possibilità sono $2ax+b=\sqrt\Delta$ e $2ax+b=-\sqrt\Delta$. Per $\Delta=0$ occorre $2ax+b=0$. Risolvendo queste equazioni lineari si ottengono le radici dell'enunciato.
:::
::::

:::esempio{titolo="Dalla formula alla scomposizione"}
Per $2x^2-x-3=0$ si ha $a=2$, $b=-1$, $c=-3$. La formula dà

$$
\begin{aligned}
\Delta &=(-1)^2-4\cdot 2\cdot(-3)=25,\\[4pt]
x_{1,2} &=\frac{1\pm5}{4}.
\end{aligned}
$$

Le radici sono $-1$ e $\dfrac32$. Il polinomio si può scrivere $2(x+1)\left(x-\dfrac32\right)=(x+1)(2x-3)$. Il coefficiente $2$ nella prima scrittura conserva il coefficiente di $x^2$ dell'espressione iniziale. La scomposizione sarà utile per stabilire dove il trinomio è positivo.
:::

:::teorema{#somma-prodotto titolo="Somma e prodotto delle radici"}
Se il trinomio $ax^2+bx+c$ con $a\neq0$ ha radici reali $r$ e $s$, eventualmente coincidenti, si può scrivere $a(x-r)(x-s)$. Sviluppando il prodotto si ottiene $ax^2-a(r+s)x+ars$. Il confronto dei coefficienti dà

$$
r+s=-\frac ba,\qquad rs=\frac ca.
$$

Per esempio $x^2+2x-15$ ha radici $3$ e $-5$, perché la loro somma è $-2$ e il loro prodotto è $-15$. La verifica dà infatti $(x-3)(x+5)=x^2+2x-15$. Quando la ricerca di due numeri con somma e prodotto assegnati richiede troppo tempo, si può tornare alla formula risolutiva.
:::

## Il segno di un prodotto

:::teorema{#prodotti titolo="Tabella dei segni"}
Un prodotto di fattori reali vale zero se almeno un fattore vale zero. Quando tutti i fattori sono diversi da zero, ogni fattore negativo inverte il segno. Quindi il prodotto è positivo se il numero dei fattori negativi è pari ed è negativo se quel numero è dispari.

Per ogni fattore lineare $x-r$, il segno è negativo a sinistra di $r$ e positivo a destra. Per il fattore $-2(x-r)$ i segni si invertono perché $-2<0$. Quando i fattori sono polinomi non nulli, i loro zeri dividono la retta reale in intervalli. Il segno di ciascun fattore è costante all'interno di ogni intervallo, quindi si può calcolare il segno del prodotto un intervallo alla volta.
:::

:::esempio{titolo="Uno zero semplice e uno doppio"}
Per risolvere $(x+1)^2(x-2)<0$ si segnano sulla retta $-1$ e $2$. Il fattore $(x+1)^2$ è positivo su entrambi i lati di $-1$. Il fattore $x-2$ è negativo per $x<2$.

$$
\begin{array}{c|ccc}
x & (-\infty,-1) & (-1,2) & (2,+\infty)\\ \hline
(x+1)^2 & + & + & +\\
x-2 & - & - & +\\ \hline
(x+1)^2(x-2) & - & - & +
\end{array}
$$

Poiché la disequazione è stretta, i due zeri si escludono. La soluzione è $(-\infty,-1)\cup(-1,2)$. In $-1$ il grafico tocca l'asse e resta sotto l'asse da entrambi i lati. In $2$ il grafico attraversa l'asse e il segno cambia.

::grafico{f="(x+1)^2*(x-2)" xmin=-3.1 xmax=3.1 ymin=-13 ymax=12 punti="-1,0,pieno;2,0,pieno" titolo="Il prodotto è negativo prima di $2$, con uno zero doppio in $x=-1$"}

:::

:::osservazione
La **molteplicità** di una radice $r$ è il numero di volte che il fattore $x-r$ compare nella scomposizione. Vicino a $r$, gli altri fattori mantengono il proprio segno. Una molteplicità pari dà quindi lo stesso segno da entrambi i lati, mentre una molteplicità dispari dà segni opposti. In una disequazione non stretta lo zero entra nell'insieme delle soluzioni in entrambi i casi, purché appartenga al dominio.
:::

## Le disequazioni di secondo grado

:::teorema{#disequazioni titolo="Segno del trinomio"}
Portando tutti i termini in un membro, una disequazione di secondo grado confronta il trinomio $ax^2+bx+c$ con zero. Sia $a\neq0$ e sia $\Delta$ il suo discriminante.

- Se $\Delta>0$ e le radici sono $r<s$, la forma $a(x-r)(x-s)$ ha il segno di $a$ all'esterno di $[r,s]$. In $(r,s)$ i fattori lineari hanno segno opposto, quindi il trinomio ha il segno opposto a quello di $a$.
- Se $\Delta=0$ e la radice doppia è $r$, il trinomio vale $a(x-r)^2$. Vale zero in $r$ e ha il segno di $a$ per ogni $x\neq r$.
- Se $\Delta<0$, vale l'identità $4a(ax^2+bx+c)=(2ax+b)^2-\Delta$. Poiché $-\Delta>0$, il membro di destra è positivo per ogni $x$. Il trinomio ha perciò il segno di $a$ su tutta la retta reale.
:::

:::esempio{titolo="Il coefficiente di secondo grado è negativo"}
In $-x^2+x+6\geq0$, il trinomio vale $-(x+2)(x-3)$. Per $-2<x<3$ il primo fattore lineare è positivo e il secondo è negativo. Il segno davanti al prodotto rende quindi il trinomio positivo in quell'intervallo. All'esterno i fattori lineari hanno lo stesso segno e il trinomio è negativo. Includendo gli zeri si ottiene $[-2,3]$.

::grafico{f="-x^2+x+6" xmin=-4 xmax=5 ymin=-10 ymax=8 punti="-2,0,pieno;3,0,pieno" titolo="La parabola è sopra l'asse per $-2<x<3$ e tocca l'asse nei due estremi"}

:::

:::esempio{titolo="Confrontare due grafici"}
La disequazione $x^2\leq x+2$ chiede dove i punti della parabola $y=x^2$ sono alla stessa altezza della retta $y=x+2$ o più in basso. La differenza è $x^2-x-2=(x+1)(x-2)$. Il prodotto è negativo tra gli zeri $-1$ e $2$. Poiché nei due punti d'intersezione vale l'uguaglianza, la soluzione è $[-1,2]$.

::grafico{f="x^2;x+2" xmin=-2.5 xmax=3.2 ymin=-1 ymax=8 punti="-1,1,pieno,A;2,4,pieno,B" titolo="Fra le ascisse di $A$ e $B$ la parabola si trova sotto la retta"}

:::

## Le equazioni e le disequazioni fratte

:::teorema{#fratte titolo="Segno del quoziente"}
Siano $N(x)$ e $D(x)$ due espressioni reali. Dove $D(x)\neq0$, la frazione $\dfrac{N(x)}{D(x)}$ vale zero quando $N(x)=0$. Vale positiva quando numeratore e denominatore hanno lo stesso segno, negativa quando hanno segni opposti.

Quando la frazione è confrontata con un'espressione diversa da zero, si porta tutto nello stesso membro e si usa un denominatore comune. Il dominio si ricava dai denominatori dell'espressione iniziale. Un fattore può scomparire durante i calcoli, mentre l'esclusione del suo zero rimane.
:::

:::esempio{titolo="Una disuguaglianza con due soglie"}
Per risolvere $\dfrac{2}{x-1}\leq1$ si richiede $x\neq1$. Si sottrae $1$ a entrambi i membri e si raccoglie la differenza in una frazione.

$$
\frac{2}{x-1}-1=\frac{2-(x-1)}{x-1}=\frac{3-x}{x-1}.
$$

Per $x<1$, il numeratore è positivo e il denominatore negativo. Per $1<x<3$ entrambi sono positivi. Per $x>3$, il numeratore è negativo e il denominatore positivo. Il numeratore si annulla in $3$ mentre il denominatore resta diverso da zero. Quindi la soluzione è $(-\infty,1)\cup[3,+\infty)$.
:::

:::attenzione
Moltiplicare una disequazione per un numero negativo inverte il verso. In $\dfrac{2}{x-1}\leq1$ il fattore $x-1$ cambia segno. Per esempio $x=0$ soddisfa $-2\leq1$. Se si moltiplicasse senza invertire il verso, si otterrebbe invece la condizione $2\leq x-1$, che per $x=0$ è falsa. Lo studio del segno della frazione tiene conto di entrambi i casi.
:::

:::esempio{titolo="Il punto escluso dopo una semplificazione"}
L'espressione $\dfrac{x^2-9}{x-3}$ è definita per $x\neq3$. Su quel dominio, il numeratore vale $(x-3)(x+3)$, quindi la frazione si riduce a $x+3$. Per risolvere $\dfrac{x^2-9}{x-3}\geq0$ si interseca $[-3,+\infty)$ con il dominio. La soluzione è $[-3,3)\cup(3,+\infty)$.

::grafico{f="(x^2-9)/(x-3)" xmin=-5 xmax=6 ymin=-2 ymax=10 punti="-3,0,pieno;3,6,vuoto" titolo="Per $x=3$ la frazione è indefinita, come mostra il punto vuoto"}

:::

## Le condizioni simultanee

:::definizione{#sistemi titolo="Intersezione delle soluzioni"}
In un **sistema** tutte le condizioni devono essere soddisfatte dallo stesso valore o dalla stessa coppia di valori. Per un sistema di disequazioni in una sola incognita si risolve ogni disequazione e si prende l'intersezione dei risultati. Quando basta che sia soddisfatta almeno una condizione, si usa l'unione.

Le condizioni $x^2\leq 9$ e $x>1$ danno $[-3,3]\cap(1,+\infty)=(1,3]$. Con la parola *oppure* al posto di *e* si ottiene $[-3,3]\cup(1,+\infty)=[-3,+\infty)$, perché ogni valore maggiore di $3$ soddisfa la seconda condizione.
:::

:::esempio{titolo="Intersecare due insiemi a più intervalli"}
Consideriamo il sistema

$$
\begin{cases}
(x+2)(x-4)\geq0,\\
(x+5)(x-1)<0.
\end{cases}
$$

La prima disequazione dà $(-\infty,-2]\cup[4,+\infty)$. La seconda dà $(-5,1)$. L'intervallo $[4,+\infty)$ è tutto a destra di $1$. L'intersezione con il primo intervallo va invece da $-5$ escluso fino a $-2$ incluso, quindi la soluzione è $(-5,-2]$.
:::

:::esempio{titolo="Un sistema di due equazioni in due incognite"}
Le coppie $(x,y)$ che soddisfano $y=x^2$ e $y=x+2$ appartengono a entrambi i grafici. Poiché la seconda equazione esprime già $y$, si sostituisce $x+2$ nella prima. Si ottiene $(x+1)(x-2)=0$, quindi $x=-1$ oppure $x=2$.

Per $x=-1$ la seconda equazione dà $y=1$, e per $x=2$ dà $y=4$. Entrambe le coppie soddisfano anche $y=x^2$. L'insieme delle soluzioni è $\{(-1,1),(2,4)\}$. Le sole ascisse indicano dove si trovano le intersezioni lungo l'asse $x$, mentre il sistema richiede entrambe le coordinate.
:::

## Il ruolo del parametro

:::teorema{#parametri titolo="Distinguere i casi prima di dividere"}
Un **parametro** è un numero fissato per ciascuna equazione della famiglia. In $(k-2)x=k-2$, il parametro è $k$ e l'incognita è $x$. Per ogni $k\neq2$ si può dividere per $k-2$ e ottenere $x=1$. Per $k=2$ si ottiene $0=0$, quindi ogni numero reale è soluzione.

Nell'equazione $A(k)x=B(k)$ ci sono tre possibilità.

- Se $A(k)\neq0$, l'unica soluzione è $x=\dfrac{B(k)}{A(k)}$.
- Se $A(k)=0$ e $B(k)=0$, ogni valore reale di $x$ soddisfa l'equazione.
- Se $A(k)=0$ e $B(k)\neq0$, nessun valore reale di $x$ soddisfa l'equazione.

Per un'espressione quadratica con parametro si distingue prima il caso in cui si annulla il coefficiente di $x^2$. Si usa il discriminante nei casi in cui l'equazione è effettivamente di secondo grado.
:::

:::esempio{titolo="Il grado si riduce per un valore del parametro"}
Nell'equazione $(k-1)x^2-2x+1=0$, per $k=1$ resta $-2x+1=0$. La soluzione è $x=\dfrac12$ e si tratta di un'equazione lineare. Per $k\neq1$ si calcola

$$
\Delta=(-2)^2-4(k-1)=4(2-k).
$$

Per $k<2$ con $k\neq1$ si hanno due radici reali distinte. Per $k=2$ resta $x^2-2x+1=(x-1)^2=0$, quindi si ha la radice doppia $x=1$. Per $k>2$ il discriminante è negativo e non ci sono radici reali. Entrambi i valori $1$ e $2$ cambiano il numero di soluzioni per motivi diversi. Il primo cambia il grado, il secondo azzera il discriminante.
:::

## Problemi e controllo del risultato

:::esempio{#problemi titolo="Dimensioni di un rettangolo"}
Un rettangolo ha area $40\,\mathrm{cm^2}$ e il lato lungo supera quello corto di $3\,\mathrm{cm}$. Indicando con $x$ la misura del lato corto in centimetri, l'altro lato misura $x+3$. Una lunghezza è positiva, quindi si cerca una soluzione con $x>0$.

$$
\begin{aligned}
x(x+3)&=40 \\[4pt]
x^2+3x-40&=0 \\[4pt]
(x-5)(x+8)&=0.
\end{aligned}
$$

La radice $-8$ soddisfa il polinomio ma è fuori dall'insieme delle misure ammissibili. La radice $5$ dà i lati $5\,\mathrm{cm}$ e $8\,\mathrm{cm}$. Il prodotto delle misure vale $40$ e la differenza vale $3$, come richiedono i dati del problema.
:::

:::esempio{titolo="Un'area minima con una lunghezza fissata"}
Si chiude uno spazio rettangolare addossato a una parete usando $12\,\mathrm m$ di rete sui tre lati liberi. Se i due lati perpendicolari alla parete misurano $x$ metri ciascuno, il lato parallelo misura $12-2x$ metri. Entrambe le misure sono positive, perciò $0<x<6$. Si cerca quando l'area raggiunge almeno $16\,\mathrm{m^2}$.

$$
\begin{aligned}
x(12-2x)&\geq16 \\[4pt]
-2x^2+12x-16&\geq0 \\[4pt]
-2(x-2)(x-4)&\geq0 \\[4pt]
(x-2)(x-4)&\leq0.
\end{aligned}
$$

L'ultima disequazione dà $[2,4]$, intervallo contenuto nel dominio geometrico. Ai due estremi l'area è esattamente $16\,\mathrm{m^2}$. Nel punto intermedio $x=3$ il lato parallelo è lungo $6\,\mathrm m$ e l'area vale $18\,\mathrm{m^2}$.

::grafico{f="x*(12-2*x)+0*sqrt(x*(6-x));16" xmin=-0.4 xmax=6.5 ymin=-3 ymax=21 punti="0,0,vuoto;2,16,pieno;4,16,pieno;6,0,vuoto" legenda="y=x(12-2x);y=16" titolo="Il grafico dell'area è almeno alla quota $16$ per $2\leq x\leq4$"}

:::
