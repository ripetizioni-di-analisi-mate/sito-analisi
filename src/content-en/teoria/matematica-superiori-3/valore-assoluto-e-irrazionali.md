---
titolo: Absolute value and radical equations
sommario: How to read absolute value as distance and solve equations and inequalities with absolute values and real radicals.
---

## Absolute value as distance

:::definizione{#assoluto titolo="Absolute value"}
The **absolute value** of a real number $u$ is its distance from zero. If $u\geq0$, the distance is $u$. If $u<0$, the distance is $-u$, which is positive in this case. Thus $|-5|=5$ and $|5|=5$. In general, $|u|$ is nonnegative and equals zero only when $u=0$.

The difference $x-a$ is the signed displacement from $a$ to $x$. Therefore $|x-a|$ is the distance between the two points. For example, $|1-4|=3$ and $|7-4|=3$, so $1$ and $7$ are on opposite sides of $4$ at the same distance.
:::

:::esempio{titolo="The two branches of the graph"}
For $y=|x-2|$, the argument $x-2$ is negative to the left of $2$ and nonnegative to the right. The graph is therefore the ray $y=2-x$ for $x<2$ and the ray $y=x-2$ for $x\geq2$. The two lines meet at $(2,0)$. Moving one unit away from $2$ in either direction increases the y-coordinate by one unit.

::grafico{f="abs(x-2)" xmin=-2 xmax=6 ymin=-1 ymax=5 punti="1,1,pieno;2,0,pieno;3,1,pieno" titolo="The points with x-coordinates $1$ and $3$ are both $1$ unit from $2$"}

:::

::::teorema{#distanza-proprieta titolo="Symmetry of distance and constant factors"}
For any real numbers $u,v$, we have $|-u|=|u|$ and $|uv|=|u||v|$. It follows that when $a\neq0$, the absolute value of $ax+b$ is $|a|\left|x+\dfrac ba\right|$. Thus distance is measured from $-\dfrac ba$ and multiplied by $|a|$.

:::dimostrazione
For every real number $u$, the product $u^2$ is nonnegative and its square root is the distance of $u$ from zero. Since $(-u)^2=u^2$, we have $|-u|=|u|$. Also, $|u||v|$ is nonnegative and its square is $u^2v^2=(uv)^2$, so it equals $|uv|$. In the affine case, factor out $a$ to get $ax+b=a\left(x+\dfrac ba\right)$ and apply the product rule.
:::
::::

:::esempio{titolo="Reading the center and scale from one formula"}
Write $|6-2x|=2|x-3|$. The factor $2$ multiplies the distance from $3$. Hence height $4$ corresponds to a horizontal distance of $2$ from that center. The x-coordinates are $1$ and $5$. To check, the argument is $4$ at $x=1$ and $-4$ at $x=5$. The curve has slopes $-2$ and $2$ on its two branches. From $3$ to either of the two x-coordinates, we move two units horizontally and rise four units vertically.

::grafico{f="abs(6-2*x);4" xmin=-0.3 xmax=6.3 ymin=-1 ymax=7 punti="1,4,pieno;3,0,pieno,V;5,4,pieno" titolo="The factor $2$ turns a horizontal distance of $2$ into a height of $4$"}

:::

## Absolute value equations

:::teorema{#equazioni titolo="Two possibilities for the distance"}
Suppose $f$ is defined for the values of $x$ under consideration. For $r>0$, the equation $|f(x)|=r$ is equivalent to $f(x)=r$ or $f(x)=-r$. If $r=0$, only the condition $f(x)=0$ remains. If $r<0$, there are no solutions because absolute value is always nonnegative.

If the right-hand side is an expression $g(x)$, its sign depends on $x$. Work on the common domain under the constraint $g(x)\geq0$, then solve the two equations $f(x)=g(x)$ and $f(x)=-g(x)$. Keep only the roots in the domain that satisfy the constraint.
:::

:::esempio{titolo="A right-hand side that changes sign"}
In $|2x-3|=x$, the right-hand side is nonnegative for $x\geq0$. In the first case $2x-3=x$, so $x=3$. In the second case $2x-3=-x$, so $3x=3$ and $x=1$. Both candidates satisfy $x\geq0$, and indeed $|6-3|=3$ and $|2-3|=1$.

::grafico{f="abs(2*x-3);x" xmin=-1 xmax=4.5 ymin=-1 ymax=6 punti="1,1,pieno;3,3,pieno" titolo="The two intersections solve $|2x-3|=x$"}

:::

:::esempio{titolo="How many intersections does the parameter give?"}
Consider $|x-1|=k+2$ for real $k$. On the graph, intersect the curve $y=|x-1|$ with the horizontal line $y=k+2$. The curve's lowest height is $0$, reached at $x=1$. The parameter value that places the line at that height is $k=-2$.

- For $k<-2$, the line is below the vertex, so there are no intersections.
- For $k=-2$, it meets only the vertex and the solution is $x=1$.
- For $k>-2$, the line crosses both branches. Solving $x-1=k+2$ or $x-1=-(k+2)$ gives $x=k+3$ and $x=-k-1$.

For example, $k=0$ gives height $2$ and solutions $-1$ and $3$. The graph shows why the number of solutions depends on the height and why the two x-coordinates coincide in the boundary case.

::grafico{f="abs(x-1);2;-1" xmin=-3 xmax=5 ymin=-2 ymax=5 punti="-1,2,pieno;1,0,pieno;3,2,pieno" titolo="At height $2$ there are two intersections, at height $0$ only the vertex, and at height $-1$ none"}

:::

:::esempio{titolo="Equal distances give a midpoint"}
The equation $|x+2|=|x-6|$ asks for points equidistant from $-2$ and $6$. Their midpoint is $2$. To verify that it is the only solution, square both sides, which are nonnegative.

$$
\begin{aligned}
(x+2)^2&=(x-6)^2\\[4pt]
x^2+4x+4&=x^2-12x+36\\[4pt]
16x&=32\\[4pt]
x&=2.
\end{aligned}
$$

The polynomials have the same $x^2$ term, which cancels. Substitution gives $|2+2|=|2-6|=4$. The two graphs are symmetric about the vertical line through the midpoint. For example, at $x=0$ the distances are $2$ and $6$, while at $x=4$ they are $6$ and $2$.

::grafico{f="abs(x+2);abs(x-6)" xmin=-4 xmax=8 ymin=-1 ymax=8 punti="-2,0,pieno;6,0,pieno;2,4,pieno,P" titolo="The distances from $-2$ and $6$ are equal at $x=2$"}

:::

## Distances below a threshold

:::teorema{#interne titolo="Distance smaller than a radius"}
For $r>0$, the condition $|f(x)|<r$ is equivalent to $-r<f(x)<r$. The number $f(x)$ must be to the right of $-r$ and to the left of $r$ at the same time. For $|f(x)|\leq r$, the two inequalities are non-strict, so the endpoints are allowed. At $r=0$, the strict comparison is impossible while the non-strict comparison allows only the zeros of $f$. For $r<0$, both comparisons are impossible.
:::

:::esempio{titolo="The sign of the coefficient of the unknown"}
In $|5-2x|<3$, the compound inequality is $-3<5-2x<3$. Subtracting $5$ gives $-8<-2x<-2$. Dividing by $-2$ reverses both inequalities and gives $4>x>1$. The solution set is $(1,4)$. At $x=4$ we get $|5-8|=3$, so that point is excluded. The value $x=2$ is inside the interval and gives $|5-4|=1<3$.
:::

::::teorema{#modulo-minore-variabile titolo="A bound that depends on the unknown"}
Suppose $f$ and $g$ are defined at the same point. The condition $|f(x)|\leq g(x)$ is equivalent to both $-g(x)\leq f(x)$ and $f(x)\leq g(x)$. A strict comparison requires both inequalities to be strict. These two bounds themselves imply that $g(x)$ is nonnegative in the first case and positive in the second.

:::dimostrazione
If $|f(x)|\leq g(x)$, both $f(x)$ and $-f(x)$ are at most $g(x)$ because the absolute value is the larger of the two. Multiplying $-f(x)\leq g(x)$ by $-1$ gives $f(x)\geq-g(x)$. Conversely, the two inequalities imply that both $f(x)$ and $-f(x)$ are at most $g(x)$, so their maximum is as well. The same reasoning applies when both inequalities are strict.
:::
::::

:::esempio{titolo="The comparison reduces to two linear conditions"}
For $|2x-1|\leq x+2$, impose $-x-2\leq2x-1$ and $2x-1\leq x+2$. The first gives $-1\leq3x$, or $x\geq-\dfrac13$. The second gives $x\leq3$. The result is $\left[-\dfrac13,3\right]$. Throughout this interval the right-hand side $x+2$ is positive. At $x=-\dfrac13$ the absolute value and the line have height $\dfrac53$. At $x=3$ they have height $5$. Between the two x-coordinates, the absolute value graph is at or below the line even though the bound changes with $x$.

::grafico{f="abs(2*x-1);x+2" xmin=-2 xmax=4.5 ymin=-1 ymax=8 punti="-0.3333333333,1.6666666667,pieno;3,5,pieno" titolo="The bound increases with $x$ and meets both branches of the absolute value graph"}

:::

:::esempio{titolo="Two tolerances on the same measurement"}
A part of length $x$ in millimeters passes the first inspection when it is at most $2$ units from $50$. A second inspection requires a distance strictly less than $2$ from $51$. The conditions are $|x-50|\leq2$ and $|x-51|<2$. The first gives $[48,52]$. The second gives $(49,53)$. To pass both inspections, take the intersection, so $x\in(49,52]$.

The value $49$ passes the first inspection because its deviation is $1$. Its deviation from the second center is $2$, so $49$ is excluded. At $52$, the deviations from the first and second centers are $2$ and $1$, both allowed. If passing at least one inspection were enough, the union would instead be $[48,53)$. Changing the requirement changes which endpoints are retained.
:::

## Distances above a threshold

:::teorema{#esterne titolo="Distance greater than a radius"}
For $r>0$, the condition $|f(x)|>r$ is equivalent to $f(x)<-r$ or $f(x)>r$. There are two separate rays on the number line, so take their union. For $|f(x)|\geq r$, add the values where $f(x)=-r$ or $f(x)=r$. If $r=0$, the comparison $|f(x)|>0$ excludes the zeros of $f$, while $|f(x)|\geq0$ holds throughout the domain. If $r<0$, both comparisons hold throughout the domain.
:::

:::esempio{titolo="A threshold with two intervals"}
The inequality $|x+1|\geq2$ asks for points at least $2$ units from $-1$. The first branch is $x+1\leq-2$, so $x\leq-3$. The second is $x+1\geq2$, so $x\geq1$. The distance graph and the line $y=2$ meet at $x=-3$ and $x=1$. The solution set is the union $(-\infty,-3]\cup[1,+\infty)$.

::grafico{f="abs(x+1);2" xmin=-5 xmax=3 ymin=-1 ymax=5 punti="-3,2,pieno;1,2,pieno" titolo="The distance is at least $2$ to the left of $-3$ or to the right of $1$, including both endpoints"}

:::

:::esempio{titolo="Outside an interval, with one additional point"}
The inequality $|x^2-9|\geq9$ requires the square to differ from $9$ by at least $9$. One case is $x^2-9\leq-9$. Adding $9$ gives $x^2\leq0$, and hence only $x=0$. The other case is $x^2-9\geq9$, equivalent to $x^2\geq18$. Since $\sqrt{18}=3\sqrt2$, this yields the rays $x\leq-3\sqrt2$ and $x\geq3\sqrt2$. The solution is the union of these rays and the point $0$. At $x=1$, the absolute value is $8$, showing why the middle point remains separate from the right branch. By symmetry of the square, the same holds on the left.

::grafico{f="abs(x^2-9);9" xmin=-5.2 xmax=5.2 ymin=-1 ymax=18 punti="-4.2426406871,9,pieno;0,9,pieno;4.2426406871,9,pieno" titolo="Height $9$ is also reached at $x=0$, which is an isolated solution"}

:::

## Radicals and the domain

:::definizione{#radicali titolo="Real square root"}
For $u\geq0$, $\sqrt u$ is the unique nonnegative real number whose square is $u$. The number $u$ is called the **radicand**. For example, $\sqrt9=3$ because $3\geq0$ and $3^2=9$. By the same definition, $\sqrt{x^2}=|x|$. In particular, if $x=-4$ then $\sqrt{x^2}=4$.

An even-indexed root requires a radicand greater than or equal to zero. An odd-indexed root, such as $\sqrt[3]{x}$, is defined even for $x<0$. If there is a denominator, it must also be nonzero. In $\dfrac1{\sqrt{x-2}}$, this means $x-2>0$.
:::

:::esempio{titolo="Two domain conditions"}
In the expression $\dfrac{\sqrt{x+2}}{\sqrt{5-x}}$, the numerator exists when $x+2\geq0$. The denominator must exist and be positive, so $5-x>0$. The two conditions require $x\geq-2$ and $x<5$, respectively. The domain is $[-2,5)$. At $-2$, the numerator is zero and the quotient is defined. At $5$, the denominator is zero, so the quotient is undefined.
:::

:::esempio{titolo="A quotient under the square root"}
To find the domain of $\sqrt{\dfrac{x-1}{x+2}}$, the quotient must be defined and nonnegative. Its denominator is zero at $-2$ and its numerator is zero at $1$. The two points divide the number line into three intervals. For $x<-2$, both $x-1$ and $x+2$ are negative, so the quotient is positive. For $-2<x<1$, the numerator is negative and the denominator positive. For $x>1$, both are positive. At $x=1$ the quotient is zero and is allowed. This gives $(-\infty,-2)\cup[1,+\infty)$.

If the square root were itself in the denominator, the radicand would have to be strictly positive, so $1$ would also be excluded. For example, at $x=0$ the quotient is $-\dfrac12$ and neither function is real. At $x=1$, however, the function with just the square root equals zero while the one with the reciprocal is undefined.

::grafico{f="sqrt((x-1)/(x+2))" xmin=-6 xmax=6 ymin=-0.5 ymax=4 asintoti="x=-2" punti="1,0,pieno" titolo="The right branch begins at $x=1$, where the radicand equals zero"}

:::

## Equations with a square root

::::teorema{#irrazionali titolo="Equivalent squaring"}
Let $f$ and $g$ be real-valued expressions defined on the common domain under consideration. The equation $\sqrt{f(x)}=g(x)$ is equivalent to

$$
\begin{cases}
g(x)\geq0,\\
f(x)=g(x)^2.
\end{cases}
$$

:::dimostrazione
If the equality holds, the right-hand side is nonnegative because it equals a square root. Squaring gives $f(x)=g(x)^2$. Conversely, if $f(x)=g(x)^2$, then $f(x)\geq0$ and the square root exists. Since $g(x)\geq0$, it is the nonnegative number whose square equals $f(x)$. Hence it equals $\sqrt{f(x)}$.
:::
::::

:::esempio{titolo="An extraneous candidate after squaring"}
In the equation $\sqrt{x+2}=x$, we need $x\geq0$. Squaring gives $x^2-x-2=(x-2)(x+1)=0$. The candidates are $2$ and $-1$. At $-1$ the radicand is positive, but the sides of the original equation equal $1$ and $-1$. At $x=2$, both sides equal $2$, so the solution set is $\{2\}$.

::grafico{f="sqrt(x+2);x" xmin=-3 xmax=4 ymin=-2 ymax=4 punti="2,2,pieno;-1,1,pieno;-1,-1,pieno" segmenti="-1,-1,-1,1" titolo="At $x=-1$ the squares agree, while the y-coordinates are opposites"}

:::

:::esempio{titolo="Two radicals and a check before squaring"}
Solve $\sqrt{x+4}=2-\sqrt x$. Both roots exist for $x\geq0$. In addition, the right-hand side must be nonnegative, so $\sqrt x\leq2$ and the constraint becomes $0\leq x\leq4$. On this interval, both sides can be squared.

$$
\begin{aligned}
x+4&=(2-\sqrt x)^2\\[4pt]
&=4-4\sqrt x+x,\\[4pt]
4\sqrt x&=0,\\[4pt]
x&=0.
\end{aligned}
$$

At $x=0$, both original sides equal $2$. For every $x>0$ in the domain, $\sqrt{x+4}>2$ and $2-\sqrt x<2$. Thus the curves move away from their common height as soon as we move right of $0$. The point $(0,2)$ is their only intersection.

::grafico{f="sqrt(x+4)+0*sqrt(x);2-sqrt(x)" legenda="y=\sqrt{x+4};y=2-\sqrt{x}" xmin=-0.8 xmax=6 ymin=-1 ymax=4 punti="0,2,pieno" titolo="The curves share their y-coordinate only at the boundary $x=0$"}

:::

::::teorema{#uguaglianza-di-radici titolo="Two square roots in the same equation"}
Let $f$ and $g$ be defined on a set $D$. The equation $\sqrt{f(x)}=\sqrt{g(x)}$ is equivalent to $f(x)=g(x)$ precisely at values for which both radicands are nonnegative. The domain check is still necessary when the two radicands turn out to be equal after calculation.

:::dimostrazione
If the roots are equal, they are defined and each is nonnegative. Squaring them gives $f(x)$ and $g(x)$ respectively, so the radicands are equal. Conversely, if the radicands are equal and nonnegative, by definition they have the same square root. This proves both directions on the common domain.
:::
::::

:::esempio{titolo="The shared candidate can fall outside the domain"}
Consider $\sqrt{x+1}=\sqrt{2x-1}$. The common domain is $x\geq\dfrac12$. Setting the radicands equal gives $x+1=2x-1$, so $x=2$. The candidate is in the domain and gives $\sqrt3$ on both sides.

If we instead compare $\sqrt{x-5}$ and $\sqrt{2x-6}$, the common domain is $x\geq5$. Equating their radicands gives $x-5=2x-6$, so $x=1$. At that x-coordinate both radicands equal $-4$, so neither root is real. Both graphs exist from $5$ onward, and the second stays above the first because $2x-6-(x-5)=x-1>0$ throughout that interval.

::grafico{f="sqrt(x-5);sqrt(2*x-6)" xmin=0 xmax=10 ymin=-1 ymax=4 punti="5,0,pieno;3,0,pieno;5,2,pieno" titolo="Where both roots exist, their ordinates differ"}

:::

:::esempio{titolo="Difference of two roots and the conjugate sum"}
In $\sqrt{x+16}-\sqrt x=2$, both square roots exist for $x\geq0$. Let $u=\sqrt{x+16}$ and $v=\sqrt x$. The requirement $u-v=2$ can also be used to recover the sum. Indeed, the difference of the squares is $16$, regardless of the x-coordinate.

$$
\begin{aligned}
u^2-v^2&=(x+16)-x=16,\\[4pt]
(u-v)(u+v)&=16,\\[4pt]
u+v&=8.
\end{aligned}
$$

Division by $u-v$ is valid because its value at a solution is $2$. Subtracting $u-v=2$ from $u+v=8$ gives $2v=6$, so $\sqrt x=3$ and $x=9$. The check in the original equation gives $\sqrt{25}-\sqrt9=5-3=2$. In this case, a linear system in the two square roots is sufficient. The final check confirms that $u=5$ and $v=3$ both come from the same value of $x$.
:::

## Inequalities with a square root

:::teorema{#confronti titolo="Comparing nonnegative quantities"}
The squaring function is strictly increasing on nonnegative numbers. Indeed, for $v>u\geq0$ we have $v^2-u^2=(v-u)(v+u)>0$. If both sides of an inequality are nonnegative, squaring preserves the direction of the comparison.

Let $c\geq0$. Then $\sqrt{f(x)}\leq c$ is equivalent to $0\leq f(x)\leq c^2$. The first inequality specifies the domain and the second imposes the comparison. If $c$ is replaced by $g(x)$, the comparison $\sqrt{f(x)}\leq g(x)$ is impossible when $g(x)$ is negative, that is, when $g(x)<0$. In that same case, $\sqrt{f(x)}>g(x)$ holds automatically throughout the domain of the square root. For $g(x)\geq0$, compare the squares while keeping the domain condition.
:::

:::esempio{titolo="The line crosses the axis"}
For $\sqrt{x+2}>x$, the domain is $x\geq-2$. On $[-2,0)$ the left-hand side is nonnegative and the right-hand side is negative, so the inequality holds. For $x\geq0$, squaring gives

$$
\begin{aligned}
x+2>x^2&\iff (x-2)(x+1)<0 \\[4pt]
&\iff -1<x<2.
\end{aligned}
$$

Intersecting the second case with $x\geq0$ gives $[0,2)$. Taking the union of the two cases, the solution set is $[-2,2)$. We include $-2$ because $0>-2$, and exclude $2$ because the y-coordinates are equal.
:::

:::esempio{titolo="A threshold between zero and one"}
The domain of $\sqrt{x}\leq x$ is $[0,+\infty)$. The right-hand side is also nonnegative, so squaring preserves the inequality. We get $x\leq x^2$, or $x(x-1)\geq0$. The product is positive for $x<0$ or $x>1$. It equals zero at $0$ and $1$. Intersecting with the domain gives $\{0\}\cup[1,+\infty)$. The point $0$ is isolated in the solution set because between $0$ and $1$ the root exceeds its radicand. For example, at $x=\dfrac14$ the left side is $\dfrac12$, greater than $\dfrac14$. At $x=4$, the square root is $2$ and the comparison holds.

::grafico{f="sqrt(x);x" xmin=-0.5 xmax=4 ymin=-0.5 ymax=4 punti="0,0,pieno;1,1,pieno;0.25,0.5,pieno" titolo="The square root and the line intersect at $0$ and $1$"}

:::

## Piecewise expressions

:::esempio{#tratti titolo="A sum of distances"}
In $|x-1|+|x-4|$, the distances from $x$ to $1$ and to $4$ are added. On the segment $1\leq x\leq4$, the two distances cover the segment from $1$ to $4$, so their sum is always $3$. To the left of $1$, both arguments are negative and the sum is $5-2x$. To the right of $4$, the arguments are positive and the sum is $2x-5$.

To solve $|x-1|+|x-4|=5$, the first piece gives $5-2x=5$, so $x=0$. The middle piece has height $3$ and contains no solutions. The third gives $2x-5=5$, so $x=5$. The candidates $0$ and $5$ lie in the pieces on which they were found. At a threshold of $3$, however, every point in $[1,4]$ would be a solution.

::grafico{f="abs(x-1)+abs(x-4);5" xmin=-2 xmax=7 ymin=-1 ymax=9 punti="0,5,pieno;1,3,pieno;4,3,pieno;5,5,pieno" titolo="The sum of the distances is constant between $1$ and $4$"}

:::

:::osservazione
If two absolute values change formulas at different points, split the number line at the zeros of all the arguments. Each piece gives a formula valid on that piece. After solving the equation or inequality for a piece, intersect its solution with that piece before taking the union of the results. This check prevents a formula used outside its own interval from producing extraneous solutions.
:::

:::esempio{titolo="Two distances with different weights"}
Consider $F(x)=|x|+2|x-3|$. The formula changes where the arguments are zero, at $0$ and $3$. For $x<0$ it is $-x+2(3-x)=6-3x$. For $0\leq x\leq3$ it is $x+2(3-x)=6-x$. For $x>3$ it becomes $x+2(x-3)=3x-6$. At $x=0$ the first two formulas give $6$, and at $x=3$ the last two give $3$. On the two portions to the left of $3$, the value decreases. On the right portion it increases. The minimum is therefore $F(3)=3$, where the distance with twice the weight is zero.

To solve $F(x)\leq5$, the first branch gives no values, because $6-3x>6$ for $x<0$. The middle branch requires $6-x\leq5$, so $x\geq1$ within $[0,3]$. On the right branch, $3x-6\leq5$ gives $x\leq\dfrac{11}{3}$ within $x>3$. The allowed portions combine to form $\left[1,\dfrac{11}{3}\right]$. The left boundary gives $1+2\cdot2=5$. At the right boundary, the value is $3\cdot\dfrac{11}{3}-6=5$. Both endpoints are included.

::grafico{f="abs(x)+2*abs(x-3);5" xmin=-1.5 xmax=5 ymin=-1 ymax=10 punti="0,6,pieno;1,5,pieno;3,3,pieno;3.6666666667,5,pieno" titolo="The weighted distances have a minimum at $x=3$ and stay below the threshold between the intersections"}

:::
