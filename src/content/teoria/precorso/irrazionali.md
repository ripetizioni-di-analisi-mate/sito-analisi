---
titolo: Equazioni e disequazioni irrazionali
sommario: Le condizioni di esistenza delle radici e i sistemi che risolvono equazioni e disequazioni con radici di indice pari e dispari.
---

## Condizioni di esistenza

:::definizione{#condizioni-di-esistenza titolo="Condizioni di esistenza delle radici di indice pari"}
La scrittura $\sqrt{A}$, come ogni radice di indice pari, ha significato solo se $A \geq 0$, e il suo valore è per definizione il numero non negativo il cui quadrato è $A$; quindi $\sqrt{A} \geq 0$ in ogni punto in cui la radice è definita. Per esempio $\sqrt{x - 2}$ è definita per $x \geq 2$, e $\sqrt{9} = 3$, non $\pm 3$. Nei sistemi risolutivi di questo capitolo la condizione $A \geq 0$ compare esplicitamente oppure è conseguenza delle altre condizioni, e in ogni caso va controllata.
:::

## L'equazione √A = B

:::teorema{#equazione-radice-uguale titolo="Equazione della forma √A = B"}
$$
\sqrt{A} = B \iff
\begin{cases}
B \geq 0 \\
A = B^2
\end{cases}
$$
Il primo membro non è negativo, quindi l'equazione impone $B \geq 0$; con entrambi i membri non negativi, l'elevamento al quadrato conserva l'uguaglianza nei due versi. La condizione di esistenza $A \geq 0$ non va aggiunta, perché da $A = B^2$ segue $A \geq 0$.
:::

:::esempio
$\sqrt{x + 3} = x + 1$:
$$
\begin{cases}
x + 1 \geq 0 \\
x + 3 = (x + 1)^2
\end{cases}
$$
La seconda equazione è $x^2 + x - 2 = 0$, con radici $x = 1$ e $x = -2$. Poiché $-2 + 1 = -1 < 0$, il valore $x = -2$ non soddisfa la prima condizione e si scarta; la soluzione è $x = 1$, e infatti $\sqrt{4} = 2 = 1 + 1$.
:::

:::attenzione
Elevare al quadrato entrambi i membri senza la condizione $B \geq 0$ introduce soluzioni estranee. Da $\sqrt{x} = x - 2$, elevando al quadrato, si ottiene $x = x^2 - 4x + 4$, cioè $x^2 - 5x + 4 = 0$, con radici $x = 1$ e $x = 4$. Per $x = 1$ il primo membro vale $\sqrt{1} = 1$ e il secondo vale $1 - 2 = -1$, quindi $x = 1$ non risolve l'equazione di partenza; la sola soluzione è $x = 4$. Il quadrato cancella i segni, perciò l'uguaglianza tra i quadrati non garantisce l'uguaglianza tra i membri.
:::

## L'equazione con due radici

:::teorema{#equazione-due-radici titolo="Equazione della forma √A = √B"}
$$
\sqrt{A} = \sqrt{B} \iff
\begin{cases}
A \geq 0 \\
A = B
\end{cases}
$$
Con entrambi i membri non negativi, l'elevamento al quadrato conserva l'uguaglianza e dà $A = B$; basta allora imporre $A \geq 0$, perché da $A = B$ segue che anche la condizione $B \geq 0$ è soddisfatta. Al posto di $A \geq 0$ si può imporre $B \geq 0$, scegliendo il radicando più semplice.
:::

:::esempio
$\sqrt{3x - 2} = \sqrt{x + 4}$:
$$
\begin{cases}
x + 4 \geq 0 \\
3x - 2 = x + 4
\end{cases}
$$
L'equazione dà $x = 3$, che soddisfa la condizione poiché $3 + 4 = 7 \geq 0$; la soluzione è $x = 3$, e i due radicandi valgono entrambi $7$.
:::

## La disequazione √A < B

:::teorema{#disequazione-radice-minore titolo="Disequazione della forma √A < B"}
$$
\sqrt{A} < B \iff
\begin{cases}
A \geq 0 \\
B > 0 \\
A < B^2
\end{cases}
$$
La condizione $A \geq 0$ è la condizione di esistenza della radice. Poiché $\sqrt{A} \geq 0$, la disuguaglianza impone $B > 0$; con entrambi i membri non negativi, l'elevamento al quadrato conserva il verso e dà $A < B^2$. Per $\sqrt{A} \leq B$ il sistema è lo stesso con $B \geq 0$ e $A \leq B^2$.
:::

:::esempio
$\sqrt{x + 2} < 3$:
$$
\begin{cases}
x + 2 \geq 0 \\
3 > 0 \\
x + 2 < 9
\end{cases}
\qquad
\begin{cases}
x \geq -2 \\
x < 7
\end{cases}
$$
La condizione $3 > 0$ è vera per ogni $x$, quindi la soluzione è $-2 \leq x < 7$.
:::

## La disequazione √A > B

:::teorema{#disequazione-radice-maggiore titolo="Disequazione della forma √A > B"}
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
Dove $B < 0$ basta che la radice esista, perché un numero non negativo supera ogni numero negativo. Dove $B \geq 0$ i due membri sono non negativi, quindi l'elevamento al quadrato conserva il verso; la condizione $A \geq 0$ non va aggiunta nel secondo sistema, perché segue da $A > B^2 \geq 0$. Per $\sqrt{A} \geq B$ si scrive $A \geq B^2$ nel secondo sistema.
:::

:::esempio
$\sqrt{2x + 3} > x$:
$$
\begin{cases}
x < 0 \\
2x + 3 \geq 0
\end{cases}
\ \cup \
\begin{cases}
x \geq 0 \\
2x + 3 > x^2
\end{cases}
$$
Il primo sistema dà $-\dfrac{3}{2} \leq x < 0$. Nel secondo, la disequazione $x^2 - 2x - 3 < 0$ equivale a $-1 < x < 3$, quindi con $x \geq 0$ restano i valori $0 \leq x < 3$. L'unione dei due sistemi dà $-\dfrac{3}{2} \leq x < 3$.
:::

## Radici di indice dispari

:::teorema{#indice-dispari titolo="Radici di indice dispari"}
La radice cubica, come ogni radice di indice dispari, è definita per ogni numero reale e può assumere valori negativi: $\sqrt[3]{-8} = -2$. L'elevamento al cubo conserva sempre l'ordine, perché la funzione $y = x^3$ è crescente su tutto $\mathbb{R}$, quindi
$$
\sqrt[3]{A} = B \iff A = B^3 , \qquad\qquad \sqrt[3]{A} < B \iff A < B^3 ,
$$
senza condizioni di esistenza e senza casi sul segno dei membri.
:::

:::esempio
$\sqrt[3]{x - 3} = -2$ equivale a $x - 3 = -8$, quindi $x = -5$; il controllo dà $\sqrt[3]{-8} = -2$. L'equazione analoga con la radice quadrata, $\sqrt{x - 3} = -2$, non ha soluzioni, perché una radice di indice pari non è mai negativa.
:::
