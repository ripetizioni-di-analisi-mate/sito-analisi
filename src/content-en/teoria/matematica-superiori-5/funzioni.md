---
titolo: Functions and their properties
sommario: What a function is and how functions are classified, how to find the domain, sign, and intercepts of a function, what it means for a function to be even, odd, periodic, increasing, injective, or surjective, how to construct inverse and composite functions, and how to sketch the graphs of elementary functions and the graphs obtained by translations, reflections, scaling, and absolute value.
---

## Functions, domain, and codomain

:::definizione{#funzione titolo="Function"}
Let $A$ and $B$ be two nonempty sets. A **function** $f$ from $A$ to $B$ is a rule that assigns to *each* element $x$ of $A$ *exactly one* element $y$ of $B$. We write $f : A \to B$ and $y = f(x)$. The set $A$ is called the **domain** of the function, and the set $B$ is called its **codomain**. In this chapter $A$ and $B$ are sets of real numbers, so we are dealing with real-valued functions of a real variable. Here $x$ is the independent variable and $y$ is the dependent variable.

For example, the rule $f(x) = 2x - 1$, from $\mathbb{R}$ to $\mathbb{R}$, maps the number $3$ to $f(3) = 2 \cdot 3 - 1 = 5$ and the number $-2$ to $f(-2) = -5$. The rule that assigns to each real number $x$ the numbers $y$ such that $y^2 = x$ is *not* a function, because it assigns to $x = 4$ two numbers, $2$ and $-2$.
:::

:::definizione{#immagine titolo="Image and range"}
Let $f : A \to B$. The number $f(x)$ is called the **image** of $x$. If $y = f(x)$, the number $x$ is called a *preimage* of $y$. The set of all images
$$
f(A) = \{ f(x) \mid x \in A \}
$$
is called the **range** of $f$ and is a subset of the codomain.

For $f : \mathbb{R} \to \mathbb{R}$ with $f(x) = x^2$, the image of $-3$ is $9$, and the number $9$ has two preimages, $3$ and $-3$. The range is $[0, +\infty)$ because a square is always greater than or equal to $0$ and every number $y \geq 0$ is the square of $\sqrt{y}$. The number $-1$ belongs to the codomain $\mathbb{R}$ and has no preimages, so in this case the range is a proper subset of the codomain.
:::

:::definizione{#grafico-funzione titolo="Graph of a function"}
The **graph** of a function $f$ with domain $A$ is the set of points in the Cartesian plane with coordinates $\big( x, f(x) \big)$, where $x$ belongs to $A$. A point $P(x_0, y_0)$ lies on the graph if and *only if* $x_0$ belongs to the domain and $y_0 = f(x_0)$. For $f(x) = x^2 - 3$, the point $(2, 1)$ lies on the graph because $2^2 - 3 = 1$, whereas the point $(1, 1)$ does not because $1^2 - 3 = -2$.

Each $x$ in the domain corresponds to a single value $f(x)$, so a vertical line meets the graph of a function in *at most* one point. This property lets us tell from a drawing whether a curve is the graph of a function. The parabola $x = y^2$ meets the line $x = 4$ at the two points $(4, 2)$ and $(4, -2)$, so it is not the graph of a function $y = f(x)$. The part of the parabola with $y \geq 0$, whose equation is $y = \sqrt{x}$, is the graph of a function.

::grafico{f="sqrt(x)" curve="t^2,t,-3,3" segmenti="4,-3,4,3" punti="4,2,pieno;4,-2,pieno" xmin=-2 xmax=8 ymin=-3 ymax=3 uguale=1 legenda="y = \sqrt{x};x = y^2" titolo="The line $x = 4$ meets the parabola $x = y^2$ at two points, so the parabola is not the graph of a function. The line meets the graph of $y = \sqrt{x}$ at just one point"}

:::

:::definizione{#classificazione titolo="Algebraic and transcendental functions"}
A function given by a formula is called **algebraic** if the only operations involving the variable $x$ in the formula are addition, subtraction, multiplication, division, raising to an integer power, and taking roots. Algebraic functions fall into three types.

- Polynomial functions, also called integral rational functions, if $x$ appears neither in a denominator nor under a radical sign, as in $y = x^3 - 2x + 1$.
- Rational functions with a variable denominator, if $x$ appears in the denominator and not under a radical sign, as in $y = \dfrac{x + 1}{x^2 - 4}$.
- Radical functions, if $x$ appears under a radical sign, as in $y = \sqrt{x - 1}$ or $y = \sqrt[3]{x^2 + x}$.

A function that is not algebraic is called **transcendental**. Transcendental functions include exponential functions such as $y = 2^{x}$, logarithmic functions such as $y = \ln(x + 1)$, trigonometric functions such as $y = \sin x$, and functions involving them, such as $y = x\,e^{x}$. The type of function indicates which conditions must be imposed to find its domain.
:::

## Finding the domain

:::definizione{#dominio titolo="Natural domain"}
When a function is given only by its formula $y = f(x)$, its domain is the set of real numbers $x$ for which the formula yields a real number. This set is called the **natural domain**, or domain of definition, and is denoted by $D$. The conditions to impose are as follows.

- Each denominator must differ from $0$.
- The radicand of an even-index root must be greater than or equal to $0$. Odd-index roots impose no restrictions.
- The argument of a logarithm must be greater than $0$.
- In a power $\big( f(x) \big)^{g(x)}$ whose exponent depends on $x$, the base must be greater than $0$.
- The argument of $\tan x$ must differ from $\dfrac{\pi}{2} + k\pi$, where $k$ is an integer. The argument of $\arcsin x$ or $\arccos x$ must lie between $-1$ and $1$, inclusive.

Polynomials, exponential functions with a positive constant base, sine, cosine, and arctangent are defined for every real $x$. When there are several conditions, they must all hold at once, so we solve a system and the domain is the intersection of the solution sets. For example, $y = \dfrac{1}{x - 2}$ has domain $D = \mathbb{R} \setminus \{2\}$, and $y = \sqrt{6 - 2x}$ has domain $D = (-\infty, 3]$ because $6 - 2x \geq 0$ is equivalent to $x \leq 3$.
:::

:::esempio{titolo="Domain of a quotient involving a radical"}
For $f(x) = \dfrac{\sqrt{x + 3}}{x^2 - 1}$, the square root requires $x + 3 \geq 0$ and the denominator requires $x^2 - 1 \neq 0$. Both conditions must hold, so we solve the system
$$
\begin{cases}
x + 3 \geq 0 \\[4pt]
x^2 - 1 \neq 0
\end{cases}
\iff
\begin{cases}
x \geq -3 \\[4pt]
x \neq -1, \quad x \neq 1 .
\end{cases}
$$
The domain is therefore $D = [-3, -1) \cup (-1, 1) \cup (1, +\infty)$. The number $-3$ belongs to the domain because $f(-3) = \dfrac{\sqrt{0}}{8} = 0$.
:::

:::esempio{titolo="Domain of a logarithmic function"}
For $f(x) = \ln \dfrac{x - 1}{x + 2}$, the argument of the logarithm must be positive, so we solve the rational inequality $\dfrac{x - 1}{x + 2} > 0$. The numerator is positive for $x > 1$ and the denominator is positive for $x > -2$. A fraction is positive when the numerator and denominator have the same sign, which occurs for $x < -2$ and for $x > 1$. The domain is therefore $D = (-\infty, -2) \cup (1, +\infty)$. The number $-2$ is also excluded because it makes the denominator zero.
:::

:::attenzione
The laws of logarithms hold only when the arguments are positive, so applying these laws to a formula can produce one with a different domain. The function $f(x) = \ln \left( x^2 \right)$ has domain $\mathbb{R} \setminus \{0\}$ because $x^2 > 0$ for every $x \neq 0$, whereas the function $g(x) = 2 \ln x$ has domain $(0, +\infty)$. For example, $f(-1) = \ln 1 = 0$, whereas $g(-1)$ does *not* exist. The two functions are therefore different, even though $\ln \left( x^2 \right) = 2 \ln x$ for every $x > 0$.
:::

## Sign and intercepts

:::definizione{#segno-intersezioni titolo="Zeros, sign, and intercepts"}
Let $f$ be a function with domain $D$. A number $x_0$ in $D$ is called a **zero** of $f$ if $f(x_0) = 0$. The zeros are the horizontal coordinates of the points where the graph meets the $x$-axis. They can be found by solving the equation $f(x) = 0$. If $0$ belongs to $D$, the graph meets the $y$-axis at the point $\big( 0, f(0) \big)$ and only there, because $x = 0$ corresponds to a single value.

To study the **sign** of $f$, we find the values of $x$ in $D$ for which $f(x) > 0$, meaning that the graph lies above the $x$-axis, and those for which $f(x) < 0$, meaning that the graph lies below the $x$-axis. For $f(x) = x^2 - 4$, the zeros are $-2$ and $2$ and the graph meets the $y$-axis at the point $(0, -4)$. The parabola opens upward, so the function is positive for $x < -2$ and for $x > 2$ and negative for $-2 < x < 2$.
:::

:::esempio{titolo="Sign of a rational function"}
Consider the function $f(x) = \dfrac{x^2 - x - 2}{x - 3}$, whose domain is $D = \mathbb{R} \setminus \{3\}$. The numerator factors as $(x + 1)(x - 2)$, so the zeros are $-1$ and $2$, and the graph meets the $x$-axis at $(-1, 0)$ and $(2, 0)$. Since $f(0) = \dfrac{-2}{-3} = \dfrac{2}{3}$, the graph meets the $y$-axis at $\left( 0, \dfrac{2}{3} \right)$.

The sign of the fraction follows from the signs of the three factors, shown in the table. In each interval, the sign of $f$ is the product of the signs in that column.

| | $x < -1$ | $-1 < x < 2$ | $2 < x < 3$ | $x > 3$ |
| --- | --- | --- | --- | --- |
| $x + 1$ | $-$ | $+$ | $+$ | $+$ |
| $x - 2$ | $-$ | $-$ | $+$ | $+$ |
| $x - 3$ | $-$ | $-$ | $-$ | $+$ |
| $f(x)$ | $-$ | $+$ | $-$ | $+$ |

The function is therefore positive for $-1 < x < 2$ and for $x > 3$ and negative for $x < -1$ and for $2 < x < 3$. In the graph, the line $x = 3$ separates two parts of the curve because the number $3$ does not belong to the domain.

::grafico{f="(x^2-x-2)/(x-3)" punti="-1,0,pieno;2,0,pieno;0,0.667,pieno" asintoti="x=3" xmin=-4 xmax=8 ymin=-12 ymax=18 titolo="The graph of $f(x) = \dfrac{x^2 - x - 2}{x - 3}$ lies above the $x$-axis for $-1 < x < 2$ and for $x > 3$ and below the $x$-axis on the other intervals of the domain"}

:::

## Even, odd, and periodic functions

:::definizione{#funzioni-pari-dispari titolo="Even and odd functions"}
Let $f$ be a function whose domain $D$ is symmetric about $0$, meaning that $-x$ belongs to $D$ for every $x$ in $D$. The function is called

- **even** if $f(-x) = f(x)$ for every $x$ in $D$,
- **odd** if $f(-x) = -f(x)$ for every $x$ in $D$.

The graph of an even function is symmetric about the $y$-axis because whenever it contains the point $(x, y)$, it also contains the point $(-x, y)$. The graph of an odd function is symmetric about the origin because whenever it contains the point $(x, y)$, it also contains the point $(-x, -y)$. The functions $x^2$, $x^4$, $|x|$, and $\cos x$ are even, and $x$, $x^3$, $\dfrac{1}{x}$, and $\sin x$ are odd. An odd function defined at $0$ takes the value $0$ at $0$ because $f(0) = -f(0)$. When a function is even or odd, it is enough to study it for $x \geq 0$ and obtain the rest of the graph by symmetry.
:::

:::esempio{titolo="Identifying an even or odd function"}
- The function $f(x) = x^3 - 4x$ is defined on $\mathbb{R}$, and $f(-x) = (-x)^3 - 4\,(-x) = -x^3 + 4x = -f(x)$. Therefore $f$ is **odd**.
- The function $g(x) = \dfrac{x^2}{x^2 + 1}$ is defined on $\mathbb{R}$, and $g(-x) = \dfrac{(-x)^2}{(-x)^2 + 1} = \dfrac{x^2}{x^2 + 1} = g(x)$. Therefore $g$ is even.
- For the function $h(x) = x^2 + x$ we have $h(1) = 2$ and $h(-1) = 0$. Since $h(-1) \neq h(1)$, the function is not even, and since $h(-1) \neq -h(1)$, it is not odd either.
:::

:::attenzione
A function whose value is $0$ at $0$ need not be odd. For $f(x) = x^2 - 2x$ we have $f(0) = 0$, but $f(1) = -1$ and $f(-1) = 3$. Since $f(-1) \neq -f(1)$, the function is *not* odd.
:::

:::definizione{#funzioni-periodiche titolo="Periodic functions"}
A function $f$ with domain $D$ is called **periodic** if there is a number $T > 0$ such that, for every $x$ in $D$, the number $x + T$ also belongs to $D$ and
$$
f(x + T) = f(x) .
$$
The smallest number $T > 0$ with this property is called the **period** of the function. The graph of a periodic function repeats over intervals of length $T$, so it is enough to draw it on an interval such as $[0, T]$ and then repeat it. The functions $\sin x$ and $\cos x$ have period $2\pi$, and the function $\tan x$ has period $\pi$.

Another example is the *fractional part* function $y = x - [x]$, where $[x]$ is the integer part of $x$, that is, the greatest integer less than or equal to $x$. For example, $[2.7] = 2$ and $[-0.5] = -1$, so the fractional part is $0.7$ at $2.7$ and $0.5$ at $-0.5$. This function has period $1$.

::grafico{linee="-3,0 -2,1;-2,0 -1,1;-1,0 0,1;0,0 1,1;1,0 2,1;2,0 3,1" punti="-3,0,pieno;-2,0,pieno;-1,0,pieno;0,0,pieno;1,0,pieno;2,0,pieno;-2,1,vuoto;-1,1,vuoto;0,1,vuoto;1,1,vuoto;2,1,vuoto;3,1,vuoto" xmin=-3 xmax=3 ymin=-1 ymax=2 uguale=1 titolo="The fractional part function $y = x - [x]$ is periodic with period $1$, so its graph between $0$ and $1$ repeats between every pair of consecutive integers"}

:::

:::teorema{#periodo-sin-kx titolo="Periods of trigonometric functions with argument kx"}
Let $k > 0$. The functions $\sin (kx)$ and $\cos (kx)$ have period $\dfrac{2\pi}{k}$, and the function $\tan (kx)$ has period $\dfrac{\pi}{k}$. For sine, this follows from the calculation
$$
\sin \left( k \left( x + \frac{2\pi}{k} \right) \right) = \sin (kx + 2\pi) = \sin (kx) ,
$$
and the same argument applies to cosine and tangent. For example, $\sin (3x)$ has period $\dfrac{2\pi}{3}$, and $\tan \dfrac{x}{2}$ has period $\dfrac{\pi}{\frac{1}{2}} = 2\pi$.

If two periodic functions have periods $T_1$ and $T_2$ and a number $T$ is a multiple of both $T_1$ and $T_2$, then their sum also satisfies $f(x + T) = f(x)$. The function $y = \sin (2x) + \cos (3x)$ is the sum of two functions with periods $\pi$ and $\dfrac{2\pi}{3}$. The number $2\pi$ equals both $2 \cdot \pi$ and $3 \cdot \dfrac{2\pi}{3}$ and is the least common multiple of the two periods. In this case, $2\pi$ is the period of the sum.
:::

## Increasing and decreasing functions

:::definizione{#funzioni-monotone titolo="Increasing and decreasing functions"}
Let $f$ be defined on an interval $I$. The function is called

- **increasing** on $I$ if, for every $x_1$ and $x_2$ in $I$ with $x_1 < x_2$, we have $f(x_1) < f(x_2)$,
- **decreasing** on $I$ if, for every $x_1$ and $x_2$ in $I$ with $x_1 < x_2$, we have $f(x_1) > f(x_2)$.

An increasing function therefore preserves the order of numbers, and a decreasing function reverses it. As we follow the graph from left to right, an increasing function rises and a decreasing function falls. When the inequalities between values are non-strict, $f(x_1) \leq f(x_2)$ or $f(x_1) \geq f(x_2)$, the function is increasing or decreasing *in the weak sense*. To distinguish the cases, the functions in the definition are also called strictly increasing or strictly decreasing. A function that is increasing or decreasing on $I$ is called **monotone** on $I$.

For example, $f(x) = 3x - 2$ is increasing on $\mathbb{R}$. Indeed, if $x_1 < x_2$, multiplying by $3$ gives $3x_1 < 3x_2$, and subtracting $2$ gives $f(x_1) < f(x_2)$. In the chapter on the theorems of differential calculus, we find the intervals on which a function is increasing or decreasing from the sign of its derivative.
:::

:::esempio{titolo="Monotonicity of the reciprocal function"}
The function $f(x) = \dfrac{1}{x}$ is decreasing on the interval $(0, +\infty)$. Let $0 < x_1 < x_2$. Then
$$
f(x_1) - f(x_2) = \frac{1}{x_1} - \frac{1}{x_2} = \frac{x_2 - x_1}{x_1\,x_2} > 0 ,
$$
because the numerator and denominator are positive. Thus $f(x_1) > f(x_2)$. The same calculation shows that $f$ is also decreasing on $(-\infty, 0)$ because, for $x_1 < x_2 < 0$, the product $x_1\,x_2$ is still positive.
:::

:::attenzione
A function that is decreasing on two separate intervals need not be decreasing on their union. The function $\dfrac{1}{x}$ is decreasing on $(-\infty, 0)$ and on $(0, +\infty)$, but $-1 < 1$ and $f(-1) = -1 < 1 = f(1)$. Therefore $\dfrac{1}{x}$ is *not* decreasing on its domain $\mathbb{R} \setminus \{0\}$.
:::

## Injective, surjective, and bijective functions

:::definizione{#iniettiva-suriettiva titolo="Injective, surjective, and bijective functions"}
Let $f : A \to B$.

- $f$ is **injective** if different elements of $A$ have different images, that is, if $x_1 \neq x_2$ implies $f(x_1) \neq f(x_2)$. Equivalently, each element of $B$ has *at most* one preimage.
- $f$ is **surjective** if every element of $B$ has *at least* one preimage, that is, if the range equals the codomain.
- $f$ is **bijective**, or a one-to-one correspondence, if it is both injective and surjective, that is, if every element of $B$ has *exactly one* preimage.

In terms of the graph, $f$ is injective if every horizontal line $y = k$, with $k$ in $B$, meets the graph at most once, and it is surjective if each such line meets it at least once. The function $f : \mathbb{R} \to \mathbb{R}$ with $f(x) = x^2$ is not injective because $f(-2) = f(2) = 4$, and it is not surjective because the number $-1$ is not the square of any real number. The same formula, with both domain and codomain equal to $[0, +\infty)$, defines a bijective function. The three properties therefore depend on the choice of domain and codomain and help determine whether a function has an inverse.

::grafico{f="x^2;4" punti="-2,4,pieno;2,4,pieno" xmin=-4 xmax=4 ymin=-2 ymax=8 legenda="y = x^2;y = 4" titolo="The line $y = 4$ meets the graph of $y = x^2$ at two points, so the function $x^2$ is not injective on $\mathbb{R}$. The lines $y = k$ with $k < 0$ do not meet the graph"}

:::

:::teorema{#monotona-iniettiva titolo="Strictly monotone functions are injective"}
If $f$ is increasing or decreasing on an interval $I$, then $f$ is injective on $I$. Indeed, if $x_1 \neq x_2$, one of the two numbers is less than the other, say $x_1 < x_2$. If $f$ is increasing, then $f(x_1) < f(x_2)$, and if it is decreasing, then $f(x_1) > f(x_2)$. In both cases, $f(x_1) \neq f(x_2)$.

The theorem lets us establish injectivity without solving equations. For example, $y = x^3$ and $y = 2^{x}$ are increasing on $\mathbb{R}$, so they are injective on $\mathbb{R}$.
:::

:::attenzione
An injective function need not be monotone. The function $\dfrac{1}{x}$ is injective on its domain because $\dfrac{1}{x_1} = \dfrac{1}{x_2}$ implies $x_1 = x_2$, but it is *not* monotone on $\mathbb{R} \setminus \{0\}$. It is not decreasing because $-1 < 1$ and $f(-1) = -1 < 1 = f(1)$, and it is not increasing because $1 < 2$ and $f(1) = 1 > \dfrac{1}{2} = f(2)$.
:::

## Inverse and composite functions

:::definizione{#funzione-inversa titolo="Inverse function"}
Let $f : A \to B$ be bijective. Then each $y$ in $B$ has exactly one preimage $x$ in $A$. The **inverse function** of $f$ is the function $f^{-1} : B \to A$ that assigns to each $y$ in $B$ its preimage:
$$
f^{-1}(y) = x \iff f(x) = y .
$$
To find a formula for $f^{-1}$, solve the equation $y = f(x)$ for $x$, then interchange the two letters so that the independent variable is again called $x$. For $f(x) = 2x + 6$, from $\mathbb{R}$ to $\mathbb{R}$, the equation $y = 2x + 6$ gives $x = \dfrac{y - 6}{2}$, so
$$
f^{-1}(x) = \frac{x - 6}{2} .
$$
As a check, $f(1) = 8$ and $f^{-1}(8) = \dfrac{8 - 6}{2} = 1$. Applying $f$ and then $f^{-1}$ always returns the original number.
:::

:::attenzione
The symbol $f^{-1}$ denotes the inverse function, which differs from the reciprocal $\dfrac{1}{f(x)}$. For $f(x) = 2x + 6$, we have $f^{-1}(8) = 1$, whereas $\dfrac{1}{f(8)} = \dfrac{1}{22}$.
:::

:::teorema{#grafico-inversa titolo="Graph of the inverse function"}
The graph of $f^{-1}$ is the reflection of the graph of $f$ across the line that bisects the first and third quadrants, namely $y = x$. Indeed, the point $(a, b)$ lies on the graph of $f$ if and only if $f(a) = b$, or equivalently if and only if $f^{-1}(b) = a$, which means that the point $(b, a)$ lies on the graph of $f^{-1}$. The points $(a, b)$ and $(b, a)$ are reflections of each other across the line $y = x$.

The function $f(x) = x^2$ with domain and codomain $[0, +\infty)$ is bijective, and the equation $y = x^2$ with $x \geq 0$ gives $x = \sqrt{y}$. Therefore $f^{-1}(x) = \sqrt{x}$. The point $(2, 4)$ lies on the graph of $x^2$ and the point $(4, 2)$ lies on the graph of $\sqrt{x}$.

::grafico{f="x^2+0*sqrt(x);sqrt(x)" punti="2,4,pieno;4,2,pieno" segmenti="-1,-1,5,5;2,4,4,2" xmin=-1 xmax=5 ymin=-1 ymax=5 uguale=1 legenda="y = x^2 \text{ with } x \geq 0;y = \sqrt{x}" titolo="The graphs of $y = x^2$ with $x \geq 0$ and its inverse $y = \sqrt{x}$ are reflections of each other across the line $y = x$. The points $(2, 4)$ and $(4, 2)$ correspond under this reflection"}

:::

:::osservazione{#restrizione titolo="Inverse of a restricted function"}
A function that is not injective has no inverse, but by the theorem on monotone functions, its restriction to an interval where it is strictly monotone is injective. Restricting the codomain to the range as well gives a bijective function, which has an inverse.

- $y = x^2$ restricted to $[0, +\infty)$ has inverse $y = \sqrt{x}$.
- $y = \sin x$ restricted to $\left[ -\dfrac{\pi}{2}, \dfrac{\pi}{2} \right]$, with codomain $[-1, 1]$, has inverse $y = \arcsin x$. For example, $\arcsin \dfrac{1}{2} = \dfrac{\pi}{6}$ because $\sin \dfrac{\pi}{6} = \dfrac{1}{2}$ and $\dfrac{\pi}{6}$ belongs to the interval.
- $y = \tan x$ restricted to $\left( -\dfrac{\pi}{2}, \dfrac{\pi}{2} \right)$ has inverse $y = \arctan x$, defined on $\mathbb{R}$.
:::

:::definizione{#funzione-composta titolo="Composite function"}
Let $f$ and $g$ be two functions. The **composite function** $f \circ g$, read “$f$ composed with $g$,” is obtained by applying first $g$ and then $f$:
$$
(f \circ g)(x) = f\big( g(x) \big) .
$$
The function $g$ is called the inner function and $f$ the outer function. The domain of $f \circ g$ consists of the numbers $x$ in the domain of $g$ for which $g(x)$ belongs to the domain of $f$.

For $f(x) = \sqrt{x}$ and $g(x) = x - 1$ we have $(f \circ g)(x) = \sqrt{x - 1}$ with domain $[1, +\infty)$, and $(g \circ f)(x) = \sqrt{x} - 1$ with domain $[0, +\infty)$. The two composites are different, so the order of composition changes the result. A function such as $y = \ln \left( x^2 + 1 \right)$ can be written as a composition of $g(x) = x^2 + 1$ and $f(x) = \ln x$. This decomposition is used to find its derivative, as shown in the chapter on derivatives.
:::

## Graphs of elementary functions

:::definizione{#potenze-radici titolo="Powers and roots"}
Let $n$ be a natural number with $n \geq 2$. The power function $y = x^n$ is defined on $\mathbb{R}$ and its graph passes through $(0, 0)$ and $(1, 1)$.

- If $n$ is even, the function is even, is decreasing on $(-\infty, 0]$ and increasing on $[0, +\infty)$, and has range $[0, +\infty)$. Its graph passes through $(-1, 1)$.
- If $n$ is odd, the function is odd, is increasing on $\mathbb{R}$, and has range $\mathbb{R}$. Its graph passes through $(-1, -1)$.

For $0 < x < 1$, the powers decrease as the exponent increases, and for $x > 1$ they increase. For example, $0.5^2 = 0.25$ and $0.5^3 = 0.125$, whereas $2^2 = 4$ and $2^3 = 8$.

The **root** function $y = \sqrt[n]{x}$ is the inverse of the power function $x^n$. If $n$ is even, the root is defined on $[0, +\infty)$ and is the inverse of $x^n$ restricted to $[0, +\infty)$. If $n$ is odd, the root is defined on $\mathbb{R}$. For example, $\sqrt[3]{-8} = -2$ because $(-2)^3 = -8$. The function $y = \dfrac{1}{x}$ has domain $\mathbb{R} \setminus \{0\}$, and its graph is a rectangular hyperbola centered at the origin.

::grafico{f="x^2;x^3" punti="1,1,pieno;-1,1,pieno;-1,-1,pieno;0,0,pieno" xmin=-3 xmax=3 ymin=-3 ymax=3 uguale=1 legenda="y = x^2;y = x^3" titolo="The graphs of the even function $y = x^2$ and the odd function $y = x^3$. Between $0$ and $1$ the cube is less than the square, and beyond $1$ it is greater"}

:::

:::definizione{#esponenziali-logaritmi titolo="Exponential and logarithmic functions"}
Let $a > 0$ with $a \neq 1$. The **exponential** function $y = a^{x}$ is defined on $\mathbb{R}$, has range $(0, +\infty)$, and its graph passes through $(0, 1)$ and $(1, a)$. It is increasing if $a > 1$ and decreasing if $0 < a < 1$.

The **logarithmic** function $y = \log_a x$ is the inverse of the exponential function with base $a$. It is defined on $(0, +\infty)$, has range $\mathbb{R}$, and its graph passes through $(1, 0)$ and $(a, 1)$. It is increasing if $a > 1$ and decreasing if $0 < a < 1$. By the theorem on the graph of an inverse function, the graphs of $a^{x}$ and $\log_a x$ are reflections of each other across $y = x$. The most common base is the number $e \approx 2.718$, and the logarithm with base $e$ is denoted by $\ln x$.

For example, $2^{3} = 8$ and $2^{-1} = \dfrac{1}{2}$, so $\log_2 8 = 3$ and $\log_2 \dfrac{1}{2} = -1$.

::grafico{f="2^x;log(x)/log(2)" punti="0,1,pieno;1,2,pieno;1,0,pieno;2,1,pieno" segmenti="-3,-3,5,5" xmin=-3 xmax=5 ymin=-3 ymax=5 uguale=1 legenda="y = 2^{x};y = \log_2 x" titolo="The graphs of $y = 2^{x}$ and $y = \log_2 x$ are reflections of each other across $y = x$, and the point $(1, 2)$ on the first graph corresponds to $(2, 1)$ on the second"}

:::

:::definizione{#funzioni-goniometriche titolo="Trigonometric functions"}
With $x$ measured in radians, the functions $y = \sin x$ and $y = \cos x$ are defined on $\mathbb{R}$ and have range $[-1, 1]$ and period $2\pi$. Sine is odd and vanishes at $x = k\pi$, and cosine is even and vanishes at $x = \dfrac{\pi}{2} + k\pi$, where $k$ is an integer.

The function $y = \tan x$ is defined for $x \neq \dfrac{\pi}{2} + k\pi$, has range $\mathbb{R}$ and period $\pi$, is odd, and vanishes at $x = k\pi$. For example, $\sin \dfrac{\pi}{6} = \dfrac{1}{2}$, $\cos \pi = -1$, and $\tan \dfrac{\pi}{4} = 1$.

For every $x$ we have $\cos x = \sin \left( x + \dfrac{\pi}{2} \right)$, so the cosine graph is obtained by shifting the sine graph $\dfrac{\pi}{2}$ to the left.

::grafico{f="sin(x);cos(x)" punti="0,0,pieno;1.571,1,pieno;0,1,pieno" xmin=-8 xmax=8 ymin=-2 ymax=2 legenda="y = \sin x;y = \cos x" titolo="The graphs of $y = \sin x$ and $y = \cos x$ have period $2\pi$. The maximum of sine at $x = \dfrac{\pi}{2}$ corresponds to the maximum of cosine at $x = 0$"}

:::

## Geometric transformations of graphs

:::teorema{#traslazioni titolo="Translations"}
Let $y = f(x)$ be a function, and let $a$ and $b$ be real numbers.

- The graph of $y = f(x - a)$ is obtained by shifting the graph of $f$ horizontally by $a$, to the right if $a > 0$ and to the left if $a < 0$.
- The graph of $y = f(x) + b$ is obtained by shifting the graph of $f$ vertically by $b$, upward if $b > 0$ and downward if $b < 0$.

For the first rule, if the point $(x_0, y_0)$ lies on the graph of $f$, then the point $(x_0 + a, y_0)$ lies on the graph of $f(x - a)$ because $f\big( (x_0 + a) - a \big) = f(x_0) = y_0$. For the second rule, simply add $b$ to each vertical coordinate.

For example, completing the square gives $y = x^2 - 4x + 5 = (x - 2)^2 + 1$. The graph is therefore the parabola $y = x^2$ shifted $2$ to the right and $1$ upward, and its vertex is the point $(2, 1)$.

::grafico{f="x^2;(x-2)^2+1" punti="0,0,pieno;2,1,pieno,V" vettori="0,0,2,1" xmin=-3 xmax=5 ymin=-1 ymax=7 legenda="y = x^2;y = (x - 2)^2 + 1" titolo="The parabola $y = (x - 2)^2 + 1$ is obtained from $y = x^2$ by the translation that takes the origin to the vertex $V(2, 1)$"}

:::

:::attenzione
In a horizontal translation, the sign inside the argument is opposite to the direction of the shift. The graph of $y = \sqrt{x + 3}$ is the graph of $\sqrt{x}$ shifted $3$ to the *left* because $x + 3 = x - (-3)$. Indeed, its domain is $[-3, +\infty)$ and the graph starts at $(-3, 0)$.
:::

:::teorema{#simmetrie titolo="Reflections across the axes and through the origin"}
Let $y = f(x)$ be a function.

- The graph of $y = f(-x)$ is the reflection of the graph of $f$ across the $y$-axis.
- The graph of $y = -f(x)$ is the reflection of the graph of $f$ across the $x$-axis.
- The graph of $y = -f(-x)$ is the reflection of the graph of $f$ through the origin.

Indeed, if $(x_0, y_0)$ lies on the graph of $f$, then $(-x_0, y_0)$, $(x_0, -y_0)$, and $(-x_0, -y_0)$ lie on the respective graphs. For example, the graph of $y = 2^{-x} = \left( \dfrac{1}{2} \right)^{x}$ is the reflection of the graph of $2^{x}$ across the $y$-axis. The point $(1, 2)$ on the graph of $2^{x}$ corresponds to $(-1, 2)$ because $2^{-(-1)} = 2$. The graph of $y = -\ln x$ is the reflection of that of $\ln x$ across the $x$-axis.
:::

:::teorema{#dilatazioni titolo="Scaling"}
Let $y = f(x)$ be a function and let $k > 0$.

- The graph of $y = k\,f(x)$ is obtained by multiplying by $k$ the vertical coordinates of the points on the graph of $f$. For $k > 1$ this gives a vertical stretch, and for $0 < k < 1$ a vertical compression.
- The graph of $y = f(kx)$ is obtained by dividing by $k$ the horizontal coordinates of the points on the graph of $f$. For $k > 1$ this gives a horizontal compression, and for $0 < k < 1$ a horizontal stretch.

The second rule follows because if $(x_0, y_0)$ lies on the graph of $f$, then $f\left( k \cdot \dfrac{x_0}{k} \right) = f(x_0) = y_0$, so the point $\left( \dfrac{x_0}{k}, y_0 \right)$ lies on the graph of $f(kx)$. For example, $y = 3 \sin x$ has range $[-3, 3]$ and period $2\pi$, whereas $y = \sin (2x)$ has range $[-1, 1]$ and period $\pi$. The maximum of $\sin x$ at $x = \dfrac{\pi}{2}$ becomes, for $\sin (2x)$, a maximum at $x = \dfrac{\pi}{4}$.

::grafico{f="sin(x);sin(2*x)" punti="1.571,1,pieno;0.785,1,pieno" xmin=-1 xmax=7 ymin=-2 ymax=2 legenda="y = \sin x;y = \sin (2x)" titolo="The graph of $y = \sin (2x)$ is obtained from the graph of $y = \sin x$ by halving the horizontal coordinates, so the period changes from $2\pi$ to $\pi$"}

:::

:::teorema{#valore-assoluto titolo="Graphs involving absolute value"}
Let $y = f(x)$ be a function.

- The graph of $y = |f(x)|$ agrees with the graph of $f$ wherever $f(x) \geq 0$. Wherever $f(x) < 0$, it is the reflection of the graph of $f$ across the $x$-axis. This follows from the definition of absolute value, since $|f(x)| = f(x)$ if $f(x) \geq 0$ and $|f(x)| = -f(x)$ if $f(x) < 0$.
- The graph of $y = f(|x|)$ agrees with the graph of $f$ for $x \geq 0$. The function $f(|x|)$ is even because $|-x| = |x|$, so for $x < 0$ the graph is the reflection across the $y$-axis of the part with $x \geq 0$.

For example, $f(x) = x^2 - 4x + 3 = (x - 1)(x - 3)$ is negative for $1 < x < 3$ and has its minimum value $-1$ at the vertex $(2, -1)$. In the graph of $y = \left| x^2 - 4x + 3 \right|$, the arc between $1$ and $3$ is replaced by its reflection across the $x$-axis and the vertex becomes the point $(2, 1)$. The graph of $y = x^2 - 4|x| + 3$ instead agrees with the parabola for $x \geq 0$ and, by symmetry, intersects the $x$-axis at the four points with horizontal coordinates $-3$, $-1$, $1$, and $3$.

::grafico{f="abs(x^2-4*x+3);x^2-4*x+3" punti="2,1,pieno;2,-1,vuoto;1,0,pieno;3,0,pieno" xmin=-2 xmax=6 ymin=-2 ymax=6 legenda="y = \left| x^2 - 4x + 3 \right|;y = x^2 - 4x + 3" titolo="The graph of $y = \left| x^2 - 4x + 3 \right|$ is obtained from the parabola by reflecting the arc between $x = 1$ and $x = 3$ that lies below the $x$-axis"}

:::

:::esempio{titolo="A sequence of transformations"}
To sketch the graph of $y = \left| \ln (x - 1) \right|$, start with the graph of $\ln x$.

- The graph of $y = \ln (x - 1)$ is the graph of $\ln x$ shifted $1$ to the right. The domain becomes $(1, +\infty)$ and the zero shifts from $x = 1$ to $x = 2$.
- The function $\ln (x - 1)$ is negative for $1 < x < 2$ because on that interval the argument $x - 1$ lies between $0$ and $1$. In the graph of $\left| \ln (x - 1) \right|$, the arc with $1 < x < 2$ is therefore replaced by its reflection across the $x$-axis.

The resulting function is greater than or equal to $0$ throughout its domain, vanishes only at $x = 2$, and, for example, takes the value $\left| \ln \dfrac{1}{2} \right| = \ln 2$ at $x = \dfrac{3}{2}$ and the value $\ln 2$ at $x = 3$ as well.

::grafico{f="abs(log(x-1));log(x-1)" punti="2,0,pieno;1.5,0.693,pieno;3,0.693,pieno" asintoti="x=1" xmin=-1 xmax=7 ymin=-3 ymax=3 legenda="y = \left| \ln (x - 1) \right|;y = \ln (x - 1)" titolo="The graph of $y = \left| \ln (x - 1) \right|$ is obtained by shifting the graph of $\ln x$ by $1$ to the right and then reflecting across the $x$-axis the arc with $1 < x < 2$"}

:::
