---
titolo: "Monomials and polynomials"
sommario: "Simplified form, degree, polynomial operations and the use of algebraic expressions to prove identities and calculate measurements."
---

## Coefficient and variable part

:::definizione{#monomi titolo="Monomials"}
A **monomial** is the product of a real coefficient and powers of variables with nonnegative integer exponents. In $-3x^2y$, the coefficient is $-3$, the variable part is $x^2y$ and the exponent of $y$ is one. The variables stand for values that can be substituted into the product. The variable part specifies which factors are multiplied before those values are known.

Two monomials are **like terms** if each variable has the same exponent in both after the variables are put in order. For example, $5yx^2$ and $-3x^2y$ are like terms because the product $yx^2$ equals $x^2y$. The monomials $x^2y$ and $xy^2$ have the same total degree. One contains two copies of the factor $x$ and the other contains two copies of the factor $y$, so their variable parts differ.
:::

:::esempio{titolo="Opposite monomials and signs"}
Setting $y=1$ turns the monomials $3x^2y$ and $-3x^2y$ into $3x^2$ and $-3x^2$. For every $x$, the second value is the opposite of the first. At $x=2$, the point on the first curve has vertical coordinate $12$ and the point on the second has vertical coordinate $-12$. The two points are equally far from the horizontal axis and lie on opposite sides of it.

::grafico{f="3*x^2;-3*x^2" xmin=-2.4 xmax=2.4 ymin=-14 ymax=14 punti="2,12;2,-12" legenda="y=3x^2;y=-3x^2" titolo="Opposite monomials give opposite vertical coordinates"}
:::

:::osservazione{titolo="Constants and the zero monomial"}
A nonzero constant has variable part $1$ and degree zero. For example, $-7$ has the same value for every assignment of the variables. If the coefficient is zero, the product is zero for every assignment. Thus $0x^4$, $0y^2$ and $0$ all denote the zero monomial. The degree of the zero monomial is left undefined here.

The quotient $\dfrac{x}{3}$ is a monomial with coefficient $\dfrac13$. In the quotient $\dfrac{3}{x}$ the variable is in the denominator, so the expression requires $x\ne0$ and has a negative exponent in the form $3x^{-1}$.
:::

## Simplified form and degree

:::definizione{#grado titolo="Polynomials and their degree"}
A **polynomial** is a finite sum of monomials. Its **simplified form** contains a single term for each variable part. It is obtained by adding the coefficients of like terms and omitting terms with zero coefficients. The term with variable part $1$ is the constant term. Its coefficient is zero when that term is absent.

The total degree of a nonzero monomial is the sum of the exponents of its variables. Its degree in a given variable is the exponent of that variable, which is zero if the variable is absent. For a nonzero polynomial, take the corresponding maximum among the terms left after simplification.
:::

:::esempio{titolo="Maximum exponents in individual variables"}
Consider

$$
\begin{aligned}
P(x,y)&=2x^2y+5x^4-x^2y-5x^4+4\\[6pt]
      &=x^2y+4.
\end{aligned}
$$

The total degree is three, from the exponents $2$ and $1$ of $x^2y$. The degree in $x$ is two and the degree in $y$ is one. In this example the sum of the degrees in the individual variables equals the total degree because both maxima occur in the same monomial. In $x^3+y^4$, the maxima three and four occur in different terms. The total degree is therefore four.
:::

:::esempio{titolo="Cancellation of the leading term"}
Let $P(x)=4x^3-2x+1$ and $Q(x)=-4x^3+x+6$. The coefficient of $x^3$ in the sum is $4-4=0$. The coefficient of $x$ is $-2+1=-1$ and the constant term is $1+6=7$. This gives $P(x)+Q(x)=-x+7$, of degree one.

The graph shows the three vertical coordinates at $x=1$. They are $3$, $3$ and $6$. The sum is represented by a straight line because the cubic terms cancel for every $x$.

::grafico{f="4*x^3-2*x+1;-4*x^3+x+6;7-x" xmin=-1.45 xmax=1.45 ymin=-8 ymax=16 punti="1,3;1,6" legenda="P(x);Q(x);P(x)+Q(x)" titolo="The sum of the two cubic polynomials is a straight line"}
:::

:::osservazione{titolo="When a sum retains the greater degree"}
For two nonzero polynomials in one variable, the degree of their sum, if the sum is nonzero, is at most the larger degree. Addition introduces no new powers. If the degrees differ, the leading term of the higher-degree polynomial has no like term in the other polynomial. Its coefficient is unchanged, so the larger degree is attained.
:::

## Sums, differences and opposites

::::teorema{#somme titolo="Adding like terms"}
If $L$ is a variable part and $a,b$ are two coefficients, the sum of $aL$ and $bL$ is $(a+b)L$. This rule combines all terms with the same variable part into a single term when adding polynomials.

:::dimostrazione
The distributive property gives $(a+b)L=aL+bL$. Reading the equality from right to left takes out the common factor $L$. For example, $4x^2y-7x^2y=(4-7)x^2y=-3x^2y$. With different variable parts, as in $4x^2y-7xy^2$, the coefficients multiply different factors. The expression is already simplified.
:::
::::

:::esempio{titolo="Subtracting an entire polynomial"}
The opposite of $Q(x)=x^2-4x+5$ is obtained by multiplying each of its terms by $-1$. The contribution from $-4x$ therefore becomes $+4x$.

$$
\begin{aligned}
(3x^2+2x-1)-(x^2-4x+5)
&=3x^2+2x-1-x^2+4x-5\\[6pt]
&=2x^2+6x-6.
\end{aligned}
$$

The coefficients in the difference can be checked one at a time. For instance, the constant term is $-1-5=-6$. To check the full calculation, add $Q$ to the difference. This recovers the original coefficients $2+1=3$, $6-4=2$ and $-6+5=-1$ of the first polynomial.

| Polynomial | Coefficient of $x^2$ | Coefficient of $x$ | Constant term |
| --- | --- | --- | --- |
| $3x^2+2x-1$ | $3$ | $2$ | $-1$ |
| $-(x^2-4x+5)$ | $-1$ | $4$ | $-5$ |
| Difference | $2$ | $6$ | $-6$ |
:::

:::esempio{titolo="A difference inside another difference"}
Consider $P-(Q-R)$, where $P=x^2+2x-3$, $Q=3x^2-x+1$ and $R=2x^2-x-4$. To subtract $Q-R$, multiply the entire difference by $-1$. This gives $-Q+R$, so

$$
\begin{aligned}
P-(Q-R)&=P-Q+R\\[6pt]
&=(1-3+2)x^2+(2+1-1)x+(-3-1-4)\\[6pt]
&=2x-8.
\end{aligned}
$$

The contribution from $-R$ inside the difference becomes $+R$ when taking the opposite. Cancellation of the quadratic terms reduces the degree to one. To check the constant term separately, set every occurrence of $x$ equal to zero. This gives $-3-(1-(-4))=-8$.
:::

## Products and the distributive property

::::teorema{#prodotti titolo="Products of monomials and polynomials"}
In a product of two monomials, multiply the coefficients and add the exponents of each variable in the factors. In a product of a monomial and a polynomial, the monomial multiplies every term of the sum. In a product of two polynomials, every term of the first factor multiplies every term of the second.

:::dimostrazione
With two monomials, group the numerical factors and the powers of the same variable. For example,

$$
(3x^2y)(-2xy^3)=(3\cdot(-2))(x^2\cdot x)(y\cdot y^3)=-6x^3y^4.
$$

The product $x^2\cdot x$ contains three factors of $x$. This is why the exponents are added. For two binomials, first distribute over the terms of the first factor, then distribute in each of the products obtained. With four symbols $A,B,C,D$, the calculation is

$$
\begin{aligned}
(A+B)(C+D)&=A(C+D)+B(C+D)\\[6pt]
          &=AC+AD+BC+BD.
\end{aligned}
$$
:::
::::

:::esempio{titolo="A rectangle divided into four areas"}
For $x>0$, a rectangle with side lengths $x+3$ and $x+2$ is divided along the two sides into the segments shown in the figure. The four areas are $x^2$, $3x$, $2x$ and $6$. The number $6$ is the product of the two constant lengths. The two first-degree areas can be added because both are multiples of $x$.

::struttura{poligoni="0,0 2,0 2,2 0,2;2,0 5,0 5,2 2,2;0,2 2,2 2,4 0,4;2,2 5,2 5,4 2,4" riferimento=0 etichette="1,-0.4,x;3.5,-0.4,3;-0.38,1,x;-0.38,3,2;1,1,x^2;3.5,1,3x;1,3,2x;3.5,3,6" titolo="Each of the four regions corresponds to one product"}
$$
(x+3)(x+2)=x^2+3x+2x+6=x^2+5x+6.
$$

The figure requires positive side lengths. The equality of the two expressions follows from the distributive property and holds for every real $x$.
:::

::::teorema{titolo="Degree of a product in one variable"}
For two nonzero polynomials in one variable, of degrees $m$ and $n$, the product has degree $m+n$.

:::dimostrazione
Obtaining exponent $m+n$ requires choosing the term of highest exponent in each factor. If either exponent is smaller, their sum is smaller than $m+n$. The coefficients of the two leading terms are nonzero, so their product is nonzero. The term of degree $m+n$ remains in the simplified form. For example, the coefficient of $x^3$ in $(2x^2-1)(-3x+4)$ is $2(-3)=-6$, so the product has degree three.
:::
::::

## Division and excluded values

::::teorema{#quozienti titolo="Simplifying a quotient of monomials"}
In a quotient of two monomials, divide the coefficients and subtract the exponents of matching variables. The coefficient in the denominator must be nonzero. Moreover, each variable with positive exponent in the denominator must take a nonzero value. If a resulting exponent is negative, a variable factor remains in the denominator.

:::dimostrazione
Separate the coefficients from the variable factors and cancel common copies of each variable that has a nonzero value. For $x\ne0$ and $a\ge b$, the equality $x^a=x^b x^{a-b}$ shows that $\dfrac{x^a}{x^b}=x^{a-b}$. If $a<b$, write $x^b=x^a x^{b-a}$. Cancellation leaves $\dfrac1{x^{b-a}}$.
:::
::::

:::esempio{titolo="An excluded value after cancellation"}
Simplifying for $x\ne0$ gives

$$
\frac{12x^2}{3x}=\frac{12}{3}\cdot\frac{x^2}{x}=4x.
$$

The expression $4x$ has value zero at the origin. The original quotient has denominator zero at that point, so its graph has an open point there. Simplification allows calculation for the permitted values of $x$ and retains the restriction $x\ne0$.

::grafico{f="4*x" xmin=-2.2 xmax=2.2 ymin=-8 ymax=8 punti="0,0,vuoto;1,4" legenda="y=4x,\ x\ne0" titolo="The origin remains excluded after simplification"}
:::

:::osservazione{titolo="Restrictions follow from the denominator"}
In the fraction $\dfrac{18x^2y^3}{6y^2}$, the only restriction is $y\ne0$. The value $x=0$ is permitted because $x$ occurs only in the numerator. The quotient is $3x^2y$ and is zero at $x=0$. In the quotient $\dfrac{18x^2y}{6y^2}$, on the other hand, the exponent of $y$ changes to $1-2=-1$. This gives $\dfrac{3x^2}{y}$, with the same restriction $y\ne0$.

In both cases the result can be checked by multiplying it by the original denominator. The product recovers the numerator for the permitted values. The restriction on $y$ must be established before cancellation.
:::

## Powers and signs

:::teorema{#potenze-di-monomi titolo="A power of a monomial"}
Let $k$ be a positive integer. In $(ax^my^n)^k$, the coefficient becomes $a^k$. The exponent of $x$ becomes $mk$ because $k$ copies of $m$ are added. Similarly, the exponent of $y$ becomes $nk$. This rule follows by writing the power as a product of $k$ equal factors.

In the square of $-2x$, the coefficient is $4$ and the exponent of $x$ is two. In the cube, the coefficient is $-8$ and the exponent is three. At $x=1$, the vertical coordinates are therefore $4$ and $-8$. At $x=-1$, the cube equals $8$ because the factor $x^3$ is negative as well.

::grafico{f="4*x^2;-8*x^3" xmin=-1.3 xmax=1.3 ymin=-14 ymax=14 punti="1,4;1,-8;-1,8" legenda="y=(-2x)^2;y=(-2x)^3" titolo="The square and cube of the same monomial"}
:::

## Numerical values

:::esempio{#valore titolo="Substituting a value in every term"}
For $P(x)=2x^2-3x+4$, calculate the square, the linear product and the constant term separately. When $x=-2$, the quadratic contribution is $2\cdot4=8$ and the linear contribution is $(-3)\cdot(-2)=6$. The final value is

$$
P(-2)=2(-2)^2-3(-2)+4=18.
$$

For $x=2$, the quadratic contribution is still $8$, while the linear contribution is $-6$. Thus $P(2)=6$. The comparison isolates the effect of the linear term and explains why the two values at the same distance from the origin differ by $12$.

::grafico{f="2*x^2-3*x+4" xmin=-2.8 xmax=3 ymin=-1 ymax=22 punti="-2,18,pieno,A;2,6,pieno,B;0,4" legenda="y=P(x)" titolo="The same polynomial at horizontal coordinates $-2$ and $2$"}
:::

:::osservazione{titolo="Evaluating at zero gives the constant term"}
For one variable, $P(0)$ is the constant term because each positive-degree term contains a factor of $x$. If the polynomial is written as a product, the same substitution finds the constant term without expanding the entire product. For example, $Q(x)=(x-3)(x+5)+2$ gives $Q(0)=(-3)\cdot5+2=-13$.

When there are several variables, the values must be substituted for the corresponding arguments. In $R(x,y)=3x^2y-2xy^2$, using $x=-1$ and $y=2$ gives contributions of $6$ and $8$. Therefore $R(-1,2)=14$. Reversing the arguments gives a different calculation, $R(2,-1)=-16$.
:::

:::osservazione{titolo="Evaluating at one adds the coefficients"}
In one variable, every power of $x$ equals one at $x=1$. Thus $P(1)$ equals the sum of the coefficients in the simplified form. For $P(x)=x(x-2)(x+4)$, substitution gives $1\cdot(-1)\cdot5=-5$, in agreement with the sum $1+2-8$ of the coefficients of $x^3+2x^2-8x$.
:::

## Area and perimeter models

:::esempio{#modelli titolo="Measurements from a sum of regions"}
A rectangle has base $3x+2$ and height $x$, with $x>0$. Dividing the base into segments of lengths $3x$ and $2$ gives two regions of the same height. The partial areas are $3x^2$ and $2x$. Using $x=2$ as a representative measurement, the figure shows regions with areas $12$ and $4$.

::struttura{poligoni="0,0 6,0 6,2 0,2;6,0 8,0 8,2 6,2" riferimento=0 etichette="3,-0.4,3x;7,-0.4,2;-0.45,1,x" titolo="Two regions of equal height in the rectangle"}

$$
\begin{aligned}
A&=x(3x+2)=3x^2+2x,\\[6pt]
P&=2((3x+2)+x)=8x+4.
\end{aligned}
$$

The perimeter is calculated along the four outside edges. The line dividing the regions is part of the area construction and does not contribute to the perimeter. If the lengths are expressed in centimeters, the area is in square centimeters and the perimeter is in centimeters.
:::

:::esempio{titolo="A difference of areas with a common height"}
Two pieces of card have height $2x$ and bases $x+4$ and $x+1$, with $x>0$. Align the two rectangles at the left edge. A strip of base $(x+4)-(x+1)=3$ and height $2x$ remains. The extra area is therefore $6x$. Expanding the two areas also gives $(2x^2+8x)-(2x^2+2x)=6x$. The quadratic terms cancel because they describe equal regions.

::struttura{linee="0,0 6,0 6,4 0,4 0,0;0,0 3,0 3,4 0,4 0,0" poligoni="3,0 6,0 6,4 3,4" riferimento=0 etichette="1.5,-0.45,x+1;4.5,-0.45,3;-0.55,2,2x" titolo="The difference in area is the strip of base $3$"}
:::

:::osservazione{titolo="The effect of a scale factor"}
If both dimensions of a rectangle are multiplied by $k>0$, the perimeter becomes $kP$, because every side in the sum receives the factor $k$. The area becomes $k^2A$, because both factors in the product receive $k$. For example, doubling the sides of a rectangle with area $12$ gives an area of $48$.
:::

## Identities and counterexamples

:::definizione{#identita titolo="Polynomial identities"}
An equality is an **identity** if it is true for every value of the variables in the given domain. A polynomial identity can be proved by putting both expressions into the same simplified form. To show that the equality fails, a single permitted value at which the two sides differ is enough. Such a value is a counterexample.
:::

:::attenzione
The expressions $x^2$ and $x$ have the same value at both $x=0$ and $x=1$. At $x=2$, their values are $4$ and $2$, respectively. Agreement at two points alone is therefore insufficient for concluding that $x^2=x$ is an identity.

::grafico{f="x^2;x" xmin=-0.7 xmax=2.45 ymin=-1 ymax=5 punti="0,0;1,1;2,2;2,4" legenda="y=x^2;y=x" titolo="Two intersections and a counterexample at $x=2$"}
:::

:::osservazione{titolo="Two substitutions for linear expressions"}
To compare $ax+b$ and $cx+d$, it is enough to substitute $x=0$ and $x=1$. The first substitution requires $b=d$. The second requires $a+b=c+d$, and because the constant terms are equal, this gives $a=c$. With both coefficients equal, the expressions agree for every $x$. The assumption of degree at most one is what makes this argument work. The example of $x^2$ and $x$ shows that for quadratic expressions, the same two substitutions allow for disagreement at other points.
:::

:::esempio{titolo="A coefficient that makes an identity hold"}
Suppose that $c(x+1)+2(x-1)=5x+1$ is to hold for every real $x$. Expanding the left side gives $(c+2)x+(c-2)$. The identity at $x=0$ requires $c-2=1$, so $c=3$. For that value, the coefficient of $x$ is $c+2=5$. Both terms then agree with those on the right side, so the identity is verified for every $x$.

If the right side is $5x+4$, agreement of the constant term requires $c=6$. For that value, the linear coefficient is $8$, so the left side is $12$ at $x=1$ and the right side is $9$. Hence there is no value of $c$ for which this second equality is true for every $x$.
:::
