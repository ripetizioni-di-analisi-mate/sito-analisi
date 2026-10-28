---
titolo: Analytic geometry and conic sections
sommario: Points and lines in the Cartesian plane, then parabola, circle, ellipse and hyperbola, with the method for recognizing a conic from its equation and drawing it.
---

## The Cartesian plane

:::definizione{#distanza-e-punto-medio titolo="Distance between two points and midpoint"}
Given $A(x_1, y_1)$ and $B(x_2, y_2)$:
$$
\overline{AB} = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2},
\qquad
M\left( \frac{x_1 + x_2}{2},\; \frac{y_1 + y_2}{2} \right) .
$$
The distance is the Pythagorean theorem applied to the right triangle with legs $|x_2 - x_1|$ and $|y_2 - y_1|$; the midpoint has as coordinates the averages of the coordinates. These two formulas are used throughout the chapter: the circle, the ellipse and the hyperbola are defined precisely in terms of distances.
:::

:::esempio
$A(1, 2)$ and $B(4, 6)$: the distance is $\overline{AB} = \sqrt{3^2 + 4^2} = \sqrt{25} = 5$ and the midpoint is $M\left(\dfrac{5}{2}, 4\right)$.
:::

## The line

:::definizione{#retta titolo="Equation of a line"}
A non-vertical line has slope-intercept equation
$$
y = mx + q ,
$$
where $m$ is the slope and $q$ is the ordinate of the point of intersection with the $y$-axis. A vertical line has equation $x = c$. Every line, vertical or not, can be written in general form
$$
ax + by + c = 0, \qquad (a, b) \neq (0, 0) ;
$$
for $b \neq 0$ the two forms translate into each other through $m = -\dfrac{a}{b}$ and $q = -\dfrac{c}{b}$. The slope-intercept form is read as a function and can be drawn immediately; the general form also includes vertical lines and appears in the point-line distance formula.
:::

:::definizione{#coefficiente-angolare titolo="Slope, lines through a point, parallelism and perpendicularity"}
The slope of the line through two points $A(x_1, y_1)$ and $B(x_2, y_2)$ with $x_1 \neq x_2$ is
$$
m = \frac{y_2 - y_1}{x_2 - x_1} ,
$$
the ratio between the change in $y$ and the change in $x$. The line with slope $m$ passing through the point $P(x_0, y_0)$ is
$$
y - y_0 = m\,(x - x_0) .
$$
Two non-vertical lines with slopes $m_1$ and $m_2$ are parallel if and only if $m_1 = m_2$; they are perpendicular if and only if $m_1 \, m_2 = -1$, that is $m_2 = -\dfrac{1}{m_1}$. With these three formulas one writes the required line in almost every exercise: one finds $m$ from the data and imposes the passage through the point.
:::

:::esempio
The line through $P(1, 3)$ perpendicular to $y = 2x - 5$ has slope $m = -\dfrac{1}{2}$, therefore it is $y - 3 = -\dfrac{1}{2}(x - 1)$, that is $y = -\dfrac{1}{2}x + \dfrac{7}{2}$.
:::

:::teorema{#distanza-punto-retta titolo="Distance from a point to a line"}
The distance from the point $P(x_0, y_0)$ to the line $r$ of equation $ax + by + c = 0$ is
$$
d(P, r) = \frac{|a x_0 + b y_0 + c|}{\sqrt{a^2 + b^2}} .
$$
The line must be written in general form before applying the formula. The point-line distance is also used with conic sections, for example to impose that a line be tangent to a circle: tangency is equivalent to the equality between the distance from the center to the line and the radius.
:::

:::esempio
Distance from $P(2, 1)$ to the line $3x - 4y + 1 = 0$:
$$
d = \frac{|3 \cdot 2 - 4 \cdot 1 + 1|}{\sqrt{9 + 16}} = \frac{3}{5} .
$$
:::

## The parabola

:::definizione{#parabola titolo="Parabola y = ax² + bx + c"}
The graph of $y = ax^2 + bx + c$ with $a \neq 0$ is a parabola with a vertical axis of symmetry. The vertex has coordinates
$$
V\left( -\frac{b}{2a},\; c - \frac{b^2}{4a} \right) ,
$$
and the ordinate of the vertex can also be computed by substituting the abscissa $x_V = -\dfrac{b}{2a}$ into the equation; the axis of symmetry is the line $x = x_V$. The concavity depends on the sign of $a$:

- if $a > 0$ the parabola opens upward and the vertex is the lowest point;
- if $a < 0$ the parabola opens downward and the vertex is the highest point.

The intersections with the $x$-axis are the solutions of $ax^2 + bx + c = 0$: two points if $\Delta > 0$, one if $\Delta = 0$, none if $\Delta < 0$. The intersection with the $y$-axis is the point $(0, c)$. Vertex, concavity and intersections are enough to draw the parabola.
:::

:::esempio
$y = x^2 - 2x - 3$: the vertex is $V(1, -4)$, the parabola opens upward since $a = 1 > 0$, the intersections with the $x$-axis are $(-1, 0)$ and $(3, 0)$, the one with the $y$-axis is $(0, -3)$.

::grafico{f="x^2-2*x-3" xmin=-3 xmax=5 ymin=-5 ymax=6 punti="1,-4" titolo="y = x² − 2x − 3 with vertex V(1, −4)"}
:::

## The circle

:::definizione{#circonferenza titolo="Circle"}
The circle with center $C(x_0, y_0)$ and radius $r > 0$ is the locus of points at distance $r$ from $C$; squaring the distance formula gives the standard equation
$$
(x - x_0)^2 + (y - y_0)^2 = r^2 .
$$
Expanding the squares leads to the general form
$$
x^2 + y^2 + ax + by + c = 0 ,
$$
with $a = -2x_0$, $b = -2y_0$ and $c = x_0^2 + y_0^2 - r^2$. From the general form one recovers center and radius:
$$
C\left( -\frac{a}{2},\; -\frac{b}{2} \right),
\qquad
r = \sqrt{\frac{a^2}{4} + \frac{b^2}{4} - c} ,
$$
provided the quantity under the root is positive. A circle in general form is recognized by two features: $x^2$ and $y^2$ have the same coefficient and the term $xy$ does not appear.
:::

:::definizione{#completamento-dei-quadrati titolo="Completing the square"}
For every $a \in \mathbb{R}$,
$$
x^2 + ax = \left( x + \frac{a}{2} \right)^2 - \frac{a^2}{4} .
$$
Completing the square rewrites a second-degree equation in standard form without formulas to memorize: one groups the terms in $x$ and those in $y$, completes each group and moves the constant to the right-hand side. It is the procedure by which one finds the center and radius of a circle and by which one reduces any conic to its standard form.
:::

:::esempio
$x^2 + y^2 - 2x - 4y + 1 = 0$. Completing the squares: $x^2 - 2x = (x - 1)^2 - 1$ and $y^2 - 4y = (y - 2)^2 - 4$, therefore the equation becomes
$$
(x - 1)^2 + (y - 2)^2 = 4 :
$$
a circle with center $C(1, 2)$ and radius $r = 2$. To draw it, one marks the center and the four points at distance $2$ from it along the directions of the axes: $(3, 2)$, $(-1, 2)$, $(1, 4)$ and $(1, 0)$.
:::

:::attenzione
Not every equation of the form $x^2 + y^2 + ax + by + c = 0$ represents a circle. In $x^2 + y^2 - 2x + 6 = 0$ completing the square gives $(x - 1)^2 + y^2 = -5$, and a sum of squares cannot be negative, therefore no point satisfies the equation.
:::

## The ellipse

:::definizione{#ellisse titolo="Ellipse in standard form"}
The ellipse in standard form, with center at the origin and axes of symmetry on the coordinate axes, has equation
$$
\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1, \qquad a, b > 0 .
$$
The numbers $a$ and $b$ are the semi-axes: the ellipse intersects the $x$-axis at the vertices $(\pm a, 0)$ and the $y$-axis at the vertices $(0, \pm b)$, and the whole graph lies in the rectangle $-a \leq x \leq a$, $-b \leq y \leq b$. The ellipse is the locus of points for which the sum of the distances from two fixed points, the foci, is constant; this statement is assumed. The foci lie on the axis of the major semi-axis:

- if $a > b$ the foci are $(\pm c, 0)$ with $c^2 = a^2 - b^2$;
- if $b > a$ the foci are $(0, \pm c)$ with $c^2 = b^2 - a^2$.

To draw the ellipse, one marks the four vertices and joins them with an oval curve symmetric with respect to both axes.
:::

:::esempio
$\dfrac{x^2}{9} + \dfrac{y^2}{4} = 1$: the semi-axes are $a = 3$ and $b = 2$, the vertices are $(\pm 3, 0)$ and $(0, \pm 2)$. Since $a > b$, the foci lie on the $x$-axis: from $c^2 = 9 - 4 = 5$ it follows that they are $(\pm\sqrt{5}, 0)$.
:::

## The hyperbola

:::definizione{#iperbole titolo="Hyperbola in standard form"}
The hyperbola in standard form with foci on the $x$-axis has equation
$$
\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1, \qquad a, b > 0 .
$$
It intersects the $x$-axis at the vertices $(\pm a, 0)$ and does not intersect the $y$-axis: the graph consists of two branches, one to the right of $x = a$ and one to the left of $x = -a$. The foci are $(\pm c, 0)$ with $c^2 = a^2 + b^2$, and the hyperbola is the locus of points for which the difference of the distances from the foci is constant in absolute value; this statement is assumed. The two branches approach indefinitely the asymptotes
$$
y = \frac{b}{a}\,x, \qquad y = -\frac{b}{a}\,x .
$$
The equation $\dfrac{x^2}{a^2} - \dfrac{y^2}{b^2} = -1$ represents a hyperbola with foci on the $y$-axis, vertices $(0, \pm b)$ and the same asymptotes. To draw a hyperbola, one traces the rectangle with sides $x = \pm a$ and $y = \pm b$, extends its diagonals, which are the asymptotes, and draws the branches starting from the vertices, bringing them closer to the asymptotes.
:::

:::esempio
$\dfrac{x^2}{4} - \dfrac{y^2}{9} = 1$: the vertices are $(\pm 2, 0)$, from $c^2 = 4 + 9 = 13$ the foci are $(\pm\sqrt{13}, 0)$, the asymptotes are $y = \pm\dfrac{3}{2}x$. The branches pass through the vertices and flatten onto the asymptotes moving away from the origin.
:::

## Recognizing a conic

:::teorema{#riconoscere-una-conica titolo="Recognizing a conic from its equation"}
A second-degree equation in $x$ and $y$ without the $xy$ term,
$$
A x^2 + C y^2 + D x + E y + F = 0 ,
$$
represents a conic with axes parallel to the coordinate axes. The type is read from the coefficients $A$ and $C$ of the quadratic terms:

- only one of $A$ and $C$ is nonzero, and the other variable appears to the first degree: parabola;
- $A = C \neq 0$: circle;
- $A$ and $C$ have the same sign but different values: ellipse;
- $A$ and $C$ have opposite signs: hyperbola.

Completing the squares can also lead to a degenerate case, such as a single point or no point for a sum of squares equal to zero or to a negative number; the final type is confirmed after the reduction.
:::

:::teorema{#ridurre-e-disegnare titolo="Procedure for reducing and drawing"}
To draw the conic of equation $A x^2 + C y^2 + D x + E y + F = 0$:

1. factor out $A$ from the terms in $x$ and $C$ from the terms in $y$;
2. complete the square in each group;
3. move the constant to the right-hand side and divide by it, obtaining the standard form centered at a point $(x_0, y_0)$;
4. mark the center and the vertices, and for the hyperbola the asymptotes, translated to the center.

The standard form is the one from the previous sections with $x - x_0$ and $y - y_0$ in place of $x$ and $y$: the conic is the standard one translated by the vector $(x_0, y_0)$.
:::

:::esempio
$9x^2 + 4y^2 - 18x - 16y - 11 = 0$. The coefficients of the squares are $9$ and $4$, of the same sign and different, therefore the equation represents an ellipse. Factoring and completing:
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
It is an ellipse with center $(1, 2)$ and semi-axes $2$ along $x$ and $3$ along $y$: the vertices are $(3, 2)$, $(-1, 2)$, $(1, 5)$ and $(1, -1)$. Since the major semi-axis is vertical, from $c^2 = 9 - 4 = 5$ the foci are $(1, 2 \pm \sqrt{5})$.
:::
