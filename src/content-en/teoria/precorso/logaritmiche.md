---
titolo: Logarithmic equations and inequalities
sommario: The logarithm as an exponent, its properties and its function, and the methods for solving logarithmic equations and inequalities starting from the conditions of existence.
---

## The logarithm

:::definizione{#definizione-logaritmo titolo="Logarithm"}
For $a > 0$, $a \neq 1$ and $b > 0$, the **logarithm** to base $a$ of $b$ is the **exponent** to which $a$ must be raised to obtain $b$:
$$
\log_a b = c \iff a^{c} = b .
$$
The number $b$ is called the **argument** of the logarithm. The logarithm exists *only* for **positive** arguments, because $a^{c} > 0$ for every $c$. From the definition follow the two identities
$$
\log_a (a^{x}) = x \quad (x \in \mathbb{R}), \qquad
a^{\log_a x} = x \quad (x > 0),
$$
which are used to pass from exponential form to logarithmic form and vice versa; equations of the types $\log_a A = k$ and $a^{A} = k$ are based on these identities.

::grafico{f="2^x;x;log(x)/log(2)" uguale=1 xmin=-4 xmax=6 ymin=-4 ymax=6 punti="1,2,pieno;2,1,pieno" etichette="0.2,4.6,y = 2ˣ;4.2,1.4,y = log₂ x" titolo="The graphs of $y = 2^{x}$ and of $y = \log_2 x$, in red, are symmetric with respect to the line $y = x$: the point $(1, 2)$ of the first corresponds to the point $(2, 1)$ of the second"}
:::

:::esempio
$\log_2 8 = 3$ because $2^{3} = 8$; $\log_3 \dfrac{1}{9} = -2$ because $3^{-2} = \dfrac{1}{9}$; $\log_5 1 = 0$ because $5^{0} = 1$.
:::

:::esempio{titolo="Arguments with roots and fractional bases"}
When the base and the argument are powers of the same number, both are written as powers of that number and the exponents are compared.
$$
\begin{gathered}
\log_2 \sqrt{8} = \frac{3}{2} \quad \text{because} \quad \sqrt{8} = 2^{\frac{3}{2}}, \\[6pt]
\log_9 27 = \frac{3}{2} \quad \text{because} \quad 9^{\frac{3}{2}} = \left(3^{2}\right)^{\frac{3}{2}} = 3^{3} = 27, \\[6pt]
\log_{\frac{1}{2}} 8 = -3 \quad \text{because} \quad \left(\frac{1}{2}\right)^{-3} = 2^{3} = 8 .
\end{gathered}
$$
In the second case the exponent $c$ satisfies $3^{2c} = 3^{3}$, so $2c = 3$ and $c = \dfrac{3}{2}$.
:::

:::osservazione
Two bases have a symbol of their own. The **natural logarithm** is the logarithm to base $e \approx 2.718$ and is denoted by $\ln x$; the logarithm to base $10$ is often denoted by $\operatorname{Log} x$ or by $\log x$. In Mathematical Analysis courses, however, the notation $\log x$ denotes the natural logarithm, so the meaning of $\log x$ without a base depends on the text. For example $\ln e^{3} = 3$, $\ln 1 = 0$ and $\log_{10} 1000 = 3$.
:::

## The properties of logarithms

::::teorema{#proprieta-logaritmi titolo="Properties of logarithms"}
For $a > 0$, $a \neq 1$ and $x > 0$, $y > 0$:
$$
\begin{gathered}
\log_a (x y) = \log_a x + \log_a y, \qquad
\log_a \frac{x}{y} = \log_a x - \log_a y, \\[6pt]
\log_a (x^{p}) = p \log_a x \quad (p \in \mathbb{R}).
\end{gathered}
$$
The three formulas hold when the arguments $x$ and $y$ are positive, therefore before applying them to expressions containing the unknown the **domain restrictions** must be written. In equations and inequalities they are used to combine several logarithms into a **single logarithm**.

:::dimostrazione
The idea is to write $x$ and $y$ as powers of $a$ and to use the properties of powers. Let $m = \log_a x$ and $n = \log_a y$; by the definition of logarithm, $x = a^{m}$ and $y = a^{n}$.

- By the rule for the product of powers with the same base, $x y = a^{m} \cdot a^{n} = a^{m + n}$. Hence the exponent to which $a$ must be raised to obtain $xy$ is $m + n$, that is, $\log_a (xy) = \log_a x + \log_a y$.
- By the quotient rule, $\dfrac{x}{y} = \dfrac{a^{m}}{a^{n}} = a^{m - n}$, therefore $\log_a \dfrac{x}{y} = m - n = \log_a x - \log_a y$.
- By the rule for a power of a power, $x^{p} = \left(a^{m}\right)^{p} = a^{p m}$, therefore $\log_a (x^{p}) = p m = p \log_a x$.
:::
::::

:::esempio{titolo="One example for each property"}
$$
\begin{gathered}
\log_6 2 + \log_6 3 = \log_6 6 = 1, \qquad
\log_2 40 - \log_2 5 = \log_2 8 = 3, \\[6pt]
\log_3 (9^{5}) = 5 \log_3 9 = 10 .
\end{gathered}
$$
In each case the arguments are positive numbers, so the properties **apply**.
:::

:::attenzione
The logarithm of a sum is *not* the sum of the logarithms, and the square of a logarithm is *not* the logarithm of the square. With base $2$:
$$
\begin{gathered}
\log_2 (4 + 4) = \log_2 8 = 3, \qquad \log_2 4 + \log_2 4 = 2 + 2 = 4, \\[6pt]
(\log_2 8)^{2} = 3^{2} = 9, \qquad \log_2 (8^{2}) = 2 \log_2 8 = 6 .
\end{gathered}
$$
The notation $(\log_a x)^{2}$, also written $\log_a^{2} x$, denotes the square of the number $\log_a x$ and appears in equations solved by substitution.
:::

:::attenzione
With the unknown in the argument, the formula $\log_a (x^{p}) = p \log_a x$ requires $x > 0$, whereas $x^{2}$ is positive also for $x < 0$. For this reason, with an even exponent, one writes $\log_a (x^{2}) = 2 \log_a |x|$, valid for every $x \neq 0$. The equation $\log_3 (x^{2}) = 2$ is equivalent to $x^{2} = 9$ and has the solutions $x = 3$ and $x = -3$; the expression $2 \log_3 x = 2$ requires $x > 0$ and leads to $x = 3$ only, so the solution $x = -3$ is not found.
:::

::::teorema{#cambio-di-base titolo="Change of base"}
For $a, b > 0$ both different from $1$ and $x > 0$:
$$
\log_a x = \frac{\log_b x}{\log_b a} .
$$
It makes it possible to express *any* logarithm in a chosen base, for example in base $e$ or in base $10$, which are available on a calculator. For example $\log_4 8 = \dfrac{\log_2 8}{\log_2 4} = \dfrac{3}{2}$.

:::dimostrazione
The idea is to apply $\log_b$ to both sides of the equality that defines $\log_a x$. Let $c = \log_a x$; by the definition of logarithm, $a^{c} = x$. The two sides are positive and equal, so they have the same logarithm to base $b$:
$$
\log_b \left(a^{c}\right) = \log_b x .
$$
By the property of the logarithm of a power, the left-hand side equals $c \log_b a$, therefore $c \log_b a = \log_b x$. Since $a \neq 1$, one has $\log_b a \neq 0$, and dividing by $\log_b a$ gives $c = \dfrac{\log_b x}{\log_b a}$.
:::
::::

:::esempio{titolo="Computing with a calculator and reciprocal bases"}
The number $10$ is not an integer power of $2$, so $\log_2 10$ is computed by passing to the natural logarithm:
$$
\log_2 10 = \frac{\ln 10}{\ln 2} \approx \frac{2.3026}{0.6931} \approx 3.322 .
$$
With $x = b$ the formula gives $\log_a b = \dfrac{1}{\log_b a}$; for example $\log_4 2 = \dfrac{1}{\log_2 4} = \dfrac{1}{2}$. For a logarithm to base $a^{n}$, with $a$ as the new base, one obtains $\log_{a^{n}} x = \dfrac{1}{n} \log_a x$, which is used to bring logarithms such as $\log_4 x$ and $\log_2 x$ to the same base: indeed $\log_4 x = \dfrac{\log_2 x}{\log_2 4} = \dfrac{1}{2} \log_2 x$.
:::

## The logarithmic function

:::definizione{#funzione-logaritmica titolo="Logarithmic function"}
For $a > 0$, $a \neq 1$, the function $\log_a x$ is defined for $x > 0$. Properties:

- the graph passes through the point $(1, 0)$, because $\log_a 1 = 0$;
- the line $x = 0$ is a vertical asymptote, that is, the graph approaches the $y$-axis without touching it;
- the function is **injective**: different arguments give different logarithms;
- for $a > 1$ the function is strictly **increasing**, that is, $x_1 < x_2$ implies $\log_a x_1 < \log_a x_2$; for $0 < a < 1$ it is strictly **decreasing**, that is, $x_1 < x_2$ implies $\log_a x_1 > \log_a x_2$.

Injectivity justifies passing from the logarithms to the arguments in equations, and the fact that the function is increasing or decreasing determines the direction in inequalities. The same properties hold for the exponential function, treated in the chapter on exponential equations and inequalities.
:::

:::esempio{titolo="The two basic graphs"}
For $a = 2$ the function increases; for $a = \dfrac{1}{2}$ it decreases.

::grafico{f="log(x)/log(2)" xmin=-1 xmax=8 ymin=-4 ymax=4 asintoti="x=0" titolo="$y = \log_2 x$: base greater than $1$, increasing function"}

::grafico{f="log(x)/log(0.5)" xmin=-1 xmax=8 ymin=-4 ymax=4 asintoti="x=0" titolo="$y = \log_{\frac{1}{2}} x$: base between $0$ and $1$, decreasing function"}
:::

## Domain restrictions

:::definizione{#condizioni-di-esistenza titolo="Domain restrictions"}
Before solving a logarithmic equation or inequality, we require *all* the arguments of the logarithms to be **positive**. The conditions must be satisfied together, so they form a **system**; solutions found that do not satisfy the system are discarded. For the expression $\log_2 (x - 1) + \log_2 (x + 3)$:
$$
\begin{cases}
x - 1 > 0 \\
x + 3 > 0
\end{cases}
\iff
\begin{cases}
x > 1 \\
x > -3
\end{cases}
\iff x > 1 .
$$
:::

:::attenzione
Solving without the domain restrictions produces **extraneous solutions**. The equation $\log_{10} x + \log_{10} (x - 3) = 1$ leads to $x(x - 3) = 10$, that is $x = 5$ or $x = -2$; for $x = -2$ the arguments $x$ and $x - 3$ are negative, so the logarithms in the given equation do not exist and $x = -2$ **must be discarded**. The only solution is $x = 5$.

::grafico{f="log(x)/log(10)+log(x-3)/log(10);1;log(x*(x-3))/log(10)+0*sqrt(-x)" xmin=-4 xmax=8 ymin=-2 ymax=2 asintoti="x=3" punti="5,1,pieno;-2,1,vuoto" titolo="$y = \log_{10} x + \log_{10} (x - 3)$ meets the line $y = 1$ only at $x = 5$; the red curve, $y = \log_{10} \bigl(x(x - 3)\bigr)$ for $x < 0$, meets the line at $x = -2$"}
:::

## Logarithmic equations

:::teorema{#equazioni-logaritmiche titolo="Equality of logarithms with the same base"}
For $a > 0$, $a \neq 1$, the equation $\log_a A = \log_a B$ is equivalent to the system
$$
\begin{cases}
A = B \\
A > 0
\end{cases}
$$
where the condition $B > 0$ does *not* appear because it follows from $A = B$ and $A > 0$. The equivalence between $\log_a A = \log_a B$ and $A = B$, on positive arguments, holds because the logarithmic function is **injective**.
:::

:::esempio
$$
\log_3 (2x - 1) = \log_3 (x + 4) \iff
\begin{cases}
2x - 1 = x + 4 \\
2x - 1 > 0
\end{cases}
\iff
\begin{cases}
x = 5 \\
x > \dfrac{1}{2}
\end{cases}
\iff x = 5
$$
The value $x = 5$ satisfies the domain restriction, so it **is the solution**.
:::

:::teorema{#logaritmo-uguale-k titolo="Logarithm equal to a number"}
For $a > 0$, $a \neq 1$ and $k \in \mathbb{R}$, by the definition of logarithm
$$
\log_a A = k \iff A = a^{k} .
$$
The domain restriction $A > 0$ is **automatically satisfied**, because $a^{k} > 0$. The equation in the argument is an algebraic equation and is solved with the usual methods.
:::

:::esempio
$$
\log_2 (x - 3) = 4 \iff x - 3 = 2^{4} = 16 \iff x = 19
$$
The domain restriction $x - 3 > 0$ is **satisfied**, since $x - 3 = 16 > 0$.
:::

## Equations by substitution

:::teorema{#sostituzione-logaritmica titolo="Substitution method"}
If $(\log_a x)^{2}$ and $\log_a x$ appear in the equation, the substitution $t = \log_a x$ transforms it into an algebraic equation in $t$. Unlike the exponential substitution, $t$ can take *any* real value, so **no solution** in $t$ is discarded because of its sign; the domain restriction $x > 0$ remains. From each value of $t$ we obtain $x = a^{t}$, by the definition of logarithm.
:::

:::esempio
$$
(\log_2 x)^{2} - 3 \log_2 x + 2 = 0
$$
The domain restriction is $x > 0$. With $t = \log_2 x$ the equation becomes $t^{2} - 3t + 2 = 0$, with solutions $t = 1$ and $t = 2$; therefore $x = 2^{1} = 2$ or $x = 2^{2} = 4$, both positive and therefore **acceptable**.
:::

## Logarithmic inequalities

:::teorema{#disequazioni-logaritmiche titolo="Inequalities with the same base"}
For $a > 0$, $a \neq 1$, the inequality $\log_a A > \log_a B$ is equivalent to a system that contains the domain restriction:

- if $a > 1$ the direction is **preserved**, because the logarithmic function is strictly increasing:
$$
\begin{cases}
A > B \\
B > 0
\end{cases}
$$
- if $0 < a < 1$ the direction is **reversed**, because the function is strictly decreasing:
$$
\begin{cases}
A < B \\
A > 0
\end{cases}
$$

Each system contains the condition on the **smaller argument**, because the positivity of the other argument follows from the first inequality. The same rules hold with the symbols $\geq$, $<$, $\leq$.
:::

:::esempio{titolo="Base greater than 1"}
$$
\log_2 (3x - 2) > \log_2 (x + 4) \iff
\begin{cases}
3x - 2 > x + 4 \\
x + 4 > 0
\end{cases}
\iff
\begin{cases}
x > 3 \\
x > -4
\end{cases}
\iff x > 3
$$
The base $2$ is greater than $1$, so the direction is **preserved** when passing to the arguments.

::grafico{f="log(3*x-2)/log(2);log(x+4)/log(2)" xmin=-4.5 xmax=8.5 ymin=-3 ymax=5 area="log(3*x-2)/log(2);log(x+4)/log(2);3;8.5" punti="3,2.807,vuoto" titolo="The graph of $y = \log_2 (3x - 2)$ lies above that of $y = \log_2 (x + 4)$, dashed, for $x > 3$"}
:::

:::esempio{titolo="Base between 0 and 1"}
$$
\log_{\frac{1}{3}} (x + 1) > \log_{\frac{1}{3}} (5 - x) \iff
\begin{cases}
x + 1 < 5 - x \\
x + 1 > 0
\end{cases}
\iff
\begin{cases}
x < 2 \\
x > -1
\end{cases}
\iff -1 < x < 2
$$
The base $\dfrac{1}{3}$ lies between $0$ and $1$, so the direction is **reversed** when passing to the arguments.

::grafico{f="log(x+1)/log(1/3);log(5-x)/log(1/3)" xmin=-2 xmax=6 ymin=-3 ymax=3 area="log(x+1)/log(1/3);log(5-x)/log(1/3);-0.99;2" punti="2,-1,vuoto" legenda="y = \log_{\frac{1}{3}} (x + 1);y = \log_{\frac{1}{3}} (5 - x)" titolo="With base $\dfrac{1}{3}$ the graphs are decreasing: $y = \log_{\frac{1}{3}} (x + 1)$ lies above $y = \log_{\frac{1}{3}} (5 - x)$, dashed, for $-1 < x < 2$"}
:::

:::teorema{#disequazioni-logaritmo-numero titolo="Inequality with a number on the right-hand side"}
The inequality $\log_a A > k$ is reduced to a **comparison between logarithms** by writing $k = \log_a (a^{k})$:

- if $a > 1$, it is equivalent to $A > a^{k}$, and the domain restriction $A > 0$ follows from $A > a^{k} > 0$;
- if $0 < a < 1$, it is equivalent to the system
$$
\begin{cases}
A < a^{k} \\
A > 0
\end{cases}
$$

For the inequality $\log_a A < k$ the two cases are swapped: if $0 < a < 1$ it is equivalent to $A > a^{k}$, and the domain restriction follows from $A > a^{k} > 0$; if $a > 1$ it is equivalent to the system
$$
\begin{cases}
A < a^{k} \\
A > 0
\end{cases}
$$

For example, with base greater than $1$: $\log_3 (x - 1) > 2$ is equivalent to $x - 1 > 3^{2} = 9$, that is $x > 10$.

::grafico{f="log(x-1)/log(3);2" xmin=-0.5 xmax=14 ymin=-3 ymax=4 area="log(x-1)/log(3);2;10;14" asintoti="x=1" punti="10,2,vuoto" titolo="The graph of $y = \log_3 (x - 1)$ lies above the line $y = 2$ for $x > 10$"}
:::
