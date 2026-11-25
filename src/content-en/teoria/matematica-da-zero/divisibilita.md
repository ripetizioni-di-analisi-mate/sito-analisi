---
titolo: Multiples, divisors, prime numbers, GCD and LCM
sommario: What multiples and divisors are, how to test divisibility by 2, 3, 4, 5, 9, 10, 11, and 25 without performing the division, what prime numbers are, how to factor a number into primes, and how to find the greatest common divisor and least common multiple, including in problems involving tiles, work shifts, and packages.
---

## Multiples and divisors

:::definizione{#multipli-e-divisori titolo="Multiples and divisors"}
Let $a$ and $b$ be two natural numbers, with $b$ different from $0$. The number $a$ is a **multiple** of $b$ if it can be obtained by multiplying $b$ by a natural number, that is, if $a = b \cdot k$ for some natural number $k$. In this case we also say that $b$ is a **divisor** of $a$, or that $a$ is **divisible** by $b$.

In other words, $b$ is a divisor of $a$ when the division $a : b$ has remainder $0$. For example, $35 = 7 \cdot 5$, so $35$ is a multiple of $7$, and $7$ is a divisor of $35$. In contrast, $35$ is not a multiple of $4$ because $35 : 4$ gives quotient $8$ and remainder $3$, since $4 \cdot 8 + 3 = 35$.
:::

:::esempio{titolo="Multiples of 3"}
The multiples of $3$ are obtained by multiplying $3$ by $0$, $1$, $2$, $3$, and so on:
$$
0, \quad 3, \quad 6, \quad 9, \quad 12, \quad 15, \quad 18, \quad \dots
$$
The list goes on forever because we can always multiply by a larger number. On the number line, the multiples of $3$ are found by starting at $0$ and moving forward $3$ units at a time.

::grafico{assi=0 uguale=1 linee="0,0 21.5,0;21,0.3 21.5,0 21,-0.3;0,-0.15 0,0.15;1,-0.15 1,0.15;2,-0.15 2,0.15;3,-0.15 3,0.15;4,-0.15 4,0.15;5,-0.15 5,0.15;6,-0.15 6,0.15;7,-0.15 7,0.15;8,-0.15 8,0.15;9,-0.15 9,0.15;10,-0.15 10,0.15;11,-0.15 11,0.15;12,-0.15 12,0.15;13,-0.15 13,0.15;14,-0.15 14,0.15;15,-0.15 15,0.15;16,-0.15 16,0.15;17,-0.15 17,0.15;18,-0.15 18,0.15;19,-0.15 19,0.15;20,-0.15 20,0.15" punti="0,0,pieno;3,0,pieno;6,0,pieno;9,0,pieno;12,0,pieno;15,0,pieno;18,0,pieno" etichette="-0.25,-0.9,0;2.75,-0.9,3;5.75,-0.9,6;8.75,-0.9,9;11.5,-0.9,12;14.5,-0.9,15;17.5,-0.9,18" xmin=-1 xmax=22 ymin=-1.6 ymax=1 titolo="Multiples of $3$ up to $18$ on the number line: consecutive multiples are $3$ units apart"}

:::

:::esempio{#divisori-di-un-numero titolo="Divisors of 12"}
A number other than $0$, however, has only finitely many divisors because no divisor is greater than the number itself. To find the divisors of $12$, look for pairs of numbers whose product is $12$:
$$
12 = 1 \cdot 12, \qquad 12 = 2 \cdot 6, \qquad 12 = 3 \cdot 4 .
$$
Therefore the divisors of $12$ are $1, 2, 3, 4, 6, 12$. The same pairs give the side lengths of the rectangles that can be made with $12$ equal squares.

::grafico{assi=0 uguale=1 poligoni="0,0 12,0 12,1 0,1;0,2.5 6,2.5 6,4.5 0,4.5;8,2.5 12,2.5 12,5.5 8,5.5" linee="0,0 12,0 12,1 0,1 0,0;0,2.5 6,2.5 6,4.5 0,4.5 0,2.5;8,2.5 12,2.5 12,5.5 8,5.5 8,2.5" segmenti="1,0,1,1;2,0,2,1;3,0,3,1;4,0,4,1;5,0,5,1;6,0,6,1;7,0,7,1;8,0,8,1;9,0,9,1;10,0,10,1;11,0,11,1;1,2.5,1,4.5;2,2.5,2,4.5;3,2.5,3,4.5;4,2.5,4,4.5;5,2.5,5,4.5;0,3.5,6,3.5;9,2.5,9,5.5;10,2.5,10,5.5;11,2.5,11,5.5;8,3.5,12,3.5;8,4.5,12,4.5" etichette="0,1.35,12 · 1;0,4.85,6 · 2;8,5.85,4 · 3" xmin=-0.5 xmax=12.5 ymin=-0.5 ymax=6.6 titolo="With $12$ equal squares, we can make three rectangles with side lengths $12$ and $1$, $6$ and $2$, and $4$ and $3$: the side lengths are the divisors of $12$"}

:::

:::osservazione{#casi-particolari titolo="The numbers 0 and 1"}
The number $1$ is a divisor of every natural number $a$ because $a = 1 \cdot a$. Every number $a$ other than $0$ is a divisor of itself for the same reason. The number $0$ is a multiple of every number $b$ because $0 = b \cdot 0$. However, zero is not a divisor of any number because division by $0$ is undefined, as explained in the chapter on natural numbers.
:::

:::richiamo{titolo="Distributive property"}
For all natural numbers $a$, $b$, and $c$, we have $a \cdot (b + c) = a \cdot b + a \cdot c$.
:::

:::teorema{#somma-di-multipli titolo="Sums and differences of multiples"}
If two numbers are multiples of $b$, then their sum is also a multiple of $b$, and the same holds for their difference (the larger number minus the smaller).

For example, $12 = 3 \cdot 4$ and $18 = 3 \cdot 6$ are multiples of $3$. By the distributive property, $12 + 18 = 3 \cdot 4 + 3 \cdot 6 = 3 \cdot (4 + 6) = 3 \cdot 10$, so $30$ is also a multiple of $3$. Similarly, $18 - 12 = 3 \cdot (6 - 4) = 3 \cdot 2 = 6$. This property explains why the divisibility tests work.
:::

## Divisibility tests

:::teorema{#criteri-2-5-10 titolo="Divisibility by 2, 5, and 10"}
A natural number is divisible:

- by $2$ if its last digit is $0$, $2$, $4$, $6$, or $8$;
- by $5$ if its last digit is $0$ or $5$;
- by $10$ if its last digit is $0$.

A **divisibility test** is a rule that tells us whether a division has remainder $0$ without carrying out the division. Numbers divisible by $2$ are called **even**, and the others are called **odd**. For example, $4\,358$ is even because it ends in $8$, but it is divisible by neither $5$ nor $10$. The number $1\,275$ is divisible by $5$ because it ends in $5$, and it is not divisible by $2$.

The rule works because a number is made up of its tens plus its ones digit. For example, $4\,358 = 435 \cdot 10 + 8$, and $435 \cdot 10$ is a multiple of $10$ and therefore also of $2$ and $5$. Thus divisibility depends only on the last digit.
:::

:::teorema{#criteri-4-25 titolo="Divisibility by 4 and 25"}
A natural number with at least three digits is divisible:

- by $4$ if the number formed by its last two digits is divisible by $4$;
- by $25$ if it ends in $00$, $25$, $50$, or $75$.

The reasoning is the same as for the previous test, with hundreds in place of tens. The number $7\,316$ can be written as $73 \cdot 100 + 16$, and $100 = 4 \cdot 25$ is a multiple of $4$ and $25$. Since $16 = 4 \cdot 4$, the number $7\,316$ is **divisible** by $4$. However, $16$ is not a multiple of $25$, so $7\,316$ is not divisible by $25$. The number $3\,450$ is divisible by $25$ because it ends in $50$.
:::

:::attenzione
For divisibility by $4$, look at the last *two* digits. The number $34$ ends in $4$, but it is not divisible by $4$ because $34 : 4$ gives quotient $8$ and remainder $2$.
:::

::::teorema{#criteri-3-9 titolo="Divisibility by 3 and 9"}
A natural number is divisible by $3$ if the sum of its digits is divisible by $3$, and it is divisible by $9$ if the sum of its digits is divisible by $9$.

For example, the digits of $5\,742$ have sum $5 + 7 + 4 + 2 = 18$. Since $18$ is a multiple of $9$, the number $5\,742$ is **divisible** by $9$ and therefore also by $3$. The digits of $1\,204$ have sum $7$, which is not a multiple of $3$, so $1\,204$ is not divisible by $3$.

:::dimostrazione
The idea is to write the number in terms of its individual digits. For $5\,742$ we have
$$
\begin{aligned}
5\,742 &= 5 \cdot 1000 + 7 \cdot 100 + 4 \cdot 10 + 2 \\[6pt]
&= 5 \cdot (999 + 1) + 7 \cdot (99 + 1) + 4 \cdot (9 + 1) + 2 \\[6pt]
&= (5 \cdot 999 + 7 \cdot 99 + 4 \cdot 9) + (5 + 7 + 4 + 2) .
\end{aligned}
$$
The numbers $9$, $99$, and $999$ are multiples of $9$, so the first group of addends is a multiple of $9$ and also of $3$. The second group is the sum of the digits, namely $18$. By the property of sums of multiples, if $18$ is also a multiple of $9$, then the entire number is a multiple of $9$. If instead the sum of the digits is not a multiple of $9$, then neither is the number. Otherwise the sum of the digits, which is the difference between the number and the first group, would be a multiple of $9$. The same reasoning works with $3$ in place of $9$.
:::
::::

:::teorema{#criterio-11 titolo="Divisibility by 11"}
Number the digits from the right, starting with the ones digit in position $1$. The number is divisible by $11$ if the difference between the sum of the digits in odd positions and the sum of the digits in even positions (the larger sum minus the smaller) is $0$ or a multiple of $11$.

For example, in $8\,294$ the digits in odd positions are $4$ and $2$, with sum $6$, and those in even positions are $9$ and $8$, with sum $17$. The difference is $17 - 6 = 11$, so $8\,294$ is **divisible** by $11$. Indeed, $8\,294 = 11 \cdot 754$. In the number $5\,203$, the two sums are $3 + 2 = 5$ and $0 + 5 = 5$, with difference $0$, so $5\,203$ is also divisible by $11$. Indeed, $5\,203 = 11 \cdot 473$. The test can be justified in the same way as the test for $9$, using the fact that $10 = 11 - 1$, $100 = 99 + 1$, and $1000 = 1001 - 1$, where $99$ and $1001 = 11 \cdot 91$ are multiples of $11$.
:::

## Primes and composites

:::definizione{#numeri-primi titolo="Prime and composite numbers"}
A natural number greater than $1$ is called **prime** if it has exactly two divisors, namely $1$ and itself. A number greater than $1$ that has other divisors is called **composite**.

For example, $7$ is prime because its only divisors are $1$ and $7$. The number $15$ is composite because it is also divisible by $3$ and $5$. The number $1$ is neither prime nor composite because it has only one divisor. Prime numbers are used to build all the other numbers by multiplication, as we see in prime factorization.
:::

:::teorema{#crivello-di-eratostene titolo="Sieve of Eratosthenes"}
The **sieve of Eratosthenes** is a method for finding all the primes up to a given number. Write down the numbers starting at $2$ and repeat two steps:

- take the first number in the list that has not been crossed out. It is prime;
- cross out all its subsequent multiples.

For numbers up to $50$, cross out the multiples of $2$ (that is, $4$, $6$, $8$, …), then the multiples of $3$ ($9$, $15$, $21$, …, since the even ones have already been crossed out), and then the multiples of $5$ and $7$. After $7$ there is nothing left to cross out because the first multiple of $11$ that would still need to be crossed out is $11 \cdot 11 = 121$, which exceeds $50$. The remaining numbers are the primes less than $50$:
$$
2,\ 3,\ 5,\ 7,\ 11,\ 13,\ 17,\ 19,\ 23,\ 29,\ 31,\ 37,\ 41,\ 43,\ 47 .
$$

::grafico{assi=0 uguale=1 poligoni="1,4 2,4 2,5 1,5;2,4 3,4 3,5 2,5;4,4 5,4 5,5 4,5;6,4 7,4 7,5 6,5;0,3 1,3 1,4 0,4;2,3 3,3 3,4 2,4;6,3 7,3 7,4 6,4;8,3 9,3 9,4 8,4;2,2 3,2 3,3 2,3;8,2 9,2 9,3 8,3;0,1 1,1 1,2 0,2;6,1 7,1 7,2 6,2;0,0 1,0 1,1 0,1;2,0 3,0 3,1 2,1;6,0 7,0 7,1 6,1" linee="0,0 10,0;0,1 10,1;0,2 10,2;0,3 10,3;0,4 10,4;0,5 10,5;0,0 0,5;1,0 1,5;2,0 2,5;3,0 3,5;4,0 4,5;5,0 5,5;6,0 6,5;7,0 7,5;8,0 8,5;9,0 9,5;10,0 10,5" etichette="0.33,4.32,1;1.33,4.32,2;2.33,4.32,3;3.33,4.32,4;4.33,4.32,5;5.33,4.32,6;6.33,4.32,7;7.33,4.32,8;8.33,4.32,9;9.18,4.32,10;0.18,3.32,11;1.18,3.32,12;2.18,3.32,13;3.18,3.32,14;4.18,3.32,15;5.18,3.32,16;6.18,3.32,17;7.18,3.32,18;8.18,3.32,19;9.18,3.32,20;0.18,2.32,21;1.18,2.32,22;2.18,2.32,23;3.18,2.32,24;4.18,2.32,25;5.18,2.32,26;6.18,2.32,27;7.18,2.32,28;8.18,2.32,29;9.18,2.32,30;0.18,1.32,31;1.18,1.32,32;2.18,1.32,33;3.18,1.32,34;4.18,1.32,35;5.18,1.32,36;6.18,1.32,37;7.18,1.32,38;8.18,1.32,39;9.18,1.32,40;0.18,0.32,41;1.18,0.32,42;2.18,0.32,43;3.18,0.32,44;4.18,0.32,45;5.18,0.32,46;6.18,0.32,47;7.18,0.32,48;8.18,0.32,49;9.18,0.32,50" xmin=-0.3 xmax=10.3 ymin=-0.3 ymax=5.3 titolo="The sieve of Eratosthenes up to $50$: the shaded cells contain the primes"}

:::

:::teorema{#riconoscere-un-primo titolo="How to recognize a prime number"}
To determine whether $n$ is prime, divide $n$ by the primes $2$, $3$, $5$, $7$, $11$, … in order. Stop when you reach a prime whose square exceeds $n$, without testing that prime. If none of the divisions performed has remainder $0$, the number $n$ is prime.

The test stops there for the following reason. If $n$ is composite, it can be written as the product of two factors greater than $1$, namely $n = a \cdot b$ with $a$ less than or equal to $b$. Then $a \cdot a$ does not exceed $a \cdot b = n$. A prime factor $p$ of $a$ does not exceed $a$, so $p \cdot p$ does not exceed $n$ either. Therefore $p$ is *among* the numbers tested. Since $p$ divides $a$ and $a$ divides $n$, the division of $n$ by $p$ has remainder $0$. For example, for $89$ we test $2$, $3$, $5$, and $7$ since $11 \cdot 11 = 121$ exceeds $89$. None of these divisions has remainder $0$, so $89$ is **prime**. For $91$, testing $7$ gives $91 = 7 \cdot 13$, so $91$ is composite.
:::

## Prime factorization

:::teorema{#scomposizione-in-fattori-primi titolo="Prime factorization"}
Every natural number greater than $1$ can be written as a product of primes, and this product is unique up to the order of its factors. Repeated factors can be written as a power, for example $2 \cdot 2 \cdot 2 = 2^3$.

To factor a number into primes means to write it in this form. For example, $60 = 2 \cdot 2 \cdot 3 \cdot 5 = 2^2 \cdot 3 \cdot 5$. Whether we start from $60 = 6 \cdot 10$ or from $60 = 4 \cdot 15$, we obtain the same factors because $6 \cdot 10 = 2 \cdot 3 \cdot 2 \cdot 5$ and $4 \cdot 15 = 2 \cdot 2 \cdot 3 \cdot 5$. Prime factorization is used to find the greatest common divisor and least common multiple and to simplify fractions, as explained in the chapter on fractions.
:::

:::definizione{#schema-in-colonna titolo="Factoring by division in columns"}
To factor a number, we can use a **two-column division table**. Write the number to the left of a vertical line. On the right, write the smallest prime number that divides it, and write the quotient below the original number. Repeat with the quotient until you reach $1$. For $360$:
$$
\begin{array}{r|l}
360 & 2 \\
180 & 2 \\
90 & 2 \\
45 & 3 \\
15 & 3 \\
5 & 5 \\
1 &
\end{array}
$$
The prime factors are the numbers in the right-hand column, so $360 = 2 \cdot 2 \cdot 2 \cdot 3 \cdot 3 \cdot 5 = 2^3 \cdot 3^2 \cdot 5$. Use divisibility tests to choose the divisor for each row. The number $360$ ends in $0$, so it is even. The number $45$ is odd and its digits add up to $9$, so it is divisible by $3$.
:::

:::esempio{titolo="Factoring 1 386"}
$$
\begin{array}{r|l}
1386 & 2 \\
693 & 3 \\
231 & 3 \\
77 & 7 \\
11 & 11 \\
1 &
\end{array}
$$
The number $1\,386$ is even, so dividing by $2$ gives $693$. The digits of $693$ add up to $18$, so $693$ is divisible by $3$ and $693 : 3 = 231$. The digit sum of $231$ is also a multiple of $3$, namely $6$, and $231 : 3 = 77$. Finally, $77 = 7 \cdot 11$, so $1\,386 = 2 \cdot 3^2 \cdot 7 \cdot 11$.
:::

## Greatest common divisor

:::definizione{#massimo-comune-divisore titolo="Greatest common divisor"}
A **common divisor** of two or more numbers is a number that divides all of them. The **greatest common divisor** of two or more numbers is the largest of their common divisors. The greatest common divisor of $a$ and $b$ is denoted by $\operatorname{MCD}(a, b)$.

For example, the divisors of $12$ are $1, 2, 3, 4, 6, 12$, and the divisors of $18$ are $1, 2, 3, 6, 9, 18$. The common divisors are $1, 2, 3, 6$, so $\operatorname{MCD}(12, 18) = 6$. The greatest common divisor is used to divide different quantities into equal parts that are as large as possible.
:::

::::teorema{#regola-mcd titolo="Finding the GCD by prime factorization"}
The greatest common divisor of two or more numbers is the product of just the prime factors *common* to all the factorizations, each raised to its *smallest* exponent.

For example, $60 = 2^2 \cdot 3 \cdot 5$ and $84 = 2^2 \cdot 3 \cdot 7$. The common factors are $2$ and $3$. The factor $2$ has exponent $2$ in both, and $3$ has exponent $1$. Therefore
$$
\operatorname{MCD}(60, 84) = 2^2 \cdot 3 = 12 .
$$
For large numbers, this method avoids listing all the divisors.

:::dimostrazione
A divisor of $60$ is obtained by multiplying *some* of the prime factors of $60$. For example, $10 = 2 \cdot 5$ and $12 = 2^2 \cdot 3$ are divisors of $60$. Thus a divisor of $60$ contains only the factors $2$, $3$, and $5$, with $2$ appearing at most twice. A common divisor of $60$ and $84$ can contain only the factors present in both factorizations, namely $2$ and $3$. Each can appear no more often than in the number that has fewer copies of it. The greatest common divisor is obtained by taking all these factors, giving $2^2 \cdot 3 = 12$.
:::
::::

:::esempio{titolo="GCD of three numbers"}
We calculate $\operatorname{MCD}(90, 150, 210)$. The prime factorizations are
$$
90 = 2 \cdot 3^2 \cdot 5, \qquad 150 = 2 \cdot 3 \cdot 5^2, \qquad 210 = 2 \cdot 3 \cdot 5 \cdot 7 .
$$
The factors common to all three are $2$, $3$, and $5$. The factor $7$ appears only in $210$, so it does not enter the GCD. The smallest exponent of $3$ is $1$ because $3$ appears with exponent $1$ in $150$ and $210$. For the same reason, $5$ is also taken with exponent $1$. Therefore $\operatorname{MCD}(90, 150, 210) = 2 \cdot 3 \cdot 5 = 30$.
:::

## Least common multiple

:::definizione{#minimo-comune-multiplo titolo="Least common multiple"}
A **common multiple** of two or more numbers is a number that is a multiple of all of them. The **least common multiple** of two or more numbers other than $0$ is the smallest of their common multiples other than $0$. The least common multiple of $a$ and $b$ is denoted by $\operatorname{mcm}(a, b)$.

For example, the multiples of $4$ are $0, 4, 8, 12, 16, 20, 24, \dots$, and the multiples of $6$ are $0, 6, 12, 18, 24, \dots$. The common multiples other than $0$ are $12, 24, 36, \dots$, so $\operatorname{mcm}(4, 6) = 12$. We exclude $0$ because it is a multiple of every number. The common multiples we found are precisely the multiples of $12$, and in general the common multiples of two or more numbers are the multiples of their least common multiple. The least common multiple is used for events that repeat at regular intervals and for adding fractions, as explained in the chapter on fractions.

::grafico{assi=0 uguale=1 linee="0,2 25.5,2;25,2.3 25.5,2 25,1.7;0,0 25.5,0;25,0.3 25.5,0 25,-0.3" punti="0,2,pieno;4,2,pieno;8,2,pieno;12,2,pieno;16,2,pieno;20,2,pieno;24,2,pieno;0,0,pieno;6,0,pieno;12,0,pieno;18,0,pieno;24,0,pieno" segmenti="0,0,0,2;12,0,12,2;24,0,24,2" etichette="-0.3,2.6,0;3.7,2.6,4;7.7,2.6,8;11.4,2.6,12;15.4,2.6,16;19.4,2.6,20;23.4,2.6,24;-0.3,-0.9,0;5.7,-0.9,6;11.4,-0.9,12;17.4,-0.9,18;23.4,-0.9,24;-8,1.8,multiples of 4;-8,-0.2,multiples of 6" xmin=-8.5 xmax=26 ymin=-1.8 ymax=3.4 titolo="The multiples of $4$ (top) and the multiples of $6$ (bottom): the first common multiples other than $0$ are $12$ and $24$, and the smallest is $\operatorname{mcm}(4, 6) = 12$"}

:::

::::teorema{#regola-mcm titolo="Finding the LCM by prime factorization"}
The least common multiple of two or more numbers is the product of all the prime factors in their factorizations, *both shared and unshared*, each taken only once with its *largest* exponent.

For $60 = 2^2 \cdot 3 \cdot 5$ and $84 = 2^2 \cdot 3 \cdot 7$, the factors that appear are $2$, $3$, $5$, and $7$. The largest exponent of $2$ is $2$, and the others have exponent $1$. Therefore
$$
\operatorname{mcm}(60, 84) = 2^2 \cdot 3 \cdot 5 \cdot 7 = 420 .
$$

:::dimostrazione
The prime factorization of a multiple of $60$ must contain all the factors of $60$, namely $2^2$, $3$, and $5$. A multiple of $84$ must contain $2^2$, $3$, and $7$. A common multiple must therefore contain $2^2$, $3$, $5$, and $7$, and the smallest one is the one containing no other factors, namely $2^2 \cdot 3 \cdot 5 \cdot 7 = 420$. Indeed, $420 = 60 \cdot 7$ and $420 = 84 \cdot 5$.
:::
::::

:::teorema{#prodotto-mcd-mcm titolo="Product of the GCD and LCM"}
For two natural numbers $a$ and $b$ other than $0$, we have
$$
\operatorname{MCD}(a, b) \cdot \operatorname{mcm}(a, b) = a \cdot b .
$$
For $60$ and $84$, we have $12 \cdot 420 = 5\,040$ and also $60 \cdot 84 = 5\,040$. The rule holds because each prime factor appears in the GCD with its smaller exponent and in the LCM with its larger exponent, so in their product it appears with the sum of the two exponents, just as in the product $a \cdot b$. The factor $5$, for example, appears in $60$ and does not appear in $84$. It is absent from the GCD and appears once in the LCM, just as in $60 \cdot 84$. The rule lets us check calculations or find the LCM from the GCD. For example, $\operatorname{MCD}(12, 18) = 6$, so $\operatorname{mcm}(12, 18) = \dfrac{12 \cdot 18}{6} = 36$.
:::

:::attenzione
The rule holds for *two* numbers. For three numbers, the product of the GCD and LCM generally differs from the product of the numbers. For $2$, $4$, and $8$, we have $\operatorname{MCD} = 2$ and $\operatorname{mcm} = 8$, so $2 \cdot 8 = 16$, whereas $2 \cdot 4 \cdot 8 = 64$.
:::

## Coprime numbers

:::definizione{#numeri-primi-tra-loro titolo="Coprime numbers"}
Two natural numbers are called **coprime** if their greatest common divisor is $1$, that is, if their only common divisor is $1$.

For example, $8 = 2^3$ and $15 = 3 \cdot 5$ are coprime because their prime factorizations have no common factors. In contrast, $14 = 2 \cdot 7$ and $21 = 3 \cdot 7$ are not coprime because $\operatorname{MCD}(14, 21) = 7$. Two coprime numbers have GCD $1$, so the rule for the product of the GCD and LCM gives $\operatorname{mcm}(a, b) = a \cdot b$. For example, $\operatorname{mcm}(8, 15) = 120$.
:::

:::attenzione
Two coprime numbers can both be composite. The numbers $8$ and $15$ are composite, yet they are coprime. Two distinct primes, such as $5$ and $13$, are always coprime because the only divisors of each are $1$ and the number itself.
:::

:::osservazione{#consecutivi-primi-tra-loro titolo="Consecutive numbers"}
Two consecutive numbers, such as $27$ and $28$, are always coprime. A common divisor of $27$ and $28$ also divides their difference by the property of differences of multiples, and that difference is $28 - 27 = 1$. Since the only divisor of $1$ is $1$, the GCD is $1$. Indeed, $27 = 3^3$ and $28 = 2^2 \cdot 7$ have no common factors.
:::

## Problems involving the GCD and LCM

:::osservazione{#problemi-con-il-mcd titolo="Problems involving the GCD"}
The greatest common divisor solves problems in which different quantities are divided into *equal* parts that are as large as possible, with nothing left over.

A rectangular floor measures $480$ cm by $360$ cm and is to be covered with the largest possible identical square tiles without cutting any of them. The side length of a tile must be a divisor of $480$ so that a whole number of tiles fits along the longer side, and it must also be a divisor of $360$ for the shorter side. The largest possible side length is therefore $\operatorname{MCD}(480, 360)$. Since $480 = 2^5 \cdot 3 \cdot 5$ and $360 = 2^3 \cdot 3^2 \cdot 5$, we have
$$
\operatorname{MCD}(480, 360) = 2^3 \cdot 3 \cdot 5 = 120 .
$$
The tiles have side length $120$ cm. There are $480 : 120 = 4$ tiles along the longer side and $360 : 120 = 3$ along the shorter side, so $4 \cdot 3 = 12$ tiles are needed.

::grafico{assi=0 uguale=1 poligoni="0,0 8,0 8,6 0,6" linee="0,0 8,0 8,6 0,6 0,0" segmenti="2,0,2,6;4,0,4,6;6,0,6,6;0,2,8,2;0,4,8,4" etichette="3.3,-0.8,480 cm;-2.3,2.9,360 cm;0.15,6.35,120 cm" xmin=-2.6 xmax=8.5 ymin=-1.4 ymax=7 titolo="The floor measuring $480$ cm by $360$ cm covered by $4 \cdot 3 = 12$ square tiles of side length $\operatorname{MCD}(480, 360) = 120$ cm"}

Similarly, $36$ pens and $48$ pencils can be divided among at most $\operatorname{MCD}(36, 48) = 12$ identical pencil cases, each with $36 : 12 = 3$ pens and $48 : 12 = 4$ pencils.
:::

:::osservazione{#problemi-con-il-mcm titolo="Problems involving the LCM"}
The least common multiple solves problems in which two or more events repeat at regular intervals and we want to know when they will happen *together* again, or problems that ask for the smallest quantity that can be obtained using different package sizes.

Luca works the night shift every $6$ days and Sara every $10$ days, and both are working tonight. Luca's shifts fall $6, 12, 18, 24, 30, \dots$ days from now, that is, at multiples of $6$ days. Sara's fall at multiples of $10$ days. The first day they work together again therefore corresponds to the smallest common multiple. Since $6 = 2 \cdot 3$ and $10 = 2 \cdot 5$, we have $\operatorname{mcm}(6, 10) = 2 \cdot 3 \cdot 5 = 30$, and their next shared shift is in $30$ days.

::grafico{assi=0 uguale=1 linee="0,2 31.5,2;31,2.3 31.5,2 31,1.7;0,0 31.5,0;31,0.3 31.5,0 31,-0.3" punti="0,2,pieno;6,2,pieno;12,2,pieno;18,2,pieno;24,2,pieno;30,2,pieno;0,0,pieno;10,0,pieno;20,0,pieno;30,0,pieno" segmenti="0,0,0,2;30,0,30,2" etichette="-0.3,2.6,0;5.7,2.6,6;11.4,2.6,12;17.4,2.6,18;23.4,2.6,24;29.4,2.6,30;-0.3,-0.9,0;9.4,-0.9,10;19.4,-0.9,20;29.4,-0.9,30;-6,1.8,Luca;-6,-0.2,Sara" xmin=-6.5 xmax=32 ymin=-1.8 ymax=3.4 titolo="Luca's night shifts (every $6$ days) and Sara's (every $10$ days): their shifts coincide again after $\operatorname{mcm}(6, 10) = 30$ days"}

The LCM is greater than or equal to each of the given numbers, and the GCD is less than or equal to each. This lets us check whether the answer to a problem makes sense.
:::
