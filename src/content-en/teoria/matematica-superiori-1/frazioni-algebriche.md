---
titolo: "Algebraic Fractions"
sommario: "Domain restrictions, simplification, and operations with quotients of polynomials, with examples of signs and excluded values."
---

## Domain restrictions

:::definizione{#dominio titolo="Domain of an algebraic fraction"}
A **polynomial** in $x$ is a sum of terms, each made of a number that multiplies a power of $x$. The expressions $x+1$, $x^2-4$, and the number $3$ are polynomials. An **algebraic fraction** is a fraction with a polynomial in the numerator, that is, above the line, and a polynomial in the denominator, that is, below the line. One example is $\dfrac{x+1}{x-3}$.

When a number is written in place of $x$, the numerator and the denominator become two numbers and the fraction equals their **quotient**, that is, the result of dividing the first by the second. For $x=5$ the fraction $\dfrac{x+1}{x-3}$ equals $\dfrac62=3$.

Division by zero has no result, because no number multiplied by $0$ gives a number different from $0$. For $x=3$ the denominator equals $3-3=0$, that is, it **vanishes**, so the quotient does not exist. At $x=3$ the fraction is said to be *undefined*, and $3$ is an excluded value.

The **domain restriction** of an algebraic fraction, also called its condition of existence, is the requirement that the denominator be different from zero. For $\dfrac{x+1}{x-3}$ the restriction is $x\ne3$, where the symbol $\ne$ is read "is not equal to". The **domain** is the set of numbers that satisfy the restriction, that is, the admissible values of $x$.

With letters, $P(x)$ and $Q(x)$ denote the values of two polynomials $P$ and $Q$ at the number $x$. The polynomial $Q$ is different from the zero polynomial, which equals zero for every $x$. The domain of $\dfrac{P(x)}{Q(x)}$ is the set
$$
D=\{x\in\mathbb R:Q(x)\ne0\}.
$$
The symbol $\mathbb R$ denotes the set of **real numbers**, that is, all the numbers on the number line (integers, fractions, decimals). The symbol $\in$ is read "belongs to".

The restriction concerns the denominator only. For $\dfrac{x+1}{x-3}$, the value $x=-1$ is admissible because the denominator equals $-1-3=-4$. At that point the numerator equals $-1+1=0$ and the fraction equals $\dfrac{0}{-4}=0$. The same rule applies when the denominator contains $x^2$ or higher powers of $x$.
:::

:::esempio{titolo="Denominators with two, one, and zero real roots"}
A **zero** of a polynomial, also called a **root**, is a value of $x$ at which the polynomial equals zero. The excluded values of an algebraic fraction are therefore the zeros of the denominator. To find them, the denominator is **factored**, that is, written as a product. The terms of a product are called **factors**.

The denominator $x^2-4$ is a difference of squares and factors as $(x-2)(x+2)$. A product of two numbers is zero if at least one of its factors is zero. The factor $x-2$ equals zero for $x=2$ and the factor $x+2$ equals zero for $x=-2$. The values $2$ and $-2$ are therefore excluded.

The denominator $(x-2)^2$ is the product $(x-2)(x-2)$. The two factors are equal and both vanish for $x=2$, so the only excluded value is $2$.

The square of a real number is greater than or equal to zero, so $x^2+1\ge 1$ for every real number. The denominator $x^2+1$ is therefore different from zero for every $x$, and no value is excluded.

| Denominator | Real zeros | Domain |
|---|---|---|
| $x^2-4$ | $-2,\ 2$ | $\mathbb R\setminus\{-2,2\}$ |
| $(x-2)^2$ | $2$ | $\mathbb R\setminus\{2\}$ |
| $x^2+1$ | none | $\mathbb R$ |

The notation $\mathbb R\setminus\{-2,2\}$ is read "all real numbers except $-2$ and $2$". On the graph of $x^2+1$ the lowest point of the curve has height $1$, so the curve stays above the horizontal axis.

::grafico{f="x^2+1" xmin=-3 xmax=3 ymin=-1 ymax=7 titolo="The minimum of x² + 1 is 1, so the denominator remains positive"}
:::

:::osservazione{titolo="Check a restriction for each original expression"}
The sum $\dfrac1{x-2}+\dfrac1{x+2}$ has two denominators. The first vanishes for $x=2$ and the second for $x=-2$. The sum exists when both fractions exist, so the two restrictions hold together:
$$
\begin{cases}
x\ne2\\
x\ne-2
\end{cases}
$$
The restrictions are read from the original expression, one for each denominator, before any calculation. If a factor of the denominator is canceled during the calculation, the value at which it vanishes remains excluded, because at that point the original expression would divide by zero.
:::

:::esempio{titolo="A coefficient that can vanish"}
The fraction $\dfrac{x+1}{(a-1)x+3}$ contains the letter $a$ in addition to $x$. It is a **parameter**, that is, a letter that stands for a fixed number whose value is not specified. The **coefficient** of $x$ is the number that multiplies $x$, so here it is $a-1$.

For $a=1$ the coefficient equals $1-1=0$. The term in $x$ vanishes and the denominator is the number $3$, which is different from zero. The domain is therefore $\mathbb R$.

For $a\ne1$, the value of $x$ at which the denominator vanishes is found by solving the **equation** $(a-1)x+3=0$, that is, the equality that asks when the denominator equals zero. The **sides** of an equality are the two expressions to the left and to the right of the equals sign. The number $3$ is subtracted from both sides, and then both sides are divided by $a-1$, which is different from zero.
$$
\begin{aligned}
(a-1)x+3&=0\\[6pt]
(a-1)x&=-3\\[6pt]
x&=-\frac{3}{a-1}.
\end{aligned}
$$
This is the only value to exclude. For example, for $a=4$ the denominator is $3x+3$ and the excluded value is $x=-\dfrac33=-1$. At $x=-1$ the numerator $x+1$ also vanishes. The value $-1$ remains excluded, because the domain restriction depends on the denominator only.

The case $a=1$ is handled separately because the formula for the excluded value contains a division by $a-1$, and for $a=1$ this would be a division by zero.
:::

## Simplification and equality on the original domain

::::teorema{#semplificare titolo="Canceling a common factor"}
A numerical fraction is simplified by dividing the numerator and the denominator by a common factor:
$$
\frac{6}{10}=\frac{3\cdot2}{5\cdot2}=\frac35.
$$
The rule is the same for polynomials. Let $A$, $B$, and $C$ be three polynomials. The quotient $\dfrac{A(x)C(x)}{B(x)C(x)}$ equals $\dfrac{A(x)}{B(x)}$ at the points where $B(x)\ne0$ and $C(x)\ne0$.

Both restrictions carry over when the expression is rewritten. The restriction $C(x)\ne0$ can no longer be read from the simplified fraction, so it is written next to the result.

**Reducing** an algebraic fraction means simplifying it until the numerator and the denominator have no common factors left. The resulting fraction is said to be *in lowest terms*.

:::dimostrazione
Fix a value of $x$ in the domain. The values $A(x)$, $B(x)$, and $C(x)$ are three numbers, and $C(x)$ is different from zero. By the invariance property of division, a quotient does not change if the dividend and the divisor are divided by the same nonzero number. Both the numerator and the denominator are therefore divided by $C(x)$. This leaves $A(x)$ in the numerator and $B(x)$ in the denominator.
:::
::::

:::esempio{titolo="A linear formula with one excluded point"}
The fraction $\dfrac{x^2-9}{x-3}$ has the domain restriction $x\ne3$. The numerator $x^2-9$ is a difference of squares, because $9=3^2$, and can be written as $(x-3)(x+3)$. Therefore
$$
\begin{aligned}
\frac{x^2-9}{x-3}&=\frac{(x-3)(x+3)}{x-3}\\[6pt]
&=x+3 \qquad (x\ne3).
\end{aligned}
$$
The polynomial $x+3$ is **linear**, that is, of degree one, and its graph is the line $y=x+3$. On a graph, the horizontal coordinate of a point is its $x$ and the vertical coordinate is its $y$. All the points of the line belong to the graph of the fraction except the one with horizontal coordinate $3$. Its vertical coordinate on the line would be $3+3=6$, so an open circle, which marks an excluded point, is drawn at $(3,6)$.

The formula $x+3$ is useful for calculating values: at $x=4$ it gives $4+3=7$. It is used only for the values in the original domain, that is, for $x\ne3$.

::grafico{f="x+3" xmin=-4 xmax=7 ymin=-2 ymax=11 punti="3,6,vuoto" titolo="The open circle marks the excluded point (3, 6)"}
:::

:::attenzione{titolo="Cancellation applies to factors"}
A **term** is one of the parts of a sum, while a factor is one of the parts of a product. In the fraction $\dfrac{x+3}{x}$, defined for $x\ne0$, the numerator is the sum $x+3$. The letter $x$ is a term of the numerator and is not one of its factors. Each term is therefore divided by $x$:
$$
\frac{x+3}{x}=\frac xx+\frac3x=1+\frac3x.
$$
At $x=2$ the fraction equals $\dfrac{2+3}{2}=\dfrac52$, and $1+\dfrac32$ also equals $\dfrac52$. Canceling only the term $x$ in the numerator against the $x$ in the denominator would leave $3$, which is different from $\dfrac52$. The numerical check thus distinguishes the valid transformation from the cancellation of a term.
:::

:::esempio{titolo="A factor that cancels and one that remains"}
In the fraction $\dfrac{(x+4)(x-1)}{(x+4)(x+2)}$ the denominator vanishes for $x=-4$ and for $x=-2$, so the domain excludes $-4$ and $-2$. At admissible values, canceling the common factor $x+4$ gives $\dfrac{x-1}{x+2}$.

The two exclusions have different effects.

- At $x=-4$ the simplified formula gives the value $\dfrac{-4-1}{-4+2}=\dfrac{-5}{-2}=\dfrac52$. The original fraction is still undefined at that point, because its denominator equals zero there. On the graph, the point $\left(-4,\dfrac52\right)$ is an open circle.
- At $x=-2$ the simplified denominator $x+2$ still vanishes, while the new numerator equals $-2-1=-3$. On the graph, the dashed vertical line $x=-2$ separates the curve into two parts, called **branches**.

A dashed line on the graph is an **asymptote**, that is, a line that the curve approaches without touching it. The horizontal asymptote $y=1$ shows the value that the fraction approaches when $x$ is very large, positive or negative: for example, at $x=100$ the fraction equals $\dfrac{99}{102}$, almost $1$. The exclusion of $-4$, marked by the open circle, is retained only in the domain written alongside the formula.

::grafico{f="(x-1)/(x+2)" xmin=-7 xmax=6 ymin=-4 ymax=6 asintoti="x=-2;y=1" punti="-4,2.5,vuoto" titolo="The canceled factor leaves an open circle at x = −4"}
:::

## Adding and subtracting algebraic fractions

::::teorema{#somme titolo="Building a common denominator with nonzero factors"}
Two numerical fractions with different denominators are added after they have been written with the same denominator, for example the product of the two denominators:
$$
\frac12+\frac13=\frac{1\cdot3}{2\cdot3}+\frac{1\cdot2}{3\cdot2}=\frac{3+2}{6}=\frac56.
$$
Algebraic fractions are handled in the same way. Let $P$, $Q$, $R$, and $S$ be polynomials. At the points where both $Q(x)$ and $S(x)$ are nonzero, we have
$$
\frac{P(x)}{Q(x)}\pm\frac{R(x)}{S(x)}
=\frac{P(x)S(x)\pm R(x)Q(x)}{Q(x)S(x)}.
$$
The symbol $\pm$ is read "plus or minus". The formula holds with the plus sign on both sides or with the minus sign on both sides.

The product $QS$ is a common denominator. If $Q$ and $S$ share factors, a common multiple of lower degree can be chosen, where the **degree** of a polynomial is the highest exponent of $x$. The common denominator of lowest degree is the **least common multiple** of the denominators, abbreviated LCM. It is the product of all the factors of the denominators, shared and not shared, each taken once with its highest exponent.

A number or a polynomial without a denominator is written as a fraction with the denominator of the other term. For $x\ne4$,
$$
\frac{3x}{x-4}-3=\frac{3x}{x-4}-\frac{3(x-4)}{x-4}=\frac{3x-3x+12}{x-4}=\frac{12}{x-4}.
$$
The minus sign in front of the second fraction changes the sign of every term of its numerator, so $-3(x-4)$ becomes $-3x+12$.

:::dimostrazione
On the domain $S(x)$ and $Q(x)$ are different from zero, so $\dfrac{S(x)}{S(x)}=1$ and $\dfrac{Q(x)}{Q(x)}=1$. Multiplying a number by $1$ does not change its value. Multiplying the first fraction by $\dfrac{S(x)}{S(x)}$ and the second by $\dfrac{Q(x)}{Q(x)}$ gives $\dfrac{P(x)S(x)}{Q(x)S(x)}$ and $\dfrac{R(x)Q(x)}{Q(x)S(x)}$, which have the same denominator. Addition or subtraction therefore applies to their numerators, each taken as a whole.
:::
::::

:::esempio{titolo="Common factors with different multiplicities"}
To add $\dfrac{1}{(x-2)^2}$ and $\dfrac{2}{(x-2)(x+2)}$, the values $2$ and $-2$, at which the denominators vanish, are excluded. The **multiplicity** of a factor is the number of times it appears in a product. The first denominator contains two copies of $x-2$ and the second contains one. The common denominator of least degree contains two copies of $x-2$ and one copy of $x+2$, so it is $(x-2)^2(x+2)$.

The first denominator lacks the factor $x+2$, so the numerator and the denominator of the first fraction are multiplied by $x+2$. The second lacks one copy of $x-2$, so both terms of the second fraction are multiplied by $x-2$. This gives
$$
\begin{aligned}
\frac{1}{(x-2)^2}+\frac{2}{(x-2)(x+2)}
&=\frac{(x+2)+2(x-2)}{(x-2)^2(x+2)}\\[6pt]
&=\frac{x+2+2x-4}{(x-2)^2(x+2)}\\[6pt]
&=\frac{3x-2}{(x-2)^2(x+2)}.
\end{aligned}
$$
At $x=0$, the two original terms equal $\dfrac{1}{(-2)^2}=\dfrac14$ and $\dfrac{2}{(-2)\cdot2}=-\dfrac12$, so their sum is $-\dfrac14$. The resulting fraction also equals $\dfrac{-2}{4\cdot2}=-\dfrac14$.
:::

:::esempio{titolo="Opposite denominators in a subtraction"}
The **opposite** of an expression is obtained by changing the sign of each of its terms. The opposite of $x-2$ is $-x+2$, that is, $2-x$, so $2-x=-(x-2)$. Therefore, for $x\ne2$, we have
$$
\frac1{2-x}=\frac1{-(x-2)}=-\frac1{x-2}.
$$
This equality is substituted before the subtraction is carried out. Subtracting $-\dfrac1{x-2}$ is the same as adding $\dfrac1{x-2}$.
$$
\begin{aligned}
\frac1{x-2}-\frac1{2-x}
&=\frac1{x-2}+\frac1{x-2}\\[6pt]
&=\frac2{x-2}.
\end{aligned}
$$
The graph shows that the result is negative for $x<2$ and positive for $x>2$. Indeed the numerator is $2$, while the denominator $x-2$ changes sign at $x=2$. The two dashed lines are the asymptotes $x=2$ and $y=0$.

::grafico{f="2/(x-2)" xmin=-4 xmax=7 ymin=-5 ymax=5 asintoti="x=2;y=0" titolo="The difference has opposite signs on the two intervals separated by x = 2"}
:::

:::attenzione{titolo="A common denominator can introduce an exclusion"}
In the sum $\dfrac1{x+1}+\dfrac1{x-1}$ the excluded values are $-1$ and $1$. The value $0$ belongs to the domain, and at $x=0$ the two terms equal $1$ and $-1$, so the sum equals zero.

Using $(x+1)(x-1)$ as the common denominator, the numerator is $(x-1)+(x+1)=2x$ and the result is $\dfrac{2x}{(x+1)(x-1)}$. This fraction can be evaluated at $0$, where it equals $\dfrac{0}{-1}=0$.

Adding a factor of $x$ to the common denominator would give $\dfrac{2x^2}{x(x+1)(x-1)}$, whose denominator is zero at $x=0$. The new exclusion comes from multiplying by $\dfrac{x}{x}$, which equals one only for $x\ne0$. A factor added to the numerator and the denominator preserves the domain only if it is different from zero at every point of the domain.
:::

## Products and cancellation before expansion

::::teorema{#prodotti titolo="Product of two quotients"}
The product of two numerical fractions has the product of the numerators as its numerator and the product of the denominators as its denominator:
$$
\frac23\cdot\frac45=\frac{2\cdot4}{3\cdot5}=\frac{8}{15}.
$$
For algebraic fractions, at the points where $Q(x)\ne0$ and $S(x)\ne0$, we have
$$
\frac{P(x)}{Q(x)}\cdot\frac{R(x)}{S(x)}
=\frac{P(x)R(x)}{Q(x)S(x)}.
$$
**Expanding** a product of polynomials means carrying out the multiplications, for example going from $(x-2)(x+2)$ to $x^2-4$. The factors shared by a numerator and a denominator can be recognized when the polynomials are factored. For this reason the polynomials are factored and the fraction is simplified before expanding.

:::dimostrazione
Fix an admissible value of $x$. The **inverse** of a nonzero number $n$, also called its **reciprocal**, is the number $\dfrac1n$, which multiplied by $n$ gives $1$. Dividing by $n$ is the same as multiplying by $\dfrac1n$. The two quotients are therefore the products $P(x)\cdot\dfrac1{Q(x)}$ and $R(x)\cdot\dfrac1{S(x)}$.

By the commutative and associative properties of multiplication the four factors are rearranged as $P(x)R(x)\cdot\dfrac1{Q(x)}\cdot\dfrac1{S(x)}$. The product of the two inverses is the inverse of $Q(x)S(x)$, because multiplied by $Q(x)S(x)$ it gives $1$. The result is therefore $P(x)R(x)$ divided by $Q(x)S(x)$, which is the formula.
:::
::::

:::esempio{titolo="A constant product with two excluded points"}
In the product $\dfrac{x-2}{x+2}\cdot\dfrac{x+2}{x-2}$, the first fraction excludes $-2$ and the second excludes $2$. Once the domain is set, the product is $\dfrac{(x-2)(x+2)}{(x+2)(x-2)}$. Both factors $x-2$ and $x+2$ can be canceled, so the product equals $1$ at every admissible point. A result that does not depend on $x$ is called *constant*.

The two excluded points come from different fractions and both remain excluded in the product. The graph is the horizontal line of height $1$ with two open circles, at the points $(-2,1)$ and $(2,1)$.

::grafico{f="1" xmin=-5 xmax=5 ymin=-1 ymax=3 punti="-2,1,vuoto;2,1,vuoto" titolo="The product equals 1 at every admissible point and has two exclusions"}
:::

:::esempio{titolo="Partial cancellation with repeated factors"}
The denominators $x-1$ and $3x$ vanish for $x=1$ and for $x=0$. For $x\ne0$ and $x\ne1$, the calculation is
$$
\begin{aligned}
\frac{x^2}{x-1}\cdot\frac{(x-1)^2}{3x}
&=\frac{x^2(x-1)^2}{3x(x-1)}\\[6pt]
&=\frac{x(x-1)}{3}.
\end{aligned}
$$
The denominator contains only one copy of $x$, so one copy of $x$ is canceled from the factor $x^2$ and the other remains in the numerator. Likewise, one copy of $x-1$ remains in the numerator.

At $x=3$, the original product is $\dfrac92\cdot\dfrac49=2$ and the result equals $\dfrac{3\cdot2}{3}=2$. The calculation can therefore also be checked without canceling first.
:::

:::esempio{titolo="The sign of a factor written in reverse order"}
The fraction $\dfrac{-3(x-2)^2}{6(2-x)(x+4)}$ excludes $2$ and $-4$, at which the denominator vanishes. The factor $2-x$ is the opposite of $x-2$ and is rewritten as $-(x-2)$. The minus sign thus passes to the coefficient of the denominator, which changes from $6$ to $-6$. One copy of $x-2$ is then canceled. The ratio of the coefficients is $\dfrac{-3}{-6}=\dfrac12$.
$$
\begin{aligned}
\frac{-3(x-2)^2}{6(2-x)(x+4)}
&=\frac{-3(x-2)^2}{-6(x-2)(x+4)}\\[6pt]
&=\frac{x-2}{2(x+4)}.
\end{aligned}
$$
At $x=0$ the original form equals $-\dfrac{12}{48}=-\dfrac14$. The final form equals $\dfrac{-2}{2\cdot4}=-\dfrac14$, which is the same number. With a dropped minus sign the result would be $-\dfrac{x-2}{2(x+4)}$, which equals $\dfrac14$ at $x=0$, so the numerical check reveals the error.

The value $2$ remains excluded, even though it makes only the numerator of the final form zero.
:::

## Dividing algebraic fractions

::::teorema{#divisioni titolo="The divisor is defined and nonzero"}
In a division the first term is the **dividend** and the second is the **divisor**. The **reciprocal** of a nonzero fraction is obtained by swapping its numerator and denominator. Dividing by a fraction is the same as multiplying by its reciprocal:
$$
\frac23:\frac45=\frac23\cdot\frac54=\frac{10}{12}=\frac56.
$$
To divide $\dfrac{P(x)}{Q(x)}$ by $\dfrac{R(x)}{S(x)}$, the values $Q(x)$, $S(x)$, and $R(x)$ must all be nonzero. The first two restrictions ensure that the two fractions exist. The restriction $R(x)\ne0$ ensures that the divisor is different from zero, because a fraction equals zero when its numerator vanishes. On this domain, the division can be written as
$$
\frac{P(x)}{Q(x)}:\frac{R(x)}{S(x)}
=\frac{P(x)}{Q(x)}\cdot\frac{S(x)}{R(x)}.
$$

:::dimostrazione
On the domain $R(x)$ and $S(x)$ are different from zero, so the fractions $\dfrac{R(x)}{S(x)}$ and $\dfrac{S(x)}{R(x)}$ are both defined. Their product is $\dfrac{R(x)S(x)}{S(x)R(x)}$, which equals one. The second factor is therefore the inverse of the divisor. Dividing by a number is the same as multiplying by its inverse, so multiplying the dividend by $\dfrac{S(x)}{R(x)}$ gives the quotient.
:::
::::

:::esempio{titolo="Two different reasons for excluding values"}
In the quotient $\dfrac1{x+3}:\dfrac{x-1}{x+3}$, the denominators exclude $-3$. At $x=1$ the two fractions are defined, but the divisor equals $\dfrac{0}{4}=0$, so $1$ is excluded as well. The domain is $\mathbb R\setminus\{-3,1\}$. On the domain, the dividend is multiplied by the reciprocal of the divisor and $x+3$ is canceled:
$$
\frac1{x+3}:\frac{x-1}{x+3}=\frac1{x+3}\cdot\frac{x+3}{x-1}=\frac1{x-1}.
$$
The exclusion of $1$ can still be read from the new denominator. The exclusion of $-3$ can no longer be read from the formula, so the domain is written alongside the result. On the graph it is the open circle with horizontal coordinate $-3$ and vertical coordinate $\dfrac{1}{-3-1}=-\dfrac14$.

::grafico{f="1/(x-1)" xmin=-6 xmax=6 ymin=-3 ymax=3 asintoti="x=1;y=0" punti="-3,-0.25,vuoto" titolo="Division can leave an excluded point on one branch of the graph"}
:::

:::esempio{titolo="The order of the fractions also changes the domain"}
Let $A=\dfrac{x-2}{x-1}$ and $B=\dfrac{x+2}{x-1}$. Both fractions require $x\ne1$.

- In the quotient $A:B$ the divisor is $B$, which vanishes for $x=-2$. The quotient therefore also requires $x\ne-2$.
- In the quotient $B:A$ the divisor is $A$, which vanishes for $x=2$. The quotient therefore also requires $x\ne2$.

The two quotients therefore have different domains. At $x=2$, we have $A=\dfrac01=0$ and $B=\dfrac41=4$, so the first quotient equals $0:4=0$. In the reverse division that same zero is the divisor, so the second quotient is undefined at that point.
:::

## Evaluating fractions, finding zeros, and determining signs

:::esempio{#valori titolo="Evaluating the fraction and finding a zero"}
The **value** of an algebraic fraction at a number is the result obtained by substituting that number for $x$. To evaluate $\dfrac{x+1}{x-3}$ at $x=5$, the denominator is calculated first, and it equals $5-3=2$. The substitution is therefore permitted and gives $\dfrac{5+1}{2}=\dfrac62=3$. When the fraction has a name, for example $f(x)=\dfrac{x+1}{x-3}$, this value is denoted by $f(5)$.

A **zero of the fraction** is an admissible value of $x$ at which the fraction equals zero. A quotient equals zero when the numerator is zero and the denominator is different from zero. To find the zeros of $\dfrac{x-4}{x+1}$, the equation $x-4=0$ is therefore solved, which gives $x=4$. At $x=4$ the denominator equals $4+1=5$, so $4$ is a zero of the fraction.

The same procedure distinguishes zeros from excluded points. For $\dfrac{(x-4)^2}{x-4}$, the only zero of the numerator is $4$. The denominator also vanishes there, so $4$ is an excluded value and the fraction has no zeros.

On the graph of $\dfrac{x-4}{x+1}$ the zero is the filled point $(4,0)$ and the vertical asymptote is the line $x=-1$.

::grafico{f="(x-4)/(x+1)" xmin=-6 xmax=8 ymin=-5 ymax=6 asintoti="x=-1" punti="4,0,pieno" titolo="The zero has coordinate 4, while the horizontal coordinate −1 is excluded"}
:::

:::esempio{#segno titolo="A squared denominator preserves the sign of the numerator"}
Determining the **sign** of a fraction means establishing for which values of $x$ it is positive, negative, or equal to zero. The square of a nonzero number is positive, so for $x\ne-1$ the denominator $(x+1)^2$ is positive. Dividing by a positive number does not change the sign. The sign of $\dfrac{x-2}{(x+1)^2}$ is therefore the sign of $x-2$.

The **interval** $(a,b)$ is the set of numbers between $a$ and $b$, endpoints excluded. The symbols $-\infty$ and $+\infty$ are read "minus infinity" and "plus infinity" and show that the interval continues without end on that side. The fraction is negative on the two intervals $(-\infty,-1)$ and $(-1,2)$, equals zero at $2$, and is positive on $(2,+\infty)$.

The values less than $2$ are split into two intervals because $-1$ is excluded from the domain. The set on which the fraction is negative is also written $(-\infty,-1)\cup(-1,2)$, where the symbol $\cup$ is read "union". On the graph the curve lies below the horizontal axis on both sides of the asymptote $x=-1$.

::grafico{f="(x-2)/(x+1)^2" xmin=-6 xmax=7 ymin=-6 ymax=2 asintoti="x=-1" punti="2,0,pieno" titolo="The squared factor in the denominator leaves the sign unchanged at admissible points"}
:::

:::esempio{titolo="A sign table with a linear numerator and denominator"}
In the fraction $\dfrac{x-1}{x+2}$ the numerator vanishes for $x=1$ and the denominator for $x=-2$. The values $-2$ and $1$ divide the number line into three intervals. The linear factor $x-1$ is negative for $x<1$ and positive for $x>1$. The linear factor $x+2$ is negative for $x<-2$ and positive for $x>-2$. The sign of each factor is therefore known throughout each interval, because neither vanishes inside it.

The quotient of two numbers with the same sign is positive, and the quotient of two numbers with different signs is negative. For example, if $-2<x<1$, then $x-1$ is negative and $x+2$ is positive, so the quotient is negative.

| Interval | $x-1$ | $x+2$ | Quotient |
|---|---|---|---|
| $x<-2$ | $-$ | $-$ | $+$ |
| $-2<x<1$ | $-$ | $+$ | $-$ |
| $x>1$ | $+$ | $+$ | $+$ |

At the endpoints of the intervals the original conditions are used. At $x=-2$, the denominator is zero, so the value is excluded and the quotient is undefined. At $x=1$, only the numerator vanishes, so the quotient equals zero.
:::

## Recognizing equivalent fractions

::::teorema{#equivalenza titolo="Comparison by cross-multiplication"}
Two numerical fractions are equal when their **cross-products** are equal, that is, the products of the numerator of each by the denominator of the other. For example $\dfrac23=\dfrac46$, and indeed $2\cdot6=12$ and $4\cdot3=12$.

The **common domain** of two algebraic fractions is the set of values of $x$ at which both are defined. On the common domain of the fractions $\dfrac{P(x)}{Q(x)}$ and $\dfrac{R(x)}{S(x)}$, the two values are equal if and only if $P(x)S(x)=R(x)Q(x)$. The phrase "if and only if" means that each of the two equalities has the other as a consequence.

If the equality of the products holds for every $x$ in the common domain, the fractions agree at every point in that domain. A **function** is a rule that assigns a single number to each admissible value of $x$. To describe the same function, the two fractions must also have the same domain.

:::dimostrazione
Start from the equality of the two fractions and multiply both sides by $Q(x)S(x)$. This leaves $P(x)S(x)$ on the left-hand side and $R(x)Q(x)$ on the right-hand side.

In the reverse direction, start from the equality of the products. The product $Q(x)S(x)$ is different from zero on the common domain. Both sides are therefore divided by that number, which recovers the equality of the two quotients.
:::
::::

:::esempio{titolo="Quotients that agree on a common domain with different exclusions"}
The fraction $\dfrac{x+2}{x^2-4}$ has denominator $(x-2)(x+2)$ and is defined for $x\ne2$ and $x\ne-2$. The fraction $\dfrac1{x-2}$ is defined for $x\ne2$. The cross-products are $(x+2)(x-2)=x^2-4$ and $1\cdot(x^2-4)$, which are equal for every $x$. The two fractions therefore agree on the common domain, that is, for $x\ne2,-2$.

In the first fraction, the numerator and the denominator share the factor $x+2$. The simplified formula is also defined at $x=-2$, where it equals $\dfrac{1}{-2-2}=-\dfrac14$, while the first fraction is undefined at that point. The fractions therefore represent functions with different domains, even though their values agree at every point they have in common. The graph of the first fraction is the curve of $\dfrac1{x-2}$ with an open circle at horizontal coordinate $-2$.

::grafico{f="1/(x-2)" xmin=-6 xmax=7 ymin=-3 ymax=3 asintoti="x=2;y=0" punti="-2,-0.25,vuoto" titolo="The simplified formula retains the point excluded from the original expression"}
:::

:::esempio{titolo="An equation that gives an excluded candidate"}
A **solution** of an equation is a value of $x$ that makes the equality true. In the equation
$$
\frac{x+1}{x-2}=\frac{3}{x-2}
$$
the common domain is $x\ne2$. For every value in the domain the number $x-2$ is different from zero, so both sides can be multiplied by $x-2$. This gives $x+1=3$, and hence $x=3-1=2$. The only candidate is $x=2$. At that point the fractions are undefined, so $2$ is not a solution. The equation has **no solution**, that is, its solution set is empty.

The same conclusion is reached by studying the difference between the two sides. Its numerator is $(x+1)-3=x-2$, so the difference is $\dfrac{x-2}{x-2}$ and equals $1$ throughout the domain. The two sides are equal only where the difference equals zero, and this happens at no point.

The first method finds a candidate and checks whether it is allowed. The second compares the values directly on the domain where the equation is defined.
:::

## Complex fractions and applications

:::esempio{#composte titolo="Domain of a fraction that contains fractions"}
A **complex fraction** has other fractions in its numerator or denominator. In the expression $\dfrac{1-\dfrac1x}{1+\dfrac1x}$, both inner fractions $\dfrac1x$ require $x\ne0$. The overall numerator and denominator are each rewritten as a single fraction, using $1=\dfrac xx$:
$$
1-\frac1x=\frac{x-1}{x},\qquad 1+\frac1x=\frac{x+1}{x}.
$$
The overall denominator $\dfrac{x+1}{x}$ is the divisor, so it is required to be different from zero. It vanishes when its numerator vanishes, so $x=-1$ is excluded as well. The restrictions are
$$
\begin{cases}
x\ne0\\
x\ne-1
\end{cases}
$$
At the admissible points the overall numerator is multiplied by the reciprocal of the divisor. This gives
$$
\begin{aligned}
\frac{1-\frac1x}{1+\frac1x}
&=\frac{x-1}{x}\cdot\frac{x}{x+1}\\[6pt]
&=\frac{x-1}{x+1}.
\end{aligned}
$$
The domain is checked before canceling $x$. At $x=2$, the original quotient is $\dfrac{\frac12}{\frac32}$, which is $\dfrac12\cdot\dfrac23=\dfrac13$, and the final fraction gives the same value.
:::

:::esempio{#modello titolo="A formula with a domain restricted by the problem"}
A cyclist travels $18\,\mathrm{km}$ at a constant speed $v$, measured in kilometers per hour ($\mathrm{km/h}$). The duration of a trip is obtained by dividing the distance by the speed, so the trip lasts $t=\dfrac{18}{v}$ hours. The quotient is algebraically defined for $v\ne0$. In this problem, $v$ represents a positive speed, so only the part with $v>0$ is relevant.

For $v=9$ the result is $t=\dfrac{18}{9}=2$, while for $v=18$ it is $t=\dfrac{18}{18}=1$. Doubling the speed halves the time, because $\dfrac{18}{2v}$ is half of $\dfrac{18}{v}$. On the graph the horizontal axis shows $v$, the vertical axis shows $t$, and the two filled points are $(9,2)$ and $(18,1)$.

::grafico{f="18/x" xmin=4 xmax=22 ymin=0 ymax=6 nomi="v,t" punti="9,2,pieno;18,1,pieno" titolo="The domain of the problem allows positive speeds"}
:::

:::esempio{titolo="Finding a side length from an area"}
A rectangular garden bed has an area of $24\,\mathrm{m^2}$, that is, $24$ square meters. One side has length $x-1$ meters, while $b$ denotes the length of the other in meters. The area of a rectangle is the product of its two sides, so $(x-1)b=24$. Dividing both sides by $x-1$ gives $b=\dfrac{24}{x-1}$. The algebraic restriction is $x\ne1$.

Since $x-1$ is a side length, which is a positive number, the problem requires $x>1$. The value $x=0$ would give $x-1=-1$ and $b=-24$. The original equation would be satisfied, because $(-1)\cdot(-24)=24$, but the two lengths would be negative. At $x=5$, the sides measure $4$ and $6$ meters and their product gives the stated area.
:::
