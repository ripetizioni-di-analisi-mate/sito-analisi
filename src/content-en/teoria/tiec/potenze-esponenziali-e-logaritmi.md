---
titolo: Powers, exponentials, and logarithms
sommario: Rules for powers and roots, scientific notation, comparing powers, exponential and logarithmic functions, and the exponential and logarithmic equations and inequalities that appear on the TIEC.
---

## Powers with integer exponents

:::definizione{#potenza titolo="Powers with positive integer exponents"}
Given a real number $a$ and a natural number $n \geq 1$, the **power** $a^n$ is the product of $n$ factors, each equal to $a$:
$$
a^n = \underbrace{a \cdot a \cdot \ldots \cdot a}_{n \text{ factors}} .
$$
The number $a$ is called the **base** and $n$ is called the **exponent**. For example, $2^5 = 2 \cdot 2 \cdot 2 \cdot 2 \cdot 2 = 32$ and $(-3)^3 = (-3) \cdot (-3) \cdot (-3) = -27$. A power with a negative base is positive if the exponent is even and negative if the exponent is odd, because each pair of negative factors has a positive product. Thus $(-2)^4 = 16$, whereas $(-2)^5 = -32$.
:::

:::definizione{#esponente-zero-e-negativo titolo="Zero and negative exponents"}
For every real number $a \neq 0$ and every natural number $n$, we define
$$
a^0 = 1,
\qquad
a^{-n} = \frac{1}{a^n} .
$$
These two definitions ensure that the rules for powers also hold for these exponents. The quotient $\dfrac{a^3}{a^3}$ equals $1$, and subtracting the exponents gives $a^{3-3} = a^0$. Therefore $a^0$ must equal $1$. A negative exponent gives the reciprocal of the corresponding power:
$$
2^{-3} = \frac{1}{2^3} = \frac{1}{8},
\qquad
\left( \frac{2}{5} \right)^{-2} = \left( \frac{5}{2} \right)^{2} = \frac{25}{4} .
$$
A minus sign in the exponent does not reverse the sign of the result. Indeed, $2^{-3}$ is positive.
:::

:::teorema{#proprieta-potenze titolo="Rules for powers"}
The following identities hold for any two nonzero real numbers $a$, $b$ and any two integers $m$, $n$.

- Product of powers with the same base: $a^m \cdot a^n = a^{m+n}$.
- Quotient of powers with the same base: $\dfrac{a^m}{a^n} = a^{m-n}$.
- Power of a power: $\left(a^m\right)^n = a^{m \cdot n}$.
- Power of a product and of a quotient: $(a\,b)^n = a^n\, b^n$ and $\left(\dfrac{a}{b}\right)^n = \dfrac{a^n}{b^n}$.

The rules follow by counting factors. In $a^3 \cdot a^2$ there are $3 + 2 = 5$ factors equal to $a$, and in $\left(a^3\right)^2$ there are two groups of $3$ factors, for a total of $6$. The rules simplify expressions by allowing us to write all the numbers as powers of the same base:
$$
\frac{4^3 \cdot 8}{2^5} = \frac{2^6 \cdot 2^3}{2^5} = 2^{6 + 3 - 5} = 2^4 = 16 .
$$
:::

:::attenzione
There is *no* rule for a sum of powers analogous to the product rule. For example, $2^3 + 2^3 = 16$, whereas $2^{3+3} = 64$. We can simplify a sum of equal powers by factoring, as in $2^3 + 2^3 = 2 \cdot 2^3 = 2^4$, and similarly $5^{8} + 5^{8} + 5^{8} + 5^{8} + 5^{8} = 5 \cdot 5^{8} = 5^{9}$.

The following pairs of expressions also represent different numbers:
- We have $-2^2 = -4$ because the exponent applies only to $2$, whereas $(-2)^2 = 4$.
- We have $\left(2^3\right)^2 = 2^6 = 64$, whereas $2^{3^2} = 2^9 = 512$, because in the second expression the exponent $3^2 = 9$ is calculated first.
:::

## Roots and powers with rational exponents

:::definizione{#radice titolo="The nth root"}
Let $n \geq 2$ be a natural number. For $a \geq 0$, the **$n$th root** of $a$, written $\sqrt[n]{a}$, is the unique number $b \geq 0$ such that $b^n = a$. The number $n$ is called the **index** of the root. For $n = 2$, we write $\sqrt{a}$. For example, $\sqrt[3]{8} = 2$ because $2^3 = 8$, and $\sqrt[4]{81} = 3$ because $3^4 = 81$. A root recovers the base when the power and exponent are known.

- If $n$ is odd, the root is also defined for $a < 0$ and is negative: $\sqrt[3]{-27} = -3$.
- If $n$ is even and $a < 0$, the root does not exist in the real numbers, because a power with an even exponent is never negative.

For the same reason, $\sqrt{x^2} = |x|$. For example, $\sqrt{(-5)^2} = \sqrt{25} = 5$.
:::

:::definizione{#esponente-razionale titolo="Powers with fractional exponents"}
For $a > 0$ and two integers $m$ and $n$ with $n \geq 2$, we define
$$
a^{\frac{m}{n}} = \sqrt[n]{a^m} = \left( \sqrt[n]{a} \right)^m .
$$
This definition preserves the rules for powers. Since $\left( a^{\frac{1}{n}} \right)^n = a^{\frac{1}{n} \cdot n} = a$, the number $a^{\frac{1}{n}}$ must be the $n$th root of $a$. The calculation is shorter if we take the root first and then raise it to the required power:
$$
8^{\frac{2}{3}} = \left( \sqrt[3]{8} \right)^2 = 2^2 = 4,
\qquad
16^{-\frac{3}{4}} = \frac{1}{\left( \sqrt[4]{16} \right)^3} = \frac{1}{2^3} = \frac{1}{8} .
$$
Writing roots as powers allows us to use the rules for powers for all calculations involving roots.
:::

:::teorema{#proprieta-radici titolo="Rules for roots"}
For $a, b > 0$ and natural numbers $n, k \geq 2$, the following identities hold.

- Root of a product and of a quotient: $\sqrt[n]{a\,b} = \sqrt[n]{a}\,\sqrt[n]{b}$ and $\sqrt[n]{\dfrac{a}{b}} = \dfrac{\sqrt[n]{a}}{\sqrt[n]{b}}$.
- Root of a root: $\sqrt[k]{\sqrt[n]{a}} = \sqrt[k \cdot n]{a}$.
- Multiplying the index and exponent by the same factor: $\sqrt[n]{a^m} = \sqrt[n \cdot k]{a^{m \cdot k}}$.

These are the rules for powers written with fractional exponents. For example, $\sqrt[3]{\sqrt{a}} = \left( a^{\frac{1}{2}} \right)^{\frac{1}{3}} = a^{\frac{1}{6}} = \sqrt[6]{a}$. They can be used to simplify roots and to multiply roots with different indices:
$$
\sqrt{12} = \sqrt{4 \cdot 3} = 2\sqrt{3},
\qquad
\sqrt{2} \cdot \sqrt[3]{2} = 2^{\frac{1}{2} + \frac{1}{3}} = 2^{\frac{5}{6}} = \sqrt[6]{32} .
$$
:::

:::attenzione
The root of a sum is *not* the sum of the roots. For example, $\sqrt{9 + 16} = \sqrt{25} = 5$, whereas $\sqrt{9} + \sqrt{16} = 3 + 4 = 7$.
:::

## Scientific notation and comparing powers

:::definizione{#notazione-scientifica titolo="Scientific notation"}
A positive number is written in **scientific notation** when it has the form
$$
k \cdot 10^n
\qquad\text{with}\qquad
1 \leq k < 10
\quad\text{and}\quad
n \text{ is an integer} .
$$
The coefficient $k$ has only one digit before the decimal point, and that digit is nonzero. The exponent $n$ tells us how many places to move the decimal point. For example, $45\,000 = 4.5 \cdot 10^4$ and $0.0032 = 3.2 \cdot 10^{-3}$. This notation is used to write very large or very small numbers and to calculate using the rules for powers, treating the coefficients and the powers of $10$ separately:
$$
\frac{3.6 \cdot 10^{9}}{1.2 \cdot 10^{4}} = \frac{3.6}{1.2} \cdot 10^{9-4} = 3 \cdot 10^{5} .
$$
:::

:::osservazione{#riduzione-notazione-scientifica titolo="Bringing the coefficient back into the range from 1 to 10"}
After multiplication or division, the coefficient may be less than $1$ or greater than or equal to $10$. In this case, move the decimal point in the coefficient and adjust the exponent. Increase it by $1$ for every place the point moves left and decrease it by $1$ for every place it moves right. For example,
$$
(4 \cdot 10^{5}) \cdot (5 \cdot 10^{-2}) = 20 \cdot 10^{3} = 2 \cdot 10^{4},
\qquad
\frac{2 \cdot 10^{6}}{5 \cdot 10^{2}} = 0.4 \cdot 10^{4} = 4 \cdot 10^{3} .
$$
The value of the number is unchanged because the coefficient is divided by $10$ and the power is multiplied by $10$, or vice versa.
:::

:::teorema{#confronto-potenze titolo="Comparing powers"}
Powers with positive bases and positive exponents can be compared directly in two cases.

- With the same base $a > 1$, the larger exponent gives the larger power, so $3^{12} > 3^{10}$. If the base lies between $0$ and $1$, the order is reversed: $\left( \dfrac{1}{2} \right)^{5} < \left( \dfrac{1}{2} \right)^{3}$.
- With the same exponent $n > 0$, the larger base gives the larger power, so $5^{7} > 4^{7}$.

When both the bases and the exponents differ, the rules for powers allow us to reduce the comparison to one of these two cases. To compare $2^{30}$ and $3^{20}$, write both powers with exponent $10$:
$$
2^{30} = \left( 2^3 \right)^{10} = 8^{10},
\qquad
3^{20} = \left( 3^2 \right)^{10} = 9^{10},
$$
so $2^{30} < 3^{20}$. To compare $4^{15}$ and $8^{11}$, write both powers with base $2$, obtaining $4^{15} = 2^{30}$ and $8^{11} = 2^{33}$. Therefore $4^{15} < 8^{11}$.
:::

## The exponential function

:::definizione{#funzione-esponenziale titolo="The exponential function"}
For a fixed real number $a > 0$ with $a \neq 1$, the **exponential function** with base $a$ is
$$
y = a^x ,
$$
defined for every real $x$. The base must be positive because for $a < 0$ powers such as $a^{\frac{1}{2}}$ are undefined over the reals. It must also be different from $1$ because $1^x = 1$ for every $x$. For every admissible base, the graph has three properties.

- It passes through $(0;1)$, since $a^0 = 1$, and also through $(1;a)$.
- It lies entirely above the $x$ axis because $a^x > 0$ for all $x$.
- At one end of the graph the curve approaches the $x$ axis without touching it, so the $x$ axis is a **horizontal asymptote**.

The exponential function describes quantities that are multiplied by the same factor over equal time intervals. An investment growing at $10\%$ per year, with the interest added to the principal each year, is multiplied by $1.1$ each year. Therefore an initial investment of $C$ is worth $C \cdot 1.1^{x}$ after $x$ years.
:::

:::teorema{#monotonia-esponenziale titolo="Increasing and decreasing exponential functions"}
The function $y = a^x$ is increasing or decreasing depending on its base.

- If $a > 1$, the function is **increasing**: a larger exponent gives a larger power.
- If $0 < a < 1$, the function is **decreasing**: a larger exponent gives a smaller power.

In both cases the function takes different values at different points, so
$$
a^{u} = a^{v} \iff u = v .
$$
The graphs of $y = 2^x$ and $y = \left( \dfrac{1}{2} \right)^x$ are reflections of each other across the $y$ axis because $\left( \dfrac{1}{2} \right)^x = 2^{-x}$. These two properties allow us to solve exponential equations and inequalities.

::grafico{f="2^x;0.5^x" xmin=-3.5 xmax=3.5 ymin=-0.5 ymax=9 punti="0,1,pieno;1,2,pieno;-1,2,pieno" asintoti="y=0" legenda="y = 2^x;y = \left(\frac{1}{2}\right)^x" titolo="$y = 2^x$ is increasing and $y = \left(\dfrac{1}{2}\right)^x$ is decreasing. Both graphs pass through $(0;1)$ and are reflections of each other across the $y$ axis"}

:::

:::osservazione{#confronto-basi titolo="Comparing exponential functions with different bases"}
If $1 < a < b$, then $a^x < b^x$ for $x > 0$ and $a^x > b^x$ for $x < 0$, while for $x = 0$ both powers equal $1$. For example, $2^{3} = 8 < 27 = 3^{3}$, whereas $2^{-1} = \dfrac{1}{2}$ is greater than $3^{-1} = \dfrac{1}{3}$. This is the rule for comparing powers with the same exponent, as seen on the graph. To the right of the $y$ axis the graph of $3^x$ lies above that of $2^x$, and to the left it lies below.

::grafico{f="2^x;3^x" xmin=-3.5 xmax=3 ymin=-0.5 ymax=9 punti="0,1,pieno;1,2,pieno;1,3,pieno" segmenti="1,0,1,3" asintoti="y=0" legenda="y = 2^x;y = 3^x" titolo="For $x > 0$ the graph of $y = 3^x$ lies above that of $y = 2^x$. For $x < 0$ it lies below"}

:::

## Logarithms

:::definizione{#logaritmo titolo="Logarithms"}
Let $a > 0$ with $a \neq 1$, and let $b > 0$. The **logarithm of $b$ to base $a$**, written $\log_a b$, is the exponent to which $a$ must be raised to obtain $b$:
$$
\log_a b = c \iff a^c = b .
$$
The number $a$ is called the **base** and $b$ the **argument**. For example, $\log_2 8 = 3$ because $2^3 = 8$, $\log_{10} 0.01 = -2$ because $10^{-2} = 0.01$, and $\log_3 \sqrt{3} = \dfrac{1}{2}$ because $3^{\frac{1}{2}} = \sqrt{3}$. A logarithm allows us to find an unknown exponent. The equation $2^x = 8$ has solution $x = 3$, which can be found mentally. The equation $2^x = 5$ has solution $x = \log_2 5$, a number between $2$ and $3$ because $2^2 < 5 < 2^3$.
:::

:::teorema{#condizioni-esistenza-logaritmo titolo="Conditions for a logarithm to be defined"}
The logarithm $\log_a b$ is defined if and only if the following three conditions hold simultaneously:
$$
\begin{cases}
b > 0 \\
a > 0 \\
a \neq 1
\end{cases}
$$
The condition on the argument follows from the fact that a power with a positive base is always positive. No exponent can therefore give $0$ or a negative number, so $\log_2 0$ and $\log_2 (-4)$ are undefined. In equations and inequalities the argument often contains the unknown, and the domain condition becomes an inequality. For example, $\log_3 (x - 2)$ is defined when $x - 2 > 0$, or $x > 2$.
:::

:::teorema{#valori-notevoli-logaritmo titolo="Special values of logarithms"}
For every base $a > 0$ with $a \neq 1$, the following identities hold:
$$
\log_a 1 = 0,
\qquad
\log_a a = 1,
\qquad
\log_a a^n = n,
\qquad
a^{\log_a b} = b \quad (b > 0) .
$$
The first three equalities express $a^0 = 1$, $a^1 = a$, and $a^n = a^n$ in logarithmic form. The last says that $\log_a b$ is precisely the exponent to which we raise $a$ to obtain $b$. These identities allow us to evaluate logarithms mentally when the argument is a power of the base:
$$
\log_5 125 = \log_5 5^3 = 3,
\qquad
\log_2 \frac{1}{16} = \log_2 2^{-4} = -4,
\qquad
\log_{\frac{1}{3}} 9 = -2 ,
$$
where the last value follows from $\left( \dfrac{1}{3} \right)^{-2} = 3^2 = 9$.
:::

:::definizione{#funzione-logaritmica titolo="The logarithmic function"}
For $a > 0$ with $a \neq 1$, the **logarithmic function** $y = \log_a x$ is defined for $x > 0$. Its graph is the reflection of the graph of $y = a^x$ across the line $y = x$, since the point $(u;v)$ lies on the graph of $y = a^x$ if and only if the point $(v;u)$ lies on the graph of $y = \log_a x$. The properties of the logarithm follow from those of the exponential function.

- The graph passes through $(1;0)$ and $(a;1)$ and lies entirely to the right of the $y$ axis. The $y$ axis is a **vertical asymptote**.
- If $a > 1$, the function is increasing. If $0 < a < 1$, it is decreasing.
- If $a > 1$, the logarithm is negative for $0 < x < 1$ and positive for $x > 1$. If $0 < a < 1$, the signs are reversed.

The sign of a logarithm can therefore be found without evaluating it. For example, $\log_3 0.5 < 0$ because the base is greater than $1$ and the argument is less than $1$, whereas $\log_{\frac{1}{2}} 5 < 0$ because the base is less than $1$ and the argument is greater than $1$.

::grafico{f="2^x;log(x)/log(2);x" xmin=-3 xmax=6 ymin=-3 ymax=6 uguale=1 punti="0,1,pieno;1,0,pieno;1,2,pieno;2,1,pieno" legenda="y = 2^x;y = \log_2 x;y = x" titolo="The graph of $y = \log_2 x$ is the reflection of the graph of $y = 2^x$ across the line $y = x$, and the point $(1;2)$ corresponds to $(2;1)$"}

::grafico{f="log(x)/log(2);log(x)/log(0.5)" xmin=-0.5 xmax=8.5 ymin=-3.5 ymax=3.5 punti="1,0,pieno;2,1,pieno;2,-1,pieno" asintoti="x=0" legenda="y = \log_2 x;y = \log_{\frac{1}{2}} x" titolo="$y = \log_2 x$ is increasing and $y = \log_{\frac{1}{2}} x$ is decreasing. Both are defined for $x > 0$ and equal $0$ at $x = 1$"}

:::

## Logarithm rules

:::teorema{#proprieta-logaritmi titolo="Logarithm rules"}
The following identities hold for any base $a > 0$ with $a \neq 1$, any arguments $b > 0$ and $c > 0$, and any real exponent $n$.

- Logarithm of a product: $\log_a (b\,c) = \log_a b + \log_a c$.
- Logarithm of a quotient: $\log_a \dfrac{b}{c} = \log_a b - \log_a c$.
- Logarithm of a power: $\log_a b^n = n \log_a b$.

These are the rules for powers expressed in terms of exponents. If $b = a^u$ and $c = a^v$, then $b\,c = a^{u+v}$, so the exponent of the product is the sum of the exponents. These rules allow us to combine several logarithms with the same base into one:
$$
\log_6 4 + \log_6 9 = \log_6 36 = 2,
\qquad
\log_2 40 - \log_2 5 = \log_2 8 = 3,
\qquad
\log_3 \sqrt[4]{27} = \frac{1}{4} \log_3 27 = \frac{3}{4} .
$$
:::

:::attenzione
The logarithm of a sum is *not* the sum of the logarithms. For example, $\log_2 (4 + 4) = \log_2 8 = 3$, whereas $\log_2 4 + \log_2 4 = 4$. Similarly, dividing two logarithms differs from taking the logarithm of the quotient. For example, $\dfrac{\log_2 8}{\log_2 2} = \dfrac{3}{1} = 3$, whereas $\log_2 \dfrac{8}{2} = \log_2 4 = 2$.
:::

::::teorema{#cambio-di-base titolo="The change-of-base formula"}
For $a > 0$ and $c > 0$, both different from $1$, and for $b > 0$, we have
$$
\log_a b = \frac{\log_c b}{\log_c a} .
$$
This formula allows us to write any logarithm using a convenient base, such as base $10$ on a calculator, and to compare logarithms with different bases. For example,
$$
\log_8 32 = \frac{\log_2 32}{\log_2 8} = \frac{5}{3} .
$$
Choosing $c = b$ gives the special case $\log_a b = \dfrac{1}{\log_b a}$. For example, $\log_4 8 = \dfrac{3}{2}$ and $\log_8 4 = \dfrac{2}{3}$.

:::dimostrazione
Let $x = \log_a b$, or equivalently $a^{x} = b$. Taking $\log_c$ of both sides and using the logarithm of a power gives $x \log_c a = \log_c b$. Since $a \neq 1$, we have $\log_c a \neq 0$, so $x = \dfrac{\log_c b}{\log_c a}$.
:::
::::

## Exponential equations and inequalities

:::teorema{#equazioni-stessa-base titolo="Equations that can be rewritten with the same base"}
An **exponential equation** contains the unknown in the exponent. If both sides can be written as powers of the same base $a$ with $a > 0$ and $a \neq 1$, we can equate the exponents:
$$
a^{f(x)} = a^{g(x)} \iff f(x) = g(x) .
$$
The rule holds because the exponential function takes different values at different points. For example,
$$
\begin{aligned}
4^{x+1} = 8^{x}
&\iff 2^{2x+2} = 2^{3x} \\[6pt]
&\iff 2x + 2 = 3x \\[6pt]
&\iff x = 2 .
\end{aligned}
$$
When powers with the same base have exponents that differ by a constant, factor out the power with the smaller exponent. In the equation $2^{x+1} + 2^{x} = 24$, we have $2^{x+1} = 2 \cdot 2^{x}$, so $3 \cdot 2^{x} = 24$, giving $2^x = 8$ and $x = 3$.
:::

:::teorema{#equazioni-esponenziali-elementari titolo="Elementary exponential equations"}
For $a > 0$ with $a \neq 1$, the solutions of $a^{x} = b$ depend on the sign of $b$.

- If $b > 0$, the equation has just one solution, $x = \log_a b$.
- If $b \leq 0$, the equation has no solutions, because $a^x$ is always positive.

For example, the equation $2^{x} = 5$ has solution $x = \log_2 5$, whereas the equation $2^{x} = -1$ **has no solutions**. On the graph, the solution is the horizontal coordinate of the point where the horizontal line $y = b$ meets the graph of $y = a^x$.

::grafico{f="2^x;5;-1" xmin=-3 xmax=3.5 ymin=-2 ymax=8 punti="2.3219,5,pieno" segmenti="2.3219,0,2.3219,5" etichette="2.4,0.6,x = log₂ 5" legenda="y = 2^x;y = 5;y = -1" titolo="The line $y = 5$ intersects $y = 2^x$ at the point with $\log_2 5$ as its x-coordinate, between $2$ and $3$. The line $y = -1$ does not intersect the graph"}

:::

:::teorema{#cambio-di-variabile titolo="Equations involving a change of variable"}
When an equation contains $a^{x}$ and $a^{2x} = \left( a^x \right)^2$, set $t = a^{x}$ to obtain a quadratic equation in $t$. Since $a^x$ is positive, keep only the solutions $t > 0$, then return to the original variable $x$. For example, in the equation
$$
9^{x} - 2 \cdot 3^{x} - 3 = 0
$$
set $t = 3^{x}$. Then $9^x = t^2$, and the equation becomes
$$
t^2 - 2t - 3 = 0
\iff
t = 3
\;\vee\;
t = -1 .
$$
Discard $t = -1$, since $3^x = -1$ is impossible. From $3^x = 3$ it follows that $x = 1$, the only solution.
:::

:::teorema{#disequazioni-esponenziali titolo="Exponential inequalities"}
For $a > 0$ with $a \neq 1$, an inequality between two powers with the same base can be written as an inequality between their exponents.

- If $a > 1$, then $a^{f(x)} > a^{g(x)} \iff f(x) > g(x)$, and the inequality sign stays the same.
- If $0 < a < 1$, then $a^{f(x)} > a^{g(x)} \iff f(x) < g(x)$, and the inequality sign reverses.

This rule follows from the monotonicity of the exponential function. An increasing function preserves order, and a decreasing function reverses it. For example,
$$
3^{x-1} > 9
\iff
3^{x-1} > 3^2
\iff
x - 1 > 2
\iff
x > 3 ,
$$
$$
\left( \frac{1}{2} \right)^{x} \geq 8
\iff
\left( \frac{1}{2} \right)^{x} \geq \left( \frac{1}{2} \right)^{-3}
\iff
x \leq -3 .
$$

::grafico{f="0.5^x;8" xmin=-5 xmax=3 ymin=-1 ymax=12 punti="-3,8,pieno" segmenti="-3,0,-3,8" asintoti="y=0" legenda="y = \left(\frac{1}{2}\right)^x;y = 8" titolo="The graph of $y = \left(\dfrac{1}{2}\right)^x$ lies on or above the line $y = 8$ precisely when $x \leq -3$"}

:::

:::osservazione{#disequazioni-sempre-vere titolo="Inequalities that always hold or have no solution"}
Since $a^x > 0$ for every $x$, some exponential inequalities can be solved without any calculations. The inequality $2^{x} > -3$ holds for every real $x$, while the inequality $2^{x} < 0$ has no solution.
:::

## Logarithmic equations and inequalities

:::teorema{#equazioni-logaritmiche titolo="Logarithmic equations"}
A **logarithmic equation** contains the unknown in the argument of a logarithm. Solve it in three steps.

1. Write the domain restrictions by requiring every argument to be positive.
2. Use the properties of logarithms to reduce the equation to the form $\log_a f(x) = \log_a g(x)$ or $\log_a f(x) = c$.
3. Solve $f(x) = g(x)$ or $f(x) = a^c$ and keep only the solutions that satisfy the domain restrictions.

The third step works because the logarithm also takes different values at different points. For example, in the equation $\log_2 x + \log_2 (x - 2) = 3$, the domain restrictions are
$$
\begin{cases}
x > 0 \\
x - 2 > 0
\end{cases}
\iff
x > 2 .
$$
By the product rule for logarithms, the equation becomes $\log_2 \left( x^2 - 2x \right) = 3$, so
$$
x^2 - 2x = 2^3
\iff
x^2 - 2x - 8 = 0
\iff
x = 4
\;\vee\;
x = -2 .
$$
Only $x = 4$ satisfies the condition $x > 2$, so the equation has the unique solution $x = 4$.
:::

:::attenzione
Write the domain restrictions for the original equation before applying the properties of logarithms. The transformed equation $\log_2 \left( x^2 - 2x \right) = 3$ also has the solution $x = -2$, since $(-2)^2 - 2 \cdot (-2) = 8 > 0$. The original equation, however, is *not* defined at $x = -2$ because it contains $\log_2 (-2)$.
:::

:::teorema{#disequazioni-logaritmiche titolo="Logarithmic inequalities"}
For $a > 0$ with $a \neq 1$, the following equivalences hold for values of $x$ for which $f(x) > 0$ and $g(x) > 0$.

- If $a > 1$, then $\log_a f(x) > \log_a g(x) \iff f(x) > g(x)$.
- If $0 < a < 1$, then $\log_a f(x) > \log_a g(x) \iff f(x) < g(x)$.

The solutions must satisfy both the domain restrictions and the inequality between the arguments, so solve a system of inequalities. For example, writing $2 = \log_3 3^2$ gives
$$
\log_3 (x - 1) < 2
\iff
\begin{cases}
x - 1 > 0 \\
x - 1 < 3^2
\end{cases}
\iff
\begin{cases}
x > 1 \\
x < 10
\end{cases}
\iff
1 < x < 10 .
$$
With a base less than $1$, the inequality sign reverses. Thus $\log_{\frac{1}{2}} x > -2$ is equivalent to the system consisting of $x > 0$ and $x < \left( \dfrac{1}{2} \right)^{-2} = 4$, so the solutions are $0 < x < 4$.

::grafico{f="log(x-1)/log(3);2" xmin=-1 xmax=12 ymin=-3 ymax=3.5 punti="10,2,vuoto;2,0,pieno" segmenti="10,0,10,2" asintoti="x=1" legenda="y = \log_3 (x - 1);y = 2" titolo="The graph of $y = \log_3 (x - 1)$ is defined for $x > 1$ and lies below the line $y = 2$ for $1 < x < 10$"}

:::

## Shortcuts for multiple-choice questions

:::osservazione{#metodi-rapidi titolo="Substitution and domain restrictions"}
You can solve many equations in four-choice questions more quickly by testing the proposed answers.

- **Substitute the answer choices.** For the equation $2^{x+1} + 2^{x} = 24$, choice $x = 3$ gives $2^4 + 2^3 = 16 + 8 = 24$. The check takes only a few seconds.
- **Eliminate choices using the domain restrictions.** In the equation $\log_5 (x - 3) = 1$, any choice with $x \leq 3$ is incorrect because it makes the argument zero or negative.
- **Check the sign.** A power with a positive base is always positive, and a logarithm with a base greater than $1$ is negative for arguments between $0$ and $1$. You can rule out a choice with the wrong sign without doing any calculations.
- *Check the direction of the inequality.* In inequalities with a base less than $1$, the choices often include both the correct interval and the one obtained by failing to reverse the inequality sign. Test a value in the interval. For $\left( \dfrac{1}{2} \right)^x \geq 8$, the value $x = -4$ gives $16 \geq 8$, so the solutions lie to the left of $-3$.
:::

:::osservazione{#stime-logaritmi titolo="Estimating powers and logarithms"}
You can distinguish many answer choices by estimating the order of magnitude.

- **Bounding a logarithm between two integers.** Since $2^{4} = 16 < 20 < 32 = 2^{5}$ and the function $\log_2 x$ is increasing, it follows that $4 < \log_2 20 < 5$.
- **Logarithms with base $10$.** You only need the values $\log_{10} 2 \approx 0.30$ and $\log_{10} 3 \approx 0.48$. For example, the properties of logarithms give $\log_{10} 6 = \log_{10} 2 + \log_{10} 3 \approx 0.78$ and $\log_{10} 5 = \log_{10} 10 - \log_{10} 2 \approx 0.70$.
- **Powers of $2$.** Since $2^{10} = 1024 \approx 10^{3}$, it follows that $2^{20} \approx 10^{6}$ and $2^{30} \approx 10^{9}$.
- *Same base or same exponent.* To compare powers, rewrite them with the same base or the same exponent. For products of very large or very small numbers, use scientific notation.
:::
