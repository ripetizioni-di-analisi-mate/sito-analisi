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
