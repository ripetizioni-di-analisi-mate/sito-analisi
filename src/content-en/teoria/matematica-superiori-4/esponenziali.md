---
titolo: Powers, exponential functions and exponential equations
sommario: How powers with integer, rational and real exponents are defined, which properties the exponential function has and how to sketch its transformed graphs, how to solve exponential equations and inequalities, and how exponential functions describe the growth of an investment or a population and the decay of a radioactive substance.
---

## Powers with integer and rational exponents

:::definizione{#potenza-esponente-intero titolo="Powers with integer exponents"}
Let $a$ be a real number and $n$ a natural number with $n \geq 1$. The **power** $a^n$ is the product of $n$ factors equal to $a$. The number $a$ is called the **base**, and $n$ is called the **exponent**. For example, $2^5 = 2 \cdot 2 \cdot 2 \cdot 2 \cdot 2 = 32$.

To extend the definition to the exponent $0$ and to negative exponents, we choose a definition that preserves the quotient rule $\dfrac{a^m}{a^n} = a^{m - n}$. The quotient $\dfrac{a^3}{a^3}$ equals $1$, and the rule would give $a^{3 - 3} = a^0$. The quotient $\dfrac{a^2}{a^5}$ equals $\dfrac{1}{a^3}$, and the rule would give $a^{-3}$. Therefore, for $a \neq 0$ and a natural number $n$, we define
$$
a^0 = 1 ,
\qquad
a^{-n} = \frac{1}{a^n} .
$$
For example, $2^{-3} = \dfrac{1}{8}$ and $\left( \dfrac{2}{3} \right)^{-2} = \left( \dfrac{3}{2} \right)^2 = \dfrac{9}{4}$. The expressions $0^0$ and $0^{-n}$ are undefined because they would require division by $0$.
:::

:::teorema{#proprieta-potenze titolo="Exponent laws"}
Let $a$ and $b$ be real numbers different from $0$, and let $m$ and $n$ be integers. Then
$$
a^m \cdot a^n = a^{m + n} ,
\qquad
\frac{a^m}{a^n} = a^{m - n} ,
\qquad
\left( a^m \right)^n = a^{m n} ,
$$
$$
(a b)^n = a^n b^n ,
\qquad
\left( \frac{a}{b} \right)^n = \frac{a^n}{b^n} .
$$
These laws let us write different numbers as powers with the same base. This is the first step in solving many exponential equations. For example, since $4 = 2^2$ and $8 = 2^3$,
$$
\frac{2^5 \cdot 4^{-1}}{8^2} = \frac{2^5 \cdot 2^{-2}}{2^6} = 2^{5 - 2 - 6} = 2^{-3} = \frac{1}{8} .
$$
:::

:::attenzione
The laws apply to products and quotients of powers. There is no corresponding rule for the sum of two powers, and in general $a^m + a^n \neq a^{m + n}$. For example, $2^3 + 2^2 = 8 + 4 = 12$, whereas $2^5 = 32$.

Likewise, $-2^2$ and $(-2)^2$ are different numbers. In the first expression the exponent applies only to $2$, so $-2^2 = -4$. In the second it applies to the number $-2$, so $(-2)^2 = 4$.
:::

:::definizione{#potenza-esponente-razionale titolo="Powers with rational exponents"}
We want to give expressions such as $8^{\frac{1}{3}}$ a meaning that preserves the rule $\left( a^m \right)^n = a^{mn}$. We would need $\left( 8^{\frac{1}{3}} \right)^3 = 8^1 = 8$, so $8^{\frac{1}{3}}$ is the positive number whose cube equals $8$, namely $\sqrt[3]{8} = 2$.

Let $a > 0$, let $m$ be an integer, and let $n$ be a natural number with $n \geq 2$. We define
$$
a^{\frac{m}{n}} = \sqrt[n]{a^m} = \left( \sqrt[n]{a} \right)^m .
$$
For example,
$$
8^{\frac{2}{3}} = \left( \sqrt[3]{8} \right)^2 = 4 ,
\qquad
16^{-\frac{3}{4}} = \frac{1}{\left( \sqrt[4]{16} \right)^3} = \frac{1}{8} .
$$
The value of the power depends only on the rational number, regardless of the fraction used to represent it. For example, $4^{\frac{2}{4}} = \sqrt[4]{16} = 2$ and $4^{\frac{1}{2}} = \sqrt{4} = 2$. With a positive base, the exponent laws also hold for rational exponents.
:::

:::attenzione
For powers with rational exponents we take the base to be positive. If we allowed a negative base, the same power could have two different values. The expression $\dfrac{1}{3}$ would give $(-8)^{\frac{1}{3}} = \sqrt[3]{-8} = -2$, whereas the equivalent expression $\dfrac{2}{6}$ would give $(-8)^{\frac{2}{6}} = \sqrt[6]{64} = 2$.
:::

:::esempio{titolo="Writing radicals as powers"}
Writing radicals as powers with rational exponents lets us multiply radicals with different indices using the exponent laws. For example,
$$
\sqrt{2} \cdot \sqrt[3]{2} = 2^{\frac{1}{2}} \cdot 2^{\frac{1}{3}} = 2^{\frac{1}{2} + \frac{1}{3}} = 2^{\frac{5}{6}} = \sqrt[6]{32} .
$$
Similarly, $\left( \sqrt[3]{9} \right)^{\frac{3}{2}} = \left( 9^{\frac{1}{3}} \right)^{\frac{3}{2}} = 9^{\frac{1}{2}} = 3$.
:::

## Powers with real exponents

:::definizione{#potenza-esponente-reale titolo="Powers with real exponents"}
The number $\sqrt{2}$ is irrational, so the expression $2^{\sqrt{2}}$ is outside our previous definitions. The idea is to approximate $\sqrt{2}$ by rational numbers from below and from above, and to calculate the powers of $2$ with these exponents.

| exponent approximated from below | power | exponent approximated from above | power |
| --- | --- | --- | --- |
| $1.4$ | $2^{1.4} \approx 2.639$ | $1.5$ | $2^{1.5} \approx 2.828$ |
| $1.41$ | $2^{1.41} \approx 2.657$ | $1.42$ | $2^{1.42} \approx 2.676$ |
| $1.414$ | $2^{1.414} \approx 2.6647$ | $1.415$ | $2^{1.415} \approx 2.6666$ |

The powers in the first column increase, those in the second decrease, and the gap between the two columns gets smaller and smaller. Exactly one number lies between all the powers in the first column and all those in the second. We call this number $2^{\sqrt{2}} \approx 2.665$.

In general, let $a > 1$ and let $x$ be an irrational number. The power $a^x$ is the unique real number greater than every power $a^r$ for rational $r$ less than $x$ and less than every power $a^s$ for rational $s$ greater than $x$. For $0 < a < 1$ the two inequalities are reversed, and for $a = 1$ we define $1^x = 1$.
:::

:::teorema{#proprieta-potenze-reali titolo="Exponent laws for real exponents"}
Suppose $a > 0$ and $b > 0$, and let $u$ and $v$ be real numbers. Then
$$
a^u \cdot a^v = a^{u + v} ,
\quad
\frac{a^u}{a^v} = a^{u - v} ,
\quad
\left( a^u \right)^v = a^{u v} ,
\quad
(a b)^u = a^u b^u ,
\quad
a^u > 0 .
$$
The laws are the same as for integer and rational exponents, so calculations with irrational exponents proceed in the same way. For example,
$$
\left( 3^{\sqrt{2}} \right)^{\sqrt{2}} = 3^{\sqrt{2} \cdot \sqrt{2}} = 3^2 = 9 ,
\qquad
5^{1 + \sqrt{3}} \cdot 5^{1 - \sqrt{3}} = 5^{2} = 25 .
$$
These laws follow from those for rational exponents by the approximations used in the definition. We omit the proof.
:::

::::teorema{#confronto-potenze titolo="Comparing powers with the same base"}
Let $u$ and $v$ be real numbers with $u < v$.
- If $a > 1$, then $a^u < a^v$.
- If $0 < a < 1$, then $a^u > a^v$.

The theorem lets us compare powers with the same base by comparing their exponents. Since $\sqrt{5} \approx 2.236 < 2.3$ and the base $3$ is greater than $1$, we have $3^{\sqrt{5}} < 3^{2.3}$. Since $\dfrac{1}{3} < \dfrac{1}{2}$ and the base $0.5$ is between $0$ and $1$, we instead have $0.5^{\frac{1}{3}} > 0.5^{\frac{1}{2}}$.

:::dimostrazione
We prove the theorem for rational exponents. The real case follows from the definition by approximation. The idea is to show that a power with base greater than $1$ and positive exponent is greater than $1$, and then to write $a^v$ as $a^u$ multiplied by such a power.

Let $a > 1$ and let $r = \dfrac{m}{n}$ be a positive rational number, with $m$ and $n$ natural numbers. The number $a^m$ is the product of $m$ factors greater than $1$, so $a^m > 1$. If $\sqrt[n]{a^m} \leq 1$, raising both sides to the power $n$ would give $a^m \leq 1$, which is false. Therefore $a^r = \sqrt[n]{a^m} > 1$.

Now let $u < v$. The number $v - u$ is positive, so $a^{v - u} > 1$. Multiplying both sides by the positive number $a^u$ gives
$$
a^v = a^u \cdot a^{v - u} > a^u \cdot 1 = a^u .
$$
If $0 < a < 1$, the base $\dfrac{1}{a}$ is greater than $1$ and we have $a^x = \left( \dfrac{1}{a} \right)^{-x}$. From $u < v$ it follows that $-u > -v$, so by the first case $\left( \dfrac{1}{a} \right)^{-u} > \left( \dfrac{1}{a} \right)^{-v}$, that is, $a^u > a^v$.
:::
::::

## The exponential function

:::definizione{#funzione-esponenziale titolo="Exponential function"}
Let $a$ be a real number with $a > 0$ and $a \neq 1$. The **exponential function** with base $a$ is the function
$$
f(x) = a^x ,
$$
that assigns to each real number $x$ the power with base $a$ and exponent $x$. We exclude the base $1$ because $1^x = 1$ for every $x$, which would give a constant function. For $a = 2$ some values are
$$
2^{-2} = \frac{1}{4} ,
\quad
2^{-1} = \frac{1}{2} ,
\quad
2^{0} = 1 ,
\quad
2^{1} = 2 ,
\quad
2^{2} = 4 ,
\quad
2^{3} = 8 .
$$
Each time $x$ increases by $1$, the value of the function is multiplied by $2$. This property distinguishes an exponential function from a linear function, for which each increase of $1$ in the variable adds a fixed amount to the function value.
:::

:::teorema{#proprieta-funzione-esponenziale titolo="Properties of the exponential function"}
Let $f(x) = a^x$ with $a > 0$ and $a \neq 1$.
- The domain is $\mathbb{R}$ and the range is $(0, +\infty)$. In particular, $a^x > 0$ for every $x$.
- The graph passes through the points $(0, 1)$ and $(1, a)$.
- If $a > 1$, the function is strictly increasing. If $0 < a < 1$, it is strictly decreasing.
- The $x$-axis, that is, the line $y = 0$, is a **horizontal asymptote**. This means that the graph approaches the line without touching it, to the left if $a > 1$ and to the right if $0 < a < 1$.

For example, $2^{-10} = \dfrac{1}{1024} \approx 0.001$, so at $x = -10$ the graph of $2^x$ is about one thousandth of a unit from the $x$-axis. Monotonicity follows from the theorem on comparing powers with the same base. We accept without proof that every positive number is a value of the function. This fact leads to the definition of the logarithm.

::grafico{f="2^x;0.5^x" punti="0,1,pieno;1,2,pieno;-1,2,pieno" xmin=-4 xmax=4 ymin=-1 ymax=8 legenda="y = 2^x;y = \left(\frac{1}{2}\right)^x" titolo="The graph of $2^x$ is increasing and that of $\left(\dfrac{1}{2}\right)^x$ is decreasing. Both pass through $(0, 1)$ and have the $x$-axis as an asymptote"}

:::

:::osservazione{#basi-reciproche titolo="Reciprocal bases"}
The exponent laws give $\left( \dfrac{1}{a} \right)^x = a^{-x}$. The value of $\left( \dfrac{1}{2} \right)^x$ at a point $x$ therefore equals the value of $2^x$ at the opposite point $-x$. For example, $\left( \dfrac{1}{2} \right)^{3} = 2^{-3} = \dfrac{1}{8}$. Hence the graphs of $a^x$ and $\left( \dfrac{1}{a} \right)^x$ are reflections of each other across the $y$-axis, as the points $(1, 2)$ and $(-1, 2)$ in the preceding figure show.
:::

:::osservazione{#confronto-basi titolo="Comparing different bases"}
Let $1 < a < b$. For $x > 0$ the larger base gives the larger power, that is, $a^x < b^x$. For $x < 0$ the inequality is reversed. For example, $2^2 = 4 < 9 = 3^2$, whereas $2^{-1} = \dfrac{1}{2} > \dfrac{1}{3} = 3^{-1}$. Thus to the right of the $y$-axis, the graph of $3^x$ lies above that of $2^x$ and rises faster. To the left, it lies below and approaches the $x$-axis faster.

::grafico{f="2^x;3^x" punti="0,1,pieno;2,4,pieno;2,9,pieno" segmenti="2,0,2,9" xmin=-4 xmax=3 ymin=-1 ymax=10 legenda="y = 2^x;y = 3^x" titolo="For $x > 0$ the graph of $3^x$ lies above that of $2^x$, and for $x < 0$ it lies below. At $x = 2$ the values are $4$ and $9$"}

:::

::::teorema{#iniettivita-esponenziale titolo="The exponential function is one-to-one"}
Let $a > 0$ and $a \neq 1$. For every pair of real numbers $u$ and $v$,
$$
a^u = a^v \iff u = v .
$$
In other words, powers with the same base are equal only when they have the same exponent. This theorem is the basis for solving exponential equations. For example, $2^x = 32 = 2^5$ implies $x = 5$.

:::dimostrazione
If $u = v$, the two powers are the same and therefore equal. Conversely, suppose $u \neq v$, for example $u < v$. By the theorem on comparing powers with the same base, if $a > 1$ then $a^u < a^v$, and if $0 < a < 1$ then $a^u > a^v$. In both cases $a^u \neq a^v$. Therefore the equality $a^u = a^v$ implies $u = v$.
:::
::::

:::osservazione{#esponenziale-e-potenza titolo="Exponential and power functions"}
In the functions $2^x$ and $x^2$, the numbers $2$ and $x$ exchange the roles of base and exponent. For large $x$ the two functions grow very differently. The functions are equal for $x = 2$ and for $x = 4$ because $2^2 = 2^2$ and $2^4 = 16 = 4^2$. For $x = 3$ we have $2^3 = 8 < 9 = 3^2$, whereas for $x = 10$ we have $2^{10} = 1024$ compared with $10^2 = 100$. For every $x > 4$ the exponential function exceeds the power function, and the difference keeps increasing. A precise comparison uses limits, a topic in the fifth-year course.
:::

## The number e

:::definizione{#numero-e titolo="The number e"}
A principal of $1$ euro is deposited for one year at an annual interest rate of $100\%$. If interest is paid once, the balance at the end of the year is $1 + 1 = 2$. If the year is divided into $n$ periods and in each period interest at the rate $\dfrac{1}{n}$ is paid on the balance already accumulated, the balance at the end of the year is
$$
\left( 1 + \frac{1}{n} \right)^n .
$$
For $n = 2$ we obtain $1.5^2 = 2.25$, for $n = 12$ about $2.613$, for $n = 365$ about $2.7146$, and for $n = 10\,000$ about $2.7181$. As $n$ increases, these numbers increase and approach an irrational number denoted by the letter $e$.
$$
e = 2.718281828\ldots
$$
The number $e$ is called **Euler's number**. A limit gives precise meaning to the word “approach,” as we will see in the fifth-year topic on limits.

::grafico{f="2.718281828" punti="1,2,pieno;2,2.25,pieno;3,2.370,pieno;4,2.441,pieno;5,2.488,pieno;6,2.522,pieno;7,2.546,pieno;8,2.566,pieno;9,2.581,pieno;10,2.594,pieno" xmin=0 xmax=11 ymin=0 ymax=3 nomi="n,y" legenda="y = e" titolo="The values of $\left(1 + \dfrac{1}{n}\right)^n$ for $n$ from $1$ to $10$ increase and stay below the line $y = e$"}

:::

:::definizione{#esponenziale-naturale titolo="The natural exponential function"}
The exponential function with base $e$,
$$
f(x) = e^x ,
$$
is called the **natural exponential function** and is also denoted by $\exp x$. Since $2 < e < 3$, the function is increasing, and its graph lies between those of $2^x$ and $3^x$. Among all exponential functions, $e^x$ is the only one whose tangent line at the point $(0, 1)$ has slope $1$, that is, the line $y = x + 1$. This property explains the use of the base $e$ in science and mathematical analysis. The fifth-year topic on derivatives shows that $e^x$ equals its own derivative.

Calculations with the natural exponential function follow the same rules as for any other base. For example,
$$
\frac{e^{3x}}{e^{x - 1}} = e^{3x - (x - 1)} = e^{2x + 1} ,
\qquad
e^2 \approx 7.389 .
$$

::grafico{f="exp(x);x+1" punti="0,1,pieno" xmin=-4 xmax=3 ymin=-2 ymax=8 legenda="y = e^x;y = x + 1" titolo="The line $y = x + 1$ is tangent to the graph of $e^x$ at $(0, 1)$, and the graph lies above the line"}

:::

## Transformations of the graph

:::teorema{#traslazioni-grafico titolo="Shifts of the exponential graph"}
Suppose $a > 0$ and $a \neq 1$, and let $h$ and $k$ be real numbers. The graph of
$$
y = a^{x - h} + k
$$
is obtained by shifting the graph of $y = a^x$ by $h$ units horizontally and $k$ units vertically. Therefore the horizontal asymptote becomes the line $y = k$, the range becomes $(k, +\infty)$, and the point $(0, 1)$ moves to $(h, 1 + k)$. The function has the same monotonicity as $a^x$.

For example, $y = 2^{x + 1} - 4$ is obtained from $y = 2^x$ by shifting $1$ unit to the left and $4$ units down. The asymptote is $y = -4$ and the range is $(-4, +\infty)$. The graph crosses the $y$-axis at $(0, 2 - 4) = (0, -2)$. It crosses the $x$-axis where $2^{x + 1} = 4 = 2^2$, that is, at $x = 1$.

::grafico{f="2^x;2^(x+1)-4" punti="0,-2,pieno;1,0,pieno;-1,-3,pieno" asintoti="y=-4" xmin=-5 xmax=3 ymin=-5 ymax=8 legenda="y = 2^x;y = 2^{x+1} - 4" titolo="The graph of $2^{x+1} - 4$ is the graph of $2^x$ shifted $1$ unit to the left and $4$ units down, with asymptote $y = -4$"}

:::

:::teorema{#simmetrie-grafico titolo="Reflections and absolute values"}
Let $a > 0$, $a \neq 1$ and $k > 0$. Starting from the graph of $y = a^x$,
- the graph of $y = -a^x$ is its reflection across the $x$-axis, with range $(-\infty, 0)$;
- the graph of $y = a^{-x}$ is its reflection across the $y$-axis;
- the graph of $y = a^{|x|}$ coincides with that of $a^x$ for $x \geq 0$, and for $x < 0$ it is the reflection of this part across the $y$-axis;
- the graph of $y = \left| a^x - k \right|$ is obtained from the graph of $a^x - k$ by reflecting the part below the $x$-axis upward.

These rules let us sketch many graphs without tables of values. For example, $y = 4 - 2^x$ is obtained by reflecting $2^x$ across the $x$-axis and shifting $4$ units up. It is decreasing, has range $(-\infty, 4)$ and asymptote $y = 4$, and crosses the $x$-axis at $x = 2$ because $2^2 = 4$.

::grafico{f="2^abs(x)" punti="0,1,pieno;2,4,pieno;-2,4,pieno" xmin=-4 xmax=4 ymin=-1 ymax=9 legenda="y = 2^{|x|}" titolo="The graph of $2^{|x|}$ is symmetric about the $y$-axis and has minimum value $1$ at $x = 0$"}

:::

:::esempio{titolo="The graph of y = |2^x - 4|"}
The graph of $y = 2^x - 4$ is the graph of $2^x$ shifted $4$ units down. It has asymptote $y = -4$, crosses the $y$-axis at $(0, -3)$ and the $x$-axis at $(2, 0)$, and is negative for $x < 2$. Taking the absolute value leaves the part with $x \geq 2$ unchanged and reflects the part with $x$ upward across the $x < 2$-axis. Therefore the graph of $\left| 2^x - 4 \right|$ passes through $(0, 3)$, touches the $x$-axis at $(2, 0)$ and approaches the line $y = 4$ to the left. This line is the new asymptote.

::grafico{f="abs(2^x-4)" punti="0,3,pieno;2,0,pieno" asintoti="y=4" xmin=-5 xmax=4 ymin=-1 ymax=9 legenda="y = |2^x - 4|" titolo="The graph of $|2^x - 4|$ touches the $x$-axis at $x = 2$ and has the line $y = 4$ as its asymptote to the left"}

:::

## Exponential equations with the same base

:::definizione{#equazione-esponenziale titolo="Exponential equations"}
An **exponential equation** is an equation in which the unknown appears in the exponent of one or more powers. Examples of exponential equations are
$$
3^x = 81 ,
\qquad
4^x - 2^{x + 1} = 8 ,
\qquad
5^x = 2 .
$$
The simplest case is the **elementary equation** $a^x = b$, with $a > 0$ and $a \neq 1$. Since the range of the exponential function is $(0, +\infty)$, the equation has no solution if $b \leq 0$ and exactly one solution if $b > 0$. For example, $2^x = -4$ has no solution because $2^x > 0$ for every $x$. The equation $2^x = \dfrac{1}{8}$ has the solution $x = -3$ because $\dfrac{1}{8} = 2^{-3}$.
:::

:::teorema{#equazioni-stessa-base titolo="Equations with the same base"}
Suppose $a > 0$ and $a \neq 1$, and let $f(x)$ and $g(x)$ be two expressions in the unknown $x$. For each $x$ for which $f(x)$ and $g(x)$ are defined,
$$
a^{f(x)} = a^{g(x)} \iff f(x) = g(x) .
$$
This equivalence follows because the exponential function is one-to-one. To apply it, write both sides as powers with the same base and then equate the exponents. For example, since $9 = 3^2$ and $27 = 3^3$,
$$
9^{x + 1} = 27^{x}
\iff
3^{2x + 2} = 3^{3x}
\iff
2x + 2 = 3x
\iff
x = 2 .
$$
Checking by substitution gives $9^3 = 729 = 27^2$.
:::

:::esempio{titolo="Exponents with radicals and fractions"}
Solve $\sqrt{2^{x}} = 4^{x - 3}$. The left-hand side is $\left( 2^x \right)^{\frac{1}{2}} = 2^{\frac{x}{2}}$ and the right-hand side is $\left( 2^2 \right)^{x - 3} = 2^{2x - 6}$. Equating the exponents gives
$$
\frac{x}{2} = 2x - 6
\iff
x = 4x - 12
\iff
x = 4 .
$$
For $x = 4$ both sides equal $4$.

If the exponent contains a fraction, include the restriction on its domain. For example, $2^{\frac{6}{x}} = 8$ is defined for $x \neq 0$ and is equivalent to $\dfrac{6}{x} = 3$, so $x = 2$, which satisfies the restriction.
:::

:::teorema{#raccoglimento titolo="Equations solved by factoring out a common factor"}
When powers with the same base appear with exponents that differ by constants, such as $a^{x + 1}$, $a^{x}$ and $a^{x - 1}$, write each as a product $a^{x + c} = a^c \cdot a^x$ and factor out $a^x$. The equation then reduces to an elementary equation. For example,
$$
3^{x + 1} + 3^{x - 1} = 30
\iff
3^x \left( 3 + \frac{1}{3} \right) = 30
\iff
3^x \cdot \frac{10}{3} = 30
\iff
3^x = 9 ,
$$
so $x = 2$. Checking by substitution gives $3^3 + 3^1 = 27 + 3 = 30$.
:::

:::attenzione
A sum of powers with the same base cannot be reduced to a single power by adding their exponents. For example, $2^x + 2^{x + 1} \neq 2^{2x + 1}$, as we see by taking $x = 1$, when the left-hand side is $2 + 4 = 6$ and the right-hand side is $2^3 = 8$. Factoring gives the correct expression, $2^x + 2^{x + 1} = 2^x (1 + 2) = 3 \cdot 2^x$.
:::

:::osservazione{#stesso-esponente titolo="Different bases with the same exponent"}
Let $a$ and $b$ be distinct positive numbers. Dividing both sides of the equation $a^{f(x)} = b^{f(x)}$ by the positive quantity $b^{f(x)}$ gives $\left( \dfrac{a}{b} \right)^{f(x)} = 1 = \left( \dfrac{a}{b} \right)^0$. The base $\dfrac{a}{b}$ is different from $1$, so the equation is equivalent to $f(x) = 0$. For example, $2^{x - 3} = 5^{x - 3}$ has the unique solution $x = 3$, at which both sides equal $1$.
:::

## Solving equations by substitution

:::teorema{#sostituzione-esponenziale titolo="The substitution t = a^x"}
If an equation contains only the powers $a^{2x}$, $a^{x}$, powers of the form $a^{x + c}$ and constants, set
$$
t = a^x , \qquad t > 0 ,
$$
and write $a^{2x} = \left( a^x \right)^2 = t^2$. This gives an algebraic equation in the unknown $t$. Only its positive solutions are admissible, because $a^x > 0$ for every $x$. For each positive solution, solve the elementary equation $a^x = t$. For example,
$$
4^x - 6 \cdot 2^x + 8 = 0
\iff
t^2 - 6t + 8 = 0
\iff
(t - 2)(t - 4) = 0 .
$$
From $2^x = 2$ we obtain $x = 1$, and from $2^x = 4$ we obtain $x = 2$. The solutions are therefore $x = 1$ and $x = 2$.
:::

:::esempio{titolo="An inadmissible value of t"}
Solve $9^x - 2 \cdot 3^{x + 1} - 27 = 0$. Since $9^x = \left( 3^x \right)^2$ and $3^{x + 1} = 3 \cdot 3^x$, setting $t = 3^x$ gives
$$
t^2 - 6t - 27 = 0
\iff
(t - 9)(t + 3) = 0 .
$$
The solution $t = -3$ is inadmissible because $3^x$ is positive. This leaves $3^x = 9$, so the equation has the unique solution $x = 2$.
:::

:::esempio{titolo="Opposite exponents"}
Solve $2^x + 2^{1 - x} = 3$. The second term is $2^{1 - x} = \dfrac{2}{2^x}$, so setting $t = 2^x$ gives
$$
t + \frac{2}{t} = 3
\iff
t^2 - 3t + 2 = 0
\iff
(t - 1)(t - 2) = 0 .
$$
Multiplication by $t$ is valid because $t > 0$. Both solutions $t = 1$ and $t = 2$ are positive, so $2^x = 1$ and $2^x = 2$ give the solutions $x = 0$ and $x = 1$.
:::

:::osservazione{#equazioni-omogenee titolo="Homogeneous equations"}
The bases in the equation $4^x + 6^x = 2 \cdot 9^x$ are $4 = 2^2$, $6 = 2 \cdot 3$ and $9 = 3^2$. Dividing both sides by the positive quantity $9^x$ gives
$$
\left( \frac{4}{9} \right)^x + \left( \frac{6}{9} \right)^x = 2
\iff
\left( \frac{2}{3} \right)^{2x} + \left( \frac{2}{3} \right)^{x} = 2 .
$$
With $t = \left( \dfrac{2}{3} \right)^x$ the equation becomes $t^2 + t - 2 = 0$, that is, $(t - 1)(t + 2) = 0$. The solution $t = -2$ is inadmissible, and $\left( \dfrac{2}{3} \right)^x = 1$ gives $x = 0$.
:::

## Equations with different bases and the graphical method

:::teorema{#equazioni-con-logaritmi titolo="The equation a^x = b and the logarithm"}
Let $a > 0$, $a \neq 1$ and $b > 0$. The equation $a^x = b$ has exactly one solution, since $b$ is in the range of the exponential function and the function is one-to-one. This solution is called the **logarithm** to base $a$ of $b$ and is written
$$
a^x = b \iff x = \log_a b .
$$
When $b$ is a known power of $a$, the logarithm is an integer or a rational number. Otherwise we leave it in logarithmic form or approximate it. For example, $2^x = 7$ has the solution $x = \log_2 7$, which lies between $2$ and $3$ because $2^2 = 4 < 7 < 8 = 2^3$. Its value is $\log_2 7 \approx 2.807$. The properties of logarithms and their use in equations with different bases are covered in the topic on logarithms.
:::

:::esempio{titolo="Two different bases"}
Solve $3^{x - 1} = 5$. By the definition of a logarithm, $x - 1 = \log_3 5$, so $x = 1 + \log_3 5$.

In the equation $2^x = 3^{x - 1}$ the bases $2$ and $3$ cannot be expressed as powers of a common base. Take the natural logarithm $\ln$, that is, the logarithm with base $e$, of both sides and use the rule $\ln a^x = x \ln a$, proved in the topic on logarithms.
$$
x \ln 2 = (x - 1) \ln 3
\iff
x \left( \ln 3 - \ln 2 \right) = \ln 3
\iff
x = \frac{\ln 3}{\ln 3 - \ln 2} .
$$
The approximate value is $x \approx 2.71$.
:::

:::teorema{#metodo-grafico titolo="Solving equations graphically"}
The solutions of the equation $f(x) = g(x)$ are the horizontal coordinates of the intersections of the graphs of $y = f(x)$ and $y = g(x)$. The graphical method applies when an equation contains both an exponential and a polynomial and cannot be solved by algebraic methods. The graph shows the number of solutions and the numbers between which they lie.

For example, in the equation $2^x = 3 - x$ the left-hand side is an increasing function and the right-hand side a decreasing function, so their graphs intersect at most once. For $x = 1$ we have $2^1 = 2 = 3 - 1$, hence the equation has the unique solution $x = 1$.

::grafico{f="2^x;3-x" punti="1,2,pieno" segmenti="1,0,1,2" xmin=-3 xmax=4 ymin=-2 ymax=7 legenda="y = 2^x;y = 3 - x" titolo="The increasing graph of $2^x$ and the decreasing line $y = 3 - x$ intersect at a single point with horizontal coordinate $x = 1$"}

:::

:::esempio{titolo="An exact solution and an approximate solution"}
Find the solutions of $2^x = x + 2$. For $x = 2$ both sides equal $4$, so $x = 2$ is a solution. The figure shows a second intersection with negative horizontal coordinate. For $x = -2$ we have $2^{-2} = \dfrac{1}{4} > 0 = -2 + 2$, whereas for $x = -1$ we have $2^{-1} = \dfrac{1}{2} < 1 = -1 + 2$. Between $-2$ and $-1$ the difference $2^x - (x + 2)$ changes sign, so the second solution lies between $-2$ and $-1$. Testing further values gives $x \approx -1.69$.

::grafico{f="2^x;x+2" punti="2,4,pieno;-1.69,0.31,pieno" xmin=-4 xmax=4 ymin=-2 ymax=8 legenda="y = 2^x;y = x + 2" titolo="The line $y = x + 2$ intersects the graph of $2^x$ at $x = 2$ and at a point with horizontal coordinate between $-2$ and $-1$"}

:::

## Exponential inequalities

::::teorema{#disequazioni-esponenziali titolo="Inequalities with the same base"}
Let $f(x)$ and $g(x)$ be expressions in the unknown $x$, considered where they are defined.
- If $a > 1$, then $a^{f(x)} > a^{g(x)} \iff f(x) > g(x)$, so the direction of the inequality is *preserved*.
- If $0 < a < 1$, then $a^{f(x)} > a^{g(x)} \iff f(x) < g(x)$, so the direction of the inequality is *reversed*.

The same equivalences hold with $\geq$ in place of $>$. For example, $2^x > 4$ is equivalent to $2^x > 2^2$, that is, to $x > 2$, whereas $\left( \dfrac{1}{3} \right)^{x - 1} \geq 9 = \left( \dfrac{1}{3} \right)^{-2}$ is equivalent to $x - 1 \leq -2$, that is, to $x \leq -1$.

::grafico{f="2^x;4" punti="2,4,vuoto" segmenti="2,0,2,4" xmin=-3 xmax=4 ymin=-1 ymax=9 legenda="y = 2^x;y = 4" titolo="The graph of $2^x$ lies above the line $y = 4$ precisely when $x > 2$"}

:::dimostrazione
We prove the case $a > 1$. The case $0 < a < 1$ is similar, with the inequalities reversed. If $f(x) > g(x)$, the theorem on comparing powers with the same base gives $a^{f(x)} > a^{g(x)}$. Conversely, suppose $a^{f(x)} > a^{g(x)}$. If $f(x) = g(x)$, the powers would be equal, and if $f(x) < g(x)$, we would have $a^{f(x)} < a^{g(x)}$. Both cases contradict the hypothesis, so $f(x) > g(x)$.
:::
::::

:::attenzione
The direction reverses only when the base is between $0$ and $1$. The sign of the exponent plays no role. For example, $2^{-x} > 8$ has base $2 > 1$, so it is equivalent to $-x > 3$, that is, $x < -3$. Here the direction changes only in the last step, when both sides are multiplied by $-1$. Indeed, for $x = -4$ we have $2^{4} = 16 > 8$.
:::

:::osservazione{#secondo-membro-negativo titolo="A nonpositive right-hand side"}
Since $a^{f(x)} > 0$ wherever the exponent is defined, the inequality $a^{f(x)} > b$ with $b \leq 0$ holds for every $x$ in the domain of the exponent, and the inequality $a^{f(x)} < b$ with $b \leq 0$ has no solutions. For example, $5^x > -3$ holds for every real $x$, and $3^{\frac{1}{x}} \leq 0$ has no solutions. If $b > 0$ is not a known power of the base, write $b = a^{\log_a b}$. For example, $3^x > 5$ is equivalent to $x > \log_3 5$.
:::

:::teorema{#disequazioni-sostituzione titolo="Solving inequalities by substitution"}
Inequalities containing $a^{2x}$ and $a^x$ can be solved by substituting $t = a^x$ and imposing the condition $t > 0$. Solve the inequality in $t$, intersect its solution set with $t > 0$ and return to the original unknown $x$ using the theorem on inequalities with the same base. For example, with $t = 2^x$,
$$
4^x - 3 \cdot 2^x - 4 < 0
\iff
t^2 - 3t - 4 < 0
\iff
(t - 4)(t + 1) < 0
\iff
-1 < t < 4 .
$$
Combining this with the condition $t > 0$ gives $0 < 2^x < 4$. The inequality $2^x > 0$ holds for every $x$, whereas $2^x < 4 = 2^2$ is equivalent to $x < 2$ because the base exceeds $1$. The solution is therefore $x < 2$.
:::

:::esempio{titolo="A rational inequality"}
Solve $\dfrac{2^x - 8}{3^x - 1} \leq 0$. The denominator vanishes at $x = 0$, which must be excluded. Examine the signs of the numerator and denominator.
- The numerator is positive for $2^x > 8 = 2^3$, that is, for $x > 3$, and vanishes at $x = 3$.
- The denominator is positive for $3^x > 1 = 3^0$, that is, for $x > 0$.

The quotient is negative where the numerator and denominator have opposite signs, that is, for $0 < x < 3$, and vanishes at $x = 3$. The solution is therefore $0 < x \leq 3$.
:::

## Growth and decay models

:::definizione{#modello-discreto titolo="Exponential growth and decay"}
A quantity exhibits **exponential growth** if it is multiplied by the same factor $q > 1$ in every time interval of equal length. It exhibits **exponential decay** if the factor is $0 < q < 1$. Writing $N_0$ for the initial value, after $n$ intervals the value is
$$
N_n = N_0 \, q^n .
$$
If the quantity increases by $p\%$ in each interval, the factor is $q = 1 + \dfrac{p}{100}$. If it decreases by $p\%$, the factor is $q = 1 - \dfrac{p}{100}$. For example, a population of $800$ individuals growing by $5\%$ per year is described by $N_n = 800 \cdot 1.05^n$. After two years there are $800 \cdot 1.1025 = 882$ individuals. Each year the percentage applies to the preceding year's population, so the increase in the second year, $42$ individuals, exceeds the increase in the first, $40$ individuals.
:::

:::teorema{#interesse-composto titolo="Compound interest"}
A principal $C$ is invested at the annual rate $i$, expressed as a decimal, and the interest is added to the principal at the end of each year. After $n$ years the **accumulated amount**, that is, the principal plus interest, is
$$
M = C \, (1 + i)^n .
$$
Each year the balance is multiplied by $1 + i$, so the accumulated amount follows an exponential growth model. For example, $2000$ euros at $3\%$ per year give, after $2$ years, $M = 2000 \cdot 1.03^2 = 2121.80$ euros and, after $10$ years, about $2687.83$ euros. With **simple interest**, for which interest is always calculated on the initial principal, the accumulated amount would be $C \, (1 + n i)$, that is, $2120$ euros after $2$ years and $2600$ euros after $10$ years.
:::

:::definizione{#tempo-dimezzamento titolo="Half-life"}
In a sample of a radioactive substance, the number of nuclei decreases over time. The **half-life** $T$ is the time required for the number of nuclei to fall to half its original value. After a time $t$, the number of half-lives elapsed is $\dfrac{t}{T}$, so
$$
N(t) = N_0 \left( \frac{1}{2} \right)^{\frac{t}{T}} .
$$
The ratio $\dfrac{t}{T}$ is dimensionless because $t$ and $T$ are measured in the same unit. For example, carbon-14 has a half-life of about $5730$ years. After $11\,460$ years, that is, after two half-lives, $\left( \dfrac{1}{2} \right)^2 = \dfrac{1}{4}$ of the original nuclei remain.

::grafico{f="100*0.5^(x/5)" punti="0,100,pieno;5,50,pieno;10,25,pieno;15,12.5,pieno" segmenti="5,0,5,50;0,50,5,50;10,0,10,25;0,25,10,25" xmin=0 xmax=20 ymin=0 ymax=100 nomi="t,N" legenda="N = 100 \cdot \left(\frac{1}{2}\right)^{\frac{t}{5}}" titolo="With $N_0 = 100$ and $T = 5$, the number of nuclei is halved every $5$ units of time, giving $100$, $50$, $25$, $12.5$"}

:::

:::definizione{#modello-continuo titolo="A continuous model with base e"}
In science, growth and decay are often expressed using the natural exponential function:
$$
N(t) = N_0 \, e^{k t} ,
$$
where $N_0$ is the value at $t = 0$ and $k$ is a constant. The model describes growth if $k > 0$ and decay if $k < 0$. In each unit of time the quantity is multiplied by $e^{k}$, so the model coincides with $N_0 \, q^t$ for $q = e^{k}$. The **doubling time** is the time $T$ for which $e^{kT} = 2$, that is, $T = \dfrac{\ln 2}{k}$, using the natural logarithm. For example, with $k = 0.02$ per year the doubling time is $\dfrac{\ln 2}{0.02} \approx 34.7$ years.
:::

:::esempio{titolo="A bacterial colony"}
A bacterial colony doubles every $20$ minutes and initially contains $500$ bacteria. After $t$ minutes the number of doublings is $\dfrac{t}{20}$, so
$$
N(t) = 500 \cdot 2^{\frac{t}{20}} .
$$
After two hours, that is, $120$ minutes, the number of doublings is $6$ and the number of bacteria is $500 \cdot 2^6 = 32\,000$. To find the time at which there are $4000$ bacteria, solve the exponential equation $2^{\frac{t}{20}} = 8 = 2^3$, which gives $\dfrac{t}{20} = 3$, that is, $t = 60$ minutes.
:::
