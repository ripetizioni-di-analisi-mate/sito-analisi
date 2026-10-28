---
titolo: Improper integrals
sommario: How the integral extends to unbounded intervals and to unbounded functions, which benchmark integrals serve as reference, and how the comparison tests establish convergence without computing an antiderivative.
---

## Integral over an unbounded interval

:::definizione{#integrale-su-intervallo-illimitato titolo="Integral over an unbounded interval"}
Let $f : [a, +\infty) \to \mathbb{R}$ be integrable on $[a, t]$ for every $t > a$. The **improper integral** of $f$ over $[a, +\infty)$ is
$$
\int_a^{+\infty} f(x)\,dx = \lim_{t \to +\infty} \int_a^{t} f(x)\,dx .
$$
The integral is called

- **convergent**, if the limit exists and is finite;
- **divergent**, if the limit is $+\infty$ or $-\infty$;
- **indeterminate**, if the limit does not exist.

On $(-\infty, b]$ the definition uses the limit as $t \to -\infty$ of the integral over $[t, b]$. Establishing which of the three cases an integral falls into, that is, its **behavior**, is the problem of this chapter.

::grafico{f="1/x^2" area="1/x^2;0;1;4" punti="4,0,pieno,t" xmin=-0.5 xmax=9 ymin=-0.15 ymax=1.25 titolo="The integral over $[1, t]$ is the shaded area under $y = \dfrac{1}{x^2}$ and equals $1 - \dfrac{1}{t}$; the improper integral is the limit of this area as $t \to +\infty$, that is, $1$"}

:::

:::esempio{titolo="The three behaviors"}
$$
\int_1^{t} \frac{dx}{x^2} = 1 - \frac{1}{t} \to 1, \qquad
\int_1^{t} \frac{dx}{x} = \ln t \to +\infty, \qquad
\int_0^{t} \cos x \,dx = \sin t .
$$
The first integral **converges** and equals $1$; the second **diverges**; the third is **indeterminate**, because $\sin t$ as $t \to +\infty$ oscillates between $-1$ and $1$ without admitting a limit.
:::

:::osservazione
The behavior depends *only* on what happens near the critical point. For $a < b$ the integrals over $[a, +\infty)$ and over $[b, +\infty)$ differ by the ordinary integral over $[a, b]$, therefore they have the **same behavior**. For this reason the tests in this chapter require their hypotheses only **eventually**, that is, from some point on.
:::

## Integral of an unbounded function

:::definizione{#integrale-di-funzione-illimitata titolo="Integral of a function unbounded near an endpoint"}
Let $f : (a, b] \to \mathbb{R}$ be integrable on $[t, b]$ for every $t \in (a, b]$ and unbounded near $a$. One sets
$$
\int_a^{b} f(x)\,dx = \lim_{t \to a^{+}} \int_t^{b} f(x)\,dx ,
$$
with the same terminology: convergent, divergent, indeterminate. If $f$ is unbounded near $b$, one uses the limit as $t \to b^{-}$ of the integral over $[a, t]$. An endpoint near which the function is unbounded, as well as an infinite endpoint, is called a **critical point** of the integral.
:::

:::esempio
$$
\int_t^{1} \frac{dx}{x} = -\ln t \to +\infty \quad (t \to 0^{+}),
\qquad
\int_t^{1} \frac{dx}{\sqrt{x}} = 2 - 2\sqrt{t} \to 2 .
$$
The integral of $\dfrac{1}{x}$ over $(0, 1]$ **diverges**, while that of $\dfrac{1}{\sqrt{x}}$ **converges** and equals $2$, even though *both* integrands tend to $+\infty$ as $x \to 0^{+}$.

::grafico{f="1/sqrt(x);1/x" area="1/sqrt(x);0;0.0001;1" segmenti="1,0,1,1" xmin=-0.3 xmax=3 ymin=-0.3 ymax=6 titolo="On $(0, 1]$ the shaded area under $y = \dfrac{1}{\sqrt{x}}$ is finite and equals $2$; under $y = \dfrac{1}{x}$ (dashed), which grows faster near $0$, the area is infinite"}

:::

## Several critical points

:::definizione{#piu-punti-critici titolo="Integral with several critical points"}
If there is more than one critical point (both endpoints, or interior points near which the function is unbounded), one fixes intermediate points and the integral **is split** into a sum of integrals with one critical point each. The integral converges if *all* the pieces converge, and its value is the sum of their values; if *at least one* piece does not converge, the integral **does not converge**. By the additivity of the integral, behavior and value do not depend on the choice of the intermediate points.
$$
\int_0^{+\infty} \frac{dx}{\sqrt{x}\,(1 + x)}
= \int_0^{1} \frac{dx}{\sqrt{x}\,(1 + x)} + \int_1^{+\infty} \frac{dx}{\sqrt{x}\,(1 + x)}
$$
The first piece has critical point $0$, where the integrand is unbounded; the second has critical point $+\infty$.
:::

:::attenzione
The **fundamental theorem of calculus** applies when the integrand is continuous on the *whole* closed interval. For $\displaystyle\int_{-1}^{1} \frac{dx}{x^2}$ the direct computation with the antiderivative $-\dfrac{1}{x}$ would give $-2$, a negative value for a positive function; the critical point $x = 0$ is interior, and each of the two integrals over $[-1, 0)$ and over $(0, 1]$ **diverges**.

::grafico{f="1/x^2" area="1/x^2;0;-1;-0.001|1/x^2;0;0.001;1" asintoti="x=0" xmin=-2 xmax=2 ymin=-0.5 ymax=8 titolo="$y = \dfrac{1}{x^2}$ is positive on $[-1, 0)$ and on $(0, 1]$ and unbounded near $0$: each of the two shaded regions has infinite area"}

:::

## Benchmark integrals

The comparison tests reduce every integral to a few **reference integrals**, computed once and for all.

::::teorema{#integrali-campione titolo="Benchmark integrals of powers"}
For $\alpha \in \mathbb{R}$:
$$
\int_1^{+\infty} \frac{dx}{x^{\alpha}}
\ \text{converges if and only if } \alpha > 1,
\qquad
\int_0^{1} \frac{dx}{x^{\alpha}}
\ \text{converges if and only if } \alpha < 1 .
$$
In case of convergence the values are $\dfrac{1}{\alpha - 1}$ and $\dfrac{1}{1 - \alpha}$. At infinity the powers that converge are those that tend to $0$ *faster* than $\dfrac{1}{x}$; near $0$ the powers that converge are those that tend to infinity *more slowly* than $\dfrac{1}{x}$. The two conditions are incompatible, therefore $\displaystyle\int_0^{+\infty} \frac{dx}{x^{\alpha}}$ **does not converge** for any value of $\alpha$. These integrals are the terms of comparison of the comparison tests.

::grafico{f="1/sqrt(x);1/x;1/x^2" segmenti="1,0,1,1" punti="1,1,pieno" xmin=-0.3 xmax=5 ymin=-0.3 ymax=4 titolo="$y = \dfrac{1}{\sqrt{x}}$ (in color), $y = \dfrac{1}{x}$ (dashed), $y = \dfrac{1}{x^2}$ (in red): for $x > 1$ the lowest is $\dfrac{1}{x^2}$, for $0 < x < 1$ the lowest is $\dfrac{1}{\sqrt{x}}$"}

:::dimostrazione
For $\alpha \neq 1$ an antiderivative of $x^{-\alpha}$ is $\dfrac{x^{1 - \alpha}}{1 - \alpha}$, therefore
$$
\int_1^{t} \frac{dx}{x^{\alpha}} = \frac{t^{1 - \alpha} - 1}{1 - \alpha} .
$$
If $\alpha > 1$ the exponent $1 - \alpha$ is negative, hence $t^{1 - \alpha} \to 0$ and the integral **converges** to the value $\dfrac{1}{\alpha - 1}$. If $\alpha < 1$ the exponent is positive, hence $t^{1 - \alpha} \to +\infty$ and the integral **diverges**. For $\alpha = 1$ one has $\displaystyle\int_1^{t} \frac{dx}{x} = \ln t \to +\infty$. Near $0$, for $\alpha \neq 1$,
$$
\int_t^{1} \frac{dx}{x^{\alpha}} = \frac{1 - t^{1 - \alpha}}{1 - \alpha} ;
$$
as $t \to 0^{+}$ the power $t^{1 - \alpha}$ tends to $0$ if $\alpha < 1$, with convergence to the value $\dfrac{1}{1 - \alpha}$, and tends to $+\infty$ if $\alpha > 1$, with divergence. For $\alpha = 1$ one has $\displaystyle\int_t^{1} \frac{dx}{x} = -\ln t \to +\infty$.
:::
::::

:::esempio{titolo="A finite area and an infinite area"}
The area under $y = \dfrac{1}{x^{2}}$ over $[1, +\infty)$ is **finite** and equals $1$, while the area under $y = \dfrac{1}{x}$ is **infinite**, even though both functions tend to $0$. The behavior of the integral measures the *rate* at which the integrand tends to $0$.

::grafico{f="1/x" area="1/x;0;1;10" punti="1,1,pieno" xmin=-0.5 xmax=10 ymin=-0.15 ymax=1.25 titolo="$y = \dfrac{1}{x}$ on $[1, +\infty)$: the integral diverges"}

::grafico{f="1/x^2" area="1/x^2;0;1;10" punti="1,1,pieno" xmin=-0.5 xmax=10 ymin=-0.15 ymax=1.25 titolo="$y = \dfrac{1}{x^2}$ on $[1, +\infty)$: the integral converges and equals $1$"}

:::

::::teorema{#campione-logaritmico titolo="Benchmark integral with the logarithm"}
For $\beta \in \mathbb{R}$:
$$
\int_2^{+\infty} \frac{dx}{x\,(\ln x)^{\beta}} \ \text{converges if and only if } \beta > 1 .
$$
For $\beta > 0$ the integrand tends to $0$ faster than $\dfrac{1}{x}$ and more slowly than every $\dfrac{1}{x^{\alpha}}$ with $\alpha > 1$, therefore comparison with powers leaves the behavior *open*; this benchmark covers the **intermediate cases**.

:::dimostrazione
With the substitution $u = \ln x$, $du = \dfrac{dx}{x}$,
$$
\int_2^{t} \frac{dx}{x\,(\ln x)^{\beta}} = \int_{\ln 2}^{\ln t} \frac{du}{u^{\beta}} ,
$$
and $\ln t \to +\infty$ as $t \to +\infty$, therefore the integral has the same behavior as $\displaystyle\int_{\ln 2}^{+\infty} \frac{du}{u^{\beta}}$. Moving the lower endpoint from $1$ to $\ln 2$ does not change the behavior, hence the benchmark of powers yields **convergence** *if and only if* $\beta > 1$.
:::
::::

## Comparison test

::::teorema{#criterio-del-confronto titolo="Comparison test"}
Let $f, g : [a, +\infty) \to \mathbb{R}$ be integrable on $[a, t]$ for every $t > a$, with $0 \leq f(x) \leq g(x)$ for every $x \geq a$.

- If $\displaystyle\int_a^{+\infty} g(x)\,dx$ converges, then $\displaystyle\int_a^{+\infty} f(x)\,dx$ converges.
- If $\displaystyle\int_a^{+\infty} f(x)\,dx$ diverges, then $\displaystyle\int_a^{+\infty} g(x)\,dx$ diverges.

The statement also holds for a finite critical point, with the inequalities required near the critical point. The test establishes the behavior by comparing the integrand with a benchmark, *without* looking for an antiderivative.

:::dimostrazione
The integral function $F(t) = \displaystyle\int_a^{t} f(x)\,dx$ is increasing, since for $t_1 < t_2$ the difference $F(t_2) - F(t_1) = \displaystyle\int_{t_1}^{t_2} f(x)\,dx$ is nonnegative, given that $f \geq 0$. Suppose that the integral of $g$ converges with value $S$. The function $G(t) = \displaystyle\int_a^{t} g(x)\,dx$ is also increasing, because $g \geq f \geq 0$; since $G$ is increasing and tends to $S$, one has $G(t) \leq S$ for every $t$. The monotonicity of the integral with respect to the integrand then gives
$$
F(t) \leq G(t) \leq S \qquad \text{for every } t > a ,
$$
therefore $F$ is **increasing and bounded above**. Setting $\Lambda = \sup F \in \mathbb{R}$, for every $\varepsilon > 0$ there exists $t_0$ with $F(t_0) > \Lambda - \varepsilon$, and for every $t > t_0$ monotonicity gives
$$
\Lambda - \varepsilon < F(t_0) \leq F(t) \leq \Lambda ,
$$
hence $F(t) \to \Lambda$ as $t \to +\infty$ and the integral of $f$ **converges**. The second part is the **contrapositive** of the first, since if the integral of $g$ converged, then by what has just been proved the integral of $f$ would also converge.
:::
::::

:::osservazione
For a nonnegative function the integral function is increasing, therefore its limit **always exists**, either finite or equal to $+\infty$, by the monotonicity argument of the previous proof. The integral of a nonnegative function thus either converges or diverges to $+\infty$; the indeterminate behavior can occur *only* with integrands that change sign, such as $\cos x$.
:::

:::esempio
$$
\int_1^{+\infty} \frac{2 + \sin x}{x^3}\,dx
$$
For every $x$ one has $1 \leq 2 + \sin x \leq 3$, therefore $0 \leq \dfrac{2 + \sin x}{x^{3}} \leq \dfrac{3}{x^{3}}$. The integral of $\dfrac{3}{x^{3}}$ over $[1, +\infty)$ converges, because it is the benchmark with $\alpha = 3$ multiplied by the constant $3$, hence the given integral **converges** by the **comparison test**.
:::

## Limit comparison

::::teorema{#confronto-asintotico titolo="Limit comparison test"}
Let $f$ and $g$ be positive near the critical point $c$ (an infinite endpoint or a finite point) and integrable on the closed and bounded intervals that do not touch $c$. If $f(x) \sim g(x)$ as $x \to c$, then the integrals of $f$ and of $g$ near $c$ have the **same behavior**. In practice $g$ is a benchmark, found through the asymptotic equivalences of the standard limits or through Taylor expansions.

:::dimostrazione
Since $\dfrac{f(x)}{g(x)} \to 1$, the definition of limit with $\varepsilon = \dfrac{1}{2}$ gives a neighborhood of $c$ in which $\dfrac{1}{2} < \dfrac{f(x)}{g(x)} < \dfrac{3}{2}$, that is,
$$
\frac{1}{2}\,g(x) < f(x) < \frac{3}{2}\,g(x) .
$$
If the integral of $g$ converges, the integral of $\dfrac{3}{2}\,g$ also converges, therefore the integral of $f$ converges by the **comparison test**. If the integral of $g$ diverges, the integral of $\dfrac{1}{2}\,g$ also diverges and, since $f > \dfrac{1}{2}\,g$, again by comparison the integral of $f$ diverges. For positive integrands the possible behaviors are *only* convergence and divergence, by the remark on the monotonicity of the integral function, therefore in both cases the integrals of $f$ and of $g$ have the same behavior.
:::
::::

:::richiamo{titolo="Comparison test"}
If $0 \leq f(x) \leq g(x)$ near the critical point, the convergence of the integral of $g$ implies the convergence of the integral of $f$, and the divergence of the integral of $f$ implies the divergence of the integral of $g$.
:::

:::osservazione
If $f$ and $g$ are positive and $\dfrac{f(x)}{g(x)} \to L$ as $x \to c$, the comparison adapts to the three cases.

- $L \in (0, +\infty)$. Then $f \sim L\,g$ and the integrals have the same behavior, because the constant $L$ does *not* change the behavior.
- $L = 0$. Eventually $f(x) < g(x)$, therefore if the integral of $g$ converges, the integral of $f$ converges.
- $L = +\infty$. Eventually $f(x) > g(x)$, therefore if the integral of $g$ diverges, the integral of $f$ diverges.
:::

:::esempio
$$
\int_0^{1} \frac{dx}{\sin x}
$$
As $x \to 0^{+}$ one has $\sin x \sim x$ (standard limit), therefore $\dfrac{1}{\sin x} \sim \dfrac{1}{x}$. The benchmark with $\alpha = 1$ on $(0, 1]$ diverges, hence the integral **diverges** by **limit comparison**.

::grafico{f="1/sin(x);1/x" xmin=-0.2 xmax=2 ymin=-0.5 ymax=6 titolo="Near $0$ the graphs of $y = \dfrac{1}{\sin x}$ and of $y = \dfrac{1}{x}$ (dashed) almost coincide, because $\sin x \sim x$"}

:::

## Order of infinitesimal and of infinity of the integrand

:::definizione{#ordine-di-infinitesimo titolo="Order of infinitesimal and of infinity"}
A positive function $f$ is **infinitesimal of order** $p > 0$ as $x \to +\infty$ if $f(x) \sim \dfrac{c}{x^{p}}$ with $c > 0$; it is **infinite of order** $p > 0$ as $x \to x_0$ if $f(x) \sim \dfrac{c}{|x - x_0|^{p}}$. Limit comparison with the benchmarks yields the complete picture.

- As $x \to +\infty$ the integral **converges** if $p > 1$ and **diverges** if $p \leq 1$.
- At a finite critical point the integral **converges** if $p < 1$ and **diverges** if $p \geq 1$.

The order is determined by replacing the factors of the integrand with simpler asymptotically equivalent functions, obtained from the standard limits and from Taylor expansions; for these tools see the chapter on limits and the one on differential calculus.
:::

:::esempio{titolo="Order via a Taylor expansion"}
$$
\int_0^{1} \frac{x - \sin x}{x^{\frac{7}{2}}}\,dx
$$
The expansion $\sin x = x - \dfrac{x^{3}}{6} + o(x^{3})$ gives $x - \sin x \sim \dfrac{x^{3}}{6}$ as $x \to 0^{+}$, therefore the integrand is asymptotic to $\dfrac{x^{3}}{6\,x^{\frac{7}{2}}} = \dfrac{1}{6\sqrt{x}}$. The **order of infinity** at the critical point $0$ is $\dfrac{1}{2} < 1$, hence the integral **converges**.
:::

:::esempio{titolo="Order via a standard limit"}
$$
\int_1^{+\infty} \ln\!\left(1 + \frac{1}{x^{2}}\right) dx
$$
As $x \to +\infty$ one has $\dfrac{1}{x^{2}} \to 0$, and $\ln(1 + t) \sim t$ as $t \to 0$, therefore the integrand is asymptotic to $\dfrac{1}{x^{2}}$. The **order of infinitesimal** is $2 > 1$, hence the integral **converges**.
:::

## Absolute convergence

:::teorema{#convergenza-assoluta titolo="Absolute convergence implies convergence"}
The integral of $f$ **converges absolutely** if the integral of $|f|$ converges. If $\displaystyle\int_a^{+\infty} |f(x)|\,dx$ converges, then $\displaystyle\int_a^{+\infty} f(x)\,dx$ converges and
$$
\left| \int_a^{+\infty} f(x)\,dx \right| \leq \int_a^{+\infty} |f(x)|\,dx .
$$
The proof applies the comparison test to the nonnegative function $f + |f| \leq 2\,|f|$ and writes $f = (f + |f|) - |f|$; the same statement holds for finite critical points. The comparison tests require *nonnegative* integrands, therefore with integrands of varying sign one passes to the absolute value and applies this theorem.
:::

:::esempio
$$
\int_1^{+\infty} \frac{\cos x}{x^{2}}\,dx
$$
One has $\left| \dfrac{\cos x}{x^{2}} \right| \leq \dfrac{1}{x^{2}}$ and the benchmark with $\alpha = 2$ converges, therefore the integral **converges absolutely**, and hence **converges**.
:::

:::attenzione
The converse implication does *not* hold: $\displaystyle\int_1^{+\infty} \frac{\sin x}{x}\,dx$ converges, but $\displaystyle\int_1^{+\infty} \frac{|\sin x|}{x}\,dx$ diverges, therefore convergence **does not imply** absolute convergence.

::grafico{f="sin(x)/x;abs(sin(x))/x" area="sin(x)/x;0;1;20" xmin=-0.5 xmax=20.5 ymin=-0.4 ymax=1.1 titolo="The shaded areas below and above the axis, bounded by $y = \dfrac{\sin x}{x}$, offset each other and the integral converges; $y = \dfrac{|\sin x|}{x}$ (dashed) flips the negative arcs above the axis, and its area is infinite"}

:::

## Notable integrals

:::teorema{#integrali-notevoli titolo="Three notable integrals"}
$$
\int_0^{+\infty} e^{-x}\,dx = 1, \qquad
\int_{-\infty}^{+\infty} e^{-x^{2}}\,dx = \sqrt{\pi}, \qquad
\int_0^{+\infty} \frac{\sin x}{x}\,dx = \frac{\pi}{2} .
$$
The first is computed with the definition, since $\displaystyle\int_0^{t} e^{-x}\,dx = 1 - e^{-t} \to 1$. The second is the **Gaussian integral**, at the basis of probability theory; it converges by comparison, given that for $x \geq 1$ one has $x^{2} \geq x$ and therefore, since the exponential is increasing, $e^{-x^{2}} \leq e^{-x}$; there are two critical points, the integrand is even and on $[0, 1]$ the integral is ordinary, hence convergence on $[1, +\infty)$ suffices. The value $\sqrt{\pi}$ is obtained with double integrals and is deferred to the Mathematical Analysis 2 course. The third converges, as is proved with an integration by parts, but **does not converge absolutely**; the value $\dfrac{\pi}{2}$ requires more advanced tools and is assumed. At $0$ the integrand $\dfrac{\sin x}{x}$ extends continuously, because it tends to $1$, therefore $0$ is *not* a critical point.

::grafico{f="exp(-x^2);exp(-x)" area="exp(-x^2);0;-3.2;3.2" xmin=-3.3 xmax=3.3 ymin=-0.2 ymax=1.3 titolo="The shaded area under the Gaussian $y = e^{-x^2}$ equals $\sqrt{\pi}$; for $x \geq 1$ the graph lies below that of $y = e^{-x}$ (dashed)"}

:::
