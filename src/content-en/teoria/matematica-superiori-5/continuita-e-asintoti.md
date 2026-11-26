---
titolo: Continuity and asymptotes
sommario: What it means for a function to be continuous at a point and on an interval, how to classify discontinuities, what the extreme value theorem, the intermediate value theorem and Bolzano's theorem say, how to approximate a zero by bisection, how to find vertical, horizontal and oblique asymptotes, and how to sketch the graph of a function.
---

## Continuous functions

:::definizione{#continuita-punto titolo="Continuity at a point"}
Let $f$ be a function defined in a neighborhood $I(x_0)$ of $x_0$, including the point $x_0$ itself. The function $f$ is **continuous** at $x_0$ if
$$
\lim_{x \to x_0} f(x) = f(x_0) .
$$
This equality requires three conditions to hold simultaneously:
$$
\begin{cases}
f(x_0) \text{ exists} \\[4pt]
\displaystyle\lim_{x \to x_0} f(x) \text{ exists and is finite} \\[4pt]
\displaystyle\lim_{x \to x_0} f(x) = f(x_0)
\end{cases}
$$
By the definition of a limit from the chapter on limits, continuity at $x_0$ means that for every $\varepsilon > 0$ there is a $\delta > 0$ such that $|f(x) - f(x_0)| < \varepsilon$ for every $x$ satisfying $|x - x_0| < \delta$. In other words, if $x$ is close to $x_0$, then $f(x)$ is close to $f(x_0)$. For example, $f(x) = x^2 + 1$ is continuous at $x_0 = 2$ because $f(2) = 5$ and $\displaystyle\lim_{x \to 2} \left( x^2 + 1 \right) = 5$.
:::

:::definizione{#continuita-destra-sinistra titolo="Right and left continuity"}
Let $f$ be defined at $x_0$ and to the right of $x_0$. The function is **continuous from the right** at $x_0$ if $\displaystyle\lim_{x \to x_0^+} f(x) = f(x_0)$. Similarly, the left-hand limit defines **continuity from the left**. A limit exists if and only if the right- and left-hand limits exist and are equal. Therefore, $f$ is continuous at $x_0$ if and *only if* it is continuous from both the right and the left.

This definition is useful for piecewise functions. For the function equal to $x^2$ when $x \leq 1$ and to $2x$ when $x > 1$, we have $f(1) = 1$. The left-hand limit at $1$ is $1$, so the function is continuous from the left. The right-hand limit is $2$, so the function is *not* continuous from the right and is therefore discontinuous at $1$.
:::

:::definizione{#continuita-intervallo titolo="Continuity on an interval"}
A function is **continuous on an interval** if it is continuous at every point of the interval. At an endpoint that belongs to the interval, only one-sided continuity is required. For example, $f$ is continuous on $[a, b]$ if it is continuous at every point of $(a, b)$, continuous from the right at $a$ and continuous from the left at $b$. A function that is continuous at every point of its domain is simply called **continuous**.

The graph of a function continuous on an interval can be drawn without lifting the pencil from the page. The function $\sqrt{x}$ is continuous on $[0, +\infty)$, and at $0$ it is continuous from the right because $\displaystyle\lim_{x \to 0^+} \sqrt{x} = 0 = \sqrt{0}$.
:::

:::teorema{#continuita-funzioni-elementari titolo="Continuity of elementary functions and their combinations"}
The elementary functions are continuous at every point of their domains. These include polynomials, rational functions, roots, powers, exponential and logarithmic functions, trigonometric functions and inverse trigonometric functions. Moreover, if $f$ and $g$ are continuous at $x_0$, then the following are also continuous at $x_0$:
$$
f + g ,
\qquad
f - g ,
\qquad
f \cdot g ,
\qquad
\frac{f}{g} \quad \text{if } g(x_0) \neq 0 .
$$
If $g$ is continuous at $x_0$ and $f$ is continuous at $g(x_0)$, then the composite function $f\big( g(x) \big)$ is continuous at $x_0$.

The theorem lets us find the limit of a continuous function by substitution, that is, by evaluating the function at the point. For example,
$$
\lim_{x \to 2} \frac{x^2 + 1}{x + 3} = \frac{4 + 1}{2 + 3} = 1 ,
\qquad
\lim_{x \to \pi} x \cos x = \pi \cos \pi = -\pi .
$$
For polynomials and rational functions, the theorem follows from the limit laws for sums, products and quotients. The proof for the other functions is covered at the university level.
:::

:::esempio{titolo="Limit of a composite function"}
We evaluate $\displaystyle\lim_{x \to 0} e^{\frac{\sin x}{x}}$. By the standard limit from the chapter on limits, the exponent $\dfrac{\sin x}{x}$ approaches $1$. The exponential function is continuous at $1$, so
$$
\lim_{x \to 0} e^{\frac{\sin x}{x}} = e^{1} = e .
$$
:::

## Points of discontinuity

:::definizione{#punto-discontinuita titolo="Point of discontinuity"}
Let $f$ be defined in a neighborhood of $x_0$, with the possible exception of $x_0$ itself. The point $x_0$ is a **point of discontinuity** of $f$ if $f$ is not continuous at $x_0$. This occurs in two cases:

- $f$ is defined at $x_0$, but the limit as $x \to x_0$ does not exist, is infinite or differs from $f(x_0)$.
- $f$ is undefined at $x_0$ but is defined at all nearby points other than $x_0$.

For example, the function $\dfrac{1}{x}$ is undefined at $0$ but is defined at every other point. Therefore, $0$ is a point of discontinuity. Discontinuities fall into three categories according to the right- and left-hand limits.
:::

:::definizione{#discontinuita-prima-specie titolo="Discontinuity of the first kind"}
The point $x_0$ is a **discontinuity of the first kind** if the right- and left-hand limits of $f$ at $x_0$ both exist, are finite and are unequal:
$$
\lim_{x \to x_0^-} f(x) = \ell_1 ,
\qquad
\lim_{x \to x_0^+} f(x) = \ell_2 ,
\qquad
\ell_1 \neq \ell_2 .
$$
The number $|\ell_2 - \ell_1|$ is the size of the **jump** of the function at $x_0$. On the graph, the curve breaks off and resumes at a different height. For the function equal to $x + 1$ when $x < 1$ and to $x - 2$ when $x \geq 1$, we have $\ell_1 = 2$ and $\ell_2 = -1$. Thus at $x_0 = 1$ there is a discontinuity of the first kind with a jump of size $|-1 - 2| = 3$.

::grafico{f="x+1-3*(sign(x-1)+1)/2+0*sqrt(abs(x-1)-0.01)" punti="1,2,vuoto;1,-1,pieno" segmenti="1,-1,1,2" xmin=-3 xmax=4 ymin=-3 ymax=4 legenda=0 titolo="The function equals $x + 1$ when $x < 1$ and $x - 2$ when $x \geq 1$. At $x = 1$ the left-hand limit is $2$, the right-hand limit is $-1$ and the jump has size $3$"}

:::

:::definizione{#discontinuita-seconda-specie titolo="Discontinuity of the second kind"}
The point $x_0$ is a **discontinuity of the second kind** if *at least one* of the two one-sided limits is infinite or does not exist. For $f(x) = e^{\frac{1}{x}}$ and $x_0 = 0$, we obtain the following:

- as $x \to 0^+$, the exponent $\dfrac{1}{x}$ approaches $+\infty$, so $f(x) \to +\infty$.
- as $x \to 0^-$, the exponent approaches $-\infty$, so $f(x) \to 0$.

The right-hand limit is infinite, so $0$ is a discontinuity of the second kind. The function $\dfrac{1}{x}$ also has a discontinuity of the second kind at $0$ because the two limits are $+\infty$ and $-\infty$. For the function $\sin \dfrac{1}{x}$, neither one-sided limit at $0$ exists because the values oscillate more and more rapidly between $-1$ and $1$.

::grafico{f="exp(1/x)" punti="0,0,vuoto" asintoti="x=0" xmin=-4 xmax=4 ymin=-1 ymax=7 legenda="y = e^{\frac{1}{x}}" titolo="The function $e^{\frac{1}{x}}$ approaches $0$ as $x \to 0^-$ and $+\infty$ as $x \to 0^+$, so at $0$ it has a discontinuity of the second kind"}

:::

:::definizione{#discontinuita-terza-specie titolo="Discontinuity of the third kind, or removable discontinuity"}
The point $x_0$ is a **discontinuity of the third kind**, or a **removable discontinuity**, if the limit of $f$ as $x \to x_0$ exists and is finite, but either $f$ is undefined at $x_0$ or $f(x_0)$ differs from the limit. In this case we can define a new function that equals $f$ when $x \neq x_0$ and equals the limit at $x_0$, making it continuous at $x_0$. We remove the discontinuity by **extending the function by continuity**.

For example, $f(x) = \dfrac{\sin x}{x}$ is undefined at $0$, and the standard limit gives $\displaystyle\lim_{x \to 0} \dfrac{\sin x}{x} = 1$. Therefore, $0$ is a removable discontinuity, and the function that equals $\dfrac{\sin x}{x}$ when $x \neq 0$ and $1$ when $x = 0$ is continuous on $\mathbb{R}$.

::grafico{f="sin(x)/x" punti="0,1,vuoto" xmin=-12 xmax=12 ymin=-1 ymax=2 legenda="y = \dfrac{\sin x}{x}" titolo="The graph of $\dfrac{\sin x}{x}$ approaches the point $(0, 1)$, which does not belong to the graph. The discontinuity at $0$ is removable"}

:::

:::osservazione{#ricerca-discontinuita titolo="Where to look for discontinuities"}
By the theorem on the continuity of elementary functions, a function given by a single elementary expression is continuous on its domain. Therefore, we look for discontinuities

- at points excluded from the domain where the function is defined nearby, such as the zeros of a denominator,
- at points where the formula for a piecewise function changes.

At each such point we calculate the right- and left-hand limits. For $f(x) = \dfrac{x^2 - 4}{x - 2}$, the only excluded point is $2$. For $x \neq 2$ we have $f(x) = \dfrac{(x - 2)(x + 2)}{x - 2} = x + 2$, which approaches $4$, so $2$ is a removable discontinuity.
:::

## Theorems on continuous functions

:::teorema{#teorema-weierstrass titolo="Extreme value theorem"}
Let $f$ be a function continuous on a closed, bounded interval $[a, b]$. Then $f$ attains both a maximum and a minimum value on $[a, b]$. That is, there are two points $x_1$ and $x_2$ in $[a, b]$ such that
$$
f(x_1) \leq f(x) \leq f(x_2) \qquad \text{for every } x \in [a, b] .
$$
The theorem guarantees that the maximum and minimum exist, but it does not tell us where they occur. We can locate them using derivatives, as in the chapter on maxima, minima, inflection points and curve sketching. For example, $f(x) = x^3 - 3x$ is continuous on $[-2, 2]$. Its maximum value is $2$, attained at $x = -1$ and $x = 2$, and its minimum value is $-2$, attained at $x = -2$ and $x = 1$. The proof of the theorem is covered at the university level.

::grafico{f="x^3-3*x+0*sqrt(4-x^2)" punti="-2,-2,pieno;-1,2,pieno;1,-2,pieno;2,2,pieno" segmenti="-2,2,2,2;-2,-2,2,-2" xmin=-3 xmax=3 ymin=-3 ymax=3 legenda="y = x^3 - 3x" titolo="On $[-2, 2]$ the function $x^3 - 3x$ has maximum value $2$, attained at $x = -1$ and $x = 2$, and minimum value $-2$, attained at $x = -2$ and $x = 1$"}

:::

:::attenzione
If any hypothesis of the extreme value theorem fails, the maximum or the minimum may fail to exist.

- The interval $(0, 1]$ is not closed. The function $\dfrac{1}{x}$ is continuous on $(0, 1]$, but it takes arbitrarily large values near $0$, so it has *no* maximum.
- The function equal to $x$ when $0 \leq x < 1$ and to $0$ when $x = 1$ is defined on the closed interval $[0, 1]$ but is discontinuous at $1$. It takes every value in $[0, 1)$ and never attains $1$, so it has *no* maximum.
:::

:::teorema{#teorema-esistenza-zeri titolo="Bolzano's theorem"}
Let $f$ be a function continuous on a closed, bounded interval $[a, b]$, with $f(a)$ and $f(b)$ of opposite signs, that is, $f(a) \cdot f(b) < 0$. Then there is at least one point $c$ in $(a, b)$ such that $f(c) = 0$.

On the graph, the points $\big( a, f(a) \big)$ and $\big( b, f(b) \big)$ lie on opposite sides of the $x$-axis. The curve joining them has no breaks, so it crosses the $x$-axis. The theorem can show that an equation $f(x) = 0$ has a solution even when we do not know how to solve it. For example, $f(x) = x^3 - x - 1$ is a polynomial, so it is continuous on $[1, 2]$, and $f(1) = -1 < 0$, $f(2) = 5 > 0$. Therefore, the equation $x^3 - x - 1 = 0$ has a solution between $1$ and $2$, approximately $1.32$. The proof of the theorem is covered at the university level.

::grafico{f="x^3-x-1" punti="1,-1,pieno;2,5,pieno;1.3247,0,vuoto" segmenti="1,0,1,-1;2,0,2,5" xmin=-1 xmax=3 ymin=-3 ymax=6 legenda="y = x^3 - x - 1" titolo="The function $x^3 - x - 1$ is negative at $1$ and positive at $2$, so it is zero at a point $c$ in $(1, 2)$, with $c \approx 1.32$"}

:::

:::attenzione
The theorem requires continuity throughout the interval. The function $\dfrac{1}{x}$, considered on $[-1, 1]$, takes the value $-1$ at $-1$ and $1$ at $1$, but it is never zero because it is undefined at $0$ and therefore is not continuous on $[-1, 1]$. Moreover, the sign condition is sufficient but *not* necessary. The function $f(x) = x^2$ on $[-1, 1]$ satisfies $f(-1) = f(1) = 1$ and is zero at $0$.
:::

:::osservazione{#unicita-zero titolo="Uniqueness of the zero"}
Bolzano's theorem guarantees *at least* one zero. If $f$ is also strictly increasing or strictly decreasing on $[a, b]$, then the zero is *unique* because a strictly monotonic function takes each value at most once. For example, $g(x) = e^{x} + x - 2$ is continuous on $[0, 1]$, with $g(0) = -1$ and $g(1) = e - 1 > 0$. Moreover, $g$ is strictly increasing because it is the sum of the strictly increasing functions $e^{x}$ and $x - 2$. Therefore, the equation $e^{x} = 2 - x$ has *exactly one* solution in $(0, 1)$.
:::

:::teorema{#teorema-valori-intermedi titolo="Intermediate value theorem"}
Let $f$ be a function continuous on a closed, bounded interval $[a, b]$, with minimum $m$ and maximum $M$. Then $f$ takes every value between $m$ and $M$. That is, for every $y_0$ satisfying $m \leq y_0 \leq M$, there is at least one point $c$ in $[a, b]$ such that $f(c) = y_0$.

The theorem follows by applying Bolzano's theorem to the function $f(x) - y_0$. For example, $f(x) = x^2 + x$ is increasing on $[0, 2]$, so its minimum is $f(0) = 0$ and its maximum is $f(2) = 6$. The value $3$ lies between $0$ and $6$, so there is a point $c$ in $(0, 2)$ such that $c^2 + c = 3$. Solving the equation gives $c = \dfrac{-1 + \sqrt{13}}{2} \approx 1.30$.

::grafico{f="x^2+x+0*sqrt(x*(2-x))" punti="0,0,pieno;2,6,pieno;1.3028,3,pieno" segmenti="0,3,1.3028,3;1.3028,0,1.3028,3" xmin=-1 xmax=3 ymin=-1 ymax=7 legenda="y = x^2 + x" titolo="On $[0, 2]$ the function $x^2 + x$ takes every value between $0$ and $6$. It attains $3$ at $c = \dfrac{-1 + \sqrt{13}}{2}$"}

:::

:::attenzione
Without continuity, a function may miss some intermediate values. Consider the function equal to $x + 1$ when $x < 1$ and to $x - 2$ when $x \geq 1$. On $[0, 2]$ it takes the values $1$ and $0$ at the endpoints, but it does *not* take the value $\dfrac{1}{2}$. Indeed, for $0 \leq x < 1$ its values lie between $1$ and $2$, whereas for $1 \leq x \leq 2$ they lie between $-1$ and $0$.
:::

## Bisection method

:::definizione{#metodo-bisezione titolo="Bisection method"}
The **bisection method** approximates a zero of a function $f$ continuous on $[a, b]$, with $f(a) \cdot f(b) < 0$. By Bolzano's theorem, $f$ has a zero in $(a, b)$. The steps are as follows:

1. Evaluate $f$ at the midpoint $m = \dfrac{a + b}{2}$.
2. If $f(m) = 0$, the zero is $m$.
3. Otherwise, choose the half, $[a, m]$ or $[m, b]$, at whose endpoints $f$ has opposite signs, and repeat the procedure on that half.

At each step the interval containing the zero is halved. After $n$ steps its length is
$$
\frac{b - a}{2^n} ,
$$
so any point in the interval approximates the zero with an error smaller than this length. To find the number of steps needed for the error to fall below a prescribed value, solve the inequality $\dfrac{b - a}{2^n} < \text{error}$.
:::

:::esempio{titolo="Approximating $\sqrt{2}$"}
The number $\sqrt{2}$ is the positive zero of $f(x) = x^2 - 2$. Since $f(1) = -1 < 0$ and $f(2) = 2 > 0$, the zero lies in $(1, 2)$. Each row of the table lists the interval, its midpoint and the sign of $f$ at the midpoint.

| interval | $m$ | $f(m)$ | new interval |
| --- | --- | --- | --- |
| $[1, 2]$ | $1.5$ | $0.25 > 0$ | $[1;\ 1.5]$ |
| $[1;\ 1.5]$ | $1.25$ | $-0.4375 < 0$ | $[1.25;\ 1.5]$ |
| $[1.25;\ 1.5]$ | $1.375$ | $-0.109\ldots < 0$ | $[1.375;\ 1.5]$ |
| $[1.375;\ 1.5]$ | $1.4375$ | $0.066\ldots > 0$ | $[1.375;\ 1.4375]$ |

After four steps the zero lies in an interval of length $\dfrac{1}{2^4} = \dfrac{1}{16} = 0.0625$, and indeed $\sqrt{2} = 1.414\ldots$ belongs to $[1.375;\ 1.4375]$. To keep the error below $0.001$, we need $2^n > 1000$, or equivalently $n \geq 10$, because $2^{10} = 1024$.

::grafico{f="x^2-2" punti="1,-1,pieno;2,2,pieno;1.5,0.25,pieno;1.25,-0.4375,pieno;1.375,-0.1094,pieno;1.4142,0,vuoto" segmenti="1.5,0,1.5,0.25;1.25,0,1.25,-0.4375;1.375,0,1.375,-0.1094" xmin=0 xmax=2 ymin=-2 ymax=2 legenda="y = x^2 - 2" titolo="The midpoints $1.5$, $1.25$ and $1.375$ narrow the interval containing the zero $\sqrt{2}$ of $x^2 - 2$"}

:::

## Vertical asymptotes

:::definizione{#asintoto-verticale titolo="Vertical asymptote"}
An **asymptote** of the graph of a function is a line that the graph approaches arbitrarily closely. The line $x = x_0$ is a **vertical asymptote** of the graph of $f$ if *at least one* of the two limits
$$
\lim_{x \to x_0^-} f(x) ,
\qquad
\lim_{x \to x_0^+} f(x)
$$
is $+\infty$ or $-\infty$. We look for vertical asymptotes at points excluded from the domain and at endpoints that do not belong to the domain. For $f(x) = \dfrac{3}{x - 2}$, the excluded point is $2$. As $x \to 2^+$, the denominator approaches $0$ through positive values, so $f(x) \to +\infty$. As $x \to 2^-$, the denominator is negative, so $f(x) \to -\infty$. Therefore, the line $x = 2$ is a vertical asymptote.

::grafico{f="3/(x-2)" asintoti="x=2" xmin=-4 xmax=8 ymin=-6 ymax=6 legenda="y = \dfrac{3}{x - 2}" titolo="The graph of $\dfrac{3}{x - 2}$ approaches the line $x = 2$, rising to the right of the line and falling to its left"}

:::

:::osservazione{#asintoto-verticale-un-lato titolo="One-sided vertical asymptotes"}
A vertical asymptote can occur on just one side. The function $\ln x$ is defined only for $x > 0$, and $\displaystyle\lim_{x \to 0^+} \ln x = -\infty$, so the $y$-axis is a vertical asymptote as we approach $0$ from the right. The function $e^{\frac{1}{x}}$ approaches $+\infty$ as $x \to 0^+$ and $0$ as $x \to 0^-$, so the line $x = 0$ is a vertical asymptote only from the right.
:::

:::attenzione
A point excluded from the domain does not always give a vertical asymptote. The function $\dfrac{x^2 - 1}{x - 1}$ is undefined at $1$, but for $x \neq 1$ it equals $x + 1$, which approaches $2$. The limit is finite, so the line $x = 1$ is *not* a vertical asymptote, and the point $1$ is a removable discontinuity.
:::

## Horizontal asymptotes

:::definizione{#asintoto-orizzontale titolo="Horizontal asymptote"}
Let $f$ be defined on an interval unbounded to the right. The line $y = \ell$, where $\ell$ is a real number, is a **horizontal asymptote to the right** of the graph of $f$ if
$$
\lim_{x \to +\infty} f(x) = \ell .
$$
Similarly, the limit as $x \to -\infty$ defines a **horizontal asymptote to the left**. When the two limits agree, we simply call the line a horizontal asymptote. For example,
$$
\lim_{x \to \pm\infty} \frac{2x^2 + x}{x^2 + 1} = 2 ,
$$
because dividing the numerator and denominator by $x^2$ gives $\dfrac{2 + \dfrac{1}{x}}{1 + \dfrac{1}{x^2}}$, which approaches $2$. Therefore, the line $y = 2$ is a horizontal asymptote. The function $e^{x}$ has horizontal asymptote $y = 0$ to the left because $\displaystyle\lim_{x \to -\infty} e^{x} = 0$, and has no horizontal asymptote to the right because $\displaystyle\lim_{x \to +\infty} e^{x} = +\infty$.
:::

:::osservazione{#grafico-incontra-asintoto titolo="A graph can intersect a horizontal asymptote"}
The graph of a function can intersect its horizontal asymptote, even more than once. To find the points of intersection, solve $f(x) = \ell$. For $f(x) = \dfrac{2x^2 + x}{x^2 + 1}$, the equation $\dfrac{2x^2 + x}{x^2 + 1} = 2$ becomes $2x^2 + x = 2x^2 + 2$, or $x = 2$. Thus the graph meets the asymptote $y = 2$ at $(2, 2)$. Moreover, $f(x) - 2 = \dfrac{x - 2}{x^2 + 1}$, so for $x > 2$ the graph lies above the asymptote, and for $x < 2$ it lies below it.

::grafico{f="(2*x^2+x)/(x^2+1)" punti="2,2,pieno" asintoti="y=2" xmin=-8 xmax=12 ymin=-1 ymax=3 legenda="y = \dfrac{2x^2 + x}{x^2 + 1}" titolo="The graph of $\dfrac{2x^2 + x}{x^2 + 1}$ meets its horizontal asymptote $y = 2$ at the point $(2, 2)$"}

:::

## Oblique asymptotes

:::definizione{#asintoto-obliquo titolo="Oblique asymptote"}
Let $f$ be defined on an interval unbounded to the right. The line $y = mx + q$, with $m \neq 0$, is an **oblique asymptote to the right** of the graph of $f$ if
$$
\lim_{x \to +\infty} \big( f(x) - (mx + q) \big) = 0 ,
$$
that is, if the vertical distance between the graph and the line approaches $0$. An oblique asymptote to the left is defined similarly, as $x \to -\infty$. An oblique asymptote can occur only if $f(x)$ approaches $+\infty$ or $-\infty$, because $mx + q$ approaches $\pm\infty$. For example, $f(x) = \dfrac{x^2 + 1}{x} = x + \dfrac{1}{x}$ has oblique asymptote $y = x$ because $f(x) - x = \dfrac{1}{x}$ approaches $0$ as $x \to \pm\infty$.

::grafico{f="(x^2+1)/x;x" asintoti="x=0" xmin=-6 xmax=6 ymin=-6 ymax=6 legenda="y = \dfrac{x^2 + 1}{x};y = x" titolo="The graph of $\dfrac{x^2 + 1}{x}$ has vertical asymptote $x = 0$ and oblique asymptote $y = x$"}

:::

:::teorema{#formule-asintoto-obliquo titolo="Finding an oblique asymptote"}
Let $f$ be defined on an interval unbounded to the right. The line $y = mx + q$ is an oblique asymptote to the right of the graph of $f$ if and only if, with $m \neq 0$, both of the following limits exist and are finite:
$$
m = \lim_{x \to +\infty} \frac{f(x)}{x} ,
\qquad
q = \lim_{x \to +\infty} \big( f(x) - mx \big) .
$$
The same holds as $x \to -\infty$. The formula for $m$ follows from the definition. If $f(x) - mx - q$ approaches $0$, then after division by $x$, the expression $\dfrac{f(x)}{x} - m - \dfrac{q}{x}$ also approaches $0$, and since $\dfrac{q}{x} \to 0$, we obtain $\dfrac{f(x)}{x} \to m$. The formula for $q$ follows from the definition because saying that $f(x) - mx - q$ approaches $0$ is equivalent to saying that $f(x) - mx$ approaches $q$.

These formulas are useful when the asymptote is not apparent by inspection. For $f(x) = \dfrac{2x^2 - 3x}{x + 1}$ we have
$$
m = \lim_{x \to \pm\infty} \frac{2x^2 - 3x}{x\,(x + 1)} = 2 ,
\qquad
q = \lim_{x \to \pm\infty} \left( \frac{2x^2 - 3x}{x + 1} - 2x \right) = \lim_{x \to \pm\infty} \frac{-5x}{x + 1} = -5 ,
$$
so the line $y = 2x - 5$ is an oblique asymptote to both the right and the left.
:::

:::osservazione{#asintoti-funzioni-razionali titolo="Asymptotes of rational functions"}
Let $f(x) = \dfrac{N(x)}{D(x)}$, where $N$ and $D$ are polynomials with no common zeros. The horizontal and oblique asymptotes depend on the degrees of the two polynomials:

- If the degree of $N$ is less than that of $D$, the horizontal asymptote is $y = 0$.
- If the degrees are equal, the horizontal asymptote is $y = \dfrac{a}{b}$, where $a$ and $b$ are the leading coefficients of $N$ and $D$.
- If the degree of $N$ is exactly $1$ greater than that of $D$, there is an oblique asymptote, which we find by polynomial division.
- If the degree of $N$ is at least $2$ greater than that of $D$, there is neither a horizontal nor an oblique asymptote.

The vertical asymptotes are the lines $x = x_0$ where $x_0$ is a zero of the denominator. When there is an oblique asymptote, dividing $N$ by $D$ gives a quotient $Q(x) = mx + q$ and a remainder $R(x)$, and we have $f(x) = mx + q + \dfrac{R(x)}{D(x)}$. The degree of the remainder is less than that of $D$, so the last fraction approaches $0$. For $\dfrac{2x^2 - 3x}{x + 1}$, division gives $2x^2 - 3x = (x + 1)(2x - 5) + 5$, yielding the asymptote $y = 2x - 5$ again.
:::

:::attenzione
A finite limit $m$ different from $0$ is not sufficient because an oblique asymptote also requires $q$ to be finite. For the function $f(x) = x + \ln x$ we have
$$
m = \lim_{x \to +\infty} \left( 1 + \frac{\ln x}{x} \right) = 1 ,
\qquad
\lim_{x \to +\infty} \big( f(x) - x \big) = \lim_{x \to +\infty} \ln x = +\infty ,
$$
so the graph has *no* oblique asymptote. Also, the asymptotes to the right and left can differ. For $\sqrt{x^2 + 1}$ we find $y = x$ to the right and $y = -x$ to the left because $\sqrt{x^2 + 1}$ is close to $|x|$ when $|x|$ is large.
:::

## Sketching the graph of a function

:::osservazione{#grafico-probabile titolo="Steps for sketching a graph"}
A **rough sketch** of a function's graph approximates its shape without using derivatives. Find the following in order:

1. the domain $D$,
2. any symmetries ($f$ is even if $f(-x) = f(x)$ and odd if $f(-x) = -f(x)$),
3. the intercepts,
4. the sign of $f$, which shows where the graph lies above or below the $x$-axis,
5. the limits at the endpoints of the domain and at excluded points, and hence the asymptotes and points of discontinuity.

Use this information to draw the graph, joining the pieces in a way that agrees with the sign and the limits. Derivatives locate maxima and minima and determine concavity, as in the chapter on maxima, minima, inflection points and curve sketching. Therefore, a rough sketch may be imprecise in these respects.
:::

:::esempio{titolo="Sketching the graph of a rational function"}
Consider $f(x) = \dfrac{x^2 - 4}{x - 1}$.

- **Domain.** The denominator is zero at $x = 1$, so $D = \mathbb{R} \setminus \{1\}$. The domain is not symmetric about the origin, so the function is neither even nor odd.
- **Intercepts.** The numerator is zero at $x = \pm 2$, so the graph meets the $x$-axis at $(-2, 0)$ and $(2, 0)$. Also, $f(0) = \dfrac{-4}{-1} = 4$, so the graph meets the $y$-axis at $(0, 4)$.
- **Sign.** The numerator is positive for $x < -2$ and for $x > 2$, and the denominator is positive for $x > 1$. By the sign rules, $f(x) > 0$ for $-2 < x < 1$ and for $x > 2$, whereas $f(x) < 0$ for $x < -2$ and for $1 < x < 2$.

**Limits and asymptotes.** As $x \to 1$, the numerator approaches $-3$ and the denominator approaches $0$. Therefore, $f(x) \to +\infty$ as $x \to 1^-$, where the denominator is negative, and $f(x) \to -\infty$ as $x \to 1^+$. The line $x = 1$ is a vertical asymptote. The numerator has degree $2$ and the denominator has degree $1$, and division gives $x^2 - 4 = (x - 1)(x + 1) - 3$, so
$$
f(x) = x + 1 - \frac{3}{x - 1} .
$$
The line $y = x + 1$ is an oblique asymptote to both the right and the left. For $x > 1$ the fraction $\dfrac{3}{x - 1}$ is positive, so the graph lies below the asymptote. For $x < 1$ it lies above.

::grafico{f="(x^2-4)/(x-1);x+1" punti="-2,0,pieno;2,0,pieno;0,4,pieno" asintoti="x=1" xmin=-6 xmax=8 ymin=-12 ymax=16 legenda="y = \dfrac{x^2 - 4}{x - 1};y = x + 1" titolo="Graph of $\dfrac{x^2 - 4}{x - 1}$ with vertical asymptote $x = 1$ and oblique asymptote $y = x + 1$"}

:::
