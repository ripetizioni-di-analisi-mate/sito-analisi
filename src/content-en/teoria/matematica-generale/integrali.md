---
titolo: Integral calculus and economic applications
sommario: How to find antiderivatives using standard integrals, substitution, integration by parts, and partial fractions. The chapter defines the definite integral and the accumulation function, states the mean value theorem for integrals and the fundamental theorem of calculus, and uses integrals to find areas, total costs, surpluses, and present values.
---

## Antiderivatives and the indefinite integral

:::definizione{#primitiva titolo="Antiderivative"}
Differentiation gives the slope of a function. Here the process is reversed by looking for a function with a given derivative. Let $f$ be defined on an interval $I$. A function $F$ differentiable on $I$ is an **antiderivative** of $f$ on $I$ if
$$
F'(x) = f(x) \qquad \text{for every } x \in I .
$$
For example, $F(x) = x^3$ is an antiderivative of $f(x) = 3x^2$ on $\mathbb{R}$ because $\left( x^3 \right)' = 3x^2$. The functions $x^3 + 5$ and $x^3 - 2$ are also antiderivatives of $3x^2$ because the derivative of a constant is zero. A function with an antiderivative therefore has infinitely many.
:::

:::teorema{#primitive-di-una-funzione titolo="Antiderivatives of the same function"}
Let $F$ be an antiderivative of $f$ on the interval $I$. Then the antiderivatives of $f$ on $I$ are *precisely* the functions
$$
F(x) + c, \qquad c \in \mathbb{R} .
$$
Every $F + c$ is an antiderivative, because $(F + c)' = F' = f$. Conversely, if $G$ is another antiderivative, the difference $G - F$ has derivative $f - f = 0$ on the whole interval, and by the theorem on the **sign of the derivative and monotonicity** it is constant. The graphs of the antiderivatives are vertical translations of one another, and the constant is fixed by assigning the value at one point. The antiderivative of $2x$ that equals $3$ at $x = 1$ is $x^2 + c$ with $1 + c = 3$, that is, $x^2 + 2$.

::grafico{f="x^2;x^2+2" segmenti="1,1,1,3;-1.5,2.25,-1.5,4.25" punti="1,3,pieno" xmin=-3 xmax=3 ymin=-1 ymax=9 legenda="y = x^2;y = x^2 + 2" titolo="Two antiderivatives of $2x$. The graphs of $x^2$ and $x^2 + 2$ are $2$ units apart vertically for every $x$, with the same slope at each x-coordinate. The point $(1, 3)$ identifies the graph of $x^2 + 2$"}

:::

:::definizione{#integrale-indefinito titolo="Indefinite integral"}
The **indefinite integral** of $f$ is the set of all its antiderivatives, and it is written
$$
\int f(x)\,dx = F(x) + c ,
$$
where $F$ is any antiderivative and $c$ is an arbitrary constant. The function $f$ is the **integrand**, and $dx$ indicates the variable of integration. The rules for differentiating a sum and a constant multiple give **linearity** for $h, k \in \mathbb{R}$.
$$
\int \big( h\,f(x) + k\,g(x) \big)\,dx = h \int f(x)\,dx + k \int g(x)\,dx .
$$
For example, $\displaystyle\int \left( 3x^2 - 4x + 5 \right) dx = x^3 - 2x^2 + 5x + c$, as can be checked by differentiating the result. Differentiation can be used to check any indefinite integral.
:::

## Basic integrals

:::teorema{#integrali-immediati titolo="Basic integrals"}
Reversing the derivative formulas for elementary functions gives the following integrals on the intervals where the functions are defined.

| $f(x)$ | $\displaystyle\int f(x)\,dx$ |
| --- | --- |
| $x^{a}$, with $a \neq -1$ | $\dfrac{x^{a + 1}}{a + 1} + c$ |
| $\dfrac{1}{x}$ | $\ln \lvert x \rvert + c$ |
| $e^{x}$ | $e^{x} + c$ |
| $a^{x}$, with $a > 0$ and $a \neq 1$ | $\dfrac{a^{x}}{\ln a} + c$ |
| $\sin x$ | $-\cos x + c$ |
| $\cos x$ | $\sin x + c$ |

The absolute value in the antiderivative of $\dfrac{1}{x}$ is needed for $x < 0$, since for $x < 0$ we have $\big( \ln(-x) \big)' = \dfrac{-1}{-x} = \dfrac{1}{x}$. The power rule for integration applies to roots and reciprocals once they are written as powers.
$$
\int \left( \sqrt{x} + \frac{1}{x^2} \right) dx
= \int \left( x^{\frac{1}{2}} + x^{-2} \right) dx
= \frac{2}{3}\,x^{\frac{3}{2}} - \frac{1}{x} + c .
$$
:::

:::teorema{#integrali-forma-composta titolo="Basic integrals in composite form"}
Let $g$ be differentiable on an interval. The chain rule gives the following formulas.
$$
\int g(x)^{a}\,g'(x)\,dx = \frac{g(x)^{a + 1}}{a + 1} + c \quad (a \neq -1),
\qquad
\int \frac{g'(x)}{g(x)}\,dx = \ln \lvert g(x) \rvert + c,
\qquad
\int e^{g(x)}\,g'(x)\,dx = e^{g(x)} + c .
$$
These forms apply when the integrand contains a function $g$ and a factor proportional to its derivative $g'$. A constant multiplier accounts for any difference. For example,
$$
\int \frac{2x}{x^2 + 3}\,dx = \ln\left( x^2 + 3 \right) + c,
\qquad
\int x \left( x^2 + 1 \right)^3 dx = \frac{1}{2} \int 2x \left( x^2 + 1 \right)^3 dx = \frac{\left( x^2 + 1 \right)^4}{8} + c ,
$$
and the absolute value is omitted in the first case because $x^2 + 3 > 0$. In the second integral the factor $2$ of the derivative of $x^2 + 1$ is missing, so we multiply and divide by $2$. With $g(x) = 3x$ we also obtain $\displaystyle\int e^{3x}\,dx = \dfrac{e^{3x}}{3} + c$.
:::

## Integration by substitution and by parts

:::teorema{#integrazione-per-sostituzione titolo="Integration by substitution"}
Let $f$ be continuous, and let $\varphi$ be invertible and continuously differentiable. Then the substitution $x = \varphi(t)$ gives
$$
\int f(x)\,dx = \int f\big( \varphi(t) \big)\,\varphi'(t)\,dt ,
$$
Return to the variable $x$ using the inverse function $t = \varphi^{-1}(x)$. In practice, a new variable $t$ is chosen to simplify the integrand. Both $x$ and $dx = \varphi'(t)\,dt$ are expressed in terms of $t$ before integration, then the original variable is substituted back. The formula follows from the chain rule. If $G(t)$ is an antiderivative of the right-hand side, the derivative of $G\big( \varphi^{-1}(x) \big)$ is $f(x)$. For example, the substitution $t = \sqrt{x}$ gives $x = t^2$ and $dx = 2t\,dt$, so for $x > 0$
$$
\int \frac{e^{\sqrt{x}}}{\sqrt{x}}\,dx = \int \frac{e^{t}}{t}\,2t\,dt = 2 \int e^{t}\,dt = 2\,e^{\sqrt{x}} + c .
$$
:::

::::teorema{#integrazione-per-parti titolo="Integration by parts"}
Let $f$ and $g$ be differentiable with continuous derivatives. Then
$$
\int f(x)\,g'(x)\,dx = f(x)\,g(x) - \int f'(x)\,g(x)\,dx .
$$
The factor $g'$ is the *factor to integrate* because an antiderivative is needed. The factor $f$ is the *factor to differentiate* because its derivative is needed. The formula is useful when $f'$ is simpler than $f$, as with polynomials and $\ln x$, and $g'$ has a simple antiderivative, as with $e^{x}$. For example, with $f(x) = x$ and $g'(x) = e^{x}$,
$$
\int x\,e^{x}\,dx = x\,e^{x} - \int e^{x}\,dx = (x - 1)\,e^{x} + c .
$$
For $\displaystyle\int \ln x\,dx$ we choose $f(x) = \ln x$ and $g'(x) = 1$, and we obtain $x \ln x - \displaystyle\int x \cdot \dfrac{1}{x}\,dx = x \ln x - x + c$.

:::dimostrazione
The product rule gives $(f g)' = f' g + f g'$, so $f g$ is an antiderivative of $f' g + f g'$. Integrating both sides and using linearity gives $f g = \displaystyle\int f' g\,dx + \displaystyle\int f g'\,dx$, which yields the formula.
:::
::::

## Integrals of rational functions

:::teorema{#razionali-primo-grado titolo="Rational functions with a first-degree denominator"}
Consider $\dfrac{N(x)}{x - a}$ with $N$ a polynomial. We divide $N(x)$ by $x - a$, obtaining the quotient $Q(x)$ and the constant remainder $r = N(a)$, and we write
$$
\frac{N(x)}{x - a} = Q(x) + \frac{r}{x - a},
\qquad
\int \frac{N(x)}{x - a}\,dx = \int Q(x)\,dx + r \ln \lvert x - a \rvert + c .
$$
The first integral is the integral of a polynomial. The second follows directly from a standard integral. For example, $2x + 3 = 2\,(x + 1) + 1$, so
$$
\int \frac{2x + 3}{x + 1}\,dx = \int \left( 2 + \frac{1}{x + 1} \right) dx = 2x + \ln \lvert x + 1 \rvert + c .
$$
With a denominator $m x + k$ we factor out $m$ and reduce to the same case.
:::

:::teorema{#razionali-secondo-grado titolo="Rational functions with a second-degree denominator"}
Consider $\dfrac{N(x)}{D(x)}$ where $D$ is a quadratic with real roots and $N$ has lower degree than $2$. If the degree of $N$ is at least as large, polynomial division comes first, as in the linear-denominator case. There are constants $A$ and $B$ such that

- if $D(x) = (x - x_1)(x - x_2)$ with $x_1 \neq x_2$, we have $\dfrac{N(x)}{D(x)} = \dfrac{A}{x - x_1} + \dfrac{B}{x - x_2}$;
- if $D(x) = (x - x_1)^2$, we have $\dfrac{N(x)}{D(x)} = \dfrac{A}{x - x_1} + \dfrac{B}{(x - x_1)^2}$.

The fractions on the right-hand side are called **partial fractions**. The antiderivatives of $\dfrac{1}{x - x_1}$ and $\dfrac{1}{(x - x_1)^2}$ are $\ln \lvert x - x_1 \rvert$ and $-\dfrac{1}{x - x_1}$. To find the constants, put the right-hand side over a common denominator and equate the numerators. If the numerator is the derivative of the denominator, as in $\dfrac{2x - 3}{x^2 - 3x + 2}$, the composite form gives $\ln \lvert x^2 - 3x + 2 \rvert + c$ directly, so decomposition is unnecessary. If $D$ has no real roots, the antiderivative involves the arctangent, as discussed in the integrals chapter of Mathematical Analysis 1.
:::

:::esempio{titolo="Partial fraction decomposition"}
The denominator of $\dfrac{x + 5}{x^2 + x - 2}$ has roots $1$ and $-2$, so $x^2 + x - 2 = (x - 1)(x + 2)$ and
$$
\frac{x + 5}{(x - 1)(x + 2)} = \frac{A}{x - 1} + \frac{B}{x + 2}
\iff
x + 5 = A\,(x + 2) + B\,(x - 1) .
$$
The polynomial identity holds for every $x$. With $x = 1$ we obtain $6 = 3A$, so $A = 2$. Substituting $x = -2$ gives $3 = -3B$, so $B = -1$. Therefore
$$
\int \frac{x + 5}{x^2 + x - 2}\,dx = 2 \ln \lvert x - 1 \rvert - \ln \lvert x + 2 \rvert + c .
$$
With the double root, $\dfrac{x}{(x - 1)^2} = \dfrac{(x - 1) + 1}{(x - 1)^2} = \dfrac{1}{x - 1} + \dfrac{1}{(x - 1)^2}$, and the integral is $\ln \lvert x - 1 \rvert - \dfrac{1}{x - 1} + c$.
:::

## The definite integral

:::definizione{#somme-di-riemann titolo="Riemann sums"}
Rectangles approximate the area between the graph of a positive function and the $x$-axis. Let $f$ be defined on the interval $[a, b]$. Divide $[a, b]$ into $n$ equal parts of width $\Delta x = \dfrac{b - a}{n}$ using the partition points
$$
x_k = a + k\,\Delta x, \qquad k = 0, 1, \ldots, n ,
$$
and in each subinterval $[x_{k-1}, x_k]$ we choose a point $\xi_k$. The **Riemann sum** is
$$
S_n = \sum_{k=1}^{n} f(\xi_k)\,\Delta x ,
$$
that is, the sum of the areas of the rectangles with base $\Delta x$ and height $f(\xi_k)$, when $f$ is positive. For $f(x) = 4 - x^2$ on $[0, 2]$, with $n = 4$ and $\xi_k$ equal to the left endpoint, we have $\Delta x = \dfrac{1}{2}$ and
$$
S_4 = \frac{1}{2} \left( 4 + \frac{15}{4} + 3 + \frac{7}{4} \right) = \frac{25}{4} .
$$

::grafico{f="4-x^2+0*sqrt(x*(2-x))" area="4-(floor(2*x)/2)^2;0;0;1.999" segmenti="0.5,0,0.5,4;1,0,1,3.75;1.5,0,1.5,3;2,0,2,1.75" xmin=-1 xmax=3 ymin=-1 ymax=5 legenda="y = 4 - x^2" titolo="The four rectangles in the sum $S_4 = \dfrac{25}{4}$ for $y = 4 - x^2$ on $[0, 2]$ have heights taken at the left endpoints. The area under the graph is $\dfrac{16}{3}$"}

:::

:::definizione{#integrale-definito titolo="Definite integral"}
Let $f$ be continuous on $[a, b]$. As $n$ increases, the Riemann sums approach a finite limit independently of the choice of the points $\xi_k$. This limit is the **definite integral** of $f$ from $a$ to $b$.
$$
\int_a^b f(x)\,dx = \lim_{n \to +\infty} \sum_{k=1}^{n} f(\xi_k)\,\Delta x .
$$
The numbers $a$ and $b$ are the **limits of integration**. Mathematical Analysis 1 proves that the limit exists for every continuous function. The result also holds for bounded functions with a finite number of discontinuities. For $f(x) = x$ on $[0, 1]$ with $\xi_k = x_k = \dfrac{k}{n}$, the sum of the terms of an arithmetic progression, covered in the chapter on sequences, progressions, and series, gives
$$
S_n = \sum_{k=1}^{n} \frac{k}{n} \cdot \frac{1}{n} = \frac{1}{n^2} \cdot \frac{n\,(n + 1)}{2} = \frac{n + 1}{2n} \to \frac{1}{2} ,
$$
so $\displaystyle\int_0^1 x\,dx = \dfrac{1}{2}$, which is the area of the triangle with vertices $(0, 0)$, $(1, 0)$ and $(1, 1)$. We also set $\displaystyle\int_a^a f(x)\,dx = 0$ and $\displaystyle\int_b^a f(x)\,dx = -\int_a^b f(x)\,dx$.
:::

:::teorema{#proprieta-integrale-definito titolo="Properties of the definite integral"}
Let $f$ and $g$ be continuous on an interval that contains the points $a$, $b$, $c$, with $a < b$ in the last two properties, and let $h, k \in \mathbb{R}$.

- **Linearity**: $\displaystyle\int_a^b \big( h\,f(x) + k\,g(x) \big)\,dx = h \int_a^b f(x)\,dx + k \int_a^b g(x)\,dx$.
- **Additivity with respect to the interval**: $\displaystyle\int_a^b f(x)\,dx = \int_a^c f(x)\,dx + \int_c^b f(x)\,dx$.
- **Monotonicity**: if $f(x) \leq g(x)$ on $[a, b]$, then $\displaystyle\int_a^b f(x)\,dx \leq \int_a^b g(x)\,dx$.
- **Comparison with constants**: if $m \leq f(x) \leq M$ on $[a, b]$, then $m\,(b - a) \leq \displaystyle\int_a^b f(x)\,dx \leq M\,(b - a)$.

The first three properties follow by taking limits in the corresponding identities and inequalities for Riemann sums. The last applies monotonicity to the constant functions $m$ and $M$. The comparison bounds an integral without evaluating it. For example, on $[0, 1]$ we have $1 \leq e^{x^2} \leq e$, so $1 \leq \displaystyle\int_0^1 e^{x^2}\,dx \leq e$.
:::

:::osservazione{#integrale-e-area titolo="Integral and area"}
If $f \geq 0$ on $[a, b]$, the integral $\displaystyle\int_a^b f(x)\,dx$ is the area between the graph and the $x$-axis. Where $f < 0$, the terms $f(\xi_k)\,\Delta x$ are negative, so areas below the axis enter the integral *with a minus sign*. The geometric area is found by splitting the interval where $f$ changes sign and reversing the signs of the integrals over the parts where the function is negative. For $f(x) = x^2 - 1$ on $[0, 2]$, the definite integral evaluation formula gives
$$
\int_0^2 \left( x^2 - 1 \right) dx = \frac{2}{3},
\qquad
\text{area} = \int_0^1 \left( 1 - x^2 \right) dx + \int_1^2 \left( x^2 - 1 \right) dx = \frac{2}{3} + \frac{4}{3} = 2 .
$$

::grafico{f="x^2-1" area="x^2-1;0;0;2" etichette="0.45,-0.45,−;1.65,1.1,+" xmin=-1 xmax=3 ymin=-2 ymax=4 legenda="y = x^2 - 1" titolo="On $[0, 2]$ the areas below and above the axis are $\dfrac{2}{3}$ and $\dfrac{4}{3}$, respectively. The integral is their difference, $\dfrac{2}{3}$, and the total area is their sum, $2$"}

:::

## The mean value theorem for integrals and the fundamental theorem of calculus<span id="the-mean-value-theorem-and-the-fundamental-theorem-of-calculus"></span>

:::richiamo{titolo="Extreme value theorem (Weierstrass)"}
If $f$ is continuous on the closed and bounded interval $[a, b]$, then $f$ attains on $[a, b]$ both a minimum $m$ and a maximum $M$.
:::

:::richiamo{titolo="Intermediate value theorem"}
If $f$ is continuous on the interval $[a, b]$, then $f$ takes all the values between $f(a)$ and $f(b)$.
:::

::::teorema{#teorema-della-media titolo="Mean value theorem for integrals"}
Let $f$ be continuous on $[a, b]$. Then there exists at least one point $c \in [a, b]$ such that
$$
\frac{1}{b - a} \int_a^b f(x)\,dx = f(c) .
$$
The number on the left is the **average value** of $f$ on $[a, b]$. If $f \geq 0$, the rectangle with base $[a, b]$ and height $f(c)$ has the same area as the region under the graph. For $f(x) = x^2$ on $[0, 3]$, the average is $\dfrac{1}{3} \cdot 9 = 3$, and $c^2 = 3$ with $c \in [0, 3]$ gives $c = \sqrt{3}$.

::grafico{f="x^2" area="x^2;0;0;3" segmenti="0,3,3,3;3,0,3,3;1.732,0,1.732,3" punti="1.732,3,pieno" xmin=-1 xmax=4 ymin=-1 ymax=9 legenda="y = x^2" titolo="The region under $y = x^2$ on $[0, 3]$ and the dashed rectangle of height $3$ have the same area, $9$. The height is the value of $f$ at $c = \sqrt{3}$"}

:::dimostrazione
The average lies between the minimum and maximum of $f$, so $f$ attains it. By the extreme value theorem, $f$ attains a minimum $m$ and a maximum $M$ on $[a, b]$, which gives $m \leq f(x) \leq M$. Comparison with constants gives
$$
m\,(b - a) \leq \int_a^b f(x)\,dx \leq M\,(b - a),
\qquad
\text{therefore}
\qquad
m \leq \frac{1}{b - a} \int_a^b f(x)\,dx \leq M .
$$
The average value is therefore a value between the minimum and the maximum of $f$. Let $x_1$ and $x_2$ be two points of $[a, b]$ with $f(x_1) = m$ and $f(x_2) = M$. By the intermediate value theorem, applied to the interval with endpoints $x_1$ and $x_2$, the function takes every value between $m$ and $M$, so there exists $c$ in that interval, and therefore in $[a, b]$, at which $f(c)$ is equal to the average value.
:::
::::

:::definizione{#funzione-integrale titolo="Accumulation function"}
Let $f$ be continuous on the interval $I$ and let $a \in I$. The **accumulation function** of $f$ starting at $a$ is
$$
F(x) = \int_a^x f(t)\,dt, \qquad x \in I .
$$
The variable of integration is $t$ because $x$ denotes the upper limit. If $f \geq 0$ and $x > a$, the value $F(x)$ is the area under the graph of $f$ from $a$ to $x$, and this area increases as $x$ moves to the right. We always have $F(a) = 0$. For $f(t) = \dfrac{1}{t}$ and $a = 1$, the value $F(x)$ for $x > 1$ is the area under the hyperbola from $1$ to $x$. The definite integral evaluation formula gives $F(x) = \ln x$.

::grafico{f="1/x+0*sqrt(x)" area="1/x;0;1;3" punti="1,0,pieno;3,0,pieno,x" nomi="t,y" xmin=-1 xmax=5 ymin=-1 ymax=3 legenda="y = \dfrac{1}{t}" titolo="The accumulation function $F(x) = \int_1^x \dfrac{1}{t}\,dt$ at $x = 3$ is the colored area under the graph of $\dfrac{1}{t}$ between $1$ and $3$, and it equals $\ln 3$"}

:::

::::teorema{#teorema-fondamentale titolo="Fundamental theorem of calculus"}
Let $f$ be continuous on the interval $I$, let $a \in I$ and let $F(x) = \displaystyle\int_a^x f(t)\,dt$. Then $F$ is differentiable on $I$ and
$$
F'(x) = f(x) \qquad \text{for every } x \in I .
$$
The accumulation function is an antiderivative of $f$, so every function continuous on an interval has an antiderivative. The theorem makes it possible to study an accumulation function without evaluating its integral. For example, $F(x) = \displaystyle\int_0^x e^{-t^2}\,dt$ has derivative $F'(x) = e^{-x^2} > 0$ and is therefore increasing on $\mathbb{R}$, even though $e^{-t^2}$ has no elementary antiderivative. If the upper limit is a differentiable function $g(x)$, the chain rule gives $\dfrac{d}{dx} \displaystyle\int_a^{g(x)} f(t)\,dt = f\big( g(x) \big)\,g'(x)$.

:::dimostrazione
The proof expresses the difference quotient of $F$ as an average value. Let $x \in I$ and $h \neq 0$ with $x + h \in I$. Additivity gives
$$
F(x + h) - F(x) = \int_a^{x + h} f(t)\,dt - \int_a^{x} f(t)\,dt = \int_x^{x + h} f(t)\,dt .
$$
By the mean value theorem for integrals on the interval with endpoints $x$ and $x + h$, there is a point $c_h$ between $x$ and $x + h$ such that $\displaystyle\int_x^{x + h} f(t)\,dt = h\,f(c_h)$. The identity also holds for $h < 0$ because reversing the limits changes the sign of both the integral and the width. Therefore
$$
\frac{F(x + h) - F(x)}{h} = f(c_h) .
$$
As $h \to 0$, the point $c_h$ between $x$ and $x + h$ approaches $x$. Since $f$ is continuous, $f(c_h) \to f(x)$. The limit of the difference quotient is therefore $f(x)$, so $F'(x) = f(x)$.
:::
::::

::::teorema{#formula-fondamentale titolo="Definite integral evaluation formula"}
Let $f$ be continuous on $[a, b]$ and let $G$ be any antiderivative of $f$ on $[a, b]$. Then
$$
\int_a^b f(x)\,dx = G(b) - G(a) = \Big[ G(x) \Big]_a^b .
$$
The formula evaluates a definite integral by finding an antiderivative, without computing Riemann sums. For example,
$$
\int_1^3 (2x + 1)\,dx = \Big[ x^2 + x \Big]_1^3 = 12 - 2 = 10,
\qquad
\int_0^2 \left( 4 - x^2 \right) dx = \left[ 4x - \frac{x^3}{3} \right]_0^2 = 8 - \frac{8}{3} = \frac{16}{3} ,
$$
and the second value is the area approximated by the Riemann sums. The constant of integration cancels in the difference $G(b) - G(a)$.

:::dimostrazione
By the fundamental theorem the accumulation function $F(x) = \displaystyle\int_a^x f(t)\,dt$ is an antiderivative of $f$. Two antiderivatives of the same function on an interval differ by a constant, so $G(x) = F(x) + k$ for every $x \in [a, b]$. Then
$$
G(b) - G(a) = \big( F(b) + k \big) - \big( F(a) + k \big) = F(b) - F(a) = \int_a^b f(t)\,dt - 0 ,
$$
because $F(a) = 0$.
:::
::::

:::osservazione{#sostituzione-integrale-definito titolo="Substitution in definite integrals"}
Substitution in a definite integral also changes the limits of integration. If $x$ runs from $a$ to $b$, the new variable runs from $\varphi^{-1}(a)$ to $\varphi^{-1}(b)$, so the calculation can be completed in the new variable without returning to $x$. With $t = x^2$, we have $dt = 2x\,dx$. The variable $t$ runs from $0$ to $1$ as $x$ runs from $0$ to $1$, so
$$
\int_0^1 x\,e^{x^2}\,dx = \frac{1}{2} \int_0^1 e^{t}\,dt = \frac{e - 1}{2} .
$$
:::

## Areas between curves

:::teorema{#area-tra-curve titolo="Area between two curves"}
Let $f$ and $g$ be continuous on $[a, b]$ with $f(x) \geq g(x)$ for every $x \in [a, b]$. The area of the region between the two graphs and the lines $x = a$ and $x = b$ is
$$
A = \int_a^b \big( f(x) - g(x) \big)\,dx .
$$
If the functions are positive, the area is the difference between the areas under $f$ and $g$. Otherwise, adding the same constant to both moves the region up while preserving its area and the difference $f - g$. For a region bounded by the two graphs alone, the limits $a$ and $b$ are the x-coordinates of their intersections, which solve $f(x) = g(x)$. If the graphs cross within the interval, split the interval at each crossing and subtract the lower function from the upper function on each part.
:::

:::esempio{titolo="Region between a parabola and a line"}
We compute the area of the region bounded by $y = 4 - x^2$ and by $y = x + 2$. The intersections are the solutions of
$$
4 - x^2 = x + 2
\iff
x^2 + x - 2 = 0
\iff
x = -2 \ \text{ or } \ x = 1 .
$$
At the intermediate point $x = 0$, the parabola has value $4$ and the line has value $2$. The parabola therefore lies above the line between $-2$ and $1$, and
$$
\begin{aligned}
A
&= \int_{-2}^{1} \left( 2 - x - x^2 \right) dx
= \left[ 2x - \frac{x^2}{2} - \frac{x^3}{3} \right]_{-2}^{1} \\[6pt]
&= \left( 2 - \frac{1}{2} - \frac{1}{3} \right) - \left( -4 - 2 + \frac{8}{3} \right)
= \frac{7}{6} + \frac{10}{3}
= \frac{9}{2} .
\end{aligned}
$$

::grafico{f="4-x^2;x+2" area="4-x^2;x+2;-2;1" punti="-2,0,pieno;1,3,pieno" xmin=-4 xmax=3 ymin=-3 ymax=5 legenda="y = 4 - x^2;y = x + 2" titolo="The region between the parabola $y = 4 - x^2$ and the line $y = x + 2$, with the intersections $(-2, 0)$ and $(1, 3)$; its area is $\dfrac{9}{2}$"}

:::

## Improper integrals

:::definizione{#integrale-improprio titolo="Improper integral on a half-line"}
A definite integral requires a bounded interval. On a half-line, the integral is defined using a limit. Let $f$ be continuous on $[a, +\infty)$. If the following limit exists,
$$
\int_a^{+\infty} f(x)\,dx = \lim_{t \to +\infty} \int_a^{t} f(x)\,dx ,
$$
the integral is called an **improper integral**. The integral **converges** if the limit is finite and **diverges** if the limit is $+\infty$ or $-\infty$. For $f \geq 0$, a convergent integral gives the finite area of an unbounded region. For example,
$$
\int_0^{+\infty} e^{-x}\,dx = \lim_{t \to +\infty} \Big[ -e^{-x} \Big]_0^{t} = \lim_{t \to +\infty} \left( 1 - e^{-t} \right) = 1 .
$$
:::

::::teorema{#impropri-potenze titolo="Improper integral of powers"}
Let $a$ be a real number. Then
$$
\int_1^{+\infty} \frac{1}{x^{a}}\,dx =
\begin{cases}
\dfrac{1}{a - 1} & \text{if } a > 1 \\[8pt]
+\infty & \text{if } a \leq 1
\end{cases}
$$
so the integral converges *if and only if* $a > 1$. For example, $\displaystyle\int_1^{+\infty} \dfrac{1}{x^2}\,dx = 1$, while $\displaystyle\int_1^{+\infty} \dfrac{1}{x}\,dx$ diverges. For large $x$, both graphs are close to the $x$-axis, but $\dfrac{1}{x^2}$ approaches zero fast enough to give a finite area while $\dfrac{1}{x}$ approaches zero too slowly.

::grafico{f="1/x^2+0*sqrt(x);1/x+0*sqrt(x)" area="1/x^2;0;1;9" segmenti="1,0,1,1" xmin=-1 xmax=9 ymin=-1 ymax=2 legenda="y = \dfrac{1}{x^2};y = \dfrac{1}{x}" titolo="The unbounded region under $y = \dfrac{1}{x^2}$ for $x \geq 1$ has area $1$; under $y = \dfrac{1}{x}$ the area is infinite"}

:::dimostrazione
For $a \neq 1$ an antiderivative of $x^{-a}$ is $\dfrac{x^{1 - a}}{1 - a}$, so
$$
\int_1^{t} x^{-a}\,dx = \frac{t^{1 - a} - 1}{1 - a} .
$$
If $a > 1$ the exponent $1 - a$ is negative, therefore $t^{1 - a} \to 0$ and the integral tends to $\dfrac{-1}{1 - a} = \dfrac{1}{a - 1}$. If $a < 1$ the exponent is positive, therefore $t^{1 - a} \to +\infty$ and the integral diverges. If $a = 1$ we have $\displaystyle\int_1^{t} \dfrac{1}{x}\,dx = \ln t \to +\infty$.
:::
::::

:::teorema{#impropri-esponenziale titolo="Improper integral of the exponential"}
Let $k > 0$. Then
$$
\int_0^{+\infty} e^{-kx}\,dx = \frac{1}{k} .
$$
Indeed, $\displaystyle\int_0^{t} e^{-kx}\,dx = \left[ -\frac{e^{-kx}}{k} \right]_0^{t} = \dfrac{1 - e^{-kt}}{k}$, and $e^{-kt} \to 0$ as $t \to +\infty$ because $k > 0$. For example, $\displaystyle\int_0^{+\infty} e^{-2x}\,dx = \dfrac{1}{2}$. For $k \leq 0$ the integral diverges because the integrand is at least $1$, so $\displaystyle\int_0^{t} e^{-kx}\,dx \geq t$. This integral gives the present value of a perpetual payment stream, as discussed in the economic applications. Integrals such as $\displaystyle\int_0^{+\infty} x\,e^{-x}\,dx$ are evaluated by integration by parts, with the remaining limit found by comparing growth rates.
:::

## Economic applications

:::teorema{#costo-dal-marginale titolo="Total cost from marginal cost"}
Let $C(q)$ be the total cost, with continuous marginal cost $C'(q)$. Since $C$ is an antiderivative of $C'$, the definite integral evaluation formula gives
$$
C(q) = C(0) + \int_0^{q} C'(x)\,dx,
\qquad
C(q_2) - C(q_1) = \int_{q_1}^{q_2} C'(q)\,dq ,
$$
where $C(0)$ is the fixed cost. The second integral is the additional cost of increasing output from $q_1$ to $q_2$. On the marginal cost graph, it is the area under the curve from $q_1$ to $q_2$. Revenue is obtained from marginal revenue in the same way, with $R(0) = 0$. A marginal cost of $C'(q) = 10 + 2q$ and a fixed cost of $500$ euros give $C(q) = 500 + 10q + q^2$. Increasing output from $5$ to $15$ units costs
$$
\int_5^{15} (10 + 2q)\,dq = \Big[ 10q + q^2 \Big]_5^{15} = 375 - 75 = 300 \text{ euros} .
$$

::grafico{f="10+2*x+0*sqrt(x)" area="10+2*x;0;5;15" segmenti="5,0,5,20;15,0,15,40" xmin=-2 xmax=17 ymin=-5 ymax=45 nomi="q,C′" legenda="C'(q) = 10 + 2q" titolo="The area under the marginal cost curve $C'(q) = 10 + 2q$ from $q = 5$ to $q = 15$ gives the additional cost of $300$ euros"}

:::

:::definizione{#valore-medio titolo="Average value of a quantity"}
The **average value** of a quantity $f(t)$ that varies continuously over the time interval $[t_1, t_2]$ is given by the integral average
$$
\bar{f} = \frac{1}{t_2 - t_1} \int_{t_1}^{t_2} f(t)\,dt .
$$
This is the constant value that would give the same total over the entire interval. By the mean value theorem for integrals, $f$ takes this value at least once. If, during the first $4$ hours of a shift, a plant produces $q(t) = 40 + 12t - 3t^2$ units per hour, its average hourly output is
$$
\bar{q} = \frac{1}{4} \int_0^4 \left( 40 + 12t - 3t^2 \right) dt = \frac{1}{4} \Big[ 40t + 6t^2 - t^3 \Big]_0^4 = \frac{192}{4} = 48 .
$$
For marginal cost, the definition gives $\dfrac{C(q_2) - C(q_1)}{q_2 - q_1}$, the average cost per additional unit. In the previous example, this is $\dfrac{300}{10} = 30$ euros.
:::

:::definizione{#surplus titolo="Consumer and producer surplus"}
Let $p_d(q)$ be the decreasing inverse demand function, let $p_s(q)$ be the increasing inverse supply function, and let $(q^*, p^*)$ be the market equilibrium. Consumers are willing to pay $p_d(q)$ for the $q$-th unit, but the market price they pay is $p^*$. Adding these differences over the units traded gives the **consumer surplus**
$$
S_C = \int_0^{q^*} \big( p_d(q) - p^* \big)\,dq ,
$$
and in the same way the **producer surplus**, that is, the gain to producers who would have sold at a price below $p^*$:
$$
S_P = \int_0^{q^*} \big( p^* - p_s(q) \big)\,dq .
$$
With quantity on the horizontal axis, $S_C$ is the area between the demand curve and the line $p = p^*$, and $S_P$ is the area between the line $p = p^*$ and the supply curve.
:::

:::esempio{titolo="Surplus with quadratic demand and linear supply"}
The inverse demand is $p_d(q) = 84 - q^2$ and the inverse supply is $p_s(q) = 4 + 2q$. At equilibrium
$$
84 - q^2 = 4 + 2q
\iff
q^2 + 2q - 80 = 0
\iff
q = 8 \ \text{ or } \ q = -10 ,
$$
and the solution with $q \geq 0$ is $q^* = 8$, with $p^* = 4 + 16 = 20$. The surpluses are
$$
S_C = \int_0^8 \left( 64 - q^2 \right) dq = 512 - \frac{512}{3} = \frac{1024}{3} \approx 341{,}33,
\qquad
S_P = \int_0^8 (16 - 2q)\,dq = 128 - 64 = 64 ,
$$
in euros. The second value is checked with the area of the triangle with base $8$ and height $16$, which equals $64$.

::grafico{f="84-x^2+0*sqrt(x);4+2*x+0*sqrt(x)" area="84-x^2;20;0;8|20;4+2*x;0;8" punti="8,20,pieno" segmenti="0,20,10,20;8,0,8,20" xmin=-2 xmax=10 ymin=-10 ymax=90 nomi="q,p" legenda="p = 84 - q^2;p = 4 + 2q" titolo="Consumer surplus is the area between the demand curve and the line $p = 20$ and equals $\dfrac{1024}{3}$. Producer surplus is the area between the line $p = 20$ and the supply curve and equals $64$"}

:::

:::definizione{#valore-attuale-flusso titolo="Present value of a continuous cash flow"}
An investment generates a **continuous cash flow** at a rate $f(t)$, in euros per year, for $0 \leq t \leq T$. Over the short interval $[t, t + \Delta t]$ it therefore yields about $f(t)\,\Delta t$ euros. Under continuous compounding at a force of interest $\delta > 0$, one euro available at time $t$ is worth $e^{-\delta t}$ euros today. Adding the present values of the small receipts $f(t)\,e^{-\delta t}\,\Delta t$ gives a Riemann sum. Its limit is the **present value** of the cash flow.
$$
V = \int_0^{T} f(t)\,e^{-\delta t}\,dt .
$$
For a constant flow of $1000$ euros per year for $5$ years, with $\delta = 0{,}05$,
$$
V = 1000 \int_0^5 e^{-0{,}05\,t}\,dt = \frac{1000}{0{,}05} \left( 1 - e^{-0{,}25} \right) = 20\,000 \left( 1 - e^{-0{,}25} \right) \approx 4423{,}98 \text{ euros},
$$
less than the $5000$ euros received in total because the future payments are discounted. For a perpetual flow, the present value is the improper integral $\displaystyle\int_0^{+\infty} 1000\,e^{-0{,}05\,t}\,dt = \dfrac{1000}{0{,}05} = 20\,000$ euros. Continuous compounding is covered in the financial mathematics chapter.
:::
