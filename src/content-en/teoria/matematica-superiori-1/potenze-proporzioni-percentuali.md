---
titolo: Powers, proportions, and percentages
sommario: Laws of exponents, ratios, percentage changes, proportionality, and scales.
---

## Powers and their properties

:::teorema{#potenze titolo="Bases, exponents, and their laws"}
For a positive integer $n$, $a^n$ is the product of $n$ factors equal to $a$. The **base** is $a$ and the **exponent** is $n$. For powers with the same base, the following laws apply.

$$
a^m a^n=a^{m+n},\qquad (a^m)^n=a^{mn}.
$$

If $a\ne0$, the additional laws $\dfrac{a^m}{a^n}=a^{m-n}$, $a^0=1$, and $a^{-n}=\dfrac1{a^n}$ hold. The expression $0^0$ is excluded in this course.

The placement of the minus sign matters. Compare $(-3)^2=9$ with $-3^2=-9$. In the first expression the minus sign is part of the base. In the second, it gives the opposite of the square. The laws of exponents concern products and quotients, so $2^3+2^2$ equals $12$, which differs from $2^5$.
:::

:::esempio{titolo="Quotient with a smaller exponent in the numerator"}
The quotient $\dfrac{5^2}{5^4}$ has two factors of $5$ in the numerator and four in the denominator. After canceling the two common factors, two factors remain in the denominator.

$$
\begin{aligned}
\frac{5^2}{5^4}&=5^{2-4}\\[6pt]
&=5^{-2}\\[6pt]
&=\frac1{25}.
\end{aligned}
$$

The negative exponent gives the reciprocal of $5^2$. Because the power $5^2$ is greater than $1$, the reciprocal is positive and less than $1$.
:::

## Powers of ten and scientific notation

:::definizione{#notazione titolo="Writing large and small numbers"}
The **scientific notation** for a positive number is $c\cdot10^n$, where $1\le c<10$ and $n$ is an integer. Examples are $45000=4.5\cdot10^4$ and $0.0032=3.2\cdot10^{-3}$.

The power of ten gives the scale factor. Multiplying by $10^3$ makes a number one thousand times as large. Multiplying by $10^{-3}$ gives one thousandth of it. For products and quotients, work with the coefficients and the powers of ten separately, then bring the coefficient back into the required range. For example, $(3\cdot10^4)(4\cdot10^2)=1.2\cdot10^7$.
:::

## Ratios and proportions

:::teorema{#rapporti titolo="Multiplicative comparisons"}
The **ratio** of $a$ to $b$, where $b\ne0$, is $\dfrac ab$. Quantities of the same kind need matching units for comparison. The ratio of $1$ meter to $25$ centimeters is $\dfrac{100}{25}=4$.

A proportion $a:b=c:d$ expresses the equality $\dfrac ab=\dfrac cd$, where $b,d\ne0$. Multiplying by $bd$ gives $ad=bc$. For example, $2:3=8:x$ is equivalent to $2x=24$, so $x=12$.

Splitting a total of $60$ in the ratio $2:3$ means dividing it into five equal shares of $12$ each. The two amounts are $24$ and $36$, which add up to the total.
:::

## Percentages and successive changes

:::teorema{#percentuali titolo="Part, total, and base of comparison"}
The $p\%$ of a quantity $Q$ is $Q\dfrac p{100}$. To find what percentage a part $P$ represents of a total $Q>0$, calculate $\dfrac PQ\cdot100$.

An increase of $p\%$ multiplies the starting amount by $1+\dfrac p{100}$. A discount multiplies it by $1-\dfrac p{100}$. A price of $80$ euros discounted by $20\%$ becomes $64$ euros. If the final price is $64$, divide it by $0.8$ to recover the original price, $80$.

Successive changes apply to the updated value. An increase of $10\%$ followed by a decrease of $10\%$ gives the factor $1.1\cdot0.9=0.99$. Starting from $100$ gives $99$.
:::

:::esempio{titolo="Percentage change and percentage points"}
In a survey, the share of favorable responses rises from $40\%$ to $50\%$. The difference between the two shares is $10$ **percentage points**. To find the relative change, divide this difference by the original share.

$$
\frac{50-40}{40}\cdot100=25.
$$

The share therefore increases by $25\%$ relative to its original value. Indeed, $40\%\cdot1.25=50\%$.
:::

## Direct and inverse proportionality

:::definizione{#proporzionalita titolo="Constant ratio or constant product"}
Two quantities are **directly proportional** when $y=kx$ and the ratio $\dfrac yx=k$ stays constant for $x\ne0$. If one notebook costs $3$ euros, the cost of $x$ notebooks is $y=3x$. Its graph is a straight line through the origin.

They are **inversely proportional** when $xy=k$, so $y=\dfrac kx$ for $x\ne0$. For a fixed job done by identical machines at the same rate, doubling the number of machines halves the time. The model assumes that the machines can work at the same time without interfering with each other.

A formula such as $y=3x+5$ describes a cost with a unit price and a fixed fee. The ratio of cost to quantity varies, so the relationship is not directly proportional.
:::

:::esempio{titolo="Unit prices and costs with a fixed fee"}
Consider two rates. The first gives the cost as $y=3x$, where $x$ is the number of items and $y$ is the cost in euros. The second gives a cost of $y=3x+5$. Both costs rise by $3$ euros for each additional item. At zero items, however, the first rate costs $0$ euros and the second already costs $5$ euros.

::grafico{f="3*x;3*x+5" xmin=-0.5 xmax=5.5 ymin=-1 ymax=22 punti="0,0,pieno;0,5,pieno;4,12,pieno;4,17,pieno" titolo="The proportional cost line passes through the origin. The fixed fee moves the second line up by 5 euros"}

For the first rate, the ratio of cost to item count is always $3$ when $x>0$. For the second, the ratio is $8$ euros per item when $x=1$ and $\dfrac{17}{4}$ euros per item when $x=4$, so it varies with the quantity. The lines represent both formulas, and only whole numbers of items can be bought.
:::

## Scales and inverse problems

:::esempio{#scale titolo="From the drawing to the actual measurement"}
At scale $1:50000$, one centimeter on the map represents $50000$ centimeters on the ground, or $500$ meters. Therefore $6$ centimeters corresponds to $3000$ meters, or $3$ kilometers.

The scale can be applied before changing units or after converting both distances to the same unit. To draw $2$ kilometers at the same scale, convert to $200000$ centimeters and divide by $50000$. This gives $4$ centimeters on the map. Converting back checks the result.
:::
