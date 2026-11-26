---
titolo: Equations, inequalities, and systems
sommario: Solving linear and quadratic equations and inequalities, including those with variable denominators. Systems of equations and inequalities, word problems, and shortcuts for TIEC questions.
---

## Linear equations

:::definizione{#equazione titolo="Equations and solutions"}
An **equation** states that two expressions involving an unknown, usually $x$, are equal. A **solution** is a number that makes the equation true when substituted for $x$. Solving an equation means finding all of its solutions. The number $3$ is a solution of $2x + 1 = 7$ because $2 \cdot 3 + 1 = 7$. The number $2$ is not a solution because $2 \cdot 2 + 1 = 5$. Substitution also lets you check a quiz answer choice in a few seconds.
:::

:::teorema{#principi-di-equivalenza titolo="Properties of equality"}
Two equations are **equivalent** if they have the same solutions. There are two ways to obtain an equivalent equation.
- Add the same expression to both sides or subtract it from both sides.
- Multiply or divide both sides by the same nonzero number.

Both rules hold because performing the same operation on both sides preserves equality. The first rule allows us to **move a term across the equals sign** by changing its sign. In $3x - 2 = x + 4$, move $x$ to the left and $-2$ to the right to get $2x = 6$. Dividing by $2$ gives $x = 3$.

::grafico{f="3*x-2;x+4" punti="3,7,pieno" segmenti="3,0,3,7" xmin=-2 xmax=6 ymin=-4 ymax=12 legenda="y = 3x - 2;y = x + 4" titolo="The two sides of $3x - 2 = x + 4$ have the same value where the lines intersect, at $x = 3$, where both equal $7$"}

:::

:::teorema{#equazione-primo-grado titolo="The linear equation ax = b"}
The properties of equality let us reduce any linear equation to the form $ax = b$.
- If $a \neq 0$, the equation has a **unique solution**, $x = \dfrac{b}{a}$.
- If $a = 0$ and $b \neq 0$, the equation has **no solution** because $0 \cdot x$ equals $0$ for every $x$.
- If $a = 0$ and $b = 0$, the equation is an **identity**, so every real number is a solution.

The equation $2(x - 1) = 2x + 3$ becomes $0 \cdot x = 5$, so it has no solution. The equation $3(x + 2) = 3x + 6$ becomes $0 \cdot x = 0$, so it holds for every real number.
:::

:::definizione{#equazioni-fratte titolo="Rational equations and domain restrictions"}
An equation is called a **rational equation** when the unknown appears in a denominator. Since division by zero is undefined, first state the **domain restrictions** by requiring every denominator to be nonzero. Then multiply both sides by the common denominator, solve the resulting polynomial equation, and discard any solutions that violate the restrictions. For $\dfrac{2}{x} = \dfrac{3}{x + 1}$ the restrictions are
$$
\begin{cases}
x \neq 0 \\
x \neq -1
\end{cases}
$$
and multiplying by $x(x + 1)$ gives $2(x + 1) = 3x$. This gives $x = 2$, which satisfies the restrictions and is therefore the solution.
:::

:::attenzione
Omitting the domain restrictions can lead to extraneous solutions. In $\dfrac{x + 2}{x - 1} = \dfrac{3}{x - 1}$, clearing denominators gives $x + 2 = 3$, or $x = 1$. However, both denominators are zero at $x = 1$, so $x = 1$ must be discarded and the equation has **no solution**.
:::

## Quadratic equations

:::definizione{#discriminante titolo="Quadratic equations and the discriminant"}
A quadratic equation in standard form is $ax^2 + bx + c = 0$, where $a \neq 0$. The number
$$
\Delta = b^2 - 4ac
$$
is called the **discriminant** and determines how many real solutions the equation has.
- If $\Delta > 0$, there are two distinct real solutions.
- If $\Delta = 0$, the two roots coincide, giving one real solution called a double root.
- If $\Delta < 0$, there are no real solutions.

The solutions are the horizontal coordinates of the points where the parabola $y = ax^2 + bx + c$ meets the $x$-axis. For $x^2 - 2x + 3 = 0$, we obtain $\Delta = 4 - 12 = -8 < 0$, so the equation has no real solutions and the parabola does not meet the $x$-axis.

::grafico{f="x^2-2*x-3;x^2-2*x+1;x^2-2*x+3" punti="-1,0,pieno;3,0,pieno;1,0,pieno" xmin=-3 xmax=5 ymin=-5 ymax=10 legenda="y = x^2 - 2x - 3;y = x^2 - 2x + 1;y = x^2 - 2x + 3" titolo="For $x^2 - 2x - 3$, we have $\Delta = 16$, so the parabola crosses the $x$-axis at $-1$ and $3$. For $x^2 - 2x + 1$, we have $\Delta = 0$, so the parabola touches the axis at $1$. For $x^2 - 2x + 3$, we have $\Delta = -8$, so the parabola does not meet the axis"}

:::

::::teorema{#formula-risolutiva titolo="The quadratic formula"}
If $a \neq 0$ and $\Delta = b^2 - 4ac \geq 0$, the solutions of $ax^2 + bx + c = 0$ are
$$
x_{1,2} = \frac{-b \pm \sqrt{\Delta}}{2a} .
$$
For $2x^2 - 3x - 2 = 0$, we obtain $\Delta = 9 + 16 = 25$, so $x = \dfrac{3 \pm 5}{4}$, giving $x_1 = -\dfrac{1}{2}$ and $x_2 = 2$.

:::dimostrazione
The idea is to complete the square on the left. Multiplying by $4a$ gives $4a^2x^2 + 4abx + 4ac = 0$. Adding $b^2$ to both sides and moving $4ac$ to the right gives $(2ax + b)^2 = b^2 - 4ac$. If $\Delta \geq 0$, then $2ax + b = \pm\sqrt{\Delta}$. Solving for $x$ gives the formula.
:::
::::

:::teorema{#formula-ridotta titolo="Quadratic formula for an even linear coefficient"}
If the coefficient $b$ is even, the solutions can also be found using
$$
x_{1,2} = \frac{-\frac{b}{2} \pm \sqrt{\frac{\Delta}{4}}}{a},
\qquad
\frac{\Delta}{4} = \left(\frac{b}{2}\right)^2 - ac .
$$
This formula follows by dividing both the numerator and the denominator of the quadratic formula by $2$, which keeps the numbers smaller. For $x^2 - 6x + 7 = 0$, we have $\dfrac{\Delta}{4} = 9 - 7 = 2$, so $x = 3 \pm \sqrt{2}$.
:::

:::teorema{#somma-e-prodotto titolo="Sum and product of the roots"}
If $ax^2 + bx + c = 0$ has real roots $x_1$ and $x_2$, which may coincide, then
$$
x_1 + x_2 = -\frac{b}{a},
\qquad
x_1 \cdot x_2 = \frac{c}{a} .
$$
These relations follow by adding and multiplying the two expressions in the quadratic formula. When $a = 1$, they can be used to find the roots mentally. For $x^2 - 7x + 10 = 0$, look for two numbers with sum $7$ and product $10$, namely $2$ and $5$. The relations also answer quiz questions that ask for the sum or product without requiring the individual roots. For $3x^2 - 12x + 5 = 0$, we have $\Delta = 144 - 60 > 0$, so the sum of the roots is $4$ and their product is $\dfrac{5}{3}$.
:::

:::attenzione
Before using these relations to find real roots, check that the equation has real solutions. The equation $x^2 + 2x + 5 = 0$ has $\Delta = 4 - 20 < 0$, so it has no real roots, even though the number $-\dfrac{b}{a} = -2$ can be calculated.
:::

:::teorema{#equazioni-pure-e-spurie titolo="Quadratics with a missing term"}
When one of the coefficients is zero, the quadratic formula is unnecessary.
- **No constant term** ($c = 0$). The equation $ax^2 + bx = 0$ factors as $x(ax + b) = 0$. A product is zero if and only if at least one factor is zero (the **zero-product property**), so $x = 0$ or $x = -\dfrac{b}{a}$. For $3x^2 - 6x = 0$ the solutions are $0$ and $2$.
- **No linear term** ($b = 0$). The equation $ax^2 + c = 0$ becomes $x^2 = -\dfrac{c}{a}$. If $-\dfrac{c}{a} > 0$, the solutions are $x = \pm\sqrt{-\dfrac{c}{a}}$. If $-\dfrac{c}{a} < 0$, there are no real solutions. For $2x^2 - 18 = 0$, we get $x^2 = 9$, so $x = \pm 3$. The equation $x^2 + 4 = 0$ has no real solutions.
:::

:::attenzione
When there is no constant term, avoid dividing both sides by $x$ because division is valid only for $x \neq 0$ and would lose the solution $x = 0$. Dividing $3x^2 = 6x$ by $x$ gives only $x = 2$.
:::

## Rational equations leading to quadratics

:::teorema{#fratte-secondo-grado titolo="Rational equations that reduce to a quadratic"}
Follow the same steps as for rational equations that reduce to a linear equation. State the domain restrictions, clear the common denominator, solve the resulting polynomial equation, and check the solutions against the restrictions. Often the polynomial equation is quadratic and one root makes a denominator zero. To find the common denominator, factor the denominators, as in $x^2 - 4 = (x - 2)(x + 2)$. Factoring is covered in the chapter on algebraic expressions and rational expressions.
:::

:::esempio{titolo="One valid solution and one extraneous solution"}
Solve
$$
\frac{x}{x - 1} - \frac{2}{x + 1} = \frac{4}{x^2 - 1} .
$$
Since $x^2 - 1 = (x - 1)(x + 1)$, the domain restrictions are
$$
\begin{cases}
x \neq 1 \\
x \neq -1
\end{cases}
$$
Multiplying both sides by $(x - 1)(x + 1)$ gives
$$
x(x + 1) - 2(x - 1) = 4 ,
$$
or $x^2 - x - 2 = 0$, with solutions $x = 2$ and $x = -1$. The solution $x = -1$ violates the domain restrictions, so the original equation has the **unique solution** $x = 2$.
:::

## Linear inequalities

:::definizione{#disequazione titolo="Inequalities and solution sets"}
An **inequality** compares two expressions involving an unknown using $<$, $\leq$, $>$, or $\geq$. It usually has infinitely many solutions, forming an interval or a union of intervals. The solutions of $x - 2 > 0$ are the numbers greater than $2$, written $x > 2$ or $(2, +\infty)$. In interval notation $($ or $)$ indicates an excluded endpoint, and $[$ or $]$ indicates an included endpoint. Thus $x \leq 5$ is written $(-\infty, 5]$.
:::

:::teorema{#principi-disequazioni titolo="Properties of inequalities"}
- Adding the same expression to both sides or subtracting it from both sides preserves the solutions.
- Multiplying or dividing both sides by a positive number preserves the direction of the inequality.
- Multiplying or dividing both sides by a negative number **reverses** the direction of the inequality.

The last rule holds because changing signs reverses the order of numbers. For example, $2 < 5$, whereas $-2 > -5$. For $6 - 3x \geq 0$ we obtain $-3x \geq -6$. Dividing by $-3$ reverses the inequality, so $x \leq 2$.

::grafico{f="6-3*x" area="6-3*x;0;-1;2" punti="2,0,pieno" xmin=-2 xmax=5 ymin=-6 ymax=10 legenda="y = 6 - 3x" titolo="The line $y = 6 - 3x$ lies on or above the $x$-axis for $x \leq 2$, the solutions of $6 - 3x \geq 0$"}

:::

:::attenzione
Dividing by a negative number without reversing the inequality gives the wrong solution set. From $-2x < 8$ we get $x > -4$. The proposed result $x < -4$ is incorrect because at $x = -5$ we have $-2 \cdot (-5) = 10$, which is not less than $8$. Substituting a number from the proposed solution set provides a quick check.
:::

## Quadratic inequalities

:::teorema{#segno-trinomio titolo="Sign of a quadratic polynomial"}
The sign of $ax^2 + bx + c$ with $a > 0$ can be read from the graph of the upward-opening parabola $y = ax^2 + bx + c$.
- If $\Delta > 0$ and $x_1 < x_2$ are the roots of the corresponding equation, the quadratic is positive for $x < x_1 \;\vee\; x > x_2$ (**outside** the roots) and negative for $x_1 < x < x_2$ (**between** the roots).
- If $\Delta = 0$ and $x_1$ is the double root, the quadratic is positive for every $x \neq x_1$ and equals zero at $x_1$.
- If $\Delta < 0$, the quadratic is positive for every real $x$.

When $a < 0$, multiply both sides by $-1$ and reverse the inequality to return to the case $a > 0$. Thus to solve a quadratic inequality, find the roots of the corresponding equation and select values between or outside them as appropriate.
:::

:::esempio{titolo="The three cases"}
- $x^2 - x - 6 > 0$. The corresponding equation has roots $-2$ and $3$. We need the values for which the quadratic is positive, so $x < -2 \;\vee\; x > 3$. The inequality $x^2 - x - 6 \leq 0$ instead has solutions $-2 \leq x \leq 3$.
- $-x^2 + 4x - 4 < 0$. Multiplying by $-1$ gives $x^2 - 4x + 4 > 0$, or $(x - 2)^2 > 0$, which is true for every $x \neq 2$.
- $x^2 + x + 1 > 0$. We have $\Delta = 1 - 4 < 0$, so the inequality holds for every real $x$, while $x^2 + x + 1 \leq 0$ has no solutions.

::grafico{f="x^2-x-6" area="x^2-x-6;0;-4;-2|x^2-x-6;0;3;5" punti="-2,0,vuoto;3,0,vuoto" xmin=-4 xmax=5 ymin=-8 ymax=14 legenda="y = x^2 - x - 6" titolo="The parabola $y = x^2 - x - 6$ lies above the $x$-axis for $x < -2$ and $x > 3$, the solutions of $x^2 - x - 6 > 0$"}

:::

:::attenzione
The inequality $x^2 > 9$ has solutions $x < -3 \;\vee\; x > 3$. Writing only $x > 3$ would omit the negative values. Indeed, substituting $x = -4$ gives $16 > 9$, so $-4$ is also a solution.
:::

## Inequalities involving products or quotients

:::teorema{#disequazioni-prodotto titolo="Product inequalities and sign charts"}
An inequality such as $A(x) \cdot B(x) > 0$ compares a product of factors with zero. To solve it, use a **sign chart**. Find the sign of each factor, record the signs in a chart divided into intervals by the zeros of the factors, and use the sign rule for multiplication in each column. This works because the sign of a product depends only on the signs of its factors. For $x(x - 2)(x + 1) \geq 0$ the zeros are $-1$, $0$, and $2$.
$$
\begin{array}{c|cccc}
x & (-\infty, -1) & (-1, 0) & (0, 2) & (2, +\infty) \\ \hline
x & - & - & + & + \\
x - 2 & - & - & - & + \\
x + 1 & - & + & + & + \\ \hline
x(x - 2)(x + 1) & - & + & - & +
\end{array}
$$
Since the inequality is non-strict, the zeros are included, and the solutions are $[-1, 0] \cup [2, +\infty)$.
:::

:::teorema{#disequazioni-fratte titolo="Rational inequalities"}
An inequality $\dfrac{N(x)}{D(x)} > 0$ can be solved with the same sign chart because a quotient has the same sign as the product $N(x) \cdot D(x)$ wherever the quotient is defined. Always exclude zeros of the denominator. Include zeros of the numerator only if the inequality uses $\geq$ or $\leq$. For $\dfrac{x - 3}{x + 1} \geq 0$ the numerator is positive for $x > 3$ and the denominator is positive for $x > -1$. The quotient is positive or zero for $x < -1 \;\vee\; x \geq 3$, with $-1$ excluded and $3$ included.

::grafico{f="(x-3)/(x+1)" asintoti="x=-1;y=1" punti="3,0,pieno" xmin=-6 xmax=8 ymin=-6 ymax=7 legenda="y = \dfrac{x - 3}{x + 1}" titolo="The quotient $\dfrac{x - 3}{x + 1}$ is positive or zero for $x < -1$ and $x \geq 3$. It is undefined at $x = -1$"}

:::

:::attenzione
Before checking signs, move everything to the left so the right-hand side is zero. Keep the denominator in place because its sign changes with $x$, so it is unclear whether to reverse the inequality. Multiplying $\dfrac{1}{x} > 1$ by $x$ would give $x < 1$. This includes $x = -1$, for which $\dfrac{1}{-1} = -1$ is not greater than $1$. The correct procedure gives $\dfrac{1 - x}{x} > 0$, with solutions $0 < x < 1$.
:::

## Systems

:::definizione{#sistema-lineare titolo="Systems of two linear equations"}
A **system** is a set of equations that must all hold at once. A brace groups the equations together. A solution of a system in $x$ and $y$ is an ordered pair $(x;y)$ that satisfies every equation. Each linear equation in $x$ and $y$ represents a line, so the solutions are the points common to the two lines.
- Intersecting lines give a unique solution. The system is *consistent and independent*.
- Distinct parallel lines have no common point. The system is *inconsistent*.
- Coincident lines give infinitely many solutions. The system is *dependent*.

The system
$$
\begin{cases}
x + y = 7 \\
2x - y = 2
\end{cases}
$$
has the unique solution $(3;4)$, the point where the two lines intersect.

::grafico{f="7-x;2*x-2" punti="3,4,pieno" segmenti="3,0,3,4;0,4,3,4" xmin=-1 xmax=8 ymin=-3 ymax=9 legenda="x + y = 7;2x - y = 2" titolo="The lines $x + y = 7$ and $2x - y = 2$ intersect at $(3;4)$, the solution of the system"}

:::

:::teorema{#metodo-sostituzione titolo="Substitution"}
Solve one equation for one variable and substitute the resulting expression into the other equation, leaving an equation in just one variable. In the preceding system, the first equation gives $y = 7 - x$. Substituting into the second gives $2x - (7 - x) = 2$, or $3x = 9$, so $x = 3$ and $y = 7 - 3 = 4$. This method is convenient when a variable has coefficient $1$ or $-1$.
:::

:::teorema{#metodo-riduzione titolo="Elimination"}
Add or subtract the corresponding sides of the equations, first multiplying by suitable numbers if necessary, so that one variable cancels. This works because adding true equations gives another true equation. In the system
$$
\begin{cases}
3x + 2y = 12 \\
5x - 2y = 4
\end{cases}
$$
adding corresponding sides gives $8x = 16$, so $x = 2$. Substituting into the first equation gives $6 + 2y = 12$, so $y = 3$.
:::

:::teorema{#regola-di-cramer titolo="Cramer’s rule"}
For the system
$$
\begin{cases}
ax + by = c \\
a'x + b'y = c'
\end{cases}
$$
calculate $D = ab' - a'b$, called the determinant of the system. If $D \neq 0$, the system has a unique solution given by
$$
x = \frac{cb' - c'b}{D},
\qquad
y = \frac{ac' - a'c}{D} .
$$
If $D = 0$, the two lines are either parallel and distinct or coincident, so the system has no solution or infinitely many solutions. The formulas follow by applying elimination with the coefficients written as variables. They are useful in quiz questions involving a parameter. In the system with equations $kx + 2y = 1$ and $3x + y = 5$, calculating the determinant gives $D = k - 6$, so the system has a unique solution for $k \neq 6$. For $k = 6$ the first equation becomes $6x + 2y = 1$, whereas doubling the second gives $6x + 2y = 10$, so the system has no solution.
:::

:::teorema{#sistemi-secondo-grado titolo="Systems involving a quadratic equation"}
To solve a system consisting of a quadratic equation and a linear equation, use substitution. Solve the linear equation for one variable and substitute to obtain a quadratic equation in one variable. Its discriminant tells us how many solutions the system has, or equivalently how many points the line and the curve have in common. In the system
$$
\begin{cases}
y = x^2 \\
y = x + 2
\end{cases}
$$
substitution gives $x^2 = x + 2$, or $x^2 - x - 2 = 0$, with roots $x = -1$ and $x = 2$. The solutions of the system are $(-1;1)$ and $(2;4)$.

::grafico{f="x^2;x+2" punti="-1,1,pieno;2,4,pieno" xmin=-3 xmax=4 ymin=-1 ymax=8 legenda="y = x^2;y = x + 2" titolo="The parabola $y = x^2$ and the line $y = x + 2$ intersect at $(-1;1)$ and $(2;4)$"}

:::

:::esempio{titolo="Given the sum and product"}
The system
$$
\begin{cases}
x + y = 5 \\
xy = 6
\end{cases}
$$
asks for two numbers with sum $5$ and product $6$. By the relationship between roots and coefficients, these numbers are the roots of $t^2 - 5t + 6 = 0$, namely $2$ and $3$, so the system has solutions $(2;3)$ and $(3;2)$.
:::

:::teorema{#sistemi-disequazioni titolo="Systems of inequalities"}
The solutions of a system of inequalities are the numbers that satisfy *all* the inequalities. They form the intersection of the individual solution sets. In the system
$$
\begin{cases}
2x - 4 > 0 \\
x^2 - 9 \leq 0
\end{cases}
$$
the first inequality has solutions $x > 2$ and the second has solutions $-3 \leq x \leq 3$. The numbers common to both sets satisfy $2 < x \leq 3$, so the solutions of the system form the interval $(2, 3]$.

::grafico{assi=0 linee="-5,2 7,2;-5,0 7,0;-5,-2 7,-2;2,2.6 2,-2.6;-3,0.6 -3,-0.6;3,0.6 3,-2.6" poligoni="2,1.8 7,1.8 7,2.2 2,2.2;-3,-0.2 3,-0.2 3,0.2 -3,0.2;2,-2.2 3,-2.2 3,-1.8 2,-1.8" etichette="-3,-1,-3;2,-3.2,2;3,-3.2,3;6.2,2.7,x > 2;-1.5,0.7,−3 ≤ x ≤ 3;5,-1.5,2 < x ≤ 3" uguale=1 xmin=-6 xmax=8 ymin=-4 ymax=3.5 titolo="The solution sets of $2x - 4 > 0$ (top) and $x^2 - 9 \leq 0$ (middle) intersect in the interval $(2, 3]$ (bottom)"}

:::

## Word problems involving equations

:::teorema{#problemi-equazioni titolo="From a word problem to an equation"}
Solve a word problem in four steps. Choose a variable and state what it represents, including its unit. Write formulas for the relationships in the problem. Solve the equation, inequality, or system. Finally, check that the solution makes sense in context. For example, a price is positive and a count of items is a whole number. If the price after a $20\%$ discount is $64$ euros, the original price $x$ satisfies $0.8\,x = 64$, so $x = 80$ euros.
:::

:::esempio{titolo="Revenue and costs"}
A business has fixed costs of $1200$ euros, spends $8$ euros to produce each item, and sells each item for $14$ euros. For $q$ items, revenue is $14q$ and cost is $1200 + 8q$. The **break-even point**, where revenue equals cost, is the solution of
$$
14q = 1200 + 8q ,
$$
or $6q = 1200$, so $q = 200$. The profit $14q - (1200 + 8q)$ is positive when $6q > 1200$, that is, when $q > 200$. The setup is the same, with an inequality replacing the equation.
:::

:::esempio{titolo="Two unknowns"}
A movie theater sells $120$ tickets, charging $9$ euros for a full-price ticket and $6$ euros for a discounted ticket, and takes in $930$ euros. Let $x$ be the number of full-price tickets and $y$ the number of discounted tickets. Then
$$
\begin{cases}
x + y = 120 \\
9x + 6y = 930
\end{cases}
$$
Substituting $y = 120 - x$ into the second equation gives $9x + 720 - 6x = 930$, or $3x = 210$, so $x = 70$ and $y = 50$.
:::

:::esempio{titolo="A quadratic word problem"}
A rectangle has perimeter $26$ cm and area $40$ cm². If one side has length $x$, the other has length $13 - x$ because the sum of two adjacent sides is half the perimeter. The area gives the equation $x(13 - x) = 40$, or $x^2 - 13x + 40 = 0$, with roots $5$ and $8$. The sides therefore measure $5$ cm and $8$ cm.
:::

## Shortcuts for multiple-choice questions

:::osservazione{#metodi-rapidi titolo="Substitution and ruling out choices"}
With four choices and about a minute per question, it is often quickest to start with the answers.
- **Substitution** lets you test a proposed solution in the original equation. For an inequality, choose a convenient number that belongs to some of the proposed sets but not all of them, such as $0$, $1$, or $-1$. Check whether it satisfies the inequality. Each such test rules out one or more choices.
- A strict inequality excludes **endpoints** where equality holds, and zeros of a denominator are always excluded. A choice with the wrong endpoint can be ruled out without further calculation.
- **Domain restrictions** come first in a rational equation because any choice that makes a denominator zero is incorrect.
:::

:::osservazione{#controlli-rapidi titolo="Quick checks"}
- If $a > 0$ and $\Delta < 0$, the quadratic $ax^2 + bx + c$ is always positive. Therefore $ax^2 + bx + c > 0$ holds for every $x$, and $ax^2 + bx + c < 0$ has no solutions.
- The sum $-\dfrac{b}{a}$ and product $\dfrac{c}{a}$ of the roots provide a quick check on a proposed pair of roots. For $x^2 + 4x - 21 = 0$, the numbers $3$ and $-7$ have sum $-4$ and product $-21$, so the pair is correct.
- In a word problem, check the result against the conditions in the question. A list price exceeds the discounted price, and a ticket count is a whole number that cannot exceed the total.
:::
