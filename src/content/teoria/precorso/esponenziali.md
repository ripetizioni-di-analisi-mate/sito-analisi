---
titolo: Equazioni e disequazioni esponenziali
sommario: La funzione a^x con le sue proprietà, e i metodi per risolvere equazioni e disequazioni in cui l'incognita compare all'esponente.
---

## La funzione esponenziale

:::definizione{#funzione-esponenziale titolo="Funzione esponenziale"}
Per $a > 0$, $a \neq 1$, la **funzione esponenziale** di base $a$ associa a *ogni* $x \in \mathbb{R}$ il numero $a^{x}$. Proprietà:

- $a^{x} > 0$ per ogni $x \in \mathbb{R}$: il grafico sta sopra l'asse $x$ e la retta $y = 0$ è asintoto orizzontale;
- $a^{0} = 1$, quindi il grafico passa per il punto $(0, 1)$ qualunque sia la base;
- la funzione è **iniettiva**: esponenti diversi danno potenze diverse;
- per $a > 1$ la funzione è strettamente **crescente**; per $0 < a < 1$ è strettamente **decrescente**.

Su iniettività e monotonia si fondano tutti i metodi risolutivi di questo capitolo: l'iniettività giustifica il passaggio dalle potenze agli esponenti nelle equazioni, la monotonia governa il verso nelle disequazioni.
:::

:::esempio{titolo="I due grafici di base"}
Per $a = 2$ la funzione cresce; per $a = \dfrac{1}{2}$ decresce, poiché $\left(\dfrac{1}{2}\right)^{x} = 2^{-x}$.

::grafico{f="2^x" xmin=-3 xmax=3 ymin=-0.5 ymax=8 asintoti="y=0" titolo="y = 2^x: base maggiore di 1, funzione crescente"}

::grafico{f="0.5^x" xmin=-3 xmax=3 ymin=-0.5 ymax=8 asintoti="y=0" titolo="y = (1/2)^x: base tra 0 e 1, funzione decrescente"}
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

## Equazioni risolte con il logaritmo

:::teorema{#esponenziale-uguale-k titolo="Equazione con basi diverse"}
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

## Disequazioni esponenziali

:::teorema{#disequazioni-esponenziali titolo="Disequazioni con la stessa base"}
Per $a > 0$, $a \neq 1$:

- se $a > 1$, allora $a^{A} > a^{B} \iff A > B$: il verso **si mantiene**, perché la funzione esponenziale di base $a$ è strettamente crescente;
- se $0 < a < 1$, allora $a^{A} > a^{B} \iff A < B$: il verso **si rovescia**, perché la funzione è strettamente decrescente.

Le stesse regole valgono con i simboli $\geq$, $<$, $\leq$. Una disequazione del tipo $a^{A} > k$ con $k > 0$ si riconduce a questa forma scrivendo $k$ come potenza di $a$, eventualmente con il logaritmo: $k = a^{\log_a k}$.

::grafico{f="2^x;0.5^x" xmin=-3 xmax=3 ymin=-0.5 ymax=8 punti="0,1,pieno" etichette="2.2,2.6,y = 2ˣ;-2.9,2.6,y = (1/2)ˣ" titolo="$y = 2^{x}$ cresce e $y = \left(\dfrac{1}{2}\right)^{x}$, tratteggiata, decresce; i due grafici passano per $(0, 1)$"}
:::

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

## Disequazioni con sostituzione

:::osservazione
In una disequazione la sostituzione $t = a^{x}$ si usa come nelle equazioni, con la stessa condizione $t > 0$: l'insieme delle soluzioni della disequazione in $t$ va **intersecato** con $t > 0$ *prima* di tornare alla variabile $x$. Ogni condizione ottenuta su $t$ si traduce poi in una disequazione esponenziale con la stessa base.
:::

:::esempio
$$
4^{x} - 3 \cdot 2^{x} + 2 > 0
$$
Con $t = 2^{x}$, $t > 0$, la disequazione $t^{2} - 3t + 2 > 0$ è soddisfatta per $t < 1$ oppure $t > 2$; l'intersezione con $t > 0$ dà $0 < t < 1$ oppure $t > 2$. Da $0 < 2^{x} < 1 = 2^{0}$ segue $x < 0$, poiché la base $2$ è maggiore di $1$; da $2^{x} > 2$ segue $x > 1$. Le soluzioni sono $x < 0$ oppure $x > 1$.

::grafico{f="4^x-3*2^x+2" xmin=-4 xmax=2 ymin=-1 ymax=4 asintoti="y=2" punti="0,0,vuoto;1,0,vuoto" titolo="$y = 4^{x} - 3 \cdot 2^{x} + 2$ è positiva per $x < 0$ e per $x > 1$"}
:::
