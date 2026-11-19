---
titolo: Analytic geometry and conics
sommario: Points and lines in the Cartesian plane, then parabola, circle, ellipse and hyperbola, with the method for recognizing a conic from its equation and drawing it.
---

## The Cartesian plane

:::definizione{#distanza-e-punto-medio titolo="Distance between two points and midpoint"}
In the **Cartesian plane** two perpendicular lines, the horizontal $x$-axis and the vertical $y$-axis, meet at the **origin** $O$. Every point $P$ is determined by a pair of numbers $(x, y)$: the **abscissa** $x$ is read on the horizontal axis and the **ordinate** $y$ on the vertical axis. The axes divide the plane into four **quadrants**, numbered counterclockwise starting from the one in which $x > 0$ and $y > 0$.

Given $A(x_1, y_1)$ and $B(x_2, y_2)$, the distance between the two points and the midpoint $M$ of the segment $AB$ are
$$
\overline{AB} = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2},
\qquad
M\left( \frac{x_1 + x_2}{2},\; \frac{y_1 + y_2}{2} \right) .
$$
The distance formula follows from the **Pythagorean theorem** applied to the right triangle with legs $|x_2 - x_1|$ and $|y_2 - y_1|$; the midpoint has as coordinates the averages of the coordinates. These two formulas are used throughout the chapter: the circle, the ellipse and the hyperbola are defined *precisely* in terms of distances.
:::

:::esempio
$A(1, 2)$ and $B(4, 6)$: the distance is $\overline{AB} = \sqrt{3^2 + 4^2} = \sqrt{25} = 5$ and the midpoint is $M\left(\dfrac{5}{2}, 4\right)$.

::grafico{f="4/3*x+2/3+0*sqrt(x-1)+0*sqrt(4-x)" uguale=1 xmin=-1.5 xmax=7 ymin=-1 ymax=7 punti="1,2,pieno,A;4,6,pieno,B;2.5,4,pieno,M" legenda=0 segmenti="1,2,4,2;4,2,4,6" etichette="2.4,1.5,3;4.2,3.9,4;1.4,4,5" titolo="Distance between $A(1, 2)$ and $B(4, 6)$: the legs measure $3$ and $4$, the hypotenuse $AB$ measures $5$; $M$ is the midpoint"}
:::

:::attenzione
The distance is *not* the sum of the differences of the coordinates. For $A(1, 2)$ and $B(4, 6)$ we have $|4 - 1| + |6 - 2| = 7$, while $\overline{AB} = 5$. The number $7$ is the sum of the two legs of the right triangle with hypotenuse $AB$, and the hypotenuse is shorter than the sum of the legs.
:::

:::esempio{titolo="Endpoint of a segment given the midpoint"}
The segment $AB$ has endpoint $A(-1, 4)$ and midpoint $M(2, 1)$. From the midpoint formulas $\dfrac{-1 + x_B}{2} = 2$ and $\dfrac{4 + y_B}{2} = 1$, so $x_B = 4 + 1 = 5$ and $y_B = 2 - 4 = -2$. The other endpoint is $B(5, -2)$, that is, the **reflection** of $A$ through $M$, with coordinates $x_B = 2x_M - x_A$ and $y_B = 2y_M - y_A$.
:::

## The line

