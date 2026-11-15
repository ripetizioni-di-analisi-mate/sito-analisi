---
titolo: Transformations and problems on conics
sommario: Translations, reflections, and dilations change the coordinates of points and curves. Completing the square, solving systems, and testing for tangency identify conics and reveal their geometric properties.
---

## Translations of points and curves

::::teorema{#traslazioni titolo="Point coordinates and the new equation"}
The translation by vector $(h,k)$ adds $h$ to every abscissa and $k$ to every ordinate. If $P=(u,v)$ lies on the original curve, its image is $P'=(u+h,v+k)$. If the original curve is described by $F(u,v)=0$, its image has equation
$$
F(x-h,y-k)=0.
$$
Here $x$ and $y$ denote the coordinates *after* the translation. The same rule shifts a graph, a conic, or any other locus described by an equation.

:::dimostrazione
A point $(x,y)$ lies on the image curve if the point from which it came satisfies the original equation. To recover that point, solve the system
$$
\begin{cases}
x=u+h,\\
y=v+k.
\end{cases}
\qquad\Longrightarrow\qquad
\begin{cases}
u=x-h,\\
v=y-k.
\end{cases}
$$
Substituting these values into $F(u,v)=0$ characterizes exactly the image points. Thus $h$ and $k$ are subtracted because the equation uses the inverse transformation.
:::
::::

:::esempio{titolo="A circle shifted two units to the right"}
The circle $u^2+v^2=9$ is translated by $(2,-1)$. Its center moves from $(0,0)$ to $(2,-1)$. The point $(3,0)$ moves by the same vector and becomes $(5,-1)$. The equation is $(x-2)^2+(y+1)^2=9$. Substituting $(5,-1)$ gives $9$ square units, consistent with radius $3$.

::grafico{curve="3*cos(t),3*sin(t),0,6.283185307;2+3*cos(t),-1+3*sin(t),0,6.283185307" xmin=-4 xmax=7 ymin=-5 ymax=4 uguale=1 punti="0,0;2,-1,pieno,C;3,0,pieno,P;5,-1,pieno,P'" vettori="0,0,2,-1;3,0,5,-1" legenda="x^2+y^2=9;(x-2)^2+(y+1)^2=9" titolo="The center and the point $P$ move by the same vector."}

:::

:::osservazione
A translation preserves distances because differences between the coordinates of two points stay the same. For instance, the difference of the abscissas after translation is $(u_2+h)-(u_1+h)=u_2-u_1$. The same cancellation holds for the ordinates. Therefore a translation preserves a circle's radius, a parabola's opening, and the slopes of lines moved with the curve.
:::

## Line and point reflections

:::teorema{#simmetrie titolo="Reflecting coordinates"}
Reflection across a line sends each point to the opposite side at the same distance, along the perpendicular to the line. In the following cases the coordinates follow directly.

- Across the $x$-axis, $(x,y)$ becomes $(x,-y)$.
- Across the $y$-axis, $(x,y)$ becomes $(-x,y)$.
- Across the angle bisector $y=x$, $(x,y)$ becomes $(y,x)$.
- Across the vertical line $x=h$, $(x,y)$ becomes $(2h-x,y)$.

In a point reflection through $C=(h,k)$, the point $C$ is the midpoint between $P=(x,y)$ and its image $P'=(2h-x,2k-y)$. In particular, both signs change under reflection through the origin. Applying a reflection twice returns to the starting point, so the same substitution can be used to write the image equation.
:::

:::esempio{titolo="A parabola reflected across the angle bisector"}
Reflect $v=u^2$ across $y=x$. An image point has coordinates $x=v$ and $y=u$, so the image curve has equation $x=y^2$. For example, $(2,4)$ becomes $(4,2)$ and $(-2,4)$ becomes $(4,-2)$. The original curve has a vertical axis of symmetry, while the image has a horizontal one. The two ordinates of the new curve at $x=4$ correspond to the two abscissas of the original graph at $y=4$.

::grafico{f="x^2;x" curve="t^2,t,-2.4,2.4" xmin=-3 xmax=6 ymin=-3 ymax=6 uguale=1 punti="2,4,pieno,P;4,2,pieno,P'" segmenti="2,4,4,2" legenda="y=x^2;y=x;x=y^2" titolo="The segment $PP'$ is perpendicular to the line $y=x$."}

:::

:::esempio{titolo="Reflection across a shifted vertical line"}
The circle $(u-1)^2+(v+2)^2=4$ is centered at $(1,-2)$. Reflecting it across $x=3$ moves the center to $(5,-2)$ because $3$ is the average of $1$ and $5$. The radius stays $2$. The substitution $u=6-x$, $v=y$ indeed gives $(5-x)^2+(y+2)^2=4$. Since $(5-x)^2=(x-5)^2$, the center can be read from the usual form.
:::

## Dilations and scale factors

:::definizione{#omotetie titolo="Dilation about a given center"}
A **dilation** about center $C$ with scale factor $\lambda\ne0$ multiplies the vector from the center to the point by $\lambda$. For $C=(h,k)$ and $P=(u,v)$, the image coordinates are
$$
P'=\big(h+\lambda(u-h),\ k+\lambda(v-k)\big).
$$
For $\lambda>0$ the image lies on the same ray from $C$, whereas for $\lambda<0$ it lies on the opposite ray. The distance from $C$ is multiplied by $|\lambda|$. For any pair of points the coordinate differences are multiplied by $\lambda$, so all lengths are multiplied by $|\lambda|$ and areas by $\lambda^2$.
:::

:::esempio{titolo="Center away from the origin"}
A circle with center $A=(4,1)$ and radius $2$ is dilated about $C=(1,1)$ with scale factor $-\dfrac12$. The vector from $C$ to $A$ is $(3,0)$. The image of $A$ is therefore $A'=(1-\dfrac32,1)=(-\dfrac12,1)$. The radius becomes $2\cdot\dfrac12=1$. The image equation is $(x+\dfrac12)^2+(y-1)^2=1$. The direction from $C$ to $A'$ is opposite to that from $C$ to $A$, as the negative sign indicates.

::grafico{curve="4+2*cos(t),1+2*sin(t),0,6.283185307;-0.5+cos(t),1+sin(t),0,6.283185307" xmin=-3 xmax=7 ymin=-2 ymax=4 uguale=1 punti="4,1,pieno,A;1,1,pieno,C;-0.5,1,pieno,A'" segmenti="-0.5,1,4,1" legenda="(x-4)^2+(y-1)^2=4;(x+\dfrac12)^2+(y-1)^2=1" titolo="The two centers $A$ and $A'$ lie on opposite rays from $C$."}

:::

:::esempio{titolo="Effect on a parabola equation"}
For a dilation about the origin with scale factor $2$, an image point $(x,y)$ comes from $(\dfrac{x}{2},\dfrac{y}{2})$. Substitution into $v=u^2$ gives $\dfrac{y}{2}=\left(\dfrac{x}{2}\right)^2$, or $y=\dfrac{x^2}{2}$. The point $(1,1)$ moves to $(2,2)$, satisfying the new equation. The factor $2$ multiplies the coordinates of points. After substitution in the equation, the coefficient of $x^2$ is instead $\dfrac12$.
:::

## Recognizing conics with no mixed term

:::teorema{#riconoscimento titolo="Signs and degenerate cases"}
Consider $Ax^2+Cy^2+Dx+Ey+F=0$, with no mixed term $xy$. If $A$ and $C$ are both nonzero, completing the square gives $A(x-h)^2+C(y-k)^2=R$. The signs of $A,C,R$ now determine the curve.

- If $A$ and $C$ have the same sign, make the left-hand side nonnegative by reversing the sign of the entire equation if needed. With $R>0$ the curve is an ellipse, or a circle if $A=C$. With $R=0$ only the point $(h,k)$ remains. With $R<0$ the locus is empty. In these three conditions the value after any sign reversal is denoted by $R$.
- If $A$ and $C$ have opposite signs, dividing by $R\ne0$ gives a hyperbola. The positive term after dividing determines the transverse axis. With $R=0$ the left-hand side is a difference of squares and gives two intersecting lines.
- If just one quadratic coefficient is nonzero, examine the linear term in the other variable. For example, with $A\ne0$ and $C=0$, the condition $E\ne0$ gives a parabola because $y$ can be isolated. If $E=0$ as well, a quadratic equation in $x$ alone remains. The real roots determine whether the locus consists of two vertical lines, one vertical line, or no points.

If $A=C=0$, the equation is linear in the coordinates. It describes a line when at least one of $D,E$ is nonzero. If both vanish, it describes the entire plane for $F=0$ or no points for $F\ne0$.
:::

:::esempio{titolo="A family that changes type"}
In the family $(x-1)^2-4(y+2)^2=t$, when $t>0$ the $x$ term remains positive after division and the hyperbola has a horizontal transverse axis. When $t<0$ the $y$ term becomes positive, so the transverse axis is vertical. When $t=0$, factoring gives
$$
\big(x-1-2(y+2)\big)\big(x-1+2(y+2)\big)=0 .
$$
The two lines pass through $(1,-2)$ and have slopes $\pm\dfrac12$. They are also the asymptotes of the family members with $t\ne0$.
:::

## Completing the square

:::teorema{#quadrati titolo="From general form to the center coordinates"}
Before completing the square, factor out the coefficient of the quadratic term. For $A\ne0$,
$$
Ax^2+Dx=A\left(x+\frac{D}{2A}\right)^2-\frac{D^2}{4A}.
$$
The cross term in the expanded square must give $Dx$. Treat $Cy^2+Ey$ the same way if $C\ne0$. When both squares are present, the center is $(-\dfrac{D}{2A},-\dfrac{E}{2C})$. Before dividing by the right-hand side, calculate the actual value of $R$, because it determines both the scale of the axes and whether the curve is degenerate.
:::

:::esempio{titolo="Center and semiaxes of an ellipse"}
For $4x^2+9y^2-8x+36y+4=0$, factor out $4$ and $9$ before adding and subtracting the terms needed to form the squares. Then the constant contributions are multiplied by those same coefficients.
$$
\begin{aligned}
4(x^2-2x)+9(y^2+4y)+4&=0\\
4\big((x-1)^2-1\big)+9\big((y+2)^2-4\big)+4&=0\\
4(x-1)^2+9(y+2)^2&=36\\
\frac{(x-1)^2}{9}+\frac{(y+2)^2}{4}&=1 .
\end{aligned}
$$
The center is $(1,-2)$. The intersections with the horizontal line $y=-2$ are $3$ units from the center, and those with $x=1$ are $2$ units away. The semiaxes are therefore $3$ horizontally and $2$ vertically.

::grafico{curve="1+3*cos(t),-2+2*sin(t),0,6.283185307" xmin=-4 xmax=6 ymin=-6 ymax=3 uguale=1 punti="1,-2,pieno,C;-2,-2;4,-2;1,-4;1,0" segmenti="-2,-2,4,-2;1,-4,1,0" legenda="\dfrac{(x-1)^2}{9}+\dfrac{(y+2)^2}{4}=1" titolo="The horizontal and vertical diameters show the two semiaxes."}

:::

:::esempio{titolo="Completing just one square"}
In $3x^2-12x+2y+8=0$, complete only the square involving $x$. The variable $y$ stays linear, so it can be isolated.
$$
\begin{aligned}
3(x^2-4x)+2y+8&=0\\
3\big((x-2)^2-4\big)+2y+8&=0\\
2y&=4-3(x-2)^2\\
y&=2-\frac32(x-2)^2 .
\end{aligned}
$$
The vertex is $(2,2)$ and the parabola opens downward. The abscissa $2$ makes the square vanish and hence gives the largest value of $y$.
:::

## Intersections of two curves

:::teorema{#intersezioni titolo="Common points as solutions of a system"}
A point common to two curves satisfies both equations. When each equation gives $y$ as a function of $x$, set the ordinates equal and then substitute the resulting abscissas into one of the original formulas. For implicit equations, a sum or difference can eliminate a term while the other equation remains in the system. The resulting coordinates must satisfy both original equations.
:::

:::esempio{titolo="Two parabolas opening in opposite directions"}
For $y=x^2$ and $y=2-x^2$, equating the ordinates gives $x^2=2-x^2$. This simplifies to $2x^2=2$, so $x=\pm1$. Substitution into the first equation gives ordinate $1$ in both cases. The common points are $(-1,1)$ and $(1,1)$. Between those two abscissas the graph of $y=2-x^2$ is above $y=x^2$, because the difference $2(1-x^2)$ is positive for $|x|<1$.

::grafico{f="x^2;2-x^2" xmin=-2.5 xmax=2.5 ymin=-2 ymax=4 uguale=1 punti="-1,1,pieno,A;1,1,pieno,B" titolo="The parabolas intersect at $A=(-1,1)$ and $B=(1,1)$."}

:::

:::esempio{titolo="Eliminating squares between two circles"}
For $x^2+y^2=5$ and $(x-2)^2+y^2=5$, expand the second equation as $x^2-4x+4+y^2=5$. Subtracting the first gives $-4x+4=0$. Thus every common point has $x=1$. Substituting into the first equation leaves $y^2=4$ and gives $(1,2)$ and $(1,-2)$. The line $x=1$ contains both points, but the system also imposes the circle equation and selects just those two ordinates.
:::

## Tangency and parameters

:::teorema{#tangenza titolo="Repeated root and point of tangency"}
To find a tangent in a family of lines, substitute the line into the conic equation. If the intersection equation is quadratic and the conic is nondegenerate, a repeated root identifies the point of tangency. Find the parameter values by setting $\Delta=0$ and substitute the root into the line equation. This yields the point of tangency as well as the tangent line.
:::

:::esempio{titolo="Tangent to a parabola with fixed slope"}
For $y=x^2$ and $y=2x+q$, the system gives $x^2-2x-q=0$. The coefficient of $x^2$ is $1$ for every $q$, so the discriminant applies.
$$
\Delta=(-2)^2-4(1)(-q)=4+4q=0
\qquad\Longrightarrow\qquad q=-1.
$$
At this value the equation becomes $(x-1)^2=0$. The contact point is $(1,1)$ and the tangent is $y=2x-1$. Since $x^2-(2x-1)=(x-1)^2\geq0$, the parabola stays above the tangent and has the same ordinate only at the computed point.
:::

:::attenzione
The condition $\Delta=0$ requires a nonzero quadratic coefficient. For $x^2-y^2=1$ and $y=x+1$, the quadratic term cancels, leaving $-2x-1=1$. The sole intersection is $(-1,0)$, but the line has slope $1$ and is parallel to an asymptote. The tangent at the vertex is the vertical line $x=-1$. It is therefore necessary to determine the degree of the equation before counting roots.
:::

## Loci and distances

:::teorema{#luoghi titolo="Writing an equation for a distance condition"}
To find a locus, assign coordinates $(x,y)$ to the variable point and write the relevant distances. Equal lengths have equal squares. Conversely, two lengths with equal squares are equal because both are nonnegative. This allows square roots to be removed from distance equalities without introducing extraneous points.
:::

:::esempio{titolo="Points equidistant from two fixed points"}
For $A=(-2,0)$ and $B=(4,0)$, the condition $PA=PB$ and the distance formula give
$$
\begin{aligned}
(x+2)^2+y^2&=(x-4)^2+y^2\\
x^2+4x+4&=x^2-8x+16\\
12x&=12\\
x&=1 .
\end{aligned}
$$
The squares cancel because they have the same coefficients. The locus is a line perpendicular to $AB$ at its midpoint $(1,0)$. Every point on this line satisfies equality of the squares and therefore of the distances themselves.
:::

:::esempio{titolo="Distance from a point and from a line"}
Points equidistant from $F=(0,2)$ and the line $y=-2$ satisfy $\sqrt{x^2+(y-2)^2}=|y+2|$. The absolute value measures distance from the line even for points below it. Squaring gives
$$
\begin{aligned}
x^2+(y-2)^2&=(y+2)^2\\
x^2+y^2-4y+4&=y^2+4y+4\\
x^2&=8y .
\end{aligned}
$$
This is the parabola with vertex $(0,0)$ and a vertical axis. The point $(4,2)$ lies on the curve. It is $4$ units from both the focus and the directrix, as the locus requires.

::grafico{f="x^2/8;-2" xmin=-6 xmax=6 ymin=-4 ymax=6 uguale=1 punti="0,0,pieno,V;0,2,pieno,F;4,2,pieno,P;4,-2,pieno,H" segmenti="0,2,4,2;4,2,4,-2" legenda="y=\dfrac{x^2}{8};y=-2" titolo="The segments $FP$ and $PH$ both have length $4$."}

:::
