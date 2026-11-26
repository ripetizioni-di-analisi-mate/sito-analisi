---
titolo: Equations and word problems
sommario: Working with algebraic expressions, solving linear and quadratic equations, systems of two equations, and linear inequalities, and writing equations for word problems involving numbers, ages, inheritances, coins, and prices.
---

## Algebraic expressions

:::definizione{#espressione-letterale titolo="Algebraic expression"}
An **algebraic expression** uses letters to stand for numbers. Each letter represents a number, and substituting numbers for the letters gives the **value of the expression**. For $a = 4$ and $b = -1$, the value of $3a + 2b$ is
$$
3 \cdot 4 + 2 \cdot (-1) = 12 - 2 = 10 .
$$
Algebraic expressions let us use one formula for a calculation that is repeated with different numbers. The cost of $n$ tickets at $8$ euros each, with a flat fee of $2$ euros, is $8n + 2$ euros. For $n = 5$, the cost is $42$ euros.
:::

:::definizione{#monomi titolo="Monomials and like terms"}
A **monomial** is a number, called the coefficient, multiplied by variables raised to nonnegative integer powers. In $-5a^2b$ the coefficient is $-5$ and the variable part is $a^2b$. Two monomials are **like terms** if they have the same variable part.

- To add like terms, keep the same variable part and add the coefficients, as in $3x^2 + 5x^2 = 8x^2$. The monomials $3x^2$ and $5x$ are unlike terms, so their sum remains $3x^2 + 5x$.
- To multiply two monomials, multiply their coefficients and add the exponents of each variable, as in $(2a^2b) \cdot (3ab^3) = 6a^3b^4$.

The exponent rule follows from the definition of a power because $a^2 \cdot a = a \cdot a \cdot a = a^3$.
:::

:::definizione{#polinomi titolo="Polynomials and their products"}
A **polynomial** is a sum of monomials, such as $2x^2 - 3x + 1$. To simplify it, add together monomials with the same variable part. This is called combining like terms. To multiply two polynomials, use the **distributive property**, multiplying each term of the first by each term of the second.
$$
\begin{aligned}
(x + 3)(2x - 1) &= 2x^2 - x + 6x - 3 \\[6pt]
&= 2x^2 + 5x - 3 .
\end{aligned}
$$
A minus sign before an expression reverses the sign of every term, so $5x - (2x - 4) = 5x - 2x + 4 = 3x + 4$. These calculations help us put an equation in its simplest form before solving it.
:::

:::attenzione
The minus sign before $x - 3$ changes the signs of *both* terms, so $7 - (x - 3) = 10 - x$. Changing only the sign of the first term gives $7 - x - 3 = 4 - x$, a different expression. Indeed, at $x = 1$ the first expression equals $9$ and the second equals $3$.
:::

## Special product formulas

:::teorema{#prodotti-notevoli titolo="Special product formulas"}
For any two numbers $a$ and $b$, the following identities hold.
$$
\begin{aligned}
(a + b)^2 &= a^2 + 2ab + b^2 , \\[6pt]
(a - b)^2 &= a^2 - 2ab + b^2 , \\[6pt]
(a + b)(a - b) &= a^2 - b^2 .
\end{aligned}
$$
They follow by expanding each product with the distributive property. For example, $(a + b)(a + b) = a^2 + ab + ba + b^2$, and the two terms $ab$ and $ba$ combine to give **twice the product**, $2ab$. The formulas shorten algebraic calculations and can also simplify mental arithmetic.
$$
103^2 = (100 + 3)^2 = 10\,000 + 600 + 9 = 10\,609 ,
$$
$$
51 \cdot 49 = (50 + 1)(50 - 1) = 2500 - 1 = 2499 .
$$

::grafico{assi=0 uguale=1 poligoni="0,0 3,0 3,3 0,3;3,3 5,3 5,5 3,5" linee="0,0 5,0 5,5 0,5 0,0;3,0 3,5;0,3 5,3" etichette="1.25,1.35,a²;3.75,3.85,b²;3.7,1.35,ab;1.2,3.85,ab;1.4,-0.55,a;3.9,-0.55,b;-0.6,1.35,a;-0.6,3.85,b" xmin=-1 xmax=6 ymin=-1 ymax=6 titolo="The square with side length $a + b$ consists of the squares $a^2$ and $b^2$ and two rectangles of area $ab$, so $(a + b)^2 = a^2 + 2ab + b^2$. When $a = 3$ and $b = 2$, the areas of the four pieces are $9$, $4$, $6$, and $6$, with sum $25 = 5^2$"}

:::

:::attenzione
The square of a sum is *not* the sum of the squares. With $a = 3$ and $b = 2$, we have $(3 + 2)^2 = 25$, whereas $3^2 + 2^2 = 13$. The difference, $12$, is twice the product, $2 \cdot 3 \cdot 2$. The choice $a^2 + b^2$ often appears in quizzes to test for this error.
:::

:::osservazione{#scomposizione titolo="Common factors and factoring"}
Read from right to left, these formulas let us write a polynomial as a product, or **factor** it.

- **Factoring out a common factor** takes the factor shared by every term outside the parentheses, as in $4x^2 + 6x = 2x\,(2x + 3)$.
- The difference of two squares is the product of the sum and the difference of their bases, as in $x^2 - 9 = (x + 3)(x - 3)$.
- A trinomial consisting of two squares and twice the product of their bases is the square of a binomial, as in $x^2 - 10x + 25 = (x - 5)^2$.

Factoring helps solve quadratic equations with a missing term and simplify rational expressions. For example, for $x \neq 3$ we have $\dfrac{x^2 - 9}{x - 3} = x + 3$.
:::

## Linear equations

:::definizione{#equazione titolo="Equations and solutions"}
An **equation** states that two expressions involving an unknown number are equal. The number to be found, called the **unknown**, is usually denoted by $x$. A **solution** is a value of the unknown that makes the equation true. Solving the equation means finding all its solutions. The number $4$ is a solution of $2x + 3 = 11$ because $2 \cdot 4 + 3 = 11$, whereas $3$ is not because $2 \cdot 3 + 3 = 9$. Substituting a value to see whether the equation holds is called checking the solution. This can also help identify the correct choice on a quiz.
:::

:::teorema{#principi-di-equivalenza titolo="Properties of equality"}
Two equations are **equivalent** if they have the same solutions. The following two operations transform an equation into an equivalent one.

- First, add the same number or expression to both sides, or subtract it from both sides. It follows that you can **move a term across the equals sign** by changing its sign.
- Second, multiply or divide both sides by the same nonzero number.

These rules hold because applying the same operation to two equal quantities preserves equality. To solve $5x - 7 = 2x + 8$, move the terms containing $x$ to the left and the constants to the right. This gives $3x = 15$. Dividing by $3$ gives $x = 5$.

::grafico{f="5*x-7;2*x+8" punti="5,18,pieno" segmenti="5,0,5,18" xmin=-1 xmax=8 ymin=-10 ymax=40 legenda="y = 5x - 7;y = 2x + 8" titolo="The two sides of $5x - 7 = 2x + 8$ are equal where the lines intersect, at $x = 5$, where both equal $18$"}

:::

:::teorema{#equazione-primo-grado titolo="Solving a linear equation"}
In a linear equation, the unknown occurs only to the power $1$. To solve it, clear the numerical denominators by multiplying every term by their least common multiple. Expand the products, move terms containing $x$ to one side and constants to the other, and combine like terms. This gives the form $a\,x = b$, with three cases to consider.

- If $a \neq 0$, the equation has a **unique solution**, $x = \dfrac{b}{a}$.
- If $a = 0$ and $b \neq 0$, the equation has **no solution** because $0 \cdot x = b$ is false for every value of $x$. For example, $2x + 1 = 2x + 5$ reduces to $0 \cdot x = 4$.
- If $a = 0$ and $b = 0$, the equation is an **identity** and every number is a solution. For example, $2\,(x + 1) = 2x + 2$ reduces to $0 \cdot x = 0$.

::grafico{f="2*x+1;2*x+5" xmin=-4 xmax=4 ymin=-8 ymax=12 legenda="y = 2x + 1;y = 2x + 5" titolo="The graphs of the two sides of $2x + 1 = 2x + 5$ are distinct parallel lines, so they have no common point and the equation has no solution"}
:::

:::esempio{titolo="An equation with denominators"}
To solve
$$
\frac{x}{2} + \frac{x + 1}{3} = 7
$$
multiply every term by $6$, the least common multiple of $2$ and $3$, to obtain
$$
\begin{aligned}
3x + 2\,(x + 1) &= 42 \\[6pt]
5x + 2 &= 42 \\[6pt]
5x &= 40 \\[6pt]
x &= 8 .
\end{aligned}
$$
Checking gives $\dfrac{8}{2} + \dfrac{9}{3} = 4 + 3 = 7$, so the solution is correct. The right side $7$ also becomes $42$ because every term is multiplied by $6$, including terms without a written denominator.
:::

## From a word problem to an equation

:::osservazione{#impostare-un-problema titolo="Setting up a word problem"}
A word problem with one unknown can be solved in four steps.

1. Let $x$ represent the quantity being sought or a quantity from which it can be found directly.
2. Write the other quantities in the problem in terms of $x$.
3. Write an equation for the statement that relates the quantities.
4. Solve the equation and check that the result makes sense in context. For example, a count of people or coins must be a nonnegative integer, and an age cannot be negative. If the problem requires a strictly positive quantity, also rule out zero.

For example, if a number plus three times that number equals $48$, write $x + 3x = 48$, so $4x = 48$ and $x = 12$.
:::

:::esempio{#traduzione-del-testo titolo="Writing common phrases as expressions"}
The following phrases occur frequently in word problems.

- Twice a number, three times the number, and half the number are $2x$, $3x$, and $\dfrac{x}{2}$. A number increased by $5$ is $x + 5$.
- The statement “$a$ exceeds $b$ by $7$” becomes $a = b + 7$, and “$a$ is three times $b$” becomes $a = 3b$.
- Three consecutive natural numbers are $x$, $x + 1$, and $x + 2$. Two consecutive even integers are $2n$ and $2n + 2$, and two consecutive odd integers are $2n + 1$ and $2n + 3$.

If the sum of three consecutive integers is $72$, we have $x + (x + 1) + (x + 2) = 72$, or $3x + 3 = 72$, so $x = 23$ and the integers are $23$, $24$, and $25$.
:::

:::esempio{#problemi-sulle-eta titolo="Age problems"}
After $n$ years, each person’s age has increased by $n$, so the difference between two people’s ages stays the same. A father is $40$ years old and his son is $10$. To find how many years it will be before the father is twice as old as his son, let $x$ be the number of years and write
$$
40 + x = 2\,(10 + x)
\iff
40 + x = 20 + 2x
\iff
x = 20 .
$$
In $20$ years the father will be $60$ and the son $30$, and the age difference will still be $30$ years. For a question about the past asking “how many years ago,” subtract $x$ from both ages.
:::

:::esempio{#problemi-di-ripartizione titolo="Inheritances and shares"}
Three siblings share an inheritance of $72\,000$ euros. The first receives twice the second sibling’s share, and the third receives $8000$ euros more than the second. Let $x$ be the second sibling’s share because the other shares can be expressed in terms of it. The equation is
$$
2x + x + (x + 8000) = 72\,000
\iff
4x = 64\,000
\iff
x = 16\,000 .
$$
The shares are $32\,000$, $16\,000$, and $24\,000$ euros, and their sum is $72\,000$. When the shares are given as fractions of the total, use the total as the unknown. If the first sibling receives $\dfrac{1}{3}$ of the inheritance, the second receives $\dfrac{1}{4}$, and the third receives the remaining $25\,000$ euros, the third sibling’s fraction of the total is $1 - \dfrac{1}{3} - \dfrac{1}{4} = \dfrac{5}{12}$, so the total is $25\,000 \cdot \dfrac{12}{5} = 60\,000$ euros.
:::

:::esempio{#problemi-con-le-monete titolo="Coins and unit prices"}
A piggy bank contains $30$ coins in $1$-euro and $2$-euro denominations, worth $42$ euros in all. If $x$ is the number of $2$-euro coins, the number of $1$-euro coins is $30 - x$. The value of each group is the number of coins times the value per coin, so
$$
2x + 1 \cdot (30 - x) = 42
\iff
x + 30 = 42
\iff
x = 12 .
$$
The number of $2$-euro coins is $12$, and the number of $1$-euro coins is $18$. Indeed, $24 + 18 = 42$. The same setup works for tickets sold at two different prices and goods sold at different unit prices.
:::

## Systems of two linear equations

:::definizione{#sistema-lineare titolo="Two equations in two unknowns"}
When a problem has two unknown quantities and gives two pieces of information, write a **system**, a pair of equations that must hold simultaneously.
$$
\begin{cases}
x + y = 10 \\
x - y = 2
\end{cases}
$$
A **solution** of the system is an ordered pair $(x, y)$ that satisfies *both* equations. Here the solution is $x = 6$, $y = 4$, because $6 + 4 = 10$ and $6 - 4 = 2$. The pair $x = 7$, $y = 3$ satisfies the first equation but not the second, so it is not a solution. In the coordinate plane, each linear equation in $x$ and $y$ represents a line, and the solution of this system is the point where the lines meet.

::grafico{f="10-x;x-2" punti="6,4,pieno" segmenti="6,0,6,4;0,4,6,4" xmin=-2 xmax=12 ymin=-4 ymax=12 legenda="x + y = 10;x - y = 2" titolo="The lines $x + y = 10$ and $x - y = 2$ intersect at $(6, 4)$, the solution of the system"}

:::

:::teorema{#metodo-di-sostituzione titolo="Substitution"}
Solve one equation for one unknown and substitute the resulting expression into the other equation, leaving an equation in one unknown. In the system
$$
\begin{cases}
y = 2x - 1 \\
3x + y = 14
\end{cases}
$$
the first equation already gives $y$. Substitution into the second gives $3x + 2x - 1 = 14$, or $5x = 15$, so $x = 3$ and $y = 2 \cdot 3 - 1 = 5$. The method works because the first equation says that $y$ and $2x - 1$ are the same number and can therefore be substituted for each other. This is the quickest method when an unknown has coefficient $1$.
:::

:::teorema{#metodo-di-riduzione titolo="Elimination"}
Add or subtract the corresponding sides of the equations, first multiplying them by suitable numbers if needed so that one unknown has equal or opposite coefficients. In the system
$$
\begin{cases}
2x + 3y = 13 \\
2x - y = 1
\end{cases}
$$
the coefficients of $x$ are equal, so subtracting the second equation from the first gives $4y = 12$, or $y = 3$. Substituting into $2x - y = 1$ gives $2x = 4$, or $x = 2$. The method works because adding equal quantities to equal quantities gives equal results.
:::

:::osservazione{#sistemi-impossibili titolo="Inconsistent and dependent systems"}
When elimination cancels both unknowns, there are two possibilities.

- A false statement such as $0 = 2$ means the system is **inconsistent**. In the system formed by $x + y = 3$ and $2x + 2y = 10$, dividing the second equation by $2$ gives $x + y = 5$, which contradicts the first. The two lines are parallel and have no common point.
- A statement that is always true, such as $0 = 0$, means the system is **dependent** and has infinitely many solutions. In the system formed by $x + y = 3$ and $2x + 2y = 6$, the second equation is the first multiplied by $2$, and the two lines coincide.

::grafico{f="3-x;5-x" xmin=-1 xmax=7 ymin=-3 ymax=7 legenda="x + y = 3;x + y = 5" titolo="The lines $x + y = 3$ and $x + y = 5$ are parallel and distinct, so the system has no solution"}

:::

:::esempio{#problemi-con-due-incognite titolo="Word problems with two unknowns"}
One evening a theater sells $40$ tickets, some at the full price of $12$ euros and some at the reduced price of $8$ euros, taking in $412$ euros. If $x$ is the number of full-price tickets and $y$ is the number of reduced-price tickets, the ticket count and total receipts give the system
$$
\begin{cases}
x + y = 40 \\
12x + 8y = 412
\end{cases}
$$
Multiplying the first equation by $8$ gives $8x + 8y = 320$. Subtracting that from the second gives $4x = 92$, or $x = 23$. There are therefore $23$ full-price tickets and $17$ reduced-price tickets. Indeed, $12 \cdot 23 + 8 \cdot 17 = 276 + 136 = 412$. The same problem can also be solved using one unknown by writing $40 - x$ in place of $y$, as in the coin problem.
:::

## Quadratic equations

:::definizione{#equazione-secondo-grado titolo="Quadratic equation"}
A **quadratic equation** can be written in the form
$$
a x^2 + b x + c = 0 , \qquad a \neq 0 .
$$
The number $\Delta = b^2 - 4ac$ is the **discriminant**. Its sign determines the number of real roots. For $x^2 - 5x + 6 = 0$ we have $a = 1$, $b = -5$, $c = 6$, and $\Delta = 25 - 24 = 1$. To read off the coefficients, first move all terms to the left. For example, $x^2 = 3x + 4$ becomes $x^2 - 3x - 4 = 0$, with $b = -3$ and $c = -4$.
:::

:::teorema{#formula-risolutiva titolo="The quadratic formula"}
The real roots of $a x^2 + b x + c = 0$, when they exist, are
$$
x = \frac{-b \pm \sqrt{\Delta}}{2a} .
$$

- If $\Delta > 0$, there are two distinct real roots.
- If $\Delta = 0$, the two roots coincide and equal $x = -\dfrac{b}{2a}$.
- If $\Delta < 0$, there are no real roots because a negative number has no real square root.

The formula follows by completing the square on the left, using the special product formulas. For $x^2 - 5x + 6 = 0$ the discriminant is $\Delta = 1$, so $x = \dfrac{5 \pm 1}{2}$, or $x_1 = 2$ and $x_2 = 3$. The roots are the horizontal coordinates of the points where the parabola $y = ax^2 + bx + c$ meets the $x$-axis.

::grafico{f="x^2-5*x+6" punti="2,0,pieno;3,0,pieno" xmin=-1 xmax=6 ymin=-2 ymax=12 legenda="y = x^2 - 5x + 6" titolo="The parabola $y = x^2 - 5x + 6$ meets the $x$-axis at $x = 2$ and $x = 3$, the roots of the equation, because $\Delta = 1 > 0$"}

::grafico{f="x^2-4*x+4;x^2-4*x+5" punti="2,0,pieno" xmin=-1 xmax=5 ymin=-2 ymax=10 legenda="y = x^2 - 4x + 4;y = x^2 - 4x + 5" titolo="For $x^2 - 4x + 4 = 0$, the discriminant is $\Delta = 0$ and the parabola touches the $x$-axis only at $x = 2$. For $x^2 - 4x + 5 = 0$, the discriminant is $\Delta = -4 < 0$ and the parabola does not meet the $x$-axis"}

:::

:::teorema{#equazioni-incomplete titolo="Quadratics with a missing term"}
When $b = 0$ or $c = 0$, the equation can be solved without the quadratic formula.

- If $b = 0$, the equation is $a x^2 + c = 0$, so $x^2 = -\dfrac{c}{a}$. From $x^2 - 49 = 0$ we get $x^2 = 49$, or $x = 7$ or $x = -7$. By contrast, $x^2 + 4 = 0$ has no real roots because a square is never negative.
- If $c = 0$, factor out $x$ to obtain $x\,(ax + b) = 0$. A product is zero if and only if at least one factor is zero, so $x = 0$ or $x = -\dfrac{b}{a}$. From $3x^2 - 12x = 0$ we get $3x\,(x - 4) = 0$, or $x = 0$ or $x = 4$.

The rule used in the second case is the **zero-product property**. It applies to any equation written as a product equal to zero. For example, $(x - 2)(x + 5) = 0$ has roots $x = 2$ and $x = -5$.
:::

:::attenzione
Dividing both sides of $3x^2 = 12x$ by $x$ gives $x = 4$ and loses the solution $x = 0$ because dividing by $x$ requires $x \neq 0$.
:::

:::teorema{#somma-e-prodotto titolo="Sum and product of the roots"}
If $\Delta \geq 0$, the roots $x_1$ and $x_2$ of $a x^2 + b x + c = 0$ satisfy
$$
x_1 + x_2 = -\frac{b}{a} ,
\qquad
x_1 \cdot x_2 = \frac{c}{a} .
$$
These identities follow from the quadratic formula. In the sum, the two terms containing $\sqrt{\Delta}$ have opposite signs and cancel. In the product, the difference-of-squares identity gives $\dfrac{b^2 - \Delta}{4a^2} = \dfrac{4ac}{4a^2} = \dfrac{c}{a}$. The identities have two uses.

- They give the sum or product of the roots without solving the equation. For $2x^2 - 6x + 1 = 0$, which has $\Delta = 28 > 0$, the sum of the roots is $3$ and their product is $\dfrac{1}{2}$.
- When $a = 1$, they can help find the roots mentally. For $x^2 - 7x + 12 = 0$, look for two numbers with sum $7$ and product $12$, namely $3$ and $4$.

Conversely, two numbers with sum $s$ and product $p$ are the roots of $x^2 - s\,x + p = 0$.
:::

:::esempio{#problemi-di-secondo-grado titolo="Word problems leading to a quadratic equation"}
A rectangle has perimeter $34\ \text{m}$ and area $60\ \text{m}^2$. Two adjacent sides add up to half the perimeter, so if one has length $x$, the other has length $17 - x$. The area gives the equation
$$
\begin{aligned}
x\,(17 - x) &= 60 \\[6pt]
x^2 - 17x + 60 &= 0 .
\end{aligned}
$$
The discriminant is $\Delta = 289 - 240 = 49$, so $x = \dfrac{17 \pm 7}{2}$, giving $x = 12$ or $x = 5$. Both solutions describe the same rectangle, whose sides are $12\ \text{m}$ and $5\ \text{m}$. When the unknown is a length, an age, or a count of objects, discard negative solutions. If the product of two consecutive natural numbers is $132$, then $x\,(x + 1) = 132$, or $x^2 + x - 132 = 0$, with roots $11$ and $-12$. The valid value is $11$, and the two numbers are $11$ and $12$.
:::

## Linear inequalities

:::definizione{#disequazione titolo="Inequality"}
An **inequality** compares two expressions containing an unknown using one of the symbols $<$, $>$, $\leq$, or $\geq$. The solutions of a linear inequality are usually all the numbers above or below a fixed value. For example, $2x - 6 > 0$ holds for numbers greater than $3$. Substituting $x = 4$ gives $2 > 0$, which is true, while $x = 1$ gives $-4 > 0$, which is false. Inequalities can answer questions such as “How many items does it take?” and “What is the largest allowable value?”

::grafico{f="2*x-6" area="2*x-6;0;3;8" punti="3,0,vuoto" xmin=-2 xmax=8 ymin=-9 ymax=12 legenda="y = 2x - 6" titolo="The line $y = 2x - 6$ lies above the $x$-axis for $x > 3$, so the solutions of $2x - 6 > 0$ are all numbers greater than $3$"}

:::

:::teorema{#principi-disequazioni titolo="Rules for solving inequalities"}
The rules for solving inequalities are the same as for equations, with one change to the second rule.

- Adding or subtracting the same number on both sides preserves the direction of the inequality.
- Multiplying or dividing both sides by a *positive* number preserves the direction of the inequality.
- Multiplying or dividing both sides by a *negative* number **reverses** the inequality sign, so $<$ becomes $>$ and $\leq$ becomes $\geq$.

The third rule holds because changing the signs of two numbers reverses their order. For example, $2 < 5$, while $-2 > -5$. To solve $5 - 2x \geq 11$, move $5$ to the other side to get $-2x \geq 6$. Dividing by $-2$ reverses the inequality, giving $x \leq -3$.
:::

:::esempio{#problemi-con-disequazioni titolo="Comparing costs"}
A gym charges $8$ euros per visit. It also offers a membership that costs $50$ euros plus $3$ euros per visit. For $n$ visits, the membership costs less than paying per visit if
$$
50 + 3n < 8n
\iff
50 < 5n
\iff
n > 10 .
$$
At $10$ visits, both plans cost $80$ euros, so the membership costs less starting at $11$ visits. When the problem asks for the minimum number of visits, choose the smallest integer that satisfies the inequality and check the boundary value separately.
:::

## Shortcuts for multiple-choice questions

:::osservazione{#verifica-delle-opzioni titolo="Checking the answer choices"}
On a multiple-choice test, the solution is among the answer choices. You can often find it by substituting the choices into the problem without solving the equation. A father is $36$ years old and his son is $8$. To find how many years it will take for the father to be three times as old as his son, test the choices $3$, $4$, $5$, $6$, and $8$.

- In $4$ years, the father will be $40$ and the son $12$. Since $3 \cdot 12 = 36$ differs from $40$, rule out $4$.
- In $6$ years, the father will be $42$ and the son $14$. Since $3 \cdot 14 = 42$, the answer is $6$.

For a system, the correct choice satisfies *all* the equations. A pair that satisfies only one equation often appears among the incorrect choices, so check every condition in the problem. If the choices are in increasing order and the difference between the two sides is strictly increasing or strictly decreasing, try the middle value first. The sign of the difference and the direction in which it changes show which side to search and can rule out two choices at once.
:::

:::osservazione{#controlli-rapidi titolo="Shortcuts and checks"}
A few observations can shorten the calculation and rule out choices without working through every step.

- The sum of an odd number of consecutive integers equals the middle integer times the number of integers. If three consecutive integers sum to $72$, the middle one is $\dfrac{72}{3} = 24$.
- If $x + y = s$ and $x - y = d$, adding and subtracting the equations gives $x = \dfrac{s + d}{2}$ and $y = \dfrac{s - d}{2}$. Therefore, two numbers with sum $40$ and difference $12$ are $26$ and $14$.
- A count of people or coins is a nonnegative integer. It is positive if the problem requires at least one person or coin. A child is younger than the parent, and when several heirs receive positive shares, each share is less than the total. Immediately rule out choices that violate these constraints.

Incorrect choices often give an intermediate result, as when $3x = 15$ is read as $x = 15$, or the value of the other unknown.
:::
