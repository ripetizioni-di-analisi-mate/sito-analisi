---
titolo: Functions of two variables
sommario: How points and sets of the plane are described, how to find the domain and the level curves of a function of two variables, how to compute partial derivatives, the gradient, the tangent plane and the differential, and how they are used to study production, utility and returns to scale.
---

## The plane ℝ², neighborhoods and sets

:::definizione{#piano-r2 titolo="The plane ℝ²"}
The set $\mathbb{R}^2$ consists of all **ordered pairs** $(x, y)$ of real numbers. Once a Cartesian coordinate system is fixed in the plane, each pair corresponds to exactly one point $P = (x, y)$, and vice versa, so $\mathbb{R}^2$ is identified with the plane. The pair is *ordered*, therefore $(1, 3)$ and $(3, 1)$ are different points. A function of two variables assigns a number to each point of a region of the plane, and describing these regions requires the notions of distance and neighborhood.
:::

:::definizione{#distanza titolo="Distance between two points"}
The **distance** between the points $P = (x_1, y_1)$ and $Q = (x_2, y_2)$ is
$$
d(P, Q) = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} .
$$
The differences $x_2 - x_1$ and $y_2 - y_1$ are the legs of a right triangle whose hypotenuse is the segment $PQ$, so the formula is the Pythagorean theorem. For $P = (1, 1)$ and $Q = (4, 5)$ we have $d(P, Q) = \sqrt{3^2 + 4^2} = 5$. The distance of $P = (x, y)$ from the origin $O$ is $\sqrt{x^2 + y^2}$, and the points at distance $r$ from a point $(x_0, y_0)$ form the circle with equation $(x - x_0)^2 + (y - y_0)^2 = r^2$.

::grafico{linee="1,1 4,5" segmenti="1,1,4,1;4,1,4,5" punti="1,1,pieno,P;4,5,pieno,Q" etichette="2.2,0.55,Δx = 3;4.2,3,Δy = 4;1.4,3.3,d = 5" xmin=-1 xmax=6 ymin=-1 ymax=6 uguale=1 titolo="The distance between $P = (1, 1)$ and $Q = (4, 5)$ is the hypotenuse of the right triangle with legs $3$ and $4$, so it equals $\sqrt{9 + 16} = 5$"}

:::

:::definizione{#intorno titolo="Circular neighborhood"}
Let $P_0 = (x_0, y_0)$ be a point and $r > 0$ a real number. The **circular neighborhood** with center $P_0$ and radius $r$ is the set of points whose distance from $P_0$ is less than $r$:
$$
B(P_0, r) = \{ P \in \mathbb{R}^2 : d(P, P_0) < r \} = \{ (x, y) : (x - x_0)^2 + (y - y_0)^2 < r^2 \} .
$$
It is the disk with center $P_0$ and radius $r$ without its boundary circle. Neighborhoods play in the plane the role that the intervals $(x_0 - r, x_0 + r)$ play on the line. For example, $(2, 3)$ belongs to $B((1, 2), 2)$, because its distance from the center is $\sqrt{2} < 2$, while $(3, 4)$ does not belong to it, because its distance is $\sqrt{8} > 2$.
:::

:::definizione{#punti-interni-frontiera titolo="Interior and boundary points"}
Let $A$ be a subset of the plane and $P_0$ a point.

- $P_0$ is **interior** to $A$ if there is a neighborhood $B(P_0, r)$ contained in $A$.
- $P_0$ is **exterior** to $A$ if there is a neighborhood $B(P_0, r)$ that contains no points of $A$.
- $P_0$ is a **boundary** point of $A$ if *every* neighborhood of $P_0$ contains both points of $A$ and points not in $A$.

The set of boundary points is called the **boundary** of $A$. A boundary point may or may not belong to $A$. For the disk $A = \{ (x, y) : x^2 + y^2 < 1 \}$ consider a point $P_0$ with $x^2 + y^2 < 1$. Its distance from the origin is $d(P_0, O) < 1$, so its distance from the circle is $1 - d(P_0, O)$. The disk with center $P_0$ and radius $r = 1 - d(P_0, O)$ is therefore contained in $A$, and $P_0$ is interior. The points of the circle $x^2 + y^2 = 1$, on the other hand, are boundary points, because every disk centered at one of them contains points closer to the origin and points farther from it.

::grafico{f="NaN" curve="cos(t),sin(t),0,6.29" area="0.3+sqrt(abs(0.25-(x-0.3)^2));0.3-sqrt(abs(0.25-(x-0.3)^2));-0.2;0.8|-0.8+sqrt(abs(0.0625-(x-0.6)^2));-0.8-sqrt(abs(0.0625-(x-0.6)^2));0.35;0.85" punti="0.3,0.3,pieno,P₀;0.6,-0.8,pieno,Q" etichette="-0.55,-0.45,A" xmin=-2 xmax=2 ymin=-1.5 ymax=1.5 uguale=1 legenda=";x^2 + y^2 = 1" titolo="The open disk $x^2 + y^2 < 1$ with its boundary dashed; the interior point $P_0$ has a neighborhood contained in the disk, while every neighborhood of the boundary point $Q$ contains points inside and outside the disk"}

:::

:::definizione{#aperti-chiusi-limitati titolo="Open, closed and bounded sets"}
Let $A$ be a subset of the plane.

- $A$ is **open** if all its points are interior, that is, if it contains none of its boundary points.
- $A$ is **closed** if it contains all its boundary points.
- $A$ is **bounded** if it is contained in a large enough disk, that is, if there exists $R > 0$ such that $d(P, O) \leq R$ for every $P \in A$.

The disk $x^2 + y^2 < 1$ is open and bounded; the disk $x^2 + y^2 \leq 1$ is closed and bounded; the half-plane $y > 0$ is open and not bounded. As a rule, strict inequalities between continuous functions give open sets and non-strict ones give closed sets. Closed and bounded sets are those on which the Weierstrass theorem holds, and they will come back in the topic on unconstrained and constrained extrema.
:::

:::attenzione
A set can be neither open nor closed. The annulus $A = \{ (x, y) : 1 \leq x^2 + y^2 < 4 \}$ contains the points of the circle $x^2 + y^2 = 1$, which are boundary points, so it is not open. The point $(2, 0)$ is a boundary point and does not belong to $A$, because $2^2 + 0^2 = 4$, so $A$ is not closed.
:::

## Functions of two variables and domain

:::definizione{#funzione-due-variabili titolo="Function of two variables"}
Let $D$ be a subset of $\mathbb{R}^2$. A **function of two variables** $f : D \to \mathbb{R}$ assigns to *each* point $(x, y) \in D$ *one and only one* real number $f(x, y)$. The set $D$ is the **domain**, and the variables $x$ and $y$ are independent, that is, they can be varied separately. For example, $f(x, y) = x^2 y - 3y$ at $(2, 1)$ equals $4 - 3 = 1$. Many economic quantities depend on more than one variable; for example, the quantity produced depends on the capital and labor employed, and a consumer's utility on the quantities of the goods purchased.
:::

:::definizione{#dominio-due-variabili titolo="Natural domain"}
When a function of two variables is given only by its formula, its **natural domain** is the set of points $(x, y)$ for which the formula makes sense. The conditions are the same as for functions of one variable:

- denominators are nonzero;
- the arguments of even-index roots are greater than or equal to zero;
- the arguments of logarithms are strictly positive.

The difference lies in the solutions, which are regions of the plane and are represented by a drawing. The most frequent boundary curves are lines, parabolas and circles.

- The line $ax + by + c = 0$ divides the plane into two half-planes; in one $ax + by + c > 0$ holds, in the other $ax + by + c < 0$, and to tell which is which one substitutes a point not on the line, usually the origin.
- The inequality $y > g(x)$ identifies the points that lie above the graph of $g$.
- The inequality $(x - x_0)^2 + (y - y_0)^2 < r^2$ identifies the points interior to the circular region with center $(x_0, y_0)$ and radius $r$.

In the drawings, the boundary curves that belong to the domain are drawn with a solid line, those that do not belong to it with a dashed line.
:::

:::esempio{titolo="Domain above a parabola"}
For $f(x, y) = \sqrt{y - x^2}$ the root requires $y - x^2 \geq 0$, that is, $y \geq x^2$. The domain is therefore the region above the parabola $y = x^2$, parabola included. The point $(0, 1)$ belongs to the domain, because $1 \geq 0$, while $(2, 1)$ does not, because $1 < 4$. The domain contains its boundary, which is the parabola, so it is closed; it is not bounded, because it contains all the points $(0, y)$ with $y \geq 0$.

::grafico{f="x^2" area="5;x^2;-2.24;2.24" punti="0,1,pieno;2,1,vuoto" xmin=-3 xmax=3 ymin=-1 ymax=5 legenda="y = x^2" titolo="The domain of $\sqrt{y - x^2}$ is the region above the parabola $y = x^2$, parabola included"}

:::

:::esempio{titolo="Domain with a root and a logarithm"}
For $f(x, y) = \sqrt{4 - x^2 - y^2} + \ln(y - x)$ the two conditions must hold together:
$$
\begin{cases}
4 - x^2 - y^2 \geq 0 \\[4pt]
y - x > 0
\end{cases}
\iff
\begin{cases}
x^2 + y^2 \leq 4 \\[4pt]
y > x
\end{cases}
$$
The first condition gives the circular region with center at the origin and radius $2$, circle included; the second gives the half-plane above the line $y = x$, line excluded. The domain is their intersection, that is, the semicircular region above the line $y = x$. The domain is bounded, because it lies in the circular region of radius $2$. It is not open, because it contains points of the circle, and it is not closed, because it does not contain the points of the diameter on the line $y = x$.

::grafico{curve="2*cos(t),2*sin(t),0,6.29;t,t,-3,3" area="sqrt(abs(4-x^2));max(x,-sqrt(abs(4-x^2)));-2;1.4142" xmin=-3 xmax=3 ymin=-3 ymax=3 uguale=1 legenda="x^2 + y^2 = 4;y = x" titolo="The domain of $\sqrt{4 - x^2 - y^2} + \ln(y - x)$: the part of the circular region of radius $2$ above the line $y = x$, with the circle included and the line excluded"}

:::

## Graph and level curves

:::definizione{#grafico-due-variabili titolo="Graph of a function of two variables"}
The **graph** of $f : D \to \mathbb{R}$ is the set of points in space
$$
G_f = \{ (x, y, z) : (x, y) \in D, \ z = f(x, y) \} .
$$
Above each point $(x, y)$ of the domain one plots the height $z = f(x, y)$, and the points obtained in this way form a **surface**. The graph of $f(x, y) = ax + by + c$ is a plane. The graph of $f(x, y) = x^2 + y^2$ is a paraboloid, a cup-shaped surface with its lowest point at the origin, because $x^2 + y^2 \geq 0$ and it equals $0$ only at $(0, 0)$. Drawing a surface by hand is difficult, and for this reason one studies its horizontal sections.
:::

:::definizione{#curve-di-livello titolo="Level curves"}
Let $k$ be a real number. The **level curve** $k$ of $f$ is the set of points of the domain at which $f$ equals $k$:
$$
L_k = \{ (x, y) \in D : f(x, y) = k \} .
$$
In the graph it corresponds to the section of the surface by the horizontal plane $z = k$, projected onto the $xy$-plane, like the contour lines of a topographic map. A set $L_k$ may be empty, and different level curves have no points in common, because at a point $f$ takes only one value. For $f(x, y) = x^2 + y^2$ the level curve $k$ is empty for $k < 0$, reduces to the origin for $k = 0$, and is the circle with center at the origin and radius $\sqrt{k}$ for $k > 0$. The level curves of production and utility functions are isoquants and indifference curves.

::grafico{curve="cos(t),sin(t),0,6.29;2*cos(t),2*sin(t),0,6.29" punti="0,0,pieno" xmin=-3 xmax=3 ymin=-3 ymax=3 uguale=1 legenda="x^2 + y^2 = 1;x^2 + y^2 = 4" titolo="The level curves $k = 1$ and $k = 4$ of $f(x, y) = x^2 + y^2$ are the circles of radius $1$ and $2$; the level curve $0$ is the origin"}

:::

## Limits and continuity

:::definizione{#limiti-continuita titolo="Limit and continuity"}
Let $f : D \to \mathbb{R}$ and let $P_0$ be a point interior to $D$ or a boundary point of $D$. We say that $f$ has **limit** $\ell$ as $P \to P_0$ if for every $\varepsilon > 0$ there exists $\delta > 0$ such that
$$
P \in D, \quad 0 < d(P, P_0) < \delta \implies |f(P) - \ell| < \varepsilon ,
$$
and we write $\displaystyle\lim_{(x, y) \to (x_0, y_0)} f(x, y) = \ell$. The definition is the one for functions of one variable, with the distance in the plane in place of $|x - x_0|$, and it requires the values of $f$ to be close to $\ell$ at *all* points close enough to $P_0$, from whatever direction one approaches. The function is **continuous** at $P_0 \in D$ if $\displaystyle\lim_{P \to P_0} f(P) = f(P_0)$. Polynomials in $x$ and $y$, exponentials, logarithms, roots, and the functions obtained from these by sums, products, quotients and compositions are continuous on their domain, like the functions of one variable seen in the topic on limits and continuity. For example, $\displaystyle\lim_{(x, y) \to (1, 2)} (x^2 y + y) = 2 + 2 = 4$, because the polynomial is continuous. For the complete theory, see the topic on functions of several variables in Mathematical Analysis 2.
:::

:::attenzione
If approaching $P_0$ along two different curves gives two different limits, the limit does *not* exist. The function $f(x, y) = \dfrac{2xy}{x^2 + y^2}$, defined outside the origin, on the line $y = mx$ with $x \neq 0$ equals
$$
f(x, mx) = \frac{2m x^2}{x^2 + m^2 x^2} = \frac{2m}{1 + m^2} ,
$$
a value that depends on the line. On the $x$-axis, with $m = 0$, the function equals $0$; on the line $y = x$, with $m = 1$, it equals $1$. Hence the limit of $f$ as $(x, y) \to (0, 0)$ does not exist.
:::

:::teorema{#weierstrass-due-variabili titolo="Weierstrass theorem in two variables"}
Let $f$ be continuous on a nonempty, closed and bounded set $D$ of the plane. Then $f$ has a maximum value and a minimum value on $D$.

It is the extension of the Weierstrass theorem seen in the topic on limits and continuity, where the closed and bounded interval $[a, b]$ is replaced by a closed and bounded set of the plane; for the proof, see Mathematical Analysis 2. The theorem guarantees the existence of the absolute maxima and minima sought in the topic on unconstrained and constrained extrema. If the set is not closed, the conclusion may fail. On the open disk $x^2 + y^2 < 1$ the function $f(x, y) = x$ takes values as close as desired to $1$, but not the value $1$, because the point $(1, 0)$ does not belong to the disk; therefore the maximum does not exist.
:::

## Partial derivatives and gradient

:::definizione{#derivate-parziali titolo="Partial derivatives"}
Let $(x_0, y_0)$ be a point interior to the domain of $f$. If $y = y_0$ is held fixed, the function $x \mapsto f(x, y_0)$ depends on $x$ alone, and its derivative at $x_0$ is the **partial derivative** of $f$ with respect to $x$:
$$
f_x(x_0, y_0) = \lim_{h \to 0} \frac{f(x_0 + h, y_0) - f(x_0, y_0)}{h} .
$$
In the same way, holding $x = x_0$ fixed, one defines
$$
f_y(x_0, y_0) = \lim_{h \to 0} \frac{f(x_0, y_0 + h) - f(x_0, y_0)}{h} .
$$
One also writes $\dfrac{\partial f}{\partial x}$ and $\dfrac{\partial f}{\partial y}$. The derivative $f_x$ measures the rate of change of $f$ when only $x$ changes; in the graph it is the slope of the curve obtained by cutting the surface with the vertical plane $y = y_0$. To compute it, one differentiates with respect to $x$ using the rules of the topic on derivatives, marginal functions and elasticity, treating $y$ as a constant. For $f(x, y) = x^2 y + 3y^3$ we have
$$
f_x(x, y) = 2xy,
\qquad
f_y(x, y) = x^2 + 9y^2 ,
$$
so at $(1, 2)$ their values are $f_x(1, 2) = 4$ and $f_y(1, 2) = 1 + 36 = 37$.
:::

:::esempio{titolo="Partial derivatives with the differentiation rules"}
For $f(x, y) = e^{xy} + \ln(x^2 + y)$, defined where $x^2 + y > 0$, the rule for composite functions gives
$$
f_x(x, y) = y\,e^{xy} + \frac{2x}{x^2 + y},
\qquad
f_y(x, y) = x\,e^{xy} + \frac{1}{x^2 + y} .
$$
In computing $f_x$ the derivative of $xy$ with respect to $x$ is $y$, because $y$ is a constant; in computing $f_y$ the derivative of $x^2 + y$ with respect to $y$ is $1$, because $x^2$ is a constant. At $(0, 1)$ we get $f_x(0, 1) = 1 + 0 = 1$ and $f_y(0, 1) = 0 + 1 = 1$.
:::

:::definizione{#gradiente titolo="Gradient"}
If both partial derivatives exist at $(x, y)$, the **gradient** of $f$ at $(x, y)$ is the vector that has them as components:
$$
\nabla f(x, y) = \big( f_x(x, y), \ f_y(x, y) \big) .
$$
The gradient gathers into a single object the rates of change in the two directions of the axes. One can prove that, when it is nonzero, it points in the direction in which $f$ increases most rapidly and that it is perpendicular to the level curve passing through the point; for the first property, see Mathematical Analysis 2; the second follows from the derivative along a curve. For $f(x, y) = x^2 y + 3y^3$ we have $\nabla f(1, 2) = (4, 37)$. The points where the gradient is the zero vector are called **stationary points**, and they are the candidate maxima and minima of the topic on unconstrained and constrained extrema.
:::

:::attenzione
For functions of one variable, the existence of the derivative implies continuity; the existence of the partial derivatives, on the other hand, does *not* imply continuity. Let $f(x, y) = \dfrac{2xy}{x^2 + y^2}$ for $(x, y) \neq (0, 0)$ and $f(0, 0) = 0$. On the axes the function equals $0$, so $f(h, 0) - f(0, 0) = 0$ and $f(0, h) - f(0, 0) = 0$ for every $h$, and it follows that $f_x(0, 0) = f_y(0, 0) = 0$. The function, however, is not continuous at the origin, because its limit at $(0, 0)$ does not exist.
:::

## Second derivatives and Schwarz's theorem

:::definizione{#derivate-seconde titolo="Second partial derivatives"}
The partial derivatives $f_x$ and $f_y$ are in turn functions of two variables, and if they have partial derivatives, their partial derivatives are the **second derivatives** of $f$:
$$
f_{xx} = (f_x)_x,
\qquad
f_{xy} = (f_x)_y,
\qquad
f_{yx} = (f_y)_x,
\qquad
f_{yy} = (f_y)_y .
$$
The derivatives $f_{xy}$ and $f_{yx}$ are called **mixed derivatives**; in $f_{xy}$ one differentiates first with respect to $x$ and then with respect to $y$. For $f(x, y) = x^2 y + 3y^3$, from the first derivatives $f_x = 2xy$ and $f_y = x^2 + 9y^2$ we get
$$
f_{xx} = 2y,
\qquad
f_{xy} = 2x,
\qquad
f_{yx} = 2x,
\qquad
f_{yy} = 18y .
$$
The second derivatives describe how the slopes change, like $f''$ for functions of one variable.
:::

:::teorema{#teorema-di-schwarz titolo="Schwarz's theorem"}
Let $f$ be defined on an open set $A$, and let the mixed derivatives $f_{xy}$ and $f_{yx}$ be continuous on $A$. Then
$$
f_{xy}(x, y) = f_{yx}(x, y) \qquad \text{for every } (x, y) \in A .
$$
The theorem says that, for the functions used in applications, the order of differentiation does not matter, and therefore there are three distinct second derivatives to compute. The hypotheses are satisfied by polynomials, exponentials, logarithms and their combinations on their domains, which are open. Computing both mixed derivatives also serves as a check on the calculations, as in the example of the definition, where both equal $2x$. For the proof, see the topic on differential calculus in several variables in Mathematical Analysis 2.
:::

:::definizione{#matrice-hessiana titolo="Hessian matrix"}
If $f$ has second derivatives at $(x, y)$, the **Hessian matrix** of $f$ at $(x, y)$ is the square matrix of order $2$
$$
H(x, y) =
\begin{pmatrix}
f_{xx}(x, y) & f_{xy}(x, y) \\
f_{yx}(x, y) & f_{yy}(x, y)
\end{pmatrix} .
$$
When the hypotheses of Schwarz's theorem hold, the off-diagonal entries are equal, and the Hessian matrix is **symmetric**, in the sense of the topic on matrices, determinants and linear systems. For $f(x, y) = x^2 y + 3y^3$ we have
$$
H(1, 2) =
\begin{pmatrix}
4 & 2 \\
2 & 36
\end{pmatrix},
\qquad
\det H(1, 2) = 144 - 4 = 140 .
$$
The sign of $\det H$ and of $f_{xx}$ at stationary points makes it possible to recognize maxima, minima and saddle points, as seen in the topic on unconstrained and constrained extrema.
:::

## Differential, tangent plane and linear approximation

:::definizione{#differenziabilita titolo="Differentiable function"}
Let $(x_0, y_0)$ be a point interior to the domain of $f$ at which the partial derivatives $f_x(x_0, y_0)$ and $f_y(x_0, y_0)$ exist. The function $f$ is **differentiable** at $(x_0, y_0)$ if
$$
f(x_0 + h, y_0 + k) = f(x_0, y_0) + f_x(x_0, y_0)\,h + f_y(x_0, y_0)\,k + R(h, k),
$$
with a remainder $R(h, k)$ that satisfies $\displaystyle\lim_{(h, k) \to (0, 0)} \frac{R(h, k)}{\sqrt{h^2 + k^2}} = 0$. In other words, for small displacements the change in $f$ is approximated by an expression linear in $h$ and $k$, with an error negligible compared with the distance $\sqrt{h^2 + k^2}$ traveled. A function differentiable at a point is continuous at that point, because the right-hand side tends to $f(x_0, y_0)$ as $(h, k) \to (0, 0)$. In practice one uses the **total differential theorem**, according to which, if $f_x$ and $f_y$ exist and are continuous on an open set, then $f$ is differentiable at every point of that set (for the proof, see Mathematical Analysis 2). Therefore functions built from polynomials, exponentials and logarithms are differentiable at the interior points of their domain.
:::

:::definizione{#piano-tangente titolo="Tangent plane"}
Let $f$ be differentiable at $(x_0, y_0)$. The **tangent plane** to the graph of $f$ at the point $(x_0, y_0, f(x_0, y_0))$ is the plane
$$
z = f(x_0, y_0) + f_x(x_0, y_0)\,(x - x_0) + f_y(x_0, y_0)\,(y - y_0) .
$$
It passes through the point of the graph and has, in the directions of the axes, the same slopes as the surface, $f_x$ and $f_y$; it is the analogue of the tangent line $y = f(x_0) + f'(x_0)\,(x - x_0)$ of the topic on derivatives, marginal functions and elasticity. For $f(x, y) = x^2 + y^2$ at $(1, 2)$ we have $f(1, 2) = 5$, $f_x = 2x = 2$ and $f_y = 2y = 4$, so the tangent plane is
$$
z = 5 + 2\,(x - 1) + 4\,(y - 2) = 2x + 4y - 5 .
$$
:::

:::teorema{#differenziale titolo="Differential and linear approximation"}
Let $f$ be differentiable at $(x_0, y_0)$. The **differential** of $f$ at $(x_0, y_0)$ is
$$
df = f_x(x_0, y_0)\,dx + f_y(x_0, y_0)\,dy ,
$$
where $dx$ and $dy$ are the increments of the variables. For small increments the **linear approximation**
$$
f(x_0 + dx, y_0 + dy) \approx f(x_0, y_0) + f_x(x_0, y_0)\,dx + f_y(x_0, y_0)\,dy
$$
holds, which follows from the definition of differentiability by neglecting the remainder; the right-hand side is the height of the tangent plane. For $f(x, y) = x^2 + y^2$ with $(x_0, y_0) = (1, 2)$, $dx = 0.1$ and $dy = -0.1$ we have $df = 2 \cdot 0.1 + 4 \cdot (-0.1) = -0.2$, so $f(1.1;\ 1.9) \approx 5 - 0.2 = 4.8$, against the exact value $1.21 + 3.61 = 4.82$.
:::

## Derivative along a curve

::::teorema{#derivata-lungo-curva titolo="Derivative along a curve"}
Let $f$ be differentiable at every point of an open set $A$, and let $x(t)$, $y(t)$ be two functions that have a derivative on an interval $I$, with $(x(t), y(t)) \in A$ for every $t \in I$. Then the function of one variable $g(t) = f(x(t), y(t))$ has a derivative on $I$ and
$$
g'(t) = f_x(x(t), y(t))\,x'(t) + f_y(x(t), y(t))\,y'(t) .
$$
As $t$ varies, the point $(x(t), y(t))$ traces a curve in the plane, and $g(t)$ is the value of $f$ along the curve. The right-hand side is the **dot product** of the gradient $\nabla f$ and the velocity vector $(x'(t), y'(t))$, that is, the sum of the products of corresponding components. For $f(x, y) = x^2 y$ along $x(t) = t$, $y(t) = t^2$ we get $g'(t) = 2xy \cdot 1 + x^2 \cdot 2t = 2t^3 + 2t^3 = 4t^3$, the same result obtained by differentiating $g(t) = t^4$ directly.

:::dimostrazione
The idea is to apply the definition of differentiability with the increments of the two variables produced by an increment $s$ of $t$. Fix $t \in I$ and $s \neq 0$, and set $h = x(t + s) - x(t)$ and $k = y(t + s) - y(t)$. By the differentiability of $f$ at $(x(t), y(t))$
$$
\frac{g(t + s) - g(t)}{s} = f_x\,\frac{h}{s} + f_y\,\frac{k}{s} + \frac{R(h, k)}{s} ,
$$
with the partial derivatives evaluated at $(x(t), y(t))$. As $s \to 0$ the ratios $\dfrac{h}{s}$ and $\dfrac{k}{s}$ tend to $x'(t)$ and $y'(t)$, by the definition of derivative. It remains to show that the last term tends to $0$. When $(h, k) \neq (0, 0)$ we write it as
$$
\frac{R(h, k)}{s} = \frac{R(h, k)}{\sqrt{h^2 + k^2}} \cdot \frac{\sqrt{h^2 + k^2}}{s} .
$$
The functions $x$ and $y$ have a derivative, hence they are continuous, therefore $(h, k) \to (0, 0)$ and the first factor tends to $0$. The second factor has absolute value $\sqrt{\left( \dfrac{h}{s} \right)^2 + \left( \dfrac{k}{s} \right)^2}$, which tends to the finite number $\sqrt{x'(t)^2 + y'(t)^2}$. The product therefore tends to $0$; when $(h, k) = (0, 0)$ the remainder is zero, because $g(t + s) = g(t)$. It follows that the difference quotient of $g$ tends to $f_x\,x'(t) + f_y\,y'(t)$.
:::
::::

:::teorema{#gradiente-curve-di-livello titolo="Gradient and level curves"}
Let $f$ be differentiable on an open set, and let $(x(t), y(t))$ be a curve with a derivative, contained in the level curve $f(x, y) = k$. Then at every point of the curve
$$
f_x\,x'(t) + f_y\,y'(t) = 0 ,
$$
that is, the gradient is perpendicular to the velocity vector, which is tangent to the level curve. Indeed, along the curve $g(t) = f(x(t), y(t)) = k$ for every $t$, so $g'(t) = 0$, and the derivative along a curve gives the equality. For $f(x, y) = x^2 + y^2$ at the point $(1, 1)$ of the circle $x^2 + y^2 = 2$ the gradient is $(2, 2)$, directed along the radius and perpendicular to the tangent line $x + y = 2$. The same equality gives the slope of the level curves, and it is the starting point for the marginal rate of substitution and for the method of Lagrange multipliers in the topic on unconstrained and constrained extrema.

::grafico{curve="1.4142*cos(t),1.4142*sin(t),0,6.29" vettori="1,1,3,3,∇f" segmenti="-0.5,2.5,2.5,-0.5" punti="1,1,pieno" xmin=-2 xmax=4 ymin=-2 ymax=4 uguale=1 legenda="x^2 + y^2 = 2" titolo="The gradient of $f(x, y) = x^2 + y^2$ at $(1, 1)$ is $(2, 2)$ and is perpendicular to the tangent $x + y = 2$ (dashed) to the level curve $x^2 + y^2 = 2$"}

:::

## Production and utility functions

:::definizione{#cobb-douglas titolo="Cobb-Douglas function"}
A **production function** $Q(K, L)$ gives the quantity produced by a firm that employs the quantity $K$ of capital and the quantity $L$ of labor, with $K > 0$ and $L > 0$. The **Cobb-Douglas function** is
$$
Q(K, L) = A\,K^{a} L^{b},
\qquad
A > 0, \quad a > 0, \quad b > 0 .
$$
Production is positive and increases if either of the two factors increases, because powers with a positive exponent are increasing. With $Q(K, L) = 2\,K^{\frac{1}{2}} L^{\frac{1}{2}}$, for example, $9$ units of capital and $4$ of labor produce $Q(9, 4) = 2 \cdot 3 \cdot 2 = 12$ units. The same form $U(x, y) = x^{a} y^{b}$ is used as the **utility function** of a consumer who purchases the quantities $x$ and $y$ of two goods.
:::

:::definizione{#produttivita-marginali titolo="Marginal productivities"}
The partial derivatives $Q_K$ and $Q_L$ are called the **marginal productivities** of capital and labor. By the linear approximation, $Q_L$ is approximately the increase in production due to one more unit of labor, with capital unchanged. For the Cobb-Douglas
$$
Q_K = a\,A\,K^{a - 1} L^{b} = \frac{a\,Q}{K},
\qquad
Q_L = b\,A\,K^{a} L^{b - 1} = \frac{b\,Q}{L} .
$$
With $Q(K, L) = 2\,K^{\frac{1}{2}} L^{\frac{1}{2}}$ at $(9, 4)$ we have $Q_K = \dfrac{1}{2} \cdot \dfrac{12}{9} = \dfrac{2}{3}$ and $Q_L = \dfrac{1}{2} \cdot \dfrac{12}{4} = \dfrac{3}{2}$. If $a < 1$, the marginal productivity of capital decreases as $K$ increases, because $Q_{KK} = a(a - 1)\,A\,K^{a - 2} L^{b} < 0$, and one speaks of decreasing marginal productivity. In the same way, for utility functions, the derivatives $U_x$ and $U_y$ are the **marginal utilities** of the two goods.
:::

:::definizione{#isoquanti-indifferenza titolo="Isoquants and indifference curves"}
The level curves of a production function are called **isoquants**, and the isoquant $Q(K, L) = Q_0$ consists of the combinations of capital and labor that produce the same quantity $Q_0$. The level curves of a utility function are called **indifference curves**, because the consumer is indifferent among the bundles that give the same utility. For $Q(K, L) = 2\,K^{\frac{1}{2}} L^{\frac{1}{2}}$ the isoquant $Q = 12$ is given by $\sqrt{KL} = 6$, that is, $K = \dfrac{36}{L}$, a decreasing branch of a hyperbola.

::grafico{f="36/x+0*sqrt(x);18-2.25*x" punti="4,9,pieno" xmin=-2 xmax=18 ymin=-2 ymax=18 nomi="L,K" legenda="K = \dfrac{36}{L};K = 18 - \dfrac{9}{4}\,L" titolo="The isoquant $Q = 12$ of $Q(K, L) = 2\,K^{\frac{1}{2}} L^{\frac{1}{2}}$ and its tangent at the point $(L, K) = (4, 9)$, with slope $-\dfrac{9}{4}$"}

:::

:::teorema{#saggio-marginale-sostituzione titolo="Marginal rate of substitution"}
Let $Q(K, L)$ be differentiable with $Q_K \neq 0$, and let the isoquant through the point $(K, L)$ be the graph of a function $K(L)$ that has a derivative. Then the slope of the isoquant is
$$
K'(L) = -\frac{Q_L}{Q_K} .
$$
The number $\mathrm{MRS} = \dfrac{Q_L}{Q_K}$ is called the technical **marginal rate of substitution**, and it is approximately the quantity of capital that can be removed when one unit of labor is added, keeping production constant. The formula follows from the derivative along a curve applied to the curve $L \mapsto (K(L), L)$. Along the isoquant $Q(K(L), L) = Q_0$, so differentiating with respect to $L$ gives $Q_K\,K'(L) + Q_L = 0$. For the Cobb-Douglas $\mathrm{MRS} = \dfrac{b\,Q / L}{a\,Q / K} = \dfrac{b}{a} \cdot \dfrac{K}{L}$; with $Q(K, L) = 2\,K^{\frac{1}{2}} L^{\frac{1}{2}}$ at $(9, 4)$ we get $\mathrm{MRS} = \dfrac{9}{4}$, the slope, with its sign changed, of the tangent in the figure. For a utility function $U(x, y)$ the marginal rate of substitution between the two goods is, in the same way, $\dfrac{U_x}{U_y}$.
:::

## Homogeneous functions and returns to scale

:::definizione{#funzioni-omogenee titolo="Homogeneous functions"}
Let $D$ be a set of the plane such that, if $(x, y) \in D$ and $t > 0$, also $(tx, ty) \in D$; for example the quadrant $x > 0$, $y > 0$. The function $f : D \to \mathbb{R}$ is **homogeneous of degree** $r$ if
$$
f(tx, ty) = t^{r} f(x, y) \qquad \text{for every } (x, y) \in D \text{ and every } t > 0 .
$$
Multiplying both variables by $t$, the value of the function is multiplied by $t^{r}$. The polynomial $x^2 + 3xy$ is homogeneous of degree $2$, because $(tx)^2 + 3\,(tx)(ty) = t^2 (x^2 + 3xy)$; the polynomial $x^2 + y$ is not homogeneous, because its terms have different degrees, and indeed $f(t, t) = t^2 + t$ is not of the form $t^{r} f(1, 1) = 2\,t^{r}$. The Cobb-Douglas is homogeneous of degree $a + b$, because
$$
A\,(tK)^{a} (tL)^{b} = t^{a + b} A\,K^{a} L^{b} .
$$

::grafico{f="36/x+0*sqrt(x);144/x+0*sqrt(x)" segmenti="0,0,8,18" punti="4,9,pieno;8,18,pieno" xmin=-2 xmax=18 ymin=-3 ymax=24 nomi="L,K" legenda="Q = 12;Q = 24" titolo="For $Q(K, L) = 2\,K^{\frac{1}{2}} L^{\frac{1}{2}}$, homogeneous of degree $1$, doubling the factors from $(L, K) = (4, 9)$ to $(8, 18)$ moves from the isoquant $Q = 12$ to the isoquant $Q = 24$"}

:::

:::definizione{#rendimenti-di-scala titolo="Returns to scale"}
Let the production function $Q(K, L)$ be homogeneous of degree $r > 0$. Multiplying both factors by $t > 1$, production is multiplied by $t^{r}$, and the **returns to scale** are:

- **increasing** if $r > 1$, because then $t^{r} > t$ and production grows more than the factors;
- **constant** if $r = 1$, because production grows in the same proportion as the factors;
- **decreasing** if $r < 1$, because $t^{r} < t$.

For the Cobb-Douglas the returns depend on the sum of the exponents $a + b$. The function $Q(K, L) = 5\,K^{\frac{1}{3}} L^{\frac{1}{2}}$ has degree $\dfrac{1}{3} + \dfrac{1}{2} = \dfrac{5}{6} < 1$, so it has decreasing returns; doubling capital and labor multiplies production by $2^{\frac{5}{6}} \approx 1.78$.
:::

::::teorema{#teorema-di-eulero titolo="Euler's theorem"}
Let $f$ be differentiable and homogeneous of degree $r$ on an open set $D$ as in the definition of homogeneous function. Then for every $(x, y) \in D$
$$
x\,f_x(x, y) + y\,f_y(x, y) = r\,f(x, y) .
$$
For $f(x, y) = x^2 + 3xy$, of degree $2$, we have $x\,(2x + 3y) + y \cdot 3x = 2x^2 + 6xy = 2\,f(x, y)$. In economics, for a production function with constant returns $r = 1$ and $K\,Q_K + L\,Q_L = Q$. Hence, if each factor is paid its marginal productivity, the payments to the two factors exactly exhaust the product. With $Q(K, L) = 2\,K^{\frac{1}{2}} L^{\frac{1}{2}}$ at $(9, 4)$ we get $9 \cdot \dfrac{2}{3} + 4 \cdot \dfrac{3}{2} = 6 + 6 = 12 = Q(9, 4)$.

:::dimostrazione
The idea is to differentiate with respect to $t$ both sides of the equality that defines homogeneity. Fix $(x, y) \in D$ and set $g(t) = f(tx, ty)$ for $t > 0$. By homogeneity $g(t) = t^{r} f(x, y)$, so $g'(t) = r\,t^{r - 1} f(x, y)$. On the other hand, $g$ is the value of $f$ along the curve $(tx, ty)$, which has velocity $(x, y)$, and by the derivative along a curve
$$
g'(t) = f_x(tx, ty)\,x + f_y(tx, ty)\,y .
$$
The two expressions of $g'(t)$ are equal for every $t > 0$; for $t = 1$ we get $x\,f_x(x, y) + y\,f_y(x, y) = r\,f(x, y)$.
:::
::::
