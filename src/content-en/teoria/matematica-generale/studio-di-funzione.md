---
titolo: Curve sketching and optimization
sommario: How to find and classify maxima and minima using the first and second derivatives, study concavity and inflection points, sketch a graph by following the full procedure, and solve optimization problems involving profit, average cost, and revenue.
---

## Maxima and minima

:::definizione{#massimi-minimi-assoluti titolo="Absolute maximum and minimum"}
Let $f : A \to \mathbb{R}$ and let $x_0 \in A$. The number $f(x_0)$ is the **absolute maximum** of $f$ if
$$
f(x) \leq f(x_0) \qquad \text{for every } x \in A ,
$$
so $x_0$ is a **point of absolute maximum**. Reversing the inequality to $f(x) \geq f(x_0)$ gives the **absolute minimum** and the corresponding point. If a maximum value exists, it is unique, though it can be attained at more than one point. For example, $f(x) = x^2$ on $[-1, 2]$ has a minimum of $0$ at $x = 0$ and a maximum of $4$ at $x = 2$. The function $\cos x$ on $\mathbb{R}$ has a maximum of $1$, attained at every point $x = 2k\pi$ with $k$ an integer.
:::

:::definizione{#massimi-minimi-relativi titolo="Local maximum and minimum"}
For a local maximum, the value at $x_0$ is compared only with the values at nearby points. The point $x_0 \in A$ is a **point of local maximum** (also called a relative maximum point) of $f$ if there exists $\delta > 0$ such that
$$
f(x) \leq f(x_0) \qquad \text{for every } x \in A \text{ with } |x - x_0| < \delta ,
$$
and reversing the inequality to $f(x) \geq f(x_0)$ defines a **point of local minimum**. Maxima and minima are collectively called **extrema**. Every point of absolute maximum is a point of local maximum, whereas the converse is false. The function $f(x) = x^3 - 3x$ has a local maximum at $x = -1$, with $f(-1) = 2$, because values near $-1$ are less than $2$. This is only a local maximum since, for example, $f(3) = 18$.

::grafico{f="x^3-3*x" punti="-1,2,pieno;1,-2,pieno;3,18,pieno" segmenti="-1,0,-1,2;1,0,1,-2" xmin=-4 xmax=4 ymin=-6 ymax=21 titolo="The function $f(x) = x^3 - 3x$ has a local maximum at $x = -1$ and a local minimum at $x = 1$; neither is absolute, because for example $f(3) = 18 > 2$"}

:::

:::richiamo{titolo="Fermat's theorem"}
Let $f$ be defined on an interval $I$ and attain a local maximum or minimum at an interior point $x_0$ of $I$. If $f$ is differentiable at $x_0$, then $f'(x_0) = 0$.
:::

:::osservazione{#punti-candidati titolo="Where to look for extrema"}
By Fermat's theorem, an interior point where $f$ is differentiable can be an extremum *only* if the derivative vanishes there. The candidates for extrema of a function defined on an interval are therefore

- the interior **stationary points**, where $f'(x_0) = 0$;
- the interior points where $f$ is not differentiable;
- the endpoints of the interval that belong to the domain.

All three cases actually occur. The function $|x|$ has a minimum at $0$, where it is not differentiable, and the function $f(x) = x$ on $[0, 1]$ has a maximum at $1$, where the derivative equals $1$ and not $0$. The points in the list are only candidates, and the tests that follow serve to decide whether they are extrema.
:::

## First derivative test

:::richiamo{titolo="Mean value theorem"}
Let $f$ be continuous on $[a, b]$ and differentiable on $(a, b)$. Then there exists $c \in (a, b)$ such that $f(b) - f(a) = f'(c)\,(b - a)$.
:::

::::teorema{#criterio-derivata-prima titolo="First derivative test"}
Let $f$ be continuous on an interval $(a, b)$ containing $x_0$ and differentiable on $(a, b)$, except possibly at the point $x_0$.

- If $f'(x) > 0$ on $(a, x_0)$ and $f'(x) < 0$ on $(x_0, b)$, then $x_0$ is a point of **local maximum**.
- If $f'(x) < 0$ on $(a, x_0)$ and $f'(x) > 0$ on $(x_0, b)$, then $x_0$ is a point of **local minimum**.
- If $f'$ has the same sign on $(a, x_0)$ and on $(x_0, b)$, then $x_0$ is *not* an extremum.

In other words, a function that increases to the left of $x_0$ and decreases to the right has a maximum at $x_0$. The test uses a sign chart for $f'$. For $f(x) = x^3 - 3x$, the derivative $f'(x) = 3(x + 1)(x - 1)$ is positive for $x < -1$, negative for $-1 < x < 1$, and positive for $x > 1$. Therefore $x = -1$ is a point of local maximum and $x = 1$ is a point of local minimum. The test also holds at points where $f$ is continuous but not differentiable.

:::dimostrazione
The idea is to compare $f(x_0)$ with $f(x)$ through the mean value theorem. Consider the first case. Let $x \in (a, x_0)$. The function is continuous on $[x, x_0]$ and differentiable on $(x, x_0)$, so by the mean value theorem there exists $c \in (x, x_0)$ with
$$
f(x_0) - f(x) = f'(c)\,(x_0 - x) > 0 ,
$$
because $f'(c) > 0$ and $x_0 - x > 0$. Now let $x \in (x_0, b)$. In the same way there exists $c \in (x_0, x)$ with $f(x) - f(x_0) = f'(c)\,(x - x_0) < 0$, because $f'(c) < 0$. In both cases $f(x) < f(x_0)$, so $x_0$ is a point of local maximum. The second case is analogous. In the third case, if for example $f' > 0$ on both sides, the same computations give $f(x) < f(x_0)$ on the left and $f(x) > f(x_0)$ on the right, hence $x_0$ is neither a maximum nor a minimum point.
:::
::::

:::attenzione
A stationary point may fail to be an extremum. The function $f(x) = x^3$ has $f'(0) = 0$, but $f'(x) = 3x^2$ is positive both to the left and to the right of $0$; by the first derivative test $x = 0$ is *not* an extremum, and indeed $f$ is increasing on all of $\mathbb{R}$.
:::

## Concavity and inflection points<span id="concavity-and-inflections"></span>

:::definizione{#convessita titolo="Convex function and concave function"}
The graph of $x^2$ lies above each of its tangent lines, whereas the graph of $-x^2$ lies below each of its tangent lines. This property distinguishes the two shapes. Let $f$ be differentiable on an interval $I$. The function is **convex** on $I$ (concave up) if for every $x_0 \in I$
$$
f(x) \geq f(x_0) + f'(x_0)\,(x - x_0) \qquad \text{for every } x \in I ,
$$
that is, if the graph lies above the tangent line at each of its points; it is **concave** on $I$ (it is concave down) if the inequality $\leq$ holds. For $f(x) = x^2$ the difference between the function and the tangent at $x_0$ is
$$
x^2 - \big( x_0^2 + 2x_0\,(x - x_0) \big) = x^2 - 2x_0 x + x_0^2 = (x - x_0)^2 \geq 0 ,
$$
so $x^2$ is convex on $\mathbb{R}$. For functions that are not differentiable, convexity is defined using chords, as discussed in the chapter on differential calculus in Mathematical Analysis 1.

::grafico{f="x^2;2*x-1" punti="1,1,pieno" xmin=-3 xmax=3 ymin=-4 ymax=8 legenda="y = x^2;y = 2x - 1" titolo="The function $x^2$ is convex, because its graph lies above every tangent line, such as the tangent $y = 2x - 1$ at the point $(1, 1)$"}

:::

::::teorema{#convessita-derivata-seconda titolo="Sign of the second derivative and concavity"}
Let $f$ be twice differentiable on an interval $I$.

- If $f''(x) > 0$ for every $x \in I$, then $f$ is **convex** on $I$.
- If $f''(x) < 0$ for every $x \in I$, then $f$ is **concave** on $I$.

The second derivative is the derivative of the slope. When it is positive, the slope increases and the graph bends upward. Just as monotonicity is studied with a sign chart, this test uses a sign chart for $f''$ to determine concavity. For example, $e^{x}$ is convex on $\mathbb{R}$ because $\left( e^{x} \right)'' = e^{x} > 0$, and $\ln x$ is concave on $(0, +\infty)$ because $\left( \ln x \right)'' = -\dfrac{1}{x^2} < 0$.

:::dimostrazione
We prove the first case. The idea is to apply the mean value theorem to the difference between the function and the tangent. Fix $x_0 \in I$ and set
$$
g(x) = f(x) - f(x_0) - f'(x_0)\,(x - x_0),
\qquad
g'(x) = f'(x) - f'(x_0) .
$$
Since $f'' > 0$ on $I$, the test for monotonicity using the sign of the derivative shows that $f'$ is increasing on $I$. Let $x \in I$ with $x \neq x_0$. Apply the mean value theorem to $g$ between $x_0$ and $x$. Since $g(x_0) = 0$, there exists $c$ between $x_0$ and $x$ such that
$$
g(x) = g'(c)\,(x - x_0) = \big( f'(c) - f'(x_0) \big)\,(x - x_0) .
$$
If $x > x_0$, then $c > x_0$, so $f'(c) > f'(x_0)$ and both factors are positive. If $x < x_0$, then $c < x_0$, so $f'(c) < f'(x_0)$ and both factors are negative. In either case $g(x) > 0$, so the graph lies above the tangent at $x_0$ and $f$ is convex.
:::
::::

:::definizione{#punto-di-flesso titolo="Inflection point"}
Let $f$ be differentiable on an open interval containing $x_0$. The point $x_0$ is an **inflection point** if there exists $\delta > 0$ such that $f$ is convex on $(x_0 - \delta, x_0]$ and concave on $[x_0, x_0 + \delta)$, or vice versa. At an inflection point, the graph changes concavity and crosses its tangent line. If $f'(x_0) = 0$, the tangent is horizontal and the inflection point is called **horizontal**, as for $x^3$ at $0$. Otherwise it is called **oblique**.
:::

:::teorema{#condizioni-flesso titolo="Second derivative and inflection points"}
Let $f$ be twice differentiable on an open interval containing $x_0$.

- *Necessary* condition: if $x_0$ is an inflection point, then $f''(x_0) = 0$.
- *Sufficient* condition: if $f''$ changes sign at $x_0$, that is, it has one sign on the left and the opposite sign on the right, then $x_0$ is an inflection point.

The second condition follows from the test for concavity using the sign of the second derivative. The first condition uses the fact that a differentiable function is convex on an interval if and only if its derivative is nondecreasing. At an inflection point, $f'$ is therefore nondecreasing on one side and nonincreasing on the other. Hence $f'$ has an extremum at $x_0$, so Fermat's theorem gives $f''(x_0) = 0$. The zeros of $f''$ are the candidates for inflection points, and a sign change identifies such a point. For $f(x) = x^3 - 3x^2 + 4$, the second derivative $f''(x) = 6(x - 1)$ is negative for $x < 1$ and positive for $x > 1$. Hence $x = 1$ is an inflection point, with $f(1) = 2$ and $f'(1) = -3$, and the tangent line at that point is $y = -3x + 5$.

::grafico{f="x^3-3*x^2+4;-3*x+5" punti="1,2,pieno" xmin=-2 xmax=4 ymin=-4 ymax=8 legenda="y = x^3 - 3x^2 + 4;y = -3x + 5" titolo="At the inflection point $(1, 2)$ of $f(x) = x^3 - 3x^2 + 4$ the graph changes from concave to convex and crosses the tangent $y = -3x + 5$"}

:::

:::attenzione
The vanishing of the second derivative is not enough for an inflection point. The function $f(x) = x^4$ has $f''(0) = 0$, but $f''(x) = 12x^2 \geq 0$ does not change sign, and $x^4$ is convex on all of $\mathbb{R}$; at $x = 0$ it has a minimum, *not* an inflection point.
:::

## Second derivative test

::::teorema{#criterio-derivata-seconda titolo="Second derivative test"}
Let $f$ be differentiable on an open interval containing $x_0$, with $f'(x_0) = 0$, and let it be twice differentiable at $x_0$.

- If $f''(x_0) > 0$, then $x_0$ is a point of **local minimum**.
- If $f''(x_0) < 0$, then $x_0$ is a point of **local maximum**.
- If $f''(x_0) = 0$, the test is inconclusive.

The test classifies a stationary point with a single calculation, without a sign chart for $f'$. For $f(x) = x^3 - 3x$ we have $f''(x) = 6x$. Since $f''(-1) = -6 < 0$, the point $x = -1$ is a point of local maximum. Since $f''(1) = 6 > 0$, the point $x = 1$ is a point of local minimum. The result agrees with the first derivative test. This is the quickest way to check the second-order condition in optimization problems.

:::dimostrazione
The idea is to derive the sign of $f'$ near $x_0$ from the sign of $f''(x_0)$. Consider the case $f''(x_0) > 0$. Since $f'(x_0) = 0$, the definition of derivative applied to $f'$ gives
$$
f''(x_0) = \lim_{x \to x_0} \frac{f'(x) - f'(x_0)}{x - x_0} = \lim_{x \to x_0} \frac{f'(x)}{x - x_0} > 0 .
$$
By the sign-preservation theorem, the quotient $\dfrac{f'(x)}{x - x_0}$ is positive for $x$ near $x_0$, with $x \neq x_0$. The denominator is negative for $x < x_0$ and positive for $x > x_0$, so $f'(x) < 0$ to the left of $x_0$ and $f'(x) > 0$ to the right. By the first derivative test, $x_0$ is a point of local minimum. The case $f''(x_0) < 0$ is analogous.
:::
::::

:::attenzione
When $f'(x_0) = f''(x_0) = 0$, the point may be a maximum, a minimum, or an inflection point. The first and second derivatives of $x^4$, $-x^4$, and $x^3$ are all zero at $0$. The first has a minimum at $0$, the second has a maximum there, and the third has a horizontal inflection point there. In these cases, return to the first derivative test and examine the sign of $f'$ near $x_0$.
:::

## Steps for sketching a curve<span id="curve-sketching-scheme"></span>

:::definizione{#funzioni-pari-dispari titolo="Even and odd functions"}
Let $A$ be a set symmetric with respect to $0$, that is, such that $-x \in A$ for every $x \in A$, and let $f : A \to \mathbb{R}$. The function is

- **even** if $f(-x) = f(x)$ for every $x \in A$, and its graph is symmetric with respect to the $y$-axis;
- **odd** if $f(-x) = -f(x)$ for every $x \in A$, and its graph is symmetric with respect to the origin.

Symmetry halves the work, because it suffices to study the function for $x \geq 0$ and then use symmetry to obtain the rest of the graph. For example $x^2$ and $\dfrac{1}{x^2 + 1}$ are even, $x^3$ and $\dfrac{x}{x^2 + 1}$ are odd, whereas $x^2 + x$ is neither even nor odd, because $f(-1) = 0$ and $f(1) = 2$.
:::

:::osservazione{#schema-studio-di-funzione titolo="Steps for sketching a curve"}
The following steps gather the information needed to sketch the graph of a function.

1. **Domain**. Apply the conditions for the natural domain from the chapter on real functions.
2. **Symmetries**. Check whether $f$ is even or odd.
3. **Intercepts and sign**. Solve $f(x) = 0$ and $f(x) > 0$, and calculate $f(0)$ if $0$ belongs to the domain.
4. **Limits and asymptotes**. Calculate the limits at the ends of the domain and at excluded points. Determine the vertical, horizontal, and oblique asymptotes as in the chapter on limits and continuity.
5. **First derivative**. Use the sign of $f'$ to find the intervals of increase and decrease and the points where local extrema occur. Calculate the values at those points.
6. **Second derivative**. Use the sign of $f''$ to identify the intervals of convexity and concavity and the inflection points.
7. **Graph**. Mark the asymptotes and key points, record the sign charts, and draw the curve so that it agrees with the information gathered.

If the graph conflicts with a previous step, such as showing a minimum where the sign chart for $f'$ indicates a maximum, there is an error in the calculations.
:::

:::esempio{titolo="Study of a rational function"}
We study $f(x) = \dfrac{x}{x^2 + 1}$.

1. The denominator is always positive, so the domain is $\mathbb{R}$.
2. We have $f(-x) = \dfrac{-x}{x^2 + 1} = -f(x)$, hence $f$ is odd.
3. The sign of $f$ is that of the numerator, so $f(x) > 0$ for $x > 0$, $f(x) < 0$ for $x < 0$, and the graph passes through the origin.
4. The denominator has a higher degree than the numerator, so $f(x) \to 0$ as $x \to \pm\infty$, and the line $y = 0$ is a horizontal asymptote. There are no vertical asymptotes, because the domain is all of $\mathbb{R}$.
5. By the quotient rule
$$
f'(x) = \frac{(x^2 + 1) - x \cdot 2x}{(x^2 + 1)^2} = \frac{1 - x^2}{(x^2 + 1)^2} ,
$$
which is positive for $-1 < x < 1$ and negative for $|x| > 1$. So $f$ decreases on $(-\infty, -1]$, increases on $[-1, 1]$ and decreases on $[1, +\infty)$; the point $x = 1$ is a maximum point with $f(1) = \dfrac{1}{2}$, the point $x = -1$ is a minimum point with $f(-1) = -\dfrac{1}{2}$. For $x \geq 0$ the function increases up to $1$ and then decreases, so $f(x) \leq f(1)$, whereas for $x < 0$ it is negative; hence the maximum is absolute and, since $f$ is odd, so is the minimum.
6. Differentiating again gives
$$
f''(x) = \frac{2x\,(x^2 - 3)}{(x^2 + 1)^3} ,
$$
which vanishes at $0$ and at $\pm\sqrt{3}$ and changes sign at each of these points. The function is concave on $(-\infty, -\sqrt{3}]$ and on $[0, \sqrt{3}]$, convex on $[-\sqrt{3}, 0]$ and on $[\sqrt{3}, +\infty)$, and has three inflection points, at the points with x-coordinates $-\sqrt{3}$, $0$ and $\sqrt{3}$, with $f(\pm\sqrt{3}) = \pm\dfrac{\sqrt{3}}{4}$.

::grafico{f="x/(x^2+1)" punti="1,0.5,pieno;-1,-0.5,pieno;0,0,vuoto;1.732,0.433,vuoto;-1.732,-0.433,vuoto" asintoti="y=0" xmin=-6 xmax=6 ymin=-1 ymax=1 titolo="Graph of $f(x) = \dfrac{x}{x^2 + 1}$, with the maximum at $\left( 1, \dfrac{1}{2} \right)$, the minimum at $\left( -1, -\dfrac{1}{2} \right)$ and the inflection points (hollow points) at $0$ and at $\pm\sqrt{3}$"}

:::

## Absolute maxima and minima

:::richiamo{titolo="Extreme value theorem"}
Let $f$ be continuous on the closed and bounded interval $[a, b]$. Then $f$ has a maximum and a minimum on $[a, b]$.
:::

::::teorema{#estremi-intervallo-chiuso titolo="Absolute maximum and minimum on a closed interval"}
Let $f$ be continuous on $[a, b]$ and differentiable on $(a, b)$ except possibly at finitely many points. Then $f$ attains its absolute maximum and minimum on $[a, b]$ at points belonging to the following set.

- the endpoints $a$ and $b$;
- the stationary points of $f$ in $(a, b)$;
- the points of $(a, b)$ where $f$ is not differentiable.

To find the extrema, evaluate $f$ at each candidate and compare the values. The largest value is the maximum and the smallest is the minimum. The stationary points need no further classification. For $f(x) = x^3 - 3x$ on $[-2, 3]$, the stationary points are $\pm 1$, and
$$
f(-2) = -2, \qquad f(-1) = 2, \qquad f(1) = -2, \qquad f(3) = 18 ;
$$
so the absolute maximum is $18$, attained at $x = 3$, and the absolute minimum is $-2$, attained both at $x = -2$ and at $x = 1$.

::grafico{f="x^3-3*x" punti="-2,-2,pieno;-1,2,pieno;1,-2,pieno;3,18,pieno" segmenti="-2,0,-2,-2;3,0,3,18" xmin=-4 xmax=4 ymin=-6 ymax=21 titolo="On $[-2, 3]$ the function $x^3 - 3x$ has maximum $18$ at the right endpoint and minimum $-2$, attained at the left endpoint and at the stationary point $x = 1$"}

:::dimostrazione
The extreme value theorem applies because $f$ is continuous on the closed and bounded interval $[a, b]$. Thus an absolute minimum is attained at some point $x_1$. If $x_1$ is interior and $f$ is differentiable at $x_1$, then $x_1$ is also a point of local minimum. Fermat's theorem then gives $f'(x_1) = 0$. Otherwise, $x_1$ is an endpoint of the interval or an interior point where the function is not differentiable. Thus $x_1$ belongs to the set listed above. The same reasoning applies to the maximum.
:::
::::

:::teorema{#unico-punto-stazionario titolo="Functions with a single stationary point"}
Let $f$ be differentiable on an interval $I$, possibly open or unbounded, and let $x_0$ be an interior point of $I$ such that $f'(x) < 0$ for $x < x_0$ and $f'(x) > 0$ for $x > x_0$, with $x \in I$. Then $x_0$ is the point of **absolute minimum** of $f$ on $I$. If the signs are reversed, it is the point of absolute maximum.

The proof follows the first derivative test, applying the mean value theorem between $x_0$ and an arbitrary point of $I$. If $f'$ is continuous and vanishes only at $x_0$, by Bolzano’s theorem its sign is constant to the left and to the right of $x_0$, so it suffices to compute it at one point on each side. The result is needed when the interval is not closed and the extreme value theorem cannot be applied. For $f(x) = x + \dfrac{4}{x}$ on $(0, +\infty)$ we have
$$
f'(x) = 1 - \frac{4}{x^2} = \frac{(x - 2)(x + 2)}{x^2} ,
$$
negative for $0 < x < 2$ and positive for $x > 2$; so the absolute minimum is $f(2) = 4$. The function, on the other hand, has no maximum, because it tends to $+\infty$ at the endpoints of the interval.
:::

## Optimization problems

:::osservazione{#metodo-ottimizzazione titolo="Setting up an optimization problem"}
An optimization problem asks for the value of one quantity that maximizes or minimizes another. The procedure has the following steps.

1. The variable $x$ is chosen and its meaning and units are specified.
2. The quantity to be optimized is expressed as a function of $x$ alone by using the constraints to eliminate the other variables.
3. The feasible interval for $x$ follows from the context, such as positive lengths, nonnegative quantities, and capacity limits.
4. The absolute maximum or minimum is found using the closed-interval method or the theorem on functions with a single stationary point.
5. The solution includes the values of all quantities requested.

A stationary point that does not belong to the admissible interval is not a solution of the problem, hence the interval is determined before looking for the extrema.
:::

:::esempio{titolo="Box with maximum volume"}
From a square sheet with side length $12\,\mathrm{cm}$, cut equal squares of side length $x$ at the four corners, then fold up the edges to form an open-top box. The square base has side length $12 - 2x$, and the height is $x$, so the volume is
$$
V(x) = x\,(12 - 2x)^2, \qquad 0 \leq x \leq 6 ,
$$
where the endpoints correspond to degenerate boxes with zero volume. The derivative is
$$
\begin{aligned}
V'(x)
&= (12 - 2x)^2 - 4x\,(12 - 2x) \\[6pt]
&= (12 - 2x)(12 - 6x) ,
\end{aligned}
$$
which, on $(0, 6)$, vanishes only at $x = 2$. The closed-interval method compares $V(0) = 0$, $V(6) = 0$, and $V(2) = 2 \cdot 8^2 = 128$. The maximum volume is therefore $128\,\mathrm{cm^3}$, obtained by cutting squares of side length $2\,\mathrm{cm}$.

::grafico{f="x*(12-2*x)^2+0*sqrt(x*(6-x))" punti="2,128,pieno" segmenti="2,0,2,128" xmin=-1 xmax=7 ymin=-20 ymax=180 nomi="x,V" titolo="The volume $V(x) = x\,(12 - 2x)^2$ of the box, for $0 \leq x \leq 6$, reaches its maximum at $x = 2$, where it equals $128$"}

:::

:::esempio{titolo="Enclosure with minimum perimeter"}
Among all rectangles of area $400\,\mathrm{m^2}$, find the one with the smallest perimeter. If $x$ is the base length, the height is $\dfrac{400}{x}$ and the perimeter is
$$
P(x) = 2x + \frac{800}{x}, \qquad x > 0,
\qquad
P'(x) = 2 - \frac{800}{x^2} = \frac{2\,(x - 20)(x + 20)}{x^2} .
$$
The interval $(0, +\infty)$ is open, so the extreme value theorem does not apply. The derivative is negative for $0 < x < 20$ and positive for $x > 20$, hence by the theorem on functions with a single stationary point the absolute minimum is at $x = 20$. The required rectangle is the **square** of side $20\,\mathrm{m}$, with perimeter $80\,\mathrm{m}$.
:::

## Economic applications

::::teorema{#profitto-massimo titolo="Conditions for maximum profit"}
Let $R(q)$ and $C(q)$ be the twice-differentiable revenue and cost functions, and let $\pi(q) = R(q) - C(q)$ be the profit. Let $q_0 > 0$ be an interior point of the feasible quantity interval.

- **First-order condition**: if $q_0$ is a point of maximum profit, then $\pi'(q_0) = 0$, that is,
$$
R'(q_0) = C'(q_0) .
$$
- **Second-order condition**: if $R'(q_0) = C'(q_0)$ and $R''(q_0) < C''(q_0)$, then $q_0$ is a point of local maximum of the profit.

At the optimal quantity, marginal revenue equals marginal cost. If $R'(q) > C'(q)$, an additional unit would bring in more revenue than it costs, so producing it would increase profit. If $R'(q) < C'(q)$, producing less would increase profit. Under perfect competition, price $p$ is constant, $R(q) = p\,q$, and $R'(q) = p$. The first-order condition is therefore $p = C'(q_0)$, and the second-order condition is $C''(q_0) > 0$, so marginal cost must be increasing.

:::dimostrazione
The first condition is Fermat's theorem applied to $\pi$, with $\pi'(q) = R'(q) - C'(q)$. For the second, $\pi'(q_0) = 0$ and $\pi''(q_0) = R''(q_0) - C''(q_0) < 0$, so by the second derivative test $q_0$ is a point of local maximum of $\pi$.
:::
::::

:::esempio{titolo="Profit in perfect competition"}
A firm sells at a price of $p = 39$ euros and has cost $C(q) = q^3 - 12q^2 + 60q + 50$, with $q \geq 0$. The first-order condition $p = C'(q)$ is
$$
39 = 3q^2 - 24q + 60
\iff
3q^2 - 24q + 21 = 0
\iff
q^2 - 8q + 7 = 0 ,
$$
with solutions $q = 1$ and $q = 7$. For the second-order condition one computes $C''(q) = 6q - 24$. We have $C''(1) = -18 < 0$, so $q = 1$ is a *minimum* point of the profit, whereas $C''(7) = 18 > 0$, so $q = 7$ is a point of local maximum. The profit is
$$
\pi(q) = 39q - C(q) = -q^3 + 12q^2 - 21q - 50 ,
$$
and satisfies $\pi(7) = 48$ euros and $\pi(0) = -50$ euros. The sign of $\pi'(q) = -3(q - 1)(q - 7)$ shows that $\pi$ decreases on $[0, 1]$, increases on $[1, 7]$, and decreases on $[7, +\infty)$. Therefore the maximum on $[0, +\infty)$ is the larger of $\pi(0)$ and $\pi(7)$. The maximum profit is $48$ euros, attained by producing $7$ units.

::grafico{f="-x^3+12*x^2-21*x-50+0*sqrt(x*(10-x))" punti="1,-60,pieno;7,48,pieno;0,-50,pieno" segmenti="7,0,7,48;1,0,1,-60" xmin=-2 xmax=12 ymin=-100 ymax=100 nomi="q,π" titolo="The profit $\pi(q) = -q^3 + 12q^2 - 21q - 50$ has a minimum at $q = 1$ and a maximum at $q = 7$; at both points the price equals marginal cost"}

:::

:::teorema{#costo-medio-minimo titolo="Minimum average cost"}
Let $C$ be differentiable and let $\bar{C}(q) = \dfrac{C(q)}{q}$ be average cost for $q > 0$. If average cost reaches a minimum at $q_0$, then
$$
C'(q_0) = \bar{C}(q_0) ,
$$
that is, at the point of minimum average cost marginal cost equals average cost. The result follows from Fermat's theorem and from the formula $\bar{C}'(q) = \dfrac{1}{q} \left( C'(q) - \bar{C}(q) \right)$, derived in the topic on derivatives, marginal functions and elasticity. For $C(q) = q^2 + 4q + 100$ we have
$$
\bar{C}(q) = q + 4 + \frac{100}{q},
\qquad
\bar{C}'(q) = 1 - \frac{100}{q^2} ,
$$
negative for $0 < q < 10$ and positive for $q > 10$. By the theorem on functions with a single stationary point the minimum average cost is $\bar{C}(10) = 24$ euros, and indeed $C'(10) = 2 \cdot 10 + 4 = 24$.

::grafico{f="x+4+100/x+0*sqrt(x);2*x+4+0*sqrt(x)" punti="10,24,pieno" segmenti="10,0,10,24" xmin=-4 xmax=36 ymin=-10 ymax=90 nomi="q,€" legenda="\bar{C}(q) = q + 4 + \dfrac{100}{q};C'(q) = 2q + 4" titolo="Marginal cost $C'(q) = 2q + 4$ meets average cost at its minimum point, $q = 10$, where both equal $24$ euros"}

:::

:::osservazione{#ricavo-massimo titolo="Maximum revenue"}
Revenue $R(q) = p(q)\,q$ is maximized where marginal revenue vanishes, $R'(q) = 0$, provided the sign test or the second derivative test confirms the maximum. When revenue is expressed as a function of price, the theorem on elasticity and revenue gives $R'(p) = q(p)\,\big( 1 + \varepsilon(p) \big)$. Thus the revenue-maximizing price is the price at which demand has unit elasticity. For the inverse demand function $p(q) = 60\,e^{-\frac{q}{20}}$, the revenue and its derivative are
$$
R(q) = 60\,q\,e^{-\frac{q}{20}},
\qquad
R'(q) = 60\,e^{-\frac{q}{20}} \left( 1 - \frac{q}{20} \right) .
$$
The derivative is positive for $0 \leq q < 20$ and negative for $q > 20$, so maximum revenue is obtained with $q = 20$ units, at the price $p(20) = \dfrac{60}{e} \approx 22{,}07$ euros, and equals $R(20) = \dfrac{1200}{e} \approx 441{,}46$ euros.

::grafico{f="60*x*exp(-x/20)+0*sqrt(x)" punti="20,441.46,pieno" segmenti="20,0,20,441.46" xmin=-10 xmax=90 ymin=-50 ymax=450 nomi="q,R" titolo="The revenue $R(q) = 60\,q\,e^{-\frac{q}{20}}$ increases up to $q = 20$ and then decreases; the maximum value is $\dfrac{1200}{e} \approx 441{,}46$ euros"}

:::
