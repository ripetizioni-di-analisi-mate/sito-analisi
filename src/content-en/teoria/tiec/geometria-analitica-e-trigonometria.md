---
titolo: Analytic geometry and introductory trigonometry
sommario: How to find distances and midpoints in the Cartesian plane, write and compare equations of lines, circles, and parabolas, and use sine, cosine, and tangent on the unit circle and in right triangles.
---

## The Cartesian plane

:::definizione{#piano-cartesiano titolo="The Cartesian plane and coordinates"}
A **Cartesian plane** has two perpendicular directed axes, a horizontal $x$-axis and a vertical $y$-axis, that meet at the origin $O$ and use the same unit of length. Each point $P$ in the plane corresponds to an ordered pair of numbers $(x;y)$, its **coordinates**. The horizontal coordinate $x$ gives the position of the projection of $P$ onto the $x$-axis, and the vertical coordinate $y$ gives the position of its projection onto the $y$-axis. The axes divide the plane into four quadrants, numbered counterclockwise starting in the upper right. The point $(-3;2)$ lies in the second quadrant because its horizontal coordinate is negative and its vertical coordinate is positive. Points on the $x$-axis have vertical coordinate $0$, and points on the $y$-axis have horizontal coordinate $0$.
:::

:::teorema{#distanza-due-punti titolo="Distance between two points"}
The distance between the points $A(x_A;y_A)$ and $B(x_B;y_B)$ is
$$
\overline{AB} = \sqrt{(x_B - x_A)^2 + (y_B - y_A)^2} .
$$
The formula follows from the Pythagorean theorem. The segment $AB$ is the hypotenuse of a right triangle whose legs are parallel to the axes and have lengths $|x_B - x_A|$ and $|y_B - y_A|$. For $A(1;1)$ and $B(4;5)$, the legs have lengths $3$ and $4$, so
$$
\overline{AB} = \sqrt{3^2 + 4^2} = \sqrt{25} = 5 .
$$
The order of the two points does not matter because the differences are squared.

::grafico{punti="1,1,pieno,A;4,5,pieno,B" linee="1,1 4,5" segmenti="1,1,4,1;4,1,4,5" etichette="2.5,0.55,3;4.35,3,4" xmin=-1 xmax=6 ymin=-1 ymax=6 uguale=1 titolo="The distance between $A(1;1)$ and $B(4;5)$ is the length of the hypotenuse of a right triangle with legs $3$ and $4$, so it equals $5$"}

:::

:::teorema{#punto-medio titolo="Midpoint of a line segment"}
The coordinates of the midpoint $M$ of the segment with endpoints $A(x_A;y_A)$ and $B(x_B;y_B)$ are the averages of the corresponding endpoint coordinates:
$$
M\left( \frac{x_A + x_B}{2} ; \frac{y_A + y_B}{2} \right) .
$$
The point halfway between two numbers on the number line is their average. The same principle applies separately on each axis. For $A(-2;3)$ and $B(6;-1)$, we obtain $M\left( \dfrac{-2 + 6}{2} ; \dfrac{3 - 1}{2} \right) = (2;1)$. The formula also works in reverse. Given $A$ and $M$, the other endpoint is $B(2x_M - x_A;\, 2y_M - y_A)$.
:::

## Lines

:::definizione{#retta-esplicita titolo="Slope-intercept form of a line"}
Every line that is not parallel to the $y$-axis has an equation of the form
$$
y = mx + q ,
$$
called **slope-intercept form**. The number $q$ is the **y-intercept**, the vertical coordinate of the point where the line crosses the $y$-axis, because at $x = 0$ we have $y = q$. The line $y = 2x - 1$ crosses the $y$-axis at $(0;-1)$. Lines parallel to the axes have simpler equations. The equation $y = k$ describes the horizontal line of points with vertical coordinate $k$, and $x = k$ describes the vertical line of points with horizontal coordinate $k$.
:::

:::definizione{#coefficiente-angolare titolo="Slope"}
The number $m$ in slope-intercept form is the **slope**. It measures how steep the line is by giving the change in $y$ when $x$ increases by $1$. Given two distinct points $(x_1;y_1)$ and $(x_2;y_2)$ on the line, with $x_1 \neq x_2$,
$$
m = \frac{y_2 - y_1}{x_2 - x_1} .
$$
The line $y = 2x - 1$ contains the points $(1;1)$ and $(3;5)$, and indeed $m = \dfrac{5 - 1}{3 - 1} = 2$.

- If $m > 0$, the line rises from left to right.
- If $m < 0$, the line falls from left to right.
- If $m = 0$, the line is horizontal.

::grafico{f="2*x-1" punti="1,1,pieno;3,5,pieno" segmenti="1,1,3,1;3,1,3,5" etichette="2,0.5,Δx = 2;3.9,3,Δy = 4" xmin=-2 xmax=5 ymin=-3 ymax=7 titolo="On the line $y = 2x - 1$, when $x$ increases by $2$, $y$ increases by $4$, so the slope is $m = \dfrac{4}{2} = 2$"}

:::

:::definizione{#retta-implicita titolo="General form of the equation of a line"}
Every line has an equation of the form
$$
ax + by + c = 0 ,
$$
with $a$ and $b$ not both zero, called the **general form**. This form includes vertical lines, which occur when $b = 0$. If $b \neq 0$, solving for $y$ gives slope-intercept form, so the slope is $m = -\dfrac{a}{b}$. The line $3x - 6y + 12 = 0$ can be written as $y = \dfrac{1}{2}x + 2$, and indeed $-\dfrac{a}{b} = -\dfrac{3}{-6} = \dfrac{1}{2}$.
:::

:::teorema{#retta-per-due-punti titolo="The line through two points"}
Exactly one line passes through any two distinct points. If $A(x_A;y_A)$ and $B(x_B;y_B)$ have different horizontal coordinates, first calculate the slope $m = \dfrac{y_B - y_A}{x_B - x_A}$ and then write the equation of the line through $A$ with that slope:
$$
y - y_A = m\,(x - x_A) .
$$
The equation $y - y_A = m(x - x_A)$ describes the line of slope $m$ through $A$ because it is a first-degree equation and the coordinates of $A$ satisfy it. For $A(2;1)$ and $B(4;7)$, we have $m = \dfrac{7 - 1}{4 - 2} = 3$, so $y - 1 = 3(x - 2)$, or $y = 3x - 5$. As a check, substituting $x = 4$ gives $y = 7$, the vertical coordinate of $B$.
:::

:::osservazione{#appartenenza-retta titolo="Checking whether a point lies on a line"}
A point lies on a line if and only if its coordinates satisfy the equation of the line. The point $P(2;1)$ lies on the line $3x - y - 5 = 0$ because $3 \cdot 2 - 1 - 5 = 0$. The point $Q(1;1)$ does not because $3 \cdot 1 - 1 - 5 = -3 \neq 0$. On a quiz, this check takes only a few seconds and rules out equations whose lines do not pass through a given point.
:::

## Parallel and perpendicular lines and their intersections

:::teorema{#rette-parallele-perpendicolari titolo="Parallel and perpendicular lines"}
Let $y = m_1 x + q_1$ and $y = m_2 x + q_2$ be two nonvertical lines.

- The lines are **parallel** if and only if $m_1 = m_2$.
- The lines are **perpendicular** if and only if $m_1 \cdot m_2 = -1$, or equivalently, $m_2 = -\dfrac{1}{m_1}$.

Parallel lines have the same slope. To see the condition for perpendicularity, use a right triangle that represents a horizontal change of $1$ and a vertical change of $m_1$. Rotate it counterclockwise through a right angle. The horizontal change becomes $-m_1$ and the vertical change becomes $1$, so the slope becomes $-\dfrac{1}{m_1}$. The lines $y = 2x + 1$ and $y = 2x - 3$ are parallel, while $y = -\dfrac{1}{2}x + 1$ is perpendicular to both because $2 \cdot \left( -\dfrac{1}{2} \right) = -1$.

::grafico{f="2*x+1;2*x-3;-0.5*x+1" legenda="y = 2x + 1;y = 2x - 3;y = -\dfrac{1}{2}x + 1" xmin=-4 xmax=5 ymin=-4 ymax=5 uguale=1 titolo="The lines $y = 2x + 1$ and $y = 2x - 3$ are parallel, and the line $y = -\dfrac{1}{2}x + 1$ is perpendicular to both"}

:::

:::esempio{titolo="Parallel and perpendicular lines through a given point"}
The line parallel to $y = 3x + 2$ through $P(1;-1)$ has slope $3$, so its equation is $y + 1 = 3(x - 1)$, or $y = 3x - 4$. The line perpendicular to $y = 3x + 2$ through the same point has slope $-\dfrac{1}{3}$, so its equation is
$$
y + 1 = -\frac{1}{3}(x - 1)
\iff
y = -\frac{1}{3}x - \frac{2}{3} .
$$
:::

:::teorema{#intersezione-rette titolo="Intersection of two lines"}
The coordinates of a point common to two lines satisfy both equations. We therefore find them by solving the system consisting of those two equations. For the lines $y = 2x + 1$ and $x + y = 7$, we obtain
$$
\begin{cases}
y = 2x + 1 \\
x + y = 7
\end{cases}
\iff
\begin{cases}
y = 2x + 1 \\
x + 2x + 1 = 7
\end{cases}
\iff
\begin{cases}
x = 2 \\
y = 5
\end{cases}
$$
so the lines meet at $(2;5)$. If the lines are parallel and distinct, the system has no solutions. If they coincide, it has infinitely many. For methods of solving systems, see the chapter on equations, inequalities, and systems.
:::

:::esempio{titolo="The break-even point for revenue and cost"}
A company sells a product for $15$ euros per unit. Its costs consist of $200$ euros in fixed costs plus $10$ euros for each unit produced. For $q$ units, revenue is $R = 15q$ and cost is $C = 10q + 200$. These are two lines on a graph with $q$ on the horizontal axis and euros on the vertical axis. The **break-even point** is their intersection. Solving $15q = 10q + 200$ gives $q = 40$, where revenue and cost are both $600$ euros. For $q > 40$, the revenue line lies above the cost line, so the company earns a profit.

::grafico{f="15*x+0*sqrt(x);10*x+200+0*sqrt(x)" punti="40,600,pieno" segmenti="40,0,40,600" nomi="q,€" legenda="R = 15q;C = 10q + 200" xmin=-10 xmax=90 ymin=-100 ymax=900 titolo="The revenue and cost lines intersect at the break-even point $(40;600)$"}

:::

## Circles

:::definizione{#equazione-circonferenza titolo="Equation of a circle"}
The **circle** with center $C(\alpha;\beta)$ and radius $r > 0$ is the set of points in the plane at distance $r$ from $C$. By the distance formula, a point $(x;y)$ lies on the circle if and only if
$$
(x - \alpha)^2 + (y - \beta)^2 = r^2 .
$$
Expanding the squares gives the form
$$
x^2 + y^2 + ax + by + c = 0 ,
\qquad
a = -2\alpha, \quad b = -2\beta, \quad c = \alpha^2 + \beta^2 - r^2 .
$$
The circle with center $(2;1)$ and radius $3$ has equation $(x - 2)^2 + (y - 1)^2 = 9$, or $x^2 + y^2 - 4x - 2y - 4 = 0$. The circle centered at the origin with radius $r$ has equation $x^2 + y^2 = r^2$.
:::

:::teorema{#centro-raggio titolo="Finding the center and radius from the equation"}
Given the equation $x^2 + y^2 + ax + by + c = 0$, the center and radius are
$$
C\left( -\frac{a}{2} ; -\frac{b}{2} \right),
\qquad
r = \sqrt{\frac{a^2}{4} + \frac{b^2}{4} - c} ,
$$
provided that the expression under the square root is positive. These formulas follow by solving the relations between $a$, $b$, $c$ and $\alpha$, $\beta$, $r$ in reverse. For $x^2 + y^2 - 4x - 2y - 4 = 0$, we have $a = -4$ and $b = -2$, so the center is $(2;1)$ and the radius is $\sqrt{4 + 1 + 4} = 3$. Since the constant term is $-4$, we *add* $4$ under the square root.

::grafico{curve="2+3*cos(t),1+3*sin(t),0,6.29" punti="2,1,pieno,C" segmenti="2,1,5,1" etichette="3.5,1.35,r = 3" legenda="0" xmin=-3 xmax=7 ymin=-3 ymax=5 uguale=1 titolo="The circle $x^2 + y^2 - 4x - 2y - 4 = 0$ has center $C(2;1)$ and radius $3$"}

:::

:::attenzione
An equation of the form $x^2 + y^2 + ax + by + c = 0$ represents a circle only if $\dfrac{a^2}{4} + \dfrac{b^2}{4} - c > 0$. The equation $x^2 + y^2 - 2x + 4y + 10 = 0$ gives $1 + 4 - 10 = -5 < 0$, so no point in the plane satisfies it. Also, the coefficients of $x^2$ and $y^2$ must be equal. The equation $x^2 + 2y^2 = 4$ therefore does not represent a circle.
:::

:::osservazione{#appartenenza-circonferenza titolo="Position of a point relative to a circle"}
A point $P$ lies on the circle if its coordinates satisfy the equation. If they do not, compare the distance from $P$ to the center with the radius. The point is **inside** if the distance is less than $r$ and **outside** if it is greater. For an equation in the form $x^2 + y^2 + ax + by + c = 0$, substitute the coordinates into the left-hand side. The result is negative for points inside the circle and positive for points outside. For $x^2 + y^2 - 4x - 2y - 4 = 0$, the point $(5;1)$ gives $25 + 1 - 20 - 2 - 4 = 0$ and lies on the circle. The point $(4;3)$ gives $16 + 9 - 16 - 6 - 4 = -1 < 0$ and is inside.
:::

:::teorema{#retta-circonferenza titolo="Position of a line relative to a circle"}
Let $d$ be the distance from the center to the line and $r$ the radius.

- If $d < r$, the line is a **secant** and meets the circle at two points.
- If $d = r$, the line is a **tangent** and has exactly one point in common with the circle.
- If $d > r$, the line is **outside the circle** and has no points in common with it.

The distance from the point $(x_0;y_0)$ to the line $ax + by + c = 0$ is $d = \dfrac{|ax_0 + by_0 + c|}{\sqrt{a^2 + b^2}}$. For the circle $x^2 + y^2 = 25$ and the line $3x + 4y - 25 = 0$, we have $d = \dfrac{|-25|}{\sqrt{9 + 16}} = 5 = r$, so the line is tangent. Alternatively, substitute the expression for $y$ from the line into the equation of the circle. The resulting quadratic equation has two solutions, one solution, or no solutions, depending on whether the line is a secant, a tangent, or outside the circle.

::grafico{curve="2*cos(t),2*sin(t),0,6.29" f="1+0*x;2+0*x;3+0*x" legenda="y = 1;y = 2;y = 3" punti="0,0,pieno,O" xmin=-4 xmax=4 ymin=-3 ymax=4 uguale=1 titolo="For the circle $x^2 + y^2 = 4$, the line $y = 1$ is a secant, $y = 2$ is a tangent, and $y = 3$ lies outside the circle"}

:::

:::esempio{titolo="Intersections of a line and a circle"}
To find the common points of the circle $x^2 + y^2 = 4$ and the line $y = x + 2$, substitute $y$ into the first equation:
$$
x^2 + (x + 2)^2 = 4
\iff
2x^2 + 4x = 0
\iff
2x\,(x + 2) = 0 .
$$
The solutions are $x = 0$ and $x = -2$, so the line is a secant and the common points are $(0;2)$ and $(-2;0)$.
:::

## Parabolas

:::definizione{#parabola titolo="A parabola with a vertical axis"}
The graph of $y = ax^2 + bx + c$, with $a \neq 0$, is a **parabola** whose axis is parallel to the $y$-axis. The sign of $a$ determines its **concavity**.

- If $a > 0$, the parabola opens upward and its vertex is its lowest point.
- If $a < 0$, the parabola opens downward and its vertex is its highest point.

The larger $|a|$ is, the narrower the parabola. The constant term $c$ is the vertical coordinate where the parabola crosses the $y$-axis because at $x = 0$ we have $y = c$.
:::

:::teorema{#vertice-parabola titolo="Vertex and axis of a parabola"}
The parabola $y = ax^2 + bx + c$ has the line $x = -\dfrac{b}{2a}$ as its axis of symmetry. The vertex is the point on this axis that lies on the parabola:
$$
V\left( -\frac{b}{2a} ; -\frac{\Delta}{4a} \right),
\qquad
\Delta = b^2 - 4ac .
$$
When the parabola crosses the $x$-axis at two points, its axis of symmetry lies halfway between them, and the average of the solutions of $ax^2 + bx + c = 0$ is $\dfrac{x_1 + x_2}{2} = -\dfrac{b}{2a}$. We can also find the vertical coordinate of the vertex by substituting its horizontal coordinate into the equation. For $y = x^2 - 4x + 3$, the axis is $x = 2$ and the vertex is $(2;-1)$ because $4 - 8 + 3 = -1$.
:::

:::teorema{#intersezioni-parabola titolo="Intercepts of a parabola"}
The parabola $y = ax^2 + bx + c$ crosses the $y$-axis at $(0;c)$. At points where it meets the $x$-axis, the vertical coordinate is $0$, so the horizontal coordinates are the solutions of $ax^2 + bx + c = 0$.

- If $\Delta > 0$, the parabola crosses the $x$-axis at two points.
- If $\Delta = 0$, the parabola is tangent to the $x$-axis at its vertex.
- If $\Delta < 0$, the parabola does not meet the $x$-axis.

For $y = x^2 - 4x + 3$, we have $\Delta = 16 - 12 = 4 > 0$, and the solutions of $x^2 - 4x + 3 = 0$ are $1$ and $3$. The parabola therefore passes through $(1;0)$, $(3;0)$, and $(0;3)$. We can also use this graph to study the sign of the quadratic trinomial in a quadratic inequality, as discussed in the chapter on equations, inequalities, and systems.

::grafico{f="x^2-4*x+3" punti="2,-1,pieno,V;1,0,pieno;3,0,pieno;0,3,pieno" segmenti="2,-2,2,6" legenda="y = x^2 - 4x + 3" xmin=-2 xmax=6 ymin=-2 ymax=6 uguale=1 titolo="The parabola $y = x^2 - 4x + 3$ has vertex $V(2;-1)$, axis $x = 2$, and intercepts $(1;0)$, $(3;0)$, and $(0;3)$"}

:::

:::esempio{titolo="Intersections of a parabola and a line"}
To find the common points of the parabola $y = x^2 - 4x + 3$ and the line $y = x - 1$, set the two expressions for $y$ equal:
$$
x^2 - 4x + 3 = x - 1
\iff
x^2 - 5x + 4 = 0
\iff
x = 1 \;\vee\; x = 4 .
$$
Use the line to calculate the vertical coordinates because its equation is simpler. The points are $(1;0)$ and $(4;3)$. If the resulting equation had $\Delta = 0$, the line would be tangent to the parabola. With $\Delta < 0$, there would be no common points.
:::

## Angles and the unit circle

:::definizione{#radianti titolo="Measuring angles in degrees and radians"}
Angles can be measured in **degrees**, with a full turn equal to $360^\circ$, or in **radians**. One radian is the central angle that subtends an arc equal in length to the radius. A full turn measures $2\pi$ radians because the circumference is $2\pi r$. Thus $180^\circ$ corresponds to $\pi$ radians, and
$$
x_{\text{rad}} = x^\circ \cdot \frac{\pi}{180} ,
\qquad
x^\circ = x_{\text{rad}} \cdot \frac{180}{\pi} .
$$
For example, $60^\circ = \dfrac{60\,\pi}{180} = \dfrac{\pi}{3}$ and $\dfrac{3\pi}{4} = \dfrac{3 \cdot 180^\circ}{4} = 135^\circ$. The most common angles are $30^\circ = \dfrac{\pi}{6}$, $45^\circ = \dfrac{\pi}{4}$, and $90^\circ = \dfrac{\pi}{2}$.
:::

:::definizione{#seno-coseno titolo="Sine, cosine, and tangent"}
The **unit circle** is the circle centered at the origin with radius $1$. Draw an angle $x$ counterclockwise from the positive $x$-axis. Its terminal side meets the circle at a point $P$.

- The **cosine** of $x$, written $\cos x$, is the horizontal coordinate of $P$.
- The **sine** of $x$, written $\sin x$, is the vertical coordinate of $P$.
- The **tangent** of $x$ is $\tan x = \dfrac{\sin x}{\cos x}$. It is defined when $\cos x \neq 0$, that is, for $x \neq 90^\circ + k \cdot 180^\circ$ with $k$ an integer.

Since $P$ lies on a circle of radius $1$, sine and cosine are always between $-1$ and $1$. The tangent is the slope of the line $OP$ because it is the vertical coordinate of $P$ divided by its horizontal coordinate. For example, the line $y = x$, whose slope is $m = 1$, makes an angle with the $x$-axis measuring $45^\circ$, and indeed $\tan 45^\circ = 1$.

::grafico{curve="cos(t),sin(t),0,6.29" punti="0.866,0.5,pieno,P" vettori="0,0,0.866,0.5" segmenti="0.866,0,0.866,0.5" etichette="0.43,-0.15,cos x;1.12,0.25,sin x;0.3,0.06,x" legenda="0" xmin=-1.5 xmax=1.5 ymin=-1.3 ymax=1.3 uguale=1 titolo="On the unit circle, the point $P$ corresponding to angle $x = 30^\circ$ has horizontal coordinate $\cos x = \dfrac{\sqrt{3}}{2}$ and vertical coordinate $\sin x = \dfrac{1}{2}$"}

:::

:::osservazione{#segni-quadranti titolo="Signs in the four quadrants"}
The signs of the sine and cosine are the signs of the coordinates of $P$, so they depend on the quadrant containing the terminal side of the angle. The sign of the tangent is the sign of their quotient.

- In the first quadrant, $0^\circ < x < 90^\circ$, sine, cosine, and tangent are positive.
- In the second quadrant, $90^\circ < x < 180^\circ$, sine is positive, while cosine and tangent are negative.
- In the third quadrant, $180^\circ < x < 270^\circ$, sine and cosine are negative, while tangent is positive.
- In the fourth quadrant, $270^\circ < x < 360^\circ$, cosine is positive, while sine and tangent are negative.

The angle $150^\circ$ lies in the second quadrant, and its point $P$ is the reflection across the $y$-axis of the point for $30^\circ$. Therefore $\sin 150^\circ = \dfrac{1}{2}$ and $\cos 150^\circ = -\dfrac{\sqrt{3}}{2}$.
:::

## Special angles and the Pythagorean identity

:::teorema{#valori-notevoli titolo="Values at special angles"}
For the most common angles, sine, cosine, and tangent have the following values:
$$
\begin{array}{c|ccccc}
x & 0^\circ & 30^\circ & 45^\circ & 60^\circ & 90^\circ \\[2pt]
\hline
 & 0 & \frac{\pi}{6} & \frac{\pi}{4} & \frac{\pi}{3} & \frac{\pi}{2} \\[4pt]
\sin x & 0 & \frac{1}{2} & \frac{\sqrt{2}}{2} & \frac{\sqrt{3}}{2} & 1 \\[4pt]
\cos x & 1 & \frac{\sqrt{3}}{2} & \frac{\sqrt{2}}{2} & \frac{1}{2} & 0 \\[4pt]
\tan x & 0 & \frac{\sqrt{3}}{3} & 1 & \sqrt{3} & \text{undefined}
\end{array}
$$
The values for $30^\circ$ and $60^\circ$ come from dividing an equilateral triangle of side $1$ in half along an altitude, which gives a right triangle with legs $\dfrac{1}{2}$ and $\dfrac{\sqrt{3}}{2}$. The values for $45^\circ$ come from dividing a square of side $1$ along its diagonal. Sine increases from $0$ to $1$, and cosine takes the same values in reverse order because $\cos x = \sin(90^\circ - x)$.
:::

::::teorema{#relazione-fondamentale titolo="Pythagorean identity"}
For every angle $x$, we have
$$
\sin^2 x + \cos^2 x = 1 .
$$
The identity lets us find the cosine from the sine or vice versa, up to a sign determined by the quadrant. If $\sin x = \dfrac{4}{5}$ and $x$ is in the first quadrant, then $\cos^2 x = 1 - \dfrac{16}{25} = \dfrac{9}{25}$ and $\cos x = \dfrac{3}{5}$. If $x$ is in the second quadrant, $\cos x = -\dfrac{3}{5}$.

:::dimostrazione
The point $P(\cos x;\sin x)$ lies on the unit circle, whose equation is $x^2 + y^2 = 1$. Substituting the coordinates of $P$ gives $\cos^2 x + \sin^2 x = 1$.
:::
::::

## Right triangles

:::teorema{#triangolo-rettangolo titolo="Solving a right triangle"}
In a right triangle with hypotenuse $i$, let $\alpha$ be one of the acute angles. Then

- the leg opposite $\alpha$ is $i \cdot \sin\alpha$,
- the leg adjacent to $\alpha$ is $i \cdot \cos\alpha$,
- the opposite leg equals the adjacent leg multiplied by $\tan\alpha$.

These relations follow from the unit circle. Apply a scale factor of $i$ to the triangle formed by $O$, $P$, and the projection of $P$ onto the $x$-axis. The hypotenuse changes from $1$ to $i$, and the legs from $\cos\alpha$ and $\sin\alpha$ to $i\cos\alpha$ and $i\sin\alpha$. To **solve** a right triangle is to find its sides and angles from two given measurements, at least one of which must be a side. With hypotenuse $8$ and an angle of $60^\circ$, the opposite leg is $8 \cdot \dfrac{\sqrt{3}}{2} = 4\sqrt{3}$ and the adjacent leg is $8 \cdot \dfrac{1}{2} = 4$. The other acute angle measures $90^\circ - 60^\circ = 30^\circ$.

::grafico{assi=0 uguale=1 poligoni="0,0 4,0 4,6.93" etichette="2,-0.5,4;4.9,3.46,4√3;1.3,3.9,8;0.75,0.35,60°" xmin=-1 xmax=6 ymin=-1 ymax=7.5 titolo="In a right triangle with hypotenuse $8$ and an angle of $60^\circ$, the adjacent leg measures $8 \cos 60^\circ = 4$ and the opposite leg $8 \sin 60^\circ = 4\sqrt{3}$"}

:::

:::esempio{titolo="Slope of a ramp"}
A ramp $5$ m long rises $3$ m. The angle $\alpha$ it makes with the floor satisfies $\sin\alpha = \dfrac{3}{5}$. By the Pythagorean theorem, its projection onto the floor is $\sqrt{25 - 9} = 4$ m long. Therefore $\cos\alpha = \dfrac{4}{5}$ and $\tan\alpha = \dfrac{3}{4}$. The tangent gives the slope of the ramp. It rises $0.75$ m per horizontal meter, giving a grade of $75\%$.
:::

## Quick methods for multiple-choice questions

:::osservazione{#metodi-rapidi titolo="Quick checks on the answer choices"}
Many analytic geometry questions can be solved by checking the answer choices without repeating the entire calculation.

- **Substitute a point.** If a line, circle, or parabola must pass through a given point, rule out any equation that the point’s coordinates do not satisfy. For the line through $(1;3)$ and $(3;7)$, rule out $y = 2x + 3$ because at $x = 1$ it gives $5$.
- **Check the signs.** A line that rises has $m > 0$. A parabola whose vertex is its highest point has $a < 0$. The coordinates of a circle’s center have signs opposite to those of the coefficients $a$ and $b$ in its equation.
- **Recall Pythagorean triples.** Coordinate differences of $3$ and $4$ give a distance of $5$, differences of $6$ and $8$ give $10$, and differences of $5$ and $12$ give $13$.
- **Use bounds.** Sine and cosine are between $-1$ and $1$, so a value such as $\dfrac{4}{3}$ can be ruled out immediately. The quadrant determines the sign.
- **Estimate square roots.** Since $\sqrt{2} \approx 1.41$ and $\sqrt{3} \approx 1.73$, a leg of length $5\sqrt{3}$ measures about $8.7$ and must be shorter than the hypotenuse.

Wrong answers often result from changing a sign (in the center of a circle or by using $\dfrac{1}{m}$ instead of $-\dfrac{1}{m}$ for a perpendicular line), omitting a square root (confusing the radius and its square), or interchanging sine and cosine.
:::
