---
titolo: Unconstrained and constrained maxima and minima
sommario: Where to look for the extrema of a function of several variables, how to classify them with the Hessian matrix, how to handle compact sets and constraints with Lagrange multipliers.
---

## Unconstrained maxima and minima

:::definizione{#massimo-e-minimo titolo="Maximum and minimum, local and absolute"}
Let $f : A \to \mathbb{R}$ with $A \subseteq \mathbb{R}^2$ and let $(x_0, y_0) \in A$.

- $(x_0, y_0)$ is an **absolute maximum point** if $f(x, y) \leq f(x_0, y_0)$ for *every* $(x, y) \in A$.
- $(x_0, y_0)$ is a **local maximum point** if there exists $r > 0$ such that $f(x, y) \leq f(x_0, y_0)$ for every $(x, y) \in A$ with $\sqrt{(x - x_0)^2 + (y - y_0)^2} < r$.

With the opposite inequalities one defines the absolute minimum and the local minimum; maxima and minima are called **extrema**. The definitions are the same as in the one-variable case, with the circular neighborhood in place of the interval, and they extend without changes to $\mathbb{R}^n$. An absolute extremum is also local; the converse is *not* true, therefore the two notions require different tools: differential calculus for local extrema, and a comparison of the values at the candidates for absolute ones.
:::

:::esempio
$f(x, y) = x^2 + y^2$ has an **absolute minimum point** at $(0, 0)$, since $f(x, y) \geq 0 = f(0, 0)$ for every $(x, y) \in \mathbb{R}^2$. The same function **has no maximum**, because along the $x$-axis we have $f(x, 0) = x^2 \to +\infty$.
:::

## Critical points and Fermat's theorem

:::definizione{#punto-critico titolo="Critical point"}
Let $f$ have partial derivatives at $(x_0, y_0)$, an interior point of the domain. The point $(x_0, y_0)$ is **critical** (or **stationary**) for $f$ if the gradient vanishes, that is, if the two conditions are satisfied *simultaneously*:
$$
\begin{cases}
f_x(x_0, y_0) = 0 \\[4pt]
f_y(x_0, y_0) = 0
\end{cases}
$$
Finding the critical points amounts to solving this system of two equations in two unknowns. At critical points the tangent plane to the graph is **horizontal**.
:::

::::teorema{#teorema-di-fermat titolo="Fermat's theorem in several variables"}
Let $(x_0, y_0)$ be a local extremum point for $f$, interior to the domain, and suppose that $f$ has partial derivatives at $(x_0, y_0)$. Then $(x_0, y_0)$ is a **critical point**:
$$
\nabla f(x_0, y_0) = (0, 0) .
$$
The theorem says where to look for unconstrained extrema: among the **critical points**, in addition to any interior points where $f$ is not differentiable and to the points of the boundary of the domain. For $f(x, y) = x^2 + y^2 - 4x$ the system $f_x = 2x - 4 = 0$, $f_y = 2y = 0$ has the *unique* solution $(2, 0)$, hence any unconstrained extremum is at $(2, 0)$.

:::dimostrazione
Let $(x_0, y_0)$ be a local maximum point (for the minimum the argument is the same). The one-variable function $g(t) = f(t, y_0)$ is defined in a neighborhood of $t = x_0$, because the point is interior to the domain, and it is differentiable at $x_0$ with $g'(x_0) = f_x(x_0, y_0)$. Since $f$ has a local maximum at $(x_0, y_0)$, the restriction $g$ has a local maximum at the interior point $x_0$, hence by **Fermat's theorem in one variable** $g'(x_0) = 0$, that is $f_x(x_0, y_0) = 0$. Applying the same argument to $h(t) = f(x_0, t)$ we obtain $f_y(x_0, y_0) = 0$.
:::
::::

:::richiamo{titolo="Fermat's theorem in one variable"}
If $x_0$ is a local extremum point for $g$, interior to the domain, and $g$ is differentiable at $x_0$, then $g'(x_0) = 0$.
:::

:::definizione{#punto-di-sella titolo="Saddle point"}
A critical point that is not a local extremum point is called a **saddle point**. The name comes from the graph of $f(x, y) = x^2 - y^2$: the origin is critical, but $f(x, 0) = x^2 > 0$ and $f(0, y) = -y^2 < 0$ for $x, y \neq 0$, hence in every neighborhood of the origin the function takes values both greater and smaller than $f(0, 0) = 0$ and the origin **is not an extremum**. Fermat's theorem provides a *necessary* condition, not a *sufficient* one, therefore after finding the critical points a tool is needed to classify them.

::grafico{area="abs(x);-abs(x);-2.5;2.5" segmenti="-2.3,-2.3,2.3,2.3;-2.3,2.3,2.3,-2.3" punti="0,0,pieno" etichette="1.3,0.3,f > 0;-2.1,0.3,f > 0;0.15,1.6,f < 0;0.15,-1.9,f < 0" xmin=-2.5 xmax=2.5 ymin=-2.3 ymax=2.3 uguale=1 titolo="$f(x, y) = x^2 - y^2$ is positive in the shaded region and negative elsewhere: in every neighborhood of the origin it takes both signs"}

:::

## The Hessian matrix and the classification of critical points

:::definizione{#matrice-hessiana titolo="Hessian matrix"}
Let $f$ be of class $C^2$ on an open set. The **Hessian matrix** of $f$ at $(x_0, y_0)$ is the matrix of second derivatives
$$
H_f(x_0, y_0) =
\begin{pmatrix}
f_{xx}(x_0, y_0) & f_{xy}(x_0, y_0) \\[4pt]
f_{yx}(x_0, y_0) & f_{yy}(x_0, y_0)
\end{pmatrix} .
$$
Since $f$ is of class $C^2$, by **Schwarz's theorem** the mixed derivatives coincide, hence the matrix is **symmetric**. In two variables the Hessian plays the role of the second derivative in one variable: its sign, in the sense defined below, classifies the critical points.
:::

:::definizione{#segno-matrice-simmetrica titolo="Sign of a symmetric matrix"}
A symmetric matrix $H$ of order $2$ is called

- **positive definite** if its eigenvalues are both positive;
- **negative definite** if its eigenvalues are both negative;
- **indefinite** if it has one positive and one negative eigenvalue;
- semidefinite (degenerate case) if *at least one* eigenvalue is zero, that is, if $\det H = 0$.

For a matrix of order $2$ the sign can be read from the determinant and the first entry, *without* computing the eigenvalues: since $\det H$ is the product of the eigenvalues, $\det H > 0$ means eigenvalues of the same sign, with the common sign given by the sign of $f_{xx}$, while $\det H < 0$ means eigenvalues of opposite signs. In $n$ variables the same criterion uses the leading principal minors (Sylvester's criterion), for which we refer to the linear algebra course.
:::

:::teorema{#criterio-della-hessiana titolo="Classification with the Hessian matrix"}
Let $f$ be of class $C^2$ and let $(x_0, y_0)$ be a critical point with Hessian $H = H_f(x_0, y_0)$.

- If $\det H > 0$ and $f_{xx}(x_0, y_0) > 0$, then $(x_0, y_0)$ is a **local minimum point**.
- If $\det H > 0$ and $f_{xx}(x_0, y_0) < 0$, then $(x_0, y_0)$ is a **local maximum point**.
- If $\det H < 0$, then $(x_0, y_0)$ is a **saddle point**.
- If $\det H = 0$, the criterion does *not* decide and the point must be studied directly.

The proof uses Taylor's formula to second order: near the critical point the difference $f(x, y) - f(x_0, y_0)$ has the sign of the quadratic form associated with the Hessian; we refer to the chapter on differential calculus in several variables. In computations the criterion is applied as follows: each critical point is found by solving the system $\nabla f = (0, 0)$, the three second derivatives are computed at the point, and one looks at $\det H$ and $f_{xx}$.
:::

:::esempio{titolo="Applying the criterion"}
$f(x, y) = x^2 + 3y^2 - 6y$. The system $f_x = 2x = 0$, $f_y = 6y - 6 = 0$ has the unique solution $(0, 1)$. The second derivatives are $f_{xx} = 2$, $f_{yy} = 6$, $f_{xy} = 0$, hence $\det H = 12 > 0$ and $f_{xx} = 2 > 0$: the point $(0, 1)$ is a **local minimum point**, with $f(0, 1) = -3$.
:::

## The degenerate case: direct study of the sign

:::osservazione{#caso-degenere titolo="Direct study of the sign"}
When $\det H = 0$ at the critical point, the classification is obtained by studying the sign of the difference
$$
f(x, y) - f(x_0, y_0)
$$
near the point. If the difference is $\geq 0$ in a neighborhood, the point is a **local minimum point**; if it is $\leq 0$, a **local maximum point**; if in *every* neighborhood it takes both signs, the point is a **saddle point**. Two techniques are used to determine the sign, often together: recognizing a sum of nonnegative quantities (squares, even powers), or computing the difference along curves passing through the point (lines, parabolas) in search of different signs. For $f(x, y) = x^2 + y^4$ the origin is critical with a degenerate Hessian, and since $f(x, y) \geq 0 = f(0, 0)$ everywhere, the origin is an absolute minimum point.
:::

:::attenzione
Along lines the sign can be constant *even* at a saddle point. For $f(x, y) = (y - x^2)(y - 4x^2)$ the origin is critical with a degenerate Hessian and the restriction to every line through the origin has a minimum at $0$; on the parabola $y = 2x^2$, instead, we have $f = -2x^4 < 0$, while on the $y$-axis we have $f = y^2 > 0$, hence the origin is a **saddle point**. A finite number of restrictions can rule out an extremum, but it is *never* enough to prove one; an extremum is proved with an estimate valid in a whole neighborhood.

::grafico{f="2*x^2" area="4*x^2;x^2;-1.2;1.2" segmenti="-0.6,-0.6,1.2,1.2" punti="0,0,pieno" xmin=-1.2 xmax=1.2 ymin=-0.6 ymax=3 titolo="$f(x, y) = (y - x^2)(y - 4x^2)$ is negative between the parabolas $y = x^2$ and $y = 4x^2$ (shaded region): near the origin every line, such as $y = x$ (dashed), stays outside the region, while the parabola $y = 2x^2$ stays inside it"}

:::

## Absolute extrema on compact sets

:::teorema{#weierstrass-in-piu-variabili titolo="Weierstrass's theorem"}
Let $K \subset \mathbb{R}^2$ be a compact set, that is, closed and bounded, and let $f$ be continuous on $K$. Then $f$ attains an **absolute maximum and minimum** on $K$. The theorem guarantees that the problem has a solution *before* the computations even begin: on a rectangle, a disk or a triangle (boundary included) the absolute extrema of a continuous function always exist. The proof is analogous to the one in one variable; we refer to the chapter on functions of several variables.
:::

:::osservazione{#metodo-del-compatto titolo="The method for absolute extrema on a compact set"}
The absolute extrema on $K$ are attained at **interior points** or on the **boundary**. At interior extremum points **Fermat's theorem** applies, hence the candidates are of three types:

- the critical points interior to $K$;
- any interior points where $f$ is not differentiable;
- the extremum points of the restriction of $f$ to the boundary of $K$.

The values of $f$ at *all* the candidates are computed and compared: the largest value is the absolute maximum, the smallest is the absolute minimum. Classification with the Hessian is not needed in this method, since the final comparison of the values decides everything; even an interior saddle point can remain among the candidates without causing errors.
:::

:::osservazione{#studio-della-frontiera titolo="Study of the boundary"}
The restriction of $f$ to the boundary is a function of one variable, to be studied with the methods of Calculus 1. The two techniques are substitution and parametrization.

- **Substitution**: on the pieces where the boundary is a graph, one variable is obtained from the equation of the boundary and substituted. On the segment $y = 2$, $x \in [0, 3]$ one studies $g(x) = f(x, 2)$ on $[0, 3]$; on the circle $x^2 + y^2 = 1$ one can substitute $y^2 = 1 - x^2$ with $x \in [-1, 1]$, when $f$ depends on $y$ only through $y^2$.
- **Parametrization**: the boundary is described by a parameter and the composite function is studied. For the circle $x^2 + y^2 = r^2$ one sets $x = r\cos t$, $y = r\sin t$ with $t \in [0, 2\pi]$ and studies $g(t) = f(r\cos t, r\sin t)$.

If the boundary consists of several pieces, such as the sides of a rectangle or a triangle, each piece is studied separately and the **junction points** (the vertices) must be included among the candidates, because they are the endpoints of the intervals of the restrictions.
:::

:::esempio{titolo="Absolute extrema on a square"}
$f(x, y) = xy$ on the square $K = [0, 1] \times [0, 1]$. The function is continuous and $K$ is compact, therefore by **Weierstrass's theorem** the maximum and minimum exist. The only critical point is the origin, which is *not* interior to $K$, therefore the extrema are on the boundary. On the sides $x = 0$ and $y = 0$ we have $f = 0$; on the side $x = 1$ the restriction is $g(y) = y$, increasing on $[0, 1]$, with values from $0$ to $1$; on the side $y = 1$ the restriction is $g(x) = x$, with the same values. The comparison gives the **absolute maximum** $1$ at $(1, 1)$ and the **absolute minimum** $0$, attained at all points of the two sides on the axes.

::grafico{curve="(t+abs(t))/2,(abs(t)-t)/2,-1,1" area="1;0;0;1" punti="1,1,pieno,massimo 1" etichette="0.3,-0.27,minimum 0" xmin=-0.4 xmax=1.6 ymin=-0.4 ymax=1.5 uguale=1 titolo="The square $K = [0, 1] \times [0, 1]$: $f(x, y) = xy$ has maximum $1$ at the vertex $(1, 1)$ and minimum $0$ on the two sides lying on the axes (in color)"}

:::

## Constrained extrema: Lagrange multipliers

:::definizione{#estremo-vincolato titolo="Constrained extremum"}
Let $f$ and $g$ be functions of class $C^1$ and let $Z = \{ (x, y) : g(x, y) = 0 \}$ be the zero set of the constraint. A point $(x_0, y_0) \in Z$ is a **constrained maximum point** if $f(x_0, y_0) \geq f(x, y)$ for every $(x, y) \in Z$ near $(x_0, y_0)$; similarly for the minimum. That is, one looks for the extrema of $f$ restricted to the curve with equation $g(x, y) = 0$. Fermat's theorem **does not apply**, because the points of $Z$ are not interior to $Z$: a suitable *necessary* condition is needed, and it is the **Lagrange multiplier theorem**.
:::

::::teorema{#moltiplicatori-di-lagrange titolo="Lagrange multiplier theorem"}
Let $f, g$ be of class $C^1$ and let $(x_0, y_0)$ be a constrained extremum point for $f$ with constraint $g(x, y) = 0$. If $\nabla g(x_0, y_0) \neq (0, 0)$, then there exists $\lambda \in \mathbb{R}$, called a **Lagrange multiplier**, such that
$$
\nabla f(x_0, y_0) = \lambda\, \nabla g(x_0, y_0) .
$$
At constrained extremum points the two gradients are **parallel**: the level curves of $f$ are **tangent** to the constraint curve, since if they crossed it the value of $f$ along the constraint would still be increasing.

:::dimostrazione
Since $\nabla g(x_0, y_0) \neq (0, 0)$, one of the two partial derivatives of $g$ is nonzero; let $g_y(x_0, y_0) \neq 0$ (in the case $g_x \neq 0$ the roles of the variables are exchanged). By **Dini's theorem**, near $(x_0, y_0)$ the set $Z$ is the graph of a function $y = \varphi(x)$ of class $C^1$ with $\varphi(x_0) = y_0$ and
$$
\varphi'(x_0) = -\frac{g_x(x_0, y_0)}{g_y(x_0, y_0)} .
$$
The one-variable function $h(x) = f(x, \varphi(x))$ has a local extremum at the interior point $x_0$, hence by **Fermat's theorem** and by the **chain rule**
$$
0 = h'(x_0) = f_x(x_0, y_0) + f_y(x_0, y_0)\, \varphi'(x_0)
= f_x(x_0, y_0) - f_y(x_0, y_0)\, \frac{g_x(x_0, y_0)}{g_y(x_0, y_0)} .
$$
Setting $\lambda = \dfrac{f_y(x_0, y_0)}{g_y(x_0, y_0)}$, from the equality it follows that $f_x(x_0, y_0) = \lambda\, g_x(x_0, y_0)$, and from the definition of $\lambda$ it follows that $f_y(x_0, y_0) = \lambda\, g_y(x_0, y_0)$, which is the claim.
:::
::::

:::richiamo{titolo="Dini's theorem"}
If $g$ is of class $C^1$, $g(x_0, y_0) = 0$ and $g_y(x_0, y_0) \neq 0$, then near $(x_0, y_0)$ the zero set of $g$ is the graph of a function $y = \varphi(x)$ of class $C^1$, with $\varphi'(x) = -\dfrac{g_x(x, \varphi(x))}{g_y(x, \varphi(x))}$.
:::

:::osservazione{#sistema-di-lagrange titolo="The Lagrange system"}
The theorem turns the search for constrained extrema into solving the **system of three equations** in the three unknowns $x$, $y$, $\lambda$:
$$
\begin{cases}
f_x(x, y) = \lambda\, g_x(x, y) \\[4pt]
f_y(x, y) = \lambda\, g_y(x, y) \\[4pt]
g(x, y) = 0
\end{cases}
$$
The solutions of the system, together with any points of the constraint with $\nabla g = (0, 0)$, are the candidates. When the constraint is a compact set, by **Weierstrass's theorem** the maximum and the minimum exist and are found by comparing the values of $f$ at the candidates. When the constraint is *not* compact, existence must be **justified separately**, for example by studying the behavior of $f$ along the constraint at infinity. The value of $\lambda$ serves only to solve the system and as a rule does not appear in the answer.
:::

:::esempio{titolo="Maximum and minimum on a circle"}
Extrema of $f(x, y) = x + y$ with constraint $g(x, y) = x^2 + y^2 - 2 = 0$. The gradient $\nabla g = (2x, 2y)$ vanishes *only* at the origin, which does not belong to the constraint, hence all candidates solve the system
$$
\begin{cases}
1 = 2\lambda x \\[4pt]
1 = 2\lambda y \\[4pt]
x^2 + y^2 = 2
\end{cases}
$$
From the first two equations $\lambda \neq 0$ and $x = y = \dfrac{1}{2\lambda}$; substituting into the third we obtain $2x^2 = 2$, hence $x = \pm 1$. The candidates are $(1, 1)$ with $f = 2$ and $(-1, -1)$ with $f = -2$; since the circle is compact, the **constrained maximum** is $2$ and the **constrained minimum** is $-2$.

::grafico{curve="sqrt(2)*cos(t),sqrt(2)*sin(t),0,6.29" segmenti="-0.4,2.4,2.4,-0.4;-2.2,2.2,2.2,-2.2;-2.4,0.4,0.4,-2.4" vettori="1,1,1.6,1.6,∇f" punti="1,1,pieno;-1,-1,pieno" etichette="1.65,0.55,x + y = 2;-2.45,-0.9,x + y = −2" xmin=-2.6 xmax=2.6 ymin=-2.5 ymax=2.5 uguale=1 titolo="The constraint $x^2 + y^2 = 2$ and the level lines $x + y = k$ for $k = -2, 0, 2$ (dashed): at the maximum $(1, 1)$ and at the minimum $(-1, -1)$ the level line is tangent to the circle and $\nabla f$ is orthogonal to both"}

:::

:::attenzione
The hypothesis $\nabla g \neq (0, 0)$ can*not* be omitted. On the curve $g(x, y) = y^3 - x^2 = 0$ the function $f(x, y) = y$ has a **constrained minimum** at the origin, because on the constraint $y = x^{2/3} \geq 0$; the Lagrange system requires $(0, 1) = \lambda\,(-2x, 3y^2)$, which at the origin becomes $(0, 1) = (0, 0)$ and has no solution. The point escapes the system because $\nabla g(0, 0) = (0, 0)$: the points of the constraint where the gradient of $g$ vanishes must be **added by hand** to the candidates.

::grafico{f="cbrt(x*x)" punti="0,0,pieno" xmin=-2 xmax=2 ymin=-0.6 ymax=2 titolo="The constraint $y^3 - x^2 = 0$, that is $y = \sqrt[3]{x^2}$: the function $f(x, y) = y$ has a constrained minimum at the origin, where $\nabla g = (0, 0)$ and the curve has a cusp"}

:::

## Two constraints in three variables

:::teorema{#due-vincoli titolo="Multipliers with two constraints"}
Let $f, g, h$ be of class $C^1$ on $\mathbb{R}^3$ and let $(x_0, y_0, z_0)$ be an extremum point for $f$ on the set defined by the two simultaneous conditions
$$
\begin{cases}
g(x, y, z) = 0 \\[4pt]
h(x, y, z) = 0
\end{cases}
$$
which in general is a space curve, the intersection of two surfaces. If $\nabla g$ and $\nabla h$ are **linearly independent** at the point, then there exist $\lambda, \mu \in \mathbb{R}$ such that
$$
\nabla f(x_0, y_0, z_0) = \lambda\, \nabla g(x_0, y_0, z_0) + \mu\, \nabla h(x_0, y_0, z_0) .
$$
The resulting system has **five equations** in the five unknowns $x$, $y$, $z$, $\lambda$, $\mu$. The typical case is the intersection of a sphere with a plane; when one of the constraints can be solved explicitly it is convenient to substitute it and reduce to a single constraint in two variables.
:::

## Geometric optimization problems

:::osservazione{#impostazione-problemi-geometrici titolo="Setting up a geometric problem"}
A geometric optimization problem asks for the figure that maximizes or minimizes a quantity (area, volume, distance, cost) under a given condition. The setup *always* follows the same steps.

- The variables are chosen, that is, the measurements that determine the figure, with the geometric restrictions ($x > 0$ for a length).
- The **objective function** to be optimized is written, together with the **constraint equation** linking the variables.
- The problem is solved by substitution, obtaining one variable from the constraint to reduce to a function of one variable, or with Lagrange multipliers; with two variables and a constraint that can be solved explicitly, substitution is usually faster.
- One justifies that the extremum found is really absolute: with Weierstrass's theorem if the domain is compact, otherwise by studying the objective function at the ends of the domain (for example, a volume that tends to $0$ at the boundary makes the unique interior critical point a maximum).

For distances it is convenient to optimize the **square of the distance**, which has the same extremum points as the distance and avoids the square root in the computations.
:::

:::esempio{titolo="Rectangle of maximum area"}
Among the rectangles with perimeter $20$ we look for the one with maximum area. Denoting by $x$ and $y$ the dimensions, with $x, y > 0$, the constraint is $2x + 2y = 20$, that is $y = 10 - x$ with $x \in (0, 10)$, and the objective becomes
$$
A(x) = x\,(10 - x) = 10x - x^2 .
$$
Since $A'(x) = 10 - 2x$ vanishes only at $x = 5$, with $A$ increasing before and decreasing after, the **absolute maximum** on $(0, 10)$ is $A(5) = 25$, attained by the **square** of side $5$. At the ends of the domain the area tends to $0$, in agreement with the fact that the maximum is interior.

::grafico{f="x*(10-x)" xmin=0 xmax=10 ymin=0 ymax=30 punti="5,25" titolo="A(x) = x(10 − x): the maximum is at the vertex, at x = 5"}
:::
