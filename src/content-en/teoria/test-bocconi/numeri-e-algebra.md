---
titolo: "Numbers, sets and algebra"
sommario: "Real numbers, percentages, sets, formulas, equations, inequalities and systems."
---

## Real numbers, order and arithmetic

:::definizione{#numeri-reali titolo="Numbers on the number line"}
The points on the number line represent the **real numbers**. Zero is the origin and numbers increase to the right. The notation $a<b$ places $a$ to the left of $b$. The same rule orders two negative numbers. For example, $-9<-4$ because $-9$ lies farther to the left.

An **interval** contains all the numbers between two endpoints. The interval $[a,b)$ includes $a$ and excludes $b$, so $x\in[a,b)$ is equivalent to $a\le x<b$. An infinite endpoint always takes a round bracket.
:::

:::osservazione{titolo="Arithmetic with signed numbers"}
Adding a negative number moves a point to the left. Subtracting $b$ is equivalent to adding its opposite $-b$. For example, $2-(-5)=2+5=7$. When multiplying or dividing two nonzero numbers, the result is positive if the signs match and negative if they are opposite. If either factor is zero, the product is zero. A divisor must be nonzero.

In $-3^2+10$ exponentiation takes precedence over the minus sign, so the result is $-9+10=1$. In $(-3)^2+10$, the base is $-3$, so the result is $19$.
:::

:::definizione{titolo="Fractions and comparisons"}
The fraction $\dfrac{a}{b}$ is the quotient of $a$ and $b$, with $b\ne 0$. Multiplying numerator and denominator by the same nonzero number preserves the quotient. This lets us use a common denominator to add or compare fractions.

If $b$ and $d$ are positive, comparing $\dfrac{a}{b}$ and $\dfrac{c}{d}$ is equivalent to comparing $ad$ and $bc$, because multiplying both numbers by $bd>0$ preserves their order. If the denominators may be negative, it helps to move any minus sign to the numerator first.

Dividing by $\dfrac{c}{d}\ne 0$ is equivalent to multiplying by its reciprocal $\dfrac{d}{c}$. The calculation $\dfrac{5}{6}\div\dfrac{10}{9}$ therefore gives $\dfrac{5}{6}\cdot\dfrac{9}{10}=\dfrac34$.
:::

:::esempio{titolo="Comparing negative fractions"}
To compare $-\dfrac{7}{12}$ and $-\dfrac{3}{5}$, use the common denominator $60$. The two fractions become $-\dfrac{35}{60}$ and $-\dfrac{36}{60}$. Since $-35>-36$, the greater number is $-\dfrac{7}{12}$.
:::

:::definizione{titolo="Absolute value and distance"}
The **absolute value** $|x|$ is the distance of $x$ from zero. It equals $x$ when $x\ge 0$ and $-x$ when $x<0$. The distance between points at $x$ and $a$ is $|x-a|$, so $|4-(-2)|=6$.

For example, $|x+1|\le 3$ describes the points whose distance from $-1$ is at most $3$. The endpoints are $-1-3=-4$ and $-1+3=2$, both included. On the graph of $y=|x+1|$, the same condition picks out heights below or on the line $y=3$.

::grafico{f="abs(x+1);3" xmin=-6 xmax=4 ymin=-1 ymax=6 punti="-4,3;2,3" titolo="The distance from -1 is 3 at x = -4 and x = 2"}
:::

## Ratios, percentages and units

:::definizione{#rapporti-percentuali titolo="Ratios, proportions and reference values"}
A **ratio** relates two quantities. If concentrate and water are in the ratio $2:7$, there are $7$ parts of water for every $2$ parts of concentrate. There are $9$ parts in total, so concentrate makes up $\dfrac29$ of the mixture. The ratio of concentrate to water is $\dfrac27$.

In a **proportion**, two ratios are equal. If $4$ identical notebooks cost $7\,\mathrm{EUR}$, the unit price is $\dfrac74\,\mathrm{EUR}$. At the same unit price, $10$ notebooks cost $10\cdot\dfrac74=17.50\,\mathrm{EUR}$. The total price is proportional to the number of notebooks because the cost per item stays constant.
:::

:::definizione{titolo="Percentages and relative change"}
A percentage $p\,\%$ of a reference value $B$ is $\dfrac{p}{100}B$. If the reference value is the original price, an increase of $p\,\%$ multiplies it by $1+\dfrac{p}{100}$. A decrease of $p\,\%$, with $0\le p\le 100$, uses the factor $1-\dfrac{p}{100}$.

To recover the reference value from the final value, divide by the factor, provided it is nonzero. When an initial value $B>0$ changes to a final value $F$, its relative change is $\dfrac{F-B}{B}$. The sign indicates whether the value increased or decreased.
:::

:::esempio{titolo="Successive percentage changes"}
A price of $80\,\mathrm{EUR}$ rises by $25\,\%$, so it becomes $80\cdot 1.25=100\,\mathrm{EUR}$. A subsequent $20\,\%$ reduction is worth $20\,\mathrm{EUR}$ because the reference value is now $100\,\mathrm{EUR}$. The price therefore returns to $80\,\mathrm{EUR}$. The two changes correspond to multiplying the factors $1.25\cdot 0.8=1$.
:::

:::osservazione{titolo="Percentages and percentage points"}
If a share rises from $30\,\%$ to $36\,\%$, the difference is $6$ **percentage points**. The relative increase in the share is $\dfrac{36-30}{30}=\dfrac15=20\,\%$. The second calculation uses the initial share as its reference value.
:::

:::definizione{titolo="Unit conversions"}
The length conversion factor is squared for areas and cubed for volumes. Since $1\,\mathrm{m}=100\,\mathrm{cm}$, for example,
$$
\begin{aligned}
1\,\mathrm{m}^2 &= 10\,000\,\mathrm{cm}^2,\\[6pt]
1\,\mathrm{m}^3 &= 1\,000\,000\,\mathrm{cm}^3.
\end{aligned}
$$

With compound units, handle the numerator and denominator separately. Since $1\,\mathrm{km}=1\,000\,\mathrm{m}$ and $1\,\mathrm{h}=3\,600\,\mathrm{s}$, we obtain $54\,\mathrm{km/h}=\dfrac{54\cdot 1\,000}{3\,600}\,\mathrm{m/s}=15\,\mathrm{m/s}$.
:::

## Sets and diagrams

:::definizione{#insiemi titolo="Membership and inclusion"}
A **set** is a collection of elements. The notation $x\in A$ says that $x$ is an element of $A$. We write $A\subseteq B$ if every element of $A$ also belongs to $B$. Inclusion relates two sets, so a number and the set containing just that number play different roles. If $A=\{1,4\}$, then $1\in A$ and $\{1\}\subseteq A$.

The empty set $\varnothing$ is a subset of every set. When each of two sets is a subset of the other, they have the same elements and are therefore equal.
:::

:::definizione{titolo="Union, intersection and complement"}
The **union** $A\cup B$ contains the elements that belong to at least one of the two sets. The **intersection** $A\cap B$ contains those that belong to both. The complement of $A$ relative to a universal set $U\supseteq A$ is $A^c=U\setminus A$ and consists of the elements of $U$ outside $A$.

For a finite universe, we can count across four disjoint regions. Each element is in $A$ only, in $B$ only, in both or in neither. Since $\lvert A\rvert+\lvert B\rvert$ counts the intersection twice, the number of elements in the union is $\lvert A\rvert+\lvert B\rvert-\lvert A\cap B\rvert$.
:::

:::esempio{titolo="From a list to a diagram"}
Let $U=\{1,2,3,4,5,6,7,8\}$, $A=\{1,3,4,8\}$ and $B=\{3,5,8\}$. We have $A\cap B=\{3,8\}$ because $3$ and $8$ are shared elements. The union has $4+3-2=5$ elements. The elements outside the union are therefore $2$, $6$ and $7$.

::venn{tipo="due" nomi="A,B" ambiente="U" universo=1 zone="ab" elementi="a:1,4;ab:3,8;b:5;u:2,6,7" titolo="The elements 3 and 8 are in the overlap of A and B"}
:::

:::definizione{titolo="Cartesian product"}
The **Cartesian product** $A\times B$ consists of ordered pairs $(a,b)$ with $a\in A$ and $b\in B$. Every element of $A$ can be paired with every element of $B$, so for finite sets $\lvert A\times B\rvert=\lvert A\rvert\,\lvert B\rvert$.

For example, if $A=\{p,q\}$ and $B=\{1,2\}$, then $A\times B=\{(p,1),(p,2),(q,1),(q,2)\}$. In $B\times A$, the first entry of each pair is a number. The order of the pair records the role of each choice.
:::

:::osservazione{titolo="Complements of unions and intersections"}
An element of $U$ is outside the union if it is outside both sets. Therefore $(A\cup B)^c=A^c\cap B^c$. An element of $U$ is outside the intersection if it is outside at least one of the sets. Hence $(A\cap B)^c=A^c\cup B^c$.
:::

## Polynomials and factorisation

:::definizione{#polinomi titolo="Like terms and operations"}
A polynomial in $x$ is a finite sum of terms $ax^n$, where each coefficient $a$ is real and each exponent $n$ is a nonnegative integer. The coefficients of terms with the same power can be added. For example, $3x^2-5x+2x^2=5x^2-5x$.

To multiply two polynomials, the distributive law pairs every term of the first with every term of the second. For example, $(x-6)(x+2)=x^2+2x-6x-12=x^2-4x-12$. The cross terms determine the coefficient of $x$.
:::

:::definizione{titolo="Identities and common factors"}
The distributive law allows both expansion and factorisation. For example, $12x^3-8x^2=4x^2(3x-2)$ because $4x^2$ divides both terms.

The most useful identities are
$$
\begin{aligned}
(a+b)^2 &= a^2+2ab+b^2,\\[6pt]
(a-b)^2 &= a^2-2ab+b^2,\\[6pt]
(a-b)(a+b) &= a^2-b^2.
\end{aligned}
$$
The first two follow by multiplying two identical binomials. In the third, the cross terms cancel. This is how to recognise a difference of squares such as $25x^2-9=(5x-3)(5x+3)$.
:::

:::esempio{titolo="Factoring a monic quadratic"}
Suppose we want to factor $x^2-x-20$. To write it as $(x+r)(x+s)$, we require $r+s=-1$ and $rs=-20$. The numbers $4$ and $-5$ meet these conditions, so
$$
x^2-x-20=(x+4)(x-5).
$$
The factorisation solves the corresponding equation because the product is zero exactly when $x=-4$ or $x=5$.
:::

:::attenzione{titolo="Domain before simplification"}
The fraction $\dfrac{x^2-16}{x-4}$ is defined for $x\ne 4$. On this domain, cancelling the factor $x-4$ gives $x+4$. The original expression remains undefined at $x=4$ even though $x+4$ equals $8$ there. The excluded values come from the original problem.
:::

:::osservazione{titolo="Divisibility by a linear factor"}
Dividing the polynomial $P(x)$ by $x-r$ gives a quotient $Q(x)$ and constant remainder $k$. Thus $P(x)=(x-r)Q(x)+k$. Substituting $x=r$ gives $P(r)=k$. Therefore $P(x)$ is divisible by $x-r$ exactly when $P(r)=0$. For example, $P(x)=x^3-2x+1$ has the factor $x-1$, because $P(1)=1-2+1=0$.
:::

## Powers and radicals

:::definizione{#potenze-radicali titolo="Integer exponents"}
For a positive integer $n$, $a^n$ denotes the product of $n$ factors equal to $a$. For $a\ne0$, we set $a^0=1$ and $a^{-n}=\dfrac1{a^n}$. The base $0$ is allowed with positive integer exponents.

When the expressions are defined, the rules are
$$
a^m a^n=a^{m+n},\qquad
\frac{a^m}{a^n}=a^{m-n},\qquad
(a^m)^n=a^{mn}.
$$
The quotient requires $a\ne0$. For example, $\dfrac{2^7}{2^4}=2^{7-4}=8$. No corresponding rule adds exponents when the powers themselves are being added.
:::

:::definizione{titolo="Even and odd roots"}
The square root $\sqrt{u}$ is defined for $u\ge0$ and is the **nonnegative number** whose square is $u$. It follows that $\sqrt{x^2}=|x|$, including when $x$ is negative. For example, $\sqrt{(-7)^2}=7$. The equation $x^2=49$ has both $7$ and $-7$ as solutions.

An odd root accepts any real radicand. For example, $\sqrt[3]{-27}=-3$ because $(-3)^3=-27$. For $a>0$, the rational power $a^{\frac{m}{n}}$ denotes $\sqrt[n]{a^m}$, where $m$ is an integer and $n$ a positive integer.
:::

:::esempio{titolo="Like radicals and domain"}
Since $72=36\cdot 2$ and $8=4\cdot 2$, we have
$$
\sqrt{72}-2\sqrt{8}
=6\sqrt{2}-4\sqrt{2}
=2\sqrt{2}.
$$

For the fraction $\dfrac{1}{\sqrt{2x-6}}$, the radicand must be nonnegative and the denominator must be nonzero. Together these conditions give $2x-6>0$, so $x>3$.
:::

:::attenzione{titolo="The root of a sum"}
For $u,v\ge0$, the product $\sqrt{u}\sqrt{v}$ equals $\sqrt{uv}$. A square root of a sum follows a different rule. With $u=9$ and $v=16$, we have $\sqrt{9+16}=5$, whereas $\sqrt9+\sqrt{16}=7$. The distributive law applies to multiplication over addition.
:::

:::esempio{titolo="Rationalising a denominator"}
Since $(\sqrt{11}+3)(\sqrt{11}-3)=11-9=2$,
$$
\frac{2}{\sqrt{11}+3}
=\frac{2(\sqrt{11}-3)}{(\sqrt{11}+3)(\sqrt{11}-3)}
=\sqrt{11}-3.
$$
The expression $\sqrt{11}-3$ is the conjugate of the denominator. Multiplying the numerator and the denominator by the conjugate makes the new denominator a difference of squares.
:::

:::esempio{titolo="Equations with a square root"}
The equation $\sqrt{u}=v$ requires $v\geq 0$ and $u=v^2$. Squaring gives the second condition, and the square root takes nonnegative values. For $\sqrt{5-x}=x-3$, this gives $x\geq 3$ and $5-x=(x-3)^2$. The second condition is equivalent to $(x-1)(x-4)=0$. Only $x=4$ satisfies $x\geq 3$, and both sides equal $1$ there.
:::

## Formulas and equations

:::definizione{#formule-equazioni titolo="Equivalent equations"}
An **equation** is an equality containing an unknown. Its solutions are the values of the unknown that make the equality true. Adding or subtracting the same quantity on both sides preserves the solutions. Division by a quantity is valid wherever it is nonzero. If it depends on a parameter or on the unknown, consider separately the case in which it is zero.

For an equation $ax=b$ with $a\ne0$, we have $x=\dfrac{b}{a}$. If $a=0$, every real number satisfies the equation when $b=0$, and none satisfies it when $b\ne0$.
:::

:::esempio{titolo="Rearranging a formula"}
The relation $P=2(l+w)$ gives the perimeter of a rectangle with sides $l$ and $w$. Dividing by $2$ yields $\dfrac{P}{2}=l+w$, so
$$
w=\frac{P}{2}-l.
$$
If $P=42\,\mathrm{cm}$ and $l=13\,\mathrm{cm}$, we obtain $w=8\,\mathrm{cm}$. In the geometric model the width is positive, so the data must generally satisfy $P>2l$.
:::

:::esempio{titolo="Domain conditions when rearranging"}
In the model $v=\dfrac{s}{t}$, with $t>0$, $v$ is the distance $s$ travelled divided by the time taken. Multiplying by $t$ gives $s=vt$, which is valid for every admissible choice of the original quantities. To obtain $t=\dfrac{s}{v}$ we also need $v\ne0$. If $s=v=0$, the original relation holds for every $t>0$. The two rearrangements therefore require different conditions.
:::

:::definizione{titolo="Quadratic equations"}
A quadratic equation has the form $ax^2+bx+c=0$ with $a\ne0$. Its **discriminant** is $\Delta=b^2-4ac$. When $\Delta>0$, there are two distinct real roots. When $\Delta=0$, there is one repeated real root. When $\Delta<0$, there are no real roots. In the first two cases, we use
$$
x=\frac{-b\pm\sqrt{\Delta}}{2a}.
$$

The formula follows by multiplying the equation by $4a$ and completing the square, which yields $(2ax+b)^2=\Delta$. A real number squared is nonnegative, so the sign of $\Delta$ determines the three cases.
:::

:::esempio{titolo="Choosing a root and checking the result"}
A rectangle has sides $x$ and $x+5$ in centimetres and area $36\,\mathrm{cm}^2$. The model requires $x>0$, so we solve $x(x+5)=36$ under this condition. The equation factors as $(x+9)(x-4)=0$. The roots are $-9$ and $4$, so the width is $4\,\mathrm{cm}$. The other side is $9\,\mathrm{cm}$ and their product is $36\,\mathrm{cm}^2$.
:::

## Inequalities and absolute value

:::definizione{#disequazioni titolo="Order and reversal of direction"}
An **inequality** compares two expressions using $<$, $\leq$, $>$ or $\geq$. Its solutions are the values of the unknown for which the comparison is true. Adding the same quantity on both sides preserves the direction. Multiplying or dividing by a positive number also preserves it. A negative multiplier or divisor reverses the direction because it reverses the order on the number line.

For example, $5-3x>11$ is equivalent to $-3x>6$. Dividing by $-3$ therefore gives $x<-2$.
:::

:::definizione{titolo="Sign of a product or quotient"}
The zeros of the factors divide the number line into intervals. On each interval, the signs of the factors determine the sign of the product. For a quotient, the zeros of the denominator also separate intervals and are always excluded from the solution.

A factor $(x-a)^2$ is positive on both sides of $a$ and zero at $a$, so its sign does not change between the two adjacent intervals. If the inequality includes equality, include the zeros of the numerator where the denominator is nonzero.
:::

:::esempio{titolo="Sign of a quadratic"}
Consider $-x^2+3x+4\ge0$. The quadratic is $-(x+1)(x-4)$, so its zeros are $x=-1$ and $x=4$. Between them, $x+1$ is positive and $x-4$ is negative. The leading minus sign makes the quadratic positive. On the outer intervals the two factors have the same sign, so the quadratic is negative. The solution is $[-1,4]$, with both zeros included.

::grafico{f="-x^2+3*x+4" xmin=-3 xmax=6 ymin=-10 ymax=8 punti="-1,0;4,0" titolo="The quadratic is nonnegative between its zeros, including both endpoints"}
:::

:::definizione{titolo="Absolute-value equations and inequalities"}
For $r>0$, the equation $|u|=r$ is equivalent to $u=r$ or $u=-r$. The condition $|u|\le r$ is equivalent to $-r\le u\le r$. For an exterior interval, $|u|>r$ is equivalent to $u<-r$ or $u>r$. The inner interval collects small distances from zero. The two outer intervals contain large distances.

When $r=0$, the inequality $|u|\le0$ holds exactly when $u=0$. For a negative threshold $r<0$, $|u|\le r$ is impossible and $|u|>r$ holds throughout the domain. When both sides contain the unknown, we can split the problem into cases according to the sign of the expression inside each absolute value.
:::

:::esempio{titolo="Distance from a reference value"}
Consider $|2x-5|>3$. In the first case, $2x-5<-3$, so $x<1$. In the second case, $2x-5>3$, so $x>4$. The solution is $(-\infty,1)\cup(4,+\infty)$. The endpoints correspond to distances exactly equal to the threshold and are excluded.
:::

## Systems in two variables

:::definizione{#sistemi titolo="Solutions as ordered pairs"}
A solution of a **system** is an ordered pair $(x,y)$ satisfying every equation. Substitution isolates an unknown in one equation and substitutes its expression into the other. Elimination combines the equations to cancel one unknown. If both equations in a linear system with two variables represent lines, its solutions are the points shared by the lines. The lines can meet in one point, be distinct and parallel, or coincide.
:::

:::esempio{titolo="Eliminating a variable"}
Consider
$$
\begin{cases}
3x+2y=17,\\
x-2y=3.
\end{cases}
$$
Adding the two equations yields $4x=20$, so $x=5$. The second equation gives $5-2y=3$, so $y=1$. In the first, $3\cdot 5+2\cdot 1=17$, confirming that $(5,1)$ satisfies both equations.
:::

:::osservazione{titolo="Parallel and coincident lines"}
The equations $2x+y=4$ and $4x+2y=9$ are inconsistent, because doubling the first gives $4x+2y=8$. If the constant on the right of the second equation were $8$, satisfying the first would imply the second. The solutions would be all pairs $(x,4-2x)$ as $x$ varies.
:::

:::esempio{titolo="A system with a quadratic condition"}
We want the pairs whose sum is $7$ and whose product is $10$. The equation $x+y=7$ gives $y=7-x$. The second condition $xy=10$ gives $x(7-x)=10$, or $x^2-7x+10=0$. Factoring yields
$$
(x-2)(x-5)=0.
$$
For $x=2$ we obtain $y=5$. For $x=5$ we obtain $y=2$. Both pairs satisfy the sum and product conditions, so the solution set is $\{(2,5),(5,2)\}$.
:::

:::osservazione{titolo="Checking an ordered pair"}
In a nonlinear system, substitution often produces a quadratic equation. Its discriminant can yield two, one or zero possibilities for the remaining variable. Each candidate determines a pair that can be checked against both original equations. Substitution rules out any extra solutions introduced by squaring. When dividing by an expression containing the unknown, check separately the values that would make the divisor zero.
:::
