---
titolo: Curve sketching
sommario: The complete scheme of the study, the criteria for maxima, minima and inflection points, convexity and the construction of the qualitative graph.
---

## The scheme of the study

:::definizione{#schema-dello-studio titolo="Scheme of curve sketching"}
**Studying a function** means deriving from its expression the properties that determine its graph. *Each* step rests on a result of the theory:

- domain: conditions for the expression to be defined (nonzero denominators, positive arguments of logarithms, nonnegative radicands of even-index roots), to be imposed as a system when there is more than one;
- symmetries and periodicity: $f(-x) = f(x)$ for an even function (graph symmetric with respect to the $y$-axis), $f(-x) = -f(x)$ for an odd one (graph symmetric with respect to the origin), $f(x + T) = f(x)$ for a periodic one, which is studied on a single period;
- sign and intersections with the axes: the inequality $f(x) > 0$ and the equation $f(x) = 0$; when the equation cannot be solved algebraically, the zeros are located with the intermediate zero theorem;
- limits at the endpoints of the domain and asymptotes: definitions of limit and of asymptote from the chapter on limits;
- continuity: theorem on the continuity of elementary functions and of operations between continuous functions;
- differentiability and first derivative: differentiation rules from the chapter on derivatives; at junction points, limit of the difference quotient or one-sided limits of $f'$;
- monotonicity and stationary points: monotonicity test;
- relative and absolute maxima and minima: Fermat's theorem, first derivative test, second derivative test, Weierstrass's theorem;
- concavity, convexity and inflection points: characterization of convexity through the second derivative;
- qualitative graph: synthesis of all the information in a consistent drawing.
:::

:::osservazione
The steps check one another. If the sign study gives $f(x) > 0$ on an interval and the computation of limits gives $f(x) \to -\infty$ at one of its endpoints, *at least one* of the two results is **wrong**; if the function is even, maxima, minima and inflection points appear in symmetric pairs. A **consistency check** between the steps detects computational errors before the graph is drawn.
:::

## Monotonicity and stationary points

:::teorema{#test-di-monotonia titolo="Monotonicity test"}
Let $f$ be continuous on an interval $I$ and differentiable at the interior points of $I$.

- If $f'(x) > 0$ at every interior point, $f$ is **strictly increasing** on $I$.
- If $f'(x) < 0$ at every interior point, $f$ is **strictly decreasing** on $I$.
- If $f'(x) = 0$ at every interior point, $f$ is **constant** on $I$.

The theorem follows from **Lagrange's mean value theorem** and the proof is in the chapter on derivatives. In curve sketching one solves the inequality $f'(x) > 0$ and records the result in the sign chart: on each interval where $f'$ has constant sign the monotonicity is determined.
:::

:::definizione{#punti-stazionari titolo="Stationary point"}
A point $x_0$ interior to the domain, with $f$ differentiable at $x_0$ and $f'(x_0) = 0$, is called **stationary**: the tangent line at $(x_0, f(x_0))$ is horizontal. Stationary points are the natural candidates for interior relative maxima and minima, and their nature is established with the first and second derivative tests.
:::

:::attenzione
The monotonicity test holds on an *interval*, *not* on a union of intervals. For $f(x) = \dfrac{1}{x}$ we have $f'(x) = -\dfrac{1}{x^2} < 0$ at every point of the domain, therefore $f$ is decreasing on $(-\infty, 0)$ and on $(0, +\infty)$ separately; on the union it **is not**, because $f(-1) = -1 < 1 = f(1)$.

::grafico{f="1/x" xmin=-4 xmax=4 ymin=-4 ymax=4 asintoti="x=0" punti="-1,-1,pieno;1,1,pieno" titolo="$y = \dfrac{1}{x}$ decreases on $(-\infty, 0)$ and on $(0, +\infty)$, but $f(-1) = -1 < 1 = f(1)$"}

:::

## Relative maxima and minima

:::definizione{#massimi-minimi-relativi titolo="Relative maximum and minimum"}
$f : A \to \mathbb{R}$. A point $x_0 \in A$ is a **relative maximum** point if there exists a neighborhood $U$ of $x_0$ such that $f(x) \leq f(x_0)$ for every $x \in U \cap A$; it is a **relative minimum** point if under the same conditions $f(x) \geq f(x_0)$. The value $f(x_0)$ is called a relative maximum (or minimum), the point $x_0$ a maximum (or minimum) point. The search for these points rests on Fermat's theorem, proved in the chapter on derivatives.
:::

:::richiamo{titolo="Fermat's theorem"}
If $x_0$ is interior to the domain, $f$ is differentiable at $x_0$ and $x_0$ is a relative maximum or minimum point, then $f'(x_0) = 0$.
:::

:::osservazione
**Fermat's theorem** reduces the search for relative maxima and minima to three families of candidates: the stationary points, the points where $f$ is not differentiable, the endpoints of the domain, where the theorem does not apply because the point is not interior. The theorem *cannot* be reversed: $f(x) = x^3$ has $f'(0) = 0$, but $0$ is neither a maximum nor a minimum point, because the function is strictly increasing.
:::

## Tests for the nature of stationary points

:::teorema{#criterio-derivata-prima titolo="First derivative test"}
Let $f$ be continuous at $x_0$ and differentiable in a neighborhood of $x_0$, except possibly at $x_0$ itself.

- If $f'(x) > 0$ to the left of $x_0$ and $f'(x) < 0$ to the right, $x_0$ is a **relative maximum** point.
- If $f'(x) < 0$ to the left and $f'(x) > 0$ to the right, $x_0$ is a **relative minimum** point.
- If $f'$ has the same sign on both sides, $x_0$ is neither a maximum nor a minimum point.

The test follows from the monotonicity test applied on the two sides of $x_0$. It does *not* require differentiability at $x_0$, therefore it also classifies corner points and cusps; in practice it coincides with reading the row of $f'$ in the sign chart.
:::

:::teorema{#criterio-derivata-seconda titolo="Second derivative test"}
Let $f$ be twice differentiable at $x_0$ with $f'(x_0) = 0$.

- If $f''(x_0) > 0$, $x_0$ is a **relative minimum** point.
- If $f''(x_0) < 0$, $x_0$ is a **relative maximum** point.
- If $f''(x_0) = 0$, the test does *not* decide: $x^4$, $-x^4$ and $x^3$ have first and second derivatives equal to zero at $0$, which is respectively a minimum point, a maximum point, and neither.

::grafico{f="x^4;-x^4;x^3" xmin=-1.6 xmax=1.6 ymin=-2 ymax=2 punti="0,0,pieno" titolo="$y = x^4$ (in color), $y = -x^4$ (dashed) and $y = x^3$ (in red) have first and second derivatives equal to zero at $0$, where they have a minimum, a maximum and an inflection point"}

The test is convenient when studying the sign of $f'$ is laborious and the value $f''(x_0)$ is quick to compute.
:::

:::teorema{#criterio-derivate-successive titolo="Higher-order derivative test"}
Let $f$ be $n$ times differentiable at $x_0$ with
$$
f'(x_0) = f''(x_0) = \dots = f^{(n-1)}(x_0) = 0, \qquad f^{(n)}(x_0) \neq 0 .
$$
From **Taylor's formula** (chapter on derivatives) it follows that
$$
f(x) - f(x_0) = \frac{f^{(n)}(x_0)}{n!}\,(x - x_0)^n + o\bigl((x - x_0)^n\bigr) ,
$$
therefore near $x_0$ the difference $f(x) - f(x_0)$ has the sign of the Taylor term.

- If $n$ is *even* and $f^{(n)}(x_0) > 0$, $x_0$ is a relative minimum point; if $f^{(n)}(x_0) < 0$, a relative maximum point.
- If $n$ is *odd*, $x_0$ is neither a maximum nor a minimum point; it is a **horizontal inflection point**.

For $f(x) = x^4$ at $0$ the first three derivatives are zero and $f^{(4)}(0) = 24 > 0$, with $n = 4$ even, therefore $0$ is a minimum point.
:::

:::esempio{titolo="The three tests on the same function"}
$f(x) = x^4 - 4x^3$, $f'(x) = 4x^3 - 12x^2 = 4x^2(x - 3)$, stationary points $0$ and $3$. From the second derivative $f''(x) = 12x^2 - 24x$ we get $f''(3) = 36 > 0$, therefore $3$ is a **relative minimum point**, with $f(3) = -27$. Since $f''(0) = 0$, at $0$ the second derivative test does not decide; the first derivative is negative both to the left and to the right of $0$, because the factor $4x^2$ is positive and $x - 3 < 0$, therefore $0$ is neither a maximum nor a minimum point. Alternatively $f'''(0) = -24 \neq 0$ with $n = 3$ odd, hence $0$ is a **horizontal inflection point**.

::grafico{f="x^4-4*x^3" xmin=-2 xmax=5 ymin=-30 ymax=15 titolo="$y = x^4 - 4x^3$: minimum at $x = 3$, horizontal inflection point at $x = 0$"}

:::

## Absolute maxima and minima

:::definizione{#massimi-minimi-assoluti titolo="Absolute maximum and minimum"}
$x_0 \in A$ is an **absolute maximum** point for $f : A \to \mathbb{R}$ if $f(x) \leq f(x_0)$ for every $x \in A$; it is an **absolute minimum** point if $f(x) \geq f(x_0)$ for every $x \in A$. If $f$ is continuous on a closed and bounded interval $[a, b]$, **Weierstrass's theorem** (chapter on limits) guarantees that the absolute maximum and minimum exist; by Fermat's theorem they are to be sought among the interior stationary points, the interior points of non-differentiability and the endpoints $a$ and $b$. The absolute maximum is the largest of the values of $f$ at these points, the absolute minimum the smallest.
:::

:::esempio{titolo="Maximum and minimum on a closed interval"}
$f(x) = x^3 - 3x$ on $[0, 2]$. The function is differentiable everywhere and $f'(x) = 3x^2 - 3$ vanishes at $x = 1$; the point $x = -1$ does not belong to the interval. The candidates are $0$, $1$ and $2$, with
$$
f(0) = 0, \qquad f(1) = -2, \qquad f(2) = 2 ,
$$
therefore the **absolute minimum** is $-2$, attained at $x = 1$, and the **absolute maximum** is $2$, attained at $x = 2$.

::grafico{f="x^3-3*x+0*sqrt(x*(2-x));x^3-3*x+0*sqrt(x*(x-2))" xmin=-2.3 xmax=2.6 ymin=-3 ymax=3.5 punti="0,0,pieno;1,-2,pieno,min;2,2,pieno,max" titolo="$y = x^3 - 3x$ on $[0, 2]$, in color: the absolute minimum $-2$ is attained at the stationary point $x = 1$, the absolute maximum $2$ at the endpoint $x = 2$; the stationary point $x = -1$ lies outside the interval"}

:::

:::osservazione
On a domain that is not closed or not bounded the existence of an absolute maximum and minimum is *not* guaranteed and is decided with limits. If $f(x) \to +\infty$ at an endpoint of the domain, the absolute maximum **does not exist**; if $f$ is bounded but the supremum is not an attained value, the maximum does not exist and the function has only a supremum.
:::

## Convex and concave functions

:::definizione{#convessita titolo="Convex function and concave function"}
$f$ is **convex** on an interval $I$ if for every $x_1, x_2 \in I$ and every $t \in [0, 1]$
$$
f\bigl((1 - t)\,x_1 + t\,x_2\bigr) \leq (1 - t)\,f(x_1) + t\,f(x_2) ,
$$
that is, if every segment joining two points of the graph does not go below the graph. $f$ is **concave** if the opposite inequality holds, that is, if $-f$ is convex. With strict inequalities, for $x_1 \neq x_2$ and $0 < t < 1$, one speaks of strict convexity and concavity. The definition does *not* require differentiability; for twice differentiable functions the practical check goes through the second derivative.

::grafico{f="x^2" xmin=-2 xmax=3 ymin=-0.5 ymax=5.5 segmenti="-1,1,2,4" punti="-1,1,pieno,A;2,4,pieno,B" titolo="$y = x^2$ is convex: the segment joining $A = (-1, 1)$ and $B = (2, 4)$ lies above the graph"}

:::

:::teorema{#convessita-derivata-seconda titolo="Convexity and second derivative"}
Let $f$ be twice differentiable on an interval $I$. $f$ is **convex** on $I$ *if and only if* $f''(x) \geq 0$ for every $x \in I$; if $f''(x) > 0$ at the interior points, $f$ is strictly convex. Similarly $f$ is **concave** on $I$ if and only if $f''(x) \leq 0$. Convexity is equivalent to $f'$ being increasing, therefore the result follows from the monotonicity test applied to $f'$; the proof is deferred to the chapter on derivatives. In curve sketching the concavity is obtained from the inequality $f''(x) > 0$, recorded in the sign chart.
:::

:::teorema{#convessita-e-tangente titolo="Position with respect to the tangent"}
Let $f$ be differentiable on an interval $I$. $f$ is convex on $I$ *if and only if* for every $x_0 \in I$ the graph lies **above the tangent line** at $x_0$, that is
$$
f(x) \geq f(x_0) + f'(x_0)\,(x - x_0) \qquad \text{for every } x \in I ;
$$
for a concave function the graph lies **below every tangent**. Inequalities follow from the theorem: $e^x$ is convex on $\mathbb{R}$ because its second derivative $e^x$ is positive, and the tangent at $0$ is the line $y = 1 + x$, therefore $e^x \geq 1 + x$ for every $x \in \mathbb{R}$.
:::

:::esempio
$f(x) = e^x$ and the tangent at $0$. The graph touches the line $y = 1 + x$ *only* at the point $(0, 1)$ and lies **above** it at every other point, as happens to every strictly convex function with each of its tangents.

::grafico{f="exp(x);1+x" xmin=-3 xmax=2.5 ymin=-2 ymax=8 punti="0,1,pieno" titolo="$y = e^x$ is convex: the graph lies above the tangent at $0$, $y = 1 + x$ (dashed)"}

:::

## Inflection points

:::definizione{#punti-di-flesso titolo="Inflection point"}
A point $x_0$ interior to the domain is an **inflection** point if $f$ is continuous at $x_0$, the graph has a tangent line at $(x_0, f(x_0))$, possibly vertical, and there exists a neighborhood of $x_0$ in which $f$ is convex on one side and concave on the other. At an inflection point the graph **crosses** its own tangent. The inflection point is called horizontal if $f'(x_0) = 0$, oblique if $f'(x_0) \neq 0$, vertical if the difference quotient tends to $+\infty$ or to $-\infty$.

::grafico{f="sin(x);x" xmin=-3.6 xmax=3.6 ymin=-2 ymax=2 punti="0,0,pieno" titolo="$y = \sin x$ has an oblique inflection point at the origin: the graph crosses the tangent $y = x$ (dashed), above it for $x < 0$ and below it for $x > 0$"}

:::

:::teorema{#flessi-derivata-seconda titolo="Necessary condition for an inflection point"}
If $x_0$ is an inflection point and $f$ is twice differentiable at $x_0$, then $f''(x_0) = 0$. The candidates are therefore the zeros of $f''$ and the points where $f''$ does not exist; a candidate is an inflection point when $f''$ **changes sign** across it, by the characterization of convexity through the second derivative.
:::

:::attenzione
The vanishing of the second derivative is a *necessary* but *not sufficient* condition. $f(x) = x^4$ has $f''(x) = 12x^2$, zero at $0$ but without a change of sign, therefore $0$ **is not an inflection point**; it is a minimum point.
:::

## Sign chart and qualitative graph

:::definizione{#tabella-dei-segni titolo="Sign chart of f' and f''"}
The **sign chart** collects on parallel rows the sign of $f'$ and that of $f''$, with one column for each interval bounded by the notable points: zeros of the derivatives, points of non-differentiability, points excluded from the domain. From the row of $f'$ one reads the monotonicity, by the monotonicity test; from the row of $f''$ the concavity, by the characterization of convexity. The final row combines the two pieces of information into the shape of the graph on each interval.
:::

:::esempio{titolo="Sign chart for y = x^3 - 3x"}
$f(x) = x^3 - 3x$, $f'(x) = 3x^2 - 3$, $f''(x) = 6x$. The first derivative vanishes at $\pm 1$ and is positive for $|x| > 1$; the second derivative vanishes at $0$ and is positive for $x > 0$.
$$
\begin{array}{c|ccccccc}
 & x < -1 & -1 & -1 < x < 0 & 0 & 0 < x < 1 & 1 & x > 1 \\ \hline
f' & + & 0 & - & - & - & 0 & + \\
f'' & - & - & - & 0 & + & + & + \\
f & \nearrow\ \cap & \text{max} & \searrow\ \cap & \text{inflection} & \searrow\ \cup & \text{min} & \nearrow\ \cup
\end{array}
$$
The chart gives the **relative maximum** at $-1$ with $f(-1) = 2$, the **relative minimum** at $1$ with $f(1) = -2$ and the inflection point at $0$, with tangent $y = -3x$ because $f'(0) = -3$.
:::

:::definizione{#grafico-qualitativo titolo="Qualitative graph"}
The **qualitative graph** is a drawing that correctly shows the properties obtained from the study, without claiming *metric precision*. It must show the domain with any excluded points, the zeros and the sign, the asymptotes with the direction of approach, the maximum, minimum and inflection points with their coordinates, the monotonicity and the concavity on each interval. A graph consistent with the sign chart concludes the study and makes it possible to answer further questions, such as the number of solutions of the equation $f(x) = k$ as $k \in \mathbb{R}$ varies.
:::

:::esempio{titolo="Graph of y = x^3 - 3x"}
The function is **odd**, vanishes at $0$ and at $\pm\sqrt{3}$, tends to $\pm\infty$ as $x \to \pm\infty$ **without asymptotes** because $\dfrac{f(x)}{x} = x^2 - 3 \to +\infty$, has relative maximum $2$ at $-1$, relative minimum $-2$ at $1$ and an inflection point at the origin.

::grafico{f="x^3-3*x" xmin=-3 xmax=3 ymin=-4.5 ymax=4.5 titolo="$y = x^3 - 3x$: maximum at $(-1, 2)$, minimum at $(1, -2)$, inflection point at $(0, 0)$"}

:::
