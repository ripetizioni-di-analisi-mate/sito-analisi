---
titolo: Exponential equations and inequalities
sommario: The function a^x with its properties, and the methods for solving equations and inequalities in which the unknown appears in the exponent.
---

## The exponential function

:::definizione{#funzione-esponenziale titolo="Exponential function"}
For $a > 0$, $a \neq 1$, the **exponential function** with base $a$ assigns to *every* $x \in \mathbb{R}$ the number $a^{x}$. Properties:

- $a^{x} > 0$ for every $x \in \mathbb{R}$, so the graph lies above the $x$-axis; the line $y = 0$ is a horizontal asymptote, that is, the graph approaches the $x$-axis without touching it;
- $a^{0} = 1$, so the graph passes through the point $(0, 1)$ whatever the base;
- the function is **injective**: different exponents give different powers;
- for $a > 1$ the function is strictly **increasing**, that is, $x_1 < x_2$ implies $a^{x_1} < a^{x_2}$; for $0 < a < 1$ it is strictly **decreasing**, that is, $x_1 < x_2$ implies $a^{x_1} > a^{x_2}$.

All the solution methods in this chapter rest on these two properties. Injectivity justifies passing from the powers to the exponents in equations; the fact that the function is increasing or decreasing, that is, its **monotonicity**, determines the direction of the inequality sign in inequalities.
:::

:::esempio{titolo="The two basic graphs"}
For $a = 2$ the function increases; for $a = \dfrac{1}{2}$ it decreases, since $\left(\dfrac{1}{2}\right)^{x} = 2^{-x}$.

::grafico{f="2^x" xmin=-3 xmax=3 ymin=-0.5 ymax=8 asintoti="y=0" titolo="$y = 2^x$: base greater than $1$, increasing function"}

::grafico{f="0.5^x" xmin=-3 xmax=3 ymin=-0.5 ymax=8 asintoti="y=0" titolo="$y = \left(\dfrac{1}{2}\right)^x$: base between $0$ and $1$, decreasing function"}
:::

:::attenzione
The base $a = 1$ is excluded from the definition, because $1^{x} = 1$ for every $x \in \mathbb{R}$. The constant function $1^{x}$ is not injective, for example $1^{2} = 1^{5}$ with $2 \neq 5$, so from the equality of two powers with base $1$ one cannot recover the exponents.

Negative bases are excluded because the power is not defined for every real exponent. For example, with $a = -4$ and $x = \dfrac{1}{2}$ we would have $(-4)^{\frac{1}{2}} = \sqrt{-4}$, which is not a real number.
:::

:::osservazione
Let $a$ and $b$ be two bases with $0 < a < b$. Since $\dfrac{b^{x}}{a^{x}} = \left(\dfrac{b}{a}\right)^{x}$ and the base $\dfrac{b}{a}$ is greater than $1$, the quotient is greater than $1$ for $x > 0$ and less than $1$ for $x < 0$. Hence $a^{x} < b^{x}$ for $x > 0$, while $a^{x} > b^{x}$ for $x < 0$. For example $2^{2} = 4 < 9 = 3^{2}$, while $2^{-1} = \dfrac{1}{2} > \dfrac{1}{3} = 3^{-1}$. With this comparison two powers with the same exponent are ordered without computing them.

::grafico{f="2^x;3^x" xmin=-3 xmax=2.5 ymin=-1 ymax=10 punti="0,1,pieno;2,4,pieno;2,9,pieno" segmenti="2,0,2,9" legenda="y = 2^x;y = 3^x" titolo="For $x > 0$ the graph of $y = 3^{x}$ lies above that of $y = 2^{x}$, for $x < 0$ it lies below; at $x = 2$ the values are $4$ and $9$"}
:::

## The laws of exponents

:::teorema{#regole-delle-potenze titolo="Laws of exponents"}
For $a > 0$ and $x, y \in \mathbb{R}$:
$$
a^{x} \, a^{y} = a^{x+y}, \qquad
\frac{a^{x}}{a^{y}} = a^{x-y}, \qquad
(a^{x})^{y} = a^{xy}, \qquad
a^{-x} = \frac{1}{a^{x}} .
$$
They are used to rewrite the two sides of an equation or an inequality as **powers of the same base**. For example $8^{x} = (2^{3})^{x} = 2^{3x}$ and $\dfrac{1}{9} = 3^{-2}$.
:::

:::teorema{#base-reciproca titolo="Powers with reciprocal base"}
For $a > 0$ and $x \in \mathbb{R}$:
$$
\left(\frac{1}{a}\right)^{x} = a^{-x} .
$$
The equality follows from the power of a power rule, since $\dfrac{1}{a} = a^{-1}$ and hence $\left(a^{-1}\right)^{x} = a^{-x}$. The value of $\left(\dfrac{1}{a}\right)^{x}$ at the point $x$ coincides with the value of $a^{x}$ at the point $-x$, therefore the two graphs are symmetric with respect to the $y$-axis. The rule is used to rewrite a power with base between $0$ and $1$ as a power with base greater than $1$. For example, the inequality $\left(\dfrac{1}{2}\right)^{x} > 8$ is rewritten as $2^{-x} > 2^{3}$; the base $2$ is greater than $1$, so $-x > 3$ and $x < -3$.
:::

:::esempio{titolo="Factoring out a power"}
$$
\begin{aligned}
2^{x+2} - 2^{x} = 24 &\iff 4 \cdot 2^{x} - 2^{x} = 24 \\[6pt]
&\iff 3 \cdot 2^{x} = 24 \\[6pt]
&\iff 2^{x} = 8 = 2^{3} \\[6pt]
&\iff x = 3
\end{aligned}
$$
By the product of powers rule $2^{x+2} = 2^{2} \cdot 2^{x} = 4 \cdot 2^{x}$, so the two terms contain the same factor $2^{x}$, which is factored out. The equation therefore reduces to the form $2^{x} = 8$, which is solved with the equality of powers with the same base.
:::

:::attenzione
The laws of exponents concern products, quotients and powers of powers. The sum $2^{x} + 2^{x}$ equals $2 \cdot 2^{x} = 2^{x+1}$ and is different from $2^{2x}$. For $x = 2$, for example, we have $2^{2} + 2^{2} = 8 = 2^{3}$, while $2^{2 \cdot 2} = 16$.

Likewise $(a^{x})^{2} = a^{2x}$ is different from $a^{x^{2}}$. For $a = 2$ and $x = 3$, for example, we have $(2^{3})^{2} = 64$ and $2^{3^{2}} = 2^{9} = 512$.
:::

## Equations with the same base

:::teorema{#stessa-base titolo="Equality of powers with the same base"}
For $a > 0$, $a \neq 1$:
$$
a^{A} = a^{B} \iff A = B .
$$
If $A = B$ the two powers coincide; conversely, since the exponential function is **injective**, $a^{A} = a^{B}$ implies $A = B$. The equation in the exponents is an algebraic equation and is solved with the standard methods.
:::

:::esempio
$$
2^{x+1} = 16 \iff 2^{x+1} = 2^{4} \iff x + 1 = 4 \iff x = 3
$$
The number $16$ has been rewritten as a power of $2$, so the equality of the powers **is equivalent** to the equality of the exponents.
:::

:::esempio{titolo="Quadratic exponent"}
$$
\begin{aligned}
2^{x^{2} - 3x} = \frac{1}{4} &\iff 2^{x^{2} - 3x} = 2^{-2} \\[6pt]
&\iff x^{2} - 3x + 2 = 0 \\[6pt]
&\iff x = 1 \ \text{or} \ x = 2
\end{aligned}
$$
The number $\dfrac{1}{4}$ is written as $2^{-2}$, so the equality of the exponents gives the quadratic equation $x^{2} - 3x = -2$. When the right-hand side equals $1 = a^{0}$, the equation $a^{A} = 1$ is equivalent to $A = 0$. For example, $5^{x^{2} - 4} = 1$ is equivalent to $x^{2} - 4 = 0$, which has solutions $x = -2$ and $x = 2$.
:::

## Equations solved with the logarithm

:::teorema{#esponenziale-uguale-k titolo="Exponential equation with a constant right-hand side"}
For $a > 0$, $a \neq 1$ and $k > 0$:
$$
a^{A} = k \iff A = \log_a k .
$$
By definition, the logarithm $\log_a k$ is the **exponent** to which $a$ must be raised to obtain $k$, therefore $k = a^{\log_a k}$ and the equation can be rewritten as $a^{A} = a^{\log_a k}$, which is equivalent to $A = \log_a k$ by the equality of powers with the same base. The method is used when $k$ is *not* a power of $a$ with a recognizable rational exponent.

::grafico{f="3^x;5;-2" xmin=-3 xmax=3 ymin=-2.5 ymax=8 punti="1.465,5,pieno" segmenti="1.465,0,1.465,5" etichette="1.6,1.2,x = log₃ 5" titolo="The line $y = 5$ meets $y = 3^{x}$ at a single point, with abscissa $\log_3 5$; the line $y = -2$, in red, does not meet it"}
:::

:::esempio
$$
3^{x} = 5 \iff x = \log_3 5, \qquad
2^{x-1} = 7 \iff x - 1 = \log_2 7 \iff x = 1 + \log_2 7
$$
In the second case the logarithm gives the value of the *whole* exponent $x - 1$, so the solution is obtained by solving the linear equation $x - 1 = \log_2 7$.
:::

:::attenzione
The equation $a^{x} = k$ with $k \leq 0$ **has no solutions**, because $a^{x} > 0$ for every $x \in \mathbb{R}$. For example $2^{x} = -4$ and $5^{x} = 0$ have no solutions: a power with a positive base is *never* negative or zero.
:::

::::teorema{#basi-diverse titolo="Equations with different bases"}
For $a > 0$, $a \neq 1$ and $b > 0$:
$$
a^{A} = b^{B} \iff A = B \log_a b .
$$
The theorem applies when the two bases cannot be brought to the same base with the laws of exponents, like $2$ and $3$. After passing to the exponents the equation is algebraic and contains the number $\log_a b$ as a coefficient.

:::dimostrazione
The idea is to write $b$ as a power of $a$. Since $b > 0$, by definition of logarithm $b = a^{\log_a b}$. By the power of a power rule $b^{B} = \left(a^{\log_a b}\right)^{B} = a^{B \log_a b}$, so the equation becomes $a^{A} = a^{B \log_a b}$. By the equality of powers with the same base, this is equivalent to $A = B \log_a b$.
:::
::::

:::esempio
$$
\begin{aligned}
2^{x} = 3^{x-1} &\iff x = (x - 1) \log_2 3 \\[6pt]
&\iff x \log_2 3 - x = \log_2 3 \\[6pt]
&\iff x = \frac{\log_2 3}{\log_2 3 - 1}
\end{aligned}
$$
The theorem applies with $a = 2$ and $b = 3$. Expanding the right-hand side gives $x = x \log_2 3 - \log_2 3$; collecting the terms with $x$ on the same side gives $x \log_2 3 - x = \log_2 3$, that is, $x\,(\log_2 3 - 1) = \log_2 3$. Since $3 > 2$, we have $\log_2 3 > 1$, so the coefficient $\log_2 3 - 1$ is nonzero and the division is allowed. With $\log_2 3 \approx 1.585$ the solution is approximately $2.71$.

::grafico{f="2^x;3^(x-1)" xmin=-2 xmax=4 ymin=-1 ymax=12 punti="2.71,6.541,pieno" segmenti="2.71,0,2.71,6.541" legenda="y = 2^x;y = 3^{x-1}" titolo="The graphs of $y = 2^{x}$ and $y = 3^{x - 1}$ meet at a single point, with abscissa $\dfrac{\log_2 3}{\log_2 3 - 1}$"}
:::

## Equations with substitution

:::teorema{#sostituzione-esponenziale titolo="Substitution method"}
If $a^{2x} = (a^{x})^{2}$ and $a^{x}$ appear in the equation, the substitution $t = a^{x}$ transforms it into an algebraic equation in $t$. Since $a^{x} > 0$ for every $x$, the new unknown is subject to the condition $t > 0$, so any solutions with $t \leq 0$ **must be discarded**. For each acceptable value of $t$, the equation $a^{x} = t$ is solved with the equality of powers with the same base or with the logarithm.
:::

:::esempio
$$
9^{x} - 4 \cdot 3^{x} + 3 = 0
$$
Since $9^{x} = (3^{x})^{2}$, with the substitution $t = 3^{x}$, $t > 0$, the equation becomes $t^{2} - 4t + 3 = 0$, with solutions $t = 1$ and $t = 3$, both positive and therefore **acceptable**. From $3^{x} = 1 = 3^{0}$ it follows that $x = 0$; from $3^{x} = 3$ it follows that $x = 1$.
:::

:::osservazione
An equation in which $a^{2x}$, $(ab)^{x}$ and $b^{2x}$ appear, with $a, b > 0$, is brought back to the substitution by dividing both sides by $b^{2x}$, which is positive. For example, in $4^{x} + 6^{x} = 2 \cdot 9^{x}$ we divide by $9^{x}$. Since $\dfrac{4^{x}}{9^{x}} = \left(\dfrac{2}{3}\right)^{2x}$ and $\dfrac{6^{x}}{9^{x}} = \left(\dfrac{2}{3}\right)^{x}$, with $t = \left(\dfrac{2}{3}\right)^{x}$, $t > 0$, we obtain $t^{2} + t - 2 = 0$. The solutions are $t = 1$ and $t = -2$; the second is negative and must be discarded, so $\left(\dfrac{2}{3}\right)^{x} = 1$ and $x = 0$.
:::

:::attenzione
A negative solution of the equation in $t$ gives no solutions in $x$. In $4^{x} - 2^{x} - 2 = 0$ the substitution $t = 2^{x}$ gives $t^{2} - t - 2 = 0$, with solutions $t = 2$ and $t = -1$. The equation $2^{x} = -1$ has no solutions, and the expression $x = \log_2 (-1)$ is meaningless, because the logarithm is defined only for positive arguments. The only solution is therefore $x = 1$, given by $2^{x} = 2$.
:::

## Exponential inequalities

::::teorema{#disequazioni-esponenziali titolo="Inequalities with the same base"}
For $a > 0$, $a \neq 1$:

- if $a > 1$, then $a^{A} > a^{B} \iff A > B$: the direction of the inequality is **preserved**, because the exponential function with base $a$ is strictly increasing;
- if $0 < a < 1$, then $a^{A} > a^{B} \iff A < B$: the direction of the inequality is **reversed**, because the function is strictly decreasing.

The same rules hold with the symbols $\geq$, $<$, $\leq$. An inequality of the type $a^{A} > k$ with $k > 0$ is brought back to this form by writing $k$ as a power of $a$, possibly with the logarithm: $k = a^{\log_a k}$. If instead $k \leq 0$, since $a^{A} > 0$, the inequality $a^{A} > k$ is satisfied by *every* $x$ for which $A$ is defined and the inequality $a^{A} < k$ **has no solutions**.

::grafico{f="2^x;0.5^x" xmin=-3 xmax=3 ymin=-0.5 ymax=8 punti="0,1,pieno" titolo="$y = 2^{x}$ increases and $y = \left(\dfrac{1}{2}\right)^{x}$, dashed, decreases; both graphs pass through $(0, 1)$"}

:::dimostrazione
We first prove the case $a > 1$. If $A > B$, then $a^{A} > a^{B}$, because the function is strictly increasing. Conversely, let $a^{A} > a^{B}$ and suppose by contradiction that $A \leq B$. If $A = B$ the two powers are equal, and if $A < B$ we have $a^{A} < a^{B}$ because the function is increasing; in both cases $a^{A} \leq a^{B}$, contrary to the hypothesis. Hence $A > B$.

For $0 < a < 1$ we set $b = \dfrac{1}{a}$, which is greater than $1$. By the rule for powers with reciprocal base $a^{A} = b^{-A}$ and $a^{B} = b^{-B}$, so $a^{A} > a^{B}$ is equivalent to $b^{-A} > b^{-B}$. By the case already proved this inequality is equivalent to $-A > -B$, that is, to $A < B$.
:::
::::

:::esempio{titolo="Base greater than 1"}
$$
3^{2x-1} < 27 \iff 3^{2x-1} < 3^{3} \iff 2x - 1 < 3 \iff x < 2
$$
The base $3$ is greater than $1$, so the direction of the inequality is **preserved** in passing to the exponents.
:::

:::esempio{titolo="Base between 0 and 1"}
$$
\left(\frac{1}{2}\right)^{x} > 8 \iff \left(\frac{1}{2}\right)^{x} > \left(\frac{1}{2}\right)^{-3} \iff x < -3
$$
Since $8 = 2^{3} = \left(\dfrac{1}{2}\right)^{-3}$ and the base $\dfrac{1}{2}$ lies between $0$ and $1$, the direction of the inequality is **reversed** in passing to the exponents.

::grafico{f="0.5^x;8" xmin=-5 xmax=2 ymin=-2 ymax=18 area="0.5^x;8;-5;-3" punti="-3,8,vuoto" titolo="The graph of $y = \left(\dfrac{1}{2}\right)^{x}$ lies above the line $y = 8$ for $x < -3$"}
:::

:::esempio{titolo="Right-hand side that is not a power of the base"}
$$
3^{x} > 5 \iff 3^{x} > 3^{\log_3 5} \iff x > \log_3 5
$$
$$
\left(\frac{1}{2}\right)^{x} \leq 3 \iff 2^{-x} \leq 2^{\log_2 3} \iff -x \leq \log_2 3 \iff x \geq -\log_2 3
$$
In the first case $5 = 3^{\log_3 5}$ and the base $3$ is greater than $1$, so the direction is preserved. In the second case the power is rewritten with the reciprocal base $2$, greater than $1$, and the direction is preserved in passing to the exponents; from the inequality $-x \leq \log_2 3$ we then obtain $x \geq -\log_2 3$, because multiplying by $-1$ reverses the direction.
:::

## Inequalities with substitution

:::osservazione
In an inequality the substitution $t = a^{x}$ is used as in equations, with the same condition $t > 0$: the solution set of the inequality in $t$ must be **intersected** with $t > 0$ *before* returning to the variable $x$. Each condition obtained on $t$ then translates into an exponential inequality with the same base.
:::

:::esempio
$$
4^{x} - 3 \cdot 2^{x} + 2 > 0
$$
With $t = 2^{x}$, $t > 0$, the inequality becomes $t^{2} - 3t + 2 > 0$. The trinomial has roots $1$ and $2$ and is positive outside the roots, so the inequality is satisfied for $t < 1$ or $t > 2$; the intersection with $t > 0$ gives $0 < t < 1$ or $t > 2$. From $0 < 2^{x} < 1 = 2^{0}$ it follows that $x < 0$, since the base $2$ is greater than $1$; from $2^{x} > 2$ it follows that $x > 1$. The solutions are $x < 0$ or $x > 1$.

::grafico{f="4^x-3*2^x+2" xmin=-4 xmax=2 ymin=-1 ymax=4 asintoti="y=2" punti="0,0,vuoto;1,0,vuoto" titolo="$y = 4^{x} - 3 \cdot 2^{x} + 2$ is positive for $x < 0$ and for $x > 1$; the line $y = 2$, in red, is its horizontal asymptote"}
:::

:::esempio{titolo="Rational inequality"}
$$
\frac{3^{x} - 9}{3^{x} - 1} < 0
$$
The denominator vanishes for $3^{x} = 1$, that is, for $x = 0$, which must be excluded. The numerator is positive for $3^{x} > 9 = 3^{2}$, that is, for $x > 2$, and the denominator is positive for $3^{x} > 1$, that is, for $x > 0$. The fraction is negative where numerator and denominator have opposite signs, so the solutions are $0 < x < 2$.

::grafico{f="(3^x-9)/(3^x-1)" xmin=-4 xmax=4 ymin=-8 ymax=14 asintoti="x=0;y=1;y=9" punti="2,0,vuoto" titolo="$y = \dfrac{3^{x} - 9}{3^{x} - 1}$ is negative for $0 < x < 2$; the lines $x = 0$, $y = 1$ and $y = 9$ are its asymptotes"}
:::
