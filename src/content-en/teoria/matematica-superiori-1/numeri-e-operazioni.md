---
titolo: Numbers, operations, and fractions
sommario: Number sets, signs, order of operations, fractions, and problems involving exact quantities.
---

## Number sets and equivalent representations

:::definizione{#insiemi-numerici titolo="Natural numbers, integers, and rational numbers"}
The **natural numbers** are $0,1,2,3,\ldots$. In this course, zero is included in $\mathbb N$. The **integers** also include the opposites of the natural numbers, so $\mathbb Z=\{\ldots,-2,-1,0,1,2,\ldots\}$. The **rational numbers** can be written as $\dfrac ab$, where $a,b$ are integers and $b\ne0$.

Every integer is rational because $a=\dfrac a1$. One quantity can have several representations, such as $\dfrac12=\dfrac24=0.5$. A fraction is **in lowest terms** when its numerator and denominator have no common divisor greater than one. For example, $\dfrac{18}{24}=\dfrac34$ after dividing both terms by six.
:::

## Operations and signs

:::teorema{#operazioni titolo="Signs and the order of operations"}
Adding signed numbers can be read as movement on the number line. For example, $-7+10=3$ and $-7-10=-17$. Subtracting a number is equivalent to adding its opposite, as in $5-(-3)=5+3=8$.

In the product or quotient of two nonzero numbers, matching signs give a positive result and opposite signs give a negative result. Division by zero is undefined. Zero divided by a nonzero number equals zero.

Perform grouped calculations first, then powers, then multiplication and division, and finally addition and subtraction. Operations of equal priority are performed from left to right. For example, $18:3\cdot2=12$.
:::

:::esempio{titolo="A minus sign in front of a sum"}
To calculate $6-(4-9)$, first find $4-9=-5$ and then obtain $6-(-5)=11$. Another method distributes the factor $-1$ to give $6-4+9=11$. Both terms in the subtracted sum change sign.
:::

:::esempio{titolo="Grouping and the order of operations"}
Consider $18-12:(2+4)$. The divisor is the entire sum $2+4$. First calculate $2+4=6$, then the quotient $12:6=2$. The final difference is $18-2=16$.
:::

## Calculating with fractions

:::teorema{#frazioni titolo="Operations with rational numbers"}
Use a common denominator to add fractions. Equivalent fractions are obtained by multiplying the numerator and denominator by the same nonzero number. For example,

$$
\frac23+\frac14=\frac8{12}+\frac3{12}=\frac{11}{12}.
$$

To multiply fractions, multiply the numerators and multiply the denominators. To divide, multiply by the reciprocal of the divisor, which must be nonzero. The reciprocal of $\dfrac27$ is $\dfrac72$ because their product is $1$.

$$
\frac35\cdot\frac{10}9=\frac23,
\qquad
\frac35:\frac27=\frac35\cdot\frac72=\frac{21}{10}.
$$

A common factor in a product can be canceled. Canceling an individual term of a sum changes the value. For example, $\dfrac{2+3}{2}=\dfrac52$, while canceling the two in the numerator would give a different result.
:::

:::esempio{titolo="Adding fractions with a common denominator"}
Adding $\dfrac{5}{12}$ and $\dfrac{1}{18}$ requires equivalent fractions with parts of the same size. The least common multiple of $12$ and $18$ is $36$, so multiply the numerator and denominator of the first fraction by $3$ and those of the second by $2$.

$$
\begin{aligned}
\frac{5}{12}+\frac{1}{18}
&=\frac{15}{36}+\frac{2}{36}\\[6pt]
&=\frac{17}{36}.
\end{aligned}
$$

The result is greater than $\dfrac{5}{12}$ because a positive quantity was added. It is also less than $\dfrac12$, which is equal to $\dfrac{18}{36}$.
:::

## Divisibility and grouping quantities

:::definizione{#divisibilita titolo="Greatest common divisor and least common multiple"}
The **greatest common divisor** of two positive integers is the largest of their common divisors. The **least common multiple** is the smallest of their positive common multiples. For $12$ and $18$, we have $\gcd=6$ and $\operatorname{lcm}=36$.

Prime factorization gives both numbers. For the greatest common divisor, take the common prime factors with the smaller exponent. For the least common multiple, take every prime factor that occurs, with its larger exponent. The greatest common divisor is used to divide supplies into identical groups without leftovers. The least common multiple gives the next time two cycles coincide and helps choose common denominators.
:::

## Decimals, comparisons, and the number line

:::osservazione{#retta titolo="Comparing values and distances"}
A rational number has a terminating or repeating decimal representation. Examples are $\dfrac38=0.375$ and $\dfrac29=0.\overline2$. To find the fraction for the second number, let $z=0.\overline2$. Then $10z-z=2$, so $z=\dfrac29$.

On the number line, the greater number is farther to the right. For negative numbers, $-2>-5$. The **distance** between $a$ and $b$ is $|b-a|$ and is always nonnegative. Between $-3$ and $5$ it equals $8$. The number halfway between $a$ and $b$ is $\dfrac{a+b}{2}$. Between $\dfrac13$ and $1$, that number is $\dfrac23$.
:::

:::esempio{titolo="Distance and midpoint on the number line"}
Points $A$ and $B$ have coordinates $-3$ and $5$. To go from $A$ to $B$, travel $3$ units to zero and another $5$ to reach $B$, so the distance is $8$. The midpoint $M$ is $4$ units to the right of $A$, so its coordinate is $-3+4=1$.

::grafico{xmin=-5 xmax=7 ymin=-1 ymax=1 uguale=1 assi=0 vettori="-4.6,0,6.5,0" punti="-3,0,pieno,A;1,0,pieno,M;5,0,pieno,B" linee="0,-0.08 0,0.08" segmenti="-3,0.09,-3,0.45;-3,0.45,1,0.45;1,0.09,1,0.45;1,0.45,5,0.45;5,0.09,5,0.45" etichette="-3.12,-0.28,−3;-0.11,-0.28,0;0.89,-0.28,1;4.89,-0.28,5;-1.05,0.59,4;2.95,0.59,4;6.63,0.08,x" titolo="On the number line, midpoint M divides the distance from A to B into two lengths of 4 units"}

The mean of the coordinates gives the same value because $\dfrac{-3+5}{2}=1$.
:::

## Expressing a situation with operations

:::esempio{#problemi titolo="Initial quantity, change, and check"}
A box contains $24$ red pens and $18$ blue pens. Each pack uses $4$ red and $3$ blue pens, so both colors allow $6$ packs to be made. Each pack contains $7$ pens. After giving away $2$ packs, $(6-2)\cdot7=28$ pens remain.

The calculation can be checked another way. The initial number of pens is $24+18=42$ and the number given away is $2\cdot7=14$, so $42-14=28$. The unit distinguishes the number of packs from the number of pens.
:::
