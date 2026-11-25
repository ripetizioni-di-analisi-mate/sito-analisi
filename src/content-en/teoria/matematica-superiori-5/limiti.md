---
titolo: Limits
sommario: What neighborhoods and accumulation points are, how the limit of a function is defined in four cases, what the uniqueness theorem, the sign preservation theorem and the squeeze theorem say, how to calculate limits using the limit laws and standard limits, how to compare quantities that approach zero or grow without bound, and what the limit of a sequence is.
---

## Intervals and neighborhoods

:::definizione{#intervalli titolo="Intervals"}
Let $a$ and $b$ be two real numbers with $a < b$. An **interval** is the set of real numbers between $a$ and $b$, with either endpoint included or excluded:

| notation | numbers $x$ in the interval | name |
| --- | --- | --- |
| $[a, b]$ | $a \leq x \leq b$ | closed interval |
| $(a, b)$ | $a < x < b$ | open interval |
| $[a, b)$ | $a \leq x < b$ | closed on the left and open on the right |
| $(a, b]$ | $a < x \leq b$ | open on the left and closed on the right |

The numbers $a$ and $b$ are the **endpoints** of the interval, and the difference $b - a$ is its length. Unbounded intervals are written using the symbols $+\infty$ and $-\infty$. For example, $[a, +\infty)$ is the set of numbers $x \geq a$, $(-\infty, b)$ is the set of numbers $x < b$, and the set $\mathbb{R}$ can also be written as $(-\infty, +\infty)$.

Intervals describe the domains of functions and the solution sets of inequalities. The solution set of the inequality $x^2 < 4$ is the open interval $(-2, 2)$ of length $4$, and the solution set of the inequality $2x - 6 \geq 0$ is the unbounded interval $[3, +\infty)$.
:::

:::definizione{#intorni titolo="Neighborhoods of a point"}
Let $x_0$ be a real number and $\delta$ a positive number. The **symmetric neighborhood** of $x_0$ of radius $\delta$ is the open interval $(x_0 - \delta, x_0 + \delta)$ centered at $x_0$. Its points are the numbers $x$ whose distance from $x_0$ is less than $\delta$, that is, those that satisfy the inequality
$$
|x - x_0| < \delta .
$$
More generally, a **neighborhood** of $x_0$, denoted by $I(x_0)$, is any open interval containing $x_0$. The interval $[x_0, x_0 + \delta)$ is called a right-hand neighborhood of $x_0$, and the interval $(x_0 - \delta, x_0]$ is called a left-hand neighborhood.

Neighborhoods give a precise meaning to the statement that a number $x$ is close to $x_0$. The smaller the radius $\delta$, the closer the points in the neighborhood are to $x_0$. For example, the symmetric neighborhood of $3$ of radius $0.1$ is the interval $(2.9;\ 3.1)$, because the inequality $|x - 3| < 0.1$ is equivalent to $-0.1 < x - 3 < 0.1$, or $2.9 < x < 3.1$.
:::

:::definizione{#intorni-infinito titolo="Neighborhoods of infinity"}
Let $a$ be a real number. A **neighborhood of positive infinity** is an interval $(a, +\infty)$, and a neighborhood of negative infinity is an interval $(-\infty, a)$. For $a > 0$, the set $(-\infty, -a) \cup (a, +\infty)$ is called a neighborhood of infinity without specifying a sign. Its points are the numbers that satisfy $|x| > a$.

These neighborhoods give a precise meaning to the statement that a number $x$ is very large or has a very large absolute value. For example, the interval $(1000, +\infty)$ is a neighborhood of $+\infty$, and the numbers satisfying $|x| > 10$ form a neighborhood of infinity.
:::

:::definizione{#punti-accumulazione titolo="Accumulation points and isolated points"}
Let $A$ be a set of real numbers. A number $x_0$ is an **accumulation point** of $A$ if every neighborhood of $x_0$ contains at least one point of $A$ other than $x_0$. The number $x_0$ may or may not belong to $A$. A point $x_0$ of $A$ is an **isolated point** of $A$ if some neighborhood of $x_0$ contains no other points of $A$. For example, for the set $A = (0, 1] \cup \{2\}$:

- $0$ is an accumulation point of $A$ that does not belong to $A$, because every neighborhood $(-\delta, \delta)$ with $\delta < 1$ contains the point $\dfrac{\delta}{2}$, which belongs to $(0, 1]$.
- $2$ is an isolated point of $A$, because the neighborhood $(1.5;\ 2.5)$ contains no other points of $A$.

The limit of a function as $x$ approaches $x_0$ is defined only when $x_0$ is an accumulation point of the domain $D$, because $x$ must be able to approach $x_0$ while remaining in $D$. For example, the function $f(x) = \sqrt{x^3 - x^2}$ is defined when $x^2 (x - 1) \geq 0$, that is, for $x = 0$ and for $x \geq 1$. Its domain is therefore $D = \{0\} \cup [1, +\infty)$. The point $0$ is isolated, so the limit as $x \to 0$ is undefined, whereas the point $1$ is an accumulation point.
:::

## Finite limits as x approaches a number

:::definizione{#limite-finito titolo="Finite limit at a point"}
The idea is that the values $f(x)$ get arbitrarily close to a number $\ell$ as $x$ approaches $x_0$. To make this precise, choose an arbitrarily small distance $\varepsilon$ and require the distance from $f(x)$ to $\ell$ to be less than $\varepsilon$ for all $x$ sufficiently close to $x_0$.

Let $f$ be a function with domain $D$, let $x_0$ be an accumulation point of $D$, and let $\ell$ be a real number. We say that $f(x)$ **approaches** $\ell$ as $x$ approaches $x_0$, and write
$$
\lim_{x \to x_0} f(x) = \ell ,
$$
if for every number $\varepsilon > 0$ there is a number $\delta > 0$ such that
$$
|f(x) - \ell| < \varepsilon \qquad \text{for every } x \text{ in } D \text{ with } 0 < |x - x_0| < \delta .
$$
In other words, the distance from $f(x)$ to $\ell$ is less than the chosen number $\varepsilon$, provided that the distance from $x$ to $x_0$ is less than a suitable $\delta$. The condition $0 < |x - x_0|$ excludes the point $x_0$, so the value $f(x_0)$ plays no role in the definition, and the function need not even be defined at $x_0$. On the graph, the inequality $|f(x) - \ell| < \varepsilon$ means that the point $\big( x, f(x) \big)$ lies in the horizontal strip $\ell - \varepsilon < y < \ell + \varepsilon$.

For $f(x) = 2x + 1$ and $x_0 = 1$, the limit is $\ell = 3$. Indeed, $|f(x) - 3| = |2x - 2| = 2\,|x - 1|$, and the inequality $2\,|x - 1| < \varepsilon$ is equivalent to $|x - 1| < \dfrac{\varepsilon}{2}$. Therefore, for every $\varepsilon > 0$, the number $\delta = \dfrac{\varepsilon}{2}$ satisfies the definition. With $\varepsilon = 1$ we have $\delta = \dfrac{1}{2}$, and for $\dfrac{1}{2} < x < \dfrac{3}{2}$ the values of $f$ lie between $2$ and $4$.

::grafico{f="2*x+1" area="4;2;0.5;1.5" segmenti="-1,2,3,2;-1,4,3,4;0.5,0,0.5,2;1.5,0,1.5,4" punti="1,3,pieno" xmin=-1 xmax=3 ymin=-1 ymax=7 legenda="y = 2x + 1" titolo="With $\varepsilon = 1$ and $\delta = \dfrac{1}{2}$, for $\dfrac{1}{2} < x < \dfrac{3}{2}$ the graph of $y = 2x + 1$ lies in the strip $2 < y < 4$"}

:::

:::esempio{titolo="A limit at a point outside the domain"}
The function $f(x) = \dfrac{x^2 - 4}{x - 2}$ has domain $D = \mathbb{R} \setminus \{2\}$, and $2$ is an accumulation point of $D$. For $x \neq 2$, factor the numerator and cancel the common factor:
$$
\frac{x^2 - 4}{x - 2} = \frac{(x - 2)(x + 2)}{x - 2} = x + 2 .
$$
To verify that the limit as $x \to 2$ is $4$, note that for $x \neq 2$ we have $|f(x) - 4| = |x + 2 - 4| = |x - 2|$. Therefore the inequality $|f(x) - 4| < \varepsilon$ holds for $0 < |x - 2| < \varepsilon$, and we can take $\delta = \varepsilon$. The graph of $f$ is the line $y = x + 2$ with the point $(2, 4)$ removed. The function is undefined at $2$, yet its limit exists and equals $4$.

::grafico{f="(x^2-4)/(x-2)" punti="2,4,vuoto" segmenti="2,0,2,4;0,4,2,4" xmin=-3 xmax=4 ymin=-2 ymax=7 legenda="y = \dfrac{x^2 - 4}{x - 2}" titolo="The graph of $f(x) = \dfrac{x^2 - 4}{x - 2}$ is the line $y = x + 2$ with the point $(2, 4)$ removed, and the limit of $f$ as $x \to 2$ is $4$"}

:::

:::definizione{#limite-destro-sinistro titolo="Right-hand and left-hand limits"}
If the definition of a limit is restricted to points with $x > x_0$, that is, to the condition $x_0 < x < x_0 + \delta$, it gives the **right-hand limit**, written $\displaystyle\lim_{x \to x_0^+} f(x)$. Restricting it to points with $x < x_0$, that is, to the condition $x_0 - \delta < x < x_0$, gives the **left-hand limit** $\displaystyle\lim_{x \to x_0^-} f(x)$. The limit as $x \to x_0$ exists and equals $\ell$ if and *only if* the right-hand and left-hand limits exist and both equal $\ell$.

For example, the function that equals $x + 1$ for $x < 1$ and $4 - x$ for $x \geq 1$ has at $x_0 = 1$ a left-hand limit of $2$, because for $x < 1$ the values $x + 1$ approach $2$, and a right-hand limit of $3$, because for $x > 1$ the values $4 - x$ approach $3$. The two limits differ, so the limit as $x \to 1$ does *not* exist.

::grafico{linee="-2,-1 1,2;1,3 4,0" punti="1,2,vuoto;1,3,pieno" segmenti="1,0,1,3" xmin=-2 xmax=4 ymin=-2 ymax=4 titolo="The function equals $x + 1$ for $x < 1$ and $4 - x$ for $x \geq 1$, so at $x_0 = 1$ the left-hand limit is $2$ and the right-hand limit is $3$"}

:::

## Infinite limits as x approaches a number

:::definizione{#limite-infinito titolo="Infinite limit at a point"}
The idea is that the values $f(x)$ exceed any given number as $x$ approaches $x_0$. Let $f$ be a function with domain $D$, and let $x_0$ be an accumulation point of $D$. We write
$$
\lim_{x \to x_0} f(x) = +\infty
$$
if for every number $M > 0$ there is a number $\delta > 0$ such that $f(x) > M$ for every $x$ in $D$ with $0 < |x - x_0| < \delta$. The number $M$ is an arbitrarily large threshold that the values of $f$ exceed whenever $x$ is sufficiently close to $x_0$. The limit is $-\infty$ if the condition $f(x) > M$ is replaced by $f(x) < -M$ in the same definition.

For $f(x) = \dfrac{1}{x^2}$ and $x_0 = 0$, the limit is $+\infty$. Indeed, for $x \neq 0$ the inequality $\dfrac{1}{x^2} > M$ is equivalent to $x^2 < \dfrac{1}{M}$, or $|x| < \dfrac{1}{\sqrt{M}}$, so we can take $\delta = \dfrac{1}{\sqrt{M}}$. With $M = 4$ we obtain $\delta = \dfrac{1}{2}$, and with $M = 100$ we obtain $\delta = \dfrac{1}{10}$.

::grafico{f="1/x^2" asintoti="x=0" segmenti="-3,4,3,4;-0.5,0,-0.5,4;0.5,0,0.5,4" xmin=-3 xmax=3 ymin=-1 ymax=9 legenda="y = \dfrac{1}{x^2}" titolo="With $M = 4$ and $\delta = \dfrac{1}{2}$, for $0 < |x| < \dfrac{1}{2}$ the graph of $y = \dfrac{1}{x^2}$ lies above the line $y = 4$"}

Considering only $x > x_0$ or only $x < x_0$ gives the right-hand and left-hand infinite limits. For example, $\dfrac{1}{x}$ approaches $+\infty$ as $x \to 0^+$ and $-\infty$ as $x \to 0^-$, because for positive $x$ close to $0$ the quotient $\dfrac{1}{x}$ is large and positive, whereas for negative $x$ it is negative. Whenever at least one of the two limits at $x_0$ is infinite, the line $x = x_0$ is called a vertical asymptote of the graph. Asymptotes are studied in the chapter on continuity and asymptotes.
:::

## Limits as x approaches infinity

:::definizione{#limite-finito-all-infinito titolo="Finite limit at infinity"}
Let $f$ be a function whose domain $D$ contains a neighborhood of $+\infty$. We write
$$
\lim_{x \to +\infty} f(x) = \ell
$$
if for every number $\varepsilon > 0$ there is a number $N > 0$ such that $|f(x) - \ell| < \varepsilon$ for every $x$ in $D$ with $x > N$. The number $N$ plays the role that $\delta$ played in the limit at a point, because the condition $x > N$ says that $x$ lies in the neighborhood $(N, +\infty)$. For $x \to -\infty$, the condition $x > N$ is replaced by $x < -N$. When $f(x)$ approaches a number $\ell$ as $x \to +\infty$ or as $x \to -\infty$, the line $y = \ell$ is a horizontal asymptote of the graph.

For $f(x) = \dfrac{2x + 1}{x}$, the limit as $x \to +\infty$ is $2$. Indeed, $f(x) = 2 + \dfrac{1}{x}$, and for $x > 0$ we have $|f(x) - 2| = \dfrac{1}{x}$. The inequality $\dfrac{1}{x} < \varepsilon$ is equivalent to $x > \dfrac{1}{\varepsilon}$, so we can take $N = \dfrac{1}{\varepsilon}$. With $\varepsilon = \dfrac{1}{2}$ we have $N = 2$, and for $x > 2$ the values of $f$ lie between $2$ and $\dfrac{5}{2}$.

::grafico{f="(2*x+1)/x" area="2.5;1.5;2;10" asintoti="y=2" segmenti="0,2.5,10,2.5;0,1.5,10,1.5;2,0,2,2.5" xmin=0 xmax=10 ymin=0 ymax=5 legenda="y = \dfrac{2x + 1}{x}" titolo="With $\varepsilon = \dfrac{1}{2}$ and $N = 2$, for $x > 2$ the graph of $y = \dfrac{2x + 1}{x}$ lies in the strip $\dfrac{3}{2} < y < \dfrac{5}{2}$"}

:::

:::definizione{#limite-infinito-all-infinito titolo="Infinite limit at infinity"}
Let $f$ be a function whose domain $D$ contains a neighborhood of $+\infty$. We write
$$
\lim_{x \to +\infty} f(x) = +\infty
$$
if for every number $M > 0$ there is a number $N > 0$ such that $f(x) > M$ for every $x$ in $D$ with $x > N$. The definitions involving $-\infty$ are obtained by replacing $f(x) > M$ with $f(x) < -M$, or $x > N$ with $x < -N$.

For example, $\sqrt{x}$ approaches $+\infty$ as $x \to +\infty$. Indeed, the inequality $\sqrt{x} > M$ is equivalent to $x > M^2$, so we can take $N = M^2$. With $M = 10$ we get $N = 100$, and for $x > 100$ we have $\sqrt{x} > 10$.
:::

:::osservazione{#quattro-definizioni titolo="Comparing the four definitions"}
The four definitions have the same structure. First specify the condition on $f(x)$ for an arbitrary $\varepsilon$ or $M$. Then find a condition on $x$, using $\delta$ or $N$, that guarantees it.

| limit | condition on $f(x)$ | condition on $x$ |
| --- | --- | --- |
| $\displaystyle\lim_{x \to x_0} f(x) = \ell$ | $\lvert f(x) - \ell \rvert < \varepsilon$ | $0 < \lvert x - x_0 \rvert < \delta$ |
| $\displaystyle\lim_{x \to x_0} f(x) = +\infty$ | $f(x) > M$ | $0 < \lvert x - x_0 \rvert < \delta$ |
| $\displaystyle\lim_{x \to +\infty} f(x) = \ell$ | $\lvert f(x) - \ell \rvert < \varepsilon$ | $x > N$ |
| $\displaystyle\lim_{x \to +\infty} f(x) = +\infty$ | $f(x) > M$ | $x > N$ |

To verify a limit, start with the inequality for $f(x)$ and solve it for $x$. The limit is verified if the solution set contains a neighborhood of $x_0$ with at most $x_0$ removed, or a neighborhood of $+\infty$.
:::

## Theorems on limits

::::teorema{#unicita-limite titolo="Uniqueness of limits"}
If the limit of $f(x)$ as $x \to x_0$ exists, then it is unique.

The theorem allows us to speak of *the* limit of a function. It also gives a way to prove that a limit does not exist. If approaching $x_0$ in two different ways gives two different values, the limit does not exist. For example, $\dfrac{|x|}{x}$ equals $1$ for $x > 0$ and $-1$ for $x < 0$, so at $0$ the right-hand limit is $1$ and the left-hand limit is $-1$, and the limit as $x \to 0$ does not exist. The theorem also holds for $x \to +\infty$, for $x \to -\infty$ and for infinite limits.

:::dimostrazione
The idea is that two sufficiently narrow horizontal strips centered at two different numbers have no points in common. We prove the case of two finite limits by contradiction. Suppose that $f(x)$ approaches both $\ell_1$ and $\ell_2$, with $\ell_1 < \ell_2$, and choose
$$
\varepsilon = \frac{\ell_2 - \ell_1}{2} ,
$$
that is, half the distance between the two numbers. Since $f(x)$ approaches $\ell_1$, there is a $\delta_1 > 0$ such that $|f(x) - \ell_1| < \varepsilon$ for $0 < |x - x_0| < \delta_1$, and in particular $f(x) < \ell_1 + \varepsilon$. Since $f(x)$ approaches $\ell_2$, there is a $\delta_2 > 0$ such that $|f(x) - \ell_2| < \varepsilon$ for $0 < |x - x_0| < \delta_2$, and in particular $f(x) > \ell_2 - \varepsilon$.

Let $\delta$ be the smaller of $\delta_1$ and $\delta_2$. Since $x_0$ is an accumulation point of the domain, there is a point $x$ in the domain with $0 < |x - x_0| < \delta$, and both inequalities hold at this point. Our choice of $\varepsilon$ gives
$$
\ell_1 + \varepsilon = \ell_2 - \varepsilon = \frac{\ell_1 + \ell_2}{2} ,
$$
so both $f(x) < \dfrac{\ell_1 + \ell_2}{2}$ and $f(x) > \dfrac{\ell_1 + \ell_2}{2}$ would have to hold, which is impossible. Therefore $\ell_1 = \ell_2$.
:::
::::

::::teorema{#permanenza-segno titolo="Sign preservation theorem"}
If $\displaystyle\lim_{x \to x_0} f(x) = \ell$ with $\ell \neq 0$, then there is a neighborhood $I(x_0)$ in which $f(x)$ has the same sign as $\ell$ for every $x$ in the domain other than $x_0$.

The theorem gives the sign of a function near $x_0$ from the sign of its limit without requiring us to solve an inequality. For example, $\displaystyle\lim_{x \to 2} \left( x^3 - 3x \right) = 8 - 6 = 2$, which is positive, so $x^3 - 3x > 0$ in a neighborhood of $2$. The theorem also holds for $x \to \pm\infty$.

:::dimostrazione
We prove the case $\ell > 0$. The idea is to use a distance $\varepsilon$ smaller than $\ell$ in the definition of a limit so that the strip around $\ell$ lies entirely above the $x$-axis. With $\varepsilon = \dfrac{\ell}{2}$ there is a $\delta > 0$ such that, for every $x$ in the domain with $0 < |x - x_0| < \delta$,
$$
|f(x) - \ell| < \frac{\ell}{2} ,
\qquad
\text{that is}
\qquad
\ell - \frac{\ell}{2} < f(x) < \ell + \frac{\ell}{2} .
$$
In particular, $f(x) > \dfrac{\ell}{2} > 0$, so $f(x)$ is positive in the neighborhood $(x_0 - \delta, x_0 + \delta)$, with the possible exception of $x_0$. For $\ell < 0$, choose $\varepsilon = -\dfrac{\ell}{2}$ and obtain $f(x) < \dfrac{\ell}{2} < 0$ in the same way.
:::
::::

:::attenzione
A function that is positive near $x_0$ can have limit $0$. The function $x^2$ is positive for every $x \neq 0$, and $\displaystyle\lim_{x \to 0} x^2 = 0$. Therefore, if $f(x) > 0$ in a neighborhood of $x_0$ and the limit $\ell$ exists, the only conclusion is that $\ell \geq 0$. Indeed, if $\ell < 0$, the sign preservation theorem would imply that the function was negative near $x_0$.
:::

::::teorema{#teorema-confronto titolo="Squeeze theorem"}
Let $f$, $g$ and $h$ be three functions defined in a neighborhood of $x_0$, with the possible exception of $x_0$, such that
$$
g(x) \leq f(x) \leq h(x)
$$
for every $x$ in that neighborhood other than $x_0$. If $\displaystyle\lim_{x \to x_0} g(x) = \lim_{x \to x_0} h(x) = \ell$, then $\displaystyle\lim_{x \to x_0} f(x) = \ell$ as well.

The theorem, also known as the two policemen theorem, gives the limit of a function bounded between two functions with the same limit. It also holds for $x \to \pm\infty$. For example, to calculate $\displaystyle\lim_{x \to +\infty} \frac{\sin x}{x}$, start with $-1 \leq \sin x \leq 1$. For $x > 0$, divide all three expressions by $x$ to obtain
$$
-\frac{1}{x} \leq \frac{\sin x}{x} \leq \frac{1}{x} .
$$
The two bounding functions approach $0$ as $x \to +\infty$, so by the **squeeze theorem** $\dfrac{\sin x}{x}$ also approaches $0$.

::grafico{f="sin(x)/x;1/x;-1/x" xmin=0 xmax=20 ymin=-1 ymax=1.5 legenda="y = \dfrac{\sin x}{x};y = \dfrac{1}{x};y = -\dfrac{1}{x}" titolo="For $x > 0$ the graph of $y = \dfrac{\sin x}{x}$ lies between the graphs of $y = -\dfrac{1}{x}$ and $y = \dfrac{1}{x}$, both of which approach $0$ as $x \to +\infty$"}

:::dimostrazione
The idea is that $f$ lies between two functions that, near $x_0$, both stay in the strip $\ell - \varepsilon < y < \ell + \varepsilon$. Fix $\varepsilon > 0$. Since $g(x)$ approaches $\ell$, there is a $\delta_1 > 0$ such that $\ell - \varepsilon < g(x)$ for $0 < |x - x_0| < \delta_1$. Since $h(x)$ approaches $\ell$, there is a $\delta_2 > 0$ such that $h(x) < \ell + \varepsilon$ for $0 < |x - x_0| < \delta_2$. Choose $\delta$ no larger than $\delta_1$ or $\delta_2$ and small enough for the interval $(x_0 - \delta, x_0 + \delta)$ to lie in the neighborhood specified in the hypothesis. For $0 < |x - x_0| < \delta$ all three inequalities then hold simultaneously, and
$$
\ell - \varepsilon < g(x) \leq f(x) \leq h(x) < \ell + \varepsilon .
$$
Therefore $|f(x) - \ell| < \varepsilon$. The number $\varepsilon$ is arbitrary, so $f(x)$ approaches $\ell$.
:::
::::

:::osservazione{#confronto-infinito titolo="Comparison with an infinite limit"}
If $f(x) \geq g(x)$ in a neighborhood of $x_0$ and $g(x)$ approaches $+\infty$, then $f(x)$ also approaches $+\infty$. Indeed, whenever $g(x) > M$, we also have $f(x) \geq g(x) > M$. Here one bounding function suffices. For example, $x + \sin x \geq x - 1$, because $\sin x \geq -1$, and $x - 1$ approaches $+\infty$ as $x \to +\infty$, so $\displaystyle\lim_{x \to +\infty} (x + \sin x) = +\infty$. Similarly, if $f(x) \leq g(x)$ and $g(x)$ approaches $-\infty$, then $f(x)$ also approaches $-\infty$.
:::

## Calculating limits and indeterminate forms

:::teorema{#limiti-funzioni-elementari titolo="Limits of elementary functions"}
Let $f$ be an elementary function (a polynomial, rational function, root, exponential, logarithm or trigonometric function), or a function obtained from these by sums, products, quotients and compositions. If $x_0$ belongs to the domain of $f$ and is an accumulation point of that domain, then
$$
\lim_{x \to x_0} f(x) = f(x_0) .
$$
In these cases, therefore, the limit can be calculated by substituting $x_0$ for $x$. For example,
$$
\lim_{x \to 2} \left( x^3 - x + 1 \right) = 7 ,
\qquad
\lim_{x \to \frac{\pi}{3}} \cos x = \frac{1}{2} ,
\qquad
\lim_{x \to e} \ln x = 1 .
$$
This property is called continuity and is studied in the chapter on continuity and asymptotes. At the endpoints of the domain, the limits can be read from the graphs of elementary functions studied in the chapter on functions and their properties:

| $f(x)$ | limits at the endpoints of the domain |
| --- | --- |
| $x^n$, with $n$ a natural number, $n \geq 1$ | $+\infty$ as $x \to +\infty$. As $x \to -\infty$, $+\infty$ if $n$ is even and $-\infty$ if $n$ is odd |
| $\sqrt{x}$ | $+\infty$ as $x \to +\infty$ |
| $a^{x}$, with $a > 1$ | $+\infty$ as $x \to +\infty$, $0$ as $x \to -\infty$ |
| $a^{x}$, with $0 < a < 1$ | $0$ as $x \to +\infty$, $+\infty$ as $x \to -\infty$ |
| $\log_a x$, with $a > 1$ | $+\infty$ as $x \to +\infty$, $-\infty$ as $x \to 0^+$ |
| $\log_a x$, with $0 < a < 1$ | $-\infty$ as $x \to +\infty$, $+\infty$ as $x \to 0^+$ |
| $\tan x$ | $+\infty$ as $x \to \left( \dfrac{\pi}{2} \right)^-$, $-\infty$ as $x \to \left( \dfrac{\pi}{2} \right)^+$ |
| $\arctan x$ | $\dfrac{\pi}{2}$ as $x \to +\infty$, $-\dfrac{\pi}{2}$ as $x \to -\infty$ |

The functions $\sin x$ and $\cos x$ have no limit as $x \to \pm\infty$, because they take every value between $-1$ and $1$ infinitely often.
:::

:::teorema{#operazioni-limiti titolo="Limits of sums, products and quotients"}
Suppose $\displaystyle\lim_{x \to x_0} f(x) = \ell$ and $\displaystyle\lim_{x \to x_0} g(x) = m$, where $\ell$ and $m$ are real numbers. Then
$$
\lim_{x \to x_0} \big( f(x) + g(x) \big) = \ell + m ,
\qquad
\lim_{x \to x_0} f(x)\,g(x) = \ell\,m ,
\qquad
\lim_{x \to x_0} \frac{f(x)}{g(x)} = \frac{\ell}{m} \quad \text{if } m \neq 0 .
$$
The same results hold for $x \to \pm\infty$. The theorem lets us calculate the limit of an expression from the limits of its parts. For example,
$$
\lim_{x \to 0} \frac{e^{x} + \cos x}{x + 2} = \frac{1 + 1}{0 + 2} = 1 .
$$
The proofs use the definition of a limit and are studied at the university level.
:::

:::teorema{#operazioni-infinito titolo="Operations with infinite limits"}
When at least one of the limits of $f$ and $g$ is infinite, the following rules apply. Here $\ell$ is a real number, and the sign of the result follows the usual sign rules.

- Sum: $\ell + (\pm\infty) = \pm\infty$, $\ (+\infty) + (+\infty) = +\infty$, $\ (-\infty) + (-\infty) = -\infty$.
- Product: $\ell \cdot (\pm\infty) = \pm\infty$ if $\ell > 0$, with the opposite sign if $\ell < 0$. For $\ (\pm\infty) \cdot (\pm\infty) = \pm\infty$, use the sign rules.
- Quotient: $\dfrac{\ell}{\pm\infty} = 0$, $\ \dfrac{\pm\infty}{\ell} = \pm\infty$ if $\ell \neq 0$, $\ \dfrac{\ell}{0} = \infty$ if $\ell \neq 0$.

These expressions are shorthand. For example, $\dfrac{\ell}{\pm\infty} = 0$ means that if $f(x)$ approaches $\ell$ and $g(x)$ approaches either $+\infty$ or $-\infty$, then $\dfrac{f(x)}{g(x)}$ approaches $0$. In the rule for $\dfrac{\ell}{0}$, the sign depends on the sign of $g(x)$ near $x_0$. We write $0^+$ if $g(x)$ approaches $0$ through positive values and $0^-$ if it approaches $0$ through negative values. For example,
$$
\lim_{x \to 1^+} \frac{2}{x - 1} = \frac{2}{0^+} = +\infty ,
\qquad
\lim_{x \to 1^-} \frac{2}{x - 1} = \frac{2}{0^-} = -\infty ,
\qquad
\lim_{x \to +\infty} \frac{3}{x^2 + 1} = \frac{3}{+\infty} = 0 .
$$
:::

:::teorema{#limite-funzione-composta titolo="Limit of a composite function"}
Suppose $\displaystyle\lim_{x \to x_0} g(x) = t_0$, with $g(x) \neq t_0$ for every $x \neq x_0$ in a neighborhood of $x_0$, and suppose $\displaystyle\lim_{t \to t_0} F(t) = L$. Then
$$
\lim_{x \to x_0} F\big( g(x) \big) = L .
$$
The theorem also holds when $x_0$, $t_0$ or $L$ is infinite. It allows us to calculate a limit using the **change of variable** $t = g(x)$. Its proof is studied at the university level. For example, for $x \to 0^+$, set $t = \dfrac{1}{x}$, which approaches $+\infty$. Since $e^{t}$ approaches $+\infty$, we have $\displaystyle\lim_{x \to 0^+} e^{\frac{1}{x}} = +\infty$. For $x \to 0^-$, on the other hand, $t = \dfrac{1}{x}$ approaches $-\infty$ and $e^{t}$ approaches $0$, so $\displaystyle\lim_{x \to 0^-} e^{\frac{1}{x}} = 0$.
:::

:::definizione{#forme-indeterminate titolo="Indeterminate forms"}
In some cases the limit laws do not determine the result, because the limit depends on the particular functions involved. These cases are called **indeterminate forms**. There are seven:
$$
+\infty - \infty ,
\qquad
0 \cdot \infty ,
\qquad
\frac{0}{0} ,
\qquad
\frac{\infty}{\infty} ,
\qquad
1^{\infty} ,
\qquad
0^{0} ,
\qquad
\infty^{0} .
$$
For example, as $x \to 0$ the quotients $\dfrac{x}{x}$, $\dfrac{x^2}{x}$ and $\dfrac{x}{x^3}$ all have the form $\dfrac{0}{0}$, yet their limits are $1$, $0$ and $+\infty$. To calculate a limit with an indeterminate form, rewrite the expression by factoring, taking out a common factor or rationalizing, or use standard limits. L'Hôpital's rule, which applies to the forms $\dfrac{0}{0}$ and $\dfrac{\infty}{\infty}$, is studied in the chapter on theorems of differential calculus.
:::

:::esempio{titolo="Resolving an indeterminate form by factoring"}
The limit
$$
\lim_{x \to 3} \frac{x^2 - 9}{x^2 - 2x - 3}
$$
has the form $\dfrac{0}{0}$ because both numerator and denominator vanish at $x = 3$. By the factor theorem, both polynomials are divisible by $x - 3$, and we have
$$
\frac{x^2 - 9}{x^2 - 2x - 3} = \frac{(x - 3)(x + 3)}{(x - 3)(x + 1)} = \frac{x + 3}{x + 1} \qquad \text{for } x \neq 3 .
$$
Canceling is valid because the point $x = 3$ is excluded when we calculate the limit. The final expression is a rational function defined at $3$, so the limit equals $\dfrac{6}{4} = \dfrac{3}{2}$.
:::

:::teorema{#limiti-razionali-infinito titolo="Limits of polynomials and rational functions at infinity"}
As $x \to \pm\infty$, a polynomial has the same limit as its leading term. For a rational function $\dfrac{P(x)}{Q(x)}$, where $P$ has degree $p$ and leading coefficient $a$, and $Q$ has degree $q$ and leading coefficient $b$:

- if $p < q$, the limit is $0$.
- if $p = q$, the limit is $\dfrac{a}{b}$.
- if $p > q$, the limit is infinite with the sign of $\dfrac{a\,x^{p}}{b\,x^{q}}$.

These rules follow by factoring out the highest power. For example, as $x \to +\infty$,
$$
x^3 - 5x^2 + 2 = x^3 \left( 1 - \frac{5}{x} + \frac{2}{x^3} \right) \to +\infty ,
\qquad
\frac{3x^2 - x}{2x^2 + 5} = \frac{x^2 \left( 3 - \dfrac{1}{x} \right)}{x^2 \left( 2 + \dfrac{5}{x^2} \right)} \to \frac{3}{2} .
$$
In the first case, the form $+\infty - \infty$ disappears because the factor $1 - \dfrac{5}{x} + \dfrac{2}{x^3}$ approaches $1$. In the second, the form $\dfrac{\infty}{\infty}$ disappears after $x^2$ is canceled. Similarly, $\dfrac{x + 1}{x^2 + 4}$ approaches $0$.
:::

:::esempio{titolo="Indeterminate forms involving radicals"}
The limit $\displaystyle\lim_{x \to 4} \frac{\sqrt{x} - 2}{x - 4}$ has the form $\dfrac{0}{0}$. Multiplying the numerator and denominator by $\sqrt{x} + 2$ gives the difference of squares $x - 4$ in the numerator:
$$
\frac{\sqrt{x} - 2}{x - 4} = \frac{(\sqrt{x} - 2)(\sqrt{x} + 2)}{(x - 4)(\sqrt{x} + 2)} = \frac{x - 4}{(x - 4)(\sqrt{x} + 2)} = \frac{1}{\sqrt{x} + 2} ,
$$
so the limit equals $\dfrac{1}{4}$.

The limit $\displaystyle\lim_{x \to +\infty} \left( \sqrt{x^2 + 4x} - x \right)$ has the form $+\infty - \infty$. Multiply and divide by $\sqrt{x^2 + 4x} + x$ and then factor out $x$, which is positive:
$$
\begin{aligned}
\sqrt{x^2 + 4x} - x
&= \frac{x^2 + 4x - x^2}{\sqrt{x^2 + 4x} + x} \\[6pt]
&= \frac{4x}{x \left( \sqrt{1 + \dfrac{4}{x}} + 1 \right)} \\[6pt]
&= \frac{4}{\sqrt{1 + \dfrac{4}{x}} + 1} .
\end{aligned}
$$
As $x \to +\infty$ the denominator approaches $2$, so the limit equals $2$.
:::

:::attenzione
To take $x$ outside a square root, use the identity $\sqrt{x^2} = |x|$. For $x < 0$ this gives $\sqrt{x^2} = -x$. For example, for $x \to -\infty$ we have $\sqrt{x^2 + 1} = |x| \sqrt{1 + \dfrac{1}{x^2}} = -x \sqrt{1 + \dfrac{1}{x^2}}$, so
$$
\lim_{x \to -\infty} \frac{\sqrt{x^2 + 1}}{x} = \lim_{x \to -\infty} \left( -\sqrt{1 + \frac{1}{x^2}} \right) = -1 ,
$$
whereas for $x \to +\infty$ the same limit equals $1$. The result $-1$ agrees with the sign of the function, which is negative for $x < 0$.
:::

## Standard limits

::::teorema{#limite-notevole-seno titolo="The standard sine limit"}
When $x$ is measured in radians,
$$
\lim_{x \to 0} \frac{\sin x}{x} = 1 .
$$
The limit has the form $\dfrac{0}{0}$ and cannot be found by algebraic manipulation. The result says that for $x$ close to $0$, the sine of $x$ is nearly equal to $x$. For example, $\sin 0.1 = 0.0998\ldots$. This limit is used to find the derivative of $\sin x$ in the chapter on derivatives.

::grafico{f="sin(x)/x" punti="0,1,vuoto" xmin=-10 xmax=10 ymin=-1 ymax=2 legenda="y = \dfrac{\sin x}{x}" titolo="The function $y = \dfrac{\sin x}{x}$ is undefined at $0$, and its limit as $x \to 0$ is $1$"}

:::dimostrazione
First consider $0 < x < \dfrac{\pi}{2}$. On the unit circle with center $O$ and radius $1$, let $A(1, 0)$ and let $P(\cos x, \sin x)$ be the point on the circle for which the angle $A\widehat{O}P$ measures $x$ radians. Let $T(1, \tan x)$ be the point where the line $OP$ meets the tangent to the circle at $A$. The idea is to compare the areas of three figures, each contained in the next: triangle $OAP$, circular sector $OAP$ and triangle $OAT$.

::grafico{curve="cos(t),sin(t),0,1.5708" segmenti="0,0,1,0.8423;1,0,1,0.8423;0.7648,0.6442,1,0;0.7648,0.6442,0.7648,0" punti="0,0,pieno,O;1,0,pieno,A;0.7648,0.6442,pieno,P;1,0.8423,pieno,T" etichette="0.62,0.3,sin x;1.05,0.42,tan x" xmin=-0.2 xmax=1.4 ymin=-0.2 ymax=1.2 uguale=1 legenda=0 titolo="For $0 < x < \dfrac{\pi}{2}$, triangle $OAP$ is contained in circular sector $OAP$, which is contained in triangle $OAT$"}

- Triangle $OAP$ has base $OA = 1$ and height equal to the vertical coordinate of $P$, namely $\sin x$, so its area is $\dfrac{\sin x}{2}$.
- The circular sector has radius $1$ and angle $x$. The area of a sector is proportional to its angle, and the whole disk, with angle $2\pi$, has area $\pi$. Therefore the area of the sector is $\dfrac{x}{2}$.
- Triangle $OAT$ has base $OA = 1$ and height $AT = \tan x$, so its area is $\dfrac{\tan x}{2}$.

Each figure is contained in the next, so $\dfrac{\sin x}{2} < \dfrac{x}{2} < \dfrac{\tan x}{2}$. Multiplying by $2$ gives
$$
\sin x < x < \frac{\sin x}{\cos x} .
$$
Since $\sin x > 0$, all three expressions can be divided by $\sin x$ without reversing the inequalities:
$$
1 < \frac{x}{\sin x} < \frac{1}{\cos x} .
$$
All three expressions are positive, so taking their reciprocals reverses the inequalities:
$$
\cos x < \frac{\sin x}{x} < 1 .
$$
As $x \to 0^+$ we have $\cos x \to 1$, and the constant $1$ approaches $1$. The **squeeze theorem** therefore gives $\displaystyle\lim_{x \to 0^+} \frac{\sin x}{x} = 1$.

For $x < 0$, observe that $\dfrac{\sin(-x)}{-x} = \dfrac{-\sin x}{-x} = \dfrac{\sin x}{x}$ because sine is an odd function. The function $\dfrac{\sin x}{x}$ is therefore even, and its left-hand limit at $0$ equals its right-hand limit. Thus the limit as $x \to 0$ is $1$.
:::
::::

:::teorema{#limiti-goniometrici titolo="Limits derived from the sine limit"}
With $x$ in radians, we have
$$
\lim_{x \to 0} \frac{1 - \cos x}{x^2} = \frac{1}{2} ,
\qquad
\lim_{x \to 0} \frac{1 - \cos x}{x} = 0 ,
\qquad
\lim_{x \to 0} \frac{\tan x}{x} = 1 .
$$
For the first limit, multiply the numerator and denominator by $1 + \cos x$ and use the identity $1 - \cos^2 x = \sin^2 x$:
$$
\frac{1 - \cos x}{x^2} = \frac{1 - \cos^2 x}{x^2 (1 + \cos x)} = \left( \frac{\sin x}{x} \right)^2 \cdot \frac{1}{1 + \cos x} ,
$$
which approaches $1^2 \cdot \dfrac{1}{2} = \dfrac{1}{2}$. The second limit follows from the first because $\dfrac{1 - \cos x}{x} = \dfrac{1 - \cos x}{x^2} \cdot x$ approaches $\dfrac{1}{2} \cdot 0 = 0$. The third follows from $\dfrac{\tan x}{x} = \dfrac{\sin x}{x} \cdot \dfrac{1}{\cos x}$, which approaches $1 \cdot 1 = 1$.

By the theorem on limits of composite functions, the standard limits also hold when $x$ is replaced by a function $g(x)$ that approaches $0$. For example, with $t = 5x$,
$$
\lim_{x \to 0} \frac{\sin (5x)}{x} = \lim_{x \to 0} 5 \cdot \frac{\sin (5x)}{5x} = 5 \cdot 1 = 5 .
$$
:::

:::esempio{titolo="A limit involving two standard trigonometric limits"}
The limit $\displaystyle\lim_{x \to 0} \frac{1 - \cos (2x)}{x \sin x}$ has the form $\dfrac{0}{0}$. Multiply and divide by $4x^2 = (2x)^2$ to bring out the standard cosine limit with $t = 2x$:
$$
\frac{1 - \cos (2x)}{x \sin x} = \frac{1 - \cos (2x)}{(2x)^2} \cdot \frac{4x^2}{x \sin x} = \frac{1 - \cos (2x)}{(2x)^2} \cdot 4 \cdot \frac{x}{\sin x} .
$$
The first factor approaches $\dfrac{1}{2}$ and the last approaches $1$, so the limit is $\dfrac{1}{2} \cdot 4 \cdot 1 = 2$.
:::

:::teorema{#limite-notevole-e titolo="The standard limit defining e"}
We have
$$
\lim_{x \to +\infty} \left( 1 + \frac{1}{x} \right)^{x} = e ,
\qquad
\lim_{x \to -\infty} \left( 1 + \frac{1}{x} \right)^{x} = e ,
$$
where $e = 2.71828\ldots$ is Euler's number, the base of the natural logarithm. The limit has the form $1^{\infty}$ because the base approaches $1$ and the exponent approaches infinity. The function values approach $e$ as $x$ increases:

| $x$ | $1$ | $10$ | $100$ | $1000$ |
| --- | --- | --- | --- | --- |
| $\left( 1 + \dfrac{1}{x} \right)^{x}$ | $2$ | $2.5937\ldots$ | $2.7048\ldots$ | $2.7169\ldots$ |

The proof is studied at the university level. This limit gives the standard exponential and logarithmic limits used to calculate the derivatives of $e^{x}$ and $\ln x$.

::grafico{f="(1+1/x)^x" asintoti="y=2.71828" xmin=0 xmax=20 ymin=0 ymax=4 legenda="y = \left( 1 + \dfrac{1}{x} \right)^{x}" titolo="For $x \to +\infty$ the function $y = \left( 1 + \dfrac{1}{x} \right)^{x}$ increases and approaches the line $y = e$"}

:::

:::teorema{#limiti-esponenziali-logaritmici titolo="Limits derived from the limit defining e"}
For every real number $k$ and every $a > 0$, we have
$$
\lim_{x \to \pm\infty} \left( 1 + \frac{k}{x} \right)^{x} = e^{k} ,
\qquad
\lim_{x \to 0} (1 + x)^{\frac{1}{x}} = e ,
$$
$$
\lim_{x \to 0} \frac{\ln (1 + x)}{x} = 1 ,
\qquad
\lim_{x \to 0} \frac{e^{x} - 1}{x} = 1 ,
\qquad
\lim_{x \to 0} \frac{a^{x} - 1}{x} = \ln a ,
\qquad
\lim_{x \to 0} \frac{(1 + x)^{k} - 1}{x} = k .
$$
These limits follow by a change of variable.

- For $k \neq 0$, set $t = \dfrac{x}{k}$, which tends to infinity. Then $\left( 1 + \dfrac{k}{x} \right)^{x} = \left[ \left( 1 + \dfrac{1}{t} \right)^{t} \right]^{k}$, which approaches $e^{k}$. For $k = 0$ the function equals $1 = e^{0}$.
- With $t = \dfrac{1}{x}$, which tends to infinity as $x \to 0$, we get $(1 + x)^{\frac{1}{x}} = \left( 1 + \dfrac{1}{t} \right)^{t}$, which approaches $e$.
- By the properties of logarithms, $\dfrac{\ln(1 + x)}{x} = \ln (1 + x)^{\frac{1}{x}}$, which approaches $\ln e = 1$.
- With $t = e^{x} - 1$, which approaches $0$, we have $x = \ln (1 + t)$, so $\dfrac{e^{x} - 1}{x} = \dfrac{t}{\ln(1 + t)}$, which approaches $1$.
- Since $a^{x} = e^{x \ln a}$, for $a \neq 1$ we have $\dfrac{a^{x} - 1}{x} = \dfrac{e^{x \ln a} - 1}{x \ln a} \cdot \ln a$, which approaches $\ln a$. For $a = 1$ the function equals $0 = \ln 1$.
- Since $(1 + x)^{k} = e^{k \ln (1 + x)}$, for $k \neq 0$ we have $\dfrac{(1 + x)^{k} - 1}{x} = \dfrac{e^{k \ln(1 + x)} - 1}{k \ln (1 + x)} \cdot k \cdot \dfrac{\ln (1 + x)}{x}$, which approaches $1 \cdot k \cdot 1 = k$.

For example, $\displaystyle\lim_{x \to 0} \frac{\ln (1 + 3x)}{x} = \lim_{x \to 0} 3 \cdot \frac{\ln (1 + 3x)}{3x} = 3$, and $\displaystyle\lim_{x \to 0} \frac{\sqrt{1 + x} - 1}{x} = \frac{1}{2}$, with $k = \dfrac{1}{2}$.
:::

:::esempio{titolo="An indeterminate form of the type one raised to infinity"}
The limit $\displaystyle\lim_{x \to +\infty} \left( \frac{x + 2}{x} \right)^{3x}$ has the form $1^{\infty}$ because the base approaches $1$. Write the base as $1 + \dfrac{2}{x}$ and use the laws of exponents:
$$
\left( \frac{x + 2}{x} \right)^{3x} = \left( 1 + \frac{2}{x} \right)^{3x} = \left[ \left( 1 + \frac{2}{x} \right)^{x} \right]^{3} .
$$
By the standard limit with $k = 2$, the power $\left( 1 + \dfrac{2}{x} \right)^{x}$ approaches $e^{2}$, so the limit equals $\left( e^{2} \right)^{3} = e^{6}$.
:::

## Infinitesimals and infinitely large functions

:::definizione{#infinitesimi titolo="Infinitesimals and infinitely large functions"}
A function $f$ is an **infinitesimal** as $x \to x_0$ if $\displaystyle\lim_{x \to x_0} f(x) = 0$, and is **infinitely large** as $x \to x_0$ if the limit is $+\infty$, $-\infty$ or infinity without a specified sign. The same definition applies as $x \to \pm\infty$. For example, as $x \to 0$, the functions $x^2$, $\sin x$, $1 - \cos x$ and $e^{x} - 1$ are infinitesimals, while $\dfrac{1}{x^2}$ is infinitely large. As $x \to +\infty$, the functions $e^{x}$ and $\ln x$ are infinitely large and $\dfrac{1}{x}$ is infinitesimal. The quotient of two infinitesimals has the form $\dfrac{0}{0}$, and the quotient of two infinitely large functions has the form $\dfrac{\infty}{\infty}$. For this reason, infinitesimals or infinitely large functions are compared using the limit of their quotient.
:::

:::definizione{#confronto-infinitesimi titolo="Comparing infinitesimals"}
Let $f$ and $g$ be two infinitesimals as $x \to x_0$, with $g(x) \neq 0$ for $x \neq x_0$ close to $x_0$. Consider the limit $\displaystyle\lim_{x \to x_0} \frac{f(x)}{g(x)}$.

- If the limit is $0$, then $f$ is an infinitesimal of **higher order** than $g$, meaning that it approaches $0$ faster.
- If the limit is a number $\ell \neq 0$, then $f$ and $g$ are infinitesimals of the same order. In particular, if $\ell = 1$, then $f$ and $g$ are **equivalent**, and we write $f(x) \sim g(x)$.
- If the limit is infinite, then $f$ is an infinitesimal of lower order than $g$.
- If the limit does not exist, the two infinitesimals cannot be compared in this way.

An infinitesimal $f$ is of order $\alpha > 0$ relative to $x$ as $x \to 0$ if $\dfrac{f(x)}{x^{\alpha}}$ approaches a number other than $0$. It follows from the standard limits that, as $x \to 0$,
$$
\sin x \sim x ,
\qquad
\tan x \sim x ,
\qquad
\ln (1 + x) \sim x ,
\qquad
e^{x} - 1 \sim x ,
\qquad
1 - \cos x \sim \frac{x^2}{2} .
$$
Therefore $1 - \cos x$ is an infinitesimal of order $2$, that is, of higher order than $x$, and $\sin x$ is an infinitesimal of order $1$.

::grafico{f="x;1-cos(x)" xmin=-2 xmax=2 ymin=-2 ymax=2 uguale=1 legenda="y = x;y = 1 - \cos x" titolo="For $x$ close to $0$, the values of $1 - \cos x$ are much smaller than those of $x$ because $1 - \cos x$ is an infinitesimal of order $2$"}

:::

:::teorema{#sostituzione-infinitesimi titolo="Substitution of equivalent infinitesimals"}
Suppose $f \sim f_1$ and $g \sim g_1$ as $x \to x_0$. Then
$$
\lim_{x \to x_0} \frac{f(x)}{g(x)} = \lim_{x \to x_0} \frac{f_1(x)}{g_1(x)} ,
$$
in the sense that if either limit exists, the other also exists and the two limits are equal. Indeed,
$$
\frac{f(x)}{g(x)} = \frac{f(x)}{f_1(x)} \cdot \frac{f_1(x)}{g_1(x)} \cdot \frac{g_1(x)}{g(x)} ,
$$
and the first and last factors approach $1$. Furthermore, in a sum of infinitesimals the higher-order terms can be neglected. For example, $x + 3x^2 \sim x$ as $x \to 0$ because $\dfrac{x + 3x^2}{x} = 1 + 3x$ approaches $1$.

This principle allows each infinitesimal to be replaced by a simpler one. For example, since $\sin (3x) \sim 3x$ and $e^{2x} - 1 \sim 2x$,
$$
\lim_{x \to 0} \frac{\sin (3x)}{e^{2x} - 1} = \lim_{x \to 0} \frac{3x}{2x} = \frac{3}{2} .
$$
:::

:::attenzione
This substitution applies to factors in a product or quotient but not to the terms of a difference. In the limit $\displaystyle\lim_{x \to 0} \frac{\tan x - \sin x}{x^3}$, replacing $\tan x$ and $\sin x$ with $x$ would give $\dfrac{0}{x^3} = 0$, which is incorrect. Instead, write the numerator as a product:
$$
\tan x - \sin x = \frac{\sin x}{\cos x} - \sin x = \frac{\sin x \, (1 - \cos x)}{\cos x} = \tan x \, (1 - \cos x) \sim x \cdot \frac{x^2}{2} ,
$$
so the limit equals $\dfrac{1}{2}$.
:::

:::definizione{#confronto-infiniti titolo="Comparing infinitely large functions"}
Let $f$ and $g$ be infinitely large functions as $x \to x_0$ or as $x \to \pm\infty$. If $\dfrac{f(x)}{g(x)}$ tends to infinity, then $f$ is infinitely large and of **higher order** than $g$. If the quotient approaches a number other than $0$, the two functions have the same order. If it approaches $0$, then $f$ is of lower order. As $x \to +\infty$, a polynomial of degree $n$ is infinitely large of order $n$ relative to $x$. For example, $x^2 + 1$ is of higher order than $x$ because $\dfrac{x^2 + 1}{x}$ approaches $+\infty$.

In a sum of infinitely large functions, the lower-order terms can be neglected. The rule for limits of rational functions at infinity is a special case of this principle. For example, as $x \to +\infty$ the function $\dfrac{x^3 + x}{2x^3 - 5}$ has the same limit as $\dfrac{x^3}{2x^3} = \dfrac{1}{2}$.
:::

:::teorema{#gerarchia-infiniti titolo="Hierarchy of growth rates"}
As $x \to +\infty$, with $\alpha > 0$ and $a > 1$, we have
$$
\lim_{x \to +\infty} \frac{\ln x}{x^{\alpha}} = 0 ,
\qquad
\lim_{x \to +\infty} \frac{x^{\alpha}}{a^{x}} = 0 .
$$
Therefore, as $x \to +\infty$, the logarithm grows more slowly than every power of $x$, and every power of $x$ grows more slowly than every exponential with base greater than $1$. Of two exponentials with $1 < a < b$, the one with the larger base grows faster because $\dfrac{a^{x}}{b^{x}} = \left( \dfrac{a}{b} \right)^{x}$ approaches $0$. The two limits are proved using l'Hôpital's rule in the chapter on theorems of differential calculus.

For example, dividing the numerator and denominator by $2^{x}$ gives
$$
\lim_{x \to +\infty} \frac{x^3 + 2^{x}}{3 \cdot 2^{x} - x^5} = \lim_{x \to +\infty} \frac{\dfrac{x^3}{2^{x}} + 1}{3 - \dfrac{x^5}{2^{x}}} = \frac{0 + 1}{3 - 0} = \frac{1}{3} .
$$
:::

## Limits of sequences

:::definizione{#successioni titolo="Sequences"}
A **sequence** is a function that assigns to each natural number $n$ a real number $a_n$, called the $n$th term of the sequence. Usually $n$ starts at $0$ or $1$. For example, the sequence $a_n = \dfrac{1}{n}$, with $n \geq 1$, has terms $1, \dfrac{1}{2}, \dfrac{1}{3}, \dfrac{1}{4}, \ldots$, and the terms of the sequence $a_n = (-1)^n$ alternate between $1$ and $-1$.
:::

:::definizione{#limite-successione titolo="Limit of a sequence"}
The variable $n$ takes only natural number values, so the only limit considered for a sequence is the limit as $n \to +\infty$. We write $\displaystyle\lim_{n \to +\infty} a_n = \ell$ if for every $\varepsilon > 0$ there is a number $N$ such that $|a_n - \ell| < \varepsilon$ for every $n > N$. In this case the sequence is called **convergent**. If $a_n$ approaches either $+\infty$ or $-\infty$, with an analogous definition, the sequence **diverges** to infinity. If its limit does not exist, the sequence is called oscillatory.

For example, $a_n = \dfrac{2n + 1}{n} = 2 + \dfrac{1}{n}$ converges to $2$. Indeed, $|a_n - 2| = \dfrac{1}{n}$, and the inequality $\dfrac{1}{n} < \varepsilon$ holds for $n > \dfrac{1}{\varepsilon}$. With $\varepsilon = \dfrac{1}{100}$, every term with $n > 100$ is within one hundredth of $2$. The sequence $(-1)^n$ oscillates because its terms continue to alternate between $1$ and $-1$.
:::

:::teorema{#successioni-funzioni titolo="Limits of sequences and limits of functions"}
Let $a_n = f(n)$, where $f$ is a function defined in a neighborhood of $+\infty$. If $\displaystyle\lim_{x \to +\infty} f(x) = L$, whether finite or infinite, then $\displaystyle\lim_{n \to +\infty} a_n = L$.

The theorem allows the limit of a sequence to be calculated using the limit laws and standard limits for functions. The proof is studied at the university level. For example,
$$
\lim_{n \to +\infty} \frac{n^2 + 1}{3n^2} = \frac{1}{3} ,
\qquad
\lim_{n \to +\infty} \left( 1 + \frac{1}{n} \right)^{n} = e ,
\qquad
\lim_{n \to +\infty} \frac{\ln n}{n} = 0 .
$$
:::

:::teorema{#progressioni titolo="Limits of arithmetic and geometric sequences"}
An arithmetic sequence with common difference $d$ has terms $a_n = a_1 + (n - 1)\,d$. As $n \to +\infty$, it diverges to $+\infty$ if $d > 0$, diverges to $-\infty$ if $d < 0$, and is constant if $d = 0$.

A geometric sequence with first term $a_1 \neq 0$ and common ratio $q$ has terms $a_n = a_1\,q^{\,n-1}$, so its limit depends on the limit of $q^n$:

- if $q > 1$, then $q^n$ approaches $+\infty$.
- if $q = 1$, then $q^n = 1$ for every $n$.
- if $-1 < q < 1$, then $q^n$ approaches $0$.
- if $q \leq -1$, then $q^n$ has no limit because its terms change sign at every step.

For $q \neq 1$, the sum of the first $n$ terms of a geometric sequence is
$$
S_n = a_1 \cdot \frac{1 - q^n}{1 - q} .
$$
If $-1 < q < 1$, the term $q^n$ approaches $0$, so $S_n$ approaches $\dfrac{a_1}{1 - q}$. For example, with $a_1 = 1$ and $q = \dfrac{1}{2}$, the sum $1 + \dfrac{1}{2} + \dfrac{1}{4} + \ldots + \dfrac{1}{2^{n-1}}$ equals $S_n = 2 \left( 1 - \dfrac{1}{2^n} \right)$ and approaches $2$ as $n \to +\infty$.
:::
