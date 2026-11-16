---
titolo: "Functions, geometry and trigonometry"
sommario: "Functions and graphs, exponentials and logarithms, plane and coordinate geometry, and trigonometry."
---

## Domain, values and graph

:::definizione{#dominio-e-grafico titolo="Function and domain"}
A **function** assigns exactly one value $f(x)$ to every admissible value of the variable $x$. The set of admissible inputs is the **domain**, denoted by $D_f$. The set of values that $f$ actually takes is its range. If $f(x)=x^2+1$ on all of $\mathbb{R}$, the domain is $\mathbb{R}$ and the range is $[1,+\infty)$ because $x^2\geq 0$ and every value $y\geq 1$ is obtained by taking $x=\sqrt{y-1}$.
:::

:::osservazione
When a formula is the only given information, the natural domain consists of the real numbers for which every operation is defined. A division requires a nonzero denominator. An even root requires a nonnegative radicand. A logarithm requires a strictly positive argument. All these conditions must hold at once. An applied problem may impose further constraints. For example, the area $A(s)=s^2$ of a square with side length $s$ describes a square with a positive side length, even though the polynomial also makes sense for $s\leq 0$.
:::

:::esempio{titolo="Two restrictions on one variable"}
For $f(x)=\dfrac{\sqrt{3-x}}{x+2}$, both $3-x\geq 0$ and $x+2\neq 0$ must hold. The first condition is equivalent to $x\leq 3$. The second excludes $x=-2$. The domain is therefore $(-\infty,-2)\cup(-2,3]$. The input $x=3$ is admissible and gives $f(3)=0$, because the denominator equals $5$.
:::

:::definizione{titolo="Reading a graph"}
The **graph** of $f$ consists of the points with coordinates $(x,f(x))$ for $x\in D_f$. A vertical line meets the graph in at most one point, because a single $x$-coordinate has at most one corresponding $y$-coordinate. The zeros are the $x$-coordinates of the points on the horizontal axis, since these points have $y$-coordinate $0$. When $0\in D_f$, the graph meets the vertical axis at $(0,f(0))$.
:::

:::esempio{titolo="Zeros, sign and range"}
For $f(x)=x^2-4$, the equation $f(x)=0$ reduces to $x^2=4$, so the zeros are $-2$ and $2$. Between the zeros, the graph lies below the horizontal axis because $x^2<4$ when $|x|<2$. The minimum is $-4$ at $x=0$, so the range is $[-4,+\infty)$.

::grafico{f="x^2-4" xmin=-3 xmax=3 ymin=-5 ymax=5 punti="-2,0,pieno;0,-4,pieno;2,0,pieno" titolo="The graph crosses the horizontal axis at $x=-2$ and $x=2$ and has its minimum at $(0,-4)$."}

:::

## Composition and inverse functions

:::definizione{#composizione-e-inversa titolo="Composition of two functions"}
The **composition** $f\circ g$ applies $g$ first and then applies $f$ to the result. It is written $(f\circ g)(x)=f(g(x))$. The input $x$ must be admissible for $g$, and the output $g(x)$ must be admissible for $f$. The domain of the composition is therefore
$$
D_{f\circ g}=\{x\in D_g : g(x)\in D_f\}.
$$
The order of operations matters, because swapping $f$ and $g$ changes the formula and, in general, the domain.
:::

:::esempio{titolo="Reversing the order"}
With $f(t)=\sqrt t$ and $g(x)=x-4$, we have $(f\circ g)(x)=\sqrt{x-4}$, defined for $x\geq 4$. In the other order the result is $(g\circ f)(x)=\sqrt{x}-4$, defined for $x\geq 0$. Even where both are defined, the values can differ. For instance, at $x=4$ the two results are $0$ and $-2$, respectively.
:::

:::definizione{titolo="Inverting a one-to-one function"}
A function is **one-to-one** when different inputs produce different outputs. For a function that is one-to-one on $D_f$, the **inverse** $f^{-1}$ maps the output $y$ to the unique input $x$ for which $f(x)=y$. The domain of $f^{-1}$ is the range of $f$. On the graph, the point $(x,y)$ becomes $(y,x)$ under reflection in the line $y=x$.
:::

:::esempio{titolo="Inverse of a function on a half-line"}
Let $f(x)=(x-2)^2$ for $x\geq 2$. Solving $y=(x-2)^2$ for $x$ gives $x=2+\sqrt y$, since $x-2\geq 0$ on the domain. The inverse is therefore $f^{-1}(y)=2+\sqrt y$ for $y\geq 0$. If the same formula for $f$ were defined on all of $\mathbb R$, then $x=1$ and $x=3$ would have the same image. Restricting the domain to $[2,+\infty)$ makes the choice of square root unique.

::grafico{f="(x-2)^2+0*sqrt(x-2);2+sqrt(x);x" xmin=-0.5 xmax=6 ymin=-0.5 ymax=6 uguale=1 punti="3,1,pieno;1,3,pieno" legenda="y=(x-2)^2,\ x\ge2;y=2+\sqrt{x};y=x" titolo="The points $(3,1)$ and $(1,3)$ are symmetric about the line $y=x$."}

:::

:::attenzione
The notation $f^{-1}$ denotes the inverse. For $f(x)=2x$ on the entire real line, $f^{-1}(x)=\dfrac{x}{2}$, while the reciprocal of the function is $\dfrac{1}{f(x)}=\dfrac{1}{2x}$ for $x\neq 0$. The two expressions describe different operations.
:::

## Powers, absolute value and transformations

:::definizione{#potenze-e-valore-assoluto titolo="Graphs of power functions"}
For a positive integer $n$, $x^n$ is defined on $\mathbb{R}$. If $n$ is even, $(-x)^n=x^n$, so the graph is symmetric about the vertical axis. If $n$ is odd, $(-x)^n=-x^n$, so the graph is symmetric about the origin. With a negative integer exponent, $x^{-n}=\dfrac{1}{x^n}$, so $x=0$ is excluded. A square root $x^{\frac12}=\sqrt{x}$ instead requires $x\geq 0$.
:::

:::osservazione
::grafico{f="x^2;x^3" xmin=-2 xmax=2 ymin=-4.2 ymax=4.4 punti="-1,1,pieno;-1,-1,pieno;0,0,pieno;1,1,pieno" titolo="For $x^2$, reversing the sign of $x$ leaves the output unchanged. For $x^3$, it also reverses the sign of the output."}
:::

:::definizione{titolo="Absolute value and distance"}
The absolute value $|x|$ is the distance from $x$ to $0$. For $x\geq 0$, $|x|=x$, whereas for $x<0$, $|x|=-x$. It follows that $|x-a|$ is the distance from $x$ to $a$. The inequality $|x-a|\leq r$, with $r\geq 0$, is therefore equivalent to $x\in[a-r,a+r]$.
:::

:::esempio{titolo="Translations and reflections"}
The graph of $f(x-h)+k$ is obtained by shifting the graph of $f$ by $h$ units horizontally and $k$ units vertically. The point $(u,f(u))$ moves to $(u+h,f(u)+k)$. A minus sign in front of $f$ instead reverses the sign of the $y$-coordinate. The graph of $y=1-|x-2|$ has vertex $(2,1)$, because the absolute value is smallest at $x=2$. The zeros follow from $|x-2|=1$, so they are $x=1$ and $x=3$.

::grafico{f="abs(x);1-abs(x-2)" xmin=-3 xmax=5 ymin=-3 ymax=5 punti="2,1,pieno;1,0,pieno;3,0,pieno" titolo="The vertical line $x=2$ is the axis of symmetry of $y=1-|x-2|$."}

:::

:::osservazione
The vertical scaling $y=cf(x)$ multiplies every $y$-coordinate by $c$. For example, $y=3x^2$ passes through $(1,3)$ and $(2,12)$, whereas $y=x^2$ passes through $(1,1)$ and $(2,4)$. The transformation $y=f(cx)$ changes the horizontal scale. For $c>0$, a point with $x$-coordinate $u$ on the original graph has $x$-coordinate $\dfrac{u}{c}$ on the transformed graph, since $cx=u$.
:::

## Exponentials and logarithms

:::definizione{#esponenziali-e-logaritmi titolo="Exponential and logarithmic functions"}
For a base $a>0$ with $a\neq 1$, the exponential $a^x$ is defined for every $x\in\mathbb{R}$, takes only positive values and passes through $(0,1)$. It is increasing for $a>1$ and decreasing for $0<a<1$. Its inverse is the **logarithm** to base $a$. For $b>0$, the relation has two equivalent forms.
$$
\log_a b=c \quad\Longleftrightarrow\quad a^c=b.
$$
The graph of $\log_a x$ passes through $(1,0)$, is defined for $x>0$, and has the vertical asymptote $x=0$. The exponential and logarithm with the same base are either both increasing or both decreasing.
:::

:::esempio{titolo="Graphical comparison for a fractional base"}
To solve $\left(\dfrac12\right)^x\geq \dfrac14$, write $\dfrac14=\left(\dfrac12\right)^2$. Since the function $(\dfrac12)^x$ is decreasing, its $y$-coordinate is at least $\dfrac14$ for $x\leq 2$. The horizontal line $y=\dfrac14$ identifies the level for comparison.

::grafico{f="(1/2)^x;1/4" xmin=-1.5 xmax=4 ymin=-0.15 ymax=2.5 punti="2,0.25,pieno" titolo="The portion of the curve at or above $y=\dfrac14$ corresponds to $x\leq 2$."}

:::

:::osservazione
For $u,v>0$ and $r\in\mathbb R$, the logarithm laws give
$$
\begin{aligned}
\log_a(uv)&=\log_a u+\log_a v,\\
\log_a\left(\frac{u}{v}\right)&=\log_a u-\log_a v,\\
\log_a(u^r)&=r\log_a u.
\end{aligned}
$$
The first identity follows from the exponent laws. If $u=a^p$ and $v=a^q$, their product is $a^{p+q}$, so its logarithm is $p+q$. The quotient and the power follow from the same principle. To change to a new base $b>0$, $b\neq 1$, use $a^{\log_a u}=u$ to obtain $(\log_a u)\log_b a=\log_b u$, so $\log_a u=\dfrac{\log_b u}{\log_b a}$.
:::

:::esempio{titolo="An equation with two arguments"}
In the equation $\log_2(x-1)+\log_2(x+1)=3$, both arguments are positive when $x>1$. On this set the equation is equivalent to $\log_2(x^2-1)=3$. Rewriting it in exponential form yields $x^2-1=8$, so $x^2=9$. The admissible solution is $x=3$, since $x=-3$ is outside the domain.
:::

:::esempio{titolo="A logarithmic inequality with a base below one"}
For $\log_{\frac13}(x-2)<-1$ the domain is $x>2$. The level $-1$ is the logarithm of $3$ to base $\dfrac13$. Since the function is decreasing, $\log_{\frac13}(x-2)<\log_{\frac13}3$ is equivalent to $x-2>3$. Taking the domain into account gives $x>5$.
:::

:::esempio{titolo="The zero of a shifted logarithm"}
The graph of $y=\log_3(x+2)$ is obtained by shifting the graph of $y=\log_3 x$ two units to the left. The vertical asymptote is $x=-2$ and the graph crosses the horizontal axis at $-1$, because $\log_3 1=0$. To the right of $-1$ the graph lies above the horizontal axis, so the inequality $\log_3(x+2)>0$ has solution $x>-1$.

::grafico{f="log(x+2)/log(3);0" xmin=-3 xmax=6 ymin=-2.5 ymax=2.3 asintoti="x=-2" punti="-1,0,pieno;1,1,pieno" legenda="y=\log_3(x+2);y=0" titolo="For $x>-1$, the increasing graph lies above the horizontal axis."}

:::

## Plane geometry

:::definizione{#geometria-piana titolo="Perimeter, area and height"}
The **perimeter** measures the length of the boundary. The **area** measures the size of the region inside it. A triangle with base $b$ and height $h$ has area $\dfrac{bh}{2}$. The height is the perpendicular distance from the opposite vertex to the line containing the base. Two copies of the triangle placed together form a parallelogram with base $b$ and height $h$, so each copy has half of the area $bh$.
:::

:::osservazione
A rectangle with side lengths $a,b$ has perimeter $2(a+b)$ and area $ab$. A square with side length $s$ has perimeter $4s$, area $s^2$ and diagonal $s\sqrt 2$ by the Pythagorean theorem. A trapezoid with parallel sides of lengths $B,b$ and height $h$ has area $\dfrac{(B+b)h}{2}$. Two congruent copies with the bases arranged in reverse order form a parallelogram with base $B+b$ and height $h$.
:::

:::esempio{titolo="Finding the height of an isosceles trapezoid"}
An isosceles trapezoid has bases of lengths $14$ and $8$, and legs of length $5$. The difference between the base lengths is $6$. Each horizontal offset along the longer base is $3$ because the triangles at the sides are congruent. By the Pythagorean theorem, their height is $\sqrt{5^2-3^2}=4$. The area is therefore $\dfrac{(14+8)\cdot 4}{2}=44$ square units.

::grafico{linee="0,0 14,0 11,4 3,4 0,0" segmenti="3,0,3,4;11,0,11,4" punti="0,0,pieno;3,4,pieno;11,4,pieno;14,0,pieno" xmin=-1 xmax=15 ymin=-1 ymax=5.5 uguale=1 assi=0 etichette="7,-0.55,14;7,4.5,8;1,2.55,5;3.9,1.9,4" titolo="The heights separate the central rectangle from two right triangles, each with a horizontal leg of length $3$."}

:::

:::definizione{titolo="Circle, arc and sector"}
A circle of radius $r$ has area $\pi r^2$ and circumference $2\pi r$. A sector with central angle $\alpha$ in degrees occupies the fraction $\dfrac{\alpha}{360^\circ}$ of the circle. Multiplying the circumference by the same fraction gives the arc length. For $r=6$ and $\alpha=120^\circ$, the sector has area $\dfrac13\cdot 36\pi=12\pi$ and the arc length is $\dfrac13\cdot 12\pi=4\pi$.
:::

:::osservazione
For similar figures, a ratio $k>0$ between corresponding lengths gives a ratio $k^2$ between areas, because both the base and the height are multiplied by $k$. If corresponding sides of two figures are in the ratio $\dfrac32$, their areas are in the ratio $\dfrac94$. The perimeters are still in the ratio $\dfrac32$.
:::

:::esempio{titolo="The line segment joining two midpoints"}
In a triangle $ABC$, let $M$ and $N$ be the midpoints of $AB$ and $AC$. Triangles $AMN$ and $ABC$ share the angle at $A$, and $AM=\dfrac12 AB$ and $AN=\dfrac12 AC$. The triangles are therefore similar by the side-angle-side criterion. It follows that $MN$ is parallel to $BC$ and half as long. The area of $AMN$ is one quarter of the area of $ABC$.
:::

## Coordinates, distances and lines

:::definizione{#rette-e-distanze titolo="Distance between two points"}
For $A=(x_A,y_A)$ and $B=(x_B,y_B)$, differences in coordinates give the components of the displacement from $A$ to $B$. The distance $d(A,B)$ is the hypotenuse of the right triangle with legs of lengths $|x_B-x_A|$ and $|y_B-y_A|$. Therefore
$$
d(A,B)=\sqrt{(x_B-x_A)^2+(y_B-y_A)^2}.
$$
The midpoint coordinates are the averages of the respective $x$- and $y$-coordinates, because each coordinate changes by half the corresponding displacement.
:::

:::osservazione
The same idea as for a midpoint applies to any fraction of the segment. For $0\leq t\leq 1$, the point that is $t$ times the length of $AB$ away from $A$ in the direction of $B$ has coordinates
$$
P=\bigl(x_A+t(x_B-x_A),\, y_A+t(y_B-y_A)\bigr).
$$
For example, between $A=(1,1)$ and $B=(9,5)$, taking $t=\dfrac14$ gives $P=(3,2)$. The distance from $A$ is one quarter of $AB$ and the distance from $B$ is three quarters, so the ratio of the two distances is $\dfrac13$.
:::

:::definizione{titolo="Slope and equation of a line"}
If $x_A\neq x_B$, the **slope** of the line through $A$ and $B$ is
$$
m=\frac{y_B-y_A}{x_B-x_A}.
$$
The $y$-coordinate changes by $m$ for every unit increase in the $x$-coordinate. The line with slope $m$ through $A$ is given by $y-y_A=m(x-x_A)$. If the $x$-coordinates coincide and the points are distinct, the line is vertical and has equation $x=x_A$. A line written as $y=mx+q$ meets the vertical axis at $(0,q)$.
:::

:::esempio{titolo="Using a slope and a known point"}
The line through $A=(-1,4)$ and $B=(3,2)$ has slope
$$
m=\frac{2-4}{3-(-1)}=-\frac12.
$$
From $y-4=-\dfrac12(x+1)$ we obtain $y=-\dfrac12x+\dfrac72$. To find the point with $x$-coordinate $5$, substitute $x=5$ into the formula. This gives $y=1$, so the point is $(5,1)$.
:::

:::osservazione
Two distinct lines with equal slopes are parallel. Two nonvertical lines are perpendicular if and only if the product of their slopes is $-1$. Their direction vectors $(1,m_1)$ and $(1,m_2)$ have dot product $1+m_1m_2$, and perpendicularity is equivalent to that product being zero. A vertical line is perpendicular to a horizontal line. For example, a line perpendicular to $y=-\dfrac12x+\dfrac72$ has slope $2$.
:::

:::esempio{titolo="Finding an intersection"}
To find the point shared by $y=2x+1$ and $y=-x+7$, equate their $y$-coordinates at the same $x$-coordinate. The equation $2x+1=-x+7$ gives $x=2$. Substitution into either line gives $y=5$. The point $(2,5)$ lies on both lines because it satisfies both equations.

::grafico{f="2*x+1;7-x" xmin=-0.5 xmax=4.5 ymin=-0.5 ymax=8 punti="2,5,pieno,P" titolo="The point $P=(2,5)$ is the only intersection because the slopes are different."}

:::

## Parabolas and circles

:::definizione{#parabole-e-circonferenze titolo="Parabola with a vertical axis"}
Let $a\neq 0$. In the form $y=a(x-h)^2+k$, the parabola has vertex $(h,k)$ and axis of symmetry $x=h$. The vertex is the minimum point if $a>0$ and the maximum point if $a<0$, because $(x-h)^2\geq 0$. To put $y=ax^2+bx+c$ in this form, complete the square. The $x$-coordinate of the vertex is $h=-\dfrac{b}{2a}$ and its $y$-coordinate is $k=ah^2+bh+c$.
:::

:::esempio{titolo="Finding intersections and tangency"}
The intersection of $y=x^2-2x+3$ with $y=2x-1$ requires $x^2-2x+3=2x-1$. Moving all terms to the left gives $(x-2)^2=0$. The only root is a double root, so the nonvertical line is tangent at $(2,3)$. In general, for a nonvertical line, the number of intersections is determined by the discriminant of the resulting quadratic equation. A vertical line $x=c$ meets the parabola at one point for any $c$. This count alone does not imply tangency.

::grafico{f="x^2-2*x+3;2*x-1" xmin=-0.5 xmax=4.5 ymin=-1 ymax=8 punti="2,3,pieno" titolo="The difference between the two $y$-coordinates is $(x-2)^2$. The line meets the parabola at one point and is tangent at $(2,3)$."}

:::

:::definizione{titolo="Circle with a given center and radius"}
The points at distance $r>0$ from $C=(h,k)$ form the circle with equation
$$
(x-h)^2+(y-k)^2=r^2.
$$
If the equation is expanded, the center and radius can be recovered by completing the square in both $x$ and $y$. For example, $x^2+y^2-4x+2y-4=0$ gives $(x-2)^2+(y+1)^2=9$, so the center is $(2,-1)$ and the radius is $3$.
:::

:::osservazione
A line at distance $d$ from the center of a circle is secant if $d<r$, tangent if $d=r$, and external if $d>r$. Let $H$ be the foot of the perpendicular from the center to the line. For every point $P$ on the line, $CP^2=d^2+HP^2$ by the Pythagorean theorem. Setting $CP=r$ gives $HP^2=r^2-d^2$, from which the three cases follow. For the circle $(x-2)^2+(y+1)^2=9$, the line $x=5$ is $3$ units from the center and is tangent at $(5,-1)$.
:::

## Trigonometry and right triangles

:::definizione{#trigonometria titolo="Angles and the unit circle"}
An angle of one radian subtends an arc of length $1$ on the unit circle. A full revolution measures $2\pi$ radians, so $180^\circ$ corresponds to $\pi$ radians. The coordinates of the point on the unit circle associated with the angle $\theta$ are $(\cos\theta,\sin\theta)$. This gives $\sin^2\theta+\cos^2\theta=1$. When $\cos\theta\neq 0$, tangent is defined as $\tan\theta=\dfrac{\sin\theta}{\cos\theta}$.
:::

:::osservazione
Sine and cosine have range $[-1,1]$ and period $2\pi$. Sine is odd and cosine is even. For instance, $\cos(-\theta)=\cos\theta$ because reflection across the horizontal axis leaves the $x$-coordinate unchanged. Tangent has period $\pi$ and is undefined at $\theta=\dfrac{\pi}{2}+k\pi$ for $k\in\mathbb Z$, since cosine is zero there. There are vertical asymptotes at these excluded inputs.

::grafico{f="sin(x);cos(x)" xmin=-3.4 xmax=6.6 ymin=-1.3 ymax=1.3 punti="0,0,pieno;0,1,pieno;1.5708,1,pieno;3.1416,-1,pieno" titolo="At $0$, sine is $0$ and cosine is $1$. Sine reaches $1$ at $\dfrac{\pi}{2}$ and cosine is $-1$ at $\pi$."}

::grafico{f="tan(x)" xmin=-3.4 xmax=3.4 ymin=-3.2 ymax=3.2 asintoti="x=-1.5708;x=1.5708" punti="0,0,pieno" titolo="In this viewing window, tangent has vertical asymptotes at $\pm\dfrac{\pi}{2}$."}

:::

:::definizione{titolo="Inverse trigonometric functions"}
To invert sine, cosine and tangent, choose an interval on which each function is one-to-one. The domain of $\arcsin$ is $[-1,1]$, and its output is an angle in $\left[-\dfrac{\pi}{2},\dfrac{\pi}{2}\right]$. The domain of $\arccos$ is the same, and its output is an angle in $[0,\pi]$. The domain of $\arctan$ is $\mathbb R$, and its output is an angle in $\left(-\dfrac{\pi}{2},\dfrac{\pi}{2}\right)$. For example, $\arcsin\left(\dfrac12\right)=\dfrac{\pi}{6}$ because this is the only angle in that interval where sine equals $\dfrac12$.
:::

:::osservazione
::grafico{f="asin(x);acos(x);atan(x)" xmin=-2.8 xmax=2.8 ymin=-1.9 ymax=3.4 punti="-1,-1.5708,pieno;-1,3.1416,pieno;0,0,pieno;0,1.5708,pieno;1,0,pieno;1,1.5708,pieno" titolo="Inverse sine and inverse cosine are defined for $-1\leq x\leq 1$. Inverse tangent is defined on the entire real line."}
:::

:::osservazione
In an isosceles right triangle, the legs are equal and the hypotenuse is $\sqrt2$ times as long as either leg. This gives sine and cosine at $45^\circ$. Dividing an equilateral triangle of side length $2$ along its height gives a right triangle with legs $1$ and $\sqrt3$ and hypotenuse $2$. The side ratios give the values for $30^\circ$ and $60^\circ$.

| $\theta$ | $\sin\theta$ | $\cos\theta$ | $\tan\theta$ |
| --- | --- | --- | --- |
| $30^\circ=\dfrac{\pi}{6}$ | $\dfrac12$ | $\dfrac{\sqrt3}{2}$ | $\dfrac{\sqrt3}{3}$ |
| $45^\circ=\dfrac{\pi}{4}$ | $\dfrac{\sqrt2}{2}$ | $\dfrac{\sqrt2}{2}$ | $1$ |
| $60^\circ=\dfrac{\pi}{3}$ | $\dfrac{\sqrt3}{2}$ | $\dfrac12$ | $\sqrt3$ |
:::

:::esempio{titolo="Finding lengths from an acute angle"}
In a right triangle, a ladder $10\,\mathrm{m}$ long makes an angle of $60^\circ$ with the horizontal ground. The height reached is the side opposite the angle. Since sine is the ratio of the opposite side to the hypotenuse, the height is $10\sin60^\circ=5\sqrt3\,\mathrm{m}$. The horizontal distance to the wall is the adjacent side and equals $10\cos60^\circ=5\,\mathrm{m}$. The relation $5^2+(5\sqrt3)^2=10^2$ checks these values using the Pythagorean theorem.
:::

:::osservazione
For an acute angle in a right triangle, tangent is the ratio of the opposite side to the adjacent side. If a ramp rises $3\,\mathrm{m}$ over a horizontal distance of $4\,\mathrm{m}$, its angle of inclination is $\arctan\left(\dfrac34\right)$. If the cosine of an acute angle is known, the Pythagorean identity gives the sine by taking the positive square root. For example, with $\cos\theta=\dfrac45$ and $0<\theta<\dfrac{\pi}{2}$, we get $\sin\theta=\sqrt{1-\dfrac{16}{25}}=\dfrac35$ and hence $\tan\theta=\dfrac34$.
:::

:::osservazione
The addition formulas $\sin(u+v)=\sin u\cos v+\cos u\sin v$ and $\cos(u+v)=\cos u\cos v-\sin u\sin v$ give the double-angle formulas by setting $u=v=\theta$. For cosine, the Pythagorean identity gives equivalent forms, so
$$
\begin{aligned}
\sin(2\theta)&=2\sin\theta\cos\theta,\\
\cos(2\theta)&=\cos^2\theta-\sin^2\theta\\
&=1-2\sin^2\theta=2\cos^2\theta-1.
\end{aligned}
$$
For example, if $\cos\theta=\dfrac13$, then $\cos(2\theta)=2\cdot\dfrac19-1=-\dfrac79$. The form containing only cosine is enough when $\cos\theta$ is given.
:::

:::osservazione
For $A\neq 0$ and $b\neq 0$, the function $y=A\cos(bx)+c$ has smallest positive period $\dfrac{2\pi}{|b|}$, because over that interval the argument changes by one full turn in either direction. The same rule holds for sine. The coefficient $A$ controls the amplitude, and $c$ shifts the graph vertically. For example, the function $y=2\sin(4x)+1$ repeats every $\dfrac{\pi}{2}$.
:::
