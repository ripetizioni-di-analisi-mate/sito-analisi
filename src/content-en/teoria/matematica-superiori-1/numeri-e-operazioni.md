---
titolo: "Numbers, operations, and fractions"
sommario: "Number sets, order, signed operations, divisibility, and representations of rational numbers."
---

## Natural numbers, integers, and rational numbers

:::definizione{#insiemi-numerici titolo="Number sets and equivalent representations"}
The **natural numbers** are $0,1,2,\ldots$. In this course, zero belongs to $\mathbb N$. The **integers** include the natural numbers and their opposites, so $\mathbb Z=\{\ldots,-2,-1,0,1,2,\ldots\}$. The **rational numbers** can be written in the form $\dfrac ab$, where $a,b\in\mathbb Z$ and $b\ne0$. It is always possible to choose $b>0$, since changing the signs of the numerator and denominator leaves the quotient unchanged.

We have $\mathbb N\subsetneq\mathbb Z\subsetneq\mathbb Q$. The first inclusion is strict because $-1$ is an integer and lies to the left of zero. The second is strict because $\dfrac12$ is rational and lies between two consecutive integers. Every integer $a$ can be written as $\dfrac a1$.
:::

:::osservazione{titolo="When an operation stays in the same set"}
The difference $5-8=-3$ requires the integers because the second term is greater than the first. Division can produce a result outside the integers. For instance, $6:3=2$ is an integer, whereas $7:3=\dfrac73$ lies between $2$ and $3$. Adding, subtracting, or multiplying two rational numbers in $\mathbb Q$ gives another rational number. The same holds for their quotient when the divisor is nonzero. To verify that any of these results is rational, find a representation with an integer numerator and denominator.
:::

:::esempio{titolo="Placing fractions between consecutive integers"}
To place $-\dfrac32$, divide each unit into two equal parts. Starting at zero, three half-units to the left lead to $P$, between $-2$ and $-1$. Two half-units would lead exactly to $-1$. To the right of zero, one half-unit leads to $Q$, which represents $\dfrac12$. There is no integer strictly between $0$ and $1$, whereas these endpoints also enclose $\dfrac13$ and $\dfrac23$, for example.

::grafico{xmin=-2.65 xmax=2.55 ymin=-0.62 ymax=0.67 uguale=1 assi=0 vettori="-2.43,0,2.28,0" linee="-2,-0.08 -2,0.08;-1,-0.08 -1,0.08;0,-0.08 0,0.08;1,-0.08 1,0.08;2,-0.08 2,0.08" punti="-1.5,0,pieno,P;0.5,0,pieno,Q" etichette="-2.11,-0.27,−2;-1.11,-0.27,−1;-0.05,-0.27,0;0.97,-0.27,1;1.97,-0.27,2;2.35,0.09,x" titolo="P represents negative three halves and Q represents one half"}
:::

## Order, absolute value, and distance

:::definizione{#retta titolo="Order and distance on the number line"}
Of two points on the number line, the point farther to the right has the greater coordinate. Hence $-5<-2$, although $-5$ is farther from the origin. The **absolute value** $|a|$ is the distance from the origin. It equals $a$ if $a\ge0$ and $-a$ if $a<0$. In the second case, reversing the sign of the coordinate gives a positive length. The points with coordinates $-4$ and $4$ are equally far from zero and represent opposite numbers.

::grafico{xmin=-5.45 xmax=5.45 ymin=-0.82 ymax=1.15 uguale=1 assi=0 vettori="-5.17,0,5.06,0;0,0.51,-4,0.51;0,0.51,4,0.51" punti="-4,0,pieno;0,0,pieno;4,0,pieno" segmenti="-4,0.05,-4,0.53;0,0.05,0,0.53;4,0.05,4,0.53" etichette="-4.18,-0.38,−4;-0.07,-0.38,0;3.91,-0.38,4;-2.13,0.78,4;1.88,0.78,4;5.13,0.12,x" titolo="The points at −4 and 4 are both 4 units from zero"}
:::

::::teorema{titolo="Midpoint formula"}
Let $a,b$ be two coordinates with $a\le b$. The midpoint has coordinate $m=\dfrac{a+b}{2}$. Its distance from each endpoint is half of $b-a$. The distance between $a$ and $b$ can be written as $|b-a|$ because this expression is unchanged when the endpoints are interchanged.
:::dimostrazione
The required point is obtained by starting at $a$ and moving halfway toward $b$. Its coordinate is

$$
m=a+\frac{b-a}{2}=\frac{a+b}{2}.
$$

Since $m-a=\dfrac{b-a}{2}$ and $b-m=\dfrac{b-a}{2}$, the point satisfies both distance conditions. If $a=b$, the formula gives that coordinate and both distances are zero.
:::
::::

:::esempio{titolo="Equal distances at different coordinates"}
Points $A$ and $B$ have coordinates $-3$ and $5$. Their distance is $5-(-3)=8$. Midpoint $M$ lies four units to the right of $A$, so $m=-3+4=1$. It lies to the right of zero because the right endpoint is farther from the origin. In general, the points at distance $d>0$ from a center $m$ have coordinates $m-d$ and $m+d$.

::grafico{xmin=-5 xmax=7 ymin=-1 ymax=1 uguale=1 assi=0 vettori="-4.6,0,6.5,0" punti="-3,0,pieno,A;1,0,pieno,M;5,0,pieno,B" linee="0,-0.08 0,0.08" segmenti="-3,0.09,-3,0.45;-3,0.45,1,0.45;1,0.09,1,0.45;1,0.45,5,0.45;5,0.09,5,0.45" etichette="-3.12,-0.28,−3;-0.11,-0.28,0;0.89,-0.28,1;4.89,-0.28,5;-1.05,0.59,4;2.95,0.59,4;6.63,0.08,x" titolo="Midpoint M divides the distance between A and B into two lengths of 4 units"}
:::

:::esempio{titolo="Comparing two negative fractions"}
To compare $-\dfrac56$ and $-\dfrac79$, choose $18$ as a common positive denominator. The equivalent numerators are $-15$ and $-14$, respectively. Since $-15<-14$, the first fraction is smaller. The same conclusion follows by comparing the distances from zero and taking into account that both coordinates are negative.

::grafico{xmin=-0.908 xmax=-0.697 ymin=-0.067 ymax=0.084 uguale=1 assi=0 vettori="-0.894,0,-0.712,0" punti="-0.833333333,0,pieno,P;-0.777777778,0,pieno,Q" etichette="-0.844,-0.035,−5⁄6;-0.787,-0.035,−7⁄9;-0.71,0.018,x" titolo="Negative five sixths lies to the left of negative seven ninths"}

For $0<a<b$, the reciprocals satisfy $\dfrac1a>\dfrac1b$. In fact, their difference is $\dfrac{b-a}{ab}>0$ because both the numerator and denominator are positive. This comparison gives a direct way to order positive fractions with the same numerator.
:::

## Signs, grouping, and order of operations

:::definizione{#operazioni titolo="Addition, subtraction, and the order of operations"}
Adding a positive number corresponds to a move to the right. A negative addend corresponds to a move to the left. The difference between $a$ and $b$ is the number that, when added to $b$, gives $a$. Since $(a+(-b))+b=a$, subtracting $b$ is equivalent to adding its opposite. For example, $5-(-3)=5+3=8$.

Grouping determines which parts of an expression are calculated together. Within a group, powers precede multiplication and division. Addition and subtraction follow. A chain of multiplications and divisions is evaluated from left to right, as is a chain of additions and subtractions.
:::

:::definizione{#proprieta-operazioni titolo="Commutative, associative, and distributive properties"}
The **commutative property** lets us swap addends or factors: $a+b=b+a$ and $ab=ba$. The **associative property** lets us change the grouping: $(a+b)+c=a+(b+c)$ and $(ab)c=a(bc)$. The **distributive property** relates multiplication and addition: $a(b+c)=ab+ac$. Reading it in reverse lets us extract a common factor.

Subtraction does not allow the same swaps or groupings. For instance, $(9-5)-2=2$, whereas $9-(5-2)=6$. To use the properties of addition in a difference, first write each subtraction as the addition of the opposite. This takes $(a+(-b))+(-c)$ to $a+((-b)+(-c))$.
:::

:::esempio{titolo="Two successive moves"}
Starting at $-5$, add $8$ and then subtract $2$. The first move goes three units beyond zero, reaching $3$. The second move leads to $1$. Algebraically, the overall change can be calculated first as $8-2=6$, giving $-5+6=1$.

::grafico{xmin=-6.5 xmax=4.5 ymin=-0.65 ymax=1.55 uguale=1 assi=0 vettori="-6.1,0,4.18,0;-5,0.54,3,0.54;3,1.13,1,1.13" punti="-5,0,pieno;1,0,pieno;3,0,pieno" segmenti="-5,0.05,-5,0.56;1,0.05,1,1.13;3,0.05,3,1.13" etichette="-5.17,-0.29,−5;0.92,-0.29,1;2.93,-0.29,3;-1.24,0.77,+8;1.84,1.35,−2;4.24,0.09,x" titolo="Signed addition on the number line"}
:::

::::teorema{titolo="Signs of products and quotients"}
For two nonzero factors, the product is positive if their signs agree and negative if their signs differ. The same rule holds for a quotient when both terms are nonzero.
:::dimostrazione
Let $a,b>0$. Since $b+(-b)=0$, distributivity gives $ab+a(-b)=a\cdot0=0$. Thus $a(-b)$ is the opposite of $ab$. Similarly, $(-a)b=-ab$. Applying distributivity again to $(-a)(b+(-b))$ shows that $(-a)(-b)$ is the opposite of $(-a)b$, namely $ab$. The sign of the quotient follows from the sign of the product, since multiplying $a:b$ by $b$ must give $a$.
:::
::::

:::attenzione{titolo="Division by zero and equal precedence"}
For $b\ne0$, we have $0:b=0$. The quotient $a:0$ is always undefined. When $a\ne0$, no number gives $a$ when multiplied by zero. When $a=0$, every number gives zero when multiplied by zero, so the quotient would fail to be unique.

In the chain $24:6\cdot2$, the calculation is $(24:6)\cdot2=8$. If $6\cdot2$ is meant to be the divisor, the expression is $24:(6\cdot2)$ and the result is $2$. The two groupings specify different calculations.
:::

:::esempio{titolo="Distributing a negative sign over a sum"}
Consider $14-(9-2(4-7))$. The innermost group equals $-3$, so $2(4-7)=-6$ and $9-2(4-7)=15$. The result is $-1$. Distributing the negative sign over the group being subtracted gives the same value. The expression becomes $14-9+2(4-7)=5-6=-1$.
:::

## Divisibility and common multiples

:::definizione{#divisibilita titolo="Divisors, greatest common divisor, and least common multiple"}
A positive integer $d$ is a **divisor** of the positive integer $a$ when $a=dq$ for some integer $q$. The **greatest common divisor** $\gcd(a,b)$ is the greatest positive divisor they share. The **least common multiple** $\operatorname{lcm}(a,b)$ is the least positive multiple they share. If the greatest common divisor is $1$, the two numbers are **coprime**. For example, $9$ and $10$ are coprime even though each has proper divisors.

In the prime factorizations, a common divisor can take each prime only up to the smaller exponent. A common multiple must contain it at least to the larger exponent. For $72=2^3\cdot3^2$ and $120=2^3\cdot3\cdot5$, this gives

$$
\gcd(72,120)=2^3\cdot3=24,\qquad
\operatorname{lcm}(72,120)=2^3\cdot3^2\cdot5=360.
$$

The quotients $72:24=3$ and $120:24=5$ are coprime, so the two parts left after removing the common factor are already reduced.
:::

::::teorema{titolo="The Euclidean algorithm"}
Let $a,b$ be positive integers and let $a=bq+r$ with $0\le r<b$. If $r>0$, the greatest common divisor of $a$ and $b$ equals the greatest common divisor of $b$ and $r$. If $r=0$, the greatest common divisor is $b$.
:::dimostrazione
A divisor of both $a$ and $b$ also divides the difference $a-bq=r$. Conversely, a divisor of both $b$ and $r$ divides $bq+r=a$. Thus the two pairs have the same common divisors. With repeated division, the positive remainders decrease at each step, so a remainder must eventually be zero. The last divisor used is the greatest common divisor.
:::
::::

:::esempio{titolo="Finding the greatest common divisor from remainders"}
For $132$ and $84$, the divisions are

$$
\begin{aligned}
132&=84+48\\
84&=48+36\\
48&=36+12\\
36&=3\cdot12.
\end{aligned}
$$

The last division has remainder zero, so the greatest common divisor is $12$. The numbers $11$ and $7$, obtained by dividing the original pair by $12$, have only $1$ as a common divisor.
:::

:::esempio{titolo="Finding a common time"}
Signals A and B start together and repeat every $8$ and $12$ seconds. After the start, A occurs at $8$, $16$, and $24$ seconds and so on. The times for B begin with $12$ and $24$ seconds. The two signals coincide at $24\,\mathrm{s}$, the earliest time in both sequences. Signal A has completed three periods and B has completed two.

::grafico{xmin=-2 xmax=27 ymin=-1.2 ymax=3.2 assi=0 vettori="-1,0,25.9,0" linee="0,2 24,2;0,1 24,1" punti="0,2,pieno;8,2,pieno;16,2,pieno;24,2,pieno;0,1,pieno;12,1,pieno;24,1,pieno" segmenti="24,0.05,24,2.13" etichette="-1,2.56,A;-1,1.47,B;0,-0.67,0;7.65,-0.67,8;11.5,-0.67,12;15.55,-0.67,16;23.5,-0.67,24;26,0.25,t" titolo="The two signals next occur together at 24 seconds"}
:::

## Equivalent fractions and operations

::::teorema{#frazioni titolo="Equivalence and comparison of fractions"}
For $a,b,c,d\in\mathbb Z$ with $b,d\ne0$, we have $\dfrac ab=\dfrac cd$ if and only if $ad=bc$. If the two denominators are positive, the order of the fractions is the same as the order of $ad$ and $bc$.
:::dimostrazione
Multiplying both sides by $bd\ne0$ converts the equality between fractions into an equality between products. Dividing by $bd$ recovers the original equation. When $b,d>0$, the factor $bd$ is positive, so multiplying preserves the direction of the comparison.
:::
::::

:::esempio{titolo="Reducing fractions and choosing a common denominator"}
The fraction $\dfrac{18}{24}$ reduces to $\dfrac34$ after dividing both terms by $6$. The numerator and denominator are now coprime. To add $\dfrac23$ and $\dfrac14$, choose a division of the unit into parts that works for both addends. Twelfths work because $12$ is a multiple of $3$ and $4$. Two thirds occupy eight twelfths and one fourth occupies three. This gives

$$
\frac23+\frac14=\frac8{12}+\frac3{12}=\frac{11}{12}.
$$

The figure shows the two quantities next to each other in the same unit. The last part is empty because reaching one would require one more twelfth.

::grafico{xmin=-0.8 xmax=12.8 ymin=-0.65 ymax=2.25 assi=0 poligoni="0,0.68 8,0.68 8,1.45 0,1.45;8,0.68 11,0.68 11,1.45 8,1.45" linee="0,0.68 12,0.68 12,1.45 0,1.45 0,0.68;1,0.68 1,1.45;2,0.68 2,1.45;3,0.68 3,1.45;4,0.68 4,1.45;5,0.68 5,1.45;6,0.68 6,1.45;7,0.68 7,1.45;8,0.68 8,1.45;9,0.68 9,1.45;10,0.68 10,1.45;11,0.68 11,1.45" etichette="3.31,1.84,8 parts;8.71,1.84,3 parts;0,-0.05,0;11.79,-0.05,1" titolo="Eight twelfths and three twelfths added in the same unit"}
:::

::::teorema{titolo="Multiplication and division of fractions"}
Let $\dfrac ab$ and $\dfrac cd$ be rational numbers with $b,d\ne0$. Their product is $\dfrac{ac}{bd}$. If $c\ne0$, their quotient is $\dfrac ab\cdot\dfrac dc$. The number $\dfrac dc$ is the reciprocal of the divisor.
:::dimostrazione
To calculate the product, the numerators and the reciprocals of the denominators can be grouped separately, since multiplication is associative and commutative. This gives the product of the numerators divided by the product of the denominators. For division, seek a rational number $q$ that satisfies $q\cdot\dfrac cd=\dfrac ab$. Since $\dfrac cd\cdot\dfrac dc=1$, multiplying both sides by $\dfrac dc$ isolates $q$. Multiplying the result by the divisor confirms that it gives back the dividend.
:::
::::

:::esempio{titolo="A fraction of a fraction"}
Take three fourths of two thirds of a unit rectangle. Divide the rectangle into three columns and four rows. Two columns represent $\dfrac23$ of the rectangle. Choosing three rows within those two columns selects six of the twelve cells. So the selected area is $\dfrac{6}{12}=\dfrac12$.

::grafico{xmin=-0.45 xmax=3.45 ymin=-0.35 ymax=4.65 uguale=1 assi=0 poligoni="0,0 2,0 2,3 0,3" linee="0,0 3,0 3,4 0,4 0,0;1,0 1,4;2,0 2,4;0,1 3,1;0,2 3,2;0,3 3,3" titolo="Two columns and three rows give six of the twelve cells"}
:::

:::attenzione{titolo="Canceling a factor common to all terms"}
In the fraction $\dfrac{6+9}{3}$, the factor $3$ can be taken out of the entire sum, giving $\dfrac{3(2+3)}3=5$. The calculation $\dfrac{6+9}{6}=1+9$ is incorrect. Dividing by six means dividing each addend by six, so the value is $\dfrac{15}{6}$. Checking that the factor multiplies the whole expression prevents leaving an addend undivided.
:::

## Terminating and repeating decimals

::::teorema{#decimali titolo="The remainder and the decimal representation"}
A rational number has a terminating or repeating decimal representation. For a reduced fraction with positive denominator, the representation terminates exactly when the denominator has the form $2^u5^v$, where $u,v$ are nonnegative integers. The denominator $1$ also satisfies the condition.
:::dimostrazione
After the integer part, each decimal digit is obtained by multiplying the remainder by $10$ and dividing by the denominator $b$. The possible remainders are $0,1,\ldots,b-1$. If zero occurs, the division terminates. If a remainder recurs, the following steps repeat because they start from the same value.

A decimal with $k$ digits after the point is a fraction with denominator $10^k=2^k5^k$. In lowest terms the denominator divides $10^k$, so the only possible primes are $2$ and $5$. Conversely, if the denominator is $2^u5^v$, choose $k\ge\max(u,v)$. The denominator divides $10^k$, so an equivalent fraction can be written with that denominator, and the decimal terminates.
:::
::::

:::esempio{titolo="Finding the repeating part from remainders"}
For $\dfrac7{24}$, the integer part is zero. The division continues as shown in the table. The remainder $16$ recurs, so the digit $6$ is produced at every later step. The decimal is $0.291\overline6$. The digits $291$ form the part of the decimal before the repeating part.

| Incoming remainder | Ten times the remainder | Digit | New remainder |
| --- | --- | --- | --- |
| $7$ | $70$ | $2$ | $22$ |
| $22$ | $220$ | $9$ | $4$ |
| $4$ | $40$ | $1$ | $16$ |
| $16$ | $160$ | $6$ | $16$ |
:::

:::esempio{titolo="From a repeating decimal to a fraction"}
Let $z=0.2\overline{15}$. Multiplying by $10$ moves the point to the start of the repeating part. A further multiplication by $100$ shifts two digits and leaves the same sequence after the point. Thus

$$
\begin{aligned}
10z&=2.\overline{15}\\
1000z&=215.\overline{15}\\
990z&=213\\
z&=\frac{213}{990}=\frac{71}{330}.
\end{aligned}
$$

The repeating parts cancel in the difference. The result is greater than $0.2$ and less than $0.22$, which agrees with the first two digits of the original decimal.
:::

## Operations and interpretation in word problems

:::esempio{#problemi titolo="Choosing the quotient and interpreting the remainder"}
A box contains $31$ red pens and $23$ blue pens. Each complete pack contains $4$ red pens and $3$ blue pens. The divisions $31=7\cdot4+3$ and $23=7\cdot3+2$ both allow seven packs. An eighth would require $32$ red pens and $24$ blue pens, more than are available. So three red pens and two blue pens remain outside the packs.

After giving away two packs, five packs and five loose pens remain. The total is $5\cdot7+5=40$ pens. Subtracting the $14$ pens given away from the original $54$ gives the same result. The quotient counts complete packs, and the remainder counts individual pens. The two units also distinguish the steps in the check.
:::

:::esempio{titolo="Identifying the whole to which a fraction refers"}
A container is filled to $\dfrac34$ of its capacity. Then $\dfrac13$ of the water it contains is removed. Since one third refers to the water, the amount removed is $\dfrac13\cdot\dfrac34=\dfrac14$ of the total capacity. The fraction that remains is

$$
\frac34-\frac14=\frac12.
$$

A check starts by observing that $\dfrac23$ of the initial water remains. The product $\dfrac23\cdot\dfrac34=\dfrac12$ gives the same fraction of the capacity.

::grafico{xmin=-0.6 xmax=4.6 ymin=-0.65 ymax=1.85 assi=0 poligoni="0,0.08 2,0.08 2,0.86 0,0.86;2,0.08 3,0.08 3,0.86 2,0.86" linee="0,0.08 4,0.08 4,0.86 0,0.86 0,0.08;1,0.08 1,0.86;2,0.08 2,0.86;3,0.08 3,0.86" etichette="0.48,1.22,Remains;2.14,1.22,Removed" titolo="The third section represents the water removed"}
:::
