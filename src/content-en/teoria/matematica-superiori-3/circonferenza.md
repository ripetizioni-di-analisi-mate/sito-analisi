---
titolo: Circles, lines and tangents
sommario: From centre and radius to the equation, with methods for finding intersections, tangents, chords and common points of two circles.
---

## Centre, radius and equation

:::definizione{#centro titolo="Points at a fixed distance"}
The **circle** with centre $C(h,k)$ and radius $r>0$ is the set of points $P(x,y)$ satisfying $CP=r$. The letters $h$ and $k$ are the fixed coordinates of the centre, while $x$ and $y$ vary with $P$. The distance $CP$ is the hypotenuse of a right triangle whose horizontal and vertical sides have lengths $|x-h|$ and $|y-k|$. By the Pythagorean theorem,
$$
CP^2=(x-h)^2+(y-k)^2.
$$
Since $CP$ and $r$ are both non-negative, the distances are equal exactly when their squares are equal. This gives the equation
$$
(x-h)^2+(y-k)^2=r^2 .
$$
This form lets us write the equation from the centre and a single distance.
:::

:::esempio{titolo="From centre and radius to equation"}
For $C(1,-2)$ and $r=3$, the difference between the vertical coordinates is $y-(-2)=y+2$. The equation is therefore $(x-1)^2+(y+2)^2=9$. On the horizontal line $y=-2$, the second square is zero, so the $x$-coordinates of the endpoints of the horizontal diameter are $1-3=-2$ and $1+3=4$. Similarly, on $x=1$ the $y$-coordinates are $-5$ and $1$. These four points help us draw the curve using the same scale on both axes.

::grafico{curve="1+3*cos(t),-2+3*sin(t),0,6.283185307" xmin=-4 xmax=6 ymin=-6 ymax=3 uguale=1 punti="1,-2,pieno,C;-2,-2;4,-2;1,-5;1,1" segmenti="-2,-2,4,-2;1,-5,1,1" legenda="(x-1)^2+(y+2)^2=9" titolo="Fixing one coordinate at its value at the centre gives the horizontal or vertical diameter."}

:::

:::attenzione
In the equation $(x-1)^2+(y+2)^2=9$, the $y$-coordinate of the centre is $-2$. Indeed, $y=-2$ makes $y+2$ zero. The number $9$ is the square of the radius, so the radius is $3$.
:::

## General form and degenerate cases

::::teorema{#generale titolo="Completing the squares"}
Let $D,E,F$ be real numbers in the equation $x^2+y^2+Dx+Ey+F=0$. Set
$$
q=\frac{D^2+E^2}{4}-F .
$$
If $q>0$, the equation represents the circle with centre $C\left(-\dfrac D2,-\dfrac E2\right)$ and radius $r=\sqrt q$. If $q=0$, the locus is the single point $C$, also called a degenerate circle. If $q<0$, the real locus is empty. The sign of $q$ therefore determines whether there is a circle with positive radius.

:::dimostrazione
To obtain the square with linear term $Dx$, square the binomial $x+\dfrac D2$. Its expansion contains the constant $\dfrac{D^2}{4}$, which must also be subtracted to keep the original polynomial. The same calculation applies to $y^2+Ey$. Moving the constants to the right gives
$$
\begin{aligned}
x^2+Dx+y^2+Ey&=-F,\\[4pt]
\left(x+\frac D2\right)^2+\left(y+\frac E2\right)^2
&=\frac{D^2}{4}+\frac{E^2}{4}-F.
\end{aligned}
$$
The left-hand side is a sum of two squares. It can be positive or zero. In the second case both squares must vanish, so the only point is $C$. For a positive right-hand side, the definition of a circle applies.
:::
::::

:::esempio{titolo="Finding both the centre and the radius"}
For $x^2+y^2-2x+4y-4=0$, group the terms in $x$ and in $y$. Add $1$ to complete the square in $x$ and $4$ to complete the square in $y$.
$$
\begin{aligned}
x^2-2x+y^2+4y&=4,\\
(x^2-2x+1)+(y^2+4y+4)&=4+1+4,\\
(x-1)^2+(y+2)^2&=9 .
\end{aligned}
$$
The centre is $C(1,-2)$ and the radius is $3$. In the family $x^2+y^2-2x+4y+m=0$, the centre is the same, while $q=5-m$. For $m<5$ there is a circle, for $m=5$ the centre is the only point, and for $m>5$ the locus is empty.
:::

:::osservazione
To recognise the general form, the coefficients of $x^2$ and $y^2$ must be equal and nonzero, and the coefficient of $xy$ must be zero. For example, in $2x^2+2y^2-8x+6=0$, divide the whole equation by $2$ before reading off $D=-4$ and $F=3$. Here $q=1$ and the centre is $(2,0)$. The sign of $q$ still needs to be checked after division.
:::

## Points on, inside and outside a circle

:::teorema{#punti titolo="Comparing squared distances"}
For a circle with radius $r>0$ and centre $C$, a point $P$ is on the circle if $CP^2=r^2$, inside if $CP^2<r^2$, and outside if $CP^2>r^2$. Comparing the squares avoids evaluating a square root. The **closed disk** consists of the points with $CP^2\leq r^2$.
:::

:::esempio{titolo="Three positions relative to one centre"}
For the circle $x^2+y^2=25$, compare $25$ with the squared distances from the origin to $P(3,4)$, $Q(1,1)$ and $R(5,3)$.
$$
\begin{aligned}
CP^2 &= 3^2+4^2=25,\\
CQ^2 &= 1^2+1^2=2,\\
CR^2 &= 5^2+3^2=34 .
\end{aligned}
$$
$P$ is on the circle, $Q$ is inside and $R$ is outside. $R$ has the same $x$-coordinate as the point $(5,0)$ on the circle. Its nonzero $y$-coordinate increases the distance from the centre, so it lies outside the disk.

::grafico{curve="5*cos(t),5*sin(t),0,6.283185307" xmin=-6 xmax=7 ymin=-6 ymax=6 uguale=1 punti="0,0,pieno,C;3,4,pieno,P;1,1,pieno,Q;5,3,pieno,R" segmenti="0,0,3,4" legenda="x^2+y^2=25" titolo="$P$ is on the circle, $Q$ is inside and $R$ is outside."}

:::

:::teorema{#distanza-curva titolo="Distance from a point to a circle"}
For a point $P$ in the plane, the distance to the circle with centre $C$ and radius $r$ is the minimum of $PQ$ as $Q$ varies along the circle. Write $\rho=CP$ for the distance from the centre. Applying the triangle inequality in both directions gives
$$
PQ\geq CP-CQ=\rho-r,\qquad
PQ\geq CQ-CP=r-\rho .
$$
Therefore $PQ\geq |\rho-r|$. If $P\neq C$, the ray from $C$ through $P$ contains a point of the circle at distance $|\rho-r|$ from $P$. This attains the minimum, so
$$
d(P,\text{circle})=|\rho-r| .
$$
When $P=C$, every point of the circle is at distance $r$, and the formula gives the same result. The minimum is zero exactly at the points on the circle.
:::

:::esempio{titolo="A point near the edge of a track"}
The edge of a track is modelled by $x^2+y^2=100$, with coordinates measured in metres. For $P(3,4)$ the distance from the centre is $5$. The nearest point on the edge is found by extending the radius through $P$ to a distance of $10$ from the centre. Doubling the coordinates gives $Q(6,8)$. The distance from $P$ to $Q$ is $\sqrt{3^2+4^2}=5$, which equals $10-5$. Since $P$ is inside, its distance to the disk as a region is zero.
:::

## Finding a circle from geometric data

:::teorema{#diametro titolo="Endpoints of a diameter"}
If $A$ and $B$ are the distinct endpoints of a diameter, the centre $C$ is their midpoint and the radius is $r=\dfrac{AB}{2}$. Every diameter passes through the centre, which is the same distance from both endpoints. A given diameter therefore determines one circle.
:::

:::esempio{titolo="A sloping diameter"}
For $A(-1,2)$ and $B(5,6)$, the midpoint and the square of the radius are
$$
\begin{aligned}
C&=\left(\frac{-1+5}{2},\frac{2+6}{2}\right)=(2,4),\\[5pt]
r^2&=\frac{(5-(-1))^2+(6-2)^2}{4}=\frac{36+16}{4}=13.
\end{aligned}
$$
Dividing the square by $4$ accounts for halving the length $AB$ before squaring it. The equation is $(x-2)^2+(y-4)^2=13$. Substituting the coordinates of $A$ gives $(-3)^2+(-2)^2=13$, which verifies that $A$ lies on the circle.
:::

:::teorema{#tre-punti titolo="Circle through three points"}
Three non-collinear points determine one circle. The centre is equidistant from two points $A,B$, so it lies on the perpendicular bisector of $AB$. The same holds for the segment $AC$. Since $AB$ and $AC$ have different directions, their perpendicular bisectors meet at one point. That point is the same distance from all three points, so it is the required centre. Alternatively, substitute the three coordinate pairs into the general form and solve a linear system for $D,E,F$.
:::

:::esempio{titolo="Three points forming a horizontal chord"}
For $A(0,0)$ and $B(4,0)$, the perpendicular bisector of $AB$ is $x=2$. With a third point $Q(2,4)$, the centre has the form $C(2,k)$ and must satisfy $CA^2=CQ^2$.
$$
\begin{aligned}
2^2+k^2&=(k-4)^2,\\
4+k^2&=k^2-8k+16,\\
k&=\frac{3}{2}.
\end{aligned}
$$
Since $r=CQ=4-\dfrac32=\dfrac52$, the equation is $(x-2)^2+\left(y-\dfrac32\right)^2=\dfrac{25}{4}$. The midpoint of $AB$ has $y$-coordinate $0$, while the centre has $y$-coordinate $\dfrac32$. The chord $AB$ is not a diameter.
:::

## Intersections with a line

:::teorema{#intersezioni titolo="Substitution and the discriminant"}
Consider a circle with positive radius. To find its common points with a line $y=mx+q$, replace $y$ with $mx+q$ in the circle equation. The coefficient of $x^2$ is $1+m^2>0$, so the resulting equation is quadratic. If the discriminant is positive, there are two real solutions and the line is a **secant**. A zero discriminant gives one point and the line is a **tangent**. With a negative discriminant, the line misses the circle. For a vertical line $x=t$, substitute for $x$ and solve an equation in $y$.
:::

:::esempio{titolo="From roots to coordinates"}
Find the intersection of $x^2+y^2=25$ and $y=x+1$. Substitution and simplification give
$$
\begin{aligned}
x^2+(x+1)^2&=25,\\
x^2+x-12&=0,\\
(x+4)(x-3)&=0.
\end{aligned}
$$
The $x$-coordinates are $-4$ and $3$. To recover the $y$-coordinates, use the equation of the line, which gives a single value for each $x$. The points are $A(-4,-3)$ and $B(3,4)$. As a check for $B$, we have $3^2+4^2=25$ and $4=3+1$.

::grafico{f="x+1" curve="5*cos(t),5*sin(t),0,6.283185307" xmin=-6 xmax=6 ymin=-6 ymax=7 uguale=1 punti="-4,-3,pieno,A;3,4,pieno,B" legenda="y=x+1;x^2+y^2=25" titolo="The roots of the equation in $x$ give the horizontal coordinates of $A$ and $B$."}

:::

:::esempio{titolo="Comparing three vertical lines"}
For $(x-1)^2+(y+2)^2=9$ and $x=t$, we obtain $(y+2)^2=9-(t-1)^2$. When $t=1$, the right-hand side is $9$, so $y=-5$ or $y=1$. When $t=4$, it is $0$, so the only $y$-coordinate is $-2$. When $t=5$, it is $-7$, so no real point lies on both curves.
:::

## Tangents at a point and parallel tangents

::::teorema{#tangenti titolo="Distance from the centre and direction of the radius"}
Let $C(h,k)$ be the centre and $r>0$ the radius. The line $\ell\colon ax+by+c=0$, with $(a,b)\neq(0,0)$, is tangent exactly when its distance $d(C,\ell)$ from the centre equals $r$. If tangency occurs at $P_0(x_0,y_0)$, the vector $\overrightarrow{CP_0}$ is perpendicular to the line, so the tangent has equation
$$
(x_0-h)(x-h)+(y_0-k)(y-k)=r^2 .
$$

:::dimostrazione
Let $H$ be the foot of the perpendicular from $C$ to $\ell$. Every point $P$ on the line satisfies $CP^2=CH^2+HP^2$. If $CH=r$, the only way to get $CP=r$ is to require $HP=0$, so the common point is $H$. If $CH<r$, the two positions on the line at distance $\sqrt{r^2-CH^2}$ from $H$ lie on the circle. If $CH>r$, no position satisfies the equality. In the tangent case, $P_0=H$, so we obtain the equation by setting the dot product of $\overrightarrow{CP_0}$ and $\overrightarrow{P_0P}$ to zero. Rearranging the constants uses $(x_0-h)^2+(y_0-k)^2=r^2$.
:::
::::

:::esempio{titolo="Tangent at a given point"}
On $x^2+y^2=25$, the point $P_0(3,4)$ lies on the circle because $3^2+4^2=25$. The radius has components $(3,4)$, so the tangent through $P_0$ satisfies
$$
3(x-3)+4(y-4)=0 \quad\Longleftrightarrow\quad 3x+4y=25 .
$$
The distance from the centre to the line is $\dfrac{25}{\sqrt{3^2+4^2}}=5$, as required. The method also gives the vertical tangent at $(5,0)$, where the equation becomes $5(x-5)=0$.

::grafico{f="(25-3*x)/4" curve="5*cos(t),5*sin(t),0,6.283185307" xmin=-6 xmax=7 ymin=-6 ymax=7 uguale=1 punti="0,0,pieno,C;3,4,pieno,P" segmenti="0,0,3,4" legenda="3x+4y=25;x^2+y^2=25" titolo="The radius $CP$ is perpendicular to the tangent at $P$."}

:::

:::esempio{titolo="Two parallel tangents"}
To find the tangents to $(x-1)^2+(y+2)^2=9$ parallel to $4x+3y=0$, look for $q$ in $4x+3y=q$. The numerator in the distance formula for $C(1,-2)$ is $|4-6-q|=|q+2|$ and the denominator is $5$. Since the radius is $3$, we get
$$
\frac{|q+2|}{5}=3 \quad\Longleftrightarrow\quad q=-2\pm15 .
$$
The two tangents are therefore $4x+3y=13$ and $4x+3y=-17$. The mean of the two constants is $-2$, the constant for the parallel line through the centre.
:::

:::esempio{titolo="Tangents through an exterior point"}
Consider the circle $x^2+y^2=9$ and the exterior point $T(5,0)$. If $P_0(x_0,y_0)$ is a point of contact, the tangent at $P_0$ has equation $x_0x+y_0y=9$. Requiring the tangent to contain $T$ gives $5x_0=9$. The condition that $P_0$ lie on the circle then determines two possible $y$-coordinates.
$$
\begin{aligned}
x_0&=\frac95,\\
y_0^2&=9-\left(\frac95\right)^2=\frac{144}{25},\\[4pt]
y_0&=\pm\frac{12}{5}.
\end{aligned}
$$
The contact coordinates give the two tangents $9x+12y=45$ and $9x-12y=45$. They are symmetric about the $x$-axis. In each right triangle $CTP_0$, the hypotenuse $CT$ has length $5$ and the radius $CP_0$ has length $3$. Thus the segment from $T$ to either contact point has length $\sqrt{5^2-3^2}=4$.
:::

## Chords and distances from the centre

:::teorema{#corde titolo="Finding a chord length with a right triangle"}
Let $AB$ be a chord, a segment joining two distinct points of the same circle. The perpendicular to the line $AB$ through the centre meets the chord at its midpoint $H$. Indeed, right triangles $CHA$ and $CHB$ have equal hypotenuse $r$ and share the side $CH$, so $HA=HB$. Setting $d=CH<r$, the Pythagorean theorem gives
$$
AB=2\,HA=2\sqrt{r^2-d^2} .
$$
If the chord length $L$ is given, the same equation yields $d=\sqrt{r^2-\left(\dfrac L2\right)^2}$. The case $d=0$ gives a diameter, the longest chord.
:::

:::esempio{titolo="Finding the height of a line from its chord"}
A horizontal line cuts a chord of length $8$ in a circle with centre $(0,0)$ and radius $5$. The half-chord measures $4$, so $d^2=25-16=9$. The distance from the origin to $y=q$ is $|q|$, so $q=3$ or $q=-3$. The two chords are congruent and symmetric about the $x$-axis.

::grafico{f="3;-3" curve="5*cos(t),5*sin(t),0,6.283185307" xmin=-6 xmax=6 ymin=-6 ymax=6 uguale=1 punti="0,0,pieno,C;0,3,pieno,H;4,3,pieno,B;-4,3,pieno,A;-4,-3;4,-3" segmenti="0,0,0,3;0,0,4,3" legenda="y=3;y=-3;x^2+y^2=25" titolo="Triangle $CHB$ has hypotenuse $5$ and legs $3$ and $4$."}

:::

## Relative positions and the radical axis

:::teorema{#asse-radicale titolo="Subtracting the equations"}
Consider two circles in general form with distinct centres. Subtracting their equations cancels the $x^2$ and $y^2$ terms. What remains is a line equation, called the **radical axis**. Every common point lies on this line. Conversely, every point that lies on the radical axis and on either circle also lies on the other, since the two polynomials have the same value at that point. To find the common points, intersect the radical axis with just one of the circles.
:::

:::esempio{titolo="Two intersections on one vertical line"}
For $x^2+y^2=25$ and $(x-6)^2+y^2=25$, subtracting the general forms gives $-12x+36=0$, so $x=3$. In the first equation, $y^2=25-3^2=16$, yielding the common points $(3,-4)$ and $(3,4)$. The axis is halfway between the centres because the radii are equal. If the radii differed, the difference of their squares would also appear in the subtraction.
:::

:::osservazione{titolo="Direction of the radical axis"}
Write the two circle equations as sums of squares centred at $C_1(h_1,k_1)$ and $C_2(h_2,k_2)$. On subtraction the coefficients of the terms in $x$ and $y$ become $2(h_2-h_1)$ and $2(k_2-k_1)$, up to a common sign. These coefficients form a vector parallel to the direction from $C_1$ to $C_2$. The radical axis is therefore perpendicular to the line of centres. If the centres stay fixed and only one radius changes, the constant term changes and the axis moves without turning. If the radii are equal, the axis is also the perpendicular bisector of the segment joining the centres, since equality of the two polynomials is equivalent to $PC_1^2=PC_2^2$.
:::

:::osservazione{titolo="Classification using the radii"}
For distinct centres, let $d>0$ be their distance apart and let $r_1,r_2>0$ be the radii. If there is a common point, the three segments of lengths $d,r_1,r_2$ form a triangle, possibly with collinear vertices.

- If $|r_1-r_2|<d<r_1+r_2$, the triangle is non-degenerate and its third vertex can lie on either side of the line through the centres. There are therefore two common points.
- If $d=r_1+r_2$, the point of tangency lies between the centres. If $d=|r_1-r_2|$, one circle lies inside the other and the tangency is internal.
- If $d>r_1+r_2$ or $d<|r_1-r_2|$, the triangle cannot close and the curves are disjoint.

For coinciding centres, equal radii give coincident circles and unequal radii give disjoint circles. In these cases subtracting the equations gives a constant and therefore fails to define a line.
:::
