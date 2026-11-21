---
titolo: The Cartesian plane and lines
sommario: Distances, midpoints, equations of lines, slope, parallel and perpendicular
  lines, and intersections.
---

In the Cartesian plane a point is described by two numbers, its coordinates, and a line by an equation; for example, the points $(0;1)$ and $(2;5)$ lie on the line $y=2x+1$. Coordinates are used to calculate lengths, midpoints, slopes, intersections and distances, up to comparing two pricing plans.

## Axes, quadrants, and reading points

:::definizione{#lettura-coordinate titolo="Two coordinates, two directions"}
The Cartesian plane is formed by two perpendicular lines, that is, lines that meet at right angles. The horizontal line is the $x$-axis; the vertical line is the $y$-axis. The point where they meet is the **origin** $O(0;0)$. Every point has two coordinates, written in brackets and separated by a semicolon. The first is the **$x$-coordinate** and the second is the **$y$-coordinate**.

The $x$-coordinate is read along the horizontal axis, with positive values to the right and negative values to the left. The $y$-coordinate is read along the vertical axis, with positive values upwards and negative values downwards. To locate $A(-3;2)$, start at the origin and move three units left and two up.

The two axes divide the plane into four **quadrants**, numbered anticlockwise starting from the top right one.

- In the first quadrant $x>0$ and $y>0$.
- In the second quadrant $x<0$ and $y>0$.
- In the third quadrant $x<0$ and $y<0$.
- In the fourth quadrant $x>0$ and $y<0$.

Therefore $A$ is in the second quadrant, and $B(2;-1)$, to the right and below, is in the fourth.

The segments in the figure that go from each point to the axes are the projections of the point onto the axes. Those of $A$ reach $-3$ and $2$, which are its coordinates.

::grafico{xmin=-4.6 xmax=3.6 ymin=-2.4 ymax=3.7 uguale=1 punti="-3,2,pieno,A;2,-1,pieno,B" segmenti="-3,0,-3,2;-3,2,0,2;2,0,2,-1;0,-1,2,-1" titolo="Projections onto the axes give the coordinates $A(-3;2)$ and $B(2;-1)$"}

A point on the horizontal axis has $y$-coordinate zero, whereas a point on the vertical axis has $x$-coordinate zero. Reflecting a point across an axis means taking the symmetric point on the other side of the axis, at the same distance. Reflecting $A$ across the vertical axis changes only the sign of the $x$-coordinate and gives $(3;2)$. Reflecting it across the horizontal axis changes only the sign of the $y$-coordinate and gives $(-3;-2)$.

The absolute value of a number is the number without its sign, for example $|-3|=3$ and $|2|=2$. The distance of a point from the vertical axis is the absolute value of its $x$-coordinate, so $A$ is at distance $3$ from the vertical axis. The distance from the horizontal axis is the absolute value of the $y$-coordinate, so $A$ is at distance $2$ from the horizontal axis.
:::

## Coordinates and segments

:::definizione{#coordinate titolo="Distance and midpoint"}
A general point is written $P(x_P;y_P)$, where $x_P$ (read "x of P") is its $x$-coordinate and $y_P$ is its $y$-coordinate. For two points $A$ and $B$, the differences $x_B-x_A$ and $y_B-y_A$ are the horizontal and vertical displacements from $A$ to $B$, also written $\Delta x$ and $\Delta y$ ($\Delta$ is the Greek capital letter delta). We have
$$
AB=\sqrt{(x_B-x_A)^2+(y_B-y_A)^2},\qquad
M\left(\frac{x_A+x_B}2;\frac{y_A+y_B}2\right).
$$
The first formula gives the length of the segment $AB$, that is, the **distance** between the two points. The segment $AB$ is the hypotenuse of a right triangle whose legs are parallel to the axes, with lengths $|x_B-x_A|$ and $|y_B-y_A|$. By the Pythagorean theorem the square of the hypotenuse is the sum of the squares of the legs, which gives the formula. The absolute value can be left out, because a number and its opposite have the same square.

The second formula gives the **midpoint** $M$, that is, the point of the segment halfway between $A$ and $B$; $M$ is **equidistant** from $A$ and $B$, that is, it is the same distance from both. To reach $M$ one covers half of the horizontal displacement and half of the vertical one, so each coordinate of $M$ is the mean of the coordinates of the endpoints, that is, their sum divided by $2$.

For $A(1;2)$ and $B(4;6)$ we get
$$
\begin{aligned}
AB&=\sqrt{(4-1)^2+(6-2)^2}=\sqrt{9+16}=\sqrt{25}=5,\\[6pt]
M&=\left(\frac{1+4}2;\frac{2+6}2\right)=\left(\frac52;4\right).
\end{aligned}
$$
A horizontal segment has endpoints with the same $y$-coordinate, and its length is the absolute value of the difference of the $x$-coordinates. A vertical segment has endpoints with the same $x$-coordinate, and its length is the absolute value of the difference of the $y$-coordinates.

::grafico{linee="1,2 4,6;1,2 4,2 4,6" punti="1,2,pieno,A;4,6,pieno,B;2.5,4,pieno,M" xmin=0 xmax=6 ymin=0 ymax=8 uguale=1 titolo="The coordinate differences give the leg lengths and $M$ is the midpoint"}
:::

:::esempio{titolo="Recovering an endpoint from the midpoint"}
Let $M(1;3)$ be the midpoint of a segment with endpoint $A(-2;5)$. From $A$ to $M$ the $x$-coordinate increases by $1-(-2)=3$ and the $y$-coordinate decreases by $5-3=2$. The midpoint divides the segment into two equal parts, so to reach $B$ the same displacement is repeated. This gives $B(1+3;3-2)$, that is, $B(4;1)$. Indeed, the means give back $\dfrac{-2+4}2=1$ and $\dfrac{5+1}2=3$.

The method also works when one of the two displacements is zero. If $A$ and $M$ have the same $x$-coordinate, $B$ has that coordinate too.
:::

:::esempio{titolo="A given distance can give two points"}
We look for a point $Q(x;0)$ on the horizontal axis at distance $5$ from $P(5;4)$. The vertical displacement between $Q$ and $P$ is always $4-0=4$, whatever $x$ is. The distance formula, with both sides squared, gives
$$
(x-5)^2+16=25,\qquad (x-5)^2=9.
$$
The numbers whose square is $9$ are $3$ and $-3$, so $x-5=3$ or $x-5=-3$. Therefore the $x$-coordinate of $Q$ is $8$ or $2$. The two points are equally far from $P$ because the horizontal displacements $3$ and $-3$ are opposites and have the same square. If $x>5$ is also required, only $(8;0)$ remains.
:::

## Slope-intercept form

:::definizione{#pendenza titolo="Slope and intercept"}
A nonvertical line has equation $y=mx+q$, called the **slope-intercept form** because $y$ is isolated on the left-hand side, that is, to the left of the equals sign. A point lies on the line when its coordinates make the equality true. The number $m$ is the **slope**, that is, the ratio of the change in the $y$-coordinate to the change in the $x$-coordinate between two points of the line. The number $q$ is the **intercept**, that is, the $y$-coordinate of the point where the line meets the vertical axis, because for $x=0$ we get $y=m\cdot0+q=q$.

For two points with distinct $x$-coordinates,
$$
m=\frac{y_B-y_A}{x_B-x_A}.
$$
For $A(0;1)$ and $B(2;5)$ the slope is $m=\dfrac{5-1}{2-0}=\dfrac42=2$. The point $A$ has $x$-coordinate $0$, so it lies on the vertical axis and $q=1$. The line is therefore $y=2x+1$. As $x$ increases by one, $y$ increases by two.

A line is increasing if it rises as we move to the right, and decreasing if it falls.

- For $m>0$ the line is increasing.
- For $m<0$ the line is decreasing.
- For $m=0$ the line is horizontal and has equation $y=q$.

The points of a vertical line all have the same $x$-coordinate $k$, so the line has equation $x=k$. Between two of its points the change in the $x$-coordinate is zero and the ratio cannot be calculated, so a vertical line has no slope.

In the figure $y=2x+1$ rises and $y=-x+1$ falls; both pass through $(0;1)$, because they have intercept $1$.

::grafico{f="2*x+1;-x+1" xmin=-3 xmax=4 ymin=-4 ymax=7 titolo="Rising and falling lines with the same intercept"}
:::

::::teorema{#pendenza-costante titolo="Vertical change per horizontal unit is constant"}
On the line $y=mx+q$, for any two distinct points the ratio of the change in the $y$-coordinate to the change in the $x$-coordinate is always $m$. The intercept $q$ fixes the height, that is, the $y$-coordinate, of the point of the line on the vertical axis, and it cancels when the $y$-coordinates of two points are subtracted.

:::dimostrazione
Let $A$ and $B$ be two distinct points of the line. Their coordinates satisfy the equation, so $y_A=mx_A+q$ and $y_B=mx_B+q$. Subtracting the first equality from the second, $q$ cancels and, factoring out $m$, we get
$$
y_B-y_A=mx_B+q-mx_A-q=m(x_B-x_A).
$$
The $x$-coordinates of $A$ and $B$ are different, because the equation assigns only one $y$-coordinate to each $x$-coordinate and two points of the line with the same $x$-coordinate would coincide. We can therefore divide by $x_B-x_A$, which gives $\dfrac{y_B-y_A}{x_B-x_A}=m$. The ratio also holds when moving along the line from $B$ to $A$, because numerator and denominator both change sign.
:::
::::

:::esempio{titolo="Slope with a negative change"}
On the line through $A(-2;4)$ and $B(2;2)$, moving from $A$ to $B$ the $x$-coordinate increases by $4$ and the $y$-coordinate decreases by $2$. The ratio is

$$
m=\frac{2-4}{2-(-2)}=\frac{-2}{4}=-\frac12.
$$

So the line drops by one unit for every two units to the right. The point $M$ in the figure has $x$-coordinate $0$, halfway between $-2$ and $2$; from $A$ we move $2$ to the right and drop $1$, so $x=0$ corresponds to $y=3$. If we start from $B$, both differences change sign and the ratio stays the same, because $\dfrac{4-2}{-2-2}=-\dfrac12$.

::grafico{f="-0.5*x+3" punti="-2,4,pieno,A;2,2,pieno,B;0,3,pieno,M" linee="-2,4 2,4 2,2" xmin=-4 xmax=4 ymin=0 ymax=6 uguale=1 titolo="From A to B the line moves 4 units right and 2 down"}
:::

:::osservazione
The intercept is read by setting $x=0$, whereas the slope is measured by comparing two points. The lines $y=2x+1$ and $y=-x+1$ share the point $(0;1)$. A step of one unit to the right gives the height $2\cdot1+1=3$ on the first line and $-1+1=0$ on the second. Two lines with the same slope can instead have different intercepts. In that case each step to the right adds the same change in $y$, but starting from different initial values.
:::

## General form

:::teorema{#generale titolo="Implicit equations and points on a line"}
Every line, including a vertical one, can be written in **implicit form**, or general form, $ax+by+c=0$. The numbers $a$ and $b$ are the coefficients of $x$ and $y$, and at least one of them is nonzero. The number $c$, which multiplies no letter, is the **constant term**.

- If $b\ne0$, move $ax+c$ to the right-hand side and divide by $b$, which gives $y=-\dfrac abx-\dfrac cb$.
- If $b=0$, the equation becomes $ax+c=0$, that is, $x=-\dfrac ca$, and the line is vertical.

For $2x+3y-6=0$ we have
$$
\begin{aligned}
3y&=-2x+6,\\
y&=-\frac23x+2.
\end{aligned}
$$
The axis intercepts are $(3;0)$ and $(0;2)$. They are found by setting $y=0$, which gives $2x-6=0$, and $x=0$, which gives $3y-6=0$.

A point lies on the line when substituting its coordinates gives a true equality. For example, $(0;2)$ gives $2\cdot0+3\cdot2-6=0$, which is true. The same check also verifies an equation constructed from given data.

Multiplying every term by the same nonzero number gives an **equivalent** equation, that is, one that is true for the same points, hence an equation of the same line; for example, $2x+3y-6=0$ multiplied by $-2$ becomes $-4x-6y+12=0$. The symbol $\Longleftrightarrow$, read "is equivalent to", indicates that two equations are equivalent.
:::

:::esempio{titolo="When one coordinate stays fixed"}
From $3x-6=0$ we get $x=2$. The $y$-coordinate does not appear, so it can take any value, and all the points lie on the vertical line at $x=2$. From $4y+8=0$ we get $y=-2$; here the $x$-coordinate can vary and the line is horizontal.

The condition on $a$ and $b$ is needed because, if both were zero, the equation would become $c=0$, which contains neither $x$ nor $y$.

- If $c=0$, the equality $0=0$ is satisfied by every point of the plane.
- If $c\ne0$, no point satisfies it.
:::

## Lines through given points

:::teorema{#per-un-punto titolo="A direction and a point"}
The line of slope $m$ through $P(x_0;y_0)$ has the equation
$$
y-y_0=m(x-x_0).
$$
Here $x_0$ and $y_0$ (read "x nought" and "y nought") are the coordinates of the given point, while $x$ and $y$ are the coordinates of any point of the line. For every point $(x;y)$ of the line other than $P$ the ratio of the changes is $m$, that is, $\dfrac{y-y_0}{x-x_0}=m$. Multiplying both sides by $x-x_0$ gives the equation, which $P$ also satisfies because it gives $0=0$.

For $P(2;3)$ and $m=-1$ this gives $y-3=-(x-2)$, that is, $y-3=-x+2$, hence $y=-x+5$, the line in the figure.

For two points with distinct $x$-coordinates, first calculate $m$ with the slope formula and then use either point in place of $P$. If two distinct points share an $x$-coordinate, the line is vertical and that $x$-coordinate stays constant.

Two distinct points determine exactly one line. If the two points coincide, the data do not determine a direction, because infinitely many lines pass through one point, and further information is needed.

::grafico{f="-x+5" punti="2,3,pieno,P" xmin=-1 xmax=7 ymin=-2 ymax=7 titolo="The line $y=-x+5$ passes through $(2;3)$"}
:::

:::esempio{titolo="One construction that also handles a vertical line"}
For two distinct points $A(x_A;y_A)$ and $B(x_B;y_B)$, a general-form equation can be written without dividing by the difference of the $x$-coordinates, so it also holds when the $x$-coordinates are equal.

$$
(x_B-x_A)(y-y_A)-(y_B-y_A)(x-x_A)=0.
$$

- If $x_B\ne x_A$, dividing by $x_B-x_A$ gives back $y-y_A=m(x-x_A)$ with $m=\dfrac{y_B-y_A}{x_B-x_A}$.
- If $x_B=x_A$, the first term is zero, because it contains the factor $x_B-x_A=0$. What remains is $-(y_B-y_A)(x-x_A)=0$. Since the points are distinct, $y_B-y_A\ne0$, so we must have $x-x_A=0$, that is, $x=x_A$.

For $A(2;5)$ and $B(2;-1)$ the first numerical factor is $2-2=0$ and the second is $-1-5=-6$. The equation becomes $6(x-2)=0$, which gives back $x=2$. Substituting the coordinates of either endpoint makes the expression on the left zero, because at both points $x-2=0$.
:::

## Parallel and perpendicular lines

:::teorema{#posizioni titolo="Comparing directions"}
Two lines are **parallel** if they have the same direction. For two nonvertical lines, compare slopes and intercepts.

- With the same slope and different intercepts, the lines are distinct parallel lines and have no common point.
- With the same slope and the same intercept, the equations describe the same line, and the lines are called coincident.
- With different slopes, the lines have exactly one common point and are called intersecting.

Two lines are **perpendicular** if they meet at right angles. Two nonvertical lines, with slopes $m_1$ and $m_2$, are perpendicular if the product $m_1m_2$ equals $-1$. Hence the slope of the perpendicular is the **negative reciprocal** of the given one, that is, numerator and denominator are swapped and the sign is changed. For example, a perpendicular to $y=2x+1$ has slope $-\dfrac12$, and indeed $2\cdot\left(-\dfrac12\right)=-1$. A horizontal line and a vertical line are perpendicular, but the vertical line has no slope, so this case is handled separately.

To find the parallel to $y=3x-2$ through $(1;5)$, keep the slope $3$ and use the point-slope formula. This gives $y-5=3(x-1)$, that is, $y=3x-3+5$, hence $y=3x+2$. Parallelism fixes the direction and the given point fixes the position.
:::

::::teorema{#prodotto-pendenze titolo="Why the product is negative one"}
For two nonvertical perpendicular lines, the slopes satisfy $m_1m_2=-1$. This relationship gives the slope of the perpendicular before the point is imposed.

:::dimostrazione
The proof compares a displacement along the first line with the same displacement rotated by a quarter-turn ($90^\circ$). A displacement is written as a pair $(u;v)$, with $u$ units horizontally and $v$ vertically. Rotating it by $90^\circ$ anticlockwise, that is, in the direction opposite to the hands of a clock, gives the displacement $(-v;u)$. For example, $(2;1)$ becomes $(-1;2)$.

Along the first line one can move $1$ unit horizontally, and then the $y$-coordinate changes by $m_1$. The displacement is therefore $(1;m_1)$, which after the rotation becomes $(-m_1;1)$. This rotated displacement is perpendicular to the first one, so it is a displacement along the second line.

Since the second line is nonvertical, the horizontal change $-m_1$ is not zero, so $m_1\ne0$. The ratio of vertical to horizontal change after the rotation is

$$
m_2=\frac{1}{-m_1}.
$$

Multiplying both sides by $m_1$ gives $m_1m_2=-1$. Conversely, a line with this slope has the direction of the rotated displacement and is therefore perpendicular to the first line.
:::

In the figure the line $y=\dfrac12x$ contains the displacement $(2;1)$ and the line $y=-2x$ contains the rotated displacement $(-1;2)$.

::grafico{f="0.5*x;-2*x" xmin=-2.7 xmax=3.4 ymin=-2.75 ymax=3.4 uguale=1 vettori="0,0,2,1;0,0,-1,2" punti="2,1,pieno;-1,2,pieno" legenda="m_1=\dfrac12;m_2=-2" titolo="Rotating the displacement $(2;1)$ by a quarter-turn gives $(-1;2)$"}
::::

:::osservazione
The product of the slopes is used only when both lines have a slope. For the vertical line $x=-1$, the perpendicular through $(2;4)$ is horizontal and keeps the $y$-coordinate of the point, so it is $y=4$. The parallel through the same point is instead vertical and must keep its $x$-coordinate fixed along the whole line, so it is $x=2$. In both cases we check the direction and the coordinate of the given point.
:::

## Intersections

:::teorema{#intersezioni titolo="The system of line equations"}
The **intersection point** of two lines lies on both, so its coordinates satisfy both equations. Therefore we solve the system of the two equations, that is, we look for $x$ and $y$ that make them true together.

For $y=2x+1$ and $y=-x+7$ the system is
$$
\begin{cases}
y=2x+1\\
y=-x+7.
\end{cases}
$$
At the common point the two expressions for $y$ are equal, so $2x+1=-x+7$, which gives $3x=6$ and $x=2$. Substituting into $y=2x+1$ gives $y=5$. The point is $P(2;5)$ in the figure.

If the slopes agree but the intercepts differ, the system is **inconsistent**, that is, it has no solution, and the lines are distinct and parallel. If the intercepts also agree, the system is **dependent**, that is, it has infinitely many solutions, because the two equations describe the same line.

::grafico{f="2*x+1;-x+7" punti="2,5,pieno,P" xmin=-1 xmax=5 ymin=-1 ymax=9 titolo="The coordinates of $P$ satisfy both equations"}
:::

:::esempio{#intersezioni-con-vincoli titolo="Checking whether the common point lies on both segments"}
On the first line $y=2x+1$ we consider the segment of points with $x$-coordinates from $0$ to $2$, that is, $0\le x\le2$. On the second line $y=7-x$ we consider the segment of points with $3\le x\le5$. The full lines meet at $(2;5)$, because $7-x$ and $-x+7$ are the same expression. The point $(2;5)$ has $x$-coordinate $2$, so it is an endpoint of the first segment. It does not belong to the second one, because its $x$-coordinate is less than $3$. The only common point of the two lines does not lie on both segments, so the intersection of the segments is empty. Checking membership in a segment therefore requires the equation of the line and the bound on the coordinates of the segment.
:::

## Distance to a line

::::teorema{#distanza-retta titolo="Length of the perpendicular segment"}
The distance of a point $P$ from a line $r$, written $d(P,r)$, is the length of the segment from $P$ to the line perpendicular to it. The point $H$ where this segment meets the line is the **foot** of the perpendicular, and it is the point of the line closest to $P$. For $P(x_0;y_0)$ and the line $ax+by+c=0$, the distance is
$$
d(P,r)=\frac{|ax_0+by_0+c|}{\sqrt{a^2+b^2}}.
$$
The denominator is positive because $a$ and $b$ are not both zero. The numerator is zero exactly when the point lies on the line.

For the origin and the line $3x+4y-10=0$ we have
$$
d=\frac{|3\cdot0+4\cdot0-10|}{\sqrt{3^2+4^2}}=\frac{|-10|}{\sqrt{25}}=\frac{10}{5}=2.
$$
Multiplying the entire line equation by the same nonzero number $k$ leaves the distance unchanged. Indeed, the numerator is multiplied by $|k|$ and the denominator by $\sqrt{k^2}=|k|$, that is, by the same absolute value.

:::dimostrazione
A displacement with components $(b;-a)$ leaves the value of $ax+by$ unchanged, because this value changes by $a\cdot b+b\cdot(-a)=ab-ab=0$. So $(b;-a)$ is a displacement along the line. Rotating it by a quarter-turn with the rule $(u;v)\to(-v;u)$ gives $(a;b)$, which is therefore a displacement perpendicular to the line. The foot $H$ is reached from $P$ with a multiple of this displacement, so it can be written as $H(x_0-ta;y_0-tb)$ for a suitable number $t$. Since $H$ lies on the line, its coordinates satisfy the equation.

$$
\begin{aligned}
a(x_0-ta)+b(y_0-tb)+c&=0,\\
ax_0+by_0+c-t(a^2+b^2)&=0,\\
t&=\frac{ax_0+by_0+c}{a^2+b^2}.
\end{aligned}
$$

The displacement from $P$ to $H$ has components $-ta$ and $-tb$, so by the Pythagorean theorem its length is
$$
PH=\sqrt{t^2a^2+t^2b^2}=|t|\sqrt{a^2+b^2}.
$$
Substituting the value of $t$, and since $a^2+b^2=\left(\sqrt{a^2+b^2}\right)^2$, we get
$$
PH=\frac{|ax_0+by_0+c|}{a^2+b^2}\,\sqrt{a^2+b^2}=\frac{|ax_0+by_0+c|}{\sqrt{a^2+b^2}}.
$$
The calculation still works if one component is zero, so it includes horizontal and vertical lines.
:::

In the figure the line $3x+4y-10=0$, that is, $y=-\dfrac34x+\dfrac52$, has the foot of the perpendicular from $O$ at $H(1.2;1.6)$, and $OH=2$.

::grafico{f="-0.75*x+2.5" linee="0,0 1.2,1.6" punti="0,0,pieno,O;1.2,1.6,pieno,H" xmin=-1 xmax=5 ymin=-1 ymax=4 uguale=1 titolo="The segment $OH$ is perpendicular to the line and has length $2$"}
::::

:::esempio{titolo="Distance between two parallel lines"}
Two parallel lines are the same distance apart at every point, so the distance between the lines is the distance of any point of the first line from the second. For $3x+4y=5$ and $3x+4y=15$, at every point of the first line $3x+4y$ equals $5$, so the formula for the distance from the second line gives
$$
d=\frac{|5-15|}{\sqrt{3^2+4^2}}=\frac{10}{5}=2.
$$
In general form, the coefficients of $x$ and $y$ must first be made equal, so the constant terms are compared on the same scale; for example, $6x+8y-12=0$ divided by $2$ becomes $3x+4y-6=0$.
:::

## Areas and linear models

:::osservazione{#applicazioni titolo="From data to a graph"}
In a triangle with a horizontal base, the base is the distance between the two vertices with the same $y$-coordinate, and the height is the vertical distance of the third vertex from the line of the base. For $A(0;0)$, $B(6;0)$ and $C(2;4)$ the base $AB$ is $6$ and the height is the $y$-coordinate $4$ of $C$, so the area is $\dfrac{6\cdot4}{2}=12$.

A plan with a fixed initial fee $q$ and a cost $m$ per unit is described by $C(x)=mx+q$. The notation $C(x)$ is read "C of x" and indicates the cost for the quantity $x$. Its graph is a line with slope $m$ and intercept $q$. The **domain**, that is, the set of allowed values of $x$, depends on the meaning of $x$: for example, $x\ge0$ if $x$ is a distance travelled.

The intersection of two cost lines gives the quantity at which the plans cost the same; the sign of the difference of the costs shows which one is cheaper before and after it.
:::

:::esempio{titolo="Triangle height when the base slants"}
Let $A(0;1)$, $B(3;5)$, and $C(4;-1)$. The base $AB$ has length $\sqrt{3^2+4^2}=5$. The line $AB$ has slope $\dfrac{5-1}{3-0}=\dfrac43$ and intercept $1$, so it is $y=\dfrac43x+1$. Multiplying by $3$ and moving all terms to the left-hand side gives $4x-3y+3=0$. The height relative to $AB$ is the distance of $C$ from this line:
$$
d=\frac{|4\cdot4-3\cdot(-1)+3|}{\sqrt{4^2+(-3)^2}}=\frac{|16+3+3|}{5}=\frac{22}{5}.
$$
The area is $\dfrac12\cdot5\cdot\dfrac{22}{5}=11$. Since the base slants, the difference of the $y$-coordinates of two vertices alone does not give the height, which is perpendicular to the base.
:::

:::esempio{titolo="Two plans and an integer threshold"}
Two bike rental plans cost $C_A(n)=5+3n$ and $C_B(n)=11+n$ euros after $n$ whole hours, with $n\ge 1$. The cost difference is

$$
\begin{aligned}
C_A(n)-C_B(n)&=(5+3n)-(11+n)\\
&=2n-6.
\end{aligned}
$$

The difference is zero when $2n-6=0$, that is, for $n=3$, and indeed both plans cost $14$ euros. For $n<3$ the difference is negative, so A costs less for one or two hours. For $n>3$ the difference is positive, so from four hours onward B costs less. In the graph, with the hours $n$ horizontally and the cost $C$ vertically, the lines meet at $P(3;14)$. The graph also shows intermediate values, whereas the problem allows only whole hours.

::grafico{f="5+3*x;11+x" punti="3,14,pieno,P" nomi="n,C" legenda="C_A(n)=5+3n;C_B(n)=11+n" xmin=0 xmax=6 ymin=0 ymax=24 titolo="The plans cost the same after 3 hours"}
:::

:::osservazione
If the fixed fee for B becomes $12$ euros, that is, $C_B(n)=12+n$, the lines meet where $5+3n=12+n$, so $2n=7$ and $n=\dfrac72$. This value is not a whole number, so the two neighbouring whole numbers are compared.

- For three hours A costs $5+9=14$ euros and B costs $12+3=15$.
- For four hours A costs $5+12=17$ euros and B costs $12+4=16$.

These two checks determine from which number of hours each plan is cheaper, even when the point of equal cost found with algebra lies outside the domain.
:::
