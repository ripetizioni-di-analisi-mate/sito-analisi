---
titolo: Powers, roots, and scientific notation
sommario: Calculate with integer and fractional exponents, write measurements in scientific notation, and check the scale and precision of the results.
---

## Powers with integer exponents

:::definizione{#potenze titolo="Base, exponent, and sign"}
A **power** with a positive integer exponent is shorthand for a product of equal factors. In $a^n$, the real number $a$ is the base, and the positive integer $n$ tells us how many factors of $a$ appear. For example, $4^3=4\cdot4\cdot4=64$. This notation makes it possible to identify the factors before calculating. In a formula containing two factors equal to a velocity $v$, the product $v\cdot v$ becomes $v^2$.

When the base is negative, parentheses show that the sign applies to each factor. In $(-3)^2=(-3)(-3)=9$ both factors are negative. In $(-3)^3=(-3)(-3)(-3)=-27$ one negative factor remains after two have been paired. Thus a negative base gives a positive power when the exponent is even and a negative power when it is odd. The graphs of $y=x^2$ and $y=x^3$ illustrate these signs. At $x=-2$, the first graph has a vertical coordinate of $4$ and the second a vertical coordinate of $-8$.

::grafico{f="x^2;x^3" xmin=-2.5 xmax=2.5 ymin=-10 ymax=10 punti="-2,4;-2,-8;2,4;2,8" titolo="The square has the same value at $2$ and $-2$. The cube changes sign."}

:::

:::attenzione
In $-3^2$ the exponent applies to $3$. The result is therefore $-(3^2)=-9$. In $(-3)^2$ the base is $-3$ and the result is $9$. Parentheses preserve this distinction even when the base comes from a measurement or an intermediate calculation.
:::

:::definizione{#esponente-negativo titolo="Zero exponents and reciprocals"}
For a base $a\ne0$, define $a^0=1$. If $n$ is a positive integer, define $a^{-n}=\dfrac{1}{a^n}$. The reciprocal is the number that gives one when multiplied by $a^n$. Thus $5^{-2}=\dfrac{1}{25}$ and $(-5)^{-2}=\dfrac{1}{25}$. When the base is zero, every power with a positive integer exponent is zero. The definition using a reciprocal requires a nonzero base, since the denominator must be nonzero. The convention for a zero exponent also applies here to nonzero bases.

The powers of a fixed base form a sequence. Each step to the next exponent multiplies the value by the base. For base two, the values at exponents $-2$, $-1$, $0$, $1$, and $2$ are $\dfrac{1}{4}$, $\dfrac{1}{2}$, $1$, $2$, and $4$, respectively. Working backward from $2^0=1$, divide by two at each step. This explains why a power of ten with a negative exponent is a positive fraction between zero and one.

::grafico{f="2^x" xmin=-2.75 xmax=2.65 ymin=-0.5 ymax=6 punti="-2,0.25;-1,0.5;0,1;1,2;2,4" nomi="n,2ⁿ" legenda="y=2^n" titolo="The points on the curve with integer horizontal coordinates give the integer powers of two."}

:::

:::esempio{titolo="Interpreting a measurement with a negative sign"}
An object has a displacement $\Delta x=-2\,\mathrm{m}$ along an oriented axis, where $\Delta x$ means final position minus initial position. The negative sign gives the direction. If a formula calls for the square of the displacement, square both the numerical value and the unit.
$$
\begin{aligned}
(\Delta x)^2 &=(-2\,\mathrm{m})^2\\[6pt]
&=(-2)^2\cdot\mathrm{m^2}\\[6pt]
&=4\,\mathrm{m^2}.
\end{aligned}
$$
The squared unit tells us what kind of quantity the result represents. Displacement is a signed length. Its square is a nonnegative quantity expressed in square meters. In the reverse calculation, taking the square root gives the absolute value of the displacement, so the original sign is needed to recover its direction.
:::

## Products, quotients, and powers of powers

::::teorema{#proprieta titolo="Properties of powers with a common base"}
For any real base $a\ne0$ and integers $m$ and $n$,
$$
\begin{aligned}
a^m a^n &= a^{m+n},\\[6pt]
\frac{a^m}{a^n} &= a^{m-n},\\[6pt]
(a^m)^n &= a^{mn}.
\end{aligned}
$$
Multiplication combines factors, division cancels factors, and raising a power to a power repeats groups of factors. These three operations let us work separately with the exponents and the coefficients.

:::dimostrazione
For positive exponents, the product $a^m a^n$ contains $m$ copies of $a$ followed by another $n$ copies, giving $m+n$ copies of $a$. The same reasoning applies to $(a^m)^n$, which contains $n$ groups of $m$ factors, giving $mn$ factors. To divide $a^m$ by $a^n$, multiply by $a^{-n}$. The definition of a negative exponent lets us cancel one pair $a\cdot a^{-1}$ at a time, since each pair equals one. Thus $m-n$ factors remain if there are more factors of $a$. If there are more factors of $a^{-1}$, the result is the reciprocal of the corresponding power of the base. The same count using reciprocals extends the product rule to negative exponents. When raising a power to a power, a negative outer exponent takes the reciprocal of the product already calculated, reversing the sign of its exponent. When an exponent is zero, use $a^0=1$.
:::

::::

:::esempio{titolo="Quotient of powers with negative exponents"}
Consider the quotient with numerator $10^{-4}$ and denominator $10^{-7}$. Both exponents are negative, but the denominator is smaller than the numerator. The quotient must therefore be greater than one.
$$
\begin{aligned}
\frac{10^{-4}}{10^{-7}}
&=10^{-4-(-7)}\\[6pt]
&=10^3.
\end{aligned}
$$
The result agrees with the initial comparison. The parentheses in the exponent show which number is being subtracted.
:::

:::osservazione{#basi-diverse titolo="Powers of products and quotients"}
For $a,b\ne0$ and an integer $n$, we have $(ab)^n=a^nb^n$ and $\left(\dfrac{a}{b}\right)^n=\dfrac{a^n}{b^n}$. For a positive exponent, simply rearrange the factors. For a negative exponent, take the reciprocal of the corresponding positive power. For example,
$$
\begin{aligned}
(2\cdot5)^3 &= 2^3\cdot5^3\\[6pt]
&=8\cdot125\\[6pt]
&=1000.
\end{aligned}
$$
A common exponent allows powers with different bases to be combined. For example, $3^4\cdot2^4=(3\cdot2)^4=6^4$. If the exponents differ, factoring the bases may give a common base. In $4^3\cdot2^{-4}$, since $4=2^2$, the product equals $2^6\cdot2^{-4}=2^2$. The result can also be checked by dividing $64$ by $16$.
:::

:::esempio{titolo="Powers of a measured length"}
A cube with edge length $\ell=2\cdot10^{-3}\,\mathrm{m}$ has volume $V=\ell^3$. The numerical coefficient, the power of ten, and the unit all appear in each of the three equal factors. Therefore
$$
\begin{aligned}
V &=\bigl(2\cdot10^{-3}\,\mathrm{m}\bigr)^3\\[6pt]
&=2^3\cdot\bigl(10^{-3}\bigr)^3\,\mathrm{m^3}\\[6pt]
&=8\cdot10^{-9}\,\mathrm{m^3}.
\end{aligned}
$$
The exponent of ten is multiplied by three because the same power appears in all three factors. If the edge were ten times as long, the volume would be a thousand times as large, since the factor of ten would appear in each of the three edge lengths being multiplied. This check on the ratio of the volumes confirms the change of three in the exponent.
:::

:::attenzione
Adding powers with the same base requires a different step from multiplying them. For example, $10^2+10^3=100+1000=1100$, whereas $10^5=100000$. One can factor out a common power. In this case $10^2+10^3=10^2(1+10)$, so the calculation combines two coefficients on the same scale. With a different base, as in $2^3+2^4$, the sum is $2^3(1+2)=24$.
:::

## Scientific notation and normalization

:::definizione{#scientifica titolo="The coefficient and the exponent of ten"}
Every positive real number can be written in **scientific notation** in the form $a\cdot10^n$, where $n$ is an integer and $1\le a<10$. The number $a$ is the coefficient and $n$ is the exponent of ten. For a negative number, normalize the absolute value and place a minus sign before the product. Write zero as $0$.

Normalization amounts to choosing the unique pair of consecutive powers of ten for which
$$
10^n\le x<10^{n+1}.
$$
Indeed, dividing all three parts of the inequality by the positive number $10^n$ gives $1\le\dfrac{x}{10^n}<10$. The quotient is therefore the required coefficient. For example, $4600$ is at least $1000$ and less than $10000$. Thus $n=3$, and dividing $4600$ by $1000$ gives $a=4.6$. This same interval includes $1000$ and stops short of $10000$, which belongs to the next interval.

::grafico{xmin=-0.5 xmax=11.4 ymin=-1.7 ymax=3 punti="1,1.2,pieno;10,1.2,vuoto" linee="1,1.2 10,1.2" segmenti="1,0,1,1.2;10,0,10,1.2" etichette="1,2.05,10³;10,2.05,10⁴;5.5,1.9,n = 3" titolo="One unit on the horizontal axis represents $1000$. The interval for exponent $n=3$ includes $10^3$ and stops short of $10^4$."}

:::

:::esempio{titolo="Numbers less than one and the sign of a measurement"}
Consider $x=0.00038$. Since $10^{-4}=0.0001$ and $10^{-3}=0.001$, we have $10^{-4}\le x<10^{-3}$. The coefficient is therefore
$$
\begin{aligned}
a &= \frac{0.00038}{0.0001}\\[6pt]
&=3.8.
\end{aligned}
$$
Thus $0.00038=3.8\cdot10^{-4}$. To check the result, multiply the coefficient by the reciprocal of $10^4$, that is, divide it by $10000$.

A change in position of $-0.00038\,\mathrm{m}$ can be written as $-3.8\cdot10^{-4}\,\mathrm{m}$. The minus sign gives the direction of the change relative to the chosen axis. The exponent $-4$ indicates the power-of-ten scale of its absolute value. A single measurement can therefore contain both signs, each with a distinct role.
:::

:::osservazione{#confronto-scientifico titolo="Comparing values on the same scale"}
To compare two positive numbers in normalized form, first compare their exponents. If the exponents are equal, compare the coefficients. For example, $9.8\cdot10^{-6}$ is less than $1.2\cdot10^{-5}$ because the first value belongs to the interval ending at $10^{-5}$ and the second to the interval beginning at $10^{-5}$. Expressing both values in units of $10^{-6}$ gives $9.8$ and $12$, respectively, confirming the comparison.
:::

:::esempio{titolo="Identifying scales in a table"}
A table lists two amounts of a substance, $0.0000024\,\mathrm{mol}$ and $0.000017\,\mathrm{mol}$, respectively. For the first, multiplying by $10^6$ gives $2.4$, so the normalized form is $2.4\cdot10^{-6}\,\mathrm{mol}$. For the second, multiplying by $10^5$ gives $1.7\cdot10^{-5}\,\mathrm{mol}$. We can also find the factor by which the amounts differ. When expressed as multiples of $10^{-6}$, their coefficients are $2.4$ and $17$, so the ratio of the second amount to the first is between seven and eight. An exponent larger by one indicates a shift to the next power-of-ten interval. The coefficients are also needed to tell whether the second amount is ten times the first.
:::

## Operations with coefficients and exponents

:::osservazione{#operazioni titolo="Products and quotients in scientific notation"}
To multiply two numbers in scientific notation, multiply the coefficients and add the exponents. To divide, divide the coefficients and subtract the exponent of the denominator from that of the numerator. Check the resulting coefficient and normalize if needed. For a compound measurement, also combine the units.

For example, a homogeneous solution contains $4.0\cdot10^{-2}\,\mathrm{g/L}$ of solute. In $6.0\cdot10^{-3}\,\mathrm{L}$ of solution, the mass of solute is
$$
\begin{aligned}
m &= (4.0\cdot10^{-2}\,\mathrm{g/L})
      (6.0\cdot10^{-3}\,\mathrm{L})\\[6pt]
  &= 24\cdot10^{-5}\,\mathrm{g}\\[6pt]
  &= 2.4\cdot10^{-4}\,\mathrm{g}.
\end{aligned}
$$
The liters cancel, leaving a unit of mass. Since the intermediate coefficient $24$ equals $2.4\cdot10$, the exponent increases from $-5$ to $-4$.
:::

::::teorema{#esponente-del-prodotto titolo="The exponent of a normalized product or quotient"}
Let $x=a\cdot10^m$ and $y=b\cdot10^n$ be two positive numbers in scientific notation, with $1\le a<10$ and $1\le b<10$. The following expressions then hold, and in each the coefficient is at least $1$ and less than $10$.

- If $ab<10$, then $xy=ab\cdot10^{m+n}$.
- If $ab\ge10$, then $xy=\dfrac{ab}{10}\cdot10^{m+n+1}$.
- If $a\ge b$, then $\dfrac{x}{y}=\dfrac{a}{b}\cdot10^{m-n}$.
- If $a<b$, then $\dfrac{x}{y}=\dfrac{10a}{b}\cdot10^{m-n-1}$.

Thus, after multiplication or division, normalization changes the exponent by at most one. For example, in $(3\cdot10^4)(4\cdot10^{-2})$ we have $ab=12\ge10$, so the exponent of the result is $4-2+1=3$ and the product is $1.2\cdot10^3$.

:::dimostrazione
Use the inequalities that define the coefficients to bound their product and quotient. Since $1\le a<10$ and $1\le b<10$, multiplying the corresponding sides of the inequalities between positive numbers gives $1\le ab<100$. If $ab<10$, the coefficient $ab$ is already normalized. If $10\le ab<100$, dividing by $10$ gives $1\le\dfrac{ab}{10}<10$. The factor of $10$ taken out of the coefficient is absorbed into the power of ten, whose exponent becomes $m+n+1$.

For the quotient, $a\ge1$ and $b<10$ imply $\dfrac{a}{b}>\dfrac{1}{10}$, while $a<10$ and $b\ge1$ imply $\dfrac{a}{b}<10$. If $a\ge b$, then $\dfrac{a}{b}\ge1$ and the coefficient is normalized. If $a<b$, then $\dfrac{1}{10}<\dfrac{a}{b}<1$, so $1<\dfrac{10a}{b}<10$. The extra factor of $10$ in the coefficient is offset by using the exponent $m-n-1$.
:::

::::

:::esempio{titolo="Normalization when the coefficient is less than one"}
Consider the quotient of $2\cdot10^{-6}$ and $8\cdot10^{-4}$.
$$
\begin{aligned}
\frac{2\cdot10^{-6}}{8\cdot10^{-4}}
&=\frac{2}{8}\cdot10^{-6-(-4)}\\[6pt]
&=0.25\cdot10^{-2}\\[6pt]
&=2.5\cdot10^{-3}.
\end{aligned}
$$
Multiplying the coefficient $0.25$ by ten gives $2.5$. To preserve the value of the product, divide the power of ten by ten.
:::

:::osservazione{#somma-scala-comune titolo="Sums and differences with a common exponent"}
In a sum or difference, the power of ten serves as a counting unit. Express the terms using the same power, then add or subtract their coefficients. Choosing the smaller of the exponents often avoids introducing extra decimal places in calculations by hand.

For example, $2\cdot10^{-3}=20\cdot10^{-4}$. When this is added to $7\cdot10^{-4}$, the first term contributes $20$ units on the scale $10^{-4}$ and the second contributes $7$.
$$
\begin{aligned}
2\cdot10^{-3}+7\cdot10^{-4}
&=(20+7)\cdot10^{-4}\\[6pt]
&=27\cdot10^{-4}\\[6pt]
&=2.7\cdot10^{-3}.
\end{aligned}
$$

::grafico{xmin=-2 xmax=30 ymin=-1.2 ymax=5 punti="0,2;20,2;27,2" vettori="0,2,20,2;20,2,27,2" segmenti="20,0,20,2;27,0,27,2" etichette="10,3,20 units;23.5,3,7 units;20.15,0.55,20;27.15,0.55,27" titolo="The two terms are 20 and 7 units on the same scale, $10^{-4}$."}

In a difference, the leading digit may cancel, so recalculate the exponent after subtracting the coefficients. For example, $3.14\cdot10^5-3.11\cdot10^5=0.03\cdot10^5=3\cdot10^3$. The exponent of the result is two less than that of the original terms, which were written with exponent five. Using a common exponent shows which digits cancel.
:::

:::esempio{titolo="Difference between two mass readings"}
Two readings have exact values $m_1=7.10\cdot10^{-3}\,\mathrm{g}$ and $m_2=6.85\cdot10^{-3}\,\mathrm{g}$. Find how much smaller the second reading is than the first. The exponents are already equal, so subtract the coefficients directly.
$$
\begin{aligned}
m_1-m_2
&=(7.10-6.85)\cdot10^{-3}\,\mathrm{g}\\[6pt]
&=0.25\cdot10^{-3}\,\mathrm{g}\\[6pt]
&=2.5\cdot10^{-4}\,\mathrm{g}.
\end{aligned}
$$
The difference is positive because the first reading is larger. To check, add the difference to $m_2$. Expressed in units of $10^{-3}\,\mathrm{g}$, the sum is $6.85+0.25=7.10$, the coefficient of the first reading.
:::

## Roots and fractional exponents

:::definizione{#radici titolo="Square roots and absolute value"}
For $x\ge0$, the **square root** $\sqrt{x}$ is the nonnegative real number whose square equals $x$. For example, $\sqrt{49}=7$. The equation $y^2=49$ has two solutions, $7$ and $-7$. The notation $\sqrt{49}$ denotes the nonnegative solution.

For every real $a$, we have $\sqrt{a^2}=|a|$. Indeed, $|a|$ is nonnegative and its square is $a^2$. For example, $\sqrt{(-6)^2}=6$. On the graph of $y=x^2$, the points with vertical coordinate $9$ have horizontal coordinates $-3$ and $3$. The definition of the square root selects $3$. This choice applies when calculating a length from an area or a speed from an energy.

::grafico{f="x^2;9" xmin=-3.9 xmax=3.9 ymin=0 ymax=10 punti="-3,9,pieno,A;3,9,pieno,B" segmenti="-3,0,-3,9;3,0,3,9" titolo="Both points have vertical coordinate $9$. The square root $\sqrt{9}$ is the positive horizontal coordinate, $3$."}

:::

:::definizione{#radici-e-potenze-frazionarie titolo="Roots with even and odd indices"}
For an integer index $q\ge2$, the root $\sqrt[q]{x}$ is a number whose power with exponent $q$ equals $x$. For even $q$, we require $x\ge0$ and choose the nonnegative root. For odd $q$, every real number has a unique real root with the same sign as the radicand. For example, $\sqrt[3]{-27}=-3$, since $(-3)^3=-27$.

For $x>0$, an integer $p$, and $q\ge2$, we have $x^{\frac{p}{q}}=\left(\sqrt[q]{x}\right)^p$. We can therefore take the root first and then raise it to a power. For example, $16^{\frac{3}{4}}=\left(\sqrt[4]{16}\right)^3=2^3=8$. If the numerator is negative, take the reciprocal of the result for the positive power, so $16^{-\frac{3}{4}}=\dfrac{1}{8}$.

:::

::::teorema{#radice-prodotto titolo="Root of a product"}
Let $a\ge0$ and $b\ge0$, and let $q\ge2$ be an integer. Then
$$
\sqrt[q]{ab}=\sqrt[q]{a}\,\sqrt[q]{b}.
$$
If the index $q$ is odd, the equality holds for any two real numbers $a$ and $b$. This property allows the coefficient to be separated from the power of ten when taking a root of a number in scientific notation. For example, $\sqrt{4\cdot10^{-6}}=\sqrt{4}\,\sqrt{10^{-6}}=2\cdot10^{-3}$, because $\left(10^{-3}\right)^2=10^{-6}$.

:::dimostrazione
We check that the right-hand side has the two properties that define the $q$th root of $ab$. By the power rule for products,
$$
\left(\sqrt[q]{a}\,\sqrt[q]{b}\right)^q=\left(\sqrt[q]{a}\right)^q\left(\sqrt[q]{b}\right)^q=ab.
$$
If $a\ge0$ and $b\ge0$, both roots are nonnegative, so their product is also nonnegative. Thus $\sqrt[q]{a}\,\sqrt[q]{b}$ is the nonnegative number whose $q$th power equals $ab$, namely $\sqrt[q]{ab}$. If $q$ is odd, the real root of $ab$ is unique. It is the only number whose $q$th power equals $ab$, so the preceding calculation suffices without any sign restrictions.
:::

::::

:::attenzione
The root of a sum generally differs from the sum of the roots. For example, $\sqrt{9+16}=\sqrt{25}=5$, whereas $\sqrt{9}+\sqrt{16}=3+4=7$. Therefore, in $\sqrt{2.5\cdot10^{-7}+1.1\cdot10^{-7}}$, first add the two terms under the radical and then take the root.
:::

:::esempio{titolo="Square root with an odd power of ten"}
Consider $\sqrt{3.6\cdot10^{-5}}$. To take the square root of the power of ten, rewrite the radicand with an even exponent.
$$
\begin{aligned}
\sqrt{3.6\cdot10^{-5}}
&=\sqrt{36\cdot10^{-6}}\\[6pt]
&=\sqrt{36}\,\sqrt{10^{-6}}\\[6pt]
&=6\cdot10^{-3}.
\end{aligned}
$$
The change from $3.6$ to $36$ is offset by decreasing the exponent by one. The coefficient $36$ has an integer square root, and the exponent $-6$ is divisible by two. To check the result, calculate $\left(6\cdot10^{-3}\right)^2=36\cdot10^{-6}=3.6\cdot10^{-5}$.
:::

:::osservazione{#esponente-della-radice titolo="Factoring the radicand"}
If $x=a\cdot10^n$ with $a>0$ and $n$ is a multiple of the index $q$, then $\sqrt[q]{x}=\sqrt[q]{a}\cdot10^{\frac{n}{q}}$. Indeed, raising the product to the power $q$ gives $a\cdot10^n$. The same factorization holds for $a<0$ if the index $q$ is odd. For example, in $\sqrt[3]{-64\cdot10^{-9}}$ we get $\sqrt[3]{-64}=-4$, and dividing the exponent $-9$ by the index three gives $-3$. The root is therefore $-4\cdot10^{-3}$.

If $n$ is not a multiple of $q$, we can choose a different exponent and compensate by adjusting the coefficient. To take the cube root of $2.7\cdot10^{-5}$, rewrite the radicand as $27\cdot10^{-6}$. The exponent $-6$ is a multiple of three, and the cube root of $27$ is three. Thus the result is $3\cdot10^{-2}$.
:::

## Estimates and orders of magnitude

:::definizione{#stime titolo="Estimating a result"}
An **estimate** is an approximate value obtained from rounded data or simple bounds. It can be used to check the scale of a result before doing the exact calculation. For example, the ratio $\dfrac{5.8\cdot10^6}{2.1\cdot10^3}$ is close to $\dfrac{6}{2}\cdot10^3=3\cdot10^3$. Two inequalities can also be used to check the size of the quotient. The numerator lies between $5\cdot10^6$ and $6\cdot10^6$, and the denominator lies between $2\cdot10^3$ and $2.5\cdot10^3$. All the values are positive. Dividing the lower bound for the numerator by the upper bound for the denominator gives $2\cdot10^3$. Dividing the upper bound for the numerator by the lower bound for the denominator gives $3\cdot10^3$. The exact quotient therefore lies between these values.

Estimates are also useful when finding a root by hand. Since $4^2=16$ and $5^2=25$, $\sqrt{20}$ lies between $4$ and $5$. Also, $4.5^2=20.25$, so $\sqrt{20}<4.5$. Similarly, $\sqrt{20\cdot10^{-8}}$ lies between $4\cdot10^{-4}$ and $4.5\cdot10^{-4}$.
:::

:::definizione{#ordini-di-grandezza titolo="The nearest power of ten on a multiplicative scale"}
Here the **order of magnitude** of a positive number is the power of ten closest to it on a multiplicative scale. If $x=a\cdot10^n$ is normalized, the two powers to compare are $10^n$ and $10^{n+1}$. The factor between $10^n$ and $x$ is $a$. The factor between $x$ and $10^{n+1}$ is $\dfrac{10}{a}$. We therefore choose the power associated with the smaller factor.

The factors are equal when $a^2=10$, that is, when $a=\sqrt{10}\approx3.16$. For $a<\sqrt{10}$, the closer power is $10^n$. For $a>\sqrt{10}$, it is $10^{n+1}$. If the factors are equal, the two powers are equally far away on the multiplicative scale. For example, $2\cdot10^4$ is twice $10^4$ and one-fifth of $10^5$. Its order of magnitude is therefore $10^4$. For $8\cdot10^4$, the factors are $8$ and $1.25$, so $10^5$ is closer.

::grafico{f="x;10/x" xmin=0 xmax=8.4 ymin=0 ymax=9 punti="3.16227766,3.16227766,pieno" segmenti="3.16227766,0,3.16227766,3.16227766" nomi="a,fattore" legenda="a;\dfrac{10}{a}" titolo="The two factors $a$ and $\dfrac{10}{a}$ are equal when $a=\sqrt{10}$."}

:::

:::esempio{titolo="Estimating a product of measured quantities"}
A small object has mass $7.9\cdot10^{-4}\,\mathrm{kg}$ and an acceleration of magnitude $4.2\cdot10^2\,\mathrm{m/s^2}$. To estimate the magnitude of the net force, use the coefficients eight and four. The approximate product is
$$
(8\cdot10^{-4})(4\cdot10^2)\,\mathrm{N}
=32\cdot10^{-2}\,\mathrm{N}
=3.2\cdot10^{-1}\,\mathrm{N}.
$$
The result is on the order of a few tenths of a newton. A result of several newtons would be roughly ten times this estimate. Calculating the intermediate coefficient exactly gives $7.9\cdot4.2=33.18$. Thus the scale can be checked even before deciding how many digits to report.
:::

## Significant figures and rounding

:::definizione{#cifre-significative titolo="Significant figures in a measurement"}
In a measurement expressed in decimal form, the **significant figures** start at the first nonzero digit. The zeros before that digit locate the decimal point. Zeros between nonzero digits count. Trailing zeros after the decimal point also count when they indicate the stated precision of the measurement.

For example, $0.00450\,\mathrm{m}$ can be written as $4.50\cdot10^{-3}\,\mathrm{m}$ and has three significant figures. Writing $4.5\cdot10^{-3}\,\mathrm{m}$ gives the same numerical value with two significant figures. When a whole number such as $4500$ represents a measurement, scientific notation distinguishes $4.5\cdot10^3$ from $4.500\cdot10^3$. An exact count of $4500$ objects has a different meaning from a rounded measurement.
:::

:::osservazione{#arrotondamenti titolo="Precision of sums, products, and quotients"}
A common rounding convention applies to calculations with measured data. For sums and differences, round to the coarsest place value of the last significant digits of the measurements being combined. For example, adding $2.46\,\mathrm{m}$ and $1.3\,\mathrm{m}$ gives $3.76\,\mathrm{m}$ before rounding. The second measurement is given to the nearest tenth, so write $3.8\,\mathrm{m}$.

For products and quotients, the result usually has as many significant figures as the measurement with the fewest. For example, dividing $12.0\,\mathrm{m}$ by $3.5\,\mathrm{s}$ gives approximately $3.42857\,\mathrm{m/s}$. The time has two significant figures, so the conventional result is $3.4\,\mathrm{m/s}$. An exact factor, such as $100$ in the relationship between meters and centimeters, leaves the precision unchanged. Keep intermediate digits until the final result, since rounding too early can change the last reported digit.

To round a positive number, look at the first digit to be dropped. If it is less than five, leave the last retained digit unchanged. If it is greater than five, or if it is five followed by at least one nonzero digit, increase the last retained digit by one. An exact halfway case requires a convention. In the following exercises, when a positive number is halfway between two values, choose the larger one.
:::

:::esempio{titolo="Rounding that changes the power of ten"}
Report $9.96\cdot10^{-3}\,\mathrm{m}$ to two significant figures. Initially retain the nine in the ones place and the nine in the tenths place of the coefficient. Since the first discarded digit is six, add one tenth to $9.9$. This gives $10$ on the original scale, so normalize the coefficient again. The result is therefore $1.0\cdot10^{-2}\,\mathrm{m}$. The zero in the coefficient is the second significant figure. Writing $1\cdot10^{-2}\,\mathrm{m}$ would lose the indication of the required precision.
:::

:::osservazione
When two closely spaced measurements are subtracted, leading digits may cancel. For example, two masses given to the nearest hundredth of a gram, $7.86\,\mathrm{g}$ and $7.61\,\mathrm{g}$, differ by $0.25\,\mathrm{g}$. Both measurements have three significant figures. Their difference is still given to the nearest hundredth but has two significant figures because it is less than one gram. In this case, the decimal place retained indicates the precision of the subtraction.
:::

## Applications to measurements and formulas

:::esempio{titolo="Mass from concentration and volume"}
In a homogeneous solution, the mass concentration is $c_m=\dfrac{m}{V}$, where $m$ is the mass of solute and $V$ is the volume of the solution. If $c_m=3.20\cdot10^{-2}\,\mathrm{g/L}$ and $V=2.5\cdot10^{-3}\,\mathrm{L}$, find the mass by multiplying the concentration by the volume.
$$
\begin{aligned}
m &= c_m V\\[6pt]
  &= (3.20\cdot2.5)\cdot10^{-2+(-3)}\,\mathrm{g}\\[6pt]
  &= 8.0\cdot10^{-5}\,\mathrm{g}.
\end{aligned}
$$
The concentration has three significant figures and the volume has two. The result is therefore given to two significant figures. Estimating with the coefficients $3$ and $3$ gives $9\cdot10^{-5}\,\mathrm{g}$, consistent with the scale of the result. The two checks answer different questions. Canceling liters checks the unit, and the approximate product checks the size of the numerical result.
:::

:::esempio{titolo="Speed from kinetic energy and mass"}
For an object of mass $m>0$, the kinetic energy is $E_c=\dfrac{1}{2}mv^2$, where $v$ is the speed. Consider the data $E_c=9.0\cdot10^{-4}\,\mathrm{J}$ and $m=2.0\cdot10^{-1}\,\mathrm{kg}$. Isolate the square of the speed before taking the square root.
$$
\begin{aligned}
v^2 &= \frac{2E_c}{m}\\[6pt]
&= \frac{2\cdot9.0}{2.0}\cdot10^{-4-(-1)}\,\mathrm{J/kg}\\[6pt]
&=9.0\cdot10^{-3}\,\mathrm{m^2/s^2},\\[6pt]
v &=\sqrt{9.0\cdot10^{-3}}\,\mathrm{m/s}\\[6pt]
&\approx9.5\cdot10^{-2}\,\mathrm{m/s}.
\end{aligned}
$$
One joule is one kilogram times a square meter divided by a second squared, so the ratio $\mathrm{J/kg}$ has units of $\mathrm{m^2/s^2}$. Taking the square root gives $\mathrm{m/s}$. The value of $v^2$ is slightly less than $10^{-2}\,\mathrm{m^2/s^2}$, so $v$ must be slightly less than $10^{-1}\,\mathrm{m/s}$. This estimate confirms the scale before rounding to two significant figures.
:::
