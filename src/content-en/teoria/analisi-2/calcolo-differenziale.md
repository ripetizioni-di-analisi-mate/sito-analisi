---
titolo: Differential calculus in several variables
sommario: Partial derivatives and gradient, differentiability and tangent plane, directional derivatives and the gradient formula, chain rule, second derivatives and second-order Taylor formula.
---

## Partial derivatives and gradient

:::definizione{#derivata-parziale titolo="Partial derivative"}
$f : A \subseteq \mathbb{R}^2 \to \mathbb{R}$, $(x_0, y_0)$ interior to $A$. The **partial derivative** of $f$ with respect to $x$ at $(x_0, y_0)$ is
$$
\frac{\partial f}{\partial x}(x_0, y_0) = \lim_{t \to 0} \frac{f(x_0 + t,\, y_0) - f(x_0, y_0)}{t},
$$
if the limit exists and is finite; the partial derivative with respect to $y$ is defined in the same way, with the increment on the second variable. One also writes $f_x(x_0, y_0)$ and $f_y(x_0, y_0)$. If *both* exist, $f$ is called **partially differentiable** at $(x_0, y_0)$. In the difference quotient of $f_x$ the variable $y$ stays fixed at the value $y_0$, so in the computation one differentiates with respect to $x$ treating $y$ as a **constant**, with the differentiation rules of one variable.
:::

:::esempio
$f(x, y) = x^2 y^3 + \sin x$. Differentiating with respect to $x$ with $y$ constant gives $f_x = 2x y^3 + \cos x$; differentiating with respect to $y$ with $x$ constant gives $f_y = 3 x^2 y^2$, because $\sin x$ is **constant** with respect to $y$ and its derivative is zero.
:::

:::definizione{#gradiente titolo="Gradient"}
If $f$ is partially differentiable at $(x_0, y_0)$, the **gradient** of $f$ at $(x_0, y_0)$ is the vector of partial derivatives
$$
\nabla f(x_0, y_0) = \bigl( f_x(x_0, y_0),\; f_y(x_0, y_0) \bigr).
$$
For a function of $n$ variables the gradient has $n$ components. The gradient appears in the differential, in the formula for the directional derivative and in the search for critical points, so almost every exercise in this chapter begins with its computation. For $f(x, y) = x^2 y^3 + \sin x$ we have $\nabla f(x, y) = (2x y^3 + \cos x,\; 3x^2 y^2)$.
:::

## Differentiability

:::definizione{#differenziabilita titolo="Differentiable function"}
$f : A \to \mathbb{R}$, $(x_0, y_0)$ interior to $A$. $f$ is **differentiable** at $(x_0, y_0)$ if it is partially differentiable at $(x_0, y_0)$ and
$$
\lim_{(h, k) \to (0, 0)} \frac{f(x_0 + h,\, y_0 + k) - f(x_0, y_0) - f_x(x_0, y_0)\, h - f_y(x_0, y_0)\, k}{\sqrt{h^2 + k^2}} = 0 .
$$
The linear map $(h, k) \mapsto f_x(x_0, y_0)\, h + f_y(x_0, y_0)\, k$ is called the **differential** of $f$ at $(x_0, y_0)$. The condition says that the increment of $f$ is approximated by a **linear function** of the increments $h$ and $k$, with an error that is $o\!\left(\sqrt{h^2 + k^2}\right)$:
$$
f(x_0 + h,\, y_0 + k) = f(x_0, y_0) + f_x\, h + f_y\, k + o\!\left(\sqrt{h^2 + k^2}\right).
$$
In the exercises, differentiability at a point is checked by first computing the partial derivatives with the definition and then this limit.
:::

:::osservazione
In one variable, derivability and differentiability are **equivalent**. In two variables the existence of the partial derivatives is a **weaker condition**, since the partial derivatives control $f$ *only* along the two lines through $(x_0, y_0)$ parallel to the axes, while the differentiability limit controls the increment along *every* way of approaching the point. For this reason, in several variables the central notion of differential calculus is differentiability.
:::

::::teorema{#differenziabile-implica-continua titolo="Differentiability implies continuity"}
If $f$ is differentiable at $(x_0, y_0)$, then $f$ is **continuous** at $(x_0, y_0)$. The theorem is often used in the following form: if $f$ is *not* continuous at a point, then $f$ **is not differentiable** at that point.

:::dimostrazione
By differentiability, as $(h, k) \to (0, 0)$ we have
$$
f(x_0 + h,\, y_0 + k) - f(x_0, y_0) = f_x\, h + f_y\, k + o\!\left(\sqrt{h^2 + k^2}\right).
$$
The terms $f_x h$ and $f_y k$ tend to $0$ because they are products of a constant and an infinitesimal; the remainder tends to $0$ because it is an $o\!\left(\sqrt{h^2 + k^2}\right)$ and $\sqrt{h^2 + k^2} \to 0$. Hence $f(x_0 + h,\, y_0 + k) \to f(x_0, y_0)$, and this is the **continuity** of $f$ at $(x_0, y_0)$.
:::
::::

:::attenzione
The existence of the partial derivatives at a point does *not* guarantee continuity at that point. The function
$$
f(x, y) =
\begin{cases}
\dfrac{xy}{x^2 + y^2} & (x, y) \neq (0, 0) \\[10pt]
0 & (x, y) = (0, 0)
\end{cases}
$$
is zero on the axes, so $f_x(0,0) = f_y(0,0) = 0$ and both partial derivatives exist. Along the line $y = x$ we have $f(t, t) = \dfrac{t^2}{2t^2} = \dfrac{1}{2}$ for every $t \neq 0$, while along the $x$-axis the function is zero, so the limit of $f$ at $(0,0)$ does not exist and $f$ **is not continuous** at the origin. Since differentiability implies continuity, $f$ **is not differentiable** at $(0,0)$.

::grafico{f="x;-x" punti="0,0,pieno" etichette="1.5,0.15,f = 0;0.1,1.9,f = 0" xmin=-2.2 xmax=2.2 ymin=-2 ymax=2.2 uguale=1 titolo="$f(x, y) = \dfrac{xy}{x^2 + y^2}$ equals $0$ on the axes, $\dfrac{1}{2}$ on the line $y = x$ (in color) and $-\dfrac{1}{2}$ on the line $y = -x$ (dashed), so it has no limit at the origin"}

:::

## Tangent plane

:::definizione{#piano-tangente titolo="Tangent plane to the graph"}
If $f$ is differentiable at $(x_0, y_0)$, the **tangent plane** to the graph of $f$ at the point $\bigl(x_0, y_0, f(x_0, y_0)\bigr)$ is the plane with equation
$$
z = f(x_0, y_0) + f_x(x_0, y_0)\,(x - x_0) + f_y(x_0, y_0)\,(y - y_0).
$$
Differentiability says that the difference between $f(x, y)$ and the height of the plane is $o$ of the distance of $(x, y)$ from $(x_0, y_0)$, so the plane approximates the graph **to first order**, as the tangent line approximates the graph of a function of one variable. The equation acquires this geometric meaning *only* at points of differentiability.
:::

:::esempio
$f(x, y) = x^2 + y^2$ at $(1, 1)$. We have $f(1,1) = 2$, $f_x = 2x$ and $f_y = 2y$, so $f_x(1,1) = f_y(1,1) = 2$. The tangent plane has equation
$$
z = 2 + 2(x - 1) + 2(y - 1) = 2x + 2y - 2 .
$$
The partial derivatives are continuous on all of $\mathbb{R}^2$, therefore differentiability at $(1,1)$ follows from the **total differential theorem**.
:::

## The total differential theorem

Checking differentiability with the definition requires a limit in two variables; the total differential theorem provides a much quicker *sufficient* condition.

::::teorema{#teorema-del-differenziale-totale titolo="Total differential theorem"}
If the partial derivatives of $f$ exist in a neighborhood of $(x_0, y_0)$ and are **continuous** at $(x_0, y_0)$, then $f$ is **differentiable** at $(x_0, y_0)$. In particular, a function of class $C^1(A)$, that is, with continuous partial derivatives on the whole open set $A$, is differentiable at every point of $A$. With this theorem, the differentiability of functions given by a formula is recognized from the computation of the partial derivatives: for $f(x, y) = e^{xy} + x^2$ we have $f_x = y\,e^{xy} + 2x$ and $f_y = x\,e^{xy}$, continuous on $\mathbb{R}^2$ because they are compositions of continuous functions, so $f$ is differentiable at every point. Checking with the definition remains necessary at the points where the partial derivatives are not continuous, typically the **junction points** of piecewise-defined functions.

:::dimostrazione
The increment of $f$ splits into two increments along the directions of the axes:
$$
\begin{aligned}
f(x_0 + h,\, y_0 + k) - f(x_0, y_0)
&= \bigl[ f(x_0 + h,\, y_0 + k) - f(x_0,\, y_0 + k) \bigr] \\[4pt]
&\quad + \bigl[ f(x_0,\, y_0 + k) - f(x_0, y_0) \bigr].
\end{aligned}
$$
The function $t \mapsto f(t,\, y_0 + k)$ is differentiable on the interval with endpoints $x_0$ and $x_0 + h$, because $f_x$ exists in a neighborhood of $(x_0, y_0)$; by the **mean value theorem** there therefore exists $\xi$ between $x_0$ and $x_0 + h$ such that the first increment equals $f_x(\xi,\, y_0 + k)\, h$. For the same reason there exists $\eta$ between $y_0$ and $y_0 + k$ such that the second increment equals $f_y(x_0, \eta)\, k$. The numerator of the differentiability limit therefore becomes
$$
\bigl[ f_x(\xi,\, y_0 + k) - f_x(x_0, y_0) \bigr] h + \bigl[ f_y(x_0, \eta) - f_y(x_0, y_0) \bigr] k .
$$
Since $\dfrac{|h|}{\sqrt{h^2 + k^2}} \leq 1$ and $\dfrac{|k|}{\sqrt{h^2 + k^2}} \leq 1$, the absolute value of the differentiability ratio is bounded above by
$$
\bigl| f_x(\xi,\, y_0 + k) - f_x(x_0, y_0) \bigr| + \bigl| f_y(x_0, \eta) - f_y(x_0, y_0) \bigr| .
$$
As $(h, k) \to (0, 0)$ the points $(\xi,\, y_0 + k)$ and $(x_0, \eta)$ tend to $(x_0, y_0)$, so by the continuity of $f_x$ and $f_y$ at $(x_0, y_0)$ both terms tend to $0$. By the **comparison theorem** the ratio tends to $0$, therefore $f$ is **differentiable** at $(x_0, y_0)$.
:::
::::

:::richiamo{titolo="Mean value theorem"}
If $g$ is continuous on $[a, b]$ and differentiable on $(a, b)$, there exists $c \in (a, b)$ such that $g(b) - g(a) = g'(c)\,(b - a)$.
:::

:::osservazione
The condition of the theorem is *sufficient* and the converse is **false**: there exist functions that are differentiable at a point with partial derivatives discontinuous at that point, such as $f(x, y) = (x^2 + y^2) \sin \dfrac{1}{\sqrt{x^2 + y^2}}$ extended with $f(0,0) = 0$, which is differentiable at the origin with zero differential. The scheme of implications between the notions of this chapter is therefore
$$
C^1 \implies \text{differentiable} \implies \text{continuous},
\qquad
\text{differentiable} \implies \text{partially differentiable},
$$
and *none* of the arrows can be reversed, as the counterexamples of this chapter show.
:::

## Directional derivatives and the gradient formula

:::definizione{#derivata-direzionale titolo="Directional derivative"}
$\mathbf{v} = (v_1, v_2)$ a **unit vector**, that is, a vector of norm $1$. The **directional derivative** of $f$ at $(x_0, y_0)$ along $\mathbf{v}$ is
$$
D_{\mathbf{v}} f(x_0, y_0) = \lim_{t \to 0} \frac{f(x_0 + t v_1,\, y_0 + t v_2) - f(x_0, y_0)}{t},
$$
if the limit exists and is finite. It measures the **rate of change** of $f$ along the line through $(x_0, y_0)$ with direction $\mathbf{v}$; for $\mathbf{v} = (1, 0)$ and $\mathbf{v} = (0, 1)$ one recovers the partial derivatives $f_x$ and $f_y$. When the direction is given by a vector $\mathbf{w}$ of arbitrary norm, one first *normalizes*: $\mathbf{v} = \dfrac{\mathbf{w}}{|\mathbf{w}|}$.

::grafico{vettori="1,1,1.8,1.6,v;1,1,2,1;1,1,1,2" segmenti="-0.5,1,3.8,1;1,-0.5,1,3.1;-0.44,-0.08,3.4,2.8" punti="1,1,pieno" etichette="0.55,0.75,P₀;2.05,0.78,(1, 0);0.45,1.85,(0, 1)" xmin=-0.5 xmax=4 ymin=-0.5 ymax=3.2 uguale=1 titolo="Through $P_0 = (1, 1)$ pass the line with direction $\mathbf{v}$, along which $D_{\mathbf{v}} f$ is computed, and the lines parallel to the axes, along which $f_x$ and $f_y$ are computed"}

:::

::::teorema{#formula-del-gradiente titolo="Gradient formula"}
If $f$ is differentiable at $(x_0, y_0)$, then for *every* unit vector $\mathbf{v} = (v_1, v_2)$ the directional derivative **exists** and
$$
D_{\mathbf{v}} f(x_0, y_0) = \nabla f(x_0, y_0) \cdot \mathbf{v} = f_x(x_0, y_0)\, v_1 + f_y(x_0, y_0)\, v_2 .
$$
The formula reduces the computation of every directional derivative to that of the **two partial derivatives**. For $f(x, y) = x^2 + y^2$ at $(1, 0)$, which is differentiable because it is of class $C^1$, with $\mathbf{v} = \left( \dfrac{\sqrt{2}}{2}, \dfrac{\sqrt{2}}{2} \right)$ we obtain $D_{\mathbf{v}} f(1, 0) = 2 \cdot \dfrac{\sqrt{2}}{2} + 0 \cdot \dfrac{\sqrt{2}}{2} = \sqrt{2}$.

::grafico{vettori="1,0,3,0,∇f;1,0,1.7071,0.7071,v" segmenti="3,0,2,1;1.7071,0.7071,2,1" punti="1,0,pieno;2,1,pieno" xmin=-0.5 xmax=3.5 ymin=-0.8 ymax=1.8 uguale=1 titolo="$f(x, y) = x^2 + y^2$ at $(1, 0)$: the derivative along $\mathbf{v}$ is the projection of $\nabla f(1, 0) = (2, 0)$ onto the direction of $\mathbf{v}$, of length $\sqrt{2}$"}

:::dimostrazione
In the definition of differentiability set $(h, k) = (t v_1,\, t v_2)$; since $|\mathbf{v}| = 1$, we have $\sqrt{h^2 + k^2} = |t|$. Hence as $t \to 0$
$$
f(x_0 + t v_1,\, y_0 + t v_2) - f(x_0, y_0) = t \,( f_x v_1 + f_y v_2 ) + o(|t|).
$$
Dividing by $t$ gives the difference quotient of the directional derivative, equal to $f_x v_1 + f_y v_2 + \dfrac{o(|t|)}{t}$. The last term tends to $0$ by the definition of little-o, therefore the limit **exists** and equals $f_x v_1 + f_y v_2$.
:::
::::

:::attenzione
Without the differentiability hypothesis the **gradient formula** does *not* apply, and the existence of all directional derivatives at a point guarantees neither differentiability nor continuity. For the function $f(x, y) = \dfrac{x^2 y}{x^4 + y^2}$, extended with $f(0,0) = 0$, every directional derivative at the origin exists; along the parabola $y = x^2$, however, $f(t, t^2) = \dfrac{t^4}{2t^4} = \dfrac{1}{2}$ for every $t \neq 0$, so $f$ **is not continuous** at $(0,0)$ and therefore **is not differentiable** at $(0,0)$.
:::

:::teorema{#direzione-di-massima-crescita titolo="Direction of steepest ascent"}
$f$ differentiable at $(x_0, y_0)$ with $\nabla f(x_0, y_0) \neq (0,0)$. By the **Cauchy-Schwarz inequality**, for every unit vector $\mathbf{v}$
$$
\bigl| D_{\mathbf{v}} f(x_0, y_0) \bigr| = \bigl| \nabla f(x_0, y_0) \cdot \mathbf{v} \bigr| \leq \bigl| \nabla f(x_0, y_0) \bigr|,
$$
with equality *if and only if* $\mathbf{v}$ is parallel to the gradient. Hence the directional derivative is **maximal** along the unit vector $\mathbf{v} = \dfrac{\nabla f(x_0, y_0)}{|\nabla f(x_0, y_0)|}$, where it equals $|\nabla f(x_0, y_0)|$, and it is minimal along the opposite unit vector, where it equals $-|\nabla f(x_0, y_0)|$. In the directions orthogonal to the gradient the directional derivative is zero; these directions are tangent to the level curve of $f$ through the point, therefore the gradient is **orthogonal to the level curves**. The result answers the typical question of the exercises: in which direction $f$ increases most rapidly and at what rate.

::grafico{f="2/x;4/x" segmenti="0.25,3.5,2,0" vettori="1,2,3,3" punti="1,2,pieno" etichette="3.05,3.25,∇f;3,0.85,xy = 2;3.3,1.42,xy = 4" xmin=-0.5 xmax=4.5 ymin=-0.5 ymax=4.3 uguale=1 titolo="Level curves of $f(x, y) = xy$: at $(1, 2)$ the gradient $\nabla f = (2, 1)$ is orthogonal to the tangent to the curve $xy = 2$ and points toward higher levels (the curve $xy = 4$ is dashed)"}

:::

## Chain rule

::::teorema{#regola-della-catena titolo="Chain rule"}
Let $x(t)$ and $y(t)$ be differentiable at $t_0$ and let $f$ be differentiable at $\bigl(x(t_0), y(t_0)\bigr)$. Then the composite function $F(t) = f\bigl(x(t), y(t)\bigr)$ is **differentiable** at $t_0$ and
$$
F'(t_0) = f_x\bigl(x(t_0), y(t_0)\bigr)\, x'(t_0) + f_y\bigl(x(t_0), y(t_0)\bigr)\, y'(t_0),
$$
that is, $F'(t_0) = \nabla f\bigl(x(t_0), y(t_0)\bigr) \cdot \bigl(x'(t_0), y'(t_0)\bigr)$. If the intermediate variables depend on two parameters, $x = x(s, t)$ and $y = y(s, t)$ with partial derivatives at $(s_0, t_0)$, the composite function $F(s, t) = f\bigl(x(s,t), y(s,t)\bigr)$ has partial derivatives
$$
\frac{\partial F}{\partial s} = f_x\, \frac{\partial x}{\partial s} + f_y\, \frac{\partial y}{\partial s},
\qquad
\frac{\partial F}{\partial t} = f_x\, \frac{\partial x}{\partial t} + f_y\, \frac{\partial y}{\partial t}.
$$
In every case the derivative with respect to a parameter is the **sum**, extended over *all* the intermediate variables, of the derivative of $f$ with respect to the variable multiplied by the derivative of the variable with respect to the parameter. The rule is used to differentiate composite functions without writing them out explicitly and to compute the change of $f$ along a curve.

:::dimostrazione
We prove the case of one parameter. Setting $h(\tau) = x(t_0 + \tau) - x(t_0)$ and $k(\tau) = y(t_0 + \tau) - y(t_0)$, by the differentiability of $f$ we have
$$
F(t_0 + \tau) - F(t_0) = f_x\, h(\tau) + f_y\, k(\tau) + \omega\bigl(h(\tau), k(\tau)\bigr) \sqrt{h(\tau)^2 + k(\tau)^2},
$$
where $\omega(h, k) \to 0$ as $(h, k) \to (0, 0)$ and $\omega(0,0) = 0$. Dividing by $\tau$ we obtain
$$
\frac{F(t_0 + \tau) - F(t_0)}{\tau} = f_x\, \frac{h(\tau)}{\tau} + f_y\, \frac{k(\tau)}{\tau} + \omega\bigl(h(\tau), k(\tau)\bigr)\, \frac{\sqrt{h(\tau)^2 + k(\tau)^2}}{\tau}.
$$
As $\tau \to 0$ we have $\dfrac{h(\tau)}{\tau} \to x'(t_0)$ and $\dfrac{k(\tau)}{\tau} \to y'(t_0)$ by the differentiability of $x$ and $y$; moreover $h(\tau) \to 0$ and $k(\tau) \to 0$ by the continuity of $x$ and $y$, so $\omega \to 0$. The factor $\dfrac{\sqrt{h^2 + k^2}}{|\tau|}$ tends to $\sqrt{x'(t_0)^2 + y'(t_0)^2}$, therefore it is **bounded**, and the product of a bounded function and an infinitesimal one tends to $0$. Hence the difference quotient of $F$ tends to $f_x\, x'(t_0) + f_y\, y'(t_0)$. The case of two parameters follows by applying this result to the restrictions with one parameter held fixed.
:::
::::

:::esempio
$f(x, y) = x y^2$ with $x(t) = t^2$ and $y(t) = 3t$. With the **chain rule**, since $f_x = y^2$ and $f_y = 2xy$,
$$
F'(t) = y^2 \cdot 2t + 2xy \cdot 3 = 9t^2 \cdot 2t + 2 \cdot t^2 \cdot 3t \cdot 3 = 18 t^3 + 18 t^3 = 36 t^3 .
$$
The **direct check** confirms the result: $F(t) = t^2 \cdot 9t^2 = 9t^4$, so $F'(t) = 36 t^3$.
:::

## Second derivatives and Hessian matrix

:::definizione{#derivate-parziali-seconde titolo="Second partial derivatives"}
If $f_x$ and $f_y$ are in turn partially differentiable, their partial derivatives are the **second derivatives** of $f$:
$$
f_{xx} = \frac{\partial}{\partial x} f_x, \qquad
f_{xy} = \frac{\partial}{\partial y} f_x, \qquad
f_{yx} = \frac{\partial}{\partial x} f_y, \qquad
f_{yy} = \frac{\partial}{\partial y} f_y .
$$
In the symbol $f_{xy}$ one differentiates first with respect to $x$ and then with respect to $y$; $f_{xy}$ and $f_{yx}$ are called **mixed second derivatives**. $f$ is **of class** $C^2(A)$ if *all* the second derivatives exist and are continuous on $A$. The second derivatives describe the curvature of the graph and appear in the Taylor formula and in the study of maxima and minima.
:::

:::teorema{#teorema-di-schwarz titolo="Schwarz theorem"}
If the mixed second derivatives $f_{xy}$ and $f_{yx}$ exist in a neighborhood of $(x_0, y_0)$ and are continuous at $(x_0, y_0)$, then
$$
f_{xy}(x_0, y_0) = f_{yx}(x_0, y_0).
$$
In particular, for a function of class $C^2$ the **order of differentiation** does *not* matter. In the exercises the theorem halves the computations, since of the four second derivatives three are enough, and in exercises with regular functions the comparison between $f_{xy}$ and $f_{yx}$ serves as a **check on the computations**. The proof applies the mean value theorem twice to the double increment $f(x_0 + h, y_0 + k) - f(x_0 + h, y_0) - f(x_0, y_0 + k) + f(x_0, y_0)$, and we refer to the reference texts.
:::

:::definizione{#matrice-hessiana titolo="Hessian matrix"}
If $f$ has all its second derivatives at $(x_0, y_0)$, the **Hessian matrix** of $f$ at $(x_0, y_0)$ is
$$
H_f(x_0, y_0) =
\begin{pmatrix}
f_{xx}(x_0, y_0) & f_{xy}(x_0, y_0) \\[4pt]
f_{yx}(x_0, y_0) & f_{yy}(x_0, y_0)
\end{pmatrix}.
$$
By the **Schwarz theorem**, if $f$ is of class $C^2$ the matrix is **symmetric**. The Hessian matrix collects the second derivatives as the gradient collects the first ones: it provides the quadratic term of the Taylor formula and, in the chapter on maxima and minima, it classifies critical points through the sign of its eigenvalues.
:::

:::esempio
$f(x, y) = x^3 + x y^2$. From the first derivatives $f_x = 3x^2 + y^2$ and $f_y = 2xy$ we obtain $f_{xx} = 6x$, $f_{xy} = 2y$, $f_{yx} = 2y$ and $f_{yy} = 2x$, so
$$
H_f(x, y) =
\begin{pmatrix}
6x & 2y \\[4pt]
2y & 2x
\end{pmatrix}.
$$
The mixed derivatives **coincide**, in agreement with the **Schwarz theorem**, since $f$ is a polynomial and therefore of class $C^2$.
:::

## Second-order Taylor formula

:::teorema{#formula-di-taylor-secondo-ordine titolo="Second-order Taylor formula with Peano remainder"}
If $f$ is of class $C^2$ in a neighborhood of $(x_0, y_0)$, then as $(h, k) \to (0, 0)$
$$
\begin{aligned}
f(x_0 + h,\, y_0 + k) ={}& f(x_0, y_0) + f_x(x_0, y_0)\, h + f_y(x_0, y_0)\, k \\[6pt]
&+ \frac{1}{2} \Bigl( f_{xx}(x_0, y_0)\, h^2 + 2 f_{xy}(x_0, y_0)\, h k + f_{yy}(x_0, y_0)\, k^2 \Bigr) \\[6pt]
&+ o\bigl(h^2 + k^2\bigr).
\end{aligned}
$$
The polynomial in the terms $h = x - x_0$ and $k = y - y_0$ is called the **second-order Taylor polynomial** of $f$ centered at $(x_0, y_0)$; the first-degree term is $\nabla f \cdot (h, k)$ and the second-degree term is the **quadratic form** associated with the Hessian matrix, with the factor $\dfrac{1}{2}$. The formula is obtained by applying the one-variable Taylor formula to the function $g(t) = f(x_0 + t h,\, y_0 + t k)$, whose derivatives are computed with the chain rule; for the details we refer to the reference texts. The polynomial approximates $f$ near the point with an error that is negligible compared with the square of the distance, and in the chapter on maxima and minima the **sign of the quadratic term** decides the nature of the critical points.
:::

:::esempio
$f(x, y) = e^x \cos y$ at $(0, 0)$. We have $f(0,0) = 1$, and from the derivatives $f_x = e^x \cos y$, $f_y = -e^x \sin y$, $f_{xx} = e^x \cos y$, $f_{xy} = -e^x \sin y$, $f_{yy} = -e^x \cos y$ we obtain the values $f_x(0,0) = 1$, $f_y(0,0) = 0$, $f_{xx}(0,0) = 1$, $f_{xy}(0,0) = 0$ and $f_{yy}(0,0) = -1$. The second-order Taylor polynomial is therefore
$$
T_2(x, y) = 1 + x + \frac{x^2}{2} - \frac{y^2}{2}.
$$
:::

:::osservazione
If $f$ is a polynomial of degree at most $2$, the second-order Taylor polynomial centered at *any* point **coincides with** $f$, because the difference between the two is a polynomial of degree at most $2$ that is $o(h^2 + k^2)$, hence zero. This provides an **immediate check** of the computations in exercises with polynomial functions.
:::
