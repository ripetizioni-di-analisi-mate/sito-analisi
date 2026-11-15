---
titolo: Hyperbolas and linear fractional functions
sommario: The difference between the distances from the foci gives the equations of a hyperbola. Standard form can be used to find vertices, asymptotes, and intersections before studying linear fractional functions.
---

## Difference of distances

:::definizione{#definizione titolo="Definition in terms of the foci"}
Let $F_1$ and $F_2$ be two distinct points, called the **foci**, at distance $2c$ from each other. For a fixed $a$ with $0<a<c$, a **hyperbola** is the set of points $P$ satisfying
$$
|PF_1-PF_2|=2a.
$$
If $PF_1-PF_2=2a$, the point is closer to $F_2$. If $PF_1-PF_2=-2a$, it is closer to $F_1$. The two signs determine the **two branches**. The perpendicular bisector of $F_1F_2$ separates them because every point on that line has a distance difference of zero.
:::

:::esempio{titolo="Locating a branch from the distances"}
Let $F_1=(-5,0)$ and $F_2=(5,0)$. The point $P=(3,0)$ is $8$ units from $F_1$ and $2$ units from $F_2$, so it belongs to the hyperbola with constant $2a=6$. The distances are reversed for $Q=(-3,0)$, which lies on the other branch. The point $R=(5,\frac{16}{3})$ is also on the first branch. Its distance from $F_2$ is $\dfrac{16}{3}$ and its distance from $F_1$ is
$$
\sqrt{10^2+\left(\frac{16}{3}\right)^2}
=\sqrt{\frac{900+256}{9}}=\frac{34}{3}.
$$
The difference is $\dfrac{34}{3}-\dfrac{16}{3}=6$, so $R$ and $P$ meet the same condition despite having different distances from the foci.

::grafico{f="4*sqrt(x^2-9)/3;-4*sqrt(x^2-9)/3" xmin=-8 xmax=8 ymin=-6 ymax=8 uguale=1 punti="-5,0,pieno,F_1;5,0,pieno,F_2;3,0,pieno,P;-3,0,pieno,Q;5,5.333333333,pieno,R" segmenti="-5,0,5,5.333333333;5,0,5,5.333333333" legenda="y=\dfrac{4}{3}\sqrt{x^2-9};y=-\dfrac{4}{3}\sqrt{x^2-9}" titolo="The segments $RF_1$ and $RF_2$ have different lengths, with a difference of $6$."}

:::

:::attenzione
The absolute difference is at most $2c$, by the triangle inequality applied to $P,F_1,F_2$. If $2a>2c$, the locus is empty. When $2a=2c$, the locus consists of two rays on the line through the foci, extending outward from the segment and including its endpoints. When $a=0$, the locus is the perpendicular bisector of the segment between the foci. These boundary cases explain why the definition requires $0<a<c$.
:::

## Standard equations and vertices

::::teorema{#assi titolo="Equation of an origin-centered hyperbola"}
With the foci at $(-c,0)$ and $(c,0)$, set $b^2=c^2-a^2$. The **transverse semiaxis** $a$ is the distance from the center to each vertex. The number $b$, called the **conjugate semiaxis**, determines the slopes of the asymptotes together with $a$. The equation is
$$
\frac{x^2}{a^2}-\frac{y^2}{b^2}=1,
\qquad a,b>0.
$$
Set $y=0$ to find the vertices because the line through the foci meets the branches at those points. If the foci instead lie on the $y$-axis, the form is $\dfrac{y^2}{a^2}-\dfrac{x^2}{b^2}=1$ and the vertices are $(0,\pm a)$. The orientation is determined by the **positive term**, even when its denominator is the smaller one.

:::dimostrazione
Write $d_1$ and $d_2$ for the distances from $(-c,0)$ and $(c,0)$. On the right branch, $d_1-d_2=2a$. The squares of the two distances give
$$
\begin{aligned}
2a(d_1+d_2)&=d_1^2-d_2^2\\
&=(x+c)^2+y^2-(x-c)^2-y^2\\
&=4cx .
\end{aligned}
$$
Subtract $d_1-d_2=2a$ from $d_1+d_2=\dfrac{2cx}{a}$ and divide by $2$ to get $d_2=\dfrac{cx}{a}-a$. Since $d_2^2=(x-c)^2+y^2$, it follows that
$$
\begin{aligned}
\frac{c^2x^2}{a^2}-2cx+a^2&=x^2-2cx+c^2+y^2\\
\frac{c^2-a^2}{a^2}x^2-y^2&=c^2-a^2\\
\frac{x^2}{a^2}-\frac{y^2}{b^2}&=1.
\end{aligned}
$$
Conversely, the standard equation implies $|x|\geq a$. For $x\geq a$, we have $\dfrac{cx}{a}\geq c>a$. Substituting $y^2=b^2(\dfrac{x^2}{a^2}-1)$ into the two distance formulas gives
$$
d_1^2=\left(\frac{cx}{a}+a\right)^2,
\qquad
d_2^2=\left(\frac{cx}{a}-a\right)^2.
$$
The two expressions being squared are positive, so the distances are $\dfrac{cx}{a}+a$ and $\dfrac{cx}{a}-a$. Their difference is $2a$. Reflection across the $y$-axis swaps the distances and gives the other branch, with the same absolute difference.
:::
::::

:::esempio{titolo="Orientation and symmetries"}
Dividing $9y^2-4x^2=36$ by $36$ gives $\dfrac{y^2}{4}-\dfrac{x^2}{9}=1$. Hence $a=2$, $b=3$, and the vertices are $(0,2)$ and $(0,-2)$. The substitution $x\mapsto -x$ preserves the equation and maps each branch to itself. The substitution $y\mapsto -y$ swaps the two branches. Combining the two reflections gives symmetry through the origin.
:::

## Foci and eccentricity

:::teorema{#fuochi titolo="Focal distance and eccentricity"}
Each focus is at distance $c=\sqrt{a^2+b^2}$ from the center. For horizontal branches the foci are $(\pm c,0)$, and for vertical branches they are $(0,\pm c)$. The ratio $e=\dfrac{c}{a}$ is the **eccentricity**. Since $b^2>0$, we have $c>a$ and hence $e>1$. Multiplying all lengths by the same positive factor leaves the ratio unchanged, so it describes the shape of the hyperbola independently of its scale.
:::

:::esempio{titolo="Recovering the semiaxes from focal data"}
The foci are $(0,-5)$ and $(0,5)$, and the absolute difference between the distances is $8$. The distance between the foci gives $2c=10$, and the difference gives $2a=8$. Thus
$$
\begin{aligned}
c&=5,\qquad a=4,\\
b^2&=c^2-a^2=25-16=9,\\
e&=\frac54,\qquad \frac{y^2}{16}-\frac{x^2}{9}=1.
\end{aligned}
$$
The $y$ term is positive because the foci are on the vertical axis. The number $8$ is twice the transverse semiaxis. The distance between the foci is $10$. Together these data determine the positions of the vertices and how widely the branches open.
:::

:::osservazione
Since $c^2=a^2+b^2$, we have $e^2=1+\dfrac{b^2}{a^2}$. With $a$ fixed, increasing $e$ increases $b$ and changes the slopes of the asymptotes. For example, $a=3$ and $e=\sqrt2$ give $b^2=9$, while $a=3$ and $e=\dfrac53$ give $b^2=16$. The same distance from the vertices to the center can therefore give different shapes.
:::

## Asymptotes and the reference rectangle

::::teorema{#asintoti titolo="Asymptotes of centered hyperbolas"}
For a hyperbola with a horizontal transverse axis, the ends of the branches approach the lines $y=\pm\dfrac{b}{a}x$. These are the diagonals of the rectangle with corners $(\pm a,\pm b)$. In vertical form the rectangle is $2b$ units wide and $2a$ units high, so the slopes are $\pm\dfrac{a}{b}$. In both cases the absolute slope is the vertical half-side divided by the horizontal half-side.

:::dimostrazione
For $x\geq a$, the upper ordinate is $y=\dfrac{b}{a}\sqrt{x^2-a^2}$. The vertical gap between the rising line and that part of the curve is positive. Multiplying by the conjugate gives
$$
\begin{aligned}
\frac{b}{a}x-\frac{b}{a}\sqrt{x^2-a^2}
&=\frac{b}{a}\left(x-\sqrt{x^2-a^2}\right)\\
&=\frac{ab}{x+\sqrt{x^2-a^2}} .
\end{aligned}
$$
As $x$ grows without bound, the denominator grows without bound and the gap approaches zero. Symmetry gives the other three parts of the curve, two for each line. Swapping the coordinates turns the horizontal case into the vertical case and replaces the slopes with their reciprocals.
:::
::::

:::esempio{titolo="Sketching the graph from the diagonals"}
For $\dfrac{x^2}{9}-\dfrac{y^2}{4}=1$, the rectangle extends from $x=-3$ to $x=3$ and from $y=-2$ to $y=2$. The rising diagonal passes through the center and $(3,2)$, so its slope is $\dfrac{2}{3}$. The vertices are $(\pm3,0)$, and from there the branches approach the extended diagonals. At $x=6$ the upper point has ordinate $2\sqrt3$, while the rising line has ordinate $4$. The vertical gap is still positive, as the rationalized expression predicts.

::grafico{f="2*sqrt(x^2-9)/3;-2*sqrt(x^2-9)/3;2*x/3;-2*x/3" xmin=-8 xmax=8 ymin=-6 ymax=6 uguale=1 punti="-3,0,pieno,V_1;3,0,pieno,V_2" segmenti="-3,-2,3,-2;3,-2,3,2;3,2,-3,2;-3,2,-3,-2;6,3.464101615,6,4" legenda="y=\dfrac{2}{3}\sqrt{x^2-9};y=-\dfrac{2}{3}\sqrt{x^2-9};y=\dfrac23x;y=-\dfrac23x" titolo="The rectangle gives the slopes of the diagonals, while the vertices lie on the branches."}

:::

## Points, lines, and intersections

:::teorema{#punti titolo="Vertical and horizontal sections"}
To find the points with abscissa $s$ on a horizontal hyperbola, substitute $x=s$ to get $y^2=b^2(\dfrac{s^2}{a^2}-1)$. The sign of the right-hand side determines the number of points.

- If $|s|<a$, the right-hand side is negative and there is no intersection.
- If $|s|=a$, the only ordinate is $0$ and the point is a vertex.
- If $|s|>a$, the two ordinates have opposite signs and the points lie on the same branch.

A horizontal line $y=t$ instead gives $x^2=a^2(1+\dfrac{t^2}{b^2})>0$. In this case there is one point on each branch at every height. The points can be found from the equation or seen where the line crosses the graph.
:::

:::esempio{titolo="A vertical chord and its length"}
Consider the hyperbola $\dfrac{x^2}{9}-\dfrac{y^2}{16}=1$ and the line $x=5$. Since $5>3$, we expect two points on the right branch. Substituting the abscissa gives
$$
\begin{aligned}
\frac{y^2}{16}&=\frac{25}{9}-1=\frac{16}{9}\\
y^2&=\frac{256}{9}\\
y&=\pm\frac{16}{3}.
\end{aligned}
$$
The points have the same abscissa, so their distance is the difference between their ordinates, $\dfrac{32}{3}$. The segment joining them is a **chord** of the hyperbola with midpoint $(5,0)$.

::grafico{f="4*sqrt(x^2-9)/3;-4*sqrt(x^2-9)/3" xmin=-6 xmax=7 ymin=-7 ymax=7 uguale=1 punti="5,5.333333333,pieno,A;5,-5.333333333,pieno,B;-3,0;3,0" segmenti="5,-5.333333333,5,5.333333333" legenda="y=\dfrac43\sqrt{x^2-9};y=-\dfrac43\sqrt{x^2-9}" titolo="Chord $AB$ lies on the right branch and has length $\dfrac{32}{3}$."}

:::

:::attenzione
For a slanted line, substitute $y=mx+q$ and check the degree of the resulting equation. For example, with $x^2-y^2=1$ and $y=x+1$, the $x^2$ terms cancel and $-2x-1=1$ remains. The only point is $(-1,0)$. The line is parallel to an asymptote and its sole intersection comes from a linear equation. The tangent at the vertex $(-1,0)$ is the vertical line $x=-1$.
:::

## Rectangular hyperbolas

:::definizione{#equilatera titolo="Perpendicular asymptotes and constant product"}
A hyperbola is **rectangular** if the two semiaxes have equal lengths. The slopes of its asymptotes are then $\pm1$, so the lines are perpendicular. Using the asymptotes as the new axes gives the form $uv=K$, with $K\ne0$. For example, for $x^2-y^2=a^2$ we can choose $u=\dfrac{x+y}{\sqrt2}$ and $v=\dfrac{x-y}{\sqrt2}$. The coordinates are measured along two perpendicular directions using the same scale, and their product is
$$
uv=\frac{(x+y)(x-y)}{2}=\frac{a^2}{2}.
$$
In coordinates $x,y$ based on the asymptotes, the form $xy=K$ is equivalent to $y=\dfrac{K}{x}$ for $x\ne0$. If $K>0$, the coordinates have the same sign and the branches lie in the first and third quadrants. If $K<0$, the signs are opposite and the branches lie in the second and fourth quadrants.
:::

:::esempio{titolo="One point determines the product"}
For a rectangular hyperbola with the coordinate axes as asymptotes, the point $P=(-2,3)$ gives $K=(-2)\cdot3=-6$. The curve is therefore $xy=-6$. Projecting $P$ onto the two axes gives a rectangle with side lengths $2$ and $3$. For any other point on the curve the side lengths are $|x|$ and $|y|$, and the area remains $|xy|=6$. The equation can therefore be read as a constant-area condition.
:::

## Translated hyperbolas

:::teorema{#traslata titolo="Translating the center, vertices, and asymptotes"}
To place the center at $C=(h,k)$, measure coordinates relative to $C$. Thus $x-h$ replaces $x$ and $y-k$ replaces $y$ in the equation centered at the origin. In particular, the horizontal form becomes
$$
\frac{(x-h)^2}{a^2}-\frac{(y-k)^2}{b^2}=1,
\qquad
y-k=\pm\frac{b}{a}(x-h) .
$$
The second formula gives the two lines through $C$ with the original slopes. The vertices are $(h\pm a,k)$ and the foci are $(h\pm c,k)$. A translation preserves all distances, so it also preserves $a$, $b$, $c$, and eccentricity. For the vertical form, swap the roles of the relative coordinates and place the vertices and foci on the line $x=h$.
:::

:::esempio{titolo="Finding the center by completing the square"}
Consider $4x^2-9y^2-8x-36y-68=0$. Factor the coefficient from each pair of terms in the same variable, including the sign of $-9$. Then complete the squares.
$$
\begin{aligned}
4(x^2-2x)-9(y^2+4y)&=68\\
4\big((x-1)^2-1\big)-9\big((y+2)^2-4\big)&=68\\
4(x-1)^2-9(y+2)^2&=36\\
\frac{(x-1)^2}{9}-\frac{(y+2)^2}{4}&=1 .
\end{aligned}
$$
This gives $C=(1,-2)$ and $a=3$. The vertices are $(-2,-2)$ and $(4,-2)$. The asymptotes are $y+2=\pm\dfrac23(x-1)$, so moving the center changes the intercepts of the lines and preserves their slopes.
:::

## Linear fractional functions

::::teorema{#omografica titolo="Translated reciprocal form"}
Let $a,b,c,d$ be the coefficients of $f(x)=\dfrac{ax+b}{cx+d}$, with $c\ne0$. Its domain is given by $cx+d\ne0$. If $ad-bc\ne0$, the graph equation is equivalent to
$$
(x-h)(y-k)=K,\qquad
h=-\frac dc,\qquad k=\frac ac,\qquad K=\frac{bc-ad}{c^2}.
$$
The graph is therefore a rectangular hyperbola centered at $(h,k)$ with asymptotes $x=h$ and $y=k$. The domain excludes $h$ and the range excludes $k$. The sign of $K$ determines which regions relative to the asymptotes contain the two branches.

:::dimostrazione
To separate off the constant part, write the numerator as a multiple of the denominator plus a constant. For $x\ne-\dfrac dc$, this gives
$$
\begin{aligned}
\frac{ax+b}{cx+d}
&=\frac{\frac ac(cx+d)+b-\frac{ad}{c}}{cx+d}\\[4pt]
&=\frac ac+\frac{bc-ad}{c^2}\,\frac{1}{x+\frac dc}.
\end{aligned}
$$
Multiplying $y-\dfrac ac$ by $x+\dfrac dc$ leaves the constant $K$. Since $K\ne0$, the product cannot be zero and the lines $x=h$ and $y=k$ are excluded from the graph. Conversely, every $y\ne k$ is attained at $x=h+\dfrac{K}{y-k}$.
:::
::::

:::esempio{titolo="Asymptotes and intercepts"}
For $f(x)=\dfrac{2x+3}{x-1}$, the identity $2x+3=2(x-1)+5$ gives $f(x)=2+\dfrac{5}{x-1}$. Thus $h=1$, $k=2$, and $K=5$. The differences $x-1$ and $y-2$ have the same sign, so one branch lies above and to the right of the center and the other below and to its left. Setting $y=0$ gives $2x+3=0$, with the domain admitting the solution $x=-\dfrac32$. Setting $x=0$ gives $y=-3$. The intercepts are therefore $\left(-\dfrac32,0\right)$ and $(0,-3)$.

::grafico{f="2+5/(x-1)" xmin=-5 xmax=7 ymin=-5 ymax=9 uguale=1 asintoti="x=1;y=2" punti="1,2,vuoto,C;-1.5,0,pieno,A;0,-3,pieno,B" titolo="The asymptotes divide the plane into four regions. The branches occupy the regions where coordinates relative to the center have the same sign."}

:::

:::attenzione
If $ad-bc=0$, the reciprocal term vanishes. For example, $\dfrac{6x-12}{3x-6}=2$ holds for $x\ne2$ because the factor $x-2$ is canceled on the original domain. The graph is the horizontal line $y=2$ with the point $(2,2)$ removed. In this case the domain restriction gives a hole, whereas with $K\ne0$ it gives a vertical asymptote.
:::
