---
titolo: Monomials and polynomials
sommario: Algebraic expressions, degree, operations with monomials and polynomials, and substitution.
---

## Coefficient and variable part

:::definizione{#monomi titolo="Monomials"}
A **monomial** is a product of a number, called the coefficient, and powers of variables with nonnegative integer exponents. In $-3x^2y$, the coefficient is $-3$ and the variable part is $x^2y$. The monomials $5x^2y$ and $-3x^2y$ are **like terms** because they have the same variable part.

A nonzero constant is a monomial of degree zero. The expression $\dfrac1x$ is outside this definition because it has a variable in the denominator. The zero monomial is the number zero. Its degree is left undefined by the rule for nonzero monomials.
:::

## Degree and simplified form

:::definizione{#grado titolo="Polynomials"}
A **polynomial** is a finite sum of monomials. Write it in simplified form by combining like terms. For example, $3x^2+2x-x^2+4=2x^2+2x+4$.

The total degree of a nonzero monomial is the sum of the exponents of its variables. In $x^3y^2$ the total degree is five and the degree in $x$ is three. The degree of a nonzero polynomial is the greatest degree of its monomials after simplification. In $x^4+2x^2-x^4+1$ the fourth-degree terms cancel, so the degree is two. The term without any variables is the **constant term**.
:::

:::esempio{titolo="When the highest-degree terms cancel"}
In $P(x)=4x^3-2x+1$ and $Q(x)=-4x^3+x+6$, the cubic coefficients have opposite signs and equal magnitude. The two terms cancel in the sum.

$$
P(x)+Q(x)=(4-4)x^3+(-2+1)x+(1+6)=-x+7.
$$

The sum is a linear polynomial. The same calculation can be used to find an unknown coefficient that lowers the degree of a sum.
:::

## Sums, differences, and additive inverses

:::teorema{#somme titolo="Adding coefficients of like monomials"}
When like monomials are added, their coefficients add and their variable part stays unchanged, as in $4x^2y-7x^2y=-3x^2y$. Terms with different variable parts remain separate, so $2x+3y$ is already simplified.

The additive inverse of a polynomial changes the sign of all its terms. For example,

$$
(3x^2+2x-1)-(x^2-4x+5)=2x^2+6x-6.
$$

The term $-4x$ of the second polynomial becomes $+4x$ when the whole polynomial is subtracted. The result can be checked by adding the subtracted polynomial back to the difference.
:::

## Products and the distributive property

:::teorema{#prodotti titolo="Multiplying monomials and polynomials"}
To multiply monomials, multiply the coefficients and add the exponents of matching variables. For example, $(3x^2y)(-2xy^3)=-6x^3y^4$.

A monomial multiplies every term of a polynomial, as in $2x(x^2-3x+1)=2x^3-6x^2+2x$. For the product of two polynomials, multiply every term of the first by every term of the second. Thus

$$
(x+3)(x+2)=x^2+2x+3x+6=x^2+5x+6.
$$

The distributive property can also be read in reverse to factor out a common factor. This operation is used in the chapter on factorization.
:::

## Quotients and powers of monomials

:::teorema{#quozienti titolo="Exponents in quotients and powers"}
To divide monomials, divide the coefficients and subtract the exponents of matching variables, provided that the denominator is nonzero. For $x,y\ne0$,

$$
\frac{12x^4y^3}{3x^2y}=4x^2y^2.
$$

A negative exponent means the quotient is outside the definition of a monomial. For example, $x:x^2=\dfrac1x$ for $x\ne0$.

To raise a monomial to a power, raise every factor to that power, as in $(-2x^3y)^2=4x^6y^2$. Treat the sign of the coefficient and the exponents separately. The original nonzero conditions of a quotient still apply after simplifying.
:::

## Numerical values and geometric models

:::esempio{#valore titolo="Substituting values into a formula"}
Given $P(x)=2x^2-3x+4$, find the value at $x=-2$ by substituting it for every occurrence of the variable.

$$
P(-2)=2(-2)^2-3(-2)+4=8+6+4=18.
$$

Grouping the negative input makes the sign of each contribution clear.

If a rectangle has width $3x$ and height $2x+1$, where $x>0$, its area is $A=3x(2x+1)=6x^2+3x$ and its perimeter is $P=2(3x+2x+1)=10x+2$. Area and perimeter involve different operations and use different units.
:::

:::esempio{titolo="Interpreting the terms of an area"}
A rectangle has width $3x+2$ and height $x$, where $x>0$. The width can be divided into one length of $3x$ and one of $2$. Both regions have the same height, so their areas are $3x^2$ and $2x$.

::struttura{poligoni="0,0 6,0 6,2 0,2;6,0 8,0 8,2 6,2" riferimento=0 etichette="3,-0.4,3x;7,-0.4,2;-0.45,1,x" titolo="Two regions of equal height in a rectangle"}

$$
A=x(3x+2)=3x^2+2x .
$$

When $x=2$, the regions have areas $12$ and $4$, so their sum is the area of a rectangle of width $8$ and height $2$.
:::
