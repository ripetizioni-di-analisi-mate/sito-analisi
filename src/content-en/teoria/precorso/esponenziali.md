---
titolo: Exponential equations and inequalities
sommario: The function a^x and its properties, and the methods for solving equations and inequalities in which the unknown appears in the exponent.
---

## The exponential function

:::definizione{#funzione-esponenziale titolo="Exponential function"}
For $a > 0$, $a \neq 1$, the **exponential function** with base $a$ assigns to *every* $x \in \mathbb{R}$ the number $a^{x}$. Properties:

- $a^{x} > 0$ for every $x \in \mathbb{R}$: the graph lies above the $x$-axis and the line $y = 0$ is a horizontal asymptote;
- $a^{0} = 1$, so the graph passes through the point $(0, 1)$ whatever the base;
- the function is injective: different exponents give different powers;
- for $a > 1$ the function is strictly increasing; for $0 < a < 1$ it is strictly decreasing.

*All* the solution methods in this chapter rest on **injectivity** and **monotonicity**: injectivity justifies passing from the powers to the exponents in equations, and monotonicity governs the direction of the inequality sign in inequalities.
:::

:::esempio{titolo="The two basic graphs"}
For $a = 2$ the function increases; for $a = \dfrac{1}{2}$ it decreases, since $\left(\dfrac{1}{2}\right)^{x} = 2^{-x}$.

::grafico{f="2^x" xmin=-3 xmax=3 ymin=-0.5 ymax=8 asintoti="y=0" titolo="$y = 2^x$: base greater than $1$, increasing function"}

::grafico{f="0.5^x" xmin=-3 xmax=3 ymin=-0.5 ymax=8 asintoti="y=0" titolo="$y = \left(\dfrac{1}{2}\right)^x$: base between $0$ and $1$, decreasing function"}
:::

## The rules of powers

:::teorema{#regole-delle-potenze titolo="Rules of powers"}
For $a > 0$ and $x, y \in \mathbb{R}$:
$$
a^{x} \, a^{y} = a^{x+y}, \qquad
\frac{a^{x}}{a^{y}} = a^{x-y}, \qquad
(a^{x})^{y} = a^{xy}, \qquad
a^{-x} = \frac{1}{a^{x}} .
$$
They are used to rewrite the two sides of an equation or an inequality as **powers of the same base**. For example $8^{x} = (2^{3})^{x} = 2^{3x}$ and $\dfrac{1}{9} = 3^{-2}$.
:::

## Equations with the same base

:::teorema{#stessa-base titolo="Equality of powers with the same base"}
For $a > 0$, $a \neq 1$:
$$
a^{A} = a^{B} \iff A = B .
$$
If $A = B$ the two powers coincide; conversely, since the exponential function is **injective**, $a^{A} = a^{B}$ implies $A = B$. The equation in the exponents is an algebraic equation and is solved with the ordinary methods.
:::

:::esempio
$$
2^{x+1} = 16 \iff 2^{x+1} = 2^{4} \iff x + 1 = 4 \iff x = 3
$$
The number $16$ has been rewritten as a power of $2$, so the equality of the powers is equivalent to the **equality of the exponents**.
:::

## Equations solved with the logarithm

:::teorema{#esponenziale-uguale-k titolo="Equation with different bases"}
For $a > 0$, $a \neq 1$ and $k > 0$:
$$
a^{A} = k \iff A = \log_a k .
$$
By definition, the **logarithm** $\log_a k$ is the exponent to which $a$ must be raised to obtain $k$, therefore $k = a^{\log_a k}$ and the equation can be rewritten as $a^{A} = a^{\log_a k}$, which is equivalent to $A = \log_a k$ by the **equality of powers with the same base**. The method is used when $k$ is *not* a power of $a$ with a recognizable rational exponent.
:::

:::esempio
$$
3^{x} = 5 \iff x = \log_3 5, \qquad
2^{x-1} = 7 \iff x - 1 = \log_2 7 \iff x = 1 + \log_2 7
$$
In the second case the logarithm gives the value of the **whole exponent** $x - 1$, so the solution is obtained by solving the first-degree equation $x - 1 = \log_2 7$.
:::

:::attenzione
The equation $a^{x} = k$ with $k \leq 0$ has **no solutions**, because $a^{x} > 0$ for *every* $x \in \mathbb{R}$. For example $2^{x} = -4$ and $5^{x} = 0$ have no solutions: a power with a positive base is *never* negative or zero.
:::

## Equations with substitution

:::teorema{#sostituzione-esponenziale titolo="Substitution method"}
If $a^{2x} = (a^{x})^{2}$ and $a^{x}$ appear in the equation, the **substitution** $t = a^{x}$ transforms it into an algebraic equation in $t$. Since $a^{x} > 0$ for every $x$, the new unknown is subject to the condition $t > 0$, so any solutions with $t \leq 0$ must be **discarded**. For each acceptable value of $t$, the equation $a^{x} = t$ is solved with the equality of powers with the same base or with the logarithm.
:::

:::esempio
$$
9^{x} - 4 \cdot 3^{x} + 3 = 0
$$
Since $9^{x} = (3^{x})^{2}$, with the substitution $t = 3^{x}$, $t > 0$, the equation becomes $t^{2} - 4t + 3 = 0$, with solutions $t = 1$ and $t = 3$, both positive and therefore **acceptable**. From $3^{x} = 1 = 3^{0}$ it follows that $x = 0$; from $3^{x} = 3$ it follows that $x = 1$.
:::

## Exponential inequalities

:::teorema{#disequazioni-esponenziali titolo="Inequalities with the same base"}
For $a > 0$, $a \neq 1$:

- if $a > 1$, then $a^{A} > a^{B} \iff A > B$: the direction of the inequality is **preserved**, because the exponential function with base $a$ is strictly increasing;
- if $0 < a < 1$, then $a^{A} > a^{B} \iff A < B$: the direction of the inequality is **reversed**, because the function is strictly decreasing.

The same rules hold with the symbols $\geq$, $<$, $\leq$. An inequality of the type $a^{A} > k$ with $k > 0$ is brought back to this form by writing $k$ as a power of $a$, possibly with the logarithm: $k = a^{\log_a k}$.
:::

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
:::

## Inequalities with substitution

:::osservazione
In an inequality the substitution $t = a^{x}$ is used as in equations, with the same condition $t > 0$: the solution set of the inequality in $t$ must be **intersected** with $t > 0$ before returning to the variable $x$. Each condition obtained on $t$ then translates into an exponential inequality with the same base.
:::

:::esempio
$$
4^{x} - 3 \cdot 2^{x} + 2 > 0
$$
With $t = 2^{x}$, $t > 0$, the inequality $t^{2} - 3t + 2 > 0$ is satisfied for $t < 1$ or $t > 2$; the intersection with $t > 0$ gives $0 < t < 1$ or $t > 2$. From $0 < 2^{x} < 1 = 2^{0}$ it follows that $x < 0$, since the base $2$ is greater than $1$; from $2^{x} > 2$ it follows that $x > 1$. The **solutions** are $x < 0$ or $x > 1$.
:::
