---
titolo: Analytic geometry in space
sommario: How to use coordinates to describe points, vectors, planes, lines and spheres in three dimensions, calculate distances, angles and vector products, and determine the relative positions of lines and planes.
---

## Cartesian coordinates in three dimensions

:::definizione{#coordinate-spazio titolo="A Cartesian coordinate system in three dimensions"}
A **Cartesian coordinate system** in space consists of three oriented lines, the $x$-, $y$- and $z$-axes, that meet at a point $O$ called the origin and are pairwise perpendicular. All three axes use the same unit of length. They are oriented so that, when the plane of the $x$- and $y$-axes is viewed from the positive $z$-axis, a quarter turn from the positive $x$-axis to the positive $y$-axis is counterclockwise.

For a point $P$ in space, draw the three planes through $P$ perpendicular to the respective axes. These planes meet the axes at three points. Their coordinates on the axes are the **coordinates** of $P$, written $P(x_P, y_P, z_P)$. The numbers $x_P$, $y_P$ and $z_P$ are the abscissa, the ordinate and the **height** of $P$, respectively.

For example, to reach the point $P(2, 3, 4)$, start at the origin, move $2$ units in the direction of the $x$-axis, then $3$ units in the direction of the $y$-axis, and finally rise $4$ units in the direction of the $z$-axis. The point $H(2, 3, 0)$ lies below $P$ in the plane of the $x$- and $y$-axes and is called the projection of $P$ onto that plane.

::grafico{assi=0 uguale=1 linee="0,0 -2,-2;-1.68,-1.89 -2,-2 -1.89,-1.68;0,0 5,0;4.70,0.15 5,0 4.70,-0.15;0,0 0,5;-0.15,4.70 0,5 0.15,4.70" segmenti="-1,-1,2,-1;3,0,2,-1;2,-1,2,3;3,0,3,4;3,4,2,3;0,4,3,4" punti="2,3,pieno,P;2,-1,pieno,H" etichette="-2.35,-1.75,x;5.1,-0.45,y;0.25,4.9,z;-1.45,-0.75,2;3.05,-0.5,3;-0.45,3.85,4" xmin=-2.6 xmax=5.6 ymin=-2.4 ymax=5.4 titolo="The point $P(2, 3, 4)$ and its projection $H(2, 3, 0)$ onto the plane of the $x$- and $y$-axes. The dashed segments are edges of the rectangular box with opposite vertices at the origin and $P$"}

:::

:::osservazione{#piani-coordinati titolo="Coordinate planes and points on the axes"}
The three planes that each contain two axes are called the **coordinate planes**. The plane of the $x$- and $y$-axes consists of the points of height zero, so its equation is $z = 0$. Similarly, the plane of the $x$- and $z$-axes has equation $y = 0$, and the plane of the $y$- and $z$-axes has equation $x = 0$. A point on the $x$-axis has second and third coordinates zero, so its coordinates are $(a, 0, 0)$. Points on the $y$- and $z$-axes have coordinates $(0, b, 0)$ and $(0, 0, c)$, respectively. For example, $A(0, -3, 5)$ lies in the plane $x = 0$ and $B(0, 0, -2)$ lies on the $z$-axis.
:::

:::teorema{#distanza-due-punti titolo="Distance between two points"}
The distance between the points $A(x_A, y_A, z_A)$ and $B(x_B, y_B, z_B)$ is
$$
\overline{AB} = \sqrt{(x_B - x_A)^2 + (y_B - y_A)^2 + (z_B - z_A)^2} .
$$
The formula follows by applying the Pythagorean theorem twice. Let $K(x_B, y_B, z_A)$ be the point at the same height as $A$ on the vertical line through $B$. The segment $AK$ is horizontal, so the distance formula in the plane gives $\overline{AK}^2 = (x_B - x_A)^2 + (y_B - y_A)^2$. The segment $KB$ is vertical and has length $|z_B - z_A|$, so triangle $AKB$ has a right angle at $K$ and $\overline{AB}^2 = \overline{AK}^2 + \overline{KB}^2$.

For $A(1, 2, -1)$ and $B(3, -1, 5)$ the differences between corresponding coordinates are $2$, $-3$ and $6$, so
$$
\overline{AB} = \sqrt{4 + 9 + 36} = \sqrt{49} = 7 .
$$
The distance from a point $P(x, y, z)$ to the origin is $\overline{OP} = \sqrt{x^2 + y^2 + z^2}$. For the point $P(2, 3, 4)$ this gives $\sqrt{29}$, the length of the diagonal of the rectangular box with opposite vertices at the origin and $P$.
:::

:::teorema{#punto-medio titolo="Midpoint of a segment"}
The coordinates of the midpoint $M$ of the segment with endpoints $A(x_A, y_A, z_A)$ and $B(x_B, y_B, z_B)$ are the averages of the corresponding endpoint coordinates:
$$
M\left( \frac{x_A + x_B}{2}, \frac{y_A + y_B}{2}, \frac{z_A + z_B}{2} \right) .
$$
For $A(1, 2, -1)$ and $B(3, -1, 5)$ this gives $M\left( 2, \dfrac{1}{2}, 2 \right)$. The formula can also be used in reverse. If $M(2, 0, 1)$ is the midpoint of $AB$ and one endpoint is $A(5, -1, 3)$, then $x_B = 2 \cdot 2 - 5 = -1$, $y_B = 0 + 1 = 1$ and $z_B = 2 \cdot 1 - 3 = -1$, giving $B(-1, 1, -1)$. The point $B$ is the reflection of $A$ through $M$.
:::

:::osservazione{#baricentro titolo="Centroid of a triangle"}
The **centroid** of the triangle with vertices $A$, $B$ and $C$ is the point where its three medians meet. Its coordinates are the averages of the corresponding coordinates of the three vertices:
$$
G\left( \frac{x_A + x_B + x_C}{3}, \frac{y_A + y_B + y_C}{3}, \frac{z_A + z_B + z_C}{3} \right) .
$$
For $A(1, 0, 2)$, $B(3, 4, -1)$ and $C(-1, 2, 5)$ we have $G(1, 2, 2)$.
:::

## Vectors in three dimensions

:::definizione{#vettori-spazio titolo="Vectors and their components"}
A **vector** is determined by the line it is parallel to, the way it points along that line, and its magnitude, or length. It is denoted by $\vec{v}$ and represented by an arrow. Two parallel arrows of the same length pointing the same way represent the same vector. Let $\vec{i}$, $\vec{j}$ and $\vec{k}$ be the vectors of magnitude $1$ pointing along the positive $x$-, $y$- and $z$-axes. Every vector can be written in exactly one way as
$$
\vec{v} = a\,\vec{i} + b\,\vec{j} + c\,\vec{k} ,
$$
where the numbers $a$, $b$ and $c$ are the **components** of $\vec{v}$. We write $\vec{v} = (a, b, c)$. The components of the vector from point $A$ to point $B$ are the differences between corresponding coordinates:
$$
\overrightarrow{AB} = (x_B - x_A,\ y_B - y_A,\ z_B - z_A) .
$$
The **magnitude** of $\vec{v} = (a, b, c)$ is the length of its arrow, so by the distance formula $|\vec{v}| = \sqrt{a^2 + b^2 + c^2}$. For $A(1, 0, 2)$ and $B(3, 4, 6)$ we have $\overrightarrow{AB} = (2, 4, 4)$ and $\left| \overrightarrow{AB} \right| = \sqrt{4 + 16 + 16} = 6$, which is the distance between $A$ and $B$.
:::

:::definizione{#operazioni-vettori titolo="Vector addition and multiplication by a scalar"}
The **sum** of two vectors is given by the parallelogram rule, just as in the plane. In coordinates, add the corresponding components. To find the **product** of a real number $k$ and a vector, multiply each component by $k$:
$$
(a, b, c) + (a', b', c') = (a + a',\ b + b',\ c + c') ,
\qquad
k\,(a, b, c) = (ka,\ kb,\ kc) .
$$
The vector $k\,\vec{v}$ is parallel to $\vec{v}$, points the same way if $k > 0$ and the opposite way if $k < 0$, and has magnitude $|k|\,|\vec{v}|$. For $\vec{u} = (1, -2, 3)$ and $\vec{v} = (2, 0, -1)$ we have $\vec{u} + \vec{v} = (3, -2, 2)$ and $3\vec{u} - 2\vec{v} = (3 - 4,\ -6 - 0,\ 9 + 2) = (-1, -6, 11)$.

A vector of magnitude $1$ is called a **unit vector**. Dividing a nonzero vector by its magnitude gives the unit vector pointing in the same direction as the original vector. For example, $\vec{v} = (2, -1, 2)$ has magnitude $3$, so the corresponding unit vector is $\left( \dfrac{2}{3}, -\dfrac{1}{3}, \dfrac{2}{3} \right)$.
:::

## The dot product and cross product

:::definizione{#prodotto-scalare titolo="Dot product"}
Let $\vec{u}$ and $\vec{v}$ be nonzero vectors, and let $\theta$, with $0 \leq \theta \leq \pi$, be the angle between them, measured with the two arrows starting at the same point. The **dot product** of $\vec{u}$ and $\vec{v}$ is the number
$$
\vec{u} \cdot \vec{v} = |\vec{u}|\,|\vec{v}| \cos \theta ;
$$
If either vector is zero, the dot product is $0$. In terms of the components of $\vec{u} = (a, b, c)$ and $\vec{v} = (a', b', c')$, we have
$$
\vec{u} \cdot \vec{v} = a a' + b b' + c c' .
$$
The component formula follows from the law of cosines applied to the triangle with two sides represented by $\vec{u}$ and $\vec{v}$. For $\vec{u} = (1, 2, 2)$ and $\vec{v} = (3, 0, 4)$ we have $\vec{u} \cdot \vec{v} = 3 + 0 + 8 = 11$. The dot product of a vector with itself is the square of its magnitude because $\cos 0 = 1$. Indeed, $\vec{u} \cdot \vec{u} = 1 + 4 + 4 = 9 = |\vec{u}|^2$.
:::

:::teorema{#angolo-vettori titolo="Angle between two vectors"}
If $\vec{u}$ and $\vec{v}$ are nonzero, the angle $\theta$ between them satisfies
$$
\cos \theta = \frac{\vec{u} \cdot \vec{v}}{|\vec{u}|\,|\vec{v}|} .
$$
This formula follows by dividing the definition of the dot product by $|\vec{u}|\,|\vec{v}|$. It allows us to calculate angles using only the components. For $\vec{u} = (1, 0, 1)$ and $\vec{v} = (1, 1, 0)$ we have
$$
\cos \theta = \frac{1 + 0 + 0}{\sqrt{2} \cdot \sqrt{2}} = \frac{1}{2} ,
$$
so $\theta = \dfrac{\pi}{3}$. Since the denominator is positive, the angle is acute, right or obtuse depending on whether the dot product is positive, zero or negative.
:::

:::definizione{#prodotto-vettoriale titolo="Cross product"}
Let $\vec{u}$ and $\vec{v}$ be two nonparallel vectors and $\theta$ the angle between them. The **cross product** $\vec{u} \times \vec{v}$ is the vector with

- magnitude $|\vec{u}|\,|\vec{v}| \sin \theta$,
- a direction perpendicular to both $\vec{u}$ and $\vec{v}$,
- orientation given by the right-hand rule: if the thumb points along $\vec{u}$ and the index finger along $\vec{v}$, the middle finger points along $\vec{u} \times \vec{v}$.

If $\vec{u}$ and $\vec{v}$ are parallel, or if either is zero, the cross product is the zero vector. In terms of the components of $\vec{u} = (a, b, c)$ and $\vec{v} = (a', b', c')$, we have
$$
\vec{u} \times \vec{v} = \big( b c' - c b',\ \ c a' - a c',\ \ a b' - b a' \big) ,
$$
which agrees with the expansion of the determinant
$$
\vec{u} \times \vec{v} =
\begin{vmatrix}
\vec{i} & \vec{j} & \vec{k} \\
a & b & c \\
a' & b' & c'
\end{vmatrix} .
$$
The cross product gives a vector perpendicular to two given vectors and hence a normal vector to a plane containing them. The magnitude $|\vec{u} \times \vec{v}|$ is the area of the parallelogram with sides $\vec{u}$ and $\vec{v}$, because its base has length $|\vec{u}|$ and its height is $|\vec{v}| \sin \theta$. For $\vec{u} = (0, 2, 0)$ and $\vec{v} = (0, 1, 2)$ we obtain
$$
\vec{u} \times \vec{v} = \big( 2 \cdot 2 - 0 \cdot 1,\ \ 0 \cdot 0 - 0 \cdot 2,\ \ 0 \cdot 1 - 2 \cdot 0 \big) = (4, 0, 0) .
$$
The result points along the $x$-axis, which is perpendicular to the plane of the $y$- and $z$-axes containing $\vec{u}$ and $\vec{v}$, and the parallelogram has area $4$.

::grafico{assi=0 uguale=1 poligoni="0,0 2,0 3,2 1,2" linee="0,0 -2.6,-2.6;-2.28,-2.49 -2.6,-2.6 -2.49,-2.28;0,0 4.4,0;4.10,0.15 4.4,0 4.10,-0.15;0,0 0,3.4;-0.15,3.10 0,3.4 0.15,3.10" vettori="0,0,-2,-2;0,0,2,0,u;0,0,1,2,v" etichette="-2.95,-2.6,x;4.5,-0.4,y;0.2,3.35,z;-1.05,-1.65,u × v" xmin=-3.2 xmax=5 ymin=-3 ymax=3.8 titolo="The cross product of $\vec{u} = (0, 2, 0)$ and $\vec{v} = (0, 1, 2)$ is $(4, 0, 0)$, which is perpendicular to the plane of the two vectors. Its magnitude $4$ is the area of the shaded parallelogram"}

:::

:::teorema{#area-triangolo titolo="Area of a triangle"}
The area of the triangle with vertices $A$, $B$ and $C$ is half the area of the parallelogram formed by the sides $AB$ and $AC$, so
$$
\text{Area}(ABC) = \frac{1}{2} \left| \overrightarrow{AB} \times \overrightarrow{AC} \right| .
$$
For $A(1, 0, 0)$, $B(0, 1, 0)$ and $C(0, 0, 1)$ we have $\overrightarrow{AB} = (-1, 1, 0)$ and $\overrightarrow{AC} = (-1, 0, 1)$, so
$$
\overrightarrow{AB} \times \overrightarrow{AC} = \big( 1 \cdot 1 - 0 \cdot 0,\ \ 0 \cdot (-1) - (-1) \cdot 1,\ \ (-1) \cdot 0 - 1 \cdot (-1) \big) = (1, 1, 1) .
$$
The magnitude is $\sqrt{3}$, so the area is $\dfrac{\sqrt{3}}{2}$. There is another way to check the result: the triangle is equilateral with side length $\sqrt{2}$, so its area is $\dfrac{\sqrt{3}}{4} \cdot 2 = \dfrac{\sqrt{3}}{2}$.
:::

:::teorema{#parallelismo-perpendicolarita titolo="Conditions for vectors to be parallel or perpendicular"}
Let $\vec{u} = (a, b, c)$ and $\vec{v} = (a', b', c')$ be two nonzero vectors.

- $\vec{u}$ and $\vec{v}$ are **parallel** if and only if there is a number $k$ such that $\vec{v} = k\,\vec{u}$, that is, if their components are proportional. This occurs if and only if $\vec{u} \times \vec{v} = \vec{0}$.
- $\vec{u}$ and $\vec{v}$ are **perpendicular** if and only if $\vec{u} \cdot \vec{v} = a a' + b b' + c c' = 0$.

The second condition follows from the definition of the dot product, because $\cos \theta = 0$ if and only if $\theta = \dfrac{\pi}{2}$. For example, $(2, -1, 3)$ and $(-4, 2, -6)$ are parallel because the second is obtained by multiplying the first by $-2$, whereas $(1, 2, 2)$ and $(2, -2, 1)$ are perpendicular because $2 - 4 + 2 = 0$. Three points $A$, $B$ and $C$ are collinear if and only if $\overrightarrow{AB}$ and $\overrightarrow{AC}$ are parallel.
:::

## Equation of a plane

:::teorema{#equazione-piano titolo="Equation of a plane"}
A nonzero vector is **normal** to a plane if it is perpendicular to the plane. The plane through $P_0(x_0, y_0, z_0)$ with normal vector $\vec{n} = (a, b, c)$ has equation
$$
a\,(x - x_0) + b\,(y - y_0) + c\,(z - z_0) = 0 .
$$
Indeed, a point $P(x, y, z)$ lies in the plane if and only if the vector $\overrightarrow{P_0 P}$ is perpendicular to $\vec{n}$, that is, if and only if $\vec{n} \cdot \overrightarrow{P_0 P} = 0$. This dot product is the left-hand side of the equation. Expanding the products and setting $d = -a x_0 - b y_0 - c z_0$ gives the **Cartesian equation** of the plane,
$$
ax + by + cz + d = 0 ,
$$
where the coefficients $a$, $b$ and $c$ are not all zero. Conversely, every equation of this form represents a plane, and the vector of coefficients $(a, b, c)$ is normal to it.

For example, the plane through $P_0(1, -2, 3)$ with normal vector $\vec{n} = (2, 1, -1)$ has equation $2\,(x - 1) + (y + 2) - (z - 3) = 0$, or $2x + y - z + 3 = 0$. The coordinates of $P_0$ satisfy the equation because $2 - 2 - 3 + 3 = 0$.
:::

:::osservazione{#piani-particolari titolo="Special cases of plane equations"}
Some zero coefficients correspond to special positions of the plane $ax + by + cz + d = 0$.

- If $d = 0$, the plane passes through the origin. For example, $x - 2y + z = 0$.
- If $a = 0$, the normal vector $(0, b, c)$ is perpendicular to the $x$-axis, so the plane is parallel to the $x$-axis. For example, $y + z - 2 = 0$. Similarly, $b = 0$ gives a plane parallel to the $y$-axis, and $c = 0$ gives a plane parallel to the $z$-axis.
- If $a = b = 0$, the equation reduces to $z = k$ and the plane is parallel to the $z = 0$-plane. For example, $z = 3$ is the horizontal plane consisting of the points of height $3$. Similarly, $x = k$ and $y = k$ are parallel to the coordinate planes $x = 0$ and $y = 0$.
:::

:::teorema{#piano-tre-punti titolo="Plane through three points"}
Exactly one plane passes through three noncollinear points $A$, $B$ and $C$. The vectors $\overrightarrow{AB}$ and $\overrightarrow{AC}$ lie in the plane and are not parallel, so their cross product is a normal vector to the plane:
$$
\vec{n} = \overrightarrow{AB} \times \overrightarrow{AC} .
$$
Alternatively, substitute the coordinates of the three points into the equation $ax + by + cz + d = 0$ and solve the system for $a$, $b$, $c$ and $d$. It has infinitely many solutions, all proportional to one another.
:::

:::esempio{titolo="Plane with three given axis intercepts"}
Find the plane through $A(2, 0, 0)$, $B(0, 4, 0)$ and $C(0, 0, 3)$. We have $\overrightarrow{AB} = (-2, 4, 0)$ and $\overrightarrow{AC} = (-2, 0, 3)$, so
$$
\overrightarrow{AB} \times \overrightarrow{AC} = \big( 4 \cdot 3 - 0 \cdot 0,\ \ 0 \cdot (-2) - (-2) \cdot 3,\ \ (-2) \cdot 0 - 4 \cdot (-2) \big) = (12, 6, 8) .
$$
Another possible normal vector is $(6, 3, 4)$, which is parallel to the previous one. The plane passes through $A$, so its equation is $6\,(x - 2) + 3y + 4z = 0$, or $6x + 3y + 4z - 12 = 0$. Dividing by $12$ gives
$$
\frac{x}{2} + \frac{y}{4} + \frac{z}{3} = 1 ,
$$
where the denominators are the coordinates of the points where the plane meets the axes.

::grafico{assi=0 uguale=1 poligoni="-1,-1 4,0 0,3" linee="0,0 -2,-2;-1.68,-1.89 -2,-2 -1.89,-1.68;0,0 5,0;4.70,0.15 5,0 4.70,-0.15;0,0 0,4;-0.15,3.70 0,4 0.15,3.70" segmenti="-1,-1,4,0;4,0,0,3;0,3,-1,-1" punti="-1,-1,pieno;4,0,pieno,B;0,3,pieno,C" etichette="-1.5,-0.95,A;-2.35,-1.75,x;5.1,-0.45,y;0.25,3.9,z" xmin=-2.6 xmax=5.6 ymin=-2.4 ymax=4.4 titolo="The shaded triangle is the part of the plane $6x + 3y + 4z - 12 = 0$ between the three positive axes, with vertices $A(2, 0, 0)$, $B(0, 4, 0)$ and $C(0, 0, 3)$"}

:::

## Parallel and perpendicular planes

:::teorema{#piani-paralleli-perpendicolari titolo="Parallel planes and perpendicular planes"}
Let $\pi : ax + by + cz + d = 0$ and $\pi' : a'x + b'y + c'z + d' = 0$ be two planes with normal vectors $\vec{n} = (a, b, c)$ and $\vec{n}' = (a', b', c')$.

- The planes are **parallel** if and only if their normal vectors are parallel, that is, if there is a scalar $k$ such that $(a', b', c') = k\,(a, b, c)$. If $d' = k\,d$ also holds, the two planes coincide.
- The planes are **perpendicular** if and only if their normal vectors are perpendicular, that is, if $a a' + b b' + c c' = 0$.

Two nonparallel planes intersect along a line. For example, the planes $2x - y + z - 1 = 0$ and $4x - 2y + 2z + 5 = 0$ are parallel and distinct because $(4, -2, 2) = 2\,(2, -1, 1)$ but $5 \neq 2 \cdot (-1)$. The planes $x + y + z = 0$ and $x - 2y + z - 3 = 0$ are perpendicular because $1 - 2 + 1 = 0$.
:::

:::esempio{titolo="A plane parallel to a given plane and a plane perpendicular to two planes"}
The plane through $P(1, 2, -1)$ parallel to $3x - y + 2z + 7 = 0$ has the same normal vector $(3, -1, 2)$, so its equation is $3\,(x - 1) - (y - 2) + 2\,(z + 1) = 0$, or
$$
3x - y + 2z + 1 = 0 .
$$
The plane through the origin perpendicular to the planes $x + y = 0$ and $y - z = 0$ has a normal vector perpendicular to $(1, 1, 0)$ and $(0, 1, -1)$. We can therefore use the cross product
$$
(1, 1, 0) \times (0, 1, -1) = \big( 1 \cdot (-1) - 0 \cdot 1,\ \ 0 \cdot 0 - 1 \cdot (-1),\ \ 1 \cdot 1 - 1 \cdot 0 \big) = (-1, 1, 1) ,
$$
and the required plane is $-x + y + z = 0$.
:::

## Equations of a line

:::definizione{#retta-parametriche titolo="Parametric equations of a line"}
Let $r$ be the line through $P_0(x_0, y_0, z_0)$ parallel to the nonzero vector $\vec{v} = (l, m, n)$, called a **direction vector** of $r$. A point $P$ lies on $r$ if and only if $\overrightarrow{P_0 P}$ is parallel to $\vec{v}$, that is, if $\overrightarrow{P_0 P} = t\,\vec{v}$ for some real number $t$. Writing this equality component by component gives the **parametric equations** of $r$:
$$
\begin{cases}
x = x_0 + l\,t \\
y = y_0 + m\,t \\
z = z_0 + n\,t
\end{cases}
\qquad t \in \mathbb{R} .
$$
The components $l$, $m$ and $n$ are also called the **direction numbers** of the line. Each value of the parameter $t$ gives a point on the line. For the line through $P_0(1, -1, 2)$ with $\vec{v} = (2, 1, -3)$, the value $t = 1$ gives the point $(3, 0, -1)$ and the value $t = -1$ gives the point $(-1, -2, 5)$. The point $Q(5, 1, 0)$ does *not* lie on the line because the first equation $5 = 1 + 2t$ gives $t = 2$, whereas the second, $1 = -1 + t$, gives $t = 2$ and the third, $0 = 2 - 3t$, gives $t = \dfrac{2}{3}$.
:::

:::teorema{#retta-due-punti titolo="Line through two points"}
Exactly one line passes through two distinct points $A$ and $B$, and $\overrightarrow{AB}$ is a direction vector of this line. Its parametric equations are
$$
x = x_A + (x_B - x_A)\,t ,
\qquad
y = y_A + (y_B - y_A)\,t ,
\qquad
z = z_A + (z_B - z_A)\,t .
$$
For $t = 0$ we obtain $A$, for $t = 1$ we obtain $B$, and for $t = \dfrac{1}{2}$ we obtain the midpoint of $AB$. For $A(2, 1, 0)$ and $B(4, 0, 3)$ we have $\overrightarrow{AB} = (2, -1, 3)$, and the line has equations $x = 2 + 2t$, $y = 1 - t$, $z = 3t$.
:::

:::definizione{#retta-cartesiane titolo="Cartesian equations of a line"}
A line is the intersection of two nonparallel planes, so it can be described by the system of their equations:
$$
\begin{cases}
ax + by + cz + d = 0 \\
a'x + b'y + c'z + d' = 0
\end{cases}
$$
These are called the **Cartesian equations** of the line. To obtain the Cartesian equations from the parametric equations, eliminate the parameter $t$. If the components of $\vec{v}$ are all different from $0$, solving each equation for $t$ gives
$$
\frac{x - x_0}{l} = \frac{y - y_0}{m} = \frac{z - z_0}{n} ,
$$
which is equivalent to two plane equations. For the line $x = 1 + 2t$, $y = -1 + t$, $z = 2 - 3t$ this gives $\dfrac{x - 1}{2} = y + 1 = \dfrac{z - 2}{-3}$. The first equality gives $x - 1 = 2y + 2$, or $x - 2y - 3 = 0$, and the second gives $-3y - 3 = z - 2$, or $3y + z + 1 = 0$. The Cartesian equations of the line are therefore
$$
\begin{cases}
x - 2y - 3 = 0 \\
3y + z + 1 = 0
\end{cases}
$$
:::

:::teorema{#direzione-retta-cartesiane titolo="Direction vector of a line given as the intersection of two planes"}
If the line $r$ is the intersection of the planes with normal vectors $\vec{n}$ and $\vec{n}'$, then a direction vector of $r$ is
$$
\vec{v} = \vec{n} \times \vec{n}' .
$$
Indeed, $r$ lies in both planes, so its direction is perpendicular to both normals, and the cross product is perpendicular to both. To obtain the parametric equations from the Cartesian equations, calculate $\vec{v}$ and find a point on the line by assigning a value to one of the coordinates.
:::

:::esempio{titolo="From Cartesian to parametric equations"}
Consider the line
$$
r :
\begin{cases}
x + y - z - 1 = 0 \\
2x - y + z - 2 = 0
\end{cases}
$$
The normal vectors are $(1, 1, -1)$ and $(2, -1, 1)$, so
$$
\vec{n} \times \vec{n}' = \big( 1 \cdot 1 - (-1) \cdot (-1),\ \ (-1) \cdot 2 - 1 \cdot 1,\ \ 1 \cdot (-1) - 1 \cdot 2 \big) = (0, -3, -3) ,
$$
and $\vec{v} = (0, 1, 1)$ can be used as a direction vector. To find a point, set $z = 0$. The system becomes $x + y = 1$, $2x - y = 2$. Adding the two equations gives $3x = 3$, so $x = 1$ and $y = 0$. The line therefore passes through $(1, 0, 0)$ and has parametric equations $x = 1$, $y = t$, $z = t$. Substituting in the plane equations gives $1 + t - t - 1 = 0$ and $2 - t + t - 2 = 0$ for every $t$, confirming the result.
:::

## Relative positions of lines and planes

:::definizione{#posizione-due-rette titolo="Relative positions of two lines"}
Two lines in space can be

- **intersecting**, if they have a single point in common,
- **parallel**, if they have parallel direction vectors, in which case they are either distinct or coincident,
- **skew**, if they have no points in common and are not parallel.

Two intersecting or parallel lines lie in the same plane, whereas no plane contains a pair of skew lines. To determine their relative positions, first compare their direction vectors. If the vectors are not parallel, equate corresponding coordinates in the parametric equations of the two lines, using different parameters $t$ and $s$. If the system has a solution, the lines intersect. Otherwise they are skew. Two lines are called **perpendicular** if they intersect and their direction vectors are perpendicular.
:::

:::esempio{titolo="Intersecting and skew lines"}
Let $r$ be the line $x = 1 + t$, $y = 2t$, $z = -t$ with $\vec{v} = (1, 2, -1)$, and let $s$ be the line $x = 3 - s$, $y = 2s$, $z = 1 - 2s$ with $\vec{w} = (-1, 2, -2)$. The direction vectors are not proportional, so the lines are not parallel. Equating corresponding coordinates gives the system
$$
\begin{cases}
1 + t = 3 - s \\
2t = 2s \\
-t = 1 - 2s
\end{cases}
$$
The second equation gives $t = s$, and the first becomes $1 + t = 3 - t$, so $t = s = 1$. The third equation holds because $-1 = 1 - 2$. The two lines therefore **intersect** at the point obtained for $t = 1$, namely $(2, 2, -1)$.

Now let $s'$ be the line $x = s$, $y = 1$, $z = s$ with direction vector $(1, 0, 1)$, which is not parallel to $\vec{v}$. The system $1 + t = s$, $2t = 1$, $-t = s$ gives $t = \dfrac{1}{2}$ from the second equation. Then the first gives $s = \dfrac{3}{2}$ and the third gives $s = -\dfrac{1}{2}$. The system has no solutions, so $r$ and $s'$ are **skew**.
:::

:::teorema{#posizione-retta-piano titolo="Relative positions of a line and a plane"}
Let $r$ be a line with direction vector $\vec{v}$, and let $\pi$ be a plane with normal vector $\vec{n}$.

- If $\vec{v} \cdot \vec{n} \neq 0$, the line and plane **intersect** in a single point.
- If $\vec{v} \cdot \vec{n} = 0$, the line is **parallel** to the plane. In this case, if a point of $r$ lies in $\pi$, the entire line lies in the plane. Otherwise the line and plane have no points in common.

In practice, substituting the parametric equations of $r$ into the equation of $\pi$ gives a linear equation in $t$. If the equation has one solution, it gives the point of intersection. If it is inconsistent, the line is parallel to the plane and does not meet it. If it is an identity, the line lies in the plane.

For the line $r : x = 1 + t$, $y = 2 - t$, $z = 3t$ and the plane $x + y + z - 6 = 0$ this gives $1 + t + 2 - t + 3t - 6 = 0$, or $3t - 3 = 0$, so $t = 1$ and the intersection point is $(2, 1, 3)$. For the plane $x + y - 4 = 0$ the result is instead $1 + t + 2 - t - 4 = 0$, or $-1 = 0$, which is impossible. The line is therefore parallel to that plane and does not meet it. For the plane $x + y - 3 = 0$ the result is $0 = 0$, and the line lies in the plane.
:::

:::teorema{#retta-perpendicolare-piano titolo="Line perpendicular to a plane"}
A line is **perpendicular** to a plane if and only if its direction vector is parallel to the normal vector of the plane. Therefore the line through a point $P_0$ perpendicular to the plane $ax + by + cz + d = 0$ has equations
$$
x = x_0 + a\,t ,
\qquad
y = y_0 + b\,t ,
\qquad
z = z_0 + c\,t .
$$
The point where this line meets the plane is called the **orthogonal projection** of $P_0$ onto the plane. For example, the line through $P_0(1, 0, 2)$ perpendicular to the plane $x - y + 2z = 0$ is given by $x = 1 + t$, $y = -t$, $z = 2 + 2t$. Similarly, the plane through $P_0$ perpendicular to a line with direction vector $\vec{v}$ is the plane through $P_0$ with normal vector $\vec{v}$.
:::

## Distances

:::teorema{#distanza-punto-piano titolo="Distance from a point to a plane"}
The distance from the point $P_0(x_0, y_0, z_0)$ to the plane $\pi : ax + by + cz + d = 0$ is the length of the segment $P_0 H$, where $H$ is the orthogonal projection of $P_0$ onto $\pi$. It is given by
$$
d(P_0, \pi) = \frac{|a x_0 + b y_0 + c z_0 + d|}{\sqrt{a^2 + b^2 + c^2}} .
$$
This formula is analogous to the formula for the distance from a point to a line in the Cartesian plane. It follows by finding the coordinates of $H$ using the orthogonal projection procedure with general coordinates. For $P_0(2, 0, 4)$ and $\pi : 2x - y + 2z - 3 = 0$, we have
$$
d(P_0, \pi) = \frac{|4 - 0 + 8 - 3|}{\sqrt{4 + 1 + 4}} = \frac{9}{3} = 3 .
$$
The numerator is zero if and only if $P_0$ lies in the plane.

::grafico{assi=0 uguale=1 poligoni="-2.5,-1.5 2.5,-1.5 4.5,0.5 -0.5,0.5" segmenti="1,2.5,1,-0.5" vettori="2.6,-0.9,2.6,0.9,n" punti="1,2.5,pieno,P₀;1,-0.5,pieno,H" etichette="3.7,-1.2,π;0.55,1,d" xmin=-3 xmax=5 ymin=-2 ymax=3.2 titolo="The distance from $P_0$ to the plane $\pi$ is the length of the segment $P_0 H$, which is parallel to the normal vector $\vec{n}$"}

:::

:::esempio{titolo="Orthogonal projection of a point onto a plane"}
Find the projection of $P_0(2, 0, 4)$ onto the plane $\pi : 2x - y + 2z - 3 = 0$. The line through $P_0$ perpendicular to $\pi$ has direction vector $\vec{n} = (2, -1, 2)$, so its equations are $x = 2 + 2t$, $y = -t$, $z = 4 + 2t$. Substitution into the plane equation gives
$$
2\,(2 + 2t) + t + 2\,(4 + 2t) - 3 = 0
\qquad
\Longrightarrow
\qquad
9 + 9t = 0
\qquad
\Longrightarrow
\qquad
t = -1 ,
$$
so $H(0, 1, 2)$. The distance is $\overline{P_0 H} = \sqrt{4 + 1 + 4} = 3$, in agreement with the formula. The reflection of $P_0$ across the plane is the point for which $H$ is the midpoint of the segment joining the two points. It is found from $t = -2$, giving $P_0'(-2, 2, 0)$.
:::

:::osservazione{#distanza-piani-paralleli titolo="Distance between two parallel planes"}
The distance between two parallel planes is the distance from any point on the first plane to the second plane. If the two plane equations have the same coefficients for the variables, $ax + by + cz + d = 0$ and $ax + by + cz + d' = 0$, the distance is
$$
\frac{|d - d'|}{\sqrt{a^2 + b^2 + c^2}} .
$$
For the planes $2x - y + 2z - 3 = 0$ and $2x - y + 2z + 6 = 0$ the distance is $\dfrac{|-3 - 6|}{3} = 3$. The same result follows by using the point $(0, -3, 0)$ in the first plane, whose distance from the second is $\dfrac{|0 + 3 + 0 + 6|}{3} = 3$.
:::

:::teorema{#distanza-punto-retta titolo="Distance from a point to a line"}
The distance from the point $P$ to the line $r$ is the length of the segment $PH$, where $H$ is the point on $r$ for which $PH$ is perpendicular to $r$. Find $H$ by intersecting $r$ with the plane through $P$ perpendicular to $r$. Alternatively, if $A$ is a point on $r$ and $\vec{v}$ is a direction vector of the line, then
$$
d(P, r) = \frac{\left| \overrightarrow{AP} \times \vec{v} \right|}{|\vec{v}|} ,
$$
because the numerator is the area of the parallelogram with sides $\overrightarrow{AP}$ and $\vec{v}$, the denominator is its base, and the distance is its height.

::grafico{assi=0 uguale=1 linee="-1,0 6.2,0" vettori="0,0,1.6,0,v" segmenti="3,2,3,0;0,0,3,2" punti="0,0,pieno,A;3,2,pieno,P;3,0,pieno,H" etichette="6.3,0.15,r;3.15,0.9,d" xmin=-1.5 xmax=7 ymin=-0.8 ymax=2.8 titolo="In the plane containing the point $P$ and the line $r$, the distance $d$ is the height of the parallelogram with sides $\overrightarrow{AP}$ and $\vec{v}$ measured from the base $\vec{v}$"}

For example, consider the line $r : x = 1 + t$, $y = 2t$, $z = -1 + 2t$ and the point $P(4, 0, 2)$. The plane through $P$ perpendicular to $r$ has normal vector $\vec{v} = (1, 2, 2)$, so its equation is $(x - 4) + 2y + 2\,(z - 2) = 0$, or $x + 2y + 2z - 8 = 0$. Substituting the equations of $r$ gives
$$
1 + t + 4t - 2 + 4t - 8 = 0
\qquad
\Longrightarrow
\qquad
9t - 9 = 0
\qquad
\Longrightarrow
\qquad
t = 1 ,
$$
so $H(2, 2, 1)$ and $d(P, r) = \overline{PH} = \sqrt{4 + 4 + 1} = 3$. For the second formula, take $A(1, 0, -1)$. Then $\overrightarrow{AP} = (3, 0, 3)$ and $\overrightarrow{AP} \times \vec{v} = (-6, -3, 6)$, which has magnitude $9$. Dividing by $|\vec{v}| = 3$ gives $3$ again.
:::

## Spheres and tangent planes

:::definizione{#superficie-sferica titolo="Sphere"}
The **sphere** with center $C(\alpha, \beta, \gamma)$ and radius $R > 0$ is the set of points in space at distance $R$ from $C$. By the distance formula, a point $P(x, y, z)$ lies on it if and only if
$$
(x - \alpha)^2 + (y - \beta)^2 + (z - \gamma)^2 = R^2 .
$$
Expanding the squares gives an equation of the form
$$
x^2 + y^2 + z^2 + ax + by + cz + d = 0 ,
\qquad
\text{with } a = -2\alpha , \quad b = -2\beta , \quad c = -2\gamma , \quad d = \alpha^2 + \beta^2 + \gamma^2 - R^2 .
$$
For example, the sphere with center $C(1, -2, 3)$ and radius $4$ has equation $(x - 1)^2 + (y + 2)^2 + (z - 3)^2 = 16$, or $x^2 + y^2 + z^2 - 2x + 4y - 6z - 2 = 0$, because $1 + 4 + 9 - 16 = -2$. The points inside the sphere are those whose distance from $C$ is less than $R$.
:::

:::teorema{#equazione-sfera titolo="Finding the center and radius from the equation"}
The equation $x^2 + y^2 + z^2 + ax + by + cz + d = 0$ represents a sphere if and only if
$$
\frac{a^2}{4} + \frac{b^2}{4} + \frac{c^2}{4} - d > 0 .
$$
In that case, the center and radius are
$$
C\left( -\frac{a}{2}, -\frac{b}{2}, -\frac{c}{2} \right) ,
\qquad
R = \sqrt{\frac{a^2}{4} + \frac{b^2}{4} + \frac{c^2}{4} - d} .
$$
The formulas follow by comparing the equation with the one in the definition. For $x^2 + y^2 + z^2 - 4x + 2y + 6z + 5 = 0$ we have $C(2, -1, -3)$ and $R^2 = 4 + 1 + 9 - 5 = 9$, so $R = 3$.
:::

:::attenzione
A quadratic equation in $x$, $y$ and $z$ does not always represent a sphere. For it to represent a sphere, the coefficients of $x^2$, $y^2$ and $z^2$ must be equal, there must be no terms such as $xy$, and the condition on the radius must also hold. For example, $x^2 + y^2 + z^2 + 2x + 5 = 0$ represents no points because it can be written as $(x + 1)^2 + y^2 + z^2 = -4$ and the left-hand side is never negative.
:::

:::teorema{#posizione-piano-sfera titolo="Relative positions of a plane and a sphere"}
Let $C$ be the center and $R$ the radius of a sphere, and let $\delta$ be the distance from $C$ to a plane $\pi$.

- If $\delta > R$, the plane is **exterior** to the sphere and has no points in common with it.
- If $\delta = R$, the plane is **tangent** to the sphere and has exactly one point in common with it.
- If $\delta < R$, the plane is a **secant plane** and intersects the sphere in a circle centered at the projection $H$ of $C$ onto the plane, with radius $r = \sqrt{R^2 - \delta^2}$.

The radius $r$ follows from the Pythagorean theorem in the right triangle with vertices $C$, $H$ and a point $Q$ on the circle, because $\overline{CQ} = R$ and $\overline{CH} = \delta$. For the sphere with center $C(1, 2, -1)$ and radius $5$ and the plane $z = 3$, we have $\delta = 3 - (-1) = 4 < 5$. The plane is therefore a secant plane and intersects the sphere in the circle with center $H(1, 2, 3)$ and radius $r = \sqrt{25 - 16} = 3$.

::grafico{f="3+0*x" curve="1+5*cos(t),-1+5*sin(t),0,6.29" segmenti="1,-1,1,3;1,-1,4,3" punti="1,-1,pieno,C;1,3,pieno,H;4,3,pieno,Q" nomi="x,z" xmin=-6 xmax=8 ymin=-8 ymax=6 uguale=1 legenda="z = 3;(x - 1)^2 + (z + 1)^2 = 25" titolo="Cross section in the plane $y = 2$ showing the sphere with center $C(1, 2, -1)$ and radius $5$ and the plane $z = 3$. In triangle $CHQ$ we have $\overline{CH} = 4$ and $\overline{CQ} = 5$, so $\overline{HQ} = 3$"}

:::

:::teorema{#piano-tangente-sfera titolo="Tangent plane to a sphere"}
The tangent plane to a sphere with center $C$ at a point $T$ on the sphere is the plane through $T$ perpendicular to the radius $CT$, that is, the plane through $T$ with normal vector $\overrightarrow{CT}$. Indeed, the distance from $C$ to this plane is $\overline{CT} = R$.

For the sphere $(x - 1)^2 + (y + 2)^2 + (z - 3)^2 = 9$, the point $T(3, -1, 5)$ lies on the sphere because $4 + 1 + 4 = 9$. We have $\overrightarrow{CT} = (2, 1, 2)$, so the tangent plane at $T$ is
$$
2\,(x - 3) + (y + 1) + 2\,(z - 5) = 0 ,
\qquad
\text{that is,}
\qquad
2x + y + 2z - 15 = 0 .
$$
The distance provides a check because $d(C, \pi) = \dfrac{|2 - 2 + 6 - 15|}{3} = 3 = R$.

::grafico{assi=0 uguale=1 f="4.243-x" curve="3*cos(t),3*sin(t),0,6.29" vettori="0,0,2.121,2.121" punti="0,0,pieno,C;2.121,2.121,pieno,T" etichette="4.1,0.55,π;0.75,1.3,R" xmin=-3.6 xmax=5 ymin=-3.6 ymax=4 legenda="0" titolo="Cross section in a plane containing the center $C$ and the point of tangency $T$. The tangent plane appears as the line perpendicular to the radius $CT$ at the point $T$"}

:::
