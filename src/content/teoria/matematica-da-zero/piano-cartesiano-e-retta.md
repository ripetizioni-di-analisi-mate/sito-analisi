---
titolo: Piano cartesiano e retta
sommario: Come si individua un punto con due numeri, come si calcolano la distanza tra due punti e il punto medio di un segmento, che cos'è una funzione con il suo grafico, come si scrive e si disegna una retta, quando due rette sono parallele o perpendicolari e come si trova il punto in cui due rette si incontrano risolvendo un sistema.
---

## Assi, origine e coordinate

:::definizione{#piano-cartesiano titolo="Piano cartesiano"}
Si disegnano due rette perpendicolari, una orizzontale e una verticale. Su ciascuna si fissano un verso positivo, indicato da una freccia, e un'unità di misura, la stessa per le due rette. La retta orizzontale si chiama **asse $x$**, o asse delle ascisse; la retta verticale si chiama **asse $y$**, o asse delle ordinate. Il punto in cui le due rette si incontrano si chiama **origine** e si indica con $O$. Un piano con questi due assi si chiama **piano cartesiano**.

In parole semplici, ogni asse è una retta dei numeri come quella dell'argomento sui numeri relativi. Sull'asse $x$ i numeri positivi stanno a destra di $O$ e i negativi a sinistra; sull'asse $y$ i positivi stanno sopra $O$ e i negativi sotto. Con il piano cartesiano la posizione di un punto si descrive con due numeri, e molti problemi di geometria diventano calcoli.
:::

:::definizione{#coordinate titolo="Coordinate di un punto"}
Sia $P$ un punto del piano. Da $P$ si scende, o si sale, in verticale fino all'asse $x$, e il numero che si legge su quell'asse si chiama **ascissa** di $P$. Da $P$ ci si sposta in orizzontale fino all'asse $y$, e il numero che si legge si chiama **ordinata** di $P$. Ascissa e ordinata sono le **coordinate** di $P$. Si scrivono dopo il nome del punto, prima l'ascissa e poi l'ordinata, separate da una virgola, come in $P(x_P, y_P)$.

Il punto $A(3, 2)$ si raggiunge partendo da $O$ con $3$ unità verso destra e poi $2$ unità verso l'alto. Il punto $B(-2, 3)$ si raggiunge con $2$ unità verso sinistra e $3$ verso l'alto. L'ordine delle coordinate cambia il punto, perché $(3, 2)$ è $3$ a destra e $2$ in alto, mentre $(2, 3)$ è $2$ a destra e $3$ in alto. A ogni punto del piano corrisponde una sola coppia di coordinate, e a ogni coppia di numeri corrisponde un solo punto.
:::

:::osservazione{#punti-sugli-assi titolo="Punti sugli assi"}
Per raggiungere un punto dell'asse $x$ partendo da $O$ ci si sposta solo in orizzontale, quindi la sua ordinata è $0$. Per esempio $(4, 0)$ e $(-1, 0)$ stanno sull'asse $x$. Allo stesso modo un punto dell'asse $y$ ha ascissa $0$, come $(0, 5)$ e $(0, -3)$. L'origine sta su entrambi gli assi e ha coordinate $O(0, 0)$.
:::

:::definizione{#quadranti titolo="Quadranti"}
I due assi dividono il piano in quattro parti, che si chiamano **quadranti**. Si numerano da I a IV, partendo da quella in alto a destra e girando in senso antiorario. Dai segni delle coordinate si capisce in quale quadrante si trova un punto.

- I quadrante: $x > 0$ e $y > 0$; per esempio $A(3, 2)$.
- II quadrante: $x < 0$ e $y > 0$; per esempio $B(-2, 3)$.
- III quadrante: $x < 0$ e $y < 0$; per esempio $C(-3, -1)$.
- IV quadrante: $x > 0$ e $y < 0$; per esempio $D(2, -3)$.

I punti che stanno sugli assi non appartengono a nessun quadrante. Il punto $(0, -3)$, per esempio, sta sull'asse $y$, tra il III e il IV quadrante.

::grafico{xmin=-5 xmax=5 ymin=-4 ymax=4 uguale=1 punti="3,2,pieno,A;-2,3,pieno,B;-3,-1,pieno,C;2,-3,pieno,D" segmenti="3,0,3,2;0,2,3,2;-2,0,-2,3;0,3,-2,3" etichette="3.8,3.4,I;-4.2,3.4,II;-4.4,-3.2,III;3.8,-3.2,IV" titolo="I punti $A(3, 2)$, $B(-2, 3)$, $C(-3, -1)$ e $D(2, -3)$ nei quattro quadranti; per $A$ e $B$ i segmenti tratteggiati mostrano come si leggono le coordinate sugli assi"}

:::

## Distanza tra due punti e punto medio

:::definizione{#distanza-sugli-assi titolo="Distanza tra punti con la stessa ordinata o la stessa ascissa"}
La **distanza** tra due punti $A$ e $B$ è la lunghezza del segmento $AB$ e si indica con $\overline{AB}$. Se $A$ e $B$ hanno la stessa ordinata, il segmento $AB$ è orizzontale e la sua lunghezza è la differenza tra l'ascissa maggiore e l'ascissa minore. Per $A(-2, 1)$ e $B(5, 1)$ si ha
$$
\overline{AB} = 5 - (-2) = 7 .
$$
Se invece $A$ e $B$ hanno la stessa ascissa, il segmento è verticale e la sua lunghezza è la differenza tra le ordinate. Per $C(3, -4)$ e $D(3, 2)$ si ha $\overline{CD} = 2 - (-4) = 6$.

In generale un segmento orizzontale misura $|x_B - x_A|$, dove $|\ |$ è il valore assoluto visto nell'argomento sui numeri relativi. Con il valore assoluto il risultato è lo stesso in qualunque ordine si scrivano i due punti, perché $|5 - (-2)| = 7$ e $|-2 - 5| = |-7| = 7$. Allo stesso modo un segmento verticale misura $|y_B - y_A|$.
:::

:::richiamo{titolo="Teorema di Pitagora"}
In un triangolo rettangolo con cateti $a$, $b$ e ipotenusa $c$ vale
$$
c^2 = a^2 + b^2 .
$$
:::

::::teorema{#distanza-tra-due-punti titolo="Distanza tra due punti"}
La distanza tra i punti $A(x_A, y_A)$ e $B(x_B, y_B)$ è
$$
\overline{AB} = \sqrt{(x_B - x_A)^2 + (y_B - y_A)^2} .
$$
Per $A(1, -2)$ e $B(7, 6)$ si ottiene
$$
\begin{aligned}
\overline{AB} &= \sqrt{(7 - 1)^2 + \big(6 - (-2)\big)^2} \\[6pt]
&= \sqrt{6^2 + 8^2} = \sqrt{36 + 64} \\[6pt]
&= \sqrt{100} = 10 .
\end{aligned}
$$
La formula permette di misurare un segmento conoscendo soltanto le coordinate dei suoi estremi. Le differenze compaiono al quadrato, e un numero e il suo opposto hanno lo stesso quadrato, quindi si possono scambiare $A$ e $B$ senza cambiare il risultato. Per esempio $(1 - 7)^2 = 36$ e $(7 - 1)^2 = 36$.

:::dimostrazione
L'idea è costruire un triangolo rettangolo che ha il segmento $AB$ come ipotenusa. Si prende il punto $H(x_B, y_A)$, che ha la stessa ordinata di $A$ e la stessa ascissa di $B$. Il segmento $AH$ è orizzontale e misura $|x_B - x_A|$; il segmento $HB$ è verticale e misura $|y_B - y_A|$. Un segmento orizzontale e uno verticale sono perpendicolari, quindi il triangolo $AHB$ è rettangolo in $H$, con cateti $AH$, $HB$ e ipotenusa $AB$. Per il **teorema di Pitagora**
$$
\overline{AB}^2 = \overline{AH}^2 + \overline{HB}^2 = (x_B - x_A)^2 + (y_B - y_A)^2 ,
$$
perché il quadrato del valore assoluto di un numero è uguale al quadrato del numero. Estraendo la radice quadrata si ottiene la formula. Se $A$ e $B$ hanno la stessa ordinata, il triangolo non si forma; in questo caso la seconda differenza è $0$ e la formula dà $\sqrt{(x_B - x_A)^2} = |x_B - x_A|$, cioè la lunghezza del segmento orizzontale. Lo stesso accade per due punti con la stessa ascissa. Nell'esempio il punto è $H(7, -2)$, i cateti misurano $6$ e $8$, e l'ipotenusa misura $10$.

::grafico{xmin=-1 xmax=9 ymin=-4 ymax=7 uguale=1 linee="1,-2 7,6" punti="1,-2,pieno,A;7,6,pieno,B;7,-2,pieno,H" segmenti="1,-2,7,-2;7,-2,7,6" etichette="3.8,-3,6;7.3,1.8,8;3.1,2.6,10" titolo="Il segmento $AB$ è l'ipotenusa del triangolo rettangolo $AHB$, con cateti $\overline{AH} = 7 - 1 = 6$ e $\overline{HB} = 6 - (-2) = 8$; perciò $\overline{AB} = \sqrt{36 + 64} = 10$"}

:::
::::

:::esempio{titolo="Distanza con coordinate negative"}
Per $P(-3, 2)$ e $Q(1, -1)$ le differenze delle coordinate sono $1 - (-3) = 4$ e $-1 - 2 = -3$. Quindi
$$
\overline{PQ} = \sqrt{4^2 + (-3)^2} = \sqrt{16 + 9} = \sqrt{25} = 5 .
$$
La differenza $-3$ è negativa, ma il suo quadrato è $9$, e il cateto verticale del triangolo misura $3$.
:::

::::teorema{#punto-medio titolo="Punto medio di un segmento"}
Il **punto medio** del segmento $AB$ è il punto $M$ del segmento che ha la stessa distanza da $A$ e da $B$. Le sue coordinate sono le medie delle coordinate degli estremi:
$$
M\left( \frac{x_A + x_B}{2}, \frac{y_A + y_B}{2} \right) .
$$
Per $A(1, -2)$ e $B(7, 6)$ si ottiene
$$
M\left( \frac{1 + 7}{2}, \frac{-2 + 6}{2} \right) = M(4, 2) .
$$
Con la formula della distanza si trova $\overline{AM} = \sqrt{3^2 + 4^2} = 5$ e $\overline{MB} = \sqrt{3^2 + 4^2} = 5$. Quindi $M$ ha la stessa distanza dai due estremi, e questa distanza è metà di $\overline{AB} = 10$.

:::dimostrazione
Per andare da $A$ a $B$ ci si sposta di $x_B - x_A$ in orizzontale e di $y_B - y_A$ in verticale. Facendo metà di ciascuno dei due spostamenti si arriva a metà del segmento, perché si ottiene un triangolo rettangolo con la stessa forma del triangolo $AHB$ e con i lati lunghi la metà. L'ascissa di $M$ è perciò
$$
x_A + \frac{x_B - x_A}{2} = \frac{2x_A + x_B - x_A}{2} = \frac{x_A + x_B}{2} ,
$$
e allo stesso modo l'ordinata è $\dfrac{y_A + y_B}{2}$. Nell'esempio da $A(1, -2)$ a $B(7, 6)$ ci si sposta di $6$ verso destra e di $8$ verso l'alto. Con metà degli spostamenti, $3$ verso destra e $4$ verso l'alto, si arriva nel punto $M(4, 2)$.
:::
::::

:::esempio{titolo="Punto medio con coordinate negative"}
Per $A(-5, 3)$ e $B(2, -1)$ si ha
$$
M\left( \frac{-5 + 2}{2}, \frac{3 + (-1)}{2} \right) = M\left( -\frac{3}{2}, 1 \right) .
$$
Le coordinate del punto medio possono essere frazioni anche quando gli estremi hanno coordinate intere.
:::

## Funzioni, tabelle e grafici

:::definizione{#funzione titolo="Funzione"}
Una **funzione** è una regola che associa a ogni numero $x$ di un certo insieme *uno e un solo* numero $y$. Il numero $x$ si chiama variabile indipendente, perché si sceglie; il numero $y$ si chiama variabile dipendente, perché si calcola a partire da $x$. Si scrive $y = f(x)$, che si legge "$y$ uguale a effe di $x$".

In parole semplici, la regola di molte funzioni è un procedimento di calcolo. Si sceglie $x$, si eseguono le operazioni indicate e si ottiene un solo risultato. Per $f(x) = 2x + 1$ si ha $f(3) = 2 \cdot 3 + 1 = 7$ e $f(-2) = 2 \cdot (-2) + 1 = -3$. I valori si raccolgono in una tabella.

| $x$ | $-2$ | $-1$ | $0$ | $1$ | $2$ |
| --- | --- | --- | --- | --- | --- |
| $y = 2x + 1$ | $-3$ | $-1$ | $1$ | $3$ | $5$ |

Molte situazioni quotidiane sono descritte da una funzione. Se le mele costano $2$ euro al chilo, la spesa $y$ per $x$ chili è $y = 2x$; per $3$ chili si spendono $6$ euro.
:::

:::definizione{#grafico-di-una-funzione titolo="Grafico di una funzione"}
Il **grafico** di una funzione $f$ è l'insieme dei punti del piano cartesiano con coordinate $\big( x, f(x) \big)$, cioè dei punti la cui ordinata è il valore della funzione calcolato nella loro ascissa. Per disegnarlo in modo approssimato si compila una tabella, si segnano i punti e si uniscono con una linea.

Per $f(x) = x^2$ la tabella dà i punti $(-2, 4)$, $(-1, 1)$, $(0, 0)$, $(1, 1)$ e $(2, 4)$, e la linea che li unisce è una curva che si chiama parabola. Un punto appartiene al grafico quando le sue coordinate soddisfano l'equazione $y = f(x)$. Il punto $(3, 9)$ appartiene al grafico di $f$, perché $3^2 = 9$; il punto $(2, 5)$ non vi appartiene, perché $2^2 = 4$ è diverso da $5$.

::grafico{f="x^2" xmin=-3 xmax=3 ymin=-1 ymax=9 punti="-2,4,pieno;-1,1,pieno;0,0,pieno;1,1,pieno;2,4,pieno" legenda="y = x^2" titolo="I punti della tabella di $f(x) = x^2$ per $x = -2, -1, 0, 1, 2$ e la curva che li unisce, che è il grafico della funzione"}

:::

:::attenzione
Una linea del piano può non essere il grafico di una funzione. Una funzione associa a ogni $x$ un solo $y$, quindi ogni retta verticale incontra il suo grafico al massimo in un punto. La regola "$y$ è un numero il cui quadrato è $x$" associa a $x = 4$ i due numeri $y = 2$ e $y = -2$, perché $2^2 = 4$ e $(-2)^2 = 4$. I punti $(4, 2)$ e $(4, -2)$ stanno sulla stessa retta verticale, perciò questa regola *non* è una funzione.
:::

## Retta per l'origine

:::definizione{#retta-per-l-origine titolo="Retta passante per l'origine"}
Sia $m$ un numero fissato. I punti del piano che soddisfano l'equazione
$$
y = mx
$$
formano una **retta passante per l'origine**. Il numero $m$ si chiama **coefficiente angolare**, o pendenza, della retta. Per $x = 0$ si ha $y = 0$, quindi la retta passa per $O(0, 0)$; per $x = 1$ si ha $y = m$, quindi la retta passa per $(1, m)$.

Per $y = 2x$ la tabella dà i punti $(0, 0)$, $(1, 2)$, $(2, 4)$ e $(3, 6)$. Ogni volta che $x$ aumenta di $1$, $y$ aumenta di $2$. In ogni punto diverso da $O$ il rapporto $\dfrac{y}{x}$ vale $2$, per esempio $\dfrac{6}{3} = 2$. Per questo l'equazione $y = mx$ descrive due grandezze direttamente proporzionali, come nell'argomento su numeri decimali, proporzioni e percentuali. Per esempio la spesa $y = 2x$ per $x$ chili di mele a $2$ euro al chilo ha come grafico una parte di questa retta.
:::

:::osservazione{#segno-coefficiente-angolare titolo="Segno del coefficiente angolare"}
Il coefficiente angolare indica come è inclinata la retta.

- Se $m > 0$ la retta sale da sinistra a destra. Per $y = 2x$, passando da $x = 1$ a $x = 2$ l'ordinata passa da $2$ a $4$.
- Se $m < 0$ la retta scende da sinistra a destra. Per $y = -x$, passando da $x = 1$ a $x = 2$ l'ordinata passa da $-1$ a $-2$.
- Se $m = 0$ l'equazione è $y = 0$, che è l'asse $x$.

Più grande è il valore assoluto di $m$, più ripida è la retta. Per $x = 1$ la retta $y = 3x$ arriva all'ordinata $3$, mentre la retta $y = \dfrac{1}{2}x$ arriva soltanto a $\dfrac{1}{2}$. La retta $y = x$ si chiama bisettrice del I e del III quadrante, perché divide a metà l'angolo retto formato dalla parte positiva dell'asse $x$ e dalla parte positiva dell'asse $y$; la retta $y = -x$ è la bisettrice del II e del IV quadrante.

::grafico{f="2*x;-x" xmin=-4 xmax=4 ymin=-4 ymax=4 uguale=1 punti="1,2,pieno;2,4,pieno;1,-1,pieno;2,-2,pieno" legenda="y = 2x;y = -x" titolo="La retta $y = 2x$ ha $m = 2 > 0$ e sale; la retta $y = -x$ ha $m = -1 < 0$ e scende; entrambe passano per l'origine"}

:::

## Retta y = mx + q

:::definizione{#retta-y-mx-q titolo="Equazione della retta in forma esplicita"}
Siano $m$ e $q$ due numeri fissati. I punti che soddisfano l'equazione
$$
y = mx + q
$$
formano una retta. Questa retta si ottiene dalla retta $y = mx$ aggiungendo $q$ a ogni ordinata, cioè spostando ogni suo punto di $q$ unità in verticale; perciò ha la stessa inclinazione, e il numero $m$ si chiama ancora coefficiente angolare. Il numero $q$ si chiama **ordinata all'origine**, o intercetta. Per $x = 0$ si ha $y = q$, quindi $q$ è l'ordinata del punto $(0, q)$ in cui la retta taglia l'asse $y$. L'equazione $y = mx + q$ si chiama **forma esplicita** della retta, perché la $y$ è isolata in un membro.

Per $y = 2x + 1$ si ha $m = 2$ e $q = 1$. La retta passa per $(0, 1)$, per $(1, 3)$ e per $(2, 5)$, e a ogni passo di $1$ verso destra sale di $2$.

::grafico{f="2*x+1" xmin=-4 xmax=4 ymin=-3 ymax=6 uguale=1 punti="0,1,pieno;1,3,pieno;2,5,pieno" segmenti="0,1,1,1;1,1,1,3;1,3,2,3;2,3,2,5" etichette="0.35,0.45,1;1.15,1.9,2;1.35,2.45,1;2.15,3.9,2" legenda="y = 2x + 1" titolo="La retta $y = 2x + 1$ taglia l'asse $y$ nel punto di ordinata $q = 1$; a ogni passo di $1$ verso destra sale di $m = 2$"}

:::

:::esempio{titolo="Disegnare una retta e trovare dove taglia gli assi"}
Per due punti passa una sola retta, quindi per disegnare una retta bastano due suoi punti. Per $y = -\dfrac{1}{2}x + 3$ si ha $m = -\dfrac{1}{2}$ e $q = 3$.

- Per $x = 0$ si ottiene $y = 3$, quindi la retta taglia l'asse $y$ nel punto $(0, 3)$.
- Per trovare dove taglia l'asse $x$ si pone $y = 0$. L'equazione $-\dfrac{1}{2}x + 3 = 0$ diventa $\dfrac{1}{2}x = 3$, quindi $x = 6$ e il punto è $(6, 0)$.

Si segnano i due punti $(0, 3)$ e $(6, 0)$ e si traccia la retta che li unisce. Il coefficiente angolare è negativo, e infatti la retta scende di $\dfrac{1}{2}$ a ogni passo di $1$ verso destra.
:::

:::attenzione
Il coefficiente angolare è il numero che moltiplica $x$, anche quando non è scritto per primo. Nella retta $y = 5 - 3x$ il coefficiente angolare è $-3$ e l'ordinata all'origine è $5$. Infatti per $x = 1$ si ha $y = 2$ e per $x = 2$ si ha $y = -1$, quindi a ogni passo di $1$ verso destra la retta scende di $3$.
:::

## Rette parallele agli assi e forma implicita

:::teorema{#rette-parallele-agli-assi titolo="Rette parallele agli assi"}
Siano $h$ e $k$ due numeri fissati.

- L'equazione $y = k$ rappresenta la retta orizzontale formata dai punti con ordinata $k$. È parallela all'asse $x$ e passa per $(0, k)$. Si può scrivere $y = 0 \cdot x + k$, quindi il suo coefficiente angolare è $0$. Per esempio $y = -2$ contiene i punti $(-1, -2)$, $(0, -2)$ e $(4, -2)$.
- L'equazione $x = h$ rappresenta la retta verticale formata dai punti con ascissa $h$. È parallela all'asse $y$ e passa per $(h, 0)$. Per esempio $x = 3$ contiene i punti $(3, -1)$, $(3, 0)$ e $(3, 5)$.

L'asse $x$ ha equazione $y = 0$ e l'asse $y$ ha equazione $x = 0$. Una retta verticale associa al valore $x = h$ infiniti valori di $y$, quindi non è il grafico di una funzione e non si può scrivere nella forma $y = mx + q$; per una retta verticale il coefficiente angolare non è definito.

::grafico{f="-2" linee="3,-4 3,4" xmin=-4 xmax=5 ymin=-4 ymax=4 uguale=1 punti="3,-2,pieno,P" etichette="3.2,3.3,x = 3" legenda="y = -2" titolo="La retta $x = 3$ è parallela all'asse $y$ e la retta $y = -2$ è parallela all'asse $x$; si incontrano nel punto $P(3, -2)$"}

:::

:::definizione{#forma-implicita titolo="Equazione della retta in forma implicita"}
Ogni retta del piano ha un'equazione della forma
$$
ax + by + c = 0 ,
$$
dove $a$, $b$, $c$ sono numeri fissati e $a$, $b$ non sono entrambi uguali a $0$. Questa si chiama **forma implicita** della retta, perché la $y$ non è isolata. La forma implicita comprende anche le rette verticali, e per questo motivo vale per *ogni* retta.

- Se $b \neq 0$ si isola $y$ e si ottiene la forma esplicita. Per $2x + 3y - 6 = 0$ si porta $2x - 6$ nel secondo membro e si ottiene $3y = -2x + 6$; dividendo per $3$ si trova $y = -\dfrac{2}{3}x + 2$, quindi $m = -\dfrac{2}{3}$ e $q = 2$. In generale $m = -\dfrac{a}{b}$.
- Se $b = 0$ l'equazione diventa $ax + c = 0$ e rappresenta una retta verticale. Per esempio $2x - 8 = 0$ equivale a $x = 4$.

Per passare dalla forma esplicita alla forma implicita si porta tutto nel primo membro, e quindi $y = 3x - 1$ diventa $3x - y - 1 = 0$.
:::

## Retta per un punto e retta per due punti

::::teorema{#retta-per-un-punto titolo="Retta per un punto con coefficiente angolare dato"}
La retta che passa per il punto $P(x_0, y_0)$ e ha coefficiente angolare $m$ ha equazione
$$
y - y_0 = m\,(x - x_0) .
$$
Per $P(2, 1)$ e $m = 3$ si ottiene $y - 1 = 3\,(x - 2)$, cioè $y - 1 = 3x - 6$, e quindi $y = 3x - 5$. Il controllo con $x = 2$ dà $y = 6 - 5 = 1$, e il punto $P$ appartiene alla retta.

:::dimostrazione
Portando $y_0$ nel secondo membro, l'equazione diventa $y = mx - mx_0 + y_0$. Questa è la forma esplicita $y = mx + q$ con $q = y_0 - mx_0$, quindi rappresenta una retta di coefficiente angolare $m$. Sostituendo $x = x_0$ si ottiene $y - y_0 = m \cdot 0 = 0$, cioè $y = y_0$, perciò la retta passa per $P$.
:::
::::

::::teorema{#retta-per-due-punti titolo="Retta per due punti"}
Siano $A(x_A, y_A)$ e $B(x_B, y_B)$ due punti con $x_A \neq x_B$. La retta che passa per $A$ e per $B$ ha coefficiente angolare
$$
m = \frac{y_B - y_A}{x_B - x_A} ,
$$
e la sua equazione si trova con la formula della retta per un punto, usando $A$ e questo valore di $m$. Se invece $x_A = x_B$, la retta è verticale e ha equazione $x = x_A$.

Per $A(-1, 4)$ e $B(3, -4)$ si ha
$$
m = \frac{-4 - 4}{3 - (-1)} = \frac{-8}{4} = -2 .
$$
La retta è $y - 4 = -2\,(x + 1)$, cioè $y = -2x - 2 + 4 = -2x + 2$. Il controllo con $B$ dà $-2 \cdot 3 + 2 = -4$, che è l'ordinata di $B$.

:::dimostrazione
Poiché $x_A \neq x_B$, la retta non è verticale e ha un'equazione $y = mx + q$. I due punti stanno su questa retta, quindi $y_A = mx_A + q$ e $y_B = mx_B + q$. Sottraendo la prima uguaglianza dalla seconda, il numero $q$ si elimina e resta
$$
y_B - y_A = mx_B - mx_A = m\,(x_B - x_A) .
$$
Poiché $x_B - x_A \neq 0$, si può dividere per $x_B - x_A$, e si ottiene la formula di $m$. In parole, il coefficiente angolare è lo spostamento verticale diviso per lo spostamento orizzontale. Da $A(-1, 4)$ a $B(3, -4)$ ci si sposta di $4$ verso destra e di $8$ verso il basso, quindi $m = \dfrac{-8}{4} = -2$.

::grafico{f="-2*x+2" xmin=-4 xmax=6 ymin=-5 ymax=6 uguale=1 punti="-1,4,pieno,A;3,-4,pieno,B" segmenti="-1,4,3,4;3,4,3,-4" etichette="0.8,4.4,4;3.2,0.2,8" legenda="y = -2x + 2" titolo="Da $A(-1, 4)$ a $B(3, -4)$ ci si sposta di $4$ verso destra e di $8$ verso il basso, quindi il coefficiente angolare è $m = \dfrac{-8}{4} = -2$"}

:::
::::

## Rette parallele e perpendicolari

:::teorema{#rette-parallele titolo="Rette parallele"}
Due rette $y = mx + q$ e $y = m'x + q'$ sono **parallele** quando hanno lo stesso coefficiente angolare, cioè quando $m = m'$. Se oltre a $m = m'$ vale anche $q = q'$, le due rette coincidono. Due rette verticali sono sempre parallele tra loro.

La seconda retta si ottiene dalla prima spostando ogni punto di $q' - q$ unità in verticale, e lo spostamento verticale non cambia l'inclinazione. Le rette $y = 2x + 1$ e $y = 2x - 3$ sono perciò parallele. La retta parallela a $y = 2x + 1$ che passa per $P(1, 5)$ ha coefficiente angolare $2$, quindi è $y - 5 = 2\,(x - 1)$, cioè $y = 2x + 3$.

::grafico{f="2*x+1;2*x-3" xmin=-4 xmax=5 ymin=-5 ymax=6 uguale=1 punti="0,1,pieno;0,-3,pieno" legenda="y = 2x + 1;y = 2x - 3" titolo="Le rette $y = 2x + 1$ e $y = 2x - 3$ hanno lo stesso coefficiente angolare $2$ e sono parallele; la seconda si ottiene dalla prima scendendo di $4$ unità"}

:::

::::teorema{#rette-perpendicolari titolo="Rette perpendicolari"}
Siano date due rette non verticali, con coefficienti angolari $m$ e $m'$ entrambi diversi da $0$. Le due rette sono **perpendicolari** quando
$$
m \cdot m' = -1 , \qquad \text{cioè} \qquad m' = -\frac{1}{m} .
$$
In parole, il coefficiente angolare della perpendicolare è l'opposto del reciproco di $m$. Le rette $y = 2x$ e $y = -\dfrac{1}{2}x$ sono perpendicolari, perché $2 \cdot \left( -\dfrac{1}{2} \right) = -1$. La perpendicolare a $y = 3x - 2$ che passa per $P(3, 1)$ ha coefficiente angolare $-\dfrac{1}{3}$, quindi è $y - 1 = -\dfrac{1}{3}\,(x - 3)$, cioè $y = -\dfrac{1}{3}x + 2$. Una retta orizzontale e una verticale sono perpendicolari, anche se per la verticale il coefficiente angolare non è definito.

:::dimostrazione
Si considerano rette che passano per l'origine; per le altre si ragiona sulle rette per l'origine con lo stesso coefficiente angolare, che sono parallele a esse. Sulla retta $y = 2x$, partendo da $O$, ci si sposta di $1$ verso destra e di $2$ verso l'alto e si arriva in $A(1, 2)$. Si fa ruotare questo percorso di un angolo retto attorno a $O$, in senso antiorario. Lo spostamento di $1$ verso destra diventa uno spostamento di $1$ verso l'alto, e lo spostamento di $2$ verso l'alto diventa uno spostamento di $2$ verso sinistra; perciò si arriva in $B(-2, 1)$. La retta $OB$ è la retta $OA$ ruotata di un angolo retto, quindi è perpendicolare a $OA$, e il suo coefficiente angolare è $\dfrac{1}{-2} = -\dfrac{1}{2}$.

In generale, sulla retta $y = mx$ il punto $(1, m)$ diventa con la rotazione il punto $(-m, 1)$. Il coefficiente angolare della retta ruotata è quindi $\dfrac{1}{-m} = -\dfrac{1}{m}$, e il prodotto dei due coefficienti è $m \cdot \left( -\dfrac{1}{m} \right) = -1$.

::grafico{f="2*x;-x/2" xmin=-3 xmax=3 ymin=-2 ymax=3 uguale=1 punti="1,2,pieno,A;-2,1,pieno,B" segmenti="0,0,1,0;1,0,1,2;0,0,0,1;0,1,-2,1" legenda="y = 2x;y = -\dfrac{1}{2}x" titolo="Il percorso da $O$ ad $A(1, 2)$, ruotato di un angolo retto, porta in $B(-2, 1)$; la retta $OB$ ha coefficiente angolare $-\dfrac{1}{2}$ ed è perpendicolare a $y = 2x$"}

:::
::::

:::attenzione
Per la perpendicolare il coefficiente angolare è l'opposto del *reciproco*, e l'opposto da solo dà un risultato sbagliato. Le rette $y = 2x$ e $y = -2x$ hanno coefficienti con prodotto $2 \cdot (-2) = -4$, diverso da $-1$, quindi *non* sono perpendicolari. Le due rette sono simmetriche rispetto all'asse $y$.
:::

## Intersezione di due rette e sistemi lineari

:::definizione{#sistema-lineare titolo="Sistema di due equazioni in due incognite"}
Un punto comune a due rette ha coordinate che soddisfano *entrambe* le equazioni. Per trovarlo si scrivono le due equazioni con una graffa, che indica che vanno soddisfatte insieme:
$$
\begin{cases}
x + y = 5 \\
2x - y = 1
\end{cases}
$$
Questa scrittura si chiama **sistema** di due equazioni in due incognite. Una **soluzione** del sistema è una coppia di numeri $(x, y)$ che soddisfa entrambe le equazioni. La coppia $(2, 3)$ è una soluzione, perché $2 + 3 = 5$ e $2 \cdot 2 - 3 = 1$. La coppia $(1, 4)$ soddisfa la prima equazione, perché $1 + 4 = 5$, ma non la seconda, perché $2 \cdot 1 - 4 = -2$; quindi non è una soluzione. Il sistema si dice **lineare** perché ogni equazione è di primo grado e rappresenta una retta.

::grafico{f="5-x;2*x-1" xmin=-2 xmax=6 ymin=-3 ymax=7 uguale=1 punti="2,3,pieno" segmenti="2,0,2,3;0,3,2,3" legenda="x + y = 5;2x - y = 1" titolo="Le rette $x + y = 5$ e $2x - y = 1$ si incontrano nel punto $(2, 3)$, che è la soluzione del sistema"}

:::

:::teorema{#metodo-di-sostituzione titolo="Metodo di sostituzione"}
Il metodo ha quattro passi.

1. Da una delle due equazioni si ricava un'incognita.
2. L'espressione trovata si sostituisce nell'altra equazione, che diventa un'equazione in una sola incognita.
3. Si risolve questa equazione, come nell'argomento sulle equazioni di primo grado.
4. Il valore trovato si sostituisce nell'espressione del primo passo, e si ottiene l'altra incognita.

Nel sistema formato da $x + y = 5$ e $2x - y = 1$ la prima equazione dà $y = 5 - x$. Sostituendo nella seconda si ottiene
$$
\begin{aligned}
2x - (5 - x) &= 1 \\[6pt]
3x - 5 &= 1 \\[6pt]
3x &= 6 \\[6pt]
x &= 2
\end{aligned}
$$
e quindi $y = 5 - 2 = 3$. Il metodo è corretto perché la prima equazione afferma che $y$ e $5 - x$ sono lo stesso numero, e quindi nella seconda equazione si può scrivere l'uno al posto dell'altro.
:::

:::teorema{#metodo-di-riduzione titolo="Metodo di riduzione"}
Si sommano, o si sottraggono, membro a membro le due equazioni, in modo che una delle incognite si elimini. Se serve, prima si moltiplicano una o entrambe le equazioni per numeri scelti in modo che quell'incognita abbia coefficienti opposti. Il metodo è corretto perché, sommando membri uguali a membri uguali, si ottengono risultati uguali.

Nel sistema
$$
\begin{cases}
2x + 3y = 8 \\
5x - y = 3
\end{cases}
$$
si moltiplica la seconda equazione per $3$ e si ottiene $15x - 3y = 9$. Ora $y$ ha coefficienti $3$ e $-3$, che sono opposti. Sommando membro a membro $2x + 3y = 8$ e $15x - 3y = 9$ si trova $17x = 17$, quindi $x = 1$. Sostituendo $x = 1$ nella seconda equazione si ha $5 - y = 3$, cioè $y = 2$. Il controllo nella prima equazione dà $2 \cdot 1 + 3 \cdot 2 = 8$.
:::

:::teorema{#sistemi-impossibili-indeterminati titolo="Sistemi determinati, impossibili e indeterminati"}
Due rette del piano possono incontrarsi in un punto, essere parallele e distinte, oppure coincidere. Il sistema formato dalle loro equazioni ha di conseguenza una soluzione, nessuna soluzione oppure infinite soluzioni.

- Il sistema è **determinato** quando le rette si incontrano in un solo punto, come accade per due rette con coefficienti angolari diversi. In questo caso c'è una sola soluzione, cioè il punto di intersezione.
- Il sistema è **impossibile** quando le rette sono parallele e distinte. Nel sistema formato da $y = 2x + 1$ e $2x - y = 3$ la seconda equazione equivale a $y = 2x - 3$, quindi le due rette hanno lo stesso coefficiente angolare $2$ e sono parallele. Sostituendo $y = 2x + 1$ nella seconda equazione si ottiene $2x - 2x - 1 = 3$, cioè $-1 = 3$, che è falso.
- Il sistema è **indeterminato** quando le rette coincidono. Nel sistema formato da $x + 2y = 4$ e $2x + 4y = 8$ la seconda equazione è la prima moltiplicata per $2$. Moltiplicando la prima per $2$ e sottraendo si ottiene $0 = 0$, che è vero per ogni coppia; ogni punto della retta $x + 2y = 4$, come $(0, 2)$ o $(4, 0)$, è una soluzione.
:::
