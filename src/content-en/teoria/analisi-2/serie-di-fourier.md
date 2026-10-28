---
titolo: Fourier series
sommario: How a periodic function is expanded in a series of sines and cosines, how the coefficients are computed, at which points and in what sense the series converges, and how Parseval's identity links the function to its coefficients.
---

## Periodic functions and trigonometric polynomials

:::definizione{#funzione-periodica titolo="Periodic function"}
$f : \mathbb{R} \to \mathbb{R}$ is **periodic** with period $T > 0$ if $f(x + T) = f(x)$ for every $x \in \mathbb{R}$. A function defined only on $[-\pi, \pi)$ extends uniquely to a $2\pi$-periodic function on $\mathbb{R}$, the **periodic extension**, by repeating its values on each interval $[\pi, 3\pi)$, $[-3\pi, -\pi)$ and so on. For an integrable $T$-periodic function the integral over one period does *not* depend on the starting point:
$$
\int_{a}^{a + T} f(x)\, dx = \int_{0}^{T} f(x)\, dx
\qquad \text{for every } a \in \mathbb{R} .
$$
Periodic functions describe phenomena that repeat, such as oscillations, waves and signals. The theory is developed for the period $2\pi$, the common period of $\sin x$ and $\cos x$, and is carried over to an arbitrary period by a change of variable.

::grafico{f="(x-2*pi*floor((x+pi)/(2*pi)))" xmin=-10 xmax=10 ymin=-4.5 ymax=4.5 punti="-9.4248,-3.1416,pieno;-9.4248,3.1416,vuoto;-3.1416,-3.1416,pieno;-3.1416,3.1416,vuoto;3.1416,-3.1416,pieno;3.1416,3.1416,vuoto;9.4248,-3.1416,pieno;9.4248,3.1416,vuoto" titolo="$2\pi$-periodic extension of $f(x) = x$, $x \in [-\pi, \pi)$: the piece on $[-\pi, \pi)$ repeats in every period, with a jump at the points $\pi + 2k\pi$"}
:::

:::definizione{#polinomio-trigonometrico titolo="Trigonometric polynomial"}
A **trigonometric polynomial** of degree $N$ is a function of the form
$$
s_N(x) = \frac{a_0}{2} + \sum_{n=1}^{N} \bigl( a_n \cos(nx) + b_n \sin(nx) \bigr),
$$
with $a_0, a_1, \dots, a_N, b_1, \dots, b_N \in \mathbb{R}$. Every trigonometric polynomial is $2\pi$-periodic and **infinitely differentiable**, since it is a finite sum of sines and cosines. Trigonometric polynomials are the building blocks of the theory: the Fourier series represents a periodic function as a limit of trigonometric polynomials, just as the Taylor series represents a smooth function as a limit of algebraic polynomials.
:::

## Orthogonality of the trigonometric system

::::teorema{#ortogonalita titolo="Orthogonality of the trigonometric system"}
For every pair of integers $n, m \geq 1$ the following relations hold:
$$
\begin{gathered}
\int_{-\pi}^{\pi} \cos(nx) \cos(mx)\, dx =
\begin{cases}
0 & \text{if } n \neq m \\
\pi & \text{if } n = m
\end{cases}
\\[8pt]
\int_{-\pi}^{\pi} \sin(nx) \sin(mx)\, dx =
\begin{cases}
0 & \text{if } n \neq m \\
\pi & \text{if } n = m
\end{cases}
\\[8pt]
\int_{-\pi}^{\pi} \sin(nx) \cos(mx)\, dx = 0,
\qquad
\int_{-\pi}^{\pi} \cos(nx)\, dx = \int_{-\pi}^{\pi} \sin(nx)\, dx = 0 .
\end{gathered}
$$
On $[-\pi, \pi]$ the product of two different functions of the system $1, \cos x, \sin x, \cos(2x), \sin(2x), \dots$ has **zero integral**. This property makes it possible to isolate *one* coefficient at a time in the expansion of a function, and it is the foundation of the formulas for the Fourier coefficients.

::grafico{f="sin(x)*sin(2*x)" area="sin(x)*sin(2*x);0;-3.1416;3.1416" xmin=-3.8 xmax=3.8 ymin=-1.1 ymax=1.1 asintoti="x=-3.1416;x=3.1416" titolo="$y = \sin x \sin(2x)$ on $[-\pi, \pi]$: the regions above and below the $x$-axis have the same area, therefore the integral is zero"}

:::dimostrazione
For every integer $k \neq 0$ we have $\displaystyle\int_{-\pi}^{\pi} \cos(kx)\, dx = \left[ \frac{\sin(kx)}{k} \right]_{-\pi}^{\pi} = 0$, since $\sin(k\pi) = 0$; the integral of $\sin(kx)$ is zero because the function is odd on the symmetric interval. For the products we apply the **product-to-sum formulas**:
$$
\cos(nx)\cos(mx) = \frac{\cos\bigl((n-m)x\bigr) + \cos\bigl((n+m)x\bigr)}{2} .
$$
If $n \neq m$ both terms are cosines of nonzero integer multiples of $x$, therefore their integrals are zero. If $n = m$ the first term is $\cos 0 = 1$, hence
$$
\int_{-\pi}^{\pi} \cos^2(nx)\, dx = \int_{-\pi}^{\pi} \frac{1 + \cos(2nx)}{2}\, dx = \pi .
$$
For the sines we use $\sin(nx)\sin(mx) = \dfrac{\cos\bigl((n-m)x\bigr) - \cos\bigl((n+m)x\bigr)}{2}$ and argue in the same way. Finally, $\sin(nx)\cos(mx)$ is an odd function, being the product of an odd and an even function, therefore its integral over $[-\pi, \pi]$ is **zero**.
:::
::::

## Coefficients and Fourier series

::::proposizione{#coefficienti-di-un-polinomio titolo="Coefficients of a trigonometric polynomial"}
If $f$ is the trigonometric polynomial $\dfrac{a_0}{2} + \displaystyle\sum_{n=1}^{N} \bigl( a_n \cos(nx) + b_n \sin(nx) \bigr)$, then for every $n = 0, 1, \dots, N$ and $m = 1, \dots, N$
$$
a_n = \frac{1}{\pi} \int_{-\pi}^{\pi} f(x) \cos(nx)\, dx,
\qquad
b_m = \frac{1}{\pi} \int_{-\pi}^{\pi} f(x) \sin(mx)\, dx .
$$
The coefficients of a trigonometric polynomial are recovered from the function by an integral. The same formulas make sense for *any* integrable function, and this suggests adopting them as the definition of the coefficients for an arbitrary periodic function.

:::dimostrazione
Multiply $f$ by $\cos(mx)$ and integrate over $[-\pi, \pi]$; since the sum is finite, the integral distributes over the terms. By the **orthogonality of the trigonometric system** every term has zero integral, *except* the one with $\cos(mx) \cos(mx)$, which equals $a_m \pi$. Therefore $\displaystyle\int_{-\pi}^{\pi} f(x)\cos(mx)\, dx = a_m \pi$, that is, the formula for $a_m$. For $m = 0$ we integrate $f$ directly: every sine and cosine has zero integral and what remains is $\dfrac{a_0}{2} \cdot 2\pi = a_0 \pi$. Multiplying by $\sin(mx)$ gives the formula for $b_m$ in the same way.
:::
::::

:::richiamo{titolo="Orthogonality of the trigonometric system"}
For integers $n, m \geq 1$: $\displaystyle\int_{-\pi}^{\pi} \cos(nx)\cos(mx)\, dx$ and $\displaystyle\int_{-\pi}^{\pi} \sin(nx)\sin(mx)\, dx$ equal $0$ for $n \neq m$ and $\pi$ for $n = m$; $\displaystyle\int_{-\pi}^{\pi} \sin(nx)\cos(mx)\, dx = 0$ always.
:::

:::definizione{#coefficienti-di-fourier titolo="Fourier coefficients"}
Let $f$ be a $2\pi$-periodic function integrable on $[-\pi, \pi]$. The **Fourier coefficients** of $f$ are
$$
a_n = \frac{1}{\pi} \int_{-\pi}^{\pi} f(x) \cos(nx)\, dx \quad (n \geq 0),
\qquad
b_n = \frac{1}{\pi} \int_{-\pi}^{\pi} f(x) \sin(nx)\, dx \quad (n \geq 1).
$$
The constant term of the expansion is $\dfrac{a_0}{2}$, and the division by $2$ makes the formula for $a_n$ hold also for $n = 0$ without exceptions. The value $\dfrac{a_0}{2} = \dfrac{1}{2\pi} \displaystyle\int_{-\pi}^{\pi} f(x)\, dx$ is the **mean** of $f$ over one period.
:::

:::definizione{#serie-di-fourier titolo="Fourier series"}
The **Fourier series** of $f$ is the series of functions
$$
f(x) \sim \frac{a_0}{2} + \sum_{n=1}^{\infty} \bigl( a_n \cos(nx) + b_n \sin(nx) \bigr),
$$
where $a_n$ and $b_n$ are the Fourier coefficients of $f$. The symbol $\sim$ indicates that the series is *associated* with $f$, *not* that its sum coincides with $f(x)$: the convergence of the series and the value of its sum are separate questions, settled by the pointwise and uniform convergence theorems.
:::

:::esempio{titolo="Fourier series of the sawtooth wave"}
Let $f$ be the $2\pi$-periodic extension of $f(x) = x$, $x \in [-\pi, \pi)$. The function $x \cos(nx)$ is **odd**, therefore $a_n = 0$ for every $n \geq 0$. For the $b_n$ we **integrate by parts**:
$$
\begin{aligned}
b_n &= \frac{1}{\pi} \int_{-\pi}^{\pi} x \sin(nx)\, dx \\[6pt]
&= \frac{1}{\pi} \left[ -\frac{x \cos(nx)}{n} \right]_{-\pi}^{\pi} + \frac{1}{\pi} \int_{-\pi}^{\pi} \frac{\cos(nx)}{n}\, dx \\[6pt]
&= \frac{1}{\pi} \cdot \left( -\frac{2\pi \cos(n\pi)}{n} \right) + 0
= \frac{2\,(-1)^{n+1}}{n} ,
\end{aligned}
$$
since $\cos(n\pi) = (-1)^n$. The Fourier series is
$$
x \sim \sum_{n=1}^{\infty} \frac{2\,(-1)^{n+1}}{n} \sin(nx)
= 2 \sin x - \sin(2x) + \frac{2}{3} \sin(3x) - \cdots
$$

::grafico{f="(x-2*pi*floor((x+pi)/(2*pi)));2*sin(x)-sin(2*x)+2*sin(3*x)/3;2*(sin(x)-sin(2*x)/2+sin(3*x)/3-sin(4*x)/4+sin(5*x)/5-sin(6*x)/6+sin(7*x)/7-sin(8*x)/8+sin(9*x)/9-sin(10*x)/10)" legenda="y = f(x);y = s_3(x);y = s_{10}(x)" xmin=-7 xmax=7.3 ymin=-4.5 ymax=4.5 punti="-3.1416,0,pieno;3.1416,0,pieno" titolo="Sawtooth wave with the partial sums $s_3$ (dashed) and $s_{10}$ (red): at the jump points $\pm\pi$ every partial sum equals $0$"}
:::

## Even functions and odd functions

:::proposizione{#serie-di-coseni-e-di-seni titolo="Cosine-only and sine-only series"}
Let $f$ be a $2\pi$-periodic function integrable on $[-\pi, \pi]$.

- If $f$ is even, then $b_n = 0$ for every $n \geq 1$ and $a_n = \dfrac{2}{\pi} \displaystyle\int_{0}^{\pi} f(x) \cos(nx)\, dx$: the series contains **only cosines**.
- If $f$ is odd, then $a_n = 0$ for every $n \geq 0$ and $b_n = \dfrac{2}{\pi} \displaystyle\int_{0}^{\pi} f(x) \sin(nx)\, dx$: the series contains **only sines**.

The proposition follows from the parity of the products: if $f$ is even, $f(x)\sin(nx)$ is odd and its integral over the symmetric interval $[-\pi, \pi]$ is zero, while $f(x)\cos(nx)$ is even and its integral is twice the integral over $[0, \pi]$; for odd $f$ the roles are exchanged. Recognizing the symmetry before computing halves the work, hence the **parity check** is the first step of *every* Fourier series expansion.
:::

:::esempio{titolo="Fourier series of x²"}
Let $f$ be the $2\pi$-periodic extension of $f(x) = x^2$, $x \in [-\pi, \pi]$. The function is **even**, therefore $b_n = 0$ and only the $a_n$ are needed. The coefficient $a_0$ equals
$$
a_0 = \frac{2}{\pi} \int_{0}^{\pi} x^2\, dx = \frac{2}{\pi} \cdot \frac{\pi^3}{3} = \frac{2\pi^2}{3} .
$$
For $n \geq 1$ we **integrate by parts** twice; the terms with $\sin(n\pi)$ are zero, therefore
$$
\begin{aligned}
a_n &= \frac{2}{\pi} \int_{0}^{\pi} x^2 \cos(nx)\, dx
= \frac{2}{\pi} \left( \left[ \frac{x^2 \sin(nx)}{n} \right]_0^{\pi} - \frac{2}{n} \int_0^{\pi} x \sin(nx)\, dx \right) \\[6pt]
&= -\frac{4}{n\pi} \left( \left[ -\frac{x \cos(nx)}{n} \right]_0^{\pi} + \frac{1}{n} \int_0^{\pi} \cos(nx)\, dx \right)
= \frac{4 \cos(n\pi)}{n^2}
= \frac{4\,(-1)^{n}}{n^2} .
\end{aligned}
$$
The Fourier series is
$$
x^2 \sim \frac{\pi^2}{3} + \sum_{n=1}^{\infty} \frac{4\,(-1)^{n}}{n^2} \cos(nx) .
$$

::grafico{f="(x-2*pi*floor((x+pi)/(2*pi)))*(x-2*pi*floor((x+pi)/(2*pi)));pi^2/3-4*cos(x);pi^2/3-4*cos(x)+cos(2*x)" xmin=-10 xmax=10 ymin=-1.5 ymax=11 titolo="Periodic extension of $x^2$ with the partial sums $s_1 = \dfrac{\pi^2}{3} - 4\cos x$ (dashed) and $s_2 = \dfrac{\pi^2}{3} - 4\cos x + \cos(2x)$ (red)"}
:::

## Pointwise convergence

The notions of pointwise, uniform and total convergence for series of functions are treated in the chapter on sequences and series of functions.

:::richiamo{titolo="Pointwise convergence of a series of functions"}
The series of functions $\sum f_n$ **converges pointwise** at $x$ if the numerical series $\sum f_n(x)$ converges; it converges pointwise on a set $I$ if it converges at every point of $I$.
:::

:::definizione{#regolare-a-tratti titolo="Piecewise smooth function"}
A $2\pi$-periodic function $f : \mathbb{R} \to \mathbb{R}$ is **piecewise smooth** if there exists a partition $-\pi = x_0 < x_1 < \dots < x_k = \pi$ such that $f$ is differentiable with continuous derivative on each open interval $(x_{i-1}, x_i)$, and at each point $x_i$ the one-sided limits of $f$ and of $f'$ exist and are finite. A piecewise smooth function can have a *finite* number of jumps in one period; at the jump points $f(x^+)$ and $f(x^-)$ denote the right and left limits. The class includes the functions met in the exercises, such as step functions, the sawtooth wave and the periodic extensions of polynomials, and in this class the convergence theorems have a simple statement.
:::

:::teorema{#convergenza-puntuale titolo="Pointwise convergence theorem"}
Let $f$ be a $2\pi$-periodic, piecewise smooth function. Then the Fourier series of $f$ **converges** at *every* point $x \in \mathbb{R}$ and its sum equals
$$
\frac{a_0}{2} + \sum_{n=1}^{\infty} \bigl( a_n \cos(nx) + b_n \sin(nx) \bigr)
= \frac{f(x^+) + f(x^-)}{2} .
$$
At the points where $f$ is continuous the two one-sided limits coincide with $f(x)$, therefore the sum of the series is $f(x)$; at the jump points the sum is the **mean of the two one-sided values**, whatever value is assigned to $f$ at that point. The proof requires the study of the Dirichlet kernel and is left to the reference texts. The theorem turns the symbol $\sim$ into an equality that holds point by point, and evaluating the equality at chosen points is the method by which sums of numerical series are obtained from Fourier series.

::grafico{f="sign(sin(x));4/pi*(sin(x)+sin(3*x)/3);4/pi*(sin(x)+sin(3*x)/3+sin(5*x)/5+sin(7*x)/7+sin(9*x)/9+sin(11*x)/11+sin(13*x)/13+sin(15*x)/15)" legenda="y = f(x);y = s_3(x);y = s_{15}(x)" xmin=-7 xmax=7.3 ymin=-1.6 ymax=1.6 punti="-3.1416,0,pieno;0,0,pieno;3.1416,0,pieno" titolo="Square wave ($-1$ on $(-\pi, 0)$, $1$ on $(0, \pi)$) with the partial sums up to $\sin(3x)$ (dashed) and up to $\sin(15x)$ (red): at the jumps every partial sum equals $0$, the mean of the one-sided limits"}
:::

:::esempio{titolo="Sum of the series Σ 1/n²"}
The $2\pi$-periodic extension of $x^2$ from $[-\pi, \pi]$ is continuous *also* at the points $\pm\pi$, because the values at the endpoints coincide: $(-\pi)^2 = \pi^2$. The function is piecewise smooth, therefore the **pointwise convergence theorem** applies and at $x = \pi$ the series converges to $f(\pi) = \pi^2$. Since $\cos(n\pi) = (-1)^n$, the equality becomes
$$
\pi^2 = \frac{\pi^2}{3} + \sum_{n=1}^{\infty} \frac{4\,(-1)^{n}}{n^2} \, (-1)^n
= \frac{\pi^2}{3} + 4 \sum_{n=1}^{\infty} \frac{1}{n^2} ,
$$
and solving for the series we obtain
$$
\sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{1}{4} \left( \pi^2 - \frac{\pi^2}{3} \right) = \frac{\pi^2}{6} .
$$
:::

:::esempio{titolo="Mean value at a jump point"}
The periodic extension of the sawtooth wave $f(x) = x$, $x \in [-\pi, \pi)$, has a jump at $x = \pi$: the left limit is $\pi$ and the right limit, by periodicity, is $-\pi$. By the **pointwise convergence theorem** the series converges at $\pi$ to the **mean** $\dfrac{\pi + (-\pi)}{2} = 0$. The result is consistent with the direct computation, since every term $\dfrac{2(-1)^{n+1}}{n} \sin(n\pi)$ is zero.
:::

## Uniform convergence

:::richiamo{titolo="Total convergence (Weierstrass M-test)"}
If $|f_n(x)| \leq M_n$ for every $x \in I$ and the numerical series $\sum M_n$ converges, then the series of functions $\sum f_n$ converges **totally**, hence **uniformly**, on $I$.
:::

:::teorema{#convergenza-uniforme titolo="Uniform convergence for continuous piecewise smooth functions"}
Let $f$ be a $2\pi$-periodic function, continuous on $\mathbb{R}$ and piecewise smooth. Then the series of the absolute values of the coefficients $\displaystyle\sum_{n=1}^{\infty} \bigl( |a_n| + |b_n| \bigr)$ converges, therefore the Fourier series converges **totally**, and hence **uniformly**, to $f$ on all of $\mathbb{R}$. Total convergence follows from the **Weierstrass M-test**, since $|a_n \cos(nx) + b_n \sin(nx)| \leq |a_n| + |b_n|$; the convergence of the series of coefficients is proved with Parseval's identity applied to the derivative and is left to the reference texts. To verify the continuity hypothesis for a function given on $[-\pi, \pi]$ one must check *also* the junction points $\pm\pi$, that is, that the values at the endpoints coincide: the extension of $x^2$ is continuous, that of $x$ is not.
:::

:::richiamo{titolo="Continuity of the uniform limit"}
If a sequence of continuous functions converges uniformly on $I$, then the limit function is **continuous** on $I$.
:::

:::attenzione
If $f$ has *at least one* jump point, uniform convergence on $\mathbb{R}$ is **impossible**: the partial sums are trigonometric polynomials, hence continuous functions, and a uniform limit of continuous functions is continuous. For the sawtooth wave $f(x) = x$, $x \in [-\pi, \pi)$, the Fourier series converges **pointwise** everywhere but **not uniformly** on $\mathbb{R}$.
:::

## Parseval's identity

:::teorema{#uguaglianza-di-parseval titolo="Parseval's identity"}
Let $f$ be a $2\pi$-periodic function, square-integrable on $[-\pi, \pi]$, and let $a_n$, $b_n$ be its Fourier coefficients. Then
$$
\frac{1}{\pi} \int_{-\pi}^{\pi} f(x)^2\, dx
= \frac{a_0^2}{2} + \sum_{n=1}^{\infty} \bigl( a_n^2 + b_n^2 \bigr) .
$$
The integral of the square of the function, which in physics represents the energy of the signal, equals the **sum of the squares of the coefficients**: the energy is distributed over the harmonics. The proof uses the completeness of the trigonometric system and is left to the reference texts. In practice the identity yields sums of numerical series involving the *squares* of the coefficients, whereas pointwise convergence yields the sums involving the coefficients to the first power.
:::

:::esempio{titolo="Sum of the series Σ 1/n⁴"}
For the periodic extension of $f(x) = x^2$ on $[-\pi, \pi]$ the coefficients are $a_0 = \dfrac{2\pi^2}{3}$, $a_n = \dfrac{4(-1)^n}{n^2}$, $b_n = 0$. The left-hand side of **Parseval's identity** equals
$$
\frac{1}{\pi} \int_{-\pi}^{\pi} x^4\, dx = \frac{1}{\pi} \cdot \frac{2\pi^5}{5} = \frac{2\pi^4}{5} ,
$$
therefore the identity becomes
$$
\frac{2\pi^4}{5} = \frac{1}{2} \cdot \frac{4\pi^4}{9} + \sum_{n=1}^{\infty} \frac{16}{n^4}
= \frac{2\pi^4}{9} + 16 \sum_{n=1}^{\infty} \frac{1}{n^4} .
$$
Solving for the series we obtain
$$
\sum_{n=1}^{\infty} \frac{1}{n^4}
= \frac{1}{16} \left( \frac{2\pi^4}{5} - \frac{2\pi^4}{9} \right)
= \frac{1}{16} \cdot \frac{8\pi^4}{45}
= \frac{\pi^4}{90} .
$$
:::

## Arbitrary period

:::definizione{#periodo-generico titolo="Fourier series with period 2L"}
Let $f$ be a $2L$-periodic function integrable on $[-L, L]$, with $L > 0$. The Fourier coefficients are
$$
a_n = \frac{1}{L} \int_{-L}^{L} f(x) \cos\!\left( \frac{n\pi x}{L} \right) dx,
\qquad
b_n = \frac{1}{L} \int_{-L}^{L} f(x) \sin\!\left( \frac{n\pi x}{L} \right) dx,
$$
and the Fourier series is
$$
f(x) \sim \frac{a_0}{2} + \sum_{n=1}^{\infty} \left( a_n \cos\!\left( \frac{n\pi x}{L} \right) + b_n \sin\!\left( \frac{n\pi x}{L} \right) \right).
$$
The formulas are obtained from those for the period $2\pi$ by the **substitution** $t = \dfrac{\pi x}{L}$, which turns a $2L$-periodic function of $x$ into a $2\pi$-periodic function of $t$. For this reason the pointwise and uniform convergence theorems, the simplifications for even and odd functions and Parseval's identity, with $\dfrac{1}{L} \displaystyle\int_{-L}^{L} f(x)^2 dx$ on the left, remain **valid without changes**.
:::

:::esempio{titolo="A function with period 2"}
Let $f$ be the $2$-periodic extension of $f(x) = 1 - x^2$, $x \in [-1, 1]$, so $L = 1$. The function is **even**, hence $b_n = 0$. The coefficients are
$$
a_0 = \int_{-1}^{1} (1 - x^2)\, dx = \frac{4}{3},
\qquad
a_n = \int_{-1}^{1} (1 - x^2) \cos(n\pi x)\, dx = \frac{4\,(-1)^{n+1}}{n^2 \pi^2} ,
$$
where $a_n$ is computed with two integrations by parts as for $x^2$. Since $f(-1) = f(1) = 0$, the periodic extension is continuous and piecewise smooth, therefore the series **converges uniformly** and for every $x \in \mathbb{R}$
$$
f(x) = \frac{2}{3} + \sum_{n=1}^{\infty} \frac{4\,(-1)^{n+1}}{n^2 \pi^2} \cos(n\pi x) .
$$

::grafico{f="1-(x-2*floor((x+1)/2))*(x-2*floor((x+1)/2));2/3+4/(pi*pi)*cos(pi*x)" legenda="y = f(x);y = s_1(x)" xmin=-4.3 xmax=4.3 ymin=-0.4 ymax=1.4 titolo="$2$-periodic extension of $1 - x^2$ and the partial sum $s_1 = \dfrac{2}{3} + \dfrac{4}{\pi^2}\cos(\pi x)$ (dashed), already close to the function on all of $\mathbb{R}$"}
:::
