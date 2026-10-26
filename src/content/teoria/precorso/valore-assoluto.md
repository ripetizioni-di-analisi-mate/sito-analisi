---
titolo: Equazioni e disequazioni con il valore assoluto
sommario: La definizione per casi del valore assoluto, le sue proprietà, e i sistemi che risolvono equazioni e disequazioni con uno o più moduli.
---

## Definizione e significato geometrico

:::definizione{#definizione-valore-assoluto titolo="Valore assoluto"}
Il valore assoluto di un numero reale $x$ è
$$
|x| =
\begin{cases}
x & \text{se } x \geq 0 \\
-x & \text{se } x < 0
\end{cases}
$$
Il risultato non è mai negativo: quando $x < 0$, il numero $-x$ è positivo. Per esempio $|7| = 7$ e $|-7| = -(-7) = 7$. Ogni regola risolutiva di questo capitolo discende da questa definizione per casi.

::grafico{f="abs(x)" xmin=-5 xmax=5 ymin=-1 ymax=5 titolo="y = |x|: per x ≥ 0 coincide con y = x, per x < 0 con y = −x"}
:::

:::definizione{#modulo-come-distanza titolo="Il valore assoluto come distanza"}
Per $x, c \in \mathbb{R}$, il numero $|x - c|$ è la distanza tra $x$ e $c$ sulla retta reale; in particolare $|x|$ è la distanza di $x$ dall'origine. Questa lettura traduce equazioni e disequazioni in condizioni sui punti della retta e permette di controllare i risultati. Per esempio $|x - 3| = 2$ è soddisfatta dai punti a distanza $2$ da $3$, cioè $x = 1$ e $x = 5$.
:::

## Proprietà

:::teorema{#proprieta-valore-assoluto titolo="Proprietà del valore assoluto"}
Per ogni $a, b \in \mathbb{R}$ valgono
$$
|ab| = |a|\,|b|, \qquad |a|^2 = a^2, \qquad |a + b| \leq |a| + |b| .
$$
La prima si verifica esaminando i quattro casi sui segni di $a$ e $b$ e serve a scomporre un modulo, per esempio $|{-3x}| = 3\,|x|$. La seconda vale perché $a$ e $|a|$ differiscono al più per il segno, che il quadrato cancella; poiché i moduli non sono negativi, confrontare due moduli equivale a confrontare i loro quadrati, e su questa osservazione si fonda la risoluzione di $|A| > |B|$ per elevamento al quadrato. La terza è la disuguaglianza triangolare e viene usata nelle maggiorazioni, per esempio nel capitolo sui limiti: per $a = 5$ e $b = -3$ si ha $|5 + (-3)| = 2 \leq 8 = |5| + |-3|$, e l'uguaglianza vale quando $a$ e $b$ hanno lo stesso segno.
:::

:::attenzione
Il modulo non si toglie riscrivendo $|A| = A$: l'uguaglianza vale solo dove $A \geq 0$. Per esempio $|x - 5| = x - 5$ è falsa in $x = 0$, poiché $|0 - 5| = 5$ mentre $0 - 5 = -5$. Dove $A < 0$ vale invece $|A| = -A$.
:::

## L'equazione |A| = k

:::teorema{#equazioni-con-modulo titolo="Equazione della forma |A| = k"}
$A$ è un'espressione nella variabile $x$ e $k$ una costante. I soli numeri con valore assoluto $k > 0$ sono $k$ e $-k$, quindi i casi sono tre.

- $k > 0$: $\ |A| = k \iff A = k \ \vee \ A = -k$.
- $k = 0$: $\ |A| = 0 \iff A = 0$, perché il solo numero con valore assoluto nullo è $0$.
- $k < 0$: nessuna soluzione, perché $|A| \geq 0$ per ogni $x$.
:::

:::esempio
$|x - 4| = 6$. Poiché $6 > 0$, l'equazione equivale a
$$
x - 4 = 6 \ \vee \ x - 4 = -6 ,
$$
quindi $x = 10$ oppure $x = -2$: i due punti a distanza $6$ da $4$.
:::

## L'equazione |A| = |B|

:::teorema{#equazione-due-moduli titolo="Equazione della forma |A| = |B|"}
Due numeri hanno lo stesso valore assoluto quando sono uguali oppure opposti, quindi
$$
|A| = |B| \iff A = B \ \vee \ A = -B .
$$
Non serve alcuna condizione aggiuntiva, perché i due membri non sono mai negativi.
:::

:::esempio
$|2x - 1| = |x + 5|$ equivale a
$$
2x - 1 = x + 5 \ \vee \ 2x - 1 = -(x + 5) ,
$$
quindi $x = 6$ oppure $3x = -4$, cioè $x = -\dfrac{4}{3}$.
:::

## L'equazione |A| = B

:::teorema{#equazione-modulo-uguale-espressione titolo="Equazione della forma |A| = B"}
Se il secondo membro è un'espressione $B$ nella variabile, il primo membro non è mai negativo, quindi l'equazione impone anche la condizione $B \geq 0$:
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
Le soluzioni delle due equazioni che non soddisfano la condizione $B \geq 0$ vanno scartate.
:::

:::esempio
$|x| = 2x - 3$:
$$
\begin{cases}
2x - 3 \geq 0 \\
x = 2x - 3
\end{cases}
\ \cup \
\begin{cases}
2x - 3 \geq 0 \\
x = -(2x - 3)
\end{cases}
$$
Il primo sistema dà $x = 3$, che soddisfa la condizione poiché $2 \cdot 3 - 3 = 3 \geq 0$; il secondo dà $x = 1$, che non la soddisfa, poiché $2 \cdot 1 - 3 = -1 < 0$. La soluzione è $x = 3$.
:::

## Le disequazioni |A| < k e |A| ≤ k

:::teorema{#disequazioni-minore titolo="Disequazione della forma |A| < k"}
La disequazione $|A| < k$ chiede che $A$ disti dall'origine meno di $k$.

- $k > 0$: $\ |A| < k$ equivale alla doppia disuguaglianza $-k < A < k$, cioè al sistema
$$
\begin{cases}
A < k \\
A > -k
\end{cases}
$$
- $k \leq 0$: nessuna soluzione, perché $|A| \geq 0$.

Per $|A| \leq k$ con $k > 0$ si ha $-k \leq A \leq k$; per $k = 0$ resta la sola equazione $A = 0$; per $k < 0$ nessuna soluzione.
:::

:::esempio
$|x - 1| < 4$ equivale a $-4 < x - 1 < 4$, quindi $-3 < x < 5$: l'intervallo dei punti a distanza minore di $4$ da $1$.
:::

## Le disequazioni |A| > k e |A| ≥ k

:::teorema{#disequazioni-maggiore titolo="Disequazione della forma |A| > k"}
La disequazione $|A| > k$ chiede che $A$ disti dall'origine più di $k$.

- $k > 0$: $\ |A| > k \iff A < -k \ \vee \ A > k$, unione di due semirette.
- $k = 0$: $\ |A| > 0 \iff A \neq 0$.
- $k < 0$: la disequazione è soddisfatta da ogni $x$ per cui $A$ è definita, perché $|A| \geq 0 > k$.

Per $|A| \geq k$ con $k > 0$ si ha $A \leq -k \ \vee \ A \geq k$; per $k \leq 0$ è soddisfatta ovunque.
:::

:::esempio
$|x + 2| > 3$ equivale a
$$
x + 2 < -3 \ \vee \ x + 2 > 3 ,
$$
quindi $x < -5 \ \vee \ x > 1$.
:::

## Disequazioni con espressione al secondo membro

:::teorema{#disequazione-modulo-espressione titolo="Disequazioni della forma |A| < B e |A| > B"}
Quando il secondo membro è un'espressione $B$, le forme risolutive restano le stesse e i casi sul segno di $B$ risultano già incorporati:
$$
|A| < B \iff
\begin{cases}
A < B \\
A > -B
\end{cases}
\qquad\qquad
|A| > B \iff A > B \ \vee \ A < -B .
$$
Il sistema di sinistra impone da solo $B > 0$: dalle condizioni $A < B$ e $-B < A$ segue $-B < B$, cioè $B > 0$. L'unione di destra copre anche i punti in cui $B < 0$: se $A \geq 0$ allora $A > B$; se $A < 0$ allora $-A > 0 > B$, cioè $A < -B$. Perciò entrambe le forme si usano senza discutere il segno di $B$. Per $|A| \leq B$ e $|A| \geq B$ valgono le stesse forme con le disuguaglianze larghe.
:::

:::esempio{titolo="Modulo minore di un'espressione"}
$|x - 1| < 2x$:
$$
\begin{cases}
x - 1 < 2x \\
x - 1 > -2x
\end{cases}
\qquad
\begin{cases}
x > -1 \\
x > \dfrac{1}{3}
\end{cases}
$$
Le due condizioni valgono insieme per $x > \dfrac{1}{3}$.
:::

:::esempio{titolo="Modulo maggiore di un'espressione"}
$|x + 3| > 2x$ equivale a
$$
x + 3 > 2x \ \vee \ x + 3 < -2x ,
$$
cioè $x < 3 \ \vee \ x < -1$. L'unione delle due semirette è $x < 3$.
:::

## Due valori assoluti: lo studio per zone

:::teorema{#due-valori-assoluti titolo="Studio dei segni per zone"}
Quando compaiono due o più valori assoluti con argomenti diversi, si cercano i punti in cui gli argomenti si annullano; questi punti dividono la retta reale in zone e in ogni zona ciascun modulo si riscrive senza barre secondo il segno del proprio argomento. In ciascuna zona si risolve il sistema formato dalla condizione di zona e dall'equazione o disequazione riscritta; l'insieme delle soluzioni è l'unione dei risultati delle zone. Il procedimento segue dalla definizione di valore assoluto applicata a ogni argomento.
:::

:::esempio
$|x| + |x - 2| = 4$. Gli argomenti si annullano in $0$ e in $2$, quindi le zone sono tre:
$$
\begin{cases}
x < 0 \\
-x + (2 - x) = 4
\end{cases}
\ \cup \
\begin{cases}
0 \leq x < 2 \\
x + (2 - x) = 4
\end{cases}
\ \cup \
\begin{cases}
x \geq 2 \\
x + (x - 2) = 4
\end{cases}
$$
Nella prima zona $2 - 2x = 4$ dà $x = -1$, accettabile poiché $-1 < 0$; nella seconda l'equazione $2 = 4$ è falsa; nella terza $2x - 2 = 4$ dà $x = 3$, accettabile poiché $3 \geq 2$. Le soluzioni sono $x = -1$ e $x = 3$.
:::
