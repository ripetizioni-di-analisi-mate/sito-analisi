---
titolo: Decimals, proportions and percentages
sommario: What decimals are, how to perform arithmetic with them and round them, how to convert fractions to decimals and back, what ratios, scales and proportions are, when two quantities are directly or inversely proportional, and how to calculate percentages, discounts, increases and successive percentage changes.
---

## Decimals

:::definizione{#numeri-decimali titolo="Decimals"}
A **decimal** is a number written with a decimal point, such as $3.58$. The digits to the left of the point form the **whole-number part**, and the digits to the right form the **fractional part**. In the fractional part, the first digit counts tenths, the second counts hundredths and the third counts thousandths.
$$
0.1 = \frac{1}{10} ,
\qquad
0.01 = \frac{1}{100} ,
\qquad
0.001 = \frac{1}{1000} .
$$
In other words, each place to the right has one tenth the value of the preceding place, just as with ones, tens and hundreds in the natural numbers. For example,
$$
3.58 = 3 + \frac{5}{10} + \frac{8}{100} ,
$$
that is, $3$ ones, $5$ tenths and $8$ hundredths. Adding zeros at the end of the fractional part does not change the number, so $2.5 = 2.50 = 2.500$. Decimals represent quantities that lie between two natural numbers, such as a price of $2.50$ euros or a length of $1.75$ meters.

::grafico{assi=0 uguale=1 linee="-0.6,0 10.8,0;10.4,0.2 10.8,0 10.4,-0.2;0,-0.3 0,0.3;1,-0.15 1,0.15;2,-0.15 2,0.15;3,-0.15 3,0.15;4,-0.15 4,0.15;5,-0.25 5,0.25;6,-0.15 6,0.15;7,-0.15 7,0.15;8,-0.15 8,0.15;9,-0.15 9,0.15;10,-0.3 10,0.3" punti="3,0,pieno;7.5,0,pieno" etichette="-0.15,-0.9,0;4.55,-0.9,0.5;9.85,-0.9,1;2.65,0.6,0.3;6.95,0.6,0.75" xmin=-1 xmax=11 ymin=-1.4 ymax=1.3 titolo="The segment from $0$ to $1$ is divided into ten equal parts. The number $0.3$ is at the third tick mark after zero, and $0.75$ lies halfway between $0.7$ and $0.8$"}

:::

:::teorema{#confronto-decimali titolo="Comparing decimals"}
Of two decimals, the one with the larger whole-number part is greater. If the whole-number parts are equal, compare the tenths. If the tenths are also equal, compare the hundredths, and so on from left to right. For example, $4.2 > 3.9$ because $4 > 3$. Also, $2.48 < 2.5$ because the whole-number parts are equal and the tenths digits are $4$ and $5$, respectively. This rule can be used to order decimals and place them on the number line.
:::

:::attenzione
A decimal with more digits after the point can be smaller than one with fewer digits. For example, $0.65 < 0.7$ even though $65$ is greater than $7$. Writing $0.7 = 0.70$ gives both numbers the same number of decimal places, so comparing $65$ hundredths with $70$ hundredths gives the result directly.
:::

## Arithmetic with decimals

:::teorema{#addizione-sottrazione-decimali titolo="Addition and subtraction"}
To add or subtract two decimals, write one below the other with the decimal points aligned so that tenths line up with tenths and hundredths with hundredths. Fill any empty places with zeros. Then perform the operation as with natural numbers and place the decimal point in the same column. For example,
$$
\begin{array}{r}
12.50 \\
+\ \ 3.47 \\
\hline
15.97
\end{array}
\qquad\qquad
\begin{array}{r}
8.00 \\
-\ \ 2.35 \\
\hline
5.65
\end{array}
$$
Aligning the decimal points ensures that digits of the same place value are added together, just as with ones and tens.
:::

:::richiamo{titolo="Multiplying fractions"}
If $b \neq 0$ and $d \neq 0$, then $\dfrac{a}{b} \cdot \dfrac{c}{d} = \dfrac{a \cdot c}{b \cdot d}$.
:::

::::teorema{#moltiplicazione-decimali titolo="Multiplication"}
To multiply two decimals, multiply the numbers without their decimal points. The number of decimal places in the product is the total number of decimal places in the two factors. For example,
$$
2.4 \cdot 0.15 = 0.360 = 0.36 ,
$$
because $24 \cdot 15 = 360$ and the factors have $1 + 2 = 3$ decimal places in all. Similarly, $0.4 \cdot 0.3 = 0.12$ because $4 \cdot 3 = 12$ and two decimal places are needed.

:::dimostrazione
Write each factor as a fraction with denominator $10$, $100$ or $1000$. For the first example,
$$
2.4 \cdot 0.15 = \frac{24}{10} \cdot \frac{15}{100} = \frac{24 \cdot 15}{10 \cdot 100} = \frac{360}{1000} = 0.360 .
$$
The denominator $1000$ has three zeros, one for the decimal place in $2.4$ and two for the decimal places in $0.15$. The result therefore has three decimal places.
:::
::::

:::teorema{#moltiplicazione-divisione-per-10 titolo="Multiplication and division by 10, 100 and 1000"}
Multiplying a number by $10$, $100$ or $1000$ moves the decimal point one, two or three places to the right. Dividing it by $10$, $100$ or $1000$ moves the point one, two or three places to the left. Add zeros where digits are missing. For example,
$$
3.25 \cdot 100 = 325 ,
\qquad
0.6 \cdot 1000 = 600 ,
\qquad
\frac{47}{1000} = 0.047 .
$$
The rule follows from decimal multiplication because $3.25 \cdot 100 = \dfrac{325}{100} \cdot 100 = 325$. It can also be used to convert units of measurement. For example, $1.8$ meters is $1.8 \cdot 100 = 180$ centimeters.
:::

:::richiamo{titolo="Invariance property of division"}
If $b \neq 0$ and $k \neq 0$, then $\dfrac{a}{b} = \dfrac{a \cdot k}{b \cdot k}$.
:::

:::teorema{#divisione-decimali titolo="Division"}
To divide one decimal by another, multiply the dividend and divisor by $10$, $100$ or $1000$, as needed to make the divisor a natural number. Then carry out the division. The quotient stays the same by the invariance property of division. For example,
$$
\frac{7.5}{0.25} = \frac{7.5 \cdot 100}{0.25 \cdot 100} = \frac{750}{25} = 30 ,
\qquad
\frac{1.2}{0.4} = \frac{12}{4} = 3 .
$$
In the second example, both the dividend and the divisor were multiplied by $10$.
:::

:::osservazione{#moltiplicare-per-numeri-minori-di-uno titolo="Multiplying by a number less than 1"}
When a positive number is multiplied by a decimal between $0$ and $1$, the result is *less* than the original number. For example, $8 \cdot 0.5 = 4$ because multiplying by $0.5 = \dfrac{1}{2}$ means taking half. When a positive number is divided by a decimal between $0$ and $1$, the result is *greater*. For example, $\dfrac{8}{0.5} = \dfrac{80}{5} = 16$ because $8$ contains $16$ halves.
:::

## Rounding

:::definizione{#arrotondamento titolo="Rounding"}
To **round** a number to the nearest tenth, hundredth or another place is to replace it with the nearest number whose digits end at that place. Look at the digit immediately to the right of the rounding place.

- If the next digit is $0$, $1$, $2$, $3$ or $4$, the digit in the rounding place stays the same.
- If the next digit is $5$, $6$, $7$, $8$ or $9$, the digit in the rounding place increases by $1$.

In both cases, drop the remaining digits. For example, $2.64$ rounds to $2.6$ to the nearest tenth because the hundredths digit is $4$, while $3.85$ rounds to $3.9$ because the hundredths digit is $5$. The number $3.85$ lies halfway between $3.8$ and $3.9$, and the rule rounds it to $3.9$. We round when a result has more digits than needed for its intended use. For example, a price of $12.347$ euros rounded to the nearest hundredth is $12.35$ euros.

::grafico{assi=0 uguale=1 linee="-0.6,0 10.8,0;10.4,0.2 10.8,0 10.4,-0.2;0,-0.3 0,0.3;1,-0.15 1,0.15;2,-0.15 2,0.15;3,-0.15 3,0.15;4,-0.15 4,0.15;5,-0.25 5,0.25;6,-0.15 6,0.15;7,-0.15 7,0.15;8,-0.15 8,0.15;9,-0.15 9,0.15;10,-0.3 10,0.3" punti="4,0,pieno" segmenti="0,0.6,4,0.6;4,1.3,10,1.3" etichette="-0.7,-0.9,2.60;3.3,-0.9,2.64;9.3,-0.9,2.70;1.4,0.8,0.04;6.4,1.5,0.06" xmin=-1 xmax=11 ymin=-1.4 ymax=2 titolo="The number $2.64$ is $0.04$ away from $2.6$ and $0.06$ away from $2.7$, so it rounds to $2.6$ to the nearest tenth"}

:::

:::esempio{titolo="Rounding with carrying"}
The number $7.96$ rounds to $8.0$ to the nearest tenth. Its hundredths digit is $6$, so the $9$ tenths become $10$ tenths, or one extra whole unit. The number $0.4982$ rounds to $0.50$ to the nearest hundredth for the same reason. The final zero shows that the number was rounded to the nearest hundredth.
:::

## Fractions and decimals

:::definizione{#da-frazione-a-decimale titolo="The decimal form of a fraction"}
A fraction is the quotient of its numerator and denominator, as discussed in the chapter on fractions. Therefore, dividing the numerator by the denominator gives the decimal corresponding to the fraction. For example, $\dfrac{3}{4} = 0.75$ because $3$ divided by $4$ gives $0.75$, and $\dfrac{9}{5} = 1.8$. The division has two possible outcomes.

- At some point the remainder is $0$ and the division ends. The result is called a **terminating decimal**, such as $0.75$.
- The remainder never equals $0$, and beyond a certain point the same digits repeat. The result is called a **repeating decimal**.

For example, $\dfrac{1}{3} = 0.333\ldots$, where the digit $3$ repeats indefinitely. The group of digits that repeats is called the **repeating block**. A bar is drawn over it, so $\dfrac{1}{3} = 0.\overline{3}$.
:::

:::definizione{#decimali-periodici titolo="Pure and mixed repeating decimals"}
A repeating decimal is **pure** if the repeating block begins immediately after the decimal point, as in $0.\overline{3}$ or $2.\overline{18}$. It is **mixed** if there are other digits between the decimal point and the repeating block. These digits form the **nonrepeating part**. For example,
$$
\frac{7}{6} = 1.1666\ldots = 1.1\overline{6} ,
$$
where the whole-number part is $1$, the nonrepeating part is $1$ and the repeating block is $6$. This distinction helps in writing the fraction corresponding to a repeating decimal.
:::

:::teorema{#decimali-limitati-periodici titolo="When a decimal terminates"}
Consider a fraction in lowest terms. If the denominator has no prime factors other than $2$ and $5$, the decimal terminates. Otherwise, it repeats. For example, $\dfrac{7}{20}$ gives a terminating decimal because $20 = 2^2 \cdot 5$, and indeed $\dfrac{7}{20} = 0.35$. In contrast, $\dfrac{5}{12}$ gives a repeating decimal because $12 = 2^2 \cdot 3$ contains the factor $3$, and indeed $\dfrac{5}{12} = 0.41\overline{6}$.

The rule follows from the fact that $10 = 2 \cdot 5$. When the denominator contains only the factors $2$ and $5$, the fraction can be written as an equivalent fraction with denominator $10$, $100$ or $1000$. For example, $\dfrac{7}{20} = \dfrac{7 \cdot 5}{20 \cdot 5} = \dfrac{35}{100}$. With another prime factor in the denominator, such as $3$, this is impossible because the numbers $10$, $100$, $1000, \ldots$ have only $2$ and $5$ as prime factors.
:::

:::teorema{#frazione-decimale-limitato titolo="Writing a terminating decimal as a fraction"}
A terminating decimal equals the fraction whose numerator is the number written without the decimal point and whose denominator is $1$ followed by as many zeros as there are decimal places. The fraction is then reduced to lowest terms. For example,
$$
0.35 = \frac{35}{100} = \frac{7}{20} ,
\qquad
2.4 = \frac{24}{10} = \frac{12}{5} .
$$
The rule follows from the place values of the digits because $0.35$ is $35$ hundredths and $2.4$ is $24$ tenths.
:::

::::teorema{#frazione-generatrice titolo="Writing a repeating decimal as a fraction"}
Every repeating decimal can be written as an **equivalent fraction** by the following procedure.

- For the numerator, write the number without its decimal point up to the end of the first repeating block, then subtract the number formed by the digits before the block.
- For the denominator, write one $9$ for each digit in the repeating block, followed by one $0$ for each digit in the nonrepeating part.

For example,
$$
0.\overline{45} = \frac{45}{99} = \frac{5}{11} ,
\qquad
1.2\overline{3} = \frac{123 - 12}{90} = \frac{111}{90} = \frac{37}{30} .
$$
Using equivalent fractions makes it possible to calculate with repeating decimals, whose infinitely many digits prevent us from writing them in full in columns. For example, $0.\overline{3} + 0.\overline{6} = \dfrac{3}{9} + \dfrac{6}{9} = 1$.

:::dimostrazione
Let $x = 0.\overline{45}$, that is, $x = 0.4545\ldots$. The repeating block has two digits, so we multiply by $100$ to move the decimal point two places.
$$
100 \cdot x = 45.4545\ldots
$$
The numbers $100 \cdot x$ and $x$ have the same fractional part. Therefore, subtracting $x$ from $100 \cdot x$ cancels the fractional digits and leaves $99 \cdot x = 45$, that is, $x = \dfrac{45}{99}$.

For $x = 1.2\overline{3}$, that is, $x = 1.2333\ldots$, first move the decimal point past the nonrepeating part and then past the repeating block.
$$
10 \cdot x = 12.333\ldots ,
\qquad
100 \cdot x = 123.333\ldots
$$
These two numbers have the same fractional part, so $100 \cdot x - 10 \cdot x = 123 - 12$, that is, $90 \cdot x = 111$. It follows that $x = \dfrac{111}{90}$, precisely the fraction given by the rule.
:::
::::

:::osservazione{#numeri-razionali-decimali titolo="Decimals and rational numbers"}
Every fraction gives a terminating or repeating decimal, and every terminating or repeating decimal equals a fraction. Therefore, the rational numbers $\mathbb{Q}$, introduced in the chapter on fractions, are precisely the terminating and repeating decimals. For example, $0.125 = \dfrac{1}{8}$ and $0.\overline{1} = \dfrac{1}{9}$ are rational numbers. The chapter on powers and roots introduces a number, $\sqrt{2}$, that has infinitely many decimal places with no repeating block.
:::

## Ratios and scales

:::definizione{#rapporto titolo="Ratio"}
The **ratio** of two numbers $a$ and $b$, with $b \neq 0$, is the quotient $\dfrac{a}{b}$, also written $a : b$. A ratio tells how many times the second number fits into the first, or what fraction of the second the first represents. For example, in a group of $12$ adults and $8$ children, the ratio of adults to children is
$$
\frac{12}{8} = \frac{3}{2} ,
$$
meaning that there are $3$ adults for every $2$ children. A ratio can be simplified like a fraction.

::grafico{assi=0 uguale=1 punti="0,1.2,pieno;1,1.2,pieno;2,1.2,pieno;0.5,0,vuoto;1.5,0,vuoto;4,1.2,pieno;5,1.2,pieno;6,1.2,pieno;4.5,0,vuoto;5.5,0,vuoto;8,1.2,pieno;9,1.2,pieno;10,1.2,pieno;8.5,0,vuoto;9.5,0,vuoto;12,1.2,pieno;13,1.2,pieno;14,1.2,pieno;12.5,0,vuoto;13.5,0,vuoto" segmenti="3,-0.5,3,1.7;7,-0.5,7,1.7;11,-0.5,11,1.7" etichette="-3.4,1.2,adults;-3.4,0,children" xmin=-3.6 xmax=15 ymin=-0.8 ymax=2 titolo="The $12$ adults (solid dots) and $8$ children (open dots) form $4$ equal groups, each with $3$ adults and $2$ children, so the ratio of adults to children is $\dfrac{3}{2}$"}

If the quantities are of the same kind, such as two lengths, first express both in the same unit. The ratio of $30$ cm to $2$ m is $\dfrac{30}{200} = \dfrac{3}{20}$ because $2$ m is $200$ cm. If the quantities are of different kinds, their ratio is a new quantity. For example, traveling $150$ km in $2$ hours gives $\dfrac{150}{2} = 75$ kilometers per hour, the average speed.
:::

:::definizione{#scala titolo="Map scale"}
The **scale** of a map or drawing is the ratio of a length on the drawing to the corresponding actual length. A scale of $1 : 50\,000$ means that $1$ cm on the map represents $50\,000$ cm on the ground. Since $1$ m $= 100$ cm, we have
$$
50\,000 \text{ cm} = \frac{50\,000}{100} \text{ m} = 500 \text{ m} .
$$
Two towns that are $6$ cm apart on the map are therefore $6 \cdot 500 = 3000$ m apart, or $3$ km. The scale can be used to find actual distances from distances measured on the map, and vice versa.

::grafico{assi=0 uguale=1 linee="-0.3,1.5 6.6,1.5;-0.3,0 6.6,0;0,1.35 0,1.65;1,1.35 1,1.65;2,1.35 2,1.65;3,1.35 3,1.65;4,1.35 4,1.65;5,1.35 5,1.65;6,1.35 6,1.65;0,-0.15 0,0.15;1,-0.15 1,0.15;2,-0.15 2,0.15;3,-0.15 3,0.15;4,-0.15 4,0.15;5,-0.15 5,0.15;6,-0.15 6,0.15" punti="0,1.5,pieno;6,1.5,pieno;0,0,pieno;6,0,pieno" segmenti="0,0.2,0,1.3;6,0.2,6,1.3" etichette="-0.1,2.1,0;0.9,2.1,1;1.9,2.1,2;2.9,2.1,3;3.9,2.1,4;4.9,2.1,5;5.7,2.1,6 cm;-0.2,-0.75,0;1.8,-0.75,1;3.8,-0.75,2;5.6,-0.75,3 km;-2.9,1.5,map;-2.9,0,actual distance" xmin=-3.2 xmax=7.2 ymin=-1.3 ymax=2.6 titolo="At a scale of $1 : 50\,000$, each centimeter on the map represents $500$ m on the ground, so the $6$ cm between the two towns corresponds to $3$ km"}
:::

## Proportions

:::definizione{#proporzione titolo="Proportion"}
A **proportion** is an equality between two ratios,
$$
a : b = c : d ,
$$
read “$a$ is to $b$ as $c$ is to $d$,” with $b \neq 0$ and $d \neq 0$. The numbers $a$ and $d$ are called the **extremes**, and the numbers $b$ and $c$ are called the **means**. For example, $2 : 3 = 8 : 12$ is a proportion because $\dfrac{2}{3}$ and $\dfrac{8}{12}$ are equivalent fractions. The extremes are $2$ and $12$, and the means are $3$ and $8$.
:::

::::teorema{#proprieta-fondamentale titolo="The cross-product property of proportions"}
In any proportion, the product of the means equals the product of the extremes.
$$
a : b = c : d
\qquad \text{if and only if} \qquad
a \cdot d = b \cdot c .
$$
Indeed, in the proportion $2 : 3 = 8 : 12$ we have $2 \cdot 12 = 24$ and $3 \cdot 8 = 24$. The property can be used to check whether four numbers form a proportion. For example, $3 : 5 = 9 : 16$ is *not* a proportion because $3 \cdot 16 = 48$ while $5 \cdot 9 = 45$.

:::dimostrazione
The proportion means that $\dfrac{a}{b} = \dfrac{c}{d}$. Multiply both sides by $b \cdot d$. On the left, the factor $b$ cancels, leaving $a \cdot d$. On the right, the factor $d$ cancels, leaving $c \cdot b$. Therefore, $a \cdot d = b \cdot c$. Using the numbers in the example, multiplying $\dfrac{2}{3} = \dfrac{8}{12}$ by $3 \cdot 12 = 36$ gives $2 \cdot 12 = 8 \cdot 3$, that is, $24 = 24$. Conversely, if $a \cdot d = b \cdot c$, dividing both sides by $b \cdot d$ gives $\dfrac{a}{b} = \dfrac{c}{d}$ again.
:::
::::

:::teorema{#termine-incognito titolo="The unknown term of a proportion"}
If one term of a proportion is unknown, denote it by $x$ and use the cross-product property to find it.

- An unknown mean equals the product of the extremes divided by the other mean.
- An unknown extreme equals the product of the means divided by the other extreme.

For example, in the proportion $4 : 10 = x : 25$ the term $x$ is a mean, so
$$
x = \frac{4 \cdot 25}{10} = \frac{100}{10} = 10 .
$$
Indeed, the cross-product property gives $4 \cdot 25 = 10 \cdot x$, and dividing both sides by $10$ gives $x = \dfrac{4 \cdot 25}{10}$. In the proportion $1.5 : 2 = 6 : x$ the term $x$ is an extreme, so
$$
x = \frac{2 \cdot 6}{1.5} = \frac{12}{1.5} = \frac{120}{15} = 8 .
$$
:::

## Directly and inversely proportional quantities

:::definizione{#direttamente-proporzionali titolo="Directly proportional quantities"}
Two quantities $x$ and $y$ are **directly proportional** if their ratio $\dfrac{y}{x}$ is always the same number $k$, called the **constant of proportionality**. Then $y = k \cdot x$, and when $x$ doubles or triples, $y$ also doubles or triples. For example, if one notebook costs $2$ euros, the cost $y$ of $x$ notebooks is $y = 2 \cdot x$.

| number of notebooks $x$ | $1$ | $2$ | $3$ | $4$ |
| --- | --- | --- | --- | --- |
| cost $y$ in euros | $2$ | $4$ | $6$ | $8$ |

In every column the ratio is $\dfrac{y}{x} = 2$. In the Cartesian plane, the points in the table lie on a line through the origin.

::grafico{f="2*x+0*sqrt(x)" punti="1,2,pieno;2,4,pieno;3,6,pieno;4,8,pieno" segmenti="3,0,3,6;0,6,3,6" xmin=-1 xmax=6 ymin=-2 ymax=12 nomi="x,y" legenda="y = 2x" titolo="The points giving the cost $y$ of $x$ notebooks at $2$ euros each lie on a line through the origin because $\dfrac{y}{x} = 2$ at every point"}

:::

:::attenzione
Two quantities can increase together without being directly proportional. A taxi charges $3$ euros at the start of a trip and $1$ euro for each kilometer. A ride of $2$ km costs $3 + 2 = 5$ euros, and a ride of $4$ km costs $3 + 4 = 7$ euros. The distance doubles, but the fare goes from $5$ to $7$ euros and does not double. Indeed, the ratios $\dfrac{5}{2}$ and $\dfrac{7}{4}$ differ.
:::

:::definizione{#inversamente-proporzionali titolo="Inversely proportional quantities"}
Two quantities $x$ and $y$ are **inversely proportional** if their product $x \cdot y$ is always the same number $k$. Then $y = \dfrac{k}{x}$, and when $x$ doubles, $y$ is halved. For example, when traveling $120$ km, the time $y$ in hours and the speed $x$ in kilometers per hour are related by $x \cdot y = 120$.

| speed $x$ in kilometers per hour | $30$ | $40$ | $60$ | $120$ |
| --- | --- | --- | --- | --- |
| time $y$ in hours | $4$ | $3$ | $2$ | $1$ |

In each column the product is $120$. The points in the table lie on a curve called a branch of a **hyperbola**, which approaches the axes without touching them.

::grafico{f="120/x+0*sqrt(x)" punti="30,4,pieno;40,3,pieno;60,2,pieno;120,1,pieno" xmin=-20 xmax=180 ymin=-1 ymax=8 nomi="x,y" legenda="y = \dfrac{120}{x}" titolo="The points giving the time $y$ required to travel $120$ km at speed $x$ lie on a branch of a hyperbola because $x \cdot y = 120$ at every point"}

:::

:::osservazione{#regola-del-tre titolo="The rule of three"}
When two quantities are proportional and one pair of values and a third value are known, the fourth value can be found using a proportion. This method is called the **rule of three**.

- For directly proportional quantities, $3$ kg of oranges cost $4.50$ euros, so the cost $x$ of $5$ kg satisfies $3 : 4.50 = 5 : x$. This gives $x = \dfrac{4.50 \cdot 5}{3} = \dfrac{22.50}{3} = 7.50$ euros.
- For inversely proportional quantities, $4$ friends split an expense and pay $15$ euros each, so with $6$ friends each person's share $x$ satisfies $6 \cdot x = 4 \cdot 15$ because the total is the same. This gives $x = \dfrac{60}{6} = 10$ euros.

The type of proportionality can be determined by observing what happens to one quantity when the other doubles. With more friends, each person's share decreases, so the two quantities are inversely proportional.
:::

## Percentages

:::definizione{#percentuale titolo="Percentage"}
A **percentage** is a fraction with denominator $100$, written with the symbol $\%$ and read “percent.” Thus
$$
25\% = \frac{25}{100} = 0.25 ,
\qquad
5\% = \frac{5}{100} = 0.05 ,
\qquad
150\% = \frac{150}{100} = 1.5 .
$$
In other words, $25\%$ means $25$ parts out of $100$. Percentages can be used to compare quantities taken from different totals because each total is treated as divided into $100$ parts. Some percentages correspond to simple fractions, such as $50\% = \dfrac{1}{2}$, $25\% = \dfrac{1}{4}$, $20\% = \dfrac{1}{5}$ and $10\% = \dfrac{1}{10}$.

::grafico{assi=0 uguale=1 poligoni="0,0 5,0 5,5 0,5" linee="0,0 10,0 10,10 0,10 0,0" segmenti="1,0,1,10;2,0,2,10;3,0,3,10;4,0,4,10;5,0,5,10;6,0,6,10;7,0,7,10;8,0,8,10;9,0,9,10;0,1,10,1;0,2,10,2;0,3,10,3;0,4,10,4;0,5,10,5;0,6,10,6;0,7,10,7;0,8,10,8;0,9,10,9" xmin=-0.5 xmax=10.5 ymin=-0.5 ymax=10.5 titolo="The square is divided into $100$ equal small squares. The $25$ shaded squares make up $25\%$ of the whole square, that is, $\dfrac{25}{100} = \dfrac{1}{4}$"}

:::

:::teorema{#percentuale-di-un-numero titolo="A percentage of a number"}
To find $p\%$ of a number $N$, multiply $N$ by the fraction $\dfrac{p}{100}$.
$$
\frac{p}{100} \cdot N .
$$
For example, $15\%$ of $80$ is $\dfrac{15}{100} \cdot 80 = \dfrac{1200}{100} = 12$. Equivalently, multiply by the decimal, giving $0.15 \cdot 80 = 12$. To find $10\%$ of a number, move the decimal point one place to the left, so $10\%$ of $345$ is $34.5$. Taking $20\%$ gives twice that amount, or $69$.
:::

:::osservazione{#tre-problemi-percentuali titolo="Part, percentage and total"}
A percentage calculation involves three numbers, the total $N$, the percentage $p\%$ and the part $P$. They satisfy the proportion
$$
P : N = p : 100 ,
$$
because the part is to the total as $p$ is to $100$. Given any two of the three numbers, find the third by solving for the unknown term of the proportion.

- To find the part, $30\%$ of $250$ is $P = \dfrac{30 \cdot 250}{100} = 75$.
- To find the percentage, $18$ out of $72$ is $p\%$ with $p = \dfrac{18 \cdot 100}{72} = 25$, that is, $25\%$.
- To find the total, if $12$ is $40\%$ of a number $N$, then $N = \dfrac{12 \cdot 100}{40} = 30$.
:::

## Discounts, increases and successive percentage changes

:::richiamo{titolo="Distributive property"}
For any three numbers $a$, $b$ and $c$, we have $a \cdot b + a \cdot c = a \cdot (b + c)$.
:::

:::teorema{#aumenti-e-sconti titolo="Percentage increases and discounts"}
An increase of $p\%$ multiplies the value $V$ by $1 + \dfrac{p}{100}$, and a discount of $p\%$ multiplies it by $1 - \dfrac{p}{100}$.
$$
V \cdot \left( 1 + \frac{p}{100} \right) ,
\qquad
V \cdot \left( 1 - \frac{p}{100} \right) .
$$
The number by which the value is multiplied is called the **multiplier**. For example, a price of $80$ euros increased by $15\%$ becomes $80 \cdot 1.15 = 92$ euros, and a price of $45$ euros discounted by $20\%$ becomes $45 \cdot 0.8 = 36$ euros.

The rule follows from the distributive property. Increasing $80$ by $15\%$ means adding to $80$ an amount equal to $15\%$ of $80$, that is, calculating $80 + 0.15 \cdot 80$. Since $80 = 80 \cdot 1$, the distributive property gives $80 \cdot (1 + 0.15) = 80 \cdot 1.15$ for this sum. The same reasoning applies to a discount, with subtraction in place of addition.
:::

:::esempio{titolo="From the discounted price to the original price"}
A pair of shoes discounted by $20\%$ costs $64$ euros. The discounted price is the original price $V$ multiplied by $0.8$, so $V \cdot 0.8 = 64$. Therefore, dividing by the multiplier gives the original price.
$$
V = \frac{64}{0.8} = \frac{640}{8} = 80 \text{ euros} .
$$
The result is correct because $20\%$ of $80$ is $16$ and $80 - 16 = 64$.
:::

:::definizione{#variazione-percentuale titolo="Percentage change"}
When a quantity changes from an initial value $V_1$, different from $0$, to a final value $V_2$, its **percentage change** is
$$
\frac{V_2 - V_1}{V_1} \cdot 100 .
$$
The difference is divided by the *initial* value. The result is positive for an increase and negative for a decrease. For example, a bill that rises from $40$ to $46$ euros increases by $15\%$ because $\dfrac{6}{40} \cdot 100 = 15$. A price that falls from $64$ to $48$ euros has a percentage change of $-25\%$ because $\dfrac{-16}{64} \cdot 100 = -25$, so the price decreases by $25\%$.
:::

:::teorema{#percentuali-successive titolo="Successive percentage changes"}
When a value undergoes two successive percentage changes, multiply the original value by both multipliers to find the final value. This is because the second change applies to the value obtained after the first change. For example, a price of $100$ euros discounted first by $20\%$ and then by $10\%$ becomes
$$
100 \cdot 0.8 \cdot 0.9 = 80 \cdot 0.9 = 72 \text{ euros} .
$$
The overall multiplier is $0.8 \cdot 0.9 = 0.72$, so the overall discount is $28\%$.

::grafico{assi=0 uguale=1 poligoni="0,0 2,0 2,5 0,5;3,0 5,0 5,4 3,4;6,0 8,0 8,3.6 6,3.6" linee="-0.5,0 8.5,0" etichette="0.3,5.3,100 €;3.45,4.3,80 €;6.45,3.9,72 €;0.4,-0.7,start;3.4,-0.7,− 20%;6.4,-0.7,− 10%" xmin=-1 xmax=9 ymin=-1.3 ymax=6.2 titolo="A discount of $20\%$ reduces $100$ euros to $80$ euros. The next discount of $10\%$ applies to $80$ euros and brings the price to $72$ euros"}

:::

:::attenzione
Successive percentage changes cannot be added. In the example with two discounts, the sum $20\% + 10\% = 30\%$ would give a final price of $70$ euros. The actual price is $72$ euros because the $10\%$ discount applies to $80$ euros and amounts to $8$ euros. For the same reason, an increase and a discount by the same percentage do not cancel each other out. For example, $100$ euros increased by $10\%$ becomes $110$ euros, and after a discount of $10\%$ the price is $110 \cdot 0.9 = 99$ euros.

::grafico{assi=0 uguale=1 poligoni="0,0 2,0 2,5 0,5;3,0 5,0 5,5.5 3,5.5;6,0 8,0 8,4.95 6,4.95" linee="-0.5,0 8.5,0" segmenti="-0.5,5,8.5,5" etichette="0.3,5.4,100 €;3.3,5.9,110 €;6.45,5.35,99 €;0.4,-0.7,start;3.4,-0.7,+ 10%;6.4,-0.7,− 10%" xmin=-1 xmax=9 ymin=-1.3 ymax=6.6 titolo="The $10\%$ increase raises $100$ euros to $110$ euros. The $10\%$ discount applies to $110$ euros and brings the price to $99$ euros, below the dashed line at $100$ euros"}
:::
