---
titolo: Trigonometric equations
sommario: How to solve equations involving sine, cosine, and tangent, from basic equations interpreted on the unit circle to equations that reduce to these, linear equations, and homogeneous equations, with solutions given on the entire real line or in a specified interval.
---

## Trigonometric equations and their solutions

:::definizione{#equazione-goniometrica titolo="Trigonometric equation"}
A **trigonometric equation** is an equation in which the unknown $x$ appears in the argument of at least one trigonometric function, that is, a sine, cosine, tangent, or cotangent. For example, the following are trigonometric equations:
$$
2\sin x = 1 ,
\qquad
\cos (2x) = \cos x ,
\qquad
\tan^2 x - 3 = 0 .
$$
A **solution** is a real number that lies in the domain of every expression in the equation and that makes the two sides equal when substituted for $x$. The number $\dfrac{\pi}{6}$ is a solution of $2\sin x = 1$ because $2 \sin \dfrac{\pi}{6} = 2 \cdot \dfrac{1}{2} = 1$. In contrast, the number $\dfrac{\pi}{3}$ is not a solution because $2\sin\dfrac{\pi}{3} = \sqrt{3}$ and $\sqrt{3} \neq 1$.

When an equation contains a tangent or a fraction, first write down the **domain restrictions**. The equation $\tan x = 2\sin x$ requires $\cos x \neq 0$, that is, $x \neq \dfrac{\pi}{2} + k\pi$, because the tangent is undefined at those points.
:::

:::osservazione{#soluzioni-periodiche titolo="Infinitely many solutions and periodicity"}
Sine and cosine have period $2\pi$, and tangent has period $\pi$. If $x_0$ solves $2\sin x = 1$, then $x_0 + 2\pi$, $x_0 + 4\pi$, and $x_0 - 2\pi$ also solve it, since sine takes the same value at all these points. A trigonometric equation that has one solution therefore has infinitely many.

To write them all together, use an integer $k$, which can be positive, negative, or zero, and write $k \in \mathbb{Z}$. The solutions of $2\sin x = 1$ obtained from $\dfrac{\pi}{6}$ are
$$
x = \frac{\pi}{6} + 2k\pi , \qquad k \in \mathbb{Z} .
$$
Setting $k = 0$ gives $\dfrac{\pi}{6}$, setting $k = 1$ gives $\dfrac{13\pi}{6}$, and setting $k = -1$ gives $-\dfrac{11\pi}{6}$. An expression of this kind is called a **family of solutions**, and all the families together give the **general solution** of the equation. Throughout this topic, $k$ denotes an arbitrary integer.
:::

:::richiamo{titolo="Inverse trigonometric functions"}
For $-1 \leq m \leq 1$:
$$
\arcsin m \in \left[ -\frac{\pi}{2}, \frac{\pi}{2} \right] \text{ and } \sin(\arcsin m) = m ,
\qquad
\arccos m \in [0, \pi] \text{ and } \cos(\arccos m) = m .
$$
For every real $m$:
$$
\arctan m \in \left( -\frac{\pi}{2}, \frac{\pi}{2} \right) \text{ and } \tan(\arctan m) = m .
$$
:::

## Basic sine equations

::::teorema{#equazione-seno titolo="The basic equation sin x = m"}
Let $m$ be a real number.
- If $m < -1$ or $m > 1$, the equation $\sin x = m$ **has no solutions**.
- If $-1 \leq m \leq 1$, let $\alpha = \arcsin m$. The solutions are
$$
x = \alpha + 2k\pi
\qquad \text{or} \qquad
x = \pi - \alpha + 2k\pi ,
\qquad k \in \mathbb{Z} .
$$

The theorem gives a two-step solution. Find an angle $\alpha$ whose sine is $m$, then write down the two families. For $\sin x = \dfrac{1}{2}$, we have $\alpha = \dfrac{\pi}{6}$, so the solutions are $x = \dfrac{\pi}{6} + 2k\pi$ or $x = \dfrac{5\pi}{6} + 2k\pi$, since $\pi - \dfrac{\pi}{6} = \dfrac{5\pi}{6}$.

::grafico{curve="cos(t),sin(t),0,6.29" vettori="0,0,0.866,0.5,P₁;0,0,-0.866,0.5,P₂" segmenti="-1.4,0.5,1.4,0.5;0.866,0,0.866,0.5;-0.866,0,-0.866,0.5" punti="0.866,0.5,pieno;-0.866,0.5,pieno" xmin=-1.5 xmax=1.5 ymin=-1.5 ymax=1.5 uguale=1 legenda=0 titolo="The line $y = \dfrac{1}{2}$ intersects the unit circle at $P_1$, corresponding to the angle $\dfrac{\pi}{6}$, and at $P_2$, corresponding to the angle $\dfrac{5\pi}{6}$. These are the two points for which the sine is $\dfrac{1}{2}$"}

:::dimostrazione
The idea is to interpret the equation on the unit circle, where the sine of an angle is the vertical coordinate of the corresponding point. Solving $\sin x = m$ therefore means finding the points on the circle whose vertical coordinate is $m$, that is, the intersections of the circle $X^2 + Y^2 = 1$ and the horizontal line $Y = m$.

If $|m| > 1$, the line $Y = m$ lies outside the strip $-1 \leq Y \leq 1$ that contains the circle, so it has no points in common with the circle and the equation has no solutions.

If $|m| \leq 1$, the angle $\alpha = \arcsin m$ has sine $m$, so the point $P_1 = (\cos\alpha, \sin\alpha)$ lies on the line. The point $P_2$, the reflection of $P_1$ across the $y$-axis, has the same vertical coordinate and corresponds to the angle $\pi - \alpha$, since $\sin(\pi - \alpha) = \sin\alpha$ by the identity for supplementary angles. A horizontal line intersects the circle in at most two points, so $P_1$ and $P_2$ are the only points with vertical coordinate $m$. Every angle whose terminal point is $P_1$ differs from $\alpha$ by a multiple of $2\pi$, and every angle whose terminal point is $P_2$ differs from $\pi - \alpha$ by a multiple of $2\pi$. This gives the two families in the statement.
:::
::::

:::esempio{titolo="An equation involving a special-angle value"}
Solve $2\sin x + \sqrt{2} = 0$. Isolating the sine gives $\sin x = -\dfrac{\sqrt{2}}{2}$, which is between $-1$ and $1$. We have $\alpha = \arcsin\left(-\dfrac{\sqrt{2}}{2}\right) = -\dfrac{\pi}{4}$, so
$$
x = -\frac{\pi}{4} + 2k\pi
\qquad \text{or} \qquad
x = \pi + \frac{\pi}{4} + 2k\pi = \frac{5\pi}{4} + 2k\pi .
$$
The first family can also be written as $x = \dfrac{7\pi}{4} + 2k\pi$, since $-\dfrac{\pi}{4}$ and $\dfrac{7\pi}{4}$ differ by $2\pi$. In $[0, 2\pi)$, the solutions are $\dfrac{5\pi}{4}$ and $\dfrac{7\pi}{4}$, the first in the third quadrant and the second in the fourth, where sine is negative.
:::

:::esempio{titolo="An equation whose solutions are not special angles"}
The equation $3\sin x = 1$ is equivalent to $\sin x = \dfrac{1}{3}$. The number $\dfrac{1}{3}$ lies between $-1$ and $1$, but it is not the sine of a special angle. The solutions can be written using the inverse sine:
$$
x = \arcsin\frac{1}{3} + 2k\pi
\qquad \text{or} \qquad
x = \pi - \arcsin\frac{1}{3} + 2k\pi .
$$
With a calculator in radian mode, we obtain $\arcsin\dfrac{1}{3} \approx 0.340$, so the solutions in $[0, 2\pi)$ are approximately $0.340$ and $2.802$. The equation $3\sin x = 4$, on the other hand, **has no solutions**, since it is equivalent to $\sin x = \dfrac{4}{3}$ and $\dfrac{4}{3} > 1$.
:::

:::osservazione{titolo="Reading the graph"}
The solutions of $\sin x = m$ are also the horizontal coordinates of the points where the graph of $y = \sin x$ intersects the horizontal line $y = m$. The graph shows the infinitely many solutions together. For $m = \dfrac{1}{2}$, consecutive points in each family are $2\pi$ apart, and the points of the two families alternate.

::grafico{f="sin(x);0.5" punti="-5.7596,0.5,pieno;-3.6652,0.5,pieno;0.5236,0.5,pieno;2.6180,0.5,pieno;6.8068,0.5,pieno;8.9012,0.5,pieno" xmin=-7 xmax=10 ymin=-1.5 ymax=1.5 legenda="y = \sin x;y = \dfrac{1}{2}" titolo="The graph of $\sin x$ intersects the line $y = \dfrac{1}{2}$ at $\dfrac{\pi}{6} + 2k\pi$ and $\dfrac{5\pi}{6} + 2k\pi$. The graph shows the intersections for $k = -1, 0, 1$"}

:::

:::teorema{#casi-particolari titolo="Special cases of sine and cosine equations"}
For $m = 0$ and $m = \pm 1$, the two families can be combined into one:
$$
\begin{aligned}
\sin x = 0 &\iff x = k\pi , \\[4pt]
\sin x = 1 &\iff x = \frac{\pi}{2} + 2k\pi , \\[4pt]
\sin x = -1 &\iff x = -\frac{\pi}{2} + 2k\pi , \\[4pt]
\cos x = 0 &\iff x = \frac{\pi}{2} + k\pi , \\[4pt]
\cos x = 1 &\iff x = 2k\pi , \\[4pt]
\cos x = -1 &\iff x = \pi + 2k\pi .
\end{aligned}
$$
These formulas follow from the theorem on the basic equation. For $\sin x = 1$, we have $\alpha = \dfrac{\pi}{2}$ and $\pi - \alpha = \dfrac{\pi}{2}$, so the two families coincide. The line $Y = 1$ is tangent to the circle at $(0, 1)$. For $\sin x = 0$, the families are $2k\pi$ and $\pi + 2k\pi$, that is, all even and odd multiples of $\pi$, which together give $k\pi$. For example, $\sin (3x) = 0$ gives $3x = k\pi$, so $x = \dfrac{k\pi}{3}$.
:::

## Basic cosine and tangent equations

::::teorema{#equazione-coseno titolo="The basic equation cos x = m"}
Let $m$ be a real number.
- If $m < -1$ or $m > 1$, the equation $\cos x = m$ **has no solutions**.
- If $-1 \leq m \leq 1$, let $\beta = \arccos m$. The solutions are
$$
x = \beta + 2k\pi
\qquad \text{or} \qquad
x = -\beta + 2k\pi ,
\qquad k \in \mathbb{Z} ,
$$
which can be written more concisely as $x = \pm \beta + 2k\pi$.

For $\cos x = -\dfrac{1}{2}$, we have $\beta = \arccos\left(-\dfrac{1}{2}\right) = \dfrac{2\pi}{3}$, so the solutions are $x = \pm\dfrac{2\pi}{3} + 2k\pi$. In $[0, 2\pi)$, this gives $\dfrac{2\pi}{3}$ and $-\dfrac{2\pi}{3} + 2\pi = \dfrac{4\pi}{3}$.

::grafico{curve="cos(t),sin(t),0,6.29" vettori="0,0,-0.5,0.866,P₁;0,0,-0.5,-0.866,P₂" segmenti="-0.5,-1.4,-0.5,1.4" punti="-0.5,0.866,pieno;-0.5,-0.866,pieno" xmin=-1.5 xmax=1.5 ymin=-1.5 ymax=1.5 uguale=1 legenda=0 titolo="The line $x = -\dfrac{1}{2}$ intersects the unit circle at $P_1$, corresponding to the angle $\dfrac{2\pi}{3}$, and at $P_2$, corresponding to the angle $-\dfrac{2\pi}{3}$. These points are reflections of each other across the $x$-axis"}

:::dimostrazione
The idea is the same as for the sine equation, using horizontal coordinates in place of vertical coordinates. The cosine of an angle is the horizontal coordinate of the corresponding point on the unit circle, so we seek the intersections of the circle and the vertical line $X = m$.

If $|m| > 1$, the line lies outside the circle and there are no solutions. If $|m| \leq 1$, the angle $\beta = \arccos m$ has cosine $m$, so the point $P_1 = (\cos\beta, \sin\beta)$ lies on the line. Its reflection $P_2$ across the $x$-axis has the same horizontal coordinate and corresponds to the angle $-\beta$, since $\cos(-\beta) = \cos\beta$ by the negative-angle identity. The vertical line intersects the circle in at most two points, so the solutions are the angles whose terminal points are $P_1$ or $P_2$, that is, $\beta + 2k\pi$ and $-\beta + 2k\pi$.
:::
::::

:::attenzione
The second family for the cosine equation is $-\beta + 2k\pi$, whereas the second family for the sine equation is $\pi - \alpha + 2k\pi$. Interchanging the two formulas gives incorrect values. For $\cos x = \dfrac{1}{2}$, the sine formula would give $x = \pi - \dfrac{\pi}{3} = \dfrac{2\pi}{3}$, but $\cos\dfrac{2\pi}{3} = -\dfrac{1}{2}$. The correct value from the second family is $x = -\dfrac{\pi}{3}$, whose cosine is $\dfrac{1}{2}$.
:::

::::teorema{#equazione-tangente titolo="The basic equation tan x = m"}
For every real number $m$, the solutions of the equation $\tan x = m$ are
$$
x = \arctan m + k\pi , \qquad k \in \mathbb{Z} .
$$

Unlike sine and cosine, tangent takes every real value, so there is no restriction on $m$. A single family suffices, with period $\pi$. For $\tan x = \sqrt{3}$, we have $\arctan\sqrt{3} = \dfrac{\pi}{3}$, hence $x = \dfrac{\pi}{3} + k\pi$. In $[0, 2\pi)$, the solutions are $\dfrac{\pi}{3}$ and $\dfrac{4\pi}{3}$.

::grafico{curve="cos(t),sin(t),0,6.29" linee="1,-2 1,2" segmenti="-1.155,-2,1.155,2" punti="0.5,0.866,pieno,P₁;-0.5,-0.866,pieno,P₂;1,1.732,pieno,T" xmin=-2 xmax=2 ymin=-2 ymax=2 uguale=1 legenda=0 titolo="The point $T(1, \sqrt{3})$ lies on the line $x = 1$. The line $OT$ intersects the circle at $P_1$, corresponding to the angle $\dfrac{\pi}{3}$, and at $P_2$, corresponding to the angle $\dfrac{4\pi}{3}$. Both angles have tangent $\sqrt{3}$"}

:::dimostrazione
The idea is to use the tangent line to the unit circle at the point $(1, 0)$, that is, the line $X = 1$. If the point $P$ corresponding to the angle $x$ does not lie on the $y$-axis, the line $OP$ meets the line $X = 1$ at $T(1, \tan x)$, since the slope of the line $OP$ is $\dfrac{\sin x}{\cos x} = \tan x$. Solving $\tan x = m$ therefore means finding the angles whose terminal sides lie on the line through $O$ and $T(1, m)$.

This line intersects the circle at two diametrically opposite points. One corresponds to the angle $\arctan m$, whose tangent is $m$. The other corresponds to the angle $\arctan m + \pi$. The solutions are the angles whose terminal sides pass through either point, that is, $\arctan m + 2k\pi$ or $\arctan m + \pi + 2k\pi$. Together, the numbers of the form $2k\pi$ and $\pi + 2k\pi$ give every integer multiple of $\pi$, so the two families combine to give $x = \arctan m + k\pi$.
:::
::::

:::osservazione{titolo="Cotangent equations"}
The cotangent is defined as $\cot x = \dfrac{\cos x}{\sin x}$ for $x \neq k\pi$. For $m \neq 0$, the equation $\cot x = m$ is equivalent to $\tan x = \dfrac{1}{m}$, since wherever both functions are defined, the cotangent is the reciprocal of the tangent. For example, $\cot x = -1$ is equivalent to $\tan x = -1$, which gives $x = -\dfrac{\pi}{4} + k\pi$. For $m = 0$, the equation $\cot x = 0$ is equivalent to $\cos x = 0$ with $\sin x \neq 0$, so the solutions are $x = \dfrac{\pi}{2} + k\pi$.
:::

## Equations with equal sines, cosines, or tangents

:::teorema{#stesso-seno titolo="Equations of the form sin f(x) = sin g(x)"}
Let $f(x)$ and $g(x)$ be two expressions in the unknown $x$, defined for the same values. The following equivalences hold:
$$
\begin{aligned}
\sin f(x) = \sin g(x) &\iff f(x) = g(x) + 2k\pi \ \text{ or } \ f(x) = \pi - g(x) + 2k\pi , \\[6pt]
\cos f(x) = \cos g(x) &\iff f(x) = g(x) + 2k\pi \ \text{ or } \ f(x) = -g(x) + 2k\pi , \\[6pt]
\tan f(x) = \tan g(x) &\iff f(x) = g(x) + k\pi ,
\end{aligned}
$$
where both tangents must be defined in the last line. The equivalences follow from the theorems on basic equations. For a fixed $x$, the number $m = \sin g(x)$ is the sine of the angle $g(x)$, and the angles with that sine are $g(x) + 2k\pi$ and $\pi - g(x) + 2k\pi$.

For example, $\sin (3x) = \sin x$ gives two linear equations in $x$:
$$
\begin{aligned}
3x = x + 2k\pi &\implies 2x = 2k\pi \implies x = k\pi , \\[6pt]
3x = \pi - x + 2k\pi &\implies 4x = \pi + 2k\pi \implies x = \frac{\pi}{4} + \frac{k\pi}{2} .
\end{aligned}
$$
When dividing by $2$ and by $4$, we must also divide the term $2k\pi$, so the period of each family changes.

::grafico{f="sin(3*x);sin(x)" punti="0,0,pieno;0.7854,0.7071,pieno;2.3562,0.7071,pieno;3.1416,0,pieno;3.9270,-0.7071,pieno;5.4978,-0.7071,pieno;6.2832,0,pieno" xmin=0 xmax=7 ymin=-1.5 ymax=1.5 legenda="y = \sin 3x;y = \sin x" titolo="In $[0, 2\pi]$, the graphs of $\sin 3x$ and $\sin x$ intersect at $0$, $\pi$, $2\pi$, and at $\dfrac{\pi}{4}$, $\dfrac{3\pi}{4}$, $\dfrac{5\pi}{4}$, $\dfrac{7\pi}{4}$"}

:::

:::esempio{titolo="An equation of the form cos f(x) = cos g(x)"}
Solve $\cos (2x) = \cos\left(x + \dfrac{\pi}{3}\right)$. By the preceding theorem,
$$
\begin{aligned}
2x = x + \frac{\pi}{3} + 2k\pi &\implies x = \frac{\pi}{3} + 2k\pi , \\[6pt]
2x = -x - \frac{\pi}{3} + 2k\pi &\implies 3x = -\frac{\pi}{3} + 2k\pi \implies x = -\frac{\pi}{9} + \frac{2k\pi}{3} .
\end{aligned}
$$
In the second family, the sign of the entire expression $x + \dfrac{\pi}{3}$ is reversed. For $x = \dfrac{\pi}{3}$, which belongs to the first family, both sides equal $\cos\dfrac{2\pi}{3} = -\dfrac{1}{2}$.
:::

:::teorema{#seno-uguale-coseno titolo="Equations reducible to equal sines or equal cosines"}
Identities for related angles reduce an equation involving different functions or a minus sign to one of the preceding equivalences:
$$
\begin{aligned}
\sin f(x) = \cos g(x) &\iff \sin f(x) = \sin\left( \frac{\pi}{2} - g(x) \right) , \\[6pt]
\sin f(x) = -\sin g(x) &\iff \sin f(x) = \sin\big( -g(x) \big) , \\[6pt]
\cos f(x) = -\cos g(x) &\iff \cos f(x) = \cos\big( \pi - g(x) \big) .
\end{aligned}
$$
The first line uses $\cos\alpha = \sin\left(\dfrac{\pi}{2} - \alpha\right)$, the second $-\sin\alpha = \sin(-\alpha)$, and the third $-\cos\alpha = \cos(\pi - \alpha)$. For example, $\sin x = \cos x$ becomes $\sin x = \sin\left(\dfrac{\pi}{2} - x\right)$. The first family gives $2x = \dfrac{\pi}{2} + 2k\pi$, that is, $x = \dfrac{\pi}{4} + k\pi$. The second gives $x = \pi - \dfrac{\pi}{2} + x + 2k\pi$, that is, $0 = \dfrac{\pi}{2} + 2k\pi$, which is false for every integer $k$, so it yields no solutions. The solutions are therefore $x = \dfrac{\pi}{4} + k\pi$.
:::

:::osservazione{#argomento-lineare titolo="Equations with argument ax + b"}
When the argument is a linear expression $ax + b$, with $a \neq 0$, first solve the basic equation for the angle $t = ax + b$, then solve for $x$ in each family. The period of the solutions in $x$ becomes $\dfrac{2\pi}{|a|}$ for sine and cosine and $\dfrac{\pi}{|a|}$ for tangent.

For $\tan\left(2x - \dfrac{\pi}{4}\right) = 1$, we have $2x - \dfrac{\pi}{4} = \dfrac{\pi}{4} + k\pi$, so $2x = \dfrac{\pi}{2} + k\pi$ and $x = \dfrac{\pi}{4} + \dfrac{k\pi}{2}$. The domain restrictions require $2x - \dfrac{\pi}{4} \neq \dfrac{\pi}{2} + k\pi$, which all the solutions found satisfy, since the tangent equals $1$ at those points.
:::

## Equations reducible to basic equations

:::teorema{#sostituzione titolo="Equations solved by substitution"}
If an equation contains only one trigonometric function of the unknown, for example only $\sin x$, set $t = \sin x$ and solve the algebraic equation in $t$. For each solution $t_0$, then solve the basic equation $\sin x = t_0$. With $t = \sin x$ or $t = \cos x$, retain only solutions satisfying the condition $-1 \leq t \leq 1$. With $t = \tan x$, every real solution is admissible.

For example,
$$
2\sin^2 x - \sin x - 1 = 0
\qquad \xrightarrow{\ t \, = \, \sin x \ } \qquad
2t^2 - t - 1 = 0 .
$$
The discriminant is $\Delta = 1 + 8 = 9$, so $t = \dfrac{1 \pm 3}{4}$, that is, $t = 1$ or $t = -\dfrac{1}{2}$. Both values lie between $-1$ and $1$. The equation $\sin x = 1$ gives $x = \dfrac{\pi}{2} + 2k\pi$, and the equation $\sin x = -\dfrac{1}{2}$ gives $x = -\dfrac{\pi}{6} + 2k\pi$ or $x = \dfrac{7\pi}{6} + 2k\pi$.
:::

:::esempio{titolo="A substitution with an inadmissible value"}
The equation $2\cos^2 x + 3\sin x - 3 = 0$ contains two different functions. Using the Pythagorean identity $\cos^2 x = 1 - \sin^2 x$, it becomes
$$
2 - 2\sin^2 x + 3\sin x - 3 = 0
\iff
2\sin^2 x - 3\sin x + 1 = 0 .
$$
Setting $t = \sin x$ gives $2t^2 - 3t + 1 = 0$, which has $\Delta = 9 - 8 = 1$ and solutions $t = 1$ and $t = \dfrac{1}{2}$. Hence $x = \dfrac{\pi}{2} + 2k\pi$, or $x = \dfrac{\pi}{6} + 2k\pi$, or $x = \dfrac{5\pi}{6} + 2k\pi$. If we solve $\sin^2 x - 3\sin x + 2 = 0$ instead, we obtain $t = 1$ and $t = 2$. The value $t = 2$ is inadmissible because the sine cannot exceed $1$, so only the solutions of $\sin x = 1$ remain.
:::

:::teorema{#annullamento-prodotto titolo="Equations solved by factoring"}
By the **zero-product property**, a product of factors is zero if and only if at least one factor is zero. An equation in the form $A(x) \cdot B(x) = 0$ therefore splits into the equations $A(x) = 0$ and $B(x) = 0$, and its solutions are the union of their solution sets.

For example, $2\sin x \cos x - \sin x = 0$ can be factored by taking out $\sin x$:
$$
\sin x \, (2\cos x - 1) = 0 .
$$
The first factor is zero for $x = k\pi$, and the second for $\cos x = \dfrac{1}{2}$, that is, for $x = \pm\dfrac{\pi}{3} + 2k\pi$. The solutions consist of all three families.
:::

:::attenzione
Dividing both sides by an expression that contains the unknown can discard solutions. In the equation $\sin x \cos x = \sin x$, dividing by $\sin x$ gives $\cos x = 1$, that is, $x = 2k\pi$. However, the values $x = \pi + 2k\pi$ solve the original equation because $\sin\pi \cos\pi = 0 = \sin\pi$, and dividing discards them. Factoring $\sin x\,(\cos x - 1) = 0$ gives all the solutions $x = k\pi$.
:::

:::teorema{#uso-formule titolo="Equations solved using trigonometric identities"}
When an equation contains different angles, such as $x$ and $2x$, or sums of sines and cosines, trigonometric identities transform it into an equation with a single angle or into a product. The most frequently used are the double-angle and sum-to-product identities, covered in the topic on trigonometric identities.

For example, $\cos (2x) + \cos x = 0$ contains the angles $2x$ and $x$. Using $\cos (2x) = 2\cos^2 x - 1$ gives
$$
2\cos^2 x + \cos x - 1 = 0
\iff
(2\cos x - 1)(\cos x + 1) = 0 ,
$$
so $\cos x = \dfrac{1}{2}$ or $\cos x = -1$, and the solutions are $x = \pm\dfrac{\pi}{3} + 2k\pi$ or $x = \pi + 2k\pi$.
:::

:::richiamo{titolo="Double-angle and sum-to-product identities"}
For all real $\alpha$, $p$, and $q$:
$$
\sin (2\alpha) = 2\sin\alpha\cos\alpha ,
\qquad
\cos (2\alpha) = 2\cos^2\alpha - 1 = 1 - 2\sin^2\alpha ,
$$
$$
\sin p - \sin q = 2\cos\frac{p + q}{2}\sin\frac{p - q}{2} ,
\qquad
\sin p + \sin q = 2\sin\frac{p + q}{2}\cos\frac{p - q}{2} .
$$
:::

:::esempio{titolo="An equation solved using a sum-to-product identity"}
Solve $\sin (3x) - \sin x = 0$. Using the identity for the difference of two sines, with $p = 3x$ and $q = x$, gives $\dfrac{p + q}{2} = 2x$ and $\dfrac{p - q}{2} = x$, so
$$
2\cos (2x) \sin x = 0 .
$$
The factor $\sin x$ is zero for $x = k\pi$. The factor $\cos (2x)$ is zero for $2x = \dfrac{\pi}{2} + k\pi$, that is, for $x = \dfrac{\pi}{4} + \dfrac{k\pi}{2}$. This gives the same solutions of $\sin (3x) = \sin x$ as the theorem for angles with equal sines.
:::

:::esempio{titolo="An equation with domain restrictions"}
In the equation $\tan x = 2\sin x$, the tangent is defined for $\cos x \neq 0$. Under this condition, write $\tan x = \dfrac{\sin x}{\cos x}$ and multiply both sides by $\cos x$:
$$
\sin x = 2\sin x\cos x
\iff
\sin x\,(1 - 2\cos x) = 0 .
$$
This gives $\sin x = 0$, that is, $x = k\pi$, and $\cos x = \dfrac{1}{2}$, that is, $x = \pm\dfrac{\pi}{3} + 2k\pi$. At each of these points, the cosine equals $\pm 1$ or $\dfrac{1}{2}$, so the domain restrictions are satisfied and all the solutions are admissible.
:::

## Linear equations in sine and cosine

:::definizione{#equazioni-lineari titolo="A linear equation in sine and cosine"}
A **linear equation** in sine and cosine has the form
$$
a\sin x + b\cos x = c ,
$$
where $a$, $b$, and $c$ are real numbers and both $a$ and $b$ differ from $0$. If $c = 0$, the equation is called a **first-degree homogeneous equation** and can be solved by dividing by $\cos x$. This division is valid because points with $\cos x = 0$ are not solutions. Indeed, at those points $\sin x = \pm 1$, so $a\sin x \neq 0$. For example, $\sin x - \sqrt{3}\cos x = 0$ becomes $\tan x = \sqrt{3}$, and the solutions are $x = \dfrac{\pi}{3} + k\pi$.

If $c \neq 0$, division does not reduce the equation to a single function. Three methods are available, illustrated here for the same equation $\sin x + \cos x = 1$.
:::

:::richiamo{titolo="Auxiliary angle"}
Let $a$ and $b$ be numbers that are not both zero, and let $r = \sqrt{a^2 + b^2}$. There is an angle $\varphi$ with $\cos\varphi = \dfrac{a}{r}$ and $\sin\varphi = \dfrac{b}{r}$, and for every real $x$,
$$
a\sin x + b\cos x = r\sin(x + \varphi) .
$$
:::

:::teorema{#angolo-aggiunto titolo="Auxiliary-angle method"}
Using the auxiliary angle, the equation $a\sin x + b\cos x = c$ becomes
$$
r\sin(x + \varphi) = c
\iff
\sin(x + \varphi) = \frac{c}{r} ,
$$
which is a basic equation with argument $x + \varphi$. It follows that the linear equation has solutions if and only if $|c| \leq r$, that is, if and only if $c^2 \leq a^2 + b^2$.

For $\sin x + \cos x = 1$, we have $a = b = 1$ and $r = \sqrt{2}$, so $\cos\varphi = \sin\varphi = \dfrac{1}{\sqrt{2}}$ and $\varphi = \dfrac{\pi}{4}$. The equation becomes $\sin\left(x + \dfrac{\pi}{4}\right) = \dfrac{1}{\sqrt{2}} = \dfrac{\sqrt{2}}{2}$, hence
$$
x + \frac{\pi}{4} = \frac{\pi}{4} + 2k\pi
\qquad \text{or} \qquad
x + \frac{\pi}{4} = \frac{3\pi}{4} + 2k\pi ,
$$
that is, $x = 2k\pi$ or $x = \dfrac{\pi}{2} + 2k\pi$. In contrast, the equation $\sin x + \cos x = 2$ has no solutions, since $2 > \sqrt{2}$.
:::

:::richiamo{titolo="Tangent half-angle formulas"}
If $x \neq \pi + 2k\pi$ and $t = \tan\dfrac{x}{2}$, then
$$
\sin x = \frac{2t}{1 + t^2} ,
\qquad
\cos x = \frac{1 - t^2}{1 + t^2} .
$$
:::

::::teorema{#metodo-parametriche titolo="Tangent half-angle substitution"}
To solve $a\sin x + b\cos x = c$, proceed in two steps.
- Check separately whether the values $x = \pi + 2k\pi$ are solutions by substituting $\sin x = 0$ and $\cos x = -1$. These values are solutions if and only if $-b = c$.
- For $x \neq \pi + 2k\pi$, substitute the tangent half-angle formulas with $t = \tan\dfrac{x}{2}$, solve the equation in $t$, and find $x$ from $\tan\dfrac{x}{2} = t$.

For $\sin x + \cos x = 1$, the separate check gives $0 + (-1) = -1 \neq 1$, so $x = \pi + 2k\pi$ is not a solution. Using the tangent half-angle formulas and multiplying by $1 + t^2 > 0$ gives
$$
2t + 1 - t^2 = 1 + t^2
\iff
2t^2 - 2t = 0
\iff
2t\,(t - 1) = 0 .
$$
From $t = 0$ it follows that $\dfrac{x}{2} = k\pi$, that is, $x = 2k\pi$. From $t = 1$ it follows that $\dfrac{x}{2} = \dfrac{\pi}{4} + k\pi$, that is, $x = \dfrac{\pi}{2} + 2k\pi$.

:::dimostrazione
The separate check is needed because the tangent half-angle formulas hold only where $\tan\dfrac{x}{2}$ is defined, that is, for $\dfrac{x}{2} \neq \dfrac{\pi}{2} + k\pi$. Multiplying by $2$ gives the condition $x \neq \pi + 2k\pi$. The substitution therefore excludes the values $x = \pi + 2k\pi$, and the equation in $t$ cannot give them even when they are solutions. At these points $\sin x = 0$ and $\cos x = -1$, so the left-hand side equals $-b$, and the points are solutions if and only if $-b = c$. For all other values of $x$, the substitution replaces each expression with an equal one, and the equation in $t$ is equivalent to the original one.
:::
::::

:::esempio{titolo="A case in which x = π + 2kπ is a solution"}
In the equation $\sin x - \cos x = 1$, we have $b = -1$ and $c = 1$, so $-b = c$ and the values $x = \pi + 2k\pi$ are solutions, since $\sin\pi - \cos\pi = 0 + 1 = 1$. Using the tangent half-angle formulas gives $2t - 1 + t^2 = 1 + t^2$, that is, $t = 1$, from which $x = \dfrac{\pi}{2} + 2k\pi$ follows. Without the separate check, the family $x = \pi + 2k\pi$ would be lost. The solutions are therefore $x = \dfrac{\pi}{2} + 2k\pi$ or $x = \pi + 2k\pi$.
:::

:::teorema{#metodo-grafico titolo="Graphical method"}
Set $X = \cos x$ and $Y = \sin x$. The point $(X, Y)$ lies on the unit circle, so the equation $a\sin x + b\cos x = c$ is equivalent to the system
$$
\begin{cases}
bX + aY = c \\[4pt]
X^2 + Y^2 = 1
\end{cases}
$$
The solutions of the system are the points where the line $bX + aY = c$ intersects the circle. For each intersection, find the angle $x$ for which $\cos x = X$ and $\sin x = Y$. The line can cross the circle twice, be tangent to it, or miss it altogether, giving two families of solutions, one family, or no solutions, respectively.

For $\sin x + \cos x = 1$, the system consists of $X + Y = 1$ and $X^2 + Y^2 = 1$. Substituting $Y = 1 - X$ gives $X^2 + 1 - 2X + X^2 = 1$, that is, $2X\,(X - 1) = 0$. The solutions are $A(1, 0)$ and $B(0, 1)$, corresponding to the angles $x = 2k\pi$ and $x = \dfrac{\pi}{2} + 2k\pi$.

::grafico{curve="cos(t),sin(t),0,6.29" segmenti="-0.4,1.4,1.4,-0.4" punti="1,0,pieno,A;0,1,pieno,B" xmin=-1.5 xmax=1.5 ymin=-1.5 ymax=1.5 uguale=1 nomi="X,Y" legenda=0 titolo="The line $X + Y = 1$ intersects the unit circle at $A(1, 0)$ and $B(0, 1)$, so $\sin x + \cos x = 1$ for $x = 2k\pi$ and for $x = \dfrac{\pi}{2} + 2k\pi$"}

:::

:::osservazione{titolo="Comparing the three methods"}
The three methods give the same solutions. The auxiliary-angle method produces a basic equation, and the condition $c^2 \leq a^2 + b^2$ immediately shows whether solutions exist. It is the quickest method when $\dfrac{b}{a}$ is the tangent of a special angle, as in the cases $\dfrac{b}{a} = 1$, $\sqrt{3}$, and $\dfrac{1}{\sqrt{3}}$. The tangent half-angle substitution always gives a quadratic equation in $t$, even when $\varphi$ is not a special angle, but it requires a separate check of $x = \pi + 2k\pi$. With the graphical method, the number of solutions can be read from the position of the line relative to the circle.
:::

## Homogeneous quadratic equations

:::definizione{#equazioni-omogenee titolo="A homogeneous quadratic equation"}
A **homogeneous quadratic** equation in sine and cosine has the form
$$
a\sin^2 x + b\sin x\cos x + c\cos^2 x = 0 ,
$$
where $a$, $b$, and $c$ are real numbers that are not all zero. The name indicates that every term has total degree $2$ in $\sin x$ and $\cos x$.

If $a \neq 0$, points with $\cos x = 0$ are not solutions, since at these points $\sin^2 x = 1$ and the left-hand side equals $a \neq 0$. We can therefore divide by $\cos^2 x$ to obtain a quadratic equation in the tangent:
$$
a\tan^2 x + b\tan x + c = 0 .
$$
For example, $\sin^2 x - (1 + \sqrt{3})\sin x\cos x + \sqrt{3}\cos^2 x = 0$ becomes $\tan^2 x - (1 + \sqrt{3})\tan x + \sqrt{3} = 0$. The roots have sum $1 + \sqrt{3}$ and product $\sqrt{3}$, so they are $\tan x = 1$ and $\tan x = \sqrt{3}$, and the solutions are $x = \dfrac{\pi}{4} + k\pi$ or $x = \dfrac{\pi}{3} + k\pi$.
:::

:::attenzione
If $a = 0$, points with $\cos x = 0$ are solutions, and dividing by $\cos^2 x$ discards them. In the equation $\sin x\cos x - \sqrt{3}\cos^2 x = 0$, the coefficient of $\sin^2 x$ is $a = 0$. For $x = \dfrac{\pi}{2}$, the left-hand side equals $1 \cdot 0 - \sqrt{3} \cdot 0 = 0$, so $\dfrac{\pi}{2}$ is a solution. In this case, factor out $\cos x$:
$$
\cos x\,(\sin x - \sqrt{3}\cos x) = 0 ,
$$
This gives $x = \dfrac{\pi}{2} + k\pi$ from the first factor and $x = \dfrac{\pi}{3} + k\pi$ from the second, which is homogeneous of degree one.
:::

:::teorema{#riconducibili-omogenee titolo="Equations reducible to homogeneous equations"}
The equation
$$
a\sin^2 x + b\sin x\cos x + c\cos^2 x = d ,
$$
with $d \neq 0$, can be transformed into a homogeneous equation by writing the constant term as $d = d\,(\sin^2 x + \cos^2 x)$. This is valid because $\sin^2 x + \cos^2 x = 1$ for every $x$. Moving all terms to the left-hand side gives
$$
(a - d)\sin^2 x + b\sin x\cos x + (c - d)\cos^2 x = 0 .
$$
For example, $2\sin^2 x - \sqrt{3}\sin x\cos x + \cos^2 x = 1$ becomes
$$
2\sin^2 x - \sqrt{3}\sin x\cos x + \cos^2 x = \sin^2 x + \cos^2 x
\iff
\sin^2 x - \sqrt{3}\sin x\cos x = 0 .
$$
The coefficient of $\sin^2 x$ is $1 \neq 0$, so dividing by $\cos^2 x$ gives $\tan^2 x - \sqrt{3}\tan x = 0$, that is, $\tan x\,(\tan x - \sqrt{3}) = 0$. The solutions are $x = k\pi$ or $x = \dfrac{\pi}{3} + k\pi$. For $x = 0$, the original left-hand side equals $0 - 0 + 1 = 1$, in agreement with the result.
:::

:::osservazione{titolo="Equations containing the product sin x cos x"}
An equation containing $\sin x\cos x$ and a constant term, such as $\sin x\cos x = \dfrac{1}{4}$, can also be solved in two ways. Using the double-angle identity $\sin x\cos x = \dfrac{1}{2}\sin(2x)$, it becomes $\sin(2x) = \dfrac{1}{2}$, a basic equation. With the method for homogeneous equations, write $4\sin x\cos x = \sin^2 x + \cos^2 x$, that is, $\tan^2 x - 4\tan x + 1 = 0$. The double-angle identity gives $2x = \dfrac{\pi}{6} + 2k\pi$ or $2x = \dfrac{5\pi}{6} + 2k\pi$ immediately, so $x = \dfrac{\pi}{12} + k\pi$ or $x = \dfrac{5\pi}{12} + k\pi$.
:::

## Solutions in an interval and equations with a parameter

:::teorema{#soluzioni-intervallo titolo="Solutions in a specified interval"}
To find the solutions that lie in an interval $[p, q]$, write the general solution and, for each family, find the integers $k$ for which the solution lies in the interval. For the family $x = x_0 + kT$, with period $T > 0$, the condition is the double inequality
$$
p \leq x_0 + kT \leq q ,
$$
which is solved for $k$, retaining the integer values.

For example, $\cos(2x) = \dfrac{1}{2}$ gives $2x = \pm\dfrac{\pi}{3} + 2k\pi$, that is, $x = \pm\dfrac{\pi}{6} + k\pi$. In the interval $[0, 2\pi]$, the family $\dfrac{\pi}{6} + k\pi$ gives the values $\dfrac{\pi}{6}$ and $\dfrac{7\pi}{6}$ for $k = 0$ and $k = 1$. The family $-\dfrac{\pi}{6} + k\pi$ gives $\dfrac{5\pi}{6}$ and $\dfrac{11\pi}{6}$ for $k = 1$ and $k = 2$. There are therefore four solutions, the horizontal coordinates of the intersections of the graph of $\cos(2x)$ and the line $y = \dfrac{1}{2}$.

::grafico{f="cos(2*x);0.5" punti="0.5236,0.5,pieno;2.6180,0.5,pieno;3.6652,0.5,pieno;5.7596,0.5,pieno" segmenti="6.2832,-1.5,6.2832,1.5" xmin=0 xmax=7 ymin=-1.5 ymax=1.5 legenda="y = \cos 2x;y = \dfrac{1}{2}" titolo="In $[0, 2\pi]$, the equation $\cos 2x = \dfrac{1}{2}$ has the four solutions $\dfrac{\pi}{6}$, $\dfrac{5\pi}{6}$, $\dfrac{7\pi}{6}$, and $\dfrac{11\pi}{6}$. The function $\cos 2x$ has period $\pi$, so its graph in $[0, 2\pi]$ covers two periods"}

:::

:::esempio{titolo="Choosing k using a double inequality"}
Find the solutions of $\sin\left(3x\right) = 1$ in the interval $[0, \pi]$. The general solutions are $3x = \dfrac{\pi}{2} + 2k\pi$, that is, $x = \dfrac{\pi}{6} + \dfrac{2k\pi}{3}$. The condition is
$$
0 \leq \frac{\pi}{6} + \frac{2k\pi}{3} \leq \pi
\iff
-\frac{\pi}{6} \leq \frac{2k\pi}{3} \leq \frac{5\pi}{6}
\iff
-\frac{1}{4} \leq k \leq \frac{5}{4} .
$$
The last step multiplies by $\dfrac{3}{2\pi} > 0$. The integers between $-\dfrac{1}{4}$ and $\dfrac{5}{4}$ are $k = 0$ and $k = 1$, so the solutions in the interval are $\dfrac{\pi}{6}$ and $\dfrac{5\pi}{6}$.
:::

:::teorema{#discussione-parametro titolo="How the number of solutions changes with a parameter"}
In an equation of the form $\sin x = h(m)$, where $h(m)$ depends on a real parameter $m$, the number of solutions in an interval can be found from the graph of $y = \sin x$ on that interval and the horizontal line $y = h(m)$, since each intersection corresponds to one solution. The same holds for cosine and tangent.

For example, the equation $2\sin x = m$ in the interval $[0, 2\pi)$ is equivalent to $\sin x = \dfrac{m}{2}$. The graph of $y = 2\sin x$ on $[0, 2\pi)$ and the line $y = m$ show that
- for $m < -2$ or $m > 2$ there are no solutions;
- for $m = 2$ the only solution is $\dfrac{\pi}{2}$, and for $m = -2$ the only solution is $\dfrac{3\pi}{2}$;
- for $-2 < m < 2$ there are two solutions.

For $m = 0$, the two solutions are $0$ and $\pi$. The point $2\pi$ does not belong to the interval because the right endpoint is excluded, so it does not give a third solution.

::grafico{f="2*sin(x)" segmenti="0,1,6.2832,1;0,2,6.2832,2" punti="0.5236,1,pieno;2.6180,1,pieno;1.5708,2,pieno;6.2832,0,vuoto" xmin=0 xmax=7 ymin=-3 ymax=3 legenda="y = 2\sin x" titolo="Graph of $2\sin x$ on $[0, 2\pi)$. The line $y = 1$ intersects it at two points, and the line $y = 2$ intersects it at only one"}

:::

## Systems of trigonometric equations

:::definizione{#sistemi-goniometrici titolo="A system of trigonometric equations"}
A **system of trigonometric equations** consists of two or more equations in two or more unknowns, with at least one trigonometric equation. A solution is a pair $(x, y)$ that satisfies all the equations simultaneously. Such a system is solved using the methods for algebraic systems, that is, by substituting for one unknown or by combining the equations.

In the system
$$
\begin{cases}
\sin x + \cos y = 1 \\[4pt]
\sin x - \cos y = 0
\end{cases}
$$
the unknowns appear only in $\sin x$ and $\cos y$. Adding the two equations gives $2\sin x = 1$, and subtracting them gives $2\cos y = 1$. Hence $\sin x = \dfrac{1}{2}$ and $\cos y = \dfrac{1}{2}$, that is, $x = \dfrac{\pi}{6} + 2k\pi$ or $x = \dfrac{5\pi}{6} + 2k\pi$, and $y = \pm\dfrac{\pi}{3} + 2h\pi$, with $h$ and $k$ independent integers. Each choice of $x$ can be paired with every choice of $y$.
:::

:::esempio{titolo="A system involving the sum of the unknowns"}
With $x$ and $y$ in the interval $[0, \pi]$, solve the system
$$
\begin{cases}
\sin x + \sin y = \sqrt{3} \\[4pt]
x + y = \pi
\end{cases}
$$
The second equation gives $y = \pi - x$, and the identity for supplementary angles gives $\sin y = \sin(\pi - x) = \sin x$. The first equation becomes $2\sin x = \sqrt{3}$, that is, $\sin x = \dfrac{\sqrt{3}}{2}$. In $[0, \pi]$, this gives $x = \dfrac{\pi}{3}$ and $x = \dfrac{2\pi}{3}$, and the corresponding values $y = \pi - x$ also lie in $[0, \pi]$. The solutions are the pairs $\left(\dfrac{\pi}{3}, \dfrac{2\pi}{3}\right)$ and $\left(\dfrac{2\pi}{3}, \dfrac{\pi}{3}\right)$.
:::
