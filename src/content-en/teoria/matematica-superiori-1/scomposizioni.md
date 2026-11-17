---
titolo: Factoring polynomials
sommario: Common factors, product identities in reverse, trinomials, and shared factors.
---

## Taking out a common factor

:::teorema{#comune titolo="Taking out a common factor"}
If every term of a polynomial contains a common factor, the distributive property lets us take it out of the sum. For example,

$$
6x^2+9x=3x(2x+3).
$$

Each term inside is the corresponding original term divided by the common factor. Multiplying back verifies the result, since $3x\cdot2x=6x^2$ and $3x\cdot3=9x$.

A common factor can be negative. The factorization $-4x^2-8x=-4x(x+2)$ retains both signs correctly. A factorization is a polynomial identity and holds even at $x=0$. The nonzero conditions are needed when dividing.
:::

## Factoring by grouping

:::teorema{#parziale titolo="Finding a common binomial"}
Factoring by grouping organizes terms into groups. Factor each group so that the same expression remains.

$$
\begin{aligned}
xy+3x+2y+6
&=x(y+3)+2(y+3)\\
&=(x+2)(y+3).
\end{aligned}
$$

The second equality takes out the common binomial $y+3$. The order of the terms can be changed by commutativity of addition. Grouping works when it yields a common factor, which can be checked by expanding.
:::

:::esempio{titolo="Factoring opposite binomials"}
To factor $3x(x-2)+4(2-x)$, use $2-x=-(x-2)$. Both terms become multiples of $x-2$.

$$
\begin{aligned}
3x(x-2)+4(2-x)&=3x(x-2)-4(x-2)\\[6pt]
&=(x-2)(3x-4).
\end{aligned}
$$
:::

## Using product identities in reverse

:::teorema{#quadrati titolo="Differences of squares and perfect square trinomials"}
The identities already studied can be read from right to left.

$$
a^2-b^2=(a-b)(a+b),
$$

$$
a^2+2ab+b^2=(a+b)^2,\qquad
a^2-2ab+b^2=(a-b)^2.
$$

For example, $9x^2-16y^2=(3x-4y)(3x+4y)$ and $x^2-8x+16=(x-4)^2$.

To recognize a perfect square trinomial, check its middle term too. The two squares alone are insufficient. The polynomial $x^2+2x+9$ does not equal $(x+3)^2$, which has middle term $6x$.
:::

## Trinomials with leading coefficient one

:::teorema{#trinomio titolo="Sum and product of two numbers"}
The product $(x+r)(x+s)=x^2+(r+s)x+rs$ gives a way to factor $x^2+bx+c$. Find two numbers $r,s$ with sum $b$ and product $c$.

For $x^2+5x+6$, the numbers are $2$ and $3$, so the product is $(x+2)(x+3)$. For $x^2-5x+6$, they are $-2$ and $-3$, giving $(x-2)(x-3)$. For $x^2+x-6$, they are $3$ and $-2$.

To find integer linear factors, check divisor pairs of $c$ if $c\ne 0$. If $c=0$, the terms have a common factor of $x$.
:::

:::esempio{titolo="When the product is negative"}
To factor $x^2-5x-14$, look for two numbers of opposite signs, because the required product is $-14$. The absolute value pairs are $1,14$ and $2,7$. Only $2$ and $-7$ give the sum $-5$, so the factorization is $(x+2)(x-7)$.
:::

## Multiple steps and a final check

:::esempio{#completa titolo="Factoring all remaining factorable terms"}
In the polynomial $3x^3-3x$, first factor out $3x$, then use the difference of squares.

$$
3x^3-3x=3x(x^2-1)=3x(x-1)(x+1).
$$

The expression $x^4-16$ also takes two steps.

$$
x^4-16=(x^2-4)(x^2+4)=(x-2)(x+2)(x^2+4).
$$

The factor $x^2+4$ is positive for every real $x$. A real linear factor would have a real zero, so the factorization stops.

To check a factorization, expand the product and compare all the coefficients. Substituting a few numerical values can reveal an error, but does not by itself establish an identity for every value.
:::

## GCD, LCM, and zeros of factors

:::osservazione{#mcd-mcm titolo="Comparing factored expressions"}
For monomials with positive integer coefficients, use the GCD of the coefficients and the smallest exponent on each common variable. Use the LCM of the coefficients and the largest exponent on each variable present to find the LCM. For $12x^3y^2$ and $18x^2y^4$, the results are $6x^2y^2$ and $36x^3y^4$.

The factored form also reveals a zero directly. For $P(x)=(x+3)(x-1)$, we have $P(-3)=0$ because the first factor vanishes. This calculation works directly on the factored polynomial.
:::

:::esempio{titolo="Zeros of both factors"}
For $P(x)=(x-2)(x+1)$, we have $P(x)=0$ when $x=2$ or $x=-1$. The two zeros are the x-coordinates of the points where the graph meets the horizontal axis.

::grafico{f="(x-2)*(x+1)" xmin=-3 xmax=4 ymin=-3 ymax=10 punti="-1,0,pieno;2,0,pieno" titolo="The x-intercepts occur at the zeros of the factors"}
:::
