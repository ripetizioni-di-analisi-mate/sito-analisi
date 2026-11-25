---
titolo: Derivatives
sommario: What the derivative of a function is and what it represents on the graph, how to calculate it from the definition and with differentiation rules, where a function can fail to be differentiable, what a differential is, and how derivatives are used in physics to describe velocity, acceleration, and electric current.
---

## The difference quotient and the derivative

:::definizione{#rapporto-incrementale titolo="Difference quotient"}
Let $f$ be a function defined on an interval $I$ and let $x_0$ be a point in $I$. When the variable changes from $x_0$ to $x_0 + h$, with $h \neq 0$ and $x_0 + h$ in $I$, the number $h$ is called the **increment** in the variable, and the difference $f(x_0 + h) - f(x_0)$ is called the increment in the function. The **difference quotient** of $f$ at $x_0$ is the quotient
$$
\frac{f(x_0 + h) - f(x_0)}{h} .
$$
Consider the points $P\big( x_0, f(x_0) \big)$ and $Q\big( x_0 + h, f(x_0 + h) \big)$ on the graph. The line $PQ$ is called a **secant line**, and the difference quotient is its slope because it is the difference in the vertical coordinates divided by the difference in the horizontal coordinates. For $f(x) = x^2$, $x_0 = 1$, and $h = 2$, the difference quotient is
$$
\frac{f(3) - f(1)}{2} = \frac{9 - 1}{2} = 4 ,
$$
so the secant through $P(1, 1)$ and $Q(3, 9)$ has slope $4$ and equation $y = 4x - 3$.

::grafico{f="x^2;4*x-3" punti="1,1,pieno,P;3,9,pieno,Q" segmenti="1,1,3,1;3,1,3,9" xmin=-2 xmax=4 ymin=-2 ymax=12 legenda="y = x^2;y = 4x - 3" titolo="The secant through $P(1, 1)$ and $Q(3, 9)$ has slope $\dfrac{9 - 1}{3 - 1} = 4$, equal to the difference quotient of $x^2$ at $x_0 = 1$ with $h = 2$"}

:::

:::esempio{titolo="The difference quotient as the increment gets small"}
For $f(x) = x^2$ and $x_0 = 1$, with $h$ any number other than $0$, we have
$$
\frac{(1 + h)^2 - 1}{h} = \frac{1 + 2h + h^2 - 1}{h} = \frac{h\,(2 + h)}{h} = 2 + h .
$$
When $h = 2$, the quotient is $4$, when $h = 1$ it is $3$, when $h = 0.1$ it is $2.1$, and when $h = 0.01$ it is $2.01$. As $h$ approaches $0$, the difference quotient therefore approaches $2$. This number is called the derivative of $x^2$ at $1$.
:::

:::definizione{#derivata titolo="Derivative at a point"}
A point $x_0$ of an interval $I$ is called an **interior point** of $I$ if there is a neighborhood $I(x_0)$ contained in $I$, that is, if $x_0$ is not an endpoint of the interval. Let $f$ be defined on $I$ and let $x_0$ be an interior point of $I$. The function $f$ is **differentiable** at $x_0$ if the limit of the difference quotient as $h \to 0$ exists and is *finite*. This limit is called the **derivative** of $f$ at $x_0$ and is denoted by $f'(x_0)$:
$$
f'(x_0) = \lim_{h \to 0} \frac{f(x_0 + h) - f(x_0)}{h} .
$$
The symbols $y'(x_0)$ and $\dfrac{df}{dx}(x_0)$ are also used. The derivative measures how rapidly $f$ changes near $x_0$. For $f(x) = x^2$, the difference quotient at $1$ is $2 + h$, so $f'(1) = \displaystyle\lim_{h \to 0} (2 + h) = 2$.
:::

:::esempio{titolo="Differentiating a cubic function using the definition"}
We calculate the derivative of $f(x) = x^3$ at $x_0 = 2$. Since $(2 + h)^3 = 8 + 12h + 6h^2 + h^3$, the difference quotient is
$$
\frac{(2 + h)^3 - 8}{h} = \frac{12h + 6h^2 + h^3}{h} = 12 + 6h + h^2 .
$$
As $h \to 0$, the last two terms approach $0$, so $f'(2) = 12$. Before the factor $h$ is canceled, the limit has the indeterminate form $\dfrac{0}{0}$, as always happens when calculating a derivative from the definition.
:::

:::definizione{#derivata-destra-sinistra titolo="Right-hand and left-hand derivatives"}
Taking the limit of the difference quotient only as $h \to 0^+$ or only as $h \to 0^-$ gives the **right-hand derivative** and the **left-hand derivative**, respectively, of $f$ at $x_0$:
$$
f'_+(x_0) = \lim_{h \to 0^+} \frac{f(x_0 + h) - f(x_0)}{h} ,
\qquad
f'_-(x_0) = \lim_{h \to 0^-} \frac{f(x_0 + h) - f(x_0)}{h} .
$$
A limit exists if and only if the right-hand and left-hand limits exist and are equal, as shown in the chapter on limits. Therefore $f$ is differentiable at $x_0$ if and *only if* the two derivatives exist, are finite, and are equal. For $f(x) = |x|$ and $x_0 = 0$, the difference quotient is $\dfrac{|h|}{h}$, which equals $1$ for $h > 0$ and $-1$ for $h < 0$. Thus $f'_+(0) = 1$ and $f'_-(0) = -1$, and the function $|x|$ is *not* differentiable at $0$.

Right-hand and left-hand derivatives are also used at the endpoints of a closed interval. We say that $f$ is differentiable on $[a, b]$ if it is differentiable at every point of $(a, b)$ and if both $f'_+(a)$ and $f'_-(b)$ exist and are finite.
:::

:::definizione{#funzione-derivata titolo="The derivative as a function"}
If $f$ is differentiable at every point of an interval, it is said to be differentiable on that interval. In this case, assigning to each $x$ the number $f'(x)$ gives a new function, the **derivative function** $f'$. For $f(x) = x^2$ and any $x$, the difference quotient is
$$
\frac{(x + h)^2 - x^2}{h} = \frac{2xh + h^2}{h} = 2x + h ,
$$
which approaches $2x$ as $h \to 0$. Thus $f'(x) = 2x$. This formula gives the derivative of $x^2$ at any point without having to take the limit again. For example, $f'(1) = 2$, $f'(-3) = -6$, and $f'(0) = 0$.
:::

## Geometric interpretation and the tangent line

:::definizione{#retta-tangente titolo="Tangent line"}
As $h$ approaches $0$, the point $Q$ moves along the graph toward $P$, and the secant line $PQ$ rotates about $P$. If $f$ is differentiable at $x_0$, the slope of the secant line approaches $f'(x_0)$. The **tangent line** to the graph of $f$ at the point $P\big( x_0, f(x_0) \big)$ is the line that passes through $P$ and has slope $f'(x_0)$:
$$
y - f(x_0) = f'(x_0)\,(x - x_0) .
$$
Therefore $f'(x_0)$ is the slope of the tangent line at the point with horizontal coordinate $x_0$. This is the **geometric interpretation** of the derivative. For $f(x) = x^2$ and $x_0 = 1$, we have $f(1) = 1$ and $f'(1) = 2$, so the tangent line is
$$
y - 1 = 2\,(x - 1) ,
\qquad
\text{that is,}
\qquad
y = 2x - 1 .
$$
If $f'(x_0) = 0$, the tangent line is horizontal. For $x^2$ this happens at $x_0 = 0$, where the tangent line is the $x$-axis.

::grafico{f="x^2;2*x-1" punti="1,1,pieno,P" xmin=-2 xmax=4 ymin=-2 ymax=12 legenda="y = x^2;y = 2x - 1" titolo="The tangent to the graph of $x^2$ at $P(1, 1)$ has slope $f'(1) = 2$. The secants through $P$ approach this line as $h$ approaches $0$"}

:::

:::osservazione{#retta-normale titolo="Angle of the tangent line and the normal line"}
The slope of a line is the trigonometric tangent of the angle $\alpha$ that the line makes with the positive $x$-axis. Therefore $f'(x_0) = \tan \alpha$, where $\alpha$ is the angle the tangent line makes with the axis. For $f(x) = x^2$ we have $f'\left( \dfrac{1}{2} \right) = 1$, so at the point with horizontal coordinate $\dfrac{1}{2}$ the tangent line makes an angle of $\dfrac{\pi}{4}$ with the $x$-axis.

The **normal line** to a graph at $P$ is the line perpendicular to the tangent at $P$. Two lines are perpendicular when the product of their slopes is $-1$, so if $f'(x_0) \neq 0$, the normal line has slope $-\dfrac{1}{f'(x_0)}$. For $x^2$ at the point $(1, 1)$, the normal line is $y - 1 = -\dfrac{1}{2}\,(x - 1)$, that is, $y = -\dfrac{x}{2} + \dfrac{3}{2}$.
:::

## Continuity and differentiability

::::teorema{#derivabilita-continuita titolo="Continuity of differentiable functions"}
If $f$ is differentiable at $x_0$, then $f$ is continuous at $x_0$.

It follows from the theorem that a function that is *not* continuous at $x_0$ is not differentiable at $x_0$. For example, the function that equals $x$ for $x \leq 0$ and $x + 1$ for $x > 0$ has a jump at $0$ because its right-hand limit is $1$ and $f(0) = 0$. It is therefore not differentiable at $0$, and there is no need to calculate the difference quotient.

:::dimostrazione
The idea is to write the increment in the function as the product of the difference quotient and $h$. For $h \neq 0$ we have the identity
$$
f(x_0 + h) - f(x_0) = \frac{f(x_0 + h) - f(x_0)}{h} \cdot h .
$$
As $h \to 0$, the first factor approaches $f'(x_0)$, which is finite because $f$ is differentiable at $x_0$, and the second factor approaches $0$. By the product law for limits, the right-hand side therefore approaches $f'(x_0) \cdot 0 = 0$. It follows that
$$
\lim_{h \to 0} f(x_0 + h) = f(x_0) .
$$
Setting $x = x_0 + h$ turns this equality into $\displaystyle\lim_{x \to x_0} f(x) = f(x_0)$, which is the definition of continuity at $x_0$.
:::
::::

:::attenzione
A function that is continuous at a point need not be differentiable there. The function $f(x) = |x|$ is continuous at $0$ because $\displaystyle\lim_{x \to 0} |x| = 0 = f(0)$, but its right-hand derivative is $1$ and its left-hand derivative is $-1$, so at $0$ it is *not* differentiable. The slope of the graph changes abruptly from $-1$ to $1$, and at $(0, 0)$ there is no tangent line.

::grafico{f="abs(x)" punti="0,0,pieno" xmin=-3 xmax=3 ymin=-1 ymax=3 uguale=1 titolo="The graph of $|x|$ is continuous at $0$, but its slope is $-1$ on the left and $1$ on the right, so at $(0, 0)$ the function is not differentiable"}

:::

## Basic derivatives

:::teorema{#derivate-fondamentali titolo="Derivatives of elementary functions"}
The following formulas hold at the points indicated

| $f(x)$ | $f'(x)$ | where |
| --- | --- | --- |
| $k$ (constant) | $0$ | $x \in \mathbb{R}$ |
| $x^n$, where $n$ is a natural number | $n\,x^{n-1}$ | $x \in \mathbb{R}$ |
| $x^{a}$, where $a$ is real | $a\,x^{a-1}$ | $x > 0$ |
| $\sqrt{x}$ | $\dfrac{1}{2\sqrt{x}}$ | $x > 0$ |
| $\dfrac{1}{x}$ | $-\dfrac{1}{x^2}$ | $x \neq 0$ |
| $\sin x$ | $\cos x$ | $x \in \mathbb{R}$ |
| $\cos x$ | $-\sin x$ | $x \in \mathbb{R}$ |
| $\tan x$ | $\dfrac{1}{\cos^2 x} = 1 + \tan^2 x$ | $x \neq \dfrac{\pi}{2} + k\pi$ |
| $e^{x}$ | $e^{x}$ | $x \in \mathbb{R}$ |
| $a^{x}$, where $a > 0$ | $a^{x} \ln a$ | $x \in \mathbb{R}$ |
| $\ln x$ | $\dfrac{1}{x}$ | $x > 0$ |
| $\log_a x$, where $a > 0$, $a \neq 1$ | $\dfrac{1}{x \ln a}$ | $x > 0$ |
| $\arcsin x$ | $\dfrac{1}{\sqrt{1 - x^2}}$ | $-1 < x < 1$ |
| $\arccos x$ | $-\dfrac{1}{\sqrt{1 - x^2}}$ | $-1 < x < 1$ |
| $\arctan x$ | $\dfrac{1}{1 + x^2}$ | $x \in \mathbb{R}$ |

The table lets us differentiate elementary functions without calculating limits. For example, $\left( x^5 \right)' = 5x^4$ and $\left( \sqrt[3]{x} \right)' = \left( x^{\frac{1}{3}} \right)' = \dfrac{1}{3}\,x^{-\frac{2}{3}} = \dfrac{1}{3\sqrt[3]{x^2}}$ for $x > 0$. The formulas for constants, powers with natural-number exponents, sine, cosine, the exponential function, and the natural logarithm are proved using the definition of the derivative. The other formulas follow from the differentiation rules.
:::

::::teorema{#derivate-costante-potenze titolo="Derivatives of constants and powers"}
For every real $x$ we have
$$
(k)' = 0 ,
\qquad
\left( x^n \right)' = n\,x^{n-1} \quad \text{with } n \text{ a natural number, } n \geq 1 .
$$
In particular, $(x)' = 1$, $\left( x^2 \right)' = 2x$, and $\left( x^3 \right)' = 3x^2$. By the power rule, the tangent to the graph of $x^3$ at $(1, 1)$ has slope $3$, so its equation is $y - 1 = 3\,(x - 1)$, that is, $y = 3x - 2$.

:::dimostrazione
For the constant function $f(x) = k$, the difference quotient is $\dfrac{k - k}{h} = 0$ for every $h \neq 0$, so its limit is $0$.

For $f(x) = x^n$, the idea is to expand $(x + h)^n$ using the binomial theorem and factor out $h$. The expansion is
$$
(x + h)^n = x^n + n\,x^{n-1} h + \binom{n}{2} x^{n-2} h^2 + \dots + h^n ,
$$
where every term after the first two contains a factor of $h^2$. Subtracting $x^n$ and dividing by $h$ gives
$$
\frac{(x + h)^n - x^n}{h} = n\,x^{n-1} + h \left( \binom{n}{2} x^{n-2} + \dots + h^{n-2} \right) .
$$
The factor multiplying $h$ approaches $\dbinom{n}{2} x^{n-2}$, which is finite, so the second term approaches $0$. Therefore the difference quotient approaches $n\,x^{n-1}$. For $n = 3$ the calculation gives $\dfrac{(x + h)^3 - x^3}{h} = \dfrac{3x^2 h + 3x h^2 + h^3}{h} = 3x^2 + 3xh + h^2$, which approaches $3x^2$.
:::
::::

:::richiamo{titolo="Standard limits"}
We have
$$
\lim_{h \to 0} \frac{\sin h}{h} = 1 ,
\qquad
\lim_{h \to 0} \frac{1 - \cos h}{h} = 0 ,
\qquad
\lim_{h \to 0} \frac{e^{h} - 1}{h} = 1 ,
\qquad
\lim_{t \to 0} \frac{\ln (1 + t)}{t} = 1 .
$$
:::

::::teorema{#derivate-seno-coseno titolo="Derivatives of sine and cosine"}
For every real $x$, with $x$ measured in radians, we have
$$
(\sin x)' = \cos x ,
\qquad
(\cos x)' = -\sin x .
$$
For example, the tangent to the graph of $\sin x$ at the origin has slope $\cos 0 = 1$, so it is the angle bisector $y = x$. Near $0$, the graph of the sine function almost coincides with this line. This is why $\sin x \approx x$ when $x$ is small.

::grafico{f="sin(x);x" punti="0,0,pieno" xmin=-4 xmax=4 ymin=-2 ymax=2 uguale=1 legenda="y = \sin x;y = x" titolo="The tangent to the graph of $\sin x$ at the origin is the line $y = x$ because $(\sin x)' = \cos x$ equals $1$ at $0$"}

:::dimostrazione
The idea is to use the angle addition formula for sine and then apply the standard limits. Since $\sin(x + h) = \sin x \cos h + \cos x \sin h$, the difference quotient for sine is
$$
\begin{aligned}
\frac{\sin(x + h) - \sin x}{h}
&= \frac{\sin x \cos h - \sin x + \cos x \sin h}{h} \\[6pt]
&= -\sin x \cdot \frac{1 - \cos h}{h} + \cos x \cdot \frac{\sin h}{h} .
\end{aligned}
$$
As $h \to 0$, the first quotient approaches $0$ and the second approaches $1$ by the standard limits. The value of $x$ is fixed, so $\sin x$ and $\cos x$ are constants, and the difference quotient approaches $-\sin x \cdot 0 + \cos x \cdot 1 = \cos x$.

For cosine, we use $\cos(x + h) = \cos x \cos h - \sin x \sin h$. Similarly,
$$
\frac{\cos(x + h) - \cos x}{h} = -\cos x \cdot \frac{1 - \cos h}{h} - \sin x \cdot \frac{\sin h}{h} ,
$$
which approaches $-\cos x \cdot 0 - \sin x \cdot 1 = -\sin x$.
:::
::::

::::teorema{#derivate-esponenziale-logaritmo titolo="Derivatives of the exponential function and the logarithm"}
We have
$$
\left( e^{x} \right)' = e^{x} \quad \text{for every } x \text{ in the real numbers} ,
\qquad
(\ln x)' = \frac{1}{x} \quad \text{for every } x > 0 .
$$
Thus the function $e^{x}$ is its own derivative. At $(0, 1)$ the tangent to the graph of $e^{x}$ has slope $e^{0} = 1$ and equation $y = x + 1$. At $(1, 0)$ the tangent to the graph of $\ln x$ has slope $1$ and equation $y = x - 1$.

:::dimostrazione
For the exponential function, use the property $e^{x + h} = e^{x} \cdot e^{h}$ and factor out $e^{x}$:
$$
\frac{e^{x + h} - e^{x}}{h} = e^{x} \cdot \frac{e^{h} - 1}{h} .
$$
By the standard limit, the second factor approaches $1$, so the difference quotient approaches $e^{x}$.

For the logarithm, with $x > 0$, the difference of two logarithms is the logarithm of the quotient, so
$$
\frac{\ln(x + h) - \ln x}{h} = \frac{1}{h} \ln \left( 1 + \frac{h}{x} \right) = \frac{1}{x} \cdot \frac{\ln\left( 1 + \dfrac{h}{x} \right)}{\dfrac{h}{x}} ,
$$
where the last step uses multiplication and division by $x$. Set $t = \dfrac{h}{x}$. Since $x$ is fixed, $t \to 0$ as $h \to 0$, and by the standard limit the quotient $\dfrac{\ln(1 + t)}{t}$ approaches $1$. Therefore the difference quotient approaches $\dfrac{1}{x}$.
:::
::::

## Differentiation rules

:::teorema{#regole-somma-prodotto titolo="Derivatives of sums and products"}
Let $f$ and $g$ be differentiable at $x$ and let $k$ be a real number. Then $k f$, $f + g$, and $f g$ are differentiable at $x$, and
$$
(k f)' = k f' ,
\qquad
(f + g)' = f' + g' ,
\qquad
(f g)' = f' g + f g' .
$$
The first two rules allow us to differentiate a polynomial term by term. For example,
$$
\left( 3x^2 - 5x + 2 \right)' = 6x - 5 ,
\qquad
\left( x^2 \sin x \right)' = 2x \sin x + x^2 \cos x ,
\qquad
\left( x\,e^{x} \right)' = e^{x} + x\,e^{x} = (x + 1)\,e^{x} .
$$
These three rules follow from the definition of the derivative and the sum and product laws for limits. For the product rule, add and subtract $f(x + h)\,g(x)$ in the numerator of the difference quotient.
:::

:::attenzione
The derivative of a product generally differs from the product of the derivatives. For $f(x) = g(x) = x$ the product is $x^2$, whose derivative is $2x$, whereas the product of the derivatives is $1 \cdot 1 = 1$. The product rule gives the correct result, $1 \cdot x + x \cdot 1 = 2x$.
:::

:::teorema{#regola-quoziente titolo="Derivative of a quotient"}
Let $f$ and $g$ be differentiable at $x$, with $g(x) \neq 0$. Then $\dfrac{f}{g}$ is differentiable at $x$, and
$$
\left( \frac{f}{g} \right)' = \frac{f' g - f g'}{g^2} .
$$
Setting $f = 1$ gives the special case $\left( \dfrac{1}{g} \right)' = -\dfrac{g'}{g^2}$. Like the product rule, the quotient rule follows from the definition of the derivative. For example,
$$
\left( \frac{x - 1}{x + 2} \right)' = \frac{1 \cdot (x + 2) - (x - 1) \cdot 1}{(x + 2)^2} = \frac{3}{(x + 2)^2} \qquad \text{for } x \neq -2 .
$$
The same rule gives the derivative of the tangent function. For $x \neq \dfrac{\pi}{2} + k\pi$ we have
$$
(\tan x)' = \left( \frac{\sin x}{\cos x} \right)' = \frac{\cos x \cdot \cos x - \sin x \cdot (-\sin x)}{\cos^2 x} = \frac{\cos^2 x + \sin^2 x}{\cos^2 x} = \frac{1}{\cos^2 x} .
$$
Dividing each term in the numerator of $\dfrac{\cos^2 x + \sin^2 x}{\cos^2 x}$ by the denominator also gives the form $1 + \tan^2 x$.
:::

:::teorema{#derivata-funzione-composta titolo="Derivative of a composite function"}
Let $g$ be differentiable at $x$ and let $f$ be differentiable at $g(x)$. Then the composite function $y = f\big( g(x) \big)$ is differentiable at $x$, and
$$
\Big( f\big( g(x) \big) \Big)' = f'\big( g(x) \big) \cdot g'(x) .
$$
In words, differentiate the outer function $f$, evaluate its derivative at the inner function $g(x)$, and multiply by the derivative of the inner function. For example,
$$
\big( \sin (3x) \big)' = \cos (3x) \cdot 3 ,
\qquad
\left( \left( x^2 + 1 \right)^5 \right)' = 5 \left( x^2 + 1 \right)^4 \cdot 2x = 10x \left( x^2 + 1 \right)^4 ,
$$
$$
\left( e^{-x^2} \right)' = e^{-x^2} \cdot (-2x) ,
\qquad
\left( \ln \left( x^2 + 4 \right) \right)' = \frac{1}{x^2 + 4} \cdot 2x = \frac{2x}{x^2 + 4} .
$$
In the first example, the outer function is sine and the inner function is $3x$. The proof is covered at the university level.
:::

:::esempio{titolo="Powers with a variable base or exponent"}
Since the exponential function and the natural logarithm are inverses, every power with a positive base can be written as an exponential with base $e$ and differentiated using the chain rule.

- For $a > 0$ we have $a^{x} = e^{x \ln a}$, so $\left( a^{x} \right)' = e^{x \ln a} \cdot \ln a = a^{x} \ln a$. For example, $\left( 2^{x} \right)' = 2^{x} \ln 2$.
- For $x > 0$ and real $a$, we have $x^{a} = e^{a \ln x}$, so $\left( x^{a} \right)' = e^{a \ln x} \cdot \dfrac{a}{x} = x^{a} \cdot \dfrac{a}{x} = a\,x^{a-1}$.
- For $x > 0$ we have $x^{x} = e^{x \ln x}$. The derivative of the exponent is $\ln x + x \cdot \dfrac{1}{x} = \ln x + 1$ by the product rule, so $\left( x^{x} \right)' = x^{x} (\ln x + 1)$.

The first two formulas justify the corresponding entries in the table of basic derivatives.
:::

:::teorema{#derivata-funzione-inversa titolo="Derivative of an inverse function"}
Let $f$ be continuous on an interval and either strictly increasing or strictly decreasing there, so that it has an inverse function $f^{-1}$. If $f$ is differentiable at $x_0$ with $f'(x_0) \neq 0$, then $f^{-1}$ is differentiable at $y_0 = f(x_0)$, and
$$
\left( f^{-1} \right)'(y_0) = \frac{1}{f'(x_0)} .
$$
The graph of $f^{-1}$ is the reflection of the graph of $f$ across the line $y = x$. This reflection interchanges the horizontal and vertical coordinates and therefore takes a tangent line of slope $m$ to one of slope $\dfrac{1}{m}$. For example, $f(x) = x^3 + x$ has derivative $3x^2 + 1 > 0$, so it is strictly increasing and invertible. Since $f(1) = 2$ and $f'(1) = 4$, we have $\left( f^{-1} \right)'(2) = \dfrac{1}{4}$, even without knowing a formula for $f^{-1}$. The proof is covered at the university level.
:::

:::esempio{titolo="Derivatives of the inverse sine and inverse tangent"}
The function $y = \arcsin x$, for $-1 < x < 1$, is the inverse of $x = \sin y$ with $-\dfrac{\pi}{2} < y < \dfrac{\pi}{2}$. By the inverse function theorem,
$$
(\arcsin x)' = \frac{1}{(\sin y)'} = \frac{1}{\cos y} = \frac{1}{\sqrt{1 - \sin^2 y}} = \frac{1}{\sqrt{1 - x^2}} ,
$$
where $\cos y = \sqrt{1 - \sin^2 y}$ because the cosine is positive for $-\dfrac{\pi}{2} < y < \dfrac{\pi}{2}$. Similarly, $y = \arctan x$ is the inverse of $x = \tan y$, and since $(\tan y)' = 1 + \tan^2 y = 1 + x^2$, we obtain
$$
(\arctan x)' = \frac{1}{1 + x^2} .
$$
For example, the tangent to the graph of $\arctan x$ at the origin has slope $1$ and is the line $y = x$.
:::

## Higher-order derivatives

:::definizione{#derivate-successive titolo="Successive derivatives"}
If the derivative function $f'$ is itself differentiable, its derivative is called the **second derivative** of $f$ and is denoted by $f''$. Repeated differentiation gives the third derivative $f'''$, the fourth derivative $f^{(4)}$, and, in general, the **$n$th derivative** $f^{(n)}$. For $f(x) = x^4 - 2x^3$ we have
$$
f'(x) = 4x^3 - 6x^2 ,
\qquad
f''(x) = 12x^2 - 12x ,
\qquad
f'''(x) = 24x - 12 ,
\qquad
f^{(4)}(x) = 24 ,
$$
and all subsequent derivatives are zero. The second derivative measures how the slope of the tangent line changes. Its sign determines the concavity of the graph, as discussed in the chapter on maxima, minima, inflection points, and curve sketching. In physics, the second derivative of position is acceleration.
:::

:::esempio{titolo="The nth derivative"}
For $f(x) = e^{2x}$, each differentiation introduces a factor of $2$ by the chain rule. Thus $f'(x) = 2e^{2x}$, $f''(x) = 4e^{2x}$, and $f^{(n)}(x) = 2^n e^{2x}$. For example, $f^{(5)}(x) = 32\,e^{2x}$.

For $f(x) = \sin x$, the derivatives repeat in cycles of four:
$$
f'(x) = \cos x ,
\qquad
f''(x) = -\sin x ,
\qquad
f'''(x) = -\cos x ,
\qquad
f^{(4)}(x) = \sin x .
$$
Since $10 = 4 \cdot 2 + 2$, the tenth derivative is the same as the second derivative, giving $f^{(10)}(x) = -\sin x$.
:::

## Points where a function is not differentiable

:::definizione{#punti-non-derivabilita titolo="Corners, cusps, and inflection points with a vertical tangent"}
Let $f$ be continuous at $x_0$ and suppose it is not differentiable at $x_0$. We distinguish three cases according to the values of the right-hand and left-hand derivatives.

- **Corner**: $f'_+(x_0)$ and $f'_-(x_0)$ are different, and at least one is finite. At this point the graph has two distinct tangent rays.
- **Cusp**: the two derivatives are infinite with opposite signs, one $+\infty$ and the other $-\infty$. The graph approaches the point with a vertical tangent on both sides and turns back.
- **Inflection point with a vertical tangent**: the two derivatives are both $+\infty$ or both $-\infty$. The graph crosses the vertical line $x = x_0$, which is its tangent.

For $f(x) = \left| x^2 - 4 \right|$ and $x_0 = 2$, the difference quotient for small $h > 0$ is $\dfrac{(2 + h)^2 - 4}{h} = 4 + h$, and for $h < 0$ it is $\dfrac{4 - (2 + h)^2}{h} = -4 - h$. Thus $f'_+(2) = 4$ and $f'_-(2) = -4$, and the point $(2, 0)$ is a **corner**, with one-sided tangents $y = 4(x - 2)$ on the right and $y = -4(x - 2)$ on the left.

::grafico{f="abs(x^2-4)" punti="2,0,pieno;-2,0,pieno" xmin=-4 xmax=4 ymin=-2 ymax=8 titolo="The function $\left| x^2 - 4 \right|$ has two corners, at $x = 2$ and $x = -2$, where the right-hand and left-hand derivatives are $4$ and $-4$ in one order or the other"}

:::

:::esempio{titolo="A cusp and an inflection point with a vertical tangent"}
For $f(x) = \sqrt[3]{x^2}$ and $x_0 = 0$, the difference quotient is
$$
\frac{\sqrt[3]{h^2}}{h} = \frac{1}{\sqrt[3]{h}} ,
$$
which approaches $+\infty$ as $h \to 0^+$ and $-\infty$ as $h \to 0^-$. The two derivatives are infinite with opposite signs, so the origin is a **cusp**.

::grafico{f="cbrt(x^2)" punti="0,0,pieno" xmin=-4 xmax=4 ymin=-1 ymax=3 titolo="The function $\sqrt[3]{x^2}$ has a cusp at the origin because its right-hand derivative is $+\infty$ and its left-hand derivative is $-\infty$"}

For $g(x) = \sqrt[3]{x}$ and $x_0 = 0$, the difference quotient is $\dfrac{\sqrt[3]{h}}{h} = \dfrac{1}{\sqrt[3]{h^2}}$, which is positive and approaches $+\infty$ from both the right and the left. The origin is therefore an **inflection point with a vertical tangent**, and the tangent is the $y$-axis.

::grafico{f="cbrt(x)" punti="0,0,pieno" segmenti="0,-2,0,2" xmin=-4 xmax=4 ymin=-2 ymax=2 titolo="The function $\sqrt[3]{x}$ has an inflection point with a vertical tangent at the origin because both one-sided derivatives are $+\infty$ and the graph crosses the tangent line $x = 0$"}

:::

:::teorema{#criterio-derivabilita titolo="A differentiability criterion"}
Let $f$ be continuous at $x_0$ and differentiable in a neighborhood of $x_0$ except possibly at $x_0$ itself. If the limit $\displaystyle\lim_{x \to x_0^+} f'(x) = \ell$ exists, whether finite or infinite, then $f'_+(x_0) = \ell$. The same holds for the left-hand limit and the left-hand derivative.

This criterion lets us find the right-hand and left-hand derivatives by taking limits of the derivative function without using the difference quotient. For $f(x) = x\,|x|$ we have $f(x) = x^2$ for $x \geq 0$ and $f(x) = -x^2$ for $x < 0$, so $f'(x) = 2x$ for $x > 0$ and $f'(x) = -2x$ for $x < 0$. Both expressions approach $0$ as $x \to 0$, so $f'_+(0) = f'_-(0) = 0$ and the function is **differentiable** at $0$, with $f'(0) = 0$. This criterion follows from the mean value theorem, which is covered in the chapter on theorems of differential calculus.
:::

:::attenzione
The assumption of continuity at $x_0$ is necessary. The function that equals $x$ for $x \leq 0$ and $x + 1$ for $x > 0$ has derivative $1$ at every point other than $0$, so $f'(x)$ approaches $1$ from both sides. However, $f$ is not continuous at $0$ and, by the theorem on continuity of differentiable functions, is *not* differentiable at $0$.
:::

## The differential

:::definizione{#differenziale titolo="Differential"}
Let $f$ be differentiable at $x_0$ and let $h$ be an increment in the variable. The **differential** of $f$ at $x_0$ for the increment $h$ is the product
$$
df = f'(x_0) \cdot h .
$$
For the function $f(x) = x$, the differential is $dx = 1 \cdot h = h$, so the increment in the variable is denoted by $dx$ and we write $dy = f'(x)\,dx$. This is the origin of the notation $f'(x) = \dfrac{dy}{dx}$.

On the graph, the increment in the function, $\Delta y = f(x_0 + h) - f(x_0)$, is the change in the vertical coordinate along the graph, whereas the differential $dy$ is the change in the vertical coordinate along the tangent line, because that line has slope $f'(x_0)$. The difference $\Delta y - dy$, divided by $h$, equals the difference quotient minus $f'(x_0)$ and therefore approaches $0$ as $h \to 0$. For small $h$ we therefore have the approximation
$$
f(x_0 + h) \approx f(x_0) + f'(x_0)\,h .
$$
For example, with $f(x) = \sqrt{x}$, $x_0 = 4$, and $h = 0.1$, we have $f'(4) = \dfrac{1}{2\sqrt{4}} = \dfrac{1}{4}$ and
$$
\sqrt{4.1} \approx 2 + \frac{1}{4} \cdot 0.1 = 2.025 ,
$$
whereas the exact value is $2.0248\ldots$

::grafico{f="x^2;2*x-1" punti="1,1,pieno,P;2,4,pieno;2,3,pieno" segmenti="1,1,2,1;2,1,2,4" etichette="2.15,2,dy;1.5,0.5,h" xmin=-1 xmax=3 ymin=-1 ymax=6 legenda="y = x^2;y = 2x - 1" titolo="For $x^2$ with $x_0 = 1$ and $h = 1$, the increment in the function is $\Delta y = 4 - 1 = 3$, whereas the differential is the vertical change along the tangent line, $dy = 2 \cdot 1 = 2$"}

:::

:::esempio{titolo="Error in the area of a square"}
The side of a square measures $10\,\mathrm{cm}$, with an error of $0.1\,\mathrm{cm}$. The area is $A(\ell) = \ell^2$ and its derivative is $A'(\ell) = 2\ell$, so the differential is
$$
dA = 2\ell \cdot d\ell = 2 \cdot 10 \cdot 0.1 = 2\,\mathrm{cm^2} .
$$
The exact change in area is $10.1^2 - 10^2 = 2.01\,\mathrm{cm^2}$, which differs from the differential by $0.01\,\mathrm{cm^2}$, that is, by $(d\ell)^2$.
:::

## Applications to physics

:::definizione{#velocita-accelerazione titolo="Instantaneous velocity and acceleration"}
An object moves along a straight line. Its position at time $t$ is given by $s(t)$, called the **position function**. The average velocity between times $t_0$ and $t_0 + \Delta t$ is
$$
\frac{s(t_0 + \Delta t) - s(t_0)}{\Delta t} ,
$$
that is, the difference quotient of $s$. The **instantaneous velocity** is its limit as $\Delta t \to 0$, so it is the derivative of position. Likewise, the **instantaneous acceleration** is the derivative of velocity:
$$
v(t) = s'(t) ,
\qquad
a(t) = v'(t) = s''(t) .
$$
For motion with constant acceleration, $s(t) = s_0 + v_0 t + \dfrac{1}{2}\,a\,t^2$ gives $v(t) = v_0 + a\,t$ and a constant acceleration $a$, as in the kinematic equations. For example, with $s(t) = 2 + 3t + 4t^2$, in meters and seconds, we have $v(t) = 3 + 8t$ and $a(t) = 8\,\mathrm{m/s^2}$. At time $t = 1\,\mathrm{s}$ the object is at position $s(1) = 9\,\mathrm{m}$ and has velocity $v(1) = 11\,\mathrm{m/s}$.

::grafico{f="2+3*x+4*x^2;11*x-2" punti="1,9,pieno" xmin=-1 xmax=3 ymin=-12 ymax=48 nomi="t,s" legenda="s = 2 + 3t + 4t^2;s = 11t - 2" titolo="On the graph of the position function $s(t) = 2 + 3t + 4t^2$, the velocity at time $t = 1$ is the slope of the tangent at $(1, 9)$, that is, $v(1) = 11$"}

:::

:::definizione{#intensita-corrente titolo="Electric current"}
Let $q(t)$ be the charge that has passed through a cross section of a conductor from time $0$ to time $t$. The ratio $\dfrac{\Delta q}{\Delta t}$ is the average current over the time interval $\Delta t$, and its limit as $\Delta t \to 0$ is the instantaneous **electric current**:
$$
i(t) = q'(t) .
$$
If charge is measured in coulombs and time in seconds, current is measured in amperes. For example, with $q(t) = 2t^2 + t$ we have $i(t) = 4t + 1$, so at time $t = 3\,\mathrm{s}$ the current is $i(3) = 13\,\mathrm{A}$.
:::

:::osservazione{#derivata-come-rapidita titolo="Other quantities defined by derivatives"}
Every physical quantity that measures how rapidly another quantity changes with time is a derivative with respect to time. Power is the derivative of work, $P(t) = L'(t)$. By Faraday's law, the electromotive force induced in a circuit is the negative of the derivative of the magnetic flux, $\varepsilon(t) = -\Phi'(t)$. For example, if $\Phi(t) = 0.2\,t^2$ webers, then $\varepsilon(t) = -0.4\,t$ volts, and at time $t = 5\,\mathrm{s}$ the electromotive force is $-2\,\mathrm{V}$.
:::
