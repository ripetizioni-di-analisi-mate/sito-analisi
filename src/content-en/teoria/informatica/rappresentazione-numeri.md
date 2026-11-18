---
titolo: "Number representation"
sommario: "How to interpret and encode numbers, detect overflow, and round to a floating-point value."
---

## Bases and place values

:::definizione{#notazione-posizionale titolo="Positional notation"}
In **positional notation**, each digit contributes to a number's value with a weight that depends on its position. Let $b$ be an integer greater than or equal to $2$ and let $k\geq 1$ be the number of digits. For each index $i$ with $0\leq i<k$, the digit $d_i$ is an integer with $0\leq d_i<b$. Index $0$ denotes the rightmost position. The value of the numeral $(d_{k-1}\cdots d_0)_b$ is
$$
(d_{k-1}\cdots d_0)_b = \sum_{i=0}^{k-1} d_i b^i .
$$
The subscript $b$ specifies the **base**. The rightmost digit has weight $1$ because $b^0=1$. Each move one position to the left multiplies the weight by $b$, so the same digit contributes different values in different positions.
:::

:::esempio{titolo="From binary to decimal"}
In base $2$, the digits $0$ and $1$ are called **bits**, short for *binary digits*. In the word $101101$, the leftmost index is $5$ because there are six positions starting at $0$.

![Six positions with indices 5 through 0, bits 1 0 1 1 0 1, and weights from 32 to 1.](/immagini/informatica/rappresentazione-numeri/pesi-binari-en.png)

Each digit $0$ multiplies its position's weight by zero, so only the four bits equal to $1$ contribute.
$$
\begin{aligned}
(101101)_2
  &= 1\cdot 2^5 + 0\cdot 2^4 + 1\cdot 2^3 \\
  &\quad + 1\cdot 2^2 + 0\cdot 2^1 + 1\cdot 2^0 \\[6pt]
  &= 32+8+4+1 = 45 .
\end{aligned}
$$
The term $1$ comes from the bit at index $0$. Since all the weights to its left are even, that bit alone determines the parity of the unsigned integer.
:::

:::osservazione
The numeral $(110)_2$ has value $4+2=6$, whereas $(110)_{10}$ has value $100+10=110$. Specifying the base removes ambiguity when the same digits are valid in more than one base. A leading zero adds a weight multiplied by $0$, so $(00110)_2$ still has value $6$. The two representations have different lengths, which matters when the number of positions in a word is specified.
:::

## From integers to digits

::::teorema{#conversione-interi titolo="Repeated division by the base"}
Let $N$ be a positive integer. Dividing $N$ by the base $b$ gives an integer quotient $q$ and a remainder $r$ with
$$
N=bq+r,\qquad 0\leq r<b .
$$
The remainder is the digit at index $0$. The division is repeated on each quotient until the quotient is zero. Reading the remainders in reverse order gives the unique representation of $N$ in base $b$ without leading zeros. The integer $0$ is represented by the digit $0$.

:::dimostrazione
Euclidean division uniquely determines the quotient and remainder. In positional notation, the terms with index at least $1$ are divisible by $b$, so the term at index $0$ is the remainder. The quotient consists of the remaining digits, with each index decreased by one.

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
The first remainder is $0$ and occupies the position of weight $1$. The last is $1$ and occupies the position of weight $16$. The resulting word is $(11010)_2$. Decoding it gives $16+8+2=26$, so the two conversions agree.
:::

:::osservazione
A second procedure reads the digits of a word from left to right. If $v$ is the value of the prefix already read and $d$ is the new digit, the new prefix has value $bv+d$. Adding the new digit on the right increases the index of each earlier digit by one. Applying the rule to $(102)_3$ gives $1$, $3$, and $11$ in that order. The expanded form gives $1\cdot3^2+0\cdot3+2=11$.
:::

## Hexadecimal and groups of four bits

:::definizione{#esadecimale titolo="Hexadecimal notation"}
**Hexadecimal** uses base $16$. The digits $0$ through $9$ keep their values, and $A,B,C,D,E,F$ denote $10,11,12,13,14,15$ respectively. Since $16=2^4$, four bits have $16$ distinct patterns and represent exactly the sixteen hexadecimal digits.
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
When converting an integer part, the groups are aligned with the bit of weight $1$. Appending three zeros to the right of $1$ would give $1000$, whose binary value is $8$. Prepending them gives $0001$, preserving the value $1$.
:::

## Unsigned integers and bit width

:::definizione{#interi-senza-segno titolo="Unsigned n-bit integers"}
An $n$-bit word is a sequence of fixed length $n$ with $n\geq 1$. Let $b_i$ be the bit at index $i$. Its **unsigned** value $U$ is
$$
U=\sum_{i=0}^{n-1} b_i2^i .
$$
The possible values are all the integers from $0$ to $2^n-1$. Every bit of the minimum is zero. Every bit of the maximum is one, giving $1+2+\dots+2^{n-1}=2^n-1$. The representation is unique because each value has a unique positional representation up to leading zeros, and the specified width determines how many leading zeros it needs.
:::

:::esempio{titolo="Choosing a word width"}
A device counter must hold the integers from $0$ to $1000$. With $9$ bits, the largest available value is $2^9-1=511$, so the width is insufficient. With $10$ bits, the maximum increases to $2^{10}-1=1023$, so $1000$ is representable. Since the maxima increase with $n$, **ten bits** are the minimum. The counter requires $1001$ states because it includes $0$. The $2^{10}=1024$ available states leave $23$ unused patterns.
:::

:::osservazione
For a positive integer $N$, the minimum width $n$ satisfies $2^{n-1}\leq N<2^n$. The left-hand inequality shows that the position of weight $2^{n-1}$ is needed. The right-hand inequality guarantees that the number can be represented in $n$ bits. For example, $128=2^7$ requires eight bits and is written $10000000$.
:::

## Two's complement

:::definizione{#complemento-a-due titolo="Two's-complement interpretation"}
For an $n$-bit word, **two's-complement** encoding assigns weight $-2^{n-1}$ to the most significant bit and keeps the positive weights of the other bits. The signed value $T$ is
$$
T=-b_{n-1}2^{n-1}+\sum_{i=0}^{n-2} b_i2^i .
$$
For $n=1$, the sum is empty, so it equals $0$. If the leading bit is $0$, the value is between $0$ and $2^{n-1}-1$. If it is $1$, the value is between $-2^{n-1}$ and $-1$. The range therefore has one more negative value than strictly positive values, because one pattern with leading bit $0$ represents zero.
:::

::::teorema{titolo="Converting between a signed value and a word"}
Let $x$ be an integer in the range of $n$-bit two's complement. The corresponding word is the unsigned encoding of $x$ if $x\ge 0$ and of $x+2^n$ if $x<0$. To decode the word, read its unsigned value $U$ and subtract $2^n$ when its first bit is $1$.

:::dimostrazione
For the same word, the most significant bit alone accounts for the difference between the unsigned and signed values. Its weight changes from $2^{n-1}$ to $-2^{n-1}$, so $U-T=b_{n-1}2^n$. If $T$ is negative, the first bit is $1$, so $U=T+2^n$. If $T$ is zero or positive, the first bit is $0$ and both values agree. The unsigned encoding of $U$ is unique, so the signed encoding is also unique.
:::
::::

:::esempio{titolo="Encoding a negative value"}
To represent $-34$ in $8$ bits, compute $-34+2^8=222$. Since $222=128+64+16+8+4+2$, the word is $11011110$. Checking with the signed weights gives
$$
-128+64+16+8+4+2=-34.
$$
The same word has unsigned value $222$. The difference $222-(-34)=256$ equals $2^8$, so each reading follows its corresponding rule.
:::

:::osservazione
The minimum for $8$-bit two's complement is $-128$, and the maximum is $127$. The opposite of $-128$ therefore requires a greater width. This case matters when computing an absolute value in the same destination format.
:::

## Fixed-width addition and extension

::::teorema{#somma-su-n-bit titolo="Addition modulo a power of two"}
The remainder modulo $m$ is the remainder from Euclidean division by the positive integer $m$. If two $n$-bit words are added and the $n$ least significant positions are retained, the unsigned value of the resulting word is the remainder of the sum of the operand values modulo $2^n$. This also holds when the operands are interpreted in two's complement.

:::dimostrazione
The retained digits have indices from $0$ to $n-1$. Each discarded digit has index at least $n$, so its contribution is a multiple of $2^n$. The sum of the retained place-value contributions is between $0$ and $2^n-1$, so it is the remainder. Switching from the unsigned to the signed value of each operand changes that term by zero or $-2^n$, which leaves the remainder unchanged.
:::
::::

:::definizione{titolo="Addition overflow"}
**Overflow** occurs when the mathematical sum lies outside the range representable in the operands' format. In the unsigned case, a carry out of the most significant position indicates overflow. In two's complement, overflow occurs if the two inputs have the same sign bit and the reduced result has the opposite sign bit.

For operands with different signs, the sum lies between the two operands, so it remains representable. A sum of two nonnegative operands that exceeds the maximum lies between $2^{n-1}$ and $2^n-2$, and its remainder has leading bit $1$. A sum of two negative operands that falls below the minimum lies between $-2^n$ and $-2^{n-1}-1$. Adding $2^n$ gives a remainder between $0$ and $2^{n-1}-1$, with leading bit $0$.
:::

:::esempio{titolo="Interpreting the same words after addition"}
In four bits, adding $0111$ and $0011$ produces $1010$. The unsigned computation gives $7+3=10$, which belongs to the range from $0$ to $15$. The two's-complement mathematical sum is still $10$, while the maximum is $7$. The resulting word represents $10-16=-6$ in that format, so signed overflow occurs. The rule for retaining digits describes the mathematical word model. In a programming language, the behavior of an operation depends on the rules of its type and operator.
:::

::::teorema{#estensione-di-segno titolo="Sign extension"}
To extend a two's-complement word from $n$ to $m$ bits with $m>n$, prepend $m-n$ copies of the most significant bit. This operation preserves the value. To extend to the same width in the unsigned format, prepend zeros.

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
To recover the digits from a fraction $r$ between $0$ inclusive and $1$ exclusive, double $r$. The integer part of $2r$ is the first bit, and the fractional part is the residual to which the procedure is applied again. If $a_1$ is the integer part and $r_1$ is the residual, the equality $2r=a_1+r_1$ gives $r=a_1 2^{-1}+r_1 2^{-1}$. In the second iteration, writing $2r_1=a_2+r_2$ gives
$$
r=a_1 2^{-1}+a_2 2^{-2}+r_2 2^{-2} .
$$
At each iteration the new bit occupies the position immediately to the right of the preceding one. After $f$ iterations, the outstanding contribution is less than $2^{-f}$ because the residual is less than $1$. Once a residual is zero, the bits already found give the exact value.
:::

::::teorema{titolo="Condition for a finite binary representation"}
Let $\dfrac{a}{d}$ be a fraction in lowest terms with integers $a\ge 0$ and $d\ge 1$. The value has a binary representation with finitely many fractional bits if and only if the denominator $d$ is a power of $2$, including $1=2^0$.

:::dimostrazione
If the representation has $f$ fractional bits, multiplying the value by $2^f$ gives an integer $K$. Therefore $\dfrac{a}{d}=\dfrac{K}{2^f}$. Since $a$ and $d$ are relatively prime, $d$ divides $2^f$, so it is a power of $2$.

Conversely, if $d=2^f$, write $a$ in base $2$ and move the binary point $f$ places to the left. If additional digits are required, prepend zeros. The shift divides each weight by $2^f$, giving exactly the required value.
:::
::::

:::esempio{titolo="Halving and the denominator in lowest terms"}
The fraction $\dfrac{3}{8}$ has denominator $2^3$, so begin with $11$ and use three positions after the binary point. This gives $(0.011)_2=\dfrac{1}{4}+\dfrac{1}{8}=\dfrac{3}{8}$. For $0.1$ in base ten, the fraction in lowest terms is $\dfrac{1}{10}$. Since $10$ has a factor of $5$, its binary expansion requires infinitely many fractional bits. A finite-precision format represents an approximation.
:::

:::definizione{#virgola-fissa titolo="Binary fixed-point format"}
In **fixed point**, the integer number $f\geq 0$ of fractional bits is a property of the format. A word of $n$ bits is first interpreted as an integer $K$, signed or unsigned according to the format. Then $K$ is divided by $2^f$. The difference between two consecutive values is $2^{-f}$ because the corresponding integers differ by $1$.
:::

:::esempio{titolo="Range and spacing of the format"}
A six-bit two's-complement word with three fractional bits uses the integers from $-32$ to $31$ with a scale factor of $\dfrac{1}{8}$. The values therefore range from $-4$ to $\dfrac{31}{8}$ in steps of $\dfrac{1}{8}$. The word $110101$ has $U=53$ and $K=53-64=-11$, so the represented value is $-\dfrac{11}{8}=-1.375$.
:::

## Floating point and rounding

:::definizione{#virgola-mobile titolo="Normalized binary form"}
A **normalized** binary form for a positive number uses a significand between $1$ inclusive and $2$ exclusive, multiplied by a power of $2$. In the simplified model with precision $p$ and $p\geq 2$, a representable positive value has the form
$$
x=(1.b_1\cdots b_{p-1})_2\cdot 2^e .
$$
The precision $p$ also counts the leading $1$ bit of the significand. The integer $e$ is the **exponent**. In this model the exponents are unrestricted, and zero is represented separately. Moving the binary point to leave just one bit to its left changes the exponent so that the product keeps the same value. For example, $(110.01)_2=(1.1001)_2\cdot 2^2$. For positive numbers less than $1$, the binary point moves right to the first digit $1$, so the exponent is negative. In $(0.0011)_2$ the first bit equal to $1$ is in the third place after the binary point, so $(0.0011)_2=(1.1)_2\cdot 2^{-3}$. At precision $p=4$, the significand can be written $1.100$ because trailing zeros contribute nothing.
:::

:::osservazione
For a fixed exponent $e$, consecutive significands differ by $2^{-(p-1)}$. Consecutive values in the same interval $[2^e,2^{e+1})$ therefore differ by $2^{e-(p-1)}$. When the scale doubles, from $e$ to $e+1$, the spacing also doubles. For $p=4$, the step from $4$ to $8$ is $2^{-1}$, while the step from $8$ up to $16$ is $1$.
:::

:::definizione{#arrotondamento titolo="Round to nearest, ties to even"}
Let $L$ and $H$ be the consecutive representable values immediately below and above a positive value $x$ to be approximated. **Rounding to nearest** chooses the value closer to $x$. If the distances are equal, the *ties-to-even* rule chooses the value whose last significand bit is $0$. A value that is already representable is unchanged. If the value is below the arithmetic midpoint $\dfrac{L+H}{2}$, the distance to $L$ is less than the distance to $H$, so $L$ is selected. If it is above, $H$ is selected. The magnitude of the difference between exact and rounded values is therefore at most half the distance $H-L$.

The parity rule concerns the significand bits, so it also applies to values with a fractional part in decimal. For two consecutive significands with the same exponent, one last bit is $0$ and the other is $1$. At a boundary between exponents, the significand goes from $1.11\ldots 1$ to $1.00\ldots 0$, whose last bit is $0$.
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
