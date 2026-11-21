---
titolo: Functions, graphs, exponentials and logarithms
sommario: Domain and range, reading and transforming graphs, composition and inverses, exponential models and logarithmic equations.
---

## Functions, tables and graphs

:::definizione{#funzione titolo="Functions and function values"}
A **function** is a rule that assigns *exactly one* element of a target set to each element of a starting set. For example, the rule “each number is assigned its double” is a function, and it assigns $6$ to the number $3$.

The starting set is called the **domain** and the target set the codomain. The notation $f:A\to B$ denotes a function $f$ with domain $A$ and codomain $B$, and $x\in A$ is read “$x$ belongs to $A$”. An element $x$ of the domain is called an **input**; the element that the function assigns to it is written $f(x)$, is read “$f$ of $x$” and is the **value** of the function at $x$. Depending on the problem, $x$ represents a time, a length or a number without units. The set of real numbers is denoted by $\mathbb R$.

The rule is usually a formula. To evaluate $f(x)=2x^2-1$ at $x=-3$, write $-3$, in brackets, in place of every $x$:
$$
f(-3)=2\cdot(-3)^2-1=2\cdot9-1=17 .
$$
The square applies to the whole number $-3$, sign included. Similarly, $f(2x)$ is found by writing $2x$ in place of every $x$ and equals $2\cdot(2x)^2-1=2\cdot4x^2-1=8x^2-1$.
:::

:::definizione{#immagine titolo="Range and graphical representation"}
The **range** of a function $f$ is the set of values the function takes, that is, the numbers $f(x)$ obtained as $x$ varies over the whole domain $A$. It is written $f(A)$ and is a part of the codomain. The single value $f(x)$ is called the image of $x$.

For example, $f(x)=x^2$ has domain and codomain $\mathbb R$. A square is non-negative, that is, greater than or equal to zero, so no negative number is a value of $f$. Every number $y\ge0$ is instead a value of $f$, because $y=f(\sqrt y)$. The range is therefore the interval $[0,+\infty)$. In an interval, a square bracket indicates an included endpoint and a round bracket an excluded one; the symbols $+\infty$ and $-\infty$, “plus infinity” and “minus infinity”, indicate that the interval continues without end to the right or to the left.

The **graph** of $f$ is the set of points $(x,f(x))$ in the Cartesian plane. The first number of the pair is the **horizontal coordinate** and is read on the horizontal axis; the second is the **vertical coordinate** and is read on the vertical axis. To read $f(2)$, start from the point $2$ on the horizontal axis, move vertically to the curve and read the vertical coordinate. A vertical line meets the graph of a function at most once, because each input is assigned exactly one value.
:::

:::esempio{titolo="Information provided by a table"}
A table defines a function by listing the inputs and the corresponding values.

| $x$ | $1$ | $2$ | $5$ |
|---|---|---|---|
| $f(x)$ | $4$ | $4$ | $7$ |

The table gives $f(1)=4$ and $f(5)=7$, so $f(1)+f(5)=4+7=11$. The numbers $4$ and $7$ belong to the range. The value $f(3)$ is not specified, because $3$ does not appear among the inputs; it can be found only if the question states a rule that also holds for $3$.

The inputs $1$ and $2$ have the same value $4$, but each input has exactly one value, so the table defines a function. A function in which two different inputs share a value is called *non-injective*.

:::

:::esempio{titolo="Reading a value from a graph"}
The graph of $g(x)=2x-1$ is the line in the figure. The value $g(2)=2\cdot2-1=3$ is also read from the graph. The vertical dashed segment rises from the point $2$ on the horizontal axis to the point $(2,3)$ of the line; the horizontal one joins this point to the vertical axis, where the vertical coordinate $3$ is read.

::grafico{f="2*x-1" xmin=-1 xmax=4 ymin=-3 ymax=7 punti="2,3" segmenti="2,0,2,3;0,3,2,3" titolo="The point with horizontal coordinate 2 has vertical coordinate 3."}
:::

:::esempio{#funzioni-a-tratti titolo="Reading a piecewise function"}
A **piecewise function** uses different formulas on different parts of the domain. Next to each formula is the condition stating for which $x$ that formula is used. For example,
$$
p(x)=\begin{cases}
2x+1,&x<1,\\
3,&x\ge1.
\end{cases}
$$
For $x=0$ we have $0<1$, so the first row is used and $p(0)=2\cdot0+1=1$. For $x=1$ the condition $x\ge1$, which includes equality, is satisfied, so $p(1)=3$.

The graph is part of the line $y=2x+1$ to the left of $1$ and a horizontal piece at height $3$ from $1$ onwards, on which the function is defined and has the constant value $3$. For $x$ close to $1$ from the left, the first formula gives values close to $2\cdot1+1=3$, so the two pieces join at $(1,3)$ without a jump. With $4$ instead of $3$ in the second row, the graph would have a jump at $x=1$ and $p$ would still be a function, because each input would have exactly one value.
:::

## Domain and simultaneous conditions

:::definizione{#dominio titolo="Natural domain of a formula"}
When a function is given by a formula and no domain is stated, its domain is the **natural domain**, that is, the set of real numbers $x$ for which every operation written in the formula is defined. Three operations impose a condition.

- A fraction requires a non-zero denominator; for example $\dfrac1x$ is defined for $x\ne0$.
- An even-index root requires a non-negative radicand. The radicand is the expression written under the root sign; the index is the small number written above the sign and equals $2$ for a square root.
- A logarithm, written $\log$ or $\ln$ and defined in the section “Logarithms and their equations”, requires a strictly positive argument; the argument is the expression whose logarithm is calculated.

A polynomial, that is, a sum of powers of $x$ multiplied by numbers, such as $x^2-3x+2$, contains none of these operations, so its domain is $\mathbb R$. An odd-index root is also defined for negative numbers; for example $\sqrt[3]{-8}=-2$, because $(-2)^3=-8$.

The conditions must all be satisfied together, so they are written as a system. The domain is their intersection, that is, the set of $x$ satisfying all of them. When an even-index root is in the denominator, the radicand must be strictly positive, because the value zero would make the denominator zero. If the variable is a time $t$ measured from the start of an experiment, the condition $t\ge0$ is added.
:::

:::esempio{titolo="A square root and a denominator"}
The formula $f(x)=\dfrac{\sqrt{x-2}}{x-5}$ contains a square root and a fraction, so there are two conditions:
$$
\begin{cases}
x-2\ge0,\\
x-5\ne0.
\end{cases}
$$
The first means $x\ge2$ and the second $x\ne5$. The domain consists of the numbers from $2$ onwards, except $5$, and is written $D=[2,5)\cup(5,+\infty)$; the symbol $\cup$ is read “union” and joins the two intervals. The number $2$ is included, with a square bracket, because $f(2)=\dfrac{\sqrt0}{-3}=0$. The number $5$ is excluded, with round brackets, because at $x=5$ the denominator equals $0$, even though the square root is defined.
:::

:::esempio{titolo="Conditions restricting the same interval"}
For $g(x)=\dfrac{\ln x}{\sqrt{6-x}}$, the argument of the logarithm must be positive and the radicand, which is in the denominator, must be strictly positive:
$$
\begin{cases}
x>0,\\
6-x>0.
\end{cases}
$$
The second condition means $x<6$, so the domain is $0<x<6$.

For $h(x)=\ln\left(\dfrac{x-4}{x+2}\right)$, the argument of the logarithm is a fraction, positive when numerator and denominator have the same sign. The numerator $x-4$ is positive for $x>4$ and the denominator $x+2$ for $x>-2$, so the numbers $-2$ and $4$ separate the signs. The two terms are both negative for $x<-2$, have opposite signs for $-2<x<4$ and are both positive for $x>4$. The domain is thus $(-\infty,-2)\cup(4,+\infty)$.
:::

:::attenzione
The domain is determined from the formula as written, before simplifying it. The function $\dfrac{x^2-4}{x-2}$ has domain $x\ne2$. Since $x^2-4=(x-2)(x+2)$, for $x\ne2$ the factor $x-2$ cancels and the function equals $x+2$. Its graph is the line $y=x+2$ with the point $(2,4)$ removed. The function $x+2$, which is also defined at $2$, is a different function.
:::

## Zeros, signs and intersections

:::definizione{#zeri-segno titolo="Zeros and sign of a function"}
A **zero** of a function $f$ is a number $x_0$ in the domain at which the function equals zero, that is, $f(x_0)=0$. The zeros are found by solving $f(x)=0$; for example, $f(x)=2x-6$ has the zero $x_0=3$, because $2\cdot3-6=0$. The points of the horizontal axis have vertical coordinate $0$, so on the graph a zero is the horizontal coordinate of a point where the curve meets the horizontal axis.

The **vertical intercept** is the point where the graph meets the vertical axis. The points of that axis have horizontal coordinate $0$, so the intercept is the point $(0,f(0))$ and it exists if $0$ belongs to the domain. For $f(x)=2x-6$ it is the point $(0,-6)$.

Studying the **sign** of $f$ means establishing where $f(x)>0$ and where $f(x)<0$. The function is positive where the graph lies above the horizontal axis and negative where it lies below.

The zeros of a fraction are the zeros of the numerator that belong to the domain. The function $\dfrac{x(x-4)}{x-4}$ has domain $x\ne4$; the numerator equals zero at $0$ and at $4$, but $4$ is excluded from the domain, so the only zero is $0$. A fraction is positive where numerator and denominator have the same sign and negative where they have opposite signs.
:::

:::esempio{titolo="Sign of a parabola"}
The function $f(x)=(x+2)(x-1)$, once the product is expanded, is the second-degree polynomial $x^2+x-2$, whose graph is a curve called a parabola. A product equals zero when one of its factors equals zero, so the zeros are $x=-2$ and $x=1$. For $x<-2$ both factors are negative and the product is positive. For $-2<x<1$ the factor $x+2$ is positive and $x-1$ is negative, so the product is negative; for example $f(0)=2\cdot(-1)=-2$. For $x>1$ both factors are positive and the product is positive.

The inequality $f(x)<0$ therefore has solution $-2<x<1$, and $f(x)\le0$ also includes the two zeros. The interval $-1<x<0$ contains only solutions, but it leaves out others, such as $x=0.5$, so it is not the solution set.

In the figure, the two marked points, $(-2,0)$ and $(1,0)$, correspond to the zeros. The curve lies below the horizontal axis between the two zeros and above it to the left of $-2$ and to the right of $1$.

::grafico{f="(x+2)*(x-1)" xmin=-4 xmax=3 ymin=-3 ymax=7 punti="-2,0;1,0" titolo="Between the two zeros the parabola lies below the horizontal axis."}
:::

:::definizione{#intersezioni titolo="Intersection of two graphs"}
An **intersection** point of the graphs of two functions $f$ and $g$ is a point that belongs to both. There the two functions have the same input and the same value, so the horizontal coordinates of the intersections are the solutions of the equation $f(x)=g(x)$ in the common domain.

With $f(x)=x^2+1$ and $g(x)=4x-2$ the equation is $x^2+1=4x-2$. Moving all terms to the left gives $x^2-4x+3=0$, or $(x-1)(x-3)=0$, so $x=1$ or $x=3$. Substituting the horizontal coordinates into $g$ gives the vertical coordinates $g(1)=4\cdot1-2=2$ and $g(3)=4\cdot3-2=10$, so the intersection points are $(1,2)$ and $(3,10)$. A question asking for the intersection point is answered by a pair of numbers.
:::

## Families of elementary functions

:::definizione{#funzioni-elementari titolo="Lines, parabolas and absolute value"}
An **affine function** has the form $f(x)=mx+q$ and its graph is a straight line. The number $m$ is the **slope**, that is, the change in $f(x)$ when $x$ increases by $1$; the line rises from left to right if $m>0$ and falls if $m<0$. The number $q=f(0)$ is the initial value, so the line meets the vertical axis at $(0,q)$.

Given two points $(x_1,y_1)$ and $(x_2,y_2)$ of the line, with $x_1\ne x_2$, the slope is the change in the vertical coordinates divided by the change in the horizontal coordinates, $m=\dfrac{y_2-y_1}{x_2-x_1}$. For the line through $(1,3)$ and $(4,9)$ this gives $m=\dfrac{9-3}{4-1}=\dfrac63=2$. **Direct proportionality** $y=kx$ is the case $q=0$, in which the line passes through the origin $(0,0)$.

A **parabola** is the graph of a second-degree polynomial. In the form $f(x)=a(x-h)^2+k$, with $a\ne0$, the point $(h,k)$ is the **vertex**, that is, the point of the graph at which the function takes its minimum or maximum value. Indeed, $(x-h)^2$ equals zero for $x=h$ and is positive for every other $x$. If $a>0$, a non-negative quantity is added to $k$, so $k$ is the minimum value; if $a<0$, the quantity added is less than or equal to zero, so $k$ is the maximum value. The vertical line $x=h$ is the axis of symmetry. For example, $(x-2)^2+1$ has vertex $(2,1)$ and minimum value $1$.

The **absolute value** of a number $u$, written $|u|$, is the distance of $u$ from zero on the number line. It satisfies $|u|=u$ if $u\ge0$ and $|u|=-u$ if $u<0$; for example $|5|=5$ and $|-5|=5$. The graph of $|x-h|+k$ consists of two rays starting from the vertex $(h,k)$, with slope $-1$ on the left and $1$ on the right. At distance $d$ from the horizontal coordinate $h$ of the vertex, $|x-h|+k$ exceeds $k$ by $d$, whereas the parabola $(x-h)^2+k$ exceeds $k$ by $d^2$.
:::

:::definizione{#radici-reciproci titolo="Roots and inverse proportionality"}
The **square root** $\sqrt x$ of a number $x\ge0$ is the non-negative number whose square is $x$; for example $\sqrt9=3$. The function $y=\sqrt x$ has domain and range $[0,+\infty)$, is strictly increasing, that is, its graph rises from left to right, and passes through $(0,0)$, $(1,1)$ and $(4,2)$. The cube root $\sqrt[3]x$ is the number whose cube is $x$, and the function $y=\sqrt[3]x$ has domain and range $\mathbb R$.

Two quantities $x$ and $y$ are in **inverse proportionality** when their product is constant, $xy=k$ with $k\ne0$, that is, $y=\dfrac kx$ with $x\ne0$. For $k=12$ the points $(2,6)$, $(3,4)$ and $(6,2)$ belong to the graph, because in each of them the product of the coordinates is $12$. For $k>0$ the coordinates have the same sign, so the graph has one branch in the first quadrant, where $x>0$ and $y>0$, and one in the third, where $x<0$ and $y<0$.

An **asymptote** is a line that the points of the graph approach ever more closely when $x$ or $y$ becomes very large in absolute value. The asymptotes of $y=\dfrac kx$ are the two axes, and the curve does not meet them. With $k=12$, for $x=0.01$ we have $y=1200$, a point close to the vertical axis; for $x=1200$ we have $y=0.01$, a point close to the horizontal axis.

In the function $y=\dfrac1{x-h}+k$ the vertical asymptote is the line $x=h$, where $h$ is the number excluded from the domain. The horizontal asymptote is the line $y=k$, because for $x$ very large in absolute value the fraction is close to zero and the function is close to $k$. The figure shows $y=\dfrac1{x-2}-1$, that is, the graph of $y=\dfrac1x$ shifted $2$ units to the right and $1$ downwards; the two dashed lines are its asymptotes $x=2$ and $y=-1$. The curve has one branch to the left and one to the right of the line $x=2$; at $x=1$ it equals $\dfrac1{-1}-1=-2$ and at $x=3$ it equals $\dfrac11-1=0$.

::grafico{f="1/(x-2)-1" xmin=-3 xmax=7 ymin=-5 ymax=4 asintoti="x=2;y=-1" titolo="The translation moves the asymptotes to the lines x = 2 and y = -1."}
:::

:::esempio{titolo="Data and choice of model"}
The type of function is recognized from how the question describes the change in the quantity.

- A quantity starts at $6$ and increases by $4$ units every minute. The increase is the same every minute, so the function is affine with slope $4$. After $t$ minutes the quantity equals $6+4t$, and after $3$ minutes it equals $18$.
- A quantity starts at $6$ and doubles every minute. Every minute it is multiplied by $2$, so after $n$ minutes it equals $6\cdot2^n$, and after $3$ minutes it equals $6\cdot8=48$. The variable $n$ is in the exponent, so the function is of exponential type.
- A route is $12$ kilometers long. Time is the ratio of distance to speed, so at a speed of $v$ kilometers per hour, with $v>0$, the time in hours is $\dfrac{12}{v}$. Time and speed are in inverse proportionality, and at $4$ kilometers per hour the journey takes $3$ hours.
:::

## Transformations and symmetries

:::teorema{#trasformazioni titolo="Translations and changes of scale"}
A **translation** is a shift of the whole graph, without deformation. A change of scale multiplies all the vertical coordinates, or all the horizontal coordinates, by the same number. If $(u,v)$ belongs to the graph of $f$, that is, $v=f(u)$, then the following points belong to the transformed graphs:

- $(u,v+k)$ for $y=f(x)+k$, a vertical translation by $k$, upwards if $k>0$;
- $(u+h,v)$ for $y=f(x-h)$, a horizontal translation by $h$, to the right if $h>0$;
- $(u,av)$ for $y=af(x)$, in which the vertical coordinates are multiplied by $a$;
- $\left(\dfrac{u}{b},v\right)$ for $y=f(bx)$, with $b\ne0$, in which the horizontal coordinates are divided by $b$.

Operations written outside $f$ change the vertical coordinates and those written inside $f$ change the horizontal coordinates. Indeed, the new function takes the value $v$ when the expression inside $f$ equals $u$; for $y=f(x-h)$ this requires $x-h=u$, that is, $x=u+h$.

For example, let $f(4)=-2$ and $g(x)=f(x+3)-1$. The expression inside $f$ equals $4$ when $x+3=4$, so for $x=1$. Then $g(1)=f(4)-1=-2-1=-3$. The point $(4,-2)$ of the graph of $f$ corresponds to the point $(1,-3)$ of the graph of $g$, three units further left and one unit lower. The two operations act on different coordinates and both are applied.
:::

:::esempio{titolo="A translated parabola"}
The function $f(x)=(x-2)^2+1$ is obtained from $x^2$ by replacing $x$ with $x-2$ and adding $1$. The graph of $y=x^2$ is therefore translated $2$ units to the right and $1$ unit upwards. The vertex $(0,0)$ moves to the point $(2,1)$ and the minimum value changes from $0$ to $1$.

Setting $x=0$ gives $f(0)=(0-2)^2+1=5$, so the vertical intercept is the point $(0,5)$. The minimum value $1$ is the vertical coordinate of the vertex and the value $5$ is the vertical coordinate of the intercept; the two values coincide only when the vertex lies on the vertical axis, as in $y=x^2$.

The figure marks the vertex $(0,0)$ of $y=x^2$, and the vertex $(2,1)$ and the vertical intercept $(0,5)$ of $y=(x-2)^2+1$.

::grafico{f="x^2;(x-2)^2+1" xmin=-2 xmax=5 ymin=-1 ymax=8 punti="0,0;2,1;0,5" titolo="The vertex and the vertical intercept distinguish the two parabolas."}
:::

:::definizione{#parita titolo="Even and odd functions"}
The following two properties compare the value of the function at $x$ with its value at the opposite number $-x$, on a domain symmetric about zero, that is, a domain that contains $-x$ whenever it contains $x$.

- A function is **even** if $f(-x)=f(x)$ for every $x$ in the domain, that is, if opposite inputs have the same value. Its graph is symmetric about the vertical axis, that is, if it contains $(x,y)$, it also contains $(-x,y)$.
- A function is **odd** if $f(-x)=-f(x)$ for every $x$ in the domain, that is, if opposite inputs have opposite values. Its graph is symmetric about the origin, that is, if it contains $(x,y)$, it also contains $(-x,-y)$.

To check the property, substitute $-x$ into the formula. For $f(x)=x^2+3$ we have $f(-x)=(-x)^2+3=x^2+3=f(x)$, so the function is even. For $f(x)=x^3-x$ we have $f(-x)=-x^3+x=-(x^3-x)=-f(x)$, so the function is odd. The function $|x|$ is also even, and $\dfrac1x$ is odd on the domain $x\ne0$.

If an odd function is defined at zero, setting $x=0$ gives $f(0)=-f(0)$, hence $2f(0)=0$ and $f(0)=0$.
:::

:::attenzione
The property must hold for *every* $x$ in the domain. For $f(x)=x^3-x$ we have $f(1)=0$ and $f(-1)=0$, so the values at $1$ and at $-1$ coincide. However, the function is not even, because $f(2)=6$ and $f(-2)=-6$.
:::

## Monotonicity, extrema and range

:::definizione{#monotonia titolo="Increasing and decreasing functions"}
A function is **strictly increasing** on an interval when, as $x$ increases within that interval, $f(x)$ also increases, that is, the graph rises from left to right. In symbols, for every pair of numbers $a$ and $b$ in the interval, $a<b$ implies $f(a)<f(b)$. It is **strictly decreasing** when, as $x$ increases, the value $f(x)$ decreases, that is, $a<b$ implies $f(a)>f(b)$. In both cases it is called **strictly monotonic** on that interval.

If equality is also allowed, $f(a)\le f(b)$, the function is increasing in the non-strict sense. A constant function is increasing in the non-strict sense and not strictly. In the rest of the chapter, “increasing” and “decreasing” with no other word mean strictly increasing and strictly decreasing.

For example, $f(x)=(x-2)^2+1$ is decreasing on $(-\infty,2]$ and increasing on $[2,+\infty)$, because $(x-2)^2$ is the square of the distance of $x$ from $2$, which decreases until $x$ reaches $2$ and then increases. The values are $f(0)=5$, $f(1)=2$, $f(2)=1$, $f(3)=2$, $f(4)=5$.

Monotonicity compares two values with each other and does not determine their sign. The function $x-100$ is increasing even where it is negative; for example at $x=1$ it equals $-99$ and at $x=2$ it equals $-98$, which is greater than $-99$.
:::

:::definizione{#estremi titolo="Maximum and minimum values"}
The **absolute minimum** of a function on a domain is the smallest of the values the function takes, that is, a number $m=f(x_0)$ such that $f(x)\ge m$ for every $x$ in the domain. The number $x_0$ at which the minimum is attained is called a minimum point. The **absolute maximum** is the largest of the values. Maxima and minima are called *extrema*.

For $f(x)=(x-2)^2+1$ on $\mathbb R$ the absolute minimum is $m=1$ and the minimum point is $x_0=2$. The answer to “where is the minimum attained?” is $x=2$; the answer to “what is the minimum value?” is $1$.

The extrema depend on the domain. The same function on the interval $[3,5]$ is increasing, because $[3,5]$ is contained in $[2,+\infty)$. The minimum is therefore attained at the left endpoint and equals $f(3)=1+1=2$; the maximum is attained at the right endpoint and equals $f(5)=9+1=10$. The vertex plays no part, because $2$ does not belong to $[3,5]$. The graph rises without breaks from height $2$ to height $10$, so the function takes every intermediate value and the range is $[2,10]$.
:::

:::definizione{#estremi-relativi titolo="Relative extrema and local comparison"}
A **relative maximum** is a value $f(x_0)$ greater than or equal to the values the function takes at the inputs of the domain close to $x_0$. A **relative minimum** is a value less than or equal to those taken at the nearby inputs. For a relative extremum the comparison concerns only a region around $x_0$; for an absolute extremum it concerns the whole domain.

For example, let the graph of a function be the broken line, that is, the line made of consecutive segments, joining in order the points $(-2,5)$, $(0,2)$, $(1,4)$ and $(3,1)$. The value $4$, attained at $x=1$, is a relative maximum, because the graph rises up to $x=1$ and falls immediately afterwards; the absolute maximum is instead $5$, attained at $x=-2$. The value $2$, attained at $x=0$, is a relative minimum, because the graph falls down to $x=0$ and rises immediately afterwards; the absolute minimum is instead $1$, attained at $x=3$. A relative extremum inside the domain is recognized by comparing the nearby values on both sides; the sign of the vertical coordinate plays no part.
:::

:::esempio{titolo="Range and number of solutions"}
The graph of $f(x)=(x+2)^2-1$ is a parabola with vertex $(-2,-1)$. The square $(x+2)^2$ takes every non-negative value, so the range is $[-1,+\infty)$.

The solutions of $f(x)=k$ are the horizontal coordinates of the points where the horizontal line $y=k$ meets the parabola. The equation $(x+2)^2-1=k$ is equivalent to $(x+2)^2=k+1$.

- If $k>-1$, the right-hand side is positive and there are two solutions. For $k=3$ we have $(x+2)^2=4$, so $x+2=2$ or $x+2=-2$, giving $x=0$ or $x=-4$.
- If $k=-1$, we have $(x+2)^2=0$ and there is exactly one solution, $x=-2$, the horizontal coordinate of the vertex.
- If $k<-1$, the right-hand side is negative, so the equation has no solutions.

The equation has solutions exactly when $k$ belongs to the range. The number of solutions is the number of these meeting points, so it is counted on the graph without calculating the roots each time.
:::

## Exponentials and growth models

:::definizione{#esponenziale titolo="Exponential function"}
An **exponential function** has the variable $x$ in the exponent: $f(x)=a^x$. The number $a$ is called the **base** and satisfies $a>0$ and $a\ne1$. For $a=2$ we obtain the following table.

| $x$ | $-2$ | $-1$ | $0$ | $1$ | $2$ | $3$ |
|---|---|---|---|---|---|---|
| $2^x$ | $\dfrac14$ | $\dfrac12$ | $1$ | $2$ | $4$ | $8$ |

Each time $x$ increases by $1$, the value is multiplied by the base. A negative exponent denotes the reciprocal of the power with the positive exponent, so $2^{-2}=\dfrac1{2^2}=\dfrac14$. For $a>1$ a negative exponent therefore gives a value between zero and one, which is positive.

The following properties hold for every base.

- The domain is $\mathbb R$ and the range is $(0,+\infty)$. All values are positive, so equations such as $a^x=0$ and $a^x=-3$ have no solutions.
- We have $a^0=1$, so the graph passes through $(0,1)$.
- If $a>1$ the function is strictly increasing; if $0<a<1$ it is strictly decreasing.
- The horizontal axis $y=0$ is an asymptote; for example $2^{-10}=\dfrac1{1024}$ is close to zero.

Since $a^{-x}=\left(\dfrac1a\right)^x$, the function with base $\dfrac1a$ takes at $x$ the value that the one with base $a$ takes at $-x$. The two graphs are therefore symmetric about the vertical axis. In the figure the curve $y=2^x$ rises from left to right and the curve $y=2^{-x}=\left(\dfrac12\right)^x$ falls. The two curves meet at $(0,1)$ and stay above the horizontal axis.

::grafico{f="2^x;2^(-x)" xmin=-3 xmax=3 ymin=-0.5 ymax=8 titolo="Reciprocal bases produce graphs symmetric about the vertical axis."}
:::

:::teorema{#equazioni-esponenziali titolo="Comparing exponentials"}
The function $a^x$ is strictly monotonic, so it assigns different values to different exponents. Hence $a^u=a^v$ is equivalent to $u=v$. To solve an exponential equation, write both sides as powers of the same base and equate the exponents. In the equation $4^x=8$ the common base is $2$. We have $4^x=(2^2)^x=2^{2x}$ and $8=2^3$, so the equation becomes $2^{2x}=2^3$. Equating the exponents gives $2x=3$, so $x=\dfrac32$.

In inequalities the direction depends on the base.

- If $a>1$, the function is increasing and $a^u>a^v$ is equivalent to $u>v$.
- If $0<a<1$, the function is decreasing and $a^u>a^v$ is equivalent to $u<v$, with the direction reversed. For example, $\left(\dfrac12\right)^x>\dfrac14=\left(\dfrac12\right)^2$ gives $x<2$.

When both $a^{2x}$ and $a^x$ occur, set $u=a^x$. Then $a^{2x}=(a^x)^2=u^2$ and the equation contains only $u$, with the condition $u>0$. In the equation $4^x-5\cdot2^x+4=0$, setting $u=2^x$ gives $u^2-5u+4=0$, or $(u-1)(u-4)=0$, so $u=1$ or $u=4$. From $2^x=1=2^0$ we get $x=0$, and from $2^x=4=2^2$ we get $x=2$.
:::

:::esempio{titolo="Successive percentages and halving"}
A quantity that starts at $N_0$ and is multiplied by the same number $r>0$ at each time interval equals $N_n=N_0r^n$ after $n$ intervals.

Increasing a quantity by $10\%$ means multiplying it by $1+\dfrac{10}{100}=1.1$. A quantity that equals $200$ and grows by $10\%$ at each interval equals $200\cdot1.1=220$ after the first interval and $220\cdot1.1=242$ after the second, in agreement with $200\cdot1.1^2=242$. The first increase is $20$ and the second is $22$, because the second is $10\%$ of the value that has already increased.

The **half-life** is the time interval in which a quantity is reduced to half. Suppose that a mass of $160\,\mathrm g$ halves every $3$ hours. In $t$ hours there are $\dfrac t3$ halving intervals, and at each interval the mass is multiplied by $\dfrac12$. The model is $M(t)=160\left(\dfrac12\right)^{\frac t3}$, with $t\ge0$ in hours and $M$ in grams. After $9$ hours the exponent equals $\dfrac93=3$ and $M(9)=160\cdot\dfrac18=20\,\mathrm g$. The exponent counts the $3$-hour intervals, so the time is substituted in hours.
:::

## Logarithms and their equations

:::definizione{#logaritmo titolo="Logarithm as an exponent"}
The **logarithm** to base $a$ of a number $b$ is the exponent to which $a$ is raised to obtain $b$, and it is written $\log_a b$. For example, $\log_2 8=3$, because $2^3=8$. In symbols, $\log_a b=c$ is equivalent to $a^c=b$, and hence $a^{\log_a b}=b$.

The base satisfies $a>0$ and $a\ne1$. The argument $b$ must be positive, because the powers $a^c$ are all positive. For every base we have $\log_a1=0$, because $a^0=1$, and $\log_a a=1$, because $a^1=a$.

A logarithm is an exponent, so it is any real number, including a negative one. To calculate $\log_3\dfrac1{27}$, write $\dfrac1{27}=\dfrac1{3^3}=3^{-3}$, so $\log_3\dfrac1{27}=-3$. With a base greater than $1$, the logarithm is negative for arguments between $0$ and $1$.

The logarithmic function $y=\log_a x$ has domain $(0,+\infty)$ and range $\mathbb R$. It is the inverse of the exponential function with the same base; for example, the exponential assigns $2^3=8$ to the exponent $3$, and the logarithm assigns the exponent $3$ to the value $8$. Like the exponential, it is strictly increasing if $a>1$ and strictly decreasing if $0<a<1$.

The symbol $\ln$ denotes the **natural logarithm**, that is, the logarithm whose base is the number $e$, whose value is approximately $2.718$; since $e>1$, the function $\ln x$ is increasing.
:::

:::teorema{#proprieta-logaritmi titolo="Properties of logarithms"}
Let $a>0$, $a\ne1$ and $u,v>0$. The logarithm of a product is the sum of the logarithms, the logarithm of a quotient is the difference of the logarithms, and the exponent of the argument moves in front of the logarithm as a factor:
$$
\log_a(uv)=\log_a u+\log_a v,\qquad
\log_a\frac uv=\log_a u-\log_a v,
$$
$$
\log_a(u^r)=r\log_a u.
$$
The product property follows from the power rule $a^p a^q=a^{p+q}$. Set $p=\log_a u$ and $q=\log_a v$, that is, $a^p=u$ and $a^q=v$. Then $uv=a^{p+q}$, so $\log_a(uv)=p+q$. The other two properties follow in the same way from the rules for a quotient and for a power of a power.

For example, $\log_2 6+\log_2\dfrac43=\log_2\left(6\cdot\dfrac43\right)=\log_2 8=3$.

The change-of-base formula expresses a logarithm to any base in terms of natural logarithms: $\log_a b=\dfrac{\ln b}{\ln a}$. The denominator is non-zero because $a\ne1$.

The function $\ln(x^2)$ is defined for every $x\ne0$, because $x^2>0$. Since $x^2=|x|^2$ and $|x|>0$, we have $\ln(x^2)=2\ln|x|$ for every $x\ne0$. The expression $2\ln x$ is defined only for $x>0$.
:::

:::attenzione
There is no analogous property for the logarithm of a sum; for example $\log_2(4+4)=\log_28=3$, whereas $\log_24+\log_24=2+2=4$.

When two logarithms are combined into one, the positivity conditions on the two original arguments remain. The product $x(x-2)$ is also positive for $x=-2$, where it equals $8$, but at $x=-2$ the logarithms $\log_2x$ and $\log_2(x-2)$ are not defined.
:::

:::esempio{#equazioni-logaritmiche titolo="Equations with domain checks"}
In the equation $\log_2x+\log_2(x-2)=3$ the two arguments must be positive, so $x>0$ and $x-2>0$, giving $x>2$. By the product property the equation becomes $\log_2\big(x(x-2)\big)=3$ and, by the definition of logarithm, $x(x-2)=2^3=8$. This gives $x^2-2x-8=0$, or $(x-4)(x+2)=0$, so $x=4$ or $x=-2$. Only $4$ satisfies $x>2$, so the solution is $x=4$. As a check, $\log_24+\log_22=2+1=3$.

In the inequality $\log_{\frac13}(x-1)>-1$ the argument must be positive, so $x>1$. Since $\left(\dfrac13\right)^{-1}=3$, we have $-1=\log_{\frac13}3$ and the inequality becomes $\log_{\frac13}(x-1)>\log_{\frac13}3$. The base is less than $1$, so the logarithm is decreasing and, on passing to the arguments, the direction is reversed. This gives $x-1<3$, so $x<4$. The two conditions $x>1$ and $x<4$ hold together, so the solution is $1<x<4$.
:::

## Composition and inverse functions

:::definizione{#composizione titolo="Composition and its domain"}
**Composing** two functions means applying them one after the other, so that the value produced by the first becomes the input of the second. The function that applies $g$ first and then $f$ is written $f\circ g$, is read “$f$ composed with $g$” and is defined by $(f\circ g)(x)=f(g(x))$. With $f(x)=x^2$ and $g(x)=x+1$, for $x=3$ we have $g(3)=4$ and $f(4)=16$, so $(f\circ g)(3)=16$. For every $x$, $(f\circ g)(x)=(x+1)^2$.

Order matters. In the opposite order we have $(g\circ f)(x)=g(x^2)=x^2+1$, and for $x=3$ this gives $10$. The two expressions are equal when $x^2+2x+1=x^2+1$, that is, only for $x=0$.

The domain of $f\circ g$ consists of the $x$ in the domain of $g$ for which the value $g(x)$ belongs to the domain of $f$. With $f(u)=\sqrt u$ and $g(x)=6-3x$ the composite function is $\sqrt{6-3x}$. The function $g$ is defined for every $x$, whereas $f$ requires a non-negative input, so $6-3x\ge0$, giving $x\le2$.

In the sum $f+g$ and in the product $fg$, $f(x)$ and $g(x)$ are calculated at the same input $x$ and then the two values are added or multiplied; these operations are different from composition. With $f(x)=x^2$ and $g(x)=x+1$ we have $(f+g)(3)=9+4=13$, whereas $(f\circ g)(3)=16$.
:::

:::definizione{#inversa titolo="Injectivity and inverse functions"}
A function is **injective** if different inputs always have different values. A strictly monotonic function is injective.

If $f$ is injective, each value $y$ in the range comes from exactly one input $x$. The **inverse function**, written $f^{-1}$, assigns that input to each $y$ in the range of $f$, that is, $f^{-1}(y)=x$ is equivalent to $f(x)=y$. The domain of $f^{-1}$ is the range of $f$ and the range of $f^{-1}$ is the domain of $f$.

To find the inverse, write $y=f(x)$ and solve for $x$. For $f(x)=4x-1$, starting from $y=4x-1$ we obtain $y+1=4x$ and then $x=\dfrac{y+1}{4}$. Hence $f^{-1}(y)=\dfrac{y+1}{4}$. As a check, $f(2)=7$ and $f^{-1}(7)=\dfrac{7+1}{4}=2$. The notation $f^{-1}$ denotes the inverse function; the reciprocal $\dfrac1{f(x)}$ is a different operation. Since $f(7)=4\cdot7-1=27$, we have $\dfrac1{f(7)}=\dfrac1{27}$, whereas $f^{-1}(7)=2$.

If $(x,y)$ is a point of the graph of $f$, then $(y,x)$ is a point of the graph of $f^{-1}$. Two points with their coordinates exchanged are symmetric about the line $y=x$, so the graphs of $f$ and $f^{-1}$ are symmetric about that line.
:::

:::esempio{titolo="Restricting a non-injective function"}
The function $f(x)=x^2$ on $\mathbb R$ is not injective, because $f(2)=f(-2)=4$. To obtain a function with an inverse, the domain is **restricted**, that is, the same formula is considered on a part of the domain where the function is injective.

- On $[0,+\infty)$ the function $x^2$ is strictly increasing. From $y=x^2$ with $x\ge0$ we obtain $x=\sqrt y$, so the inverse is the square root.
- On $(-\infty,0]$ it is strictly decreasing. From $y=x^2$ with $x\le0$ we obtain $x=-\sqrt y$; for example $f(-3)=9$ and $-\sqrt9=-3$.

In both cases the inverse has domain $[0,+\infty)$, which is the range of $x^2$. The sign in front of the root depends on the part of the domain that has been kept.

The figure shows the curves $y=x^2$ and $y=\sqrt x$ and the line $y=x$, with the same unit on both axes. The two curves are symmetric about the line; for example, $(2,4)$ belongs to $y=x^2$ and $(4,2)$ to $y=\sqrt x$.

::grafico{f="x^2;sqrt(x);x" uguale=1 xmin=0 xmax=4 ymin=0 ymax=4 titolo="Squaring on the positive half-axis and the square-root function are inverses."}
:::
