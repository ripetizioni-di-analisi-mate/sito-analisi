---
titolo: "Quadratic equations"
sommario: "The quadratic formula, discriminant, Viète’s relations, domain restrictions, and choosing roots in applications."
---

## Standard form and the meaning of roots

:::definizione{#forma titolo="Coefficients and solutions"}
A **quadratic equation** (an equation of the second degree) is an equation in which the unknown $x$ appears squared and with no higher powers. After the calculations are carried out it always reduces to the **standard form**
$$
ax^2+bx+c=0\qquad\text{with } a\ne0,
$$
where $a$, $b$, $c$ are real numbers called **coefficients**:

- $a$ is the coefficient of $x^2$, also called the leading coefficient;
- $b$ is the coefficient of $x$, called the linear coefficient;
- $c$ is the constant term, that is, the number that does not multiply the unknown.

The condition $a\ne0$ is needed because with $a=0$ the term $x^2$ disappears and the equation becomes linear (first degree). The left-hand side $ax^2+bx+c$ is a polynomial of degree two; when it has three terms it is also called a trinomial.

To identify $a$, $b$, and $c$, expand the products, bring all terms to the left-hand side (to the left of the equals sign), and add the terms of the same degree. The sign is part of the coefficient: in $x^2-7=0$ we have $a=1$, $b=0$, $c=-7$. A missing term therefore has coefficient zero. If the terms in $x^2$ cancel, the degree is determined after the cancellation. For example, $(x+1)^2=x^2+3$ becomes $x^2+2x+1=x^2+3$, that is $2x-2=0$, which is linear.

A real **root** (or solution) is a value of $x$ for which the polynomial equals zero. The solutions are collected in the solution set, written $S=\{\ldots\}$; if there are none we write $S=\varnothing$ (the empty set). Two equations with the same solutions are called **equivalent**, and between them we write the symbol $\iff$, read “is equivalent to”. If the equation comes from a fraction or from a problem in which the measurements have constraints, the value must also belong to the original domain, that is, to the set of values of $x$ for which the starting equation makes sense.
:::

:::esempio{titolo="An equation as the intersection of two graphs"}
For $x(x+1)=12$, expand the product and subtract $12$ from both sides:
$$
x^2+x=12\iff x^2+x-12=0,
$$
with $a=1$, $b=1$, and $c=-12$. Since $(x+4)(x-3)=x^2+x-12$, the roots are $-4$ and $3$: indeed $(-4)\cdot(-3)=12$ and $3\cdot4=12$.

For a point in the plane, the horizontal coordinate is called the $x$-coordinate and the vertical coordinate the $y$-coordinate. The graph of $y=x^2+x$ is a U-shaped curve called a **parabola**; the graph of $y=12$ is a horizontal line. At their intersections both vertical coordinates equal $12$, and the horizontal coordinates of those points are $-4$ and $3$. The reduced equation subtracts $12$ from every vertical coordinate of the first graph, so at those same points the polynomial $x^2+x-12$ equals zero. The solutions can therefore also be read as the zeroes of the new polynomial.

::grafico{f="x^2+x;12" legenda="y=x^2+x;y=12" xmin=-5 xmax=4 ymin=-2 ymax=17 punti="-4,12,pieno;3,12,pieno" segmenti="-4,0,-4,12;3,0,3,12" titolo="The solutions are −4 and 3, the horizontal coordinates of the intersections"}
:::

## Quadratics with a missing term

::::teorema{#incomplete titolo="Using the missing term"}
A quadratic equation with a missing term can be solved without the formula.

- If $b=0$ (there is no term in $x$), the equation is called **pure**. From $ax^2+c=0$ we get $x^2=-\dfrac ca$.
- If $c=0$ (there is no constant term), the equation is called an equation **with no constant term**. Factoring out $x$ gives $x(ax+b)=0$.
:::dimostrazione
Pure equation. Subtract $c$ and divide by $a$, which is nonzero, to get $x^2=-\dfrac ca$. Denote the right-hand side by $u$. The square root $\sqrt u$ of a number $u>0$ is the positive number whose square is $u$.

- If $u>0$, the roots are $\sqrt u$ and $-\sqrt u$, because both squares equal $u$. In short we write $x=\pm\sqrt u$ (“plus or minus root $u$”).
- If $u=0$, the only value is zero.
- If $u<0$, there are no real roots, because the square of a real number is never negative.

Equation with no constant term. By the **zero product property**, a product of real numbers is zero exactly when at least one factor is zero. From $x(ax+b)=0$ it therefore follows that $x=0$ or $ax+b=0$. The second equation gives $ax=-b$, that is $x=-\dfrac ba$. If $b=0$ too, the two values coincide.
:::
::::

:::esempio{titolo="Opposite roots and an exact check"}
From $3x^2=18$, divide by $3$ to get $x^2=6$, so $x=\pm\sqrt6$. The two roots are opposite, that is, they have the same absolute value and different signs; the absolute value $|x|$ is the distance of $x$ from zero. Since $\sqrt{x^2}=|x|$, from $x^2=6$ it follows that $|x|=\sqrt6$.

To find where they lie, compare $6$ with the squares $2^2=4$ and $3^2=9$. Since $4<6<9$, the absolute value of each root is between $2$ and $3$. Substituting either root into the original equation gives $3(\pm\sqrt6)^2=3\cdot6=18$. The minus sign gives the second solution: on the graph the two points are symmetric across the vertical axis. A rounded value such as $2.45$ helps place the roots on the graph; the exact check uses the radical $\sqrt6$.

::grafico{f="3*x^2;18" legenda="y=3x^2;y=18" xmin=-3.2 xmax=3.2 ymin=-2 ymax=24 punti="-2.449489743,18,pieno;2.449489743,18,pieno" titolo="The horizontal coordinates are opposites and have the same square"}
:::

:::esempio{titolo="Keeping zero as a root"}
In $3x^2+2x=0$ the two terms share the factor $x$. Factoring out $x$ gives $x(3x+2)=0$. By the zero product property, $x=0$ or $3x+2=0$, that is $x=-\dfrac23$. The distinct roots are therefore $0$ and $-\dfrac23$.

Dividing by $x$ at the start is valid only for $x\ne0$, and the excluded case is itself a solution; therefore the division would give only $-\dfrac23$. The graph of $y=3x^2+2x$ meets the horizontal axis at two points. At the origin the first factor $x$ is zero; at the point with horizontal coordinate $-\dfrac23$ the second factor $3x+2$ is zero.

::grafico{f="3*x^2+2*x" xmin=-1.4 xmax=0.7 ymin=-0.55 ymax=2.4 punti="-0.666666667,0,pieno;0,0,pieno" etichette="-0.79,-0.2,−2⁄3" titolo="Factoring reveals both zeroes"}
:::

## The quadratic formula

::::teorema{#formula titolo="Completing the square"}
Let $ax^2+bx+c=0$ with $a\ne0$. The number
$$
\Delta=b^2-4ac
$$
is called the **discriminant** and is denoted by the Greek letter $\Delta$, read “delta”. If $\Delta\ge0$, the roots are
$$
x_1=\frac{-b+\sqrt\Delta}{2a},\qquad x_2=\frac{-b-\sqrt\Delta}{2a},
$$
written together as $x=\dfrac{-b\pm\sqrt\Delta}{2a}$ (the **quadratic formula**). If $\Delta<0$, there are no real roots.
:::dimostrazione
The idea is to turn the left-hand side into the square of a binomial, using $(p+q)^2=p^2+2pq+q^2$.

Subtract $c$ from both sides, multiply by $4a$, and then add $b^2$ to both sides:

$$
\begin{aligned}
ax^2+bx&=-c\\[6pt]
4a^2x^2+4abx&=-4ac\\[6pt]
4a^2x^2+4abx+b^2&=b^2-4ac.
\end{aligned}
$$

The left-hand side is the square of $2ax+b$, because $(2ax)^2=4a^2x^2$ and the double product is $2\cdot2ax\cdot b=4abx$. We therefore get
$$
(2ax+b)^2=\Delta.
$$

The multiplication by $4a$ is undone by dividing by $4a$, which is nonzero, so the solutions do not change. A real square is never negative, so with $\Delta<0$ there are no solutions. If $\Delta\ge0$, the number $2ax+b$ equals $\sqrt\Delta$ or $-\sqrt\Delta$. Subtracting $b$ gives $2ax=-b\pm\sqrt\Delta$, and dividing by $2a$ gives the formula. With $\Delta=0$, both signs lead to the same value.
:::
::::

:::esempio{titolo="Exact roots and their signs"}
In $3x^2-2x-2=0$ the coefficients are $a=3$, $b=-2$, $c=-2$. The discriminant is
$$
\Delta=(-2)^2-4\cdot3\cdot(-2)=4+24=28.
$$
Since $28=4\cdot7$, we have $\sqrt{28}=2\sqrt7$, and the formula gives
$$
x=\frac{2\pm2\sqrt7}{6}=\frac{1\pm\sqrt7}{3},
$$
after dividing the numerator and the denominator by $2$. The number $28$ is not a perfect square (the square of an integer), so $\sqrt{28}$ is irrational and the roots are left in this exact form. Since $\sqrt7>1$, the numerator $1+\sqrt7$ is positive and $1-\sqrt7$ is negative, so one root is positive and the other negative.

To check the arithmetic, use the completed square from the proof, in which $2ax+b=6x-2$. If $x=\dfrac{1\pm\sqrt7}{3}$, then $6x-2=2(1\pm\sqrt7)-2=\pm2\sqrt7$, and in both cases $(6x-2)^2=4\cdot7=28$.
:::

:::osservazione{titolo="A shorter formula for an even linear coefficient"}
If $b$ is even, write $b=2d$, so $d$ is half of $b$. The discriminant becomes
$$
\Delta=4d^2-4ac=4(d^2-ac).
$$
When $d^2-ac\ge0$, we have $\sqrt{4(d^2-ac)}=2\sqrt{d^2-ac}$, so in the numerator of the formula the factor $2$ appears both in $-2d$ and in the root. Cancelling it with the $2$ in $2a$ gives
$$
x=\frac{-d\pm\sqrt{d^2-ac}}{a}.
$$
In $2x^2+8x+6=0$ we have $d=4$. This gives $d^2-ac=16-12=4$, so $x=\dfrac{-4\pm2}{2}$, namely $-1$ and $-3$. The direct calculation, with $\Delta=64-48=16$, gives the same roots.
:::

## The discriminant, the vertex, and double roots

::::teorema{#discriminante titolo="Reading the number of intersections"}
The sign of the discriminant tells how many real roots there are:

- with $\Delta>0$ there are two distinct real roots;
- with $\Delta=0$ there is one distinct root, $-\dfrac b{2a}$, which is a **double** root;
- with $\Delta<0$ no roots are real.

A root is double when the polynomial contains twice the factor that produces it, like $x-4$ in $(x-4)^2$; we also say it has **multiplicity** two. A root produced by a single factor is called simple.
:::dimostrazione
The graph of $y=ax^2+bx+c$ is a parabola. It opens upwards if $a>0$ and downwards if $a<0$. Its **vertex** is the lowest point (if $a>0$) or the highest point (if $a<0$), and the vertical line through the vertex is the **axis of symmetry**.

Expanding the square shows that
$$
a\left(x+\frac b{2a}\right)^2-\frac{\Delta}{4a}=ax^2+bx+\frac{b^2}{4a}-\frac{b^2-4ac}{4a}=ax^2+bx+c.
$$
The square is zero for $x=-\dfrac b{2a}$, so the vertex has horizontal coordinate $-\dfrac b{2a}$ and vertical coordinate $-\dfrac{\Delta}{4a}$.

- When $\Delta=0$, the polynomial is $a\left(x+\dfrac b{2a}\right)^2$, that is, a multiple of the square of a linear factor.
- When $\Delta>0$, the equation is equivalent to $\left(x+\dfrac b{2a}\right)^2=\dfrac{\Delta}{4a^2}$, with a positive right-hand side. The number $x+\dfrac b{2a}$ is the signed distance of $x$ from the axis of symmetry, so there are two horizontal coordinates, one to the right and one to the left of the axis at the same distance. For this reason the axis lies halfway between the two roots, that is $-\dfrac b{2a}=\dfrac{x_1+x_2}{2}$.
- If $\Delta<0$, the right-hand side $\dfrac{\Delta}{4a^2}$ is negative, so the equation is impossible.
:::
::::

:::esempio{titolo="Moving the vertex by changing the constant"}
The polynomials $x^2-4x+5$, $x^2-4x+4$, and $x^2-4x+3$ differ only in the constant term and share the same axis $x=2$. Since $(x-2)^2=x^2-4x+4$, completing the square gives
$$
(x-2)^2+1,\qquad (x-2)^2,\qquad (x-2)^2-1.
$$
The square $(x-2)^2$ is at least zero, so the minimum value of each polynomial occurs at $x=2$ and equals $1$, $0$, $-1$ respectively.

- In the first case the minimum is positive and the parabola does not meet the horizontal axis.
- In the second case the vertex touches the axis at $x=2$, which is a double root.
- In the third case the minimum is negative and the zeroes are $1$ and $3$, because $(x-2)^2=1$ gives $x-2=\pm1$.

The three parabolas in the graph are the same curve moved up or down (a vertical shift). The three outcomes depend only on the height of the vertex.

::grafico{f="(x-2)^2+1;(x-2)^2;(x-2)^2-1" legenda="y=(x-2)^2+1;y=(x-2)^2;y=(x-2)^2-1" xmin=-0.6 xmax=4.7 ymin=-1.8 ymax=5.1 punti="1,0,pieno;2,0,pieno;3,0,pieno" titolo="With the axis fixed, the height of the vertex determines the number of roots"}
:::

:::osservazione{titolo="A downward-opening parabola"}
For $-x^2-2x-3=0$ we have $a=-1$, $b=-2$, $c=-3$, and therefore
$$
\Delta=(-2)^2-4\cdot(-1)\cdot(-3)=4-12=-8.
$$
Completing the square, $-x^2-2x-3=-(x^2+2x+1)-2=-(x+1)^2-2$. The curve $y=-(x+1)^2-2$ opens downwards, because $a<0$, and has maximum $-2$ at the vertex $V=(-1;-2)$. It therefore stays entirely below the horizontal axis. In general, when the discriminant is negative, all values of the polynomial have the sign of $a$.

If there are two distinct roots, the distance between their horizontal coordinates is $\dfrac{\sqrt\Delta}{|a|}$. It is obtained by subtracting the two values from the formula,
$$
\frac{-b+\sqrt\Delta}{2a}-\frac{-b-\sqrt\Delta}{2a}=\frac{2\sqrt\Delta}{2a}=\frac{\sqrt\Delta}{a},
$$
and taking the absolute value, which makes the distance positive even when $a<0$.

::grafico{f="-(x+1)^2-2" xmin=-3.8 xmax=1.8 ymin=-9.6 ymax=1.15 punti="-1,-2,pieno,V" titolo="The maximum is −2, so the parabola does not reach the horizontal axis"}
:::

:::osservazione{titolo="Changing scale leaves the roots in place"}
Multiply all the coefficients by a number $\lambda\ne0$ (a Greek letter read “lambda”). The solutions do not change, because dividing by $\lambda$ gives back the original equation. The new discriminant is
$$
(\lambda b)^2-4(\lambda a)(\lambda c)=\lambda^2b^2-4\lambda^2ac=\lambda^2\Delta.
$$
Since $\lambda^2>0$, the sign stays the same.

For example, $x^2-5x+4=0$ has discriminant $25-16=9$ and roots $1$ and $4$. Multiplying by $-2$ gives $-2x^2+10x-8=0$, with discriminant $100-64=36=(-2)^2\cdot9$. The roots are still $1$ and $4$ and their distance is still $3$, because in the second case $\dfrac{\sqrt{36}}{|-2|}=\dfrac62=3$. The value of the discriminant therefore depends on the form chosen, while its sign and the distance between the zeroes stay the same.
:::

## Viète’s relations and constructing an equation from its roots

::::teorema{#viete titolo="Sum, product, and factorisation"}
Let $x_1$ and $x_2$ (read “$x$ one” and “$x$ two”) be the real roots of $ax^2+bx+c=0$, counting a double root twice. Then **Viète’s relations** hold, named after the French mathematician François Viète:

$$
x_1+x_2=-\frac ba,\qquad x_1x_2=\frac ca.
$$

Moreover the polynomial factorises as $a(x-x_1)(x-x_2)$.
:::dimostrazione
Case of two distinct roots. Consider the difference between $ax^2+bx+c$ and $a(x-x_1)(x-x_2)$. The terms in $x^2$ equal $ax^2$ in both and cancel, so the difference has the form $mx+q$. It is zero at $x_1$ and at $x_2$, because both polynomials vanish there. From $mx_1+q=0$ and $mx_2+q=0$, subtracting gives $m(x_1-x_2)=0$. Since $x_1\ne x_2$, it follows that $m=0$ and hence also $q=0$. The difference is therefore zero for every $x$, and the two polynomials coincide.

Case of a double root. The completed square with $\Delta=0$ gives $ax^2+bx+c=a(x-x_1)^2$ with $x_1=x_2=-\dfrac b{2a}$.

In both cases, expand the product:
$$
a(x-x_1)(x-x_2)=ax^2-a(x_1+x_2)x+ax_1x_2.
$$
Comparing the coefficients of $x$ and the constant terms with $ax^2+bx+c$ gives $b=-a(x_1+x_2)$ and $c=ax_1x_2$. Dividing by $a$ gives the two relations.
:::
::::

:::esempio{titolo="Prescribed roots and leading coefficient"}
We want a quadratic polynomial with roots $-1$ and $3$. By the factorisation $a(x-x_1)(x-x_2)$ we need the factors $x+1$ and $x-3$. A polynomial with leading coefficient $1$ is called **monic**: here it is
$$
(x+1)(x-3)=x^2-3x+x-3=x^2-2x-3.
$$
If the leading coefficient must be $2$, multiply by $2$: the required trinomial is $2x^2-4x-6$. The two graphs have different vertical coordinates, because every vertical coordinate of the second is doubled, but they have the same zeroes. The relations give sum $2$ and product $-3$ in both cases: indeed $-\dfrac{-4}{2}=2$ and $\dfrac{-6}{2}=-3$. The ratios $-\dfrac ba$ and $\dfrac ca$ are unchanged when all coefficients are multiplied by the same nonzero number.

::grafico{f="(x+1)*(x-3);2*(x+1)*(x-3)" legenda="y=(x+1)(x-3);y=2(x+1)(x-3)" xmin=-2 xmax=4 ymin=-9 ymax=9 punti="-1,0,pieno;3,0,pieno" titolo="Doubling all vertical coordinates preserves the zeroes"}
:::

:::esempio{titolo="Recovering numbers from their sum and product"}
We look for two numbers with sum $s$ and product $p$. If the numbers are $x_1$ and $x_2$, then
$$
(t-x_1)(t-x_2)=t^2-(x_1+x_2)t+x_1x_2=t^2-st+p,
$$
so the two numbers are the roots of $t^2-st+p=0$. The discriminant $s^2-4p$ determines whether two real numbers with those values exist.

- For $s=5$ and $p=7$ we get $25-28=-3<0$, so no such pair exists.
- For $s=-7$ and $p=10$ we get $t^2+7t+10=(t+2)(t+5)$, and the two numbers are $-2$ and $-5$.

The sum of the squares can also be found without finding the individual values. Since $(x_1+x_2)^2=x_1^2+2x_1x_2+x_2^2$, we have $x_1^2+x_2^2=s^2-2p$, which in the second case equals $49-20=29$; indeed $4+25=29$. When $s^2=4p$ the discriminant is zero and the two numbers coincide.
:::

:::esempio{titolo="One known root determines the other and a coefficient"}
Suppose $3$ is a root of $2x^2+bx-24=0$. The product of the roots is $\dfrac ca=\dfrac{-24}{2}=-12$, so the other root is $\dfrac{-12}{3}=-4$. Their sum is $3+(-4)=-1$, so $-\dfrac b2=-1$ and $b=2$.

As a check, substitute $3$ into the equation: $2\cdot9+3b-24=0$, that is $3b=6$, which gives the same coefficient $b=2$. Substituting $3$ determines $b$, while the product relation also gives the other root without using the quadratic formula. This method divides by the known root, so it requires that root to be nonzero.
:::

## Rational equations and checking the domain

::::teorema{#fratte titolo="Intersecting the candidates with the domain"}
An equation is **rational** (fractional) when the unknown appears in a denominator. Its domain consists of the values of $x$ that make no denominator zero; the requirements $x\ne\ldots$ are called **domain restrictions**. The domain is written by removing the excluded values from $\mathbb R$ (the set of real numbers), for example $\mathbb R\setminus\{2\}$.

After excluding the zeroes of the denominators, multiply both sides by a common multiple of the denominators, which is nonzero in the domain. The solutions of the resulting equation are called **candidates**. The solutions are only the candidates that belong to the original domain.
:::dimostrazione
For every $x$ in the domain the common multiple is nonzero, so dividing by it gives back the starting equation. The two equations are therefore equivalent in the domain. Outside the domain, at least one side of the original equation is undefined. Consequently a candidate that makes a denominator zero is not a solution, even if it satisfies the equation without fractions.
:::
::::

:::esempio{titolo="A common factor leaves a missing point"}
In $\dfrac{x^2-5x+6}{x-2}=0$ the denominator is zero for $x=2$, so $x=2$ is excluded. A fraction equals zero when the numerator is zero and the denominator is not. The numerator factors as $(x-2)(x-3)$ and its zeroes are $2$ and $3$. The first is excluded, so only $x=3$ remains.

For $x\ne2$ the factor $x-2$ cancels and the left-hand side becomes $x-3$. The graph is therefore the line $y=x-3$ without the point with horizontal coordinate $2$. In the figure the point $(2;-1)$ is open and the only allowed zero is $(3;0)$. Checking the original equation gives $\dfrac{9-15+6}{3-2}=\dfrac01=0$.

::grafico{f="x-3" xmin=-0.6 xmax=5.4 ymin=-4 ymax=2.6 punti="2,-1,vuoto;3,0,pieno" titolo="The left side has one zero and one missing point"}
:::

:::esempio{titolo="Two denominators sharing a factor"}
In the equation $\dfrac{x+1}{x-2}=\dfrac{18}{(x-2)(x+1)}$, the values $2$ and $-1$ are excluded because they make the denominators zero. Multiply both sides by $(x-2)(x+1)$, which contains both denominators:
$$
\begin{aligned}
(x+1)^2&=18\\[6pt]
x+1&=\pm\sqrt{18}=\pm3\sqrt2\\[6pt]
x&=-1\pm3\sqrt2.
\end{aligned}
$$
Here $\sqrt{18}=\sqrt{9\cdot2}=3\sqrt2$. Neither root is $-1$, because at $-1$ the square $(x+1)^2$ equals zero and not $18$. Neither is $2$, because at $2$ the square equals $9$. Both roots therefore belong to the domain. Since for those values the multiplication is undone by dividing, the two roots also satisfy the original equation.
:::

## Parameters and conditions on the roots

:::esempio{#parametri titolo="Distinguishing a drop in degree from a zero discriminant"}
A **parameter** is a letter, here $k$, standing for a number that is fixed but not given; we study how the solutions change as $k$ varies.

In $(k-1)x^2+x-1=0$ the coefficient of $x^2$ is $k-1$, which is zero for $k=1$. With $k=1$ we get $x-1=0$, a linear equation with solution $1$. For $k\ne1$ the equation is quadratic with $a=k-1$, $b=1$, $c=-1$, so
$$
\Delta=1^2-4(k-1)(-1)=1+4(k-1)=4k-3.
$$

- If $k<\dfrac34$, then $\Delta<0$ and there are no real roots.
- If $k=\dfrac34$, the discriminant is zero. The equation is $-\dfrac14x^2+x-1=0$; multiplying by $-4$ it becomes $x^2-4x+4=(x-2)^2=0$, with double root $2$.
- If $k>\dfrac34$ and $k\ne1$, there are two distinct roots.

Both $k=1$ and $k=\dfrac34$ give one distinct solution, for different reasons. In the first case the parabola has become a line; in the second it touches the axis at a single point, called the point of tangency.
:::

:::esempio{titolo="Requiring two distinct positive roots"}
In $x^2-6x+k=0$ we have $a=1$, so by Viète’s relations the sum of the roots is $6$ and the product is $k$. Two conditions are needed together:
$$
\begin{cases}
\Delta=36-4k>0\\
k>0.
\end{cases}
$$
The first condition ensures two distinct real roots and gives $4k<36$, that is $k<9$. A positive product $k$ forces the roots to have the same sign, and the positive sum $6$ establishes that this sign is positive. This gives $0<k<9$, also written as the open interval $(0,9)$.

The endpoints are excluded, because at $k=0$ one root is zero and at $k=9$ the roots coincide. For $k<0$ the roots have opposite signs, because $36-4k>0$ and the product is negative. The figure shows the values of $k$ on a directed line. The segment between $0$ and $9$ is the allowed one, and the two open circles mark the excluded endpoints.

::grafico{xmin=-1.4 xmax=10.6 ymin=-0.72 ymax=0.9 uguale=1 assi=0 vettori="-1.05,0,10.1,0" linee="0,0.28 9,0.28" segmenti="0,0,0,0.28;9,0,9,0.28" punti="0,0,vuoto;9,0,vuoto" etichette="-0.07,-0.33,0;8.93,-0.33,9;10.2,0.08,k" titolo="The allowed parameters are between 0 and 9, with both endpoints excluded"}
:::

:::esempio{titolo="When every coefficient vanishes"}
In $(k-2)(x^2+x+1)=0$, taking $k=2$ makes the entire left-hand side zero, since it becomes $0\cdot(x^2+x+1)=0$. The equation holds for every real number: an equation of this kind is called an **identity**. Only if $k\ne2$ can we divide by $k-2$ to get $x^2+x+1=0$, which has discriminant $1-4=-3$ and no real roots. Therefore, going from $k\ne2$ to $k=2$, the equation goes from no solutions to infinitely many solutions. Checking the coefficient of $x^2$ before computing the discriminant distinguishes the case of an identity from that of a double root.
:::

## Applications and interpreting solutions

:::esempio{#problemi titolo="Choosing a physically possible measurement"}
A rectangle has area $45\,\mathrm{cm}^2$ and width $4\,\mathrm{cm}$ greater than its height. If $h$ is the height in centimetres, the width is $h+4$ and the area gives $h(h+4)=45$. The standard form and its factorisation are
$$
h^2+4h-45=0\iff(h-5)(h+9)=0.
$$
The candidates are $5$ and $-9$. Choose $h=5$, because the sides of a rectangle are positive. The width is $5+4=9$ and the check $5\cdot9=45$ recovers the area, as in the $9\,\mathrm{cm}$ by $5\,\mathrm{cm}$ rectangle in the figure. The candidate $-9$ is a root of the equation, but it is outside the domain of the problem, that is, the values a length can take.

::grafico{assi=0 uguale=1 xmin=-1.14 xmax=10.25 ymin=-1 ymax=5.9 poligoni="0,0 9,0 9,5 0,5" linee="0,0 9,0 9,5 0,5 0,0" etichette="4.17,-0.53,9 cm;-0.85,2.35,5 cm" titolo="The allowed height and width give an area of 45 cm²"}
:::

:::esempio{titolo="A required area at a fixed perimeter"}
A rectangle has perimeter $28\,\mathrm{cm}$. The **half-perimeter**, that is, half of the perimeter, is the sum of width and height: $14\,\mathrm{cm}$. For area $48\,\mathrm{cm}^2$, the two sides must have sum $14$ and product $48$, so they are the roots of $t^2-14t+48=0$. The discriminant is $196-192=4$, so $t=\dfrac{14\pm2}{2}$ and the sides are $6$ and $8$, both positive. Swapping them only changes which side is called the width.

If the required area is $50\,\mathrm{cm}^2$, the discriminant becomes $196-200=-4$, so no real pair satisfies the two conditions. In general, with half-perimeter $s$ and area $A$ the equation is $t^2-st+A=0$, and the condition $s^2-4A\ge0$ requires $A\le\dfrac{s^2}{4}$. At that bound the roots coincide, so the rectangle of greatest area at fixed perimeter is a square. With $s=14$ the greatest area is $\dfrac{196}{4}=49\,\mathrm{cm}^2$.
:::

:::esempio{titolo="A root before the model starts"}
A model is a formula that describes a real phenomenon within certain limits. The height of an object in metres after $t$ seconds follows the model $h(t)=-t^2+6t+7$, valid from launch ($t=0$) until the object hits the ground. To find that time, solve $h(t)=0$. Since
$$
-(t-7)(t+1)=-(t^2-6t-7)=-t^2+6t+7,
$$
the candidates are $-1$ and $7$. The first is before launch, so it is outside the domain of the model; the second gives an impact after $7$ seconds. For $0\le t<7$ the factor $t-7$ is negative and $t+1$ is positive, so their product is negative and $h(t)$, its opposite, is positive. Therefore $7$ is indeed the first time after launch when the object reaches the ground.
:::
