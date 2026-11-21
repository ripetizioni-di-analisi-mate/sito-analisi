---
titolo: "Special products"
sommario: "Identities, proofs, and applications of squares and cubes for recognising and rewriting expressions."
---

## Identities and particular equalities

:::definizione{#identita titolo="Identities between expressions"}

An **algebraic expression** is a piece of writing made of numbers, letters, and operations, such as $x(x+2)$ or $x^2+2x$. Each letter stands for a **real number**, that is, any number: positive, negative, or zero, whole, a fraction, or a decimal.

An **identity** is an equality between two expressions that is true for *every* value given to the letters. For example, $x(x+2)=x^2+2x$ is an identity. For $x=3$ the two expressions equal $3\cdot5=15$ and $9+6=15$. For $x=-1$ they equal $(-1)\cdot1=-1$ and $1-2=-1$.

These checks cover only two values. The equality holds for all values of $x$ because of the **distributive law**: to multiply a number by a sum, multiply the number by each term of the sum and add the results. In symbols, $x(x+2)=x\cdot x+x\cdot2=x^2+2x$.

- The **terms** of a sum are the things being added. The **factors** are the things being multiplied. In $x(x+2)$ the factors are $x$ and $x+2$, and the terms of $x+2$ are $x$ and $2$.
- A **monomial** is a product of a number and letters, such as $4x^2$ or $-12x$. The number is the **coefficient** of the monomial. A monomial with no letters, such as $9$, is called a **constant term**.
- A **polynomial** is a sum of monomials, such as $4x^2-12x+9$. A polynomial with two monomials is a **binomial**, and one with three monomials is a **trinomial**.

In a polynomial the letters appear only in sums and products, so each letter can be given any real value. **Special products** are identities between polynomials that give the result of some very frequent multiplications, such as the square of a binomial, without redoing the calculation every time.

Two expressions linked by an identity can replace each other inside a sum, a product, or a formula. Since they have the same value for every value of the letters, the result of the calculation stays the same.

:::

:::attenzione{titolo="An agreeing value and a counterexample"}

The expressions $(x+2)^2$ and $x^2+4$ have the same value for $x=0$, because $(0+2)^2=4$ and $0^2+4=4$. For $x=1$, however, they equal $(1+2)^2=9$ and $1^2+4=5$.

The agreement for $x=0$ concerns a single value. A **counterexample** is a value of the letters for which an equality is false. The value $x=1$ is a counterexample, and a single counterexample is enough to conclude that $(x+2)^2=x^2+4$ is not an identity.

The difference between the two values found for $x=1$ is $9-5=4$, that is, $2\cdot1\cdot2$. It is the value of the term $2\cdot x\cdot2=4x$, which appears in $(x+2)^2=x^2+4x+4$ and is missing in $x^2+4$. This term is the doubled product in the square of a binomial.

In the graph both curves pass through the point with $x=0$ and height $4$. At $x=1$ a vertical segment of length $4$ joins the heights $9$ and $5$.

::grafico{f="(x+2)^2;x^2+4" xmin=-1.5 xmax=2.5 ymin=-1 ymax=21 punti="0,4,pieno;1,9,pieno;1,5,pieno" segmenti="1,5,1,9" titolo="The curves agree at $x=0$ and have different values at $x=1$"}

:::

## Square of a binomial

::::teorema{#quadrati titolo="Square of a sum and a difference"}

The square of a number is the number multiplied by itself, for example $13^2=13\cdot13=169$. The following two identities hold for all real numbers $a$ and $b$. In symbols this is written $a,b\in\mathbb R$, where $\mathbb R$ is the set of real numbers and $\in$ is read "belongs to".

$$
\begin{aligned}
(a+b)^2&=a^2+2ab+b^2,\\[6pt]
(a-b)^2&=a^2-2ab+b^2.
\end{aligned}
$$

To **expand** a product or a power means to carry out the multiplications until a sum of monomials is obtained. The sum obtained is the **expansion**. The expansion of $(a+b)^2$ contains the squares $a^2$ and $b^2$ of the two terms and the **mixed term** $2ab$, that is, the term containing both $a$ and $b$. The mixed term is twice the product $ab$, and for this reason it is called the **doubled product**.

In the second expansion the mixed term has a minus sign, because it contains the factor $-b$ only once. The square $b^2$ has a plus sign in both formulas, because $(-b)^2=(-b)\cdot(-b)=b^2$.

:::dimostrazione

By the definition of a square, $(a+b)^2=(a+b)(a+b)$. By the distributive law each term of the first binomial is multiplied by each term of the second, which gives four products.

$$
\begin{aligned}
(a+b)^2&=(a+b)(a+b)\\[6pt]
&=a^2+ab+ba+b^2\\[6pt]
&=a^2+2ab+b^2.
\end{aligned}
$$

The final step uses the commutative law of multiplication, $ab=ba$, so $ab+ba=2ab$.

Since $-b$ is also a real number, the formula just proved applies to the sum $a+(-b)$, which equals $a-b$.

$$
\begin{aligned}
(a-b)^2&=a^2+2\cdot a\cdot(-b)+(-b)^2\\[6pt]
&=a^2-2ab+b^2.
\end{aligned}
$$

:::

::::

:::esempio{titolo="A square divided into four regions"}

When $a$ and $b$ are positive (in symbols $a,b>0$), the two numbers are read as lengths. The area of a square is its side multiplied by itself, so the square of side $a+b$ has area $(a+b)^2$.

Each side of the square is divided into a part of length $a$ and a part of length $b$. A vertical line and a horizontal line through the division points form four regions.

- Two regions, at opposite corners, are squares of sides $a$ and $b$. Their areas are $a^2$ and $b^2$.
- The other two regions are rectangles with sides $a$ and $b$. Each has area $ab$, so together they have area $2ab$.

The area of the large square is the sum of the four areas, that is, $a^2+2ab+b^2$. For example, with $a=4$ and $b=2$ the side is $6$ and the area is $6^2=36=16+8+8+4$.

The figure requires positive lengths. The proof by the distributive law also holds when $a$ or $b$ is zero or negative.

::struttura{linee="0,0 6,0 6,6 0,6 0,0;4,0 4,6;0,4 6,4" poligoni="4,0 6,0 6,4 4,4;0,4 4,4 4,6 0,6" etichette="2,2,a²;5,2,ab;2,5,ab;5,5,b²;2,-0.65,a;5,-0.65,b;-0.65,2,a;-0.65,5,b" riferimento=0 titolo="The two rectangles have the same area"}

:::

:::esempio{titolo="Two terms with coefficients"}

The binomial $2x-3$ is the sum of the terms $2x$ and $-3$, each taken with its own sign. In the formula $(a+b)^2=a^2+2ab+b^2$ we therefore set $a=2x$ and $b=-3$.

- The square of the first term is $(2x)^2=2x\cdot2x=4x^2$. The coefficient $2$ is squared too.
- The doubled product is $2\cdot2x\cdot(-3)=-12x$. It is negative because it contains the negative factor $-3$ only once.
- The square of the second term is $(-3)^2=(-3)\cdot(-3)=9$. It is positive because it contains the negative factor twice.

$$
(2x-3)^2=4x^2-12x+9.
$$

For $x=1$ the binomial equals $2\cdot1-3=-1$ and its square equals $(-1)^2=1$. The expansion gives the same value, $4-12+9=1$, and this confirms the signs of the three terms.

:::

:::attenzione{titolo="Opposite of a square and square of an opposite"}

The **opposite** of a number is the number with its sign changed: the opposite of $5$ is $-5$. The binomial $3-x$ is the opposite of $x-3$, because $-(x-3)=-x+3=3-x$.

The expressions $-(x-3)^2$ and $(3-x)^2$ indicate two different calculations.

- In $-(x-3)^2$ the square of $x-3$ is calculated first and then the sign of the result is changed. The result is the opposite of a square, which is negative or zero.
- In $(3-x)^2$ the opposite of $x-3$ is squared. Two opposite numbers have the same square, so $(3-x)^2=(x-3)^2$. The result is positive or zero.

A number that is negative or zero and a number that is positive or zero are equal only if both are zero. The two expressions therefore have the same value only for $x=3$, where $x-3=0$, even though they differ by the sign of the whole square. A value that leaves the binomial nonzero gives two different results instead. For $x=0$ the first expression equals $-(0-3)^2=-9$ and the second $(3-0)^2=9$, so the two expressions are not linked by an identity.

:::

## A sum times a difference

::::teorema{#somma-differenza titolo="Difference of squares"}

For $a,b\in\mathbb R$ the following identity holds.

$$
(a+b)(a-b)=a^2-b^2.
$$

The two factors have the same first term $a$, while the second terms $b$ and $-b$ are opposites. The product is the square of the equal term minus the square of the term that changes sign. The identity also holds if the factors are written in the reverse order, because $(a-b)(a+b)=(a+b)(a-b)$.

Read from right to left, the identity turns the difference of two squares into a product, that is, into its **factored form**. For example, $x^2-9=x^2-3^2=(x+3)(x-3)$.

:::dimostrazione

By the distributive law each term of $a+b$ is multiplied by each term of $a-b$, which gives four products.

$$
\begin{aligned}
(a+b)(a-b)&=a^2-ab+ba-b^2\\[6pt]
&=a^2-b^2.
\end{aligned}
$$

Since $ab=ba$, the mixed products $-ab$ and $+ba$ are opposites, so their sum is zero and $a^2$ and $-b^2$ remain.

:::

::::

:::esempio{titolo="From an L-shape to a rectangle"}

A square of side $7$ has area $7^2=49$. A square of side $2$, which has area $2^2=4$, is removed from one of its corners. What remains is an L-shaped figure of area $49-4=45$.

The L-shaped figure splits into two rectangles.

- The first has sides $7$ and $7-2=5$, so its area is $35$.
- The second has sides $5$ and $2$, so its area is $10$.

The second rectangle is rotated and placed next to the first along a side of length $5$. The two pieces form a single rectangle with sides $7+2=9$ and $7-2=5$. Its area is $9\cdot5=45$, equal to the area of the L-shaped figure. In symbols, $7^2-2^2=(7+2)(7-2)$.

The same cut can be made with any two lengths $a$ and $b$, with $a$ greater than $b$ and $b$ positive (in symbols $a>b>0$). The result is $a^2-b^2=(a+b)(a-b)$.

::struttura{poligoni="0,0 7,0 7,5 0,5;0,5 5,5 5,7 0,7" tratteggi="5,5 7,5 7,7 5,7 5,5" etichette="3.5,2.5,35;2.5,6,10;3.5,-0.65,7;-0.65,2.5,5;6,6,4" riferimento=0 titolo="The dashed region of area $4$ is the removed square"}

::struttura{poligoni="0,0 7,0 7,5 0,5;7,0 9,0 9,5 7,5" etichette="3.5,2.5,35;8,2.5,10;3.5,-0.6,7;8,-0.6,2;-0.65,2.5,5" riferimento=0 titolo="The two pieces form a rectangle of area $45$"}

:::

:::esempio{titolo="Whole terms with several letters"}

In the product $(3x+2y)(3x-2y)$ the term that is equal in the two factors is $3x$ and the term that changes sign is $2y$. We therefore set $a=3x$ and $b=2y$. Each term is squared as a whole, coefficient included: $(3x)^2=9x^2$ and $(2y)^2=4y^2$.

$$
(3x+2y)(3x-2y)=9x^2-4y^2.
$$

A check is obtained with values of $x$ and $y$ for which $3x=2y$, for example $x=2$ and $y=3$. The second factor equals $6-6=0$, so the product equals zero. The expansion gives $9\cdot4-4\cdot9=36-36=0$. The product is zero because one factor is zero, and the expansion is zero because the two squares are equal.

:::

## Cube of a binomial

::::teorema{#cubi titolo="Four terms in the cube expansion"}

The cube of a number is the product of three factors equal to the number, for example $4^3=4\cdot4\cdot4=64$. For $a,b\in\mathbb R$ the following identities hold.

$$
\begin{aligned}
(a+b)^3&=a^3+3a^2b+3ab^2+b^3,\\[6pt]
(a-b)^3&=a^3-3a^2b+3ab^2-b^3.
\end{aligned}
$$

The second formula is obtained from the first by writing $-b$ in place of $b$, because $a-b=a+(-b)$. The signs depend on how many times the factor $-b$ appears in each term.

- In $3a^2b$ the factor $b$ appears once, so the term becomes $-3a^2b$.
- In $3ab^2$ the factor $b$ appears twice. Since $(-b)^2=b^2$, the term stays $3ab^2$.
- In $b^3$ the factor $b$ appears three times. Since $(-b)\cdot(-b)\cdot(-b)=-b^3$, the term becomes $-b^3$.

This comparison holds whatever the signs of $a$ and $b$.

:::dimostrazione

We write $(a+b)^3=(a+b)^2(a+b)$ and replace $(a+b)^2$ with its expansion. By the distributive law the three terms of the expansion are multiplied first by $a$ and then by $b$. Finally the terms with the same letters and the same exponents are added: $2a^2b+a^2b=3a^2b$ and $ab^2+2ab^2=3ab^2$.

$$
\begin{aligned}
(a+b)^3
&=(a^2+2ab+b^2)(a+b)\\[6pt]
&=a^3+2a^2b+ab^2\\[-1pt]
&\quad{}+a^2b+2ab^2+b^3\\[6pt]
&=a^3+3a^2b+3ab^2+b^3.
\end{aligned}
$$

Writing $-b$ in place of $b$ gives the expansion of $(a-b)^3$.

:::

::::

:::esempio{titolo="From cross sections to volumes"}

A cube of side $4$ has volume $4^3=64$. We write $4=3+1$ and divide each edge into a part of length $3$ and a part of length $1$.

A **cross section** of the cube is the figure obtained by cutting it with a plane parallel to a face, and it is a square of side $4$. The figure shows a cross section divided into four regions of areas $9$, $3$, $3$, and $1$, as in the square of a binomial with $a=3$ and $b=1$.

The cube is made of two layers, one on top of the other, of thickness $3$ and thickness $1$, and each layer is divided like the cross section. The volume of each piece is the area of its region multiplied by the thickness of the layer.

- The layer of thickness $3$ contains pieces of volume $9\cdot3=27$, $3\cdot3=9$, $3\cdot3=9$, and $1\cdot3=3$.
- The layer of thickness $1$ contains pieces of volume $9$, $3$, $3$, and $1$.

Grouping equal volumes, the eight pieces give $27+3\cdot9+3\cdot3+1=64$. With $a=3$ and $b=1$ these numbers are $a^3=27$, $a^2b=9$, $ab^2=3$, and $b^3=1$.

In the product $(a+b)(a+b)(a+b)$ each term is formed by choosing $a$ or $b$ from each of the three factors. For $a^2b$, $b$ is chosen from only one factor, which can be picked in $3$ ways. For $ab^2$, $b$ is chosen from two factors, that is, one factor is left out, and it too can be picked in $3$ ways. For this reason the two middle terms have the same coefficient $3$.

::struttura{linee="0,0 4,0 4,4 0,4 0,0;3,0 3,4;0,3 4,3" poligoni="0,0 3,0 3,3 0,3;3,3 4,3 4,4 3,4" etichette="1.5,1.5,9;3.5,1.5,3;1.5,3.5,3;3.5,3.5,1;1.5,-0.46,3;3.5,-0.46,1" riferimento=0 titolo="Cross-sectional areas to multiply by the layer thickness"}

:::

:::esempio{titolo="Why the linear term of the cube can be positive"}

To expand $(2x-3)^3$ we use the formula for the cube of a difference with $a=2x$ and $b=3$.

$$
\begin{aligned}
(2x-3)^3
&=(2x)^3-3\cdot(2x)^2\cdot3+3\cdot2x\cdot3^2-3^3\\[6pt]
&=8x^3-36x^2+54x-27.
\end{aligned}
$$

The term $-36x^2$ contains two factors $2x$ and only one factor $-3$, so its coefficient is negative. The **linear term** is the term of degree one, that is, the one in which $x$ appears with no exponent. Here it is $54x$, and it contains one factor $2x$ and two factors $-3$. The product $(-3)\cdot(-3)=9$ is positive, so the coefficient $54$ is positive.

The coefficient $54$ is positive, while the value of $54x$ depends on $x$. For $x=-1$, for example, the term equals $54\cdot(-1)=-54$. The sign of the coefficient and the sign of the value of the term are therefore two separate facts.

:::

## Square of a sum of three terms

::::teorema{#trinomio titolo="Three squares and three terms that are twice a product"}

For $a,b,c\in\mathbb R$ the following identity holds.

$$
\begin{aligned}
(a+b+c)^2&=a^2+b^2+c^2\\[6pt]
&\quad{}+2ab+2ac+2bc.
\end{aligned}
$$

The expansion contains the square of each of the three terms and the doubled product of each of the three pairs: $a$ with $b$, $a$ with $c$, $b$ with $c$. Each pair gives two equal products, for example $ab$ and $ba$, whose sum is $2ab$.

If a term is negative, it enters with its sign into each of the two pairs that contain it.

:::dimostrazione

We treat $a+b$ as a single term. The trinomial $a+b+c$ is then the sum of the two terms $(a+b)$ and $c$, and the formula for the square of a binomial applies to this sum.

$$
\begin{aligned}
\bigl((a+b)+c\bigr)^2
&=(a+b)^2+2(a+b)c+c^2\\[6pt]
&=a^2+2ab+b^2+2ac+2bc+c^2.
\end{aligned}
$$

In the second step $(a+b)^2=a^2+2ab+b^2$ is expanded with the same formula. The product $2(a+b)c$ is calculated with the distributive law and gives $2ac+2bc$.

:::

::::

:::esempio{titolo="The nine regions and the pairs"}

When $a$, $b$, and $c$ are positive, each side of a square of side $a+b+c$ is divided into three parts of lengths $a$, $b$, and $c$. The lines drawn from the division points form a grid of three rows and three columns, that is, nine regions.

The three regions along the diagonal that starts at the bottom-left corner are squares of areas $a^2$, $b^2$, and $c^2$. The other six are rectangles. Swapping the row and the column of a rectangle gives the rectangle with the same sides: for example, the rectangles of areas $bc$ and $cb$ are at swapped positions and together give the doubled product $2bc$.

With $a=3$, $b=2$, and $c=1$ the side is $6$ and the area is $6^2=36$. The three squares have areas $9$, $4$, and $1$, with sum $14$. The pairs of rectangles have areas $6$ and $6$, $3$ and $3$, $2$ and $2$, with sum $22$. We find again $14+22=36$.

::struttura{linee="0,0 6,0 6,6 0,6 0,0;3,0 3,6;5,0 5,6;0,3 6,3;0,5 6,5" poligoni="0,0 3,0 3,3 0,3;3,3 5,3 5,5 3,5;5,5 6,5 6,6 5,6" etichette="1.5,1.5,9;4,1.5,6;5.5,1.5,3;1.5,4,6;4,4,4;5.5,4,2;1.5,5.5,3;4,5.5,2;5.5,5.5,1;1.5,-0.46,3;4,-0.46,2;5.5,-0.46,1" riferimento=0 titolo="Areas at swapped positions are equal"}

:::

:::esempio{titolo="Doubled products with a negative term"}

In $(x-y+2)^2$ the three terms, taken with their signs, are $x$, $-y$, and $2$.

- The squares are $x^2$, $(-y)^2=y^2$, and $2^2=4$.
- The pair $x$ and $-y$ gives $2\cdot x\cdot(-y)=-2xy$.
- The pair $x$ and $2$ gives $2\cdot x\cdot2=4x$.
- The pair $-y$ and $2$ gives $2\cdot(-y)\cdot2=-4y$.

$$
(x-y+2)^2=x^2+y^2+4-2xy+4x-4y.
$$

The result is checked by setting $y=x$. The left side gives $(x-x+2)^2=2^2=4$. On the right side $4x-4x=0$ and $x^2+x^2-2x^2=0$, so $4$ remains.

:::

## Recognising and completing a square

:::osservazione{#riconoscimento titolo="Checking twice the product"}

A **perfect square** is a polynomial equal to the square of another polynomial.

Two checks establish whether a trinomial is the square of a binomial.

1. Look for two terms whose squares are the first and the last term of the trinomial.
2. Calculate the doubled product of the two terms found and compare it with the middle term, sign included.

In $9x^2-24x+16$ the first term is $9x^2=(3x)^2$ and the last is $16=4^2$. Also $(-4)^2$ equals $16$, so the second term of the binomial is $4$ or $-4$. The square $16$ fixes its **absolute value**, that is, the number without its sign. The sign is obtained from the middle term. With $3x$ as the first term, the doubled product is $2\cdot3x\cdot4=24x$ if $4$ is taken and $2\cdot3x\cdot(-4)=-24x$ if $-4$ is taken. The middle term of the trinomial is $-24x$, so the second term is $-4$ and

$$
9x^2-24x+16=(3x-4)^2.
$$

:::

::::teorema{#coefficienti titolo="Comparing coefficients through degree two"}

A polynomial of degree two in $x$ has the form $Ax^2+Bx+C$, where the real numbers $A$, $B$, and $C$ are the coefficient of $x^2$, the coefficient of $x$, and the constant term.

Two polynomials $Ax^2+Bx+C$ and $A'x^2+B'x+C'$ have the same value for every $x$ **if and only if** they have the same coefficients, that is, $A=A'$, $B=B'$, and $C=C'$. The phrase "if and only if" combines two statements: if the coefficients are equal, the values are equal for every $x$; if the values are equal for every $x$, the coefficients are equal.

Consequently, if two expansions have the same term in $x^2$ and the same constant term, checking the middle coefficient is enough to establish that they are linked by an identity.

:::dimostrazione

Subtract the second polynomial from the first. The difference is the polynomial $ux^2+vx+w$, where $u=A-A'$, $v=B-B'$, and $w=C-C'$.

Suppose that the two polynomials have the same value for every $x$. Then the difference equals zero for every $x$, in particular for $x=0$, $x=1$, and $x=-1$.

- For $x=0$ the difference equals $w$, so $w=0$.
- For $x=1$ the difference equals $u+v+w$. Since $w=0$, we have $u+v=0$.
- For $x=-1$ the difference equals $u-v+w$. Since $w=0$, we have $u-v=0$.

Adding the equalities $u+v=0$ and $u-v=0$ gives $2u=0$, so $u=0$. Then $u+v=0$ gives $v=0$. The three numbers $u$, $v$, and $w$ are zero, hence $A=A'$, $B=B'$, and $C=C'$.

Conversely, if the corresponding coefficients are equal, the difference is zero for every $x$.

:::

::::

:::esempio{titolo="The missing term and its sign"}

We look for the number $c$ for which $4x^2-12x+c$ is the square of a binomial. The first term is $4x^2=(2x)^2$, so the binomial has the form $2x+b$, with $b$ to be determined. Its expansion is

$$
(2x+b)^2=4x^2+4bx+b^2.
$$

The coefficient of $x$ is $4b$ in the expansion and $-12$ in the trinomial. The equality $4b=-12$ gives $b=-3$. The constant term is then $c=b^2=(-3)^2=9$, and $4x^2-12x+9=(2x-3)^2$.

The trinomial $4x^2-6x+9$ has the same first term and the same constant term as $(2x-3)^2$, while the middle coefficient is $-6$ instead of $-12$. By the comparison of coefficients the two polynomials are different. Indeed, for $x=1$ they equal $4-6+9=7$ and $(2-3)^2=1$.

In the graph the two curves share the point with $x=0$ and height $9$, the constant term, and at $x=1$ they are at heights $1$ and $7$.

::grafico{f="(2*x-3)^2;4*x^2-6*x+9" xmin=-0.5 xmax=2.7 ymin=-1 ymax=23 punti="1,1,pieno;1,7,pieno;0,9,pieno" segmenti="1,1,1,7" titolo="The values agree at $x=0$, and evaluating at $x=1$ distinguishes the expressions"}

:::

:::esempio{titolo="Two possible signs for the coefficient"}

We look for the values of $p$ for which $16x^2+px+25$ is the square of a binomial. The first term is $16x^2=(4x)^2$, so $4x$ is taken as the first term of the binomial. The second term has square $25$, so it equals $5$ or $-5$.

- With $5$ the doubled product is $2\cdot4x\cdot5=40x$, so $p=40$ and the trinomial is $(4x+5)^2$.
- With $-5$ the doubled product is $2\cdot4x\cdot(-5)=-40x$, so $p=-40$ and the trinomial is $(4x-5)^2$.

If the problem asks only for a perfect square, both values are solutions.

An expression **vanishes** for a value of $x$ when it equals zero for that value. If the problem also asks that the square vanish for a positive value of $x$, only $p=-40$ remains. The binomial $4x-5$ vanishes when $4x=5$, that is, for $x=\dfrac54$, which is positive. The binomial $4x+5$ vanishes when $4x=-5$, that is, for $x=-\dfrac54$, which is negative.

When the constant term of the trinomial is zero there is only one choice. The second term of the binomial has square zero, so it is zero, and the doubled product is zero too. For example, $16x^2+px$ is a square only for $p=0$.

:::

## Area differences and numerical products

:::esempio{#applicazioni titolo="Interpreting twice the product"}

A square has side $x$, with $x$ positive (in symbols $x>0$), and area $x^2$. If the side grows by $3$, the new square has side $x+3$ and area $(x+3)^2$. In the figure the new square is made of the original square and three added regions:

- two rectangular strips with sides $3$ and $x$, each of area $3x$;
- a corner square of side $3$, of area $9$.

The increase in area is the sum of the three regions, that is, $3x+3x+9=6x+9$. The term $6x$ is the doubled product $2\cdot x\cdot3$.

::struttura{linee="0,0 5,0 5,5 0,5 0,0" poligoni="5,0 8,0 8,5 5,5;0,5 5,5 5,8 0,8;5,5 8,5 8,8 5,8" etichette="2.5,-0.55,x;6.5,-0.55,3;-0.65,2.5,x;-0.65,6.5,3;6.5,2.5,3x;2.5,6.5,3x;6.5,6.5,9" riferimento=0 titolo="The three regions add up to the increase in area $6x+9$"}

In the calculation $(x+3)^2-x^2=x^2+6x+9-x^2$ the terms $x^2$ and $-x^2$ add to zero, so an expression of degree one remains, that is, one without $x^2$.

The original side is found from the increase in area. With an increase of $51$ the side $x$ satisfies the equality $6x+9=51$. Subtracting $9$ gives $6x=42$, and dividing by $6$ gives $x=7$. In the second line of the formula the arrow $\Longrightarrow$ is read "then".

$$
\begin{aligned}
(x+3)^2-x^2&=6x+9,\\[6pt]
6x+9=51&\ \Longrightarrow\ x=7.
\end{aligned}
$$

For $x=7$ the new area is $10^2=100$ and the old area is $7^2=49$. The difference is $100-49=51$, equal to the given increase.

:::

:::esempio{titolo="Calculating with a common midpoint"}

The **mean** of two numbers is their sum divided by $2$. For the factors of the product $103\cdot97$ the mean is $\dfrac{103+97}{2}=100$. Each factor is at distance $3$ from the mean, because $103=100+3$ and $97=100-3$. The product is then calculated with the sum-times-difference formula.

$$
103\cdot97=(100+3)(100-3)=100^2-3^2=10000-9=9991.
$$

The factors of $105\cdot95$ also have mean $100$, with distance $5$. The product equals $100^2-5^2=10000-25=9975$.

With the same mean, a greater distance corresponds to a greater square to subtract, hence to a smaller product. The two products can therefore be ordered without calculating them: $105\cdot95$ is smaller than $103\cdot97$ because $5$ is greater than $3$.

The graph shows the same fact with mean $10$. The factors are $10+d$ and $10-d$, where $d$ is the distance from the mean, and the product is $P=100-d^2$. For $d=3$ we have $13\cdot7=91$. For $d=5$ we have $15\cdot5=75$. The curve falls as $d$ increases starting from zero (in symbols $d\geq0$, which is read "$d$ greater than or equal to zero").

::grafico{f="100-x^2" xmin=-0.5 xmax=6.4 ymin=60 ymax=104 punti="3,91,pieno;5,75,pieno" nomi="d,P" legenda="P=100-d^2" titolo="For the factors $10+d$ and $10-d$, the product falls as $d\geq0$ increases"}

:::

:::attenzione{titolo="Factors at different distances"}

The formula $(a+b)(a-b)=a^2-b^2$ requires the two factors to be at the same distance $b$ from the number $a$. In $201\cdot198$ the factors are at distances $1$ and $2$ from $200$, because $201=200+1$ and $198=200-2$. The distances are different, so the product $(200+1)(200-2)$ is calculated with the distributive law.

The four products are $200\cdot200=40000$, $200\cdot(-2)=-400$, $1\cdot200=200$, and $1\cdot(-2)=-2$. The two mixed products $-400$ and $200$ have sum $-200$, which is not zero. The result is therefore $40000-200-2=39798$. The mixed products add to zero only when the two distances are equal.

:::

:::esempio{titolo="Area with a fixed perimeter"}

The **perimeter** of a rectangle is the sum of the lengths of its four sides, that is, twice the sum of two adjacent sides. A rectangle of perimeter $80\,\mathrm{cm}$ therefore has two adjacent sides that add to $\dfrac{80}{2}=40\,\mathrm{cm}$. The mean of the two sides is $20\,\mathrm{cm}$.

Let $d$ be the distance of each side from the mean. The sides measure $20+d$ and $20-d$ centimetres. Both lengths are positive when $d$ is between $0$ and $20$, with $20$ excluded (in symbols $0\le d<20$). The area of the rectangle is the product of the sides.

$$
(20+d)(20-d)=20^2-d^2=400-d^2.
$$

The area, in $\mathrm{cm^2}$, is $400$ minus the square $d^2$, which is positive or zero. The maximum area is therefore $400\,\mathrm{cm^2}$, and it is obtained for $d=0$, that is, when both sides measure $20\,\mathrm{cm}$. Every other rectangle with the same perimeter has a smaller area, and the difference from $400\,\mathrm{cm^2}$ is exactly $d^2$.

The calculation also works in reverse, from the area to the sides. If the area is $384\,\mathrm{cm^2}$, then $400-d^2=384$ gives $d^2=400-384=16$. Since $d$ is positive or zero, $d=4$. The sides measure $20-4=16\,\mathrm{cm}$ and $20+4=24\,\mathrm{cm}$. Their sum is $40\,\mathrm{cm}$ and their product is $16\cdot24=384\,\mathrm{cm^2}$.

An area greater than $400\,\mathrm{cm^2}$ would require a negative value of $d^2$, while the square of a real number is positive or zero.

:::

## Adding and subtracting related squares

:::osservazione{#confronto-quadrati titolo="Terms that cancel"}

The squares of the binomials $x+b$ and $x-b$ are $x^2+2bx+b^2$ and $x^2-2bx+b^2$. The terms $x^2$ and $b^2$ are equal in the two expansions, while the mixed terms $2bx$ and $-2bx$ are opposites. In the difference the equal terms cancel and $2bx-(-2bx)=4bx$ remains. In the sum the mixed terms cancel and $2x^2+2b^2$ remains.

$$
\begin{aligned}
(x+b)^2-(x-b)^2&=4bx,\\[6pt]
(x+b)^2+(x-b)^2&=2x^2+2b^2.
\end{aligned}
$$

The first formula is also obtained with a single identity, the difference of squares, as the product of the sum of the two binomials and their difference. The sum is $(x+b)+(x-b)=2x$ and the difference is $(x+b)-(x-b)=2b$, so the product is $2x\cdot2b=4bx$.

Two quantities are **proportional** when one equals the other multiplied by a fixed number. With $b$ fixed, the difference $4bx$ is $x$ multiplied by $4b$, so it is proportional to $x$. For $b=3$ the difference is $12x$, which equals $12$ for $x=1$ and $24$, twice as much, for $x=2$.

For $b=3$ the sum is $2x^2+18$. Its value stays the same when the opposite $-x$ is written in place of $x$, because $(-x)^2=x^2$. For $x=2$ and for $x=-2$ the sum equals $2\cdot4+18=26$.

In the graph the curve is the sum, with the two points at height $26$ and the point at height $18$ at $x=0$. The straight line is the difference $12x$, which equals $24$ at $x=2$.

::grafico{f="2*x^2+18;12*x" xmin=-3.5 xmax=3.5 ymin=-26 ymax=48 punti="-2,26,pieno;2,26,pieno;2,24,pieno;0,18,pieno" titolo="For $b=3$, the sum agrees at opposite values of $x$"}

:::

:::esempio{titolo="Recovering the squares from their sum and difference"}

The values of the sum and of the difference of the two squares are given: $(x+b)^2+(x-b)^2=50$ and $(x+b)^2-(x-b)^2=30$. We look for the values of the two squares.

- Adding the two equalities, $(x-b)^2$ and $-(x-b)^2$ add to zero. The result is twice the first square: $2(x+b)^2=50+30=80$, so $(x+b)^2=40$.
- Subtracting the second equality from the first gives twice the second square: $2(x-b)^2=50-30=20$, so $(x-b)^2=10$.

The two squares equal $40$ and $10$.

The calculation gives the values of the squares and leaves the signs of the binomials undetermined. Two opposite numbers have the same square, so $x+b$ is one of the two opposite numbers with square $40$, and the same holds for $x-b$ with square $10$.

:::
