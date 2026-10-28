---
titolo: Vector fields and Green's theorem
sommario: Vector fields in the plane and in space, work along a curve, conservative fields and potential, irrotational fields and simply connected domains, Green's theorem and computation of areas.
---

## Vector fields

:::definizione{#campo-vettoriale titolo="Vector field"}
A **vector field** on an open set $A \subseteq \mathbb{R}^2$ is a function $F : A \to \mathbb{R}^2$ that assigns a vector to each point,
$$
F(x, y) = \bigl( F_1(x, y),\; F_2(x, y) \bigr),
$$
where $F_1$ and $F_2$, the **components** of the field, are scalar functions on $A$. In space a vector field on $A \subseteq \mathbb{R}^3$ has three components, $F = (F_1, F_2, F_3)$. The field is said to be of class $C^k$ if its components are of class $C^k$. A vector field is the mathematical model of a force that depends on the point, such as the gravitational field or an electric field; the typical picture shows at each point of the plane an arrow with the direction and the length of the associated vector.
:::

:::esempio
$F(x, y) = (-y, x)$ is a vector field of class $C^{\infty}$ on $\mathbb{R}^2$. At each point the vector $(-y, x)$ is perpendicular to the position vector $(x, y)$, since the scalar product $(-y) \cdot x + x \cdot y$ is zero, hence the arrows **rotate around the origin** counterclockwise. An example in space is the field $F(x, y, z) = (yz, xz, xy)$, of class $C^{\infty}$ on $\mathbb{R}^3$.

::grafico{xmin=-3.2 xmax=3.2 ymin=-3 ymax=3 uguale=1 vettori="0.8,0,0.8,0.32;1.48,0.61,1.23,1.2;2.4,0,2.4,0.96;0.57,0.57,0.34,0.79;0.61,1.48,0.02,1.72;1.7,1.7,1.02,2.38;0,0.8,-0.32,0.8;-0.61,1.48,-1.2,1.23;0,2.4,-0.96,2.4;-0.57,0.57,-0.79,0.34;-1.48,0.61,-1.72,0.02;-1.7,1.7,-2.38,1.02;-0.8,0,-0.8,-0.32;-1.48,-0.61,-1.23,-1.2;-2.4,0,-2.4,-0.96;-0.57,-0.57,-0.34,-0.79;-0.61,-1.48,-0.02,-1.72;-1.7,-1.7,-1.02,-2.38;0,-0.8,0.32,-0.8;0.61,-1.48,1.2,-1.23;0,-2.4,0.96,-2.4;0.57,-0.57,0.79,-0.34;1.48,-0.61,1.72,-0.02;1.7,-1.7,2.38,-1.02" titolo="The field $F(x, y) = (-y, x)$ at some points of three circles centered at the origin: the arrows rotate counterclockwise and get longer moving away from the origin"}

:::

:::osservazione
Every scalar function $f$ of class $C^1$ on an open set $A$ generates a vector field, its **gradient** $\nabla f = (f_x, f_y)$. The central question of this chapter is the *inverse* one: given a field $F$, determine whether there exists a scalar function of which $F$ is the gradient. For the gradient we refer to the chapter on differential calculus.
:::

## Work and circulation

:::richiamo{titolo="Line integral of the second kind"}
Let $F$ be a continuous vector field on an open set $A$ and let $\gamma$ be a piecewise regular curve with trace in $A$, with parametrization $r : [a, b] \to A$. The line integral of $F$ along $\gamma$ is
$$
\int_{\gamma} F \cdot dr = \int_{a}^{b} F(r(t)) \cdot r'(t) \, dt ,
$$
where the dot denotes the scalar product. The integral **changes sign** if the direction of travel is reversed and does *not* depend on the chosen parametrization, provided the direction is the same. The definition and the properties are in the chapter on curves and line integrals.
:::

:::definizione{#lavoro-e-circuitazione titolo="Work and circulation"}
The line integral of the second kind of a field $F$ along an oriented curve $\gamma$ is called the **work** of $F$ along $\gamma$. In the plane it is also written in the form
$$
\int_{\gamma} F_1 \, dx + F_2 \, dy ,
$$
which in the computation becomes $\displaystyle\int_a^b \bigl( F_1(r(t))\, x'(t) + F_2(r(t))\, y'(t) \bigr) dt$. If the curve is closed, that is, $r(a) = r(b)$, the work is called the **circulation** of $F$ along $\gamma$ and is denoted by
$$
\oint_{\gamma} F \cdot dr .
$$
The name comes from physics: if $F$ is a force, the integral measures the work done by the force on a material point traveling along the curve. Circulation is the tool with which **non-conservative** fields are recognized, as the characterization theorem shows.
:::

:::esempio{titolo="Computation of a work"}
Work of $F(x, y) = (y, x^2)$ along the segment from $(0, 0)$ to $(1, 1)$, parametrized by $r(t) = (t, t)$ with $t \in [0, 1]$. Since $r'(t) = (1, 1)$ and $F(r(t)) = (t, t^2)$, the work is
$$
\int_0^1 (t \cdot 1 + t^2 \cdot 1) \, dt = \frac{1}{2} + \frac{1}{3} = \frac{5}{6} .
$$
:::

## Conservative fields and potential

:::definizione{#campo-conservativo titolo="Conservative field and potential"}
A vector field $F$ continuous on a connected open set $A$ is said to be **conservative** in $A$ if there *exists* a function $U : A \to \mathbb{R}$ of class $C^1$ such that
$$
\nabla U(x) = F(x) \qquad \text{for every } x \in A .
$$
The function $U$ is called a **potential** of $F$ in $A$. In the plane the condition means $U_x = F_1$ and $U_y = F_2$; in space one adds $U_z = F_3$. The property **depends on the set** $A$: the same field can be conservative on an open set and fail to be so on a larger open set, as the counterexample of the rotation field shows.
:::

:::esempio
$F(x, y) = (2x, 2y)$ is **conservative** on $\mathbb{R}^2$ with potential $U(x, y) = x^2 + y^2$, since $U_x = 2x = F_1$ and $U_y = 2y = F_2$. Also $U(x, y) = x^2 + y^2 + 7$ is a potential of the same field, therefore the potential **is not unique**.
:::

::::teorema{#lavoro-campo-conservativo titolo="Work of a conservative field"}
Let $F$ be conservative on a connected open set $A$ with potential $U$ and let $\gamma$ be a piecewise regular curve with trace in $A$, from the point $P$ to the point $Q$. Then
$$
\int_{\gamma} F \cdot dr = U(Q) - U(P) .
$$
The work depends **only on the endpoints** of the curve and not on the path joining them; in particular the circulation along *every* closed curve is zero. This theorem is the several-variable analogue of the fundamental theorem of integral calculus and in exercises it replaces the direct computation of the line integral: once a potential is found, the work is a difference of two values.

::grafico{xmin=-0.5 xmax=5 ymin=-0.6 ymax=3.6 uguale=1 curve="0.5+3.5*t,0.5+2*t,0,1;0.5+3.5*t,0.5+2*t+1.5*sin(pi*t),0,1;0.5+3.5*t,0.5+2*t-1.2*sin(pi*t),0,1" vettori="1.97,1.34,2.53,1.66;1.97,0.178,2.53,0.498;1.97,2.793,2.53,3.113" punti="0.5,0.5,pieno,P;4,2.5,pieno,Q" etichette="2.9,1.45,γ₁;0.9,2.2,γ₂;3.4,0.75,γ₃" titolo="Three curves from $P$ to $Q$: for a conservative field the work along each of them equals $U(Q) - U(P)$"}

:::dimostrazione
Let $r : [a, b] \to A$ be a regular parametrization of $\gamma$ with $r(a) = P$ and $r(b) = Q$, and let $g(t) = U(r(t))$. Since $U$ is of class $C^1$, by the **chain rule** $g$ is differentiable and
$$
g'(t) = \nabla U(r(t)) \cdot r'(t) = F(r(t)) \cdot r'(t) .
$$
By the **fundamental theorem of integral calculus**, therefore,
$$
\int_{\gamma} F \cdot dr = \int_a^b g'(t) \, dt = g(b) - g(a) = U(Q) - U(P) .
$$
If the curve is piecewise regular, the argument is applied to each piece and the results are added; the terms at the junction points cancel in pairs.
:::
::::

:::richiamo{titolo="Chain rule"}
If $U$ is of class $C^1$ on $A$ and $r : [a, b] \to A$ is differentiable, then $t \mapsto U(r(t))$ is differentiable and its derivative is $\nabla U(r(t)) \cdot r'(t)$.
:::

:::osservazione
On a connected open set two potentials of the same field **differ by a constant**. Indeed, if $\nabla U = \nabla V = F$, the difference $W = U - V$ has zero gradient at every point; on a connected open set a $C^1$ function with zero gradient is constant, therefore $U = V + c$. For this reason the potential is always written with an arbitrary additive constant, like the antiderivative of a function of one variable.
:::

## Path independence

::::teorema{#caratterizzazione-conservativi titolo="Characterization of conservative fields"}
Let $F$ be a continuous vector field on a connected open set $A$. The following three conditions are equivalent.

1. $F$ is conservative in $A$.
2. The work of $F$ depends *only* on the endpoints: for every pair of piecewise regular curves in $A$ with the same endpoints and the same orientation, the two works coincide.
3. The circulation of $F$ along every piecewise regular closed curve in $A$ is zero.

The theorem provides the criterion by which one proves that a field is not conservative: once *a single* closed curve with nonzero circulation is found, condition 3 is not satisfied, hence the potential **does not exist**. The same equivalence justifies the construction of the potential as work along a polygonal path.

:::dimostrazione
Condition 1 implies condition 2 by the theorem on the work of a conservative field, since the work equals $U(Q) - U(P)$ whatever the curve from $P$ to $Q$.

Conditions 2 and 3 are **equivalent**. If the work depends only on the endpoints and $\gamma$ is closed with initial and final point $P$, the constant curve at $P$ has the same endpoints and zero work, hence the circulation along $\gamma$ is zero; more directly, splitting $\gamma$ into two arcs $\gamma_1$ and $\gamma_2$ from $P$ to $Q$, the works along $\gamma_1$ and along $\gamma_2$ coincide, therefore the work along $\gamma_1$ followed by $\gamma_2$ reversed, that is, along $\gamma$, is zero. Conversely, if every circulation is zero and $\gamma_1$, $\gamma_2$ are two curves from $P$ to $Q$, the curve obtained by traversing $\gamma_1$ and then $\gamma_2$ in the opposite direction is closed, hence its work is zero, and the works along $\gamma_1$ and $\gamma_2$ coincide.

Condition 2 implies condition 1. Fixing $P_0 \in A$, for every $x \in A$ one defines $U(x)$ as the work of $F$ along any piecewise regular curve in $A$ from $P_0$ to $x$; such a curve exists because a connected open subset of $\mathbb{R}^n$ is polygonally connected, and the value does not depend on the curve by the hypothesis. One verifies that $U_x = F_1$ at the point $(x, y)$: for small $h$ the horizontal segment from $(x, y)$ to $(x + h, y)$ is contained in $A$, and choosing as path to $(x + h, y)$ a path to $(x, y)$ followed by the segment one obtains
$$
U(x + h, y) - U(x, y) = \int_0^1 F_1(x + th, y)\, h \, dt ,
$$
since on the segment the second component of the parametrization $r(t) = (x + th, y)$ is constant. Dividing by $h$ and taking the limit as $h \to 0$, by the continuity of $F_1$ the difference quotient tends to $F_1(x, y)$. The same argument with vertical segments gives $U_y = F_2$. The partial derivatives of $U$ coincide with the components of $F$, which are continuous, hence $U$ is of class $C^1$ and $\nabla U = F$.
:::
::::

:::richiamo{titolo="Work of a conservative field"}
If $F = \nabla U$ on $A$ and $\gamma$ is a piecewise regular curve in $A$ from $P$ to $Q$, then the work of $F$ along $\gamma$ is $U(Q) - U(P)$.
:::

## Irrotational fields

:::definizione{#campo-irrotazionale titolo="Irrotational field (closed field)"}
A field $F = (F_1, F_2)$ of class $C^1$ on an open set $A \subseteq \mathbb{R}^2$ is said to be **irrotational**, or **closed**, if
$$
\frac{\partial F_1}{\partial y}(x, y) = \frac{\partial F_2}{\partial x}(x, y) \qquad \text{for every } (x, y) \in A .
$$
In space the **curl** of a field $F = (F_1, F_2, F_3)$ of class $C^1$ is the vector field
$$
\operatorname{curl} F = \left( \frac{\partial F_3}{\partial y} - \frac{\partial F_2}{\partial z},\;\; \frac{\partial F_1}{\partial z} - \frac{\partial F_3}{\partial x},\;\; \frac{\partial F_2}{\partial x} - \frac{\partial F_1}{\partial y} \right),
$$
and $F$ is said to be irrotational if $\operatorname{curl} F = (0, 0, 0)$ at every point of $A$. The condition in the plane is the special case with $F_3 = 0$ and components independent of $z$: only the third component of the curl remains. Irrotationality is verified with a computation of partial derivatives, therefore in exercises it is always the *first* check on a given field.
:::

::::teorema{#conservativo-implica-irrotazionale titolo="A conservative field of class C¹ is irrotational"}
Let $F$ be a field of class $C^1$ on a connected open set $A$. If $F$ is conservative in $A$, then $F$ is irrotational in $A$. The condition is *necessary* and is used in the contrapositive: if the cross derivatives do not coincide, the field **is not conservative** and the search for the potential ends.

:::dimostrazione
Let $U$ be a potential of $F$ in the plane, with $U_x = F_1$ and $U_y = F_2$. Since $F$ is of class $C^1$, the mixed second derivatives of $U$ exist and are continuous, hence **Schwarz's theorem** applies and
$$
\frac{\partial F_1}{\partial y} = \frac{\partial^2 U}{\partial y \, \partial x} = \frac{\partial^2 U}{\partial x \, \partial y} = \frac{\partial F_2}{\partial x} .
$$
In space the same exchange of derivatives, applied to the three pairs of variables, makes the three components of the curl vanish.
:::
::::

:::richiamo{titolo="Schwarz's theorem"}
If the mixed second derivatives of $U$ exist and are continuous in an open set, then at every point of the open set they **coincide**. The complete statement is in the chapter on differential calculus.
:::

:::attenzione
The converse implication is *not* true in general: there exist **irrotational fields that are not conservative**. The classical counterexample is the rotation field
$$
F(x, y) = \left( \frac{-y}{x^2 + y^2},\; \frac{x}{x^2 + y^2} \right),
$$
of class $C^{\infty}$ on the connected open set $A = \mathbb{R}^2 \setminus \{(0, 0)\}$. The field is irrotational, since both cross derivatives equal
$$
\frac{\partial F_1}{\partial y} = \frac{\partial F_2}{\partial x} = \frac{y^2 - x^2}{(x^2 + y^2)^2} .
$$
Along the unit circle $r(t) = (\cos t, \sin t)$ with $t \in [0, 2\pi]$, traversed counterclockwise, one has $F(r(t)) = (-\sin t, \cos t) = r'(t)$, hence the circulation is
$$
\oint_{\gamma} F \cdot dr = \int_0^{2\pi} (\sin^2 t + \cos^2 t) \, dt = 2\pi \neq 0 .
$$
By the **characterization theorem** the field **is not conservative** in $A$. The obstacle is the point $(0,0)$ removed from the domain: the notion of simply connected domain makes this idea precise.

::grafico{xmin=-3.2 xmax=3.2 ymin=-3 ymax=3 uguale=1 curve="cos(t),sin(t),0,6.29" vettori="1,0,1,0.75;1.39,0.8,1.15,1.21;2.4,0,2.4,0.31;0.5,0.87,-0.15,1.24;0,1.6,-0.47,1.6;1.2,2.08,0.93,2.23;-0.5,0.87,-1.15,0.49;-1.39,0.8,-1.62,0.39;-1.2,2.08,-1.47,1.92;-1,0,-1,-0.75;-1.39,-0.8,-1.15,-1.21;-2.4,0,-2.4,-0.31;-0.5,-0.87,0.15,-1.24;0,-1.6,0.47,-1.6;-1.2,-2.08,-0.93,-2.23;0.5,-0.87,1.15,-0.49;1.39,-0.8,1.62,-0.39;1.2,-2.08,1.47,-1.92" punti="0,0,vuoto" titolo="The rotation field: the arrows are tangent to the circles centered at the origin and have length proportional to $\dfrac{1}{\sqrt{x^2 + y^2}}$; the origin does not belong to the domain"}

:::

## Simply connected domains

:::definizione{#semplicemente-connesso titolo="Simply connected open set"}
A connected open set $A \subseteq \mathbb{R}^n$ is said to be **simply connected** if *every* closed curve with trace in $A$ can be continuously deformed, while remaining in $A$, until it shrinks to a point. In the plane the condition has a geometric reading: $A$ is simply connected when it **has no holes**, that is, when the region enclosed by every closed curve in $A$ is entirely contained in $A$.

- Simply connected: $\mathbb{R}^2$ and $\mathbb{R}^3$, disks and balls, rectangles, every convex set, every half-plane, $\mathbb{R}^3$ minus a point.
- Not simply connected: $\mathbb{R}^2 \setminus \{(0,0)\}$, an annulus, $\mathbb{R}^3$ minus a line.

In the plane removing a point creates a hole, since a circle around the point cannot be contracted without crossing it; in space a closed curve can go around a missing point, therefore $\mathbb{R}^3$ minus a point remains simply connected, while a removed line *cannot* be bypassed.

::grafico{xmin=-4 xmax=4.5 ymin=-1.6 ymax=2.1 uguale=1 area="sqrt(abs(1.69-(x+2.2)^2));-sqrt(abs(1.69-(x+2.2)^2));-3.5;-0.9|sqrt(abs(1.69-(x-2.2)^2));-sqrt(abs(1.69-(x-2.2)^2));0.9;1.7|sqrt(abs(1.69-(x-2.2)^2));sqrt(abs(0.25-(x-2.2)^2));1.7;2.7|-sqrt(abs(0.25-(x-2.2)^2));-sqrt(abs(1.69-(x-2.2)^2));1.7;2.7|sqrt(abs(1.69-(x-2.2)^2));-sqrt(abs(1.69-(x-2.2)^2));2.7;3.5" curve="-2.2+1.3*cos(t),1.3*sin(t),0,6.29;2.2+0.9*cos(t),0.9*sin(t),0,6.29;2.2+0.5*cos(t),0.5*sin(t),0,6.29;2.2+1.3*cos(t),1.3*sin(t),0,6.29" etichette="-3.9,1.6,simply connected;0.7,1.6,not simply connected" titolo="A disk, which is simply connected, and an annulus, which is not: the dashed curve goes around the hole and does not shrink to a point while remaining in the annulus"}

:::

:::teorema{#irrotazionale-su-semplicemente-connesso titolo="Irrotational on a simply connected set implies conservative"}
Let $F$ be a field of class $C^1$ that is irrotational on a simply connected open set $A$. Then $F$ is **conservative** in $A$. Together with the necessary condition, the theorem yields the criterion used in exercises, with two checks in sequence:
$$
\begin{cases}
\dfrac{\partial F_1}{\partial y} = \dfrac{\partial F_2}{\partial x} \ \text{in } A \\[10pt]
A \ \text{simply connected}
\end{cases}
\implies F \ \text{conservative in } A .
$$
In the plane, for a domain whose boundary is a closed curve contained in $A$ together with the enclosed region, the proof follows from **Green's theorem**: the circulation is the double integral of $\dfrac{\partial F_2}{\partial x} - \dfrac{\partial F_1}{\partial y}$, which is the zero function, hence every circulation of this type is zero. The general proof requires homotopy theory and is omitted. The counterexample of the rotation field shows that the hypothesis on the domain *cannot* be removed; on an open set that is not simply connected the theorem gives no information and the analysis proceeds by direct computation of the circulations around the holes.
:::

:::osservazione
A field that is irrotational on an arbitrary open set $A$ is **conservative** on *every* simply connected open set contained in $A$. The rotation field, not conservative on $\mathbb{R}^2 \setminus \{(0,0)\}$, is conservative on the half-plane $x > 0$, where a potential is $U(x, y) = \arctan \dfrac{y}{x}$. Being conservative is therefore a **property of the pair field and domain**, not of the field alone.
:::

## Construction of the potential

:::proposizione{#potenziale-per-integrazione-successiva titolo="Potential by successive integration"}
Let $F = (F_1, F_2)$ be conservative on $A$. Every potential $U$ satisfies the system
$$
\begin{cases}
U_x = F_1 \\[4pt]
U_y = F_2
\end{cases}
$$
and is constructed in two steps. From the first equation, integrating $F_1$ with respect to $x$ with $y$ fixed, one obtains
$$
U(x, y) = \int F_1(x, y) \, dx + c(y),
$$
where the constant of integration $c(y)$ is a **function of $y$ alone**, since the partial derivative with respect to $x$ of a function of $y$ is zero. Differentiating this expression with respect to $y$ and imposing the second equation one finds $c'(y)$, and with an integration in $y$ one obtains $c(y)$ up to a constant. If the field is conservative, $c'(y)$ turns out to be a function of $y$ alone; if the variable $x$ remains in the expression of $c'(y)$, the field **is not conservative**. In space the procedure has three steps, with a function $c(y, z)$ at the first step and a function $c(z)$ at the second.
:::

:::esempio{titolo="Construction of a potential"}
$F(x, y) = (2xy, \, x^2 + 1)$ on $\mathbb{R}^2$. The cross derivatives both equal $2x$ and the domain is simply connected, hence the field is **conservative**. Integrating $F_1 = 2xy$ with respect to $x$ one obtains $U(x, y) = x^2 y + c(y)$. Differentiating with respect to $y$ and imposing $U_y = F_2$ one obtains
$$
x^2 + c'(y) = x^2 + 1 ,
$$
hence $c'(y) = 1$, therefore $c(y) = y + k$. The potentials are $U(x, y) = x^2 y + y + k$ with $k \in \mathbb{R}$.
:::

::::proposizione{#potenziale-su-spezzate titolo="Potential as work along a polygonal path"}
Let $F = (F_1, F_2)$ be conservative on an open set $A$ containing the rectangle with opposite vertices $(x_0, y_0)$ and $(x, y)$. A potential is the **work along the polygonal path** that goes from $(x_0, y_0)$ to $(x, y_0)$ horizontally and then from $(x, y_0)$ to $(x, y)$ vertically:
$$
U(x, y) = \int_{x_0}^{x} F_1(t, y_0) \, dt + \int_{y_0}^{y} F_2(x, t) \, dt .
$$
In space one adds the third vertical piece, with the term $\displaystyle\int_{z_0}^{z} F_3(x, y, t) \, dt$. The formula replaces successive integration when the partial antiderivatives are simpler along the polygonal path; the convenient choice is often $(x_0, y_0) = (0, 0)$.

::grafico{xmin=-0.5 xmax=4.5 ymin=-0.5 ymax=3.3 uguale=1 vettori="0.5,0.5,3,0.5;3,0.5,3,2.5" punti="0.5,0.5;3,0.5;3,2.5" etichette="0.05,0.15,(x₀, y₀);3.12,0.15,(x, y₀);3.12,2.6,(x, y)" titolo="The polygonal path from $(x_0, y_0)$ to $(x, y)$: first a horizontal piece, then a vertical piece"}

:::dimostrazione
By the **characterization theorem** the work of a conservative field from $(x_0, y_0)$ to $(x, y)$ does not depend on the path, and the function that assigns this work to each point is a potential. On the horizontal piece, parametrized by $r(t) = (t, y_0)$ with $t$ from $x_0$ to $x$, one has $r'(t) = (1, 0)$, hence the work is the integral of $F_1(t, y_0)$; on the vertical piece, parametrized by $r(t) = (x, t)$ with $t$ from $y_0$ to $y$, one has $r'(t) = (0, 1)$, hence the work is the integral of $F_2(x, t)$. The sum of the two pieces is the stated formula.
:::
::::

## Green's theorem

:::definizione{#bordo-orientato titolo="Regular domain and positively oriented boundary"}
A domain $D \subset \mathbb{R}^2$ is said to be **normal** with respect to the $x$-axis if
$$
D = \{ (x, y) : a \leq x \leq b, \ g_1(x) \leq y \leq g_2(x) \}
$$
with $g_1, g_2$ of class $C^1$ on $[a, b]$ and $g_1 \leq g_2$; the definition with respect to the $y$-axis swaps the roles of the variables. A **regular domain** is a domain normal with respect to an axis, or the union of finitely many normal domains with pairwise disjoint interiors. The boundary $\partial D$ is **positively oriented** when it is traversed keeping the domain on its left: for a domain without holes the direction is counterclockwise, for a possible inner hole the direction of the curve bounding it is clockwise.

::grafico{xmin=-3.6 xmax=3.6 ymin=-2.5 ymax=2.6 uguale=1 area="2*sqrt(abs(1-x^2/9));-2*sqrt(abs(1-x^2/9));-3;-0.8|2*sqrt(abs(1-x^2/9));sqrt(abs(0.64-x^2));-0.8;0.8|-sqrt(abs(0.64-x^2));-2*sqrt(abs(1-x^2/9));-0.8;0.8|2*sqrt(abs(1-x^2/9));-2*sqrt(abs(1-x^2/9));0.8;3" curve="3*cos(t),2*sin(t),0,6.29;0.8*cos(t),0.8*sin(t),0,6.29;0.8*cos(t),0.8*sin(t),0,6.29" vettori="0.6,1.96,-0.6,1.96;-0.35,0.72,0.35,0.72" etichette="1.5,0.3,D" titolo="The positively oriented boundary of a domain with a hole: the outer curve is traversed counterclockwise, the inner one clockwise, and in both cases $D$ stays on the left"}

:::

::::teorema{#teorema-di-green titolo="Green's theorem"}
Let $D \subset \mathbb{R}^2$ be a regular domain with piecewise regular, positively oriented boundary $\partial D$, and let $F = (F_1, F_2)$ be a field of class $C^1$ on an open set containing $D$. Then
$$
\oint_{\partial D} F_1 \, dx + F_2 \, dy
= \iint_{D} \left( \frac{\partial F_2}{\partial x} - \frac{\partial F_1}{\partial y} \right) dx \, dy .
$$
The theorem connects the **circulation along the boundary** with a **double integral over the domain** and is used in both directions: it turns a circulation into a double integral, generally simpler to compute, and it turns the area of a domain into a line integral along the boundary, useful when the boundary is given in parametric form. For the field $F = (-y^3, x^3)$ on the disk $x^2 + y^2 \leq 4$, for example, the circulation along the circle is the double integral of $3x^2 + 3y^2$, which in polar coordinates equals $24\pi$.

:::dimostrazione
We prove the identity for a domain $D$ normal with respect to both axes; the general case follows by decomposing the regular domain into normal domains and adding the identities, since the inner cuts are traversed twice in opposite directions and their contributions to the circulation **cancel**.

First step, the identity $\displaystyle\oint_{\partial D} F_1 \, dx = - \iint_D \frac{\partial F_1}{\partial y} \, dx \, dy$ for $D$ normal with respect to the $x$-axis, with $a \leq x \leq b$ and $g_1(x) \leq y \leq g_2(x)$. By the **reduction theorem** and by the **fundamental theorem of integral calculus** applied to the variable $y$,
$$
\begin{aligned}
\iint_D \frac{\partial F_1}{\partial y} \, dx \, dy
&= \int_a^b \left( \int_{g_1(x)}^{g_2(x)} \frac{\partial F_1}{\partial y}(x, y) \, dy \right) dx \\[6pt]
&= \int_a^b \bigl( F_1(x, g_2(x)) - F_1(x, g_1(x)) \bigr) \, dx .
\end{aligned}
$$
The positively oriented boundary consists of the graph of $g_1$ traversed from left to right, the vertical segment $x = b$, the graph of $g_2$ traversed from right to left and the vertical segment $x = a$. On the two vertical segments $x$ is constant, hence $dx = 0$ and the contribution to the integral of $F_1 \, dx$ is **zero**. On the graph of $g_1$, with parametrization $(x, g_1(x))$ and $x$ from $a$ to $b$, the integral equals $\displaystyle\int_a^b F_1(x, g_1(x)) \, dx$; on the graph of $g_2$, traversed in the opposite direction, it equals $\displaystyle -\int_a^b F_1(x, g_2(x)) \, dx$. Adding the four pieces one obtains
$$
\oint_{\partial D} F_1 \, dx
= \int_a^b \bigl( F_1(x, g_1(x)) - F_1(x, g_2(x)) \bigr) \, dx
= - \iint_D \frac{\partial F_1}{\partial y} \, dx \, dy .
$$

::grafico{xmin=-0.4 xmax=4.4 ymin=-0.6 ymax=3.8 area="3+0.4*sin(1.5*x);0.5+0.3*(x-2)^2;0.5;3.5" curve="t,0.5+0.3*(t-2)^2,0.5,3.5;2.6,t,0.608,2.725;t,3+0.4*sin(1.5*t),0.5,3.5" segmenti="0.5,0,0.5,3.273;3.5,0,3.5,2.656" vettori="1.3,0.647,1.9,0.503;1.9,3.115,1.3,3.372" etichette="0.45,-0.45,a;3.45,-0.45,b;2.6,0.15,y = g₁(x);2.3,3.3,y = g₂(x)" titolo="Domain normal with respect to the $x$-axis: the positively oriented boundary traverses the graph of $g_1$ from left to right and the graph of $g_2$ from right to left; on the vertical sides $dx = 0$"}

Second step, the identity $\displaystyle\oint_{\partial D} F_2 \, dy = \iint_D \frac{\partial F_2}{\partial x} \, dx \, dy$ for $D$ normal with respect to the $y$-axis. The computation is the same with the roles of $x$ and $y$ swapped; the sign is *opposite* because, with the positive orientation of the boundary, the graph of the function bounding the domain on the right is traversed from bottom to top. Adding the two identities one obtains the claim.
:::
::::

:::richiamo{titolo="Reduction theorem for double integrals"}
If $f$ is continuous on the normal domain $D = \{ (x,y) : a \leq x \leq b, \ g_1(x) \leq y \leq g_2(x) \}$, then the double integral of $f$ over $D$ equals the **iterated integral** $\displaystyle\int_a^b \left( \int_{g_1(x)}^{g_2(x)} f(x, y) \, dy \right) dx$.
:::

:::osservazione
**Green's theorem** explains the link between irrotationality and circulations. If $F$ is irrotational, the integrand $\dfrac{\partial F_2}{\partial x} - \dfrac{\partial F_1}{\partial y}$ is zero, hence the circulation along the boundary of every regular domain contained, together with its interior, in the domain of the field is zero. For the rotation field the circulation along the unit circle equals $2\pi$ and Green's theorem does *not* apply to the unit disk, since the field is not defined at the origin: the two statements are **consistent**.
:::

## Areas with Green's formula

::::proposizione{#area-con-green titolo="Area formulas"}
Let $D$ be a regular domain with positively oriented boundary. The area of $D$ is computed with *any one* of the three line integrals
$$
\operatorname{area}(D)
= \oint_{\partial D} x \, dy
= - \oint_{\partial D} y \, dx
= \frac{1}{2} \oint_{\partial D} ( x \, dy - y \, dx ) .
$$
The formulas are useful when the boundary is known in parametric form and a Cartesian description of the domain is inconvenient, as for the ellipse or for closed curves given by $x = x(t)$, $y = y(t)$. The third formula is often the most convenient, since in its integrand the mixed terms cancel.

:::dimostrazione
One applies **Green's theorem** to three fields. For $F = (0, x)$ the integrand of the double integral is $\dfrac{\partial F_2}{\partial x} - \dfrac{\partial F_1}{\partial y} = 1$, hence the circulation of $x \, dy$ is the double integral of the constant $1$, that is, the area. For $F = (-y, 0)$ the integrand is again $1$, hence $-\oint y \, dx$ is also the area. The third formula is the **arithmetic mean** of the first two.
:::
::::

:::esempio{titolo="Area of the ellipse"}
The ellipse with semi-axes $a$ and $b$ has boundary $r(t) = (a \cos t, \, b \sin t)$ with $t \in [0, 2\pi]$, traversed counterclockwise. With the third formula,
$$
\begin{aligned}
\operatorname{area}
&= \frac{1}{2} \int_0^{2\pi} \bigl( a \cos t \cdot b \cos t - b \sin t \cdot (-a \sin t) \bigr) \, dt \\[6pt]
&= \frac{ab}{2} \int_0^{2\pi} (\cos^2 t + \sin^2 t) \, dt = \pi a b .
\end{aligned}
$$
For $a = b = R$ one recovers the **area of the disk** $\pi R^2$.
:::
