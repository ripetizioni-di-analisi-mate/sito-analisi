---
titolo: Limits and continuity
sommario: What it means for a function to approach a value, how limits are computed and indeterminate forms resolved, how asymptotes are found, what a continuous function is and what the intermediate zero theorem and the Weierstrass theorem guarantee.
---

## Finite limit at a point

:::definizione{#limite-finito titolo="Finite limit at a point"}
Let $f$ be defined on an open interval containing $x_0$, except possibly at the point $x_0$ itself. We write
$$
\lim_{x \to x_0} f(x) = L
$$
if for every $\varepsilon > 0$ there exists $\delta > 0$ such that, for every $x$ in the domain,
$$
0 < |x - x_0| < \delta \implies |f(x) - L| < \varepsilon .
$$
In other words, $f(x)$ is as close to $L$ as we like, within the tolerance $\varepsilon$, provided $x$ is close enough to $x_0$, within the distance $\delta$. The condition $0 < |x - x_0|$ excludes the point $x_0$, so the value $f(x_0)$, if it exists, does not matter. For $\displaystyle\lim_{x \to 1} (2x + 3) = 5$, once $\varepsilon$ is fixed, we have $|(2x + 3) - 5| = 2\,|x - 1|$, which is less than $\varepsilon$ when $|x - 1| < \dfrac{\varepsilon}{2}$; therefore $\delta = \dfrac{\varepsilon}{2}$ suffices.

::grafico{f="2*x+3" area="6;4;0.5;1.5" segmenti="-1,4,3,4;-1,6,3,6;0.5,0,0.5,4;1.5,0,1.5,6" punti="1,5,pieno" xmin=-1 xmax=3 ymin=-1 ymax=9 legenda="y = 2x + 3" titolo="With $\varepsilon = 1$ and $\delta = \dfrac{1}{2}$, for $0 < |x - 1| < \dfrac{1}{2}$ the value $2x + 3$ lies in the strip $4 < y < 6$"}

:::

:::definizione{#limite-destro-sinistro titolo="Right-hand limit and left-hand limit"}
If in the definition of limit only the $x > x_0$ are considered, we obtain the **right-hand limit**, $\displaystyle\lim_{x \to x_0^+} f(x)$; with only the $x < x_0$ we obtain the **left-hand limit**, $\displaystyle\lim_{x \to x_0^-} f(x)$. The limit exists *if and only if* the right-hand limit and the left-hand limit exist and are equal. They are needed for piecewise-defined functions, at the points where one formula switches to the other. For the function equal to $5$ for $0 < x \leq 2$ and to $8$ for $x > 2$, the left-hand limit at $2$ is $5$ and the right-hand limit is $8$, so the limit at $2$ does not exist.

::grafico{linee="0,5 2,5;2,8 5,8" punti="0,5,vuoto;2,5,pieno;2,8,vuoto" segmenti="2,0,2,5" xmin=-1 xmax=5 ymin=-1 ymax=9 titolo="The function equals $5$ for $0 < x \leq 2$ and $8$ for $x > 2$, so at $x = 2$ the left-hand limit is $5$ and the right-hand limit is $8$"}

:::

## Infinite limits and limits at infinity

:::definizione{#limiti-infiniti titolo="Infinite limits and limits at infinity"}
The other situations are described in the same way, replacing the neighborhoods of a number with half-lines.

- $\displaystyle\lim_{x \to x_0} f(x) = +\infty$ if for every $M$ there exists $\delta > 0$ such that $f(x) > M$ for $0 < |x - x_0| < \delta$, that is, if near $x_0$ the values of $f$ exceed any threshold. The limit $-\infty$ is defined in the same way.
- $\displaystyle\lim_{x \to +\infty} f(x) = L$ if for every $\varepsilon > 0$ there exists $N$ such that $|f(x) - L| < \varepsilon$ for $x > N$, that is, if for large values of the variable the values of $f$ stay close to $L$. The limit as $x \to -\infty$ is defined in the same way.
- $\displaystyle\lim_{x \to +\infty} f(x) = +\infty$ if for every $M$ there exists $N$ such that $f(x) > M$ for $x > N$.

For example $\dfrac{1}{x} \to 0$ as $x \to +\infty$, $\dfrac{1}{x^2} \to +\infty$ as $x \to 0$, while $\dfrac{1}{x}$ tends to $+\infty$ as $x \to 0^+$ and to $-\infty$ as $x \to 0^-$. In economic models the limit as $x \to +\infty$ describes what happens for large quantities; for example the average cost $\dfrac{200}{q} + 12$ tends to $12$ as $q \to +\infty$.

::grafico{f="1/x" xmin=-5 xmax=5 ymin=-5 ymax=5 legenda="y = \dfrac{1}{x}" titolo="$\dfrac{1}{x}$ tends to $0$ as $x \to \pm\infty$, so the $x$-axis is a horizontal asymptote; it tends to $+\infty$ as $x \to 0^+$ and to $-\infty$ as $x \to 0^-$"}

:::

## Rules of computation and indeterminate forms

:::teorema{#algebra-dei-limiti titolo="Rules for computing limits"}
If $f(x) \to A$ and $g(x) \to B$, with $A$ and $B$ real numbers, then
$$
f(x) \pm g(x) \to A \pm B,
\qquad
f(x)\,g(x) \to A\,B,
\qquad
\frac{f(x)}{g(x)} \to \frac{A}{B} \quad (B \neq 0) .
$$
The rules extend to infinite limits with the conventions $+\infty + \infty = +\infty$, $a + \infty = +\infty$ for real $a$, $a \cdot (+\infty) = +\infty$ for $a > 0$, $\dfrac{a}{\pm\infty} = 0$ and $\dfrac{a}{0^{+}} = +\infty$ for $a > 0$. Excluded are the **indeterminate forms**
$$
+\infty - \infty, \qquad 0 \cdot \infty, \qquad \frac{0}{0}, \qquad \frac{\infty}{\infty}, \qquad 1^{\infty}, \qquad 0^{0}, \qquad \infty^{0},
$$
for which the result depends on the functions and must be found by transforming the expression. Elementary functions (polynomials, roots, exponentials, logarithms, trigonometric functions) at interior points of their domain have their value as limit, so at those points the limit is computed by **substitution**, as in $\displaystyle\lim_{x \to 2} (x^2 + 1) = 5$.
:::

:::osservazione{#tecniche-forme-indeterminate titolo="Techniques for indeterminate forms"}
The most frequent forms are resolved with three techniques.

- **Factorization** for $\dfrac{0}{0}$ with quotients of polynomials. Numerator and denominator vanish at $x_0$, so both contain the factor $x - x_0$, which cancels. For example $\dfrac{x^2 - 9}{x - 3} = \dfrac{(x - 3)(x + 3)}{x - 3} = x + 3$ for $x \neq 3$, and the limit as $x \to 3$ is $6$.
- **Factoring out** the highest power for $\dfrac{\infty}{\infty}$ with $x \to \pm\infty$, as in $\dfrac{2x^2 + 1}{x^2 - 3x} = \dfrac{2 + \dfrac{1}{x^2}}{1 - \dfrac{3}{x}} \to 2$. As for sequences, the limit at infinity of a quotient of polynomials depends on the comparison of the degrees.
- **Rationalization** for $+\infty - \infty$ with roots. We multiply and divide by the sum, so that the numerator becomes a difference of squares. For example
$$
\sqrt{x^2 + x} - x = \frac{x}{\sqrt{x^2 + x} + x} = \frac{1}{\sqrt{1 + \dfrac{1}{x}} + 1} \to \frac{1}{2} \quad (x \to +\infty) .
$$
:::

## Standard limits and comparison of infinities

:::teorema{#limiti-notevoli titolo="Standard limits"}
The following limits hold
$$
\lim_{x \to \pm\infty} \left( 1 + \frac{1}{x} \right)^{x} = e,
\qquad
\lim_{x \to 0} \frac{\ln(1 + x)}{x} = 1,
\qquad
\lim_{x \to 0} \frac{e^{x} - 1}{x} = 1,
\qquad
\lim_{x \to 0} \frac{\sin x}{x} = 1 .
$$
The first extends to functions the limit that defines $e$ in the topic Sequences, progressions and series, and is assumed; the second follows from the first by setting $x = \dfrac{1}{t}$, and the third from the second by setting $y = e^{x} - 1$; for the fourth we refer to the topic on limits in Mathematical Analysis 1. They are used by reducing the expression to one of them with a substitution; for example, for $r > 0$ and with $t = \dfrac{x}{r}$,
$$
\lim_{x \to +\infty} \left( 1 + \frac{r}{x} \right)^{x} = \lim_{t \to +\infty} \left[ \left( 1 + \frac{1}{t} \right)^{t} \right]^{r} = e^{r} ,
$$
which is the continuous compounding factor at the rate $r$. The standard limits will be used to compute the derivatives of $\ln x$, $e^{x}$ and $\sin x$.
:::

:::teorema{#gerarchia-infiniti titolo="Comparison of infinities"}
As $x \to +\infty$, with $a > 1$, $\alpha > 0$ and $\beta > 0$,
$$
\lim_{x \to +\infty} \frac{(\ln x)^{\beta}}{x^{\alpha}} = 0,
\qquad
\lim_{x \to +\infty} \frac{x^{\alpha}}{a^{x}} = 0 .
$$
In other words, every exponential with base greater than $1$ grows faster than every power, and every power faster than every power of the logarithm. In a quotient or in a sum of infinities we factor out the term that grows fastest, as in $\dfrac{x^3 + 2^{x}}{3 \cdot 2^{x}} = \dfrac{\dfrac{x^3}{2^{x}} + 1}{3} \to \dfrac{1}{3}$.

::grafico{f="x^3;exp(x)" punti="1.857,6.406,pieno;4.536,93.35,pieno" segmenti="4.536,0,4.536,93.35" xmin=-1 xmax=6 ymin=-20 ymax=180 legenda="y = x^3;y = e^{x}" titolo="The graphs of $x^3$ and of $e^{x}$ meet at $x \approx 1.86$ and at $x \approx 4.54$; for $x > 4.54$ approximately, $e^{x}$ is greater than $x^3$, and $\dfrac{x^3}{e^{x}} \to 0$"}

:::

## Asymptotes

:::definizione{#asintoti titolo="Vertical, horizontal and oblique asymptotes"}
An **asymptote** is a line that the graph approaches indefinitely.

- The line $x = x_0$ is a **vertical asymptote** if at least one of the limits of $f$ as $x \to x_0^+$ and as $x \to x_0^-$ is infinite. It is sought at the points excluded from the domain and at the open endpoints of the domain.
- The line $y = L$ is a (right) **horizontal asymptote** if $\displaystyle\lim_{x \to +\infty} f(x) = L$; likewise at $-\infty$.
- The line $y = m x + q$ with $m \neq 0$ is a (right) **oblique asymptote** if $\displaystyle\lim_{x \to +\infty} \big( f(x) - m x - q \big) = 0$.

To find the oblique asymptote, when $f(x) \to \pm\infty$ as $x \to +\infty$, we compute
$$
m = \lim_{x \to +\infty} \frac{f(x)}{x},
\qquad
q = \lim_{x \to +\infty} \big( f(x) - m x \big) ,
$$
and the asymptote exists if both limits are finite and $m \neq 0$. The formulas follow from the definition, because if $f(x) - m x - q \to 0$, dividing by $x$ gives $\dfrac{f(x)}{x} - m \to 0$.
:::

:::esempio{titolo="Asymptotes of a rational function"}
The function $f(x) = \dfrac{x^2 + 1}{x - 1}$ is defined for $x \neq 1$. At the excluded point the numerator equals $2$ and the denominator tends to $0$, positive from the right and negative from the left, so $f(x) \to +\infty$ as $x \to 1^+$ and $f(x) \to -\infty$ as $x \to 1^-$, hence the line $x = 1$ is a vertical asymptote. As $x \to \pm\infty$ the function diverges, because the numerator has higher degree, so there are no horizontal asymptotes. For the oblique asymptote
$$
m = \lim_{x \to \pm\infty} \frac{x^2 + 1}{x\,(x - 1)} = 1,
\qquad
q = \lim_{x \to \pm\infty} \left( \frac{x^2 + 1}{x - 1} - x \right) = \lim_{x \to \pm\infty} \frac{x + 1}{x - 1} = 1 ,
$$
so the line $y = x + 1$ is an oblique asymptote both on the right and on the left.

::grafico{f="(x^2+1)/(x-1)" asintoti="x=1" segmenti="-6,-5,8,9" xmin=-6 xmax=8 ymin=-12 ymax=16 titolo="The graph of $f(x) = \dfrac{x^2 + 1}{x - 1}$ with the vertical asymptote $x = 1$ and the oblique asymptote $y = x + 1$ (dashed)"}

:::

## Continuity

:::definizione{#continuita titolo="Continuous function"}
A function $f$ defined on an interval containing $x_0$ is **continuous** at $x_0$ if
$$
\lim_{x \to x_0} f(x) = f(x_0) ,
$$
that is, if the limit exists, is finite and coincides with the value of the function. The function is continuous on an interval if it is continuous at each of its points; at the closed endpoints of the interval the right-hand or left-hand limit is used. Elementary functions are continuous on their domain, and sums, products, quotients (where the denominator does not vanish) and compositions of continuous functions are continuous. The graph of a continuous function on an interval is drawn without lifting the pencil from the paper.
:::

:::definizione{#discontinuita titolo="Points of discontinuity"}
If $f$ is not continuous at $x_0$, the point is a point of **discontinuity**, and three cases are distinguished.

- **Removable**: the limit exists and is finite, and $f$ at $x_0$ has a value different from the limit or is not defined. By redefining $f(x_0)$ as the limit the function becomes continuous. For example $\dfrac{x^2 - 1}{x - 1}$ is not defined at $1$, but its limit is $2$.
- **Jump**: the right-hand and left-hand limits exist, are finite and are different; their difference is the size of the jump.
- **Of the second kind**: at least one of the right-hand and left-hand limits is infinite or does not exist, as for $\dfrac{1}{x}$ at $0$.

The function equal to $5$ for $0 < x \leq 2$ and to $8$ for $x > 2$ has at $x = 2$ a jump discontinuity of size $8 - 5 = 3$.

::grafico{f="x+1" punti="1,2,vuoto" segmenti="1,0,1,2" xmin=-2 xmax=4 ymin=-1 ymax=5 legenda="y = \dfrac{x^2 - 1}{x - 1}" titolo="The graph of $\dfrac{x^2 - 1}{x - 1}$ is the line $y = x + 1$ without the point $(1, 2)$, hence the discontinuity at $x = 1$ is removable"}

:::

## Theorems on continuous functions

:::teorema{#teorema-degli-zeri titolo="Intermediate zero theorem"}
Let $f$ be continuous on the closed interval $[a, b]$, with $f(a)$ and $f(b)$ of opposite sign. Then there exists at least one point $c \in (a, b)$ such that $f(c) = 0$.

The graph is a curve without breaks joining a point on one side of the $x$-axis to a point on the other side, so it meets the axis. The theorem guarantees that an equation has a solution even when we do not know how to solve it, and the **bisection method** for approximating it is based on it. We compute $f$ at the midpoint of the interval, keep the half at whose endpoints $f$ has opposite sign, and repeat. For $f(x) = x^3 + x - 1$ we have $f(0) = -1$ and $f(1) = 1$, so there is a zero in $(0, 1)$; since $f\left( \dfrac{1}{2} \right) = -\dfrac{3}{8}$ and $f\left( \dfrac{3}{4} \right) = \dfrac{11}{64}$, the zero lies in $\left( \dfrac{1}{2}, \dfrac{3}{4} \right)$, and is approximately $0.682$. The theorem is proved using the completeness of the real numbers, for which we refer to the topic on sets in Mathematical Analysis 1.

::grafico{f="x^3+x-1" punti="0,-1,pieno;1,1,pieno;0.5,-0.375,pieno;0.75,0.1719,pieno;0.6823,0,vuoto" segmenti="0.5,0,0.5,-0.375;0.75,0,0.75,0.1719" xmin=-0.5 xmax=1.5 ymin=-1.5 ymax=2 titolo="$f(x) = x^3 + x - 1$ changes sign between $0$ and $1$, and then between $\dfrac{1}{2}$ and $\dfrac{3}{4}$; the zero is approximately $0.682$"}

:::

:::teorema{#valori-intermedi titolo="Intermediate value theorem"}
Let $f$ be continuous on the interval $[a, b]$. Then $f$ takes every value between $f(a)$ and $f(b)$.

It follows from the intermediate zero theorem, because if $y_0$ lies between $f(a)$ and $f(b)$, the function $f(x) - y_0$ is continuous and has opposite signs at the endpoints, so it vanishes at a point $c$, where $f(c) = y_0$. For example $f(x) = x^2$ is continuous on $[1, 3]$, with $f(1) = 1$ and $f(3) = 9$, so it takes the value $5$ at a point of $(1, 3)$, which is $\sqrt{5}$.
:::

:::teorema{#weierstrass titolo="Weierstrass theorem"}
Let $f$ be continuous on the closed and bounded interval $[a, b]$. Then $f$ has a maximum and a minimum on $[a, b]$, that is, there exist $x_1, x_2 \in [a, b]$ such that
$$
f(x_1) \leq f(x) \leq f(x_2) \qquad \text{for all } x \in [a, b] .
$$
None of the hypotheses can be removed. On an open interval the maximum may fail to exist; for example $f(x) = x$ on $(0, 1)$ takes values as close to $1$ as we like, but never the value $1$. Without continuity the maximum may fail to exist even on a closed interval, as for the function equal to $x$ for $0 \leq x < 1$ and to $0$ at $x = 1$. The theorem guarantees that the maximum and the minimum exist, and how to find them with derivatives is covered in the topic Curve sketching and optimization. This theorem too is proved using the completeness of the real numbers.

::grafico{f="x+0*sqrt(x*(1-x))" punti="0,0,vuoto;1,1,vuoto" segmenti="0,1,1,1;1,0,1,1" xmin=-1 xmax=2 ymin=-1 ymax=2 legenda="y = x" titolo="On $(0, 1)$ the function $f(x) = x$ takes values as close to $1$ as we like, but not the value $1$, so it has no maximum; it has no minimum either"}

:::
