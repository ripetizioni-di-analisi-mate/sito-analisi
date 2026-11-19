---
titolo: Irrational equations and inequalities
sommario: The conditions of existence of roots and the systems that solve equations and inequalities with roots of even and odd index.
---

## Domain restrictions

:::definizione{#condizioni-di-esistenza titolo="Domain restrictions for even roots"}
The expression $\sqrt{A}$, like every even root, is meaningful *only if* $A \geq 0$, and its value is by definition the **nonnegative** number whose square is $A$; so $\sqrt{A} \geq 0$ at every point where the root is defined. For example, $\sqrt{x - 2}$ is defined for $x \geq 2$, and $\sqrt{9} = 3$, not $\pm 3$. In the systems used to solve equations and inequalities in this chapter the condition $A \geq 0$ appears explicitly or is a consequence of the other conditions, and in either case it must be checked.

::grafico{f="sqrt(x-2)" xmin=-1 xmax=9 ymin=-1 ymax=3.5 punti="2,0,pieno" titolo="$y = \sqrt{x - 2}$: defined for $x \geq 2$, with nonnegative values"}
:::


:::esempio{titolo="Domain of an expression with two roots"}
The expression $\sqrt{x + 1} + \dfrac{1}{\sqrt{4 - x}}$ is defined where both radicands are nonnegative and the denominator is nonzero. The denominator $\sqrt{4 - x}$ vanishes for $x = 4$, so its radicand must be strictly positive:
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
The expression is therefore defined for $-1 \leq x < 4$.
:::

:::attenzione
The equality $\sqrt{x^2} = x$ holds *only* for $x \geq 0$. For $x = -3$ one has $\sqrt{(-3)^2} = \sqrt{9} = 3$, which is different from $-3$. Since $\sqrt{x^2}$ is the nonnegative number whose square is $x^2$, for every real $x$ one has $\sqrt{x^2} = |x|$.

::grafico{f="sqrt(x^2);x" xmin=-4 xmax=4 ymin=-4 ymax=4 punti="-3,3,pieno;-3,-3,vuoto" legenda="y = \sqrt{x^2};y = x" titolo="The graph of $y = \sqrt{x^2}$ coincides with that of $y = |x|$; the line $y = x$ coincides with it only for $x \geq 0$"}
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
The left-hand side is not negative, so the equation requires $B \geq 0$; with both sides nonnegative, squaring **preserves the equality** in both directions. The domain restriction $A \geq 0$ does *not* need to be added, because from $A = B^2$ it follows that $A \geq 0$.
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
Squaring both sides without the condition $B \geq 0$ introduces **extraneous solutions**. From $\sqrt{x} = x - 2$, squaring gives $x = x^2 - 4x + 4$, that is, $x^2 - 5x + 4 = 0$, with roots $x = 1$ and $x = 4$. For $x = 1$ the left-hand side equals $\sqrt{1} = 1$ and the right-hand side equals $1 - 2 = -1$, so $x = 1$ does not solve the original equation; the only solution is $x = 4$. Two opposite numbers have the same square, like $1$ and $-1$, therefore the equality between the squares does *not* guarantee the equality between the two sides.

::grafico{f="sqrt(x);x-2;-sqrt(x)" xmin=-1 xmax=7 ymin=-3 ymax=4 punti="4,2,pieno;1,-1,vuoto" etichette="5.9,2.9,y = √x;4.6,-2.7,y = −√x" titolo="The line $y = x - 2$ meets $y = \sqrt{x}$ only at $x = 4$; at $x = 1$ it meets $y = -\sqrt{x}$, in red"}
:::


:::osservazione
When the right-hand side is a negative constant, the solving system contains a false condition, so the equation has no solutions. For example, $\sqrt{x + 7} = -1$ has no solutions, because the condition $-1 \geq 0$ is false. When the right-hand side is $0$, the condition $B \geq 0$ is satisfied and the equation is equivalent to $A = 0$. Thus $\sqrt{x^2 - 4} = 0$ is equivalent to $x^2 - 4 = 0$, that is, to $x = -2 \ \vee \ x = 2$.
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
With both sides nonnegative, squaring preserves the equality and gives $A = B$; it is then enough to impose $A \geq 0$, because from $A = B$ it follows that the condition $B \geq 0$ is **satisfied** as well. Instead of $A \geq 0$ one can impose $B \geq 0$, choosing the **simpler** radicand.
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


:::attenzione
Equating the radicands without the condition $A \geq 0$ can produce a value at which the roots do not exist. From $\sqrt{x - 5} = \sqrt{2x - 7}$ one gets $x - 5 = 2x - 7$, that is, $x = 2$. For $x = 2$ both radicands equal $-3$, so neither root is defined and the equation **has no solutions**; in the solving system the condition $x - 5 \geq 0$ indeed excludes $x = 2$.
:::

## The inequality √A < B

::::teorema{#quadrato-conserva-ordine titolo="Squaring preserves order between nonnegative numbers"}
Let $a \geq 0$ and $b \geq 0$. Then
$$
a < b \iff a^2 < b^2 .
$$
This property justifies squaring in the solving systems of irrational inequalities, where both sides are nonnegative. For example, $\sqrt{10}$ and $3$ are nonnegative and their squares are $10$ and $9$; since $10 > 9$, one has $\sqrt{10} > 3$.

:::dimostrazione
The idea is to write the difference of the squares as a product:
$$
b^2 - a^2 = (b - a)(b + a) .
$$
If $a = b = 0$, both inequalities $a < b$ and $a^2 < b^2$ are false, so the equivalence holds. Otherwise $a + b > 0$, because $a$ and $b$ are nonnegative and not both zero. Then $b^2 - a^2$ has the same sign as $b - a$, therefore $b - a > 0$ if and only if $b^2 - a^2 > 0$.
:::
::::

:::teorema{#disequazione-radice-minore titolo="Inequality of the form √A < B"}
$$
\sqrt{A} < B \iff
\begin{cases}
A \geq 0 \\
B > 0 \\
A < B^2
\end{cases}
$$
The condition $A \geq 0$ is the domain restriction for the root. Since $\sqrt{A} \geq 0$, the inequality **requires** $B > 0$; with both sides nonnegative, squaring **preserves the direction** and gives $A < B^2$. For $\sqrt{A} \leq B$ the system is the same with $B \geq 0$ and $A \leq B^2$.
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
The condition $3 > 0$ is true *for every* $x$, so the solution is $-2 \leq x < 7$.

::grafico{f="sqrt(x+2);3" xmin=-2.5 xmax=7.5 ymin=-1 ymax=4 area="3;sqrt(x+2);-2;7" punti="-2,0,pieno;7,3,vuoto" segmenti="7,0,7,3" titolo="The graph of $y = \sqrt{x + 2}$ lies below the line $y = 3$ for $-2 \leq x < 7$"}
:::


:::attenzione
In the system for $\sqrt{A} < B$ the domain restriction $A \geq 0$ is necessary, because it does not follow from the other two conditions. For $\sqrt{x + 1} < 2$ the comparison $x + 1 < 4$ alone gives $x < 3$, a set that also contains $x = -5$, where the radicand equals $-4$ and the root is not defined. With the condition $x + 1 \geq 0$ the solution is $-1 \leq x < 3$.
:::

:::osservazione
If $B$ is a negative or zero constant, the condition $B > 0$ is false, so the inequality $\sqrt{A} < B$ has no solutions; for example, $\sqrt{x - 1} < -2$ has no solutions. The non-strict inequality $\sqrt{A} \leq 0$ is instead equivalent to $A = 0$, because a square root is nonnegative and so it is less than or equal to $0$ only when it equals $0$. Thus $\sqrt{x - 1} \leq 0$ is equivalent to $x = 1$.
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
Where $B < 0$ it is enough for the root to exist, because a nonnegative number exceeds *every* negative number. Where $B \geq 0$ the two sides are nonnegative, so squaring **preserves the direction**; the condition $A \geq 0$ need not be added in the second system, because it follows from $A > B^2 \geq 0$. For $\sqrt{A} \geq B$ one writes $A \geq B^2$ in the second system.
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
The first system gives $-\dfrac{3}{2} \leq x < 0$. In the second, the inequality $2x + 3 > x^2$ is rewritten as $x^2 - 2x - 3 < 0$; the trinomial has roots $-1$ and $3$ and is negative between the roots, so the inequality is equivalent to $-1 < x < 3$, so with $x \geq 0$ the values $0 \leq x < 3$ remain. The **union** of the two systems gives $-\dfrac{3}{2} \leq x < 3$.

::grafico{f="sqrt(2*x+3);x" xmin=-3 xmax=5 ymin=-3 ymax=4 area="sqrt(2*x+3);x;-1.5;3" punti="-1.5,0,pieno;3,3,vuoto" titolo="The graph of $y = \sqrt{2x + 3}$ lies above the line $y = x$ for $-\dfrac{3}{2} \leq x < 3$"}
:::


:::osservazione
If $B$ is a negative constant, every value at which the root exists satisfies the inequality, because a nonnegative number is greater than a negative number. Only the domain restriction then remains: $\sqrt{x - 3} > -1$ is equivalent to $x - 3 \geq 0$, that is, to $x \geq 3$.
:::

:::attenzione
Solving only the second system, the one with $B \geq 0$, excludes the solutions at which the right-hand side is negative. For $\sqrt{x + 7} > x + 1$ the second system is
$$
\begin{cases}
x + 1 \geq 0 \\
x + 7 > (x + 1)^2
\end{cases}
$$
and its second condition reduces to $x^2 + x - 6 < 0$, that is, to $-3 < x < 2$; the system therefore gives $-1 \leq x < 2$. The value $x = -4$ does not belong to this interval, yet it satisfies the inequality, since $\sqrt{3} > -3$. The first system, with $x + 1 < 0$ and $x + 7 \geq 0$, gives the interval $-7 \leq x < -1$, and the complete solution is $-7 \leq x < 2$.

::grafico{f="sqrt(x+7);x+1" xmin=-8 xmax=4 ymin=-7 ymax=4 area="sqrt(x+7);x+1;-7;2" punti="-7,0,pieno;2,3,vuoto" segmenti="-1,0,-1,2.449" titolo="The graph of $y = \sqrt{x + 7}$ lies above the line $y = x + 1$ for $-7 \leq x < 2$; to the left of $x = -1$ the line is below the $x$-axis"}
:::

## Odd roots

:::teorema{#indice-dispari titolo="Odd roots"}
The cube root, like every odd root, is defined *for every* real number and can take negative values: $\sqrt[3]{-8} = -2$. Cubing **always preserves order**, because the function $y = x^3$ is increasing on all of $\mathbb{R}$, that is, a larger number has a larger cube, so
$$
\sqrt[3]{A} = B \iff A = B^3 , \qquad\qquad \sqrt[3]{A} < B \iff A < B^3 ,
$$
with no domain restrictions and no cases on the sign of the two sides.
:::

:::esempio
$\sqrt[3]{x - 3} = -2$ is equivalent to $x - 3 = -8$, so $x = -5$; the check gives $\sqrt[3]{-8} = -2$. The analogous equation with the square root, $\sqrt{x - 3} = -2$, **has no solutions**, because an even root is *never* negative.

::grafico{f="cbrt(x-3);-2;sqrt(x-3)" xmin=-7 xmax=9 ymin=-3 ymax=3 punti="-5,-2,pieno" etichette="5.5,2.3,y = √(x − 3);5.5,0.6,y = ∛(x − 3)" titolo="$y = \sqrt[3]{x - 3}$ equals $-2$ at $x = -5$; $y = \sqrt{x - 3}$, in red, never goes below the $x$-axis"}
:::

::::teorema{#cubo-crescente titolo="Monotonicity of the cube function"}
For every pair of real numbers $a$ and $b$
$$
a < b \iff a^3 < b^3 .
$$
This property justifies the equivalence $\sqrt[3]{A} < B \iff A < B^3$ with no conditions on the sign of the two sides. For example, from $-2 < 1$ it follows that $(-2)^3 = -8 < 1 = 1^3$, whereas the squares $(-2)^2 = 4$ and $1^2 = 1$ are in the opposite order.

:::dimostrazione
The idea is to factor the difference of the cubes:
$$
b^3 - a^3 = (b - a)\left(a^2 + ab + b^2\right) .
$$
The second factor can be written as a sum of squares,
$$
a^2 + ab + b^2 = \left(a + \frac{b}{2}\right)^2 + \frac{3}{4}\, b^2 ,
$$
so it is nonnegative and vanishes only for $a = b = 0$. If $a \neq b$, the two numbers are not both zero, therefore $a^2 + ab + b^2 > 0$ and $b^3 - a^3$ has the same sign as $b - a$. If $a = b$, both inequalities are false and the equivalence still holds.
:::
::::

:::esempio{titolo="Cube root less than an expression"}
By the monotonicity of the cube function, $\sqrt[3]{x^3 - 7} < x - 1$ is equivalent to
$$
x^3 - 7 < (x - 1)^3 = x^3 - 3x^2 + 3x - 1 .
$$
The terms $x^3$ cancel and what remains is $3x^2 - 3x - 6 < 0$, that is, $x^2 - x - 2 < 0$, which is satisfied between the roots $-1$ and $2$. The solution is $-1 < x < 2$, obtained with no domain restrictions and without distinguishing the sign of the right-hand side.

::grafico{f="cbrt(x^3-7);x-1" xmin=-3 xmax=4 ymin=-4 ymax=4 area="x-1;cbrt(x^3-7);-1;2" punti="-1,-2,vuoto;2,1,vuoto" legenda="y = \sqrt[3]{x^3 - 7};y = x - 1" titolo="The graph of $y = \sqrt[3]{x^3 - 7}$ lies below the line $y = x - 1$ for $-1 < x < 2$"}
:::
