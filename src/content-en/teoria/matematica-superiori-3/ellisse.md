---
titolo: Ellipse
sommario: From the sum of distances to the foci to the equation of an ellipse, with examples on eccentricity, translations, intersections and tangents.
---

## Sum of distances to the foci

:::definizione{#definizione titolo="The locus"}
Fix two points $F_1$ and $F_2$, called the **foci**, and let $2c$ be the distance between them. An ellipse is the locus of the points $P$ for which
$$
PF_1+PF_2=2a,\qquad a>c\geq0 .
$$
The constant $2a$ exceeds $2c$ because, by the triangle inequality, the sum of the distances is at least $F_1F_2$. When $a=c>0$, the locus is just the segment between the foci. If $c=0$ and $a>0$, the foci coincide and the equality becomes $2PF_1=2a$. This gives a circle of radius $a$.
:::

:::esempio{titolo="Different points with the same sum"}
Let $F_1(-4,0)$, $F_2(4,0)$ and $2a=10$. For $P(0,3)$ the distances are both $\sqrt{4^2+3^2}=5$. For $Q(5,0)$ they are $9$ and $1$. Both points therefore lie on the same ellipse even though only $P$ is equidistant from the foci. Along the curve the individual distances can change while their sum remains $10$.

::grafico{curve="5*cos(t),3*sin(t),0,6.283185307" xmin=-6 xmax=6 ymin=-4 ymax=4 uguale=1 punti="-4,0,pieno,F_1;4,0,pieno,F_2;0,3,pieno,P;5,0,pieno,Q" segmenti="0,3,-4,0;0,3,4,0" legenda="\dfrac{x^2}{25}+\dfrac{y^2}{9}=1" titolo="For $P$ we have $PF_1+PF_2=5+5$, while for $Q$ we have $QF_1+QF_2=9+1$."}

:::

:::teorema{#distanze-focali titolo="How far can a point lie from a focus?"}
Let $d_1$ and $d_2$ be the distances from a point on the ellipse to the foci. Applying the triangle inequality in both directions gives $|d_1-d_2|\leq 2c$. The sum $d_1+d_2=2a$ is also known. Adding the two relations to get $2d_1$ gives
$$
-2c\leq d_1-d_2\leq 2c
\quad\Longrightarrow\quad a-c\leq d_1\leq a+c .
$$
The same range holds for $d_2$. For a fixed focus, the smaller value is attained at the vertex on the same side of the centre. The greater value is attained at the opposite vertex, with the centre between the focus and the vertex.
:::

:::esempio{titolo="A correct sum can still give impossible distances"}
For $a=6$ and $c=4$, distances $11$ and $1$ have the required sum $12$. However, each distance must lie between $a-c=2$ and $a+c=10$. Indeed, if a point were $1$ unit from one focus, its distance from the other could be at most $1+8=9$. The pair $9$ and $3$ has sum $12$ and difference $6<8$. A triangle with sides $3$, $8$ and $9$ can be drawn with the segment between the foci as its side of length $8$. Its third vertex is then a point of the ellipse.
:::

## Standard equation and axes

::::teorema{#assi titolo="From foci to semi-axes"}
Let $F_1(-c,0)$ and $F_2(c,0)$ be the foci, with $a>c>0$. Setting $b=\sqrt{a^2-c^2}$, the condition $PF_1+PF_2=2a$ is equivalent to
$$
\frac{x^2}{a^2}+\frac{y^2}{b^2}=1 .
$$
The centre is the origin. The intersections with the $x$-axis are $(\pm a,0)$ and those with the $y$-axis are $(0,\pm b)$. Since $a>b$, the segments joining the two horizontal endpoints and the two vertical endpoints are the **major axis** and **minor axis**, of lengths $2a$ and $2b$, respectively.

:::dimostrazione
Let $d_1$ and $d_2$ be the distances of $P(x,y)$ from $F_1$ and $F_2$. Taking the difference of the squared distances cancels $y^2$.
$$
\begin{aligned}
d_1^2-d_2^2&=(x+c)^2-(x-c)^2=4cx,\\
(d_1-d_2)(d_1+d_2)&=4cx.
\end{aligned}
$$
If $d_1+d_2=2a$, then $d_1-d_2=\dfrac{2cx}{a}$, so $d_1=a+\dfrac{cx}{a}$. Squaring and using the distance formula gives
$$
\begin{aligned}
(x+c)^2+y^2&=\left(a+\frac{cx}{a}\right)^2,\\[4pt]
\left(1-\frac{c^2}{a^2}\right)x^2+y^2&=a^2-c^2,\\[4pt]
\frac{x^2}{a^2}+\frac{y^2}{a^2-c^2}&=1.
\end{aligned}
$$
Conversely, the last equation implies $|x|\leq a$. Using it in the formulas for $d_1^2$ and $d_2^2$ gives $(a+\dfrac{cx}{a})^2$ and $(a-\dfrac{cx}{a})^2$. Both bases are positive, because $\left|\dfrac{cx}{a}\right|\leq c<a$. The distances are therefore $a+\dfrac{cx}{a}$ and $a-\dfrac{cx}{a}$, whose sum is $2a$. The sign check ensures equivalence with the original condition.
:::
::::

:::esempio{titolo="Intercepts, axis lengths and symmetries"}
For $\dfrac{x^2}{25}+\dfrac{y^2}{9}=1$, setting $y=0$ gives $x^2=25$, so $x=\pm5$. Setting $x=0$ gives $y=\pm3$. The major axis measures $10$ and the minor axis $6$. Since the coordinates are squared, changing the sign of either one preserves the equation. The curve is therefore symmetric about each axis and, on changing both signs, about the centre.
:::

## Orientation and positions of the foci

:::teorema{#fuochi titolo="The larger denominator locates the foci"}
For an ellipse in standard form with positive and unequal denominators, the semi-major axis $a$ is the square root of the larger denominator. The semi-minor axis $b$ is the square root of the other denominator. The foci are on the major axis at distance $c=\sqrt{a^2-b^2}$ from the centre. If the larger denominator is under $x^2$, the foci are $(\pm c,0)$. If it is under $y^2$, swapping the coordinates gives the foci $(0,\pm c)$. In either case the sum of the distances to the foci is $2a$.
:::

:::esempio{titolo="Vertical major axis"}
In the ellipse $\dfrac{x^2}{9}+\dfrac{y^2}{25}=1$, the major axis is vertical, because $25>9$ and $25$ is under $y^2$. Thus $a=5$, $b=3$ and $c=\sqrt{25-9}=4$. The main vertices are $(0,\pm5)$ and the foci are $(0,\pm4)$. At the vertex $(0,5)$ the distances to the foci are $1$ and $9$, so the sum is $10$.
:::

:::attenzione
Here the letter $a$ denotes the **semi-major axis**. In the equation $\dfrac{x^2}{9}+\dfrac{y^2}{25}=1$, the horizontal semi-axis measures $3$, while $a=5$. To identify the axis containing the foci, compare the two denominators and see which squared term has the larger one.
:::

## Eccentricity and shape

:::definizione{#eccentricita titolo="Eccentricity"}
The **eccentricity** is the ratio $e=\dfrac{c}{a}$. We have $0\leq e<1$ because $0\leq c<a$. Since $c=ae$ and $b^2=a^2-c^2$, it follows that
$$
b=a\sqrt{1-e^2}.
$$
For a fixed semi-major axis, increasing $e$ reduces $b$ and makes the curve more elongated along the major axis. In the case $e=0$ we have $b=a$ and the foci coincide.
:::

:::esempio{titolo="Two ellipses of equal width"}
Two horizontal ellipses with $a=5$ have eccentricities $\dfrac35$ and $\dfrac45$, respectively. In the first case $c=3$, so $b=\sqrt{25-9}=4$. In the second $c=4$, so $b=\sqrt{25-16}=3$. Both have width $10$, but their heights are $8$ and $6$, respectively. The ellipse with the greater eccentricity has foci farther from the centre and is shorter in the vertical direction.

::grafico{curve="5*cos(t),4*sin(t),0,6.283185307;5*cos(t),3*sin(t),0,6.283185307" xmin=-6 xmax=6 ymin=-5 ymax=5 uguale=1 punti="-5,0;5,0;0,4;0,3" legenda="e=\dfrac{3}{5};e=\dfrac{4}{5}" titolo="At a fixed width, the ellipse with greater eccentricity has a shorter vertical semi-axis."}

:::

## Membership, coordinates and intersections

:::teorema{#punti titolo="Finding one coordinate from the other"}
For the ellipse $\dfrac{x^2}{a^2}+\dfrac{y^2}{b^2}=1$ with $a>b>0$, fixing $x=t$ gives the $y$-coordinates
$$
y=\pm b\sqrt{1-\frac{t^2}{a^2}},\qquad |t|\leq a .
$$
If $|t|<a$, there is one point above the $x$-axis and one below it. At $t=\pm a$, the $y$-coordinate is $0$ and there is just one point. Outside $[-a,a]$ the radicand is negative. The full ellipse therefore has two different $y$-coordinates for many $x$-coordinates. The two halves are separate graphs of functions.
:::

:::esempio{titolo="Two ordinates and point membership"}
For $\dfrac{x^2}{25}+\dfrac{y^2}{9}=1$ and $x=3$, we have
$$
\begin{aligned}
\frac{y^2}{9}&=1-\frac{9}{25}=\frac{16}{25},\\[4pt]
y&=\pm\frac{12}{5}.
\end{aligned}
$$
The line $x=3$ is therefore a secant. On the same line, $(3,0)$ lies inside the region bounded by the ellipse because the sum of the two terms is $\dfrac{9}{25}<1$. For $(3,3)$ the sum is $\dfrac9{25}+1>1$, so the point is outside. Comparing with $1$ works because dividing the coordinates by $a$ and $b$ maps the ellipse to the unit circle.
:::

:::esempio{titolo="Finding clearance from the profile of an arch"}
An arch with span $8\,\mathrm m$ and maximum height $3\,\mathrm m$ follows the upper half of an ellipse. Put the origin at the centre of the base and measure coordinates in metres. The span is the distance between the endpoints of the base, so the horizontal semi-axis measures $4\,\mathrm m$. The vertical semi-axis measures $3\,\mathrm m$. To find the available width at height $2\,\mathrm m$, intersect the curve with $y=2$.
$$
\begin{aligned}
\frac{x^2}{16}+\frac{4}{9}&=1,\\[4pt]
x^2&=\frac{80}{9},\\[4pt]
x&=\pm\frac{4\sqrt5}{3}.
\end{aligned}
$$
The intersections have equal horizontal distance from the centre and opposite $x$-coordinates. The width at the specified height is the difference between the coordinates, $\dfrac{8\sqrt5}{3}\,\mathrm m$. This is less than the span at the base because the cut is at a positive height.
:::

## Translated ellipses

:::teorema{#traslata titolo="Coordinates measured from the centre"}
For centre $C(h,k)$ and semi-axes parallel to the coordinate axes, measure the differences $X=x-h$ and $Y=y-k$. If the major axis is horizontal, the standard equation in $X,Y$ becomes
$$
\frac{(x-h)^2}{a^2}+\frac{(y-k)^2}{b^2}=1,\qquad a>b>0 .
$$
The main vertices are $(h\pm a,k)$ and the foci are $(h\pm c,k)$. If the major axis is vertical, $a^2$ appears under $(y-k)^2$, the main vertices are $(h,k\pm a)$ and the foci are $(h,k\pm c)$. Translation changes the coordinates while preserving the axis lengths and directions.
:::

:::esempio{titolo="From coordinates relative to the centre to coordinates in the plane"}
For $\dfrac{(x-2)^2}{25}+\dfrac{(y+1)^2}{9}=1$ the centre is $(2,-1)$. The major axis is horizontal and $c=\sqrt{25-9}=4$. The foci are therefore $(-2,-1)$ and $(6,-1)$, and the major-axis endpoints are $(-3,-1)$ and $(7,-1)$. The right-hand focus has $x$-coordinate $6$, below $7$, because $c<a$. The endpoints of the minor axis are found by fixing $x=2$ and setting $y=-1\pm3$.

::grafico{curve="2+5*cos(t),-1+3*sin(t),0,6.283185307" xmin=-4 xmax=8 ymin=-5 ymax=3 uguale=1 punti="2,-1,pieno,C;-2,-1,pieno,F_1;6,-1,pieno,F_2;-3,-1;7,-1;2,2;2,-4" segmenti="-3,-1,7,-1;2,-4,2,2" legenda="\dfrac{(x-2)^2}{25}+\dfrac{(y+1)^2}{9}=1" titolo="The foci and the main vertices all have the same $y$-coordinate as the centre $C$."}

:::

## Finding the equation from geometric data

:::esempio{#ricostruzione titolo="Centre, vertex and focus"}
An ellipse centred at the origin has main vertex $(5,0)$ and focus $(3,0)$. The first piece of information gives $a=5$, and the second gives $c=3$. Since $0<c<a$, the semi-minor axis can be positive. We get $b^2=25-9=16$, and the equation is
$$
\frac{x^2}{25}+\frac{y^2}{16}=1 .
$$
At the vertex $(5,0)$, the distances to $(3,0)$ and $(-3,0)$ are $2$ and $8$, with sum $10$, as the definition requires.
:::

:::esempio{titolo="Vertical foci and a given sum"}
Suppose the foci are $(1,-1)$ and $(1,5)$ and the sum of the distances is $10$. Their midpoint is the centre $(1,2)$. Half the distance between the foci is $3$, and the semi-major axis is $5$, so $b^2=25-9=16$. Since the foci are aligned vertically, the equation is
$$
\frac{(x-1)^2}{16}+\frac{(y-2)^2}{25}=1 .
$$
Finding the equation uses two different halves. The value $3$ is half the distance between the foci, while $5$ is half the sum of the distances from a point on the ellipse to the two foci.
:::

:::osservazione
To recognise an ellipse from an equation such as $4x^2+9y^2=36$, make the right-hand side $1$ by dividing by $36$. This gives $\dfrac{x^2}{9}+\dfrac{y^2}{4}=1$. The coefficient $4$ in front of $x^2$ was the smaller coefficient, while the denominator $9$ under $x^2$ is the larger denominator. For the same reason, using the equation before normalising can lead to swapping the major and minor axes.
:::

:::esempio{titolo="Two points away from the axes"}
An ellipse centred at the origin with axes parallel to the coordinate axes passes through $P(4,3)$ and $Q(2,4)$. The unknowns are the denominators $A$ and $B$ of the terms in $x^2$ and $y^2$. To obtain a linear system, set $u=\dfrac1A$ and $v=\dfrac1B$. Requiring both points to lie on the ellipse gives
$$
\begin{cases}
16u+9v=1,\\
4u+16v=1 .
\end{cases}
$$
Subtracting the second equation from the first gives $12u=7v$. Substituting $u=\dfrac7{12}v$ into the second equation gives
$$
\begin{aligned}
\left(\frac73+16\right)v&=1,\\[4pt]
v&=\frac3{55},\qquad u=\frac7{220}.
\end{aligned}
$$
Both values are positive, so the two semi-axis lengths are real and positive. The equation is $\dfrac{7x^2}{220}+\dfrac{3y^2}{55}=1$. Since $u<v$, the denominator $A=\dfrac1u$ is greater than $B=\dfrac1v$ and the major axis is horizontal. A negative value for either unknown would have meant the two points could not specify an ellipse of this kind.
:::

## Tangents and secants

::::teorema{#tangenti titolo="The tangent at a point on an ellipse"}
Let $a,b>0$ and let $P_0(x_0,y_0)$ be a point on $\dfrac{x^2}{a^2}+\dfrac{y^2}{b^2}=1$. The tangent at $P_0$ is
$$
\frac{xx_0}{a^2}+\frac{yy_0}{b^2}=1 .
$$
For $P_0=(a,0)$ this gives $x=a$, while for $P_0=(0,b)$ it gives $y=b$. The same formula therefore covers vertical tangents as well.

:::dimostrazione
Set $u=\dfrac xa$ and $v=\dfrac yb$. The transformation is invertible because both semi-axes are positive, and it maps the ellipse to the circle $u^2+v^2=1$. The point $P_0$ maps to $\left(\dfrac{x_0}{a},\dfrac{y_0}{b}\right)$. The tangent to the circle at that point has equation $\dfrac{x_0}{a}u+\dfrac{y_0}{b}v=1$. Substituting back for $u$ and $v$ gives the required equation. The transformation maps lines to lines and preserves the number of intersections. The line found this way therefore meets the ellipse only at the given point.
:::
::::

:::esempio{titolo="A tangent away from the axes"}
For $\dfrac{x^2}{25}+\dfrac{y^2}{9}=1$ and $P_0\left(3,\dfrac{12}{5}\right)$, check that the point lies on the curve using $\dfrac9{25}+\dfrac{16}{25}=1$. Applying the equation of the tangent gives
$$
\begin{aligned}
\frac{3x}{25}+\frac{4y}{15}&=1,\\
9x+20y&=75.
\end{aligned}
$$
Unlike for a circle, the tangent in this case is not perpendicular to the segment joining the centre to $P_0$. The coefficients of the line are proportional to $\left(\dfrac{x_0}{a^2},\dfrac{y_0}{b^2}\right)$, whose direction generally differs from that of $(x_0,y_0)$.

::grafico{f="(75-9*x)/20" curve="5*cos(t),3*sin(t),0,6.283185307" xmin=-6 xmax=7 ymin=-4 ymax=6 uguale=1 punti="3,2.4,pieno,P" legenda="9x+20y=75;\dfrac{x^2}{25}+\dfrac{y^2}{9}=1" titolo="The line $9x+20y=75$ is tangent at $P$."}

:::

:::osservazione
To find how a given line $y=mx+q$ meets the ellipse, substitute the whole expression $mx+q$ for $y$. The coefficient of $x^2$ is $\dfrac1{a^2}+\dfrac{m^2}{b^2}>0$. The discriminant therefore distinguishes the cases of two intersections, one intersection and no intersection. For a vertical line $x=t$, compare $|t|$ with the horizontal semi-axis. Equality gives tangency.
:::
