---
titolo: "Special products"
sommario: "Identities, proofs, and applications of squares and cubes for recognizing and rewriting expressions."
---

## Identities and particular equalities

:::definizione{#identita titolo="Identities between expressions"}

An **identity** is an equality that holds for every allowed value of the letters. In special products the expressions are polynomials, so the letters can take any real values. For example, $x(x+2)=x^2+2x$ follows from the distributive law and holds at $x=0$ and at negative values too.

If two expressions are identical, either can replace the other inside a sum, a product, or a formula. Equality at every value justifies the substitution, because the calculation containing the expressions can be evaluated at any point of the domain.

:::

:::attenzione{titolo="An agreeing value and a counterexample"}

At $x=0$ both $(x+2)^2$ and $x^2+4$ equal $4$. At $x=1$ they equal $9$ and $5$, respectively. Agreement at $0$ holds at a single point, while the disagreement at $1$ is enough to rule out an identity. The gap between the latter values is $4$, which is twice the product $2\cdot1\cdot2$.

::grafico{f="(x+2)^2;x^2+4" xmin=-1.5 xmax=2.5 ymin=-1 ymax=21 punti="0,4,pieno;1,9,pieno;1,5,pieno" segmenti="1,5,1,9" titolo="The curves agree at $x=0$ and have different values at $x=1$"}

:::

## Square of a binomial

::::teorema{#quadrati titolo="Square of a sum and a difference"}

For $a,b\in\mathbb R$ the following two identities hold.

$$
\begin{aligned}
(a+b)^2&=a^2+2ab+b^2,\\[6pt]
(a-b)^2&=a^2-2ab+b^2.
\end{aligned}
$$

In the first expansion the mixed term $2ab$ is **twice the product**. In the second, the sign of the mixed term changes because only one factor in that term contains $-b$. The square $b^2$ has the same sign in both formulas.

:::dimostrazione

The distributive law pairs each term of the first binomial with both terms of the second one.

$$
\begin{aligned}
(a+b)^2&=(a+b)(a+b)\\[6pt]
&=a^2+ab+ba+b^2\\[6pt]
&=a^2+2ab+b^2.
\end{aligned}
$$

The final step uses $ab=ba$. Since $-b$ is real, the same identity applies to the sum $a+(-b)$ and gives the formula for $a-b$.

:::

::::

:::esempio{titolo="A square divided into four regions"}

When $a,b>0$, the two terms can represent lengths. Starting at a vertex of the square with side length $a+b$, mark a point at distance $a$ on each adjacent side. From each point draw a segment parallel to the other side. Two regions at opposite corners are squares of areas $a^2$ and $b^2$. The other two are rectangles with sides $a$ and $b$, so together they contribute $2ab$. For example, with $a=4$ and $b=2$ the area is $16+8+8+4=36$. The proof by distribution also covers cases where one term is zero or negative.

::struttura{linee="0,0 6,0 6,6 0,6 0,0;4,0 4,6;0,4 6,4" poligoni="4,0 6,0 6,4 4,4;0,4 4,4 4,6 0,6" etichette="2,2,a²;5,2,ab;2,5,ab;5,5,b²;2,-0.65,a;5,-0.65,b;-0.65,2,a;-0.65,5,b" riferimento=0 titolo="The two rectangles have the same area"}

:::

:::esempio{titolo="Two terms with coefficients"}

In $(2x-3)^2$ the signed terms are $2x$ and $-3$. The first square is $4x^2$. The single occurrence of the negative factor in twice the product gives $2\cdot 2x\cdot(-3)=-12x$. The square of the second term is $9$, because it contains two negative factors.

$$
(2x-3)^2=4x^2-12x+9.
$$

At $x=1$ the binomial equals $-1$ and its square equals $1$. The value $4-12+9=1$ confirms the order and signs of the contributions.

:::

:::attenzione{titolo="Opposite of a square and square of an opposite"}

In $-(x-3)^2$ the minus before the brackets acts on the result of squaring. In $(3-x)^2$ we square the opposite of the binomial $x-3$ and get $(x-3)^2$ again. The opposite of a square is nonpositive, while the square of an opposite is nonnegative. If the two results are equal, they must both be zero. This happens only at $x=3$.

Agreement at the zero of a binomial can occur even when the whole square has the wrong sign. To compare these two forms, choose a value that leaves the binomial nonzero. At $x=0$ the values are $-9$ and $9$, which distinguishes the two forms immediately.

:::

## A sum times a difference

::::teorema{#somma-differenza titolo="Difference of squares"}

For $a,b\in\mathbb R$ the following identity holds.

$$
(a+b)(a-b)=a^2-b^2.
$$

The two factors have the same first term and opposite second terms. The pattern can also be recognized when the factors are reversed. Used in reverse, the identity turns a difference of two squares into a product.

:::dimostrazione

The distributive law gives four products. Since $ab=ba$, the mixed products have the same absolute value and opposite signs.

$$
\begin{aligned}
(a+b)(a-b)&=a^2-ab+ba-b^2\\[6pt]
&=a^2-b^2.
\end{aligned}
$$

:::

::::

:::esempio{titolo="From an L-shape to a rectangle"}

A square of side $2$ is removed from a corner of a square of side $7$. The remaining region splits into a rectangle with sides $7$ and $5$ and a rectangle with sides $5$ and $2$. Rotating the second rectangle lets the two pieces meet along a side of length $5$. They form a rectangle with sides $7+2=9$ and $7-2=5$. The original difference of areas is therefore $45$. The same cut can be made for two lengths $a>b>0$.

::struttura{poligoni="0,0 7,0 7,5 0,5;0,5 5,5 5,7 0,7" tratteggi="5,5 7,5 7,7 5,7 5,5" etichette="3.5,2.5,35;2.5,6,10;3.5,-0.65,7;-0.65,2.5,5;6,6,4" riferimento=0 titolo="The dashed region of area $4$ is the removed square"}

::struttura{poligoni="0,0 7,0 7,5 0,5;7,0 9,0 9,5 7,5" etichette="3.5,2.5,35;8,2.5,10;3.5,-0.6,7;8,-0.6,2;-0.65,2.5,5" riferimento=0 titolo="The two pieces form a rectangle of area $45$"}

:::

:::esempio{titolo="Whole terms with several letters"}

In the factors $(3x+2y)(3x-2y)$ set $a=3x$ and $b=2y$. Squaring each whole term gives $9x^2-4y^2$. At values satisfying $3x=2y$, the second factor is zero and the two squares agree. This check connects the zero in the factored form to cancellation in the expanded form.

:::

## Cube of a binomial

::::teorema{#cubi titolo="Four terms in the cube expansion"}

For $a,b\in\mathbb R$ the following identities hold.

$$
\begin{aligned}
(a+b)^3&=a^3+3a^2b+3ab^2+b^3,\\[6pt]
(a-b)^3&=a^3-3a^2b+3ab^2-b^3.
\end{aligned}
$$

To obtain the second formula, replace $b$ with $-b$. Terms containing one or three copies of $b$ become their opposites. The term with two copies stays the same because $(-b)^2=b^2$. This comparison holds regardless of the signs of $a$ and $b$.

:::dimostrazione

The square of a binomial reduces the multiplication to two distributions. Terms with the same exponents are then added.

$$
\begin{aligned}
(a+b)^3
&=(a^2+2ab+b^2)(a+b)\\[6pt]
&=a^3+2a^2b+ab^2\\[-1pt]
&\quad{}+a^2b+2ab^2+b^3\\[6pt]
&=a^3+3a^2b+3ab^2+b^3.
\end{aligned}
$$

Substituting $-b$ for $b$ gives the expansion of the difference.

:::

::::

:::esempio{titolo="From cross sections to volumes"}

Take a cube of side $4=3+1$. A square cross section is divided into regions of areas $9$, $3$, $3$, and $1$. A layer of thickness $3$ thus gives volumes $27$, $9$, $9$, and $3$, whereas the layer of thickness $1$ gives $9$, $3$, $3$, and $1$. Grouping equal volumes gives $27+3\cdot9+3\cdot3+1=64$. In general there are as many ways to choose a term from one of the three factors as there are to choose it from two, because only one factor remains excluded.

::struttura{linee="0,0 4,0 4,4 0,4 0,0;3,0 3,4;0,3 4,3" poligoni="0,0 3,0 3,3 0,3;3,3 4,3 4,4 3,4" etichette="1.5,1.5,9;3.5,1.5,3;1.5,3.5,3;3.5,3.5,1;1.5,-0.46,3;3.5,-0.46,1" riferimento=0 titolo="Cross-sectional areas to multiply by the layer thickness"}

:::

:::esempio{titolo="Why the linear term of the cube can be positive"}

In $(2x-3)^3$ the $x^2$ term has two factors of $2x$ and one of $-3$. The linear term has one factor of $2x$ and two of $-3$, whose product is positive.

$$
\begin{aligned}
(2x-3)^3
&=8x^3-36x^2+54x-27.
\end{aligned}
$$

The positive sign of the coefficient $54$ describes the linear term written in terms of $x$. If $x<0$, the value of the term $54x$ is negative. The sign of the coefficient and the sign of the term's value are therefore two separate facts.

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

The pairs are $a,b$, $a,c$, and $b,c$. Each pair contributes two equal products, and each term also contributes its own square. If a term is negative, its sign stays with it in every pair that contains it.

:::dimostrazione

Group $a$ and $b$ into a single term and apply the square of a binomial twice.

$$
\begin{aligned}
\bigl((a+b)+c\bigr)^2
&=(a+b)^2+2(a+b)c+c^2\\[6pt]
&=a^2+2ab+b^2+2ac+2bc+c^2.
\end{aligned}
$$

:::

::::

:::esempio{titolo="The nine regions and the pairs"}

For $a,b,c>0$ a square of side $a+b+c$ splits into a grid of nine regions. The three diagonal regions have areas $a^2$, $b^2$, and $c^2$. Swapping the row and column of a region off the diagonal gives the second product of the same pair, for instance $bc$ and $cb$. For $a=3$, $b=2$, and $c=1$ the three squares add to $14$ and the doubled products to $22$, so the total area is $36$.

::struttura{linee="0,0 6,0 6,6 0,6 0,0;3,0 3,6;5,0 5,6;0,3 6,3;0,5 6,5" poligoni="0,0 3,0 3,3 0,3;3,3 5,3 5,5 3,5;5,5 6,5 6,6 5,6" etichette="1.5,1.5,9;4,1.5,6;5.5,1.5,3;1.5,4,6;4,4,4;5.5,4,2;1.5,5.5,3;4,5.5,2;5.5,5.5,1;1.5,-0.46,3;4,-0.46,2;5.5,-0.46,1" riferimento=0 titolo="Areas at swapped positions are equal"}

:::

:::esempio{titolo="Doubled products with a negative term"}

In $(x-y+2)^2$ the terms are $x$, $-y$, and $2$. The pairs containing $-y$ give $-2xy$ and $-4y$, whereas the pair $x,2$ gives $4x$.

$$
(x-y+2)^2=x^2+y^2+4-2xy+4x-4y.
$$

Setting $x=y$ cancels the two linear terms and makes $x^2+y^2-2xy$ zero. The remaining value is $4$, the square of $2$ in the original expression.

:::

## Recognizing and completing a square

:::osservazione{#riconoscimento titolo="Checking twice the product"}

To read a trinomial as a square, first identify two terms that can generate its two outer squares. Then check whether the mixed term has the coefficient and sign of twice their product. In $9x^2-24x+16$ choose $3x$ and $-4$, because $2\cdot 3x\cdot(-4)=-24x$. This gives $(3x-4)^2$. The square of the constant term determines its absolute value, while the sign of the mixed term fixes its sign once $3x$ is chosen as the first term.

:::

::::teorema{#coefficienti titolo="Comparing coefficients through degree two"}

Two polynomials of the form $Ax^2+Bx+C$, with real coefficients, agree at every $x$ if and only if their three corresponding coefficients agree. Therefore, if two expansions have the same outer terms, checking the middle coefficient is enough to establish the identity.

:::dimostrazione

Subtracting the polynomials gives a polynomial $ux^2+vx+w$. If the two polynomials agree at every $x$, the difference equals zero at $0$, $1$, and $-1$. The value at $0$ gives $w=0$. The other two give $u+v=0$ and $u-v=0$. Adding gives $u=0$, so $v=0$ too. Conversely, when the corresponding coefficients agree, the difference is zero at every $x$.

:::

::::

:::esempio{titolo="The missing term and its sign"}

To complete $4x^2-12x+c$ as a square, start from $(2x+b)^2$. The linear term is $4bx$, so $4b=-12$ and $b=-3$. Consequently $c=b^2=9$. The trinomial $4x^2-6x+9$ shares the outer terms of $(2x-3)^2$, while its middle coefficient differs. At $x=1$, for example, the two values are $7$ and $1$.

::grafico{f="(2*x-3)^2;4*x^2-6*x+9" xmin=-0.5 xmax=2.7 ymin=-1 ymax=23 punti="1,1,pieno;1,7,pieno;0,9,pieno" segmenti="1,1,1,7" titolo="The values agree at $x=0$, and evaluating at $x=1$ distinguishes the expressions"}

:::

:::esempio{titolo="Two possible signs for the coefficient"}

To make $16x^2+px+25$ the square of a binomial, we may choose $4x$ as its first term. The second term has square $25$, so it can be $5$ or $-5$. The mixed term gives $p=40$ or $p=-40$, respectively. Both choices are allowed if the problem asks only for a perfect square.

If the square must also be zero at some $x>0$, only $p=-40$ remains. The binomial $4x-5$ vanishes at $\dfrac54$, while $4x+5$ vanishes at $-\dfrac54$. When the constant is zero there is only one choice, because the second term of the binomial must be zero and the mixed term vanishes too.

:::

## Area differences and numerical products

:::esempio{#applicazioni titolo="Interpreting twice the product"}

A square has side $x>0$. If the side grows by $3$, the added pieces are two strips with sides $3$ and $x$ and one corner square of side $3$. The area increase is the sum of the three contributions. To recover the original side from an area increase, solve the linear equation left once the quadratic terms cancel.

::struttura{linee="0,0 5,0 5,5 0,5 0,0" poligoni="5,0 8,0 8,5 5,5;0,5 5,5 5,8 0,8;5,5 8,5 8,8 5,8" etichette="2.5,-0.55,x;6.5,-0.55,3;-0.65,2.5,x;-0.65,6.5,3;6.5,2.5,3x;2.5,6.5,3x;6.5,6.5,9" riferimento=0 titolo="The three regions add up to the increase in area $6x+9$"}

$$
\begin{aligned}
(x+3)^2-x^2&=6x+9,\\[6pt]
6x+9=51&\ \Longrightarrow\ x=7.
\end{aligned}
$$

At $x=7$ the new area is $100$ and the old area is $49$. The difference $51$ confirms the stated increase.

:::

:::esempio{titolo="Calculating with a common midpoint"}

For $103\cdot97$ the mean of the two factors is $100$ and each factor is at distance $3$ from that mean. The sum-times-difference formula gives $10000-9=9991$. The product $105\cdot95$ also has midpoint $100$, at distance $5$ from each factor, and its value is $10000-25=9975$. At a fixed midpoint, a greater distance calls for subtracting a greater square. This observation lets the products be ordered before evaluating them.

::grafico{f="100-x^2" xmin=-0.5 xmax=6.4 ymin=60 ymax=104 punti="3,91,pieno;5,75,pieno" nomi="d,P" legenda="P=100-d^2" titolo="For the factors $10+d$ and $10-d$, the product falls as $d\geq0$ increases"}

:::

:::attenzione{titolo="Factors at different distances"}

In $201\cdot198$ the factors are at distances $1$ and $2$ from $200$. Written as $(200+1)(200-2)$, they give mixed products $200$ and $-400$. This leaves a contribution of $-200$ as well as the constant product $-2$. The correct result is $40000-200-2=39798$. The mixed products cancel around the chosen base when the two distances are equal.

:::

:::esempio{titolo="Area with a fixed perimeter"}

A rectangle of perimeter $80$ cm has side lengths that add to $40$ cm. Write them as $20+d$ and $20-d$, with $0\le d<20$ so both lengths are positive. Their product gives $400-d^2$ cm$^2$. The maximum area is therefore $400$ cm$^2$, attained at $d=0$ when both sides are $20$ cm. The gap between this area and that of any rectangle with the same perimeter is exactly $d^2$.

The calculation also works in reverse. If the given area is $384$ cm$^2$, then $d^2=16$. The common distance from the mean is $d=4$, so the sides are $16$ and $24$ cm. They add to $40$ and their product confirms the area. An area above $400$ cm$^2$ would require a negative value of $d^2$.

:::

## Adding and subtracting related squares

:::osservazione{#confronto-quadrati titolo="Terms that cancel"}

The squares of the binomials $x+b$ and $x-b$ have equal quadratic and constant parts. In the difference these parts cancel. In the sum the two mixed terms cancel, because they are opposites.

$$
\begin{aligned}
(x+b)^2-(x-b)^2&=4bx,\\[6pt]
(x+b)^2+(x-b)^2&=2x^2+2b^2.
\end{aligned}
$$

To obtain the first formula with one identity, write the difference of squares as the product of the difference of the binomials, $2b$, and their sum, $2x$. This form explains why, for a fixed $b$, the difference is proportional to $x$. For $b=3$ the sum is $2x^2+18$ and keeps the same value when $x$ is replaced by $-x$.

::grafico{f="2*x^2+18;12*x" xmin=-3.5 xmax=3.5 ymin=-26 ymax=48 punti="-2,26,pieno;2,26,pieno;2,24,pieno;0,18,pieno" titolo="For $b=3$, the sum agrees at opposite values of $x$"}

:::

:::esempio{titolo="Recovering the squares from their sum and difference"}

If $(x+b)^2+(x-b)^2=50$ and $(x+b)^2-(x-b)^2=30$, the two squares can be found by adding and subtracting the equalities. Adding gives twice the first square, which is $80$. Subtraction gives twice the second, which is $20$. The squares are $40$ and $10$. The calculation determines the values of the squares and leaves several possibilities for the signs of $x+b$ and $x-b$.

:::
