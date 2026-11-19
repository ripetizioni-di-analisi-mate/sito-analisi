---
titolo: Equations and inequalities with absolute value
sommario: The piecewise definition of absolute value, its properties, and the systems that solve equations and inequalities with one or more absolute values.
---

## Definition and geometric meaning

:::definizione{#definizione-valore-assoluto titolo="Absolute value"}
The **absolute value** of a real number $x$ is
$$
|x| =
\begin{cases}
x & \text{if } x \geq 0 \\
-x & \text{if } x < 0
\end{cases}
$$
The result is *never* negative: when $x < 0$, the number $-x$ is positive. For example $|7| = 7$ and $|-7| = -(-7) = 7$. Every solving rule in this chapter follows from this **piecewise definition**.

::grafico{f="abs(x)" xmin=-5 xmax=5 ymin=-1 ymax=5 titolo="$y = |x|$ coincides with $y = x$ for $x \geq 0$ and with $y = -x$ for $x < 0$"}
:::

:::esempio{titolo="An absolute value rewritten without bars"}
To write $|2x - 6|$ without bars we study the sign of the argument, and $2x - 6 \geq 0$ for $x \geq 3$. Applying the definition with $2x - 6$ in place of $x$ we obtain
$$
|2x - 6| =
\begin{cases}
2x - 6 & \text{if } x \geq 3 \\
6 - 2x & \text{if } x < 3
\end{cases}
$$
For example at $x = 1$ we have $|2 - 6| = 4$, and indeed $6 - 2 \cdot 1 = 4$. This rewriting is the first step of the analysis by intervals, where it is applied to every absolute value present.
:::

:::definizione{#modulo-come-distanza titolo="Absolute value as distance"}
For $x, c \in \mathbb{R}$, the number $|x - c|$ is the **distance** between $x$ and $c$ on the real line; in particular $|x|$ is the distance of $x$ from the origin. This interpretation translates equations and inequalities into conditions on points of the line and makes it possible to check the results. For example $|x - 3| = 2$ is satisfied by the points at distance $2$ from $3$, that is $x = 1$ and $x = 5$.
:::

## Properties

:::teorema{#proprieta-valore-assoluto titolo="Properties of absolute value"}
For all $a, b \in \mathbb{R}$,
$$
|ab| = |a|\,|b|, \qquad |a|^2 = a^2, \qquad |a + b| \leq |a| + |b| .
$$
- **Absolute value of a product.** The absolute value of a product is the product of the absolute values. For example $|(-3) \cdot 4| = |-12| = 12$ and $|-3| \cdot |4| = 3 \cdot 4 = 12$. The property is verified by examining the four cases for the signs of $a$ and $b$, and it allows a number to be taken out of the absolute value, as in $|{-3x}| = |-3| \cdot |x| = 3\,|x|$.
- **Square of the absolute value.** The number $|a|$ is equal to $a$ or to $-a$, and these two numbers have the same square, because $(-a)^2 = a^2$; hence $|a|^2 = a^2$. For example $|-5|^2 = 5^2 = 25$ and $(-5)^2 = 25$. Absolute values are non-negative numbers, and of two non-negative numbers the larger one has the larger square; therefore $|a| > |b|$ is equivalent to $a^2 > b^2$. For example $|-4| > |3|$ and $16 > 9$. With this equivalence $|A| > |B|$ is solved **by squaring**.
- **Triangle inequality.** The absolute value of a sum is less than or equal to the sum of the absolute values. For example $|5 + (-3)| = 2$ and $|5| + |-3| = 8$. The inequality is used to bound from above the absolute value of a sum and appears in the chapter on limits of Mathematical Analysis 1; the case in which equality holds is stated in the theorem on the triangle inequality.
:::

:::attenzione
The absolute value is not removed by rewriting $|A| = A$: the equality holds *only* where $A \geq 0$. For example $|x - 5| = x - 5$ is **false** at $x = 0$, since $|0 - 5| = 5$ while $0 - 5 = -5$. Where $A < 0$, instead, $|A| = -A$.

::grafico{f="abs(x-5);x-5" xmin=-1 xmax=9 ymin=-5 ymax=6 punti="0,5,pieno;0,-5,vuoto" titolo="$y = |x - 5|$ is obtained from $y = x - 5$ (dashed) by reflecting across the $x$-axis the part that lies below the axis; the two graphs coincide only for $x \geq 5$"}

:::

::::teorema{#valore-assoluto-quoziente titolo="Absolute value of a quotient"}
For all $a, b \in \mathbb{R}$ with $b \neq 0$,
$$
\left| \frac{a}{b} \right| = \frac{|a|}{|b|} .
$$
The property makes it possible to separate the numerator and the denominator of a fraction inside an absolute value. For example
$$
\left| \frac{x - 2}{-4} \right| = \frac{|x - 2|}{4} ,
$$
and therefore the equation $\left| \dfrac{x - 2}{-4} \right| = 1$ is equivalent to $|x - 2| = 4$, which has solutions $x = -2$ and $x = 6$.

:::dimostrazione
The idea is to write $a$ as the product of $\dfrac{a}{b}$ and $b$ and to apply the product rule. Since $a = \dfrac{a}{b} \cdot b$, the property $|ab| = |a|\,|b|$ gives
$$
|a| = \left| \frac{a}{b} \right| |b| .
$$
Since $b \neq 0$, we have $|b| > 0$, so both sides can be divided by $|b|$, and we obtain the claim.
:::
::::

::::teorema{#disuguaglianza-triangolare titolo="Triangle inequality"}
For all $a, b \in \mathbb{R}$,
$$
|a + b| \leq |a| + |b| ,
$$
and equality holds if and only if $ab \geq 0$, that is, if $a$ and $b$ do not have opposite signs. The inequality is used to bound from above the absolute value of a sum. For example, for $|x| \leq 2$ we have
$$
|x + 5| \leq |x| + 5 \leq 7 ,
$$
and the value $7$ is attained at $x = 2$.

:::dimostrazione
We compare the squares of the two sides, which are non-negative numbers. Since $|a + b|^2 = (a + b)^2$, expanding the square gives
$$
|a + b|^2 = a^2 + 2ab + b^2 .
$$
Since $ab \leq |ab| = |a|\,|b|$ and $a^2 = |a|^2$, $b^2 = |b|^2$, it follows that
$$
|a + b|^2 \leq |a|^2 + 2|a|\,|b| + |b|^2 = \left( |a| + |b| \right)^2 .
$$
Two non-negative numbers are in the same order as their squares, therefore $|a + b| \leq |a| + |b|$. Equality holds when $ab = |ab|$, and this happens exactly for $ab \geq 0$.
:::
::::

:::attenzione
The absolute value does *not* distribute over a sum or a difference: in general $|x - 3| \neq |x| - 3$. For $x = 1$ we have $|1 - 3| = 2$, while $|1| - 3 = -2$. For a sum only the triangle inequality holds.
:::

:::osservazione{#radice-del-quadrato titolo="Square root of a square"}
For every $a \in \mathbb{R}$ we have $\sqrt{a^2} = |a|$, because $\sqrt{a^2}$ is the *non-negative* number whose square is $a^2$, and $|a|$ has both properties. The equality $\sqrt{a^2} = a$, on the other hand, holds only for $a \geq 0$: for $a = -2$ we have $\sqrt{4} = 2$, which is different from $-2$. For this reason an irrational equation such as $\sqrt{x^2 - 6x + 9} = 2x - 3$ becomes the equation with absolute value $|x - 3| = 2x - 3$, since $x^2 - 6x + 9 = (x - 3)^2$.
:::

## The equation |A| = k

:::teorema{#equazioni-con-modulo titolo="Equation of the form |A| = k"}
$A$ is an expression in the variable $x$ and $k$ is a constant. The cases to distinguish depend on the sign of $k$.

- $k > 0$: $\ |A| = k \iff A = k \ \vee \ A = -k$, because the *only* numbers with absolute value $k$ are $k$ and $-k$. The symbol $\vee$ is read "or".
- $k = 0$: $\ |A| = 0 \iff A = 0$, because the only number with absolute value zero is $0$.
- $k < 0$: **no solution**, because $|A| \geq 0$ for every $x$.
:::

:::esempio
$|x - 4| = 6$. Since $6 > 0$, the equation is equivalent to
$$
x - 4 = 6 \ \vee \ x - 4 = -6 ,
$$
so $x = 10$ or $x = -2$: the two points at **distance** $6$ from $4$.

::grafico{f="abs(x-4);6" xmin=-4 xmax=12 ymin=-1 ymax=8 punti="-2,6,pieno;10,6,pieno" segmenti="-2,0,-2,6;10,0,10,6" titolo="The line $y = 6$ meets the graph of $y = |x - 4|$ at the points with x-coordinates $-2$ and $10$"}

:::

:::esempio{titolo="Argument of second degree"}
$|x^2 - 4| = 5$. Since $5 > 0$, the equation is equivalent to
$$
x^2 - 4 = 5 \ \vee \ x^2 - 4 = -5 ,
$$
that is $x^2 = 9 \ \vee \ x^2 = -1$. The first equation has solutions $x = -3$ and $x = 3$; the second has no real solutions, because a square is never negative. The solutions are therefore $x = \pm 3$.
:::

## The equation |A| = |B|

:::teorema{#equazione-due-moduli titolo="Equation of the form |A| = |B|"}
Two numbers have the same absolute value when they are **equal** or **opposites**, so
$$
|A| = |B| \iff A = B \ \vee \ A = -B .
$$
*No* additional condition is needed, because the two sides are never negative.
:::

:::esempio
$|2x - 1| = |x + 5|$ is equivalent to
$$
2x - 1 = x + 5 \ \vee \ 2x - 1 = -(x + 5) ,
$$
so $x = 6$ or $3x = -4$, that is $x = -\dfrac{4}{3}$.

::grafico{f="abs(2*x-1);abs(x+5)" xmin=-7 xmax=8 ymin=-1 ymax=13 punti="-1.3333,3.6667,pieno;6,11,pieno" segmenti="-1.3333,0,-1.3333,3.6667;6,0,6,11" titolo="The solutions $x = -\dfrac{4}{3}$ and $x = 6$ of $|2x - 1| = |x + 5|$ are the x-coordinates of the intersection points of $y = |2x - 1|$ and $y = |x + 5|$ (dashed)"}

:::

## The equation |A| = B

:::teorema{#equazione-modulo-uguale-espressione titolo="Equation of the form |A| = B"}
If the right-hand side is an expression $B$ in the variable, the left-hand side is never negative, so the equation *also* imposes the **condition** $B \geq 0$:
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
The symbol $\cup$ between the two systems indicates that the solutions of the equation are those of the first system together with those of the second. Solutions of the two equations that do not satisfy the condition $B \geq 0$ are **discarded**.
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
The first system gives $x = 3$, which satisfies the condition since $2 \cdot 3 - 3 = 3 \geq 0$; the second gives $x = 1$, which does *not* satisfy it, since $2 \cdot 1 - 3 = -1 < 0$. The solution is $x = 3$.

::grafico{f="abs(x);2*x-3" xmin=-3 xmax=5 ymin=-4 ymax=6 punti="3,3,pieno;1,-1,vuoto" titolo="$y = |x|$ and the line $y = 2x - 3$ (dashed) meet only at $x = 3$; at $x = 1$ the line has y-coordinate $-1 < 0$, so $x = 1$ is discarded"}

:::

:::osservazione
The same equation $|A| = B$ can also be solved by studying the sign of the argument $A$, as in the definition:
$$
\begin{cases}
A \geq 0 \\
A = B
\end{cases}
\ \cup \
\begin{cases}
A < 0 \\
-A = B
\end{cases}
$$
For $|x| = 2x - 3$ the first system gives $x = 3$, which satisfies $x \geq 0$; the second gives $-x = 2x - 3$, that is $x = 1$, which does not satisfy $x < 0$. The result $x = 3$ coincides with the one obtained with the condition $B \geq 0$. This second form is more convenient when the sign of $A$ is easier to study than the sign of $B$.
:::

## The inequalities |A| < k and |A| ≤ k

:::teorema{#disequazioni-minore titolo="Inequality of the form |A| < k"}
The inequality $|A| < k$ requires $A$ to be at a distance **less than** $k$ from the origin.

- $k > 0$: $\ |A| < k$ is equivalent to the **double inequality** $-k < A < k$, that is, to the system
$$
\begin{cases}
A < k \\
A > -k
\end{cases}
$$
- $k \leq 0$: **no solution**, because $|A| \geq 0$.

For $|A| \leq k$ with $k > 0$ we have $-k \leq A \leq k$; for $k = 0$ *only* the equation $A = 0$ remains; for $k < 0$ there is no solution.
:::

:::esempio
$|x - 1| < 4$ is equivalent to $-4 < x - 1 < 4$, so $-3 < x < 5$: the interval of points at **distance less than** $4$ from $1$.

::grafico{f="abs(x-1);4" xmin=-5 xmax=7 ymin=-1 ymax=7 area="4;abs(x-1);-3;5" punti="-3,4,vuoto;5,4,vuoto" titolo="$y = |x - 1|$ lies below the line $y = 4$ for $-3 < x < 5$"}

:::

:::attenzione
The two conditions $A < k$ and $A > -k$ must hold *together*, so they form a system. For $|x| < 2$ the union $x < 2 \ \vee \ x > -2$ is satisfied by every real number, including $x = 5$, for which $|5| = 5 > 2$; the system, instead, gives the correct interval $-2 < x < 2$.
:::

## The inequalities |A| > k and |A| ≥ k

:::teorema{#disequazioni-maggiore titolo="Inequality of the form |A| > k"}
The inequality $|A| > k$ requires $A$ to be at a distance **greater than** $k$ from the origin.

- $k > 0$: $\ |A| > k \iff A < -k \ \vee \ A > k$, a **union of two half-lines**.
- $k = 0$: $\ |A| > 0 \iff A \neq 0$.
- $k < 0$: the inequality is satisfied by *every* $x$ for which $A$ is defined, because $|A| \geq 0 > k$.

For $|A| \geq k$ with $k > 0$ we have $A \leq -k \ \vee \ A \geq k$; for $k \leq 0$ it is **satisfied everywhere**.
:::

:::esempio
$|x + 2| > 3$ is equivalent to
$$
x + 2 < -3 \ \vee \ x + 2 > 3 ,
$$
so $x < -5 \ \vee \ x > 1$.

::grafico{f="abs(x+2);3" xmin=-9 xmax=5 ymin=-1 ymax=8 punti="-5,3,vuoto;1,3,vuoto" titolo="$y = |x + 2|$ lies above the line $y = 3$ for $x < -5$ and for $x > 1$"}

:::

:::esempio{titolo="Right-hand side zero or negative"}
The inequality $|x - 7| \geq -2$ is satisfied by every $x \in \mathbb{R}$, since $|x - 7| \geq 0 > -2$. An absolute value is zero only where its argument is zero, therefore the inequality $|x^2 - 1| > 0$ is equivalent to $x^2 - 1 \neq 0$; the solutions are therefore all $x$ with $x \neq -1$ and $x \neq 1$.
:::

## Inequalities with an expression on the right-hand side

:::teorema{#disequazione-modulo-espressione titolo="Inequalities of the form |A| < B and |A| > B"}
When the right-hand side is an expression $B$, the solving forms **remain the same** and the cases on the sign of $B$ are already included:
$$
|A| < B \iff
\begin{cases}
A < B \\
A > -B
\end{cases}
\qquad\qquad
|A| > B \iff A > B \ \vee \ A < -B .
$$
The system on the left *by itself* imposes $B > 0$: from the conditions $A < B$ and $-B < A$ it follows that $-B < B$, that is $B > 0$. The union on the right also covers the points where $B < 0$: if $A \geq 0$ then $A > B$; if $A < 0$ then $-A > 0 > B$, that is $A < -B$. Therefore both forms are used **without analyzing the sign** of $B$. For $|A| \leq B$ and $|A| \geq B$ the same forms hold with **non-strict inequalities**.
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
The two conditions hold *together* for $x > \dfrac{1}{3}$.

::grafico{f="abs(x-1);2*x" xmin=-2 xmax=4 ymin=-3 ymax=7 punti="0.3333,0.6667,vuoto" titolo="The line $y = 2x$ (dashed) lies above $y = |x - 1|$ for $x > \dfrac{1}{3}$; where $2x \leq 0$ no point satisfies the inequality"}

:::

:::esempio{titolo="Absolute value greater than an expression"}
$|x + 3| > 2x$ is equivalent to
$$
x + 3 > 2x \ \vee \ x + 3 < -2x ,
$$
that is $x < 3 \ \vee \ x < -1$. The **union** of the two half-lines is $x < 3$.
:::

:::esempio{titolo="Argument of second degree and right-hand side with the variable"}
$|x^2 - 2x| < x$ is equivalent to the system
$$
\begin{cases}
x^2 - 2x < x \\
x^2 - 2x > -x
\end{cases}
\qquad
\begin{cases}
x(x - 3) < 0 \\
x(x - 1) > 0
\end{cases}
\qquad
\begin{cases}
0 < x < 3 \\
x < 0 \ \vee \ x > 1
\end{cases}
$$
The two conditions hold together for $1 < x < 3$. At $x = 2$ we have $|4 - 4| = 0 < 2$, while at $x = \dfrac{1}{2}$ we have $\left| \dfrac{1}{4} - 1 \right| = \dfrac{3}{4}$, which is greater than $\dfrac{1}{2}$.

::grafico{f="abs(x^2-2*x);x" xmin=-1 xmax=4 ymin=-1 ymax=5 area="x;abs(x^2-2*x);1;3" punti="1,1,vuoto;3,3,vuoto" titolo="$y = |x^2 - 2x|$ lies below the line $y = x$ (dashed) for $1 < x < 3$"}

:::

## Two absolute values: analysis by intervals

:::teorema{#due-valori-assoluti titolo="Sign analysis by intervals"}
When two or more absolute values with different arguments appear, we look for the points where the arguments **vanish**; these points divide the real line into **intervals**, and in each interval each absolute value is rewritten without bars according to the sign of its argument. In each interval we solve the system formed by the interval condition and the rewritten equation or inequality; the solution set is the **union** of the results of the intervals. The procedure follows from the definition of absolute value applied to each argument.
:::

:::esempio
$|x| + |x - 2| = 4$. The arguments vanish at $0$ and at $2$, so there are three intervals. For $x < 0$ both $x$ and $x - 2$ are negative, so $|x| = -x$ and $|x - 2| = 2 - x$. For $0 \leq x < 2$ only $x - 2$ is negative, so $|x| = x$ and $|x - 2| = 2 - x$. For $x \geq 2$ neither argument is negative, so $|x| = x$ and $|x - 2| = x - 2$. The equation is therefore equivalent to
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
In the first interval $2 - 2x = 4$ gives $x = -1$, which is acceptable since $-1 < 0$; in the second the equation $2 = 4$ is **false**; in the third $2x - 2 = 4$ gives $x = 3$, which is acceptable since $3 \geq 2$. The solutions are $x = -1$ and $x = 3$.

::grafico{f="abs(x)+abs(x-2);4" xmin=-3 xmax=5 ymin=-1 ymax=7 punti="-1,4,pieno;3,4,pieno" titolo="$y = |x| + |x - 2|$ is constantly equal to $2$ in the interval $0 \leq x \leq 2$, where the equation has no solutions; the line $y = 4$ meets the graph at $x = -1$ and at $x = 3$"}

:::

:::osservazione{titolo="The endpoints of the intervals"}
Each point where an argument vanishes is assigned to *a single* interval, so that no point is counted twice. The choice of the interval does not matter, because at that point the argument equals $0$ and the two rewritings of the absolute value give the same value: for $x = 2$ we have $x - 2 = 0 = 2 - x$. With $n$ distinct points there are $n + 1$ intervals.
:::

:::esempio{titolo="Difference of two absolute values"}
$|x - 1| - |x + 1| > 1$. The arguments vanish at $-1$ and at $1$, so the inequality is equivalent to
$$
\begin{cases}
x < -1 \\
(1 - x) - (-x - 1) > 1
\end{cases}
\ \cup \
\begin{cases}
-1 \leq x < 1 \\
(1 - x) - (x + 1) > 1
\end{cases}
\ \cup \
\begin{cases}
x \geq 1 \\
(x - 1) - (x + 1) > 1
\end{cases}
$$
In the first interval the left-hand side equals $2$ and the inequality $2 > 1$ is true, so the whole interval $x < -1$ is a solution. In the second we obtain $-2x > 1$, that is $x < -\dfrac{1}{2}$, which together with the interval condition gives $-1 \leq x < -\dfrac{1}{2}$. In the third the left-hand side equals $-2$ and the inequality is false. The union is $x < -\dfrac{1}{2}$.

::grafico{f="abs(x-1)-abs(x+1);1" xmin=-4 xmax=4 ymin=-3 ymax=3 punti="-0.5,1,vuoto" titolo="$y = |x - 1| - |x + 1|$ equals $2$ for $x \leq -1$ and $-2$ for $x \geq 1$; it lies above the line $y = 1$ for $x < -\dfrac{1}{2}$"}

:::
