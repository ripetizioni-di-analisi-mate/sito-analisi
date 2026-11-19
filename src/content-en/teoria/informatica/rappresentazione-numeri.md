---
titolo: "Number representation"
sommario: "How to interpret and encode numbers, detect overflow, and round to a floating-point value."
---

## Bases and place values

:::definizione{#notazione-posizionale titolo="Positional notation"}
In the number $345$ the digit $3$ is worth three hundred, the digit $4$ is worth forty and the digit $5$ is worth five, since $345=3\cdot 100+4\cdot 10+5\cdot 1$. The value of each digit therefore depends on the position it occupies. A way of writing numbers with this property is called **positional notation**. The numbers $1$, $10$ and $100$ are powers of $10$, and $10$ is the **base** of decimal notation.

The same rule holds for any base $b$, provided it is an integer greater than or equal to $2$. The allowed digits are the integers from $0$ to $b-1$. Positions are numbered from the right starting at $0$, and the digit in position $i$, denoted by $d_i$, is multiplied by the **weight** $b^i$. A numeral with $k$ digits is therefore worth
$$
(d_{k-1}\cdots d_0)_b = \sum_{i=0}^{k-1} d_i b^i .
$$
The subscript $b$ specifies the base. The rightmost digit has weight $b^0=1$, and each move one position to the left multiplies the weight by $b$. In base $2$ the weights are $1$, $2$, $4$, $8$, $16$ and so on.
:::

:::esempio{titolo="From binary to decimal"}
In base $2$ the only allowed digits are $0$ and $1$, and they are called **bits**, short for *binary digits*. A sequence of bits is called a **word**. The word $101101$ has six bits, so the positions run from $0$, on the right, to $5$, on the left.

![Six positions with indices 5 through 0, bits 1 0 1 1 0 1, and weights from 32 to 1.](/immagini/informatica/rappresentazione-numeri/pesi-binari-en.png)

A bit equal to $0$ adds nothing, because it multiplies the weight of its position by zero. One therefore adds the weights of the four positions in which the bit is $1$.
$$
\begin{aligned}
(101101)_2
  &= 1\cdot 2^5 + 0\cdot 2^4 + 1\cdot 2^3 \\
  &\quad + 1\cdot 2^2 + 0\cdot 2^1 + 1\cdot 2^0 \\[6pt]
  &= 32+8+4+1 = 45 .
\end{aligned}
$$
The term $1$ comes from the bit with index $0$. All the other weights are even, so a number written in binary is odd exactly when its rightmost bit is $1$.
:::

:::osservazione
The numeral $(110)_2$ is worth $4+2=6$, whereas $(110)_{10}$ is worth $100+10=110$. The same digits therefore denote different numbers in different bases, which is why the base is written as a subscript. A leading zero does not change the value, because its weight is multiplied by $0$, so $(00110)_2$ is still worth $6$. The two numerals do have different lengths, five digits and three digits. Length becomes important later on, for words with a fixed number of bits.
:::

## From integers to digits

::::teorema{#conversione-interi titolo="Repeated division by the base"}
To find the digits of a number in a base $b$, one divides repeatedly by $b$ and collects the remainders. Let $N$ be a positive integer. Dividing $N$ by the base $b$ gives an integer quotient $q$ and a remainder $r$ with
$$
N=bq+r,\qquad 0\leq r<b .
$$
The remainder is the digit with index $0$, that is, the rightmost one. The division is repeated on the quotient until the quotient is zero. The remainders, read from the last to the first, give the unique numeral for $N$ in base $b$ with no leading zeros. The integer $0$ is written with the digit $0$.

:::dimostrazione
Division with remainder between integers, called Euclidean division, has a single quotient and a single remainder. In positional notation, the terms with index at least $1$ are divisible by $b$, so the term with index $0$ coincides with the remainder. The digits of the quotient are the remaining ones, with their indices decreased by one.

For $N>0$ and $b\geq 2$, the quotient is less than the dividend because $q\leq \dfrac{N}{2}<N$. Repeating the step therefore gives a quotient of zero after finitely many divisions. Substituting each dividend with its quotient multiplied by $b$ plus its remainder reconstructs $N$ as a sum of weighted remainders. The uniqueness of the divisions determines every digit.
:::
::::

:::esempio{titolo="Finding the order of the remainders"}
To convert $26$ to base $2$, carry out the divisions shown here. On the right of the equals sign in each line, the quotient is the number multiplied by the base $2$.
$$
\begin{aligned}
26 &= 2\cdot 13+0 \\
13 &= 2\cdot 6+1 \\
6 &= 2\cdot 3+0 \\
3 &= 2\cdot 1+1 \\
1 &= 2\cdot 0+1 .
\end{aligned}
$$
The first remainder is $0$ and occupies the position of weight $1$. The last one is $1$ and occupies the position of weight $16$. The remainders are therefore read from bottom to top, and the resulting word is $(11010)_2$. The inverse computation gives $16+8+2=26$, so the two conversions agree.
:::

:::osservazione
The value of a numeral can also be computed from the left, one digit at a time. One starts from the first digit. At each new digit $d$, the value obtained so far is multiplied by $b$ and $d$ is added. For $(102)_3$ one obtains first $1$, then $1\cdot 3+0=3$, then $3\cdot 3+2=11$. The result coincides with the expanded form $1\cdot3^2+0\cdot3+2=11$. The rule works because appending a digit on the right moves all the previous digits one position to the left, that is, it multiplies their value by $b$.
:::

## Hexadecimal and groups of four bits

:::definizione{#esadecimale titolo="Hexadecimal notation"}
The **hexadecimal base** is base $16$. It is used to write binary words in a short form, because one hexadecimal digit replaces four bits. Sixteen digits are needed. The digits from $0$ to $9$ keep their value and the letters $A,B,C,D,E,F$ are worth $10,11,12,13,14,15$ respectively. Since $16=2^4$, four bits have $16$ configurations, from $0000$ to $1111$, one for each hexadecimal digit.
:::

::::teorema{titolo="Grouping bits in fours"}
To convert a binary integer to hexadecimal, group the bits in fours starting at the right. If the leftmost group has fewer than four bits, pad it on the left with zeros. Replace each group with the hexadecimal digit of the same value. To convert in the other direction, replace each hexadecimal digit with four bits, preserving every zero inside the word.

:::dimostrazione
Let $h_j$ be the value of the group at index $j$, with $j=0$ for the rightmost group. The bit with weight $2^i$ within its group has overall weight $2^{4j+i}$. Since $2^{4j+i}=16^j 2^i$, the total contribution of the group is $h_j16^j$. This is the positional formula for base $16$.
:::
::::

:::esempio{titolo="From a binary word to hexadecimal"}
The word $(110101101)_2$ has nine bits. Padding it on the left gives three complete groups.
$$
\begin{aligned}
(110101101)_2 &= (0001\;1010\;1101)_2 \\
              &= (1AD)_{16} .
\end{aligned}
$$
The group $1010$ has value $8+2=10$ and is written as $A$. The group $1101$ has value $8+4+1=13$ and is written as $D$. The digit $1$ has weight $16^2$, so evaluating in decimal gives $256+160+13=429$.
:::

:::attenzione
The groups of four bits are formed starting from the right, and the padding zeros are added on the left. The incomplete group $1$ therefore becomes $0001$, which is still worth $1$. With three zeros added on the right one would obtain $1000$, which in binary is worth $8$.
:::

## Unsigned integers and bit width

:::definizione{#interi-senza-segno titolo="Unsigned n-bit integers"}
In a computer every number occupies a fixed number of bits, for example $8$, $16$ or $32$. An **$n$-bit word** is a sequence of exactly $n$ bits, with $n\geq 1$, in which leading zeros are written too. The leftmost bit, with index $n-1$, is called the **most significant bit**; the rightmost one, with index $0$, is the **least significant bit**. Calling $b_i$ the bit with index $i$, if the word is read as a non-negative number its **unsigned** value $U$ is
$$
U=\sum_{i=0}^{n-1} b_i2^i .
$$
The possible values are all the integers from $0$ to $2^n-1$. The minimum has all bits equal to zero. The maximum has all bits equal to one and is worth $1+2+\dots+2^{n-1}=2^n-1$. For $n=3$ the eight words from $000$ to $111$ are worth $0$ to $7$. Each value corresponds to a single word, because the fixed width determines how many leading zeros to write.
:::

:::esempio{titolo="Choosing a word width"}
A device counter must hold the integers from $0$ to $1000$. With $9$ bits, the largest available value is $2^9-1=511$, so the width is insufficient. With $10$ bits, the maximum increases to $2^{10}-1=1023$, so $1000$ is representable. Since the maxima increase with $n$, **ten bits** are the minimum. The counter requires $1001$ states because it includes $0$. The $2^{10}=1024$ available states leave $23$ unused patterns.
:::

:::osservazione
The minimum width for a positive integer $N$ is the smallest $n$ for which $N\leq 2^n-1$, that is, $N<2^n$. For $N=1000$ we have $2^9=512\leq 1000<1024=2^{10}$, so ten bits are needed. A power of two requires one bit more than its exponent. For example, $128=2^7$ requires eight bits and is written $10000000$.
:::

## Two's complement

:::definizione{#complemento-a-due titolo="Two's-complement interpretation"}
To represent negative numbers as well with $n$ bits, the most widely used encoding is **two’s complement**. The bits have the same weights as in the unsigned reading, except for the most significant bit, which has the negative weight $-2^{n-1}$ instead of $2^{n-1}$. On $4$ bits the weights are $-8$, $4$, $2$, $1$, so $1011$ is worth $-8+2+1=-5$ and $0101$ is worth $4+1=5$. In general the signed value $T$ is
$$
T=-b_{n-1}2^{n-1}+\sum_{i=0}^{n-2} b_i2^i .
$$
If the most significant bit is $0$, the value lies between $0$ and $2^{n-1}-1$. If it is $1$, the value is negative, between $-2^{n-1}$ and $-1$; for this reason it is also called the **sign bit**. On $4$ bits the values range from $-8$ to $7$. There is one more negative value than positive values, because the words with sign bit $0$ include zero. For $n=1$ the sum has no terms and is worth $0$.
:::

::::teorema{titolo="Converting between a signed value and a word"}
Let $x$ be an integer representable in two’s complement on $n$ bits. If $x\ge 0$, its word is the binary numeral of $x$ on $n$ bits. If $x<0$, its word is the binary numeral on $n$ bits of the positive number $x+2^n$. In the opposite direction, to find the value of a word one reads its unsigned value $U$ and subtracts $2^n$ when the first bit is $1$.

:::dimostrazione
For the same word, the most significant bit alone accounts for the difference between the unsigned and signed values. Its weight changes from $2^{n-1}$ to $-2^{n-1}$, so $U-T=b_{n-1}2^n$. If $T$ is negative, the first bit is $1$, so $U=T+2^n$. If $T$ is zero or positive, the first bit is $0$ and both values agree. The unsigned encoding of $U$ is unique, so the signed encoding is also unique.
:::
::::

:::esempio{titolo="Encoding a negative value"}
To represent $-34$ in $8$ bits, compute $-34+2^8=222$. Since $222=128+64+16+8+4+2$, the word is $11011110$. Checking with the signed weights gives
$$
-128+64+16+8+4+2=-34.
$$
The same word is worth $222$ when read as unsigned. The difference $222-(-34)=256$ is exactly $2^8$, as the theorem states.
:::

:::osservazione
On $8$ bits in two’s complement the values range from $-128$ to $127$. The opposite of $-128$ is $128$, which exceeds the maximum, so it cannot be written on $8$ bits. For this reason the absolute value of $-128$ requires a wider word.
:::

## Fixed-width addition and extension

::::teorema{#somma-su-n-bit titolo="Addition modulo a power of two"}
The sum of two $n$-bit words may require $n+1$ bits. The computer keeps only the $n$ rightmost bits and discards the final carry. On $4$ bits, $1100+0101$ gives $10001$, and discarding the leftmost bit leaves $0001$. As unsigned numbers the exact sum is $12+5=17$ and the value kept is $1$, that is, the remainder of the division of $17$ by $16=2^4$. In general, the unsigned value of the word that is kept is the remainder of the division of the exact sum by $2^n$; this remainder is called the sum **modulo** $2^n$. The same rule holds when the operands are read in two’s complement.

:::dimostrazione
The retained digits have indices from $0$ to $n-1$. Each discarded digit has index at least $n$, so its contribution is a multiple of $2^n$. The sum of the retained place-value contributions is between $0$ and $2^n-1$, so it is the remainder. Switching from the unsigned to the signed value of each operand changes that term by zero or $-2^n$, which leaves the remainder unchanged.
:::
::::

:::definizione{titolo="Addition overflow"}
**Overflow** occurs when the exact result of a sum is not representable with the $n$ bits of the format, so that the word that is kept does not contain the correct result. For unsigned numbers, overflow is recognized from the carry beyond the last position. In two’s complement it is recognized from the sign bits, because the two addends have the same sign bit and the result has the opposite sign bit.

The rule for two’s complement follows from three cases. If the addends have different signs, the sum lies between the two and is therefore representable. If both are non-negative and the sum exceeds the maximum, the word that is kept has sign bit $1$ and is read as a negative number. If both are negative and the sum falls below the minimum, the word that is kept has sign bit $0$ and is read as a non-negative number.
:::

:::esempio{titolo="Interpreting the same words after addition"}
On four bits the sum of $0111$ and $0011$ is $1010$, with no final carry. As unsigned numbers the words are worth $7$ and $3$ and the result is worth $10$, which is correct because the range goes from $0$ to $15$. In two’s complement the addends are still worth $7$ and $3$, but the largest representable value is $7$. The word $1010$ is read as $-8+2=-6$, which is not the correct sum, so there is overflow. The two addends have sign bit $0$ and the result has sign bit $1$, as the rule predicts.
:::

::::teorema{#estensione-di-segno titolo="Sign extension"}
One often needs to copy a number from an $n$-bit word to a wider word, of $m$ bits, without changing its value. In two’s complement one prepends $m-n$ copies of the most significant bit, and this operation preserves the value. In the unsigned format one prepends zeros.

:::dimostrazione
Let $s$ be the most significant bit of the original word. The existing bits keep their positions from $0$ through $n-1$. Let $U_n$ and $U_m$ be the unsigned values of the two words. The added bits contribute $s(2^m-2^n)$ in total because $\sum_{i=n}^{m-1}2^i=2^m-2^n$. The signed value of the extended word is
$$
\begin{aligned}
T_m &= U_m-s2^m \\
    &= U_n+s(2^m-2^n)-s2^m \\
    &= U_n-s2^n=T_n .
\end{aligned}
$$
The unsigned procedure adds only zero contributions and therefore preserves $U_n$.
:::
::::

:::esempio{titolo="Widening a negative word"}
The four-bit word $1011$ has signed value $-8+2+1=-5$. Prepending two copies of the leading bit $1$ gives $111011$. The weight of the new most significant bit is $-32$, and the bits set to $1$ in the other positions contribute $16+8+2+1$, so the sum is still $-5$.

If the same original word is read as unsigned, its value is $8+2+1=11$. Prepending two zeros gives $001011$, preserving $11$. In this case the two extensions give different bit patterns because the original leading bit has weight $8$ in the unsigned interpretation and $-8$ in the signed interpretation. For a word that starts with zero, both extensions prepend zeros, and the value is the same in both formats.
:::

## Binary fractions and fixed point

:::definizione{#frazioni-binarie titolo="Fractional weights in base two"}
In the **fractional part** of a binary numeral, the first bit to the right of the binary point has weight $2^{-1}$. The next bit has weight $2^{-2}$. Moving right halves the weight at each position, just as in the integer part. For example,
$$
(0.101)_2=\frac{1}{2}+\frac{0}{4}+\frac{1}{8}
=\frac{5}{8}.
$$
To find the bits of a fraction $r$ with $0\leq r<1$, one doubles repeatedly. At each doubling the integer part of the result, $0$ or $1$, is the next bit, and the part after the point is the number to double at the following step. For $r=0.625$ there are three steps.

- $2\cdot 0.625=1.25$, so the first bit is $1$ and $0.25$ remains.
- $2\cdot 0.25=0.5$, so the second bit is $0$ and $0.5$ remains.
- $2\cdot 0.5=1$, so the third bit is $1$ and $0$ remains.

The remainder is zero, so the procedure ends and $0.625=(0.101)_2$, in agreement with $\dfrac{5}{8}=0.625$. The method works because doubling moves the binary point one position to the right, so that the first fractional bit becomes the integer part. If the remainder never becomes zero, the binary numeral has infinitely many bits. After $f$ steps the part not yet written is worth less than $2^{-f}$.
:::

::::teorema{titolo="Condition for a finite binary representation"}
Not every fraction has a finite binary numeral. Let $\dfrac{a}{d}$ be a fraction in lowest terms with integers $a\ge 0$ and $d\ge 1$. The value admits a binary numeral with a finite number of fractional bits if and only if the denominator $d$ is a power of $2$, including $1=2^0$.

:::dimostrazione
If the representation has $f$ fractional bits, multiplying the value by $2^f$ gives an integer $K$. Therefore $\dfrac{a}{d}=\dfrac{K}{2^f}$. Since $a$ and $d$ are relatively prime, $d$ divides $2^f$, so it is a power of $2$.

Conversely, if $d=2^f$, write $a$ in base $2$ and move the binary point $f$ places to the left. If additional digits are required, prepend zeros. The shift divides each weight by $2^f$, giving exactly the required value.
:::
::::

:::esempio{titolo="Halving and the denominator in lowest terms"}
The fraction $\dfrac{3}{8}$ has denominator $2^3$, so it is enough to write $3$ in binary, that is, $11$, and move the point three positions to the left. We have $(0.011)_2=\dfrac{1}{4}+\dfrac{1}{8}=\dfrac{3}{8}$. The decimal number $0.1$ is the fraction $\dfrac{1}{10}$. Since $10=2\cdot 5$ is not a power of $2$, its binary numeral has infinitely many fractional bits. For this reason a computer, which has a finite number of bits available, keeps only an approximate value of $0.1$.
:::

:::definizione{#virgola-fissa titolo="Binary fixed-point format"}
In **fixed point** one decides once and for all how many bits of the word lie after the point. If there are $f$ fractional bits, the $n$-bit word is first read as an integer $K$, signed or unsigned according to the format, and its value is $\dfrac{K}{2^f}$. With $n=4$ and $f=2$ the word $0111$ is worth $K=7$ as an integer and $\dfrac{7}{4}=1.75$ in fixed point, that is, $(01.11)_2$. Two consecutive values are $2^{-f}$ apart, because the corresponding integers differ by $1$; this distance is the **step** of the format.
:::

:::esempio{titolo="Range and spacing of the format"}
A six-bit two's-complement word with three fractional bits uses the integers from $-32$ to $31$ with a scale factor of $\dfrac{1}{8}$. The values therefore range from $-4$ to $\dfrac{31}{8}$ in steps of $\dfrac{1}{8}$. The word $110101$ has $U=53$ and $K=53-64=-11$, so the represented value is $-\dfrac{11}{8}=-1.375$.
:::

## Floating point and rounding

:::definizione{#virgola-mobile titolo="Normalized binary form"}
**Floating point** is scientific notation in base two. In base ten one writes $4250=4.25\cdot 10^3$, with a single nonzero digit before the point and a power of ten. In base two the only nonzero digit is $1$, so a positive number is written in the form
$$
x=(1.b_1\cdots b_{p-1})_2\cdot 2^e .
$$
This form is called **normalized**. The factor $(1.b_1\cdots b_{p-1})_2$ is the **significand**, between $1$ inclusive and $2$ exclusive, and the integer $e$ is the **exponent**. The **precision** $p\geq 2$ is the number of bits of the significand, including the leading $1$. For example $(110.01)_2=(1.1001)_2\cdot 2^2$, because the point moves two positions to the left. For a positive number less than $1$ the point moves to the right up to the first bit equal to $1$ and the exponent is negative. In $(0.0011)_2$ the first bit equal to $1$ is in the third place after the point, hence $(0.0011)_2=(1.1)_2\cdot 2^{-3}$; with precision $p=4$ the significand is written $1.100$. In this chapter the exponent may be any integer and zero is treated separately.
:::

:::osservazione
With precision $p$ the representable numbers are not all the real numbers, but a grid of values. With the exponent $e$ fixed, two consecutive significands are $2^{-(p-1)}$ apart, so two consecutive values between $2^e$ and $2^{e+1}$ are $2^{e-(p-1)}$ apart. When the exponent increases by one, the distance doubles. For $p=4$ the values between $4$ and $8$ are $4$; $4.5$; $5$; $5.5$ and so on, in steps of $0.5$, whereas between $8$ and $16$ the step is $1$.
:::

:::definizione{#arrotondamento titolo="Round to nearest, ties to even"}
A number that does not belong to the grid is replaced by a nearby representable value, and this operation is **rounding**. Let $L$ and $H$ be the two consecutive representable values with $L<x<H$. **Rounding to nearest** chooses the one of the two that is closer to $x$. With $p=4$, the number $5.6$ lies between $5.5$ and $6$ and is closer to $5.5$, so it is rounded to $5.5$. A value that is already representable is left unchanged, and the error is at most half the distance $H-L$.

If $x$ is exactly halfway between $L$ and $H$, one chooses the value whose significand ends with the bit $0$. The rule is called *ties to even*. Of two consecutive significands one ends with $0$ and the other with $1$, so the choice is always determined.
:::

:::esempio{titolo="Midpoint between two representable values"}
Let $p=4$ and $x=(101.11)_2=5.75$. The normalized form is
$$
x=(1.0111)_2\cdot 2^2 .
$$
The adjacent representable values are $L=(1.011)_2\cdot 2^2=5.5$ and $H=(1.100)_2\cdot 2^2=6$. The distances satisfy $x-L=H-x=0.25$, so the parity rule applies. The significand of $H$ ends in $0$, so the rounded value is $6$.

![Number line with 5.5 and 6 on either side of 5.75. The ties-to-even rule selects 6.](/immagini/informatica/rappresentazione-numeri/arrotondamento-en.png)

In this interval, the step is $0.5$. The exact value is halfway across the step, so the absolute rounding error is $0.25$.
:::

:::attenzione
Rounding can also change the exponent. With $p=3$, the midpoint between $(1.11)_2\cdot2^2=7$ and $(1.00)_2\cdot2^3=8$ is $7.5$. The significand of $8$ has last bit $0$, so the rounded value is $8$ and the exponent changes from $2$ to $3$.
:::
