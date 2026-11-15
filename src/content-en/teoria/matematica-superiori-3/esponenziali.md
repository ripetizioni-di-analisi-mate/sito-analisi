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

::::teorema{titolo="Reciprocal bases and the sign of the exponent"}
If $a>0$ and $u\in\mathbb R$, then $\left(\dfrac1a\right)^u=a^{-u}$. This allows a power with a fractional base to be rewritten using its reciprocal base. For example, if $a=3$, we can study $\left(\dfrac13\right)^{2-x}$ through the increasing function $3^v$ once we have found the new exponent $x-2$.

:::dimostrazione
Write $\dfrac1a=a^{-1}$ and use the power-of-a-power law. The product of the exponents is $(-1)u=-u$, so the result is $a^{-u}$.
:::
::::

:::esempio{titolo="A variable exponent and a squared input"}
In $y=2^x$ the input is the exponent. In $y=x^2$ the input is the base. Both curves pass through $(2,4)$ and $(4,16)$, but they behave differently. At $x=3$, between those inputs, $2^3=8<9=3^2$. At $x=5$, $2^5=32>25=5^2$. The marked intersections are points where the heights agree. They do not make the two functions identical.

::grafico{f="2^x;x^2" xmin=-0.15 xmax=5.3 ymin=-1 ymax=35 punti="2,4,pieno,A;4,16,pieno,B" legenda="2^x;x^2" titolo="Compare the growth of $2^x$ and $x^2$ at the same inputs"}

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

::::teorema{titolo="Comparing two positive bases"}
Let $a>b>0$. For $x>0$ we have $a^x>b^x$, while for $x<0$ we have $a^x<b^x$. At $x=0$ both give $a^0=b^0=1$. This compares powers with the same exponent and different bases.

:::dimostrazione
Since $b^x>0$, compare the powers by comparing their ratio with $1$. We have $\dfrac{a^x}{b^x}=\left(\dfrac ab\right)^x$, and the ratio's base is greater than $1$. The ratio exceeds $1$ for $x>0$, is less than $1$ for $x<0$, and equals $1$ at $x=0$. Multiplying by the positive denominator gives the required comparisons.
:::
::::

:::esempio{titolo="Powers of two and three"}
At $x=1$ the heights are $2$ and $3$. At $x=-1$ the reciprocals are $\dfrac12$ and $\dfrac13$, in the opposite order. The only common point is $(0,1)$, since at the same nonzero input the ratio $\left(\dfrac32\right)^x$ differs from $1$.

::grafico{f="2^x;3^x" xmin=-2.5 xmax=1.9 ymin=-0.35 ymax=7.8 punti="0,1,pieno,P;1,2;1,3" legenda="2^x;3^x" titolo="The graph of $3^x$ is above that of $2^x$ to the right of $P$ and below to its left"}

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

:::esempio{titolo="An exponent with a denominator"}
To solve $2^{\frac1{x-2}}=\dfrac12$, first exclude $x=2$, where the exponent is undefined. The threshold is $2^{-1}$. Injectivity of $2^u$ gives
$$
\frac1{x-2}=-1
\quad\Longleftrightarrow\quad
1=-(x-2)
\quad\Longleftrightarrow\quad
x=1.
$$
The step is reversible because $x-2\ne0$ on the domain. Substituting $x=1$ gives exponent $-1$, checking the solution. For $x>2$ the exponent is positive, so that branch lies above height $1$ and cannot meet the line at $\dfrac12$. The positions of the two branches thus give a graphical check.

::grafico{f="2^(1/(x-2));0.5" xmin=-0.5 xmax=4.5 ymin=-0.2 ymax=4.2 asintoti="x=2" punti="1,0.5,pieno,P;3,2" legenda="2^{\frac1{x-2}};\frac12" titolo="Intersection $P$ lies on the branch to the left of the excluded input $2$"}

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

:::esempio{titolo="An inequality with two changes of direction"}
In $\left(\dfrac12\right)^{4-2x}\geq\dfrac14$ the threshold is $\left(\dfrac12\right)^2$. The fractional base reverses the inequality when comparing exponents. When isolating $x$, division by its negative coefficient reverses the direction a second time.
$$
\begin{aligned}
4-2x&\leq 2,\\
-2x&\leq -2,\\
x&\geq 1.
\end{aligned}
$$
The result agrees with the graph. As $x$ increases, the exponent $4-2x$ decreases. A base below $1$ gives a higher value for a smaller exponent, so the composition increases. At $x=0$ the height is $\dfrac1{16}$ and at $x=2$ it is $1$. The intersection is at $x=1$, included by the inequality.

::grafico{f="0.5^(4-2*x);0.25" xmin=-0.5 xmax=2.7 ymin=-0.1 ymax=1.9 punti="0,0.0625;1,0.25,pieno,P;2,1" legenda="\left(\frac12\right)^{4-2x};\frac14" titolo="The function increases and reaches the threshold $\dfrac14$ at $P$"}

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

