---
titolo: Logarithms, equations and inequalities
sommario: From the definition of a logarithm to solving equations, inequalities and threshold problems.
---

## Definition and exact values

:::definizione{#definizione titolo="The exponent we are looking for"}
A power gives the number obtained from the base and exponent. When the base and the result are known, the **logarithm** gives the exponent. Let $a>0$, $a\ne1$ and $b>0$. The notation $\log_a b$ denotes the unique real number $x$ such that
$$
\log_a b=x \quad\Longleftrightarrow\quad a^x=b.
$$
Here $a$ is the **base** and $b$ is the **argument** of the logarithm. The exponential function with base $a$ takes every strictly positive value exactly once, so the required exponent exists and is unique. For example, $2^3=8$, so $\log_2 8=3$.
:::

:::esempio{titolo="Reciprocals and roots"}
We look for the exponent of $3$ that gives $\dfrac{1}{9}$. Since $9=3^2$, taking the reciprocal reverses the sign of the exponent. A root gives a fractional exponent.
$$
\begin{aligned}
3^{-2}&=\frac{1}{9} &
&\Longrightarrow \log_3\dfrac{1}{9}=-2,\\[6pt]
16^{\frac34}&=\left(\sqrt[4]{16}\right)^3=8 &
&\Longrightarrow \log_{16}8=\frac34.
\end{aligned}
$$
With a base less than $1$, a power with a positive exponent can give an argument less than $1$. For example, $\left(\dfrac13\right)^{2}=\dfrac19$, so $\log_{\frac13}\dfrac19=2$.
:::

:::osservazione{titolo="Special values"}
From $a^0=1$ and $a^1=a$ it follows that $\log_a1=0$ and $\log_a a=1$. For base $e$ we write $\ln$, while for base ten we can write $\log_{10}$. In base ten, $0{,}001=10^{-3}$, so $\log_{10}(0{,}001)=-3$.
:::

## Laws of logarithms

::::teorema{#proprieta titolo="Product, quotient and power"}
Let $a>0$, $a\ne1$, $u>0$, $v>0$ and $r\in\mathbb R$. Then
$$
\begin{aligned}
\log_a(uv)&=\log_a u+\log_a v,\\[4pt]
\log_a\dfrac uv&=\log_a u-\log_a v,\\[4pt]
\log_a(u^r)&=r\log_a u.
\end{aligned}
$$
These laws let us combine sums and differences of logarithms with the same base into a single logarithm.

:::dimostrazione
Write $u=a^s$ and $v=a^t$, with $s=\log_a u$ and $t=\log_a v$. To find each logarithm, we identify the exponent of base $a$ in the corresponding expression.
$$
uv=a^{s+t},\qquad
\frac{u}{v}=a^{s-t},\qquad
u^r=(a^s)^r=a^{sr}.
$$
The definition gives $s+t$, $s-t$ and $sr$, respectively.
:::
::::

:::esempio{titolo="Choosing how to group the terms"}
In $\log_2 6+\log_2 12-\log_2 9$, all arguments are positive and the base is the same. We can therefore combine the first two terms and then subtract the third.
$$
\begin{aligned}
\log_2 6+\log_2 12-\log_2 9
&=\log_2(6\cdot12)-\log_2 9\\[4pt]
&=\log_2\frac{72}{9}\\[4pt]
&=\log_2(2^3)=3.
\end{aligned}
$$
Evaluating each logarithm first would require approximations, whereas the quotient is recognisable as an exact power.
:::

:::attenzione{titolo="A sum inside a logarithm"}
The product law requires a product inside the logarithm. For example, $\log_2(2+6)=\log_2 8=3$, whereas $\log_2 2+\log_2 6=\log_2 12$. The values differ because $8$ and $12$ are distinct and the function is one-to-one.
:::

:::esempio{titolo="Separating factors while preserving the domain"}
Consider $\ln\bigl((x-2)^2\bigr)$ for $x\ne2$. The square is positive even when $x-2<0$. To use the power law on the whole domain, write $(x-2)^2=|x-2|^2$.
$$
\ln\bigl((x-2)^2\bigr)=\ln\bigl(|x-2|^2\bigr)=2\ln|x-2|.
$$
The absolute value makes the base of the power inside the logarithm positive. At $x=1$, the result is $2\ln1=0$. The expression $\ln(x-2)$ on its own would be undefined at that same point.
:::

## Change of base

::::teorema{#base titolo="Ratio of logarithms with the same base"}
Let $a,c>0$, $a\ne1$, $c\ne1$ and $b>0$. The **change-of-base formula** expresses a logarithm through two logarithms in base $c$.
$$
\log_a b = \frac{\log_c b}{\log_c a}.
$$

:::dimostrazione
Set $x=\log_a b$, so $a^x=b$. Both sides are positive, so we can take their logarithms in base $c$. The power law gives $x\log_c a=\log_c b$. Since $a\ne1$, the factor $\log_c a$ is nonzero and we can divide by it.
:::
::::

:::esempio{titolo="Changing base without a calculator"}
Since $4$ and $8$ are powers of $2$, choosing $c=2$ makes both the numerator and denominator integers.
$$
\log_4 8=\frac{\log_2 8}{\log_2 4}=\frac32.
$$
The definition provides a check. Indeed, $4^{\frac32}=(\sqrt4)^3=8$. When there is no evident common base, the ratio $\dfrac{\ln b}{\ln a}$ gives an approximation with a calculator.
:::

:::esempio{titolo="Comparing different bases"}
For the same argument, changing the base changes the denominator in the change-of-base formula. For example, to compare $\log_2 7$ and $\log_3 7$, write the two ratios
$$
\frac{\ln7}{\ln2}
\qquad\text{and}\qquad
\frac{\ln7}{\ln3}.
$$
Since $0<\ln2<\ln3$ and the numerator is positive, the first ratio is larger. Keeping the same bases and choosing an argument between $0$ and $1$ makes the numerator negative and reverses the order. This explains why the order of the bases alone does not determine the order of the logarithms.
:::

## Domain

:::teorema{#dominio titolo="The argument must be positive"}
For a fixed base $a>0$ with $a\ne1$, the expression $\log_a f(x)$ is defined at points where $f(x)$ exists and $f(x)>0$. With more than one logarithm, the conditions must hold simultaneously. If the base $a(x)$ also depends on $x$, add the constraints $a(x)>0$ and $a(x)\ne1$. The positivity condition applies to the argument of the logarithm, even when that argument is a quotient or product.
:::

:::esempio{titolo="Domain with a quotient as argument"}
For $\ln\dfrac{x-1}{x+2}$ we study the sign of the quotient. The numerator is zero at $1$ and the denominator at $-2$, so their signs are constant on the three intervals in the table.

| Interval | $(-\infty,-2)$ | $(-2,1)$ | $(1,+\infty)$ |
|---|---|---|---|
| $x-1$ | $-$ | $-$ | $+$ |
| $x+2$ | $-$ | $+$ | $+$ |
| $\dfrac{x-1}{x+2}$ | $+$ | $-$ | $+$ |

The two intervals with a positive sign form the domain. We exclude $-2$ because the quotient is undefined there, and $1$ because the argument is zero there. The domain is therefore $(-\infty,-2)\cup(1,+\infty)$.
:::

:::attenzione{titolo="Checking the domain before combining logarithms"}
In $\ln(x-1)+\ln(x+1)$, the two conditions require $x>1$. The expression $\ln(x^2-1)$ is also defined for $x<-1$ because two negative factors give a positive product. The identity holds for $x>1$, where each logarithm in the original expression is defined.
:::

:::esempio{titolo="A logarithm in the denominator"}
The domain of $g(x)=\dfrac1{\log_2(x-3)}$ imposes two conditions. For the logarithm to exist, $x-3$ must be positive. Since the logarithm is also the denominator, it must be nonzero.
$$
\begin{cases}
x-3>0,\\
\log_2(x-3)\ne0
\end{cases}
\Longleftrightarrow
\begin{cases}
x>3,\\
x-3\ne1.
\end{cases}
$$
This gives $(3,4)\cup(4,+\infty)$. The two points are excluded for different reasons. At $x=3$ the argument is zero. At $x=4$ the logarithm is defined and equals zero, so the quotient is undefined.
:::

:::esempio{titolo="Composing two logarithms"}
In $\log_2(\log_3 x)$, the argument of the outer logarithm is the value of the inner one. Start with $x>0$, where $\log_3 x$ exists. The outer logarithm also requires $\log_3 x>0$. Since the inner logarithm increases and is zero at $1$, the domain is $(1,+\infty)$. To check it, compare two values. At $x=\dfrac13$ the inner logarithm is $-1$ and the outer logarithm is undefined. At $x=9$ the inner logarithm is $2$, and the composition is $\log_2 2=1$.
:::

## Graph and inverse function

:::definizione{#funzione titolo="The inverse of an exponential function"}
For $a>0$ and $a\ne1$, the function $y=\log_a x$ has domain $(0,+\infty)$ and range $\mathbb R$. Inverting the relation $a^u=v$ gives $\log_a v=u$. The graph is therefore obtained by swapping the coordinates of the points on $y=a^x$. This swap is a reflection across the line $y=x$. For base $2$, the point $(1,2)$ on the exponential graph corresponds to $(2,1)$ on the logarithmic graph.

::grafico{f="2^x;log(x)/log(2);x" xmin=-2 xmax=4 ymin=-2 ymax=4 uguale=1 punti="1,2,pieno,P;2,1,pieno,Q" legenda="2^x;\log_2 x;x" titolo="The points $P(1,2)$ and $Q(2,1)$ are reflections across $y=x$"}

:::

:::osservazione{titolo="Monotonicity, sign and asymptote"}
The logarithm is increasing if $a>1$ and decreasing if $0<a<1$. To determine its sign, compare the argument with $1$, since $\log_a1=0$. This gives the signs in the table.

| Base | $0<x<1$ | $x=1$ | $x>1$ |
|---|---|---|---|
| $a>1$ | $-$ | $0$ | $+$ |
| $0<a<1$ | $+$ | $0$ | $-$ |

The $y$-axis is a **vertical asymptote**. As $x$ approaches zero from the right, $\log_a x$ decreases without bound for $a>1$ and increases without bound for $0<a<1$. For base $2$, the arguments $\dfrac12,\dfrac14,\dfrac18,\ldots$ give the values $-1,-2,-3,\ldots$.

::grafico{f="log(x)/log(2);log(x)/log(0.5)" xmin=-0.5 xmax=5 ymin=-3.5 ymax=3.5 punti="1,0" legenda="\log_2 x;\log_{\frac12}x" titolo="Both graphs pass through $(1,0)$ and vary in opposite directions"}

:::

:::osservazione{titolo="Reflection across the horizontal axis"}
Bases $a$ and $\dfrac1a$ have the same domain. The change-of-base formula shows that their values are opposites, because $\ln(\frac1a)=-\ln a$.
$$
\log_{\frac1a}x=\frac{\ln x}{-\ln a}=-\log_a x .
$$
To obtain the graph with the reciprocal base, reverse the signs of the vertical coordinates. The graphs share only $(1,0)$, where the value equals its own opposite. For $x>1$, of the two bases $2$ and $\dfrac12$, the increasing logarithm lies above the horizontal axis. For $0<x<1$, the decreasing one does.
:::

:::esempio{titolo="Translation and intercept"}
In $y=\log_2(x-2)-1$, the argument is positive for $x>2$, so the vertical asymptote moves from $x=0$ to $x=2$. The point $(1,0)$ shifts two units right and one unit down, to $(3,-1)$. To find the intersection with the $x$-axis, set $y=0$.
$$
\log_2(x-2)=1 \quad\Longleftrightarrow\quad x-2=2^1 \quad\Longleftrightarrow\quad x=4.
$$

::grafico{f="log(x-2)/log(2)-1" xmin=0 xmax=8 ymin=-4 ymax=2.5 asintoti="x=2" punti="3,-1;4,0" titolo="The asymptote is $x=2$ and the horizontal intercept is $(4,0)$"}

:::

## Equations

:::teorema{#equazioni titolo="Equality on the common domain"}
Let $a>0$ with $a\ne1$. Since the logarithm is **one-to-one**, at every point where $f(x)$ and $g(x)$ are positive, $\log_a f(x)=\log_a g(x)$ is equivalent to $f(x)=g(x)$. When the right-hand side is a real number $k$, we can write it as $k=\log_a(a^k)$ or apply the definition directly. In either case, we obtain $f(x)=a^k$ and the argument must lie in the domain.
:::

:::esempio{titolo="Two candidates and one solution"}
Consider $\ln(x-1)+\ln(x+1)=\ln8$. The conditions $x-1>0$ and $x+1>0$ give $x>1$. On this interval the product law applies.
$$
\begin{aligned}
\ln\bigl((x-1)(x+1)\bigr)&=\ln8\\[4pt]
(x-1)(x+1)&=8\\[4pt]
x^2&=9.
\end{aligned}
$$
The roots of the last equation are $-3$ and $3$. The first lies outside the domain because it makes both arguments negative. At $x=3$, the arguments are $2$ and $4$, with product $8$, so the solution is $3$.
:::

:::esempio{titolo="A quadratic equation in a logarithm"}
In $(\log_2 x)^2-\log_2 x-2=0$, the unknown appears through the same expression $\log_2 x$. For $x>0$, set $u=\log_2 x$. Since the range of the logarithm is $\mathbb R$, every real root found for $u$ corresponds to an admissible value of $x$.
$$
\begin{aligned}
u^2-u-2&=(u-2)(u+1)=0,\\[4pt]
u=2 &\Longrightarrow x=2^2=4,\\[4pt]
u=-1 &\Longrightarrow x=2^{-1}=\frac12.
\end{aligned}
$$
Both values of $x$ are positive. With base $2$, negative roots for $u$ correspond to arguments between $0$ and $1$.
:::

:::esempio{titolo="An equation with different bases"}
The equation $\log_9x+\log_3x=3$ has domain $x>0$. Since $9=3^2$, it is convenient to express the first logarithm in the base of the second.
$$
\begin{aligned}
\log_9 x&=\frac{\log_3 x}{\log_3 9}=\frac12\log_3x,\\[4pt]
\frac12\log_3x+\log_3x&=\frac32\log_3x=3,\\[4pt]
\log_3x&=2,\qquad x=9 .
\end{aligned}
$$
The two original terms are $\log_9 9=1$ and $\log_3 9=2$, so their sum verifies the equation. The product law for logarithms applies only after expressing the terms with the same base.
:::

## Inequalities

:::teorema{#disequazioni titolo="The base determines the direction"}
On the **common domain**, compare the arguments using the monotonicity of the logarithm.

- If $a>1$, then $\log_a f(x)<\log_a g(x)$ implies $f(x)<g(x)$ and the converse holds.
- If $0<a<1$, then $\log_a f(x)<\log_a g(x)$ implies $f(x)>g(x)$ and the converse holds.

The same reasoning applies to $\leq$, $\geq$ and $>$. With a constant right-hand side $k$, compare the argument with $a^k$.
:::

:::esempio{titolo="An increasing logarithm and its domain"}
In $\log_2(x-1)\leq3$, write $3=\log_2 8$. Since the logarithm in base $2$ is increasing, $x-1$ must be at most $8$. Combine this condition with positivity of the argument.
$$
\begin{cases}
x-1>0,\\
x-1\leq8
\end{cases}
\Longleftrightarrow
1<x\leq9.
$$
The endpoint $9$ is included because equality is allowed. At $x=1$, the argument is zero, so the left endpoint is excluded.
:::

:::esempio{titolo="Comparing two arguments with a decreasing logarithm"}
Consider $\log_{\frac12}(x+1)<\log_{\frac12}(2x-1)$. The common domain gives $x>\dfrac12$. The base is between $0$ and $1$, so the smaller logarithm value corresponds to the larger argument.
$$
\begin{aligned}
x+1 &> 2x-1\\
x &<2.
\end{aligned}
$$
We obtain $\dfrac12<x<2$. The graph confirms that the first curve is below the second up to their intersection $(2,\log_{\frac12}3)$.

::grafico{f="log(x+1)/log(0.5);log(2*x-1)/log(0.5)" xmin=0 xmax=4 ymin=-3.5 ymax=3 asintoti="x=0.5" punti="2,-1.5849625,pieno,P" legenda="\log_{\frac12}(x+1);\log_{\frac12}(2x-1)" titolo="To the left of $P$, the graph of $\log_{\frac12}(x+1)$ lies below the other curve on their common domain"}

:::

:::esempio{titolo="How the inequality changes on either side of base one"}
In the inequality $\log_{x+1}4\geq2$, the base depends on $x$. To be admissible it must satisfy $x+1>0$ and $x+1\ne1$, so $x>-1$ and $x\ne0$. On these intervals $2=\log_{x+1}\bigl((x+1)^2\bigr)$. The direction of the comparison between $4$ and $(x+1)^2$ depends on the base.

- For $x>0$ the base exceeds $1$ and the comparison gives $4\geq(x+1)^2$. Since $x+1>0$, this yields $x+1\leq2$, and hence $0<x\leq1$.
- For $-1<x<0$ the base is less than $1$ and the comparison gives $4\leq(x+1)^2$. Throughout this interval $(x+1)^2<1$, so there are no solutions.

The solution set is $(0,1]$. At $x=1$ the base is $2$ and $\log_2 4=2$, so the last endpoint is included.
:::

## Thresholds and logarithmic scales

:::esempio{#modelli titolo="Real elapsed time and the first observation"}
A population is modelled by $N(t)=100\cdot2^t$ for $t\ge0$, where $t$ is time in hours. To find the exact time at which it reaches $500$, divide by the initial value $100$.
$$
\begin{aligned}
2^t&=5,\\[4pt]
t&=\log_2 5=\frac{\ln 5}{\ln 2}\approx 2{,}322.
\end{aligned}
$$
If observations occur only at whole hours, we look for the smallest integer satisfying $100\cdot2^t\ge500$. Since $N(2)=400$ and $N(3)=800$, the first observation at or above the threshold occurs after $3$ hours. The comparison can also be made without approximating the logarithm, because $2^2<5<2^3$.
:::

:::esempio{titolo="A difference on a logarithmic scale"}
On a scale described by $L=10\log_{10}\dfrac{I}{I_0}$, the value $I>0$ is the measured intensity and $I_0>0$ is the common reference intensity for all measurements. If the intensities are $I_1$ and $I_2$, the difference between levels depends on their ratio.
$$
\begin{aligned}
L_2-L_1
 &=10\left(\log_{10}\frac{I_2}{I_0}
           -\log_{10}\frac{I_1}{I_0}\right)\\[6pt]
 &=10\log_{10}\frac{I_2}{I_1}.
\end{aligned}
$$
When the intensity is multiplied by $100$, the level rises by $10\log_{10}100=20$. Reversing the reasoning, a drop of $10$ units in level corresponds to a factor of $10^{-1}=\dfrac1{10}$ in intensity.
:::

:::osservazione{titolo="A threshold in a decreasing model"}
For a quantity that halves every hour, the model $Q(t)=80\left(\dfrac12\right)^t$ equals $10$ exactly at $t=3$. The condition $Q(t)<10$ instead requires $t>3$. Since the base is less than $1$, values below the threshold occur at later times. If observations take place at whole hours, hour $3$ still gives $10$ and the first qualifying observation is at hour four.
:::
