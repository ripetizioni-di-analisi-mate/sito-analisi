---
titolo: Potenze e radici
sommario: Le potenze a esponente intero, razionale e reale con le loro proprietà, le radici n-esime con le condizioni di esistenza, la razionalizzazione e il confronto tra potenze e tra radici.
---

## Potenze a esponente naturale e intero

:::definizione{#potenze-a-esponente-intero titolo="Potenza a esponente naturale e intero"}
Per $a \in \mathbb{R}$ e $n$ naturale con $n \geq 1$, la **potenza** $a^n$ è il prodotto di $n$ fattori uguali ad $a$:
$$
a^n = \underbrace{a \cdot a \cdots a}_{n \ \text{fattori}} .
$$
La definizione si estende agli esponenti interi ponendo, per $a \neq 0$,
$$
a^0 = 1, \qquad a^{-n} = \frac{1}{a^n} .
$$
Queste posizioni sono le *uniche* che conservano le proprietà delle potenze: da $a^n \cdot a^0 = a^{n+0} = a^n$ segue $a^0 = 1$, e da $a^n \cdot a^{-n} = a^0 = 1$ segue $a^{-n} = \dfrac{1}{a^n}$. Per esempio $2^{-3} = \dfrac{1}{8}$ e $\left(\dfrac{2}{3}\right)^{-1} = \dfrac{3}{2}$.
:::

:::osservazione
Con base negativa il segno della potenza dipende dalla **parità dell'esponente**: $(-2)^4 = 16$ e $(-2)^3 = -8$. La scrittura $-2^4$ indica l'opposto di $2^4$, cioè $-16$, perché l'elevamento a potenza *precede* il cambio di segno.

::grafico{f="x^2;x^3" xmin=-2.6 xmax=2.6 ymin=-9 ymax=9 punti="-2,4,pieno;-2,-8,pieno" etichette="1,7,y = x³;-2.5,7.5,y = x²;-1.85,5,(−2)² = 4;-1.75,-8.3,(−2)³ = −8" titolo="Con base negativa $x^2$ è positiva e $x^3$ è negativa: il grafico di $y = x^2$ è simmetrico rispetto all'asse $y$, quello di $y = x^3$ rispetto all'origine"}

:::

:::osservazione
Con base $0$ e $n \geq 1$ vale $0^n = 0$, perché un prodotto che contiene un fattore nullo è nullo. Le scritture $0^{-n}$ e $0^0$ sono invece **prive di significato**. La prima darebbe $\dfrac{1}{0^n} = \dfrac{1}{0}$, e la divisione per zero non è definita. La seconda è esclusa perché la posizione $a^0 = 1$ si ricava da $a^n \cdot a^0 = a^n$ dividendo per $a^n$, e con $a = 0$ questa divisione è impossibile. Per questo motivo, in un'espressione letterale con esponenti negativi o nulli, la base è supposta diversa da zero: per esempio $x^{-2} = \dfrac{1}{x^2}$ vale per $x \neq 0$.
:::

:::attenzione
In generale $a^{-n}$ è **diverso** da $-a^n$. Per $a = 2$ e $n = 3$ si ha $2^{-3} = \dfrac{1}{8}$, che è positivo, mentre $-2^3 = -8$. L'esponente negativo indica il **reciproco**, quindi lascia invariato il segno di $a^n$; per esempio $(-2)^{-3} = \dfrac{1}{(-2)^3} = -\dfrac{1}{8}$ è negativo perché l'esponente $3$ è dispari.
:::

## Proprietà delle potenze

::::teorema{#proprieta-delle-potenze titolo="Proprietà delle potenze"}
Per $a, b > 0$ ed esponenti $m, n$ reali (con basi negative valgono per esponenti *interi*):

- prodotto di potenze con la stessa base: $a^m \cdot a^n = a^{m+n}$; per esempio $2^3 \cdot 2^4 = 2^7 = 128$;
- quoziente di potenze con la stessa base: $\dfrac{a^m}{a^n} = a^{m-n}$; per esempio $\dfrac{5^6}{5^4} = 5^2 = 25$;
- potenza di potenza: $(a^m)^n = a^{mn}$; per esempio $(3^2)^3 = 3^6 = 729$;
- prodotto di potenze con lo stesso esponente: $a^n \cdot b^n = (ab)^n$; per esempio $2^3 \cdot 5^3 = 10^3 = 1000$;
- quoziente di potenze con lo stesso esponente: $\dfrac{a^n}{b^n} = \left(\dfrac{a}{b}\right)^n$; per esempio $\dfrac{6^2}{3^2} = 2^2 = 4$.

Le proprietà trasformano prodotti e quozienti di potenze in una **potenza sola** e sono lo strumento con cui si semplificano le espressioni; negli esercizi si usano in *entrambi* i versi, anche per riscrivere una potenza in una forma più comoda, come $8^{10} = (2^3)^{10} = 2^{30}$.

:::dimostrazione
L'idea è contare i fattori, per esponenti naturali $m, n \geq 1$. Il prodotto $a^m \cdot a^n$ è formato da $m$ fattori uguali ad $a$ seguiti da altri $n$ fattori uguali ad $a$, quindi contiene $m + n$ fattori e vale $a^{m+n}$. La potenza $(a^m)^n$ è il prodotto di $n$ fattori uguali ad $a^m$, e ciascuno di essi contiene $m$ fattori uguali ad $a$, perciò i fattori sono in tutto $mn$ e $(a^m)^n = a^{mn}$.

Il prodotto $a^n \cdot b^n$ contiene $n$ fattori uguali ad $a$ e $n$ fattori uguali a $b$. Per le proprietà commutativa e associativa del prodotto i fattori si raggruppano in $n$ coppie $ab$, quindi $a^n b^n = (ab)^n$. Per il quoziente con $m > n$, la prima proprietà dà $a^m = a^{m-n} \cdot a^n$, e dividendo entrambi i membri per $a^n$ si ottiene $\dfrac{a^m}{a^n} = a^{m-n}$; il quoziente $\dfrac{a^n}{b^n}$ si tratta come il prodotto, raggruppando i fattori in $n$ frazioni $\dfrac{a}{b}$.

Le posizioni $a^0 = 1$ e $a^{-n} = \dfrac{1}{a^n}$ sono state scelte in modo che le stesse uguaglianze valgano per esponenti interi; per esponenti razionali e reali valgono in conseguenza delle definizioni di $a^{\frac{m}{n}}$ e di $a^x$.
:::
::::

:::esempio{titolo="Basi diverse ridotte a numeri primi"}
$$
\begin{aligned}
\frac{4^5 \cdot 9^3}{6^8}
&= \frac{(2^2)^5 \cdot (3^2)^3}{(2 \cdot 3)^8} \\[6pt]
&= \frac{2^{10} \cdot 3^6}{2^8 \cdot 3^8} \\[6pt]
&= 2^{10-8} \cdot 3^{6-8} = 2^2 \cdot 3^{-2} = \frac{4}{9}
\end{aligned}
$$
Le basi $4$, $9$ e $6$ sono diverse, quindi le proprietà con la stessa base non si applicano subito. Ogni base si scompone in **fattori primi**: $4 = 2^2$, $9 = 3^2$ e $6 = 2 \cdot 3$. La potenza di potenza e la potenza di un prodotto portano allora l'espressione alle sole basi $2$ e $3$, e per ciascuna base gli esponenti del numeratore e del denominatore si sottraggono.
:::

:::attenzione
Le proprietà riguardano **prodotti e quozienti**. Per la potenza di una somma vale lo **sviluppo del binomio**, e in generale $(a + b)^n$ è *diverso* da $a^n + b^n$: per esempio $(3 + 4)^2 = 49$, mentre $3^2 + 4^2 = 25$. Allo stesso modo la somma $a^m + a^n$ è diversa in generale da $a^{m+n}$: $2^2 + 2^3 = 12$, mentre $2^5 = 32$.
:::

:::attenzione
La potenza di potenza $(a^m)^n$ è *diversa* in generale da $a^{m^n}$. Per convenzione la scrittura $a^{m^n}$ indica $a$ elevato all'esponente $m^n$, quindi si calcola prima $m^n$. Per esempio $(2^3)^2 = 2^6 = 64$, mentre $2^{3^2} = 2^9 = 512$.
:::

## Radici n-esime

:::definizione{#radici titolo="Radice n-esima e condizioni di esistenza"}
Per $n$ naturale con $n \geq 2$:

- se $n$ è *dispari*, $\sqrt[n]{a}$ è definita per ogni $a \in \mathbb{R}$ ed è l'unico numero reale $x$ tale che $x^n = a$; per esempio $\sqrt[3]{-8} = -2$, perché $(-2)^3 = -8$;
- se $n$ è *pari*, $\sqrt[n]{a}$ è definita per $a \geq 0$ ed è l'unico numero reale $x \geq 0$ tale che $x^n = a$; per esempio $\sqrt{49} = 7$, mentre $\sqrt{-4}$ in $\mathbb{R}$ è priva di significato, perché ogni quadrato è maggiore o uguale a zero.

Con indice pari la radice è per definizione **maggiore o uguale a zero**: l'equazione $x^2 = 49$ ha le due soluzioni $x = \pm 7$, mentre il simbolo $\sqrt{49}$ indica *soltanto* $7$. La condizione "radicando maggiore o uguale a zero per indice pari" è la **condizione di esistenza** che apre ogni esercizio con radici.

::grafico{f="sqrt(x)" xmin=-1 xmax=9 ymin=-1 ymax=4 titolo="$y = \sqrt{x}$: la radice quadrata è definita per $x \geq 0$ e ha valori maggiori o uguali a zero"}

::grafico{f="sqrt(x)^4;x;sqrt(x)" xmin=-1 xmax=5 ymin=-1 ymax=5 uguale=1 legenda="y = x^2 \ (x \geq 0);y = x;y = \sqrt{x}" punti="2,4,pieno,P;4,2,pieno,P′" segmenti="2,4,4,2" etichette="0.3,4.5,y = x²;4.1,1.4,y = √x;4.2,4.6,y = x" titolo="Per $x \geq 0$ i grafici di $y = x^2$ e $y = \sqrt{x}$ sono simmetrici rispetto alla bisettrice $y = x$: il punto $P(2, 4)$ del primo corrisponde al punto $P'(4, 2)$ del secondo"}

:::

:::esempio{titolo="Condizioni di esistenza"}
$\sqrt{2x - 6}$ ha indice pari, quindi richiede $2x - 6 \geq 0$, cioè $x \geq 3$; la radice $\sqrt[3]{2x - 6}$ ha indice dispari ed esiste per ogni $x$ reale. Quando le radici sono più di una, le condizioni devono valere *insieme* e si mettono a **sistema**: per $\sqrt{x - 1} + \sqrt{5 - x}$
$$
\begin{cases}
x - 1 \geq 0 \\
5 - x \geq 0
\end{cases}
\qquad\Longrightarrow\qquad 1 \leq x \leq 5 .
$$

::grafico{f="sqrt(2*x-6);cbrt(2*x-6)" xmin=-2 xmax=9 ymin=-3 ymax=4 punti="3,0,pieno" etichette="6.6,3.4,y = √(2x − 6);6.6,1,y = ∛(2x − 6)" titolo="$y = \sqrt{2x - 6}$ esiste soltanto per $x \geq 3$, mentre $y = \sqrt[3]{2x - 6}$ (tratteggiata) esiste per ogni $x$ reale"}

:::

::::teorema{#proprieta-delle-radici titolo="Proprietà delle radici"}
Per $a, b \geq 0$ (con $b > 0$ nei quozienti), indici $m, n \geq 2$ ed esponente naturale $k \geq 1$:
$$
\sqrt[n]{ab} = \sqrt[n]{a} \, \sqrt[n]{b}, \qquad
\sqrt[n]{\frac{a}{b}} = \frac{\sqrt[n]{a}}{\sqrt[n]{b}}, \qquad
\sqrt[m]{\sqrt[n]{a}} = \sqrt[mn]{a}, \qquad
\sqrt[n]{a^k} = \left(\sqrt[n]{a}\right)^{k} .
$$
Vale inoltre la **proprietà invariantiva**: per ogni naturale $p \geq 1$,
$$
\sqrt[n]{a^k} = \sqrt[np]{a^{kp}} .
$$
Con la prima proprietà si **estraggono i fattori** dal segno di radice, per esempio $\sqrt{72} = \sqrt{36 \cdot 2} = 6\sqrt{2}$; con la proprietà invariantiva si portano due radici allo stesso indice, operazione su cui si fonda il confronto tra radici.

:::dimostrazione
L'idea è usare l'unicità della radice. Per definizione $\sqrt[n]{ab}$ è l'unico numero maggiore o uguale a zero la cui potenza di esponente $n$ vale $ab$. Il numero $\sqrt[n]{a}\,\sqrt[n]{b}$ è maggiore o uguale a zero, perché è il prodotto di due numeri maggiori o uguali a zero, e per la potenza di un prodotto vale
$$
\left(\sqrt[n]{a}\,\sqrt[n]{b}\right)^n = \left(\sqrt[n]{a}\right)^n \left(\sqrt[n]{b}\right)^n = ab .
$$
Quindi $\sqrt[n]{a}\,\sqrt[n]{b} = \sqrt[n]{ab}$. Le altre uguaglianze si dimostrano allo stesso modo, verificando che un membro è maggiore o uguale a zero e che la sua potenza con esponente uguale all'indice dell'altro membro è il radicando dell'altro membro. Per esempio il numero $\sqrt[m]{\sqrt[n]{a}}$ è maggiore o uguale a zero e, per la potenza di potenza,
$$
\left(\sqrt[m]{\sqrt[n]{a}}\right)^{mn} = \left(\left(\sqrt[m]{\sqrt[n]{a}}\right)^{m}\right)^{n} = \left(\sqrt[n]{a}\right)^{n} = a ,
$$
perciò coincide con $\sqrt[mn]{a}$.
:::
::::

:::attenzione
Per la radice quadrata di un quadrato vale $\sqrt{a^2} = |a|$, mentre l'uguaglianza $\sqrt{a^2} = a$ è **falsa** per $a < 0$: per esempio $\sqrt{(-5)^2} = \sqrt{25} = 5 = |-5|$.

::grafico{f="sqrt(x^2);x" xmin=-4 xmax=4 ymin=-4 ymax=4 uguale=1 punti="-3,3,pieno;-3,-3,vuoto" titolo="$y = \sqrt{x^2}$ coincide con $y = |x|$; la retta $y = x$ (tratteggiata) coincide con il grafico soltanto per $x \geq 0$, e in $x = -3$ il grafico passa per $(-3, 3)$, la retta per $(-3, -3)$"}

:::

:::esempio{titolo="Estrazione di fattori con le lettere"}
Per ogni $a$ reale il radicando $50a^2$ è maggiore o uguale a zero, e
$$
\sqrt{50a^2} = \sqrt{25a^2 \cdot 2} = \sqrt{25a^2}\,\sqrt{2} = 5|a|\sqrt{2} .
$$
Il fattore $a^2$ esce dalla radice quadrata come $|a|$, perché $\sqrt{a^2} = |a|$; il risultato è quindi maggiore o uguale a zero per ogni $a$, come ogni radice di indice pari. Con indice dispari il valore assoluto non compare: la radice di indice dispari è unica per ogni radicando reale, quindi la dimostrazione della proprietà del prodotto vale anche con radicandi negativi, e $\sqrt[3]{16a^3} = \sqrt[3]{8a^3}\,\sqrt[3]{2} = 2a\sqrt[3]{2}$, che per $a < 0$ è negativo come il radicando.
:::

:::attenzione
La radice di una somma è *diversa* in generale dalla somma delle radici: $\sqrt{9 + 16} = \sqrt{25} = 5$, mentre $\sqrt{9} + \sqrt{16} = 3 + 4 = 7$. Le proprietà delle radici riguardano prodotti e quozienti dei radicandi, come le proprietà delle potenze.
:::

:::osservazione
La proprietà $\sqrt{ab} = \sqrt{a}\,\sqrt{b}$ richiede $a, b \geq 0$. Se $a$ e $b$ sono entrambi negativi, il prodotto $ab$ è positivo e $\sqrt{ab}$ esiste, mentre $\sqrt{a}$ e $\sqrt{b}$ non esistono; per esempio $\sqrt{(-4)(-9)} = \sqrt{36} = 6$. Per questo motivo $\sqrt{x(x - 3)}$ e $\sqrt{x}\,\sqrt{x - 3}$ hanno condizioni di esistenza diverse. La prima richiede $x(x - 3) \geq 0$, cioè $x \leq 0$ oppure $x \geq 3$; la seconda richiede
$$
\begin{cases}
x \geq 0 \\
x - 3 \geq 0
\end{cases}
\qquad\Longrightarrow\qquad x \geq 3 .
$$
Le due espressioni sono uguali per $x \geq 3$, mentre per $x \leq 0$ esiste soltanto la prima.
:::

## Potenze a esponente razionale e reale

:::definizione{#esponente-razionale titolo="Potenza a esponente razionale"}
Per $a > 0$, $m$ intero e $n$ naturale con $n \geq 2$, si pone
$$
a^{\frac{m}{n}} = \sqrt[n]{a^m} .
$$
In particolare $a^{\frac{1}{n}} = \sqrt[n]{a}$ e $a^{-\frac{1}{2}} = \dfrac{1}{\sqrt{a}}$. Con questa definizione le proprietà delle potenze **continuano a valere**, quindi i calcoli con le radici si possono svolgere con le regole degli esponenti:
$$
\sqrt{2} \cdot \sqrt[3]{2} = 2^{\frac{1}{2}} \cdot 2^{\frac{1}{3}} = 2^{\frac{1}{2} + \frac{1}{3}} = 2^{\frac{5}{6}} = \sqrt[6]{2^5} .
$$
:::

:::esempio{titolo="Calcolo di potenze a esponente razionale"}
$$
8^{\frac{2}{3}} = \left(\sqrt[3]{8}\right)^2 = 2^2 = 4, \qquad
16^{-\frac{3}{4}} = \frac{1}{16^{\frac{3}{4}}} = \frac{1}{\left(\sqrt[4]{16}\right)^{3}} = \frac{1}{2^3} = \frac{1}{8}
$$
In entrambi i casi la radice si calcola prima della potenza, perché $\sqrt[n]{a^m} = \left(\sqrt[n]{a}\right)^m$ per la proprietà delle radici, e le radici $\sqrt[3]{8} = 2$ e $\sqrt[4]{16} = 2$ sono numeri interi. Lo stesso risultato si ottiene scrivendo la base come potenza di $2$ e moltiplicando gli esponenti: $8^{\frac{2}{3}} = (2^3)^{\frac{2}{3}} = 2^2$ e $16^{-\frac{3}{4}} = (2^4)^{-\frac{3}{4}} = 2^{-3}$.
:::

:::attenzione
La base delle potenze a esponente razionale è **positiva**. Con base negativa la scrittura perde coerenza: $(-8)^{\frac{1}{3}}$ dovrebbe valere $\sqrt[3]{-8} = -2$, mentre la stessa frazione scritta come $\dfrac{2}{6}$ darebbe $\sqrt[6]{(-8)^2} = \sqrt[6]{64} = 2$. Per le radici di numeri negativi si usa la notazione $\sqrt[3]{-8}$ con indice dispari.
:::

:::definizione{#esponente-reale titolo="Potenza a esponente reale"}
Per $a > 0$ e $x$ reale, la potenza $a^x$ si definisce **approssimando** $x$ con esponenti razionali: $2^{\sqrt{2}}$ è il numero a cui si avvicinano $2^{1{,}4}$, $2^{1{,}41}$, $2^{1{,}414}$ e così via. Tutte le proprietà delle potenze restano valide, e il risultato è *sempre* **positivo**: $a^x > 0$ per ogni $x$ reale. Su questa definizione si costruisce la funzione esponenziale, trattata nel capitolo sulle funzioni elementari.
:::

:::esempio{titolo="Una potenza con esponente irrazionale"}
Vale $1{,}4 < \sqrt{2} < 1{,}5$ e la base $2$ è maggiore di $1$. Per il confronto tra potenze con la stessa base la potenza cresce con l'esponente, quindi
$$
2^{1{,}4} < 2^{\sqrt{2}} < 2^{1{,}5}, \qquad 2^{1{,}4} \approx 2{,}639, \qquad 2^{1{,}5} = 2\sqrt{2} \approx 2{,}828 .
$$
Con approssimazioni più precise di $\sqrt{2}$ si ottengono $2^{1{,}41} \approx 2{,}657$ e $2^{1{,}414} \approx 2{,}665$, e a meno di un millesimo $2^{\sqrt{2}} \approx 2{,}665$.
:::

## Razionalizzazione

:::definizione{#razionalizzazione titolo="Razionalizzazione"}
**Razionalizzare** una frazione significa riscriverla con il denominatore **privo di radici**, moltiplicando numeratore e denominatore per uno stesso fattore, scelto in modo che il denominatore diventi razionale. I tre casi tipici:

- radice singola: si moltiplica per la radice stessa, perché $\sqrt{a} \cdot \sqrt{a} = a$; per esempio $\dfrac{1}{\sqrt{3}} = \dfrac{\sqrt{3}}{3}$;
- binomio con radici quadrate: si moltiplica per il **binomio coniugato**, perché $(\sqrt{a} - \sqrt{b})(\sqrt{a} + \sqrt{b}) = a - b$; per esempio $\dfrac{1}{\sqrt{5} - \sqrt{3}} = \dfrac{\sqrt{5} + \sqrt{3}}{2}$;
- radice cubica: si moltiplica per il fattore che completa il cubo sotto radice, cioè $\sqrt[3]{a^2}$ per $\sqrt[3]{a}$; per esempio $\dfrac{1}{\sqrt[3]{2}} = \dfrac{\sqrt[3]{4}}{2}$.

La razionalizzazione serve per sommare e confrontare frazioni con radici e ritorna nei limiti con differenze di radici, trattati nel capitolo sui limiti.
:::

:::esempio{titolo="Razionalizzazione con il binomio coniugato"}
$$
\frac{2}{\sqrt{5} - \sqrt{3}}
= \frac{2 \, (\sqrt{5} + \sqrt{3})}{(\sqrt{5} - \sqrt{3})(\sqrt{5} + \sqrt{3})}
= \frac{2 \, (\sqrt{5} + \sqrt{3})}{5 - 3}
= \sqrt{5} + \sqrt{3}
$$
Il prodotto al denominatore è una somma per una differenza, quindi vale la **differenza dei quadrati** $5 - 3 = 2$, che si semplifica con il numeratore.
:::

:::osservazione
Con un binomio di radici cubiche al denominatore il binomio coniugato non rende razionale il denominatore, perché $\left(\sqrt[3]{a} - \sqrt[3]{b}\right)\left(\sqrt[3]{a} + \sqrt[3]{b}\right) = \sqrt[3]{a^2} - \sqrt[3]{b^2}$ contiene ancora radici. Si usano allora i prodotti notevoli
$$
(x - y)(x^2 + xy + y^2) = x^3 - y^3, \qquad (x + y)(x^2 - xy + y^2) = x^3 + y^3
$$
con $x = \sqrt[3]{a}$ e $y = \sqrt[3]{b}$, che fanno comparire i cubi $x^3 = a$ e $y^3 = b$. Per esempio, con $x = \sqrt[3]{2}$ e $y = 1$,
$$
\begin{aligned}
\frac{1}{\sqrt[3]{2} - 1}
&= \frac{\sqrt[3]{4} + \sqrt[3]{2} + 1}{\left(\sqrt[3]{2} - 1\right)\left(\sqrt[3]{4} + \sqrt[3]{2} + 1\right)} \\[6pt]
&= \frac{\sqrt[3]{4} + \sqrt[3]{2} + 1}{2 - 1} = \sqrt[3]{4} + \sqrt[3]{2} + 1 .
\end{aligned}
$$
:::

## Confronto tra potenze e tra radici

:::teorema{#confronto-tra-potenze titolo="Confronto tra potenze"}
Per confrontare due potenze si distingue secondo la base e l'esponente:

- stessa base $a > 1$: la potenza **cresce** al crescere dell'esponente, quindi $x < y \Rightarrow a^x < a^y$; per esempio $2^3 < 2^5$;
- stessa base $0 < a < 1$: la potenza **decresce** al crescere dell'esponente, quindi $x < y \Rightarrow a^x > a^y$; per esempio $\left(\dfrac{1}{2}\right)^3 > \left(\dfrac{1}{2}\right)^5$;
- stesso esponente $x > 0$ e basi $0 < a < b$: vale $a^x < b^x$; per esempio $3^4 < 5^4$. Con esponente negativo la disuguaglianza **si rovescia**: $3^{-1} > 5^{-1}$, perché $\dfrac{1}{3} > \dfrac{1}{5}$;
- basi ed esponenti diversi: con la potenza di potenza si riscrivono le potenze con la stessa base oppure con lo stesso esponente; per esempio $2^{30} = (2^3)^{10} = 8^{10}$ e $3^{20} = (3^2)^{10} = 9^{10}$, quindi $2^{30} < 3^{20}$.

::grafico{f="2^x;0.5^x" xmin=-3.5 xmax=3.5 ymin=-1 ymax=9 etichette="1.6,6.5,y = 2ˣ" titolo="$y = 2^x$ cresce al crescere dell'esponente (base maggiore di $1$), $y = \left(\dfrac{1}{2}\right)^x$ (tratteggiata) decresce (base tra $0$ e $1$); entrambe sono positive per ogni $x$"}

:::

:::osservazione
Il confronto tra potenze con la stessa base vale anche quando la base è un numero $x > 0$ qualsiasi. Per $0 < x < 1$ le potenze di $x$ decrescono al crescere dell'esponente, e gli esponenti di $x^2$, $x$ e $\sqrt{x} = x^{\frac{1}{2}}$ sono $2 > 1 > \dfrac{1}{2}$, quindi $x^2 < x < \sqrt{x}$. Per $x > 1$ l'ordine si rovescia e $\sqrt{x} < x < x^2$. Per esempio con $x = \dfrac{1}{4}$ si ha $\dfrac{1}{16} < \dfrac{1}{4} < \dfrac{1}{2}$, mentre con $x = 4$ si ha $2 < 4 < 16$. In particolare il quadrato di un numero compreso fra $0$ e $1$ è *minore* del numero stesso.

::grafico{f="x^2;x;sqrt(x)" xmin=-0.2 xmax=1.7 ymin=-0.2 ymax=1.8 uguale=1 punti="1,1,pieno;0.25,0.0625,pieno;0.25,0.5,pieno" segmenti="0.25,0,0.25,0.5" legenda="y = x^2;y = x;y = \sqrt{x}" titolo="Per $0 < x < 1$ vale $x^2 < x < \sqrt{x}$, come in $x = \dfrac{1}{4}$; per $x > 1$ l'ordine si rovescia, e i tre grafici passano per $(1, 1)$"}

:::

:::teorema{#confronto-tra-radici titolo="Confronto tra radici"}
Radici con lo stesso indice si confrontano attraverso i radicandi: per $0 \leq a < b$ vale $\sqrt[n]{a} < \sqrt[n]{b}$. Radici con indici diversi si portano allo **stesso indice** con la **proprietà invariantiva**, usando come indice comune il minimo comune multiplo degli indici.
$$
\sqrt{3} = \sqrt[6]{3^3} = \sqrt[6]{27}, \qquad
\sqrt[3]{5} = \sqrt[6]{5^2} = \sqrt[6]{25},
\qquad\text{quindi}\quad \sqrt{3} > \sqrt[3]{5} .
$$
Con questo metodo si ordinano elenchi di radici qualsiasi, come negli esercizi di ordinamento.
:::

:::esempio{titolo="Fattori portati dentro la radice"}
$$
3\sqrt{2} = \sqrt{9}\,\sqrt{2} = \sqrt{18}, \qquad
2\sqrt{3} = \sqrt{4}\,\sqrt{3} = \sqrt{12},
\qquad\text{quindi}\quad 3\sqrt{2} > 2\sqrt{3} .
$$
Un fattore positivo davanti a una radice quadrata si scrive come radice del suo quadrato, per esempio $3 = \sqrt{9}$, e per la proprietà del prodotto entra sotto il segno di radice. Le due radici hanno allora lo stesso indice, perciò si confrontano i radicandi $18 > 12$. Un fattore negativo resta fuori con il suo segno: $-3\sqrt{2} = -\sqrt{18}$, perché $\sqrt{18}$ è positivo.
:::
