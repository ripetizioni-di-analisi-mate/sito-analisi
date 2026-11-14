---
titolo: Functions, domains and graph transformations
sommario: From finding domains and reading graphs to composing, inverting and transforming functions.
---

## From an input to the value of a function

:::definizione{#valori titolo="Domain, codomain and images"}
A **function** $f\colon A\to B$ assigns to each element $x$ of $A$ exactly one element $f(x)$ of $B$. The set $A$ is the *domain*, the set of allowed inputs. The set $B$ is the *codomain*, the set from which outputs are drawn. The value $f(x)$ is the **image** of $x$. The set of all images is written $f(A)$ and is contained in $B$.
:::

:::esempio{titolo="Reading a table in both directions"}
Let $A=\{-2,0,2\}$ and $B=\{0,1,4,9\}$. The following table describes the function $f(x)=x^2$ on $A$.

| $x$ | $-2$ | $0$ | $2$ |
|---|---|---|---|
| $f(x)$ | $4$ | $0$ | $4$ |

The image of $-2$ is $4$ because $(-2)^2=4$. To find the *preimages* of $4$, start in the second row. The value $4$ occurs under two inputs, so the equation $f(x)=4$ has two solutions in $A$. The only outputs in the table are $0$ and $4$, so $f(A)=\{0,4\}$. The numbers $1$ and $9$ belong to the codomain but lie outside the range.
:::

:::esempio{titolo="Substituting a negative number"}
To evaluate $f(x)=x^2-3x+1$ at $x=-2$, replace each $x$ with $-2$. This gives
$$
\begin{aligned}
f(-2)&=(-2)^2-3(-2)+1\\[4pt]
&=4+6+1\\[4pt]
&=11 .
\end{aligned}
$$
The square applies to the entire number. The factor $-3$ also multiplies the entire number, so the linear term contributes $+6$. On the graph, the result appears at the point $(-2,11)$.
:::

:::definizione{#grafico titolo="Graphs and vertical lines"}
The **graph** of a real-valued function of a real variable is the set of pairs $(x,f(x))$ with $x\in A$. For a fixed horizontal coordinate $u$, the vertical line $x=u$ meets the graph exactly once if $u$ belongs to the domain. If a vertical line meets a curve at two points, one input has two outputs, so the curve can describe only a relation.
:::

:::esempio{titolo="One horizontal coordinate with two vertical coordinates"}
Setting $x=0$ in the circle $x^2+y^2=4$ gives $y^2=4$. The vertical line $x=0$ therefore meets the circle at $(0,2)$ and $(0,-2)$. If the relation is restricted to $y\geq 0$, each $x\in[-2,2]$ has just one vertical coordinate, $y=\sqrt{4-x^2}$. The upper semicircle is therefore the graph of a function.
:::

:::esempio{titolo="Graph of a piecewise function"}
Let $f(x)=x+2$ for $-2\leq x<0$ and $f(x)=1-x$ for $0\leq x\leq2$. The domain is $[-2,2]$ because the two intervals cover every point from $-2$ to $2$. The second condition includes $x=0$, so $f(0)=1$. The first piece, which applies only for $x<0$, approaches the point $(0,2)$. On the graph, $(0,2)$ is marked with an open circle and $(0,1)$ with a filled dot. The vertical line $x=0$ thus meets the graph exactly once.

To find the preimages of $1$, solve an equation for each piece. The first gives $x+2=1$, or $x=-1$, which lies in $[-2,0)$. The second gives $1-x=1$, or $x=0$, which lies in $[0,2]$. The set of preimages is therefore $\{-1,0\}$.

::grafico{curve="t,t+2,-2,0;t,1-t,0,2" legenda="y=x+2;y=1-x" xmin=-3 xmax=3 ymin=-2 ymax=3 punti="-2,0;0,2,vuoto;0,1;2,-1;-1,1" segmenti="-2,1,2,1" titolo="At input $0$, the piece that includes the endpoint supplies the value."}

:::

## The real domain of a formula

:::teorema{#dominio titolo="Conditions for a formula to be defined"}
To find the largest real domain of a formula, every operation in the formula must be defined. A denominator must be nonzero, the radicand of an even root must be greater than or equal to zero, and the argument of a logarithm must be strictly positive. When several conditions apply, the domain is the **intersection** of their solution sets.

A domain specified in the question may be smaller. For example, $s\mapsto 3s+2$ can be evaluated at every real $s$, but if $s$ counts the number of days since a trial began, the allowed values may be only the integers from $0$ to $7$.
:::

:::esempio{titolo="A square root in the numerator"}
For $f(x)=\dfrac{\sqrt{x-1}}{x-3}$, the radicand must be nonnegative and the denominator must be nonzero. Both requirements must hold at the same time.
$$
\begin{cases}
x-1\geq 0\\
x-3\neq 0
\end{cases}
\qquad\Longrightarrow\qquad
D_f=[1,3)\cup(3,+\infty).
$$
At $x=1$ the numerator is zero and the denominator is $-2$, so $1$ belongs to the domain. The point $3$ lies in the interval allowed by the square root, but it is excluded because it makes the denominator zero.
:::

:::esempio{titolo="A square root in the denominator"}
For $g(x)=\dfrac{1}{\sqrt{5-x}}$, the square root must exist and have a nonzero value. The square root of a nonnegative number is zero only when the number is zero, so the two conditions are equivalent to $5-x>0$. Thus $D_g=(-\infty,5)$.

For $h(x)=\sqrt{\dfrac{x-2}{x+1}}$, the entire quotient is under the square root. It is defined for $x\neq-1$ and is nonnegative when $x-2$ and $x+1$ have the same sign or the numerator is zero. Therefore $D_h=(-\infty,-1)\cup[2,+\infty)$.
:::

:::attenzione{titolo="Simplifying can conceal an excluded point"}
For $x\neq 2$, $\dfrac{x^2-4}{x-2}=x+2$. In the original formula, $2$ makes the denominator zero, so it remains excluded after simplification. The formula $x+2$ gives the values at the points in the domain and can be used to draw the graph. The point $(2,4)$ must be left open.

::grafico{f="x+2" xmin=-4 xmax=5 ymin=-3 ymax=8 punti="2,4,vuoto" titolo="The point $(2,4)$ is excluded from the graph of the quotient."}

:::

## Zeros, intercepts and sign

:::definizione{#zeri titolo="Intercepts with the axes"}
A **zero** of $f$ is a number $x$ in the domain such that $f(x)=0$. The graph meets the $x$-axis at the corresponding point $(x,0)$. If $0\in D_f$, its $y$-intercept is $(0,f(0))$. To study the **sign**, find the inputs at which $f(x)>0$, $f(x)=0$ or $f(x)<0$. On the graph, these correspond respectively to points above, on or below the horizontal axis.
:::

:::esempio{titolo="Sign of a rational function"}
Consider $f(x)=\dfrac{x-2}{x+1}$. The denominator is zero at $-1$, so $D_f=\mathbb R\setminus\{-1\}$. The numerator is zero at $2$, which belongs to the domain. Thus $2$ is a zero. Substituting $x=0$ gives $f(0)=-2$, so the intercepts are $(2,0)$ and $(0,-2)$.

| Interval | $x-2$ | $x+1$ | $f(x)$ |
|---|---|---|---|
| $(-\infty,-1)$ | $-$ | $-$ | $+$ |
| $(-1,2)$ | $-$ | $+$ | $-$ |
| $(2,+\infty)$ | $+$ | $+$ | $+$ |

The quotient is positive where the numerator and denominator have the same sign. For $f(x)\geq 0$, also include $2$, where the quotient is zero. The number $-1$ remains excluded. The solution set is $(-\infty,-1)\cup[2,+\infty)$.

::grafico{f="(x-2)/(x+1)" xmin=-6 xmax=6 ymin=-6 ymax=6 punti="2,0;0,-2" asintoti="x=-1" titolo="The quotient is negative between the excluded input and the zero."}

:::

:::osservazione{titolo="The graph may touch the axis"}
For $f(x)=(x-2)^2$, the only solution of $f(x)=0$ is $2$. The square is positive for every $x\neq 2$, so the graph reaches the horizontal axis at $(2,0)$ and remains above it on both sides of that point. Passing through a zero changes the sign only if the values on either side have opposite signs.
:::

## Symmetry about the axis and the origin

:::definizione{#simmetrie titolo="Even and odd functions"}
A set $D$ is symmetric about $0$ if it contains $-x$ whenever it contains $x$. On a symmetric domain, a function is **even** if $f(-x)=f(x)$ for every $x\in D$. The point $(-x,f(x))$ is the reflection of $(x,f(x))$ across the $y$-axis.

A function is **odd** if $f(-x)=-f(x)$ for every $x\in D$. The point $(-x,-f(x))$ is the reflection of $(x,f(x))$ through the origin. If $0$ belongs to the domain of an odd function, then $f(0)=-f(0)$, so $f(0)=0$.
:::

:::esempio{titolo="Adding a constant changes the symmetry"}
For $f(x)=x^3-x$ on $\mathbb R$,
$$
\begin{aligned}
f(-x)&=(-x)^3-(-x)\\[4pt]
&=-x^3+x\\[4pt]
&=-(x^3-x).
\end{aligned}
$$
The function is therefore odd. For $g(x)=x^3-x+2$, the values are $g(1)=2$, $g(-1)=2$, $g(2)=8$ and $g(-2)=-4$. The first pair rules out oddness and the second rules out evenness. One pair of equal values, such as the pair at $\pm 1$, is insufficient to prove that the function is even everywhere.
:::

:::attenzione{titolo="Symmetry also requires a symmetric domain"}
Let $f(x)=x^2$ with $D=[0,2]$. For example, $1\in D$ and $-1\notin D$, so $D$ is not symmetric about $0$. The given function is not even, although the formula $x^2$ satisfies $(-x)^2=x^2$ when considered on all of $\mathbb R$.
:::

## Composing two functions

:::definizione{#composizione titolo="The first output becomes the second input"}
In the **composition** $g\circ f$, first evaluate $f(x)$ and then use that value as the argument of $g$. Hence
$$
(g\circ f)(x)=g(f(x)),
\qquad
D_{g\circ f}=\{x\in D_f\mid f(x)\in D_g\}.
$$
Membership in $D_f$ guarantees that the intermediate value exists. Membership of $f(x)$ in $D_g$ guarantees that the next step is possible. Changing the order may change both the formula and the domain.
:::

:::esempio{titolo="Taking a square root before and after a shift"}
Let $f(x)=x-1$ and $g(x)=\sqrt{x}$. In $g\circ f$, the value $x-1$ is under the square root, so $x-1\geq 0$ and the result is $\sqrt{x-1}$ for $x\in[1,+\infty)$. In $f\circ g$, first evaluate $\sqrt{x}$, which requires $x\geq 0$. Then subtract $1$ to obtain $\sqrt{x}-1$ for $x\in[0,+\infty)$.
:::

:::esempio{titolo="Composition with a quadratic condition"}
Let $f(x)=x^2-4$ and $g(t)=\sqrt{t}$. The argument of $g$ is $f(x)$, so $x^2-4\geq 0$. Since $x^2\geq 4$ is equivalent to $|x|\geq 2$, it follows that
$$
(g\circ f)(x)=\sqrt{x^2-4},
\qquad
D_{g\circ f}=(-\infty,-2]\cup[2,+\infty).
$$
Both endpoints $\pm 2$ are allowed. At each endpoint, the inner function returns $0$ and the outer function returns $\sqrt{0}=0$.
:::

:::attenzione{titolo="Squaring on the outside leaves the domain unchanged"}
If $f(x)=\sqrt{x}$ and $g(t)=t^2$, then $(g\circ f)(x)=(\sqrt{x})^2=x$ only for $x\geq 0$. At $x=-1$, the intermediate value $f(-1)$ does not exist in the real numbers, so the composition is undefined at that input.
:::

## Recovering the input with the inverse function

:::definizione{#iniettivita titolo="Injective functions"}
A function $f\colon A\to B$ is **injective** if distinct inputs have distinct outputs. Equivalently, $f(x_1)=f(x_2)$ implies $x_1=x_2$. On the graph, each horizontal line $y=v$ selects the preimages of $v$. Injectivity is therefore equivalent to the condition that each horizontal line meets the graph at most once.
:::

::::teorema{#inversa titolo="An inverse defined on the range"}
If $f$ is injective, for each $y\in f(A)$ define $f^{-1}(y)$ as the unique $x\in A$ such that $f(x)=y$. The domain of the **inverse** is $f(A)$ and its range is $A$. The graphs of $f$ and $f^{-1}$ are obtained from each other by swapping the coordinates, a reflection across the line $y=x$.

:::dimostrazione
For each $y$ in the range there is an $x\in A$ with $f(x)=y$ by the definition of the range. Injectivity makes this $x$ unique, so the assignment $y\mapsto x$ is a function. If $(x,y)$ belongs to the graph of $f$, then $x=f^{-1}(y)$ and $(y,x)$ belongs to the graph of the inverse.
:::
::::

:::esempio{titolo="Inverse of an affine function"}
For $f(x)=2x+3$ on $\mathbb R$, fix an output $y$ and solve for the corresponding input.
$$
y=2x+3\quad\Longleftrightarrow\quad
2x=y-3\quad\Longleftrightarrow\quad x=\frac{y-3}{2}.
$$
Division by $2$ is allowed because it is nonzero. Each $y\in\mathbb R$ gives exactly one input, so $f^{-1}(y)=\dfrac{y-3}{2}$ on $\mathbb R$. The check $(f\circ f^{-1})(y)=2\cdot\dfrac{y-3}{2}+3=y$ shows that substituting the input we found returns the original output.
:::

:::esempio{titolo="Choosing the sign of the square root"}
For $f(x)=x^2$ on $\mathbb R$, the values $-2$ and $2$ give the same output $4$. On the restricted domain $[0,+\infty)$, the equation $x^2=y$ is solved with $x\geq 0$, giving $x=\sqrt y$. On $(-\infty,0]$, the requirement is $x\leq 0$, and the inverse is $y\mapsto-\sqrt y$. In both cases the domain of the inverse is $[0,+\infty)$ because the two restrictions have the same range.

::grafico{curve="t,t^2,0,3;t^2,t,0,3" f="x" legenda="y=x;y=x^2,\ x\geq0;y=\sqrt{x}" xmin=-1 xmax=7 ymin=-1 ymax=7 uguale=1 punti="2,4,pieno,P;4,2,pieno,Q" titolo="Reflection across $y=x$ takes $(2,4)$ to $(4,2)$."}

:::

## Shifting and reflecting a graph

::::teorema{#traslazioni titolo="Horizontal and vertical shifts"}
For $g(x)=f(x-h)+k$, each point $(u,f(u))$ on the graph of $f$ corresponds to $(u+h,f(u)+k)$ on the graph of $g$. The domain shifts horizontally by $h$ and the range shifts vertically by $k$.

:::dimostrazione
For $g$ to use the value $f(u)$, its inner argument must be $u$. Solving $x-h=u$ gives $x=u+h$. At that input the output is $g(u+h)=f(u)+k$. This holds for every $u$ in the original domain and identifies every point of the new graph.
:::
::::

:::esempio{titolo="Shifting the vertex and another point"}
Let $f(x)=x^2$ and $g(x)=(x-2)^2+1$. Since $g(x)=f(x-2)+1$, the horizontal coordinates increase by $2$ and the vertical coordinates increase by $1$. The vertex $(0,0)$ becomes $(2,1)$, and $(1,1)$ becomes $(3,2)$. Substitution confirms that $g(3)=(3-2)^2+1=2$.

::grafico{f="x^2;(x-2)^2+1" xmin=-2 xmax=5 ymin=-1 ymax=8 punti="0,0,pieno,V;2,1,pieno,V';1,1,pieno,A;3,2,pieno,A'" titolo="Two corresponding points undergo the same shift."}

:::

:::definizione{#riflessioni titolo="Reflections and vertical scaling"}
Replacing $f(x)$ with $-f(x)$ takes every point $(u,v)$ to $(u,-v)$, giving a reflection across the $x$-axis. Replacing it with $f(-x)$ takes the point to $(-u,v)$ because $-(-u)=u$. The reflection is then across the $y$-axis. For $g(x)=a f(x)$, where $a>0$, the horizontal coordinates stay the same and the vertical coordinates are multiplied by $a$.
:::

:::esempio{titolo="Transforming a graph without an explicit formula"}
If the graph of $f$ contains $P(3,-2)$, the corresponding point on $g(x)=-2f(x+1)+4$ can be found. To recover the input $3$, solve $x+1=3$, so the new horizontal coordinate is $2$. The vertical coordinate is $-2(-2)+4=8$, so the point is $(2,8)$. The transformation requires only the coordinates of $P$.
:::

:::esempio{titolo="Horizontal scaling"}
For $g(x)=f(2x)$, the input giving output $f(u)$ is found from $2x=u$, so it is $x=\dfrac{u}{2}$. Each point $(u,f(u))$ moves to $\left(\dfrac{u}{2},f(u)\right)$. For example, if $f$ has domain $[-2,4]$, then $g$ requires $-2\leq2x\leq4$, so $D_g=[-1,2]$. The range stays the same because each input $u$ of $f$ is reached from an input $x=\dfrac{u}{2}$ of $g$. In contrast, $2f(x)$ doubles the vertical coordinates and keeps the domain unchanged.
:::

## Range, monotonicity and extrema

:::definizione{#immagine titolo="Outputs and their order"}
The **range** of $f$ on a set $D$ is $f(D)=\{f(x)\mid x\in D\}$. The minimum, when it exists, is the smallest number in the range. The maximum, when it exists, is the largest. A function is **strictly increasing** on an interval if $f(x_1)<f(x_2)$ for every $x_1<x_2$ in the interval. It is strictly decreasing if $f(x_1)>f(x_2)$.
:::

:::esempio{titolo="Range of a restricted parabola"}
Consider $f(x)=(x-1)^2$ for $x\in[0,3)$. The value is the square of the distance from $x$ to $1$. From $0$ to $1$ that distance decreases, so $f$ is strictly decreasing on $[0,1]$. From $1$ to $3$ the distance increases, so $f$ is strictly increasing on $[1,3)$. The minimum is $0$ and is attained at $x=1$.

For each $y\in[0,4)$, the number $1+\sqrt y$ belongs to $[1,3)$ and satisfies $f(1+\sqrt y)=y$. For all allowed inputs the distance from $1$ is less than $2$, so the range is $[0,4)$. The value $4$ is the least upper bound of the range, and there is no maximum.

::grafico{curve="t,(t-1)^2,0,3" legenda="y=(x-1)^2,\ 0\leq x<3" xmin=-1 xmax=4 ymin=-1 ymax=5 punti="0,1;1,0;3,4,vuoto" titolo="The vertex attains the value $0$, while $4$ is excluded."}

:::

:::esempio{titolo="A maximum on a time interval"}
An object's height $H(t)=9-(t-2)^2$, in metres, is observed for $t\in[0,4]$, with $t$ in seconds. Since $0\leq(t-2)^2\leq 4$, it follows that $5\leq H(t)\leq 9$. At $t=2$ the square is zero, and the height is $9$. At endpoints $0$ and $4$ the square is $4$, and the height is $5$. Every height $y$ between $5$ and $9$ is attained by choosing $t=2+\sqrt{9-y}\in[2,4]$. The range is therefore $[5,9]$.
:::

:::osservazione{titolo="Monotonicity can guarantee injectivity"}
If $f$ is strictly increasing or strictly decreasing on an interval, the outputs for $x_1<x_2$ are different. Thus $f$ is injective on that interval. For $f(x)=(x-1)^2$, this holds separately to the left and to the right of $1$. The two intervals give different inverses because the first returns $1-\sqrt y$ and the second returns $1+\sqrt y$.
:::
