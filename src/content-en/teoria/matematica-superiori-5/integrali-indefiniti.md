---
titolo: Indefinite integrals
sommario: What antiderivatives and indefinite integrals are, how to evaluate basic integrals and integrals of composite functions, how to integrate by substitution and by parts, and how to integrate rational functions with linear and quadratic denominators.
---

## Antiderivatives and the indefinite integral

:::definizione{#primitiva titolo="Antiderivative"}
In the chapter on derivatives, we find the derivative of a given function. Here we solve the reverse problem, finding a function when its derivative is known. Let $f$ be a function defined on an interval $I$. A function $F$ differentiable on $I$ is called an **antiderivative** of $f$ on $I$ if
$$
F'(x) = f(x) \qquad \text{for every } x \text{ in } I .
$$
For example, $F(x) = x^2$ is an antiderivative of $f(x) = 2x$ on $\mathbb{R}$ because $\left( x^2 \right)' = 2x$. Both $x^2 + 5$ and $x^2 - 7$ are also antiderivatives of $2x$ because the derivative of a constant is $0$. Thus, a function that has one antiderivative has infinitely many.
:::

:::richiamo{titolo="Functions with zero derivative"}
Let $g$ be differentiable on an interval $I$, with $g'(x) = 0$ for every $x$ in $I$. Then $g$ is constant on $I$.
:::

:::teorema{#primitive-di-una-funzione titolo="Antiderivatives of the same function"}
Let $F$ be an antiderivative of $f$ on the interval $I$. Then the antiderivatives of $f$ on $I$ are *precisely* the functions
$$
F(x) + c , \qquad \text{with } c \text{ a real number} .
$$
Each function $F(x) + c$ is an antiderivative because its derivative is $F'(x) = f(x)$. Conversely, if $G$ is another antiderivative, the difference $G - F$ has derivative $f - f = 0$ throughout the interval. By the theorem on functions with zero derivative, covered in the chapter on theorems of differential calculus, the difference is therefore a constant $c$, and $G = F + c$.

Thus, the graphs of the antiderivatives are vertical translations of one another. For example, the antiderivatives of $f(x) = x^2 - 1$ are the functions $\dfrac{x^3}{3} - x + c$. At each horizontal coordinate, their graphs have the same slope, equal to $f(x)$.

::grafico{f="x^3/3-x;x^3/3-x+2" segmenti="2,0.667,2,2.667;-2,-0.667,-2,1.333" xmin=-3 xmax=3 ymin=-3 ymax=5 legenda="y = \dfrac{x^3}{3} - x;y = \dfrac{x^3}{3} - x + 2" titolo="Two antiderivatives of $f(x) = x^2 - 1$. Their graphs are $2$ units apart vertically at every horizontal coordinate and have the same slope $f(x)$ there"}

:::

:::definizione{#integrale-indefinito titolo="Indefinite integral"}
The **indefinite integral** of $f$ is the set of all antiderivatives of $f$. We write
$$
\int f(x)\,dx = F(x) + c ,
$$
where $F$ is any antiderivative of $f$ and $c$ is an arbitrary constant called the **constant of integration**. The function $f$ is called the **integrand**, and the symbol $dx$ indicates that the variable is $x$. For example,
$$
\int 3x^2\,dx = x^3 + c ,
\qquad
\int \cos x\,dx = \sin x + c .
$$
We can check any indefinite integral by differentiating the result because the derivative of $F(x) + c$ must equal the integrand. In the first example, $\left( x^3 + c \right)' = 3x^2$.
:::

:::teorema{#esistenza-primitive titolo="Existence of antiderivatives"}
Every function continuous on an interval has an antiderivative on that interval.

The functions in the exercises, namely polynomials, rational functions, radicals, exponentials, logarithms, and trigonometric functions, are continuous on the intervals where they are defined. Therefore, they have antiderivatives on those intervals. For example, $f(x) = \dfrac{1}{x^2 + 1}$ is continuous on all of $\mathbb{R}$, so it has antiderivatives on $\mathbb{R}$. One of them is $\arctan x$, as the table of basic integrals shows. The proof uses the fundamental theorem of calculus, covered in the chapter on definite integrals.
:::

:::osservazione{#grafico-primitiva titolo="From the graph of a function to the graph of an antiderivative"}
Since $F'(x) = f(x)$, the sign of $f$ is the sign of the derivative of $F$. By the derivative test for monotonicity, an antiderivative $F$ therefore increases on intervals where $f > 0$ and decreases on intervals where $f < 0$. At points where $f$ changes sign, the graph of $F$ has a local maximum or minimum with a horizontal tangent.

For example, $F(x) = (x - 1)\,e^{x}$ is an antiderivative of $f(x) = x\,e^{x}$ because the product rule gives $F'(x) = e^{x} + (x - 1)\,e^{x} = x\,e^{x}$. The function $f$ is negative for $x < 0$ and positive for $x > 0$, so $F$ decreases for $x < 0$, increases for $x > 0$, and has a **minimum** at $x = 0$, where $F(0) = -1$.

::grafico{f="x*exp(x);(x-1)*exp(x)" punti="0,-1,pieno;0,0,pieno" xmin=-4 xmax=2 ymin=-2 ymax=4 legenda="y = x\,e^{x};y = (x - 1)\,e^{x}" titolo="The antiderivative $F(x) = (x - 1)\,e^{x}$ of $f(x) = x\,e^{x}$ has a minimum at $x = 0$, where $f$ changes from negative to positive"}

:::

:::osservazione{#primitiva-per-un-punto titolo="Antiderivative whose graph passes through a given point"}
Among the infinitely many antiderivatives of $f$, exactly one has a graph passing through a given point $P(x_0, y_0)$ with $x_0$ in the interval. Indeed, the condition $F(x_0) + c = y_0$ determines the value of $c$. For example, the antiderivatives of $f(x) = 6x - 2$ are $3x^2 - 2x + c$. The antiderivative whose graph passes through $P(1, 4)$ satisfies $3 - 2 + c = 4$, so $c = 3$, and the desired antiderivative is
$$
F(x) = 3x^2 - 2x + 3 .
$$

::grafico{f="3*x^2-2*x;3*x^2-2*x+3" punti="1,4,pieno,P" xmin=-2 xmax=3 ymin=-2 ymax=10 legenda="y = 3x^2 - 2x;y = 3x^2 - 2x + 3" titolo="Among the antiderivatives of $f(x) = 6x - 2$, the function $F(x) = 3x^2 - 2x + 3$ is the one whose graph passes through $P(1, 4)$"}

:::

:::osservazione{#moto-da-accelerazione titolo="Finding velocity and position from acceleration"}
In physics, velocity is the derivative of position, and acceleration is the derivative of velocity, as we saw in the chapter on derivatives. Therefore, velocity $v(t)$ is an antiderivative of acceleration $a(t)$, and the position function $s(t)$ is an antiderivative of velocity. The initial velocity and position determine the constants of integration.

For example, a body moves along a straight line with acceleration $a(t) = 6t - 2$, measured in $\mathrm{m/s^2}$, and at time $t = 0$ it is at $s = 0$ with velocity $1\,\mathrm{m/s}$. Then
$$
v(t) = \int (6t - 2)\,dt = 3t^2 - 2t + c_1 ,
\qquad
v(0) = 1 \;\Longrightarrow\; c_1 = 1 ,
$$
$$
s(t) = \int \left( 3t^2 - 2t + 1 \right) dt = t^3 - t^2 + t + c_2 ,
\qquad
s(0) = 0 \;\Longrightarrow\; c_2 = 0 .
$$
At time $t = 2\,\mathrm{s}$, the body is therefore at $s(2) = 8 - 4 + 2 = 6\,\mathrm{m}$. This is our first example of a differential equation, an equation in which the unknown is a function. Differential equations are covered in their own chapter.

::grafico{f="x^3-x^2+x" punti="2,6,pieno" segmenti="2,0,2,6;0,6,2,6" xmin=-1 xmax=3 ymin=-2 ymax=10 nomi="t,s" legenda="s = t^3 - t^2 + t" titolo="The position function $s(t) = t^3 - t^2 + t$ is the antiderivative of $v(t) = 3t^2 - 2t + 1$ whose value is $0$ when $t = 0$. At time $t = 2$ the body is at $s = 6$"}

:::

## Linearity properties

:::teorema{#linearita titolo="Linearity of the indefinite integral"}
Let $f$ and $g$ be functions with antiderivatives on an interval and let $k$ be a real number. Then
$$
\int k\,f(x)\,dx = k \int f(x)\,dx ,
\qquad
\int \big( f(x) + g(x) \big)\,dx = \int f(x)\,dx + \int g(x)\,dx .
$$
In words, a constant factor can be taken outside the integral, and the integral of a sum is the sum of the integrals. The two formulas follow from the constant multiple rule and the sum rule for derivatives. By linearity, we can integrate a polynomial term by term:
$$
\int \left( 4x^3 - 6x + 2 \right) dx = 4 \cdot \frac{x^4}{4} - 6 \cdot \frac{x^2}{2} + 2x + c = x^4 - 3x^2 + 2x + c .
$$
The constants of integration of the individual terms add up to a single constant $c$.
:::

:::attenzione
The integral of a product differs in general from the product of the integrals. For $f(x) = g(x) = x$, the product is $x^2$, whose integral is $\dfrac{x^3}{3} + c$, whereas the product of the antiderivatives $\dfrac{x^2}{2} \cdot \dfrac{x^2}{2} = \dfrac{x^4}{4}$ has derivative $x^3$, which differs from $x^2$. To integrate products, we use substitution and integration by parts.
:::

## Basic integrals

:::teorema{#integrali-immediati titolo="Basic integrals"}
Reading the table of derivatives of elementary functions in reverse gives the **basic integrals**, valid on the intervals where the functions are defined.

| $f(x)$ | $\displaystyle\int f(x)\,dx$ |
| --- | --- |
| $k$ (constant) | $k\,x + c$ |
| $x^{a}$, with $a \neq -1$ | $\dfrac{x^{a + 1}}{a + 1} + c$ |
| $\dfrac{1}{x}$ | $\ln \lvert x \rvert + c$ |
| $e^{x}$ | $e^{x} + c$ |
| $a^{x}$, with $a > 0$ and $a \neq 1$ | $\dfrac{a^{x}}{\ln a} + c$ |
| $\sin x$ | $-\cos x + c$ |
| $\cos x$ | $\sin x + c$ |
| $\dfrac{1}{\cos^2 x}$ | $\tan x + c$ |
| $\dfrac{1}{\sin^2 x}$ | $-\dfrac{1}{\tan x} + c$ |
| $\dfrac{1}{1 + x^2}$ | $\arctan x + c$ |
| $\dfrac{1}{\sqrt{1 - x^2}}$ | $\arcsin x + c$ |

We can verify each row by differentiating the expression in the second column. For example, $\left( \dfrac{x^{a + 1}}{a + 1} \right)' = \dfrac{(a + 1)\,x^{a}}{a + 1} = x^{a}$, and we need the condition $a \neq -1$ because when $a = -1$ the denominator $a + 1$ is zero.
:::

:::esempio{titolo="Roots and powers with negative exponents"}
The power rule also applies to roots and reciprocals, provided we first write them as powers. For $x > 0$, we have $\sqrt{x} = x^{\frac{1}{2}}$ and $\dfrac{1}{x^3} = x^{-3}$, so
$$
\begin{aligned}
\int \left( 3\sqrt{x} - \frac{2}{x^3} \right) dx
&= 3 \int x^{\frac{1}{2}}\,dx - 2 \int x^{-3}\,dx \\[6pt]
&= 3 \cdot \frac{x^{\frac{3}{2}}}{\frac{3}{2}} - 2 \cdot \frac{x^{-2}}{-2} + c \\[6pt]
&= 2\,x^{\frac{3}{2}} + \frac{1}{x^2} + c = 2x\sqrt{x} + \frac{1}{x^2} + c .
\end{aligned}
$$
Similarly, $\displaystyle\int \left( 2\cos x - 3\sin x \right) dx = 2\sin x + 3\cos x + c$ and $\displaystyle\int 2^{x}\,dx = \dfrac{2^{x}}{\ln 2} + c$.
:::

:::osservazione{#primitiva-reciproco titolo="Absolute value in the antiderivative of the reciprocal function"}
The function $\dfrac{1}{x}$ is defined for $x \neq 0$, that is, on the two intervals $x < 0$ and $x > 0$. For $x > 0$, we have $(\ln x)' = \dfrac{1}{x}$. For $x < 0$, the logarithm $\ln x$ is undefined, whereas $\ln(-x)$ is defined, and the chain rule gives
$$
\big( \ln(-x) \big)' = \frac{1}{-x} \cdot (-1) = \frac{1}{x} .
$$
We can combine the two formulas by writing $\ln \lvert x \rvert$, which is an antiderivative of $\dfrac{1}{x}$ on each of the two intervals.

::grafico{f="1/x;log(abs(x))" asintoti="x=0" xmin=-4 xmax=4 ymin=-3 ymax=3 legenda="y = \dfrac{1}{x};y = \ln |x|" titolo="The function $\ln |x|$ is an antiderivative of $\dfrac{1}{x}$ both for $x < 0$ and for $x > 0$. Where $\dfrac{1}{x}$ is negative, the antiderivative decreases, and where it is positive, the antiderivative increases"}

:::

:::osservazione{#primitiva-arcotangente titolo="The arctangent as an antiderivative"}
The function $\dfrac{1}{1 + x^2}$ is rational, while its antiderivative $\arctan x$ is an inverse trigonometric function. The integrand is positive throughout $\mathbb{R}$, so the arctangent is increasing. The maximum value of the integrand is $1$, attained at $x = 0$, and at that point the tangent to the graph of the arctangent has slope $1$. We use this integral for rational functions whose quadratic denominator has no real roots.

::grafico{f="1/(1+x^2);atan(x)" punti="0,0,pieno;0,1,pieno" asintoti="y=1.5708;y=-1.5708" xmin=-5 xmax=5 ymin=-2 ymax=2 legenda="y = \dfrac{1}{1 + x^2};y = \arctan x" titolo="The function $\arctan x$ is the antiderivative of $\dfrac{1}{1 + x^2}$ with value $0$ at $x = 0$. Its horizontal asymptotes are $y = \dfrac{\pi}{2}$ and $y = -\dfrac{\pi}{2}$"}

:::

## Integrals of composite functions

:::teorema{#integrali-funzioni-composte titolo="Integrals of composite functions"}
Let $g$ be a differentiable function with continuous derivative $g'$. The chain rule gives the following formulas:

| integrand | integral |
| --- | --- |
| $g(x)^{a} \cdot g'(x)$, with $a \neq -1$ | $\dfrac{g(x)^{a + 1}}{a + 1} + c$ |
| $\dfrac{g'(x)}{g(x)}$ | $\ln \lvert g(x) \rvert + c$ |
| $e^{g(x)} \cdot g'(x)$ | $e^{g(x)} + c$ |
| $\sin g(x) \cdot g'(x)$ | $-\cos g(x) + c$ |
| $\cos g(x) \cdot g'(x)$ | $\sin g(x) + c$ |
| $\dfrac{g'(x)}{1 + g(x)^2}$ | $\arctan g(x) + c$ |
| $\dfrac{g'(x)}{\sqrt{1 - g(x)^2}}$ | $\arcsin g(x) + c$ |

We can verify each formula by differentiating the right-hand side. For example, the derivative of $e^{g(x)}$ is $e^{g(x)} \cdot g'(x)$. The formulas apply when the integrand contains a function $g(x)$ and its derivative $g'(x)$ as a factor. For example, with $g(x) = x^3 + 1$ and $g'(x) = 3x^2$,
$$
\int 3x^2 \left( x^3 + 1 \right)^4 dx = \frac{\left( x^3 + 1 \right)^5}{5} + c .
$$
:::

:::esempio{titolo="The derivative of the inner function up to a constant factor"}
When the derivative $g'(x)$ appears in the integrand with a different constant factor, we multiply and divide by a suitable number. In the integral of $\dfrac{x}{x^2 + 4}$, the derivative of the denominator is $2x$, so
$$
\int \frac{x}{x^2 + 4}\,dx = \frac{1}{2} \int \frac{2x}{x^2 + 4}\,dx = \frac{1}{2} \ln \left( x^2 + 4 \right) + c ,
$$
where the absolute value is unnecessary because $x^2 + 4 > 0$. Similarly, since the derivative of $-x^2$ is $-2x$,
$$
\int x\,e^{-x^2}\,dx = -\frac{1}{2} \int (-2x)\,e^{-x^2}\,dx = -\frac{1}{2}\,e^{-x^2} + c .
$$
Two other examples are $\displaystyle\int \sin^3 x \cos x\,dx = \dfrac{\sin^4 x}{4} + c$, with $g(x) = \sin x$, and
$$
\int \tan x\,dx = \int \frac{\sin x}{\cos x}\,dx = -\int \frac{-\sin x}{\cos x}\,dx = -\ln \lvert \cos x \rvert + c .
$$
:::

:::teorema{#funzione-interna-lineare titolo="Linear inner function"}
Let $F$ be an antiderivative of $f$ and let $m$ and $q$ be real numbers with $m \neq 0$. Then
$$
\int f(m x + q)\,dx = \frac{1}{m}\,F(m x + q) + c .
$$
This is the composite function formula with $g(x) = m x + q$, whose derivative is the constant $m$. For example,
$$
\int \cos (3x)\,dx = \frac{\sin (3x)}{3} + c ,
\qquad
\int (2x - 1)^5\,dx = \frac{1}{2} \cdot \frac{(2x - 1)^6}{6} + c = \frac{(2x - 1)^6}{12} + c ,
$$
$$
\int \frac{1}{2x + 1}\,dx = \frac{1}{2} \ln \lvert 2x + 1 \rvert + c ,
\qquad
\int e^{-4x}\,dx = -\frac{1}{4}\,e^{-4x} + c .
$$
:::

:::attenzione
The power rule for integrating a composite function requires the factor $g'(x)$. In the integral of $\left( x^2 + 1 \right)^2$, the factor $2x$ is missing, and the function $\dfrac{\left( x^2 + 1 \right)^3}{3}$ is *not* an antiderivative because its derivative is $2x \left( x^2 + 1 \right)^2$. The factor $2x$ contains the variable, so multiplying and dividing by a constant cannot supply it. In this case, we expand the square:
$$
\int \left( x^2 + 1 \right)^2 dx = \int \left( x^4 + 2x^2 + 1 \right) dx = \frac{x^5}{5} + \frac{2x^3}{3} + x + c .
$$
:::

## Integration by substitution

:::teorema{#integrazione-per-sostituzione titolo="Integration by substitution"}
Let $f$ be continuous and let $x = \varphi(t)$ be an invertible, differentiable function with continuous derivative. Then
$$
\int f(x)\,dx = \int f\big( \varphi(t) \big)\,\varphi'(t)\,dt ,
$$
and after evaluating the integral on the right, we return to the variable $x$ by substituting $t = \varphi^{-1}(x)$. In practice, we choose a new variable $t$ that simplifies the integrand, express $x$ and $dx = \varphi'(t)\,dt$ in terms of $t$, integrate with respect to $t$, and return to $x$. The formula follows from the chain rule. The proof is covered at the university level.

For example, in the integral of $\dfrac{1}{1 + \sqrt{x}}$, with $x \geq 0$, set $t = \sqrt{x}$. Then $x = t^2$, with $t \geq 0$, and $dx = 2t\,dt$. Since $\dfrac{t}{1 + t} = \dfrac{(1 + t) - 1}{1 + t} = 1 - \dfrac{1}{1 + t}$, we obtain
$$
\begin{aligned}
\int \frac{1}{1 + \sqrt{x}}\,dx
&= \int \frac{2t}{1 + t}\,dt \\[6pt]
&= 2 \int \left( 1 - \frac{1}{1 + t} \right) dt \\[6pt]
&= 2t - 2 \ln (1 + t) + c \\[6pt]
&= 2\sqrt{x} - 2 \ln \left( 1 + \sqrt{x} \right) + c .
\end{aligned}
$$
The absolute value is unnecessary because $1 + t > 0$.
:::

:::esempio{titolo="Substitution for the square root of a linear expression"}
In the integral of $x\sqrt{x + 1}$, with $x \geq -1$, the expression under the square root is linear. Set $t = \sqrt{x + 1}$, that is, $x = t^2 - 1$, with $t \geq 0$, and $dx = 2t\,dt$. The integrand becomes $\left( t^2 - 1 \right) t$, so
$$
\begin{aligned}
\int x\sqrt{x + 1}\,dx
&= \int \left( t^2 - 1 \right) t \cdot 2t\,dt \\[6pt]
&= 2 \int \left( t^4 - t^2 \right) dt \\[6pt]
&= \frac{2}{5}\,t^5 - \frac{2}{3}\,t^3 + c \\[6pt]
&= \frac{2}{5}\,(x + 1)^{\frac{5}{2}} - \frac{2}{3}\,(x + 1)^{\frac{3}{2}} + c .
\end{aligned}
$$
We can also evaluate integrals of composite functions by substitution. In the integral of $3x^2 \left( x^3 + 1 \right)^4$, setting $t = x^3 + 1$ gives $dt = 3x^2\,dx$, and the integral becomes $\displaystyle\int t^4\,dt = \dfrac{t^5}{5} + c$.
:::

:::esempio{titolo="Exponential substitution"}
In the integral of $\dfrac{e^{x}}{e^{2x} + 1}$, set $t = e^{x}$. Then $dt = e^{x}\,dx$ and $e^{2x} = t^2$, so
$$
\int \frac{e^{x}}{e^{2x} + 1}\,dx = \int \frac{1}{t^2 + 1}\,dt = \arctan t + c = \arctan \left( e^{x} \right) + c .
$$
Differentiating verifies the result because $\big( \arctan \left( e^{x} \right) \big)' = \dfrac{e^{x}}{1 + e^{2x}}$.
:::

## Integration by parts

:::teorema{#integrazione-per-parti titolo="Integration by parts"}
Let $f$ and $g$ be differentiable on an interval, with continuous derivatives. Then
$$
\int f(x)\,g'(x)\,dx = f(x)\,g(x) - \int f'(x)\,g(x)\,dx .
$$
The factor $f(x)$ is the **factor to differentiate**, so we take its derivative. The factor $g'(x)$ is the **factor to integrate**, so we find an antiderivative of it. The formula follows from the product rule for derivatives. Indeed, $(f g)' = f' g + f g'$, so $f g$ is an antiderivative of $f' g + f g'$. By linearity, $f g = \displaystyle\int f' g\,dx + \displaystyle\int f g'\,dx$. Moving the first integral to the left-hand side gives the formula.

The formula is useful when the integral on the right is simpler than the original one. For example, with $f(x) = x$ and $g'(x) = \cos x$, we have $f'(x) = 1$ and $g(x) = \sin x$, so
$$
\int x \cos x\,dx = x \sin x - \int \sin x\,dx = x \sin x + \cos x + c .
$$
:::

:::osservazione{#scelta-fattori titolo="Choosing the factor to differentiate"}
We choose the factor to differentiate so that its derivative is simpler.

- In a product of a polynomial and $e^{x}$, $\sin x$, or $\cos x$, we differentiate the polynomial because each differentiation lowers its degree by $1$.
- In a product of a polynomial and $\ln x$ or $\arctan x$, we differentiate the logarithm or the arctangent because its derivative is a rational function.

For example, differentiating $\ln x$ and integrating $1$ gives, for $x > 0$,
$$
\int \ln x\,dx = x \ln x - \int x \cdot \frac{1}{x}\,dx = x \ln x - x + c .
$$
Differentiating $\arctan x$ and integrating $1$ gives
$$
\int \arctan x\,dx = x \arctan x - \int \frac{x}{1 + x^2}\,dx = x \arctan x - \frac{1}{2} \ln \left( 1 + x^2 \right) + c .
$$
:::

:::esempio{titolo="Integrating by parts twice in succession"}
In the integral of $x^2 e^{x}$, the factor to differentiate is $x^2$ and the factor to integrate is $e^{x}$. After one integration by parts, the integral of $2x\,e^{x}$ remains. A second integration by parts gives
$$
\begin{aligned}
\int x^2 e^{x}\,dx
&= x^2 e^{x} - \int 2x\,e^{x}\,dx \\[6pt]
&= x^2 e^{x} - \left( 2x\,e^{x} - \int 2\,e^{x}\,dx \right) \\[6pt]
&= x^2 e^{x} - 2x\,e^{x} + 2\,e^{x} + c \\[6pt]
&= \left( x^2 - 2x + 2 \right) e^{x} + c .
\end{aligned}
$$
:::

:::esempio{titolo="An integral that reappears"}
In the integral $I = \displaystyle\int e^{x} \sin x\,dx$, we choose $\sin x$ as the factor to differentiate and integrate by parts twice:
$$
\begin{aligned}
I
&= e^{x} \sin x - \int e^{x} \cos x\,dx \\[6pt]
&= e^{x} \sin x - \left( e^{x} \cos x + \int e^{x} \sin x\,dx \right) \\[6pt]
&= e^{x} \sin x - e^{x} \cos x - I .
\end{aligned}
$$
After two steps, the original integral $I$ reappears with a minus sign. The resulting equality is an equation in the unknown $I$, which gives $2I = e^{x} (\sin x - \cos x)$ and hence
$$
\int e^{x} \sin x\,dx = \frac{e^{x} (\sin x - \cos x)}{2} + c .
$$
:::

## Rational functions with a linear denominator

:::definizione{#funzione-razionale-fratta titolo="Rational function"}
A **rational function** is a quotient of two polynomials $\dfrac{N(x)}{D(x)}$, where $D$ has degree at least $1$ in the case considered here. If the degree of the numerator is greater than or equal to that of the denominator, we perform polynomial division. This gives a quotient $Q(x)$ and a remainder $R(x)$ of degree less than that of $D(x)$, with
$$
\frac{N(x)}{D(x)} = Q(x) + \frac{R(x)}{D(x)} .
$$
The quotient is a polynomial, which we can integrate term by term. It therefore remains to integrate the fraction $\dfrac{R(x)}{D(x)}$, whose numerator has lower degree than its denominator. For example, dividing $x^2 - 3$ by $x + 1$ gives quotient $x - 1$ and remainder $-2$ because $(x + 1)(x - 1) - 2 = x^2 - 3$. Therefore,
$$
\frac{x^2 - 3}{x + 1} = x - 1 - \frac{2}{x + 1} .
$$
:::

:::teorema{#razionali-primo-grado titolo="Linear denominator"}
Let $m$, $q$, and $k$ be real numbers with $m \neq 0$. By the formula for a linear inner function,
$$
\int \frac{k}{m x + q}\,dx = \frac{k}{m} \ln \lvert m x + q \rvert + c .
$$
If the numerator has degree greater than or equal to $1$, we first perform the division. For example, $3x + 1 = 3\,(x - 2) + 7$, so
$$
\int \frac{3x + 1}{x - 2}\,dx = \int \left( 3 + \frac{7}{x - 2} \right) dx = 3x + 7 \ln \lvert x - 2 \rvert + c .
$$
The preceding division also gives
$$
\int \frac{x^2 - 3}{x + 1}\,dx = \int \left( x - 1 - \frac{2}{x + 1} \right) dx = \frac{x^2}{2} - x - 2 \ln \lvert x + 1 \rvert + c .
$$
:::

## Rational functions with a quadratic denominator

:::osservazione{#numeratore-derivata-denominatore titolo="Numerator equal to the derivative of the denominator"}
Consider the integral of $\dfrac{p x + r}{D(x)}$, where $D(x)$ is a quadratic trinomial with leading coefficient $a$ and discriminant $\Delta$. The numerator has degree less than $2$. If its degree were greater than or equal to $2$, we would first perform the division. When the numerator is the derivative of the denominator or a multiple of it, the formula $\displaystyle\int \dfrac{g'(x)}{g(x)}\,dx = \ln \lvert g(x) \rvert + c$ applies directly. For example, the derivative of $x^2 - 5x + 6$ is $2x - 5$, so
$$
\int \frac{2x - 5}{x^2 - 5x + 6}\,dx = \ln \left\lvert x^2 - 5x + 6 \right\rvert + c .
$$
In the other cases, the method depends on the sign of $\Delta$, as the next three theorems show.
:::

:::teorema{#razionali-delta-positivo titolo="Positive discriminant"}
If $\Delta > 0$, the denominator has two distinct real roots $x_1$ and $x_2$ and factors as $a\,(x - x_1)(x - x_2)$. There are then two numbers $A$ and $B$ such that
$$
\frac{p x + r}{a\,(x - x_1)(x - x_2)} = \frac{A}{x - x_1} + \frac{B}{x - x_2} ,
$$
and therefore
$$
\int \frac{p x + r}{D(x)}\,dx = A \ln \lvert x - x_1 \rvert + B \ln \lvert x - x_2 \rvert + c .
$$
The fractions on the right are called **partial fractions**. To find $A$ and $B$, write the right-hand side over a common denominator and equate the numerators. The equality holds for every $x$, so substituting $x = x_1$ and $x = x_2$ gives one equation for each number.
:::

:::esempio{titolo="Partial fraction decomposition"}
The denominator of $\dfrac{x + 7}{x^2 - x - 6}$ has discriminant $\Delta = 1 + 24 = 25 > 0$ and roots $3$ and $-2$, so $x^2 - x - 6 = (x - 3)(x + 2)$. We seek $A$ and $B$ such that
$$
\frac{x + 7}{(x - 3)(x + 2)} = \frac{A}{x - 3} + \frac{B}{x + 2} ,
\qquad \text{that is,} \qquad
x + 7 = A\,(x + 2) + B\,(x - 3) .
$$
Setting $x = 3$ gives $10 = 5A$, so $A = 2$. Setting $x = -2$ gives $5 = -5B$, so $B = -1$. Therefore,
$$
\int \frac{x + 7}{x^2 - x - 6}\,dx = 2 \ln \lvert x - 3 \rvert - \ln \lvert x + 2 \rvert + c .
$$
By the properties of logarithms, we can also write the result as $\ln \dfrac{(x - 3)^2}{\lvert x + 2 \rvert} + c$.
:::

:::teorema{#razionali-delta-nullo titolo="Zero discriminant"}
If $\Delta = 0$, the denominator has a double root $x_1$ and can be written as $a\,(x - x_1)^2$. We rewrite the numerator in terms of $x - x_1$, obtaining $p x + r = p\,(x - x_1) + (p x_1 + r)$, and split the fraction into two terms with known antiderivatives:
$$
\int \frac{1}{x - x_1}\,dx = \ln \lvert x - x_1 \rvert + c ,
\qquad
\int \frac{1}{(x - x_1)^2}\,dx = -\frac{1}{x - x_1} + c .
$$
The second integral is that of a power with exponent $-2$ and a linear inner function. For example, $x^2 - 4x + 4 = (x - 2)^2$ and $2x + 1 = 2\,(x - 2) + 5$, so
$$
\begin{aligned}
\int \frac{2x + 1}{x^2 - 4x + 4}\,dx
&= \int \left( \frac{2}{x - 2} + \frac{5}{(x - 2)^2} \right) dx \\[6pt]
&= 2 \ln \lvert x - 2 \rvert - \frac{5}{x - 2} + c .
\end{aligned}
$$
:::

:::teorema{#razionali-delta-negativo titolo="Negative discriminant"}
If $\Delta < 0$, the denominator has no real roots. Completing the square puts it in the form $a \left( (x - h)^2 + k^2 \right)$, with $k > 0$. We then use the integral
$$
\int \frac{1}{(x - h)^2 + k^2}\,dx = \frac{1}{k} \arctan \frac{x - h}{k} + c ,
$$
which follows by factoring $k^2$ out of the denominator and applying the formula for a linear inner function to the integral of $\dfrac{1}{1 + t^2}$, with $t = \dfrac{x - h}{k}$. For example, $x^2 + 2x + 5 = (x + 1)^2 + 4$, with $h = -1$ and $k = 2$, so
$$
\int \frac{1}{x^2 + 2x + 5}\,dx = \frac{1}{2} \arctan \frac{x + 1}{2} + c .
$$
If the numerator is linear, we first rewrite it to bring out the derivative of the denominator. The fraction then splits into two terms, one giving a logarithm and the other an arctangent.

::grafico{f="1/(x^2+2*x+5);atan((x+1)/2)/2" punti="-1,0,pieno" xmin=-6 xmax=4 ymin=-1 ymax=1 legenda="y = \dfrac{1}{x^2 + 2x + 5};y = \dfrac{1}{2} \arctan \dfrac{x + 1}{2}" titolo="The antiderivative $\dfrac{1}{2} \arctan \dfrac{x + 1}{2}$ of $\dfrac{1}{x^2 + 2x + 5}$ is increasing because the integrand is positive, and its slope is greatest at $x = -1$"}

:::

:::esempio{titolo="Linear numerator and negative discriminant"}
In the integral of $\dfrac{2x + 3}{x^2 + 2x + 5}$, the derivative of the denominator is $2x + 2$. We write $2x + 3 = (2x + 2) + 1$ and split the fraction:
$$
\begin{aligned}
\int \frac{2x + 3}{x^2 + 2x + 5}\,dx
&= \int \frac{2x + 2}{x^2 + 2x + 5}\,dx + \int \frac{1}{(x + 1)^2 + 4}\,dx \\[6pt]
&= \ln \left( x^2 + 2x + 5 \right) + \frac{1}{2} \arctan \frac{x + 1}{2} + c .
\end{aligned}
$$
The absolute value in the logarithm is unnecessary because a quadratic trinomial with $\Delta < 0$ and a positive leading coefficient is always positive.
:::

:::attenzione
A quadratic denominator with no real roots gives an arctangent, and a logarithm appears only when the numerator contains the derivative of the denominator. For example, the derivative of $\ln \left( x^2 + 4 \right)$ is $\dfrac{2x}{x^2 + 4}$, so $\ln \left( x^2 + 4 \right)$ is *not* an antiderivative of $\dfrac{1}{x^2 + 4}$. The correct antiderivative, with $h = 0$ and $k = 2$, is $\dfrac{1}{2} \arctan \dfrac{x}{2} + c$.
:::
