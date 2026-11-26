---
titolo: Sequences and number patterns
sommario: Finding the rule for a sequence on an aptitude test using differences, ratios, interleaved terms, squares, cubes, or Fibonacci numbers. Finding the general term and sum of arithmetic and geometric sequences and solving letter sequences and missing-number tables.
---

## Sequences and their rules

:::definizione{#successione titolo="Sequence"}
A **sequence** is an ordered list of numbers called **terms**. Each term occupies a position. The first term is denoted by $a_1$, the second by $a_2$, and in general the term at position $n$ by $a_n$. In the sequence
$$
2,\ 5,\ 8,\ 11,\ 14,\ \dots
$$
we have $a_1 = 2$, $a_3 = 8$, and $a_5 = 14$. The dots mean that the list continues according to the same rule. On aptitude tests, such a list is often called a **number series**, and the question asks for the next term or a missing term somewhere in the list.
:::

:::definizione{#regola-di-formazione titolo="Rule for a sequence"}
The **rule** for a sequence is the operation that gives each term from the preceding terms or from its position $n$. The sequence $2, 5, 8, 11, \dots$ can be described in two ways.

- Each term is the previous one plus $3$, that is, $a_{n+1} = a_n + 3$ with $a_1 = 2$. This is called the **recursive form**.
- The term in position $n$ is $a_n = 3n - 1$. For example, $a_4 = 3 \cdot 4 - 1 = 11$. This expression is called the **general term**.

The recursive form gives the term following those already listed. The general term gives a term much farther along without listing the preceding ones, as in $a_{50} = 3 \cdot 50 - 1 = 149$.
:::

:::osservazione{#ordine-dei-controlli titolo="Finding the rule"}
The rules used in multiple-choice questions can be identified with a series of checks, starting with the simplest.

- If the terms increase or decrease at a regular pace, find the differences between consecutive terms.
- If the terms increase more and more rapidly, find their ratios or compare them with squares and cubes.
- If the terms rise and fall without a regular pattern, separate the terms in odd-numbered positions from those in even-numbered positions.
- If these checks do not reveal a rule, test whether each term is the sum of the two preceding ones or whether two operations alternate.

A rule is acceptable only if it holds for *all* the given terms. In the sequence $1, 2, 4, 7, 11$, the rule “each term is twice the previous one” works for the first three terms but not the fourth. The differences $1, 2, 3, 4$ give a rule that works for all the terms, and the next term is $11 + 5 = 16$.
:::

## Differences and ratios

:::definizione{#differenze titolo="Differences between consecutive terms"}
The **difference** between two consecutive terms is $a_{n+1} - a_n$, the amount added to one term to obtain the next. Write it below the pair of terms it refers to:
$$
\begin{array}{ccccccc}
7 & & 11 & & 15 & & 19 \\
& +4 & & +4 & & +4 &
\end{array}
$$
In the sequence $7, 11, 15, 19, \dots$ all the differences are $4$, so the next term is $19 + 4 = 23$. In the sequence $50, 43, 36, 29, \dots$ all the differences are $-7$, so the next term is $29 - 7 = 22$.
:::

:::teorema{#differenze-seconde titolo="Differences of differences"}
When the differences are not all equal, find their differences in turn. These are called **second differences**. Write them in a third row. If the second differences are constant, extend the sequence by working up from the last row. For the sequence $2, 5, 10, 17, 26, \dots$ this gives
$$
\begin{array}{ccccccccc}
2 & & 5 & & 10 & & 17 & & 26 \\
& 3 & & 5 & & 7 & & 9 & \\
& & 2 & & 2 & & 2 & &
\end{array}
$$
The next difference is therefore $9 + 2 = 11$, and the next term is $26 + 11 = 37$. This works because each term is the previous term plus the corresponding difference, and each difference is the previous difference plus $2$. As a check, the terms are the numbers $n^2 + 1$, and indeed $6^2 + 1 = 37$.

::grafico{f="x^2+1" punti="1,2,pieno;2,5,pieno;3,10,pieno;4,17,pieno;5,26,pieno;6,37,vuoto" xmin=-1 xmax=7 ymin=-5 ymax=40 nomi="n,aₙ" titolo="The terms $2, 5, 10, 17, 26$ and the next term $37$ (open circle) lie on the curve $y = x^2 + 1$"}

:::

:::esempio{titolo="Differences that follow a different rule"}
The differences can form another type of sequence. In the sequence $3, 4, 6, 10, 18, \dots$, the differences are $1, 2, 4, 8$, each twice the preceding difference. The next difference is therefore $16$, and the next term is $18 + 16 = 34$.
:::

:::definizione{#rapporti titolo="Ratios of consecutive terms"}
If the preceding term is nonzero, the **ratio** of two consecutive terms is $\dfrac{a_{n+1}}{a_n}$, the number by which one term is multiplied to obtain the next. If the ratios are all equal, each term is the preceding term multiplied by the same number. In the sequence $3, 6, 12, 24, \dots$ each term is twice the preceding one, so the next term is $48$. In the sequence $400, 200, 100, 50, \dots$ the ratio is $\dfrac{1}{2}$, so the next term is $25$. The differences in these sequences are not constant because each is twice or half the preceding difference. The ratios therefore reveal the rule.

::grafico{f="400*(1/2)^(x-1)" punti="1,400,pieno;2,200,pieno;3,100,pieno;4,50,pieno;5,25,vuoto" xmin=-1 xmax=6 ymin=-50 ymax=450 nomi="n,aₙ" titolo="With a ratio of $\dfrac{1}{2}$, each term is half the preceding one. The graph shows $400, 200, 100, 50$ and the next term $25$ (open circle)"}

:::

## Mixed operations and interleaved sequences

:::definizione{#operazioni-miste titolo="Sequences with mixed operations"}
In a sequence with **mixed operations**, two operations are used to generate the terms from their predecessors. The operations are either applied together in the same order each time or used alternately.

- In the sequence $2, 5, 11, 23, 47, \dots$, each term is twice the preceding term plus $1$, since $2 \cdot 2 + 1 = 5$, $5 \cdot 2 + 1 = 11$, and $11 \cdot 2 + 1 = 23$. The next term is $47 \cdot 2 + 1 = 95$.
- In the sequence $4, 8, 5, 10, 7, 14, \dots$, the operations “multiply by $2$” and “subtract $3$” alternate. The term $14$ is obtained by multiplication, so the next term is obtained by subtraction and equals $14 - 3 = 11$.

In the first sequence the ratios of consecutive terms are approximately $2.5$, $2.2$, $2.09$, and $2.04$. They are therefore close to $2$ without equaling $2$. This pattern suggests multiplication by $2$ followed by addition.
:::

:::definizione{#successioni-intrecciate titolo="Alternating or interleaved sequences"}
A sequence is **interleaved** when the odd-position terms $a_1, a_3, a_5, \dots$ and the even-position terms $a_2, a_4, a_6, \dots$ form two distinct sequences, each with its own rule. A clue is that the terms rise and fall without a regular pattern. In the sequence
$$
3,\ 20,\ 6,\ 17,\ 9,\ 14,\ 12,\ \dots
$$
the odd-position terms are $3, 6, 9, 12$ and increase by $3$, while the even-position terms are $20, 17, 14$ and decrease by $3$. The next term is in eighth position, an even position, so it continues the second sequence and equals $14 - 3 = 11$.

::grafico{punti="1,3,pieno;3,6,pieno;5,9,pieno;7,12,pieno;2,20,pieno;4,17,pieno;6,14,pieno;8,11,vuoto" linee="1,3 3,6 5,9 7,12;2,20 4,17 6,14 8,11" xmin=-1 xmax=9 ymin=-2 ymax=22 nomi="n,aₙ" titolo="In the sequence $3, 20, 6, 17, 9, 14, 12$, the odd-position terms increase by $3$ and the even-position terms decrease by $3$. The eighth term, $14 - 3 = 11$, is the open circle"}

:::

:::osservazione{#segni-alterni titolo="Sequences with alternating signs"}
A sequence has **alternating signs** when its terms are alternately positive and negative, as in $1, -2, 4, -8, 16, \dots$. Here each term is the preceding term multiplied by $-2$, so the next term is $16 \cdot (-2) = -32$. A negative ratio always produces a sign change at each step, because multiplying a number by a negative number reverses its sign.
:::

## Squares, cubes, and the Fibonacci sequence

:::definizione{#quadrati-e-cubi titolo="Squares and cubes"}
The **perfect squares** are the numbers $n^2$ and the **perfect cubes** are the numbers $n^3$, where $n$ is a natural number. The first few are
$$
\begin{aligned}
&n^2 :\quad 1,\ 4,\ 9,\ 16,\ 25,\ 36,\ 49,\ 64,\ 81,\ 100,\ \dots \\[6pt]
&n^3 :\quad 1,\ 8,\ 27,\ 64,\ 125,\ 216,\ 343,\ \dots
\end{aligned}
$$
Many sequences on aptitude tests are small variations on these numbers. In the sequence $0, 3, 8, 15, 24, \dots$ each term is a square minus $1$, that is, $a_n = n^2 - 1$, and the next term is $36 - 1 = 35$. In the sequence $2, 9, 28, 65, \dots$ each term is a cube plus $1$, that is, $a_n = n^3 + 1$, and the next term is $125 + 1 = 126$. Knowing the first few squares and cubes by heart makes these rules recognizable without calculating differences.
:::

:::osservazione{#quadrati-e-dispari titolo="Differences between consecutive squares"}
The differences between consecutive squares are the odd numbers $3, 5, 7, 9, \dots$ because $(n + 1)^2 - n^2 = 2n + 1$. The figure shows why. To go from a square of side $n$ to one of side $n + 1$, add an L-shaped layer made up of $n$ points vertically, $n$ horizontally, and one at the corner, for a total of $2n + 1$ points. Consequently the sequence of squares has constant second differences equal to $2$.

::grafico{assi=0 uguale=1 xmin=0 xmax=5.4 ymin=0 ymax=5.4 punti="1,1,pieno,1;2,2,pieno,3;3,3,pieno,5;4,4,pieno,7;1,2;1,3;1,4;2,1;2,3;2,4;3,1;3,2;3,4;4,1;4,2;4,3" linee="1.5,0.5 1.5,1.5 0.5,1.5;2.5,0.5 2.5,2.5 0.5,2.5;3.5,0.5 3.5,3.5 0.5,3.5;0.5,0.5 4.5,0.5 4.5,4.5 0.5,4.5 0.5,0.5" titolo="The $16$ points of a square of side $4$ are divided into L-shaped layers of $1$, $3$, $5$, and $7$ points. The number of points in each layer is shown next to its corner, and $1 + 3 + 5 + 7 = 4^2$"}

:::

:::definizione{#fibonacci titolo="Fibonacci sequence"}
In the **Fibonacci sequence**, the first two terms equal $1$ and each subsequent term is the sum of the two preceding ones:
$$
a_1 = a_2 = 1,
\qquad
a_{n+2} = a_{n+1} + a_n .
$$
The first terms are $1, 1, 2, 3, 5, 8, 13, 21, 34, 55, \dots$, since $2 = 1 + 1$, $3 = 1 + 2$, and $5 = 2 + 3$. On aptitude tests the same rule can be applied starting from any two numbers. In the sequence $2, 5, 7, 12, 19, 31, \dots$ each term is the sum of the two preceding ones, so the next term is $19 + 31 = 50$. The differences reveal this type of sequence because, starting with the second entry in the list of first differences, they match terms of the original sequence. For $2, 5, 7, 12, 19, 31$, the differences are indeed $3, 2, 5, 7, 12$.

::grafico{punti="1,1,pieno;2,1,pieno;3,2,pieno;4,3,pieno;5,5,pieno;6,8,pieno;7,13,pieno;8,21,pieno" segmenti="1,0,1,1;2,0,2,1;3,0,3,2;4,0,4,3;5,0,5,5;6,0,6,8;7,0,7,13;8,0,8,21" xmin=-1 xmax=10 ymin=-3 ymax=24 nomi="n,aₙ" titolo="The first eight terms of the Fibonacci sequence. Each height is the sum of the two preceding heights, as in $8 = 3 + 5$ and $13 = 5 + 8$"}

:::

## Arithmetic sequences

:::definizione{#progressione-aritmetica titolo="Arithmetic sequence"}
An **arithmetic sequence** is a sequence in which the difference between each term and the preceding term is always the same number $d$, called the **common difference**. To reach the term at position $n$, start at $a_1$ and add $d$ a total of $n - 1$ times, so the **general term** is
$$
a_n = a_1 + (n - 1)\, d .
$$
In the sequence $5, 9, 13, 17, \dots$, we have $a_1 = 5$ and $d = 4$, so $a_{30} = 5 + 29 \cdot 4 = 121$. The factor $n - 1$ counts the steps from one term to the next. There is one step from the first term to the second, and $29$ from the first term to the thirtieth.

::grafico{f="4*x+1+0*sqrt(x)" punti="1,5,pieno;2,9,pieno;3,13,pieno;4,17,pieno;5,21,pieno" segmenti="1,5,2,5;2,5,2,9" xmin=-1 xmax=7 ymin=-3 ymax=27 nomi="n,aₙ" legenda="a_n = 4n + 1" titolo="The terms of the sequence $5, 9, 13, 17, 21$ lie on a straight line. For each step of $1$ to the right, the term increases by $d = 4$"}

:::

:::esempio{#ragione-da-due-termini titolo="Finding the common difference from two terms"}
If two terms of an arithmetic sequence are known, the common difference is their difference divided by the number of steps between their positions. If $a_3 = 11$ and $a_8 = 26$, there are $8 - 3 = 5$ steps from the third term to the eighth, so
$$
d = \frac{26 - 11}{5} = 3,
\qquad
a_1 = a_3 - 2d = 11 - 6 = 5 .
$$
Given the common difference and the first term, any other term can be calculated, as in $a_{20} = 5 + 19 \cdot 3 = 62$.
:::

::::teorema{#somma-aritmetica titolo="Sum of the terms of an arithmetic sequence"}
The sum of the first $n$ terms of an arithmetic sequence is
$$
S_n = \frac{(a_1 + a_n) \cdot n}{2},
$$
that is, the number of terms times the average of the first and last. If the common difference is nonzero, the number of terms can be found from the general term as $n = \dfrac{a_n - a_1}{d} + 1$. In a constant sequence, the first and last values alone do not determine how many terms there are. The odd numbers from $1$ to $49$ therefore number $\dfrac{48}{2} + 1 = 25$, and their sum is
$$
S_{25} = \frac{(1 + 49) \cdot 25}{2} = 625 .
$$

:::dimostrazione
Write the sum twice, the second time in reverse order, and add the terms in each column. The first term plus the last, the second plus the next-to-last, and so on always give $a_1 + a_n$. This is because from one column to the next the first addend increases by $d$ and the second decreases by $d$. There are $n$ columns, so $2 S_n = (a_1 + a_n) \cdot n$.
:::
::::

:::teorema{#somma-primi-naturali titolo="Sum of the first natural numbers"}
The sum of the natural numbers from $1$ to $n$ is
$$
1 + 2 + 3 + \dots + n = \frac{n\,(n + 1)}{2} .
$$
This is the sum of the arithmetic sequence with $a_1 = 1$ and $a_n = n$. The figure shows why for $n = 5$. Two identical staircases of $1 + 2 + 3 + 4 + 5$ small squares, one shaded and the other turned upside down, form a rectangle of $5 \cdot 6 = 30$ small squares, so one staircase contains $15$. Similarly, the sum of the numbers from $1$ through $100$ equals $\dfrac{100 \cdot 101}{2} = 5050$.

::grafico{assi=0 uguale=1 xmin=-0.5 xmax=5.5 ymin=-0.5 ymax=6.5 poligoni="0,0 5,0 5,5 4,5 4,4 3,4 3,3 2,3 2,2 1,2 1,1 0,1" linee="0,0 5,0 5,6 0,6 0,0;1,0 1,6;2,0 2,6;3,0 3,6;4,0 4,6;0,1 5,1;0,2 5,2;0,3 5,3;0,4 5,4;0,5 5,5" titolo="The shaded staircase contains $1 + 2 + 3 + 4 + 5$ small squares. Together with its upside-down copy, it forms a rectangle of $5 \cdot 6 = 30$ small squares, so $1 + 2 + 3 + 4 + 5 = \dfrac{5 \cdot 6}{2} = 15$"}

:::

:::esempio{titolo="Seats in a theater"}
A theater has $20$ rows. The first row has $12$ seats, and each row has $2$ more seats than the one before it. The numbers of seats therefore form an arithmetic sequence with $a_1 = 12$ and $d = 2$. The last row has $a_{20} = 12 + 19 \cdot 2 = 50$ seats, and the total number of seats is
$$
S_{20} = \frac{(12 + 50) \cdot 20}{2} = 620 .
$$
:::

## Geometric sequences

:::definizione{#progressione-geometrica titolo="Geometric sequence"}
A **geometric sequence** is a sequence of nonzero numbers in which the ratio of each term to its predecessor is always the same number $q$, called the **common ratio**. To reach the term at position $n$, multiply $a_1$ by $q$ a total of $n - 1$ times, so the general term is
$$
a_n = a_1 \cdot q^{\,n - 1} .
$$
In the sequence $3, 6, 12, 24, \dots$, we have $a_1 = 3$ and $q = 2$, so $a_8 = 3 \cdot 2^7 = 3 \cdot 128 = 384$. If $a_1 > 0$ and $q > 1$, the terms increase more and more rapidly, as the figure shows. If $a_1 > 0$ and $0 < q < 1$, the terms decrease and approach zero.

::grafico{f="3*2^(x-1)+0*sqrt(x)" punti="1,3,pieno;2,6,pieno;3,12,pieno;4,24,pieno;5,48,pieno" xmin=-1 xmax=6 ymin=-6 ymax=54 nomi="n,aₙ" legenda="a_n = 3 \cdot 2^{n-1}" titolo="The terms of the sequence $3, 6, 12, 24, 48$ with common ratio $q = 2$. Each term is twice the preceding one, so the increases become larger and larger"}

:::

:::attenzione
The exponent in the general term is $n - 1$, *not* $n$. In the sequence $3, 6, 12, 24, \dots$, we have $a_4 = 3 \cdot 2^3 = 24$, whereas $3 \cdot 2^4 = 48$ is the fifth term. The exponent $n$ gives the term after the one requested, and that value often appears among the wrong answers.
:::

:::teorema{#somma-geometrica titolo="Sum of the terms of a geometric sequence"}
If $q \neq 1$, the sum of the first $n$ terms of a geometric sequence is
$$
S_n = a_1 \cdot \frac{q^{\,n} - 1}{q - 1} .
$$
To obtain the formula, compare $S_n$ with $q\,S_n$. The sums have every term in common except $a_1$, which appears only in $S_n$, and $a_1 q^{\,n}$, which appears only in $q\,S_n$. Therefore $q\,S_n - S_n = a_1 q^{\,n} - a_1$. Dividing by $q - 1$ gives the formula. For the sum $3 + 6 + 12 + 24 + 48$, we have $a_1 = 3$, $q = 2$, and $n = 5$, so
$$
S_5 = 3 \cdot \frac{2^5 - 1}{2 - 1} = 3 \cdot 31 = 93 .
$$
If $q = 1$, all the terms equal $a_1$ and the sum equals $n \cdot a_1$.
:::

:::esempio{titolo="Forwarding a notice"}
On the first day, a notice reaches $4$ employees at a company. Each day after that, everyone who received it the day before forwards it to $3$ coworkers who have not yet received it. The numbers of new recipients each day form a geometric sequence with $a_1 = 4$ and $q = 3$, namely $4, 12, 36, 108$. After four days the notice has reached a total of
$$
S_4 = 4 \cdot \frac{3^4 - 1}{3 - 1} = 4 \cdot \frac{80}{2} = 160 \text{ employees} .
$$
:::

## Letter and number sequences

:::definizione{#posizione-delle-lettere titolo="Positions of letters in the alphabet"}
In letter sequences, replace each letter with its position in the alphabet to obtain a sequence of numbers. The question specifies which alphabet to use.

- The **Italian alphabet** has $21$ letters, in the positions shown in the table.
- The **English alphabet** has $26$ letters because it also includes J, K, W, X, and Y. Its positions match the Italian alphabet through I, the ninth letter. Next come J at $= 10$, K at $= 11$, and L at $= 12$, with Z in position $26$.

$$
\begin{array}{ccccccc}
\text{A} & \text{B} & \text{C} & \text{D} & \text{E} & \text{F} & \text{G} \\
1 & 2 & 3 & 4 & 5 & 6 & 7 \\[8pt]
\text{H} & \text{I} & \text{L} & \text{M} & \text{N} & \text{O} & \text{P} \\
8 & 9 & 10 & 11 & 12 & 13 & 14 \\[8pt]
\text{Q} & \text{R} & \text{S} & \text{T} & \text{U} & \text{V} & \text{Z} \\
15 & 16 & 17 & 18 & 19 & 20 & 21
\end{array}
$$

After the last letter, start again with the first. In the Italian alphabet, the letter three places after U is therefore A, because U is followed by V, then Z, and then A again.
:::

:::esempio{#serie-di-lettere titolo="Letter sequences"}
In the Italian alphabet, the sequence B, E, H, M, … corresponds to the numbers $2, 5, 8, 11$, which increase by $3$. The next term is $14$, so the next letter is P.

The choice of alphabet changes the answer. The sequence C, F, I, … corresponds to the numbers $3, 6, 9$ in both alphabets, and the next term is $12$. In the Italian alphabet, N is in position $12$. In the English alphabet, L is in that position.
:::

:::definizione{#serie-alfanumeriche titolo="Mixed letter and number sequences"}
In a **mixed sequence**, each element consists of a letter and a number, or letters and numbers alternate. The two parts usually follow separate rules, which can be identified one at a time. Using the Italian alphabet, in the sequence
$$
\text{A}2,\ \ \text{C}4,\ \ \text{E}8,\ \ \text{G}16,\ \dots
$$
the letters advance two places and the numbers double. Thus the next letter after G in the sequence is I, and the next number is $32$, giving I32 as the next element. In other sequences the number depends on the letter, as in A1, C3, E5, where the number is the letter’s position.
:::

## Missing numbers in tables and figures

:::definizione{#tabelle-numeriche titolo="Missing-number tables"}
In a **missing-number table**, the numbers in each row or column follow the same rule. Find the missing number by applying the rule to its row or column. Infer the rule from a complete row and check it on the other complete rows. In the table
$$
\begin{array}{|c|c|c|}
\hline
3 & 5 & 16 \\ \hline
4 & 2 & 9 \\ \hline
7 & 2 & ? \\ \hline
\end{array}
$$
the third number in each row is the product of the first two plus $1$, since $3 \cdot 5 + 1 = 16$ and $4 \cdot 2 + 1 = 9$. The missing number is therefore $7 \cdot 2 + 1 = 15$. Rules for tables on aptitude tests usually combine sums, products, and differences of the numbers in a row. If the rows reveal no rule, look at the columns.
:::

:::definizione{#figure-numeriche titolo="Missing-number figures"}
In **missing-number figures**, numbers appear at the vertices or in the sectors of a figure. One number, usually at the center, is obtained from the others by a rule that holds for all figures in the sequence. In the figure, the center number of each triangle is the sum of the two numbers at the base multiplied by the number at the top. In the first triangle $(2 + 4) \cdot 3 = 18$ and in the second $(5 + 1) \cdot 2 = 12$, so the missing number in the third triangle is $(3 + 6) \cdot 4 = 36$.

::grafico{assi=0 uguale=1 xmin=-1 xmax=15 ymin=-1 ymax=4 linee="0,0 4,0 2,3 0,0;5,0 9,0 7,3 5,0;10,0 14,0 12,3 10,0" etichette="1.85,3.25,3;-0.45,-0.55,2;3.95,-0.55,4;1.65,0.9,18;6.85,3.25,2;4.55,-0.55,5;8.95,-0.55,1;6.65,0.9,12;11.85,3.25,4;9.55,-0.55,3;13.95,-0.55,6;11.85,0.9,?" titolo="In each triangle, add the two numbers at the base and multiply by the number at the top to obtain the center number, so $(3 + 6) \cdot 4 = 36$ replaces the question mark"}

:::

## Quick methods for multiple-choice questions

:::osservazione{#metodi-rapidi titolo="Recognizing the rule quickly"}
Three observations help identify the rule more quickly on timed tests.

- **Pattern of the terms**: If the terms increase by similar amounts, the rule is almost always addition, so examine the differences. If they increase by ever larger amounts, look at ratios, squares, and cubes.
- **Testing the choices**: Place each choice at the end of the sequence and check which one gives a pattern in the differences or ratios. For the sequence $2, 6, 12, 20, \dots$ with choices $28$ and $30$, the differences become $4, 6, 8, 8$ or $4, 6, 8, 10$, so the answer is $30$.
- **Interleaved sequences**: If the terms rise and fall, separate the even-position terms from the odd-position terms before calculating any differences.
:::

:::osservazione{#calcoli-rapidi titolo="Quick calculations with sequences"}
A few observations shorten calculations with arithmetic and geometric sequences and help identify errors when counting terms.

- **Number of terms**: The number of integers from $15$ through $40$ is $40 - 15 + 1 = 26$ because both endpoints count. The value $25$, which leaves out one endpoint, often appears among the choices.
- **Sum with common ratio $2$**: In a geometric sequence with $q = 2$, the sum of the first several terms equals twice the last term minus the first, because $a_1 \cdot (2^n - 1) = 2 \cdot a_1 2^{\,n-1} - a_1$. Indeed, $3 + 6 + 12 + 24 + 48 = 2 \cdot 48 - 3 = 93$.
- **Sum of the first odd numbers**: The sum of the first $n$ odd numbers is $n^2$ because the arithmetic sequence sum formula gives $\dfrac{(1 + 2n - 1) \cdot n}{2} = n^2$. The sum $1 + 3 + 5 + \dots + 49$ contains $25$ terms, so it equals $25^2 = 625$.
:::
