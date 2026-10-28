---
titolo: Implicit functions
sommario: When an equation F(x, y) = 0 defines a function y = φ(x), how to compute the derivatives of φ without knowing it, and how the result extends to surfaces and systems.
---

## The problem

:::definizione{#equazione-implicita titolo="Implicit equation and zero set"}
Let $F : A \subseteq \mathbb{R}^2 \to \mathbb{R}$. The equation $F(x, y) = 0$ determines the **zero set**
$$
Z = \{ (x, y) \in A : F(x, y) = 0 \},
$$
also called the **zero level curve** of $F$. Many plane curves come in this form and *not* as graphs: the circle $x^2 + y^2 - 1 = 0$, the ellipse $\dfrac{x^2}{4} + y^2 - 1 = 0$, the curve $x^3 + y^3 - 2xy = 0$. The problem of this chapter is to establish whether, near a point of $Z$, the set $Z$ coincides with the graph of a function $y = \varphi(x)$, and in that case to compute its derivatives.

::grafico{curve="2*tan(t)/(1+tan(t)^3),2*tan(t)^2/(1+tan(t)^3),-1.53,1.56" segmenti="0.5,-1.8,0.5,2" punti="0.5,-1.0575,pieno;0.5,0.1271,pieno;0.5,0.9304,pieno" xmin=-2 xmax=2 ymin=-1.8 ymax=2 uguale=1 titolo="The curve $x^3 + y^3 - 2xy = 0$: the line $x = \dfrac{1}{2}$ meets it at three points, therefore the curve is not the graph of a function $y = \varphi(x)$"}

:::

:::definizione{#funzione-definita-implicitamente titolo="Implicitly defined function"}
Let $(x_0, y_0) \in Z$. A function $\varphi : I \to \mathbb{R}$, with $I$ a neighborhood of $x_0$, is **implicitly defined** by the equation $F(x, y) = 0$ near $(x_0, y_0)$ if
$$
\begin{cases}
\varphi(x_0) = y_0 \\[4pt]
F(x, \varphi(x)) = 0 \quad \text{for every } x \in I .
\end{cases}
$$
The notion is **local**: the same equation can define different functions near different points of the curve, and near some points it may define none.
:::

:::esempio{titolo="The circle is not a graph, but it is one locally"}
For $F(x, y) = x^2 + y^2 - 1$ the zero set is the unit circle, which is **not the graph** of any function $y = \varphi(x)$: each $x \in (-1, 1)$ corresponds to *two* points of the curve. Near the point $\left( \dfrac{3}{5}, \dfrac{4}{5} \right)$ the curve coincides with the graph of $\varphi(x) = \sqrt{1 - x^2}$; near $\left( \dfrac{3}{5}, -\dfrac{4}{5} \right)$ with the graph of $-\sqrt{1 - x^2}$. Near $(1, 0)$ **no function** of $x$ describes the curve, because every neighborhood of $(1, 0)$ contains, for one and the same value $x < 1$, two points of the circle.

::grafico{f="sqrt(1-x*x)" xmin=-1.6 xmax=1.6 ymin=-0.3 ymax=1.4 punti="0.6,0.8" titolo="The upper branch of the circle: near $\left(\dfrac{3}{5}, \dfrac{4}{5}\right)$ the curve is the graph of $y = \sqrt{1 - x^2}$"}
:::

:::osservazione
In general it is not possible to solve $F(x, y) = 0$ for $y$ algebraically. The equation $y^5 + y + x = 0$ assigns to each $x$ *one and only one* $y$, since the function $y \mapsto y^5 + y$ is strictly increasing and takes all real values; the solution $y = \varphi(x)$, however, cannot be written in terms of elementary functions. **Dini's theorem** guarantees existence, local uniqueness and regularity of the implicit function *without* exhibiting it, and it provides its derivatives.
:::

## Dini's theorem

::::teorema{#teorema-di-dini titolo="Dini's theorem (two variables)"}
Let $F$ be of class $C^1$ on an open set $A \subseteq \mathbb{R}^2$ and let $(x_0, y_0) \in A$ be such that
$$
\begin{cases}
F(x_0, y_0) = 0 \\[4pt]
F_y(x_0, y_0) \neq 0 .
\end{cases}
$$
Then there exist a neighborhood $I$ of $x_0$, a neighborhood $J$ of $y_0$ and a **unique function** $\varphi : I \to J$ such that $\varphi(x_0) = y_0$ and $F(x, \varphi(x)) = 0$ for every $x \in I$. Moreover, $\varphi$ is **of class** $C^1$ on $I$ and
$$
\varphi'(x) = -\,\frac{F_x(x, \varphi(x))}{F_y(x, \varphi(x))} .
$$
The theorem is used in two stages: first the two conditions are checked at the given point, then $\varphi'(x_0) = -\dfrac{F_x(x_0, y_0)}{F_y(x_0, y_0)}$ is computed from the values of the partial derivatives at the point, *without* knowing $\varphi$.

:::dimostrazione
Let $F_y(x_0, y_0) > 0$ (in the opposite case one argues on $-F$). Since $F_y$ is continuous, by the **sign-preservation property** there exists a rectangle $R = [x_0 - a, x_0 + a] \times [y_0 - b, y_0 + b] \subseteq A$ on which $F_y > 0$. For each fixed $x$ the function $y \mapsto F(x, y)$ is therefore strictly increasing on $[y_0 - b, y_0 + b]$. Since $F(x_0, y_0) = 0$, we have $F(x_0, y_0 - b) < 0 < F(x_0, y_0 + b)$; by the continuity of $F$ there then exists $\delta \in (0, a]$ such that
$$
F(x, y_0 - b) < 0 < F(x, y_0 + b) \qquad \text{for every } x \in I = (x_0 - \delta,\, x_0 + \delta) .
$$
For fixed $x \in I$, the continuous function $y \mapsto F(x, y)$ changes sign at the endpoints of $[y_0 - b, y_0 + b]$, hence by the **intermediate zero theorem** there exists $y \in (y_0 - b, y_0 + b)$ with $F(x, y) = 0$; such a $y$ is unique by strict monotonicity, and we set $\varphi(x) = y$.

::grafico{f="sqrt(1-x*x)" segmenti="0.4,0.5,0.8,0.5;0.4,1.1,0.8,1.1;0.4,0.5,0.4,1.1;0.8,0.5,0.8,1.1" punti="0.6,0.8,pieno" etichette="0.47,0.43,F < 0;0.47,1.15,F > 0;0.85,0.95,R" xmin=-0.2 xmax=1.4 ymin=-0.15 ymax=1.35 uguale=1 titolo="The case $F(x, y) = x^2 + y^2 - 1$ near $(x_0, y_0) = \left(\dfrac{3}{5}, \dfrac{4}{5}\right)$: in the rectangle $R$ the function is negative on the lower side and positive on the upper side, and for each $x$ the zero is unique"}

For the derivative formula we consider the difference quotient. Setting $P = (x, \varphi(x))$ and $v = (h, \varphi(x + h) - \varphi(x))$, the points $P$ and $P + v$ belong to the rectangle and $F(P) = F(P + v) = 0$; by the **mean value theorem** applied along the segment there exists a point $Q_h$ of the segment such that
$$
0 = F(P + v) - F(P) = F_x(Q_h)\, h + F_y(Q_h) \bigl( \varphi(x + h) - \varphi(x) \bigr) ,
$$
hence
$$
\frac{\varphi(x + h) - \varphi(x)}{h} = -\,\frac{F_x(Q_h)}{F_y(Q_h)} .
$$
On $R$ the function $|F_x|$ is bounded and $F_y$ has a positive minimum, therefore the difference quotient is bounded and $\varphi(x + h) \to \varphi(x)$ as $h \to 0$: $\varphi$ is continuous. Consequently $Q_h \to (x, \varphi(x))$ as $h \to 0$, and since $F_x$ and $F_y$ are continuous the difference quotient tends to $-\dfrac{F_x(x, \varphi(x))}{F_y(x, \varphi(x))}$. Hence $\varphi$ is differentiable with the stated derivative, which is continuous as a composition of continuous functions, therefore $\varphi$ is of class $C^1$.
:::
::::

:::richiamo{titolo="Intermediate zero theorem"}
If $g$ is continuous on $[a, b]$ and $g(a)\, g(b) < 0$, there exists $c \in (a, b)$ with $g(c) = 0$.
:::

:::richiamo{titolo="Mean value theorem along a segment"}
If $F$ is differentiable on an open set containing the segment with endpoints $P$ and $P + v$, there exists $t \in (0, 1)$ such that $F(P + v) - F(P) = \nabla F(P + t\,v) \cdot v$.
:::

:::esempio{titolo="Application to the circle"}
$F(x, y) = x^2 + y^2 - 1$ at the point $\left( \dfrac{3}{5}, \dfrac{4}{5} \right)$. We have $F\!\left( \dfrac{3}{5}, \dfrac{4}{5} \right) = \dfrac{9}{25} + \dfrac{16}{25} - 1 = 0$ and $F_y\!\left( \dfrac{3}{5}, \dfrac{4}{5} \right) = \dfrac{8}{5} \neq 0$, therefore **Dini's theorem** applies and
$$
\varphi'\!\left( \tfrac{3}{5} \right)
= -\,\frac{F_x}{F_y}
= -\,\frac{2 \cdot \dfrac{3}{5}}{2 \cdot \dfrac{4}{5}}
= -\,\frac{3}{4} .
$$
The value coincides with the derivative of $\sqrt{1 - x^2}$ at $x = \dfrac{3}{5}$, which is known here; the theorem gives the same result even when the explicit form does *not* exist.
:::

:::osservazione{#scambio-delle-variabili titolo="Exchanging the variables"}
The theorem holds with the roles of $x$ and $y$ **exchanged**: if $F(x_0, y_0) = 0$ and $F_x(x_0, y_0) \neq 0$, near the point the curve is the graph of a function $x = \psi(y)$ with $\psi'(y) = -\dfrac{F_y}{F_x}$. At the points of the curve where $F_y = 0$ and $F_x \neq 0$ the curve therefore remains locally a graph, with respect to the other variable, and the tangent line is **vertical**. At the points where $F_x$ and $F_y$ are *both* zero the theorem provides no information, in either direction: these points are called **singular** and must be studied directly.

::grafico{curve="cos(t),sin(t),0,6.29" segmenti="1,-1.3,1,1.3" punti="1,0,pieno" xmin=-1.6 xmax=2 ymin=-1.4 ymax=1.4 uguale=1 titolo="The circle $x^2 + y^2 = 1$ at the point $(1, 0)$: $F_y = 0$ and $F_x = 2$, the tangent is vertical and near the point the curve is the graph of $x = \sqrt{1 - y^2}$"}

:::

:::attenzione
The condition $F_y(x_0, y_0) \neq 0$ is *sufficient*, not *necessary*. For $F(x, y) = (y - x^2)^2$ the gradient is zero at every point of the zero set, and yet the set is the graph of the function $y = x^2$. When the hypotheses are not satisfied, the existence of the implicit function is **not ruled out**: it must be decided by studying the equation.
:::

## Higher derivatives of the implicit function

:::proposizione{#derivata-seconda-implicita titolo="Second derivative of the implicit function"}
If $F$ is of class $C^2$ and Dini's theorem applies, the implicit function $\varphi$ is **of class** $C^2$ and
$$
\varphi''(x) = -\,\frac{F_{xx} F_y^2 - 2 F_{xy} F_x F_y + F_{yy} F_x^2}{F_y^3} ,
$$
with all partial derivatives evaluated at $(x, \varphi(x))$. The formula is obtained by differentiating the identity $\varphi' = -\dfrac{F_x}{F_y}$ with respect to $x$ using the **chain rule** and substituting $\varphi'$ again. At the points where $\varphi'(x_0) = 0$, that is $F_x(x_0, y_0) = 0$, the formula reduces to
$$
\varphi''(x_0) = -\,\frac{F_{xx}(x_0, y_0)}{F_y(x_0, y_0)} .
$$
:::

:::richiamo{titolo="Chain rule"}
If $F$ is differentiable and $t \mapsto (x(t), y(t))$ is differentiable, then $h(t) = F(x(t), y(t))$ is differentiable and $h'(t) = F_x\, x'(t) + F_y\, y'(t)$.
:::

:::esempio{titolo="Practical method: differentiating the identity"}
In exercises it is convenient to **differentiate the identity** $F(x, \varphi(x)) = 0$ **twice** instead of applying the formula. For the circle $x^2 + y^2 = 1$, with $y = \varphi(x)$, the first differentiation gives $2x + 2y\,y' = 0$, from which $y' = -\dfrac{x}{y}$. Differentiating again we obtain $2 + 2(y')^2 + 2y\,y'' = 0$, hence
$$
y'' = -\,\frac{1 + (y')^2}{y}
= -\,\frac{1 + \dfrac{x^2}{y^2}}{y}
= -\,\frac{x^2 + y^2}{y^3}
= -\,\frac{1}{y^3} ,
$$
where the last step uses the **equation of the curve**.
:::

:::osservazione{#studio-locale-implicita titolo="Local study of the implicit function"}
The first and second derivatives make it possible to study $\varphi$ *without* knowing it. The sign of $\varphi' = -\dfrac{F_x}{F_y}$ along the curve gives the **monotonicity**; the **stationary points** of $\varphi$ are the points of the curve where $F_x = 0$ (with $F_y \neq 0$), and at such points the sign of $\varphi''(x_0) = -\dfrac{F_{xx}}{F_y}$ decides whether $x_0$ is a local maximum point ($\varphi'' < 0$) or a local minimum point ($\varphi'' > 0$). The sign of $\varphi''$ also gives the **concavity** of the branch of the curve.
:::

## Tangent line to a level curve

:::proposizione{#retta-tangente-implicita titolo="Tangent line to an implicitly defined curve"}
Let $F$ be of class $C^1$, $F(x_0, y_0) = 0$ and $\nabla F(x_0, y_0) \neq (0, 0)$. The **tangent line** to the level curve at $(x_0, y_0)$ has equation
$$
F_x(x_0, y_0)\,(x - x_0) + F_y(x_0, y_0)\,(y - y_0) = 0 .
$$
If $F_y(x_0, y_0) \neq 0$ this line coincides with the tangent to the graph of the implicit function, $y = y_0 + \varphi'(x_0)(x - x_0)$, since $\varphi'(x_0) = -\dfrac{F_x}{F_y}$; if $F_y(x_0, y_0) = 0$ and $F_x(x_0, y_0) \neq 0$ the line is **vertical**, $x = x_0$. The gradient form therefore handles both cases with a **single equation**.
:::

:::esempio
Tangent line to the curve $x^2 + 3y^2 = 4$ at the point $(1, 1)$. Setting $F(x, y) = x^2 + 3y^2 - 4$, we have $F(1, 1) = 0$, $F_x(1, 1) = 2$ and $F_y(1, 1) = 6$, therefore the tangent is
$$
2(x - 1) + 6(y - 1) = 0,
\qquad \text{that is} \qquad
x + 3y = 4 .
$$

::grafico{curve="2*cos(t),2/sqrt(3)*sin(t),0,6.29;t,(4-t)/3,-1.5,4" vettori="1,1,1.5,2.5,∇F" punti="1,1,pieno" xmin=-2.5 xmax=4.2 ymin=-1.6 ymax=2.8 uguale=1 titolo="The ellipse $x^2 + 3y^2 = 4$, the tangent line $x + 3y = 4$ at the point $(1, 1)$ (dashed) and the gradient $\nabla F(1, 1) = (2, 6)$, drawn at reduced scale, orthogonal to the tangent"}

:::

:::osservazione{#gradiente-ortogonale titolo="The gradient is orthogonal to level curves"}
The equation of the tangent line can be written $\nabla F(x_0, y_0) \cdot (x - x_0,\; y - y_0) = 0$: the gradient is **orthogonal** to the tangent line, hence to the level curve. This property is taken up again in the chapter on constrained maxima and minima, where it underlies the **method of Lagrange multipliers**.
:::

## Dini's theorem in three variables

:::teorema{#teorema-di-dini-tre-variabili titolo="Dini's theorem (three variables)"}
Let $F$ be of class $C^1$ on an open set $A \subseteq \mathbb{R}^3$ and let $P_0 = (x_0, y_0, z_0) \in A$ be such that
$$
\begin{cases}
F(x_0, y_0, z_0) = 0 \\[4pt]
F_z(x_0, y_0, z_0) \neq 0 .
\end{cases}
$$
Then there exist a neighborhood $U$ of $(x_0, y_0)$ and a **unique function** $g : U \to \mathbb{R}$ of class $C^1$ such that $g(x_0, y_0) = z_0$ and $F(x, y, g(x, y)) = 0$ in $U$, with
$$
g_x = -\,\frac{F_x}{F_z},
\qquad
g_y = -\,\frac{F_y}{F_z},
$$
where the partial derivatives of $F$ are evaluated at $(x, y, g(x, y))$. The proof repeats the one for the two-variable case, with the variable $x$ replaced by the pair $(x, y)$; the formulas follow by differentiating the identity $F(x, y, g(x, y)) = 0$ with respect to $x$ and with respect to $y$. The theorem states that near $P_0$ the level surface $F = 0$ is the **graph of a function of two variables**, whose partial derivatives at $(x_0, y_0)$ can be computed.
:::

:::proposizione{#piano-tangente-implicito titolo="Tangent plane to a level surface"}
Under the hypotheses of the theorem, the **tangent plane** to the surface $F = 0$ at $P_0$ is the tangent plane to the graph of $g$,
$$
z = z_0 + g_x(x_0, y_0)(x - x_0) + g_y(x_0, y_0)(y - y_0) ,
$$
which, after substituting the formulas for $g_x$ and $g_y$, becomes
$$
F_x(P_0)(x - x_0) + F_y(P_0)(y - y_0) + F_z(P_0)(z - z_0) = 0 .
$$
This form holds at every point of the surface with $\nabla F(P_0) \neq (0,0,0)$, *whichever* variable the theorem is applied with respect to: the gradient of $F$ is the **normal vector** to the tangent plane, hence it is **orthogonal** to the level surface.
:::

:::esempio
Tangent plane to the sphere $x^2 + y^2 + z^2 = 9$ at the point $(1, 2, 2)$. Setting $F(x, y, z) = x^2 + y^2 + z^2 - 9$, we have $F(1, 2, 2) = 0$ and $\nabla F(1, 2, 2) = (2, 4, 4) \neq (0,0,0)$, therefore the tangent plane is
$$
2(x - 1) + 4(y - 2) + 4(z - 2) = 0,
\qquad \text{that is} \qquad
x + 2y + 2z = 9 .
$$
Since $F_z(1,2,2) = 4 \neq 0$, near the point the sphere is the **graph of a function** $z = g(x, y)$ with $g_x(1, 2) = -\dfrac{2}{4} = -\dfrac{1}{2}$ and $g_y(1, 2) = -1$.
:::

## Systems of equations and the Jacobian matrix

:::teorema{#dini-per-sistemi titolo="Dini's theorem for systems"}
Let $F, G$ be of class $C^1$ on an open subset of $\mathbb{R}^3$ and let $P_0 = (x_0, y_0, z_0)$ be a solution of the system
$$
\begin{cases}
F(x, y, z) = 0 \\[4pt]
G(x, y, z) = 0 .
\end{cases}
$$
If the **Jacobian determinant** with respect to the variables $(y, z)$ is nonzero at $P_0$,
$$
\frac{\partial(F, G)}{\partial(y, z)}(P_0)
= \det \begin{pmatrix} F_y & F_z \\ G_y & G_z \end{pmatrix}(P_0) \neq 0 ,
$$
then near $P_0$ the system defines two functions $y = y(x)$ and $z = z(x)$ of class $C^1$ with $y(x_0) = y_0$ and $z(x_0) = z_0$. Geometrically, near $P_0$ the intersection of the two level surfaces is a **curve**, parametrized by $x$. The derivatives $y'(x_0)$ and $z'(x_0)$ are obtained by differentiating the two identities with respect to $x$ and solving the resulting **linear system**. The same statement holds in general for $m$ equations in $n + m$ variables: if at the point the block of the Jacobian matrix corresponding to the $m$ variables chosen as dependent has nonzero determinant, the system defines them as $C^1$ functions of the other $n$.
:::

:::esempio
The system of equations
$$
\begin{cases}
x^2 + y^2 - z - 1 = 0 \\[4pt]
x + y + z - 3 = 0
\end{cases}
$$
has the solution $P_0 = (1, 1, 1)$. The Jacobian determinant with respect to $(y, z)$ at $P_0$ is
$$
\det \begin{pmatrix} 2y & -1 \\ 1 & 1 \end{pmatrix}_{(1,1,1)} = 2 + 1 = 3 \neq 0 ,
$$
therefore near $P_0$ the system **defines** $y = y(x)$ and $z = z(x)$. Differentiating the two equations with respect to $x$ we obtain, at the point,
$$
\begin{cases}
2 + 2\,y'(1) - z'(1) = 0 \\[4pt]
1 + y'(1) + z'(1) = 0 ,
\end{cases}
$$
and adding the two equations gives $3 + 3\,y'(1) = 0$, therefore $y'(1) = -1$ and $z'(1) = 0$.
:::
