---
titolo: Definite integrals, areas, and volumes
sommario: What a definite integral is and how it arises from sums of rectangle areas, what its properties are, what the mean value theorem for integrals and the fundamental theorem of calculus say, and how to use integrals to find areas, volumes of solids of revolution, improper integrals, and physical quantities such as distance traveled, work, and charge.
---

## Curvilinear trapezoids and the definite integral

:::definizione{#trapezoide titolo="Curvilinear trapezoid"}
Let $f$ be a continuous, nonnegative function on the interval $[a, b]$. The **curvilinear trapezoid** under $f$ on $[a, b]$ is the region of the plane bounded by the graph of $f$, the $x$-axis, and the lines $x = a$ and $x = b$. For $f(x) = x + 1$ on $[0, 2]$ the region is a right trapezoid with bases $f(0) = 1$ and $f(2) = 3$ and height $2$, so its area is
$$
\frac{(1 + 3) \cdot 2}{2} = 4 .
$$
The name comes from this case. When the graph is curved, elementary geometry provides no formula for the area of the curvilinear trapezoid in general, so the area is approximated using figures made up of rectangles.
:::

:::definizione{#somme-inferiori-superiori titolo="Lower and upper sums"}
Let $f$ be continuous on $[a, b]$. Divide $[a, b]$ into $n$ subintervals of equal width
$$
h = \frac{b - a}{n} .
$$
On each of these subintervals $f$ is continuous, so by the extreme value theorem it attains a minimum value $m_k$ and a maximum value $M_k$, with $k = 1, 2, \ldots, n$. The **lower sum** and the **upper sum** are
$$
s_n = \sum_{k=1}^{n} m_k\,h ,
\qquad
S_n = \sum_{k=1}^{n} M_k\,h .
$$
If $f \geq 0$, the sum $s_n$ is the area of a union of rectangles contained in the curvilinear trapezoid, called an *inscribed* figure, and $S_n$ is the area of a union of rectangles containing the curvilinear trapezoid, called a *circumscribed* figure. Therefore the area of the curvilinear trapezoid lies between $s_n$ and $S_n$.

For $f(x) = x^2$ on $[0, 2]$, with $n = 4$, we have $h = \dfrac{1}{2}$. The function is increasing, so on each subinterval the minimum occurs at the left endpoint and the maximum at the right endpoint:
$$
s_4 = \frac{1}{2} \left( 0 + \frac{1}{4} + 1 + \frac{9}{4} \right) = \frac{7}{4} ,
\qquad
S_4 = \frac{1}{2} \left( \frac{1}{4} + 1 + \frac{9}{4} + 4 \right) = \frac{15}{4} .
$$

::grafico{f="x^2+0*sqrt(x*(2-x))" area="(floor(2*x)/2)^2;0;0;1.999" segmenti="0,0.25,0.5,0.25;0.5,1,1,1;1,2.25,1.5,2.25;1.5,4,2,4;0.5,0,0.5,1;1,0,1,2.25;1.5,0,1.5,4;2,0,2,4" xmin=-1 xmax=3 ymin=-1 ymax=5 legenda="y = x^2" titolo="For $y = x^2$ on $[0, 2]$ with $n = 4$, the shaded inscribed rectangles have total area $s_4 = \dfrac{7}{4}$, and the circumscribed rectangles outlined with dashed lines have total area $S_4 = \dfrac{15}{4}$"}

:::

:::definizione{#integrale-definito titolo="Definite integral"}
As $n$ increases, the rectangles become narrower, and the two sums approach the area of the curvilinear trapezoid. It can be shown that if $f$ is continuous on $[a, b]$, the sequences $s_n$ and $S_n$ have the same finite limit as $n \to +\infty$. The proof is studied at the university level. This common limit is called the **definite integral** of $f$ from $a$ to $b$ and is denoted by
$$
\int_a^b f(x)\,dx = \lim_{n \to +\infty} s_n = \lim_{n \to +\infty} S_n .
$$
The numbers $a$ and $b$ are the **limits of integration**, and $f$ is the **integrand**. The definition applies to any continuous function, even one that takes nonpositive values, because the sums are calculated in the same way. If $f \geq 0$, the integral is the area of the curvilinear trapezoid.

For $f(x) = x^2$ on $[0, 2]$ we have $h = \dfrac{2}{n}$, and the minimum on the $k$th subinterval is $\left( \dfrac{2(k - 1)}{n} \right)^2$. Using the formula $1^2 + 2^2 + \dots + p^2 = \dfrac{p\,(p + 1)(2p + 1)}{6}$, which can be proved by induction, gives
$$
s_n = \frac{8}{n^3} \left( 1^2 + 2^2 + \dots + (n - 1)^2 \right) = \frac{8}{n^3} \cdot \frac{(n - 1)\,n\,(2n - 1)}{6} = \frac{4\,(n - 1)(2n - 1)}{3n^2} .
$$
As $n \to +\infty$, the numerator and denominator have degree $2$, so the limit is the ratio of the coefficients of $n^2$, namely $\dfrac{8}{3}$. Therefore
$$
\int_0^2 x^2\,dx = \frac{8}{3} .
$$
:::

:::osservazione{#integrale-segno titolo="Sign of the integral and area"}
If $f \leq 0$ on $[a, b]$, the numbers $m_k$ and $M_k$ are nonpositive, so the sums and their limit are nonpositive. In this case the integral is the negative of the area of the region between the graph and the $x$-axis. If $f$ changes sign, the integral equals the area of the parts above the $x$-axis minus the area of the parts below it. For example, on the interval $[0, 2\pi]$ the two regions between the graph of $\sin x$ and the $x$-axis are symmetric about the point $(\pi, 0)$ and have the same area, so
$$
\int_0^{2\pi} \sin x\,dx = 0 .
$$

::grafico{f="sin(x)" area="sin(x);0;0;6.2832" etichette="1.57,0.4,+;4.71,-0.4,−" punti="3.1416,0,pieno" xmin=-1 xmax=7 ymin=-2 ymax=2 legenda="y = \sin x" titolo="On $[0, 2\pi]$ the region above the axis and the region below it have the same area, so the integral of $\sin x$ over $[0, 2\pi]$ equals $0$"}

:::

## Properties of the definite integral

:::teorema{#proprieta-integrale titolo="Properties of the definite integral"}
By definition,
$$
\int_a^a f(x)\,dx = 0 ,
\qquad
\int_b^a f(x)\,dx = -\int_a^b f(x)\,dx .
$$
Let $f$ and $g$ be continuous on an interval containing $a$, $b$, and $c$, and let $k$ be a real number. The following properties hold.

- **Linearity**: $\displaystyle\int_a^b \big( f(x) + g(x) \big)\,dx = \int_a^b f(x)\,dx + \int_a^b g(x)\,dx$ and $\displaystyle\int_a^b k\,f(x)\,dx = k \int_a^b f(x)\,dx$.
- **Additivity over intervals**: $\displaystyle\int_a^b f(x)\,dx = \int_a^c f(x)\,dx + \int_c^b f(x)\,dx$.
- **Comparison**: if $a < b$ and $f(x) \leq g(x)$ for every $x$ in $[a, b]$, then $\displaystyle\int_a^b f(x)\,dx \leq \int_a^b g(x)\,dx$.

These properties follow by taking limits of the corresponding properties of sums. Linearity allows us to integrate a sum one term at a time. For example, $\displaystyle\int_0^2 x\,dx = 2$ because it is the area of the triangle with vertices $(0, 0)$, $(2, 0)$, and $(2, 2)$. Together with $\displaystyle\int_0^2 x^2\,dx = \dfrac{8}{3}$, this gives
$$
\int_0^2 \left( 3x^2 - 2x \right) dx = 3 \cdot \frac{8}{3} - 2 \cdot 2 = 4 .
$$
Comparison gives a way to estimate an integral without evaluating it. For $0 \leq x \leq 1$ we have $x^2 \leq x$, so $\displaystyle\int_0^1 x^2\,dx \leq \int_0^1 x\,dx = \dfrac{1}{2}$.
:::

## Mean value theorem for integrals

:::richiamo{titolo="Extreme value theorem"}
If $f$ is continuous on the closed, bounded interval $[a, b]$, then $f$ has extrema on $[a, b]$, attaining a minimum value $m$ and a maximum value $M$.
:::

:::richiamo{titolo="Intermediate value theorem"}
If $f$ is continuous on the closed, bounded interval $[a, b]$, then $f$ takes every value between its minimum and maximum.
:::

::::teorema{#teorema-media titolo="Mean value theorem for integrals"}
Let $f$ be continuous on the interval $[a, b]$. Then there is at least one point $c$ in $[a, b]$ such that
$$
\int_a^b f(x)\,dx = (b - a) \cdot f(c) .
$$
The number $\dfrac{1}{b - a} \displaystyle\int_a^b f(x)\,dx = f(c)$ is called the **average value** of $f$ on $[a, b]$. If $f \geq 0$, the theorem says that the rectangle with base $[a, b]$ and height $f(c)$ has the same area as the curvilinear trapezoid. For $f(x) = x^2$ on $[0, 2]$ the average value is $\dfrac{1}{2} \cdot \dfrac{8}{3} = \dfrac{4}{3}$, and solving $c^2 = \dfrac{4}{3}$ with $c$ in $[0, 2]$ gives $c = \dfrac{2}{\sqrt{3}} = \dfrac{2\sqrt{3}}{3} \approx 1.15$.

::grafico{f="x^2" area="x^2;0;0;2" segmenti="0,1.3333,2,1.3333;2,0,2,1.3333;1.1547,0,1.1547,1.3333" punti="1.1547,1.3333,pieno" xmin=-1 xmax=3 ymin=-1 ymax=5 legenda="y = x^2" titolo="The curvilinear trapezoid under $y = x^2$ on $[0, 2]$ and the dashed rectangle of height $\dfrac{4}{3}$ have the same area, $\dfrac{8}{3}$. The height is the value of $f$ at $c = \dfrac{2\sqrt{3}}{3}$"}

:::dimostrazione
The idea is to show that the average value lies between the minimum and maximum of $f$, then use the intermediate value theorem.

By the extreme value theorem, the function $f$ has extrema on $[a, b]$, attaining a minimum $m$ and a maximum $M$, so $m \leq f(x) \leq M$ for every $x$ in $[a, b]$. Applying the comparison property to the constant functions $m$ and $M$ gives
$$
\int_a^b m\,dx \leq \int_a^b f(x)\,dx \leq \int_a^b M\,dx .
$$
The integral of a positive constant is the area of a rectangle of base $b - a$, and the same calculation using sums holds for any constant. Therefore
$$
m\,(b - a) \leq \int_a^b f(x)\,dx \leq M\,(b - a) .
$$
Dividing by $b - a$, which is positive, gives
$$
m \leq \frac{1}{b - a} \int_a^b f(x)\,dx \leq M .
$$
The average value therefore lies between the minimum and maximum of $f$. By the intermediate value theorem, $f$ takes every value between $m$ and $M$, so there is a point $c$ in $[a, b]$ where $f(c)$ equals the average value. Multiplying by $b - a$ gives the result.
:::
::::

## Accumulation functions and the fundamental theorem

:::definizione{#funzione-integrale titolo="Accumulation function"}
Let $f$ be continuous on an interval $I$, and let $a$ be a point in $I$. For every $x$ in $I$, we can compute the integral of $f$ from $a$ to $x$. This gives a function of $x$ called the **accumulation function** of $f$ with starting point $a$:
$$
F(x) = \int_a^x f(t)\,dt .
$$
The variable of integration is denoted by $t$ because the letter $x$ denotes the upper limit. We always have $F(a) = 0$. If $f \geq 0$ and $x > a$, the number $F(x)$ is the area of the curvilinear trapezoid under $f$ on $[a, x]$.

For $f(t) = t$ and $a = 0$, with $x > 0$, the curvilinear trapezoid is the triangle with vertices $(0, 0)$, $(x, 0)$, and $(x, x)$, so $F(x) = \dfrac{x^2}{2}$. Notice that $F'(x) = x = f(x)$. The next theorem shows that this equality holds for every continuous function.

::grafico{f="x" area="x;0;0;3" punti="3,0,pieno,x;3,3,pieno" nomi="t,y" xmin=-1 xmax=4 ymin=-1 ymax=4 uguale=1 legenda="y = t" titolo="The accumulation function $F(x) = \int_0^x t\,dt$ evaluated at $x = 3$ is the area of the shaded triangle, namely $\dfrac{9}{2}$"}

:::

::::teorema{#teorema-fondamentale titolo="Fundamental theorem of calculus"}
Let $f$ be continuous on the interval $I$, let $a$ be a point in $I$, and let $F(x) = \displaystyle\int_a^x f(t)\,dt$. Then $F$ is differentiable on $I$ and
$$
F'(x) = f(x) \qquad \text{for every } x \text{ in } I .
$$
The accumulation function is therefore an antiderivative of $f$, and every function continuous on an interval has at least one antiderivative. The theorem, also called the *Torricelli–Barrow theorem*, makes it possible to study an accumulation function without evaluating the integral. For example, the function $F(x) = \displaystyle\int_0^x e^{-t^2}\,dt$ has derivative $F'(x) = e^{-x^2}$, which is positive for every $x$, so $F$ is **increasing** on $\mathbb{R}$. For $e^{-t^2}$ there is no antiderivative that can be expressed using elementary functions.

:::dimostrazione
The idea is to write the difference quotient of $F$ as an average value of $f$ and then use the continuity of $f$.

Let $x$ be a point in $I$ and let $h \neq 0$ be an increment such that $x + h$ is in $I$. By additivity over intervals,
$$
F(x + h) - F(x) = \int_a^{x + h} f(t)\,dt - \int_a^{x} f(t)\,dt = \int_x^{x + h} f(t)\,dt .
$$
Consider $h > 0$. By the mean value theorem for integrals, applied on the interval $[x, x + h]$, there is a point $c_h$ in this interval such that
$$
\int_x^{x + h} f(t)\,dt = h \cdot f(c_h) .
$$
For $h < 0$, apply the theorem on the interval $[x + h, x]$. The same equality follows because reversing the limits of integration changes the sign of the integral. In both cases the difference quotient is
$$
\frac{F(x + h) - F(x)}{h} = f(c_h) .
$$
The point $c_h$ lies between $x$ and $x + h$, so it approaches $x$ as $h \to 0$. Since $f$ is continuous at $x$, we have $f(c_h) \to f(x)$. Therefore the difference quotient approaches $f(x)$, that is, $F'(x) = f(x)$.
:::
::::

:::osservazione{#derivata-estremo-variabile titolo="Derivative of an integral with a variable limit"}
If the upper limit is a differentiable function $g(x)$, the function $G(x) = \displaystyle\int_a^{g(x)} f(t)\,dt$ is the composition of $F(x) = \displaystyle\int_a^x f(t)\,dt$ with $g$. By the chain rule and the fundamental theorem,
$$
G'(x) = f\big( g(x) \big) \cdot g'(x) .
$$
For example, for $G(x) = \displaystyle\int_0^{x^2} \sin t\,dt$ we have $G'(x) = \sin\left( x^2 \right) \cdot 2x$. If the lower limit is the variable one, reverse the limits and change the sign.
:::

:::richiamo{titolo="Functions with zero derivative"}
If $G$ is differentiable on the interval $I$ and $G'(x) = 0$ for every $x$ in $I$, then $G$ is constant on $I$.
:::

::::teorema{#formula-fondamentale titolo="Evaluation formula for definite integrals"}
Let $f$ be continuous on $[a, b]$, and let $G$ be any antiderivative of $f$ on $[a, b]$. Then
$$
\int_a^b f(x)\,dx = G(b) - G(a) .
$$
The difference $G(b) - G(a)$ is also denoted by $\Big[ G(x) \Big]_a^b$. The formula reduces the evaluation of a definite integral to finding an antiderivative, as discussed in the chapter on indefinite integrals, without computing any sums. For example,
$$
\int_0^2 x^2\,dx = \left[ \frac{x^3}{3} \right]_0^2 = \frac{8}{3} - 0 = \frac{8}{3} ,
\qquad
\int_0^{\pi} \sin x\,dx = \Big[ -\cos x \Big]_0^{\pi} = 1 - (-1) = 2 ,
$$
and the first value agrees with the one obtained using lower sums. The additive constant in the antiderivative does not affect the result because it cancels in the difference.

:::dimostrazione
By the fundamental theorem, the function $F(x) = \displaystyle\int_a^x f(t)\,dt$ is an antiderivative of $f$. The difference $G - F$ therefore has derivative $f - f = 0$ throughout the interval and, by the theorem on functions with zero derivative, equals a constant $k$. Therefore $G(x) = F(x) + k$ for every $x$ in $[a, b]$, and
$$
G(b) - G(a) = \big( F(b) + k \big) - \big( F(a) + k \big) = F(b) - F(a) .
$$
Since $F(a) = 0$ and $F(b) = \displaystyle\int_a^b f(t)\,dt$, the result follows.
:::
::::

## Methods for evaluating definite integrals

:::teorema{#sostituzione-definiti titolo="Integration by substitution in definite integrals"}
Let $g$ be differentiable with continuous derivative on $[a, b]$, and let $f$ be continuous on an interval containing the values of $g$. Then, with the substitution $t = g(x)$,
$$
\int_a^b f\big( g(x) \big)\,g'(x)\,dx = \int_{g(a)}^{g(b)} f(t)\,dt .
$$
The substitution also changes the limits of integration, so there is no need to return to the variable $x$ at the end. The formula follows from the evaluation formula because if $G$ is an antiderivative of $f$, then $G\big( g(x) \big)$ is an antiderivative of $f\big( g(x) \big)\,g'(x)$ by the chain rule. For example, with $t = x^2 + 1$ we have $dt = 2x\,dx$, and $t$ runs from $1$ to $2$ as $x$ runs from $0$ to $1$. Therefore
$$
\int_0^1 x \left( x^2 + 1 \right)^3 dx = \frac{1}{2} \int_1^2 t^3\,dt = \frac{1}{2} \left[ \frac{t^4}{4} \right]_1^2 = \frac{1}{2} \cdot \frac{16 - 1}{4} = \frac{15}{8} .
$$
:::

:::teorema{#parti-definiti titolo="Integration by parts in definite integrals"}
Let $f$ and $g$ be differentiable with continuous derivatives on $[a, b]$. Then
$$
\int_a^b f(x)\,g'(x)\,dx = \Big[ f(x)\,g(x) \Big]_a^b - \int_a^b f'(x)\,g(x)\,dx .
$$
This is the integration by parts formula from the chapter on indefinite integrals with the limits of integration applied to both terms. For example, taking $f(x) = x$ and $g'(x) = e^{x}$ gives $f'(x) = 1$ and $g(x) = e^{x}$, so
$$
\int_0^1 x\,e^{x}\,dx = \Big[ x\,e^{x} \Big]_0^1 - \int_0^1 e^{x}\,dx = e - (e - 1) = 1 .
$$
:::

:::teorema{#integrali-simmetrie titolo="Integrals of even and odd functions"}
Let $f$ be continuous on the interval $[-a, a]$, with $a > 0$.

- If $f$ is **even**, then $\displaystyle\int_{-a}^{a} f(x)\,dx = 2 \int_0^{a} f(x)\,dx$.
- If $f$ is **odd**, then $\displaystyle\int_{-a}^{a} f(x)\,dx = 0$.

The graph of an even function is symmetric about the $y$-axis, so the regions over $[-a, 0]$ and over $[0, a]$ have the same area and contribute with the same sign. The graph of an odd function is symmetric about the origin, so the two regions have the same area and contribute with opposite signs. The substitution $t = -x$ gives a proof. For example, in the integral $\displaystyle\int_{-2}^{2} \left( x^3 - 5x + 3x^2 \right) dx$ the terms $x^3$ and $-5x$ are odd and $3x^2$ is even, so
$$
\int_{-2}^{2} \left( x^3 - 5x + 3x^2 \right) dx = 0 + 2 \int_0^2 3x^2\,dx = 2 \Big[ x^3 \Big]_0^2 = 16 .
$$
:::

## Finding areas

:::attenzione
The integral of a function that changes sign differs from the area of the region between its graph and the $x$-axis. For $f(x) = x^2 - 4$ on $[0, 3]$ we have
$$
\int_0^3 \left( x^2 - 4 \right) dx = \left[ \frac{x^3}{3} - 4x \right]_0^3 = 9 - 12 = -3 ,
$$
which is negative. The function is negative on $[0, 2)$ and positive on $(2, 3]$, so to find the area, split the interval at $x = 2$ and change the sign of the integral over the part where the function is negative:
$$
\text{area} = \int_0^2 \left( 4 - x^2 \right) dx + \int_2^3 \left( x^2 - 4 \right) dx = \frac{16}{3} + \frac{7}{3} = \frac{23}{3} .
$$

::grafico{f="x^2-4" area="x^2-4;0;0;3" punti="2,0,pieno" etichette="1,-1.5,−;2.75,1,+" xmin=-1 xmax=4 ymin=-6 ymax=6 legenda="y = x^2 - 4" titolo="On $[0, 3]$ the region below the axis has area $\dfrac{16}{3}$ and the region above it has area $\dfrac{7}{3}$. The integral is $\dfrac{7}{3} - \dfrac{16}{3} = -3$, while the area is $\dfrac{23}{3}$"}

:::

:::teorema{#area-tra-curve titolo="Area of the region between two curves"}
Let $f$ and $g$ be continuous on $[a, b]$, with $f(x) \geq g(x)$ for every $x$ in $[a, b]$. The area of the region bounded by the two graphs and the lines $x = a$ and $x = b$ is
$$
A = \int_a^b \big( f(x) - g(x) \big)\,dx .
$$
If the two functions are positive, the area is the difference between the areas of the curvilinear trapezoids under $f$ and under $g$. If they are not, add a sufficiently large constant to both. The region shifts upward without changing its area, and the difference $f - g$ stays the same. When the region is bounded only by the two graphs, the limits $a$ and $b$ are the horizontal coordinates of their intersections, that is, the solutions of $f(x) = g(x)$.
:::

:::esempio{titolo="Region between a parabola and a line"}
Consider the area of the region bounded by the parabola $y = x^2 - 2x$ and the line $y = x$. The horizontal coordinates of the intersections are the solutions of
$$
x^2 - 2x = x
\iff
x^2 - 3x = 0
\iff
x = 0 \quad \text{or} \quad x = 3 .
$$
At the intermediate point $x = 1$ the line has value $1$ and the parabola has value $-1$, so on $[0, 3]$ the line lies above the parabola. Therefore
$$
A = \int_0^3 \big( x - \left( x^2 - 2x \right) \big)\,dx = \int_0^3 \left( 3x - x^2 \right) dx = \left[ \frac{3x^2}{2} - \frac{x^3}{3} \right]_0^3 = \frac{27}{2} - 9 = \frac{9}{2} .
$$

::grafico{f="x^2-2*x;x" area="x;x^2-2*x;0;3" punti="0,0,pieno;3,3,pieno" xmin=-2 xmax=4 ymin=-2 ymax=4 legenda="y = x^2 - 2x;y = x" titolo="The region between the parabola $y = x^2 - 2x$ and the line $y = x$, with intersections $(0, 0)$ and $(3, 3)$, has area $\dfrac{9}{2}$"}

:::

:::osservazione{#segmento-parabolico titolo="Area of a parabolic segment"}
The region between a parabola and a line that intersects it at two points is called a **parabolic segment**. If the difference between the two functions is a trinomial $a x^2 + b x + c$ with roots $x_1 < x_2$, the area of the parabolic segment is
$$
A = \frac{|a|\,(x_2 - x_1)^3}{6} .
$$
The formula follows by integrating $|a|\,(x - x_1)(x_2 - x)$ on $[x_1, x_2]$. In the previous example the difference is $3x - x^2$, with $a = -1$, $x_1 = 0$, and $x_2 = 3$, so $A = \dfrac{1 \cdot 27}{6} = \dfrac{9}{2}$, as found by integration. The formula also provides a check on the result.
:::

## Volumes of solids of revolution

:::teorema{#volume-rotazione-x titolo="Volume of a solid of revolution about the x-axis"}
Let $f$ be continuous and nonnegative on $[a, b]$. When the curvilinear trapezoid under $f$ makes a full turn about the $x$-axis, it generates a solid called a **solid of revolution**. Its volume is
$$
V = \pi \int_a^b f(x)^2\,dx .
$$
The plane perpendicular to the $x$-axis at horizontal coordinate $x$ cuts the solid in a disk of radius $f(x)$ and area $\pi f(x)^2$. Divide $[a, b]$ into $n$ subintervals of width $h$ and approximate the solid with $n$ thin cylinders of height $h$, whose volumes have the form $\pi f(x)^2 \cdot h$. As $n \to +\infty$, the sum of their volumes tends to the integral in the formula.

For the curvilinear trapezoid under $f(x) = \dfrac{x}{2}$ on $[0, 4]$ the solid is a cone with base radius $2$ and height $4$, and
$$
V = \pi \int_0^4 \frac{x^2}{4}\,dx = \pi \left[ \frac{x^3}{12} \right]_0^4 = \frac{16\pi}{3} ,
$$
which agrees with the volume formula for a cone from solid geometry, $\dfrac{1}{3}\,\pi \cdot 2^2 \cdot 4$.

::grafico{f="x/2+0*sqrt(x*(4-x));-x/2+0*sqrt(x*(4-x))" area="x/2;0;0;4" segmenti="4,-2,4,2" xmin=-1 xmax=5 ymin=-3 ymax=3 uguale=1 legenda="y = \dfrac{x}{2};y = -\dfrac{x}{2}" titolo="Rotation about the $x$-axis of the shaded triangle, the curvilinear trapezoid under $y = \dfrac{x}{2}$ on $[0, 4]$, generates a cone of radius $2$ and height $4$. The dashed line outlines the cone's cross section"}

:::

:::esempio{titolo="Volume of a sphere"}
The sphere of radius $r$ is generated by rotating about the $x$-axis the semicircular region above that axis, that is, the curvilinear trapezoid under $f(x) = \sqrt{r^2 - x^2}$ on $[-r, r]$. Since $f(x)^2 = r^2 - x^2$, we have
$$
V = \pi \int_{-r}^{r} \left( r^2 - x^2 \right) dx = \pi \left[ r^2 x - \frac{x^3}{3} \right]_{-r}^{r} = \pi \left( \frac{2r^3}{3} + \frac{2r^3}{3} \right) = \frac{4}{3}\,\pi r^3 .
$$
For $r = 3$ the volume is $36\pi$.
:::

:::osservazione{#volume-corona titolo="Rotating the region between two curves"}
Let $f$ and $g$ be continuous on $[a, b]$ with $0 \leq g(x) \leq f(x)$. Rotating the region between the two graphs about the $x$-axis generates a solid with a hole. Its cross section at $x$ is a washer with radii $f(x)$ and $g(x)$. Its volume is therefore the difference between the volumes generated by the two curvilinear trapezoids:
$$
V = \pi \int_a^b \left( f(x)^2 - g(x)^2 \right) dx .
$$
For the region between $y = x$ and $y = x^2$, which intersect at $x = 0$ and $x = 1$, with $x^2 \leq x$ on $[0, 1]$, we obtain $V = \pi \displaystyle\int_0^1 \left( x^2 - x^4 \right) dx = \pi \left( \dfrac{1}{3} - \dfrac{1}{5} \right) = \dfrac{2\pi}{15}$.
:::

:::attenzione
The washer formula uses the difference of the squares of the two functions, which differs from the square of the difference. For the region in the previous example, the latter would give $\pi \displaystyle\int_0^1 \left( x - x^2 \right)^2 dx = \dfrac{\pi}{30}$, the volume of the solid generated by the curvilinear trapezoid under $x - x^2$, a different solid from the one required.
:::

:::teorema{#volume-rotazione-y titolo="Rotation about the y-axis"}
Let $f$ be continuous and nonnegative on $[a, b]$, with $0 \leq a < b$. The volume of the solid generated by rotating the curvilinear trapezoid under $f$ about the $y$-axis is
$$
V = 2\pi \int_a^b x\,f(x)\,dx .
$$
In this case the solid is approximated by *cylindrical shells*. A thin strip of the curvilinear trapezoid at $x$, of width $h$ and height $f(x)$, rotates about the $y$-axis to generate a shell of radius $x$ whose volume is approximately $2\pi x \cdot f(x) \cdot h$. For example, rotating about the $y$-axis the curvilinear trapezoid under $f(x) = x^2$ on $[0, 2]$ generates a solid of volume
$$
V = 2\pi \int_0^2 x^3\,dx = 2\pi \left[ \frac{x^4}{4} \right]_0^2 = 8\pi .
$$
When the region is described by $x = g(y)$ with $c \leq y \leq d$, that is, when it is bounded by the graph of $g$, the $y$-axis, and the lines $y = c$ and $y = d$, apply the formula for rotation about the $x$-axis with the variables interchanged, giving $V = \pi \displaystyle\int_c^d g(y)^2\,dy$.
:::

:::teorema{#metodo-sezioni titolo="Method of cross sections"}
Consider a solid between the planes perpendicular to the $x$-axis at horizontal coordinates $a$ and $b$. Let $S(x)$ be the area of its cross section in the plane perpendicular to the $x$-axis at horizontal coordinate $x$. If $S$ is continuous on $[a, b]$, the volume of the solid is
$$
V = \int_a^b S(x)\,dx .
$$
The formula for a solid of revolution is the special case in which the cross section is a disk and $S(x) = \pi f(x)^2$. For a pyramid with square base of side $6$ and height $4$, place the vertex at the origin and the $x$-axis along its height. The cross section at distance $x$ from the vertex is a square similar to the base, with side $\dfrac{6x}{4} = \dfrac{3x}{2}$, so $S(x) = \dfrac{9x^2}{4}$ and
$$
V = \int_0^4 \frac{9x^2}{4}\,dx = \left[ \frac{3x^3}{4} \right]_0^4 = 48 ,
$$
in agreement with the formula $\dfrac{1}{3} \cdot 36 \cdot 4 = 48$ from solid geometry.
:::

## Improper integrals

:::definizione{#improprio-intervallo-illimitato titolo="Integral over an unbounded interval"}
The definite integral requires a closed, bounded interval. For a half-line, evaluate the integral over a bounded interval and then take the limit. Let $f$ be continuous on $[a, +\infty)$. Define
$$
\int_a^{+\infty} f(x)\,dx = \lim_{t \to +\infty} \int_a^{t} f(x)\,dx .
$$
If the limit exists and is finite, the **improper integral** is called **convergent**. If the limit is $+\infty$ or $-\infty$, it is called **divergent**. The integral over $(-\infty, b]$ is defined similarly. For example,
$$
\int_1^{+\infty} \frac{1}{x^2}\,dx = \lim_{t \to +\infty} \left[ -\frac{1}{x} \right]_1^{t} = \lim_{t \to +\infty} \left( 1 - \frac{1}{t} \right) = 1 ,
$$
so the unbounded region between the graph of $\dfrac{1}{x^2}$, the $x$-axis, and the line $x = 1$ has finite area equal to $1$.
:::

:::definizione{#improprio-funzione-illimitata titolo="Integral of an unbounded function"}
Let $f$ be continuous on $(a, b]$ and unbounded near $a$. Define
$$
\int_a^b f(x)\,dx = \lim_{t \to a^+} \int_t^b f(x)\,dx ,
$$
and call the integral convergent or divergent as in the previous case. The same approach applies when $f$ is unbounded near $b$. If $f$ is unbounded near an interior point $c$, split the interval at $c$. The integral converges if both parts converge. For example,
$$
\int_0^1 \frac{1}{\sqrt{x}}\,dx = \lim_{t \to 0^+} \Big[ 2\sqrt{x} \Big]_t^1 = \lim_{t \to 0^+} \left( 2 - 2\sqrt{t} \right) = 2 .
$$
:::

:::teorema{#impropri-potenze titolo="Improper integrals of power functions"}
Let $\alpha$ be a positive real number. Then
$$
\int_1^{+\infty} \frac{1}{x^{\alpha}}\,dx
\begin{cases}
= \dfrac{1}{\alpha - 1} & \text{if } \alpha > 1 \\[8pt]
= +\infty & \text{if } \alpha \leq 1
\end{cases}
\qquad
\int_0^1 \frac{1}{x^{\alpha}}\,dx
\begin{cases}
= \dfrac{1}{1 - \alpha} & \text{if } \alpha < 1 \\[8pt]
= +\infty & \text{if } \alpha \geq 1
\end{cases}
$$
For $\alpha \neq 1$ an antiderivative of $x^{-\alpha}$ is $\dfrac{x^{1 - \alpha}}{1 - \alpha}$, and the limits are determined by the sign of the exponent $1 - \alpha$. For $\alpha = 1$ the antiderivative is $\ln x$, which tends to $+\infty$ as $x \to +\infty$ and to $-\infty$ as $x \to 0^+$. These integrals serve as a basis for comparison. For example, $\displaystyle\int_1^{+\infty} \dfrac{1}{x}\,dx$ diverges, while $\displaystyle\int_1^{+\infty} \dfrac{1}{x^2}\,dx = 1$. Near $0$ the situation is reversed and $\displaystyle\int_0^1 \dfrac{1}{\sqrt{x}}\,dx = 2$ converges.

::grafico{f="1/x^2+0*sqrt(x);1/x+0*sqrt(x)" area="1/x^2;0;1;9" segmenti="1,0,1,1" xmin=-1 xmax=9 ymin=-1 ymax=3 legenda="y = \dfrac{1}{x^2};y = \dfrac{1}{x}" titolo="For $x \geq 1$ the unbounded region under $y = \dfrac{1}{x^2}$ has area $1$, while the integral under $y = \dfrac{1}{x}$ diverges"}

:::

:::attenzione
The evaluation formula applies only to functions continuous on the closed interval $[a, b]$. For $\dfrac{1}{x^2}$ on $[-1, 1]$ it would give $\left[ -\dfrac{1}{x} \right]_{-1}^{1} = -1 - 1 = -2$, a negative number for the integral of a positive function. The result is incorrect because the function is undefined at $x = 0$. The integral is improper, and since $\displaystyle\int_0^1 \dfrac{1}{x^2}\,dx$ diverges, $\displaystyle\int_{-1}^{1} \dfrac{1}{x^2}\,dx$ also **diverges**.
:::

## Applications to physics

:::teorema{#spazio-velocita titolo="Finding displacement and distance traveled from velocity"}
A body moves along a straight line with continuous velocity $v(t)$. Since its position $s(t)$ is an antiderivative of velocity, the evaluation formula gives the displacement between times $t_1$ and $t_2$ as
$$
s(t_2) - s(t_1) = \int_{t_1}^{t_2} v(t)\,dt .
$$
On a velocity graph, displacement is the signed area between the graph and the time axis. The **distance traveled** also counts travel in the reverse direction as positive, so it equals $\displaystyle\int_{t_1}^{t_2} |v(t)|\,dt$. Similarly, velocity can be obtained from acceleration: $v(t_2) - v(t_1) = \displaystyle\int_{t_1}^{t_2} a(t)\,dt$.

For $v(t) = 6 - 2t$ in meters per second, on the interval $[0, 5]$ the velocity is positive until $t = 3$ and negative afterward. The displacement is
$$
\int_0^5 (6 - 2t)\,dt = \Big[ 6t - t^2 \Big]_0^5 = 5\,\mathrm{m} ,
$$
while the distance traveled is $\displaystyle\int_0^3 (6 - 2t)\,dt + \int_3^5 (2t - 6)\,dt = 9 + 4 = 13\,\mathrm{m}$.

::grafico{f="6-2*x" area="6-2*x;0;0;5" punti="3,0,pieno" etichette="1,1.5,+;4.4,-0.8,−" nomi="t,v" xmin=-1 xmax=6 ymin=-6 ymax=8 legenda="v = 6 - 2t" titolo="On the graph of $v(t) = 6 - 2t$ the triangle above the axis has area $9$ and the one below has area $4$. The displacement is $9 - 4 = 5$ and the distance traveled is $9 + 4 = 13$"}

:::

:::osservazione{#valore-medio-fisica titolo="Average velocity as an average value"}
Average velocity on the interval $[t_1, t_2]$ is displacement divided by elapsed time, that is,
$$
\frac{s(t_2) - s(t_1)}{t_2 - t_1} = \frac{1}{t_2 - t_1} \int_{t_1}^{t_2} v(t)\,dt ,
$$
which is the average value of the function $v$ on $[t_1, t_2]$. By the mean value theorem for integrals, instantaneous velocity equals average velocity at least once. In the preceding example the average velocity is $\dfrac{5}{5} = 1\,\mathrm{m/s}$, and $6 - 2t = 1$ when $t = 2.5\,\mathrm{s}$.
:::

:::definizione{#lavoro-forza titolo="Work done by a variable force"}
A body moves along the $x$-axis from position $a$ to position $b$ under a force along the axis whose component $F(x)$ is continuous. If the force is constant, the work is $F \cdot (b - a)$. If the force varies, divide $[a, b]$ into short intervals on each of which the force is nearly constant, and add the amounts of work. Taking the limit gives the **work**
$$
W = \int_a^b F(x)\,dx .
$$
Stretching a spring with spring constant $k$ requires a force $F(x) = kx$, where $x$ is the extension. The work required to increase the extension from $0$ to $\ell$ is
$$
W = \int_0^{\ell} kx\,dx = \frac{1}{2}\,k\,\ell^2 ,
$$
and for $k = 200\,\mathrm{N/m}$ and $\ell = 0.1\,\mathrm{m}$ it equals $W = \dfrac{1}{2} \cdot 200 \cdot 0.01 = 1\,\mathrm{J}$.
:::

:::definizione{#carica-corrente titolo="Finding charge from current"}
Electric current is the derivative of charge, $i(t) = q'(t)$, as discussed in the chapter on derivatives. By the evaluation formula, the **charge** that passes through a cross section of a conductor between times $t_1$ and $t_2$ is
$$
Q = \int_{t_1}^{t_2} i(t)\,dt .
$$
For example, if $i(t) = 4\,e^{-2t}$ amperes, the charge that passes in the first second is
$$
Q = \int_0^1 4\,e^{-2t}\,dt = \Big[ -2\,e^{-2t} \Big]_0^1 = 2 - 2\,e^{-2} \approx 1.73\,\mathrm{C} .
$$
The total charge, for $t$ from $0$ to $+\infty$, is given by an improper integral and equals $\displaystyle\lim_{t \to +\infty} \left( 2 - 2\,e^{-2t} \right) = 2\,\mathrm{C}$.
:::
