---
titolo: Unconstrained and constrained maxima and minima
sommario: How to find and classify the maxima and minima of a function of two variables, with stationary points and the Hessian matrix, how to look for absolute extrema on a closed and bounded set and extrema on a constraint, with substitution and with Lagrange multipliers, and how these methods solve the problems of profit, of the consumer and of minimum cost.
---

## Relative and absolute maxima and minima

:::definizione{#estremi-relativi titolo="Relative and absolute maxima and minima"}
Let $f$ be a function of two variables defined on a set $D \subseteq \mathbb{R}^2$ and let $P_0 = (x_0, y_0) \in D$. The point $P_0$ is a **relative maximum point** (or local maximum point) of $f$ if there exists a disk $B$ centered at $P_0$ such that
$$
f(x, y) \leq f(x_0, y_0) \qquad \text{for every } (x, y) \in B \cap D ,
$$
and it is a **relative minimum point** if the opposite inequality holds, $f(x, y) \geq f(x_0, y_0)$. If the inequality holds for *every* $(x, y) \in D$, the maximum or the minimum is called **absolute**. With strict inequalities for $(x, y) \neq (x_0, y_0)$ one speaks of a *strict* maximum or minimum. Maxima and minima are together called **extrema**.

In other words, $P_0$ is a relative minimum point when no nearby point gives $f$ a smaller value, and an absolute minimum point when no point of the domain does. For example $f(x, y) = x^2 + y^2$ has a strict absolute minimum at $(0, 0)$, because $f(0, 0) = 0$ and $x^2 + y^2 > 0$ for every $(x, y) \neq (0, 0)$. The notions of disk, interior point and closed and bounded set are those of the topic Functions of two variables.
:::

## Stationary points and the first-order condition

:::richiamo{titolo="Fermat's theorem"}
Let $g$ be defined on an interval $I$ and let $t_0$ be an interior point of $I$ that is a relative maximum or minimum point of $g$. If $g$ is differentiable at $t_0$, then $g'(t_0) = 0$.
:::

::::teorema{#condizione-primo-ordine titolo="Fermat's theorem in two variables"}
Let $P_0 = (x_0, y_0)$ be an interior point of the domain of $f$ that is a relative maximum or minimum point. If the partial derivatives exist at $P_0$, then
$$
\begin{cases}
f_x(x_0, y_0) = 0 \\[4pt]
f_y(x_0, y_0) = 0
\end{cases}
\qquad \text{that is} \qquad
\nabla f(x_0, y_0) = (0, 0) .
$$
The theorem reduces the search for interior extrema to solving a system of two equations in two unknowns. As in the one-variable case, the condition is *necessary* but *not sufficient*, and the points found must then be classified.

:::dimostrazione
The idea is to look at $f$ only along the horizontal line through $P_0$, where it becomes a function of one variable. Set $g(t) = f(x_0 + t, y_0)$. Since $P_0$ is interior, $g$ is defined on an interval that contains $t = 0$ in its interior. If $P_0$ is a relative maximum point of $f$, then $g(t) \leq g(0)$ for $t$ near $0$, so $t = 0$ is a relative maximum point of $g$. The derivative $g'(0)$ is the limit of the difference quotient $\dfrac{f(x_0 + t, y_0) - f(x_0, y_0)}{t}$, that is, by definition $f_x(x_0, y_0)$. **Fermat's theorem** applied to $g$ therefore gives $f_x(x_0, y_0) = 0$. With the vertical line, $h(t) = f(x_0, y_0 + t)$, one obtains in the same way $f_y(x_0, y_0) = 0$. The case of the minimum is analogous.
:::
::::

:::definizione{#punto-stazionario titolo="Stationary point"}
An interior point $P_0$ at which $\nabla f(P_0) = (0, 0)$ is called a **stationary point** (or critical point) of $f$. For a function with partial derivatives at every point of an open domain, the relative maxima and minima must be sought *only* among the stationary points. For example, for $f(x, y) = x^2 + y^2 - 2x + 4y$ we have
$$
\begin{cases}
f_x = 2x - 2 = 0 \\[4pt]
f_y = 2y + 4 = 0
\end{cases}
\iff
\begin{cases}
x = 1 \\[4pt]
y = -2
\end{cases}
$$
so the only stationary point is $(1, -2)$. Completing the squares one writes $f(x, y) = (x - 1)^2 + (y + 2)^2 - 5$. The sum of the two squares is positive at every point other than $(1, -2)$, so $(1, -2)$ is an absolute minimum with value $-5$.
:::

:::definizione{#punto-di-sella titolo="Saddle point"}
A stationary point $P_0$ is a **saddle point** if every disk centered at $P_0$ contains points where $f > f(P_0)$ and points where $f < f(P_0)$. A saddle point is therefore neither a relative maximum point nor a relative minimum point. The typical example is $f(x, y) = x^2 - y^2$ at the origin. The gradient $(2x, -2y)$ vanishes at $(0, 0)$, but along the $x$-axis the function equals $x^2$, positive for $x \neq 0$, and along the $y$-axis it equals $-y^2$, negative for $y \neq 0$. The name comes from the shape of the graph near the origin, similar to a saddle, with heights that increase when moving along the $x$-axis and decrease when moving along the $y$-axis.

::grafico{f="x^2;-x^2" punti="0,0,pieno" xmin=-3 xmax=3 ymin=-5 ymax=5 nomi="t,z" legenda="z = f(t, 0) = t^2;z = f(0, t) = -t^2" titolo="Restrictions of $f(x, y) = x^2 - y^2$ to the two axes: at $t = 0$ the first has a minimum and the second a maximum, so $(0, 0)$ is a saddle point"}

:::

## The Hessian matrix and the Hessian test

::::teorema{#test-hessiana titolo="Hessian test"}
Let $f$ have continuous second partial derivatives in a disk centered at $P_0$, and let $P_0$ be a stationary point of $f$. Denote by $H(P_0)$ the Hessian matrix of $f$ at $P_0$, which is symmetric by Schwarz's theorem, and by
$$
\det H(P_0) = f_{xx}(P_0)\,f_{yy}(P_0) - f_{xy}(P_0)^2
$$
its determinant, computed with the rule for $2 \times 2$ matrices.

- If $\det H(P_0) > 0$ and $f_{xx}(P_0) > 0$, then $P_0$ is a **relative minimum** point.
- If $\det H(P_0) > 0$ and $f_{xx}(P_0) < 0$, then $P_0$ is a **relative maximum** point.
- If $\det H(P_0) < 0$, then $P_0$ is a **saddle point**.
- If $\det H(P_0) = 0$, the test does not allow a conclusion.

The Hessian matrix and Schwarz's theorem are those of the topic Functions of two variables. The test classifies a stationary point by computing three numbers, $f_{xx}$, $f_{xy}$ and $f_{yy}$ at $P_0$, and for functions of two variables it plays the role of the second derivative test. When $\det H(P_0) > 0$, the product $f_{xx} f_{yy}$ is greater than $f_{xy}^2 \geq 0$, so $f_{xx}$ and $f_{yy}$ have the same sign and one can look at either of them. For $f(x, y) = x^2 - y^2$ at $(0, 0)$ we have $\det H = 2 \cdot (-2) - 0 = -4 < 0$, in agreement with the saddle point seen before.

:::dimostrazione
The idea is that near a stationary point the sign of $f(x_0 + h, y_0 + k) - f(x_0, y_0)$ is the sign of the quadratic form
$$
Q(h, k) = a h^2 + 2 b h k + c k^2,
\qquad
a = f_{xx}(P_0),\ \ b = f_{xy}(P_0),\ \ c = f_{yy}(P_0) .
$$
This follows from the second-order Taylor formula, for which we refer to the topic Differential calculus in several variables of Mathematical Analysis 2:
$$
f(x_0 + h, y_0 + k) = f(x_0, y_0) + f_x(P_0)\,h + f_y(P_0)\,k + \frac{1}{2}\,Q(h, k) + R(h, k),
$$
where the remainder $R$, divided by $h^2 + k^2$, tends to $0$. At a stationary point the first-order terms are zero, so the difference equals $\dfrac{1}{2}\,Q(h, k) + R(h, k)$, and for small $(h, k)$ its sign is that of $Q$ whenever $Q$ is positive or negative for all $(h, k) \neq (0, 0)$.

We then study the sign of $Q$. If $a \neq 0$, factoring out $a$ and completing the square gives
$$
Q(h, k) = a \left[ \left( h + \frac{b}{a}\,k \right)^2 + \frac{ac - b^2}{a^2}\,k^2 \right] .
$$

- If $ac - b^2 > 0$, then $a \neq 0$ and the expression in square brackets is a sum of two nonnegative terms that vanish together *only* for $h = k = 0$. Hence $Q$ has the sign of $a$, and $P_0$ is a minimum point if $a > 0$, a maximum point if $a < 0$.
- If $ac - b^2 < 0$ and $a \neq 0$, for $k = 0$ we have $Q = a h^2$, which has the sign of $a$; for $h = -\dfrac{b}{a}\,k$ with $k \neq 0$ we have $Q = \dfrac{ac - b^2}{a}\,k^2$, which has the opposite sign. If instead $a = 0$, then $b \neq 0$, and $Q(h, 1) = 2bh + c$ takes positive and negative values as $h$ varies. Along the line through $P_0$ with direction $(h, k)$, with $Q(h, k) \neq 0$, the difference $f - f(P_0)$ has the sign of $Q(h, k)$ at points sufficiently close to $P_0$, because the remainder is negligible compared with the second-order term. In both cases the function is therefore greater than $f(P_0)$ in some directions and smaller in others, hence $P_0$ is a saddle point.
:::
::::

:::esempio{titolo="A function with a minimum and a saddle"}
We find and classify the stationary points of $f(x, y) = x^3 + y^3 - 3xy$. The first-order system is
$$
\begin{cases}
f_x = 3x^2 - 3y = 0 \\[4pt]
f_y = 3y^2 - 3x = 0
\end{cases}
\iff
\begin{cases}
y = x^2 \\[4pt]
x^4 - x = 0
\end{cases}
$$
and since $x^4 - x = x\,(x^3 - 1)$, the solutions are $x = 0$ and $x = 1$, that is, the points $(0, 0)$ and $(1, 1)$. The second derivatives are $f_{xx} = 6x$, $f_{xy} = -3$, $f_{yy} = 6y$, so
$$
H(0, 0) = \begin{pmatrix} 0 & -3 \\ -3 & 0 \end{pmatrix},
\qquad
H(1, 1) = \begin{pmatrix} 6 & -3 \\ -3 & 6 \end{pmatrix} .
$$
At $(0, 0)$ we have $\det H = -9 < 0$, therefore the origin is a **saddle point**. At $(1, 1)$ we have $\det H = 36 - 9 = 27 > 0$ and $f_{xx} = 6 > 0$, therefore $(1, 1)$ is a **relative minimum**, with $f(1, 1) = -1$. The minimum is not absolute, because along the $x$-axis the function equals $x^3$, which tends to $-\infty$ as $x \to -\infty$.

::grafico{f="2*x^3-3*x^2;3*x^2" punti="0,0,pieno;1,-1,pieno" xmin=-1 xmax=2 ymin=-2 ymax=4 nomi="t,z" legenda="z = f(t, t) = 2t^3 - 3t^2;z = f(t, -t) = 3t^2" titolo="Along the line $y = x$ the function $x^3 + y^3 - 3xy$ has a maximum at $t = 0$ and a minimum at $t = 1$; along $y = -x$ it has a minimum at $t = 0$"}

:::

## Inconclusive cases

:::osservazione{#casi-indecisi titolo="The case of zero determinant"}
When $\det H(P_0) = 0$ the stationary point can be a minimum, a maximum or a saddle, and one studies directly the sign of the difference $f(x, y) - f(P_0)$ near $P_0$. For the three functions
$$
f_1(x, y) = x^4 + y^4,
\qquad
f_2(x, y) = x^4 - y^4,
\qquad
f_3(x, y) = x^2 + y^3
$$
the origin is stationary, and in all three $\det H(0, 0) = 0$, because the Hessians are the zero matrix, the zero matrix and $\begin{pmatrix} 2 & 0 \\ 0 & 0 \end{pmatrix}$.

- $f_1(x, y) > 0 = f_1(0, 0)$ for $(x, y) \neq (0, 0)$, so the origin is an absolute **minimum**.
- $f_2(x, 0) = x^4 > 0$ for $x \neq 0$ and $f_2(0, y) = -y^4 < 0$ for $y \neq 0$, so the origin is a **saddle point**.
- $f_3(0, y) = y^3$ is positive for $y > 0$ and negative for $y < 0$, so here too the origin is a **saddle point**.

To show that a point is a saddle it suffices to find two curves through $P_0$ along which the difference $f - f(P_0)$ has opposite signs; to show that it is an extremum one must instead check the sign at *all* points of a disk, often by writing $f - f(P_0)$ as a sum of squares.
:::

:::attenzione
The sign of $f_{xx}$ and of $f_{yy}$ is not enough to classify a stationary point; the determinant is also needed. The function $f(x, y) = x^2 + 4xy + y^2$ has the origin as a stationary point, with $f_{xx} = f_{yy} = 2 > 0$, but $\det H(0, 0) = 4 - 16 = -12 < 0$. Indeed along the line $y = -x$ we have $f(x, -x) = x^2 - 4x^2 + x^2 = -2x^2$, negative for $x \neq 0$, while along the $x$-axis we have $f(x, 0) = x^2$, positive for $x \neq 0$, so the origin is a **saddle point** even though along the two axes it is a minimum.
:::

## Absolute maxima and minima on closed and bounded sets

:::richiamo{titolo="Weierstrass theorem in two variables"}
Let $K \subseteq \mathbb{R}^2$ be a closed and bounded set and let $f$ be continuous on $K$. Then $f$ attains on $K$ an absolute maximum and an absolute minimum, that is, there exist $P_1, P_2 \in K$ such that $f(P_1) \leq f(x, y) \leq f(P_2)$ for every $(x, y) \in K$.
:::

:::osservazione{#metodo-insiemi-compatti titolo="The method for absolute extrema"}
Let $f$ be continuous on a closed and bounded set $K$, with partial derivatives at the interior points. An absolute maximum or minimum point is either interior to $K$ or lies on the boundary. If it is interior it is a stationary point, by Fermat's theorem in two variables. The method is therefore the following.

- Find the stationary points interior to $K$; there is no need to classify them.
- Study $f$ on the boundary. Each piece of the boundary is described with a single variable (for example $y = 0$ with $x \in [0, 4]$, or $x = 2\cos t$, $y = 2\sin t$ with $t \in [0, 2\pi]$), and one looks for the maximum and minimum of the resulting function of one variable, including the endpoints of the interval.
- Add the vertices of the boundary, where two pieces meet.
- Compute $f$ at all the points found. The largest value is the absolute maximum and the smallest is the absolute minimum.

The **Weierstrass theorem** guarantees that the maximum and minimum exist, so comparing a finite number of values identifies them. If the set is not bounded the conclusion may fail. For example $f(x, y) = x + y$ is continuous on the closed set $\{(x, y) : x \geq 0,\ y \geq 0\}$ and has no maximum, because $f(t, t) = 2t$ grows without bound.
:::

:::esempio{titolo="Absolute extrema on a triangle"}
We look for the absolute maximum and minimum of $f(x, y) = x^2 + y^2 - 2x - 4y$ on the triangle $T$ with vertices $(0, 0)$, $(4, 0)$ and $(0, 4)$, that is, the set $x \geq 0$, $y \geq 0$, $x + y \leq 4$. The triangle is closed and bounded and $f$ is continuous, so the extrema exist by the Weierstrass theorem.

The system $f_x = 2x - 2 = 0$, $f_y = 2y - 4 = 0$ gives the point $(1, 2)$, interior because $1 + 2 < 4$, with $f(1, 2) = -5$. On the three sides one obtains functions of one variable:
$$
\begin{aligned}
y = 0,\ x \in [0, 4]: &\quad f = x^2 - 2x, \ \text{ minimum at } x = 1, \\[6pt]
x = 0,\ y \in [0, 4]: &\quad f = y^2 - 4y, \ \text{ minimum at } y = 2, \\[6pt]
y = 4 - x,\ x \in [0, 4]: &\quad f = 2x^2 - 6x, \ \text{ minimum at } x = \frac{3}{2} .
\end{aligned}
$$
The candidates are therefore the points $(1, 2)$, $(1, 0)$, $(0, 2)$, $\left( \dfrac{3}{2}, \dfrac{5}{2} \right)$ and the vertices, with values
$$
-5, \quad -1, \quad -4, \quad -\frac{9}{2}, \qquad f(0, 0) = 0, \quad f(4, 0) = 8, \quad f(0, 4) = 0 .
$$
The **absolute minimum** is $-5$, at the interior point $(1, 2)$; the **absolute maximum** is $8$, at the vertex $(4, 0)$.

::grafico{poligoni="0,0 4,0 0,4" punti="1,2,pieno,minimum;4,0,pieno,maximum;1,0,vuoto;0,2,vuoto;1.5,2.5,vuoto" xmin=-1 xmax=5 ymin=-1 ymax=5 uguale=1 legenda=0 titolo="The triangle $T$ with the candidates: the interior stationary point $(1, 2)$, the minima on the sides $(1, 0)$, $(0, 2)$, $\left( \dfrac{3}{2}, \dfrac{5}{2} \right)$ and the vertex $(4, 0)$"}

:::

## Equality constraints and the substitution method

:::definizione{#estremo-vincolato titolo="Constrained extremum"}
Let $f$ and $g$ be functions of two variables. The **constraint** $g(x, y) = 0$ determines a set of points of the plane, usually a curve. A point $P_0$ of the constraint is a **constrained maximum point** of $f$ if there exists a disk $B$ centered at $P_0$ such that $f(x, y) \leq f(P_0)$ for every $(x, y) \in B$ that satisfies $g(x, y) = 0$; the constrained minimum is defined in the same way. The values of $f$ are therefore compared *only* with those taken on the constraint. For example $f(x, y) = x + y$ has no stationary points, but on the circle $x^2 + y^2 = 2$ it has maximum $2$ at $(1, 1)$, because by the inequality $(x - y)^2 \geq 0$ we have $(x + y)^2 \leq 2(x^2 + y^2) = 4$. Economic choice problems with a fixed income or cost are problems of this kind.
:::

:::osservazione{#metodo-di-sostituzione titolo="Substitution method"}
When one variable can be obtained from the constraint as a function of the other, for example $y = h(x)$ with $x$ in an interval $I$, the constrained problem becomes the study of the function of one variable
$$
\varphi(x) = f(x, h(x)), \qquad x \in I ,
$$
with the methods of the topic Derivatives, marginal functions and elasticity. The same holds when the constraint is described with a parameter, like the circle $x = r\cos t$, $y = r\sin t$. We look for the minimum of $f(x, y) = x^2 + y^2$ on the line $x + 2y = 5$. From the constraint $x = 5 - 2y$, and therefore
$$
\varphi(y) = (5 - 2y)^2 + y^2 = 5y^2 - 20y + 25,
\qquad
\varphi'(y) = 10y - 20 .
$$
The derivative vanishes at $y = 2$, is negative before and positive after, so $y = 2$ is the absolute minimum of $\varphi$. The constrained minimum point is $(1, 2)$, with $f(1, 2) = 5$; there is no maximum, because $\varphi(y) \to +\infty$ as $y \to \pm\infty$. Since $x^2 + y^2$ is the square of the distance of $(x, y)$ from the origin, the distance of the line from the origin is $\sqrt{5}$.

::grafico{f="(5-x)/2" curve="sqrt(5)*cos(t),sqrt(5)*sin(t),0,6.29" punti="1,2,pieno" xmin=-3 xmax=5 ymin=-3 ymax=4 uguale=1 legenda="x + 2y = 5;x^2 + y^2 = 5" titolo="On the constraint $x + 2y = 5$ the minimum of $x^2 + y^2$ is at the point $(1, 2)$, where the level curve $x^2 + y^2 = 5$ is tangent to the line"}

:::

## Lagrange multipliers

:::richiamo{titolo="Derivative along a curve"}
Let $f$ have continuous partial derivatives and let $x(t)$, $y(t)$ be differentiable. Then the function $\varphi(t) = f(x(t), y(t))$ is differentiable and
$$
\varphi'(t) = f_x(x(t), y(t))\,x'(t) + f_y(x(t), y(t))\,y'(t) = \nabla f(x(t), y(t)) \cdot (x'(t), y'(t)) .
$$
:::

::::teorema{#moltiplicatori-di-lagrange titolo="Lagrange multiplier theorem"}
Let $f$ and $g$ have continuous partial derivatives on an open set that contains the constraint $g(x, y) = 0$, and let $P_0$ be a maximum or minimum point of $f$ on the constraint. If $\nabla g(P_0) \neq (0, 0)$, then there exists a real number $\lambda$, called the **Lagrange multiplier**, such that
$$
\nabla f(P_0) = \lambda\,\nabla g(P_0) .
$$
The theorem gives a *necessary* condition for constrained extrema that does not require solving the constraint for one variable. The points of the constraint where $\nabla g = (0, 0)$ must be examined separately. For $f(x, y) = x + y$ and $g(x, y) = x^2 + y^2 - 2$ the condition is $(1, 1) = \lambda\,(2x, 2y)$, so $x = y = \dfrac{1}{2\lambda}$, and on the constraint one obtains the points $(1, 1)$ and $(-1, -1)$, where $f$ equals $2$ and $-2$.

:::dimostrazione
The idea is to travel along the constraint with a curve and to apply Fermat's theorem along it. Since $\nabla g(P_0) \neq (0, 0)$, the implicit function theorem (Dini's theorem, for which we refer to the topic Implicit functions of Mathematical Analysis 2) ensures that near $P_0$ the points of the constraint form a curve $\big( x(t), y(t) \big)$, with $t$ in an open interval containing $0$, differentiable, with $\big( x(0), y(0) \big) = P_0$ and tangent vector $\vec{v} = \big( x'(0), y'(0) \big) \neq (0, 0)$.

The function $\varphi(t) = f(x(t), y(t))$ has a relative maximum or minimum at $t = 0$, because $P_0$ is an extremum of $f$ on the constraint. By Fermat's theorem $\varphi'(0) = 0$, and by the derivative along a curve this means $\nabla f(P_0) \cdot \vec{v} = 0$. Moreover $g(x(t), y(t)) = 0$ for every $t$, so its derivative is also zero, and at $t = 0$ it gives $\nabla g(P_0) \cdot \vec{v} = 0$. The vectors of the plane perpendicular to the nonzero vector $\vec{v}$ all lie on one line through the origin, hence $\nabla f(P_0)$ and $\nabla g(P_0)$ are parallel. Since $\nabla g(P_0) \neq (0, 0)$, there exists $\lambda$ with $\nabla f(P_0) = \lambda\,\nabla g(P_0)$.
:::
::::

:::definizione{#funzione-lagrangiana titolo="Lagrangian function"}
The **Lagrangian function** of the problem of extrema of $f$ with the constraint $g = 0$ is the function of three variables
$$
\mathcal{L}(x, y, \lambda) = f(x, y) - \lambda\,g(x, y) .
$$
Setting its partial derivatives equal to zero gives together the condition of Lagrange's theorem and the constraint:
$$
\begin{cases}
\mathcal{L}_x = f_x - \lambda\,g_x = 0 \\[4pt]
\mathcal{L}_y = f_y - \lambda\,g_y = 0 \\[4pt]
\mathcal{L}_\lambda = -g(x, y) = 0
\end{cases}
$$
The solutions of the system are the candidate points. If the constraint is closed and bounded, like a circle or an ellipse, the extrema exist by the Weierstrass theorem, and they are found by comparing the values of $f$ at the candidates and at the points of the constraint with $\nabla g = (0, 0)$. A frequent strategy for solving the system is to obtain $\lambda$ from the first two equations and set the resulting expressions equal.
:::

:::esempio{titolo="Maximum and minimum of xy on a circle"}
We look for the extrema of $f(x, y) = xy$ on the circle $x^2 + y^2 = 8$. With $g(x, y) = x^2 + y^2 - 8$ the Lagrange system is
$$
\begin{cases}
y = 2\lambda x \\[4pt]
x = 2\lambda y \\[4pt]
x^2 + y^2 = 8
\end{cases}
$$
Substituting the second equation into the first gives $y = 4\lambda^2 y$. If $y = 0$, the second equation would give $x = 0$, and the origin does not lie on the constraint; so $y \neq 0$ and $\lambda^2 = \dfrac{1}{4}$. For $\lambda = \dfrac{1}{2}$ we have $x = y$, and the constraint gives $2x^2 = 8$, that is, the points $(2, 2)$ and $(-2, -2)$, where $f = 4$. For $\lambda = -\dfrac{1}{2}$ we have $x = -y$, with the points $(2, -2)$ and $(-2, 2)$, where $f = -4$. The gradient $\nabla g = (2x, 2y)$ vanishes only at the origin, which does not lie on the constraint. The circle is closed and bounded, therefore the constrained **maximum** is $4$ and the **minimum** is $-4$.
:::

:::osservazione{#interpretazione-geometrica titolo="Geometric interpretation"}
By the theorem on the gradient and level curves, seen in the topic Functions of two variables, the gradient of $f$ at a point is perpendicular to the level curve of $f$ through that point. The same holds for $\nabla g$ and the constraint, which is the level curve $0$ of $g$. The condition $\nabla f(P_0) = \lambda\,\nabla g(P_0)$ then says that at $P_0$ the level curve of $f$ and the constraint have the same perpendicular line, hence the same tangent line. Therefore at a constrained extremum the level curve of $f$ is **tangent to the constraint**. At a point where the level curve crosses the constraint, instead, moving along the constraint to one side and to the other one passes from larger values of $f$ to smaller values, and the point is not an extremum.

::grafico{f="4/x" curve="sqrt(8)*cos(t),sqrt(8)*sin(t),0,6.29" vettori="2,2,4,4,∇f" punti="2,2,pieno;-2,-2,pieno" xmin=-5 xmax=5 ymin=-5 ymax=5 uguale=1 legenda="xy = 4;x^2 + y^2 = 8" titolo="At the maximum points $(2, 2)$ and $(-2, -2)$ the level curve $xy = 4$ is tangent to the circle $x^2 + y^2 = 8$, and $\nabla f(2, 2) = (2, 2)$ is perpendicular to both"}

:::

:::attenzione
The hypothesis $\nabla g(P_0) \neq (0, 0)$ of Lagrange's theorem cannot be omitted. On the curve $y^2 - x^3 = 0$, which has a cusp at the origin, we have $x^3 = y^2 \geq 0$, that is, $x \geq 0$, so $f(x, y) = x$ has minimum $0$ at the point $(0, 0)$. The Lagrange system
$$
\begin{cases}
1 = -3\lambda x^2 \\[4pt]
0 = 2\lambda y \\[4pt]
y^2 = x^3
\end{cases}
$$
has *no* solutions. Indeed the first equation requires $\lambda \neq 0$ and $x \neq 0$, the second then gives $y = 0$, and the constraint gives $x = 0$, which contradicts the first. The minimum is at the origin, where $\nabla g = (-3x^2, 2y) = (0, 0)$, and this is why the points with zero constraint gradient must always be added to the candidates.

::grafico{curve="t^2,t^3,-1.4,1.4" vettori="0,0,1,0,∇f" punti="0,0,pieno" xmin=-2 xmax=4 ymin=-3 ymax=3 uguale=1 legenda="y^2 = x^3" titolo="On the curve $y^2 = x^3$ the function $f(x, y) = x$ has its minimum at the cusp $(0, 0)$, where $\nabla g = (0, 0)$ and the Lagrange condition does not hold"}

:::

## Economic applications

:::esempio{#profitto-due-beni titolo="Maximum profit with two goods"}
A firm in perfect competition produces two goods in quantities $q_1$ and $q_2$, sold at prices of $40$ and $50$ euros, with cost $C(q_1, q_2) = q_1^2 + q_1 q_2 + q_2^2$. The profit is revenue minus cost,
$$
\pi(q_1, q_2) = 40\,q_1 + 50\,q_2 - q_1^2 - q_1 q_2 - q_2^2 .
$$
In the first-order conditions the price of each good equals its marginal cost.
$$
\begin{cases}
\pi_{q_1} = 40 - 2q_1 - q_2 = 0 \\[4pt]
\pi_{q_2} = 50 - q_1 - 2q_2 = 0
\end{cases}
\iff
\begin{cases}
q_1 = 10 \\[4pt]
q_2 = 20
\end{cases}
$$
The Hessian is constant, $H = \begin{pmatrix} -2 & -1 \\ -1 & -2 \end{pmatrix}$, with $\det H = 3 > 0$ and $\pi_{q_1 q_1} = -2 < 0$, so by the **Hessian test** the point is a maximum point. The maximum profit is $\pi(10, 20) = 400 + 1000 - 100 - 200 - 400 = 700$ euros. The term $q_1 q_2$ in the cost makes the two choices dependent; without it each good would be studied on its own, as in the topic Curve sketching and optimization.
:::

:::definizione{#problema-del-consumatore titolo="Consumer's problem"}
A consumer with income $m$ buys the quantities $x$ and $y$ of two goods, at prices $p_1$ and $p_2$, and their preferences are described by a utility function $U(x, y)$. The **consumer's problem** is
$$
\max\, U(x, y) \qquad \text{subject to the budget constraint} \qquad p_1 x + p_2 y = m, \quad x, y > 0 .
$$
The first two equations of the Lagrange system are $U_x = \lambda p_1$ and $U_y = \lambda p_2$, and dividing them gives
$$
\frac{U_x}{U_y} = \frac{p_1}{p_2} ,
$$
that is, at the optimal choice the **marginal rate of substitution** equals the price ratio. Geometrically, the indifference curve is tangent to the budget line. The multiplier $\lambda$ is called the **marginal utility of income**. Indeed one proves that $\lambda$ is the derivative of the maximum utility with respect to $m$, so it measures how much the maximum utility increases for each additional euro of income.
:::

:::esempio{titolo="Optimal choice with utility xy"}
Let $U(x, y) = xy$, with $p_1 = 2$, $p_2 = 4$ and $m = 80$ euros. The Lagrange system is
$$
\begin{cases}
y = 2\lambda \\[4pt]
x = 4\lambda \\[4pt]
2x + 4y = 80
\end{cases}
$$
The first two equations give $x = 2y$, and the constraint becomes $8y = 80$, so $y = 10$, $x = 20$ and $\lambda = 5$. The maximum utility is $U(20, 10) = 200$. With the same procedure and an arbitrary income $m$ one finds $x = \dfrac{m}{4}$, $y = \dfrac{m}{8}$, so the maximum utility is $\dfrac{m^2}{32}$, and its derivative at $m = 80$ equals $\dfrac{80}{16} = 5 = \lambda$. On the constraint, with $x, y > 0$, the utility $x \cdot \dfrac{80 - 2x}{4}$ is a parabola opening downward, therefore the point found is the maximum.

::grafico{f="20-x/2+0*sqrt(x*(40-x));200/x+0*sqrt(x)" punti="20,10,pieno" segmenti="20,0,20,10;0,10,20,10" xmin=-5 xmax=45 ymin=-4 ymax=36 legenda="2x + 4y = 80;xy = 200" titolo="The indifference curve $xy = 200$ is tangent to the budget line $2x + 4y = 80$ at the optimal bundle $(20, 10)$"}

:::

:::esempio{#minimo-costo titolo="Minimum cost of the firm"}
A firm uses labor $L$ and capital $K$, paid $w = 2$ and $r = 8$ euros per unit, with production function $Q = \sqrt{LK}$, and wants to produce $Q = 4$ units at minimum cost. The problem is to minimize the cost $C = 2L + 8K$ on the isoquant $\sqrt{LK} = 4$, that is, $LK = 16$, with $L, K > 0$. The Lagrange system, with the constraint $LK - 16 = 0$, is
$$
\begin{cases}
2 = \lambda K \\[4pt]
8 = \lambda L \\[4pt]
LK = 16
\end{cases}
$$
Dividing the second equation by the first gives $L = 4K$, and the constraint gives $4K^2 = 16$, so $K = 2$, $L = 8$ and the minimum cost is $C = 16 + 16 = 32$ euros. The condition $\dfrac{w}{r} = \dfrac{K}{L}$ is the special case of the general rule by which the ratio of the marginal products equals the ratio of the factor prices. Substituting $K = \dfrac{16}{L}$ gives $C = 2L + \dfrac{128}{L}$, which tends to $+\infty$ as $L \to 0^+$ and as $L \to +\infty$, therefore the point found is the minimum.

::grafico{f="16/x+0*sqrt(x);4-x/4+0*sqrt(x*(16-x))" punti="8,2,pieno" xmin=-2 xmax=18 ymin=-1 ymax=9 nomi="L,K" legenda="LK = 16;2L + 8K = 32" titolo="The isoquant $LK = 16$ is tangent to the isocost line $2L + 8K = 32$ at the minimum-cost combination $(8, 2)$"}

:::
