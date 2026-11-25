---
titolo: Maxima, minima, inflection points and curve sketching
sommario: How to find the maxima and minima of a function using the first derivative, analyze concavity and inflection points using the second derivative, sketch a graph by carrying out a complete analysis of the function, and use derivatives to solve optimization problems, analyze equations with a parameter graphically, and find approximate solutions to equations.
---

## Maxima and minima

:::definizione{#massimi-minimi-assoluti titolo="Absolute maximum and minimum"}
Let $f$ be a function with domain $D$, and let $x_0$ be a point in $D$. The number $f(x_0)$ is the **absolute maximum** of $f$ if
$$
f(x) \leq f(x_0) \qquad \text{for every } x \in D ,
$$
and in that case $x_0$ is called a point of absolute maximum. The inequality $f(x) \geq f(x_0)$ defines the **absolute minimum** and a point of absolute minimum. The maximum, if it exists, is a single number, although the function may attain it at more than one point. For example, $f(x) = \sin x$ has an absolute maximum of $1$, attained at every point $x = \dfrac{\pi}{2} + 2k\pi$, and an absolute minimum of $-1$. The function $f(x) = x^2$ has an absolute minimum of $0$, attained at $x = 0$, and has no maximum because it takes arbitrarily large values.
:::

:::definizione{#massimi-minimi-relativi titolo="Local maximum and minimum"}
A local maximum compares the value at $x_0$ only with the values at points near $x_0$. A point $x_0$ in $D$ is a **point of local maximum** of $f$ if there is a neighborhood $I(x_0)$ such that
$$
f(x) \leq f(x_0) \qquad \text{for every } x \in I(x_0) \cap D .
$$
Similarly, the inequality $f(x) \geq f(x_0)$ defines a **point of local minimum**. Maxima and minima are collectively called **extrema**. Every absolute maximum is also a local maximum, while a local maximum need not be absolute. The function $f(x) = x^3 - 6x^2 + 9x$ has a local maximum at $x = 1$, with $f(1) = 4$, because near $1$ its values are less than $4$. This maximum is not absolute because, for example, $f(5) = 20$.

::grafico{f="x^3-6*x^2+9*x" punti="1,4,pieno;3,0,pieno;5,20,pieno" segmenti="1,0,1,4;5,0,5,20" xmin=-1 xmax=6 ymin=-3 ymax=21 titolo="The function $f(x) = x^3 - 6x^2 + 9x$ has a local maximum at $(1, 4)$ and a local minimum at $(3, 0)$. Neither is absolute, since, for example, $f(5) = 20 > 4$"}

:::

:::richiamo{titolo="Fermat's theorem"}
Let $f$ be defined on an interval $I$, and let $x_0$ be an interior point of $I$ where the function attains a local maximum or minimum. If $f$ is differentiable at $x_0$, then $f'(x_0) = 0$.
:::

:::osservazione{#punti-stazionari titolo="Stationary points and candidates for extrema"}
A point $x_0$ at which $f'(x_0) = 0$ is called a **stationary point** because the tangent to the graph is horizontal there. By Fermat's theorem, an interior point at which $f$ is differentiable can be an extremum *only if* the derivative is zero there. Therefore, for a function defined on an interval, the candidates for extrema are

- stationary points in the interior of the interval,
- interior points at which $f$ is not differentiable,
- endpoints of the interval that belong to the domain.

All three cases occur. For $f(x) = x^3 - 6x^2 + 9x$, the derivative is $f'(x) = 3x^2 - 12x + 9 = 3\,(x - 1)(x - 3)$, so the stationary points are $x = 1$ and $x = 3$. The function $|x|$ has a minimum at $0$, where it is not differentiable. The function $f(x) = x$ on the interval $[0, 2]$ attains its maximum at the endpoint $x = 2$, where its derivative equals $1$. The listed points are only candidates. The following tests determine whether they are extrema.
:::

## Finding extrema with the first derivative

:::richiamo{titolo="Monotonicity test"}
Let $f$ be continuous on an interval $I$ and differentiable at the interior points of $I$. If $f'(x) > 0$ at every interior point, then $f$ is strictly increasing on $I$. If $f'(x) < 0$ at every interior point, then $f$ is strictly decreasing on $I$.
:::

:::teorema{#criterio-derivata-prima titolo="First derivative test"}
Let $f$ be continuous on an interval $(a, b)$ containing $x_0$ and differentiable on $(a, b)$, except possibly at $x_0$.

- If $f'(x) > 0$ on $(a, x_0)$ and $f'(x) < 0$ on $(x_0, b)$, then $x_0$ is a point of **local maximum**.
- If $f'(x) < 0$ on $(a, x_0)$ and $f'(x) > 0$ on $(x_0, b)$, then $x_0$ is a point of **local minimum**.
- If $f'$ has the same sign on $(a, x_0)$ and on $(x_0, b)$, then $x_0$ is *not* an extremum.

In the first case, the monotonicity test shows that $f$ is increasing on $(a, x_0]$ and decreasing on $[x_0, b)$, so $f(x) < f(x_0)$ for every $x \neq x_0$ in the interval. The other cases are similar. To apply the test, use a sign chart for the derivative. For $f(x) = x^3 - 6x^2 + 9x$, the derivative is $f'(x) = 3\,(x - 1)(x - 3)$, and

| | $x < 1$ | $1 < x < 3$ | $x > 3$ |
| --- | --- | --- | --- |
| $f'(x)$ | $+$ | $-$ | $+$ |
| $f$ | increasing | decreasing | increasing |

Therefore, $x = 1$ is a point of local maximum, with $f(1) = 4$, and $x = 3$ is a point of local minimum, with $f(3) = 0$.
:::

:::esempio{titolo="A minimum where the function is not differentiable"}
The function $f(x) = \sqrt[3]{x^2}$ is continuous on $\mathbb{R}$ and for $x \neq 0$ has derivative
$$
f'(x) = \frac{2}{3\sqrt[3]{x}} .
$$
The derivative is negative for $x < 0$ and positive for $x > 0$. By the first derivative test, $x = 0$ is therefore a point of **local minimum**, with $f(0) = 0$, even though at $0$ the function is not differentiable. As shown in the chapter on derivatives, the graph has a cusp at the origin.
:::

:::attenzione
A stationary point need not be an extremum. The function $f(x) = x^3$ satisfies $f'(0) = 0$, but $f'(x) = 3x^2$ is positive on both sides of $0$. By the first derivative test, $x = 0$ is *not* an extremum. Indeed, $x^3$ is increasing on all of $\mathbb{R}$.
:::

## Absolute maxima and minima

:::richiamo{titolo="Extreme value theorem"}
Let $f$ be continuous on the closed, bounded interval $[a, b]$. Then $f$ attains both an absolute maximum and an absolute minimum on $[a, b]$.
:::

:::teorema{#estremi-intervallo-chiuso titolo="Absolute maximum and minimum on a closed interval"}
Let $f$ be continuous on $[a, b]$ and differentiable on $(a, b)$ except possibly at a few points. By the extreme value theorem, the absolute maximum and minimum of $f$ on $[a, b]$ exist and are attained among the points listed below.

- the endpoints $a$ and $b$,
- the stationary points of $f$ in $(a, b)$,
- the points in $(a, b)$ at which $f$ is not differentiable.

Indeed, an absolute extremum attained at an interior point where $f$ is differentiable is also a local extremum, and by Fermat's theorem that point is stationary. To find the maximum and minimum, therefore, evaluate $f$ at each of these points and compare the values. For $f(x) = x^3 - 6x^2 + 9x$ on $[-1, 4]$, the stationary points are $1$ and $3$, and
$$
f(-1) = -16 ,
\qquad
f(1) = 4 ,
\qquad
f(3) = 0 ,
\qquad
f(4) = 4 .
$$
The absolute maximum is therefore $4$, attained at $x = 1$ and $x = 4$, and the absolute minimum is $-16$, attained at $x = -1$.

::grafico{f="x^3-6*x^2+9*x+0*sqrt((x+1)*(4-x))" punti="-1,-16,pieno;1,4,pieno;3,0,pieno;4,4,pieno" segmenti="-1,0,-1,-16;4,0,4,4" xmin=-2 xmax=5 ymin=-18 ymax=6 titolo="On $[-1, 4]$, the function $x^3 - 6x^2 + 9x$ has a maximum of $4$, attained at $x = 1$ and at the endpoint $x = 4$, and a minimum of $-16$, attained at the endpoint $x = -1$"}

:::

:::teorema{#unico-punto-stazionario titolo="Absolute extrema on an arbitrary interval"}
Let $f$ be differentiable on an interval $I$, which may be open or unbounded, and let $x_0$ be an interior point of $I$ such that $f'(x) < 0$ for $x < x_0$ and $f'(x) > 0$ for $x > x_0$, with $x$ in $I$. Then $x_0$ is the point of **absolute minimum** of $f$ on $I$. If the signs are reversed, $x_0$ is the point of absolute maximum.

By the monotonicity test, $f$ decreases on the entire part of $I$ to the left of $x_0$ and increases on the entire part to its right, so no value is less than $f(x_0)$. This theorem applies when the interval is not closed and the extreme value theorem cannot be used. For $f(x) = x^2 + \dfrac{16}{x}$ on $(0, +\infty)$, the derivative is
$$
f'(x) = 2x - \frac{16}{x^2} = \frac{2\,(x^3 - 8)}{x^2} ,
$$
which is negative for $0 < x < 2$ and positive for $x > 2$. The absolute minimum is therefore $f(2) = 4 + 8 = 12$.
:::

## Concavity and inflection points

:::definizione{#concavita titolo="Concave up and concave down"}
The graph of $x^2$ lies above each of its tangent lines, while the graph of $-x^2$ lies below each of its tangent lines. Let $f$ be differentiable on an interval $I$. The graph of $f$ is **concave up** on $I$ if at every point of $I$ the graph lies on or above the tangent line at that point, that is, if for every $x_0$ in $I$
$$
f(x) \geq f(x_0) + f'(x_0)\,(x - x_0) \qquad \text{for every } x \in I .
$$
The graph is **concave down** if the inequality holds with $\leq$. A function that is concave up is also called **convex**, and one that is concave down is called **concave**. For $f(x) = x^2$, the difference between the function and its tangent line at $x_0$ is
$$
x^2 - \big( x_0^2 + 2x_0\,(x - x_0) \big) = x^2 - 2x_0 x + x_0^2 = (x - x_0)^2 \geq 0 ,
$$
so the graph of $x^2$ is concave up on all of $\mathbb{R}$.
:::

:::teorema{#concavita-derivata-seconda titolo="Sign of the second derivative and concavity"}
Let $f$ be twice differentiable on an interval $I$.

- If $f''(x) > 0$ for every $x$ in the interior of $I$, then the graph of $f$ is **concave up** on $I$.
- If $f''(x) < 0$ for every $x$ in the interior of $I$, then the graph of $f$ is **concave down** on $I$.

The second derivative is the derivative of $f'$, the slope of the tangent line. If the second derivative is positive, the slope of the tangent line increases as $x$ increases. This theorem makes it possible to analyze concavity in the same way as monotonicity, using a sign chart for $f''$. For example, $e^{x}$ is concave up on $\mathbb{R}$ because $\left( e^{x} \right)'' = e^{x} > 0$, and $\ln x$ is concave down on $(0, +\infty)$ because $(\ln x)'' = -\dfrac{1}{x^2} < 0$. The proof is covered at the university level.
:::

:::definizione{#punto-di-flesso titolo="Inflection point"}
Let $f$ be continuous in a neighborhood of $x_0$. The point $x_0$ is an **inflection point** if the graph is concave up on one side of $x_0$ and concave down on the other, and if the graph has a tangent line at $\big( x_0, f(x_0) \big)$. At the inflection point the graph crosses this line, called the **tangent at the inflection point**. An inflection point is called

- **horizontal** if the tangent is horizontal, that is, if $f'(x_0) = 0$, as for $x^3$ at the origin,
- **oblique** if $f'(x_0)$ is a number other than $0$,
- **vertical** if the tangent is vertical, as for $\sqrt[3]{x}$ at the origin in the chapter on derivatives.
:::

:::teorema{#condizioni-flesso titolo="The second derivative and inflection points"}
Let $f$ be twice differentiable in a neighborhood of $x_0$.

- For $x_0$ to be an inflection point, it is *necessary* that $f''(x_0) = 0$.
- If $f''(x_0) = 0$ and $f''$ has one sign to the left of $x_0$ and the opposite sign to the right, that is *sufficient* for $x_0$ to be an inflection point.

The second condition follows from the theorem on the sign of the second derivative. Therefore, look for inflection points among the zeros of $f''$ and check whether the sign changes at each one. For $f(x) = x^3 - 6x^2 + 9x$, the second derivative is $f''(x) = 6x - 12$, which is negative for $x < 2$ and positive for $x > 2$. Therefore, $x = 2$ is an **inflection point with an oblique tangent**, with $f(2) = 2$ and $f'(2) = -3$, and the tangent at the inflection point is
$$
y - 2 = -3\,(x - 2) ,
\qquad
\text{that is}
\qquad
y = -3x + 8 .
$$

::grafico{f="x^3-6*x^2+9*x;-3*x+8" punti="2,2,pieno" xmin=-1 xmax=5 ymin=-4 ymax=8 legenda="y = x^3 - 6x^2 + 9x;y = -3x + 8" titolo="At the inflection point $(2, 2)$, the graph of $x^3 - 6x^2 + 9x$ changes from concave down to concave up and crosses its tangent line $y = -3x + 8$"}

:::

:::attenzione
A zero of the second derivative need not be an inflection point. The function $f(x) = x^4$ satisfies $f''(0) = 0$, but $f''(x) = 12x^2$ is positive on both sides of $0$, so the graph is concave up on all of $\mathbb{R}$. At $x = 0$ the function has a minimum and *not* an inflection point.
:::

:::teorema{#criterio-derivata-seconda titolo="Second derivative test for extrema"}
Let $f$ be twice differentiable in a neighborhood of $x_0$, with $f''$ continuous, and suppose that $f'(x_0) = 0$.

- If $f''(x_0) > 0$, then $x_0$ is a point of **local minimum**.
- If $f''(x_0) < 0$, then $x_0$ is a point of **local maximum**.

If $f''(x_0) > 0$, then by the sign preservation theorem $f''$ is positive in a neighborhood of $x_0$. In that neighborhood the graph is concave up and lies above the horizontal tangent $y = f(x_0)$, so $x_0$ is a point of minimum. This test classifies a stationary point with a single calculation. For $f(x) = x^3 - 6x^2 + 9x$, the second derivative satisfies $f''(1) = -6 < 0$ and $f''(3) = 6 > 0$, so the function has a maximum at $x = 1$ and a minimum at $x = 3$, just as the sign chart for $f'$ shows. If $f''(x_0) = 0$, the test is inconclusive. The functions $x^4$, $-x^4$ and $x^3$ all have zero first and second derivatives at $0$, and at $0$ they have a minimum, a maximum and an inflection point with a horizontal tangent, respectively. In such cases, return to the sign of $f'$.
:::

## Steps in curve sketching

:::osservazione{#schema-studio-di-funzione titolo="Steps in curve sketching"}
To sketch the graph of a function, find its properties in the following order.

1. Find the **domain** using the conditions from the chapter on functions.
2. Check **symmetry and periodicity** by determining whether $f$ is even, odd, or periodic.
3. Find the **intercepts and sign** by solving $f(x) = 0$ and $f(x) > 0$ and evaluating $f(0)$ if $0$ belongs to the domain.
4. Find **limits and asymptotes** by evaluating the limits at the endpoints of the domain and looking for vertical, horizontal and oblique asymptotes, as in the chapter on continuity and asymptotes.
5. Use the **first derivative** to identify points where the function is not differentiable and use the sign of $f'$ to find the intervals of increase and decrease and the local maxima and minima.
6. Use the **second derivative** to determine concavity and locate inflection points from the sign of $f''$. At each inflection point, write the equation of the tangent line if requested.
7. To draw the **graph**, plot the asymptotes and the points found, and sketch the curve so that it agrees with all these properties.

These properties can be checked against one another. For example, if the sign chart for $f'$ indicates a maximum at a point where the sign of $f$ and the limits require a minimum, there is a calculation error.
:::

:::esempio{titolo="Analyzing a rational function"}
Consider $f(x) = \dfrac{x^2}{x - 1}$.

1. The denominator is zero for $x = 1$, so $D = (-\infty, 1) \cup (1, +\infty)$.
2. The domain contains $-1$ and excludes $1$, so it is not symmetric about $0$, and $f$ is neither even nor odd.
3. The numerator is positive for $x \neq 0$, so $f$ has the same sign as $x - 1$. The function is negative for $x < 1$, with $x \neq 0$, and positive for $x > 1$. The graph passes through the origin.
4. As $x \to 1^-$, the numerator tends to $1$ and the denominator to $0^-$, so $f(x) \to -\infty$. As $x \to 1^+$, we have $f(x) \to +\infty$. The line $x = 1$ is therefore a vertical asymptote. The degree of the numerator exceeds that of the denominator by one, so we look for an oblique asymptote using
$$
m = \lim_{x \to \pm\infty} \frac{f(x)}{x} = \lim_{x \to \pm\infty} \frac{x^2}{x^2 - x} = 1 ,
\qquad
q = \lim_{x \to \pm\infty} \left( \frac{x^2}{x - 1} - x \right) = \lim_{x \to \pm\infty} \frac{x}{x - 1} = 1 .
$$
The line $y = x + 1$ is the oblique asymptote both as $x \to +\infty$ and as $x \to -\infty$.
5. By the quotient rule,
$$
f'(x) = \frac{2x\,(x - 1) - x^2}{(x - 1)^2} = \frac{x\,(x - 2)}{(x - 1)^2} .
$$
The denominator is positive, so $f'$ is positive for $x < 0$ and for $x > 2$, and negative for $0 < x < 1$ and for $1 < x < 2$. By the first derivative test, $x = 0$ is a point of local maximum, with $f(0) = 0$, and $x = 2$ is a point of local minimum, with $f(2) = 4$.
6. Differentiating again gives $f''(x) = \dfrac{2}{(x - 1)^3}$, which is negative for $x < 1$ and positive for $x > 1$. The graph is concave down on $(-\infty, 1)$ and concave up on $(1, +\infty)$. The point $x = 1$ is outside the domain, so the function has no inflection points.

::grafico{f="x^2/(x-1);x+1" punti="0,0,pieno;2,4,pieno" asintoti="x=1" xmin=-4 xmax=6 ymin=-6 ymax=10 legenda="y = \dfrac{x^2}{x - 1};y = x + 1" titolo="Graph of $f(x) = \dfrac{x^2}{x - 1}$ with vertical asymptote $x = 1$, oblique asymptote $y = x + 1$, local maximum at $(0, 0)$ and local minimum at $(2, 4)$"}

The local maximum value, $0$, is less than the local minimum value, $4$. This is possible because the two points lie in different intervals of the domain, separated by the vertical asymptote.
:::

## Transcendental functions and functions involving absolute values

:::esempio{titolo="Analyzing an exponential function"}
Consider $f(x) = \dfrac{e^{x}}{x}$, defined for $x \neq 0$. The function is neither even nor odd because $f(-1) = -\dfrac{1}{e}$ and $f(1) = e$. The numerator is always positive, so $f$ has the same sign as $x$ and the graph does not intersect either axis.

As $x \to 0^-$, we have $f(x) \to -\infty$, and as $x \to 0^+$, we have $f(x) \to +\infty$, so $x = 0$ is a vertical asymptote. As $x \to -\infty$, the numerator tends to $0$ and the denominator to $-\infty$, so $f(x) \to 0$ and $y = 0$ is a horizontal asymptote on the left. As $x \to +\infty$, the exponential grows faster than $x$, so $f(x) \to +\infty$. Also, $\dfrac{f(x)}{x} = \dfrac{e^{x}}{x^2}$ tends to $+\infty$, so there is no oblique asymptote.

The first and second derivatives are
$$
f'(x) = \frac{e^{x}\,(x - 1)}{x^2} ,
\qquad
f''(x) = \frac{e^{x}\,\left( x^2 - 2x + 2 \right)}{x^3} .
$$
The first derivative is negative for $x < 1$, with $x \neq 0$, and positive for $x > 1$, so $x = 1$ is a point of local minimum, with $f(1) = e$. The trinomial $x^2 - 2x + 2$ has negative discriminant and is always positive, so $f''$ has the same sign as $x^3$. The graph is concave down for $x < 0$ and concave up for $x > 0$, and there are no inflection points.

::grafico{f="exp(x)/x" punti="1,2.718,pieno" asintoti="x=0;y=0" xmin=-4 xmax=4 ymin=-6 ymax=10 titolo="Graph of $f(x) = \dfrac{e^{x}}{x}$ with asymptotes $x = 0$ and $y = 0$ and a local minimum at $(1, e)$"}

:::

:::osservazione{#funzioni-valore-assoluto titolo="Functions involving absolute values"}
To analyze a function involving an absolute value, write it in piecewise form, removing the absolute value on each interval according to the sign of its argument. The graph of $y = |g(x)|$ coincides with the graph of $g$ where $g(x) \geq 0$ and is its reflection across the $x$-axis where $g(x) < 0$. At points where $g(x_0) = 0$ and $g'(x_0) \neq 0$, the right-hand and left-hand derivatives of $|g|$ are opposites, so the graph has a **corner**. For $g(x) = x^3 - 6x^2 + 9x = x\,(x - 3)^2$, we have $g(x) < 0$ only for $x < 0$, and $g'(0) = 9$. Therefore, $|g|$ has a corner at $x = 0$, with left-hand derivative $-9$ and right-hand derivative $9$, and has a local minimum there.
:::

:::osservazione{#funzioni-goniometriche titolo="Trigonometric functions"}
If $f$ is periodic with period $T$, its graph repeats on every interval of length $T$, so it suffices to analyze it over a single period, for example $[0, T]$. For $f(x) = \sin^2 x$, we have $\sin^2 (x + \pi) = (-\sin x)^2 = \sin^2 x$, so the period is $\pi$. The derivatives are
$$
f'(x) = 2 \sin x \cos x = \sin (2x) ,
\qquad
f''(x) = 2 \cos (2x) .
$$
On $[0, \pi]$, the first derivative is positive for $0 < x < \dfrac{\pi}{2}$ and negative for $\dfrac{\pi}{2} < x < \pi$, so $x = \dfrac{\pi}{2}$ is a point of maximum, with $f\left( \dfrac{\pi}{2} \right) = 1$, while at $0$ and $\pi$ the function attains its minimum value of $0$. The second derivative changes sign at $x = \dfrac{\pi}{4}$ and $x = \dfrac{3\pi}{4}$, giving inflection points with vertical coordinate $\dfrac{1}{2}$.
:::

## Optimization problems

:::osservazione{#problemi-massimo-minimo titolo="Setting up an optimization problem"}
An optimization problem asks for the value of one quantity that maximizes or minimizes another, such as an area, a volume, a time, or a power output. The following steps set up and solve the problem.

1. Choose a variable $x$ and state what it represents, including its unit of measurement.
2. Express the quantity to be maximized or minimized as a function of $x$ alone, using the given information to eliminate the other variables.
3. Find the interval of admissible values of $x$ from the geometry or physics of the problem.
4. Find the absolute maximum or minimum on that interval using the closed interval method or the theorem on absolute extrema on an arbitrary interval.
5. Answer the question by calculating all the quantities requested.

A stationary point outside the admissible interval is not a solution to the problem, so determine the interval before looking for extrema.
:::

:::esempio{titolo="Rectangle inscribed in a parabolic segment"}
We seek the rectangle of greatest area with its base on the $x$-axis and its two upper vertices on the parabola $y = 12 - x^2$. Let $x$ be the horizontal coordinate of the upper right vertex, with $x > 0$. The rectangle is symmetric about the $y$-axis, so its base has length $2x$ and its height is $12 - x^2$. The height is positive for $x < \sqrt{12}$, so the area is
$$
A(x) = 2x\,\left( 12 - x^2 \right) = 24x - 2x^3 ,
\qquad
0 \leq x \leq \sqrt{12} ,
$$
where the endpoints correspond to degenerate rectangles of area zero. The derivative $A'(x) = 24 - 6x^2$ vanishes in $(0, \sqrt{12})$ only at $x = 2$. The closed interval method compares $A(0) = 0$, $A(\sqrt{12}) = 0$ and $A(2) = 4 \cdot 8 = 32$. Therefore, the greatest area is $32$, with base $4$ and height $8$.

::grafico{f="12-x^2" poligoni="-2,0 -2,8 2,8 2,0" punti="2,8,pieno,P" xmin=-4 xmax=4 ymin=-2 ymax=14 titolo="The rectangle of greatest area inscribed under the parabola $y = 12 - x^2$ has vertex $P(2, 8)$, base $4$ and height $8$"}

:::

:::esempio{titolo="Maximum power delivered by a generator"}
A generator with electromotive force $12\,\mathrm{V}$ and internal resistance $r = 2\,\Omega$ supplies a resistor of resistance $R$. By Ohm's law for the complete circuit, the current is $i = \dfrac{12}{R + 2}$, so the power dissipated in the resistor is
$$
P(R) = R\,i^2 = \frac{144\,R}{(R + 2)^2} ,
\qquad
R > 0 .
$$
By the quotient rule,
$$
P'(R) = \frac{144\,(R + 2)^2 - 144\,R \cdot 2\,(R + 2)}{(R + 2)^4} = \frac{144\,(2 - R)}{(R + 2)^3} .
$$
The derivative is positive for $0 < R < 2$ and negative for $R > 2$, so by the theorem on absolute extrema on an arbitrary interval, the power is **greatest** for $R = 2\,\Omega$, that is, when the external resistance equals the internal resistance. The maximum power is $P(2) = \dfrac{288}{16} = 18\,\mathrm{W}$.
:::

## From the graph of a function to the graph of its derivative

:::osservazione{#grafico-derivata titolo="How the graphs of f and f' are related"}
The value $f'(x)$ is the slope of the tangent to the graph of $f$ at the point with horizontal coordinate $x$. The graph of $f$ therefore gives properties of the graph of $f'$, and conversely.

- Where $f$ is increasing, the graph of $f'$ lies above the $x$-axis. Where $f$ is decreasing, the graph of its derivative lies below the axis.
- At the local maxima and minima of $f$ where $f$ is differentiable, the graph of $f'$ crosses the $x$-axis.
- Where the graph of $f$ is concave up, $f'$ is increasing. Where the graph is concave down, $f'$ is decreasing.
- At the inflection points of $f$, the derivative $f'$ has a local maximum or a local minimum.

For $f(x) = x^3 - 6x^2 + 9x$, the graph of the derivative $f'(x) = 3x^2 - 12x + 9$ is a parabola. The parabola meets the $x$-axis at the horizontal coordinates $1$ and $3$ of the maximum and minimum of $f$, and lies below the axis between them, where $f$ decreases. Its vertex has horizontal coordinate $2$, the horizontal coordinate of the inflection point of $f$, and vertical coordinate $f'(2) = -3$, the slope of the tangent at the inflection point.

::grafico{f="x^3-6*x^2+9*x;3*x^2-12*x+9" punti="1,0,pieno;3,0,pieno;2,-3,pieno" segmenti="1,0,1,4;2,-3,2,2" xmin=-1 xmax=5 ymin=-6 ymax=10 legenda="y = f(x);y = f'(x)" titolo="The graph of $f'(x) = 3x^2 - 12x + 9$ meets the $x$-axis at the horizontal coordinates of the maximum and minimum of $f(x) = x^3 - 6x^2 + 9x$, and the horizontal coordinate of its vertex is $2$, that of the inflection point"}

:::

## Graphical analysis of equations with a parameter

:::osservazione{#discussione-grafica titolo="Analyzing an equation graphically"}
An equation involving a parameter $k$ that can be written in the form $f(x) = k$ can be analyzed using the graph of $f$. Its solutions are the horizontal coordinates of the intersections of the graph of $y = f(x)$ with the horizontal line $y = k$. The number of solutions changes when the line passes through a local maximum or minimum of $f$ or reaches the height of a horizontal asymptote. These values of $k$ can be found by analyzing the function.
:::

:::esempio{titolo="Number of solutions of a cubic equation"}
As $k$ varies, we determine the number of real solutions of the equation $x^3 - 6x^2 + 9x = k$. The function $f(x) = x^3 - 6x^2 + 9x$ has a local maximum of $4$ at $x = 1$ and a local minimum of $0$ at $x = 3$. It is increasing, decreasing, and increasing, respectively, on the three intervals $(-\infty, 1]$, $[1, 3]$ and $[3, +\infty)$. Also, $f(x) \to -\infty$ as $x \to -\infty$ and $f(x) \to +\infty$ as $x \to +\infty$. Therefore, the line $y = k$ meets the graph

- at one point if $k < 0$ or $k > 4$,
- at two points if $k = 0$ or $k = 4$, in which cases one solution is the horizontal coordinate of the minimum or maximum,
- at three points if $0 < k < 4$.

::grafico{f="x^3-6*x^2+9*x;2" segmenti="-1,4,5,4" punti="1,4,pieno;3,0,pieno" xmin=-1 xmax=5 ymin=-4 ymax=8 legenda="y = x^3 - 6x^2 + 9x;y = 2" titolo="For $0 < k < 4$, the line $y = k$, shown here as $y = 2$, meets the graph at three points. For $k = 0$ and for $k = 4$ there are two intersections"}

:::

## Finding approximate solutions to equations

:::richiamo{titolo="Bolzano's theorem"}
Let $f$ be continuous on the closed interval $[a, b]$, with $f(a)$ and $f(b)$ of opposite signs. Then there is at least one point $c$ in $(a, b)$ such that $f(c) = 0$.
:::

:::teorema{#unicita-zero titolo="Uniqueness of a zero"}
Let $f$ be continuous on $[a, b]$, with $f(a)$ and $f(b)$ of opposite signs. Suppose that $f'(x) > 0$ for every $x$ in $(a, b)$, or that $f'(x) < 0$ for every $x$ in $(a, b)$. Then the equation $f(x) = 0$ has **one and only one** solution on $(a, b)$.

Existence follows from Bolzano's theorem. By the monotonicity test, $f$ is strictly monotonic on $[a, b]$, so it takes each value at most once and its zero is unique. For $f(x) = x^3 + x - 1$, we have $f(0) = -1$, $f(1) = 1$ and $f'(x) = 3x^2 + 1 > 0$, so the equation $x^3 + x - 1 = 0$ has a unique solution $\alpha$ between $0$ and $1$. The theorem allows us to **isolate** the solutions, that is, to find intervals that each contain one solution, before approximating them.
:::

:::esempio{#metodo-bisezione titolo="Approximation by the bisection method"}
The bisection method is described in the chapter on continuity and asymptotes. For $f(x) = x^3 + x - 1$ on $[0, 1]$, the successive midpoints give $f(0.5) < 0$, $f(0.75) > 0$, $f(0.625) < 0$ and $f(0.6875) > 0$. After four steps, the solution therefore lies in the interval $[0.625;\ 0.6875]$, of width $\dfrac{1}{16}$. To four decimal places, the solution is $\alpha \approx 0.6823$.
:::

:::osservazione{#metodo-tangenti titolo="The tangent method"}
In the **tangent method**, also called Newton's method, the graph of $f$ is replaced by one of its tangent lines. Start with a value $x_0$ close to the solution and draw the tangent to the graph at $\big( x_0, f(x_0) \big)$, whose equation is $y = f(x_0) + f'(x_0)\,(x - x_0)$. If $f'(x_0) \neq 0$, the tangent meets the $x$-axis at the point with horizontal coordinate
$$
x_1 = x_0 - \frac{f(x_0)}{f'(x_0)} ,
$$
which is taken as the new approximation. Repeating this step gives $x_2$, $x_3$ and so on. If $f'$ and $f''$ never vanish on $[a, b]$, choose as $x_0$ the endpoint where $f$ and $f''$ have the same sign. The approximations then approach the solution. For $f(x) = x^3 + x - 1$ on the interval $[0.5;\ 1]$, which contains the solution, we have $f'(x) = 3x^2 + 1 > 0$, $f''(x) = 6x > 0$ and $f(1) = 1 > 0$, so the starting point is $x_0 = 1$.
$$
x_1 = 1 - \frac{f(1)}{f'(1)} = 1 - \frac{1}{4} = 0.75 ,
\qquad
x_2 = 0.75 - \frac{f(0.75)}{f'(0.75)} = 0.75 - \frac{0.171875}{2.6875} \approx 0.6860 .
$$
After just two steps the error is less than $0.004$, while bisection requires more steps to reach the same accuracy.

::grafico{f="x^3+x-1;4*x-3" punti="1,1,pieno;0.75,0,pieno;0.682,0,vuoto" segmenti="1,0,1,1" etichette="1.05,-0.35,x₀;0.7,-0.35,x₁" xmin=-1 xmax=2 ymin=-2 ymax=4 legenda="y = x^3 + x - 1;y = 4x - 3" titolo="The tangent to the graph of $x^3 + x - 1$ at the point with horizontal coordinate $x_0 = 1$ meets the $x$-axis at $x_1 = 0.75$, closer to the solution $\alpha \approx 0.68$ (open circle)"}

:::
