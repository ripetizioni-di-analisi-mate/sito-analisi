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

::grafico{f="x^2;x^3" xmin=-2.6 xmax=2.6 ymin=-9 ymax=9 punti="-2,4,pieno,(−2)² = 4;-2,-8,pieno,(−2)³ = −8" etichette="1,7,y = x³;-2.5,7.5,y = x²" titolo="Con base negativa $x^2$ è positiva e $x^3$ è negativa: il grafico di $y = x^2$ è simmetrico rispetto all'asse $y$, quello di $y = x^3$ rispetto all'origine"}

:::

## Proprietà delle potenze

:::teorema{#proprieta-delle-potenze titolo="Proprietà delle potenze"}
Per $a, b > 0$ ed esponenti $m, n$ reali (con basi negative valgono per esponenti *interi*):

- prodotto di potenze con la stessa base: $a^m \cdot a^n = a^{m+n}$; per esempio $2^3 \cdot 2^4 = 2^7 = 128$;
- quoziente di potenze con la stessa base: $\dfrac{a^m}{a^n} = a^{m-n}$; per esempio $\dfrac{5^6}{5^4} = 5^2 = 25$;
- potenza di potenza: $(a^m)^n = a^{mn}$; per esempio $(3^2)^3 = 3^6 = 729$;
- prodotto di potenze con lo stesso esponente: $a^n \cdot b^n = (ab)^n$; per esempio $2^3 \cdot 5^3 = 10^3 = 1000$;
- quoziente di potenze con lo stesso esponente: $\dfrac{a^n}{b^n} = \left(\dfrac{a}{b}\right)^n$; per esempio $\dfrac{6^2}{3^2} = 2^2 = 4$.

Le proprietà trasformano prodotti e quozienti di potenze in una **potenza sola** e sono lo strumento con cui si semplificano le espressioni; negli esercizi si usano in *entrambi* i versi, anche per riscrivere una potenza in una forma più comoda, come $8^{10} = (2^3)^{10} = 2^{30}$.
:::

:::attenzione
Le proprietà riguardano **prodotti e quozienti**. Per la potenza di una somma vale lo **sviluppo del binomio**, e in generale $(a + b)^n$ è *diverso* da $a^n + b^n$: per esempio $(3 + 4)^2 = 49$, mentre $3^2 + 4^2 = 25$. Allo stesso modo la somma $a^m + a^n$ è diversa in generale da $a^{m+n}$: $2^2 + 2^3 = 12$, mentre $2^5 = 32$.
:::

## Radici n-esime

:::definizione{#radici titolo="Radice n-esima e condizioni di esistenza"}
Per $n$ naturale con $n \geq 2$:

- se $n$ è *dispari*, $\sqrt[n]{a}$ è definita per ogni $a \in \mathbb{R}$ ed è l'unico numero reale $x$ tale che $x^n = a$; per esempio $\sqrt[3]{-8} = -2$, perché $(-2)^3 = -8$;
- se $n$ è *pari*, $\sqrt[n]{a}$ è definita per $a \geq 0$ ed è l'unico numero reale $x \geq 0$ tale che $x^n = a$; per esempio $\sqrt{49} = 7$, mentre $\sqrt{-4}$ in $\mathbb{R}$ è priva di significato, perché ogni quadrato è maggiore o uguale a zero.

Con indice pari la radice è per definizione **maggiore o uguale a zero**: l'equazione $x^2 = 49$ ha le due soluzioni $x = \pm 7$, mentre il simbolo $\sqrt{49}$ indica *soltanto* $7$. La condizione "radicando maggiore o uguale a zero per indice pari" è la **condizione di esistenza** che apre ogni esercizio con radici.

::grafico{f="sqrt(x)" xmin=-1 xmax=9 ymin=-1 ymax=4 titolo="y = √x: la radice quadrata è definita per x ≥ 0 e ha valori maggiori o uguali a zero"}

::grafico{f="sqrt(x)^4;x;sqrt(x)" xmin=-1 xmax=5 ymin=-1 ymax=5 uguale=1 punti="2,4,pieno,P;4,2,pieno,P′" segmenti="2,4,4,2" etichette="0.3,4.5,y = x²;4.1,1.4,y = √x;4.2,4.6,y = x" titolo="Per $x \geq 0$ i grafici di $y = x^2$ e $y = \sqrt{x}$ sono simmetrici rispetto alla bisettrice $y = x$: il punto $P(2, 4)$ del primo corrisponde al punto $P'(4, 2)$ del secondo"}

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

:::teorema{#proprieta-delle-radici titolo="Proprietà delle radici"}
Per $a, b \geq 0$ (con $b > 0$ nei quozienti) e indici $m, n \geq 2$:
$$
\sqrt[n]{ab} = \sqrt[n]{a} \, \sqrt[n]{b}, \qquad
\sqrt[n]{\frac{a}{b}} = \frac{\sqrt[n]{a}}{\sqrt[n]{b}}, \qquad
\sqrt[m]{\sqrt[n]{a}} = \sqrt[mn]{a}, \qquad
\sqrt[n]{a^m} = \left(\sqrt[n]{a}\right)^{m} .
$$
Vale inoltre la **proprietà invariantiva**: per ogni naturale $p \geq 1$,
$$
\sqrt[n]{a^m} = \sqrt[np]{a^{mp}} .
$$
Con la prima proprietà si **estraggono i fattori** dal segno di radice, per esempio $\sqrt{72} = \sqrt{36 \cdot 2} = 6\sqrt{2}$; con la proprietà invariantiva si portano due radici allo stesso indice, operazione su cui si fonda il confronto tra radici.
:::

:::attenzione
Per la radice quadrata di un quadrato vale $\sqrt{a^2} = |a|$, mentre l'uguaglianza $\sqrt{a^2} = a$ è **falsa** per $a < 0$: per esempio $\sqrt{(-5)^2} = \sqrt{25} = 5 = |-5|$.

::grafico{f="sqrt(x^2);x" xmin=-4 xmax=4 ymin=-4 ymax=4 uguale=1 punti="-3,3,pieno;-3,-3,vuoto" titolo="$y = \sqrt{x^2}$ coincide con $y = |x|$; la retta $y = x$ (tratteggiata) coincide con il grafico soltanto per $x \geq 0$, e in $x = -3$ il grafico passa per $(-3, 3)$, la retta per $(-3, -3)$"}

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

:::attenzione
La base delle potenze a esponente razionale è **positiva**. Con base negativa la scrittura perde coerenza: $(-8)^{\frac{1}{3}}$ dovrebbe valere $\sqrt[3]{-8} = -2$, mentre la stessa frazione scritta come $\dfrac{2}{6}$ darebbe $\sqrt[6]{(-8)^2} = \sqrt[6]{64} = 2$. Per le radici di numeri negativi si usa la notazione $\sqrt[3]{-8}$ con indice dispari.
:::

:::definizione{#esponente-reale titolo="Potenza a esponente reale"}
Per $a > 0$ e $x$ reale, la potenza $a^x$ si definisce **approssimando** $x$ con esponenti razionali: $2^{\sqrt{2}}$ è il numero a cui si avvicinano $2^{1{,}4}$, $2^{1{,}41}$, $2^{1{,}414}$ e così via. Tutte le proprietà delle potenze restano valide, e il risultato è *sempre* **positivo**: $a^x > 0$ per ogni $x$ reale. Su questa definizione si costruisce la funzione esponenziale, trattata nel capitolo sulle funzioni elementari.
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

## Confronto tra potenze e tra radici

:::teorema{#confronto-tra-potenze titolo="Confronto tra potenze"}
Per confrontare due potenze si distingue secondo la base e l'esponente:

- stessa base $a > 1$: la potenza **cresce** al crescere dell'esponente, quindi $x < y \Rightarrow a^x < a^y$; per esempio $2^3 < 2^5$;
- stessa base $0 < a < 1$: la potenza **decresce** al crescere dell'esponente, quindi $x < y \Rightarrow a^x > a^y$; per esempio $\left(\dfrac{1}{2}\right)^3 > \left(\dfrac{1}{2}\right)^5$;
- stesso esponente $x > 0$ e basi $0 < a < b$: vale $a^x < b^x$; per esempio $3^4 < 5^4$. Con esponente negativo la disuguaglianza **si rovescia**: $3^{-1} > 5^{-1}$, perché $\dfrac{1}{3} > \dfrac{1}{5}$;
- basi ed esponenti diversi: con la potenza di potenza si riscrivono le potenze con la stessa base oppure con lo stesso esponente; per esempio $2^{30} = (2^3)^{10} = 8^{10}$ e $3^{20} = (3^2)^{10} = 9^{10}$, quindi $2^{30} < 3^{20}$.

::grafico{f="2^x;0.5^x" xmin=-3.5 xmax=3.5 ymin=-1 ymax=9 etichette="1.6,6.5,y = 2ˣ" titolo="$y = 2^x$ cresce al crescere dell'esponente (base maggiore di $1$), $y = \left(\dfrac{1}{2}\right)^x$ (tratteggiata) decresce (base tra $0$ e $1$); entrambe sono positive per ogni $x$"}

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
