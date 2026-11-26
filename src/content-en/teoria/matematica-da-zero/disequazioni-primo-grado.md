---
titolo: Linear inequalities
sommario: What numerical inequalities and inequalities with an unknown are, how to represent their solutions on the number line and in interval notation, and how to solve linear inequalities, systems, inequalities involving a product or quotient, and problems that ask for a minimum number.
---

## Inequalities and their properties

:::definizione{#disuguaglianza titolo="Numerical inequality"}
An **inequality** is a statement that compares two numbers and indicates which is smaller. Four symbols are used:

- $a < b$ is read as “$a$ is less than $b$”;
- $a > b$ is read as “$a$ is greater than $b$”;
- $a \leq b$ is read as “$a$ is less than or equal to $b$,” that is, $a < b$ or $a = b$;
- $a \geq b$ is read as “$a$ is greater than or equal to $b$,” that is, $a > b$ or $a = b$.

The pointed end of the symbol faces the smaller number. The orientation of the symbol is called the **direction** of the inequality. For example, $3 < 7$ and $7 > 3$ say the same thing. The statement $4 \leq 4$ is true because $4 = 4$, whereas $4 < 4$ is false.

The number $a$ is less than $b$ exactly when the difference $b - a$ is positive. For example, $2 < 5$ because $5 - 2 = 3$ is positive, and $-5 < -2$ because $-2 - (-5) = -2 + 5 = 3$ is positive. This interpretation in terms of a difference lets us justify the properties of inequalities.
:::

:::osservazione{#retta-orientata-ordine titolo="Order on the number line"}
On the number line introduced in the chapter on integers, the arrow points from left to right. Of two numbers, the **greater** one is the one farther to the right. Therefore every negative number is less than every positive number, and of two negative numbers the greater one is closer to zero. For example, $-2 > -5$, just as a temperature of $-2$ degrees is higher than one of $-5$ degrees.

::grafico{assi=0 uguale=1 linee="-6.2,0 6.2,0;5.9,0.15 6.2,0 5.9,-0.15;-6,-0.1 -6,0.1;-5,-0.1 -5,0.1;-4,-0.1 -4,0.1;-3,-0.1 -3,0.1;-2,-0.1 -2,0.1;-1,-0.1 -1,0.1;0,-0.1 0,0.1;1,-0.1 1,0.1;2,-0.1 2,0.1;3,-0.1 3,0.1;4,-0.1 4,0.1;5,-0.1 5,0.1;6,-0.1 6,0.1" punti="-5,0,pieno;-2,0,pieno;2,0,pieno;5,0,pieno" etichette="-6.16,-0.5,−6;-5.16,-0.5,−5;-4.16,-0.5,−4;-3.16,-0.5,−3;-2.16,-0.5,−2;-1.16,-0.5,−1;-0.08,-0.5,0;0.92,-0.5,1;1.92,-0.5,2;2.92,-0.5,3;3.92,-0.5,4;4.92,-0.5,5;5.92,-0.5,6" xmin=-6.6 xmax=6.6 ymin=-0.8 ymax=0.6 titolo="On the number line the number farther to the right is greater, so $-5 < -2 < 2 < 5$"}

:::

:::richiamo{titolo="Sign rule"}
The product of two nonzero numbers is positive if the numbers have the same sign and negative if they have different signs. The same holds for the quotient.
:::

::::teorema{#proprieta-disuguaglianze titolo="Properties of inequalities"}
Let $a$ and $b$ be two numbers with $a < b$, and let $c$ be any number.

- Adding $c$ to both numbers or subtracting it from both leaves the direction unchanged: $a + c < b + c$ and $a - c < b - c$. For example, from $2 < 5$ we obtain $2 + 10 < 5 + 10$, that is, $12 < 15$.
- If $c$ is *positive*, multiplying or dividing both numbers by $c$ leaves the direction unchanged: $a \cdot c < b \cdot c$. For example, starting from $2 < 5$ and multiplying by $3$ gives $6 < 15$.
- If $c$ is *negative*, multiplying or dividing both numbers by $c$ **reverses** the direction: $a \cdot c > b \cdot c$. For example, starting from $2 < 5$ and multiplying by $-3$ gives $-6 > -15$.

The same properties hold for the symbols $>$, $\leq$, and $\geq$. Reversing the direction means interchanging $<$ with $>$ and $\leq$ with $\geq$. All calculations with inequalities are based on these properties.

:::dimostrazione
The idea is to examine the difference between the larger number and the smaller one. Since $a < b$, the difference $b - a$ is positive.

For addition, we calculate $(b + c) - (a + c) = b - a$. The difference is positive, so $a + c < b + c$. Using numbers, $(5 + 10) - (2 + 10) = 15 - 12 = 3$, which is precisely $5 - 2$.

For multiplication, we calculate $b \cdot c - a \cdot c = c \cdot (b - a)$, factoring out $c$ by the distributive property. The factor $b - a$ is positive.

- If $c$ is positive, the product $c \cdot (b - a)$ has two positive factors and is positive by the sign rule. Therefore $a \cdot c < b \cdot c$. With $a = 2$, $b = 5$, and $c = 3$, we have $15 - 6 = 9 = 3 \cdot 3$, which is positive.
- If $c$ is negative, the product $c \cdot (b - a)$ has one negative factor and one positive factor, so it is negative by the sign rule. The difference $b \cdot c - a \cdot c$ is therefore negative, so $b \cdot c < a \cdot c$, that is, $a \cdot c > b \cdot c$. With $a = 2$, $b = 5$, and $c = -3$, we have $-15 - (-6) = -9 = -3 \cdot 3$, which is negative.

Dividing by $c$ is equivalent to multiplying by its reciprocal $\dfrac{1}{c}$, which has the same sign as $c$, so the same conclusions hold for division.
:::
::::

:::attenzione
Multiplication by a negative number requires us to reverse the inequality. Starting from $2 < 5$ and multiplying by $-1$ without reversing it would give $-2 < -5$, which is false. Indeed, on the number line $-2$ is to the right of $-5$, so $-2 > -5$.
:::

## Inequalities and intervals

:::definizione{#disequazione titolo="Inequalities with an unknown and their solutions"}
An **inequality in one unknown** compares two expressions involving an unknown number, denoted by $x$. As in an equation, the expression on the left of the symbol is called the left-hand side and the expression on the right is called the right-hand side. A **solution** of the inequality is a number that makes the inequality true when substituted for $x$. To **solve** an inequality is to find all its solutions.

For example, consider several values in $2x - 1 > 5$.

- When $x = 4$, we obtain $2 \cdot 4 - 1 = 7$, and $7 > 5$ is true, so $4$ is a solution.
- When $x = 3$, we obtain $2 \cdot 3 - 1 = 5$, and $5 > 5$ is false, so $3$ is excluded.
- When $x = 0$, we obtain $-1$, and $-1 > 5$ is false.

The solutions are all numbers greater than $3$, including decimals such as $3.1$ or $3.001$. We write the solutions as $x > 3$. Unlike a linear equation, which usually has just one solution, an inequality usually has infinitely many solutions.
:::

:::definizione{#intervalli titolo="Intervals"}
The solution set of an inequality is usually an **interval**, that is, a portion of the number line. An interval is denoted by its two endpoints, written between brackets or parentheses.

- A *square bracket* indicates that the endpoint belongs to the interval (an included endpoint). We draw a solid dot on the number line.
- A *parenthesis* indicates that the endpoint is excluded. We draw an open circle on the number line.
- The symbol $+\infty$, read as “positive infinity,” indicates that the interval extends indefinitely to the right. The symbol $-\infty$, “negative infinity,” indicates that it extends to the left. These symbols indicate directions and are not numbers, so they always take parentheses.

| inequality | interval |
| --- | --- |
| $x > a$ | $(a, +\infty)$ |
| $x \geq a$ | $[a, +\infty)$ |
| $x < a$ | $(-\infty, a)$ |
| $x \leq a$ | $(-\infty, a]$ |
| $a < x < b$ | $(a, b)$ |
| $a \leq x \leq b$ | $[a, b]$ |
| $a < x \leq b$ | $(a, b]$ |

For example, the solutions of $2x - 1 > 5$ are $x > 3$, that is, the interval $(3, +\infty)$. The notation $-1 < x \leq 3$ is called a double inequality and denotes the numbers that are both greater than $-1$ and less than or equal to $3$.
:::

:::esempio{titolo="Intervals on the number line"}
The solutions $x > 2$ form the interval $(2, +\infty)$. We shade the part of the line to the right of $2$ and mark $2$ with an open circle because $2 > 2$ is false.

::grafico{assi=0 uguale=1 linee="-4.6,0 6.6,0;6.3,0.15 6.6,0 6.3,-0.15;-4,-0.1 -4,0.1;-3,-0.1 -3,0.1;-2,-0.1 -2,0.1;-1,-0.1 -1,0.1;0,-0.1 0,0.1;1,-0.1 1,0.1;2,-0.1 2,0.1;3,-0.1 3,0.1;4,-0.1 4,0.1;5,-0.1 5,0.1;6,-0.1 6,0.1" area="0.18;0;2;6.5" punti="2,0,vuoto" etichette="-4.16,-0.5,−4;-3.16,-0.5,−3;-2.16,-0.5,−2;-1.16,-0.5,−1;-0.08,-0.5,0;0.92,-0.5,1;1.92,-0.5,2;2.92,-0.5,3;3.92,-0.5,4;4.92,-0.5,5;5.92,-0.5,6" xmin=-5 xmax=7 ymin=-0.8 ymax=0.6 titolo="The solutions of $x > 2$ form the interval $(2, +\infty)$. The open circle indicates that $2$ is excluded"}

The double inequality $-1 < x \leq 3$ corresponds to the interval $(-1, 3]$. The number $-1$ is excluded and $3$ is included. For example, $0$ and $2.5$ belong to the interval, whereas $-1$ and $4$ lie outside it.

::grafico{assi=0 uguale=1 linee="-4.6,0 6.6,0;6.3,0.15 6.6,0 6.3,-0.15;-4,-0.1 -4,0.1;-3,-0.1 -3,0.1;-2,-0.1 -2,0.1;-1,-0.1 -1,0.1;0,-0.1 0,0.1;1,-0.1 1,0.1;2,-0.1 2,0.1;3,-0.1 3,0.1;4,-0.1 4,0.1;5,-0.1 5,0.1;6,-0.1 6,0.1" area="0.18;0;-1;3" punti="-1,0,vuoto;3,0,pieno" etichette="-4.16,-0.5,−4;-3.16,-0.5,−3;-2.16,-0.5,−2;-1.16,-0.5,−1;-0.08,-0.5,0;0.92,-0.5,1;1.92,-0.5,2;2.92,-0.5,3;3.92,-0.5,4;4.92,-0.5,5;5.92,-0.5,6" xmin=-5 xmax=7 ymin=-0.8 ymax=0.6 titolo="The interval $(-1, 3]$ contains the numbers between $-1$, excluded, and $3$, included"}

:::

## Equivalence principles

:::definizione{#disequazioni-equivalenti titolo="Equivalent inequalities"}
Two inequalities are **equivalent** if they have the same solutions. For example, $2x > 6$ and $x > 3$ are equivalent. To solve an inequality, we transform it into a sequence of simpler equivalent inequalities until we reach a form such as $x > 3$, from which we can read off the solutions.
:::

:::richiamo{titolo="Equivalence principles for equations"}
Adding or subtracting the same number or expression on both sides of an equation gives an equivalent equation. Multiplying or dividing both sides by the same nonzero number gives an equivalent equation.
:::

:::teorema{#principi-equivalenza titolo="Equivalence principles for inequalities"}
- **First principle.** Adding or subtracting the same number or expression on both sides gives an equivalent inequality with the same direction. It follows that we can *transpose* a term from one side to the other by changing its sign.
- **Second principle.** Multiplying or dividing both sides by the same *positive* number gives an equivalent inequality with the same direction. Multiplying or dividing by the same *negative* number gives an equivalent inequality with the direction reversed.

Both principles follow from the properties of numerical inequalities because, for every value of $x$, the two sides are numbers. The only difference from the principles for equations concerns the sign of the multiplier.

For example, in $x + 7 < 3$ we move $7$ to the right-hand side to obtain $x < 3 - 7$, that is, $x < -4$. In $-2x < 8$, we divide both sides by $-2$, which is negative, so the inequality reverses and we obtain $x > -4$.
:::

:::esempio{titolo="Checking with a number"}
The solutions of $-2x < 8$ are $x > -4$, that is, the interval $(-4, +\infty)$. The number $0$ belongs to the interval, and indeed $-2 \cdot 0 = 0$ and $0 < 8$ is true. The number $-5$ lies outside the interval, and indeed $-2 \cdot (-5) = 10$ and $10 < 8$ is false. Testing one number inside the interval and one outside is a quick way to check the direction.
:::

:::attenzione
Dividing $-2x < 8$ by $-2$ without reversing the inequality would give $x < -4$, which is incorrect. The number $-5$ satisfies $x < -4$, but when $x = -5$ the original inequality becomes $10 < 8$, which is false.
:::

## Linear polynomial inequalities

:::definizione{#disequazione-primo-grado titolo="Linear polynomial inequality"}
An inequality is **polynomial** here if the unknown does not appear in any denominator. It is **linear** if, after simplifying and moving terms, we can write it in the form
$$
a x > b ,
$$
or with $<$, $\geq$, or $\leq$, where $a$ and $b$ are numbers and $a$ is nonzero. The number $a$ is called the **coefficient** of $x$. For example, $3x - 5 < x + 1$ becomes $2x < 6$, with $a = 2$ and $b = 6$, and its solutions are $x < 3$.
:::

:::osservazione{#metodo-risoluzione titolo="How to solve a linear inequality"}
We solve a linear polynomial inequality in the following steps, each of which gives an equivalent inequality.

1. Expand the products using the distributive property and the special product identities.
2. If there are fractions with numerical denominators, multiply both sides by the least common multiple of the denominators. This number is positive, so the direction stays the same.
3. Move the terms containing $x$ to the left-hand side and the numbers to the right, changing their signs.
4. Combine like terms to obtain $a x > b$.
5. Divide both sides by $a$. If $a$ is positive, the direction stays the same. If $a$ is negative, the direction reverses.

Finally, write the solutions as an inequality and in interval notation.
:::

:::esempio{titolo="Two inequalities with products"}
We solve $3(x - 1) > x + 5$. Expanding the product gives $3x - 3 > x + 5$. Moving $x$ to the left-hand side and $-3$ to the right gives $3x - x > 5 + 3$, that is, $2x > 8$. The coefficient $2$ is positive, so dividing by $2$ preserves the direction, and the solutions are $x > 4$, that is, $(4, +\infty)$.

We solve $5 - 3x \geq x - 7$. Moving the terms gives $-3x - x \geq -7 - 5$, that is, $-4x \geq -12$. The coefficient $-4$ is negative, so dividing by $-4$ reverses the inequality:
$$
x \leq \frac{-12}{-4} , \qquad \text{that is} \qquad x \leq 3 .
$$
The solutions are $x \leq 3$, that is, the interval $(-\infty, 3]$. As a check, when $x = 3$ the two sides equal $5 - 9 = -4$ and $3 - 7 = -4$, and $-4 \geq -4$ is true.
:::

:::esempio{#disequazioni-con-frazioni titolo="An inequality with fractions"}
We solve
$$
\frac{x}{3} - \frac{x - 1}{2} < \frac{1}{6} .
$$
The least common multiple of the denominators $3$, $2$, and $6$ is $6$. We multiply both sides by $6$, which is positive, so the direction stays the same:
$$
\begin{aligned}
6 \cdot \frac{x}{3} - 6 \cdot \frac{x - 1}{2} &< 6 \cdot \frac{1}{6} \\[6pt]
2x - 3(x - 1) &< 1 \\[6pt]
2x - 3x + 3 &< 1 \\[6pt]
-x &< -2 .
\end{aligned}
$$
Multiplying by $-1$ reverses the inequality, so the solutions are $x > 2$, that is, $(2, +\infty)$.
:::

:::attenzione
A minus sign before a fraction changes the sign of *every* term in its numerator. In the example, $-3(x - 1)$ equals $-3x + 3$. Writing $-3x - 3$ would give $-x < 4$, that is, $x > -4$, which is incorrect. Indeed, $0$ satisfies $x > -4$, but when $x = 0$ the left-hand side of the original inequality equals $0 - \dfrac{-1}{2} = \dfrac{1}{2}$, and $\dfrac{1}{2} < \dfrac{1}{6}$ is false.
:::

## Inequalities that are always true or never true

:::teorema{#sempre-mai-verificate titolo="Inequalities with a zero coefficient"}
Sometimes the terms containing $x$ cancel and the inequality becomes $0 \cdot x > b$, or the corresponding inequality with $<$, $\geq$, or $\leq$. The left-hand side equals $0$ for every value of $x$, leaving a comparison between two numbers.

- If the comparison is true, every number is a solution. The inequality is **always true**, and its solutions are all real numbers, that is, the set $\mathbb{R}$.
- If the comparison is false, no number is a solution. The inequality is **never true**, and its solution set is the empty set, denoted by $\emptyset$.

For example, $0 \cdot x > -5$ is always true because $0 > -5$ is true. The inequality $0 \cdot x < -5$ is never true because $0 < -5$ is false. These cases correspond to the identities and inconsistent equations from the chapter on linear equations.
:::

:::esempio{titolo="Comparing three cases"}
In $2(x + 3) > 2x + 1$, expanding the product gives $2x + 6 > 2x + 1$. Moving the terms gives $2x - 2x > 1 - 6$, that is, $0 \cdot x > -5$. The comparison $0 > -5$ is true, so the inequality is **always true**. Indeed, the left-hand side exceeds the right by $5$ for every $x$.

In $3x - 2(x - 1) \geq x + 2$, the left-hand side becomes $3x - 2x + 2 = x + 2$, so the inequality is $x + 2 \geq x + 2$, that is, $0 \cdot x \geq 0$. The comparison $0 \geq 0$ is true, so the inequality is always true.

With the symbol $>$ in place of $\geq$, the inequality $3x - 2(x - 1) > x + 2$ becomes $0 \cdot x > 0$. The comparison $0 > 0$ is false, so the inequality is **never true** and its solution set is $\emptyset$.
:::

## Systems of inequalities

:::definizione{#sistema-disequazioni titolo="System of inequalities"}
A **system of inequalities** consists of two or more inequalities in the same unknown that must be satisfied *simultaneously*. It is written with a brace:
$$
\begin{cases}
x - 2 > 0 \\
2x \leq 10
\end{cases}
$$
The solutions of the system are the numbers that satisfy *all* the inequalities. For example, $3$ is a solution because $3 - 2 = 1 > 0$ and $2 \cdot 3 = 6 \leq 10$. The number $7$ satisfies the first inequality and makes the second one false because $14 \leq 10$ is false, so it is excluded. Systems are useful when a problem imposes several conditions at once, for example when spending must exceed a certain amount and stay within a budget.
:::

:::osservazione{#schema-sistema titolo="Graphing a system"}
To solve a system, we solve each inequality separately and then find the numbers the solutions have in common. In the preceding system, the first inequality gives $x > 2$, and dividing the second by $2$ gives $x \leq 5$. Above the number line, we draw one line for each inequality over its solution set. The solutions of the system are the portion where *all* the lines overlap, so $2 < x \leq 5$, that is, the interval $(2, 5]$.

::grafico{assi=0 uguale=1 linee="-5.6,0 7.6,0;7.3,0.15 7.6,0 7.3,-0.15;2,0.5 7.6,0.5;-3,0.9 5,0.9;-2,-0.1 -2,0.1;-1,-0.1 -1,0.1;0,-0.1 0,0.1;1,-0.1 1,0.1;2,-0.1 2,0.1;3,-0.1 3,0.1;4,-0.1 4,0.1;5,-0.1 5,0.1;6,-0.1 6,0.1;7,-0.1 7,0.1" area="1.1;0;2;5" segmenti="2,0,2,0.5;5,0,5,0.9" punti="2,0.5,vuoto;5,0.9,pieno;2,0,vuoto;5,0,pieno" etichette="-5.6,0.42,x > 2;-5.6,0.82,x ≤ 5;-2.16,-0.5,−2;-1.16,-0.5,−1;-0.08,-0.5,0;0.92,-0.5,1;1.92,-0.5,2;2.92,-0.5,3;3.92,-0.5,4;4.92,-0.5,5;5.92,-0.5,6;6.92,-0.5,7" xmin=-6 xmax=8 ymin=-0.8 ymax=1.4 titolo="The graph of the system shows that the solutions of $x > 2$ and those of $x \leq 5$ have the interval $(2, 5]$ in common"}

:::

:::esempio{titolo="A system with no solutions"}
In the system
$$
\begin{cases}
x > 4 \\
x < 2
\end{cases}
$$
the solutions of the first inequality are the numbers to the right of $4$, and those of the second are the numbers to the left of $2$. The two lines do not overlap anywhere on the graph, so the system has no solutions and its solution set is $\emptyset$.

::grafico{assi=0 uguale=1 linee="-5.6,0 7.6,0;7.3,0.15 7.6,0 7.3,-0.15;4,0.5 7.6,0.5;-3,0.9 2,0.9;-2,-0.1 -2,0.1;-1,-0.1 -1,0.1;0,-0.1 0,0.1;1,-0.1 1,0.1;2,-0.1 2,0.1;3,-0.1 3,0.1;4,-0.1 4,0.1;5,-0.1 5,0.1;6,-0.1 6,0.1;7,-0.1 7,0.1" segmenti="4,0,4,0.5;2,0,2,0.9" punti="4,0.5,vuoto;2,0.9,vuoto" etichette="-5.6,0.42,x > 4;-5.6,0.82,x < 2;-2.16,-0.5,−2;-1.16,-0.5,−1;-0.08,-0.5,0;0.92,-0.5,1;1.92,-0.5,2;2.92,-0.5,3;3.92,-0.5,4;4.92,-0.5,5;5.92,-0.5,6;6.92,-0.5,7" xmin=-6 xmax=8 ymin=-0.8 ymax=1.4 titolo="The solutions of $x > 4$ and those of $x < 2$ have no numbers in common, so the system has no solutions"}

The same happens when one inequality is never true. If an inequality is always true, every number satisfies it, so the solutions of the system are those of the remaining inequalities.
:::

## Sign of a product and rational inequalities

:::teorema{#segno-primo-grado titolo="Sign of a linear expression"}
An expression such as $2x - 6$ changes sign at only one point, where it equals zero. The numbers for which it is positive solve the inequality $2x - 6 > 0$, that is, $x > 3$. Therefore $2x - 6$ is:

- positive for $x > 3$, for example, when $x = 4$ it equals $2$;
- zero for $x = 3$;
- negative for $x < 3$, for example, when $x = 0$ it equals $-6$.

::grafico{assi=0 uguale=1 linee="-2.6,0 6.6,0;6.3,0.15 6.6,0 6.3,-0.15;-2,-0.1 -2,0.1;-1,-0.1 -1,0.1;0,-0.1 0,0.1;1,-0.1 1,0.1;2,-0.1 2,0.1;3,-0.1 3,0.1;4,-0.1 4,0.1;5,-0.1 5,0.1;6,-0.1 6,0.1" punti="3,0,pieno" etichette="-1.3,0.35,−   −   −   −;4.1,0.35,+   +   +;-2.16,-0.5,−2;-1.16,-0.5,−1;-0.08,-0.5,0;0.92,-0.5,1;1.92,-0.5,2;2.92,-0.5,3;3.92,-0.5,4;4.92,-0.5,5;5.92,-0.5,6" xmin=-3 xmax=7 ymin=-0.8 ymax=0.7 titolo="Sign of $2x - 6$: negative to the left of $3$ and positive to the right. At $3$ the expression equals zero"}

Likewise, $4 - 2x > 0$ gives $-2x > -4$, that is, $x < 2$, so $4 - 2x$ is positive for $x < 2$ and negative for $x > 2$. When the coefficient of $x$ is negative, the expression is positive to the left of its zero.
:::

:::teorema{#segno-prodotto titolo="Sign of a product of two factors"}
By the sign rule, the product of two factors is:

- positive when the two factors have the same sign;
- negative when the two factors have different signs;
- zero when at least one of the two factors is zero.

This rule lets us solve inequalities such as $(x - 1)(x + 3) > 0$ without expanding the product. For example, when $x = 2$, the factors are $1$ and $5$, both positive, and the product $5$ is positive. When $x = 0$, the factors are $-1$ and $3$, and the product $-3$ is negative.
:::

:::definizione{#schema-dei-segni titolo="Sign chart"}
A **sign chart** is a table showing the sign of each factor and of the product. We find the numbers where each factor is zero. These numbers divide the number line into intervals. The table has one row for each factor and one column for each interval. The last row shows the sign of the product, obtained using the sign rule.

For $(x - 1)(x + 3) > 0$, the factor $x - 1$ is positive for $x > 1$ and the factor $x + 3$ is positive for $x > -3$. The numbers $-3$ and $1$ divide the number line into three intervals:
$$
\begin{array}{c|ccc}
 & x < -3 & -3 < x < 1 & x > 1 \\ \hline
x - 1 & - & - & + \\
x + 3 & - & + & + \\ \hline
(x - 1)(x + 3) & + & - & +
\end{array}
$$
The product is positive in the first and third intervals, so the solutions are $x < -3$ or $x > 1$. The symbol is $>$, so the numbers $-3$ and $1$, where the product is zero, are excluded. With the symbol $\geq$, they would be included.

::grafico{assi=0 uguale=1 linee="-5.6,0 4.6,0;4.3,0.15 4.6,0 4.3,-0.15;-5,-0.1 -5,0.1;-4,-0.1 -4,0.1;-3,-0.1 -3,0.1;-2,-0.1 -2,0.1;-1,-0.1 -1,0.1;0,-0.1 0,0.1;1,-0.1 1,0.1;2,-0.1 2,0.1;3,-0.1 3,0.1;4,-0.1 4,0.1" area="0.18;0;-5.6;-3|0.18;0;1;4.5" punti="-3,0,vuoto;1,0,vuoto" etichette="-5.16,-0.5,−5;-4.16,-0.5,−4;-3.16,-0.5,−3;-2.16,-0.5,−2;-1.16,-0.5,−1;-0.08,-0.5,0;0.92,-0.5,1;1.92,-0.5,2;2.92,-0.5,3;3.92,-0.5,4" xmin=-6 xmax=5 ymin=-0.8 ymax=0.6 titolo="The solutions of $(x - 1)(x + 3) > 0$ are $x < -3$ or $x > 1$. The numbers $-3$ and $1$ are excluded"}

:::

:::definizione{#disequazioni-fratte titolo="Rational inequality"}
An inequality is **rational** here if the unknown appears in the denominator, as in
$$
\frac{x - 2}{x + 1} \geq 0 .
$$
A fraction is defined only if its denominator is nonzero. The **domain restriction** is therefore $x + 1 \neq 0$, that is, $x \neq -1$. The sign of a quotient follows the same rule as the sign of a product, so we use a sign chart with one row for the numerator and one for the denominator.

The numerator $x - 2$ is positive for $x > 2$ and the denominator $x + 1$ is positive for $x > -1$:
$$
\begin{array}{c|ccc}
 & x < -1 & -1 < x < 2 & x > 2 \\ \hline
x - 2 & - & - & + \\
x + 1 & - & + & + \\ \hline
\dfrac{x - 2}{x + 1} & + & - & +
\end{array}
$$
The quotient is positive for $x < -1$ and for $x > 2$. It is zero at $x = 2$, which is included because the symbol is $\geq$. The number $-1$ is excluded by the domain restriction. The solutions are therefore $x < -1$ or $x \geq 2$.

::grafico{assi=0 uguale=1 linee="-4.6,0 5.6,0;5.3,0.15 5.6,0 5.3,-0.15;-4,-0.1 -4,0.1;-3,-0.1 -3,0.1;-2,-0.1 -2,0.1;-1,-0.1 -1,0.1;0,-0.1 0,0.1;1,-0.1 1,0.1;2,-0.1 2,0.1;3,-0.1 3,0.1;4,-0.1 4,0.1;5,-0.1 5,0.1" area="0.18;0;-4.6;-1|0.18;0;2;5.5" punti="-1,0,vuoto;2,0,pieno" etichette="-4.16,-0.5,−4;-3.16,-0.5,−3;-2.16,-0.5,−2;-1.16,-0.5,−1;-0.08,-0.5,0;0.92,-0.5,1;1.92,-0.5,2;2.92,-0.5,3;3.92,-0.5,4;4.92,-0.5,5" xmin=-5 xmax=6 ymin=-0.8 ymax=0.6 titolo="The solutions of $\dfrac{x - 2}{x + 1} \geq 0$ are $x < -1$ or $x \geq 2$. The number $-1$ is excluded because it makes the denominator zero"}

:::

:::attenzione
In a rational inequality, we cannot simply multiply both sides by the denominator because its sign varies with $x$, so we do not know whether to reverse the inequality. Multiplying $\dfrac{x - 2}{x + 1} \geq 0$ by $x + 1$ would give $x - 2 \geq 0$, that is, $x \geq 2$, and some solutions would be lost. For example, when $x = -3$, the quotient is $\dfrac{-5}{-2} = \dfrac{5}{2}$, which is greater than zero, so $-3$ is a solution even though $-3 \geq 2$ is false.
:::

## Word problems with inequalities

:::osservazione{#problemi-disequazioni titolo="From words to an inequality"}
Many problems ask for a minimum number or an upper limit, or use phrases such as “at least” and “at most.” We choose the unknown, write the inequality, and solve it. The most common expressions translate as follows:

| wording | symbol |
| --- | --- |
| more than, exceeds | $>$ |
| less than | $<$ |
| at least, no less than | $\geq$ |
| at most, no more than | $\leq$ |

Finally, we check that the answer makes sense. If the unknown counts objects or people, only the integers in the resulting interval are solutions.
:::

:::esempio{titolo="Paying per wash or buying a laundry card"}
At a laundromat, each wash costs $4.50$ euros. Alternatively, customers can buy a card for $10$ euros and then pay $3$ euros per wash. We seek the minimum number of washes for which the card costs less.

Let $x$ be the number of washes. Without the card the cost is $4.5\,x$ euros, and with the card it is $10 + 3x$ euros. The card costs less if
$$
10 + 3x < 4.5\,x .
$$
Moving the terms gives $3x - 4.5\,x < -10$, that is, $-1.5\,x < -10$. Dividing by $-1.5$ reverses the inequality, and the quotient $\dfrac{-10}{-1.5}$ is positive because both numbers are negative. Since $\dfrac{10}{1.5} = \dfrac{100}{15} = \dfrac{20}{3}$, we obtain
$$
x > \frac{20}{3} .
$$
The number $\dfrac{20}{3}$ lies between $6$ and $7$ because $6 \cdot 3 = 18$ and $7 \cdot 3 = 21$. The number of washes is an integer, so the card **costs less** for $7$ washes or more. As a check, for $7$ washes the cost is $31.50$ euros without the card and $31$ euros with it. For $6$ washes it is $27$ euros without the card and $28$ euros with it.

The graph shows the cost in euros as a function of the number $x$ of washes. The lines intersect when $x = \dfrac{20}{3}$, where both costs are $10 + 3 \cdot \dfrac{20}{3} = 30$ euros. To the right of this point, the line for the card lies below the other line.

::grafico{f="4.5*x;10+3*x" xmin=0 xmax=10 ymin=0 ymax=45 nomi="x,euro" punti="6.667,30,pieno" segmenti="6.667,0,6.667,30" legenda="\text{without a membership card: } 4.5\,x;\text{with a membership card: } 10 + 3x" titolo="The cost with the card is lower for $x > \dfrac{20}{3}$, that is, for $7$ washes or more"}

:::

:::esempio{titolo="A problem with two conditions"}
We seek the numbers for which subtracting $4$ from three times the number gives more than $11$ and twice the number does not exceed $16$. Both conditions apply at once, so we write a system:
$$
\begin{cases}
3x - 4 > 11 \\
2x \leq 16
\end{cases}
$$
The first inequality gives $3x > 15$, that is, $x > 5$. The second gives $x \leq 8$. The solutions are $5 < x \leq 8$, that is, the interval $(5, 8]$. If we seek only integers, the solutions are $6$, $7$, and $8$.

::grafico{assi=0 uguale=1 linee="2.4,0 10.6,0;10.3,0.15 10.6,0 10.3,-0.15;3,-0.1 3,0.1;4,-0.1 4,0.1;5,-0.1 5,0.1;6,-0.1 6,0.1;7,-0.1 7,0.1;8,-0.1 8,0.1;9,-0.1 9,0.1;10,-0.1 10,0.1" area="0.18;0;5;8" punti="5,0,vuoto;6,0,pieno;7,0,pieno;8,0,pieno" etichette="2.92,-0.5,3;3.92,-0.5,4;4.92,-0.5,5;5.92,-0.5,6;6.92,-0.5,7;7.92,-0.5,8;8.92,-0.5,9;9.82,-0.5,10" xmin=2 xmax=11 ymin=-0.8 ymax=0.6 titolo="The solutions of the system form the interval $(5, 8]$. The integers in this interval are $6$, $7$, and $8$"}

:::
