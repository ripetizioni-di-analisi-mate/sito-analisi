---
titolo: "Numbers, operations, and fractions"
sommario: "Number sets, order, signed operations, divisibility, and representations of rational numbers."
---

## Natural numbers, integers, and rational numbers

:::definizione{#insiemi-numerici titolo="Number sets and equivalent representations"}
A set is a group of objects, in this chapter numbers, collected under a single name.

- The **natural numbers** are the numbers used for counting, namely $0,1,2,3,\ldots$, where the three dots indicate that the list goes on without end. Their set is denoted by $\mathbb N$. In this course, zero belongs to $\mathbb N$.
- The **integers** are the natural numbers and their opposites. The opposite of a number is the same number with its sign changed, for example the opposite of $2$ is $-2$. Their set is $\mathbb Z=\{\ldots,-2,-1,0,1,2,\ldots\}$, where the braces enclose the list of the numbers in the set.
- The **rational numbers** are the numbers that can be written as a fraction $\dfrac ab$, with $a$ and $b$ integers and $b$ different from zero. The number on top, $a$, is the numerator and the number underneath, $b$, is the denominator. The fraction stands for the result of the division $a:b$, for example $\dfrac32=3:2$. Their set is $\mathbb Q$.

In symbols, the conditions on $a$ and $b$ are $a,b\in\mathbb Z$ and $b\ne0$, where $\in$ is read "belongs to" and $\ne$ is read "is different from". The denominator is always chosen positive, that is, $b>0$, since changing the signs of the numerator and denominator leaves the result of the division unchanged. For example, $\dfrac{3}{-4}=\dfrac{-3}{4}=-\dfrac34$.

Every integer $a$ is also a rational number, because it can be written as $\dfrac a1$, for example $5=\dfrac51$. In symbols, $\mathbb N\subsetneq\mathbb Z\subsetneq\mathbb Q$, where $\subsetneq$ is read "is contained in, without being equal to" and indicates that the second set has all the numbers of the first and others as well. An inclusion of this kind is called strict. The first is strict because $-1$ is an integer and lies to the left of zero, where there are no natural numbers. The second is strict because $\dfrac12$ is rational and lies between $0$ and $1$, which are two consecutive integers, that is, one immediately after the other.
:::

:::osservazione{titolo="When an operation stays in the same set"}
With the natural numbers alone, the subtraction $5-8$ has no result, because the number to be taken away, $8$, is greater than the starting number, $5$. In the integers the result exists and equals $5-8=-3$.

In a division $a:b$, the number $a$ is the **dividend**, the number $b$ is the **divisor**, and the result is the **quotient**. In the integers the quotient is an integer only in some cases. For instance, $6:3=2$ is an integer. The quotient $7:3=\dfrac73$ is not an integer, because $2\cdot3=6$ and $3\cdot3=9$, so it lies between $2$ and $3$.

In $\mathbb Q$, that is, among the rational numbers, the sum, the difference, and the product of two numbers are again rational numbers. The same holds for the quotient when the divisor is different from zero. To verify that a result is rational, it is enough to write it as a fraction with an integer numerator and an integer denominator.
:::

:::esempio{titolo="Placing fractions between consecutive integers"}
The **number line** is a line on which every number has its own point. Zero is the starting point, the positive numbers lie to its right and the negative numbers to its left. The stretch between two consecutive integers is the **unit**.

To place $-\dfrac32$, each unit is divided into two equal parts, because the denominator is $2$, and the move from zero is three half-units to the left. Two half-units lead exactly to $-1$ and the third leads to point $P$, halfway between $-2$ and $-1$. To the right of zero, one half-unit leads to point $Q$, which represents $\dfrac12$.

There is no integer strictly between $0$ and $1$, that is, between the two numbers without being equal to either of them. There are, however, other rational numbers, for example $\dfrac13$ and $\dfrac23$.

::grafico{xmin=-2.65 xmax=2.55 ymin=-0.62 ymax=0.67 uguale=1 assi=0 vettori="-2.43,0,2.28,0" linee="-2,-0.08 -2,0.08;-1,-0.08 -1,0.08;0,-0.08 0,0.08;1,-0.08 1,0.08;2,-0.08 2,0.08" punti="-1.5,0,pieno,P;0.5,0,pieno,Q" etichette="-2.11,-0.27,−2;-1.11,-0.27,−1;-0.05,-0.27,0;0.97,-0.27,1;1.97,-0.27,2;2.35,0.09,x" titolo="P represents negative three halves and Q represents one half"}
:::

## Order, absolute value, and distance

:::definizione{#retta titolo="Order and distance on the number line"}
The number that corresponds to a point on the number line is the **coordinate** of the point. The point with coordinate $0$ is the origin. Of two points, the one farther to the right has the greater coordinate. The symbol $<$ is read "is less than" and the symbol $>$ is read "is greater than". The point $-5$ lies to the left of the point $-2$, hence $-5<-2$, although $-5$ is farther from the origin.

The **absolute value** of a number $a$, also called its magnitude, is written $|a|$ and is the distance of its point from the origin. A distance is a length, so it is positive or zero. For example, $|4|=4$. With letters, the rule is

$$
|a|=\begin{cases}a&\text{if }a\ge0\\-a&\text{if }a<0.\end{cases}
$$

The symbol $\ge$ is read "is greater than or equal to". In the second case $a$ is negative, so its opposite $-a$ is positive, as in $|-4|=-(-4)=4$.

The points with coordinates $-4$ and $4$ are equally far from zero and represent opposite numbers. In the figure, the two arrows start at zero and end at $-4$ and at $4$.

::grafico{xmin=-5.45 xmax=5.45 ymin=-0.82 ymax=1.15 uguale=1 assi=0 vettori="-5.17,0,5.06,0;0,0.51,-4,0.51;0,0.51,4,0.51" punti="-4,0,pieno;0,0,pieno;4,0,pieno" segmenti="-4,0.05,-4,0.53;0,0.05,0,0.53;4,0.05,4,0.53" etichette="-4.18,-0.38,−4;-0.07,-0.38,0;3.91,-0.38,4;-2.13,0.78,4;1.88,0.78,4;5.13,0.12,x" titolo="The points at −4 and 4 are both 4 units from zero"}
:::

::::teorema{titolo="Midpoint formula"}
The **midpoint** between two points on the line is the point that is at the same distance from both.

Let $a$ and $b$ be the coordinates of the two points, called endpoints, with $a\le b$. The symbol $\le$ is read "is less than or equal to". The midpoint has coordinate $m=\dfrac{a+b}{2}$, which is the **arithmetic mean** of the two endpoints, that is, their sum divided by two. The distance of the midpoint from each endpoint is half of $b-a$.

The distance between $a$ and $b$ is written $|b-a|$, because this expression is unchanged when the endpoints are interchanged. For example, $|5-2|=|3|=3$ and $|2-5|=|-3|=3$.
:::dimostrazione
The required point is obtained by starting at $a$ and moving toward $b$ by half of the distance $b-a$. Its coordinate is

$$
m=a+\frac{b-a}{2}=\frac{2a}{2}+\frac{b-a}{2}=\frac{2a+b-a}{2}=\frac{a+b}{2}.
$$

In the second step the number $a$ is written as $\dfrac{2a}{2}$, so that the two fractions have the same denominator and the numerators are added.

The distance of the point from $a$ is $m-a=\dfrac{b-a}{2}$. The distance from $b$ is $b-m=(b-a)-\dfrac{b-a}{2}=\dfrac{b-a}{2}$. The two distances are equal, so the point with coordinate $m$ is the midpoint. If $a=b$, the formula gives $m=\dfrac{a+a}{2}=a$ and both distances are zero.
:::
::::

:::esempio{titolo="Equal distances at different coordinates"}
Points $A$ and $B$ have coordinates $-3$ and $5$. Their distance is $5-(-3)=5+3=8$. Half of the distance is $4$, so midpoint $M$ lies four units to the right of $A$ and has coordinate $m=-3+4=1$. The midpoint lies to the right of zero because the right endpoint $5$ is farther from the origin than the left endpoint $-3$.

The points at distance $d>0$ from a point with coordinate $m$, called the center, have coordinates $m-d$ and $m+d$.

::grafico{xmin=-5 xmax=7 ymin=-1 ymax=1 uguale=1 assi=0 vettori="-4.6,0,6.5,0" punti="-3,0,pieno,A;1,0,pieno,M;5,0,pieno,B" linee="0,-0.08 0,0.08" segmenti="-3,0.09,-3,0.45;-3,0.45,1,0.45;1,0.09,1,0.45;1,0.45,5,0.45;5,0.09,5,0.45" etichette="-3.12,-0.28,−3;-0.11,-0.28,0;0.89,-0.28,1;4.89,-0.28,5;-1.05,0.59,4;2.95,0.59,4;6.63,0.08,x" titolo="Midpoint M divides the distance between A and B into two lengths of 4 units"}
:::

:::esempio{titolo="Comparing two negative fractions"}
When two fractions have the same positive denominator, the smaller one is the one with the smaller numerator. To compare $-\dfrac56$ and $-\dfrac79$, the common positive denominator $18$ is chosen, which is a multiple of $6$ and of $9$.

$$
-\frac56=-\frac{5\cdot3}{6\cdot3}=-\frac{15}{18},\qquad
-\frac79=-\frac{7\cdot2}{9\cdot2}=-\frac{14}{18}.
$$

The numerators are $-15$ and $-14$. Since $-15<-14$, the first fraction is smaller, that is, $-\dfrac56<-\dfrac79$.

The same conclusion follows by comparing the distances from zero, $\dfrac{15}{18}$ and $\dfrac{14}{18}$, because of two negative numbers the smaller one is the one farther from zero. In the figure, $P$ represents $-\dfrac56$ and $Q$ represents $-\dfrac79$.

::grafico{xmin=-0.908 xmax=-0.697 ymin=-0.067 ymax=0.084 uguale=1 assi=0 vettori="-0.894,0,-0.712,0" punti="-0.833333333,0,pieno,P;-0.777777778,0,pieno,Q" etichette="-0.844,-0.035,−5⁄6;-0.787,-0.035,−7⁄9;-0.71,0.018,x" titolo="Negative five sixths lies to the left of negative seven ninths"}

The **reciprocal** of a number $a$ different from zero is the number that gives $1$ when multiplied by $a$, namely $\dfrac1a$. Of two positive numbers, the smaller one has the greater reciprocal, that is, for $0<a<b$ the reciprocals satisfy $\dfrac1a>\dfrac1b$. In fact, their difference is

$$
\frac1a-\frac1b=\frac{b}{ab}-\frac{a}{ab}=\frac{b-a}{ab}>0,
$$

because both the numerator $b-a$ and the denominator $ab$ are positive. The notation $ab$ stands for the product $a\cdot b$. This comparison gives a direct way to order positive fractions with the same numerator. For example, $\dfrac37>\dfrac38$ because $7<8$.
:::

## Signs, grouping, and order of operations

:::definizione{#operazioni titolo="Addition, subtraction, and the order of operations"}
The numbers that are added are called addends and those that are multiplied are called factors. On the number line, adding a positive number corresponds to a move to the right. A negative addend corresponds to a move to the left.

The **difference** between $a$ and $b$ is the number that, when added to $b$, gives $a$. Subtracting $b$ is equivalent to adding its opposite, that is, $a-b=a+(-b)$. Indeed $(a+(-b))+b=a$. For example, $5-(-3)=5+3=8$.

An expression is a piece of writing that contains several operations. Parentheses form a **grouping**, that is, they mark a part of the expression to be calculated together and first. Within a grouping, and then in the whole expression, the calculations follow this order.

1. Powers. A **power** is a product of equal factors, for example $2^3=2\cdot2\cdot2=8$. The number written at the top, $3$, is the exponent and counts the factors.
2. Multiplications and divisions, from left to right.
3. Additions and subtractions, from left to right.

For example, $20-2\cdot3^2=20-2\cdot9=20-18=2$. The dot $\cdot$ stands for multiplication and the colon $:$ stands for division.
:::

:::definizione{#proprieta-operazioni titolo="Commutative, associative, and distributive properties"}
Three properties change the form of a calculation and leave the result the same.

- **Commutative** property. Swapping the addends of a sum or the factors of a product leaves the result unchanged. For example, $3+5=5+3$ and $3\cdot5=5\cdot3$. With letters, $a+b=b+a$ and $ab=ba$.
- **Associative** property. In a sum of three addends, or in a product of three factors, the result is the same whichever pair of neighboring terms is calculated first. For example, $(2+3)+4=2+(3+4)=9$. With letters, $(a+b)+c=a+(b+c)$ and $(ab)c=a(bc)$.
- **Distributive** property. Multiplying a number by a sum is equivalent to multiplying it by each addend and adding the two products. For example, $2\cdot(3+4)=2\cdot3+2\cdot4=14$. With letters, $a(b+c)=ab+ac$. The same equality, read from right to left, is used to factor out a common factor, as in $6+8=2\cdot3+2\cdot4=2\cdot(3+4)$.

Subtraction does not allow the same swaps or groupings. For instance, $(9-5)-2=4-2=2$, whereas $9-(5-2)=9-3=6$. To calculate a difference using the properties of addition, each subtraction is first written as the addition of the opposite. For example, $9-5-2=(9+(-5))+(-2)$ and, by the associative property, $9+((-5)+(-2))=9+(-7)=2$. With letters, this takes $(a+(-b))+(-c)$ to $a+((-b)+(-c))$.
:::

:::esempio{titolo="Two successive moves"}
The starting point is $-5$; then $8$ is added and $2$ is subtracted. In the figure, the first arrow is $8$ units long and goes from $-5$ to the right. Reaching zero takes $5$ units and $8-5=3$ are left, so the first move goes three units beyond zero and reaches $3$. The second arrow, $2$ units long to the left, leads from $3$ to $1$. As a formula, $-5+8-2=3-2=1$.

Adding the two moves first, the overall change is $8-2=6$, and so $-5+6=1$.

::grafico{xmin=-6.5 xmax=4.5 ymin=-0.65 ymax=1.55 uguale=1 assi=0 vettori="-6.1,0,4.18,0;-5,0.54,3,0.54;3,1.13,1,1.13" punti="-5,0,pieno;1,0,pieno;3,0,pieno" segmenti="-5,0.05,-5,0.56;1,0.05,1,1.13;3,0.05,3,1.13" etichette="-5.17,-0.29,−5;0.92,-0.29,1;2.93,-0.29,3;-1.24,0.77,+8;1.84,1.35,−2;4.24,0.09,x" titolo="Signed addition on the number line"}
:::

::::teorema{titolo="Signs of products and quotients"}
Two numbers different from zero **have the same sign** if both are positive or both are negative, and **have opposite signs** otherwise.

The product of two factors different from zero is positive if the factors have the same sign and negative if they have opposite signs. The same rule holds for a quotient, when dividend and divisor are both different from zero.

For example, $(-3)\cdot(-4)=12$, $3\cdot(-4)=-12$, and $(-12):4=-3$.
:::dimostrazione
Let $a$ and $b$ be two positive numbers. The sum of a number and its opposite is zero, so $b+(-b)=0$. This is multiplied by $a$ and the distributive property is applied.

$$
ab+a(-b)=a\cdot(b+(-b))=a\cdot0=0.
$$

The numbers $ab$ and $a(-b)$ have sum zero, so $a(-b)$ is the opposite of $ab$, that is, $a(-b)=-ab$. Since $ab$ is positive, the product $a(-b)$ is negative. Similarly, $(-a)b=-ab$.

For the product of two negative numbers, distributivity is applied again to $(-a)(b+(-b))$. This gives $(-a)b+(-a)(-b)=(-a)\cdot0=0$. The product $(-a)(-b)$ is therefore the opposite of $(-a)b=-ab$, that is, $(-a)(-b)=ab$, which is positive.

The sign of the quotient follows from the sign of the product, since $a:b$ is the number that must give $a$ when multiplied by $b$.
:::
::::

:::attenzione{titolo="Division by zero and equal precedence"}
For $b\ne0$, we have $0:b=0$. For example, $0:5=0$ because $0\cdot5=0$.

The quotient $a:0$ is always undefined.

- When $a\ne0$, for example in $7:0$, no number gives $7$ when multiplied by zero, because every number multiplied by zero gives zero.
- When $a=0$, that is, in $0:0$, every number gives zero when multiplied by zero. The quotient would not be unique, that is, it would not be a single number.

In the chain $24:6\cdot2$, division and multiplication have the same precedence, so the calculation goes from the left and is $(24:6)\cdot2=4\cdot2=8$. If $6\cdot2$ is meant to be the divisor, the expression is $24:(6\cdot2)$ and the result is $24:12=2$. The two groupings specify different calculations.
:::

:::esempio{titolo="Distributing a negative sign over a sum"}
Consider $14-(9-2(4-7))$. The calculation starts from the innermost grouping, which is $4-7$.

$$
\begin{aligned}
4-7&=-3\\[6pt]
2(4-7)&=2\cdot(-3)=-6\\[6pt]
9-2(4-7)&=9-(-6)=9+6=15\\[6pt]
14-(9-2(4-7))&=14-15=-1.
\end{aligned}
$$

Distributing the negative sign over the group being subtracted gives the same value. Subtracting $9-2(4-7)$ is equivalent to multiplying it by $-1$ and adding. By the distributive property, the factor $-1$ changes the sign of each term, so $-(9-2(4-7))=-9+2(4-7)$. The expression becomes

$$
14-9+2(4-7)=5+2\cdot(-3)=5-6=-1.
$$
:::

## Divisibility and common multiples

:::definizione{#divisibilita titolo="Divisors, greatest common divisor, and least common multiple"}
In this block the numbers are positive integers. The number $d$ is a **divisor** of $a$ when $a=dq$ for some integer $q$, that is, when $a:d$ is an integer. We also say that $a$ is a multiple of $d$. For example, $4$ is a divisor of $12$ because $12=4\cdot3$.

- The **greatest common divisor** $\gcd(a,b)$, abbreviated GCD, is the greatest of the common positive divisors.
- The **least common multiple** $\operatorname{lcm}(a,b)$, abbreviated LCM, is the least of the common positive multiples.

For $8$ and $12$, the common divisors are $1,2,4$, so $\gcd(8,12)=4$. The multiples of $8$ are $8,16,24,\ldots$ and those of $12$ are $12,24,\ldots$, so $\operatorname{lcm}(8,12)=24$.

If the greatest common divisor is $1$, the two numbers are coprime, or relatively prime. For example, $9$ and $10$ are coprime, because the divisors of $9$ are $1,3,9$ and those of $10$ are $1,2,5,10$. They are coprime even though each has proper divisors, that is, divisors different from $1$ and from the number itself.

A prime number is an integer greater than $1$ whose only divisors are $1$ and itself, such as $2,3,5,7,11$. Every integer greater than $1$ can be written as a product of prime numbers, and this way of writing it is its prime factorization. For $72$, the number is divided by the smallest prime as long as the division gives an integer, and then by the next prime.

$$
72=2\cdot36=2\cdot2\cdot18=2\cdot2\cdot2\cdot9=2\cdot2\cdot2\cdot3\cdot3=2^3\cdot3^2.
$$

In the same way, $120=2^3\cdot3\cdot5$. The GCD and the LCM are read from the factorizations.

- A common divisor takes each prime only up to the smaller exponent, because it must divide both numbers. The GCD is therefore the product of the common primes with the smaller exponent.
- A common multiple contains each prime at least to the larger exponent, because it must be divisible by both numbers. The LCM is therefore the product of all the primes that occur with the larger exponent.

For $72$ and $120$ this gives

$$
\gcd(72,120)=2^3\cdot3=24,\qquad
\operatorname{lcm}(72,120)=2^3\cdot3^2\cdot5=360.
$$

The quotients $72:24=3$ and $120:24=5$ are coprime, because dividing by the GCD removes the whole common factor.
:::

::::teorema{titolo="The Euclidean algorithm"}
An **algorithm** is a procedure made of steps that are repeated until the result is reached. The Euclidean algorithm finds the GCD through a series of divisions, without prime factorization.

The **division with remainder** of $a$ by $b$ finds the quotient $q$, that is, how many times $b$ goes into $a$, and the **remainder** $r$, that is, how much is left over. As a formula, $a=bq+r$ with $0\le r<b$. For example, $17=5\cdot3+2$.

For two positive integers $a$ and $b$, with $a=bq+r$ their division with remainder, we have

$$
\gcd(a,b)=\begin{cases}\gcd(b,r)&\text{if }r>0\\ b&\text{if }r=0.\end{cases}
$$

The division is therefore repeated, each time between the divisor and the remainder of the previous step, until the remainder is zero.
:::dimostrazione
If a number $d$ divides two numbers $dh$ and $dk$, then it also divides their sum and their difference, because by the distributive property $dh+dk=d(h+k)$ and $dh-dk=d(h-k)$. Moreover, if $d$ divides $b$, it also divides its multiple $bq$.

Let $d$ be a divisor of both $a$ and $b$. Then $d$ divides $bq$ and therefore also divides the difference $a-bq=r$. Conversely, let $d$ be a divisor of both $b$ and $r$. Then $d$ divides $bq$ and therefore also divides the sum $bq+r=a$. Thus the two pairs have the same common divisors.

If $r=0$, then $a=bq$ and so $b$ divides $a$. Since no divisor of $b$ is greater than $b$, the greatest common divisor is $b$.

In each division the remainder is less than the divisor, and the divisor is the remainder of the previous step. With repeated division, the positive remainders decrease at each step, so a remainder must eventually be zero. The last divisor used is the greatest common divisor.
:::
::::

:::esempio{titolo="Finding the greatest common divisor from remainders"}
For $132$ and $84$, the divisions with remainder are calculated. In each row, the divisor and the remainder become the dividend and the divisor of the next row.

$$
\begin{aligned}
132&=84\cdot1+48\\
84&=48\cdot1+36\\
48&=36\cdot1+12\\
36&=12\cdot3+0.
\end{aligned}
$$

The last division has remainder zero, so the greatest common divisor is the last divisor used and equals $12$. The numbers $132:12=11$ and $84:12=7$, obtained by dividing the original pair by $12$, have only $1$ as a common divisor.
:::

:::esempio{titolo="Finding a common time"}
Two signals, A and B, start together at time $0$ and repeat every $8$ and every $12$ seconds. The question is the first time, after the start, at which they repeat together.

The first positive times of signal A are $8$, $16$, and $24$, multiples of $8$. Those of signal B are $12$ and $24$, multiples of $12$. The two signals coincide at a time common to both sequences, that is, at a common multiple of $8$ and $12$, and the first one is $\operatorname{lcm}(8,12)=24$. The signals therefore occur together again after $24\,\mathrm{s}$, where $\mathrm{s}$ is the symbol for the second.

The **period** of a signal is the time between one repetition and the next, and the time $24\,\mathrm{s}$ corresponds to $24:8=3$ periods of signal A and to $24:12=2$ periods of signal B. In the figure, the upper row shows the times of A and the lower row shows those of B.

::grafico{xmin=-2 xmax=27 ymin=-1.2 ymax=3.2 assi=0 vettori="-1,0,25.9,0" linee="0,2 24,2;0,1 24,1" punti="0,2,pieno;8,2,pieno;16,2,pieno;24,2,pieno;0,1,pieno;12,1,pieno;24,1,pieno" segmenti="24,0.05,24,2.13" etichette="-1,2.56,A;-1,1.47,B;0,-0.67,0;7.65,-0.67,8;11.5,-0.67,12;15.55,-0.67,16;23.5,-0.67,24;26,0.25,t" titolo="The two signals next occur together at 24 seconds"}
:::

## Equivalent fractions and operations

::::teorema{#frazioni titolo="Equivalence and comparison of fractions"}
Two fractions are **equivalent** when they represent the same number. Multiplying the numerator and the denominator by the same number different from zero gives an equivalent fraction, for example $\dfrac23=\dfrac{2\cdot2}{3\cdot2}=\dfrac46$. The reverse step, dividing by a common divisor, is called simplifying the fraction.

For $a,b,c,d\in\mathbb Z$ with $b\ne0$ and $d\ne0$, we have $\dfrac ab=\dfrac cd$ *if and only if* $ad=bc$. The phrase "if and only if" indicates that the two equalities are both true or both false. The products $ad$ and $bc$ are called **cross-products**. For $\dfrac23$ and $\dfrac46$ they are $2\cdot6=12$ and $3\cdot4=12$.

If, in addition, the two denominators are positive, the order of the fractions is the same as the order of $ad$ and $bc$. For $\dfrac23$ and $\dfrac34$ the products are $2\cdot4=8$ and $3\cdot3=9$. Since $8<9$, it follows that $\dfrac23<\dfrac34$.
:::dimostrazione
The two **sides** of an equality are the expressions to the left and to the right of the equals sign. Both sides of $\dfrac ab=\dfrac cd$ are multiplied by $bd$, which is different from zero because $b$ and $d$ are. On the left $b$ cancels and $ad$ remains, on the right $d$ cancels and $bc$ remains. This converts the equality between fractions into the equality between products $ad=bc$. Conversely, dividing both sides of $ad=bc$ by $bd$ recovers the original equation.

The comparison uses a property of inequalities. Multiplying both sides by a positive number preserves the direction. When $b>0$ and $d>0$, the factor $bd$ is also positive, so multiplying by $bd$ preserves the direction. Hence $\dfrac ab<\dfrac cd$ is equivalent to $ad<bc$.
:::
::::

:::esempio{titolo="Reducing fractions and choosing a common denominator"}
Reducing a fraction **to lowest terms** means dividing the numerator and the denominator by their greatest common divisor. For $\dfrac{18}{24}$, the greatest common divisor of $18$ and $24$ is $6$, so

$$
\frac{18}{24}=\frac{18:6}{24:6}=\frac34.
$$

The numerator and denominator are now coprime.

To add $\dfrac23$ and $\dfrac14$, a division of the unit into parts that works for both addends is chosen, that is, a division of the unit into equal parts that measure both thirds and fourths. Twelfths work because $12$ is a multiple of $3$ and of $4$.

$$
\frac23=\frac{2\cdot4}{3\cdot4}=\frac8{12},\qquad
\frac14=\frac{1\cdot3}{4\cdot3}=\frac3{12}.
$$

Two thirds occupy eight twelfths and one fourth occupies three. With the same denominator, the numerators are added.

$$
\frac23+\frac14=\frac8{12}+\frac3{12}=\frac{11}{12}.
$$

In the figure, the unit is divided into $12$ parts and the two quantities are placed side by side. The last part is empty because reaching one would require one more twelfth.

::grafico{xmin=-0.8 xmax=12.8 ymin=-0.65 ymax=2.25 assi=0 poligoni="0,0.68 8,0.68 8,1.45 0,1.45;8,0.68 11,0.68 11,1.45 8,1.45" linee="0,0.68 12,0.68 12,1.45 0,1.45 0,0.68;1,0.68 1,1.45;2,0.68 2,1.45;3,0.68 3,1.45;4,0.68 4,1.45;5,0.68 5,1.45;6,0.68 6,1.45;7,0.68 7,1.45;8,0.68 8,1.45;9,0.68 9,1.45;10,0.68 10,1.45;11,0.68 11,1.45" etichette="3.31,1.84,8 parts;8.71,1.84,3 parts;0,-0.05,0;11.79,-0.05,1" titolo="Eight twelfths and three twelfths added in the same unit"}
:::

::::teorema{titolo="Multiplication and division of fractions"}
The product of two fractions has the product of the numerators as its numerator and the product of the denominators as its denominator. For example, $\dfrac23\cdot\dfrac45=\dfrac{2\cdot4}{3\cdot5}=\dfrac8{15}$.

The reciprocal of a fraction different from zero is obtained by swapping the numerator and the denominator. The reciprocal of $\dfrac45$ is $\dfrac54$, because $\dfrac45\cdot\dfrac54=\dfrac{20}{20}=1$. Dividing by a fraction is equivalent to multiplying by its reciprocal. For example, $\dfrac23:\dfrac45=\dfrac23\cdot\dfrac54=\dfrac{10}{12}=\dfrac56$.

With letters, let $\dfrac ab$ and $\dfrac cd$ be rational numbers with $b\ne0$ and $d\ne0$. Their product is $\dfrac{ac}{bd}$. If $c\ne0$, their quotient is $\dfrac ab\cdot\dfrac dc$. The number $\dfrac dc$ is the reciprocal of the divisor.
:::dimostrazione
The fraction $\dfrac ab$ is the product of $a$ and $\dfrac1b$, which is the reciprocal of $b$. Hence $\dfrac ab\cdot\dfrac cd=a\cdot\dfrac1b\cdot c\cdot\dfrac1d$. To calculate the product, the numerators and the reciprocals of the denominators are grouped separately, since multiplication is associative and commutative. This gives $(ac)\cdot\left(\dfrac1b\cdot\dfrac1d\right)$. The number $\dfrac1b\cdot\dfrac1d$ is the reciprocal of $bd$, because multiplying it by $bd$ gives $1$. This gives the product of the numerators divided by the product of the denominators, $\dfrac{ac}{bd}$.

For division, the aim is a rational number $q$ that satisfies $q\cdot\dfrac cd=\dfrac ab$, that is, the number that gives the dividend when multiplied by the divisor. Since $\dfrac cd\cdot\dfrac dc=1$, multiplying both sides by $\dfrac dc$ leaves $q$ on the left and gives $q=\dfrac ab\cdot\dfrac dc$. Multiplying the result by the divisor confirms that it gives back the dividend, because $\dfrac ab\cdot\dfrac dc\cdot\dfrac cd=\dfrac ab\cdot1=\dfrac ab$.
:::
::::

:::esempio{titolo="A fraction of a fraction"}
Take three fourths of two thirds of a unit rectangle, that is, of area $1$. Taking "three fourths of" a quantity means multiplying it by $\dfrac34$. The rectangle is divided into three equal columns and four equal rows. This forms $3\cdot4=12$ equal cells. Two columns represent $\dfrac23$ of the rectangle. Choosing three rows out of four within those two columns, that is, $\dfrac34$ of them, selects $2\cdot3=6$ of the twelve cells. These are the shaded cells in the figure. So the selected area is $\dfrac{6}{12}=\dfrac12$, which is what the product rule gives, $\dfrac34\cdot\dfrac23=\dfrac{3\cdot2}{4\cdot3}=\dfrac6{12}$.

::grafico{xmin=-0.45 xmax=3.45 ymin=-0.35 ymax=4.65 uguale=1 assi=0 poligoni="0,0 2,0 2,3 0,3" linee="0,0 3,0 3,4 0,4 0,0;1,0 1,4;2,0 2,4;0,1 3,1;0,2 3,2;0,3 3,3" titolo="Two columns and three rows give six of the twelve cells"}
:::

:::attenzione{titolo="Canceling a factor common to all terms"}
In a fraction, a number is canceled only when it is a factor of the entire numerator and of the entire denominator. In the fraction $\dfrac{6+9}{3}$ the numerator is a sum. The number $3$ is a factor of both addends, so it is taken out of the entire sum, $6+9=3(2+3)$, and cancels with the denominator.

$$
\frac{6+9}{3}=\frac{3(2+3)}3=2+3=5.
$$

The calculation $\dfrac{6+9}{6}=1+9$ is incorrect, because the $6$ in the denominator has been canceled with the first addend only. Dividing by six means dividing each addend by six, so the value is $\dfrac{15}{6}=\dfrac52$, whereas $1+9=10$.
:::

## Terminating and repeating decimals

::::teorema{#decimali titolo="The remainder and the decimal representation"}
The decimal representation of a fraction is obtained by dividing the numerator by the denominator. There are two cases.

- The division ends. The representation is **terminating**, that is, it has a finite number of digits after the decimal point, as in $\dfrac34=0.75$.
- The division does not end, and from some point on a group of digits, the **repeating part** or period, repeats without end. The representation is **repeating**, as in $\dfrac13=0.333\ldots$, and the repeating part is written once with a bar over it, $\dfrac13=0.\overline3$.

A rational number has a terminating or repeating decimal representation.

For a reduced fraction with positive denominator, the representation terminates exactly when the prime factorization of the denominator contains only the primes $2$ and $5$. As a formula, the denominator has the form $2^u5^v$, where $u,v$ are nonnegative integers, that is, greater than or equal to zero. A power with exponent zero equals $1$, so the denominator $1=2^0\cdot5^0$ also satisfies the condition.

For example, $\dfrac7{40}$ has a terminating representation because $40=2^3\cdot5$, whereas $\dfrac7{24}$ has a repeating representation because $24=2^3\cdot3$ contains the prime $3$.
:::dimostrazione
After the integer part, each decimal digit is obtained by multiplying the remainder by $10$ and dividing by the denominator $b$. The remainder of a division by $b$ is less than $b$, so the possible remainders are $0,1,\ldots,b-1$. If zero occurs, the division ends and the representation terminates. Otherwise the remainders lie between $1$ and $b-1$, so within $b$ steps a remainder recurs. The following steps repeat because they start from the same value, and the representation is repeating.

A decimal with $k$ digits after the point is a fraction with denominator $10^k$, for example $0.175=\dfrac{175}{1000}$ with $k=3$. Since $10=2\cdot5$, we have $10^k=2^k5^k$. In lowest terms the denominator divides $10^k$, so the only possible primes are $2$ and $5$.

Conversely, if the denominator is $2^u5^v$, choose $k\ge\max(u,v)$, where $\max(u,v)$ denotes the greater of $u$ and $v$. The denominator divides $10^k=2^k5^k$, because its exponents are less than or equal to $k$. Multiplying the numerator and the denominator by the quotient of $10^k$ and $2^u5^v$ gives an equivalent fraction with denominator $10^k$, so the decimal terminates. For $\dfrac7{40}$ we have $k=3$ and $\dfrac7{40}=\dfrac{7\cdot25}{40\cdot25}=\dfrac{175}{1000}=0.175$.
:::
::::

:::esempio{titolo="Finding the repeating part from remainders"}
The number $7$ is divided by $24$. The number $24$ goes into $7$ zero times, so the integer part is zero and the first remainder is $7$. At each step the remainder is multiplied by $10$ and divided by $24$. The quotient is the new decimal digit and the remainder moves to the next row of the table.

| Incoming remainder | Ten times the remainder | Digit | New remainder |
| --- | --- | --- | --- |
| $7$ | $70$ | $2$ | $22$ |
| $22$ | $220$ | $9$ | $4$ |
| $4$ | $40$ | $1$ | $16$ |
| $16$ | $160$ | $6$ | $16$ |

In the last row the remainder $16$ recurs, so the digit $6$ is produced at every later step. The decimal is $0.291666\ldots=0.291\overline6$. The repeating part is $6$. The digits $291$ form the part of the decimal before the repeating part, called the **non-repeating part**.
:::

:::esempio{titolo="From a repeating decimal to a fraction"}
The fraction that has a given decimal representation is called its **generating fraction**. Here it is found for $z=0.2\overline{15}=0.2151515\ldots$ The non-repeating part is $2$ and the repeating part is $15$.

Multiplying by $10$ brings the point to the start of the repeating part. A further multiplication by $100$ moves the point two places, as many as the digits of the repeating part, and leaves the same sequence after the point. Thus

$$
\begin{aligned}
10z&=2.\overline{15}\\
1000z&=215.\overline{15}\\
1000z-10z&=215.\overline{15}-2.\overline{15}\\
990z&=213\\
z&=\frac{213}{990}=\frac{71}{330}.
\end{aligned}
$$

The repeating parts cancel in the difference. In the last step both sides are divided by $990$ and the fraction is simplified by $3$. The result is greater than $0.2$ and less than $0.22$, which agrees with the first two digits of the original decimal.
:::

## Operations and interpretation in word problems

:::esempio{#problemi titolo="Choosing the quotient and interpreting the remainder"}
A box contains $31$ red pens and $23$ blue pens. Each complete pack contains $4$ red pens and $3$ blue pens. The question is the number of complete packs and the number of pens left over.

The divisions with remainder $31=7\cdot4+3$ and $23=7\cdot3+2$ show that both the red and the blue pens are enough for $7$ packs. An eighth would require $8\cdot4=32$ red pens and $8\cdot3=24$ blue pens, more than are available. So three red pens and two blue pens remain outside the packs. With two different quotients, the number of complete packs would be the smaller of the two.

After giving away two packs, $7-2=5$ packs and the $3+2=5$ loose pens remain. Each pack contains $4+3=7$ pens, so the total is $5\cdot7+5=40$ pens. Subtracting the $2\cdot7=14$ pens given away from the original $31+23=54$ gives the same result, because $54-14=40$.

The quotient counts complete packs, and the remainder counts individual pens. Packs and pens are two different units of measurement, so the $5$ packs are converted into pens with the product $5\cdot7$ before the $5$ loose pens are added. The two units also distinguish the steps in the check.
:::

:::esempio{titolo="Identifying the whole to which a fraction refers"}
A container is filled with water to $\dfrac34$ of its capacity, that is, of the greatest amount it holds. Then $\dfrac13$ of the water it contains is removed. Since the third refers to the water, the amount removed is $\dfrac13\cdot\dfrac34=\dfrac3{12}=\dfrac14$ of the total capacity. The fraction that remains is

$$
\frac34-\frac14=\frac24=\frac12.
$$

As a check, once $\dfrac13$ of the water is removed, $1-\dfrac13=\dfrac23$ of it remains. The product $\dfrac23\cdot\dfrac34=\dfrac6{12}=\dfrac12$ gives the same fraction of the capacity.

In the figure, the container is divided into four equal parts. The first two remain full and the third represents the water removed.

::grafico{xmin=-0.6 xmax=4.6 ymin=-0.65 ymax=1.85 assi=0 poligoni="0,0.08 2,0.08 2,0.86 0,0.86;2,0.08 3,0.08 3,0.86 2,0.86" linee="0,0.08 4,0.08 4,0.86 0,0.86 0,0.08;1,0.08 1,0.86;2,0.08 2,0.86;3,0.08 3,0.86" etichette="0.48,1.22,Remains;2.14,1.22,Removed" titolo="The third section represents the water removed"}
:::
