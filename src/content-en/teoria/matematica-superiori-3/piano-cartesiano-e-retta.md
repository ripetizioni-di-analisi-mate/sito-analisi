---
titolo: The Cartesian plane and straight lines
sommario: From point coordinates to equations of lines, intersections and perpendicular distances.
---

## Points and the distance between them

:::definizione{#coordinate titolo="Coordinates and displacements"}
The point $P(x,y)$ is located by its **horizontal coordinate** $x$, read along the horizontal axis, and its **vertical coordinate** $y$, read along the vertical axis. To move from $A(x_1,y_1)$ to $B(x_2,y_2)$, the displacements are $\Delta x=x_2-x_1$ and $\Delta y=y_2-y_1$. If $\Delta x<0$, the movement is to the left. If $\Delta y<0$, it is downwards. Displacements may be negative, whereas segment lengths are nonnegative.
:::

::::teorema{#distanza titolo="Distance between two points"}
In a Cartesian plane with perpendicular axes and the same scale on both axes, the distance between $A(x_1,y_1)$ and $B(x_2,y_2)$ is
$$
AB=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}.
$$

:::dimostrazione
Introduce $C(x_2,y_1)$ so that $AC$ is horizontal and $CB$ is vertical. If both displacements are nonzero, the lengths of the legs are $|\Delta x|$ and $|\Delta y|$. By the Pythagorean theorem, $AB^2=|\Delta x|^2+|\Delta y|^2$, which gives the formula. If one displacement is zero, the same expression gives the absolute value of the other. If both are zero, the two points coincide and the distance is zero.
:::
::::

:::esempio{titolo="A negative difference in the distance formula"}
For $A(-2,3)$ and $B(1,-1)$, the displacements are $1-(-2)=3$ and $-1-3=-4$. The first leg is $3$ units long and the second is $4$ units long. Thus $AB=\sqrt{3^2+(-4)^2}=5$.

::grafico{segmenti="-2,3,1,3;1,3,1,-1" linee="-2,3 1,-1" punti="-2,3,pieno,A;1,-1,pieno,B;1,3,pieno,C" etichette="-0.8,3.4,3;1.2,0.9,4" xmin=-4 xmax=4 ymin=-3 ymax=5 uguale=1 titolo="The displacements are $3$ and $-4$, while the legs have lengths $3$ and $4$."}

:::

:::esempio{titolo="Distance from a centre as a condition on coordinates"}
Find the points $P(x,1)$ at distance $5$ from $A(2,4)$. The second coordinate of $P$ is fixed, so the vertical displacement from $A$ to $P$ is $1-4=-3$. The Pythagorean theorem gives
$$
AP^2=(x-2)^2+9.
$$
Since $AP$ is a length, the condition $AP=5$ is equivalent to $AP^2=25$. Hence $(x-2)^2=16$. The difference $x-2$ can equal $4$ or $-4$, giving $x=6$ or $x=-2$. Both solutions lie on the same horizontal line, four units to the right and left of the horizontal coordinate of $A$.

If the required distance were $3$, the only point would be $(2,1)$, directly below $A$. A distance less than $3$ would be impossible, since a nonnegative square is always added to the square of the vertical displacement. Geometrically, the line meets the circle of radius $5$ at two points, whereas it touches the circle of radius $3$ at just one point.

::grafico{f="1" curve="2+5*cos(t),4+5*sin(t),0,6.28318530718" legenda="y=1;(x-2)^2+(y-4)^2=25" xmin=-4 xmax=8 ymin=-2 ymax=10 uguale=1 punti="2,4,pieno,A;-2,1,pieno,P_1;6,1,pieno,P_2" segmenti="2,4,-2,1;2,4,6,1" titolo="Both intersections are at distance $5$ from $A$."}

:::

## Midpoints and point symmetry

::::teorema{#medio titolo="Half the displacement"}
The **midpoint** $M$ of $AB$ has coordinates
$$
M\left(\frac{x_1+x_2}{2},\frac{y_1+y_2}{2}\right).
$$

:::dimostrazione
Moving from $A$ towards $B$ along the segment covers the same fraction of the horizontal and vertical displacements. At $M$, half of each displacement has been covered, so
$$
\begin{aligned}
x_M&=x_1+\frac{x_2-x_1}{2}=\frac{x_1+x_2}{2},\\[4pt]
y_M&=y_1+\frac{y_2-y_1}{2}=\frac{y_1+y_2}{2}.
\end{aligned}
$$
The displacements from $A$ to $M$ and from $M$ to $B$ are then equal in both coordinates.
:::
::::

:::esempio{titolo="Recovering an endpoint from the midpoint"}
For $A(-2,1)$ and $B(4,5)$, averaging the coordinates gives $M(1,3)$. Suppose instead that $A(-2,1)$ and $M(1,3)$ are known. Moving from $A$ to $M$ adds $3$ to the horizontal coordinate and $2$ to the vertical coordinate. Repeating the displacement gives $B(4,5)$. Algebraically, use $x_B=2x_M-x_A$ and $y_B=2y_M-y_A$. The points $A$ and $B$ are reflections of each other through the centre $M$.
:::

:::esempio{titolo="A segment midpoint and the centre of a rectangle"}
A rectangle with sides parallel to the axes has opposite vertices $A(-2,-1)$ and $C(4,3)$. The other vertices are $B(4,-1)$ and $D(-2,3)$ because each horizontal side preserves the vertical coordinate, and each vertical side preserves the horizontal coordinate. The diagonal $AC$ has midpoint
$$
M\left(\frac{-2+4}{2},\frac{-1+3}{2}\right)=(1,1).
$$
The midpoint of $BD$ has the same coordinates because the averages use the same addends in a different order. Thus $M$ lies on both diagonals and is their point of intersection.

The centre determines which pairs of vertices are opposite. For instance, reflecting $A$ through $M$ repeats the displacement $(3,2)$ from $A$ to $M$ and leads to $C$. Reflecting only the horizontal coordinate across $x=1$ would instead lead to $B$, leaving the vertical coordinate unchanged. This shows the difference between point symmetry and reflection across a line.

::grafico{linee="-2,-1 4,-1 4,3 -2,3 -2,-1" segmenti="-2,-1,4,3;4,-1,-2,3" punti="-2,-1,pieno,A;4,-1,pieno,B;4,3,pieno,C;-2,3,pieno,D;1,1,pieno,M" xmin=-4 xmax=6 ymin=-3 ymax=5 uguale=1 titolo="The diagonals share their midpoint $M$."}

:::

## Equations of lines

:::definizione{#equazione titolo="Standard form, slope and intercept"}
The **standard form** of a line is $ax+by+c=0$, with at least one of $a$ and $b$ nonzero. A point lies on the line when its coordinates satisfy the equation. If $b\neq0$, solving for $y$ gives the **slope-intercept form**
$$
y=mx+q,\qquad m=-\frac{a}{b},\qquad q=-\frac{c}{b}.
$$
The coefficient $m$ is the *slope*. For a horizontal displacement of $1$, the vertical coordinate changes by $m$. The number $q$ is the vertical coordinate of the point whose horizontal coordinate is $0$. If $b=0$, then $a\neq 0$ and the line is vertical with equation $x=-\dfrac{c}{a}$.
:::

:::esempio{titolo="Reading the slope from the equation"}
For the line $2x+4y-8=0$, this gives
$$
4y=-2x+8\qquad\Longrightarrow\qquad y=-\frac{1}{2}x+2.
$$
The line passes through $(0,2)$, and every increase of $2$ in the horizontal coordinate decreases the vertical coordinate by $1$. One other point is $(2,1)$. The $x$-intercept is $(4,0)$ because setting $y=0$ gives $2x-8=0$.

::grafico{f="-0.5*x+2" legenda="y=-\frac{1}{2}x+2" segmenti="0,2,2,2;2,2,2,1" punti="0,2;2,1;4,0" xmin=-2 xmax=6 ymin=-3 ymax=5 uguale=1 titolo="Moving $2$ units to the right takes the line down by $1$."}

:::

:::osservazione{titolo="Equivalent equations"}
Multiplying the entire equation by a nonzero number preserves the set of solutions. For example, $2x+4y-8=0$ and $x+2y-4=0$ describe the same line. The equation $4x-8=0$ describes the vertical line $x=2$. Every value of $y$ satisfies the equation when $x=2$, so this line has infinitely many vertical coordinates for the same horizontal coordinate.
:::

:::esempio{titolo="Axis intercepts and standard form"}
The line $3x+2y=6$ meets the horizontal axis at a point with $y=0$. Substitution gives $x=2$, so its horizontal intercept is $(2,0)$. For the vertical axis, set $x=0$ and obtain $(0,3)$. The slope-intercept form
$$
y=-\frac32x+3
$$
confirms that the vertical intercept is $3$. The slope is negative because moving from $(0,3)$ to $(2,0)$ means going two units right and three units down. In the opposite direction, we go three units up and two left, so the quotient $\dfrac3{-2}$ stays the same.

For vertical and horizontal lines, read the intercepts directly from the equation. The vertical line $x=2$ meets the $x$-axis at $(2,0)$ and stays parallel to the $y$-axis. The horizontal line $y=3$ meets the $y$-axis at $(0,3)$ and stays parallel to the $x$-axis. If the line is itself an axis, its intersection with that axis is the entire line.

::grafico{f="-1.5*x+3;3" curve="2,t,-2,5" legenda="3x+2y=6;y=3;x=2" punti="0,3,pieno,B;2,0,pieno,A" xmin=-2 xmax=5 ymin=-2 ymax=5 uguale=1 titolo="The slanted line meets both axes."}

:::

## The line through two points

::::teorema{#due-punti titolo="Finding the slope from displacements"}
For distinct points $A(x_1,y_1)$ and $B(x_2,y_2)$ with $x_1\neq x_2$, the line joining them is given by
$$
m=\frac{y_2-y_1}{x_2-x_1},\qquad y-y_1=m(x-x_1).
$$
If $x_1=x_2$, the line is $x=x_1$.

:::dimostrazione
If the line is in slope-intercept form, the points satisfy $y_1=mx_1+q$ and $y_2=mx_2+q$. Subtracting the equations eliminates $q$ and gives $y_2-y_1=m(x_2-x_1)$. The difference $x_2-x_1$ is nonzero, so division is allowed. The second formula follows by subtracting $y_1=mx_1+q$ from $y=mx+q$. If the horizontal coordinates are equal and the vertical coordinates differ, the same horizontal coordinate must have two different vertical coordinates, so the line is vertical.
:::
::::

:::esempio{titolo="A slope that simplifies"}
For $A(-1,4)$ and $B(2,-2)$,
$$
\begin{aligned}
m&=\frac{-2-4}{2-(-1)}=\frac{-6}{3}=-2,\\[4pt]
y-4&=-2(x+1),\\[4pt]
y&=-2x+2.
\end{aligned}
$$
At $x=-1$ the output is $4$, and at $x=2$ it is $-2$, which checks the result. The order of the two points can be reversed in the ratio, provided it is reversed in both differences. Both the numerator and denominator then change sign, so the ratio stays the same.
:::

:::esempio{titolo="Three points on one line"}
The first two points $A(-2,1)$ and $B(2,3)$ have distinct horizontal coordinates, so they determine the line of slope $\dfrac{3-1}{2-(-2)}=\dfrac12$. The point-slope form through $A$ is
$$
y-1=\frac12(x+2).
$$
To decide whether $C(6,5)$ is collinear with $A$ and $B$, set $x=6$. This gives $y-1=4$ and hence $y=5$, which agrees with the vertical coordinate of $C$. The point $(6,4)$, by contrast, has the same horizontal coordinate as $C$ but lies one unit below the line.

The same test can be expressed using displacements. From $A$ to $B$ the change is $(4,2)$, and from $B$ to $C$ it is again $(4,2)$. Thus the three points are collinear, and $B$ is the midpoint of $AC$. If the first two points shared a horizontal coordinate, the condition would instead be that the third has the same horizontal coordinate too. The line is vertical in that case, and the displacement ratio is undefined.

::grafico{f="0.5*x+2" legenda="y=\dfrac12x+2" xmin=-4 xmax=8 ymin=-1 ymax=7 punti="-2,1,pieno,A;2,3,pieno,B;6,5,pieno,C;6,4,vuoto" titolo="The point $C(6,5)$ lies on the line, and $(6,4)$ lies below it."}

:::

## Parallel and coincident lines

:::teorema{#parallele titolo="Lines with the same direction"}
Two nonvertical lines have the same direction if their slopes are equal. If their intercepts differ, they are **distinct parallel lines**. If their intercepts are equal, they coincide. Indeed, subtracting their vertical coordinates at the same value of $x$ gives the constant $q_2-q_1$. Two distinct vertical lines are parallel because their horizontal coordinates are fixed and different.
:::

:::esempio{titolo="A parallel line in standard form"}
To construct the line parallel to $2x-y+3=0$ through $P(2,-1)$, keep the part $2x-y$, which determines the direction. Seek a line of the form $2x-y+c=0$. Requiring it to contain $P$ gives $2\cdot2-(-1)+c=0$, so $c=-5$ and the line is $2x-y-5=0$. Both lines have slope $2$. Their intercepts are $3$ and $-5$, respectively, so they are distinct.
:::

:::osservazione{titolo="Checking directions without solving for y"}
For the lines $a_1x+b_1y+c_1=0$ and $a_2x+b_2y+c_2=0$, having the same direction is equivalent to $a_1b_2-a_2b_1=0$. If both coefficients of $y$ are nonzero, the equality follows by comparing $-\dfrac{a_1}{b_1}$ and $-\dfrac{a_2}{b_2}$. If one line is vertical, the same criterion requires the other to be vertical as well. To see whether they coincide, take a point on one line and check whether it lies on the other.
:::

:::esempio{titolo="Vertical separation and distance between lines"}
The lines $r:y=2x+1$ and $s:y=2x+6$ have the same slope and different intercepts. At a fixed horizontal coordinate, the output difference is always $(2x+6)-(2x+1)=5$. For instance, $(0,1)$ and $(0,6)$ are five units apart along the vertical axis. The segment joining them therefore measures the separation at the same horizontal coordinate.

The distance between the lines, however, is the length of a segment perpendicular to both. To find it, take $(0,1)$ on $r$ and use $2x-y+6=0$ as the equation of $s$. This gives
$$
d=\frac{|2\cdot0-1+6|}{\sqrt{2^2+(-1)^2}}
=\frac5{\sqrt5}=\sqrt5 .
$$
This is less than $5$ because the vertical segment does not meet the two slanted lines at a right angle. Vertical separation and perpendicular distance agree when the lines are horizontal.

::grafico{f="2*x+1;2*x+6" xmin=-4 xmax=3 ymin=-3 ymax=8 uguale=1 punti="0,1,pieno,P;0,6,pieno,Q;-2,2,pieno,H" segmenti="0,1,0,6;0,1,-2,2" titolo="Segment $PQ$ is vertical, while $PH$ is perpendicular to the lines."}

:::

## Perpendicular lines

::::teorema{#perpendicolari titolo="Directions that meet at a right angle"}
Two nonvertical lines are **perpendicular** if and only if $m_1m_2=-1$. A vertical line is perpendicular to a horizontal line. In standard form, a criterion that includes these cases is
$$
a_1a_2+b_1b_2=0.
$$

:::dimostrazione
For a line of slope $m$, a displacement along it has components $(1,m)$. A right-angle rotation sends it to $(-m,1)$. If $m\neq0$, this new direction has slope $\dfrac{1}{-m}=-\dfrac{1}{m}$. If $m=0$, the horizontal component of the new displacement is zero, so its direction is vertical. For a line in standard form, displacement $(b,-a)$ preserves the value of $ax+by$ because $ab+b(-a)=0$. The dot product of the two lines' displacements is $b_1b_2+(-a_1)(-a_2)=a_1a_2+b_1b_2$. It equals zero exactly when the directions meet at a right angle.
:::
::::

:::esempio{titolo="A perpendicular to a slanted line"}
The line $y=2x+1$ has slope $2$, so a perpendicular line has slope $-\dfrac{1}{2}$. The perpendicular through $P(2,3)$ satisfies $y-3=-\dfrac{1}{2}(x-2)$. Expanding gives $y=-\dfrac{1}{2}x+4$. The slopes multiply to $-1$, and the output at $x=2$ is $3$, so both required conditions are satisfied.
:::

:::esempio{#asse-segmento titolo="Perpendicular bisector of a slanted segment"}
The **perpendicular bisector** of a segment is the line perpendicular to it through its midpoint. Let $A(-1,1)$ and $B(3,3)$. The midpoint is $M(1,2)$, and the segment has slope $\dfrac{3-1}{3-(-1)}=\dfrac12$. The perpendicular bisector has slope $-2$, so its equation is
$$
y-2=-2(x-1)\qquad\Longleftrightarrow\qquad y=-2x+4.
$$
The point $P(2,0)$ belongs to the perpendicular bisector. The distance formula gives $PA=\sqrt{3^2+(-1)^2}=\sqrt{10}$ and $PB=\sqrt{(-1)^2+(-3)^2}=\sqrt{10}$. The midpoint $M$ is also equidistant from $A$ and $B$. For any point on the perpendicular bisector other than $M$, the equality follows from the two right triangles constructed like $PMA$ and $PMB$, with equal lengths $MA$ and $MB$ and shared leg $PM$.
:::

:::esempio{titolo="Finding a triangle's altitude from one side"}
Let $A(0,0)$, $B(4,2)$ and $C(2,4)$ be the vertices of a triangle. Side $AB$ lies on the line $y=\dfrac12x$. The altitude to $AB$ starts at $C$ and has slope $-2$, so its equation is $y-4=-2(x-2)$, or $y=-2x+8$. Its foot $H$ lies on both lines, giving
$$
\begin{aligned}
\frac12x&=-2x+8,\\[4pt]
\frac52x&=8,\\[4pt]
x_H&=\frac{16}{5},\qquad y_H=\frac85.
\end{aligned}
$$
The horizontal coordinate of the foot is between those of $A$ and $B$, so here the foot lies on the actual side. The base length is $AB=2\sqrt5$. The distance from $C$ to $x-2y=0$ is $\dfrac{|2-8|}{\sqrt5}=\dfrac6{\sqrt5}$. Hence the area is $\dfrac12\cdot2\sqrt5\cdot\dfrac6{\sqrt5}=6$. The same area formula uses distance to the line containing the side even if the foot falls on its extension.

::grafico{f="0.5*x" legenda="y=\dfrac12x" linee="0,0 4,2 2,4 0,0" segmenti="2,4,3.2,1.6" punti="0,0,pieno,A;4,2,pieno,B;2,4,pieno,C;3.2,1.6,pieno,H" xmin=-1 xmax=5 ymin=-1 ymax=5 uguale=1 titolo="The altitude from $C$ meets side $AB$ at its foot $H$."}

:::

## Intersections as solutions of a system

:::teorema{#intersezioni titolo="Points shared by two lines"}
A point belongs to both lines when its coordinates satisfy both equations. The system has one solution if the lines have different directions. It has no solution when they are distinct and parallel. It has infinitely many solutions when they coincide because every point belonging to one line also belongs to the other.
:::

:::esempio{titolo="Intersection in slope-intercept form"}
For $y=2x+1$ and $y=-x+4$, the expressions for the vertical coordinate agree at the intersection. Thus
$$
\begin{aligned}
2x+1&=-x+4\\[4pt]
3x&=3\\[4pt]
x&=1,\qquad y=2\cdot1+1=3 .
\end{aligned}
$$
The point is $P(1,3)$. It also satisfies the other equation because $-1+4=3$.

::grafico{f="2*x+1;-x+4" xmin=-2 xmax=4 ymin=-3 ymax=8 punti="1,3,pieno,P" titolo="At $x=1$, the two lines have the same output, $3$."}

:::

:::esempio{titolo="Recognising an inconsistent system"}
For $2x-y=1$ and $4x-2y=3$, twice the left side of the first equation is the left side of the second. A point satisfying the first equation would therefore give $4x-2y=2$ and could not give $3$. The lines are distinct and parallel. If the right-hand side of the second equation were $2$, the equations would be equivalent and the lines would coincide.
:::

:::esempio{titolo="Using an intersection to compare two tariffs"}
Two tariffs give costs in euros $C_1(n)=3n+2$ and $C_2(n)=2n+6$ for a nonnegative integer number $n$ of visits. First compare the lines extending the two graphs by setting $3n+2=2n+6$. This gives $n=4$ and a common cost of $14$ euros. Since $4$ is allowed, the costs do agree at the intersection.

To determine which tariff is lower, consider the difference $C_1(n)-C_2(n)=n-4$. For $0\leq n<4$ the first costs less, while for $n>4$ the second costs less. On the graph the first line starts lower because its fixed charge is $2$, compared with $6$ for the second. Its larger slope takes it above the other line after the intersection. If the equation had given a noninteger result, the lines would still intersect, but no actual number of visits would give the same charge.

::grafico{f="3*x+2;2*x+6" legenda="C_1(n)=3n+2;C_2(n)=2n+6" nomi="n,C" xmin=-1 xmax=8 ymin=-2 ymax=28 punti="0,2;0,6;4,14,pieno,P" segmenti="4,0,4,14;0,14,4,14" titolo="For four visits, the two tariffs give the same charge."}

:::

## Distance from a point to a line

::::teorema{#punto-retta titolo="The perpendicular segment"}
The distance from $P(x_0,y_0)$ to the line $ax+by+c=0$, with $(a,b)\neq(0,0)$, is the length of the segment from $P$ to the **foot of the perpendicular** $H$. It is given by
$$
d=\frac{|ax_0+by_0+c|}{\sqrt{a^2+b^2}}.
$$

:::dimostrazione
The displacement $(a,b)$ is perpendicular to the line because its dot product with a direction $(b,-a)$ is zero. Therefore $H=(x_0-ta,y_0-tb)$ for some number $t$. Because $H$ lies on the line,
$$
\begin{aligned}
a(x_0-ta)+b(y_0-tb)+c&=0\\[4pt]
t&=\frac{ax_0+by_0+c}{a^2+b^2}.
\end{aligned}
$$
The length of $PH$ is $|t|\sqrt{a^2+b^2}$, which gives the formula. If $P$ lies on the line, then $H=P$ and the distance is zero. Otherwise, for any point $Q$ on the line other than $H$, $PHQ$ is a right triangle and $PQ^2=PH^2+HQ^2$, so $PQ>PH$.
:::
::::

:::esempio{titolo="Distance from the origin and the foot of the perpendicular"}
Take $P(0,0)$ and the line $3x+4y-10=0$. The numerator is $|-10|=10$ and the denominator is $\sqrt{9+16}=5$, so the distance is $2$. To find $H$, use $t=-\dfrac{10}{25}=-\dfrac{2}{5}$. This gives $H\left(\dfrac{6}{5},\dfrac{8}{5}\right)$. The point lies on the line because $3\cdot\dfrac{6}{5}+4\cdot\dfrac{8}{5}=10$. The segment $PH$ has direction $(3,4)$, perpendicular to the direction $(4,-3)$ of the line.

::grafico{f="(10-3*x)/4" legenda="3x+4y-10=0" segmenti="0,0,1.2,1.6" punti="0,0,pieno,P;1.2,1.6,pieno,H" xmin=-2 xmax=5 ymin=-2 ymax=5 uguale=1 titolo="The shortest segment between $P$ and the line has length $2$."}

:::

:::osservazione{titolo="The distance depends on the line and the point"}
If $a$, $b$ and $c$ are multiplied by $\lambda\neq0$, the numerator and denominator of the formula are both multiplied by $|\lambda|$. The distance therefore stays the same. This allows any equivalent equation to be used and will help identify whether a line is tangent to a circle by comparing its distance from the centre with the radius.
:::

:::esempio{#distanza-parallele titolo="Distance between parallel lines"}
For the lines $3x+4y=8$ and $3x+4y=18$, the point-to-line distance formula can be applied to the second line using any point $P(x_0,y_0)$ on the first. Since $3x_0+4y_0=8$, the numerator can be calculated without finding both coordinates.
$$
d=\frac{|3x_0+4y_0-18|}{\sqrt{3^2+4^2}}
=\frac{|8-18|}{5}=2.
$$
The distance is the same for every point on the first line because $3x_0+4y_0$ is constant on that line. If the coefficients of $x$ and $y$ are proportional in the two equations, first rewrite the equations with the same pair of coefficients.
:::

:::esempio{titolo="Points at the same distance from the axes"}
The distance from $P(x,y)$ to the vertical axis $x=0$ is $|x|$, and the distance to the horizontal axis $y=0$ is $|y|$. To describe the equidistant points, solve $|x|=|y|$. Both sides are nonnegative, so squaring gives an equivalent equation.
$$
\begin{aligned}
x^2&=y^2,\\[4pt]
(x-y)(x+y)&=0.
\end{aligned}
$$
At least one factor must be zero, giving the lines $y=x$ and $y=-x$. For example, $P(-2,2)$ is two units from each axis and lies on the second line. The point $Q(2,2)$ has the same distances and lies on the first. Looking only at $x=y$ would omit all points with opposite nonzero coordinates. The two lines share the origin, which lies at distance zero from both axes.

::grafico{f="x;-x" xmin=-4 xmax=4 ymin=-4 ymax=4 uguale=1 punti="-2,2,pieno,P;2,2,pieno,Q" segmenti="-2,0,-2,2;-2,2,0,2" titolo="The two angle bisectors consist of the points equidistant from the axes."}

:::

:::esempio{titolo="Finding both parallel lines at a given distance"}
Find every line parallel to $3x+4y=0$ that is at distance $2$ from it. Any parallel line can be written $3x+4y=c$, because the two variable coefficients fix its direction and $c$ changes its position. The origin lies on the original line. Substituting it into the distance formula gives
$$
\frac{|c|}{\sqrt{3^2+4^2}}=2
\qquad\Longleftrightarrow\qquad |c|=10.
$$
The two solutions are $c=10$ and $c=-10$. Their opposite signs give two lines on opposite sides of the original. To appreciate the difference between these conditions, look at where the parallel lines meet the $y$-axis. The intercepts are $\dfrac52$ and $-\dfrac52$, exceeding $2$ in magnitude. This is compatible with the required distance because those two segments run along the vertical axis, while distance is measured in the direction perpendicular to the lines.

::grafico{f="-0.75*x;2.5-0.75*x;-2.5-0.75*x" legenda="3x+4y=0;3x+4y=10;3x+4y=-10" xmin=-4 xmax=4 ymin=-4 ymax=4 uguale=1 punti="0,0,pieno,O;1.2,1.6,pieno,H_1;-1.2,-1.6,pieno,H_2" segmenti="-1.2,-1.6,1.2,1.6" titolo="The parallel lines lie on opposite sides, each at distance $2$ from the middle line."}

:::
