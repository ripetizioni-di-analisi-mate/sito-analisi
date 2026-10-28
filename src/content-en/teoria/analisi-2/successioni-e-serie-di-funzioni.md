---
titolo: Sequences and series of functions
sommario: Pointwise convergence and uniform convergence of a sequence of functions, the theorems on passing continuity, integrals and derivatives to the limit, and total convergence for series of functions.
---

## Sequences of functions and pointwise convergence

:::definizione{#successione-di-funzioni titolo="Sequence of functions"}
A **sequence of functions** is a family $(f_n)_{n \in \mathbb{N}}$ of functions $f_n : A \to \mathbb{R}$, all defined on the same set $A \subseteq \mathbb{R}$. For each fixed $x \in A$, the values $f_1(x), f_2(x), f_3(x), \dots$ form a numerical sequence. Examples: $f_n(x) = x^n$ on $[0, 1]$, $f_n(x) = \dfrac{\sin(n x)}{n}$ on $\mathbb{R}$. The chapter answers two questions: in what sense $f_n$ can tend to a limit function $f$, and which properties of $f_n$ (continuity, integral, derivative) pass to the function $f$.
:::

:::definizione{#convergenza-puntuale titolo="Pointwise convergence"}
The sequence $(f_n)$ **converges pointwise** to $f$ on $A$ if for every $x \in A$ the numerical sequence $f_n(x)$ converges to $f(x)$, that is, if
$$
\lim_{n \to +\infty} f_n(x) = f(x) \qquad \text{for every } x \in A .
$$
In the $\varepsilon$ definition: for every $x \in A$ and every $\varepsilon > 0$ there exists $N$ such that $|f_n(x) - f(x)| < \varepsilon$ for every $n \geq N$; the index $N$ depends on $\varepsilon$ and *also* on the point $x$. Pointwise convergence is studied with the methods for limits of sequences from Analysis 1, one point at a time, and it determines the candidate limit $f$: every other notion of convergence in the chapter compares $f_n$ with this function.
:::

:::esempio{titolo="The sequence xⁿ on [0, 1]"}
$f_n(x) = x^n$ on $[0, 1]$. For $0 \leq x < 1$ the geometric sequence $x^n$ tends to $0$; for $x = 1$ we have $f_n(1) = 1$ for every $n$. The pointwise limit is therefore
$$
f(x) =
\begin{cases}
0 & \text{if } 0 \leq x < 1 \\[4pt]
1 & \text{if } x = 1
\end{cases}
$$
As $n$ increases the graph drops toward the $x$-axis on the whole interval $[0, 1)$, but *every* curve rises back up to the point $(1, 1)$.

::grafico{f="x^3" xmin=0 xmax=1.15 ymin=0 ymax=1.15 punti="1,1" titolo="y = x³: the curve is already close to 0 on half the interval, but it still reaches (1, 1)"}

::grafico{f="x^15" xmin=0 xmax=1.15 ymin=0 ymax=1.15 punti="1,1" titolo="y = x¹⁵: almost the whole graph is flattened onto the x-axis, then it rises sharply toward (1, 1)"}
:::

:::attenzione
The pointwise limit of continuous functions need not be continuous. Each $f_n(x) = x^n$ is continuous on $[0, 1]$, but the pointwise limit equals $0$ on $[0, 1)$ and $1$ at the point $1$, so it is discontinuous. Pointwise convergence **does not preserve continuity**; preserving it requires the stronger notion introduced below.

::grafico{f="0*sqrt(1-x);x^2;x^12" xmin=0 xmax=1.2 ymin=-0.15 ymax=1.2 punti="1,0,vuoto;1,1,pieno" etichette="0.62,0.5,y = x²;0.86,0.12,y = x¹²" titolo="$y = x^2$ and $y = x^{12}$ with the pointwise limit (in color): it equals $0$ on $[0, 1)$, on the $x$-axis, and $1$ at the point $x = 1$"}
:::

## Uniform convergence

:::definizione{#convergenza-uniforme titolo="Uniform convergence"}
The sequence $(f_n)$ **converges uniformly** to $f$ on $A$ if for every $\varepsilon > 0$ there exists $N$ such that
$$
|f_n(x) - f(x)| < \varepsilon \qquad \text{for every } n \geq N \text{ and for every } x \in A .
$$
The difference from pointwise convergence lies in the order of the requirements: the *same* index $N$ works for *all* points $x \in A$ simultaneously. Geometrically, for $n \geq N$ the graph of $f_n$ is contained in the tube of radius $\varepsilon$ around the graph of $f$, that is, in the strip between $f - \varepsilon$ and $f + \varepsilon$. Uniform convergence implies pointwise convergence; the counterexamples below show that the converse does not hold.

::grafico{f="sin(x)+0.2*sin(5*x);sin(x)" area="sin(x)+0.3;sin(x)-0.3;0;6.6" xmin=0 xmax=6.6 ymin=-1.6 ymax=1.6 titolo="Strip between $f - \varepsilon$ and $f + \varepsilon$ with $f(x) = \sin x$ (dashed) and $\varepsilon = \dfrac{3}{10}$: the graph of $f_5(x) = \sin x + \dfrac{\sin(5x)}{5}$ lies entirely inside the strip, because $|f_5(x) - f(x)| \leq \dfrac{1}{5}$ for every $x$"}
:::

:::teorema{#criterio-del-sup titolo="Sup criterion"}
$(f_n)$ converges uniformly to $f$ on $A$ *if and only if*
$$
M_n = \sup_{x \in A} \, |f_n(x) - f(x)| \xrightarrow[n \to +\infty]{} 0 .
$$
The equivalence follows from the definition, since $|f_n(x) - f(x)| < \varepsilon$ for every $x \in A$ is equivalent to $M_n \leq \varepsilon$. The criterion turns the study of uniform convergence into an Analysis 1 problem: for each $n$ one looks for the maximum of $|f_n - f|$ on $A$, usually by studying the derivative, and then computes the limit of the numerical sequence $M_n$.
:::

:::esempio{titolo="Sup criterion via the derivative"}
$f_n(x) = x\,e^{-n x}$ on $[0, +\infty)$. For each fixed $x \geq 0$, $e^{-n x} \to 0$ if $x > 0$ and $f_n(0) = 0$, so the pointwise limit is $f = 0$. Since $f_n \geq 0$, we study $f_n$ itself:
$$
f_n'(x) = e^{-n x} (1 - n x),
$$
so $f_n$ increases on $\left[0, \dfrac{1}{n}\right]$ and decreases afterwards, and the maximum is
$$
M_n = f_n\!\left(\frac{1}{n}\right) = \frac{1}{n e} \xrightarrow[n \to +\infty]{} 0 .
$$
Therefore the convergence is **uniform** on $[0, +\infty)$.

::grafico{f="x*exp(-x);x*exp(-3*x);x*exp(-8*x)" xmin=0 xmax=4 ymin=-0.04 ymax=0.45 punti="1,0.3679,pieno;0.3333,0.1226,pieno;0.125,0.046,pieno" etichette="1.1,0.39,n = 1;0.42,0.15,n = 3;0.2,0.075,n = 8" titolo="$y = x\,e^{-nx}$ for $n = 1, 3, 8$: the maximum is at $x = \dfrac{1}{n}$, equals $\dfrac{1}{ne}$ and tends to $0$"}
:::

:::attenzione
The same sequence can converge uniformly on one set and not on another. $f_n(x) = x^n$ converges pointwise to $0$ on $[0, 1)$, but $\sup_{x \in [0,1)} x^n = 1$ for every $n$, so the convergence **is not uniform** on $[0, 1)$. On $[0, a]$ with $0 < a < 1$ we get $M_n = a^n \to 0$, so the convergence is **uniform** on *every* interval $[0, a]$. The set one works on is part of the answer.

::grafico{f="x^8" xmin=0 xmax=1.2 ymin=-0.1 ymax=1.2 punti="0.8,0.1678,pieno;1,1,vuoto" segmenti="0.8,0,0.8,0.1678;0,0.1678,0.8,0.1678" etichette="0.78,-0.08,a" titolo="$y = x^8$ with $a = \dfrac{4}{5}$: on $[0, a]$ the maximum is $a^8 \approx 0.17$, while on $[0, 1)$ the values approach $1$ as $x \to 1^-$"}
:::

:::osservazione
The study of a sequence of functions follows a two-step scheme. First one computes the pointwise limit $f$, point by point, distinguishing cases when the expression requires it. Then one studies $M_n = \sup |f_n - f|$ on the given set and on any subsets on which the convergence improves, as in the examples $[0, a] \subset [0, 1)$ or $[\delta, +\infty) \subset (0, +\infty)$.
:::

## Continuity of the uniform limit

::::teorema{#continuita-del-limite-uniforme titolo="Continuity of the uniform limit"}
If the $f_n$ are continuous on $A$ and $f_n \to f$ uniformly on $A$, then $f$ is **continuous** on $A$. The theorem is also used *in reverse*: if the pointwise limit of continuous functions is discontinuous, as for $x^n$ on $[0, 1]$, the convergence **cannot be uniform**.

:::dimostrazione
Fix $x_0 \in A$ and $\varepsilon > 0$. By uniform convergence there exists an index $n$ such that
$$
|f_n(x) - f(x)| < \frac{\varepsilon}{3} \qquad \text{for every } x \in A .
$$
Since $f_n$ is continuous at $x_0$, there exists $\delta > 0$ such that $|f_n(x) - f_n(x_0)| < \dfrac{\varepsilon}{3}$ for every $x \in A$ with $|x - x_0| < \delta$. For such $x$, the **triangle inequality** gives
$$
\begin{aligned}
|f(x) - f(x_0)|
&\leq |f(x) - f_n(x)| + |f_n(x) - f_n(x_0)| + |f_n(x_0) - f(x_0)| \\[4pt]
&< \frac{\varepsilon}{3} + \frac{\varepsilon}{3} + \frac{\varepsilon}{3} = \varepsilon ,
\end{aligned}
$$
so $f$ is continuous at $x_0$. Since $x_0$ is an arbitrary point of $A$, $f$ is **continuous** on $A$.
:::
::::

:::attenzione
The theorem does *not* have a converse: the pointwise limit can be continuous even when the convergence is not uniform. $f_n(x) = n x (1 - x)^n$ on $[0, 1]$ converges pointwise to $0$, which is a continuous function; the maximum is at $x = \dfrac{1}{n+1}$ and equals $\left(\dfrac{n}{n+1}\right)^{n+1} \to \dfrac{1}{e} \neq 0$, so the convergence **is not uniform**.

::grafico{f="3*x*(1-x)^3;10*x*(1-x)^10;40*x*(1-x)^40" xmin=0 xmax=1.05 ymin=-0.04 ymax=0.45 asintoti="y=0.3679" etichette="0.42,0.3,n = 3;0.17,0.39,n = 10;0.04,0.41,n = 40" titolo="$y = nx(1 - x)^n$ for $n = 3, 10, 40$: the peak moves toward $0$, but its height tends to $\dfrac{1}{e}$ (dashed line)"}
:::

## Passing to the limit under the integral sign

:::teorema{#scambio-limite-integrale titolo="Passing to the limit under the integral sign"}
If the $f_n$ are continuous on $[a, b]$ and $f_n \to f$ uniformly on $[a, b]$, then $f$ is continuous, hence integrable, and
$$
\lim_{n \to +\infty} \int_a^b f_n(x)\,dx = \int_a^b f(x)\,dx .
$$
The conclusion follows from the estimate
$$
\left| \int_a^b f_n(x)\,dx - \int_a^b f(x)\,dx \right|
\leq \int_a^b |f_n(x) - f(x)|\,dx
\leq (b - a) \, M_n ,
$$
since $M_n = \sup_{[a,b]} |f_n - f| \to 0$ by uniform convergence. The theorem makes it possible to compute the limit of a sequence of integrals without computing the *individual* integrals: one integrates the limit function directly.
:::

:::attenzione
With pointwise convergence *alone*, the interchange of limit and integral **may fail**. $f_n(x) = 2 n^2 x \, e^{-n^2 x^2}$ on $[0, 1]$ converges pointwise to $0$, but
$$
\int_0^1 2 n^2 x \, e^{-n^2 x^2} dx
= \Bigl[ -e^{-n^2 x^2} \Bigr]_0^1
= 1 - e^{-n^2} \xrightarrow[n \to +\infty]{} 1 \neq 0 .
$$
The area under the graph concentrates in an ever taller and narrower peak near $0$, which pointwise convergence does not control.

::grafico{f="2*x*exp(-x*x);8*x*exp(-4*x*x);32*x*exp(-16*x*x)" area="32*x*exp(-16*x*x);0;0;1" xmin=0 xmax=1.15 ymin=-0.2 ymax=3.8 etichette="0.75,1,n = 1;0.42,1.85,n = 2;0.22,3.55,n = 4" titolo="$y = 2n^2 x\,e^{-n^2 x^2}$ for $n = 1, 2, 4$: the peak grows and narrows near $0$, while the area on $[0, 1]$, shaded for $n = 4$, equals $1 - e^{-n^2}$"}
:::

## Differentiation for sequences

:::teorema{#derivazione-per-successioni titolo="Differentiation theorem for sequences"}
Let $f_n \in C^1([a, b])$ be such that
$$
\begin{cases}
f_n(x_0) \text{ converges for at least one point } x_0 \in [a, b] \\[4pt]
f_n' \to g \text{ uniformly on } [a, b]
\end{cases}
$$
Then $f_n$ converges uniformly on $[a, b]$ to a function $f \in C^1([a, b])$ and $f' = g$, that is,
$$
\left( \lim_{n \to +\infty} f_n \right)' = \lim_{n \to +\infty} f_n' .
$$
The uniform convergence hypothesis concerns the derivatives $f_n'$, *not* the $f_n$: uniform convergence of the $f_n$ alone gives no information about the derivatives, as the counterexample below shows. The proof writes $f_n(x) = f_n(x_0) + \displaystyle\int_{x_0}^{x} f_n'(t)\,dt$ and applies **passing to the limit under the integral sign** to the derivatives.
:::

:::attenzione
$f_n(x) = \dfrac{\sin(n^2 x)}{n}$ converges uniformly to $0$ on $\mathbb{R}$, because $\sup_{\mathbb{R}} |f_n| = \dfrac{1}{n} \to 0$. The derivatives are $f_n'(x) = n \cos(n^2 x)$, and at $x = 0$ we have $f_n'(0) = n \to +\infty$, while the derivative of the limit is $0$. Hence the convergence of the derivatives **does not follow** from the uniform convergence of the $f_n$.

::grafico{f="sin(9*x)/3;3*x" xmin=-1.5 xmax=1.5 ymin=-1.1 ymax=1.1 uguale=1 titolo="$y = \dfrac{\sin(9x)}{3}$, that is, $n = 3$: the values stay between $-\dfrac{1}{3}$ and $\dfrac{1}{3}$, but the tangent line at the origin (dashed) has slope $3 = n$"}
:::

## Series of functions

:::definizione{#serie-di-funzioni titolo="Series of functions and pointwise convergence"}
Given a sequence of functions $f_n : A \to \mathbb{R}$, the **series of functions** $\displaystyle\sum_{n=1}^{\infty} f_n$ is the sequence of **partial sums**
$$
s_N(x) = \sum_{n=1}^{N} f_n(x) .
$$
The series **converges pointwise** at $x \in A$ if the numerical series $\displaystyle\sum_{n=1}^{\infty} f_n(x)$ converges; the sum is the function $f(x) = \displaystyle\lim_{N \to +\infty} s_N(x)$, defined on the set of convergence. For each fixed $x$ one applies the tests for numerical series (comparison, ratio, root, Leibniz), for which we refer to the chapter on series in Analysis 1.
:::

:::definizione{#convergenza-uniforme-serie titolo="Uniform convergence of a series"}
The series $\sum f_n$ **converges uniformly** on $A$ if the sequence of partial sums $s_N$ converges uniformly on $A$ to the sum $f$, that is, if
$$
\sup_{x \in A} \, \bigl| f(x) - s_N(x) \bigr|
= \sup_{x \in A} \, \left| \sum_{n = N+1}^{\infty} f_n(x) \right|
\xrightarrow[N \to +\infty]{} 0 .
$$
The quantity to control is the $N$-th **remainder** of the series. Since the sum $f$ is generally not known in explicit form, this condition is rarely checked directly; the total convergence test replaces it with a condition on the terms $f_n$ alone.
:::

:::definizione{#convergenza-totale titolo="Total convergence"}
The series $\sum f_n$ **converges totally** on $A$ if there exists a numerical sequence $(M_n)$ such that
$$
\begin{cases}
|f_n(x)| \leq M_n \ \text{ for every } x \in A \\[4pt]
\displaystyle\sum_{n=1}^{\infty} M_n \ \text{ converges}
\end{cases}
$$
The sharpest choice is $M_n = \sup_{A} |f_n|$: total convergence is equivalent to the convergence of the numerical series $\sum_n \sup_A |f_n|$. The condition is checked by bounding each term, *without* knowing the sum of the series, and for this reason it is the standard working tool in exercises.
:::

::::teorema{#totale-implica-uniforme titolo="Weierstrass test: total implies uniform"}
If $\sum f_n$ converges totally on $A$, then it converges **absolutely** at every point of $A$ and **uniformly** on $A$. The chain between the notions of convergence is
$$
\text{total} \implies \text{uniform} \implies \text{pointwise},
$$
and *neither* of the two implications can be reversed.

:::dimostrazione
Let $(M_n)$ be as in the definition of total convergence. For each fixed $x \in A$ we have $0 \leq |f_n(x)| \leq M_n$ and the series $\sum M_n$ converges, so by the **comparison test** the series $\sum |f_n(x)|$ converges. Therefore the series converges absolutely, hence pointwise, and has a sum $f(x)$ at every point of $A$. For the $N$-th remainder, for every $x \in A$ we have
$$
\bigl| f(x) - s_N(x) \bigr|
= \left| \sum_{n=N+1}^{\infty} f_n(x) \right|
\leq \sum_{n=N+1}^{\infty} |f_n(x)|
\leq \sum_{n=N+1}^{\infty} M_n ,
$$
so $\sup_{A} |f - s_N| \leq \displaystyle\sum_{n=N+1}^{\infty} M_n$. Since the series $\sum M_n$ converges, its tail tends to $0$ as $N \to +\infty$, therefore the convergence is **uniform** on $A$.
:::
::::

:::richiamo{titolo="Comparison test"}
If $0 \leq a_n \leq b_n$ eventually and $\sum b_n$ converges, then $\sum a_n$ **converges**.
:::

:::esempio{titolo="Total convergence on ℝ"}
$\displaystyle\sum_{n=1}^{\infty} \frac{\cos(n x)}{2^n}$ on $\mathbb{R}$. Since $|\cos(n x)| \leq 1$ for every $x$, we have
$$
\left| \frac{\cos(n x)}{2^n} \right| \leq \frac{1}{2^n} = M_n ,
$$
and the geometric series $\sum \dfrac{1}{2^n}$ converges. Hence the series **converges totally** on $\mathbb{R}$, therefore also uniformly, and pointwise at every point.

::grafico{f="(0.5*cos(x)-0.25)/(1.25-cos(x));cos(x)/2;cos(x)/2+cos(2*x)/4" xmin=-3.5 xmax=3.5 ymin=-0.8 ymax=1.2 titolo="Sum of the series (in color) and partial sums $s_1$ (dashed) and $s_2$ (red): on all of $\mathbb{R}$ the gap between $s_N$ and the sum is at most $\dfrac{1}{2^N}$"}
:::

:::attenzione
Total convergence is a *sufficient* but *not necessary* condition for uniform convergence. The series $\displaystyle\sum_{n=1}^{\infty} \frac{(-1)^n}{n + x^2}$ converges pointwise on $\mathbb{R}$ by the **Leibniz test** and the remainder satisfies $|f(x) - s_N(x)| \leq \dfrac{1}{N + 1 + x^2} \leq \dfrac{1}{N+1} \to 0$, so the convergence is **uniform** on $\mathbb{R}$. However, $\sup_{\mathbb{R}} \left| \dfrac{(-1)^n}{n + x^2} \right| = \dfrac{1}{n}$ and the harmonic series diverges, so the convergence **is not total**.
:::

:::richiamo{titolo="Leibniz test"}
If $(a_n)$ is decreasing and $a_n \to 0$, the series $\sum (-1)^n a_n$ **converges** and the remainder satisfies $|s - s_N| \leq a_{N+1}$.
:::

## Term-by-term continuity, integration and differentiation

The limit theorems for sequences, applied to the partial sums $s_N$, give the following three results.

:::teorema{#continuita-della-somma titolo="Continuity of the sum"}
If the $f_n$ are continuous on $A$ and the series $\sum f_n$ converges uniformly on $A$ (in particular, if it converges totally), the sum $f$ is **continuous** on $A$. The statement follows from the **continuity of the uniform limit**, since the partial sums $s_N$ are continuous as finite sums of continuous functions. Continuity is a local property, so to conclude that $f$ is continuous on $A$ it suffices to have total convergence on *every* closed and bounded interval contained in $A$; this remark is used when total convergence on all of $A$ does not hold.
:::

:::teorema{#integrazione-termine-a-termine titolo="Term-by-term integration"}
If the $f_n$ are continuous on $[a, b]$ and the series $\sum f_n$ converges uniformly on $[a, b]$ with sum $f$, then
$$
\int_a^b f(x)\,dx = \sum_{n=1}^{\infty} \int_a^b f_n(x)\,dx .
$$
The statement follows from **passing to the limit under the integral sign** applied to the $s_N$, since the integral of $s_N$ is the partial sum of the series of integrals. The theorem turns the integral of an infinite sum, generally not computable directly, into the numerical series of the integrals of the individual terms.
:::

:::teorema{#derivazione-termine-a-termine titolo="Term-by-term differentiation"}
Let $f_n \in C^1([a, b])$ be such that
$$
\begin{cases}
\displaystyle\sum f_n(x_0) \ \text{ converges for at least one point } x_0 \in [a, b] \\[4pt]
\displaystyle\sum f_n' \ \text{ converges uniformly on } [a, b]
\end{cases}
$$
Then the series $\sum f_n$ converges uniformly on $[a, b]$, the sum $f$ is of class $C^1$ and
$$
f'(x) = \sum_{n=1}^{\infty} f_n'(x) .
$$
The statement is the **differentiation theorem for sequences** applied to the partial sums. In exercises, the hypothesis on the series of derivatives is almost always verified through the **total convergence** of $\sum f_n'$.
:::

:::esempio{titolo="Term-by-term differentiation"}
$f(x) = \displaystyle\sum_{n=1}^{\infty} \frac{\sin(n x)}{n^3}$ on $\mathbb{R}$. The series **converges totally** on $\mathbb{R}$ because $\left| \dfrac{\sin(n x)}{n^3} \right| \leq \dfrac{1}{n^3}$ and $\sum \dfrac{1}{n^3}$ converges, so $f$ is defined and **continuous** on $\mathbb{R}$. The series of derivatives is
$$
\sum_{n=1}^{\infty} \frac{\cos(n x)}{n^2},
$$
which converges totally on $\mathbb{R}$ with $M_n = \dfrac{1}{n^2}$. *Both* hypotheses of the theorem are satisfied on every interval $[-a, a]$, so $f \in C^1(\mathbb{R})$ and $f'(x) = \displaystyle\sum_{n=1}^{\infty} \frac{\cos(n x)}{n^2}$.
:::
