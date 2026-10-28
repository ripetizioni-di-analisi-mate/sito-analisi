---
titolo: Numerical series
sommario: What it means to add infinitely many terms, which tests establish the behavior of a series, and how a power series is studied.
---

## Review of sequences

Two results on sequences that are used throughout the chapter.

:::definizione{#successione titolo="Limit of a sequence"}
A **sequence** is a function $a : \mathbb{N} \to \mathbb{R}$; its value at $n$ is written $a_n$. One writes $\displaystyle\lim_{n \to +\infty} a_n = L$, with $L \in \mathbb{R}$, if for every $\varepsilon > 0$ there exists $N$ such that $|a_n - L| < \varepsilon$ for every $n > N$; one writes $\displaystyle\lim_{n \to +\infty} a_n = +\infty$ if for every $M > 0$ there exists $N$ such that $a_n > M$ for every $n > N$, and similarly for $-\infty$. A sequence with a finite limit is called **convergent**, one with an infinite limit **divergent**, one without a limit **indeterminate**. The theorems of the chapter on limits hold for limits of sequences: uniqueness, sign permanence, comparison, algebra of limits, standard limits and the hierarchy of infinities.

- $a_n = \dfrac{1}{n}$ converges to $0$.
- $a_n = n^2$ diverges to $+\infty$.
- $a_n = (-1)^n$ is indeterminate, because its values oscillate between $-1$ and $1$.
:::

:::teorema{#successioni-monotone titolo="Bounded monotone sequences"}
An increasing sequence that is bounded above **converges**, and its limit is the **supremum** of its values; an increasing sequence that is unbounded above diverges to $+\infty$. The symmetric statements hold for decreasing sequences. Therefore a monotone sequence **always has a limit**, finite or infinite. The proof uses the properties of the supremum and is omitted. The theorem underpins the entire section on series with nonnegative terms, because their partial sums are increasing.
:::

## Series, partial sums and behavior

:::definizione{#serie titolo="Series, convergence, sum"}
Given a sequence $(a_n)$, the **series** with general term $a_n$ is the sequence of **partial sums**
$$
s_N = \sum_{n=1}^{N} a_n = a_1 + a_2 + \cdots + a_N .
$$
Depending on the limit of the partial sums, the series $\displaystyle\sum_{n=1}^{\infty} a_n$

- **converges**, with sum $s \in \mathbb{R}$, if $s_N \to s$; in this case one writes $\displaystyle\sum_{n=1}^{\infty} a_n = s$;
- **diverges** to $+\infty$ or to $-\infty$, if $s_N \to +\infty$ or $s_N \to -\infty$;
- is **indeterminate**, if $s_N$ has no limit.

Studying the behavior of a series means establishing which of the three cases it falls into. For example $\displaystyle\sum_{n=1}^{\infty} (-1)^n$ has partial sums $-1, 0, -1, 0, \dots$, which have no limit, therefore the series is indeterminate.
:::

:::osservazione
The behavior of a series **does not depend on its first terms**: if a finite number of terms is modified, from some index on the partial sums change by a constant, therefore convergence, divergence and indeterminacy are preserved, while the *sum* in general changes. For this reason the hypotheses of the tests are required **eventually**, that is, from some index on, and the starting index of the series is chosen where the general term is defined.
:::

## Reference series

Three series whose behavior is known, and in the first two cases also their sum.

::::teorema{#serie-geometrica titolo="Geometric series"}
For $q \in \mathbb{R}$, the series $\displaystyle\sum_{n=0}^{\infty} q^n$

- **converges** if $|q| < 1$, with sum $\dfrac{1}{1 - q}$;
- **diverges** to $+\infty$ if $q \geq 1$;
- is **indeterminate** if $q \leq -1$.

For $|q| < 1$ and any starting index one has $\displaystyle\sum_{n=n_0}^{\infty} q^n = \dfrac{q^{n_0}}{1 - q}$: the sum is the *first term* divided by $1 - q$. It is one of the few series whose sum is known, and it serves as the term of comparison in the ratio and root tests.

:::dimostrazione
For $q \neq 1$, the identity $(1 - q)(1 + q + \cdots + q^N) = 1 - q^{N+1}$ gives
$$
s_N = \sum_{n=0}^{N} q^n = \frac{1 - q^{N+1}}{1 - q} .
$$
If $|q| < 1$, then $q^{N+1} \to 0$, therefore $s_N \to \dfrac{1}{1 - q}$. If $q > 1$, then $q^{N+1} \to +\infty$, therefore $s_N = \dfrac{q^{N+1} - 1}{q - 1} \to +\infty$. If $q = 1$, then $s_N = N + 1 \to +\infty$. If $q \leq -1$, the sequence $q^{N+1}$ changes sign at every step without tending to $0$, therefore it has no limit, and hence $s_N$ has no limit either: the series is **indeterminate**.
:::
::::

:::esempio{titolo="Sum of a geometric series"}
$$
\sum_{n=1}^{\infty} \frac{1}{2^n} = \frac{\dfrac{1}{2}}{1 - \dfrac{1}{2}} = 1
$$
The ratio is $q = \dfrac{1}{2}$, with $|q| < 1$, and the first term is $\dfrac{1}{2}$, therefore the **sum** is the first term divided by $1 - q$.

::grafico{punti="1,0.5000,pieno;2,0.7500,pieno;3,0.8750,pieno;4,0.9375,pieno;5,0.9688,pieno;6,0.9844,pieno;7,0.9922,pieno;8,0.9961,pieno" asintoti="y=1" nomi="N,s" xmin=-0.5 xmax=9 ymin=-0.15 ymax=1.25 titolo="The partial sums $s_N$ of $\sum \dfrac{1}{2^n}$ for $N = 1, \dots, 8$ increase and approach the sum $1$ (dashed line)"}

:::

:::definizione{#serie-telescopica titolo="Telescoping series"}
A series is **telescoping** if its general term can be written as $a_n = b_n - b_{n+1}$ for some sequence $(b_n)$. In that case the intermediate terms cancel and
$$
s_N = \sum_{n=1}^{N} (b_n - b_{n+1}) = b_1 - b_{N+1} ,
$$
therefore the series converges *if and only if* $(b_n)$ converges, and the sum is $b_1 - \displaystyle\lim_{n \to +\infty} b_n$. This is the second case in which the sum is computed exactly; the expression $a_n = b_n - b_{n+1}$ is generally obtained with the **partial fraction decomposition**.
:::

:::esempio{titolo="Mengoli's series"}
$$
\sum_{n=1}^{\infty} \frac{1}{n(n+1)} = 1
$$
Since $\dfrac{1}{n(n+1)} = \dfrac{1}{n} - \dfrac{1}{n+1}$, the series is **telescoping** with $b_n = \dfrac{1}{n}$, therefore $s_N = 1 - \dfrac{1}{N+1} \to 1$.
:::

::::teorema{#serie-armonica titolo="Harmonic series"}
The harmonic series
$$
\sum_{n=1}^{\infty} \frac{1}{n}
$$
**diverges** to $+\infty$, *even though* its general term tends to $0$. It is the term of comparison for many divergent series and it is the counterexample showing that the necessary condition is not sufficient.

:::dimostrazione
The terms are grouped into blocks: for every $k \geq 1$, the block of terms with index from $2^{k-1} + 1$ to $2^k$ contains $2^{k-1}$ terms, each greater than or equal to $\dfrac{1}{2^k}$, therefore
$$
\frac{1}{2^{k-1} + 1} + \cdots + \frac{1}{2^k} \geq 2^{k-1} \cdot \frac{1}{2^k} = \frac{1}{2} .
$$
Adding the first $K$ blocks gives $s_{2^K} \geq 1 + \dfrac{K}{2}$, therefore the subsequence $s_{2^K}$ tends to $+\infty$. The partial sums are **increasing**, because the terms are positive, hence $s_N \to +\infty$ as well.
:::
::::

:::teorema{#serie-armonica-generalizzata titolo="Generalized harmonic series"}
For $\alpha \in \mathbb{R}$, the series $\displaystyle\sum_{n=1}^{\infty} \frac{1}{n^{\alpha}}$

- **converges** if $\alpha > 1$;
- **diverges** to $+\infty$ if $\alpha \leq 1$.

It is the reference scale for limit comparison: the behavior of many series is decided by comparing the general term with $\dfrac{1}{n^{\alpha}}$. The proof follows from the **integral test** with $f(x) = \dfrac{1}{x^{\alpha}}$ and is deferred to the chapter on improper integrals.
:::

## The necessary condition

::::teorema{#condizione-necessaria titolo="Necessary condition for convergence"}
If $\displaystyle\sum_{n=1}^{\infty} a_n$ converges, then $a_n \to 0$. Equivalently: if the general term does *not* tend to $0$, the series **does not converge**. It is the first check to perform on every series, because it immediately rules out convergence when the general term is not infinitesimal.
$$
\sum_{n=1}^{\infty} \frac{n}{n+1} \quad\text{does not converge, because } \frac{n}{n+1} \to 1 \neq 0 ;
$$
the terms are positive, therefore the partial sums increase and the series **diverges** to $+\infty$.

:::dimostrazione
Let $s$ be the sum of the series. Since $a_N = s_N - s_{N-1}$ and the two sequences $s_N$ and $s_{N-1}$ both tend to $s$, by the **algebra of limits** $a_N \to s - s = 0$.
:::
::::

:::attenzione
The condition is *necessary* and *not sufficient*: $a_n \to 0$ **does not imply convergence**. The harmonic series $\displaystyle\sum_{n=1}^{\infty} \frac{1}{n}$ has an infinitesimal general term and diverges to $+\infty$.
:::

## Series with nonnegative terms

:::teorema{#termini-non-negativi titolo="Behavior of series with nonnegative terms"}
If $a_n \geq 0$ eventually, the series **either converges or diverges** to $+\infty$: the indeterminate case does *not* occur. Indeed the partial sums are eventually increasing, therefore by the theorem on monotone sequences they have a limit, finite or $+\infty$; the series converges *if and only if* the partial sums are **bounded**. All the tests of this section are based on this fact.
:::

::::teorema{#criterio-del-confronto titolo="Comparison test"}
If $0 \leq a_n \leq b_n$ eventually, then

- if $\displaystyle\sum_{n=1}^{\infty} b_n$ converges, $\displaystyle\sum_{n=1}^{\infty} a_n$ also converges;
- if $\displaystyle\sum_{n=1}^{\infty} a_n$ diverges, $\displaystyle\sum_{n=1}^{\infty} b_n$ also diverges.

It is used by comparing the given series with a **geometric series** or with a **generalized harmonic series**, whose behavior is known.

:::dimostrazione
Let $0 \leq a_n \leq b_n$ for every $n$; the case in which the inequality holds only eventually follows, because the behavior does not depend on the first terms. Denoting by $s_N$ and $t_N$ the partial sums of the two series, adding the inequalities term by term gives $s_N \leq t_N$ for every $N$, and both sequences are increasing. If $\sum b_n$ converges, then $t_N$ is bounded, therefore $s_N$ is also bounded, and since it is increasing it **converges**. If $\sum a_n$ diverges, then $s_N \to +\infty$, therefore by comparison of limits $t_N \to +\infty$.
:::
::::

:::esempio
$\displaystyle\sum_{n=1}^{\infty} \frac{1}{n^2 + n + 1}$ **converges**, because $\dfrac{1}{n^2 + n + 1} \leq \dfrac{1}{n^2}$ for every $n \geq 1$ and $\displaystyle\sum_{n=1}^{\infty} \frac{1}{n^2}$ converges (generalized harmonic series with $\alpha = 2$).
:::

::::teorema{#confronto-asintotico titolo="Limit comparison test"}
Let $a_n \geq 0$ and $b_n > 0$ eventually, with
$$
\lim_{n \to +\infty} \frac{a_n}{b_n} = \ell .
$$

- If $\ell \in (0, +\infty)$, the two series have the **same behavior**; in particular this happens if $a_n \sim b_n$.
- If $\ell = 0$ and $\sum b_n$ converges, then $\sum a_n$ converges.
- If $\ell = +\infty$ and $\sum b_n$ diverges, then $\sum a_n$ diverges.

The test brings the standard limits into series: the general term is replaced by a simpler **asymptotically equivalent term**, generally of the form $\dfrac{1}{n^{\alpha}}$.

:::dimostrazione
Let $\ell \in (0, +\infty)$. By the definition of limit with $\varepsilon = \dfrac{\ell}{2}$, eventually $\dfrac{\ell}{2} < \dfrac{a_n}{b_n} < \dfrac{3\ell}{2}$, that is,
$$
\frac{\ell}{2}\, b_n < a_n < \frac{3\ell}{2}\, b_n .
$$
If $\sum b_n$ converges, $\sum \dfrac{3\ell}{2} b_n$ also converges, therefore by the **comparison test** $\sum a_n$ converges; if $\sum b_n$ diverges, $\sum \dfrac{\ell}{2} b_n$ also diverges, therefore by the comparison test $\sum a_n$ diverges. If $\ell = 0$, eventually $a_n < b_n$ (definition of limit with $\varepsilon = 1$) and the comparison test applies; if $\ell = +\infty$, eventually $a_n > b_n$ and the comparison test applies again.
:::
::::

:::richiamo{titolo="Comparison test"}
If $0 \leq a_n \leq b_n$ eventually: the convergence of $\sum b_n$ implies that of $\sum a_n$; the divergence of $\sum a_n$ implies that of $\sum b_n$.
:::

:::esempio{titolo="Standard limits in limit comparison"}
$\displaystyle\sum_{n=1}^{\infty} \sin \frac{1}{n}$ **diverges**: since $\dfrac{1}{n} \to 0$, by the **standard limit of the sine** $\sin \dfrac{1}{n} \sim \dfrac{1}{n}$, and the harmonic series diverges. $\displaystyle\sum_{n=1}^{\infty} \left( 1 - \cos \frac{1}{n} \right)$ **converges**: $1 - \cos \dfrac{1}{n} \sim \dfrac{1}{2n^2}$ and $\displaystyle\sum_{n=1}^{\infty} \frac{1}{n^2}$ converges.
:::

:::teorema{#criterio-del-rapporto titolo="Ratio test"}
Let $a_n > 0$ eventually and suppose that $\displaystyle\lim_{n \to +\infty} \frac{a_{n+1}}{a_n} = \ell$ exists, finite or $+\infty$.

- If $\ell < 1$, the series **converges**.
- If $\ell > 1$ (including $\ell = +\infty$), the series **diverges** to $+\infty$.
- If $\ell = 1$, the test gives *no* information: for $\sum \dfrac{1}{n}$ and for $\sum \dfrac{1}{n^2}$ the limit equals $1$, the first diverges and the second converges.

It is the test suited to terms with **factorials** and $n$-th powers, because these factors simplify in the ratio. For example $\displaystyle\sum_{n=1}^{\infty} \frac{2^n}{n!}$ converges, because $\dfrac{a_{n+1}}{a_n} = \dfrac{2}{n+1} \to 0 < 1$. The proof compares the series with a geometric series whose ratio lies between $\ell$ and $1$, and is omitted.
:::

:::teorema{#criterio-della-radice titolo="Root test"}
Let $a_n \geq 0$ eventually and suppose that $\displaystyle\lim_{n \to +\infty} \sqrt[n]{a_n} = \ell$ exists, finite or $+\infty$.

- If $\ell < 1$, the series **converges**.
- If $\ell > 1$ (including $\ell = +\infty$), the series **diverges** to $+\infty$.
- If $\ell = 1$, the test gives *no* information, with the same examples as for the ratio test: for $\sum \dfrac{1}{n}$ and $\sum \dfrac{1}{n^2}$ one has $\sqrt[n]{a_n} \to 1$.

It is the test suited to the case in which the general term is an $n$-th **power**. For example $\displaystyle\sum_{n=1}^{\infty} \left( \frac{n}{3n+1} \right)^{\! n}$ converges, because $\sqrt[n]{a_n} = \dfrac{n}{3n+1} \to \dfrac{1}{3} < 1$. The proof compares the series with a geometric series, as for the ratio test, and is omitted.
:::

:::teorema{#criterio-dell-integrale titolo="Integral test"}
Let $f : [n_0, +\infty) \to \mathbb{R}$ be *nonnegative* and *decreasing*, with $a_n = f(n)$. Then
$$
\sum_{n=n_0}^{\infty} a_n \ \text{converges} \iff \int_{n_0}^{+\infty} f(x)\, dx \ \text{converges} .
$$
The test connects series to **improper integrals**, for which see the corresponding chapter; with $f(x) = \dfrac{1}{x^{\alpha}}$ it yields the generalized harmonic series. For example $\displaystyle\sum_{n=2}^{\infty} \frac{1}{n \ln n}$ **diverges**, because the integral of $\dfrac{1}{x \ln x}$ over $[2, +\infty)$ equals $\displaystyle\lim_{t \to +\infty} \bigl( \ln \ln t - \ln \ln 2 \bigr) = +\infty$.

::grafico{f="1/x;1/ceil(x)+0*sqrt((x-1)*(8-x))" area="1/floor(x);0;1;7.999" segmenti="2,0,2,1.0000;3,0,3,0.5000;4,0,4,0.3333;5,0,5,0.2500;6,0,6,0.2000;7,0,7,0.1667;8,0,8,0.1429" xmin=-0.4 xmax=8.6 ymin=-0.1 ymax=1.25 titolo="With $f(x) = \dfrac{1}{x}$: the shaded rectangles with base $[n, n + 1]$ and height $a_n = \dfrac{1}{n}$ lie above the graph, therefore $s_N \geq \int_1^{N+1} \dfrac{dx}{x}$; the rectangles with height $a_{n+1}$, under the dashed line, lie below the graph"}

:::

## Series with terms of varying sign

:::teorema{#convergenza-assoluta titolo="Absolute convergence"}
The series $\sum a_n$ **converges absolutely** if the series of absolute values $\sum |a_n|$ converges. Absolute convergence *implies* convergence, and
$$
\left| \sum_{n=1}^{\infty} a_n \right| \leq \sum_{n=1}^{\infty} |a_n| .
$$
A series that converges but does not converge absolutely is called **conditionally convergent**. The theorem reduces a series with terms of any sign to a series with nonnegative terms, to which the tests of the previous section apply. The proof applies the comparison test to the inequalities $0 \leq a_n + |a_n| \leq 2|a_n|$ and is omitted.
:::

:::teorema{#criterio-di-leibniz titolo="Leibniz test"}
Let $(b_n)$ be a sequence with

$$
\begin{cases}
b_n \geq 0 \ \text{for every } n \\[4pt]
b_{n+1} \leq b_n \ \text{for every } n \\[4pt]
b_n \to 0
\end{cases}
$$

Then the alternating series $\displaystyle\sum_{n=1}^{\infty} (-1)^n\, b_n$ **converges** and, denoting by $s$ its sum, for every $N$ the following **error estimate** holds
$$
|s - s_N| \leq b_{N+1} :
$$
the error made by stopping at the partial sum $s_N$ does not exceed the *first neglected term*. The test decides the convergence of alternating series when absolute convergence fails. For example $\displaystyle\sum_{n=1}^{\infty} \frac{(-1)^n}{n}$ converges, because $\dfrac{1}{n}$ is decreasing and infinitesimal; the convergence is **conditional**, since the series of absolute values is the harmonic series, which diverges. The proof uses the monotonicity of the partial sums of even index and of odd index, and is omitted.

::grafico{punti="1,-1.0000,pieno;2,-0.5000,pieno;3,-0.8333,pieno;4,-0.5833,pieno;5,-0.7833,pieno;6,-0.6167,pieno;7,-0.7595,pieno;8,-0.6345,pieno;9,-0.7456,pieno;10,-0.6456,pieno;11,-0.7365,pieno;12,-0.6532,pieno" segmenti="1,-1.0000,2,-0.5000;2,-0.5000,3,-0.8333;3,-0.8333,4,-0.5833;4,-0.5833,5,-0.7833;5,-0.7833,6,-0.6167;6,-0.6167,7,-0.7595;7,-0.7595,8,-0.6345;8,-0.6345,9,-0.7456;9,-0.7456,10,-0.6456;10,-0.6456,11,-0.7365;11,-0.7365,12,-0.6532" asintoti="y=-0.6931" nomi="N,s" xmin=-0.5 xmax=13 ymin=-1.15 ymax=0.15 titolo="The partial sums $s_N$ of $\sum \dfrac{(-1)^n}{n}$ alternate above and below the sum $s = -\ln 2$ (dashed line), at distance $|s - s_N| \leq \dfrac{1}{N + 1}$"}

:::

## Operations on series

:::teorema{#operazioni-sulle-serie titolo="Linearity of the sum"}
If $\sum a_n$ and $\sum b_n$ converge with sums $s$ and $t$, then for every $c \in \mathbb{R}$
$$
\sum_{n=1}^{\infty} (a_n + b_n) = s + t, \qquad
\sum_{n=1}^{\infty} c\, a_n = c\, s .
$$
If $\sum a_n$ converges and $\sum b_n$ does not converge, the series $\sum (a_n + b_n)$ **does not converge**; if *neither* of the two converges, **nothing can be concluded** about the behavior of the sum, as shown by $a_n = \dfrac{1}{n}$ and $b_n = -\dfrac{1}{n}$. Linearity makes it possible to split a series into series with known sum:
$$
\sum_{n=1}^{\infty} \left( \frac{1}{2^n} + \frac{1}{3^n} \right)
= 1 + \frac{1}{2} = \frac{3}{2} ,
$$
since the two geometric series have sums $1$ and $\dfrac{1}{2}$.
:::

## Power series

:::definizione{#serie-di-potenze titolo="Power series"}
A **power series** with center $x_0$ and coefficients $c_n$ is
$$
\sum_{n=0}^{\infty} c_n (x - x_0)^n ,
$$
with the convention $(x - x_0)^0 = 1$ also for $x = x_0$. For each fixed $x$ it is a numerical series; the **set of convergence** is the set of $x$ for which the series converges. At $x = x_0$ the series *always* converges, with sum $c_0$. Power series represent functions as sums of infinitely many monomials; the partial sums are polynomials.
:::

:::teorema{#raggio-di-convergenza titolo="Radius of convergence"}
For every power series there exists $R \in [0, +\infty]$, called the **radius of convergence**, such that the series

- **converges absolutely** for every $x$ with $|x - x_0| < R$;
- **does not converge** for every $x$ with $|x - x_0| > R$.

At the two endpoints $x = x_0 - R$ and $x = x_0 + R$ the behavior depends on the series and is studied *by substituting the value*, with the tests for numerical series. The set of convergence is therefore an interval with center $x_0$, with the endpoints included or excluded according to the study. The proof uses comparison with geometric series and is omitted.
:::

:::teorema{#calcolo-del-raggio titolo="Ratio and root for the radius"}
If the coefficients are eventually nonzero and
$$
\lim_{n \to +\infty} \frac{|c_{n+1}|}{|c_n|} = \ell
\qquad\text{or}\qquad
\lim_{n \to +\infty} \sqrt[n]{|c_n|} = \ell ,
$$
exists, finite or $+\infty$, then $R = \dfrac{1}{\ell}$, with the conventions $R = +\infty$ for $\ell = 0$ and $R = 0$ for $\ell = +\infty$. The statement follows by applying the **ratio test** or the **root test** to the series of absolute values. For example $\displaystyle\sum_{n=0}^{\infty} \frac{x^n}{n!}$ has $\dfrac{|c_{n+1}|}{|c_n|} = \dfrac{1}{n+1} \to 0$, therefore $R = +\infty$: the series **converges** for *every* $x \in \mathbb{R}$.
:::

:::esempio{titolo="Study of the endpoints"}
$\displaystyle\sum_{n=1}^{\infty} \frac{x^n}{n}$: since $\dfrac{|c_{n+1}|}{|c_n|} = \dfrac{n}{n+1} \to 1$, the radius is $R = 1$ and the series converges absolutely on $(-1, 1)$. At $x = 1$ the series is the harmonic series, which **diverges**; at $x = -1$ the series is $\displaystyle\sum_{n=1}^{\infty} \frac{(-1)^n}{n}$, which **converges** by the **Leibniz test**. The set of convergence is $[-1, 1)$.

::grafico{f="-log(1-x)+0*sqrt(x+1);x+x^2/2+x^3/3+x^4/4+x^5/5" asintoti="x=1" punti="-1,-0.6931,pieno" xmin=-1.8 xmax=1.6 ymin=-1.5 ymax=4 titolo="From the series of $\ln(1 + x)$ with $-x$ in place of $x$, the sum of $\sum \dfrac{x^n}{n}$ is $-\ln(1 - x)$ (in color), defined on the set of convergence $[-1, 1)$; dashed, the partial sum up to $\dfrac{x^5}{5}$"}

:::

:::teorema{#serie-di-taylor titolo="Elementary Taylor series"}
For every $x \in \mathbb{R}$:
$$
e^x = \sum_{n=0}^{\infty} \frac{x^n}{n!}, \qquad
\sin x = \sum_{n=0}^{\infty} \frac{(-1)^n\, x^{2n+1}}{(2n+1)!}, \qquad
\cos x = \sum_{n=0}^{\infty} \frac{(-1)^n\, x^{2n}}{(2n)!} .
$$
For $|x| < 1$:
$$
\frac{1}{1 - x} = \sum_{n=0}^{\infty} x^n , \qquad
\ln(1 + x) = \sum_{n=1}^{\infty} \frac{(-1)^{n+1}\, x^n}{n} \quad (\text{also valid at } x = 1).
$$
These equalities follow from **Taylor's formula with remainder**, treated in the chapter on derivatives, and are assumed here. They make it possible to compute **exact sums** of numerical series by substitution: with $x = 1$ in the first one obtains $\displaystyle\sum_{n=0}^{\infty} \frac{1}{n!} = e$; with $x = 1$ in the last, $\displaystyle\sum_{n=1}^{\infty} \frac{(-1)^{n+1}}{n} = \ln 2$.

::grafico{f="sin(x);x-x^3/6;x-x^3/6+x^5/120-x^7/5040" xmin=-6.5 xmax=6.5 ymin=-2 ymax=2 titolo="$y = \sin x$ (in color) and the partial sums of its series up to $x^3$ (dashed) and up to $x^7$ (in red): with more terms the graph of the partial sum stays close to that of the sine on a wider interval"}

:::
