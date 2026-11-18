---
titolo: "Factoring polynomials"
sommario: "Common factors, product identities in reverse, trinomials, zeros, and checks for factorizations."
---

## Taking out a common factor

::::teorema{#comune titolo="Taking out the common factor"}
Let $M,Q_1,\ldots,Q_n$ be polynomials. If each term of $P$ is the product of $M$ and a polynomial $Q_i$, then $M$ is a **common factor**, and the following identity holds.

$$
P=M Q_1+\cdots+M Q_n=M(Q_1+\cdots+Q_n).
$$

For a nonzero polynomial with integer coefficients, the numerical part can be chosen as the greatest common divisor of the absolute values of the coefficients. For each variable, take the smallest exponent that appears in the nonzero monomials. A missing variable counts as having exponent zero.

:::dimostrazione
Expanding $M(Q_1+\cdots+Q_n)$ by the distributive law gives the terms of $P$ in order. A monomial that divides every term with integer coefficients must have a coefficient that divides each coefficient. The exponent of each variable must be at most the exponent in every term. The numerical GCD and the smallest exponents satisfy both conditions. Every other common monomial therefore divides the one obtained this way.
:::
::::

:::esempio{titolo="Two rectangles with the same height"}
In $6x^2+9x$, the greatest common numerical factor is $3$ and the smallest exponent of $x$ is $1$. The remaining factor in the first term is $2x$, and the remaining factor in the second term is $3$, so

$$
6x^2+9x=3x\cdot 2x+3x\cdot 3=3x(2x+3).
$$

When $x>0$, the two terms give the areas of two rectangles of height $3x$. Putting them side by side adds their base lengths and keeps the same height. The diagram uses $x=2$, so the two pieces have bases of length $4$ and $3$ and a height of $6$.

::struttura{linee="0,0 4,0 4,6 0,6 0,0" poligoni="4,0 7,0 7,6 4,6" riferimento=0 etichette="2,-0.55,2x;5.5,-0.55,3;-0.65,3,3x" titolo="Two rectangles with the same height"}
:::

:::attenzione
In the identity $-4x^2-8x=-4x(x+2)$, the right-hand side also equals zero at $x=0$. The quotient $\dfrac{-4x^2-8x}{-4x}$ requires $x\ne0$. The identity comes from recognizing products of polynomials, so it holds for every value of the variables.
:::

:::esempio{titolo="A variable appearing in just one term"}
In $12x^3y+18x^2+6x^2z$, the greatest common numerical factor is $6$. The smallest power of $x$ is $x^2$. The variable $y$ appears only in the first term, and $z$ appears only in the third, so neither enters the common factor.

$$
12x^3y+18x^2+6x^2z=6x^2(2xy+3+z).
$$

The constant term $3$ in the remaining factor indicates that one original term contained exactly $x^2$. Factoring out $x^3$ would leave a quotient with $x$ in the denominator for the term $18x^2$. Such a quotient would fall outside the polynomials. The chosen factor therefore keeps every remaining term polynomial.
:::

## Factoring by grouping

::::teorema{#parziale titolo="The same factor in different groups"}
If two groups in a sum can be written as $UQ$ and $VQ$, their sum can be written as $Q(U+V)$. The factor $Q$ can be a polynomial with more than one term.

:::dimostrazione
Both groups are governed by the same distributive law. Commutativity of multiplication gives $UQ=QU$ and $VQ=QV$, so

$$
UQ+VQ=QU+QV=Q(U+V).
$$

The equality also holds where $Q$ is zero, since the step uses multiplication.
:::
::::

:::esempio{titolo="Four products in an area diagram"}
In $xy+3x+2y+6$, put the terms containing $x$ together. Factor $2$ out of the other two. The resulting groups have the same binomial factor.

$$
\begin{aligned}
xy+3x+2y+6
&=x(y+3)+2(y+3)\\[6pt]
&=(x+2)(y+3).
\end{aligned}
$$

The rectangle for $x=4$ and $y=5$ has four regions. Pieces in the same row have the same height, and pieces in the same column have the same base length. Grouping by column gives the same product with the factors in reverse order.

::struttura{linee="0,0 5,0 5,4 0,4 0,0;0,4 5,4 5,6 0,6 0,4" poligoni="5,0 8,0 8,4 5,4;5,4 8,4 8,6 5,6" riferimento=0 etichette="2.5,-0.55,y;6.5,-0.55,3;-0.65,2,x;-0.65,5,2" titolo="The product of the side lengths equals the sum of the four areas"}
:::

:::esempio{titolo="Opposite binomials"}
In $3x(x-2)+4(2-x)$, the two binomials are opposites. Since $2-x=-(x-2)$, the first group contains $3x$ times $x-2$ and the second contains $-4$ times the same factor.

$$
3x(x-2)+4(2-x)=(x-2)(3x-4).
$$

When the first choice of groups leaves different factors, the terms can be reordered. In $xy+3x+2y+6$, the groups $xy+6$ and $3x+2y$ give no immediate common factor, whereas $xy+3x$ and $2y+6$ expose it.
:::

## Differences of squares and perfect square trinomials

::::teorema{#quadrati titolo="Product identities in reverse"}
For every pair of polynomials $A,B$, the following identities hold.

$$
\begin{aligned}
A^2-B^2&=(A-B)(A+B),\\[4pt]
A^2+2AB+B^2&=(A+B)^2,\\[4pt]
A^2-2AB+B^2&=(A-B)^2.
\end{aligned}
$$

In the first case, the bases of the squares determine the two conjugate factors. In the other two cases, the middle term determines whether the outer squares are part of the same binomial square.

:::dimostrazione
In the first identity, the cross products are $AB$ and $-AB$, so their sum is zero. Expanding $(A+B)(A+B)$ gives the squares $A^2$ and $B^2$ and two contributions equal to $AB$. In $(A-B)(A-B)$, both cross products are $-AB$, and $(-B)(-B)=B^2$.
:::
::::

:::esempio{titolo="The difference of two areas"}
For $A\ge B\ge0$, the number $A^2-B^2$ is the area left after removing a square of side length $B$ from a square of side length $A$. When $A=6$ and $B=2$, the remaining region consists of a lower rectangle with base $6$ and height $4$, and an upper rectangle with base $4$ and height $2$. A quarter turn of the upper piece makes its height $4$ and its base $2$. Joining the two pieces gives a rectangle of height $6-2$ and width $6+2$.

::struttura{linee="0,0 6,0 6,6 0,6 0,0;6,4 4,4 4,6" poligoni="0,0 6,0 6,4 0,4;0,4 4,4 4,6 0,6" riferimento=0 etichette="3,-0.56,6;-0.65,2,4;5,5,2" titolo="The smaller square occupies the upper-right corner"}

The same relationship applies to expressions with variables. In $9x^2-16y^2$, the bases are $3x$ and $4y$, so the factors are $(3x-4y)(3x+4y)$.
:::

:::attenzione
When the outer terms are squares, the middle term still needs checking. The bases in $x^2-4x+9$ are $x$ and $3$, so $(x-3)^2$ would require the middle term $-6x$. At $x=3$, the trinomial equals $6$ and the square equals $0$. Plotting the two curves shows the difference between the expressions.

::grafico{f="(x-3)^2;x^2-4*x+9" xmin=0 xmax=5 ymin=-1 ymax=11 punti="3,0,pieno;3,6,pieno" titolo="Changing the middle term changes the value at x = 3"}
:::

## Trinomials with leading coefficient one

::::teorema{#trinomio titolo="Sum and product in the linear factors"}
Let $b,c,r,s$ be real numbers. The trinomial $x^2+bx+c$ equals $(x+r)(x+s)$ exactly when $r+s=b$ and $rs=c$. To find factors with integer coefficients when $c\ne0$, examine pairs of integer divisors of $c$.

:::dimostrazione
Expanding the two binomials gives

$$
(x+r)(x+s)=x^2+(r+s)x+rs.
$$

The coefficient of $x$ receives two contributions, one from each cross product. The constant term receives only the contribution $rs$. Comparing coefficients gives the two necessary conditions. When both conditions hold, the same expansion establishes the identity.
:::
::::

:::osservazione
If $c>0$, the two terms in the sum $b$ have the same sign. They are both positive when $b>0$ and both negative when $b<0$. If $c<0$, the numbers have opposite signs. The term with the larger absolute value then determines the sign of the sum. If $c=0$, one number can be chosen to be zero, and taking out the common factor gives $x(x+b)$.
:::

:::esempio{titolo="Divisor pairs and sign choices"}
In $x^2-5x-14$, the required product is $-14$. The divisor with the larger absolute value has to be negative because the sum is $-5$.

| Pair | Sum | Product |
|---|---:|---:|
| $1,-14$ | $-13$ | $-14$ |
| $2,-7$ | $-5$ | $-14$ |

This gives $(x+2)(x-7)$. The expanded form shows the linear coefficient $-5$, while the factored form shows the zeros $-2$ and $7$.

::grafico{f="(x+2)*(x-7)" xmin=-4 xmax=9 ymin=-24 ymax=24 punti="-2,0,pieno;7,0,pieno" titolo="The two factors predict where the parabola meets the x-axis"}
:::

:::attenzione
Checking all possible pairs can also rule out integer factors. For $x^2+x+6$, the two constants would both have to be positive. The only pairs are $1,6$ and $2,3$, with sums $7$ and $5$. The required linear coefficient is $1$, so neither product fits the criterion.
:::

:::osservazione
When $b=0$ and $c>0$, an integer pair is impossible, since two nonzero integers of the same sign have a nonzero sum. When $b=0$ and $c<0$, the numbers must be opposites, so $-c$ has to be the square of an integer. For example, $x^2-49$ gives the bases $x$ and $7$, while $x^2-2$ factors as $(x-\sqrt2)(x+\sqrt2)$ when real coefficients are allowed. The permitted coefficient set is therefore part of the question.
:::

## Trinomials with leading coefficient other than one

::::teorema{#trinomio-generale titolo="Splitting the linear term"}
Let $a,b,c$ be integers with $a\ne0$. To factor $ax^2+bx+c$ into two linear factors with integer coefficients, look for integers $m,n$ such that $m+n=b$ and $mn=ac$. Once a pair is found, write $bx=mx+nx$ and factor by grouping.

:::dimostrazione
From a product $(ux+v)(wx+z)$, we obtain $a=uw$, $b=uz+vw$, and $c=vz$. Thus $m=uz$ and $n=vw$ have sum $b$ and product $ac$. Conversely, let $d=\operatorname{gcd}(|a|,|m|)$, write $a=da_1$ and $m=dm_1$. Since $m_1n=a_1c$ and $a_1,m_1$ are coprime, $a_1$ divides $n$. If $n=a_1e$, the relation gives $c=m_1e$. The groups $dx(a_1x+m_1)$ and $e(a_1x+m_1)$ have the same remaining binomial, so they give a factorization of the trinomial.
:::
::::

:::esempio{titolo="The pair that gives the linear coefficient"}
For $2x^2+7x+3$, the product $ac$ is $6$ and the pair with sum $7$ is $6,1$. Splitting $7x$ into $6x+x$ makes factoring by grouping possible.

$$
\begin{aligned}
2x^2+7x+3&=2x^2+6x+x+3\\[6pt]
&=2x(x+3)+(x+3)\\[6pt]
&=(2x+1)(x+3).
\end{aligned}
$$

Checking the coefficient of $x$ gives $2\cdot3+1\cdot1=7$. The zero of the first factor is $-\dfrac12$ because the coefficient of $x$ is $2$.

::grafico{f="(2*x+1)*(x+3)" xmin=-4 xmax=1 ymin=-4 ymax=12 punti="-3,0,pieno;-0.5,0,pieno" titolo="An integer zero and a fractional zero of the same trinomial"}
:::

:::esempio{titolo="A preliminary step for a negative leading coefficient"}
For $-4x^2+5x+6$, factor out $-1$ and work with $4x^2-5x-6$. The product of the outer coefficients is $-24$. The pair $-8$ and $3$ has sum $-5$.

$$
\begin{aligned}
-4x^2+5x+6&=-(4x^2-8x+3x-6)\\[6pt]
&=-\bigl(4x(x-2)+3(x-2)\bigr)\\[6pt]
&=-(4x+3)(x-2).
\end{aligned}
$$

The extracted sign multiplies the entire product and therefore remains in the answer. At $x=0$, the product gives $-3\cdot(-2)=6$, which equals the original constant term. Multiplying $-4x$ by $x$ gives the negative leading term.
:::

## Multi-step factorizations

:::esempio{#completa titolo="Taking out the monomial and examining the remaining factor"}
In $3x^3-3x$, the first step is to identify the common monomial $3x$. The remaining factor has two terms and its constant $1$ is a square, so the difference of squares applies.

$$
\begin{aligned}
3x^3-3x&=3x(x^2-1)\\[6pt]
&=3x(x-1)(x+1).
\end{aligned}
$$

The factor extracted at the first step stays in the product while we focus on $x^2-1$. The three zeros are $0$, $1$, and $-1$, each given by a different factor.

::grafico{f="3*x^3-3*x" xmin=-1.7 xmax=1.7 ymin=-10 ymax=10 punti="-1,0,pieno;0,0,pieno;1,0,pieno" titolo="The common factor gives the zero at the origin"}
:::

:::osservazione
In $x^4-16$, the first term is the square of $x^2$ and the second is the square of $4$. After the first step, $x^2-4$ is still a difference of squares, while $x^2+4\ge4$ for every real $x$.

$$
\begin{aligned}
x^4-16&=(x^2-4)(x^2+4)\\[6pt]
&=(x-2)(x+2)(x^2+4).
\end{aligned}
$$

A linear factor with real coefficients would give a real zero. The positivity of $x^2+4$ therefore rules out additional real linear factors. Whether the factorization can continue depends on the allowed coefficients and on the degrees of the remaining factors.
:::

## Zeros and signs of products

::::teorema{#zeri titolo="Zeros of a product and repeated factors"}
For a product of real-valued polynomials, a zero of the product is a zero of at least one factor. To determine the sign on an interval, consider the signs of all the factors on that interval.

:::dimostrazione
If a factor equals zero, the product equals zero. If all the factors are nonzero, their product is also nonzero. Between two successive zeros, each linear factor keeps the same sign, so the sign of the product follows the multiplication rule for signs. A factor raised to an even power is positive on both sides of its zero.
:::
::::

:::esempio{titolo="One zero with a sign change and one without"}
For $P(x)=(x-1)^2(x+2)$, the zeros are $1$ and $-2$. To see where the graph crosses the axis, check the factors on the intervals determined by the zeros.

| Interval | $(x-1)^2$ | $x+2$ | $P(x)$ |
|---|---:|---:|---:|
| $x<-2$ | $+$ | $-$ | $-$ |
| $-2<x<1$ | $+$ | $+$ | $+$ |
| $x>1$ | $+$ | $+$ | $+$ |

The linear factor is negative to the left of $-2$ and becomes positive to its right. To either side of $1$, both factors are positive. The curve therefore crosses the axis at $-2$ and touches it at $1$.

::grafico{f="(x-1)^2*(x+2)" xmin=-3 xmax=2.4 ymin=-17 ymax=12 punti="-2,0,pieno;1,0,pieno" titolo="The product changes sign only at the simple zero"}
:::

## GCD and LCM of monomials

::::teorema{#mcd-mcm titolo="Comparing coefficients and exponents"}
For two monomials with positive integer coefficients, the monomial GCD has the GCD of their coefficients as its coefficient and uses the smallest exponents. The monomial LCM has the LCM of their coefficients as its coefficient and uses the largest exponents. A missing variable counts as having exponent zero.

:::dimostrazione
The coefficient of a common divisor divides both coefficients, and its exponent for each variable is at most both given exponents. The numerical GCD and the smallest exponents satisfy these conditions. The coefficient of a common multiple is a multiple of both coefficients, and its exponent for each variable is at least both given exponents. The numerical LCM and the largest exponents satisfy those conditions.
:::
::::

:::esempio{titolo="Why the minimum and maximum are used"}
For $12x^3y^2$ and $18x^2y^4$, the variable $x$ can appear in a common divisor with exponent at most two. The variable $y$ must instead appear to the fourth power or higher in every common multiple. The full comparison gives

$$
\begin{aligned}
\operatorname{gcd}(12x^3y^2,18x^2y^4)&=6x^2y^2,\\[4pt]
\operatorname{lcm}(12x^3y^2,18x^2y^4)&=36x^3y^4.
\end{aligned}
$$

The quotients by the GCD are $2x$ and $3y^2$, which confirms that the divisor is a factor of both monomials. To obtain the LCM, multiply the first monomial by $3y^2$ and the second by $2x$. This comparison will also be used when finding a common denominator for two rational expressions.
:::

:::osservazione{titolo="Recovering the LCM from the product and GCD"}
For every prime factor of the coefficient and every variable, the minimum and maximum exponents add up to the sum of the two original exponents. Thus for monomials $M,N$ with positive integer coefficients,

$$
\operatorname{gcd}(M,N)\cdot\operatorname{lcm}(M,N)=MN.
$$

For example, suppose the product is $60x^5y^3$ and the GCD is $2x^2y$. Find the LCM by dividing the coefficients and subtracting the exponents, giving $30x^3y^2$. The calculation also works when a variable appears in only one of the monomials. Its minimum exponent is zero and the maximum preserves its entire power.
:::

## Checking a factorization

:::osservazione{#controlli titolo="Checking every coefficient"}
Expanding a product lets us compare the leading coefficient, the intermediate terms, and the constant term with the given polynomial. For example, $(2x-1)(x+4)$ has leading coefficient $2$, linear term $8x-x=7x$, and constant term $-4$. It therefore gives exactly $2x^2+7x-4$.
:::

:::attenzione
Substitution can expose an error if the values differ. The expressions $x^2-1$ and $x-1$ both equal $-1$ at $x=0$ and zero at $x=1$. At $x=2$, they equal $3$ and $1$ respectively, so the first two checks are insufficient to establish a polynomial identity.

::grafico{f="x^2-1;x-1" xmin=-1.5 xmax=3 ymin=-3 ymax=8 punti="0,-1,pieno;1,0,pieno;2,3,pieno;2,1,pieno" titolo="Two shared points and distinct values at x = 2"}
:::
