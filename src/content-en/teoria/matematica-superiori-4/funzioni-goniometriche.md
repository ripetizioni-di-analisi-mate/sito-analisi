---
titolo: Angles and trigonometric functions
sommario: This chapter explains how to measure angles in degrees and radians, how sine, cosine, tangent, and cotangent are defined on the unit circle, how they are related, and how to find their values at special angles and related angles. It also describes the graphs of sine, cosine, tangent, and sinusoidal functions, explains simple harmonic motion, and defines arcsine, arccosine, and arctangent.
---

## Directed angles, degrees, and radians

:::definizione{#angolo-orientato titolo="Directed angle"}
An angle can be viewed as the rotation that takes one ray to another about their common endpoint $O$. The starting ray is called the **initial side**, and the final ray is called the **terminal side**. An angle is **directed** when the direction of rotation is also specified. By convention, *counterclockwise* rotation is positive and clockwise rotation is negative.

Directed angles can also describe rotations of more than one turn. A counterclockwise rotation of one and a half turns measures $360^\circ + 180^\circ = 540^\circ$, and a quarter turn clockwise measures $-90^\circ$. Two angles that differ by a whole number of turns have the same terminal side. For example, $30^\circ$, $390^\circ$, and $-330^\circ$ rotate the initial side to the same position, since $390^\circ = 30^\circ + 360^\circ$ and $-330^\circ = 30^\circ - 360^\circ$.
:::

:::definizione{#radiante titolo="Radian"}
Degree measure divides a full turn into $360$ equal parts, and the number $360$ is a conventional choice. Radian measure uses arc length. Draw a circle of radius $r > 0$ centered at the vertex of the angle. The central angle intercepts an arc of length $s$ on the circle. The **radian measure** of the angle is the ratio
$$
\alpha = \frac{s}{r} .
$$
The ratio does not depend on the radius chosen, since doubling the radius also doubles the arc length. An angle that intercepts an arc as long as the radius measures $1$ radian.

The circumference is $2\pi r$, so a full turn measures $\dfrac{2\pi r}{r} = 2\pi$ radians. Consequently, a straight angle measures $\pi$ and a right angle measures $\dfrac{\pi}{2}$. One radian corresponds to approximately $57.3^\circ$. An angle measure written without the degree symbol is understood to be in radians.

::grafico{curve="2*cos(t),2*sin(t),0,6.29;2*cos(t),2*sin(t),0,1" vettori="0,0,2,0;0,0,1.081,1.683" etichette="0.9,-0.35,r;1.85,1.25,s = r;0.35,0.15,1 rad" xmin=-3 xmax=3 ymin=-3 ymax=3 uguale=1 legenda=0 titolo="For an angle of $1$ radian in a circle of radius $r$, the intercepted arc has length $s = r$"}

:::

:::teorema{#conversione-gradi-radianti titolo="Converting between degrees and radians"}
Let $\alpha^\circ$ be the measure of an angle in degrees and $\alpha$ its measure in radians. The two measures are proportional, and a straight angle measures $180^\circ$ or $\pi$ radians, so the proportion $\alpha^\circ : 180 = \alpha : \pi$ holds. This gives the formulas
$$
\alpha = \frac{\pi}{180}\,\alpha^\circ ,
\qquad
\alpha^\circ = \frac{180}{\pi}\,\alpha .
$$
For example, $45^\circ$ corresponds to $\dfrac{\pi}{180} \cdot 45 = \dfrac{\pi}{4}$, and $\dfrac{5\pi}{6}$ radians corresponds to $\dfrac{180}{\pi} \cdot \dfrac{5\pi}{6} = 150^\circ$. The variable in the trigonometric functions studied here is a real number, so from this point on angles are measured in radians.
:::

:::esempio{titolo="Common angles in degrees and radians"}
The conversion formula gives the following table.

| degrees | $30^\circ$ | $45^\circ$ | $60^\circ$ | $90^\circ$ | $120^\circ$ | $135^\circ$ | $150^\circ$ | $180^\circ$ | $270^\circ$ | $360^\circ$ |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| radians | $\dfrac{\pi}{6}$ | $\dfrac{\pi}{4}$ | $\dfrac{\pi}{3}$ | $\dfrac{\pi}{2}$ | $\dfrac{2\pi}{3}$ | $\dfrac{3\pi}{4}$ | $\dfrac{5\pi}{6}$ | $\pi$ | $\dfrac{3\pi}{2}$ | $2\pi$ |

Each value can be obtained from the first three. For example, $120^\circ = 4 \cdot 30^\circ$, so $120^\circ$ corresponds to $4 \cdot \dfrac{\pi}{6} = \dfrac{2\pi}{3}$.
:::

:::teorema{#arco-settore titolo="Arc length and area of a circular sector"}
Let $\alpha$ be the radian measure of a central angle in a circle of radius $r$, with $0 < \alpha \leq 2\pi$. The length of the intercepted arc and the area of the corresponding sector are
$$
s = r\,\alpha ,
\qquad
A = \frac{1}{2}\,r^2 \alpha .
$$
The first formula follows from the definition of a radian by multiplying by $r$ on both sides of $\alpha = \dfrac{s}{r}$. For the second, the area of the sector is proportional to the angle, and the full angle $2\pi$ corresponds to the entire disk of area $\pi r^2$. Therefore $A = \pi r^2 \cdot \dfrac{\alpha}{2\pi} = \dfrac{1}{2}\,r^2 \alpha$.

For example, in a circle of radius $6\ \text{cm}$ the angle $\dfrac{\pi}{3}$ intercepts an arc of length $6 \cdot \dfrac{\pi}{3} = 2\pi\ \text{cm}$, and the sector has area $\dfrac{1}{2} \cdot 36 \cdot \dfrac{\pi}{3} = 6\pi\ \text{cm}^2$.
:::

## The unit circle, sine, and cosine

:::definizione{#circonferenza-goniometrica titolo="The unit circle"}
In the Cartesian plane, the **unit circle** is the circle centered at the origin $O$ with radius $1$ and equation $x^2 + y^2 = 1$. Take the positive $x$-axis as the initial side of each angle, so the starting point is $A(1, 0)$.

Each real number $\alpha$ corresponds to the point $P$ where the terminal side of the directed angle of measure $\alpha$ meets the circle. Since the radius is $1$, the radian measure of the angle equals the length of the arc $AP$ traced out. For example, the angle $\dfrac{\pi}{2}$ corresponds to the point $B(0, 1)$, the angle $\pi$ to the point $(-1, 0)$, and the angle $-\dfrac{\pi}{2}$ to the point $(0, -1)$.
:::

:::definizione{#seno-coseno titolo="Sine and cosine"}
Let $\alpha$ be a real number and $P$ the point on the unit circle corresponding to the angle $\alpha$. The **cosine** of $\alpha$ is the horizontal coordinate of $P$, and the **sine** of $\alpha$ is the vertical coordinate of $P$:
$$
P = (\cos\alpha, \sin\alpha) .
$$
In other words, the cosine measures the horizontal displacement of the point $P$ from $O$, and the sine measures its vertical displacement. The point $P$ lies on the circle of radius $1$, so its coordinates are between $-1$ and $1$:
$$
-1 \leq \sin\alpha \leq 1 ,
\qquad
-1 \leq \cos\alpha \leq 1 .
$$
The points already considered give the values $\cos 0 = 1$, $\sin 0 = 0$, $\cos\dfrac{\pi}{2} = 0$, $\sin\dfrac{\pi}{2} = 1$, $\cos\pi = -1$, and $\sin\pi = 0$. The functions $\alpha \mapsto \sin\alpha$ and $\alpha \mapsto \cos\alpha$ are called **trigonometric functions** and are defined for every real number.

::grafico{curve="cos(t),sin(t),0,6.29;0.3*cos(t),0.3*sin(t),0,0.927" vettori="0,0,0.6,0.8" segmenti="0.6,0,0.6,0.8;0,0.8,0.6,0.8" punti="0.6,0.8,pieno,P;1,0,pieno,A" etichette="0.32,-0.15,cos α;-0.55,0.85,sin α;0.33,0.22,α" xmin=-1.5 xmax=1.5 ymin=-1.5 ymax=1.5 uguale=1 legenda=0 titolo="The point $P$ corresponding to the angle $\alpha$ has horizontal coordinate $\cos\alpha$ and vertical coordinate $\sin\alpha$. Here $\cos\alpha = \dfrac{3}{5}$ and $\sin\alpha = \dfrac{4}{5}$"}

:::

:::osservazione{#segni-quadranti titolo="Signs of sine and cosine in the four quadrants"}
The signs of sine and cosine are the signs of the coordinates of $P$, so they depend on the quadrant in which $P$ lies.

| quadrant | angle | $\sin\alpha$ | $\cos\alpha$ |
| --- | --- | --- | --- |
| first | $0 < \alpha < \dfrac{\pi}{2}$ | $+$ | $+$ |
| second | $\dfrac{\pi}{2} < \alpha < \pi$ | $+$ | $-$ |
| third | $\pi < \alpha < \dfrac{3\pi}{2}$ | $-$ | $-$ |
| fourth | $\dfrac{3\pi}{2} < \alpha < 2\pi$ | $-$ | $+$ |

For example, $\alpha = \dfrac{4\pi}{3}$ is between $\pi$ and $\dfrac{3\pi}{2}$ because $\dfrac{4\pi}{3} \approx 4.19$. Therefore $P$ lies in the third quadrant, and $\sin\dfrac{4\pi}{3}$ and $\cos\dfrac{4\pi}{3}$ are both negative.
:::

:::teorema{#periodicita-seno-coseno titolo="Angles that differ by a multiple of 2π"}
For every real number $\alpha$ and every integer $k$, the following identities hold:
$$
\sin(\alpha + 2k\pi) = \sin\alpha ,
\qquad
\cos(\alpha + 2k\pi) = \cos\alpha .
$$
Indeed, the angles $\alpha$ and $\alpha + 2k\pi$ differ by $k$ full turns, so they have the same terminal side and determine the same point $P$ on the circle. These identities reduce any angle to one between $0$ and $2\pi$. For example, $\dfrac{13\pi}{2} = \dfrac{\pi}{2} + 3 \cdot 2\pi$, so $\sin\dfrac{13\pi}{2} = \sin\dfrac{\pi}{2} = 1$.
:::

## Tangent and cotangent

:::definizione{#tangente titolo="Tangent"}
Let $\alpha$ be a real number with $\cos\alpha \neq 0$. The **tangent** of $\alpha$ is the ratio of sine to cosine:
$$
\tan\alpha = \frac{\sin\alpha}{\cos\alpha} .
$$
The cosine is zero when $P$ is at the point $(0, 1)$ or the point $(0, -1)$, that is, when $\alpha = \dfrac{\pi}{2} + k\pi$ with $k \in \mathbb{Z}$. The tangent is therefore defined for
$$
\alpha \neq \frac{\pi}{2} + k\pi , \qquad k \in \mathbb{Z} .
$$
The tangent is positive when sine and cosine have the same sign, that is, in the first and third quadrants. It is negative in the second and fourth quadrants. For example, if $P = \left( \dfrac{3}{5}, \dfrac{4}{5} \right)$, then $\tan\alpha = \dfrac{4}{5} \cdot \dfrac{5}{3} = \dfrac{4}{3}$.
:::

::::teorema{#significato-tangente titolo="Geometric interpretation of the tangent"}
Let $\alpha$ be an angle with $\cos\alpha \neq 0$, and let $T$ be the point where the line $OP$ meets the line $x = 1$, which is tangent to the unit circle at $A(1, 0)$. Then
$$
T = (1, \tan\alpha) ,
$$
so $\tan\alpha$ is the vertical coordinate of the point $T$. Moreover, $\tan\alpha$ is the slope of the line $OP$, whose equation is $y = x\tan\alpha$.

This interpretation explains the name of the function and gives the sign and magnitude of the tangent directly. For example, for an angle close to $\dfrac{\pi}{2}$ the line $OP$ is nearly vertical and meets the line $x = 1$ very high up, so the tangent takes very large values.

::grafico{curve="cos(t),sin(t),0,6.29" linee="1,-2 1,2;0,0 1,1.5" segmenti="0.555,0,0.555,0.832" punti="0.555,0.832,pieno,P;1,1.5,pieno,T;1,0,pieno,A" etichette="1.1,0.7,tan α;0.3,-0.2,cos α" xmin=-1.5 xmax=2 ymin=-1.5 ymax=2 uguale=1 legenda=0 titolo="The line $OP$ meets the tangent line $x = 1$ at the point $T$, whose vertical coordinate is $\tan\alpha$. Here $\tan\alpha = \dfrac{3}{2}$"}

:::dimostrazione
The idea is that the line $OP$ passes through the origin, so its slope determines its equation. The line passes through $O(0, 0)$ and $P(\cos\alpha, \sin\alpha)$, with $\cos\alpha \neq 0$, so its slope is
$$
m = \frac{\sin\alpha - 0}{\cos\alpha - 0} = \tan\alpha
$$
and its equation is $y = x\tan\alpha$. The point $T$ lies on the line $x = 1$, so it can be found by substituting $x = 1$ into the equation of the line $OP$. This gives $y = \tan\alpha$, hence $T = (1, \tan\alpha)$.
:::
::::

:::definizione{#cotangente titolo="Cotangent"}
Let $\alpha$ be a real number with $\sin\alpha \neq 0$. The **cotangent** of $\alpha$ is the ratio
$$
\cot\alpha = \frac{\cos\alpha}{\sin\alpha} .
$$
The sine is zero at $\alpha = k\pi$, so the cotangent is defined for $\alpha \neq k\pi$, with $k \in \mathbb{Z}$. When both the tangent and the cotangent are defined, that is, for $\alpha \neq k\,\dfrac{\pi}{2}$, each is the reciprocal of the other:
$$
\cot\alpha = \frac{1}{\tan\alpha} .
$$
The cotangent has the same sign as the tangent in each quadrant and, like the tangent, has period $\pi$. For example, if $\tan\alpha = \dfrac{4}{3}$, then $\cot\alpha = \dfrac{3}{4}$. At $\alpha = \dfrac{\pi}{2}$ the tangent is undefined, while the cotangent equals $\dfrac{\cos\frac{\pi}{2}}{\sin\frac{\pi}{2}} = \dfrac{0}{1} = 0$.
:::

## Fundamental identities

::::teorema{#relazione-fondamentale titolo="First Pythagorean identity"}
For every real number $\alpha$,
$$
\sin^2\alpha + \cos^2\alpha = 1 .
$$
The notation $\sin^2\alpha$ denotes the square of the sine, $(\sin\alpha)^2$. This identity gives the cosine when the sine is known, and conversely, up to a sign:
$$
\cos\alpha = \pm\sqrt{1 - \sin^2\alpha} ,
\qquad
\sin\alpha = \pm\sqrt{1 - \cos^2\alpha} .
$$
The sign is determined by the quadrant of the angle. For example, if $\sin\alpha = \dfrac{5}{13}$ and $\alpha$ is in the second quadrant, then $\cos^2\alpha = 1 - \dfrac{25}{169} = \dfrac{144}{169}$. Cosine is negative in the second quadrant, so $\cos\alpha = -\dfrac{12}{13}$.

:::dimostrazione
The idea is to apply the Pythagorean theorem to the triangle whose hypotenuse is the radius $OP$. Let $P = (\cos\alpha, \sin\alpha)$ be the point corresponding to $\alpha$ and $H = (\cos\alpha, 0)$ its projection onto the $x$-axis. If $P$ does not lie on an axis, the triangle $OHP$ is right-angled at $H$, its legs have lengths $|\cos\alpha|$ and $|\sin\alpha|$, and its hypotenuse $OP$ has length $1$ because it is a radius of the unit circle. By the Pythagorean theorem,
$$
|\cos\alpha|^2 + |\sin\alpha|^2 = 1 ,
$$
and since the square of a number equals the square of its absolute value, this gives $\cos^2\alpha + \sin^2\alpha = 1$.

If $P$ lies on an axis, one coordinate is $0$ and the other is $1$ or $-1$, so the sum of the squares is still $1$. Equivalently, the identity states that the coordinates of $P$ satisfy the equation $x^2 + y^2 = 1$ of the unit circle.
:::
::::

::::teorema{#seconda-relazione titolo="Second Pythagorean identity"}
For every real number $\alpha$ with $\cos\alpha \neq 0$, that is, $\alpha \neq \dfrac{\pi}{2} + k\pi$,
$$
1 + \tan^2\alpha = \frac{1}{\cos^2\alpha} .
$$
The identity gives the cosine when the tangent is known, again up to a sign:
$$
\cos\alpha = \pm\frac{1}{\sqrt{1 + \tan^2\alpha}} .
$$
For example, if $\tan\alpha = 2$ and $\alpha$ is in the first quadrant, then $\cos^2\alpha = \dfrac{1}{1 + 4} = \dfrac{1}{5}$, so $\cos\alpha = \dfrac{1}{\sqrt{5}} = \dfrac{\sqrt{5}}{5}$. Finally, $\sin\alpha = \tan\alpha \cdot \cos\alpha = \dfrac{2\sqrt{5}}{5}$.

:::dimostrazione
The idea is to divide the first Pythagorean identity by $\cos^2\alpha$. By assumption $\cos\alpha \neq 0$, so we can divide by $\cos^2\alpha$ on both sides of $\sin^2\alpha + \cos^2\alpha = 1$:
$$
\frac{\sin^2\alpha}{\cos^2\alpha} + \frac{\cos^2\alpha}{\cos^2\alpha} = \frac{1}{\cos^2\alpha} .
$$
The first term is the square of $\dfrac{\sin\alpha}{\cos\alpha} = \tan\alpha$ and the second equals $1$, so $\tan^2\alpha + 1 = \dfrac{1}{\cos^2\alpha}$.
:::
::::

:::esempio{titolo="Finding all the trigonometric functions from one"}
Suppose that $\cos\alpha = -\dfrac{3}{5}$ and $\pi < \alpha < \dfrac{3\pi}{2}$. By the first Pythagorean identity,
$$
\sin^2\alpha = 1 - \frac{9}{25} = \frac{16}{25} .
$$
The angle is in the third quadrant, where sine is negative, so $\sin\alpha = -\dfrac{4}{5}$. The definitions then give
$$
\tan\alpha = \frac{-\frac{4}{5}}{-\frac{3}{5}} = \frac{4}{3} ,
\qquad
\cot\alpha = \frac{3}{4} .
$$
The tangent is positive, as expected for the third quadrant. As a check, $1 + \tan^2\alpha = 1 + \dfrac{16}{9} = \dfrac{25}{9}$, which is precisely $\dfrac{1}{\cos^2\alpha}$.
:::

:::attenzione
The expressions $\sin^2\alpha$ and $\sin\left( \alpha^2 \right)$ represent different numbers. The first is the square of the sine, and the second is the sine of the square of the angle. For $\alpha = \dfrac{\pi}{2}$ we have $\sin^2\dfrac{\pi}{2} = 1$, whereas $\sin\left( \dfrac{\pi^2}{4} \right) \approx \sin 2.47 \approx 0.62$.
:::

## Values at special angles

::::teorema{#valori-pi-quarti titolo="Sine and cosine of π/4"}
The following equalities hold:
$$
\sin\frac{\pi}{4} = \cos\frac{\pi}{4} = \frac{\sqrt{2}}{2} ,
\qquad
\tan\frac{\pi}{4} = 1 .
$$
The angle $\dfrac{\pi}{4}$ corresponds to $45^\circ$, and the corresponding point $P$ lies on the bisector $y = x$ of the first quadrant. These values can be used to evaluate expressions such as $\sin\dfrac{\pi}{4} \cdot \cos\dfrac{\pi}{4} = \dfrac{2}{4} = \dfrac{1}{2}$.

::grafico{linee="0,0 2,0 2,2 0,2 0,0;0,0 2,2" segmenti="0,0,2,2" etichette="1,-0.3,1;2.15,1,1;0.7,1.2,√2;0.5,0.15,45°" assi=0 xmin=-0.5 xmax=2.8 ymin=-0.6 ymax=2.4 uguale=1 titolo="The diagonal of a square of side length $1$ has length $\sqrt{2}$ and makes an angle of $\dfrac{\pi}{4}$ with the side"}

:::dimostrazione
The idea is to find the sine and cosine from an isosceles right triangle. The point $P = (\cos\dfrac{\pi}{4}, \sin\dfrac{\pi}{4})$ lies on the bisector $y = x$ because the angle $\dfrac{\pi}{4}$ is half a right angle, so $\sin\dfrac{\pi}{4} = \cos\dfrac{\pi}{4}$. Denote their common value by $c$. It is positive because $P$ lies in the first quadrant, and the first Pythagorean identity gives
$$
c^2 + c^2 = 1
\quad \Longrightarrow \quad
c^2 = \frac{1}{2}
\quad \Longrightarrow \quad
c = \frac{1}{\sqrt{2}} = \frac{\sqrt{2}}{2} .
$$
The tangent is the ratio of two equal numbers different from $0$, so it equals $1$. The square of side length $1$ in the figure gives the same result, since its diagonal has length $\sqrt{2}$ by the Pythagorean theorem and the ratio of side to diagonal is $\dfrac{1}{\sqrt{2}}$.
:::
::::

::::teorema{#valori-pi-sesti-terzi titolo="Sine and cosine of π/6 and π/3"}
The following equalities hold:
$$
\sin\frac{\pi}{6} = \frac{1}{2} , \quad \cos\frac{\pi}{6} = \frac{\sqrt{3}}{2} ,
\qquad
\sin\frac{\pi}{3} = \frac{\sqrt{3}}{2} , \quad \cos\frac{\pi}{3} = \frac{1}{2} .
$$
Consequently, $\tan\dfrac{\pi}{6} = \dfrac{1}{\sqrt{3}} = \dfrac{\sqrt{3}}{3}$ and $\tan\dfrac{\pi}{3} = \sqrt{3}$. The angles $\dfrac{\pi}{6}$ and $\dfrac{\pi}{3}$ correspond to $30^\circ$ and $60^\circ$. The sine of one is the cosine of the other because the two angles are complementary.

::grafico{linee="0,0 2,0 1,1.732 0,0" segmenti="1,0,1,1.732" etichette="0.45,-0.3,1;1.45,-0.3,1;0.1,1,2;1.1,0.8,√3;0.35,0.12,60°;0.82,1.2,30°" assi=0 xmin=-0.5 xmax=2.5 ymin=-0.6 ymax=2.1 uguale=1 titolo="The altitude of an equilateral triangle of side length $2$ has length $\sqrt{3}$ and divides the triangle into two right triangles with angles $\dfrac{\pi}{3}$ and $\dfrac{\pi}{6}$"}

:::dimostrazione
The idea is to divide an equilateral triangle in half. Consider an equilateral triangle of side length $2$. Its angles measure $\dfrac{\pi}{3}$. The altitude to a side is also a median and an angle bisector, so it divides the triangle into two congruent right triangles. Each has hypotenuse $2$, one leg of length $1$ (half the side), and acute angles $\dfrac{\pi}{3}$ and $\dfrac{\pi}{6}$. By the Pythagorean theorem, the other leg, which is the altitude, has length
$$
h = \sqrt{2^2 - 1^2} = \sqrt{3} .
$$
In a right triangle with hypotenuse $1$, the length of the leg opposite an acute angle is the sine of the angle, and the length of the adjacent leg is its cosine, because the triangle can be placed in the same position as triangle $OHP$ on the unit circle. The triangle we found has hypotenuse $2$, so divide its side lengths by $2$. The leg opposite the angle $\dfrac{\pi}{6}$ is the one of length $1$, so
$$
\sin\frac{\pi}{6} = \frac{1}{2} ,
\qquad
\cos\frac{\pi}{6} = \frac{\sqrt{3}}{2} .
$$
For the angle $\dfrac{\pi}{3}$ the legs switch roles, giving $\sin\dfrac{\pi}{3} = \dfrac{\sqrt{3}}{2}$ and $\cos\dfrac{\pi}{3} = \dfrac{1}{2}$.
:::
::::

:::teorema{#tabella-angoli-notevoli titolo="Table of special angles"}
The two preceding theorems and the points where the circle meets the axes give the following table:

| $\alpha$ | $0$ | $\dfrac{\pi}{6}$ | $\dfrac{\pi}{4}$ | $\dfrac{\pi}{3}$ | $\dfrac{\pi}{2}$ |
| --- | --- | --- | --- | --- | --- |
| $\sin\alpha$ | $0$ | $\dfrac{1}{2}$ | $\dfrac{\sqrt{2}}{2}$ | $\dfrac{\sqrt{3}}{2}$ | $1$ |
| $\cos\alpha$ | $1$ | $\dfrac{\sqrt{3}}{2}$ | $\dfrac{\sqrt{2}}{2}$ | $\dfrac{1}{2}$ | $0$ |
| $\tan\alpha$ | $0$ | $\dfrac{\sqrt{3}}{3}$ | $1$ | $\sqrt{3}$ | undefined |

In the first quadrant, as the angle increases, the sine increases from $0$ to $1$ and the cosine decreases from $1$ to $0$, as the positions of the three points in the figure show. The table gives exact values for expressions such as
$$
2\sin\frac{\pi}{6} + \tan^2\frac{\pi}{3} - 4\cos^2\frac{\pi}{4} = 2 \cdot \frac{1}{2} + 3 - 4 \cdot \frac{1}{2} = 2 .
$$

::grafico{curve="cos(t),sin(t),0,6.29" vettori="0,0,0.866,0.5;0,0,0.707,0.707;0,0,0.5,0.866" segmenti="0.866,0,0.866,0.5;0.707,0,0.707,0.707;0.5,0,0.5,0.866" punti="0.866,0.5,pieno;0.707,0.707,pieno;0.5,0.866,pieno" etichette="0.95,0.5,π/6;0.78,0.78,π/4;0.5,0.98,π/3" xmin=-1.5 xmax=1.5 ymin=-1.5 ymax=1.5 uguale=1 legenda=0 titolo="The points corresponding to $\dfrac{\pi}{6}$, $\dfrac{\pi}{4}$, and $\dfrac{\pi}{3}$. As the angle increases, the vertical coordinate increases and the horizontal coordinate decreases"}

:::

## Related angles

:::teorema{#angoli-opposti titolo="An angle and its negative"}
For every real number $\alpha$, the following identities hold:
$$
\sin(-\alpha) = -\sin\alpha ,
\qquad
\cos(-\alpha) = \cos\alpha ,
\qquad
\tan(-\alpha) = -\tan\alpha ,
$$
where the last identity holds for $\alpha \neq \dfrac{\pi}{2} + k\pi$. Indeed, the angle $-\alpha$ is the same rotation as $\alpha$ traced in the opposite direction, so its point $P''$ is the reflection of $P$ across the $x$-axis. Reflection across the $x$-axis preserves the horizontal coordinate and reverses the sign of the vertical coordinate. The tangent changes sign because its numerator changes sign and its denominator stays the same. For example, $\sin\left( -\dfrac{\pi}{6} \right) = -\dfrac{1}{2}$ and $\cos\left( -\dfrac{\pi}{6} \right) = \dfrac{\sqrt{3}}{2}$.
:::

:::teorema{#angoli-supplementari titolo="Supplementary angles"}
Two angles are **supplementary** if their sum is $\pi$. For every real number $\alpha$,
$$
\sin(\pi - \alpha) = \sin\alpha ,
\qquad
\cos(\pi - \alpha) = -\cos\alpha ,
\qquad
\tan(\pi - \alpha) = -\tan\alpha ,
$$
where the last identity holds for $\alpha \neq \dfrac{\pi}{2} + k\pi$. The arc traced clockwise from $(-1, 0)$ to the point $P'$ corresponding to $\pi - \alpha$ has measure $\alpha$, as does the arc traced from $(1, 0)$ to $P$ counterclockwise. The two arcs are reflections of each other across the $y$-axis, so $P'$ is the reflection of $P$ across the $y$-axis. Reflection across the $y$-axis reverses the sign of the horizontal coordinate and preserves the vertical coordinate. For example,
$$
\sin\frac{5\pi}{6} = \sin\left( \pi - \frac{\pi}{6} \right) = \frac{1}{2} ,
\qquad
\cos\frac{5\pi}{6} = -\cos\frac{\pi}{6} = -\frac{\sqrt{3}}{2} .
$$
:::

:::teorema{#angoli-differenza-pi titolo="Angles that differ by π"}
For every real number $\alpha$, the following identities hold:
$$
\sin(\pi + \alpha) = -\sin\alpha ,
\qquad
\cos(\pi + \alpha) = -\cos\alpha ,
\qquad
\tan(\pi + \alpha) = \tan\alpha ,
$$
where the last identity holds for $\alpha \neq \dfrac{\pi}{2} + k\pi$. An additional rotation of $\pi$ takes $P$ to its diametrically opposite point $P'''$, the reflection of $P$ across the origin, so both coordinates change sign. The ratio of two numbers that both change sign stays the same, so the tangent does not change. For example, $\cos\dfrac{4\pi}{3} = \cos\left( \pi + \dfrac{\pi}{3} \right) = -\dfrac{1}{2}$ and $\tan\dfrac{5\pi}{4} = \tan\dfrac{\pi}{4} = 1$.

::grafico{curve="cos(t),sin(t),0,6.29" vettori="0,0,0.866,0.5;0,0,-0.866,0.5;0,0,0.866,-0.5;0,0,-0.866,-0.5" punti="0.866,0.5,pieno,P;-0.866,0.5,pieno,P′;0.866,-0.5,pieno,P″;-0.866,-0.5,pieno,P‴" segmenti="-0.866,0.5,0.866,0.5;-0.866,-0.5,0.866,-0.5;0.866,-0.5,0.866,0.5;-0.866,-0.5,-0.866,0.5" xmin=-1.5 xmax=1.5 ymin=-1.5 ymax=1.5 uguale=1 legenda=0 titolo="The points corresponding to $\alpha$, $\pi - \alpha$, $-\alpha$, and $\pi + \alpha$ are symmetric about the axes and the origin. Here $\alpha = \dfrac{\pi}{6}$"}

:::

:::teorema{#angoli-complementari titolo="Complementary angles"}
Two angles are **complementary** if their sum is $\dfrac{\pi}{2}$. For every real number $\alpha$,
$$
\sin\left( \frac{\pi}{2} - \alpha \right) = \cos\alpha ,
\qquad
\cos\left( \frac{\pi}{2} - \alpha \right) = \sin\alpha ,
$$
and, where the functions are defined, $\tan\left( \dfrac{\pi}{2} - \alpha \right) = \cot\alpha$. The point corresponding to $\dfrac{\pi}{2} - \alpha$ is the reflection of $P$ across the bisector $y = x$, and this reflection interchanges the two coordinates. For example, $\cos\dfrac{\pi}{3} = \sin\left( \dfrac{\pi}{2} - \dfrac{\pi}{3} \right) = \sin\dfrac{\pi}{6} = \dfrac{1}{2}$, which gives the relationship between $\dfrac{\pi}{6}$ and $\dfrac{\pi}{3}$ in the special-angle table.

Substituting $-\alpha$ for $\alpha$ and using the negative-angle formulas also gives
$$
\sin\left( \frac{\pi}{2} + \alpha \right) = \cos\alpha ,
\qquad
\cos\left( \frac{\pi}{2} + \alpha \right) = -\sin\alpha .
$$

::grafico{curve="cos(t),sin(t),0,6.29" vettori="0,0,0.866,0.5;0,0,0.5,0.866" punti="0.866,0.5,pieno,P;0.5,0.866,pieno,Q" segmenti="-1.3,-1.3,1.3,1.3;0.866,0.5,0.5,0.866" etichette="1,1.25,y = x" xmin=-1.5 xmax=1.5 ymin=-1.5 ymax=1.5 uguale=1 legenda=0 titolo="The point $Q$ corresponding to $\dfrac{\pi}{2} - \alpha$ is the reflection of $P$ across the line $y = x$, so the coordinates are interchanged"}

:::

:::esempio{titolo="Reduction to the first quadrant"}
Related-angle identities and periodicity give the exact trigonometric values for any angle that differs from a special angle by a multiple of $\dfrac{\pi}{2}$.

- $\sin\dfrac{7\pi}{6} = \sin\left( \pi + \dfrac{\pi}{6} \right) = -\sin\dfrac{\pi}{6} = -\dfrac{1}{2}$.
- $\cos\dfrac{5\pi}{3} = \cos\left( 2\pi - \dfrac{\pi}{3} \right) = \cos\left( -\dfrac{\pi}{3} \right) = \dfrac{1}{2}$, using periodicity first and then the negative-angle identity.
- $\tan\dfrac{3\pi}{4} = \tan\left( \pi - \dfrac{\pi}{4} \right) = -\tan\dfrac{\pi}{4} = -1$.
- $\cos\dfrac{17\pi}{4} = \cos\left( \dfrac{\pi}{4} + 2 \cdot 2\pi \right) = \cos\dfrac{\pi}{4} = \dfrac{\sqrt{2}}{2}$.

In each case the sign of the result matches that predicted by the quadrant of the original angle. For example, $\dfrac{7\pi}{6}$ is in the third quadrant, where sine is negative.
:::

## Graphs of sine, cosine, and tangent

:::definizione{#funzione-periodica titolo="Periodic functions"}
A function $f$ with domain $D$ is **periodic** if there is a number $T > 0$ such that, for every $x$ in $D$, the value $x + T$ also belongs to $D$ and
$$
f(x + T) = f(x) .
$$
The smallest number $T > 0$ with this property is called the **period** of the function. The graph of a periodic function consists of a section of width $T$ that repeats to the right and left. To draw it, we therefore need only study the function on an interval of length $T$. For example, the function $\sin x$ has period $2\pi$ by the theorem on angles that differ by a multiple of $2\pi$. No positive number smaller than $2\pi$ has the same property, since the value $1$ is attained in $\left[ 0, 2\pi \right)$ only at $x = \dfrac{\pi}{2}$.
:::

:::teorema{#grafico-seno titolo="Graph of the sine function"}
Let $x$ be the angle measured in radians. The function $y = \sin x$ has the following properties.

- The domain is $\mathbb{R}$ and the range is $[-1, 1]$.
- The function is periodic with period $2\pi$.
- The function is **odd**, that is, $\sin(-x) = -\sin x$, so its graph is symmetric about the origin.
- The zeros are $x = k\pi$. The maximum $1$ is attained at $x = \dfrac{\pi}{2} + 2k\pi$, and the minimum $-1$ at $x = \dfrac{3\pi}{2} + 2k\pi$, with $k \in \mathbb{Z}$.
- The function is increasing on $\left[ -\dfrac{\pi}{2}, \dfrac{\pi}{2} \right]$ and decreasing on $\left[ \dfrac{\pi}{2}, \dfrac{3\pi}{2} \right]$.

These properties can be read from the unit circle by following the vertical coordinate of $P$ as the angle increases. For example, as $x$ goes from $0$ to $\dfrac{\pi}{2}$, the point $P$ moves up from $(1, 0)$ to $(0, 1)$ and its vertical coordinate increases from $0$ to $1$. The graph is called a **sine wave**.

::grafico{f="sin(x)" punti="1.571,1,pieno;4.712,-1,pieno;3.1416,0,pieno;6.283,0,pieno" etichette="3.2,0.35,π;6.3,0.35,2π" xmin=-7 xmax=7 ymin=-2 ymax=2 legenda="y = \sin x" titolo="The sine wave $y = \sin x$ has zeros at $k\pi$, a maximum of $1$ at $\dfrac{\pi}{2}$, and a minimum of $-1$ at $\dfrac{3\pi}{2}$. These repeat with period $2\pi$"}

:::

:::teorema{#grafico-coseno titolo="Graph of the cosine function"}
The function $y = \cos x$ has domain $\mathbb{R}$, range $[-1, 1]$, and period $2\pi$. It is **even**, that is, $\cos(-x) = \cos x$, so its graph is symmetric about the $y$-axis. The zeros are $x = \dfrac{\pi}{2} + k\pi$. The maximum $1$ is attained at $x = 2k\pi$ and the minimum $-1$ at $x = \pi + 2k\pi$, with $k \in \mathbb{Z}$. The function is decreasing on $[0, \pi]$ and increasing on $[\pi, 2\pi]$.

By the complementary-angle identity, $\cos x = \sin\left( x + \dfrac{\pi}{2} \right)$ for every $x$. The cosine graph is therefore the sine graph shifted $\dfrac{\pi}{2}$ to the left. For this reason it is called a **cosine wave**, and it too is a sinusoid. For example, the maximum of sine at $\dfrac{\pi}{2}$ corresponds to the maximum of cosine at $0$.

::grafico{f="cos(x);sin(x)" punti="0,1,pieno;1.571,1,pieno;3.1416,-1,pieno" etichette="3.1,-1.4,π" xmin=-7 xmax=7 ymin=-2 ymax=2 legenda="y = \cos x;y = \sin x" titolo="The graph of $y = \cos x$ is the graph of $y = \sin x$ shifted $\dfrac{\pi}{2}$ to the left"}

:::

:::teorema{#grafico-tangente titolo="Graph of the tangent function"}
The function $y = \tan x$ has the following properties.

- The domain is $\mathbb{R} \setminus \left\{ \dfrac{\pi}{2} + k\pi \mid k \in \mathbb{Z} \right\}$ and the range is $\mathbb{R}$.
- The function is periodic with period $\pi$ by the identity for angles that differ by $\pi$.
- The function is odd and its zeros are $x = k\pi$.
- The function is increasing on each interval $\left( -\dfrac{\pi}{2} + k\pi, \dfrac{\pi}{2} + k\pi \right)$.
- The lines $x = \dfrac{\pi}{2} + k\pi$ are **vertical asymptotes**. As $x$ approaches $\dfrac{\pi}{2}$ from the left, the tangent takes increasingly large positive values. As $x$ approaches $\dfrac{\pi}{2}$ from the right, it takes negative values of increasingly large magnitude.

This behavior follows from the geometric interpretation of the tangent because, for $\alpha$ less than $\dfrac{\pi}{2}$ and close to $\dfrac{\pi}{2}$, the point $T$ lies very high on the line $x = 1$. For example, $\tan 1.5 \approx 14.1$ and $\tan 1.56 \approx 92.6$.

::grafico{f="tan(x)" asintoti="x=-4.712;x=-1.571;x=1.571;x=4.712" punti="0.785,1,pieno;-0.785,-1,pieno;3.1416,0,pieno" xmin=-6 xmax=6 ymin=-4 ymax=4 legenda="y = \tan x" titolo="The function $y = \tan x$ has period $\pi$ and vertical asymptotes $x = \dfrac{\pi}{2} + k\pi$. Its value is $1$ at $\dfrac{\pi}{4}$"}

:::

## Sinusoids of the form y = A sin(ωx + φ) + b

:::definizione{#sinusoide titolo="Sinusoidal functions"}
Many periodic phenomena can be described by functions whose graphs have the shape of the sine graph, with different heights, widths, and positions. A **sinusoidal function** is a function
$$
y = A\sin(\omega x + \varphi) + b ,
$$
with $A > 0$, $\omega > 0$, and real parameters $\varphi$ and $b$. The parameters have the following names.

- $A$ is the **amplitude** and gives the distance the graph rises above and falls below the line $y = b$.
- $\omega$ is the **angular frequency** and indicates how many complete oscillations occur in an interval of length $2\pi$.
- $\varphi$ is the **initial phase** and determines where in the oscillation the function starts at $x = 0$.
- $b$ is the vertical shift, and the line $y = b$ is the line about which the graph oscillates.

For example, the function $y = 3\sin(2x)$ has amplitude $3$, angular frequency $2$, phase $0$, and $b = 0$. Cosine gives the same form because $A\cos(\omega x + \varphi) + b = A\sin\left( \omega x + \varphi + \dfrac{\pi}{2} \right) + b$.
:::

::::teorema{#periodo-sinusoide titolo="Period, range, and phase shift of a sinusoid"}
Let $y = A\sin(\omega x + \varphi) + b$ with $A > 0$ and $\omega > 0$. Then

- the period is $T = \dfrac{2\pi}{\omega}$;
- the range is $[b - A, b + A]$;
- the graph is obtained from that of $y = A\sin(\omega x) + b$ by a horizontal shift of $-\dfrac{\varphi}{\omega}$, to the right if $\varphi < 0$ and to the left if $\varphi > 0$. The number $-\dfrac{\varphi}{\omega}$ is called the **phase shift**.

For example, $y = 5\sin\left( \dfrac{x}{2} \right)$ has period $\dfrac{2\pi}{\frac{1}{2}} = 4\pi$ and range $[-5, 5]$. The function $y = \sin(3x) - 2$ has period $\dfrac{2\pi}{3}$ and range $[-3, -1]$.

:::dimostrazione
The idea is that the argument $\omega x + \varphi$ must increase by $2\pi$ for the sine to repeat its values. Set $f(x) = A\sin(\omega x + \varphi) + b$. For every $x$,
$$
f\left( x + \frac{2\pi}{\omega} \right) = A\sin\left( \omega x + 2\pi + \varphi \right) + b = A\sin(\omega x + \varphi) + b = f(x) ,
$$
because sine has period $2\pi$. The number $\dfrac{2\pi}{\omega}$ is the smallest with this property, since the argument $\omega x + \varphi$ runs through an interval of length $\omega \cdot T$ as $x$ runs through an interval of length $T$, and sine repeats its values only after an interval of length at least $2\pi$.

Sine takes every value in $[-1, 1]$, so $A\sin(\omega x + \varphi)$ takes every value in $[-A, A]$ because $A > 0$. Adding $b$ gives the interval $[b - A, b + A]$.

Finally, $\omega x + \varphi = \omega\left( x + \dfrac{\varphi}{\omega} \right)$, so $f(x) = g\left( x + \dfrac{\varphi}{\omega} \right)$ with $g(x) = A\sin(\omega x) + b$. The graph of $g\left( x - c \right)$ is the graph of $g$ shifted horizontally by $c$, and here $c = -\dfrac{\varphi}{\omega}$.
:::
::::

:::esempio{titolo="Analyzing a sinusoid"}
Consider the function
$$
y = 2\sin\left( 2x - \frac{\pi}{3} \right) + 1 .
$$
The amplitude is $A = 2$ and the angular frequency is $\omega = 2$, so the period is $T = \dfrac{2\pi}{2} = \pi$. The range is $[1 - 2, 1 + 2] = [-1, 3]$. The phase shift is $-\dfrac{\varphi}{\omega} = \dfrac{\pi}{6}$, so the graph is that of $y = 2\sin(2x) + 1$ shifted $\dfrac{\pi}{6}$ to the right.

The function reaches its maximum $3$ when the argument of the sine equals $\dfrac{\pi}{2} + 2k\pi$:
$$
2x - \frac{\pi}{3} = \frac{\pi}{2} + 2k\pi
\quad \Longrightarrow \quad
2x = \frac{5\pi}{6} + 2k\pi
\quad \Longrightarrow \quad
x = \frac{5\pi}{12} + k\pi .
$$
The graph crosses the line $y = 1$ when the argument is a multiple of $\pi$, that is, at $x = \dfrac{\pi}{6} + k\,\dfrac{\pi}{2}$. The first such point with $x \geq 0$ is $\left( \dfrac{\pi}{6}, 1 \right)$, and from there the graph rises to its maximum at $x = \dfrac{5\pi}{12} \approx 1.31$.

::grafico{f="2*sin(2*x-pi/3)+1;2*sin(2*x)+1" segmenti="-4,1,4,1" punti="1.309,3,pieno;0.524,1,pieno" xmin=-4 xmax=4 ymin=-2 ymax=4 legenda="y = 2\sin\left(2x - \frac{\pi}{3}\right) + 1;y = 2\sin(2x) + 1" titolo="The sinusoid $y = 2\sin\left( 2x - \dfrac{\pi}{3} \right) + 1$ has period $\pi$, oscillates between $-1$ and $3$ about the line $y = 1$, and is shifted $\dfrac{\pi}{6}$ to the right"}

:::

:::attenzione
The functions $\sin(2x)$ and $2\sin x$ are different. The coefficient of $x$ changes the period, whereas the coefficient of the sine changes the amplitude. At $x = \dfrac{\pi}{2}$ we have $\sin(2x) = \sin\pi = 0$, whereas $2\sin\dfrac{\pi}{2} = 2$. The first function has period $\pi$ and range $[-1, 1]$, and the second has period $2\pi$ and range $[-2, 2]$.

::grafico{f="sin(2*x);2*sin(x)" punti="1.571,0,pieno;1.571,2,pieno" xmin=-4 xmax=4 ymin=-3 ymax=3 legenda="y = \sin(2x);y = 2\sin x" titolo="At $x = \dfrac{\pi}{2}$ the value of $\sin(2x)$ is $0$ and the value of $2\sin x$ is $2$"}

:::

:::esempio{titolo="From the graph to the formula"}
A sinusoid of the form $y = A\sin(\omega x) + b$, with $A > 0$ and $\omega > 0$, has maximum $4$, minimum $-2$, and two consecutive peaks a distance $\dfrac{2\pi}{3}$ apart. Its midline lies halfway between its maximum and minimum, so
$$
b = \frac{4 + (-2)}{2} = 1 ,
\qquad
A = \frac{4 - (-2)}{2} = 3 .
$$
The distance between consecutive peaks is the period, so $\dfrac{2\pi}{\omega} = \dfrac{2\pi}{3}$ and $\omega = 3$. The function is $y = 3\sin(3x) + 1$.
:::

## Simple harmonic motion

:::definizione{#moto-armonico titolo="Simple harmonic motion"}
A point moving along a line is said to undergo **simple harmonic motion** if its position $x$ at time $t$ is given by
$$
x(t) = A\cos(\omega t + \varphi) ,
$$
with $A > 0$ and $\omega > 0$. The point oscillates between the positions $-A$ and $A$ about the center of oscillation $x = 0$. The quantities describing the motion are as follows.

- $A$ is the amplitude, measured in meters.
- $\omega$ is the angular frequency, measured in radians per second.
- The **period** $T = \dfrac{2\pi}{\omega}$ is the time for one complete oscillation, in seconds.
- The **frequency** $f = \dfrac{1}{T} = \dfrac{\omega}{2\pi}$ is the number of oscillations per second, in hertz ($\text{Hz}$).
- $\varphi$ is the initial phase and determines the position at time $t = 0$, which is $x(0) = A\cos\varphi$.

Simple harmonic motion describes, for example, a mass attached to a spring oscillating without friction, or a pendulum undergoing small oscillations. The period of a spring is studied in physics.
:::

:::teorema{#moto-armonico-circolare titolo="Simple harmonic motion and uniform circular motion"}
Let $Q$ be a point moving on a circle with center $O$ and radius $A$ at constant angular velocity $\omega$, starting from the position given by the angle $\varphi$. Then the projection of $Q$ onto the $x$-axis undergoes simple harmonic motion described by $x(t) = A\cos(\omega t + \varphi)$.

Indeed, at time $t$ the radius $OQ$ has swept out the angle $\omega t$, so its angle with the positive $x$-axis is $\omega t + \varphi$. The coordinates of $Q$ are therefore those of the point on the unit circle corresponding to $\omega t + \varphi$ multiplied by the radius $A$, and its horizontal coordinate is $A\cos(\omega t + \varphi)$. This is why the angular frequency of simple harmonic motion is measured in radians per second, like the angular velocity of $Q$.
:::

:::esempio{titolo="A mass attached to a spring"}
A mass attached to a spring oscillates with amplitude $A = 10\ \text{cm}$ and period $T = 2\ \text{s}$. At time $t = 0$ it is at position $x = 10\ \text{cm}$. The angular frequency is
$$
\omega = \frac{2\pi}{T} = \frac{2\pi}{2} = \pi\ \text{rad/s} ,
$$
and the frequency is $f = \dfrac{1}{2}\ \text{Hz} = 0.5\ \text{Hz}$. Since $x(0) = A\cos\varphi = A$, we have $\cos\varphi = 1$ and can choose $\varphi = 0$. The equation of motion, with $x$ in centimeters and $t$ in seconds, is therefore
$$
x(t) = 10\cos(\pi t) .
$$
At time $t = 0.5\ \text{s}$ the mass passes through the center because $x(0.5) = 10\cos\dfrac{\pi}{2} = 0$, and at time $t = 1\ \text{s}$ it is at the other extreme because $x(1) = 10\cos\pi = -10$. At time $t = \dfrac{1}{3}\ \text{s}$ its position is $x = 10\cos\dfrac{\pi}{3} = 5\ \text{cm}$.

::grafico{f="10*cos(pi*x)" punti="0,10,pieno;0.5,0,pieno;1,-10,pieno;2,10,pieno" nomi="t,x" xmin=0 xmax=4 ymin=-12 ymax=12 legenda="x(t) = 10\cos(\pi t)" titolo="The position $x(t) = 10\cos(\pi t)$, in centimeters, of a mass oscillating with amplitude $10\ \text{cm}$ and period $2\ \text{s}$"}

:::

## Inverse trigonometric functions

:::definizione{#arcoseno titolo="Arcsine"}
The sine function is not one-to-one on $\mathbb{R}$, since, for example, $\sin\dfrac{\pi}{6} = \sin\dfrac{5\pi}{6} = \dfrac{1}{2}$. To define its inverse, restrict the sine function to the interval $\left[ -\dfrac{\pi}{2}, \dfrac{\pi}{2} \right]$. On this interval sine is increasing, hence one-to-one, and takes every value in $[-1, 1]$.

For every $x \in [-1, 1]$, the **arcsine** of $x$, denoted by $\arcsin x$, is the unique angle $y$ such that
$$
\begin{cases}
\sin y = x \\[4pt]
-\dfrac{\pi}{2} \leq y \leq \dfrac{\pi}{2} .
\end{cases}
$$
The function $y = \arcsin x$ therefore has domain $[-1, 1]$ and range $\left[ -\dfrac{\pi}{2}, \dfrac{\pi}{2} \right]$. It is increasing and odd. For example, $\arcsin\dfrac{1}{2} = \dfrac{\pi}{6}$ because $\sin\dfrac{\pi}{6} = \dfrac{1}{2}$ and $\dfrac{\pi}{6}$ belongs to the interval. However, $\dfrac{5\pi}{6}$ is not the arcsine of $\dfrac{1}{2}$ because it lies outside the interval. Similarly, $\arcsin(-1) = -\dfrac{\pi}{2}$.

The graph of arcsine is the reflection across the line $y = x$ of the graph of sine restricted to $\left[ -\dfrac{\pi}{2}, \dfrac{\pi}{2} \right]$, as for any inverse function.

::grafico{f="asin(x)" curve="t,sin(t),-1.5708,1.5708" segmenti="-2,-2,2,2" punti="1,1.571,pieno;-1,-1.571,pieno;0.5,0.524,pieno" xmin=-2 xmax=2 ymin=-2 ymax=2 uguale=1 legenda="y = \arcsin x;y = \sin x \text{ on } \left[-\frac{\pi}{2}, \frac{\pi}{2}\right]" titolo="The graph of $y = \arcsin x$ is the reflection across the line $y = x$ of the graph of sine restricted to $\left[ -\dfrac{\pi}{2}, \dfrac{\pi}{2} \right]$"}

:::

:::definizione{#arcocoseno titolo="Arccosine"}
Cosine is decreasing on the interval $[0, \pi]$ and takes every value in $[-1, 1]$ there. For every $x \in [-1, 1]$, the **arccosine** of $x$, denoted by $\arccos x$, is the unique angle $y$ such that
$$
\begin{cases}
\cos y = x \\[4pt]
0 \leq y \leq \pi .
\end{cases}
$$
The function $y = \arccos x$ has domain $[-1, 1]$ and range $[0, \pi]$ and is decreasing. For example, $\arccos 0 = \dfrac{\pi}{2}$ and $\arccos\left( -\dfrac{1}{2} \right) = \dfrac{2\pi}{3}$ because $\cos\dfrac{2\pi}{3} = -\dfrac{1}{2}$ and $\dfrac{2\pi}{3}$ belongs to $[0, \pi]$. Arccosine is not odd. The supplementary-angle identity gives $\arccos(-x) = \pi - \arccos x$, and indeed $\arccos\left( -\dfrac{1}{2} \right) = \pi - \dfrac{\pi}{3}$.

::grafico{f="acos(x)" punti="-1,3.1416,pieno;0,1.571,pieno;1,0,pieno;-0.5,2.094,pieno" xmin=-2 xmax=2 ymin=-1 ymax=4 uguale=1 legenda="y = \arccos x" titolo="The function $y = \arccos x$ is decreasing and takes the value $\pi$ at $-1$, $\dfrac{\pi}{2}$ at $0$, and $0$ at $1$"}

:::

:::definizione{#arcotangente titolo="Arctangent"}
Tangent is increasing on the interval $\left( -\dfrac{\pi}{2}, \dfrac{\pi}{2} \right)$ and takes every real value there. For every $x \in \mathbb{R}$, the **arctangent** of $x$, denoted by $\arctan x$, is the unique angle $y$ such that
$$
\begin{cases}
\tan y = x \\[4pt]
-\dfrac{\pi}{2} < y < \dfrac{\pi}{2} .
\end{cases}
$$
The function $y = \arctan x$ has domain $\mathbb{R}$ and range $\left( -\dfrac{\pi}{2}, \dfrac{\pi}{2} \right)$. It is increasing and odd. The lines $y = \dfrac{\pi}{2}$ and $y = -\dfrac{\pi}{2}$ are **horizontal asymptotes**, because for large positive $x$ the arctangent is close to $\dfrac{\pi}{2}$, and for negative $x$ of large magnitude it is close to $-\dfrac{\pi}{2}$. For example, $\arctan 1 = \dfrac{\pi}{4}$ and $\arctan\left( -\sqrt{3} \right) = -\dfrac{\pi}{3}$.

::grafico{f="atan(x)" asintoti="y=1.571;y=-1.571" punti="1,0.785,pieno;-1,-0.785,pieno" xmin=-6 xmax=6 ymin=-2 ymax=2 legenda="y = \arctan x" titolo="The function $y = \arctan x$ is increasing on $\mathbb{R}$ and has horizontal asymptotes $y = \dfrac{\pi}{2}$ and $y = -\dfrac{\pi}{2}$"}

:::

:::teorema{#composizione-inverse titolo="Composition with inverse functions"}
The following identities hold:
$$
\sin(\arcsin x) = x \quad \text{for } x \in [-1, 1] ,
\qquad
\arcsin(\sin x) = x \quad \text{for } x \in \left[ -\frac{\pi}{2}, \frac{\pi}{2} \right] ,
$$
with analogous identities for cosine, where $x \in [0, \pi]$ in the second, and for tangent, where $x \in \left( -\dfrac{\pi}{2}, \dfrac{\pi}{2} \right)$. The first identity follows from the definition because $\arcsin x$ is an angle whose sine is $x$. The second requires $x$ to belong to the interval on which sine was inverted.

The first Pythagorean identity also gives the other trigonometric functions of an arcsine. For example, let $y = \arcsin\dfrac{3}{5}$. Then $\sin y = \dfrac{3}{5}$ and $y \in \left[ -\dfrac{\pi}{2}, \dfrac{\pi}{2} \right]$, where the cosine is nonnegative, so $\cos\left( \arcsin\dfrac{3}{5} \right) = \sqrt{1 - \dfrac{9}{25}} = \dfrac{4}{5}$.
:::

:::attenzione
For an angle outside the interval $\left[ -\dfrac{\pi}{2}, \dfrac{\pi}{2} \right]$, the arcsine of its sine differs from the original angle. At $x = \dfrac{5\pi}{6}$ we have $\sin\dfrac{5\pi}{6} = \dfrac{1}{2}$, so
$$
\arcsin\left( \sin\frac{5\pi}{6} \right) = \arcsin\frac{1}{2} = \frac{\pi}{6} \neq \frac{5\pi}{6} .
$$
Similarly, the equation $\sin x = \dfrac{1}{2}$ has infinitely many solutions, and $\arcsin\dfrac{1}{2}$ gives only one of them. All the solutions are found in the chapter on trigonometric equations.
:::
