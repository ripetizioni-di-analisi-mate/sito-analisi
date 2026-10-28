---
titolo: Power series and Taylor series
sommario: Where a power series converges, how to compute the radius and the set of convergence, how to differentiate and integrate term by term, and how Taylor expansions represent the elementary functions.
---

## Power series and radius of convergence

:::definizione{#serie-di-potenze titolo="Power series"}
A **power series** centered at $x_0 \in \mathbb{R}$ is a series of the form
$$
\sum_{n=0}^{\infty} a_n (x - x_0)^n = a_0 + a_1 (x - x_0) + a_2 (x - x_0)^2 + \cdots
$$
where the numbers $a_n$ are the **coefficients** and $x_0$ is the **center**; by convention $(x - x_0)^0 = 1$ also at $x = x_0$. For each fixed value of $x$ the series is a numerical series, so the study of a power series is the study of the set of points $x$ at which that numerical series converges. At $x = x_0$ all the terms with $n \geq 1$ are zero, therefore *every* power series converges *at least* at its own center, with sum $a_0$. The convergence tests for numerical series are in the chapter on series in Mathematical Analysis 1.
:::

:::esempio{titolo="The geometric series as a power series"}
The series $\displaystyle\sum_{n=0}^{\infty} x^n$ is a power series centered at $0$ with all coefficients equal to $1$. For $|x| < 1$ it is a convergent geometric series with sum $\dfrac{1}{1 - x}$; for $|x| \geq 1$ the general term $x^n$ does not tend to $0$, so the series **does not converge**. The set of convergence is the interval $(-1, 1)$, symmetric with respect to the center. The following theorem shows that this shape of the set of convergence is general.

::grafico{f="1/(1-x);1+x+x^2;(1-x^7)/(1-x)" xmin=-1.6 xmax=1.6 ymin=-3 ymax=8 asintoti="x=1" segmenti="-1,-3,-1,8" titolo="$y = \dfrac{1}{1 - x}$ with the partial sums $1 + x + x^2$ (dashed) and $1 + x + \dots + x^6$ (red): inside $(-1, 1)$ they approach the sum, outside they move away from it"}
:::

::::teorema{#teorema-del-raggio titolo="Radius of convergence theorem"}
For every power series $\sum a_n (x - x_0)^n$ there exists a unique $R \in [0, +\infty]$, called the **radius of convergence**, such that

- if $|x - x_0| < R$ the series converges absolutely;
- if $|x - x_0| > R$ the series does not converge.

In the extreme cases: if $R = 0$ the series converges only at $x_0$; if $R = +\infty$ the series converges absolutely for every $x \in \mathbb{R}$. The theorem reduces the study of convergence to the computation of the number $R$; at the points with $|x - x_0| = R$ it states *nothing*, so the endpoints require a separate study.

:::dimostrazione
We first prove the following fact: if the series converges at a point $x_1 \neq x_0$, then it converges absolutely at every $x$ with $|x - x_0| < |x_1 - x_0|$. Since the numerical series $\sum a_n (x_1 - x_0)^n$ converges, by the **necessary condition for convergence** the general term tends to $0$, so it is bounded: there exists $M > 0$ such that $|a_n (x_1 - x_0)^n| \leq M$ for every $n$. Fixing $x$ with $|x - x_0| < |x_1 - x_0|$, we set $q = \dfrac{|x - x_0|}{|x_1 - x_0|} < 1$ and estimate:
$$
|a_n (x - x_0)^n|
= |a_n (x_1 - x_0)^n| \cdot q^n
\leq M q^n .
$$
The geometric series $\sum M q^n$ converges because $0 \leq q < 1$, so by the **comparison test** the series $\sum |a_n (x - x_0)^n|$ converges.

Now set
$$
R = \sup \{ |x - x_0| : \text{the series converges at } x \} ,
$$
the supremum of a nonempty set, since it contains $0$. If $|x - x_0| < R$, by definition of supremum there exists a point of convergence $x_1$ with $|x - x_0| < |x_1 - x_0|$, so by the initial fact the series converges absolutely at $x$. If $|x - x_0| > R$, the series **does not converge** at $x$, because otherwise the number $|x - x_0|$ would belong to the set and would be greater than its supremum, which is absurd.
:::
::::

:::richiamo{titolo="Necessary condition for convergence"}
If the numerical series $\sum a_n$ converges, then $a_n \to 0$; in particular the sequence $a_n$ is **bounded**.
:::

:::richiamo{titolo="Comparison test"}
If $0 \leq a_n \leq b_n$ eventually and $\sum b_n$ converges, then $\sum a_n$ **converges**.
:::

:::definizione{#insieme-di-convergenza titolo="Set of convergence"}
The **set of convergence** $E$ of a power series is the set of points $x$ at which the series converges. For $0 < R < +\infty$, the radius theorem gives
$$
(x_0 - R,\; x_0 + R) \subseteq E \subseteq [x_0 - R,\; x_0 + R] ,
$$
so $E$ is an interval centered at $x_0$ that contains the open interval and may include or exclude *each* of the two endpoints. The complete study of a power series therefore consists of two steps: the computation of $R$ and the study of the numerical series at each of the points $x_0 - R$ and $x_0 + R$.
:::

## Computing the radius

:::teorema{#calcolo-raggio-rapporto titolo="Ratio test for the radius"}
If $a_n \neq 0$ eventually and there exists
$$
\lim_{n \to \infty} \frac{|a_{n+1}|}{|a_n|} = \ell \in [0, +\infty] ,
$$
then $R = \dfrac{1}{\ell}$, with the conventions $R = +\infty$ for $\ell = 0$ and $R = 0$ for $\ell = +\infty$. The statement follows by applying the **ratio test** to the series of absolute values: for $x \neq x_0$ the ratio between two consecutive terms tends to $\ell \, |x - x_0|$, which is less than $1$ *if and only if* $|x - x_0| < \dfrac{1}{\ell}$, and greater than $1$ (with a general term that does not tend to $0$) if $|x - x_0| > \dfrac{1}{\ell}$. For the series $\displaystyle\sum_{n=0}^{\infty} \frac{x^n}{n!}$ the ratio is $\dfrac{n!}{(n+1)!} = \dfrac{1}{n+1} \to 0$, so $R = +\infty$.
:::

:::richiamo{titolo="Ratio test for numerical series"}
Let $\sum b_n$ have positive terms with $\dfrac{b_{n+1}}{b_n} \to L$. If $L < 1$ the series **converges**; if $L > 1$ the series **diverges** and $b_n \to +\infty$.
:::

:::teorema{#calcolo-raggio-radice titolo="Root test for the radius"}
If there exists
$$
\lim_{n \to \infty} \sqrt[n]{|a_n|} = \ell \in [0, +\infty] ,
$$
then $R = \dfrac{1}{\ell}$, with the same conventions as in the ratio test. The justification is identical, with the **root test** in place of the ratio test. This test is suited to the case where the coefficient $a_n$ is an $n$-th power: for $\displaystyle\sum_{n=1}^{\infty} \left( \frac{n}{2n+1} \right)^{\! n} x^n$ we have $\sqrt[n]{|a_n|} = \dfrac{n}{2n+1} \to \dfrac{1}{2}$, so $R = 2$.
:::

:::osservazione{#serie-lacunari titolo="Lacunary series"}
A power series is **lacunary** if it contains *only* some powers, for example only the even ones ($x^{2n}$), only the odd ones ($x^{2n+1}$) or only the multiples of three ($x^{3n}$). Infinitely many zeros appear in the sequence of coefficients, so the formulas based on the ratio and on the root of the coefficients **do not apply**. In these cases the series is studied with a substitution: for $\displaystyle\sum_{n=0}^{\infty} \frac{x^{2n}}{4^n}$ we set $t = x^2$ and obtain the geometric series $\sum \left( \dfrac{t}{4} \right)^{\! n}$, which converges if and only if $|t| < 4$, that is, $x^2 < 4$, that is, $|x| < 2$. The radius is therefore $R = 2$ and *not* $4$. Alternatively, the ratio or root test is applied directly to the terms of the series, with $x$ as a parameter.
:::

## Behavior at the endpoints

:::osservazione{#comportamento-agli-estremi titolo="Study of the endpoints"}
At the points $x = x_0 - R$ and $x = x_0 + R$ the radius theorem gives no information, and there is *no* general criterion. Each of the two values is substituted into the series and the resulting numerical series is studied with the tests for series: comparison and limit comparison, the Leibniz test for alternating series, the integral test. The two endpoints may behave differently from each other, and all behaviors occur.
:::

:::esempio{titolo="Three series with the same radius and different sets of convergence"}
The series $\displaystyle\sum_{n=1}^{\infty} x^n$, $\displaystyle\sum_{n=1}^{\infty} \frac{x^n}{n}$, $\displaystyle\sum_{n=1}^{\infty} \frac{x^n}{n^2}$ all have radius $R = 1$.

- $\displaystyle\sum x^n$: at $x = \pm 1$ the general term does not tend to $0$, so the series **does not converge** at either endpoint and $E = (-1, 1)$.
- $\displaystyle\sum \frac{x^n}{n}$: at $x = 1$ it is the harmonic series, which diverges; at $x = -1$ it is the series $\sum \dfrac{(-1)^n}{n}$, which converges by the **Leibniz test**. Hence $E = [-1, 1)$.
- $\displaystyle\sum \frac{x^n}{n^2}$: at $x = \pm 1$ the absolute value of the general term is $\dfrac{1}{n^2}$, the term of a convergent series, so the series **converges absolutely** at both endpoints and $E = [-1, 1]$.
:::

## Total convergence and continuity of the sum

:::richiamo{titolo="Total convergence"}
The series of functions $\sum f_n$ converges totally on the set $I$ if the numerical series $\displaystyle\sum_{n} \, \sup_{x \in I} |f_n(x)|$ converges. Total convergence implies **uniform convergence** on $I$. (Chapter on sequences and series of functions.)
:::

::::teorema{#convergenza-totale-compatti titolo="Total convergence on interior compact sets"}
Let $R > 0$ be the radius of convergence of the series $\sum a_n (x - x_0)^n$. For *every* $r$ with $0 < r < R$ the series **converges totally** on the interval $[x_0 - r,\; x_0 + r]$. The properties of the sum stated below follow from this theorem: continuity, term-by-term differentiability and integrability.

:::dimostrazione
For $x \in [x_0 - r, x_0 + r]$ we have $|a_n (x - x_0)^n| \leq |a_n| \, r^n$, and the value $|a_n| \, r^n$ is attained at $x = x_0 + r$, so
$$
\sup_{x \in [x_0 - r,\, x_0 + r]} |a_n (x - x_0)^n| = |a_n| \, r^n .
$$
Since $r < R$, the point $x_0 + r$ is interior to the interval of convergence, so by the **radius theorem** the series converges absolutely at that point, that is, the series $\sum |a_n| \, r^n$ converges. Therefore the series of the suprema converges and the convergence is **total**.
:::
::::

:::teorema{#continuita-della-somma titolo="Continuity of the sum"}
Let $R > 0$. The sum function
$$
f(x) = \sum_{n=0}^{\infty} a_n (x - x_0)^n
$$
is **continuous** on the open interval $(x_0 - R,\; x_0 + R)$. Every point of the open interval belongs to a compact set $[x_0 - r, x_0 + r]$ with $r < R$; on that compact set the convergence is **total**, hence **uniform**, and the sum of a uniformly convergent series of continuous functions is continuous, by the theorem recalled below.
:::

:::richiamo{titolo="Continuity of the sum of a uniformly convergent series"}
If the functions $f_n$ are continuous on $I$ and the series $\sum f_n$ converges uniformly on $I$, then the sum is **continuous** on $I$. (Chapter on sequences and series of functions.)
:::

:::teorema{#teorema-di-abel titolo="Abel's theorem"}
Let $0 < R < +\infty$. If the series converges at the endpoint $x_0 + R$, then the sum $f$ is **continuous** from the left *also* at that point:
$$
\lim_{x \to (x_0 + R)^-} f(x) = \sum_{n=0}^{\infty} a_n R^n .
$$
The analogous statement holds at the endpoint $x_0 - R$. The proof is omitted. The theorem makes it possible to extend an equality between a function and a power series up to an endpoint at which the series converges: this argument justifies, for example, the validity of the expansion of $\ln(1 + x)$ at $x = 1$.
:::

## Term-by-term differentiation and integration

:::teorema{#derivazione-termine-a-termine titolo="Term-by-term differentiation"}
Let $f(x) = \displaystyle\sum_{n=0}^{\infty} a_n (x - x_0)^n$ with radius $R > 0$. The series of derivatives
$$
\sum_{n=1}^{\infty} n \, a_n (x - x_0)^{n-1}
$$
has the *same* radius of convergence $R$; the function $f$ is **differentiable** on $(x_0 - R, x_0 + R)$ and its derivative is the sum of the series of derivatives. By iteration, $f$ is of class $C^{\infty}$ on the open interval and every derivative is obtained by differentiating the series term by term. The proof uses total convergence on interior compact sets and the **differentiation theorem for series of functions**, and we refer to the chapter on sequences and series of functions.
:::

:::teorema{#integrazione-termine-a-termine titolo="Term-by-term integration"}
Under the same hypotheses, for every $x \in (x_0 - R, x_0 + R)$ we have
$$
\int_{x_0}^{x} f(t) \, dt = \sum_{n=0}^{\infty} \frac{a_n}{n+1} (x - x_0)^{n+1} ,
$$
and the integrated series has the *same* radius $R$. The interchange of integral and series is legitimate because on the compact set with endpoints $x_0$ and $x$ the convergence is **total**, hence **uniform**; the integration theorem for series of functions is in the corresponding chapter. Term-by-term differentiation and integration produce new expansions from known ones, as the examples in the section on expansions show.
:::

:::esempio{titolo="Derivative of the geometric series"}
For $|x| < 1$ we have $\dfrac{1}{1 - x} = \displaystyle\sum_{n=0}^{\infty} x^n$. **Differentiating term by term**, for $|x| < 1$:
$$
\frac{1}{(1 - x)^2} = \sum_{n=1}^{\infty} n \, x^{n-1} ,
\qquad
\sum_{n=1}^{\infty} n \, x^{n} = \frac{x}{(1 - x)^2} .
$$
The second equality is obtained by multiplying the first by $x$ and is used to sum numerical series such as $\displaystyle\sum_{n=1}^{\infty} \frac{n}{2^n}$.
:::

## Taylor series

:::definizione{#serie-di-taylor titolo="Taylor and Maclaurin series"}
Let $f$ be of class $C^{\infty}$ in a neighborhood of $x_0$. The **Taylor series** of $f$ centered at $x_0$ is the power series
$$
\sum_{n=0}^{\infty} \frac{f^{(n)}(x_0)}{n!} (x - x_0)^n ,
$$
whose partial sums are the Taylor polynomials of $f$ at $x_0$. For $x_0 = 0$ the series is called the **Maclaurin series**. The series is defined for every $C^{\infty}$ function; whether and where its sum coincides with $f$ is the question addressed in the following blocks.
:::

::::teorema{#unicita-dello-sviluppo titolo="Uniqueness of the power series expansion"}
If $f(x) = \displaystyle\sum_{n=0}^{\infty} a_n (x - x_0)^n$ for every $x$ in an interval $(x_0 - \delta, x_0 + \delta)$ with $\delta > 0$, then
$$
a_n = \frac{f^{(n)}(x_0)}{n!} \qquad \text{for every } n .
$$
The *only* power series centered at $x_0$ that can represent $f$ is therefore its **Taylor series**. For this reason an expansion obtained by any of the legitimate procedures (substitution into a known expansion, sum, multiplication by a power, differentiation, integration) is automatically the Taylor series of the function, without computing the derivatives.

:::dimostrazione
By the **term-by-term differentiation theorem**, $f$ is of class $C^{\infty}$ on the interval and, differentiating $k$ times,
$$
f^{(k)}(x) = \sum_{n=k}^{\infty} n (n-1) \cdots (n-k+1) \, a_n (x - x_0)^{n-k} .
$$
At $x = x_0$ all the terms with $n > k$ vanish, because they contain a positive power of $x - x_0$, so *only* the term with $n = k$ remains, which equals $k! \, a_k$. Therefore $f^{(k)}(x_0) = k! \, a_k$, that is, $a_k = \dfrac{f^{(k)}(x_0)}{k!}$.
:::
::::

:::richiamo{titolo="Term-by-term differentiation"}
If $f$ is the sum of a power series with radius $R > 0$, then $f$ is **differentiable** on $(x_0 - R, x_0 + R)$ and $f'$ is the sum of the series of derivatives, which has the same radius.
:::

:::definizione{#funzione-analitica titolo="Analytic function"}
$f$ is **analytic** at $x_0$ (or **expandable in a Taylor series** at $x_0$) if there exists a neighborhood of $x_0$ in which $f$ coincides with the sum of its Taylor series centered at $x_0$; it is analytic on an open set if it is analytic at each of its points. The elementary functions (exponentials, logarithms, powers, trigonometric functions and their inverses) are analytic at every interior point of their domain, so for these functions the expansions of the following section really represent the function in the regions indicated.
:::

:::attenzione
Being of class $C^{\infty}$ *is not enough* to be analytic. The function $f(x) = e^{-1/x^2}$ for $x \neq 0$, extended with $f(0) = 0$, is $C^{\infty}$ on $\mathbb{R}$ and all its derivatives at $0$ are zero, so its Maclaurin series is the identically zero series, which converges for every $x$ with sum $0$. The sum coincides with $f$ only at $x = 0$, therefore $f$ **is not analytic** at $0$.

::grafico{f="exp(-1/(x*x))" xmin=-2.5 xmax=2.5 ymin=-0.2 ymax=1.1 punti="0,0,pieno" titolo="$y = e^{-1/x^2}$ extended with $0$ at the origin: all the derivatives at $0$ are zero"}
:::

:::teorema{#criterio-di-sviluppabilita titolo="Expandability criterion"}
Let $f$ be of class $C^{\infty}$ on the interval $I$ centered at $x_0$ and let $T_n$ be its Taylor polynomial of degree $n$. Then $f$ coincides with the sum of its Taylor series at $x \in I$ *if and only if* the remainder $R_n(x) = f(x) - T_n(x)$ tends to $0$ as $n \to \infty$. A sufficient condition: if there exist constants $M, L > 0$ such that $|f^{(n)}(x)| \leq M L^n$ for every $n$ and every $x \in I$, then $f$ is **expandable** on $I$, since with the **Lagrange remainder**
$$
|R_n(x)| \leq \frac{M L^{n+1} |x - x_0|^{n+1}}{(n+1)!} \xrightarrow[n \to \infty]{} 0 ,
$$
given that $\dfrac{c^{\,n}}{n!} \to 0$ for every fixed $c$. The derivatives of $\sin x$ and $\cos x$ are bounded by $1$ on all of $\mathbb{R}$, and those of $e^x$ are bounded by $e^K$ on every interval $[-K, K]$, so the condition is satisfied and the three expansions of the following section hold on all of $\mathbb{R}$.

::grafico{f="sin(x);x-x^3/6;x-x^3/6+x^5/120-x^7/5040+x^9/362880" xmin=-7 xmax=7 ymin=-2.5 ymax=2.5 titolo="$y = \sin x$ with the Taylor polynomials $T_3$ (dashed) and $T_9$ (red) centered at $0$: as the degree increases the approximation is good on ever wider intervals"}
:::

:::richiamo{titolo="Taylor's formula with Lagrange remainder"}
If $f$ is of class $C^{n+1}$ on an interval containing $x_0$ and $x$, there exists $c$ between $x_0$ and $x$ such that $f(x) - T_n(x) = \dfrac{f^{(n+1)}(c)}{(n+1)!} (x - x_0)^{n+1}$. (Chapter on derivatives in Mathematical Analysis 1.)
:::

## Standard Maclaurin expansions

:::teorema{#sviluppi-notevoli titolo="Standard expansions"}
$$
\begin{aligned}
e^x &= \sum_{n=0}^{\infty} \frac{x^n}{n!} && x \in \mathbb{R} \\[8pt]
\sin x &= \sum_{n=0}^{\infty} \frac{(-1)^n \, x^{2n+1}}{(2n+1)!} && x \in \mathbb{R} \\[8pt]
\cos x &= \sum_{n=0}^{\infty} \frac{(-1)^n \, x^{2n}}{(2n)!} && x \in \mathbb{R} \\[8pt]
\frac{1}{1 - x} &= \sum_{n=0}^{\infty} x^n && -1 < x < 1 \\[8pt]
\ln(1 + x) &= \sum_{n=1}^{\infty} \frac{(-1)^{n+1} \, x^n}{n} && -1 < x \leq 1 \\[8pt]
(1 + x)^{\alpha} &= \sum_{n=0}^{\infty} \binom{\alpha}{n} x^n && -1 < x < 1
\end{aligned}
$$
The first three hold on all of $\mathbb{R}$ by the **expandability criterion**. The fourth is the sum of the geometric series. The fifth is obtained by integrating term by term the geometric series with ratio $-x$, as shown in the following section, and it holds *also* at $x = 1$ by **Abel's theorem**, because at that point the series converges by the Leibniz test; in particular $\displaystyle\sum_{n=1}^{\infty} \frac{(-1)^{n+1}}{n} = \ln 2$. In the sixth, called the **binomial series**, $\alpha \in \mathbb{R}$ and
$$
\binom{\alpha}{n} = \frac{\alpha (\alpha - 1) \cdots (\alpha - n + 1)}{n!} , \qquad \binom{\alpha}{0} = 1 ;
$$
for $\alpha \in \mathbb{N}$ the coefficients with $n > \alpha$ are zero, the sum is finite and the expansion reduces to the binomial theorem, valid for every $x$.
:::

:::esempio{titolo="Binomial series with exponent one half"}
For $\alpha = \dfrac{1}{2}$ and $|x| < 1$:
$$
\sqrt{1 + x}
= 1 + \frac{x}{2} - \frac{x^2}{8} + \frac{x^3}{16} + \cdots
$$
The coefficients are $\dbinom{1/2}{1} = \dfrac{1}{2}$, $\dbinom{1/2}{2} = \dfrac{\frac{1}{2} \left( \frac{1}{2} - 1 \right)}{2} = -\dfrac{1}{8}$, and so on. The first terms of the **binomial series** provide the approximations of roots used in limits and integrals.
:::

## New expansions from known ones

:::osservazione{#sviluppi-per-composizione titolo="Expansions by substitution and combination"}
By substituting $c x$ or a power $x^k$ for $x$ in a known expansion, multiplying by a power of $x$, adding expansions or decomposing the function, one obtains power series that, by the **uniqueness of the expansion**, are the Taylor series of the functions obtained. The region of validity is transformed accordingly: the condition on $x$ is derived by requiring that the substituted expression belong to the region of the original expansion. For example, from the exponential series with $-x^2$ substituted for $x$:
$$
e^{-x^2} = \sum_{n=0}^{\infty} \frac{(-1)^n \, x^{2n}}{n!} , \qquad x \in \mathbb{R} ,
$$
an expansion that, computed from the definition, would require all the derivatives of $e^{-x^2}$.
:::

:::osservazione{#sviluppi-per-derivazione-integrazione titolo="Expansions by differentiation and integration"}
Differentiating or integrating a known expansion term by term gives the expansions of the derivative and of the antiderivatives, with the *same* radius. The main example is the arctangent: for $|t| < 1$, from the geometric series with ratio $-t^2$,
$$
\frac{1}{1 + t^2} = \sum_{n=0}^{\infty} (-1)^n \, t^{2n} ,
$$
and integrating from $0$ to $x$, for $|x| < 1$,
$$
\arctan x = \sum_{n=0}^{\infty} \frac{(-1)^n \, x^{2n+1}}{2n+1} .
$$
At $x = \pm 1$ the series converges by the **Leibniz test**, so by **Abel's theorem** the equality extends to $[-1, 1]$; in particular, with $x = 1$,
$$
\frac{\pi}{4} = 1 - \frac{1}{3} + \frac{1}{5} - \frac{1}{7} + \cdots
$$
With the same procedure, integrating the geometric series with ratio $-t$, one obtains the expansion of $\ln(1 + x)$ in the list of standard expansions.

::grafico{f="atan(x);x-x^3/3+x^5/5;x-x^3/3+x^5/5-x^7/7+x^9/9-x^11/11+x^13/13" xmin=-1.8 xmax=1.8 ymin=-2.2 ymax=2.2 asintoti="x=-1;x=1" titolo="$y = \arctan x$ with the partial sums of degree $5$ (dashed) and $13$ (red): they follow the function between the lines $x = -1$ and $x = 1$ and move away from it outside"}
:::

## Applications

:::osservazione{#somma-di-serie-numeriche titolo="Sums of numerical series"}
A numerical series whose terms reproduce the coefficients of a known expansion is the value of that expansion at a point. The procedure has three steps: one recognizes the expansion, identifies the point $x$ to substitute, and checks that the point belongs to the **region of validity**. For example, for $\displaystyle\sum_{n=1}^{\infty} \frac{n}{2^n}$ the suitable expansion is $\displaystyle\sum_{n=1}^{\infty} n \, x^n = \frac{x}{(1-x)^2}$, obtained by differentiating the geometric series, and the point is $x = \dfrac{1}{2}$, interior to $(-1, 1)$; hence
$$
\sum_{n=1}^{\infty} \frac{n}{2^n}
= \frac{\dfrac{1}{2}}{\left( 1 - \dfrac{1}{2} \right)^{\! 2}}
= 2 .
$$
:::

:::osservazione{#limiti-con-taylor titolo="Computing limits"}
For a limit in indeterminate form as $x \to 0$, each function is replaced by its Maclaurin expansion truncated at the required order, with the remainder written as a little-o. The Taylor series provides the terms of *every* order, so the expansion can be pushed as far as needed. For example, since $\cos x = 1 - \dfrac{x^2}{2} + \dfrac{x^4}{24} + o(x^4)$,
$$
\lim_{x \to 0} \frac{\cos x - 1 + \dfrac{x^2}{2}}{x^4}
= \lim_{x \to 0} \frac{\dfrac{x^4}{24} + o(x^4)}{x^4}
= \frac{1}{24} .
$$
The first two terms cancel with those of the numerator, therefore the required order of the expansion is the **fourth**, the same as that of the denominator.
:::
