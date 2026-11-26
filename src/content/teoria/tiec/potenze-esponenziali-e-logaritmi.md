---
titolo: Potenze, esponenziali e logaritmi
sommario: Proprietà delle potenze e delle radici, notazione scientifica, confronto tra potenze, funzione esponenziale e logaritmo, con le equazioni e le disequazioni esponenziali e logaritmiche che compaiono nei quesiti del TIEC.
---

## Potenze con esponente intero

:::definizione{#potenza titolo="Potenza con esponente naturale"}
Dati un numero reale $a$ e un numero naturale $n \geq 1$, la **potenza** $a^n$ è il prodotto di $n$ fattori uguali ad $a$:
$$
a^n = \underbrace{a \cdot a \cdot \ldots \cdot a}_{n \text{ fattori}} .
$$
Il numero $a$ si chiama **base** e $n$ si chiama **esponente**. Per esempio $2^5 = 2 \cdot 2 \cdot 2 \cdot 2 \cdot 2 = 32$ e $(-3)^3 = (-3) \cdot (-3) \cdot (-3) = -27$. Con una base negativa la potenza è positiva se l'esponente è pari e negativa se l'esponente è dispari, perché ogni coppia di fattori negativi dà un prodotto positivo. Quindi $(-2)^4 = 16$, mentre $(-2)^5 = -32$.
:::

:::definizione{#esponente-zero-e-negativo titolo="Esponente zero ed esponente negativo"}
Per ogni numero reale $a \neq 0$ e ogni numero naturale $n$ si pone
$$
a^0 = 1,
\qquad
a^{-n} = \frac{1}{a^n} .
$$
Le due definizioni sono scelte in modo che le proprietà delle potenze restino vere anche per questi esponenti. Il quoziente $\dfrac{a^3}{a^3}$ vale $1$, e sottraendo gli esponenti si ottiene $a^{3-3} = a^0$; perciò $a^0$ deve valere $1$. Un esponente negativo indica il reciproco della potenza:
$$
2^{-3} = \frac{1}{2^3} = \frac{1}{8},
\qquad
\left( \frac{2}{5} \right)^{-2} = \left( \frac{5}{2} \right)^{2} = \frac{25}{4} .
$$
Il segno meno all'esponente non cambia il segno del risultato, e infatti $2^{-3}$ è un numero positivo.
:::

:::teorema{#proprieta-potenze titolo="Proprietà delle potenze"}
Per ogni coppia di numeri reali $a$, $b$ diversi da zero e ogni coppia di interi $m$, $n$ valgono le uguaglianze seguenti.

- Prodotto di potenze con la stessa base: $a^m \cdot a^n = a^{m+n}$.
- Quoziente di potenze con la stessa base: $\dfrac{a^m}{a^n} = a^{m-n}$.
- Potenza di una potenza: $\left(a^m\right)^n = a^{m \cdot n}$.
- Potenza di un prodotto e di un quoziente: $(a\,b)^n = a^n\, b^n$ e $\left(\dfrac{a}{b}\right)^n = \dfrac{a^n}{b^n}$.

Le regole si ottengono contando i fattori. In $a^3 \cdot a^2$ ci sono $3 + 2 = 5$ fattori uguali ad $a$, e in $\left(a^3\right)^2$ ci sono due gruppi di $3$ fattori, cioè $6$ fattori. Le proprietà servono a semplificare un'espressione scrivendo tutti i numeri come potenze della stessa base:
$$
\frac{4^3 \cdot 8}{2^5} = \frac{2^6 \cdot 2^3}{2^5} = 2^{6 + 3 - 5} = 2^4 = 16 .
$$
:::

:::attenzione
Per la somma di potenze *non* esiste una regola analoga a quella del prodotto. Per esempio $2^3 + 2^3 = 16$, mentre $2^{3+3} = 64$. Una somma di potenze uguali si semplifica raccogliendo, per esempio $2^3 + 2^3 = 2 \cdot 2^3 = 2^4$, e allo stesso modo $5^{8} + 5^{8} + 5^{8} + 5^{8} + 5^{8} = 5 \cdot 5^{8} = 5^{9}$.

Anche le scritture seguenti indicano numeri diversi:
- $-2^2 = -4$, perché l'esponente riguarda solo $2$, mentre $(-2)^2 = 4$;
- $\left(2^3\right)^2 = 2^6 = 64$, mentre $2^{3^2} = 2^9 = 512$, perché nella seconda si calcola prima l'esponente $3^2 = 9$.
:::

## Radici e potenze con esponente razionale

:::definizione{#radice titolo="Radice n-esima"}
Sia $n \geq 2$ un numero naturale. Per $a \geq 0$ la **radice $n$-esima** di $a$, scritta $\sqrt[n]{a}$, è l'unico numero $b \geq 0$ tale che $b^n = a$. Il numero $n$ si chiama **indice** della radice; per $n = 2$ si scrive $\sqrt{a}$. Per esempio $\sqrt[3]{8} = 2$ perché $2^3 = 8$, e $\sqrt[4]{81} = 3$ perché $3^4 = 81$. La radice serve a risalire alla base quando si conoscono la potenza e l'esponente.

- Se $n$ è dispari, la radice si definisce anche per $a < 0$ ed è negativa: $\sqrt[3]{-27} = -3$.
- Se $n$ è pari e $a < 0$, la radice non esiste tra i numeri reali, perché una potenza con esponente pari non è mai negativa.

Per la stessa ragione $\sqrt{x^2} = |x|$; per esempio $\sqrt{(-5)^2} = \sqrt{25} = 5$.
:::

:::definizione{#esponente-razionale titolo="Potenza con esponente frazionario"}
Per $a > 0$ e per due interi $m$ e $n$ con $n \geq 2$ si pone
$$
a^{\frac{m}{n}} = \sqrt[n]{a^m} = \left( \sqrt[n]{a} \right)^m .
$$
La definizione mantiene vere le proprietà delle potenze. Poiché $\left( a^{\frac{1}{n}} \right)^n = a^{\frac{1}{n} \cdot n} = a$, il numero $a^{\frac{1}{n}}$ deve essere la radice $n$-esima di $a$. Il calcolo è più breve se si estrae prima la radice e poi si eleva:
$$
8^{\frac{2}{3}} = \left( \sqrt[3]{8} \right)^2 = 2^2 = 4,
\qquad
16^{-\frac{3}{4}} = \frac{1}{\left( \sqrt[4]{16} \right)^3} = \frac{1}{2^3} = \frac{1}{8} .
$$
Scrivendo le radici come potenze, tutti i calcoli con le radici si riconducono alle proprietà delle potenze.
:::

:::teorema{#proprieta-radici titolo="Proprietà delle radici"}
Per $a, b > 0$ e per $n, k \geq 2$ naturali valgono le uguaglianze seguenti.

- Radice di un prodotto e di un quoziente: $\sqrt[n]{a\,b} = \sqrt[n]{a}\,\sqrt[n]{b}$ e $\sqrt[n]{\dfrac{a}{b}} = \dfrac{\sqrt[n]{a}}{\sqrt[n]{b}}$.
- Radice di una radice: $\sqrt[k]{\sqrt[n]{a}} = \sqrt[k \cdot n]{a}$.
- Proprietà invariantiva: $\sqrt[n]{a^m} = \sqrt[n \cdot k]{a^{m \cdot k}}$.

Sono le proprietà delle potenze scritte con gli esponenti frazionari; per esempio $\sqrt[3]{\sqrt{a}} = \left( a^{\frac{1}{2}} \right)^{\frac{1}{3}} = a^{\frac{1}{6}} = \sqrt[6]{a}$. Servono a semplificare le radici e a moltiplicare radici con indici diversi:
$$
\sqrt{12} = \sqrt{4 \cdot 3} = 2\sqrt{3},
\qquad
\sqrt{2} \cdot \sqrt[3]{2} = 2^{\frac{1}{2} + \frac{1}{3}} = 2^{\frac{5}{6}} = \sqrt[6]{32} .
$$
:::

:::attenzione
La radice di una somma *non* è la somma delle radici. Per esempio $\sqrt{9 + 16} = \sqrt{25} = 5$, mentre $\sqrt{9} + \sqrt{16} = 3 + 4 = 7$.
:::

## Notazione scientifica e confronto tra potenze

:::definizione{#notazione-scientifica titolo="Notazione scientifica"}
Un numero positivo è scritto in **notazione scientifica** quando ha la forma
$$
k \cdot 10^n
\qquad\text{con}\qquad
1 \leq k < 10
\quad\text{e}\quad
n \text{ intero} .
$$
Il coefficiente $k$ ha una sola cifra diversa da zero prima della virgola, e l'esponente $n$ conta di quanti posti si sposta la virgola. Per esempio $45\,000 = 4{,}5 \cdot 10^4$ e $0{,}0032 = 3{,}2 \cdot 10^{-3}$. La notazione serve a scrivere numeri molto grandi o molto piccoli e a calcolare con le proprietà delle potenze, trattando a parte i coefficienti e le potenze di $10$:
$$
\frac{3{,}6 \cdot 10^{9}}{1{,}2 \cdot 10^{4}} = \frac{3{,}6}{1{,}2} \cdot 10^{9-4} = 3 \cdot 10^{5} .
$$
:::

:::osservazione{#riduzione-notazione-scientifica titolo="Coefficiente da riportare tra 1 e 10"}
Dopo un prodotto o un quoziente il coefficiente può risultare minore di $1$ oppure maggiore o uguale a $10$. In questo caso si sposta la virgola del coefficiente e si corregge l'esponente, che aumenta di $1$ per ogni posto a sinistra e diminuisce di $1$ per ogni posto a destra. Per esempio
$$
(4 \cdot 10^{5}) \cdot (5 \cdot 10^{-2}) = 20 \cdot 10^{3} = 2 \cdot 10^{4},
\qquad
\frac{2 \cdot 10^{6}}{5 \cdot 10^{2}} = 0{,}4 \cdot 10^{4} = 4 \cdot 10^{3} .
$$
Il valore del numero non cambia, perché il coefficiente viene diviso per $10$ e la potenza moltiplicata per $10$, o viceversa.
:::

:::teorema{#confronto-potenze titolo="Confronto tra potenze"}
Due potenze con basi positive ed esponenti positivi si confrontano direttamente in due casi.

- Stessa base $a > 1$: è maggiore la potenza con l'esponente maggiore, quindi $3^{12} > 3^{10}$. Se la base è compresa tra $0$ e $1$ vale l'ordine opposto: $\left( \dfrac{1}{2} \right)^{5} < \left( \dfrac{1}{2} \right)^{3}$.
- Stesso esponente $n > 0$: è maggiore la potenza con la base maggiore, quindi $5^{7} > 4^{7}$.

Quando basi ed esponenti sono entrambi diversi, le proprietà delle potenze permettono di ricondursi a uno dei due casi. Per confrontare $2^{30}$ e $3^{20}$ si scrivono le due potenze con esponente $10$:
$$
2^{30} = \left( 2^3 \right)^{10} = 8^{10},
\qquad
3^{20} = \left( 3^2 \right)^{10} = 9^{10},
$$
quindi $2^{30} < 3^{20}$. Per confrontare $4^{15}$ e $8^{11}$ si scrivono le due potenze con base $2$, ottenendo $4^{15} = 2^{30}$ e $8^{11} = 2^{33}$; perciò $4^{15} < 8^{11}$.
:::

## La funzione esponenziale

:::definizione{#funzione-esponenziale titolo="Funzione esponenziale"}
Fissato un numero reale $a > 0$ con $a \neq 1$, la **funzione esponenziale** di base $a$ è
$$
y = a^x ,
$$
definita per ogni $x$ reale. La base è positiva perché con $a < 0$ potenze come $a^{\frac{1}{2}}$ non esistono, ed è diversa da $1$ perché $1^x = 1$ per ogni $x$. Per ogni base ammessa il grafico ha tre proprietà.

- Passa per il punto $(0;1)$, perché $a^0 = 1$, e per il punto $(1;a)$.
- Sta tutto sopra l'asse $x$, perché $a^x > 0$ per ogni $x$.
- Si avvicina all'asse $x$ da un lato senza toccarlo, quindi l'asse $x$ è un **asintoto orizzontale**.

La funzione esponenziale descrive le grandezze che vengono moltiplicate per lo stesso fattore in intervalli di tempo uguali. Un capitale che cresce del $10\%$ all'anno, con gli interessi che si sommano al capitale ogni anno, è moltiplicato ogni anno per $1{,}1$; quindi un capitale iniziale $C$ dopo $x$ anni vale $C \cdot 1{,}1^{x}$.
:::

:::teorema{#monotonia-esponenziale titolo="Esponenziale crescente e decrescente"}
La funzione $y = a^x$ è crescente o decrescente secondo la base.

- Se $a > 1$, la funzione è **crescente**: a un esponente maggiore corrisponde una potenza maggiore.
- Se $0 < a < 1$, la funzione è **decrescente**: a un esponente maggiore corrisponde una potenza minore.

In entrambi i casi la funzione assume valori diversi in punti diversi, perciò
$$
a^{u} = a^{v} \iff u = v .
$$
I grafici di $y = 2^x$ e di $y = \left( \dfrac{1}{2} \right)^x$ sono simmetrici rispetto all'asse $y$, perché $\left( \dfrac{1}{2} \right)^x = 2^{-x}$. Queste due proprietà permettono di risolvere le equazioni e le disequazioni esponenziali.

::grafico{f="2^x;0.5^x" xmin=-3.5 xmax=3.5 ymin=-0.5 ymax=9 punti="0,1,pieno;1,2,pieno;-1,2,pieno" asintoti="y=0" legenda="y = 2^x;y = \left(\frac{1}{2}\right)^x" titolo="$y = 2^x$ è crescente e $y = \left(\dfrac{1}{2}\right)^x$ è decrescente; i due grafici passano per $(0;1)$ e sono simmetrici rispetto all'asse $y$"}

:::

:::osservazione{#confronto-basi titolo="Confronto tra esponenziali con basi diverse"}
Se $1 < a < b$, allora $a^x < b^x$ per $x > 0$ e $a^x > b^x$ per $x < 0$, mentre per $x = 0$ le due potenze valgono entrambe $1$. Per esempio $2^{3} = 8 < 27 = 3^{3}$, mentre $2^{-1} = \dfrac{1}{2}$ è maggiore di $3^{-1} = \dfrac{1}{3}$. È la proprietà del confronto tra potenze con lo stesso esponente, letta sul grafico, dove a destra dell'asse $y$ il grafico di $3^x$ sta sopra quello di $2^x$ e a sinistra sta sotto.

::grafico{f="2^x;3^x" xmin=-3.5 xmax=3 ymin=-0.5 ymax=9 punti="0,1,pieno;1,2,pieno;1,3,pieno" segmenti="1,0,1,3" asintoti="y=0" legenda="y = 2^x;y = 3^x" titolo="Per $x > 0$ il grafico di $y = 3^x$ sta sopra quello di $y = 2^x$; per $x < 0$ sta sotto"}

:::

## Logaritmi

:::definizione{#logaritmo titolo="Logaritmo"}
Siano $a > 0$ con $a \neq 1$ e $b > 0$. Il **logaritmo in base $a$ di $b$**, scritto $\log_a b$, è l'esponente a cui si deve elevare $a$ per ottenere $b$:
$$
\log_a b = c \iff a^c = b .
$$
Il numero $a$ si chiama **base** e $b$ si chiama **argomento**. Per esempio $\log_2 8 = 3$ perché $2^3 = 8$, $\log_{10} 0{,}01 = -2$ perché $10^{-2} = 0{,}01$, e $\log_3 \sqrt{3} = \dfrac{1}{2}$ perché $3^{\frac{1}{2}} = \sqrt{3}$. Il logaritmo serve a trovare un esponente incognito. L'equazione $2^x = 8$ ha soluzione $x = 3$, che si trova a mente; l'equazione $2^x = 5$ ha soluzione $x = \log_2 5$, che è un numero compreso tra $2$ e $3$ perché $2^2 < 5 < 2^3$.
:::

:::teorema{#condizioni-esistenza-logaritmo titolo="Condizioni di esistenza del logaritmo"}
Il logaritmo $\log_a b$ esiste se e solo se le tre condizioni seguenti sono soddisfatte insieme:
$$
\begin{cases}
b > 0 \\
a > 0 \\
a \neq 1
\end{cases}
$$
La condizione sull'argomento dipende dal fatto che una potenza di base positiva è sempre positiva. Nessun esponente dà quindi $0$ o un numero negativo, e $\log_2 0$ e $\log_2 (-4)$ non esistono. Nelle equazioni e nelle disequazioni l'argomento contiene spesso l'incognita, e la condizione di esistenza diventa una disequazione; per esempio $\log_3 (x - 2)$ esiste se $x - 2 > 0$, cioè per $x > 2$.
:::

:::teorema{#valori-notevoli-logaritmo titolo="Valori notevoli del logaritmo"}
Per ogni base $a > 0$ con $a \neq 1$ valgono
$$
\log_a 1 = 0,
\qquad
\log_a a = 1,
\qquad
\log_a a^n = n,
\qquad
a^{\log_a b} = b \quad (b > 0) .
$$
Le prime tre uguaglianze traducono $a^0 = 1$, $a^1 = a$ e $a^n = a^n$; l'ultima dice che $\log_a b$ è proprio l'esponente che, dato ad $a$, produce $b$. Servono a calcolare a mente i logaritmi il cui argomento è una potenza della base:
$$
\log_5 125 = \log_5 5^3 = 3,
\qquad
\log_2 \frac{1}{16} = \log_2 2^{-4} = -4,
\qquad
\log_{\frac{1}{3}} 9 = -2 ,
$$
dove l'ultimo valore segue da $\left( \dfrac{1}{3} \right)^{-2} = 3^2 = 9$.
:::

:::definizione{#funzione-logaritmica titolo="Funzione logaritmica"}
Per $a > 0$ con $a \neq 1$ la **funzione logaritmica** $y = \log_a x$ è definita per $x > 0$. Il suo grafico è il simmetrico del grafico di $y = a^x$ rispetto alla retta $y = x$, perché il punto $(u;v)$ sta sul grafico di $y = a^x$ se e solo se il punto $(v;u)$ sta sul grafico di $y = \log_a x$. Dalle proprietà dell'esponenziale seguono quelle del logaritmo.

- Il grafico passa per $(1;0)$ e per $(a;1)$, sta tutto a destra dell'asse $y$, e l'asse $y$ è un **asintoto verticale**.
- Se $a > 1$ la funzione è crescente; se $0 < a < 1$ è decrescente.
- Se $a > 1$, il logaritmo è negativo per $0 < x < 1$ e positivo per $x > 1$; se $0 < a < 1$ i segni sono scambiati.

Il segno di un logaritmo si legge quindi senza calcolarlo. Per esempio $\log_3 0{,}5 < 0$ perché la base è maggiore di $1$ e l'argomento è minore di $1$, mentre $\log_{\frac{1}{2}} 5 < 0$ perché la base è minore di $1$ e l'argomento è maggiore di $1$.

::grafico{f="2^x;log(x)/log(2);x" xmin=-3 xmax=6 ymin=-3 ymax=6 uguale=1 punti="0,1,pieno;1,0,pieno;1,2,pieno;2,1,pieno" legenda="y = 2^x;y = \log_2 x;y = x" titolo="Il grafico di $y = \log_2 x$ è il simmetrico di quello di $y = 2^x$ rispetto alla retta $y = x$, e al punto $(1;2)$ corrisponde il punto $(2;1)$"}

::grafico{f="log(x)/log(2);log(x)/log(0.5)" xmin=-0.5 xmax=8.5 ymin=-3.5 ymax=3.5 punti="1,0,pieno;2,1,pieno;2,-1,pieno" asintoti="x=0" legenda="y = \log_2 x;y = \log_{\frac{1}{2}} x" titolo="$y = \log_2 x$ è crescente e $y = \log_{\frac{1}{2}} x$ è decrescente; entrambe sono definite per $x > 0$ e valgono $0$ in $x = 1$"}

:::

## Proprietà dei logaritmi

:::teorema{#proprieta-logaritmi titolo="Proprietà dei logaritmi"}
Per $a > 0$ con $a \neq 1$, per $b > 0$, $c > 0$ e per ogni $n$ reale valgono le uguaglianze seguenti.

- Logaritmo di un prodotto: $\log_a (b\,c) = \log_a b + \log_a c$.
- Logaritmo di un quoziente: $\log_a \dfrac{b}{c} = \log_a b - \log_a c$.
- Logaritmo di una potenza: $\log_a b^n = n \log_a b$.

Sono le proprietà delle potenze lette sugli esponenti. Se $b = a^u$ e $c = a^v$, allora $b\,c = a^{u+v}$, quindi l'esponente del prodotto è la somma degli esponenti. Le proprietà servono a ridurre più logaritmi della stessa base a uno solo:
$$
\log_6 4 + \log_6 9 = \log_6 36 = 2,
\qquad
\log_2 40 - \log_2 5 = \log_2 8 = 3,
\qquad
\log_3 \sqrt[4]{27} = \frac{1}{4} \log_3 27 = \frac{3}{4} .
$$
:::

:::attenzione
Il logaritmo di una somma *non* è la somma dei logaritmi. Per esempio $\log_2 (4 + 4) = \log_2 8 = 3$, mentre $\log_2 4 + \log_2 4 = 4$. Allo stesso modo il quoziente di due logaritmi è diverso dal logaritmo del quoziente; per esempio $\dfrac{\log_2 8}{\log_2 2} = \dfrac{3}{1} = 3$, mentre $\log_2 \dfrac{8}{2} = \log_2 4 = 2$.
:::

::::teorema{#cambio-di-base titolo="Formula del cambio di base"}
Per $a > 0$ e $c > 0$, entrambi diversi da $1$, e per $b > 0$ vale
$$
\log_a b = \frac{\log_c b}{\log_c a} .
$$
La formula permette di scrivere ogni logaritmo in una base comoda, per esempio la base $10$ delle calcolatrici, e di confrontare logaritmi con basi diverse. Per esempio
$$
\log_8 32 = \frac{\log_2 32}{\log_2 8} = \frac{5}{3} .
$$
Scegliendo $c = b$ si ottiene il caso particolare $\log_a b = \dfrac{1}{\log_b a}$; per esempio $\log_4 8 = \dfrac{3}{2}$ e $\log_8 4 = \dfrac{2}{3}$.

:::dimostrazione
Sia $x = \log_a b$, cioè $a^{x} = b$. Applicando $\log_c$ ai due membri e la proprietà del logaritmo di una potenza si ottiene $x \log_c a = \log_c b$. Poiché $a \neq 1$, si ha $\log_c a \neq 0$, quindi $x = \dfrac{\log_c b}{\log_c a}$.
:::
::::

## Equazioni e disequazioni esponenziali

:::teorema{#equazioni-stessa-base titolo="Equazioni riducibili alla stessa base"}
Un'**equazione esponenziale** contiene l'incognita all'esponente. Se i due membri si possono scrivere come potenze della stessa base $a$, con $a > 0$ e $a \neq 1$, si uguagliano gli esponenti:
$$
a^{f(x)} = a^{g(x)} \iff f(x) = g(x) .
$$
La regola vale perché la funzione esponenziale assume valori diversi in punti diversi. Per esempio
$$
\begin{aligned}
4^{x+1} = 8^{x}
&\iff 2^{2x+2} = 2^{3x} \\[6pt]
&\iff 2x + 2 = 3x \\[6pt]
&\iff x = 2 .
\end{aligned}
$$
Quando compaiono potenze della stessa base con esponenti che differiscono per una costante, si raccoglie la potenza con l'esponente minore. Nell'equazione $2^{x+1} + 2^{x} = 24$ si ha $2^{x+1} = 2 \cdot 2^{x}$, quindi $3 \cdot 2^{x} = 24$, cioè $2^x = 8$ e $x = 3$.
:::

:::teorema{#equazioni-esponenziali-elementari titolo="Equazioni esponenziali elementari"}
Per $a > 0$ con $a \neq 1$ l'equazione $a^{x} = b$ si risolve secondo il segno di $b$.

- Se $b > 0$, l'equazione ha una sola soluzione, $x = \log_a b$.
- Se $b \leq 0$, l'equazione non ha soluzioni, perché $a^x$ è sempre positivo.

Per esempio l'equazione $2^{x} = 5$ ha la soluzione $x = \log_2 5$, mentre l'equazione $2^{x} = -1$ è **impossibile**. Sul grafico la soluzione è l'ascissa del punto in cui la retta orizzontale $y = b$ incontra il grafico di $y = a^x$.

::grafico{f="2^x;5;-1" xmin=-3 xmax=3.5 ymin=-2 ymax=8 punti="2.3219,5,pieno" segmenti="2.3219,0,2.3219,5" etichette="2.4,0.6,x = log₂ 5" legenda="y = 2^x;y = 5;y = -1" titolo="La retta $y = 5$ incontra $y = 2^x$ nel punto di ascissa $\log_2 5$, compreso tra $2$ e $3$; la retta $y = -1$ non incontra il grafico"}

:::

:::teorema{#cambio-di-variabile titolo="Equazioni con il cambio di variabile"}
Quando un'equazione contiene $a^{x}$ e $a^{2x} = \left( a^x \right)^2$, si pone $t = a^{x}$ e si ottiene un'equazione di secondo grado in $t$. Poiché $a^x$ è positivo, si tengono solo le soluzioni $t > 0$, poi si torna all'incognita $x$. Per esempio, nell'equazione
$$
9^{x} - 2 \cdot 3^{x} - 3 = 0
$$
si pone $t = 3^{x}$, quindi $9^x = t^2$ e l'equazione diventa
$$
t^2 - 2t - 3 = 0
\iff
t = 3
\;\vee\;
t = -1 .
$$
Il valore $t = -1$ si scarta, perché $3^x = -1$ è impossibile. Da $3^x = 3$ segue $x = 1$, che è l'unica soluzione.
:::

:::teorema{#disequazioni-esponenziali titolo="Disequazioni esponenziali"}
Per $a > 0$ con $a \neq 1$ una disequazione tra due potenze della stessa base si trasforma in una disequazione tra gli esponenti.

- Se $a > 1$, allora $a^{f(x)} > a^{g(x)} \iff f(x) > g(x)$, e il verso della disequazione resta lo stesso.
- Se $0 < a < 1$, allora $a^{f(x)} > a^{g(x)} \iff f(x) < g(x)$, e il verso della disequazione si inverte.

La regola segue dalla monotonia dell'esponenziale, perché una funzione crescente conserva l'ordine e una funzione decrescente lo inverte. Per esempio
$$
3^{x-1} > 9
\iff
3^{x-1} > 3^2
\iff
x - 1 > 2
\iff
x > 3 ,
$$
$$
\left( \frac{1}{2} \right)^{x} \geq 8
\iff
\left( \frac{1}{2} \right)^{x} \geq \left( \frac{1}{2} \right)^{-3}
\iff
x \leq -3 .
$$

::grafico{f="0.5^x;8" xmin=-5 xmax=3 ymin=-1 ymax=12 punti="-3,8,pieno" segmenti="-3,0,-3,8" asintoti="y=0" legenda="y = \left(\frac{1}{2}\right)^x;y = 8" titolo="Il grafico di $y = \left(\dfrac{1}{2}\right)^x$ sta sopra la retta $y = 8$, o la tocca, esattamente per $x \leq -3$"}

:::

:::osservazione{#disequazioni-sempre-vere titolo="Disequazioni sempre verificate o impossibili"}
Poiché $a^x > 0$ per ogni $x$, alcune disequazioni esponenziali si risolvono senza calcoli. La disequazione $2^{x} > -3$ è verificata per ogni $x$ reale, mentre la disequazione $2^{x} < 0$ non ha soluzioni.
:::

## Equazioni e disequazioni logaritmiche

:::teorema{#equazioni-logaritmiche titolo="Equazioni logaritmiche"}
Un'**equazione logaritmica** contiene l'incognita nell'argomento di un logaritmo. Si risolve in tre passi.

1. Si scrivono le condizioni di esistenza, imponendo che ogni argomento sia positivo.
2. Con le proprietà dei logaritmi si riduce l'equazione alla forma $\log_a f(x) = \log_a g(x)$ oppure $\log_a f(x) = c$.
3. Si risolve $f(x) = g(x)$ oppure $f(x) = a^c$, e si tengono solo le soluzioni che soddisfano le condizioni di esistenza.

Il terzo passo vale perché anche il logaritmo assume valori diversi in punti diversi. Per esempio, nell'equazione $\log_2 x + \log_2 (x - 2) = 3$ le condizioni di esistenza sono
$$
\begin{cases}
x > 0 \\
x - 2 > 0
\end{cases}
\iff
x > 2 .
$$
Per la proprietà del logaritmo di un prodotto l'equazione diventa $\log_2 \left( x^2 - 2x \right) = 3$, quindi
$$
x^2 - 2x = 2^3
\iff
x^2 - 2x - 8 = 0
\iff
x = 4
\;\vee\;
x = -2 .
$$
Solo $x = 4$ soddisfa la condizione $x > 2$, perciò l'equazione ha l'unica soluzione $x = 4$.
:::

:::attenzione
Le condizioni di esistenza si scrivono sull'equazione di partenza, prima di applicare le proprietà. L'equazione trasformata $\log_2 \left( x^2 - 2x \right) = 3$ ammette anche la soluzione $x = -2$, perché $(-2)^2 - 2 \cdot (-2) = 8 > 0$. L'equazione di partenza invece *non* è definita per $x = -2$, perché contiene $\log_2 (-2)$.
:::

:::teorema{#disequazioni-logaritmiche titolo="Disequazioni logaritmiche"}
Per $a > 0$ con $a \neq 1$ e per valori di $x$ in cui $f(x) > 0$ e $g(x) > 0$ valgono le equivalenze seguenti.

- Se $a > 1$, allora $\log_a f(x) > \log_a g(x) \iff f(x) > g(x)$.
- Se $0 < a < 1$, allora $\log_a f(x) > \log_a g(x) \iff f(x) < g(x)$.

Le soluzioni devono soddisfare insieme le condizioni di esistenza e la disequazione tra gli argomenti, quindi si risolve un sistema. Per esempio, scrivendo $2 = \log_3 3^2$,
$$
\log_3 (x - 1) < 2
\iff
\begin{cases}
x - 1 > 0 \\
x - 1 < 3^2
\end{cases}
\iff
\begin{cases}
x > 1 \\
x < 10
\end{cases}
\iff
1 < x < 10 .
$$
Con una base minore di $1$ il verso si inverte, e $\log_{\frac{1}{2}} x > -2$ equivale al sistema formato da $x > 0$ e $x < \left( \dfrac{1}{2} \right)^{-2} = 4$, quindi le soluzioni sono $0 < x < 4$.

::grafico{f="log(x-1)/log(3);2" xmin=-1 xmax=12 ymin=-3 ymax=3.5 punti="10,2,vuoto;2,0,pieno" segmenti="10,0,10,2" asintoti="x=1" legenda="y = \log_3 (x - 1);y = 2" titolo="Il grafico di $y = \log_3 (x - 1)$ esiste per $x > 1$ e sta sotto la retta $y = 2$ per $1 < x < 10$"}

:::

## Metodi rapidi per i quiz

:::osservazione{#metodi-rapidi titolo="Sostituzione e condizioni di esistenza"}
Nei quesiti a quattro opzioni molte equazioni si risolvono più in fretta controllando le risposte proposte.

- **Sostituire le opzioni.** Per l'equazione $2^{x+1} + 2^{x} = 24$ l'opzione $x = 3$ dà $2^4 + 2^3 = 16 + 8 = 24$, e la verifica richiede pochi secondi.
- **Eliminare con le condizioni di esistenza.** Nell'equazione $\log_5 (x - 3) = 1$ ogni opzione con $x \leq 3$ è sbagliata, perché rende l'argomento nullo o negativo.
- **Controllare il segno.** Una potenza di base positiva è sempre positiva, e un logaritmo in base maggiore di $1$ è negativo per argomenti compresi tra $0$ e $1$. Un'opzione che contraddice il segno si esclude senza calcoli.
- *Controllare il verso.* Nelle disequazioni con base minore di $1$ le opzioni contengono spesso sia l'intervallo corretto sia quello con il verso non invertito. Si prova un valore dell'intervallo: per $\left( \dfrac{1}{2} \right)^x \geq 8$ il valore $x = -4$ dà $16 \geq 8$, quindi le soluzioni stanno a sinistra di $-3$.
:::

:::osservazione{#stime-logaritmi titolo="Stime di potenze e logaritmi"}
Molte opzioni si distinguono con una stima dell'ordine di grandezza.

- **Logaritmi tra due interi.** Poiché $2^{4} = 16 < 20 < 32 = 2^{5}$ e la funzione $\log_2 x$ è crescente, si ha $4 < \log_2 20 < 5$.
- **Logaritmi in base $10$.** Bastano i valori $\log_{10} 2 \approx 0{,}30$ e $\log_{10} 3 \approx 0{,}48$. Con le proprietà dei logaritmi si ottiene, per esempio, $\log_{10} 6 = \log_{10} 2 + \log_{10} 3 \approx 0{,}78$ e $\log_{10} 5 = \log_{10} 10 - \log_{10} 2 \approx 0{,}70$.
- **Potenze di $2$.** Poiché $2^{10} = 1024 \approx 10^{3}$, si ha $2^{20} \approx 10^{6}$ e $2^{30} \approx 10^{9}$.
- *Stessa base o stesso esponente.* Per confrontare potenze si riscrivono con la stessa base o con lo stesso esponente; per i prodotti di numeri molto grandi o molto piccoli si passa alla notazione scientifica.
:::
