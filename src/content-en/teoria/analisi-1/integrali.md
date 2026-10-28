---
titolo: Integral calculus
sommario: Antiderivatives and integration techniques, the Riemann definite integral with the fundamental theorem of calculus, and the computation of areas.
---

## Antiderivatives and indefinite integral

:::definizione{#primitiva titolo="Antiderivative and indefinite integral"}
Let $f : I \to \mathbb{R}$ with $I$ an interval. A function $F : I \to \mathbb{R}$ is an **antiderivative** of $f$ on $I$ if $F$ is differentiable and $F'(x) = f(x)$ for every $x \in I$. The **indefinite integral** of $f$ is the set of all antiderivatives of $f$ and is denoted by $\displaystyle\int f(x)\, dx$. For example $\dfrac{x^3}{3}$ is an antiderivative of $x^2$, because its derivative is $x^2$. Finding antiderivatives is the *inverse operation* of differentiation; together with the fundamental formula of calculus it reduces the computation of definite integrals to finding an antiderivative.
:::

::::teorema{#due-primitive titolo="Two antiderivatives differ by a constant"}
If $F$ and $G$ are antiderivatives of $f$ on the *interval* $I$, there exists $c \in \mathbb{R}$ such that $G(x) = F(x) + c$ for every $x \in I$. Therefore, once an antiderivative $F$ is found, the indefinite integral is described by the expression
$$
\int f(x)\, dx = F(x) + c, \qquad c \in \mathbb{R} .
$$

::grafico{f="x^3/3;x^3/3+1;x^3/3-1" xmin=-2.6 xmax=2.6 ymin=-4 ymax=4 titolo="Three antiderivatives of $x^2$: $\dfrac{x^3}{3}$ in color, $\dfrac{x^3}{3} + 1$ dashed, $\dfrac{x^3}{3} - 1$ in red; each graph is a vertical translation of another"}

:::dimostrazione
Let $H = G - F$. The function $H$ is differentiable on $I$ and $H'(x) = G'(x) - F'(x) = f(x) - f(x) = 0$ for every $x \in I$. Let $x_1 < x_2$ be two points of $I$. Since $I$ is an interval, $[x_1, x_2] \subseteq I$, therefore $H$ is continuous on $[x_1, x_2]$ and differentiable on $(x_1, x_2)$ and **Lagrange's mean value theorem** applies: there exists $\xi \in (x_1, x_2)$ such that
$$
H(x_2) - H(x_1) = H'(\xi)\,(x_2 - x_1) = 0 .
$$
Hence $H$ takes the same value at every pair of points of $I$, that is, it is **constant**: $H(x) = c$ for every $x \in I$, from which $G(x) = F(x) + c$.
:::
::::

:::richiamo{titolo="Lagrange's mean value theorem"}
If $f$ is continuous on $[a, b]$ and differentiable on $(a, b)$, there exists $\xi \in (a, b)$ such that $f(b) - f(a) = f'(\xi)\,(b - a)$.
:::

:::osservazione
The hypothesis that the domain is an interval *cannot* be removed. The function $\dfrac{1}{x}$ has domain $(-\infty, 0) \cup (0, +\infty)$ and its antiderivatives are $\ln|x| + c_1$ for $x > 0$ and $\ln|x| + c_2$ for $x < 0$, with **two independent constants**. The expression $\displaystyle\int \frac{1}{x}\, dx = \ln|x| + c$ implies that one works on one of the two intervals.

::grafico{f="log(abs(x))+sign(x);log(abs(x))" xmin=-4 xmax=4 ymin=-3.5 ymax=3 asintoti="x=0" titolo="An antiderivative of $\dfrac{1}{x}$ (in color): it equals $\ln|x| + 1$ for $x > 0$ and $\ln|x| - 1$ for $x < 0$; the dashed one is $\ln|x|$"}

:::

## The table of elementary integrals

:::teorema{#integrali-elementari titolo="Elementary integrals"}
From the **table of derivatives**, read backward:
$$
\begin{gathered}
\int x^{\alpha}\, dx = \frac{x^{\alpha+1}}{\alpha+1} + c \ \ (\alpha \neq -1), \qquad
\int \frac{1}{x}\, dx = \ln|x| + c, \\[6pt]
\int e^{x}\, dx = e^{x} + c, \qquad
\int a^{x}\, dx = \frac{a^{x}}{\ln a} + c \ \ (a > 0,\ a \neq 1), \\[6pt]
\int \sin x\, dx = -\cos x + c, \qquad
\int \cos x\, dx = \sin x + c, \\[6pt]
\int \frac{1}{\cos^2 x}\, dx = \tan x + c, \qquad
\int \frac{1}{1+x^2}\, dx = \arctan x + c, \\[6pt]
\int \frac{1}{\sqrt{1-x^2}}\, dx = \arcsin x + c .
\end{gathered}
$$
*Every* formula is verified by differentiating the right-hand side.
:::

:::teorema{#integrali-quasi-immediati titolo="Elementary integrals in composite form"}
If a function $f(x)$ appears in place of $x$ and the factor $f'(x)$ appears in the integrand, the **chain rule**, read backward, gives
$$
\begin{gathered}
\int f'(x)\, [f(x)]^{\alpha}\, dx = \frac{[f(x)]^{\alpha+1}}{\alpha+1} + c \ \ (\alpha \neq -1), \qquad
\int \frac{f'(x)}{f(x)}\, dx = \ln|f(x)| + c, \\[6pt]
\int f'(x)\, e^{f(x)}\, dx = e^{f(x)} + c, \qquad
\int f'(x) \cos f(x)\, dx = \sin f(x) + c, \\[6pt]
\int \frac{f'(x)}{1 + [f(x)]^2}\, dx = \arctan f(x) + c .
\end{gathered}
$$
These integrals are called **almost immediate**: one recognizes in the integrand the derivative $f'(x)$, possibly up to a multiplicative constant.
:::

:::esempio
$$
\int \tan x\, dx = -\int \frac{-\sin x}{\cos x}\, dx = -\ln|\cos x| + c, \qquad
\int \cos x \, \sin^2 x\, dx = \frac{\sin^3 x}{3} + c
$$
In the first integral the numerator $-\sin x$ is the derivative of the denominator $\cos x$, therefore the **formula for** $\dfrac{f'}{f}$ applies. In the second the factor $\cos x$ is the derivative of $\sin x$, therefore the formula for $f' f^{\alpha}$ with $\alpha = 2$ applies.
:::

## Integration by parts

::::teorema{#per-parti titolo="Integration by parts"}
Let $f$ and $g$ be differentiable with continuous derivative on an interval. Then
$$
\int f(x)\, g'(x)\, dx = f(x)\, g(x) - \int f'(x)\, g(x)\, dx ,
$$
and for the definite integral
$$
\int_a^b f(x)\, g'(x)\, dx = \bigl[ f(x)\, g(x) \bigr]_a^b - \int_a^b f'(x)\, g(x)\, dx .
$$
The formula exchanges the integral of $f g'$ for that of $f' g$: it is useful when the new integral is **simpler** than the original one, that is, when the factor chosen for differentiation simplifies upon differentiation.

:::dimostrazione
By the **product rule**, $(f g)' = f' g + f g'$, therefore $f g$ is an antiderivative of $f' g + f g'$. Integrating both sides gives
$$
\int f'(x)\, g(x)\, dx + \int f(x)\, g'(x)\, dx = f(x)\, g(x) + c ,
$$
and moving the first integral to the right-hand side gives the formula. The version for the definite integral follows by applying the **fundamental formula of calculus** to the antiderivative $f g$.
:::
::::

:::osservazione
Typical cases, with the choice of the factor to differentiate:

- polynomial times exponential, or times sine or cosine, as in $\displaystyle\int x e^x\, dx$: one **differentiates the polynomial**, because at each step the degree decreases; with a polynomial of degree $n$ one integrates by parts $n$ times;
- logarithm and arctangent, as in $\displaystyle\int \ln x\, dx$ and $\displaystyle\int \arctan x\, dx$: one differentiates the logarithm or the arctangent and takes $g'(x) = 1$;
- exponential times sine or cosine, as in $\displaystyle\int e^x \sin x\, dx$: one integrates by parts twice and **the original integral reappears**; the resulting equality is solved for the integral.
:::

:::esempio{titolo="The logarithm with the factor 1"}
$$
\int \ln x\, dx = \int 1 \cdot \ln x\, dx = x \ln x - \int x \cdot \frac{1}{x}\, dx = x \ln x - x + c
$$
We set $f(x) = \ln x$ and $g'(x) = 1$, therefore $f'(x) = \dfrac{1}{x}$ and $g(x) = x$. The product $x \cdot \dfrac{1}{x}$ equals $1$, hence the new integral is **immediate**.
:::

## Integration by substitution

:::teorema{#per-sostituzione titolo="Integration by substitution"}
Let $f$ be continuous and $g$ differentiable with continuous derivative. If $F$ is an antiderivative of $f$, then
$$
\int f(g(x))\, g'(x)\, dx = F(g(x)) + c ,
$$
because by the chain rule the derivative of $F(g(x))$ is $f(g(x))\, g'(x)$. The formula is used in *both directions*:

- **direct substitution**, $t = g(x)$: one writes $dt = g'(x)\, dx$ and the integral becomes $\displaystyle\int f(t)\, dt$; once an antiderivative in the variable $t$ is computed, one returns to the variable $x$ with $t = g(x)$;
- **inverse substitution**, $x = \varphi(t)$ with $\varphi$ differentiable and invertible: one writes $dx = \varphi'(t)\, dt$ and the integral $\displaystyle\int f(x)\, dx$ becomes $\displaystyle\int f(\varphi(t))\, \varphi'(t)\, dt$; at the end one returns to the variable $x$ with $t = \varphi^{-1}(x)$.

In the definite integral the substitution $t = g(x)$ transforms *the limits as well*:
$$
\int_a^b f(g(x))\, g'(x)\, dx = \int_{g(a)}^{g(b)} f(t)\, dt ,
$$
and the computation is completed in the variable $t$, *without* returning to the variable $x$.
:::

:::esempio{titolo="Typical substitutions"}
- $t = e^x$ when the integrand is a function of $e^x$; from $t = e^x$ it follows that $dt = e^x\, dx$, that is $dx = \dfrac{dt}{t}$;
- $t = \ln x$ when $\ln x$ and the factor $\dfrac{1}{x}$ appear;
- $t = \sqrt{x}$, that is $x = t^2$, to eliminate the root; more generally $t = \sqrt[n]{ax+b}$;
- $x = \sin t$ with $t \in \left[ -\dfrac{\pi}{2},\ \dfrac{\pi}{2} \right]$ for integrands containing $\sqrt{1 - x^2}$.

For example, with the substitution $t = \ln x$,
$$
\int \frac{1}{x \ln x}\, dx = \int \frac{1}{t}\, dt = \ln|t| + c = \ln\bigl|\ln x\bigr| + c .
$$
:::

## Integrals of rational functions

:::teorema{#funzioni-razionali titolo="Method of partial fractions"}
To integrate $\dfrac{P(x)}{Q(x)}$ with $P$ and $Q$ polynomials:

- if the degree of $P$ is greater than or equal to the degree of $Q$, one performs the **division with remainder**, $\dfrac{P(x)}{Q(x)} = S(x) + \dfrac{R(x)}{Q(x)}$ with the degree of $R$ less than the degree of $Q$; the polynomial $S$ is integrated with the table;
- one factors $Q$ and decomposes $\dfrac{R(x)}{Q(x)}$ into **partial fractions**;
- to each simple real root $x_0$ corresponds a term $\dfrac{A}{x - x_0}$, whose integral is $A \ln|x - x_0|$;
- to each real root $x_0$ of multiplicity $m$ correspond the terms $\dfrac{A_1}{x - x_0} + \dots + \dfrac{A_m}{(x - x_0)^m}$; for $k \geq 2$ the integral of $\dfrac{A_k}{(x - x_0)^k}$ is $-\dfrac{A_k}{(k-1)\,(x - x_0)^{k-1}}$;
- to each second-degree factor with negative discriminant (complex conjugate roots) corresponds a term $\dfrac{Ax + B}{x^2 + px + q}$: one isolates in the numerator the derivative of the denominator, which gives a logarithm, and the rest is brought by **completing the square** to the form $\dfrac{1}{u^2 + k^2}$, whose integral is $\dfrac{1}{k} \arctan \dfrac{u}{k}$.

The constants of the decomposition are determined with the **identity principle for polynomials** or by substituting the roots of the denominator.
:::

:::esempio{titolo="Simple real roots"}
$$
\frac{3x}{(x-1)(x+2)} = \frac{A}{x-1} + \frac{B}{x+2}, \qquad 3x = A(x+2) + B(x-1)
$$
For $x = 1$ we get $3 = 3A$, therefore $A = 1$; for $x = -2$ we get $-6 = -3B$, therefore $B = 2$. Hence
$$
\int \frac{3x}{(x-1)(x+2)}\, dx = \ln|x-1| + 2 \ln|x+2| + c .
$$
:::

:::esempio{titolo="The arctangent form"}
$$
\int \frac{1}{x^2 + 2x + 2}\, dx = \int \frac{1}{(x+1)^2 + 1}\, dx = \arctan(x+1) + c
$$
The trinomial $x^2 + 2x + 2$ has negative discriminant, therefore it has *no* real roots and one **completes the square**.
:::

## The Riemann definite integral

:::definizione{#integrale-di-riemann titolo="Riemann definite integral"}
Let $f$ be bounded on $[a, b]$. A **partition** $P$ of $[a, b]$ is a choice of points $a = x_0 < x_1 < \dots < x_n = b$. Setting $m_i = \inf f$ and $M_i = \sup f$ on $[x_{i-1}, x_i]$, the lower and upper sums of $f$ relative to $P$ are
$$
s(P) = \sum_{i=1}^{n} m_i\, (x_i - x_{i-1}), \qquad
S(P) = \sum_{i=1}^{n} M_i\, (x_i - x_{i-1}) .
$$
The function $f$ is **Riemann integrable** on $[a, b]$ if
$$
\sup_{P} s(P) = \inf_{P} S(P) ,
$$
and the common value is called the **definite integral** of $f$ on $[a, b]$, denoted by $\displaystyle\int_a^b f(x)\, dx$. For $f \geq 0$ the integral is the area of the region between the graph and the $x$-axis; in general it is a *signed area*, because the stretches where $f < 0$ give a negative contribution.

::grafico{f="x^2;(ceil(2*x)/2)^2+0*sqrt(x*(2-x))" area="(floor(2*x)/2)^2;0;0;1.999" segmenti="0.5,0,0.5,1;1,0,1,2.25;1.5,0,1.5,4;2,0,2,4" xmin=-0.4 xmax=2.6 ymin=-0.4 ymax=4.6 titolo="$y = x^2$ on $[0, 2]$ with the partition into four equal parts: the colored rectangles give the lower sum $s(P) = \dfrac{7}{4}$, those bounded by the dashed line the upper sum $S(P) = \dfrac{15}{4}$; the integral equals $\dfrac{8}{3}$"}

:::

:::teorema{#funzioni-integrabili titolo="Classes of integrable functions"}
If $f$ is continuous on $[a, b]$, or monotonic on $[a, b]$, then $f$ is **integrable** on $[a, b]$. The proof for continuous functions uses uniform continuity and is omitted. *Not* every bounded function is integrable: the **Dirichlet function**, which equals $1$ on the rationals and $0$ on the irrationals, has every lower sum equal to $0$ and every upper sum equal to $b - a$, therefore it is not integrable.
:::

## Properties of the integral and mean value theorem

:::teorema{#proprieta-integrale titolo="Properties of the definite integral"}
Let $f$ and $g$ be integrable on $[a, b]$ and $\alpha, \beta \in \mathbb{R}$.

- **Linearity**: $\displaystyle\int_a^b \bigl( \alpha f(x) + \beta g(x) \bigr)\, dx = \alpha \int_a^b f(x)\, dx + \beta \int_a^b g(x)\, dx$.
- **Additivity with respect to the interval**: for every $c \in [a, b]$, $\displaystyle\int_a^b f(x)\, dx = \int_a^c f(x)\, dx + \int_c^b f(x)\, dx$; with the convention $\displaystyle\int_b^a f(x)\, dx = -\int_a^b f(x)\, dx$ the formula holds however the three points are ordered.
- **Monotonicity**: if $f(x) \leq g(x)$ for every $x \in [a, b]$, then $\displaystyle\int_a^b f(x)\, dx \leq \int_a^b g(x)\, dx$.
- **Absolute value inequality**: $\displaystyle\left| \int_a^b f(x)\, dx \right| \leq \int_a^b |f(x)|\, dx$, which follows from monotonicity applied to $-|f| \leq f \leq |f|$.

Additivity is used to integrate piecewise-defined functions and those with absolute values: the interval is split at the points where the expression changes.
:::

::::teorema{#teorema-della-media titolo="Mean value theorem for integrals"}
If $f$ is continuous on $[a, b]$, there exists $c \in [a, b]$ such that
$$
\int_a^b f(x)\, dx = f(c)\,(b - a) .
$$
The number $\dfrac{1}{b-a} \displaystyle\int_a^b f(x)\, dx$ is the **integral mean** of $f$ on $[a, b]$, therefore the theorem states that a continuous function **attains its own mean**. It is used in the proof of the fundamental theorem of calculus.

::grafico{f="x^2" area="x^2;0;0;2" segmenti="0,1.3333,2,1.3333;2,0,2,1.3333;1.1547,0,1.1547,1.3333" punti="1.1547,1.3333,pieno;1.1547,0,pieno,c" xmin=-0.4 xmax=2.6 ymin=-0.4 ymax=4.6 titolo="For $f(x) = x^2$ on $[0, 2]$ the integral mean is $\dfrac{4}{3}$: the dashed rectangle with base $[0, 2]$ and height $\dfrac{4}{3}$ has the same area as the colored region, and $f(c) = \dfrac{4}{3}$ for $c = \dfrac{2}{\sqrt{3}}$"}

:::dimostrazione
By **Weierstrass's theorem** $f$ has a minimum $m$ and a maximum $M$ on $[a, b]$. Since $m \leq f(x) \leq M$ for every $x \in [a, b]$, by the monotonicity of the integral
$$
m\,(b - a) \leq \int_a^b f(x)\, dx \leq M\,(b - a) ,
$$
therefore the number $\mu = \dfrac{1}{b-a} \displaystyle\int_a^b f(x)\, dx$ belongs to $[m, M]$. By the **intermediate value theorem** $f$ takes *all* values between $m$ and $M$, hence there exists $c \in [a, b]$ with $f(c) = \mu$, which is the claim.
:::
::::

:::richiamo{titolo="Weierstrass's theorem"}
If $f$ is continuous on $[a, b]$, it has a maximum and a minimum: there exist $x_m, x_M \in [a, b]$ with $f(x_m) \leq f(x) \leq f(x_M)$ for every $x \in [a, b]$.
:::

:::richiamo{titolo="Intermediate value theorem"}
If $f$ is continuous on $[a, b]$ with minimum $m$ and maximum $M$, for every $y \in [m, M]$ there exists $x \in [a, b]$ with $f(x) = y$.
:::

## Integral function and fundamental theorem of calculus

:::definizione{#funzione-integrale titolo="Integral function"}
Let $f$ be integrable on $[a, b]$. The **integral function** with initial point $a$ is
$$
F(x) = \int_a^x f(t)\, dt, \qquad x \in [a, b] .
$$
The variable $x$ is the upper limit of integration; the integration variable $t$ is a *dummy* variable and is denoted by a letter different from $x$. The integral function builds a new function from $f$ even when the antiderivatives cannot be written in terms of elementary functions, as for $f(t) = e^{-t^2}$.

::grafico{f="exp(-x^2)" area="exp(-x^2);0;0;1.2" punti="1.2,0,pieno,x" nomi="t,y" xmin=-2.5 xmax=2.5 ymin=-0.2 ymax=1.3 titolo="For $x > 0$, $F(x) = \int_0^x e^{-t^2} dt$ is the colored area under the graph of $y = e^{-t^2}$ between $0$ and $x$: moving $x$ changes the area"}

:::

::::teorema{#teorema-fondamentale titolo="Fundamental theorem of calculus"}
Let $f$ be continuous on $[a, b]$. Then the integral function $F(x) = \displaystyle\int_a^x f(t)\, dt$ is differentiable on $[a, b]$ and
$$
F'(x) = f(x) \qquad \text{for every } x \in [a, b] ,
$$
where at the endpoints $a$ and $b$ the right and the left derivative are meant. Therefore *every* continuous function on an interval **has antiderivatives**, and the integral function is one of them. The theorem links differentiation and integration, and the fundamental formula of calculus follows from it.

::grafico{f="2+sin(x)" area="2+sin(x);0;1;2" punti="1,0,pieno,x;2,0,pieno,x + h" nomi="t,y" xmin=-0.4 xmax=3.6 ymin=-0.4 ymax=3.6 titolo="$F(x + h) - F(x)$ is the area of the colored strip between $x$ and $x + h$, under the graph of $f$; by the mean value theorem for integrals it equals $f(c_h) \cdot h$"}

:::dimostrazione
Let $x \in [a, b]$ and $h \neq 0$ with $x + h \in [a, b]$. By the **additivity** of the integral with respect to the interval
$$
F(x + h) - F(x) = \int_x^{x+h} f(t)\, dt .
$$
By the **mean value theorem for integrals** applied to the interval with endpoints $x$ and $x + h$ there exists $c_h$, between $x$ and $x + h$, such that $\displaystyle\int_x^{x+h} f(t)\, dt = f(c_h)\, h$; for $h < 0$ the theorem is applied on $[x + h,\ x]$ and the convention on swapping the limits gives the same equality. Therefore
$$
\frac{F(x + h) - F(x)}{h} = f(c_h) .
$$
As $h \to 0$ the point $c_h$, lying between $x$ and $x + h$, tends to $x$; since $f$ is continuous at $x$, we have $f(c_h) \to f(x)$. Hence $F$ is **differentiable** at $x$ and $F'(x) = f(x)$.
:::
::::

:::richiamo{titolo="Mean value theorem for integrals"}
If $f$ is continuous on $[a, b]$, there exists $c \in [a, b]$ such that $\displaystyle\int_a^b f(x)\, dx = f(c)\,(b - a)$.
:::

:::teorema{#formula-fondamentale titolo="Fundamental formula of calculus"}
If $f$ is continuous on $[a, b]$ and $G$ is an antiderivative of $f$, then
$$
\int_a^b f(x)\, dx = G(b) - G(a) = \bigl[ G(x) \bigr]_a^b .
$$
It follows from the **fundamental theorem**: the integral function $F$ and $G$ are antiderivatives of the *same* function on the interval $[a, b]$, therefore $G = F + c$, hence $G(b) - G(a) = F(b) - F(a) = \displaystyle\int_a^b f(x)\, dx$, since $F(a) = 0$.
:::

:::esempio
$$
\int_0^{\pi} \sin x\, dx = \bigl[ -\cos x \bigr]_0^{\pi} = -\cos \pi + \cos 0 = 2
$$
An antiderivative of $\sin x$ is $-\cos x$, therefore one **evaluates the antiderivative at the limits** and subtracts.
:::

:::teorema{#estremi-variabili titolo="Derivative of an integral function with variable limits"}
Let $f$ be continuous and $\alpha$, $\beta$ differentiable. Then the function
$$
H(x) = \int_{\alpha(x)}^{\beta(x)} f(t)\, dt
$$
is differentiable and
$$
H'(x) = f(\beta(x))\, \beta'(x) - f(\alpha(x))\, \alpha'(x) .
$$
The formula follows by writing $H(x) = F(\beta(x)) - F(\alpha(x))$, with $F$ an antiderivative of $f$, and differentiating the **composite functions**, since $F' = f$ by the **fundamental theorem**. For example
$$
\frac{d}{dx} \int_0^{x^3} \cos(t^2)\, dt = 3x^2 \cos(x^6) .
$$
:::

## Areas between curves

:::teorema{#aree titolo="Area between two curves"}
Let $f$ and $g$ be continuous on $[a, b]$ with $f(x) \geq g(x)$ for every $x \in [a, b]$. The area of the region between the two graphs is
$$
\mathcal{A} = \int_a^b \bigl( f(x) - g(x) \bigr)\, dx .
$$
The formula holds *also* when the two functions take negative values, because the integral contains the difference $f - g$, which is nonnegative. If the graphs intersect, one solves $f(x) = g(x)$, splits the interval at the intersection points using additivity and on each stretch integrates the **difference between the greater and the smaller function**. For $g = 0$ one obtains the area between the graph of $f$ and the $x$-axis.

::grafico{f="1-x^2;-x-1" area="1-x^2;-x-1;-1;2" punti="-1,0,pieno;2,-3,pieno" xmin=-2 xmax=3 ymin=-4 ymax=2 titolo="The region between $y = 1 - x^2$ and $y = -x - 1$ (dashed) on $[-1, 2]$ lies mostly below the $x$-axis; its area is $\int_{-1}^{2} (2 + x - x^2) dx = \dfrac{9}{2}$"}

:::

:::attenzione
When $f$ changes sign, the integral and the area are **different numbers**. We have $\displaystyle\int_0^{2\pi} \sin x\, dx = 0$, while the area between the graph and the $x$-axis on $[0, 2\pi]$ equals $\displaystyle\int_0^{\pi} \sin x\, dx - \int_{\pi}^{2\pi} \sin x\, dx = 4$: the two arches have *equal* areas and *opposite* contributions to the integral.

::grafico{f="sin(x)" area="sin(x);0;0;6.2832" etichette="1.45,0.4,+;4.55,-0.55,−" xmin=-0.5 xmax=7 ymin=-1.5 ymax=1.5 titolo="On $[0, 2\pi]$ the two arches of $y = \sin x$ bound regions of area $2$, which contribute to the integral with $+2$ and with $-2$"}

:::

:::esempio
Area of the region between the parabola $y = x^2$ and the line $y = x$. From $x^2 = x$ we obtain the intersections $x = 0$ and $x = 1$; on $[0, 1]$ the line lies **above** the parabola, therefore
$$
\mathcal{A} = \int_0^1 (x - x^2)\, dx = \left[ \frac{x^2}{2} - \frac{x^3}{3} \right]_0^1 = \frac{1}{2} - \frac{1}{3} = \frac{1}{6} .
$$

::grafico{f="x;x^2" area="x;x^2;0;1" punti="0,0,pieno;1,1,pieno" xmin=-0.5 xmax=1.6 ymin=-0.4 ymax=1.6 titolo="The region between the line $y = x$ and the parabola $y = x^2$ (dashed) for $0 \leq x \leq 1$: its area is $\dfrac{1}{6}$"}

:::
