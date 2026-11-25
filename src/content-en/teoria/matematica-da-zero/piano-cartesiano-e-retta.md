---
titolo: The Cartesian plane and straight lines
sommario: How to locate a point using two numbers, calculate the distance between two points and the midpoint of a segment, understand a function and its graph, write the equation of a line and draw it, tell when two lines are parallel or perpendicular, and find where two lines meet by solving a system of equations.
---

## Axes, origin, and coordinates

:::definizione{#piano-cartesiano titolo="The Cartesian plane"}
Draw two perpendicular lines, one horizontal and one vertical. Choose a positive direction on each line, indicated by an arrow, and use the same unit of length on both. The horizontal line is called the **$x$-axis**, or axis of abscissas. The vertical line is called the **$y$-axis**, or axis of ordinates. The point where the two lines meet is called the **origin** and is denoted by $O$. A plane with these two axes is called a **Cartesian plane**.

In simple terms, each axis is a number line like the one in the chapter on signed numbers. On the $x$-axis, positive numbers lie to the right of $O$ and negative numbers to the left. On the $y$-axis, positive numbers lie above $O$ and negative numbers below. In the Cartesian plane, two numbers describe the position of a point, so many geometry problems can be solved by calculation.
:::

:::definizione{#coordinate titolo="Coordinates of a point"}
Let $P$ be a point in the plane. Move vertically down or up from $P$ to the $x$-axis. The number you read on this axis is called the **abscissa** of $P$. Move horizontally from $P$ to the $y$-axis. The number you read is called the **ordinate** of $P$. The abscissa and the ordinate are the **coordinates** of $P$. They are written after the name of the point, the abscissa first and the ordinate second, separated by a comma, as in $P(x_P, y_P)$.

To reach the point $A(3, 2)$, start at $O$ and move $3$ units to the right and then $2$ units up. To reach $B(-2, 3)$, move $2$ units to the left and $3$ units up. Switching the order of the coordinates changes the point, because $(3, 2)$ is $3$ units to the right and $2$ up, whereas $(2, 3)$ is $2$ units to the right and $3$ up. Each point in the plane corresponds to exactly one pair of coordinates, and each pair of numbers corresponds to exactly one point.
:::

:::osservazione{#punti-sugli-assi titolo="Points on the axes"}
To reach a point on the $x$-axis from $O$, move horizontally only, so its ordinate is $0$. For example, $(4, 0)$ and $(-1, 0)$ lie on the $x$-axis. Similarly, a point on the $y$-axis has abscissa $0$, as in $(0, 5)$ and $(0, -3)$. The origin lies on both axes and has coordinates $O(0, 0)$.
:::

:::definizione{#quadranti titolo="Quadrants"}
The two axes divide the plane into four regions called **quadrants**. They are numbered I through IV, starting in the upper right and moving counterclockwise. The signs of the coordinates determine which quadrant contains a point.

- Quadrant I: $x > 0$ and $y > 0$, for example $A(3, 2)$.
- Quadrant II: $x < 0$ and $y > 0$, for example $B(-2, 3)$.
- Quadrant III: $x < 0$ and $y < 0$, for example $C(-3, -1)$.
- Quadrant IV: $x > 0$ and $y < 0$, for example $D(2, -3)$.

Points on the axes do not belong to any quadrant. The point $(0, -3)$, for example, lies on the $y$-axis between quadrants III and IV.

::grafico{xmin=-5 xmax=5 ymin=-4 ymax=4 uguale=1 punti="3,2,pieno,A;-2,3,pieno,B;-3,-1,pieno,C;2,-3,pieno,D" segmenti="3,0,3,2;0,2,3,2;-2,0,-2,3;0,3,-2,3" etichette="3.8,3.4,I;-4.2,3.4,II;-4.4,-3.2,III;3.8,-3.2,IV" titolo="The points $A(3, 2)$, $B(-2, 3)$, $C(-3, -1)$, and $D(2, -3)$ in the four quadrants. For $A$ and $B$, the dashed segments show how to read the coordinates on the axes"}

:::

## Distance between two points and midpoint

:::definizione{#distanza-sugli-assi titolo="Distance between points with the same ordinate or the same abscissa"}
The **distance** between two points $A$ and $B$ is the length of the segment $AB$ and is denoted by $\overline{AB}$. If $A$ and $B$ have the same ordinate, the segment $AB$ is horizontal and its length is the difference between the larger abscissa and the smaller one. For $A(-2, 1)$ and $B(5, 1)$, this gives
$$
\overline{AB} = 5 - (-2) = 7 .
$$
If $A$ and $B$ have the same abscissa instead, the segment is vertical and its length is the difference between the ordinates. For $C(3, -4)$ and $D(3, 2)$, this gives $\overline{CD} = 2 - (-4) = 6$.

In general, a horizontal segment has length $|x_B - x_A|$, where $|\ |$ denotes the absolute value introduced in the chapter on signed numbers. The absolute value gives the same result regardless of the order of the two points, because $|5 - (-2)| = 7$ and $|-2 - 5| = |-7| = 7$. Similarly, a vertical segment has length $|y_B - y_A|$.
:::

:::richiamo{titolo="Pythagorean theorem"}
In a right triangle with legs $a$, $b$ and hypotenuse $c$, we have
$$
c^2 = a^2 + b^2 .
$$
:::

::::teorema{#distanza-tra-due-punti titolo="Distance between two points"}
The distance between the points $A(x_A, y_A)$ and $B(x_B, y_B)$ is
$$
\overline{AB} = \sqrt{(x_B - x_A)^2 + (y_B - y_A)^2} .
$$
For $A(1, -2)$ and $B(7, 6)$, this gives
$$
\begin{aligned}
\overline{AB} &= \sqrt{(7 - 1)^2 + \big(6 - (-2)\big)^2} \\[6pt]
&= \sqrt{6^2 + 8^2} = \sqrt{36 + 64} \\[6pt]
&= \sqrt{100} = 10 .
\end{aligned}
$$
This formula gives the length of a segment from the coordinates of its endpoints alone. The differences are squared, and a number and its opposite have the same square, so interchanging $A$ and $B$ leaves the result unchanged. For example, $(1 - 7)^2 = 36$ and $(7 - 1)^2 = 36$.

:::dimostrazione
The idea is to construct a right triangle with segment $AB$ as its hypotenuse. Take the point $H(x_B, y_A)$, which has the same ordinate as $A$ and the same abscissa as $B$. Segment $AH$ is horizontal and has length $|x_B - x_A|$. Segment $HB$ is vertical and has length $|y_B - y_A|$. A horizontal segment and a vertical segment are perpendicular, so triangle $AHB$ has a right angle at $H$, with legs $AH$ and $HB$ and hypotenuse $AB$. By the **Pythagorean theorem**,
$$
\overline{AB}^2 = \overline{AH}^2 + \overline{HB}^2 = (x_B - x_A)^2 + (y_B - y_A)^2 ,
$$
because the square of the absolute value of a number equals the square of the number. Taking the square root gives the formula. If $A$ and $B$ have the same ordinate, no triangle is formed. In this case, the second difference is $0$ and the formula gives $\sqrt{(x_B - x_A)^2} = |x_B - x_A|$, the length of the horizontal segment. The same reasoning applies to two points with the same abscissa. In the example, the point is $H(7, -2)$, the legs have lengths $6$ and $8$, and the hypotenuse has length $10$.

::grafico{xmin=-1 xmax=9 ymin=-4 ymax=7 uguale=1 linee="1,-2 7,6" punti="1,-2,pieno,A;7,6,pieno,B;7,-2,pieno,H" segmenti="1,-2,7,-2;7,-2,7,6" etichette="3.8,-3,6;7.3,1.8,8;3.1,2.6,10" titolo="The segment $AB$ is the hypotenuse of the right triangle $AHB$ with legs of lengths $\overline{AH} = 7 - 1 = 6$ and $\overline{HB} = 6 - (-2) = 8$, so $\overline{AB} = \sqrt{36 + 64} = 10$"}

:::
::::

:::esempio{titolo="Distance with negative coordinates"}
For $P(-3, 2)$ and $Q(1, -1)$, the coordinate differences are $1 - (-3) = 4$ and $-1 - 2 = -3$. Therefore,
$$
\overline{PQ} = \sqrt{4^2 + (-3)^2} = \sqrt{16 + 9} = \sqrt{25} = 5 .
$$
The difference $-3$ is negative, but its square is $9$, and the vertical leg of the triangle has length $3$.
:::

::::teorema{#punto-medio titolo="Midpoint of a segment"}
The **midpoint** of segment $AB$ is the point $M$ on the segment that is equally distant from $A$ and $B$. Its coordinates are the averages of the corresponding endpoint coordinates:
$$
M\left( \frac{x_A + x_B}{2}, \frac{y_A + y_B}{2} \right) .
$$
For $A(1, -2)$ and $B(7, 6)$, this gives
$$
M\left( \frac{1 + 7}{2}, \frac{-2 + 6}{2} \right) = M(4, 2) .
$$
The distance formula gives $\overline{AM} = \sqrt{3^2 + 4^2} = 5$ and $\overline{MB} = \sqrt{3^2 + 4^2} = 5$. Thus, $M$ is the same distance from both endpoints, and that distance is half of $\overline{AB} = 10$.

:::dimostrazione
To move from $A$ to $B$, the horizontal displacement is $x_B - x_A$ and the vertical displacement is $y_B - y_A$. Taking half of each displacement brings us halfway along the segment, because the resulting right triangle has the same shape as triangle $AHB$ and sides half as long. The abscissa of $M$ is therefore
$$
x_A + \frac{x_B - x_A}{2} = \frac{2x_A + x_B - x_A}{2} = \frac{x_A + x_B}{2} ,
$$
and similarly its ordinate is $\dfrac{y_A + y_B}{2}$. In the example, going from $A(1, -2)$ to $B(7, 6)$ takes us $6$ units to the right and $8$ units up. Moving half as far in each direction, $3$ units to the right and $4$ units up, brings us to $M(4, 2)$.
:::
::::

:::esempio{titolo="Midpoint with negative coordinates"}
For $A(-5, 3)$ and $B(2, -1)$, we have
$$
M\left( \frac{-5 + 2}{2}, \frac{3 + (-1)}{2} \right) = M\left( -\frac{3}{2}, 1 \right) .
$$
The coordinates of the midpoint can be fractions even when the endpoints have integer coordinates.
:::

## Functions, tables, and graphs

:::definizione{#funzione titolo="Function"}
A **function** is a rule that assigns to each number $x$ in a given set *one and only one* number $y$. The number $x$ is called the independent variable because we choose it. The number $y$ is called the dependent variable because it is calculated from $x$. We write $y = f(x)$, read as “$y$ equals f of $x$.”

In simple terms, the rule for many functions is a sequence of calculations. We choose $x$, carry out the indicated operations, and obtain a single result. For $f(x) = 2x + 1$, we have $f(3) = 2 \cdot 3 + 1 = 7$ and $f(-2) = 2 \cdot (-2) + 1 = -3$. The values can be recorded in a table.

| $x$ | $-2$ | $-1$ | $0$ | $1$ | $2$ |
| --- | --- | --- | --- | --- | --- |
| $y = 2x + 1$ | $-3$ | $-1$ | $1$ | $3$ | $5$ |

Many everyday situations can be described by a function. If apples cost $2$ euros per kilogram, the cost $y$ for $x$ kilograms is $y = 2x$. For $3$ kilograms, the cost is $6$ euros.
:::

:::definizione{#grafico-di-una-funzione titolo="Graph of a function"}
The **graph** of a function $f$ is the set of points in the Cartesian plane with coordinates $\big( x, f(x) \big)$, that is, the points whose ordinate is the value of the function evaluated at their abscissa. To sketch the graph, make a table, plot the points, and join them with a line or curve.

For $f(x) = x^2$, the table gives the points $(-2, 4)$, $(-1, 1)$, $(0, 0)$, $(1, 1)$, and $(2, 4)$. The curve through them is called a parabola. A point lies on the graph when its coordinates satisfy the equation $y = f(x)$. The point $(3, 9)$ lies on the graph of $f$ because $3^2 = 9$. The point $(2, 5)$ does not lie on it because $2^2 = 4$ differs from $5$.

::grafico{f="x^2" xmin=-3 xmax=3 ymin=-1 ymax=9 punti="-2,4,pieno;-1,1,pieno;0,0,pieno;1,1,pieno;2,4,pieno" legenda="y = x^2" titolo="The points in the table for $f(x) = x^2$ with $x = -2, -1, 0, 1, 2$ and the curve through them, which is the graph of the function"}

:::

:::attenzione
A curve in the plane need not be the graph of a function. A function assigns to each $x$ a single value of $y$, so every vertical line meets its graph in at most one point. The rule “$y$ is a number whose square is $x$” assigns to $x = 4$ the two numbers $y = 2$ and $y = -2$, because $2^2 = 4$ and $(-2)^2 = 4$. The points $(4, 2)$ and $(4, -2)$ lie on the same vertical line, so this rule is *not* a function.
:::

## Line through the origin

:::definizione{#retta-per-l-origine titolo="Line passing through the origin"}
Let $m$ be a fixed number. The points in the plane that satisfy the equation
$$
y = mx
$$
form a **line through the origin**. The number $m$ is called the **slope**, or steepness, of the line. When $x = 0$, we have $y = 0$, so the line passes through $O(0, 0)$. When $x = 1$, we have $y = m$, so the line passes through $(1, m)$.

For $y = 2x$, the table gives the points $(0, 0)$, $(1, 2)$, $(2, 4)$, and $(3, 6)$. Whenever $x$ increases by $1$, $y$ increases by $2$. At every point other than $O$, the ratio $\dfrac{y}{x}$ equals $2$, for example $\dfrac{6}{3} = 2$. This is why the equation $y = mx$ describes two directly proportional quantities, as in the chapter on decimals, proportions, and percentages. For example, the graph of the cost $y = 2x$ of $x$ kilograms of apples at $2$ euros per kilogram is part of this line.
:::

:::osservazione{#segno-coefficiente-angolare titolo="Sign of the slope"}
The slope tells us how the line is inclined.

- If $m > 0$, the line rises from left to right. For $y = 2x$, going from $x = 1$ to $x = 2$ increases the ordinate from $2$ to $4$.
- If $m < 0$, the line falls from left to right. For $y = -x$, going from $x = 1$ to $x = 2$ decreases the ordinate from $-1$ to $-2$.
- If $m = 0$, the equation is $y = 0$, which represents the $x$-axis.

The greater the absolute value of $m$, the steeper the line. At $x = 1$, the line $y = 3x$ reaches an ordinate of $3$, whereas the line $y = \dfrac{1}{2}x$ reaches only $\dfrac{1}{2}$. The line $y = x$ is called the bisector of quadrants I and III because it divides the right angle between the positive $x$-axis and the positive $y$-axis in half. The line $y = -x$ bisects quadrants II and IV.

::grafico{f="2*x;-x" xmin=-4 xmax=4 ymin=-4 ymax=4 uguale=1 punti="1,2,pieno;2,4,pieno;1,-1,pieno;2,-2,pieno" legenda="y = 2x;y = -x" titolo="The line $y = 2x$ has $m = 2 > 0$ and rises. The line $y = -x$ has $m = -1 < 0$ and falls. Both pass through the origin"}

:::

## The line y = mx + q

:::definizione{#retta-y-mx-q titolo="Slope-intercept form of the equation of a line"}
Let $m$ and $q$ be two fixed numbers. The points that satisfy the equation
$$
y = mx + q
$$
form a line. This line is obtained from the line $y = mx$ by adding $q$ to each ordinate, that is, by shifting every point $q$ units vertically. It therefore has the same inclination, and $m$ is again called the slope. The number $q$ is called the **vertical intercept**, or y-intercept. When $x = 0$, we have $y = q$, so $q$ is the ordinate of the point $(0, q)$ where the line crosses the $y$-axis. The equation $y = mx + q$ is called the **slope-intercept form** of the line because $y$ is isolated on one side.

For $y = 2x + 1$, we have $m = 2$ and $q = 1$. The line passes through $(0, 1)$, $(1, 3)$, and $(2, 5)$, and for every step of $1$ unit to the right it rises by $2$.

::grafico{f="2*x+1" xmin=-4 xmax=4 ymin=-3 ymax=6 uguale=1 punti="0,1,pieno;1,3,pieno;2,5,pieno" segmenti="0,1,1,1;1,1,1,3;1,3,2,3;2,3,2,5" etichette="0.35,0.45,1;1.15,1.9,2;1.35,2.45,1;2.15,3.9,2" legenda="y = 2x + 1" titolo="The line $y = 2x + 1$ crosses the $y$-axis at the point with ordinate $q = 1$. For every step of $1$ unit to the right it rises by $m = 2$"}

:::

:::esempio{titolo="Drawing a line and finding its intercepts"}
Exactly one line passes through two points, so two points on a line suffice to draw it. For $y = -\dfrac{1}{2}x + 3$, we have $m = -\dfrac{1}{2}$ and $q = 3$.

- For $x = 0$, this gives $y = 3$, so the line crosses the $y$-axis at $(0, 3)$.
- To find where it crosses the $x$-axis, set $y = 0$. The equation $-\dfrac{1}{2}x + 3 = 0$ becomes $\dfrac{1}{2}x = 3$, so $x = 6$ and the point is $(6, 0)$.

Plot the two points $(0, 3)$ and $(6, 0)$ and draw the line through them. The slope is negative. Indeed, the line falls by $\dfrac{1}{2}$ for every step of $1$ to the right.
:::

:::attenzione
The slope is the coefficient of $x$, even when the term containing it is written second. For the line $y = 5 - 3x$, the slope is $-3$ and the vertical intercept is $5$. Indeed, when $x = 1$ we have $y = 2$, and when $x = 2$ we have $y = -1$, so for every step of $1$ to the right the line falls by $3$.
:::

## Lines parallel to the axes and implicit form

:::teorema{#rette-parallele-agli-assi titolo="Lines parallel to the axes"}
Let $h$ and $k$ be two fixed numbers.

- The equation $y = k$ represents the horizontal line consisting of the points with ordinate $k$. It is parallel to the $x$-axis and passes through $(0, k)$. Its equation can be written as $y = 0 \cdot x + k$, so its slope is $0$. For example, $y = -2$ contains the points $(-1, -2)$, $(0, -2)$, and $(4, -2)$.
- The equation $x = h$ represents the vertical line consisting of the points with abscissa $h$. It is parallel to the $y$-axis and passes through $(h, 0)$. For example, $x = 3$ contains the points $(3, -1)$, $(3, 0)$, and $(3, 5)$.

The $x$-axis has equation $y = 0$, and the $y$-axis has equation $x = 0$. A vertical line pairs the value $x = h$ with infinitely many values of $y$, so it is not the graph of a function and cannot be written in the form $y = mx + q$. The slope of a vertical line is undefined.

::grafico{f="-2" linee="3,-4 3,4" xmin=-4 xmax=5 ymin=-4 ymax=4 uguale=1 punti="3,-2,pieno,P" etichette="3.2,3.3,x = 3" legenda="y = -2" titolo="The line $x = 3$ is parallel to the $y$-axis and the line $y = -2$ is parallel to the $x$-axis. They meet at $P(3, -2)$"}

:::

:::definizione{#forma-implicita titolo="Implicit form of the equation of a line"}
Every line in the plane has an equation of the form
$$
ax + by + c = 0 ,
$$
where $a$, $b$, and $c$ are fixed numbers and $a$ and $b$ are not both equal to $0$. This is called the **implicit form** of the line because $y$ is not isolated. The implicit form includes vertical lines and therefore applies to *every* line.

- If $b \neq 0$, solving for $y$ gives the slope-intercept form. For $2x + 3y - 6 = 0$, moving $2x - 6$ to the right-hand side gives $3y = -2x + 6$. Dividing by $3$ gives $y = -\dfrac{2}{3}x + 2$, so $m = -\dfrac{2}{3}$ and $q = 2$. In general, $m = -\dfrac{a}{b}$.
- If $b = 0$, the equation becomes $ax + c = 0$ and represents a vertical line. For example, $2x - 8 = 0$ is equivalent to $x = 4$.

To go from slope-intercept form to implicit form, move all terms to the left-hand side, so $y = 3x - 1$ becomes $3x - y - 1 = 0$.
:::

## Lines through one point or two points

::::teorema{#retta-per-un-punto titolo="Line through a point with a given slope"}
The line through the point $P(x_0, y_0)$ with slope $m$ has equation
$$
y - y_0 = m\,(x - x_0) .
$$
For $P(2, 1)$ and $m = 3$, this gives $y - 1 = 3\,(x - 2)$, or $y - 1 = 3x - 6$, and therefore $y = 3x - 5$. Checking at $x = 2$ gives $y = 6 - 5 = 1$, and the point $P$ lies on the line.

:::dimostrazione
Moving $y_0$ to the right-hand side gives $y = mx - mx_0 + y_0$. This is the slope-intercept form $y = mx + q$ with $q = y_0 - mx_0$, so it represents a line with slope $m$. Substituting $x = x_0$ gives $y - y_0 = m \cdot 0 = 0$, or $y = y_0$, so the line passes through $P$.
:::
::::

::::teorema{#retta-per-due-punti titolo="Line through two points"}
Let $A(x_A, y_A)$ and $B(x_B, y_B)$ be two points with $x_A \neq x_B$. The line through $A$ and $B$ has slope
$$
m = \frac{y_B - y_A}{x_B - x_A} ,
$$
and its equation follows from the point-slope formula, using $A$ and this value of $m$. If instead $x_A = x_B$, the line is vertical and has equation $x = x_A$.

For $A(-1, 4)$ and $B(3, -4)$, we have
$$
m = \frac{-4 - 4}{3 - (-1)} = \frac{-8}{4} = -2 .
$$
The line has equation $y - 4 = -2\,(x + 1)$, or $y = -2x - 2 + 4 = -2x + 2$. Checking at $B$ gives $-2 \cdot 3 + 2 = -4$, the ordinate of $B$.

:::dimostrazione
Since $x_A \neq x_B$, the line is not vertical and has an equation $y = mx + q$. Both points lie on the line, so $y_A = mx_A + q$ and $y_B = mx_B + q$. Subtracting the first equality from the second eliminates $q$ and gives
$$
y_B - y_A = mx_B - mx_A = m\,(x_B - x_A) .
$$
Since $x_B - x_A \neq 0$, we can divide by $x_B - x_A$ to obtain the formula for $m$. In words, the slope is the vertical displacement divided by the horizontal displacement. To go from $A(-1, 4)$ to $B(3, -4)$, move $4$ units to the right and $8$ units down, so $m = \dfrac{-8}{4} = -2$.

::grafico{f="-2*x+2" xmin=-4 xmax=6 ymin=-5 ymax=6 uguale=1 punti="-1,4,pieno,A;3,-4,pieno,B" segmenti="-1,4,3,4;3,4,3,-4" etichette="0.8,4.4,4;3.2,0.2,8" legenda="y = -2x + 2" titolo="Going from $A(-1, 4)$ to $B(3, -4)$ takes us $4$ units to the right and $8$ units down, so the slope is $m = \dfrac{-8}{4} = -2$"}

:::
::::

## Parallel and perpendicular lines

:::teorema{#rette-parallele titolo="Parallel lines"}
Two lines $y = mx + q$ and $y = m'x + q'$ are **parallel** when they have the same slope, that is, when $m = m'$. If, in addition to $m = m'$, we also have $q = q'$, the lines coincide. Two vertical lines are always parallel to each other.

The second line is obtained from the first by shifting each point $q' - q$ units vertically, and a vertical shift does not change the inclination. The lines $y = 2x + 1$ and $y = 2x - 3$ are therefore parallel. The line parallel to $y = 2x + 1$ through $P(1, 5)$ has slope $2$, so its equation is $y - 5 = 2\,(x - 1)$, or $y = 2x + 3$.

::grafico{f="2*x+1;2*x-3" xmin=-4 xmax=5 ymin=-5 ymax=6 uguale=1 punti="0,1,pieno;0,-3,pieno" legenda="y = 2x + 1;y = 2x - 3" titolo="The lines $y = 2x + 1$ and $y = 2x - 3$ have the same slope $2$ and are parallel. The second is obtained by shifting the first down $4$ units"}

:::

::::teorema{#rette-perpendicolari titolo="Perpendicular lines"}
Consider two nonvertical lines with slopes $m$ and $m'$, both different from $0$. The two lines are **perpendicular** when
$$
m \cdot m' = -1 , \qquad \text{that is,} \qquad m' = -\frac{1}{m} .
$$
In words, the slope of the perpendicular line is the negative reciprocal of $m$. The lines $y = 2x$ and $y = -\dfrac{1}{2}x$ are perpendicular because $2 \cdot \left( -\dfrac{1}{2} \right) = -1$. The line perpendicular to $y = 3x - 2$ through $P(3, 1)$ has slope $-\dfrac{1}{3}$, so its equation is $y - 1 = -\dfrac{1}{3}\,(x - 3)$, or $y = -\dfrac{1}{3}x + 2$. A horizontal line and a vertical line are perpendicular even though the slope of the vertical line is undefined.

:::dimostrazione
Consider lines through the origin. For other lines, use the lines through the origin with the same slopes, which are parallel to the original lines. On the line $y = 2x$, starting from $O$, move $1$ unit to the right and $2$ units up to reach $A(1, 2)$. Rotate this path counterclockwise through a right angle about $O$. The displacement of $1$ unit to the right becomes a displacement of $1$ unit up, and the displacement of $2$ units up becomes a displacement of $2$ units to the left, so the new endpoint is $B(-2, 1)$. The line $OB$ is obtained by rotating $OA$ through a right angle, so it is perpendicular to $OA$, and its slope is $\dfrac{1}{-2} = -\dfrac{1}{2}$.

In general, on the line $y = mx$, the rotation takes the point $(1, m)$ to the point $(-m, 1)$. The slope of the rotated line is therefore $\dfrac{1}{-m} = -\dfrac{1}{m}$, and the product of the two slopes is $m \cdot \left( -\dfrac{1}{m} \right) = -1$.

::grafico{f="2*x;-x/2" xmin=-3 xmax=3 ymin=-2 ymax=3 uguale=1 punti="1,2,pieno,A;-2,1,pieno,B" segmenti="0,0,1,0;1,0,1,2;0,0,0,1;0,1,-2,1" legenda="y = 2x;y = -\dfrac{1}{2}x" titolo="Rotating the path from $O$ to $A(1, 2)$ through a right angle takes its endpoint to $B(-2, 1)$. The line $OB$ has slope $-\dfrac{1}{2}$ and is perpendicular to $y = 2x$"}

:::
::::

:::attenzione
For a perpendicular line, the slope is the negative of the *reciprocal*. Changing the sign alone gives the wrong result. The slopes of the lines $y = 2x$ and $y = -2x$ have product $2 \cdot (-2) = -4$, which differs from $-1$, so these lines are *not* perpendicular. They are reflections of one another across the $y$-axis.
:::

## Intersection of two lines and linear systems

:::definizione{#sistema-lineare titolo="System of two equations in two unknowns"}
A point common to two lines has coordinates that satisfy *both* equations. To find it, write the two equations with a brace, indicating that they must hold simultaneously:
$$
\begin{cases}
x + y = 5 \\
2x - y = 1
\end{cases}
$$
This notation represents a **system** of two equations in two unknowns. A **solution** of the system is a pair of numbers $(x, y)$ that satisfies both equations. The pair $(2, 3)$ is a solution because $2 + 3 = 5$ and $2 \cdot 2 - 3 = 1$. The pair $(1, 4)$ satisfies the first equation because $1 + 4 = 5$, but it does not satisfy the second because $2 \cdot 1 - 4 = -2$, so it is not a solution. The system is called **linear** because each equation is of the first degree and represents a line.

::grafico{f="5-x;2*x-1" xmin=-2 xmax=6 ymin=-3 ymax=7 uguale=1 punti="2,3,pieno" segmenti="2,0,2,3;0,3,2,3" legenda="x + y = 5;2x - y = 1" titolo="The lines $x + y = 5$ and $2x - y = 1$ meet at $(2, 3)$, which is the solution of the system"}

:::

:::teorema{#metodo-di-sostituzione titolo="Substitution method"}
The method has four steps.

1. Solve one of the two equations for one unknown.
2. Substitute the resulting expression into the other equation to obtain an equation in just one unknown.
3. Solve this equation as in the chapter on linear equations.
4. Substitute the resulting value into the expression from the first step to find the other unknown.

In the system consisting of $x + y = 5$ and $2x - y = 1$, the first equation gives $y = 5 - x$. Substituting into the second gives
$$
\begin{aligned}
2x - (5 - x) &= 1 \\[6pt]
3x - 5 &= 1 \\[6pt]
3x &= 6 \\[6pt]
x &= 2
\end{aligned}
$$
and therefore $y = 5 - 2 = 3$. The method works because the first equation states that $y$ and $5 - x$ are the same number, so either may replace the other in the second equation.
:::

:::teorema{#metodo-di-riduzione titolo="Elimination method"}
Add or subtract the corresponding sides of the two equations so that one unknown cancels. If necessary, first multiply one or both equations by numbers chosen to give that unknown opposite coefficients. The method works because adding equal quantities to equal quantities gives equal results.

In the system
$$
\begin{cases}
2x + 3y = 8 \\
5x - y = 3
\end{cases}
$$
multiply the second equation by $3$ to obtain $15x - 3y = 9$. Now the coefficients of $y$ are $3$ and $-3$, which are opposites. Adding the corresponding sides of $2x + 3y = 8$ and $15x - 3y = 9$ gives $17x = 17$, so $x = 1$. Substituting $x = 1$ into the second equation gives $5 - y = 3$, or $y = 2$. Checking in the first equation gives $2 \cdot 1 + 3 \cdot 2 = 8$.
:::

:::teorema{#sistemi-impossibili-indeterminati titolo="Systems with one, no, or infinitely many solutions"}
Two lines in the plane may meet at one point, be distinct and parallel, or coincide. The system formed by their equations therefore has one solution, no solution, or infinitely many solutions.

- The system has a **unique solution** when the lines meet at exactly one point, as happens for two lines with different slopes. In this case, the only solution is the point of intersection.
- The system is **inconsistent** when the lines are distinct and parallel. In the system formed by $y = 2x + 1$ and $2x - y = 3$, the second equation is equivalent to $y = 2x - 3$, so the two lines have the same slope $2$ and are parallel. Substituting $y = 2x + 1$ into the second equation gives $2x - 2x - 1 = 3$, or $-1 = 3$, which is false.
- The system has **infinitely many solutions** when the lines coincide. In the system formed by $x + 2y = 4$ and $2x + 4y = 8$, the second equation is the first multiplied by $2$. Multiplying the first by $2$ and subtracting gives $0 = 0$, which is true for every pair. Every point on the line $x + 2y = 4$, such as $(0, 2)$ or $(4, 0)$, is a solution.
:::
