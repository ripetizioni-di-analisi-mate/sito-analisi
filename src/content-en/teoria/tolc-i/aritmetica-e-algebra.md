---
titolo: "Arithmetic and algebra for the TOLC-I"
sommario: "Numbers, ratios, powers, equations and inequalities with examples, domain restrictions and interpretation of results."
---

## Rational numbers and exact calculation

:::definizione{#numeri-razionali titolo="Fractions and representations"}
The **integers** are $0,1,2,3,\dots$ and their opposites $-1,-2,-3,\dots$ A **fraction** $\dfrac ab$ denotes the division of one integer by another: $a$ is the **numerator** and $b$ is the **denominator**, which is nonzero (in symbols, $b\ne0$). The denominator states how many equal parts the unit is divided into; the numerator states how many of those parts are taken. An hour divided into $4$ equal parts gives parts of $15$ minutes, so $\dfrac34$ of an hour is $3\cdot15=45$ minutes. A **rational number** is a number that can be written as a fraction.

Multiplying or dividing the numerator and the denominator by the same nonzero number gives an **equivalent** fraction, which represents the same number:
$$
\frac34=\frac{3\cdot5}{4\cdot5}=\frac{15}{20},\qquad
\frac{18}{24}=\frac{18\div6}{24\div6}=\frac34.
$$
A fraction is **in lowest terms** when its numerator and denominator have no common divisor greater than one, as for $\dfrac34$. Carrying out the division gives the decimal form: $3\div4=0.75$.

Two fractions are compared after writing them with the same positive denominator, because then the one with the larger numerator is larger. For $\dfrac58$ and $\dfrac7{12}$ a common denominator is $24$:
$$
\frac58=\frac{5\cdot3}{8\cdot3}=\frac{15}{24},\qquad
\frac7{12}=\frac{7\cdot2}{12\cdot2}=\frac{14}{24}.
$$
Since $15>14$, it follows that $\dfrac58>\dfrac7{12}$. If the denominators are positive, the same comparison is read from the **cross products** $5\cdot12=60$ and $7\cdot8=56$, which are the numerators of the two fractions written with denominator $8\cdot12=96$.
:::

:::teorema{#operazioni-frazioni titolo="Operations with fractions"}
- **Sum and difference.** With the same denominator, the numerators are added: $\dfrac27+\dfrac37=\dfrac57$. With different denominators, the fractions are first rewritten with the same denominator.
- **Product.** Numerators are multiplied together, and so are denominators.
- **Quotient**, that is, the result of a division. The **reciprocal** of a nonzero fraction is obtained by swapping its numerator and denominator: the reciprocal of $\dfrac45$ is $\dfrac54$. Dividing by a fraction is equivalent to multiplying by its reciprocal.

For example,
$$
\begin{aligned}
\frac12+\frac13&=\frac{1\cdot3}{2\cdot3}+\frac{1\cdot2}{3\cdot2}=\frac36+\frac26=\frac56,\\[6pt]
\frac23\cdot\frac45&=\frac{2\cdot4}{3\cdot5}=\frac8{15},\\[6pt]
\frac23\div\frac45&=\frac23\cdot\frac54=\frac{10}{12}=\frac56.
\end{aligned}
$$
With letters, for $b\ne0$ and $d\ne0$, the same rules read
$$
\frac ab+\frac cd=\frac{ad+bc}{bd},\qquad
\frac ab\cdot\frac cd=\frac{ac}{bd},\qquad
\frac ab\div\frac cd=\frac{ad}{bc}\quad(c\ne0).
$$
The last formula also requires $c\ne0$, because the fraction $\dfrac cd$ by which one divides is nonzero only if its numerator is. In a product, a numerator and a denominator with a common divisor are simplified before multiplying: in $\dfrac49\cdot\dfrac38$ one divides $4$ and $8$ by $4$, then $3$ and $9$ by $3$, leaving $\dfrac13\cdot\dfrac12=\dfrac16$.
:::

:::esempio{titolo="Order of operations and estimation"}
Operations in brackets are performed first, then multiplications and divisions, finally additions and subtractions. In $\left(2-\dfrac34\right)\div\dfrac56$ the difference is therefore calculated first, writing $2$ as $\dfrac84$:
$$
\begin{aligned}
\left(2-\frac34\right)\div\frac56
&=\left(\frac84-\frac34\right)\div\frac56\\[6pt]
&=\frac54\div\frac56\\[6pt]
&=\frac54\cdot\frac65\\[6pt]
&=\frac{30}{20}=\frac32.
\end{aligned}
$$
The number $\dfrac56$ by which one divides is positive and less than one, so the quotient exceeds $\dfrac54=1.25$, as $\dfrac32=1.5$ does. This estimate checks that the result is plausible; the exact value remains the one calculated with fractions.
:::

:::osservazione{#decimali titolo="Terminating and repeating decimals"}
A **prime number** is an integer greater than one that is divisible only by one and by itself: $2,3,5,7,11,\dots$ Every integer greater than one is a product of prime numbers, its **prime factors**: $40=2\cdot2\cdot2\cdot5$.

The decimal form of a fraction in lowest terms is **terminating**, that is, with finitely many digits after the decimal point, when the denominator has only the prime factors $2$ and $5$. In this case an equivalent fraction has denominator $10$, $100$, $1000$ or another power of ten. Multiplying the denominator $40$ by $25=5\cdot5$ gives $1000$:
$$
\frac7{40}=\frac{7\cdot25}{40\cdot25}=\frac{175}{1000}=0.175.
$$
If the denominator has a prime factor other than $2$ and $5$, the division never ends and a group of digits, the **repeating block**, repeats forever. The block is marked with a bar: $\dfrac13=0.333\dots=0.\overline3$.

To convert a repeating decimal to a fraction, one multiplies by the power of ten that shifts the decimal point by one block. In $z=0.\overline{27}=0.272727\dots$ the block has two digits, so one multiplies by $100$:
$$
\begin{aligned}
100z&=27.272727\dots=27+z\\
100z-z&=27\\
99z&=27\\
z&=\frac{27}{99}=\frac3{11}.
\end{aligned}
$$
The terminating decimal $0.27=\dfrac{27}{100}$ is a different number from $0.\overline{27}$.
:::

## Divisibility, remainders and approximations

:::definizione{#divisibilita titolo="Common divisors and common multiples"}
Since $12=3\cdot4$, the number $3$ is a **divisor** of $12$ and $12$ is a **multiple** of $3$. A positive integer $d$ divides an integer $n$ when $n=d\cdot q$ for some integer $q$, that is, when dividing $n$ by $d$ leaves no remainder.

- The **greatest common divisor** of two positive integers, denoted here by $\operatorname{MCD}$, is the largest integer that divides both. The common divisors of $12$ and $18$ are $1,2,3,6$, so their greatest common divisor is $6$.
- The **least common multiple**, denoted here by $\operatorname{mcm}$, is the smallest positive multiple of both. The multiples of $18$ are $18,36,54,\dots$ and the first that is also a multiple of $12$ is $36$.

For large numbers one uses the prime factorization, writing repeated factors as powers whose exponent counts the repetitions: $12=2\cdot2\cdot3=2^2\cdot3$ and $18=2\cdot3\cdot3=2\cdot3^2$. The greatest common divisor is the product of the common prime factors, each with the smaller exponent. The least common multiple is the product of all prime factors present, each with the larger exponent:
$$
\operatorname{MCD}(12,18)=2\cdot3=6,\qquad
\operatorname{mcm}(12,18)=2^2\cdot3^2=36.
$$
The greatest common divisor is used for equal groups with nothing left over: $12$ red pens and $18$ blue pens fill at most $6$ identical packs. The least common multiple is used for coincidences: two buses running every $12$ and every $18$ minutes that leave together do so again after $36$ minutes.
:::

:::definizione{#divisione-resto titolo="Euclidean division"}
The number $7$ goes into $26$ three times with $5$ units left over, so $26=7\cdot3+5$. The number $3$ is the **quotient** and $5$ is the **remainder**. Division with remainder of an integer $a$ by a positive integer $b$ is the expression
$$
a=bq+r,\qquad 0\le r<b,
$$
where $q$ and $r$ are integers and the symbol $\le$ is read "less than or equal to". The remainder is therefore positive or zero and is less than the divisor; with this condition the quotient and the remainder are uniquely determined.

To divide $-26$ by $7$, one takes the largest multiple of $7$ not exceeding $-26$, namely $-28=7\cdot(-4)$. Since $-26=-28+2$, the quotient is $-4$ and the remainder is $2$.

The remainder of a product equals the remainder of the product of the remainders of the factors. On division by $7$ the numbers $9$ and $10$ have remainders $2$ and $3$, and their product $90=7\cdot12+6$ has remainder $6=2\cdot3$. This property gives the **remainder of a power** without computing the power. For the remainder of $3^6$ on division by $7$, one starts from $3^2=9$, which has remainder $2$. Since $3^6=(3^2)^3$, the remainder of $3^6$ is that of $2^3=8$, namely $1$. The direct computation confirms it, because $3^6=729=7\cdot104+1$.
:::

:::attenzione
The equality $-26=7\cdot(-3)-5$ is also true, but $-5$ is negative and does not satisfy $0\le r<7$, so it is not the remainder.
:::

:::osservazione{#stime titolo="Estimates and precision"}
**Rounding to the nearest tenth** means replacing a number with the nearest multiple of $0.1$, that is, the nearest number with one decimal digit. **Truncating to tenths** towards zero means deleting the digits after the first decimal digit. The number $-2.76$ lies between $-2.8$ and $-2.7$; it is $0.04$ from the first and $0.06$ from the second, so rounding to the nearest tenth gives $-2.8$. Truncation deletes the digit $6$ and gives $-2.7$.

Suppose that the side of a square measures between $4.9$ and $5.1$ centimeters. Of two positive numbers, the larger one has the larger square, so the area lies between
$$
4.9^2=24.01\qquad\text{and}\qquad5.1^2=26.01
$$
square centimeters. In this way a result is bounded without knowing every digit of the data.
:::

## Ratios, proportions and percentages

:::definizione{#rapporti titolo="Ratio and total quantity"}
The **ratio** of two quantities of the same kind is the quotient of the first by the second. If two shares are in the ratio $5$ to $3$, the first contains $5$ equal parts and the second $3$. Writing $k>0$ for the value of one part, the shares are $5k$ and $3k$ and the total is $8k$. To divide $96$ euros in this ratio, $k$ is found first:
$$
8k=96,\qquad k=\frac{96}8=12,\qquad 5k=60,\qquad 3k=36.
$$

A **proportion** is the equality of two ratios. It is written $a:b=c:d$ and means $\dfrac ab=\dfrac cd$, with $b$ and $d$ nonzero. For example $6:4=9:6$, because both ratios equal $1.5$. The expressions on either side of the sign $=$ are the **sides** of the equality. Multiplying both sides by $bd$ gives $ad=bc$, that is, the product of the extremes $a$ and $d$ equals the product of the means $b$ and $c$ (in the example, $6\cdot6=4\cdot9=36$).

On a map at a scale of $1$ to $250$, $1\,\mathrm{cm}$ on the drawing corresponds to $250\,\mathrm{cm}$ in reality. For a segment of $7.2\,\mathrm{cm}$ on the drawing, the real length $x$ satisfies $1:250=7.2:x$, that is, $1\cdot x=250\cdot7.2$, so
$$
x=250\cdot7.2\,\mathrm{cm}=1800\,\mathrm{cm}=18\,\mathrm{m}.
$$
In a scale problem the two lengths are expressed in the same unit.

Two quantities are **directly proportional** when their ratio stays constant, like the length on the drawing and the real length in a scale. They are **inversely proportional** when their product stays constant: if one doubles, the other is halved. Three identical taps fill a tank in $8$ hours, so the total work is $3\cdot8=24$ tap-hours. With four taps the time $t$ satisfies $4\cdot t=24$, so
$$
t=\frac{24}{4}=6\ \text{hours}.
$$
The number of taps has increased and the time has decreased.
:::

:::teorema{#percentuali titolo="Percentage changes"}
The symbol $\%$ is read "per cent" and means "divided by one hundred": $12\%=\dfrac{12}{100}=0.12$. Thus $12\%$ of $50$ is $50\cdot\dfrac{12}{100}=6$, and $r\%$ of a quantity $P$ is $P\cdot\dfrac r{100}$.

If $50$ euros increase by $12\%$, the new value is
$$
50+50\cdot0.12=50\cdot(1+0.12)=50\cdot1.12=56 .
$$
An increase of $r\%$ therefore multiplies the quantity $P$ by $1+\dfrac r{100}$, and a decrease of $r\%$ multiplies it by $1-\dfrac r{100}$. This multiplier is the **change factor**. The initial value is recovered by dividing the final value by the factor: $56$ euros after an increase of $12\%$ correspond to $56\div1.12=50$ euros initially.

The **percentage change** from a positive initial value $P$ to a final value $Q$ is
$$
\frac{Q-P}{P}\cdot100\%.
$$
The denominator is the initial value, against which the change is measured. From $50$ to $56$ euros the change is $\dfrac{56-50}{50}\cdot100\%=12\%$.
:::

:::esempio{titolo="Two successive changes"}
A price of $80$ euros increases by $20\%$ and then decreases by $20\%$. The second change applies to the value already increased:
$$
\begin{aligned}
80\cdot1.20&=96,\\
96\cdot0.80&=76.80.
\end{aligned}
$$
The final price is less than $80$ euros, because the increase is $20\%$ of $80$ euros, namely $16$ euros, and the discount is $20\%$ of $96$ euros, namely $19.20$ euros. The overall factor is $1.20\cdot0.80=0.96=1-\dfrac4{100}$, so the two changes together are equivalent to a decrease of $4\%$.
:::

## Powers and scientific notation

:::teorema{#potenze titolo="Properties of powers"}
The **power** $a^n$, with $n$ a positive integer, is the product of $n$ factors equal to $a$. The number $a$ is the **base** and $n$ is the **exponent**. For example $2^3=2\cdot2\cdot2=8$. Counting the factors gives three rules:
$$
\begin{aligned}
2^3\cdot2^2&=(2\cdot2\cdot2)\cdot(2\cdot2)=2^5,\\[4pt]
\frac{2^5}{2^2}&=\frac{2\cdot2\cdot2\cdot2\cdot2}{2\cdot2}=2^3,\\[4pt]
(2^3)^2&=2^3\cdot2^3=2^6.
\end{aligned}
$$
Exponents are added in a product of powers with the same base, subtracted in a quotient and multiplied in a power of a power.

For a base $a\ne0$ one sets $a^0=1$ and $a^{-n}=\dfrac1{a^n}$, so that the quotient rule holds for every pair of exponents: $\dfrac{2^3}{2^3}=1=2^{3-3}$ and $\dfrac{2^2}{2^5}=\dfrac1{2^3}=2^{2-5}$. The condition $a\ne0$ is necessary in quotients and with zero or negative exponents, because those cases involve division by $a$. For integer exponents $m$, $n$ and a base $a\ne0$, therefore,
$$
a^ma^n=a^{m+n},\qquad
\frac{a^m}{a^n}=a^{m-n},\qquad
(a^m)^n=a^{mn},\qquad
a^{-n}=\frac1{a^n}.
$$
A negative base raised to an even exponent gives a positive result, because the minus signs cancel in pairs. With an odd exponent the result is negative:
$$
(-2)^4=(-2)(-2)(-2)(-2)=16,\qquad(-2)^3=(-2)(-2)(-2)=-8.
$$
:::

:::attenzione
In the expression $-2^4$ the exponent applies only to $2$, so $-2^4=-(2\cdot2\cdot2\cdot2)=-16$. The result $16$ is obtained from $(-2)^4$, where the base is $-2$.
:::

:::definizione{#notazione-scientifica titolo="Magnitude and powers of ten"}
The **scientific notation** of a positive number is the expression $c\cdot10^n$, with $1\le c<10$ and $n$ an integer. The factor $c$ contains the digits of the number; the power $10^n$ indicates its **order of magnitude**:
$$
5300=5.3\cdot10^3,\qquad 0.00012=1.2\cdot10^{-4}.
$$
Multiplying $5.3$ by $10^3=1000$ moves the decimal point three places to the right; multiplying $1.2$ by $10^{-4}=\dfrac1{10000}$ moves it four places to the left.

In a product, the numerical factors are multiplied and the exponents are added; if the factor obtained does not lie between $1$ and $10$, it is rewritten:
$$
\begin{aligned}
(4\cdot10^{-2})(3\cdot10^{-3})
&=(4\cdot3)\cdot10^{-2+(-3)}\\
&=12\cdot10^{-5}\\
&=1.2\cdot10\cdot10^{-5}\\
&=1.2\cdot10^{-4}.
\end{aligned}
$$
Two numbers with the same power of ten are compared through their numerical factors: $3\cdot10^5<7\cdot10^5$. If the powers are different, one number is rewritten with the exponent of the other: $2\cdot10^6=20\cdot10^5$, so $2\cdot10^6>9\cdot10^5$, even though $2<9$.
:::

:::osservazione
The $n$-th **root** of a positive number $a$, denoted by $\sqrt[n]{a}$, is the positive number whose $n$-th power is $a$; the number $n$ is the **index** of the root. For example $\sqrt[4]{16}=2$, because $2^4=16$. For $n=2$ one writes $\sqrt a$.

A fractional exponent denotes a root. For $a>0$ one sets $a^{\frac1n}=\sqrt[n]{a}$, so that the rule for a power of a power still holds: $\left(9^{\frac12}\right)^2=9^{\frac12\cdot2}=9$, and indeed $9^{\frac12}=\sqrt9=3$. For $m$ an integer and $n$ a positive integer,
$$
a^{\frac mn}=\left(\sqrt[n]{a}\right)^m=\sqrt[n]{a^m}\qquad(a>0).
$$
For example, calculating the root first,
$$
16^{\frac34}=\left(\sqrt[4]{16}\right)^3=2^3=8.
$$
With a positive base all the roots exist and the rules of powers hold. With a negative base the existence of the root depends on the parity of the index, so each case is checked separately.
:::

## Roots and absolute value

:::definizione{#radici titolo="Principal root"}
The **square root** of a number $a\ge0$, denoted by $\sqrt a$, is the positive or zero number whose square is $a$. The symbol $\ge$ is read "greater than or equal to" and the number $a$ under the root sign is the **radicand**. Two numbers have square $9$, namely $3$ and $-3$, because $3^2=9$ and $(-3)^2=9$. The symbol $\sqrt9$ denotes only $3$.

For this reason $\sqrt{(-3)^2}=\sqrt9=3$. For every $x$ one has $\sqrt{x^2}=|x|$, where the absolute value $|x|$ is $x$ itself if $x\ge0$ and is $-x$ if $x<0$.

With an odd index the root also exists for a negative radicand: $\sqrt[3]{-8}=-2$, because $(-2)^3=-8$. With an even index the radicand is positive or zero, because a power with an even exponent is never negative.

For $a,b\ge0$ the root of a product is the product of the roots, $\sqrt{ab}=\sqrt a\,\sqrt b$. With this rule a root is simplified when the radicand contains a factor that is a square:
$$
\sqrt{72}=\sqrt{36\cdot2}=\sqrt{36}\cdot\sqrt2=6\sqrt2.
$$
Two terms with the same root are added as multiples of the same quantity: $6\sqrt2-3\sqrt2=(6-3)\sqrt2=3\sqrt2$.
:::

:::attenzione
The product rule has no counterpart for sums. Indeed $\sqrt{9+16}=\sqrt{25}=5$, whereas $\sqrt9+\sqrt{16}=3+4=7$.
:::

:::esempio{#razionalizzazione titolo="Rationalizing a denominator"}
**Rationalizing** a fraction means writing an equivalent one with no roots in the denominator. Numerator and denominator are multiplied by the same nonzero number, so the form of the fraction changes and its value does not. If the denominator is $\sqrt3$, one multiplies by $\sqrt3$, because $\sqrt3\cdot\sqrt3=3$:
$$
\frac6{\sqrt3}=\frac{6\cdot\sqrt3}{\sqrt3\cdot\sqrt3}=\frac{6\sqrt3}3=2\sqrt3.
$$
If the denominator is the difference $\sqrt5-2$, one multiplies by the sum $\sqrt5+2$, called the **conjugate**, because in the product of a difference and the sum of the same terms only the squares remain:
$$
\begin{aligned}
\frac1{\sqrt5-2}
&=\frac{1\cdot(\sqrt5+2)}{(\sqrt5-2)(\sqrt5+2)}\\[6pt]
&=\frac{\sqrt5+2}{\sqrt5\cdot\sqrt5+2\sqrt5-2\sqrt5-2\cdot2}\\[6pt]
&=\frac{\sqrt5+2}{5-4}\\[6pt]
&=\sqrt5+2.
\end{aligned}
$$
:::

:::definizione{#valore-assoluto titolo="Distance on the number line"}
The **real numbers**, whose set is denoted by $\mathbb R$, are the rational numbers together with the numbers having infinitely many decimal digits and no repeating block, such as $\sqrt2=1.41421\dots$; they are represented as points of a line. The **absolute value** of a real number $x$, denoted by $|x|$, is the distance from zero of the point representing $x$. The points $5$ and $-5$ are both at distance $5$ from zero, so $|5|=5$ and $|-5|=5$. As a formula, $|x|=x$ if $x\ge0$ and $|x|=-x$ if $x<0$; for example $|-5|=-(-5)=5$.

Likewise, $|x-a|$ is the distance between the points $x$ and $a$: between $1$ and $3$ the distance is $|1-3|=|-2|=2$. For $r>0$ the points at distance less than $r$ from $a$ are those between $a-r$ and $a+r$:
$$
|x-a|<r\quad\Longleftrightarrow\quad a-r<x<a+r.
$$
The symbol $\Longleftrightarrow$ is read "if and only if" and means that the two statements are true for the same values of $x$. The other two cases are the following.

- The equality $|x-a|=r$ holds for the two points at distance $r$ from $a$, namely $x=a-r$ and $x=a+r$.
- The inequality $|x-a|>r$ holds for the points at distance greater than $r$, that is, for $x<a-r$ or $x>a+r$.

With $\le$ and $\ge$ in place of $<$ and $>$ the endpoints $a-r$ and $a+r$ are also included. For $r=0$ the equality $|x-a|=0$ is true only for $x=a$.

The **midpoint** between two points $a$ and $b$ of the line is the point at the same distance from both, and it is computed as the average $\dfrac{a+b}{2}$. Between $1$ and $5$ the midpoint is $\dfrac{1+5}{2}=3$, which is at distance $2$ from both, because $|3-1|=2$ and $|5-3|=2$.

A **double inequality** such as $1\le|x-3|<2$ contains two conditions to be satisfied together: the distance of $x$ from $3$ is at least $1$ and is less than $2$. The condition $|x-3|<2$ gives $1<x<5$. The condition $|x-3|\ge1$ gives $x\le2$ or $x\ge4$. The numbers that satisfy both are those with $1<x\le2$ or $4\le x<5$.
:::

:::esempio{titolo="Distance from three"}
The statement $|x-3|<2$ asks for the numbers at distance less than $2$ from $3$. With $a=3$ and $r=2$ they satisfy
$$
3-2<x<3+2,\qquad\text{that is}\qquad 1<x<5.
$$

In the figure the graph of $y=|x-3|$, a broken line, lies below the horizontal line $y=2$ for horizontal coordinates between $1$ and $5$; the **horizontal coordinate** of a point is its value of $x$. The hollow circles mark the two endpoints, which are excluded.

::grafico{f="abs(x-3);2" xmin=-1 xmax=7 ymin=-0.5 ymax=5 punti="1,2,vuoto;5,2,vuoto" titolo="The intersection points bound the coordinates whose distance from three is less than two"}
:::

## Polynomials and factorizations

:::definizione{#polinomi titolo="Like terms and degree"}
A **monomial** in $x$ is the product of a number and a power of $x$ with a positive or zero integer exponent, such as $5x^2$, $-3x$ and $7=7x^0$. The number is the **coefficient** of the monomial and the exponent of $x$ is its degree. A **polynomial** is a sum of monomials, such as $2x^3-5x+1$. A polynomial with two monomials is a binomial, one with three a trinomial.

Two monomials with the same exponent are **like terms** and are added by adding their coefficients: $3x^2+5x^2=8x^2$. The **degree** of a polynomial is the highest exponent among its monomials with nonzero coefficient, after like terms have been added. The **constant term** is the monomial of degree zero, that is, the value of the polynomial for $x=0$.

In the product of two polynomials every term of the first is multiplied by every term of the second (distributive property), then like terms are added.
$$
\begin{aligned}
(2x-3)(x+4)&=2x\cdot x+2x\cdot4-3\cdot x-3\cdot4\\
&=2x^2+8x-3x-12\\
&=2x^2+5x-12.
\end{aligned}
$$
The result has degree $2$ and constant term $-12$. The coefficient of $x$ collects the products containing $x$, namely $8x$ and $-3x$, and equals $8-3=5$.

In the following example the fourth-degree terms cancel, so the polynomial has degree $1$:
$$
\begin{aligned}
(x^2+1)(x^2-1)-x^4+5x&=x^4-x^2+x^2-1-x^4+5x\\
&=5x-1.
\end{aligned}
$$
:::

:::teorema{#scomposizioni titolo="Special products and common factors"}
**Factoring** a polynomial means writing it as a product of polynomials of lower degree. It serves to find the values of $x$ at which the polynomial is zero, to study its sign and to simplify fractions. There are three tools.

The first is **taking out** a factor common to all the terms. In $6x^2-15x$ both terms contain $3x$, because $6x^2=3x\cdot2x$ and $15x=3x\cdot5$. Hence $6x^2-15x=3x(2x-5)$.

The second consists of the **special products**, two identities, that is, equalities true for every pair of real numbers $a$, $b$, which are derived with the distributive property:
$$
\begin{aligned}
(a+b)^2&=(a+b)(a+b)=a^2+ab+ba+b^2=a^2+2ab+b^2,\\
(a-b)(a+b)&=a^2+ab-ba-b^2=a^2-b^2.
\end{aligned}
$$
The term $2ab$ of the square comes from the two equal products $ab$ and $ba$. With numbers, $13^2=(10+3)^2=100+2\cdot30+9=169$ and $13\cdot7=(10+3)(10-3)=100-9=91$. Read from right to left, the two identities give the factorization of a polynomial: $x^2+6x+9=(x+3)^2$ and $x^2-9=(x-3)(x+3)$.

The third concerns the trinomial $x^2+sx+p$, called **monic** because the coefficient of $x^2$ is $1$. Since
$$
(x+u)(x+v)=x^2+(u+v)x+uv,
$$
the trinomial factors as $(x+u)(x+v)$ when $u$ and $v$ are two numbers with sum $s$ and product $p$. For $x^2+x-20$ the numbers are $5$ and $-4$, because $5+(-4)=1$ and $5\cdot(-4)=-20$. Therefore $x^2+x-20=(x+5)(x-4)$.
:::

:::teorema{#cubi-resto titolo="Cubes and polynomial remainders"}
The cube of a binomial is obtained by multiplying the square by another factor $a+b$:
$$
\begin{aligned}
(a+b)^3&=(a+b)(a^2+2ab+b^2)\\
&=a^3+2a^2b+ab^2+a^2b+2ab^2+b^3\\
&=a^3+3a^2b+3ab^2+b^3.
\end{aligned}
$$
The coefficient $3$ of $a^2b$ counts the three ways of choosing $b$ from just one of the three factors $a+b$. For example $11^3=(10+1)^3=1000+300+30+1=1331$. The difference of two cubes is factored with
$$
a^3-b^3=(a-b)(a^2+ab+b^2),
$$
which is verified by expanding the right-hand side: $a^3+a^2b+ab^2-a^2b-ab^2-b^3=a^3-b^3$. With $a=x$ and $b=3$ one obtains $x^3-27=(x-3)(x^2+3x+9)$.

As with integers, the division of a polynomial $P(x)$ by the binomial $x-c$, where $c$ is a number, has a quotient $Q(x)$ and a remainder $r$, which is a number:
$$
P(x)=(x-c)\,Q(x)+r.
$$
For $x=c$ the factor $x-c$ equals zero, so $P(c)=0\cdot Q(c)+r=r$. The remainder is therefore $P(c)$, that is, the value of the polynomial for $x=c$, and it is found without carrying out the division. For $P(x)=x^3-x+2$ and $c=2$ the remainder is $P(2)=2^3-2+2=8$.

It follows that $x-c$ is a factor of $P(x)$ exactly when $P(c)=0$. For $P(x)=x^3-27$ one has $P(3)=27-27=0$, and indeed dividing $x^3-27$ by $x-3$ gives quotient $x^2+3x+9$ and remainder zero.
:::

:::attenzione{#frazioni-algebriche titolo="Simplification and domain"}
A fraction is simplified by dividing the numerator and the denominator by a common **factor**, that is, an expression multiplying the whole numerator and the whole denominator. Summands, that is, the terms of a sum, are not canceled. With numbers, $\dfrac{6\cdot5}{6\cdot7}=\dfrac57$, whereas $\dfrac{6+5}{6+7}=\dfrac{11}{13}$.

In the fraction
$$
\frac{x^2-9}{x-3}=\frac{(x-3)(x+3)}{x-3}=x+3
$$
the common factor is $x-3$. For $x=3$ the original denominator is zero and the fraction is undefined, so the equality holds for $x\ne3$ and this condition is written next to the result. The expression $x+3$ can be calculated for $x=3$ too, giving $6$, whereas the original fraction is undefined there.

In the fraction $\dfrac{x+3}x$ the letter $x$ in the numerator is a summand, so it is not canceled. For $x=3$ the fraction equals $\dfrac{3+3}3=2$; canceling the two letters $x$ would instead give $3$.
:::

## Linear equations and systems

:::teorema{#equazioni-lineari titolo="Equivalent transformations"}
An **equation** is an equality that contains a letter of unknown value, the **unknown**, usually denoted by $x$. A **solution** is a value of the unknown that makes the two sides equal; solving the equation means finding all of them. In $2x+3=11$ the value $x=4$ is a solution, because $2\cdot4+3=11$.

Two operations turn an equation into another with the same solutions, and serve to isolate the unknown:

- adding to or subtracting from both sides the same number, or the same expression defined for all admissible values of the unknown;
- multiplying or dividing both sides by the same nonzero number.

$$
\begin{aligned}
2x+3&=11\\
2x+3-3&=11-3\\
2x&=8\\
x&=\frac82=4.
\end{aligned}
$$
A **linear** equation, or equation of the first degree, has the form $ax+b=0$, where $a$ and $b$ are given numbers. If $a\ne0$, subtracting $b$ and dividing by $a$ gives the unique solution $x=-\dfrac ba$. If $a=0$ the equation reduces to $b=0$, which does not contain the unknown. When $b=0$ every real number is a solution; when $b\ne0$ the equation has no solutions.

If the unknown appears in a denominator, the **existence condition**, which excludes the values making the denominator zero, is written first. In the equation $\dfrac{x+2}{x-1}=3$ the condition is $x\ne1$. Multiplying both sides by $x-1$ gives
$$
\begin{aligned}
x+2&=3(x-1)\\
x+2&=3x-3\\
2+3&=3x-x\\
5&=2x\\
x&=\frac52.
\end{aligned}
$$
The product is expanded, $x$ is subtracted from both sides, $3$ is added to both sides, and finally they are divided by $2$. The value $\dfrac52$ is different from $1$, so it is acceptable, and it satisfies the original equation: the numerator equals $\dfrac92$, the denominator $\dfrac32$ and $\dfrac92\cdot\dfrac23=3$.
:::

:::definizione{#sistemi titolo="Simultaneous conditions"}
A **system** is a set of equations that must hold together; it is written with a brace. A solution of a system in the unknowns $x$ and $y$ is a pair of numbers $(x,y)$ that satisfies all the equations. In the system
$$
\begin{cases}
x+y=7,\\
2x-y=5,
\end{cases}
$$
the unknown $y$ has opposite coefficients, $1$ and $-1$. Adding left-hand sides and right-hand sides separately eliminates $y$:
$$
\begin{aligned}
(x+y)+(2x-y)&=7+5\\
3x&=12\\
x&=4.
\end{aligned}
$$
Substituting $x=4$ into the first equation gives $4+y=7$, so $y=3$. The solution is the pair $(4,3)$, which also satisfies the second equation, because $2\cdot4-3=5$.

A linear equation in $x$ and $y$ represents a line in the plane, and the solutions of the system are the points common to the two lines. There are three cases.

- The lines meet at one point and there is one solution, as in the example.
- The lines are parallel and distinct and the system has no solutions, as for $x+y=7$ and $2x+2y=10$, where the coefficients of the unknowns are doubled and the constant term is not, so the second equation is equivalent to $x+y=5$.
- The lines coincide and there are infinitely many solutions, as for $x+y=7$ and $2x+2y=14$, where the constant term is doubled as well.
:::

:::esempio{titolo="Modeling a purchase"}
Eighteen items of two types are bought, some costing $2$ euros and the others $4$ euros, for $54$ euros in all. Let $x$ be the number of items costing $4$ euros. The items costing $2$ euros are then $18-x$. The cost is $4x$ euros for the former and $2(18-x)$ euros for the latter, so
$$
\begin{aligned}
4x+2(18-x)&=54\\
4x+36-2x&=54\\
2x+36&=54\\
2x&=18\\
x&=9.
\end{aligned}
$$
There are $9$ items of each type and the cost is $9\cdot4+9\cdot2=54$ euros. The unknown is a number of items, so only an integer between $0$ and $18$ is accepted, such as $9$.
:::

## Quadratic equations and parameters

:::teorema{#equazioni-quadratiche titolo="Discriminant and roots"}
A **quadratic** equation, or equation of the second degree, has the form $ax^2+bx+c=0$, where the coefficients $a$, $b$, $c$ are given numbers and $a\ne0$. Its solutions are also called **roots**.

If the left-hand side is factored, the **zero-product property** is used: a product is zero exactly when at least one factor is zero. From $(x-2)(x-3)=0$ it follows that $x-2=0$ or $x-3=0$, that is, $x=2$ or $x=3$.

In the other cases one calculates the **discriminant**, denoted by the Greek letter $\Delta$ (delta):
$$
\Delta=b^2-4ac,\qquad x=\frac{-b\pm\sqrt\Delta}{2a}.
$$
The formula is derived by completing the square. The symbol $\pm$ is read "plus or minus" and denotes two values, one for each sign. The number of solutions depends on the sign of $\Delta$.

- If $\Delta>0$ the equation has two distinct real solutions.
- If $\Delta=0$ the two values coincide and there is only one solution, called a double root.
- If $\Delta<0$ the equation has no real solutions, because the square root of a negative number does not exist.

For $x^2-5x+6=0$ the coefficients are $a=1$, $b=-5$, $c=6$:
$$
\begin{aligned}
\Delta&=(-5)^2-4\cdot1\cdot6=25-24=1,\\[4pt]
x&=\frac{-(-5)\pm\sqrt1}{2\cdot1}=\frac{5\pm1}2,\\[4pt]
x_1&=\frac{5-1}2=2,\qquad x_2=\frac{5+1}2=3.
\end{aligned}
$$
If the roots are $x_1$ and $x_2$, the polynomial factors as $a(x-x_1)(x-x_2)=ax^2-a(x_1+x_2)x+ax_1x_2$. Comparing with $ax^2+bx+c$ gives the sum and the product of the roots, without calculating them:
$$
x_1+x_2=-\frac ba,\qquad x_1x_2=\frac ca.
$$
In the example, $2+3=5$ and $2\cdot3=6$.
:::

:::esempio{titolo="A parameter and a double root"}
A **parameter** is a letter, different from the unknown, standing for a fixed but unspecified number. In $x^2-8x+k=0$ the parameter is $k$ and the coefficients are $a=1$, $b=-8$, $c=k$. The discriminant is
$$
\Delta=(-8)^2-4\cdot1\cdot k=64-4k.
$$
The equation has a double root when $\Delta=0$, that is, when $64-4k=0$, which gives $4k=64$ and $k=16$. For $k=16$ the equation is $x^2-8x+16=0$, namely $(x-4)^2=0$, and the only solution is $x=4$.

When the parameter appears in the coefficient of $x^2$, for the parameter values that make that coefficient zero the equation has degree at most one. For $k=0$ the equation $kx^2-8x+16=0$ becomes $-8x+16=0$, with solution $x=2$. The formula with the discriminant requires $a\ne0$, so these values are examined separately, together with any parameter values that also make the coefficient of $x$ zero.
:::

:::osservazione{#quadrato-completo titolo="Minimum values and substitutions"}
**Completing the square** means rewriting a trinomial as the square of a binomial plus a number. In $x^2-8x+21$ the terms $x^2-8x$ are the first two of the expansion $(x-4)^2=x^2-8x+16$, where $4$ is half of $8$. Hence
$$
\begin{aligned}
x^2-8x+21&=(x^2-8x+16)+5\\
&=(x-4)^2+5.
\end{aligned}
$$
The square $(x-4)^2$ is positive or zero and equals zero only for $x=4$. The **minimum** value of the trinomial is therefore $5$, attained for $x=4$.

A **biquadratic** equation contains only $x^4$, $x^2$ and the constant term, such as $x^4-5x^2+4=0$. Setting $u=x^2$ gives $x^4=u^2$, and the equation becomes one of the second degree in the unknown $u$:
$$
\begin{aligned}
u^2-5u+4&=0\\
\Delta&=25-16=9\\
u&=\frac{5\pm3}2,\quad\text{that is}\quad u=1\ \text{or}\ u=4.
\end{aligned}
$$
From $x^2=1$ one obtains $x=\pm1$ and from $x^2=4$ one obtains $x=\pm2$, so there are four solutions. A negative value of $u$ gives no real solutions, because $x^2$ is never negative.
:::

## Inequalities and signs

:::teorema{#disequazioni titolo="Operations and order"}
An **inequality** in an unknown is a comparison between two sides separated by one of the symbols $<$, $>$, $\le$, $\ge$. Its solutions are the values of the unknown that make the comparison true. The **direction** is the way the symbol points.

From the true inequality $2<5$, adding $3$ to both sides gives $5<8$ and multiplying by $3$ gives $6<15$, both true. Multiplying by $-1$ gives $-2$ and $-5$, for which $-2>-5$ holds, with the opposite direction. Therefore:

- adding or subtracting the same number on both sides preserves the direction;
- multiplying or dividing by a positive number preserves the direction;
- multiplying or dividing by a negative number reverses the direction.

In $-3x+6\le0$ one subtracts $6$ and then divides by $-3$, reversing the direction:
$$
\begin{aligned}
-3x+6&\le0\\
-3x&\le-6\\
x&\ge2.
\end{aligned}
$$
The value $x=2$ is included, because the symbol $\le$ allows equality.

An expression containing the unknown, such as $x-4$, is positive for some values of $x$ and negative for others, so multiplying by it leaves the direction undetermined. Inequalities with products and quotients are therefore solved by studying the sign of each factor. The values at which the factors are zero divide the line into stretches, and on each one every factor keeps its sign.
:::

:::esempio{#segni-prodotti titolo="Sign of a product"}
The inequality to be solved is $(x+3)(x-1)>0$. A product of two numbers is positive if they have the same sign and negative otherwise. The factor $x+3$ equals zero for $x=-3$, which is its **zero**, and is positive for $x>-3$. The factor $x-1$ has the zero $x=1$ and is positive for $x>1$. The two zeros divide the line into three stretches, called **intervals**. The table has one column for each interval and one row for each factor; the last row gives the sign of the product, obtained from the two rows above.

| |$x<-3$|$-3<x<1$|$x>1$|
|---|:---:|:---:|:---:|
|$x+3$|$-$|$+$|$+$|
|$x-1$|$-$|$-$|$+$|
|$(x+3)(x-1)$|$+$|$-$|$+$|

The product is positive for $x<-3$ or $x>1$. The values $-3$ and $1$ are excluded, because there the product is zero and the symbol $>$ excludes equality.

In the figure the solutions are the horizontal coordinates of the points at which the graph of $y=(x+3)(x-1)$ lies above the horizontal axis.

::grafico{f="(x+3)*(x-1)" xmin=-5 xmax=3 ymin=-5 ymax=10 punti="-3,0;1,0" titolo="The product is positive where the graph lies above the horizontal axis"}
:::

:::osservazione{#segni-frazioni titolo="Zeros, denominators and intersections"}
A quotient is positive when its numerator and denominator have the same sign, like a product. The values at which the denominator is zero are always excluded, because the quotient is undefined there. For $\dfrac{x+1}{x-4}\le0$ the numerator equals zero at $-1$ and the denominator at $4$.

| |$x<-1$|$-1<x<4$|$x>4$|
|---|:---:|:---:|:---:|
|$x+1$|$-$|$+$|$+$|
|$x-4$|$-$|$-$|$+$|
|quotient|$+$|$-$|$+$|

The quotient is negative between $-1$ and $4$. At $x=-1$ it equals zero, and the symbol $\le$ allows this value. At $x=4$ it is undefined. The solutions are therefore the numbers with $-1\le x<4$. This set is written $[-1,4)$, where a square bracket indicates that the endpoint is included and a round one that it is excluded.

A set with no endpoint on one side is written with the symbol $\infty$ (infinity) and a round bracket: $x\ge2$ corresponds to $[2,+\infty)$ and $x<-3$ to $(-\infty,-3)$. The symbol $\in$ is read "belongs to" and $\cup$ denotes the **union** of two sets. The solutions $x<-3$ or $x>1$ of the previous example are written $x\in(-\infty,-3)\cup(1,+\infty)$. The **empty set**, with no elements, is denoted by $\varnothing$.

When the right-hand side is not zero, as in $\dfrac{x+1}{x-4}\le2$, it is moved to the left-hand side and a single fraction is written, because the sign table compares a quotient with zero:
$$
\frac{x+1}{x-4}-2\le0,\qquad \frac{x+1-2(x-4)}{x-4}\le0,\qquad \frac{9-x}{x-4}\le0.
$$
The numerator $9-x$ is positive for $x<9$ and the denominator $x-4$ is positive for $x>4$. The quotient is therefore negative for $x<4$ or $x>9$, equals zero at $x=9$ and is undefined at $x=4$. The solutions are $x<4$ or $x\ge9$, that is, $x\in(-\infty,4)\cup[9,+\infty)$. Multiplying both sides by $x-4$ would give a different set, because $x-4$ is negative for $x<4$ and multiplication by a negative number reverses the direction of the inequality.

When several conditions must hold together, the solutions are the numbers that satisfy all of them, that is, the **intersection** of the solution sets, denoted by $\cap$. The product $(x-1)(x+3)$ is negative between $-3$ and $1$ and equals zero at the endpoints, so the solutions of $(x-1)(x+3)\le0$ form the interval $[-3,1]$. With the condition $x>0$ the numbers with $0<x\le1$ remain, that is, $[-3,1]\cap(0,+\infty)=(0,1]$. Zero does not satisfy $x>0$, whereas $1$ satisfies both conditions.
:::

## Domain restrictions and radical equations

:::definizione{#dominio titolo="Admissible values"}
The **domain** of an expression containing $x$ is the set of real numbers $x$ for which every indicated operation can be carried out. It is determined by the **existence conditions**, the two most frequent being the following.

- A denominator is nonzero. For $\dfrac1{x-2}$ the condition is $x\ne2$ and the domain is written $\mathbb R\setminus\{2\}$, that is, all real numbers except $2$.
- The radicand of a root of even index is positive or zero. For $\sqrt{x-2}$ the condition is $x\ge2$.

For a square root in a denominator both hold, so the radicand is greater than zero. For $\dfrac1{\sqrt{(x-1)(x+2)}}$ one requires $(x-1)(x+2)>0$. The product is positive when the two factors have the same sign, that is, for $x<-2$ or $x>1$.

A simplification keeps the existence conditions of the original expression, as happens for $\dfrac{x^2-9}{x-3}=x+3$ with $x\ne3$. The numbers $3$ and $-3$ are different and have the same square, so the equality of the squares $A^2=B^2$ does not imply $A=B$. After squaring both sides of an equation one therefore checks, for each value found, that the two original sides have the same sign.
:::

:::esempio{#equazioni-irrazionali titolo="Eliminating a radical"}
A **radical** equation has the unknown under a root sign, such as $\sqrt{x+1}=x-1$. There are two conditions. The radicand is positive or zero. The right-hand side is also positive or zero, because it is equal to the left-hand side, which is a square root:
$$
\begin{cases}
x+1\ge0,\\
x-1\ge0.
\end{cases}
$$
The two conditions, $x\ge-1$ and $x\ge1$, hold together for $x\ge1$. Squaring both sides eliminates the root:
$$
\begin{aligned}
x+1&=(x-1)^2\\
x+1&=x^2-2x+1\\
0&=x^2-3x\\
0&=x(x-3).
\end{aligned}
$$
The square is expanded, $x+1$ is subtracted from both sides and $x$ is taken out. By the zero-product property the values found are $x=0$ and $x=3$. The value $0$ does not satisfy $x\ge1$, and indeed it gives $\sqrt1=1$ on the left-hand side and $-1$ on the right-hand side. The value $3$ satisfies the condition and gives $\sqrt{3+1}=2$ and $3-1=2$. The only solution is $x=3$, and the solution set is written $\{3\}$.

In the figure the curve is the graph of $y=\sqrt{x+1}$ and the line is $y=x-1$. They meet only at the point with horizontal coordinate $3$.

::grafico{f="sqrt(x+1);x-1" xmin=-1 xmax=5 ymin=-1 ymax=4 punti="3,2,pieno" titolo="The square root and the line meet only at the point with horizontal coordinate three"}

An **irrational inequality** has the unknown under a root sign and an inequality sign, as in $\sqrt{x-1}<2$. The radicand is positive or zero, so $x\ge1$. Both sides are positive or zero and between numbers of this kind squaring preserves the order, so squaring gives $x-1<4$, that is, $x<5$. The solutions are the numbers with $1\le x<5$, that is, the interval $[1,5)$. For $\sqrt{x-1}>2$ the same step gives $x-1>4$, that is, $x>5$, and the condition $x\ge1$ is already satisfied. With a negative right-hand side the comparison is decided without calculations, because a square root is positive or zero. The inequality $\sqrt{x-1}>-2$ is true on the whole domain $x\ge1$, whereas $\sqrt{x-1}<-2$ has no solutions.
:::

:::attenzione{titolo="Division by the unknown"}
Dividing both sides of the equation $x(x-2)=0$ by $x$ gives $x-2=0$, whose only solution is $x=2$. Yet $x=0$ is also a solution of the original equation, because $0\cdot(0-2)=0$. Division by $x$ requires $x\ne0$, so that value was left out. The zero-product property gives both solutions, $x=0$ and $x=2$. When a division is necessary, the case of a zero divisor is studied separately.

The same happens in equations with a parameter, where a coefficient is zero for some parameter values. In $kx=3$, division by $k$ requires $k\ne0$ and gives $x=\dfrac3k$; for $k=0$ the equation becomes $0=3$ and has no solutions.
:::
