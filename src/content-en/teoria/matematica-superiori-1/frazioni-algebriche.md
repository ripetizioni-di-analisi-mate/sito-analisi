---
titolo: "Algebraic Fractions"
sommario: "Domain restrictions, simplification, and operations with quotients of polynomials, with examples of signs and excluded values."
---

## Domain restrictions

:::definizione{#dominio titolo="Domain of an algebraic fraction"}
Let $P$ and $Q$ be real polynomials in $x$, with $Q$ different from the zero polynomial. The **algebraic fraction** $\dfrac{P(x)}{Q(x)}$ assigns to each admissible value of $x$ the quotient of the two values $P(x)$ and $Q(x)$. Its **domain** is the set
$$
D=\{x\in\mathbb R:Q(x)\ne0\}.
$$

The restriction concerns the value of the denominator at the chosen point. For $\dfrac{x+1}{x-3}$, the value $x=-1$ is admissible because the numerator is zero and the denominator is $-4$. At $x=3$ the denominator vanishes, so the quotient is undefined. The same rule applies when the denominator has a higher degree.
:::

:::esempio{titolo="Denominators with two, one, and zero real roots"}
The denominator $x^2-4$ factors as $(x-2)(x+2)$. A product of two numbers is zero if at least one of its factors is zero. The values $2$ and $-2$ are therefore excluded. With $(x-2)^2$, the only excluded value is $2$ because the square contains the same factor twice. We have $x^2+1\ge 1$ for every real number, so every $x$ is admissible for this denominator.

| Denominator | Real zeros | Domain |
|---|---|---|
| $x^2-4$ | $-2,\ 2$ | $\mathbb R\setminus\{-2,2\}$ |
| $(x-2)^2$ | $2$ | $\mathbb R\setminus\{2\}$ |
| $x^2+1$ | none | $\mathbb R$ |

::grafico{f="x^2+1" xmin=-3 xmax=3 ymin=-1 ymax=7 titolo="The minimum of x² + 1 is 1, so the denominator remains positive"}
:::

:::osservazione{titolo="Check a restriction for each original expression"}
In the domain of the sum $\dfrac1{x-2}+\dfrac1{x+2}$, both $x\ne2$ and $x\ne-2$ must hold. Checking the two fractions separately also matters when a factor cancels during the calculation. The result must be usable at the same points as the original expression.
:::

:::esempio{titolo="A coefficient that can vanish"}
In the fraction $\dfrac{x+1}{(a-1)x+3}$, fix the real parameter $a$ and find the admissible values of $x$. For $a=1$ the term in $x$ vanishes and the denominator is the number $3$. The domain is therefore $\mathbb R$. For $a\ne1$, divide by $a-1$ in the equation $(a-1)x+3=0$. This gives the only value to exclude.
$$
x=-\frac{3}{a-1}.
$$
For example, $a=4$ excludes $x=-1$. The numerator is also zero there, but the domain restriction still depends on the denominator. The case $a=1$ is handled separately because the formula for the excluded value divides by $a-1$.
:::

## Simplification and equality on the original domain

::::teorema{#semplificare titolo="Canceling a common factor"}
For polynomials $A$, $B$, and $C$, the quotient $\dfrac{A(x)C(x)}{B(x)C(x)}$ equals $\dfrac{A(x)}{B(x)}$ at the points where $B(x)\ne0$ and $C(x)\ne0$. Both restrictions carry over when the expression is rewritten.

:::dimostrazione
At a point in the domain, the number $C(x)$ is nonzero. Both the numerator and the denominator can therefore be divided by $C(x)$. This leaves $A(x)$ in the numerator and $B(x)$ in the denominator. Dividing both terms of a quotient by the same nonzero number leaves its value unchanged.
:::
::::

:::esempio{titolo="A linear formula with one excluded point"}
The difference of squares $x^2-9$ can be written as $(x-3)(x+3)$. Therefore
$$
\begin{aligned}
\frac{x^2-9}{x-3}&=\frac{(x-3)(x+3)}{x-3}\\[6pt]
&=x+3 \qquad (x\ne3).
\end{aligned}
$$
On the graph, all the points of the line $y=x+3$ belong to the fraction except the one with horizontal coordinate $3$. Its vertical coordinate on the line would be $6$, so an open circle is drawn at $(3,6)$. The formula $x+3$ is useful for evaluating the expression at $x=4$, where it gives $7$, and the original domain still governs every substitution.

::grafico{f="x+3" xmin=-4 xmax=7 ymin=-2 ymax=11 punti="3,6,vuoto" titolo="The open circle marks the excluded point (3, 6)"}
:::

:::attenzione{titolo="Cancellation applies to factors"}
For $x\ne0$, the fraction $\dfrac{x+3}{x}$ has a sum in the numerator. Dividing each term by $x$ gives $1+\dfrac3x$. At $x=2$, the fraction equals $\dfrac52$. This numerical check distinguishes the valid transformation from canceling the term $x$ on its own.
:::

:::esempio{titolo="A factor that cancels and one that remains"}
The fraction $\dfrac{(x+4)(x-1)}{(x+4)(x+2)}$ excludes $-4$ and $-2$. At admissible values, canceling $x+4$ gives $\dfrac{x-1}{x+2}$. The two exclusions have different effects. The simplified formula gives the value $\dfrac52$ at $x=-4$, but the original fraction is still undefined at that point. The simplified denominator remains zero at $x=-2$ while the new numerator is $-3$. The graph still has separated branches there. The open circle therefore marks the exclusion retained only in the domain written alongside the formula.

::grafico{f="(x-1)/(x+2)" xmin=-7 xmax=6 ymin=-4 ymax=6 asintoti="x=-2;y=1" punti="-4,2.5,vuoto" titolo="The canceled factor leaves an open circle at x = −4"}
:::

## Adding and subtracting algebraic fractions

::::teorema{#somme titolo="Building a common denominator with nonzero factors"}
Let $P$, $Q$, $R$, and $S$ be polynomials. At the points where both $Q(x)$ and $S(x)$ are nonzero, we have
$$
\frac{P(x)}{Q(x)}\pm\frac{R(x)}{S(x)}
=\frac{P(x)S(x)\pm R(x)Q(x)}{Q(x)S(x)}.
$$
The product $QS$ is a common denominator. If $Q$ and $S$ share factors, a common multiple of lower degree can be chosen.

:::dimostrazione
The first fraction is multiplied by $\dfrac{S(x)}{S(x)}$ and the second by $\dfrac{Q(x)}{Q(x)}$. Both ratios equal one on the domain, and the resulting fractions have the same denominator. Addition or subtraction therefore applies to the entire numerators.
:::
::::

:::esempio{titolo="Common factors with different multiplicities"}
To add $\dfrac{1}{(x-2)^2}$ and $\dfrac{2}{(x-2)(x+2)}$, the values $2$ and $-2$ are excluded. The first denominator contains two copies of $x-2$ and the second contains one. The common denominator of least degree contains two copies of $x-2$ and one copy of $x+2$. Multiply both the numerator and denominator of the first fraction by $x+2$. For the second, multiply both by $x-2$. This gives
$$
\begin{aligned}
\frac{1}{(x-2)^2}+\frac{2}{(x-2)(x+2)}
&=\frac{(x+2)+2(x-2)}{(x-2)^2(x+2)}\\[6pt]
&=\frac{3x-2}{(x-2)^2(x+2)}.
\end{aligned}
$$
At $x=0$, the two original terms equal $\dfrac14$ and $-\dfrac12$. Their sum is therefore $-\dfrac14$, which agrees with the value of the resulting fraction.
:::

:::esempio{titolo="Opposite denominators in a subtraction"}
Since $2-x=-(x-2)$, for $x\ne2$ we have $\dfrac1{2-x}=-\dfrac1{x-2}$. Substituting this equality gives the subtraction in the form
$$
\begin{aligned}
\frac1{x-2}-\frac1{2-x}
&=\frac1{x-2}+\frac1{x-2}\\[6pt]
&=\frac2{x-2}.
\end{aligned}
$$
The graph shows that the result is negative for $x<2$ and positive for $x>2$. The numerator is $2$ on both intervals and the denominator changes sign across $2$.

::grafico{f="2/(x-2)" xmin=-4 xmax=7 ymin=-5 ymax=5 asintoti="x=2;y=0" titolo="The difference has opposite signs on the two intervals separated by x = 2"}
:::

:::attenzione{titolo="A common denominator can introduce an exclusion"}
In the sum $\dfrac1{x+1}+\dfrac1{x-1}$, the value $0$ belongs to the domain and the two terms add to zero. Using $(x+1)(x-1)$ as the common denominator gives $\dfrac{2x}{(x+1)(x-1)}$, which can be evaluated at $0$. Adding a factor of $x$ to the common denominator would give $\dfrac{2x^2}{x(x+1)(x-1)}$. The apparent new exclusion comes from multiplying by $\dfrac{x}{x}$, which equals one only for $x\ne0$. Factors added to a fraction must therefore be nonzero at every point that is to remain in the domain.
:::

## Products and cancellation before expansion

::::teorema{#prodotti titolo="Product of two quotients"}
For $Q(x)\ne0$ and $S(x)\ne0$, we have
$$
\frac{P(x)}{Q(x)}\cdot\frac{R(x)}{S(x)}
=\frac{P(x)R(x)}{Q(x)S(x)}.
$$
Factoring the polynomials reveals common factors before the products are expanded.

:::dimostrazione
At an admissible point, each quotient is a product by the inverse of its denominator, $Q(x)$ or $S(x)$. The four factors can be rearranged by associativity and commutativity. The product of the two inverses is the inverse of $Q(x)S(x)$, which gives the formula.
:::
::::

:::esempio{titolo="A constant product with two excluded points"}
In the product $\dfrac{x-2}{x+2}\cdot\dfrac{x+2}{x-2}$, the first fraction excludes $-2$ and the second excludes $2$. Once the domain is set, both $x-2$ and $x+2$ can be canceled, so the product equals $1$. The excluded points come from different fractions and both remain excluded in the product.

::grafico{f="1" xmin=-5 xmax=5 ymin=-1 ymax=3 punti="-2,1,vuoto;2,1,vuoto" titolo="The product equals 1 at every admissible point and has two exclusions"}
:::

:::esempio{titolo="Partial cancellation with repeated factors"}
For $x\ne0$ and $x\ne1$, the calculation is
$$
\begin{aligned}
\frac{x^2}{x-1}\cdot\frac{(x-1)^2}{3x}
&=\frac{x^2(x-1)^2}{3x(x-1)}\\[6pt]
&=\frac{x(x-1)}{3}.
\end{aligned}
$$
Only one copy of $x$ is canceled from $x^2$. Likewise, one copy of $x-1$ remains in the numerator. At $x=3$, the original product is $\dfrac92\cdot\dfrac49=2$, so the result can also be checked before cancellation.
:::

:::esempio{titolo="The sign of a factor written in reverse order"}
The fraction $\dfrac{-3(x-2)^2}{6(2-x)(x+4)}$ excludes $2$ and $-4$. Rewrite the factor $2-x$ as $-(x-2)$. The minus sign now belongs to the product in the denominator and cancels the one in the numerator. Then cancel one copy of $x-2$ and reduce the ratio of the coefficients.
$$
\begin{aligned}
\frac{-3(x-2)^2}{6(2-x)(x+4)}
&=\frac{-3(x-2)^2}{-6(x-2)(x+4)}\\[6pt]
&=\frac{x-2}{2(x+4)}.
\end{aligned}
$$
At $x=0$ the original form equals $-\dfrac{12}{48}=-\dfrac14$, just like the final form. This check catches a dropped minus sign. The value $2$ remains excluded even though it would make the numerator of the final form zero.
:::

## Dividing algebraic fractions

::::teorema{#divisioni titolo="The divisor is defined and nonzero"}
To divide $\dfrac{P(x)}{Q(x)}$ by $\dfrac{R(x)}{S(x)}$, the values $Q(x)$, $S(x)$, and $R(x)$ must all be nonzero. On this domain, the division can be written as
$$
\frac{P(x)}{Q(x)}:\frac{R(x)}{S(x)}
=\frac{P(x)}{Q(x)}\cdot\frac{S(x)}{R(x)}.
$$

:::dimostrazione
The product of $\dfrac{R(x)}{S(x)}$ and $\dfrac{S(x)}{R(x)}$ is one because both factors are defined. The second factor is therefore the inverse of the divisor. Multiplying by this inverse gives the quotient.
:::
::::

:::esempio{titolo="Two different reasons for excluding values"}
In the quotient $\dfrac1{x+3}:\dfrac{x-1}{x+3}$, the denominators exclude $-3$. At $x=1$, the fractions are defined, but the divisor equals zero. On the domain $\mathbb R\setminus\{-3,1\}$, cancellation of $x+3$ gives $\dfrac1{x-1}$. The new denominator still makes the exclusion of $1$ apparent. The domain must be written alongside the formula to retain the exclusion of $-3$.

::grafico{f="1/(x-1)" xmin=-6 xmax=6 ymin=-3 ymax=3 asintoti="x=1;y=0" punti="-3,-0.25,vuoto" titolo="Division can leave an excluded point on one branch of the graph"}
:::

:::esempio{titolo="The order of the fractions also changes the domain"}
Let $A=\dfrac{x-2}{x-1}$ and $B=\dfrac{x+2}{x-1}$. Both fractions require $x\ne1$. The quotient $A:B$ also requires $x\ne-2$ because its divisor is $B$. The quotient $B:A$ instead requires $x\ne2$ because its divisor is $A$. The quotients therefore have different domains. At $x=2$, we have $A=0$ and $B=4$, so the first quotient is zero. In the reverse division that same zero appears in the denominator, so the second quotient is undefined at that point.
:::

## Evaluating fractions, finding zeros, and determining signs

:::esempio{#valori titolo="Evaluating the fraction and finding a zero"}
To evaluate $\dfrac{x+1}{x-3}$ at $x=5$, the denominator is $2$. The substitution is therefore permitted and gives $\dfrac62=3$. To find the zeros of $\dfrac{x-4}{x+1}$, solve $x-4=0$. At $x=4$ the denominator equals $5$, so $4$ is a zero of the fraction.

The same procedure distinguishes zeros from excluded points. For $\dfrac{(x-4)^2}{x-4}$, the only zero of the numerator is $4$. The denominator also vanishes there, so the fraction has no zeros.

::grafico{f="(x-4)/(x+1)" xmin=-6 xmax=8 ymin=-5 ymax=6 asintoti="x=-1" punti="4,0,pieno" titolo="The zero has coordinate 4, while the horizontal coordinate −1 is excluded"}
:::

:::esempio{#segno titolo="A squared denominator preserves the sign of the numerator"}
For $x\ne-1$ the denominator $(x+1)^2$ is positive. The sign of $\dfrac{x-2}{(x+1)^2}$ is therefore the sign of $x-2$. The fraction is negative on the two intervals $(-\infty,-1)$ and $(-1,2)$, equals zero at $2$, and is positive on $(2,+\infty)$. Splitting the negative region into two intervals preserves the exclusion of $-1$.

::grafico{f="(x-2)/(x+1)^2" xmin=-6 xmax=7 ymin=-6 ymax=2 asintoti="x=-1" punti="2,0,pieno" titolo="The squared factor in the denominator leaves the sign unchanged at admissible points"}
:::

:::esempio{titolo="A sign table with a linear numerator and denominator"}
For $\dfrac{x-1}{x+2}$, the values $-2$ and $1$ divide the number line into three intervals. The sign of each factor is known throughout each interval because both are linear and neither vanishes inside it. For example, if $-2<x<1$, then $x-1$ is negative and $x+2$ is positive. The quotient is therefore negative.

| Interval | $x-1$ | $x+2$ | Quotient |
|---|---|---|---|
| $x<-2$ | $-$ | $-$ | $+$ |
| $-2<x<1$ | $-$ | $+$ | $-$ |
| $x>1$ | $+$ | $+$ | $+$ |

At the endpoints, use the original conditions. At $x=-2$, the denominator is zero, so the quotient is undefined. At $x=1$, only the numerator vanishes, so the quotient equals zero.
:::

## Recognizing equivalent fractions

::::teorema{#equivalenza titolo="Comparison by cross-multiplication"}
On the common domain of the fractions $\dfrac{P(x)}{Q(x)}$ and $\dfrac{R(x)}{S(x)}$, the two values are equal if and only if $P(x)S(x)=R(x)Q(x)$. If this equality holds for every $x$ in their common domain, the fractions agree at every point in that domain. They must also have the same domain to describe the same function.

:::dimostrazione
Multiplying the equality of the two fractions by $Q(x)S(x)$ gives the equality of the cross-products. In the reverse direction, the product $Q(x)S(x)$ is nonzero on the common domain. Dividing the equality of products by that number recovers the equality of the quotients.
:::
::::

:::esempio{titolo="Quotients that agree on a common domain with different exclusions"}
The fractions $\dfrac{x+2}{x^2-4}$ and $\dfrac1{x-2}$ agree for $x\ne2,-2$. In the first fraction, the numerator and the denominator share the factor $x+2$. After simplification, the formula on the right is also defined at $x=-2$. The fractions therefore represent functions with different domains, even though their values agree at every point they have in common.

::grafico{f="1/(x-2)" xmin=-6 xmax=7 ymin=-3 ymax=3 asintoti="x=2;y=0" punti="-2,-0.25,vuoto" titolo="The simplified formula retains the point excluded from the original expression"}
:::

:::esempio{titolo="An equation that gives an excluded candidate"}
In the equation
$$
\frac{x+1}{x-2}=\frac{3}{x-2}
$$
the common domain is $x\ne2$. For every input in the domain, multiply both sides by $x-2$ to obtain $x+1=3$. The only candidate is $x=2$. At precisely that point the fractions have no value, so the solution set is empty.

You can reach the same conclusion by studying the difference between the two sides. Its numerator is $(x+1)-3=x-2$, so the difference equals $1$ throughout the domain. Equality would require a difference of zero. The first method finds a candidate and checks whether it is allowed. The second compares the values directly on the domain where the equation is defined.
:::

## Complex fractions and applications

:::esempio{#composte titolo="Domain of a fraction that contains fractions"}
In the expression $\dfrac{1-\dfrac1x}{1+\dfrac1x}$, both inner formulas require $x\ne0$. The overall denominator can be rewritten as $\dfrac{x+1}{x}$, so $x=-1$ must also be excluded. At the admissible points, this gives
$$
\begin{aligned}
\frac{1-\frac1x}{1+\frac1x}
&=\frac{x-1}{x}\cdot\frac{x}{x+1}\\[6pt]
&=\frac{x-1}{x+1}.
\end{aligned}
$$
The domain is checked before canceling $x$. At $x=2$, the original quotient is $\dfrac{\frac12}{\frac32}$, which is $\dfrac13$, and the final fraction gives the same value.
:::

:::esempio{#modello titolo="A formula with a domain restricted by the problem"}
A cyclist travels $18\,\mathrm{km}$ at a constant speed $v$, measured in kilometers per hour. The travel time is $t=\dfrac{18}{v}$ hours. The quotient is algebraically defined for $v\ne0$. In this problem, $v$ represents a positive speed, so only the part with $v>0$ is relevant. Doubling the speed halves the time. For example, $v=9$ gives $t=2$, while $v=18$ gives $t=1$.

::grafico{f="18/x" xmin=4 xmax=22 ymin=0 ymax=6 nomi="v,t" punti="9,2,pieno;18,1,pieno" titolo="The domain of the problem allows positive speeds"}
:::

:::esempio{titolo="Finding a side length from an area"}
A rectangular garden bed has an area of $24\,\mathrm{m^2}$. One side has length $x-1$ meters, while $b$ denotes the length of the other in meters. The equation $(x-1)b=24$ gives $b=\dfrac{24}{x-1}$. The algebraic restriction is $x\ne1$. Since $x-1$ is a side length, the problem requires $x>1$. The value $x=0$ would give $b=-24$ and satisfy the original equation, but it would produce two negative lengths. At $x=5$, the sides measure $4$ and $6$ meters and their product gives the stated area.
:::
