---
titolo: Powers and exponential functions
sommario: Exponents, graphs, exponential equations and inequalities, with applications to growth and decay.
---

## Powers with a positive base

:::teorema{#potenze titolo="Integer, rational and real exponents"}
For a positive base $a$, the power $a^n$ for a positive integer $n$ is the product of $n$ factors equal to $a$. We set $a^0=1$. A negative exponent gives the reciprocal of the power with the opposite exponent, while a fractional exponent uses a root.
$$
a^{-u}=\frac1{a^u},
\qquad
a^{\frac mn}=\sqrt[n]{a^m}
\quad (m,n\in\mathbb Z,\; n>0).
$$
Extending powers to real exponents preserves the exponent laws. For $u,v\in\mathbb R$,
$$
\begin{aligned}
a^u\cdot a^v&=a^{u+v},\\[4pt]
\frac{a^u}{a^v}&=a^{u-v},\\[4pt]
(a^u)^v&=a^{uv}.
\end{aligned}
$$
The quotient is always defined because $a^v>0$. These laws help rewrite different powers using a common base.
:::

:::esempio{titolo="Root, power and reciprocal"}
To evaluate $16^{\frac34}$, take the fourth root of $16$ and then cube it. To evaluate $16^{-\frac34}$, take the reciprocal of the result.
$$
\begin{aligned}
16^{\frac34}&=\left(\sqrt[4]{16}\right)^3=2^3=8,\\[4pt]
16^{-\frac34}&=\frac1{16^{\frac34}}=\frac18.
\end{aligned}
$$
Writing $16=2^4$ gives the same result from $16^{-\frac34}=\left(2^4\right)^{-\frac34}=2^{-3}$. The choice depends on which base is easier to recognise.
:::

:::osservazione{titolo="Why a fractional exponent can be reduced"}
The definition of $a^{\frac mn}$ must give the same value if the fraction is written in an equivalent form. Let $u=\sqrt[n]{a^m}$, which is positive since $a>0$. For every integer $k>0$,
$$
u^{kn}=(u^n)^k=(a^m)^k=a^{km}.
$$
Since $u$ is positive, it is the $kn$th root of $a^{km}$. This justifies the identity $a^{\frac mn}=a^{\frac{km}{kn}}$. For example, $64^{\frac26}$ can be read as $\sqrt[6]{64^2}$ or as $64^{\frac13}=\sqrt[3]{64}=4$.
:::

:::attenzione{titolo="A sum of powers"}
Exponents add when powers with the same base are multiplied. In a sum, a common power can be factored out. For example, $2^x+2^{x+1}=2^x(1+2)=3\cdot2^x$. With $x=1$, the sum is $6$, whereas $2^{x+x+1}$ would give $8$.
:::

## Exponential functions and their graphs

:::definizione{#funzione titolo="A positive base other than one"}
The **exponential function** with base $a>0$, $a\ne1$, is $f(x)=a^x$. The exponent $x$ can be any real number, so the domain is $\mathbb R$. The function values form the interval $(0,+\infty)$. The graph passes through $(0,1)$ because $a^0=1$ and through $(1,a)$ because $a^1=a$. The second point determines the base when the graph is known.
:::

::::teorema{#monotonia titolo="Monotonicity of an exponential function"}
If $a>1$, the function is strictly increasing. If $0<a<1$, it is strictly decreasing. In both cases it is **one-to-one**, so each value it takes corresponds to just one exponent.

:::dimostrazione
Let $x_2>x_1$. The ratio of the function values is $a^{x_2-x_1}$. The exponent in this ratio is positive, so the ratio exceeds $1$ when $a>1$ and is less than $1$ when $0<a<1$. Since $a^{x_1}>0$, this means $a^{x_2}>a^{x_1}$ in the first case and $a^{x_2}<a^{x_1}$ in the second.
:::
::::

:::esempio{titolo="Graphs with reciprocal bases"}
Since $\left(\dfrac12\right)^x=2^{-x}$, reflect the graph with base $2$ across the $y$-axis to obtain the graph with base $\dfrac12$. The point $(2,4)$ of the increasing function corresponds to $(-2,4)$ of the decreasing function. Both curves have the $x$-axis as a **horizontal asymptote**, each on the side where the function values become arbitrarily small. Neither graph meets the axis because both powers are positive for every $x$.

::grafico{f="2^x;0.5^x" xmin=-4 xmax=4 ymin=-0.7 ymax=6.2 punti="-2,4;0,1;2,4" legenda="2^x;\left(\frac12\right)^x" titolo="Replacing $x$ with $-x$ reflects the graph across the $y$-axis"}

:::

:::osservazione{titolo="Base one"}
The formula $f(x)=1^x=1$ is defined for every $x$, but gives a constant function. For example, $1^x=1$ is true for every $x$, while $1^x=2$ has no solution. When equating powers, the condition $a\ne1$ lets us conclude that the exponents agree.
:::

:::esempio{titolo="Reading a growth factor from two points"}
A curve of the form $y=C a^x$, with $C>0$ and $a>0$, passes through $(1,6)$ and $(3,54)$. Dividing the ordinates eliminates the factor $C$ and leaves the power corresponding to the difference between the horizontal coordinates.
$$
\begin{aligned}
\frac{54}{6}&=\frac{Ca^3}{Ca^1}=a^2,\\[4pt]
a&=3,\\[4pt]
6&=C\cdot3,\qquad C=2.
\end{aligned}
$$
The horizontal coordinates are two units apart. The ratio $9$ between the ordinates is therefore the total factor over two steps. The factor for one step is the positive square root $3$. The required function is $y=2\cdot3^x$.
:::

## Equations with a common base

:::teorema{#equazioni titolo="Equality of exponents"}
Let $a>0$ and $a\ne1$. At every value of $x$ for which both exponents are defined,
$$
a^{f(x)}=a^{g(x)} \quad\Longleftrightarrow\quad f(x)=g(x).
$$
Injectivity justifies passing from equal powers to equal exponents. If the bases differ but can be written in terms of a common base, first rewrite the powers using the exponent laws.
:::

:::esempio{titolo="One base written as a power of the other"}
To solve $4^{x-1}=8$, write $4=2^2$ and $8=2^3$. The power-of-a-power law multiplies the exponent $x-1$ by $2$.
$$
\begin{aligned}
\left(2^2\right)^{x-1}&=2^3,\\[4pt]
2^{2(x-1)}&=2^3,\\[4pt]
2x-2&=3,\\[4pt]
x&=\frac52.
\end{aligned}
$$
This agrees with the original equation, since $4^{\frac52-1}=4^{\frac32}=8$.
:::

:::esempio{titolo="Factoring out an exponential term"}
To solve $3^{x+1}-3^x=18$, write $3^{x+1}=3\cdot3^x$. The two terms then share a common factor.
$$
\begin{aligned}
3\cdot3^x-3^x&=18,\\[4pt]
(3-1)3^x&=18,\\[4pt]
3^x&=9=3^2.
\end{aligned}
$$
Comparing exponents gives $x=2$. In an equation such as $3^x=5$, where the right-hand side is not an evident power, the solution is written $x=\log_3 5$.
:::

:::attenzione{titolo="The logarithm requires a positive right-hand side"}
The equation $2^x=k$ makes sense for every real number $k$. To solve it, first check that $k$ lies in the range of the exponential. If $k>0$, there is one solution, namely $\log_2 k$. If $k\leq0$, the solution set is empty. For example, $2^x+3=1$ would give $2^x=-2$, impossible for real $x$. No logarithm button is needed to recognise this case.
:::

## Inequalities with a base greater than one

:::teorema{#crescenti titolo="Preserving the direction"}
For $a>1$ and $x$ in the common domain, $a^{f(x)}>a^{g(x)}$ is equivalent to $f(x)>g(x)$. The same equivalence holds with $\geq$, $<$ or $\leq$. If an exponent contains a quotient or a root, the domain of that expression remains a constraint on the inequality.
:::

:::esempio{titolo="A root in the exponent"}
For $3^{\sqrt{x-1}}\leq27$ we need $x-1\geq0$. Since $27=3^3$ and the base exceeds $1$, the direction is preserved when comparing the exponents.
$$
\begin{aligned}
3^{\sqrt{x-1}}\leq3^3
 &\quad\Longleftrightarrow\quad \sqrt{x-1}\leq3\\[4pt]
 &\quad\Longleftrightarrow\quad x-1\leq9
 \quad (x\geq1).
\end{aligned}
$$
Squaring preserves the comparison because both sides are nonnegative. Intersecting $x\leq10$ with the domain gives $[1,10]$. At $x=1$ the exponent is zero and the power is $1$, so the left endpoint belongs to the solution.
:::

:::esempio{titolo="An inequality with two different bases"}
To compare $4^x\leq 2^{3-x}$, rewrite $4^x$ in base $2$. Since the two resulting powers have a base greater than $1$, the order of the exponents agrees with the order of the powers.
$$
2^{2x}\leq2^{3-x}
\quad\Longleftrightarrow\quad
2x\leq3-x
\quad\Longleftrightarrow\quad
x\leq1.
$$
At $x=1$, both sides are $4$. At $x=0$, they are $1$ and $8$, respectively. Here the right-hand side $2^{3-x}$ decreases with $x$ because its exponent decreases. Comparing the exponents directly also accounts for that difference.
:::

## Inequalities with a base between zero and one

:::teorema{#decrescenti titolo="Reversing the direction"}
For $0<a<1$ and $x$ in the common domain, $a^{f(x)}>a^{g(x)}$ is equivalent to $f(x)<g(x)$. The function is decreasing because a greater exponent gives a smaller value of the power. Equality remains allowed when the original inequality is non-strict.
:::

:::esempio{titolo="A threshold with a decreasing exponential"}
Consider $\left(\dfrac12\right)^x\geq\dfrac18$. Since $\dfrac18=\left(\dfrac12\right)^3$, the comparison can be made between powers with the same base.
$$
\left(\frac12\right)^x\geq
\left(\frac12\right)^3
\quad\Longleftrightarrow\quad x\leq3.
$$
Equality holds at $x=3$. At $x=2$ the value is $\dfrac14$, which exceeds the threshold, while $x=4$ gives $\dfrac1{16}$, which lies below the threshold. The graph shows on which side of the intersection the curve lies above the line.

::grafico{f="0.5^x;0.125" xmin=-0.4 xmax=5.5 ymin=-0.2 ymax=1.2 punti="3,0.125,pieno,P" segmenti="3,0,3,0.125" legenda="\left(\frac12\right)^x;\frac18" titolo="The curve lies above the level $y=\dfrac18$ to the left of $P$"}

:::

## Substitution by a positive power

:::teorema{#sostituzione titolo="Quadratics in an exponential"}
Since $a^{2x}=(a^x)^2$, with $a>0$ and $a\ne1$ an equation of the form $a^{2x}-sa^x+p=0$ becomes $u^2-su+p=0$ under the substitution $u=a^x$. The constraint $u>0$ comes from the range of the exponential. Keep every positive root, each of which corresponds to exactly one $x$. For an inequality of the same form, first intersect the intervals for $u$ with $(0,+\infty)$ and then return to $x$ using monotonicity.
:::

:::esempio{titolo="A root to discard"}
In $4^x-2^x-2=0$, substitute $u=2^x$ and factor the quadratic.
$$
\begin{aligned}
u^2-u-2&=(u-2)(u+1)=0,\\[4pt]
u=2 &\Longrightarrow x=1.
\end{aligned}
$$
The other root is $u=-1$. Discard it because $2^x$ is positive for every $x$. For the same reason, in an equation such as $4^x-8\cdot2^x=0$, discard the root $u=0$. This leaves $u=8$, or $x=3$.
:::

:::esempio{titolo="Returning from the substitution to an interval for x"}
Solve $9^x-4\cdot3^x+3<0$. With $u=3^x>0$, we get $(u-1)(u-3)<0$. The product is negative for $1<u<3$ because the first factor is positive and the second is negative on that interval.
$$
1<3^x<3
\quad\Longleftrightarrow\quad
3^0<3^x<3^1
\quad\Longleftrightarrow\quad
0<x<1.
$$
The last step uses the fact that the exponential is increasing. The values $1$ and $3$ are heights on $3^x$, so we find the horizontal coordinates that produce those heights. Both endpoints are excluded because they make the quadratic zero.
:::

:::osservazione{titolo="Coefficients and the number of solutions"}
For $4^x-c\cdot2^x+1=0$, count the *positive* roots of $u^2-cu+1=0$. The discriminant is $c^2-4$ and the product of the roots, when real, is $1$. For $c>2$ they are distinct, have the same sign and sum to $c>0$, so both are positive. For $c=2$ the repeated root $u=1$ corresponds to just one $x$. If $|c|<2$, the roots are not real. If $c\leq-2$, their sum is negative and their product is positive, so both are negative, including the case of the repeated root $u=-1$.
:::

## Shifted and scaled graphs

:::teorema{#trasformazioni titolo="Translating an exponential graph"}
Let $a>0$, $a\ne1$ and $h,k\in\mathbb R$. The graph of $f(x)=a^{x-h}+k$ comes from shifting $y=a^x$ by $h$ units horizontally and $k$ units vertically. The translation sends $(0,1)$ to $(h,1+k)$ and the asymptote $y=0$ to $y=k$. The range is $(k,+\infty)$ because $a^{x-h}$ takes every positive value.
:::

:::esempio{titolo="Asymptote and intercepts of a shifted graph"}
For $f(x)=2^{x-1}-3$, the reference point is $(1,-2)$ and the asymptote is $y=-3$. Set $x=0$ and $y=0$ in turn to find the two intercepts.
$$
\begin{aligned}
f(0)&=2^{-1}-3=-\frac52,\\[4pt]
f(x)=0&\quad\Longleftrightarrow\quad 2^{x-1}=3\\[4pt]
 &\quad\Longleftrightarrow\quad x=1+\log_2 3.
\end{aligned}
$$
The range is $(-3,+\infty)$, which contains zero, so the graph crosses the $x$-axis. Since $2<3<4$, the horizontal intercept has $x$-coordinate between $2$ and $3$.

::grafico{f="2^(x-1)-3" xmin=-2 xmax=4 ymin=-4 ymax=4 asintoti="y=-3" punti="0,-2.5;1,-2;2.5849625,0" titolo="The graph of $f(x)=2^{x-1}-3$ lies above $y=-3$"}

:::

:::osservazione{titolo="A negative factor in front of the power"}
In $f(x)=C a^{x-h}+k$ with $C<0$, the term $C a^{x-h}$ takes every negative value. The range becomes $(-\infty,k)$ and the asymptote is still $y=k$. The sign of $C$ also reverses the direction of change of the original curve. For example, $3-2^x$ is decreasing, has range $(-\infty,3)$ and passes through $(0,2)$.
:::

:::esempio{titolo="A level the graph never reaches"}
Consider $f(x)=5-3^x$. To see whether there is a point at height $L$, set $5-3^x=L$, giving $3^x=5-L$. A power of $3$ is positive for every $x$, so the graph reaches height $L$ exactly when $L<5$.
$$
\begin{aligned}
L=4 &\quad\Longrightarrow\quad 3^x=1\quad\Longrightarrow\quad x=0,\\[4pt]
L=5 &\quad\Longrightarrow\quad 3^x=0.
\end{aligned}
$$
The first case gives the point $(0,4)$. In the second, no real horizontal coordinate satisfies the equation. Approaching the asymptote does not put its height in the range.
:::

## Growth and decay

:::definizione{#modelli titolo="A constant multiplication factor"}
The model $N(t)=N_0q^t$ describes a quantity with initial value $N_0>0$ and factor $q>0$ per unit of time. Indeed $N(0)=N_0$ and $N(t+1)=qN(t)$. If the quantity grows by $10\%$ per unit, the new value is the previous value plus $10\%$ of it, so $q=1{,}10$. If it falls by $20\%$, $80\%$ remains, so $q=0{,}80$. Each percentage is taken from the value at the start of that step.
:::

:::esempio{titolo="Two successive percentage reductions"}
An initial quantity of $200$ falls by $20\%$ on two consecutive days. After the first day it is $200\cdot0{,}80=160$. After the second it is $160\cdot0{,}80=128$. The final-to-initial ratio is
$$
\frac{128}{200}=(0{,}80)^2=0{,}64.
$$
This leaves $64\%$ of the initial quantity, for a total reduction of $36\%$. The second decrease is $32$ units because the new reference value is $160$.
:::

:::esempio{titolo="Half-life and doubling time"}
If a quantity doubles every $T>0$ units of time, then $\dfrac tT$ periods have elapsed after $t$ units, so $N(t)=N_0\cdot2^{\frac tT}$. For a halving over the same interval use $N(t)=N_0\left(\dfrac12\right)^{\frac tT}$. For example, starting from $80$ units with doubling every $3$ hours gives $80\cdot 2^{\frac63}=320$ after $6$ hours.
:::

:::esempio{titolo="Comparing linear and exponential growth"}
Two quantities both start at $100$. The first grows by $20$ units per day. The second grows by $20\%$ each day. With $t$ denoting the number of days, the models are $A(t)=100+20t$ and $B(t)=100(1{,}20)^t$, respectively.

| $t$ | $A(t)$ | $B(t)$ |
|---|---|---|
| $0$ | $100$ | $100$ |
| $1$ | $120$ | $120$ |
| $2$ | $140$ | $144$ |
| $3$ | $160$ | $172{,}8$ |

On the first day the increases agree. Later the percentage applies to a quantity greater than $100$, so the increase grows. In the first model the difference $A(t+1)-A(t)$ stays at $20$. In the second, the ratio of $B(t+1)$ to $B(t)$ stays at $1{,}20$. These properties help select a model by comparing measurements at equally spaced times.
:::

:::osservazione{titolo="Finding the factor over a shorter period"}
A model with a constant monthly factor goes from $100$ to $121$ in two months. To find the factor for one month, solve $q^2=\dfrac{121}{100}$ and take the positive root, $q=\dfrac{11}{10}$. The monthly increase is therefore $10\%$. For a change from $100$ to $81$ over two months, the same method gives $q=\dfrac9{10}$, so the quantity falls by $10\%$ per month. In this second case, the loss of $19$ units breaks down into $10$ units in the first month and $9$ in the second.
:::
