---
titolo: Complex numbers
sommario: What complex numbers are, how they are represented in algebraic, trigonometric and exponential form, how powers and roots are computed, and how equations are solved in the complex field.
---

## Definition and algebraic form

:::definizione{#numero-complesso titolo="Complex number"}
A **complex number** is an ordered pair $(a, b)$ of real numbers, with sum and product defined by
$$
\begin{gathered}
(a, b) + (c, d) = (a + c,\; b + d), \\[4pt]
(a, b) \cdot (c, d) = (ac - bd,\; ad + bc).
\end{gathered}
$$
The set of complex numbers is denoted by $\mathbb{C}$. Setting $i = (0, 1)$, the definition of product gives $i^2 = (0,1) \cdot (0,1) = (-1, 0)$, and identifying $(a, 0)$ with the real number $a$ one obtains the notation
$$
z = (a, b) = a + i b, \qquad i^2 = -1 ,
$$
called the **algebraic form**. In algebraic form one computes as with polynomials in $i$, replacing $i^2$ with $-1$ *every time* it appears.
:::

:::definizione{#parte-reale-immaginaria titolo="Real part and imaginary part"}
For $z = a + ib$ with $a, b \in \mathbb{R}$ we set
$$
\operatorname{Re}(z) = a, \qquad \operatorname{Im}(z) = b .
$$
The imaginary part is the real number $b$, *not* $ib$. Two complex numbers are **equal** *if and only if* they have the same real part and the same imaginary part; equations solved by setting $z = x + iy$ are based on this property, because an equality in $\mathbb{C}$ is equivalent to a **system of two equalities** in $\mathbb{R}$.
:::

:::osservazione
In $\mathbb{C}$ there is *no* **ordering** compatible with the operations: expressions such as $z_1 < z_2$ have no meaning between non-real complex numbers. Inequalities in $\mathbb{C}$ always concern **real quantities**, such as the modulus or the real part.
:::

## Operations

:::definizione{#operazioni titolo="Sum, product, reciprocal and quotient"}
For $z = a + ib$ and $w = c + id$:
$$
\begin{gathered}
z + w = (a + c) + i(b + d), \\[4pt]
z \cdot w = (ac - bd) + i(ad + bc), \\[6pt]
\frac{1}{z} = \frac{a - ib}{a^2 + b^2} \quad (z \neq 0), \qquad
\frac{z}{w} = z \cdot \frac{1}{w} \quad (w \neq 0).
\end{gathered}
$$
The product is obtained by expanding $(a + ib)(c + id)$ with the distributive property and substituting $i^2 = -1$. For the reciprocal and the quotient, numerator and denominator are multiplied by $c - id$, called the **conjugate** of the denominator $c + id$, so that the denominator becomes the real number $(c + id)(c - id) = c^2 + d^2$. With these operations $\mathbb{C}$ is a **field**: the same algebraic rules as in $\mathbb{R}$ hold.
:::

:::esempio{titolo="Quotient in algebraic form"}
$$
\frac{2 + i}{1 - 3i}
= \frac{(2 + i)(1 + 3i)}{(1 - 3i)(1 + 3i)}
= \frac{2 + 6i + i + 3i^2}{1 + 9}
= \frac{-1 + 7i}{10}
= -\frac{1}{10} + \frac{7}{10}\, i
$$
Numerator and denominator are multiplied by $1 + 3i$, the conjugate of the denominator; the denominator becomes $1^2 + 3^2 = 10$, which is **real**, so the result splits into real part and imaginary part.
:::

## Conjugate

:::definizione{#coniugato titolo="Conjugate and its properties"}
The **conjugate** of $z = a + ib$ is
$$
\bar{z} = a - ib .
$$
For every $z, w \in \mathbb{C}$ the following hold:
$$
\begin{gathered}
\overline{z + w} = \bar{z} + \bar{w}, \qquad \overline{z \cdot w} = \bar{z} \cdot \bar{w}, \qquad \overline{\bar{z}} = z, \\[6pt]
z + \bar{z} = 2 \operatorname{Re}(z), \qquad z - \bar{z} = 2i \operatorname{Im}(z),
\end{gathered}
$$
and moreover $z = \bar{z}$ *if and only if* $z$ is **real**. The conjugate is used to make denominators real and to extract real part and imaginary part, and it appears in equations with $\bar{z}$, which are solved by setting $z = x + iy$.
:::

:::definizione{#modulo titolo="Modulus and its properties"}
The **modulus** of $z = a + ib$ is the real number
$$
|z| = \sqrt{a^2 + b^2} \geq 0 ,
$$
which is zero *only* for $z = 0$. For every $z, w \in \mathbb{C}$ the following hold:
$$
\begin{gathered}
z \cdot \bar{z} = |z|^2, \qquad |z \cdot w| = |z| \, |w|, \qquad \left| \frac{z}{w} \right| = \frac{|z|}{|w|} \ \ (w \neq 0), \\[6pt]
|z + w| \leq |z| + |w| \quad \text{(triangle inequality)}.
\end{gathered}
$$
The identity $z \bar{z} = |z|^2$ is verified by computation: $(a + ib)(a - ib) = a^2 + b^2$. From it follow the **reciprocal formula**, $\dfrac{1}{z} = \dfrac{\bar{z}}{|z|^2}$, and the **multiplicativity of the modulus**: $|zw|^2 = zw \, \overline{zw} = z \bar{z} \, w \bar{w} = |z|^2 |w|^2$. The trigonometric form and the loci in the plane described by equations such as $|z - z_0| = r$ are based on the modulus.
:::

## The complex plane

:::definizione{#piano-di-gauss titolo="Complex plane (Gauss plane)"}
The number $z = a + ib$ is represented in the Cartesian plane by the point with coordinates $(a, b)$: the horizontal axis contains the real numbers, the vertical axis the purely imaginary numbers $ib$. With this identification

- the sum $z + w$ is the sum of the vectors joining the origin to the points $z$ and $w$ (**parallelogram rule**);
- the modulus $|z|$ is the **distance** of the point $z$ from the origin, and $|z - w|$ is the distance between the points $z$ and $w$;
- the conjugate $\bar{z}$ is the **reflection** of $z$ across the real axis.

The interpretation of $|z - w|$ as a distance translates equations and inequalities with the modulus into loci: $|z - z_0| = r$ is the circle with center $z_0$ and radius $r$, $|z - z_0| \leq r$ is the corresponding disk, $|z - z_1| = |z - z_2|$ is the perpendicular bisector of the segment with endpoints $z_1$ and $z_2$.

::grafico{xmin=-1 xmax=5 ymin=-1 ymax=4 uguale=1 nomi="Re,Im" vettori="0,0,3,1,z;0,0,1,2,w;0,0,4,3,z + w" segmenti="3,1,4,3;1,2,4,3" titolo="Parallelogram rule: with $z = 3 + i$ and $w = 1 + 2i$ the sum $z + w = 4 + 3i$ is the diagonal of the parallelogram with sides $z$ and $w$"}

::grafico{xmin=-1 xmax=4.5 ymin=-1 ymax=5 uguale=1 nomi="Re,Im" vettori="0,0,3,4,z" segmenti="3,0,3,4;0,4,3,4" titolo="The modulus of $z = 3 + 4i$ is the distance of the point $(3, 4)$ from the origin: $|z| = \sqrt{3^2 + 4^2} = 5$"}

::grafico{xmin=-1 xmax=4.5 ymin=-3 ymax=3 uguale=1 nomi="Re,Im" vettori="0,0,3,2,z;0,0,3,-2,z̄" segmenti="3,2,3,-2" titolo="The conjugate $\bar{z} = 3 - 2i$ is the reflection of $z = 3 + 2i$ across the real axis"}

:::

:::esempio
$|z - i| = 2$ is the circle with center $(0, 1)$ and radius $2$. Setting $z = x + iy$, the equation becomes $\sqrt{x^2 + (y - 1)^2} = 2$, that is $x^2 + (y - 1)^2 = 4$, which is the **Cartesian equation** of the same circle.

::grafico{curve="2*cos(t),1+2*sin(t),0,6.29" xmin=-3 xmax=3 ymin=-1.5 ymax=3.5 uguale=1 nomi="Re,Im" punti="0,1,pieno,i" segmenti="0,1,2,1" titolo="$|z - i| = 2$: the points at distance $2$ from the point $i$ form the circle with center $(0, 1)$ and radius $2$"}

:::

## Trigonometric form

:::definizione{#forma-trigonometrica titolo="Trigonometric form and argument"}
Every $z = a + ib \neq 0$ can be written as
$$
z = \rho \, (\cos\theta + i \sin\theta), \qquad \rho = |z| = \sqrt{a^2 + b^2},
$$
where $\theta$, called the **argument** of $z$, is the angle that the vector of $z$ forms with the positive real semi-axis, determined by $\cos\theta = \dfrac{a}{\rho}$ and $\sin\theta = \dfrac{b}{\rho}$ up to multiples of $2\pi$. The **principal argument** is the value $\theta \in (-\pi, \pi]$; for $a \neq 0$ it is obtained from the arctangent of $\dfrac{b}{a}$, corrected according to the quadrant:
$$
\theta =
\begin{cases}
\arctan \dfrac{b}{a} & \text{if } a > 0 \\[10pt]
\arctan \dfrac{b}{a} + \pi & \text{if } a < 0,\ b \geq 0 \\[10pt]
\arctan \dfrac{b}{a} - \pi & \text{if } a < 0,\ b < 0 \\[10pt]
\dfrac{\pi}{2} & \text{if } a = 0,\ b > 0 \\[10pt]
-\dfrac{\pi}{2} & \text{if } a = 0,\ b < 0
\end{cases}
$$
The correction is necessary because the arctangent returns *only* angles in $\left(-\dfrac{\pi}{2}, \dfrac{\pi}{2}\right)$, that is points with positive real part. The trigonometric form is the representation suited to products, powers and roots.
:::

:::esempio{titolo="Trigonometric form of a number in the second quadrant"}
$z = -1 + i$: the modulus is $\rho = \sqrt{1 + 1} = \sqrt{2}$. Since $a = -1 < 0$ and $b = 1 \geq 0$, the principal argument is $\theta = \arctan(-1) + \pi = -\dfrac{\pi}{4} + \pi = \dfrac{3\pi}{4}$, so
$$
z = \sqrt{2} \left( \cos \frac{3\pi}{4} + i \sin \frac{3\pi}{4} \right).
$$

::grafico{curve="0.35*cos(t),0.35*sin(t),0,2.356" xmin=-2 xmax=1.5 ymin=-0.8 ymax=1.8 uguale=1 nomi="Re,Im" vettori="0,0,-1,1,z" segmenti="-1,0,-1,1;0,1,-1,1" etichette="0.12,0.5,θ" titolo="$z = -1 + i$ has modulus $\sqrt{2}$ and principal argument $\theta = \dfrac{3\pi}{4}$"}

:::

:::teorema{#prodotto-quoziente-trigonometrico titolo="Product and quotient in trigonometric form"}
If $z = \rho (\cos\theta + i \sin\theta)$ and $w = \sigma (\cos\varphi + i \sin\varphi)$ with $\rho, \sigma > 0$, then
$$
\begin{gathered}
z \cdot w = \rho \sigma \, \bigl( \cos(\theta + \varphi) + i \sin(\theta + \varphi) \bigr), \\[6pt]
\frac{z}{w} = \frac{\rho}{\sigma} \, \bigl( \cos(\theta - \varphi) + i \sin(\theta - \varphi) \bigr).
\end{gathered}
$$
In the product the moduli **multiply** and the arguments **add**; in the quotient the moduli divide and the arguments subtract. The product formula is obtained by expanding the product of the two trigonometric forms and applying the addition formulas for sine and cosine; the quotient formula follows by applying the product formula to $\dfrac{z}{w}$ and $w$. Multiplying by $w$ therefore means rotating by $\varphi$ and scaling by $\sigma$: it is this **geometric reading** that makes powers immediate.

::grafico{xmin=-1 xmax=3 ymin=-0.8 ymax=3.5 uguale=1 nomi="Re,Im" vettori="0,0,2,1,z;0,0,1,1,w;0,0,1,3,zw" titolo="With $z = 2 + i$ and $w = 1 + i$, of modulus $\sqrt{2}$ and argument $\dfrac{\pi}{4}$: the product $zw = 1 + 3i$ is $z$ rotated by $\dfrac{\pi}{4}$, with modulus $\sqrt{5} \cdot \sqrt{2} = \sqrt{10}$"}

:::

::::teorema{#de-moivre titolo="De Moivre's formula"}
For every $\rho > 0$, $\theta \in \mathbb{R}$ and $n \in \mathbb{N}$, $n \geq 1$:
$$
\bigl( \rho (\cos\theta + i \sin\theta) \bigr)^n = \rho^n \bigl( \cos(n\theta) + i \sin(n\theta) \bigr).
$$
It reduces the computation of a power to the **multiplication of the argument** by $n$: computing $z^{10}$ requires only the trigonometric form of $z$, instead of nine successive products. It is the tool for high powers and the starting point for $n$-th roots.

::grafico{xmin=-4.6 xmax=1.8 ymin=-0.8 ymax=2.8 uguale=1 nomi="Re,Im" vettori="0,0,1,1,z;0,0,0,2,z²;0,0,-2,2,z³;0,0,-4,0,z⁴" titolo="Powers of $z = 1 + i$: $z^2 = 2i$, $z^3 = -2 + 2i$, $z^4 = -4$; at each step the modulus is multiplied by $\sqrt{2}$ and the argument increases by $\dfrac{\pi}{4}$"}

:::dimostrazione
We proceed by **induction** on $n$. For $n = 1$ the formula states that $z^1 = \rho(\cos\theta + i\sin\theta)$, which is the trigonometric form of $z$, so the base case is verified. Assume the formula is true for $n$; then
$$
\begin{aligned}
z^{n+1} &= z^n \cdot z \\[6pt]
&= \rho^n \bigl( \cos(n\theta) + i \sin(n\theta) \bigr) \cdot \rho \, (\cos\theta + i \sin\theta) \\[6pt]
&= \rho^{n+1} \bigl( \cos(n\theta + \theta) + i \sin(n\theta + \theta) \bigr) \\[6pt]
&= \rho^{n+1} \bigl( \cos((n+1)\theta) + i \sin((n+1)\theta) \bigr),
\end{aligned}
$$
where the third step applies the **product formula** in trigonometric form. The formula holds for $n + 1$, so by induction it holds for *every* $n \geq 1$.
:::
::::

:::richiamo{titolo="Product in trigonometric form"}
If $z = \rho(\cos\theta + i\sin\theta)$ and $w = \sigma(\cos\varphi + i\sin\varphi)$, then $z w = \rho\sigma \bigl( \cos(\theta + \varphi) + i \sin(\theta + \varphi) \bigr)$.
:::

## Exponential form

:::definizione{#forma-esponenziale titolo="Euler's formula and exponential form"}
For $\theta \in \mathbb{R}$ we set
$$
e^{i\theta} = \cos\theta + i \sin\theta
$$
(**Euler's formula**). Every $z \neq 0$ can then be written in **exponential form**
$$
z = \rho \, e^{i\theta}, \qquad \rho = |z|, \quad \theta = \arg z .
$$
The definition is consistent with the properties of powers: from the product in trigonometric form it follows that $e^{i\theta} e^{i\varphi} = e^{i(\theta + \varphi)}$, and De Moivre's formula becomes $\left( \rho e^{i\theta} \right)^n = \rho^n e^{in\theta}$. The exponential form is the most compact one for products, quotients, powers and roots; moreover $e^{i\theta} = e^{i\varphi}$ *if and only if* $\theta - \varphi$ is an integer multiple of $2\pi$, and it is this property that generates the $n$ solutions of the equations $z^n = w$.
:::

:::esempio
$e^{i\pi} = \cos\pi + i\sin\pi = -1$, and $i = e^{i\frac{\pi}{2}}$. The number $z = \sqrt{2}\, e^{\,i\frac{3\pi}{4}}$ is the number $-1 + i$ of the example on the trigonometric form, written in exponential form.
:::

## n-th roots

::::teorema{#radici-n-esime titolo="n-th roots of a complex number"}
Let $w = \sigma \, e^{i\varphi} \neq 0$ and $n \geq 1$ an integer. The equation $z^n = w$ has *exactly* $n$ distinct solutions:
$$
z_k = \sqrt[n]{\sigma} \; e^{\,i \left( \frac{\varphi + 2k\pi}{n} \right)}, \qquad k = 0, 1, \dots, n - 1 .
$$
The $n$ roots *all* have the same modulus $\sqrt[n]{\sigma}$ and arguments that differ by $\dfrac{2\pi}{n}$: in the complex plane they are the vertices of a **regular polygon** with $n$ sides inscribed in the circle centered at the origin with radius $\sqrt[n]{\sigma}$. Once one root is known, the others are obtained by rotating it by $\dfrac{2\pi}{n}$.

::grafico{curve="2*cos(t),2*sin(t),0,6.29" xmin=-2.6 xmax=2.6 ymin=-2.4 ymax=2.4 uguale=1 nomi="Re,Im" punti="2,0,pieno,z₀;0.618,1.902,pieno,z₁;-1.618,1.176,pieno,z₂;-1.618,-1.176,pieno,z₃;0.618,-1.902,pieno,z₄" segmenti="2,0,0.618,1.902;0.618,1.902,-1.618,1.176;-1.618,1.176,-1.618,-1.176;-1.618,-1.176,0.618,-1.902;0.618,-1.902,2,0" titolo="The fifth roots of $32$ are $z_k = 2\, e^{\,i \frac{2k\pi}{5}}$ with $k = 0, \dots, 4$: vertices of a regular pentagon inscribed in the circle of radius $2$"}

:::dimostrazione
Setting $z = \rho \, e^{i\theta}$ with $\rho > 0$, by **De Moivre's formula** the equation $z^n = w$ is equivalent to $\rho^n e^{in\theta} = \sigma e^{i\varphi}$, that is to the system
$$
\begin{cases}
\rho^n = \sigma \\[4pt]
n\theta = \varphi + 2k\pi, \quad k \in \mathbb{Z} .
\end{cases}
$$
From the first equation, since $\rho$ and $\sigma$ are positive reals, it follows that $\rho = \sqrt[n]{\sigma}$; from the second, $\theta = \dfrac{\varphi + 2k\pi}{n}$. Two values $k$ and $k'$ give the same solution *if and only if* the corresponding arguments differ by a multiple of $2\pi$, that is if $k - k'$ is a multiple of $n$; therefore the values $k = 0, 1, \dots, n-1$ give $n$ pairwise **distinct** solutions, and every other $k$ repeats one of them.
:::
::::

:::definizione{#radici-unita titolo="n-th roots of unity"}
The solutions of $z^n = 1$ are
$$
z_k = e^{\,i \frac{2k\pi}{n}}, \qquad k = 0, 1, \dots, n - 1 :
$$
the vertices of the regular polygon with $n$ sides inscribed in the **unit circle**, with one vertex at $z_0 = 1$. For $n = 4$ the roots are $1, i, -1, -i$. Multiplying any $n$-th root of $w$ by the $n$ roots of unity gives *all* the $n$-th roots of $w$.

::grafico{curve="cos(t),sin(t),0,6.29" xmin=-1.6 xmax=1.6 ymin=-1.4 ymax=1.4 uguale=1 nomi="Re,Im" punti="1,0,pieno,1;0,1,pieno,i;-1,0,pieno,−1;0,-1,pieno,−i" segmenti="1,0,0,1;0,1,-1,0;-1,0,0,-1;0,-1,1,0" titolo="The fourth roots of unity $1$, $i$, $-1$, $-i$: vertices of a square inscribed in the unit circle"}

:::

## Equations in the complex field

:::teorema{#equazioni-secondo-grado titolo="Quadratic equations with real coefficients"}
The equation $a z^2 + b z + c = 0$ with $a, b, c \in \mathbb{R}$, $a \neq 0$ and discriminant $\Delta = b^2 - 4ac < 0$ has the two **complex conjugate solutions**
$$
z = \frac{-b \pm i \sqrt{-\Delta}}{2a} .
$$
The formula follows from **completing the square**: from $\left( z + \dfrac{b}{2a} \right)^2 = \dfrac{\Delta}{4a^2} < 0$ and from the fact that the complex numbers whose square equals the negative real $t$ are $\pm i\sqrt{-t}$. In $\mathbb{C}$ every quadratic equation with real coefficients therefore has **two solutions**, counted with their multiplicity.
:::

:::esempio
$z^2 - 2z + 5 = 0$: the discriminant is $\Delta = 4 - 20 = -16 < 0$, so
$$
z = \frac{2 \pm i \sqrt{16}}{2} = 1 \pm 2i .
$$
The two solutions are **conjugate**, as *always* happens for polynomials with real coefficients.
:::

:::definizione{#equazioni-in-c titolo="Equations with conjugate and modulus"}
An equation in which $\bar{z}$, $|z|$, $\operatorname{Re}(z)$ or $\operatorname{Im}(z)$ appear is *not* algebraic in $z$ alone and is solved by setting $z = x + iy$ with $x, y \in \mathbb{R}$: substituting $\bar{z} = x - iy$ and $|z| = \sqrt{x^2 + y^2}$, the equation splits into **real part and imaginary part** and becomes the system
$$
\begin{cases}
\operatorname{Re}(\text{left-hand side}) = \operatorname{Re}(\text{right-hand side}) \\[4pt]
\operatorname{Im}(\text{left-hand side}) = \operatorname{Im}(\text{right-hand side})
\end{cases}
$$
of two **real equations** in the unknowns $x$ and $y$. Equations of the form $z^n = w$ are instead solved with the formula for $n$-th roots, *without* going through $x$ and $y$.
:::

:::esempio
$z + 2\bar{z} = 3 + i$: setting $z = x + iy$, the left-hand side is $x + iy + 2(x - iy) = 3x - iy$, so the equation is equivalent to the system
$$
\begin{cases}
3x = 3 \\[4pt]
-y = 1
\end{cases}
$$
from which $x = 1$, $y = -1$, that is $z = 1 - i$.
:::

## Fundamental theorem of algebra

:::teorema{#teorema-fondamentale-algebra titolo="Fundamental theorem of algebra"}
Every polynomial $p(z) = a_n z^n + \dots + a_1 z + a_0$ with complex coefficients, of degree $n \geq 1$, has *at least one* root in $\mathbb{C}$. By repeatedly applying division by $z - z_0$ it follows that $p$ has *exactly* $n$ roots counted with multiplicity and **factors** as
$$
p(z) = a_n (z - z_1)(z - z_2) \cdots (z - z_n).
$$
In $\mathbb{C}$, unlike in $\mathbb{R}$, no polynomial equation is left **without solutions**: the number of roots is determined by the degree. The proof requires tools from complex analysis and is taken for granted.
:::

::::teorema{#radici-coniugate titolo="Complex conjugate roots of real polynomials"}
If $p$ is a polynomial with real coefficients and $z_0 \in \mathbb{C}$ is one of its roots, then $\bar{z}_0$ is also a **root** of $p$, with the *same* multiplicity. The non-real roots of a real polynomial therefore appear in **conjugate pairs**; in particular a real polynomial of odd degree has *at least one* real root.

:::dimostrazione
Let $p(z) = a_n z^n + \dots + a_1 z + a_0$ with $a_k \in \mathbb{R}$ for every $k$, and let $p(z_0) = 0$. Since the conjugate of a sum is the sum of the conjugates and the conjugate of a product is the product of the conjugates, we have $\overline{z_0^{\,k}} = \bar{z}_0^{\,k}$ and therefore
$$
\begin{aligned}
p(\bar{z}_0) &= \sum_{k=0}^{n} a_k \, \bar{z}_0^{\,k}
= \sum_{k=0}^{n} \overline{a_k} \; \overline{z_0^{\,k}} \\[6pt]
&= \overline{ \sum_{k=0}^{n} a_k \, z_0^{\,k} }
= \overline{p(z_0)} = \bar{0} = 0 ,
\end{aligned}
$$
where the second step uses $\overline{a_k} = a_k$, because the coefficients are real. Therefore $\bar{z}_0$ is a **root** of $p$. As for the multiplicity: if $z_0$ has multiplicity $m$, then $p(z) = (z - z_0)^m q(z)$ with $q(z_0) \neq 0$; conjugating the coefficients of the factorization one obtains that $\bar{z}_0$ has **multiplicity** $m$ for the conjugate polynomial, which coincides with $p$ because the coefficients are real.
:::
::::

:::richiamo{titolo="Conjugate and operations"}
For every $z, w \in \mathbb{C}$: $\overline{z + w} = \bar{z} + \bar{w}$ and $\overline{z \cdot w} = \bar{z} \cdot \bar{w}$; moreover $\bar{z} = z$ if and only if $z$ is real.
:::

:::teorema{#fattorizzazione-reale titolo="Real factorization of polynomials"}
Every polynomial with real coefficients of degree $n \geq 1$ factors in $\mathbb{R}$ as a product of **first-degree factors** and **second-degree factors** with negative discriminant. The factorization is obtained from the complex one by pairing each non-real root $z_0 = \alpha + i\beta$ with its **conjugate**: the product
$$
(z - z_0)(z - \bar{z}_0) = z^2 - 2\alpha z + (\alpha^2 + \beta^2)
$$
has real coefficients and discriminant $4\alpha^2 - 4(\alpha^2 + \beta^2) = -4\beta^2 < 0$. This factorization is used in the integration of rational functions, where the irreducible second-degree factors produce the terms with logarithm and arctangent.
:::

:::esempio
$p(z) = z^4 - 16$: the roots are the fourth roots of $16$, that is $2, 2i, -2, -2i$. Pairing the conjugate roots $2i$ and $-2i$ one obtains the **real factorization**
$$
z^4 - 16 = (z - 2)(z + 2)(z^2 + 4).
$$
The factor $z^2 + 4$ has negative discriminant and **does not factor** further in $\mathbb{R}$.
:::
