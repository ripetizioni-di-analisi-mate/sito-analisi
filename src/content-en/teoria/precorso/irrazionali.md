---
titolo: Irrational equations and inequalities
sommario: The domain conditions of roots and the systems that solve equations and inequalities with roots of even and odd index.
---

## Domain conditions

:::definizione{#condizioni-di-esistenza titolo="Domain conditions for roots of even index"}
The expression $\sqrt{A}$, like every root of even index, is meaningful *only if* $A \geq 0$, and its value is by definition the **nonnegative** number whose square is $A$; so $\sqrt{A} \geq 0$ at every point where the root is defined. For example, $\sqrt{x - 2}$ is defined for $x \geq 2$, and $\sqrt{9} = 3$, not $\pm 3$. In the solving systems of this chapter the condition $A \geq 0$ appears explicitly or is a consequence of the other conditions, and in either case it must be checked.

::grafico{f="sqrt(x-2)" xmin=-1 xmax=9 ymin=-1 ymax=3.5 punti="2,0,pieno" titolo="$y = \sqrt{x - 2}$: defined for $x \geq 2$, with nonnegative values"}

:::

## The equation √A = B

:::teorema{#equazione-radice-uguale titolo="Equation of the form √A = B"}
$$
\sqrt{A} = B \iff
\begin{cases}
B \geq 0 \\
A = B^2
\end{cases}
$$
The left-hand side is *not* negative, so the equation requires $B \geq 0$; with both sides nonnegative, squaring preserves the equality in both directions. The domain condition $A \geq 0$ need not be added, because from $A = B^2$ it follows that $A \geq 0$.
:::

:::esempio
$\sqrt{x + 3} = x + 1$:
$$
\begin{cases}
x + 1 \geq 0 \\
x + 3 = (x + 1)^2
\end{cases}
$$
The second equation is $x^2 + x - 2 = 0$, with roots $x = 1$ and $x = -2$. Since $-2 + 1 = -1 < 0$, the value $x = -2$ does not satisfy the first condition and is **discarded**; the solution is $x = 1$, and indeed $\sqrt{4} = 2 = 1 + 1$.
:::

:::attenzione
Squaring both sides without the condition $B \geq 0$ introduces **extraneous solutions**. From $\sqrt{x} = x - 2$, squaring gives $x = x^2 - 4x + 4$, that is, $x^2 - 5x + 4 = 0$, with roots $x = 1$ and $x = 4$. For $x = 1$ the left-hand side equals $\sqrt{1} = 1$ and the right-hand side equals $1 - 2 = -1$, so $x = 1$ does not solve the original equation; the **only solution** is $x = 4$. Squaring cancels signs, therefore the equality between the squares does *not* guarantee the equality between the two sides.

::grafico{f="sqrt(x);x-2;-sqrt(x)" xmin=-1 xmax=7 ymin=-3 ymax=4 punti="4,2,pieno;1,-1,vuoto" etichette="5.9,2.9,y = √x;4.6,-2.7,y = −√x" titolo="The line $y = x - 2$ meets $y = \sqrt{x}$ only at $x = 4$; at $x = 1$ it meets $y = -\sqrt{x}$, in red"}

:::

## The equation with two roots

:::teorema{#equazione-due-radici titolo="Equation of the form √A = √B"}
$$
\sqrt{A} = \sqrt{B} \iff
\begin{cases}
A \geq 0 \\
A = B
\end{cases}
$$
With both sides nonnegative, squaring preserves the equality and gives $A = B$; it is then enough to impose $A \geq 0$, because from $A = B$ it follows that the condition $B \geq 0$ is satisfied as well. Instead of $A \geq 0$ one can impose $B \geq 0$, choosing the simpler radicand.
:::

:::esempio
$\sqrt{3x - 2} = \sqrt{x + 4}$:
$$
\begin{cases}
x + 4 \geq 0 \\
3x - 2 = x + 4
\end{cases}
$$
The equation gives $x = 3$, which **satisfies the condition** since $3 + 4 = 7 \geq 0$; the solution is $x = 3$, and the two radicands both equal $7$.
:::

## The inequality √A < B

:::teorema{#disequazione-radice-minore titolo="Inequality of the form √A < B"}
$$
\sqrt{A} < B \iff
\begin{cases}
A \geq 0 \\
B > 0 \\
A < B^2
\end{cases}
$$
The condition $A \geq 0$ is the **domain condition** of the root. Since $\sqrt{A} \geq 0$, the inequality requires $B > 0$; with both sides nonnegative, squaring **preserves the direction** and gives $A < B^2$. For $\sqrt{A} \leq B$ the system is the same with $B \geq 0$ and $A \leq B^2$.
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
The condition $3 > 0$ is true for *every* $x$, so the solution is $-2 \leq x < 7$.

::grafico{f="sqrt(x+2);3" xmin=-2.5 xmax=7.5 ymin=-1 ymax=4 area="3;sqrt(x+2);-2;7" punti="-2,0,pieno;7,3,vuoto" segmenti="7,0,7,3" titolo="The graph of $y = \sqrt{x + 2}$ lies below the line $y = 3$ for $-2 \leq x < 7$"}

:::

## The inequality √A > B

:::teorema{#disequazione-radice-maggiore titolo="Inequality of the form √A > B"}
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
Where $B < 0$ it is enough for the root to **exist**, because a nonnegative number exceeds *every* negative number. Where $B \geq 0$ the two sides are nonnegative, so squaring preserves the direction; the condition $A \geq 0$ need not be added in the second system, because it follows from $A > B^2 \geq 0$. For $\sqrt{A} \geq B$ one writes $A \geq B^2$ in the second system.
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
The first system gives $-\dfrac{3}{2} \leq x < 0$. In the second, the inequality $x^2 - 2x - 3 < 0$ is equivalent to $-1 < x < 3$, so with $x \geq 0$ the values $0 \leq x < 3$ remain. The **union** of the two systems gives $-\dfrac{3}{2} \leq x < 3$.

::grafico{f="sqrt(2*x+3);x" xmin=-3 xmax=5 ymin=-3 ymax=4 area="sqrt(2*x+3);x;-1.5;3" punti="-1.5,0,pieno;3,3,vuoto" titolo="The graph of $y = \sqrt{2x + 3}$ lies above the line $y = x$ for $-\dfrac{3}{2} \leq x < 3$"}

:::

## Roots of odd index

:::teorema{#indice-dispari titolo="Roots of odd index"}
The cube root, like every root of odd index, is defined for *every* real number and can take negative values: $\sqrt[3]{-8} = -2$. Cubing **always preserves order**, because the function $y = x^3$ is increasing on all of $\mathbb{R}$, so
$$
\sqrt[3]{A} = B \iff A = B^3 , \qquad\qquad \sqrt[3]{A} < B \iff A < B^3 ,
$$
with no domain conditions and no cases on the sign of the two sides.
:::

:::esempio
$\sqrt[3]{x - 3} = -2$ is equivalent to $x - 3 = -8$, so $x = -5$; the check gives $\sqrt[3]{-8} = -2$. The analogous equation with the square root, $\sqrt{x - 3} = -2$, has **no solutions**, because a root of even index is *never* negative.

::grafico{f="cbrt(x-3);-2;sqrt(x-3)" xmin=-7 xmax=9 ymin=-3 ymax=3 punti="-5,-2,pieno" etichette="5.5,2.3,y = √(x − 3);5.5,0.6,y = ∛(x − 3)" titolo="$y = \sqrt[3]{x - 3}$ equals $-2$ at $x = -5$; $y = \sqrt{x - 3}$, in red, never goes below the $x$-axis"}

:::
