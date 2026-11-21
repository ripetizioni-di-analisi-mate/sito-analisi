---
titolo: "Monomials and polynomials"
sommario: "Simplified form, degree, polynomial operations and the use of algebraic expressions to prove identities and calculate measurements."
---

## Coefficient and variable part

:::definizione{#monomi titolo="Monomials"}
In algebra a letter, such as $x$ or $y$, stands for a number that has not been chosen yet. A **product** is the result of a multiplication, and the numbers being multiplied are called **factors**. A **power** is a product of equal factors. The expression $x^2$ is read "$x$ squared" and means $x\cdot x$. In $x^2$ the letter $x$ is the **base** and the number $2$ is the **exponent**, that is, the number of factors. A letter written without an exponent has exponent one, because $y=y^1$.

A **monomial** is the product of a number and powers of letters. The number is called the **coefficient** and is a real number, that is, any number: a whole number, a fraction or a decimal, positive, negative or equal to zero. The exponents of the letters are nonnegative integers, that is, $0,1,2,3,\dots$ The product of the powers of the letters is called the **variable part**.

In the monomial $-3x^2y$:

- the coefficient is $-3$;
- the variable part is $x^2y$;
- the exponent of $x$ is two and the exponent of $y$ is one.

The multiplication sign between the number and the letters is left out, so $-3x^2y$ means $(-3)\cdot x\cdot x\cdot y$. Substituting numbers for the letters gives the value of the monomial. With $x=2$ and $y=5$ the value is $(-3)\cdot2\cdot2\cdot5=-60$. The variable part specifies which factors are multiplied even before those numbers are known.

Two monomials are **like terms** if they have the same variable part, that is, if each letter has the same exponent in both monomials. The order in which the letters are written does not matter, because the factors of a multiplication can be exchanged. For example, $5yx^2$ and $-3x^2y$ are like terms because the product $yx^2$ equals $x^2y$.

The monomial $x^2y$ contains the factor $x$ twice, while $xy^2$ contains the factor $y$ twice. In both, the sum of the exponents, which is called the total degree, is $2+1=3$. The variable parts, however, are different, so the two monomials are not like terms.
:::

:::esempio{titolo="Opposite monomials and signs"}
The **opposite** of a number is the number with its sign changed. The opposite of $12$ is $-12$. Two monomials are **opposite** if they have the same variable part and opposite coefficients, like $3x^2y$ and $-3x^2y$.

Setting $y=1$ turns the two monomials into $3x^2$ and $-3x^2$. For every value of $x$, the second equals the opposite of the first.

The figure shows the two monomials on a plane with two axes. The horizontal axis gives the value of $x$, which is called the **horizontal coordinate**. The vertical axis gives the value of the monomial, which is called the **vertical coordinate**. Each curve consists of the points whose horizontal coordinate is a value of $x$ and whose vertical coordinate is the corresponding value of the monomial. The two marked points have horizontal coordinate $2$. The point on the first curve has vertical coordinate $3\cdot2^2=12$ and the point on the second has vertical coordinate $-3\cdot2^2=-12$. The two points are equally far from the horizontal axis and lie on opposite sides of it.

::grafico{f="3*x^2;-3*x^2" xmin=-2.4 xmax=2.4 ymin=-14 ymax=14 punti="2,12;2,-12" legenda="y=3x^2;y=-3x^2" titolo="Opposite monomials give opposite vertical coordinates"}
:::

:::osservazione{titolo="Constants and the zero monomial"}
A **constant** is a number written without letters, such as $-7$. A nonzero constant is a monomial. Its variable part is $1$, because $-7=-7\cdot1$. Its degree is zero, because there are no letters.

If the coefficient is zero, the monomial equals zero whatever numbers are assigned to the letters, because a product with a factor equal to zero is zero. Thus $0x^4$, $0y^2$ and $0$ all denote the same monomial, which is called the **zero monomial**. In this chapter no degree is assigned to the zero monomial.

A **quotient** is the result of a division and is written as a fraction. The quotient $\dfrac{x}{3}$ is the product $\dfrac13\cdot x$, so it is a monomial with coefficient $\dfrac13$.

In the quotient $\dfrac{3}{x}$ the letter is in the denominator, that is, below the fraction bar. Division by zero is not defined, so the expression has a value only for $x\ne0$ (the symbol $\ne$ is read "not equal to"). Written as a product, the expression becomes $3x^{-1}$, where $x^{-1}$ means $\dfrac1x$. The exponent $-1$ is negative, whereas the exponents of a monomial are nonnegative integers. For this reason $\dfrac3x$ is not a monomial.
:::

## Simplified form and degree

:::definizione{#grado titolo="Polynomials and their degree"}
A **polynomial** is a sum of a finite number of monomials, which are called its **terms**. For example, $3x^2+2x-1$ is the sum of the three terms $3x^2$, $2x$ and $-1$. A polynomial with two terms, such as $x+3$, is called a **binomial**. One with three terms is called a **trinomial**.

A polynomial is in **simplified form** when it contains a single term for each variable part. The simplified form is obtained by adding the coefficients of like terms and omitting terms with zero coefficients. In $5x+2x^2-3x$ the terms $5x$ and $-3x$ are like terms and $5-3=2$, so the simplified form is $2x^2+2x$.

The **constant term** is the term without letters, that is, the one with variable part $1$. In $3x^2+2x-1$ the constant term is $-1$. When the term without letters is absent, as in $2x^2+2x$, the constant term is zero.

The **total degree** of a nonzero monomial is the sum of the exponents of its letters. Its **degree in a given letter** is the exponent of that letter, and it is zero if the letter is absent. The monomial $x^2y$ has total degree $2+1=3$, degree two in $x$ and degree one in $y$.

For a nonzero polynomial the degrees are read from the terms left after simplification. The total degree of the polynomial is the largest of the total degrees of its terms. The degree in a given letter is the largest exponent of that letter. If all the coefficients of the simplified form are zero, the polynomial is the **zero polynomial** and, as for the zero monomial, no degree is assigned to it.

In a polynomial in the single letter $x$ the terms are named after their degree. The term with $x$ is the **linear** term (first degree), the one with $x^2$ is the **quadratic** term (second degree) and the one with $x^3$ is the **cubic** term (third degree).

Some polynomials contain, besides $x$, a **parameter**, that is, a letter such as $k$ that stands for a fixed number not yet chosen. Determining the degree "as the parameter $k$ varies" means finding the degree for every value of $k$. For example, $(k-1)x^2+3x$ has degree two for $k\ne1$ and degree one for $k=1$, because for $k=1$ the coefficient $k-1$ equals zero.
:::

:::esempio{titolo="Maximum exponents in individual variables"}
The notation $P(x,y)$ is read "$P$ of $x$ and $y$" and is the name of a polynomial in the letters $x$ and $y$. Consider

$$
\begin{aligned}
P(x,y)&=2x^2y+5x^4-x^2y-5x^4+4\\[6pt]
      &=x^2y+4.
\end{aligned}
$$

In this step the like terms are added. This gives $2x^2y-x^2y=(2-1)x^2y=x^2y$ and $5x^4-5x^4=0$. The term in $x^4$ has coefficient zero in the simplified form, so its exponent $4$ does not enter the calculation of the degrees.

The total degree is three, from the exponents $2$ and $1$ of $x^2y$. The degree in $x$ is two and the degree in $y$ is one. In this example the sum $2+1$ of the degrees in the individual letters equals the total degree, because the two largest exponents occur in the same monomial.

In the polynomial $x^3+y^4$ the largest exponents, three for $x$ and four for $y$, occur in different terms. The first term has total degree three and the second has total degree four. The total degree of the polynomial is therefore four, while the sum of the degrees in the two letters is $3+4=7$.
:::

:::esempio{titolo="Cancellation of the leading term"}
The notation $P(x)$ is read "$P$ of $x$" and is the name of a polynomial in the letter $x$. The notation $P(1)$ denotes the value obtained by substituting $1$ for $x$. In a polynomial in a single letter the **leading term** is the term of highest degree.

Let $P(x)=4x^3-2x+1$ and $Q(x)=-4x^3+x+6$. The leading terms are $4x^3$ and $-4x^3$, which are opposite. The sum is calculated one degree at a time:

- the coefficient of $x^3$ is $4-4=0$;
- the coefficient of $x$ is $-2+1=-1$;
- the constant term is $1+6=7$.

This gives $P(x)+Q(x)=-x+7$, of degree one, while the two original polynomials have degree three.

The graph shows the three vertical coordinates at $x=1$. Here $P(1)=4-2+1=3$ and $Q(1)=-4+1+6=3$, while the sum equals $-1+7=6$. The graph of a first-degree polynomial is a straight line. The sum is represented by a straight line because the cubic terms cancel for every value of $x$.

::grafico{f="4*x^3-2*x+1;-4*x^3+x+6;7-x" xmin=-1.45 xmax=1.45 ymin=-8 ymax=16 punti="1,3;1,6" legenda="P(x);Q(x);P(x)+Q(x)" titolo="The sum of the two cubic polynomials is a straight line"}
:::

:::osservazione{titolo="When a sum retains the greater degree"}
Consider two nonzero polynomials in a single letter, which is also called the **variable**. If their sum is nonzero, the degree of the sum is less than or equal to the larger of the two degrees. The reason is that the sum contains only powers already present in the two polynomials.

If the two degrees differ, the degree of the sum equals the larger of the two. The leading term of the higher-degree polynomial has no like term in the other polynomial, so its coefficient is unchanged in the sum. For example, $(4x^3-2x+1)+(x^2+5)=4x^3+x^2-2x+6$ has degree three.
:::

## Sums, differences and opposites

::::teorema{#somme titolo="Adding like terms"}
Two like terms are added by adding their coefficients and leaving the variable part unchanged. For example, $4x^2y+3x^2y=(4+3)x^2y=7x^2y$.

If $L$ is a variable part and $a,b$ are two coefficients, the sum of $aL$ and $bL$ is $(a+b)L$. When polynomials are added, this rule combines all the monomials with the same variable part into a single term.

:::dimostrazione
The **addends** are the numbers being added. By the **distributive property**, multiplying a sum by a number is the same as multiplying each addend by that number and then adding the results. For example, $(4+3)\cdot5=4\cdot5+3\cdot5=35$.

Applied to the sum $a+b$ and the factor $L$, the distributive property gives $(a+b)L=aL+bL$. Reading the equality from right to left turns $aL+bL$ into $(a+b)L$. This operation is called **taking out** the common factor $L$, that is, the factor present in both terms. For example, $4x^2y-7x^2y=(4-7)x^2y=-3x^2y$.

With different variable parts, as in $4x^2y-7xy^2$, the coefficients $4$ and $-7$ multiply different factors. The two coefficients are therefore not added, and the expression is already simplified.
:::
::::

:::esempio{titolo="Subtracting an entire polynomial"}
Subtracting a polynomial is the same as adding its opposite. The opposite of a polynomial is obtained by multiplying each of its terms by $-1$, that is, by changing the sign of every term. The opposite of $Q(x)=x^2-4x+5$ is $-x^2+4x-5$. The term $-4x$ therefore becomes $+4x$.

$$
\begin{aligned}
(3x^2+2x-1)-(x^2-4x+5)
&=3x^2+2x-1-x^2+4x-5\\[6pt]
&=(3-1)x^2+(2+4)x+(-1-5)\\[6pt]
&=2x^2+6x-6.
\end{aligned}
$$

The table lists the coefficients one at a time, and the third row contains the sum of the first two. For instance, the constant term is $-1-5=-6$.

| Polynomial | Coefficient of $x^2$ | Coefficient of $x$ | Constant term |
| --- | --- | --- | --- |
| $3x^2+2x-1$ | $3$ | $2$ | $-1$ |
| $-(x^2-4x+5)$ | $-1$ | $4$ | $-5$ |
| Difference | $2$ | $6$ | $-6$ |

To check the full calculation, $Q$ is added to the difference, which gives back the coefficients $2+1=3$, $6-4=2$ and $-6+5=-1$ of $3x^2+2x-1$.
:::

:::esempio{titolo="A difference inside another difference"}
Consider $P-(Q-R)$, where $P=x^2+2x-3$, $Q=3x^2-x+1$ and $R=2x^2-x-4$. To subtract $Q-R$, its opposite is added, that is, the entire difference is multiplied by $-1$, both $Q$ and $-R$. This gives $-Q+R$, so

$$
\begin{aligned}
P-(Q-R)&=P-Q+R\\[6pt]
&=(1-3+2)x^2+(2+1-1)x+(-3-1-4)\\[6pt]
&=2x-8.
\end{aligned}
$$

The term $-R$ inside the difference becomes $+R$ when the opposite is taken. The quadratic terms cancel, because $1-3+2=0$, and the degree drops to one. The constant term is checked with a separate calculation, by substituting zero for every $x$. Of $P$, $Q$ and $R$ only the constant terms $-3$, $1$ and $-4$ remain. This gives $-3-(1-(-4))=-3-5=-8$.
:::

## Products and the distributive property

::::teorema{#prodotti titolo="Products of monomials and polynomials"}
Products are calculated with three rules.

- **Monomial times monomial.** The coefficients are multiplied and, for each letter, the exponents in the factors are added.
- **Monomial times polynomial.** The monomial multiplies every term of the sum. For example, $2x(x+3)=2x\cdot x+2x\cdot3=2x^2+6x$.
- **Polynomial times polynomial.** Every term of the first factor multiplies every term of the second.

Carrying out a product and writing the result as a sum of monomials is called **expanding** the product.

:::dimostrazione
With two monomials, the numerical factors and the powers of the same letter are grouped. The result does not change, because the factors of a product can be exchanged. For example,

$$
(3x^2y)(-2xy^3)=(3\cdot(-2))(x^2\cdot x)(y\cdot y^3)=-6x^3y^4.
$$

The product $x^2\cdot x$ is $(x\cdot x)\cdot x$ and contains three factors $x$, so it equals $x^3$. This is why the exponents are added.

For two binomials, the distributive property is applied first to the terms of the first factor, then once to each of the products obtained. With four symbols $A,B,C,D$, which stand for any four monomials, the calculation is

$$
\begin{aligned}
(A+B)(C+D)&=A(C+D)+B(C+D)\\[6pt]
          &=AC+AD+BC+BD.
\end{aligned}
$$

In the first row the sum $C+D$ is treated as a single factor.
:::
::::

:::esempio{titolo="A rectangle divided into four areas"}
The area of a rectangle is the product of the lengths of two adjacent sides. For $x>0$ (the symbol $>$ is read "greater than"), consider a rectangle with side lengths $x+3$ and $x+2$. The horizontal side is divided into segments $x$ and $3$, the vertical side into segments $x$ and $2$. The rectangle is thus divided into the four regions shown in the figure, which have areas:

- $x\cdot x=x^2$;
- $3\cdot x=3x$;
- $x\cdot2=2x$;
- $3\cdot2=6$.

The number $6$ is the product of the two constant lengths. The two first-degree areas, $3x$ and $2x$, add up to $5x$ because they are like terms.

::struttura{poligoni="0,0 2,0 2,2 0,2;2,0 5,0 5,2 2,2;0,2 2,2 2,4 0,4;2,2 5,2 5,4 2,4" riferimento=0 etichette="1,-0.4,x;3.5,-0.4,3;-0.38,1,x;-0.38,3,2;1,1,x^2;3.5,1,3x;1,3,2x;3.5,3,6" titolo="Each of the four regions corresponds to one product"}
$$
(x+3)(x+2)=x^2+3x+2x+6=x^2+5x+6.
$$

The figure requires positive side lengths. The equality of the two expressions follows from the distributive property, without using the figure, and holds for every real number $x$.
:::

::::teorema{titolo="Degree of a product in one variable"}
The degree of the product of two nonzero polynomials in one variable is the sum of the degrees of the two factors. A polynomial of degree two multiplied by a polynomial of degree one gives a polynomial of degree $2+1=3$. With letters, if the two polynomials have degrees $m$ and $n$, the product has degree $m+n$.

:::dimostrazione
In the product every term of the first polynomial multiplies every term of the second, and the exponents are added. Obtaining exponent $m+n$ requires choosing the term of highest exponent in each factor, that is, the leading term. If either exponent is smaller, their sum is smaller than $m+n$. No other product is therefore a like term of the product of the two leading terms.

The coefficients of the two leading terms are nonzero, so their product is nonzero. The term of degree $m+n$ therefore remains in the simplified form. For example, in $(2x^2-1)(-3x+4)$ the leading terms are $2x^2$ and $-3x$. The coefficient of $x^3$ is $2\cdot(-3)=-6$, so the product has degree three.
:::
::::

## Division and excluded values

::::teorema{#quozienti titolo="Simplifying a quotient of monomials"}
The quotient of two monomials is written as a fraction, with the first monomial in the numerator (above the fraction bar) and the second in the denominator (below it). To simplify it, the coefficients are divided and, for each letter present both above and below, the exponent in the denominator is subtracted from the exponent in the numerator. For example, for $x\ne0$,

$$
\frac{10x^5}{2x^2}=\frac{10}{2}\cdot x^{5-2}=5x^3.
$$

The quotient has a value only if the denominator is different from zero. There are two requirements, which are called the **restrictions** (or existence conditions) of the quotient:

- the coefficient in the denominator is nonzero;
- each letter with positive exponent in the denominator takes a nonzero value.

If a resulting exponent is negative, a variable factor remains in the denominator. For example, for $x\ne0$, in $\dfrac{x^2}{x^5}$ the subtraction gives $2-5=-3$ and the result is $\dfrac1{x^3}$.

:::dimostrazione
The coefficients are separated from the variable factors. Each nonzero letter is simplified as in a numerical fraction, that is, by dividing numerator and denominator by the same factor. For $x\ne0$,

$$
\frac{x^5}{x^2}=\frac{x\cdot x\cdot x\cdot x\cdot x}{x\cdot x}=x\cdot x\cdot x=x^3.
$$

The two factors $x$ in the denominator cancel with two of the five factors in the numerator, and $5-2=3$ of them remain.

With any two exponents $a$ and $b$ the argument is the same. Let $x\ne0$ and let $a\ge b$, that is, $a$ greater than or equal to $b$. The equality $x^a=x^b x^{a-b}$ holds, because in a product the exponents are added and $b+(a-b)=a$. Dividing the expressions on the two sides of the sign $=$ by $x^b$ gives $\dfrac{x^a}{x^b}=x^{a-b}$. If $a<b$, $x^b$ is written as $x^a x^{b-a}$. Cancelling the factor $x^a$ leaves $\dfrac{x^a}{x^b}=\dfrac1{x^{b-a}}$.
:::
::::

:::esempio{titolo="An excluded value after cancellation"}
The quotient $\dfrac{12x^2}{3x}$ has the letter $x$ in the denominator, so the restriction is $x\ne0$. Simplifying for $x\ne0$ gives

$$
\frac{12x^2}{3x}=\frac{12}{3}\cdot\frac{x^2}{x}=4x.
$$

The expression $4x$ equals zero for $x=0$. The original quotient, however, has denominator $3\cdot0=0$ for $x=0$ and therefore has no value. The graph of the quotient is the straight line $y=4x$ without the origin, that is, the point where the two axes meet. In the figure the origin is drawn as an open point and the filled point has horizontal coordinate $1$ and vertical coordinate $4$. Simplification allows the values of the quotient to be calculated for every permitted $x$ and retains the restriction $x\ne0$.

::grafico{f="4*x" xmin=-2.2 xmax=2.2 ymin=-8 ymax=8 punti="0,0,vuoto;1,4" legenda="y=4x,\ x\ne0" titolo="The origin remains excluded after simplification"}
:::

:::osservazione{titolo="Restrictions follow from the denominator"}
In the fraction $\dfrac{18x^2y^3}{6y^2}$ only $y$ occurs in the denominator, so the only restriction is $y\ne0$. The value $x=0$ is permitted because $x$ occurs only in the numerator. The quotient is $\dfrac{18}{6}\,x^2y^{3-2}=3x^2y$ and is zero for $x=0$.

In the quotient $\dfrac{18x^2y}{6y^2}$, on the other hand, the exponent of $y$ becomes $1-2=-1$, so a factor $y$ remains in the denominator. This gives $\dfrac{3x^2}{y}$, with the same restriction $y\ne0$.

In both cases the result is checked by multiplying it by the original denominator. For the permitted values the product recovers the numerator. In the first case, for example, $3x^2y\cdot6y^2=18x^2y^3$.

The restriction on $y$ is established before simplifying. The reason is that simplification divides numerator and denominator by a power of $y$, and division is defined only for a nonzero number.
:::

## Powers and signs

:::teorema{#potenze-di-monomi titolo="A power of a monomial"}
A power of a monomial is the product of several factors equal to that monomial. For example,

$$
(2x^3y)^2=(2x^3y)(2x^3y)=(2\cdot2)(x^3\cdot x^3)(y\cdot y)=4x^6y^2.
$$

The coefficient $2$ is squared and every exponent is multiplied by two.

With letters, the rule is as follows. Let $k$ be a positive integer and let $ax^my^n$ be a monomial with coefficient $a$ and exponents $m$ and $n$. In $(ax^my^n)^k$:

- the coefficient becomes $a^k$;
- the exponent of $x$ becomes $mk$, because in the product of $k$ equal factors $k$ copies of $m$ are added;
- similarly, the exponent of $y$ becomes $nk$.

A negative coefficient raised to an even exponent gives a positive number. Raised to an odd exponent, it gives a negative number. In the square of $-2x$ the coefficient is $(-2)\cdot(-2)=4$ and the exponent of $x$ is two, so $(-2x)^2=4x^2$. In the cube the coefficient is $(-2)\cdot(-2)\cdot(-2)=-8$ and the exponent is three, so $(-2x)^3=-8x^3$.

If the coefficient is a fraction, both the numerator and the denominator are raised to the power. For example, $\left(-\dfrac23x\right)^3=-\dfrac{8}{27}x^3$, because $2^3=8$ and $3^3=27$.

The graph shows $4x^2$ and $-8x^3$. At $x=1$ the vertical coordinates are $4$ and $-8$. At $x=-1$ the cube equals $-8\cdot(-1)^3=-8\cdot(-1)=8$, because the factor $x^3$ is negative as well.

::grafico{f="4*x^2;-8*x^3" xmin=-1.3 xmax=1.3 ymin=-14 ymax=14 punti="1,4;1,-8;-1,8" legenda="y=(-2x)^2;y=(-2x)^3" titolo="The square and cube of the same monomial"}
:::

## Numerical values

:::esempio{#valore titolo="Substituting a value in every term"}
The **value** of a polynomial at a given number is calculated by substituting that number for the letter in every term. The value of a single term is also called the **contribution** of that term. For $P(x)=2x^2-3x+4$, the quadratic term $2x^2$, the linear term $-3x$ and the constant term $4$ are calculated separately.

When $x=-2$:

- the quadratic contribution is $2\cdot(-2)^2=2\cdot4=8$;
- the linear contribution is $(-3)\cdot(-2)=6$;
- the constant term is $4$.

The final value is

$$
P(-2)=2(-2)^2-3(-2)+4=8+6+4=18.
$$

For $x=2$ the quadratic contribution is still $8$, because $2^2=(-2)^2=4$. The linear contribution is $(-3)\cdot2=-6$. Thus $P(2)=8-6+4=6$.

The two values $18$ and $6$ differ by $12$. The difference depends only on the linear term, while the other two terms have the same value. In the graph the points $A$ and $B$ have horizontal coordinates $-2$ and $2$, at the same distance from the origin, and vertical coordinates $18$ and $6$.

::grafico{f="2*x^2-3*x+4" xmin=-2.8 xmax=3 ymin=-1 ymax=22 punti="-2,18,pieno,A;2,6,pieno,B;0,4" legenda="y=P(x)" titolo="The same polynomial at horizontal coordinates $-2$ and $2$"}
:::

:::osservazione{titolo="Evaluating at zero gives the constant term"}
For one variable, the value $P(0)$ is the constant term. The reason is that each positive-degree term contains a factor $x$ and equals zero for $x=0$.

If the polynomial is written as a product, the same substitution gives the constant term without expanding the entire product. For example, $Q(x)=(x-3)(x+5)+2$ gives $Q(0)=(-3)\cdot5+2=-15+2=-13$.

When there are several letters, each value is substituted for the corresponding letter. In the notation $R(-1,2)$ the first number is the value of $x$ and the second is the value of $y$, in the order in which the letters appear in $R(x,y)$. For $R(x,y)=3x^2y-2xy^2$, using $x=-1$ and $y=2$, the two contributions are

$$
3x^2y=3\cdot(-1)^2\cdot2=6,\qquad -2xy^2=-2\cdot(-1)\cdot2^2=8.
$$

Therefore $R(-1,2)=6+8=14$. Exchanging the two values gives a different calculation, $R(2,-1)=3\cdot4\cdot(-1)-2\cdot2\cdot1=-12-4=-16$.
:::

:::osservazione{titolo="Evaluating at one adds the coefficients"}
In one variable, every power of $x$ equals one at $x=1$, because a product of factors equal to one is one. Each term then equals its coefficient. Thus $P(1)$ is the sum of the coefficients in the simplified form.

For $P(x)=x(x-2)(x+4)$, substitution into the product gives $1\cdot(1-2)\cdot(1+4)=1\cdot(-1)\cdot5=-5$. The expansion is $x(x^2+2x-8)=x^3+2x^2-8x$ and the sum of its coefficients is $1+2-8=-5$, in agreement with the value found.
:::

## Area and perimeter models

A model is an expression with letters that gives a measurement, for example an area, for every value of $x$.

:::esempio{#modelli titolo="Measurements from a sum of regions"}
The **perimeter** of a rectangle is the sum of the lengths of its four sides. The **area** is the product of the base and the height.

A rectangle has base $3x+2$ and height $x$, with $x>0$. Dividing the base into segments of lengths $3x$ and $2$ gives two regions with the same height $x$. The partial areas are $3x\cdot x=3x^2$ and $2\cdot x=2x$. The figure is drawn with $x=2$. The base then measures $8$ and the two regions have areas $3\cdot2^2=12$ and $2\cdot2=4$.

::struttura{poligoni="0,0 6,0 6,2 0,2;6,0 8,0 8,2 6,2" riferimento=0 etichette="3,-0.4,3x;7,-0.4,2;-0.45,1,x" titolo="Two regions of equal height in the rectangle"}

$$
\begin{aligned}
A&=x(3x+2)=3x^2+2x,\\[6pt]
P&=2((3x+2)+x)=8x+4.
\end{aligned}
$$

In the perimeter $P$ the base and the height each appear twice, because opposite sides of a rectangle are equal. Their sum is $(3x+2)+x=4x+2$ and $2(4x+2)=8x+4$.

The perimeter is calculated along the four outside edges. The line dividing the two regions is used to calculate the area and is not part of the perimeter. If the lengths are expressed in centimeters, the perimeter is in centimeters and the area is in square centimeters, because it is the product of two lengths.
:::

:::esempio{titolo="A difference of areas with a common height"}
Two rectangular pieces of card have the same height $2x$ and bases $x+4$ and $x+1$, with $x>0$. The two rectangles are placed one on top of the other, aligned at the left edge. A strip of the wider rectangle, of base $(x+4)-(x+1)=x+4-x-1=3$ and height $2x$, remains uncovered. The extra area is therefore $3\cdot2x=6x$.

The same result is obtained by expanding the two areas and subtracting the second from the first:

$$
\begin{aligned}
2x(x+4)&=2x^2+8x,\\[6pt]
2x(x+1)&=2x^2+2x,\\[6pt]
(2x^2+8x)-(2x^2+2x)&=6x.
\end{aligned}
$$

The quadratic terms cancel because they describe equal regions. The term $2x^2$ is the area of the region of base $x$ and height $2x$, which is present in both pieces of card.

::struttura{linee="0,0 6,0 6,4 0,4 0,0;0,0 3,0 3,4 0,4 0,0" poligoni="3,0 6,0 6,4 3,4" riferimento=0 etichette="1.5,-0.45,x+1;4.5,-0.45,3;-0.55,2,2x" titolo="The difference in area is the strip of base $3$"}
:::

:::osservazione{titolo="The effect of a scale factor"}
A **scale factor** is a number $k>0$ by which all the lengths of a figure are multiplied. If the base $b$ and the height $h$ of a rectangle are both multiplied by $k$, the measurements change as follows:

- the perimeter $P=2(b+h)$ becomes $2(kb+kh)=k\cdot2(b+h)=kP$, because every side in the sum receives the factor $k$;
- the area $A=bh$ becomes $(kb)(kh)=k^2bh=k^2A$, because both factors in the product receive $k$.

For example, doubling the sides of a rectangle with area $12$ gives an area of $2^2\cdot12=4\cdot12=48$.
:::

## Identities and counterexamples

:::definizione{#identita titolo="Polynomial identities"}
In an equality the expression to the left of the sign $=$ is called the **left-hand side** (or left side) and the one to the right is called the **right-hand side** (or right side). The **domain** is the set of values permitted for the letters. For polynomials the domain consists of all real numbers.

An equality is an **identity** if it is true for every value of the letters in the given domain. For example, $2(x+3)=2x+6$ is an identity.

An identity between polynomials is proved by putting both expressions into the same simplified form. In the example, expanding the left side gives $2\cdot x+2\cdot3=2x+6$, which is the right side.

To show that an equality is not an identity, a single permitted value at which the two sides differ is enough. Such a value is a **counterexample**. The equality $2(x+3)=2x+3$ is not an identity, because for $x=0$ the left side equals $6$ and the right side equals $3$.
:::

:::attenzione
The expressions $x^2$ and $x$ have the same value at $x=0$ and at $x=1$. At $x=2$ their values are $4$ and $2$, respectively. The value $x=2$ is a counterexample, so $x^2=x$ is not an identity. Agreement at two points alone is insufficient for concluding otherwise.

In the graph the two curves meet at the points with horizontal coordinates $0$ and $1$ and have different vertical coordinates at horizontal coordinate $2$.

::grafico{f="x^2;x" xmin=-0.7 xmax=2.45 ymin=-1 ymax=5 punti="0,0;1,1;2,2;2,4" legenda="y=x^2;y=x" titolo="Two intersections and a counterexample at $x=2$"}
:::

:::osservazione{titolo="Two substitutions for linear expressions"}
A **linear** expression in $x$ has the form $ax+b$, where $a$ and $b$ are two numbers. Its degree is at most one, that is, one or zero. To establish whether $ax+b$ and $cx+d$ agree for every $x$, the substitutions $x=0$ and $x=1$ are enough.

- For $x=0$ the two expressions equal $b$ and $d$. The first substitution therefore requires $b=d$.
- For $x=1$ the two expressions equal $a+b$ and $c+d$. The second substitution requires $a+b=c+d$ and, because the constant terms are equal, this gives $a=c$.

With both coefficients equal, the two expressions agree for every $x$.

The assumption of degree at most one is what makes this argument work, because in that case there are only two coefficients to compare. For second-degree expressions, such as $x^2$ and $x$, the same two substitutions are not enough.
:::

:::esempio{titolo="A coefficient that makes an identity hold"}
A number $c$ is sought for which $c(x+1)+2(x-1)=5x+1$ is true for every real number $x$. The left side is expanded:

$$
\begin{aligned}
c(x+1)+2(x-1)&=cx+c+2x-2\\[6pt]
&=(c+2)x+(c-2).
\end{aligned}
$$

For $x=0$ the equality becomes $c-2=1$, so $c=3$. For that value, the coefficient of $x$ is $c+2=5$. The left side is then $5x+1$, equal to the right side, and the identity is verified for every $x$.

If the right side is $5x+4$, the condition on the constant term is $c-2=4$ and requires $c=6$. For that value, the linear coefficient is $6+2=8$ and the left side is $8x+4$. For $x=1$ the left side equals $12$ and the right side equals $5+4=9$. Hence there is no value of $c$ for which this second equality is true for every $x$.
:::
