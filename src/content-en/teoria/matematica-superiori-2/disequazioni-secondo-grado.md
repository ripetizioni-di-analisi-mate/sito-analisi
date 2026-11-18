---
titolo: Quadratic and rational inequalities
sommario: Signs of quadratics and quotients, intervals with excluded points, systems, and domains with radicals.
---

Linear inequalities have one boundary when the coefficient of the unknown is nonzero. Quadratics can give two boundaries, just one, or none. Roots of quadratic equations identify the points at which a quadratic can change sign. Fractions also require checking where the denominator is zero.

## Domain, sign, and representation

:::definizione{#intervalli titolo="Comparing with zero in the given domain"}
Solving an **inequality** means finding all values in the domain that make the comparison true. To compare $A(x)$ and $B(x)$, study the sign of $A(x)-B(x)$ at points where both expressions are defined. The inequality $A(x)\le B(x)$ requires that difference to be at most zero. Equality is included only when the sign allows it and the point belongs to the domain.
:::

:::esempio{titolo="Reading where one curve is below another"}
The inequality $x^2\le3x+4$ asks where the parabola $y=x^2$ lies below or meets the line $y=3x+4$. The difference is $x^2-3x-4=(x+1)(x-4)$. The graphs meet at $x=-1$ and $x=4$. At $x=0$ the parabola is at $0$ and the line is at $4$. This confirms that the origin is one solution. To determine the entire interval, examine the signs of the two factors both between and outside the intersections.

::grafico{f="x^2;3*x+4" xmin=-2.2 xmax=5.3 ymin=-2.3 ymax=26.6 nomi="x,y" legenda="y=x^2;y=3x+4" punti="-1,1,pieno;4,16,pieno;0,0,pieno;0,4,pieno" segmenti="-1,0,-1,1;4,0,4,16" titolo="The horizontal coordinates of the intersections give the boundaries of the inequality"}
:::

## Two distinct real roots

::::teorema{#segno titolo="How the sign changes at the two zeros"}
Let $P(x)=ax^2+bx+c$, with $a\ne0$, and let $r_1<r_2$ be its two real roots. The quadratic has the sign of $a$ outside the interval between the roots and the opposite sign inside. At $r_1$ and $r_2$ it is zero.

:::dimostrazione
The factorization is $P(x)=a(x-r_1)(x-r_2)$. If $x<r_1$, both linear factors are negative. If $r_1<x<r_2$, the first is positive and the second negative. If $x>r_2$, both are positive. Combining the signs gives a positive product on the two outer intervals and a negative product on the middle interval, before multiplying by $a$. If $a<0$, that last factor reverses all three signs.
:::

| Interval | $x<r_1$ | $r_1<x<r_2$ | $x>r_2$ |
| --- | --- | --- | --- |
| $x-r_1$ | $-$ | $+$ | $+$ |
| $x-r_2$ | $-$ | $-$ | $+$ |
| $(x-r_1)(x-r_2)$ | $+$ | $-$ | $+$ |
::::

:::esempio{titolo="The same pair of roots with opposite leading coefficients"}
The quadratic $P(x)=(x-2)(x-3)$ is negative between its roots, so $P(x)\le0$ has solution set $[2,3]$. The inequality $-P(x)<0$ requires $P(x)>0$, giving $(-\infty,2)\cup(3,+\infty)$. The endpoints are excluded in the latter comparison, as zero is outside the strictly negative values.

::grafico{f="(x-2)*(x-3);-(x-2)*(x-3)" xmin=0.2 xmax=4.8 ymin=-5.2 ymax=5.2 nomi="x,y" legenda="P(x);-P(x)" punti="2,0,pieno;3,0,pieno;2.5,-0.25,pieno;2.5,0.25,pieno" titolo="The parabolas have common zeros and opposite signs on the three intervals"}
:::

:::esempio{titolo="A minimum area between two boundary values"}
A rectangle has side lengths $x$ and $12-x$ metres, with $0<x<12$. To reach at least $35\,\mathrm{m}^2$, require $x(12-x)\ge35$. The difference is $-x^2+12x-35=-(x-5)(x-7)$. Between the roots the two linear factors have a negative product, and the minus sign makes it positive. The area is exactly the required amount at both ends, so the allowed interval is $[5,7]$, already within the geometric domain. At $x=6$ the area is $36\,\mathrm{m}^2$. At $x=8$ it is $32\,\mathrm{m}^2$, below the minimum.
:::

## Double roots and no real roots

::::teorema{#discriminante titolo="The sign when the discriminant is zero or negative"}
For $a\ne0$ let $\Delta=b^2-4ac$. If $\Delta=0$, there is a double root $r=-\dfrac{b}{2a}$, and the quadratic is zero only at $r$. Everywhere else it has the sign of $a$. If $\Delta<0$, the quadratic has the sign of $a$ for every real $x$.

:::dimostrazione
Factoring out $a$ and completing the square gives

$$
ax^2+bx+c
=a\left[\left(x+\frac{b}{2a}\right)^2-\frac{\Delta}{4a^2}\right].
$$

Expand the square to check the identity. The constant term inside the brackets is $\dfrac{b^2-\Delta}{4a^2}=\dfrac ca$. If $\Delta=0$, only a square remains inside the brackets, and it vanishes only when $x=-\dfrac b{2a}$. If $\Delta<0$, the square has the positive number $\dfrac{-\Delta}{4a^2}$ added to it. The expression in brackets is then always positive, so the sign of the quadratic is the sign of $a$.
:::
::::

:::esempio{titolo="An isolated zero when comparing with a square"}
For $(x-2)^2>0$, every real number except $2$ is a solution. At $2$ the square is zero and the point is excluded. With $(x-2)^2\le0$, the only allowed value is $2$. The double root is a point of tangency. The sign stays positive on each side.

::grafico{f="(x-2)^2" xmin=-0.7 xmax=4.7 ymin=-0.8 ymax=7 nomi="x,y" punti="2,0,pieno" titolo="The parabola touches the axis at $2$ and lies above it everywhere else"}
:::

:::esempio{titolo="An extremum away from zero"}
The quadratic $-x^2+4x-5$ equals $-(x-2)^2-1$. Its maximum is $-1$, reached when $x=2$, because a square is always nonnegative. Hence $-x^2+4x-5\ge0$ has an empty solution set, while $-x^2+4x-5<0$ holds for every real number. The discriminant $4^2-4(-1)(-5)=-4$ leads to the same result.

::grafico{f="-(x-2)^2-1" xmin=-0.5 xmax=4.5 ymin=-7.6 ymax=1.2 nomi="x,y" punti="2,-1,pieno" segmenti="2,0,2,-1" titolo="The highest point is $(2,-1)$, still below the horizontal axis"}
:::

## From the original inequality to the solution

:::esempio{#procedimento titolo="Compare with zero and check the endpoints"}
To solve $4-2x^2\ge0$, add $2x^2$ to get $2x^2\le4$. Dividing by $2$ gives $x^2\le2$. The expression $2-x^2$ factors as $(\sqrt2-x)(\sqrt2+x)$. Both factors are nonnegative between $-\sqrt2$ and $\sqrt2$. Outside that interval one is negative and the other positive. This gives $[-\sqrt2,\sqrt2]$.

Use the original expression to check the result. At the origin it is $4$, which is allowed. At both endpoints it is $0$, allowed by $\ge$. At $x=2$ it is $-4$, which is excluded. A test point checks the sign on an interval after all zeros have been found and the sign is known to stay constant between consecutive zeros.
:::

:::osservazione
Read the degree from the reduced difference. For example, $2x^2+3x\ge 2x^2+5$ contains two identical quadratic terms. Subtracting $2x^2$ from both sides leaves $3x\ge5$, with the single boundary $\dfrac53$. If the linear terms were identical as well, only a numerical comparison would remain, either true throughout the domain or false throughout it. This initial reduction determines whether to find quadratic roots or solve an inequality of lower degree.
:::

## Fractions and excluded points

::::teorema{#fratte titolo="Finding the sign of a quotient on its domain"}
For a quotient $\dfrac{P(x)}{Q(x)}$, first require $Q(x)\ne0$. The quotient is positive when the numerator and denominator have the same sign, and negative when their signs differ. It equals zero only at zeros of the numerator that belong to the domain.

:::dimostrazione
On the domain, $Q(x)^2$ is strictly positive. Multiplying the comparison by this quantity preserves its direction and turns $\dfrac{P(x)}{Q(x)}$ into $P(x)Q(x)$. The product shows how the signs combine. Using the product directly still requires $Q(x)\ne0$.
:::
::::

:::esempio{titolo="Distinguishing a zero from a zero denominator"}
For $\dfrac{x+2}{x-1}\le0$, the critical points are $-2$, where the quotient is zero, and $1$, where it is undefined. The first can be included because the comparison allows equality. The second is excluded regardless of the comparison sign.

| Interval | $(-\infty,-2)$ | $(-2,1)$ | $(1,+\infty)$ |
| --- | --- | --- | --- |
| Numerator | $-$ | $+$ | $+$ |
| Denominator | $-$ | $-$ | $+$ |
| Quotient | $+$ | $-$ | $+$ |

The result is $[-2,1)$. The quotient changes sign around $1$ but has no plotted point with that horizontal coordinate. A test point in the interval is $0$, where the quotient equals $-2$.

::grafico{f="(x+2)/(x-1)" asintoti="x=1;y=1" xmin=-5 xmax=5 ymin=-7 ymax=7 punti="-2,0,pieno" titolo="The quotient is nonpositive from $-2$ inclusive to $1$ exclusive"}
:::

:::attenzione{#buco titolo="Simplifying preserves the original domain"}
The fraction $\dfrac{(x-1)(x+3)}{x-1}$ excludes $x=1$. At allowed points the factor $x-1$ cancels and gives $x+3$. Comparing with zero using $\ge$ gives $x\ge-3$ and $x\ne1$. The solution is $[-3,1)\cup(1,+\infty)$. At $1$ the simplified line would have height $4$, but the fraction is still undefined.

::grafico{f="x+3" xmin=-4.6 xmax=3.1 ymin=-1.75 ymax=6.6 punti="-3,0,pieno;1,4,vuoto" titolo="The open point at $(1,4)$ marks the value still excluded after simplification"}

When the right-hand side of the original comparison is nonzero, move everything to the left and use a common denominator. For example, $\dfrac{2}{x-1}\le1$ is equivalent to $\dfrac{3-x}{x-1}\le0$ with $x\ne1$. The signs give $(-\infty,1)\cup[3,+\infty)$. At $3$ the original quotient equals $1$, allowed by the non-strict comparison.
:::

:::esempio{titolo="A positive denominator with an excluded point"}
For $\dfrac{x+1}{(x-2)^2}\ge0$, the denominator is strictly positive for every allowed $x$. It is therefore possible to multiply by the denominator and obtain $x+1\ge0$ while preserving the sign. This gives $x\ge-1$ with $2$ removed. The result is $[-1,2)\cup(2,+\infty)$. The squared denominator has the same sign on both sides of its zero. The point $2$ still separates two intervals, since the fraction is undefined there.
:::

## Products and multiplicity

:::teorema{#prodotti titolo="The parity of the exponent tells whether the sign changes"}
If the factor $x-r$ occurs exactly $m$ times, the polynomial can be written as $(x-r)^mG(x)$ with $G(r)\ne0$. The value $G(r)$ is nonzero and, by continuity of the polynomial, the sign of $G$ stays the same near $r$. If $m$ is odd, $x-r$ and $(x-r)^m$ have the same sign. If $m$ is even, $(x-r)^m$ is positive on both sides. An even-multiplicity root can therefore split the solution set of a strict comparison while leaving the sign unchanged.
:::

:::esempio{titolo="A simple root and a double root in the same product"}
In $(x-1)^2(x+2)>0$, the quadratic factor is positive for $x\ne1$. The sign therefore depends on $x+2$. To the right of $-2$, the product is positive except at $1$, where it is zero. The solution is $(-2,1)\cup(1,+\infty)$. With the comparison $\ge0$, both zeros would be allowed and the result would be $[-2,+\infty)$.
:::

## Systems and intersection

:::definizione{#sistemi titolo="Every value must satisfy all conditions"}
A **system of inequalities** imposes all conditions simultaneously. Take their common solutions, including an endpoint only when it satisfies each constraint. For alternative conditions, use the union because membership in at least one set is sufficient.
:::

:::esempio{titolo="An interval and an isolated point"}
Solve $x^2-4x+3\ge0$ with the constraint $0\le x\le3$. The quadratic equals $(x-1)(x-3)$, so the first set is $(-\infty,1]\cup[3,+\infty)$. Its intersection with $[0,3]$ contains $[0,1]$ and the single point $3$. The value $3$ meets both conditions with equality and is included.

::grafico{assi=0 xmin=-1.8 xmax=4.9 ymin=-0.25 ymax=3.28 vettori="-1.47,2.66,4.53,2.66;-1.47,1.64,4.53,1.64;-1.47,0.59,4.53,0.59" area="2.74;2.58;-1.4;1|2.74;2.58;3;4.38|1.72;1.56;0;3|0.67;0.51;0;1" punti="1,2.66,pieno;3,2.66,pieno;0,1.64,pieno;3,1.64,pieno;0,0.59,pieno;1,0.59,pieno;3,0.59,pieno" etichette="0,0.15,0;1,0.15,1;3,0.15,3" titolo="The system retains the interval $[0,1]$ and the isolated point $3$"}
:::

:::esempio{titolo="Intersecting a rational inequality with a linear bound"}
The conditions $\dfrac{x-1}{x+1}>0$ and $x\le0$ must hold together. The first gives $(-\infty,-1)\cup(1,+\infty)$ because the numerator and denominator are both negative below $-1$ and both positive above $1$. Intersecting this with $(-\infty,0]$ leaves $(-\infty,-1)$. The boundary $-1$ stays excluded because the new condition only restricts the value of $x$. The fraction is still undefined there. Zero meets the linear bound, but the quotient at zero is $-1$.
:::

## Square roots and constraints from the problem

:::osservazione{#domini titolo="Intersecting the conditions for an expression to exist"}
For the square root $\sqrt{A(x)}$, require $A(x)\ge0$. If the root is the whole denominator or a factor of it, a nonzero denominator requires a nonzero root, so $A(x)>0$. For example, $\sqrt{x^2-4}$ includes the zeros $-2$ and $2$ in its domain. The expression $\dfrac{1}{\sqrt{x^2-4}}$ excludes these points, giving $(-\infty,-2)\cup(2,+\infty)$.

If the root is a term in a sum in the denominator, check the value of the whole sum. For $\dfrac{1}{\sqrt{x}+1}$, the condition $x\ge0$ suffices because throughout the domain of the root the denominator is at least one. The value $x=0$ is allowed and the fraction equals $1$ there.

For $\dfrac{\sqrt{(x-1)(4-x)}}{x-2}$ the radicand is nonnegative on $[1,4]$, and the denominator excludes $2$. Thus $D=[1,2)\cup(2,4]$. At $1$ and at $4$ the root in the numerator is zero and the denominator is nonzero.

::grafico{assi=0 xmin=-0.5 xmax=5.5 ymin=-0.85 ymax=0.9 vettori="-0.15,0,5.18,0" area="0.075;-0.075;1;2|0.075;-0.075;2;4" punti="1,0,pieno;2,0,vuoto;4,0,pieno" etichette="1,-0.35,1;2,-0.35,2;4,-0.35,4;5.01,-0.35,x" titolo="The zeros of the radicand at the edges are allowed. The denominator removes the interior point $2$"}
:::

:::esempio{titolo="Absolute value and a domain restriction"}
The root $\sqrt{(x-1)^2}$ is defined for every real number and equals $|x-1|$, because it gives the nonnegative quantity whose square is the radicand. In the fraction $\dfrac{\sqrt{(x-1)^2}}{x-1}$, however, exclude $1$. For $x>1$ the numerator equals $x-1$, so the quotient is $1$. For $x<1$ the numerator equals $1-x$, so the quotient is $-1$. The point where the formulas change is the excluded value.
:::

:::esempio{titolo="An algebraic boundary and a positive length"}
A rectangle has side lengths $x$ and $x+3$ metres and area of at most $40\,\mathrm{m}^2$. Require $x>0$ and $x(x+3)\le40$. Moving everything to the left gives $(x+8)(x-5)\le0$, with solution $[-8,5]$. Intersecting this with $x>0$ leaves $(0,5]$. Five metres is allowed because the area is $40\,\mathrm{m}^2$. If the shorter side must measure a whole number of metres, only lengths from one to five are possible.
:::

## A family of parabolas with a parameter

:::esempio{#parametri titolo="Check the maximum before finding the roots"}
Consider $k-(x-1)^2\ge0$ for a fixed real number $k$. For every $x$ the square is nonnegative, so the highest possible value of the left-hand side is $k$, reached at $x=1$.

- If $k<0$, even the maximum fails the comparison and the solution set is empty.
- If $k=0$, only $x=1$ is allowed, since it makes the square zero.
- If $k>0$, the condition $(x-1)^2\le k$ gives $[1-\sqrt{k},1+\sqrt{k}]$.

In the last case both endpoints are included. Changing the sign to $>$ excludes those two points, and if $k=0$ no solution remains. The parameter gives three different configurations, and the inequality sign determines how to treat the intersections with the axis.

::grafico{f="-1-(x-1)^2;-(x-1)^2;1-(x-1)^2" xmin=-1.34 xmax=3.34 ymin=-4.8 ymax=1.55 nomi="x,y" legenda="k=-1;k=0;k=1" punti="1,-1,pieno;1,0,pieno;1,1,pieno;0,0,pieno;2,0,pieno" titolo="The vertex rises with $k$. The three parabolas have zero, one, and two points on the axis"}
:::

:::esempio{titolo="When a parameter makes the quadratic nonnegative everywhere"}
Find the values of $k$ for which $(k-1)x^2-2x+1\ge0$ holds for all real numbers. At $x=1$, the left-hand side equals $k-2$, so $k\ge2$ is necessary. With that condition, write the expression as $(x-1)^2+(k-2)x^2$. Both terms are nonnegative for any $x$, so the condition is sufficient as well. At $k=2$ there is a square that vanishes at $1$. At $k=1$ the quadratic coefficient is zero and the inequality becomes $-2x+1\ge0$, true only when $x\le\dfrac12$.
:::
