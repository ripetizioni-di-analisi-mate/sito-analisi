---
titolo: "Calculus 1 formula sheet"
sommario: "The formulas of Calculus 1 (Mathematical Analysis 1) with their hypotheses: elementary functions and trigonometry, complex numbers, standard limits, derivatives and Taylor expansions, integrals and improper integrals, series and differential equations."
descrizione: "Calculus 1 formula sheet (free PDF): standard limits, derivatives, Maclaurin series, basic antiderivatives, series and differential equations, with hypotheses."
---

## Sets, induction and the binomial theorem

The proofs and the examples are in the chapter [Sets, induction and elementary functions](/en/analisi-1/insiemi/teoria).

:::formula{#caratterizzazione-sup-inf titolo="Supremum and infimum with epsilon"}
$$
L = \sup A \iff
\begin{cases}
a \leq L \quad \text{for every } a \in A \\[4pt]
\text{for every } \varepsilon > 0 \text{ there exists } a \in A \text{ with } a > L - \varepsilon
\end{cases}
$$
$$
\ell = \inf A \iff
\begin{cases}
a \geq \ell \quad \text{for every } a \in A \\[4pt]
\text{for every } \varepsilon > 0 \text{ there exists } a \in A \text{ with } a < \ell + \varepsilon
\end{cases}
$$
It holds for $A \subseteq \mathbb{R}$ nonempty and $L, \ell \in \mathbb{R}$. If $A$ is not bounded above one sets $\sup A = +\infty$, and this is equivalent to saying that for every $M > 0$ there exists $a \in A$ with $a > M$. The maximum of $A$ exists *if and only if* $\sup A \in A$, and in that case it coincides with $\sup A$.
:::

:::formula{#principio-di-induzione titolo="Principle of induction"}
$$
\begin{cases}
P(n_0) \ \text{is true} \\[4pt]
P(n) \implies P(n+1) \quad \text{for every } n \geq n_0
\end{cases}
\qquad \implies \qquad P(n) \ \text{is true for every } n \geq n_0
$$
The first condition is the base case, the second the inductive step, in which $P(n)$ is the inductive hypothesis. The conclusion requires that *both* conditions be satisfied.
:::

:::formula{#somme-notevoli titolo="Standard sums"}
$$
\begin{gathered}
\sum_{k=1}^{n} k = \frac{n(n+1)}{2}, \qquad
\sum_{k=1}^{n} k^2 = \frac{n(n+1)(2n+1)}{6}, \\[8pt]
\sum_{k=1}^{n} k^3 = \left( \frac{n(n+1)}{2} \right)^{2}, \qquad
\sum_{k=0}^{n} q^k = \frac{1 - q^{n+1}}{1 - q} \quad (q \neq 1)
\end{gathered}
$$
The first three hold for every $n \geq 1$, the geometric sum for every $n \in \mathbb{N}$ and every $q \neq 1$; for $q = 1$ the sum equals $n + 1$. They are proved by induction on $n$.
:::

:::formula{#disuguaglianza-di-bernoulli titolo="Bernoulli's inequality"}
$$
(1 + x)^n \geq 1 + nx
$$
It holds for every $x \geq -1$ and every $n \in \mathbb{N}$. With $x = 1$ one obtains $2^n \geq 1 + n$.
:::

:::formula{#fattoriale-binomiale titolo="Factorial and binomial coefficient"}
$$
\begin{gathered}
n! = n \cdot (n-1) \cdots 2 \cdot 1, \qquad 0! = 1, \qquad (n+1)! = (n+1) \cdot n!, \\[8pt]
\binom{n}{k} = \frac{n!}{k!\,(n-k)!} = \frac{n(n-1)\cdots(n-k+1)}{k!}
\end{gathered}
$$
The binomial coefficient is defined for $n, k \in \mathbb{N}$ with $0 \leq k \leq n$ and counts the subsets with $k$ elements of a set with $n$ elements. In computations the factorials are simplified with the recursive formula, for example $\dfrac{10!}{8!} = 10 \cdot 9 = 90$.
:::

:::formula{#proprieta-coefficienti-binomiali titolo="Properties of the binomial coefficients"}
$$
\begin{gathered}
\binom{n}{0} = \binom{n}{n} = 1, \qquad \binom{n}{k} = \binom{n}{n-k}, \\[8pt]
\binom{n}{k} + \binom{n}{k+1} = \binom{n+1}{k+1} \quad (0 \leq k \leq n-1), \\[8pt]
\sum_{k=0}^{n} \binom{n}{k} = 2^n, \qquad \sum_{k=0}^{n} (-1)^k \binom{n}{k} = 0 \quad (n \geq 1)
\end{gathered}
$$
The second line is Pascal's rule, which generates Pascal's triangle. The two sums in the third line follow from the binomial theorem with $a = b = 1$ and with $a = 1$, $b = -1$.
:::

:::formula{#binomio-di-newton titolo="Binomial theorem"}
$$
\begin{gathered}
(a + b)^n = \sum_{k=0}^{n} \binom{n}{k} a^{n-k} b^{k}
= a^n + n\,a^{n-1} b + \binom{n}{2} a^{n-2} b^2 + \cdots + b^n, \\[8pt]
(a+b)^2 = a^2 + 2ab + b^2, \qquad (a+b)^3 = a^3 + 3a^2 b + 3ab^2 + b^3
\end{gathered}
$$
It holds for every $a, b \in \mathbb{R}$ and every $n \in \mathbb{N}$. The term of the expansion that contains $b^k$ is $\dbinom{n}{k} a^{n-k} b^k$.
:::

## Elementary functions and natural domain

The properties of the elementary functions and the rules for the domain are in the chapter [Sets, induction and elementary functions](/en/analisi-1/insiemi/teoria).

:::formula{#proprieta-delle-potenze titolo="Properties of powers"}
$$
\begin{gathered}
a^{x}\,a^{y} = a^{x+y}, \qquad \frac{a^{x}}{a^{y}} = a^{x-y}, \qquad (a^{x})^{y} = a^{xy}, \\[8pt]
(ab)^{x} = a^{x}\,b^{x}, \qquad a^{-x} = \frac{1}{a^{x}}, \qquad a^{0} = 1, \qquad a^{\frac{m}{n}} = \sqrt[n]{a^{m}}
\end{gathered}
$$
They hold for $a, b > 0$ and $x, y \in \mathbb{R}$; in the last one $m \in \mathbb{Z}$ and $n \geq 1$. With integer exponents the same rules also hold for negative bases; a zero base requires positive exponents.
:::

:::formula{#radici-e-valore-assoluto titolo="Roots and absolute value"}
$$
\begin{gathered}
\sqrt{x^2} = |x|, \qquad \left( \sqrt{x} \right)^2 = x \ \ (x \geq 0), \qquad \sqrt{a\,b} = \sqrt{a}\,\sqrt{b} \ \ (a, b \geq 0), \\[8pt]
\sqrt[n]{x^n} = |x| \ \ (n \text{ even}), \qquad \sqrt[n]{x^n} = x \ \ (n \text{ odd})
\end{gathered}
$$
The first holds for every $x \in \mathbb{R}$; for $x = -3$ one has $\sqrt{9} = 3 = |-3|$. Roots with odd index are defined on all of $\mathbb{R}$, those with even index on $[0, +\infty)$.
:::

:::formula{#valore-assoluto titolo="Absolute value and inequalities"}
$$
|x| =
\begin{cases}
x & \text{if } x \geq 0 \\[2pt]
-x & \text{if } x < 0
\end{cases}
\qquad
|xy| = |x|\,|y|, \qquad |x + y| \leq |x| + |y|
$$
$$
\begin{gathered}
|f(x)| < a \iff -a < f(x) < a, \\[6pt]
|f(x)| > a \iff f(x) < -a \ \ \text{or} \ \ f(x) > a
\end{gathered}
$$
The two equivalences hold for $a > 0$. For $a < 0$ the first inequality has no solutions and the second is satisfied at every point of the domain of $f$.
:::

:::formula{#logaritmo titolo="Logarithm and its properties"}
$$
\begin{gathered}
y = \log_a x \iff a^{y} = x, \qquad a^{\log_a x} = x, \qquad \log_a a^{x} = x, \\[8pt]
\log_a (xy) = \log_a x + \log_a y, \qquad \log_a \frac{x}{y} = \log_a x - \log_a y, \\[8pt]
\log_a x^{\alpha} = \alpha \log_a x, \qquad \log_a 1 = 0, \qquad \log_a a = 1
\end{gathered}
$$
They hold for $a > 0$, $a \neq 1$, $x, y > 0$ and $\alpha \in \mathbb{R}$; in the identity $\log_a a^x = x$ the variable $x$ is any real number. The logarithm to base $e$ is denoted by $\ln x$.
:::

:::formula{#cambio-di-base titolo="Change of base and exponential to base e"}
$$
\log_a x = \frac{\log_b x}{\log_b a} = \frac{\ln x}{\ln a}, \qquad
a^{x} = e^{x \ln a}, \qquad
f(x)^{g(x)} = e^{\,g(x) \ln f(x)}
$$
The change of base holds for $a, b > 0$, $a \neq 1$, $b \neq 1$ and $x > 0$. Writing $f(x)^{g(x)}$ as an exponential requires $f(x) > 0$ and is used in limits and in derivatives of powers with variable base and exponent.
:::

:::attenzione
The logarithm of a sum is different from the sum of the logarithms. For example $\ln(1 + 1) = \ln 2$, whereas $\ln 1 + \ln 1 = 0$. Moreover the equality $\log_a x^2 = 2 \log_a x$ requires $x > 0$; for $x \neq 0$ one writes $\log_a x^2 = 2 \log_a |x|$, because with $x = -2$ one has $\log_2 4 = 2$ and $\log_2(-2)$ is not defined.
:::

:::formula{#equazioni-esponenziali titolo="Exponential equations and inequalities"}
$$
\begin{gathered}
a^{x} = b \iff x = \log_a b \quad (b > 0), \\[8pt]
a^{f(x)} > a^{g(x)} \iff f(x) > g(x) \quad (a > 1), \\[6pt]
a^{f(x)} > a^{g(x)} \iff f(x) < g(x) \quad (0 < a < 1)
\end{gathered}
$$
They hold for $a > 0$, $a \neq 1$. For $b \leq 0$ the equation $a^x = b$ has no solutions, because the exponential takes only positive values. The equivalences between inequalities follow from the strict monotonicity of the exponential.
:::

:::formula{#disequazioni-logaritmiche titolo="Logarithmic inequalities"}
$$
a > 1: \quad \log_a f(x) > \log_a g(x) \iff
\begin{cases}
f(x) > g(x) \\[2pt]
g(x) > 0
\end{cases}
$$
$$
0 < a < 1: \quad \log_a f(x) > \log_a g(x) \iff
\begin{cases}
f(x) < g(x) \\[2pt]
f(x) > 0
\end{cases}
$$
The system contains the existence condition of the smaller argument, and the other existence condition follows from the two in the system. With a number $c$ on the right-hand side one writes $c = \log_a a^{c}$, therefore for $a > 1$ the inequality $\log_a f(x) > c$ is equivalent to $f(x) > a^{c}$.
:::

:::formula{#dominio-naturale titolo="Conditions for the natural domain"}
$$
\begin{array}{ll}
\dfrac{N(x)}{D(x)} & D(x) \neq 0 \\[12pt]
\sqrt[n]{g(x)}, \ n \text{ even} & g(x) \geq 0 \\[6pt]
\log_a g(x) & g(x) > 0 \\[6pt]
\tan g(x) & g(x) \neq \dfrac{\pi}{2} + k\pi, \ k \in \mathbb{Z} \\[12pt]
\arcsin g(x), \ \arccos g(x) & -1 \leq g(x) \leq 1 \\[6pt]
f(x)^{g(x)} & f(x) > 0
\end{array}
$$
The conditions relative to the different operations of an expression must hold at the same point, therefore they are collected in a system; the natural domain is the set of solutions of the system. Roots with odd index, exponentials, $\sin$, $\cos$ and $\arctan$ impose no conditions on the argument.
:::

:::formula{#simmetrie-e-periodicita titolo="Symmetries and periodicity"}
$$
\begin{gathered}
f(-x) = f(x) \ \ \text{(even)}, \qquad f(-x) = -f(x) \ \ \text{(odd)}, \\[6pt]
f(x + T) = f(x) \ \ \text{(periodic with period } T\text{)}, \\[8pt]
\sin(\omega x), \ \cos(\omega x) \ \text{have period} \ \frac{2\pi}{|\omega|}, \qquad \tan(\omega x) \ \text{has period} \ \frac{\pi}{|\omega|}
\end{gathered}
$$
Even and odd require a domain symmetric with respect to the origin; the graph of an even function is symmetric with respect to the $y$-axis, that of an odd function with respect to the origin. The periods in the second line are the minimal periods and hold for $\omega \neq 0$.
:::

:::formula{#trasformazioni-del-grafico titolo="Transformations of the graph"}
$$
\begin{array}{ll}
f(x) + k & \text{vertical translation by } k \\[4pt]
f(x - k) & \text{horizontal translation by } k \\[4pt]
a\,f(x) & \text{vertical stretch by a factor } a \\[4pt]
f(ax) & \text{horizontal compression by a factor } a \\[4pt]
-f(x), \ \ f(-x) & \text{reflection across the } x\text{-axis, across the } y\text{-axis} \\[4pt]
|f(x)| & \text{the part with } f(x) < 0 \text{ is reflected across the } x\text{-axis} \\[4pt]
f(|x|) & \text{the part with } x \geq 0 \text{ is kept and reflected across the } y\text{-axis}
\end{array}
$$
The translations are upward and to the right for $k > 0$, downward and to the left for $k < 0$. Stretch and compression refer to $a > 1$; for $0 < a < 1$ the two effects are exchanged.
:::

## Trigonometric formulas

The definitions of the trigonometric functions and the main identities are in the chapter [Sets, induction and elementary functions](/en/analisi-1/insiemi/teoria).

:::formula{#valori-notevoli titolo="Standard values of sine, cosine and tangent"}
$$
\begin{array}{c|cccccc}
x & 0 & \dfrac{\pi}{6} & \dfrac{\pi}{4} & \dfrac{\pi}{3} & \dfrac{\pi}{2} & \pi \\[8pt]
\hline
\sin x & 0 & \dfrac{1}{2} & \dfrac{\sqrt{2}}{2} & \dfrac{\sqrt{3}}{2} & 1 & 0 \\[10pt]
\cos x & 1 & \dfrac{\sqrt{3}}{2} & \dfrac{\sqrt{2}}{2} & \dfrac{1}{2} & 0 & -1 \\[10pt]
\tan x & 0 & \dfrac{\sqrt{3}}{3} & 1 & \sqrt{3} & \text{undef.} & 0
\end{array}
$$
The angles are measured in radians, and the angle of $180^\circ$ corresponds to $\pi$. The values in the other quadrants are obtained with the reduction formulas.
:::

:::formula{#identita-pitagorica titolo="Pythagorean identity and tangent"}
$$
\sin^2 x + \cos^2 x = 1, \qquad
\tan x = \frac{\sin x}{\cos x}, \qquad
1 + \tan^2 x = \frac{1}{\cos^2 x}
$$
The first holds for every $x \in \mathbb{R}$, the other two for $x \neq \dfrac{\pi}{2} + k\pi$ with $k \in \mathbb{Z}$. Sine and cosine take values in $[-1, 1]$ and have period $2\pi$; the tangent has period $\pi$.
:::

:::formula{#archi-associati titolo="Reduction formulas"}
$$
\begin{gathered}
\sin(-x) = -\sin x, \qquad \cos(-x) = \cos x, \qquad \tan(-x) = -\tan x, \\[6pt]
\sin(\pi - x) = \sin x, \qquad \cos(\pi - x) = -\cos x, \\[6pt]
\sin(\pi + x) = -\sin x, \qquad \cos(\pi + x) = -\cos x, \\[6pt]
\sin\left( \frac{\pi}{2} - x \right) = \cos x, \qquad \cos\left( \frac{\pi}{2} - x \right) = \sin x
\end{gathered}
$$
They hold for every $x \in \mathbb{R}$, and for the tangent at every point where it is defined. Sine and tangent are odd functions, the cosine is an even function.
:::

:::formula{#formule-di-addizione titolo="Addition and subtraction formulas"}
$$
\begin{gathered}
\sin(x \pm y) = \sin x \cos y \pm \cos x \sin y, \\[6pt]
\cos(x \pm y) = \cos x \cos y \mp \sin x \sin y, \\[6pt]
\tan(x \pm y) = \frac{\tan x \pm \tan y}{1 \mp \tan x \tan y}
\end{gathered}
$$
The first two hold for every $x, y \in \mathbb{R}$, the third when $\tan x$, $\tan y$ and $\tan(x \pm y)$ are defined.
:::

:::formula{#duplicazione-e-linearizzazione titolo="Double-angle and power-reduction formulas"}
$$
\begin{gathered}
\sin 2x = 2 \sin x \cos x, \qquad
\cos 2x = \cos^2 x - \sin^2 x = 2\cos^2 x - 1 = 1 - 2\sin^2 x, \\[8pt]
\sin^2 x = \frac{1 - \cos 2x}{2}, \qquad \cos^2 x = \frac{1 + \cos 2x}{2}, \qquad
\tan 2x = \frac{2 \tan x}{1 - \tan^2 x}
\end{gathered}
$$
They hold for every $x \in \mathbb{R}$, the last one when $\tan x$ and $\tan 2x$ are defined. The power-reduction formulas, $\sin^2 x$ and $\cos^2 x$ expressed through $\cos 2x$, lower the degree and are used in integrals.
:::

:::formula{#formule-parametriche titolo="Half-angle substitution formulas"}
$$
t = \tan \frac{x}{2}: \qquad
\sin x = \frac{2t}{1 + t^2}, \qquad
\cos x = \frac{1 - t^2}{1 + t^2}, \qquad
\tan x = \frac{2t}{1 - t^2}
$$
They hold for $x \neq \pi + 2k\pi$ with $k \in \mathbb{Z}$; the third also requires $t^2 \neq 1$, that is $x \neq \dfrac{\pi}{2} + k\pi$. They transform a rational expression in $\sin x$ and $\cos x$ into a rational expression in $t$.
:::

:::formula{#combinazione-di-seno-e-coseno titolo="Linear combination of sine and cosine"}
$$
a \sin x + b \cos x = R \sin(x + \varphi), \qquad
R = \sqrt{a^2 + b^2}, \quad \cos\varphi = \frac{a}{R}, \quad \sin\varphi = \frac{b}{R}
$$
It holds for $a, b \in \mathbb{R}$ not both zero. It reduces a linear equation in sine and cosine, such as $\sin x + \cos x = 1$, to an elementary equation; in this case $\sin x + \cos x = \sqrt{2} \sin\left( x + \dfrac{\pi}{4} \right)$.
:::

:::formula{#equazioni-goniometriche titolo="Elementary trigonometric equations"}
$$
\begin{gathered}
\sin x = m \iff x = \arcsin m + 2k\pi \ \ \text{or} \ \ x = \pi - \arcsin m + 2k\pi, \\[6pt]
\cos x = m \iff x = \pm \arccos m + 2k\pi, \qquad
\tan x = m \iff x = \arctan m + k\pi
\end{gathered}
$$
The first two have solutions *only* for $-1 \leq m \leq 1$, the third for every $m \in \mathbb{R}$; in all of them $k \in \mathbb{Z}$. Inequalities are solved on the unit circle over an interval whose length equals the period and are extended by periodicity.
:::

:::formula{#funzioni-goniometriche-inverse titolo="Arcsine, arccosine and arctangent"}
$$
\begin{gathered}
\arcsin : [-1, 1] \to \left[ -\frac{\pi}{2}, \frac{\pi}{2} \right], \qquad
\arccos : [-1, 1] \to [0, \pi], \qquad
\arctan : \mathbb{R} \to \left( -\frac{\pi}{2}, \frac{\pi}{2} \right), \\[8pt]
\arcsin x + \arccos x = \frac{\pi}{2}, \qquad
\arctan x + \arctan \frac{1}{x} = \pm \frac{\pi}{2}
\end{gathered}
$$
The first identity holds for $x \in [-1, 1]$; in the second the sign is $+$ for $x > 0$ and $-$ for $x < 0$. Moreover $\sin(\arcsin x) = x$ for every $x \in [-1, 1]$, whereas $\arcsin(\sin x) = x$ holds *only* for $x \in \left[ -\dfrac{\pi}{2}, \dfrac{\pi}{2} \right]$.
:::

:::formula{#funzioni-iperboliche titolo="Hyperbolic functions"}
$$
\sinh x = \frac{e^{x} - e^{-x}}{2}, \qquad
\cosh x = \frac{e^{x} + e^{-x}}{2}, \qquad
\cosh^2 x - \sinh^2 x = 1
$$
They are defined on $\mathbb{R}$. The function $\sinh x$ is odd with range $\mathbb{R}$, the function $\cosh x$ is even with range $[1, +\infty)$. The inverse of the hyperbolic sine is $\ln\left( x + \sqrt{x^2 + 1} \right)$.
:::

## Complex numbers

The chapter [Complex numbers](/en/analisi-1/numeri-complessi/teoria) contains the proofs and the examples.

:::formula{#operazioni-in-forma-algebrica titolo="Operations in algebraic form"}
$$
\begin{gathered}
z = a + ib, \qquad i^2 = -1, \qquad \operatorname{Re}(z) = a, \qquad \operatorname{Im}(z) = b, \\[6pt]
(a + ib)(c + id) = (ac - bd) + i(ad + bc), \\[6pt]
\frac{a + ib}{c + id} = \frac{(a + ib)(c - id)}{c^2 + d^2} = \frac{ac + bd}{c^2 + d^2} + i\,\frac{bc - ad}{c^2 + d^2}
\end{gathered}
$$
They hold for $a, b, c, d \in \mathbb{R}$, and the quotient for $c + id \neq 0$. The powers of $i$ repeat with period $4$, since $i^2 = -1$, $i^3 = -i$, $i^4 = 1$; therefore $i^n = i^r$, where $r$ is the remainder of the division of $n$ by $4$.
:::

:::formula{#coniugato-e-modulo titolo="Conjugate and modulus"}
$$
\begin{gathered}
\bar{z} = a - ib, \qquad |z| = \sqrt{a^2 + b^2}, \qquad z\,\bar{z} = |z|^2, \qquad \frac{1}{z} = \frac{\bar{z}}{|z|^2}, \\[6pt]
z + \bar{z} = 2\operatorname{Re}(z), \qquad z - \bar{z} = 2i\operatorname{Im}(z), \qquad
\overline{z + w} = \bar{z} + \bar{w}, \qquad \overline{zw} = \bar{z}\,\bar{w}, \\[6pt]
|zw| = |z|\,|w|, \qquad \left| \frac{z}{w} \right| = \frac{|z|}{|w|}, \qquad |z + w| \leq |z| + |w|
\end{gathered}
$$
They hold for $z = a + ib$ and $w$ arbitrary complex numbers, with $z \neq 0$ in the formula for the reciprocal and $w \neq 0$ in the quotient. The number $z$ is real *if and only if* $z = \bar{z}$.
:::

:::formula{#forma-trigonometrica titolo="Trigonometric form and principal argument"}
$$
z = \rho\,(\cos\theta + i \sin\theta), \qquad \rho = |z|, \qquad \cos\theta = \frac{a}{\rho}, \quad \sin\theta = \frac{b}{\rho}
$$
$$
\theta =
\begin{cases}
\arctan \dfrac{b}{a} & \text{if } a > 0 \\[10pt]
\arctan \dfrac{b}{a} + \pi & \text{if } a < 0, \ b \geq 0 \\[10pt]
\arctan \dfrac{b}{a} - \pi & \text{if } a < 0, \ b < 0 \\[10pt]
\dfrac{\pi}{2} & \text{if } a = 0, \ b > 0 \\[10pt]
-\dfrac{\pi}{2} & \text{if } a = 0, \ b < 0
\end{cases}
$$
It holds for $z = a + ib \neq 0$. The formula gives the principal argument $\theta \in (-\pi, \pi]$, and every other argument differs from $\theta$ by an integer multiple of $2\pi$.
:::

:::formula{#formula-di-eulero titolo="Euler's formula and exponential form"}
$$
\begin{gathered}
e^{i\theta} = \cos\theta + i \sin\theta, \qquad z = \rho\, e^{i\theta}, \qquad \bar{z} = \rho\, e^{-i\theta}, \\[6pt]
\cos\theta = \frac{e^{i\theta} + e^{-i\theta}}{2}, \qquad \sin\theta = \frac{e^{i\theta} - e^{-i\theta}}{2i}
\end{gathered}
$$
They hold for $\theta \in \mathbb{R}$ and $\rho = |z| > 0$. The exponentials $e^{i\theta}$ and $e^{i\varphi}$ coincide *if and only if* $\theta - \varphi$ is an integer multiple of $2\pi$. Frequently used values are $e^{i\pi} = -1$ and $e^{i\frac{\pi}{2}} = i$.
:::

:::formula{#prodotto-e-de-moivre titolo="Product, quotient and De Moivre's formula"}
$$
\begin{gathered}
z\,w = \rho\sigma\, e^{i(\theta + \varphi)}, \qquad \frac{z}{w} = \frac{\rho}{\sigma}\, e^{i(\theta - \varphi)}, \\[6pt]
z^n = \rho^n e^{in\theta} = \rho^n \bigl( \cos(n\theta) + i \sin(n\theta) \bigr)
\end{gathered}
$$
They hold for $z = \rho e^{i\theta}$ and $w = \sigma e^{i\varphi}$ with $\rho, \sigma > 0$, and for every integer $n \geq 1$. In the product the moduli are multiplied and the arguments are added.
:::

:::formula{#radici-n-esime titolo="n-th roots"}
$$
z^n = w \iff z = z_k = \sqrt[n]{\sigma}\; e^{\,i\frac{\varphi + 2k\pi}{n}}, \qquad k = 0, 1, \dots, n - 1
$$
It holds for $w = \sigma e^{i\varphi} \neq 0$ and $n \geq 1$ integer. The solutions are *exactly* $n$, have modulus $\sqrt[n]{\sigma}$ and are the vertices of a regular polygon with $n$ sides centered at the origin. The $n$-th roots of unity are $e^{\,i\frac{2k\pi}{n}}$; for $n = 4$ they are $1$, $i$, $-1$, $-i$.
:::

:::formula{#equazioni-di-secondo-grado titolo="Quadratic equations in the complex field"}
$$
a z^2 + b z + c = 0, \qquad \Delta = b^2 - 4ac < 0, \qquad z = \frac{-b \pm i\sqrt{-\Delta}}{2a}
$$
It holds for $a, b, c \in \mathbb{R}$ with $a \neq 0$, and the two solutions are complex conjugates. With complex coefficients the solutions are $z = \dfrac{-b \pm \delta}{2a}$, where $\delta$ is either of the two complex square roots of $\Delta$.
:::

:::formula{#equazioni-con-coniugato-e-modulo titolo="Equations with conjugate and modulus"}
$$
z = x + iy, \qquad \bar{z} = x - iy, \qquad |z| = \sqrt{x^2 + y^2}, \qquad
A = B \iff
\begin{cases}
\operatorname{Re}(A) = \operatorname{Re}(B) \\[2pt]
\operatorname{Im}(A) = \operatorname{Im}(B)
\end{cases}
$$
It is used for equations in which $\bar{z}$, $|z|$, $\operatorname{Re}(z)$ or $\operatorname{Im}(z)$ appear. Setting $z = x + iy$ with $x, y \in \mathbb{R}$, the equality of the two sides $A$ and $B$ is equivalent to the system of two real equations in the unknowns $x$ and $y$.
:::

:::formula{#luoghi-geometrici titolo="Loci in the complex plane"}
$$
\begin{gathered}
|z - z_0| = r \ \ \text{circle with center } z_0 \text{ and radius } r, \\[6pt]
|z - z_0| \leq r \ \ \text{disk with center } z_0 \text{ and radius } r, \\[6pt]
|z - z_1| = |z - z_2| \ \ \text{perpendicular bisector of the segment with endpoints } z_1, z_2, \\[6pt]
\operatorname{Re}(z) = k \ \ \text{line } x = k, \qquad \operatorname{Im}(z) = k \ \ \text{line } y = k
\end{gathered}
$$
They hold for $r > 0$, $z_1 \neq z_2$ and $k \in \mathbb{R}$. The number $|z - w|$ is the distance between the points $z$ and $w$.
:::

:::formula{#fattorizzazione-dei-polinomi titolo="Fundamental theorem of algebra and real factorization"}
$$
\begin{gathered}
p(z) = a_n (z - z_1)(z - z_2) \cdots (z - z_n), \\[6pt]
(z - z_0)(z - \bar{z}_0) = z^2 - 2\alpha z + \alpha^2 + \beta^2 \quad (z_0 = \alpha + i\beta)
\end{gathered}
$$
Every polynomial of degree $n \geq 1$ with complex coefficients has $n$ roots $z_1, \dots, z_n$, counted with multiplicity. If the coefficients are real, the non-real roots appear in conjugate pairs with the same multiplicity, and the product of the two conjugate factors is a real quadratic with discriminant $-4\beta^2 < 0$.
:::

## Limits, indeterminate forms and continuity

The definitions and the theorems are in the chapter [Limits and continuity](/en/analisi-1/limiti/teoria).

:::formula{#operazioni-con-gli-infiniti titolo="Operations with infinite limits"}
$$
\begin{gathered}
L + (\pm\infty) = \pm\infty, \qquad (+\infty) + (+\infty) = +\infty, \qquad (-\infty) + (-\infty) = -\infty, \\[6pt]
L \cdot (\pm\infty) = \pm\infty \ \ (L > 0), \qquad L \cdot (\pm\infty) = \mp\infty \ \ (L < 0), \qquad (+\infty) \cdot (\pm\infty) = \pm\infty, \\[6pt]
\frac{L}{\pm\infty} = 0, \qquad \frac{L}{0^{+}} = +\infty \ \ (L > 0), \qquad \frac{L}{0^{-}} = -\infty \ \ (L > 0)
\end{gathered}
$$
Here $L \in \mathbb{R}$ is the limit of one of the two terms, and $0^{+}$, $0^{-}$ denote a function that tends to $0$ while staying positive or negative; for $L < 0$ the signs in the last two are exchanged. If $f \to L$ and $g \to M$ with $L, M \in \mathbb{R}$, the limits of sum, product and quotient are computed with the operations on $L$ and $M$, with $M \neq 0$ in the quotient.
:::

:::formula{#forme-indeterminate titolo="Indeterminate forms"}
$$
+\infty - \infty, \qquad 0 \cdot \infty, \qquad \frac{0}{0}, \qquad \frac{\infty}{\infty}, \qquad 1^{\infty}, \qquad 0^{0}, \qquad \infty^{0}
$$
In these cases the limit depends on the functions and not only on the limits of the parts. The last three are reduced to $0 \cdot \infty$ with $f(x)^{g(x)} = e^{\,g(x) \ln f(x)}$, valid for $f(x) > 0$. The quotient $\dfrac{L}{0}$ with $L \neq 0$ gives an infinite limit, with the sign determined by the sign of $L$ and by that of the denominator.
:::

:::formula{#limiti-delle-funzioni-elementari titolo="Limits of the elementary functions"}
$$
\begin{gathered}
\lim_{x \to +\infty} e^{x} = +\infty, \qquad \lim_{x \to -\infty} e^{x} = 0, \qquad
\lim_{x \to 0^{+}} \ln x = -\infty, \qquad \lim_{x \to +\infty} \ln x = +\infty, \\[6pt]
\lim_{x \to +\infty} x^{\alpha} = +\infty \ \ (\alpha > 0), \qquad \lim_{x \to +\infty} x^{\alpha} = 0 \ \ (\alpha < 0), \qquad
\lim_{x \to \pm\infty} \arctan x = \pm\frac{\pi}{2}, \\[6pt]
\lim_{x \to +\infty} a^{x} = +\infty \ \ (a > 1), \qquad \lim_{x \to +\infty} a^{x} = 0 \ \ (0 < a < 1), \qquad
\lim_{x \to 0^{\pm}} \frac{1}{x} = \pm\infty
\end{gathered}
$$
For $x \to -\infty$ one has $a^x \to 0$ if $a > 1$ and $a^x \to +\infty$ if $0 < a < 1$. Every elementary function is continuous on its domain, therefore at a point of the domain the limit is the value of the function.
:::

:::formula{#rapporti-di-polinomi titolo="Polynomials and quotients of polynomials at infinity"}
$$
\lim_{x \to \pm\infty} \frac{a_n x^n + \cdots + a_0}{b_m x^m + \cdots + b_0}
= \lim_{x \to \pm\infty} \frac{a_n x^n}{b_m x^m}
=
\begin{cases}
\dfrac{a_n}{b_m} & \text{if } n = m \\[10pt]
0 & \text{if } n < m \\[4pt]
\pm\infty & \text{if } n > m
\end{cases}
$$
It holds for $a_n \neq 0$ and $b_m \neq 0$, because for $x \to \pm\infty$ a polynomial is asymptotic to its term of highest degree. For $n > m$ the sign of the infinity is the sign of $\dfrac{a_n}{b_m}\, x^{\,n-m}$.
:::

:::formula{#scomposizioni-e-ruffini titolo="Factorizations and the factor theorem"}
$$
\begin{gathered}
a^2 - b^2 = (a - b)(a + b), \qquad
a^3 \mp b^3 = (a \mp b)(a^2 \pm ab + b^2), \\[6pt]
a^n - b^n = (a - b)\left( a^{n-1} + a^{n-2} b + \cdots + a b^{n-2} + b^{n-1} \right), \\[6pt]
a x^2 + b x + c = a\,(x - x_1)(x - x_2)
\end{gathered}
$$
The last one holds for $a \neq 0$ and $\Delta = b^2 - 4ac \geq 0$, with $x_1$ and $x_2$ roots of the quadratic, coincident if $\Delta = 0$. By the **factor theorem**, if $P(x_0) = 0$ the polynomial $P(x)$ is divisible by $x - x_0$; in the $\dfrac{0}{0}$ limits of quotients of polynomials for $x \to x_0$ the factor $x - x_0$ is factored out and canceled.
:::

:::formula{#razionalizzazione titolo="Rationalization"}
$$
\begin{gathered}
\sqrt{A} - \sqrt{B} = \frac{A - B}{\sqrt{A} + \sqrt{B}}, \qquad
\sqrt[3]{A} - \sqrt[3]{B} = \frac{A - B}{\sqrt[3]{A^2} + \sqrt[3]{A B} + \sqrt[3]{B^2}}, \\[8pt]
\lim_{x \to +\infty} \left( \sqrt{x^2 + bx + c} - x \right) = \frac{b}{2}
\end{gathered}
$$
The first holds for $A, B \geq 0$ not both zero, the second for $A, B$ real and not both zero; the third for every $b, c \in \mathbb{R}$. They are used for the forms $+\infty - \infty$ and $\dfrac{0}{0}$ with roots. For $x \to -\infty$ one has $\sqrt{x^2} = |x| = -x$, therefore $\sqrt{x^2 + bx + c} \sim -x$.
:::

:::formula{#cambio-di-variabile-nei-limiti titolo="Change of variable in limits"}
$$
\lim_{x \to x_0} f(g(x)) = \lim_{y \to y_0} f(y) = L
$$
It holds if $g(x) \to y_0$ for $x \to x_0$, $f(y) \to L$ for $y \to y_0$ and $g(x) \neq y_0$ in a neighborhood of $x_0$, except possibly at $x_0$; the last condition can be omitted if $f$ is continuous at $y_0$. For example $\displaystyle\lim_{x \to 0} \frac{\sin 3x}{3x} = \lim_{y \to 0} \frac{\sin y}{y} = 1$ with $y = 3x$.
:::

:::formula{#teorema-del-confronto titolo="Squeeze theorem"}
$$
\begin{gathered}
g(x) \leq f(x) \leq h(x), \quad g(x) \to L, \quad h(x) \to L \implies f(x) \to L, \\[6pt]
|f(x)| \leq C, \quad g(x) \to 0 \implies f(x)\, g(x) \to 0
\end{gathered}
$$
The inequalities are required in a neighborhood of $x_0$, except possibly at $x_0$, with $L \in \mathbb{R}$ and $C$ a constant. With an infinite limit one inequality suffices, because from $f(x) \geq g(x)$ and $g(x) \to +\infty$ it follows that $f(x) \to +\infty$. From the second line it follows, for example, that $\dfrac{\sin x}{x} \to 0$ for $x \to +\infty$.
:::

:::formula{#continuita-e-discontinuita titolo="Continuity and points of discontinuity"}
$$
f \ \text{continuous at } x_0 \iff \lim_{x \to x_0} f(x) = f(x_0)
$$
It holds for $x_0$ belonging to the domain and an accumulation point of it. A point of discontinuity $x_0$ is called

- removable, if the limit exists finite and is different from $f(x_0)$, or $f(x_0)$ is not defined;
- a jump discontinuity (or of the first kind), if the one-sided limits exist finite and are different;
- of the second kind, if *at least one* of the one-sided limits is infinite or does not exist.
:::

:::formula{#teoremi-sulle-funzioni-continue titolo="Bolzano (zeros), Weierstrass and intermediate value theorems"}
$$
\begin{gathered}
f(a)\, f(b) < 0 \implies \text{there exists } c \in (a, b) \text{ with } f(c) = 0, \\[6pt]
\text{there exist } x_m, x_M \in [a, b] \text{ with } f(x_m) \leq f(x) \leq f(x_M) \ \text{for every } x \in [a, b], \\[6pt]
f\bigl( [a, b] \bigr) = [m, M]
\end{gathered}
$$
The three statements require $f$ continuous on the closed and bounded interval $[a, b]$; in the third line $m$ and $M$ are the minimum and the maximum of $f$ on $[a, b]$. Bolzano’s theorem on zeros locates the solutions of $f(x) = 0$, the Weierstrass theorem guarantees the existence of maximum and minimum.
:::

:::formula{#asintoti titolo="Vertical, horizontal and oblique asymptotes"}
$$
\begin{gathered}
x = x_0 \ \text{vertical:} \quad \lim_{x \to x_0^{+}} f(x) = \pm\infty \ \ \text{or} \ \ \lim_{x \to x_0^{-}} f(x) = \pm\infty, \\[8pt]
y = L \ \text{horizontal:} \quad \lim_{x \to +\infty} f(x) = L \in \mathbb{R}, \\[8pt]
y = mx + q \ \text{oblique:} \quad
\begin{cases}
\displaystyle m = \lim_{x \to +\infty} \frac{f(x)}{x} \in \mathbb{R}, \ m \neq 0 \\[10pt]
\displaystyle q = \lim_{x \to +\infty} \bigl( f(x) - mx \bigr) \in \mathbb{R}
\end{cases}
\end{gathered}
$$
For $x \to -\infty$ the definitions are analogous, and the asymptotes may be different on the two sides. The oblique asymptote exists *if and only if* both limits exist finite, with $m \neq 0$. On the same side a function has at most one horizontal or oblique asymptote.
:::

## Standard limits and hierarchy of infinities

The standard limits are proved in the chapter [Limits and continuity](/en/analisi-1/limiti/teoria).

:::formula{#limiti-notevoli-goniometrici titolo="Standard trigonometric limits"}
$$
\begin{gathered}
\lim_{x \to 0} \frac{\sin x}{x} = 1, \qquad
\lim_{x \to 0} \frac{1 - \cos x}{x^2} = \frac{1}{2}, \qquad
\lim_{x \to 0} \frac{\tan x}{x} = 1, \\[8pt]
\lim_{x \to 0} \frac{\arcsin x}{x} = 1, \qquad
\lim_{x \to 0} \frac{\arctan x}{x} = 1
\end{gathered}
$$
They hold with $x$ measured in radians. In place of $x$ one can write a function $f(x)$ with $f(x) \to 0$ for $x \to x_0$ and $f(x) \neq 0$ near $x_0$, for example $\displaystyle\lim_{x \to x_0} \frac{\sin f(x)}{f(x)} = 1$. They are used for the forms $\dfrac{0}{0}$ with trigonometric functions.
:::

:::formula{#limiti-notevoli-con-e titolo="Standard limits with the number e"}
$$
\lim_{x \to \pm\infty} \left( 1 + \frac{1}{x} \right)^{x} = e, \qquad
\lim_{x \to \pm\infty} \left( 1 + \frac{a}{x} \right)^{x} = e^{a}, \qquad
\lim_{x \to 0} (1 + x)^{\frac{1}{x}} = e
$$
The second holds for every $a \in \mathbb{R}$. The number $e = 2.71828\ldots$ is the base of the natural logarithms. They are used for the forms $1^{\infty}$.
:::

:::formula{#limiti-notevoli-esponenziali titolo="Standard exponential and logarithmic limits"}
$$
\begin{gathered}
\lim_{x \to 0} \frac{\ln(1 + x)}{x} = 1, \qquad
\lim_{x \to 0} \frac{e^{x} - 1}{x} = 1, \qquad
\lim_{x \to 0} \frac{(1 + x)^{\alpha} - 1}{x} = \alpha, \\[8pt]
\lim_{x \to 0} \frac{a^{x} - 1}{x} = \ln a, \qquad
\lim_{x \to 0} \frac{\log_a (1 + x)}{x} = \frac{1}{\ln a}
\end{gathered}
$$
They hold for $\alpha \in \mathbb{R}$ and $a > 0$, with $a \neq 1$ in the last one. As for the trigonometric limits, in place of $x$ one can write a function that tends to $0$ and does not vanish near the point.
:::

:::formula{#forma-uno-alla-infinito titolo="The form one to the infinity"}
$$
\lim_{x \to x_0} f(x)^{g(x)} = e^{\,L}, \qquad L = \lim_{x \to x_0} g(x)\,\bigl( f(x) - 1 \bigr)
$$
It holds if $f(x) > 0$, $f(x) \to 1$, $g(x) \to \pm\infty$ and the limit $L$ exists finite; if $L = +\infty$ the limit equals $+\infty$, if $L = -\infty$ it equals $0$. The formula follows from $f(x)^{g(x)} = e^{\,g(x) \ln f(x)}$ and from $\ln f(x) \sim f(x) - 1$.
:::

:::formula{#funzioni-asintotiche titolo="Asymptotic equivalences as x tends to 0"}
$$
\begin{gathered}
\sin x \sim x, \qquad \tan x \sim x, \qquad \arcsin x \sim x, \qquad \arctan x \sim x, \qquad 1 - \cos x \sim \frac{x^2}{2}, \\[8pt]
e^{x} - 1 \sim x, \qquad a^{x} - 1 \sim x \ln a, \qquad \ln(1 + x) \sim x, \qquad (1 + x)^{\alpha} - 1 \sim \alpha x
\end{gathered}
$$
They hold for $x \to 0$, with $a > 0$, $a \neq 1$ and $\alpha \neq 0$, and in place of $x$ one can write an infinitesimal function. In a product or in a quotient a factor can be replaced by an asymptotically equivalent function without changing the limit. The notation $f \sim g$ means $\dfrac{f(x)}{g(x)} \to 1$, the notation $f = o(g)$ means $\dfrac{f(x)}{g(x)} \to 0$.
:::

:::attenzione
Asymptotically equivalent functions are substituted in products and quotients, and substitution in sums and differences may give a wrong result. For $x \to 0$ one has $\sin x \sim x$ and $\displaystyle\lim_{x \to 0} \frac{\sin x - x}{x^3} = -\frac{1}{6}$, whereas substituting $x$ for $\sin x$ would give $0$. In these cases Taylor expansions are used.
:::

:::formula{#gerarchia-degli-infiniti titolo="Hierarchy of infinities"}
$$
\lim_{x \to +\infty} \frac{(\ln x)^{\beta}}{x^{\alpha}} = 0, \qquad
\lim_{x \to +\infty} \frac{x^{\alpha}}{a^{x}} = 0, \qquad
\lim_{x \to 0^{+}} x^{\alpha}\, |\ln x|^{\beta} = 0
$$
They hold for $\alpha > 0$, $\beta > 0$ and $a > 1$. For $x \to +\infty$ the logarithm grows more slowly than *every* power, and every power more slowly than every exponential with base greater than $1$. In the forms $\dfrac{\infty}{\infty}$ one factors out, in the numerator and in the denominator, the term that grows fastest.
:::

:::formula{#gerarchia-per-le-successioni titolo="Hierarchy of infinities for sequences"}
$$
\lim_{n \to +\infty} \frac{(\ln n)^{\beta}}{n^{\alpha}} = 0, \qquad
\lim_{n \to +\infty} \frac{n^{\alpha}}{a^{n}} = 0, \qquad
\lim_{n \to +\infty} \frac{a^{n}}{n!} = 0, \qquad
\lim_{n \to +\infty} \frac{n!}{n^{n}} = 0
$$
They hold for $\alpha > 0$, $\beta > 0$ and $a > 1$. In order of growth the infinities are $(\ln n)^{\beta}$, $n^{\alpha}$, $a^n$, $n!$, $n^n$.
:::

:::formula{#limiti-notevoli-di-successioni titolo="Standard limits of sequences"}
$$
\begin{gathered}
\lim_{n \to +\infty} \sqrt[n]{n} = 1, \qquad
\lim_{n \to +\infty} \sqrt[n]{a} = 1, \qquad
\lim_{n \to +\infty} \left( 1 + \frac{a}{n} \right)^{n} = e^{a}, \\[8pt]
\lim_{n \to +\infty} q^{n} =
\begin{cases}
0 & \text{if } |q| < 1 \\[2pt]
1 & \text{if } q = 1 \\[2pt]
+\infty & \text{if } q > 1
\end{cases}
\end{gathered}
$$
The second holds for $a > 0$, the third for every $a \in \mathbb{R}$. For $q \leq -1$ the sequence $q^n$ has no limit. The first limit follows from $\sqrt[n]{n} = e^{\frac{\ln n}{n}}$ and from the hierarchy of infinities.
:::

## Derivatives

The differentiation rules are proved in the chapter [Differential calculus and Taylor](/en/analisi-1/derivate/teoria).

:::formula{#derivata-e-retta-tangente titolo="Derivative, one-sided derivatives and tangent line"}
$$
\begin{gathered}
f'(x_0) = \lim_{h \to 0} \frac{f(x_0 + h) - f(x_0)}{h}, \qquad
f'_{\pm}(x_0) = \lim_{h \to 0^{\pm}} \frac{f(x_0 + h) - f(x_0)}{h}, \\[8pt]
y = f(x_0) + f'(x_0)\,(x - x_0)
\end{gathered}
$$
The function $f$ is differentiable at the point $x_0$, interior to the domain, if the first limit exists *finite*, and this happens *if and only if* the one-sided derivatives exist finite and coincide. The third formula is the tangent line to the graph at the point $(x_0, f(x_0))$. A function differentiable at $x_0$ is continuous at $x_0$.
:::

:::formula{#regole-di-derivazione titolo="Differentiation rules"}
$$
\begin{gathered}
(f + g)' = f' + g', \qquad (c\,f)' = c\,f', \qquad (f\,g)' = f'\,g + f\,g', \\[8pt]
\left( \frac{f}{g} \right)' = \frac{f'\,g - f\,g'}{g^2}, \qquad \left( \frac{1}{g} \right)' = -\frac{g'}{g^2}
\end{gathered}
$$
They hold at the points where $f$ and $g$ are differentiable, with $c \in \mathbb{R}$ and $g \neq 0$ in the last two.
:::

:::formula{#derivata-composta-e-inversa titolo="Derivative of the composite function and of the inverse"}
$$
(f \circ g)'(x) = f'(g(x))\, g'(x), \qquad (f^{-1})'(y_0) = \frac{1}{f'(x_0)} \quad (y_0 = f(x_0))
$$
The first holds if $g$ is differentiable at $x$ and $f$ is differentiable at $g(x)$; with several compositions it is applied in a chain, from the outside inward. The second holds if $f$ is invertible and differentiable at $x_0$ with $f'(x_0) \neq 0$, and if $f^{-1}$ is continuous at $y_0$.
:::

:::formula{#derivate-elementari titolo="Derivatives of the elementary functions"}
$$
\begin{array}{ll|ll}
f(x) & f'(x) & f(x) & f'(x) \\
\hline
x^{\alpha} & \alpha\, x^{\alpha - 1} & \cos x & -\sin x \\[8pt]
e^{x} & e^{x} & \tan x & \dfrac{1}{\cos^2 x} = 1 + \tan^2 x \\[10pt]
a^{x} & a^{x} \ln a & \arcsin x & \dfrac{1}{\sqrt{1 - x^2}} \\[10pt]
\ln x & \dfrac{1}{x} & \arccos x & -\dfrac{1}{\sqrt{1 - x^2}} \\[10pt]
\sin x & \cos x & \arctan x & \dfrac{1}{1 + x^2}
\end{array}
$$
Each formula holds at the interior points of the domain of the function, with $a > 0$ and, for $\arcsin$ and $\arccos$, with $-1 < x < 1$. The formula for $x^{\alpha}$ holds for $x > 0$ and every $\alpha \in \mathbb{R}$, on all of $\mathbb{R}$ for $\alpha$ a positive integer and for $x \neq 0$ with $\alpha$ a negative integer. The derivative of a constant is $0$.
:::

:::formula{#altre-derivate titolo="Other frequently used derivatives"}
$$
\begin{array}{ll|ll}
f(x) & f'(x) & f(x) & f'(x) \\
\hline
\sqrt{x} & \dfrac{1}{2\sqrt{x}} & \log_a x & \dfrac{1}{x \ln a} \\[10pt]
\dfrac{1}{x} & -\dfrac{1}{x^2} & \ln |x| & \dfrac{1}{x} \\[10pt]
|x| & \dfrac{x}{|x|} & \sinh x & \cosh x \\[10pt]
\sqrt[3]{x} & \dfrac{1}{3\sqrt[3]{x^2}} & \cosh x & \sinh x
\end{array}
$$
They hold for $x > 0$ in the square root and in $\log_a x$, with $a > 0$ and $a \neq 1$; for $x \neq 0$ in $\dfrac{1}{x}$, $\ln|x|$, $|x|$ and $\sqrt[3]{x}$; for every $x$ in the hyperbolic functions. At the point $0$ the functions $|x|$ and $\sqrt[3]{x}$ are not differentiable.
:::

:::formula{#derivate-di-funzioni-composte titolo="Derivatives of frequent composite functions"}
$$
\begin{gathered}
\left( [f(x)]^{\alpha} \right)' = \alpha\, [f(x)]^{\alpha - 1} f'(x), \qquad
\left( \sqrt{f(x)} \right)' = \frac{f'(x)}{2\sqrt{f(x)}}, \\[8pt]
\left( e^{f(x)} \right)' = e^{f(x)} f'(x), \qquad
\left( \ln |f(x)| \right)' = \frac{f'(x)}{f(x)}, \\[8pt]
\left( \sin f(x) \right)' = \cos f(x)\; f'(x), \qquad
\left( \arctan f(x) \right)' = \frac{f'(x)}{1 + [f(x)]^2}
\end{gathered}
$$
They are the chain rule applied to the elementary derivatives and hold where $f$ is differentiable and the outer function is differentiable at $f(x)$. In particular the root requires $f(x) > 0$, the logarithm $f(x) \neq 0$, the power with arbitrary real $\alpha$ $f(x) > 0$.
:::

:::formula{#derivata-di-f-alla-g titolo="Derivative of a power with variable base and exponent"}
$$
\left( f(x)^{g(x)} \right)' = f(x)^{g(x)} \left( g'(x) \ln f(x) + g(x)\, \frac{f'(x)}{f(x)} \right)
$$
It holds where $f(x) > 0$ and $f$, $g$ are differentiable. It is obtained by differentiating $e^{\,g(x) \ln f(x)}$; for example $\left( x^{x} \right)' = x^{x} (\ln x + 1)$ for $x > 0$.
:::

:::formula{#derivate-n-esime titolo="Standard n-th derivatives"}
$$
\begin{gathered}
\left( e^{ax} \right)^{(n)} = a^{n} e^{ax}, \qquad
(\sin x)^{(n)} = \sin\left( x + \frac{n\pi}{2} \right), \qquad
(\cos x)^{(n)} = \cos\left( x + \frac{n\pi}{2} \right), \\[8pt]
\left( \frac{1}{1 - x} \right)^{(n)} = \frac{n!}{(1 - x)^{n+1}}, \qquad
\bigl( \ln(1 + x) \bigr)^{(n)} = \frac{(-1)^{n-1} (n-1)!}{(1 + x)^{n}}
\end{gathered}
$$
They hold for every $n \geq 1$ and $a \in \mathbb{R}$, with $x \neq 1$ in the fourth and $x > -1$ in the fifth. They give the coefficients $\dfrac{f^{(n)}(0)}{n!}$ of the Maclaurin polynomials.
:::

:::formula{#punti-di-non-derivabilita titolo="Corner points, cusps and inflection points with vertical tangent"}
$$
\begin{gathered}
\text{corner point:} \quad f'_{-}(x_0) \neq f'_{+}(x_0), \ \text{at least one finite}, \\[6pt]
\text{cusp:} \quad f'_{-}(x_0) = \pm\infty, \ \ f'_{+}(x_0) = \mp\infty, \\[6pt]
\text{inflection point with vertical tangent:} \quad f'_{-}(x_0) = f'_{+}(x_0) = +\infty \ \ \text{or} \ \ -\infty
\end{gathered}
$$
The classification concerns the points where $f$ is continuous and not differentiable, and the one-sided derivatives are the one-sided limits of the difference quotient. At the point $0$ the function $|x|$ has a corner point, $\sqrt{|x|}$ a cusp, $\sqrt[3]{x}$ an inflection point with vertical tangent.
:::

## Theorems of differential calculus

The theorems with their proofs are in the chapter [Differential calculus and Taylor](/en/analisi-1/derivate/teoria).

:::formula{#teorema-di-fermat titolo="Fermat's theorem"}
$$
x_0 \ \text{point of local maximum or minimum} \implies f'(x_0) = 0
$$
It holds if $x_0$ is interior to the domain and $f$ is differentiable at $x_0$. The condition $f'(x_0) = 0$ is *necessary* and not sufficient, because $x^3$ has zero derivative at $0$ and is strictly increasing.
:::

:::formula{#teorema-di-rolle titolo="Rolle's theorem"}
$$
f(a) = f(b) \implies \text{there exists } c \in (a, b) \text{ with } f'(c) = 0
$$
It holds for $f$ continuous on $[a, b]$ and differentiable on $(a, b)$.
:::

:::formula{#teorema-di-lagrange titolo="Mean value theorem (Lagrange)"}
$$
\begin{gathered}
\text{there exists } c \in (a, b) \text{ with } f'(c) = \frac{f(b) - f(a)}{b - a}, \\[8pt]
|f'(x)| \leq K \ \text{on } (a, b) \implies |f(b) - f(a)| \leq K\,(b - a)
\end{gathered}
$$
It holds for $f$ continuous on $[a, b]$ and differentiable on $(a, b)$. The estimate in the second line follows from the first and is used to prove inequalities.
:::

:::formula{#teorema-di-cauchy titolo="Cauchy's mean value theorem"}
$$
\text{there exists } c \in (a, b) \text{ with } \frac{f'(c)}{g'(c)} = \frac{f(b) - f(a)}{g(b) - g(a)}
$$
It holds for $f$ and $g$ continuous on $[a, b]$ and differentiable on $(a, b)$, with $g'(x) \neq 0$ for every $x \in (a, b)$. For $g(x) = x$ one obtains the mean value theorem.
:::

:::formula{#monotonia-e-segno-della-derivata titolo="Monotonicity and sign of the derivative"}
$$
\begin{gathered}
f' \geq 0 \ \text{on } I \iff f \ \text{increasing on } I, \\[6pt]
f' \leq 0 \ \text{on } I \iff f \ \text{decreasing on } I, \\[6pt]
f' > 0 \ \text{on } I \implies f \ \text{strictly increasing on } I, \\[6pt]
f' = 0 \ \text{on } I \implies f \ \text{constant on } I
\end{gathered}
$$
They hold for $f$ differentiable on an *interval* $I$. On a union of intervals they are applied to each interval separately. For example the function $\dfrac{1}{x}$ has negative derivative on $\mathbb{R} \setminus \{0\}$, but satisfies $f(-1) < f(1)$, therefore it is not decreasing on $\mathbb{R} \setminus \{0\}$.
:::

:::formula{#limite-della-derivata titolo="Limit of the derivative"}
$$
\lim_{x \to x_0} f'(x) = L \in \mathbb{R} \implies f \ \text{differentiable at } x_0 \ \text{and} \ f'(x_0) = L
$$
It holds for $f$ continuous at $x_0$ and differentiable in a neighborhood of $x_0$, except possibly at $x_0$; with the one-sided limits of $f'$ one obtains the one-sided derivatives. It is used at the junction points of piecewise-defined functions. If the limit of $f'$ does not exist, the criterion gives no information and one computes the limit of the difference quotient.
:::

:::formula{#teorema-di-de-l-hopital titolo="L'Hôpital's rule"}
$$
\lim_{x \to x_0} \frac{f(x)}{g(x)} = \lim_{x \to x_0} \frac{f'(x)}{g'(x)}
$$
It holds if the conditions
$$
\begin{cases}
f, g \ \text{differentiable on } U \setminus \{x_0\}, \ \ g'(x) \neq 0 \ \text{on } U \setminus \{x_0\} \\[4pt]
f, g \to 0 \ \ \text{or} \ \ |f|, |g| \to +\infty \\[4pt]
\text{the limit of } \dfrac{f'}{g'} \ \text{exists, finite or infinite}
\end{cases}
$$
are satisfied, where $U$ is a neighborhood of $x_0 \in \mathbb{R} \cup \{\pm\infty\}$; the same holds for one-sided limits. The forms $0 \cdot \infty$ and $\infty - \infty$ are reduced to a quotient, the forms $1^{\infty}$, $0^{0}$, $\infty^{0}$ are reduced to a quotient with $f^{g} = e^{\,g \ln f}$.
:::

## Taylor and Maclaurin expansions

Taylor's formulas and the expansions of the elementary functions are derived in the chapter [Differential calculus and Taylor](/en/analisi-1/derivate/teoria).

:::formula{#formula-di-taylor-peano titolo="Taylor's formula with Peano remainder"}
$$
f(x) = \sum_{k=0}^{n} \frac{f^{(k)}(x_0)}{k!}\,(x - x_0)^k + o\bigl( (x - x_0)^n \bigr) \qquad (x \to x_0)
$$
It holds if $f$ is $n$ times differentiable at $x_0$. For $x_0 = 0$ it is called Maclaurin's formula. The remainder is negligible with respect to the last power written, and this form is used in the computation of limits.
:::

:::formula{#resto-di-lagrange titolo="Lagrange remainder and error estimate"}
$$
\begin{gathered}
f(x) = \sum_{k=0}^{n} \frac{f^{(k)}(x_0)}{k!}\,(x - x_0)^k + \frac{f^{(n+1)}(c)}{(n+1)!}\,(x - x_0)^{n+1}, \\[8pt]
\bigl| f(x) - T_n(x) \bigr| \leq \frac{K}{(n+1)!}\,|x - x_0|^{n+1}
\end{gathered}
$$
It holds if $f$ is $n + 1$ times differentiable on an interval $I$ that contains $x_0$ and $x$, with $c$ strictly between $x_0$ and $x$; $T_n$ is the Taylor polynomial of order $n$. The estimate in the second line requires $|f^{(n+1)}| \leq K$ on $I$.
:::

:::formula{#mclaurin-esponenziale-seno-coseno titolo="Maclaurin expansions of exponential, sine and cosine"}
$$
\begin{aligned}
e^{x} &= 1 + x + \frac{x^2}{2} + \frac{x^3}{6} + \cdots + \frac{x^n}{n!} + o(x^n), \\[6pt]
\sin x &= x - \frac{x^3}{6} + \frac{x^5}{120} - \cdots + \frac{(-1)^n x^{2n+1}}{(2n+1)!} + o(x^{2n+2}), \\[6pt]
\cos x &= 1 - \frac{x^2}{2} + \frac{x^4}{24} - \cdots + \frac{(-1)^n x^{2n}}{(2n)!} + o(x^{2n+1})
\end{aligned}
$$
They hold for $x \to 0$ and every $n \in \mathbb{N}$. The sine contains *only* odd powers and the cosine only even powers, therefore the remainder is written one order higher than the last term.
:::

:::formula{#mclaurin-iperboliche titolo="Maclaurin expansions of hyperbolic sine and cosine"}
$$
\begin{aligned}
\sinh x &= x + \frac{x^3}{6} + \frac{x^5}{120} + \cdots + \frac{x^{2n+1}}{(2n+1)!} + o(x^{2n+2}), \\[6pt]
\cosh x &= 1 + \frac{x^2}{2} + \frac{x^4}{24} + \cdots + \frac{x^{2n}}{(2n)!} + o(x^{2n+1})
\end{aligned}
$$
They hold for $x \to 0$ and every $n \in \mathbb{N}$, with the same coefficients as sine and cosine and all signs positive.
:::

:::formula{#mclaurin-logaritmo-e-geometrica titolo="Maclaurin expansions of the logarithm and of the geometric series"}
$$
\begin{aligned}
\ln(1 + x) &= x - \frac{x^2}{2} + \frac{x^3}{3} - \cdots + \frac{(-1)^{n+1} x^n}{n} + o(x^n), \\[6pt]
\frac{1}{1 - x} &= 1 + x + x^2 + \cdots + x^n + o(x^n), \\[6pt]
\frac{1}{1 + x} &= 1 - x + x^2 - \cdots + (-1)^n x^n + o(x^n)
\end{aligned}
$$
They hold for $x \to 0$ and $n \geq 1$. With $-x$ in place of $x$ one obtains $\ln(1 - x) = -x - \dfrac{x^2}{2} - \cdots - \dfrac{x^n}{n} + o(x^n)$.
:::

:::formula{#mclaurin-potenza-binomiale titolo="Maclaurin expansion of the binomial power"}
$$
\begin{gathered}
(1 + x)^{\alpha} = 1 + \alpha x + \frac{\alpha(\alpha - 1)}{2}\, x^2 + \cdots + \binom{\alpha}{n} x^n + o(x^n), \\[8pt]
\binom{\alpha}{n} = \frac{\alpha(\alpha - 1) \cdots (\alpha - n + 1)}{n!}, \\[8pt]
\sqrt{1 + x} = 1 + \frac{x}{2} - \frac{x^2}{8} + o(x^2), \qquad
\frac{1}{\sqrt{1 + x}} = 1 - \frac{x}{2} + \frac{3x^2}{8} + o(x^2)
\end{gathered}
$$
They hold for $x \to 0$ and every $\alpha \in \mathbb{R}$. The generalized binomial coefficient $\dbinom{\alpha}{n}$ coincides with the ordinary one for $\alpha \in \mathbb{N}$.
:::

:::formula{#mclaurin-arcotangente-tangente-arcoseno titolo="Maclaurin expansions of arctangent, tangent and arcsine"}
$$
\begin{aligned}
\arctan x &= x - \frac{x^3}{3} + \frac{x^5}{5} - \cdots + \frac{(-1)^n x^{2n+1}}{2n+1} + o(x^{2n+2}), \\[6pt]
\tan x &= x + \frac{x^3}{3} + \frac{2x^5}{15} + o(x^6), \\[6pt]
\arcsin x &= x + \frac{x^3}{6} + \frac{3x^5}{40} + o(x^6)
\end{aligned}
$$
They hold for $x \to 0$. The three functions are odd, therefore their expansions contain only odd powers.
:::

:::formula{#algebra-degli-o-piccolo titolo="Algebra of little-o"}
$$
\begin{gathered}
o(x^n) \pm o(x^n) = o(x^n), \qquad c \cdot o(x^n) = o(x^n), \\[6pt]
x^m \cdot o(x^n) = o(x^{m+n}), \qquad o(x^m) \cdot o(x^n) = o(x^{m+n}), \\[6pt]
\frac{o(x^n)}{x^m} = o(x^{n-m}) \ \ (m \leq n), \qquad o(x^m) = o(x^n) \ \ (m > n)
\end{gathered}
$$
They hold for $x \to 0$, with $m, n$ positive integers and $c \neq 0$, and are read from left to right. The last one lowers the order of a remainder to match it with the other terms; for the same reason a power $x^m$ with $m > n$ is $o(x^n)$.
:::

:::formula{#sviluppi-composti-e-centrati titolo="Expansions of composite functions and expansions centered at a point"}
$$
\begin{gathered}
f(t) = T_n(t) + o(t^n), \quad g(x) \to 0 \implies f(g(x)) = T_n(g(x)) + o\bigl( g(x)^n \bigr), \\[8pt]
\ln x = (x - 1) - \frac{(x - 1)^2}{2} + o\bigl( (x - 1)^2 \bigr) \quad (x \to 1), \\[8pt]
e^{x} = e^{x_0} \sum_{k=0}^{n} \frac{(x - x_0)^k}{k!} + o\bigl( (x - x_0)^n \bigr) \quad (x \to x_0)
\end{gathered}
$$
In the first line $t \to 0$ and $x \to x_0$; if moreover $x_0 = 0$ and $g(x) \sim c\,x^{k}$ for $x \to 0$, with $c \neq 0$, the remainder $o\bigl( g(x)^n \bigr)$ is $o(x^{kn})$. The expansions centered at $x_0 \neq 0$ are obtained from the Maclaurin ones with the substitution $t = x - x_0$.
:::

## Curve sketching

The criteria for maxima, minima, convexity and inflection points are in the chapter [Curve sketching](/en/analisi-1/studio-di-funzione/teoria).

:::formula{#criterio-della-derivata-prima titolo="First derivative test"}
$$
\begin{gathered}
f' > 0 \ \text{to the left}, \ \ f' < 0 \ \text{to the right of } x_0 \implies x_0 \ \text{point of local maximum}, \\[6pt]
f' < 0 \ \text{to the left}, \ \ f' > 0 \ \text{to the right of } x_0 \implies x_0 \ \text{point of local minimum}
\end{gathered}
$$
It holds for $f$ continuous at $x_0$ and differentiable in a neighborhood of $x_0$, except possibly at $x_0$. The test does not require differentiability at $x_0$, therefore it also applies to corner points and cusps. If $f'$ has the same sign on both sides, $x_0$ is neither a maximum nor a minimum.
:::

:::formula{#criterio-della-derivata-seconda titolo="Second derivative test"}
$$
\begin{gathered}
f'(x_0) = 0, \ \ f''(x_0) > 0 \implies x_0 \ \text{point of local minimum}, \\[6pt]
f'(x_0) = 0, \ \ f''(x_0) < 0 \implies x_0 \ \text{point of local maximum}
\end{gathered}
$$
It holds for $f$ twice differentiable at $x_0$. For $f''(x_0) = 0$ the test is inconclusive, as shown by $x^4$, $-x^4$ and $x^3$, which at $0$ have a minimum, a maximum and an inflection point.
:::

:::formula{#criterio-delle-derivate-successive titolo="Higher-order derivative test"}
$$
f'(x_0) = f''(x_0) = \cdots = f^{(n-1)}(x_0) = 0, \qquad f^{(n)}(x_0) \neq 0
$$
It holds for $f$ $n$ times differentiable at $x_0$, with $n \geq 2$. If $n$ is even, $x_0$ is a point of local minimum for $f^{(n)}(x_0) > 0$ and of local maximum for $f^{(n)}(x_0) < 0$. If $n$ is odd, $x_0$ is an inflection point with horizontal tangent.
:::

:::formula{#massimo-e-minimo-assoluto titolo="Absolute maximum and minimum on a closed interval"}
$$
\begin{gathered}
\max_{[a, b]} f = \max \bigl\{ f(a),\ f(b),\ f(x_1), \dots, f(x_k) \bigr\}, \\[6pt]
\min_{[a, b]} f = \min \bigl\{ f(a),\ f(b),\ f(x_1), \dots, f(x_k) \bigr\}
\end{gathered}
$$
It holds for $f$ continuous on $[a, b]$, where $x_1, \dots, x_k$ are the interior stationary points and the interior points of non-differentiability; the Weierstrass theorem guarantees the existence of maximum and minimum. On a domain that is not closed or not bounded, existence is decided with the limits at the endpoints of the domain.
:::

:::formula{#convessita-e-derivata-seconda titolo="Convexity and second derivative"}
$$
\begin{gathered}
f\bigl( (1 - t)\,x_1 + t\,x_2 \bigr) \leq (1 - t)\,f(x_1) + t\,f(x_2), \\[6pt]
f'' \geq 0 \ \text{on } I \iff f \ \text{convex on } I, \qquad f'' \leq 0 \ \text{on } I \iff f \ \text{concave on } I, \\[6pt]
f \ \text{convex on } I \iff f(x) \geq f(x_0) + f'(x_0)\,(x - x_0)
\end{gathered}
$$
The first line, required for every $x_1, x_2 \in I$ and every $t \in [0, 1]$, is the definition of a convex function on the interval $I$. The second holds for $f$ twice differentiable on $I$, and with $f'' > 0$ at the interior points the convexity is strict. The third holds for $f$ differentiable on $I$, with the inequality required for every $x, x_0 \in I$, and says that the graph of a convex function lies above every tangent line.
:::

:::formula{#punti-di-flesso titolo="Inflection points"}
$$
x_0 \ \text{inflection point}, \ \ f \ \text{twice differentiable at } x_0 \implies f''(x_0) = 0
$$
The candidates are the zeros of $f''$ and the points where $f''$ does not exist. A candidate at which $f$ is continuous and the graph has a tangent line is an inflection point if $f''$ changes sign at the point. The tangent at the inflection point is $y = f(x_0) + f'(x_0)(x - x_0)$, and the graph crosses it.
:::

## Basic antiderivatives

The elementary antiderivatives are derived in the chapter [Integral calculus](/en/analisi-1/integrali/teoria).

:::formula{#primitiva-e-linearita titolo="Antiderivative and linearity"}
$$
\begin{gathered}
\int f(x)\, dx = F(x) + c \iff F'(x) = f(x), \\[8pt]
\int \bigl( \alpha f(x) + \beta g(x) \bigr)\, dx = \alpha \int f(x)\, dx + \beta \int g(x)\, dx
\end{gathered}
$$
They hold on an interval $I$, with $\alpha, \beta \in \mathbb{R}$ and $c \in \mathbb{R}$ an arbitrary constant, because two antiderivatives of the same function on an interval differ by a constant. Every function continuous on an interval has antiderivatives.
:::

:::formula{#integrali-elementari titolo="Elementary integrals"}
$$
\begin{gathered}
\int x^{\alpha}\, dx = \frac{x^{\alpha + 1}}{\alpha + 1} + c \ \ (\alpha \neq -1), \qquad
\int \frac{1}{x}\, dx = \ln |x| + c, \\[8pt]
\int e^{x}\, dx = e^{x} + c, \qquad
\int a^{x}\, dx = \frac{a^{x}}{\ln a} + c \ \ (a > 0,\ a \neq 1), \\[8pt]
\int \sin x\, dx = -\cos x + c, \qquad
\int \cos x\, dx = \sin x + c
\end{gathered}
$$
Each holds on every interval contained in the domain of the integrand; for $\dfrac{1}{x}$ the intervals are $(-\infty, 0)$ and $(0, +\infty)$. Frequent cases of the first are $\displaystyle\int \sqrt{x}\, dx = \frac{2}{3}\, x^{\frac{3}{2}} + c$ and $\displaystyle\int \frac{1}{x^2}\, dx = -\frac{1}{x} + c$.
:::

:::formula{#integrali-elementari-goniometrici titolo="Elementary trigonometric and hyperbolic integrals"}
$$
\begin{gathered}
\int \frac{1}{\cos^2 x}\, dx = \tan x + c, \qquad
\int \frac{1}{\sin^2 x}\, dx = -\frac{\cos x}{\sin x} + c, \\[8pt]
\int \frac{1}{1 + x^2}\, dx = \arctan x + c, \qquad
\int \frac{1}{\sqrt{1 - x^2}}\, dx = \arcsin x + c, \\[8pt]
\int \sinh x\, dx = \cosh x + c, \qquad
\int \cosh x\, dx = \sinh x + c
\end{gathered}
$$
They hold on the intervals where the integrand is defined, that is with $\cos x \neq 0$ in the first, $\sin x \neq 0$ in the second and $-1 < x < 1$ in the fourth.
:::

:::formula{#integrali-con-argomento-lineare titolo="Integrals with linear argument"}
$$
\begin{gathered}
\int f(ax + b)\, dx = \frac{1}{a}\, F(ax + b) + c, \\[8pt]
\int \frac{dx}{ax + b} = \frac{1}{a} \ln |ax + b| + c, \qquad
\int e^{ax}\, dx = \frac{e^{ax}}{a} + c, \\[8pt]
\int \sin(ax)\, dx = -\frac{\cos(ax)}{a} + c, \qquad
\int \cos(ax)\, dx = \frac{\sin(ax)}{a} + c
\end{gathered}
$$
They hold for $a \neq 0$, with $F$ an antiderivative of $f$, and follow from the substitution $t = ax + b$.
:::

:::formula{#quasi-immediati-potenza-logaritmo-esponenziale titolo="Near-elementary integrals with power, logarithm and exponential"}
$$
\begin{gathered}
\int f'(x)\, [f(x)]^{\alpha}\, dx = \frac{[f(x)]^{\alpha + 1}}{\alpha + 1} + c \ \ (\alpha \neq -1), \\[8pt]
\int \frac{f'(x)}{f(x)}\, dx = \ln |f(x)| + c, \qquad
\int f'(x)\, e^{f(x)}\, dx = e^{f(x)} + c, \\[8pt]
\int \frac{f'(x)}{\sqrt{f(x)}}\, dx = 2\sqrt{f(x)} + c
\end{gathered}
$$
They hold for $f$ differentiable with continuous derivative, on the intervals where the integrand is defined. The integrand contains the derivative of the inner function, possibly up to a multiplicative constant, as in $\displaystyle\int x\, e^{x^2}\, dx = \frac{1}{2}\, e^{x^2} + c$.
:::

:::formula{#quasi-immediati-goniometrici titolo="Near-elementary integrals with trigonometric and inverse trigonometric functions"}
$$
\begin{gathered}
\int f'(x) \cos f(x)\, dx = \sin f(x) + c, \qquad
\int f'(x) \sin f(x)\, dx = -\cos f(x) + c, \\[8pt]
\int \frac{f'(x)}{\cos^2 f(x)}\, dx = \tan f(x) + c, \qquad
\int \frac{f'(x)}{1 + [f(x)]^2}\, dx = \arctan f(x) + c, \\[8pt]
\int \frac{f'(x)}{\sqrt{1 - [f(x)]^2}}\, dx = \arcsin f(x) + c
\end{gathered}
$$
They hold for $f$ differentiable with continuous derivative, on the intervals where the integrand is defined. For example $\displaystyle\int \frac{e^{x}}{1 + e^{2x}}\, dx = \arctan e^{x} + c$.
:::

:::formula{#integrali-con-una-costante-positiva titolo="Integrals with a positive constant a"}
$$
\begin{gathered}
\int \frac{dx}{a^2 + x^2} = \frac{1}{a} \arctan \frac{x}{a} + c, \qquad
\int \frac{dx}{\sqrt{a^2 - x^2}} = \arcsin \frac{x}{a} + c, \\[8pt]
\int \frac{dx}{x^2 - a^2} = \frac{1}{2a} \ln \left| \frac{x - a}{x + a} \right| + c, \qquad
\int \frac{dx}{\sqrt{x^2 + k}} = \ln \left| x + \sqrt{x^2 + k} \right| + c
\end{gathered}
$$
The first three hold for $a > 0$, the second for $|x| < a$, the third for $x \neq \pm a$. The last one holds for $k \neq 0$ on the intervals where $x^2 + k > 0$.
:::

:::formula{#altre-primitive titolo="Other frequently used antiderivatives"}
$$
\begin{gathered}
\int \tan x\, dx = -\ln |\cos x| + c, \qquad
\int \ln x\, dx = x \ln x - x + c, \\[8pt]
\int \sin^2 x\, dx = \frac{x - \sin x \cos x}{2} + c, \qquad
\int \cos^2 x\, dx = \frac{x + \sin x \cos x}{2} + c, \\[8pt]
\int \arctan x\, dx = x \arctan x - \frac{1}{2} \ln (1 + x^2) + c, \\[8pt]
\int \sqrt{1 - x^2}\, dx = \frac{\arcsin x + x\sqrt{1 - x^2}}{2} + c
\end{gathered}
$$
They hold on the intervals where the integrand is defined, that is with $\cos x \neq 0$ in the first, $x > 0$ in the second and $-1 \leq x \leq 1$ in the last. They are obtained by parts, by substitution or with the power-reduction formulas.
:::

:::attenzione
The integral of a product is different from the product of the integrals. One has $\displaystyle\int x \cdot x\, dx = \frac{x^3}{3} + c$, whereas the product of the antiderivatives $\dfrac{x^2}{2} \cdot \dfrac{x^2}{2} = \dfrac{x^4}{4}$ has derivative $x^3$. For products one uses integration by parts or substitution.
:::

## Integration methods

The methods are proved, with examples, in the chapter [Integral calculus](/en/analisi-1/integrali/teoria).

:::formula{#integrazione-per-parti titolo="Integration by parts"}
$$
\begin{gathered}
\int f(x)\, g'(x)\, dx = f(x)\, g(x) - \int f'(x)\, g(x)\, dx, \\[8pt]
\int_a^b f(x)\, g'(x)\, dx = \bigl[ f(x)\, g(x) \bigr]_a^b - \int_a^b f'(x)\, g(x)\, dx
\end{gathered}
$$
It holds for $f$ and $g$ differentiable with continuous derivative on an interval. In products of a polynomial by $e^{x}$, $\sin x$ or $\cos x$ the factor $f$ is the polynomial; with $\ln x$ and $\arctan x$ one takes $f(x) = \ln x$ or $f(x) = \arctan x$ and $g'(x) = 1$.
:::

:::formula{#esponenziale-per-seno-e-coseno titolo="Exponential times sine and cosine"}
$$
\begin{gathered}
\int e^{ax} \sin(bx)\, dx = \frac{e^{ax} \bigl( a \sin(bx) - b \cos(bx) \bigr)}{a^2 + b^2} + c, \\[8pt]
\int e^{ax} \cos(bx)\, dx = \frac{e^{ax} \bigl( a \cos(bx) + b \sin(bx) \bigr)}{a^2 + b^2} + c
\end{gathered}
$$
They hold for $a, b \in \mathbb{R}$ not both zero. They are obtained by integrating by parts twice; at the second step the original integral reappears, and the equality obtained is solved for it.
:::

:::formula{#integrazione-per-sostituzione titolo="Integration by substitution"}
$$
\begin{gathered}
\int f(g(x))\, g'(x)\, dx = F(g(x)) + c \qquad \bigl( t = g(x), \ dt = g'(x)\, dx \bigr), \\[8pt]
\int f(x)\, dx = \int f(\varphi(t))\, \varphi'(t)\, dt \qquad \bigl( x = \varphi(t), \ dx = \varphi'(t)\, dt \bigr), \\[8pt]
\int_a^b f(g(x))\, g'(x)\, dx = \int_{g(a)}^{g(b)} f(t)\, dt
\end{gathered}
$$
They hold for $f$ continuous, with antiderivative $F$, and for $g$, $\varphi$ differentiable with continuous derivative. In the inverse substitution $\varphi$ is invertible, and once the antiderivative in $t$ is computed one returns to the variable $x$ with $t = \varphi^{-1}(x)$. In the definite integral the limits of integration are transformed with the substitution and the computation is completed in the variable $t$.
:::

:::formula{#sostituzioni-tipiche titolo="Typical substitutions"}
$$
\begin{array}{ll}
\text{function of } e^{x} & t = e^{x}, \quad dx = \dfrac{dt}{t} \\[12pt]
\ln x \text{ with the factor } \dfrac{1}{x} & t = \ln x, \quad dt = \dfrac{dx}{x} \\[12pt]
\sqrt[n]{ax + b} & t = \sqrt[n]{ax + b}, \quad dx = \dfrac{n\,t^{n-1}}{a}\, dt \\[12pt]
\sqrt{a^2 - x^2} & x = a \sin t, \quad dx = a \cos t\, dt \\[8pt]
\text{rational in } \sin x, \ \cos x & t = \tan \dfrac{x}{2}, \quad dx = \dfrac{2}{1 + t^2}\, dt
\end{array}
$$
In the third line $a \neq 0$. In the fourth $a > 0$ and $t \in \left[ -\dfrac{\pi}{2}, \dfrac{\pi}{2} \right]$, so that $\sqrt{a^2 - x^2} = a \cos t$. In the last one $x \in (-\pi, \pi)$, and sine and cosine are expressed with the half-angle substitution formulas.
:::

:::formula{#decomposizione-in-fratti-semplici titolo="Partial fraction decomposition"}
$$
\begin{array}{ll}
\text{factor of } Q(x) & \text{terms of the decomposition} \\
\hline
x - x_0 & \dfrac{A}{x - x_0} \\[12pt]
(x - x_0)^m & \dfrac{A_1}{x - x_0} + \dfrac{A_2}{(x - x_0)^2} + \cdots + \dfrac{A_m}{(x - x_0)^m} \\[12pt]
x^2 + px + q, \ \ p^2 - 4q < 0 & \dfrac{Ax + B}{x^2 + px + q}
\end{array}
$$
It holds for $\dfrac{P(x)}{Q(x)}$ with the degree of $P$ less than the degree of $Q$; otherwise one first performs the division with remainder, $\dfrac{P}{Q} = S + \dfrac{R}{Q}$. The constants are determined by the principle of identity of polynomials or by substituting the roots of $Q$.
:::

:::formula{#integrali-dei-fratti-semplici titolo="Integrals of partial fractions"}
$$
\begin{gathered}
\int \frac{A}{x - x_0}\, dx = A \ln |x - x_0| + c, \qquad
\int \frac{A}{(x - x_0)^k}\, dx = -\frac{A}{(k - 1)(x - x_0)^{k-1}} + c \ \ (k \geq 2), \\[8pt]
\int \frac{Ax + B}{x^2 + px + q}\, dx = \frac{A}{2} \ln (x^2 + px + q) + \left( B - \frac{Ap}{2} \right) \int \frac{dx}{x^2 + px + q}
\end{gathered}
$$
The third holds for $p^2 - 4q < 0$ and is obtained by writing $Ax + B = \dfrac{A}{2}(2x + p) + B - \dfrac{Ap}{2}$, so that the first term contains the derivative of the denominator.
:::

:::formula{#integrale-del-reciproco-di-un-trinomio titolo="Integral of the reciprocal of a quadratic"}
$$
\int \frac{dx}{x^2 + px + q} =
\begin{cases}
\dfrac{2}{\sqrt{-\Delta}} \arctan \dfrac{2x + p}{\sqrt{-\Delta}} + c & \text{if } \Delta < 0 \\[14pt]
-\dfrac{2}{2x + p} + c & \text{if } \Delta = 0 \\[14pt]
\dfrac{1}{\sqrt{\Delta}} \ln \left| \dfrac{2x + p - \sqrt{\Delta}}{2x + p + \sqrt{\Delta}} \right| + c & \text{if } \Delta > 0
\end{cases}
$$
Here $\Delta = p^2 - 4q$. The case $\Delta < 0$ is obtained by completing the square, $x^2 + px + q = \left( x + \dfrac{p}{2} \right)^2 + \dfrac{-\Delta}{4}$, and the case $\Delta > 0$ with partial fractions.
:::

## Definite integral and areas

The fundamental theorem and the properties of the integral are in the chapter [Integral calculus](/en/analisi-1/integrali/teoria).

:::formula{#proprieta-dell-integrale-definito titolo="Properties of the definite integral"}
$$
\begin{gathered}
\int_a^b \bigl( \alpha f + \beta g \bigr)\, dx = \alpha \int_a^b f\, dx + \beta \int_a^b g\, dx, \qquad
\int_a^b f\, dx = \int_a^c f\, dx + \int_c^b f\, dx, \\[8pt]
\int_b^a f\, dx = -\int_a^b f\, dx, \qquad
f \leq g \implies \int_a^b f\, dx \leq \int_a^b g\, dx, \qquad
\left| \int_a^b f\, dx \right| \leq \int_a^b |f|\, dx
\end{gathered}
$$
They hold for $f$ and $g$ integrable, with $\alpha, \beta \in \mathbb{R}$; monotonicity and the absolute value inequality require $a < b$. Additivity is used for piecewise-defined functions and for those with the absolute value.
:::

:::formula{#integrali-di-funzioni-simmetriche titolo="Integrals of even, odd and periodic functions"}
$$
\begin{gathered}
\int_{-a}^{a} f(x)\, dx = 0 \ \ (f \text{ odd}), \qquad
\int_{-a}^{a} f(x)\, dx = 2 \int_0^{a} f(x)\, dx \ \ (f \text{ even}), \\[8pt]
\int_{c}^{c + T} f(x)\, dx = \int_0^{T} f(x)\, dx \ \ (f \text{ periodic with period } T)
\end{gathered}
$$
The first two hold for $f$ integrable on $[-a, a]$ with $a > 0$, the third for $f$ integrable on a period and every $c \in \mathbb{R}$.
:::

:::formula{#teorema-della-media-integrale titolo="Mean value theorem for integrals"}
$$
\frac{1}{b - a} \int_a^b f(x)\, dx = f(c) \quad \text{for some } c \in [a, b]
$$
It holds for $f$ continuous on $[a, b]$, with $a < b$. The left-hand side is the integral mean of $f$ on $[a, b]$.
:::

:::formula{#teorema-fondamentale-del-calcolo titolo="Fundamental theorem of calculus"}
$$
F(x) = \int_a^x f(t)\, dt \implies F'(x) = f(x), \qquad
\int_a^b f(x)\, dx = G(b) - G(a) = \bigl[ G(x) \bigr]_a^b
$$
They hold for $f$ continuous on $[a, b]$, and in the second $G$ is any antiderivative of $f$. The integral function $F$ is therefore an antiderivative of $f$, with $F(a) = 0$.
:::

:::formula{#derivata-di-una-funzione-integrale titolo="Derivative of an integral function with variable limits"}
$$
\frac{d}{dx} \int_{\alpha(x)}^{\beta(x)} f(t)\, dt = f(\beta(x))\, \beta'(x) - f(\alpha(x))\, \alpha'(x)
$$
It holds for $\alpha$ and $\beta$ differentiable and $f$ continuous on an interval that contains the values of $\alpha$ and $\beta$. For example $\dfrac{d}{dx} \displaystyle\int_0^{x^3} \cos(t^2)\, dt = 3x^2 \cos(x^6)$.
:::

:::formula{#area-tra-due-curve titolo="Area between two curves"}
$$
\mathcal{A} = \int_a^b \bigl( f(x) - g(x) \bigr)\, dx, \qquad
\mathcal{A} = \int_a^b |f(x)|\, dx
$$
The first is the area of the region between the graphs of $f$ and $g$ and holds for $f$, $g$ continuous on $[a, b]$ with $f(x) \geq g(x)$; the second is the area between the graph of $f$ and the $x$-axis. If the graphs intersect, the interval is split at the points where $f(x) = g(x)$ and on each piece one integrates the difference between the larger and the smaller function.
:::

## Improper integrals

The definitions and the convergence tests are in the chapter [Improper integrals](/en/analisi-1/integrali-impropri/teoria).

:::formula{#definizione-di-integrale-improprio titolo="Definition of improper integral"}
$$
\begin{gathered}
\int_a^{+\infty} f(x)\, dx = \lim_{t \to +\infty} \int_a^{t} f(x)\, dx, \qquad
\int_a^{b} f(x)\, dx = \lim_{t \to a^{+}} \int_t^{b} f(x)\, dx, \\[8pt]
\int_{-\infty}^{+\infty} f(x)\, dx = \int_{-\infty}^{c} f(x)\, dx + \int_{c}^{+\infty} f(x)\, dx
\end{gathered}
$$
The first holds for $f$ integrable on every $[a, t]$; the second for $f$ unbounded near $a$ and integrable on every $[t, b]$ with $a < t < b$. The integral converges if the limit exists finite, diverges if it is infinite, is indeterminate if the limit does not exist. An infinite endpoint, or a point near which $f$ is unbounded, is called a **critical point** of the integral. With several critical points the integral is split into integrals with a single critical point and converges if *all* of them converge; the behavior does not depend on $c$.
:::

:::formula{#integrali-campione titolo="Reference integrals of powers"}
$$
\int_1^{+\infty} \frac{dx}{x^{\alpha}} = \frac{1}{\alpha - 1} \ \ (\alpha > 1), \qquad
\int_0^{1} \frac{dx}{x^{\alpha}} = \frac{1}{1 - \alpha} \ \ (\alpha < 1)
$$
The first integral converges *if and only if* $\alpha > 1$, the second *if and only if* $\alpha < 1$, and in the other cases they diverge to $+\infty$. Therefore $\displaystyle\int_0^{+\infty} \frac{dx}{x^{\alpha}}$ diverges for every $\alpha \in \mathbb{R}$.
:::

:::formula{#campioni-con-punto-critico-qualunque titolo="Reference integrals with the critical point at an arbitrary endpoint"}
$$
\begin{gathered}
\int_a^{b} \frac{dx}{(x - a)^{\alpha}} \ \ \text{and} \ \ \int_a^{b} \frac{dx}{(b - x)^{\alpha}} \ \ \text{converge} \iff \alpha < 1, \\[8pt]
\int_c^{+\infty} \frac{dx}{x^{\alpha}} \ \ \text{converges} \iff \alpha > 1
\end{gathered}
$$
They hold for $a < b$ and $c > 0$. Moving the endpoint away from the critical point does not change the behavior.
:::

:::formula{#campioni-con-esponenziale-e-logaritmo titolo="Reference integrals with exponential and logarithm"}
$$
\begin{gathered}
\int_0^{+\infty} e^{-\lambda x}\, dx = \frac{1}{\lambda} \ \ (\lambda > 0), \qquad
\int_2^{+\infty} \frac{dx}{x\,(\ln x)^{\beta}} \ \ \text{converges} \iff \beta > 1, \\[8pt]
\int_0^{\frac{1}{2}} \frac{dx}{x\,|\ln x|^{\beta}} \ \ \text{converges} \iff \beta > 1
\end{gathered}
$$
For $\lambda \leq 0$ the first integral diverges. The reference integrals with the logarithm are reduced to those of powers with the substitution $u = \ln x$, and are needed when comparison with powers is inconclusive.
:::

:::formula{#criterio-del-confronto-per-gli-integrali titolo="Comparison test for integrals"}
$$
\begin{gathered}
0 \leq f(x) \leq g(x), \quad \int g \ \text{converges} \implies \int f \ \text{converges}, \\[8pt]
0 \leq f(x) \leq g(x), \quad \int f \ \text{diverges} \implies \int g \ \text{diverges}
\end{gathered}
$$
It holds with the inequalities satisfied near the critical point, for $f$ and $g$ integrable on every closed and bounded interval that does not contain the critical point. The integral of a nonnegative function either converges or diverges to $+\infty$.
:::

:::formula{#confronto-asintotico-per-gli-integrali titolo="Limit comparison test for integrals"}
$$
f(x) \sim g(x) \ \ (x \to c) \implies \int f \ \text{and} \int g \ \text{have the same behavior}
$$
It holds for $f$ and $g$ positive near the critical point $c$, finite or infinite; in practice $g$ is a reference integrand, obtained with the standard limits or with Taylor expansions. More generally, setting $L = \displaystyle\lim_{x \to c} \frac{f(x)}{g(x)}$,

- if $0 < L < +\infty$, the integrals of $f$ and of $g$ have the same behavior;
- if $L = 0$ and the integral of $g$ converges, the integral of $f$ converges as well;
- if $L = +\infty$ and the integral of $g$ diverges, the integral of $f$ diverges as well.
:::

:::formula{#ordine-di-infinitesimo-e-di-infinito titolo="Order of infinitesimal and of infinity of the integrand"}
$$
f(x) \sim \frac{k}{x^{p}} \ \ (x \to +\infty), \qquad f(x) \sim \frac{k}{|x - x_0|^{p}} \ \ (x \to x_0)
$$
It holds for $f$ positive, $k > 0$ and $p > 0$. For $x \to +\infty$ the integral converges if $p > 1$ and diverges if $p \leq 1$; at the finite critical point $x_0$ the integral converges if $p < 1$ and diverges if $p \geq 1$.
:::

:::formula{#convergenza-assoluta-degli-integrali titolo="Absolute convergence of integrals"}
$$
\int_a^{+\infty} |f(x)|\, dx \ \text{converges} \implies \int_a^{+\infty} f(x)\, dx \ \text{converges}, \qquad
\left| \int_a^{+\infty} f(x)\, dx \right| \leq \int_a^{+\infty} |f(x)|\, dx
$$
It holds for $f$ integrable on every closed and bounded interval contained in $[a, +\infty)$, and the same statement holds for finite critical points. It is used for integrands of variable sign, for example with $\left| \dfrac{\cos x}{x^2} \right| \leq \dfrac{1}{x^2}$ on $[1, +\infty)$. The converse implication is false, as shown by $\displaystyle\int_1^{+\infty} \frac{\sin x}{x}\, dx$, which converges while the integral of the absolute value diverges.
:::

:::formula{#integrali-impropri-notevoli titolo="Standard improper integrals"}
$$
\int_0^{+\infty} e^{-x}\, dx = 1, \qquad
\int_{-\infty}^{+\infty} e^{-x^2}\, dx = \sqrt{\pi}, \qquad
\int_0^{+\infty} \frac{\sin x}{x}\, dx = \frac{\pi}{2}
$$
The third integral converges and does not converge absolutely. At $0$ the function $\dfrac{\sin x}{x}$ tends to $1$, therefore $0$ is not a critical point.
:::

:::attenzione
The fundamental formula of integral calculus applies to a function continuous on the whole closed interval of integration. The function $\dfrac{1}{x^2}$ is not defined at $0$, and $-\dfrac{1}{x}$ is an antiderivative of it only on the intervals that do not contain $0$. Therefore the formula does not apply to $\displaystyle\int_{-1}^{1} \frac{dx}{x^2}$, and the computation $\left[ -\dfrac{1}{x} \right]_{-1}^{1} = -2$ would give a negative value for a positive function. The point $0$ is a critical point interior to the interval, therefore the integral is split into the integrals on $[-1, 0)$ and on $(0, 1]$; since both diverge to $+\infty$, the original integral diverges as well.
:::

## Numerical series and power series

The tests and the reference series are proved in the chapter [Numerical series](/en/analisi-1/serie/teoria).

:::formula{#somme-parziali-e-condizione-necessaria titolo="Partial sums and necessary condition"}
$$
s_N = \sum_{n=1}^{N} a_n, \qquad \sum_{n=1}^{\infty} a_n = \lim_{N \to +\infty} s_N, \qquad
\sum_{n=1}^{\infty} a_n \ \text{converges} \implies \lim_{n \to +\infty} a_n = 0
$$
The series converges if the limit of the partial sums exists finite, diverges if it is infinite, is indeterminate if it does not exist. The condition $a_n \to 0$ is *necessary* and not sufficient, as shown by the harmonic series. The behavior does not change if finitely many terms are modified.
:::

:::formula{#serie-geometrica titolo="Geometric series"}
$$
\sum_{n=0}^{\infty} q^{n} = \frac{1}{1 - q}, \qquad \sum_{n=n_0}^{\infty} q^{n} = \frac{q^{n_0}}{1 - q} \qquad (|q| < 1)
$$
The series converges *if and only if* $|q| < 1$, diverges to $+\infty$ for $q \geq 1$ and is indeterminate for $q \leq -1$. The sum is the first term divided by $1 - q$.
:::

:::formula{#serie-telescopica titolo="Telescoping series and Mengoli's series"}
$$
\sum_{n=1}^{\infty} (b_n - b_{n+1}) = b_1 - \lim_{n \to +\infty} b_n, \qquad
\sum_{n=1}^{\infty} \frac{1}{n(n+1)} = \sum_{n=1}^{\infty} \left( \frac{1}{n} - \frac{1}{n+1} \right) = 1
$$
The telescoping series converges *if and only if* the sequence $(b_n)$ converges, and in that case the first formula holds. The form $a_n = b_n - b_{n+1}$ is usually obtained with partial fractions.
:::

:::formula{#serie-armonica-generalizzata titolo="Generalized harmonic series"}
$$
\begin{gathered}
\sum_{n=1}^{\infty} \frac{1}{n^{\alpha}} \ \ \text{converges} \iff \alpha > 1, \\[8pt]
\sum_{n=2}^{\infty} \frac{1}{n^{\alpha} (\ln n)^{\beta}} \ \ \text{converges} \iff \alpha > 1 \ \ \text{or} \ \ \alpha = 1, \ \beta > 1
\end{gathered}
$$
They hold for $\alpha, \beta \in \mathbb{R}$, and when they do not converge the two series diverge to $+\infty$. For $\alpha = 1$ the first is the harmonic series, which diverges. They are the reference terms of the limit comparison test.
:::

:::formula{#confronto-e-confronto-asintotico-per-le-serie titolo="Comparison and limit comparison tests"}
$$
\begin{gathered}
0 \leq a_n \leq b_n, \quad \sum b_n \ \text{converges} \implies \sum a_n \ \text{converges}, \\[6pt]
0 \leq a_n \leq b_n, \quad \sum a_n \ \text{diverges} \implies \sum b_n \ \text{diverges}, \\[10pt]
a_n \sim b_n \implies \sum a_n \ \text{and} \ \sum b_n \ \text{have the same behavior}
\end{gathered}
$$
They hold for series with eventually nonnegative terms, with $b_n > 0$ in the third line. More generally, if $\dfrac{a_n}{b_n} \to \ell \in (0, +\infty)$ the two series have the same behavior; if $\ell = 0$ the convergence of $\sum b_n$ implies that of $\sum a_n$; if $\ell = +\infty$ the divergence of $\sum b_n$ implies that of $\sum a_n$.
:::

:::formula{#criteri-del-rapporto-e-della-radice titolo="Ratio test and root test"}
$$
\ell = \lim_{n \to +\infty} \frac{a_{n+1}}{a_n} \ \ \text{or} \ \ \ell = \lim_{n \to +\infty} \sqrt[n]{a_n}, \qquad
\ell < 1 \implies \sum a_n \ \text{converges}, \qquad \ell > 1 \implies \sum a_n \ \text{diverges}
$$
The ratio test holds for $a_n > 0$, the root test for $a_n \geq 0$ eventually, with $\ell$ finite or $+\infty$. For $\ell = 1$ the tests give no information, because $\sum \dfrac{1}{n}$ and $\sum \dfrac{1}{n^2}$ both give $\ell = 1$. The ratio test is suited to factorials, the root test to $n$-th powers.
:::

:::formula{#criterio-dell-integrale titolo="Integral test"}
$$
\sum_{n=n_0}^{\infty} f(n) \ \text{converges} \iff \int_{n_0}^{+\infty} f(x)\, dx \ \text{converges}
$$
It holds for $f : [n_0, +\infty) \to \mathbb{R}$ nonnegative and decreasing. With $f(x) = \dfrac{1}{x^{\alpha}}$ it gives the behavior of the generalized harmonic series.
:::

:::formula{#criterio-di-leibniz titolo="Leibniz test"}
$$
\sum_{n=1}^{\infty} (-1)^{n}\, b_n \ \text{converges}, \qquad |s - s_N| \leq b_{N+1}
$$
It holds if the conditions
$$
\begin{cases}
b_n \geq 0 \\[2pt]
b_{n+1} \leq b_n \\[2pt]
\displaystyle\lim_{n \to +\infty} b_n = 0
\end{cases}
$$
are satisfied for every $n$, where $s$ is the sum of the series and $s_N$ the partial sum. The error made by stopping at $s_N$ does not exceed the first neglected term.
:::

:::formula{#convergenza-assoluta-delle-serie titolo="Absolute convergence of series"}
$$
\sum_{n=1}^{\infty} |a_n| \ \text{converges} \implies \sum_{n=1}^{\infty} a_n \ \text{converges}, \qquad
\left| \sum_{n=1}^{\infty} a_n \right| \leq \sum_{n=1}^{\infty} |a_n|
$$
It reduces a series of arbitrary sign to a series with nonnegative terms. The converse implication is false, because $\sum \dfrac{(-1)^n}{n}$ converges by the Leibniz test, whereas the series of the absolute values is the harmonic series.
:::

:::formula{#somme-di-serie-notevoli titolo="Sums of standard series and linearity"}
$$
\begin{gathered}
\sum_{n=0}^{\infty} \frac{1}{n!} = e, \qquad
\sum_{n=1}^{\infty} \frac{(-1)^{n+1}}{n} = \ln 2, \qquad
\sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6}, \\[8pt]
\sum_{n=1}^{\infty} (\alpha\, a_n + \beta\, b_n) = \alpha \sum_{n=1}^{\infty} a_n + \beta \sum_{n=1}^{\infty} b_n
\end{gathered}
$$
Linearity holds if $\sum a_n$ and $\sum b_n$ converge, with $\alpha, \beta \in \mathbb{R}$. The first two sums follow from the Taylor series of $e^{x}$ and of $\ln(1 + x)$ with $x = 1$; the third is taken as known.
:::

:::formula{#raggio-di-convergenza titolo="Power series and radius of convergence"}
$$
\sum_{n=0}^{\infty} c_n (x - x_0)^n, \qquad
R = \frac{1}{\ell}, \qquad \ell = \lim_{n \to +\infty} \frac{|c_{n+1}|}{|c_n|} \ \ \text{or} \ \ \ell = \lim_{n \to +\infty} \sqrt[n]{|c_n|}
$$
The series converges absolutely for $|x - x_0| < R$ and does not converge for $|x - x_0| > R$; at the endpoints $x_0 - R$ and $x_0 + R$ the behavior is studied by substituting the value. The formula for the radius holds if the limit $\ell$ exists, finite or $+\infty$, with $R = +\infty$ for $\ell = 0$ and $R = 0$ for $\ell = +\infty$; the limit of the ratio requires $c_n \neq 0$ eventually.
:::

:::formula{#serie-di-taylor-elementari titolo="Elementary Taylor series"}
$$
\begin{gathered}
e^{x} = \sum_{n=0}^{\infty} \frac{x^n}{n!}, \qquad
\sin x = \sum_{n=0}^{\infty} \frac{(-1)^n x^{2n+1}}{(2n+1)!}, \qquad
\cos x = \sum_{n=0}^{\infty} \frac{(-1)^n x^{2n}}{(2n)!}, \\[8pt]
\frac{1}{1 - x} = \sum_{n=0}^{\infty} x^n, \qquad
\ln(1 + x) = \sum_{n=1}^{\infty} \frac{(-1)^{n+1} x^n}{n}, \qquad
\arctan x = \sum_{n=0}^{\infty} \frac{(-1)^n x^{2n+1}}{2n+1}
\end{gathered}
$$
The first three hold for every $x \in \mathbb{R}$; the geometric series for $-1 < x < 1$, that of the logarithm for $-1 < x \leq 1$, that of the arctangent for $-1 \leq x \leq 1$.
:::

## Differential equations

The solution methods are proved in the chapter [Differential equations](/en/analisi-1/equazioni-differenziali/teoria).

:::formula{#problema-di-cauchy titolo="Cauchy problem, existence and uniqueness"}
$$
\begin{cases}
y' = f(x, y) \\[2pt]
y(x_0) = y_0
\end{cases}
$$
If $f$ and $\dfrac{\partial f}{\partial y}$ are continuous on an open rectangle that contains $(x_0, y_0)$, the problem has one and only one solution, defined in a neighborhood of $x_0$. The constant of the general solution is obtained by substituting $x_0$ and $y_0$.
:::

:::formula{#variabili-separabili titolo="Separable differential equations"}
$$
y' = g(x)\, h(y) \implies \int \frac{dy}{h(y)} = \int g(x)\, dx + C
$$
It holds in the regions where $h(y) \neq 0$, with $g$ continuous and $h$ of class $C^1$. Every $\bar{y}$ with $h(\bar{y}) = 0$ gives the constant solution $y \equiv \bar{y}$, which is added separately to the general solution.
:::

:::formula{#lineari-del-primo-ordine titolo="First-order linear equations"}
$$
\begin{gathered}
y' + a(x)\, y = b(x) \implies y(x) = e^{-A(x)} \left( C + \int b(x)\, e^{A(x)}\, dx \right), \\[8pt]
y(x) = e^{-A(x)} \left( y_0 + \int_{x_0}^{x} b(t)\, e^{A(t)}\, dt \right)
\end{gathered}
$$
They hold for $a$ and $b$ continuous on an interval $I$, with $A$ an antiderivative of $a$ and $C \in \mathbb{R}$. The second line is the solution of the Cauchy problem with $y(x_0) = y_0$, in which $A(x) = \displaystyle\int_{x_0}^{x} a(t)\, dt$ is the antiderivative of $a$ that vanishes at $x_0$. The solutions are defined on all of $I$ and have the form $C e^{-A(x)} + y_p(x)$, with $y_p$ a particular solution.
:::

:::formula{#equazione-di-bernoulli titolo="Bernoulli equation"}
$$
y' + a(x)\, y = b(x)\, y^{\alpha}, \qquad z = y^{1 - \alpha} \implies z' + (1 - \alpha)\, a(x)\, z = (1 - \alpha)\, b(x)
$$
It holds for $\alpha \neq 0$, $\alpha \neq 1$, in the regions where $y \neq 0$, with $y > 0$ if $\alpha$ is not an integer. For $\alpha > 0$ also $y \equiv 0$ is a solution.
:::

:::formula{#equazione-caratteristica titolo="Second-order homogeneous equations with constant coefficients"}
$$
y'' + a y' + b y = 0, \qquad r^2 + a r + b = 0, \qquad \Delta = a^2 - 4b
$$
$$
y(x) =
\begin{cases}
C_1 e^{r_1 x} + C_2 e^{r_2 x} & \text{if } \Delta > 0 \\[4pt]
(C_1 + C_2 x)\, e^{r x} & \text{if } \Delta = 0 \\[4pt]
e^{\lambda x} \bigl( C_1 \cos(\mu x) + C_2 \sin(\mu x) \bigr) & \text{if } \Delta < 0
\end{cases}
$$
They hold for $a, b \in \mathbb{R}$ and $C_1, C_2 \in \mathbb{R}$. Here $r_1 \neq r_2$ are the real roots, $r = -\dfrac{a}{2}$ the double root, $\lambda \pm i\mu$ the complex conjugate roots, with $\lambda = -\dfrac{a}{2}$ and $\mu = \dfrac{\sqrt{-\Delta}}{2}$.
:::

:::formula{#struttura-dell-integrale-generale titolo="Structure of the general solution"}
$$
y = C_1 y_1 + C_2 y_2 + y_p
$$
It holds for $y'' + a y' + b y = f(x)$ with $f$ continuous, where $y_1$ and $y_2$ are non-proportional solutions of the associated homogeneous equation and $y_p$ is any particular solution of the complete equation. If $f = f_1 + f_2$, the sum of the particular solutions relative to $f_1$ and to $f_2$ is a particular solution relative to $f$.
:::

:::formula{#metodo-di-somiglianza titolo="Method of undetermined coefficients"}
$$
\begin{array}{lll}
f(x) & \text{trial } y_p & \text{associated number} \\
\hline
p_n(x) & q_n(x) & 0 \\[4pt]
A\, e^{\gamma x} & a_0\, e^{\gamma x} & \gamma \\[4pt]
p_n(x)\, e^{\gamma x} & q_n(x)\, e^{\gamma x} & \gamma \\[4pt]
A \cos(\omega x) + B \sin(\omega x) & a_0 \cos(\omega x) + b_0 \sin(\omega x) & \pm i\omega \\[4pt]
e^{\gamma x} \bigl( A \cos(\omega x) + B \sin(\omega x) \bigr) & e^{\gamma x} \bigl( a_0 \cos(\omega x) + b_0 \sin(\omega x) \bigr) & \gamma \pm i\omega
\end{array}
$$
Here $p_n$ is a polynomial of degree $n$ and $q_n$ a polynomial of degree $n$ with coefficients to be determined. If the associated number is a simple root of the characteristic equation, the trial solution is multiplied by $x$; if it is a double root, by $x^2$. The coefficients are found by substituting $y_p$ into the equation.
:::

:::formula{#variazione-delle-costanti titolo="Variation of parameters"}
$$
y_p = -y_1 \int \frac{y_2\, f}{W}\, dx + y_2 \int \frac{y_1\, f}{W}\, dx, \qquad W = y_1 y_2' - y_1' y_2
$$
It holds for $f$ continuous, with $y_1$ and $y_2$ non-proportional solutions of the homogeneous equation associated with $y'' + a y' + b y = f(x)$; the Wronskian $W$ never vanishes. It also applies to forcing terms that do not appear in the table of the method of undetermined coefficients.
:::

:::formula{#problema-di-cauchy-del-secondo-ordine titolo="Second-order Cauchy problem"}
$$
\begin{cases}
y'' + a y' + b y = f(x) \\[2pt]
y(x_0) = y_0 \\[2pt]
y'(x_0) = v_0
\end{cases}
$$
With $f$ continuous on an interval $I$ and $x_0 \in I$ the problem has one and only one solution, defined on all of $I$. The constants $C_1$ and $C_2$ are obtained by imposing the two conditions on the general solution and on its derivative.
:::

:::formula{#equazioni-di-ordine-n titolo="Linear homogeneous equations of order n"}
$$
\begin{gathered}
y^{(n)} + a_{n-1} y^{(n-1)} + \cdots + a_1 y' + a_0 y = 0, \\[6pt]
r^n + a_{n-1} r^{n-1} + \cdots + a_1 r + a_0 = 0
\end{gathered}
$$
It holds for real constant coefficients $a_0, \dots, a_{n-1}$. A real root $r$ of multiplicity $m$ gives the solutions $e^{rx}, x e^{rx}, \dots, x^{m-1} e^{rx}$; a pair of roots $\lambda \pm i\mu$ of multiplicity $m$ gives $x^k e^{\lambda x} \cos(\mu x)$ and $x^k e^{\lambda x} \sin(\mu x)$ for $k = 0, \dots, m-1$. The general solution is the linear combination of the $n$ solutions thus obtained.
:::
