---
titolo: Functions, graphs, exponentials and logarithms
sommario: Domain and range, reading and transforming graphs, composition and inverses, exponential models and logarithmic equations.
---

## Functions, tables and graphs

:::definizione{#funzione titolo="Functions and function values"}
A **function** assigns exactly one element of a set to each element of another set. In the notation $f:A\to B$, the set $A$ is the **domain**, meaning the set of allowed inputs, while $B$ is the codomain. For $x\in A$, the symbol $f(x)$ denotes the value assigned to $x$. The letter $x$ may represent a time, a length or a number without units; its meaning depends on the problem.

To evaluate $f(x)=2x^2-1$ at $x=-3$, the entire input replaces the variable. This gives $f(-3)=2(-3)^2-1=17$. The square also applies to the sign of the input. The expression $f(2x)$ instead requires replacing the variable by $2x$ everywhere it occurs, so it equals $2(2x)^2-1=8x^2-1$.
:::

:::definizione{#immagine titolo="Range and graphical representation"}
The **range** of $f$ is the set of values it actually takes, namely $f(A)=\{f(x):x\in A\}$. Its graph is the set of points $(x,f(x))$. To read $f(2)$, start from the horizontal coordinate $2$, move vertically to the graph and read the corresponding vertical coordinate. A vertical line meets the graph of a function at most once, because each input has exactly one assigned value.

The function $f:\mathbb R\to\mathbb R$, $f(x)=x^2$, has both domain and codomain $\mathbb R$, but range $[0,+\infty)$. Every square is nonnegative, and every number $y\ge0$ is obtained by choosing $x=\sqrt y$. This second observation proves that the range contains *all* the numbers in the stated interval.
:::

:::esempio{titolo="Information provided by a table"}
The table $f(1)=4$, $f(2)=4$, $f(5)=7$ allows us to calculate $f(1)+f(5)=11$ and shows that $4$ and $7$ belong to the range. The data do not specify $f(3)$ unless a rule allowing it to be found is stated. Moreover, two different inputs, $1$ and $2$, have the same image. The function is therefore well defined, but it is not injective on a domain containing these inputs.

:::

:::esempio{titolo="Reading a value from a graph"}
For the function $g(x)=2x-1$, which differs from the function in the table, the point $(2,3)$ gives $g(2)=3$.

::grafico{f="2*x-1" xmin=-1 xmax=4 ymin=-3 ymax=7 punti="2,3" segmenti="2,0,2,3;0,3,2,3" titolo="The point with horizontal coordinate 2 has vertical coordinate 3."}
:::

:::esempio{#funzioni-a-tratti titolo="Reading a piecewise function"}
A function may use different formulas on different intervals, provided each input receives exactly one value. For example,
$$
p(x)=\begin{cases}
2x+1,&x<1,\\
3,&x\ge1.
\end{cases}
$$
To calculate $p(0)$, use the first piece to obtain $1$; for $p(1)$, use the second piece to obtain $3$. The equality in the condition $x\ge1$ determines which formula applies at the join. As the input approaches $1$ from the left, $2x+1$ also approaches $3$, so the pieces meet without a jump. If the second piece instead had value $4$, the graph would have a jump at $1$ and would still be a function graph. A horizontal piece indicates a constant value, not the absence of the function.
:::

## Domain and simultaneous conditions

:::definizione{#dominio titolo="Natural domain of a formula"}
When a real formula is given without other restrictions, its **natural domain** is the set of inputs for which every operation written is defined over the real numbers. A polynomial allows every real number. A fraction requires a nonzero denominator. An even-index root requires a nonnegative radicand; an odd-index root also allows negative radicands. A logarithm requires a strictly positive argument.

The conditions must hold simultaneously, so their intersection is required. If the denominator is an even-index root, its radicand must be strictly positive: zero would make the denominator zero. If a problem represents elapsed time, the condition $t\ge0$ may be added to the algebraic condition. The domain of the model also accounts for this information.
:::

:::esempio{titolo="A square root and a denominator"}
For $f(x)=\dfrac{\sqrt{x-2}}{x-5}$ we must solve the system
$$
\begin{cases}
x-2\ge0,\\
x-5\ne0.
\end{cases}
$$
The first condition gives $x\ge2$ and the second excludes $5$. Therefore $D=[2,5)\cup(5,+\infty)$. The value $2$ is allowed because it only makes the numerator zero. The value $5$ is excluded even though the square root is defined. The choice of brackets depends on these two separate checks.
:::

:::esempio{titolo="Conditions restricting the same interval"}
For $g(x)=\dfrac{\ln x}{\sqrt{6-x}}$, we require $x>0$ and $6-x>0$, so $0<x<6$. For $h(x)=\ln\left(\dfrac{x-4}{x+2}\right)$, the ratio must instead be positive. The points separating the signs are $-2$ and $4$. Numerator and denominator are both negative for $x<-2$ and both positive for $x>4$, so the domain is $(-\infty,-2)\cup(4,+\infty)$.
:::

:::attenzione
Simplification preserves values only at points where the original formula is defined. The function $\dfrac{x^2-4}{x-2}$ equals $x+2$ for $x\ne2$, but its domain still excludes $2$. There is an open point at $(2,4)$ on the line's graph. Including that point defines a different function.
:::

## Zeros, signs and intersections

:::definizione{#zeri-segno titolo="Zeros and sign of a function"}
A **zero** is an input $x_0$ in the domain for which $f(x_0)=0$. On the graph it is the horizontal coordinate of a point on the horizontal axis. The vertical intercept, if $0$ belongs to the domain, is instead the point $(0,f(0))$. The function is positive where its graph is above the horizontal axis and negative where it is below.

For a fraction, the zeros are the numerator's zeros that do not make the denominator zero. For example, $\dfrac{x(x-4)}{x-4}$ has only the zero $0$, because $4$ is outside the domain. Its sign depends on the ratio of the signs of numerator and denominator. In questions asking for the entire solution set, a smaller interval consisting of solutions does not constitute the complete answer.
:::

:::esempio{titolo="Sign of a parabola"}
For $f(x)=(x+2)(x-1)$, the zeros are $-2$ and $1$. To the left of $-2$, both factors are negative and their product is positive. Between the zeros the signs are opposite, so the product is negative. To the right of $1$, both factors are positive. Therefore $f(x)<0$ exactly when $-2<x<1$. The inequality $f(x)\le0$ also includes the two zeros.

::grafico{f="(x+2)*(x-1)" xmin=-4 xmax=3 ymin=-3 ymax=7 punti="-2,0;1,0" titolo="Between the two zeros the parabola lies below the horizontal axis."}
:::

:::definizione{#intersezioni titolo="Intersection of two graphs"}
A point shared by the graphs of $f$ and $g$ has the same horizontal and vertical coordinates. The horizontal coordinates of the intersections therefore solve $f(x)=g(x)$ in the common domain. With $f(x)=x^2+1$ and $g(x)=4x-2$, this gives $x^2-4x+3=0$, so $x=1$ or $x=3$. The vertical coordinates are respectively $2$ and $10$. If the intersection point is requested, the answer includes both coordinates.
:::

## Families of elementary functions

:::definizione{#funzioni-elementari titolo="Lines, parabolas and absolute value"}
An affine function $f(x)=mx+q$ has a straight-line graph. The number $m$ is the change in the vertical coordinate for each unit increase in the horizontal coordinate; $q=f(0)$ is the initial value. From two points with distinct horizontal coordinates, we calculate $m=\dfrac{y_2-y_1}{x_2-x_1}$. Direct proportionality $y=kx$ is the special case with $q=0$.

The parabola $a(x-h)^2+k$, with $a\ne0$, has vertex $(h,k)$ and axis $x=h$. If $a>0$, the square makes $k$ the minimum; if $a<0$, $k$ is the maximum. Absolute value satisfies $|u|=u$ for $u\ge0$ and $|u|=-u$ for $u<0$. Hence $|x-h|+k$ has a graph consisting of two rays with vertex $(h,k)$. For the parabola the increase depends on a square; for absolute value it depends on the distance from the vertex's horizontal coordinate.
:::

:::definizione{#radici-reciproci titolo="Roots and inverse proportionality"}
The function $y=\sqrt x$ has domain and range $[0,+\infty)$ and is strictly increasing. The function $y=\sqrt[3]x$ has domain and range $\mathbb R$. The coordinates $(0,0)$, $(1,1)$ and $(4,2)$ help identify the square-root graph.

Inverse proportionality $y=\dfrac{k}{x}$, with $k\ne0$, keeps the product $xy=k$ constant and requires $x\ne0$. For $k>0$, the two branches lie in the first and third quadrants. The axes are asymptotes: the curve approaches them without meeting them. In $y=\dfrac1{x-h}+k$, the asymptotes become $x=h$ and $y=k$. The vertical asymptote indicates an excluded input; the horizontal one describes a value approached by the function for horizontal coordinates of large magnitude.

::grafico{f="1/(x-2)-1" xmin=-3 xmax=7 ymin=-5 ymax=4 asintoti="x=2;y=-1" titolo="The translation moves the asymptotes to the lines x = 2 and y = -1."}
:::

:::esempio{titolo="Data and choice of model"}
A quantity starts at $6$ and increases by $4$ units every minute. After $t$ minutes it equals $6+4t$, because the absolute increase is constant. If instead it doubles every minute, after $n$ whole minutes it equals $6\cdot2^n$, because the multiplicative factor is constant. For a fixed distance of $12$ kilometers, the time in hours at a speed of $v>0$ kilometers per hour is $\dfrac{12}{v}$. The type of relationship follows from the data before the numerical calculation.
:::

## Transformations and symmetries

:::teorema{#trasformazioni titolo="Translations and changes of scale"}
If $(u,v)$ belongs to the graph of $f$, the following points belong to the transformed graphs:

- $(u,v+k)$ for $y=f(x)+k$;
- $(u+h,v)$ for $y=f(x-h)$;
- $(u,av)$ for $y=af(x)$;
- $\left(\dfrac{u}{b},v\right)$ for $y=f(bx)$, with $b\ne0$.

The horizontal transformation is obtained by requiring the inner argument to remain $u$. For example, if $f(4)=-2$, for $g(x)=f(x+3)-1$ we solve $x+3=4$. This gives $x=1$ and $g(1)=-3$. The two operations act on different coordinates and both must be applied.
:::

:::esempio{titolo="A translated parabola"}
The graph of $y=(x-2)^2+1$ is obtained from $y=x^2$ by a translation two units to the right and one unit upward. The vertex is $(2,1)$. The minimum value is $1$, while the vertical intercept is $f(0)=5$. The minimum value and the vertical intercept are different pieces of information and coincide only in particular cases.

::grafico{f="x^2;(x-2)^2+1" xmin=-2 xmax=5 ymin=-1 ymax=8 punti="0,0;2,1;0,5" titolo="The vertex and the vertical intercept distinguish the two parabolas."}
:::

:::definizione{#parita titolo="Even and odd functions"}
On a domain symmetric about zero, a function is **even** if $f(-x)=f(x)$ for every allowed input and **odd** if $f(-x)=-f(x)$. An even function's graph is symmetric about the vertical axis; an odd function's graph is symmetric about the origin. The functions $x^2+3$ and $|x|$ are even; $x^3-x$ and $\dfrac1x$ are odd on their respective domains.

Just two opposite inputs with the same image are compatible with evenness, but do not prove it over the entire domain. The property must hold for every input. If an odd function is defined at zero, then $f(0)=-f(0)$, so necessarily $f(0)=0$.
:::

## Monotonicity, extrema and range

:::definizione{#monotonia titolo="Increasing and decreasing functions"}
A function is **strictly increasing** on an interval if $a<b$ implies $f(a)<f(b)$ for every pair of inputs in that interval. It is strictly decreasing if the comparison between the images is reversed. For non-strict increase, equality is allowed: $f(a)\le f(b)$. A constant function therefore satisfies non-strict increase, but not strict increase.

Monotonicity compares two vertical coordinates and does not determine their sign. The function $x-100$ is increasing even for inputs at which it takes negative values. For $f(x)=(x-2)^2+1$, the distance from $2$ decreases as $x$ increases up to $2$ and increases once $x$ exceeds $2$. The parabola is therefore decreasing on $(-\infty,2]$ and increasing on $[2,+\infty)$.
:::

:::definizione{#estremi titolo="Maximum and minimum values"}
An absolute minimum is a value $m=f(x_0)$ such that $f(x)\ge m$ over the entire domain under consideration. The point $x_0$ is an input where that minimum is attained. Distinguishing $x_0$ from $m$ allows us to answer correctly questions such as “where is the minimum attained?” and “what is the minimum value?”.

If the domain is restricted, the available values change. The function $(x-2)^2+1$ on $[3,5]$ is increasing and takes its minimum $2$ at $x=3$ and maximum $10$ at $x=5$. The vertex is outside the assigned interval. Its range is $[2,10]$ because the function also takes every intermediate value on that interval.
:::

:::definizione{#estremi-relativi titolo="Relative extrema and local comparison"}
A **relative maximum** compares a function value with the values at sufficiently nearby inputs: a point may be the highest in that neighborhood without being the highest on the entire domain. A relative minimum reverses the comparison. An absolute extremum instead requires comparison with every allowed input.

On the piecewise-linear graph joining $(-2,5)$, $(0,2)$, $(1,4)$ and $(3,1)$, the point $(1,4)$ is a relative maximum: the graph rises to that point and immediately afterward falls. It is not the absolute maximum, because at the left endpoint the function equals $5>4$. The point $(0,2)$ is a relative minimum, but the value $1$ attained at $x=3$ is lower. To identify an interior relative extremum, compare both sides; the positive or negative sign of the vertical coordinate alone does not determine the type of extremum.
:::

:::esempio{titolo="Range and number of solutions"}
For $f(x)=(x+2)^2-1$, the range is $[-1,+\infty)$. The equation $f(x)=k$ becomes $(x+2)^2=k+1$. It has two distinct solutions for $k>-1$, exactly one for $k=-1$ and none for $k<-1$. The graph connects these cases to the number of intersections with a horizontal line. The solutions can therefore be counted without calculating all the roots each time.
:::

## Exponentials and growth models

:::definizione{#esponenziale titolo="Exponential function"}
For $a>0$, $a\ne1$, the function $f(x)=a^x$ is defined for every real number, is always positive and has range $(0,+\infty)$. It passes through $(0,1)$ because $a^0=1$. It is strictly increasing for $a>1$ and strictly decreasing for $0<a<1$. The line $y=0$ is a horizontal asymptote, so zero is never attained.

The relation $a^{-x}=\left(\dfrac1a\right)^x$ shows that exponential graphs with reciprocal bases are symmetric about the vertical axis. For $a>1$, a negative exponent gives a value between zero and one; it does not produce a negative value.

::grafico{f="2^x;2^(-x)" xmin=-3 xmax=3 ymin=-0.5 ymax=8 titolo="Reciprocal bases produce graphs symmetric about the vertical axis."}
:::

:::teorema{#equazioni-esponenziali titolo="Comparing exponentials"}
Since $a^x$ is strictly monotonic, $a^u=a^v$ is equivalent to $u=v$. For inequalities, comparing the exponents preserves the inequality direction if $a>1$ and reverses it if $0<a<1$. For example, $4^x=8$ becomes $2^{2x}=2^3$, so $x=\dfrac32$. By contrast, $\left(\dfrac12\right)^x>\dfrac14=\left(\dfrac12\right)^2$ gives $x<2$.

When both $a^{2x}$ and $a^x$ occur, the substitution $u=a^x$ reduces the problem to an equation in $u$, with the constraint $u>0$. For $4^x-5\cdot2^x+4=0$, this gives $u^2-5u+4=0$, so $u=1$ or $u=4$. The original solutions are $x=0$ and $x=2$.
:::

:::esempio{titolo="Successive percentages and halving"}
An initial quantity $N_0$ multiplied by the same factor $r>0$ at each interval follows $N_n=N_0r^n$. Growth of $10\%$ corresponds to $r=1.1$, so $200$ becomes $200\cdot1.1^2=242$ after two intervals. The second percentage applies to the value that has already increased.

Assuming exponential decay with halving every three hours, the continuous model is $M(t)=160\left(\dfrac12\right)^{\frac t3}$, with $t\ge0$ in hours and mass in grams. After nine hours, three intervals have elapsed and $20\,\mathrm g$ remain. The exponent counts the intervals, so time must be expressed in the unit used by the model.
:::

## Logarithms and their equations

:::definizione{#logaritmo titolo="Logarithm as an exponent"}
For $a>0$, $a\ne1$ and $b>0$, the number $\log_a b$ is the exponent satisfying $a^{\log_a b}=b$. Hence $\log_a b=c$ is equivalent to $a^c=b$. In particular, $\log_a1=0$ and $\log_a a=1$. The logarithmic function is the inverse of the exponential function, with domain $(0,+\infty)$ and range $\mathbb R$.

The symbol $\ln$ denotes the natural logarithm, with base $e>1$. For $\log_3\dfrac1{27}$, we observe that $\dfrac1{27}=3^{-3}$, so the result is $-3$. A logarithm may be negative even though its argument must be positive. For a base greater than one, it is negative when its argument lies between zero and one.
:::

:::teorema{#proprieta-logaritmi titolo="Properties of logarithms"}
For a valid base and $u,v>0$, we have
$$
\log_a(uv)=\log_a u+\log_a v,\qquad
\log_a\frac uv=\log_a u-\log_a v,
$$
$$
\log_a(u^r)=r\log_a u.
$$
The product property follows from the rule $a^p a^q=a^{p+q}$, by setting $p=\log_a u$ and $q=\log_a v$. The other properties follow similarly from quotients and powers. To change the base, use $\log_a b=\dfrac{\ln b}{\ln a}$; the denominator is nonzero because $a\ne1$.

For example, $\log_2 6+\log_2\dfrac43=\log_2 8=3$. In $\ln(x^2)$, the argument is positive for $x\ne0$, and the rewriting valid on the entire domain is $2\ln|x|$. The expression $2\ln x$ would be defined only for $x>0$.
:::

:::attenzione
The logarithm of a sum does not split into logarithms of the addends. With $u=v=1$, we would have $\ln(u+v)=\ln2$, whereas $\ln u+\ln v=0$. Furthermore, when two logarithms are combined, the positivity conditions on the individual arguments remain: a positive product can have two negative factors.
:::

:::esempio{#equazioni-logaritmiche titolo="Equations with domain checks"}
The equation $\log_2x+\log_2(x-2)=3$ requires $x>2$. Combining the logarithms gives $x(x-2)=8$, so $(x-4)(x+2)=0$. Of the values $4$ and $-2$, only $4$ belongs to the original domain.

The inequality $\log_{\frac13}(x-1)>-1$ requires $x>1$. The base is less than one, so the comparison of arguments is $x-1<3$. Intersecting the two conditions gives $1<x<4$. The direction follows from the logarithm's decreasing behavior, while positivity of the argument remains a separate condition.
:::

## Composition and inverse functions

:::definizione{#composizione titolo="Composition and its domain"}
The composition $(f\circ g)(x)=f(g(x))$ applies $g$ first and then $f$. Its domain consists of inputs $x$ for which $g(x)$ is defined and the resulting value belongs to the domain of $f$. If $f(u)=\sqrt u$ and $g(x)=6-3x$, the result is $\sqrt{6-3x}$ with $x\le2$.

Order matters. With $f(x)=x^2$ and $g(x)=x+1$, we obtain $(f\circ g)(x)=(x+1)^2$, whereas $(g\circ f)(x)=x^2+1$. The expressions agree at $x=0$, but differ at other inputs. The sum $f+g$ and product $fg$ instead operate on the two values calculated at the same horizontal coordinate and are not compositions.
:::

:::definizione{#inversa titolo="Injectivity and inverse functions"}
A function is **injective** if distinct inputs have distinct images. In this case, each value in the range identifies exactly one original input, and the inverse $f^{-1}$ returns that input. Domain and range exchange roles. On the graph, the coordinates exchange roles, so the two graphs are symmetric about the line $y=x$.

For $f(x)=4x-1$, the relation $y=4x-1$ gives $x=\dfrac{y+1}{4}$. Thus $f^{-1}(y)=\dfrac{y+1}{4}$. The notation $f^{-1}$ denotes the inverse function; the reciprocal $\dfrac1{f(x)}$ is a different operation.
:::

:::esempio{titolo="Restricting a non-injective function"}
The square function on $\mathbb R$ is not injective because $f(2)=f(-2)=4$. On the domain $[0,+\infty)$, it is instead strictly increasing and has inverse $\sqrt x$. If the domain is restricted to $(-\infty,0]$, its inverse becomes $-\sqrt x$, still with domain $[0,+\infty)$. The choice of sign depends on which branch has been retained.

::grafico{f="x^2;sqrt(x);x" uguale=1 xmin=0 xmax=4 ymin=0 ymax=4 titolo="Squaring on the positive half-axis and the square-root function are inverses."}
:::
