---
titolo: Potenze, funzioni ed equazioni esponenziali
sommario: Come si definiscono le potenze con esponente intero, razionale e reale, quali proprietà ha la funzione esponenziale e come si disegnano i suoi grafici trasformati, come si risolvono le equazioni e le disequazioni esponenziali e come si descrivono con gli esponenziali la crescita di un capitale, di una popolazione e il decadimento radioattivo.
---

## Potenze con esponente intero e razionale

:::definizione{#potenza-esponente-intero titolo="Potenza con esponente intero"}
Siano $a$ un numero reale e $n$ un numero naturale con $n \geq 1$. La **potenza** $a^n$ è il prodotto di $n$ fattori uguali ad $a$; il numero $a$ si chiama **base** e $n$ si chiama **esponente**. Per esempio $2^5 = 2 \cdot 2 \cdot 2 \cdot 2 \cdot 2 = 32$.

Per estendere la definizione all'esponente $0$ e agli esponenti negativi si sceglie la definizione che mantiene vera la regola del quoziente $\dfrac{a^m}{a^n} = a^{m - n}$. Il quoziente $\dfrac{a^3}{a^3}$ vale $1$, e la regola darebbe $a^{3 - 3} = a^0$; il quoziente $\dfrac{a^2}{a^5}$ vale $\dfrac{1}{a^3}$, e la regola darebbe $a^{-3}$. Perciò, per $a \neq 0$ e $n$ naturale, si pone
$$
a^0 = 1 ,
\qquad
a^{-n} = \frac{1}{a^n} .
$$
Per esempio $2^{-3} = \dfrac{1}{8}$ e $\left( \dfrac{2}{3} \right)^{-2} = \left( \dfrac{3}{2} \right)^2 = \dfrac{9}{4}$. Le scritture $0^0$ e $0^{-n}$ restano prive di significato, perché richiederebbero di dividere per $0$.
:::

:::teorema{#proprieta-potenze titolo="Proprietà delle potenze"}
Siano $a$ e $b$ numeri reali diversi da $0$ e siano $m$ e $n$ numeri interi. Valgono
$$
a^m \cdot a^n = a^{m + n} ,
\qquad
\frac{a^m}{a^n} = a^{m - n} ,
\qquad
\left( a^m \right)^n = a^{m n} ,
$$
$$
(a b)^n = a^n b^n ,
\qquad
\left( \frac{a}{b} \right)^n = \frac{a^n}{b^n} .
$$
Le proprietà permettono di scrivere numeri diversi come potenze della stessa base, e questo è il primo passo di molte equazioni esponenziali. Per esempio, poiché $4 = 2^2$ e $8 = 2^3$,
$$
\frac{2^5 \cdot 4^{-1}}{8^2} = \frac{2^5 \cdot 2^{-2}}{2^6} = 2^{5 - 2 - 6} = 2^{-3} = \frac{1}{8} .
$$
:::

:::attenzione
Le proprietà riguardano prodotti e quozienti di potenze. Per la somma di due potenze non esiste una regola analoga, e in generale $a^m + a^n \neq a^{m + n}$. Per esempio $2^3 + 2^2 = 8 + 4 = 12$, mentre $2^5 = 32$.

Allo stesso modo $-2^2$ e $(-2)^2$ sono numeri diversi. Nella prima scrittura l'esponente riguarda solo il $2$, quindi $-2^2 = -4$; nella seconda riguarda il numero $-2$, quindi $(-2)^2 = 4$.
:::

:::definizione{#potenza-esponente-razionale titolo="Potenza con esponente razionale"}
Si vuole dare un significato a scritture come $8^{\frac{1}{3}}$ in modo che la proprietà $\left( a^m \right)^n = a^{mn}$ resti vera. Dovrebbe valere $\left( 8^{\frac{1}{3}} \right)^3 = 8^1 = 8$, quindi $8^{\frac{1}{3}}$ è il numero positivo che elevato al cubo dà $8$, cioè $\sqrt[3]{8} = 2$.

Siano $a > 0$, $m$ un numero intero e $n$ un numero naturale con $n \geq 2$. Si pone
$$
a^{\frac{m}{n}} = \sqrt[n]{a^m} = \left( \sqrt[n]{a} \right)^m .
$$
Per esempio
$$
8^{\frac{2}{3}} = \left( \sqrt[3]{8} \right)^2 = 4 ,
\qquad
16^{-\frac{3}{4}} = \frac{1}{\left( \sqrt[4]{16} \right)^3} = \frac{1}{8} .
$$
Il valore della potenza dipende solo dal numero razionale, e non dalla frazione scelta per scriverlo. Per esempio $4^{\frac{2}{4}} = \sqrt[4]{16} = 2$ e $4^{\frac{1}{2}} = \sqrt{4} = 2$. Con base positiva le proprietà delle potenze valgono anche per gli esponenti razionali.
:::

:::attenzione
La base delle potenze con esponente razionale è positiva. Se si accettasse una base negativa, la stessa potenza potrebbe avere due valori diversi. Con la scrittura $\dfrac{1}{3}$ si otterrebbe $(-8)^{\frac{1}{3}} = \sqrt[3]{-8} = -2$, mentre con la scrittura equivalente $\dfrac{2}{6}$ si otterrebbe $(-8)^{\frac{2}{6}} = \sqrt[6]{64} = 2$.
:::

:::esempio{titolo="Radicali scritti come potenze"}
Scrivendo i radicali come potenze con esponente razionale, i prodotti di radicali con indici diversi si calcolano con le proprietà delle potenze. Per esempio
$$
\sqrt{2} \cdot \sqrt[3]{2} = 2^{\frac{1}{2}} \cdot 2^{\frac{1}{3}} = 2^{\frac{1}{2} + \frac{1}{3}} = 2^{\frac{5}{6}} = \sqrt[6]{32} .
$$
Allo stesso modo $\left( \sqrt[3]{9} \right)^{\frac{3}{2}} = \left( 9^{\frac{1}{3}} \right)^{\frac{3}{2}} = 9^{\frac{1}{2}} = 3$.
:::

## Potenze con esponente reale

:::definizione{#potenza-esponente-reale titolo="Potenza con esponente reale"}
Il numero $\sqrt{2}$ è irrazionale, quindi la scrittura $2^{\sqrt{2}}$ non rientra nelle definizioni precedenti. L'idea è approssimare $\sqrt{2}$ con numeri razionali, per difetto e per eccesso, e calcolare le potenze di $2$ con questi esponenti.

| esponente per difetto | potenza | esponente per eccesso | potenza |
| --- | --- | --- | --- |
| $1{,}4$ | $2^{1{,}4} \approx 2{,}639$ | $1{,}5$ | $2^{1{,}5} \approx 2{,}828$ |
| $1{,}41$ | $2^{1{,}41} \approx 2{,}657$ | $1{,}42$ | $2^{1{,}42} \approx 2{,}676$ |
| $1{,}414$ | $2^{1{,}414} \approx 2{,}6647$ | $1{,}415$ | $2^{1{,}415} \approx 2{,}6666$ |

Le potenze della prima colonna crescono, quelle della seconda decrescono, e la distanza fra le due colonne diventa sempre più piccola. Esiste un solo numero compreso fra tutte le potenze della prima colonna e tutte quelle della seconda, e questo numero si chiama $2^{\sqrt{2}} \approx 2{,}665$.

In generale, siano $a > 1$ e $x$ un numero irrazionale. La potenza $a^x$ è l'unico numero reale maggiore di tutte le potenze $a^r$ con $r$ razionale minore di $x$ e minore di tutte le potenze $a^s$ con $s$ razionale maggiore di $x$. Per $0 < a < 1$ le due disuguaglianze si scambiano, e per $a = 1$ si pone $1^x = 1$.
:::

:::teorema{#proprieta-potenze-reali titolo="Proprietà delle potenze con esponente reale"}
Siano $a > 0$, $b > 0$ e $u$, $v$ numeri reali. Valgono
$$
a^u \cdot a^v = a^{u + v} ,
\quad
\frac{a^u}{a^v} = a^{u - v} ,
\quad
\left( a^u \right)^v = a^{u v} ,
\quad
(a b)^u = a^u b^u ,
\quad
a^u > 0 .
$$
Le proprietà sono le stesse degli esponenti interi e razionali, e per questo i calcoli con esponenti irrazionali si svolgono allo stesso modo. Per esempio
$$
\left( 3^{\sqrt{2}} \right)^{\sqrt{2}} = 3^{\sqrt{2} \cdot \sqrt{2}} = 3^2 = 9 ,
\qquad
5^{1 + \sqrt{3}} \cdot 5^{1 - \sqrt{3}} = 5^{2} = 25 .
$$
Le proprietà si ottengono da quelle degli esponenti razionali con le approssimazioni della definizione; la dimostrazione si omette.
:::

::::teorema{#confronto-potenze titolo="Confronto tra potenze con la stessa base"}
Siano $u$ e $v$ numeri reali con $u < v$.
- Se $a > 1$, allora $a^u < a^v$.
- Se $0 < a < 1$, allora $a^u > a^v$.

Il teorema permette di confrontare due potenze con la stessa base confrontando gli esponenti. Poiché $\sqrt{5} \approx 2{,}236 < 2{,}3$ e la base $3$ è maggiore di $1$, vale $3^{\sqrt{5}} < 3^{2{,}3}$. Poiché $\dfrac{1}{3} < \dfrac{1}{2}$ e la base $0{,}5$ è compresa fra $0$ e $1$, vale invece $0{,}5^{\frac{1}{3}} > 0{,}5^{\frac{1}{2}}$.

:::dimostrazione
Si dimostra il teorema per esponenti razionali; il caso reale segue dalla definizione con le approssimazioni. L'idea è mostrare che una potenza di base maggiore di $1$ con esponente positivo è maggiore di $1$, e poi scrivere $a^v$ come $a^u$ moltiplicato per una potenza di questo tipo.

Siano $a > 1$ e $r = \dfrac{m}{n}$ razionale positivo, con $m$ e $n$ naturali. Il numero $a^m$ è il prodotto di $m$ fattori maggiori di $1$, quindi $a^m > 1$. Se fosse $\sqrt[n]{a^m} \leq 1$, elevando alla $n$ si otterrebbe $a^m \leq 1$, che è falso. Perciò $a^r = \sqrt[n]{a^m} > 1$.

Siano ora $u < v$. Il numero $v - u$ è positivo, quindi $a^{v - u} > 1$. Moltiplicando entrambi i membri per il numero positivo $a^u$ si ottiene
$$
a^v = a^u \cdot a^{v - u} > a^u \cdot 1 = a^u .
$$
Se $0 < a < 1$, la base $\dfrac{1}{a}$ è maggiore di $1$ e vale $a^x = \left( \dfrac{1}{a} \right)^{-x}$. Da $u < v$ segue $-u > -v$, quindi per il primo caso $\left( \dfrac{1}{a} \right)^{-u} > \left( \dfrac{1}{a} \right)^{-v}$, cioè $a^u > a^v$.
:::
::::

## La funzione esponenziale

:::definizione{#funzione-esponenziale titolo="Funzione esponenziale"}
Sia $a$ un numero reale con $a > 0$ e $a \neq 1$. La **funzione esponenziale** di base $a$ è la funzione
$$
f(x) = a^x ,
$$
che associa a ogni numero reale $x$ la potenza di base $a$ ed esponente $x$. La base $1$ si esclude perché $1^x = 1$ per ogni $x$, e la funzione sarebbe costante. Per $a = 2$ alcuni valori sono
$$
2^{-2} = \frac{1}{4} ,
\quad
2^{-1} = \frac{1}{2} ,
\quad
2^{0} = 1 ,
\quad
2^{1} = 2 ,
\quad
2^{2} = 4 ,
\quad
2^{3} = 8 .
$$
Ogni volta che $x$ aumenta di $1$, il valore della funzione si moltiplica per $2$. Questa proprietà distingue l'esponenziale dalla funzione lineare, nella quale a ogni aumento di $1$ della variabile corrisponde l'aggiunta di una quantità fissa.
:::

:::teorema{#proprieta-funzione-esponenziale titolo="Proprietà della funzione esponenziale"}
Sia $f(x) = a^x$ con $a > 0$ e $a \neq 1$.
- Il dominio è $\mathbb{R}$ e l'immagine è $(0, +\infty)$; in particolare $a^x > 0$ per ogni $x$.
- Il grafico passa per i punti $(0, 1)$ e $(1, a)$.
- Se $a > 1$ la funzione è strettamente crescente; se $0 < a < 1$ è strettamente decrescente.
- L'asse $x$, cioè la retta $y = 0$, è un **asintoto orizzontale**, cioè il grafico si avvicina sempre di più a questa retta senza toccarla, verso sinistra se $a > 1$ e verso destra se $0 < a < 1$.

Per esempio $2^{-10} = \dfrac{1}{1024} \approx 0{,}001$, quindi per $x = -10$ il grafico di $2^x$ dista circa un millesimo dall'asse $x$. La monotonia segue dal teorema sul confronto tra potenze con la stessa base. Il fatto che ogni numero positivo sia un valore della funzione si accetta senza dimostrazione, e porta alla definizione di logaritmo.

::grafico{f="2^x;0.5^x" punti="0,1,pieno;1,2,pieno;-1,2,pieno" xmin=-4 xmax=4 ymin=-1 ymax=8 legenda="y = 2^x;y = \left(\frac{1}{2}\right)^x" titolo="Il grafico di $2^x$ è crescente e quello di $\left(\dfrac{1}{2}\right)^x$ è decrescente; entrambi passano per $(0, 1)$ e hanno come asintoto l'asse $x$"}

:::

:::osservazione{#basi-reciproche titolo="Basi reciproche"}
Per le proprietà delle potenze vale $\left( \dfrac{1}{a} \right)^x = a^{-x}$. Il valore di $\left( \dfrac{1}{2} \right)^x$ in un punto $x$ è quindi uguale al valore di $2^x$ nel punto opposto $-x$; per esempio $\left( \dfrac{1}{2} \right)^{3} = 2^{-3} = \dfrac{1}{8}$. Perciò i grafici di $a^x$ e di $\left( \dfrac{1}{a} \right)^x$ sono simmetrici rispetto all'asse $y$, come si vede nella figura precedente con i punti $(1, 2)$ e $(-1, 2)$.
:::

:::osservazione{#confronto-basi titolo="Confronto fra basi diverse"}
Siano $1 < a < b$. Per $x > 0$ la potenza con la base maggiore è maggiore, cioè $a^x < b^x$; per $x < 0$ vale la disuguaglianza contraria. Per esempio $2^2 = 4 < 9 = 3^2$, mentre $2^{-1} = \dfrac{1}{2} > \dfrac{1}{3} = 3^{-1}$. Quindi, a destra dell'asse $y$, il grafico di $3^x$ sta sopra quello di $2^x$ e cresce più rapidamente; a sinistra sta sotto e si avvicina più rapidamente all'asse $x$.

::grafico{f="2^x;3^x" punti="0,1,pieno;2,4,pieno;2,9,pieno" segmenti="2,0,2,9" xmin=-4 xmax=3 ymin=-1 ymax=10 legenda="y = 2^x;y = 3^x" titolo="Per $x > 0$ il grafico di $3^x$ sta sopra quello di $2^x$, per $x < 0$ sta sotto; in $x = 2$ i valori sono $4$ e $9$"}

:::

::::teorema{#iniettivita-esponenziale titolo="Iniettività della funzione esponenziale"}
Siano $a > 0$ e $a \neq 1$. Per ogni coppia di numeri reali $u$ e $v$ vale
$$
a^u = a^v \iff u = v .
$$
In altre parole, due potenze con la stessa base sono uguali soltanto quando hanno lo stesso esponente. Su questo teorema si basa la risoluzione delle equazioni esponenziali. Per esempio da $2^x = 32 = 2^5$ segue $x = 5$.

:::dimostrazione
Se $u = v$, le due potenze sono la stessa potenza e quindi sono uguali. Viceversa, siano $u \neq v$, per esempio $u < v$. Per il teorema sul confronto tra potenze con la stessa base, se $a > 1$ vale $a^u < a^v$ e se $0 < a < 1$ vale $a^u > a^v$. In entrambi i casi $a^u \neq a^v$. Perciò l'uguaglianza $a^u = a^v$ implica $u = v$.
:::
::::

:::osservazione{#esponenziale-e-potenza titolo="Esponenziale e potenza"}
Nelle funzioni $2^x$ e $x^2$ i numeri $2$ e $x$ si scambiano il ruolo di base e di esponente. Per $x$ grande le due funzioni crescono in modo molto diverso. Le due funzioni sono uguali per $x = 2$ e per $x = 4$, perché $2^2 = 2^2$ e $2^4 = 16 = 4^2$. Per $x = 3$ si ha $2^3 = 8 < 9 = 3^2$, mentre per $x = 10$ si ha $2^{10} = 1024$ contro $10^2 = 100$. Per ogni $x > 4$ la funzione esponenziale supera la potenza, e la differenza aumenta sempre di più; il confronto preciso si fa con i limiti, nel programma del quinto anno.
:::

## Il numero e

:::definizione{#numero-e titolo="Il numero e"}
Un capitale di $1$ euro viene depositato per un anno all'interesse annuo del $100\%$. Se l'interesse si paga una volta, alla fine dell'anno il capitale vale $1 + 1 = 2$. Se l'anno si divide in $n$ periodi e in ognuno si paga l'interesse $\dfrac{1}{n}$ sul capitale già maturato, alla fine dell'anno il capitale vale
$$
\left( 1 + \frac{1}{n} \right)^n .
$$
Per $n = 2$ si ottiene $1{,}5^2 = 2{,}25$, per $n = 12$ circa $2{,}613$, per $n = 365$ circa $2{,}7146$ e per $n = 10\,000$ circa $2{,}7181$. Quando $n$ aumenta, questi numeri crescono e si avvicinano a un numero irrazionale, che si indica con la lettera $e$:
$$
e = 2{,}718281828\ldots
$$
Il numero $e$ si chiama **numero di Nepero**. La scrittura precisa di "si avvicinano" è un limite, e si vedrà nell'argomento sui limiti del quinto anno.

::grafico{f="2.718281828" punti="1,2,pieno;2,2.25,pieno;3,2.370,pieno;4,2.441,pieno;5,2.488,pieno;6,2.522,pieno;7,2.546,pieno;8,2.566,pieno;9,2.581,pieno;10,2.594,pieno" xmin=0 xmax=11 ymin=0 ymax=3 nomi="n,y" legenda="y = e" titolo="I valori di $\left(1 + \dfrac{1}{n}\right)^n$ per $n$ da $1$ a $10$ crescono e restano sotto la retta $y = e$"}

:::

:::definizione{#esponenziale-naturale titolo="Funzione esponenziale naturale"}
La funzione esponenziale di base $e$,
$$
f(x) = e^x ,
$$
si chiama **esponenziale naturale** e si indica anche con $\exp x$. Poiché $2 < e < 3$, la funzione è crescente e il suo grafico sta fra quelli di $2^x$ e di $3^x$. Fra tutte le funzioni esponenziali, $e^x$ è l'unica per la quale la retta tangente al grafico nel punto $(0, 1)$ ha coefficiente angolare $1$, cioè è la retta $y = x + 1$. Per questa proprietà la base $e$ si usa nelle scienze e nell'analisi; nell'argomento sulle derivate del quinto anno si dimostra che $e^x$ coincide con la sua derivata.

Con l'esponenziale naturale si calcola come con ogni altra base. Per esempio
$$
\frac{e^{3x}}{e^{x - 1}} = e^{3x - (x - 1)} = e^{2x + 1} ,
\qquad
e^2 \approx 7{,}389 .
$$

::grafico{f="exp(x);x+1" punti="0,1,pieno" xmin=-4 xmax=3 ymin=-2 ymax=8 legenda="y = e^x;y = x + 1" titolo="La retta $y = x + 1$ è tangente al grafico di $e^x$ nel punto $(0, 1)$, e il grafico sta sopra la retta"}

:::

## Trasformazioni del grafico

:::teorema{#traslazioni-grafico titolo="Traslazioni del grafico esponenziale"}
Siano $a > 0$, $a \neq 1$ e $h$, $k$ numeri reali. Il grafico di
$$
y = a^{x - h} + k
$$
si ottiene traslando il grafico di $y = a^x$ di $h$ unità in orizzontale e di $k$ unità in verticale. Perciò l'asintoto orizzontale diventa la retta $y = k$, l'immagine diventa $(k, +\infty)$ e il punto $(0, 1)$ va nel punto $(h, 1 + k)$. La monotonia resta quella di $a^x$.

Per esempio $y = 2^{x + 1} - 4$ si ottiene da $y = 2^x$ con una traslazione di $1$ unità verso sinistra e di $4$ unità verso il basso. L'asintoto è $y = -4$ e l'immagine è $(-4, +\infty)$. Il grafico interseca l'asse $y$ nel punto $(0, 2 - 4) = (0, -2)$; interseca l'asse $x$ dove $2^{x + 1} = 4 = 2^2$, cioè in $x = 1$.

::grafico{f="2^x;2^(x+1)-4" punti="0,-2,pieno;1,0,pieno;-1,-3,pieno" asintoti="y=-4" xmin=-5 xmax=3 ymin=-5 ymax=8 legenda="y = 2^x;y = 2^{x+1} - 4" titolo="Il grafico di $2^{x+1} - 4$ è il grafico di $2^x$ traslato di $1$ verso sinistra e di $4$ verso il basso, con asintoto $y = -4$"}

:::

:::teorema{#simmetrie-grafico titolo="Simmetrie e valori assoluti"}
Siano $a > 0$, $a \neq 1$ e $k > 0$. A partire dal grafico di $y = a^x$:
- il grafico di $y = -a^x$ è il simmetrico rispetto all'asse $x$, con immagine $(-\infty, 0)$;
- il grafico di $y = a^{-x}$ è il simmetrico rispetto all'asse $y$;
- il grafico di $y = a^{|x|}$ coincide con quello di $a^x$ per $x \geq 0$, e per $x < 0$ è il simmetrico di questa parte rispetto all'asse $y$;
- il grafico di $y = \left| a^x - k \right|$ si ottiene dal grafico di $a^x - k$ ribaltando sopra l'asse $x$ la parte che sta sotto.

Queste regole permettono di disegnare molti grafici senza tabelle di valori. Per esempio $y = 4 - 2^x$ si ottiene ribaltando $2^x$ rispetto all'asse $x$ e traslando di $4$ verso l'alto. È decrescente, ha immagine $(-\infty, 4)$, asintoto $y = 4$ e interseca l'asse $x$ in $x = 2$, perché $2^2 = 4$.

::grafico{f="2^abs(x)" punti="0,1,pieno;2,4,pieno;-2,4,pieno" xmin=-4 xmax=4 ymin=-1 ymax=9 legenda="y = 2^{|x|}" titolo="Il grafico di $2^{|x|}$ è simmetrico rispetto all'asse $y$ e ha il minimo $1$ in $x = 0$"}

:::

:::esempio{titolo="Il grafico di y = |2^x - 4|"}
Il grafico di $y = 2^x - 4$ è il grafico di $2^x$ traslato di $4$ verso il basso. Ha asintoto $y = -4$, interseca l'asse $y$ in $(0, -3)$ e l'asse $x$ in $(2, 0)$, ed è negativo per $x < 2$. Il valore assoluto lascia invariata la parte con $x \geq 2$ e ribalta sopra l'asse $x$ la parte con $x < 2$. Perciò il grafico di $\left| 2^x - 4 \right|$ passa per $(0, 3)$, tocca l'asse $x$ in $(2, 0)$ e, verso sinistra, si avvicina alla retta $y = 4$, che è il nuovo asintoto.

::grafico{f="abs(2^x-4)" punti="0,3,pieno;2,0,pieno" asintoti="y=4" xmin=-5 xmax=4 ymin=-1 ymax=9 legenda="y = |2^x - 4|" titolo="Il grafico di $|2^x - 4|$ tocca l'asse $x$ in $x = 2$ e a sinistra ha come asintoto la retta $y = 4$"}

:::

## Equazioni esponenziali con la stessa base

:::definizione{#equazione-esponenziale titolo="Equazione esponenziale"}
Un'**equazione esponenziale** è un'equazione in cui l'incognita compare nell'esponente di una o più potenze. Sono esponenziali, per esempio, le equazioni
$$
3^x = 81 ,
\qquad
4^x - 2^{x + 1} = 8 ,
\qquad
5^x = 2 .
$$
L'equazione più semplice è l'**equazione elementare** $a^x = b$, con $a > 0$ e $a \neq 1$. Poiché l'immagine della funzione esponenziale è $(0, +\infty)$, l'equazione è impossibile se $b \leq 0$ e ha una sola soluzione se $b > 0$. Per esempio $2^x = -4$ non ha soluzioni, perché $2^x > 0$ per ogni $x$; l'equazione $2^x = \dfrac{1}{8}$ ha invece la soluzione $x = -3$, perché $\dfrac{1}{8} = 2^{-3}$.
:::

:::teorema{#equazioni-stessa-base titolo="Equazioni con la stessa base"}
Siano $a > 0$, $a \neq 1$ e siano $f(x)$ e $g(x)$ due espressioni nell'incognita $x$. Per ogni $x$ in cui $f(x)$ e $g(x)$ esistono vale
$$
a^{f(x)} = a^{g(x)} \iff f(x) = g(x) .
$$
L'equivalenza segue dal teorema di iniettività della funzione esponenziale. Per applicarla si scrivono i due membri come potenze della stessa base, e poi si uguagliano gli esponenti. Per esempio, poiché $9 = 3^2$ e $27 = 3^3$,
$$
9^{x + 1} = 27^{x}
\iff
3^{2x + 2} = 3^{3x}
\iff
2x + 2 = 3x
\iff
x = 2 .
$$
La verifica dà $9^3 = 729 = 27^2$.
:::

:::esempio{titolo="Esponenti con radici e frazioni"}
Si risolve $\sqrt{2^{x}} = 4^{x - 3}$. Il primo membro è $\left( 2^x \right)^{\frac{1}{2}} = 2^{\frac{x}{2}}$ e il secondo è $\left( 2^2 \right)^{x - 3} = 2^{2x - 6}$. Uguagliando gli esponenti si ottiene
$$
\frac{x}{2} = 2x - 6
\iff
x = 4x - 12
\iff
x = 4 .
$$
Per $x = 4$ entrambi i membri valgono $4$.

Quando l'esponente contiene una frazione, si aggiunge la condizione di esistenza dell'esponente. Per esempio $2^{\frac{6}{x}} = 8$ ha senso per $x \neq 0$ ed equivale a $\dfrac{6}{x} = 3$, quindi $x = 2$, che soddisfa la condizione.
:::

:::teorema{#raccoglimento titolo="Equazioni con raccoglimento a fattore comune"}
Quando compaiono più potenze della stessa base con esponenti che differiscono per un numero, come $a^{x + 1}$, $a^{x}$ e $a^{x - 1}$, si scrive ognuna come prodotto $a^{x + c} = a^c \cdot a^x$ e si raccoglie $a^x$. L'equazione si riduce così a un'equazione elementare. Per esempio
$$
3^{x + 1} + 3^{x - 1} = 30
\iff
3^x \left( 3 + \frac{1}{3} \right) = 30
\iff
3^x \cdot \frac{10}{3} = 30
\iff
3^x = 9 ,
$$
quindi $x = 2$. La verifica dà $3^3 + 3^1 = 27 + 3 = 30$.
:::

:::attenzione
Una somma di potenze con la stessa base non si riduce a una sola potenza sommando gli esponenti. Per esempio $2^x + 2^{x + 1} \neq 2^{2x + 1}$, come si vede con $x = 1$, dove il primo membro vale $2 + 4 = 6$ e il secondo vale $2^3 = 8$. La scrittura corretta si ottiene con il raccoglimento, ed è $2^x + 2^{x + 1} = 2^x (1 + 2) = 3 \cdot 2^x$.
:::

:::osservazione{#stesso-esponente titolo="Basi diverse con lo stesso esponente"}
Siano $a$ e $b$ positivi e diversi fra loro. L'equazione $a^{f(x)} = b^{f(x)}$ si risolve dividendo entrambi i membri per $b^{f(x)}$, che è positivo, e diventa $\left( \dfrac{a}{b} \right)^{f(x)} = 1 = \left( \dfrac{a}{b} \right)^0$. La base $\dfrac{a}{b}$ è diversa da $1$, quindi l'equazione equivale a $f(x) = 0$. Per esempio $2^{x - 3} = 5^{x - 3}$ ha la sola soluzione $x = 3$, nella quale entrambi i membri valgono $1$.
:::

## Equazioni risolte con una sostituzione

:::teorema{#sostituzione-esponenziale titolo="Sostituzione t = a^x"}
Se in un'equazione compaiono soltanto le potenze $a^{2x}$, $a^{x}$, potenze del tipo $a^{x + c}$ e numeri, si pone
$$
t = a^x , \qquad t > 0 ,
$$
e si scrive $a^{2x} = \left( a^x \right)^2 = t^2$. Si ottiene un'equazione algebrica nell'incognita $t$. Di questa equazione si accettano solo le soluzioni positive, perché $a^x > 0$ per ogni $x$, e per ognuna si risolve l'equazione elementare $a^x = t$. Per esempio
$$
4^x - 6 \cdot 2^x + 8 = 0
\iff
t^2 - 6t + 8 = 0
\iff
(t - 2)(t - 4) = 0 .
$$
Da $2^x = 2$ segue $x = 1$, da $2^x = 4$ segue $x = 2$. Le soluzioni sono quindi $x = 1$ e $x = 2$.
:::

:::esempio{titolo="Una soluzione in t da scartare"}
Si risolve $9^x - 2 \cdot 3^{x + 1} - 27 = 0$. Poiché $9^x = \left( 3^x \right)^2$ e $3^{x + 1} = 3 \cdot 3^x$, con $t = 3^x$ l'equazione diventa
$$
t^2 - 6t - 27 = 0
\iff
(t - 9)(t + 3) = 0 .
$$
La soluzione $t = -3$ si scarta, perché $3^x$ è positivo. Resta $3^x = 9$, quindi l'equazione ha la sola soluzione $x = 2$.
:::

:::esempio{titolo="Esponenti opposti"}
Si risolve $2^x + 2^{1 - x} = 3$. Il secondo addendo è $2^{1 - x} = \dfrac{2}{2^x}$, quindi con $t = 2^x$ si ottiene
$$
t + \frac{2}{t} = 3
\iff
t^2 - 3t + 2 = 0
\iff
(t - 1)(t - 2) = 0 .
$$
La moltiplicazione per $t$ è lecita perché $t > 0$. Entrambe le soluzioni $t = 1$ e $t = 2$ sono positive, quindi da $2^x = 1$ e $2^x = 2$ si ottengono le soluzioni $x = 0$ e $x = 1$.
:::

:::osservazione{#equazioni-omogenee titolo="Equazioni omogenee"}
Nell'equazione $4^x + 6^x = 2 \cdot 9^x$ compaiono le basi $4 = 2^2$, $6 = 2 \cdot 3$ e $9 = 3^2$. Dividendo entrambi i membri per $9^x$, che è positivo, si ottiene
$$
\left( \frac{4}{9} \right)^x + \left( \frac{6}{9} \right)^x = 2
\iff
\left( \frac{2}{3} \right)^{2x} + \left( \frac{2}{3} \right)^{x} = 2 .
$$
Con $t = \left( \dfrac{2}{3} \right)^x$ l'equazione diventa $t^2 + t - 2 = 0$, cioè $(t - 1)(t + 2) = 0$. La soluzione $t = -2$ si scarta, e da $\left( \dfrac{2}{3} \right)^x = 1$ segue $x = 0$.
:::

## Equazioni con basi diverse e metodo grafico

:::teorema{#equazioni-con-logaritmi titolo="Equazione a^x = b e logaritmo"}
Siano $a > 0$, $a \neq 1$ e $b > 0$. L'equazione $a^x = b$ ha una sola soluzione, perché $b$ appartiene all'immagine della funzione esponenziale e questa funzione è iniettiva. La soluzione si chiama **logaritmo** in base $a$ di $b$ e si scrive
$$
a^x = b \iff x = \log_a b .
$$
Quando $b$ è una potenza nota di $a$ il logaritmo è un numero intero o razionale; altrimenti si lascia indicato oppure si approssima. Per esempio $2^x = 7$ ha la soluzione $x = \log_2 7$, che è compresa fra $2$ e $3$ perché $2^2 = 4 < 7 < 8 = 2^3$; vale $\log_2 7 \approx 2{,}807$. Le proprietà dei logaritmi e il loro uso nelle equazioni con basi diverse si studiano nell'argomento sui logaritmi.
:::

:::esempio{titolo="Due basi diverse"}
Si risolve $3^{x - 1} = 5$. Per la definizione di logaritmo $x - 1 = \log_3 5$, quindi $x = 1 + \log_3 5$.

Nell'equazione $2^x = 3^{x - 1}$ le basi $2$ e $3$ non si scrivono come potenze di una base comune. Si applica a entrambi i membri il logaritmo naturale $\ln$, cioè il logaritmo in base $e$, e si usa la proprietà $\ln a^x = x \ln a$, che si dimostra nell'argomento sui logaritmi:
$$
x \ln 2 = (x - 1) \ln 3
\iff
x \left( \ln 3 - \ln 2 \right) = \ln 3
\iff
x = \frac{\ln 3}{\ln 3 - \ln 2} .
$$
Il valore approssimato è $x \approx 2{,}71$.
:::

:::teorema{#metodo-grafico titolo="Risoluzione grafica"}
Le soluzioni dell'equazione $f(x) = g(x)$ sono le ascisse dei punti in cui si intersecano i grafici di $y = f(x)$ e di $y = g(x)$. Il metodo grafico si usa quando l'equazione contiene sia un esponenziale sia un polinomio, e non si risolve con i metodi algebrici. Dal grafico si legge quante sono le soluzioni e fra quali numeri si trovano.

Per esempio, nell'equazione $2^x = 3 - x$ il primo membro è una funzione crescente e il secondo è una funzione decrescente, quindi i due grafici si intersecano al massimo in un punto. Per $x = 1$ si ha $2^1 = 2 = 3 - 1$, perciò l'equazione ha la sola soluzione $x = 1$.

::grafico{f="2^x;3-x" punti="1,2,pieno" segmenti="1,0,1,2" xmin=-3 xmax=4 ymin=-2 ymax=7 legenda="y = 2^x;y = 3 - x" titolo="Il grafico crescente di $2^x$ e la retta decrescente $y = 3 - x$ si intersecano in un solo punto, di ascissa $x = 1$"}

:::

:::esempio{titolo="Una soluzione esatta e una approssimata"}
Si cercano le soluzioni di $2^x = x + 2$. Per $x = 2$ entrambi i membri valgono $4$, quindi $x = 2$ è una soluzione. La figura mostra un secondo punto di intersezione con ascissa negativa. Per $x = -2$ si ha $2^{-2} = \dfrac{1}{4} > 0 = -2 + 2$, mentre per $x = -1$ si ha $2^{-1} = \dfrac{1}{2} < 1 = -1 + 2$. Fra $-2$ e $-1$ la differenza $2^x - (x + 2)$ cambia segno, quindi la seconda soluzione è compresa fra $-2$ e $-1$. Con altri valori si trova $x \approx -1{,}69$.

::grafico{f="2^x;x+2" punti="2,4,pieno;-1.69,0.31,pieno" xmin=-4 xmax=4 ymin=-2 ymax=8 legenda="y = 2^x;y = x + 2" titolo="La retta $y = x + 2$ interseca il grafico di $2^x$ in $x = 2$ e in un punto con ascissa compresa fra $-2$ e $-1$"}

:::

## Disequazioni esponenziali

::::teorema{#disequazioni-esponenziali titolo="Disequazioni con la stessa base"}
Siano $f(x)$ e $g(x)$ due espressioni nell'incognita $x$, considerate dove esistono.
- Se $a > 1$, allora $a^{f(x)} > a^{g(x)} \iff f(x) > g(x)$, quindi il verso della disuguaglianza si *conserva*.
- Se $0 < a < 1$, allora $a^{f(x)} > a^{g(x)} \iff f(x) < g(x)$, quindi il verso della disuguaglianza si *inverte*.

Le stesse equivalenze valgono con $\geq$ al posto di $>$. Per esempio $2^x > 4$ equivale a $2^x > 2^2$, cioè a $x > 2$; invece $\left( \dfrac{1}{3} \right)^{x - 1} \geq 9 = \left( \dfrac{1}{3} \right)^{-2}$ equivale a $x - 1 \leq -2$, cioè a $x \leq -1$.

::grafico{f="2^x;4" punti="2,4,vuoto" segmenti="2,0,2,4" xmin=-3 xmax=4 ymin=-1 ymax=9 legenda="y = 2^x;y = 4" titolo="Il grafico di $2^x$ sta sopra la retta $y = 4$ esattamente per $x > 2$"}

:::dimostrazione
Si dimostra il caso $a > 1$; il caso $0 < a < 1$ è analogo, con i versi scambiati. Se $f(x) > g(x)$, il teorema sul confronto tra potenze con la stessa base dà $a^{f(x)} > a^{g(x)}$. Viceversa, si suppone $a^{f(x)} > a^{g(x)}$. Se fosse $f(x) = g(x)$ le due potenze sarebbero uguali, e se fosse $f(x) < g(x)$ varrebbe $a^{f(x)} < a^{g(x)}$. Entrambi i casi sono in contraddizione con l'ipotesi, quindi $f(x) > g(x)$.
:::
::::

:::attenzione
Il verso si inverte solo quando la base è compresa fra $0$ e $1$, e il segno dell'esponente non ha alcun ruolo. Per esempio $2^{-x} > 8$ ha base $2 > 1$, quindi equivale a $-x > 3$, cioè $x < -3$; qui il verso cambia soltanto nell'ultimo passaggio, quando si moltiplicano entrambi i membri per $-1$. Infatti per $x = -4$ si ha $2^{4} = 16 > 8$.
:::

:::osservazione{#secondo-membro-negativo titolo="Secondo membro non positivo"}
Poiché $a^{f(x)} > 0$ dove l'esponente esiste, la disequazione $a^{f(x)} > b$ con $b \leq 0$ è verificata per ogni $x$ del dominio dell'esponente, e la disequazione $a^{f(x)} < b$ con $b \leq 0$ non ha soluzioni. Per esempio $5^x > -3$ vale per ogni $x$ reale, e $3^{\frac{1}{x}} \leq 0$ non ha soluzioni. Se $b > 0$ non è una potenza nota della base, si scrive $b = a^{\log_a b}$; per esempio $3^x > 5$ equivale a $x > \log_3 5$.
:::

:::teorema{#disequazioni-sostituzione titolo="Disequazioni con la sostituzione"}
Le disequazioni che contengono $a^{2x}$ e $a^x$ si risolvono con la sostituzione $t = a^x$, aggiungendo la condizione $t > 0$. Si risolve la disequazione in $t$, si intersecano le soluzioni con $t > 0$ e si torna all'incognita $x$ con il teorema sulle disequazioni con la stessa base. Per esempio, con $t = 2^x$,
$$
4^x - 3 \cdot 2^x - 4 < 0
\iff
t^2 - 3t - 4 < 0
\iff
(t - 4)(t + 1) < 0
\iff
-1 < t < 4 .
$$
Insieme alla condizione $t > 0$ si ottiene $0 < 2^x < 4$. La disuguaglianza $2^x > 0$ vale per ogni $x$, mentre $2^x < 4 = 2^2$ equivale a $x < 2$, perché la base è maggiore di $1$. La soluzione è quindi $x < 2$.
:::

:::esempio{titolo="Una disequazione fratta"}
Si risolve $\dfrac{2^x - 8}{3^x - 1} \leq 0$. Il denominatore si annulla per $x = 0$, che si esclude. Si studia il segno di numeratore e denominatore.
- Il numeratore è positivo per $2^x > 8 = 2^3$, cioè per $x > 3$, e si annulla in $x = 3$.
- Il denominatore è positivo per $3^x > 1 = 3^0$, cioè per $x > 0$.

Il quoziente è negativo dove numeratore e denominatore hanno segno opposto, cioè per $0 < x < 3$, e si annulla in $x = 3$. La soluzione è quindi $0 < x \leq 3$.
:::

## Modelli di crescita e decadimento

:::definizione{#modello-discreto titolo="Crescita e decadimento esponenziale"}
Una quantità ha una **crescita esponenziale** se a ogni intervallo di tempo della stessa durata viene moltiplicata per lo stesso fattore $q > 1$; ha un **decadimento esponenziale** se il fattore è $0 < q < 1$. Indicando con $N_0$ il valore iniziale, dopo $n$ intervalli il valore è
$$
N_n = N_0 \, q^n .
$$
Se la quantità aumenta del $p\%$ a ogni intervallo, il fattore è $q = 1 + \dfrac{p}{100}$; se diminuisce del $p\%$, il fattore è $q = 1 - \dfrac{p}{100}$. Per esempio una popolazione di $800$ individui che cresce del $5\%$ all'anno è descritta da $N_n = 800 \cdot 1{,}05^n$; dopo due anni conta $800 \cdot 1{,}1025 = 882$ individui. La percentuale si applica ogni anno al valore dell'anno precedente, quindi l'aumento del secondo anno, $42$ individui, è maggiore di quello del primo, $40$ individui.
:::

:::teorema{#interesse-composto titolo="Interesse composto"}
Un capitale $C$ è investito al tasso annuo $i$, scritto come numero decimale, e alla fine di ogni anno l'interesse si aggiunge al capitale. Dopo $n$ anni il **montante**, cioè il capitale con gli interessi, è
$$
M = C \, (1 + i)^n .
$$
Ogni anno il capitale si moltiplica per $1 + i$, quindi il montante è un modello di crescita esponenziale. Per esempio $2000$ euro al $3\%$ annuo danno dopo $2$ anni $M = 2000 \cdot 1{,}03^2 = 2121{,}80$ euro, e dopo $10$ anni circa $2687{,}83$ euro. Con l'**interesse semplice**, nel quale gli interessi si calcolano sempre sul capitale iniziale, il montante sarebbe $C \, (1 + n i)$, cioè $2120$ euro dopo $2$ anni e $2600$ euro dopo $10$ anni.
:::

:::definizione{#tempo-dimezzamento titolo="Tempo di dimezzamento"}
In un campione di una sostanza radioattiva il numero di nuclei diminuisce nel tempo. Il **tempo di dimezzamento** $T$ è il tempo dopo il quale il numero di nuclei si riduce alla metà. Dopo un tempo $t$ si sono succeduti $\dfrac{t}{T}$ dimezzamenti, quindi
$$
N(t) = N_0 \left( \frac{1}{2} \right)^{\frac{t}{T}} .
$$
Il rapporto $\dfrac{t}{T}$ è un numero puro, perché $t$ e $T$ si misurano nella stessa unità. Per esempio il carbonio-14 ha un tempo di dimezzamento di circa $5730$ anni. Dopo $11\,460$ anni, cioè dopo due tempi di dimezzamento, resta $\left( \dfrac{1}{2} \right)^2 = \dfrac{1}{4}$ dei nuclei iniziali.

::grafico{f="100*0.5^(x/5)" punti="0,100,pieno;5,50,pieno;10,25,pieno;15,12.5,pieno" segmenti="5,0,5,50;0,50,5,50;10,0,10,25;0,25,10,25" xmin=0 xmax=20 ymin=0 ymax=100 nomi="t,N" legenda="N = 100 \cdot \left(\frac{1}{2}\right)^{\frac{t}{5}}" titolo="Con $N_0 = 100$ e $T = 5$ il numero di nuclei si dimezza ogni $5$ unità di tempo: $100$, $50$, $25$, $12{,}5$"}

:::

:::definizione{#modello-continuo titolo="Modello continuo con base e"}
Nelle scienze la crescita e il decadimento si scrivono spesso con l'esponenziale naturale:
$$
N(t) = N_0 \, e^{k t} ,
$$
dove $N_0$ è il valore per $t = 0$ e $k$ è una costante. Il modello descrive una crescita se $k > 0$ e un decadimento se $k < 0$. In ogni unità di tempo la quantità si moltiplica per $e^{k}$, quindi il modello coincide con il modello $N_0 \, q^t$ con $q = e^{k}$. Il **tempo di raddoppio** è il tempo $T$ per cui $e^{kT} = 2$, cioè $T = \dfrac{\ln 2}{k}$, con il logaritmo naturale. Per esempio con $k = 0{,}02$ all'anno il tempo di raddoppio è $\dfrac{\ln 2}{0{,}02} \approx 34{,}7$ anni.
:::

:::esempio{titolo="Una colonia di batteri"}
Una colonia di batteri raddoppia ogni $20$ minuti e all'istante iniziale conta $500$ batteri. Dopo $t$ minuti i raddoppi sono stati $\dfrac{t}{20}$, quindi
$$
N(t) = 500 \cdot 2^{\frac{t}{20}} .
$$
Dopo due ore, cioè $120$ minuti, i raddoppi sono $6$ e i batteri sono $500 \cdot 2^6 = 32\,000$. Il tempo dopo il quale i batteri sono $4000$ si trova con l'equazione esponenziale $2^{\frac{t}{20}} = 8 = 2^3$, che dà $\dfrac{t}{20} = 3$, cioè $t = 60$ minuti.
:::
