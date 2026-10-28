---
titolo: Logarithmic equations and inequalities
sommario: The logarithm as an exponent, its properties and its function, and the methods for solving logarithmic equations and inequalities starting from the domain conditions.
---

## The logarithm

:::definizione{#definizione-logaritmo titolo="Logarithm"}
For $a > 0$, $a \neq 1$ and $b > 0$, the logarithm to base $a$ of $b$ is the exponent to which $a$ must be raised to obtain $b$:
$$
\log_a b = c \iff a^{c} = b .
$$
The logarithm exists only for positive arguments, because $a^{c} > 0$ for every $c$. From the definition follow the two identities
$$
\log_a (a^{x}) = x \quad (x \in \mathbb{R}), \qquad
a^{\log_a x} = x \quad (x > 0),
$$
which are used to pass from exponential form to logarithmic form and vice versa; equations of the types $\log_a A = k$ and $a^{A} = k$ are based on these identities.
:::

:::esempio
$\log_2 8 = 3$ because $2^{3} = 8$; $\log_3 \dfrac{1}{9} = -2$ because $3^{-2} = \dfrac{1}{9}$; $\log_5 1 = 0$ because $5^{0} = 1$.
:::

## The properties of logarithms

:::teorema{#proprieta-logaritmi titolo="Properties of logarithms"}
For $a > 0$, $a \neq 1$ and $x > 0$, $y > 0$:
$$
\begin{gathered}
\log_a (x y) = \log_a x + \log_a y, \qquad
\log_a \frac{x}{y} = \log_a x - \log_a y, \\[6pt]
\log_a (x^{p}) = p \log_a x \quad (p \in \mathbb{R}).
\end{gathered}
$$
The three formulas hold when the arguments $x$ and $y$ are positive, therefore before applying them to expressions containing the unknown the domain conditions must be written. In equations and inequalities they are used to combine several logarithms into a single logarithm.
:::

:::esempio{titolo="One example for each property"}
$$
\begin{gathered}
\log_6 2 + \log_6 3 = \log_6 6 = 1, \qquad
\log_2 40 - \log_2 5 = \log_2 8 = 3, \\[6pt]
\log_3 (9^{5}) = 5 \log_3 9 = 10 .
\end{gathered}
$$
In each case the arguments are positive numbers, so the properties apply.
:::

:::teorema{#cambio-di-base titolo="Change of base"}
For $a, b > 0$ both different from $1$ and $x > 0$:
$$
\log_a x = \frac{\log_b x}{\log_b a} .
$$
It makes it possible to express any logarithm in a chosen base, for example in base $e$ or in base $10$, which are available on a calculator. For example $\log_4 8 = \dfrac{\log_2 8}{\log_2 4} = \dfrac{3}{2}$.
:::

## The logarithmic function

:::definizione{#funzione-logaritmica titolo="Logarithmic function"}
For $a > 0$, $a \neq 1$, the function $\log_a x$ is defined for $x > 0$. Properties:

- the graph passes through the point $(1, 0)$, because $\log_a 1 = 0$;
- the line $x = 0$ is a vertical asymptote;
- the function is injective: different arguments give different logarithms;
- for $a > 1$ the function is strictly increasing; for $0 < a < 1$ it is strictly decreasing.

As for the exponential function, injectivity justifies passing from the logarithms to the arguments in equations, and monotonicity determines the direction in inequalities.
:::

:::esempio{titolo="The two basic graphs"}
For $a = 2$ the function increases; for $a = \dfrac{1}{2}$ it decreases.

::grafico{f="log(x)/log(2)" xmin=-1 xmax=8 ymin=-4 ymax=4 asintoti="x=0" titolo="y = log₂ x: base greater than 1, increasing function"}

::grafico{f="log(x)/log(0.5)" xmin=-1 xmax=8 ymin=-4 ymax=4 asintoti="x=0" titolo="y = log to base 1/2 of x: base between 0 and 1, decreasing function"}
:::

## Domain conditions

:::definizione{#condizioni-di-esistenza titolo="Domain conditions"}
Before solving a logarithmic equation or inequality, we require all the arguments of the logarithms to be positive. The conditions must be satisfied together, so they form a system; solutions found that do not satisfy the system are discarded. For the expression $\log_2 (x - 1) + \log_2 (x + 3)$:
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
Solving without the domain conditions produces extraneous solutions. The equation $\log_{10} x + \log_{10} (x - 3) = 1$ leads to $x(x - 3) = 10$, that is $x = 5$ or $x = -2$; for $x = -2$ the arguments $x$ and $x - 3$ are negative, so the logarithms in the given equation do not exist and $x = -2$ is discarded. The only solution is $x = 5$.
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
where the condition $B > 0$ does not appear because it follows from $A = B$ and $A > 0$. The equivalence between $\log_a A = \log_a B$ and $A = B$, on positive arguments, holds because the logarithmic function is injective.
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
The value $x = 5$ satisfies the domain condition, so it is the solution.
:::

:::teorema{#logaritmo-uguale-k titolo="Logarithm equal to a number"}
For $a > 0$, $a \neq 1$ and $k \in \mathbb{R}$, by the definition of logarithm
$$
\log_a A = k \iff A = a^{k} .
$$
The domain condition $A > 0$ is automatically satisfied, because $a^{k} > 0$. The equation on the argument is an algebraic equation and is solved with the usual methods.
:::

:::esempio
$$
\log_2 (x - 3) = 4 \iff x - 3 = 2^{4} = 16 \iff x = 19
$$
The domain condition $x - 3 > 0$ is satisfied, since $x - 3 = 16 > 0$.
:::

## Equations by substitution

:::teorema{#sostituzione-logaritmica titolo="Substitution method"}
If $(\log_a x)^{2}$ and $\log_a x$ appear in the equation, the substitution $t = \log_a x$ transforms it into an algebraic equation in $t$. Unlike the exponential substitution, $t$ can take any real value, so no solution in $t$ is discarded because of its sign; the domain condition $x > 0$ remains. From each value of $t$ we obtain $x = a^{t}$, by the definition of logarithm.
:::

:::esempio
$$
(\log_2 x)^{2} - 3 \log_2 x + 2 = 0
$$
The domain condition is $x > 0$. With $t = \log_2 x$ the equation becomes $t^{2} - 3t + 2 = 0$, with solutions $t = 1$ and $t = 2$; therefore $x = 2^{1} = 2$ or $x = 2^{2} = 4$, both positive and therefore acceptable.
:::

## Logarithmic inequalities

:::teorema{#disequazioni-logaritmiche titolo="Inequalities with the same base"}
For $a > 0$, $a \neq 1$, the inequality $\log_a A > \log_a B$ is equivalent to a system that contains the domain condition:

- if $a > 1$ the direction is preserved, because the logarithmic function is strictly increasing:
$$
\begin{cases}
A > B \\
B > 0
\end{cases}
$$
- if $0 < a < 1$ the direction is reversed, because the function is strictly decreasing:
$$
\begin{cases}
A < B \\
A > 0
\end{cases}
$$

Each system contains the condition on the smaller argument, because the positivity of the other argument follows from the first inequality. The same rules hold with the symbols $\geq$, $<$, $\leq$.
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
The base $2$ is greater than $1$, so the direction is preserved when passing to the arguments.
:::

:::esempio{titolo="Base between 0 and 1"}
$$
\log_{1/3} (x + 1) > \log_{1/3} (5 - x) \iff
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
The base $\dfrac{1}{3}$ lies between $0$ and $1$, so the direction is reversed when passing to the arguments.
:::

:::teorema{#disequazioni-logaritmo-numero titolo="Inequality with a number on the right-hand side"}
The inequality $\log_a A > k$ is reduced to a comparison between logarithms by writing $k = \log_a (a^{k})$:

- if $a > 1$, it is equivalent to $A > a^{k}$, and the domain condition $A > 0$ follows from $A > a^{k} > 0$;
- if $0 < a < 1$, it is equivalent to the system
$$
\begin{cases}
A < a^{k} \\
A > 0
\end{cases}
$$

For example, with base greater than $1$: $\log_3 (x - 1) > 2$ is equivalent to $x - 1 > 3^{2} = 9$, that is $x > 10$.
:::