:::esempio{titolo="Returning to x with a decreasing substitution"}
Consider $4^{-x}-5\cdot2^{-x}+4\leq0$. Setting $u=2^{-x}=\left(\dfrac12\right)^x$ gives $(u-1)(u-4)\leq0$. Hence $1\leq u\leq4$. Both endpoints are positive, so they belong to the range of the substitution function.
$$
2^0\leq2^{-x}\leq2^2
\quad\Longleftrightarrow\quad
0\leq-x\leq2
\quad\Longleftrightarrow\quad
-2\leq x\leq0.
$$
Height $1$ corresponds to input $0$, while height $4$ corresponds to $-2$. The endpoint order changes because the substitution is decreasing. For example, at $x=-1$ we get $u=2$ and product $(2-1)(2-4)=-2$. At $x=1$ we get $u=\dfrac12$ and the product is positive.

::grafico{f="4^(-x)-5*2^(-x)+4" xmin=-2.4 xmax=1.4 ymin=-3 ymax=8 punti="-2,0,pieno,A;0,0,pieno,B;-1,-2" legenda="4^{-x}-5\cdot2^{-x}+4" titolo="The left-hand side is nonpositive between $A$ and $B$, including the endpoints"}

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

::::teorema{titolo="Range after a reflection and a translation"}
Let $a>0$, $a\ne1$, $C\ne0$, and $h,k\in\mathbb R$. The range of $G(x)=C a^{x-h}+k$ is $(k,+\infty)$ if $C>0$ and $(-\infty,k)$ if $C<0$. Height $k$ is outside the range in both cases.

:::dimostrazione
To determine if height $y$ is reached, solve $a^{x-h}=\dfrac{y-k}{C}$. Since $a^u$ has range $(0,+\infty)$, an input exists exactly when the ratio is positive. With $C>0$ this requires $y>k$, and with $C<0$ it requires $y<k$. At $y=k$ the ratio is zero, outside the range of the exponential.
:::
::::

:::esempio{titolo="Curves on opposite sides of the same asymptote"}
The functions $2+2^x$ and $2-2^x$ have the same asymptote $y=2$. At the same input both are a distance $2^x$ from the line, one above and one below. The second graph is therefore the reflection of the first across $y=2$. At $x=0$ the heights are $3$ and $1$, while at $x=1$ they are $4$ and $0$.

::grafico{f="2+2^x;2-2^x" xmin=-3.5 xmax=2 ymin=-2.4 ymax=6.7 asintoti="y=2" punti="0,3;0,1;1,4;1,0" segmenti="1,0,1,4" legenda="2+2^x;2-2^x" titolo="The two curves are reflections across $y=2$"}

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

:::esempio{titolo="Cooling towards ambient temperature"}
A drink starts at $80\,\mathrm{^\circ C}$ in a room at $20\,\mathrm{^\circ C}$. In the model, the difference between the drink's temperature and the room temperature halves every $5$ minutes. The initial difference is $60\,\mathrm{^\circ C}$, so after $t$ minutes the model gives
$$
T(t)-20=60\left(\frac12\right)^{\frac t5}.
$$
After $5$ minutes the difference is $30$ and the temperature is $50\,\mathrm{^\circ C}$. After $10$ minutes the difference is $15$ and the temperature is $35\,\mathrm{^\circ C}$. The ratio between the two full temperatures is not $\dfrac12$. The halving applies only to their differences from ambient temperature. The value of $T$ stays above $20\,\mathrm{^\circ C}$ and approaches it, giving the model's asymptote.

::grafico{f="20+60*0.5^(x/5)" xmin=-0.5 xmax=22 ymin=0 ymax=86 asintoti="y=20" nomi="t,T" punti="0,80;5,50,pieno,A;10,35,pieno,B" segmenti="5,20,5,50;10,20,10,35" legenda="20+60\left(\frac12\right)^{\frac{t}{5}}" titolo="The distances above $20$ at $A$ and $B$ are $30$ and $15$, one half of the other"}

:::

:::esempio{titolo="Choosing a model from the ratios"}
A measurement takes the values $24$, $36$, and $54$ at intervals of two hours. The two consecutive ratios both equal $\dfrac32$, while the differences are $12$ and $18$. An exponential model with a two-hour period that reproduces the data is
$$
M(t)=24\left(\frac32\right)^{\frac t2}.
$$
Evaluating $M(1)$ means using half a period. The hourly factor is $\sqrt{\dfrac32}$ and the model predicts $M(1)=24\sqrt{\dfrac32}$. The line through the first two points would give $30$ at one hour and would lie below the third point. Readings at equal intervals reveal the exponential factor. The value between readings is a prediction of the model and depends on applying the law between the sample times.

::grafico{f="24*1.5^(x/2);24+6*x" xmin=-0.35 xmax=5.3 ymin=0 ymax=73 nomi="t,M" punti="0,24;2,36;4,54,pieno,P;4,48" legenda="24\left(\frac32\right)^{\frac{t}{2}};24+6t" titolo="At four hours the exponential model matches the measured value $54$, while the line gives $48$"}

:::
