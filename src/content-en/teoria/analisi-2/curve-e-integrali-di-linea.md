---
titolo: Curves and line integrals
sommario: Parametric curves in the plane and in space, regularity and tangent vector, length and arc length, line integrals of the first and second kind with applications to mass, center of mass and work.
---

## Parametric curves

:::definizione{#curva-parametrica titolo="Parametric curve and trace"}
A **parametric curve** is a continuous function $\gamma : [a, b] \to \mathbb{R}^2$ (plane curve) or $\gamma : [a, b] \to \mathbb{R}^3$ (space curve). In components one writes $\gamma(t) = (x(t), y(t))$ or $\gamma(t) = (x(t), y(t), z(t))$; the variable $t$ is called the parameter. The **trace** of $\gamma$ is the image $\gamma([a, b])$, that is, the set of points traversed. The curve is the *function*, not the set of points: the parametrization also contains the direction and the law by which the trace is traversed, and for this reason two different curves can have the same trace. All the integrals in this chapter are computed starting from a parametrization.
:::

:::esempio{titolo="Same trace, different parametrizations"}
The curves
$$
\gamma(t) = (\cos t, \sin t), \quad t \in [0, 2\pi],
\qquad
\delta(t) = (\cos 2t, \sin 2t), \quad t \in [0, \pi],
$$
have the **same trace**, the unit circle, traversed counterclockwise starting from the point $(1, 0)$. The second one traverses it in half the time, hence with twice the speed.

::grafico{xmin=-2.5 xmax=2.5 ymin=-1.5 ymax=2.5 uguale=1 curve="cos(t),sin(t),0,6.29" vettori="1,0,1,2,δ′(0);1,0,1,1,γ′(0)" punti="1,0" titolo="The unit circle: at the point $(1, 0)$ the velocity vector of $\delta$ is twice that of $\gamma$"}

:::

:::definizione{#curva-semplice-chiusa titolo="Simple curves and closed curves"}
A curve $\gamma : [a, b] \to \mathbb{R}^n$ is **closed** if $\gamma(a) = \gamma(b)$, that is, if the final point coincides with the initial one. It is **simple** if it does not pass twice through the same point, that is, if $\gamma$ is injective on $[a, b]$; for a closed curve injectivity is required on $[a, b)$, since the coincidence of the endpoints is part of the definition. The circle $(\cos t, \sin t)$ on $[0, 2\pi]$ is closed and simple. Simple closed curves bound regions of the plane and appear in the chapter on Green's theorem.

::grafico{xmin=-5 xmax=5 ymin=-1.8 ymax=2.2 uguale=1 curve="-3.2+1.1*cos(t),1.1*sin(t),0,6.29;t-0.1,0.9*sin(2.5*t),-1,1;3.2+1.4*sin(t),1.1*sin(2*t),0,6.29" punti="-1.1,-0.539;0.9,0.539" etichette="-4.6,1.6,closed and simple;-1.7,1.6,not closed;1.8,1.6,closed, not simple" titolo="A simple closed curve, a curve that is not closed and a closed curve that passes twice through the same point"}

:::

:::osservazione
The graph of a function $f : [a, b] \to \mathbb{R}$ is the trace of the curve $\gamma(t) = (t, f(t))$, called a **Cartesian curve**. Every result on parametric curves therefore also applies to graphs; for Cartesian curves the formulas of the chapter take a simpler form, because $x'(t) = 1$.
:::

## Regular curves and tangent vector

:::definizione{#curva-regolare titolo="Regular curve"}
A curve $\gamma : [a, b] \to \mathbb{R}^n$ is **regular** if it is of class $C^1$ and $\gamma'(t) \neq \mathbf{0}$ for *every* $t \in (a, b)$, where
$$
\gamma'(t) = (x'(t), y'(t)) \qquad \text{or} \qquad \gamma'(t) = (x'(t), y'(t), z'(t)).
$$
If $\gamma(t)$ is the position of a point at time $t$, the vector $\gamma'(t)$ is its velocity. The condition $\gamma'(t) \neq \mathbf{0}$ guarantees that at every point the curve has a well-defined direction of motion, hence a tangent line; it is this condition that makes the construction of line integrals possible.
:::

:::definizione{#vettore-tangente titolo="Tangent vector and tangent line"}
Let $\gamma$ be regular and let $t_0 \in (a, b)$. The vector $\gamma'(t_0)$ is called the **tangent vector** to $\gamma$ at $\gamma(t_0)$; the **unit tangent vector** is
$$
T(t_0) = \frac{\gamma'(t_0)}{\lVert \gamma'(t_0) \rVert}.
$$
The **tangent line** to the curve at the point $\gamma(t_0)$ is the line through $\gamma(t_0)$ with direction $\gamma'(t_0)$, with parametric equation
$$
r(s) = \gamma(t_0) + s\, \gamma'(t_0), \qquad s \in \mathbb{R}.
$$
The unit tangent vector indicates the direction and the orientation of travel; it appears in the relation between the two kinds of line integrals.

::grafico{xmin=-3 xmax=3.5 ymin=-1.5 ymax=2.2 uguale=1 curve="2*cos(t),sin(t),0,6.29;1.414-1.414*t,0.707+0.707*t,-1.2,1.6" vettori="1.414,0.707,0,1.414,γ′(t₀)" punti="1.414,0.707,pieno,γ(t₀)" titolo="The ellipse $\gamma(t) = (2\cos t, \sin t)$ with the tangent vector and the tangent line at the point $\gamma(t_0)$, for $t_0 = \dfrac{\pi}{4}$"}

:::

:::esempio{titolo="The circular helix"}
The curve $\gamma(t) = (\cos t, \sin t, t)$, $t \in [0, 2\pi]$, is the circular helix: its projection onto the $xy$-plane traverses the unit circle while the height increases linearly. Since
$$
\gamma'(t) = (-\sin t, \cos t, 1), \qquad \lVert \gamma'(t) \rVert = \sqrt{\sin^2 t + \cos^2 t + 1} = \sqrt{2},
$$
the tangent vector is *never* zero, hence the curve is **regular**. The constant norm of the velocity vector makes the helix a recurring example in exercises on lengths and line integrals.
:::

:::definizione{#curva-regolare-a-tratti titolo="Piecewise regular curve"}
A continuous curve $\gamma : [a, b] \to \mathbb{R}^n$ is **piecewise regular** if there exists a partition $a = t_0 < t_1 < \dots < t_k = b$ such that the restriction of $\gamma$ to each interval $[t_{i-1}, t_i]$ is regular. Polygonal paths, formed by consecutive segments, and concatenations of arcs of regular curves are piecewise regular. Length and line integrals of a piecewise regular curve are computed by **adding the contributions** of the individual pieces; at the junction points the curve may have a corner.
:::

:::esempio{titolo="A cusp"}
The curve $\gamma(t) = (t^2, t^3)$, $t \in [-1, 1]$, has $\gamma'(t) = (2t, 3t^2)$, which vanishes for $t = 0$. The curve **is not regular** on $[-1, 1]$, but it is **piecewise regular**, with the partition into the two intervals $[-1, 0]$ and $[0, 1]$. The trace has a cusp at the origin: the curve reaches the origin moving down along the branch with $y < 0$ and leaves along the branch with $y > 0$, with a reversal of the vertical direction of motion.

::grafico{xmin=-0.8 xmax=1.8 ymin=-1.2 ymax=1.2 uguale=1 curve="t^2,t^3,-1,1" vettori="0.72,-0.61,0.38,-0.18;0.72,0.61,1.06,1.05" punti="0,0;1,-1,pieno,γ(−1);1,1,pieno,γ(1)" titolo="The curve $\gamma(t) = (t^2, t^3)$: the velocity vanishes for $t = 0$ and the trace has a cusp at the origin"}

:::

:::attenzione
The vanishing of $\gamma'$ at a point does *not* imply that the trace has a singular point there. The curve $\gamma(t) = (t^3, t^3)$, $t \in [-1, 1]$, has $\gamma'(0) = (0, 0)$, but its trace is the segment of the line $y = x$ between $(-1, -1)$ and $(1, 1)$, which has no corners: the same segment is the trace of the regular curve $\delta(t) = (t, t)$. Regularity is a **property of the parametrization**, not of the trace.
:::

## Equivalent curves and orientation

:::definizione{#curve-equivalenti titolo="Equivalent curves"}
Two regular curves $\gamma : [a, b] \to \mathbb{R}^n$ and $\delta : [c, d] \to \mathbb{R}^n$ are **equivalent** if there exists a function $\varphi : [c, d] \to [a, b]$ of class $C^1$, bijective and with $\varphi'(u) \neq 0$ for every $u$, such that
$$
\delta(u) = \gamma(\varphi(u)) \qquad \text{for every } u \in [c, d].
$$
The function $\varphi$ is called a **change of parameter** and the curve $\delta$ a **reparametrization** of $\gamma$. Two equivalent curves have the same trace, traversed with different laws. The notion serves to give meaning to line integrals: the geometric and physical quantities of the chapter, such as length and mass, do *not* depend on the chosen parametrization, and this independence must be verified.
:::

:::definizione{#orientazione titolo="Orientation and opposite curve"}
Since $\varphi'$ is continuous and never zero on an interval, its sign is constant. If $\varphi' > 0$, the two equivalent curves traverse the trace in the same direction and are said to have the **same orientation**; if $\varphi' < 0$, they traverse it in opposite directions. The **opposite curve** of $\gamma : [a, b] \to \mathbb{R}^n$ is
$$
-\gamma(t) = \gamma(a + b - t), \qquad t \in [a, b],
$$
which traverses the same trace from the final point to the initial one. Orientation is *irrelevant* for integrals of the first kind and determines the sign of those of the second kind, as specified at the end of the chapter.

::grafico{xmin=-1.8 xmax=1.8 ymin=-0.5 ymax=1.8 uguale=1 curve="cos(t),sin(t),0,3.1416" vettori="0.707,0.707,0,1.414,γ′;0.707,0.707,1.414,0,(−γ)′" punti="1,0,pieno,γ(a);-1,0,pieno,γ(b)" titolo="A curve and its opposite: same trace, tangent vectors pointing in opposite directions"}

:::

## Length of a curve

:::definizione{#lunghezza-di-una-curva titolo="Length of a curve"}
Let $\gamma : [a, b] \to \mathbb{R}^n$ be a curve. To each partition $a = t_0 < t_1 < \dots < t_k = b$ one associates the polygonal path with vertices $\gamma(t_0), \gamma(t_1), \dots, \gamma(t_k)$, whose length is the sum of the lengths of the segments. The curve is **rectifiable** if the set of the lengths of these polygonal paths is bounded above, and in that case its **length** $L(\gamma)$ is the supremum of this set. The definition formalizes the idea of approximating the curve with ever finer polygonal paths; for the actual computation one uses the integral formula of the following theorem.

::grafico{xmin=-0.5 xmax=4 ymin=-0.5 ymax=3.6 uguale=1 curve="3*cos(t),3*sin(t),0,1.5708" segmenti="3,0,2.598,1.5;2.598,1.5,1.5,2.598;1.5,2.598,0,3" punti="3,0,pieno,γ(t₀);2.598,1.5,pieno,γ(t₁);1.5,2.598,pieno,γ(t₂);0,3,pieno,γ(t₃)" titolo="An arc of a circle and an inscribed polygonal path: the length of the curve is the supremum of the lengths of these polygonal paths"}

:::

:::teorema{#formula-della-lunghezza titolo="Length formula"}
If $\gamma : [a, b] \to \mathbb{R}^n$ is piecewise regular, then $\gamma$ is **rectifiable** and
$$
L(\gamma) = \int_a^b \lVert \gamma'(t) \rVert \, dt ,
$$
that is, in components,
$$
L(\gamma) = \int_a^b \sqrt{x'(t)^2 + y'(t)^2} \, dt
\qquad \text{or} \qquad
L(\gamma) = \int_a^b \sqrt{x'(t)^2 + y'(t)^2 + z'(t)^2} \, dt .
$$
For a Cartesian curve $\gamma(t) = (t, f(t))$, $t \in [a, b]$, the formula becomes
$$
L(\gamma) = \int_a^b \sqrt{1 + f'(t)^2} \, dt .
$$
The proof compares the length of the inscribed polygonal paths with the integral of the velocity, and we refer to standard textbooks for it. The formula says that the length is the **integral of the magnitude of the velocity**, in agreement with the kinematic interpretation: distance traveled equals the integral of the speed.
:::

:::esempio{titolo="Length of the circle"}
For the circle of radius $r$, $\gamma(t) = (r \cos t, r \sin t)$ with $t \in [0, 2\pi]$, one has $\gamma'(t) = (-r \sin t, r \cos t)$, hence $\lVert \gamma'(t) \rVert = r$ and
$$
L(\gamma) = \int_0^{2\pi} r \, dt = 2\pi r ,
$$
in agreement with elementary geometry.
:::

::::teorema{#invarianza-della-lunghezza titolo="Invariance of length under reparametrization"}
If $\gamma$ and $\delta$ are equivalent regular curves, then $L(\gamma) = L(\delta)$. Length is therefore a **geometric property** of the curve, independent of the parametrization and of the direction of travel, and it can be computed with the most convenient parametrization.

:::dimostrazione
Let $\delta(u) = \gamma(\varphi(u))$ with $\varphi : [c, d] \to [a, b]$ a change of parameter and $\varphi' > 0$. By the **chain rule** $\delta'(u) = \gamma'(\varphi(u))\, \varphi'(u)$, hence $\lVert \delta'(u) \rVert = \lVert \gamma'(\varphi(u)) \rVert\, \varphi'(u)$. With the substitution $t = \varphi(u)$, $dt = \varphi'(u)\, du$, one obtains
$$
L(\delta) = \int_c^d \lVert \gamma'(\varphi(u)) \rVert\, \varphi'(u) \, du
= \int_a^b \lVert \gamma'(t) \rVert \, dt = L(\gamma).
$$
In the case $\varphi' < 0$ one has $\lVert \delta'(u) \rVert = -\lVert \gamma'(\varphi(u)) \rVert\, \varphi'(u)$ and the same substitution swaps the limits of integration, therefore the two minus signs cancel and the **conclusion does not change**.
:::
::::

:::attenzione
The formula measures the **path traveled** by the parametrization, *not* the length of the trace. The curve $\gamma(t) = (\cos t, \sin t)$ on $[0, 4\pi]$ traverses the unit circle twice and the formula returns $4\pi$, twice the length of the trace. Equality between the two quantities is guaranteed for **simple curves**.
:::

## Arc length

:::definizione{#ascissa-curvilinea titolo="Arc length"}
Let $\gamma : [a, b] \to \mathbb{R}^n$ be regular. The **arc length** function is
$$
s(t) = \int_a^t \lVert \gamma'(\tau) \rVert \, d\tau , \qquad t \in [a, b],
$$
that is, the length of the arc traversed from the initial time up to time $t$. By the fundamental theorem of calculus $s'(t) = \lVert \gamma'(t) \rVert > 0$, hence $s$ is strictly increasing and invertible from $[a, b]$ onto $[0, L(\gamma)]$. The reparametrization $\tilde{\gamma}(s) = \gamma(t(s))$, where $t(s)$ is the inverse, is called the **arc length parametrization** and has velocity of constant magnitude equal to $1$: the parameter coincides with the distance traveled along the curve. The expression $ds = \lVert \gamma'(t) \rVert \, dt$ is the **length element** and gives its name to the symbol $ds$ in line integrals.
:::

:::esempio
For the circle of radius $r$, $\gamma(t) = (r\cos t, r\sin t)$, one has $\lVert \gamma'(t) \rVert = r$, hence $s(t) = rt$ and $t(s) = \dfrac{s}{r}$. The arc length parametrization is
$$
\tilde{\gamma}(s) = \left( r\cos \frac{s}{r},\; r\sin \frac{s}{r} \right), \qquad s \in [0, 2\pi r],
$$
and indeed $\lVert \tilde{\gamma}'(s) \rVert = 1$ for *every* $s$.
:::

## Line integrals of the first kind

:::definizione{#integrale-prima-specie titolo="Line integral of the first kind"}
Let $\gamma : [a, b] \to \mathbb{R}^n$ be a regular curve and $f$ a scalar function continuous on the trace of $\gamma$. The **line integral of the first kind** of $f$ along $\gamma$ is
$$
\int_\gamma f \, ds = \int_a^b f(\gamma(t))\, \lVert \gamma'(t) \rVert \, dt .
$$
If $\gamma$ is piecewise regular, the integral is the sum of the integrals over the individual pieces. The computation always follows the same scheme: one substitutes the components of the parametrization into the function, computes $\lVert \gamma'(t) \rVert$ and integrates in $t$. For $f = 1$ the integral returns the length of the curve. With the same change of variable used for the length one verifies that the integral **does not depend on the parametrization** chosen among the equivalent ones.
:::

:::esempio
We compute $\displaystyle\int_\gamma y \, ds$ on the segment $\gamma(t) = (t, 2t)$, $t \in [0, 1]$, which joins the origin to the point $(1, 2)$. Since $\gamma'(t) = (1, 2)$ and $\lVert \gamma'(t) \rVert = \sqrt{5}$, one obtains
$$
\int_\gamma y \, ds = \int_0^1 2t \cdot \sqrt{5} \, dt = \sqrt{5}.
$$
:::

:::definizione{#massa-e-baricentro titolo="Mass and center of mass of a wire"}
A material wire is described by a piecewise regular curve $\gamma$ with a linear density $\delta(P) \geq 0$, continuous on the trace. The **mass** of the wire is
$$
m = \int_\gamma \delta \, ds ,
$$
and the **center of mass** is the point $G = (\bar{x}, \bar{y})$ with coordinates
$$
\bar{x} = \frac{1}{m} \int_\gamma x\, \delta \, ds , \qquad
\bar{y} = \frac{1}{m} \int_\gamma y\, \delta \, ds ,
$$
with the analogous third coordinate for space curves. If the wire is homogeneous, that is, $\delta$ is constant, the density cancels and the coordinates become $\bar{x} = \dfrac{1}{L} \displaystyle\int_\gamma x \, ds$, with $L$ the length of the curve. The center of mass of a wire does *not* in general belong to the trace: for a homogeneous semicircle it lies on the axis of symmetry, inside the arc.

::grafico{xmin=-1.6 xmax=1.6 ymin=-0.4 ymax=1.4 uguale=1 curve="cos(t),sin(t),0,3.1416" punti="0,0.6366,pieno,G" titolo="A homogeneous semicircle: the center of mass $G$ belongs to the axis of symmetry and does not belong to the arc"}

:::

:::osservazione
Symmetries simplify the computation of the center of mass. If the trace of a homogeneous wire is symmetric with respect to a line, the center of mass **belongs to that line**, since in the integral the symmetric contributions of the coordinate orthogonal to the line cancel. In exercises it is convenient to identify the symmetries before setting up the integrals.
:::

## Line integrals of the second kind

:::definizione{#campo-vettoriale titolo="Vector field"}
A **vector field** on $A \subseteq \mathbb{R}^2$ is a function $F : A \to \mathbb{R}^2$, $F(x, y) = \bigl( F_1(x, y),\, F_2(x, y) \bigr)$, which assigns a vector to each point; in space the field has three components. The field is continuous (or of class $C^1$) if its components are. The reference physical example is a force field: at each point of space a force acts that depends on the point, such as the gravitational field.
:::

:::definizione{#integrale-seconda-specie titolo="Line integral of the second kind and work"}
Let $\gamma : [a, b] \to \mathbb{R}^n$ be a regular curve and $F$ a vector field continuous on the trace of $\gamma$. The **line integral of the second kind** of $F$ along $\gamma$ is
$$
\int_\gamma F \cdot d\gamma = \int_a^b F(\gamma(t)) \cdot \gamma'(t) \, dt ,
$$
where the dot denotes the scalar product; in the plane the integrand is $F_1(\gamma(t))\, x'(t) + F_2(\gamma(t))\, y'(t)$. For a piecewise regular curve the contributions of the pieces are added. If $F$ is a force field, the integral is the **work** done by the field on the point traveling along the curve: at each instant *only* the component of the force in the direction of motion counts, and indeed the integrand is the scalar product of force and velocity.
:::

:::definizione{#forma-differenziale titolo="Notation with differential forms"}
The expression $\omega = F_1 \, dx + F_2 \, dy$ is called the **differential form** associated with the field $F = (F_1, F_2)$, and the integral of the second kind is also written
$$
\int_\gamma F_1 \, dx + F_2 \, dy = \int_a^b \bigl( F_1(\gamma(t))\, x'(t) + F_2(\gamma(t))\, y'(t) \bigr) \, dt ,
$$
with the additional term $F_3\, dz$ in space. The notation recalls the computation rule, since $dx$ is replaced by $x'(t)\, dt$ and $dy$ by $y'(t)\, dt$. It is the notation used in **Green's theorem** and in the study of **exact forms**, for which we refer to the following chapters.
:::

:::esempio
We compute the work of the field $F(x, y) = (y, x)$ along the segment $\gamma(t) = (t, t)$, $t \in [0, 1]$. Since $\gamma'(t) = (1, 1)$ and $F(\gamma(t)) = (t, t)$, one obtains
$$
\int_\gamma F \cdot d\gamma = \int_0^1 (t \cdot 1 + t \cdot 1) \, dt = \int_0^1 2t \, dt = 1 .
$$
:::

:::osservazione
The two kinds of integrals are related by the **unit tangent vector**. Since $\gamma'(t) = \lVert \gamma'(t) \rVert \, T(t)$, one has
$$
\int_\gamma F \cdot d\gamma = \int_a^b \bigl( F(\gamma(t)) \cdot T(t) \bigr) \lVert \gamma'(t) \rVert \, dt = \int_\gamma (F \cdot T) \, ds ,
$$
hence the integral of the second kind is the integral of the first kind of the **tangential component** of the field. The dependence on the direction of travel enters through $T$, which changes sign with the orientation.

::grafico{xmin=-1 xmax=3 ymin=-0.4 ymax=3.4 uguale=1 curve="t,t^2,-0.6,1.8" vettori="1,1,0,2,F;1,1,2,3,γ′(1);1,1,1.2,1.4" segmenti="0,2,1.2,1.4" punti="1,1" titolo="For example, the field $F(x, y) = (-y, x)$ at the point $(1, 1)$ of the parabola $\gamma(t) = (t, t^2)$: in the integral of the second kind only the projection of $F$ onto the tangent direction counts, in gray"}

:::

## Orientation and sign of the integrals

:::osservazione{#orientazione-e-segno titolo="Behavior with respect to orientation"}
The two types of integral respond differently to a change of orientation.

- The integral of the first kind is **invariant** under reparametrizations, *even* with a change of direction: the integrand contains the magnitude $\lVert \gamma'(t) \rVert$, which is not affected by the sign of $\varphi'$, and the same change of variable seen for the length applies. In particular $\displaystyle\int_{-\gamma} f \, ds = \int_\gamma f \, ds$: the mass of a wire does not depend on the direction in which it is traversed.
- The integral of the second kind **changes sign** on the opposite curve: the integrand contains the vector $\gamma'(t)$, which is reversed with the direction of travel, hence $\displaystyle\int_{-\gamma} F \cdot d\gamma = -\int_\gamma F \cdot d\gamma$. The work done by the field along the reversed path is the opposite of the work along the direct path.

For this reason an integral of the second kind is assigned on an **oriented curve**: the statement of the exercise specifies the direction, for example by indicating the initial point and the final point or the counterclockwise direction on a closed curve.
:::
