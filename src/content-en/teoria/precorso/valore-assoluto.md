---
titolo: Equations and inequalities with absolute value
sommario: The piecewise definition of absolute value, its properties, and the systems that solve equations and inequalities with one or more absolute values.
---

## Definition and geometric meaning

:::definizione{#definizione-valore-assoluto titolo="Absolute value"}
The absolute value of a real number $x$ is
$$
|x| =
\begin{cases}
x & \text{if } x \geq 0 \\
-x & \text{if } x < 0
\end{cases}
$$
The result is never negative: when $x < 0$, the number $-x$ is positive. For example $|7| = 7$ and $|-7| = -(-7) = 7$. Every solving rule in this chapter follows from this piecewise definition.

::grafico{f="abs(x)" xmin=-5 xmax=5 ymin=-1 ymax=5 titolo="y = |x|: for x ≥ 0 it coincides with y = x, for x < 0 with y = −x"}
:::

:::definizione{#modulo-come-distanza titolo="Absolute value as distance"}
For $x, c \in \mathbb{R}$, the number $|x - c|$ is the distance between $x$ and $c$ on the real line; in particular $|x|$ is the distance of $x$ from the origin. This reading translates equations and inequalities into conditions on points of the line and makes it possible to check the results. For example $|x - 3| = 2$ is satisfied by the points at distance $2$ from $3$, that is $x = 1$ and $x = 5$.
:::

## Properties

:::teorema{#proprieta-valore-assoluto titolo="Properties of absolute value"}
For all $a, b \in \mathbb{R}$,
$$
|ab| = |a|\,|b|, \qquad |a|^2 = a^2, \qquad |a + b| \leq |a| + |b| .
$$
The first is verified by examining the four cases for the signs of $a$ and $b$, and it is used to split an absolute value, for example $|{-3x}| = 3\,|x|$. The second holds because $a$ and $|a|$ differ at most in sign, which squaring cancels; since absolute values are not negative, comparing two absolute values is equivalent to comparing their squares, and this observation is the basis for solving $|A| > |B|$ by squaring. The third is the triangle inequality and is used in estimates, for example in the chapter on limits: for $a = 5$ and $b = -3$ we have $|5 + (-3)| = 2 \leq 8 = |5| + |-3|$, and equality holds when $a$ and $b$ have the same sign.
:::

:::attenzione
The absolute value is not removed by rewriting $|A| = A$: the equality holds only where $A \geq 0$. For example $|x - 5| = x - 5$ is false at $x = 0$, since $|0 - 5| = 5$ while $0 - 5 = -5$. Where $A < 0$, instead, $|A| = -A$.
:::

## The equation |A| = k

:::teorema{#equazioni-con-modulo titolo="Equation of the form |A| = k"}
$A$ is an expression in the variable $x$ and $k$ is a constant. The only numbers with absolute value $k > 0$ are $k$ and $-k$, so there are three cases.

- $k > 0$: $\ |A| = k \iff A = k \ \vee \ A = -k$.
- $k = 0$: $\ |A| = 0 \iff A = 0$, because the only number with absolute value zero is $0$.
- $k < 0$: no solution, because $|A| \geq 0$ for every $x$.
:::

:::esempio
$|x - 4| = 6$. Since $6 > 0$, the equation is equivalent to
$$
x - 4 = 6 \ \vee \ x - 4 = -6 ,
$$
so $x = 10$ or $x = -2$: the two points at distance $6$ from $4$.
:::

## The equation |A| = |B|

:::teorema{#equazione-due-moduli titolo="Equation of the form |A| = |B|"}
Two numbers have the same absolute value when they are equal or opposite, so
$$
|A| = |B| \iff A = B \ \vee \ A = -B .
$$
No additional condition is needed, because the two sides are never negative.
:::

:::esempio
$|2x - 1| = |x + 5|$ is equivalent to
$$
2x - 1 = x + 5 \ \vee \ 2x - 1 = -(x + 5) ,
$$
so $x = 6$ or $3x = -4$, that is $x = -\dfrac{4}{3}$.
:::

## The equation |A| = B

:::teorema{#equazione-modulo-uguale-espressione titolo="Equation of the form |A| = B"}
If the right-hand side is an expression $B$ in the variable, the left-hand side is never negative, so the equation also imposes the condition $B \geq 0$:
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
Solutions of the two equations that do not satisfy the condition $B \geq 0$ are discarded.
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
The first system gives $x = 3$, which satisfies the condition since $2 \cdot 3 - 3 = 3 \geq 0$; the second gives $x = 1$, which does not satisfy it, since $2 \cdot 1 - 3 = -1 < 0$. The solution is $x = 3$.
:::

## The inequalities |A| < k and |A| ≤ k

:::teorema{#disequazioni-minore titolo="Inequality of the form |A| < k"}
The inequality $|A| < k$ requires $A$ to be at distance less than $k$ from the origin.

- $k > 0$: $\ |A| < k$ is equivalent to the double inequality $-k < A < k$, that is, to the system
$$
\begin{cases}
A < k \\
A > -k
\end{cases}
$$
- $k \leq 0$: no solution, because $|A| \geq 0$.

For $|A| \leq k$ with $k > 0$ we have $-k \leq A \leq k$; for $k = 0$ only the equation $A = 0$ remains; for $k < 0$ there is no solution.
:::

:::esempio
$|x - 1| < 4$ is equivalent to $-4 < x - 1 < 4$, so $-3 < x < 5$: the interval of points at distance less than $4$ from $1$.
:::

## The inequalities |A| > k and |A| ≥ k

:::teorema{#disequazioni-maggiore titolo="Inequality of the form |A| > k"}
The inequality $|A| > k$ requires $A$ to be at distance greater than $k$ from the origin.

- $k > 0$: $\ |A| > k \iff A < -k \ \vee \ A > k$, a union of two half-lines.
- $k = 0$: $\ |A| > 0 \iff A \neq 0$.
- $k < 0$: the inequality is satisfied by every $x$ for which $A$ is defined, because $|A| \geq 0 > k$.

For $|A| \geq k$ with $k > 0$ we have $A \leq -k \ \vee \ A \geq k$; for $k \leq 0$ it is satisfied everywhere.
:::

:::esempio
$|x + 2| > 3$ is equivalent to
$$
x + 2 < -3 \ \vee \ x + 2 > 3 ,
$$
so $x < -5 \ \vee \ x > 1$.
:::

## Inequalities with an expression on the right-hand side

:::teorema{#disequazione-modulo-espressione titolo="Inequalities of the form |A| < B and |A| > B"}
When the right-hand side is an expression $B$, the solving forms stay the same and the cases on the sign of $B$ are already built in:
$$
|A| < B \iff
\begin{cases}
A < B \\
A > -B
\end{cases}
\qquad\qquad
|A| > B \iff A > B \ \vee \ A < -B .
$$
The system on the left imposes $B > 0$ by itself: from the conditions $A < B$ and $-B < A$ it follows that $-B < B$, that is $B > 0$. The union on the right also covers the points where $B < 0$: if $A \geq 0$ then $A > B$; if $A < 0$ then $-A > 0 > B$, that is $A < -B$. Therefore both forms are used without discussing the sign of $B$. For $|A| \leq B$ and $|A| \geq B$ the same forms hold with non-strict inequalities.
:::

:::esempio{titolo="Absolute value less than an expression"}
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
The two conditions hold together for $x > \dfrac{1}{3}$.
:::

:::esempio{titolo="Absolute value greater than an expression"}
$|x + 3| > 2x$ is equivalent to
$$
x + 3 > 2x \ \vee \ x + 3 < -2x ,
$$
that is $x < 3 \ \vee \ x < -1$. The union of the two half-lines is $x < 3$.
:::

## Two absolute values: the study by regions

:::teorema{#due-valori-assoluti titolo="Study of signs by regions"}
When two or more absolute values with different arguments appear, we look for the points where the arguments vanish; these points divide the real line into regions, and in each region every absolute value is rewritten without bars according to the sign of its argument. In each region we solve the system formed by the region condition and the rewritten equation or inequality; the solution set is the union of the results of the regions. The procedure follows from the definition of absolute value applied to each argument.
:::

:::esempio
$|x| + |x - 2| = 4$. The arguments vanish at $0$ and at $2$, so there are three regions:
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
In the first region $2 - 2x = 4$ gives $x = -1$, which is acceptable since $-1 < 0$; in the second the equation $2 = 4$ is false; in the third $2x - 2 = 4$ gives $x = 3$, which is acceptable since $3 \geq 2$. The solutions are $x = -1$ and $x = 3$.
:::
