---
titolo: Complex numbers
sommario: What complex numbers are, how to calculate with them in algebraic, trigonometric, and exponential form, how to represent them in the complex plane, how to find powers and roots using De Moivre's formula, and how to solve quadratic equations with a negative discriminant.
---

## The imaginary unit and algebraic form

:::definizione{#unita-immaginaria titolo="The imaginary unit"}
The equation $x^2 + 1 = 0$ has no real solutions because the square of a real number is never negative, so $x^2 + 1 \geq 1$. To solve equations of this kind, we introduce a new number that is not real. The **imaginary unit** is the number $i$ such that
$$
i^2 = -1 .
$$
With this number, the equation $x^2 + 1 = 0$ has the solution $x = i$ and also the solution $x = -i$, because $(-i)^2 = (-1)^2 \cdot i^2 = -1$. Similarly, the equation $x^2 = -9$ has solutions $3i$ and $-3i$, because $(3i)^2 = 9i^2 = -9$.
:::

:::definizione{#forma-algebrica titolo="A complex number in algebraic form"}
A **complex number** is an expression of the form
$$
z = a + bi ,
\qquad
\text{with } a, b \in \mathbb{R} .
$$
The real number $a$ is called the **real part** of $z$ and is denoted by $\operatorname{Re} z$. The real number $b$ is called the **imaginary part** and is denoted by $\operatorname{Im} z$. The expression $a + bi$ is called the **algebraic form** of $z$, and the set of complex numbers is denoted by $\mathbb{C}$.

For example, $z = 4 - 3i$ has $\operatorname{Re} z = 4$ and $\operatorname{Im} z = -3$. The imaginary part is the coefficient of $i$, so it is the real number $-3$, without the $i$.

- If $b = 0$, the number $z = a$ is real. Thus every real number is also a complex number, and $\mathbb{R}$ is contained in $\mathbb{C}$.
- If $a = 0$ and $b \neq 0$, the number $z = bi$ is called **purely imaginary**. Examples include $5i$ and $-\dfrac{i}{2}$.
:::

:::definizione{#uguaglianza titolo="Equality of two complex numbers"}
Two complex numbers are equal when they have the same real part and the same imaginary part:
$$
a + bi = c + di
\iff
\begin{cases}
a = c \\[4pt]
b = d
\end{cases}
$$
An equality between complex numbers is therefore equivalent to two equalities between real numbers and can be used to find two real unknowns. For example, the equality $(x - 1) + 6i = 3 + 2y\,i$, with $x$ and $y$ real, is equivalent to the system
$$
\begin{cases}
x - 1 = 3 \\
6 = 2y
\end{cases}
$$
so $x = 4$ and $y = 3$. In particular, $a + bi = 0$ if and only if $a = 0$ and $b = 0$.
:::

:::attenzione
There is no ordering of the complex numbers compatible with their arithmetic operations, and expressions such as $i > 0$ and $2 + i < 3$ have no meaning. If $i > 0$ held, multiplying by the positive number $i$ would give $i \cdot i > 0$, that is, $-1 > 0$, which is false. If $i < 0$ held, then $-i > 0$, and multiplication by $-i$ would give $(-i)^2 > 0$, again yielding $-1 > 0$. Thus inequalities are written only between real numbers, such as real parts, imaginary parts, and moduli.
:::

## Operations in algebraic form

:::teorema{#somma-prodotto titolo="Sum, difference, and product"}
Arithmetic with complex numbers follows the rules of algebra: treat $i$ as a variable and replace $i^2$ with $-1$ whenever it occurs. For $z = a + bi$ and $w = c + di$ we obtain
$$
\begin{aligned}
z + w &= (a + c) + (b + d)\,i , \\[6pt]
z - w &= (a - c) + (b - d)\,i , \\[6pt]
z \cdot w &= (ac - bd) + (ad + bc)\,i .
\end{aligned}
$$
The product formula follows from the distributive property: $(a + bi)(c + di) = ac + adi + bci + bd\,i^2$, and since $i^2 = -1$, the term $bd\,i^2$ becomes $-bd$. For example,
$$
(2 + 3i)(1 - 2i) = 2 - 4i + 3i - 6i^2 = 2 - i + 6 = 8 - i .
$$
The operations defined in this way have the same properties as arithmetic with real numbers (the commutative, associative, and distributive properties), so the familiar product identities also hold. For example, $(1 + i)^2 = 1 + 2i + i^2 = 2i$ and $(3 + i)(3 - i) = 9 - i^2 = 10$.
:::

:::teorema{#potenze-di-i titolo="Powers of the imaginary unit"}
The powers of $i$ with natural-number exponents repeat in cycles of four:
$$
i^0 = 1 ,
\qquad
i^1 = i ,
\qquad
i^2 = -1 ,
\qquad
i^3 = i^2 \cdot i = -i ,
\qquad
i^4 = i^2 \cdot i^2 = 1 .
$$
Since $i^4 = 1$, for every natural number $n$ we have $i^{n + 4} = i^n \cdot i^4 = i^n$. To find $i^n$, we therefore divide $n$ by $4$. If $r$ is the remainder, then $i^n = i^r$. For example, $27 = 4 \cdot 6 + 3$, so $i^{27} = i^3 = -i$. Likewise, $2026 = 4 \cdot 506 + 2$, so $i^{2026} = i^2 = -1$.
:::

:::esempio{titolo="Cube of a binomial"}
We calculate $(2 - i)^3$ using the formula for the cube of a binomial, $(a - b)^3 = a^3 - 3a^2 b + 3ab^2 - b^3$:
$$
\begin{aligned}
(2 - i)^3 &= 8 - 3 \cdot 4 \cdot i + 3 \cdot 2 \cdot i^2 - i^3 \\[6pt]
&= 8 - 12i - 6 + i \\[6pt]
&= 2 - 11i .
\end{aligned}
$$
The second step uses $i^2 = -1$ and $i^3 = -i$, so $-i^3 = i$.
:::

## Conjugates and quotients

:::definizione{#coniugato titolo="Complex conjugate"}
The **conjugate** of $z = a + bi$ is the number with the same real part and the opposite imaginary part:
$$
\bar z = a - bi .
$$
For example, the conjugate of $3 + 2i$ is $3 - 2i$, the conjugate of $-5i$ is $5i$, and the conjugate of a real number is the number itself. Multiplying a complex number by its conjugate gives a real number, which is why we use the conjugate to calculate quotients.
:::

::::teorema{#proprieta-coniugato titolo="Properties of the conjugate"}
For every $z = a + bi$ and every $w$ in $\mathbb{C}$, the following identities hold:
$$
z + \bar z = 2a ,
\qquad
z \cdot \bar z = a^2 + b^2 ,
\qquad
\overline{z + w} = \bar z + \bar w ,
\qquad
\overline{z \cdot w} = \bar z \cdot \bar w .
$$
The first two identities say that the sum and the product of a complex number and its conjugate are **real** numbers. In particular, the product is positive if $z \neq 0$. For $z = 3 + 2i$ we have $z + \bar z = 6$ and $z \cdot \bar z = 9 + 4 = 13$. The last two identities say that the conjugate of a sum or product is obtained by conjugating each term or factor. We will use them when solving equations with real coefficients.

:::dimostrazione
The first two identities follow by direct calculation. The sum is $(a + bi) + (a - bi) = 2a$. For the product we use the difference of squares identity:
$$
(a + bi)(a - bi) = a^2 - b^2 i^2 = a^2 + b^2 .
$$
For the third identity, let $w = c + di$. The sum $z + w$ is $(a + c) + (b + d)\,i$, so its conjugate is $(a + c) - (b + d)\,i$, which equals $\bar z + \bar w = (a - bi) + (c - di)$. For the fourth identity, compare the two sides. The product $z w$ is $(ac - bd) + (ad + bc)\,i$, so its conjugate is $(ac - bd) - (ad + bc)\,i$. On the other hand,
$$
\bar z \cdot \bar w = (a - bi)(c - di) = ac - adi - bci + bd\,i^2 = (ac - bd) - (ad + bc)\,i ,
$$
which equals $\overline{z w}$.
:::
::::

:::teorema{#quoziente titolo="Reciprocal and quotient"}
Suppose that $w = c + di$ is different from $0$. To calculate the quotient $\dfrac{z}{w}$, multiply the numerator and denominator by the conjugate of the denominator. The denominator becomes $w \bar w = c^2 + d^2$, a positive real number, and therefore
$$
\frac{z}{w} = \frac{z \cdot \bar w}{c^2 + d^2} ,
\qquad
\frac{1}{w} = \frac{\bar w}{c^2 + d^2} = \frac{c}{c^2 + d^2} - \frac{d}{c^2 + d^2}\,i .
$$
This gives the quotient in algebraic form, with separate real and imaginary parts. For example,
$$
\frac{3 + i}{1 - i} = \frac{(3 + i)(1 + i)}{(1 - i)(1 + i)} = \frac{3 + 3i + i + i^2}{1 + 1} = \frac{2 + 4i}{2} = 1 + 2i .
$$
In particular, $\dfrac{1}{i} = \dfrac{-i}{1} = -i$, because the conjugate of $i$ is $-i$ and $i \cdot (-i) = 1$.
:::

:::attenzione
The product $z \cdot \bar z$ differs from the square $z^2$. For $z = 3 + 4i$ we have $z \cdot \bar z = 9 + 16 = 25$, whereas
$$
z^2 = 9 + 24i + 16i^2 = -7 + 24i ,
$$
which is not a real number. The denominator of a quotient becomes real only when we multiply by the *conjugate*.
:::

:::esempio{titolo="A linear equation"}
Consider the equation $(2 + i)\,z = 1 + 3i$. The coefficient $2 + i$ is different from $0$, so we divide both sides by $2 + i$:
$$
z = \frac{1 + 3i}{2 + i} = \frac{(1 + 3i)(2 - i)}{(2 + i)(2 - i)} = \frac{2 - i + 6i - 3i^2}{4 + 1} = \frac{5 + 5i}{5} = 1 + i .
$$
Thus linear equations are solved by the same rules as in $\mathbb{R}$, using the conjugate to calculate the quotient.
:::

## The complex plane and the modulus

:::definizione{#piano-di-gauss titolo="The complex plane"}
A complex number $z = a + bi$ is determined by the pair of real numbers $(a, b)$. It can therefore be represented by the point $P(a, b)$ in a Cartesian plane in which the $x$-axis is called the **real axis** and the $y$-axis is called the **imaginary axis**. This plane is called the **complex plane**. The number $z$ can also be represented by the vector from the origin $O$ to the point $P$.

Real numbers lie on the real axis and purely imaginary numbers on the imaginary axis. The conjugate $\bar z = a - bi$ corresponds to the point $(a, -b)$, the reflection of $P$ across the real axis. The negative $-z$ corresponds to the point $(-a, -b)$, the reflection of $P$ through the origin.

::grafico{vettori="0,0,3,2,3 + 2i;0,0,3,-2,3 − 2i;0,0,-3,-2,−3 − 2i" punti="3,2,pieno;3,-2,pieno;-3,-2,pieno" segmenti="3,2,3,0;3,2,0,2" xmin=-4 xmax=5 ymin=-3 ymax=3 uguale=1 nomi="Re,Im" titolo="In the complex plane, $z = 3 + 2i$ is the point $(3, 2)$. Its conjugate $\bar z = 3 - 2i$ is its reflection across the real axis, and its negative $-z = -3 - 2i$ is its reflection through the origin"}

:::

:::teorema{#somma-vettori titolo="Addition and the parallelogram rule"}
In the sum $z + w$, the real parts are added together and the imaginary parts are added together. These are the components of the two vectors. Therefore, the vector representing $z + w$ is the sum of the vectors representing $z$ and $w$ and is constructed using the **parallelogram rule**: it is the diagonal of the parallelogram with those two vectors as sides. For example, if $z = 1 + 2i$ and $w = 3 + i$, then $z + w = 4 + 3i$, and the points $O$, $(1, 2)$, $(4, 3)$, and $(3, 1)$ are the vertices of a parallelogram. Similarly, $z - w$ is the vector from the point $w$ to the point $z$.

::grafico{vettori="0,0,1,2,z;0,0,3,1,w;0,0,4,3,z + w" segmenti="1,2,4,3;3,1,4,3" punti="4,3,pieno" xmin=-1 xmax=5 ymin=-1 ymax=4 uguale=1 nomi="Re,Im" titolo="The sum of $z = 1 + 2i$ and $w = 3 + i$ is the diagonal $z + w = 4 + 3i$ of the parallelogram whose sides are the vectors $z$ and $w$"}

:::

:::definizione{#modulo titolo="Modulus of a complex number"}
The **modulus** of $z = a + bi$ is the distance from the point $(a, b)$ to the origin, that is, the length of the vector representing $z$. By the Pythagorean theorem,
$$
|z| = \sqrt{a^2 + b^2} .
$$
The modulus is a nonnegative real number, and it is $0$ only when $z = 0$. For example, $|3 - 4i| = \sqrt{9 + 16} = 5$ and $|-2i| = 2$. For a real number $a$, the modulus is $\sqrt{a^2}$, which is the absolute value $|a|$. This is why the same symbol is used. From the identity $z \bar z = a^2 + b^2$ it follows that
$$
z \cdot \bar z = |z|^2 ,
$$
and hence the reciprocal of a nonzero number can be written as $\dfrac{1}{z} = \dfrac{\bar z}{|z|^2}$.
:::

::::teorema{#proprieta-modulo titolo="Modulus of a product or quotient"}
For all $z$ and $w$ in $\mathbb{C}$, the following identities hold:
$$
|\bar z| = |z| ,
\qquad
|z \cdot w| = |z| \cdot |w| ,
\qquad
\left| \frac{z}{w} \right| = \frac{|z|}{|w|} \quad \text{if } w \neq 0 .
$$
These identities allow us to calculate the modulus of a product or quotient without carrying out the multiplication or division. For example,
$$
\left| \frac{3 + 4i}{1 - i} \right| = \frac{5}{\sqrt{2}} = \frac{5\sqrt{2}}{2} .
$$
The second identity also gives the **zero-product property** in $\mathbb{C}$: if $z w = 0$, then $|z| \cdot |w| = 0$. Thus at least one of the two moduli is $0$, and therefore at least one of the two numbers is $0$.

:::dimostrazione
The first identity holds because $\bar z = a - bi$ has modulus $\sqrt{a^2 + (-b)^2} = \sqrt{a^2 + b^2}$. For the second, calculate the square of the modulus using the formula $|u|^2 = u \bar u$ and the property of the conjugate of a product:
$$
|z w|^2 = (z w) \cdot \overline{z w} = z w \bar z \bar w = (z \bar z)(w \bar w) = |z|^2 |w|^2 .
$$
The two moduli are nonnegative numbers with the same square, so they are equal. For the third identity, set $q = \dfrac{z}{w}$. Then $z = q w$ and, by the second identity, $|z| = |q| \cdot |w|$. Dividing by $|w| \neq 0$ gives $|q| = \dfrac{|z|}{|w|}$.
:::
::::

:::esempio{titolo="Distance between two numbers and circles"}
The real and imaginary parts of $z - w$ are the differences between the corresponding coordinates of the two points, so $|z - w|$ is the **distance** between the points representing $z$ and $w$. For example, the distance between $1 + i$ and $4 + 5i$ is $|3 + 4i| = 5$.

Consequently, the set of numbers $z$ such that $|z - z_0| = r$, with $r > 0$, is the circle with center $z_0$ and radius $r$. For $|z - (1 + i)| = 2$, with $z = x + yi$, we have $z - (1 + i) = (x - 1) + (y - 1)\,i$, and the equation becomes
$$
\sqrt{(x - 1)^2 + (y - 1)^2} = 2
\iff
(x - 1)^2 + (y - 1)^2 = 4 ,
$$
where we squared both sides because they are nonnegative. This is the circle with center $(1, 1)$ and radius $2$. The inequality $|z - (1 + i)| < 2$ describes the points inside the circle.

::grafico{curve="1+2*cos(t),1+2*sin(t),0,6.29" punti="1,1,pieno,1 + i;3,1,pieno;1,3,pieno" vettori="1,1,3,1,r = 2" xmin=-2 xmax=4 ymin=-2 ymax=4 uguale=1 nomi="Re,Im" legenda="|z - (1 + i)| = 2" titolo="The numbers $z$ with $|z - (1 + i)| = 2$ form the circle with center $1 + i$ and radius $2$. For example, $3 + i$ and $1 + 3i$ lie on it"}

:::

## Argument and trigonometric form

:::definizione{#argomento titolo="Argument of a complex number"}
Let $z = a + bi$ be different from $0$ and represented by the point $P(a, b)$. An **argument** of $z$ is any angle $\theta$ through which the positive real axis can be rotated counterclockwise to coincide with the ray $OP$. The arguments of $z$ are infinite in number and differ by integer multiples of $2\pi$. The one in the interval $[0, 2\pi)$ is denoted by $\arg z$. Some books use the interval $(-\pi, \pi]$ instead. Both conventions give the same complex number.

The number $0$ has modulus $0$ and has no argument because the point $O$ does not determine a ray. For numbers on the axes, the argument can be read from the position of the point. For example, $\arg 5 = 0$, $\arg (2i) = \dfrac{\pi}{2}$, $\arg (-3) = \pi$, $\arg (-i) = \dfrac{3\pi}{2}$.
:::

:::teorema{#calcolo-argomento titolo="Calculating the argument"}
Let $z = a + bi \neq 0$ and $\rho = |z|$. The point $P(a, b)$ lies on the circle with center $O$ and radius $\rho$, so by the definitions of sine and cosine, its coordinates are $a = \rho\cos\theta$ and $b = \rho\sin\theta$. The argument $\theta$ is therefore the angle satisfying both equations
$$
\begin{cases}
\cos\theta = \dfrac{a}{\rho} \\[10pt]
\sin\theta = \dfrac{b}{\rho}
\end{cases}
$$
The signs of $\cos\theta$ and $\sin\theta$ determine the quadrant. For $z = -1 + \sqrt{3}\,i$, the modulus is $\rho = \sqrt{1 + 3} = 2$, so $\cos\theta = -\dfrac{1}{2}$ and $\sin\theta = \dfrac{\sqrt{3}}{2}$. The cosine is negative and the sine is positive. Therefore, $\theta$ lies in the second quadrant, and the angle with reference angle $\dfrac{\pi}{3}$ is $\theta = \pi - \dfrac{\pi}{3} = \dfrac{2\pi}{3}$.

::grafico{curve="2*cos(t),2*sin(t),0,6.29;0.6*cos(t),0.6*sin(t),0,2.094" vettori="0,0,-1,1.732,z" punti="-1,1.732,pieno" segmenti="-1,1.732,-1,0;-1,1.732,0,1.732" etichette="0.35,0.75,θ;-1.75,0.85,ρ = 2" xmin=-3 xmax=3 ymin=-3 ymax=3 uguale=1 nomi="Re,Im" legenda="|z| = 2;\theta = \frac{2\pi}{3}" titolo="The number $z = -1 + \sqrt{3}\,i$ has modulus $2$ and argument $\dfrac{2\pi}{3}$. Its projections onto the axes are $a = 2\cos\dfrac{2\pi}{3} = -1$ and $b = 2\sin\dfrac{2\pi}{3} = \sqrt{3}$"}

:::

:::attenzione
The condition $\tan\theta = \dfrac{b}{a}$ alone does not determine the argument because the tangent has period $\pi$ and therefore takes the same value at two angles whose terminal rays point in opposite directions. For $z = -1 - i$ we have $\dfrac{b}{a} = 1$, and $\arctan 1 = \dfrac{\pi}{4}$ is the argument of $1 + i$, in the first quadrant. The point $(-1, -1)$, however, is in the third quadrant, and the argument of $-1 - i$ is $\dfrac{\pi}{4} + \pi = \dfrac{5\pi}{4}$.
:::

:::definizione{#forma-trigonometrica titolo="Trigonometric form"}
By substituting $a = \rho\cos\theta$ and $b = \rho\sin\theta$ into the algebraic form, we can write every number $z \neq 0$ as
$$
z = \rho\,(\cos\theta + i\sin\theta) ,
$$
where $\rho = |z| > 0$ and $\theta$ is an argument of $z$. This expression is called the **trigonometric form** of $z$. For the number in the figure we have $-1 + \sqrt{3}\,i = 2\left( \cos\dfrac{2\pi}{3} + i\sin\dfrac{2\pi}{3} \right)$.

To go back to algebraic form, evaluate the sine and cosine. For example,
$$
4\left( \cos\frac{7\pi}{6} + i\sin\frac{7\pi}{6} \right) = 4\left( -\frac{\sqrt{3}}{2} - \frac{1}{2}\,i \right) = -2\sqrt{3} - 2i .
$$
Two nonzero numbers written in trigonometric form are equal if and only if they have the same modulus and their arguments differ by an integer multiple of $2\pi$. We will use this condition to find $n$-th roots.
:::

:::esempio{titolo="Trigonometric form of some complex numbers"}
For each number, first calculate the modulus, then find the argument from the equations for the cosine and sine.

- $1 + i$ has modulus $\sqrt{2}$ and satisfies $\cos\theta = \sin\theta = \dfrac{1}{\sqrt{2}} = \dfrac{\sqrt{2}}{2}$, so $1 + i = \sqrt{2}\left( \cos\dfrac{\pi}{4} + i\sin\dfrac{\pi}{4} \right)$.
- $\sqrt{3} - i$ has modulus $2$, with $\cos\theta = \dfrac{\sqrt{3}}{2}$ and $\sin\theta = -\dfrac{1}{2}$. The angle is in the fourth quadrant, so $\theta = 2\pi - \dfrac{\pi}{6} = \dfrac{11\pi}{6}$.
- $-4$ has modulus $4$ and argument $\pi$, so $-4 = 4\,(\cos\pi + i\sin\pi)$.
- $-3i$ has modulus $3$ and argument $\dfrac{3\pi}{2}$, so $-3i = 3\left( \cos\dfrac{3\pi}{2} + i\sin\dfrac{3\pi}{2} \right)$.
:::

## Products and quotients in trigonometric form

:::richiamo{titolo="Angle addition formulas"}
For all real $\alpha$ and $\beta$, the following identities hold:
$$
\cos(\alpha + \beta) = \cos\alpha\cos\beta - \sin\alpha\sin\beta ,
\qquad
\sin(\alpha + \beta) = \sin\alpha\cos\beta + \cos\alpha\sin\beta .
$$
:::

::::teorema{#prodotto-trigonometrico titolo="Product in trigonometric form"}
Let $z_1 = \rho_1(\cos\theta_1 + i\sin\theta_1)$ and $z_2 = \rho_2(\cos\theta_2 + i\sin\theta_2)$. Then
$$
z_1 z_2 = \rho_1 \rho_2 \big( \cos(\theta_1 + \theta_2) + i\sin(\theta_1 + \theta_2) \big) .
$$
In words, the modulus of the product is the **product of the moduli**, and an argument of the product is the **sum of the arguments**. Thus multiplying by $z_2$ scales the vector $z_1$ by the factor $\rho_2$ and rotates it through the angle $\theta_2$. For example, with $z_1 = 2\left( \cos\dfrac{\pi}{6} + i\sin\dfrac{\pi}{6} \right) = \sqrt{3} + i$ and $z_2 = \sqrt{2}\left( \cos\dfrac{\pi}{4} + i\sin\dfrac{\pi}{4} \right) = 1 + i$, the product has modulus $2\sqrt{2}$ and argument $\dfrac{\pi}{6} + \dfrac{\pi}{4} = \dfrac{5\pi}{12}$. In algebraic form the same product is $(\sqrt{3} + i)(1 + i) = (\sqrt{3} - 1) + (\sqrt{3} + 1)\,i$.

::grafico{vettori="0,0,1.732,1,z₁;0,0,1,1,z₂;0,0,0.732,2.732,z₁z₂" curve="0.7*cos(t),0.7*sin(t),0,1.309" xmin=-1 xmax=3 ymin=-1 ymax=3 uguale=1 nomi="Re,Im" legenda="\theta_1 + \theta_2 = \frac{5\pi}{12}" titolo="The product of $z_1 = \sqrt{3} + i$, with argument $\dfrac{\pi}{6}$, and $z_2 = 1 + i$, with argument $\dfrac{\pi}{4}$, has argument $\dfrac{5\pi}{12}$ and modulus $2 \cdot \sqrt{2}$"}

:::dimostrazione
The idea is to expand the product in algebraic form and recognize the angle addition formulas. Multiply the moduli and the two binomials:
$$
\begin{aligned}
z_1 z_2 &= \rho_1 \rho_2 (\cos\theta_1 + i\sin\theta_1)(\cos\theta_2 + i\sin\theta_2) \\[6pt]
&= \rho_1 \rho_2 \big( \cos\theta_1\cos\theta_2 + i\cos\theta_1\sin\theta_2 + i\sin\theta_1\cos\theta_2 + i^2\sin\theta_1\sin\theta_2 \big) \\[6pt]
&= \rho_1 \rho_2 \big( (\cos\theta_1\cos\theta_2 - \sin\theta_1\sin\theta_2) + i\,(\sin\theta_1\cos\theta_2 + \cos\theta_1\sin\theta_2) \big) .
\end{aligned}
$$
In the last step we substituted $i^2 = -1$ and collected the terms containing $i$. By the angle addition formulas, the first expression is $\cos(\theta_1 + \theta_2)$ and the second is $\sin(\theta_1 + \theta_2)$, which proves the result.
:::
::::

:::esempio{titolo="Multiplication by i is a rotation"}
The number $i$ has modulus $1$ and argument $\dfrac{\pi}{2}$. By the product rule, multiplying a number by $i$ leaves its modulus unchanged and adds $\dfrac{\pi}{2}$ to its argument. In other words, it rotates the vector counterclockwise through a right angle. For example, $i\,(3 + 2i) = 3i + 2i^2 = -2 + 3i$. Indeed, the point $(3, 2)$ rotates through $\dfrac{\pi}{2}$ about the origin to the point $(-2, 3)$. We use this fact in geometry problems, for example, to construct a square from one of its sides.
:::

::::teorema{#quoziente-trigonometrico titolo="Quotient in trigonometric form"}
Let $z_1 = \rho_1(\cos\theta_1 + i\sin\theta_1)$ and $z_2 = \rho_2(\cos\theta_2 + i\sin\theta_2)$, with $z_2 \neq 0$. Then
$$
\frac{z_1}{z_2} = \frac{\rho_1}{\rho_2} \big( \cos(\theta_1 - \theta_2) + i\sin(\theta_1 - \theta_2) \big) .
$$
Thus the modulus of the quotient is the quotient of the moduli, and an argument of the quotient is the difference of the arguments. With $z_1 = 6\left( \cos\dfrac{5\pi}{6} + i\sin\dfrac{5\pi}{6} \right)$ and $z_2 = 2\left( \cos\dfrac{\pi}{3} + i\sin\dfrac{\pi}{3} \right)$ we obtain
$$
\frac{z_1}{z_2} = 3\left( \cos\frac{\pi}{2} + i\sin\frac{\pi}{2} \right) = 3i .
$$
If the difference of the arguments is negative, add $2\pi$ to obtain the argument in $[0, 2\pi)$. With $z_1 = 1 = 1\,(\cos 0 + i\sin 0)$ and $z_2 = \rho\,(\cos\theta + i\sin\theta)$ we obtain the reciprocal $\dfrac{1}{z_2}$, which has modulus $\dfrac{1}{\rho}$ and argument $-\theta$.

:::dimostrazione
The idea is to check that multiplying the proposed number by $z_2$ gives $z_1$. Let
$$
q = \frac{\rho_1}{\rho_2} \big( \cos(\theta_1 - \theta_2) + i\sin(\theta_1 - \theta_2) \big) .
$$
By the product rule, $q \cdot z_2$ has modulus $\dfrac{\rho_1}{\rho_2} \cdot \rho_2 = \rho_1$ and argument $(\theta_1 - \theta_2) + \theta_2 = \theta_1$, so $q \cdot z_2 = z_1$. Since $z_2 \neq 0$, the equation $w \cdot z_2 = z_1$ has the unique solution $w = \dfrac{z_1}{z_2}$, obtained by dividing by $z_2$. Therefore $q = \dfrac{z_1}{z_2}$.
:::
::::

## De Moivre's formula

::::teorema{#de-moivre titolo="De Moivre's formula"}
Let $z = \rho(\cos\theta + i\sin\theta)$, and let $n$ be a natural number with $n \geq 1$. Then
$$
z^n = \rho^n \big( \cos(n\theta) + i\sin(n\theta) \big) .
$$
Thus raising a complex number to a power raises its modulus to the same power and multiplies its argument by $n$. The formula allows us to calculate high powers without expanding the binomial. For example, $1 + i = \sqrt{2}\left( \cos\dfrac{\pi}{4} + i\sin\dfrac{\pi}{4} \right)$, so
$$
(1 + i)^8 = \left( \sqrt{2} \right)^8 \big( \cos(2\pi) + i\sin(2\pi) \big) = 16 .
$$
For $z \neq 0$, the formula also holds for negative integer exponents, with $z^{-n} = \dfrac{1}{z^n}$.

:::dimostrazione
The idea is to apply the product rule repeatedly. With $z_1 = z_2 = z$, the rule gives
$$
z^2 = \rho \cdot \rho \,\big( \cos(\theta + \theta) + i\sin(\theta + \theta) \big) = \rho^2 \big( \cos(2\theta) + i\sin(2\theta) \big) .
$$
Now suppose the formula holds for some exponent $n$. Since $z^{n + 1} = z^n \cdot z$, the product rule gives $z^{n + 1}$ a modulus of $\rho^n \cdot \rho = \rho^{n + 1}$ and an argument of $n\theta + \theta = (n + 1)\,\theta$. Thus the formula also holds for the exponent $n + 1$. Starting with $n = 1$, for which the formula is just the trigonometric form of $z$, we obtain the formula for $n = 2$, then for $n = 3$, and so on for every $n$. This reasoning is called the principle of induction and is studied in the chapter on sequences and progressions.

For negative exponents, apply the quotient rule to $\dfrac{1}{z^n}$, with $1 = 1\,(\cos 0 + i\sin 0)$. This gives modulus $\dfrac{1}{\rho^n} = \rho^{-n}$ and argument $0 - n\theta = -n\theta$.
:::
::::

:::esempio{titolo="A power whose argument is not a special angle"}
We calculate $\left( 1 - \sqrt{3}\,i \right)^6$. The number has modulus $\sqrt{1 + 3} = 2$, and the cosine and sine of its argument are $\dfrac{1}{2}$ and $-\dfrac{\sqrt{3}}{2}$. It therefore lies in the fourth quadrant and has argument $\dfrac{5\pi}{3}$. By De Moivre's formula,
$$
\left( 1 - \sqrt{3}\,i \right)^6 = 2^6 \left( \cos\frac{30\pi}{3} + i\sin\frac{30\pi}{3} \right) = 64\,(\cos 10\pi + i\sin 10\pi) = 64 ,
$$
because $10\pi$ is a multiple of $2\pi$, so $\cos 10\pi = 1$ and $\sin 10\pi = 0$. Expanding the sixth power of the binomial would require seven terms for the same calculation.
:::

:::esempio{titolo="Deriving the double-angle formulas from De Moivre's formula"}
For $\rho = 1$ and $n = 2$, De Moivre's formula gives $(\cos\theta + i\sin\theta)^2 = \cos(2\theta) + i\sin(2\theta)$. The left-hand side expands as the square of a binomial:
$$
(\cos\theta + i\sin\theta)^2 = \cos^2\theta - \sin^2\theta + 2i\sin\theta\cos\theta .
$$
Since the two complex numbers are equal, their real parts are equal and their imaginary parts are equal. Therefore,
$$
\cos(2\theta) = \cos^2\theta - \sin^2\theta ,
\qquad
\sin(2\theta) = 2\sin\theta\cos\theta ,
$$
which are the double-angle formulas from the chapter on trigonometric identities. Taking $n = 3$ gives the triple-angle formulas in the same way.
:::

## Nth roots of a complex number

:::definizione{#radice-n-esima titolo="Complex nth root"}
Let $n$ be a natural number with $n \geq 2$, and let $z$ be a complex number. An **$n$-th root** of $z$ is any complex number $w$ such that
$$
w^n = z .
$$
Among the real numbers, $4$ has two square roots, $2$ and $-2$, whereas $-4$ has none. In $\mathbb{C}$, even $-4$ has two square roots, $2i$ and $-2i$, because $(2i)^2 = 4i^2 = -4$ and $(-2i)^2 = -4$. To distinguish complex roots from the principal root $\sqrt[n]{\ }$ of a positive real number, we write the equation $w^n = z$ in place of the radical sign.
:::

::::teorema{#radici-n-esime titolo="Nth roots in trigonometric form"}
Let $z = \rho(\cos\theta + i\sin\theta)$ be different from $0$, and let $n \geq 2$. Then $z$ has exactly $n$ distinct $n$-th roots, given by
$$
w_k = \sqrt[n]{\rho}\left( \cos\frac{\theta + 2k\pi}{n} + i\sin\frac{\theta + 2k\pi}{n} \right) ,
\qquad
k = 0, 1, \dots, n - 1 ,
$$
where $\sqrt[n]{\rho}$ is the principal root of the positive real number $\rho$. All the roots have the same modulus, and their arguments are obtained from the first, $\dfrac{\theta}{n}$, by adding $\dfrac{2\pi}{n}$ at each step. For example, the cube roots of $8 = 8\,(\cos 0 + i\sin 0)$ have modulus $\sqrt[3]{8} = 2$ and arguments $0$, $\dfrac{2\pi}{3}$, and $\dfrac{4\pi}{3}$:
$$
w_0 = 2 ,
\qquad
w_1 = -1 + \sqrt{3}\,i ,
\qquad
w_2 = -1 - \sqrt{3}\,i .
$$

::grafico{curve="2*cos(t),2*sin(t),0,6.29" linee="2,0 -1,1.732 -1,-1.732 2,0" punti="2,0,pieno,w₀;-1,1.732,pieno,w₁;-1,-1.732,pieno,w₂" xmin=-3 xmax=3 ymin=-3 ymax=3 uguale=1 nomi="Re,Im" legenda="|w| = 2" titolo="The cube roots of $8$ lie on the circle of radius $\sqrt[3]{8} = 2$ and are the vertices of an equilateral triangle, with arguments $0$, $\dfrac{2\pi}{3}$, and $\dfrac{4\pi}{3}$"}

:::dimostrazione
The idea is to write $w$ in trigonometric form and compare moduli and arguments. Let $w = r(\cos\varphi + i\sin\varphi)$ with $r > 0$. By De Moivre's formula, the equation $w^n = z$ becomes
$$
r^n \big( \cos(n\varphi) + i\sin(n\varphi) \big) = \rho\,(\cos\theta + i\sin\theta) .
$$
Two numbers in trigonometric form are equal if and only if they have the same modulus and their arguments differ by an integer multiple of $2\pi$. Thus we must have $r^n = \rho$ and $n\varphi = \theta + 2k\pi$ for some integer $k$. Since $r$ is a positive real number, the first condition gives $r = \sqrt[n]{\rho}$, and the second gives $\varphi = \dfrac{\theta + 2k\pi}{n}$.

It remains to count the distinct roots. For $k = 0, 1, \dots, n - 1$, the angles $\dfrac{\theta + 2k\pi}{n}$ lie in the interval $\left[ \dfrac{\theta}{n}, \dfrac{\theta}{n} + 2\pi \right)$, which has length $2\pi$, and are different from one another. They therefore give $n$ different points. The value $k = n$ gives the angle $\dfrac{\theta}{n} + 2\pi$, yielding $w_0$ again. In general, $k$ and $k + n$ give the same root. There are therefore exactly $n$ distinct roots.
:::
::::

:::osservazione{#poligono-regolare titolo="The roots are the vertices of a regular polygon"}
The $n$ distinct $n$-th roots of $z \neq 0$ lie on the circle with center $O$ and radius $\sqrt[n]{\rho}$, and two consecutive roots form an angle of $\dfrac{2\pi}{n}$ at the origin. Thus, for $n \geq 3$, the roots are the vertices of a **regular polygon** with $n$ sides inscribed in that circle. For example, the fourth roots of $-16 = 16\,(\cos\pi + i\sin\pi)$ have modulus $\sqrt[4]{16} = 2$ and arguments $\dfrac{\pi}{4}$, $\dfrac{3\pi}{4}$, $\dfrac{5\pi}{4}$, and $\dfrac{7\pi}{4}$:
$$
\sqrt{2} + \sqrt{2}\,i ,
\qquad
-\sqrt{2} + \sqrt{2}\,i ,
\qquad
-\sqrt{2} - \sqrt{2}\,i ,
\qquad
\sqrt{2} - \sqrt{2}\,i ,
$$
and they are the vertices of a square with side length $2\sqrt{2}$.

::grafico{curve="2*cos(t),2*sin(t),0,6.29" linee="1.414,1.414 -1.414,1.414 -1.414,-1.414 1.414,-1.414 1.414,1.414" punti="1.414,1.414,pieno,w₀;-1.414,1.414,pieno,w₁;-1.414,-1.414,pieno,w₂;1.414,-1.414,pieno,w₃" xmin=-3 xmax=3 ymin=-3 ymax=3 uguale=1 nomi="Re,Im" legenda="|w| = 2" titolo="The fourth roots of $-16$ have modulus $2$ and arguments $\dfrac{\pi}{4} + \dfrac{k\pi}{2}$, so they are the vertices of a square inscribed in the circle of radius $2$"}

The $n$-th roots of $1$ are called the **$n$-th roots of unity**. They have modulus $1$ and arguments $\dfrac{2k\pi}{n}$, and one of them is always the number $1$. The sixth roots of unity, for example, are the vertices of a regular hexagon inscribed in the circle of radius $1$.
:::

:::esempio{titolo="Square roots in algebraic form"}
Square roots can also be calculated in algebraic form when the argument is not a special angle. We seek the square roots of $3 + 4i$ in the form $w = x + yi$, with $x$ and $y$ real. Since $w^2 = x^2 - y^2 + 2xy\,i$, equality of the two complex numbers requires
$$
\begin{cases}
x^2 - y^2 = 3 \\[4pt]
2xy = 4
\end{cases}
$$
The second equation gives $y = \dfrac{2}{x}$, with $x \neq 0$. Substitution into the first gives $x^2 - \dfrac{4}{x^2} = 3$, that is, $x^4 - 3x^2 - 4 = 0$. This biquadratic equation gives $x^2 = 4$ or $x^2 = -1$. We discard the second possibility because $x$ is real. Thus $x = 2$ and $y = 1$, or $x = -2$ and $y = -1$, and the square roots of $3 + 4i$ are $2 + i$ and $-2 - i$.
:::

## Exponential form and Euler's formula

:::teorema{#formula-eulero titolo="Euler's formula"}
For every real number $\theta$, we define
$$
e^{i\theta} = \cos\theta + i\sin\theta .
$$
This identity is called **Euler's formula**. The number $e^{i\theta}$ has modulus $\sqrt{\cos^2\theta + \sin^2\theta} = 1$ and argument $\theta$. Thus, as $\theta$ varies, the point representing it traces the circle with center $O$ and radius $1$. For example,
$$
e^{i\frac{\pi}{2}} = \cos\frac{\pi}{2} + i\sin\frac{\pi}{2} = i ,
\qquad
e^{i\pi} = \cos\pi + i\sin\pi = -1 .
$$
The second identity can also be written as $e^{i\pi} + 1 = 0$ and contains the numbers $e$, $i$, $\pi$, $1$, and $0$. A proof of the formula uses the series expansions of the exponential, sine, and cosine functions, which are studied in college. In high school, the formula is taken as the definition of the exponential with an imaginary exponent.

::grafico{curve="cos(t),sin(t),0,6.29;0.3*cos(t),0.3*sin(t),0,0.785" vettori="0,0,0.707,0.707,P" punti="0.707,0.707,pieno" segmenti="0.707,0.707,0.707,0;0.707,0.707,0,0.707" etichette="0.75,-0.15,cos θ;-0.45,0.72,sin θ;0.38,0.12,θ" xmin=-2 xmax=2 ymin=-2 ymax=2 uguale=1 nomi="Re,Im" legenda="|e^{i\theta}| = 1" titolo="The number $e^{i\theta} = \cos\theta + i\sin\theta$ is the point on the circle of radius $1$ with argument $\theta$. In the figure, $\theta = \dfrac{\pi}{4}$"}

:::

:::definizione{#forma-esponenziale titolo="Exponential form"}
By Euler's formula, the trigonometric form $z = \rho(\cos\theta + i\sin\theta)$ can be written more briefly as
$$
z = \rho\,e^{i\theta} ,
$$
which is called the **exponential form** of $z$. For example, $1 + i = \sqrt{2}\,e^{i\frac{\pi}{4}}$, $-4 = 4\,e^{i\pi}$, and $-1 + \sqrt{3}\,i = 2\,e^{i\frac{2\pi}{3}}$.

In this notation, the product and quotient rules and De Moivre's formula follow the usual rules of exponents:
$$
\rho_1 e^{i\theta_1} \cdot \rho_2 e^{i\theta_2} = \rho_1 \rho_2\, e^{i(\theta_1 + \theta_2)} ,
\qquad
\frac{\rho_1 e^{i\theta_1}}{\rho_2 e^{i\theta_2}} = \frac{\rho_1}{\rho_2}\, e^{i(\theta_1 - \theta_2)} ,
\qquad
\left( \rho\,e^{i\theta} \right)^n = \rho^n e^{in\theta} .
$$
For example, $\left( 2\,e^{i\frac{\pi}{6}} \right)^3 = 8\,e^{i\frac{\pi}{2}} = 8i$. The conjugate of $\rho\,e^{i\theta}$ is $\rho\,e^{-i\theta}$, because reflection across the real axis preserves the modulus and changes the sign of the argument.
:::

:::esempio{titolo="Calculations in exponential form"}
Let $z = 4\,e^{i\frac{5\pi}{6}}$ and $w = 2\,e^{i\frac{\pi}{3}}$. Their product and quotient are
$$
z w = 8\,e^{i\left( \frac{5\pi}{6} + \frac{\pi}{3} \right)} = 8\,e^{i\frac{7\pi}{6}} ,
\qquad
\frac{z}{w} = 2\,e^{i\left( \frac{5\pi}{6} - \frac{\pi}{3} \right)} = 2\,e^{i\frac{\pi}{2}} = 2i .
$$
To return to algebraic form, evaluate the cosine and sine of the argument. Since $\cos\dfrac{7\pi}{6} = -\dfrac{\sqrt{3}}{2}$ and $\sin\dfrac{7\pi}{6} = -\dfrac{1}{2}$, we have $z w = -4\sqrt{3} - 4i$.
:::

## Equations over the complex numbers

::::teorema{#equazioni-secondo-grado titolo="Quadratic equations with a negative discriminant"}
Let $a z^2 + b z + c = 0$ be an equation with real coefficients, $a \neq 0$, and discriminant $\Delta = b^2 - 4ac < 0$. Then the equation has two solutions in $\mathbb{C}$:
$$
z_{1,2} = \frac{-b \pm i\sqrt{-\Delta}}{2a} ,
$$
which are **complex conjugates**. The number $-\Delta$ is positive, so $\sqrt{-\Delta}$ is its principal real square root. For example, $z^2 - 4z + 13 = 0$ has $\Delta = 16 - 52 = -36$, so
$$
z_{1,2} = \frac{4 \pm 6i}{2} = 2 \pm 3i .
$$
The relationships between the coefficients and the solutions also hold in this case: $z_1 + z_2 = 4 = -\dfrac{b}{a}$ and $z_1 z_2 = 4 + 9 = 13 = \dfrac{c}{a}$.

::grafico{punti="2,3,pieno,z₁ = 2 + 3i;2,-3,pieno,z₂ = 2 − 3i" segmenti="2,3,2,-3" xmin=-2 xmax=5 ymin=-4 ymax=4 uguale=1 nomi="Re,Im" titolo="The solutions of $z^2 - 4z + 13 = 0$ are $2 + 3i$ and $2 - 3i$. They are reflections of one another across the real axis because they are conjugates"}

:::dimostrazione
The idea is to complete the square, as in the derivation of the quadratic formula over the real numbers. Multiply both sides by $4a \neq 0$ and add $b^2$:
$$
4a^2 z^2 + 4ab z + b^2 = b^2 - 4ac
\iff
(2az + b)^2 = \Delta .
$$
Since $\Delta < 0$, we have $\Delta = -(-\Delta) = i^2 \left( \sqrt{-\Delta} \right)^2 = \left( i\sqrt{-\Delta} \right)^2$. The equation becomes a difference of squares equal to $0$, which factors as follows:
$$
\left( 2az + b - i\sqrt{-\Delta} \right)\left( 2az + b + i\sqrt{-\Delta} \right) = 0 .
$$
By the zero-product property, which also holds in $\mathbb{C}$, one of the two factors is zero, so $2az + b = \pm i\sqrt{-\Delta}$. Dividing by $2a$ gives the two solutions in the statement.
:::
::::

:::teorema{#teorema-fondamentale-algebra titolo="Fundamental theorem of algebra"}
Every polynomial equation of degree $n \geq 1$ with complex coefficients,
$$
a_n z^n + a_{n-1} z^{n-1} + \dots + a_1 z + a_0 = 0 ,
\qquad
a_n \neq 0 ,
$$
has at least one solution in $\mathbb{C}$. Consequently, the polynomial factors into a product of $n$ linear factors, and the equation has exactly $n$ solutions when each is counted as many times as its factor occurs. The proof is studied in college.

The theorem guarantees that no new numbers beyond $\mathbb{C}$ are required to solve polynomial equations. For example, the equation $z^3 - 1 = 0$ has degree $3$ and indeed has three solutions. Factoring $z^3 - 1 = (z - 1)\left( z^2 + z + 1 \right)$ gives $z = 1$ and, from the quadratic factor with $\Delta = -3$, the solutions $-\dfrac{1}{2} \pm \dfrac{\sqrt{3}}{2}\,i$. These are the cube roots of unity.
:::

:::osservazione{#radici-coniugate titolo="Polynomials with real coefficients"}
If a polynomial $p(z)$ has *real* coefficients and $z_0$ is a root, then $\bar z_0$ is also a root. Indeed, the conjugate of a sum is the sum of the conjugates, and the conjugate of a product is the product of the conjugates. Thus $\overline{p(z_0)} = p(\bar z_0)$, because each real coefficient equals its own conjugate. Since $p(z_0) = 0$, it follows that $p(\bar z_0) = \bar 0 = 0$ as well. The nonreal roots of a polynomial with real coefficients therefore occur in conjugate pairs.

For example, the polynomial $p(z) = z^3 - 3z^2 + 4z - 2$ vanishes at $z = 1$ because $1 - 3 + 4 - 2 = 0$. Synthetic division gives $p(z) = (z - 1)\left( z^2 - 2z + 2 \right)$, and the quadratic factor has $\Delta = 4 - 8 = -4$ and roots $1 \pm i$, which are conjugates.
:::
