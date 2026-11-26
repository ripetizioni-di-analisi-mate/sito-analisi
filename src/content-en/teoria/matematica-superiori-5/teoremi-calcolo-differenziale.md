---
titolo: Theorems of differential calculus
sommario: What the theorems of Fermat, Rolle, Lagrange, and Cauchy say and what they mean geometrically, how Lagrange's mean value theorem gives the monotonicity test and the properties of functions with zero derivative, and how to evaluate limits of indeterminate forms using l'Hôpital's rule.
---

## Fermat's theorem

:::definizione{#estremi-relativi titolo="Local maxima and minima"}
Let $f$ be defined on an interval $I$, and let $x_0$ be a point in $I$. The point $x_0$ is a **local maximum point** of $f$ if there is a neighborhood $I(x_0)$ such that
$$
f(x) \leq f(x_0) \qquad \text{for every } x \text{ in } I(x_0) \text{ that belongs to } I .
$$
The inequality $f(x) \geq f(x_0)$ defines a **local minimum point**. In other words, the value $f(x_0)$ is compared only with the values of $f$ at points near $x_0$. For $f(x) = x^3 - 3x$ we have $f(-1) = 2$, and at points near $-1$ the function takes values less than $2$, so $x_0 = -1$ is a local maximum point. However, $2$ is not the largest value of $f$ since, for example, $f(3) = 18$. Local and absolute maxima and minima are studied in detail in the chapter on maxima, minima, inflection points, and curve sketching. Here they are used to state Fermat's theorem.
:::

:::richiamo{titolo="Preservation of sign under limits"}
If $\displaystyle\lim_{h \to 0} g(h) = \ell$ and $g(h) \geq 0$ in a neighborhood of $0$, except possibly at $h = 0$, then $\ell \geq 0$. The same holds with $\leq$ in place of $\geq$, and for the right-hand and left-hand limits.
:::

::::teorema{#teorema-fermat titolo="Fermat's theorem"}
Let $f$ be defined on an interval $I$, and let $x_0$ be an interior point of $I$ at which $f$ has a local maximum or minimum. If $f$ is differentiable at $x_0$, then
$$
f'(x_0) = 0 .
$$
A point at which the derivative is zero is called a **stationary point**. Geometrically, the theorem says that at an interior local maximum or minimum the tangent line is horizontal if it exists. For $f(x) = x^3 - 3x$ we have $f'(x) = 3x^2 - 3$, and indeed at the local maximum $x = -1$ and the local minimum $x = 1$ the derivative equals $3 - 3 = 0$. The theorem helps locate the maxima and minima of a differentiable function because it narrows the search to points where $f'(x) = 0$.

::grafico{f="x^3-3*x" punti="-1,2,pieno;1,-2,pieno" segmenti="-2,2,0,2;0,-2,2,-2" xmin=-3 xmax=3 ymin=-4 ymax=4 titolo="At the local maximum $(-1, 2)$ and the local minimum $(1, -2)$ of $f(x) = x^3 - 3x$, the dashed tangent lines are horizontal because $f'(-1) = f'(1) = 0$"}

:::dimostrazione
The idea is to examine the sign of the difference quotient to the right and left of $x_0$. Suppose that $x_0$ is a local maximum point. The case of a minimum is similar. Since $x_0$ is an interior point of $I$, for sufficiently small $h$, positive or negative, the point $x_0 + h$ lies in the neighborhood in the definition, so
$$
f(x_0 + h) - f(x_0) \leq 0 .
$$
For $h > 0$, the difference quotient $\dfrac{f(x_0 + h) - f(x_0)}{h}$ has numerator $\leq 0$ and positive denominator, so it is $\leq 0$. By preservation of sign, its right-hand limit is $\leq 0$, that is, $f'_+(x_0) \leq 0$.

For $h < 0$ the numerator is still $\leq 0$ and the denominator is negative, so the difference quotient is $\geq 0$. Likewise, its left-hand limit is $\geq 0$, that is, $f'_-(x_0) \geq 0$.

Since $f$ is differentiable at $x_0$, the right-hand and left-hand derivatives are both equal to $f'(x_0)$. Thus $f'(x_0) \leq 0$ and $f'(x_0) \geq 0$, and therefore $f'(x_0) = 0$.
:::
::::

:::attenzione
A stationary point need not be a maximum or a minimum. The function $f(x) = x^3$ satisfies $f'(0) = 0$, but it is increasing because $x_1 < x_2$ implies $x_1^3 < x_2^3$. It therefore has neither a local maximum nor a local minimum at $0$. The assumption that $x_0$ is an *interior point* is also necessary. The function $f(x) = x$ on the interval $[0, 1]$ has its maximum at the endpoint $x_0 = 1$, but its derivative equals $1$ everywhere.
:::

## Rolle's theorem

:::richiamo{titolo="Extreme value theorem"}
If $f$ is continuous on the closed, bounded interval $[a, b]$, then $f$ attains on $[a, b]$ both a maximum value $M$ and a minimum value $m$.
:::

::::teorema{#teorema-rolle titolo="Rolle's theorem"}
Let $f$ be a function such that
$$
\begin{cases}
f \text{ is continuous on } [a, b] \\
f \text{ is differentiable on } (a, b) \\
f(a) = f(b)
\end{cases}
$$
Then there is at least one point $c$ in $(a, b)$ such that $f'(c) = 0$.

This has a geometric interpretation. If the points on the graph with horizontal coordinates $a$ and $b$ have the same vertical coordinate, the line joining them is horizontal, and at some interior point the tangent to the graph is also horizontal. For example, $f(x) = x^2 - 4x + 3$ is a polynomial, so it is continuous and differentiable on $\mathbb{R}$, and on the interval $[0, 4]$ we have $f(0) = f(4) = 3$. The hypotheses hold, and indeed $f'(x) = 2x - 4$ is zero at $c = 2$, which belongs to $(0, 4)$.

::grafico{f="x^2-4*x+3" punti="0,3,pieno,A;4,3,pieno,B;2,-1,pieno" segmenti="0,3,4,3;1,-1,3,-1" xmin=-1 xmax=5 ymin=-2 ymax=5 titolo="For $f(x) = x^2 - 4x + 3$ we have $f(0) = f(4) = 3$, so the segment $AB$ is horizontal. At $c = 2$ the tangent is also horizontal"}

:::dimostrazione
The idea is to show that $f$ attains either its maximum or its minimum at an interior point and then apply Fermat's theorem. Since $f$ is continuous on $[a, b]$, the extreme value theorem guarantees that $f$ attains on $[a, b]$ both a maximum value $M$ and a minimum value $m$. There are two cases.

- If $M = m$, the maximum and minimum values coincide, so $f$ is constant on $[a, b]$. Then $f'(x) = 0$ for every $x$ in $(a, b)$, and for $c$ we may choose any point in $(a, b)$.
- If $M \neq m$, at least one of the two values differs from the common value $f(a) = f(b)$. Suppose that $M$ differs. The case of $m$ is similar. Then $M$ is attained at a point $c$ other than $a$ or $b$, that is, at an interior point of the interval. The point $c$ is a maximum point for $f$ on all of $[a, b]$, so it is also a local maximum point. Moreover, $f$ is differentiable at $c$ because $c$ belongs to $(a, b)$. Therefore **Fermat's theorem** gives $f'(c) = 0$.
:::
::::

:::attenzione
If one of the hypotheses fails, the point $c$ may not exist. The function $f(x) = |x|$ on the interval $[-1, 1]$ is continuous and satisfies $f(-1) = f(1) = 1$, but it is not differentiable at $0$. Its derivative equals $-1$ for $x < 0$ and $1$ for $x > 0$, so it does *not* vanish anywhere. Likewise, the function that equals $x$ for $0 \leq x < 1$ and $0$ for $x = 1$ satisfies $f(0) = f(1) = 0$ and is differentiable on $(0, 1)$, but it is discontinuous at $1$. Its derivative on $(0, 1)$ always equals $1$.
:::

:::esempio{titolo="Checking the hypotheses and finding the points"}
Consider $f(x) = \sin x + \cos x$ on the interval $\left[ 0, \dfrac{\pi}{2} \right]$. The function is continuous and differentiable on $\mathbb{R}$ because it is the sum of continuous, differentiable functions. Also,
$$
f(0) = 0 + 1 = 1 ,
\qquad
f\left( \frac{\pi}{2} \right) = 1 + 0 = 1 ,
$$
so Rolle's theorem applies. The derivative is $f'(x) = \cos x - \sin x$, and the equation $\cos x = \sin x$ has exactly one solution in $\left( 0, \dfrac{\pi}{2} \right)$, namely $c = \dfrac{\pi}{4}$, where sine and cosine both equal $\dfrac{\sqrt{2}}{2}$.
:::

## Lagrange's mean value theorem

::::teorema{#teorema-lagrange titolo="Lagrange's mean value theorem"}
Let $f$ be a function such that
$$
\begin{cases}
f \text{ is continuous on } [a, b] \\
f \text{ is differentiable on } (a, b)
\end{cases}
$$
Then there is at least one point $c$ in $(a, b)$ such that
$$
f'(c) = \frac{f(b) - f(a)}{b - a} .
$$
The theorem is also called the **mean value theorem**. The quotient $\dfrac{f(b) - f(a)}{b - a}$ is the slope of the line joining the points $A\big( a, f(a) \big)$ and $B\big( b, f(b) \big)$ on the graph. Geometrically, this therefore means that at some interior point the tangent to the graph is *parallel* to the line $AB$. Rolle's theorem is the special case in which $f(a) = f(b)$.

For example, $f(x) = \sqrt{x}$ is continuous on $[0, 4]$ and differentiable on $(0, 4)$ even though it is not differentiable at $0$. The line $AB$ has slope $\dfrac{2 - 0}{4 - 0} = \dfrac{1}{2}$, and the equation $f'(c) = \dfrac{1}{2\sqrt{c}} = \dfrac{1}{2}$ gives $c = 1$. The tangent at $(1, 1)$ has equation $y = \dfrac{x}{2} + \dfrac{1}{2}$.

::grafico{f="sqrt(x);x/2+1/2" punti="0,0,pieno,A;4,2,pieno,B;1,1,pieno" segmenti="0,0,4,2" xmin=-1 xmax=5 ymin=-1 ymax=3 uguale=1 legenda="y = \sqrt{x};y = \dfrac{x}{2} + \dfrac{1}{2}" titolo="The segment $AB$ through $(0, 0)$ and $(4, 2)$ has slope $\dfrac{1}{2}$. The tangent to the graph of $\sqrt{x}$ at the point with horizontal coordinate $c = 1$ has the same slope and is parallel to $AB$"}

:::dimostrazione
The idea is to take the difference between $f$ and the linear function defining $AB$ and apply Rolle's theorem to the difference. Let $m = \dfrac{f(b) - f(a)}{b - a}$. The line $AB$ has equation $y = f(a) + m\,(x - a)$, and we set
$$
g(x) = f(x) - f(a) - m\,(x - a) .
$$
The function $g$ is continuous on $[a, b]$ and differentiable on $(a, b)$ because it is the difference between $f$ and a polynomial of degree one. At the endpoints we have
$$
g(a) = f(a) - f(a) - 0 = 0 ,
\qquad
g(b) = f(b) - f(a) - \frac{f(b) - f(a)}{b - a}\,(b - a) = 0 .
$$
Thus $g(a) = g(b)$, and $g$ satisfies the hypotheses of Rolle's theorem. There is therefore a point $c$ in $(a, b)$ with $g'(c) = 0$. Since $g'(x) = f'(x) - m$, the equality $g'(c) = 0$ means that $f'(c) = m$, as claimed.
:::
::::

:::esempio{titolo="The point given by the mean value theorem for a parabola"}
For $f(x) = x^2$ on the interval $[1, 3]$ the hypotheses hold because $f$ is a polynomial. The slope of the line $AB$ is $\dfrac{9 - 1}{3 - 1} = 4$, and the equation $f'(c) = 2c = 4$ gives $c = 2$, the midpoint of the interval. For every parabola $y = px^2 + qx + r$ the point given by the mean value theorem is the midpoint of $[a, b]$ because $\dfrac{f(b) - f(a)}{b - a} = p\,(a + b) + q$ and $f'(c) = 2pc + q$.
:::

:::osservazione{#lagrange-velocita titolo="Physical interpretation of the mean value theorem"}
Let $s(t)$ be a car's position along a road at time $t$. The quotient $\dfrac{s(t_2) - s(t_1)}{t_2 - t_1}$ is its average velocity between times $t_1$ and $t_2$, while $s'(t)$ is its instantaneous velocity. The car's position is continuous and differentiable, so the mean value theorem guarantees a time between $t_1$ and $t_2$ at which its instantaneous velocity equals its average velocity. For example, if a car travels $150\,\mathrm{km}$ in $2$ hours, at some instant the speedometer reads $75\,\mathrm{km/h}$. Highway average-speed enforcement is based on this fact.
:::

:::esempio{titolo="Estimating a square root with the mean value theorem"}
The theorem can also be written as $f(b) - f(a) = f'(c)\,(b - a)$, which can be used to estimate a difference between function values. For $f(x) = \sqrt{x}$ on the interval $[100, 101]$ there is a point $c$ in $(100, 101)$ with
$$
\sqrt{101} - \sqrt{100} = \frac{1}{2\sqrt{c}} \cdot (101 - 100) = \frac{1}{2\sqrt{c}} .
$$
Since $c > 100$, we have $\sqrt{c} > 10$, so $\dfrac{1}{2\sqrt{c}} < \dfrac{1}{20}$. It follows that $\sqrt{101} < 10 + \dfrac{1}{20} = 10.05$. The actual value is $\sqrt{101} = 10.0498\ldots$
:::

## Consequences of the mean value theorem

::::teorema{#derivata-nulla titolo="Functions with zero derivative"}
Suppose $f$ is differentiable on an interval $I$, with $f'(x) = 0$ for every $x$ in $I$. Then $f$ is constant on $I$.

The converse is familiar from the chapter on derivatives, since the derivative of a constant is $0$. The theorem can be used to prove identities between functions. For example, the function $f(x) = \sin^2 x + \cos^2 x$ has derivative $2\sin x \cos x - 2\cos x \sin x = 0$ on $\mathbb{R}$, so it is constant and its value is $f(0) = 0 + 1 = 1$.

:::dimostrazione
Let $x_1$ and $x_2$ be any two points in $I$ with $x_1 < x_2$. The function $f$ is differentiable on $I$, so it is continuous on $[x_1, x_2]$ and differentiable on $(x_1, x_2)$. By the **mean value theorem**, there is a point $c$ in $(x_1, x_2)$ with
$$
f(x_2) - f(x_1) = f'(c)\,(x_2 - x_1) .
$$
Since $f'(c) = 0$, the right-hand side is zero, and therefore $f(x_2) = f(x_1)$. The two points are arbitrary, so $f$ takes the same value at every point in $I$.
:::
::::

:::teorema{#stessa-derivata titolo="Functions with the same derivative"}
Suppose $f$ and $g$ are differentiable on an interval $I$, with $f'(x) = g'(x)$ for every $x$ in $I$. Then there is a constant $k$ such that
$$
f(x) = g(x) + k \qquad \text{for every } x \text{ in } I .
$$
The conclusion follows by applying the theorem on functions with zero derivative to the difference $f - g$, whose derivative is $f' - g' = 0$. For example, the functions whose derivative is $2x$ on $\mathbb{R}$ are precisely the functions $x^2 + k$. Among them, the one that equals $5$ at $x = 1$ is $x^2 + 4$. This theorem will be used in the chapter on indefinite integrals.
:::

:::attenzione
The hypothesis that $I$ is an *interval* is necessary. The function $f(x) = \arctan x + \arctan \dfrac{1}{x}$ is defined for $x \neq 0$ and has derivative
$$
f'(x) = \frac{1}{1 + x^2} + \frac{1}{1 + \dfrac{1}{x^2}} \cdot \left( -\frac{1}{x^2} \right) = \frac{1}{1 + x^2} - \frac{1}{x^2 + 1} = 0 .
$$
However, $f$ is not constant because $f(1) = \dfrac{\pi}{4} + \dfrac{\pi}{4} = \dfrac{\pi}{2}$ and $f(-1) = -\dfrac{\pi}{2}$. The domain of $f$ consists of two intervals, and $f$ is constant on each of them.

::grafico{f="atan(x)+atan(1/x)" legenda="y = \arctan x + \arctan \dfrac{1}{x}" punti="0,1.5708,vuoto;0,-1.5708,vuoto" xmin=-4 xmax=4 ymin=-2 ymax=2 titolo="The function $\arctan x + \arctan \dfrac{1}{x}$ has zero derivative at every point of its domain, but it equals $\dfrac{\pi}{2}$ for $x > 0$ and $-\dfrac{\pi}{2}$ for $x < 0$"}

:::

::::teorema{#criterio-monotonia titolo="Monotonicity test"}
Let $f$ be differentiable on an interval $I$.

- If $f'(x) > 0$ for every $x$ in $I$, then $f$ is **strictly increasing** on $I$, that is, $x_1 < x_2$ implies $f(x_1) < f(x_2)$.
- If $f'(x) < 0$ for every $x$ in $I$, then $f$ is **strictly decreasing** on $I$, that is, $x_1 < x_2$ implies $f(x_1) > f(x_2)$.

The test identifies the intervals on which a function increases or decreases from the sign of its derivative. For $f(x) = x^3 - 6x^2 + 9x$ we have
$$
f'(x) = 3x^2 - 12x + 9 = 3\,(x - 1)(x - 3) .
$$
The trinomial is positive for $x < 1$ and for $x > 3$ and negative for $1 < x < 3$. Thus $f$ is increasing on $(-\infty, 1]$ and on $[3, +\infty)$ and decreasing on $[1, 3]$. The endpoints $1$ and $3$ can be included in these intervals because the test also applies to a function that is continuous on $[a, b]$ and whose derivative is positive, or negative, on $(a, b)$. The test still holds if $f'$ is zero at only finitely many points of $I$, as happens for $x^3$ at $0$.

::grafico{f="x^3-6*x^2+9*x;3*x^2-12*x+9" punti="1,4,pieno;3,0,pieno" segmenti="1,0,1,4" xmin=-1 xmax=5 ymin=-4 ymax=8 legenda="y = x^3 - 6x^2 + 9x;y = 3x^2 - 12x + 9" titolo="The derivative $f'(x) = 3x^2 - 12x + 9$ is negative between $1$ and $3$, where $f(x) = x^3 - 6x^2 + 9x$ decreases, and positive outside $[1, 3]$, where $f$ increases"}

:::dimostrazione
We prove the first case. The second is similar. Let $x_1$ and $x_2$ be two points in $I$, with $x_1 < x_2$. The function $f$ is continuous on $[x_1, x_2]$ and differentiable on $(x_1, x_2)$, so by the **mean value theorem** there is a point $c$ in $(x_1, x_2)$ with
$$
f(x_2) - f(x_1) = f'(c)\,(x_2 - x_1) .
$$
The factor $f'(c)$ is positive by hypothesis, and the factor $x_2 - x_1$ is positive because $x_1 < x_2$. The product is therefore positive, so $f(x_2) > f(x_1)$.
:::
::::

:::osservazione{#monotonia-derivata-segno titolo="Converse of the test"}
If $f$ is differentiable and increasing on an interval, then $f'(x) \geq 0$ at every point. Indeed, for both $h > 0$ and $h < 0$, the numerator and denominator of the difference quotient $\dfrac{f(x + h) - f(x)}{h}$ have the same sign, so the quotient is $\geq 0$ and, by preservation of sign, its limit is $\geq 0$. However, the derivative of a strictly increasing function can be zero at some points, as happens for $x^3$ at $0$. The differentiability test discussed in the chapter on derivatives also follows from the mean value theorem.
:::

:::attenzione
The monotonicity test requires an *interval*. The function $f(x) = \dfrac{1}{x}$ has derivative $-\dfrac{1}{x^2} < 0$ at every point of its domain, but it is not decreasing on its domain because $-1 < 1$ and $f(-1) = -1 < f(1) = 1$. The function is decreasing on each of the intervals $(-\infty, 0)$ and $(0, +\infty)$ separately.
:::

## Cauchy's mean value theorem

:::teorema{#teorema-cauchy titolo="Cauchy's mean value theorem"}
Let $f$ and $g$ be two functions such that
$$
\begin{cases}
f \text{ and } g \text{ are continuous on } [a, b] \\
f \text{ and } g \text{ are differentiable on } (a, b) \\
g'(x) \neq 0 \text{ for every } x \text{ in } (a, b)
\end{cases}
$$
Then $g(b) \neq g(a)$, and there is at least one point $c$ in $(a, b)$ such that
$$
\frac{f(b) - f(a)}{g(b) - g(a)} = \frac{f'(c)}{g'(c)} .
$$
The mean value theorem is the special case $g(x) = x$, since then $g(b) - g(a) = b - a$ and $g'(c) = 1$. Rolle's theorem implies that $g(b) \neq g(a)$ because otherwise $g'$ would vanish at a point in $(a, b)$. The conclusion follows by applying Rolle's theorem to the function
$$
h(x) = f(x)\,\big( g(b) - g(a) \big) - g(x)\,\big( f(b) - f(a) \big) ,
$$
which at $a$ and $b$ takes the same value $f(a)\,g(b) - g(a)\,f(b)$. Cauchy's mean value theorem can be used to prove l'Hôpital's rule.
:::

:::esempio{titolo="The point in Cauchy's mean value theorem for two power functions"}
Let $f(x) = x^2$ and $g(x) = x^3$ on the interval $[1, 2]$. Both functions are polynomials, and $g'(x) = 3x^2$ differs from $0$ on $(1, 2)$, so the hypotheses hold. We have
$$
\frac{f(2) - f(1)}{g(2) - g(1)} = \frac{4 - 1}{8 - 1} = \frac{3}{7} ,
\qquad
\frac{f'(c)}{g'(c)} = \frac{2c}{3c^2} = \frac{2}{3c} .
$$
The equation $\dfrac{2}{3c} = \dfrac{3}{7}$ gives $9c = 14$, that is, $c = \dfrac{14}{9} \approx 1.56$, which lies in $(1, 2)$.
:::

## L'Hôpital's rule

:::teorema{#teorema-de-l-hopital titolo="L'Hôpital's rule"}
Suppose that $f$ and $g$ are differentiable in a neighborhood $I(x_0)$ except possibly at the point $x_0$, with $g'(x) \neq 0$ in this neighborhood. Suppose the limit $\displaystyle\lim_{x \to x_0} \frac{f(x)}{g(x)}$ has the indeterminate form $\dfrac{0}{0}$ or $\dfrac{\infty}{\infty}$. If the limit of the quotient of the derivatives exists, whether finite or infinite, then
$$
\lim_{x \to x_0} \frac{f(x)}{g(x)} = \lim_{x \to x_0} \frac{f'(x)}{g'(x)} .
$$
The rule also holds for right-hand and left-hand limits and for $x \to +\infty$ and $x \to -\infty$. The numerator and denominator are differentiated *separately*. The quotient rule is not applied to $\dfrac{f}{g}$. For example, the limit $\displaystyle\lim_{x \to 1} \frac{\ln x}{x^2 - 1}$ has the form $\dfrac{0}{0}$, and
$$
\lim_{x \to 1} \frac{\ln x}{x^2 - 1} = \lim_{x \to 1} \frac{\dfrac{1}{x}}{2x} = \lim_{x \to 1} \frac{1}{2x^2} = \frac{1}{2} .
$$
In the case $\dfrac{0}{0}$ with $x_0$ finite, the proof follows from Cauchy's mean value theorem. The general case is studied at the university level.
:::

:::esempio{titolo="Repeated application of the rule"}
If the limit of $\dfrac{f'}{g'}$ also has an indeterminate form, the rule applies again, this time using the second derivatives. The limit
$$
\lim_{x \to 0} \frac{e^{x} - 1 - x}{x^2}
$$
has the form $\dfrac{0}{0}$. Differentiating the numerator and denominator gives $\dfrac{e^{x} - 1}{2x}$, which, as $x \to 0$, still has the form $\dfrac{0}{0}$. Differentiating again gives $\dfrac{e^{x}}{2}$, which tends to $\dfrac{1}{2}$. Thus applying l'Hôpital's rule twice shows that the original limit equals $\dfrac{1}{2}$.
:::

:::attenzione
Before applying the rule, check that the limit really has one of the forms $\dfrac{0}{0}$ or $\dfrac{\infty}{\infty}$. The limit $\displaystyle\lim_{x \to 0} \frac{x + 1}{x + 2}$ does *not* have an indeterminate form and equals $\dfrac{1}{2}$ by substitution. The quotient of the derivatives, however, is $\dfrac{1}{1} = 1$, an incorrect value for the limit. Moreover, the rule gives the limit only if the limit of $\dfrac{f'}{g'}$ exists. For $\displaystyle\lim_{x \to +\infty} \frac{x + \sin x}{x}$ the quotient of the derivatives is $1 + \cos x$, which has no limit. Nevertheless, the original limit exists and equals $1$ because $\dfrac{x + \sin x}{x} = 1 + \dfrac{\sin x}{x}$ and $\dfrac{\sin x}{x}$ tends to $0$.
:::

:::teorema{#confronto-infiniti titolo="Relative rates of growth at infinity"}
For every $a > 0$ and every natural number $n$ with $n \geq 1$, the following limits hold:
$$
\lim_{x \to +\infty} \frac{\ln x}{x^{a}} = 0 ,
\qquad
\lim_{x \to +\infty} \frac{x^{n}}{e^{x}} = 0 .
$$
In other words, as $x \to +\infty$ the logarithm grows more slowly than every power of $x$, and every power of $x$ grows more slowly than $e^{x}$. Both limits have the form $\dfrac{\infty}{\infty}$. For the first, l'Hôpital's rule gives
$$
\lim_{x \to +\infty} \frac{\dfrac{1}{x}}{a\,x^{a-1}} = \lim_{x \to +\infty} \frac{1}{a\,x^{a}} = 0 .
$$
For the second, each application of the rule subtracts $1$ from the exponent of $x$ and leaves $e^{x}$ in the denominator. After $n$ applications the result is $\dfrac{n!}{e^{x}}$, which tends to $0$. For example, $\displaystyle\lim_{x \to +\infty} \frac{x^2}{e^{x}} = \lim_{x \to +\infty} \frac{2x}{e^{x}} = \lim_{x \to +\infty} \frac{2}{e^{x}} = 0$. This proves, for the base $e$, the limits used to compare growth rates in the chapter on limits.
:::

## The indeterminate forms 0 · ∞ and ∞ − ∞

:::osservazione{#forma-zero-per-infinito titolo="The indeterminate form zero times infinity"}
Suppose $\displaystyle\lim_{x \to x_0} f(x) = 0$ and $\displaystyle\lim_{x \to x_0} g(x) = \infty$. The product $f \cdot g$ can be written as a quotient in either of two ways:
$$
f \cdot g = \frac{f}{\dfrac{1}{g}}
\qquad \text{or} \qquad
f \cdot g = \frac{g}{\dfrac{1}{f}} ,
$$
the first of the form $\dfrac{0}{0}$ and the second of the form $\dfrac{\infty}{\infty}$. L'Hôpital's rule then applies to the quotient. For $\displaystyle\lim_{x \to 0^+} x \ln x$, move $x$ to the denominator:
$$
\lim_{x \to 0^+} x \ln x = \lim_{x \to 0^+} \frac{\ln x}{\dfrac{1}{x}} = \lim_{x \to 0^+} \frac{\dfrac{1}{x}}{-\dfrac{1}{x^2}} = \lim_{x \to 0^+} (-x) = 0 .
$$
Choose the form with the simpler derivatives. In the other form, $\dfrac{x}{\dfrac{1}{\ln x}}$, the derivative of the denominator is $-\dfrac{1}{x \ln^2 x}$, and the quotient of the derivatives is more complicated than the original expression.

::grafico{f="x*log(x)" punti="0,0,vuoto" xmin=-1 xmax=3 ymin=-1 ymax=3 titolo="The graph of $x \ln x$ approaches the origin as $x \to 0^+$ because the limit of the form $0 \cdot \infty$ equals $0$. The minimum value is $-\dfrac{1}{e}$ at $x = \dfrac{1}{e}$"}

:::

:::osservazione{#forma-infinito-meno-infinito titolo="The indeterminate form infinity minus infinity"}
The difference of two functions that both tend to $+\infty$ or both tend to $-\infty$ can be written as a quotient, usually by putting the fractions over a common denominator. The limit $\displaystyle\lim_{x \to 0^+} \left( \frac{1}{x} - \frac{1}{e^{x} - 1} \right)$ has the form $\infty - \infty$. Using the common denominator gives
$$
\lim_{x \to 0^+} \frac{e^{x} - 1 - x}{x\,\left( e^{x} - 1 \right)} ,
$$
which has the form $\dfrac{0}{0}$. Differentiating the numerator and denominator gives $\dfrac{e^{x} - 1}{e^{x} - 1 + x\,e^{x}}$, still of the form $\dfrac{0}{0}$. Differentiating again gives
$$
\frac{e^{x}}{2e^{x} + x\,e^{x}} = \frac{1}{2 + x} ,
$$
which tends to $\dfrac{1}{2}$. Therefore the limit is $\dfrac{1}{2}$, and the same value is obtained for $x \to 0^-$.
:::

## The indeterminate forms 1^∞, 0^0, and ∞^0

:::osservazione{#forme-esponenziali titolo="Indeterminate forms with the variable in the exponent"}
To evaluate a limit of the form $\displaystyle\lim_{x \to x_0} f(x)^{g(x)}$ with $f(x) > 0$, write the power as an exponential with base $e$:
$$
f(x)^{g(x)} = e^{\,g(x) \ln f(x)} .
$$
If the exponent $g(x) \ln f(x)$ tends to $L$, then $f(x)^{g(x)}$ tends to $e^{L}$ because the exponential function is continuous. The limit therefore reduces to the limit of the exponent. For the forms $1^{\infty}$, $0^{0}$, and $\infty^{0}$, the exponent has the form $0 \cdot \infty$. To evaluate its limit, write it as a quotient and apply l'Hôpital's rule.

- Form $0^{0}$: for $\displaystyle\lim_{x \to 0^+} x^{x}$ the exponent is $x \ln x$, which tends to $0$, so the limit is $e^{0} = 1$.
- Form $1^{\infty}$: for $\displaystyle\lim_{x \to 0} (\cos x)^{\frac{1}{x^2}}$ the exponent is $\dfrac{\ln \cos x}{x^2}$, which has the form $\dfrac{0}{0}$. By l'Hôpital's rule its limit equals that of $\dfrac{-\dfrac{\sin x}{\cos x}}{2x} = -\dfrac{1}{2 \cos x} \cdot \dfrac{\sin x}{x}$, which tends to $-\dfrac{1}{2}$. Thus the limit is $e^{-\frac{1}{2}} = \dfrac{1}{\sqrt{e}}$.
- Form $\infty^{0}$: for $\displaystyle\lim_{x \to +\infty} x^{\frac{1}{x}}$ the exponent is $\dfrac{\ln x}{x}$, which tends to $0$ by the relative growth rates at infinity. Thus the limit is $e^{0} = 1$.

::grafico{f="x^x" punti="0,1,vuoto" xmin=-1 xmax=2 ymin=-1 ymax=4 titolo="The graph of $x^{x}$ for $x > 0$ approaches $(0, 1)$ because the limit of the form $0^{0}$ equals $1$. For $x = 2$ the function equals $2^{2} = 4$"}

:::

:::attenzione
The forms $1^{\infty}$, $0^{0}$, and $\infty^{0}$ are evaluated using the limit of the exponent, and the result can be any number. The limit $\displaystyle\lim_{x \to 0} (\cos x)^{\frac{1}{x^2}}$ has the form $1^{\infty}$ and equals $\dfrac{1}{\sqrt{e}}$, *not* $1$. The limit $\displaystyle\lim_{x \to +\infty} \left( 1 + \frac{1}{x} \right)^{x}$, of the same form, equals $e$, as shown in the chapter on limits.
:::
