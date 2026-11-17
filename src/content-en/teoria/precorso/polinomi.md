---
titolo: Factorization, Ruffini's rule and polynomial division
sommario: What a polynomial is, how to expand and recognize special products, how to divide polynomials and how to factor a polynomial with Ruffini's rule.
---

## Polynomials and degree

:::definizione{#polinomi titolo="Polynomial and degree"}
A **polynomial** in the variable $x$ is a sum of monomials,
$$
P(x) = a_n x^n + a_{n-1} x^{n-1} + \dots + a_1 x + a_0 ,
$$
with $a_n \neq 0$. The numbers $a_n, \dots, a_0$ are the coefficients, $a_n$ is the **leading coefficient**, $a_0$ is the constant term and $n$ is the **degree**, denoted by $\deg P$. A number $c$ is a **root** of $P$ if $P(c) = 0$. The polynomial $P(x) = 2x^3 - 5x + 1$ has degree $3$, leading coefficient $2$ and constant term $1$; the coefficient of $x^2$ is $0$.
:::

:::teorema{#principio-di-identita titolo="Identity principle for polynomials"}
Two polynomials take the same value for every real $x$ *if and only if* they have the **same degree** and the **same coefficients**, term by term. The principle makes it possible to determine unknown coefficients by equating the coefficients of terms of the same degree, and it is used to check divisions and factorizations. From the equality $x^2 + bx + c = (x - 1)(x - 3) = x^2 - 4x + 3$ it follows that $b = -4$ and $c = 3$.
:::

:::esempio{titolo="Undetermined coefficients"}
We look for $a$ and $b$ such that $x^3 - 2x + 1 = (x - 1)(x^2 + ax + b)$ for every $x$. The expansion of the right-hand side is
$$
(x - 1)(x^2 + ax + b) = x^3 + (a - 1)\,x^2 + (b - a)\,x - b .
$$
By the **identity principle** the coefficients of the terms of the same degree coincide, therefore
$$
\begin{cases}
a - 1 = 0 \\[2pt]
b - a = -2 \\[2pt]
-b = 1
\end{cases}
$$
The first and the third equation give $a = 1$ and $b = -1$, and the second is also satisfied, since $-1 - 1 = -2$. Hence $x^3 - 2x + 1 = (x - 1)(x^2 + x - 1)$. The system has three equations and two unknowns, so it may be inconsistent; this happens when $x - 1$ is not a factor of the polynomial.
:::

:::osservazione
In the product of two polynomials the degrees **add up**, so $\deg (PQ) = \deg P + \deg Q$. For this reason a polynomial of degree $4$ factored into two factors of positive degree has factors of degrees $1$ and $3$ or $2$ and $2$.
:::

:::attenzione
The degree of a sum is at most the largest of the degrees of the terms, $\deg (P + Q) \leq \max(\deg P, \deg Q)$, and it is smaller when the terms of highest degree cancel. For example $(x^2 + 3x) + (-x^2 + 1) = 3x + 1$ has degree $1$, while both terms of the sum have degree $2$.
:::

## Standard algebraic identities

The following identities hold for all values of $A$ and $B$ and are used in *both* directions, to expand and to factor.

:::teorema{#prodotti-notevoli titolo="Square and cube of a binomial"}
$$
\begin{gathered}
(A + B)^2 = A^2 + 2AB + B^2, \qquad (A - B)^2 = A^2 - 2AB + B^2, \\[6pt]
(A + B)^3 = A^3 + 3A^2 B + 3A B^2 + B^3, \\[4pt]
(A - B)^3 = A^3 - 3A^2 B + 3A B^2 - B^3 .
\end{gathered}
$$
Read from right to left, they **factor**: a trinomial is the **square of a binomial** when two terms are squares and the third is **twice the product** of the two bases, and the sign of this double product determines the sign in the binomial.
:::

:::esempio
$(2x + 3)^2 = 4x^2 + 12x + 9$. In the opposite direction, $x^2 - 10x + 25 = (x - 5)^2$, since $x^2$ and $25$ are the squares of $x$ and $5$ and $-10x$ is the double product $-2 \cdot x \cdot 5$. For the cube, $(x + 2)^3 = x^3 + 6x^2 + 12x + 8$.
:::

:::attenzione
The square of a sum is different from the sum of the squares, because the expansion $(A + B)^2 = A^2 + 2AB + B^2$ contains the double product; therefore the equality $(A + B)^2 = A^2 + B^2$ holds only if $2AB = 0$. With $A = 1$ and $B = 2$ one has $(1 + 2)^2 = 9$, while $1^2 + 2^2 = 5$; the difference $4$ is the double product $2 \cdot 1 \cdot 2$. In the same way $(x + 3)^2 = x^2 + 6x + 9$ contains the term $6x$, which is absent in $x^2 + 9$.
:::

:::esempio{titolo="Recognizing the cube of a binomial"}
The polynomial $x^3 - 6x^2 + 12x - 8$ has four terms and the two outer ones are the cubes $x^3$ and $-8 = (-2)^3$, so we try the cube of $x - 2$. With $A = x$ and $B = 2$ the middle terms of the expansion of $(A - B)^3$ are $-3A^2 B = -6x^2$ and $3AB^2 = 12x$, equal to the given ones; hence $x^3 - 6x^2 + 12x - 8 = (x - 2)^3$, and the only real root of the polynomial is $2$.
:::

:::teorema{#differenza-di-quadrati titolo="Difference of squares"}
$$
A^2 - B^2 = (A - B)(A + B)
$$
It is the quickest factorization to recognize: two squares separated by a **minus sign**. It can also be applied *several times* in a row, when one of the factors obtained is itself a difference of squares.
:::

:::esempio
$9x^2 - 16 = (3x - 4)(3x + 4)$. With two successive applications, $x^4 - 1 = (x^2 - 1)(x^2 + 1) = (x - 1)(x + 1)(x^2 + 1)$.
:::

:::esempio{titolo="Bases that are polynomials"}
The bases $A$ and $B$ can themselves be polynomials. In $(x + 1)^2 - 4$ one has $A = x + 1$ and $B = 2$, therefore
$$
(x + 1)^2 - 4 = (x + 1 - 2)(x + 1 + 2) = (x - 1)(x + 3) .
$$
Expanding the square first gives $x^2 + 2x - 3$, which requires a second step with the monic quadratic trinomial; the difference of squares gives the factors in a single step.
:::

:::attenzione
The sum of two squares $x^2 + k^2$, with $k \neq 0$, *cannot* be factored into linear factors with real coefficients. For example $x^2 + 4 \geq 4 > 0$ for every $x$, so $x^2 + 4$ **has no real roots** and no factor of the form $x - c$ divides it.

::grafico{f="x^2+4;4" xmin=-3 xmax=3 ymin=-1 ymax=10 punti="0,4,pieno" titolo="$y = x^2 + 4$ never goes below the line $y = 4$ (dashed), which it touches at the point $(0, 4)$, so it does not meet the $x$-axis: $x^2 + 4$ has no real roots"}

:::

::::teorema{#somma-e-differenza-di-cubi titolo="Sum and difference of cubes"}
$$
A^3 + B^3 = (A + B)(A^2 - AB + B^2), \qquad
A^3 - B^3 = (A - B)(A^2 + AB + B^2)
$$
The second factor, **a quadratic that is not a perfect square**, has a negative discriminant and **has no real roots**, so the factorization does not continue; the discriminant criterion is found in the chapter on polynomial equations and inequalities.

:::dimostrazione
The idea is to expand the right-hand side and check that the mixed terms cancel:
$$
\begin{aligned}
(A + B)(A^2 - AB + B^2) &= A^3 - A^2 B + A B^2 + A^2 B - A B^2 + B^3 \\[6pt]
&= A^3 + B^3 .
\end{aligned}
$$
The formula for the difference is obtained by replacing $B$ with $-B$. For the second factor we complete the square:
$$
A^2 - AB + B^2 = \left( A - \frac{B}{2} \right)^2 + \frac{3}{4}\, B^2 .
$$
If $B \neq 0$, the first term is greater than or equal to zero and the second is positive, so $A^2 - AB + B^2 > 0$ for every value of $A$. Hence, when $A$ contains the variable $x$ and $B$ is a nonzero constant, the second factor **does not vanish** for any real $x$. For $A^2 + AB + B^2$ the computation is the same with $A + \dfrac{B}{2}$. For example, with $A = x$ and $B = 2$, one has $x^2 - 2x + 4 = (x - 1)^2 + 3 \geq 3$.
:::
::::

:::esempio
$x^3 + 8 = (x + 2)(x^2 - 2x + 4)$, with $A = x$ and $B = 2$. Similarly $27x^3 - 1 = (3x - 1)(9x^2 + 3x + 1)$, with $A = 3x$ and $B = 1$.
:::

## Polynomial division

:::teorema{#divisione-tra-polinomi titolo="Division with remainder"}
Given a dividend $A(x)$ and a nonzero divisor $B(x)$, there exist a *unique* **quotient** $Q(x)$ and **remainder** $R(x)$ such that
$$
\begin{cases}
A(x) = B(x)\, Q(x) + R(x) \\[4pt]
R(x) = 0 \ \text{ or } \ \deg R < \deg B
\end{cases}
$$
The structure is the same as that of division with remainder between integers. When $R(x) = 0$ the division is **exact** and $B(x)$ divides $A(x)$, that is, $B$ is a **factor** of $A$; for this reason division is a factorization tool.
:::

:::esempio{titolo="The division algorithm, step by step"}
Division of $A(x) = 2x^3 - 3x^2 + 4x - 5$ by $B(x) = x^2 - x + 1$. The first term of the quotient is the ratio of the terms of **highest degree**, $\dfrac{2x^3}{x^2} = 2x$; the divisor is multiplied by $2x$ and the product is subtracted from the dividend:
$$
2x^3 - 3x^2 + 4x - 5 - 2x\,(x^2 - x + 1) = -x^2 + 2x - 5 .
$$
The partial remainder $-x^2 + 2x - 5$ has degree $2$, equal to the degree of the divisor, so the algorithm **continues** on the partial remainder. The next term of the quotient is $\dfrac{-x^2}{x^2} = -1$:
$$
-x^2 + 2x - 5 - (-1)(x^2 - x + 1) = x - 4 .
$$
The new partial remainder $x - 4$ has degree $1$, less than the degree of the divisor, therefore the algorithm **stops**. The quotient and the remainder are $Q(x) = 2x - 1$ and $R(x) = x - 4$, that is,
$$
2x^3 - 3x^2 + 4x - 5 = (x^2 - x + 1)(2x - 1) + x - 4 .
$$
:::

:::osservazione
The dividend is written with the degrees in decreasing order, and **missing degrees** are counted with coefficient $0$. The check uses the **identity principle**: expanding $B(x)\,Q(x) + R(x)$ must give back $A(x)$, coefficient by coefficient.
:::

:::osservazione
If $\deg A \geq \deg B$, the degree of the quotient is the difference of the degrees, $\deg Q = \deg A - \deg B$. Indeed $\deg R < \deg B \leq \deg (BQ)$, so $A = BQ + R$ has the same degree as $BQ$, which by the product rule is $\deg B + \deg Q$. In the division of $2x^3 - 3x^2 + 4x - 5$ by $x^2 - x + 1$ the quotient $2x - 1$ has degree $3 - 2 = 1$, and the algorithm required two steps, one for each term of the quotient.
:::

## Remainder theorem and factor theorem

::::teorema{#teorema-del-resto titolo="Remainder theorem"}
The remainder of the division of $P(x)$ by $x - c$ is $P(c)$. The remainder is therefore obtained with a *single* evaluation of the polynomial, **without carrying out the division**. The remainder of $x^3 - 2x + 1$ divided by $x - 2$ is $P(2) = 8 - 4 + 1 = 5$.

::grafico{f="x^3-2*x+1" xmin=-2.5 xmax=2.6 ymin=-4 ymax=8 punti="2,5,pieno,P(2) = 5" segmenti="2,0,2,5" titolo="$y = x^3 - 2x + 1$: the remainder of the division by $x - 2$ is the y-coordinate $P(2) = 5$ of the point of the graph with x-coordinate $2$"}

:::dimostrazione
By the **theorem on division with remainder** there exist $Q(x)$ and $R(x)$ such that $P(x) = (x - c)\,Q(x) + R(x)$, with $R(x) = 0$ or $\deg R < \deg(x - c) = 1$. In both cases $R(x)$ is a **constant** $R$. Evaluating the equality at $x = c$ gives
$$
P(c) = (c - c)\,Q(c) + R = 0 + R = R ,
$$
therefore the remainder **equals** $P(c)$.
:::
::::

:::esempio{titolo="Linear divisor with coefficient other than 1"}
The remainder of the division of $P(x)$ by $2x - 1$ is $P\left( \dfrac{1}{2} \right)$. Indeed $2x - 1 = 2\left( x - \dfrac{1}{2} \right)$, and if $P(x) = \left( x - \dfrac{1}{2} \right) Q(x) + R$, then $P(x) = (2x - 1)\, \dfrac{Q(x)}{2} + R$, with the same constant remainder $R$. For $P(x) = 4x^3 - 2x + 3$ one obtains
$$
P\left( \frac{1}{2} \right) = 4 \cdot \frac{1}{8} - 2 \cdot \frac{1}{2} + 3 = \frac{1}{2} - 1 + 3 = \frac{5}{2} ,
$$
so the remainder is $\dfrac{5}{2}$. By the same reasoning, the remainder of the division by $ax + b$, with $a \neq 0$, is $P\left( -\dfrac{b}{a} \right)$.
:::

:::teorema{#teorema-di-ruffini titolo="Factor theorem"}
The binomial $x - c$ divides $P(x)$ *if and only if* $P(c) = 0$, that is, if and only if $c$ is a root of $P$. The statement follows from the **remainder theorem**, since the division is exact if and only if the remainder $P(c)$ is zero. The theorem connects roots to factorization: every root found produces a **linear factor**. For $P(x) = x^2 - 5x + 6$ we have $P(2) = 4 - 10 + 6 = 0$, so $x - 2$ divides $P$; indeed $P(x) = (x - 2)(x - 3)$.

::grafico{f="x^2-5*x+6" xmin=-0.5 xmax=5 ymin=-1 ymax=6 punti="2,0,pieno;3,0,pieno" titolo="The roots $2$ and $3$ of $P(x) = x^2 - 5x + 6$ are the x-coordinates of the points where the graph meets the $x$-axis"}

:::

:::definizione{#molteplicita-di-una-radice titolo="Multiplicity of a root"}
Let $c$ be a root of the polynomial $P$ and let $m \geq 1$ be an integer. The root $c$ has **multiplicity** $m$ if
$$
P(x) = (x - c)^m\, Q(x) \qquad \text{with } Q(c) \neq 0 ,
$$
that is, if $(x - c)^m$ divides $P$ and $(x - c)^{m + 1}$ does not. A root of multiplicity $1$ is called **simple**, of multiplicity $2$ **double**, of multiplicity $3$ triple. The multiplicity is found by dividing by $x - c$ until the quotient no longer has $c$ as a root: the number of exact divisions is $m$.

The multiplicity determines the sign of $P$ near $c$. For $x \neq c$ the factor $(x - c)^m$ is positive if $m$ is *even*, while if $m$ is *odd* it has the sign of $x - c$, which changes at $c$. The factor $Q$ does not vanish at $c$, so near $c$ it has the sign of $Q(c)$ (this is **preservation of sign**, found in the chapter on limits of Mathematical Analysis 1). Therefore the graph of $P$ **crosses** the $x$-axis at roots of odd multiplicity and **touches it without crossing** at roots of even multiplicity; in the study of the sign this property decides whether a row of the sign chart changes sign, as shown in the chapter on polynomial equations and inequalities.
:::

:::esempio
$P(x) = x^3 - 3x^2 + 4 = (x - 2)^2 (x + 1)$. The root $2$ is **double**, since $P(x) = (x - 2)^2\, Q(x)$ with $Q(x) = x + 1$ and $Q(2) = 3 \neq 0$; the root $-1$ is **simple**, since $P(x) = (x + 1)\,(x - 2)^2$ and $(-1 - 2)^2 = 9 \neq 0$. Near $2$ the polynomial has the sign of $3\,(x - 2)^2$, positive on both sides, while near $-1$ it has the sign of $9\,(x + 1)$, which changes at $-1$.

::grafico{f="x^3-3*x^2+4" xmin=-1.8 xmax=3.3 ymin=-4 ymax=7 punti="-1,0,pieno;2,0,pieno" titolo="$y = x^3 - 3x^2 + 4 = (x - 2)^2 (x + 1)$ crosses the $x$-axis at the simple root $-1$ and touches it without crossing at the double root $2$"}

:::

:::esempio{titolo="Multiplicity by successive divisions"}
For $P(x) = x^3 - 3x + 2$ one has $P(1) = 1 - 3 + 2 = 0$. Two successive synthetic divisions with $c = 1$ give
$$
\begin{array}{c|ccc|c}
 & 1 & 0 & -3 & 2 \\
1 &  & 1 & 1 & -2 \\ \hline
 & 1 & 1 & -2 & 0
\end{array}
\qquad\qquad
\begin{array}{c|cc|c}
 & 1 & 1 & -2 \\
1 &  & 1 & 2 \\ \hline
 & 1 & 2 & 0
\end{array}
$$
The first quotient $x^2 + x - 2$ equals $0$ at $x = 1$, so the second division is exact; the second quotient $x + 2$ equals $3 \neq 0$ at $x = 1$, hence a third division would not be exact. There are two exact divisions, therefore $1$ is a **double** root and
$$
x^3 - 3x + 2 = (x - 1)^2 (x + 2) .
$$
:::

## Synthetic division

:::definizione{#ruffini titolo="Synthetic division"}
**Synthetic division** (Ruffini's rule) is the scheme that carries out the division of $P(x)$ by $x - c$ using *only* the coefficients.

1. In the first row the coefficients of $P$ are written in order of decreasing degree, with $0$ in place of missing degrees; the number $c$ is written on the left.
2. The first coefficient is brought down unchanged into the row of results.
3. The last number written in the row of results is multiplied by $c$, the product is written in the second row under the next coefficient and added in the column; the sum goes down into the row of results. The step is repeated up to the last column.
4. The last number in the row of results is the **remainder**, that is, $P(c)$; the numbers preceding it are the **coefficients of the quotient**, which has degree $\deg P - 1$.
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
The quotient is $x^2 - x - 6$ and the remainder is $0$, so $x - 1$ **divides** $P$ and
$$
x^3 - 2x^2 - 5x + 6 = (x - 1)(x^2 - x - 6) = (x - 1)(x - 3)(x + 2) ,
$$
where the last equality is checked by expanding the product $(x - 3)(x + 2) = x^2 - x - 6$.

::grafico{f="x^3-2*x^2-5*x+6" xmin=-2.6 xmax=3.6 ymin=-6 ymax=10 punti="-2,0,pieno;1,0,pieno;3,0,pieno" titolo="$y = x^3 - 2x^2 - 5x + 6$ meets the $x$-axis at the three roots $-2$, $1$, $3$, one for each linear factor"}

:::

:::attenzione
On the left of the scheme one writes the number $c$ for which the divisor has the form $x - c$, that is, the root of the divisor. For the divisor $x + 3 = x - (-3)$ one uses $c = -3$. With $P(x) = x^2 + x - 6$ and $c = -3$ the scheme gives $1$; then $1 \cdot (-3) = -3$ and $1 - 3 = -2$; then $-2 \cdot (-3) = 6$ and $-6 + 6 = 0$, so $x^2 + x - 6 = (x + 3)(x - 2)$. With $c = 3$ the scheme computes the remainder $P(3) = 6$, which is the remainder of the division by $x - 3$.
:::

:::osservazione
Synthetic division also applies to a divisor $ax + b$ with $a \neq 0$ and $a \neq 1$. Since $ax + b = a\left( x + \dfrac{b}{a} \right)$, one divides by $x + \dfrac{b}{a}$ and then divides the quotient by $a$; the remainder does not change. To divide $2x^2 + 3x - 2$ by $2x - 1$ one uses $c = \dfrac{1}{2}$:
$$
\begin{array}{c|cc|c}
 & 2 & 3 & -2 \\
\frac{1}{2} &  & 1 & 2 \\ \hline
 & 2 & 4 & 0
\end{array}
$$
The quotient of the division by $x - \dfrac{1}{2}$ is $2x + 4$, therefore the quotient of the division by $2x - 1$ is $\dfrac{2x + 4}{2} = x + 2$, with remainder $0$, and $2x^2 + 3x - 2 = (2x - 1)(x + 2)$.
:::

## Rational roots

::::teorema{#radici-razionali titolo="Finding rational roots"}
Let $P(x) = a_n x^n + \dots + a_0$ have integer coefficients, with $a_0 \neq 0$. If the fraction $\dfrac{p}{q}$, in lowest terms, is a root of $P$, then $p$ **divides the constant term** $a_0$ and $q$ **divides the leading coefficient** $a_n$. The theorem provides a *finite* list of candidates; each candidate $c$ is tested by computing $P(c)$, and by the **factor theorem** every candidate with $P(c) = 0$ produces the factor $x - c$. When the leading coefficient is $1$, any rational roots are integers that divide the constant term.

:::dimostrazione
The idea is to clear the denominators and read the resulting equality as an equality between integers. Let $P\left( \dfrac{p}{q} \right) = 0$, with $p$ and $q$ coprime integers and $q > 0$. Multiplying the equality by $q^n$ gives
$$
a_n p^n + a_{n-1} p^{n-1} q + \dots + a_1 p\, q^{n-1} + a_0 q^n = 0 .
$$
All the terms except the last contain the factor $p$, therefore
$$
a_0 q^n = -p \left( a_n p^{n-1} + a_{n-1} p^{n-2} q + \dots + a_1 q^{n-1} \right) ,
$$
and the second factor of the right-hand side is an integer; hence $p$ divides $a_0 q^n$. We now use the property of integers according to which, if an integer divides a product and is coprime with one of the two factors, then it divides the other. Since $p$ is coprime with $q$, it is also coprime with $q^n$, therefore $p$ **divides** $a_0$. In the same way all the terms except the first contain the factor $q$, so $q$ divides $a_n p^n$; since $q$ is coprime with $p^n$, the denominator $q$ **divides** $a_n$.
:::
::::

:::attenzione
A polynomial whose candidates are not roots has no *rational* roots, and it can have irrational real roots. For $x^2 - 2$ the candidates $\pm 1$, $\pm 2$ give the values $-1$ and $2$, which are different from zero; however $x^2 - 2 = \left( x - \sqrt{2} \right)\left( x + \sqrt{2} \right)$, as the difference of the squares of $x$ and of $\sqrt{2}$. The search for rational roots, therefore, is not enough to establish that a quadratic factor has no real roots.
:::

:::esempio
$P(x) = 2x^3 + x^2 - 5x + 2$. The divisors of the constant term $2$ are $\pm 1, \pm 2$; the positive divisors of the leading coefficient $2$ are $1, 2$. The candidates are therefore $\pm 1$, $\pm 2$, $\pm\dfrac{1}{2}$. Since $P(1) = 2 + 1 - 5 + 2 = 0$, the number $1$ is a **root** and $x - 1$ divides $P$. *Not* every candidate is a root: $P(-1) = -2 + 1 + 5 + 2 = 6 \neq 0$.

::grafico{f="2*x^3+x^2-5*x+2" xmin=-2.6 xmax=1.8 ymin=-3 ymax=8 punti="1,0,pieno;-1,6,pieno,P(−1) = 6" etichette="1.15,-0.9,P(1) = 0" segmenti="-1,0,-1,6" titolo="$y = 2x^3 + x^2 - 5x + 2$: the candidate $1$ is a root, the candidate $-1$ is not, since $P(-1) = 6$; the graph also meets the $x$-axis at the candidates $-2$ and $\dfrac{1}{2}$"}

:::

## Factorization strategy

:::definizione{#raccoglimenti titolo="Factoring out a common factor and factoring by grouping"}
**Factoring out a common factor** extracts a factor shared by *all* the terms:
$$
6x^3 - 4x^2 + 2x = 2x\,(3x^2 - 2x + 1) .
$$
**Factoring by grouping** groups the terms and factors out a factor from each group; the method is complete when the groups leave the same common factor, which is in turn factored out:
$$
x^3 + 2x^2 + 3x + 6 = x^2 (x + 2) + 3\,(x + 2) = (x + 2)(x^2 + 3) .
$$
:::

:::teorema{#trinomio-speciale titolo="Monic quadratic trinomial"}
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

:::esempio{titolo="Monic quadratic trinomial in two variables"}
The trinomial $x^2 - 5xy + 6y^2$, read as a trinomial in the variable $x$, has sum $s = -5y$ and product $p = 6y^2$. The two terms sought are $-2y$ and $-3y$, since $-2y + (-3y) = -5y$ and $(-2y)(-3y) = 6y^2$, therefore $x^2 - 5xy + 6y^2 = (x - 2y)(x - 3y)$.
:::

:::definizione{#strategia-di-fattorizzazione titolo="Factorization strategy"}
The factorization of a polynomial proceeds in the following order, and after *each* step it **starts again from the first step** on the factors obtained.

1. Factoring out the common factor.
2. Recognizing standard algebraic identities: square and cube of a binomial, difference of squares, sum and difference of cubes.
3. For trinomials of the form $x^2 + sx + p$, the monic quadratic trinomial.
4. With four or more terms, factoring by grouping.
5. Finding rational roots and synthetic division: every root $c$ found produces the factor $x - c$ and lowers the degree of the quotient by one. The step also applies to quadratic trinomials $ax^2 + bx + c$ with $a \neq 1$ and rational roots, which are not monic quadratic trinomials.

The factorization **ends** when every factor has degree $1$ or is a quadratic factor **with no real roots**; how to recognize the latter with the discriminant is found in the chapter on polynomial equations and inequalities.
:::

:::esempio{titolo="A complete factorization"}
$$
2x^4 + 2x^3 - 12x^2 = 2x^2\,(x^2 + x - 6) = 2x^2\,(x + 3)(x - 2)
$$
The first step is **factoring out the common factor** $2x^2$. The factor $x^2 + x - 6$ is a **monic quadratic trinomial**, since $3 + (-2) = 1$ and $3 \cdot (-2) = -6$, so it factors as $(x + 3)(x - 2)$. The non-constant factors, namely $x$ (which appears twice), $x + 3$ and $x - 2$, all have degree $1$, therefore the factorization is **complete**.

::grafico{f="2*x^4+2*x^3-12*x^2" xmin=-3.6 xmax=2.5 ymin=-35 ymax=15 punti="-3,0,pieno;0,0,pieno;2,0,pieno" titolo="$y = 2x^4 + 2x^3 - 12x^2$: at the simple roots $-3$ and $2$ the graph crosses the $x$-axis; at the root $0$, double because of the factor $x^2$, it touches the axis without crossing it"}

:::

:::esempio{titolo="A sum of squares of degree four"}
The binomial $x^4 + 4$ is positive for every $x$, so it has no real roots and no linear factors; it can nevertheless be factored into two quadratic factors. We add and subtract $4x^2$, which is twice the product of $x^2$ and $2$:
$$
\begin{aligned}
x^4 + 4 &= x^4 + 4x^2 + 4 - 4x^2 \\[6pt]
&= \left( x^2 + 2 \right)^2 - (2x)^2 \\[6pt]
&= \left( x^2 - 2x + 2 \right)\left( x^2 + 2x + 2 \right) .
\end{aligned}
$$
The last step is a difference of squares with $A = x^2 + 2$ and $B = 2x$. The two factors can be written as $(x - 1)^2 + 1$ and $(x + 1)^2 + 1$, so they are positive for every $x$ and have no real roots; hence the factorization is **complete**.
:::
