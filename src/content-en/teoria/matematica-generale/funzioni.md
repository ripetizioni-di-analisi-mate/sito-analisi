---
titolo: Real functions and economic models
sommario: What a real function is, how to find its domain, graph, inverse and composition, how linear, quadratic, exponential and logarithmic functions behave, and how they describe demand, supply, costs, revenues and profits.
---

## Sets and intervals

:::definizione{#insiemi titolo="Sets and operations"}
A **set** is a collection of objects, called elements; $x \in A$ means that $x$ is an element of $A$, and $A \subseteq B$ means that every element of $A$ also belongs to $B$. For two sets $A$ and $B$:

- the **union** $A \cup B$ consists of the elements that are in $A$ or in $B$;
- the **intersection** $A \cap B$ consists of the elements that are both in $A$ and in $B$;
- the **difference** $A \setminus B$ consists of the elements of $A$ that are not in $B$.

The number sets used in the course are $\mathbb{N} \subseteq \mathbb{Z} \subseteq \mathbb{Q} \subseteq \mathbb{R}$, that is, the natural numbers, the integers, the rationals and the reals. The solutions of a system of inequalities form the *intersection* of the solutions of the individual inequalities, because they must satisfy all of them at the same time. For the complete theory of sets, see the topic on sets in Mathematical Analysis 1.
:::

:::definizione{#intervalli titolo="Intervals"}
An **interval** is a set of real numbers lying between two endpoints. For $a < b$:
$$
[a, b] = \{x \in \mathbb{R} : a \leq x \leq b\},
\qquad
(a, b) = \{x \in \mathbb{R} : a < x < b\},
$$
and in the same way $[a, b)$ includes the endpoint $a$ but not $b$, and $(a, b]$ includes $b$ but not $a$. The unbounded intervals are the half-lines, such as $[a, +\infty) = \{x \in \mathbb{R} : x \geq a\}$ and $(-\infty, b) = \{x \in \mathbb{R} : x < b\}$; the symbols $\pm\infty$ are not numbers, so they never belong to an interval. Quantities produced or sold are not negative, so in economic models the variables usually lie in $[0, +\infty)$.
:::

## Functions, domain and graph

:::definizione{#funzione titolo="Real function of a real variable"}
Let $A \subseteq \mathbb{R}$ and $B \subseteq \mathbb{R}$. A **function** $f : A \to B$ assigns to *each* $x \in A$ *one and only one* element $f(x) \in B$. The set $A$ is the **domain**, $x$ is the **independent variable** and $f(x)$ is the **image** of $x$. The set of all images,
$$
f(A) = \{f(x) : x \in A\},
$$
is the **range** of the function, and it is contained in $B$. For example $f(x) = x^2$, defined on $\mathbb{R}$, has range $[0, +\infty)$, because a square is never negative and every number $y \geq 0$ is the square of $\sqrt{y}$.
:::

:::definizione{#grafico titolo="Graph of a function"}
The **graph** of $f : A \to \mathbb{R}$ is the set of points of the plane
$$
G_f = \{(x, f(x)) : x \in A\} .
$$
Since each $x$ corresponds to only one value, every vertical line $x = x_0$ meets the graph in *at most* one point, precisely in one point if $x_0 \in A$ and in none if $x_0 \notin A$. For this reason a circle is not the graph of a function $y = f(x)$, whereas its upper semicircle is. The point $(x_0, y_0)$ belongs to the graph *if and only if* $x_0 \in A$ and $y_0 = f(x_0)$; with $f(x) = x^2 - 3$, the point $(2, 1)$ belongs to the graph because $2^2 - 3 = 1$, the point $(1, 1)$ does not because $1^2 - 3 = -2$.

::grafico{f="sqrt(4-x^2)" curve="2*cos(t),2*sin(t),0,6.29" segmenti="1,-2.6,1,2.6" punti="1,1.732,pieno;1,-1.732,pieno" xmin=-3 xmax=3 ymin=-3 ymax=3 uguale=1 legenda="y = \sqrt{4 - x^2};x^2 + y^2 = 4" titolo="The line $x = 1$ meets the circle $x^2 + y^2 = 4$ in two points, so the circle is not the graph of a function; it meets the semicircle $y = \sqrt{4 - x^2}$ in only one point"}

:::

## Monotonicity, inverse and composition

:::definizione{#monotonia titolo="Increasing and decreasing functions"}
Let $f$ be defined on an interval $I$. The function is **increasing** on $I$ if for all $x_1, x_2 \in I$
$$
x_1 < x_2 \implies f(x_1) < f(x_2),
$$
and it is **decreasing** if $x_1 < x_2$ implies $f(x_1) > f(x_2)$. With the non-strict inequalities, $f(x_1) \leq f(x_2)$ and $f(x_1) \geq f(x_2)$, the function is called **non-decreasing** and **non-increasing**. For example $x^3$ is increasing on $\mathbb{R}$, while $\dfrac{1}{x}$ is decreasing on $(0, +\infty)$, because for $0 < x_1 < x_2$ we have $\dfrac{1}{x_1} > \dfrac{1}{x_2}$.
:::

:::definizione{#iniettiva titolo="Injective function"}
A function $f : A \to \mathbb{R}$ is **injective** if different values of the variable have different images:
$$
x_1 \neq x_2 \implies f(x_1) \neq f(x_2) .
$$
In the graph, every horizontal line meets it in *at most* one point. A function that is increasing or decreasing on an interval is injective, because two different values $x_1 < x_2$ have images one smaller than the other. The function $f(x) = x^2$ is *not* injective on $\mathbb{R}$, because $f(-2) = f(2) = 4$, whereas it is injective on $[0, +\infty)$, where it is increasing.
:::

:::definizione{#funzione-inversa titolo="Inverse function"}
Let $f : A \to \mathbb{R}$ be injective, with range $f(A)$. The **inverse function** $f^{-1} : f(A) \to A$ assigns to each $y \in f(A)$ the unique $x \in A$ such that $f(x) = y$:
$$
f^{-1}(y) = x \iff f(x) = y .
$$
To find it, solve the equation $y = f(x)$ for $x$. Applying $f$ and then $f^{-1}$ returns the starting value, therefore $f^{-1}(f(x)) = x$ for every $x \in A$ and $f(f^{-1}(y)) = y$ for every $y \in f(A)$. The graph of $f^{-1}$, with the variable again on the horizontal axis, is the reflection of the graph of $f$ across the line $y = x$, because the point $(x, y)$ lies on the graph of $f$ exactly when $(y, x)$ lies on the graph of $f^{-1}$.
:::

:::esempio{titolo="Inverse of a linear function"}
The function $f(x) = 2x + 3$ is increasing on $\mathbb{R}$, so it is injective, and its range is $\mathbb{R}$. Solving $y = 2x + 3$ for $x$ gives
$$
f^{-1}(y) = \frac{y - 3}{2}, \qquad y \in \mathbb{R} .
$$
As a check, $f(1) = 5$ and $f^{-1}(5) = \dfrac{5 - 3}{2} = 1$. The same procedure, applied to the demand function $q = 100 - 4p$, gives the inverse demand $p = 25 - \dfrac{q}{4}$, that is, the price at which the quantity $q$ is sold.
:::

:::definizione{#funzione-composta titolo="Composite function"}
Let $f : A \to \mathbb{R}$ and $g : B \to \mathbb{R}$, and let $x \in A$ be such that $f(x) \in B$. The **composite function** $g \circ f$ applies first $f$ and then $g$:
$$
(g \circ f)(x) = g(f(x)) .
$$
Its domain consists of the $x \in A$ for which $f(x)$ lies in the domain of $g$. The order of composition matters. For example, with $f(x) = x + 1$ and $g(x) = x^2$ we have $g(f(x)) = (x + 1)^2$ and $f(g(x)) = x^2 + 1$, which are different functions.
:::

## Linear functions

:::definizione{#funzione-lineare titolo="Linear function and slope"}
A **linear** function (more precisely, affine) is a function of the form
$$
f(x) = m x + k, \qquad m, k \in \mathbb{R},
$$
and its graph is a line. The number $k = f(0)$ is the **intercept**, that is, the $y$-coordinate of the point where the line crosses the vertical axis. The number $m$ is the **slope**. For any two values $x_1 \neq x_2$ the ratio between the change in $f$ and the change in the variable is
$$
\frac{f(x_2) - f(x_1)}{x_2 - x_1} = \frac{m x_2 - m x_1}{x_2 - x_1} = m ,
$$
so $m$ is the change in $f$ for each one-unit increase in the variable, the same everywhere. If $m > 0$ the function is increasing, if $m < 0$ it is decreasing, if $m = 0$ it is constant. In economic models a linear cost $C(q) = 200 + 12q$ has as intercept the fixed cost, $200$, and as slope the cost of each additional unit, $12$.

::grafico{f="0.5*x+1" punti="0,1,pieno;2,2,pieno;6,4,pieno" segmenti="2,2,6,2;6,2,6,4" etichette="3.4,1.6,Δx = 4;6.2,3,Δy = 2" xmin=-2 xmax=8 ymin=-1 ymax=6 legenda="y = \dfrac{1}{2}\,x + 1" titolo="For $f(x) = \dfrac{1}{2}\,x + 1$ the intercept is $1$, and an increase $\Delta x = 4$ corresponds to $\Delta y = 2$, so the slope is $\dfrac{2}{4} = \dfrac{1}{2}$"}

:::

:::teorema{#retta-per-due-punti titolo="Line through two points"}
Let $(x_1, y_1)$ and $(x_2, y_2)$ be two points with $x_1 \neq x_2$. There is only one linear function whose graph passes through both:
$$
f(x) = y_1 + m\,(x - x_1),
\qquad
m = \frac{y_2 - y_1}{x_2 - x_1} .
$$
The slope is fixed by the two points, because it must equal the ratio between the change in $y$ and the change in $x$; once $m$ is chosen, the line through $(x_1, y_1)$ with that slope is unique. Substituting, one checks that $f(x_1) = y_1$ and that $f(x_2) = y_1 + (y_2 - y_1) = y_2$. For example, the line through $(1, 3)$ and $(4, 9)$ has
$$
m = \frac{9 - 3}{4 - 1} = 2,
\qquad
f(x) = 3 + 2\,(x - 1) = 2x + 1 .
$$
:::

## Quadratic functions

:::teorema{#vertice-parabola titolo="Vertex of the parabola"}
Let $f(x) = a x^2 + b x + c$ with $a \neq 0$. The graph is a parabola with vertical axis and vertex at the point
$$
x_V = -\frac{b}{2a},
\qquad
y_V = f(x_V) = c - \frac{b^2}{4a} .
$$

- If $a > 0$ the parabola opens upward and $y_V$ is the **minimum value** of $f$.
- If $a < 0$ the parabola opens downward and $y_V$ is the **maximum value** of $f$.

The formulas follow from completing the square:
$$
\begin{aligned}
a x^2 + b x + c
&= a \left( x^2 + \frac{b}{a}\,x \right) + c \\[6pt]
&= a \left( x + \frac{b}{2a} \right)^2 - \frac{b^2}{4a} + c .
\end{aligned}
$$
The square $\left( x + \dfrac{b}{2a} \right)^2$ is non-negative and vanishes *only* for $x = -\dfrac{b}{2a}$; therefore for $a > 0$ the value $c - \dfrac{b^2}{4a}$ is the smallest that $f$ takes, and for $a < 0$ it is the largest. Quadratic functions describe revenues and profits when the price depends linearly on the quantity, and the vertex gives the quantity that maximizes them.

::grafico{f="-x^2+4*x+1" punti="2,5,pieno;-0.236,0,pieno;4.236,0,pieno" segmenti="2,0,2,5" xmin=-2 xmax=6 ymin=-4 ymax=6 titolo="The parabola $f(x) = -x^2 + 4x + 1$ has $a < 0$, so the vertex $(2, 5)$ is the maximum point; the zeros are $2 \pm \sqrt{5}$"}

:::

:::esempio{titolo="Zeros and sign of a quadratic function"}
The zeros of $f(x) = a x^2 + b x + c$ are the solutions of the equation $a x^2 + b x + c = 0$, and they depend on the discriminant $\Delta = b^2 - 4ac$.

- If $\Delta > 0$ there are two zeros $x_1 < x_2$, and $f$ has the sign of $a$ outside the interval $[x_1, x_2]$ and the opposite sign inside.
- If $\Delta = 0$ there is only one zero, the vertex, and elsewhere $f$ has the sign of $a$.
- If $\Delta < 0$ there are no zeros and $f$ has the sign of $a$ everywhere.

For $f(x) = x^2 - 2x - 3$ we have $\Delta = 4 + 12 = 16 > 0$, and the zeros are $-1$ and $3$. Since $a = 1 > 0$, the function is positive for $x < -1$ and for $x > 3$, negative for $-1 < x < 3$.
:::

## Powers, exponentials and logarithms

:::definizione{#esponenziale titolo="Exponential function"}
Let $a > 0$ with $a \neq 1$. The **exponential function** with base $a$ is
$$
f(x) = a^{x}, \qquad x \in \mathbb{R} .
$$
It is always positive and equals $1$ at $x = 0$; it is increasing if $a > 1$ and decreasing if $0 < a < 1$. The properties of powers become $a^{x + y} = a^{x} a^{y}$ and $(a^{x})^{y} = a^{xy}$. The property that characterizes the exponential is that equal intervals of the variable correspond to equal *ratios* of the values; indeed $\dfrac{a^{x + 1}}{a^{x}} = a$ for every $x$. A capital of $1000$ euros invested at $5\%$ per year, with the interest added to the capital at the end of each year, is worth $1000 \cdot 1.05^{t}$ euros after $t$ years, because each year the capital is multiplied by $1.05$. The base most used in calculus is the number $e \approx 2.718$, which will be defined as a limit in the topic on limits.
:::

:::definizione{#logaritmo titolo="Logarithm"}
Let $a > 0$ with $a \neq 1$ and $y > 0$. The **logarithm** to base $a$ of $y$ is the exponent to which $a$ must be raised to obtain $y$:
$$
\log_a y = x \iff a^{x} = y .
$$
The function $\log_a$, defined for $y > 0$, is the inverse of the exponential with base $a$; one writes $\ln$ for the logarithm to base $e$. For $x, y > 0$ we have
$$
\log_a (xy) = \log_a x + \log_a y,
\qquad
\log_a \frac{x}{y} = \log_a x - \log_a y,
\qquad
\log_a x^{k} = k \log_a x ,
$$
and the change-of-base formula $\log_a x = \dfrac{\ln x}{\ln a}$. The logarithm is used to find an unknown exponent. The capital of the previous definition, for example, doubles when $1.05^{t} = 2$, and taking the logarithm of both sides gives
$$
t = \frac{\ln 2}{\ln 1.05} \approx 14.2 \text{ years} .
$$

::grafico{f="exp(x);log(x)" segmenti="-3,-3,5,5" punti="0,1,pieno;1,0,pieno" xmin=-3 xmax=5 ymin=-3 ymax=5 uguale=1 legenda="y = e^{x};y = \ln x" titolo="The graphs of $e^{x}$ and of $\ln x$ are symmetric with respect to the line $y = x$, because the two functions are inverses of each other"}

:::

:::osservazione{#crescita-lineare-esponenziale titolo="Linear growth and exponential growth"}
A linear function grows by a fixed *amount* for each unit of the variable, an exponential with base $a > 1$ grows by a fixed *percentage*. For this reason, from some value of the variable onward, the exponential exceeds any linear function. The functions $1000 \cdot 1.05^{t}$ and $1000 + 50\,t$ are both equal to $1000$ for $t = 0$ and $1050$ for $t = 1$, but after $40$ years the first is worth about $7040$ euros and the second $3000$ euros. The two laws are compound interest and simple interest, treated in the topic on financial mathematics.

::grafico{f="1000*1.05^x+0*sqrt(x);1000+50*x+0*sqrt(x)" xmin=-5 xmax=45 ymin=-1000 ymax=9000 nomi="t,M" legenda="M = 1000 \cdot 1.05^{t};M = 1000 + 50\,t" titolo="Capital of $1000$ euros at $5\%$ per year: exponential growth (compound interest) and linear growth (simple interest)"}

:::

## Natural domain

:::definizione{#dominio-naturale titolo="Natural domain"}
When a function is given only by its formula, its **natural domain** is the set of real numbers $x$ for which the formula makes sense. The conditions to impose are:

- denominators are different from zero;
- the arguments of even-index roots are greater than or equal to zero;
- the arguments of logarithms are strictly positive.

When there is more than one condition, they must all hold at the same time, and the domain is the intersection of their solutions. Odd-index roots, exponentials and polynomials impose no conditions.
:::

:::esempio{titolo="Domain with a root and a logarithm"}
For $f(x) = \sqrt{x - 1} + \ln(5 - x)$ the root requires $x - 1 \geq 0$ and the logarithm requires $5 - x > 0$, and the two conditions must hold together:
$$
\begin{cases}
x - 1 \geq 0 \\[4pt]
5 - x > 0
\end{cases}
\iff
\begin{cases}
x \geq 1 \\[4pt]
x < 5
\end{cases}
$$
Hence the domain is the interval $[1, 5)$. The endpoint $1$ belongs to the domain, because $\sqrt{0} = 0$; the endpoint $5$ does not, because $\ln 0$ is not defined.
:::

## Demand, supply and market equilibrium

:::definizione{#domanda-offerta titolo="Demand and supply functions"}
The **demand function** $q_d(p)$ gives the quantity of a good that consumers buy at price $p$; the **supply function** $q_s(p)$ gives the quantity that producers put up for sale at the same price. As a rule, demand is decreasing and supply is increasing, and all quantities are non-negative. In economics the price is usually plotted on the vertical axis and the quantity on the horizontal one; the graph of demand is then that of the inverse demand, which gives the price as a function of the quantity. The minimum price above which producers supply the good is the one at which $q_s(p) = 0$; the maximum price consumers are willing to pay is the one at which $q_d(p) = 0$.
:::

:::definizione{#equilibrio-di-mercato titolo="Market equilibrium"}
The market is in **equilibrium** at the price $p^*$ at which the quantity demanded equals the quantity supplied:
$$
q_d(p^*) = q_s(p^*) ,
$$
and the **equilibrium quantity** is $q^* = q_d(p^*) = q_s(p^*)$. In the graph with quantity on the horizontal axis and price on the vertical axis, the equilibrium point $(q^*, p^*)$ is the intersection of the demand and supply curves. For a price greater than $p^*$ supply exceeds demand (excess supply), for a lower price demand exceeds supply (excess demand).
:::

:::esempio{titolo="Equilibrium with linear demand and supply"}
The inverse demand and the inverse supply of a good are $p = 50 - 2q$ and $p = 10 + 3q$, with $q \geq 0$. At equilibrium the price is the same on the two curves, so
$$
50 - 2q = 10 + 3q
\iff
5q = 40
\iff
q^* = 8,
\qquad
p^* = 50 - 2 \cdot 8 = 34 .
$$
The market clears at a price of $34$ euros with $8$ units traded. As a check, on the supply curve $10 + 3 \cdot 8 = 34$. At a price of $40$ euros demand is $q = \dfrac{50 - 40}{2} = 5$ and supply is $q = \dfrac{40 - 10}{3} = 10$, so there is an excess supply of $5$ units.

::grafico{f="50-2*x+0*sqrt(x*(25-x));10+3*x+0*sqrt(x)" punti="8,34,pieno" segmenti="8,0,8,34;0,34,8,34;5,40,10,40" xmin=-2 xmax=18 ymin=-10 ymax=90 nomi="q,p" legenda="p = 50 - 2q;p = 10 + 3q" titolo="Demand and supply intersect at the equilibrium point $(8, 34)$; at price $40$ the horizontal segment between the two curves is the excess supply, $10 - 5 = 5$ units"}

:::

## Cost, revenue and profit

:::definizione{#costo-ricavo-profitto titolo="Cost, revenue and profit"}
For a firm that produces and sells the quantity $q$:

- the **total cost** $C(q)$ is the sum of the **fixed cost** $C(0)$, which does not depend on $q$, and the **variable cost** $C(q) - C(0)$;
- the **revenue** is $R(q) = p\,q$, where $p$ is the unit price, constant under perfect competition or given by the inverse demand $p(q)$;
- the **profit** is the difference $\pi(q) = R(q) - C(q)$.

With the constant price $p = 20$ and the cost $C(q) = 200 + 12q$, the profit is $\pi(q) = 20q - 200 - 12q = 8q - 200$, and each unit sold brings a margin of $8$ euros. With the inverse demand $p = 50 - 2q$ the revenue is $R(q) = (50 - 2q)\,q = 50q - 2q^2$, a quadratic function.
:::

:::definizione{#punto-di-pareggio titolo="Break-even point"}
The **break-even point** is the quantity $q_0$ at which revenue exactly covers cost:
$$
R(q_0) = C(q_0), \qquad \text{that is} \qquad \pi(q_0) = 0 .
$$
With constant price $p$ and linear cost $C(q) = F + c\,q$, with $F$ the fixed cost and $c$ the variable unit cost, and with $p > c$, the equation $p\,q = F + c\,q$ gives
$$
q_0 = \frac{F}{p - c} .
$$
The denominator $p - c$ is the margin on each unit, and break-even is reached when the sum of the margins covers the fixed cost. With $F = 200$, $p = 20$ and $c = 12$ we have $q_0 = \dfrac{200}{8} = 25$, so below $25$ units the firm makes a loss and above it makes a profit.

::grafico{f="20*x+0*sqrt(x);200+12*x+0*sqrt(x)" punti="25,500,pieno" segmenti="25,0,25,500" xmin=-5 xmax=45 ymin=-100 ymax=900 nomi="q,€" legenda="R = 20q;C = 200 + 12q" titolo="Revenue and cost meet at the break-even point $q_0 = 25$, where both are equal to $500$ euros"}

:::

:::definizione{#costo-medio titolo="Average cost"}
The **average cost** (or unit cost) is the total cost divided by the quantity produced:
$$
\bar{C}(q) = \frac{C(q)}{q}, \qquad q > 0 .
$$
For a linear cost $C(q) = F + c\,q$ we have $\bar{C}(q) = \dfrac{F}{q} + c$. As $q$ increases, the fixed cost is spread over a larger number of units, therefore the average cost decreases and approaches the variable unit cost $c$ without reaching it. With $C(q) = 200 + 12q$, the average cost is $32$ euros for $q = 10$ and $14$ euros for $q = 100$. The behavior for large $q$ is described with limits, and the minimum average cost of non-linear costs is found with derivatives in curve sketching.

::grafico{f="200/x+12+0*sqrt(x)" asintoti="y=12" punti="10,32,pieno;100,14,pieno" xmin=-20 xmax=180 ymin=-5 ymax=45 nomi="q,C̄" legenda="\bar{C}(q) = \dfrac{200}{q} + 12" titolo="The average cost $\bar{C}(q) = \dfrac{200}{q} + 12$ is $32$ euros for $q = 10$ and $14$ euros for $q = 100$, and approaches $12$ euros as the quantity increases"}

:::
