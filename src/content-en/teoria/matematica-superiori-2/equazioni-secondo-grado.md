---
titolo: "Quadratic equations"
sommario: "The quadratic formula, discriminant, Viète’s relations, domain restrictions, and choosing roots in applications."
---

## Standard form and the meaning of roots

:::definizione{#forma titolo="Coefficients and solutions"}
A quadratic equation with real coefficients reduces to $ax^2+bx+c=0$ with $a\ne0$. To identify $a$, $b$, and $c$, expand the products, bring all terms to one side, and combine like terms. The sign is part of each coefficient. A missing term has coefficient zero. If the quadratic terms cancel, determine the degree after cancellation.

A real root is a value of $x$ for which the polynomial is zero. If the equation comes from a fraction or from a problem with constraints on measurements, the value must also belong to the original domain.
:::

:::esempio{titolo="An equation as the intersection of two graphs"}
From $x(x+1)=12$ we get $x^2+x-12=0$, with $a=1$, $b=1$, and $c=-12$. Since $(x+4)(x-3)=x^2+x-12$, the roots are $-4$ and $3$. At the intersections of the graphs of $y=x^2+x$ and $y=12$, the vertical coordinate is $12$. The reduced equation subtracts $12$ from every vertical coordinate of the first graph. The same horizontal coordinates are zeroes of the new polynomial.

::grafico{f="x^2+x;12" legenda="y=x^2+x;y=12" xmin=-5 xmax=4 ymin=-2 ymax=17 punti="-4,12,pieno;3,12,pieno" segmenti="-4,0,-4,12;3,0,3,12" titolo="The solutions are −4 and 3, the horizontal coordinates of the intersections"}
:::

## Quadratics with a missing term

::::teorema{#incomplete titolo="Using the missing term"}
When $b=0$, the quadratic is pure and reduces to $x^2=-\dfrac ca$. When $c=0$, it has no constant term and can be written as $x(ax+b)=0$.
:::dimostrazione
In the first case, divide by $a$. Denote the right-hand side by $u$. If $u>0$, the roots are $\sqrt u$ and $-\sqrt u$, because both squares equal $u$. If $u=0$, the only value is zero. If $u<0$, no real square can equal $u$. In the second case, a product of real numbers is zero exactly when at least one factor is zero. This gives $x=0$ or $ax+b=0$, hence $x=-\dfrac ba$. If $b=0$ too, the two values coincide.
:::
::::

:::esempio{titolo="Opposite roots and an exact check"}
From $3x^2=18$ we get $x^2=6$, so $x=\pm\sqrt6$. Since $4<6<9$, the absolute value of each root is between $2$ and $3$. Substituting either root into the original equation gives $3(\pm\sqrt6)^2=18$. The minus sign gives a second solution, symmetric across the vertical axis. Rounding can help locate the values on the graph, while an exact check uses the radical itself.

::grafico{f="3*x^2;18" legenda="y=3x^2;y=18" xmin=-3.2 xmax=3.2 ymin=-2 ymax=24 punti="-2.449489743,18,pieno;2.449489743,18,pieno" titolo="The horizontal coordinates are opposites and have the same square"}
:::

:::esempio{titolo="Keeping zero as a root"}
Factoring $x$ out of $3x^2+2x=0$ gives $x(3x+2)=0$. The distinct roots are $0$ and $-\dfrac23$. Dividing by $x$ at the start would be valid for $x\ne0$, but the excluded case is itself a solution. The graph meets the axis at two points. At the origin the first factor is zero, while at the other point the second factor is zero.

::grafico{f="3*x^2+2*x" xmin=-1.4 xmax=0.7 ymin=-0.55 ymax=2.4 punti="-0.666666667,0,pieno;0,0,pieno" etichette="-0.79,-0.2,−2⁄3" titolo="Factoring reveals both zeroes"}
:::

## The quadratic formula

::::teorema{#formula titolo="Completing the square"}
For $a\ne0$, set $\Delta=b^2-4ac$. If $\Delta\ge0$, the roots are $\dfrac{-b+\sqrt\Delta}{2a}$ and $\dfrac{-b-\sqrt\Delta}{2a}$. If $\Delta<0$, there are no real roots.
:::dimostrazione
Multiply the equation by $4a$, move the constant term to the right, and add $b^2$ to both sides.

$$
\begin{aligned}
4a^2x^2+4abx&=-4ac\\[6pt]
4a^2x^2+4abx+b^2&=b^2-4ac\\[6pt]
(2ax+b)^2&=\Delta.
\end{aligned}
$$

Multiplication is reversible since $4a\ne0$. A real square cannot be negative. If $\Delta\ge0$, the value of $2ax+b$ can be $\sqrt\Delta$ or $-\sqrt\Delta$. Subtracting $b$ and dividing by $2a$ gives the formula. With $\Delta=0$, both signs lead to the same value.
:::
::::

:::esempio{titolo="Exact roots and their signs"}
For $3x^2-2x-2=0$ we have $\Delta=(-2)^2-4\cdot3\cdot(-2)=28$. Since $\sqrt{28}=2\sqrt7$, the roots are $\dfrac{1\pm\sqrt7}{3}$. One is negative and the other positive, because $\sqrt7>1$. We can check the arithmetic with the completed square: if $x=\dfrac{1\pm\sqrt7}{3}$, then $6x-2=\pm2\sqrt7$ and $(6x-2)^2=28$ in both cases.
:::

:::osservazione{titolo="A shorter formula for an even linear coefficient"}
If $b=2d$, the discriminant is $4(d^2-ac)$. When $d^2-ac\ge0$, the numerator in the formula has a factor of $2$ in both $-2d$ and $\sqrt{4(d^2-ac)}$. Cancelling it gives $x=\dfrac{-d\pm\sqrt{d^2-ac}}{a}$. In $2x^2+8x+6=0$, use $d=4$. This gives $d^2-ac=4$, so $x=\dfrac{-4\pm2}{2}$, namely $-1$ and $-3$. The direct calculation gives the same roots with $\Delta=16$.
:::

## The discriminant, the vertex, and double roots

::::teorema{#discriminante titolo="Reading the number of intersections"}
With $\Delta>0$, there are two distinct real roots. With $\Delta=0$, there is one distinct root, $-\dfrac b{2a}$, which is a double root. With $\Delta<0$, no roots are real.
:::dimostrazione
Rewrite the polynomial as

$$
ax^2+bx+c=a\left(x+\frac b{2a}\right)^2-\frac{\Delta}{4a}.
$$

The vertex has horizontal coordinate $-\dfrac b{2a}$ and vertical coordinate $-\dfrac{\Delta}{4a}$. When $\Delta=0$, the polynomial is a multiple of the square of a linear factor. When $\Delta>0$, the equation $\left(x+\dfrac b{2a}\right)^2=\dfrac{\Delta}{4a^2}$ asks for a positive distance from the axis of symmetry and gives two horizontal coordinates. If $\Delta<0$, the right-hand side is negative, so the equation is impossible.
:::
::::

:::esempio{titolo="Moving the vertex by changing the constant"}
The polynomials $x^2-4x+5$, $x^2-4x+4$, and $x^2-4x+3$ share the same axis $x=2$. Completing the square gives $(x-2)^2+1$, $(x-2)^2$, and $(x-2)^2-1$. In the first case the minimum is positive and there is no intersection with the horizontal axis. In the second case the vertex touches the axis at $x=2$. In the third case the minimum is negative and the zeroes are $1$ and $3$. This is how a vertical shift produces the three outcomes.

::grafico{f="(x-2)^2+1;(x-2)^2;(x-2)^2-1" legenda="y=(x-2)^2+1;y=(x-2)^2;y=(x-2)^2-1" xmin=-0.6 xmax=4.7 ymin=-1.8 ymax=5.1 punti="1,0,pieno;2,0,pieno;3,0,pieno" titolo="With the axis fixed, the height of the vertex determines the number of roots"}
:::

:::osservazione{titolo="A downward-opening parabola"}
For $-x^2-2x-3=0$ we get $\Delta=4-12=-8$. The curve $y=-(x+1)^2-2$ opens downwards and has maximum $-2$. It stays below the horizontal axis. In general, when the discriminant is negative, all values of the polynomial have the sign of $a$. If there are two distinct roots, their horizontal distance is $\dfrac{\sqrt\Delta}{|a|}$. Subtract the two values from the formula and take their absolute difference, which also applies when $a<0$.

::grafico{f="-(x+1)^2-2" xmin=-3.8 xmax=1.8 ymin=-9.6 ymax=1.15 punti="-1,-2,pieno,V" titolo="The maximum is −2, so the parabola does not reach the horizontal axis"}
:::

:::osservazione{titolo="Changing scale leaves the roots in place"}
Multiplying the equation by $\lambda\ne0$ gives the new discriminant $(\lambda b)^2-4(\lambda a)(\lambda c)=\lambda^2\Delta$. Its sign stays the same. For example, $x^2-5x+4=0$ has discriminant $9$ and roots $1$ and $4$. Multiplying by $-2$ gives $-2x^2+10x-8=0$, with discriminant $36$. The roots are still $1$ and $4$ and their distance is still $3$: in the second case $\dfrac{\sqrt{36}}{|-2|}=3$. The numerical discriminant depends on the form chosen, while its sign and the distance between the zeroes stay fixed.
:::

## Viète’s relations and constructing an equation from its roots

::::teorema{#viete titolo="Sum, product, and factorisation"}
If $x_1$ and $x_2$ are the real roots, counting a double root twice, then

$$
x_1+x_2=-\frac ba,\qquad x_1x_2=\frac ca.
$$

The polynomial is $a(x-x_1)(x-x_2)$.
:::dimostrazione
For two distinct roots, the difference between $ax^2+bx+c$ and $a(x-x_1)(x-x_2)$ has degree at most one because the quadratic terms cancel. The difference is zero at both roots, so it is zero for every $x$. When the root is double, the factorisation follows from completing the square with $\Delta=0$. Expanding the product gives $ax^2-a(x_1+x_2)x+ax_1x_2$. Comparing the coefficient of $x$ and the constant term gives the two relations.
:::
::::

:::esempio{titolo="Prescribed roots and leading coefficient"}
To construct a quadratic polynomial with roots $-1$ and $3$, use the factors $x+1$ and $x-3$. The monic polynomial is $(x+1)(x-3)=x^2-2x-3$. If the leading coefficient must be $2$, the required trinomial is $2x^2-4x-6$. The graphs differ in their vertical coordinates but retain the same zeroes. The relations give sum $2$ and product $-3$ in both cases because $-\dfrac ba$ and $\dfrac ca$ are unchanged when all coefficients are multiplied by the same nonzero number.

::grafico{f="(x+1)*(x-3);2*(x+1)*(x-3)" legenda="y=(x+1)(x-3);y=2(x+1)(x-3)" xmin=-2 xmax=4 ymin=-9 ymax=9 punti="-1,0,pieno;3,0,pieno" titolo="Doubling all vertical coordinates preserves the zeroes"}
:::

:::esempio{titolo="Recovering numbers from their sum and product"}
Two numbers with sum $s$ and product $p$ are the roots of $t^2-st+p=0$. The discriminant $s^2-4p$ determines whether two real numbers with those values exist. For $s=5$ and $p=7$, we get $25-28=-3$, so no such pair exists. For $s=-7$ and $p=10$, we get $t^2+7t+10=(t+2)(t+5)$, giving $-2$ and $-5$. We can also find the sum of squares without finding the individual values. In fact, $x_1^2+x_2^2=s^2-2p$, which in the second case equals $49-20=29$. When $s^2=4p$ the two numbers coincide.
:::

:::esempio{titolo="One known root determines the other and a coefficient"}
Suppose $3$ is a root of $2x^2+bx-24=0$. The product of the roots is $-12$, so the other is $-12:3=-4$. Their sum is $3-4=-1$, giving $-\dfrac b2=-1$ and $b=2$. We can check by substituting $3$: the equation $18+3b-24=0$ gives the same coefficient. Substituting $3$ determines $b$, and the product relation also gives the other root without using the quadratic formula. Finding the second root from the product in this way requires the known root to be nonzero.
:::

## Rational equations and checking the domain

::::teorema{#fratte titolo="Intersecting the candidates with the domain"}
After excluding the zeroes of the denominators, multiply by a common multiple that is nonzero throughout the domain. The solutions are exactly those candidates from the resulting equation that belong to the original domain.
:::dimostrazione
For every allowed $x$, division by the common multiple reverses the step. So the equation with denominators cleared is equivalent to the original in that domain. Outside the domain, at least one original side is undefined. A candidate that makes a denominator zero cannot be a solution even if it satisfies the equation without fractions.
:::
::::

:::esempio{titolo="A common factor leaves a missing point"}
In $\dfrac{x^2-5x+6}{x-2}=0$, exclude $x=2$. The zeroes of numerator $(x-2)(x-3)$ are $2$ and $3$. The first is excluded, so only $x=3$ remains. Cancelling $x-2$ gives the expression $x-3$ only for $x\ne2$. The graph has a missing point at $(2,-1)$, and its only allowed zero is $(3,0)$. Checking the original equation gives $\dfrac{9-15+6}{3-2}=0$.

::grafico{f="x-3" xmin=-0.6 xmax=5.4 ymin=-4 ymax=2.6 punti="2,-1,vuoto;3,0,pieno" titolo="The left side has one zero and one missing point"}
:::

:::esempio{titolo="Two denominators sharing a factor"}
In $\dfrac{x+1}{x-2}=\dfrac{18}{(x-2)(x+1)}$, exclude $2$ and $-1$. Multiplying by $(x-2)(x+1)$ gives $(x+1)^2=18$, so $x=-1\pm3\sqrt2$. Neither root is $-1$, because the square is zero there. Neither is $2$, because the square at $2$ is $9$. Both roots therefore belong to the domain. Since multiplication can be reversed at those values, checking the squared expression also verifies the original equation.
:::

## Parameters and conditions on the roots

:::esempio{#parametri titolo="Distinguishing a drop in degree from a zero discriminant"}
In $(k-1)x^2+x-1=0$, taking $k=1$ gives the linear equation $x-1=0$. The solution is $1$. For $k\ne1$, the discriminant is $1+4(k-1)=4k-3$. If $k<\dfrac34$, there are no real roots. At $k=\dfrac34$, the discriminant is zero and the double root is $2$. If $k>\dfrac34$ and $k\ne1$, there are two distinct roots. Both $k=1$ and $k=\dfrac34$ give one distinct solution, for different reasons: in the first case the parabola has become a line, while in the second it touches the axis.
:::

:::esempio{titolo="Requiring two distinct positive roots"}
For $x^2-6x+k=0$, we need $\Delta=36-4k>0$ and $k>0$. The first condition ensures two distinct real roots. The positive product $k$ forces them to have the same sign, and the positive sum $6$ makes both signs positive. This gives $0<k<9$. At $k=0$ one root is zero, while at $k=9$ the roots coincide. For $k<0$ the roots have opposite signs because $36-4k>0$ and the product is negative.

::grafico{xmin=-1.4 xmax=10.6 ymin=-0.72 ymax=0.9 uguale=1 assi=0 vettori="-1.05,0,10.1,0" linee="0,0.28 9,0.28" segmenti="0,0,0,0.28;9,0,9,0.28" punti="0,0,vuoto;9,0,vuoto" etichette="-0.07,-0.33,0;8.93,-0.33,9;10.2,0.08,k" titolo="The allowed parameters are between 0 and 9, with both endpoints excluded"}
:::

:::esempio{titolo="When every coefficient vanishes"}
In $(k-2)(x^2+x+1)=0$, taking $k=2$ makes the entire left side zero. The equation holds for every real number. Only if $k\ne2$ can we divide by $k-2$ to get $x^2+x+1=0$, with discriminant $-3$ and no real roots. This family therefore goes from no solutions to infinitely many solutions. Checking the degree before computing a discriminant distinguishes an identity from a double root.
:::

## Applications and interpreting solutions

:::esempio{#problemi titolo="Choosing a physically possible measurement"}
A rectangle has area $45\,\mathrm{cm}^2$ and width $4\,\mathrm{cm}$ greater than its height. If $h$ is the height in centimetres, then $h(h+4)=45$. The standard form factors as $(h-5)(h+9)=0$. The candidates are $5$ and $-9$. Choose $h=5$, since the side lengths must be positive. The width is $9$, and the check $5\cdot9=45$ recovers the area. The negative value solves the equation but is outside the domain of the measurements.

::grafico{assi=0 uguale=1 xmin=-1.14 xmax=10.25 ymin=-1 ymax=5.9 poligoni="0,0 9,0 9,5 0,5" linee="0,0 9,0 9,5 0,5 0,0" etichette="4.17,-0.53,9 cm;-0.85,2.35,5 cm" titolo="The allowed height and width give an area of 45 cm²"}
:::

:::esempio{titolo="A required area at a fixed perimeter"}
For perimeter $28\,\mathrm{cm}$, adjacent sides have sum $14\,\mathrm{cm}$. For area $48\,\mathrm{cm}^2$, the sides must be the roots of $t^2-14t+48=0$. The discriminant is $196-192=4$, so the side lengths are $6$ and $8$, both positive. Swapping them only changes which side is called the width.

If the required area is $50\,\mathrm{cm}^2$, the discriminant becomes $196-200=-4$, so no real pair satisfies the two conditions. More generally, for half-perimeter $s$ and area $A$, the condition $s^2-4A\ge0$ requires $A\le\dfrac{s^2}{4}$. At that bound the roots coincide: the rectangle of greatest area at fixed perimeter is a square.
:::

:::esempio{titolo="A root before the model starts"}
The height of an object in metres after $t$ seconds follows the model $h(t)=-t^2+6t+7$, valid from launch until the object hits the ground. To find that time, solve $h(t)=0$. Since $-t^2+6t+7=-(t-7)(t+1)$, the candidates are $-1$ and $7$. The first is before launch and the second gives an impact after $7$ seconds. In the interval $0\le t<7$, the factor $t-7$ is negative and $t+1$ is positive. The height is therefore positive, so $7$ is indeed the first time after launch when the object reaches the ground.
:::
