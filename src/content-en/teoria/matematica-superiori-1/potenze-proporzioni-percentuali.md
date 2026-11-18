---
titolo: Powers, proportions, and percentages
sommario: Laws of exponents, orders of magnitude, ratios of measurements, proportional models, and percentage changes.
---

Arithmetic with rational numbers lets us multiply equal factors and compare two measurements using a quotient. Exponent laws shorten the first calculation. Ratios and percentages describe the second and help formulate problems with an unknown quantity. Exponents will be used again in operations on monomials, while percentages will express relative frequencies in statistics.

## Base, exponent, and sign

:::definizione{#base-e-segno titolo="The base of a power"}
For a positive integer $n$, the power $a^n$ is the product of $n$ factors equal to $a$. The number $a$ is the **base** and $n$ is the **exponent**. In $(-2)^n$, each factor is $-2$. If $n$ is even, the negative factors can be paired to give a positive product. If $n$ is odd, one negative factor remains and the product is negative.

::grafico{xmin=0 xmax=4.6 ymin=-10 ymax=18 nomi="n,v" punti="1,-2,pieno;2,4,pieno;3,-8,pieno;4,16,pieno" segmenti="2,0,2,4;3,0,3,-8;4,0,4,16" titolo="The values $v=(-2)^n$ alternate in sign for $n=1,2,3,4$"}

In the expression $-2^4$, the base of the power is $2$. The power $2^4=16$ is evaluated first and then negated, so $-2^4=-16$. The expressions $(-2)^3$ and $-2^3$ both equal $-8$. They agree in this case because the exponent is odd and the power of the negative base has the same sign as the negated positive power.
:::

::::teorema{#potenze titolo="Product, quotient, and power of a power"}
Let $m$ and $n$ be positive integers. The product of two powers with base $a$ is $a^m a^n=a^{m+n}$. A power of a power is $(a^m)^n=a^{mn}$. If $a\ne0$ and $m>n$, the quotient is $\dfrac{a^m}{a^n}=a^{m-n}$. If two powers have the same exponent, their bases can be multiplied, so $a^n b^n=(ab)^n$.

:::dimostrazione
The product $a^m a^n$ joins two groups of factors. The first contains $m$ factors and the second contains $n$, giving a total of $m+n$. In the power $(a^m)^n$, the group of $m$ factors is repeated $n$ times, so there are $mn$ factors in all. In the quotient $\dfrac{a^m}{a^n}$, the $n$ common factors cancel. Each is nonzero since $a\ne0$, leaving $m-n$ factors in the numerator. Finally, in $a^n b^n$ each factor $a$ can be paired with a factor $b$, giving $n$ copies of $ab$.
:::
::::

:::esempio{titolo="Choosing a law from the form of the product"}
In $2^4\cdot5^4$, the bases differ and the exponents agree. The bases can therefore be combined to give $10^4=10000$. In $2^4\cdot 2^5$, the bases agree. The first group contains four factors of $2$ and the second contains five, so the product is $2^9=512$. For a sum such as $2^4+2^5$, factoring out $2^4$ gives $2^4(1+2)=48$.
:::

## Zero and negative exponents

::::teorema{#esponenti-non-positivi titolo="The value of a power when the exponent reaches zero"}
To keep the quotient law valid for integer exponents, for $a\ne0$ we define $a^0=1$ and $a^{-n}=\dfrac{1}{a^n}$ for a positive integer $n$. Decreasing the exponent by one divides the power by its base. This makes it possible to predict the value and sign before calculating.

:::dimostrazione
Since $a\ne0$, for every $n>0$ we have $\dfrac{a^n}{a^n}=1$. If the exponents are subtracted in the quotient, the value corresponding to $a^{n-n}$ is therefore $1$. To obtain $a^{-n}$, require that $a^{-n}a^n=a^0$. Dividing by $a^n$ gives its reciprocal.

The product law can be checked using these definitions. For positive integers $r,s$, we have $a^{-r}a^{-s}=\dfrac{1}{a^ra^s}=\dfrac1{a^{r+s}}$. When the exponents have opposite signs, the product $a^{-r}a^s$ becomes $\dfrac{a^s}{a^r}$. After cancellation there are $s-r$ factors in the numerator if $s>r$, or $r-s$ factors in the denominator if $s<r$. When $s=r$ the quotient is $1$. In each case the result is $a^{s-r}$.
:::

::grafico{xmin=-2.6 xmax=3.6 ymin=-0.7 ymax=9.4 nomi="n,v" punti="-2,0.25,pieno;-1,0.5,pieno;0,1,pieno;1,2,pieno;2,4,pieno;3,8,pieno" titolo="One step to the left halves the value $v=2^n$"}
::::

:::esempio{titolo="Reciprocal of a power with a negative base"}
With base $-\dfrac23$ and exponent $-3$, first find the power with the positive exponent. The cube is negative, so its reciprocal is also negative.

$$
\begin{aligned}
\left(-\frac23\right)^3&=-\frac8{27},\\[6pt]
\left(-\frac23\right)^{-3}&=-\frac{27}{8}.
\end{aligned}
$$

Multiplying the two results gives $1$, as the zero sum of the exponents requires. The absolute value $\dfrac{27}{8}$ exceeds $1$ because it is the reciprocal of an absolute value smaller than $1$.
:::

:::attenzione
Zero to a positive exponent is zero. The definition of a negative exponent requires a nonzero denominator, so $0^{-2}$ is undefined. This course also leaves $0^0$ undefined, since the quotient motivating the zero exponent requires a nonzero base.
:::

## Powers of ten and scientific notation

:::definizione{#notazione titolo="Coefficient and exponent in scientific notation"}
In scientific notation a positive number is written $c\cdot10^n$, with $1\le c<10$ and $n$ an integer. For a negative number, a minus sign precedes the scientific notation of its absolute value. Zero is written $0$. The range imposed on $c$ makes the representation unique, because $10^n\le c\cdot10^n<10^{n+1}$. The exponent $n$ therefore identifies the interval between two consecutive powers of ten. For example, $0.0032$ lies between $10^{-3}$ and $10^{-2}$, so it is written $3.2\cdot10^{-3}$.
:::

:::esempio{titolo="Normalizing the coefficient after multiplication"}
The product $(3\cdot10^4)(4\cdot10^2)$ gives $12\cdot10^6$. The coefficient $12$ is above the upper limit of the required range. Since $12=1.2\cdot10$, the normalized form is $1.2\cdot10^7$. Dividing the coefficient by ten and multiplying the power by ten leaves the product unchanged.

::grafico{xmin=0 xmax=13.4 ymin=-1 ymax=3.1 assi=0 vettori="0,0,13,0" linee="1,-0.2 1,0.2;10,-0.2 10,0.2" punti="1.2,0,pieno;12,0,pieno" etichette="1,-0.55,1;10,-0.55,10;1.3,0.62,1.2;12,0.62,12;5.4,0.62,1 ≤ c < 10" titolo="$12\cdot10^6$ and $1.2\cdot10^7$ represent the same number. The second coefficient lies in the range for scientific notation"}

For addition, use the same power of ten in both terms. For example, $4.2\cdot10^5+8\cdot10^4=(4.2+0.8)\cdot10^5$. The common exponent remains $5$, because both coefficients count units of one hundred thousand. The sum is $5\cdot10^5$.
:::

## Ratios and proportions

::::teorema{#rapporti titolo="Equivalence of a proportion and equality of cross products"}
The **ratio** of $a$ to $b$, with $b\ne0$, is $\dfrac ab$. The proportion $a:b=c:d$ means $\dfrac ab=\dfrac cd$, with $b,d\ne0$. Under these conditions the proportion is equivalent to $ad=bc$.

:::dimostrazione
Multiplying both sides of the equality of fractions by $bd$ gives $ad=bc$. Conversely, dividing this equality by $bd$ gives the equality of fractions. The factor $bd$ is nonzero in both steps, so the transformations are reversible.
:::

In $2:3=8:x$, the unknown is a divisor, so $x\ne0$ is required. The equality of cross products gives $2x=24$, hence $x=12$. The fraction $\dfrac8{12}$ reduces to $\dfrac23$, so the solution belongs to the domain and satisfies the proportion.
::::

:::esempio{titolo="A division into five equal shares"}
To split $60$ euros in the ratio $2:3$, represent the first amount by two equal shares and the second by three. Since all five shares have the same value, one share is $\dfrac{60}{5}=12$ euros. The amounts are therefore $24$ and $36$ euros. The ratio of the two amounts is $2:3$, and the first amount represents $\dfrac25$ of the total.

::struttura{riferimento=0 poligoni="0,0 2,0 2,0.8 0,0.8;2,0 5,0 5,0.8 2,0.8" linee="1,0 1,0.8;2,0 2,0.8;3,0 3,0.8;4,0 4,0.8" etichette="1,1.15,24 €;3.5,1.15,36 €" titolo="The total of 60 euros is made up of five shares of 12 euros. The first two are worth 24 euros and the other three 36 euros"}
:::

:::osservazione
When comparing lengths, express both measures in the same unit. Since $1\,\mathrm m=100\,\mathrm{cm}$, the ratio of one meter to $25\,\mathrm{cm}$ is $4$. When comparing quantities of different kinds, the units remain in the ratio. A distance of $180\,\mathrm{km}$ traveled in $3\,\mathrm h$ gives an average speed of $60\,\mathrm{km/h}$, which gives the average number of kilometers covered in one hour.
:::

## Direct proportionality and fixed fees

:::definizione{#proporzionalita titolo="The constant ratio in direct proportionality"}
The quantities $x$ and $y$ are directly proportional if $y=kx$ for a constant $k$. For every $x\ne0$, the quotient $\dfrac yx$ equals $k$. If the model includes $x=0$, then $y=0$ there and the graph is a straight line through the origin. With $x$ notebooks and a cost $y$ in euros, the constant is measured in euros per notebook.
:::

:::esempio{titolo="Unit price and total cost"}
Under the rate $C=3x$, each item costs $3$ euros. Under the rate $C=3x+5$, the same unit price is added to a fixed fee of $5$ euros. For four items, the rates give $12$ and $17$ euros, respectively. For a single item, the second rate costs $8$ euros. Its average cost therefore changes from $8$ to $\dfrac{17}{4}$ euros per item.

::grafico{f="3*x;3*x+5" xmin=-0.55 xmax=5.5 ymin=-1 ymax=22 nomi="x,C" legenda="C=3x;C=3x+5" punti="0,0,pieno;0,5,pieno;4,12,pieno;4,17,pieno" segmenti="4,0,4,17" titolo="Both rates have the same increase per item. The second starts at 5 euros"}

A table distinguishes a constant ratio from a constant increment. When $x$ increases by three units, both costs increase by $9$ euros. Dividing the costs by the corresponding item counts shows which rate is proportional.

| Items $x$ | Cost $3x$ | Cost $3x+5$ | Average per item under the second rate |
| --- | --- | --- | --- |
| $1$ | $3$ | $8$ | $8$ |
| $4$ | $12$ | $17$ | $\dfrac{17}{4}$ |
:::

## Inverse proportionality and the quantity held constant

:::definizione{#proporzionalita-inversa titolo="The constant product in inverse proportionality"}
For $x>0$ and $y>0$, inverse proportionality is described by $xy=k$, with $k>0$ fixed. Since $y=\dfrac{k}{x}$, multiplying $x$ by $\lambda>0$ divides $y$ by the same factor. In the graph of the positive model, $y$ decreases as $x$ increases. To identify the model in a table, check the products of the pairs.
:::

:::esempio{titolo="Identical machines sharing the same job"}
A job takes $24$ hours for one machine. If $m$ identical machines work together at the same rate and can share the work, they supply $m\cdot t$ machine-hours in $t$ hours. Therefore $t=\dfrac{24}{m}$. With $3$ machines it takes $8$ hours, and with $6$ machines it takes $4$. The products $3\cdot8$ and $6\cdot4$ both equal $24$.

::grafico{f="24/x" xmin=0.9 xmax=8.4 ymin=-0.6 ymax=16.2 nomi="m,t" legenda="t=\dfrac{24}{m}" punti="2,12,pieno;3,8,pieno;6,4,pieno" segmenti="3,0,3,8;6,0,6,4" titolo="The marked points show the integers $m=2,3,6$ and their corresponding durations in hours"}

The constant product also describes the remaining work if the number of machines changes partway through the job. If three machines have worked for two hours, they have supplied $6$ machine-hours. There are $18$ machine-hours left, and six machines take another $3$ hours.
:::

:::osservazione
If the job also requires a fixed hour of preparation, the total duration is $t=1+\dfrac{24}{m}$. The total is $13$ hours with two machines and $7$ hours with four. The products $2\cdot13=26$ and $4\cdot7=28$ differ. The time spent on the job itself still follows inverse proportionality, while the extra preparation time applies for any number of machines.
:::

## Percentages, parts, and the base of comparison

:::definizione{#percentuali titolo="The total used to measure a percentage"}
The $p\%$ of a quantity $Q$ is $Q\cdot\dfrac p{100}$. If the part $P$ is known and the total $Q$ is positive, the percentage is given by $p=100\dfrac PQ$. In a group of $80$ students, the $16$ who are absent represent $20\%$, since $\dfrac{16}{80}=\dfrac15$. The $64$ students present therefore represent $80\%$. The choice of $Q$ as denominator determines both percentages.

::struttura{riferimento=0 poligoni="0,0 8,0 8,0.9 0,0.9;8,0 10,0 10,0.9 8,0.9" linee="8,0 8,0.9" etichette="4,1.25,64 present;9,1.25,16 absent;4,0.4,80%;9,0.4,20%" titolo="The total of 80 is split into two groups. The lengths of the two sections are proportional to their percentages"}

To combine two groups with no members in common, add the parts and add the totals. With $6$ participants out of $20$ and $18$ out of $30$, the overall percentage is $100\cdot\dfrac{6+18}{20+30}=48$. The arithmetic mean of $30\%$ and $60\%$ would be $45\%$ and would assign equal weight to groups of different sizes.

The individual group percentages provide a check. At least $30\%$ of the people in each group take part, so that lower bound also applies when the groups are put together. Likewise, at most $60\%$ in each group take part, so the overall rate lies between the two group rates. The result is closer to $60\%$ because that rate belongs to the larger group.
:::

:::esempio{titolo="Percentage points and relative change"}
A share rises from $40\%$ to $50\%$. The difference is $10$ **percentage points**. Relative change uses the starting figure as its base, so it is $100\cdot\dfrac{50-40}{40}=25$. In other words, the share increases by $25\%$. Multiplying $40\%$ by $1.25$ gives $50\%$, confirming the result.
:::

## Successive changes and recovering the original value

::::teorema{#variazioni-successive titolo="The product of the change factors"}
For a positive quantity $Q$, an increase of $p\%$ gives $Q(1+\dfrac p{100})$. A decrease of $p\%$, with $0\le p\le100$, gives $Q(1-\dfrac p{100})$. In two successive steps, each factor multiplies the updated value, so the overall factor is the product of the two factors.

:::dimostrazione
The increase adds $Q\dfrac p{100}$ to $Q$. Factoring out $Q$ gives $Q(1+\dfrac p{100})$. A decrease subtracts the same amount. Let $a$ and $b$ be the two factors. After the first step the value is $Qa$. The second step changes it to $(Qa)b=Q(ab)$.
:::
::::

:::esempio{titolo="An increase and a decrease of the same percentage"}
Starting from $100$, an increase of $10\%$ gives $110$. The subsequent decrease is based on $110$ and amounts to $11$, so the result is $99$. Reversing the order takes the value first to $90$ and then to $99$, because the product $1.1\cdot0.9$ is the same. The intermediate values distinguish the two paths.

::grafico{xmin=-0.45 xmax=2.65 ymin=85 ymax=115 nomi="step,value" linee="0,100 1,110 2,99;0,100 1,90 2,99" punti="0,100,pieno;1,110,pieno;1,90,pieno;2,99,pieno" etichette="1.02,112.5,110;1.02,87.6,90;2.28,97.6,99" titolo="Starting from 100, the 10% changes lead to 99 through two different intermediate values"}

To recover the original value, divide by the overall factor. If a discount of $20\%$ reduces a price to $64$ euros, the factor is $\dfrac45$ and the original price is $64\cdot\dfrac54=80$ euros. To undo that discount requires an increase of $25\%$ on the new price, since the base is $64$ euros and the increase must add $16$ euros.
:::

:::attenzione
A decrease of $100\%$ has factor zero. Every starting value becomes zero, so the final value alone is insufficient to reconstruct the original amount.
:::

## Scales, conversions, and area measurements

:::definizione{#scale titolo="The ratio of the drawing measurement to the actual measurement"}
A scale of $1:k$, with $k>0$, assigns $k$ units of the same kind in reality to one unit on the drawing. At scale $1:50000$, one centimeter on the map represents $50000\,\mathrm{cm}$ in reality, or $500\,\mathrm m$. Six centimeters therefore represent $3\,\mathrm{km}$. In the other direction, to represent $2\,\mathrm{km}$, convert the distance to $200000\,\mathrm{cm}$ and divide by $50000$ to get $4\,\mathrm{cm}$.

::grafico{f="0.5*x" xmin=-0.35 xmax=7.2 ymin=-0.35 ymax=4.1 nomi="c,d" legenda="d=0.5c" punti="4,2,pieno;6,3,pieno" segmenti="4,0,4,2;0,2,4,2;6,0,6,3;0,3,6,3" titolo="At scale $1:50000$, each centimeter $c$ on the map corresponds to half a kilometer of actual distance $d$"}
:::

:::esempio{titolo="From the length factor to the area factor"}
On a plan drawn at scale $1:200$, a rectangle measures $3\,\mathrm{cm}$ by $5\,\mathrm{cm}$. The actual sides are $600\,\mathrm{cm}$ and $1000\,\mathrm{cm}$, or $6\,\mathrm m$ and $10\,\mathrm m$. The actual area is $60\,\mathrm{m}^2$. In square centimeters, the area factor is $200^2$, because both sides are multiplied by $200$. Indeed, $15\,\mathrm{cm}^2\cdot 200^2=600000\,\mathrm{cm}^2$. Since each square meter contains $10000$ square centimeters, this again gives $60\,\mathrm{m}^2$.
:::
