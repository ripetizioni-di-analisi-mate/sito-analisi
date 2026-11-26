---
titolo: Monomials, polynomials, and special products
sommario: How letters stand for numbers, what monomials and polynomials are, how to add, multiply, and divide them, and how to interpret special products as sums of areas.
---

## Letters in place of numbers

:::definizione{#espressione-letterale titolo="Algebraic expression"}
An **algebraic expression** is an expression in which letters represent some of the numbers, such as $2a + 2b$ or $x^2 - 3x$. In other words, each letter stands for a number that has yet to be chosen. Calculations with algebraic expressions are called **algebraic manipulation**.

A rectangle with side lengths $a$ and $b$ has two sides of length $a$ and two of length $b$. Its perimeter is therefore $2p = 2a + 2b$, and this formula holds for *every* rectangle. Using letters lets us write a calculation just once and then repeat it with different numbers.

::grafico{assi=0 uguale=1 poligoni="0,0 5,0 5,3 0,3" linee="0,0 5,0 5,3 0,3 0,0" etichette="2.4,-0.55,a;2.4,3.25,a;-0.55,1.4,b;5.2,1.4,b" xmin=-1 xmax=6 ymin=-1 ymax=4 titolo="A rectangle with side lengths $a$ and $b$ has perimeter $2p = 2a + 2b$. When $a = 5$ cm and $b = 3$ cm, the perimeter is $2p = 16$ cm"}

:::

:::definizione{#valore-di-un-espressione titolo="Value of an algebraic expression"}
When a number is substituted for each letter, an algebraic expression becomes a numerical expression. Its result is called the **value** of the expression for those numbers. For the perimeter of the rectangle, substituting $a = 5$ cm and $b = 3$ cm gives
$$
2p = 2 \cdot 5 + 2 \cdot 3 = 10 + 6 = 16 \text{ cm} .
$$
The multiplication sign is usually omitted between a number and a letter or between two letters. Thus $2a$ means $2 \cdot a$, and $ab$ means $a \cdot b$. When substituting numbers, we write the dot $\cdot$ again.
:::

:::esempio{titolo="Evaluating an expression with a negative number"}
We evaluate $3x^2 - x$ for $x = -2$. In place of $x$ we write $(-2)$, so the minus sign is included in the base of the power:
$$
\begin{aligned}
3 \cdot (-2)^2 - (-2) &= 3 \cdot 4 + 2 \\[6pt]
&= 12 + 2 = 14 .
\end{aligned}
$$
The order of operations calls for evaluating the power before multiplying. The square $(-2)^2$ equals $4$ because the product of two negative numbers is positive, and $-(-2)$ equals $+2$ because the opposite of $-2$ is $2$.
:::

:::attenzione
For $x = -2$, the value of $x^2$ is $(-2)^2 = 4$. The notation $-2^2$ denotes a different number, which equals $-4$ because the power is evaluated before the minus sign is applied.
:::

:::osservazione{#lettere-al-denominatore titolo="Variables in the denominator"}
Division by zero is undefined. Therefore, when a variable appears in the denominator of a fraction, we exclude the values that make the denominator zero. For $\dfrac{5}{x - 3}$, we require $x - 3 \neq 0$, that is, $x \neq 3$. For $x = 4$, the expression equals $\dfrac{5}{4 - 3} = \dfrac{5}{1} = 5$, whereas for $x = 3$ it is undefined.
:::

## Monomials

:::definizione{#monomio titolo="Monomial"}
A **monomial** is an algebraic expression formed solely by multiplying numbers and variables, with natural numbers as the exponents of the variables. Examples of monomials are $5x$, $-3a^2b$, and $\dfrac{1}{2}xy^3$. In other words, a monomial contains only products and powers of variables, with no addition, subtraction, or variables in the denominator. For this reason, $x + y$ and $\dfrac{3}{x}$ are algebraic expressions that are not monomials.

Polynomials, which we study after monomials, are sums of monomials. The monomial $4a$, for example, is the perimeter of a square with side length $a$, and for $a = 6$ cm its value is $24$ cm.
:::

:::definizione{#forma-normale titolo="Standard form, coefficient, and variable part"}
A monomial is in **standard form** when it contains just one numerical factor, written first, and each variable appears only once. The number is called the **coefficient**, and the product of the variables is called the **variable part**. For example, the monomial $2a \cdot 3ab$ in standard form is $6a^2b$ because $2 \cdot 3 = 6$ and $a \cdot a = a^2$. The coefficient of $6a^2b$ is $6$, and its variable part is $a^2b$.

The monomial $x$ has coefficient $1$, and the monomial $-x$ has coefficient $-1$. A number by itself, such as $7$, is a monomial with no variable part. A monomial with coefficient $0$ equals $0$ for every value of its variables and is called the zero monomial.
:::

:::definizione{#grado-di-un-monomio titolo="Degree of a monomial"}
The degree of a monomial in a variable is the exponent of that variable. The **degree** of the monomial, also called its total degree, is the sum of the exponents of all its variables. In other words, the degree is the number of variable factors in the monomial, counting repetitions. For $4x^3y^2$:

- the degree in $x$ is $3$;
- the degree in $y$ is $2$;
- the total degree is $3 + 2 = 5$ because $x^3y^2 = x \cdot x \cdot x \cdot y \cdot y$ contains five variable factors.

A variable written without an exponent has exponent $1$, so $7ab$ has degree $2$. A nonzero number, such as $9$, is a monomial of degree $0$. The degree is used to order the terms of a polynomial and to distinguish between types of equations, as we will see in the chapter on linear equations.
:::

:::definizione{#monomi-simili titolo="Like monomials"}
Two monomials in standard form are **like terms** if they have the same variable part. The monomials $3x^2y$, $-x^2y$, and $\dfrac{2}{5}x^2y$ are like terms because their variable part is $x^2y$ in each case. The monomials $3x^2y$ and $3xy^2$ have the same coefficient and the same degree, yet they are unlike terms because the first squares $x$ and the second squares $y$.

Two like monomials are **opposites** if their coefficients are opposites, as in $5ab$ and $-5ab$. By the rule for adding monomials, the sum of two monomials can be written as a single monomial *only if* they are like terms.
:::

## Operations with monomials

:::richiamo{titolo="Properties of exponents"}
For any pair of numbers $a$ and $b$ and natural number exponents $m$ and $n$, the following properties hold:
$$
a^m \cdot a^n = a^{m + n} , \qquad \left( a^m \right)^n = a^{m \cdot n} , \qquad (a \cdot b)^n = a^n \cdot b^n .
$$
If $a \neq 0$ and $m \geq n$, the following properties also hold:
$$
\frac{a^m}{a^n} = a^{m - n} , \qquad a^0 = 1 .
$$
:::

:::richiamo{titolo="Distributive property"}
For any three numbers $a$, $b$, and $c$, we have
$$
a \cdot (b + c) = a \cdot b + a \cdot c .
$$
:::

:::teorema{#somma-di-monomi titolo="Sum of like monomials"}
The sum of two or more like monomials is a monomial with the same variable part and a coefficient equal to the sum of their coefficients. For example,
$$
3x^2 + 5x^2 = 8x^2 , \qquad 7ab - 9ab = -2ab .
$$
The rule follows from the **distributive property** because $3x^2 + 5x^2 = (3 + 5) \cdot x^2$. In other words, $3$ times a number plus $5$ times the same number equals $8$ times that number. Indeed, for $x = 2$ we have $3 \cdot 4 + 5 \cdot 4 = 12 + 20 = 32$ and $8 \cdot 4 = 32$.

The sum of two unlike monomials, such as $3x^2$ and $5x$, is left as $3x^2 + 5x$. The sum of two opposite monomials is $0$. For example, $4y - 4y = 0$.
:::

:::teorema{#prodotto-di-monomi titolo="Product of monomials"}
The product of two monomials is a monomial whose coefficient is the product of their coefficients and in which the exponent of each variable is the sum of its exponents in the two factors. For example,
$$
\begin{aligned}
\left( 2a^2b \right) \cdot \left( -3ab^4 \right) &= 2 \cdot (-3) \cdot a^2 \cdot a \cdot b \cdot b^4 \\[6pt]
&= -6a^3b^5 .
\end{aligned}
$$
The commutative and associative properties of multiplication allow us to group numerical factors together and powers of the same variable together. The first exponent rule then gives $a^2 \cdot a = a^{2 + 1} = a^3$ and $b \cdot b^4 = b^{1 + 4} = b^5$, and the sign rule determines the sign of the coefficient. The degree of the product is the sum of the degrees of the factors. In the example, the factors have degrees $3$ and $5$, and the product has degree $8$.

The product of two monomials can be interpreted as the area of a rectangle. A rectangle with side lengths $3x$ and $2x$ can be divided into squares with side length $x$.

::grafico{assi=0 uguale=1 poligoni="0,0 6,0 6,4 0,4" linee="0,0 6,0 6,4 0,4 0,0;2,0 2,4;4,0 4,4;0,2 6,2" etichette="0.8,0.85,x²;2.8,0.85,x²;4.8,0.85,x²;0.8,2.85,x²;2.8,2.85,x²;4.8,2.85,x²;0.9,-0.55,x;2.9,-0.55,x;4.9,-0.55,x;-0.55,0.85,x;-0.55,2.85,x" xmin=-1 xmax=7 ymin=-1 ymax=5 titolo="The rectangle with side lengths $3x$ and $2x$ consists of $6$ squares with side length $x$, so its area is $3x \cdot 2x = 6x^2$"}

:::

:::teorema{#potenza-di-un-monomio titolo="Power of a monomial"}
To raise a monomial to a power, raise its coefficient to that power and multiply each variable's exponent by the exponent of the power. For example,
$$
\left( -2x^3y \right)^2 = (-2)^2 \cdot \left( x^3 \right)^2 \cdot y^2 = 4x^6y^2 .
$$
The rule follows from the properties of exponents $(a \cdot b)^n = a^n \cdot b^n$ and $\left( a^m \right)^n = a^{m \cdot n}$. Writing out the product gives the same result because $\left( -2x^3y \right) \cdot \left( -2x^3y \right) = 4x^6y^2$ by the rule for multiplying monomials. With an odd exponent, the coefficient retains its minus sign, so $\left( -a^2 \right)^3 = -a^6$.
:::

:::teorema{#quoziente-di-monomi titolo="Quotient of monomials"}
Let $B$ be a nonzero monomial whose variables have nonzero values. If every variable in $B$ also appears in the monomial $A$ with an equal or greater exponent, then the quotient $\dfrac{A}{B}$ is a monomial. Its coefficient is the quotient of the coefficients, and the exponent of each variable is the difference of its exponents. For example, for $x \neq 0$ and $y \neq 0$,
$$
\frac{12x^5y^3}{4x^2y} = \frac{12}{4} \cdot x^{5 - 2} \cdot y^{3 - 1} = 3x^3y^2 .
$$
A variable with the same exponent in both monomials does not appear in the quotient because $\dfrac{a^2}{a^2} = a^0 = 1$. For example, $\dfrac{6a^2b}{2a^2} = 3b$ for $a \neq 0$. Division is the inverse of multiplication, and indeed $3x^3y^2 \cdot 4x^2y = 12x^5y^3$. When a variable has a higher exponent in the divisor, as in $\dfrac{x^2}{x^5}$, the quotient is a rational expression, which is studied in the chapter on factorization.
:::

:::esempio{titolo="An expression with monomials"}
For $x \neq 0$ and $y \neq 0$, we simplify the expression $\dfrac{\left( 2x^2y \right)^3}{4x^4y} - 3x^2y^2$.
$$
\begin{aligned}
\frac{\left( 2x^2y \right)^3}{4x^4y} - 3x^2y^2 &= \frac{8x^6y^3}{4x^4y} - 3x^2y^2 \\[6pt]
&= 2x^2y^2 - 3x^2y^2 \\[6pt]
&= -x^2y^2 .
\end{aligned}
$$
As in numerical expressions, first we evaluate the power, then divide, and finally subtract. The monomials $2x^2y^2$ and $3x^2y^2$ are like terms, so their difference is the monomial with coefficient $2 - 3 = -1$.
:::

## Polynomials

:::definizione{#polinomio titolo="Polynomial"}
A **polynomial** is a sum of monomials, called the **terms** of the polynomial. Minus signs are part of the coefficients, so $2x^2 - 3x + 1$ is the sum of the monomials $2x^2$, $-3x$, and $1$. A polynomial with two terms is called a binomial, one with three terms a trinomial, and one with four terms a quadrinomial. A monomial is also a polynomial, with a single term.

We evaluate a polynomial in the same way as any algebraic expression. For $x = 2$, the trinomial $2x^2 - 3x + 1$ equals $2 \cdot 4 - 3 \cdot 2 + 1 = 8 - 6 + 1 = 3$.
:::

:::definizione{#riduzione-dei-termini-simili titolo="Combining like terms"}
A polynomial is **simplified** when it contains no like terms. To simplify it, we add like terms together, an operation called **combining like terms**. For example,
$$
\begin{aligned}
4x^2 + 3x - x^2 + 5 - 7x &= \left( 4x^2 - x^2 \right) + (3x - 7x) + 5 \\[6pt]
&= 3x^2 - 4x + 5 .
\end{aligned}
$$
Before simplification the polynomial has five terms, and afterward it has three. The two polynomials have the same value for every value of $x$, and the simplified polynomial requires fewer calculations. Indeed, for $x = 1$ the first equals $4 + 3 - 1 + 5 - 7 = 4$ and the second equals $3 - 4 + 5 = 4$.
:::

:::definizione{#grado-di-un-polinomio titolo="Degree of a polynomial"}
The **degree** of a simplified polynomial is the highest degree among its terms. The degree in one variable is the highest exponent of that variable. For $x^3y + 5x^2y^3 - 2y$, the terms have degrees $4$, $5$, and $1$, so the polynomial has degree $5$. Its degree in $x$ is $3$, and its degree in $y$ is also $3$.

The degree is determined after like terms have been combined. In $x^2 + 3x - x^2$, the terms $x^2$ and $-x^2$ are opposites and their sum is $0$, so the simplified polynomial is $3x$ and has degree $1$.
:::

:::definizione{#polinomio-ordinato titolo="Polynomials in descending order and complete polynomials"}
A polynomial in one variable is **in descending order** of powers if its terms are written from highest to lowest degree. It is **complete** if it contains every power of the variable from the degree of the polynomial down to degree $0$. The term of degree $0$, the number without any variables, is called the **constant term**.

- The polynomial $5x^3 - 2x^2 + x - 4$ is in descending order and is complete, with constant term $-4$.
- The polynomial $x^4 + 3x^2 - 1$ is in descending order but is incomplete because it contains no terms in $x^3$ or $x$.

In a polynomial in descending order, the first term gives the degree and the constant term comes last. For this reason, the results of polynomial calculations are usually written in descending order.
:::

## Sums and products of polynomials

:::teorema{#somma-di-polinomi titolo="Sum and difference of polynomials"}
To add two polynomials, write all their terms one after the other and combine like terms. To subtract a polynomial, change the sign of *each* of its terms and then add. In other words, a plus sign before a polynomial leaves the signs of its terms unchanged, and a minus sign reverses all of them. With $A = 3x^2 - 2x + 1$ and $B = x^2 + 5x - 4$, we have
$$
\begin{aligned}
A + B &= 3x^2 - 2x + 1 + x^2 + 5x - 4 \\[6pt]
&= 4x^2 + 3x - 3 ,
\end{aligned}
$$
$$
\begin{aligned}
A - B &= 3x^2 - 2x + 1 - x^2 - 5x + 4 \\[6pt]
&= 2x^2 - 7x + 5 .
\end{aligned}
$$
A minus sign before an expression is equivalent to multiplication by $-1$. Therefore, by the distributive property, the minus sign reverses the sign of each term of the expression.
:::

:::attenzione
In $10 - (x - 4)$, the minus sign changes the signs of *both* terms, $x$ and $-4$, giving $10 - x + 4 = 14 - x$. Changing only the sign of $x$ would give $10 - x - 4 = 6 - x$, which is a different expression. Indeed, for $x = 2$ we have $10 - (2 - 4) = 10 + 2 = 12$, whereas $6 - 2 = 4$.
:::

:::teorema{#monomio-per-polinomio titolo="Product of a monomial and a polynomial"}
To multiply a monomial by a polynomial, multiply the monomial by *each* term of the polynomial and add the resulting products. This rule is the **distributive property**. For example,
$$
\begin{aligned}
3x \left( 2x^2 - x + 4 \right) &= 3x \cdot 2x^2 + 3x \cdot (-x) + 3x \cdot 4 \\[6pt]
&= 6x^3 - 3x^2 + 12x .
\end{aligned}
$$
Each product is calculated using the rule for multiplying monomials. The distributive property also has a geometric interpretation because a rectangle with side lengths $a$ and $b + c$ can be divided into two rectangles, one with side lengths $a$ and $b$ and the other with side lengths $a$ and $c$.

::grafico{assi=0 uguale=1 poligoni="0,0 4,0 4,3 0,3" linee="0,0 6,0 6,3 0,3 0,0;4,0 4,3" etichette="1.7,1.35,ab;4.75,1.35,ac;1.9,-0.55,b;4.9,-0.55,c;-0.55,1.35,a" xmin=-1 xmax=7 ymin=-1 ymax=4 titolo="The rectangle with side lengths $a$ and $b + c$ consists of two rectangles with areas $ab$ and $ac$, so $a(b + c) = ab + ac$. With $a = 3$, $b = 4$, and $c = 2$, we have $3 \cdot 6 = 12 + 6 = 18$"}

:::

:::teorema{#prodotto-di-polinomi titolo="Product of polynomials"}
To multiply two polynomials, multiply *each* term of the first by *each* term of the second, then add the products and combine like terms. For example,
$$
\begin{aligned}
(x + 2)(3x - 5) &= x \cdot 3x + x \cdot (-5) + 2 \cdot 3x + 2 \cdot (-5) \\[6pt]
&= 3x^2 - 5x + 6x - 10 \\[6pt]
&= 3x^2 + x - 10 .
\end{aligned}
$$
The rule follows from applying the distributive property twice because $(x + 2)(3x - 5) = x\,(3x - 5) + 2\,(3x - 5)$ and each of the two summands is the product of a monomial and a polynomial. Multiplying two binomials gives four products, and multiplying a binomial by a trinomial gives six. For $x = 1$, the original product equals $3 \cdot (-2) = -6$ and the result also equals $3 + 1 - 10 = -6$.

In the figure, the four products in $(x + 2)(x + 3)$ are the areas of four rectangles.

::grafico{assi=0 uguale=1 poligoni="0,0 4,0 4,4 0,4" linee="0,0 7,0 7,6 0,6 0,0;4,0 4,6;0,4 7,4" etichette="1.65,1.85,x²;5.15,1.85,3x;1.65,4.85,2x;5.3,4.85,6;1.9,-0.55,x;5.4,-0.55,3;-0.55,1.85,x;-0.55,4.85,2" xmin=-1 xmax=8 ymin=-1 ymax=7 titolo="The rectangle with side lengths $x + 3$ and $x + 2$ consists of four parts, so $(x + 2)(x + 3) = x^2 + 3x + 2x + 6 = x^2 + 5x + 6$"}

:::

:::osservazione{#grado-del-prodotto titolo="Degree of the product"}
For polynomials in one variable, the degree of the product is the sum of the degrees of the factors because the highest-degree term of the product is the product of the two highest-degree terms. For example, $(x - 1)\left( x^2 + x + 1 \right)$ has degree $1 + 2 = 3$, and indeed
$$
\begin{aligned}
(x - 1)\left( x^2 + x + 1 \right) &= x^3 + x^2 + x - x^2 - x - 1 \\[6pt]
&= x^3 - 1 .
\end{aligned}
$$
In this product, the terms $x^2$ and $-x^2$ are opposites, as are $x$ and $-x$, so only $x^3$ and $-1$ remain.
:::

## Square of a binomial and product of a sum and a difference

:::definizione{#prodotti-notevoli titolo="Special products"}
Some products of polynomials occur so often that there is a formula for their result. These products are called **special products**. The formulas hold for all values of the variables, and numbers, monomials, or other polynomials can be substituted for the variables. The formulas let us expand a product without writing out the individual products of the terms. Read from right to left, the same formulas let us write a polynomial as a product, as we will see in the chapter on factorization.
:::

::::teorema{#quadrato-di-un-binomio titolo="Square of a binomial"}
For all values of $a$ and $b$, the following identities hold:
$$
(a + b)^2 = a^2 + 2ab + b^2 , \qquad (a - b)^2 = a^2 - 2ab + b^2 .
$$
In other words, the square of a binomial is the sum of the square of the first term, **twice the product** of the two terms, and the square of the second term. Twice the product has a minus sign when the two terms have opposite signs. For example,
$$
(x + 3)^2 = x^2 + 6x + 9 , \qquad (2y - 5)^2 = 4y^2 - 20y + 25 ,
$$
where $6x = 2 \cdot x \cdot 3$ and $-20y = 2 \cdot 2y \cdot (-5)$. In the figure, the square with side length $a + b$ is divided into four parts.

::grafico{assi=0 uguale=1 poligoni="0,0 4,0 4,4 0,4;4,4 6,4 6,6 4,6" linee="0,0 6,0 6,6 0,6 0,0;4,0 4,6;0,4 6,4" etichette="1.65,1.85,a²;4.75,1.85,ab;1.65,4.85,ab;4.75,4.85,b²;1.9,-0.55,a;4.9,-0.55,b;-0.55,1.85,a;-0.55,4.85,b" xmin=-1 xmax=7 ymin=-1 ymax=7 titolo="The square with side length $a + b$ consists of squares with areas $a^2$ and $b^2$ and two rectangles with area $ab$, so $(a + b)^2 = a^2 + 2ab + b^2$. With $a = 4$ and $b = 2$, the four areas are $16$, $8$, $8$, and $4$, and their sum is $36 = 6^2$"}

To find the area of the square with side length $a - b$, start with a square of side length $a$ and subtract two rectangles with side lengths $a$ and $b$. The square with side length $b$ has then been subtracted twice, so add it back once.

::grafico{assi=0 uguale=1 poligoni="0,0 3,0 3,3 0,3" linee="0,0 5,0 5,5 0,5 0,0;3,0 3,5;0,3 5,3" etichette="0.2,1.4,(a−b)²;3.3,1.4,b(a−b);0.2,3.9,b(a−b);3.7,3.9,b²;1.1,-0.6,a−b;3.8,-0.6,b;-1.2,1.4,a−b;-0.6,3.9,b" xmin=-2 xmax=6 ymin=-1 ymax=6 titolo="The square with side length $a$ consists of the square with side length $a - b$, two rectangles with side lengths $b$ and $a - b$, and the square with side length $b$. With $a = 5$ and $b = 2$, their areas are $9$, $6$, $6$, and $4$, and $9 = 25 - 2 \cdot 10 + 4$"}

:::dimostrazione
The square of a binomial is the product of the binomial and itself, so the rule for multiplying polynomials applies:
$$
\begin{aligned}
(a + b)^2 &= (a + b)(a + b) \\[6pt]
&= a^2 + ab + ba + b^2 \\[6pt]
&= a^2 + 2ab + b^2 .
\end{aligned}
$$
The terms $ab$ and $ba$ are equal by the commutative property, so their sum is $2ab$. For $(a - b)^2$, repeat the calculation with $-b$ in place of $b$. The two cross terms become $-ab$ and $-ba$, while the square of the second term is still $(-b)^2 = b^2$. This gives $a^2 - 2ab + b^2$.
:::
::::

:::attenzione
The square of a sum differs from the sum of the squares. With $a = 1$ and $b = 2$, we have $(1 + 2)^2 = 3^2 = 9$, whereas $1^2 + 2^2 = 1 + 4 = 5$. The difference between the two results is $4$, which is twice the product, $2 \cdot 1 \cdot 2$.
:::

::::teorema{#somma-per-differenza titolo="Product of a sum and a difference"}
For all values of $a$ and $b$, the following identity holds:
$$
(a + b)(a - b) = a^2 - b^2 .
$$
In other words, the product of the sum of two terms and their difference equals the **difference of the squares** of the two terms. For example,
$$
(x + 4)(x - 4) = x^2 - 16 , \qquad (3a - 2b)(3a + 2b) = 9a^2 - 4b^2 .
$$
The same formula can be used to calculate some numerical products mentally. For example, $21 \cdot 19 = (20 + 1)(20 - 1) = 400 - 1 = 399$.

::grafico{assi=0 uguale=1 poligoni="0,0 5,0 5,3 3,3 3,5 0,5;7,0 14,0 14,3 7,3" linee="0,0 5,0 5,3 3,3 3,5 0,5 0,0;0,3 3,3;7,0 14,0 14,3 7,3 7,0;12,0 12,3" segmenti="3,5,5,5;5,5,5,3" etichette="2.3,1.3,I;1.2,3.85,II;3.75,3.85,b²;2.4,-0.6,a;-0.6,3.85,b;1.1,5.3,a − b;5.2,1.4,a − b;9.3,1.3,I;12.75,1.3,II;9.4,-0.6,a;12.9,-0.6,b;14.2,1.4,a − b" xmin=-1 xmax=16 ymin=-1 ymax=6 titolo="The figure on the left is a square of side length $a$ with the square of side length $b$ removed, so its area is $a^2 - b^2$. Rotating part II and placing it next to part I gives a rectangle with side lengths $a + b$ and $a - b$. With $a = 5$ and $b = 2$, we have $25 - 4 = 7 \cdot 3 = 21$"}

:::dimostrazione
Multiply each term of the first binomial by each term of the second:
$$
\begin{aligned}
(a + b)(a - b) &= a^2 - ab + ba - b^2 \\[6pt]
&= a^2 - b^2 .
\end{aligned}
$$
The terms $-ab$ and $ba$ are opposites, so their sum is $0$ and only the two squares remain.
:::
::::

## Square of a trinomial and cube of a binomial

::::teorema{#quadrato-di-un-trinomio titolo="Square of a trinomial"}
For all values of $a$, $b$, and $c$, the following identity holds:
$$
(a + b + c)^2 = a^2 + b^2 + c^2 + 2ab + 2ac + 2bc .
$$
In other words, the square of a trinomial is the sum of the squares of the three terms and twice the product of each pair of terms. There are three such products because three terms form three pairs: $a$ and $b$, $a$ and $c$, and $b$ and $c$. The sign of each doubled product is determined by the sign rule. For example,
$$
(x + y - 2)^2 = x^2 + y^2 + 4 + 2xy - 4x - 4y ,
$$
where $2 \cdot x \cdot (-2) = -4x$ and $2 \cdot y \cdot (-2) = -4y$.

::grafico{assi=0 uguale=1 poligoni="0,0 3,0 3,3 0,3;3,3 5,3 5,5 3,5;5,5 6,5 6,6 5,6" linee="0,0 6,0 6,6 0,6 0,0;3,0 3,6;5,0 5,6;0,3 6,3;0,5 6,5" etichette="1.2,1.3,a²;3.7,1.3,ab;5.15,1.3,ac;1.2,3.85,ab;3.7,3.85,b²;5.15,3.85,bc;1.2,5.35,ac;3.7,5.35,bc;5.2,5.35,c²;1.4,-0.6,a;3.9,-0.6,b;5.4,-0.6,c;-0.6,1.3,a;-0.6,3.85,b;-0.6,5.35,c" xmin=-1 xmax=7 ymin=-1 ymax=7 titolo="The square with side length $a + b + c$ consists of three squares with areas $a^2$, $b^2$, and $c^2$ and six rectangles arranged in three pairs of congruent rectangles. With $a = 3$, $b = 2$, and $c = 1$, we have $9 + 4 + 1 + 12 + 6 + 4 = 36 = 6^2$"}

:::dimostrazione
Multiply the trinomial by itself, taking each term times each term:
$$
\begin{aligned}
(a + b + c)(a + b + c) &= a^2 + ab + ac \\[6pt]
&\quad + ba + b^2 + bc \\[6pt]
&\quad + ca + cb + c^2 \\[6pt]
&= a^2 + b^2 + c^2 + 2ab + 2ac + 2bc .
\end{aligned}
$$
The nine products are three squares and six cross terms. By the commutative property, the cross terms are equal in pairs, so they give the three doubled products $2ab$, $2ac$, and $2bc$.
:::
::::

::::teorema{#cubo-di-un-binomio titolo="Cube of a binomial"}
For all values of $a$ and $b$, the following identities hold:
$$
\begin{aligned}
(a + b)^3 &= a^3 + 3a^2b + 3ab^2 + b^3 , \\[6pt]
(a - b)^3 &= a^3 - 3a^2b + 3ab^2 - b^3 .
\end{aligned}
$$
In other words, the cube of a binomial is the sum of four terms: the cube of the first term, three times the square of the first times the second, three times the first times the square of the second, and the cube of the second term. For example,
$$
\begin{aligned}
(x + 2)^3 &= x^3 + 3 \cdot x^2 \cdot 2 + 3 \cdot x \cdot 2^2 + 2^3 \\[6pt]
&= x^3 + 6x^2 + 12x + 8 .
\end{aligned}
$$
The same formula gives $11^3 = (10 + 1)^3 = 1000 + 300 + 30 + 1 = 1331$.

:::dimostrazione
The cube of a binomial is its square multiplied by the binomial once more. Therefore, we use the formula for the square of a binomial and then the rule for multiplying polynomials:
$$
\begin{aligned}
(a + b)^3 &= (a + b)^2 (a + b) \\[6pt]
&= \left( a^2 + 2ab + b^2 \right)(a + b) \\[6pt]
&= a^3 + a^2b + 2a^2b + 2ab^2 + ab^2 + b^3 \\[6pt]
&= a^3 + 3a^2b + 3ab^2 + b^3 .
\end{aligned}
$$
For $(a - b)^3$ we substitute $-b$ for $b$. The terms $3a^2b$ and $b^3$ change sign because they contain $b$ to an odd power, whereas $3ab^2$ remains positive because $(-b)^2 = b^2$.
:::
::::

:::attenzione
The cube of a sum differs from the sum of the cubes. With $a = 1$ and $b = 2$, we have $(1 + 2)^3 = 3^3 = 27$, whereas $1^3 + 2^3 = 1 + 8 = 9$. The difference $18$ is the sum of the two products with a factor of three because $3 \cdot 1^2 \cdot 2 + 3 \cdot 1 \cdot 2^2 = 6 + 12 = 18$.
:::

## Dividing a polynomial by a monomial

:::teorema{#divisione-polinomio-monomio titolo="Dividing a polynomial by a monomial"}
Let $M$ be a nonzero monomial. To divide a polynomial by $M$, divide *each* term of the polynomial by $M$ and add the quotients. The result is a polynomial when every term is divisible by $M$, that is, when every variable in $M$ appears in each term with an equal or greater exponent. For example, for $x \neq 0$,
$$
\begin{aligned}
\frac{6x^3 - 9x^2 + 3x}{3x} &= \frac{6x^3}{3x} - \frac{9x^2}{3x} + \frac{3x}{3x} \\[6pt]
&= 2x^2 - 3x + 1 .
\end{aligned}
$$
Dividing by $3x$ is equivalent to multiplying by $\dfrac{1}{3x}$, so the rule is the **distributive property** applied to division. The same rule holds for numbers. For example, $\dfrac{12 + 18}{6} = \dfrac{12}{6} + \dfrac{18}{6} = 2 + 3 = 5$, and indeed $\dfrac{30}{6} = 5$.
:::

:::esempio{titolo="Division with two variables"}
For $a \neq 0$ and $b \neq 0$, we divide $8a^3b^2 - 12a^2b^3 + 4a^2b^2$ by $4a^2b$.
$$
\begin{aligned}
&\frac{8a^3b^2 - 12a^2b^3 + 4a^2b^2}{4a^2b} \\[6pt]
&= \frac{8a^3b^2}{4a^2b} - \frac{12a^2b^3}{4a^2b} + \frac{4a^2b^2}{4a^2b} \\[6pt]
&= 2ab - 3b^2 + b .
\end{aligned}
$$
Each quotient is calculated using the rule for dividing monomials. In the first, for example, $\dfrac{8}{4} = 2$, $a^{3 - 2} = a$, and $b^{2 - 1} = b$. Multiplication is the inverse of division, so the product of the quotient and the divisor is the original polynomial, and indeed $4a^2b\,\left( 2ab - 3b^2 + b \right) = 8a^3b^2 - 12a^2b^3 + 4a^2b^2$.
:::

:::attenzione
When dividing by a monomial, divide *each* term of the polynomial. With $x = 2$ we have $\dfrac{6x^3 - 9x^2 + 3x}{3x} = \dfrac{48 - 36 + 6}{6} = \dfrac{18}{6} = 3$, and indeed $2x^2 - 3x + 1$ equals $8 - 6 + 1 = 3$. Dividing only the first term would give $2x^2 - 9x^2 + 3x$, which for $x = 2$ equals $8 - 36 + 6 = -22$.
:::
