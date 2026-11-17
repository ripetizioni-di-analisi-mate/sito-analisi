---
titolo: Equazioni e disequazioni irrazionali
sommario: Le condizioni di esistenza delle radici e i sistemi che risolvono equazioni e disequazioni con radici di indice pari e dispari.
---

## Condizioni di esistenza

:::definizione{#condizioni-di-esistenza titolo="Condizioni di esistenza delle radici di indice pari"}
La scrittura $\sqrt{A}$, come ogni radice di indice pari, ha significato *solo se* $A \geq 0$, e il suo valore è per definizione il numero **non negativo** il cui quadrato è $A$; quindi $\sqrt{A} \geq 0$ in ogni punto in cui la radice è definita. Per esempio $\sqrt{x - 2}$ è definita per $x \geq 2$, e $\sqrt{9} = 3$, non $\pm 3$. Nei sistemi risolutivi di questo capitolo la condizione $A \geq 0$ compare esplicitamente oppure è conseguenza delle altre condizioni, e in ogni caso va controllata.

::grafico{f="sqrt(x-2)" xmin=-1 xmax=9 ymin=-1 ymax=3.5 punti="2,0,pieno" titolo="$y = \sqrt{x - 2}$: definita per $x \geq 2$, con valori non negativi"}
:::


:::esempio{titolo="Dominio di un'espressione con due radici"}
L'espressione $\sqrt{x + 1} + \dfrac{1}{\sqrt{4 - x}}$ è definita dove entrambi i radicandi sono non negativi e il denominatore è diverso da zero. Il denominatore $\sqrt{4 - x}$ si annulla per $x = 4$, quindi il suo radicando deve essere strettamente positivo:
$$
\begin{cases}
x + 1 \geq 0 \\
4 - x > 0
\end{cases}
\qquad
\begin{cases}
x \geq -1 \\
x < 4
\end{cases}
$$
L'espressione è perciò definita per $-1 \leq x < 4$.
:::

:::attenzione
L'uguaglianza $\sqrt{x^2} = x$ vale *solo* per $x \geq 0$. Per $x = -3$ si ha $\sqrt{(-3)^2} = \sqrt{9} = 3$, che è diverso da $-3$. Poiché $\sqrt{x^2}$ è il numero non negativo il cui quadrato è $x^2$, per ogni $x$ reale vale $\sqrt{x^2} = |x|$.

::grafico{f="sqrt(x^2);x" xmin=-4 xmax=4 ymin=-4 ymax=4 punti="-3,3,pieno;-3,-3,vuoto" legenda="y = \sqrt{x^2};y = x" titolo="Il grafico di $y = \sqrt{x^2}$ coincide con quello di $y = |x|$; la retta $y = x$ coincide con esso solo per $x \geq 0$"}
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
Il primo membro non è negativo, quindi l'equazione impone $B \geq 0$; con entrambi i membri non negativi, l'elevamento al quadrato **conserva l'uguaglianza** nei due versi. La condizione di esistenza $A \geq 0$ *non* va aggiunta, perché da $A = B^2$ segue $A \geq 0$.
:::

:::esempio
$\sqrt{x + 3} = x + 1$:
$$
\begin{cases}
x + 1 \geq 0 \\
x + 3 = (x + 1)^2
\end{cases}
$$
La seconda equazione è $x^2 + x - 2 = 0$, con radici $x = 1$ e $x = -2$. Poiché $-2 + 1 = -1 < 0$, il valore $x = -2$ non soddisfa la prima condizione e **si scarta**; la soluzione è $x = 1$, e infatti $\sqrt{4} = 2 = 1 + 1$.
:::

:::attenzione
Elevare al quadrato entrambi i membri senza la condizione $B \geq 0$ introduce **soluzioni estranee**. Da $\sqrt{x} = x - 2$, elevando al quadrato, si ottiene $x = x^2 - 4x + 4$, cioè $x^2 - 5x + 4 = 0$, con radici $x = 1$ e $x = 4$. Per $x = 1$ il primo membro vale $\sqrt{1} = 1$ e il secondo vale $1 - 2 = -1$, quindi $x = 1$ non risolve l'equazione di partenza; la sola soluzione è $x = 4$. Il quadrato cancella i segni, perciò l'uguaglianza tra i quadrati *non* garantisce l'uguaglianza tra i membri.

::grafico{f="sqrt(x);x-2;-sqrt(x)" xmin=-1 xmax=7 ymin=-3 ymax=4 punti="4,2,pieno;1,-1,vuoto" etichette="5.9,2.9,y = √x;4.6,-2.7,y = −√x" titolo="La retta $y = x - 2$ incontra $y = \sqrt{x}$ solo in $x = 4$; in $x = 1$ incontra $y = -\sqrt{x}$, in rosso"}
:::


:::osservazione
Quando il secondo membro è una costante negativa, il sistema risolutivo contiene una condizione falsa, quindi l'equazione non ha soluzioni. Per esempio $\sqrt{x + 7} = -1$ non ha soluzioni, perché la condizione $-1 \geq 0$ è falsa. Quando il secondo membro è $0$, la condizione $B \geq 0$ è soddisfatta e l'equazione equivale a $A = 0$. Così $\sqrt{x^2 - 4} = 0$ equivale a $x^2 - 4 = 0$, cioè a $x = -2 \ \vee \ x = 2$.
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
Con entrambi i membri non negativi, l'elevamento al quadrato conserva l'uguaglianza e dà $A = B$; basta allora imporre $A \geq 0$, perché da $A = B$ segue che anche la condizione $B \geq 0$ è **soddisfatta**. Al posto di $A \geq 0$ si può imporre $B \geq 0$, scegliendo il radicando **più semplice**.
:::

:::esempio
$\sqrt{3x - 2} = \sqrt{x + 4}$:
$$
\begin{cases}
x + 4 \geq 0 \\
3x - 2 = x + 4
\end{cases}
$$
L'equazione dà $x = 3$, che **soddisfa la condizione** poiché $3 + 4 = 7 \geq 0$; la soluzione è $x = 3$, e i due radicandi valgono entrambi $7$.
:::


:::attenzione
Uguagliare i radicandi senza la condizione $A \geq 0$ può dare un valore in cui le radici non esistono. Da $\sqrt{x - 5} = \sqrt{2x - 7}$ si ottiene $x - 5 = 2x - 7$, cioè $x = 2$. Per $x = 2$ entrambi i radicandi valgono $-3$, quindi nessuna delle due radici è definita e l'equazione **non ha soluzioni**; nel sistema risolutivo la condizione $x - 5 \geq 0$ esclude infatti $x = 2$.
:::

## La disequazione √A < B

::::teorema{#quadrato-conserva-ordine titolo="Il quadrato conserva l'ordine tra numeri non negativi"}
Siano $a \geq 0$ e $b \geq 0$. Allora
$$
a < b \iff a^2 < b^2 .
$$
Questa proprietà giustifica l'elevamento al quadrato nei sistemi risolutivi delle disequazioni irrazionali, dove entrambi i membri sono non negativi. Per esempio $\sqrt{10}$ e $3$ sono non negativi e i loro quadrati sono $10$ e $9$; poiché $10 > 9$, si ha $\sqrt{10} > 3$.

:::dimostrazione
L'idea è scrivere la differenza dei quadrati come prodotto:
$$
b^2 - a^2 = (b - a)(b + a) .
$$
Se $a = b = 0$, entrambe le disuguaglianze $a < b$ e $a^2 < b^2$ sono false, quindi l'equivalenza vale. Altrimenti $a + b > 0$, perché $a$ e $b$ sono non negativi e non entrambi nulli. Allora $b^2 - a^2$ ha lo stesso segno di $b - a$, perciò $b - a > 0$ se e solo se $b^2 - a^2 > 0$.
:::
::::

:::teorema{#disequazione-radice-minore titolo="Disequazione della forma √A < B"}
$$
\sqrt{A} < B \iff
\begin{cases}
A \geq 0 \\
B > 0 \\
A < B^2
\end{cases}
$$
La condizione $A \geq 0$ è la condizione di esistenza della radice. Poiché $\sqrt{A} \geq 0$, la disuguaglianza **impone** $B > 0$; con entrambi i membri non negativi, l'elevamento al quadrato **conserva il verso** e dà $A < B^2$. Per $\sqrt{A} \leq B$ il sistema è lo stesso con $B \geq 0$ e $A \leq B^2$.
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
La condizione $3 > 0$ è vera *per ogni* $x$, quindi la soluzione è $-2 \leq x < 7$.

::grafico{f="sqrt(x+2);3" xmin=-2.5 xmax=7.5 ymin=-1 ymax=4 area="3;sqrt(x+2);-2;7" punti="-2,0,pieno;7,3,vuoto" segmenti="7,0,7,3" titolo="Il grafico di $y = \sqrt{x + 2}$ sta sotto la retta $y = 3$ per $-2 \leq x < 7$"}
:::


:::attenzione
Nel sistema di $\sqrt{A} < B$ la condizione di esistenza $A \geq 0$ è necessaria, perché non segue dalle altre due condizioni. Per $\sqrt{x + 1} < 2$ il solo confronto $x + 1 < 4$ dà $x < 3$, un insieme che contiene anche $x = -5$, dove il radicando vale $-4$ e la radice non è definita. Con la condizione $x + 1 \geq 0$ la soluzione è $-1 \leq x < 3$.
:::

:::osservazione
Se $B$ è una costante negativa o nulla, la condizione $B > 0$ è falsa, quindi la disequazione $\sqrt{A} < B$ non ha soluzioni; per esempio $\sqrt{x - 1} < -2$ non ha soluzioni. La disequazione larga $\sqrt{A} \leq 0$ equivale invece ad $A = 0$, perché una radice quadrata è non negativa e quindi è minore o uguale a $0$ solo quando vale $0$. Così $\sqrt{x - 1} \leq 0$ equivale a $x = 1$.
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
Dove $B < 0$ basta che la radice esista, perché un numero non negativo supera *ogni* numero negativo. Dove $B \geq 0$ i due membri sono non negativi, quindi l'elevamento al quadrato **conserva il verso**; la condizione $A \geq 0$ non va aggiunta nel secondo sistema, perché segue da $A > B^2 \geq 0$. Per $\sqrt{A} \geq B$ si scrive $A \geq B^2$ nel secondo sistema.
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
Il primo sistema dà $-\dfrac{3}{2} \leq x < 0$. Nel secondo, la disequazione $x^2 - 2x - 3 < 0$ equivale a $-1 < x < 3$, quindi con $x \geq 0$ restano i valori $0 \leq x < 3$. L'**unione** dei due sistemi dà $-\dfrac{3}{2} \leq x < 3$.

::grafico{f="sqrt(2*x+3);x" xmin=-3 xmax=5 ymin=-3 ymax=4 area="sqrt(2*x+3);x;-1.5;3" punti="-1.5,0,pieno;3,3,vuoto" titolo="Il grafico di $y = \sqrt{2x + 3}$ sta sopra la retta $y = x$ per $-\dfrac{3}{2} \leq x < 3$"}
:::


:::osservazione
Se $B$ è una costante negativa, ogni valore in cui la radice esiste soddisfa la disequazione, perché un numero non negativo è maggiore di un numero negativo. Resta allora la sola condizione di esistenza: $\sqrt{x - 3} > -1$ equivale a $x - 3 \geq 0$, cioè a $x \geq 3$.
:::

:::attenzione
Risolvere soltanto il secondo sistema, quello con $B \geq 0$, esclude le soluzioni in cui il secondo membro è negativo. Per $\sqrt{x + 7} > x + 1$ il secondo sistema è
$$
\begin{cases}
x + 1 \geq 0 \\
x + 7 > (x + 1)^2
\end{cases}
$$
e la sua seconda condizione si riduce a $x^2 + x - 6 < 0$, cioè a $-3 < x < 2$; il sistema dà quindi $-1 \leq x < 2$. Il valore $x = -4$ non appartiene a questo intervallo, eppure soddisfa la disequazione, poiché $\sqrt{3} > -3$. Il primo sistema, con $x + 1 < 0$ e $x + 7 \geq 0$, dà l'intervallo $-7 \leq x < -1$, e la soluzione completa è $-7 \leq x < 2$.

::grafico{f="sqrt(x+7);x+1" xmin=-8 xmax=4 ymin=-7 ymax=4 area="sqrt(x+7);x+1;-7;2" punti="-7,0,pieno;2,3,vuoto" segmenti="-1,0,-1,2.449" titolo="Il grafico di $y = \sqrt{x + 7}$ sta sopra la retta $y = x + 1$ per $-7 \leq x < 2$; a sinistra di $x = -1$ la retta è sotto l'asse $x$"}
:::

## Radici di indice dispari

:::teorema{#indice-dispari titolo="Radici di indice dispari"}
La radice cubica, come ogni radice di indice dispari, è definita *per ogni* numero reale e può assumere valori negativi: $\sqrt[3]{-8} = -2$. L'elevamento al cubo **conserva sempre l'ordine**, perché la funzione $y = x^3$ è crescente su tutto $\mathbb{R}$, quindi
$$
\sqrt[3]{A} = B \iff A = B^3 , \qquad\qquad \sqrt[3]{A} < B \iff A < B^3 ,
$$
senza condizioni di esistenza e senza casi sul segno dei membri.
:::

:::esempio
$\sqrt[3]{x - 3} = -2$ equivale a $x - 3 = -8$, quindi $x = -5$; il controllo dà $\sqrt[3]{-8} = -2$. L'equazione analoga con la radice quadrata, $\sqrt{x - 3} = -2$, **non ha soluzioni**, perché una radice di indice pari non è *mai* negativa.

::grafico{f="cbrt(x-3);-2;sqrt(x-3)" xmin=-7 xmax=9 ymin=-3 ymax=3 punti="-5,-2,pieno" etichette="5.5,2.3,y = √(x − 3);5.5,0.6,y = ∛(x − 3)" titolo="$y = \sqrt[3]{x - 3}$ vale $-2$ in $x = -5$; $y = \sqrt{x - 3}$, in rosso, non scende mai sotto l'asse $x$"}
:::

::::teorema{#cubo-crescente titolo="Monotonia della funzione cubo"}
Per ogni coppia di numeri reali $a$ e $b$ vale
$$
a < b \iff a^3 < b^3 .
$$
Questa proprietà giustifica l'equivalenza $\sqrt[3]{A} < B \iff A < B^3$ senza condizioni sul segno dei membri. Per esempio, da $-2 < 1$ segue $(-2)^3 = -8 < 1 = 1^3$, mentre i quadrati $(-2)^2 = 4$ e $1^2 = 1$ sono nell'ordine opposto.

:::dimostrazione
L'idea è scomporre la differenza dei cubi:
$$
b^3 - a^3 = (b - a)\left(a^2 + ab + b^2\right) .
$$
Il secondo fattore si scrive come somma di quadrati,
$$
a^2 + ab + b^2 = \left(a + \frac{b}{2}\right)^2 + \frac{3}{4}\, b^2 ,
$$
quindi è non negativo e si annulla solo per $a = b = 0$. Se $a \neq b$, i due numeri non sono entrambi nulli, perciò $a^2 + ab + b^2 > 0$ e $b^3 - a^3$ ha lo stesso segno di $b - a$. Se $a = b$, entrambe le disuguaglianze sono false e l'equivalenza vale ancora.
:::
::::

:::esempio{titolo="Radice cubica minore di un'espressione"}
Per la monotonia della funzione cubo, $\sqrt[3]{x^3 - 7} < x - 1$ equivale a
$$
x^3 - 7 < (x - 1)^3 = x^3 - 3x^2 + 3x - 1 .
$$
I termini $x^3$ si cancellano e resta $3x^2 - 3x - 6 < 0$, cioè $x^2 - x - 2 < 0$, che è soddisfatta tra le radici $-1$ e $2$. La soluzione è $-1 < x < 2$, ottenuta senza condizioni di esistenza e senza distinguere il segno del secondo membro.

::grafico{f="cbrt(x^3-7);x-1" xmin=-3 xmax=4 ymin=-4 ymax=4 area="x-1;cbrt(x^3-7);-1;2" punti="-1,-2,vuoto;2,1,vuoto" legenda="y = \sqrt[3]{x^3 - 7};y = x - 1" titolo="Il grafico di $y = \sqrt[3]{x^3 - 7}$ sta sotto la retta $y = x - 1$ per $-1 < x < 2$"}
:::