:::definizione{#retta titolo="Equation of a line"}
A non-vertical line has the **slope-intercept equation**
$$
y = mx + q ,
$$
where $m$ is the **slope**, which measures the steepness of the line, and $q$ is the ordinate of the point of intersection with the $y$-axis. A vertical line has equation $x = c$. Every line, vertical or not, can be written in **general form**
$$
ax + by + c = 0, \qquad (a, b) \neq (0, 0) ;
$$
for $b \neq 0$ the two forms translate into each other through $m = -\dfrac{a}{b}$ and $q = -\dfrac{c}{b}$. In the slope-intercept form each $x$ corresponds to a single value of $y$, so the line is drawn by computing two of its points; for example $y = 2x - 5$ passes through $(0, -5)$ and $(1, -3)$. The general form *also* includes vertical lines and appears in the point-line distance formula.
:::

:::definizione{#coefficiente-angolare titolo="Slope, lines through a point, parallelism and perpendicularity"}
The **slope** of the line through two points $A(x_1, y_1)$ and $B(x_2, y_2)$ with $x_1 \neq x_2$ is
$$
m = \frac{y_2 - y_1}{x_2 - x_1} ,
$$
the ratio between the change in $y$ and the change in $x$. The line with slope $m$ passing through the point $P(x_0, y_0)$ is
$$
y - y_0 = m\,(x - x_0) .
$$
Two non-vertical lines with slopes $m_1$ and $m_2$ are **parallel** if and only if $m_1 = m_2$; they are **perpendicular** if and only if $m_1 \, m_2 = -1$, that is $m_2 = -\dfrac{1}{m_1}$. With these three formulas one writes the required line in almost every exercise: one finds $m$ from the data and requires the line to pass through the point.
:::

:::esempio
The line through $P(1, 3)$ perpendicular to $y = 2x - 5$ has slope $m = -\dfrac{1}{2}$, therefore it is $y - 3 = -\dfrac{1}{2}(x - 1)$, that is $y = -\dfrac{1}{2}x + \dfrac{7}{2}$.

::grafico{f="2*x-5;-0.5*x+3.5" uguale=1 xmin=-2.5 xmax=6 ymin=-4 ymax=4 punti="1,3,pieno,P" titolo="The dashed line passes through $P(1, 3)$ and is perpendicular to $y = 2x - 5$"}
:::

::::teorema{#condizione-perpendicolarita titolo="Perpendicularity condition"}
Two non-vertical lines with slopes $m_1$ and $m_2$ are perpendicular if and only if $m_1 m_2 = -1$.

:::dimostrazione
The idea is to apply the Pythagorean theorem to a triangle with a vertex at the point of intersection. If $m_1 = m_2$ the lines are parallel, and indeed $m_1 m_2 = m_1^2 \geq 0$, so the condition $m_1 m_2 = -1$ is not satisfied. If $m_1 \neq m_2$ the lines intersect at a point. A translation that brings that point to the origin changes neither the angles nor the slopes, so we may assume that the two lines pass through the origin $O$, with equations $y = m_1 x$ and $y = m_2 x$. The lines contain the points $P_1(1, m_1)$ and $P_2(1, m_2)$. The angle at $O$ of the triangle $OP_1P_2$ is a right angle if and only if $\overline{OP_1}^{\,2} + \overline{OP_2}^{\,2} = \overline{P_1P_2}^{\,2}$, by the Pythagorean theorem and its converse. With the distance formula the equality becomes
$$
\begin{aligned}
(1 + m_1^2) + (1 + m_2^2) &= (m_1 - m_2)^2 \\[4pt]
2 + m_1^2 + m_2^2 &= m_1^2 - 2m_1 m_2 + m_2^2 \\[4pt]
m_1 m_2 &= -1 .
\end{aligned}
$$
Each step can be followed in both directions, therefore the lines are perpendicular if and only if $m_1 m_2 = -1$.
:::

The condition makes it possible to compute the slope of a perpendicular line. For example, the perpendicular to $y = \dfrac{2}{3}x$ has slope $-\dfrac{3}{2}$, because $\dfrac{2}{3} \cdot \left( -\dfrac{3}{2} \right) = -1$.
::::

:::attenzione
The formulas with $m$ hold only for *non*-vertical lines. For $A(2, 1)$ and $B(2, 5)$ the ratio $\dfrac{5 - 1}{2 - 2}$ has zero denominator, so the line $AB$ has no slope; indeed it is the vertical line $x = 2$. The perpendicular to $x = 2$ through $P(0, 3)$ is the horizontal line $y = 3$, with slope $0$, and the condition $m_1 m_2 = -1$ cannot be applied because one of the two slopes does not exist.
:::

:::esempio{titolo="Intersection of two lines"}
The point common to the lines $y = 2x - 1$ and $x + y = 5$ has coordinates that satisfy both equations, so we solve the system
$$
\begin{cases}
y = 2x - 1 \\
x + y = 5 .
\end{cases}
$$
Substituting the first equation into the second gives $x + 2x - 1 = 5$, that is, $3x = 6$ and $x = 2$; hence $y = 2 \cdot 2 - 1 = 3$ and the point of intersection is $(2, 3)$. The system has a single solution because the slopes $2$ and $-1$ are different; two distinct parallel lines give an **inconsistent** system.

::grafico{f="2*x-1;5-x" uguale=1 xmin=-2 xmax=6 ymin=-2 ymax=6 punti="2,3,pieno,P" legenda="y = 2x - 1;x + y = 5" titolo="The lines $y = 2x - 1$ and $x + y = 5$ intersect at $P(2, 3)$"}
:::

:::teorema{#distanza-punto-retta titolo="Distance from a point to a line"}
The distance from the point $P(x_0, y_0)$ to the line $r$ of equation $ax + by + c = 0$ is
$$
d(P, r) = \frac{|a x_0 + b y_0 + c|}{\sqrt{a^2 + b^2}} .
$$
The line must be written in **general form** before applying the formula. The point-line distance is also used with conic sections, for example to impose that a line be tangent to a circle: **tangency** is equivalent to the equality between the distance from the center to the line and the radius.
:::

:::esempio
Distance from $P(2, 1)$ to the line $3x - 4y + 1 = 0$:
$$
d = \frac{|3 \cdot 2 - 4 \cdot 1 + 1|}{\sqrt{9 + 16}} = \frac{3}{5} .
$$

::grafico{f="(3*x+1)/4" uguale=1 xmin=-1 xmax=4 ymin=-1 ymax=3 punti="2,1,pieno,P;1.64,1.48,pieno,H" segmenti="2,1,1.64,1.48" titolo="The distance of $P(2, 1)$ from the line $3x - 4y + 1 = 0$ is the length of the segment $PH$, perpendicular to the line"}
:::

## The parabola

:::definizione{#parabola titolo="Parabola y = ax² + bx + c"}
The graph of $y = ax^2 + bx + c$ with $a \neq 0$ is a **parabola** with a vertical axis of symmetry. The **vertex** has coordinates
$$
V\left( -\frac{b}{2a},\; c - \frac{b^2}{4a} \right) ,
$$
and the ordinate of the vertex can also be computed by substituting the abscissa $x_V = -\dfrac{b}{2a}$ into the equation; the axis of symmetry is the line $x = x_V$. The **concavity** depends on the sign of $a$:

- if $a > 0$ the parabola opens upward and the vertex is the lowest point;
- if $a < 0$ the parabola opens downward and the vertex is the highest point.

The intersections with the $x$-axis are the solutions of $ax^2 + bx + c = 0$: two points if $\Delta > 0$, one if $\Delta = 0$, none if $\Delta < 0$. The intersection with the $y$-axis is the point $(0, c)$. Vertex, concavity and intersections are enough to draw the parabola.
:::

:::esempio
$y = x^2 - 2x - 3$: the abscissa of the vertex is $x_V = -\dfrac{-2}{2 \cdot 1} = 1$ and the ordinate is $y_V = 1^2 - 2 \cdot 1 - 3 = -4$, so the vertex is $V(1, -4)$; the parabola opens upward since $a = 1 > 0$, the intersections with the $x$-axis are $(-1, 0)$ and $(3, 0)$, the one with the $y$-axis is $(0, -3)$.

::grafico{f="x^2-2*x-3" xmin=-3 xmax=5 ymin=-5 ymax=6 punti="1,-4,pieno,V" titolo="$y = x^2 - 2x - 3$ with vertex $V(1, -4)$"}
:::

::::teorema{#vertice-della-parabola titolo="Vertex of the parabola and vertex form"}
For $a \neq 0$ the identity
$$
ax^2 + bx + c = a\left( x + \frac{b}{2a} \right)^2 + c - \frac{b^2}{4a}
$$
holds. Consequently, if $a > 0$ the function $y = ax^2 + bx + c$ takes the minimum value $c - \dfrac{b^2}{4a}$ only at the point $x = -\dfrac{b}{2a}$, and if $a < 0$ it takes the maximum value at that point; the graph is symmetric with respect to the line $x = -\dfrac{b}{2a}$.

:::dimostrazione
We factor $a$ out of the terms in $x$ and complete the square:
$$
\begin{aligned}
ax^2 + bx + c &= a\left( x^2 + \frac{b}{a}x \right) + c \\[4pt]
&= a\left[ \left( x + \frac{b}{2a} \right)^2 - \frac{b^2}{4a^2} \right] + c \\[4pt]
&= a\left( x + \frac{b}{2a} \right)^2 + c - \frac{b^2}{4a} .
\end{aligned}
$$
The square $\left( x + \dfrac{b}{2a} \right)^2$ is greater than or equal to zero and equals zero only for $x = -\dfrac{b}{2a}$. If $a > 0$ the first term is therefore greater than or equal to zero, hence $y \geq c - \dfrac{b^2}{4a}$, with equality only at $x = -\dfrac{b}{2a}$; if $a < 0$ the first term is less than or equal to zero and the inequality is reversed. Two points at the same distance $h$ from $x_V = -\dfrac{b}{2a}$, namely $x_V + h$ and $x_V - h$, give the same square $h^2$, so they have the same ordinate, and therefore the graph is symmetric with respect to the line $x = x_V$.
:::

With $V(x_V, y_V)$ the identity is written $y = a(x - x_V)^2 + y_V$, and it is used when the vertex is given. For example, the parabola with vertex $V(2, -1)$ and $a = 3$ is $y = 3(x - 2)^2 - 1 = 3x^2 - 12x + 11$.
::::

:::esempio{titolo="Parabola through three points"}
The parabola $y = ax^2 + bx + c$ passing through $(0, 1)$, $(1, 0)$ and $(2, 3)$ has coefficients that satisfy the three passage conditions together:
$$
\begin{cases}
c = 1 \\
a + b + c = 0 \\
4a + 2b + c = 3 .
\end{cases}
$$
Substituting $c = 1$ gives $a + b = -1$ and $4a + 2b = 2$, that is, $2a + b = 1$; subtracting the first from the second gives $a = 2$, hence $b = -1 - 2 = -3$. The parabola is $y = 2x^2 - 3x + 1$. Three non-collinear points with different abscissas determine a single parabola with vertical axis.
:::

:::osservazione{#parabola-asse-orizzontale titolo="Parabola with horizontal axis"}
The equation $x = ay^2 + by + c$ with $a \neq 0$ is obtained from the previous one by exchanging the roles of $x$ and $y$, so it represents a parabola with a **horizontal** axis of symmetry: the vertex has ordinate $y_V = -\dfrac{b}{2a}$, the axis is the line $y = y_V$, and the parabola opens to the right if $a > 0$ and to the left if $a < 0$. This curve is *not* the graph of a function $y = f(x)$, because, for $a > 0$, every abscissa greater than $x_V$ corresponds to two points of the curve (for $a < 0$ this happens at the abscissas less than $x_V$).

For $x = y^2 - 2y$ we have $y_V = 1$ and $x_V = 1 - 2 = -1$, so $V(-1, 1)$; the intersections with the $y$-axis are found by setting $x = 0$, that is, $y^2 - 2y = 0$, and they are $(0, 0)$ and $(0, 2)$.

::grafico{curve="t^2-2*t,t,-1.6,3.6" uguale=1 xmin=-2 xmax=5 ymin=-2 ymax=4 punti="-1,1,pieno,V;0,0;0,2" segmenti="-2,1,5,1" titolo="Parabola $x = y^2 - 2y$ with vertex $V(-1, 1)$ and horizontal axis $y = 1$, dashed"}
:::

## The circle

:::definizione{#circonferenza titolo="Circle"}
The circle with center $C(x_0, y_0)$ and radius $r > 0$ is the **locus of points** at distance $r$ from $C$, that is, the set of all the points of the plane whose distance from $C$ is $r$; squaring the distance formula gives the **standard equation**
$$
(x - x_0)^2 + (y - y_0)^2 = r^2 .
$$
Expanding the squares leads to the **general form**
$$
x^2 + y^2 + ax + by + c = 0 ,
$$
with $a = -2x_0$, $b = -2y_0$ and $c = x_0^2 + y_0^2 - r^2$. From the general form one recovers center and radius:
$$
C\left( -\frac{a}{2},\; -\frac{b}{2} \right),
\qquad
r = \sqrt{\frac{a^2}{4} + \frac{b^2}{4} - c} ,
$$
*provided* the quantity under the root is positive. A circle in general form is recognized by two features: $x^2$ and $y^2$ have the same coefficient and the term $xy$ does not appear.
:::

:::definizione{#completamento-dei-quadrati titolo="Completing the square"}
For every $a \in \mathbb{R}$,
$$
x^2 + ax = \left( x + \frac{a}{2} \right)^2 - \frac{a^2}{4} .
$$
**Completing the square** rewrites a quadratic equation in standard form without formulas to memorize: one groups the terms in $x$ and those in $y$, completes each group and moves the constant to the right-hand side. It is the procedure by which one finds the center and radius of a circle and by which one reduces any conic to its standard form.
:::

:::esempio
$x^2 + y^2 - 2x - 4y + 1 = 0$. Completing the squares: $x^2 - 2x = (x - 1)^2 - 1$ and $y^2 - 4y = (y - 2)^2 - 4$, therefore the equation becomes
$$
(x - 1)^2 + (y - 2)^2 = 4 :
$$
a **circle** with center $C(1, 2)$ and radius $r = 2$. To draw it, one marks the center and the four points at distance $2$ from it along the directions of the axes: $(3, 2)$, $(-1, 2)$, $(1, 4)$ and $(1, 0)$.

::grafico{curve="1+2*cos(t),2+2*sin(t),0,6.29" uguale=1 xmin=-2 xmax=4.5 ymin=-1 ymax=5 punti="1,2,pieno,C;3,2;-1,2;1,4;1,0" segmenti="1,2,3,2" etichette="1.8,2.2,r = 2" titolo="$(x - 1)^2 + (y - 2)^2 = 4$: center $C(1, 2)$, radius $2$ and the four points along the directions of the axes"}
:::

:::attenzione
*Not* every equation of the form $x^2 + y^2 + ax + by + c = 0$ represents a circle. In $x^2 + y^2 - 2x + 6 = 0$ completing the square gives $(x - 1)^2 + y^2 = -5$, and a sum of squares cannot be negative, therefore **no point** satisfies the equation.
:::

:::osservazione{#retta-e-circonferenza titolo="Position of a line relative to a circle"}
Let $d$ be the distance from the center to the line and $r$ the radius. The line is
- **secant** if $d < r$, with two points in common;
- **tangent** if $d = r$, with a single point in common;
- **external** if $d > r$, with no points in common.

The same three cases are recognized from the discriminant of the quadratic equation obtained by substituting the equation of the line into that of the circle: $\Delta > 0$, $\Delta = 0$, $\Delta < 0$. Comparing $d$ and $r$ gives only the position, while substitution also gives the coordinates of the common points. For example, substituting $y = x + 1$ into $x^2 + y^2 = 13$ gives $2x^2 + 2x - 12 = 0$, that is, $x^2 + x - 6 = 0$, with solutions $x = 2$ and $x = -3$, so the line is secant at the points $(2, 3)$ and $(-3, -2)$.
:::

:::esempio{titolo="Tangent lines with a given direction"}
The lines with slope $2$ tangent to the circle $x^2 + y^2 = 5$, with center $O(0, 0)$ and radius $\sqrt{5}$, have equation $y = 2x + q$, that is, $2x - y + q = 0$. The line is tangent if and only if the distance from the center to the line equals the radius, so
$$
\frac{|q|}{\sqrt{2^2 + 1^2}} = \sqrt{5}
\quad\Longrightarrow\quad
|q| = 5 ,
$$
hence the tangent lines are $y = 2x + 5$ and $y = 2x - 5$. Substituting $y = 2x + 5$ into the equation of the circle gives $5x^2 + 20x + 20 = 0$, that is, $(x + 2)^2 = 0$, and the point of tangency is $(-2, 1)$; in the same way the other tangent line touches the circle at $(2, -1)$.

::grafico{curve="sqrt(5)*cos(t),sqrt(5)*sin(t),0,6.29" f="2*x+5;2*x-5" legenda="y = 2x + 5;y = 2x - 5;x^2 + y^2 = 5" uguale=1 xmin=-5 xmax=5 ymin=-4 ymax=4 punti="0,0,pieno,O;-2,1,pieno,T₁;2,-1,pieno,T₂" segmenti="0,0,-2,1;0,0,2,-1" titolo="The tangent lines $y = 2x + 5$ and $y = 2x - 5$ to the circle $x^2 + y^2 = 5$: the radii $OT_1$ and $OT_2$ are perpendicular to the tangent lines"}
:::

## The ellipse

:::definizione{#ellisse titolo="Ellipse in standard form"}
The ellipse in standard form, with center at the origin and axes of symmetry on the coordinate axes, has equation
$$
\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1, \qquad a, b > 0 .
$$
The numbers $a$ and $b$ are the **semi-axes**: the ellipse intersects the $x$-axis at the **vertices** $(\pm a, 0)$ and the $y$-axis at the vertices $(0, \pm b)$, and the whole graph lies in the rectangle $-a \leq x \leq a$, $-b \leq y \leq b$. The ellipse is the locus of points for which the sum of the distances from two fixed points, the **foci**, is constant; this statement is assumed. The foci lie on the axis of the major semi-axis:

- if $a > b$ the foci are $(\pm c, 0)$ with $c^2 = a^2 - b^2$;
- if $b > a$ the foci are $(0, \pm c)$ with $c^2 = b^2 - a^2$.

To draw the ellipse, one marks the four vertices and joins them with an oval curve symmetric with respect to both axes.
:::

:::esempio
$\dfrac{x^2}{9} + \dfrac{y^2}{4} = 1$: the semi-axes are $a = 3$ and $b = 2$, the vertices are $(\pm 3, 0)$ and $(0, \pm 2)$. Since $a > b$, the foci lie on the $x$-axis: from $c^2 = 9 - 4 = 5$ it follows that they are $(\pm\sqrt{5}, 0)$.

::grafico{curve="3*cos(t),2*sin(t),0,6.29" uguale=1 xmin=-4 xmax=4 ymin=-3 ymax=3 punti="3,0;-3,0;0,2;0,-2;2.236,0,vuoto,F₁;-2.236,0,vuoto,F₂" titolo="Ellipse $\dfrac{x^2}{9} + \dfrac{y^2}{4} = 1$: vertices $(\pm 3, 0)$ and $(0, \pm 2)$, foci $F_1$ and $F_2$ at $(\pm\sqrt{5}, 0)$"}
:::

:::attenzione
The semi-axes are read only from the form with right-hand side equal to $1$. The equation $4x^2 + 9y^2 = 36$ does *not* have semi-axes $2$ along $x$ and $3$ along $y$: the point $(2, 0)$ gives $4 \cdot 4 = 16 \neq 36$, so it does not belong to the curve. Dividing by $36$ gives $\dfrac{x^2}{9} + \dfrac{y^2}{4} = 1$, therefore the semi-axes are $3$ along $x$ and $2$ along $y$, and indeed the point $(3, 0)$ gives $4 \cdot 9 = 36$.
:::

## The hyperbola

:::definizione{#iperbole titolo="Hyperbola in standard form"}
The hyperbola in standard form with foci on the $x$-axis has equation
$$
\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1, \qquad a, b > 0 .
$$
It intersects the $x$-axis at the vertices $(\pm a, 0)$ and does not intersect the $y$-axis: the graph consists of **two branches**, one to the right of $x = a$ and one to the left of $x = -a$. The foci are $(\pm c, 0)$ with $c^2 = a^2 + b^2$, and the hyperbola is the locus of points for which the **difference** of the distances from the foci is constant in absolute value; this statement is assumed. The two branches get arbitrarily close to the **asymptotes**
$$
y = \frac{b}{a}\,x, \qquad y = -\frac{b}{a}\,x .
$$
The equation $\dfrac{x^2}{a^2} - \dfrac{y^2}{b^2} = -1$ represents a hyperbola with foci on the $y$-axis, vertices $(0, \pm b)$ and the same asymptotes. To draw a hyperbola, one traces the rectangle with sides $x = \pm a$ and $y = \pm b$, extends its diagonals, which are the asymptotes, and draws the branches starting from the vertices, bringing them closer to the asymptotes.
:::

:::esempio
$\dfrac{x^2}{4} - \dfrac{y^2}{9} = 1$: the vertices are $(\pm 2, 0)$, from $c^2 = 4 + 9 = 13$ the foci are $(\pm\sqrt{13}, 0)$, the asymptotes are $y = \pm\dfrac{3}{2}x$. The branches pass through the vertices and approach the asymptotes as they move away from the origin.

::grafico{curve="2/cos(t),3*tan(t),0,6.2832" uguale=1 xmin=-6.5 xmax=6.5 ymin=-6 ymax=6 segmenti="-4,-6,4,6;-4,6,4,-6;2,-3,2,3;-2,-3,-2,3;-2,3,2,3;-2,-3,2,-3" punti="2,0;-2,0;3.606,0,vuoto,F₁;-3.606,0,vuoto,F₂" titolo="Hyperbola $\dfrac{x^2}{4} - \dfrac{y^2}{9} = 1$: vertices $(\pm 2, 0)$, foci $(\pm\sqrt{13}, 0)$; the branches approach the asymptotes $y = \pm\dfrac{3}{2}x$, diagonals of the rectangle with sides $x = \pm 2$ and $y = \pm 3$"}
:::

:::osservazione{#iperbole-equilatera titolo="Rectangular hyperbola referred to its asymptotes"}
If $a = b$ the asymptotes $y = \pm x$ are perpendicular and the hyperbola is called **rectangular**. Rotated by $45°$, so that the asymptotes become the coordinate axes, it has equation
$$
xy = k, \qquad k \neq 0 ,
$$
that is, $y = \dfrac{k}{x}$; this fact is assumed. For $k > 0$ the branches lie in the first and third quadrants, for $k < 0$ in the second and fourth. The vertices lie on the bisector of the quadrants that contain the branches: for $xy = 4$ they are $(2, 2)$ and $(-2, -2)$, because $x = y$ and $x^2 = 4$. This equation contains the term $xy$, so it is not of the form $A x^2 + C y^2 + D x + E y + F = 0$ used to recognize conics; the function $y = \dfrac{k}{x}$ often appears in Mathematical Analysis 1 as an example of a function with vertical asymptote $x = 0$ and horizontal asymptote $y = 0$.

::grafico{f="4/x" legenda="xy = 4" uguale=1 xmin=-6 xmax=6 ymin=-6 ymax=6 punti="2,2,pieno;-2,-2,pieno" segmenti="-6,-6,6,6" etichette="2.3,1.6,(2, 2);-4.6,-2.4,(−2, −2)" titolo="Rectangular hyperbola $xy = 4$: the asymptotes are the coordinate axes and the vertices $(2, 2)$ and $(-2, -2)$ lie on the bisector $y = x$, dashed"}
:::

## Recognizing a conic

:::teorema{#riconoscere-una-conica titolo="Recognizing a conic from its equation"}
A quadratic equation in $x$ and $y$ without the $xy$ term,
$$
A x^2 + C y^2 + D x + E y + F = 0 ,
$$
represents a conic with axes parallel to the coordinate axes. The type is read from the coefficients $A$ and $C$ of the quadratic terms:

- *only* one of $A$ and $C$ is nonzero, and the other variable appears to the first degree: parabola;
- $A = C \neq 0$: circle;
- $A$ and $C$ have the same sign but different values: ellipse;
- $A$ and $C$ have opposite signs: hyperbola.

After completing the squares the equation may turn out to be a **degenerate case**, which is none of the four curves.

- A sum of squares equal to zero is satisfied by a single point; for example $(x - 1)^2 + y^2 = 0$ holds only at $(1, 0)$.
- A sum of squares equal to a negative number is satisfied by no point.
- A difference of squares equal to zero represents a pair of lines.

For this reason the type read from the coefficients is confirmed after the reduction.
:::

:::esempio{titolo="A degenerate case: a pair of lines"}
In $x^2 - 4y^2 - 2x + 1 = 0$ the quadratic coefficients $1$ and $-4$ have opposite signs, so one expects a hyperbola. Completing the square gives $(x - 1)^2 - 4y^2 = 0$, with zero right-hand side, and the difference of squares factors:
$$
(x - 1 - 2y)(x - 1 + 2y) = 0 .
$$
A product is zero if and only if at least one factor is zero, so the equation represents the pair of lines $y = \dfrac{x - 1}{2}$ and $y = -\dfrac{x - 1}{2}$, which meet at $(1, 0)$. They are the asymptotes that the hyperbolas $(x - 1)^2 - 4y^2 = k$ with $k \neq 0$ would have.

::grafico{f="(x-1)/2;-(x-1)/2" uguale=1 xmin=-4 xmax=6 ymin=-3 ymax=3 punti="1,0,pieno" legenda="y = \dfrac{x - 1}{2};y = -\dfrac{x - 1}{2}" titolo="The equation $x^2 - 4y^2 - 2x + 1 = 0$ represents the two lines $y = \pm\dfrac{x - 1}{2}$, which meet at $(1, 0)$"}
:::

:::teorema{#ridurre-e-disegnare titolo="Procedure for reducing and drawing"}
To draw the conic of equation $A x^2 + C y^2 + D x + E y + F = 0$:

1. factor out $A$ from the terms in $x$ and $C$ from the terms in $y$;
2. complete the square in each group;
3. move the constant to the right-hand side and divide by it, obtaining the **standard form** centered at a point $(x_0, y_0)$;
4. mark the center and the vertices, and for the hyperbola the asymptotes, translated to the center.

The standard form is the one from the previous sections with $x - x_0$ and $y - y_0$ in place of $x$ and $y$: the conic is the standard one **translated**, that is, shifted by $x_0$ horizontally and by $y_0$ vertically.
:::

:::esempio
$9x^2 + 4y^2 - 18x - 16y - 11 = 0$. The coefficients of the squares are $9$ and $4$, of the same sign and different, therefore the equation represents an **ellipse**. Factoring and completing:
$$
\begin{aligned}
9(x^2 - 2x) + 4(y^2 - 4y) - 11 &= 0 \\[4pt]
9(x - 1)^2 - 9 + 4(y - 2)^2 - 16 - 11 &= 0 \\[4pt]
9(x - 1)^2 + 4(y - 2)^2 &= 36 ,
\end{aligned}
$$
and dividing by $36$:
$$
\frac{(x - 1)^2}{4} + \frac{(y - 2)^2}{9} = 1 .
$$
It is an ellipse with center $(1, 2)$ and semi-axes $2$ along $x$ and $3$ along $y$: the vertices are $(3, 2)$, $(-1, 2)$, $(1, 5)$ and $(1, -1)$. Since the major semi-axis is **vertical**, from $c^2 = 9 - 4 = 5$ the foci are $(1, 2 \pm \sqrt{5})$.

::grafico{curve="1+2*cos(t),2+3*sin(t),0,6.29" uguale=1 xmin=-2.6 xmax=4.6 ymin=-1.5 ymax=5.5 segmenti="1,-1.5,1,5.5;-2.6,2,4.6,2" punti="1,2,pieno,C;3,2;-1,2;1,5;1,-1;1,4.236,vuoto,F₁;1,-0.236,vuoto,F₂" titolo="Ellipse $\dfrac{(x - 1)^2}{4} + \dfrac{(y - 2)^2}{9} = 1$ with center $C(1, 2)$: the foci lie on the vertical axis $x = 1$"}
:::
