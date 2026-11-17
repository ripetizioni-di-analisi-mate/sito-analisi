---
titolo: Common product identities
sommario: Squares and cubes of binomials, products of sums and differences, recognition of terms, and applications.
---

## Square of a binomial

::::teorema{#quadrati titolo="Square of a sum and a difference"}
For all real $a,b$, the following identities hold

$$
\begin{aligned}
(a+b)^2&=a^2+2ab+b^2, \\[6pt](a-b)^2&=a^2-2ab+b^2.
\end{aligned}
$$

The first and last terms are the squares of the two terms of the binomial. The middle term is **twice their product**.

:::dimostrazione
Write the square as the binomial times itself. The distributive property gives $(a+b)(a+b)=a^2+ab+ab+b^2$. The two mixed products are equal, so their sum is $2ab$. Replacing $b$ with $-b$ gives the identity for the difference.
:::
::::

:::esempio{titolo="Coefficients and signs"}
Since the first term of $2x-3$ is $2x$, its square is $4x^2$. Twice the product is $-12x$, so $(2x-3)^2=4x^2-12x+9$. Squaring just the first and last terms would omit $-12x$.
:::

## Multiplying a sum by a difference

::::teorema{#somma-differenza titolo="Difference of squares"}
For all real $a,b$, the following identity holds

$$
(a+b)(a-b)=a^2-b^2.
$$

:::dimostrazione
Expanding the product gives $a^2-ab+ab-b^2$. The mixed products are opposites and add to zero. The two squares remain with opposite signs.
:::
::::

:::esempio{titolo="A numerical product"}
The calculation $103\cdot97$ can be written as $(100+3)(100-3)=10000-9=9991$. The same identity holds with variables, as in $(3x+2y)(3x-2y)=9x^2-4y^2$. Square the entire term, including its coefficient.
:::

## Cube of a binomial

:::teorema{#cubi titolo="Four terms in the expansion of a cube"}
The cube of a sum and the cube of a difference are given by

$$
(a+b)^3=a^3+3a^2b+3ab^2+b^3,
$$

$$
(a-b)^3=a^3-3a^2b+3ab^2-b^3.
$$

To derive the identities, multiply the square of the binomial by the binomial itself and combine like terms. In every term of the expansion, the exponents of $a$ and $b$ add to three.

For example, $(x-2)^3=x^3-6x^2+12x-8$. The term in x is positive because it contains the square of the second term, while the constant term is negative.
:::

## Square of a sum of three terms

:::teorema{#trinomio titolo="Three squares and three doubled products"}
For all real $a,b,c$,

$$
(a+b+c)^2=a^2+b^2+c^2+2ab+2ac+2bc.
$$

The identity follows by treating $a+b$ as a single first term and applying the square of a binomial twice.

For example,

$$
(x+y+2)^2=x^2+y^2+4+2xy+4x+4y.
$$

Each pair of terms contributes twice its product. If one term is negative, retain its sign in every product containing it.
:::

## Recognizing and completing an identity

:::osservazione{#riconoscimento titolo="Checking the middle term"}
To check whether $x^2+6x+9$ is a square, identify $x^2$ and $3^2$, then verify that the middle term is $2\cdot x\cdot3=6x$. This gives $(x+3)^2$.

Checking twice the product distinguishes a square from a similar-looking expression. To complete $x^2-10x+\square$, the second term of the binomial must be $-5$ because $2\cdot(-5)=-10$. The missing term is therefore $(-5)^2=25$.
:::

:::attenzione{titolo="Squared end terms and the middle term"}
The polynomial $x^2+3x+9$ has the same first and last terms as $(x+3)^2$. Its middle term is $3x$, whereas the square has middle term $6x$. For example, at $x=1$ the values are $13$ and $16$.
:::

:::esempio{titolo="Completing a square with a leading coefficient"}
In $4x^2-12x+\square$, the first term of the binomial is $2x$. To get the doubled product $-12x$, the second term must be $-3$, since $2\cdot 2x\cdot(-3)=-12x$. Therefore add $9$.
:::

## Area differences and simplification

:::esempio{#applicazioni titolo="Interpreting twice the product"}
A square of side length $x>0$ grows to side length $x+3$. The increase in area is the sum of the three regions added to the original square.

::struttura{linee="0,0 5,0 5,5 0,5 0,0" poligoni="5,0 8,0 8,5 5,5;0,5 5,5 5,8 0,8;5,5 8,5 8,8 5,8" riferimento=0 etichette="2.5,-0.4,x;6.5,-0.4,3;-0.45,2.5,x;-0.45,6.5,3" titolo="The three regions added to the original square"}

$$
(x+3)^2-x^2=6x+9.
$$

The term $6x$ represents two rectangular strips of area $3x$ each, while $9$ represents the small square of side length three.

:::

:::esempio{titolo="Choosing an identity after identifying the squares"}
Treat $(x+3)^2-(x-3)^2$ as a difference of squares, with $A=x+3$ and $B=x-3$. The constant terms cancel in the sum $A+B$. The terms in $x$ cancel in the difference $A-B$.

$$
\begin{aligned}
A+B&=(x+3)+(x-3)=2x,\\[6pt]
A-B&=(x+3)-(x-3)=6,\\[6pt]
A^2-B^2&=(2x)\cdot6=12x.
\end{aligned}
$$

For the sum of the same squares, expand both binomials. The doubled products are opposites, leaving $2x^2+18$.
:::
