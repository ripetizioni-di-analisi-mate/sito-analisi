---
titolo: The Cartesian plane and lines
sommario: Distances, midpoints, equations of lines, slope, parallel and perpendicular
  lines, and intersections.
---

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

:::esempio{titolo="Slope with a negative change"}
On the line through $A(-2;4)$ and $B(2;2)$, moving from $A$ to $B$ increases the $x$-coordinate by $4$ and decreases the $y$-coordinate by $2$. The ratio is

$$
m=\frac{2-4}{2-(-2)}=-\frac12.
$$

The line drops by one unit for every two units to the right. For example, $x=0$ lies halfway between the two $x$-coordinates and corresponds to $y=3$. If the displacement is measured from $B$, both differences change sign and the ratio stays the same.

::grafico{f="-0.5*x+3" punti="-2,4,pieno,A;2,2,pieno,B;0,3,pieno,M" linee="-2,4 2,4 2,2" xmin=-4 xmax=4 ymin=0 ymax=6 uguale=1 titolo="From A to B the line moves 4 units right and 2 down"}
:::

## General form

:::teorema{#generale titolo="Implicit equations and points on a line"}
A line can be written as $ax+by+c=0$, where at least one of $a$ and $b$ is nonzero. If $b\ne0$, solving for $y$ gives $y=-\dfrac abx-\dfrac cb$. If $b=0$, the line is vertical.

The equation $2x+3y-6=0$ gives $y=-\dfrac23x+2$. The axis intercepts are $(3;0)$ and $(0;2)$, found by setting $y=0$ and $x=0$, respectively.

A point lies on the line when substituting its coordinates gives a true equality. For example, $(0;2)$ satisfies $0+6-6=0$. Substitution can also verify an equation constructed from given data.
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
::::

## Intersections

:::teorema{#intersezioni titolo="The system of line equations"}
The coordinates of a common point satisfy both equations. Therefore, the intersection is found by solving the linear system.

For $y=2x+1$ and $y=-x+7$, equating the right-hand sides gives $2x+1=-x+7$, so $x=2$ and $y=5$. The point is $(2;5)$.

If the slopes agree and the intercepts differ, the system has no solution and the lines are distinct and parallel. If the intercepts also agree, every point on the line solves the system.

::grafico{f="2*x+1;-x+7" punti="2,5,pieno,P" xmin=-1 xmax=5 ymin=-1 ymax=9 titolo="The coordinates of $P$ satisfy both equations"}
:::

## Distance to a line

:::teorema{#distanza-retta titolo="Length of the perpendicular segment"}
For $P(x_0;y_0)$ and the line $ax+by+c=0$, the distance is
$$
d(P,r)=\frac{|ax_0+by_0+c|}{\sqrt{a^2+b^2}}.
$$
The denominator is positive because at least one of $a$ and $b$ is nonzero. The numerator is zero exactly when the point lies on the line.

For the origin and $3x+4y-10=0$, the distance is $d=\dfrac{10}{5}=2$. Multiplying the entire line equation by a nonzero number leaves the distance unchanged because the numerator and denominator are both multiplied by the absolute value of that number.

::grafico{f="-0.75*x+2.5" linee="0,0 1.2,1.6" punti="0,0,pieno,O;1.2,1.6,pieno,H" xmin=-1 xmax=5 ymin=-1 ymax=4 uguale=1 titolo="The segment $OH$ is perpendicular to the line and has length $2$"}
:::

## Areas and linear models

:::osservazione{#applicazioni titolo="From data to a graph"}
For a triangle with a horizontal base, use the base length and the vertical distance of the third vertex from the base. For $A(0;0)$, $B(6;0)$ and $C(2;4)$, the base is $6$ and the height is $4$, giving area $12$.

A plan with an initial fee $q$ and a unit cost $m$ can be described by $C(x)=mx+q$. The meaning of $x$ determines the domain. For example, $x\ge0$ if it is a distance traveled.

The intersection of two cost lines gives the quantity at which the plans cost the same. The difference between the costs then allows the plans to be compared on either side of the intersection.
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
