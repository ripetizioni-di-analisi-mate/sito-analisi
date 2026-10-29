---
titolo: Curve sketching and optimization
sommario: How to find and classify the maxima and minima of a function with the first derivative and the second derivative, how to study concavity and inflections, how to sketch the graph with the complete curve sketching scheme and how to solve optimization problems, including those on profit, average cost and revenue.
---

## Maxima and minima

:::definizione{#massimi-minimi-assoluti titolo="Absolute maximum and minimum"}
Let $f : A \to \mathbb{R}$ and let $x_0 \in A$. The number $f(x_0)$ is the **absolute maximum** of $f$ if
$$
f(x) \leq f(x_0) \qquad \text{for every } x \in A ,
$$
and then $x_0$ is called an **absolute maximum point**; with the inequality $f(x) \geq f(x_0)$ one defines the **absolute minimum** and the absolute minimum point. The maximum value, if it exists, is unique, whereas the points where it is attained may be more than one. For example $f(x) = x^2$ on the interval $[-1, 2]$ has minimum $0$, attained at $x = 0$, and maximum $4$, attained at $x = 2$; the function $\cos x$ on $\mathbb{R}$ has maximum $1$, attained at all the points $x = 2k\pi$ with $k$ an integer.
:::

:::definizione{#massimi-minimi-relativi titolo="Relative maximum and minimum"}
A relative maximum compares the value at $x_0$ only with the values at nearby points. The point $x_0 \in A$ is a **relative maximum point** (or local) of $f$ if there exists $\delta > 0$ such that
$$
f(x) \leq f(x_0) \qquad \text{for every } x \in A \text{ with } |x - x_0| < \delta ,
$$
and in the same way, with $f(x) \geq f(x_0)$, one defines the **relative minimum point**. Maxima and minima are together called **extrema**. Every absolute maximum point is also a relative maximum point, whereas the converse is false. The function $f(x) = x^3 - 3x$ has a relative maximum at $x = -1$, $f(-1) = 2$, because near $-1$ the values are less than $2$; the maximum, however, is not absolute, because for example $f(3) = 18$.

::grafico{f="x^3-3*x" punti="-1,2,pieno;1,-2,pieno;3,18,pieno" segmenti="-1,0,-1,2;1,0,1,-2" xmin=-4 xmax=4 ymin=-6 ymax=21 titolo="The function $f(x) = x^3 - 3x$ has a relative maximum at $x = -1$ and a relative minimum at $x = 1$; neither is absolute, because for example $f(3) = 18 > 2$"}

:::

:::richiamo{titolo="Fermat's theorem"}
Let $f$ be defined on an interval $I$ and let $x_0$ be an interior point of $I$ that is a relative maximum or minimum point. If $f$ is differentiable at $x_0$, then $f'(x_0) = 0$.
:::

:::osservazione{#punti-candidati titolo="Where to look for extrema"}
By Fermat's theorem, at an interior point where $f$ is differentiable an extremum is possible *only* if the derivative vanishes. The extrema of a function defined on an interval must therefore be looked for among

- the interior **stationary points**, where $f'(x_0) = 0$;
- the interior points where $f$ is not differentiable;
- the endpoints of the interval that belong to the domain.

All three cases actually occur. The function $|x|$ has a minimum at $0$, where it is not differentiable, and the function $f(x) = x$ on $[0, 1]$ has a maximum at $1$, where the derivative equals $1$ and not $0$. The points in the list are only candidates, and the tests that follow serve to decide whether they are extrema.
:::

## First derivative test

:::richiamo{titolo="Lagrange's theorem"}
Let $f$ be continuous on $[a, b]$ and differentiable on $(a, b)$. Then there exists $c \in (a, b)$ such that $f(b) - f(a) = f'(c)\,(b - a)$.
:::

::::teorema{#criterio-derivata-prima titolo="First derivative test"}
Let $f$ be continuous on an interval $(a, b)$ containing $x_0$ and differentiable on $(a, b)$, except possibly at the point $x_0$.

- If $f'(x) > 0$ on $(a, x_0)$ and $f'(x) < 0$ on $(x_0, b)$, then $x_0$ is a **relative maximum** point.
- If $f'(x) < 0$ on $(a, x_0)$ and $f'(x) > 0$ on $(x_0, b)$, then $x_0$ is a **relative minimum** point.
- If $f'$ has the same sign on $(a, x_0)$ and on $(x_0, b)$, then $x_0$ is *not* an extremum.

In other words, a function that increases to the left of $x_0$ and decreases to the right has a maximum at $x_0$. The test is used with the sign table of $f'$. For $f(x) = x^3 - 3x$ one has $f'(x) = 3(x + 1)(x - 1)$, which is positive for $x < -1$, negative for $-1 < x < 1$ and positive for $x > 1$; therefore $x = -1$ is a relative maximum point and $x = 1$ a relative minimum point. The test also holds at points where $f$ is not differentiable, provided it is continuous.

:::dimostrazione
The idea is to compare $f(x_0)$ with $f(x)$ through Lagrange's theorem. Consider the first case. Let $x \in (a, x_0)$. The function is continuous on $[x, x_0]$ and differentiable on $(x, x_0)$, so by Lagrange's theorem there exists $c \in (x, x_0)$ with
$$
f(x_0) - f(x) = f'(c)\,(x_0 - x) > 0 ,
$$
because $f'(c) > 0$ and $x_0 - x > 0$. Now let $x \in (x_0, b)$. In the same way there exists $c \in (x_0, x)$ with $f(x) - f(x_0) = f'(c)\,(x - x_0) < 0$, because $f'(c) < 0$. In both cases $f(x) < f(x_0)$, so $x_0$ is a relative maximum point. The second case is analogous. In the third case, if for example $f' > 0$ on both sides, the same computations give $f(x) < f(x_0)$ on the left and $f(x) > f(x_0)$ on the right, hence $x_0$ is neither a maximum nor a minimum point.
:::
::::

:::attenzione
A stationary point may fail to be an extremum. The function $f(x) = x^3$ has $f'(0) = 0$, but $f'(x) = 3x^2$ is positive both to the left and to the right of $0$; by the first derivative test $x = 0$ is *not* an extremum, and indeed $f$ is increasing on all of $\mathbb{R}$.
:::

## Concavity and inflections

:::definizione{#convessita titolo="Convex function and concave function"}
The graph of $x^2$ lies above each of its tangent lines, that of $-x^2$ below; this property distinguishes the two shapes of the graph. Let $f$ be differentiable on an interval $I$. The function is **convex** on $I$ (it is concave up) if for every $x_0 \in I$
$$
f(x) \geq f(x_0) + f'(x_0)\,(x - x_0) \qquad \text{for every } x \in I ,
$$
that is, if the graph lies above the tangent line at each of its points; it is **concave** on $I$ (it is concave down) if the inequality $\leq$ holds. For $f(x) = x^2$ the difference between the function and the tangent at $x_0$ is
$$
x^2 - \big( x_0^2 + 2x_0\,(x - x_0) \big) = x^2 - 2x_0 x + x_0^2 = (x - x_0)^2 \geq 0 ,
$$
so $x^2$ is convex on $\mathbb{R}$. For non-differentiable functions convexity is defined through chords, and we refer to the topic on differential calculus in Mathematical Analysis 1.

::grafico{f="x^2;2*x-1" punti="1,1,pieno" xmin=-3 xmax=3 ymin=-4 ymax=8 legenda="y = x^2;y = 2x - 1" titolo="The function $x^2$ is convex, because its graph lies above every tangent line, such as the tangent $y = 2x - 1$ at the point $(1, 1)$"}

:::

::::teorema{#convessita-derivata-seconda titolo="Sign of the second derivative and concavity"}
Let $f$ be twice differentiable on an interval $I$.

- If $f''(x) > 0$ for every $x \in I$, then $f$ is **convex** on $I$.
- If $f''(x) < 0$ for every $x \in I$, then $f$ is **concave** on $I$.

The second derivative is the derivative of the slope; if it is positive the slope increases, and the graph bends upward. With this test concavity is studied like monotonicity, with the sign table of $f''$. For example $e^{x}$ is convex on $\mathbb{R}$, because $\left( e^{x} \right)'' = e^{x} > 0$, and $\ln x$ is concave on $(0, +\infty)$, because $\left( \ln x \right)'' = -\dfrac{1}{x^2} < 0$.

:::dimostrazione
We prove the first case; the idea is to apply Lagrange's theorem to the difference between the function and the tangent. Fix $x_0 \in I$ and set
$$
g(x) = f(x) - f(x_0) - f'(x_0)\,(x - x_0),
\qquad
g'(x) = f'(x) - f'(x_0) .
$$
Since $f'' > 0$ on $I$, by the test on the sign of the derivative and monotonicity the function $f'$ is increasing on $I$. Let $x \in I$ with $x \neq x_0$. By Lagrange's theorem applied to $g$ between $x_0$ and $x$, with $g(x_0) = 0$, there exists $c$ between $x_0$ and $x$ such that
$$
g(x) = g'(c)\,(x - x_0) = \big( f'(c) - f'(x_0) \big)\,(x - x_0) .
$$
If $x > x_0$ one also has $c > x_0$, so $f'(c) > f'(x_0)$ and the two factors are positive; if $x < x_0$ one has $c < x_0$, so $f'(c) < f'(x_0)$ and the two factors are negative. In both cases $g(x) > 0$, that is, the graph lies above the tangent at $x_0$, and $f$ is convex.
:::
::::

:::definizione{#punto-di-flesso titolo="Inflection point"}
Let $f$ be differentiable on an open interval containing $x_0$. The point $x_0$ is an **inflection point** if there exists $\delta > 0$ such that $f$ is convex on $(x_0 - \delta, x_0]$ and concave on $[x_0, x_0 + \delta)$, or vice versa. At the inflection the graph changes concavity and crosses the tangent line. If moreover $f'(x_0) = 0$, the tangent is horizontal and the inflection is called **horizontal**, like that of $x^3$ at $0$; otherwise it is called **oblique**.
:::

:::teorema{#condizioni-flesso titolo="Second derivative and inflections"}
Let $f$ be twice differentiable on an open interval containing $x_0$.

- *Necessary* condition: if $x_0$ is an inflection point, then $f''(x_0) = 0$.
- *Sufficient* condition: if $f''$ changes sign at $x_0$, that is, it has one sign on the left and the opposite sign on the right, then $x_0$ is an inflection point.

The second condition follows from the test on the sign of the second derivative and concavity. For the first one uses the fact that a differentiable function is convex on an interval if and only if its derivative is increasing. At the inflection $f'$ is therefore increasing on one side and decreasing on the other, hence $f'$ has an extremum at $x_0$ and by Fermat's theorem $f''(x_0) = 0$. Inflections are therefore looked for among the zeros of $f''$, checking the change of sign. For $f(x) = x^3 - 3x^2 + 4$ one has $f''(x) = 6(x - 1)$, which is negative for $x < 1$ and positive for $x > 1$; hence $x = 1$ is an inflection, with $f(1) = 2$ and $f'(1) = -3$, and the inflection tangent is $y = -3x + 5$.

::grafico{f="x^3-3*x^2+4;-3*x+5" punti="1,2,pieno" xmin=-2 xmax=4 ymin=-4 ymax=8 legenda="y = x^3 - 3x^2 + 4;y = -3x + 5" titolo="At the inflection $(1, 2)$ of $f(x) = x^3 - 3x^2 + 4$ the graph changes from concave to convex and crosses the tangent $y = -3x + 5$"}

:::

:::attenzione
The vanishing of the second derivative is not enough for an inflection. The function $f(x) = x^4$ has $f''(0) = 0$, but $f''(x) = 12x^2 \geq 0$ does not change sign, and $x^4$ is convex on all of $\mathbb{R}$; at $x = 0$ it has a minimum, *not* an inflection.
:::

## Second derivative test

::::teorema{#criterio-derivata-seconda titolo="Second derivative test"}
Let $f$ be differentiable on an open interval containing $x_0$, with $f'(x_0) = 0$, and let it be twice differentiable at $x_0$.

- If $f''(x_0) > 0$, then $x_0$ is a **relative minimum** point.
- If $f''(x_0) < 0$, then $x_0$ is a **relative maximum** point.
- If $f''(x_0) = 0$, the test does not allow a conclusion.

The test classifies a stationary point with a single computation, without the sign table of $f'$. For $f(x) = x^3 - 3x$ one has $f''(x) = 6x$; since $f''(-1) = -6 < 0$, the point $x = -1$ is a relative maximum point, and since $f''(1) = 6 > 0$, the point $x = 1$ is a relative minimum point. The result coincides with that of the first derivative test. The test is the quickest way to check the second-order condition in optimization problems.

:::dimostrazione
The idea is to derive the sign of $f'$ near $x_0$ from the sign of $f''(x_0)$. Consider the case $f''(x_0) > 0$. Since $f'(x_0) = 0$, the definition of derivative applied to $f'$ gives
$$
f''(x_0) = \lim_{x \to x_0} \frac{f'(x) - f'(x_0)}{x - x_0} = \lim_{x \to x_0} \frac{f'(x)}{x - x_0} > 0 .
$$
By the sign-preservation theorem, the quotient $\dfrac{f'(x)}{x - x_0}$ is positive for $x$ near $x_0$, with $x \neq x_0$. The denominator is negative for $x < x_0$ and positive for $x > x_0$, so $f'(x) < 0$ to the left of $x_0$ and $f'(x) > 0$ to the right. By the first derivative test, $x_0$ is a relative minimum point. The case $f''(x_0) < 0$ is analogous.
:::
::::

:::attenzione
When $f'(x_0) = f''(x_0) = 0$ the point may be a maximum, a minimum or an inflection. The functions $x^4$, $-x^4$ and $x^3$ all have first derivative and second derivative equal to zero at $0$; the first has a minimum at $0$, the second a maximum, the third a horizontal inflection. In these cases one goes back to the first derivative test, studying the sign of $f'$ near $x_0$.
:::

## Curve sketching scheme

:::definizione{#funzioni-pari-dispari titolo="Even and odd functions"}
Let $A$ be a set symmetric with respect to $0$, that is, such that $-x \in A$ for every $x \in A$, and let $f : A \to \mathbb{R}$. The function is

- **even** if $f(-x) = f(x)$ for every $x \in A$, and its graph is symmetric with respect to the $y$-axis;
- **odd** if $f(-x) = -f(x)$ for every $x \in A$, and its graph is symmetric with respect to the origin.

Symmetry halves the work, because it suffices to study the function for $x \geq 0$ and then reflect the graph. For example $x^2$ and $\dfrac{1}{x^2 + 1}$ are even, $x^3$ and $\dfrac{x}{x^2 + 1}$ are odd, whereas $x^2 + x$ is neither even nor odd, because $f(-1) = 0$ and $f(1) = 2$.
:::

:::osservazione{#schema-studio-di-funzione titolo="Curve sketching scheme"}
To sketch the graph of a function one collects the information in this order.

1. **Domain**, with the conditions of the natural domain seen in the topic on real functions and economic models.
2. **Symmetries**: one checks whether $f$ is even or odd.
3. **Intersections with the axes and sign**: one solves $f(x) = 0$ and $f(x) > 0$, and computes $f(0)$ if $0$ belongs to the domain.
4. **Limits and asymptotes**: one computes the limits at the endpoints of the domain and at the excluded points, and looks for vertical, horizontal and oblique asymptotes, as in the topic on limits and continuity.
5. **First derivative**: from the sign of $f'$ one obtains the intervals where the function increases and decreases and the relative maximum and minimum points, whose values are computed.
6. **Second derivative**: from the sign of $f''$ one obtains the intervals of convexity and concavity and the inflection points.
7. **Graph**: one plots asymptotes, notable points and sign tables, and sketches the curve consistently with all the information.

If the graph is not consistent with one of the previous steps, for example it has a minimum where the table of $f'$ indicates a maximum, there is an error in the computations.
:::

:::esempio{titolo="Study of a rational function"}
We study $f(x) = \dfrac{x}{x^2 + 1}$.

1. The denominator is always positive, so the domain is $\mathbb{R}$.
2. One has $f(-x) = \dfrac{-x}{x^2 + 1} = -f(x)$, hence $f$ is odd.
3. The sign of $f$ is that of the numerator, so $f(x) > 0$ for $x > 0$, $f(x) < 0$ for $x < 0$, and the graph passes through the origin.
4. The denominator has a higher degree than the numerator, so $f(x) \to 0$ as $x \to \pm\infty$, and the line $y = 0$ is a horizontal asymptote. There are no vertical asymptotes, because the domain is all of $\mathbb{R}$.
5. By the quotient rule
$$
f'(x) = \frac{(x^2 + 1) - x \cdot 2x}{(x^2 + 1)^2} = \frac{1 - x^2}{(x^2 + 1)^2} ,
$$
which is positive for $-1 < x < 1$ and negative for $|x| > 1$. So $f$ decreases on $(-\infty, -1]$, increases on $[-1, 1]$ and decreases on $[1, +\infty)$; the point $x = 1$ is a maximum point with $f(1) = \dfrac{1}{2}$, the point $x = -1$ is a minimum point with $f(-1) = -\dfrac{1}{2}$. For $x \geq 0$ the function increases up to $1$ and then decreases, so $f(x) \leq f(1)$, whereas for $x < 0$ it is negative; hence the maximum is absolute and, since $f$ is odd, so is the minimum.
6. Differentiating again one obtains
$$
f''(x) = \frac{2x\,(x^2 - 3)}{(x^2 + 1)^3} ,
$$
which vanishes at $0$ and at $\pm\sqrt{3}$ and changes sign at each of these points. The function is concave on $(-\infty, -\sqrt{3}]$ and on $[0, \sqrt{3}]$, convex on $[-\sqrt{3}, 0]$ and on $[\sqrt{3}, +\infty)$, and has three inflections, at the points with abscissa $-\sqrt{3}$, $0$ and $\sqrt{3}$, with $f(\pm\sqrt{3}) = \pm\dfrac{\sqrt{3}}{4}$.

::grafico{f="x/(x^2+1)" punti="1,0.5,pieno;-1,-0.5,pieno;0,0,vuoto;1.732,0.433,vuoto;-1.732,-0.433,vuoto" asintoti="y=0" xmin=-6 xmax=6 ymin=-1 ymax=1 titolo="Graph of $f(x) = \dfrac{x}{x^2 + 1}$, with the maximum at $\left( 1, \dfrac{1}{2} \right)$, the minimum at $\left( -1, -\dfrac{1}{2} \right)$ and the inflections (hollow points) at $0$ and at $\pm\sqrt{3}$"}

:::

## Absolute maxima and minima

:::richiamo{titolo="Weierstrass's theorem"}
Let $f$ be continuous on the closed and bounded interval $[a, b]$. Then $f$ has a maximum and a minimum on $[a, b]$.
:::

::::teorema{#estremi-intervallo-chiuso titolo="Absolute maximum and minimum on a closed interval"}
Let $f$ be continuous on $[a, b]$ and differentiable on $(a, b)$, except possibly at finitely many points. Then the absolute maximum and minimum of $f$ on $[a, b]$ exist and are attained at points of the set formed by

- the endpoints $a$ and $b$;
- the stationary points of $f$ in $(a, b)$;
- the points of $(a, b)$ where $f$ is not differentiable.

To find them one computes $f$ at each of these points and compares the values; the largest is the maximum and the smallest is the minimum. There is no need to classify the stationary points. For $f(x) = x^3 - 3x$ on $[-2, 3]$ the stationary points are $\pm 1$, and
$$
f(-2) = -2, \qquad f(-1) = 2, \qquad f(1) = -2, \qquad f(3) = 18 ;
$$
so the absolute maximum is $18$, attained at $x = 3$, and the absolute minimum is $-2$, attained both at $x = -2$ and at $x = 1$.

::grafico{f="x^3-3*x" punti="-2,-2,pieno;-1,2,pieno;1,-2,pieno;3,18,pieno" segmenti="-2,0,-2,-2;3,0,3,18" xmin=-4 xmax=4 ymin=-6 ymax=21 titolo="On $[-2, 3]$ the function $x^3 - 3x$ has maximum $18$ at the right endpoint and minimum $-2$, attained at the left endpoint and at the stationary point $x = 1$"}

:::dimostrazione
Weierstrass's theorem applies, because $f$ is continuous on the closed and bounded interval $[a, b]$, so there exists an absolute minimum point $x_1$. If $x_1$ is interior and $f$ is differentiable at $x_1$, then $x_1$ is also a relative minimum point and by Fermat's theorem $f'(x_1) = 0$. Otherwise $x_1$ is an endpoint of the interval or an interior point of non-differentiability. In every case $x_1$ belongs to the indicated set. For the maximum the reasoning is the same.
:::
::::

:::teorema{#unico-punto-stazionario titolo="Functions with a single stationary point"}
Let $f$ be differentiable on an interval $I$, possibly open or unbounded, and let $x_0$ be an interior point of $I$ such that $f'(x) < 0$ for $x < x_0$ and $f'(x) > 0$ for $x > x_0$, with $x \in I$. Then $x_0$ is the **absolute minimum** point of $f$ on $I$; with the signs swapped it is the absolute maximum point.

The proof is that of the first derivative test, with Lagrange's theorem applied between $x_0$ and an arbitrary point of $I$. If $f'$ is continuous and vanishes only at $x_0$, by the intermediate zero theorem its sign is constant to the left and to the right of $x_0$, so it suffices to compute it at one point on each side. The result is needed when the interval is not closed and Weierstrass's theorem cannot be applied. For $f(x) = x + \dfrac{4}{x}$ on $(0, +\infty)$ one has
$$
f'(x) = 1 - \frac{4}{x^2} = \frac{(x - 2)(x + 2)}{x^2} ,
$$
negative for $0 < x < 2$ and positive for $x > 2$; so the absolute minimum is $f(2) = 4$. The function, on the other hand, has no maximum, because it tends to $+\infty$ at the endpoints of the interval.
:::

## Optimization problems

:::osservazione{#metodo-ottimizzazione titolo="Setting up an optimization problem"}
In an optimization problem one looks for the value of one magnitude that maximizes or minimizes another magnitude. One proceeds in steps.

1. One chooses the variable $x$ and states its meaning, with the unit of measurement.
2. One writes the magnitude to be optimized as a function of $x$ alone, using the constraints of the problem to eliminate the other variables.
3. One determines the interval of admissible values of $x$, from the meaning of the problem (positive lengths, nonnegative quantities, maximum capacities).
4. One finds the absolute maximum or minimum, with the closed-interval method or with the theorem on functions with a single stationary point.
5. One answers the question, computing all the required magnitudes.

A stationary point that does not belong to the admissible interval is not a solution of the problem, hence the interval is determined before looking for the extrema.
:::

:::esempio{titolo="Box of maximum volume"}
From a square sheet of side $12\,\mathrm{cm}$ equal squares of side $x$ are cut at the four corners, and the edges are folded up to form a box without a lid. The base is a square of side $12 - 2x$ and the height is $x$, so the volume is
$$
V(x) = x\,(12 - 2x)^2, \qquad 0 \leq x \leq 6 ,
$$
where the endpoints correspond to the degenerate boxes of zero volume. The derivative is
$$
\begin{aligned}
V'(x)
&= (12 - 2x)^2 - 4x\,(12 - 2x) \\[6pt]
&= (12 - 2x)(12 - 6x) ,
\end{aligned}
$$
which in $(0, 6)$ vanishes only at $x = 2$. With the closed-interval method one compares $V(0) = 0$, $V(6) = 0$ and $V(2) = 2 \cdot 8^2 = 128$. The maximum volume is therefore $128\,\mathrm{cm^3}$, with squares of side $2\,\mathrm{cm}$.

::grafico{f="x*(12-2*x)^2+0*sqrt(x*(6-x))" punti="2,128,pieno" segmenti="2,0,2,128" xmin=-1 xmax=7 ymin=-20 ymax=180 nomi="x,V" titolo="The volume $V(x) = x\,(12 - 2x)^2$ of the box, for $0 \leq x \leq 6$, is maximum for $x = 2$, where it equals $128$"}

:::

:::esempio{titolo="Enclosure of minimum perimeter"}
Among the rectangles of area $400\,\mathrm{m^2}$ we look for the one of minimum perimeter. If $x$ is the base, the height is $\dfrac{400}{x}$ and the perimeter is
$$
P(x) = 2x + \frac{800}{x}, \qquad x > 0,
\qquad
P'(x) = 2 - \frac{800}{x^2} = \frac{2\,(x - 20)(x + 20)}{x^2} .
$$
The interval $(0, +\infty)$ is open, so Weierstrass's theorem does not apply. The derivative is negative for $0 < x < 20$ and positive for $x > 20$, hence by the theorem on functions with a single stationary point the absolute minimum is at $x = 20$. The required rectangle is the **square** of side $20\,\mathrm{m}$, with perimeter $80\,\mathrm{m}$.
:::

## Economic applications

::::teorema{#profitto-massimo titolo="Conditions for maximum profit"}
Let $R(q)$ and $C(q)$ be the revenue and the cost, twice differentiable, and let $\pi(q) = R(q) - C(q)$ be the profit. Let $q_0 > 0$ be an interior point of the interval of admissible quantities.

- **First-order condition**: if $q_0$ is a maximum point of the profit, then $\pi'(q_0) = 0$, that is,
$$
R'(q_0) = C'(q_0) .
$$
- **Second-order condition**: if $R'(q_0) = C'(q_0)$ and $R''(q_0) < C''(q_0)$, then $q_0$ is a relative maximum point of the profit.

In words, at the optimal quantity marginal revenue equals marginal cost. If $R'(q) > C'(q)$, one more unit would bring more revenue than cost and it would pay to produce it; if $R'(q) < C'(q)$, it would pay to produce less. In perfect competition the price $p$ is constant, $R(q) = p\,q$ and $R'(q) = p$, so the first-order condition becomes $p = C'(q_0)$ and the second-order one $C''(q_0) > 0$, that is, marginal cost must be increasing.

:::dimostrazione
The first condition is Fermat's theorem applied to $\pi$, with $\pi'(q) = R'(q) - C'(q)$. For the second, $\pi'(q_0) = 0$ and $\pi''(q_0) = R''(q_0) - C''(q_0) < 0$, so by the second derivative test $q_0$ is a relative maximum point of $\pi$.
:::
::::

:::esempio{titolo="Profit in perfect competition"}
A firm sells at the price $p = 39$ euros and has cost $C(q) = q^3 - 12q^2 + 60q + 50$, with $q \geq 0$. The first-order condition $p = C'(q)$ is
$$
39 = 3q^2 - 24q + 60
\iff
3q^2 - 24q + 21 = 0
\iff
q^2 - 8q + 7 = 0 ,
$$
with solutions $q = 1$ and $q = 7$. For the second-order condition one computes $C''(q) = 6q - 24$. One has $C''(1) = -18 < 0$, so $q = 1$ is a *minimum* point of the profit, whereas $C''(7) = 18 > 0$, so $q = 7$ is a relative maximum point. The profit is
$$
\pi(q) = 39q - C(q) = -q^3 + 12q^2 - 21q - 50 ,
$$
and equals $\pi(7) = 48$ euros and $\pi(0) = -50$ euros. The sign of $\pi'(q) = -3(q - 1)(q - 7)$ shows that $\pi$ decreases on $[0, 1]$, increases on $[1, 7]$ and decreases on $[7, +\infty)$, so the maximum on $[0, +\infty)$ is the larger of $\pi(0)$ and $\pi(7)$. The maximum profit is therefore $48$ euros, with $7$ units.

::grafico{f="-x^3+12*x^2-21*x-50+0*sqrt(x*(10-x))" punti="1,-60,pieno;7,48,pieno;0,-50,pieno" segmenti="7,0,7,48;1,0,1,-60" xmin=-2 xmax=12 ymin=-100 ymax=100 nomi="q,π" titolo="The profit $\pi(q) = -q^3 + 12q^2 - 21q - 50$ has a minimum at $q = 1$ and a maximum at $q = 7$; at both points the price equals marginal cost"}

:::

:::teorema{#costo-medio-minimo titolo="Minimum average cost"}
Let $C$ be differentiable and let $\bar{C}(q) = \dfrac{C(q)}{q}$ be the average cost, for $q > 0$. If $q_0$ is a minimum point of the average cost, then
$$
C'(q_0) = \bar{C}(q_0) ,
$$
that is, at the point of minimum average cost marginal cost equals average cost. The result follows from Fermat's theorem and from the formula $\bar{C}'(q) = \dfrac{1}{q} \left( C'(q) - \bar{C}(q) \right)$, derived in the topic on derivatives, marginal functions and elasticity. For $C(q) = q^2 + 4q + 100$ one has
$$
\bar{C}(q) = q + 4 + \frac{100}{q},
\qquad
\bar{C}'(q) = 1 - \frac{100}{q^2} ,
$$
negative for $0 < q < 10$ and positive for $q > 10$. By the theorem on functions with a single stationary point the minimum average cost is $\bar{C}(10) = 24$ euros, and indeed $C'(10) = 2 \cdot 10 + 4 = 24$.

::grafico{f="x+4+100/x+0*sqrt(x);2*x+4+0*sqrt(x)" punti="10,24,pieno" segmenti="10,0,10,24" xmin=-4 xmax=36 ymin=-10 ymax=90 nomi="q,€" legenda="\bar{C}(q) = q + 4 + \dfrac{100}{q};C'(q) = 2q + 4" titolo="Marginal cost $C'(q) = 2q + 4$ meets average cost at its minimum point, $q = 10$, where both equal $24$ euros"}

:::

:::osservazione{#ricavo-massimo titolo="Maximum revenue"}
Revenue $R(q) = p(q)\,q$ is maximum where marginal revenue vanishes, $R'(q) = 0$, with the check of the sign or of the second derivative. If revenue is written as a function of price, by the theorem on elasticity and revenue one has $R'(p) = q(p)\,\big( 1 + \varepsilon(p) \big)$, so the price that maximizes revenue is the one at which demand has unit elasticity. For the inverse demand $p(q) = 60\,e^{-\frac{q}{20}}$ the revenue and its derivative are
$$
R(q) = 60\,q\,e^{-\frac{q}{20}},
\qquad
R'(q) = 60\,e^{-\frac{q}{20}} \left( 1 - \frac{q}{20} \right) .
$$
The derivative is positive for $0 \leq q < 20$ and negative for $q > 20$, so maximum revenue is obtained with $q = 20$ units, at the price $p(20) = \dfrac{60}{e} \approx 22.07$ euros, and equals $R(20) = \dfrac{1200}{e} \approx 441.46$ euros.

::grafico{f="60*x*exp(-x/20)+0*sqrt(x)" punti="20,441.46,pieno" segmenti="20,0,20,441.46" xmin=-10 xmax=90 ymin=-50 ymax=450 nomi="q,R" titolo="The revenue $R(q) = 60\,q\,e^{-\frac{q}{20}}$ increases up to $q = 20$ and then decreases; the maximum value is $\dfrac{1200}{e} \approx 441.46$ euros"}

:::
