---
titolo: Linear equations and word problems
sommario: What an equation is and how to check a solution, how to use the equivalence principles to solve linear polynomial equations, equations with fractions, and rational equations, when an equation is inconsistent or an identity, how to rearrange formulas, and how to solve a word problem with an equation.
---

## Equalities and equations

:::definizione{#uguaglianza-e-identita titolo="Equality and identity"}
An **equality** consists of two expressions separated by the $=$ sign. The expression to the left of the sign is called the **left-hand side**, and the one to the right is called the right-hand side. An equality between numbers can be true or false. For example, $3 + 4 = 7$ is true, whereas $2 \cdot 5 = 12$ is false because $2 \cdot 5 = 10$.

An equality between expressions with letters that is true for *every* value of the letters is called an **identity**. In other words, an identity remains true whatever numbers we substitute for the letters. For example, $2\,(x + 1) = 2x + 2$ is an identity by the distributive property. When $x = 5$, both sides equal $12$, and when $x = -3$, both sides equal $-4$.
:::

:::definizione{#equazione titolo="Equation"}
An **equation** is an equality between two expressions involving an unknown number. The unknown number is called the **unknown** and is usually denoted by the letter $x$. In other words, an equation is an equality in which we seek the number to substitute for $x$ to make the equality true.

In the equation $2x + 3 = 9$, the left-hand side is $2x + 3$ and the right-hand side is $9$. When $x = 1$, the left-hand side equals $2 \cdot 1 + 3 = 5$, so the equality $5 = 9$ is false. When $x = 3$, the left-hand side equals $2 \cdot 3 + 3 = 9$, so the equality $9 = 9$ is true.
:::

:::definizione{#soluzione-e-verifica titolo="Solution and check"}
A **solution** of an equation is a number that makes the equality true when substituted for the unknown. To **solve** an equation is to find all its solutions. Testing a solution is called **checking** it. We substitute the number into both sides, evaluate them, and check that the two values are equal.

For the equation $2x + 3 = 9$, the number $3$ is a solution because $2 \cdot 3 + 3 = 9$. The number $4$ is not a solution because $2 \cdot 4 + 3 = 11$ and $11$ differs from $9$. We can use this check to verify the result at the end of each exercise.
:::

:::esempio{titolo="Checking a solution with the unknown on both sides"}
We check whether $x = 3$ is a solution of the equation $5x - 4 = 3x + 2$. The left-hand side equals $5 \cdot 3 - 4 = 15 - 4 = 11$. The right-hand side equals $3 \cdot 3 + 2 = 9 + 2 = 11$. The two values are equal, so $x = 3$ is a solution.

When $x = 2$, the left-hand side equals $10 - 4 = 6$ and the right-hand side equals $6 + 2 = 8$. The two values differ, so $x = 2$ is not a solution.
:::

## Equivalence principles

:::definizione{#equazioni-equivalenti titolo="Equivalent equations"}
Two equations are **equivalent** if they have the same solutions. For example, $2x + 3 = 9$ and $x = 3$ are equivalent because both have the number $3$ as their only solution.

To solve an equation, we transform it into a sequence of simpler equivalent equations. This gives a form such as $x = 3$, from which we can read off the solution. The two equivalence principles describe the transformations we can use.
:::

:::osservazione{#bilancia titolo="A balance scale"}
We can think of an equation as a scale with two pans in balance. The left pan represents the left-hand side and the right pan represents the right-hand side. The balance corresponds to the $=$ sign. In the equation $2x + 3 = 9$, each box weighs $x$ kilograms and each small square weighs $1$ kg.

::grafico{assi=0 uguale=1 poligoni="-0.6,0 0.6,0 0,2;-6.6,2.5 -5.6,2.5 -5.6,3.5 -6.6,3.5;-5.45,2.5 -4.45,2.5 -4.45,3.5 -5.45,3.5" linee="-2,0 2,0;-5,2 5,2;-4.5,2 -4.5,2.5;4.5,2 4.5,2.5;-6.8,2.5 -2.2,2.5;2.2,2.5 6.8,2.5;-6.6,2.5 -5.6,2.5 -5.6,3.5 -6.6,3.5 -6.6,2.5;-5.45,2.5 -4.45,2.5 -4.45,3.5 -5.45,3.5 -5.45,2.5;-4.3,2.5 -3.7,2.5 -3.7,3.1 -4.3,3.1 -4.3,2.5;-3.6,2.5 -3,2.5 -3,3.1 -3.6,3.1 -3.6,2.5;-2.9,2.5 -2.3,2.5 -2.3,3.1 -2.9,3.1 -2.9,2.5;2.76,2.5 3.36,2.5 3.36,3.1 2.76,3.1 2.76,2.5;3.48,2.5 4.08,2.5 4.08,3.1 3.48,3.1 3.48,2.5;4.2,2.5 4.8,2.5 4.8,3.1 4.2,3.1 4.2,2.5;4.92,2.5 5.52,2.5 5.52,3.1 4.92,3.1 4.92,2.5;5.64,2.5 6.24,2.5 6.24,3.1 5.64,3.1 5.64,2.5;3.12,3.1 3.72,3.1 3.72,3.7 3.12,3.7 3.12,3.1;3.84,3.1 4.44,3.1 4.44,3.7 3.84,3.7 3.84,3.1;4.56,3.1 5.16,3.1 5.16,3.7 4.56,3.7 4.56,3.1;5.28,3.1 5.88,3.1 5.88,3.7 5.28,3.7 5.28,3.1" etichette="-6.22,2.82,x;-5.07,2.82,x" xmin=-7.5 xmax=7.5 ymin=-0.5 ymax=4.3 titolo="The scale is balanced and represents the equation $2x + 3 = 9$. The left pan holds $2$ boxes of weight $x$ and $3$ weights of $1$ kg each, and the right pan holds $9$ weights of $1$ kg each"}

The scale stays balanced if we do the same thing to both pans. We can remove $3$ weights of $1$ kg each on the left and $3$ on the right. The two boxes remain on the left pan and $6$ kg remain on the right, so the equation becomes $2x = 6$.

::grafico{assi=0 uguale=1 poligoni="-0.6,0 0.6,0 0,2;-6.6,2.5 -5.6,2.5 -5.6,3.5 -6.6,3.5;-5.45,2.5 -4.45,2.5 -4.45,3.5 -5.45,3.5" linee="-2,0 2,0;-5,2 5,2;-4.5,2 -4.5,2.5;4.5,2 4.5,2.5;-6.8,2.5 -2.2,2.5;2.2,2.5 6.8,2.5;-6.6,2.5 -5.6,2.5 -5.6,3.5 -6.6,3.5 -6.6,2.5;-5.45,2.5 -4.45,2.5 -4.45,3.5 -5.45,3.5 -5.45,2.5;2.76,2.5 3.36,2.5 3.36,3.1 2.76,3.1 2.76,2.5;3.48,2.5 4.08,2.5 4.08,3.1 3.48,3.1 3.48,2.5;4.2,2.5 4.8,2.5 4.8,3.1 4.2,3.1 4.2,2.5;4.92,2.5 5.52,2.5 5.52,3.1 4.92,3.1 4.92,2.5;5.64,2.5 6.24,2.5 6.24,3.1 5.64,3.1 5.64,2.5;4.2,3.1 4.8,3.1 4.8,3.7 4.2,3.7 4.2,3.1" etichette="-6.22,2.82,x;-5.07,2.82,x" xmin=-7.5 xmax=7.5 ymin=-0.5 ymax=4.3 titolo="After we remove $3$ weights of $1$ kg each from both pans, the scale remains balanced and represents the equation $2x = 6$"}

We can now halve the contents of both pans. One box remains on the left and $3$ kg remain on the right, so each box weighs $3$ kg and the solution is $x = 3$.
:::

::::teorema{#primo-principio titolo="First equivalence principle"}
Adding or subtracting the same number, or the same expression involving $x$, on both sides of an equation gives an equivalent equation.

We can use this principle to eliminate a number from one side. In the equation $x - 5 = 2$, adding $5$ to both sides gives $x - 5 + 5 = 2 + 5$, that is, $x = 7$.

:::dimostrazione
Consider the equation $x - 5 = 2$ and its solution $x = 7$. When $x = 7$, the two sides have the same value because $7 - 5 = 2$. Adding $5$ to two equal numbers still gives two equal numbers, so $7$ is also a solution of $x - 5 + 5 = 2 + 5$. This reasoning applies to any solution and any number added.

We can also reverse the operation because subtracting $5$ from both sides of the new equation gives the original equation. Therefore every solution of the new equation also solves the original one, and the two equations are equivalent.
:::
::::

:::teorema{#regola-del-trasporto titolo="Transposition rule"}
In an equation, we can move a term from one side to the other by changing its sign. In other words, a term changes sign when it moves across the $=$ sign.

The rule follows from the first principle. In the equation $5x - 4 = 3x + 2$, we add $4$ to both sides and subtract $3x$ from both sides:
$$
\begin{aligned}
5x - 4 + 4 - 3x &= 3x + 2 + 4 - 3x \\[6pt]
5x - 3x &= 2 + 4 \\[6pt]
2x &= 6 .
\end{aligned}
$$
The term $-4$ has disappeared from the left-hand side and appears as $+4$ on the right. The term $3x$ has disappeared from the right-hand side and appears as $-3x$ on the left. The rule lets us write the second line directly, without going through the first.
:::

:::teorema{#secondo-principio titolo="Second equivalence principle"}
Multiplying or dividing both sides of an equation by the same *nonzero* number gives an equivalent equation.

The principle holds because multiplying two equal numbers by the same number still gives two equal numbers. Dividing by that number then takes us back to the original equation. The principle lets us eliminate the number multiplying $x$. From the equation $2x = 6$, dividing both sides by $2$ gives $x = 3$.
:::

:::esempio{titolo="Four equations solved using the principles"}
- In the equation $x + 7 = 12$, we subtract $7$ from both sides, so $x = 12 - 7 = 5$.
- In the equation $4x = 20$, we divide both sides by $4$, so $x = \dfrac{20}{4} = 5$.
- In the equation $\dfrac{x}{2} = 6$, we multiply both sides by $2$, so $x = 12$.
- In the equation $-3x = 12$, we divide both sides by $-3$, so $x = \dfrac{12}{-3} = -4$. Checking gives $-3 \cdot (-4) = 12$ by the sign rule.
:::

:::attenzione
Multiplying both sides by zero does not give an equivalent equation. The equation $x = 3$ has only one solution, the number $3$. Multiplying by $0$ gives $0 \cdot x = 0 \cdot 3$, that is, $0 = 0$, which is true for every $x$. For example, $x = 5$ is a solution of the new equation but not of the original one.
:::

## Linear polynomial equations

:::definizione{#equazione-primo-grado titolo="Linear polynomial equation"}
An equation is called **polynomial** here if the unknown does not appear in any denominator. A polynomial equation is **linear** if, after simplification, it can be written in the form
$$
a\,x = b ,
$$
where $a$ and $b$ are numbers. In other words, after simplification, $x$ occurs only with exponent $1$.

For example, $5\,(x - 2) = 2\,(x + 4) + 3$ is a linear polynomial equation. The equation $(x + 3)^2 = x^2 + 21$ contains $x^2$ but is also linear because the term $x^2$ appears on both sides and can be removed using the first principle. The equation $\dfrac{3}{x} = 1$, however, is not polynomial because $x$ is in the denominator.
:::

:::teorema{#risoluzione-equazione-intera titolo="Solving a polynomial equation"}
We solve a linear polynomial equation in four steps.

1. Expand the products using the distributive property and the special product identities.
2. Use the transposition rule to move the terms containing $x$ to the left-hand side and the numbers to the right-hand side.
3. Combine like terms to obtain the form $a\,x = b$.
4. If $a \neq 0$, divide both sides by $a$ using the second principle to obtain $x = \dfrac{b}{a}$.

For example, for the equation $7x - 5 = 4x + 10$ we have
$$
\begin{aligned}
7x - 4x &= 10 + 5 \\[6pt]
3x &= 15 \\[6pt]
x &= 5 .
\end{aligned}
$$
Checking gives $7 \cdot 5 - 5 = 30$ and $4 \cdot 5 + 10 = 30$, so the equation has solution $x = 5$.
:::

:::esempio{titolo="An equation with products"}
We solve $5\,(x - 2) = 2\,(x + 4) + 3$. We expand the products using the distributive property and then move the terms:
$$
\begin{aligned}
5x - 10 &= 2x + 8 + 3 \\[6pt]
5x - 2x &= 11 + 10 \\[6pt]
3x &= 21 \\[6pt]
x &= 7 .
\end{aligned}
$$
Checking gives $5 \cdot (7 - 2) = 25$ on the left-hand side and $2 \cdot (7 + 4) + 3 = 22 + 3 = 25$ on the right, so the equation has solution $x = 7$.
:::

:::esempio{titolo="An equation with a special product"}
We solve $(x + 3)^2 = x^2 + 21$. The square of a binomial is $(x + 3)^2 = x^2 + 6x + 9$, as we saw in the chapter on monomials and polynomials. Therefore
$$
\begin{aligned}
x^2 + 6x + 9 &= x^2 + 21 \\[6pt]
6x &= 21 - 9 \\[6pt]
6x &= 12 \\[6pt]
x &= 2 .
\end{aligned}
$$
In the second step, we subtracted the term $x^2$ from both sides using the first principle. Checking gives $(2 + 3)^2 = 25$ and $4 + 21 = 25$.
:::

:::esempio{titolo="A negative or fractional solution"}
The solution can be a negative number or a fraction. We solve $2x + 9 = 5x + 7$:
$$
\begin{aligned}
2x - 5x &= 7 - 9 \\[6pt]
-3x &= -2 \\[6pt]
x &= \frac{-2}{-3} = \frac{2}{3} .
\end{aligned}
$$
The quotient of two negative numbers is positive by the sign rule. Checking gives $2 \cdot \dfrac{2}{3} + 9 = \dfrac{4}{3} + \dfrac{27}{3} = \dfrac{31}{3}$ and $5 \cdot \dfrac{2}{3} + 7 = \dfrac{10}{3} + \dfrac{21}{3} = \dfrac{31}{3}$.

::grafico{f="2*x+9;5*x+7" punti="0.6667,10.3333,pieno" segmenti="0.6667,0,0.6667,10.3333" xmin=-2 xmax=4 ymin=-4 ymax=28 legenda="y = 2x + 9;y = 5x + 7" titolo="The lines $y = 2x + 9$ and $y = 5x + 7$ intersect at the point with x-coordinate $\dfrac{2}{3}$, which is the solution of the equation"}

:::

:::attenzione
A minus sign before an expression changes the sign of *every* term in the expression. In the equation $12 - (x - 3) = 2x$ we have $-(x - 3) = -x + 3$, so $12 - x + 3 = 2x$, that is, $15 = 3x$ and $x = 5$. Writing $12 - x - 3 = 2x$ instead gives $x = 3$, which fails the check because $12 - (3 - 3) = 12$ whereas $2 \cdot 3 = 6$.
:::

:::osservazione{#lettura-grafica titolo="Reading solutions from a graph"}
Each side of a linear equation, such as $5x - 4$ or $3x + 2$, can be graphed as a line, as described in the chapter on the Cartesian plane and lines. The solution is the value of $x$ where the two lines intersect because the two sides have the same value at that point.

::grafico{f="5*x-4;3*x+2" punti="3,11,pieno" segmenti="3,0,3,11" xmin=-1 xmax=6 ymin=-8 ymax=24 legenda="y = 5x - 4;y = 3x + 2" titolo="The lines $y = 5x - 4$ and $y = 3x + 2$ intersect at $(3, 11)$, so the equation $5x - 4 = 3x + 2$ has solution $x = 3$"}

:::

## Equations with fractions

:::teorema{#equazioni-con-denominatori titolo="Clearing denominators"}
If a polynomial equation contains fractions with numerical denominators, multiply *all* terms on both sides by the least common multiple of the denominators. The least common multiple is nonzero, so by the second principle the resulting equation is equivalent to the original one and no longer contains fractions.

For example, in the equation
$$
\frac{x}{2} + \frac{x}{3} = 5
$$
the least common multiple of the denominators is $\operatorname{mcm}(2, 3) = 6$. Since $6 \cdot \dfrac{x}{2} = 3x$ and $6 \cdot \dfrac{x}{3} = 2x$, we obtain
$$
\begin{aligned}
3x + 2x &= 30 \\[6pt]
5x &= 30 \\[6pt]
x &= 6 .
\end{aligned}
$$
Checking gives $\dfrac{6}{2} + \dfrac{6}{3} = 3 + 2 = 5$.
:::

:::esempio{titolo="Numerators with several terms"}
We solve
$$
\frac{x + 4}{3} - \frac{x - 1}{2} = 1 .
$$
The least common multiple of the denominators is $6$. After multiplication by $6$, the first term becomes $2\,(x + 4)$ and the second becomes $3\,(x - 1)$. The factor $3$ multiplies both terms of the numerator $x - 1$. The minus sign before the fraction then changes the sign of both terms:
$$
\begin{aligned}
2\,(x + 4) - 3\,(x - 1) &= 6 \\[6pt]
2x + 8 - 3x + 3 &= 6 \\[6pt]
-x &= 6 - 11 \\[6pt]
-x &= -5 \\[6pt]
x &= 5 .
\end{aligned}
$$
The last step follows by multiplying both sides by $-1$. Checking gives $\dfrac{9}{3} - \dfrac{4}{2} = 3 - 2 = 1$.
:::

:::attenzione
The least common multiple also multiplies the terms without denominators. In the equation $\dfrac{x}{2} + \dfrac{x}{3} = 5$, writing $3x + 2x = 5$ gives $x = 1$. Checking reveals the error because $\dfrac{1}{2} + \dfrac{1}{3} = \dfrac{5}{6}$, which differs from $5$.
:::

## Conditional equations, inconsistent equations, and identities

:::teorema{#tre-casi titolo="Conditional equations, inconsistent equations, and identities"}
After simplification, a linear equation takes the form $a\,x = b$. There are three cases.

- If $a \neq 0$, the equation is **conditional**. It has a single solution, $x = \dfrac{b}{a}$.
- If $a = 0$ and $b \neq 0$, the equation is **inconsistent**. We have $0 \cdot x = b$, and the left-hand side equals $0$ for every $x$, so it never equals $b$. The equation has no solutions.
- If $a = 0$ and $b = 0$, the equation is an **identity**. We have $0 \cdot x = 0$, which is true for every $x$, so every number is a solution. In this case the original equation is an identity.

For example, $4x = 8$ is conditional and has solution $x = 2$, the equation $0 \cdot x = 7$ is inconsistent, and the equation $0 \cdot x = 0$ is an identity.
:::

:::esempio{titolo="An inconsistent equation"}
We solve $3\,(x + 2) - x = 2x + 1$:
$$
\begin{aligned}
3x + 6 - x &= 2x + 1 \\[6pt]
2x + 6 &= 2x + 1 \\[6pt]
2x - 2x &= 1 - 6 \\[6pt]
0 \cdot x &= -5 .
\end{aligned}
$$
The equation is **inconsistent**. When $x = 0$, the left-hand side equals $6$ and the right-hand side equals $1$. When $x = 10$, they equal $26$ and $21$. The left-hand side always exceeds the right-hand side by $5$.

::grafico{f="2*x+6;2*x+1" xmin=-4 xmax=4 ymin=-6 ymax=14 legenda="y = 2x + 6;y = 2x + 1" titolo="The lines $y = 2x + 6$ and $y = 2x + 1$ are parallel and have no points in common, so the equation $2x + 6 = 2x + 1$ is inconsistent"}

:::

:::esempio{titolo="An identity"}
We solve $4\,(x - 1) + 6 = 2\,(2x + 1)$:
$$
\begin{aligned}
4x - 4 + 6 &= 4x + 2 \\[6pt]
4x + 2 &= 4x + 2 \\[6pt]
0 \cdot x &= 0 .
\end{aligned}
$$
The equation is an **identity**, and every number is a solution. When $x = 1$, both sides equal $6$, and when $x = -2$, both sides equal $-6$.
:::

:::attenzione
An equation with solution $x = 0$ is conditional. In the equation $3x + 4 = x + 4$, we obtain $2x = 0$, so $x = \dfrac{0}{2} = 0$. Checking gives $4 = 4$. This equation has the solution $0$, whereas an inconsistent equation has no solutions.
:::

## Rational equations

:::definizione{#equazione-fratta titolo="Rational equation"}
An equation is called **rational** here if the unknown appears in at least one denominator. For example,
$$
\frac{3}{x} = \frac{1}{x - 2}
$$
is a rational equation. A fraction with zero in its denominator is undefined. Therefore, as we saw in the chapter on factoring, we write the **domain restrictions**, that is, the conditions that make all denominators nonzero. In other words, the domain restrictions tell us which numbers we can substitute for $x$.
:::

:::teorema{#risoluzione-equazione-fratta titolo="Solving a rational equation"}
We solve a rational equation in four steps.

1. Write the domain restrictions.
2. Multiply both sides by the least common multiple of the denominators, which is nonzero under the domain restrictions. This gives a polynomial equation.
3. Solve the polynomial equation.
4. Check the solution against the domain restrictions. A solution that makes a denominator zero is **discarded**, that is, it is inadmissible.

For the equation $\dfrac{3}{x} = \dfrac{1}{x - 2}$, the denominators are $x$ and $x - 2$, and both must be nonzero:
$$
\begin{cases}
x \neq 0 \\
x \neq 2
\end{cases}
$$
Multiplying both sides by $x\,(x - 2)$ gives
$$
\begin{aligned}
3\,(x - 2) &= x \\[6pt]
3x - 6 &= x \\[6pt]
2x &= 6 \\[6pt]
x &= 3 .
\end{aligned}
$$
The number $3$ differs from $0$ and from $2$, so it is admissible. Checking gives $\dfrac{3}{3} = 1$ and $\dfrac{1}{3 - 2} = 1$.

::grafico{assi=0 uguale=1 linee="-1.5,0 5.5,0;5.3,0.1 5.5,0 5.3,-0.1;-1,-0.08 -1,0.08;0,-0.08 0,0.08;1,-0.08 1,0.08;2,-0.08 2,0.08;3,-0.08 3,0.08;4,-0.08 4,0.08;5,-0.08 5,0.08" punti="0,0,vuoto;2,0,vuoto;3,0,pieno" etichette="-1.12,-0.4,−1;-0.05,-0.4,0;0.95,-0.4,1;1.95,-0.4,2;2.95,-0.4,3;3.95,-0.4,4;4.95,-0.4,5;5.45,0.25,x" xmin=-1.8 xmax=5.9 ymin=-0.7 ymax=0.5 titolo="For the equation $\dfrac{3}{x} = \dfrac{1}{x - 2}$, the values $x = 0$ and $x = 2$ are excluded (open circles). The solution $x = 3$ (solid dot) differs from the excluded values and is therefore admissible"}

:::

:::attenzione
The solution of the polynomial equation may be an excluded value. In the equation $\dfrac{x}{x - 2} = \dfrac{2}{x - 2}$, the domain restriction is $x \neq 2$. Multiplying by $x - 2$ gives $x = 2$, which is precisely the excluded value. Substituting the number $2$ into the original equation gives $\dfrac{2}{0}$, which is undefined. Therefore we discard the solution, and the rational equation is **inconsistent**.
:::

:::richiamo{titolo="Difference of squares"}
For all values of $a$ and $b$, we have $a^2 - b^2 = (a + b)(a - b)$.
:::

:::esempio{titolo="A denominator that needs to be factored"}
We solve
$$
\frac{1}{x - 1} + \frac{1}{x + 1} = \frac{6}{x^2 - 1} .
$$
By the difference of squares, $x^2 - 1 = (x - 1)(x + 1)$, so the least common multiple of the denominators is $(x - 1)(x + 1)$. This product is zero if either factor is zero, so the domain restrictions are
$$
\begin{cases}
x \neq 1 \\
x \neq -1
\end{cases}
$$
When we multiply both sides by $(x - 1)(x + 1)$, the first term becomes $x + 1$, the second becomes $x - 1$, and the right-hand side becomes $6$:
$$
\begin{aligned}
(x + 1) + (x - 1) &= 6 \\[6pt]
2x &= 6 \\[6pt]
x &= 3 .
\end{aligned}
$$
The number $3$ satisfies the domain restrictions, so it is admissible. Checking gives $\dfrac{1}{2} + \dfrac{1}{4} = \dfrac{3}{4}$ and $\dfrac{6}{8} = \dfrac{3}{4}$.
:::

## Rearranging formulas

:::definizione{#formule-inverse titolo="Rearranged formula"}
A formula is an equality relating several quantities. For example, the average speed $v$ on a trip is the distance traveled $s$ divided by the travel time $t$:
$$
v = \frac{s}{t} .
$$
When we know all but one of the quantities, we treat the missing quantity as the unknown and solve for it using the equivalence principles. The resulting formula is called a **rearranged formula**. In other words, a rearranged formula gives the desired quantity directly.

Multiplying both sides by $t$, which is nonzero, gives $s = v \cdot t$. We then divide both sides by $v$, with $v \neq 0$, to obtain
$$
t = \frac{s}{v} .
$$
A train travels $300$ km at an average speed of $120$ km/h. The travel time is $t = \dfrac{300}{120} = \dfrac{5}{2}$ hours, that is, $2$ hours and $30$ minutes.
:::

:::esempio{titolo="Height of a rectangle"}
The area of a rectangle with base $b$ and height $h$ is $A = b \cdot h$. Dividing both sides by $b$, which is nonzero, gives the rearranged formula $h = \dfrac{A}{b}$. A rectangle with area $24$ cm² and base $6$ cm therefore has height $h = \dfrac{24}{6} = 4$ cm.

::grafico{assi=0 uguale=1 poligoni="0,0 6,0 6,4 0,4" linee="0,0 6,0 6,4 0,4 0,0" etichette="2.2,-0.7,b = 6 cm;6.3,1.9,h;2,1.9,A = 24 cm²" xmin=-1 xmax=8 ymin=-1.3 ymax=4.6 titolo="The rectangle has area $A = 24$ cm² and base $b = 6$ cm, so its height is $h = \dfrac{24}{6} = 4$ cm"}

:::

:::esempio{titolo="A formula with a fixed charge"}
A taxi charges $3$ euros at the start of a ride plus $2$ euros for each kilometer. The cost of a ride of $k$ kilometers is $C = 3 + 2k$. To solve for $k$, we subtract $3$ from both sides to obtain $C - 3 = 2k$. We then divide both sides by $2$:
$$
k = \frac{C - 3}{2} .
$$
A ride costing $19$ euros is therefore $k = \dfrac{19 - 3}{2} = \dfrac{16}{2} = 8$ km long. Checking gives $3 + 2 \cdot 8 = 19$.
:::

## From words to an equation

:::osservazione{#impostare-un-problema titolo="Setting up a word problem"}
Many everyday problems can be solved with a linear equation. The procedure has five steps.

1. Choose the unknown. Usually $x$ is the quantity the problem asks for or a quantity from which the others follow directly. State what $x$ represents and give its unit of measurement.
2. Express the other quantities in the problem in terms of $x$.
3. Translate the sentence relating the quantities into an equation.
4. Solve the equation.
5. Check that the solution makes sense in the problem and write the answer in a sentence. A count of people or objects is a natural number, an age is positive, and prices and lengths are positive.

For example, if three times a number plus $8$ equals $35$, we denote the number by $x$ and write $3x + 8 = 35$. Therefore $3x = 27$ and $x = 9$. Checking gives $3 \cdot 9 + 8 = 35$.
:::

:::esempio{#traduzione-del-testo titolo="From words to symbols"}
Certain expressions occur frequently in word problems.

- Twice a number $x$, three times the number, and half the number are $2x$, $3x$, and $\dfrac{x}{2}$.
- A number increased by $5$ is $x + 5$, and a number decreased by $4$ is $x - 4$.
- The sentence "Anna is $7$ years older than Bruno" becomes $A = B + 7$, and the sentence "Anna is three times as old as Bruno" becomes $A = 3B$.
- $30\%$ of a number $x$ is $\dfrac{30}{100}\,x$, as we saw in the chapter on decimals and percentages.
:::

:::esempio{#numeri-consecutivi titolo="Consecutive numbers"}
Two natural numbers are called **consecutive** if the second is the first increased by $1$, as in $15$ and $16$. We can therefore write three consecutive numbers as $x$, $x + 1$, and $x + 2$.

We seek three consecutive numbers with sum $48$. The equation is
$$
\begin{aligned}
x + (x + 1) + (x + 2) &= 48 \\[6pt]
3x + 3 &= 48 \\[6pt]
3x &= 45 \\[6pt]
x &= 15 .
\end{aligned}
$$
The numbers are $15$, $16$, and $17$, and indeed $15 + 16 + 17 = 48$. With a sum of $50$, we would obtain $3x = 47$, so $x = \dfrac{47}{3}$, which is not a natural number. Therefore no three consecutive natural numbers have sum $50$.
:::

## Problems about ages, prices, and travel

:::esempio{#problemi-eta titolo="Age problems"}
A father is $30$ years old and his son is $6$. We seek the number of years until the father is three times as old as his son. Let $x$ be the number of years. In $x$ years the father will be $30 + x$ years old and his son will be $6 + x$ because both ages increase by the same amount. The equation is
$$
\begin{aligned}
30 + x &= 3\,(6 + x) \\[6pt]
30 + x &= 18 + 3x \\[6pt]
30 - 18 &= 3x - x \\[6pt]
12 &= 2x \\[6pt]
x &= 6 .
\end{aligned}
$$
In $6$ years the father will be $36$ years old and his son will be $12$, and indeed $36 = 3 \cdot 12$.
:::

:::esempio{#problemi-prezzi titolo="Price problems"}
A group buys $12$ movie tickets for a total of $81$ euros. A full-price ticket costs $8$ euros and a discounted ticket costs $5$ euros. Let $x$ be the number of full-price tickets, so the number of discounted tickets is $12 - x$. The cost for each type of ticket is the number of tickets times the price of one, so
$$
\begin{aligned}
8x + 5\,(12 - x) &= 81 \\[6pt]
8x + 60 - 5x &= 81 \\[6pt]
3x &= 21 \\[6pt]
x &= 7 .
\end{aligned}
$$
The number $7$ is a natural number between $0$ and $12$, so the solution makes sense. There are $7$ full-price tickets and $5$ discounted tickets. Indeed, $56 + 25 = 81$. Choosing the number of discounted tickets as the unknown gives a different equation with the same answer.

We can solve discount problems by the same method. After a $30\%$ discount, a pair of shoes costs $56$ euros. If $x$ is the original price, the discount is $\dfrac{30}{100}\,x$ and the discounted price is $x - \dfrac{30}{100}\,x = \dfrac{70}{100}\,x$. From the equation $\dfrac{70}{100}\,x = 56$ we obtain $x = 56 \cdot \dfrac{100}{70} = 80$ euros.
:::

:::esempio{#problemi-percorsi titolo="Travel problems"}
Two towns A and B are $15$ km apart. Anna leaves A on foot for B at $4$ km/h. At the same time, Bruno leaves B by bicycle for A at $16$ km/h. We seek the time until they meet. Let $x$ be the time in hours. By the formula $s = v \cdot t$, in $x$ hours Anna travels $4x$ km and Bruno travels $16x$ km. When they meet, the sum of the distances they have traveled equals the distance between the towns, so
$$
\begin{aligned}
4x + 16x &= 15 \\[6pt]
20x &= 15 \\[6pt]
x &= \frac{15}{20} = \frac{3}{4} .
\end{aligned}
$$
They meet after $\dfrac{3}{4}$ of an hour, that is, after $45$ minutes. Anna has traveled $4 \cdot \dfrac{3}{4} = 3$ km and Bruno $16 \cdot \dfrac{3}{4} = 12$ km, and indeed $3 + 12 = 15$.

::grafico{assi=0 uguale=1 linee="0,0 15,0;0,-0.25 0,0.25;15,-0.25 15,0.25;3,-0.15 3,0.15" punti="0,0,pieno;15,0,pieno;3,0,pieno" vettori="0.3,1.3,2.6,1.3;14.7,1.3,4,1.3" etichette="-0.9,0.55,town A;13.6,0.55,town B;1.9,0.55,meeting point;0.9,-0.7,3 km;8.0,-0.7,12 km;0.4,1.65,4 km/h;10.2,1.65,16 km/h" xmin=-1.5 xmax=16.5 ymin=-1.3 ymax=2.2 titolo="Anna leaves A at $4$ km/h and Bruno leaves B at $16$ km/h. After $\dfrac{3}{4}$ of an hour, Anna has traveled $3$ km and Bruno $12$ km, and they meet"}

:::
