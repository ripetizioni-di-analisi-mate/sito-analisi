---
titolo: "Arithmetic and algebra for the TOLC-I"
sommario: "Numbers, ratios, powers, equations and inequalities with examples, domain restrictions and interpretation of results."
---

## Rational numbers and exact calculation

:::definizione{#numeri-razionali titolo="Fractions and representations"}
A **rational number** is a number that can be written as $\dfrac{a}{b}$, where $a$ and $b$ are integers and $b\ne0$. The denominator states how many equal parts the unit is divided into; the numerator states how many of those parts are taken. Multiplying the numerator and denominator by the same nonzero number gives an equivalent fraction. For example, $\dfrac34=\dfrac{15}{20}=0.75$.

A fraction is in lowest terms when its numerator and denominator have no common divisor greater than one. Reducing a fraction preserves its value and makes comparisons clearer. To compare $\dfrac58$ and $\dfrac7{12}$, one can use the common denominator $24$; since $15>14$, it follows that $\dfrac58>\dfrac7{12}$. With positive denominators, the same comparison follows by comparing the cross products $5\cdot12$ and $7\cdot8$.
:::

:::teorema{#operazioni-frazioni titolo="Operations with fractions"}
To add or subtract fractions, the parts are expressed using the same fractional unit. To multiply them, their numerators and denominators are multiplied. Dividing by a nonzero number is equivalent to multiplying by its reciprocal. With the indicated denominators nonzero,
$$
\frac ab+\frac cd=\frac{ad+bc}{bd},\qquad
\frac ab\cdot\frac cd=\frac{ac}{bd},\qquad
\frac ab\div\frac cd=\frac{ad}{bc}\quad(c\ne0).
$$
The last formula also requires $c\ne0$, because the divisor must be nonzero. Common factors in a product can be canceled before the multiplications are carried out.
:::

:::esempio{titolo="Order of operations and estimation"}
In the expression $\left(2-\dfrac34\right)\div\dfrac56$, the subtraction is performed first and the division second:
$$
\left(2-\frac34\right)\div\frac56
=\frac54\cdot\frac65=\frac32.
$$
The dividend is $1.25$ and the divisor is positive and less than one, so the quotient must exceed $1.25$. The result $1.5$ satisfies this property. An estimate checks whether the calculation is plausible; the exact value is still the one obtained using fractions.
:::

:::osservazione{#decimali titolo="Terminating and repeating decimals"}
A reduced fraction has a terminating decimal representation when its denominator contains only the prime factors $2$ and $5$. The denominator can then be completed to a power of ten: $\dfrac7{40}=\dfrac{175}{1000}=0.175$. If other prime factors remain, the division continues with a repeating block. To convert $z=0.\overline{27}$ to a fraction, shift one repeating block by multiplying by $100$: $100z=27+z$, giving $99z=27$ and $z=\dfrac3{11}$. The terminating decimal $0.27=\dfrac{27}{100}$ represents a different number.
:::

## Divisibility, remainders and approximations

:::definizione{#divisibilita titolo="Common divisors and common multiples"}
A positive integer $d$ divides an integer $n$ when $n=dq$ for some integer $q$. The **greatest common divisor**, denoted here by $\operatorname{MCD}$, is the largest positive common divisor. The **least common multiple**, denoted here by $\operatorname{mcm}$, is the smallest positive common multiple of two positive integers.

In prime factorization, the greatest common divisor contains the common factors with the smaller exponent; the least common multiple contains every factor present with the larger exponent. For $12=2^2\cdot3$ and $18=2\cdot3^2$, one obtains $\operatorname{MCD}(12,18)=6$ and $\operatorname{mcm}(12,18)=36$. The greatest common divisor describes identical subdivisions with nothing left over; the least common multiple describes the first coincidence of repetitions that start together.
:::

:::definizione{#divisione-resto titolo="Euclidean division"}
For an integer $a$ and a positive integer $b$, division with remainder is the expression
$$
a=bq+r,\qquad 0\le r<b.
$$
The integer $q$ is the quotient and $r$ is the remainder. The condition on the remainder determines a unique pair. For example, $-26=7(-4)+2$, so the remainder when $-26$ is divided by $7$ is $2$. The expression $-26=7(-3)-5$ is a true equality, but the term $-5$ is not a Euclidean remainder because it is negative.
:::

:::osservazione{#stime titolo="Estimates and precision"}
Rounding to the nearest tenth means choosing the nearest multiple of $0.1$. Truncating toward zero means removing the subsequent digits while retaining the remaining part. For $-2.76$, rounding and truncating to tenths give $-2.8$ and $-2.7$, respectively. If a positive length lies between $4.9$ and $5.1$, its square lies between $24.01$ and $26.01$, because squaring preserves order between nonnegative numbers. This property provides bounds on a result without knowing every digit of the input.
:::

## Ratios, proportions and percentages

:::definizione{#rapporti titolo="Ratio and total quantity"}
The **ratio** of two quantities of the same kind compares the first with the second. If two shares are in the ratio $5$ to $3$, they can be written as $5k$ and $3k$, where $k>0$ is the value of one part. The total is $8k$. A sum of $96$ euros divided in that ratio therefore assigns $60$ euros to the larger share and $36$ euros to the smaller one.

A proportion $a:b=c:d$, with $b,d\ne0$, is the equality $\dfrac ab=\dfrac cd$. Multiplying by $bd$ gives $ad=bc$. In scale problems, units must be made consistent before comparison: at a scale of $1$ to $250$, $7.2\,\mathrm{cm}$ represents $1800\,\mathrm{cm}$, or $18\,\mathrm{m}$.
:::

:::teorema{#percentuali titolo="Percentage changes"}
The quantity $r\%$ of $P$ is $P\dfrac r{100}$. An increase of $r\%$ multiplies $P$ by $1+\dfrac r{100}$; a decrease of $r\%$ multiplies it by $1-\dfrac r{100}$. The percentage change from a positive initial value $P$ to a final value $Q$ is
$$
\frac{Q-P}{P}\cdot100\%.
$$
The denominator is the reference value against which the change is measured. To recover the initial value, the final value is divided by the change factor. A final price of $56$ euros after a $12\%$ increase corresponds to an initial price of $56\div1.12=50$ euros.
:::

:::esempio{titolo="Two successive changes"}
A price of $80$ euros increases by $20\%$ and then decreases by $20\%$. The first change gives $80\cdot1.20=96$ euros; the second gives $96\cdot0.80=76.80$ euros. The overall factor is $0.96$, so the final change is a decrease of $4\%$. The discount applies to $96$ euros and therefore amounts to $19.20$ euros, whereas the initial increase was $16$ euros.
:::

## Powers and scientific notation

:::teorema{#potenze titolo="Properties of powers"}
A power with a positive integer exponent represents a product of equal factors. For a nonzero base, exponent zero gives $1$ and a negative exponent indicates the reciprocal. For integer exponents and admissible bases,
$$
a^ma^n=a^{m+n},\qquad
\frac{a^m}{a^n}=a^{m-n},\qquad
(a^m)^n=a^{mn},\qquad
a^{-n}=\frac1{a^n}.
$$
The condition $a\ne0$ is necessary for divisions and for nonpositive exponents. The sign of a negative base raised to a power depends on whether the exponent is even or odd: $(-2)^4=16$, whereas $(-2)^3=-8$. In the expression $-2^4$, the power applies only to $2$, so the result is $-16$.
:::

:::definizione{#notazione-scientifica titolo="Magnitude and powers of ten"}
The **scientific notation** of a positive number is $c\cdot10^n$, with $1\le c<10$ and integer $n$. The number $0.00012$ is written as $1.2\cdot10^{-4}$. In a product, the coefficients are multiplied and the exponents are added, after which the coefficient is brought into the required interval. For example,
$$
(4\cdot10^{-2})(3\cdot10^{-3})
=12\cdot10^{-5}=1.2\cdot10^{-4}.
$$
This notation separates the size of the number from its leading digits. When two quantities are expressed with the same power of ten, their comparison depends only on their coefficients. If the powers differ, expressing them with the same exponent avoids incorrectly comparing only the leading digits.
:::

:::osservazione
For $a>0$, the power $a^{\frac mn}$, with integer $m$ and positive integer $n$, is $\sqrt[n]{a^m}$. The root can be calculated before the power. Thus $16^{\frac34}=(\sqrt[4]{16})^3=2^3=8$. The positive base allows these properties to be used unambiguously over the real numbers. If the base is negative, the existence of the roots depends on whether the index is even or odd and requires a separate check.
:::

## Roots and absolute value

:::definizione{#radici titolo="Principal root"}
For $a\ge0$, $\sqrt a$ is the unique nonnegative number whose square is $a$. This definition implies $\sqrt{x^2}=|x|$ for every real $x$. The symbol $\sqrt9$ denotes $3$; the equation $x^2=9$ instead has the two solutions $3$ and $-3$. Roots of odd index also exist for negative radicands, for example $\sqrt[3]{-8}=-2$.

For $a,b\ge0$, $\sqrt{ab}=\sqrt a\sqrt b$. Recognizing a square factor allows simplification: $\sqrt{72}=\sqrt{36\cdot2}=6\sqrt2$. Two terms with the same root are added as multiples of the same quantity, so $6\sqrt2-3\sqrt2=3\sqrt2$.
:::

:::esempio{#razionalizzazione titolo="Rationalizing a denominator"}
Rationalizing means writing an equivalent fraction whose denominator contains no radicals. The numerator and denominator are multiplied by the same nonzero quantity. For example,
$$
\frac6{\sqrt3}=\frac{6\sqrt3}{3}=2\sqrt3.
$$
If the denominator contains a difference, multiplication by the corresponding sum uses the difference of squares:
$$
\frac1{\sqrt5-2}
=\frac{\sqrt5+2}{(\sqrt5-2)(\sqrt5+2)}
=\frac{\sqrt5+2}{5-4}=\sqrt5+2.
$$
The sum $\sqrt5+2$ is called the conjugate of $\sqrt5-2$. Their product is $1$, so no division by zero is introduced. The procedure changes the form of the expression while preserving its value.
:::

:::definizione{#valore-assoluto titolo="Distance on the number line"}
The **absolute value** $|x|$ is the distance of $x$ from zero. It equals $x$ if $x\ge0$ and $-x$ if $x<0$. More generally, $|x-a|$ measures the distance between $x$ and $a$. For $r>0$,
$$
|x-a|<r\quad\Longleftrightarrow\quad a-r<x<a+r.
$$
The inequality $|x-a|>r$ instead describes the two rays $x<a-r$ or $x>a+r$. If equality is allowed, the endpoints are included. The equation $|x-a|=r$ identifies precisely the two endpoints, whereas for $r=0$ it identifies only $x=a$.
:::

:::esempio{titolo="Distance from three"}
The inequality $|x-3|<2$ requires $1<x<5$. The graph of $y=|x-3|$ lies below the line $y=2$ for exactly these horizontal coordinates.

::grafico{f="abs(x-3);2" xmin=-1 xmax=7 ymin=-0.5 ymax=5 punti="1,2,vuoto;5,2,vuoto" titolo="The intersection points bound the coordinates whose distance from three is less than two"}
:::

## Polynomials and factorizations

:::definizione{#polinomi titolo="Like terms and degree"}
A **polynomial** in $x$ is a finite sum of terms $a_kx^k$, with nonnegative integer exponents. Terms with the same exponent are like terms and are added through their coefficients. The degree of a nonzero polynomial is the largest exponent with a nonzero coefficient after simplification. For example, $(x^2+1)(x^2-1)-x^4+5x=5x-1$ has degree one, because the fourth-degree terms cancel.

The constant term is obtained by setting $x=0$. The coefficient of a power is found by collecting every product that generates that power. In $(2x-3)(x+4)$, the coefficient of $x$ is $8-3=5$.
:::

:::teorema{#scomposizioni titolo="Special products and common factors"}
The distributive property allows a polynomial to be either expanded or factored. The identities
$$
(a+b)^2=a^2+2ab+b^2,\qquad
a^2-b^2=(a-b)(a+b)
$$
hold for every pair of real numbers. The term $2ab$ in the square comes from the two products $ab$ and $ba$. A common factor is factored out by dividing every term by that factor: $6x^2-15x=3x(2x-5)$.

A monic trinomial $x^2+sx+p$ factors as $(x+u)(x+v)$ when $u+v=s$ and $uv=p$. For $x^2+x-20$, one chooses $u=5$ and $v=-4$. Factorization is used to find zeros, study signs and simplify rational expressions.
:::

:::teorema{#cubi-resto titolo="Cubes and polynomial remainders"}
The identities
$$
(a+b)^3=a^3+3a^2b+3ab^2+b^3,\qquad
a^3-b^3=(a-b)(a^2+ab+b^2)
$$
are verified by distributing the factors. In the cube of a binomial, the term $a^2b$ is obtained by choosing $b$ from one of the three factors: the three choices explain the coefficient $3$. For example, $x^3-27=(x-3)(x^2+3x+9)$, so the quotient upon division by $x-3$ is $x^2+3x+9$ and the remainder is zero.

Dividing a polynomial $P(x)$ by $x-c$ gives $P(x)=(x-c)Q(x)+r$, where the remainder $r$ is constant. Substitution of $x=c$ yields $r=P(c)$. Thus $x-c$ is a factor of $P$ exactly when $P(c)=0$. For $P(x)=x^3-x+2$ and $c=2$, the remainder is $8-2+2=8$; the quotient is not needed to find this value.
:::

:::attenzione{#frazioni-algebriche titolo="Simplification and domain"}
Cancellation applies to common nonzero factors. For
$$
\frac{x^2-9}{x-3}=\frac{(x-3)(x+3)}{x-3}=x+3
$$
the condition $x\ne3$ from the original expression remains. The simplified formula can be evaluated at $3$, but the original fraction is undefined at $3$. Moreover, in $\dfrac{x+3}{x}$ the letter $x$ in the numerator is a summand, so cancellation is not allowed; for $x=3$, the ratio equals $2$.
:::

## Linear equations and systems

:::teorema{#equazioni-lineari titolo="Equivalent transformations"}
Solving an equation means finding every admissible value that makes its two sides equal. Adding to both sides the same expression defined throughout the original domain and multiplying both sides by a nonzero number preserves the solutions. The equation $ax+b=0$, with $a\ne0$, has solution $x=-\dfrac ba$. If $a=0$, one distinguishes between $b=0$, when every real number is a solution, and $b\ne0$, when no solutions exist.

A denominator containing the unknown imposes a restriction before any transformations. For $\dfrac{x+2}{x-1}=3$, one needs $x\ne1$; multiplying by $x-1$ gives $x+2=3x-3$, hence $x=\dfrac52$. This value belongs to the domain and satisfies the original equation.
:::

:::definizione{#sistemi titolo="Simultaneous conditions"}
A solution of a system satisfies all its equations simultaneously. In the system
$$
\begin{cases}
x+y=7,\\
2x-y=5,
\end{cases}
$$
adding corresponding sides eliminates $y$ and gives $3x=12$. Hence $x=4$; substituting into the first equation gives $y=3$. The pair $(4,3)$ also satisfies the second equation, because $8-3=5$.

Two linear equations may describe intersecting lines, coincident lines or distinct parallel lines. The first case has one solution, the second infinitely many, and the third none. If the coefficients of the unknowns in the second equation are twice those in the first, the constant term must also double for the lines to coincide.
:::

:::esempio{titolo="Modeling a purchase"}
A total of $18$ items of two types, costing $2$ and $4$ euros, are bought for $54$ euros. If $x$ is the number of items costing $4$ euros, the number costing $2$ euros is $18-x$. The equation $4x+2(18-x)=54$ gives $2x=18$, hence $x=9$. The result is an integer between zero and eighteen, as required by the meaning of the unknown.
:::

## Quadratic equations and parameters

:::teorema{#equazioni-quadratiche titolo="Discriminant and roots"}
For the equation $ax^2+bx+c=0$, with $a\ne0$, the **discriminant** is $\Delta=b^2-4ac$. Completing the square gives the formula
$$
x=\frac{-b\pm\sqrt\Delta}{2a}.
$$
If $\Delta>0$, there are two distinct real solutions; if $\Delta=0$, there is a double root; if $\Delta<0$, there are no real solutions. When the polynomial is already factored, the zero-product property can be applied directly: $(x-2)(x-3)=0$ gives $x=2$ or $x=3$.

If the roots are $x_1,x_2$, expanding $a(x-x_1)(x-x_2)$ shows that $x_1+x_2=-\dfrac ba$ and $x_1x_2=\dfrac ca$. These relations allow sums and products of roots to be calculated without finding the roots separately.
:::

:::esempio{titolo="A parameter and a double root"}
The equation $x^2-8x+k=0$ has a double root when $64-4k=0$, namely for $k=16$. In that case, the polynomial is $(x-4)^2$ and vanishes only at $4$. A parameter can also make the coefficient of the quadratic term zero; in that case, the equation has degree at most one, and any cases in which the linear coefficient vanishes must also be considered.
:::

:::osservazione{#quadrato-completo titolo="Minimum values and substitutions"}
Completing the square shows that $x^2-8x+21=(x-4)^2+5$. The square is nonnegative and vanishes at $x=4$, so the minimum is $5$. For a biquadratic equation such as $x^4-5x^2+4=0$, the substitution $u=x^2$ gives $u^2-5u+4=0$. The solutions $u=1$ and $u=4$ are nonnegative and produce $x=\pm1$ and $x=\pm2$. A negative solution for $u$ would produce no real solutions for $x$.
:::

## Inequalities and signs

:::teorema{#disequazioni titolo="Operations and order"}
An inequality requires a comparison between its two sides. Adding the same quantity preserves the direction; multiplying by a positive number preserves it; multiplying by a negative number reverses it. From $-3x+6\le0$, one obtains $-3x\le-6$ and therefore $x\ge2$. The point $2$ is included because it makes the two sides equal.

If the factor contains the unknown, its sign must be known before multiplication. For products and ratios, studying the signs avoids assuming a sign that has not yet been established. The zeros of the factors divide the number line into intervals on which each factor keeps the same sign.
:::

:::esempio{#segni-prodotti titolo="Sign of a product"}
To solve $(x+3)(x-1)>0$, the zeros $-3$ and $1$ are identified. For $x<-3$, both factors are negative; for $-3<x<1$, they have opposite signs; for $x>1$, both are positive. The product is therefore positive for $x<-3$ or $x>1$. The zeros are excluded because the inequality is strict.

::grafico{f="(x+3)*(x-1)" xmin=-5 xmax=3 ymin=-5 ymax=10 punti="-3,0;1,0" titolo="The product is positive where the graph lies above the horizontal axis"}
:::

:::osservazione{#segni-frazioni titolo="Zeros, denominators and intersections"}
A ratio is positive when its numerator and denominator have the same sign. Zeros of the denominator are always excluded. For $\dfrac{x+1}{x-4}\le0$, the ratio is negative between $-1$ and $4$, equals zero at $-1$ and is undefined at $4$, so the solution is $[-1,4)$.

When several conditions must hold together, their solution sets are intersected. For example, $(x-1)(x+3)\le0$ gives $[-3,1]$; adding $x>0$ leaves $(0,1]$. Zero is excluded by the second condition, whereas one satisfies both.
:::

## Domain restrictions and radical equations

:::definizione{#dominio titolo="Admissible values"}
The **domain** of a real expression contains the values for which every indicated operation is defined. Denominators must be nonzero and radicands of roots with even index must be nonnegative. If the denominator is a square root, its radicand must be strictly positive. Thus $\dfrac1{\sqrt{(x-1)(x+2)}}$ requires $(x-1)(x+2)>0$, giving $x<-2$ or $x>1$.

Simplification preserves the original restrictions. Squaring must also be accompanied by a sign check: opposite numbers have the same square, so equality of the squares alone does not guarantee equality of the numbers.
:::

:::esempio{#equazioni-irrazionali titolo="Eliminating a radical"}
In the equation $\sqrt{x+1}=x-1$, the square root is nonnegative, so $x\ge1$ is required. This condition also makes the radicand positive. Squaring gives
$$
x+1=(x-1)^2,\qquad x^2-3x=0,
$$
so the candidates are $0$ and $3$. The first does not satisfy $x\ge1$; the second satisfies $\sqrt{3+1}=3-1=2$. The solution set is therefore $\{3\}$. The graph shows the unique intersection of the two curves.

::grafico{f="sqrt(x+1);x-1" xmin=-1 xmax=5 ymin=-1 ymax=4 punti="3,2,pieno" titolo="The square root and the line meet only at the point with horizontal coordinate three"}
:::

:::attenzione{titolo="Division by the unknown"}
In the equation $x(x-2)=0$, dividing immediately by $x$ removes the solution $x=0$. The zero-product property instead preserves both cases, $x=0$ and $x=2$. If division is necessary, the case in which the divisor vanishes must be studied separately. This distinction also matters in equations with parameters, because an apparently numerical coefficient can become zero for some parameter values.
:::
