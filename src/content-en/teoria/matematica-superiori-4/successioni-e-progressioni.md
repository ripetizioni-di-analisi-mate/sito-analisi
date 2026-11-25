---
titolo: Sequences and progressions
sommario: What a numerical sequence is and how to specify it by a formula for its general term or by a recurrence, when a sequence is monotone or bounded, how the principle of induction works, and which formulas give the general term, sums, and products in arithmetic and geometric progressions. Applications cover interest, installment payments, and geometry, and lead to the sum of an infinite geometric progression whose common ratio has absolute value less than 1.
---

## Numerical sequences

:::definizione{#successione titolo="Numerical sequence"}
A numerical **sequence** is a rule that assigns a real number to each natural number $n$ from a given starting index onward. We denote that real number by $a_n$. The number $n$ is called the *index* and gives the position. The number $a_n$ is called the **term** in position $n$, or the $n$-th term, and is the value in that position. The sequence is denoted by $(a_n)$ or by listing the terms in order, $a_1, a_2, a_3, \ldots$ In this chapter the index starts at $1$ unless a problem specifies otherwise.

A sequence is therefore a function whose domain is the natural numbers. For example, the sequence of odd numbers assigns to $1$ the number $1$, to $2$ the number $3$, to $3$ the number $5$, and so on. The term in position $10$ is $19$.
:::

:::definizione{#termine-generale titolo="General term"}
A sequence is specified by its **general term** when a formula gives $a_n$ as a function of $n$. With this formula, each term is found directly by replacing $n$ with the position of the term, without having to know any preceding terms.

For the sequence of odd numbers, the general term is $a_n = 2n - 1$, and the term in position $50$ is $a_{50} = 2 \cdot 50 - 1 = 99$. For $a_n = \dfrac{n}{n + 1}$, the first terms are
$$
a_1 = \frac{1}{2}, \qquad a_2 = \frac{2}{3}, \qquad a_3 = \frac{3}{4}, \qquad a_4 = \frac{4}{5} ,
$$
and the term in position $99$ is $a_{99} = \dfrac{99}{100}$.
:::

:::definizione{#successione-ricorsiva titolo="A recursively defined sequence"}
A sequence is defined **by a recurrence**, or recursively, when its first term or first few terms are specified together with a rule for finding each subsequent term from the preceding ones. To find $a_{10}$, we must calculate all the terms from $a_1$ to $a_9$ in order.

For example, the sequence
$$
\begin{cases}
a_1 = 3 \\[4pt]
a_{n+1} = 2a_n - 1
\end{cases}
$$
has terms $a_2 = 2 \cdot 3 - 1 = 5$, $a_3 = 2 \cdot 5 - 1 = 9$, and $a_4 = 2 \cdot 9 - 1 = 17$. Both conditions in the system are needed because the rule alone does not specify the starting number. In this case, each term is $1$ more than a power of $2$, giving the general term $a_n = 2^n + 1$. The principle of induction verifies it for every $n$.
:::

:::esempio{titolo="The Fibonacci sequence"}
The **Fibonacci** sequence is defined by specifying the first two terms and a rule that uses the two preceding terms:
$$
\begin{cases}
F_1 = 1 \\[4pt]
F_2 = 1 \\[4pt]
F_{n+2} = F_{n+1} + F_n
\end{cases}
$$
Each term is therefore the sum of the two preceding terms. The first terms are $1, 1, 2, 3, 5, 8, 13, 21, 34$. For example, $F_7 = F_6 + F_5 = 8 + 5 = 13$. There is a formula for the general term that contains $\sqrt{5}$ and is studied in college. The terms are calculated more quickly using the recurrence.
:::

:::definizione{#grafico-successione titolo="Graphing a sequence"}
The **graph** of a sequence is the set of points in the Cartesian plane with coordinates $(n, a_n)$. The indices are natural numbers, so the graph consists of isolated points, one at each integer horizontal coordinate, and the points are *not* joined by a line. The graph shows at a glance whether the terms increase, decrease, or oscillate and whether they approach a value.

For $a_n = \dfrac{n}{n + 1}$, the points are $\left( 1, \dfrac{1}{2} \right)$, $\left( 2, \dfrac{2}{3} \right)$, $\left( 3, \dfrac{3}{4} \right)$, and so on. The terms increase and stay below $1$ because the numerator is always smaller than the denominator.

::grafico{punti="1,0.5,pieno;2,0.6667,pieno;3,0.75,pieno;4,0.8,pieno;5,0.8333,pieno;6,0.8571,pieno;7,0.875,pieno;8,0.8889,pieno;9,0.9,pieno" asintoti="y=1" xmin=0 xmax=10 ymin=0 ymax=1.3 nomi="n,a" titolo="The first nine terms of $a_n = \dfrac{n}{n + 1}$: the points are isolated, rise from left to right, and stay below the line $y = 1$"}

:::

## Monotone and bounded sequences

:::definizione{#successione-monotona titolo="Monotone sequence"}
A sequence $(a_n)$ is called

- **nondecreasing** if $a_{n+1} \geq a_n$ for every $n$, and *strictly* increasing if $a_{n+1} > a_n$ for every $n$;
- **nonincreasing** if $a_{n+1} \leq a_n$ for every $n$, and *strictly* decreasing if $a_{n+1} < a_n$ for every $n$;
- **constant** if $a_{n+1} = a_n$ for every $n$.

A nondecreasing or nonincreasing sequence is called **monotone**. To determine whether a sequence is monotone, examine the sign of the difference $a_{n+1} - a_n$ between each term and the preceding one. For $a_n = \dfrac{n}{n + 1}$ we have
$$
a_{n+1} - a_n = \frac{n + 1}{n + 2} - \frac{n}{n + 1} = \frac{(n + 1)^2 - n(n + 2)}{(n + 1)(n + 2)} = \frac{1}{(n + 1)(n + 2)} .
$$
The numerator is $1$ and the denominator is positive, so the difference is positive for every $n$ and the sequence is **strictly increasing**.
:::

:::definizione{#successione-limitata titolo="Bounded sequence"}
A sequence $(a_n)$ is **bounded above** if there exists a number $M$ such that $a_n \leq M$ for every $n$, and **bounded below** if there exists a number $m$ such that $a_n \geq m$ for every $n$. It is **bounded** if it is bounded both above and below, that is, if all its terms lie in an interval $[m, M]$.

For example, the sequence $a_n = \dfrac{2n + 3}{n + 1}$ can be written as $a_n = 2 + \dfrac{1}{n + 1}$ by dividing the numerator by the denominator. The fraction $\dfrac{1}{n + 1}$ is positive and is at most $\dfrac{1}{2}$, a value attained when $n = 1$. Thus $2 < a_n \leq \dfrac{5}{2}$ for every $n$, and the sequence is bounded. The sequence $a_n = n^2$ is bounded below by $1$ and is not bounded above because it exceeds any prescribed number. For example, $a_n > 10^6$ for every $n > 1000$.
:::

:::esempio{titolo="A bounded sequence that is not monotone"}
The sequence $a_n = \dfrac{(-1)^n}{n}$ has terms
$$
-1, \quad \frac{1}{2}, \quad -\frac{1}{3}, \quad \frac{1}{4}, \quad -\frac{1}{5}, \quad \ldots
$$
The terms with odd indices are negative and those with even indices are positive, so the difference $a_{n+1} - a_n$ changes sign at each step and the sequence is *not* monotone. The absolute value of each term is $\dfrac{1}{n} \leq 1$. Moreover, the largest positive term is $a_2 = \dfrac{1}{2}$ and the smallest negative term is $a_1 = -1$. Thus $-1 \leq a_n \leq \dfrac{1}{2}$ for every $n$, and the sequence is **bounded**.

::grafico{punti="1,-1,pieno;2,0.5,pieno;3,-0.3333,pieno;4,0.25,pieno;5,-0.2,pieno;6,0.1667,pieno;7,-0.1429,pieno;8,0.125,pieno;9,-0.1111,pieno" segmenti="0,0.5,10,0.5;0,-1,10,-1" xmin=0 xmax=10 ymin=-1.3 ymax=1 nomi="n,a" titolo="The terms of $a_n = \dfrac{(-1)^n}{n}$ change sign at each step and stay between $-1$ and $\dfrac{1}{2}$"}

:::

:::osservazione{#monotonia-definitiva titolo="Sequences that are monotone from some index onward"}
The sign of $a_{n+1} - a_n$ may change for the first few indices and then remain constant. We then say that the sequence is monotone *from some index onward*, or **eventually** monotone. For $a_n = n^2 - 6n$ we have
$$
a_{n+1} - a_n = (n + 1)^2 - 6(n + 1) - n^2 + 6n = 2n - 5 ,
$$
which is negative for $n = 1$ and $n = 2$ and positive for $n \geq 3$. Indeed, the terms are $-5, -8, -9, -8, -5, 0, 7, \ldots$, so the sequence decreases up to $a_3 = -9$ and then increases. The term $a_3 = -9$ is the **minimum** of the sequence, so the sequence is bounded below by $-9$. When studying what happens for large $n$, as in the fifth-year chapter on limits, the values of the first few terms do not matter.
:::

## The principle of induction

:::teorema{#principio-induzione titolo="The principle of induction"}
Let $P(n)$ be a statement that depends on the natural number $n$. If the following two conditions hold:

- **base case**: $P(1)$ is true;
- **inductive step**: for every $n \geq 1$, if $P(n)$ is true, then $P(n + 1)$ is also true;

then $P(n)$ is true for *every* $n \geq 1$. If the base case uses another index $n_0$, the conclusion holds for every $n \geq n_0$.

The idea is that of a row of dominoes. The first falls by the base case. Each domino that falls knocks down the next by the inductive step. Therefore they all fall. The principle is a property of the natural numbers assumed as an axiom. It lets us prove formulas involving $n$ without checking infinitely many cases. In the inductive step, the statement $P(n)$ is called the **inductive hypothesis** and is used to derive $P(n + 1)$.
:::

::::teorema{#somma-primi-naturali titolo="Sum of the first n natural numbers"}
For every $n \geq 1$ we have
$$
1 + 2 + 3 + \dots + n = \frac{n(n + 1)}{2} .
$$
For example, the sum of the numbers from $1$ to $100$ is $\dfrac{100 \cdot 101}{2} = 5050$, and the sum of the numbers from $1$ to $10$ is $\dfrac{10 \cdot 11}{2} = 55$.

:::dimostrazione
We prove the formula by induction on $n$.

*Base case.* For $n = 1$, the left-hand side is $1$ and the right-hand side is $\dfrac{1 \cdot 2}{2} = 1$, so the formula holds.

*Inductive step.* Suppose the formula holds for some $n$, that is, $1 + 2 + \dots + n = \dfrac{n(n + 1)}{2}$. The sum up to $n + 1$ is obtained by adding $n + 1$ to the sum up to $n$, so by the inductive hypothesis,
$$
\begin{aligned}
1 + 2 + \dots + n + (n + 1) &= \frac{n(n + 1)}{2} + (n + 1) \\[6pt]
&= \frac{n(n + 1) + 2(n + 1)}{2} \\[6pt]
&= \frac{(n + 1)(n + 2)}{2} .
\end{aligned}
$$
The last expression is the formula with $n + 1$ in place of $n$, so the formula also holds for $n + 1$. By the principle of induction, the formula holds for every $n \geq 1$.
:::
::::

::::teorema{#somma-quadrati titolo="Sum of the squares of the first n natural numbers"}
For every $n \geq 1$ we have
$$
1^2 + 2^2 + 3^2 + \dots + n^2 = \frac{n(n + 1)(2n + 1)}{6} .
$$
For example, $1 + 4 + 9 + 16 = 30$, and the formula with $n = 4$ gives $\dfrac{4 \cdot 5 \cdot 9}{6} = 30$. The sum of the squares from $1$ to $10$ is $\dfrac{10 \cdot 11 \cdot 21}{6} = 385$.

:::dimostrazione
We proceed by induction on $n$. For $n = 1$, the left-hand side is $1$ and the right-hand side is $\dfrac{1 \cdot 2 \cdot 3}{6} = 1$, so the base case holds.

Suppose the formula holds for $n$. Add $(n + 1)^2$ to both sides of the inductive hypothesis and factor out $n + 1$ to obtain
$$
\begin{aligned}
1^2 + \dots + n^2 + (n + 1)^2 &= \frac{n(n + 1)(2n + 1)}{6} + (n + 1)^2 \\[6pt]
&= \frac{(n + 1)\big( n(2n + 1) + 6(n + 1) \big)}{6} \\[6pt]
&= \frac{(n + 1)\left( 2n^2 + 7n + 6 \right)}{6} .
\end{aligned}
$$
The trinomial $2n^2 + 7n + 6$ factors as $(n + 2)(2n + 3)$, as can be checked by multiplying. Thus the sum is $\dfrac{(n + 1)(n + 2)(2n + 3)}{6}$, which is the formula with $n + 1$ in place of $n$ because $2(n + 1) + 1 = 2n + 3$. By the principle of induction, the formula holds for every $n \geq 1$.
:::
::::

::::teorema{#disuguaglianza-bernoulli titolo="Bernoulli's inequality"}
Let $x$ be a real number with $x \geq -1$. For every $n \geq 1$ we have
$$
(1 + x)^n \geq 1 + nx .
$$
The inequality gives a lower bound for powers. For example, with $x = 0.1$ and $n = 10$, it gives $1.1^{10} \geq 1 + 10 \cdot 0.1 = 2$. The exact value is about $2.59$. We will use this bound to study the powers $q^n$ as $n$ becomes large.

:::dimostrazione
We proceed by induction on $n$. For $n = 1$, both sides equal $1 + x$, so the inequality holds.

Suppose that $(1 + x)^n \geq 1 + nx$. The idea is to multiply both sides by $1 + x$. Since $x \geq -1$, the number $1 + x$ is greater than or equal to $0$, so multiplication preserves the direction of the inequality:
$$
\begin{aligned}
(1 + x)^{n+1} &\geq (1 + nx)(1 + x) \\[6pt]
&= 1 + x + nx + nx^2 \\[6pt]
&= 1 + (n + 1)x + nx^2 .
\end{aligned}
$$
The term $nx^2$ is greater than or equal to $0$, so the last expression is greater than or equal to $1 + (n + 1)x$. Thus $(1 + x)^{n+1} \geq 1 + (n + 1)x$, which is the inequality for $n + 1$. By the principle of induction, the inequality holds for every $n \geq 1$.
:::
::::

:::attenzione
The inductive step alone is *not* sufficient. The statement “$n^2 + n + 1$ is an even number” satisfies the inductive step because
$$
(n + 1)^2 + (n + 1) + 1 = \left( n^2 + n + 1 \right) + 2(n + 1) ,
$$
and the sum of an even number and $2(n + 1)$ is even. The base case, however, does not hold because for $n = 1$ we obtain $3$, which is odd. In fact, $n^2 + n + 1 = n(n + 1) + 1$ is always odd, since $n(n + 1)$ is the product of two consecutive numbers and is therefore even.
:::

## Arithmetic progressions

:::definizione{#progressione-aritmetica titolo="Arithmetic progression"}
An **arithmetic progression** is a sequence in which the difference between each term and the preceding one is always the same. This constant difference is called the **common difference** and is denoted by $d$:
$$
a_{n+1} - a_n = d \qquad \text{for every } n \geq 1 .
$$
Each term is therefore obtained by adding $d$ to the preceding term. For example, $2, 5, 8, 11, 14, \ldots$ is an arithmetic progression with common difference $d = 3$, and $20, 15, 10, 5, 0, -5, \ldots$ is an arithmetic progression with common difference $d = -5$. The sequence $1, 4, 9, 16$ of squares is not an arithmetic progression because the differences $3, 5, 7$ are not equal.

It follows from the definition that an arithmetic progression is strictly increasing if $d > 0$, strictly decreasing if $d < 0$, and constant if $d = 0$, because $a_{n+1} - a_n = d$ has the same sign as $d$.
:::

::::teorema{#termine-generale-aritmetica titolo="General term of an arithmetic progression"}
In an arithmetic progression with first term $a_1$ and common difference $d$, for every $n \geq 1$ we have
$$
a_n = a_1 + (n - 1)\,d .
$$
More generally, for any two indices $n$ and $k$ we have $a_n = a_k + (n - k)\,d$. The formula says that to go from the first term to the term in position $n$, we add $d$ a total of $n - 1$ times. In the progression $2, 5, 8, \ldots$ we have $a_{20} = 2 + 19 \cdot 3 = 59$, and the general term is $a_n = 2 + 3(n - 1) = 3n - 1$.

:::dimostrazione
We prove the first formula by induction on $n$. For $n = 1$, the right-hand side is $a_1 + 0 \cdot d = a_1$, so the formula holds.

Suppose that $a_n = a_1 + (n - 1)\,d$. By the definition of an arithmetic progression, $a_{n+1} = a_n + d$. Thus, by the inductive hypothesis,
$$
a_{n+1} = a_1 + (n - 1)\,d + d = a_1 + n\,d ,
$$
which is the formula for $n + 1$. By the principle of induction, the formula holds for every $n$.

For the second formula, write $a_n = a_1 + (n - 1)\,d$ and $a_k = a_1 + (k - 1)\,d$ and subtract. The result is $a_n - a_k = (n - k)\,d$, that is, $a_n = a_k + (n - k)\,d$.
:::
::::

:::esempio{titolo="Graph of an arithmetic progression"}
In the progression $a_n = 3n - 1$, the points $(n, a_n)$ of the graph lie on the line $y = 3x - 1$, whose slope equals the common difference $d = 3$. This happens for every arithmetic progression because $a_n = a_1 + (n - 1)\,d = d\,n + (a_1 - d)$ is a linear expression in $n$. The graph therefore consists of collinear points, and at each step to the right the vertical coordinate increases by $d$.

::grafico{f="3*x-1" punti="1,2,pieno;2,5,pieno;3,8,pieno;4,11,pieno;5,14,pieno;6,17,pieno" segmenti="1,2,2,2;2,2,2,5" etichette="2.25,3.3,d = 3" xmin=0 xmax=7 ymin=-2 ymax=20 nomi="n,a" legenda="y = 3x - 1" titolo="The terms of the arithmetic progression $a_n = 3n - 1$ lie on the line $y = 3x - 1$. At each step the vertical coordinate increases by the common difference $d = 3$"}

:::

:::esempio{titolo="A progression specified by two terms"}
In an arithmetic progression, $a_5 = 17$ and $a_{12} = 38$. Using the formula $a_n = a_k + (n - k)\,d$ with $n = 12$ and $k = 5$ gives
$$
38 = 17 + 7d ,
\qquad
\text{therefore}
\qquad
d = \frac{38 - 17}{7} = 3 .
$$
The first term follows from $a_5 = a_1 + 4d$, that is, $17 = a_1 + 12$, so $a_1 = 5$ and the general term is $a_n = 5 + 3(n - 1) = 3n + 2$. The denominator $7$ is the number of steps from the fifth term to the twelfth.
:::

:::teorema{#termini-equidistanti-aritmetica titolo="Terms equidistant from the ends"}
Among the first $n$ terms of an arithmetic progression, the sum of two terms equidistant from the ends equals the sum of the first and last terms:
$$
a_k + a_{n-k+1} = a_1 + a_n \qquad \text{for } 1 \leq k \leq n .
$$
The terms $a_k$ and $a_{n-k+1}$ are called equidistant from the ends because the first has $k - 1$ terms before it and the second has $k - 1$ terms after it. The property follows from the general term because $a_k + a_{n-k+1} = a_1 + (k - 1)\,d + a_1 + (n - k)\,d = 2a_1 + (n - 1)\,d = a_1 + a_n$. For example, among the terms $2, 5, 8, 11, 14, 17$ we have $2 + 17 = 5 + 14 = 8 + 11 = 19$.
:::

::::teorema{#somma-aritmetica titolo="Sum of the first n terms of an arithmetic progression"}
The sum $S_n = a_1 + a_2 + \dots + a_n$ of the first $n$ terms of an arithmetic progression is
$$
S_n = \frac{n\,(a_1 + a_n)}{2} = \frac{n\,\big( 2a_1 + (n - 1)\,d \big)}{2} .
$$
Use the first form when the first and last terms are known, and the second when the first term and common difference are known. For the progression $2, 5, 8, \ldots, 59$, which has $20$ terms, the sum is $S_{20} = \dfrac{20 \cdot (2 + 59)}{2} = 610$.

:::dimostrazione
The idea is to write the sum twice, the second time in reverse order, and add by columns:
$$
\begin{aligned}
S_n &= a_1 + a_2 + \dots + a_{n-1} + a_n \\[6pt]
S_n &= a_n + a_{n-1} + \dots + a_2 + a_1 .
\end{aligned}
$$
Each column contains two terms equidistant from the ends, and by the preceding theorem their sum is $a_1 + a_n$. There are $n$ columns, so adding the two rows gives
$$
2S_n = n\,(a_1 + a_n) ,
\qquad
\text{that is}
\qquad
S_n = \frac{n\,(a_1 + a_n)}{2} .
$$
The second form is obtained by substituting $a_n = a_1 + (n - 1)\,d$.
:::

::grafico{assi=0 uguale=1 poligoni="0,0 1,0 1,1 0,1;1,0 2,0 2,2 1,2;2,0 3,0 3,3 2,3;3,0 4,0 4,4 3,4;4,0 5,0 5,5 4,5" linee="0,0 5,0 5,6 0,6 0,0;0,1 1,1 1,2 2,2 2,3 3,3 3,4 4,4 4,5 5,5" etichette="2.5,-0.5,n = 5;5.7,3,a₁ + aₙ = 6" xmin=-1 xmax=7 ymin=-1 ymax=7 titolo="Two copies of the sum $1 + 2 + 3 + 4 + 5$, one turned upside down, form a rectangle of dimensions $5 \times 6$. Thus $2S_5 = 30$ and $S_5 = 15$"}

::::

:::teorema{#media-aritmetica titolo="Arithmetic mean and inserting terms"}
Three numbers $a$, $b$, and $c$ are consecutive terms of an arithmetic progression if and *only if* the middle term is the arithmetic mean of the other two:
$$
b = \frac{a + c}{2} .
$$
Indeed, the two differences $b - a$ and $c - b$ are equal if and only if $2b = a + c$. For example, between $4$ and $10$ we insert $\dfrac{4 + 10}{2} = 7$, and $4, 7, 10$ is an arithmetic progression with common difference $3$.

More generally, to insert $k$ numbers between $A$ and $B$ so that $A$, the $k$ inserted numbers, and $B$ form an arithmetic progression, observe that $B$ is the term in position $k + 2$. The formula for the general term gives $B = A + (k + 1)\,d$, so
$$
d = \frac{B - A}{k + 1} .
$$
To insert three numbers between $2$ and $18$, we have $d = \dfrac{18 - 2}{4} = 4$, and the progression is $2, 6, 10, 14, 18$. The inserted numbers are called **arithmetic means** between $A$ and $B$.
:::

## Geometric progressions

:::definizione{#progressione-geometrica titolo="Geometric progression"}
A **geometric progression** is a sequence of numbers different from $0$ in which the ratio of each term to the preceding one is always the same. This constant ratio is called the **common ratio** and is denoted by $q$:
$$
\frac{a_{n+1}}{a_n} = q \qquad \text{for every } n \geq 1 .
$$
Each term is therefore obtained by multiplying the preceding term by $q$, and the common ratio $q$ is different from $0$. For example, $3, 6, 12, 24, \ldots$ is a geometric progression with common ratio $q = 2$, and $81, 27, 9, 3, 1, \ldots$ is a geometric progression with common ratio $q = \dfrac{1}{3}$. The sequence $1, 2, 4, 7$ is not a geometric progression because the ratios $2$, $2$, and $\dfrac{7}{4}$ are not all equal.
:::

::::teorema{#termine-generale-geometrica titolo="General term of a geometric progression"}
In a geometric progression with first term $a_1$ and common ratio $q$, for every $n \geq 1$ we have
$$
a_n = a_1 \cdot q^{n-1} .
$$
More generally, for any two indices $n$ and $k$ we have $a_n = a_k \cdot q^{n-k}$. To go from the first term to the term in position $n$, we multiply by $q$ a total of $n - 1$ times. In the progression $3, 6, 12, \ldots$ we have $a_8 = 3 \cdot 2^7 = 384$.

:::dimostrazione
We proceed by induction on $n$. For $n = 1$, the right-hand side is $a_1 \cdot q^0 = a_1$, so the formula holds. Suppose $a_n = a_1 q^{n-1}$. By the definition of a geometric progression, $a_{n+1} = a_n \cdot q$. Thus, by the inductive hypothesis, $a_{n+1} = a_1 q^{n-1} \cdot q = a_1 q^n$, which is the formula for $n + 1$. By the principle of induction, the formula holds for every $n$.

For the second formula, divide $a_n = a_1 q^{n-1}$ by $a_k = a_1 q^{k-1}$, which is different from $0$. The result is $\dfrac{a_n}{a_k} = q^{n-k}$, that is, $a_n = a_k\,q^{n-k}$.
:::
::::

:::attenzione
The exponent in the formula for the general term is $n - 1$, the number of multiplications by $q$. In the progression with $a_1 = 3$ and $q = 2$, the fourth term is $a_4 = 3 \cdot 2^3 = 24$, as we can check by listing the terms: $3, 6, 12, 24$. Using the exponent $n$ would give $3 \cdot 2^4 = 48$, which is the fifth term.
:::

:::esempio{titolo="A progression specified by two terms"}
In a geometric progression, $a_2 = 6$ and $a_5 = 48$. Applying the formula $a_n = a_k\,q^{n-k}$ with $n = 5$ and $k = 2$ gives
$$
48 = 6\,q^3 ,
\qquad
\text{therefore}
\qquad
q^3 = 8
\qquad
\text{and}
\qquad
q = 2 .
$$
The equation $q^3 = 8$ has only one real solution because the exponent is odd. The first term is $a_1 = \dfrac{a_2}{q} = 3$. If the exponent is even, however, as in $q^2 = 9$, there are two possible common ratios, $q = 3$ and $q = -3$, and therefore two different progressions.
:::

:::osservazione{#andamento-geometrica titolo="Sign and monotonicity of a geometric progression"}
The behavior of a geometric progression depends on its common ratio $q$. Consider the case $a_1 > 0$. If $a_1 < 0$, all terms change sign and an increasing progression becomes a decreasing one.

- If $q > 1$, each term is greater than the preceding one, and the progression is **strictly increasing**, as in $3, 6, 12, 24, \ldots$
- If $q = 1$, the progression is constant.
- If $0 < q < 1$, each term is a fraction of the preceding one, and the progression is **strictly decreasing** with positive terms, as in $8, 4, 2, 1, \dfrac{1}{2}, \ldots$
- If $q < 0$, the terms alternate in sign and the progression is not monotone. For example, with $a_1 = 4$ and $q = -\dfrac{1}{2}$ we obtain $4, -2, 1, -\dfrac{1}{2}, \dfrac{1}{4}, \ldots$

For example, when $0 < q < 1$, we have $a_{n+1} - a_n = a_n\,(q - 1)$, which is negative because $a_n > 0$ and $q - 1 < 0$. The other cases follow by the same reasoning.

::grafico{punti="1,8,pieno;2,4,pieno;3,2,pieno;4,1,pieno;5,0.5,pieno;6,0.25,pieno;7,0.125,pieno" xmin=0 xmax=8 ymin=-1 ymax=9 nomi="n,a" titolo="The geometric progression with $a_1 = 8$ and $q = \dfrac{1}{2}$: the terms stay positive, and each is half the preceding term"}

::grafico{punti="1,4,pieno;2,-2,pieno;3,1,pieno;4,-0.5,pieno;5,0.25,pieno;6,-0.125,pieno;7,0.0625,pieno" xmin=0 xmax=8 ymin=-3 ymax=5 nomi="n,a" titolo="The geometric progression with $a_1 = 4$ and $q = -\dfrac{1}{2}$: the terms change sign at each step and approach $0$"}

:::

:::teorema{#media-geometrica titolo="Geometric mean and inserting terms"}
Three positive numbers $a$, $b$, and $c$ are consecutive terms of a geometric progression if and *only if* the middle term is the geometric mean of the other two:
$$
b = \sqrt{ac} .
$$
Indeed, the ratios $\dfrac{b}{a}$ and $\dfrac{c}{b}$ are equal if and only if $b^2 = ac$. For positive numbers, this equality is equivalent to $b = \sqrt{ac}$. For example, the geometric mean of $4$ and $9$ is $\sqrt{36} = 6$, and $4, 6, 9$ is a geometric progression with common ratio $\dfrac{3}{2}$.

To insert $k$ positive numbers between two positive numbers $A$ and $B$ to form a geometric progression, observe that $B$ is the term in position $k + 2$. The formula for the general term gives $B = A\,q^{k+1}$, so
$$
q = \sqrt[k+1]{\frac{B}{A}} .
$$
To insert three positive numbers between $3$ and $48$, we have $q^4 = 16$. Thus $q = 2$, and the progression is $3, 6, 12, 24, 48$. The inserted numbers are called **geometric means**. If the terms need not be positive and the exponent $k + 1$ is even, the negative common ratio $q = -2$ is also possible and gives $3, -6, 12, -24, 48$.
:::

## Sum and product of the terms of a geometric progression

::::teorema{#somma-geometrica titolo="Sum of the first n terms of a geometric progression"}
The sum of the first $n$ terms of a geometric progression with first term $a_1$ and common ratio $q \neq 1$ is
$$
S_n = a_1 \cdot \frac{1 - q^n}{1 - q} .
$$
If $q = 1$, every term equals $a_1$, and $S_n = n\,a_1$. For example, $2 + 6 + 18 + 54 + 162$ is the sum of the first $5$ terms of the progression with $a_1 = 2$ and $q = 3$, so
$$
S_5 = 2 \cdot \frac{1 - 3^5}{1 - 3} = 2 \cdot \frac{-242}{-2} = 242 .
$$
Similarly, $1 + 2 + 4 + \dots + 2^9 = \dfrac{1 - 2^{10}}{1 - 2} = 1023$.

:::dimostrazione
The idea is to multiply the sum by $q$ and subtract so that almost all the terms cancel. Write
$$
\begin{aligned}
S_n &= a_1 + a_1 q + a_1 q^2 + \dots + a_1 q^{n-1} \\[6pt]
q\,S_n &= a_1 q + a_1 q^2 + \dots + a_1 q^{n-1} + a_1 q^n .
\end{aligned}
$$
The terms from $a_1 q$ to $a_1 q^{n-1}$ appear in both rows. Subtracting the second row from the first leaves only the first term of the first row and the last term of the second:
$$
S_n - q\,S_n = a_1 - a_1 q^n ,
\qquad
\text{that is}
\qquad
S_n\,(1 - q) = a_1\,(1 - q^n) .
$$
Since $q \neq 1$, the number $1 - q$ is different from $0$, and dividing by $1 - q$ gives the formula.
:::
::::

::::teorema{#prodotto-geometrica titolo="Product of the first n terms of a geometric progression"}
Let $P_n = a_1 \cdot a_2 \cdots a_n$ be the product of the first $n$ terms of a geometric progression. Then
$$
P_n^2 = (a_1 \cdot a_n)^n ,
$$
and, if the terms are positive,
$$
P_n = \sqrt{(a_1 \cdot a_n)^n} .
$$
For example, the terms $3, 6, 12, 24$ have product $5184$. The formula gives $\sqrt{(3 \cdot 24)^4} = 72^2 = 5184$. The formula is useful when there are many terms and only the first and last are known.

:::dimostrazione
The idea is the same as for the sum of an arithmetic progression, with multiplication in place of addition. The product of two terms equidistant from the ends equals the product of the first and last terms because
$$
a_k \cdot a_{n-k+1} = a_1 q^{k-1} \cdot a_1 q^{n-k} = a_1^2\,q^{n-1} = a_1 \cdot a_1 q^{n-1} = a_1 \cdot a_n .
$$
Write the product twice, the second time in reverse order, and multiply the factors in each column:
$$
P_n \cdot P_n = (a_1 a_n)(a_2 a_{n-1}) \cdots (a_n a_1) .
$$
There are $n$ factors on the right-hand side, each equal to $a_1 a_n$, so $P_n^2 = (a_1 a_n)^n$. If the terms are positive, then $P_n$ is also positive, and $P_n$ is the positive square root of $(a_1 a_n)^n$.
:::
::::

## Interest, compounding, and regular payments

:::definizione{#interesse-semplice titolo="Simple interest"}
A principal amount $C$ is deposited at an annual **interest rate** $i$, written as a decimal, so that a rate of $5\%$ corresponds to $i = 0.05$. With **simple interest**, each year's interest is calculated on the initial principal alone and always equals $C\,i$. The **accumulated amount**, that is, the principal plus the interest, after $n$ years is
$$
M_n = C + n\,C\,i = C\,(1 + n\,i) .
$$
The accumulated amounts $M_0, M_1, M_2, \ldots$ therefore form an arithmetic progression with first term $C$ and common difference $C\,i$. For example, with $C = 1000$ euros and $i = 0.05$, the annual interest is $50$ euros, and after $4$ years the accumulated amount is $M_4 = 1000 \cdot (1 + 4 \cdot 0.05) = 1200$ euros.
:::

:::definizione{#interesse-composto titolo="Compound interest"}
With **compound interest**, each year's interest is added to the principal and itself earns interest the following year. At the end of each year the accumulated amount is multiplied by $1 + i$, so the accumulated amounts form a geometric progression with first term $C$ and common ratio $1 + i$:
$$
M_n = C\,(1 + i)^n .
$$
The indices start at $0$ because $M_0 = C$ is the initial principal. With $C = 1000$ euros and $i = 0.05$, after $4$ years the accumulated amount is
$$
M_4 = 1000 \cdot 1.05^4 = 1215.51 \text{ euros} ,
$$
rounded to the nearest cent, or $15.51$ euros more than with simple interest. The difference comes from the interest earned on interest and increases over time.

::grafico{punti="0,10,pieno;1,11,pieno;2,12,pieno;3,13,pieno;4,14,pieno;5,15,pieno;6,16,pieno;7,17,pieno;8,18,pieno;1,11,vuoto;2,12.1,vuoto;3,13.31,vuoto;4,14.641,vuoto;5,16.1051,vuoto;6,17.7156,vuoto;7,19.4872,vuoto;8,21.4359,vuoto" etichette="8.4,17.4,simple;8.4,22.2,compound" xmin=0 xmax=10 ymin=0 ymax=24 nomi="n,M" titolo="Accumulated amounts, in hundreds of euros, for $1000$ euros at $10\%$ per year: with simple interest (filled points) they increase in an arithmetic progression, and with compound interest (open points) they increase in a geometric progression"}

:::

:::esempio{titolo="Doubling time for an investment"}
We want to find how many years it takes an investment to double at an annual rate of $5\%$ with compound interest. We require $C \cdot 1.05^n \geq 2C$. Dividing by $C > 0$ gives
$$
1.05^n \geq 2 .
$$
We solve the exponential inequality using logarithms, as in the chapter on logarithms. The natural logarithm is increasing, so the inequality is equivalent to $n \ln 1.05 \geq \ln 2$, and since $\ln 1.05 > 0$,
$$
n \geq \frac{\ln 2}{\ln 1.05} \approx 14.2 .
$$
The number of years is an integer, so the investment doubles after $15$ years. Indeed, $1.05^{14} \approx 1.98$ is still less than $2$, whereas $1.05^{15} \approx 2.08$.
:::

:::esempio{#rate-costanti titolo="Equal deposits"}
At the end of each year for $n$ years, the same amount $R$ is deposited in an account earning compound interest at an annual rate $i$. At the end of the last year, the deposit just made is worth $R$, the previous year's deposit is worth $R\,(1 + i)$, and the first deposit, which has been in the account for $n - 1$ years, is worth $R\,(1 + i)^{n-1}$. The total value is therefore the sum of a geometric progression with first term $R$ and common ratio $1 + i$:
$$
V = R + R\,(1 + i) + \dots + R\,(1 + i)^{n-1} = R \cdot \frac{(1 + i)^n - 1}{i} ,
$$
where the denominator is $(1 + i) - 1 = i$. With $R = 1000$ euros, $i = 0.02$, and $n = 5$, this gives
$$
V = 1000 \cdot \frac{1.02^5 - 1}{0.02} = 5204.04 \text{ euros} ,
$$
rounded to the nearest cent. The deposits total $5000$ euros and the interest earned is $204.04$ euros. The same reasoning applies to mortgage payments and regular savings plans.
:::

## Geometry problems involving progressions

:::esempio{titolo="A right triangle with side lengths in arithmetic progression"}
We seek right triangles whose side lengths form an arithmetic progression. Write the three side lengths as $a - d$, $a$, and $a + d$, with $0 < d < a$, so that the middle term is $a$ and the common difference is $d$. The hypotenuse is the longest side, $a + d$, so the Pythagorean theorem gives
$$
(a - d)^2 + a^2 = (a + d)^2 .
$$
Expanding the squares gives $a^2 - 2ad + d^2 + a^2 = a^2 + 2ad + d^2$, that is, $a^2 = 4ad$. Since $a > 0$, dividing by $a$ gives $a = 4d$. The side lengths are therefore $3d$, $4d$, and $5d$, so every right triangle whose side lengths form an arithmetic progression is similar to the triangle with side lengths $3$, $4$, and $5$. For example, if the perimeter is $24$, then $12d = 24$, so $d = 2$ and the side lengths are $6$, $8$, and $10$.
:::

:::esempio{#quadrati-inscritti titolo="Squares inscribed in one another"}
Start with a square of side length $4$ and construct a second square by joining the midpoints of its sides. Repeat the construction on the second square, and so on. A side of the new square is the hypotenuse of an isosceles right triangle whose legs have half the side length of the preceding square. If the preceding side length is $\ell$, the new side length is therefore
$$
\sqrt{\left( \frac{\ell}{2} \right)^2 + \left( \frac{\ell}{2} \right)^2} = \frac{\ell}{\sqrt{2}} .
$$
The side lengths thus form a geometric progression with common ratio $\dfrac{1}{\sqrt{2}}$. The areas, which are the squares of the side lengths, form a geometric progression with common ratio $\dfrac{1}{2}$, namely $16, 8, 4, 2, \ldots$ The sum of the areas of the first $5$ squares is
$$
S_5 = 16 \cdot \frac{1 - \left( \frac{1}{2} \right)^5}{1 - \frac{1}{2}} = 16 \cdot \frac{31}{32} \cdot 2 = 31 .
$$

::grafico{assi=0 uguale=1 poligoni="-2,-2 2,-2 2,2 -2,2" linee="-2,-2 2,-2 2,2 -2,2 -2,-2;0,-2 2,0 0,2 -2,0 0,-2;-1,-1 1,-1 1,1 -1,1 -1,-1;0,-1 1,0 0,1 -1,0 0,-1" etichette="0,-2.5,ℓ = 4" xmin=-3 xmax=3 ymin=-3 ymax=3 titolo="The vertices of each square are the midpoints of the sides of the preceding one. The areas $16$, $8$, $4$, and $2$ form a geometric progression with common ratio $\dfrac{1}{2}$"}

:::

## Progressions for large n and infinite sums

::::teorema{#potenze-qn titolo="Behavior of q raised to the nth power for large n"}
Let $q$ be a real number.

- If $q > 1$, the powers $q^n$ exceed any given positive number $M$ for sufficiently large $n$.
- If $|q| < 1$, the powers $q^n$ approach $0$. That is, for any given distance $\varepsilon > 0$ we have $|q^n| < \varepsilon$ for sufficiently large $n$.
- If $q = 1$, the powers always equal $1$. If $q \leq -1$, the powers change sign at each step and their absolute values do not decrease.

In the language of limits, studied in the fifth year, the first case is written as $\displaystyle\lim_{n \to +\infty} q^n = +\infty$ and the second as $\displaystyle\lim_{n \to +\infty} q^n = 0$. It follows from the theorem that for a geometric progression $a_n = a_1 q^{n-1}$ with $|q| < 1$, the terms approach $0$. With $|q| > 1$, the absolute values of the terms grow without bound. An arithmetic progression with $d \neq 0$ eventually exceeds any prescribed number in absolute value because the term $(n - 1)\,d$ grows without bound in absolute value. For example, $0.9^n < 0.01$ for every $n \geq 44$, because taking logarithms gives the equivalent condition $n > \dfrac{\ln 0.01}{\ln 0.9} \approx 43.7$.

:::dimostrazione
First consider $q > 1$ and write $q = 1 + x$ with $x > 0$. By Bernoulli's inequality, $q^n \geq 1 + nx$. The right-hand side exceeds $M$ when $n > \dfrac{M - 1}{x}$, so for these values of $n$ we also have $q^n > M$.

If $0 < |q| < 1$, the number $p = \dfrac{1}{|q|}$ is greater than $1$. The preceding case, applied with $M = \dfrac{1}{\varepsilon}$, gives $p^n > \dfrac{1}{\varepsilon}$ for sufficiently large $n$. Taking reciprocals of these positive quantities gives $|q|^n < \varepsilon$, and $|q^n| = |q|^n$. If $q = 0$, all the powers are zero. The last case follows from $|q^n| = |q|^n \geq 1$ for $|q| \geq 1$.
:::
::::

:::teorema{#somma-geometrica-infinita titolo="Sum of a geometric progression whose common ratio has absolute value less than 1"}
Let $(a_n)$ be a geometric progression with first term $a_1$ and common ratio $q$ satisfying $|q| < 1$. As $n$ becomes large, the sum $S_n$ of the first $n$ terms approaches the number
$$
S = \frac{a_1}{1 - q} ,
$$
which is called the **sum** of the geometric progression and is written as $S = a_1 + a_1 q + a_1 q^2 + \dots$ Indeed, $S_n = \dfrac{a_1}{1 - q} - \dfrac{a_1}{1 - q}\,q^n$, and the second term approaches $0$ because $q^n$ approaches $0$. A precise definition of this infinite sum is given using limits in the fifth-year chapter.

For example, with $a_1 = \dfrac{1}{2}$ and $q = \dfrac{1}{2}$ we have $S_n = 1 - \left( \dfrac{1}{2} \right)^n$, so the partial sums are $\dfrac{1}{2}, \dfrac{3}{4}, \dfrac{7}{8}, \dfrac{15}{16}, \ldots$ and
$$
\frac{1}{2} + \frac{1}{4} + \frac{1}{8} + \frac{1}{16} + \dots = \frac{\frac{1}{2}}{1 - \frac{1}{2}} = 1 .
$$

::grafico{punti="1,0.5,pieno;2,0.75,pieno;3,0.875,pieno;4,0.9375,pieno;5,0.96875,pieno;6,0.984375,pieno;7,0.9921875,pieno;8,0.99609375,pieno" asintoti="y=1" xmin=0 xmax=9 ymin=0 ymax=1.3 nomi="n,S" titolo="The partial sums $S_n = 1 - \left( \dfrac{1}{2} \right)^n$ of $\dfrac{1}{2} + \dfrac{1}{4} + \dfrac{1}{8} + \ldots$ approach $1$ without exceeding it"}

:::

:::esempio{titolo="Repeating decimals as geometric sums"}
The number $0.\overline{3} = 0.333\ldots$ is the sum $\dfrac{3}{10} + \dfrac{3}{100} + \dfrac{3}{1000} + \dots$, that is, the sum of a geometric progression with $a_1 = \dfrac{3}{10}$ and $q = \dfrac{1}{10}$. Since $|q| < 1$,
$$
0.\overline{3} = \frac{\frac{3}{10}}{1 - \frac{1}{10}} = \frac{\frac{3}{10}}{\frac{9}{10}} = \frac{1}{3} .
$$
Similarly, $0.\overline{12} = \dfrac{12}{100} + \dfrac{12}{10000} + \dots$ has $a_1 = \dfrac{12}{100}$ and $q = \dfrac{1}{100}$, so it equals $\dfrac{12}{100} \cdot \dfrac{100}{99} = \dfrac{12}{99} = \dfrac{4}{33}$. This explains the rule for converting a repeating decimal to a fraction.
:::

:::attenzione
The formula $\dfrac{a_1}{1 - q}$ holds only for $|q| < 1$. With $a_1 = 1$ and $q = -1$, the formula would give $\dfrac{1}{2}$, but the partial sums of $1 - 1 + 1 - 1 + \dots$ alternate between $1$ and $0$ and do not approach any number. With $a_1 = 1$ and $q = 2$, the formula would give $-1$, whereas the partial sums $1, 3, 7, 15, \ldots$ are positive and grow without bound.
:::
