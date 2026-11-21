---
titolo: Quadratic and rational inequalities
sommario: Signs of quadratics and quotients, intervals with excluded points, systems, and domains with radicals.
---

A quadratic inequality contains the unknown squared, as in $x^2-5x+6>0$. This chapter shows how to find the values of $x$ for which an inequality of this kind is true. One looks for the values where the expression equals zero and studies its sign between one value and the next. The same method works for fractions, where the values that make the denominator zero are also excluded.

## Domain, sign, and representation

:::definizione{#intervalli titolo="Comparing with zero in the given domain"}
An **inequality** is a comparison between two expressions using one of the symbols $<$ (less than), $\le$ (less than or equal to), $>$ (greater than), $\ge$ (greater than or equal to). For example, $x^2\le3x+4$ is an inequality. The expression to the left of the symbol is the **left-hand side**, the one to the right is the **right-hand side**. The symbols $<$ and $>$ give a **strict** comparison, which excludes equality; the symbols $\le$ and $\ge$ give a **non-strict** comparison, which allows it. The **direction** of the inequality is the direction of the symbol.

The **domain** is the set of values of $x$ for which both expressions are defined. For example, $\dfrac1x$ is not defined at $x=0$, because one cannot divide by zero. Solving an inequality means finding all values in the domain that make the comparison true. These values form the **solution set**, denoted by $S$.

To compare $A(x)$ and $B(x)$, one studies the sign of the difference $A(x)-B(x)$ at points where both expressions are defined. The inequality $A(x)\le B(x)$ is true when that difference is less than or equal to zero. Equality is included only when the symbol allows it and the point belongs to the domain.

Solution sets are written using **intervals**. The two numbers that bound an interval are its **endpoints**; square brackets mark an included endpoint, round brackets an excluded endpoint.

- $[2,5]$ is the set of numbers $x$ with $2\le x\le5$.
- $(2,5)$ is the set of numbers $x$ with $2<x<5$.
- $[2,5)$ contains $2$ and excludes $5$.
- $(-\infty,3]$ contains all numbers less than or equal to $3$; $(5,+\infty)$ contains all numbers greater than $5$. The symbol $\infty$ is read «infinity» and always has a round bracket next to it, because it is not a number.

The other symbols used in this chapter are the following.

- $x\in[2,5]$ is read «$x$ belongs to $[2,5]$».
- $\mathbb R$ is the set of all real numbers.
- $\{3\}$ is the set made up of the number $3$ alone.
- $\varnothing$ is the **empty set**, which contains no numbers; it is the solution set of an inequality that is never true.
- $A\cup B$ is the **union** of $A$ and $B$, that is, the set of numbers lying in at least one of the two. For example, $(-\infty,1]\cup[3,+\infty)$ contains $0$ and $4$ but not $2$.
- $A\cap B$ is the **intersection** of $A$ and $B$, that is, the set of numbers lying in both.
- $\mathbb R\setminus\{3\}$ is the set of real numbers with $3$ removed.
- $\forall x$ is read «for every $x$».
- $\lor$ is read «or».
:::

:::esempio{titolo="Reading where one curve is below another"}
The graph of $y=x^2$ is a curve called a **parabola**; the graph of $y=3x+4$ is a straight line. A point in the plane has as first coordinate the **horizontal coordinate** $x$ and as second coordinate the **vertical coordinate** $y$. The inequality $x^2\le3x+4$ asks where the parabola lies below the line or meets it.

Moving everything to the left-hand side gives the difference
$$
x^2-3x-4=(x+1)(x-4).
$$
The factorisation is checked by expanding the product: $(x+1)(x-4)=x^2-4x+x-4=x^2-3x-4$. The product equals zero for $x=-1$ and for $x=4$, so the two graphs meet at the points with horizontal coordinates $-1$ and $4$. At $x=0$ the parabola is at $0$ and the line is at $4$. Since $0\le4$, the origin belongs to the solution set. Between $-1$ and $4$ the factor $x+1$ is positive and $x-4$ is negative, so the product is negative; outside that stretch the two factors have the same sign and the product is positive. The solution set is therefore $[-1,4]$, as the figure shows.

::grafico{f="x^2;3*x+4" xmin=-2.2 xmax=5.3 ymin=-2.3 ymax=26.6 nomi="x,y" legenda="y=x^2;y=3x+4" punti="-1,1,pieno;4,16,pieno;0,0,pieno;0,4,pieno" segmenti="-1,0,-1,1;4,0,4,16" titolo="The horizontal coordinates of the intersections give the boundaries of the inequality"}
:::

## Two distinct real roots

::::teorema{#segno titolo="How the sign changes at the two zeros"}
A **quadratic** (a trinomial of degree two) is an expression $P(x)=ax^2+bx+c$, where the **coefficients** $a$, $b$, $c$ are numbers and $a\ne0$; $a$ is the **leading coefficient**. The graph of $y=P(x)$ is a parabola opening upwards if $a>0$ and downwards if $a<0$. A **root**, or **zero**, of the quadratic is a value of $x$ at which the quadratic equals zero. If the quadratic has two distinct real roots $r_1<r_2$ (read «r one» and «r two»), then it has the sign of $a$ outside the interval between the roots and the opposite sign inside it. At $r_1$ and $r_2$ it equals zero.

:::dimostrazione
A quadratic with roots $r_1$ and $r_2$ factors as $P(x)=a(x-r_1)(x-r_2)$. The factor $x-r_1$ is negative when $x<r_1$ and positive when $x>r_1$; the same holds for $x-r_2$ with respect to $r_2$.

- If $x<r_1$, the number $x$ is less than both roots, so both factors are negative.
- If $r_1<x<r_2$, the first factor is positive and the second negative.
- If $x>r_2$, both factors are positive.

The product of two numbers with the same sign is positive, and the product of two numbers with opposite signs is negative. Before multiplying by $a$, therefore, the product is positive on the two outer intervals and negative on the middle one. If $a>0$ the signs stay as they are. If $a<0$, that last factor reverses all three signs.
:::

| Interval | $x<r_1$ | $r_1<x<r_2$ | $x>r_2$ |
| --- | --- | --- | --- |
| $x-r_1$ | $-$ | $+$ | $+$ |
| $x-r_2$ | $-$ | $-$ | $+$ |
| $(x-r_1)(x-r_2)$ | $+$ | $-$ | $+$ |
::::

:::esempio{titolo="The same pair of roots with opposite leading coefficients"}
The quadratic $P(x)=(x-2)(x-3)$ has $a=1>0$, so it is negative between its roots. Hence $P(x)\le0$ has solution set $[2,3]$, endpoints included because the quadratic equals zero at $2$ and at $3$.

The inequality $-P(x)<0$ is equivalent to $P(x)>0$, because multiplying both sides by $-1$ reverses the direction. This gives $(-\infty,2)\cup(3,+\infty)$. The endpoints are excluded in this last comparison because the value zero is not strictly negative.

In the figure the two parabolas have the same zeros $2$ and $3$; at the point $x=2.5$ the first equals $-0.25$ and the second $0.25$.

::grafico{f="(x-2)*(x-3);-(x-2)*(x-3)" xmin=0.2 xmax=4.8 ymin=-5.2 ymax=5.2 nomi="x,y" legenda="P(x);-P(x)" punti="2,0,pieno;3,0,pieno;2.5,-0.25,pieno;2.5,0.25,pieno" titolo="The parabolas have common zeros and opposite signs on the three intervals"}
:::

:::esempio{titolo="A minimum area between two boundary values"}
A rectangle has sides $x$ and $12-x$, in metres, with $0<x<12$ because both sides are positive lengths. The area is the product of the sides. To reach at least $35\,\mathrm{m}^2$ one requires $x(12-x)\ge35$. Moving $35$ to the left-hand side gives
$$
x(12-x)-35=-x^2+12x-35=-(x^2-12x+35)=-(x-5)(x-7).
$$
Between the roots $5$ and $7$ the product $(x-5)(x-7)$ is negative and the minus sign makes it positive. The area reaches the exact threshold at the two endpoints, so the values $[5,7]$ are allowed, and they already lie between $0$ and $12$. For $x=6$ the area is $6\cdot6=36\,\mathrm{m}^2$. For $x=8$ it is $8\cdot4=32\,\mathrm{m}^2$, below the minimum.
:::

## Double roots and no real roots

::::teorema{#discriminante titolo="The sign when the discriminant is zero or negative"}
For the quadratic $ax^2+bx+c$, with $a\ne0$, the **discriminant** is the number $\Delta=b^2-4ac$ (the Greek letter $\Delta$ is read «delta»). The sign of the discriminant determines how many real roots the quadratic has: two if $\Delta>0$, one if $\Delta=0$, none if $\Delta<0$.

If $\Delta=0$, there is a **double root** $r=-\dfrac{b}{2a}$, so called because the quadratic can be written as $a(x-r)^2$ and the factor $x-r$ appears twice. The quadratic equals zero only at $r$. Everywhere else it has the sign of $a$. If $\Delta<0$, the quadratic has the sign of $a$ for every real $x$.

:::dimostrazione
One factors out $a$ and **completes the square**, that is, one adds and subtracts the same number so as to obtain the square of a binomial:
$$
\begin{aligned}
ax^2+bx+c&=a\left[x^2+\frac ba x+\frac ca\right]\\[4pt]
&=a\left[\left(x+\frac{b}{2a}\right)^2-\frac{b^2}{4a^2}+\frac ca\right]\\[4pt]
&=a\left[\left(x+\frac{b}{2a}\right)^2-\frac{\Delta}{4a^2}\right].
\end{aligned}
$$

The equality holds for every $x$ and is checked by expanding the square, because the constant part inside the square brackets is $\dfrac{b^2-\Delta}{4a^2}=\dfrac{4ac}{4a^2}=\dfrac ca$. If $\Delta=0$, what remains inside the square brackets is a square, which is zero only when $x=-\dfrac b{2a}$ and positive elsewhere. If $\Delta<0$, the number $-\Delta$ is positive and $4a^2$ is positive, so the square has $\dfrac{-\Delta}{4a^2}>0$ added to it. The expression in square brackets is then always positive, so the sign of the quadratic is that of $a$.
:::
::::

:::esempio{titolo="An isolated zero when comparing with a square"}
The square of a real number is always greater than or equal to zero. For $(x-2)^2>0$ every real number other than $2$ is a solution, that is, $S=\mathbb R\setminus\{2\}$. At $2$ the square equals zero and must be excluded. If the comparison is $(x-2)^2\le0$, the only allowed value is $2$, that is, $S=\{2\}$. In the figure the double root is a **point of tangency**: the parabola touches the $x$-axis at $2$ without crossing it. The sign stays positive both to the left and to the right.

::grafico{f="(x-2)^2" xmin=-0.7 xmax=4.7 ymin=-0.8 ymax=7 nomi="x,y" punti="2,0,pieno" titolo="The parabola touches the axis at $2$ and lies above it everywhere else"}
:::

:::esempio{titolo="An extremum away from zero"}
The quadratic $-x^2+4x-5$ equals $-(x-2)^2-1$, as expanding shows: $-(x^2-4x+4)-1=-x^2+4x-5$. Since a square is always greater than or equal to zero, $-(x-2)^2$ is at most $0$. The quadratic therefore has maximum $-1$, reached at $x=2$. Hence the inequality $-x^2+4x-5\ge0$ has an empty solution set, while the strict comparison $-x^2+4x-5<0$ holds for every real number. The discriminant gives the same result: with $a=-1$, $b=4$, $c=-5$ one has $\Delta=4^2-4(-1)(-5)=16-20=-4<0$, and $a<0$, so the quadratic is always negative.

::grafico{f="-(x-2)^2-1" xmin=-0.5 xmax=4.5 ymin=-7.6 ymax=1.2 nomi="x,y" punti="2,-1,pieno" segmenti="2,0,2,-1" titolo="The highest point is $(2,-1)$, still below the horizontal axis"}
:::

## From the original inequality to the solution

:::esempio{#procedimento titolo="Compare with zero and check the endpoints"}
We solve $4-2x^2\ge0$.

1. Add $2x^2$ to both sides: $4\ge2x^2$, that is, $2x^2\le4$.
2. Divide both sides by $2$, which is positive, so the direction stays the same: $x^2\le2$, that is, $2-x^2\ge0$.
3. The expression $2-x^2$ is a difference of squares, because $2=(\sqrt2)^2$; therefore it factors as $(\sqrt2-x)(\sqrt2+x)$.
4. Between $-\sqrt2$ and $\sqrt2$ both factors are nonnegative, that is, positive or zero. Outside the interval one factor is negative and the other positive.

This gives $[-\sqrt2,\sqrt2]$.

To check the solution one uses the original expression $4-2x^2$. At the origin it equals $4$, allowed. At the two endpoints it equals $4-2\cdot2=0$, allowed by $\ge$. For $x=2$ it equals $4-8=-4$, excluded. A **test point** is a value chosen inside an interval to read the sign of the expression there. It is useful for checking the sign assigned to an interval after all zeros have been found and it has been established that the sign stays constant between two consecutive zeros.
:::

:::osservazione
The **degree** of an inequality is the highest power of the unknown that remains after moving everything to the left-hand side and combining like terms. For example, $2x^2+3x\ge 2x^2+5$ contains two equal quadratic terms. Subtracting $2x^2$ from both sides leaves $3x\ge5$, which has the single boundary $\dfrac53$. If the linear terms, that is, the first-degree terms, were also equal, a comparison between numbers would remain, true on the whole domain (such as $0\ge-1$) or impossible (such as $0\ge5$). The initial reduction decides whether to look for two roots or to solve a comparison of lower degree.
:::

## Fractions and excluded points

::::teorema{#fratte titolo="Finding the sign of a quotient on its domain"}
A **rational inequality** has the unknown in a denominator. For a quotient $\dfrac{P(x)}{Q(x)}$, that is, a fraction between two expressions, one first requires $Q(x)\ne0$, because one cannot divide by zero. The quotient is positive when numerator and denominator have the same sign and negative when they have opposite signs, as with $\dfrac{-6}{-2}=3$ and $\dfrac{6}{-2}=-3$. The quotient equals zero only at the zeros of the numerator that belong to the domain.

:::dimostrazione
On the domain $Q(x)\ne0$, so $Q(x)^2$ is the square of a nonzero number and is strictly positive. Multiplying both sides of the comparison with zero by a positive number keeps the direction. Since $\dfrac{P(x)}{Q(x)}\cdot Q(x)^2=P(x)\,Q(x)$, comparing $\dfrac{P(x)}{Q(x)}$ with zero becomes comparing $P(x)Q(x)$ with zero. The product shows how the signs combine. Even when the product is used directly, the condition $Q(x)\ne0$ is still necessary, because the product is defined even where the fraction is not.
:::
::::

:::esempio{titolo="Distinguishing a zero from a zero denominator"}
For $\dfrac{x+2}{x-1}\le0$ the **critical points**, that is, the values at which the numerator or the denominator equals zero, are $-2$ and $1$. At $-2$ the quotient equals zero; at $1$ the quotient is not defined. The first is a candidate for inclusion because the comparison allows equality. The second is excluded whatever the comparison symbol. The table gives the sign of each factor on the three intervals.

| Interval | $(-\infty,-2)$ | $(-2,1)$ | $(1,+\infty)$ |
| --- | --- | --- | --- |
| Numerator | $-$ | $+$ | $+$ |
| Denominator | $-$ | $-$ | $+$ |
| Quotient | $+$ | $-$ | $+$ |

The quotient is negative only on $(-2,1)$; one adds $-2$, where it equals zero. This gives $[-2,1)$. The sign of the quotient changes at $1$, but the graph has no point with that horizontal coordinate. In the figure the dashed lines $x=1$ and $y=1$ are **asymptotes**, that is, lines that the curve approaches without touching them. A test value in the interval is $0$, at which the quotient equals $\dfrac{2}{-1}=-2$.

::grafico{f="(x+2)/(x-1)" asintoti="x=1;y=1" xmin=-5 xmax=5 ymin=-7 ymax=7 punti="-2,0,pieno" titolo="The quotient is nonpositive from $-2$ inclusive to $1$ exclusive"}
:::

:::attenzione{#buco titolo="Simplifying preserves the original domain"}
In the fraction $\dfrac{(x-1)(x+3)}{x-1}$ the value $x=1$ is excluded. At the allowed points the factor $x-1$ is nonzero, so it cancels between numerator and denominator and $x+3$ remains. The comparison with zero, with the symbol $\ge$, gives $x\ge-3$ and $x\ne1$. The solution set is $[-3,1)\cup(1,+\infty)$. At $1$ the simplified line would have vertical coordinate $4$, but the value of the fraction remains undefined; the figure marks it with an open point.

::grafico{f="x+3" xmin=-4.6 xmax=3.1 ymin=-1.75 ymax=6.6 punti="-3,0,pieno;1,4,vuoto" titolo="The open point at $(1,4)$ marks the value still excluded after simplification"}

If the original comparison has a nonzero right-hand side, one moves everything to the left and uses a common denominator. For example, with $x\ne1$,
$$
\frac{2}{x-1}\le1
\quad\Longleftrightarrow\quad
\frac{2}{x-1}-\frac{x-1}{x-1}\le0
\quad\Longleftrightarrow\quad
\frac{3-x}{x-1}\le0.
$$
The symbol $\Longleftrightarrow$ indicates that the two inequalities have the same solutions. The numerator $3-x$ is positive for $x<3$; the denominator is positive for $x>1$.

- For $x<1$ the quotient is negative.
- For $1<x<3$ it is positive.
- For $x>3$ it is negative.

The sign analysis therefore gives $(-\infty,1)\cup[3,+\infty)$. At $3$ the original quotient is $\dfrac22=1$, as the non-strict comparison requires.
:::

:::esempio{titolo="A positive denominator with an excluded point"}
In the inequality $\dfrac{x+1}{(x-2)^2}\ge0$ the domain is $x\ne2$. The denominator is the square of a nonzero number, so it is strictly positive for every allowed $x$. Both sides are then multiplied by that denominator, giving $x+1\ge0$ with the direction kept. The condition gives $x\ge-1$, from which $2$ is removed. The result is $[-1,2)\cup(2,+\infty)$. The squared factor in the denominator has the same sign on both sides of its zero. The point $2$ still separates two intervals, because the fraction is not defined there.
:::

## Products and multiplicity

:::teorema{#prodotti titolo="The parity of the exponent tells whether the sign changes"}
The **multiplicity** of a root $r$ is the number of times the factor $x-r$ appears in the factorisation. In $(x-1)^2(x+2)$ the root $1$ has multiplicity $2$ and the root $-2$ has multiplicity $1$.

If the factor $x-r$ occurs exactly $m$ times, the polynomial can be written as $(x-r)^mG(x)$ with $G(r)\ne0$. The value $G(r)$ is nonzero and, by continuity of the polynomial, the sign of $G$ stays the same near $r$, that is, the values of $G$ at points near $r$ are close to $G(r)$ and therefore have its sign. If $m$ is odd, $x-r$ and $(x-r)^m$ have the same sign, as with $(-2)^3=-8$. If $m$ is even, $(x-r)^m$ is positive on both sides of $r$, as with $(-2)^2=4$ and $2^2=4$. A root of odd multiplicity therefore makes the sign of the polynomial change, and a root of even multiplicity does not. For this reason a root of even multiplicity splits the solution set of a strict comparison while leaving the sign unchanged.
:::

:::esempio{titolo="A simple root and a double root in the same product"}
In $(x-1)^2(x+2)>0$ the squared factor is positive for $x\ne1$. The sign therefore depends on $x+2$, which is positive for $x>-2$. At points to the right of $-2$ the product is positive, except at $1$ where it equals zero. The solution set is $(-2,1)\cup(1,+\infty)$. With the comparison $\ge0$, the two zeros would also be allowed and the result would be $[-2,+\infty)$.
:::

## Systems and intersection

:::definizione{#sistemi titolo="Every value must satisfy all conditions"}
A **system of inequalities** is a set of inequalities that must all be true at the same time; it is written with a curly brace. Its solutions are the common solutions, that is, the intersection of the solution sets. An endpoint is included only if it satisfies every inequality of the system. For example,
$$
\begin{cases}
x>1\\
x\le4
\end{cases}
$$
has solution set $(1,+\infty)\cap(-\infty,4]=(1,4]$. For alternative conditions, joined by «or», the union is used instead, because it is enough to belong to at least one of the sets.
:::

:::esempio{titolo="An interval and an isolated point"}
We solve the system
$$
\begin{cases}
x^2-4x+3\ge0\\
0\le x\le3
\end{cases}
$$
Since the quadratic equals $(x-1)(x-3)$, the first set is $(-\infty,1]\cup[3,+\infty)$. Intersecting with $[0,3]$ gives $[0,1]$ and the single point $3$, that is, $S=[0,1]\cup\{3\}$. The value $3$ satisfies both conditions with equality and is included. In the figure the first row shows the solution set of the inequality, the second the condition $[0,3]$ and the third their intersection.

::grafico{assi=0 xmin=-1.8 xmax=4.9 ymin=-0.25 ymax=3.28 vettori="-1.47,2.66,4.53,2.66;-1.47,1.64,4.53,1.64;-1.47,0.59,4.53,0.59" area="2.74;2.58;-1.4;1|2.74;2.58;3;4.38|1.72;1.56;0;3|0.67;0.51;0;1" punti="1,2.66,pieno;3,2.66,pieno;0,1.64,pieno;3,1.64,pieno;0,0.59,pieno;1,0.59,pieno;3,0.59,pieno" etichette="0,0.15,0;1,0.15,1;3,0.15,3" titolo="The system retains the interval $[0,1]$ and the isolated point $3$"}
:::

:::esempio{titolo="Intersecting a rational inequality with a linear bound"}
The two conditions $\dfrac{x-1}{x+1}>0$ and $x\le0$ must be solved together. The first gives $(-\infty,-1)\cup(1,+\infty)$, because numerator and denominator are both negative before $-1$ and both positive after $1$; between $-1$ and $1$ they have opposite signs. Intersecting with $(-\infty,0]$ leaves only $(-\infty,-1)$. The endpoint $-1$ remains excluded, since the new condition concerns only the value of $x$ and the fraction still does not exist at that point. Zero also satisfies the condition $x\le0$, but the quotient at zero equals $\dfrac{-1}{1}=-1$, so zero does not satisfy the first condition.
:::

## Square roots and constraints from the problem

:::osservazione{#domini titolo="Intersecting the conditions for an expression to exist"}
The **radicand** is the expression under the root sign. In the real numbers the square root of a negative number does not exist, because no square is negative. Therefore the square root $\sqrt{A(x)}$ requires $A(x)\ge0$. If the root is the whole denominator or one of its factors, the denominator is nonzero only when the root is nonzero too, so $A(x)>0$ is required. For example, $\sqrt{x^2-4}$ is defined also at the zeros $-2$ and $2$ of the radicand. For $\dfrac{1}{\sqrt{x^2-4}}$ those two values are excluded, and the result is $(-\infty,-2)\cup(2,+\infty)$.

If the root is a **term** of the denominator, that is, one of the addends of a sum, one checks the value of the whole sum. For $\dfrac{1}{\sqrt{x}+1}$ the condition $x\ge0$ is enough, because on the domain of the root $\sqrt x\ge0$ and so the denominator is always at least one. The value $x=0$ is allowed and the fraction equals $1$.

For $\dfrac{\sqrt{(x-1)(4-x)}}{x-2}$ the nonnegative radicand allows $[1,4]$, because the product $(x-1)(4-x)$ equals $-(x-1)(x-4)$ and is therefore nonnegative between the roots $1$ and $4$. The denominator excludes $2$. Hence the domain is $D=[1,2)\cup(2,4]$. At $1$ and at $4$ the root in the numerator equals zero and the denominator stays nonzero. In the figure the filled points $1$ and $4$ are included and the open point $2$ is excluded.

::grafico{assi=0 xmin=-0.5 xmax=5.5 ymin=-0.85 ymax=0.9 vettori="-0.15,0,5.18,0" area="0.075;-0.075;1;2|0.075;-0.075;2;4" punti="1,0,pieno;2,0,vuoto;4,0,pieno" etichette="1,-0.35,1;2,-0.35,2;4,-0.35,4;5.01,-0.35,x" titolo="The zeros of the radicand at the edges are allowed. The denominator removes the interior point $2$"}
:::

:::esempio{titolo="Absolute value and a domain restriction"}
The **absolute value** $|a|$ of a number is the number itself if $a\ge0$ and its opposite if $a<0$: $|3|=3$ and $|-3|=3$. The root $\sqrt{(x-1)^2}$ is defined for every real number and equals $|x-1|$, because it returns the nonnegative quantity whose square is the radicand. For example, with $x=-2$ one has $\sqrt{(-3)^2}=\sqrt9=3=|-3|$. In the fraction $\dfrac{\sqrt{(x-1)^2}}{x-1}$, however, $1$ must be excluded. For $x>1$ the numerator equals $x-1$, so the quotient equals $1$. For $x<1$ the numerator equals $1-x$, so the quotient equals $-1$. The point where the two formulas change is exactly the excluded one.
:::

:::esempio{titolo="An algebraic boundary and a positive length"}
A rectangle has sides $x$ and $x+3$ metres and area at most $40\,\mathrm{m}^2$. One needs $x>0$, because $x$ is a length, and $x(x+3)\le40$. Moving everything to the left gives $x^2+3x-40\le0$. Two numbers with product $-40$ and sum $3$ are $8$ and $-5$, so $x^2+3x-40=(x+8)(x-5)$. The quadratic has $a=1>0$ and is nonpositive between its roots, with solution set $[-8,5]$. Intersecting with $x>0$ leaves $(0,5]$. Five metres is allowed because the area is $5\cdot8=40\,\mathrm{m}^2$. If the shorter side must be a whole number of metres, only the lengths from one to five are possible.
:::

## A family of parabolas with a parameter

:::esempio{#parametri titolo="Check the maximum before finding the roots"}
A **parameter** is a letter, here $k$, that stands for a fixed but unspecified number; the solution is written for each possible value of $k$. Consider $k-(x-1)^2\ge0$, with $k$ a fixed real number. For every $x$ the square is nonnegative, so the largest value of the left-hand side is $k$, reached at $x=1$. The highest point of the parabola, $(1,k)$, is its **vertex**.

- For $k<0$, not even the maximum satisfies the comparison and the solution set is empty.
- For $k=0$, the only allowed value is $x=1$, which makes the square zero.
- For $k>0$, the condition $(x-1)^2\le k$ gives $-\sqrt k\le x-1\le\sqrt k$, that is, $[1-\sqrt{k},1+\sqrt{k}]$.

In the last case both endpoints are included. For example, with $k=1$ one obtains $[0,2]$. If the symbol $>$ is used, those two points are excluded and with $k=0$ no solution remains. The parameter therefore separates three configurations, and the symbol determines how to read the intersections with the axis. In the figure the three parabolas correspond to $k=-1$, $k=0$ and $k=1$.

::grafico{f="-1-(x-1)^2;-(x-1)^2;1-(x-1)^2" xmin=-1.34 xmax=3.34 ymin=-4.8 ymax=1.55 nomi="x,y" legenda="k=-1;k=0;k=1" punti="1,-1,pieno;1,0,pieno;1,1,pieno;0,0,pieno;2,0,pieno" titolo="The vertex rises with $k$. The three parabolas have zero, one, and two points on the axis"}
:::

:::esempio{titolo="When a parameter makes the quadratic nonnegative everywhere"}
We look for the values of $k$ for which $(k-1)x^2-2x+1\ge0$ holds for every real number. At $x=1$ the left-hand side equals $(k-1)-2+1=k-2$. If $k<2$ this value is negative, so the condition $k\ge2$ is **necessary**: without it the inequality does not hold for every real number. Under this condition the quadratic can be rewritten as
$$
(k-1)x^2-2x+1=(x^2-2x+1)+(k-2)x^2=(x-1)^2+(k-2)x^2.
$$
Both terms are nonnegative for every $x$, so the condition is also **sufficient**: it is enough to guarantee that the inequality holds for every real number. For $k=2$ a square remains, which is zero at $1$. For $k=1$ the quadratic coefficient is zero and the result is the linear inequality $-2x+1\ge0$, which is true only for $x\le\dfrac12$.
:::
