---
titolo: Powers, proportions, and percentages
sommario: Laws of exponents, orders of magnitude, ratios of measurements, proportional models, and percentage changes.
---

This chapter covers calculations with powers, numbers such as $0.0032$ written with powers of ten, proportions such as $2:3=8:x$, and discounts and increases. Exponents will be used again in calculations with letters. Percentages will be used in statistics for relative frequencies, that is, to say what part of a group has a given feature.

## Base, exponent, and sign

:::definizione{#base-e-segno titolo="The base of a power"}
In a multiplication, the numbers being multiplied are called factors and the result is called the product. A **power** is a product of equal factors. The product $2\cdot2\cdot2\cdot2$ has four factors equal to $2$ and is written $2^4$, read "two to the fourth", which equals $16$. The repeated number is the **base**. The number written at the upper right is the **exponent** and tells how many factors there are.

With letters, if $n$ is a positive integer (one of the numbers $1,2,3,\dots$), the power $a^n$ is the product of $n$ factors equal to $a$. In particular, $a^1=a$.

A negative base is written in round brackets. In the expression $(-2)^n$, each factor is $-2$. The product of two negative numbers is positive, so the first values are

$$
\begin{aligned}
(-2)^1&=-2,\\[6pt]
(-2)^2&=(-2)\cdot(-2)=4,\\[6pt]
(-2)^3&=4\cdot(-2)=-8,\\[6pt]
(-2)^4&=(-8)\cdot(-2)=16.
\end{aligned}
$$

If $n$ is even (that is, $2,4,6,\dots$), the negative factors are grouped in pairs and each pair gives a positive product, so the power is positive. If $n$ is odd (that is, $1,3,5,\dots$), one negative factor remains after the pairs are formed and the power is negative. In the figure, the points $v=(-2)^n$ lie alternately below and above the horizontal axis.

::grafico{xmin=0 xmax=4.6 ymin=-10 ymax=18 nomi="n,v" punti="1,-2,pieno;2,4,pieno;3,-8,pieno;4,16,pieno" segmenti="2,0,2,4;3,0,3,-8;4,0,4,16" titolo="The values $v=(-2)^n$ alternate in sign for $n=1,2,3,4$"}

In the expression $-2^4$, without brackets, the exponent is attached to the number $2$ alone, so the base of the power is $2$. First $2^4=16$ is calculated, then its opposite is taken, that is, the same number with the sign changed. The result is $-2^4=-16$, whereas $(-2)^4=16$.

The expressions $(-2)^3$ and $-2^3$ both equal $-8$. The two values agree because the exponent is odd, and in that case the power with the negative base has the same sign as the opposite of $2^3$.
:::

::::teorema{#potenze titolo="Product, quotient, and power of a power"}
The four laws below make it possible to calculate with powers without writing out all the factors. In the formulas, $m$ and $n$ are positive integers. The symbol $\ne$ means "not equal to".

- **Product of powers with the same base.** The exponents are added. For example, $2^3\cdot2^2=(2\cdot2\cdot2)\cdot(2\cdot2)=2^5$. As a formula, $a^m a^n=a^{m+n}$.
- **Power of a power.** The exponents are multiplied. For example, $(2^3)^2=2^3\cdot2^3=2^6$. As a formula, $(a^m)^n=a^{mn}$.
- **Quotient of powers with the same base.** The quotient is the result of a division and is written with a colon or with a fraction bar. The exponents are subtracted. For example, $2^5:2^2=\dfrac{2\cdot2\cdot2\cdot2\cdot2}{2\cdot2}=2^3$. As a formula, for $a\ne0$ and $m>n$ we have $\dfrac{a^m}{a^n}=a^{m-n}$. The condition $a\ne0$ is required because division by zero is undefined.
- **Product of powers with the same exponent.** The bases are multiplied. For example, $2^3\cdot5^3=(2\cdot5)\cdot(2\cdot5)\cdot(2\cdot5)=10^3$. As a formula, $a^n b^n=(ab)^n$.

In the expression $2^{3^2}$, without brackets, the exponent $3^2=9$ is calculated first, so $2^{3^2}=2^9=512$. The power of a power $(2^3)^2$ equals $2^6=64$ instead.

:::dimostrazione
In the product $a^m a^n$, two groups of factors equal to $a$ are written one after the other. The first group contains $m$ factors and the second contains $n$, so there are $m+n$ factors in all.

In the power $(a^m)^n$, the group of $m$ factors is repeated $n$ times, so there are $mn$ factors in all.

In the quotient $\dfrac{a^m}{a^n}$, the numerator has $m$ factors and the denominator has $n$. To cancel means to divide the numerator and the denominator by the same nonzero number. Since $a\ne0$, the $n$ factors of the denominator cancel with $n$ factors of the numerator. This leaves $m-n$ factors in the numerator and $1$ in the denominator.

In the product $a^n b^n$ there are $n$ factors $a$ and $n$ factors $b$. In a multiplication the order of the factors can be changed, so each factor $a$ is paired with a factor $b$, giving $n$ factors equal to $ab$.
:::
::::

:::esempio{titolo="Choosing a law from the form of the product"}
In the product $2^4\cdot5^4$, the bases differ and the exponents are equal. The bases are therefore multiplied, giving $(2\cdot5)^4=10^4=10000$.

In the product $2^4\cdot 2^5$, the bases are equal. The first group has four factors of $2$ and the second has five, so the product is $2^{4+5}=2^9=512$.

The previous laws concern products and quotients. In the sum $2^4+2^5$, factoring out is used instead. Since $2^5=2^4\cdot2$, the factor $2^4$ appears in both terms of the sum and is factored out, that is, written once in front of the sum of what remains.

$$
\begin{aligned}
2^4+2^5&=2^4\cdot1+2^4\cdot2\\[6pt]
&=2^4\cdot(1+2)\\[6pt]
&=16\cdot3=48.
\end{aligned}
$$
:::

## Zero and negative exponents

::::teorema{#esponenti-non-positivi titolo="The value of a power when the exponent reaches zero"}
The powers of $2$ with exponents $3$, $2$, and $1$ equal $8$, $4$, and $2$. Each time the exponent decreases by one, the value is divided by the base $2$. Dividing by $2$ again gives a value to the exponents $0$, $-1$, and $-2$ too.

$$
2^1=2,\qquad 2^0=1,\qquad 2^{-1}=\frac12,\qquad 2^{-2}=\frac14.
$$

With letters, for a base $a\ne0$ and a positive integer $n$ we define

$$
a^0=1,\qquad a^{-n}=\frac{1}{a^n}.
$$

The **reciprocal** of a nonzero number is $1$ divided by that number. The power $a^{-n}$ is therefore the reciprocal of $a^n$. For example, $3^{-2}=\dfrac{1}{3^2}=\dfrac19$.

With these definitions, the quotient law $\dfrac{a^m}{a^n}=a^{m-n}$ holds for all positive integers $m$ and $n$, including when $m$ is less than or equal to $n$. For example, $\dfrac{3^2}{3^5}=3^{2-5}=3^{-3}=\dfrac1{27}$.

The reciprocal of a fraction is obtained by swapping the numerator and the denominator. For $a\ne0$ and $b\ne0$ we therefore have $\left(\dfrac ab\right)^{-n}=\left(\dfrac ba\right)^n$. For example, $\left(\dfrac23\right)^{-2}=\left(\dfrac32\right)^2=\dfrac94$.

Since each step to a smaller exponent is a division by the base, the sign and the size of the result are known before calculating. For example, $2^{-3}$ is positive and less than $1$, because it is obtained from $1$ by dividing three times by $2$.

:::dimostrazione
*Zero exponent.* Let $n$ be a positive integer. Since $a\ne0$, the power $a^n$ is also nonzero. A nonzero number divided by itself gives $1$, so $\dfrac{a^n}{a^n}=1$. If the subtraction of exponents is applied to the same quotient, the result is $a^{n-n}=a^0$. The two expressions denote the same quotient, so we set $a^0=1$.

*Negative exponent.* We require the product law to hold for the exponent $-n$ as well, that is, $a^{-n}\cdot a^n=a^{-n+n}=a^0=1$. The two sides of an equality are the expressions to the left and to the right of the sign $=$. Dividing both sides by $a^n$, which is nonzero, gives $a^{-n}=\dfrac1{a^n}$.

*Checking the product law.* Let $r$ and $s$ be positive integers. If both exponents are negative, then $a^{-r}a^{-s}=\dfrac{1}{a^ra^s}=\dfrac1{a^{r+s}}=a^{-r-s}$. If the exponents have opposite signs, the product $a^{-r}a^s$ is the quotient $\dfrac{a^s}{a^r}$. After the common factors cancel, there are three cases.

- If $s>r$, there are $s-r$ factors left in the numerator.
- If $s<r$, there are $r-s$ factors left in the denominator.
- If $s=r$, the quotient is $1$.

In each case the result is $a^{s-r}$, and $s-r$ is the sum of the exponents $-r$ and $s$.
:::

In the figure, each point $v=2^n$, for $n$ from $-2$ to $3$, is twice as high as the point to its left.

::grafico{xmin=-2.6 xmax=3.6 ymin=-0.7 ymax=9.4 nomi="n,v" punti="-2,0.25,pieno;-1,0.5,pieno;0,1,pieno;1,2,pieno;2,4,pieno;3,8,pieno" titolo="One step to the left halves the value $v=2^n$"}
::::

:::esempio{titolo="Reciprocal of a power with a negative base"}
We calculate $\left(-\dfrac23\right)^{-3}$. The power with the positive exponent $3$ is calculated first, and then its reciprocal is taken.

$$
\begin{aligned}
\left(-\frac23\right)^3&=\left(-\frac23\right)\cdot\left(-\frac23\right)\cdot\left(-\frac23\right)=-\frac8{27},\\[6pt]
\left(-\frac23\right)^{-3}&=-\frac{27}{8}.
\end{aligned}
$$

The cube, that is, the power with exponent $3$, is negative because the exponent is odd. The reciprocal has the same sign, so the result stays negative.

Multiplying the two results gives $\left(-\dfrac8{27}\right)\cdot\left(-\dfrac{27}8\right)=1$. Indeed, the sum of the exponents is $3+(-3)=0$ and a power with exponent zero equals $1$.

The absolute value of a number is the number without its sign. The absolute value of the result, $\dfrac{27}{8}$, is greater than $1$ because it is the reciprocal of $\dfrac8{27}$, which is less than $1$.
:::

:::attenzione
Zero raised to a positive exponent is zero, for example $0^2=0\cdot0=0$. With a negative exponent, the definition would give $0^{-2}=\dfrac{1}{0^2}=\dfrac10$, and division by zero is undefined, so $0^{-2}$ has no value. In this course $0^0$ is also left without a value, because the quotient $\dfrac{a^n}{a^n}$ used to justify $a^0=1$ requires a nonzero base.
:::

## Powers of ten and scientific notation

:::definizione{#notazione titolo="Coefficient and exponent in scientific notation"}
A power of ten with a positive exponent is written as the digit $1$ followed by as many zeros as the exponent indicates, for example $10^3=1000$. With a negative exponent it is the reciprocal, for example $10^{-3}=\dfrac1{1000}=0.001$.

**Scientific notation** is the writing of a positive number as a product $c\cdot10^n$. The number $c$ is called the **coefficient** and is greater than or equal to $1$ and less than $10$, in symbols $1\le c<10$. The exponent $n$ is a positive, negative, or zero integer. For example,

$$
4500=4.5\cdot1000=4.5\cdot10^3,\qquad
0.0032=3.2\cdot0.001=3.2\cdot10^{-3}.
$$

The exponent counts how many places the decimal point has moved to obtain the coefficient. In $4500$ the point moves three places to the left and the exponent is $3$. In $0.0032$ it moves three places to the right and the exponent is $-3$.

For a negative number, a minus sign is written in front of the scientific notation of its absolute value. Zero is written $0$.

The condition $1\le c<10$ makes the representation unique. Indeed, multiplying the three terms of the condition by $10^n$ gives $10^n\le c\cdot10^n<10^{n+1}$, so the number lies between two consecutive powers of ten and the exponent $n$ is that of the smaller one. For example, $0.0032$ lies between $10^{-3}=0.001$ and $10^{-2}=0.01$, so its exponent is $-3$ and it is written $3.2\cdot10^{-3}$.
:::

:::esempio{titolo="Normalizing the coefficient after multiplication"}
In the product $(3\cdot10^4)(4\cdot10^2)$, the coefficients are multiplied together and the powers of ten are multiplied together.

$$
(3\cdot10^4)(4\cdot10^2)=(3\cdot4)\cdot(10^4\cdot10^2)=12\cdot10^{4+2}=12\cdot10^6.
$$

The coefficient $12$ is greater than $10$, so $12\cdot10^6$ is not yet in scientific notation. To **normalize** means to bring the coefficient back between $1$ and $10$ without changing the number. Since $12=1.2\cdot10$, we have

$$
12\cdot10^6=1.2\cdot10\cdot10^6=1.2\cdot10^7.
$$

The coefficient has been divided by ten and the power has been multiplied by ten, so the product is unchanged. In the figure the point $12$ is outside the stretch from $1$ to $10$, while the point $1.2$ is inside it.

::grafico{xmin=0 xmax=13.4 ymin=-1 ymax=3.1 assi=0 vettori="0,0,13,0" linee="1,-0.2 1,0.2;10,-0.2 10,0.2" punti="1.2,0,pieno;12,0,pieno" etichette="1,-0.55,1;10,-0.55,10;1.3,0.62,1.2;12,0.62,12;5.4,0.62,1 ≤ c < 10" titolo="$12\cdot10^6$ and $1.2\cdot10^7$ represent the same number. The second coefficient lies in the range for scientific notation"}

The same procedure works with a negative exponent. For example, $38\cdot10^{-7}=3.8\cdot10\cdot10^{-7}=3.8\cdot10^{-6}$.

For a sum, the two numbers are first written with the same power of ten. In $4.2\cdot10^5+8\cdot10^4$, the second number is rewritten. Since $8=0.8\cdot10$, we have $8\cdot10^4=0.8\cdot10\cdot10^4=0.8\cdot10^5$. Both coefficients now count hundreds of thousands and are added.

$$
4.2\cdot10^5+0.8\cdot10^5=(4.2+0.8)\cdot10^5=5\cdot10^5.
$$

The common exponent remains $5$.
:::

## Ratios and proportions

::::teorema{#rapporti titolo="Equivalence of a proportion and equality of cross products"}
The **ratio** of two numbers $a$ and $b$, with $b\ne0$, is the quotient $\dfrac ab$. It is also written $a:b$ and read "$a$ is to $b$". A ratio stays the same if both of its terms are multiplied or divided by the same nonzero number. For example, $3:5$ and $6:10$ are the same ratio.

A **proportion** is an equality between two ratios. The expression $a:b=c:d$ means $\dfrac ab=\dfrac cd$, with $b\ne0$ and $d\ne0$. For example, $2:3=8:12$, because $\dfrac8{12}$ reduces to $\dfrac23$. The first and last terms, $a$ and $d$, are called the **extremes**. The two middle terms, $b$ and $c$, are called the **means**.

With $b\ne0$ and $d\ne0$, the proportion $a:b=c:d$ is equivalent to the equality $ad=bc$. In words, the product of the extremes equals the product of the means. In $2:3=8:12$ the two products are $2\cdot12=24$ and $3\cdot8=24$.

:::dimostrazione
An equality remains true if both sides are multiplied or divided by the same nonzero number.

Start from $\dfrac ab=\dfrac cd$ and multiply both sides by $bd$. On the left $b$ cancels and $ad$ remains. On the right $d$ cancels and $bc$ remains. The result is therefore $ad=bc$.

Conversely, start from $ad=bc$ and divide both sides by $bd$. On the left $d$ cancels and $\dfrac ab$ remains. On the right $b$ cancels and $\dfrac cd$ remains.

The number $bd$ is nonzero because $b\ne0$ and $d\ne0$. Each of the two equalities therefore follows from the other.
:::

In $2:3=8:x$, the letter $x$ is the unknown, that is, the number to be found. The unknown is a divisor, so $x\ne0$ is required. The values allowed for the unknown form the domain. The equality of the products gives $2\cdot x=3\cdot8$, that is, $2x=24$. Dividing both sides by $2$ gives $x=12$. The value $12$ is nonzero, so it belongs to the domain. Substituting it gives $\dfrac8{12}=\dfrac23$, so the proportion is true.

In the proportion $0:5=3:x$, the equality of the products gives $0\cdot x=5\cdot3=15$. The product $0\cdot x$ equals $0$ for every $x$, so the proportion has no solutions.

Two ratios with a common term are multiplied to obtain a third ratio. If $A:B=2:3$ and $B:C=3:7$, then $\dfrac AC=\dfrac AB\cdot\dfrac BC=\dfrac23\cdot\dfrac37=\dfrac27$, that is, $A:C=2:7$.
::::

:::esempio{titolo="A division into five equal shares"}
To split $60$ euros in the ratio $2:3$ means to find two amounts whose total is $60$ euros and whose ratio is $\dfrac23$. The first amount is represented by two equal shares and the second by three shares equal to the first ones. There are $2+3=5$ shares in all and they have the same value, so one share is $\dfrac{60}{5}=12$ euros. The two amounts are

$$
2\cdot12=24\ \text{euros},\qquad 3\cdot12=36\ \text{euros}.
$$

The ratio of the amounts is $\dfrac{24}{36}=\dfrac23$. Compared with the total, the first amount is $\dfrac{24}{60}=\dfrac25$, that is, two shares out of five. In the figure the bar is divided into five equal cells, two for the amount of $24$ euros (symbol €) and three for the amount of $36$ euros.

::struttura{riferimento=0 poligoni="0,0 2,0 2,0.8 0,0.8;2,0 5,0 5,0.8 2,0.8" linee="1,0 1,0.8;2,0 2,0.8;3,0 3,0.8;4,0 4,0.8" etichette="1,1.15,24 €;3.5,1.15,36 €" titolo="The total of 60 euros is made up of five shares of 12 euros. The first two are worth 24 euros and the other three 36 euros"}
:::

:::osservazione
A **quantity** is a property that is measured, such as a length, a time, or a cost. The **unit of measurement** is the amount chosen as a reference, for example the meter (symbol $\mathrm m$) or the centimeter (symbol $\mathrm{cm}$).

For the ratio of two lengths, both measures are written in the same unit. Since $1\,\mathrm m=100\,\mathrm{cm}$, the ratio of one meter to $25\,\mathrm{cm}$ is $\dfrac{100}{25}=4$. The result is a number without a unit.

In the ratio of quantities of different kinds, the units remain in the result. A distance of $180\,\mathrm{km}$ (kilometers) traveled in $3\,\mathrm h$ (hours) gives the average speed $\dfrac{180}{3}=60$ kilometers per hour, which is written $60\,\mathrm{km/h}$. The value is the number of kilometers covered on average in one hour.
:::

## Direct proportionality and fixed fees

:::definizione{#proporzionalita titolo="The constant ratio in direct proportionality"}
One notebook costs $3$ euros. Two notebooks cost $6$ euros and four notebooks cost $12$ euros. In each pair the ratio of the cost to the number of notebooks is the same, because $\dfrac31=\dfrac62=\dfrac{12}4=3$.

Two quantities $x$ and $y$ are **directly proportional** if $y=kx$, where $k$ is a constant, that is, a number that stays the same for all pairs of values. The number $k$ is called the constant of proportionality. For every $x\ne0$, the quotient $\dfrac yx$ equals $k$. If $x$ doubles, $y$ doubles too.

In the example, $x$ is the number of notebooks, $y$ is the cost in euros, and $y=3x$. The constant $k=3$ is measured in euros per notebook and is the **unit price**, that is, the price of a single notebook.

If the values of $x$ include $x=0$, then $y=k\cdot0=0$. The graph of $y=kx$ is therefore a straight line through the origin, that is, through the point where the two axes meet.
:::

:::esempio{titolo="Unit price and total cost"}
A rate is the rule used to calculate a cost. Two rates are compared, where $x$ is the number of items and $C$ is the cost in euros.

- Under the rate $C=3x$, each item costs $3$ euros.
- Under the rate $C=3x+5$, each item still costs $3$ euros and in addition there is a **fixed fee** of $5$ euros, the same for any number of items.

For four items, the first rate gives $3\cdot4=12$ euros and the second gives $3\cdot4+5=17$ euros.

The average cost per item is the total cost divided by the number of items. Under the first rate it is always $3$ euros. Under the second it is $\dfrac{3+5}{1}=8$ euros for one item and $\dfrac{17}{4}=4.25$ euros for four items.

In the figure the two rates are two parallel straight lines. The first starts at the origin and the second at the point of height $5$.

::grafico{f="3*x;3*x+5" xmin=-0.55 xmax=5.5 ymin=-1 ymax=22 nomi="x,C" legenda="C=3x;C=3x+5" punti="0,0,pieno;0,5,pieno;4,12,pieno;4,17,pieno" segmenti="4,0,4,17" titolo="Both rates have the same increase per item. The second starts at 5 euros"}

A table distinguishes a constant ratio from a constant increase. When $x$ goes from $1$ to $4$, that is, increases by three units, both rates increase by $9$ euros. Dividing each cost by its number of items, only the first rate always gives the same value, so only under the first rate is the cost directly proportional to the number of items.

| Items $x$ | Cost $3x$ | Cost $3x+5$ | Average per item under the second rate |
| --- | --- | --- | --- |
| $1$ | $3$ | $8$ | $8$ |
| $4$ | $12$ | $17$ | $\dfrac{17}{4}$ |
:::

## Inverse proportionality and the quantity held constant

:::definizione{#proporzionalita-inversa titolo="The constant product in inverse proportionality"}
A rectangle of area $12$ has base $2$ and height $6$, or base $3$ and height $4$, or base $4$ and height $3$. In each pair the product is the same, because $2\cdot6=3\cdot4=4\cdot3=12$.

Two positive quantities $x$ and $y$ are **inversely proportional** if their product is constant, that is, if $xy=k$ with $k>0$ fixed. Dividing both sides by $x$ gives $y=\dfrac{k}{x}$.

If $x$ doubles, $y$ is halved. With any factor, denoted by the Greek letter $\lambda$ (read "lambda") and greater than zero, multiplying $x$ by $\lambda$ divides $y$ by $\lambda$. Indeed, the product $(\lambda x)\cdot\dfrac{y}{\lambda}$ is still $xy=k$.

In the graph of $y=\dfrac kx$, with $x$ and $y$ positive, $y$ decreases as $x$ increases. In a table, inverse proportionality is recognized by multiplying the two values of each pair, because the products are all equal to $k$.
:::

:::esempio{titolo="Identical machines sharing the same job"}
A job takes $24$ hours for one machine. A **machine-hour** is the work one machine does in one hour, so the whole job amounts to $24$ machine-hours.

Suppose that $m$ identical machines work together at the same rate and that the work can be shared among them. In $t$ hours the $m$ machines do $m\cdot t$ machine-hours. The job is finished when $m\cdot t=24$, so $t=\dfrac{24}{m}$. The number of machines and the duration are inversely proportional.

With $3$ machines it takes $\dfrac{24}3=8$ hours, and with $6$ machines it takes $\dfrac{24}6=4$. The products $3\cdot8$ and $6\cdot4$ both equal $24$. The figure marks the points for $2$, $3$, and $6$ machines.

::grafico{f="24/x" xmin=0.9 xmax=8.4 ymin=-0.6 ymax=16.2 nomi="m,t" legenda="t=\dfrac{24}{m}" punti="2,12,pieno;3,8,pieno;6,4,pieno" segmenti="3,0,3,8;6,0,6,4" titolo="The marked points show the integers $m=2,3,6$ and their corresponding durations in hours"}

Machine-hours also give the work that remains when the number of machines changes during the job. If three machines have worked for two hours, they have done $3\cdot2=6$ machine-hours. There are $24-6=18$ machine-hours left. With six machines it takes another $\dfrac{18}6=3$ hours.
:::

:::osservazione
If the job also requires one hour of preparation, the same for any number of machines, the total duration is $t=1+\dfrac{24}{m}$. With two machines the total is $1+12=13$ hours, and with four it is $1+6=7$ hours. The products $2\cdot13=26$ and $4\cdot7=28$ differ, so the total duration is not inversely proportional to the number of machines. The duration of the job itself, $\dfrac{24}m$, is still inversely proportional to $m$.
:::

## Percentages, parts, and the base of comparison

:::definizione{#percentuali titolo="The total used to measure a percentage"}
A **percentage** is a fraction with denominator $100$. The symbol $\%$ is read "percent", so $20\%=\dfrac{20}{100}=\dfrac15$.

The $p\%$ of a quantity $Q$ is $Q\cdot\dfrac p{100}$; for example, $20\%$ of $80$ is $16$.

In the other direction, if the part $P$ and the total $Q$ are known, with $Q$ positive, the percentage is $p=100\cdot\dfrac PQ$. The ratio $\dfrac PQ$ of the part to the total is also called the relative frequency. In a group of $80$ students, $16$ are absent. Since $\dfrac{16}{80}=\dfrac15$ and $100\cdot\dfrac15=20$, the absent students are $20\%$ of the group. The students present number $80-16=64$, that is, $80\%$, because $\dfrac{64}{80}=\dfrac45$.

The two percentages have the same total $Q=80$ as denominator and their sum is $100\%$. Each is the complementary percentage of the other, that is, the one needed to reach $100\%$. In the figure the section for the students present is four times as long as the one for the absent students, just as $80\%$ is four times $20\%$.

::struttura{riferimento=0 poligoni="0,0 8,0 8,0.9 0,0.9;8,0 10,0 10,0.9 8,0.9" linee="8,0 8,0.9" etichette="4,1.25,64 present;9,1.25,16 absent;4,0.4,80%;9,0.4,20%" titolo="The total of 80 is split into two groups. The lengths of the two sections are proportional to their percentages"}

For the percentage of two groups put together, with no people in common, the parts are added together and the totals are added together. In the first group $6$ people out of $20$ take part, that is, $30\%$. In the second, $18$ people out of $30$ take part, that is, $60\%$. Altogether $6+18=24$ people out of $20+30=50$ take part, so the overall percentage is

$$
100\cdot\frac{6+18}{20+30}=100\cdot\frac{24}{50}=48.
$$

The arithmetic mean of two numbers is their sum divided by two. The arithmetic mean of $30\%$ and $60\%$ is $45\%$ and differs from $48\%$, because it gives equal weight to two groups with different numbers of people.

The percentages of the individual groups serve as a check. At least $30\%$ of the people in each group take part, so at least $30\%$ take part in the two groups put together as well. Likewise, at most $60\%$ take part in each group, so the overall percentage lies between $30\%$ and $60\%$. The value $48\%$ is closer to $60\%$ because the group with $60\%$ is the larger one.
:::

:::esempio{titolo="Percentage points and relative change"}
A share, that is, a part of the total expressed as a percentage, rises from $40\%$ to $50\%$. The difference between the two percentages is $50-40=10$ and is measured in **percentage points**.

The **relative change** is the difference divided by the starting value. As a percentage, it is multiplied by $100$.

$$
100\cdot\frac{50-40}{40}=100\cdot\frac{10}{40}=100\cdot\frac14=25.
$$

The share has therefore increased by $25\%$ of its initial value. As a check, $40\cdot1.25=50$.
:::

## Successive changes and recovering the original value

::::teorema{#variazioni-successive titolo="The product of the change factors"}
A price of $200$ euros increases by $10\%$. The $10\%$ of $200$ is $20$, so the new price is $200+20=220$ euros. The same result is obtained with a single multiplication, $200\cdot1.1=220$. The number $1.1$ is the **change factor**, that is, the number by which the initial value is multiplied to get the final one.

For a positive quantity $Q$, the following formulas hold.

- An increase of $p\%$ gives $Q\left(1+\dfrac p{100}\right)$.
- A decrease of $p\%$, with $0\le p\le100$, gives $Q\left(1-\dfrac p{100}\right)$.

In two successive changes, the second is calculated on the value already changed by the first. Each factor multiplies the value obtained up to that point, so the overall factor is the product of the two factors.

:::dimostrazione
The increase adds to $Q$ its $p\%$, that is, the amount $Q\cdot\dfrac p{100}$. The new value is $Q+Q\cdot\dfrac p{100}$. The factor $Q$ appears in both terms and is factored out, giving $Q\left(1+\dfrac p{100}\right)$.

In a decrease the same amount is subtracted. The new value is $Q-Q\cdot\dfrac p{100}=Q\left(1-\dfrac p{100}\right)$.

For two successive changes, let $a$ and $b$ be the two factors. After the first change the value is $Qa$. The second change multiplies this value by $b$ and gives $(Qa)b=Q(ab)$.
:::
::::

:::esempio{titolo="An increase and a decrease of the same percentage"}
Start from $100$. The increase of $10\%$ gives $100\cdot1.1=110$. The subsequent decrease of $10\%$ is calculated on $110$ and amounts to $11$, so the result is $110-11=99$.

Reversing the order, the decrease of $10\%$ first leads to $90$. The increase of $10\%$ is calculated on $90$ and amounts to $9$, so the result is again $99$. The final value is the same because in both cases the overall factor is $1.1\cdot0.9=0.99$.

In the figure the two paths start from $100$, pass through the intermediate values $110$ and $90$, and both arrive at $99$.

::grafico{xmin=-0.45 xmax=2.65 ymin=85 ymax=115 nomi="step,value" linee="0,100 1,110 2,99;0,100 1,90 2,99" punti="0,100,pieno;1,110,pieno;1,90,pieno;2,99,pieno" etichette="1.02,112.5,110;1.02,87.6,90;2.28,97.6,99" titolo="Starting from 100, the 10% changes lead to 99 through two different intermediate values"}

To recover the initial value, the final value is divided by the change factor. A discount is a reduction of the price. If a discount of $20\%$ brings the price to $64$ euros, the factor is $1-\dfrac{20}{100}=\dfrac{80}{100}=\dfrac45$. Dividing by $\dfrac45$ is the same as multiplying by the reciprocal $\dfrac54$, so the initial price is

$$
64\cdot\frac54=80\ \text{euros}.
$$

Going back from $64$ to $80$ euros means adding $16$ euros. Compared with the new price of $64$ euros, the increase is $\dfrac{16}{64}=\dfrac14$, that is, $25\%$. The discount of $20\%$ is therefore undone by an increase of $25\%$, because the two percentages are calculated on different prices.
:::

:::attenzione
A decrease of $100\%$ has factor $1-\dfrac{100}{100}=0$. Every initial value becomes zero, for example both $50$ and $80$. The starting value therefore cannot be obtained from the final value alone.
:::

## Scales, conversions, and area measurements

:::definizione{#scale titolo="The ratio of the drawing measurement to the actual measurement"}
The **scale** of a map or a drawing is the ratio of a length on the drawing to the corresponding actual length, measured in the same unit. In a scale of $1:k$, with $k>0$, one unit on the drawing corresponds to $k$ units of the same kind in reality.

At scale $1:50000$, one centimeter on the map corresponds to $50000\,\mathrm{cm}$ in reality. A meter contains $100$ centimeters and a kilometer contains $1000$ meters, so

$$
50000\,\mathrm{cm}=\frac{50000}{100}\,\mathrm m=500\,\mathrm m=0.5\,\mathrm{km}.
$$

Six centimeters on the map therefore correspond to $6\cdot0.5\,\mathrm{km}=3\,\mathrm{km}$.

In the other direction, to find how long an actual distance of $2\,\mathrm{km}$ is on the map, it is first written in centimeters. This gives $2\,\mathrm{km}=2000\,\mathrm m=200000\,\mathrm{cm}$. Dividing by $50000$ gives $\dfrac{200000}{50000}=4$, that is, $4\,\mathrm{cm}$ on the map.

In the figure, $c$ is the length on the map in centimeters and $d$ is the actual distance in kilometers. The two quantities are directly proportional, with $d=0.5\,c$. The two marked points are the ones already calculated.

::grafico{f="0.5*x" xmin=-0.35 xmax=7.2 ymin=-0.35 ymax=4.1 nomi="c,d" legenda="d=0.5c" punti="4,2,pieno;6,3,pieno" segmenti="4,0,4,2;0,2,4,2;6,0,6,3;0,3,6,3" titolo="At scale $1:50000$, each centimeter $c$ on the map corresponds to half a kilometer of actual distance $d$"}
:::

:::esempio{titolo="From the length factor to the area factor"}
On a plan drawn at scale $1:200$, a rectangle measures $3\,\mathrm{cm}$ by $5\,\mathrm{cm}$. Each actual length is $200$ times the one on the drawing, so the actual sides are

$$
3\,\mathrm{cm}\cdot200=600\,\mathrm{cm}=6\,\mathrm m,\qquad
5\,\mathrm{cm}\cdot200=1000\,\mathrm{cm}=10\,\mathrm m.
$$

The area of a rectangle is the product of its two sides. The actual area is $6\,\mathrm m\cdot10\,\mathrm m=60\,\mathrm{m}^2$ (square meters).

The same result is obtained starting from the area on the drawing, which is $3\,\mathrm{cm}\cdot5\,\mathrm{cm}=15\,\mathrm{cm}^2$ (square centimeters). Both sides are multiplied by $200$, so the area is multiplied by $200\cdot200=200^2=40000$.

$$
15\,\mathrm{cm}^2\cdot200^2=15\,\mathrm{cm}^2\cdot40000=600000\,\mathrm{cm}^2.
$$

A square meter is a square with a side of $100\,\mathrm{cm}$, so it contains $100\cdot100=10000$ square centimeters. Dividing gives $\dfrac{600000}{10000}=60$, that is, $60\,\mathrm{m}^2$ again.
:::
