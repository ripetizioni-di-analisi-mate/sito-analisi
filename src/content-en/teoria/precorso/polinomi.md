---
titolo: Factorization, Ruffini's rule and polynomial division
sommario: What a polynomial is, how special products are expanded and recognized, how polynomial division is carried out and how a polynomial is factored with Ruffini's rule.
---

## Polynomials and degree

:::definizione{#polinomi titolo="Polynomial and degree"}
A polynomial in the variable $x$ is a sum of monomials,
$$
P(x) = a_n x^n + a_{n-1} x^{n-1} + \dots + a_1 x + a_0 ,
$$
with $a_n \neq 0$. The numbers $a_n, \dots, a_0$ are the coefficients, $a_n$ is the leading coefficient, $a_0$ is the constant term and $n$ is the degree, denoted by $\deg P$. A number $c$ is a root of $P$ if $P(c) = 0$. The polynomial $P(x) = 2x^3 - 5x + 1$ has degree $3$, leading coefficient $2$ and constant term $1$; the coefficient of $x^2$ is $0$.
:::

:::teorema{#principio-di-identita titolo="Identity principle for polynomials"}
Two polynomials are equal if and only if they have the same degree and the same coefficients, term by term. The principle makes it possible to determine unknown coefficients by equating the coefficients of terms of the same degree, and it is used to check divisions and factorizations. From the equality $x^2 + bx + c = (x - 1)(x - 3) = x^2 - 4x + 3$ it follows that $b = -4$ and $c = 3$.
:::

:::osservazione
In the product of two polynomials the degrees add up, so $\deg (PQ) = \deg P + \deg Q$. For this reason a polynomial of degree $4$ factored into two factors of positive degree has factors of degrees $1$ and $3$ or $2$ and $2$.
:::

## Special products

The following identities hold for all values of $A$ and $B$ and are used in both directions, to expand and to factor.

:::teorema{#prodotti-notevoli titolo="Square and cube of a binomial"}
$$
\begin{gathered}
(A + B)^2 = A^2 + 2AB + B^2, \qquad (A - B)^2 = A^2 - 2AB + B^2, \\[6pt]
(A + B)^3 = A^3 + 3A^2 B + 3A B^2 + B^3, \\[4pt]
(A - B)^3 = A^3 - 3A^2 B + 3A B^2 - B^3 .
\end{gathered}
$$
Read from right to left, they factor: a trinomial is the square of a binomial when two terms are squares and the third is twice the product of the two bases, and the sign of this double product determines the sign in the binomial.
:::

:::esempio
$(2x + 3)^2 = 4x^2 + 12x + 9$. In the opposite direction, $x^2 - 10x + 25 = (x - 5)^2$, since $x^2$ and $25$ are the squares of $x$ and $5$ and $-10x$ is the double product $-2 \cdot x \cdot 5$. For the cube, $(x + 2)^3 = x^3 + 6x^2 + 12x + 8$.
:::

:::teorema{#differenza-di-quadrati titolo="Difference of squares"}
$$
A^2 - B^2 = (A - B)(A + B)
$$
It is the quickest factorization to recognize: two squares separated by a minus sign. It can also be applied several times in a row, when one of the factors obtained is itself a difference of squares.
:::

:::esempio
$9x^2 - 16 = (3x - 4)(3x + 4)$. With two successive applications, $x^4 - 1 = (x^2 - 1)(x^2 + 1) = (x - 1)(x + 1)(x^2 + 1)$.
:::

:::attenzione
The sum of two squares $A^2 + B^2$ cannot be factored into first-degree factors with real coefficients. For example $x^2 + 4 \geq 4 > 0$ for every $x$, so $x^2 + 4$ has no real roots and no factor of the form $x - c$ divides it.
:::

:::teorema{#somma-e-differenza-di-cubi titolo="Sum and difference of cubes"}
$$
A^3 + B^3 = (A + B)(A^2 - AB + B^2), \qquad
A^3 - B^3 = (A - B)(A^2 + AB + B^2)
$$
The second factor, called a false square, has a negative discriminant and no real roots, so the factorization does not continue; the discriminant criterion is found in the chapter on polynomial equations and inequalities.
:::

:::esempio
$x^3 + 8 = (x + 2)(x^2 - 2x + 4)$, with $A = x$ and $B = 2$. Similarly $27x^3 - 1 = (3x - 1)(9x^2 + 3x + 1)$, with $A = 3x$ and $B = 1$.
:::

## Polynomial division

:::teorema{#divisione-tra-polinomi titolo="Division with remainder"}
Given a dividend $A(x)$ and a nonzero divisor $B(x)$, there exist a unique quotient $Q(x)$ and a unique remainder $R(x)$ such that
$$
\begin{cases}
A(x) = B(x)\, Q(x) + R(x) \\[4pt]
R(x) = 0 \ \text{ or } \ \deg R < \deg B
\end{cases}
$$
The structure is the same as that of division with remainder between integers. When $R(x) = 0$ the division is exact and $B(x)$ divides $A(x)$, that is, $B$ is a factor of $A$; for this reason division is a factorization tool.
:::

:::esempio{titolo="The division algorithm, step by step"}
Division of $A(x) = 2x^3 - 3x^2 + 4x - 5$ by $B(x) = x^2 - x + 1$. The first term of the quotient is the ratio of the highest-degree terms, $\dfrac{2x^3}{x^2} = 2x$; the divisor is multiplied by $2x$ and the product is subtracted from the dividend:
$$
2x^3 - 3x^2 + 4x - 5 - 2x\,(x^2 - x + 1) = -x^2 + 2x - 5 .
$$
The partial remainder $-x^2 + 2x - 5$ has degree $2$, equal to the degree of the divisor, so the algorithm continues on the partial remainder. The next term of the quotient is $\dfrac{-x^2}{x^2} = -1$:
$$
-x^2 + 2x - 5 - (-1)(x^2 - x + 1) = x - 4 .
$$
The new partial remainder $x - 4$ has degree $1$, less than the degree of the divisor, therefore the algorithm stops. The quotient and the remainder are $Q(x) = 2x - 1$ and $R(x) = x - 4$, that is,
$$
2x^3 - 3x^2 + 4x - 5 = (x^2 - x + 1)(2x - 1) + x - 4 .
$$
:::

:::osservazione
The dividend is written with the degrees in decreasing order, and missing degrees are counted with coefficient $0$. The check uses the identity principle: expanding $B(x)\,Q(x) + R(x)$ must give back $A(x)$, coefficient by coefficient.
:::

## Remainder theorem and Ruffini's theorem

::::teorema{#teorema-del-resto titolo="Remainder theorem"}
The remainder of the division of $P(x)$ by $x - c$ is $P(c)$. The remainder is therefore obtained with a single evaluation of the polynomial, without carrying out the division. The remainder of $x^3 - 2x + 1$ divided by $x - 2$ is $P(2) = 8 - 4 + 1 = 5$.

:::dimostrazione
By the theorem on division with remainder there exist $Q(x)$ and $R(x)$ such that $P(x) = (x - c)\,Q(x) + R(x)$, with $R(x) = 0$ or $\deg R < \deg(x - c) = 1$. In both cases $R(x)$ is a constant $R$. Evaluating the equality at $x = c$ gives
$$
P(c) = (c - c)\,Q(c) + R = 0 + R = R ,
$$
therefore the remainder equals $P(c)$.
:::
::::

:::teorema{#teorema-di-ruffini titolo="Ruffini's theorem"}
The binomial $x - c$ divides $P(x)$ if and only if $P(c) = 0$, that is, if and only if $c$ is a root of $P$. The statement follows from the remainder theorem, since the division is exact if and only if the remainder $P(c)$ is zero. The theorem connects roots to factorization: every root found produces a first-degree factor. For $P(x) = x^2 - 5x + 6$ we have $P(2) = 4 - 10 + 6 = 0$, so $x - 2$ divides $P$; indeed $P(x) = (x - 2)(x - 3)$.
:::

## Ruffini's rule

:::definizione{#ruffini titolo="Ruffini's rule"}
Ruffini's rule is the scheme that carries out the division of $P(x)$ by $x - c$ using only the coefficients.

1. In the first row the coefficients of $P$ are written in order of decreasing degree, with $0$ in place of missing degrees; the number $c$ is written on the left.
2. The first coefficient is brought down unchanged into the row of results.
3. The last number written in the row of results is multiplied by $c$, the product is written in the second row under the next coefficient and added in the column; the sum goes down into the row of results. The step is repeated up to the last column.
4. The last number in the row of results is the remainder, that is, $P(c)$; the numbers preceding it are the coefficients of the quotient, which has degree $\deg P - 1$.
:::

:::esempio{titolo="The scheme step by step"}
Division of $P(x) = x^3 - 2x^2 - 5x + 6$ by $x - 1$, so $c = 1$. The first coefficient $1$ is brought down; then $1 \cdot 1 = 1$ and $-2 + 1 = -1$; then $-1 \cdot 1 = -1$ and $-5 + (-1) = -6$; finally $-6 \cdot 1 = -6$ and $6 + (-6) = 0$.
$$
\begin{array}{c|ccc|c}
 & 1 & -2 & -5 & 6 \\
1 &  & 1 & -1 & -6 \\ \hline
 & 1 & -1 & -6 & 0
\end{array}
$$
The quotient is $x^2 - x - 6$ and the remainder is $0$, so $x - 1$ divides $P$ and
$$
x^3 - 2x^2 - 5x + 6 = (x - 1)(x^2 - x - 6) = (x - 1)(x - 3)(x + 2) ,
$$
where the last equality is checked by expanding the product $(x - 3)(x + 2) = x^2 - x - 6$.
:::

## Rational roots

:::teorema{#radici-razionali titolo="Finding rational roots"}
Let $P(x) = a_n x^n + \dots + a_0$ have integer coefficients, with $a_0 \neq 0$. If the fraction $\dfrac{p}{q}$, in lowest terms, is a root of $P$, then $p$ divides the constant term $a_0$ and $q$ divides the leading coefficient $a_n$. The theorem provides a finite list of candidates; each candidate $c$ is tested by computing $P(c)$, and by Ruffini's theorem every candidate with $P(c) = 0$ produces the factor $x - c$. When the leading coefficient is $1$, any rational roots are integers that divide the constant term.
:::

:::esempio
$P(x) = 2x^3 + x^2 - 5x + 2$. The divisors of the constant term $2$ are $\pm 1, \pm 2$; the positive divisors of the leading coefficient $2$ are $1, 2$. The candidates are therefore $\pm 1$, $\pm 2$, $\pm\dfrac{1}{2}$. Since $P(1) = 2 + 1 - 5 + 2 = 0$, the number $1$ is a root and $x - 1$ divides $P$. Not every candidate is a root: $P(-1) = -2 + 1 + 5 + 2 = 6 \neq 0$.
:::

## Factorization strategy

:::definizione{#raccoglimenti titolo="Factoring out a common factor and factoring by grouping"}
Factoring out a common factor extracts a factor shared by all the terms:
$$
6x^3 - 4x^2 + 2x = 2x\,(3x^2 - 2x + 1) .
$$
Factoring by grouping groups the terms and factors out a factor from each group; the method is complete when the groups leave the same common factor, which is in turn factored out:
$$
x^3 + 2x^2 + 3x + 6 = x^2 (x + 2) + 3\,(x + 2) = (x + 2)(x^2 + 3) .
$$
:::

:::teorema{#trinomio-speciale titolo="Special trinomial"}
$$
x^2 + (a + b)\,x + ab = (x + a)(x + b)
$$
The trinomial $x^2 + sx + p$ is factored with two numbers $a$ and $b$ that satisfy
$$
\begin{cases}
a + b = s \\[2pt]
a \cdot b = p
\end{cases}
$$
For example $x^2 + 5x + 6 = (x + 2)(x + 3)$, since $2 + 3 = 5$ and $2 \cdot 3 = 6$; similarly $x^2 - x - 12 = (x + 3)(x - 4)$, since $3 + (-4) = -1$ and $3 \cdot (-4) = -12$.
:::

:::definizione{#strategia-di-fattorizzazione titolo="Factorization strategy"}
The factorization of a polynomial proceeds in the following order, and after each step it starts again from the first step on the factors obtained.

1. Factoring out the common factor.
2. Recognizing special products: square and cube of a binomial, difference of squares, sum and difference of cubes.
3. For trinomials of the form $x^2 + sx + p$, the special trinomial.
4. With four or more terms, factoring by grouping.
5. Finding rational roots and Ruffini's rule: every root $c$ found produces the factor $x - c$ and lowers the degree of the quotient by one.

The factorization ends when every factor has degree $1$ or is a second-degree factor with no real roots; how to recognize the latter with the discriminant is found in the chapter on polynomial equations and inequalities.
:::

:::esempio{titolo="A complete factorization"}
$$
2x^4 + 2x^3 - 12x^2 = 2x^2\,(x^2 + x - 6) = 2x^2\,(x + 3)(x - 2)
$$
The first step is factoring out the common factor $2x^2$. The factor $x^2 + x - 6$ is a special trinomial, since $3 + (-2) = 1$ and $3 \cdot (-2) = -6$, so it factors as $(x + 3)(x - 2)$. All the factors have degree at most $1$, therefore the factorization is complete.
:::
