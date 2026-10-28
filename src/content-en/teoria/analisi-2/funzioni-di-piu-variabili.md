---
titolo: Functions of several variables
sommario: The space ℝⁿ with norm, distance and neighborhoods, subsets of the plane, functions of two or more variables with domain and level sets, limits in two variables, continuity and the Weierstrass theorem.
---

## The space ℝⁿ

:::definizione{#spazio-rn titolo="The space ℝⁿ"}
$\mathbb{R}^n$ is the set of ordered $n$-tuples of real numbers $\mathbf{x} = (x_1, \dots, x_n)$. For $n = 2$ points are written $(x, y)$, for $n = 3$ they are written $(x, y, z)$. Addition and multiplication by a scalar are carried out **componentwise**:
$$
\mathbf{x} + \mathbf{y} = (x_1 + y_1, \dots, x_n + y_n),
\qquad
\lambda \mathbf{x} = (\lambda x_1, \dots, \lambda x_n) .
$$
Functions of several variables are defined on subsets of $\mathbb{R}^n$; the definitions in this chapter are stated for arbitrary $n$, and in the exercises they are almost always used with $n = 2$.
:::

:::definizione{#norma-e-distanza titolo="Euclidean norm and distance"}
The **Euclidean norm** of $\mathbf{x} \in \mathbb{R}^n$ is
$$
\lVert \mathbf{x} \rVert = \sqrt{x_1^2 + \dots + x_n^2},
\qquad
\lVert (x, y) \rVert = \sqrt{x^2 + y^2} \ \text{ in } \mathbb{R}^2 .
$$
The **distance** between two points $P$ and $Q$ is $d(P, Q) = \lVert P - Q \rVert$; in the plane, for $P = (x_1, y_1)$ and $Q = (x_2, y_2)$,
$$
d(P, Q) = \sqrt{(x_1 - x_2)^2 + (y_1 - y_2)^2} .
$$
For $n = 1$ the norm coincides with the **absolute value**, so the norm extends to $\mathbb{R}^n$ the tool with which closeness is measured in Mathematical Analysis 1: every condition of the form $|x - x_0| < \delta$ becomes $\lVert P - P_0 \rVert < \delta$.
:::

:::definizione{#intorno-circolare titolo="Circular neighborhood"}
For $P_0 \in \mathbb{R}^n$ and $r > 0$, the **neighborhood** of $P_0$ of radius $r$ is
$$
B(P_0, r) = \{ P \in \mathbb{R}^n : \lVert P - P_0 \rVert < r \} .
$$
In $\mathbb{R}^2$ it is the **open disk** with center $P_0$ and radius $r$, *without* its boundary circle; in $\mathbb{R}^3$ it is the **open ball**. The circular neighborhood replaces the interval $(x_0 - r, x_0 + r)$ of Mathematical Analysis 1 and appears in all the definitions that follow: interior points, open sets, limits and continuity.

::grafico{f="NaN" curve="1+1.5*cos(t),1+1.5*sin(t),0,6.29" area="1+sqrt(abs(2.25-(x-1)^2));1-sqrt(abs(2.25-(x-1)^2));-0.5;2.5" segmenti="1,1,2.0607,2.0607" punti="1,1,pieno,P₀" etichette="1.3,1.68,r" xmin=-1.5 xmax=3.5 ymin=-1 ymax=3 uguale=1 titolo="The open disk $B(P_0, r)$: the points at distance less than $r$ from $P_0$, without the boundary circle (dashed)"}

:::

## Points and sets in the plane

The definitions that follow are stated for $A \subseteq \mathbb{R}^2$ and hold identically in $\mathbb{R}^n$.

:::definizione{#punti-interni-esterni-frontiera titolo="Interior, exterior and boundary point"}
Let $A \subseteq \mathbb{R}^2$ and $P_0 \in \mathbb{R}^2$. The point $P_0$ is

- **interior** to $A$ if there exists a neighborhood $B(P_0, r)$ contained in $A$;
- **exterior** to $A$ if there exists a neighborhood $B(P_0, r)$ contained in the complement of $A$;
- a **boundary** point of $A$ if *every* neighborhood of $P_0$ contains both points of $A$ and points of the complement.

Every point of the plane is of *exactly* one of the three types. The set of interior points is denoted by $\mathring{A}$, the set of boundary points by $\partial A$. The classification of points is used to recognize open and closed sets, which appear in the hypotheses of the theorems of this chapter.
:::

:::esempio{titolo="Points of the disk"}
Let $A = \{ (x, y) : x^2 + y^2 < 1 \}$ be the open unit disk. Let $P_0$ be a point with $x^2 + y^2 < 1$. Its distance from the origin is $\lVert P_0 \rVert < 1$, so its distance from the circle is $1 - \lVert P_0 \rVert$. The disk with centre $P_0$ and radius $r = 1 - \lVert P_0 \rVert$ is therefore contained in $A$, and $P_0$ is **interior**. If instead $x^2 + y^2 > 1$, the distance of $P_0$ from the circle is $\lVert P_0 \rVert - 1$, and the disk with centre $P_0$ and this radius contains no points of $A$; hence $P_0$ is **exterior**. A point on the circle $x^2 + y^2 = 1$ is a **boundary** point, since every neighborhood of it contains points inside and outside the disk; therefore $\partial A$ is the unit circle, which does not belong to $A$.

::grafico{f="NaN" curve="cos(t),sin(t),0,6.29" area="0.2+sqrt(abs(0.1225-(x+0.3)^2));0.2-sqrt(abs(0.1225-(x+0.3)^2));-0.65;0.05|1+sqrt(abs(0.1225-(x-1.5)^2));1-sqrt(abs(0.1225-(x-1.5)^2));1.15;1.85|-0.643+sqrt(abs(0.1225-(x-0.766)^2));-0.643-sqrt(abs(0.1225-(x-0.766)^2));0.416;1.116" punti="-0.3,0.2,pieno,interior;1.5,1,pieno,exterior;0.766,-0.643,pieno,boundary" etichette="-0.75,-0.45,A" xmin=-2 xmax=2.6 ymin=-1.5 ymax=1.7 uguale=1 titolo="The open disk $A$, with its boundary dashed: a neighborhood of an interior point lies in $A$, a neighborhood of an exterior point lies outside $A$, every neighborhood of a boundary point contains points inside and outside"}

:::

:::definizione{#punto-di-accumulazione titolo="Accumulation point"}
$P_0 \in \mathbb{R}^2$ is an **accumulation point** of $A$ if *every* neighborhood of $P_0$ contains *at least one* point of $A$ different from $P_0$. The point may or may not belong to $A$. A point of $A$ that is not an accumulation point of $A$ is called **isolated**. As in one variable, the limit as $(x, y) \to (x_0, y_0)$ makes sense only if $(x_0, y_0)$ is an accumulation point of the domain: in the exercises the typical case is the origin, an accumulation point of $\mathbb{R}^2 \setminus \{(0,0)\}$.
:::

:::definizione{#aperti-e-chiusi titolo="Open set and closed set"}
$A \subseteq \mathbb{R}^2$ is **open** if each of its points is interior, that is, if $A = \mathring{A}$; it is **closed** if its complement is open, a condition equivalent to $\partial A \subseteq A$. The disk $x^2 + y^2 < 1$ is open; the disk $x^2 + y^2 \leq 1$ is closed. In practice, a set defined by strict inequalities between continuous functions is open, while a set defined by non-strict inequalities or by equalities is closed; this criterion makes it possible to classify the domains found in the exercises.
:::

:::attenzione
A set that is not open is *not* necessarily closed: the annulus $\{ (x, y) : 1 \leq x^2 + y^2 < 4 \}$ contains the inner circle, whose points are not interior, so it is not open; it does not contain the outer circle, which consists of boundary points, so it is not closed. The sets $\mathbb{R}^2$ and $\varnothing$, on the other hand, are *both* open *and* closed.

::grafico{curve="cos(t),sin(t),0,6.29;2*cos(t),2*sin(t),0,6.29" area="sqrt(max(0,4-x^2));sqrt(max(0,1-x^2));-2;2|-sqrt(max(0,1-x^2));-sqrt(max(0,4-x^2));-2;2" xmin=-3 xmax=3 ymin=-2.5 ymax=2.5 uguale=1 titolo="The annulus $1 \leq x^2 + y^2 < 4$: the inner circle belongs to the set (solid line), the outer one does not (dashed)"}

:::

:::definizione{#limitati-e-compatti titolo="Bounded set and compact set"}
$A \subseteq \mathbb{R}^2$ is **bounded** if it is contained in a disk centered at the origin, that is, if there exists $R > 0$ with $\lVert P \rVert \leq R$ for every $P \in A$. A closed and bounded set is called **compact**. The closed disk $x^2 + y^2 \leq 4$ is compact; the half-plane $y \geq 0$ is closed but not bounded, so it is not compact. Compact sets are the sets on which the **Weierstrass theorem** in several variables applies, and problems of absolute maximum and minimum are set up on them.
:::

:::definizione{#insiemi-connessi titolo="Connected set"}
$A \subseteq \mathbb{R}^2$ is **path-connected** if every pair of points of $A$ can be joined by a continuous curve entirely contained in $A$. A disk and an annulus are connected; the union of two disjoint disks is not. On an open connected set a continuous function that vanishes at no point has **constant sign**, so connectedness enters sign studies: the sign is determined at a sample point for each connected piece.
:::

## Functions of two and more variables

:::definizione{#funzione-due-variabili titolo="Function of two or more variables"}
A **function of two variables** is a rule $f : A \subseteq \mathbb{R}^2 \to \mathbb{R}$ that assigns to each point $(x, y) \in A$ a real number $z = f(x, y)$. The **graph**
$$
G_f = \{ (x, y, f(x, y)) : (x, y) \in A \} \subset \mathbb{R}^3
$$
is in general a **surface** in space. For $f(x, y) = x^2 + y^2$ the graph is a paraboloid; for $f(x, y) = 2 - x + y$ it is a plane. With $n \geq 3$ variables the definition is identical, but the graph lives in $\mathbb{R}^{n+1}$ and cannot be drawn; to visualize the function one uses level sets, defined in the section on level curves and level surfaces.
:::

:::definizione{#dominio-naturale titolo="Natural domain"}
The **natural domain** of $f(x, y)$ is the set of points of the plane at which the expression defining $f$ makes sense. The conditions are the same as in Mathematical Analysis 1:

- denominators different from zero;
- arguments of even-index roots greater than or equal to zero;
- arguments of logarithms greater than zero;
- arguments of $\arcsin$ and $\arccos$ between $-1$ and $1$.

The conditions to be satisfied *simultaneously* are collected in a **system**. The result is a region of the plane, described by the inequalities and recognized geometrically: half-planes, disks, annuli, regions bounded by parabolas or hyperbolas. One then specifies whether the domain is open or closed, bounded, connected, because these properties decide which theorems apply.
:::

:::esempio{titolo="Domain with the logarithm"}
$f(x, y) = \ln(xy)$ requires $xy > 0$, so the domain is
$$
D = \{ (x, y) : xy > 0 \} ,
$$
the union of the open first and third quadrants, axes excluded. The inequality is strict with continuous functions, therefore $D$ is **open**; it is **not bounded** and **not connected**, since the two quadrants cannot be joined by a curve that avoids the axes.

::grafico{area="3;0;0;3.5|0;-3;-3.5;0" etichette="1.3,1.5,xy > 0;-2.2,-1.6,xy > 0" xmin=-3.5 xmax=3.5 ymin=-3 ymax=3 titolo="The domain of $\ln(xy)$: first and third quadrants, axes excluded"}

:::

## Level curves and level surfaces

:::definizione{#curve-di-livello titolo="Level curve"}
For $f : A \subseteq \mathbb{R}^2 \to \mathbb{R}$ and $k \in \mathbb{R}$, the **level curve** $k$ is the set
$$
E_k = \{ (x, y) \in A : f(x, y) = k \} .
$$
It is the projection onto the $xy$-plane of the points of the graph at height $z = k$, like the contour lines of a topographic map. As $k$ varies, the level curves describe the function without the three-dimensional drawing: where the curves become denser the function **changes rapidly**. For some values of $k$ the set $E_k$ may reduce to a point or be empty, and the study of these cases is part of the exercise.
:::

:::esempio{titolo="Level curves of the paraboloid"}
For $f(x, y) = x^2 + y^2$ the level curve $k$ is the solution set of $x^2 + y^2 = k$. If $k > 0$ it is the **circle** with center the origin and radius $\sqrt{k}$; if $k = 0$ it is the single point $(0, 0)$; if $k < 0$ it is **empty**, since a sum of squares is *never* negative. The circles become denser moving away from the origin, and this reflects the increasingly rapid growth of the paraboloid.

::grafico{curve="cos(t),sin(t),0,6.29;sqrt(2)*cos(t),sqrt(2)*sin(t),0,6.29;sqrt(3)*cos(t),sqrt(3)*sin(t),0,6.29;2*cos(t),2*sin(t),0,6.29" punti="0,0,pieno,k = 0" etichette="0.1,1.04,k = 1;0.1,1.45,k = 2;0.1,1.77,k = 3;0.1,2.04,k = 4" xmin=-3 xmax=3 ymin=-2.5 ymax=2.5 uguale=1 titolo="Level curves of $f(x, y) = x^2 + y^2$ for $k = 0, 1, 2, 3, 4$: the circles become denser moving away from the origin"}

:::

:::definizione{#superfici-di-livello titolo="Level surface"}
For a function of three variables $f : A \subseteq \mathbb{R}^3 \to \mathbb{R}$ the level set $\{ (x, y, z) \in A : f(x, y, z) = k \}$ is in general a surface in space and is called a **level surface**. For $f(x, y, z) = x^2 + y^2 + z^2$ the level surfaces $k > 0$ are the **spheres** with center the origin and radius $\sqrt{k}$. Since the graph of a function of three variables cannot be drawn, level surfaces are its main tool of visualization.
:::

## Limits in two variables

:::definizione{#limite-due-variabili titolo="Limit in two variables"}
Let $f : A \subseteq \mathbb{R}^2 \to \mathbb{R}$ and let $P_0 = (x_0, y_0)$ be an accumulation point of $A$. One writes
$$
\lim_{(x, y) \to (x_0, y_0)} f(x, y) = L \in \mathbb{R}
$$
if for every $\varepsilon > 0$ there exists $\delta > 0$ such that, for every $(x, y) \in A$,
$$
0 < \lVert (x, y) - (x_0, y_0) \rVert < \delta \implies |f(x, y) - L| < \varepsilon .
$$
The limit is $+\infty$ if for every $M > 0$ there exists $\delta > 0$ such that $f(x, y) > M$ at the same points. The structure is that of Mathematical Analysis 1 with the **norm** in place of the absolute value; for this reason the uniqueness of the limit, the limits of sum, product and quotient and the comparison theorem hold with the same statements and the same proofs, and we refer to the chapter on limits in Mathematical Analysis 1.
:::

:::osservazione
In one variable one approaches $x_0$ from only two sides, and the limit exists when the two one-sided limits coincide. In the plane one approaches $P_0$ along *infinitely many* lines and infinitely many curves: the definition requires $f(x, y)$ to be close to $L$ at *all* points of a punctured disk around $P_0$, whatever the path by which they are reached. The existence of the limit is therefore a **more restrictive condition**, and checking it requires two distinct tools: the restriction theorem to prove that a limit does not exist, the squeeze theorem and polar coordinates to prove that it exists.
:::

::::teorema{#teorema-delle-restrizioni titolo="Restriction theorem"}
Let $\displaystyle\lim_{(x, y) \to P_0} f(x, y) = L$ and let $\gamma(t)$ be a curve with values in the domain of $f$ with $\gamma(t) \to P_0$ and $\gamma(t) \neq P_0$ as $t \to t_0$. Then
$$
\lim_{t \to t_0} f(\gamma(t)) = L .
$$
The limit along *every* restriction coincides with the limit of the function. The theorem is used **in contrapositive form**: if two restrictions produce different limits, or a restriction produces a limit that does not exist, then the limit of $f$ **does not exist**. It is the standard tool for proving the non-existence of a limit in two variables.

:::dimostrazione
Fix $\varepsilon > 0$; by the definition of limit there exists $\delta > 0$ such that $|f(P) - L| < \varepsilon$ for every $P$ in the domain with $0 < \lVert P - P_0 \rVert < \delta$. Since $\gamma(t) \to P_0$ as $t \to t_0$ and $\gamma(t) \neq P_0$, for $t$ *sufficiently close* to $t_0$ we have $0 < \lVert \gamma(t) - P_0 \rVert < \delta$, hence $|f(\gamma(t)) - L| < \varepsilon$. Therefore $f(\gamma(t)) \to L$.
:::
::::

:::esempio{titolo="Non-existence along the axes"}
For $f(x, y) = \dfrac{2x^2}{x^2 + y^2}$ at the origin: along the $x$-axis, that is, on the restriction $y = 0$, we have $f(x, 0) = \dfrac{2x^2}{x^2} = 2 \to 2$; along the $y$-axis we have $f(0, y) = 0 \to 0$. Since two restrictions produce **different limits**, the limit as $(x, y) \to (0, 0)$ **does not exist**.
:::

:::attenzione
Restrictions prove the *non-existence* of a limit, *not* its existence. For $f(x, y) = \dfrac{x^2 y}{x^4 + y^2}$ every line $y = mx$ gives
$$
f(x, mx) = \frac{m x^3}{x^4 + m^2 x^2} = \frac{m x}{x^2 + m^2} \to 0 ,
$$
and the $y$-axis also gives $0$; along the parabola $y = x^2$, however, $f(x, x^2) = \dfrac{x^4}{2x^4} = \dfrac{1}{2}$. The limit **does not exist**, even though all lines produce the same value. To prove that a limit exists one needs an **upper bound**, with the squeeze theorem or with polar coordinates.

::grafico{f="x^2" segmenti="-1.5,-1.5,2,2;-2,2,1.5,-1.5;-0.75,-1.5,1.25,2.5;-1.25,2.5,0.75,-1.5" punti="0,0,vuoto" xmin=-2.2 xmax=2.2 ymin=-1.5 ymax=2.5 uguale=1 titolo="The lines $y = mx$ (dashed) and the parabola $y = x^2$ toward the origin: along the lines $f$ tends to $0$, along the parabola it is constantly $\dfrac{1}{2}$"}

:::

## Computing limits: comparison and polar coordinates

:::teorema{#confronto-due-variabili titolo="Comparison theorem in two variables"}
If in a neighborhood of $P_0$ (excluding at most $P_0$)
$$
|f(x, y) - L| \leq g(x, y)
\qquad \text{with} \qquad
\lim_{(x, y) \to P_0} g(x, y) = 0 ,
$$
then $f(x, y) \to L$ as $(x, y) \to P_0$. The proof is identical to the one in one variable, and we refer to the chapter on limits in Mathematical Analysis 1. It is the tool with which one proves that a limit *exists*: one bounds $|f - L|$ from above by a simpler function that tends to $0$.
:::

:::proposizione{#maggiorazioni-utili titolo="Useful upper bounds"}
For every $(x, y) \in \mathbb{R}^2$ the inequalities
$$
|x| \leq \sqrt{x^2 + y^2},
\qquad
x^2 \leq x^2 + y^2,
\qquad
|xy| \leq \frac{x^2 + y^2}{2} ,
$$
hold, together with the analogous ones with $y$ in place of $x$. The third follows from $(|x| - |y|)^2 \geq 0$ by expanding the square. In limits with denominator $x^2 + y^2$ these inequalities **eliminate the denominator**: since $x^2 \leq x^2 + y^2$, the ratio $\dfrac{x^2}{x^2 + y^2}$ lies between $0$ and $1$, so every factor of this kind is bounded above by $1$.
:::

:::teorema{#limitata-per-infinitesima titolo="Bounded times infinitesimal"}
If $|f(x, y)| \leq C$ in a neighborhood of $P_0$ and $g(x, y) \to 0$ as $(x, y) \to P_0$, then $f(x, y)\, g(x, y) \to 0$. This follows from **comparison**, since $|f g| \leq C |g| \to 0$. It is used with the typical **bounded factors**: $\sin$ and $\cos$ of any argument, and ratios of the form $\dfrac{x^2}{x^2 + y^2}$ bounded above by $1$.
:::

:::esempio{titolo="Limit with an upper bound"}
$$
\lim_{(x, y) \to (0, 0)} \frac{x y^3}{x^2 + y^2} = 0 .
$$
Since $|xy| \leq \dfrac{x^2 + y^2}{2}$, we obtain
$$
\left| \frac{x y^3}{x^2 + y^2} \right|
= \frac{|xy|\, y^2}{x^2 + y^2}
\leq \frac{x^2 + y^2}{2} \cdot \frac{y^2}{x^2 + y^2}
= \frac{y^2}{2} ,
$$
and $\dfrac{y^2}{2} \to 0$, so by **comparison** the limit is $0$.
:::

:::proposizione{#coordinate-polari titolo="Computation with polar coordinates"}
The change of coordinates centered at $P_0 = (x_0, y_0)$ is
$$
x = x_0 + \rho \cos\theta,
\qquad
y = y_0 + \rho \sin\theta,
\qquad \rho > 0, \ \theta \in [0, 2\pi) ,
$$
where $\rho = \lVert (x, y) - P_0 \rVert$ is the distance from the point. If there exists a function $g(\rho)$, independent of $\theta$, such that
$$
\begin{cases}
|f(x_0 + \rho \cos\theta,\; y_0 + \rho \sin\theta) - L| \leq g(\rho) \ \text{ for every } \theta \\[4pt]
g(\rho) \to 0 \ \text{ as } \rho \to 0^+
\end{cases}
$$
then $\displaystyle\lim_{(x, y) \to P_0} f(x, y) = L$. The method is convenient when the **denominator** is $x^2 + y^2$: with $P_0$ at the origin it becomes $\rho^2$ and simplifies, since $\cos^2\theta + \sin^2\theta = 1$. The bound *independent* of $\theta$ guarantees that the approach to $L$ is **uniform** in all directions, as the definition of limit requires.

::grafico{curve="1+0.6*cos(t),1+0.6*sin(t),0,0.7" vettori="1,1,2.53,2.288" segmenti="1,1,3.3,1;2.53,1,2.53,2.288" punti="1,1,pieno,P₀;2.53,2.288,pieno,P" etichette="1.5,1.8,ρ;1.7,1.1,θ;1.45,0.78,ρ cos θ;2.62,1.55,ρ sin θ" xmin=-0.5 xmax=4 ymin=-0.5 ymax=3 uguale=1 titolo="Polar coordinates centered at $P_0$: $\rho$ is the distance of $P$ from $P_0$, $\theta$ the angle with the positive direction of the $x$-axis"}

:::

:::esempio{titolo="Limit in polar coordinates"}
$$
\lim_{(x, y) \to (0, 0)} \frac{x^3 + 2y^3}{x^2 + y^2} = 0 .
$$
In polar coordinates the numerator is $\rho^3(\cos^3\theta + 2\sin^3\theta)$ and the denominator is $\rho^2$, so
$$
\left| \frac{x^3 + 2y^3}{x^2 + y^2} \right|
= \rho\, |\cos^3\theta + 2 \sin^3\theta|
\leq 3\rho = g(\rho) ,
$$
since $|\cos\theta| \leq 1$ and $|\sin\theta| \leq 1$. Since $g(\rho) = 3\rho \to 0$ as $\rho \to 0^+$ and $g$ does *not* depend on $\theta$, the limit is $0$.
:::

:::attenzione
Computing the limit as $\rho \to 0^+$ with $\theta$ held fixed is equivalent to a **restriction** along a ray, so it does *not* prove the existence of the limit. For $f(x, y) = \dfrac{x^2 y}{x^4 + y^2}$, for each fixed $\theta$ the limit as $\rho \to 0^+$ is $0$, but the limit in two variables does not exist, as shown with the parabola $y = x^2$. The conclusion is legitimate only with a bound $g(\rho)$ valid for every $\theta$ *simultaneously*.
:::

## Continuity

:::definizione{#continuita-due-variabili titolo="Continuous function"}
Let $f : A \subseteq \mathbb{R}^2 \to \mathbb{R}$ and let $P_0 \in A$ be an accumulation point of $A$. $f$ is **continuous** at $P_0$ if
$$
\lim_{(x, y) \to P_0} f(x, y) = f(P_0) ,
$$
that is, if the limit exists, is finite and coincides with the value of the function; at isolated points of $A$ the function is considered continuous. $f$ is continuous on $A$ if it is continuous at every point. For a continuous function the limit is computed **by substitution**, so the work in the exercises concentrates on the points where continuity is not guaranteed by the form of the expression.
:::

:::teorema{#continuita-elementari-due-variabili titolo="Continuity of elementary functions"}
Polynomials in $x$ and $y$ are **continuous** on $\mathbb{R}^2$; sums, products, quotients with nonzero denominator and compositions of continuous functions are continuous. In particular, composing a continuous function of one variable with a continuous function of two variables gives a continuous function: $e^{x^2 + y^2}$, $\sin(xy)$ and $\ln(1 + x^2 + y^2)$ are continuous on $\mathbb{R}^2$. Consequently, continuity must be checked with the definition *only* at the **junction points** of piecewise-defined functions, which is the typical case in exam exercises.
:::

:::esempio{titolo="Continuity to be checked at a single point"}
$$
f(x, y) =
\begin{cases}
\dfrac{x^3}{x^2 + y^2} & (x, y) \neq (0, 0) \\[8pt]
0 & (x, y) = (0, 0)
\end{cases}
$$
Away from the origin $f$ is a quotient of polynomials with nonzero denominator, so it is **continuous**. At the origin continuity is equivalent to the condition $\displaystyle\lim_{(x,y) \to (0,0)} f(x, y) = f(0, 0) = 0$. Since $\dfrac{x^2}{x^2 + y^2} \leq 1$, we have $|f(x, y)| = \dfrac{x^2}{x^2 + y^2}\, |x| \leq |x|$, and $|x| \to 0$; by the **squeeze theorem** the limit is $0$, so $f$ is continuous at the origin as well.
:::

:::definizione{#prolungamento-continuita titolo="Continuous extension"}
Let $f : A \to \mathbb{R}$ and let $P_0 \notin A$ be an accumulation point of $A$. If the finite limit
$$
\lim_{(x, y) \to P_0} f(x, y) = L ,
$$
exists, the function $\tilde{f}$ that coincides with $f$ on $A$ and takes the value $L$ at $P_0$ is continuous at $P_0$ and is called the **continuous extension** of $f$. If the limit does not exist or is infinite, a continuous extension **is not possible**. The typical exercise gives a function defined on $\mathbb{R}^2 \setminus \{(0,0)\}$ and asks whether it can be extended to the origin: the answer is the computation of the limit.
:::

:::esempio{titolo="Extension to the origin"}
$f(x, y) = \dfrac{\ln(1 + x^2 + y^2)}{x^2 + y^2}$ is defined on $\mathbb{R}^2 \setminus \{(0,0)\}$. In polar coordinates the quantity $x^2 + y^2$ becomes $\rho^2$, so
$$
f = \frac{\ln(1 + \rho^2)}{\rho^2} \to 1 \qquad \text{as } \rho \to 0^+ ,
$$
by the **standard limit of the logarithm** with argument $\rho^2 \to 0$; the expression depends only on $\rho$, so the convergence is uniform in $\theta$. Therefore $f$ **extends continuously** by setting $\tilde{f}(0, 0) = 1$.
:::

## The Weierstrass theorem

:::teorema{#weierstrass-piu-variabili titolo="Weierstrass theorem in several variables"}
If $K \subset \mathbb{R}^n$ is compact, that is, closed and bounded, and $f : K \to \mathbb{R}$ is continuous, then $f$ attains an **absolute maximum and minimum** on $K$: there exist $P_m, P_M \in K$ such that
$$
f(P_m) \leq f(P) \leq f(P_M) \qquad \text{for every } P \in K .
$$
The statement extends the Weierstrass theorem of Mathematical Analysis 1, with the **compact set** $K$ in place of the interval $[a, b]$. It guarantees that problems of absolute maximum and minimum on a compact set have a solution; the points at which to look for it are determined with partial derivatives and Lagrange multipliers, and we refer to the chapter on maxima and minima. The proof uses sequences in $\mathbb{R}^n$ and is omitted.
:::

:::esempio{titolo="Checking the hypotheses"}
Let $f(x, y) = \dfrac{x + y}{1 + x^2 + y^2}$ on $K = \{ (x, y) : x^2 + y^2 \leq 4 \}$. The function is continuous on $\mathbb{R}^2$, since it is a quotient of polynomials with a denominator that never vanishes; the set $K$ is closed, because it is defined by a non-strict inequality, and it is bounded, because it is contained in the disk of radius $2$. Both hypotheses are satisfied, so the **Weierstrass theorem** applies and $f$ attains an **absolute maximum and minimum** on $K$.
:::

:::attenzione
Without **compactness** the conclusion is *not* guaranteed. On the open disk $A = \{ x^2 + y^2 < 1 \}$ the function $f(x, y) = x$ is continuous and bounded, but it **has no maximum**: the supremum is $1$ and it would be attained only at the point $(1, 0)$, which does not belong to $A$. On $\mathbb{R}^2$, closed but not bounded, the same function is not even bounded.

::grafico{f="NaN" curve="cos(t),sin(t),0,6.29" area="sqrt(abs(1-x^2));-sqrt(abs(1-x^2));-1;1" punti="1,0,vuoto" etichette="1.1,0.15,(1, 0)" xmin=-1.6 xmax=1.8 ymin=-1.4 ymax=1.4 uguale=1 titolo="On the open disk $x^2 + y^2 < 1$ the function $f(x, y) = x$ approaches $1$ toward the point $(1, 0)$, which does not belong to the disk: the maximum does not exist"}

:::
