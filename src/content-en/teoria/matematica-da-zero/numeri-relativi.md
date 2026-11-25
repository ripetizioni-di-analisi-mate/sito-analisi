---
titolo: Integers and the rule of signs
sommario: What integers are and where they are used, how to represent and compare them on the number line, and how to perform the four arithmetic operations, evaluate powers, and work with expressions using the rule of signs.
---

## Numbers with a sign

:::definizione{#numeri-relativi titolo="Integers"}
Among the natural numbers $0, 1, 2, 3, \ldots$, the subtraction $3 - 5$ is impossible because a group of $3$ objects is too small to take $5$ objects from it. Many quantities, however, can fall below zero, as temperature can. We use signed numbers to describe them.

An **integer** is a nonzero natural number preceded by the sign $+$ or the sign $-$. Zero is also an integer. Numbers with the $+$ sign are called **positive**, and numbers with the $-$ sign are called **negative**, while zero has no sign. An integer tells us how far we are from a reference level and on which side.

The set of integers is denoted by $\mathbb{Z}$:
$$
\mathbb{Z} = \{ \ldots, -3, -2, -1, 0, +1, +2, +3, \ldots \} .
$$
The number $+5$ is read as "plus five" and the number $-5$ as "minus five." The $+$ sign on a positive number is usually omitted, so $+5$ and $5$ denote the same number. For this reason, the natural numbers $\mathbb{N}$ are a subset of the integers $\mathbb{Z}$.
:::

:::esempio{titolo="Temperatures, account balances, elevations, and floors"}
- A temperature of $4$ degrees below zero is written as $-4$ °C, and a temperature of $12$ degrees above zero is written as $+12$ °C.
- The **balance** of a checking account is the amount of money in the account. With $200$ euros in the account, the balance is $+200$ euros. If $250$ euros are paid out of the account, a debt of $50$ euros remains, and the balance becomes $-50$ euros.
- The **elevation** of a point is its height relative to sea level. The top of a hill $300$ m high has an elevation of $+300$ m, and a diver swimming $15$ m below the surface of the sea is at an elevation of $-15$ m.
- In a building, the ground floor is floor $0$. The floors above it are $+1$, $+2$, $+3$, and the basement levels, such as the garage, are $-1$, $-2$.

::grafico{assi=0 uguale=1 linee="-6.7,0 13.9,0;13.55,0.16 13.9,0 13.55,-0.16;-6,-0.12 -6,0.12;-5,-0.12 -5,0.12;-4,-0.12 -4,0.12;-3,-0.12 -3,0.12;-2,-0.12 -2,0.12;-1,-0.12 -1,0.12;0,-0.22 0,0.22;1,-0.12 1,0.12;2,-0.12 2,0.12;3,-0.12 3,0.12;4,-0.12 4,0.12;5,-0.12 5,0.12;6,-0.12 6,0.12;7,-0.12 7,0.12;8,-0.12 8,0.12;9,-0.12 9,0.12;10,-0.12 10,0.12;11,-0.12 11,0.12;12,-0.12 12,0.12;13,-0.12 13,0.12" punti="-4,0,pieno;12,0,pieno" etichette="-6.26,-0.6,−6;-4.26,-0.6,−4;-2.26,-0.6,−2;-0.1,-0.6,0;1.9,-0.6,+2;3.9,-0.6,+4;5.9,-0.6,+6;7.9,-0.6,+8;9.9,-0.6,+10;11.9,-0.6,+12;-5.0,0.65,−4 °C;10.9,0.65,+12 °C" xmin=-7 xmax=14.2 ymin=-1 ymax=1.4 titolo="The temperatures $-4$ °C and $+12$ °C on the number line. The first is to the left of zero and the second to the right"}

In all these cases, zero is the reference level, and the sign indicates which side of zero we are on.
:::

## The number line

:::definizione{#retta-orientata titolo="Number line"}
Integers can be represented by points on a line. We choose a point on the line that corresponds to $0$ and is called the **origin**. We then choose a direction, indicated by an arrow, and a length to serve as the unit of measurement. A line with these three features is called a **number line**.

Starting at the origin, we draw tick marks, each one unit from the previous mark. In the direction of the arrow, to the right of zero, are the positive numbers $+1, +2, +3, \ldots$. On the opposite side, to the left of zero, are the negative numbers $-1, -2, -3, \ldots$. For example, the number $-4$ corresponds to the point $4$ units to the left of zero.

::grafico{assi=0 uguale=1 linee="-6.7,0 6.9,0;6.55,0.16 6.9,0 6.55,-0.16;-6,-0.12 -6,0.12;-5,-0.12 -5,0.12;-4,-0.12 -4,0.12;-3,-0.12 -3,0.12;-2,-0.12 -2,0.12;-1,-0.12 -1,0.12;0,-0.22 0,0.22;1,-0.12 1,0.12;2,-0.12 2,0.12;3,-0.12 3,0.12;4,-0.12 4,0.12;5,-0.12 5,0.12;6,-0.12 6,0.12" punti="-4,0,pieno;-1,0,pieno;2,0,pieno" etichette="-6.26,-0.6,−6;-5.26,-0.6,−5;-4.26,-0.6,−4;-3.26,-0.6,−3;-2.26,-0.6,−2;-1.26,-0.6,−1;-0.1,-0.6,0;0.8,-0.6,+1;1.8,-0.6,+2;2.8,-0.6,+3;3.8,-0.6,+4;4.8,-0.6,+5;5.8,-0.6,+6" xmin=-7 xmax=7.2 ymin=-1 ymax=1.2 titolo="On the number line the positive numbers lie to the right of zero and the negative numbers to the left. The marked points correspond to $-4$, $-1$, and $+2$"}

Each integer corresponds to a point on the number line, so the line gives us a way to compare, add, and subtract integers. A thermometer is a vertical number line with the positive numbers toward the top.
:::

## Absolute value and opposites

:::definizione{#valore-assoluto titolo="Absolute value"}
The **absolute value** of an integer is the number written without its sign. We denote it by writing the number between two vertical bars:
$$
|-7| = 7 ,
\qquad
|+7| = 7 ,
\qquad
|0| = 0 .
$$
On the number line, the absolute value of a number is its **distance from zero**, measured in units. For example, $-7$ and $+7$ are both $7$ units from zero, so they have the same absolute value. Absolute value is used in all the rules for calculating with integers, because for each operation we calculate with the absolute values and then determine the sign of the result.
:::

:::definizione{#concordi-discordi titolo="Numbers with like and unlike signs"}
Two nonzero integers have **like signs** if their signs are the same and **unlike signs** if their signs are different. For example, $-3$ and $-8$ have like signs because both are negative. The numbers $+3$ and $-8$, on the other hand, have unlike signs. The rules for addition and multiplication distinguish between these two cases.
:::

:::definizione{#numeri-opposti titolo="Opposites"}
Two integers are called **opposites** if they have the same absolute value and different signs. For example, the opposite of $+4$ is $-4$, and the opposite of $-9$ is $+9$. The opposite of $0$ is $0$ itself. On the number line, two opposites are the same distance from zero, one to the right and one to the left.

::grafico{assi=0 uguale=1 linee="-6.7,0 6.9,0;6.55,0.16 6.9,0 6.55,-0.16;-6,-0.12 -6,0.12;-5,-0.12 -5,0.12;-4,-0.12 -4,0.12;-3,-0.12 -3,0.12;-2,-0.12 -2,0.12;-1,-0.12 -1,0.12;0,-0.22 0,0.22;1,-0.12 1,0.12;2,-0.12 2,0.12;3,-0.12 3,0.12;4,-0.12 4,0.12;5,-0.12 5,0.12;6,-0.12 6,0.12" punti="-4,0,pieno;4,0,pieno" segmenti="-4,0.45,0,0.45;0,0.45,4,0.45" etichette="-6.26,-0.6,−6;-5.26,-0.6,−5;-4.26,-0.6,−4;-3.26,-0.6,−3;-2.26,-0.6,−2;-1.26,-0.6,−1;-0.1,-0.6,0;0.8,-0.6,+1;1.8,-0.6,+2;2.8,-0.6,+3;3.8,-0.6,+4;4.8,-0.6,+5;5.8,-0.6,+6;-2.45,0.62,4 units;1.55,0.62,4 units" xmin=-7 xmax=7.2 ymin=-1 ymax=1.2 titolo="The numbers $-4$ and $+4$ are opposites because they are both $4$ units from zero, on opposite sides"}

We denote the opposite of a number by enclosing the number in parentheses and writing a $-$ sign in front. For example, $-(+4)$ denotes the opposite of $+4$ and equals $-4$, while $-(-9)$ denotes the opposite of $-9$ and equals $+9$. Opposites are used in subtraction because subtracting an integer amounts to adding its opposite.
:::

## Comparing integers

:::teorema{#confronto titolo="Comparing integers"}
Of two integers, the greater one lies **farther to the right** on the number line. Three rules follow from this fact.

- Every positive number is greater than zero, and zero is greater than every negative number. For example, $+2 > 0$ and $0 > -6$, so $+2 > -6$ as well.
- Of two positive numbers, the greater one has the greater absolute value. For example, $+8 > +3$.
- Of two negative numbers, the greater one has the *smaller* absolute value. For example, $-2 > -5$ because $|-2| = 2$ is less than $|-5| = 5$.

The symbol $>$ is read as "is greater than" and the symbol $<$ as "is less than." We can use comparisons to put integers in order, such as the daily low temperatures for a week or the balances of several accounts.
:::

:::esempio{titolo="Two winter mornings"}
One morning the thermometer reads $-5$ °C, and the next morning it reads $-2$ °C. The number $-2$ lies to the right of $-5$ on the number line, so $-2 > -5$, and the second morning is warmer than the first.

::grafico{assi=0 uguale=1 linee="-6.7,0 6.9,0;6.55,0.16 6.9,0 6.55,-0.16;-6,-0.12 -6,0.12;-5,-0.12 -5,0.12;-4,-0.12 -4,0.12;-3,-0.12 -3,0.12;-2,-0.12 -2,0.12;-1,-0.12 -1,0.12;0,-0.22 0,0.22;1,-0.12 1,0.12;2,-0.12 2,0.12;3,-0.12 3,0.12;4,-0.12 4,0.12;5,-0.12 5,0.12;6,-0.12 6,0.12" punti="-5,0,pieno;-2,0,pieno" vettori="-5,0.5,-2.1,0.5" unicolore=1 etichette="-6.26,-0.6,−6;-5.26,-0.6,−5;-4.26,-0.6,−4;-3.26,-0.6,−3;-2.26,-0.6,−2;-1.26,-0.6,−1;-0.1,-0.6,0;0.8,-0.6,+1;1.8,-0.6,+2;2.8,-0.6,+3;3.8,-0.6,+4;4.8,-0.6,+5;5.8,-0.6,+6;-4.6,0.7,to the right" xmin=-7 xmax=7.2 ymin=-1 ymax=1.2 titolo="The number $-2$ lies to the right of $-5$, so $-2 > -5$, even though $|-2| < |-5|$"}

To put the numbers $+3$, $-7$, $0$, $-1$, $+5$ in **increasing order**, that is, from least to greatest, we start with the leftmost number on the line:
$$
-7 < -1 < 0 < +3 < +5 .
$$
:::

:::attenzione
Of two negative numbers, the one with the greater absolute value is the *smaller* number. For example, $-10 < -1$ even though $10 > 1$. Indeed, a balance of $-10$ euros corresponds to a debt of $10$ euros, which is larger than the debt of $1$ euro indicated by a balance of $-1$ euro.
:::

## Addition

:::teorema{#addizione titolo="Adding integers"}
There are two cases when adding two nonzero integers.

- If the numbers have **like signs**, the sum has the same sign as both numbers, and its absolute value is the sum of their absolute values. For example, $(+3) + (+4) = +7$ and $(-3) + (-4) = -7$.
- If the numbers have **unlike signs** and different absolute values, the sum has the sign of the number with the greater absolute value, and its absolute value is the difference between the greater and smaller absolute values. For example, $(+5) + (-8) = -3$ because $8 - 5 = 3$ and the number with the greater absolute value is $-8$.

If one addend is $0$, the sum equals the other addend, as in $(-6) + 0 = -6$. The sum of two opposites is $0$, as in $(+9) + (-9) = 0$.

On the number line, adding a positive number means moving to the right, and adding a negative number means moving to the left. The absolute value tells us how many units to move. To calculate $(+5) + (-8)$, we start at $+5$ and move $8$ units to the left. The first $5$ units take us to $0$, and the remaining $3$ take us to $-3$.

::grafico{assi=0 uguale=1 linee="-6.7,0 6.9,0;6.55,0.16 6.9,0 6.55,-0.16;-6,-0.12 -6,0.12;-5,-0.12 -5,0.12;-4,-0.12 -4,0.12;-3,-0.12 -3,0.12;-2,-0.12 -2,0.12;-1,-0.12 -1,0.12;0,-0.22 0,0.22;1,-0.12 1,0.12;2,-0.12 2,0.12;3,-0.12 3,0.12;4,-0.12 4,0.12;5,-0.12 5,0.12;6,-0.12 6,0.12" punti="5,0,pieno;-3,0,pieno" vettori="5,0.45,-2.9,0.45" unicolore=1 etichette="-6.26,-0.6,−6;-5.26,-0.6,−5;-4.26,-0.6,−4;-3.26,-0.6,−3;-2.26,-0.6,−2;-1.26,-0.6,−1;-0.1,-0.6,0;0.8,-0.6,+1;1.8,-0.6,+2;2.8,-0.6,+3;3.8,-0.6,+4;4.8,-0.6,+5;5.8,-0.6,+6;-0.6,0.65,8 units to the left" xmin=-7 xmax=7.2 ymin=-1 ymax=1.2 titolo="To calculate $(+5) + (-8)$, we start at $+5$ and move $8$ units to the left, reaching $-3$"}
:::

:::osservazione{#parentesi-e-segni titolo="Integers and parentheses"}
When an integer follows an operation symbol, we enclose it in parentheses to keep the two signs separate. We therefore write $(+5) + (-8)$ and $3 \cdot (-2)$. The first number in an expression can also be written without parentheses, so $(+5) + (-8)$ can also be written as $5 + (-8)$.
:::

:::esempio{titolo="A drop in temperature"}
At $6$ in the morning the temperature is $-3$ °C, and over the next two hours it drops another $4$ degrees. A drop of $4$ degrees corresponds to adding $-4$, so the new temperature is given by the sum
$$
(-3) + (-4) = -7 .
$$
The two numbers have the same sign, so we add their absolute values, $3 + 4 = 7$, and keep the $-$ sign. At $8$ the temperature is therefore $-7$ °C.

::grafico{assi=0 uguale=1 linee="-8.7,0 4.9,0;4.55,0.16 4.9,0 4.55,-0.16;-8,-0.12 -8,0.12;-7,-0.12 -7,0.12;-6,-0.12 -6,0.12;-5,-0.12 -5,0.12;-4,-0.12 -4,0.12;-3,-0.12 -3,0.12;-2,-0.12 -2,0.12;-1,-0.12 -1,0.12;0,-0.22 0,0.22;1,-0.12 1,0.12;2,-0.12 2,0.12;3,-0.12 3,0.12;4,-0.12 4,0.12" punti="-3,0,pieno;-7,0,pieno" vettori="-3,0.45,-6.9,0.45" unicolore=1 etichette="-8.26,-0.6,−8;-7.26,-0.6,−7;-6.26,-0.6,−6;-5.26,-0.6,−5;-4.26,-0.6,−4;-3.26,-0.6,−3;-2.26,-0.6,−2;-1.26,-0.6,−1;-0.1,-0.6,0;0.8,-0.6,+1;1.8,-0.6,+2;2.8,-0.6,+3;3.8,-0.6,+4;-6.3,0.65,4 units to the left" xmin=-9 xmax=5.2 ymin=-1 ymax=1.2 titolo="To calculate $(-3) + (-4)$, we start at $-3$ and move $4$ units to the left, reaching $-7$"}
:::

:::teorema{#proprieta-addizione titolo="Properties of addition"}
The properties of addition for natural numbers also hold for integers.

- **Commutative property**: Changing the order of the addends leaves the sum unchanged. For example, $(-7) + (+2) = -5$ and also $(+2) + (-7) = -5$.
- **Associative property**: In a sum of three or more addends we can add any two addends first, and the sum stays the same.

By these properties, in a sum with many addends we can add all the positive numbers first and then all the negative numbers:
$$
(+3) + (-5) + (+4) + (-6) = (+7) + (-11) = -4 .
$$
The positive numbers give $3 + 4 = 7$ and the negative numbers give $-(5 + 6) = -11$. Since $+7$ and $-11$ have opposite signs, the sum is $-4$.
:::

## Subtraction and algebraic sums

::::teorema{#sottrazione titolo="Subtracting integers"}
To subtract two integers, we add the **opposite** of the second number to the first. For example,
$$
(+3) - (-5) = (+3) + (+5) = +8 ,
\qquad
(-2) - (+6) = (-2) + (-6) = -8 .
$$
With this rule every subtraction becomes an addition. Subtracting integers therefore always gives an integer, even when the first number is less than the second. For example, $3 - 5 = 3 + (-5) = -2$.

:::dimostrazione
An example explains the rule. As with the natural numbers, the difference $(+3) - (-5)$ is the number that, when added to $-5$, gives $+3$. For example, $9 - 4 = 5$ because $4 + 5 = 9$.

On the number line we start at $-5$ and look for the displacement that takes us to $+3$. We move $5$ units to the right to reach $0$, and another $3$ units to reach $+3$. The displacement is therefore $8$ units to the right, which gives $(-5) + (+8) = +3$, so the difference $(+3) - (-5)$ equals $+8$.

::grafico{assi=0 uguale=1 linee="-6.7,0 6.9,0;6.55,0.16 6.9,0 6.55,-0.16;-6,-0.12 -6,0.12;-5,-0.12 -5,0.12;-4,-0.12 -4,0.12;-3,-0.12 -3,0.12;-2,-0.12 -2,0.12;-1,-0.12 -1,0.12;0,-0.22 0,0.22;1,-0.12 1,0.12;2,-0.12 2,0.12;3,-0.12 3,0.12;4,-0.12 4,0.12;5,-0.12 5,0.12;6,-0.12 6,0.12" punti="-5,0,pieno;3,0,pieno" vettori="-5,0.45,2.9,0.45" unicolore=1 etichette="-6.26,-0.6,−6;-5.26,-0.6,−5;-4.26,-0.6,−4;-3.26,-0.6,−3;-2.26,-0.6,−2;-1.26,-0.6,−1;-0.1,-0.6,0;0.8,-0.6,+1;1.8,-0.6,+2;2.8,-0.6,+3;3.8,-0.6,+4;4.8,-0.6,+5;5.8,-0.6,+6;-2.8,0.65,8 units to the right" xmin=-7 xmax=7.2 ymin=-1 ymax=1.2 titolo="The displacement from $-5$ to $+3$ is $8$ units to the right, with $5$ units to reach $0$ and another $3$ to reach $+3$"}

We get the same number if we start with $+3$ and add the opposite of $-5$, because $(+3) + (+5) = +8$.
:::
::::

:::esempio{titolo="A diver ascends"}
A diver is at an elevation of $-12$ m and rises to an elevation of $-3$ m. The displacement is the difference between the final and initial elevations:
$$
(-3) - (-12) = (-3) + (+12) = +9 .
$$
The result is positive, so the diver has risen $9$ m.
:::

:::definizione{#somma-algebrica titolo="Algebraic sum"}
Since subtracting a number is equivalent to adding its opposite, a sequence of additions and subtractions of integers can be written as a list of signed numbers without parentheses. This is called an **algebraic sum**, and the numbers in it are called **terms**. We use four equalities to remove parentheses:
$$
+(+3) = +3 ,
\qquad
+(-3) = -3 ,
\qquad
-(+3) = -3 ,
\qquad
-(-3) = +3 .
$$
With a $+$ sign in front, the number keeps its sign. With a $-$ sign in front, its sign changes. For example,
$$
7 - (-2) + (-5) - (+1) = 7 + 2 - 5 - 1 = 3 .
$$
We can evaluate the algebraic sum from left to right, or add the positive terms together and the negative terms together. In this example the positive terms give $7 + 2 = 9$, the negative terms give $-5 - 1 = -6$, and $9 - 6 = 3$.
:::

:::teorema{#meno-davanti-alla-parentesi titolo="A minus sign before an algebraic sum"}
When a $-$ sign precedes an algebraic sum in parentheses, we remove the parentheses and change the sign of *every* term in the expression. When a $+$ sign precedes the sum, we remove the parentheses and each term keeps its sign. For example,
$$
10 - (4 - 9) = 10 - 4 + 9 = 15 .
$$
We get the same result by first evaluating the expression $4 - 9 = -5$ and then the difference $10 - (-5) = 10 + 5 = 15$. The rule lets us remove parentheses from an algebraic sum without first evaluating the expression inside.
:::

## Multiplication, division, and the rule of signs

:::richiamo{titolo="Distributive property"}
The product of a number and a sum equals the sum of the products of that number and each addend. For example, $3 \cdot (2 + 5) = 3 \cdot 2 + 3 \cdot 5$.
:::

::::teorema{#regola-dei-segni titolo="Rule of signs"}
The absolute value of the product of two nonzero integers is the product of their absolute values. The sign of the product is determined by the **rule of signs**:

- the product of two numbers with **like signs** is positive;
- the product of two numbers with **unlike signs** is negative.

The following table summarizes the rule. The left column gives the sign of the first factor, and the top row gives the sign of the second factor:
$$
\begin{array}{c|cc}
\cdot & + & - \\ \hline
+ & + & - \\
- & - & +
\end{array}
$$
For example, $(+3) \cdot (+4) = +12$ and $(-3) \cdot (-4) = +12$, while $(+3) \cdot (-4) = -12$ and $(-3) \cdot (+4) = -12$. If one factor is $0$, the product is $0$. For example, $(-5) \cdot 0 = 0$.

:::dimostrazione
We can explain the rule by considering a few products in the cases involving a negative number.

Multiplication by a positive number is repeated addition, just as with natural numbers. Therefore,
$$
(+3) \cdot (-2) = (-2) + (-2) + (-2) = -6 .
$$
By the commutative property, $(-2) \cdot (+3) = -6$ as well. Thus the product of two numbers with opposite signs is negative.

For the product $(-3) \cdot (-2)$, we require that the distributive property continue to hold for integers. Since $(+2) + (-2) = 0$ and every number multiplied by $0$ gives $0$, we have
$$
(-3) \cdot [(+2) + (-2)] = (-3) \cdot 0 = 0 .
$$
By the distributive property, this same product equals
$$
(-3) \cdot (+2) + (-3) \cdot (-2) = -6 + (-3) \cdot (-2) .
$$
This sum therefore equals $0$. Hence $(-3) \cdot (-2)$ is the number that, when added to $-6$, gives $0$. It is therefore the opposite of $-6$, and it equals $+6$. The product of two negative numbers is thus positive.
:::
::::

:::osservazione{#moltiplicare-per-meno-uno titolo="Multiplication by minus one"}
Multiplying a number by $-1$ gives its opposite. For example, $(-1) \cdot (+3) = -3$ and $(-1) \cdot (-3) = +3$. On the number line, multiplying by $-1$ takes each number to its reflection across zero.

::grafico{assi=0 uguale=1 linee="-6.7,0 6.9,0;6.55,0.16 6.9,0 6.55,-0.16;-6,-0.12 -6,0.12;-5,-0.12 -5,0.12;-4,-0.12 -4,0.12;-3,-0.12 -3,0.12;-2,-0.12 -2,0.12;-1,-0.12 -1,0.12;0,-0.22 0,0.22;1,-0.12 1,0.12;2,-0.12 2,0.12;3,-0.12 3,0.12;4,-0.12 4,0.12;5,-0.12 5,0.12;6,-0.12 6,0.12" punti="3,0,pieno;-3,0,pieno" segmenti="-3,0.45,3,0.45" etichette="-6.26,-0.6,−6;-5.26,-0.6,−5;-4.26,-0.6,−4;-3.26,-0.6,−3;-2.26,-0.6,−2;-1.26,-0.6,−1;-0.1,-0.6,0;0.8,-0.6,+1;1.8,-0.6,+2;2.8,-0.6,+3;3.8,-0.6,+4;4.8,-0.6,+5;5.8,-0.6,+6;-1.9,0.65,(−1) · (+3) = −3" xmin=-7 xmax=7.2 ymin=-1 ymax=1.2 titolo="Multiplying $+3$ by $-1$ gives its opposite $-3$, which is the reflection of $+3$ across zero on the number line"}

Multiplying twice by $-1$ takes us back to the starting number, which is another way to see that $(-1) \cdot (-1) = +1$.
:::

:::teorema{#prodotto-di-piu-fattori titolo="Products of several factors"}
In a product of several nonzero factors, the absolute value is the product of their absolute values, and the sign depends on how many factors are negative:

- if there is an **even** number of negative factors, the product is positive;
- if there is an **odd** number of negative factors, the product is negative.

For example, $(-2) \cdot (+5) \cdot (-3) = +30$ because two factors are negative. The rule follows by applying the rule of signs two factors at a time. In the product $(-1) \cdot (-2) \cdot (-3) \cdot (+4)$ we get $(-1) \cdot (-2) = +2$, then $(+2) \cdot (-3) = -6$, and finally $(-6) \cdot (+4) = -24$. Three factors are negative, so the product is negative.
:::

:::teorema{#divisione titolo="Dividing integers"}
The quotient of two integers, with a nonzero divisor, is the number that gives the dividend when multiplied by the divisor. For example, $(-12) : (+3) = -4$ because $(-4) \cdot (+3) = -12$. For this reason, the sign of a quotient follows the same rule of signs as a product:

- the quotient of two numbers with **like signs** is positive, as in $(-20) : (-5) = +4$;
- the quotient of two numbers with **unlike signs** is negative, as in $(+18) : (-6) = -3$.

The absolute value of the quotient is the quotient of the absolute values. This chapter considers only divisions that give an integer result. A division such as $(+7) : (-2)$ gives a number that is not an integer. Such numbers are studied in the chapter on fractions.
:::

:::attenzione
Division by zero is also undefined for integers. For example, $(-6) : 0$ is undefined because no number multiplied by $0$ gives $-6$. In contrast, $0 : (-6) = 0$ because $0 \cdot (-6) = 0$.
:::

## Powers of integers

:::teorema{#potenze-di-numeri-relativi titolo="The sign of a power"}
A power, as defined in the chapter on natural numbers, is a product of factors all equal to the base. For example, $(-2)^3 = (-2) \cdot (-2) \cdot (-2)$. The absolute value of a power is the corresponding power of the absolute value of the base. For the sign, the rule for a product of several factors gives three cases:

- a power with a positive base is positive;
- a power with a negative base and an **even** exponent is positive because there is an even number of negative factors;
- a power with a negative base and an **odd** exponent is negative because there is an odd number of negative factors.

For example,
$$
(-2)^1 = -2 ,
\qquad
(-2)^2 = +4 ,
\qquad
(-2)^3 = -8 ,
\qquad
(-2)^4 = +16 .
$$
By the same rule, $(-1)^{10} = +1$ because $10$ is even, and $(-1)^{7} = -1$ because $7$ is odd. The sign of a power therefore depends only on the sign of the base and on whether the exponent is even or odd.

::grafico{assi=0 uguale=1 linee="-9.4,0 17.4,0;17.05,0.16 17.4,0 17.05,-0.16;-8,-0.2 -8,0.2;-6,-0.2 -6,0.2;-4,-0.2 -4,0.2;-2,-0.2 -2,0.2;0,-0.3 0,0.3;2,-0.2 2,0.2;4,-0.2 4,0.2;6,-0.2 6,0.2;8,-0.2 8,0.2;10,-0.2 10,0.2;12,-0.2 12,0.2;14,-0.2 14,0.2;16,-0.2 16,0.2" punti="-2,0,pieno;4,0,pieno;-8,0,pieno;16,0,pieno" etichette="-0.3,-0.9,0;-2.3,-0.9,−2;3.7,-0.9,+4;-8.3,-0.9,−8;15.55,-0.9,+16;-3.6,0.8,(−2)¹;2.4,0.8,(−2)²;-9.6,0.8,(−2)³;14.4,0.8,(−2)⁴" xmin=-10 xmax=18.2 ymin=-1.5 ymax=1.8 titolo="The powers of $-2$ with exponents $1$, $2$, $3$, and $4$ lie alternately to the right and left of zero"}
:::

:::attenzione{#meno-davanti-alla-potenza}
The expressions $-2^2$ and $(-2)^2$ represent different numbers. In $(-2)^2$ the base is $-2$, so $(-2)^2 = (-2) \cdot (-2) = +4$. In $-2^2$ the base is $2$ and the $-$ sign in front denotes the opposite of the power, so $-2^2 = -(2 \cdot 2) = -4$. Similarly, $-3^2 = -9$, while $(-3)^2 = +9$.

With an odd exponent, however, the two numbers coincide, because $-2^3 = -8$ and also $(-2)^3 = -8$.
:::

## Expressions with integers

:::richiamo{titolo="Order of operations"}
In an expression, we evaluate powers first, then multiply and divide in the order in which the operations appear from left to right, and finally add and subtract. If grouping symbols are present, we evaluate expressions in parentheses first, then those in brackets, and finally those in braces.
:::

:::definizione{#espressioni titolo="Expressions with integers"}
An **expression with integers** is a sequence of integers linked by operation signs and grouping symbols. To evaluate it, we use the same order of operations as for natural numbers, applying the corresponding rule of signs at each step. For example,
$$
\begin{aligned}
(-3) \cdot (+4) - (-10) : (+2)
&= -12 - (-5) \\[6pt]
&= -12 + 5 \\[6pt]
&= -7 .
\end{aligned}
$$
We multiply and divide before subtracting. The product $(-3) \cdot (+4)$ has factors with opposite signs and equals $-12$. The quotient $(-10) : (+2)$ also involves numbers with opposite signs and equals $-5$. Finally, subtracting $-5$ becomes adding $+5$.
:::

:::esempio{titolo="An expression with three kinds of grouping symbols"}
$$
\begin{aligned}
& \{ [ (-2)^3 + 5 ] \cdot (-4) - (-3)^2 \} : (-3) \\[6pt]
={} & \{ [ -8 + 5 ] \cdot (-4) - 9 \} : (-3) \\[6pt]
={} & \{ (-3) \cdot (-4) - 9 \} : (-3) \\[6pt]
={} & \{ 12 - 9 \} : (-3) \\[6pt]
={} & (+3) : (-3) \\[6pt]
={} & -1
\end{aligned}
$$
First we evaluate the powers. The base $-2$ has an odd exponent, so $(-2)^3 = -8$. The base $-3$ has an even exponent, so $(-3)^2 = +9$, and the $-$ sign before $(-3)^2$ gives $-9$. Next, $-8 + 5 = -3$ because the numbers have opposite signs and $8 - 5 = 3$. The product $(-3) \cdot (-4)$ has factors with the same sign and equals $+12$, and then $12 - 9 = 3$. Finally, the quotient $(+3) : (-3)$ involves numbers with opposite signs, so the expression equals $-1$.
:::
