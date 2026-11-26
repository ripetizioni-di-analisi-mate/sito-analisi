---
titolo: Numbers, fractions, and arithmetic
sommario: Evaluating expressions with integers, fractions, and decimals, finding the GCD and LCM, and using powers, roots, scientific notation, and rounding in multiple-choice questions.
---

## Number sets

:::definizione{#numeri-naturali-e-interi titolo="Natural numbers and integers"}
The **natural numbers** are the numbers used for counting, namely $0, 1, 2, 3, \ldots$, and their set is denoted by $\mathbb{N}$. The sum and product of two natural numbers are also natural numbers, but their difference need not be. For example, $3 - 5$ is not a natural number. This is why we introduce the **integers** $\ldots, -3, -2, -1, 0, 1, 2, 3, \ldots$, whose set is denoted by $\mathbb{Z}$. An integer has a sign and an **absolute value**, its magnitude without the sign. The absolute value of $-7$ is $7$, written $|-7| = 7$. Integers describe quantities that can go in either direction, such as a bank balance. An account holding $120$ euros that is charged $150$ euros has a balance of $120 - 150 = -30$ euros.
:::

:::definizione{#numeri-razionali titolo="Rational numbers"}
A **rational number** is a number that can be written as a fraction $\dfrac{a}{b}$, where $a$ and $b$ are integers and $b \neq 0$. The set of rational numbers is denoted by $\mathbb{Q}$. Every integer is rational, as illustrated by $5 = \dfrac{5}{1}$, and every number with finitely many digits after the decimal point is rational, as illustrated by $0.75 = \dfrac{75}{100} = \dfrac{3}{4}$. Each rational number occupies a point on the number line. Of two numbers, the one farther to the right is greater.

::grafico{assi=0 uguale=1 curve="1.2*cos(t),1.2*sin(t),0,6.2832;2.4*cos(t),2.4*sin(t),0,6.2832;3.6*cos(t),3.6*sin(t),0,6.2832" etichette="-0.3,0,ℕ;-0.4,1.8,ℤ;-0.4,3,ℚ;0.4,0.3,0;0.7,-0.6,5;-1.9,-0.6,−3;1.5,-2.9,0.75" punti="0.4,0,pieno;0.6,-0.5,pieno;-1.3,-0.9,pieno;1.4,-2.6,pieno" xmin=-4.2 xmax=4.2 ymin=-4 ymax=4 titolo="The number sets are nested: $\mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q}$"}

::grafico{assi=0 uguale=1 linee="-3.5,0 3.5,0;3.3,0.1 3.5,0 3.3,-0.1;-3,-0.08 -3,0.08;-2,-0.08 -2,0.08;-1,-0.08 -1,0.08;0,-0.08 0,0.08;1,-0.08 1,0.08;2,-0.08 2,0.08;3,-0.08 3,0.08" punti="-2,0,pieno;-0.5,0,pieno;0.75,0,pieno;2,0,pieno" etichette="-3.12,-0.4,−3;-2.12,-0.4,−2;-1.12,-0.4,−1;-0.05,-0.4,0;0.95,-0.4,1;1.95,-0.4,2;2.95,-0.4,3;-0.82,0.25,−0.5;0.5,0.25,0.75" xmin=-3.8 xmax=3.8 ymin=-0.7 ymax=0.6 titolo="On the number line, the number farther to the right is greater, so $-2 < -0.5 < 0.75 < 2$"}

:::

:::attenzione
Of two negative numbers, the one with the smaller absolute value is greater. For example, $-2 > -5$ even though $2 < 5$, because $-2$ lies to the right of $-5$ on the number line. A temperature that goes from $-2$ °C to $-5$ °C has therefore decreased.
:::

## Operations, signs, and expressions

:::teorema{#regole-dei-segni titolo="Rules of signs"}
For the product or quotient of two nonzero integers, the sign of the result depends only on the signs of the two numbers. A product with a zero factor is zero. Zero divided by a nonzero number is zero, and division by zero is undefined.

- If the two numbers have the same sign, the result is positive, as in $(-3) \cdot (-4) = 12$ and $\dfrac{-12}{-4} = 3$.
- If the two numbers have different signs, the result is negative, as in $(-3) \cdot 4 = -12$ and $\dfrac{12}{-4} = -3$.

Multiplying by $-1$ takes each number to its reflection across zero. Performing the operation twice returns it to its starting value, which is why $(-1) \cdot (-1) = 1$ and why the product of two negative numbers is positive. In a product of nonzero factors, the result is negative if there is an odd number of negative factors, so $(-1) \cdot (-2) \cdot (-3) = -6$. To add two numbers with different signs, subtract their absolute values. If the absolute values are equal, the sum is zero. Otherwise, the result has the sign of the number with the larger absolute value, as in $-7 + 3 = -4$. A minus sign in front of an expression reverses the sign of every term, so $10 - (3 - 8) = 10 - 3 + 8 = 15$.

::grafico{assi=0 uguale=1 linee="-8.5,0 3.5,0;3.3,0.15 3.5,0 3.3,-0.15;-8,-0.1 -8,0.1;-7,-0.1 -7,0.1;-6,-0.1 -6,0.1;-5,-0.1 -5,0.1;-4,-0.1 -4,0.1;-3,-0.1 -3,0.1;-2,-0.1 -2,0.1;-1,-0.1 -1,0.1;0,-0.1 0,0.1;1,-0.1 1,0.1;2,-0.1 2,0.1;3,-0.1 3,0.1" vettori="0,0.9,-7,0.9,−7;-7,1.8,-4,1.8,+3" segmenti="-7,0,-7,1.8;-4,0,-4,1.8" punti="-4,0,pieno" etichette="-7.2,-0.5,−7;-4.2,-0.5,−4;-0.05,-0.5,0" xmin=-9 xmax=4 ymin=-1 ymax=2.4 titolo="The sum $-7 + 3$ on the number line. Start at $0$, move $7$ units left and then $3$ right to reach $-4$"}
:::

:::teorema{#ordine-operazioni titolo="Order of operations"}
In an expression, evaluate powers first, then multiplication and division in the order they appear from left to right, and finally addition and subtraction, also from left to right. When grouping symbols are nested, work from the innermost group outward. In the usual arrangement, parentheses are inside square brackets, which are inside braces. This convention gives each expression a single value. For example,
$$
20 - 4 \cdot 3 = 20 - 12 = 8 ,
$$
whereas $(20 - 4) \cdot 3 = 48$.
:::

:::esempio{#espressioni-numeriche titolo="An expression with grouping symbols"}
Evaluate an expression with parentheses and square brackets:
$$
\begin{aligned}
30 - 2 \cdot [\,4 + 3 \cdot (5 - 7)\,] &= 30 - 2 \cdot [\,4 + 3 \cdot (-2)\,] \\[6pt]
&= 30 - 2 \cdot [\,4 - 6\,] \\[6pt]
&= 30 - 2 \cdot (-2) \\[6pt]
&= 30 + 4 = 34 .
\end{aligned}
$$
In the expression $4 + 3 \cdot (-2)$, multiplication comes before addition, and the product $-2 \cdot (-2)$ is positive by the rules of signs. Performing the subtraction $30 - 2$ first gives the incorrect result $28 \cdot (-2) = -56$.
:::

## Divisibility, GCD, and LCM

:::definizione{#multipli-e-divisori titolo="Multiples and divisors"}
A natural number $a$ is **divisible** by a natural number $b \neq 0$ if dividing $a$ by $b$ leaves a remainder of zero. In that case, $b$ is a **divisor** of $a$ and $a$ is a **multiple** of $b$. The number $36$ is divisible by $4$ because $36 = 4 \cdot 9$. It is not divisible by $5$ because $36 = 5 \cdot 7 + 1$ and the remainder is $1$. The divisors of $36$ are $1, 2, 3, 4, 6, 9, 12, 18, 36$, whereas there are infinitely many multiples of $4$.
:::

:::teorema{#criteri-divisibilita titolo="Divisibility tests"}
A natural number is divisible

- by $2$ if its last digit is even, that is, $0$, $2$, $4$, $6$, or $8$;
- by $3$ if the sum of its digits is divisible by $3$;
- by $4$ if the number formed by its last two digits is divisible by $4$;
- by $5$ if its last digit is $0$ or $5$;
- by $9$ if the sum of its digits is divisible by $9$;
- by $10$, $100$, or $1000$ if it ends in at least one, two, or three zeros, respectively;
- by $11$ if the difference between the sum of the digits in odd-numbered positions and the sum of the digits in even-numbered positions is a multiple of $11$, including zero.

These tests determine whether a division leaves a remainder of zero without carrying out the division. The tests for $3$ and $9$ work because $10$, $100$, $1000$, … are each $1$ more than a multiple of $9$. Therefore a number and the sum of its digits have the same remainder when divided by $9$ and the same remainder when divided by $3$. The digits of $5\,742$ add up to $18$, so it is divisible by $9$ and $3$. Its last two digits form $42$, which is not a multiple of $4$, so $5\,742$ is not divisible by $4$.
:::

:::definizione{#numeri-primi titolo="Prime numbers"}
A natural number greater than $1$ is **prime** if its only divisors are $1$ and the number itself. Otherwise it is **composite**. The prime numbers less than $50$ are
$$
2,\ 3,\ 5,\ 7,\ 11,\ 13,\ 17,\ 19,\ 23,\ 29,\ 31,\ 37,\ 41,\ 43,\ 47 .
$$
To determine whether a number $n$ is prime, try dividing it by each prime whose square is at most $n$. The test stops there because if $n = a \cdot b$ with $a \leq b$, then $a \cdot a \leq n$. For $97$, try $2$, $3$, $5$, and $7$, since $11^2 = 121 > 97$. None of these divisions leaves a remainder of zero, so $97$ is prime. By contrast, $91$ is composite because $91 = 7 \cdot 13$.
:::

:::teorema{#scomposizione titolo="Prime factorization"}
Every natural number greater than $1$ can be written in exactly one way, up to the order of the factors, as a product of primes. To find the factorization, divide the number by the smallest prime that divides it and repeat with the quotient until reaching $1$. Write repeated factors as powers, as in $2 \cdot 2 \cdot 2 = 2^3$:
$$
360 = 2 \cdot 180 = 2^2 \cdot 90 = 2^3 \cdot 45 = 2^3 \cdot 3 \cdot 15 = 2^3 \cdot 3^2 \cdot 5 .
$$
Prime factorization is used to find the GCD and LCM, reduce fractions, and count the divisors of a number.
:::

:::osservazione{#numero-divisori titolo="Number of divisors"}
If a number factors as $p^a \cdot q^b \cdot r^c$, where $p$, $q$, and $r$ are distinct primes, it has $(a + 1) \cdot (b + 1) \cdot (c + 1)$ divisors. Indeed, each divisor is formed by choosing how many times the factor $p$ occurs, from zero to $a$ times, giving $a + 1$ choices, and doing the same for $q$ and $r$. Since $360 = 2^3 \cdot 3^2 \cdot 5$, the divisors of $360$ are $4 \cdot 3 \cdot 2 = 24$.
:::

:::definizione{#mcd titolo="Greatest common divisor"}
The **greatest common divisor** (GCD) of two or more numbers, denoted here by $\operatorname{MCD}$, is the greatest number that divides all of them. To find it, factor the numbers into primes and multiply the *common* factors, each raised to its *smallest* exponent. For $90 = 2 \cdot 3^2 \cdot 5$ and $126 = 2 \cdot 3^2 \cdot 7$, the common factors are $2$ and $3^2$, so
$$
\operatorname{MCD}(90, 126) = 2 \cdot 3^2 = 18 .
$$
Two numbers whose GCD is $1$ are **relatively prime**, as are $8$ and $15$.
:::

:::definizione{#mcm titolo="Least common multiple"}
The **least common multiple** (LCM) of two or more numbers, denoted here by $\operatorname{mcm}$, is the smallest nonzero number that is a multiple of all of them. To find it, multiply *all the prime factors that occur in any of the numbers*, each raised to its *largest* exponent. For the same numbers, we obtain
$$
\operatorname{mcm}(90, 126) = 2 \cdot 3^2 \cdot 5 \cdot 7 = 630 .
$$
For two numbers, the relationship $\operatorname{MCD}(a, b) \cdot \operatorname{mcm}(a, b) = a \cdot b$ provides a way to check the calculation. We have $18 \cdot 630 = 11\,340$ and also $90 \cdot 126 = 11\,340$. The LCM of the denominators is also the common denominator used to add fractions.
:::

:::osservazione{#problemi-mcd-mcm titolo="GCD and LCM word problems"}
In a word problem, the question indicates which of the two numbers to find.

- Use the **LCM** for events that repeat at regular intervals when the question asks how long it takes for them to coincide again. Two couriers both visit an office today. One visits every $6$ days and the other every $8$ days, so they will visit together again after $\operatorname{mcm}(6, 8) = 24$ days.
- Use the **GCD** when different quantities are divided into the largest possible equal parts with nothing left over. Two ribbons measuring $90$ cm and $126$ cm are cut into equal pieces $\operatorname{MCD}(90, 126) = 18$ cm long, giving $5 + 7 = 12$ pieces in total.

The LCM is at least as large as each of the numbers, and the GCD is at most as large as each. This check therefore rules out choices that confuse the two.

::grafico{assi=0 uguale=1 linee="0,0 26,0;25.4,0.3 26,0 25.4,-0.3;0,2.5 26,2.5;25.4,2.8 26,2.5 25.4,2.2" punti="0,2.5,pieno;6,2.5,pieno;12,2.5,pieno;18,2.5,pieno;24,2.5,pieno;0,0,pieno;8,0,pieno;16,0,pieno;24,0,pieno" segmenti="24,0,24,2.5;0,0,0,2.5" etichette="-0.3,1.6,0;5.6,1.6,6;11.4,1.6,12;17.4,1.6,18;23.4,1.6,24;-0.3,-0.9,0;7.6,-0.9,8;15.4,-0.9,16;23.4,-0.9,24;-7.5,2.3,every 6 days;-7.5,-0.2,every 8 days" xmin=-8 xmax=27 ymin=-1.6 ymax=3.4 titolo="Visits by the two couriers coincide on day $0$ and again on day $24 = \operatorname{mcm}(6, 8)$"}

:::

## Fractions

:::definizione{#frazione titolo="Fraction"}
A **fraction** $\dfrac{a}{b}$, with $b \neq 0$, indicates that a whole has been divided into $b$ equal parts and that $a$ of them are taken. The number $a$ is the numerator and $b$ is the denominator. A fraction is *proper* if $a < b$, in which case it is less than $1$, as in $\dfrac{3}{5}$. It is *improper* if $a > b$, as in $\dfrac{7}{4} = 1 + \dfrac{3}{4}$. It is a *whole-number fraction* if $a$ is a multiple of $b$, as in $\dfrac{12}{4} = 3$, in which case it represents an integer. A fraction is also the result of dividing $a$ by $b$, so $\dfrac{3}{4} = 0.75$.
:::

:::teorema{#frazioni-equivalenti titolo="Equivalent fractions"}
Multiplying or dividing the numerator and denominator of a fraction by the same nonzero number gives an **equivalent** fraction, one with the same value, as in $\dfrac{3}{4} = \dfrac{6}{8} = \dfrac{75}{100}$. This works because if we double the number of parts, each part is half as large, and we take twice as many parts to get the same quantity. Dividing the numerator and denominator by their GCD **simplifies** the fraction, or reduces it to lowest terms. Since $\operatorname{MCD}(36, 48) = 12$, we have
$$
\frac{36}{48} = \frac{3 \cdot 12}{4 \cdot 12} = \frac{3}{4} .
$$

::grafico{assi=0 uguale=1 poligoni="0,1.6 3,1.6 3,2.6 0,2.6;0,0 3,0 3,1 0,1" linee="0,1.6 4,1.6 4,2.6 0,2.6 0,1.6;1,1.6 1,2.6;2,1.6 2,2.6;3,1.6 3,2.6;0,0 4,0 4,1 0,1 0,0;0.5,0 0.5,1;1,0 1,1;1.5,0 1.5,1;2,0 2,1;2.5,0 2.5,1;3,0 3,1;3.5,0 3.5,1" etichette="4.3,2.0,3 out of 4 parts;4.3,0.4,6 out of 8 parts" xmin=-0.4 xmax=7 ymin=-0.4 ymax=3 titolo="The same portion of the rectangle is $\dfrac{3}{4}$ and also $\dfrac{6}{8}$, so the two fractions are equivalent"}

:::

:::teorema{#confronto-frazioni titolo="Comparing fractions"}
Of two fractions with the same positive denominator, the one with the greater numerator is greater. For example, $\dfrac{5}{7} > \dfrac{3}{7}$. If the denominators differ, write them as positive denominators first, then use their LCM as the common denominator and compare the numerators. To compare $\dfrac{5}{6}$ and $\dfrac{7}{9}$, use the denominator $\operatorname{mcm}(6, 9) = 18$:
$$
\frac{5}{6} = \frac{15}{18},
\qquad
\frac{7}{9} = \frac{14}{18},
$$
so $\dfrac{5}{6} > \dfrac{7}{9}$. For positive denominators, we can also compare **cross products**: $\dfrac{a}{b} > \dfrac{c}{d}$ if and only if $a \cdot d > b \cdot c$, as we see by multiplying both sides by $b \cdot d$. In the example, $5 \cdot 9 = 45$ is greater than $6 \cdot 7 = 42$.
:::

:::teorema{#operazioni-frazioni titolo="Operations with fractions"}
- To add or subtract fractions, rewrite them with the least common denominator and add or subtract the numerators, as in $\dfrac{3}{4} + \dfrac{5}{6} = \dfrac{9}{12} + \dfrac{10}{12} = \dfrac{19}{12}$.
- To multiply fractions, multiply the numerators together and the denominators together, first canceling common factors between a numerator and a denominator wherever possible, as in $\dfrac{4}{9} \cdot \dfrac{15}{8} = \dfrac{1 \cdot 5}{3 \cdot 2} = \dfrac{5}{6}$.
- To divide fractions, multiply the first fraction by the **reciprocal** of the second, obtained by interchanging its numerator and denominator. The quotient of $\dfrac{2}{3}$ divided by $\dfrac{4}{9}$ is therefore $\dfrac{2}{3} \cdot \dfrac{9}{4} = \dfrac{3}{2}$.

Addition requires a common denominator because only parts of the same size can be added. Multiplication checks the division rule because $\dfrac{3}{2} \cdot \dfrac{4}{9} = \dfrac{2}{3}$.
:::

:::attenzione
The sum of two fractions is *not* found by adding the numerators and denominators separately. For example, $\dfrac{1}{2} + \dfrac{1}{2} = 1$, whereas adding the numerators and denominators separately would give $\dfrac{2}{4} = \dfrac{1}{2}$.
:::

## A fraction of a number

:::definizione{#frazione-di-un-numero titolo="A fraction of a number"}
The fraction $\dfrac{a}{b}$ of a number $N$ is the product $\dfrac{a}{b} \cdot N$. In practice, divide $N$ by the denominator to obtain the value of one part, and multiply the result by the numerator. Taking $\dfrac{3}{5}$ of $350$ euros gives
$$
\frac{350}{5} \cdot 3 = 70 \cdot 3 = 210 \text{ euros} .
$$
A proper fraction of a positive number is smaller than the number, so in a quiz we can rule out choices greater than the original number.

::grafico{assi=0 uguale=1 poligoni="0,0 3,0 3,1 0,1" linee="0,0 5,0 5,1 0,1 0,0;1,0 1,1;2,0 2,1;3,0 3,1;4,0 4,1" etichette="0.3,0.4,70;1.3,0.4,70;2.3,0.4,70;3.3,0.4,70;4.3,0.4,70;1.2,1.4,210 euros;5.3,0.4,350 euros" xmin=-0.5 xmax=7.5 ymin=-0.4 ymax=2 titolo="Taking $\dfrac{3}{5}$ of $350$ euros. Divide the whole into $5$ parts worth $70$ euros each and take $3$ of them"}
:::

:::teorema{#problemi-inversi titolo="Finding the whole from a part"}
If the part is known and the question asks for the whole, reverse the calculation. Divide the given part by the numerator to obtain the value of one equal share, and multiply by the denominator. If $\dfrac{3}{8}$ of a number equals $45$, one share is worth $\dfrac{45}{3} = 15$, so the number is
$$
15 \cdot 8 = 120 .
$$
Dividing the given part by the fraction gives the same result, namely $45 \cdot \dfrac{8}{3} = 120$.
:::

:::esempio{#frazione-del-resto titolo="Successive fractions"}
When a fraction applies to what remains after an initial expense, the two fractions refer to different wholes, and we multiply the fractions remaining. An employee spends $\dfrac{1}{4}$ of a paycheck on rent and $\dfrac{2}{3}$ of the remainder on other expenses, leaving $400$ euros. After rent, $\dfrac{3}{4}$ of the paycheck remains, and the other expenses leave $\dfrac{1}{3}$ of that, so the employee has
$$
\frac{1}{3} \cdot \frac{3}{4} = \frac{1}{4}
$$
of the paycheck left. Since $\dfrac{1}{4}$ of the paycheck is $400$ euros, the paycheck is $1\,600$ euros. Adding $\dfrac{1}{4} + \dfrac{2}{3} = \dfrac{11}{12}$ instead would give a remaining fraction of $\dfrac{1}{12}$ and a paycheck of $4\,800$ euros, which is incorrect.
:::

## Decimals and rounding

:::definizione{#numeri-decimali titolo="Terminating and repeating decimals"}
In a decimal, the digits after the decimal point represent tenths, hundredths, thousandths, and so on. Dividing the numerator of a fraction by its denominator gives a decimal of one of two types.

- A **terminating** decimal has a finite number of digits after the decimal point, as in $\dfrac{3}{8} = 0.375$. This happens when the only possible prime factors of the denominator in lowest terms are $2$ and $5$.
- A **repeating** decimal has a group of digits that repeats indefinitely, as in $\dfrac{1}{3} = 0.333\ldots$, written $0.\overline{3}$, or $\dfrac{7}{6} = 1.1666\ldots = 1.1\overline{6}$.

To compare two decimals, compare their integer parts and then the digits after the decimal point one at a time from the left. For example, $0.7 > 0.69$ because the tenths digits are $7$ and $6$, respectively, even though $0.69$ has more digits.
:::

:::teorema{#frazione-generatrice titolo="Converting a repeating decimal to a fraction"}
In a repeating decimal, the group of digits that repeats is the **repeating block**, and the digits between the decimal point and the block form the nonrepeating part. In $1.1\overline{6}$ the repeating block is $6$ and the nonrepeating part is $1$. Every repeating decimal equals a fraction. This **fractional equivalent** can be found as follows.

- For the numerator, write the digits without the decimal point through the end of the first repeating block, then subtract the number formed by the digits preceding that block.
- For the denominator, write one $9$ for each digit in the repeating block, followed by one $0$ for each digit in the nonrepeating part.

$$
0.\overline{45} = \frac{45}{99} = \frac{5}{11},
\qquad
2.1\overline{6} = \frac{216 - 21}{90} = \frac{195}{90} = \frac{13}{6} .
$$
The rule holds because if $x = 0.\overline{45}$, then $100\,x = 45.\overline{45}$. Subtracting $x$ cancels the decimal digits, so $99\,x = 45$.
:::

:::osservazione{#arrotondamento titolo="Rounding and truncation"}
To **round** a number to a given place, look at the next digit. If it is $0$, $1$, $2$, $3$, or $4$, the last retained digit stays the same. If it is $5$, $6$, $7$, $8$, or $9$, increase the last retained digit by $1$. Drop the remaining digits. Rounded to the nearest tenth, $3.47$ becomes $3.5$ because its hundredths digit is $7$. Rounded to the nearest hundredth, $12.834$ becomes $12.83$. **Truncation** drops the remaining digits without changing the last retained digit, so $3.47$ truncated to tenths becomes $3.4$. Rounding gives the nearest value with the requested number of decimal places.

::grafico{assi=0 uguale=1 linee="-0.6,0 10.8,0;10.4,0.2 10.8,0 10.4,-0.2;0,-0.25 0,0.25;1,-0.12 1,0.12;2,-0.12 2,0.12;3,-0.12 3,0.12;4,-0.12 4,0.12;5,-0.2 5,0.2;6,-0.12 6,0.12;7,-0.12 7,0.12;8,-0.12 8,0.12;9,-0.12 9,0.12;10,-0.25 10,0.25" punti="7,0,pieno" segmenti="7,0.6,10,0.6;0,1.2,7,1.2" etichette="-0.6,-0.8,3.40;4.4,-0.8,3.45;9.4,-0.8,3.50;6.5,-0.8,3.47;7.9,0.8,0.03;2.9,1.4,0.07" xmin=-1 xmax=11 ymin=-1.3 ymax=2 titolo="The number $3.47$ is $0.03$ away from $3.5$ and $0.07$ away from $3.4$, so it rounds to $3.5$ to the nearest tenth"}

:::

## Powers and scientific notation

:::definizione{#potenze titolo="Power"}
The **power** $a^n$, where $n$ is a natural number greater than $1$, is the product of $n$ factors equal to $a$. The number $a$ is the **base** and $n$ is the exponent. We also define $a^1 = a$. For example, $2^5 = 2 \cdot 2 \cdot 2 \cdot 2 \cdot 2 = 32$ and $\left(\dfrac{2}{3}\right)^2 = \dfrac{4}{9}$. By the rules of signs, a power with a negative base is positive if the exponent is even and negative if it is odd, so $(-2)^4 = 16$ and $(-2)^3 = -8$. The power $10^n$ is written as the digit $1$ followed by $n$ zeros, as in $10^6 = 1\,000\,000$.
:::

:::teorema{#proprieta-potenze titolo="Properties of powers"}
For nonzero $a$ and $b$ and exponents $m$ and $n$, the following identities hold:
$$
a^m \cdot a^n = a^{m+n},
\qquad
\frac{a^m}{a^n} = a^{m-n},
\qquad
(a^m)^n = a^{m \cdot n},
\qquad
a^n \cdot b^n = (a \cdot b)^n .
$$
These properties follow from the definition by counting the factors. For example, $2^3 \cdot 2^2$ is the product of $3 + 2 = 5$ factors equal to $2$. They let us evaluate an expression without expanding the products by first writing the bases as powers of the same number:
$$
\frac{4^3 \cdot 2^5}{8^3} = \frac{2^6 \cdot 2^5}{2^9} = 2^{6 + 5 - 9} = 2^2 = 4 .
$$
:::

:::definizione{#esponente-negativo titolo="Zero and negative exponents"}
For $a \neq 0$ and a natural number $n$, define
$$
a^0 = 1,
\qquad
a^{-n} = \frac{1}{a^n} .
$$
The two definitions are chosen so that the quotient rule holds for every pair of exponents. For example, $\dfrac{a^3}{a^3} = 1$, and the rule gives $\dfrac{a^3}{a^3} = a^0$, so $a^0 = 1$. To evaluate a power with a negative exponent, take the reciprocal of the base, giving $2^{-3} = \dfrac{1}{8}$ and $\left(\dfrac{3}{5}\right)^{-2} = \left(\dfrac{5}{3}\right)^2 = \dfrac{25}{9}$. Negative powers of $10$ are used to write small numbers such as $10^{-3} = \dfrac{1}{1000} = 0.001$.

::grafico{f="2^x" punti="-2,0.25,pieno;-1,0.5,pieno;0,1,pieno;3,8,pieno" xmin=-3 xmax=4 ymin=0 ymax=18 etichette="-2.9,2.2,2⁻² = 0.25;-2.9,4.2,2⁻¹ = 0.5;1.6,10.5,2³ = 8" titolo="The graph of $2^x$ is always above the $x$-axis. We have $2^0 = 1$, and $2^{-n} = \dfrac{1}{2^n}$ is positive but gets smaller and smaller"}
:::

:::attenzione
- In the expression $-3^2$ the exponent applies only to $3$, so $-3^2 = -9$, whereas $(-3)^2 = 9$.
- The power of a sum is *not* the sum of the powers: $(2 + 3)^2 = 25$, whereas $2^2 + 3^2 = 13$.
- The sum of two powers with the same base is *not* found by adding the exponents: $2^3 + 2^3 = 2 \cdot 2^3 = 2^4 = 16$, whereas $2^6 = 64$.
- A negative exponent does *not* make the result negative: $2^{-3} = \dfrac{1}{8}$ is positive.
:::

:::definizione{#notazione-scientifica titolo="Scientific notation"}
A positive number is written in **scientific notation** when it has the form $a \cdot 10^n$, where $1 \leq a < 10$ and $n$ is an integer. This notation is used to write and compare very large or very small numbers:
$$
45\,000\,000 = 4.5 \cdot 10^7,
\qquad
0.000\,32 = 3.2 \cdot 10^{-4} .
$$
The exponent gives the number of places the decimal point moves to obtain $a$. It is positive if the point moves to the left, as it does for large numbers, and negative if it moves to the right, as it does for numbers less than $1$. For products and quotients, work separately with the coefficients $a$ and the powers of $10$, then put the result back in the form with $1 \leq a < 10$:
$$
(3 \cdot 10^5) \cdot (4 \cdot 10^{-2}) = 12 \cdot 10^3 = 1.2 \cdot 10^4 .
$$
:::

:::osservazione{#ordine-di-grandezza titolo="Order of magnitude"}
The **order of magnitude** of a number is the power of $10$ that approximates it. Once the number is written as $a \cdot 10^n$, a common textbook convention assigns the order of magnitude $10^n$ if $a < 5$ and $10^{n+1}$ if $a \geq 5$. For example, $2.5 \cdot 10^{-4}$ has order of magnitude $10^{-4}$, while $7.8 \cdot 10^5$ has order of magnitude $10^6$. Some texts use $\sqrt{10} \approx 3.16$ as the cutoff instead of $5$, so the two conventions give different results for $a$ between $3.16$ and $5$. The order of magnitude helps estimate a result and eliminate choices that differ from it by a factor of $10$ or $100$.
:::

## Square and cube roots

:::definizione{#radici titolo="Square root and cube root"}
The **square root** of a number $a \geq 0$ is the number $\sqrt{a} \geq 0$ whose square is $a$. For example, $\sqrt{49} = 7$ because $7^2 = 49$. The number $a$ under the radical sign is the radicand. The square root of a negative number is undefined in the real numbers because every square is at least zero. The **cube root** $\sqrt[3]{a}$ is the number whose cube is $a$ and is defined for every $a$. We have $\sqrt[3]{64} = 4$ and $\sqrt[3]{-8} = -2$ because $(-2)^3 = -8$. Knowing the squares $1, 4, 9, \ldots, 196, 225$ of the numbers from $1$ to $15$ and the cubes $1, 8, 27, 64, 125, 216, 343, 512, 729, 1000$ of the numbers from $1$ to $10$ makes many roots easy to calculate mentally. The number $\sqrt{2} = 1.4142\ldots$ has infinitely many nonrepeating decimal digits and is therefore not rational.
:::

:::teorema{#proprieta-radici titolo="Properties of roots"}
For $a \geq 0$ and $b > 0$, the following identities hold:
$$
\sqrt{a \cdot b} = \sqrt{a} \cdot \sqrt{b},
\qquad
\sqrt{\frac{a}{b}} = \frac{\sqrt{a}}{\sqrt{b}} .
$$
They hold because the two sides are nonnegative numbers with the same square. Use them to **simplify** a radical by taking perfect square factors outside the radical sign:
$$
\sqrt{72} = \sqrt{36 \cdot 2} = 6\sqrt{2},
\qquad
\sqrt{0.0009} = \sqrt{\frac{9}{10\,000}} = \frac{3}{100} = 0.03 .
$$
Radicals with the same radicand can be added by adding their coefficients, so $\sqrt{8} + \sqrt{18} = 2\sqrt{2} + 3\sqrt{2} = 5\sqrt{2}$. To remove a radical from the denominator, multiply the numerator and denominator by that radical, as in $\dfrac{6}{\sqrt{3}} = \dfrac{6\sqrt{3}}{3} = 2\sqrt{3}$.
:::

:::attenzione
The square root of a sum is *not* the sum of the square roots. For example, $\sqrt{9 + 16} = \sqrt{25} = 5$, whereas $\sqrt{9} + \sqrt{16} = 3 + 4 = 7$.
:::

:::esempio{#stima-radici titolo="Estimating a square root"}
If the radicand is not a perfect square, the nearby perfect squares locate its square root between two consecutive integers. Since $9 < 12 < 16$, we have $3 < \sqrt{12} < 4$. Since $3.5^2 = 12.25$ is also greater than $12$, we have $\sqrt{12} < 3.5$. The value is $\sqrt{12} \approx 3.46$.

::grafico{f="sqrt(x)" punti="4,2,pieno;9,3,pieno;16,4,pieno;12,3.4641,pieno" segmenti="12,0,12,3.4641;0,3.4641,12,3.4641;9,0,9,3;16,0,16,4" xmin=-2 xmax=18 ymin=-1 ymax=5 titolo="Since $\sqrt{9} = 3$ and $\sqrt{16} = 4$, the value $\sqrt{12} \approx 3.46$ lies between $3$ and $4$"}

:::

## Quick methods for multiple-choice questions

:::osservazione{#metodi-rapidi titolo="Quick checks on a result"}
Wrong choices in arithmetic questions usually arise from common errors. A few checks can identify them without working through the entire calculation.

- **Estimation**: Round the numbers and calculate mentally. For example, $\dfrac{4.02 \cdot 59.7}{0.298}$ is approximately $\dfrac{4 \cdot 60}{0.3} = 800$, so we can rule out choices that differ from $800$ by a factor of $10$.
- **Last digit**: The last digit of a product depends only on the last digits of its factors. The product $37 \cdot 48$ ends in $6$ because $7 \cdot 8 = 56$, so of the choices $1\,774$, $1\,776$, and $1\,778$, the correct one is $1\,776$.
- **Sign and size**: A product of three negative numbers is negative, a proper fraction of a positive number is smaller than that number, the LCM is no smaller than the given numbers, and the GCD is no greater.

Divisibility tests provide one more check. The product $27 \cdot 43$ is a multiple of $9$, so the sum of the digits of the result $1\,161$ must be as well, and indeed the sum is $9$.
:::

:::osservazione{#frazioni-e-decimali-noti titolo="Familiar fractions and decimals"}
Some fractions come up frequently in multiple-choice questions. Recognizing their decimal equivalents makes it possible to compare and add them mentally:
$$
\frac{1}{2} = 0.5,
\qquad
\frac{1}{4} = 0.25,
\qquad
\frac{1}{5} = 0.2,
\qquad
\frac{1}{8} = 0.125,
\qquad
\frac{1}{3} = 0.\overline{3},
\qquad
\frac{1}{6} = 0.1\overline{6},
\qquad
\frac{1}{9} = 0.\overline{1} .
$$
To compare $\dfrac{5}{8}$ and $\dfrac{2}{3}$, note that $\dfrac{5}{8} = 0.625$ and $\dfrac{2}{3} = 0.\overline{6}$, so $\dfrac{2}{3}$ is greater.
:::
