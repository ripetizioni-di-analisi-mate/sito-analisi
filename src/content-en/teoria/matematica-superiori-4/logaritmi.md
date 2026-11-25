---
titolo: Logarithms, logarithmic equations and inequalities
sommario: What the logarithm of a number is, which properties it has and how to change its base, what the graph of a logarithmic function looks like, how to solve logarithmic equations and inequalities and exponential equations that require logarithms, and how logarithms are used for pH, decibels and earthquake magnitude.
---

## Definition of a logarithm

:::definizione{#definizione-logaritmo titolo="Logarithm"}
The equation $2^x = 8$ has the solution $x = 3$ because $8$ is the third power of $2$. The equation $2^x = 3$ also has exactly one solution because the function $y = 2^x$ is increasing and takes every positive value, as we saw in the topic on exponential functions. This solution, however, is not an integer and cannot be found mentally. A logarithm is the name given to an exponent of this kind.

Let $a$ and $b$ be real numbers with $a > 0$, $a \neq 1$ and $b > 0$. The **logarithm** to base $a$ of $b$ is the exponent to which $a$ must be raised to obtain $b$:
$$
\log_a b = x \iff a^x = b .
$$
The number $a$ is called the **base**, and $b$ is called the **argument** of the logarithm. For example, $\log_2 8 = 3$ because $2^3 = 8$, $\log_5 \dfrac{1}{25} = -2$ because $5^{-2} = \dfrac{1}{25}$, and $\log_9 3 = \dfrac{1}{2}$ because $9^{\frac{1}{2}} = \sqrt{9} = 3$. The solution of $2^x = 3$ is therefore written $x = \log_2 3$ and is approximately $1.585$.

::grafico{f="2^x;3" punti="1.585,3,pieno" segmenti="1.585,0,1.585,3" xmin=-3 xmax=4 ymin=-1 ymax=9 legenda="y = 2^x;y = 3" titolo="The graph of $2^x$ intersects the line $y = 3$ at the point with horizontal coordinate $\log_2 3 \approx 1.585$"}

:::

:::osservazione{#esistenza-logaritmo titolo="Conditions on the base and argument"}
The three conditions in the definition ensure that the required exponent exists and is unique.

- The base is positive because powers with a negative base are not defined for all real exponents. For example, $(-4)^{\frac{1}{2}}$ would be $\sqrt{-4}$, which is not a real number.
- The base differs from $1$ because $1^x = 1$ for every $x$. Therefore the equation $1^x = 5$ has no solutions, whereas $1^x = 1$ has infinitely many.
- The argument is positive because, for $a > 0$, the power $a^x$ is positive for every $x$. Thus $\log_2 0$ and $\log_2 (-4)$ are undefined, since no power of $2$ equals $0$ or $-4$.

The value of the logarithm itself can be positive, zero or negative. For example, $\log_{10} 0.1 = -1$ because $10^{-1} = 0.1$.
:::

:::definizione{#logaritmo-naturale-decimale titolo="Natural and common logarithms"}
Two bases occur more often than the others. The **natural logarithm** has as its base the number $e \approx 2.718$, introduced in the topic on exponential functions. It is written $\ln$:
$$
\ln b = \log_e b .
$$
The **common logarithm** has base $10$ and is written $\log_{10}$. On a calculator the two logarithms correspond to the “ln” and “log” keys. For example, $\ln e^3 = 3$, $\ln 1 = 0$, $\log_{10} 1000 = 3$ and $\log_{10} 0.01 = -2$.

Common logarithms can be used to count the digits of a number. A number $N$ with $100 \leq N < 1000$ has three digits, and its common logarithm satisfies $2 \leq \log_{10} N < 3$. For example, $\log_{10} 350 \approx 2.544$.
:::

::::teorema{#identita-logaritmiche titolo="Consequences of the definition"}
Let $a > 0$ with $a \neq 1$. The following equalities hold:
$$
\log_a 1 = 0 ,
\qquad
\log_a a = 1 ,
\qquad
a^{\log_a b} = b \quad \text{for every } b > 0 ,
\qquad
\log_a \left( a^x \right) = x \quad \text{for every } x \in \mathbb{R} .
$$
The last two equalities simplify expressions containing a power and a logarithm with the same base. For example, $3^{\log_3 7} = 7$, $e^{\ln 5} = 5$ and $\log_2 2^{10} = 10$. They also show that the functions $a^x$ and $\log_a x$ are inverses of each other, a fact that determines the graph of the logarithmic function.

:::dimostrazione
Each equality follows by reading the definition of a logarithm in one direction or the other. Since $a^0 = 1$, the exponent to which $a$ must be raised to obtain $1$ is $0$, so $\log_a 1 = 0$. Since $a^1 = a$, we have $\log_a a = 1$.

For the third equality, set $x = \log_a b$. By the definition of a logarithm, $a^x = b$, and substituting $x$ gives $a^{\log_a b} = b$. For the fourth equality, the exponent to which $a$ must be raised to obtain $a^x$ is precisely $x$, so $\log_a \left( a^x \right) = x$.
:::
::::

:::esempio{titolo="Evaluating a logarithm from its definition"}
To evaluate $\log_8 32$, find the exponent $x$ such that $8^x = 32$. Write the two powers with the same base $2$:
$$
8^x = 32
\iff
\left( 2^3 \right)^x = 2^5
\iff
2^{3x} = 2^5
\iff
3x = 5 ,
$$
where the last step holds because two powers with the same positive base different from $1$ are equal only if their exponents are equal. Therefore $\log_8 32 = \dfrac{5}{3}$.

Similarly, $\log_{\frac{1}{3}} 27 = -3$ because $\left( \dfrac{1}{3} \right)^{-3} = 3^3 = 27$, and $\log_{\sqrt{5}} 125 = 6$ because $\left( \sqrt{5} \right)^6 = 5^3 = 125$.
:::

## Properties of logarithms

:::richiamo{titolo="Exponent laws"}
For $a > 0$ and real $s$, $t$, $r$, we have
$$
a^s \cdot a^t = a^{s + t} ,
\qquad
\frac{a^s}{a^t} = a^{s - t} ,
\qquad
\left( a^s \right)^r = a^{r s} .
$$
:::

::::teorema{#logaritmo-prodotto titolo="The logarithm of a product"}
Let $a > 0$ with $a \neq 1$, and let $u > 0$ and $v > 0$. Then
$$
\log_a (u v) = \log_a u + \log_a v .
$$
The logarithm of a product is therefore the sum of the logarithms of its factors. For example, $\log_2 (4 \cdot 8) = \log_2 32 = 5$, and indeed $\log_2 4 + \log_2 8 = 2 + 3 = 5$. This rule also lets us evaluate a sum such as $\log_6 4 + \log_6 9 = \log_6 36 = 2$ when the individual logarithms cannot be found mentally.

:::dimostrazione
The idea is that logarithms are exponents, and when powers with the same base are multiplied, their exponents add. Set $s = \log_a u$ and $t = \log_a v$. By the definition of a logarithm, $u = a^s$ and $v = a^t$, so
$$
u v = a^s \cdot a^t = a^{s + t}
$$
by the product rule for powers. Therefore $s + t$ is the exponent to which $a$ must be raised to obtain $u v$, that is, $\log_a (u v) = s + t = \log_a u + \log_a v$.
:::
::::

::::teorema{#logaritmo-quoziente titolo="The logarithm of a quotient"}
Let $a > 0$ with $a \neq 1$, and let $u > 0$ and $v > 0$. Then
$$
\log_a \frac{u}{v} = \log_a u - \log_a v .
$$
For example, $\log_3 54 - \log_3 2 = \log_3 27 = 3$. Taking $u = 1$ gives the special case $\log_a \dfrac{1}{v} = -\log_a v$, since $\log_a 1 = 0$. For example, $\log_2 \dfrac{1}{32} = -5$.

:::dimostrazione
With $s = \log_a u$ and $t = \log_a v$, we have $u = a^s$ and $v = a^t$. The quotient rule for powers gives
$$
\frac{u}{v} = \frac{a^s}{a^t} = a^{s - t} ,
$$
so $\log_a \dfrac{u}{v} = s - t = \log_a u - \log_a v$.
:::
::::

::::teorema{#logaritmo-potenza titolo="The logarithm of a power"}
Let $a > 0$ with $a \neq 1$, let $u > 0$, and let $r$ be a real number. Then
$$
\log_a \left( u^r \right) = r \log_a u .
$$
The exponent in the argument therefore becomes a coefficient multiplying the logarithm. For example, $\log_2 8^5 = 5 \log_2 8 = 15$ and $\log_3 \sqrt{3} = \log_3 3^{\frac{1}{2}} = \dfrac{1}{2}$. This rule brings an unknown down from an exponent, which is why it helps solve exponential equations with different bases.

:::dimostrazione
With $s = \log_a u$, we have $u = a^s$. By the power-of-a-power rule,
$$
u^r = \left( a^s \right)^r = a^{r s} ,
$$
so $\log_a \left( u^r \right) = r s = r \log_a u$.
:::
::::

:::esempio{titolo="Expanding and combining logarithmic expressions"}
For $p > 0$ and $q > 0$, the three rules let us expand the following logarithm:
$$
\begin{aligned}
\log_3 \frac{27 p^2}{\sqrt{q}}
&= \log_3 27 + \log_3 p^2 - \log_3 q^{\frac{1}{2}} \\[6pt]
&= 3 + 2 \log_3 p - \frac{1}{2} \log_3 q .
\end{aligned}
$$
Read from right to left, the same rules combine several logarithms into one:
$$
2 \ln 3 + \ln 5 - \ln 9 = \ln 9 + \ln 5 - \ln 9 = \ln \frac{9 \cdot 5}{9} = \ln 5 .
$$
:::

:::attenzione
The rules apply to products, quotients and powers in the argument. There is no corresponding formula for the logarithm of a sum. For example,
$$
\log_2 (2 + 6) = \log_2 8 = 3 ,
\qquad
\log_2 2 + \log_2 6 = \log_2 12 \approx 3.585 ,
$$
so $\log_2 (2 + 6) \neq \log_2 2 + \log_2 6$. Likewise, the quotient of two logarithms differs from the logarithm of their quotient because $\dfrac{\log_2 8}{\log_2 4} = \dfrac{3}{2}$, whereas $\log_2 \dfrac{8}{4} = 1$.
:::

:::osservazione{#proprieta-e-dominio titolo="Logarithm rules and conditions on the arguments"}
The rules hold when *all* the arguments involved are positive. When the arguments contain an unknown, the two expressions in an identity can have different domains.

- The expression $\ln \left( x^2 \right)$ is defined for every $x \neq 0$, whereas $2 \ln x$ is defined only for $x > 0$. For $x \neq 0$ the correct equality is $\ln \left( x^2 \right) = 2 \ln |x|$ because $x^2 = |x|^2$ and $|x| > 0$.
- The expression $\ln \big( (x - 1)(x - 2) \big)$ is defined for $x < 1$ or $x > 2$, whereas $\ln (x - 1) + \ln (x - 2)$ is defined only for $x > 2$.

Applying a rule that enlarges the domain of an equation can introduce solutions that the original equation does not have. For this reason, the first step when solving logarithmic equations is to write down the domain conditions.
:::

## Change of base

::::teorema{#cambiamento-base titolo="The change-of-base formula"}
Scientific calculators usually provide only logarithms to bases $e$ and $10$. The following formula lets us calculate a logarithm in any base using logarithms in a different base.

Let $a$ and $c$ be positive numbers different from $1$, and let $b > 0$. Then
$$
\log_a b = \frac{\log_c b}{\log_c a} .
$$
For example,
$$
\log_2 3 = \frac{\ln 3}{\ln 2} \approx \frac{1.0986}{0.6931} \approx 1.585 ,
\qquad
\log_8 32 = \frac{\log_2 32}{\log_2 8} = \frac{5}{3} ,
$$
and the second result agrees with the one obtained from the definition.

:::dimostrazione
The idea is to take the logarithm to base $c$ of both sides of the equality defining $\log_a b$. Set $x = \log_a b$, so $a^x = b$. The two sides are equal positive numbers and therefore have the same logarithm to base $c$:
$$
\log_c \left( a^x \right) = \log_c b .
$$
By the power rule for logarithms, the left-hand side is $x \log_c a$, so $x \log_c a = \log_c b$. Since $a \neq 1$, we have $\log_c a \neq 0$, because the only number whose logarithm is zero is $1$. We can therefore divide by $\log_c a$ to obtain $x = \dfrac{\log_c b}{\log_c a}$.
:::
::::

:::esempio{titolo="Consequences of the change-of-base formula"}
- If we also have $b \neq 1$, then taking $c = b$ gives $\log_a b = \dfrac{\log_b b}{\log_b a} = \dfrac{1}{\log_b a}$. For example, $\log_4 2 = \dfrac{1}{\log_2 4} = \dfrac{1}{2}$.
- A reciprocal base gives $\log_{\frac{1}{a}} b = \dfrac{\log_a b}{\log_a \frac{1}{a}} = -\log_a b$ because $\log_a \dfrac{1}{a} = -1$. For example, $\log_{\frac{1}{2}} 8 = -3$.
- When the base is a power, we have $\log_{a^2} b = \dfrac{\log_a b}{\log_a a^2} = \dfrac{1}{2} \log_a b$. For example, $\log_9 x = \dfrac{1}{2} \log_3 x$ for $x > 0$.

The last equality helps solve equations containing logarithms with different bases. The equation $\log_3 x + \log_9 x = 3$, with $x > 0$, becomes
$$
\log_3 x + \frac{1}{2} \log_3 x = 3
\iff
\frac{3}{2} \log_3 x = 3
\iff
\log_3 x = 2 ,
$$
so $x = 3^2 = 9$.
:::

## The logarithmic function

:::richiamo{titolo="Exponential function"}
Let $a > 0$ with $a \neq 1$. The function $y = a^x$ has domain $\mathbb{R}$ and range $(0, +\infty)$. Its graph passes through $(0, 1)$, and the function is strictly increasing if $a > 1$ and strictly decreasing if $0 < a < 1$.
:::

:::definizione{#funzione-logaritmica titolo="Logarithmic function"}
Since $y = a^x$ is strictly monotone and takes every positive value, for each $x > 0$ there is exactly one exponent $y$ such that $a^y = x$, namely $y = \log_a x$. The function
$$
y = \log_a x , \qquad x > 0 ,
$$
is called the **logarithmic function** with base $a$ and is the **inverse function** of $y = a^x$. The point $(p, q)$ lies on the graph of the exponential function if and only if the point $(q, p)$ lies on the graph of the logarithm. Interchanging the coordinates reflects a point across the angle bisector $y = x$, so the two graphs are reflections of each other across this line.

For example, $(3, 8)$ lies on the graph of $2^x$, so $(8, 3)$ lies on the graph of $\log_2 x$. Interchanging the columns of the table for $2^x$ gives the values
$$
\log_2 \frac{1}{4} = -2 ,
\quad
\log_2 \frac{1}{2} = -1 ,
\quad
\log_2 1 = 0 ,
\quad
\log_2 2 = 1 ,
\quad
\log_2 4 = 2 ,
\quad
\log_2 8 = 3 .
$$

::grafico{f="2^x;log(x)/log(2);x" punti="1,2,pieno;2,1,pieno" segmenti="1,2,2,1" xmin=-4 xmax=6 ymin=-4 ymax=6 uguale=1 legenda="y = 2^x;y = \log_2 x;y = x" titolo="The graphs of $2^x$ and $\log_2 x$ are reflections of each other across the line $y = x$. The point $(1, 2)$ on the first corresponds to $(2, 1)$ on the second"}

:::

::::teorema{#proprieta-funzione-logaritmica titolo="Properties of the logarithmic function"}
Let $a > 0$ with $a \neq 1$. The function $y = \log_a x$ has the following properties.

- Its domain is $(0, +\infty)$ and its range is $\mathbb{R}$.
- Its graph passes through $(1, 0)$ and $(a, 1)$.
- If $a > 1$, the function is **strictly increasing**. It is negative for $0 < x < 1$ and positive for $x > 1$.
- If $0 < a < 1$, the function is **strictly decreasing**. It is positive for $0 < x < 1$ and negative for $x > 1$.
- The $y$-axis is a vertical asymptote. As $x$ approaches $0$ from the right, $\log_a x$ tends to $-\infty$ if $a > 1$ and to $+\infty$ if $0 < a < 1$.

Since $\log_{\frac{1}{a}} x = -\log_a x$, the graphs of $\log_a x$ and $\log_{\frac{1}{a}} x$ are reflections of each other across the $x$-axis. For example, $\log_2 4 = 2$ and $\log_{\frac{1}{2}} 4 = -2$.

::grafico{f="log(x)/log(2);log(x)/log(0.5)" punti="1,0,pieno;2,1,pieno;2,-1,pieno" asintoti="x=0" xmin=-1 xmax=8 ymin=-4 ymax=4 legenda="y = \log_2 x;y = \log_{\frac{1}{2}} x" titolo="With base $2$ the logarithm is increasing, and with base $\dfrac{1}{2}$ it is decreasing. Both graphs pass through $(1, 0)$ and have the $y$-axis as an asymptote"}

:::dimostrazione
The domain and range of the logarithm are the range and domain of the exponential function because the two functions are inverses of each other. The two points follow from $\log_a 1 = 0$ and $\log_a a = 1$.

To prove monotonicity, the idea is to compare two arguments by writing them as powers of $a$. Let $a > 1$ and let $0 < x_1 < x_2$. Set $y_1 = \log_a x_1$ and $y_2 = \log_a x_2$, so $x_1 = a^{y_1}$ and $x_2 = a^{y_2}$. If $y_1 \geq y_2$, then because $a^x$ is increasing we would have $a^{y_1} \geq a^{y_2}$, that is, $x_1 \geq x_2$, contradicting the hypothesis. Therefore $y_1 < y_2$, and the function is strictly increasing. For $0 < a < 1$ the same argument uses a decreasing exponential function.

The sign follows from monotonicity. For $a > 1$ and $x > 1$ we have $\log_a x > \log_a 1 = 0$, and for $0 < x < 1$ we have $\log_a x < 0$.
:::
::::

:::osservazione{titolo="The logarithm grows slowly"}
For $a > 1$ the logarithm is increasing, but its values grow very slowly. For example, $\log_{10} x$ equals $6$ only when $x = 1\,000\,000$. For this reason logarithms are useful for representing quantities that span many orders of magnitude.

A natural number $N$ with $k$ digits satisfies $10^{k - 1} \leq N < 10^k$, so $k - 1 \leq \log_{10} N < k$. For example,
$$
\log_{10} 2^{100} = 100 \log_{10} 2 \approx 30.1 ,
$$
hence $2^{100}$ has $31$ digits.
:::

## Graphs obtained by transformations

:::teorema{#trasformazioni-grafico titolo="Transforming the graph of the logarithm"}
Starting from the graph of $y = \log_a x$, we obtain graphs of other functions by the geometric transformations used for exponential functions.

- $y = \log_a (x - h)$ gives a horizontal shift by $h$. The domain becomes $x > h$ and the asymptote becomes $x = h$.
- $y = \log_a x + k$ gives a vertical shift by $k$.
- $y = -\log_a x$ gives a reflection across the $x$-axis.
- $y = \log_a (-x)$ gives a reflection across the $y$-axis. The domain becomes $x < 0$.
- $y = \left| \log_a x \right|$ reflects the part of the graph below the $x$-axis upward across the axis.
- $y = \log_a |x|$ has domain $x \neq 0$ and its graph is symmetric about the $y$-axis.

These graphs show the sign of a function and the number of solutions of an equation. For example, $y = \log_2 (4x)$ can be written $y = \log_2 4 + \log_2 x = 2 + \log_2 x$, so its graph is the graph of $\log_2 x$ shifted up by $2$.
:::

:::esempio{titolo="A shifted logarithm"}
The graph of $y = \log_2 (x + 3) - 1$ is obtained by shifting the graph of $\log_2 x$ by $3$ units to the left and $1$ unit down. The domain is $x > -3$ and the asymptote is the line $x = -3$. The graph intersects the $x$-axis where
$$
\log_2 (x + 3) = 1
\iff
x + 3 = 2
\iff
x = -1 ,
$$
and intersects the $y$-axis at the point with vertical coordinate $\log_2 3 - 1 \approx 0.585$.

::grafico{f="log(x+3)/log(2)-1;log(x)/log(2)" punti="-1,0,pieno;0,0.585,pieno" asintoti="x=-3" xmin=-4 xmax=6 ymin=-4 ymax=4 legenda="y = \log_2 (x + 3) - 1;y = \log_2 x" titolo="The graph of $\log_2 (x + 3) - 1$ is the graph of $\log_2 x$ shifted $3$ units to the left and $1$ unit down. Its asymptote is $x = -3$"}

:::

:::esempio{titolo="The logarithm of an absolute value and the absolute value of a logarithm"}
The function $y = \ln |x|$ is defined for $x \neq 0$. For $x > 0$ it coincides with $\ln x$. Moreover, $\ln |-x| = \ln |x|$, so the graph is symmetric about the $y$-axis and passes through $(1, 0)$ and $(-1, 0)$.

::grafico{f="log(x);log(-x)" punti="1,0,pieno;-1,0,pieno" asintoti="x=0" xmin=-5 xmax=5 ymin=-4 ymax=3 legenda="y = \ln x,\ x > 0;y = \ln (-x),\ x < 0" titolo="The graph of $\ln |x|$ consists of the graph of $\ln x$ for $x > 0$ and its reflection across the $y$-axis for $x < 0$"}

The function $y = |\ln x|$ is defined for $x > 0$. For $x \geq 1$ we have $\ln x \geq 0$, so $|\ln x| = \ln x$. For $0 < x < 1$ we have $\ln x < 0$, so $|\ln x| = -\ln x$ and the graph is reflected upward across the $x$-axis. Its minimum value is $0$, attained at $x = 1$.

::grafico{f="abs(log(x))" punti="1,0,pieno" asintoti="x=0" xmin=-1 xmax=6 ymin=-1 ymax=4 titolo="The graph of $|\ln x|$ reflects the part of $\ln x$ with $0 < x < 1$ upward across the $x$-axis"}

:::

## Domains of functions involving logarithms

:::teorema{#condizioni-esistenza titolo="Domain conditions for a logarithmic expression"}
An expression containing logarithms is defined for those values of $x$ that satisfy the following conditions *simultaneously*:

- the argument of each logarithm is strictly positive;
- if the base contains $x$, the base is positive and different from $1$;
- every denominator differs from $0$ and every radicand of an even-index root is greater than or equal to $0$.

Write the conditions as a system. The domain is the solution set of that system. For example, $f(x) = \ln \left( 4 - x^2 \right) + \log_3 x$ requires
$$
\begin{cases}
4 - x^2 > 0 \\[4pt]
x > 0
\end{cases}
\iff
\begin{cases}
-2 < x < 2 \\[4pt]
x > 0
\end{cases}
\iff
0 < x < 2 ,
$$
so the domain is $(0, 2)$.
:::

:::esempio{titolo="A base containing the unknown"}
The function $f(x) = \log_x (6 - x)$ has its variable in the base. The conditions are
$$
\begin{cases}
x > 0 \\[4pt]
x \neq 1 \\[4pt]
6 - x > 0
\end{cases}
\iff
\begin{cases}
x > 0 \\[4pt]
x \neq 1 \\[4pt]
x < 6
\end{cases}
$$
so the domain is $(0, 1) \cup (1, 6)$. For example, $f(2) = \log_2 4 = 2$.

The function $g(x) = \sqrt{\ln x}$ instead requires $x > 0$ and $\ln x \geq 0$. Since the natural logarithm is increasing and $\ln 1 = 0$, the second condition is equivalent to $x \geq 1$, so the domain is $[1, +\infty)$.
:::

## Logarithmic equations

:::teorema{#equazioni-elementari titolo="Elementary logarithmic equations"}
A **logarithmic equation** is an equation in which the unknown appears in the argument or the base of a logarithm. Its simplest form is $\log_a f(x) = c$, with $a > 0$, $a \neq 1$ and a real number $c$. By the definition of the logarithm,
$$
\log_a f(x) = c
\iff
f(x) = a^c .
$$
In this case every solution satisfies the domain condition $f(x) > 0$ because $a^c > 0$. For example,
$$
\log_3 (2x + 1) = 2
\iff
2x + 1 = 9
\iff
x = 4 .
$$
:::

::::teorema{#equazioni-stessa-base titolo="Equal logarithms with the same base"}
Let $a > 0$ with $a \neq 1$. For the values of $x$ for which $f(x) > 0$ and $g(x) > 0$, we have
$$
\log_a f(x) = \log_a g(x)
\iff
f(x) = g(x) .
$$
The theorem gives the following method for solving logarithmic equations.

1. Write the domain conditions as a system and find the domain of the equation.
2. Use the logarithm rules to write the equation in the form $\log_a A(x) = \log_a B(x)$.
3. Solve the equation $A(x) = B(x)$.
4. Keep only the solutions in the domain.

:::dimostrazione
The idea is that a strictly monotone function takes different values at different points. If $f(x) = g(x)$, the two logarithms have the same argument and therefore are equal. Conversely, if $f(x) \neq g(x)$, for example $f(x) < g(x)$, then because $\log_a$ is strictly monotone we have $\log_a f(x) \neq \log_a g(x)$. Hence the logarithms are equal only when their arguments are equal.
:::
::::

:::esempio{titolo="An equation with the sum of two logarithms"}
Solve $\log_2 (x + 2) + \log_2 (x - 1) = 2$. The domain conditions are
$$
\begin{cases}
x + 2 > 0 \\[4pt]
x - 1 > 0
\end{cases}
\iff
x > 1 .
$$
For $x > 1$ both arguments are positive, so we can apply the product rule and write $2 = \log_2 4$:
$$
\log_2 \big( (x + 2)(x - 1) \big) = \log_2 4
\iff
x^2 + x - 2 = 4
\iff
x^2 + x - 6 = 0 .
$$
The solutions of $x^2 + x - 6 = 0$ are $x = 2$ and $x = -3$. Only $x = 2$ satisfies $x > 1$, so the equation has the unique solution $x = 2$. Indeed, $\log_2 4 + \log_2 1 = 2 + 0 = 2$.
:::

:::attenzione
Without the domain conditions we would also accept $x = -3$, which is not a solution, because at $x = -3$ the expressions $\log_2 (-1)$ and $\log_2 (-4)$ are undefined. The equation $(x + 2)(x - 1) = 4$ has more solutions than the original equation because $\log_2 \big( (x + 2)(x - 1) \big)$ is also defined for $x < -2$, where the separate logarithms are undefined.
:::

:::esempio{#equazioni-sostituzione titolo="Solving equations by substitution"}
When the unknown appears only within the same logarithm, replace that logarithm with a new variable. In the equation
$$
\left( \log_2 x \right)^2 - \log_2 x - 2 = 0 ,
\qquad
x > 0 ,
$$
set $t = \log_2 x$ to obtain $t^2 - t - 2 = 0$, with solutions $t = 2$ and $t = -1$. Then return to the original unknown $x$:
$$
\log_2 x = 2 \iff x = 4 ,
\qquad
\log_2 x = -1 \iff x = \frac{1}{2} .
$$
Both values are positive, so the solutions are $x = 4$ and $x = \dfrac{1}{2}$.
:::

:::osservazione{#metodo-grafico titolo="Solving equations graphically"}
The equation $\log_2 x = 3 - x$ contains the unknown both inside the argument of a logarithm and outside it. The previous methods do not solve it. Its solutions are the horizontal coordinates of the points common to the graphs of $y = \log_2 x$ and $y = 3 - x$. The first graph is increasing and the second decreasing, so they meet at most once. For $x = 2$ we have $\log_2 2 = 1$ and $3 - 2 = 1$, so $x = 2$ is the unique solution.

::grafico{f="log(x)/log(2);3-x" punti="2,1,pieno" segmenti="2,0,2,1" xmin=-1 xmax=6 ymin=-3 ymax=4 legenda="y = \log_2 x;y = 3 - x" titolo="The increasing graph of $\log_2 x$ and the decreasing line $y = 3 - x$ meet only at $(2, 1)$"}

When a solution cannot be found by trial, the graph shows the number of solutions and the intervals containing them. Approximate values can then be found with a calculator.
:::

## Solving exponential equations with logarithms

:::teorema{#esponenziali-con-logaritmi titolo="Solving exponential equations with logarithms"}
Let $a > 0$ with $a \neq 1$. If $b > 0$, then by the definition of a logarithm,
$$
a^{f(x)} = b
\iff
f(x) = \log_a b .
$$
If $b \leq 0$, the equation has no solutions because $a^{f(x)} > 0$. For example,
$$
3^{x - 1} = 5
\iff
x - 1 = \log_3 5
\iff
x = 1 + \log_3 5 \approx 2.465 .
$$
When both sides are powers with different bases, $a^{f(x)} = c^{g(x)}$, they are both positive, so we take the natural logarithm of both sides. The power rule for logarithms gives
$$
f(x) \ln a = g(x) \ln c .
$$
:::

:::esempio{titolo="Two different bases"}
Solve $2^{x + 1} = 5^x$. Taking the natural logarithm of both sides gives
$$
\begin{aligned}
(x + 1) \ln 2 &= x \ln 5 \\[6pt]
x \ln 5 - x \ln 2 &= \ln 2 \\[6pt]
x \left( \ln 5 - \ln 2 \right) &= \ln 2 .
\end{aligned}
$$
Since $\ln 5 - \ln 2 = \ln \dfrac{5}{2} > 0$, we can divide to obtain
$$
x = \frac{\ln 2}{\ln \frac{5}{2}} \approx 0.756 .
$$
:::

:::esempio{titolo="Substitution using an exponential"}
In the equation $e^{2x} - e^x - 6 = 0$ set $t = e^x$, with $t > 0$, and observe that $e^{2x} = \left( e^x \right)^2 = t^2$. This gives
$$
t^2 - t - 6 = 0
\iff
(t - 3)(t + 2) = 0 ,
$$
with solutions $t = 3$ and $t = -2$. The value $t = -2$ does not satisfy $t > 0$ because an exponential is always positive. This leaves $e^x = 3$, so the equation has the unique solution $x = \ln 3$.
:::

:::esempio{titolo="Half-life and doubling time"}
In decay models the amount present at time $t$ is $N(t) = N_0 e^{-k t}$, where $N_0$ is the initial amount and $k > 0$ is a constant in the model. The **half-life** $T$ is the time after which $N(T) = \dfrac{N_0}{2}$:
$$
e^{-k T} = \frac{1}{2}
\iff
-k T = \ln \frac{1}{2} = -\ln 2
\iff
T = \frac{\ln 2}{k} .
$$
With $k = 0.05$ per year, the half-life is $T = \dfrac{\ln 2}{0.05} \approx 13.9$ years. Similarly, the amount falls to $10\%$ of its initial value after $\dfrac{\ln 10}{0.05} \approx 46.1$ years.

For a principal invested at an annual compound interest rate of $2\%$, the balance after $t$ years is $C_0 \cdot 1.02^t$. The balance doubles when $1.02^t = 2$, that is, after $t = \dfrac{\ln 2}{\ln 1.02} \approx 35.0$ years.
:::

## Logarithmic and exponential inequalities

::::teorema{#disequazioni-logaritmiche titolo="Logarithmic inequalities"}
Let $a > 0$ with $a \neq 1$, and let $f(x) > 0$ and $g(x) > 0$.

- If $a > 1$, then $\log_a f(x) < \log_a g(x) \iff f(x) < g(x)$, so the direction of the inequality **is preserved**.
- If $0 < a < 1$, then $\log_a f(x) < \log_a g(x) \iff f(x) > g(x)$, so the direction of the inequality **is reversed**.

The same holds with $\leq$, $>$ and $\geq$. To solve a logarithmic inequality, write a system containing the domain conditions and the inequality between the arguments. For example, since $3 = \log_2 8$,
$$
\log_2 (x - 1) \leq 3
\iff
\begin{cases}
x - 1 > 0 \\[4pt]
x - 1 \leq 8
\end{cases}
\iff
1 < x \leq 9 .
$$

::grafico{f="log(x-1)/log(2);3" punti="9,3,pieno;9,0,pieno;1,0,vuoto" segmenti="9,0,9,3" asintoti="x=1" xmin=-1 xmax=11 ymin=-3 ymax=5 legenda="y = \log_2 (x - 1);y = 3" titolo="The graph of $\log_2 (x - 1)$ lies below or on the line $y = 3$ for $1 < x \leq 9$"}

:::dimostrazione
Let $a > 1$. If $f(x) < g(x)$, then since $\log_a$ is strictly increasing we have $\log_a f(x) < \log_a g(x)$. If instead $f(x) \geq g(x)$, the same reasoning gives $\log_a f(x) \geq \log_a g(x)$. Therefore the inequality between the logarithms holds precisely when the inequality between their arguments holds. For $0 < a < 1$ the logarithm is strictly decreasing, and the same reasoning gives inequalities in the opposite direction.
:::
::::

:::esempio{titolo="A base less than 1"}
Solve $\log_{\frac{1}{3}} (x + 2) \geq -1$. Since $-1 = \log_{\frac{1}{3}} 3$ and the base is less than $1$, the direction reverses:
$$
\begin{cases}
x + 2 > 0 \\[4pt]
x + 2 \leq 3
\end{cases}
\iff
\begin{cases}
x > -2 \\[4pt]
x \leq 1
\end{cases}
\iff
-2 < x \leq 1 .
$$
:::

:::attenzione
The domain condition belongs in the system for an inequality, too. Solving only $x + 2 \leq 3$ would give $x \leq 1$, which includes, for example, $x = -5$. At this value the argument $x + 2 = -3$ is negative, and $\log_{\frac{1}{3}} (-3)$ is undefined.
:::

:::teorema{#disequazioni-esponenziali titolo="Solving exponential inequalities with logarithms"}
Let $a > 0$ with $a \neq 1$ and let $b > 0$.

- If $a > 1$, then $a^{f(x)} > b \iff f(x) > \log_a b$.
- If $0 < a < 1$, then $a^{f(x)} > b \iff f(x) < \log_a b$.

The rule follows from applying the monotone logarithmic function with base $a$ to the two positive sides of the inequality. If $b \leq 0$, the inequality $a^{f(x)} > b$ holds for every $x$ in the domain of $f$ because $a^{f(x)} > 0$, and the inequality $a^{f(x)} < b$ has no solutions. For example,
$$
5^x > 2 \iff x > \log_5 2 \approx 0.431 ,
\qquad
\left( \frac{1}{2} \right)^x \geq 3 \iff x \leq \log_{\frac{1}{2}} 3 = -\log_2 3 .
$$
:::

:::esempio{titolo="Different bases in an inequality"}
Solve $3^x < 2^{x + 1}$. Both sides are positive and the natural logarithm is increasing, so the inequality is equivalent to
$$
\begin{aligned}
x \ln 3 &< (x + 1) \ln 2 \\[6pt]
x \left( \ln 3 - \ln 2 \right) &< \ln 2 .
\end{aligned}
$$
The coefficient $\ln 3 - \ln 2 = \ln \dfrac{3}{2}$ is positive because $\dfrac{3}{2} > 1$, so division preserves the direction:
$$
x < \frac{\ln 2}{\ln \frac{3}{2}} \approx 1.710 .
$$
:::

:::esempio{titolo="A product of logarithms"}
Solve $\ln x \cdot \log_2 (3 - x) > 0$. The domain conditions $x > 0$ and $3 - x > 0$ give the domain $0 < x < 3$. Examine the sign of each factor in the domain:

- $\ln x > 0 \iff x > 1$;
- $\log_2 (3 - x) > 0 \iff 3 - x > 1 \iff x < 2$.

| | $0 < x < 1$ | $1 < x < 2$ | $2 < x < 3$ |
| --- | --- | --- | --- |
| $\ln x$ | $-$ | $+$ | $+$ |
| $\log_2 (3 - x)$ | $+$ | $+$ | $-$ |
| product | $-$ | $+$ | $-$ |

The product is positive when the factors have the same sign, so the solution is $1 < x < 2$. At $x = 1$ and $x = 2$ the product equals $0$, so these points are excluded.
:::

## Applications to pH, decibels and the Richter scale

:::definizione{#ph titolo="The pH of a solution"}
In an aqueous solution the hydrogen ion concentration, denoted by $\left[ \mathrm{H}^+ \right]$ and measured in moles per liter, ranges from about $1$ to about $10^{-14}$. To work with simpler numbers, we use **pH**:
$$
\mathrm{pH} = -\log_{10} \left[ \mathrm{H}^+ \right] ,
\qquad
\text{and hence}
\qquad
\left[ \mathrm{H}^+ \right] = 10^{-\mathrm{pH}} .
$$
Pure water at $25\,°\mathrm{C}$ has $\left[ \mathrm{H}^+ \right] = 10^{-7}$ mol/L, so its pH is $7$. A solution with pH below $7$ is called acidic, and one with pH above $7$ is called basic. For example, with $\left[ \mathrm{H}^+ \right] = 2 \cdot 10^{-5}$ mol/L we have
$$
\mathrm{pH} = -\left( \log_{10} 2 + \log_{10} 10^{-5} \right) = 5 - \log_{10} 2 \approx 4.70 .
$$
By the product rule, multiplying the concentration by $10$ lowers the pH by $1$.
:::

:::definizione{#decibel titolo="Sound intensity level"}
The intensity $I$ of a sound is measured in $\mathrm{W/m^2}$. The human ear perceives intensities ranging from $I_0 = 10^{-12}\ \mathrm{W/m^2}$, the threshold of hearing, to about $1\ \mathrm{W/m^2}$. The **sound intensity level** is measured in decibels (dB) and is given by
$$
L = 10 \log_{10} \frac{I}{I_0} .
$$
For example, $I = 10^{-6}\ \mathrm{W/m^2}$ gives $L = 10 \log_{10} 10^{6} = 60$ dB. By the quotient rule, two sounds with intensities $I_1$ and $I_2$ have levels that differ by
$$
L_2 - L_1 = 10 \log_{10} \frac{I_2}{I_1} .
$$
If the intensity is multiplied by $10$, the level increases by $10$ dB. If the intensity doubles, the level increases by $10 \log_{10} 2 \approx 3$ dB.
:::

:::definizione{#scala-richter titolo="Earthquake magnitude"}
On the Richter scale, the **magnitude** of an earthquake is
$$
M = \log_{10} \frac{A}{A_0} ,
$$
where $A$ is the maximum amplitude recorded by a seismograph at a reference distance from the epicenter, and $A_0$ is a fixed reference amplitude. For two earthquakes, the quotient rule gives
$$
M_2 - M_1 = \log_{10} \frac{A_2}{A_1} ,
$$
so an increase of $1$ in magnitude multiplies the amplitude by $10$. An earthquake of magnitude $5$ has an amplitude $10^2 = 100$ times that of an earthquake of magnitude $3$.

The energy $E$ released, in joules, is related to magnitude by the Gutenberg–Richter relation $\log_{10} E = 4.8 + 1.5\, M$. An increase of $1$ in magnitude therefore multiplies the energy by $10^{1.5} \approx 31.6$.
:::

:::osservazione{titolo="What logarithmic scales have in common"}
On all three scales, the logarithm turns ratios between quantities into differences between scale values. Multiplying the quantity by $10$ adds a fixed amount on the scale, namely $-1$ for pH, $10$ dB for sound level and $1$ for magnitude. For this reason logarithmic scales are used for quantities ranging from very small to very large values.
:::
