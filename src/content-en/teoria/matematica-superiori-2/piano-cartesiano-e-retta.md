---
titolo: The Cartesian plane and lines
sommario: Distances, midpoints, equations of lines, slope, parallel and perpendicular
  lines, and intersections.
---

Coordinates describe the position of a point using two numbers, and an equation describes every point on a line. Calculations with segments and slopes use the Pythagorean theorem and ratios. Linear systems locate intersections, which in turn allow us to check thresholds and constraints in models.

## Axes, quadrants, and reading points

:::definizione{#lettura-coordinate titolo="Two coordinates, two directions"}
Read the $x$-coordinate along the horizontal axis, with positive values to the right. Read the $y$-coordinate along the vertical axis, with positive values upwards. To locate $A(-3;2)$, start at the origin and move three units left and two up. The point is in the second quadrant. The point $B(2;-1)$ lies to the right and below, in the fourth quadrant.

::grafico{xmin=-4.6 xmax=3.6 ymin=-2.4 ymax=3.7 uguale=1 punti="-3,2,pieno,A;2,-1,pieno,B" segmenti="-3,0,-3,2;-3,2,0,2;2,0,2,-1;0,-1,2,-1" titolo="Projections onto the axes give the coordinates $A(-3;2)$ and $B(2;-1)$"}

A point on the horizontal axis has $y$-coordinate zero, whereas on the vertical axis its $x$-coordinate is zero. Reflecting $A$ across the vertical axis changes only the $x$-coordinate, giving $(3;2)$. Reflecting it across the horizontal axis changes only the $y$-coordinate, giving $(-3;-2)$. The distance to the vertical axis is the absolute value of the $x$-coordinate. The distance to the horizontal axis is the absolute value of the $y$-coordinate.
:::

## Coordinates and segments

:::definizione{#coordinate titolo="Distance and midpoint"}
A point $P(x_P;y_P)$ is described by its horizontal coordinate and its vertical coordinate. For two points $A$ and $B$, we have
$$
AB=\sqrt{(x_B-x_A)^2+(y_B-y_A)^2},\qquad
M\left(\frac{x_A+x_B}2;\frac{y_A+y_B}2\right).
$$
The distance formula follows from applying the Pythagorean theorem to the projections of the segment onto the axes. The midpoint formula halves the horizontal and vertical displacements separately.

For $A(1;2)$ and $B(4;6)$, the formulas give $AB=5$ and $M(\dfrac52;4)$. For a horizontal segment, the distance is the absolute difference of the $x$-coordinates. For a vertical segment, use the absolute difference of the $y$-coordinates.

::grafico{linee="1,2 4,6;1,2 4,2 4,6" punti="1,2,pieno,A;4,6,pieno,B;2.5,4,pieno,M" xmin=0 xmax=6 ymin=0 ymax=8 uguale=1 titolo="The coordinate differences give the leg lengths and $M$ is the midpoint"}
:::

:::esempio{titolo="Recovering an endpoint from the midpoint"}
Let $M(1;3)$ be the midpoint of a segment with endpoint $A(-2;5)$. From $A$ to $M$, the $x$-coordinate increases by $3$ and the $y$-coordinate decreases by $2$. Repeat the same displacement to reach $B(4;1)$. Averaging the $x$-coordinates and the $y$-coordinates gives back $1$ and $3$. The method also works when one component of the displacement is zero. If $A$ and $M$ have the same $x$-coordinate, $B$ has that coordinate too.
:::

:::esempio{titolo="A given distance can give two points"}
Find a point $Q(x;0)$ on the horizontal axis at distance $5$ from $P(5;4)$. The vertical distance from $P$ is always $4$. The distance formula gives $(x-5)^2+16=25$, so $(x-5)^2=9$. Thus the $x$-coordinate of $Q$ is $2$ or $8$. The two points are equally far away because their horizontal displacements are opposites and have the same square. If $x>5$ is also required, only $(8;0)$ remains.
:::

## Slope-intercept form

:::definizione{#pendenza titolo="Slope and intercept"}
A nonvertical line has equation $y=mx+q$. The **slope** $m$ is the ratio of the change in the $y$-coordinate to the change in the $x$-coordinate. The **intercept** $q$ is the $y$-coordinate of the point on the vertical axis.

For two points with distinct $x$-coordinates, the slope is
$$
m=\frac{y_B-y_A}{x_B-x_A}.
$$
For $A(0;1)$ and $B(2;5)$, the slope is $m=2$, so the equation of the line is $y=2x+1$. As $x$ increases by one, $y$ increases by two.

The line rises when $m>0$, falls when $m<0$, and is horizontal when $m=0$. A vertical line has equation $x=k$ and an undefined slope.

::grafico{f="2*x+1;-x+1" xmin=-3 xmax=4 ymin=-4 ymax=7 titolo="Rising and falling lines with the same intercept"}
:::

::::teorema{#pendenza-costante titolo="Vertical change per horizontal unit is constant"}
On the line $y=mx+q$, the ratio of changes between two distinct points is always $m$. The intercept sets the starting height and cancels when heights are compared.

:::dimostrazione
If $y_A=mx_A+q$ and $y_B=mx_B+q$, subtraction gives $y_B-y_A=m(x_B-x_A)$. Two distinct points on the line have different horizontal coordinates because the equation assigns only one height to each horizontal coordinate. Dividing by $x_B-x_A$ gives $m$. The same ratio applies when moving in the opposite direction, because both displacements reverse.
:::
::::

:::esempio{titolo="Slope with a negative change"}
On the line through $A(-2;4)$ and $B(2;2)$, moving from $A$ to $B$ increases the $x$-coordinate by $4$ and decreases the $y$-coordinate by $2$. The ratio is

$$
m=\frac{2-4}{2-(-2)}=-\frac12.
$$

The line drops by one unit for every two units to the right. For example, $x=0$ lies halfway between the two $x$-coordinates and corresponds to $y=3$. If the displacement is measured from $B$, both differences change sign and the ratio stays the same.

::grafico{f="-0.5*x+3" punti="-2,4,pieno,A;2,2,pieno,B;0,3,pieno,M" linee="-2,4 2,4 2,2" xmin=-4 xmax=4 ymin=0 ymax=6 uguale=1 titolo="From A to B the line moves 4 units right and 2 down"}
:::

:::osservazione
Read the intercept at $x=0$. Measure the slope by comparing two points. The lines $y=2x+1$ and $y=-x+1$ share the point $(0;1)$. A step to the right gives height $3$ on the first line and height $0$ on the second. Two lines with the same slope can start at different heights, with the same change in $y$ added to different starting values.
:::

## General form

:::teorema{#generale titolo="Implicit equations and points on a line"}
A line can be written as $ax+by+c=0$, where at least one of $a$ and $b$ is nonzero. If $b\ne0$, solving for $y$ gives $y=-\dfrac abx-\dfrac cb$. If $b=0$, the line is vertical.

The equation $2x+3y-6=0$ gives $y=-\dfrac23x+2$. The axis intercepts are $(3;0)$ and $(0;2)$, found by setting $y=0$ and $x=0$, respectively.

A point lies on the line when substituting its coordinates gives a true equality. For example, $(0;2)$ satisfies $0+6-6=0$. Substitution can also verify an equation constructed from given data.
:::

:::esempio{titolo="When one coordinate stays fixed"}
From $3x-6=0$ we get $x=2$. Every $y$-coordinate is allowed, and all the points are on the vertical line at $x=2$. From $4y+8=0$ we get $y=-2$. Here the $x$-coordinate can vary and the line is horizontal. The condition on $a$ and $b$ is needed because if both were zero, the equation would be $c=0$. If $c=0$ every point of the plane would satisfy it. If $c\ne0$ no point would satisfy it.
:::

## Lines through given points

:::teorema{#per-un-punto titolo="A direction and a point"}
The line of slope $m$ through $P(x_0;y_0)$ has the equation
$$
y-y_0=m(x-x_0).
$$
For $P(2;3)$ and $m=-1$, this gives $y-3=-(x-2)$, hence $y=-x+5$.

When the $x$-coordinates differ, first calculate $m$ and then use either point. If the two points are distinct and share an $x$-coordinate, the line is vertical with that constant $x$-coordinate.

Two distinct points determine exactly one line. If the two points coincide, an additional condition is needed to determine a direction.

::grafico{f="-x+5" punti="2,3,pieno,P" xmin=-1 xmax=7 ymin=-2 ymax=7 titolo="The line $y=-x+5$ passes through $(2;3)$"}
:::

:::esempio{titolo="One construction that also handles a vertical line"}
For distinct points $A(x_A;y_A)$ and $B(x_B;y_B)$, a general-form equation can be constructed without dividing by the difference of the $x$-coordinates.

$$
(x_B-x_A)(y-y_A)-(y_B-y_A)(x-x_A)=0.
$$

If $x_B\ne x_A$, division by $x_B-x_A$ gives the point-slope equation. If $x_B=x_A$, the first term vanishes and the second requires $x=x_A$, since $y_B-y_A\ne0$. For $A(2;5)$ and $B(2;-1)$ the second numerical factor is $-6$, giving $x=2$. Substituting either endpoint makes the expression on the left zero.
:::

## Parallel and perpendicular lines

:::teorema{#posizioni titolo="Comparing directions"}
Two nonvertical lines with equal slopes and different intercepts are distinct parallel lines. If both the slopes and the intercepts agree, the equations describe the same line.

Two nonvertical lines are perpendicular if $m_1m_2=-1$. For example, a perpendicular to $y=2x+1$ has slope $-\dfrac12$. A horizontal and a vertical line are perpendicular, and that case is handled separately.

For the parallel line to $y=3x-2$ through $(1;5)$, point-slope form gives $y-5=3(x-1)$, hence $y=3x+2$. Parallelism fixes the direction and the given point fixes the position.
:::

::::teorema{#prodotto-pendenze titolo="Why the product is negative one"}
For two nonvertical perpendicular lines, the slopes satisfy $m_1m_2=-1$. This relationship determines the slope of a perpendicular before a point is used to fix its position.

:::dimostrazione
The proof compares a displacement along the first line with the same displacement rotated by a quarter-turn. Along the first line one can move $1$ unit horizontally and change the $y$-coordinate by $m_1$. The pair $(1;m_1)$ becomes $(-m_1;1)$ after a counterclockwise rotation of $90^\circ$.

Since the second line is nonvertical, $m_1\ne0$. The ratio of vertical to horizontal change after the rotation is

$$
m_2=\frac{1}{-m_1}.
$$

Multiplying by $m_1$ gives the result. Conversely, a line with this slope has the direction of the rotated displacement and is therefore perpendicular to the first line.
:::

::grafico{f="0.5*x;-2*x" xmin=-2.7 xmax=3.4 ymin=-2.75 ymax=3.4 uguale=1 vettori="0,0,2,1;0,0,-1,2" punti="2,1,pieno;-1,2,pieno" legenda="m_1=\dfrac12;m_2=-2" titolo="Rotating the displacement $(2;1)$ by a quarter-turn gives $(-1;2)$"}
::::

:::osservazione
The product of the slopes requires both slopes to be defined. For $x=-1$, the perpendicular through $(2;4)$ is the horizontal line $y=4$. The parallel through the same point is $x=2$, since its $x$-coordinate must stay fixed along the whole line. This checks both direction and the given point.
:::

## Intersections

:::teorema{#intersezioni titolo="The system of line equations"}
The coordinates of a common point satisfy both equations. Therefore, the intersection is found by solving the linear system.

For $y=2x+1$ and $y=-x+7$, equating the right-hand sides gives $2x+1=-x+7$, so $x=2$ and $y=5$. The point is $(2;5)$.

If the slopes agree and the intercepts differ, the system has no solution and the lines are distinct and parallel. If the intercepts also agree, every point on the line solves the system.

::grafico{f="2*x+1;-x+7" punti="2,5,pieno,P" xmin=-1 xmax=5 ymin=-1 ymax=9 titolo="The coordinates of $P$ satisfy both equations"}
:::

:::esempio{#intersezioni-con-vincoli titolo="Checking whether the common point lies on both segments"}
The segment on the first line $y=2x+1$ has $x$-coordinates from $0$ to $2$. The segment on the second line $y=7-x$ has $x$-coordinates from $3$ to $5$. The full lines meet at $(2;5)$. This point is an endpoint of the first segment and lies outside the second, since its $x$-coordinate is below $3$. The segments therefore have no common point. Checking membership requires both the line equation and the appropriate coordinate bounds.
:::

## Distance to a line

::::teorema{#distanza-retta titolo="Length of the perpendicular segment"}
For $P(x_0;y_0)$ and the line $ax+by+c=0$, the distance is
$$
d(P,r)=\frac{|ax_0+by_0+c|}{\sqrt{a^2+b^2}}.
$$
The denominator is positive because at least one of $a$ and $b$ is nonzero. The numerator is zero exactly when the point lies on the line.

For the origin and $3x+4y-10=0$, the distance is $d=\dfrac{10}{5}=2$. Multiplying the entire line equation by a nonzero number leaves the distance unchanged because the numerator and denominator are both multiplied by the absolute value of that number.

:::dimostrazione
A displacement with components $(b;-a)$ leaves $ax+by$ unchanged, because the change $ab$ is cancelled by $-ab$. Rotating by a quarter-turn gives a perpendicular displacement with components $(a;b)$. The foot $H$ can therefore be written as $(x_0-ta;y_0-tb)$ for some value of $t$.

$$
a(x_0-ta)+b(y_0-tb)+c=0
\quad\Longrightarrow\quad
t=\frac{ax_0+by_0+c}{a^2+b^2}.
$$

The Pythagorean theorem gives the length of the displacement as $|t|\sqrt{a^2+b^2}$, yielding the formula. The calculation still works if one component is zero, so it includes horizontal and vertical lines.
:::

::grafico{f="-0.75*x+2.5" linee="0,0 1.2,1.6" punti="0,0,pieno,O;1.2,1.6,pieno,H" xmin=-1 xmax=5 ymin=-1 ymax=4 uguale=1 titolo="The segment $OH$ is perpendicular to the line and has length $2$"}
::::

:::esempio{titolo="Distance between two parallel lines"}
To measure the distance between $3x+4y=5$ and $3x+4y=15$, take any point on the first line. At that point $3x+4y$ is $5$, so the distance formula for the second line gives $\dfrac{|5-15|}{\sqrt{3^2+4^2}}=2$. The result holds for every point on the first line. First make the coefficients of $x$ and $y$ agree in the two general-form equations, so the constant terms are compared on the same scale.
:::

## Areas and linear models

:::osservazione{#applicazioni titolo="From data to a graph"}
For a triangle with a horizontal base, use the base length and the vertical distance of the third vertex from the base. For $A(0;0)$, $B(6;0)$ and $C(2;4)$, the base is $6$ and the height is $4$, giving area $12$.

A plan with an initial fee $q$ and a unit cost $m$ can be described by $C(x)=mx+q$. The meaning of $x$ determines the domain. For example, $x\ge0$ if it is a distance traveled.

The intersection of two cost lines gives the quantity at which the plans cost the same. The difference between the costs then allows the plans to be compared on either side of the intersection.
:::

:::esempio{titolo="Triangle height when the base slants"}
Let $A(0;1)$, $B(3;5)$, and $C(4;-1)$. The base $AB$ has length $5$ and lies on $4x-3y+3=0$. The distance from $C$ to the line is $\dfrac{|16+3+3|}{5}=\dfrac{22}{5}$. That distance is the height relative to $AB$. The area is $\dfrac12\cdot5\cdot\dfrac{22}{5}=11$. With a slanted base, the difference of two vertical coordinates alone does not give the perpendicular height.
:::

:::esempio{titolo="Two plans and an integer threshold"}
Two bike rental plans cost $C_A(n)=5+3n$ and $C_B(n)=11+n$ euros after $n$ whole hours, with $n\ge 1$. The cost difference is

$$
\begin{aligned}
C_A(n)-C_B(n)&=(5+3n)-(11+n)\\
&=2n-6.
\end{aligned}
$$

For $n=3$, both plans cost $14$ euros. For $n<3$, the difference is negative, so A costs less for one or two hours. From four hours onward the difference is positive and B costs less. The graph also shows intermediate values, whereas the problem allows only whole hours.

::grafico{f="5+3*x;11+x" punti="3,14,pieno,P" nomi="n,C" legenda="C_A(n)=5+3n;C_B(n)=11+n" xmin=0 xmax=6 ymin=0 ymax=24 titolo="The plans cost the same after 3 hours"}
:::

:::osservazione
If the fixed fee for B becomes $12$ euros, the lines meet at $n=\dfrac72$. That value lies between two whole hours. For three hours A costs $14$ euros and B costs $15$. For four hours A costs $17$ euros and B costs $16$. Checking these two values identifies when each plan is cheaper, even if the algebraic point of equal cost lies outside the domain.
:::
