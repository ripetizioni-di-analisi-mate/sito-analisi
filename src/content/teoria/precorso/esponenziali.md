---
titolo: Equazioni e disequazioni esponenziali
sommario: La funzione a^x con le sue proprietà, e i metodi per risolvere equazioni e disequazioni in cui l'incognita compare all'esponente.
---

## La funzione esponenziale

:::definizione{#funzione-esponenziale titolo="Funzione esponenziale"}
Per $a > 0$, $a \neq 1$, la **funzione esponenziale** di base $a$ associa a *ogni* $x \in \mathbb{R}$ il numero $a^{x}$. Proprietà:

- $a^{x} > 0$ per ogni $x \in \mathbb{R}$, quindi il grafico sta sopra l'asse $x$; la retta $y = 0$ è asintoto orizzontale;
- $a^{0} = 1$, quindi il grafico passa per il punto $(0, 1)$ qualunque sia la base;
- la funzione è **iniettiva**: esponenti diversi danno potenze diverse;
- per $a > 1$ la funzione è strettamente **crescente**; per $0 < a < 1$ è strettamente **decrescente**.

Su iniettività e monotonia si fondano tutti i metodi risolutivi di questo capitolo: l'iniettività giustifica il passaggio dalle potenze agli esponenti nelle equazioni, la monotonia governa il verso nelle disequazioni.
:::

:::esempio{titolo="I due grafici di base"}
Per $a = 2$ la funzione cresce; per $a = \dfrac{1}{2}$ decresce, poiché $\left(\dfrac{1}{2}\right)^{x} = 2^{-x}$.

::grafico{f="2^x" xmin=-3 xmax=3 ymin=-0.5 ymax=8 asintoti="y=0" titolo="$y = 2^x$: base maggiore di $1$, funzione crescente"}

::grafico{f="0.5^x" xmin=-3 xmax=3 ymin=-0.5 ymax=8 asintoti="y=0" titolo="$y = \left(\dfrac{1}{2}\right)^x$: base tra $0$ e $1$, funzione decrescente"}
:::

:::attenzione
La base $a = 1$ è esclusa dalla definizione, perché $1^{x} = 1$ per ogni $x \in \mathbb{R}$. La funzione costante $1^{x}$ non è iniettiva, per esempio $1^{2} = 1^{5}$ con $2 \neq 5$, quindi dall'uguaglianza di due potenze di base $1$ non si risale agli esponenti.

Le basi negative sono escluse perché la potenza non è definita per ogni esponente reale. Per esempio con $a = -4$ e $x = \dfrac{1}{2}$ si avrebbe $(-4)^{\frac{1}{2}} = \sqrt{-4}$, che non è un numero reale.
:::

:::osservazione
Siano $a$ e $b$ due basi con $0 < a < b$. Poiché $\dfrac{b^{x}}{a^{x}} = \left(\dfrac{b}{a}\right)^{x}$ e la base $\dfrac{b}{a}$ è maggiore di $1$, il quoziente è maggiore di $1$ per $x > 0$ e minore di $1$ per $x < 0$. Quindi $a^{x} < b^{x}$ per $x > 0$, mentre $a^{x} > b^{x}$ per $x < 0$. Per esempio $2^{2} = 4 < 9 = 3^{2}$, mentre $2^{-1} = \dfrac{1}{2} > \dfrac{1}{3} = 3^{-1}$. Con questo confronto si ordinano due potenze con lo stesso esponente senza calcolarle.

::grafico{f="2^x;3^x" xmin=-3 xmax=2.5 ymin=-1 ymax=10 punti="0,1,pieno;2,4,pieno;2,9,pieno" segmenti="2,0,2,9" legenda="y = 2^x;y = 3^x" titolo="Per $x > 0$ il grafico di $y = 3^{x}$ sta sopra quello di $y = 2^{x}$, per $x < 0$ sta sotto; in $x = 2$ i valori sono $4$ e $9$"}
:::

## Le regole delle potenze

:::teorema{#regole-delle-potenze titolo="Regole delle potenze"}
Per $a > 0$ e $x, y \in \mathbb{R}$:
$$
a^{x} \, a^{y} = a^{x+y}, \qquad
\frac{a^{x}}{a^{y}} = a^{x-y}, \qquad
(a^{x})^{y} = a^{xy}, \qquad
a^{-x} = \frac{1}{a^{x}} .
$$
Servono a riscrivere i due membri di un'equazione o di una disequazione come **potenze della stessa base**. Per esempio $8^{x} = (2^{3})^{x} = 2^{3x}$ e $\dfrac{1}{9} = 3^{-2}$.
:::

:::teorema{#base-reciproca titolo="Potenze con base reciproca"}
Per $a > 0$ e $x \in \mathbb{R}$:
$$
\left(\frac{1}{a}\right)^{x} = a^{-x} .
$$
L'uguaglianza segue dalla regola della potenza di potenza, poiché $\dfrac{1}{a} = a^{-1}$ e quindi $\left(a^{-1}\right)^{x} = a^{-x}$. Il valore di $\left(\dfrac{1}{a}\right)^{x}$ nel punto $x$ coincide con il valore di $a^{x}$ nel punto $-x$, perciò i due grafici sono simmetrici rispetto all'asse $y$. La regola serve a riscrivere una potenza di base compresa tra $0$ e $1$ come potenza di base maggiore di $1$. Per esempio la disequazione $\left(\dfrac{1}{2}\right)^{x} > 8$ si riscrive $2^{-x} > 2^{3}$; la base $2$ è maggiore di $1$, quindi $-x > 3$ e $x < -3$.
:::

:::esempio{titolo="Raccoglimento di una potenza"}
$$
\begin{aligned}
2^{x+2} - 2^{x} = 24 &\iff 4 \cdot 2^{x} - 2^{x} = 24 \\[6pt]
&\iff 3 \cdot 2^{x} = 24 \\[6pt]
&\iff 2^{x} = 8 = 2^{3} \\[6pt]
&\iff x = 3
\end{aligned}
$$
Per la regola del prodotto di potenze $2^{x+2} = 2^{2} \cdot 2^{x} = 4 \cdot 2^{x}$, quindi i due termini contengono lo stesso fattore $2^{x}$ e si raccolgono. L'equazione si riduce perciò alla forma $2^{x} = 8$, che si risolve con l'uguaglianza di potenze con la stessa base.
:::

:::attenzione
Le regole delle potenze riguardano prodotti, quozienti e potenze di potenze. La somma $2^{x} + 2^{x}$ vale $2 \cdot 2^{x} = 2^{x+1}$ ed è diversa da $2^{2x}$. Per $x = 2$, per esempio, si ha $2^{2} + 2^{2} = 8 = 2^{3}$, mentre $2^{2 \cdot 2} = 16$.

Allo stesso modo $(a^{x})^{2} = a^{2x}$ è diversa da $a^{x^{2}}$. Per $a = 2$ e $x = 3$, per esempio, si ha $(2^{3})^{2} = 64$ e $2^{3^{2}} = 2^{9} = 512$.
:::

## Equazioni con la stessa base

:::teorema{#stessa-base titolo="Uguaglianza di potenze con la stessa base"}
Per $a > 0$, $a \neq 1$:
$$
a^{A} = a^{B} \iff A = B .
$$
Se $A = B$ le due potenze coincidono; viceversa, poiché la funzione esponenziale è **iniettiva**, da $a^{A} = a^{B}$ segue $A = B$. L'equazione sugli esponenti è un'equazione algebrica e si risolve con i metodi ordinari.
:::

:::esempio
$$
2^{x+1} = 16 \iff 2^{x+1} = 2^{4} \iff x + 1 = 4 \iff x = 3
$$
Il numero $16$ è stato riscritto come potenza di $2$, quindi l'uguaglianza delle potenze **equivale** all'uguaglianza degli esponenti.
:::

:::esempio{titolo="Esponente di secondo grado"}
$$
\begin{aligned}
2^{x^{2} - 3x} = \frac{1}{4} &\iff 2^{x^{2} - 3x} = 2^{-2} \\[6pt]
&\iff x^{2} - 3x + 2 = 0 \\[6pt]
&\iff x = 1 \ \text{oppure} \ x = 2
\end{aligned}
$$
Il numero $\dfrac{1}{4}$ si scrive $2^{-2}$, quindi l'uguaglianza degli esponenti dà l'equazione di secondo grado $x^{2} - 3x = -2$. Quando il secondo membro vale $1 = a^{0}$, l'equazione $a^{A} = 1$ equivale ad $A = 0$. Per esempio $5^{x^{2} - 4} = 1$ equivale a $x^{2} - 4 = 0$, che ha soluzioni $x = -2$ e $x = 2$.
:::

## Equazioni risolte con il logaritmo

:::teorema{#esponenziale-uguale-k titolo="Equazione esponenziale con secondo membro costante"}
Per $a > 0$, $a \neq 1$ e $k > 0$:
$$
a^{A} = k \iff A = \log_a k .
$$
Il logaritmo $\log_a k$ è per definizione l'**esponente** da dare ad $a$ per ottenere $k$, perciò $k = a^{\log_a k}$ e l'equazione si riscrive $a^{A} = a^{\log_a k}$, equivalente ad $A = \log_a k$ per l'uguaglianza di potenze con la stessa base. Il metodo si usa quando $k$ *non* è una potenza di $a$ con esponente razionale riconoscibile.

::grafico{f="3^x;5;-2" xmin=-3 xmax=3 ymin=-2.5 ymax=8 punti="1.465,5,pieno" segmenti="1.465,0,1.465,5" etichette="1.6,1.2,x = log₃ 5" titolo="La retta $y = 5$ incontra $y = 3^{x}$ in un solo punto, di ascissa $\log_3 5$; la retta $y = -2$, in rosso, non la incontra"}
:::

:::esempio
$$
3^{x} = 5 \iff x = \log_3 5, \qquad
2^{x-1} = 7 \iff x - 1 = \log_2 7 \iff x = 1 + \log_2 7
$$
Nel secondo caso il logaritmo dà il valore dell'*intero* esponente $x - 1$, quindi la soluzione si ottiene risolvendo l'equazione di primo grado $x - 1 = \log_2 7$.
:::

:::attenzione
L'equazione $a^{x} = k$ con $k \leq 0$ **non ha soluzioni**, perché $a^{x} > 0$ per ogni $x \in \mathbb{R}$. Per esempio $2^{x} = -4$ e $5^{x} = 0$ non hanno soluzioni: una potenza di base positiva non è *mai* negativa né nulla.
:::

::::teorema{#basi-diverse titolo="Equazioni con basi diverse"}
Per $a > 0$, $a \neq 1$ e $b > 0$:
$$
a^{A} = b^{B} \iff A = B \log_a b .
$$
Il teorema si applica quando le due basi non si riconducono alla stessa base con le regole delle potenze, come $2$ e $3$. Dopo il passaggio agli esponenti l'equazione è algebrica e contiene il numero $\log_a b$ come coefficiente.

:::dimostrazione
L'idea è scrivere $b$ come potenza di $a$. Poiché $b > 0$, per definizione di logaritmo $b = a^{\log_a b}$. Per la regola della potenza di potenza $b^{B} = \left(a^{\log_a b}\right)^{B} = a^{B \log_a b}$, quindi l'equazione diventa $a^{A} = a^{B \log_a b}$. Per l'uguaglianza di potenze con la stessa base, questa equivale ad $A = B \log_a b$.
:::
::::

:::esempio
$$
\begin{aligned}
2^{x} = 3^{x-1} &\iff x = (x - 1) \log_2 3 \\[6pt]
&\iff x \log_2 3 - x = \log_2 3 \\[6pt]
&\iff x = \frac{\log_2 3}{\log_2 3 - 1}
\end{aligned}
$$
Il teorema si applica con $a = 2$ e $b = 3$. Poiché $3 > 2$, si ha $\log_2 3 > 1$, quindi il coefficiente $\log_2 3 - 1$ è diverso da zero e la divisione è lecita. Con $\log_2 3 \approx 1{,}585$ la soluzione vale circa $2{,}71$.

::grafico{f="2^x;3^(x-1)" xmin=-2 xmax=4 ymin=-1 ymax=12 punti="2.71,6.541,pieno" segmenti="2.71,0,2.71,6.541" legenda="y = 2^x;y = 3^{x-1}" titolo="I grafici di $y = 2^{x}$ e $y = 3^{x - 1}$ si incontrano in un solo punto, di ascissa $\dfrac{\log_2 3}{\log_2 3 - 1}$"}
:::

## Equazioni con sostituzione

:::teorema{#sostituzione-esponenziale titolo="Metodo di sostituzione"}
Se nell'equazione compaiono $a^{2x} = (a^{x})^{2}$ e $a^{x}$, la sostituzione $t = a^{x}$ la trasforma in un'equazione algebrica in $t$. Poiché $a^{x} > 0$ per ogni $x$, la nuova incognita è soggetta alla condizione $t > 0$, quindi le eventuali soluzioni con $t \leq 0$ **vanno scartate**. Per ogni valore accettabile di $t$, l'equazione $a^{x} = t$ si risolve con l'uguaglianza di potenze con la stessa base oppure con il logaritmo.
:::

:::esempio
$$
9^{x} - 4 \cdot 3^{x} + 3 = 0
$$
Poiché $9^{x} = (3^{x})^{2}$, con la sostituzione $t = 3^{x}$, $t > 0$, l'equazione diventa $t^{2} - 4t + 3 = 0$, con soluzioni $t = 1$ e $t = 3$, entrambe positive e quindi **accettabili**. Da $3^{x} = 1 = 3^{0}$ segue $x = 0$; da $3^{x} = 3$ segue $x = 1$.
:::

:::osservazione
Un'equazione in cui compaiono $a^{2x}$, $(ab)^{x}$ e $b^{2x}$, con $a, b > 0$, si riconduce alla sostituzione dividendo entrambi i membri per $b^{2x}$, che è positivo. Per esempio, in $4^{x} + 6^{x} = 2 \cdot 9^{x}$ si divide per $9^{x}$. Poiché $\dfrac{4^{x}}{9^{x}} = \left(\dfrac{2}{3}\right)^{2x}$ e $\dfrac{6^{x}}{9^{x}} = \left(\dfrac{2}{3}\right)^{x}$, con $t = \left(\dfrac{2}{3}\right)^{x}$, $t > 0$, si ottiene $t^{2} + t - 2 = 0$. Le soluzioni sono $t = 1$ e $t = -2$; la seconda è negativa e va scartata, quindi $\left(\dfrac{2}{3}\right)^{x} = 1$ e $x = 0$.
:::

:::attenzione
Una soluzione negativa dell'equazione in $t$ non dà soluzioni in $x$. In $4^{x} - 2^{x} - 2 = 0$ la sostituzione $t = 2^{x}$ dà $t^{2} - t - 2 = 0$, con soluzioni $t = 2$ e $t = -1$. L'equazione $2^{x} = -1$ non ha soluzioni, e la scrittura $x = \log_2 (-1)$ è priva di significato, perché il logaritmo è definito solo per argomenti positivi. L'unica soluzione è quindi $x = 1$, data da $2^{x} = 2$.
:::

## Disequazioni esponenziali

::::teorema{#disequazioni-esponenziali titolo="Disequazioni con la stessa base"}
Per $a > 0$, $a \neq 1$:

- se $a > 1$, allora $a^{A} > a^{B} \iff A > B$: il verso **si mantiene**, perché la funzione esponenziale di base $a$ è strettamente crescente;
- se $0 < a < 1$, allora $a^{A} > a^{B} \iff A < B$: il verso **si rovescia**, perché la funzione è strettamente decrescente.

Le stesse regole valgono con i simboli $\geq$, $<$, $\leq$. Una disequazione del tipo $a^{A} > k$ con $k > 0$ si riconduce a questa forma scrivendo $k$ come potenza di $a$, eventualmente con il logaritmo: $k = a^{\log_a k}$. Se invece $k \leq 0$, poiché $a^{A} > 0$, la disequazione $a^{A} > k$ è soddisfatta da *ogni* $x$ per cui $A$ è definita e la disequazione $a^{A} < k$ **non ha soluzioni**.

::grafico{f="2^x;0.5^x" xmin=-3 xmax=3 ymin=-0.5 ymax=8 punti="0,1,pieno" titolo="$y = 2^{x}$ cresce e $y = \left(\dfrac{1}{2}\right)^{x}$, tratteggiata, decresce; i due grafici passano per $(0, 1)$"}

:::dimostrazione
Si dimostra prima il caso $a > 1$. Se $A > B$, allora $a^{A} > a^{B}$, perché la funzione è strettamente crescente. Viceversa, sia $a^{A} > a^{B}$ e si supponga per assurdo $A \leq B$. Se $A = B$ le due potenze sono uguali, e se $A < B$ si ha $a^{A} < a^{B}$ per la crescenza; in entrambi i casi $a^{A} \leq a^{B}$, contro l'ipotesi. Quindi $A > B$.

Per $0 < a < 1$ si pone $b = \dfrac{1}{a}$, che è maggiore di $1$. Per la regola delle potenze con base reciproca $a^{A} = b^{-A}$ e $a^{B} = b^{-B}$, quindi $a^{A} > a^{B}$ equivale a $b^{-A} > b^{-B}$. Per il caso già dimostrato questa disuguaglianza equivale a $-A > -B$, cioè ad $A < B$.
:::
::::

:::esempio{titolo="Base maggiore di 1"}
$$
3^{2x-1} < 27 \iff 3^{2x-1} < 3^{3} \iff 2x - 1 < 3 \iff x < 2
$$
La base $3$ è maggiore di $1$, quindi il verso **si mantiene** nel passaggio agli esponenti.
:::

:::esempio{titolo="Base tra 0 e 1"}
$$
\left(\frac{1}{2}\right)^{x} > 8 \iff \left(\frac{1}{2}\right)^{x} > \left(\frac{1}{2}\right)^{-3} \iff x < -3
$$
Poiché $8 = 2^{3} = \left(\dfrac{1}{2}\right)^{-3}$ e la base $\dfrac{1}{2}$ è compresa tra $0$ e $1$, nel passaggio agli esponenti il verso **si rovescia**.

::grafico{f="0.5^x;8" xmin=-5 xmax=2 ymin=-2 ymax=18 area="0.5^x;8;-5;-3" punti="-3,8,vuoto" titolo="Il grafico di $y = \left(\dfrac{1}{2}\right)^{x}$ sta sopra la retta $y = 8$ per $x < -3$"}
:::

:::esempio{titolo="Secondo membro che non è una potenza della base"}
$$
3^{x} > 5 \iff 3^{x} > 3^{\log_3 5} \iff x > \log_3 5
$$
$$
\left(\frac{1}{2}\right)^{x} \leq 3 \iff 2^{-x} \leq 2^{\log_2 3} \iff -x \leq \log_2 3 \iff x \geq -\log_2 3
$$
Nel primo caso $5 = 3^{\log_3 5}$ e la base $3$ è maggiore di $1$, quindi il verso si mantiene. Nel secondo caso la potenza si riscrive con la base reciproca $2$, maggiore di $1$, e il verso si mantiene nel passaggio agli esponenti; dalla disuguaglianza $-x \leq \log_2 3$ si ottiene poi $x \geq -\log_2 3$, perché nella moltiplicazione per $-1$ il verso si rovescia.
:::

## Disequazioni con sostituzione

:::osservazione
In una disequazione la sostituzione $t = a^{x}$ si usa come nelle equazioni, con la stessa condizione $t > 0$: l'insieme delle soluzioni della disequazione in $t$ va **intersecato** con $t > 0$ *prima* di tornare alla variabile $x$. Ogni condizione ottenuta su $t$ si traduce poi in una disequazione esponenziale con la stessa base.
:::

:::esempio
$$
4^{x} - 3 \cdot 2^{x} + 2 > 0
$$
Con $t = 2^{x}$, $t > 0$, la disequazione $t^{2} - 3t + 2 > 0$ è soddisfatta per $t < 1$ oppure $t > 2$; l'intersezione con $t > 0$ dà $0 < t < 1$ oppure $t > 2$. Da $0 < 2^{x} < 1 = 2^{0}$ segue $x < 0$, poiché la base $2$ è maggiore di $1$; da $2^{x} > 2$ segue $x > 1$. Le soluzioni sono $x < 0$ oppure $x > 1$.

::grafico{f="4^x-3*2^x+2" xmin=-4 xmax=2 ymin=-1 ymax=4 asintoti="y=2" punti="0,0,vuoto;1,0,vuoto" titolo="$y = 4^{x} - 3 \cdot 2^{x} + 2$ è positiva per $x < 0$ e per $x > 1$; la retta $y = 2$, in rosso, è il suo asintoto orizzontale"}
:::

:::esempio{titolo="Disequazione fratta"}
$$
\frac{3^{x} - 9}{3^{x} - 1} < 0
$$
Il denominatore si annulla per $3^{x} = 1$, cioè per $x = 0$, che va escluso. Il numeratore è positivo per $3^{x} > 9 = 3^{2}$, cioè per $x > 2$, e il denominatore è positivo per $3^{x} > 1$, cioè per $x > 0$. La frazione è negativa dove numeratore e denominatore hanno segni opposti, quindi le soluzioni sono $0 < x < 2$.

::grafico{f="(3^x-9)/(3^x-1)" xmin=-4 xmax=4 ymin=-8 ymax=14 asintoti="x=0;y=1;y=9" punti="2,0,vuoto" titolo="$y = \dfrac{3^{x} - 9}{3^{x} - 1}$ è negativa per $0 < x < 2$; le rette $x = 0$, $y = 1$ e $y = 9$ sono i suoi asintoti"}
:::
