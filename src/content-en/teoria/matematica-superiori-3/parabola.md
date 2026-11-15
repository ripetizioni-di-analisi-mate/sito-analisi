---
titolo: Parabolas and quadratic problems
sommario: From the focus to the graph, with examples on the vertex, intersections, tangents and maximum-value problems.
---

## Focus, directrix and axis of symmetry

:::definizione{#fuoco titolo="Focus and directrix"}
A **parabola** is the set of points in the plane that are equally far from a fixed point $F$, called the focus, and a line $d$, called the directrix. The focus lies off the directrix. Distance to $d$ is measured along the perpendicular to $d$ through the point in question.

When $d$ is horizontal, the vertical line through $F$ is the axis of symmetry of the parabola. Write $h$ for the x-coordinate of the axis and $k$ for the y-coordinate of the vertex. Then the focus can be written as $F(h,k+p)$ and the directrix as $y=k-p$. The number $p\ne 0$ is the signed vertical displacement from the vertex $V(h,k)$ to the focus. Its absolute value is also the distance from $V$ to the directrix.
:::

::::teorema{#equazione-distanze titolo="Deriving the equation from distances"}
With $F(h,k+p)$ and $d:y=k-p$, the equation of the parabola is
$$
(x-h)^2=4p(y-k).
$$
Since $(x-h)^2\ge 0$, every point satisfies $y\ge k$ when $p>0$ and $y\le k$ when $p<0$. On the axis $x=h$ we get $y=k$, so the vertex is the only point of the parabola on that axis.

:::dimostrazione
For a point $P(x,y)$, write the two distances and square them. Both distances are nonnegative, so equality of the squares is equivalent to the original equality.
$$
\begin{aligned}
\sqrt{(x-h)^2+(y-k-p)^2}&=|y-k+p|\\[6pt]
(x-h)^2&=(y-k+p)^2-(y-k-p)^2\\[6pt]
&=4p(y-k).
\end{aligned}
$$
Substituting either $x=h+s$ or $x=h-s$ makes the square on the left equal to $s^2$. The two x-coordinates at the same distance from the axis thus have the same y-coordinate.
:::
::::

:::esempio{titolo="From the diagram to the equation"}
Let $F(0,1)$ and $d:y=-1$. The vertex is halfway between $F$ and the point $D(0,-1)$ where the axis meets the directrix, so $V=(0,0)$ and $p=1$. The equation is $x^2=4y$. The point $P(2,1)$ is on the curve because $2^2=4\cdot 1$. The horizontal segment $PF$ and the perpendicular from $P$ to the directrix both have length $2$.

::grafico{f="x^2/4;-1" legenda="y=\dfrac{x^2}{4};y=-1" xmin=-4 xmax=5 ymin=-2 ymax=4.5 uguale=1 punti="0,1,pieno,F;0,0,pieno,V;0,-1,pieno,D;2,1,pieno,P;2,-1,pieno,H" segmenti="0,1,2,1;2,-1,2,1" titolo="The distances PF and PH are equal because P is on the parabola"}
:::

## From the quadratic to vertex form

::::teorema{#vertice titolo="Completing the square"}
For $y=ax^2+bx+c$ with $a\ne 0$, the quadratic can be written as $a(x-h)^2+k$. In this form $V=(h,k)$ and the axis of symmetry is $x=h$. Write $\Delta=b^2-4ac$ for the discriminant. Then
$$
h=-\frac{b}{2a},
\qquad
k=c-\frac{b^2}{4a}=-\frac{\Delta}{4a}.
$$
The sign of $a$ gives the direction in which the parabola opens. If $a>0$, the smallest y-coordinate is $k$. If $a<0$, the largest y-coordinate is $k$. In both cases the extreme value occurs at $x=h$.

:::dimostrazione
Factor $a$ out of the terms in $x$ so that the coefficient of $x^2$ inside is $1$. In the square $(x+u)^2$, the coefficient of $x$ is $2u$. To obtain $\dfrac{b}{a}$, take $u=\dfrac{b}{2a}$.
$$
\begin{aligned}
ax^2+bx+c
&=a\left(x^2+\frac{b}{a}x\right)+c\\[6pt]
&=a\left[\left(x+\frac{b}{2a}\right)^2
-\left(\frac{b}{2a}\right)^2\right]+c\\[6pt]
&=a\left(x+\frac{b}{2a}\right)^2
+c-\frac{b^2}{4a}.
\end{aligned}
$$
The square is zero only when $x=-\dfrac{b}{2a}$. This is therefore the point where the quadratic attains its extreme value.
:::
::::

:::esempio{titolo="A downward-opening parabola"}
For $y=-2x^2+8x-5$, factor $-2$ out of the terms in $x$ and add $4$ to form the square. Subtract the same quantity before distributing the factor $-2$.
$$
\begin{aligned}
y&=-2(x^2-4x)-5\\
 &=-2\bigl[(x-2)^2-4\bigr]-5\\
 &=-2(x-2)^2+3.
\end{aligned}
$$
It follows that $V=(2,3)$. At distance $1$ from the axis, that is at $x=1$ and $x=3$, the term $-2(x-2)^2$ equals $-2$ and both points have y-coordinate $1$. The same equality holds for any pair of symmetric x-coordinates. Since $a=-2$, the focus-directrix form gives $p=\dfrac{1}{4a}=-\dfrac18$. The focus therefore lies below the vertex and the directrix above it.

::grafico{f="-2*(x-2)^2+3" xmin=-0.5 xmax=4.5 ymin=-8 ymax=4.5 punti="1,1,pieno,A;2,3,pieno,V;3,1,pieno,B" asintoti="x=2" titolo="A and B have the same y-coordinate because their x-coordinates are one unit from the axis of symmetry"}
:::

:::esempio{titolo="Same opening direction, different widths"}
The parabolas $y=x^2$ and $y=4x^2$ both have vertex at the origin and open upwards. At height $y=1$, the first meets the horizontal line at x-coordinates $-1$ and $1$. For the second, $4x^2=1$, so the x-coordinates are $-\dfrac12$ and $\dfrac12$. At the same height the second chord is half as wide. The coefficient of $x^2$ is positive in both equations. The difference in aperture comes from its absolute value.
:::

## Roots, intercept and sign

:::teorema{#zeri titolo="Intersections with the coordinate axes"}
The graph of $f(x)=ax^2+bx+c$, with $a\ne 0$, meets the y-axis at $(0,c)$ because $x=0$ there. Points on the x-axis have y-coordinate zero, so their x-coordinates are the real solutions of $f(x)=0$.

- If $\Delta>0$, the graph meets the x-axis at two distinct points. If $x_1<x_2$ are their x-coordinates, then $f(x)=a(x-x_1)(x-x_2)$. The sign of $f$ agrees with that of $a$ outside $[x_1,x_2]$ and is opposite between the roots.
- If $\Delta=0$, the graph touches the x-axis at the vertex. The quadratic is $a(x-h)^2$, so it has the sign of $a$ for every $x\ne h$.
- If $\Delta<0$, the graph lies entirely above the x-axis when $a>0$ and entirely below it when $a<0$. Indeed, $k=-\dfrac{\Delta}{4a}$ has the same sign as $a$, and $a(x-h)^2$ either has that sign or is zero.
:::

:::esempio{titolo="Reading an inequality from the graph"}
To solve $x^2-4x+3\le 0$, factor $x^2-4x+3=(x-1)(x-3)$ to obtain roots $1$ and $3$. For $x<1$, both factors are negative, so the product is positive. For $1<x<3$, the factors have opposite signs and the product is negative. For $x>3$, both factors are positive. Since the inequality includes equality, the solution is $[1,3]$.

The x-coordinate of the vertex is the midpoint of the two roots, namely $2$. Substituting $x=2$ gives the y-coordinate $-1$. The diagram shows the roots, the sign and the minimum value together.

::grafico{f="x^2-4*x+3" xmin=-1 xmax=5 ymin=-2 ymax=8 punti="1,0;3,0;2,-1,pieno,V;0,3" titolo="On the closed interval [1, 3], the graph lies on or below the x-axis"}
:::

:::attenzione
The equation $(x-2)^2=0$ has the single solution $2$, which is a double root. The graph of $y=(x-2)^2$ touches the axis at $(2,0)$. Since the square is positive on either side, the sign stays positive for $x\ne2$.
:::

## Finding the equation from given data

:::teorema{#equazione titolo="Given the vertex and one point"}
If a parabola with a vertical axis has vertex $V(h,k)$ and passes through $P(x_P,y_P)$ with $x_P\ne h$, start with $y=a(x-h)^2+k$. Substituting the point gives
$$
a=\frac{y_P-k}{(x_P-h)^2}.
$$
If $y_P=k$, the calculation gives $a=0$ and the data are incompatible with a parabola with a vertical axis. If $x_P=h$, the point lies on the parabola only when it is the vertex. In that case the point condition already holds for every $a\ne0$.
:::

:::esempio{titolo="A vertex and one point"}
Let $V=(1,-2)$ and $P=(3,6)$. Substituting the coordinates of the point gives
$$
\begin{aligned}
6&=a(3-1)^2-2\\
8&=4a\\
a&=2 .
\end{aligned}
$$
The required parabola is $y=2(x-1)^2-2$. The point $Q=(-1,6)$ lies at the same distance from the axis $x=1$ and therefore has the same y-coordinate as $P$. To check that the curve passes through $P$, substitute to obtain $2\cdot 2^2-2=6$, as required.
:::

:::esempio{titolo="Three points with distinct x-coordinates"}
Find a quadratic graph through $(0,1)$, $(1,0)$ and $(3,4)$. Since three points and no vertex are given, start with $y=ax^2+bx+c$ and substitute the three coordinate pairs.
$$
\begin{cases}
c=1\\
a+b+c=0\\
9a+3b+c=4
\end{cases}
\qquad\Longrightarrow\qquad
\begin{cases}
c=1\\
a+b=-1\\
3a+b=1 .
\end{cases}
$$
Subtracting the second equation in the system on the right from the third gives $2a=2$, so $a=1$ and $b=-2$. The result is $y=x^2-2x+1$. The coefficient $a$ is nonzero, and the values at $x=0,1,3$ are $1,0,4$, respectively.

In general, three points with distinct x-coordinates determine at most one polynomial of degree at most two. If two polynomials of that degree passed through the same points, their difference would have three distinct roots and would have to be the zero polynomial. If the three points are collinear, the polynomial obtained has degree at most one, so the data do not determine a parabola.
:::

## Secant lines, tangents and lines that miss the parabola

::::teorema{#intersezioni titolo="Substitution in the system"}
To find the points common to the parabola $y=ax^2+bx+c$ and the line $y=mx+q$, set the two expressions for $y$ equal. The x-coordinates are thus the solutions of
$$
ax^2+(b-m)x+c-q=0.
$$
The discriminant is $(b-m)^2-4a(c-q)$. It is positive for a secant, zero for a tangent and negative for a line that misses the parabola. This classification applies to **nonvertical lines**, for which the substituted equation is quadratic.

:::dimostrazione
Each solution $x$ gives one common point $(x,mx+q)$. If the discriminant is zero, the difference between the y-coordinates of the parabola and line factors as $a(x-t)^2$, where $t$ is the double root. The line meets the graph at $t$, and the difference keeps the same sign on either side. This is the tangency condition for a nonvertical line.
:::
::::

:::esempio{titolo="A secant and its chord"}
For $y=x^2$ and $y=x+2$, we have
$$
\begin{aligned}
x^2&=x+2\\
x^2-x-2&=0\\
(x+1)(x-2)&=0 .
\end{aligned}
$$
The x-coordinates are $-1$ and $2$. Substituting into the line gives points $A(-1,1)$ and $B(2,4)$. The midpoint of chord $AB$ is $\left(\dfrac12,\dfrac52\right)$. It lies on the line because $\dfrac12+2=\dfrac52$. The parabola has y-coordinate $\dfrac14$ at the same x-coordinate, so the midpoint is above the graph.

::grafico{f="x^2;x+2" xmin=-2.5 xmax=3.5 ymin=-1 ymax=8.5 punti="-1,1,pieno,A;2,4,pieno,B;0.5,2.5,pieno,M" titolo="Chord AB lies on the secant, and its midpoint M is above the parabola"}
:::

:::attenzione
The vertical line $x=1$ meets $y=x^2$ only at $(1,1)$. The double-root condition applies when the line has equation $y=mx+q$. Here the x-coordinate is already fixed at $1$, so the system yields a single point without giving a tangent. The tangent at $(1,1)$ is $y=2x-1$.
:::

## Tangent at a point and tangents through a point

::::teorema{#tangenti titolo="The double-root condition"}
The tangent to $y=ax^2+bx+c$, $a\ne0$, at the point with x-coordinate $t$ has equation
$$
y=(2at+b)x+c-at^2.
$$
The number $t$ identifies the point where the line touches the parabola. To find a tangent through a given point $P$, keep $t$ as an unknown and impose the condition that the line pass through $P$.

:::dimostrazione
For $t$ to be a double root, the difference between the parabola and the line $y=mx+q$ must equal $a(x-t)^2$. Equating the linear and constant coefficients gives
$$
\begin{aligned}
ax^2+(b-m)x+c-q&=a(x-t)^2\\
&=ax^2-2atx+at^2,\\[4pt]
\begin{cases}
b-m=-2at\\
c-q=at^2
\end{cases}
&\quad\Longrightarrow\quad
\begin{cases}
m=2at+b\\
q=c-at^2 .
\end{cases}
\end{aligned}
$$
These coefficients give the only line for which the difference has the double root $t$.
:::
::::

:::esempio{titolo="Two tangents through an external point"}
For the parabola $y=x^2$, the tangent at $(t,t^2)$ is $y=2tx-t^2$. Find the tangents through $P(0,-4)$. Substituting $P$ gives $-4=-t^2$, so $t=2$ or $t=-2$. The two lines are $y=4x-4$ and $y=-4x-4$.

For the first line, the difference $x^2-(4x-4)$ is $(x-2)^2$. For the second it is $(x+2)^2$. The double intersections are thus $(2,4)$ and $(-2,4)$, respectively. The point $P$ lies on both lines because they both have y-intercept $-4$.

::grafico{f="x^2;4*x-4;-4*x-4" xmin=-4 xmax=4 ymin=-5.5 ymax=8.5 punti="0,-4,pieno,P;2,4,pieno,A;-2,4,pieno,B" titolo="The tangents through P touch the parabola at A and B"}
:::

:::osservazione
For a tangent parallel to a given line, the slope $m$ is already known. Find $t$ from $2at+b=m$. For example, a horizontal tangent has $m=0$, so $t=-\dfrac{b}{2a}$. The point of tangency is the vertex and the line has equation $y=k$.
:::

## Parabolas with a horizontal axis

:::definizione{#orizzontale titolo="Swapping the coordinates"}
A parabola with a horizontal axis has equation
$$
x=a(y-k)^2+h,\qquad a\ne0.
$$
The vertex is $V(h,k)$ and the axis has equation $y=k$. The square is zero when $y=k$, so for $a>0$ the smallest x-coordinate is $h$ and the parabola opens to the right. For $a<0$ the largest x-coordinate is $h$ and the parabola opens to the left.

Rewriting $(y-k)^2=4p(x-h)$ gives $p=\dfrac{1}{4a}$. The displacement from the vertex to the focus is now horizontal. The focus is $F(h+p,k)$ and the directrix is $x=h-p$.
:::

:::esempio{titolo="One x-coordinate and two y-coordinates"}
For $x=(y-1)^2-2$, the vertex is $(-2,1)$. Setting $x=2$ gives $(y-1)^2=4$, so $y=1\pm2$. The vertical line $x=2$ therefore meets the parabola at $(2,-1)$ and $(2,3)$. Both points are at distance $2$ from the axis $y=1$.

The curve is the graph of $x$ as a function of $y$. A single x-coordinate can, however, correspond to two y-coordinates, as shown by the vertical line through the two points. The graph of a function $y=f(x)$ assigns exactly one y-coordinate to each x-coordinate in its domain.

::grafico{curve="(t-1)^2-2,t,-2,4.3" legenda="x=(y-1)^2-2" xmin=-3.5 xmax=6 ymin=-2.5 ymax=4.5 asintoti="y=1" segmenti="2,-1,2,3" punti="-2,1,pieno,V;2,-1,pieno,A;2,3,pieno,B" titolo="A and B have the same x-coordinate and are symmetric about y = 1"}
:::

## Extreme values under constraints

:::esempio{#massimi titolo="Area of an enclosure against a wall"}
There are $24\,\mathrm{m}$ of fencing for three sides of a rectangle. The fourth side is against a wall. If $x$ is the length in metres of each side perpendicular to the wall, the parallel side is $24-2x$. Both lengths must be positive, so $0<x<12$.
$$
\begin{aligned}
A(x)&=x(24-2x)\\
&=-2(x^2-12x)\\
&=-2\bigl[(x-6)^2-36\bigr]\\
&=72-2(x-6)^2 .
\end{aligned}
$$
Since the square is nonnegative, $A(x)\le72$. Equality holds for $x=6$, which is in the permitted interval. The side parallel to the wall is $12\,\mathrm{m}$ long and the maximum area is $72\,\mathrm{m}^2$. The constraint uses $x$ twice, so the dimensions that maximize the area are in a ratio of $2$ to $1$.

::grafico{f="72-2*(x-6)^2" xmin=0 xmax=12 ymin=0 ymax=85 punti="0,0,vuoto;6,72,pieno,V;12,0,vuoto" titolo="The vertex is in the permitted interval and gives a maximum area of 72 square metres"}
:::

:::esempio{titolo="When the vertex is outside the interval"}
An arch is modelled by $y=9-(x-3)^2$. The walkway of interest occupies only the section $4\le x\le 6$. The vertex has x-coordinate $3$, outside that section. For $4\le x\le 6$, the distance $x-3$ increases from $1$ to $3$. Its square increases with it, so $9-(x-3)^2$ decreases. Consequently,
$$
y(4)=9-1^2=8,
\qquad
y(6)=9-3^2=0 .
$$
On the specified section the maximum is $8$ and the minimum is $0$. The maximum of the full graph would be $9$, but that point is outside the walkway.
:::
