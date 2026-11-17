---
titolo: Powers and roots
sommario: Powers with integer, rational and real exponents and their properties, n-th roots with their conditions of existence, rationalization and the comparison of powers and of roots.
---

## Powers with natural number and integer exponents

:::definizione{#potenze-a-esponente-intero titolo="Power with a natural number or integer exponent"}
For $a \in \mathbb{R}$ and $n$ a natural number with $n \geq 1$, the **power** $a^n$ is the product of $n$ factors equal to $a$:
$$
a^n = \underbrace{a \cdot a \cdots a}_{n \ \text{factors}} .
$$
The definition is extended to integer exponents by setting, for $a \neq 0$,
$$
a^0 = 1, \qquad a^{-n} = \frac{1}{a^n} .
$$
These definitions are the *only* ones that preserve the properties of powers: from $a^n \cdot a^0 = a^{n+0} = a^n$ it follows that $a^0 = 1$, and from $a^n \cdot a^{-n} = a^0 = 1$ it follows that $a^{-n} = \dfrac{1}{a^n}$. For example $2^{-3} = \dfrac{1}{8}$ and $\left(\dfrac{2}{3}\right)^{-1} = \dfrac{3}{2}$.
:::

:::osservazione
With a negative base the sign of the power depends on the **parity of the exponent**: $(-2)^4 = 16$ and $(-2)^3 = -8$. The expression $-2^4$ denotes the negative of $2^4$, that is, $-16$, because exponentiation *precedes* the change of sign.

::grafico{f="x^2;x^3" xmin=-2.6 xmax=2.6 ymin=-9 ymax=9 punti="-2,4,pieno;-2,-8,pieno" etichette="1,7,y = x³;-2.5,7.5,y = x²;-1.85,5,(−2)² = 4;-1.75,-8.3,(−2)³ = −8" titolo="With a negative base $x^2$ is positive and $x^3$ is negative: the graph of $y = x^2$ is symmetric with respect to the $y$-axis, that of $y = x^3$ with respect to the origin"}

:::

:::osservazione
With base $0$ and $n \geq 1$ we have $0^n = 0$, because a product containing a zero factor is zero. The expressions $0^{-n}$ and $0^0$, on the other hand, are **meaningless**. The first would give $\dfrac{1}{0^n} = \dfrac{1}{0}$, and division by zero is not defined. The second is excluded because the definition $a^0 = 1$ is obtained from $a^n \cdot a^0 = a^n$ by dividing by $a^n$, and with $a = 0$ this division is impossible. For this reason, in a literal expression with negative or zero exponents, the base is assumed to be different from zero: for example $x^{-2} = \dfrac{1}{x^2}$ holds for $x \neq 0$.
:::

:::attenzione
In general $a^{-n}$ is **different** from $-a^n$. For $a = 2$ and $n = 3$ we have $2^{-3} = \dfrac{1}{8}$, which is positive, while $-2^3 = -8$. The negative exponent denotes the **reciprocal**, so it leaves the sign of $a^n$ unchanged; for example $(-2)^{-3} = \dfrac{1}{(-2)^3} = -\dfrac{1}{8}$ is negative because the exponent $3$ is odd.
:::

## Properties of powers

::::teorema{#proprieta-delle-potenze titolo="Properties of powers"}
For $a, b > 0$ and real exponents $m, n$ (with negative bases they hold for *integer* exponents):

- product of powers with the same base: $a^m \cdot a^n = a^{m+n}$; for example $2^3 \cdot 2^4 = 2^7 = 128$;
- quotient of powers with the same base: $\dfrac{a^m}{a^n} = a^{m-n}$; for example $\dfrac{5^6}{5^4} = 5^2 = 25$;
- power of a power: $(a^m)^n = a^{mn}$; for example $(3^2)^3 = 3^6 = 729$;
- product of powers with the same exponent: $a^n \cdot b^n = (ab)^n$; for example $2^3 \cdot 5^3 = 10^3 = 1000$;
- quotient of powers with the same exponent: $\dfrac{a^n}{b^n} = \left(\dfrac{a}{b}\right)^n$; for example $\dfrac{6^2}{3^2} = 2^2 = 4$.

The properties turn products and quotients of powers into a **single power** and are the tool with which expressions are simplified; in exercises they are used in *both* directions, also to rewrite a power in a more convenient form, such as $8^{10} = (2^3)^{10} = 2^{30}$.

:::dimostrazione
The idea is to count the factors, for natural number exponents $m, n \geq 1$. The product $a^m \cdot a^n$ is made of $m$ factors equal to $a$ followed by another $n$ factors equal to $a$, therefore it contains $m + n$ factors and equals $a^{m+n}$. The power $(a^m)^n$ is the product of $n$ factors equal to $a^m$, and each of them contains $m$ factors equal to $a$, so there are $mn$ factors in all and $(a^m)^n = a^{mn}$.

The product $a^n \cdot b^n$ contains $n$ factors equal to $a$ and $n$ factors equal to $b$. By the commutative and associative properties of multiplication the factors can be grouped into $n$ pairs $ab$, therefore $a^n b^n = (ab)^n$. For the quotient with $m > n$, the first property gives $a^m = a^{m-n} \cdot a^n$, and dividing both sides by $a^n$ we obtain $\dfrac{a^m}{a^n} = a^{m-n}$; the quotient $\dfrac{a^n}{b^n}$ is treated like the product, grouping the factors into $n$ fractions $\dfrac{a}{b}$.

The definitions $a^0 = 1$ and $a^{-n} = \dfrac{1}{a^n}$ were chosen so that the same equalities hold for integer exponents; for rational and real exponents they hold as a consequence of the definitions of $a^{\frac{m}{n}}$ and of $a^x$.
:::
::::

:::esempio{titolo="Different bases reduced to prime numbers"}
$$
\begin{aligned}
\frac{4^5 \cdot 9^3}{6^8}
&= \frac{(2^2)^5 \cdot (3^2)^3}{(2 \cdot 3)^8} \\[6pt]
&= \frac{2^{10} \cdot 3^6}{2^8 \cdot 3^8} \\[6pt]
&= 2^{10-8} \cdot 3^{6-8} = 2^2 \cdot 3^{-2} = \frac{4}{9}
\end{aligned}
$$
The bases $4$, $9$ and $6$ are different, therefore the properties with the same base do not apply directly. Each base is factored into **prime factors**: $4 = 2^2$, $9 = 3^2$ and $6 = 2 \cdot 3$. The power of a power and the power of a product then reduce the expression to the bases $2$ and $3$ only, and for each base the exponents of the numerator and of the denominator are subtracted.
:::

:::attenzione
The properties concern **products and quotients**. For the power of a sum the **binomial expansion** holds, and in general $(a + b)^n$ is *different* from $a^n + b^n$: for example $(3 + 4)^2 = 49$, while $3^2 + 4^2 = 25$. Likewise the sum $a^m + a^n$ is in general different from $a^{m+n}$: $2^2 + 2^3 = 12$, while $2^5 = 32$.
:::

:::attenzione
The power of a power $(a^m)^n$ is in general *different* from $a^{m^n}$. By convention the expression $a^{m^n}$ denotes $a$ raised to the exponent $m^n$, so $m^n$ is computed first. For example $(2^3)^2 = 2^6 = 64$, while $2^{3^2} = 2^9 = 512$.
:::

## N-th roots

:::definizione{#radici titolo="N-th root and domain conditions"}
For $n$ a natural number with $n \geq 2$:

- if $n$ is *odd*, $\sqrt[n]{a}$ is defined for every $a \in \mathbb{R}$ and is the unique real number $x$ such that $x^n = a$; for example $\sqrt[3]{-8} = -2$, because $(-2)^3 = -8$;
- if $n$ is *even*, $\sqrt[n]{a}$ is defined for $a \geq 0$ and is the unique real number $x \geq 0$ such that $x^n = a$; for example $\sqrt{49} = 7$, while $\sqrt{-4}$ has no meaning in $\mathbb{R}$, because every square is greater than or equal to zero.

With an even index the root is by definition **greater than or equal to zero**: the equation $x^2 = 49$ has the two solutions $x = \pm 7$, while the symbol $\sqrt{49}$ denotes *only* $7$. The condition "radicand greater than or equal to zero for an even index" is the **domain condition** that opens every exercise with roots.

::grafico{f="sqrt(x)" xmin=-1 xmax=9 ymin=-1 ymax=4 titolo="$y = \sqrt{x}$: the square root is defined for $x \geq 0$ and has values greater than or equal to zero"}

::grafico{f="sqrt(x)^4;x;sqrt(x)" xmin=-1 xmax=5 ymin=-1 ymax=5 uguale=1 legenda="y = x^2 \ (x \geq 0);y = x;y = \sqrt{x}" punti="2,4,pieno,P;4,2,pieno,P′" segmenti="2,4,4,2" etichette="0.3,4.5,y = x²;4.1,1.4,y = √x;4.2,4.6,y = x" titolo="For $x \geq 0$ the graphs of $y = x^2$ and $y = \sqrt{x}$ are symmetric with respect to the bisector $y = x$: the point $P(2, 4)$ of the first corresponds to the point $P'(4, 2)$ of the second"}

:::

:::esempio{titolo="Domain conditions"}
$\sqrt{2x - 6}$ has an even index, therefore it requires $2x - 6 \geq 0$, that is, $x \geq 3$; the root $\sqrt[3]{2x - 6}$ has an odd index and exists for every real $x$. When there is more than one root, the conditions must hold *together* and are combined in a **system**: for $\sqrt{x - 1} + \sqrt{5 - x}$
$$
\begin{cases}
x - 1 \geq 0 \\
5 - x \geq 0
\end{cases}
\qquad\Longrightarrow\qquad 1 \leq x \leq 5 .
$$

::grafico{f="sqrt(2*x-6);cbrt(2*x-6)" xmin=-2 xmax=9 ymin=-3 ymax=4 punti="3,0,pieno" etichette="6.6,3.4,y = √(2x − 6);6.6,1,y = ∛(2x − 6)" titolo="$y = \sqrt{2x - 6}$ exists only for $x \geq 3$, while $y = \sqrt[3]{2x - 6}$ (dashed) exists for every real $x$"}

:::

::::teorema{#proprieta-delle-radici titolo="Properties of roots"}
For $a, b \geq 0$ (with $b > 0$ in quotients), indices $m, n \geq 2$ and natural number exponent $k \geq 1$:
$$
\sqrt[n]{ab} = \sqrt[n]{a} \, \sqrt[n]{b}, \qquad
\sqrt[n]{\frac{a}{b}} = \frac{\sqrt[n]{a}}{\sqrt[n]{b}}, \qquad
\sqrt[m]{\sqrt[n]{a}} = \sqrt[mn]{a}, \qquad
\sqrt[n]{a^k} = \left(\sqrt[n]{a}\right)^{k} .
$$
Moreover the **invariance property** holds: for every natural number $p \geq 1$,
$$
\sqrt[n]{a^k} = \sqrt[np]{a^{kp}} .
$$
With the first property **factors are taken out** of the radical sign, for example $\sqrt{72} = \sqrt{36 \cdot 2} = 6\sqrt{2}$; with the invariance property two roots are brought to the same index, an operation on which the comparison of roots is based.

:::dimostrazione
The idea is to use the uniqueness of the root. By definition $\sqrt[n]{ab}$ is the unique number greater than or equal to zero whose power with exponent $n$ equals $ab$. The number $\sqrt[n]{a}\,\sqrt[n]{b}$ is greater than or equal to zero, because it is the product of two numbers greater than or equal to zero, and by the power of a product
$$
\left(\sqrt[n]{a}\,\sqrt[n]{b}\right)^n = \left(\sqrt[n]{a}\right)^n \left(\sqrt[n]{b}\right)^n = ab .
$$
Therefore $\sqrt[n]{a}\,\sqrt[n]{b} = \sqrt[n]{ab}$. The other equalities are proved in the same way, by checking that one side is greater than or equal to zero and that its power with exponent equal to the index of the other side is the radicand of the other side. For example the number $\sqrt[m]{\sqrt[n]{a}}$ is greater than or equal to zero and, by the power of a power,
$$
\left(\sqrt[m]{\sqrt[n]{a}}\right)^{mn} = \left(\left(\sqrt[m]{\sqrt[n]{a}}\right)^{m}\right)^{n} = \left(\sqrt[n]{a}\right)^{n} = a ,
$$
so it coincides with $\sqrt[mn]{a}$.
:::
::::

:::attenzione
For the square root of a square $\sqrt{a^2} = |a|$ holds, while the equality $\sqrt{a^2} = a$ is **false** for $a < 0$: for example $\sqrt{(-5)^2} = \sqrt{25} = 5 = |-5|$.

::grafico{f="sqrt(x^2);x" xmin=-4 xmax=4 ymin=-4 ymax=4 uguale=1 punti="-3,3,pieno;-3,-3,vuoto" titolo="$y = \sqrt{x^2}$ coincides with $y = |x|$; the line $y = x$ (dashed) coincides with the graph only for $x \geq 0$, and at $x = -3$ the graph passes through $(-3, 3)$, the line through $(-3, -3)$"}

:::

:::esempio{titolo="Taking out factors with letters"}
For every real $a$ the radicand $50a^2$ is greater than or equal to zero, and
$$
\sqrt{50a^2} = \sqrt{25a^2 \cdot 2} = \sqrt{25a^2}\,\sqrt{2} = 5|a|\sqrt{2} .
$$
The factor $a^2$ comes out of the square root as $|a|$, because $\sqrt{a^2} = |a|$; the result is therefore greater than or equal to zero for every $a$, like every root with an even index. With an odd index the absolute value does not appear. The root with an odd index exists and is unique for every real radicand, so the proof of the product property also holds with negative radicands; for example $\sqrt[3]{16a^3} = \sqrt[3]{8a^3}\,\sqrt[3]{2} = 2a\sqrt[3]{2}$, which for $a < 0$ is negative like the radicand.
:::

:::attenzione
The root of a sum is in general *different* from the sum of the roots: $\sqrt{9 + 16} = \sqrt{25} = 5$, while $\sqrt{9} + \sqrt{16} = 3 + 4 = 7$. The properties of roots concern products and quotients of the radicands, like the properties of powers.
:::

:::osservazione
The property $\sqrt{ab} = \sqrt{a}\,\sqrt{b}$ requires $a, b \geq 0$. If $a$ and $b$ are both negative, the product $ab$ is positive and $\sqrt{ab}$ exists, while $\sqrt{a}$ and $\sqrt{b}$ do not exist; for example $\sqrt{(-4)(-9)} = \sqrt{36} = 6$. For this reason $\sqrt{x(x - 3)}$ and $\sqrt{x}\,\sqrt{x - 3}$ have different domain conditions. The first requires $x(x - 3) \geq 0$, that is, $x \leq 0$ or $x \geq 3$; the second requires
$$
\begin{cases}
x \geq 0 \\
x - 3 \geq 0
\end{cases}
\qquad\Longrightarrow\qquad x \geq 3 .
$$
The two expressions are equal for $x \geq 3$, while for $x \leq 0$ only the first exists.
:::

## Powers with rational and real exponents

:::definizione{#esponente-razionale titolo="Power with rational exponent"}
For $a > 0$, $m$ an integer and $n$ a natural number with $n \geq 2$, one sets
$$
a^{\frac{m}{n}} = \sqrt[n]{a^m} .
$$
In particular $a^{\frac{1}{n}} = \sqrt[n]{a}$ and $a^{-\frac{1}{2}} = \dfrac{1}{\sqrt{a}}$. With this definition the properties of powers **continue to hold**, therefore computations with roots can be carried out with the rules of exponents:
$$
\sqrt{2} \cdot \sqrt[3]{2} = 2^{\frac{1}{2}} \cdot 2^{\frac{1}{3}} = 2^{\frac{1}{2} + \frac{1}{3}} = 2^{\frac{5}{6}} = \sqrt[6]{2^5} .
$$
:::

:::esempio{titolo="Computing powers with rational exponents"}
$$
8^{\frac{2}{3}} = \left(\sqrt[3]{8}\right)^2 = 2^2 = 4, \qquad
16^{-\frac{3}{4}} = \frac{1}{16^{\frac{3}{4}}} = \frac{1}{\left(\sqrt[4]{16}\right)^{3}} = \frac{1}{2^3} = \frac{1}{8}
$$
In both cases the root is computed before the power, because $\sqrt[n]{a^m} = \left(\sqrt[n]{a}\right)^m$ by the property of roots, and the roots $\sqrt[3]{8} = 2$ and $\sqrt[4]{16} = 2$ are integers. The same result is obtained by writing the base as a power of $2$ and multiplying the exponents: $8^{\frac{2}{3}} = (2^3)^{\frac{2}{3}} = 2^2$ and $16^{-\frac{3}{4}} = (2^4)^{-\frac{3}{4}} = 2^{-3}$.
:::

:::attenzione
The base of powers with rational exponents is **positive**. With a negative base the notation loses consistency: $(-8)^{\frac{1}{3}}$ should equal $\sqrt[3]{-8} = -2$, while the same fraction written as $\dfrac{2}{6}$ would give $\sqrt[6]{(-8)^2} = \sqrt[6]{64} = 2$. For roots of negative numbers the notation $\sqrt[3]{-8}$ with an odd index is used.
:::

:::definizione{#esponente-reale titolo="Power with real exponent"}
For $a > 0$ and real $x$, the power $a^x$ is defined by **approximating** $x$ with rational exponents: $2^{\sqrt{2}}$ is the number approached by $2^{1.4}$, $2^{1.41}$, $2^{1.414}$ and so on. All the properties of powers remain valid, and the result is *always* **positive**: $a^x > 0$ for every real $x$. The exponential function, treated in the chapter on elementary functions, is built on this definition.
:::

:::esempio{titolo="A power with an irrational exponent"}
We have $1.4 < \sqrt{2} < 1.5$ and the base $2$ is greater than $1$. By the comparison of powers with the same base the power increases with the exponent, therefore
$$
2^{1.4} < 2^{\sqrt{2}} < 2^{1.5}, \qquad 2^{1.4} \approx 2.639, \qquad 2^{1.5} = 2\sqrt{2} \approx 2.828 .
$$
With more precise approximations of $\sqrt{2}$ we obtain $2^{1.41} \approx 2.657$ and $2^{1.414} \approx 2.665$, and to within one thousandth $2^{\sqrt{2}} \approx 2.665$.
:::

## Rationalization

:::definizione{#razionalizzazione titolo="Rationalization"}
**Rationalizing** a fraction means rewriting it with a denominator **free of roots**, by multiplying numerator and denominator by the same factor, chosen so that the denominator becomes rational. The three typical cases:

- single root: one multiplies by the root itself, because $\sqrt{a} \cdot \sqrt{a} = a$; for example $\dfrac{1}{\sqrt{3}} = \dfrac{\sqrt{3}}{3}$;
- binomial with square roots: one multiplies by the **conjugate binomial**, because $(\sqrt{a} - \sqrt{b})(\sqrt{a} + \sqrt{b}) = a - b$; for example $\dfrac{1}{\sqrt{5} - \sqrt{3}} = \dfrac{\sqrt{5} + \sqrt{3}}{2}$;
- cube root: one multiplies by the factor that completes the cube under the root, that is, $\sqrt[3]{a^2}$ for $\sqrt[3]{a}$; for example $\dfrac{1}{\sqrt[3]{2}} = \dfrac{\sqrt[3]{4}}{2}$.

Rationalization is used to add and compare fractions with roots and appears again in limits with differences of roots, treated in the chapter on limits.
:::

:::esempio{titolo="Rationalization with the conjugate binomial"}
$$
\frac{2}{\sqrt{5} - \sqrt{3}}
= \frac{2 \, (\sqrt{5} + \sqrt{3})}{(\sqrt{5} - \sqrt{3})(\sqrt{5} + \sqrt{3})}
= \frac{2 \, (\sqrt{5} + \sqrt{3})}{5 - 3}
= \sqrt{5} + \sqrt{3}
$$
The product in the denominator is a sum times a difference, therefore it equals the **difference of squares** $5 - 3 = 2$, which cancels with the numerator.
:::

:::osservazione
With a binomial of cube roots in the denominator the conjugate binomial does not make the denominator rational, because $\left(\sqrt[3]{a} - \sqrt[3]{b}\right)\left(\sqrt[3]{a} + \sqrt[3]{b}\right) = \sqrt[3]{a^2} - \sqrt[3]{b^2}$ still contains roots. One then uses the special products
$$
(x - y)(x^2 + xy + y^2) = x^3 - y^3, \qquad (x + y)(x^2 - xy + y^2) = x^3 + y^3
$$
with $x = \sqrt[3]{a}$ and $y = \sqrt[3]{b}$, which produce the cubes $x^3 = a$ and $y^3 = b$. For example, with $x = \sqrt[3]{2}$ and $y = 1$,
$$
\begin{aligned}
\frac{1}{\sqrt[3]{2} - 1}
&= \frac{\sqrt[3]{4} + \sqrt[3]{2} + 1}{\left(\sqrt[3]{2} - 1\right)\left(\sqrt[3]{4} + \sqrt[3]{2} + 1\right)} \\[6pt]
&= \frac{\sqrt[3]{4} + \sqrt[3]{2} + 1}{2 - 1} = \sqrt[3]{4} + \sqrt[3]{2} + 1 .
\end{aligned}
$$
:::

## Comparison of powers and of roots

:::teorema{#confronto-tra-potenze titolo="Comparison of powers"}
To compare two powers one distinguishes according to the base and the exponent:

- same base $a > 1$: the power **increases** as the exponent increases, therefore $x < y \Rightarrow a^x < a^y$; for example $2^3 < 2^5$;
- same base $0 < a < 1$: the power **decreases** as the exponent increases, therefore $x < y \Rightarrow a^x > a^y$; for example $\left(\dfrac{1}{2}\right)^3 > \left(\dfrac{1}{2}\right)^5$;
- same exponent $x > 0$ and bases $0 < a < b$: $a^x < b^x$ holds; for example $3^4 < 5^4$. With a negative exponent the inequality is **reversed**: $3^{-1} > 5^{-1}$, because $\dfrac{1}{3} > \dfrac{1}{5}$;
- different bases and exponents: with the power of a power the powers are rewritten with the same base or with the same exponent; for example $2^{30} = (2^3)^{10} = 8^{10}$ and $3^{20} = (3^2)^{10} = 9^{10}$, therefore $2^{30} < 3^{20}$.

::grafico{f="2^x;0.5^x" xmin=-3.5 xmax=3.5 ymin=-1 ymax=9 etichette="1.6,6.5,y = 2ˣ" titolo="$y = 2^x$ increases as the exponent increases (base greater than $1$), $y = \left(\dfrac{1}{2}\right)^x$ (dashed) decreases (base between $0$ and $1$); both are positive for every $x$"}

:::

:::osservazione
The comparison of powers with the same base also holds when the base is any number $x > 0$. For $0 < x < 1$ the powers of $x$ decrease as the exponent increases, and the exponents of $x^2$, $x$ and $\sqrt{x} = x^{\frac{1}{2}}$ are $2 > 1 > \dfrac{1}{2}$, therefore $x^2 < x < \sqrt{x}$. For $x > 1$ the order is reversed and $\sqrt{x} < x < x^2$. For example with $x = \dfrac{1}{4}$ we have $\dfrac{1}{16} < \dfrac{1}{4} < \dfrac{1}{2}$, while with $x = 4$ we have $2 < 4 < 16$. In particular the square of a number between $0$ and $1$ is *smaller* than the number itself.

::grafico{f="x^2;x;sqrt(x)" xmin=-0.2 xmax=1.7 ymin=-0.2 ymax=1.8 uguale=1 punti="1,1,pieno;0.25,0.0625,pieno;0.25,0.5,pieno" segmenti="0.25,0,0.25,0.5" legenda="y = x^2;y = x;y = \sqrt{x}" titolo="For $0 < x < 1$ we have $x^2 < x < \sqrt{x}$, as at $x = \dfrac{1}{4}$; for $x > 1$ the order is reversed, and the three graphs pass through $(1, 1)$"}

:::

:::teorema{#confronto-tra-radici titolo="Comparison of roots"}
Roots with the same index are compared through their radicands: for $0 \leq a < b$, $\sqrt[n]{a} < \sqrt[n]{b}$ holds. Roots with different indices are brought to the **same index** with the **invariance property**, using the least common multiple of the indices as the common index.
$$
\sqrt{3} = \sqrt[6]{3^3} = \sqrt[6]{27}, \qquad
\sqrt[3]{5} = \sqrt[6]{5^2} = \sqrt[6]{25},
\qquad\text{therefore}\quad \sqrt{3} > \sqrt[3]{5} .
$$
With this method any list of roots can be ordered, as in the ordering exercises.
:::

:::esempio{titolo="Factors brought inside the root"}
$$
3\sqrt{2} = \sqrt{9}\,\sqrt{2} = \sqrt{18}, \qquad
2\sqrt{3} = \sqrt{4}\,\sqrt{3} = \sqrt{12},
\qquad\text{therefore}\quad 3\sqrt{2} > 2\sqrt{3} .
$$
A positive factor in front of a square root is written as the root of its square, for example $3 = \sqrt{9}$, and by the product property it goes under the radical sign. The two roots then have the same index, so the radicands $18 > 12$ are compared. A negative factor stays outside with its sign: $-3\sqrt{2} = -\sqrt{18}$, because $\sqrt{18}$ is positive.
:::
