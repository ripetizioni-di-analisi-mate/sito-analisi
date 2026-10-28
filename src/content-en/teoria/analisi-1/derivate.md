---
titolo: Differential calculus and Taylor
sommario: The derivative as the limit of the difference quotient, the differentiation rules, the theorems of Fermat, Rolle and Lagrange with their consequences, L'Hôpital's rule and Taylor's formula.
---

## The derivative

:::definizione{#derivata titolo="Derivative and difference quotient"}
Let $f : A \to \mathbb{R}$ and let $x_0$ be an interior point of $A$. The **difference quotient** of $f$ at $x_0$ relative to the increment $h \neq 0$ is
$$
\frac{f(x_0 + h) - f(x_0)}{h} ,
$$
the slope of the line through the points $(x_0, f(x_0))$ and $(x_0 + h, f(x_0 + h))$ of the graph. $f$ is **differentiable** at $x_0$ if the limit
$$
f'(x_0) = \lim_{h \to 0} \frac{f(x_0 + h) - f(x_0)}{h}
= \lim_{x \to x_0} \frac{f(x) - f(x_0)}{x - x_0}
$$
exists and is *finite*; the two expressions coincide under the substitution $x = x_0 + h$. If $f$ is differentiable at every point of a set, the function $x \mapsto f'(x)$ is the **derivative function**. The derivative measures how quickly $f$ changes near $x_0$; its sign is used to study monotonicity, maxima and minima, as the theorems of this chapter show.

::grafico{f="x^2;3*x-2" xmin=-1 xmax=3 ymin=-1.5 ymax=6 punti="1,1,pieno;2,4,pieno" segmenti="1,1,2,1;2,1,2,4" etichette="1.4,0.55,h;2.08,2.4,f(x₀ + h) − f(x₀)" titolo="For $f(x) = x^2$, $x_0 = 1$ and $h = 1$ the difference quotient equals $\dfrac{4 - 1}{1} = 3$: it is the slope of the secant $y = 3x - 2$ (dashed)"}

:::

:::esempio{titolo="Derivative of x² using the definition"}
$$
\lim_{h \to 0} \frac{(x + h)^2 - x^2}{h}
= \lim_{h \to 0} \frac{2xh + h^2}{h}
= \lim_{h \to 0} (2x + h)
= 2x
$$
The limit exists and is finite for every $x \in \mathbb{R}$, therefore $f(x) = x^2$ is **differentiable** on $\mathbb{R}$ and $f'(x) = 2x$.
:::

:::definizione{#derivate-laterali titolo="One-sided derivatives"}
The **right derivative** and the **left derivative** of $f$ at $x_0$ are the one-sided limits of the difference quotient:
$$
f'_{+}(x_0) = \lim_{h \to 0^{+}} \frac{f(x_0 + h) - f(x_0)}{h} , \qquad
f'_{-}(x_0) = \lim_{h \to 0^{-}} \frac{f(x_0 + h) - f(x_0)}{h} .
$$
$f$ is differentiable at $x_0$ *if and only if* the two one-sided derivatives exist, are finite and **coincide**. They are used at the junction points of piecewise-defined functions and at the points where an absolute value changes expression.
:::

:::definizione{#retta-tangente titolo="Tangent line to the graph"}
If $f$ is differentiable at $x_0$, the **tangent line** to the graph of $f$ at the point $(x_0, f(x_0))$ is
$$
y = f(x_0) + f'(x_0)\,(x - x_0) .
$$
As $h \to 0$ the point $(x_0 + h, f(x_0 + h))$ approaches $(x_0, f(x_0))$ and the secant line through the two points tends to the tangent; since the slope of the secant is the difference quotient, the slope of the tangent is $f'(x_0)$. This is the **geometric meaning** of the derivative.

::grafico{f="x^2;3*x-2;2*x-1" xmin=-1 xmax=2.6 ymin=-2 ymax=5 punti="1,1,pieno;2,4,pieno;1.5,2.25,pieno" segmenti="-0.2,-2,2.6,5" titolo="The secants through $(1, 1)$ with $h = 1$ and with $h = \dfrac{1}{2}$ (dashed) have slopes $3$ and $\dfrac{5}{2}$; as $h \to 0$ they tend to the tangent $y = 2x - 1$ (red), with slope $f'(1) = 2$"}

::grafico{f="x*x;2*x-1" xmin=-2.5 xmax=2.5 ymin=-1 ymax=5 punti="1,1" titolo="$y = x^2$: at the point $(1, 1)$ the tangent line (dashed) is $y = 2x - 1$, since $f'(1) = 2$"}

:::

## Differentiability and continuity

::::teorema{#derivabile-implica-continua titolo="Differentiable implies continuous"}
If $f$ is differentiable at $x_0$, then $f$ is **continuous** at $x_0$. This is why the study of differentiability begins with continuity: at a point where $f$ is *not* continuous, $f$ **is not differentiable**.

:::dimostrazione
For $x \neq x_0$ the following identity holds:
$$
f(x) - f(x_0) = \frac{f(x) - f(x_0)}{x - x_0} \cdot (x - x_0) .
$$
As $x \to x_0$ the first factor tends to $f'(x_0)$ and the second to $0$, therefore by the **limit of a product** $f(x) - f(x_0) \to f'(x_0) \cdot 0 = 0$, that is, $f(x) \to f(x_0)$, which is the definition of continuity at $x_0$.
:::
::::

:::attenzione
The implication does *not* reverse: $f(x) = |x|$ is **continuous** at $0$ but **is not differentiable** at $0$. The difference quotient $\dfrac{|h|}{h}$ equals $1$ for $h > 0$ and $-1$ for $h < 0$, therefore the one-sided derivatives exist and are **different**.
:::

:::definizione{#punti-di-non-derivabilita titolo="Corner points, cusps, vertical-tangent inflection points"}
Let $f$ be continuous at $x_0$ but *not* differentiable at $x_0$. The point is classified by the one-sided limits of the difference quotient.

- **Corner point**: the one-sided derivatives exist, are different and *at least one* is finite. Example: $f(x) = |x|$ at $0$, with one-sided derivatives $-1$ and $1$.
- **Cusp**: the difference quotient tends to $+\infty$ on one side and to $-\infty$ on the other. Example: $f(x) = \sqrt{|x|}$ at $0$: the quotient equals $\dfrac{1}{\sqrt{h}}$ for $h > 0$ and $-\dfrac{1}{\sqrt{-h}}$ for $h < 0$.
- **Inflection point with vertical tangent**: the difference quotient tends to $+\infty$ or to $-\infty$ on both sides. Example: $f(x) = \sqrt[3]{x}$ at $0$, where the quotient $\dfrac{\sqrt[3]{h}}{h} = \dfrac{1}{\sqrt[3]{h^2}}$ tends to $+\infty$; the tangent is the vertical line $x = x_0$.

::grafico{f="abs(x)" xmin=-3 xmax=3 ymin=-0.8 ymax=3 punti="0,0" titolo="$y = |x|$: corner point at $0$"}

::grafico{f="sqrt(abs(x))" xmin=-4 xmax=4 ymin=-0.6 ymax=2.4 punti="0,0" titolo="$y = \sqrt{|x|}$: cusp at $0$"}

::grafico{f="sign(x)*abs(x)^(1/3)" xmin=-3 xmax=3 ymin=-2 ymax=2 punti="0,0" titolo="$y = \sqrt[3]{x}$: inflection point with vertical tangent at $0$"}

:::

## Differentiation rules

::::teorema{#regole-di-derivazione titolo="Derivative of sum, product and quotient"}
If $f$ and $g$ are differentiable at $x$, then, with $c \in \mathbb{R}$:
$$
\begin{gathered}
(f + g)'(x) = f'(x) + g'(x), \qquad (c\,f)'(x) = c\, f'(x), \\[6pt]
(f\,g)'(x) = f'(x)\, g(x) + f(x)\, g'(x), \\[6pt]
\left( \frac{f}{g} \right)'(x) = \frac{f'(x)\, g(x) - f(x)\, g'(x)}{g(x)^2} \quad \text{if } g(x) \neq 0 .
\end{gathered}
$$
With these rules and the table of elementary derivatives, every function built with the four operations can be differentiated *without* going back to the definition.

:::dimostrazione
For the product, add and subtract $f(x)\,g(x+h)$ in the numerator of the difference quotient:
$$
\frac{f(x+h)\,g(x+h) - f(x)\,g(x)}{h}
= \frac{f(x+h) - f(x)}{h}\; g(x+h) + f(x)\; \frac{g(x+h) - g(x)}{h} .
$$
As $h \to 0$ the difference quotient of $f$ tends to $f'(x)$ and that of $g$ to $g'(x)$; moreover $g$ is differentiable at $x$, hence **continuous** at $x$, therefore $g(x+h) \to g(x)$. By the **algebra of limits** the expression tends to $f'(x)\,g(x) + f(x)\,g'(x)$. The sum rule is proved by splitting the difference quotient into the two quotients of $f$ and of $g$; the quotient rule is obtained by applying the **product rule** to $f \cdot \dfrac{1}{g}$, where the derivative of $\dfrac{1}{g}$ is computed with the chain rule.
:::
::::

:::richiamo{titolo="Differentiable implies continuous"}
If $f$ is differentiable at $x_0$, then $f$ is continuous at $x_0$.
:::

:::teorema{#derivata-della-composta titolo="Derivative of a composite function"}
If $g$ is differentiable at $x$ and $f$ is differentiable at $g(x)$, then $f \circ g$ is differentiable at $x$ and
$$
(f \circ g)'(x) = f'(g(x)) \cdot g'(x) .
$$
One differentiates the **outer function** leaving the argument unchanged, then multiplies by the **derivative of the argument**: the derivative of $e^{x^2}$ is $e^{x^2} \cdot 2x$. With repeated compositions the rule is applied **in a chain**, from the outside in.
:::

:::teorema{#derivata-dell-inversa titolo="Derivative of the inverse function"}
Let $f$ be invertible and differentiable at $x_0$ with $f'(x_0) \neq 0$, with inverse $f^{-1}$ continuous at $y_0 = f(x_0)$. Then $f^{-1}$ is **differentiable** at $y_0$ and
$$
(f^{-1})'(y_0) = \frac{1}{f'(x_0)} .
$$
This theorem is used to differentiate the inverses of the elementary functions. For $f(x) = \tan x$ and $y = \tan x$ one obtains
$$
(\arctan)'(y) = \frac{1}{1 + \tan^2 x} = \frac{1}{1 + y^2} .
$$
:::

:::teorema{#derivate-elementari titolo="Derivatives of the elementary functions"}
$$
\begin{array}{ll|ll}
f(x) & f'(x) & f(x) & f'(x) \\
\hline
x^{\alpha} & \alpha\, x^{\alpha - 1} & \cos x & -\sin x \\[6pt]
e^{x} & e^{x} & \tan x & \dfrac{1}{\cos^2 x} = 1 + \tan^2 x \\[6pt]
a^{x} & a^{x} \ln a & \arcsin x & \dfrac{1}{\sqrt{1 - x^2}} \\[6pt]
\ln x & \dfrac{1}{x} & \arccos x & -\dfrac{1}{\sqrt{1 - x^2}} \\[6pt]
\sin x & \cos x & \arctan x & \dfrac{1}{1 + x^2}
\end{array}
$$
The derivative of a constant function is **zero**, since the difference quotient is identically zero. Each formula holds at the *interior points* of the domain. The derivatives of the exponential, the logarithm and the sine are obtained from the definition using the **fundamental limits**; for example
$$
\frac{e^{x+h} - e^{x}}{h} = e^{x} \cdot \frac{e^{h} - 1}{h} \to e^{x} .
$$
The derivatives of the inverse functions follow from the previous theorem.
:::

## Maxima, minima and mean value theorems

:::definizione{#estremi-locali titolo="Local maximum and minimum"}
$x_0 \in A$ is a **local maximum point** of $f : A \to \mathbb{R}$ if there exists a neighborhood $U$ of $x_0$ such that $f(x) \leq f(x_0)$ for every $x \in U \cap A$; it is a **local minimum point** if the opposite inequality holds. An absolute maximum or minimum point, that is, one at which the inequality holds on all of $A$, is *also* local. Finding local extrema is one of the aims of differential calculus; Fermat's theorem says where to look for them.
:::

::::teorema{#teorema-di-fermat titolo="Fermat's theorem"}
If $x_0$ is a local maximum or minimum point of $f$, interior to the domain, and $f$ is differentiable at $x_0$, then $f'(x_0) = 0$. The points where the derivative vanishes are called **stationary points**. The theorem reduces the search for extrema on an interval to a list of **candidates**: the stationary points, the points of non-differentiability and the endpoints of the interval.

::grafico{f="sin(x)" xmin=-4 xmax=4 ymin=-1.6 ymax=1.6 punti="1.5708,1,pieno;-1.5708,-1,pieno" segmenti="0.6,1,2.54,1;-2.54,-1,-0.6,-1" titolo="$y = \sin x$: at the maximum point $\dfrac{\pi}{2}$ and at the minimum point $-\dfrac{\pi}{2}$ the tangent is horizontal"}

:::dimostrazione
Let $x_0$ be a local maximum point; for the minimum the argument uses the opposite inequalities. Since $x_0$ is interior to the domain, for $|h|$ small enough the point $x_0 + h$ belongs to the domain and $f(x_0 + h) - f(x_0) \leq 0$. For $h > 0$ the difference quotient has numerator $\leq 0$ and denominator $> 0$, hence it is $\leq 0$; since the limit preserves *non-strict* inequalities, as $h \to 0^{+}$ one obtains $f'(x_0) \leq 0$. For $h < 0$ the quotient has numerator $\leq 0$ and denominator $< 0$, hence it is $\geq 0$, and as $h \to 0^{-}$ one obtains $f'(x_0) \geq 0$. From the two inequalities it follows that $f'(x_0) = 0$.
:::
::::

:::attenzione
The condition $f'(x_0) = 0$ is *necessary* for an interior local extremum, *not sufficient*: $f(x) = x^3$ has zero derivative at $0$ and at $0$ it **has neither a local maximum nor a local minimum**, since it is strictly increasing. Moreover $x_0$ must be **interior**: $f(x) = x$ on $[0, 1]$ has a maximum at $x = 1$ with $f'(1) = 1 \neq 0$.
:::

::::teorema{#teorema-di-rolle titolo="Rolle's theorem"}
Let $f$ be continuous on $[a, b]$, differentiable on $(a, b)$, with $f(a) = f(b)$. Then there exists $c \in (a, b)$ such that $f'(c) = 0$. Between two points of the graph at the same height there is therefore a point with a **horizontal tangent**. Lagrange's theorem is deduced from Rolle's theorem.

::grafico{f="x^3-4*x+1+0*sqrt(4-x^2)" xmin=-2.6 xmax=2.6 ymin=-3 ymax=5.5 punti="-2,1,pieno,A;2,1,pieno,B;-1.1547,4.0792,pieno,c₁;1.1547,-2.0792,pieno,c₂" segmenti="-2,1,2,1;-1.9,4.0792,-0.4,4.0792;0.4,-2.0792,1.9,-2.0792" titolo="$f(x) = x^3 - 4x + 1$ on $[-2, 2]$ has $f(-2) = f(2) = 1$: at the points $c = \pm\dfrac{2}{\sqrt{3}}$ the tangent is horizontal"}

:::dimostrazione
Since $f$ is continuous on $[a, b]$, by the **Weierstrass theorem** $f$ attains on $[a, b]$ a maximum value $M$ and a minimum value $m$.

- If $M = m$, the function is **constant** on $[a, b]$, therefore $f'(c) = 0$ for every $c \in (a, b)$.
- If $M > m$, *at least one* of the two values is different from $f(a) = f(b)$, therefore it is attained at a point $c$ interior to the interval. The point $c$ is an interior local extremum and $f$ is differentiable at $c$, hence by **Fermat's theorem** $f'(c) = 0$.
:::
::::

:::richiamo{titolo="Weierstrass theorem"}
If $f$ is continuous on $[a, b]$, then $f$ attains a maximum and a minimum on $[a, b]$.
:::

::::teorema{#teorema-di-lagrange titolo="Lagrange's theorem"}
Let $f$ be continuous on $[a, b]$ and differentiable on $(a, b)$. Then there exists $c \in (a, b)$ such that
$$
f'(c) = \frac{f(b) - f(a)}{b - a} .
$$
The ratio on the right is the slope of the line through the endpoints of the graph: there exists a point where the tangent is **parallel** to that line. From the theorem follow the link between the sign of the derivative and monotonicity, and estimates of the form $|f(b) - f(a)| \leq K\,|b - a|$ when $|f'| \leq K$ on the interval.

::grafico{f="sqrt(x)+0*sqrt(4-x);x/2+0*sqrt(x*(4-x));x/2+1/2" xmin=-0.5 xmax=5 ymin=-0.5 ymax=3 uguale=1 punti="0,0,pieno;4,2,pieno;1,1,pieno,c" titolo="$f(x) = \sqrt{x}$ on $[0, 4]$: the chord (dashed) has slope $\dfrac{2 - 0}{4 - 0} = \dfrac{1}{2}$ and at $c = 1$ the tangent (red) is parallel to the chord"}

:::dimostrazione
Define the **auxiliary function**
$$
g(x) = f(x) - f(a) - \frac{f(b) - f(a)}{b - a}\,(x - a) ,
$$
the difference between $f$ and the line through the points $(a, f(a))$ and $(b, f(b))$. $g$ is continuous on $[a, b]$ and differentiable on $(a, b)$, since it is the sum of $f$ and a first-degree polynomial; moreover $g(a) = 0$ and $g(b) = f(b) - f(a) - \bigl( f(b) - f(a) \bigr) = 0$. The hypotheses of **Rolle's theorem** are therefore **satisfied** and there exists $c \in (a, b)$ with $g'(c) = 0$. Since
$$
g'(x) = f'(x) - \frac{f(b) - f(a)}{b - a} ,
$$
from $g'(c) = 0$ it follows that $f'(c) = \dfrac{f(b) - f(a)}{b - a}$.
:::
::::

:::richiamo{titolo="Rolle's theorem"}
If $f$ is continuous on $[a, b]$, differentiable on $(a, b)$ and $f(a) = f(b)$, then there exists $c \in (a, b)$ with $f'(c) = 0$.
:::

:::teorema{#teorema-di-cauchy titolo="Cauchy's theorem"}
Let $f$ and $g$ be continuous on $[a, b]$ and differentiable on $(a, b)$. Then there exists $c \in (a, b)$ such that
$$
\bigl( f(b) - f(a) \bigr)\, g'(c) = \bigl( g(b) - g(a) \bigr)\, f'(c) .
$$
If moreover $g'(x) \neq 0$ on $(a, b)$, then $g(b) \neq g(a)$ by **Rolle's theorem** and the equality can be written
$$
\frac{f'(c)}{g'(c)} = \frac{f(b) - f(a)}{g(b) - g(a)} .
$$
For $g(x) = x$ one recovers **Lagrange's theorem**. The proof applies Rolle's theorem to the function $h(x) = \bigl( f(b) - f(a) \bigr) g(x) - \bigl( g(b) - g(a) \bigr) f(x)$. Cauchy's theorem is the step through which L'Hôpital's rule is proved.
:::

## Consequences of Lagrange's theorem

::::teorema{#monotonia-e-derivata titolo="Monotonicity and sign of the derivative"}
Let $f$ be differentiable on an interval $I$.

- $f'(x) \geq 0$ for every $x \in I$ *if and only if* $f$ is **increasing** on $I$; similarly, $f'(x) \leq 0$ on $I$ if and only if $f$ is **decreasing** on $I$.
- If $f'(x) > 0$ for every $x \in I$, then $f$ is **strictly increasing** on $I$. This condition is *sufficient*, *not necessary*: $x^3$ is strictly increasing on $\mathbb{R}$ and has zero derivative at $0$.

The study of the sign of $f'$ determines the intervals of monotonicity and, together with Fermat's theorem, classifies the stationary points; this is how curve sketching is built.

:::dimostrazione
Let $f'(x) \geq 0$ on $I$ and let $x_1 < x_2$ in $I$. By **Lagrange's theorem** on $[x_1, x_2]$ there exists $c \in (x_1, x_2)$ with
$$
f(x_2) - f(x_1) = f'(c)\,(x_2 - x_1) \geq 0 ,
$$
therefore $f(x_1) \leq f(x_2)$ and $f$ is **increasing** on $I$; if $f' > 0$ on $I$ the inequality is strict and the monotonicity is strict. Conversely, let $f$ be increasing on $I$ and let $x_0 \in I$: for every $x \neq x_0$ the quotient $\dfrac{f(x) - f(x_0)}{x - x_0}$ has numerator and denominator of the same sign, hence it is $\geq 0$, therefore its limit $f'(x_0)$ is also $\geq 0$.
:::
::::

:::richiamo{titolo="Lagrange's theorem"}
If $f$ is continuous on $[a, b]$ and differentiable on $(a, b)$, there exists $c \in (a, b)$ with $f'(c) = \dfrac{f(b) - f(a)}{b - a}$.
:::

::::teorema{#derivata-nulla-costante titolo="Zero derivative on an interval"}
If $f$ is differentiable on an interval $I$ and $f'(x) = 0$ for every $x \in I$, then $f$ is **constant** on $I$. Consequently two functions with the same derivative on an interval differ by a **constant**; the computation of antiderivatives, treated in the chapter on integrals, is based on this fact.

:::dimostrazione
Let $x_1 < x_2$ be any two points of $I$. By **Lagrange's theorem** on $[x_1, x_2]$ there exists $c \in (x_1, x_2)$ with $f(x_2) - f(x_1) = f'(c)\,(x_2 - x_1) = 0$, therefore $f(x_1) = f(x_2)$. The values of $f$ at any two points coincide, hence $f$ is **constant** on $I$.
:::
::::

:::attenzione
The hypothesis that the domain is an interval *cannot* be dropped: $f(x) = \dfrac{|x|}{x}$ has zero derivative at every point of $\mathbb{R} \setminus \{0\}$, equals $-1$ on the negatives and $1$ on the positives, therefore it **is not constant**. The theorem applies *separately* to each of the two intervals $(-\infty, 0)$ and $(0, +\infty)$.
:::

:::teorema{#limite-della-derivata titolo="Limit of the derivative"}
Let $f$ be continuous at $x_0$ and differentiable in a neighborhood of $x_0$, except possibly at $x_0$. If $f'(x) \to L \in \mathbb{R}$ as $x \to x_0$, then $f$ is **differentiable** at $x_0$ and $f'(x_0) = L$; the version with one-sided limits gives the one-sided derivatives. It is proved by applying **Lagrange's theorem** on the interval with endpoints $x_0$ and $x$. This criterion is used to study the differentiability of piecewise functions: one differentiates each expression and computes the one-sided limits of the derivative at the junction points. If the limit of $f'$ does not exist, the criterion **gives no information** and one goes back to the difference quotient.
:::

## L'Hôpital's rule

:::teorema{#de-l-hopital titolo="L'Hôpital's rule"}
Let $x_0 \in \mathbb{R} \cup \{\pm\infty\}$ and let $U$ be a neighborhood of $x_0$. If
$$
\begin{cases}
f \text{ and } g \text{ differentiable on } U \setminus \{x_0\}, \text{ with } g'(x) \neq 0 \text{ on } U \setminus \{x_0\} \\[4pt]
f(x) \to 0 \text{ and } g(x) \to 0 \text{ as } x \to x_0, \text{ or } |f(x)| \to +\infty \text{ and } |g(x)| \to +\infty \\[4pt]
\displaystyle \lim_{x \to x_0} \frac{f'(x)}{g'(x)} = L \in \mathbb{R} \cup \{\pm\infty\}
\end{cases}
$$
then
$$
\lim_{x \to x_0} \frac{f(x)}{g(x)} = L .
$$
The same holds for one-sided limits. The theorem is used on the **indeterminate forms** $\dfrac{0}{0}$ and $\dfrac{\infty}{\infty}$; the forms $0 \cdot \infty$ and $\infty - \infty$ are reduced to them by algebraic transformations, the exponential forms $1^{\infty}$, $0^{0}$, $\infty^{0}$ by writing $f(x)^{g(x)} = e^{g(x) \ln f(x)}$. The proof uses Cauchy's theorem and is omitted. This theorem is used to prove the **hierarchy of infinities** stated in the chapter on limits.
:::

:::esempio
As $x \to +\infty$ the ratio $\dfrac{x}{e^{x}}$ is of the form $\dfrac{\infty}{\infty}$, with $f$ and $g$ differentiable and $g'(x) = e^{x} \neq 0$. Since the ratio of the derivatives satisfies
$$
\lim_{x \to +\infty} \frac{1}{e^{x}} = 0 ,
$$
the theorem **applies** and $\displaystyle\lim_{x \to +\infty} \frac{x}{e^{x}} = 0$.
:::

:::attenzione
The theorem requires *all* its hypotheses.

- If the ratio is *not* an indeterminate form, replacing it with the ratio of the derivatives **alters the result**: $\displaystyle\lim_{x \to 0} \frac{x + 1}{x + 2} = \frac{1}{2}$, whereas the ratio of the derivatives equals $1$.
- If the limit of $\dfrac{f'}{g'}$ does not exist, the theorem **does not apply** and the limit must be computed in another way: as $x \to +\infty$ we have $\dfrac{x + \sin x}{x} \to 1$, whereas the ratio of the derivatives $\dfrac{1 + \cos x}{1}$ has no limit.
:::

## Higher-order derivatives

:::definizione{#derivate-successive titolo="Higher-order derivatives and smoothness classes"}
If the derivative function $f'$ is itself differentiable, its derivative $f'' = (f')'$ is the **second derivative** of $f$; iterating, one defines the $n$-th derivative $f^{(n)}$, with the convention $f^{(0)} = f$. $f$ is **of class** $C^{n}$ on an interval if it is differentiable $n$ times and $f^{(n)}$ is continuous; it is of class $C^{\infty}$ if it has derivatives of *every* order. The elementary functions are $C^{\infty}$ at the interior points of their domain. The second derivative is used in the study of concavity, treated in the chapter on curve sketching; the higher-order derivatives build the Taylor polynomial.
:::

:::esempio
For $f(x) = \sin x$ we have $f'(x) = \cos x$, $f''(x) = -\sin x$, $f'''(x) = -\cos x$, $f^{(4)}(x) = \sin x$, and from here on the derivatives repeat with period $4$. At $x = 0$ they equal $0, 1, 0, -1$, then again $0, 1, 0, -1$: these are the coefficients that appear in the **Maclaurin expansion** of the sine.
:::

## Taylor's formula

:::teorema{#formula-di-taylor titolo="Taylor's formula with Peano remainder"}
Let $f$ be differentiable $n$ times at $x_0$. Then, as $x \to x_0$,
$$
f(x) = \sum_{k=0}^{n} \frac{f^{(k)}(x_0)}{k!}\,(x - x_0)^k + o\bigl((x - x_0)^n\bigr) .
$$
The polynomial $T_n(x) = \displaystyle\sum_{k=0}^{n} \frac{f^{(k)}(x_0)}{k!}\,(x - x_0)^k$ is the **Taylor polynomial** of order $n$ of $f$ centered at $x_0$; for $x_0 = 0$ one speaks of the **Maclaurin** formula and polynomial. The remainder $o\bigl((x - x_0)^n\bigr)$ says that the error tends to $0$ faster than $(x - x_0)^n$, therefore the polynomial approximates $f$ near $x_0$ up to an error that is negligible with respect to the last power written. For $n = 1$ the formula becomes $f(x) = f(x_0) + f'(x_0)(x - x_0) + o(x - x_0)$, the approximation by the **tangent line**. This form of the remainder is used in computing limits; the proof applies L'Hôpital's rule repeatedly to the ratio of $f(x) - T_n(x)$ to $(x - x_0)^n$ and is omitted.

::grafico{f="exp(x);1+x;1+x+x^2/2" xmin=-3 xmax=2.5 ymin=-2 ymax=7 punti="0,1,pieno" titolo="$y = e^x$ with the Maclaurin polynomials $T_1(x) = 1 + x$ (dashed) and $T_2(x) = 1 + x + \dfrac{x^2}{2}$ (red): near $0$ the approximation improves as the order increases"}

:::

:::teorema{#resto-di-lagrange titolo="Taylor's formula with Lagrange remainder"}
Let $f$ be differentiable $n + 1$ times on an interval $I$ and let $x_0, x \in I$ with $x \neq x_0$. Then there exists $c$ *strictly* between $x_0$ and $x$ such that
$$
f(x) = \sum_{k=0}^{n} \frac{f^{(k)}(x_0)}{k!}\,(x - x_0)^k + \frac{f^{(n+1)}(c)}{(n+1)!}\,(x - x_0)^{n+1} .
$$
For $n = 0$ the formula is **Lagrange's theorem**. The point $c$ is *not* known; however, if $|f^{(n+1)}| \leq K$ on $I$, the formula yields the estimate
$$
\bigl| f(x) - T_n(x) \bigr| \leq \frac{K}{(n+1)!}\,|x - x_0|^{n+1} ,
$$
which is used to compute approximate values of a function with a **controlled error**.
:::

:::teorema{#sviluppi-di-mclaurin titolo="Maclaurin expansions of the elementary functions"}
As $x \to 0$:
$$
\begin{gathered}
e^{x} = 1 + x + \frac{x^2}{2} + \frac{x^3}{6} + \dots + \frac{x^n}{n!} + o(x^n) , \\[6pt]
\sin x = x - \frac{x^3}{6} + \frac{x^5}{120} + o(x^6) , \qquad
\cos x = 1 - \frac{x^2}{2} + \frac{x^4}{24} + o(x^5) , \\[6pt]
\ln(1 + x) = x - \frac{x^2}{2} + \frac{x^3}{3} + o(x^3) , \qquad
(1 + x)^{\alpha} = 1 + \alpha x + \frac{\alpha(\alpha - 1)}{2}\,x^2 + o(x^2) , \\[6pt]
\frac{1}{1 - x} = 1 + x + x^2 + \dots + x^n + o(x^n) , \qquad
\arctan x = x - \frac{x^3}{3} + \frac{x^5}{5} + o(x^6) .
\end{gathered}
$$
Each expansion is obtained from **Taylor's formula** by computing the successive derivatives at $0$; the following terms continue with the same pattern (for the sine and the arctangent *only* odd powers with alternating signs appear, for the cosine only even powers). Stopped at the first useful order, the expansions give back the **fundamental limits**: $\sin x = x + o(x)$ is equivalent to $\dfrac{\sin x}{x} \to 1$.

::grafico{f="cos(x);1-x^2/2;1-x^2/2+x^4/24" xmin=-5 xmax=5 ymin=-2 ymax=2 titolo="$y = \cos x$ with $T_2(x) = 1 - \dfrac{x^2}{2}$ (dashed) and $T_4(x) = 1 - \dfrac{x^2}{2} + \dfrac{x^4}{24}$ (red); the cosine is even and its Maclaurin polynomials contain only even powers"}

:::

:::definizione{#algebra-degli-o-piccolo titolo="Algebra of little-o"}
In computations as $x \to 0$ the remainders combine according to fixed rules ($m, n$ positive integers, $c \neq 0$):
$$
\begin{gathered}
o(x^n) + o(x^n) = o(x^n) , \qquad c \cdot o(x^n) = o(x^n) , \\[6pt]
x^m \cdot o(x^n) = o(x^{m+n}) , \qquad o(x^m) \cdot o(x^n) = o(x^{m+n}) , \\[6pt]
o(x^m) = o(x^n) \quad \text{for } m > n .
\end{gathered}
$$
Each equality is read *from left to right*: the sum of two quantities negligible with respect to $x^n$ is negligible with respect to $x^n$, and likewise for the others. The last rule **lowers the order** of a remainder to match it with the other terms. In composite functions one substitutes the **expansion of the inner function** for the variable of the outer expansion, as the worked examples on expansions of composite functions show.
:::

:::esempio{titolo="Limit using Taylor's formula"}
$$
\lim_{x \to 0} \frac{e^{x} - 1 - x}{x^2}
= \lim_{x \to 0} \frac{\left( 1 + x + \dfrac{x^2}{2} + o(x^2) \right) - 1 - x}{x^2}
= \lim_{x \to 0} \frac{\dfrac{x^2}{2} + o(x^2)}{x^2}
= \frac{1}{2}
$$
The terms $1$ and $x$ of the expansion **cancel** with those subtracted, therefore the first remaining term in the numerator is $\dfrac{x^2}{2}$; since $\dfrac{o(x^2)}{x^2} \to 0$, the limit equals $\dfrac{1}{2}$.
:::

:::attenzione
The order of the expansion must be chosen so that a *nonzero* term remains in the numerator. In the limit $\displaystyle\lim_{x \to 0} \frac{\sin x - x}{x^3}$, the expansion $\sin x = x + o(x)$ leaves only $o(x)$ in the numerator, which is **insufficient** information relative to $x^3$; with $\sin x = x - \dfrac{x^3}{6} + o(x^3)$ the numerator becomes $-\dfrac{x^3}{6} + o(x^3)$ and the limit equals $-\dfrac{1}{6}$.
:::
