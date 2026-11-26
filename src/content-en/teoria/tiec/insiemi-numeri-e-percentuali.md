---
titolo: Sets, numbers, and percentages
sommario: Set operations and counting with Venn diagrams, number sets, terminating and repeating decimals, comparisons of real numbers, inequalities, absolute value, the GCD and LCM, and percentages, with methods for answering TIEC questions quickly.
---

## Sets and set operations

:::definizione{#insieme titolo="Sets, membership, and the empty set"}
A **set** is a collection of objects, called elements, for which it is possible to determine unambiguously whether a given object belongs to the collection. If $x$ is an element of the set $A$, we write $x \in A$ and read it as “$x$ belongs to $A$.” Otherwise, we write $x \notin A$. There are two ways to describe a set.

- List its elements in braces, as in $A = \{1, 2, 3, 6\}$.
- Specify the property that characterizes its elements, as in $A = \{x \in \mathbb{N} : x \text{ is a divisor of } 6\}$.

The two expressions denote the same set. The set with no elements is called the **empty set** and is denoted by $\varnothing$. For example, the set of natural numbers less than $0$ is empty. The number of elements of a finite set $A$ is denoted by $|A|$. For the set of divisors of $6$, we have $|A| = 4$.
:::

:::definizione{#sottoinsieme titolo="Subsets"}
A set $B$ is a **subset** of $A$, written $B \subseteq A$, if every element of $B$ also belongs to $A$. For example, $\{2, 6\} \subseteq \{1, 2, 3, 6\}$, whereas $\{2, 4\}$ is not a subset of $\{1, 2, 3, 6\}$ because $4$ is not a divisor of $6$. The empty set and $A$ itself are subsets of $A$. This relation lets us compare sets described in different ways. For example, the set of multiples of $4$ is a subset of the set of even numbers because every multiple of $4$ is even.
:::

:::definizione{#unione-intersezione titolo="Union and intersection"}
Given two sets $A$ and $B$, we define the following operations.

- The **union** $A \cup B$ is the set of elements that belong to $A$ or to $B$ (or to both).
- The **intersection** $A \cap B$ is the set of elements that belong to both $A$ and $B$.

For $A = \{1, 2, 3, 6\}$ and $B = \{2, 4, 6, 8\}$, we have $A \cup B = \{1, 2, 3, 4, 6, 8\}$ and $A \cap B = \{2, 6\}$. Each element is listed only once in the union, even if it belongs to both sets. If $A \cap B = \varnothing$, the sets are called **disjoint**.

::venn{zone="a,ab,b" nomi="A,B" elementi="a:1,3;ab:2,6;b:4,8" titolo="The entire shaded region is the union $A \cup B$. The numbers $2$ and $6$ in the overlap form the intersection $A \cap B$."}

:::

:::definizione{#differenza-complementare titolo="Set difference and complement"}
The **set difference** $A \setminus B$ is the set of elements of $A$ that do *not* belong to $B$. For the sets in the previous example, $A \setminus B = \{1, 3\}$ and $B \setminus A = \{4, 8\}$, so in general $A \setminus B$ and $B \setminus A$ are different sets.

Suppose all the sets under consideration are subsets of a fixed set $U$ called the **universal set**. The complement of $A$ is the set $\overline{A} = U \setminus A$ of elements of $U$ that do not belong to $A$. For $U = \{1, 2, \dots, 8\}$ and $A = \{1, 2, 3, 6\}$, the complement is $\overline{A} = \{4, 5, 7, 8\}$. The complement of a union is the intersection of the complements:
$$
\overline{A \cup B} = \overline{A} \cap \overline{B},
\qquad
\overline{A \cap B} = \overline{A} \cup \overline{B} .
$$
The first equality holds because an element lies outside the union exactly when it belongs neither to $A$ nor to $B$. The second equality can be read in the same way.

::venn{zone="b,u" nomi="A,B" universo=1 titolo="The complement $\overline{A}$ is the part of the universal set $U$ outside $A$, shown shaded in the figure."}

:::

## Counting with Venn diagrams

::::teorema{#cardinalita-unione titolo="Number of elements in a union"}
If $A$ and $B$ are finite sets, then
$$
|A \cup B| = |A| + |B| - |A \cap B| .
$$
This formula is useful for counting people in a group with two characteristics. In a class of $28$ students, $16$ play soccer, $10$ play volleyball, and $5$ play both sports. There are $16 + 10 - 5 = 21$ students who play at least one of the two sports, so $28 - 21 = 7$ play neither.

:::dimostrazione
In the sum $|A| + |B|$, each element of $A \cap B$ is counted twice, once as an element of $A$ and once as an element of $B$. Every other element is counted once. Subtracting $|A \cap B|$ leaves each element of the union counted exactly once.
:::
::::

:::esempio{titolo="The four regions of the diagram"}
A Venn diagram with two sets inside a universal set $U$ has four regions. The elements in $A$ only form $A \setminus B$. The overlap is $A \cap B$. The elements in $B$ only form $B \setminus A$, and the elements outside both sets form $\overline{A \cup B}$. When answering a question, it helps to fill in the intersection first. For the class of $28$ students, the counts are as follows.

- There are $5$ students in the intersection.
- $16 - 5 = 11$ students play soccer only.
- $10 - 5 = 5$ students play volleyball only.
- $28 - 11 - 5 - 5 = 7$ students play neither sport.

As a check, the counts in the four regions must add up to $28$.

::venn{zone="a,ab,b" nomi="C,P" universo=1 elementi="a:11;ab:5;b:5;u:7" titolo="In a class of $28$ students, $C$ is the set of soccer players and $P$ the set of volleyball players. Of the students, $11$ play soccer only, $5$ play both sports, $5$ play volleyball only, and $7$ play neither."}

:::

:::attenzione
The number of elements in the union is *not* the sum $|A| + |B|$ unless the sets are disjoint. If $16$ students play soccer and $10$ play volleyball, the total is $26$ only if no one plays both. If $5$ students play both, then $21$ students play at least one sport.
:::

## Number sets and the real number line

:::definizione{#insiemi-numerici titolo="Number sets"}
The test uses four number sets, each contained in the next.
$$
\mathbb{N} \subseteq \mathbb{Z} \subseteq \mathbb{Q} \subseteq \mathbb{R} .
$$

- $\mathbb{N} = \{0, 1, 2, 3, \dots\}$ is the set of **natural numbers**.
- $\mathbb{Z} = \{\dots, -2, -1, 0, 1, 2, \dots\}$ is the set of **integers**, which includes the positive and negative integers and zero.
- $\mathbb{Q}$ is the set of **rational numbers**, numbers that can be written as a fraction $\dfrac{m}{n}$ with $m \in \mathbb{Z}$ and $n \in \mathbb{Z}$, $n \neq 0$.
- $\mathbb{R}$ is the set of **real numbers**. It contains the rational numbers as well as irrational numbers, such as $\sqrt{2}$ and $\pi$, which cannot be written as fractions of integers.

Moving to a larger set makes it possible to perform an operation whose result need not belong to the preceding set. The subtraction $3 - 5$ has no result in $\mathbb{N}$ but does have one in $\mathbb{Z}$. The division $3 : 5$ has no result in $\mathbb{Z}$, but its result in $\mathbb{Q}$ is $\dfrac{3}{5}$.
:::

:::definizione{#retta-reale-intervalli titolo="The real number line and intervals"}
On a line, choose a point to represent $0$, a positive direction, and a segment of unit length. Each real number then corresponds to a point on the line and each point to a real number, so this oriented line is called the **real number line**. Of two numbers, the one farther to the left is smaller.

Sets of real numbers between two endpoints are called **intervals**. A square bracket includes the endpoint and a parenthesis excludes it:
$$
[2, 5] = \{x \in \mathbb{R} : 2 \leq x \leq 5\},
\qquad
(2, 5] = \{x \in \mathbb{R} : 2 < x \leq 5\},
\qquad
[0, +\infty) = \{x \in \mathbb{R} : x \geq 0\} .
$$
Intervals are commonly used to write the solutions of an inequality. The solutions of $x - 1 > 2$ are the numbers in the interval $(3, +\infty)$.

::grafico{assi=0 uguale=1 linee="-3.5,0 4.6,0;4.35,0.15 4.6,0 4.35,-0.15;-3,-0.1 -3,0.1;-2,-0.1 -2,0.1;-1,-0.1 -1,0.1;0,-0.1 0,0.1;1,-0.1 1,0.1;2,-0.1 2,0.1;3,-0.1 3,0.1;4,-0.1 4,0.1" punti="-2,0,pieno;0.5,0,pieno;1.414,0,pieno;3.1416,0,pieno" etichette="-3.12,-0.5,−3;-2.12,-0.5,−2;-1.12,-0.5,−1;-0.07,-0.5,0;0.93,-0.5,1;1.93,-0.5,2;2.93,-0.5,3;3.93,-0.5,4;-2.2,0.35,−2;0.3,0.35,½;1.25,0.35,√2;3,0.35,π" xmin=-3.8 xmax=4.9 ymin=-0.9 ymax=0.8 titolo="The integer $-2$, the rational number $\dfrac{1}{2}$, and the irrational numbers $\sqrt{2} \approx 1.41$ and $\pi \approx 3.14$ on the real number line."}

:::

## Decimal representations and repeating decimals

:::definizione{#numeri-decimali titolo="Terminating and repeating decimals"}
Dividing the numerator of a fraction by its denominator gives a decimal that can take one of two forms.

- **Terminating decimal**. The division ends, as in $\dfrac{3}{8} = 0.375$.
- **Repeating decimal**. From some point on, a block of digits called the **repeating block** repeats indefinitely, as in $\dfrac{4}{11} = 0.363636\ldots = 0.\overline{36}$. The digits after the decimal point that precede the repeating block form the nonrepeating part. In $\dfrac{1}{6} = 0.1\overline{6}$, the nonrepeating part is $1$ and the repeating block is $6$.

A fraction in lowest terms has a terminating decimal expansion if and only if its denominator has no prime factors other than $2$ and $5$. This holds because a terminating decimal is a fraction with denominator $10$, $100$, $1000$, and so on, and these powers of $10$ have only the prime factors $2$ and $5$. For example, $\dfrac{7}{40}$ is a terminating decimal because $40 = 2^3 \cdot 5$, whereas $\dfrac{7}{30}$ is a repeating decimal because $30$ contains the factor $3$.
:::

::::teorema{#frazione-generatrice titolo="Writing a repeating decimal as a fraction"}
Every repeating decimal is rational. The fraction it represents can be found as follows.

- For the numerator, write the number without the decimal point or the bar over the repeating block, then subtract the number formed by the digits that precede the block.
- For the denominator, write one $9$ for each digit in the repeating block, followed by one $0$ for each digit in the nonrepeating part after the decimal point.

For example,
$$
0.\overline{36} = \frac{36}{99} = \frac{4}{11},
\qquad
1.2\overline{3} = \frac{123 - 12}{90} = \frac{111}{90} = \frac{37}{30} .
$$
This rule lets us calculate with repeating decimals and compare them with fractions. One special case is $0.\overline{9} = \dfrac{9}{9} = 1$.

:::dimostrazione
Let $x = 0.\overline{36} = 0.3636\ldots$. Multiplying by $100$ moves the decimal point two places and gives $100x = 36.3636\ldots$. Subtracting the first equation from the second cancels their fractional parts, so $99x = 36$ and $x = \dfrac{36}{99}$. If there is a nonrepeating part after the decimal point, first multiply by $10$ once for each digit in that part. This accounts for the zeros in the denominator.
:::
::::

:::attenzione
A repeating decimal is *not* equal to the terminating decimal obtained by cutting off the repeating digits. For example, $0.\overline{3} = \dfrac{1}{3}$, whereas $0.33 = \dfrac{33}{100}$. The difference is small, but the two forms lead to different answers when the choices are written as fractions.
:::

## Ordering numbers and inequalities

:::teorema{#confronto-frazioni titolo="Comparing fractions"}
If $b > 0$ and $d > 0$, then
$$
\frac{a}{b} < \frac{c}{d} \iff a \cdot d < b \cdot c .
$$
To obtain the rule, write both fractions with the common denominator $b \cdot d$. They become $\dfrac{a \cdot d}{b \cdot d}$ and $\dfrac{b \cdot c}{b \cdot d}$, and when two fractions have the same positive denominator, the one with the smaller numerator is smaller. To compare $\dfrac{5}{7}$ and $\dfrac{3}{4}$, calculate $5 \cdot 4 = 20$ and $7 \cdot 3 = 21$. Since $20 < 21$, we have $\dfrac{5}{7} < \dfrac{3}{4}$. Alternatively, write each fraction as a decimal to two or three places, giving $\dfrac{5}{7} \approx 0.714$ and $\dfrac{3}{4} = 0.75$.
:::

:::teorema{#confronto-radici-potenze titolo="Comparing roots and powers"}
Two rules apply to positive numbers.

- Square roots preserve order. If $0 \leq a < b$, then $\sqrt{a} < \sqrt{b}$. To compare $2\sqrt{3}$ and $3\sqrt{2}$, bring the factors inside the radicals to get $2\sqrt{3} = \sqrt{4 \cdot 3} = \sqrt{12}$ and $3\sqrt{2} = \sqrt{18}$. Thus $2\sqrt{3} < 3\sqrt{2}$.
- Raising positive bases to the same positive exponent preserves their order. If $0 < a < b$ and $n$ is a positive integer, then $a^n < b^n$. To compare $2^{30}$ and $3^{20}$, write them with the same exponent as $2^{30} = (2^3)^{10} = 8^{10}$ and $3^{20} = (3^2)^{10} = 9^{10}$. Since $8 < 9$, it follows that $2^{30} < 3^{20}$.

Both rules hold because, for positive numbers, a larger base also gives a larger product when it is used repeatedly as a factor. The chapter on powers, exponentials, and logarithms returns to the comparison of powers.
:::

:::teorema{#proprieta-disuguaglianze titolo="Properties of inequalities"}
Let $a$, $b$, and $c$ be real numbers with $a < b$.

- Adding the same number to both sides preserves the direction of the inequality, so $a + c < b + c$.
- Multiplying by a positive number preserves the direction of the inequality. If $c > 0$, then $a c < b c$.
- Multiplying by a negative number reverses the direction of the inequality. If $c < 0$, then $a c > b c$.
- If $a$ and $b$ are positive, their reciprocals are in the reverse order, $\dfrac{1}{a} > \dfrac{1}{b}$, and their squares are in the same order, $a^2 < b^2$.

The third property holds because multiplying by a negative number reverses the positions of numbers relative to zero on the number line. For example, $2 < 5$ gives $-2 > -5$. The same rules apply to division because dividing is equivalent to multiplying by the reciprocal. These properties are used to solve inequalities, as discussed in the chapter on equations, inequalities, and systems.
:::

:::attenzione
Without the assumption that the numbers are positive, the last property does *not* hold in general. For example, $-3 < 2$, yet $(-3)^2 = 9 > 4 = 2^2$. Likewise, $-2 < 1$, yet $\dfrac{1}{-2} < 1$ because the two reciprocals have different signs.
:::

## Absolute value

:::definizione{#valore-assoluto titolo="Absolute value"}
The **absolute value** of a real number $x$ is
$$
|x| =
\begin{cases}
x & \text{if } x \geq 0 \\
-x & \text{if } x < 0
\end{cases}
$$
and represents the distance from $x$ to $0$ on the real number line. For example, $|5| = 5$ and $|-5| = -(-5) = 5$ because the two numbers are the same distance from $0$. Absolute value is never negative and equals $0$ only when $x = 0$. We also have $|a \cdot b| = |a| \cdot |b|$ and $\sqrt{x^2} = |x|$.

More generally, $|x - a|$ is the **distance** between $x$ and $a$. This gives two rules that hold for $r > 0$:
$$
|x - a| < r \iff a - r < x < a + r,
\qquad
|x - a| > r \iff x < a - r \;\vee\; x > a + r .
$$
The first says that the numbers whose distance from $a$ is less than $r$ form the interval centered at $a$ that extends $r$ units in either direction. The second describes the numbers outside that interval. For example, $|x - 3| < 2$ is equivalent to $1 < x < 5$.

::grafico{assi=0 uguale=1 poligoni="1,-0.07 5,-0.07 5,0.07 1,0.07" linee="-0.5,0 7.6,0;7.35,0.15 7.6,0 7.35,-0.15;0,-0.1 0,0.1;1,-0.1 1,0.1;2,-0.1 2,0.1;3,-0.1 3,0.1;4,-0.1 4,0.1;5,-0.1 5,0.1;6,-0.1 6,0.1;7,-0.1 7,0.1" punti="1,0,vuoto;5,0,vuoto;3,0,pieno" etichette="-0.07,-0.5,0;0.93,-0.5,1;1.93,-0.5,2;2.93,-0.5,3;3.93,-0.5,4;4.93,-0.5,5;5.93,-0.5,6;6.93,-0.5,7;1.75,0.4,2;3.85,0.4,2" xmin=-0.8 xmax=7.9 ymin=-0.9 ymax=0.8 titolo="Numbers satisfying $|x - 3| < 2$ are less than $2$ units from $3$. They form the interval $(1, 5)$, which excludes its endpoints."}

:::

:::esempio{titolo="An acceptable price range"}
A company considers the price $p$ of a raw material acceptable if it differs from $50$ euros by at most $3$ euros, that is, if $|p - 50| \leq 3$. The distance between $p$ and $50$ is at most $3$, so the acceptable prices satisfy $47 \leq p \leq 53$. A price of $46.50$ euros is outside the range because $|46.50 - 50| = 3.50 > 3$.
:::

## Prime factorization, GCD, and LCM

:::teorema{#fattori-primi titolo="Prime factorization"}
A natural number greater than $1$ is **prime** if its only positive divisors are $1$ and itself. Examples are $2$, $3$, $5$, $7$, $11$, $13$, and so on. Every natural number greater than $1$ can be written uniquely, up to the order of the factors, as a product of primes. To find its factorization, divide by primes in increasing order until the quotient is $1$:
$$
360 = 2 \cdot 180 = 2^2 \cdot 90 = 2^3 \cdot 45 = 2^3 \cdot 3^2 \cdot 5 .
$$
Divisibility tests shorten the process. A number is divisible by $2$ if its last digit is even, by $3$ if the sum of its digits is divisible by $3$, and by $5$ if its last digit is $0$ or $5$. Prime factorization is used to find the GCD and LCM and to reduce fractions.
:::

:::definizione{#mcd-mcm titolo="Greatest common divisor and least common multiple"}
The **greatest common divisor** (GCD), denoted by $\mathrm{MCD}(a, b)$ in the formulas, is the largest number that divides both $a$ and $b$. The **least common multiple** (LCM), denoted by $\mathrm{mcm}(a, b)$ in the formulas, is the smallest positive multiple of both $a$ and $b$. Both can be found from the prime factorizations.

- The GCD is the product of the *common* prime factors, each raised to the smaller exponent.
- The LCM is the product of *all* the prime factors that occur, each raised to the larger exponent.

With $84 = 2^2 \cdot 3 \cdot 7$ and $120 = 2^3 \cdot 3 \cdot 5$, we obtain
$$
\mathrm{MCD}(84, 120) = 2^2 \cdot 3 = 12,
\qquad
\mathrm{mcm}(84, 120) = 2^3 \cdot 3 \cdot 5 \cdot 7 = 840 .
$$
The identity $\mathrm{MCD}(a, b) \cdot \mathrm{mcm}(a, b) = a \cdot b$ always holds. Indeed, $12 \cdot 840 = 10\,080 = 84 \cdot 120$. This gives a quick way to check the result.
:::

:::osservazione{#problemi-mcd-mcm titolo="When to use the GCD and when to use the LCM"}
The wording of a problem indicates which number is needed.

- The **LCM** answers questions about recurring events. If two products are restocked every $12$ and $18$ days, respectively, and both are restocked today, they will next be restocked together in $\mathrm{mcm}(12, 18) = 36$ days.
- The **GCD** answers questions that ask for the largest possible number of equal groups. For example, $48$ pens and $36$ pencils can be distributed without leftovers into at most $\mathrm{MCD}(48, 36) = 12$ identical packages, each containing $4$ pens and $3$ pencils.

The LCM of two denominators is also the least common denominator for adding two fractions.
:::

## Percentages

:::definizione{#percentuale titolo="Percentage"}
A **percentage** is a fraction with denominator $100$. The expression $p\%$ means $\dfrac{p}{100}$. Therefore $p\%$ of a number $N$ is
$$
\frac{p}{100} \cdot N .
$$
A question gives two of the three quantities, $p$, $N$, and the part $P = \dfrac{p}{100} \cdot N$, and asks for the third.

- $15\%$ of $240$ is $\dfrac{15}{100} \cdot 240 = 36$.
- $18$ is $p\%$ of $72$, where $p = \dfrac{18}{72} \cdot 100 = 25$.
- $30$ is $12\%$ of $N = \dfrac{30 \cdot 100}{12} = 250$.

Some percentages correspond to simple fractions, such as $50\% = \dfrac{1}{2}$, $25\% = \dfrac{1}{4}$, $20\% = \dfrac{1}{5}$, and $10\% = \dfrac{1}{10}$. Recognizing them makes mental arithmetic easier. For example, $25\%$ of $360$ is one-quarter of $360$, or $90$.
:::

:::teorema{#aumenti-e-sconti titolo="Using a multiplier for increases and discounts"}
Increasing a value $V$ by $p\%$ means multiplying it by $1 + \dfrac{p}{100}$. Decreasing it by $p\%$ means multiplying it by $1 - \dfrac{p}{100}$. The number used as a factor is called the **multiplier**. To see why the rule holds, add the amount $\dfrac{p}{100} \cdot V$ to the value $V$ or subtract it, then factor out $V$ to obtain $V \cdot \left(1 \pm \dfrac{p}{100}\right)$.

A price of $160$ euros falls to $160 \cdot 0.65 = 104$ euros after a $35\%$ discount. A cost of $250$ euros rises to $250 \cdot 1.08 = 270$ euros after an $8\%$ increase. The multiplier gives the final value in a single multiplication.
:::

:::definizione{#variazione-percentuale titolo="Percent change"}
When a quantity changes from $V_1 > 0$ to $V_2$, its **percent change** is
$$
\frac{V_2 - V_1}{V_1} \cdot 100 .
$$
Always divide by the *initial* value. The change is positive for an increase and negative for a decrease. If revenue rises from $80\,000$ to $92\,000$ euros, the increase is $\dfrac{12\,000}{80\,000} \cdot 100 = 15\%$. If a price falls from $64$ to $48$ euros, the decrease is $\dfrac{16}{64} \cdot 100 = 25\%$.
:::

:::teorema{#variazioni-successive titolo="Successive percent changes"}
If a value undergoes two successive percent changes, multiply by both multipliers to obtain the final value. The second change applies to the value after the first change, so the multipliers must be multiplied and the percentages cannot be added. Successive discounts of $20\%$ and $10\%$ give a multiplier of $0.8 \cdot 0.9 = 0.72$, for an overall discount of $28\%$ rather than $30\%$.

::grafico{assi=0 uguale=1 poligoni="0,4 100,4 100,5.4 0,5.4;0,2 80,2 80,3.4 0,3.4;0,0 72,0 72,1.4 0,1.4" etichette="30,4.5,100 euros (initial price);25,2.5,80 euros (after −20%);22,0.5,72 euros (after −10%)" xmin=-5 xmax=110 ymin=-1 ymax=6.5 titolo="A price of $100$ euros receives a $20\%$ discount followed by a $10\%$ discount. The final price is $100 \cdot 0.8 \cdot 0.9 = 72$ euros, an overall discount of $28\%$."}

:::

:::attenzione
An increase and a decrease by the same percentage do *not* cancel out. A price of $100$ euros rises to $120$ euros after a $20\%$ increase and then falls to $120 \cdot 0.8 = 96$ euros after a $20\%$ decrease because the second $20\%$ applies to $120$. An increase of $25\%$ and a decrease of $20\%$ do cancel out because $1.25 \cdot 0.8 = 1$.
:::

:::teorema{#valore-iniziale titolo="Finding the initial value"}
Suppose a final value $V_f$ is obtained from an initial value $V$ with multiplier $k$, so that $V_f = V \cdot k$. Then
$$
V = \frac{V_f}{k} .
$$
Divide by the multiplier because division undoes multiplication. If a $20\%$ discount brings the price to $72$ euros, the initial price was $\dfrac{72}{0.8} = 90$ euros. Adding $20\%$ to $72$ euros would give $86.40$ euros, which is incorrect because the discount applied to $90$ euros, not to $72$.
:::

:::osservazione{#punti-percentuali titolo="Percentage points"}
When a quantity that changes is itself a percentage, such as an interest rate or a market share, the difference in **percentage points** is distinct from the percent change. If an interest rate rises from $2.5\%$ to $3\%$, the difference is $0.5$ percentage points, whereas the percent change is $\dfrac{3 - 2.5}{2.5} \cdot 100 = 20\%$. Both answers often appear among the choices.
:::

## Quick methods for multiple-choice questions

:::osservazione{#metodi-rapidi titolo="Quick methods"}
Each TIEC question has four choices, and the average time available is about one minute. Many questions in this chapter can be answered without doing the full calculation.

- **Estimate**. For example, $19.8\%$ of $4012$ is approximately $20\%$ of $4000$, or $800$. Usually only one choice is close to the estimate.
- **Eliminate choices**. A discounted price is below the original price, the number of elements of $A \cap B$ cannot exceed either $|A|$ or $|B|$, the GCD divides both numbers, and the LCM is a multiple of both. Choices that violate these conditions can be eliminated immediately.
- **Substitute values**. For a question about absolute value or an inequality, try a convenient number in the answer choices. For $|x + 1| \geq 3$, the value $x = 0$ is not a solution because $|0 + 1| = 1 < 3$, so eliminate choices that contain $x = 0$.
- **Check the decimal**. To check the fractional form of a repeating decimal, divide mentally. For instance, $\dfrac{4}{11} = 0.3636\ldots$ confirms $0.\overline{36}$.
- **Check the order of magnitude**. When comparing powers, use $2^{10} = 1024 \approx 10^3$, so $2^{30} \approx 10^9$.

For percentages, the **multiplier** reduces increases, discounts, and successive changes to a single product. Dividing by the same multiplier recovers the initial value.
:::
