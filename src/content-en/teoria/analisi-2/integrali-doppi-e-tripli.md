---
titolo: Double and triple integrals
sommario: How to integrate a function of two or three variables, how a multiple integral reduces to single integrals, how changes of variables simplify the domain, and how to compute areas, volumes, masses and centroids.
---

## The double integral over rectangles

:::definizione{#integrale-doppio titolo="Double integral over a rectangle"}
Let $R = [a, b] \times [c, d]$ be a rectangle and let $f : R \to \mathbb{R}$ be bounded. We subdivide $R$ into subrectangles $R_{ij}$ with a grid of points, choose a point $(\xi_{ij}, \eta_{ij})$ in each $R_{ij}$ and form the **Riemann sum**
$$
S = \sum_{i,j} f(\xi_{ij}, \eta_{ij}) \, \operatorname{Area}(R_{ij}) .
$$
If, as the dimensions of the subrectangles tend to $0$, the sums tend to one and the same number for *every* choice of the points, $f$ is **integrable** on $R$ and that number is the **double integral**
$$
\iint_R f(x, y)\, dx\, dy .
$$
Every function continuous on $R$ is integrable, and integrability is preserved if $f$ is continuous except on a finite number of regular curves. For $f \geq 0$ the integral is the volume of the solid lying between the rectangle $R$ and the graph of $f$, just as in one variable the integral of a positive function is the area under the graph.

::grafico{xmin=-0.3 xmax=5.4 ymin=-0.4 ymax=3.2 area="2;1.5;3.25;4" segmenti="1,0.5,1,2.5;1.75,0.5,1.75,2.5;2.5,0.5,2.5,2.5;3.25,0.5,3.25,2.5;4,0.5,4,2.5;1,0.5,4,0.5;1,1,4,1;1,1.5,4,1.5;1,2,4,2;1,2.5,4,2.5" punti="3.6,1.75" etichette="4.12,1.68,(ξᵢⱼ, ηᵢⱼ)" titolo="A subdivision of the rectangle $R$ into subrectangles: in the colored subrectangle $R_{ij}$ a point $(\xi_{ij}, \eta_{ij})$ is chosen"}

:::

:::teorema{#teorema-di-fubini titolo="Reduction theorem (Fubini) on rectangles"}
If $f$ is continuous on $R = [a, b] \times [c, d]$, then
$$
\iint_R f(x, y)\, dx\, dy
= \int_a^b \left( \int_c^d f(x, y)\, dy \right) dx
= \int_c^d \left( \int_a^b f(x, y)\, dx \right) dy .
$$
The theorem reduces the double integral to **two successive single integrals**: in the inner integral one variable is held fixed and we integrate with respect to the other, then the result, which is a function of a single variable, is integrated in turn. The proof is obtained by grouping the Riemann sums by columns or by rows, and we refer to standard textbooks for it. The two orders of integration give the **same value**, so we choose the order in which the computations are simpler.
:::

:::esempio{titolo="Reduction on a rectangle"}
$$
\begin{aligned}
\iint_{[0,1] \times [0,2]} x y^2 \, dx\, dy
&= \int_0^1 \left( \int_0^2 x y^2 \, dy \right) dx
= \int_0^1 x \cdot \frac{8}{3} \, dx \\[6pt]
&= \frac{8}{3} \cdot \frac{1}{2} = \frac{4}{3}
\end{aligned}
$$
In the inner integral $x$ is a **constant**, therefore it comes out of the integral sign; what remains is $\displaystyle\int_0^2 y^2\, dy = \dfrac{8}{3}$.
:::

:::teorema{#variabili-separate titolo="Functions with separated variables"}
If $f(x, y) = g(x)\, h(y)$ with $g$ continuous on $[a, b]$ and $h$ continuous on $[c, d]$, then
$$
\iint_{[a,b] \times [c,d]} g(x)\, h(y)\, dx\, dy
= \left( \int_a^b g(x)\, dx \right) \left( \int_c^d h(y)\, dy \right) .
$$
It follows from **Fubini's theorem**, since in the inner integral the factor that does not depend on the variable of integration comes out of the integral sign. The result holds *only* on rectangles: on a general domain the limits of the inner integral depend on the other variable and the factorization is not possible.
:::

## Normal domains and reduction formulas

:::definizione{#dominio-normale titolo="Normal domain"}
A set $D \subseteq \mathbb{R}^2$ is a **normal domain** with respect to the $x$-axis if there exist two continuous functions $g_1, g_2 : [a, b] \to \mathbb{R}$ with $g_1 \leq g_2$ such that
$$
D = \left\{ (x, y) :
\begin{cases}
a \leq x \leq b \\
g_1(x) \leq y \leq g_2(x)
\end{cases}
\right\} .
$$
The domain is normal with respect to the $y$-axis if it is described in the same way with the roles exchanged: $c \leq y \leq d$ and $h_1(y) \leq x \leq h_2(y)$. A domain normal with respect to $x$ is crossed by vertical segments that enter through the graph of $g_1$ and exit through the graph of $g_2$; this description directly provides the **limits of integration**. The disk and the triangle are normal with respect to both axes; many regions that are not normal can be split into a union of normal domains.

::grafico{xmin=-0.4 xmax=4.8 ymin=-0.6 ymax=3.6 area="2.6+0.5*sin(x);0.4+0.15*(x-2.5)^2;0.8;4" curve="t,0.4+0.15*(t-2.5)^2,0.8,4;2.2,t,0.4135,3.0043;t,2.6+0.5*sin(t),0.8,4" segmenti="0.8,0,0.8,2.959;4,0,4,2.222" etichette="0.75,-0.45,a;3.95,-0.45,b;2.9,0.75,y = g₁(x);2.9,3.05,y = g₂(x)" titolo="A domain normal with respect to the $x$-axis: the vertical segment at abscissa $x$ enters through the graph of $g_1$ and exits through the graph of $g_2$"}

:::

:::teorema{#riduzione-domini-normali titolo="Reduction formulas on normal domains"}
Let $f$ be continuous on $D$.

- If $D$ is normal with respect to the $x$-axis, with $a \leq x \leq b$ and $g_1(x) \leq y \leq g_2(x)$, then
$$
\iint_D f(x, y)\, dx\, dy
= \int_a^b \left( \int_{g_1(x)}^{g_2(x)} f(x, y)\, dy \right) dx .
$$
- If $D$ is normal with respect to the $y$-axis, with $c \leq y \leq d$ and $h_1(y) \leq x \leq h_2(y)$, then
$$
\iint_D f(x, y)\, dx\, dy
= \int_c^d \left( \int_{h_1(y)}^{h_2(y)} f(x, y)\, dx \right) dy .
$$

The outer variable ranges over a *fixed* interval, while the limits of the inner integral are functions of the outer variable. The first step of every exercise is therefore the **description of the domain in normal form**, with a sketch of the region to read off the functions $g_1$ and $g_2$.
:::

:::esempio{titolo="Domain between a parabola and a line"}
Let $D$ be the region lying between the parabola $y = x^2$ and the line $y = x$. The two curves intersect where $x^2 = x$, that is, at $x = 0$ and $x = 1$, and for $0 \leq x \leq 1$ we have $x^2 \leq x$. The domain is **normal with respect to the $x$-axis**:
$$
D = \left\{ (x, y) :
\begin{cases}
0 \leq x \leq 1 \\
x^2 \leq y \leq x
\end{cases}
\right\} ,
\qquad
\iint_D f \, dx\, dy = \int_0^1 \left( \int_{x^2}^{x} f(x, y)\, dy \right) dx .
$$

::grafico{xmin=-0.4 xmax=1.6 ymin=-0.3 ymax=1.5 uguale=1 f="x^2;x" area="x;x^2;0;1" segmenti="0.6,0.36,0.6,0.6" punti="0,0;1,1" etichette="1.2,0.95,y = x;0.9,1.38,y = x²" titolo="The domain lying between the parabola $y = x^2$ and the line $y = x$: every vertical segment enters through the parabola and exits through the line"}

:::

:::osservazione{#scambio-ordine titolo="Changing the order of integration"}
When a domain is normal with respect to both axes, the two reduction formulas give the same value, therefore the **order of integration** can be changed by rewriting the domain in the other form. The change is useful when the given inner integral cannot be computed in elementary form: the function $e^{y^2}$ has no elementary antiderivative with respect to $y$, so the integral $\displaystyle\int_0^1 \int_x^1 e^{y^2}\, dy\, dx$ is computed by integrating first with respect to $x$. To change the order, we sketch the region described by the given limits and describe it again with respect to the other axis; the limits are *not* exchanged mechanically.

::grafico{xmin=-0.4 xmax=1.6 ymin=-0.3 ymax=1.4 uguale=1 f="x" area="1;x;0;1" segmenti="0,1,1,1;0.35,0.35,0.35,1;0,0.7,0.7,0.7" etichette="1.1,0.85,y = x" titolo="The region $0 \leq x \leq 1$, $x \leq y \leq 1$ read in the two ways: the vertical segment goes from $y = x$ to $y = 1$, the horizontal one goes from $x = 0$ to $x = y$"}

:::

## Properties of the double integral

:::teorema{#proprieta-integrale titolo="Linearity, additivity, monotonicity"}
Let $f$ and $g$ be integrable on $D$ and let $\alpha, \beta \in \mathbb{R}$.

- **Linearity**: $\displaystyle\iint_D (\alpha f + \beta g)\, dx\, dy = \alpha \iint_D f\, dx\, dy + \beta \iint_D g\, dx\, dy$.
- **Additivity with respect to the domain**: if $D = D_1 \cup D_2$ with $D_1$ and $D_2$ having no interior points in common, then $\displaystyle\iint_D f\, dx\, dy = \iint_{D_1} f\, dx\, dy + \iint_{D_2} f\, dx\, dy$.
- **Monotonicity**: if $f \leq g$ on $D$, then $\displaystyle\iint_D f\, dx\, dy \leq \iint_D g\, dx\, dy$; in particular $\displaystyle\left| \iint_D f\, dx\, dy \right| \leq \iint_D |f|\, dx\, dy$.

The properties are the same as for the integral in one variable and are proved in the same way on Riemann sums. Linearity allows a sum to be integrated term by term; additivity allows a non-normal region to be split into a union of normal domains and each piece to be integrated separately; monotonicity provides estimates when an explicit computation is not possible.
:::

## Change of variables

:::teorema{#cambiamento-di-variabili titolo="Change of variables and the Jacobian"}
Let $\Phi(u, v) = \bigl( x(u, v),\, y(u, v) \bigr)$ be a transformation of class $C^1$, injective in the interior of a domain $D'$ of the $uv$-plane, with image $D = \Phi(D')$, and let
$$
J(u, v) = \det
\begin{pmatrix}
\dfrac{\partial x}{\partial u} & \dfrac{\partial x}{\partial v} \\[10pt]
\dfrac{\partial y}{\partial u} & \dfrac{\partial y}{\partial v}
\end{pmatrix}
\neq 0
$$
in the interior of $D'$. Then, for every $f$ continuous on $D$,
$$
\iint_D f(x, y)\, dx\, dy
= \iint_{D'} f\bigl( x(u, v),\, y(u, v) \bigr)\, |J(u, v)|\, du\, dv .
$$
The determinant $J$ is called the **Jacobian** of the transformation and its absolute value measures how the transformation **stretches areas**: a small rectangle of area $du\, dv$ in the $uv$-plane is mapped to a region of area approximately $|J|\, du\, dv$. The theorem is the two-variable analogue of **integration by substitution** and is used when new variables turn the domain into a rectangle or simplify the function: a domain bounded by the curves $xy = 1$, $xy = 4$, $y = x$, $y = 4x$ becomes the square $[1, 4] \times [1, 4]$ in the variables $u = xy$ and $v = \dfrac{y}{x}$. For the proof we refer to standard textbooks.

::grafico{xmin=-0.3 xmax=3.5 ymin=-0.3 ymax=4.5 f="1/x;x;4*x" curve="t,4/t,0.85,3.5" area="4*x;1/x;0.5;1|4/x;x;1;2" punti="1,1;2,2;0.5,2;1,4" etichette="2.6,0.62,xy = 1;2.6,1.8,xy = 4;2.85,2.55,y = x;1.25,4.25,y = 4x" titolo="The region lying between the hyperbolas $xy = 1$, $xy = 4$ and the lines $y = x$, $y = 4x$: in the variables $u = xy$, $v = \dfrac{y}{x}$ it becomes the square $[1, 4] \times [1, 4]$"}

:::

:::osservazione
If the new variables are given in the form $u = u(x, y)$, $v = v(x, y)$, the Jacobian of the inverse transformation is obtained without inverting the formulas, since the two determinants are **reciprocal**. Indeed,
$$
\det \frac{\partial(x, y)}{\partial(u, v)} = \left( \det \frac{\partial(u, v)}{\partial(x, y)} \right)^{\!-1} ,
$$
where each expression denotes the determinant of the matrix of the indicated partial derivatives. We therefore compute the more convenient determinant and, if needed, take its reciprocal.
:::

:::esempio{titolo="Linear transformation for an ellipse"}
To integrate over the ellipse $\dfrac{x^2}{a^2} + \dfrac{y^2}{b^2} \leq 1$ we set $x = a u$, $y = b v$. The transformation maps the unit disk $u^2 + v^2 \leq 1$ onto the ellipse and its Jacobian is
$$
J = \det
\begin{pmatrix}
a & 0 \\
0 & b
\end{pmatrix}
= ab ,
$$
so $dx\, dy = ab\, du\, dv$. The **area of the ellipse** is $ab \cdot \pi = \pi a b$, since the unit disk has area $\pi$.
:::

:::teorema{#coordinate-polari titolo="Polar coordinates"}
The transformation
$$
\begin{cases}
x = \rho \cos\theta \\
y = \rho \sin\theta
\end{cases}
\qquad \rho \geq 0, \quad \theta \in [0, 2\pi)
$$
has Jacobian
$$
J = \det
\begin{pmatrix}
\cos\theta & -\rho \sin\theta \\
\sin\theta & \rho \cos\theta
\end{pmatrix}
= \rho ,
$$
so
$$
\iint_D f(x, y)\, dx\, dy
= \iint_{D'} f(\rho \cos\theta,\, \rho \sin\theta)\, \rho \, d\rho\, d\theta .
$$
**Polar coordinates** are convenient when the domain is a disk, an annulus or a circular sector, or when the function contains the quantity $x^2 + y^2$, since $x^2 + y^2 = \rho^2$. A disk centered at the origin with radius $R$ becomes the rectangle $0 \leq \rho \leq R$, $0 \leq \theta \leq 2\pi$.

::grafico{xmin=-2.6 xmax=2.6 ymin=-2.3 ymax=2.4 uguale=1 area="sqrt(abs(4-x^2));-sqrt(abs(4-x^2));-2;-1|sqrt(abs(4-x^2));sqrt(abs(1-x^2));-1;1|-sqrt(abs(1-x^2));-sqrt(abs(4-x^2));-1;1|sqrt(abs(4-x^2));-sqrt(abs(4-x^2));1;2" curve="2*cos(t),2*sin(t),0,6.29;0.6216*t,0.7833*t,0,1.5;0.45*cos(t),0.45*sin(t),0,0.9;cos(t),sin(t),0,6.29" punti="0.932,1.175,pieno,P" etichette="0.2,0.85,ρ;0.55,0.18,θ" titolo="The annulus $1 \leq \rho \leq 2$: the point $P$ is at distance $\rho$ from the origin and the segment $OP$ forms the angle $\theta$ with the positive $x$-semiaxis"}

:::

:::esempio{titolo="Integral over a disk"}
$$
\begin{aligned}
\iint_{x^2 + y^2 \leq 1} e^{-(x^2 + y^2)} \, dx\, dy
&= \int_0^{2\pi} \left( \int_0^1 e^{-\rho^2} \rho \, d\rho \right) d\theta \\[6pt]
&= 2\pi \left[ -\frac{e^{-\rho^2}}{2} \right]_0^1
= \pi \left( 1 - \frac{1}{e} \right)
\end{aligned}
$$
In Cartesian coordinates the function $e^{-x^2}$ does *not* have an elementary antiderivative; in polar coordinates the factor $\rho$ contributed by the Jacobian makes **the integration immediate**, since $\rho\, e^{-\rho^2}$ has antiderivative $-\dfrac{e^{-\rho^2}}{2}$.
:::

:::attenzione
The **area element** in polar coordinates is $\rho\, d\rho\, d\theta$, *not* $d\rho\, d\theta$. Without the factor $\rho$ the area of the disk of radius $R$ would come out as $\displaystyle\int_0^{2\pi} \int_0^R d\rho\, d\theta = 2\pi R$ instead of $\pi R^2$.
:::

## Symmetries

::::teorema{#simmetrie titolo="Odd functions on symmetric domains"}
Let $D$ be symmetric with respect to the $y$-axis, that is, $(x, y) \in D$ *if and only if* $(-x, y) \in D$, and let $f$ be continuous on $D$.

- If $f$ is **odd** in $x$, that is, $f(-x, y) = -f(x, y)$, then $\displaystyle\iint_D f \, dx\, dy = 0$.
- If $f$ is **even** in $x$, that is, $f(-x, y) = f(x, y)$, then $\displaystyle\iint_D f \, dx\, dy = 2 \iint_{D^+} f \, dx\, dy$, where $D^+$ is the part of $D$ with $x \geq 0$.

The same holds with the roles of $x$ and $y$ exchanged for domains symmetric with respect to the $x$-axis, and it holds for triple integrals with symmetries with respect to the coordinate planes. The theorem eliminates entire terms *without computation*: over the whole unit disk the integral of $x^3 + 3$ equals $0 + 3\pi$, since $x^3$ is odd in $x$ and the constant $3$ is integrated over the area $\pi$.

::grafico{xmin=-1.8 xmax=1.8 ymin=-1.3 ymax=1.5 uguale=1 curve="cos(t),sin(t),0,6.29" area="sqrt(abs(1-x^2));-sqrt(abs(1-x^2));0;1" segmenti="-0.55,0.45,0.55,0.45" punti="0.55,0.45;-0.55,0.45" etichette="0.28,0.58,(x, y);-0.72,0.58,(−x, y);0.35,-0.5,D⁺;-0.6,-0.5,D⁻" titolo="A domain symmetric with respect to the $y$-axis: the point $(x, y)$ belongs to $D$ if and only if $(-x, y)$ belongs to it; in color, the part $D^+$ with $x \geq 0$"}

:::dimostrazione
Let $D^+$ and $D^-$ be the parts of $D$ with $x \geq 0$ and $x \leq 0$; by additivity the integral over $D$ is the sum of the integrals over the two parts. The change of variables $u = -x$, $v = y$ has a Jacobian of absolute value $1$ and maps $D^+$ onto $D^-$, so
$$
\iint_{D^-} f(x, y)\, dx\, dy = \iint_{D^+} f(-u, v)\, du\, dv .
$$
If $f$ is odd in $x$, the last integral equals $-\displaystyle\iint_{D^+} f(u, v)\, du\, dv$, therefore the sum of the two contributions is **zero**. If $f$ is even in $x$, the two contributions are equal and the sum is **twice** the integral over $D^+$.
:::
::::

:::richiamo{titolo="Change of variables"}
If $\Phi : D' \to D$ is $C^1$, injective, with Jacobian $J \neq 0$ in the interior of $D'$, then $\displaystyle\iint_D f\, dx\, dy = \iint_{D'} (f \circ \Phi)\, |J|\, du\, dv$.
:::

## Triple integrals

:::definizione{#integrale-triplo titolo="Triple integral"}
The **triple integral** $\displaystyle\iiint_E f(x, y, z)\, dx\, dy\, dz$ of a bounded function over a region $E \subseteq \mathbb{R}^3$ is defined through Riemann sums over subdivisions into rectangular boxes, as for the double integral, and every function continuous on a closed and bounded region bounded by regular surfaces is integrable. Linearity, additivity with respect to the domain, monotonicity and the change of variables theorem hold, with the Jacobian given by the determinant of the $3 \times 3$ matrix of partial derivatives. For $f = 1$ the integral is the **volume** of $E$; with $f$ equal to a density the integral is the **mass** of the solid, as shown in the section on applications.
:::

:::teorema{#integrazione-per-fili titolo="Integration by vertical lines"}
Let
$$
E = \left\{ (x, y, z) :
\begin{cases}
(x, y) \in D \\
\alpha(x, y) \leq z \leq \beta(x, y)
\end{cases}
\right\}
$$
with $D \subseteq \mathbb{R}^2$ and $\alpha, \beta$ continuous on $D$ with $\alpha \leq \beta$. Then, for $f$ continuous on $E$,
$$
\iiint_E f(x, y, z)\, dx\, dy\, dz
= \iint_D \left( \int_{\alpha(x, y)}^{\beta(x, y)} f(x, y, z)\, dz \right) dx\, dy .
$$
For each point $(x, y)$ of the projection $D$ we integrate along the **vertical line** that enters $E$ through the surface $z = \alpha(x, y)$ and exits through the surface $z = \beta(x, y)$; the result is a function of $(x, y)$ that is integrated over $D$ with the techniques of double integrals. This is the reduction suited to **solids lying between two graphs**, such as the region between a paraboloid and a plane.

::grafico{xmin=-2 xmax=3.4 ymin=-0.4 ymax=2.6 uguale=1 nomi="x,z" area="2.2-0.3*x^2;0.3+0.25*x^2;-1.5;1.5" curve="t,0.3+0.25*t^2,-1.5,1.5;t,2.2-0.3*t^2,-1.5,1.5" segmenti="-1.5,0.8625,-1.5,1.525;1.5,0.8625,1.5,1.525" vettori="0.6,0.39,0.6,2.092" etichette="1.6,0.75,z = α(x, y);1.6,1.75,z = β(x, y)" titolo="Vertical cross-section of a solid $E$ lying between two graphs: the vertical line enters $E$ through the surface $z = \alpha(x, y)$ and exits through the surface $z = \beta(x, y)$"}

:::

:::teorema{#integrazione-per-strati titolo="Integration by slices"}
Let $E$ lie between the planes $z = a$ and $z = b$ and, for every $z \in [a, b]$, let $E_z = \{ (x, y) : (x, y, z) \in E \}$ be the **cross-section** of $E$ at height $z$. Then, for $f$ continuous on $E$,
$$
\iiint_E f(x, y, z)\, dx\, dy\, dz
= \int_a^b \left( \iint_{E_z} f(x, y, z)\, dx\, dy \right) dz .
$$
The solid is sliced with horizontal planes and a double integral is computed on each slice. **Reduction by slices** is convenient when the cross-sections have a simple shape and the function depends *only* on $z$: in that case the inner integral equals $f(z) \cdot \operatorname{Area}(E_z)$ and the computation reduces to a single integral. For $f = 1$ we obtain the volume as the integral of the areas of the cross-sections.
:::

:::esempio{titolo="Slices of a paraboloid"}
Let $E = \{ (x, y, z) : x^2 + y^2 \leq z \leq 1 \}$. The cross-section at height $z \in [0, 1]$ is the disk $x^2 + y^2 \leq z$, of area $\pi z$, so
$$
\operatorname{Vol}(E) = \int_0^1 \pi z \, dz = \frac{\pi}{2} .
$$
The integrand is $1$ and depends only on $z$, therefore the double integral over each cross-section is the **area of the cross-section**.

::grafico{xmin=-1.8 xmax=1.8 ymin=-0.4 ymax=1.5 uguale=1 nomi="x,z" f="x^2;1+0*sqrt(1-x^2)" area="1;x^2;-1;1" segmenti="-0.7071,0.5,0.7071,0.5" punti="-0.7071,0.5;0.7071,0.5" etichette="0.82,0.42,(√z, z);-1.75,1.08,z = 1" titolo="Cross-section of the solid $E$ with the plane $y = 0$: at height $z$ the solid is cut in the disk $x^2 + y^2 \leq z$, of radius $\sqrt{z}$"}

:::

## Cylindrical and spherical coordinates

:::teorema{#coordinate-cilindriche titolo="Cylindrical coordinates"}
**Cylindrical coordinates** are polar coordinates in the $xy$-plane with the height $z$ unchanged:
$$
\begin{cases}
x = \rho \cos\theta \\
y = \rho \sin\theta \\
z = z
\end{cases}
\qquad \rho \geq 0, \quad \theta \in [0, 2\pi) .
$$
The Jacobian is $\rho$, the same as for polar coordinates, so $dx\, dy\, dz = \rho\, d\rho\, d\theta\, dz$. They are convenient for solids with an **axis of symmetry**, such as cylinders, cones and paraboloids with axis $z$: the cylinder $x^2 + y^2 \leq R^2$, $0 \leq z \leq h$ becomes the box $0 \leq \rho \leq R$, $0 \leq \theta \leq 2\pi$, $0 \leq z \leq h$, and the cone $z = \sqrt{x^2 + y^2}$ has equation $z = \rho$.
:::

:::teorema{#coordinate-sferiche titolo="Spherical coordinates"}
**Spherical coordinates** identify a point by the distance $r$ from the origin, the **colatitude** $\varphi$ measured from the positive $z$-semiaxis and the **longitude** $\theta$:
$$
\begin{cases}
x = r \sin\varphi \cos\theta \\
y = r \sin\varphi \sin\theta \\
z = r \cos\varphi
\end{cases}
\qquad r \geq 0, \quad \varphi \in [0, \pi], \quad \theta \in [0, 2\pi) .
$$
The absolute value of the Jacobian is $r^2 \sin\varphi$, so $dx\, dy\, dz = r^2 \sin\varphi\, dr\, d\varphi\, d\theta$. The identity $x^2 + y^2 + z^2 = r^2$ holds, therefore spherical coordinates are convenient for spheres, spherical caps and functions of the distance from the origin: the ball $x^2 + y^2 + z^2 \leq R^2$ becomes the box $0 \leq r \leq R$, $0 \leq \varphi \leq \pi$, $0 \leq \theta \leq 2\pi$, and the half-ball with $z \geq 0$ is obtained with $0 \leq \varphi \leq \dfrac{\pi}{2}$.

::grafico{xmin=-2.6 xmax=2.6 ymin=-2.4 ymax=2.5 uguale=1 nomi="x,z" curve="2*cos(t),2*sin(t),0,6.29;0.5646*t,0.8253*t,0,2;0.6*cos(t),0.6*sin(t),0.9708,1.5708" segmenti="1.1293,1.6507,0,1.6507;1.1293,1.6507,1.1293,0" punti="1.1293,1.6507,pieno,P" etichette="0.72,0.62,r;0.1,0.72,φ" titolo="Cross-section with the plane $y = 0$, in the half-plane $\theta = 0$: the point $P$ is at distance $r$ from the origin and has colatitude $\varphi$ measured from the positive $z$-semiaxis"}

:::

:::esempio{titolo="Volume of the ball"}
$$
\begin{aligned}
\operatorname{Vol}\bigl( x^2 + y^2 + z^2 \leq R^2 \bigr)
&= \int_0^{2\pi} \int_0^{\pi} \int_0^R r^2 \sin\varphi \, dr\, d\varphi\, d\theta \\[6pt]
&= 2\pi \cdot \bigl[ -\cos\varphi \bigr]_0^{\pi} \cdot \frac{R^3}{3}
= \frac{4}{3} \pi R^3
\end{aligned}
$$
The integrand $r^2 \sin\varphi$ is a product of factors in separated variables and the limits are constant, so the triple integral is the **product of the three single integrals**.
:::

## Applications: areas, volumes, masses and centroids

:::definizione{#area-e-volume titolo="Area and volume as integrals"}
The area of a domain $D \subseteq \mathbb{R}^2$ and the volume of a region $E \subseteq \mathbb{R}^3$ are the **integrals of the constant function** $1$:
$$
\operatorname{Area}(D) = \iint_D dx\, dy ,
\qquad
\operatorname{Vol}(E) = \iiint_E dx\, dy\, dz .
$$
If $E$ is the solid lying between the $xy$-plane and the graph of a function $f \geq 0$ on $D$, integration by vertical lines gives
$$
\operatorname{Vol}(E) = \iint_D f(x, y)\, dx\, dy ,
$$
so the volume under a graph is computed with a double integral. The volume of the solid lying between two graphs $g \leq f$ on $D$ is the **integral of the difference** $f - g$.
:::

:::definizione{#massa-e-baricentro titolo="Mass and centroid"}
Let $\delta(x, y) \geq 0$ be the **surface density** of a plane lamina $D$. The **mass** and the **centroid** $(\bar{x}, \bar{y})$ of the lamina are
$$
m = \iint_D \delta(x, y)\, dx\, dy ,
\qquad
\bar{x} = \frac{1}{m} \iint_D x\, \delta(x, y)\, dx\, dy ,
\qquad
\bar{y} = \frac{1}{m} \iint_D y\, \delta(x, y)\, dx\, dy .
$$
For a solid $E$ with density $\delta(x, y, z)$ the formulas are the same with triple integrals and the third coordinate $\bar{z}$. If the lamina is homogeneous, that is, $\delta$ is constant, the density cancels between numerator and denominator and the centroid depends *only* on the shape: each coordinate of the centroid is the mean of the values of that coordinate over the domain. If a homogeneous domain is symmetric with respect to a line, the centroid lies on that line, since in the integral of the transverse coordinate the integrand is odd with respect to the symmetry.
:::

:::esempio{titolo="Centroid of a rectangle with variable density"}
The lamina $[0, 1] \times [0, 1]$ with density $\delta(x, y) = x$ has mass
$$
m = \int_0^1 \int_0^1 x \, dy\, dx = \frac{1}{2} ,
\qquad
\bar{x} = \frac{1}{m} \int_0^1 \int_0^1 x \cdot x \, dy\, dx = 2 \cdot \frac{1}{3} = \frac{2}{3} .
$$
The centroid has abscissa $\dfrac{2}{3} > \dfrac{1}{2}$, shifted toward the right-hand part of the lamina, where the **density is greater**; by the symmetry of the density with respect to the line $y = \dfrac{1}{2}$ we get $\bar{y} = \dfrac{1}{2}$.
:::
