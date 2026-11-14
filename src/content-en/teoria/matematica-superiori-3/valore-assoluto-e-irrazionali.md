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

## Distances below a threshold

:::teorema{#interne titolo="Distance smaller than a radius"}
For $r>0$, the condition $|f(x)|<r$ is equivalent to $-r<f(x)<r$. The number $f(x)$ must be to the right of $-r$ and to the left of $r$ at the same time. For $|f(x)|\leq r$, the two inequalities are non-strict, so the endpoints are allowed. At $r=0$, the strict comparison is impossible while the non-strict comparison allows only the zeros of $f$. For $r<0$, both comparisons are impossible.
:::

:::esempio{titolo="The sign of the coefficient of the unknown"}
In $|5-2x|<3$, the compound inequality is $-3<5-2x<3$. Subtracting $5$ gives $-8<-2x<-2$. Dividing by $-2$ reverses both inequalities and gives $4>x>1$. The solution set is $(1,4)$. At $x=4$ we get $|5-8|=3$, so that point is excluded. The value $x=2$ is inside the interval and gives $|5-4|=1<3$.
:::

## Distances above a threshold

:::teorema{#esterne titolo="Distance greater than a radius"}
For $r>0$, the condition $|f(x)|>r$ is equivalent to $f(x)<-r$ or $f(x)>r$. There are two separate rays on the number line, so take their union. For $|f(x)|\geq r$, add the values where $f(x)=-r$ or $f(x)=r$. If $r=0$, the comparison $|f(x)|>0$ excludes the zeros of $f$, while $|f(x)|\geq0$ holds throughout the domain. If $r<0$, both comparisons hold throughout the domain.
:::

:::esempio{titolo="A threshold with two intervals"}
The inequality $|x+1|\geq2$ asks for points at least $2$ units from $-1$. The first branch is $x+1\leq-2$, so $x\leq-3$. The second is $x+1\geq2$, so $x\geq1$. The distance graph and the line $y=2$ meet at $x=-3$ and $x=1$. The solution set is the union $(-\infty,-3]\cup[1,+\infty)$.

::grafico{f="abs(x+1);2" xmin=-5 xmax=3 ymin=-1 ymax=5 punti="-3,2,pieno;1,2,pieno" titolo="The distance is at least $2$ to the left of $-3$ or to the right of $1$, including both endpoints"}

:::

## Radicals and the domain

:::definizione{#radicali titolo="Real square root"}
For $u\geq0$, $\sqrt u$ is the unique nonnegative real number whose square is $u$. The number $u$ is called the **radicand**. For example, $\sqrt9=3$ because $3\geq0$ and $3^2=9$. By the same definition, $\sqrt{x^2}=|x|$. In particular, if $x=-4$ then $\sqrt{x^2}=4$.

An even-indexed root requires a radicand greater than or equal to zero. An odd-indexed root, such as $\sqrt[3]{x}$, is defined even for $x<0$. If there is a denominator, it must also be nonzero. In $\dfrac1{\sqrt{x-2}}$, this means $x-2>0$.
:::

:::esempio{titolo="Two domain conditions"}
In the expression $\dfrac{\sqrt{x+2}}{\sqrt{5-x}}$, the numerator exists when $x+2\geq0$. The denominator must exist and be positive, so $5-x>0$. The two conditions require $x\geq-2$ and $x<5$, respectively. The domain is $[-2,5)$. At $-2$, the numerator is zero and the quotient is defined. At $5$, the denominator is zero, so the quotient is undefined.
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

## Piecewise expressions

:::esempio{#tratti titolo="A sum of distances"}
In $|x-1|+|x-4|$, the distances from $x$ to $1$ and to $4$ are added. On the segment $1\leq x\leq4$, the two distances cover the segment from $1$ to $4$, so their sum is always $3$. To the left of $1$, both arguments are negative and the sum is $5-2x$. To the right of $4$, the arguments are positive and the sum is $2x-5$.

To solve $|x-1|+|x-4|=5$, the first piece gives $5-2x=5$, so $x=0$. The middle piece has height $3$ and contains no solutions. The third gives $2x-5=5$, so $x=5$. The candidates $0$ and $5$ lie in the pieces on which they were found. At a threshold of $3$, however, every point in $[1,4]$ would be a solution.

::grafico{f="abs(x-1)+abs(x-4);5" xmin=-2 xmax=7 ymin=-1 ymax=9 punti="0,5,pieno;1,3,pieno;4,3,pieno;5,5,pieno" titolo="The sum of the distances is constant between $1$ and $4$"}

:::

:::osservazione
If two absolute values change formulas at different points, split the number line at the zeros of all the arguments. Each piece gives a formula valid on that piece. After solving the equation or inequality for a piece, intersect its solution with that piece before taking the union of the results. This check prevents a formula used outside its own interval from producing extraneous solutions.
:::
