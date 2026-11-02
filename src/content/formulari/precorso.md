---
titolo: "Formulario del Precorso di Analisi 1"
sommario: "Le formule del Precorso con le condizioni di validità: logica, potenze e radici, prodotti notevoli e Ruffini, equazioni e disequazioni di ogni tipo, logaritmi, esponenziali, goniometria, retta e coniche."
descrizione: "Formulario del Precorso di Analisi 1 in PDF: prodotti notevoli, Ruffini, logaritmi, valori notevoli, formule goniometriche, retta e coniche."
---

## Logica e quantificatori

Le tavole di verità e gli esempi sono nel capitolo [Logica elementare](/precorso/logica/teoria).

:::formula{#tavola-connettivi titolo="Tavola di verità dei connettivi"}
$$
\begin{array}{c|c|c|c|c|c}
p & q & \lnot p & p \land q & p \lor q & p \Rightarrow q \\
\hline
\text{V} & \text{V} & \text{F} & \text{V} & \text{V} & \text{V} \\
\text{V} & \text{F} & \text{F} & \text{F} & \text{V} & \text{F} \\
\text{F} & \text{V} & \text{V} & \text{F} & \text{V} & \text{V} \\
\text{F} & \text{F} & \text{V} & \text{F} & \text{F} & \text{V}
\end{array}
$$
La disgiunzione $p \lor q$ è inclusiva, cioè è vera anche quando $p$ e $q$ sono vere insieme. L'implicazione è falsa *solo se* l'ipotesi è vera e la tesi è falsa.
:::

:::formula{#doppia-implicazione titolo="Doppia implicazione"}
$$
p \Leftrightarrow q \equiv (p \Rightarrow q) \land (q \Rightarrow p)
$$
La doppia implicazione è vera quando $p$ e $q$ hanno lo stesso valore di verità. Il simbolo $\equiv$ indica che due proposizioni hanno la stessa tavola di verità.
:::

:::formula{#leggi-di-de-morgan titolo="Leggi di De Morgan"}
$$
\lnot (p \land q) \equiv \lnot p \lor \lnot q, \qquad \lnot (p \lor q) \equiv \lnot p \land \lnot q
$$
La negazione scambia «e» con «o» e nega le singole parti. Per esempio la negazione di $x > 0 \land x < 5$ è $x \leq 0 \lor x \geq 5$.
:::

:::formula{#implicazione-e-contronominale titolo="Implicazione, negazione e contronominale"}
$$
\begin{gathered}
p \Rightarrow q \equiv \lnot p \lor q, \qquad \lnot (p \Rightarrow q) \equiv p \land \lnot q, \\[4pt]
p \Rightarrow q \equiv \lnot q \Rightarrow \lnot p .
\end{gathered}
$$
La contronominale $\lnot q \Rightarrow \lnot p$ è equivalente all'implicazione di partenza. L'inversa $q \Rightarrow p$ ha una tavola di verità diversa, quindi può essere falsa anche quando $p \Rightarrow q$ è vera.
:::

:::formula{#condizione-necessaria-sufficiente titolo="Condizione necessaria e sufficiente"}
$$
\begin{aligned}
p \Rightarrow q \quad &\iff \quad p \ \text{è sufficiente per} \ q \ \text{e} \ q \ \text{è necessaria per} \ p \\
p \Leftrightarrow q \quad &\iff \quad p \ \text{è necessaria e sufficiente per} \ q
\end{aligned}
$$
Dalla contronominale segue che, se la condizione necessaria $q$ è falsa, anche $p$ è falsa. Per esempio «$n$ multiplo di $4$» è sufficiente per «$n$ pari», mentre «$n$ pari» è necessaria per «$n$ multiplo di $4$».
:::

:::formula{#negazione-quantificatori titolo="Negazione dei quantificatori"}
$$
\begin{gathered}
\lnot \bigl( \forall x \in A : p(x) \bigr) \equiv \exists x \in A : \lnot p(x), \\[4pt]
\lnot \bigl( \exists x \in A : p(x) \bigr) \equiv \forall x \in A : \lnot p(x) .
\end{gathered}
$$
Con più quantificatori si scambiano tutti, dall'esterno verso l'interno, e alla fine si nega il predicato. Per esempio la negazione di $\forall x \ \exists y : y > x$ è $\exists x \ \forall y : y \leq x$. Un solo controesempio basta a rendere falsa una proposizione universale.
:::

:::formula{#schemi-di-dimostrazione titolo="Schemi di dimostrazione"}
$$
\begin{aligned}
&\text{diretta:} && p \Rightarrow \dots \Rightarrow q \\
&\text{per contronominale:} && \lnot q \Rightarrow \lnot p \\
&\text{per assurdo:} && p \land \lnot q \Rightarrow \text{contraddizione}
\end{aligned}
$$
I tre schemi dimostrano la stessa implicazione $p \Rightarrow q$. La dimostrazione per assurdo si fonda sull'equivalenza $\lnot(p \Rightarrow q) \equiv p \land \lnot q$.
:::

## Potenze

Le definizioni e gli esempi sono nel capitolo [Potenze e radici](/precorso/potenze-e-radici/teoria).

:::formula{#esponente-zero-e-negativo titolo="Esponente zero e negativo"}
$$
a^0 = 1, \qquad a^{-n} = \frac{1}{a^n}, \qquad \left(\frac{a}{b}\right)^{-n} = \left(\frac{b}{a}\right)^{n}
$$
Valgono per $a \neq 0$, $b \neq 0$ e $n$ naturale. La scrittura $0^0$ è priva di significato. Per esempio $2^{-3} = \dfrac{1}{8}$ e $\left(\dfrac{2}{3}\right)^{-1} = \dfrac{3}{2}$.
:::

:::formula{#segno-di-una-potenza titolo="Potenza con base negativa"}
$$
(-a)^n =
\begin{cases}
a^n & \text{se } n \text{ è pari} \\
-a^n & \text{se } n \text{ è dispari}
\end{cases}
$$
Vale per ogni $a$ reale e $n$ naturale. La scrittura $-2^4$ indica l'opposto di $2^4$, cioè $-16$, mentre $(-2)^4 = 16$.
:::

:::formula{#proprieta-delle-potenze titolo="Proprietà delle potenze"}
$$
\begin{gathered}
a^m \cdot a^n = a^{m+n}, \qquad \frac{a^m}{a^n} = a^{m-n}, \qquad (a^m)^n = a^{mn}, \\[6pt]
a^n \cdot b^n = (ab)^n, \qquad \frac{a^n}{b^n} = \left(\frac{a}{b}\right)^n .
\end{gathered}
$$
Valgono per $a, b > 0$ ed esponenti reali. Con basi negative valgono per esponenti interi, dove le potenze sono definite.
:::

:::attenzione
Le proprietà riguardano prodotti e quozienti. Per una somma, in generale, $(a + b)^n \neq a^n + b^n$ e $a^m + a^n \neq a^{m+n}$. Per esempio $(3 + 4)^2 = 49$ e $3^2 + 4^2 = 25$; allo stesso modo $2^2 + 2^3 = 12$ e $2^5 = 32$.
:::

:::formula{#potenza-esponente-razionale titolo="Potenza a esponente razionale"}
$$
a^{\frac{m}{n}} = \sqrt[n]{a^m}, \qquad a^{\frac{1}{n}} = \sqrt[n]{a}, \qquad a^{-\frac{m}{n}} = \frac{1}{\sqrt[n]{a^m}}
$$
Valgono per $a > 0$, $m$ intero e $n$ naturale con $n \geq 2$. Con questa definizione le proprietà delle potenze continuano a valere, per esempio $\sqrt{2} \cdot \sqrt[3]{2} = 2^{\frac{1}{2} + \frac{1}{3}} = 2^{\frac{5}{6}}$.
:::

:::formula{#confronto-tra-potenze titolo="Confronto tra potenze"}
$$
\begin{gathered}
x < y \iff a^x < a^y \qquad (a > 1), \\[4pt]
x < y \iff a^x > a^y \qquad (0 < a < 1), \\[4pt]
0 < a < b \implies a^x < b^x \qquad (x > 0).
\end{gathered}
$$
Con esponente $x < 0$ la terza disuguaglianza si rovescia. Potenze con basi ed esponenti diversi si confrontano dopo averle riscritte con la stessa base o con lo stesso esponente, per esempio $2^{30} = 8^{10} < 9^{10} = 3^{20}$.
:::

## Radici e razionalizzazione

Le condizioni di esistenza e i tre casi di razionalizzazione sono spiegati nello stesso capitolo [Potenze e radici](/precorso/potenze-e-radici/teoria).

:::formula{#radice-n-esima titolo="Radice n-esima e condizioni di esistenza"}
$$
\begin{gathered}
\sqrt[n]{a} = x \iff x^n = a \qquad (n \text{ dispari},\ a \in \mathbb{R}), \\[6pt]
\sqrt[n]{a} = x \iff
\begin{cases}
x \geq 0 \\
x^n = a
\end{cases}
\qquad (n \text{ pari},\ a \geq 0).
\end{gathered}
$$
Con indice pari la radice esiste *solo se* il radicando è maggiore o uguale a zero, e il suo valore è maggiore o uguale a zero. Per esempio $\sqrt{49} = 7$, mentre l'equazione $x^2 = 49$ ha le soluzioni $x = \pm 7$; con indice dispari $\sqrt[3]{-8} = -2$.
:::

:::formula{#proprieta-delle-radici titolo="Proprietà delle radici"}
$$
\begin{gathered}
\sqrt[n]{ab} = \sqrt[n]{a}\,\sqrt[n]{b}, \qquad \sqrt[n]{\frac{a}{b}} = \frac{\sqrt[n]{a}}{\sqrt[n]{b}}, \\[6pt]
\sqrt[m]{\sqrt[n]{a}} = \sqrt[mn]{a}, \qquad \sqrt[n]{a^k} = \left(\sqrt[n]{a}\right)^k .
\end{gathered}
$$
Valgono per $a \geq 0$ e $b \geq 0$ ($b > 0$ nel quoziente), con indici $m, n \geq 2$ ed esponente naturale $k \geq 1$. Se gli indici sono dispari valgono per ogni $a$ e $b$ reali, con $b \neq 0$ nel quoziente.
:::

:::formula{#proprieta-invariantiva titolo="Proprietà invariantiva e confronto tra radici"}
$$
\sqrt[n]{a^k} = \sqrt[np]{a^{kp}}, \qquad 0 \leq a < b \implies \sqrt[n]{a} < \sqrt[n]{b}
$$
Valgono per $a \geq 0$ e $p \geq 1$ naturale. Radici con indici diversi si portano all'indice comune dato dal minimo comune multiplo degli indici. Per esempio $\sqrt{3} = \sqrt[6]{27}$ e $\sqrt[3]{5} = \sqrt[6]{25}$, quindi $\sqrt{3} > \sqrt[3]{5}$.
:::

:::formula{#radice-di-un-quadrato titolo="Radice di un quadrato e trasporto di fattori"}
$$
\sqrt{a^2} = |a|, \qquad \sqrt{a^2 b} = |a|\sqrt{b}, \qquad a\sqrt{b} = \sqrt{a^2 b} \quad (a \geq 0)
$$
La prima vale per ogni $a$ reale, la seconda e la terza per $b \geq 0$. Per $a < 0$ si ha $a\sqrt{b} = -\sqrt{a^2 b}$, per esempio $-2\sqrt{3} = -\sqrt{12}$. Con indice $n$ pari $\sqrt[n]{a^n} = |a|$, con indice dispari $\sqrt[n]{a^n} = a$.
:::

:::formula{#radicali-simili titolo="Somma di radicali simili"}
$$
a\sqrt[n]{c} + b\sqrt[n]{c} = (a + b)\sqrt[n]{c}
$$
Vale per radicali con lo stesso indice e lo stesso radicando, con $c \geq 0$ se $n$ è pari. Prima si estraggono i fattori dal segno di radice, per esempio $\sqrt{12} + \sqrt{27} = 2\sqrt{3} + 3\sqrt{3} = 5\sqrt{3}$.
:::

:::formula{#razionalizzazione titolo="Razionalizzazione"}
$$
\begin{gathered}
\frac{1}{\sqrt{a}} = \frac{\sqrt{a}}{a}, \qquad
\frac{1}{\sqrt[n]{a^k}} = \frac{\sqrt[n]{a^{n-k}}}{a}, \\[6pt]
\frac{1}{\sqrt{a} \pm \sqrt{b}} = \frac{\sqrt{a} \mp \sqrt{b}}{a - b} .
\end{gathered}
$$
Valgono per $a > 0$, con $0 < k < n$ nella seconda e $b \geq 0$, $a \neq b$ nella terza. La terza moltiplica per il binomio coniugato, poiché $(\sqrt{a} + \sqrt{b})(\sqrt{a} - \sqrt{b}) = a - b$; con un numero al posto di una radice si ha per esempio $\dfrac{1}{\sqrt{5} - 1} = \dfrac{\sqrt{5} + 1}{4}$.
:::

## Prodotti notevoli

Gli sviluppi e il loro uso nelle scomposizioni sono nel capitolo [Fattorizzazione, Ruffini e divisione tra polinomi](/precorso/polinomi/teoria).

:::formula{#quadrato-di-binomio titolo="Quadrato di binomio e di trinomio"}
$$
\begin{gathered}
(A + B)^2 = A^2 + 2AB + B^2, \qquad (A - B)^2 = A^2 - 2AB + B^2, \\[6pt]
(A + B + C)^2 = A^2 + B^2 + C^2 + 2AB + 2AC + 2BC .
\end{gathered}
$$
Valgono per ogni valore di $A$, $B$, $C$. Lette da destra a sinistra scompongono un trinomio formato da due quadrati e dal doppio prodotto delle basi, per esempio $x^2 - 10x + 25 = (x - 5)^2$.
:::

:::formula{#cubo-di-binomio titolo="Cubo di binomio"}
$$
\begin{gathered}
(A + B)^3 = A^3 + 3A^2 B + 3AB^2 + B^3, \\[4pt]
(A - B)^3 = A^3 - 3A^2 B + 3AB^2 - B^3 .
\end{gathered}
$$
Valgono per ogni valore di $A$ e $B$. Per esempio $(x + 2)^3 = x^3 + 6x^2 + 12x + 8$.
:::

:::formula{#differenza-di-quadrati titolo="Differenza di quadrati"}
$$
A^2 - B^2 = (A - B)(A + B)
$$
Vale per ogni valore di $A$ e $B$ e si applica anche più volte di seguito, per esempio $x^4 - 1 = (x^2 - 1)(x^2 + 1) = (x - 1)(x + 1)(x^2 + 1)$.
:::

:::formula{#somma-e-differenza-di-cubi titolo="Somma e differenza di cubi"}
$$
\begin{gathered}
A^3 + B^3 = (A + B)(A^2 - AB + B^2), \\[4pt]
A^3 - B^3 = (A - B)(A^2 + AB + B^2) .
\end{gathered}
$$
Valgono per ogni valore di $A$ e $B$. Il secondo fattore, detto falso quadrato, come trinomio in $A$ ha discriminante $-3B^2$, negativo per $B \neq 0$; perciò non ha radici reali e la scomposizione termina.
:::

:::formula{#differenza-di-potenze titolo="Somma e differenza di potenze"}
$$
\begin{gathered}
A^n - B^n = (A - B)\left(A^{n-1} + A^{n-2}B + \dots + AB^{n-2} + B^{n-1}\right), \\[6pt]
A^n + B^n = (A + B)\left(A^{n-1} - A^{n-2}B + \dots - AB^{n-2} + B^{n-1}\right).
\end{gathered}
$$
La prima vale per ogni naturale $n \geq 2$, la seconda per $n$ *dispari*. Per $n = 3$ si ritrovano la differenza e la somma di cubi.
:::

:::formula{#potenza-di-un-binomio titolo="Potenza di un binomio e triangolo di Tartaglia"}
$$
(A + B)^n = \sum_{k=0}^{n} \binom{n}{k} A^{n-k} B^{k}, \qquad \binom{n}{k} = \frac{n!}{k!\,(n-k)!}
$$
Vale per $n$ naturale. I coefficienti sono le righe del triangolo di Tartaglia, per esempio $(A + B)^4 = A^4 + 4A^3 B + 6A^2 B^2 + 4AB^3 + B^4$. Nello sviluppo di $(A - B)^n$ i segni dei termini si alternano.
:::

:::formula{#trinomio-speciale titolo="Trinomio speciale"}
$$
x^2 + sx + p = (x + a)(x + b)
\qquad \text{con} \quad
\begin{cases}
a + b = s \\
a \cdot b = p
\end{cases}
$$
Si applica quando i due numeri $a$ e $b$ si trovano a mente. Per esempio $x^2 - x - 12 = (x + 3)(x - 4)$, poiché $3 + (-4) = -1$ e $3 \cdot (-4) = -12$.
:::

:::formula{#raccoglimento-totale-e-parziale titolo="Raccoglimento totale e parziale"}
$$
\begin{gathered}
AB + AC = A\,(B + C), \\[4pt]
AC + AD + BC + BD = A\,(C + D) + B\,(C + D) = (A + B)(C + D) .
\end{gathered}
$$
Il raccoglimento parziale si conclude quando i gruppi lasciano lo stesso fattore, per esempio $x^3 + 2x^2 + 3x + 6 = x^2(x + 2) + 3(x + 2) = (x + 2)(x^2 + 3)$.
:::

:::attenzione
La somma di quadrati $x^2 + k^2$ con $k \neq 0$ non si scompone in fattori di primo grado a coefficienti reali. Per esempio $x^2 + 4 \geq 4$ per ogni $x$, quindi $x^2 + 4$ non ha radici reali.
:::

## Divisione, Ruffini e scomposizione

I teoremi con le dimostrazioni sono nel capitolo [Fattorizzazione, Ruffini e divisione tra polinomi](/precorso/polinomi/teoria#divisione-tra-polinomi).

:::formula{#principio-di-identita titolo="Principio di identità dei polinomi"}
$$
a_n x^n + \dots + a_1 x + a_0 = b_n x^n + \dots + b_1 x + b_0 \ \ \forall x \in \mathbb{R}
\iff a_k = b_k \ \ \forall k
$$
Con il principio si determinano coefficienti incogniti, per esempio da $x^2 + bx + c = x^2 - 4x + 3$ segue $b = -4$ e $c = 3$. Nel prodotto di due polinomi non nulli i gradi si sommano, cioè $\deg(PQ) = \deg P + \deg Q$.
:::

:::formula{#divisione-con-resto titolo="Divisione con resto"}
$$
\begin{cases}
A(x) = B(x)\,Q(x) + R(x) \\[4pt]
R(x) = 0 \ \text{ oppure } \ \deg R < \deg B
\end{cases}
$$
Per ogni divisore $B$ non nullo il quoziente $Q$ e il resto $R$ esistono e sono unici. Se $\deg A \geq \deg B$, il quoziente ha grado $\deg A - \deg B$; se $R = 0$, il polinomio $B$ divide $A$.
:::

:::formula{#teorema-del-resto-e-di-ruffini titolo="Teorema del resto e teorema di Ruffini"}
$$
\begin{gathered}
P(x) = (x - c)\,Q(x) + P(c), \\[4pt]
(x - c) \ \text{divide} \ P(x) \iff P(c) = 0 .
\end{gathered}
$$
Il resto della divisione per $x - c$ è quindi $P(c)$ e si calcola senza eseguire la divisione. Per un divisore $ax - b$ con $a \neq 0$ il resto è $P\left(\dfrac{b}{a}\right)$.
:::

:::formula{#schema-di-ruffini titolo="Schema di Ruffini"}
$$
\begin{array}{c|ccc|c}
 & 1 & -2 & -5 & 6 \\
1 &  & 1 & -1 & -6 \\ \hline
 & 1 & -1 & -6 & 0
\end{array}
$$
Nella prima riga si scrivono i coefficienti in ordine di grado decrescente, con $0$ al posto dei gradi mancanti; ogni numero della riga dei risultati si moltiplica per $c$ e si somma al coefficiente della colonna successiva. L'ultimo numero è il resto $P(c)$, gli altri sono i coefficienti del quoziente, di grado $\deg P - 1$. Qui $x^3 - 2x^2 - 5x + 6 = (x - 1)(x^2 - x - 6)$.
:::

:::formula{#radici-razionali titolo="Radici razionali di un polinomio"}
$$
P\left(\frac{p}{q}\right) = 0 \implies p \mid a_0 \ \text{ e } \ q \mid a_n
$$
Vale per $P(x) = a_n x^n + \dots + a_0$ a coefficienti interi con $a_0 \neq 0$, e per $\dfrac{p}{q}$ ridotta ai minimi termini. Le radici razionali si cercano quindi tra un numero finito di candidati; se $a_n = 1$, sono numeri interi che dividono il termine noto.
:::

:::formula{#scomposizione-del-trinomio titolo="Scomposizione del trinomio di secondo grado"}
$$
ax^2 + bx + c = a\,(x - x_1)(x - x_2)
$$
Vale per $a \neq 0$ e $\Delta = b^2 - 4ac \geq 0$, con $x_1$ e $x_2$ radici del trinomio; se $\Delta = 0$ si ha $ax^2 + bx + c = a\,(x - x_1)^2$. Se $\Delta < 0$ il trinomio non si scompone in fattori reali di primo grado.
:::

:::formula{#molteplicita-di-una-radice titolo="Molteplicità di una radice"}
$$
P(x) = (x - c)^m\,Q(x), \qquad Q(c) \neq 0
$$
In questo caso la radice $c$ ha molteplicità $m \geq 1$. Il grafico di $P$ attraversa l'asse $x$ in $c$ se $m$ è dispari e lo tocca senza attraversarlo se $m$ è pari.
:::

## Equazioni di primo e secondo grado

La dimostrazione della formula risolutiva è nel capitolo [Equazioni e disequazioni polinomiali e fratte](/precorso/equazioni-polinomiali/teoria).

:::formula{#equazione-di-primo-grado titolo="Equazione di primo grado"}
$$
ax + b = 0 \iff x = -\frac{b}{a}
$$
Vale per $a \neq 0$. Per $a = 0$ l'equazione è impossibile se $b \neq 0$ ed è un'identità se $b = 0$.
:::

:::formula{#formula-risolutiva titolo="Formula risolutiva"}
$$
ax^2 + bx + c = 0 \iff x = \frac{-b \pm \sqrt{\Delta}}{2a}, \qquad \Delta = b^2 - 4ac
$$
Vale per $a \neq 0$ e $\Delta \geq 0$. Per $\Delta > 0$ le soluzioni sono due e distinte, per $\Delta = 0$ c'è la sola soluzione doppia $x = -\dfrac{b}{2a}$, per $\Delta < 0$ l'equazione **non ha soluzioni reali**.
:::

:::formula{#formula-ridotta titolo="Formula ridotta"}
$$
x = \frac{-\frac{b}{2} \pm \sqrt{\frac{\Delta}{4}}}{a}, \qquad \frac{\Delta}{4} = \left(\frac{b}{2}\right)^2 - ac
$$
Vale per $a \neq 0$ e $\dfrac{\Delta}{4} \geq 0$. È la formula risolutiva con numeratore e denominatore divisi per $2$, e abbrevia i calcoli quando $b$ è pari. Per esempio $x^2 - 6x + 4 = 0$ ha $\dfrac{\Delta}{4} = 9 - 4 = 5$, quindi $x = 3 \pm \sqrt{5}$.
:::

:::formula{#equazioni-incomplete titolo="Equazioni spurie e pure"}
$$
\begin{gathered}
ax^2 + bx = 0 \iff x = 0 \ \vee \ x = -\frac{b}{a}, \\[6pt]
ax^2 + c = 0 \iff x = \pm\sqrt{-\frac{c}{a}} .
\end{gathered}
$$
Valgono per $a \neq 0$. La seconda ha soluzioni reali *solo se* $-\dfrac{c}{a} \geq 0$; per $-\dfrac{c}{a} < 0$ è impossibile.
:::

:::formula{#somma-e-prodotto-delle-radici titolo="Somma e prodotto delle radici"}
$$
x_1 + x_2 = -\frac{b}{a}, \qquad x_1 \cdot x_2 = \frac{c}{a}
$$
Valgono per $a \neq 0$ e $\Delta \geq 0$, con $x_1$ e $x_2$ radici di $ax^2 + bx + c = 0$. Di conseguenza i due numeri con somma $s$ e prodotto $p$ sono le soluzioni di $x^2 - sx + p = 0$.
:::

:::formula{#legge-di-annullamento-del-prodotto titolo="Legge di annullamento del prodotto"}
$$
A \cdot B = 0 \iff A = 0 \ \vee \ B = 0
$$
Un'equazione $P(x) = 0$ di grado maggiore di due si risolve scomponendo $P$ in fattori e uguagliando a zero ciascun fattore. Un polinomio di grado $n$ ha al più $n$ radici reali.
:::

:::formula{#equazioni-biquadratiche titolo="Equazioni biquadratiche e trinomie"}
$$
ax^4 + bx^2 + c = 0 \quad \xrightarrow{\ t \, = \, x^2\ } \quad at^2 + bt + c = 0
$$
Ogni soluzione $t > 0$ dà $x = \pm\sqrt{t}$, la soluzione $t = 0$ dà $x = 0$, le soluzioni $t < 0$ si scartano. Allo stesso modo l'equazione $ax^{2n} + bx^n + c = 0$ si risolve con la sostituzione $t = x^n$.
:::

## Disequazioni polinomiali e fratte

Gli esempi con la tabella dei segni sono nel capitolo [Equazioni e disequazioni polinomiali e fratte](/precorso/equazioni-polinomiali/teoria#tabella-dei-segni).

:::formula{#principi-di-equivalenza titolo="Principi di equivalenza delle disequazioni"}
$$
\begin{gathered}
A < B \iff A + C < B + C, \\[4pt]
A < B \iff AC < BC \quad (C > 0), \qquad A < B \iff AC > BC \quad (C < 0).
\end{gathered}
$$
Moltiplicando i due membri per una quantità negativa il verso si inverte. Per esempio da $-2x > -4$ segue $x < 2$.
:::

:::formula{#segno-del-trinomio titolo="Segno del trinomio di secondo grado"}
$$
\begin{aligned}
\Delta > 0 &\implies ax^2 + bx + c > 0 \ \text{ per } x < x_1 \vee x > x_2 \\
\Delta = 0 &\implies ax^2 + bx + c > 0 \ \text{ per } x \neq x_0 \\
\Delta < 0 &\implies ax^2 + bx + c > 0 \ \text{ per ogni } x
\end{aligned}
$$
Valgono per $a > 0$, con $x_1 < x_2$ radici del trinomio e $x_0$ radice doppia; per $x_1 < x < x_2$ il trinomio è negativo. Per $a < 0$ i segni sono gli opposti, e in alternativa si moltiplica per $-1$ invertendo il verso.
:::

:::formula{#segno-prodotto-quoziente titolo="Segno di un prodotto e di un quoziente"}
$$
\operatorname{segno}\left(\frac{N(x)}{D(x)}\right) = \operatorname{segno}\bigl(N(x)\,D(x)\bigr) \qquad (D(x) \neq 0)
$$
Un prodotto è positivo dove il numero dei fattori negativi è pari e negativo dove è dispari; nella tabella dei segni ogni fattore occupa una riga. Un fattore $(x - c)^m$ con $m$ pari è positivo per $x \neq c$, con $m$ dispari ha il segno di $x - c$.
:::

:::formula{#equazioni-fratte titolo="Equazioni fratte"}
$$
\frac{N(x)}{D(x)} = 0 \iff
\begin{cases}
N(x) = 0 \\
D(x) \neq 0
\end{cases}
$$
Le condizioni di esistenza $D(x) \neq 0$ si scrivono per tutti i denominatori dell'equazione di partenza, prima di ridurre allo stesso denominatore. Le soluzioni di $N(x) = 0$ che annullano un denominatore si scartano.
:::

:::formula{#disequazioni-fratte titolo="Disequazioni fratte"}
$$
\begin{gathered}
\frac{N(x)}{D(x)} > 0 \iff N(x)\,D(x) > 0, \\[6pt]
\frac{N(x)}{D(x)} \geq 0 \iff
\begin{cases}
N(x)\,D(x) \geq 0 \\
D(x) \neq 0
\end{cases}
\end{gathered}
$$
Gli zeri del denominatore sono esclusi per ogni verso; con $\geq$ e $\leq$ gli zeri del numeratore sono inclusi.
:::

:::attenzione
Moltiplicare i due membri per un denominatore ne presuppone il segno, che dipende da $x$. Da $\dfrac{1}{x} < 1$ non segue $1 < x$, poiché $x = -1$ soddisfa la prima disuguaglianza e non la seconda. Le soluzioni di $\dfrac{1}{x} < 1$ sono $x < 0 \ \vee \ x > 1$.
:::

:::formula{#sistemi-di-disequazioni titolo="Sistemi di disequazioni"}
$$
\begin{cases}
A(x) > 0 \\
B(x) > 0
\end{cases}
\iff x \in S_A \cap S_B
$$
Qui $S_A$ e $S_B$ sono gli insiemi delle soluzioni delle singole disequazioni. Le soluzioni del sistema sono quindi gli intervalli comuni a tutte le disequazioni.
:::

## Valore assoluto

Ogni forma risolutiva discende dalla definizione per casi, come si vede nel capitolo [Equazioni e disequazioni con il valore assoluto](/precorso/valore-assoluto/teoria).

:::formula{#definizione-valore-assoluto titolo="Valore assoluto e distanza"}
$$
|x| =
\begin{cases}
x & \text{se } x \geq 0 \\
-x & \text{se } x < 0
\end{cases}
$$
Il valore assoluto è sempre maggiore o uguale a zero e vale zero *solo se* $x = 0$. Il numero $|x - c|$ è la distanza tra $x$ e $c$ sulla retta reale; per un'espressione $A$ si ha $|A| = A$ dove $A \geq 0$ e $|A| = -A$ dove $A < 0$.
:::

:::formula{#proprieta-del-valore-assoluto titolo="Proprietà del valore assoluto"}
$$
\begin{gathered}
|ab| = |a|\,|b|, \qquad \left|\frac{a}{b}\right| = \frac{|a|}{|b|}, \qquad |-a| = |a|, \\[6pt]
|a|^2 = a^2, \qquad \sqrt{a^2} = |a|, \qquad |a + b| \leq |a| + |b| .
\end{gathered}
$$
Valgono per ogni $a, b$ reali, con $b \neq 0$ nel quoziente. L'ultima è la **disuguaglianza triangolare**, e l'uguaglianza vale se e solo se $ab \geq 0$.
:::

:::formula{#equazione-modulo-uguale-k titolo="Equazione |A| = k"}
$$
|A| = k \iff A = k \ \vee \ A = -k \qquad (k > 0)
$$
Per $k = 0$ l'equazione equivale ad $A = 0$. Per $k < 0$ non ha soluzioni, perché $|A| \geq 0$.
:::

:::formula{#equazione-due-moduli titolo="Equazione |A| = |B|"}
$$
|A| = |B| \iff A = B \ \vee \ A = -B
$$
La formula vale senza condizioni aggiuntive, perché i due membri sono entrambi maggiori o uguali a zero.
:::

:::formula{#equazione-modulo-uguale-espressione titolo="Equazione |A| = B"}
$$
|A| = B \iff
\begin{cases}
B \geq 0 \\
A = B
\end{cases}
\ \cup \
\begin{cases}
B \geq 0 \\
A = -B
\end{cases}
$$
Il primo membro non è negativo, quindi l'equazione impone la condizione $B \geq 0$. Le soluzioni che non la soddisfano si scartano.
:::

:::formula{#disequazione-modulo-minore titolo="Disequazioni |A| < k e |A| ≤ k"}
$$
|A| < k \iff -k < A < k, \qquad |A| \leq k \iff -k \leq A \leq k
$$
Valgono per $k > 0$. Per $k \leq 0$ la disequazione $|A| < k$ non ha soluzioni; la disequazione $|A| \leq 0$ equivale ad $A = 0$.
:::

:::formula{#disequazione-modulo-maggiore titolo="Disequazioni |A| > k e |A| ≥ k"}
$$
|A| > k \iff A < -k \ \vee \ A > k, \qquad |A| \geq k \iff A \leq -k \ \vee \ A \geq k
$$
Valgono per $k > 0$. Per $k = 0$ si ha $|A| > 0 \iff A \neq 0$. Per $k < 0$ la disequazione $|A| > k$ è soddisfatta in tutto il dominio di $A$, e lo stesso vale per $|A| \geq k$ con $k \leq 0$.
:::

:::formula{#disequazione-modulo-espressione titolo="Disequazioni |A| < B e |A| > B"}
$$
|A| < B \iff
\begin{cases}
A < B \\
A > -B
\end{cases}
\qquad
|A| > B \iff A > B \ \vee \ A < -B
$$
Le due forme valgono qualunque sia il segno di $B$, perché il sistema di sinistra comporta da solo $B > 0$ e l'unione di destra comprende i punti con $B < 0$. Con $\leq$ e $\geq$ le forme sono le stesse, con le disuguaglianze larghe.
:::

:::formula{#disequazione-tra-moduli titolo="Disequazione |A| < |B|"}
$$
|A| < |B| \iff A^2 < B^2 \iff (A - B)(A + B) < 0
$$
Vale perché i due membri sono maggiori o uguali a zero, quindi il confronto tra i moduli equivale al confronto tra i quadrati.
:::

:::formula{#studio-per-zone titolo="Più valori assoluti: studio per zone"}
$$
\begin{cases}
x < 0 \\
-2x + 2 = 4
\end{cases}
\ \cup \
\begin{cases}
0 \leq x < 2 \\
2 = 4
\end{cases}
\ \cup \
\begin{cases}
x \geq 2 \\
2x - 2 = 4
\end{cases}
$$
Gli argomenti di $|x| + |x - 2| = 4$ si annullano in $0$ e in $2$, che dividono la retta in tre zone; in ciascuna zona ogni modulo si scrive senza barre secondo il segno del suo argomento. Le soluzioni sono l'unione dei risultati delle zone, qui $x = -1$ e $x = 3$.
:::

## Equazioni e disequazioni irrazionali

Il motivo di ciascuna condizione è spiegato nel capitolo [Equazioni e disequazioni irrazionali](/precorso/irrazionali/teoria).

:::formula{#equazione-radice-uguale-espressione titolo="Equazione √A = B"}
$$
\sqrt{A} = B \iff
\begin{cases}
B \geq 0 \\
A = B^2
\end{cases}
$$
La condizione di esistenza $A \geq 0$ segue da $A = B^2$. Senza la condizione $B \geq 0$ l'elevamento al quadrato introduce soluzioni estranee: da $\sqrt{x} = x - 2$ si ricava $x^2 - 5x + 4 = 0$, ma la radice $x = 1$ dà $x - 2 = -1 < 0$, quindi l'unica soluzione è $x = 4$.
:::

:::formula{#equazione-due-radici titolo="Equazione √A = √B"}
$$
\sqrt{A} = \sqrt{B} \iff
\begin{cases}
A \geq 0 \\
A = B
\end{cases}
$$
La condizione $B \geq 0$ segue da $A = B$ e $A \geq 0$. Al posto di $A \geq 0$ si può imporre $B \geq 0$, scegliendo il radicando più semplice.
:::

:::formula{#disequazione-radice-minore titolo="Disequazioni √A < B e √A ≤ B"}
$$
\sqrt{A} < B \iff
\begin{cases}
A \geq 0 \\
B > 0 \\
A < B^2
\end{cases}
\qquad
\sqrt{A} \leq B \iff
\begin{cases}
A \geq 0 \\
B \geq 0 \\
A \leq B^2
\end{cases}
$$
La prima condizione è l'esistenza della radice e la seconda segue da $\sqrt{A} \geq 0$. Con entrambi i membri maggiori o uguali a zero l'elevamento al quadrato conserva il verso.
:::

:::formula{#disequazione-radice-maggiore titolo="Disequazioni √A > B e √A ≥ B"}
$$
\sqrt{A} > B \iff
\begin{cases}
B < 0 \\
A \geq 0
\end{cases}
\ \cup \
\begin{cases}
B \geq 0 \\
A > B^2
\end{cases}
$$
Dove $B < 0$ basta che la radice esista; nel secondo sistema la condizione $A \geq 0$ segue da $A > B^2$. Per $\sqrt{A} \geq B$ il secondo sistema diventa $B \geq 0$, $A \geq B^2$.
:::

:::formula{#disequazione-tra-radici titolo="Disequazione √A < √B"}
$$
\sqrt{A} < \sqrt{B} \iff
\begin{cases}
A \geq 0 \\
A < B
\end{cases}
$$
La condizione di esistenza $B \geq 0$ segue da $0 \leq A < B$.
:::

:::formula{#radici-di-indice-dispari titolo="Radici di indice dispari"}
$$
\begin{gathered}
\sqrt[3]{A} = B \iff A = B^3, \\[4pt]
\sqrt[3]{A} < B \iff A < B^3, \qquad \sqrt[3]{A} > B \iff A > B^3 .
\end{gathered}
$$
Valgono senza condizioni di esistenza e senza casi sul segno dei membri, perché $y = x^3$ è strettamente crescente su tutto $\mathbb{R}$. Lo stesso vale per ogni indice dispari $n$, con $B^n$ al posto di $B^3$.
:::

## Logaritmi

Le proprietà e i metodi risolutivi sono spiegati nel capitolo [Equazioni e disequazioni logaritmiche](/precorso/logaritmiche/teoria).

:::formula{#definizione-di-logaritmo titolo="Definizione di logaritmo"}
$$
\log_a b = c \iff a^c = b
$$
Vale per $a > 0$, $a \neq 1$ e $b > 0$. Il logaritmo esiste *solo* per argomenti positivi, perché $a^c > 0$ per ogni $c$. Il logaritmo in base $e$ si indica con $\ln$.
:::

:::formula{#identita-dei-logaritmi titolo="Identità e valori notevoli"}
$$
\log_a 1 = 0, \qquad \log_a a = 1, \qquad \log_a (a^x) = x, \qquad a^{\log_a x} = x
$$
Valgono per $a > 0$, $a \neq 1$; la terza per ogni $x$ reale, la quarta per $x > 0$. Con la terza un numero si scrive come logaritmo, per esempio $2 = \log_3 9$.
:::

:::formula{#proprieta-dei-logaritmi titolo="Proprietà dei logaritmi"}
$$
\begin{gathered}
\log_a (xy) = \log_a x + \log_a y, \qquad \log_a \frac{x}{y} = \log_a x - \log_a y, \\[6pt]
\log_a (x^p) = p \log_a x .
\end{gathered}
$$
Valgono per $a > 0$, $a \neq 1$, $x > 0$, $y > 0$ e $p$ reale. Con l'incognita negli argomenti, le condizioni di esistenza si scrivono prima di applicarle.
:::

:::formula{#logaritmo-di-una-potenza-pari titolo="Logaritmo di una potenza pari"}
$$
\log_a (x^2) = 2 \log_a |x|
$$
Vale per $x \neq 0$. L'uguaglianza $\log_a (x^2) = 2 \log_a x$ vale *solo* per $x > 0$, perciò applicata a un'equazione può restringerne il dominio.
:::

:::formula{#cambio-di-base titolo="Cambio di base"}
$$
\log_a x = \frac{\log_b x}{\log_b a}, \qquad \log_a b = \frac{1}{\log_b a}, \qquad \log_{a^k} x = \frac{1}{k} \log_a x
$$
Valgono per $a, b > 0$ diversi da $1$, $x > 0$ e $k \neq 0$; per $k = -1$ si ottiene $\log_{\frac{1}{a}} x = -\log_a x$. Per esempio $\log_4 8 = \dfrac{\log_2 8}{\log_2 4} = \dfrac{3}{2}$.
:::

:::formula{#funzione-logaritmica titolo="Funzione logaritmica"}
$$
y = \log_a x, \qquad x > 0
$$
Per $a > 1$ è strettamente crescente, per $0 < a < 1$ è strettamente decrescente; il grafico passa per $(1, 0)$ e ha la retta $x = 0$ come asintoto verticale. Per $a > 1$ il logaritmo è negativo per $0 < x < 1$ e positivo per $x > 1$.
:::

:::attenzione
Le proprietà dei logaritmi riguardano prodotti, quozienti e potenze. In generale $\log_a (x + y) \neq \log_a x + \log_a y$ e $(\log_a x)^2 \neq \log_a (x^2)$. Per esempio $\log_2 (4 + 4) = 3$ e $\log_2 4 + \log_2 4 = 4$; inoltre $(\log_2 8)^2 = 9$ e $\log_2 64 = 6$.
:::

:::formula{#equazione-logaritmi-stessa-base titolo="Equazione logₐ A = logₐ B"}
$$
\log_a A = \log_a B \iff
\begin{cases}
A = B \\
A > 0
\end{cases}
$$
Vale per $a > 0$, $a \neq 1$, perché la funzione logaritmica è iniettiva. La condizione $B > 0$ segue da $A = B$ e $A > 0$. Se l'equazione si ottiene con le proprietà da più logaritmi, le condizioni di esistenza si scrivono su tutti i logaritmi dell'equazione di partenza.
:::

:::formula{#logaritmo-uguale-a-un-numero titolo="Equazione logₐ A = k"}
$$
\log_a A = k \iff A = a^k
$$
Vale per $a > 0$, $a \neq 1$ e $k$ reale. La condizione $A > 0$ è soddisfatta, perché $a^k > 0$.
:::

:::formula{#sostituzione-logaritmica titolo="Metodo di sostituzione"}
$$
t = \log_a x \iff x = a^t
$$
Vale per $a > 0$, $a \neq 1$ e $x > 0$. La sostituzione trasforma un'equazione in $\log_a x$ e $(\log_a x)^2$ in un'equazione algebrica in $t$; ogni valore reale di $t$ è accettabile e dà la soluzione $x = a^t$.
:::

:::formula{#disequazioni-logaritmiche titolo="Disequazione logₐ A > logₐ B"}
$$
\begin{gathered}
\log_a A > \log_a B \iff
\begin{cases}
A > B \\
B > 0
\end{cases}
\quad (a > 1), \\[8pt]
\log_a A > \log_a B \iff
\begin{cases}
A < B \\
A > 0
\end{cases}
\quad (0 < a < 1).
\end{gathered}
$$
Con base maggiore di $1$ il verso si mantiene, con base tra $0$ e $1$ si rovescia. In ogni sistema la condizione di esistenza riguarda l'argomento minore, perché la positività dell'altro segue dalla disuguaglianza; con $\geq$, $<$, $\leq$ la regola è la stessa.
:::

:::formula{#disequazione-logaritmo-numero titolo="Disequazione logₐ A > k"}
$$
\begin{gathered}
\log_a A > k \iff A > a^k \quad (a > 1), \\[6pt]
\log_a A > k \iff
\begin{cases}
A < a^k \\
A > 0
\end{cases}
\quad (0 < a < 1).
\end{gathered}
$$
Per $\log_a A < k$ i due casi si scambiano, quindi la disequazione equivale a $0 < A < a^k$ se $a > 1$ e ad $A > a^k$ se $0 < a < 1$.
:::

## Equazioni e disequazioni esponenziali

Gli esempi con le due basi e con la sostituzione sono nel capitolo [Equazioni e disequazioni esponenziali](/precorso/esponenziali/teoria).

:::formula{#funzione-esponenziale titolo="Funzione esponenziale"}
$$
y = a^x, \qquad a^x > 0 \ \text{ per ogni } x \in \mathbb{R}
$$
Vale per $a > 0$, $a \neq 1$. Il grafico passa per $(0, 1)$ e ha l'asintoto orizzontale $y = 0$; la funzione è strettamente crescente per $a > 1$ e strettamente decrescente per $0 < a < 1$. Vale inoltre $\left(\dfrac{1}{a}\right)^x = a^{-x}$.
:::

:::formula{#equazione-stessa-base titolo="Equazione con la stessa base"}
$$
a^A = a^B \iff A = B
$$
Vale per $a > 0$, $a \neq 1$, perché la funzione esponenziale è iniettiva. I due membri si riscrivono come potenze della stessa base, per esempio $8^x = 2^{3x}$ e $\dfrac{1}{9} = 3^{-2}$.
:::

:::formula{#esponenziale-uguale-a-un-numero titolo="Equazione con secondo membro costante"}
$$
a^A = k \iff A = \log_a k
$$
Vale per $a > 0$, $a \neq 1$ e $k > 0$. Per $k \leq 0$ l'equazione non ha soluzioni, perché $a^A > 0$.
:::

:::formula{#equazione-basi-diverse titolo="Equazione con basi diverse"}
$$
a^A = b^B \iff A \log_c a = B \log_c b
$$
Vale per $a, b > 0$ e per ogni base $c > 0$ con $c \neq 1$; si ottiene applicando $\log_c$ ai due membri, che sono positivi. Per esempio $2^x = 3^{x-1}$ equivale a $x \ln 2 = (x - 1) \ln 3$, quindi $x = \dfrac{\ln 3}{\ln 3 - \ln 2}$.
:::

:::formula{#sostituzione-esponenziale titolo="Metodo di sostituzione"}
$$
t = a^x, \ t > 0 \qquad \Longrightarrow \qquad a^{2x} = t^2, \qquad a^{x+k} = a^k\, t, \qquad a^{-x} = \frac{1}{t}
$$
Vale per $a > 0$, $a \neq 1$. Le soluzioni in $t$ con $t \leq 0$ si scartano, e da ogni $t > 0$ si ricava $x = \log_a t$. Nelle disequazioni l'insieme delle soluzioni in $t$ si interseca con $t > 0$ prima di tornare alla variabile $x$.
:::

:::formula{#disequazioni-esponenziali titolo="Disequazioni con la stessa base"}
$$
\begin{gathered}
a^A > a^B \iff A > B \quad (a > 1), \\[4pt]
a^A > a^B \iff A < B \quad (0 < a < 1).
\end{gathered}
$$
Con base maggiore di $1$ il verso si mantiene, con base tra $0$ e $1$ si rovescia; lo stesso vale con $\geq$, $<$, $\leq$. Per $k > 0$ si scrive $k = a^{\log_a k}$, quindi per esempio, se $a > 1$, la disequazione $a^A > k$ equivale ad $A > \log_a k$.
:::

:::formula{#esponenziale-secondo-membro-negativo titolo="Disequazioni con secondo membro negativo o nullo"}
$$
a^A > k \ \text{ in tutto il dominio di } A, \qquad a^A < k \ \text{ mai}
$$
Valgono per $a > 0$ e $k \leq 0$, perché $a^A > 0$. Allo stesso modo $a^A \geq k$ è sempre soddisfatta e $a^A \leq k$ non ha soluzioni.
:::

## Valori notevoli e angoli associati

La circonferenza goniometrica e le sue simmetrie sono descritte nel capitolo [Equazioni e disequazioni goniometriche](/precorso/goniometriche/teoria).

:::formula{#gradi-e-radianti titolo="Gradi e radianti"}
$$
\frac{x}{\pi} = \frac{\alpha}{180^\circ}
$$
Qui $x$ è la misura in radianti e $\alpha$ la misura in gradi dello stesso angolo. Per esempio $30^\circ$, $45^\circ$, $60^\circ$, $90^\circ$ corrispondono a $\dfrac{\pi}{6}$, $\dfrac{\pi}{4}$, $\dfrac{\pi}{3}$, $\dfrac{\pi}{2}$.
:::

:::formula{#seno-coseno-tangente titolo="Seno, coseno e tangente"}
$$
\cos x = x_P, \qquad \sin x = y_P, \qquad \tan x = \frac{\sin x}{\cos x}
$$
$P$ è il punto della circonferenza goniometrica individuato dall'angolo $x$, quindi $-1 \leq \sin x \leq 1$ e $-1 \leq \cos x \leq 1$. La tangente è definita per $x \neq \dfrac{\pi}{2} + n\pi$, la cotangente $\cot x = \dfrac{\cos x}{\sin x}$ per $x \neq n\pi$, con $n \in \mathbb{Z}$.
:::

:::formula{#periodicita titolo="Periodicità"}
$$
\sin(x + 2n\pi) = \sin x, \qquad \cos(x + 2n\pi) = \cos x, \qquad \tan(x + n\pi) = \tan x
$$
Valgono per ogni $n \in \mathbb{Z}$, la terza dove la tangente è definita. Seno e coseno hanno periodo $2\pi$, la tangente ha periodo $\pi$; per $k \neq 0$ le funzioni $\sin(kx)$ e $\cos(kx)$ hanno periodo $\dfrac{2\pi}{|k|}$.
:::

:::formula{#valori-notevoli titolo="Valori notevoli di seno e coseno"}
| $x$ | $\sin x$ | $\cos x$ |
|---|---|---|
| $0$ | $0$ | $1$ |
| $\dfrac{\pi}{6}$ ($30^\circ$) | $\dfrac{1}{2}$ | $\dfrac{\sqrt{3}}{2}$ |
| $\dfrac{\pi}{4}$ ($45^\circ$) | $\dfrac{\sqrt{2}}{2}$ | $\dfrac{\sqrt{2}}{2}$ |
| $\dfrac{\pi}{3}$ ($60^\circ$) | $\dfrac{\sqrt{3}}{2}$ | $\dfrac{1}{2}$ |
| $\dfrac{\pi}{2}$ ($90^\circ$) | $1$ | $0$ |
| $\dfrac{2\pi}{3}$ ($120^\circ$) | $\dfrac{\sqrt{3}}{2}$ | $-\dfrac{1}{2}$ |
| $\dfrac{3\pi}{4}$ ($135^\circ$) | $\dfrac{\sqrt{2}}{2}$ | $-\dfrac{\sqrt{2}}{2}$ |
| $\dfrac{5\pi}{6}$ ($150^\circ$) | $\dfrac{1}{2}$ | $-\dfrac{\sqrt{3}}{2}$ |
| $\pi$ ($180^\circ$) | $0$ | $-1$ |
| $\dfrac{3\pi}{2}$ ($270^\circ$) | $-1$ | $0$ |

Gli angoli del terzo e del quarto quadrante si riconducono a questi con gli angoli associati, per esempio $\sin\dfrac{7\pi}{6} = -\sin\dfrac{\pi}{6} = -\dfrac{1}{2}$.
:::

:::formula{#valori-notevoli-tangente titolo="Valori notevoli della tangente"}
| $x$ | $\tan x$ |
|---|---|
| $0$ | $0$ |
| $\dfrac{\pi}{6}$ | $\dfrac{\sqrt{3}}{3}$ |
| $\dfrac{\pi}{4}$ | $1$ |
| $\dfrac{\pi}{3}$ | $\sqrt{3}$ |
| $\dfrac{\pi}{2}$ | non definita |

Negli altri quadranti i valori si ricavano dal periodo $\pi$ e da $\tan(-x) = -\tan x$, per esempio $\tan\dfrac{3\pi}{4} = \tan\left(-\dfrac{\pi}{4}\right) = -1$.
:::

:::formula{#identita-fondamentale titolo="Identità fondamentale e relazioni tra le funzioni"}
$$
\begin{gathered}
\sin^2 x + \cos^2 x = 1, \qquad 1 + \tan^2 x = \frac{1}{\cos^2 x}, \\[6pt]
\cos^2 x = \frac{1}{1 + \tan^2 x}, \qquad \sin^2 x = \frac{\tan^2 x}{1 + \tan^2 x} .
\end{gathered}
$$
La prima vale per ogni $x$ reale, le altre per $\cos x \neq 0$. Noto $\sin x$, si ha $\cos x = \pm\sqrt{1 - \sin^2 x}$, con il segno determinato dal quadrante dell'angolo.
:::

:::formula{#angoli-associati titolo="Angoli opposti, supplementari, esplementari e che differiscono di π"}
$$
\begin{aligned}
\sin(-x) &= -\sin x, & \cos(-x) &= \cos x \\
\sin(\pi - x) &= \sin x, & \cos(\pi - x) &= -\cos x \\
\sin(\pi + x) &= -\sin x, & \cos(\pi + x) &= -\cos x \\
\sin(2\pi - x) &= -\sin x, & \cos(2\pi - x) &= \cos x
\end{aligned}
$$
Valgono per ogni $x$ reale; perciò seno e tangente sono funzioni dispari e il coseno è pari. Per la tangente, dove è definita, $\tan(-x) = \tan(\pi - x) = \tan(2\pi - x) = -\tan x$ e $\tan(\pi + x) = \tan x$.
:::

:::formula{#angoli-complementari titolo="Angoli complementari e che differiscono di π/2"}
$$
\begin{aligned}
\sin\left(\frac{\pi}{2} - x\right) &= \cos x, & \cos\left(\frac{\pi}{2} - x\right) &= \sin x \\[4pt]
\sin\left(\frac{\pi}{2} + x\right) &= \cos x, & \cos\left(\frac{\pi}{2} + x\right) &= -\sin x \\[4pt]
\sin\left(\frac{3\pi}{2} - x\right) &= -\cos x, & \cos\left(\frac{3\pi}{2} - x\right) &= -\sin x \\[4pt]
\sin\left(\frac{3\pi}{2} + x\right) &= -\cos x, & \cos\left(\frac{3\pi}{2} + x\right) &= \sin x
\end{aligned}
$$
Valgono per ogni $x$ reale. Dove i due membri sono definiti, $\tan\left(\dfrac{\pi}{2} - x\right) = \dfrac{1}{\tan x}$ e $\tan\left(\dfrac{\pi}{2} + x\right) = -\dfrac{1}{\tan x}$.
:::

## Formule goniometriche

Le formule di addizione e di duplicazione sono enunciate nel capitolo [Equazioni e disequazioni goniometriche](/precorso/goniometriche/teoria#formule-di-addizione); le altre si ricavano da queste.

:::formula{#formule-di-addizione titolo="Formule di addizione e sottrazione"}
$$
\begin{gathered}
\sin(a \pm b) = \sin a \cos b \pm \cos a \sin b, \\[4pt]
\cos(a \pm b) = \cos a \cos b \mp \sin a \sin b, \\[4pt]
\tan(a \pm b) = \frac{\tan a \pm \tan b}{1 \mp \tan a \tan b} .
\end{gathered}
$$
Le prime due valgono per ogni $a, b$ reali, la terza dove $\tan a$, $\tan b$ e $\tan(a \pm b)$ sono definite. Per esempio $\cos\dfrac{\pi}{12} = \cos\left(\dfrac{\pi}{3} - \dfrac{\pi}{4}\right) = \dfrac{\sqrt{2} + \sqrt{6}}{4}$.
:::

:::formula{#formule-di-duplicazione titolo="Formule di duplicazione"}
$$
\begin{gathered}
\sin 2x = 2 \sin x \cos x, \\[4pt]
\cos 2x = \cos^2 x - \sin^2 x = 1 - 2\sin^2 x = 2\cos^2 x - 1, \\[4pt]
\tan 2x = \frac{2 \tan x}{1 - \tan^2 x} .
\end{gathered}
$$
Le prime due valgono per ogni $x$ reale, la terza dove $\tan x$ e $\tan 2x$ sono definite. Con la forma adatta di $\cos 2x$ un'equazione che contiene $\cos 2x$ e $\sin x$, oppure $\cos 2x$ e $\cos x$, diventa di secondo grado in una sola funzione.
:::

:::formula{#formule-di-triplicazione titolo="Formule di triplicazione"}
$$
\sin 3x = 3 \sin x - 4 \sin^3 x, \qquad \cos 3x = 4 \cos^3 x - 3 \cos x
$$
Valgono per ogni $x$ reale e si ottengono scrivendo $3x = 2x + x$ e applicando le formule di addizione e di duplicazione.
:::

:::formula{#abbassamento-di-grado titolo="Formule di abbassamento di grado"}
$$
\sin^2 x = \frac{1 - \cos 2x}{2}, \qquad \cos^2 x = \frac{1 + \cos 2x}{2}, \qquad \sin x \cos x = \frac{\sin 2x}{2}
$$
Valgono per ogni $x$ reale e seguono dalle formule di duplicazione. Trasformano un'espressione di secondo grado in seno e coseno in un'espressione di primo grado in $\sin 2x$ e $\cos 2x$.
:::

:::formula{#formule-di-bisezione titolo="Formule di bisezione"}
$$
\begin{gathered}
\sin\frac{x}{2} = \pm\sqrt{\frac{1 - \cos x}{2}}, \qquad \cos\frac{x}{2} = \pm\sqrt{\frac{1 + \cos x}{2}}, \\[6pt]
\tan\frac{x}{2} = \frac{\sin x}{1 + \cos x} = \frac{1 - \cos x}{\sin x} .
\end{gathered}
$$
Nelle prime due il segno è quello della funzione nel quadrante in cui sta $\dfrac{x}{2}$. Le due espressioni di $\tan\dfrac{x}{2}$ valgono rispettivamente per $\cos x \neq -1$ e per $\sin x \neq 0$.
:::

:::formula{#formule-parametriche titolo="Formule parametriche"}
$$
\begin{gathered}
\sin x = \frac{2t}{1 + t^2}, \qquad \cos x = \frac{1 - t^2}{1 + t^2}, \qquad \tan x = \frac{2t}{1 - t^2}, \\[6pt]
t = \tan\frac{x}{2} .
\end{gathered}
$$
Valgono per $x \neq \pi + 2n\pi$, dove $\tan\dfrac{x}{2}$ è definita, e la terza richiede anche $t \neq \pm 1$. Con questa sostituzione l'equazione $a \sin x + b \cos x = c$ diventa di secondo grado in $t$; gli angoli $x = \pi + 2n\pi$ si controllano a parte nell'equazione di partenza.
:::

:::formula{#formule-di-prostaferesi titolo="Formule di prostaferesi"}
$$
\begin{aligned}
\sin p + \sin q &= 2 \sin\frac{p + q}{2} \cos\frac{p - q}{2} \\[4pt]
\sin p - \sin q &= 2 \cos\frac{p + q}{2} \sin\frac{p - q}{2} \\[4pt]
\cos p + \cos q &= 2 \cos\frac{p + q}{2} \cos\frac{p - q}{2} \\[4pt]
\cos p - \cos q &= -2 \sin\frac{p + q}{2} \sin\frac{p - q}{2}
\end{aligned}
$$
Valgono per ogni $p, q$ reali. Trasformano una somma in un prodotto, a cui si applica la legge di annullamento del prodotto.
:::

:::formula{#formule-di-werner titolo="Formule di Werner"}
$$
\begin{aligned}
\sin a \sin b &= \frac{\cos(a - b) - \cos(a + b)}{2} \\[4pt]
\cos a \cos b &= \frac{\cos(a - b) + \cos(a + b)}{2} \\[4pt]
\sin a \cos b &= \frac{\sin(a + b) + \sin(a - b)}{2}
\end{aligned}
$$
Valgono per ogni $a, b$ reali e trasformano un prodotto in una somma.
:::

## Equazioni e disequazioni goniometriche

I metodi risolutivi, con un esempio per ciascun tipo di equazione, sono nel capitolo [Equazioni e disequazioni goniometriche](/precorso/goniometriche/teoria#equazioni-elementari).

:::formula{#equazioni-elementari titolo="Equazioni elementari"}
$$
\begin{aligned}
\sin x = k &\iff x = \alpha + 2n\pi \ \vee \ x = \pi - \alpha + 2n\pi \\
\cos x = k &\iff x = \alpha + 2n\pi \ \vee \ x = -\alpha + 2n\pi \\
\tan x = k &\iff x = \alpha + n\pi
\end{aligned}
$$
In ciascuna riga $\alpha$ è un angolo con $\sin\alpha = k$, $\cos\alpha = k$, $\tan\alpha = k$ rispettivamente, e $n \in \mathbb{Z}$. Le prime due valgono per $|k| \leq 1$, e per $|k| > 1$ le equazioni non hanno soluzioni; la terza vale per ogni $k$ reale.
:::

:::formula{#arcoseno-arcocoseno-arcotangente titolo="Arcoseno, arcocoseno e arcotangente"}
$$
\begin{aligned}
\alpha = \arcsin k &\in \left[-\frac{\pi}{2}, \frac{\pi}{2}\right] \\[4pt]
\alpha = \arccos k &\in [0, \pi] \\[4pt]
\alpha = \arctan k &\in \left(-\frac{\pi}{2}, \frac{\pi}{2}\right)
\end{aligned}
$$
Sono gli angoli che si usano come $\alpha$ quando $k$ non è un valore notevole; i primi due esistono per $|k| \leq 1$, l'arcotangente per ogni $k$ reale. Per esempio le soluzioni di $\tan x = 2$ sono $x = \arctan 2 + n\pi$.
:::

:::formula{#casi-particolari titolo="Casi particolari"}
$$
\begin{aligned}
\sin x = 0 &\iff x = n\pi, & \cos x = 0 &\iff x = \frac{\pi}{2} + n\pi \\[4pt]
\sin x = 1 &\iff x = \frac{\pi}{2} + 2n\pi, & \cos x = 1 &\iff x = 2n\pi \\[4pt]
\sin x = -1 &\iff x = -\frac{\pi}{2} + 2n\pi, & \cos x = -1 &\iff x = \pi + 2n\pi
\end{aligned}
$$
Valgono con $n \in \mathbb{Z}$. In questi casi le due famiglie di soluzioni delle equazioni elementari si riducono a una.
:::

:::formula{#uguaglianza-di-due-funzioni titolo="Uguaglianza di due seni, di due coseni, di due tangenti"}
$$
\begin{aligned}
\sin A = \sin B &\iff A = B + 2n\pi \ \vee \ A = \pi - B + 2n\pi \\
\cos A = \cos B &\iff A = B + 2n\pi \ \vee \ A = -B + 2n\pi \\
\tan A = \tan B &\iff A = B + n\pi
\end{aligned}
$$
Valgono con $n \in \mathbb{Z}$, la terza dove $\tan A$ e $\tan B$ sono definite. L'equazione $\sin A = \cos B$ si riconduce alla prima scrivendo $\cos B = \sin\left(\dfrac{\pi}{2} - B\right)$.
:::

:::formula{#secondo-grado-in-seno-o-coseno titolo="Equazioni di secondo grado in seno o coseno"}
$$
a \sin^2 x + b \sin x + c = 0 \quad \xrightarrow{\ t \, = \, \sin x\ } \quad
\begin{cases}
a t^2 + b t + c = 0 \\
-1 \leq t \leq 1
\end{cases}
$$
Ogni radice $t$ con $|t| \leq 1$ dà l'equazione elementare $\sin x = t$, e le radici con $|t| > 1$ si scartano; lo stesso vale con $t = \cos x$. Se compaiono $\sin^2 x$ e $\cos x$, la sostituzione $\sin^2 x = 1 - \cos^2 x$ porta l'equazione in una sola funzione.
:::

:::formula{#equazioni-omogenee titolo="Equazioni omogenee di secondo grado"}
$$
a \sin^2 x + b \sin x \cos x + c \cos^2 x = 0 \iff a \tan^2 x + b \tan x + c = 0
$$
Vale per $a \neq 0$, perché in questo caso i punti con $\cos x = 0$ non sono soluzioni e la divisione per $\cos^2 x$ non perde soluzioni. Per $a = 0$ si raccoglie $\cos x$. Con un termine noto $d$ al secondo membro si scrive $d = d\,(\sin^2 x + \cos^2 x)$ e l'equazione diventa omogenea.
:::

:::formula{#metodo-angolo-aggiunto titolo="Metodo dell'angolo aggiunto"}
$$
\begin{gathered}
a \sin x + b \cos x = R \sin(x + \varphi), \qquad R = \sqrt{a^2 + b^2}, \\[6pt]
\begin{cases}
\cos\varphi = \dfrac{a}{R} \\[8pt]
\sin\varphi = \dfrac{b}{R}
\end{cases}
\end{gathered}
$$
Vale per $a$ e $b$ non entrambi nulli. L'equazione lineare $a \sin x + b \cos x = c$ diventa $\sin(x + \varphi) = \dfrac{c}{R}$, che ha soluzioni *se e solo se* $|c| \leq R$.
:::

:::attenzione
La divisione per un fattore che può annullarsi fa perdere soluzioni. In $\sin x \cos x = \cos x$ il raccoglimento dà $\cos x\,(\sin x - 1) = 0$, con soluzioni $x = \dfrac{\pi}{2} + n\pi$; dividendo per $\cos x$ resterebbe soltanto $\sin x = 1$, cioè $x = \dfrac{\pi}{2} + 2n\pi$.
:::

:::formula{#disequazioni-goniometriche titolo="Disequazioni elementari"}
$$
\begin{aligned}
\sin x > k &\iff \alpha + 2n\pi < x < \pi - \alpha + 2n\pi \\
\sin x < k &\iff \pi - \alpha + 2n\pi < x < 2\pi + \alpha + 2n\pi \\
\cos x > k &\iff -\beta + 2n\pi < x < \beta + 2n\pi \\
\cos x < k &\iff \beta + 2n\pi < x < 2\pi - \beta + 2n\pi \\
\tan x > m &\iff \gamma + n\pi < x < \frac{\pi}{2} + n\pi
\end{aligned}
$$
Le prime quattro valgono per $|k| < 1$, con $\alpha = \arcsin k$ e $\beta = \arccos k$; l'ultima vale per ogni $m$ reale, con $\gamma = \arctan m$, e $n \in \mathbb{Z}$. Per $k \geq 1$ la disequazione $\sin x > k$ non ha soluzioni, per $k < -1$ è soddisfatta da ogni $x$ e per $k = -1$ da ogni $x$ con $\sin x \neq -1$; lo stesso vale per il coseno.
:::

## Retta e piano cartesiano

Le formule della retta sono ricavate nel capitolo [Geometria analitica e coniche](/precorso/geometria-analitica/teoria).

:::formula{#distanza-e-punto-medio titolo="Distanza tra due punti e punto medio"}
$$
\overline{AB} = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}, \qquad M\left(\frac{x_1 + x_2}{2}, \frac{y_1 + y_2}{2}\right)
$$
Valgono per $A(x_1, y_1)$ e $B(x_2, y_2)$. La distanza è il teorema di Pitagora applicato al triangolo di cateti $|x_2 - x_1|$ e $|y_2 - y_1|$.
:::

:::formula{#equazione-della-retta titolo="Equazione della retta"}
$$
y = mx + q, \qquad ax + by + c = 0, \qquad m = -\frac{a}{b}, \quad q = -\frac{c}{b}
$$
La forma esplicita descrive le rette non verticali, la forma implicita, con $(a, b) \neq (0, 0)$, descrive ogni retta; il passaggio dall'una all'altra vale per $b \neq 0$. Le rette verticali hanno equazione $x = k$, quelle orizzontali $y = k$.
:::

:::formula{#coefficiente-angolare titolo="Coefficiente angolare e retta per un punto"}
$$
m = \frac{y_2 - y_1}{x_2 - x_1}, \qquad y - y_0 = m\,(x - x_0)
$$
La prima è il coefficiente angolare della retta per $A(x_1, y_1)$ e $B(x_2, y_2)$ e vale per $x_1 \neq x_2$. La seconda è la retta di coefficiente angolare $m$ passante per $P(x_0, y_0)$; al variare di $m$ descrive il fascio di rette non verticali per $P$.
:::

:::formula{#retta-per-due-punti titolo="Retta per due punti"}
$$
\frac{y - y_1}{y_2 - y_1} = \frac{x - x_1}{x_2 - x_1}
$$
Vale per $x_1 \neq x_2$ e $y_1 \neq y_2$. Se $x_1 = x_2$ la retta è $x = x_1$, se $y_1 = y_2$ è $y = y_1$.
:::

:::formula{#parallele-e-perpendicolari titolo="Rette parallele e perpendicolari"}
$$
r \parallel s \iff m_1 = m_2, \qquad r \perp s \iff m_1 m_2 = -1
$$
Valgono per rette non verticali di coefficienti angolari $m_1$ e $m_2$; la perpendicolare ha quindi coefficiente $-\dfrac{1}{m_1}$. In forma implicita le rette $ax + by + c = 0$ e $a'x + b'y + c' = 0$ sono parallele se e solo se $ab' - a'b = 0$ e perpendicolari se e solo se $aa' + bb' = 0$.
:::

:::formula{#distanza-punto-retta titolo="Distanza di un punto da una retta"}
$$
d(P, r) = \frac{|a x_0 + b y_0 + c|}{\sqrt{a^2 + b^2}}
$$
Vale per il punto $P(x_0, y_0)$ e la retta $r$ scritta in forma implicita $ax + by + c = 0$.
:::

:::formula{#intersezione-di-due-rette titolo="Intersezione di due rette"}
$$
\begin{cases}
ax + by + c = 0 \\
a'x + b'y + c' = 0
\end{cases}
$$
Le soluzioni del sistema sono le coordinate dei punti comuni alle due rette. Il sistema ha una sola soluzione se $ab' - a'b \neq 0$, nessuna se le rette sono parallele e distinte, infinite se coincidono.
:::

## Coniche

Le definizioni come luoghi geometrici e il procedimento di riduzione a forma canonica sono nel capitolo [Geometria analitica e coniche](/precorso/geometria-analitica/teoria#riconoscere-una-conica).

:::formula{#parabola titolo="Parabola con asse verticale"}
$$
y = ax^2 + bx + c, \qquad V\left(-\frac{b}{2a}, -\frac{\Delta}{4a}\right), \qquad x = -\frac{b}{2a}
$$
Vale per $a \neq 0$, con $\Delta = b^2 - 4ac$; la retta $x = -\dfrac{b}{2a}$ è l'asse di simmetria, e l'ordinata del vertice si ottiene anche sostituendo $x_V$ nell'equazione. La concavità è rivolta verso l'alto per $a > 0$ e verso il basso per $a < 0$; la parabola incontra l'asse $y$ in $(0, c)$ e l'asse $x$ nelle soluzioni di $ax^2 + bx + c = 0$.
:::

:::formula{#fuoco-e-direttrice titolo="Fuoco e direttrice della parabola"}
$$
F\left(-\frac{b}{2a}, \frac{1 - \Delta}{4a}\right), \qquad y = -\frac{1 + \Delta}{4a}
$$
Valgono per la parabola $y = ax^2 + bx + c$ con $a \neq 0$. La parabola è il luogo dei punti equidistanti dal fuoco $F$ e dalla direttrice.
:::

:::formula{#parabola-asse-orizzontale titolo="Parabola con asse orizzontale"}
$$
x = ay^2 + by + c, \qquad V\left(-\frac{\Delta}{4a}, -\frac{b}{2a}\right), \qquad y = -\frac{b}{2a}
$$
Vale per $a \neq 0$, con $\Delta = b^2 - 4ac$. Si ottiene dalla parabola con asse verticale scambiando $x$ e $y$; la concavità è rivolta verso destra per $a > 0$ e verso sinistra per $a < 0$.
:::

:::formula{#circonferenza titolo="Circonferenza"}
$$
(x - x_0)^2 + (y - y_0)^2 = r^2, \qquad x^2 + y^2 + ax + by + c = 0
$$
La prima è la circonferenza di centro $C(x_0, y_0)$ e raggio $r > 0$. Sviluppando i quadrati si ottiene la seconda, con $a = -2x_0$, $b = -2y_0$ e $c = x_0^2 + y_0^2 - r^2$.
:::

:::formula{#centro-e-raggio titolo="Centro e raggio dalla forma generale"}
$$
C\left(-\frac{a}{2}, -\frac{b}{2}\right), \qquad r = \sqrt{\frac{a^2}{4} + \frac{b^2}{4} - c}
$$
L'equazione $x^2 + y^2 + ax + by + c = 0$ rappresenta una circonferenza *solo se* $\dfrac{a^2}{4} + \dfrac{b^2}{4} - c > 0$. Se la quantità è nulla l'equazione rappresenta il solo punto $C$, se è negativa nessun punto.
:::

:::formula{#completamento-del-quadrato titolo="Completamento del quadrato"}
$$
x^2 + kx = \left(x + \frac{k}{2}\right)^2 - \frac{k^2}{4}, \qquad Ax^2 + Bx = A\left(x + \frac{B}{2A}\right)^2 - \frac{B^2}{4A}
$$
La prima vale per ogni $k$ reale, la seconda per $A \neq 0$. Con il completamento del quadrato in $x$ e in $y$ un'equazione di secondo grado senza il termine $xy$ si porta in forma canonica.
:::

:::formula{#retta-e-circonferenza titolo="Posizione di una retta rispetto a una circonferenza"}
$$
\begin{aligned}
d(C, s) < r &\iff s \ \text{è secante} \\
d(C, s) = r &\iff s \ \text{è tangente} \\
d(C, s) > r &\iff s \ \text{è esterna}
\end{aligned}
$$
Qui $d(C, s)$ è la distanza del centro $C$ dalla retta $s$, calcolata con la formula della distanza di un punto da una retta, e $r$ è il raggio.
:::

:::formula{#ellisse titolo="Ellisse"}
$$
\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1, \qquad c^2 = a^2 - b^2 \quad (a > b)
$$
Vale per $a, b > 0$. I vertici sono $(\pm a, 0)$ e $(0, \pm b)$; se $a > b$ i fuochi sono $(\pm c, 0)$, se $b > a$ sono $(0, \pm c)$ con $c^2 = b^2 - a^2$. L'eccentricità è il rapporto tra $c$ e il semiasse maggiore ed è minore di $1$.
:::

:::formula{#iperbole titolo="Iperbole"}
$$
\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1, \qquad c^2 = a^2 + b^2, \qquad y = \pm\frac{b}{a}\,x
$$
Vale per $a, b > 0$. I vertici sono $(\pm a, 0)$, i fuochi $(\pm c, 0)$ e le rette $y = \pm\dfrac{b}{a}x$ sono gli asintoti. L'equazione $\dfrac{x^2}{a^2} - \dfrac{y^2}{b^2} = -1$ rappresenta l'iperbole con vertici $(0, \pm b)$, fuochi $(0, \pm c)$ e gli stessi asintoti.
:::

:::formula{#iperbole-equilatera titolo="Iperbole equilatera riferita agli asintoti"}
$$
xy = k
$$
Vale per $k \neq 0$, e gli asintoti sono gli assi cartesiani. Per $k > 0$ i rami stanno nel primo e nel terzo quadrante, con vertici $(\sqrt{k}, \sqrt{k})$ e $(-\sqrt{k}, -\sqrt{k})$; per $k < 0$ stanno nel secondo e nel quarto.
:::

:::formula{#funzione-omografica titolo="Funzione omografica"}
$$
y = \frac{ax + b}{cx + d}, \qquad x = -\frac{d}{c}, \qquad y = \frac{a}{c}
$$
Vale per $c \neq 0$ e $ad - bc \neq 0$. Il grafico è un'iperbole equilatera con asintoto verticale $x = -\dfrac{d}{c}$ e asintoto orizzontale $y = \dfrac{a}{c}$; per $ad - bc = 0$ la funzione è costante dove è definita.
:::

:::formula{#riconoscere-una-conica titolo="Riconoscere una conica"}
$$
Ax^2 + Cy^2 + Dx + Ey + F = 0
$$
- uno solo tra $A$ e $C$ è nullo e l'altra variabile compare al primo grado: parabola;
- $A = C \neq 0$: circonferenza;
- $A$ e $C$ dello stesso segno e diversi: ellisse;
- $A$ e $C$ di segno opposto: iperbole.

Il completamento dei quadrati conferma il tipo e può dare un caso degenere: un punto, nessun punto o una coppia di rette.
:::

:::formula{#conica-traslata titolo="Ellisse e iperbole traslate"}
$$
\frac{(x - x_0)^2}{a^2} + \frac{(y - y_0)^2}{b^2} = 1, \qquad \frac{(x - x_0)^2}{a^2} - \frac{(y - y_0)^2}{b^2} = 1
$$
Sono l'ellisse e l'iperbole canoniche traslate del vettore $(x_0, y_0)$, perciò centro, vertici, fuochi e asintoti si ottengono da quelli canonici sommando $x_0$ alle ascisse e $y_0$ alle ordinate.
:::

:::formula{#retta-e-conica titolo="Posizione di una retta rispetto a una conica"}
$$
\begin{cases}
y = mx + q \\
f(x, y) = 0
\end{cases}
\quad \longrightarrow \quad \alpha x^2 + \beta x + \gamma = 0
$$
Sostituendo l'equazione della retta in quella della conica $f(x, y) = 0$ si ottiene l'equazione risolvente; se è di secondo grado, la retta è secante per $\Delta > 0$, tangente per $\Delta = 0$ ed esterna per $\Delta < 0$. Le tangenti condotte da un punto $P(x_0, y_0)$ si trovano imponendo $\Delta = 0$ alla retta $y - y_0 = m(x - x_0)$; la retta verticale $x = x_0$ si controlla a parte.
:::
