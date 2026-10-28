---
titolo: Limits and continuity
sommario: What it means for a function to tend to a value, how limits are computed, which theorems govern them, and what continuity adds.
---

## Neighborhoods and accumulation points

:::definizione{#intorno titolo="Neighborhood of a point"}
For $x_0 \in \mathbb{R}$ and $r > 0$, the **neighborhood** of $x_0$ of radius $r$ is the open interval
$$
I(x_0, r) = (x_0 - r,\; x_0 + r) = \{ x \in \mathbb{R} : |x - x_0| < r \}.
$$
A neighborhood of $+\infty$ is a half-line $(a, +\infty)$; a neighborhood of $-\infty$ is a half-line $(-\infty, a)$. The expressions $|x - x_0| < r$ and $x \in (x_0 - r, x_0 + r)$ say *the same thing*, and both appear in the definitions of limit.
:::

:::definizione{#punto-di-accumulazione titolo="Accumulation point"}
$x_0 \in \mathbb{R}$ is an **accumulation point** of $A \subseteq \mathbb{R}$ if *every* neighborhood of $x_0$ contains *at least one* point of $A$ other than $x_0$. The point may or may not belong to $A$. The limit as $x \to x_0$ makes sense *only* at an accumulation point of the domain.

- $A = (0, 1)$: the accumulation points are all the points of $[0, 1]$, including $0$ and $1$, which do not belong to $A$.
- $A = \{1, 2, 3\}$: no accumulation points.
- $A = \mathbb{N}$: no accumulation points in $\mathbb{R}$; only $x \to +\infty$ makes sense.
:::

## Definition of limit

:::definizione{#limite-finito titolo="Finite limit at a point"}
$f : A \to \mathbb{R}$, $x_0$ an accumulation point of $A$. We write $\displaystyle\lim_{x \to x_0} f(x) = L$, with $L \in \mathbb{R}$, if for every $\varepsilon > 0$ there exists $\delta > 0$ such that, for every $x \in A$,
$$
0 < |x - x_0| < \delta \implies |f(x) - L| < \varepsilon .
$$
Given a distance $\varepsilon$ from $L$, as small as desired, there exists a neighborhood of $x_0$ in which *all* the values $f(x)$ lie at a distance less than $\varepsilon$ from $L$; the radius $\delta$ **depends on** $\varepsilon$. The condition $0 < |x - x_0|$ excludes $x_0$, so the value $f(x_0)$, even when it exists, **plays no role** in the limit.
:::

:::esempio{titolo="Verification using the definition"}
$\displaystyle\lim_{x \to 2} (3x - 1) = 5$. Given $\varepsilon > 0$, since $|(3x - 1) - 5| = 3|x - 2|$, it suffices to take $\delta = \dfrac{\varepsilon}{3}$: if $|x - 2| < \dfrac{\varepsilon}{3}$ then $3|x - 2| < \varepsilon$.

::grafico{f="3*x-1" xmin=-1 xmax=4 ymin=-2 ymax=9 area="6.5;3.5;1.5;2.5" punti="2,5,pieno" segmenti="0,6.5,1.5,6.5;0,3.5,1.5,3.5;1.5,0,1.5,3.5;2.5,0,2.5,6.5" etichette="0.1,7,L + ε;0.1,2.8,L − ε" titolo="With $\varepsilon = \dfrac{3}{2}$ and $\delta = \dfrac{\varepsilon}{3} = \dfrac{1}{2}$: for $|x - 2| < \delta$ the graph of $y = 3x - 1$ stays within the strip $|y - 5| < \varepsilon$ (shaded box)"}

:::

:::esempio{titolo="The limit does not depend on the value at the point"}
$f(x) = \dfrac{\sin x}{x}$ is defined for $x \neq 0$ and $0$ is an accumulation point of the domain. As $x \to 0$ we have $f(x) \to 1$ (**fundamental sine limit**), even though $f(0)$ *does not exist*: the graph has a hole at $(0, 1)$.

::grafico{f="sin(x)/x" xmin=-12 xmax=12 ymin=-0.5 ymax=1.3 punti="0,1,vuoto" titolo="$y = \dfrac{\sin x}{x}$: the point $(0, 1)$ does not belong to the graph"}

:::

:::definizione{#limite-infinito titolo="Infinite limit and limit at infinity"}
Same structure, with neighborhoods of a different kind.

- $\displaystyle\lim_{x \to x_0} f(x) = +\infty$ if for every $M > 0$ there exists $\delta > 0$ such that $0 < |x - x_0| < \delta \implies f(x) > M$.
- $\displaystyle\lim_{x \to +\infty} f(x) = L$ (with $A$ unbounded above) if for every $\varepsilon > 0$ there exists $K > 0$ such that $x > K \implies |f(x) - L| < \varepsilon$.
- $\displaystyle\lim_{x \to +\infty} f(x) = +\infty$ if for every $M > 0$ there exists $K > 0$ such that $x > K \implies f(x) > M$.

For $-\infty$ one writes $f(x) < -M$ or $x < -K$. In all cases: for every neighborhood $V$ of the limit value there exists a neighborhood $U$ of $x_0$ such that $f(x) \in V$ for every $x \in U \cap A$, $x \neq x_0$.
:::

:::esempio
$f(x) = \dfrac{1}{x^2}$. As $x \to 0$: given $M > 0$, $\dfrac{1}{x^2} > M$ for $0 < |x| < \dfrac{1}{\sqrt{M}}$, therefore $f(x) \to +\infty$. As $x \to +\infty$: given $\varepsilon > 0$, $\dfrac{1}{x^2} < \varepsilon$ for $x > \dfrac{1}{\sqrt{\varepsilon}}$, therefore $f(x) \to 0$.

::grafico{f="1/x^2" xmin=-4 xmax=4 ymin=-1 ymax=8 asintoti="x=0" titolo="$y = \dfrac{1}{x^2}$: the values grow without bound as $x \to 0$ and approach $0$ as $x \to \pm\infty$"}

:::

:::definizione{#limite-destro-sinistro titolo="Right-hand limit and left-hand limit"}
The **right-hand limit** $\displaystyle\lim_{x \to x_0^+} f(x)$ is the limit of the restriction of $f$ to the points $x > x_0$; the **left-hand limit** $\displaystyle\lim_{x \to x_0^-} f(x)$ is the limit of its restriction to the points $x < x_0$. If $x_0$ is an accumulation point from both sides, the limit exists *if and only if* the two one-sided limits exist and **coincide**. They are needed when the function has different expressions on the right and on the left, or when a denominator changes sign at the point.
:::

:::esempio
$\displaystyle\lim_{x \to 0^+} \frac{1}{x} = +\infty$ and $\displaystyle\lim_{x \to 0^-} \frac{1}{x} = -\infty$, therefore the limit as $x \to 0$ does not exist.

::grafico{f="1/x" xmin=-4 xmax=4 ymin=-4 ymax=4 asintoti="x=0" titolo="$y = \dfrac{1}{x}$: the two one-sided limits at $0$ are different"}

:::

## First theorems on limits

::::teorema{#unicita-del-limite titolo="Uniqueness of the limit"}
If the limit of $f$ as $x \to x_0$ exists, it is **unique**. This is why one writes $\lim f(x) = L$ with an equals sign, and in computations the limit is treated as a number.

:::dimostrazione
Suppose, for contradiction, that $L_1 \neq L_2$ are two finite limits, and let $\varepsilon = \dfrac{|L_1 - L_2|}{2} > 0$. There exist $\delta_1, \delta_2$ with $|f(x) - L_i| < \varepsilon$ for $0 < |x - x_0| < \delta_i$; for $\delta = \min\{\delta_1, \delta_2\}$ there exists $x \in A$ with $0 < |x - x_0| < \delta$, since $x_0$ is an accumulation point. Therefore
$$
|L_1 - L_2| \leq |L_1 - f(x)| + |f(x) - L_2| < 2\varepsilon = |L_1 - L_2| ,
$$
which is a **contradiction**. With an infinite limit the same argument works with the corresponding neighborhoods.
:::
::::

::::teorema{#permanenza-del-segno titolo="Sign-preservation theorem"}
If $\displaystyle\lim_{x \to x_0} f(x) = L > 0$ (including $L = +\infty$), there exists a neighborhood $U$ of $x_0$ with $f(x) > 0$ for every $x \in U \cap A$, $x \neq x_0$. Similarly with $L < 0$ and $f(x) < 0$. It is used to deduce the **sign** of a function near a point from its limit; it is used in the intermediate zero theorem and in the study of monotonicity.

:::dimostrazione
For finite $L$, apply the definition with $\varepsilon = \dfrac{L}{2} > 0$: there exists $\delta$ such that $|f(x) - L| < \dfrac{L}{2}$ for $0 < |x - x_0| < \delta$, hence $f(x) > L - \dfrac{L}{2} = \dfrac{L}{2} > 0$. For $L = +\infty$, apply the definition with $M = 1$.
:::
::::

:::attenzione
The theorem goes from the limit to the sign, *not* from the sign to the limit. From $f(x) > 0$ in a neighborhood and the existence of the limit it follows *only* that $L \geq 0$: $f(x) = x^2 > 0$ for $x \neq 0$ and the limit at $0$ is $0$.
:::

::::teorema{#teorema-del-confronto titolo="Squeeze theorem"}
If $g(x) \leq f(x) \leq h(x)$ in a neighborhood of $x_0$ (except possibly at $x_0$) and $g(x) \to L$, $h(x) \to L$ with $L \in \mathbb{R}$, then $f(x) \to L$. With infinite limits *one* inequality suffices: if $f(x) \geq g(x)$ and $g(x) \to +\infty$, then $f(x) \to +\infty$. It allows a limit to be computed without an explicit expression of the function; the **fundamental limits** are proved with this theorem.

::grafico{f="x*sin(1/x);abs(x);-abs(x)" xmin=-1 xmax=1 ymin=-1 ymax=1 titolo="$-|x| \leq x \sin \dfrac{1}{x} \leq |x|$: the two outer functions (dashed and red) tend to $0$ as $x \to 0$, therefore $x \sin \dfrac{1}{x}$ also tends to $0$"}

:::dimostrazione
Given $\varepsilon > 0$, for $x$ close enough to $x_0$ we have $L - \varepsilon < g(x)$ and $h(x) < L + \varepsilon$, therefore
$$
L - \varepsilon < g(x) \leq f(x) \leq h(x) < L + \varepsilon ,
$$
that is, $|f(x) - L| < \varepsilon$.
:::
::::

:::teorema{#limitata-per-infinitesima titolo="Bounded times infinitesimal"}
If $|f(x)| \leq C$ in a neighborhood of $x_0$ and $g(x) \to 0$, then $f(x)\,g(x) \to 0$. This follows from the **squeeze theorem**: $0 \leq |f(x) g(x)| \leq C\,|g(x)| \to 0$.
$$
\lim_{x \to +\infty} \frac{\sin x}{x} = 0 \qquad\text{since } |\sin x| \leq 1 \text{ and } \frac{1}{x} \to 0 .
$$
The limit of $\sin x$ as $x \to +\infty$ does not exist; the theorem requires *only* that $\sin x$ be **bounded**.

::grafico{f="sin(x)/x;1/x;-1/x" xmin=0 xmax=20 ymin=-0.6 ymax=1.2 titolo="$y = \dfrac{\sin x}{x}$ stays between $-\dfrac{1}{x}$ (red) and $\dfrac{1}{x}$ (dashed), which tend to $0$ as $x \to +\infty$"}

:::

## Operations with limits and indeterminate forms

:::teorema{#algebra-dei-limiti titolo="Limits of sums, products and quotients"}
If $f(x) \to L$ and $g(x) \to M$ with $L, M \in \mathbb{R}$, then
$$
\begin{gathered}
f(x) + g(x) \to L + M, \qquad f(x)\,g(x) \to L M, \\[4pt]
\frac{f(x)}{g(x)} \to \frac{L}{M} \quad \text{if } M \neq 0 .
\end{gathered}
$$
With infinite limits the following rules hold ($L \in \mathbb{R}$; $0^{+}$ denotes a quantity that tends to $0$ while remaining positive; the cases with the signs changed are symmetric):
$$
\begin{gathered}
L + \infty = +\infty, \qquad +\infty + \infty = +\infty, \\[4pt]
L \cdot (+\infty) = +\infty \ \ (L > 0), \qquad \frac{L}{\pm\infty} = 0, \\[6pt]
\frac{L}{0^{+}} = +\infty \ \ (L > 0).
\end{gathered}
$$
:::

:::definizione{#forme-indeterminate titolo="Indeterminate forms"}
$$
\begin{gathered}
+\infty - \infty, \qquad 0 \cdot \infty, \qquad \frac{0}{0}, \qquad \frac{\infty}{\infty}, \\[6pt]
1^{\infty}, \qquad 0^{0}, \qquad \infty^{0}
\end{gathered}
$$
In these cases the value of the limit is *not* determined by the limits of the parts and depends on the functions: as $x \to +\infty$ the ratios $\dfrac{x}{x}$, $\dfrac{x^2}{x}$, $\dfrac{x}{x^2}$ are all of the form $\dfrac{\infty}{\infty}$ and tend to $1$, $+\infty$, $0$. The computation proceeds by transforming the expression: factorization, factoring out the dominant term, rationalization, fundamental limits; in the chapter on derivatives, Taylor's formula and L'Hôpital's rule.
:::

:::attenzione
$\dfrac{L}{0}$ with $L \neq 0$ is *not* an indeterminate form: the limit is **infinite** and its sign depends on the sign of $L$ and on the sign with which the denominator tends to $0$. For example $\displaystyle\lim_{x \to 1^{+}} \frac{2}{x - 1} = +\infty$ and $\displaystyle\lim_{x \to 1^{-}} \frac{2}{x - 1} = -\infty$.
:::

:::esempio{titolo="Factoring out the dominant term"}
$$
\lim_{x \to +\infty} \frac{2x^3 - x}{5x^3 + x^2 + 1}
= \lim_{x \to +\infty} \frac{x^3\left(2 - \dfrac{1}{x^2}\right)}{x^3\left(5 + \dfrac{1}{x} + \dfrac{1}{x^3}\right)}
= \frac{2}{5}
$$
After cancelling $x^3$, the terms $\dfrac{1}{x^2}$, $\dfrac{1}{x}$, $\dfrac{1}{x^3}$ tend to $0$. In a ratio of polynomials as $x \to \pm\infty$, *only* the **highest-degree terms** matter.
:::

:::teorema{#limite-funzione-composta titolo="Limit of a composite function"}
If $g(x) \to y_0$ as $x \to x_0$, $f(y) \to L$ as $y \to y_0$, and $g(x) \neq y_0$ in a neighborhood of $x_0$ (a condition that is *not necessary* if $f$ is continuous at $y_0$), then $f(g(x)) \to L$ as $x \to x_0$. It justifies the substitution $y = g(x)$ inside a limit, that is, the **change of variable** through which the fundamental limits are used.
$$
\lim_{x \to 0} \frac{\sin 3x}{x}
= \lim_{x \to 0} 3 \cdot \frac{\sin 3x}{3x}
= 3 \cdot \lim_{y \to 0} \frac{\sin y}{y}
= 3
\qquad (y = 3x \to 0)
$$
:::

## Fundamental limits

::::teorema{#limite-notevole-seno titolo="Fundamental sine limit"}
$$
\lim_{x \to 0} \frac{\sin x}{x} = 1, \qquad
\lim_{x \to 0} \frac{1 - \cos x}{x^2} = \frac{1}{2}, \qquad
\lim_{x \to 0} \frac{\tan x}{x} = 1
$$
The second follows from the first by multiplying by $1 + \cos x$: $\dfrac{1 - \cos x}{x^2} = \left(\dfrac{\sin x}{x}\right)^2 \dfrac{1}{1 + \cos x} \to \dfrac{1}{2}$. The third follows from $\dfrac{\tan x}{x} = \dfrac{\sin x}{x} \cdot \dfrac{1}{\cos x}$.

:::dimostrazione
For $0 < x < \dfrac{\pi}{2}$, in the circle of radius $1$ the triangle with vertices $O$, $(1,0)$, $(\cos x, \sin x)$ has area $\dfrac{\sin x}{2}$, the sector of angle $x$ has area $\dfrac{x}{2}$, and the triangle with vertices $O$, $(1,0)$, $(1, \tan x)$ has area $\dfrac{\tan x}{2}$; the first lies inside the sector and the sector lies inside the second triangle, therefore $\sin x \leq x \leq \tan x$. Dividing by $\sin x > 0$ we obtain $1 \leq \dfrac{x}{\sin x} \leq \dfrac{1}{\cos x}$, that is,
$$
\cos x \leq \frac{\sin x}{x} \leq 1 .
$$
As $x \to 0^+$ we have $\cos x \to 1$, therefore by the **squeeze theorem** $\dfrac{\sin x}{x} \to 1$; the function is **even**, hence the same holds as $x \to 0^-$.

::grafico{curve="cos(t),sin(t),0,1.5708" xmin=-0.2 xmax=1.4 ymin=-0.2 ymax=1.2 uguale=1 segmenti="0,0,1,0.8423;1,0,1,0.8423;0.7648,0.6442,0.7648,0;0.7648,0.6442,1,0" punti="0.7648,0.6442,pieno;1,0.8423,pieno" etichette="0.6,0.25,sin x;1.04,0.4,tan x;0.2,0.06,x" titolo="For $0 < x < \dfrac{\pi}{2}$ the triangle with vertices $O$, $(1, 0)$, $(\cos x, \sin x)$ lies inside the sector of angle $x$, which lies inside the triangle with vertices $O$, $(1, 0)$, $(1, \tan x)$"}

:::
::::

:::richiamo{titolo="Squeeze theorem"}
If $g(x) \leq f(x) \leq h(x)$ in a neighborhood of $x_0$ and $g(x) \to L$, $h(x) \to L$, then $f(x) \to L$.
:::

:::teorema{#limiti-notevoli-esponenziale titolo="Fundamental exponential and logarithmic limits"}
$$
\begin{gathered}
\lim_{x \to \pm\infty} \left(1 + \frac{1}{x}\right)^{x} = e, \qquad
\lim_{x \to 0} \frac{\ln(1 + x)}{x} = 1, \\[8pt]
\lim_{x \to 0} \frac{e^{x} - 1}{x} = 1, \qquad
\lim_{x \to 0} \frac{(1 + x)^{\alpha} - 1}{x} = \alpha \quad (\alpha \in \mathbb{R})
\end{gathered}
$$
The first is the definition of the number $e$ extended from sequences to functions, and it is *assumed*. The second follows from the first with $x = \dfrac{1}{t}$: $\dfrac{\ln(1 + x)}{x} = \ln\left(\left(1 + \dfrac{1}{t}\right)^{t}\right) \to \ln e = 1$, by the **continuity of the logarithm**. The third follows from the second with $y = e^x - 1$, that is, $x = \ln(1 + y)$: $\dfrac{e^x - 1}{x} = \dfrac{y}{\ln(1 + y)} \to 1$. The fourth, for $\alpha \neq 0$, follows by writing $(1 + x)^{\alpha} = e^{\alpha \ln(1 + x)}$:
$$
\frac{(1 + x)^{\alpha} - 1}{x}
= \frac{e^{\alpha \ln(1 + x)} - 1}{\alpha \ln(1 + x)} \cdot \alpha \cdot \frac{\ln(1 + x)}{x}
\to 1 \cdot \alpha \cdot 1 ;
$$
for $\alpha = 0$ the ratio is identically zero.
:::

:::esempio
$$
\lim_{x \to 0} \frac{e^{2x} - 1}{\sin x}
= \lim_{x \to 0} \frac{e^{2x} - 1}{2x} \cdot \frac{x}{\sin x} \cdot 2
= 1 \cdot 1 \cdot 2 = 2
$$
Each factor is reduced to a **fundamental limit** with the appropriate substitution: $2x \to 0$ in the first, the reciprocal of the sine limit in the second.
:::

:::attenzione
The fundamental limits hold when the argument tends to $0$ (or to infinity, for the limit defining $e$). The ratio $\dfrac{\sin x}{x}$ as $x \to \pi$ is *not* a fundamental limit: the numerator tends to $0$ and the denominator to $\pi$, so the limit is $0$ with no indeterminate form.
:::

## Infinitesimals, infinities and Landau symbols

:::definizione{#infinitesimo-infinito titolo="Infinitesimal, infinite, little-o"}
$f$ is **infinitesimal** as $x \to x_0$ if $f(x) \to 0$; it is **infinite** if $|f(x)| \to +\infty$. With $g(x) \neq 0$ near $x_0$, one writes $f(x) = o(g(x))$ ($f$ is **little-o** of $g$) if
$$
\lim_{x \to x_0} \frac{f(x)}{g(x)} = 0 .
$$
Between infinitesimals, $f = o(g)$ means that $f$ tends to $0$ faster than $g$; between infinities, that $f$ tends to infinity more slowly than $g$. The symbol records an approximation together with the order of the error: from the fundamental sine limit, $\sin x = x + o(x)$ as $x \to 0$, since $\dfrac{\sin x - x}{x} = \dfrac{\sin x}{x} - 1 \to 0$.
:::

:::definizione{#funzioni-asintotiche titolo="Asymptotically equivalent functions"}
$f(x) \sim g(x)$ as $x \to x_0$ if $\dfrac{f(x)}{g(x)} \to 1$. In a product or a quotient a function can be replaced by an **asymptotically equivalent** one without changing the limit. The fundamental limits in this form, as $x \to 0$:
$$
\begin{gathered}
\sin x \sim x, \qquad 1 - \cos x \sim \frac{x^2}{2}, \qquad e^x - 1 \sim x, \\[6pt]
\ln(1 + x) \sim x, \qquad (1 + x)^{\alpha} - 1 \sim \alpha x .
\end{gathered}
$$
:::

:::attenzione
Replacing a function with an asymptotically equivalent one is legitimate in products and quotients, *not* in sums and differences. As $x \to 0$ we have $\sin x \sim x$, but $\sin x - x$ is not asymptotically equivalent to $x - x = 0$: the limit of $\dfrac{\sin x - x}{x^3}$ equals $-\dfrac{1}{6}$ (**Taylor's formula**), whereas the substitution would give $0$.
:::

:::teorema{#gerarchia-degli-infiniti titolo="Hierarchy of infinities"}
For $\alpha > 0$, $\beta > 0$, $a > 1$:
$$
\lim_{x \to +\infty} \frac{(\ln x)^{\beta}}{x^{\alpha}} = 0, \qquad
\lim_{x \to +\infty} \frac{x^{\alpha}}{a^{x}} = 0 .
$$
As $x \to +\infty$, logarithms grow more slowly than *every* power, and powers more slowly than every exponential with base greater than $1$. This allows computing $\dfrac{\infty}{\infty}$ forms with functions of different types, where factoring out the highest degree does not apply. The proof uses differential calculus and is deferred to that chapter.
$$
\lim_{x \to +\infty} \frac{x^3 + \ln x}{2^{x} + x^{5}}
= \lim_{x \to +\infty} \frac{x^{3}\left(1 + \dfrac{\ln x}{x^{3}}\right)}{2^{x}\left(1 + \dfrac{x^{5}}{2^{x}}\right)}
= \lim_{x \to +\infty} \frac{x^{3}}{2^{x}} \cdot \frac{1 + 0}{1 + 0} = 0
$$
In the numerator and in the denominator one factors out the term that grows fastest according to the **hierarchy**.
:::

## Asymptotes

:::definizione{#definizione-asintoti titolo="Asymptotes"}
- $x = x_0$ is a **vertical asymptote** if *at least one* of the one-sided limits of $f$ at $x_0$ is infinite.
- $y = L$ is a **horizontal asymptote** as $x \to +\infty$ if $f(x) \to L \in \mathbb{R}$; similarly as $x \to -\infty$.
- $y = mx + q$ with $m \neq 0$ is an **oblique asymptote** as $x \to +\infty$ if
$$
\begin{cases}
\displaystyle m = \lim_{x \to +\infty} \frac{f(x)}{x} \in \mathbb{R}, \ m \neq 0 \\[10pt]
\displaystyle q = \lim_{x \to +\infty} \bigl( f(x) - m x \bigr) \in \mathbb{R}
\end{cases}
$$
and similarly as $x \to -\infty$.

The two conditions for the oblique asymptote must *both* be verified: if $m$ exists and is finite but $q$ is infinite or does not exist, the oblique asymptote does not exist. Asymptotes describe the graph at the boundary of the domain and are used again in curve sketching.

::grafico{f="x^2/(x-1);x+1" xmin=-5 xmax=6 ymin=-8 ymax=10 asintoti="x=1" titolo="$y = \dfrac{x^2}{x - 1}$: vertical asymptote $x = 1$ and oblique asymptote $y = x + 1$ (dashed)"}

:::

:::esempio
$f(x) = \dfrac{x^2 + 1}{x}$:
$$
\begin{gathered}
m = \lim_{x \to \pm\infty} \frac{x^2 + 1}{x^2} = 1, \\[6pt]
q = \lim_{x \to \pm\infty} \left( \frac{x^2 + 1}{x} - x \right)
= \lim_{x \to \pm\infty} \frac{1}{x} = 0 ,
\end{gathered}
$$
therefore $y = x$ is an **oblique asymptote** on both sides; $x = 0$ is a **vertical asymptote** since $f(x) \to +\infty$ as $x \to 0^+$.

::grafico{f="(x*x+1)/x;x" xmin=-5 xmax=5 ymin=-6 ymax=6 asintoti="x=0" titolo="$y = \dfrac{x^2 + 1}{x}$ with the vertical asymptote $x = 0$ and the oblique asymptote $y = x$ (dashed)"}

:::

## Continuous functions

:::definizione{#funzione-continua titolo="Continuous function"}
$f : A \to \mathbb{R}$, $x_0 \in A$ an accumulation point of $A$. $f$ is **continuous** at $x_0$ if
$$
\lim_{x \to x_0} f(x) = f(x_0) ,
$$
that is, if $f(x_0)$ exists, the limit exists and is finite, and the two values coincide. $f$ is continuous on $A$ if it is continuous at *every* point. For a continuous function the limit is computed by **substitution**, hence computing a limit requires work *only* in indeterminate forms.
:::

:::teorema{#continuita-funzioni-elementari titolo="Continuity of elementary functions"}
Polynomials, rational functions, powers, exponentials, logarithms, trigonometric functions and their inverses are **continuous** at every point of their domain. Sums, products, quotients (with nonzero denominator) and compositions of continuous functions are continuous. The part on operations follows from the theorem on limits of sums, products and quotients with $L = f(x_0)$ and $M = g(x_0)$; the continuity of the elementary functions derives from their construction and is assumed. The continuity of a given function is recognized from its expression: $\dfrac{e^{x} \sin x}{x^2 + 1}$ is **continuous** on $\mathbb{R}$ since it is a quotient of continuous functions with a denominator that never vanishes.
:::

:::definizione{#discontinuita titolo="Points of discontinuity"}
Let $x_0$ be an accumulation point of the domain of $f$. If $x_0$ does not belong to the domain, or belongs to it and $f$ is not continuous at $x_0$, the point is a discontinuity that is

- **removable**, if the limit exists and is finite and differs from $f(x_0)$, or $f(x_0)$ is not defined; it is removed by assigning at $x_0$ the value of the limit;
- a **jump** (first kind), if the one-sided limits exist, are finite and are different;
- **of the second kind**, in every other case: at least one one-sided limit is infinite or does not exist.

::grafico{f="(x^2-1)/(x-1)" xmin=-2 xmax=3 ymin=-1 ymax=4 punti="1,2,vuoto" titolo="$y = \dfrac{x^2 - 1}{x - 1}$ is not defined at $x = 1$ and the limit equals $2$: removable discontinuity"}

:::

:::esempio
$\dfrac{\sin x}{x}$ at $0$: **removable**, the limit equals $1$. The sign function, $\operatorname{sgn}(x) = \pm 1$ for $x \gtrless 0$, at $0$: **jump**, the one-sided limits equal $1$ and $-1$. $\dfrac{1}{x}$ at $0$: **second kind**, the one-sided limits are infinite.

::grafico{f="x/abs(x)" xmin=-3 xmax=3 ymin=-2 ymax=2 punti="0,1,vuoto;0,-1,vuoto" titolo="$y = \operatorname{sgn}(x)$: at $0$ the one-sided limits equal $1$ and $-1$, jump discontinuity"}

:::

## Theorems on continuous functions

They hold for $f$ continuous on a closed and bounded interval $[a, b]$; without either of the two hypotheses the conclusions *may* fail, as the examples show.

::::teorema{#teorema-degli-zeri titolo="Intermediate zero theorem"}
If $f$ is continuous on $[a, b]$ and $f(a)\, f(b) < 0$, there exists $c \in (a, b)$ with $f(c) = 0$. It guarantees a solution of $f(x) = 0$ *without* solving the equation: it locates the roots of equations that cannot be solved algebraically, such as $x = \cos x$, and counts the zeros in curve sketching.
$$
x^3 + x - 1 = 0 \text{ has a solution in } (0, 1): \quad f(0) = -1 < 0, \ f(1) = 1 > 0 .
$$

::grafico{f="x^3+x-1" xmin=-0.5 xmax=1.5 ymin=-2 ymax=2 punti="0,-1,pieno;1,1,pieno;0.6823,0,pieno,c" titolo="$f(x) = x^3 + x - 1$ is continuous, $f(0) = -1 < 0$ and $f(1) = 1 > 0$: the graph crosses the $x$-axis at a point $c \in (0, 1)$"}

:::dimostrazione
Let $f(a) < 0 < f(b)$ (the opposite case is analogous) and $E = \{ x \in [a, b] : f(x) < 0 \}$. $E$ contains $a$ and is bounded by $b$, therefore $c = \sup E \in [a, b]$ exists. If $f(c) < 0$, then by **sign preservation** $f < 0$ in a neighborhood of $c$; since $f(b) > 0$ we have $c < b$, and the neighborhood would contain points of $E$ greater than $c$, contradicting the definition of **supremum**. If $f(c) > 0$, then $f > 0$ in a neighborhood $(c - \delta, c + \delta)$; since $f(a) < 0$ we have $c > a$, no point of $(c - \delta, c]$ lies in $E$ and, since $c = \sup E$, no point greater than $c$ belongs to it, so $c - \delta$ would be an upper bound of $E$ smaller than $c$, a contradiction. Hence $f(c) = 0$, and $c \neq a, b$ since $f(a), f(b) \neq 0$.
:::
::::

:::richiamo{titolo="Sign-preservation theorem"}
If $f(x) \to L \neq 0$ as $x \to x_0$, then in a neighborhood of $x_0$ the function has the sign of $L$ (at the points other than $x_0$).
:::

:::attenzione
Without continuity the theorem **does not apply**: $f(x) = -1$ for $x \in [0, 1)$ and $f(x) = 1$ for $x \in [1, 2]$ changes sign on $[0, 2]$ and never vanishes.

::grafico{f="(x-1)/abs(x-1)+0*sqrt(x*(2-x))" xmin=-0.5 xmax=2.5 ymin=-1.6 ymax=1.6 punti="0,-1,pieno;1,-1,vuoto;1,1,pieno;2,1,pieno" titolo="The function equals $-1$ on $[0, 1)$ and $1$ on $[1, 2]$: it changes sign without vanishing, because it is not continuous at $x = 1$"}

:::

:::teorema{#teorema-di-weierstrass titolo="Weierstrass theorem"}
If $f$ is continuous on $[a, b]$, it attains a **maximum and a minimum**: there exist $x_m, x_M \in [a, b]$ with $f(x_m) \leq f(x) \leq f(x_M)$ for every $x \in [a, b]$. It guarantees that the maximum and minimum problem on a closed and bounded interval has a solution; differential calculus establishes where to look for it. The proof, which uses the Bolzano-Weierstrass theorem on sequences, is not included.

- $f(x) = x$ on $(0, 1)$: continuous, with neither maximum nor minimum, since the interval is *not* closed.
- $f(x) = \dfrac{1}{x}$ on $(0, 1]$: continuous, with no maximum, since the interval is not closed at $0$ and the function is unbounded.
:::

::::teorema{#valori-intermedi titolo="Intermediate value theorem"}
If $f$ is continuous on $[a, b]$ with minimum $m$ and maximum $M$, for every $y \in [m, M]$ there exists $x \in [a, b]$ with $f(x) = y$: the **image** of $[a, b]$ is the interval $[m, M]$. A continuous function on an interval takes *all* the values between two values it takes; this is how the image of a function is determined and how the solutions of $f(x) = k$ are counted. Without continuity it does not hold: the function equal to $-1$ on $[0, 1)$ and to $1$ on $[1, 2]$ takes the values $-1$ and $1$ but not the value $0$. It does not hold either if the domain is not an interval: $\dfrac{1}{x}$ is continuous on the set $[-1, 1] \setminus \{0\}$, takes the values $-1$ and $1$ and does not take the value $0$.

:::dimostrazione
For $y = m$ or $y = M$ the conclusion is the **Weierstrass theorem**. For $m < y < M$ let $g(x) = f(x) - y$, which is continuous, with $g(x_m) = m - y < 0$ and $g(x_M) = M - y > 0$; by the **intermediate zero theorem** on the interval with endpoints $x_m$ and $x_M$ there exists $x$ with $g(x) = 0$, that is, $f(x) = y$.
:::
::::

:::richiamo{titolo="Intermediate zero theorem"}
If $f$ is continuous on $[a, b]$ and $f(a)\, f(b) < 0$, there exists $c \in (a, b)$ with $f(c) = 0$.
:::
