---
titolo: Algebraic expressions and rational expressions
sommario: Operations with monomials and polynomials, special product formulas, polynomial division and synthetic division, factoring polynomials, and simplifying and adding rational expressions on TIEC quizzes.
---

## Monomials

:::definizione{#monomio titolo="Monomial"}
A **monomial** is a number multiplied by variables raised to nonnegative integer powers, as in $-5a^2b$ or $\dfrac{3}{4}x^3$. The number is the **coefficient**, and the product of the variables with their exponents is the **variable part**. The **degree** of a monomial is the sum of the exponents on its variables. For example, $-5a^2b$ has degree $2 + 1 = 3$, while its degree in $a$ alone is $2$. A nonzero number is a monomial of degree $0$.

The expressions $\dfrac{2}{x}$ and $\sqrt{x}$ are not monomials because the variable appears in a denominator or under a radical. Degree helps us order the terms of a polynomial and check calculations, as the following rules illustrate.
:::

:::definizione{#monomi-simili titolo="Like terms and their sum"}
Two monomials are **like terms** if they have the same variable part, as in $3x^2y$ and $-7x^2y$. To add like terms, keep their variable part and add their coefficients with their signs.
$$
3x^2y - 7x^2y + x^2y = (3 - 7 + 1)\,x^2y = -3x^2y .
$$
This rule follows by applying the distributive property in reverse to factor out the common variable part. Two unlike terms, such as $x^2$ and $x^3$, cannot be combined into one monomial, so their sum remains $x^2 + x^3$.
:::

:::teorema{#operazioni-monomi titolo="Products, quotients, and powers of monomials"}
For each of these operations, work separately with the coefficients and the variables. Use the exponent rules $a^m \cdot a^n = a^{m+n}$, $a^m : a^n = a^{m-n}$, and $(a^m)^n = a^{m \cdot n}$, reviewed in the chapter on powers, exponentials, and logarithms.

- To find a **product**, multiply the coefficients and add the exponents of each variable, as in $(3a^2b) \cdot (-2ab^3) = -6a^3b^4$.
- To find a **quotient**, divide the coefficients and subtract the exponents, with a nonzero divisor, as in $\dfrac{12x^5y^2}{4x^2y} = 3x^3y$. The result is a monomial only if each variable in the divisor appears in the dividend with an exponent at least as large.
- To find a **power**, raise the coefficient to that power and multiply each variable’s exponent by the outer exponent, as in $(-2a^2b)^3 = (-2)^3a^6b^3 = -8a^6b^3$.

The degree of a product is the sum of the degrees of its factors. For example, $3a^2b$ has degree $3$, $-2ab^3$ has degree $4$, and their product $-6a^3b^4$ has degree $7$.
:::

:::attenzione
When raising a monomial to a power, the exponent *also* applies to the coefficient, including its sign. For example, $(2x)^3 = 8x^3$, so $2x^3$ is incorrect. Indeed, setting $x = 1$ gives $2^3 = 8$ rather than $2$. Likewise, $(-3x^2)^2 = 9x^4$ because the square of a negative number is positive, whereas $-(3x^2)^2 = -9x^4$.
:::

## Polynomials

:::definizione{#polinomio titolo="Polynomials and degree"}
A **polynomial** is a sum of monomials with their signs. Each monomial is a **term** of the polynomial. Simplify a polynomial by combining like terms. The **degree** of a simplified polynomial is the greatest degree of its terms. The term without variables is the **constant term**. In a polynomial in one variable, such as
$$
P(x) = 2x^3 - x + 5 ,
$$
the degree is $3$, the **leading coefficient** (the coefficient of the highest-degree term) is $2$, and the constant term is $5$. The polynomial is **ordered** by descending powers of $x$ and has a **missing term** because there is no quadratic term.

The **value** of $P(x)$ at $x = a$ is denoted by $P(a)$ and found by substituting $a$ for $x$, giving $P(-1) = -2 + 1 + 5 = 4$. The values $P(0)$ and $P(1)$ give the constant term and the sum of the coefficients, respectively, and provide quick checks. The value $P(a)$ will appear again in the remainder theorem.
:::

:::teorema{#operazioni-polinomi titolo="Adding, subtracting, and multiplying polynomials"}
- To **add or subtract**, write out the terms and combine like terms. A minus sign before a polynomial changes the sign of *every* term, as in $(3x^2 - x + 2) - (x^2 - 4x + 7) = 3x^2 - x + 2 - x^2 + 4x - 7 = 2x^2 + 3x - 5$.
- To **multiply**, multiply each term of the first polynomial by each term of the second, then combine like terms. For example,
$$
\begin{aligned}
(2x - 3)(x^2 + x - 1) &= 2x^3 + 2x^2 - 2x - 3x^2 - 3x + 3 \\[6pt]
&= 2x^3 - x^2 - 5x + 3 .
\end{aligned}
$$

This multiplication rule follows from the distributive property. The number of partial products is the product of the numbers of terms, here $2 \cdot 3 = 6$, and the degree of the product is the sum of the degrees, here $1 + 2 = 3$.
:::

:::osservazione{#grado-somma titolo="Degree of a sum"}
The degree of a sum of polynomials is at most the greater of their degrees. It can be smaller if the highest-degree terms cancel. For example, $(x^2 + 3x) - (x^2 - 1) = 3x + 1$ has degree $1$, even though both polynomials have degree $2$. Thus in questions asking for the degree of an expression, expand and simplify before answering.
:::

## Special product formulas

::::teorema{#quadrato-binomio titolo="Square of a binomial"}
For any two numbers $a$ and $b$,
$$
(a + b)^2 = a^2 + 2ab + b^2 ,
\qquad
(a - b)^2 = a^2 - 2ab + b^2 .
$$
The square of a binomial is the square of the first term plus **twice the product** of the two terms plus the square of the second term. For example, $(3x - 2y)^2 = 9x^2 - 12xy + 4y^2$, where $-12xy = 2 \cdot 3x \cdot (-2y)$. The formula lets us expand without multiplying term by term. Read in reverse, it helps identify a perfect square when factoring.

::grafico{assi=0 uguale=1 poligoni="0,0 3,0 3,3 0,3;3,3 5,3 5,5 3,5" linee="0,0 5,0 5,5 0,5 0,0;3,0 3,5;0,3 5,3" etichette="1.5,1.5,a²;4,4,b²;4,1.5,ab;1.5,4,ab;1.5,-0.5,a;4,-0.5,b;-0.5,1.5,a;-0.5,4,b" xmin=-1.2 xmax=6 ymin=-1.2 ymax=5.8 titolo="The square with side length $a + b$ consists of a square of area $a^2$, a square of area $b^2$, and two rectangles of area $ab$ each"}

:::dimostrazione
Multiplying $(a + b)(a + b)$ term by term gives $a^2 + ab + ba + b^2 = a^2 + 2ab + b^2$. Substituting $-b$ for $b$ gives the second formula.
:::
::::

:::teorema{#somma-per-differenza titolo="Product of a sum and a difference"}
For any two numbers $a$ and $b$,
$$
(a + b)(a - b) = a^2 - b^2 .
$$
When we multiply term by term, the products $-ab$ and $+ba$ are opposites and cancel. For example, $(2x + 5)(2x - 5) = 4x^2 - 25$. The formula also helps with mental arithmetic, as in $41 \cdot 39 = (40 + 1)(40 - 1) = 1600 - 1 = 1599$.
:::

:::teorema{#quadrato-trinomio titolo="Square of a trinomial"}
For any three numbers $a$, $b$, and $c$,
$$
(a + b + c)^2 = a^2 + b^2 + c^2 + 2ab + 2ac + 2bc .
$$
The square of a trinomial is the sum of the squares of the three terms plus twice the product of each pair, with each product carrying its own sign. For example,
$$
(x - y + 2)^2 = x^2 + y^2 + 4 - 2xy + 4x - 4y .
$$
The sign of each cross term is the product of the signs of the two terms in the pair, as in $2 \cdot x \cdot (-y) = -2xy$ and $2 \cdot (-y) \cdot 2 = -4y$.
:::

:::teorema{#cubo-binomio titolo="Cube of a binomial"}
For any two numbers $a$ and $b$,
$$
(a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3 ,
\qquad
(a - b)^3 = a^3 - 3a^2b + 3ab^2 - b^3 .
$$
The formula follows by multiplying $(a + b)^2 = a^2 + 2ab + b^2$ by $a + b$ and combining like terms. The coefficients $1$, $3$, $3$, and $1$ are the same in both formulas. In the cube of a difference, the signs alternate. For example, $(x - 2)^3 = x^3 - 6x^2 + 12x - 8$.
:::

:::esempio{titolo="Successive increases"}
If a price increases by $10\%$ in each of two consecutive years, it is multiplied by $(1 + 0.1)^2$. Using the square of a binomial gives
$$
(1 + 0.1)^2 = 1 + 2 \cdot 0.1 + 0.01 = 1.21 ,
$$
so the overall increase is $21\%$. The term $0.01$ is interest on interest, which explains why two successive increases of $10\%$ give more than $20\%$. Successive percentage changes are covered in the chapter on sets, numbers, and percentages.
:::

:::attenzione
The square of a sum is *not* the sum of the squares. For $a = 3$ and $b = 2$ we have $(3 + 2)^2 = 25$, whereas $3^2 + 2^2 = 13$. The difference is twice the product, $2 \cdot 3 \cdot 2 = 12$. Likewise, $(a + b)^3$ differs from $a^3 + b^3$ because $(1 + 1)^3 = 8$ and $1^3 + 1^3 = 2$.
:::

## Polynomial division and synthetic division

:::teorema{#divisione-polinomi titolo="Polynomial division"}
Given two polynomials $A(x)$ and $B(x)$, with $B(x)$ nonzero, there are unique polynomials $Q(x)$, the **quotient**, and $R(x)$, the **remainder**, such that
$$
A(x) = B(x) \cdot Q(x) + R(x)
$$
and $R(x)$ is zero or has degree less than the degree of $B(x)$. We say that $A(x)$ is **divisible** by $B(x)$ if the remainder is the zero polynomial. Long division works as it does with numbers, with the polynomials arranged in descending powers.

- Divide the leading term of the dividend by the leading term of the divisor to get a term of the quotient.
- Multiply this term by the divisor and subtract the result from the dividend.
- Repeat with the resulting polynomial until it is zero or its degree is less than the degree of the divisor.

For example, when dividing $x^3 - 2x^2 + 4x - 5$ by $x^2 + 1$, the first term of the quotient is $\dfrac{x^3}{x^2} = x$ and the second is $\dfrac{-2x^2}{x^2} = -2$. Since $(x^2 + 1)(x - 2) = x^3 - 2x^2 + x - 2$, we obtain
$$
x^3 - 2x^2 + 4x - 5 = (x^2 + 1)(x - 2) + 3x - 3 ,
$$
so the quotient is $x - 2$ and the remainder is $3x - 3$, of degree less than $2$.
:::

:::teorema{#regola-ruffini titolo="Synthetic division"}
When the divisor is a binomial $x - a$, **synthetic division** (Ruffini’s rule) gives the quotient and remainder using only coefficients. Write the coefficients of the dividend in a row, inserting $0$ for missing terms, and put $a$ to the left. Bring down the first coefficient. Then multiply each new number in the bottom row by $a$, write the product under the next coefficient, and add. To divide $2x^3 - 3x^2 + 5$ by $x - 2$, set up the calculation as follows.
$$
\begin{array}{c|ccc|c}
 & 2 & -3 & 0 & 5 \\
2 & & 4 & 2 & 4 \\ \hline
 & 2 & 1 & 2 & 9
\end{array}
$$
The last number is the remainder, $R = 9$. The other numbers are the coefficients of the quotient, whose degree is one less than the degree of the dividend, giving $Q(x) = 2x^2 + x + 2$. If the divisor is $x + a$, write $-a$ to the left because $x + a = x - (-a)$.
:::

:::attenzione
The $0$ for each missing term is essential. When dividing $2x^3 - 3x^2 + 5$ by $x - 2$, writing only the coefficients $2$, $-3$, and $5$ would instead divide $2x^2 - 3x + 5$, giving remainder $7$ rather than $9$.
:::

::::teorema{#teorema-resto titolo="Remainder theorem"}
The remainder when a polynomial $P(x)$ is divided by $x - a$ is $P(a)$. The theorem lets us find the remainder without performing the division. For example, the remainder when $2x^3 - 3x^2 + 5$ is divided by $x - 2$ is
$$
P(2) = 16 - 12 + 5 = 9 ,
$$
in agreement with synthetic division. For the divisor $x + 3$, calculate $P(-3)$ instead.

:::dimostrazione
The divisor $x - a$ has degree $1$, so any nonzero remainder has degree $0$ and the remainder is a constant $R$. Thus $P(x) = (x - a)\,Q(x) + R$ for every $x$. Substituting $x = a$ makes the first term zero and leaves $P(a) = R$.
:::
::::

:::teorema{#teorema-ruffini titolo="Divisibility by x − a"}
A polynomial $P(x)$ is divisible by $x - a$ if and only if $P(a) = 0$. This follows from the remainder theorem because the remainder upon division by $x - a$ is exactly $P(a)$. A number $a$ for which $P(a) = 0$ is a **zero** (or **root**) of the polynomial. For example, $P(x) = x^3 - 2x^2 - 5x + 6$ is zero at $1$ because $1 - 2 - 5 + 6 = 0$, so it is divisible by $x - 1$. Each zero gives a point where the graph meets the $x$-axis.

::grafico{f="x^3-2*x^2-5*x+6" punti="-2,0,pieno;1,0,pieno;3,0,pieno" xmin=-3.5 xmax=4.5 ymin=-10 ymax=10 nomi="x,y" legenda="y = x^3 - 2x^2 - 5x + 6" titolo="The graph of $P(x) = x^3 - 2x^2 - 5x + 6$ meets the $x$-axis at $-2$, $1$, and $3$, so $P(x)$ is divisible by $x + 2$, $x - 1$, and $x - 3$"}

:::

:::osservazione{#zeri-razionali titolo="Finding zeros"}
If a polynomial has integer coefficients, look for its integer zeros among the positive and negative divisors of the constant term. For $x^3 - 2x^2 - 5x + 6$ the candidates are $\pm 1$, $\pm 2$, $\pm 3$, and $\pm 6$. If the leading coefficient differs from $1$, possible rational zeros are fractions $\dfrac{p}{q}$, where $p$ divides the constant term and $q$ divides the leading coefficient. For example, $2x^2 + x - 1$ is zero at $\dfrac{1}{2}$ because $\dfrac{2}{4} + \dfrac{1}{2} - 1 = 0$.
:::

## Factoring

:::definizione{#scomposizione titolo="Factoring"}
To **factor** a polynomial is to write it as a product of lower-degree polynomials. A polynomial that cannot be factored this way is **irreducible**. A factorization is complete when all factors are irreducible. For example, $x^3 - 4x = x(x - 2)(x + 2)$. Factoring helps us simplify rational expressions and solve equations and inequalities, as illustrated in the chapter on equations, inequalities, and systems.
:::

:::teorema{#raccoglimento titolo="Factoring out a common factor and factoring by grouping"}
- **Factoring out a common factor** uses the distributive property when every term shares a factor, as in $ab + ac = a(b + c)$. The greatest common factor is the greatest common divisor of the coefficients times the common variables, each raised to its smallest exponent, as in $6x^3y - 9x^2y^2 = 3x^2y\,(2x - 3y)$.
- **Factoring by grouping** starts by arranging terms so that the terms in each group share a factor. Then factor out the polynomial common to the groups.
$$
\begin{aligned}
ax + ay + 2x + 2y &= a(x + y) + 2(x + y) \\[6pt]
&= (x + y)(a + 2) .
\end{aligned}
$$

Check the result by multiplying the factors and verifying that they give the original polynomial.
:::

:::teorema{#scomposizione-prodotti-notevoli titolo="Factoring with special product formulas"}
Reading the special product formulas from right to left gives the following factorizations.

- The **difference of squares** factors as $a^2 - b^2 = (a - b)(a + b)$, for example $9x^2 - 25 = (3x - 5)(3x + 5)$.
- A **perfect-square trinomial** factors as $a^2 \pm 2ab + b^2 = (a \pm b)^2$, for example $4x^2 - 12x + 9 = (2x - 3)^2$.
- A **perfect cube** factors as $a^3 \pm 3a^2b + 3ab^2 \pm b^3 = (a \pm b)^3$.

A trinomial is the square of a binomial only if two terms are squares and the third is twice the product of their signed square roots. In $4x^2 - 12x + 9$ we have $4x^2 = (2x)^2$, $9 = 3^2$, and $12x = 2 \cdot 2x \cdot 3$. A difference of squares can occur more than once, as in $x^4 - 16 = (x^2 - 4)(x^2 + 4) = (x - 2)(x + 2)(x^2 + 4)$.
:::

:::attenzione
The sum of two squares $a^2 + b^2$ does not factor into real linear factors. For example, $x^2 + 4$ is always greater than or equal to $4$, so it has no real zero and no linear factor. The proposed factorization $(x + 2)^2$ is incorrect because it equals $x^2 + 4x + 4$.
:::

:::teorema{#somma-differenza-cubi titolo="Sum and difference of cubes"}
For any two numbers $a$ and $b$,
$$
a^3 - b^3 = (a - b)(a^2 + ab + b^2) ,
\qquad
a^3 + b^3 = (a + b)(a^2 - ab + b^2) .
$$
The formulas can be checked by multiplying the factors on the right. The second factor **resembles a perfect square** but its middle term is the single product $ab$ rather than twice that product. It is irreducible here. For example, $x^3 - 8 = (x - 2)(x^2 + 2x + 4)$ and $27a^3 + 1 = (3a + 1)(9a^2 - 3a + 1)$.
:::

:::teorema{#trinomio-somma-prodotto titolo="Quadratic trinomial with leading coefficient 1"}
If there are two numbers $m$ and $n$ with sum $s$ and product $p$, then
$$
x^2 + sx + p = (x + m)(x + n) .
$$
The rule holds because $(x + m)(x + n) = x^2 + (m + n)x + mn$. To factor $x^2 - 7x + 10$, find two numbers with sum $-7$ and product $10$. They are $-2$ and $-5$, so $x^2 - 7x + 10 = (x - 2)(x - 5)$. Start with the product. If it is positive, both numbers have the same sign as their sum. If it is negative, their signs are opposite.
:::

:::teorema{#trinomio-secondo-grado titolo="Quadratic trinomial"}
Let $ax^2 + bx + c$ be a quadratic trinomial with $a \neq 0$, and let $\Delta = b^2 - 4ac$ be its discriminant.

- If $\Delta > 0$, the equation $ax^2 + bx + c = 0$ has roots $x_1$ and $x_2$, and $ax^2 + bx + c = a(x - x_1)(x - x_2)$.
- If $\Delta = 0$, the two roots coincide and $ax^2 + bx + c = a(x - x_1)^2$.
- If $\Delta < 0$, the quadratic is irreducible over the real numbers.

The roots can be found using the quadratic formula, reviewed in the chapter on equations, inequalities, and systems. For $3x^2 - 5x - 2$ we have $\Delta = 25 + 24 = 49$, so $x = \dfrac{5 \pm 7}{6}$, or $x_1 = 2$ and $x_2 = -\dfrac{1}{3}$. Therefore
$$
3x^2 - 5x - 2 = 3(x - 2)\left(x + \frac{1}{3}\right) = (x - 2)(3x + 1) ,
$$
where the coefficient $3$ has been multiplied into the second factor to clear the fraction.

::grafico{f="3*x^2-5*x-2" punti="2,0,pieno;-0.3333,0,pieno" xmin=-2 xmax=3.5 ymin=-5 ymax=8 nomi="x,y" legenda="y = 3x^2 - 5x - 2" titolo="The parabola $y = 3x^2 - 5x - 2$ crosses the $x$-axis at $-\dfrac{1}{3}$ and $2$, the zeros of the factors $3x + 1$ and $x - 2$"}

:::

:::teorema{#scomposizione-ruffini titolo="Factoring with synthetic division"}
If $a$ is a zero of $P(x)$, then $P(x) = (x - a)\,Q(x)$, where $Q(x)$ is the quotient obtained by dividing by $x - a$ using synthetic division. Use this method when the others do not apply. For $P(x) = x^3 - 2x^2 - 5x + 6$ the zero $1$ gives
$$
\begin{array}{c|ccc|c}
 & 1 & -2 & -5 & 6 \\
1 & & 1 & -1 & -6 \\ \hline
 & 1 & -1 & -6 & 0
\end{array}
$$
so $P(x) = (x - 1)(x^2 - x - 6)$. To factor the quadratic $x^2 - x - 6$, we need two numbers with sum $-1$ and product $-6$. They are $-3$ and $2$, so the complete factorization is $P(x) = (x - 1)(x - 3)(x + 2)$.
:::

:::osservazione{#ordine-scomposizione titolo="Choosing a factoring method"}
When factoring a polynomial, first look for a factor common to all its terms. Then count the terms.

- With two terms, look for a difference of squares or a sum or difference of cubes.
- With three terms, look for a perfect square or a quadratic trinomial.
- With four terms, try grouping or look for a perfect cube.
- In other cases, try synthetic division.

Check every factor again because it may factor further, as in $2x^3 - 18x = 2x(x^2 - 9) = 2x(x - 3)(x + 3)$.
:::

## GCD and LCM of monomials and polynomials

:::definizione{#mcd-mcm titolo="Greatest common divisor and least common multiple"}
Factor all the given monomials or polynomials.

- The **greatest common divisor** (GCD) is the product of the factors *common to all* the expressions, each raised to its smallest exponent.
- The **least common multiple** (LCM) is the product of all factors that occur in any expression, each included *only once* and raised to its greatest exponent.

For the numerical coefficients, take their GCD or LCM, respectively. The monomials $12a^3b$ and $18a^2b^2$ have GCD $= 6a^2b$ and LCM $= 36a^3b^2$. For the polynomials
$$
x^2 - x = x(x - 1),
\qquad
x^2 - 1 = (x - 1)(x + 1),
\qquad
2x - 2 = 2(x - 1)
$$
the GCD is $x - 1$ and the LCM is $2x(x - 1)(x + 1)$. The LCM of the denominators gives the least common denominator when adding rational expressions.
:::

## Rational expressions

:::definizione{#frazione-algebrica titolo="Rational expressions and domain restrictions"}
A **rational expression** is a quotient $\dfrac{A(x)}{B(x)}$ of two polynomials, where $B(x)$ is not the zero polynomial. The quotient is defined only for values of $x$ that do not make its denominator zero. These requirements are its **domain restrictions**. To find them, factor the denominator and require each factor to be nonzero. For example, the denominator of $\dfrac{x + 1}{x^2 - 3x}$ is $x(x - 3)$, so the expression is defined for
$$
\begin{cases}
x \neq 0 \\
x \neq 3
\end{cases}
$$
The numerator does not affect the domain restrictions. At $x = -1$ the expression is defined and equals $0$.
:::

:::teorema{#semplificazione-frazioni titolo="Simplifying"}
Dividing the numerator and denominator of a rational expression by the same nonzero factor preserves its value wherever it is defined. To simplify, factor the numerator and denominator and cancel common factors. Write the domain restrictions *before* simplifying. They also apply afterward.
$$
\frac{x^2 - 1}{x - 1} = \frac{(x - 1)(x + 1)}{x - 1} = x + 1 ,
\qquad
x \neq 1 .
$$
The two expressions agree for every $x \neq 1$. At $x = 1$ the original fraction is undefined, while $x + 1$ equals $2$.

::grafico{f="x+1" punti="1,2,vuoto" xmin=-3 xmax=3.5 ymin=-2 ymax=4.5 nomi="x,y" legenda="y = \dfrac{x^2 - 1}{x - 1}" titolo="The graph of $y = \dfrac{x^2 - 1}{x - 1}$ is the line $y = x + 1$ with the point $(1;2)$ removed because the fraction is undefined there"}

:::

:::attenzione
Only *factors* can be canceled, never individual terms of a sum. For example, $\dfrac{x + 3}{x}$ differs from $3$ because at $x = 1$ the fraction equals $4$. Likewise, $\dfrac{x^2 + 4}{x + 2}$ cannot be simplified because $x^2 + 4$ is irreducible and does not have the factor $x + 2$.
:::

:::teorema{#operazioni-frazioni titolo="Operations with rational expressions"}
Add, multiply, and divide rational expressions using the same rules as for numerical fractions, after identifying the domain restrictions.

- To **add or subtract**, factor the denominators and use their LCM as the common denominator. Multiply each numerator by the LCM divided by its original denominator. For $x \neq \pm 1$, this gives
$$
\frac{1}{x - 1} - \frac{2}{x^2 - 1} = \frac{(x + 1) - 2}{(x - 1)(x + 1)} = \frac{x - 1}{(x - 1)(x + 1)} = \frac{1}{x + 1} .
$$
- To **multiply**, multiply the numerators together and the denominators together, first canceling common factors even across fractions. For example, $\dfrac{x^2 - 4}{3x} \cdot \dfrac{6}{x + 2} = \dfrac{2(x - 2)}{x}$ for $x \neq 0$ and $x \neq -2$.
- To **divide**, multiply the first fraction by the reciprocal of the second. Also require the numerator of the second fraction to be nonzero because it becomes a denominator.

Simplify the result of an addition, as in the example, where the numerator $x - 1$ cancels with the same factor in the denominator.
:::

## Shortcuts for multiple-choice questions

:::osservazione{#sostituzione-valori titolo="Substituting a value"}
An identity between algebraic expressions, such as a special product formula or a factorization, holds for *every* permissible value of the variables. Therefore, substitute a convenient number into the given expression and each choice, and eliminate choices that give a different value. To find the choice equivalent to $x^3 - 8$, proceed as follows.

- With $x = 3$ the given expression equals $27 - 8 = 19$.
- The choice $(x - 2)(x^2 + 2x + 4)$ equals $1 \cdot 19 = 19$, whereas $(x - 2)^3$ equals $1$ and $(x - 2)(x^2 + 4x + 4)$ equals $25$.

Values such as $2$ or $3$ work well because $0$ and $1$ give the same value for many different expressions. For fractions the value must satisfy the domain restrictions. If two choices give the same result at one value, try a second value to distinguish them.
:::

:::osservazione{#controlli-rapidi titolo="Checking degrees, coefficients, and signs"}
Many incorrect choices can be eliminated without fully expanding the expression.

- Check the **leading term and constant term**. In a product, the leading coefficient is the product of the leading coefficients of the factors, and the constant term is the product of their constant terms. The expansion of $(2x - 3)(x^2 + x - 1)$ starts with $2x^3$ and ends with $+3$.
- Check the **sum of the coefficients**. The value $P(1)$ equals this sum and must agree for the given expression and the correct choice.
- Check the **remainder**. The remainder upon division by $x - a$ is $P(a)$, so there is no need for synthetic division. A polynomial is divisible by $x - a$ if $P(a) = 0$.
- Check the **domain restrictions**. When the choices differ only in their restrictions, factor the denominator of the original expression before canceling any factors.

Choices differing only in a sign usually involve a cross term or a minus sign in front of a polynomial. Checking the relevant coefficient is enough.
:::
