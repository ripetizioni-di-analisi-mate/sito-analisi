---
titolo: Powers and roots
sommario: Powers with integer, rational and real exponents and their properties, n-th roots with their domain conditions, rationalization, and the comparison of powers and of roots.
---

## Powers with natural and integer exponents

:::definizione{#potenze-a-esponente-intero titolo="Power with natural and integer exponent"}
For $a \in \mathbb{R}$ and $n$ natural with $n \geq 1$, the **power** $a^n$ is the product of $n$ factors equal to $a$:
$$
a^n = \underbrace{a \cdot a \cdots a}_{n \ \text{factors}} .
$$
The definition is extended to integer exponents by setting, for $a \neq 0$,
$$
a^0 = 1, \qquad a^{-n} = \frac{1}{a^n} .
$$
These definitions are the only ones that preserve the properties of powers: from $a^n \cdot a^0 = a^{n+0} = a^n$ it follows that $a^0 = 1$, and from $a^n \cdot a^{-n} = a^0 = 1$ it follows that $a^{-n} = \dfrac{1}{a^n}$. For example $2^{-3} = \dfrac{1}{8}$ and $\left(\dfrac{2}{3}\right)^{-1} = \dfrac{3}{2}$.
:::

:::osservazione
With a negative base the sign of the power depends on the **parity of the exponent**: $(-2)^4 = 16$ and $(-2)^3 = -8$. The expression $-2^4$ denotes the opposite of $2^4$, that is, $-16$, because exponentiation precedes the change of sign.

::grafico{f="x^2;x^3" xmin=-2.6 xmax=2.6 ymin=-9 ymax=9 punti="-2,4,pieno;-2,-8,pieno" etichette="1,7,y = x³;-2.5,7.5,y = x²;-1.85,5,(−2)² = 4;-1.75,-8.3,(−2)³ = −8" titolo="With a negative base $x^2$ is positive and $x^3$ is negative: the graph of $y = x^2$ is symmetric with respect to the $y$-axis, that of $y = x^3$ with respect to the origin"}

:::

## Properties of powers

:::teorema{#proprieta-delle-potenze titolo="Properties of powers"}
For $a, b > 0$ and real exponents $m, n$ (with negative bases they hold for integer exponents):

- product of powers with the same base: $a^m \cdot a^n = a^{m+n}$; for example $2^3 \cdot 2^4 = 2^7 = 128$;
- quotient of powers with the same base: $\dfrac{a^m}{a^n} = a^{m-n}$; for example $\dfrac{5^6}{5^4} = 5^2 = 25$;
- power of a power: $(a^m)^n = a^{mn}$; for example $(3^2)^3 = 3^6 = 729$;
- product of powers with the same exponent: $a^n \cdot b^n = (ab)^n$; for example $2^3 \cdot 5^3 = 10^3 = 1000$;
- quotient of powers with the same exponent: $\dfrac{a^n}{b^n} = \left(\dfrac{a}{b}\right)^n$; for example $\dfrac{6^2}{3^2} = 2^2 = 4$.

The properties turn products and quotients of powers into a single power and are the tool with which expressions are simplified; in exercises they are used in both directions, also to rewrite a power in a more convenient form, such as $8^{10} = (2^3)^{10} = 2^{30}$.
:::

:::attenzione
The properties concern products and quotients. For the power of a sum the binomial expansion holds, and in general $(a + b)^n$ is **different** from $a^n + b^n$: for example $(3 + 4)^2 = 49$, while $3^2 + 4^2 = 25$. Likewise the sum $a^m + a^n$ is in general different from $a^{m+n}$: $2^2 + 2^3 = 12$, while $2^5 = 32$.
:::

## N-th roots

:::definizione{#radici titolo="N-th root and domain conditions"}
For $n$ natural with $n \geq 2$:

- if $n$ is odd, $\sqrt[n]{a}$ is defined for *every* $a \in \mathbb{R}$ and is the unique real number $x$ such that $x^n = a$; for example $\sqrt[3]{-8} = -2$, because $(-2)^3 = -8$;
- if $n$ is even, $\sqrt[n]{a}$ is defined for $a \geq 0$ and is the unique real number $x \geq 0$ such that $x^n = a$; for example $\sqrt{49} = 7$, while $\sqrt{-4}$ has **no meaning** in $\mathbb{R}$, because every square is greater than or equal to zero.

With an even index the root is by definition greater than or equal to zero: the equation $x^2 = 49$ has the two solutions $x = \pm 7$, while the symbol $\sqrt{49}$ denotes *only* $7$. The condition "radicand greater than or equal to zero for an even index" is the **domain condition** that opens every exercise with roots.

::grafico{f="sqrt(x)" xmin=-1 xmax=9 ymin=-1 ymax=4 titolo="y = √x: the square root is defined for x ≥ 0 and has values greater than or equal to zero"}

::grafico{f="sqrt(x)^4;x;sqrt(x)" xmin=-1 xmax=5 ymin=-1 ymax=5 uguale=1 legenda="y = x^2 \ (x \geq 0);y = x;y = \sqrt{x}" punti="2,4,pieno,P;4,2,pieno,P′" segmenti="2,4,4,2" etichette="0.3,4.5,y = x²;4.1,1.4,y = √x;4.2,4.6,y = x" titolo="For $x \geq 0$ the graphs of $y = x^2$ and $y = \sqrt{x}$ are symmetric with respect to the bisector $y = x$: the point $P(2, 4)$ of the first corresponds to the point $P'(4, 2)$ of the second"}

:::

:::esempio{titolo="Domain conditions"}
$\sqrt{2x - 6}$ has an even index, therefore it requires $2x - 6 \geq 0$, that is, $x \geq 3$; the root $\sqrt[3]{2x - 6}$ has an odd index and exists for *every* real $x$. When there is more than one root, the conditions must hold together and are combined in a **system**: for $\sqrt{x - 1} + \sqrt{5 - x}$
$$
\begin{cases}
x - 1 \geq 0 \\
5 - x \geq 0
\end{cases}
\qquad\Longrightarrow\qquad 1 \leq x \leq 5 .
$$

::grafico{f="sqrt(2*x-6);cbrt(2*x-6)" xmin=-2 xmax=9 ymin=-3 ymax=4 punti="3,0,pieno" etichette="6.6,3.4,y = √(2x − 6);6.6,1,y = ∛(2x − 6)" titolo="$y = \sqrt{2x - 6}$ exists only for $x \geq 3$, while $y = \sqrt[3]{2x - 6}$ (dashed) exists for every real $x$"}

:::

:::teorema{#proprieta-delle-radici titolo="Properties of roots"}
For $a, b \geq 0$ (with $b > 0$ in quotients), indices $m, n \geq 2$ and natural exponent $k \geq 1$:
$$
\sqrt[n]{ab} = \sqrt[n]{a} \, \sqrt[n]{b}, \qquad
\sqrt[n]{\frac{a}{b}} = \frac{\sqrt[n]{a}}{\sqrt[n]{b}}, \qquad
\sqrt[m]{\sqrt[n]{a}} = \sqrt[mn]{a}, \qquad
\sqrt[n]{a^k} = \left(\sqrt[n]{a}\right)^{k} .
$$
Moreover the **invariance property** holds: for every natural $p \geq 1$,
$$
\sqrt[n]{a^k} = \sqrt[np]{a^{kp}} .
$$
With the first property factors are taken out of the radical sign, for example $\sqrt{72} = \sqrt{36 \cdot 2} = 6\sqrt{2}$; with the invariance property two roots are brought to the same index, an operation on which the comparison of roots is based.
:::

:::attenzione
For the square root of a square $\sqrt{a^2} = |a|$ holds, while the equality $\sqrt{a^2} = a$ is **false** for $a < 0$: for example $\sqrt{(-5)^2} = \sqrt{25} = 5 = |-5|$.

::grafico{f="sqrt(x^2);x" xmin=-4 xmax=4 ymin=-4 ymax=4 uguale=1 punti="-3,3,pieno;-3,-3,vuoto" titolo="$y = \sqrt{x^2}$ coincides with $y = |x|$; the line $y = x$ (dashed) coincides with the graph only for $x \geq 0$, and at $x = -3$ the graph passes through $(-3, 3)$, the line through $(-3, -3)$"}

:::

## Powers with rational and real exponents

:::definizione{#esponente-razionale titolo="Power with rational exponent"}
For $a > 0$, $m$ integer and $n$ natural with $n \geq 2$, one sets
$$
a^{\frac{m}{n}} = \sqrt[n]{a^m} .
$$
In particular $a^{\frac{1}{n}} = \sqrt[n]{a}$ and $a^{-\frac{1}{2}} = \dfrac{1}{\sqrt{a}}$. With this definition the properties of powers **continue to hold**, therefore computations with roots can be carried out with the rules of exponents:
$$
\sqrt{2} \cdot \sqrt[3]{2} = 2^{\frac{1}{2}} \cdot 2^{\frac{1}{3}} = 2^{\frac{1}{2} + \frac{1}{3}} = 2^{\frac{5}{6}} = \sqrt[6]{2^5} .
$$
:::

:::attenzione
The base of powers with rational exponent is **positive**. With a negative base the notation loses consistency: $(-8)^{\frac{1}{3}}$ should equal $\sqrt[3]{-8} = -2$, while the same fraction written as $\dfrac{2}{6}$ would give $\sqrt[6]{(-8)^2} = \sqrt[6]{64} = 2$. For roots of negative numbers the notation $\sqrt[3]{-8}$ with an odd index is used.
:::

:::definizione{#esponente-reale titolo="Power with real exponent"}
For $a > 0$ and $x$ real, the power $a^x$ is defined by approximating $x$ with rational exponents: $2^{\sqrt{2}}$ is the number approached by $2^{1.4}$, $2^{1.41}$, $2^{1.414}$ and so on. *All* the properties of powers remain valid, and the result is **always positive**: $a^x > 0$ for every real $x$. The exponential function, treated in the chapter on elementary functions, is built on this definition.
:::

## Rationalization

:::definizione{#razionalizzazione titolo="Rationalization"}
**Rationalizing** a fraction means rewriting it with a denominator free of roots, by multiplying numerator and denominator by the same factor, chosen so that the denominator becomes rational. The three typical cases:

- single root: one multiplies by the root itself, because $\sqrt{a} \cdot \sqrt{a} = a$; for example $\dfrac{1}{\sqrt{3}} = \dfrac{\sqrt{3}}{3}$;
- binomial with square roots: one multiplies by the **conjugate binomial**, because $(\sqrt{a} - \sqrt{b})(\sqrt{a} + \sqrt{b}) = a - b$; for example $\dfrac{1}{\sqrt{5} - \sqrt{3}} = \dfrac{\sqrt{5} + \sqrt{3}}{2}$;
- cube root: one multiplies by the factor that completes the cube under the root, that is, $\sqrt[3]{a^2}$ for $\sqrt[3]{a}$; for example $\dfrac{1}{\sqrt[3]{2}} = \dfrac{\sqrt[3]{4}}{2}$.

Rationalization is used to add and compare fractions with roots and returns in limits with differences of roots, treated in the chapter on limits.
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

## Comparison of powers and of roots

:::teorema{#confronto-tra-potenze titolo="Comparison of powers"}
To compare two powers one distinguishes according to the base and the exponent:

- same base $a > 1$: the power **increases** as the exponent increases, therefore $x < y \Rightarrow a^x < a^y$; for example $2^3 < 2^5$;
- same base $0 < a < 1$: the power **decreases** as the exponent increases, therefore $x < y \Rightarrow a^x > a^y$; for example $\left(\dfrac{1}{2}\right)^3 > \left(\dfrac{1}{2}\right)^5$;
- same exponent $x > 0$ and bases $0 < a < b$: $a^x < b^x$ holds; for example $3^4 < 5^4$. With a negative exponent the inequality is **reversed**: $3^{-1} > 5^{-1}$, because $\dfrac{1}{3} > \dfrac{1}{5}$;
- different bases and exponents: with the power of a power the powers are rewritten with the same base or with the same exponent; for example $2^{30} = (2^3)^{10} = 8^{10}$ and $3^{20} = (3^2)^{10} = 9^{10}$, therefore $2^{30} < 3^{20}$.

::grafico{f="2^x;0.5^x" xmin=-3.5 xmax=3.5 ymin=-1 ymax=9 etichette="1.6,6.5,y = 2ˣ" titolo="$y = 2^x$ increases as the exponent increases (base greater than $1$), $y = \left(\dfrac{1}{2}\right)^x$ (dashed) decreases (base between $0$ and $1$); both are positive for every $x$"}

:::

:::teorema{#confronto-tra-radici titolo="Comparison of roots"}
Roots with the same index are compared through their **radicands**: for $0 \leq a < b$, $\sqrt[n]{a} < \sqrt[n]{b}$ holds. Roots with different indices are brought to the same index with the **invariance property**, using the **least common multiple** of the indices as the common index.
$$
\sqrt{3} = \sqrt[6]{3^3} = \sqrt[6]{27}, \qquad
\sqrt[3]{5} = \sqrt[6]{5^2} = \sqrt[6]{25},
\qquad\text{therefore}\quad \sqrt{3} > \sqrt[3]{5} .
$$
With this method any list of roots can be ordered, as in the ordering exercises.
:::
