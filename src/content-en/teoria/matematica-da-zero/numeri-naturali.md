---
titolo: Natural numbers and order of operations
sommario: What natural numbers are and how to write them using digits, the names of the terms in the four arithmetic operations, how to divide with a remainder, the properties of the operations, what a power is, and the order for evaluating an expression with parentheses.
---

## Natural numbers and their order

:::definizione{#numeri-naturali titolo="Natural numbers"}
The numbers used to count objects are called **natural numbers**. The first is zero, which indicates that there are no objects. The count then continues by adding one each time:
$$
0, \ 1, \ 2, \ 3, \ 4, \ 5, \ \ldots
$$
The dots indicate that the list goes on forever. The collection of all natural numbers is called the set of natural numbers and is denoted by the symbol $\mathbb{N}$.

Every natural number has a **successor**, obtained by adding $1$. The successor of $7$ is $8$, and the successor of $99$ is $100$. Since it is always possible to add $1$, there is no largest natural number. Every natural number other than $0$ also has a **predecessor**, obtained by subtracting $1$. The predecessor of $40$ is $39$, whereas zero has no predecessor among the natural numbers.
:::

:::definizione{#ordine-numeri-naturali titolo="Ordering natural numbers"}
Given two different natural numbers, the **smaller** one comes first when counting from $0$, and the other is the **larger** one. We write $a < b$, read as “$a$ is less than $b$,” or $b > a$, read as “$b$ is greater than $a$.” The tip of the symbol always points toward the smaller number. For example, $3 < 8$ and $15 > 11$.

The symbols $\leq$ and $\geq$ are read as “less than or equal to” and “greater than or equal to.” The expression $a \leq 5$ means that $a$ is less than $5$ or equal to $5$, so $a$ is one of the numbers $0$, $1$, $2$, $3$, $4$, $5$.

This order lets us arrange a list of numbers from smallest to largest, as we might do with prices or scores. The numbers $12$, $5$, $30$, and $9$, arranged in increasing order, give $5 < 9 < 12 < 30$.
:::

:::definizione{#retta-dei-numeri titolo="The number line"}
Natural numbers can be represented on a line. Choose a point for $0$ and a line segment as the **unit of length**. Starting at $0$, mark off the unit to the right as many times as needed. The first step reaches the point for the number $1$, the second reaches the point for $2$, and so on. The arrow shows the direction in which the numbers increase.

On this **number line**, the smaller number is always to the left of the larger one. The distance between the points for two numbers, measured in steps, is the difference between the larger and the smaller number.

::grafico{assi=0 uguale=1 linee="-0.4,0 10.8,0;10.5,0.18 10.8,0 10.5,-0.18;0,-0.12 0,0.12;1,-0.12 1,0.12;2,-0.12 2,0.12;3,-0.12 3,0.12;4,-0.12 4,0.12;5,-0.12 5,0.12;6,-0.12 6,0.12;7,-0.12 7,0.12;8,-0.12 8,0.12;9,-0.12 9,0.12;10,-0.12 10,0.12" punti="2,0,pieno;7,0,pieno" segmenti="2,0.45,7,0.45" etichette="-0.13,-0.55,0;0.87,-0.55,1;1.87,-0.55,2;2.87,-0.55,3;3.87,-0.55,4;4.87,-0.55,5;5.87,-0.55,6;6.87,-0.55,7;7.87,-0.55,8;8.87,-0.55,9;9.74,-0.55,10;3.7,0.65,5 steps" xmin=-0.8 xmax=11.2 ymin=-1 ymax=1.1 titolo="On the number line, $2$ is to the left of $7$, so $2 < 7$. From $2$ to $7$ there are $5$ steps"}

:::

## The decimal place-value system

:::definizione{#sistema-decimale titolo="Decimal place-value system"}
We write numbers using ten symbols called **digits**:
$$
0, \ 1, \ 2, \ 3, \ 4, \ 5, \ 6, \ 7, \ 8, \ 9 .
$$
Ten ones make one *ten*, ten tens make one *hundred*, and ten hundreds make one *thousand*. In a number with several digits, the rightmost digit counts the ones, the digit to its left counts the tens, and then come the hundreds and thousands. The value of a digit therefore depends on its position, which is why the system is called a **place-value** system. It is called **decimal** because the units are grouped in tens.

In the number $234$, the digit $2$ represents $2$ hundreds, the digit $3$ represents $3$ tens, and the digit $4$ represents $4$ ones, so
$$
234 = 200 + 30 + 4 .
$$

::grafico{assi=0 uguale=1 poligoni="0,0 5,0 5,5 0,5;6,0 11,0 11,5 6,5;12,0 12.5,0 12.5,5 12,5;13,0 13.5,0 13.5,5 13,5;14,0 14.5,0 14.5,5 14,5;15.5,0 16,0 16,0.5 15.5,0.5;15.5,0.8 16,0.8 16,1.3 15.5,1.3;15.5,1.6 16,1.6 16,2.1 15.5,2.1;15.5,2.4 16,2.4 16,2.9 15.5,2.9" linee="0,0 5,0 5,5 0,5 0,0;0.5,0 0.5,5;1,0 1,5;1.5,0 1.5,5;2,0 2,5;2.5,0 2.5,5;3,0 3,5;3.5,0 3.5,5;4,0 4,5;4.5,0 4.5,5;0,0.5 5,0.5;0,1 5,1;0,1.5 5,1.5;0,2 5,2;0,2.5 5,2.5;0,3 5,3;0,3.5 5,3.5;0,4 5,4;0,4.5 5,4.5;6,0 11,0 11,5 6,5 6,0;6.5,0 6.5,5;7,0 7,5;7.5,0 7.5,5;8,0 8,5;8.5,0 8.5,5;9,0 9,5;9.5,0 9.5,5;10,0 10,5;10.5,0 10.5,5;6,0.5 11,0.5;6,1 11,1;6,1.5 11,1.5;6,2 11,2;6,2.5 11,2.5;6,3 11,3;6,3.5 11,3.5;6,4 11,4;6,4.5 11,4.5;12,0 12.5,0 12.5,5 12,5 12,0;12,0.5 12.5,0.5;12,1 12.5,1;12,1.5 12.5,1.5;12,2 12.5,2;12,2.5 12.5,2.5;12,3 12.5,3;12,3.5 12.5,3.5;12,4 12.5,4;12,4.5 12.5,4.5;13,0 13.5,0 13.5,5 13,5 13,0;13,0.5 13.5,0.5;13,1 13.5,1;13,1.5 13.5,1.5;13,2 13.5,2;13,2.5 13.5,2.5;13,3 13.5,3;13,3.5 13.5,3.5;13,4 13.5,4;13,4.5 13.5,4.5;14,0 14.5,0 14.5,5 14,5 14,0;14,0.5 14.5,0.5;14,1 14.5,1;14,1.5 14.5,1.5;14,2 14.5,2;14,2.5 14.5,2.5;14,3 14.5,3;14,3.5 14.5,3.5;14,4 14.5,4;14,4.5 14.5,4.5;15.5,0 16,0 16,0.5 15.5,0.5 15.5,0;15.5,0.8 16,0.8 16,1.3 15.5,1.3 15.5,0.8;15.5,1.6 16,1.6 16,2.1 15.5,2.1 15.5,1.6;15.5,2.4 16,2.4 16,2.9 15.5,2.9 15.5,2.4" etichette="1.2,-0.8,2 hundreds;12.1,-0.8,3 tens;15.1,-0.8,4 ones" xmin=-0.5 xmax=17.5 ymin=-1.5 ymax=5.5 titolo="The number $234$ consists of $2$ hundreds, $3$ tens, and $4$ ones, that is, $234 = 200 + 30 + 4$"}

In this way, just ten digits can represent any natural number, however large.
:::

:::esempio{titolo="Reading the digits of a number"}
The number $4\,256$ contains $4$ thousands, $2$ hundreds, $5$ tens, and $6$ ones:
$$
4\,256 = 4\,000 + 200 + 50 + 6 .
$$
Numbers with more than four digits are written using a small space to separate groups of three digits, counting from the right, as in $4\,256$ and $1\,250\,000$. The space makes the number easier to read and does not change its value.
:::

:::attenzione
A zero inside a number indicates that there are no ones, tens, or hundreds in that position, and it cannot be left out. The number $305$ has $3$ hundreds, $0$ tens, and $5$ ones, so its value is $300 + 5$. The number $35$, on the other hand, has $3$ tens and $5$ ones and is equal to $30 + 5$, which is much smaller.
:::

:::osservazione{#confronto-numeri titolo="Comparing numbers written in digits"}
Place value lets us compare two numbers without counting. If the numbers have different numbers of digits, the one with more digits is larger because, for example, every four-digit number is at least $1\,000$, while every three-digit number is at most $999$. If the two numbers have the same number of digits, compare the digits starting from the left. The larger number is the one with the larger digit in the first position where they differ. For example, $3\,482 > 3\,429$ because the thousands and hundreds digits match and, in the tens place, $8$ is greater than $2$.
:::

## Addition and subtraction

:::definizione{#addizione titolo="Addition"}
**Addition** combines two quantities into one. The numbers being added are called **addends**, and the result is called the **sum**:
$$
\underbrace{3}_{\text{addend}} + \underbrace{4}_{\text{addend}} = \underbrace{7}_{\text{sum}} .
$$
On the number line, adding $4$ means moving $4$ steps to the right. The sum of two natural numbers is always a natural number. For example, if there are $3$ apples in a basket and $4$ more are added, there are $3 + 4 = 7$ apples in the basket.
:::

:::definizione{#sottrazione titolo="Subtraction"}
Subtraction is the inverse of addition. Given two numbers $a$ and $b$ with $a \geq b$, the difference $a - b$ is the number that, when added to $b$, gives $a$. The first number is called the **minuend**, the second the **subtrahend**, and the result the **difference**:
$$
\underbrace{7}_{\text{minuend}} - \underbrace{4}_{\text{subtrahend}} = \underbrace{3}_{\text{difference}} ,
\qquad
\text{because} \quad 4 + 3 = 7 .
$$
On the number line, subtracting $4$ means moving $4$ steps to the left. Subtraction lets us take one quantity away from another and find how much is missing. If a book has $100$ pages and $38$ have been read, there are $100 - 38 = 62$ pages left to read, because $38 + 62 = 100$.

::grafico{assi=0 uguale=1 linee="-0.4,0 10.8,0;10.5,0.18 10.8,0 10.5,-0.18;0,-0.12 0,0.12;1,-0.12 1,0.12;2,-0.12 2,0.12;3,-0.12 3,0.12;4,-0.12 4,0.12;5,-0.12 5,0.12;6,-0.12 6,0.12;7,-0.12 7,0.12;8,-0.12 8,0.12;9,-0.12 9,0.12;10,-0.12 10,0.12" punti="3,0,pieno;7,0,pieno" vettori="3,0.5,7,0.5,+4;7,1.2,3,1.2,−4" etichette="-0.13,-0.55,0;0.87,-0.55,1;1.87,-0.55,2;2.87,-0.55,3;3.87,-0.55,4;4.87,-0.55,5;5.87,-0.55,6;6.87,-0.55,7;7.87,-0.55,8;8.87,-0.55,9;9.74,-0.55,10" xmin=-0.8 xmax=11.2 ymin=-1 ymax=1.8 titolo="Starting at $3$, we reach $7$ by moving $4$ steps to the right, so $3 + 4 = 7$. From $7$ we return to $3$ by moving $4$ steps to the left, so $7 - 4 = 3$"}

:::

:::esempio{titolo="Checking subtraction"}
The definition also gives a way to verify the result, called a **check**. We calculate $52 - 17 = 35$. To check the result, add the difference to the subtrahend. This gives $17 + 35 = 52$, the minuend. If the sum had not been $52$, the subtraction would have been incorrect.
:::

:::attenzione
In the natural numbers, the subtraction $a - b$ is possible *only if* $a \geq b$. For example, $3 - 5$ is not a natural number because no natural number added to $5$ gives $3$. Subtractions of this kind require negative numbers, which are covered in the chapter on integers.
:::

## Multiplication and division

:::definizione{#moltiplicazione titolo="Multiplication"}
**Multiplication** is repeated addition of equal addends. The product $3 \cdot 4$ denotes the sum of $3$ addends each equal to $4$:
$$
3 \cdot 4 = 4 + 4 + 4 = 12 .
$$
The numbers being multiplied are called **factors**, and the result is called the **product**. The multiplication sign is the dot $\cdot$, read as “times.” Multiplication lets us count objects arranged in equal groups, such as $3$ rows of $4$ small squares, or $5$ packs of $6$ bottles, which contain $5 \cdot 6 = 30$ bottles.

::grafico{assi=0 uguale=1 poligoni="0,0 4,0 4,3 0,3" linee="0,0 4,0 4,3 0,3 0,0;1,0 1,3;2,0 2,3;3,0 3,3;0,1 4,1;0,2 4,2" etichette="4.4,1.3,3 rows;1.1,-0.7,4 squares per row" xmin=-0.5 xmax=6.5 ymin=-1.2 ymax=3.4 titolo="Three rows of $4$ small squares contain $4 + 4 + 4 = 12$ squares, so $3 \cdot 4 = 12$"}

:::

:::definizione{#divisione titolo="Division"}
Division is the inverse of multiplication. Given two numbers $a$ and $b$ with $b \neq 0$, the quotient $a : b$ is the number that, when multiplied by $b$, gives $a$. The first number is called the **dividend**, the second the **divisor**, and the result the **quotient**:
$$
\underbrace{12}_{\text{dividend}} : \underbrace{3}_{\text{divisor}} = \underbrace{4}_{\text{quotient}} ,
\qquad
\text{because} \quad 4 \cdot 3 = 12 .
$$
The sign $:$ is read as “divided by.” Division lets us split a quantity into equal parts. If $12$ pieces of candy are shared equally among $3$ children, each receives $12 : 3 = 4$. When the quotient is a natural number, as in this case, the division is called **exact**.
:::

:::teorema{#divisione-con-resto titolo="Division with remainder"}
Division of natural numbers is not always exact. For example, $17$ pieces of candy cannot be shared equally among $5$ children because no natural number multiplied by $5$ gives $17$. In this case we find how many times the divisor fits into the dividend and how much is left over.

Given two natural numbers $a$ and $b$ with $b \neq 0$, there is a unique pair of natural numbers $q$ and $r$ such that
$$
a = b \cdot q + r ,
\qquad
\text{with } r < b .
$$
The number $q$ is called the **quotient**, and the number $r$ is called the **remainder**. The remainder is less than the divisor because, if it were equal to or greater than the divisor, the divisor would fit into the dividend one more time. The division is exact when the remainder is $0$.

For $17 : 5$, we have $5 \cdot 3 = 15$ and $5 \cdot 4 = 20$. The number $20$ exceeds $17$, so $5$ fits $3$ times into $17$ and the quotient is $3$. The remainder is $17 - 15 = 2$, which is less than $5$. Therefore
$$
17 = 5 \cdot 3 + 2 ,
$$
and each child receives $3$ pieces of candy, with $2$ left over.

::grafico{assi=0 uguale=1 linee="-0.4,0 18.8,0;18.5,0.18 18.8,0 18.5,-0.18;0,-0.12 0,0.12;1,-0.12 1,0.12;2,-0.12 2,0.12;3,-0.12 3,0.12;4,-0.12 4,0.12;5,-0.12 5,0.12;6,-0.12 6,0.12;7,-0.12 7,0.12;8,-0.12 8,0.12;9,-0.12 9,0.12;10,-0.12 10,0.12;11,-0.12 11,0.12;12,-0.12 12,0.12;13,-0.12 13,0.12;14,-0.12 14,0.12;15,-0.12 15,0.12;16,-0.12 16,0.12;17,-0.12 17,0.12;18,-0.12 18,0.12" punti="17,0,pieno" vettori="0,0.6,5,0.6,5;5,0.6,10,0.6,5;10,0.6,15,0.6,5" unicolore=1 segmenti="15,0.6,17,0.6" etichette="-0.17,-0.55,0;4.83,-0.55,5;9.66,-0.55,10;14.66,-0.55,15;16.66,-0.55,17;15.2,1.25,remainder 2" xmin=-1 xmax=19.5 ymin=-1.1 ymax=1.8 titolo="Dividing $17$ into groups of $5$ gives $3$ groups with $2$ units left over, so $17 = 5 \cdot 3 + 2$"}

:::

:::esempio{titolo="Division with remainder in everyday life"}
A group of $58$ people needs to travel in vans with $8$ seats each. We calculate $58 : 8$. Since $8 \cdot 7 = 56$ and $8 \cdot 8 = 64$, the quotient is $7$ and the remainder is $58 - 56 = 2$, so
$$
58 = 8 \cdot 7 + 2 .
$$
Seven vans are full and $2$ people are left. One more van is needed for those two people, so the total number of vans needed is $8$. Depending on the question, the answer to a problem of this kind is either the quotient or the quotient plus $1$.
:::

## Properties of the operations

:::teorema{#proprieta-commutativa titolo="Commutative property"}
In addition and multiplication, changing the order of the terms leaves the result unchanged. For all natural numbers $a$ and $b$, we have
$$
a + b = b + a ,
\qquad
a \cdot b = b \cdot a .
$$
For example, $3 + 4 = 4 + 3 = 7$ and $3 \cdot 4 = 4 \cdot 3 = 12$. To see this for multiplication, consider the rectangle of small squares by rows or by columns. It has $3$ rows of $4$ squares, or $4$ columns of $3$ squares, so $3 \cdot 4$ and $4 \cdot 3$ count the same squares. This property lets us choose whichever order is more convenient. We can calculate $2 \cdot 37$ as $37 \cdot 2$, that is, $37 + 37 = 74$.
:::

:::attenzione
Subtraction and division are not commutative. For example, $8 - 2 = 6$, whereas $2 - 8$ is not even a natural number. Similarly, $8 : 2 = 4$, whereas $2 : 8$ is not a natural number.
:::

:::teorema{#proprieta-associativa titolo="Associative property"}
In a sum of three or more addends, two adjacent addends can be added together and replaced by their sum without changing the result. The same holds for the factors in a product. For all natural numbers $a$, $b$, and $c$, we have
$$
(a + b) + c = a + (b + c) ,
\qquad
(a \cdot b) \cdot c = a \cdot (b \cdot c) .
$$
Together with the commutative property, this property lets us group terms in whichever way is most convenient for mental arithmetic. For example,
$$
25 \cdot 7 \cdot 4 = 7 \cdot (25 \cdot 4) = 7 \cdot 100 = 700 ,
$$
where we switched $25$ and $7$ and then calculated the product $25 \cdot 4 = 100$ first.
:::

::::teorema{#proprieta-distributiva titolo="Distributive property"}
To multiply a number by a sum, we can multiply the number by each addend and then add the products. For all natural numbers $a$, $b$, and $c$, we have
$$
a \cdot (b + c) = a \cdot b + a \cdot c ,
$$
and when $b \geq c$, we also have $a \cdot (b - c) = a \cdot b - a \cdot c$. Multiplication is said to distribute over addition and subtraction.

This property can be used to multiply mentally by breaking one factor into a sum or a difference. For example,
$$
7 \cdot 23 = 7 \cdot (20 + 3) = 140 + 21 = 161 ,
\qquad
6 \cdot 98 = 6 \cdot (100 - 2) = 600 - 12 = 588 .
$$
Read from right to left, the same equality lets us **factor out** a common factor, as in $17 \cdot 6 + 17 \cdot 4 = 17 \cdot (6 + 4) = 17 \cdot 10 = 170$. In algebra this step is called factoring out a common factor and is used in the chapter on factorization.

:::dimostrazione
A rectangle of small squares illustrates the property for $3 \cdot (4 + 2)$. The rectangle has $3$ rows, and each row contains $4 + 2 = 6$ squares, so the rectangle contains $3 \cdot 6 = 18$ squares.

Now divide the rectangle with a vertical line after the first $4$ columns. The part on the left has $3$ rows of $4$ squares, or $3 \cdot 4 = 12$ squares, and the part on the right has $3$ rows of $2$ squares, or $3 \cdot 2 = 6$ squares. The two parts make up the entire rectangle, so the number of squares is also $12 + 6 = 18$.

::grafico{assi=0 uguale=1 poligoni="0,0 4,0 4,3 0,3" linee="0,0 6,0 6,3 0,3 0,0;1,0 1,3;2,0 2,3;3,0 3,3;4,0 4,3;5,0 5,3;0,1 6,1;0,2 6,2;4,-0.3 4,3.3" etichette="1.2,3.4,3 · 4;4.5,3.4,3 · 2" xmin=-0.5 xmax=6.5 ymin=-0.6 ymax=4.1 titolo="The rectangle with $3$ rows of $4 + 2$ small squares contains $3 \cdot 4 + 3 \cdot 2 = 12 + 6 = 18$ squares, so $3 \cdot (4 + 2) = 3 \cdot 4 + 3 \cdot 2$"}

Both counts give the number of squares in the same rectangle, so $3 \cdot (4 + 2) = 3 \cdot 4 + 3 \cdot 2$. The same reasoning applies to a rectangle with $a$ rows of $b + c$ squares, for any number of rows and columns.
:::
::::

:::teorema{#elemento-neutro titolo="Identity element"}
The number $0$ is the **identity element** for addition, and the number $1$ is the identity element for multiplication. This means that for every natural number $a$,
$$
a + 0 = a ,
\qquad
a \cdot 1 = a .
$$
Adding zero objects leaves the quantity unchanged, and $a$ groups of one object contain $a$ objects. For example, $45 + 0 = 45$ and $45 \cdot 1 = 45$. We also have $a - 0 = a$ and $a : 1 = a$, as in $45 - 0 = 45$ and $45 : 1 = 45$.
:::

:::teorema{#zero-moltiplicazione-divisione titolo="Zero in multiplication and division"}
- For every natural number $a$, we have $a \cdot 0 = 0$ because $a$ groups of zero objects contain no objects. For example, $8 \cdot 0 = 0$.
- For every natural number $a \neq 0$, we have $0 : a = 0$ because $0 \cdot a = 0$. If $0$ pieces of candy are shared equally among $5$ children, each child receives $0$ pieces.
- The division $a : 0$ cannot be performed. In other words, division by zero is undefined. If $a \neq 0$, no number multiplied by $0$ gives $a$ because every number multiplied by $0$ gives $0$. For example, $5 : 0$ has no result. If $a = 0$, every number multiplied by $0$ gives $0$, so the quotient $0 : 0$ does not determine a unique number.

It follows from the first rule that a product is $0$ if one of its factors is $0$. For example, $37 \cdot 0 \cdot 12 = 0$ without any further calculation. Moreover, a product whose factors are all different from $0$ is different from $0$, as in $3 \cdot 5 = 15$. Together these two rules form the **zero-product property**, which is used in the chapter on factorization to find the domain restrictions.
:::

## Powers

:::definizione{#potenza titolo="Power"}
A **power** is a shorthand way of writing a product of equal factors. If $a$ and $n$ are natural numbers with $n \geq 2$, the power $a^n$ is the product of $n$ factors each equal to $a$:
$$
a^n = \underbrace{a \cdot a \cdot \ldots \cdot a}_{n \text{ factors}} .
$$
The number $a$ is called the **base**, and the number $n$, written smaller and raised above the line, is called the **exponent**. The exponent tells us how many times the base appears as a factor. We also set $a^1 = a$. For example,
$$
2^3 = 2 \cdot 2 \cdot 2 = 8 ,
\qquad
5^2 = 5 \cdot 5 = 25 ,
\qquad
3^4 = 3 \cdot 3 \cdot 3 \cdot 3 = 81 .
$$
The power $2^3$ is read as “two to the third power.” A power with exponent $2$ is also called a *square*, and a power with exponent $3$ is called a *cube*, because $a^2$ is the number of small squares in a square with $a$ small squares on each side, and $a^3$ is the number of small cubes in a cube with $a$ small cubes along each edge.

::grafico{assi=0 uguale=1 poligoni="0,0 3,0 3,3 0,3;5,0 9,0 9,4 5,4" linee="0,0 3,0 3,3 0,3 0,0;1,0 1,3;2,0 2,3;0,1 3,1;0,2 3,2;5,0 9,0 9,4 5,4 5,0;6,0 6,4;7,0 7,4;8,0 8,4;5,1 9,1;5,2 9,2;5,3 9,3" etichette="0.6,-0.7,3² = 9;6.1,-0.7,4² = 16" xmin=-0.5 xmax=9.5 ymin=-1.3 ymax=4.4 titolo="A square with $3$ small squares on each side contains $3^2 = 9$ small squares, and one with $4$ on each side contains $4^2 = 16$"}

::grafico{assi=0 uguale=1 poligoni="0,5.2 2,5.2 2,6.2 0,6.2;0,3.9000000000000004 4,3.9000000000000004 4,4.9 0,4.9;0,2.6 8,2.6 8,3.6 0,3.6;0,1.3 16,1.3 16,2.3 0,2.3;0,0.0 32,0.0 32,1.0 0,1.0" linee="0,5.2 2,5.2 2,6.2 0,6.2 0,5.2;1,5.2 1,6.2;0,3.9000000000000004 4,3.9000000000000004 4,4.9 0,4.9 0,3.9000000000000004;1,3.9000000000000004 1,4.9;2,3.9000000000000004 2,4.9;3,3.9000000000000004 3,4.9;0,2.6 8,2.6 8,3.6 0,3.6 0,2.6;1,2.6 1,3.6;2,2.6 2,3.6;3,2.6 3,3.6;4,2.6 4,3.6;5,2.6 5,3.6;6,2.6 6,3.6;7,2.6 7,3.6;0,1.3 16,1.3 16,2.3 0,2.3 0,1.3;1,1.3 1,2.3;2,1.3 2,2.3;3,1.3 3,2.3;4,1.3 4,2.3;5,1.3 5,2.3;6,1.3 6,2.3;7,1.3 7,2.3;8,1.3 8,2.3;9,1.3 9,2.3;10,1.3 10,2.3;11,1.3 11,2.3;12,1.3 12,2.3;13,1.3 13,2.3;14,1.3 14,2.3;15,1.3 15,2.3;0,0.0 32,0.0 32,1.0 0,1.0 0,0.0;1,0.0 1,1.0;2,0.0 2,1.0;3,0.0 3,1.0;4,0.0 4,1.0;5,0.0 5,1.0;6,0.0 6,1.0;7,0.0 7,1.0;8,0.0 8,1.0;9,0.0 9,1.0;10,0.0 10,1.0;11,0.0 11,1.0;12,0.0 12,1.0;13,0.0 13,1.0;14,0.0 14,1.0;15,0.0 15,1.0;16,0.0 16,1.0;17,0.0 17,1.0;18,0.0 18,1.0;19,0.0 19,1.0;20,0.0 20,1.0;21,0.0 21,1.0;22,0.0 22,1.0;23,0.0 23,1.0;24,0.0 24,1.0;25,0.0 25,1.0;26,0.0 26,1.0;27,0.0 27,1.0;28,0.0 28,1.0;29,0.0 29,1.0;30,0.0 30,1.0;31,0.0 31,1.0" etichette="2.8,5.5,2¹ = 2;4.8,4.2,2² = 4;8.8,2.9,2³ = 8;16.8,1.6,2⁴ = 16;32.8,0.3,2⁵ = 32" xmin=-0.5 xmax=42 ymin=-0.5 ymax=6.3 titolo="Each increase of $1$ in the exponent of $2$ doubles the number of squares: $2^1 = 2$, $2^2 = 4$, $2^3 = 8$, $2^4 = 16$, $2^5 = 32$"}

The properties of powers, the exponent $0$, and negative exponents are covered in the chapter on powers and roots.
:::

:::esempio{titolo="Powers of 10, 1, and 0"}
- A power of $10$ is written as the digit $1$ followed by as many zeros as the exponent indicates. For example, $10^2 = 10 \cdot 10 = 100$ and $10^4 = 10 \cdot 10 \cdot 10 \cdot 10 = 10\,000$.
- Every power with base $1$ is equal to $1$ because $1 \cdot 1 = 1$. For example, $1^7 = 1$.
- Every power with base $0$ and exponent at least $1$ is equal to $0$ because a product with a factor of $0$ is equal to $0$. For example, $0^3 = 0$.

Powers of $10$ give a compact way to write the value of the digits in a number. For example, $4\,256 = 4 \cdot 10^3 + 2 \cdot 10^2 + 5 \cdot 10 + 6$.
:::

:::attenzione
The exponent is not a factor. The power $2^3$ equals $2 \cdot 2 \cdot 2 = 8$, whereas $2 \cdot 3 = 6$. Similarly, $5^2 = 25$ is different from $5 \cdot 2 = 10$.
:::

## Order of operations

:::definizione{#espressione titolo="Numerical expression"}
A **numerical expression** is a sequence of numbers linked by operation signs, such as $20 - 2 \cdot 3^2 + 8 : 4$. To **evaluate** the expression, or find its **value**, means to perform all the operations until a single number remains. For example, the expression $3 + 5$ has the value $8$.
:::

:::teorema{#ordine-delle-operazioni titolo="Order of operations"}
In an expression without parentheses, the operations are performed in this order:

1. powers;
2. multiplication and division, in the order in which they appear from left to right;
3. addition and subtraction, in the order in which they appear from left to right.

This rule is a convention. Everyone uses it, so each expression has a single value, the same for anyone who evaluates it. For example, in the expression $3 + 5 \cdot 2$, we first find the product, $5 \cdot 2 = 10$, and then add, so the value is $3 + 10 = 13$. In the following expression we first evaluate the power $3^2 = 9$, then the multiplication $2 \cdot 9 = 18$ and the division $8 : 4 = 2$, and finally the subtraction and addition from left to right:
$$
\begin{aligned}
20 - 2 \cdot 3^2 + 8 : 4
&= 20 - 2 \cdot 9 + 8 : 4 \\[6pt]
&= 20 - 18 + 2 \\[6pt]
&= 2 + 2 = 4 .
\end{aligned}
$$

::grafico{assi=0 uguale=1 poligoni="0,0 3,0 3,1 0,1;4,0 9,0 9,2 4,2" linee="0,0 3,0 3,1 0,1 0,0;1,0 1,1;2,0 2,1;4,0 9,0 9,2 4,2 4,0;5,0 5,2;6,0 6,2;7,0 7,2;8,0 8,2;4,1 9,1" etichette="0.9,-0.7,3;5.2,-0.7,5 · 2 = 10" xmin=-0.5 xmax=9.5 ymin=-1.3 ymax=2.6 titolo="The expression $3 + 5 \cdot 2$ counts $3$ small squares plus $5$ groups of $2$ small squares, or $3 + 10 = 13$ squares"}
:::

:::attenzione
Operations at the same level are performed from left to right, even if the second one looks more convenient. For example, $24 : 4 \cdot 2 = 6 \cdot 2 = 12$. Multiplying $4 \cdot 2 = 8$ first would give $24 : 8 = 3$, which is incorrect. Similarly, $10 - 4 + 3 = 6 + 3 = 9$, whereas adding first would give $10 - 7 = 3$.
:::

## Expressions with grouping symbols

:::teorema{#espressioni-con-parentesi titolo="Expressions with grouping symbols"}
**Grouping symbols** indicate which operations to perform first. There are three types: parentheses $(\ )$, square brackets $[\ ]$, and braces $\{\ \}$. Parentheses go inside square brackets, and square brackets go inside braces. An expression with grouping symbols is evaluated as follows:

1. evaluate the expressions inside the parentheses;
2. evaluate the expressions inside the square brackets, which by now contain no parentheses;
3. evaluate the expressions inside the braces;
4. evaluate the remaining expression.

Follow the order of operations within each of these expressions. Once an expression inside a pair of grouping symbols has been reduced to a single number, the symbols can be removed. For example, $(3 + 5) \cdot 2 = 8 \cdot 2 = 16$, whereas without parentheses $3 + 5 \cdot 2 = 13$, so the two expressions have different values.
:::

:::esempio{titolo="An expression with parentheses, square brackets, and braces"}
We evaluate
$$
\{ 30 - [ 2 \cdot (7 - 3) + 6 ] : 7 \} \cdot 2 .
$$
Begin with the expression inside the parentheses, $7 - 3 = 4$. In the expression $2 \cdot 4 + 6$, inside the square brackets, first find the product, $2 \cdot 4 = 8$, and then the sum, $8 + 6 = 14$. In the expression $30 - 14 : 7$, inside the braces, first find the quotient, $14 : 7 = 2$, and then the difference, $30 - 2 = 28$. Finally, multiply by $2$:
$$
\begin{aligned}
\{ 30 - [ 2 \cdot (7 - 3) + 6 ] : 7 \} \cdot 2
&= \{ 30 - [ 2 \cdot 4 + 6 ] : 7 \} \cdot 2 \\[6pt]
&= \{ 30 - 14 : 7 \} \cdot 2 \\[6pt]
&= \{ 30 - 2 \} \cdot 2 \\[6pt]
&= 28 \cdot 2 = 56 .
\end{aligned}
$$
:::

:::esempio{titolo="An expression for a purchase"}
At a supermarket, a shopper buys $3$ notebooks at $2$ euros each and $2$ pens at $1$ euro each and pays with a $20$-euro bill. The total cost is $3 \cdot 2 + 2 \cdot 1$ euros, and the change is the difference between $20$ euros and the total cost. Since the entire cost must be subtracted, the expression $3 \cdot 2 + 2 \cdot 1$ is enclosed in parentheses:
$$
20 - (3 \cdot 2 + 2 \cdot 1) = 20 - (6 + 2) = 20 - 8 = 12 .
$$
The change is therefore $12$ euros. Without parentheses the expression $20 - 3 \cdot 2 + 2 \cdot 1$ equals $20 - 6 + 2 = 16$ because the cost of the pens would be added instead of subtracted.
:::

:::osservazione{#proprieta-ed-espressioni titolo="Using the properties of operations to evaluate expressions"}
The properties of operations can sometimes simplify the evaluation of an expression, giving the same result as the order of operations. For example, in the expression $4 \cdot (25 + 3)$ we can first calculate $25 + 3 = 28$ and then $4 \cdot 28 = 112$, or we can apply the distributive property, $4 \cdot 25 + 4 \cdot 3 = 100 + 12 = 112$. In the expression $36 + 58 + 64$, the commutative and associative properties let us first add $36$ and $64$ to obtain $100$, and then calculate $100 + 58 = 158$.
:::
