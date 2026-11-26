---
titolo: Factorization and rational expressions
sommario: How to factor a polynomial using common factors, special products, and the sum and product of two numbers in a trinomial, how to find the GCD and LCM of polynomials, and how to simplify and combine rational expressions while keeping track of their domain restrictions.
---

## What it means to factor

:::definizione{#scomposizione-in-fattori titolo="Factorization"}
To **factor** a polynomial means to write it as a product of polynomials of lower degree. Each polynomial in the product is called a **factor**. The degree of a polynomial in $x$ is the highest exponent of $x$, as we saw in the chapter on monomials and polynomials.

In simple terms, we turn a sum into a product, just as we factor a number when we write $12 = 2^2 \cdot 3$. For example,
$$
x^2 + 3x = x\,(x + 3) .
$$
The polynomial $x^2 + 3x$ has degree $2$, while its factors $x$ and $x + 3$ have degree $1$. The two forms give the same value for any number substituted for $x$. With $x = 2$, we have $4 + 6 = 10$ and also $2 \cdot 5 = 10$.

Factorization is used to simplify rational expressions, that is, fractions containing variables, and to find the numbers that make a polynomial zero.
:::

:::esempio{titolo="Checking a factorization by multiplying"}
To check that $(x - 2)(x + 5)$ is the factorization of $x^2 + 3x - 10$, multiply the two factors:
$$
\begin{aligned}
(x - 2)(x + 5) &= x^2 + 5x - 2x - 10 \\[6pt]
&= x^2 + 3x - 10 .
\end{aligned}
$$
The product equals the original polynomial, so the factorization is correct.
:::

:::definizione{#polinomio-irriducibile titolo="Irreducible polynomials and complete factorization"}
A polynomial that cannot be written as a product of polynomials of lower degree is called **irreducible**. Every linear polynomial, such as $x + 3$ or $2x - 5$, is irreducible. A factorization is **complete** when all its factors other than numbers are irreducible.

Each linear polynomial is zero at exactly one value of its variable. For example, $x - 2$ equals zero for $x = 2$, and $2x + 1$ equals zero for $x = -\dfrac{1}{2}$ because $2 \cdot \left(-\dfrac{1}{2}\right) + 1 = 0$. A product containing the factor $x - 2$ is therefore zero for $x = 2$. The polynomial $x^2 + 4$, however, is never zero because $x^2$ is greater than or equal to $0$, so $x^2 + 4 \geq 4$. Therefore $x^2 + 4$ has no linear factors and is irreducible.

::grafico{f="x^2-4;x^2+4" xmin=-4 xmax=4 ymin=-5 ymax=12 punti="-2,0,pieno;2,0,pieno" nomi="x,y" titolo="The graph of $y = x^2 - 4$ crosses the $x$-axis at $x = -2$ and $x = 2$, where the factors of $(x + 2)(x - 2)$ vanish. The graph of $y = x^2 + 4$ stays above the $x$-axis and never reaches zero"}
:::

## Factoring out a common factor and factoring by grouping

:::richiamo{titolo="Distributive property"}
For all numbers $a$, $b$, and $c$, we have
$$
a \cdot (b + c) = a \cdot b + a \cdot c .
$$
:::

:::teorema{#raccoglimento-totale titolo="Factoring out a common factor"}
If all the terms of a polynomial share a factor, the polynomial equals that factor times the polynomial obtained by dividing each term by the factor. This method is called **factoring out a common factor**, or extracting a common factor.

This is the distributive property read from right to left. For example,
$$
3x + 6 = 3 \cdot x + 3 \cdot 2 = 3\,(x + 2) .
$$
With $x = 1$ the polynomial equals $3 + 6 = 9$ and the product equals $3 \cdot 3 = 9$.

::grafico{assi=0 uguale=1 poligoni="0,0 4,0 4,4 0,4;4,0 7,0 7,4 4,4" linee="0,0 7,0 7,4 0,4 0,0;4,0 4,4;0,4.6 7,4.6" etichette="1.55,1.9,x²;5.05,1.9,3x;1.85,-0.65,x;5.35,-0.65,3;-0.75,1.9,x;2.85,5.05,x + 3" xmin=-1.3 xmax=8 ymin=-1.3 ymax=5.7 titolo="The rectangle with side lengths $x$ and $x + 3$ consists of a square of area $x^2$ and a rectangle of area $3x$, so $x^2 + 3x = x\,(x + 3)$"}

:::

:::esempio{titolo="Choosing the common factor"}
The common factor consists of the GCD of the coefficients and the variables present in *all* the terms, each raised to its smallest exponent.

In the polynomial $6x^3 - 9x^2$ the coefficients are $6$ and $9$, and $\operatorname{MCD}(6, 9) = 3$. The variable $x$ appears in both terms, with smallest exponent $2$. The common factor is therefore $3x^2$. Dividing the terms gives $\dfrac{6x^3}{3x^2} = 2x$ and $\dfrac{9x^2}{3x^2} = 3$, so
$$
6x^3 - 9x^2 = 3x^2\,(2x - 3) .
$$
Similarly, $10x^2 y - 15xy^2 = 5xy\,(2x - 3y)$ because $\operatorname{MCD}(10, 15) = 5$ and the variables $x$ and $y$ appear in both terms with smallest exponent $1$.
:::

:::attenzione
When a term equals the common factor, its place in the second factor is taken by $1$ because the term divided by itself gives $1$. For example, $5x^2 + 5x = 5x\,(x + 1)$. Writing $5x \cdot x$ is incorrect. For $x = 1$ the polynomial equals $5 + 5 = 10$, whereas $5x \cdot x$ equals $5$.
:::

:::osservazione
The common factor can be a binomial. In $3x\,(x - 2) + 5\,(x - 2)$ both terms contain $x - 2$, so
$$
3x\,(x - 2) + 5\,(x - 2) = (x - 2)(3x + 5) .
$$
A negative number can also be factored out. For example, $-2x - 6 = -2\,(x + 3)$ because $-2 \cdot x = -2x$ and $-2 \cdot 3 = -6$.
:::

:::teorema{#raccoglimento-parziale titolo="Factoring by grouping"}
When no factor is common to all the terms, we can divide them into groups and factor out a common factor from each group. If the same polynomial remains in both groups, we factor it out in turn. This method is called **factoring by grouping**. For example,
$$
\begin{aligned}
ax + ay + 2x + 2y &= a\,(x + y) + 2\,(x + y) \\[6pt]
&= (x + y)(a + 2) .
\end{aligned}
$$
In the first group we factor out $a$, and in the second we factor out $2$, leaving $x + y$ in both groups. With $a = 1$, $x = 3$, and $y = 4$ the polynomial equals $3 + 4 + 6 + 8 = 21$ and the product equals $7 \cdot 3 = 21$.
:::

:::esempio{titolo="Factoring by grouping with one variable"}
In the polynomial $x^3 - 2x^2 + 3x - 6$, group the first two terms together and the last two terms together:
$$
\begin{aligned}
x^3 - 2x^2 + 3x - 6 &= x^2\,(x - 2) + 3\,(x - 2) \\[6pt]
&= (x - 2)(x^2 + 3) .
\end{aligned}
$$
The factorization is complete because $x - 2$ has degree $1$ and $x^2 + 3$ never equals zero, since $x^2 + 3 \geq 3$.
:::

:::osservazione
Sometimes we factor out a negative number from one group to leave the same polynomial as in the other group. In the polynomial $ax - ay - 2x + 2y$, factor out $-2$ from the last two terms because $-2 \cdot x = -2x$ and $-2 \cdot (-y) = 2y$:
$$
\begin{aligned}
ax - ay - 2x + 2y &= a\,(x - y) - 2\,(x - y) \\[6pt]
&= (x - y)(a - 2) .
\end{aligned}
$$
:::

## Difference of squares and square of a binomial

:::richiamo{titolo="Special products"}
For all numbers $a$ and $b$, the following identities hold:
$$
(a + b)(a - b) = a^2 - b^2 ,
$$
$$
(a + b)^2 = a^2 + 2ab + b^2 ,
\qquad
(a - b)^2 = a^2 - 2ab + b^2 .
$$
:::

:::teorema{#differenza-di-quadrati titolo="Difference of squares"}
The **base** of a square is the number or monomial which, when squared, gives that square. A difference of two squares equals the product of the sum of the bases and their difference:
$$
a^2 - b^2 = (a + b)(a - b) .
$$
For example, the base of $9$ is $3$ and the base of $4x^2$ is $2x$. Therefore
$$
x^2 - 9 = (x + 3)(x - 3) ,
\qquad
4x^2 - 25 = (2x + 5)(2x - 5) .
$$
The rule is also useful in numerical calculations. For example, $10^2 - 3^2 = 13 \cdot 7 = 91$, and indeed $100 - 9 = 91$.

::grafico{assi=0 uguale=1 poligoni="0,0 5,0 5,3 3,3 3,5 0,5;8,0 13,0 13,3 8,3;13,0 15,0 15,3 13,3" linee="0,0 5,0 5,3 3,3 3,5 0,5 0,0;0,3 3,3;8,0 15,0 15,3 8,3 8,0;13,0 13,3" segmenti="3,5,5,5;5,3,5,5" etichette="2.3,-0.7,a;-0.7,2.4,a;3.8,5.4,b;1.0,4.0,A;2.2,1.3,B;10.3,1.3,B;13.75,1.3,A;10.6,-0.7,a + b;15.3,1.3,a − b;6.1,1.5,→" xmin=-1.2 xmax=17.6 ymin=-1.3 ymax=6 titolo="From the square of side length $a$, remove the square of side length $b$. The remaining pieces $A$ and $B$ form a rectangle with side lengths $a + b$ and $a - b$, so $a^2 - b^2 = (a + b)(a - b)$"}

:::

:::attenzione
A sum of two squares, such as $x^2 + 9$, differs from both $(x + 3)(x - 3)$ and $(x + 3)^2$. Indeed, $(x + 3)(x - 3) = x^2 - 9$ and $(x + 3)^2 = x^2 + 6x + 9$. For $x = 1$ the binomial $x^2 + 9$ equals $10$, whereas $(x + 3)(x - 3)$ equals $-8$ and $(x + 3)^2$ equals $16$. The binomial $x^2 + 9$ is irreducible because $x^2 + 9 \geq 9$, so it never equals zero.
:::

:::teorema{#quadrato-di-binomio titolo="Perfect square trinomial"}
A trinomial in which two terms are squares and the third is twice the product of their bases is the square of a binomial:
$$
a^2 + 2ab + b^2 = (a + b)^2 ,
\qquad
a^2 - 2ab + b^2 = (a - b)^2 .
$$
The sign inside the binomial is the sign of twice the product. In the trinomial $x^2 + 6x + 9$ the squares are $x^2$ and $9 = 3^2$, and twice the product of the bases is $2 \cdot x \cdot 3 = 6x$, so
$$
x^2 + 6x + 9 = (x + 3)^2 .
$$
In the trinomial $4x^2 - 20x + 25$ the bases are $2x$ and $5$, and $2 \cdot 2x \cdot 5 = 20x$. Twice the product has a minus sign, so $4x^2 - 20x + 25 = (2x - 5)^2$.

::grafico{assi=0 uguale=1 poligoni="0,0 4,0 4,4 0,4;4,0 7,0 7,4 4,4;0,4 4,4 4,7 0,7;4,4 7,4 7,7 4,7" linee="0,0 7,0 7,7 0,7 0,0;4,0 4,7;0,4 7,4" etichette="1.55,1.9,x²;5.05,1.9,3x;1.55,5.35,3x;5.3,5.35,9;1.85,-0.65,x;5.35,-0.65,3;-0.75,1.9,x;-0.75,5.35,3" xmin=-1.3 xmax=8 ymin=-1.3 ymax=7.7 titolo="The square with side length $x + 3$ consists of a square of area $x^2$, two rectangles of area $3x$, and a square of area $9$, so $(x + 3)^2 = x^2 + 6x + 9$"}

:::

:::attenzione
The trinomial $x^2 + 2x + 4$ differs from $(x + 2)^2$. The terms $x^2$ and $4$ are squares with bases $x$ and $2$, but twice the product of the bases is $2 \cdot x \cdot 2 = 4x$, and the linear term of the trinomial is $2x$. Indeed, $(x + 2)^2 = x^2 + 4x + 4$. For $x = 1$ the trinomial equals $7$ and $(x + 2)^2$ equals $9$.
:::

## Factoring a trinomial using a sum and a product

:::teorema{#trinomio-somma-prodotto titolo="Factoring a quadratic trinomial using a sum and a product"}
Consider a trinomial $x^2 + sx + p$, in which the coefficient of $x^2$ is $1$. If two numbers $a$ and $b$ satisfy
$$
\begin{cases}
a + b = s \\
a \cdot b = p
\end{cases}
$$
then
$$
x^2 + sx + p = (x + a)(x + b) .
$$
In words, find two numbers whose *sum* is the coefficient of $x$ and whose *product* is the term without $x$. The rule follows from the product
$$
(x + a)(x + b) = x^2 + bx + ax + ab = x^2 + (a + b)\,x + ab .
$$
For example, $x^2 + 5x + 6 = (x + 2)(x + 3)$ because $2 + 3 = 5$ and $2 \cdot 3 = 6$.

::grafico{assi=0 uguale=1 poligoni="0,0 4,0 4,4 0,4;4,0 7,0 7,4 4,4;0,4 4,4 4,6 0,6;4,4 7,4 7,6 4,6" linee="0,0 7,0 7,6 0,6 0,0;4,0 4,6;0,4 7,4" etichette="1.55,1.9,x²;5.05,1.9,3x;1.55,4.85,2x;5.3,4.85,6;1.85,-0.65,x;5.35,-0.65,3;-0.75,1.9,x;-0.75,4.85,2" xmin=-1.3 xmax=8 ymin=-1.3 ymax=6.7 titolo="The rectangle with side lengths $x + 2$ and $x + 3$ has area $x^2 + 3x + 2x + 6 = x^2 + 5x + 6$. The term $6$ is the product $2 \cdot 3$, and the coefficient $5$ is the sum $2 + 3$"}

:::

:::esempio{titolo="Finding the two numbers"}
Start with the product because there are few pairs of integers with a given product. Choose their signs using the sign rule from the chapter on signed numbers.

In the trinomial $x^2 - 8x + 15$ the product $15$ is positive, so the two numbers have the same sign. The sum $-8$ is negative, so both numbers are negative. Of the pairs $(-1, -15)$ and $(-3, -5)$, only the second has sum $-8$, so
$$
x^2 - 8x + 15 = (x - 3)(x - 5) .
$$
In the trinomial $x^2 - x - 6$ the product $-6$ is negative, so the two numbers have opposite signs. The numbers $2$ and $-3$ have product $-6$ and sum $-1$, so $x^2 - x - 6 = (x + 2)(x - 3)$.

::grafico{f="x^2-8*x+15" xmin=0 xmax=8 ymin=-2 ymax=16 punti="3,0,pieno;5,0,pieno" nomi="x,y" titolo="The trinomial $x^2 - 8x + 15 = (x - 3)(x - 5)$ equals zero for $x = 3$ and $x = 5$, the values that make the two factors zero"}
:::

:::osservazione
If the coefficient of $x^2$ differs from $1$ but divides all the coefficients, first factor it out. For example,
$$
2x^2 + 10x + 12 = 2\,(x^2 + 5x + 6) = 2\,(x + 2)(x + 3) .
$$
If no pair of integers has the required sum and product, as happens for $x^2 + x + 1$, this method does not apply.
:::

## Sum and difference of cubes

:::teorema{#somma-differenza-cubi titolo="Sum and difference of cubes"}
For all numbers $a$ and $b$, the following identities hold:
$$
a^3 + b^3 = (a + b)(a^2 - ab + b^2) ,
$$
$$
a^3 - b^3 = (a - b)(a^2 + ab + b^2) .
$$
The second identity can be checked by multiplying because the middle terms cancel in pairs:
$$
\begin{aligned}
(a - b)(a^2 + ab + b^2) &= a^3 + a^2 b + ab^2 - a^2 b - ab^2 - b^3 \\[6pt]
&= a^3 - b^3 .
\end{aligned}
$$
The first identity can be checked in the same way. For example,
$$
x^3 - 8 = (x - 2)(x^2 + 2x + 4) ,
\qquad
27x^3 + 1 = (3x + 1)(9x^2 - 3x + 1) ,
$$
because $8 = 2^3$, $27x^3 = (3x)^3$, and $1 = 1^3$. Numerically, $3^3 - 1^3 = 27 - 1 = 26$ and $(3 - 1)(9 + 3 + 1) = 2 \cdot 13 = 26$.

::grafico{f="x^3-8" xmin=-3 xmax=4 ymin=-30 ymax=60 punti="2,0,pieno" nomi="x,y" titolo="The graph of $y = x^3 - 8 = (x - 2)(x^2 + 2x + 4)$ crosses the $x$-axis only at $x = 2$ because the second factor is never zero"}
:::

:::osservazione{#falso-quadrato titolo="Quadratic factor in a sum or difference of cubes"}
The trinomial $a^2 + ab + b^2$, like $a^2 - ab + b^2$, is the **quadratic factor in a difference or sum of cubes**. It resembles the square of a binomial but has the term $ab$ in place of twice the product, $2ab$. Such a quadratic factor is irreducible. For example, $x^2 + 2x + 4$ can be written as
$$
x^2 + 2x + 4 = x^2 + 2x + 1 + 3 = (x + 1)^2 + 3 .
$$
The square $(x + 1)^2$ is greater than or equal to $0$, so $x^2 + 2x + 4 \geq 3$ for every $x$. The trinomial is never zero and therefore has no linear factors. The factorization $x^3 - 8 = (x - 2)(x^2 + 2x + 4)$ is therefore complete.
:::

:::osservazione{#scomposizione-completa titolo="Order of methods for a complete factorization"}
To obtain a complete factorization, apply the methods in the following order.

1. Factor out a common factor if one is shared by all terms.
2. For two terms, use the difference of squares or the sum or difference of cubes.
3. For three terms, look for a binomial square or factor the trinomial using a sum and a product.
4. For four terms, factor by grouping.

Start again from the first step for each resulting factor until all factors are irreducible. For example,
$$
2x^3 - 18x = 2x\,(x^2 - 9) = 2x\,(x + 3)(x - 3) ,
$$
$$
x^4 - 16 = (x^2 + 4)(x^2 - 4) = (x^2 + 4)(x + 2)(x - 2) .
$$
In the second example $x^4 = (x^2)^2$ and $16 = 4^2$, so the difference of squares applies twice. The factor $x^2 + 4$ is irreducible because $x^2 + 4 \geq 4$.
:::

## GCD and LCM of polynomials

:::richiamo{titolo="Finding the GCD and LCM by factoring"}
Once two numbers are written as products of primes, the $\operatorname{MCD}$ is the product of their common factors, each with its smallest exponent, and the $\operatorname{mcm}$ is the product of all their factors, common or otherwise, each with its largest exponent.
:::

:::definizione{#mcd-mcm-polinomi titolo="GCD and LCM of polynomials"}
The **greatest common divisor** and **least common multiple** of two or more polynomials are found just as they are for numbers, after factoring each polynomial completely.

- The $\operatorname{MCD}$ is the product of the factors common to all the polynomials, each raised to its smallest exponent.
- The $\operatorname{mcm}$ is the product of all the factors, common or otherwise, each raised to its largest exponent.

For the numbers $12 = 2^2 \cdot 3$ and $18 = 2 \cdot 3^2$, we obtain $\operatorname{MCD}(12, 18) = 2 \cdot 3 = 6$ and $\operatorname{mcm}(12, 18) = 2^2 \cdot 3^2 = 36$. For the polynomials $x^2 - 4 = (x + 2)(x - 2)$ and $x^2 + 4x + 4 = (x + 2)^2$, we obtain
$$
\operatorname{MCD} = x + 2 ,
\qquad
\operatorname{mcm} = (x + 2)^2 (x - 2) .
$$
The $\operatorname{MCD}$ is used to simplify rational expressions, and the $\operatorname{mcm}$ supplies the common denominator when adding them.
:::

:::esempio{titolo="GCD and LCM with a numerical factor"}
Consider $6x^2 + 6x$ and $4x^2 - 4$. Their complete factorizations are
$$
6x^2 + 6x = 2 \cdot 3 \cdot x\,(x + 1) ,
\qquad
4x^2 - 4 = 2^2 \,(x + 1)(x - 1) .
$$
The common factors are $2$ and $x + 1$, each with smallest exponent $1$, so $\operatorname{MCD} = 2\,(x + 1)$. The $\operatorname{mcm}$ includes $2^2$, $3$, $x$, $x + 1$, and $x - 1$, so $\operatorname{mcm} = 12x\,(x + 1)(x - 1)$.
:::

## Rational expressions and domain restrictions

:::definizione{#frazione-algebrica titolo="Rational expression"}
A **rational expression** is a quotient $\dfrac{A}{B}$ in which the numerator $A$ and the denominator $B$ are polynomials and $B$ contains the variable. In simple terms, it is a fraction containing variables. For example,
$$
\frac{2x + 1}{x^2 - 4x}
$$
is a rational expression. Substituting a number for $x$ gives a numerical fraction. With $x = 2$, we have $\dfrac{4 + 1}{4 - 8} = \dfrac{5}{-4} = -\dfrac{5}{4}$.
:::

:::definizione{#condizioni-di-esistenza titolo="Domain restrictions"}
Division by zero is undefined, so we exclude from a rational expression the numbers that make the denominator zero. The **domain restrictions** are the conditions that $x$ must satisfy for the denominator to be nonzero. In simple terms, they tell us which numbers can be substituted for $x$.

In the fraction $\dfrac{2x + 1}{x^2 - 4x}$, when $x = 4$ the denominator equals $16 - 16 = 0$ and the result is $\dfrac{9}{0}$, which is undefined. The value $x = 4$ is therefore excluded.
:::

:::teorema{#legge-annullamento-prodotto titolo="Zero product property"}
A product is zero if and only if at least one factor is zero.

For example, $3 \cdot 0 = 0$, whereas a product of nonzero numbers, such as $2 \cdot (-5) = -10$, is nonzero. This property helps us find the excluded values because a factored denominator is zero exactly when one of its factors is zero.

In the fraction $\dfrac{2x + 1}{x^2 - 4x}$, factor the denominator by taking out a common factor, giving $x^2 - 4x = x\,(x - 4)$. The factor $x$ is zero for $x = 0$, and the factor $x - 4$ is zero for $x = 4$ because $4 - 4 = 0$. Both factors must be nonzero at the same time, so the domain restrictions are
$$
\begin{cases}
x \neq 0 \\
x \neq 4
\end{cases}
$$

::grafico{assi=0 uguale=1 linee="-2.5,0 6.5,0;6.3,0.1 6.5,0 6.3,-0.1;-2,-0.08 -2,0.08;-1,-0.08 -1,0.08;0,-0.08 0,0.08;1,-0.08 1,0.08;2,-0.08 2,0.08;3,-0.08 3,0.08;4,-0.08 4,0.08;5,-0.08 5,0.08;6,-0.08 6,0.08" punti="0,0,vuoto;4,0,vuoto" etichette="-2.12,-0.4,−2;-1.12,-0.4,−1;-0.05,-0.4,0;0.95,-0.4,1;1.95,-0.4,2;2.95,-0.4,3;3.95,-0.4,4;4.95,-0.4,5;5.95,-0.4,6;6.45,0.25,x" xmin=-2.8 xmax=6.9 ymin=-0.7 ymax=0.5 titolo="For the fraction $\dfrac{2x + 1}{x^2 - 4x}$, the excluded values $x = 0$ and $x = 4$ are marked with open circles. All other numbers are allowed"}

:::

## Simplifying rational expressions

:::richiamo{titolo="Equivalent fractions"}
Dividing the numerator and denominator of a fraction by the same nonzero number gives an equivalent fraction.
:::

:::teorema{#semplificazione-frazioni-algebriche titolo="Simplifying a rational expression"}
To simplify a rational expression, factor the numerator and denominator, state the domain restrictions, and divide numerator and denominator by their common factors, that is, by their $\operatorname{MCD}$. By the equivalent fractions property, the resulting fraction is equivalent to the original for all allowed values of $x$. For example,
$$
\frac{x^2 - 9}{x^2 + 3x} = \frac{(x + 3)(x - 3)}{x\,(x + 3)} = \frac{x - 3}{x} ,
\qquad
\begin{cases}
x \neq 0 \\
x \neq -3
\end{cases}
$$
The common factor $x + 3$ is nonzero for all allowed values, so division by $x + 3$ is valid. With $x = 1$ the original fraction equals $\dfrac{1 - 9}{1 + 3} = \dfrac{-8}{4} = -2$ and the simplified fraction equals $\dfrac{1 - 3}{1} = -2$.
:::

:::attenzione
Determine the domain restrictions from the original fraction before simplifying. The fraction $\dfrac{x - 3}{x}$ is defined even for $x = -3$, but the fraction $\dfrac{x^2 - 9}{x^2 + 3x}$ with $x = -3$ becomes $\dfrac{0}{0}$, which is undefined. Therefore, the condition $x \neq -3$ still holds after simplification.
:::

:::attenzione
Only *factors* common to the numerator and denominator can be canceled, never individual terms in a sum. The fraction $\dfrac{x + 3}{x + 5}$ differs from $\dfrac{3}{5}$. For $x = 1$ the fraction equals $\dfrac{4}{6} = \dfrac{2}{3}$, which differs from $\dfrac{3}{5}$.
:::

## Operations with rational expressions

:::teorema{#somma-frazioni-algebriche titolo="Sum and difference of rational expressions"}
Two rational expressions are added or subtracted just like numerical fractions. The common denominator is the $\operatorname{mcm}$ of the denominators. Multiply each numerator by the quotient of the common denominator and its own denominator. For numbers, we have
$$
\frac{1}{2} + \frac{1}{3} = \frac{3}{6} + \frac{2}{6} = \frac{5}{6} .
$$
With variables, for $x \neq 1$ and $x \neq -1$, the common denominator of $\dfrac{1}{x - 1}$ and $\dfrac{2}{x + 1}$ is $(x - 1)(x + 1)$, so
$$
\begin{aligned}
\frac{1}{x - 1} + \frac{2}{x + 1} &= \frac{(x + 1) + 2\,(x - 1)}{(x - 1)(x + 1)} \\[6pt]
&= \frac{x + 1 + 2x - 2}{(x - 1)(x + 1)} \\[6pt]
&= \frac{3x - 1}{(x - 1)(x + 1)} .
\end{aligned}
$$
For $x = 2$ the original sum equals $1 + \dfrac{2}{3} = \dfrac{5}{3}$ and the result equals $\dfrac{6 - 1}{1 \cdot 3} = \dfrac{5}{3}$.
:::

:::teorema{#prodotto-quoziente-frazioni-algebriche titolo="Product and quotient of rational expressions"}
The product of two rational expressions has the product of their numerators as its numerator and the product of their denominators as its denominator. To divide, multiply the first fraction by the **reciprocal** of the second, the fraction with its numerator and denominator interchanged. Before multiplying, factor everything and cancel the common factors. For example, with $x \neq -2$ and $x \neq 1$,
$$
\begin{aligned}
\frac{x^2 - 1}{x + 2} \cdot \frac{3x + 6}{x - 1} &= \frac{(x + 1)(x - 1)}{x + 2} \cdot \frac{3\,(x + 2)}{x - 1} \\[6pt]
&= 3\,(x + 1) .
\end{aligned}
$$
In division, the numerator of the second fraction also becomes a denominator, so that numerator must be nonzero as well. In the quotient
$$
\frac{x}{x + 3} : \frac{x^2}{x^2 - 9}
$$
the denominator $x^2 - 9 = (x + 3)(x - 3)$ gives the conditions $x \neq -3$ and $x \neq 3$, and the numerator $x^2$ of the second fraction gives the condition $x \neq 0$. The domain restrictions are therefore
$$
\begin{cases}
x \neq -3 \\
x \neq 3 \\
x \neq 0
\end{cases}
$$
and the quotient equals
$$
\frac{x}{x + 3} \cdot \frac{(x + 3)(x - 3)}{x^2} = \frac{x - 3}{x} .
$$
For $x = 1$ the original quotient is $\dfrac{1}{4} : \left(-\dfrac{1}{8}\right) = \dfrac{1}{4} \cdot (-8) = -2$ and the result is $\dfrac{1 - 3}{1} = -2$.
:::
