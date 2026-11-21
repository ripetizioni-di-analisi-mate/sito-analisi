---
titolo: "Factoring polynomials"
sommario: "Common factors, product identities in reverse, trinomials, zeros, and checks for factorisations."
---

## Taking out a common factor

::::teorema{#comune titolo="Taking out the common factor"}
A **monomial** is a product of numbers and letters, such as $6x^2$. The number $6$ is its **coefficient** and $2$ is the exponent of the letter $x$. A **polynomial** is a sum of monomials, which are called the **terms** of the polynomial. **Factoring** a polynomial means writing it as a product. The expressions that are multiplied are the **factors**.

With numbers, $5\cdot2+5\cdot7=45$ and also $5\cdot(2+7)=5\cdot9=45$. The number $5$ multiplies both terms, so it is written only once in front of the sum. This rule is the **distributive property**, and it also holds for polynomials. If every term of a polynomial $P$ is the product of the same polynomial $M$ and another polynomial, then $M$ is a **common factor** and is taken out in front of the sum. With three terms $MA$, $MB$ and $MC$ this gives

$$
P=MA+MB+MC=M(A+B+C).
$$

The pattern is the same with two terms or with more than three. This equality is an **identity**, that is, it is true for every value given to the letters. The common factor is taken out of *all* the terms of the polynomial.

In a nonzero polynomial with integer coefficients, the greatest common factor is a monomial that is built in two steps.

- Its number is the **greatest common divisor (GCD)** of the coefficients, the largest integer that divides them all. The coefficients are taken in **absolute value**, that is, without their sign: the absolute value of $-8$ is $8$.
- For each letter, the exponent is the smallest one that the letter has in the terms. A letter that is missing from a term counts with exponent zero, because $x^0=1$, so it stays out of the common factor.

:::dimostrazione
By the distributive property, multiplying $M$ by each term of $A+B+C$ gives $MA$, $MB$ and $MC$, which are the terms of $P$ in the same order.

A monomial *divides* another monomial when the quotient, that is, the result of the division, is again a monomial with an integer coefficient. For example, $3x$ divides $6x^2$, because $6x^2=3x\cdot2x$. A monomial divides all the terms when its coefficient divides all the coefficients and the exponent of each of its letters is at most the exponent that the letter has in every term. The GCD of the coefficients and the smallest exponents satisfy both conditions.

Every other monomial that divides all the terms has a coefficient that is a common divisor of the coefficients, which therefore divides their GCD, and has exponents no larger than the smallest ones. It therefore divides the monomial built in the two steps.
:::
::::

:::esempio{titolo="Two rectangles with the same height"}
In the expression $6x^2+9x$, the GCD of the coefficients $6$ and $9$ is $3$ and the smallest exponent of $x$ is $1$. The common factor is therefore $3x$. The first term leaves $2x$, because $3x\cdot2x=6x^2$, and the second term leaves $3$, because $3x\cdot3=9x$. So

$$
6x^2+9x=3x\cdot 2x+3x\cdot 3=3x(2x+3).
$$

If $x>0$, the two terms are the areas of two rectangles of height $3x$, with bases $2x$ and $3$. Putting them side by side gives a rectangle with the same height and with base $2x+3$. The diagram uses $x=2$, so the two pieces have bases $4$ and $3$ and height $6$.

::struttura{linee="0,0 4,0 4,6 0,6 0,0" poligoni="4,0 7,0 7,6 4,6" riferimento=0 etichette="2,-0.55,2x;5.5,-0.55,3;-0.65,3,3x" titolo="Two rectangles with the same height"}
:::

:::attenzione
In an equality, the **left-hand side** is the expression before the equals sign and the **right-hand side** is the one after it. The identity $-4x^2-8x=-4x(x+2)$ is obtained by recognising the products $-4x^2=-4x\cdot x$ and $-8x=-4x\cdot2$. Only multiplications appear, so the identity holds for all values of $x$. At $x=0$ both sides equal $0$.

The fraction $\dfrac{-4x^2-8x}{-4x}$ requires $x\ne0$ instead, because at $x=0$ the denominator equals zero and division by zero is not defined.

A **binomial** is a polynomial with two terms. Taking out $-4x$, with the minus sign, leaves the binomial $x+2$, which has positive coefficients. Taking out $4x$ gives $4x(-x-2)$, which is the same polynomial.
:::

:::esempio{titolo="A variable appearing in just one term"}
In $12x^3y+18x^2+6x^2z$, the GCD of the coefficients $12$, $18$ and $6$ is $6$. The letter $x$ appears with the exponents $3$, $2$ and $2$, so its smallest power is $x^2$. The letter $y$ appears only in the first term and $z$ only in the third, so neither of them enters the common factor. The common factor is $6x^2$ and the remaining parts are

$$
\frac{12x^3y}{6x^2}=2xy,\qquad \frac{18x^2}{6x^2}=3,\qquad \frac{6x^2z}{6x^2}=z.
$$

This gives

$$
12x^3y+18x^2+6x^2z=6x^2(2xy+3+z).
$$

The term $3$ in the remaining factor is a **constant term**, that is, a term without letters. It comes from the term $18x^2$, which contains $x$ exactly to the second power. If $x^3$ were taken out, the term $18x^2$ would leave $\dfrac{18x^2}{x^3}=\dfrac{18}{x}$, which has the letter $x$ in the denominator and so is not a polynomial. With the factor $6x^2$ every remaining part is a monomial.
:::

## Factoring by grouping

::::teorema{#parziale titolo="The same factor in different groups"}
In **factoring by grouping**, the terms of a polynomial are split into groups, and in each group a factor common only to the terms of that group is taken out. If after this step the groups are written as $UQ$ and $VQ$, that is, they contain the same factor $Q$, their sum is

$$
UQ+VQ=Q(U+V).
$$

The factor $Q$ is any polynomial, even one with more than one term, such as $y+3$.

:::dimostrazione
By the **commutative property** of multiplication, changing the order of the factors leaves the result unchanged. So $UQ=QU$ and $VQ=QV$. By the distributive property, the factor $Q$ is taken out in front of the sum.

$$
UQ+VQ=QU+QV=Q(U+V).
$$

These steps contain only multiplications and no division by $Q$. The equality therefore also holds for the values of the letters that make $Q$ equal to zero.
:::
::::

:::esempio{titolo="Four products in an area diagram"}
In $xy+3x+2y+6$, no factor is common to all four terms. In the group of the two terms that contain $x$, the factor $x$ is taken out, which gives $xy+3x=x(y+3)$. In the group of the two remaining terms, the factor $2$ is taken out, which gives $2y+6=2(y+3)$. The two groups contain the same binomial $y+3$, which is taken out in turn.

$$
\begin{aligned}
xy+3x+2y+6
&=x(y+3)+2(y+3)\\[6pt]
&=(x+2)(y+3).
\end{aligned}
$$

The diagram shows, for $x=4$ and $y=5$, a rectangle divided into four pieces. The base is divided into two parts of length $y$ and $3$, the height into two parts of length $x$ and $2$. The four pieces have areas $xy$, $3x$, $2y$ and $6$, that is, the four terms of the polynomial.

The two pieces in the same row have the same height, and the two pieces in the same column have the same base. The groups used in the calculation are the two rows. Grouping by column gives $xy+2y=y(x+2)$ and $3x+6=3(x+2)$, which leads to the same product with the factors in reverse order, $(y+3)(x+2)$.

::struttura{linee="0,0 5,0 5,4 0,4 0,0;0,4 5,4 5,6 0,6 0,4" poligoni="5,0 8,0 8,4 5,4;5,4 8,4 8,6 5,6" riferimento=0 etichette="2.5,-0.55,y;6.5,-0.55,3;-0.65,2,x;-0.65,5,2" titolo="The product of the side lengths equals the sum of the four areas"}
:::

:::esempio{titolo="Opposite binomials"}
Two polynomials are **opposites** when they have the same terms with all the signs changed. In $3x(x-2)+4(2-x)$, the binomials $x-2$ and $2-x$ are opposites, that is, $2-x=-(x-2)$. The second group is therefore rewritten as $4(2-x)=-4(x-2)$. Now the first group contains $3x$ times $x-2$ and the second contains $-4$ times the same factor.

$$
\begin{aligned}
3x(x-2)+4(2-x)&=3x(x-2)-4(x-2)\\[6pt]
&=(x-2)(3x-4).
\end{aligned}
$$

When the first choice of groups leaves different factors, the order of the terms is changed. In $xy+3x+2y+6$, the groups $xy+6$ and $3x+2y$ have no factor to take out, whereas the groups $xy+3x$ and $2y+6$ both give the binomial $y+3$.
:::

## Differences of squares and perfect square trinomials

::::teorema{#quadrati titolo="Product identities in reverse"}
A **special product** is a product of polynomials whose result has a fixed form. With numbers, $7^2-3^2=49-9=40$ and also $(7-3)(7+3)=4\cdot10=40$.

For every pair of polynomials $A$ and $B$ (in particular numbers or monomials), the following identities hold.

$$
\begin{aligned}
A^2-B^2&=(A-B)(A+B),\\[4pt]
A^2+2AB+B^2&=(A+B)^2,\\[4pt]
A^2-2AB+B^2&=(A-B)^2.
\end{aligned}
$$

Read from left to right, these identities factor the left-hand side. The expressions $A$ and $B$ that are squared are the **bases** of the squares.

- In the first identity, the polynomial is a **difference of squares**. The bases determine the two factors $A-B$ and $A+B$, called **conjugates** because they differ only in the sign between the two terms.
- In the other two identities, the polynomial is a **trinomial**, that is, it has three terms. Two terms are the squares $A^2$ and $B^2$. The trinomial is the square of a binomial when the middle term is the **double product** of the bases: with $2AB$ it is the square of $A+B$, with $-2AB$ it is the square of $A-B$.

In $x^2+6x+9$, the bases are $x$ and $3$ and the double product is $2\cdot x\cdot3=6x$, so $x^2+6x+9=(x+3)^2$. In the same way, $x^2-6x+9=(x-3)^2$.

:::dimostrazione
Each product is expanded by multiplying every term of the first factor by every term of the second. The **cross terms** are the products of $A$ and $B$. In the first identity, the cross terms are $AB$ and $-AB$, so their sum is zero.

$$
(A-B)(A+B)=A^2+AB-AB-B^2=A^2-B^2.
$$

Expanding $(A+B)(A+B)$ gives the squares $A^2$ and $B^2$ and two cross terms equal to $AB$.

$$
(A+B)(A+B)=A^2+AB+AB+B^2=A^2+2AB+B^2.
$$

In the product $(A-B)(A-B)$, both cross terms are $-AB$, while $(-B)(-B)=B^2$.

$$
(A-B)(A-B)=A^2-AB-AB+B^2=A^2-2AB+B^2.
$$
:::
::::

:::esempio{titolo="The difference of two areas"}
For $A\ge B\ge0$, the number $A^2-B^2$ is the area left after removing a square of side $B$ from a square of side $A$. In the diagram $A=6$ and $B=2$, and the small square is removed from the upper-right corner. The remaining area is $36-4=32$.

The remaining region is divided into two rectangles. The lower one has base $6$ and height $4$, the upper one has base $4$ and height $2$. After a quarter turn of the upper piece, its height becomes $4$ and its base becomes $2$. Placing the two pieces, which now have the same height, side by side gives a rectangle of height $6-2=4$ and width $6+2=8$. Its area is $4\cdot8=32$, that is, $(A-B)(A+B)$.

::struttura{linee="0,0 6,0 6,6 0,6 0,0;6,4 4,4 4,6" poligoni="0,0 6,0 6,4 0,4;0,4 4,4 4,6 0,6" riferimento=0 etichette="3,-0.56,6;-0.65,2,4;5,5,2" titolo="The smaller square occupies the upper-right corner"}

The same relationship applies to expressions with letters. In $9x^2-16y^2$, the first term is the square of $3x$, because $(3x)^2=9x^2$, and the second is the square of $4y$, because $(4y)^2=16y^2$. The bases are $3x$ and $4y$, so

$$
9x^2-16y^2=(3x-4y)(3x+4y).
$$
:::

:::attenzione
A trinomial with two square terms is the square of a binomial only if the middle term is also the required one. In $x^2-4x+9$, the bases are $x$ and $3$, because $9=3^2$. The double product of the bases is $2\cdot x\cdot3=6x$, so $(x-3)^2=x^2-6x+9$, with middle term $-6x$. The given trinomial has $-4x$ instead, so it is different from $(x-3)^2$.

At $x=3$ the trinomial equals $9-12+9=6$, while the square equals $(3-3)^2=0$. In the graph the curves of the two expressions are distinct, and above $x=3$ the points of height $0$ and $6$ are marked.

::grafico{f="(x-3)^2;x^2-4*x+9" xmin=0 xmax=5 ymin=-1 ymax=11 punti="3,0,pieno;3,6,pieno" titolo="Changing the middle term changes the value at x = 3"}
:::

## Trinomials with leading coefficient one

::::teorema{#trinomio titolo="Sum and product in the linear factors"}
In $x^2+5x+6$, the **degree** of a term is the exponent of $x$. The **leading coefficient** is the coefficient of the term of highest degree, here $1$. The first-degree term $5x$ is also called the **linear** term. The number $6$, without $x$, is the **constant term**. A **linear factor** is a first-degree binomial, such as $x+2$. A polynomial with leading coefficient $1$ is called **monic**.

Multiplying two monic linear factors gives

$$
(x+2)(x+3)=x^2+3x+2x+6=x^2+5x+6.
$$

The coefficient $5$ is the sum $2+3$ and the constant term $6$ is the product $2\cdot3$.

Let $b$, $c$, $r$, $s$ be **real numbers**, that is, integers, fractions or numbers such as $\sqrt2$. The trinomial $x^2+bx+c$ equals $(x+r)(x+s)$ exactly when

$$
\begin{cases}
r+s=b\\
rs=c
\end{cases}
$$

Factoring the trinomial therefore means finding two numbers with sum $b$ and product $c$. When the factors must have integer coefficients and $c\ne0$, the two numbers are integer divisors of $c$, positive or negative. The pairs of divisors with product $c$ are then examined, and each sum is calculated.

:::dimostrazione
Expanding the two binomials gives

$$
(x+r)(x+s)=x^2+sx+rx+rs=x^2+(r+s)x+rs.
$$

The coefficient of $x$ comes from the two cross terms $sx$ and $rx$. The constant term is the single product $rs$. Two polynomials are equal for every value of $x$ only if they have the same coefficients. If $x^2+bx+c$ equals $(x+r)(x+s)$, then $b=r+s$ and $c=rs$. Conversely, if $r+s=b$ and $rs=c$, the expansion written above is exactly $x^2+bx+c$.
:::
::::

:::osservazione
The signs of $b$ and $c$ indicate the signs of the two numbers.

- If $c>0$, the two numbers have the same sign, because their product is positive. When $b>0$ they are both positive: in $x^2+5x+6$ they are $2$ and $3$. When $b<0$ they are both negative: in $x^2-12x+11$ they are $-1$ and $-11$.
- If $c<0$, the two numbers have opposite signs. The sum $b$ then has the sign of the number with the larger absolute value: in $x^2-5x-14$ the numbers are $2$ and $-7$, and the sum $-5$ is negative like $-7$.
- If $c=0$, one of the two numbers is zero and the other is $b$. The trinomial reduces to $x^2+bx$, and taking out the common factor gives $x(x+b)$. For example, $x^2+5x=x(x+5)$.
:::

:::esempio{titolo="Divisor pairs and sign choices"}
In $x^2-5x-14$, the two integers must have product $-14$ and sum $-5$. The product is negative, so the two numbers have opposite signs. The sum is negative, so the number with the larger absolute value is the negative one. The positive divisors of $14$ are $1$, $2$, $7$ and $14$, and there are two pairs to examine.

| Pair | Sum | Product |
|---|---:|---:|
| $1,-14$ | $-13$ | $-14$ |
| $2,-7$ | $-5$ | $-14$ |

The pair with sum $-5$ is $2,-7$, so

$$
x^2-5x-14=(x+2)(x-7).
$$

A **zero** of a polynomial is a value of $x$ at which the polynomial equals zero. The expanded form $x^2-5x-14$ shows the coefficient $-5$ of the linear term. The factored form shows the zeros: the factor $x+2$ equals zero at $x=-2$ and the factor $x-7$ at $x=7$.

The graph of a second-degree polynomial is a curve called a **parabola**. In the diagram, the parabola meets the $x$-axis at the two zeros.

::grafico{f="(x+2)*(x-7)" xmin=-4 xmax=9 ymin=-24 ymax=24 punti="-2,0,pieno;7,0,pieno" titolo="The two factors predict where the parabola meets the x-axis"}
:::

:::attenzione
The pairs of divisors are finite in number, so all of them are examined. When none has the required sum, the trinomial has no linear factors with integer coefficients. In $x^2+x+6$, the product $6$ and the sum $1$ are positive, so the two numbers would both be positive. The only pairs are $1,6$ and $2,3$, with sums $7$ and $5$. Neither sum is $1$, so $x^2+x+6$ cannot be factored into factors with integer coefficients.
:::

:::osservazione
In the trinomial $x^2+bx+c$ with $b=0$, the linear term is missing.

- When $b=0$ and $c>0$, no pair of integers satisfies the two conditions, because two integers with a positive product are nonzero and have the same sign, so their sum is nonzero. An example is $x^2+4$.
- When $b=0$ and $c<0$, the two numbers have sum zero, so they are opposites, that is, of the form $k$ and $-k$. Their product is $-k^2=c$, so $-c$ has to be the square of an integer. In $x^2-49$ we have $-c=49=7^2$, the bases are $x$ and $7$, and $x^2-49=(x-7)(x+7)$.

The number $\sqrt2$ is the positive real number whose square is $2$, and it is neither an integer nor a fraction. In $x^2-2$, the number $2$ is not the square of an integer, but when real coefficients are allowed we obtain $x^2-2=(x-\sqrt2)(x+\sqrt2)$. For this reason, an exercise states in which set the coefficients of the factors are sought, that is, among the integers or among the real numbers.
:::

## Trinomials with leading coefficient other than one

::::teorema{#trinomio-generale titolo="Splitting the linear term"}
Let $a$, $b$, $c$ be integers with $a\ne0$. To factor $ax^2+bx+c$ into two linear factors with integer coefficients, one looks for two integers $m$ and $n$ such that

$$
\begin{cases}
m+n=b\\
mn=ac
\end{cases}
$$

The required product is $ac$, that is, the leading coefficient times the constant term. Once a pair is found, the first-degree term is written as a sum of two terms, $bx=mx+nx$, and the four terms obtained are factored by grouping.

:::dimostrazione
A factorisation always provides a pair $m$, $n$. Indeed, expanding a product of two linear factors with integer coefficients gives

$$
(ux+v)(wx+z)=uw\,x^2+(uz+vw)x+vz.
$$

Comparing the coefficients with those of $ax^2+bx+c$ gives $a=uw$, $b=uz+vw$ and $c=vz$. The numbers $m=uz$ and $n=vw$ have sum $b$ and product $uz\cdot vw=uw\cdot vz=ac$.

Conversely, a pair $m$, $n$ with $m+n=b$ and $mn=ac$ gives a factorisation. Each step is followed on the case $2x^2+7x+3$, with $m=6$ and $n=1$.

1. Let $d$ be the GCD of $|a|$ and $|m|$, where the bars denote the absolute value. Write $a=d\,a_1$ and $m=d\,m_1$. The integers $a_1$ and $m_1$ are **coprime**, that is, their GCD is $1$, because the common divisors are already contained in $d$. In the numerical case $d=2$, $a_1=1$ and $m_1=3$.
2. From $mn=ac$ it follows that $d\,m_1n=d\,a_1c$. Dividing both sides by $d$ gives $m_1n=a_1c$.
3. The integer $a_1$ divides the product $m_1n$ and is coprime to $m_1$. An integer that divides a product and is coprime to one of the two factors divides the other factor, so $a_1$ divides $n$. Write $n=a_1e$, with $e$ an integer. In the numerical case $1=1\cdot e$, so $e=1$.
4. Substituting $n=a_1e$ in step 2 gives $m_1a_1e=a_1c$. Dividing by $a_1$ gives $c=m_1e$.
5. The trinomial with its first-degree term split is then written as

$$
\begin{aligned}
ax^2+mx+nx+c&=d\,a_1x^2+d\,m_1x+a_1e\,x+m_1e\\[6pt]
&=dx(a_1x+m_1)+e(a_1x+m_1)\\[6pt]
&=(dx+e)(a_1x+m_1).
\end{aligned}
$$

In the numerical case the two groups are $2x(x+3)$ and $1\cdot(x+3)$.
:::
::::

:::esempio{titolo="The pair that gives the linear coefficient"}
For $2x^2+7x+3$, the product $ac$ is $2\cdot3=6$ and the required sum is $7$. The pairs of positive integers with product $6$ are $1,6$ and $2,3$, with sums $7$ and $5$. So $7x$ is written as $6x+x$, and $2x$ is taken out of the first two terms.

$$
\begin{aligned}
2x^2+7x+3&=2x^2+6x+x+3\\[6pt]
&=2x(x+3)+(x+3)\\[6pt]
&=(2x+1)(x+3).
\end{aligned}
$$

In the second group the factor taken out is $1$, because $x+3=1\cdot(x+3)$. As a check, the cross terms of $(2x+1)(x+3)$ are $2x\cdot3=6x$ and $1\cdot x=x$, with sum $7x$.

The factor $x+3$ equals zero at $x=-3$. The factor $2x+1$ equals zero when $2x=-1$, that is, at $x=-\dfrac12$. This zero is a fraction because the coefficient of $x$ in the factor is $2$. The graph meets the $x$-axis at these two points.

::grafico{f="(2*x+1)*(x+3)" xmin=-4 xmax=1 ymin=-4 ymax=12 punti="-3,0,pieno;-0.5,0,pieno" titolo="An integer zero and a fractional zero of the same trinomial"}
:::

:::esempio{titolo="A preliminary step for a negative leading coefficient"}
In $-4x^2+5x+6$ the leading coefficient is negative. The factor $-1$ is taken out, that is, the sign of every term is changed and a minus sign is written in front: $-4x^2+5x+6=-(4x^2-5x-6)$. In the trinomial $4x^2-5x-6$, the product of the leading coefficient and the constant term is $4\cdot(-6)=-24$ and the required sum is $-5$. The numbers $-8$ and $3$ have product $-24$ and sum $-5$, so $-5x=-8x+3x$.

$$
\begin{aligned}
-4x^2+5x+6&=-(4x^2-8x+3x-6)\\[6pt]
&=-\bigl(4x(x-2)+3(x-2)\bigr)\\[6pt]
&=-(4x+3)(x-2).
\end{aligned}
$$

The minus sign taken out at the start multiplies the entire product, so it stays in the result. At $x=0$ the result equals $-(0+3)(0-2)=-3\cdot(-2)=6$, which coincides with the constant term of the original trinomial. The term of highest degree in the result is $-(4x\cdot x)=-4x^2$, with the negative sign of the original trinomial.
:::

## Multi-step factorisations

:::esempio{#completa titolo="Taking out the monomial and examining the remaining factor"}
Factoring a polynomial *completely* means continuing until no factor can be factored further. In $3x^3-3x$, the common monomial $3x$ is taken out first. The remaining factor, $x^2-1$, has two terms separated by a minus sign, and the number $1$ is a square, because $1=1^2$. It is therefore a difference of squares with bases $x$ and $1$.

$$
\begin{aligned}
3x^3-3x&=3x(x^2-1)\\[6pt]
&=3x(x-1)(x+1).
\end{aligned}
$$

The factor $3x$ taken out at the first step stays written in the second step too, while $x^2-1$ is factored. The three zeros come from three different factors: the factor $3x$ equals zero at $x=0$, the factor $x-1$ at $x=1$ and the factor $x+1$ at $x=-1$. The graph meets the $x$-axis at these three points.

::grafico{f="3*x^3-3*x" xmin=-1.7 xmax=1.7 ymin=-10 ymax=10 punti="-1,0,pieno;0,0,pieno;1,0,pieno" titolo="The common factor gives the zero at the origin"}
:::

:::osservazione
In $x^4-16$, the first term is the square of $x^2$, because $(x^2)^2=x^4$, and the second is the square of $4$. After the first step, the factor $x^2-4$ is still a difference of squares, with bases $x$ and $2$.

$$
\begin{aligned}
x^4-16&=(x^2-4)(x^2+4)\\[6pt]
&=(x-2)(x+2)(x^2+4).
\end{aligned}
$$

The square of a real number is greater than or equal to zero, so $x^2+4\ge4$ for every real $x$. A linear factor with real coefficients, such as $x-k$, equals zero at $x=k$ and would therefore give a real zero. Since $x^2+4$ has no real zeros, it has no linear factors with real coefficients either.

The same check applies to a trinomial with a first-degree term after writing it as the square of a binomial plus a number. This operation is called **completing the square**. In $x^2-8x+20$, the term $-8x$ is the double product of $x$ and $-4$, and $(x-4)^2=x^2-8x+16$. Since $20=16+4$, we have $x^2-8x+20=(x-4)^2+4$. The trinomial is therefore always at least $4$, so it has no real zeros and no linear factors with real coefficients.

The polynomial $x^4-5x^2+4$ also contains the square of $x^2$. Setting $u=x^2$ gives the trinomial $u^2-5u+4=(u-1)(u-4)$. Going back to $x$, we have $x^4-5x^2+4=(x^2-1)(x^2-4)=(x-1)(x+1)(x-2)(x+2)$.

Where a factorisation ends therefore depends on the set in which the coefficients are sought and on the degree of the remaining factors.
:::

## Zeros and signs of products

::::teorema{#zeri titolo="Zeros of a product and repeated factors"}
A polynomial *vanishes* at a number when it equals zero there. Consider a product of polynomials with real coefficients, evaluated at real values of $x$. By the **zero-product property**, a zero of the product is a zero of at least one factor, and every zero of a factor is a zero of the product. The zeros of $(x+11)(x-1)$ are therefore $-11$ and $1$.

An **interval** is a stretch of the number line, such as the one between two zeros. The sign of the product on an interval is obtained from the signs of all the factors by the **rule of signs**: the product is negative when the number of negative factors is odd, and positive otherwise.

A factor is *repeated* when it appears more than once, like $x-1$ in $(x-1)^2$. A factor raised to an even exponent is positive both to the left and to the right of its zero, so at that zero the product keeps its sign. A zero that comes from a factor appearing only once is called a **simple zero**.

:::dimostrazione
If a factor equals zero, the product equals zero, as in $3\cdot0=0$. If all the factors are nonzero, their product is also nonzero.

A linear factor $x-k$ is negative for $x<k$ and positive for $x>k$, so it changes sign only at its own zero $k$. Between two consecutive zeros of the product, every linear factor keeps the same sign and, by the rule of signs, so does the product.

A factor raised to an even exponent is the product of an even number of equal factors, so away from its zero it is positive by the rule of signs.
:::
::::

:::esempio{titolo="One zero with a sign change and one without"}
A zero of a polynomial is also called a **root**. For $P(x)=(x-1)^2(x+2)$, the zeros are $1$, from the factor $(x-1)^2$, and $-2$, from the factor $x+2$. The two zeros divide the number line into three intervals. The table gives the sign of the two factors and of the product on each interval.

| Interval | $(x-1)^2$ | $x+2$ | $P(x)$ |
|---|---:|---:|---:|
| $x<-2$ | $+$ | $-$ | $-$ |
| $-2<x<1$ | $+$ | $+$ | $+$ |
| $x>1$ | $+$ | $+$ | $+$ |

To the left of $-2$ the linear factor $x+2$ is negative and to the right it is positive, so the product changes sign at $-2$. To the left and to the right of $1$ both factors are positive, so the product stays positive. In the graph, therefore, the curve crosses the $x$-axis at $-2$ and at $1$ touches the axis and stays above it.

::grafico{f="(x-1)^2*(x+2)" xmin=-3 xmax=2.4 ymin=-17 ymax=12 punti="-2,0,pieno;1,0,pieno" titolo="The product changes sign only at the simple zero"}
:::

## GCD and LCM of monomials

::::teorema{#mcd-mcm titolo="Comparing coefficients and exponents"}
With numbers, the greatest common divisor (GCD) of $12$ and $18$ is $6$, the largest integer that divides both. The **least common multiple (LCM)** of $12$ and $18$ is $36$, the smallest positive integer that is a multiple of both.

The same notions apply to two monomials with positive integer coefficients.

- The **GCD of the two monomials** has the GCD of the coefficients as its coefficient and, for each letter, the smaller of the two exponents.
- The **LCM of the two monomials** has the LCM of the coefficients as its coefficient and, for each letter, the larger of the two exponents.

A letter that is missing from a monomial counts with exponent zero. For $4x$ and $6xz$, the GCD is $2x$ and the LCM is $12xz$.

:::dimostrazione
A common divisor has a coefficient that divides both coefficients and, for each letter, an exponent at most equal to both given exponents. The GCD of the coefficients and the smaller exponents are the largest values that satisfy these conditions.

A common multiple has instead a coefficient that is a multiple of both coefficients and, for each letter, an exponent at least equal to both given exponents. The LCM of the coefficients and the larger exponents are the smallest values that satisfy these conditions.
:::
::::

:::esempio{titolo="Why the minimum and maximum are used"}
Consider $12x^3y^2$ and $18x^2y^4$. In a common divisor the letter $x$ appears at most to the second power, because the second monomial contains only $x^2$. In a common multiple the letter $y$ appears at least to the fourth power, because the second monomial contains $y^4$. The full comparison gives

$$
\begin{aligned}
\operatorname{gcd}(12x^3y^2,18x^2y^4)&=6x^2y^2,\\[4pt]
\operatorname{lcm}(12x^3y^2,18x^2y^4)&=36x^3y^4.
\end{aligned}
$$

Dividing the two monomials by the GCD gives the quotients $2x$ and $3y^2$, because $12x^3y^2=6x^2y^2\cdot2x$ and $18x^2y^4=6x^2y^2\cdot3y^2$. The GCD found is therefore a factor of both monomials. The LCM is obtained by multiplying the first monomial by $3y^2$ or the second by $2x$, because $12x^3y^2\cdot3y^2=36x^3y^4$ and $18x^2y^4\cdot2x=36x^3y^4$.

The same comparison is used to choose the common denominator of two rational expressions, that is, fractions with polynomials in numerator and denominator.
:::

:::osservazione{titolo="Recovering the LCM from the product and GCD"}
A prime number is an integer greater than $1$ that is divisible only by $1$ and by itself. The **prime factors** of an integer are the prime numbers that divide it, such as $2$ and $3$ in $12=2^2\cdot3$ and in $18=2\cdot3^2$. For every prime factor of the coefficients and for every letter, the smaller exponent added to the larger one gives the sum of the two original exponents. In the product of two powers with the same base, the exponents are added. Thus, for two monomials $M$ and $N$ with positive integer coefficients,

$$
\operatorname{gcd}(M,N)\cdot\operatorname{lcm}(M,N)=MN.
$$

This identity gives the LCM when the product and the GCD are known. If the product is $60x^5y^3$ and the GCD is $2x^2y$, the coefficients are divided and the exponents of each letter are subtracted:

$$
\operatorname{lcm}(M,N)=\frac{60x^5y^3}{2x^2y}=30x^{5-2}y^{3-1}=30x^3y^2.
$$

The identity also holds when a letter appears in only one of the two monomials. In that case its smaller exponent is zero and the larger one is the exponent with which the letter appears, so the entire power goes to the LCM.
:::

## Checking a factorisation

:::osservazione{#controlli titolo="Checking every coefficient"}
**Expanding** a product means carrying out the multiplications and adding the terms with the same power of $x$. A factorisation is correct when the expansion of the product has the same coefficients as the given polynomial. The leading coefficient, the intermediate terms and the constant term are compared. For example,

$$
(2x-1)(x+4)=2x^2+8x-x-4=2x^2+7x-4.
$$

The leading coefficient is $2$, the linear term is $8x-x=7x$ and the constant term is $-4$. The product $(2x-1)(x+4)$ is therefore a factorisation of $2x^2+7x-4$.
:::

:::attenzione
Substituting a number for $x$ is a partial check. If the two expressions give different values, the factorisation contains an error. If they give the same value for one or two numbers, the expansion still has to be compared.

The expressions $x^2-1$ and $x-1$ both equal $-1$ at $x=0$ and both equal zero at $x=1$. At $x=2$ they equal $3$ and $1$ instead. The first two checks were therefore insufficient to conclude that the expressions are equal for every $x$. In the graph the two curves share the points above $x=0$ and $x=1$ and have different heights above $x=2$.

::grafico{f="x^2-1;x-1" xmin=-1.5 xmax=3 ymin=-3 ymax=8 punti="0,-1,pieno;1,0,pieno;2,3,pieno;2,1,pieno" titolo="Two shared points and distinct values at x = 2"}
:::
