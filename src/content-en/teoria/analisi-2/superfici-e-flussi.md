---
titolo: Surfaces, fluxes and the theorems of Gauss and Stokes
sommario: Regular parametric surfaces, normal vector and area, surface integrals and flux of a field, divergence and curl, the divergence theorem and Stokes' theorem.
---

## Parametric surfaces

:::definizione{#superficie-parametrica titolo="Parametric surface"}
A **parametric surface** is a map $\mathbf{r} : D \subseteq \mathbb{R}^2 \to \mathbb{R}^3$ of class $C^1$,
$$
\mathbf{r}(u, v) = \bigl( x(u, v),\; y(u, v),\; z(u, v) \bigr), \qquad (u, v) \in D,
$$
with $D$ closed and bounded, the union of a connected open set and its boundary. The image $\Sigma = \mathbf{r}(D)$ is called the **trace** of the surface. A curve depends on one parameter, therefore its trace is a one-dimensional object; a surface depends on two parameters and its trace is a two-dimensional object in space. Fixing $v = v_0$, the map $u \mapsto \mathbf{r}(u, v_0)$ is a curve drawn on the surface, called a **coordinate line**; the same holds with $u = u_0$ fixed.
:::

:::esempio{titolo="Sphere and cylinder"}
The sphere centered at the origin with radius $R$ is parametrized by **spherical coordinates**
$$
\mathbf{r}(\varphi, \theta) = \bigl( R \sin\varphi \cos\theta,\; R \sin\varphi \sin\theta,\; R \cos\varphi \bigr),
\qquad (\varphi, \theta) \in [0, \pi] \times [0, 2\pi],
$$
where $\varphi$ is the colatitude measured from the $z$-axis and $\theta$ the longitude. The lateral surface of the cylinder $x^2 + y^2 = R^2$ with $0 \leq z \leq h$ is parametrized by
$$
\mathbf{r}(\theta, t) = \bigl( R \cos\theta,\; R \sin\theta,\; t \bigr),
\qquad (\theta, t) \in [0, 2\pi] \times [0, h].
$$
These two parametrizations appear in most exercises on areas and fluxes.

::grafico{xmin=-0.5 xmax=5.5 ymin=-0.6 ymax=7.3 nomi="φ,θ" area="6.2832;0;0;3.1416" segmenti="1.2,0,1.2,6.2832;0,2,3.1416,2;3.1416,0,3.1416,6.2832;0,6.2832,3.1416,6.2832" etichette="1.3,6.7,φ = φ₀;3.3,2.1,θ = θ₀" titolo="The parameter rectangle $[0, \pi] \times [0, 2\pi]$ of the sphere: the segment $\varphi = \varphi_0$ becomes a parallel, the segment $\theta = \theta_0$ a meridian"}

:::

:::definizione{#superficie-regolare titolo="Regular surface"}
The derivative vectors of the parametrization are
$$
\mathbf{r}_u = \left( \frac{\partial x}{\partial u},\; \frac{\partial y}{\partial u},\; \frac{\partial z}{\partial u} \right),
\qquad
\mathbf{r}_v = \left( \frac{\partial x}{\partial v},\; \frac{\partial y}{\partial v},\; \frac{\partial z}{\partial v} \right).
$$
The surface is **regular** if $\mathbf{r}$ is injective at the interior points of $D$ and if
$$
\mathbf{r}_u \wedge \mathbf{r}_v \neq \mathbf{0} \qquad \text{at the interior points of } D.
$$
The vector $\mathbf{r}_u$ is tangent to the coordinate line with $v$ fixed, the vector $\mathbf{r}_v$ to the one with $u$ fixed. The condition $\mathbf{r}_u \wedge \mathbf{r}_v \neq \mathbf{0}$ says that the two tangent vectors are *not* parallel, so at every interior point the surface has a well-defined **tangent plane**, with no cusps or edges. All the formulas of this chapter, from area to flux, are built with the vector $\mathbf{r}_u \wedge \mathbf{r}_v$, therefore regularity is the hypothesis present in every statement.
:::

:::esempio{titolo="Regularity of the sphere"}
For the sphere of radius $R$ we compute $\lVert \mathbf{r}_\varphi \wedge \mathbf{r}_\theta \rVert = R^2 \sin\varphi$, which vanishes *only* for $\varphi = 0$ and $\varphi = \pi$, that is, at the two poles, which are images of points on the boundary of the parameter rectangle. At the interior points the regularity condition is **satisfied**.
:::

## Normal vector and tangent plane

:::definizione{#vettore-normale titolo="Normal vector"}
Let $\Sigma$ be a regular surface and $P_0 = \mathbf{r}(u_0, v_0)$ a point corresponding to $(u_0, v_0)$ interior to $D$. The **normal vector** to $\Sigma$ at $P_0$ is
$$
\mathbf{N}(u_0, v_0) = \mathbf{r}_u(u_0, v_0) \wedge \mathbf{r}_v(u_0, v_0),
$$
and the **unit normal vector** is $\mathbf{n} = \dfrac{\mathbf{N}}{\lVert \mathbf{N} \rVert}$. The cross product is orthogonal to both factors, so $\mathbf{N}$ is orthogonal to the two tangent vectors $\mathbf{r}_u$ and $\mathbf{r}_v$, therefore it is **orthogonal to the surface** at $P_0$. Computing $\mathbf{N}$ is the first step of almost every exercise: its direction gives the tangent plane, its norm the area element, its orientation the orientation in flux computations.
:::

:::definizione{#piano-tangente titolo="Tangent plane to a surface"}
The **tangent plane** to $\Sigma$ at $P_0 = (x_0, y_0, z_0)$ is the plane through $P_0$ orthogonal to $\mathbf{N} = (N_1, N_2, N_3)$, with equation
$$
N_1 (x - x_0) + N_2 (y - y_0) + N_3 (z - z_0) = 0 .
$$
The tangent plane contains the tangent vectors to *all* the curves drawn on the surface and passing through $P_0$, so it approximates the surface near the point just as the tangent line approximates the graph of a function of one variable.
:::

:::esempio
For $\mathbf{r}(u, v) = (u \cos v,\; u \sin v,\; 2v)$ at the point $(u_0, v_0) = \left(1, \dfrac{\pi}{2}\right)$ we have $P_0 = (0, 1, \pi)$, $\mathbf{r}_u = (0, 1, 0)$, $\mathbf{r}_v = (-1, 0, 2)$, so
$$
\mathbf{N} = \mathbf{r}_u \wedge \mathbf{r}_v = (2,\; 0,\; 1),
$$
and the **tangent plane** has equation $2x + (z - \pi) = 0$, that is, $2x + z = \pi$.
:::

:::definizione{#superficie-cartesiana titolo="Cartesian surface"}
The graph of a function $f : D \subseteq \mathbb{R}^2 \to \mathbb{R}$ of class $C^1$ is a surface, called **Cartesian**, with the parametrization
$$
\mathbf{r}(x, y) = \bigl( x,\; y,\; f(x, y) \bigr), \qquad (x, y) \in D .
$$
From $\mathbf{r}_x = (1, 0, f_x)$ and $\mathbf{r}_y = (0, 1, f_y)$ we obtain
$$
\mathbf{N} = \mathbf{r}_x \wedge \mathbf{r}_y = \bigl( -f_x,\; -f_y,\; 1 \bigr),
\qquad
\lVert \mathbf{N} \rVert = \sqrt{1 + f_x^2 + f_y^2} .
$$
The third component of $\mathbf{N}$ equals $1 > 0$, so a Cartesian surface is *always* **regular** and its normal vector **points upward**. The resulting tangent plane, $z = f(x_0, y_0) + f_x (x - x_0) + f_y (y - y_0)$, coincides with the tangent plane introduced in the chapter on differential calculus for differentiable functions.

::grafico{xmin=-2 xmax=2.4 ymin=-0.6 ymax=2.8 uguale=1 nomi="x,z" f="2-x^2" vettori="0.7,1.51,1.4,2.01,N;0.7,1.51,1.2,0.81,rₓ" punti="0.7,1.51" titolo="Cross-section with the plane $y = 0$ of the graph of $f(x, y) = 2 - x^2$: the tangent vector $\mathbf{r}_x$ and the normal vector $\mathbf{N}$, which has third component $1$ and points upward"}

:::

## Area of a surface

:::definizione{#area-di-una-superficie titolo="Area of a surface"}
The **area** of a regular surface $\Sigma = \mathbf{r}(D)$ is
$$
\operatorname{Area}(\Sigma) = \iint_D \lVert \mathbf{r}_u \wedge \mathbf{r}_v \rVert \, du \, dv .
$$
The definition arises from approximating the surface with parallelograms: a rectangle with sides $du$ and $dv$ in the parameter plane is mapped, to first order, to the parallelogram with sides $\mathbf{r}_u \, du$ and $\mathbf{r}_v \, dv$, whose area is $\lVert \mathbf{r}_u \wedge \mathbf{r}_v \rVert \, du \, dv$, by the property of the cross product. The quantity $d\sigma = \lVert \mathbf{r}_u \wedge \mathbf{r}_v \rVert \, du \, dv$ is called the **area element**. The value of the integral does *not* depend on the parametrization chosen for the surface, by the change of variables formula for double integrals.
:::

:::esempio{titolo="Area of the sphere"}
For the sphere of radius $R$ we have $\lVert \mathbf{r}_\varphi \wedge \mathbf{r}_\theta \rVert = R^2 \sin\varphi$, so
$$
\operatorname{Area} = \int_0^{2\pi} \! \int_0^{\pi} R^2 \sin\varphi \, d\varphi \, d\theta
= 2\pi R^2 \bigl[ -\cos\varphi \bigr]_0^{\pi} = 4\pi R^2 .
$$
:::

:::teorema{#area-superficie-cartesiana titolo="Area of a Cartesian surface"}
If $\Sigma$ is the graph of $f : D \to \mathbb{R}$ of class $C^1$, then
$$
\operatorname{Area}(\Sigma) = \iint_D \sqrt{1 + f_x^2 + f_y^2} \; dx \, dy .
$$
The formula follows from the definition of area, since for the Cartesian parametrization the norm of the normal vector is $\sqrt{1 + f_x^2 + f_y^2}$. The factor under the square root measures **how steeply the graph is inclined** with respect to the $xy$-plane: where $f$ is constant the root equals $1$ and the area coincides with that of the projection, where the graph is steep the root is large.
:::

::::teorema{#area-superficie-di-rotazione titolo="Area of a surface of revolution"}
Let $\gamma$ be the regular curve in the half-plane $\{ x \geq 0,\, y = 0 \}$ with equations $x = g(t)$, $z = h(t)$ for $t \in [a, b]$, $g \geq 0$ and $g, h$ of class $C^1$. The surface obtained by rotating $\gamma$ one full turn about the $z$-axis has area
$$
\operatorname{Area}(\Sigma) = 2\pi \int_a^b g(t) \, \sqrt{g'(t)^2 + h'(t)^2} \; dt .
$$
The area is the integral of the **length of the circle** described by each point of the curve, $2\pi g(t)$, with respect to the arc length element of the curve. The formula applies to cones, truncated cones, paraboloids and spherical caps without repeating the computation of the cross product each time.

::grafico{xmin=-2.4 xmax=2.6 ymin=-0.4 ymax=3.4 uguale=1 nomi="x,z" curve="1+0.4*sin(2*t),t,0,3;-1-0.4*sin(2*t),t,0,3" segmenti="-1.2702,1.2,1.2702,1.2" punti="1.2702,1.2,pieno,P" etichette="0.35,1.32,g(t);1.15,2.6,γ" titolo="Cross-section with the plane $y = 0$ of a surface of revolution, with $h(t) = t$: the point $P = (g(t), h(t))$ of the curve $\gamma$ describes about the $z$-axis a circle of radius $g(t)$"}

:::dimostrazione
The surface of revolution is parametrized by
$$
\mathbf{r}(t, \theta) = \bigl( g(t) \cos\theta,\; g(t) \sin\theta,\; h(t) \bigr),
\qquad (t, \theta) \in [a, b] \times [0, 2\pi].
$$
The derivative vectors are $\mathbf{r}_t = (g' \cos\theta,\; g' \sin\theta,\; h')$ and $\mathbf{r}_\theta = (-g \sin\theta,\; g \cos\theta,\; 0)$, so
$$
\mathbf{r}_t \wedge \mathbf{r}_\theta = \bigl( -g\, h' \cos\theta,\; -g\, h' \sin\theta,\; g\, g' \bigr),
\qquad
\lVert \mathbf{r}_t \wedge \mathbf{r}_\theta \rVert = g \sqrt{g'^2 + h'^2} .
$$
The integrand does *not* depend on $\theta$, therefore the double integral in the definition of area reduces to the **product** of $2\pi$ and the integral in $t$, which is the formula in the statement.
:::
::::

## Surface integrals of scalar functions

:::definizione{#integrale-di-superficie titolo="Surface integral"}
Let $\Sigma = \mathbf{r}(D)$ be a regular surface and $f : \Sigma \to \mathbb{R}$ a continuous function. The **surface integral** of $f$ over $\Sigma$ is
$$
\iint_\Sigma f \, d\sigma = \iint_D f\bigl( \mathbf{r}(u, v) \bigr) \, \lVert \mathbf{r}_u \wedge \mathbf{r}_v \rVert \, du \, dv .
$$
The computation always follows the same scheme: we substitute the parametrization into the function, multiply by the norm of the normal vector and integrate over the parameter domain. For $f = 1$ we recover the area of the surface. The value does not depend on the parametrization. If $f$ is the surface density of a lamina shaped like $\Sigma$, the integral is the **mass** of the lamina; the same integral is used to compute centroids and moments of inertia of material surfaces.
:::

:::esempio
For $\Sigma$ the portion of the plane $z = 1 - x - y$ above the triangle $T$ with vertices $(0,0)$, $(1,0)$, $(0,1)$ we have $d\sigma = \sqrt{1 + 1 + 1} \, dx \, dy = \sqrt{3} \, dx \, dy$, so
$$
\iint_\Sigma z \, d\sigma = \sqrt{3} \iint_T (1 - x - y) \, dx \, dy = \frac{\sqrt{3}}{6} .
$$
:::

## Oriented surfaces and flux

:::definizione{#superficie-orientata titolo="Oriented surface"}
A regular surface $\Sigma$ is **oriented** when a continuous field of unit normal vectors $\mathbf{n}$ has been chosen on it. At each point there are two possible unit normal vectors, opposite to each other, so an orientable surface admits two orientations. A regular parametrization induces the orientation given by
$$
\mathbf{n} = \frac{\mathbf{r}_u \wedge \mathbf{r}_v}{\lVert \mathbf{r}_u \wedge \mathbf{r}_v \rVert} .
$$
For a closed surface, that is, a surface enclosing a bounded region of space such as a sphere or the boundary of a cube, the standard orientation is that of the **outward unit normal**, pointing out of the enclosed region. For a Cartesian surface the orientation induced by the parametrization $\mathbf{r}(x,y) = (x, y, f(x,y))$ has positive third component and is called the **upward orientation**.

::grafico{xmin=-2.2 xmax=2.8 ymin=-2 ymax=2.4 uguale=1 nomi="x,z" curve="1.5*cos(t),1.5*sin(t),0,6.29" vettori="0.964,1.149,1.607,1.915,n;0.964,1.149,0.321,0.383,−n" punti="0.964,1.149" titolo="Cross-section of a sphere with a plane through the center: at each point there are two opposite unit normal vectors; for a closed surface we choose $\mathbf{n}$, pointing out of the enclosed region"}

:::

:::osservazione
There exist **non-orientable surfaces**, on which *no* continuous choice of the unit normal vector is possible: the classic example is the **Möbius strip**, a strip glued after a half twist, along which the unit normal vector carried continuously returns to the starting point with the opposite orientation. The surfaces in the exercises, graphs, spheres, cylinders and portions of them, are all orientable.
:::

:::definizione{#flusso titolo="Flux of a vector field"}
Let $\Sigma$ be a regular surface oriented by the unit normal vector $\mathbf{n}$ and let $\mathbf{F} : A \subseteq \mathbb{R}^3 \to \mathbb{R}^3$ be a continuous vector field defined on an open set containing $\Sigma$. The **flux** of $\mathbf{F}$ through $\Sigma$ is
$$
\Phi_\Sigma(\mathbf{F}) = \iint_\Sigma \mathbf{F} \cdot \mathbf{n} \; d\sigma
= \iint_D \mathbf{F}\bigl( \mathbf{r}(u, v) \bigr) \cdot \bigl( \mathbf{r}_u \wedge \mathbf{r}_v \bigr) \, du \, dv ,
$$
where the second equality holds when the parametrization induces the chosen orientation; otherwise the flux **changes sign**. In passing from the first to the second expression, the norm $\lVert \mathbf{r}_u \wedge \mathbf{r}_v \rVert$ of the area element cancels with the denominator of the unit vector, so in the actual computation we integrate the dot product of the field with the *non*-normalized normal vector. If $\mathbf{F}$ is the velocity field of a fluid, the flux measures the volume of fluid crossing $\Sigma$ per unit time, counted with positive sign in the direction of $\mathbf{n}$.
:::

:::teorema{#flusso-superficie-cartesiana titolo="Flux through a Cartesian surface"}
If $\Sigma$ is the graph of $f : D \to \mathbb{R}$ of class $C^1$ oriented upward and $\mathbf{F} = (F_1, F_2, F_3)$ is continuous, then
$$
\Phi_\Sigma(\mathbf{F}) = \iint_D \bigl( -F_1\, f_x - F_2\, f_y + F_3 \bigr) \, dx \, dy ,
$$
where the components of $\mathbf{F}$ are evaluated at $(x, y, f(x, y))$. The formula follows from the definition of flux, since for the Cartesian parametrization the normal vector is $(-f_x, -f_y, 1)$. It reduces the flux through a graph to a **double integral over the base domain**, without writing the parametrization explicitly.
:::

## Divergence and curl

:::definizione{#divergenza titolo="Divergence"}
Let $\mathbf{F} = (F_1, F_2, F_3)$ be a vector field of class $C^1$ on an open set $A \subseteq \mathbb{R}^3$. The **divergence** of $\mathbf{F}$ is the scalar function
$$
\operatorname{div} \mathbf{F} = \frac{\partial F_1}{\partial x} + \frac{\partial F_2}{\partial y} + \frac{\partial F_3}{\partial z} .
$$
A field with identically zero divergence is called **solenoidal**. The geometric meaning of the divergence is given by the **divergence theorem**: its integral over a region is the outward flux through the boundary, so $\operatorname{div} \mathbf{F}(P) > 0$ indicates that more flux leaves a neighborhood of $P$ than enters it. For the radial field $\mathbf{F}(x, y, z) = (x, y, z)$ we have $\operatorname{div} \mathbf{F} = 3$ at every point.

::grafico{xmin=-3.2 xmax=3.2 ymin=-3 ymax=3 uguale=1 curve="cos(t),sin(t),0,6.29" vettori="0.59,0.12,0.88,0.18;1,0.67,1.5,1;1.77,0.35,2.65,0.53;0.33,0.5,0.5,0.75;0.23,1.18,0.35,1.77;1,1.5,1.5,2.24;-0.12,0.59,-0.18,0.88;-0.67,1,-1,1.5;-0.35,1.77,-0.53,2.65;-0.5,0.33,-0.75,0.5;-1.18,0.23,-1.77,0.35;-1.5,1,-2.24,1.5;-0.59,-0.12,-0.88,-0.18;-1,-0.67,-1.5,-1;-1.77,-0.35,-2.65,-0.53;-0.33,-0.5,-0.5,-0.75;-0.23,-1.18,-0.35,-1.77;-1,-1.5,-1.5,-2.24;0.12,-0.59,0.18,-0.88;0.67,-1,1,-1.5;0.35,-1.77,0.53,-2.65;0.5,-0.33,0.75,-0.5;1.18,-0.23,1.77,-0.35;1.5,-1,2.24,-1.5" titolo="The radial field $\mathbf{F}(x, y, z) = (x, y, z)$ in the plane $z = 0$: the arrows point out of every circle centered at the origin, in agreement with $\operatorname{div} \mathbf{F} = 3 > 0$"}

:::

:::definizione{#rotore titolo="Curl"}
The **curl** of a field $\mathbf{F} = (F_1, F_2, F_3)$ of class $C^1$ is the vector field
$$
\operatorname{rot} \mathbf{F} =
\left( \frac{\partial F_3}{\partial y} - \frac{\partial F_2}{\partial z},\;
\frac{\partial F_1}{\partial z} - \frac{\partial F_3}{\partial x},\;
\frac{\partial F_2}{\partial x} - \frac{\partial F_1}{\partial y} \right),
$$
which is remembered through the formal expansion of the determinant
$$
\operatorname{rot} \mathbf{F} = \nabla \wedge \mathbf{F} =
\begin{vmatrix}
\mathbf{i} & \mathbf{j} & \mathbf{k} \\[4pt]
\dfrac{\partial}{\partial x} & \dfrac{\partial}{\partial y} & \dfrac{\partial}{\partial z} \\[6pt]
F_1 & F_2 & F_3
\end{vmatrix} .
$$
A field with identically zero curl is called **irrotational**. The meaning of the curl is given by **Stokes' theorem**: the flux of the curl through a surface is the circulation of the field along the boundary, so the curl measures the tendency of the field to locally rotate the fluid that follows it. For the field $\mathbf{F} = (-y, x, 0)$, which rotates about the $z$-axis, we compute $\operatorname{rot} \mathbf{F} = (0, 0, 2)$: a vector directed along the axis of rotation.
:::

::::teorema{#proprieta-divergenza-rotore titolo="Properties of divergence and curl"}
Divergence and curl are **linear**. Moreover, for every function $f$ of class $C^2$ and every field $\mathbf{F}$ of class $C^2$ on an open set $A \subseteq \mathbb{R}^3$ the following identities hold:
$$
\operatorname{rot} \bigl( \nabla f \bigr) = \mathbf{0},
\qquad
\operatorname{div} \bigl( \operatorname{rot} \mathbf{F} \bigr) = 0 .
$$
The first identity says that *every* gradient field is **irrotational**; since conservative fields are gradient fields, computing the curl is the preliminary test for conservativeness used in the chapter on vector fields. The second says that every curl is **solenoidal**, so a field with nonzero divergence is not the curl of any $C^2$ field.

:::dimostrazione
For the first identity, the first component of $\operatorname{rot}(\nabla f)$ is
$$
\frac{\partial}{\partial y} \frac{\partial f}{\partial z} - \frac{\partial}{\partial z} \frac{\partial f}{\partial y}
= f_{zy} - f_{yz} = 0 ,
$$
since $f$ is of class $C^2$ and **Schwarz's theorem** applies; the other two components vanish in the same way. For the second identity we compute
$$
\operatorname{div} \bigl( \operatorname{rot} \mathbf{F} \bigr)
= \frac{\partial}{\partial x} \left( \frac{\partial F_3}{\partial y} - \frac{\partial F_2}{\partial z} \right)
+ \frac{\partial}{\partial y} \left( \frac{\partial F_1}{\partial z} - \frac{\partial F_3}{\partial x} \right)
+ \frac{\partial}{\partial z} \left( \frac{\partial F_2}{\partial x} - \frac{\partial F_1}{\partial y} \right),
$$
and the six mixed second derivatives **cancel in pairs**, again by Schwarz's theorem.
:::
::::

:::richiamo{titolo="Schwarz's theorem"}
If $f$ is of class $C^2$ on an open set, then the mixed second derivatives **coincide**: $f_{xy} = f_{yx}$, and the same holds for every pair of variables.
:::

:::attenzione
An irrotational field is *not* necessarily **conservative**: the field $\mathbf{F} = \left( \dfrac{-y}{x^2 + y^2},\, \dfrac{x}{x^2 + y^2},\, 0 \right)$ has zero curl on its domain but circulation $2\pi$ along a circle around the $z$-axis. The converse implication requires a hypothesis on the domain, and we refer to the chapter on vector fields.
:::

## The divergence theorem

:::definizione{#dominio-regolare titolo="Regular domain in space"}
A closed and bounded set $V \subset \mathbb{R}^3$ is a **regular domain** if its boundary $\partial V$ is the union of a finite number of regular surfaces, oriented with the outward unit normal $\mathbf{n}$, pointing out of $V$. The ball, the cube, the solid cylinder and the regions lying between two graphs are regular domains. The divergence theorem is stated on these sets.
:::

::::teorema{#teorema-della-divergenza titolo="Divergence theorem (Gauss)"}
Let $V \subset \mathbb{R}^3$ be a regular domain with boundary $\partial V$ oriented with the outward unit normal, and let $\mathbf{F}$ be a vector field of class $C^1$ on an open set containing $V$. Then
$$
\iint_{\partial V} \mathbf{F} \cdot \mathbf{n} \; d\sigma
= \iiint_V \operatorname{div} \mathbf{F} \; dx \, dy \, dz .
$$
The theorem turns a **flux** into a **triple integral** and vice versa. In exercises it is convenient when the surface is closed and the divergence is simple: the outward flux of the radial field $\mathbf{F} = (x, y, z)$ through *any* closed surface equals $3 \operatorname{Vol}(V)$, without any parametrization.

:::dimostrazione
We prove the identity for the third component,
$$
\iint_{\partial V} F_3 \, \mathbf{k} \cdot \mathbf{n} \; d\sigma = \iiint_V \frac{\partial F_3}{\partial z} \, dx \, dy \, dz ,
$$
in the case where $V$ is normal with respect to the $z$-axis, that is,
$$
V = \bigl\{ (x, y, z) : (x, y) \in D,\; g(x, y) \leq z \leq h(x, y) \bigr\}
$$
with $g, h$ of class $C^1$ on $D$. By the reduction formulas for triple integrals, the right-hand side is
$$
\iint_D \left( \int_{g(x,y)}^{h(x,y)} \frac{\partial F_3}{\partial z} \, dz \right) dx \, dy
= \iint_D \Bigl( F_3\bigl(x, y, h(x,y)\bigr) - F_3\bigl(x, y, g(x,y)\bigr) \Bigr) \, dx \, dy ,
$$
by the **fundamental theorem of calculus** applied to the variable $z$. The left-hand side splits over the three parts of the boundary. On the upper graph $z = h(x, y)$ the outward normal points upward, so it is parallel to $(-h_x, -h_y, 1)$ and the flux of $F_3 \mathbf{k}$ equals $\iint_D F_3(x, y, h(x,y)) \, dx \, dy$, by the formula for the flux through a Cartesian surface. On the lower graph $z = g(x, y)$ the outward normal points downward, therefore the flux equals $-\iint_D F_3(x, y, g(x,y)) \, dx \, dy$. On the lateral surface, where $(x, y)$ runs along the boundary of $D$, the unit normal vector is horizontal, so $\mathbf{k} \cdot \mathbf{n} = 0$ and the contribution is **zero**. The sum of the three contributions **coincides with the right-hand side**, and this proves the identity for the third component. If $V$ is also normal with respect to the $x$- and $y$-axes, the analogous identities for $F_1$ and $F_2$ are proved in the same way and the sum of the three gives the theorem. For an arbitrary regular domain we decompose $V$ into a finite number of normal domains: the fluxes through the interior cutting surfaces cancel in pairs, since the two adjacent parts cross them with opposite normals.
:::
::::

:::richiamo{titolo="Flux through a Cartesian surface"}
If $\Sigma$ is the graph of $f$ over $D$ oriented upward, then $\Phi_\Sigma(\mathbf{F}) = \displaystyle\iint_D \bigl( -F_1 f_x - F_2 f_y + F_3 \bigr) \, dx \, dy$.
:::

:::osservazione
The divergence theorem applies *also* to non-closed surfaces, by **closing them**. If $\Sigma$ is a surface with boundary, we add an **auxiliary surface** $\Sigma'$ so that $\Sigma \cup \Sigma'$ encloses a regular domain $V$; then the flux through $\Sigma$ is the integral of the divergence over $V$ minus the flux through $\Sigma'$, with the outward orientations. The technique is convenient when $\Sigma'$ is a flat disk, on which the flux is computed in a few lines.
:::

## Stokes' theorem

:::definizione{#orientazione-coerente titolo="Compatible orientation of surface and boundary"}
Let $\Sigma$ be a regular surface oriented by the unit vector $\mathbf{n}$, whose boundary $\partial\Sigma$ is a piecewise regular closed curve. The boundary is **oriented compatibly** with $\Sigma$ if, for an observer standing along $\mathbf{n}$ and walking along the boundary in the chosen direction, the surface stays on their **left**. For a Cartesian surface oriented upward, the compatible orientation of the boundary is counterclockwise as seen from above. Compatibility of the two orientations is a hypothesis of Stokes' theorem: reversing *only one* of the two changes the sign of the equality.
:::

::::teorema{#teorema-di-stokes titolo="Stokes' theorem (curl theorem)"}
Let $\Sigma$ be an oriented regular surface with boundary $\partial\Sigma$ oriented compatibly, and let $\mathbf{F}$ be a vector field of class $C^1$ on an open set containing $\Sigma$. Then
$$
\oint_{\partial\Sigma} \mathbf{F} \cdot d\mathbf{r}
= \iint_\Sigma \operatorname{rot} \mathbf{F} \cdot \mathbf{n} \; d\sigma .
$$
The **circulation** of a field along a closed curve in space is the **flux of the curl** through *any* oriented surface that has that curve as compatible boundary. In exercises the theorem is used in both directions: a complicated circulation becomes the flux of a curl that is often simple, and as the surface we choose the most convenient among those with the same boundary, usually a portion of a plane.

:::dimostrazione
For a Cartesian surface $z = f(x, y)$ over a domain $D$ of the plane, the line integral along $\partial\Sigma$ is rewritten, by substituting the parametrization of the boundary, as a line integral along the boundary of $D$ in the $xy$-plane; **Green's theorem** is applied to the latter, and a direct computation with the chain rule shows that the resulting integrand coincides with $\operatorname{rot} \mathbf{F} \cdot (-f_x, -f_y, 1)$, that is, with the integrand of the flux of the curl. The general case is obtained by decomposing the surface into Cartesian portions: along the interior cuts the circulations cancel in pairs, since each cut is traversed twice in opposite directions. Writing out all the steps requires only manipulations of derivatives but is lengthy, and we refer to the course's standard textbooks.
:::
::::

:::richiamo{titolo="Green's theorem"}
If $D \subset \mathbb{R}^2$ is a regular domain with boundary $\partial D$ traversed counterclockwise and $P, Q$ are of class $C^1$ on an open set containing $D$, then
$$
\oint_{\partial D} P \, dx + Q \, dy = \iint_D \left( \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} \right) dx \, dy .
$$
:::

:::osservazione{#green-caso-particolare}
Green's theorem is the **special case of Stokes' theorem** in which the surface is flat. Let $\Sigma = D$ be a regular domain in the plane $z = 0$ oriented with $\mathbf{n} = \mathbf{k}$, and let $\mathbf{F} = (P, Q, 0)$ with $P$ and $Q$ independent of $z$. The compatible boundary is the boundary of $D$ traversed counterclockwise, the circulation reduces to $\oint_{\partial D} P \, dx + Q \, dy$, and the flux of the curl reduces to
$$
\iint_D \operatorname{rot} \mathbf{F} \cdot \mathbf{k} \; d\sigma
= \iint_D \left( \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} \right) dx \, dy ,
$$
since the third component of the curl of $(P, Q, 0)$ is $Q_x - P_y$. Stokes' equality becomes **Green's formula**.
:::

:::osservazione
Stokes' theorem explains the link between irrotational fields and conservative fields. If $\operatorname{rot} \mathbf{F} = \mathbf{0}$ on an open set in which every closed curve is the boundary of a surface contained in the open set, then *every* circulation of $\mathbf{F}$ is zero, so the field is **conservative**. The condition on the domain and its consequences are treated in the chapter on vector fields.
:::
