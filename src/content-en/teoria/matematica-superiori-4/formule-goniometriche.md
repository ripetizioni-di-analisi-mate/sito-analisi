---
titolo: Trigonometric identities
sommario: The angle sum and difference formulas and their proofs, double-angle and half-angle formulas, the tangent half-angle substitution, sum-to-product and Werner's product-to-sum formulas, the auxiliary-angle method, verifying identities, and evaluating trigonometric functions exactly at angles such as $15^\circ$, $75^\circ$, and $22.5^\circ$.
---

## Trigonometric identities

:::richiamo{titolo="Trigonometric functions on the circle"}
Let $\alpha$ be a real number and $P$ the point on the unit circle (centered at the origin, with radius $1$) corresponding to the directed angle $\alpha$. Then
$$
P = (\cos\alpha, \sin\alpha) ,
\qquad
\sin^2\alpha + \cos^2\alpha = 1 ,
\qquad
\tan\alpha = \frac{\sin\alpha}{\cos\alpha} \quad \text{for } \alpha \neq \frac{\pi}{2} + k\pi .
$$
The negative-angle and complementary-angle identities are
$$
\cos(-\alpha) = \cos\alpha ,
\qquad
\sin(-\alpha) = -\sin\alpha ,
\qquad
\cos\left( \frac{\pi}{2} - \alpha \right) = \sin\alpha ,
\qquad
\sin\left( \frac{\pi}{2} - \alpha \right) = \cos\alpha .
$$
:::

:::definizione{#identita-goniometrica titolo="Trigonometric identity"}
A **trigonometric identity** is an equality between two expressions involving trigonometric functions of the same variable that holds for *every* value of the variable for which both sides are defined. For example,
$$
\tan x \cos x = \sin x
$$
is an identity, since for $x \neq \dfrac{\pi}{2} + k\pi$ we have $\tan x \cos x = \dfrac{\sin x}{\cos x} \cdot \cos x = \sin x$. In contrast, the equality $\sin x = \dfrac{1}{2}$ holds only for certain values of $x$, such as $x = \dfrac{\pi}{6}$, and is an equation.

An identity allows one expression to be replaced by an equivalent, usually simpler, one. All the formulas in this chapter are identities, and each is given with the set of values for which it holds.
:::

:::osservazione{#uso-formule titolo="What trigonometric formulas are used for"}
The exact sine, cosine, and tangent values are known for the special angles $0$, $\dfrac{\pi}{6}$, $\dfrac{\pi}{4}$, $\dfrac{\pi}{3}$, $\dfrac{\pi}{2}$ and their related angles. Trigonometric formulas express functions of a sum, a difference, twice an angle, or half an angle in terms of functions of the original angles. For example, $\dfrac{\pi}{12} = \dfrac{\pi}{3} - \dfrac{\pi}{4}$, so the sine of $\dfrac{\pi}{12}$, that is, of $15^\circ$, can be found from the known values for $\dfrac{\pi}{3}$ and $\dfrac{\pi}{4}$.

The same formulas simplify expressions and transform equations or inequalities into a form that can be solved. See the chapters on trigonometric equations and inequalities.
:::

:::attenzione
The sine of a sum of angles differs from the sum of their sines. For $\alpha = \beta = \dfrac{\pi}{6}$,
$$
\sin(\alpha + \beta) = \sin\frac{\pi}{3} = \frac{\sqrt{3}}{2} ,
\qquad
\sin\alpha + \sin\beta = \frac{1}{2} + \frac{1}{2} = 1 ,
$$
and the two numbers differ. The sine of a sum is calculated using the sine addition formula.
:::

## Cosine of a difference and of a sum

:::richiamo{titolo="Distance between two points"}
Given two points $A(x_A, y_A)$ and $B(x_B, y_B)$ in the Cartesian plane, their distance is
$$
\overline{AB} = \sqrt{(x_B - x_A)^2 + (y_B - y_A)^2} .
$$
:::

::::teorema{#coseno-differenza titolo="Cosine of a difference"}
For any two real numbers $\alpha$ and $\beta$,
$$
\cos(\alpha - \beta) = \cos\alpha\cos\beta + \sin\alpha\sin\beta .
$$
All the other formulas in this chapter follow from this one. For example, since $\dfrac{\pi}{12} = \dfrac{\pi}{3} - \dfrac{\pi}{4}$,
$$
\cos\frac{\pi}{12} = \cos\frac{\pi}{3}\cos\frac{\pi}{4} + \sin\frac{\pi}{3}\sin\frac{\pi}{4} = \frac{1}{2} \cdot \frac{\sqrt{2}}{2} + \frac{\sqrt{3}}{2} \cdot \frac{\sqrt{2}}{2} = \frac{\sqrt{2} + \sqrt{6}}{4} .
$$

:::dimostrazione
The idea is to calculate the length of the same chord of the unit circle in two ways. Let $P(\cos\alpha, \sin\alpha)$ and $Q(\cos\beta, \sin\beta)$ be the points corresponding to the angles $\alpha$ and $\beta$. The angle $Q\widehat{O}P$ measures $\alpha - \beta$. By the distance formula,
$$
\begin{aligned}
\overline{PQ}^2 &= (\cos\alpha - \cos\beta)^2 + (\sin\alpha - \sin\beta)^2 \\[6pt]
&= \cos^2\alpha - 2\cos\alpha\cos\beta + \cos^2\beta + \sin^2\alpha - 2\sin\alpha\sin\beta + \sin^2\beta \\[6pt]
&= 2 - 2\,(\cos\alpha\cos\beta + \sin\alpha\sin\beta) ,
\end{aligned}
$$
where the last step uses the Pythagorean identity twice, $\cos^2\alpha + \sin^2\alpha = 1$ and $\cos^2\beta + \sin^2\beta = 1$.

::grafico{curve="cos(t),sin(t),0,6.29" vettori="0,0,-0.5,0.866,P;0,0,0.866,0.5,Q" linee="-0.5,0.866 0.866,0.5" xmin=-1.5 xmax=1.5 ymin=-1.3 ymax=1.3 uguale=1 legenda=0 titolo="The points $P(\cos\alpha, \sin\alpha)$ and $Q(\cos\beta, \sin\beta)$, shown here with $\alpha = \dfrac{2\pi}{3}$ and $\beta = \dfrac{\pi}{6}$. The central angle $Q\widehat{O}P$ measures $\alpha - \beta$"}

Now rotate the figure about the origin through an angle $-\beta$. A rotation preserves distances. The point $Q$ maps to the point $A(1, 0)$, and the point $P$ maps to the point $P'$ corresponding to the angle $\alpha - \beta$, that is, $P'\big( \cos(\alpha - \beta), \sin(\alpha - \beta) \big)$. Therefore $\overline{PQ} = \overline{P'A}$, and
$$
\begin{aligned}
\overline{P'A}^2 &= \big( \cos(\alpha - \beta) - 1 \big)^2 + \sin^2(\alpha - \beta) \\[6pt]
&= \cos^2(\alpha - \beta) - 2\cos(\alpha - \beta) + 1 + \sin^2(\alpha - \beta) \\[6pt]
&= 2 - 2\cos(\alpha - \beta) .
\end{aligned}
$$

::grafico{curve="cos(t),sin(t),0,6.29" vettori="0,0,0,1,P′;0,0,1,0,A" linee="0,1 1,0" xmin=-1.5 xmax=1.5 ymin=-1.3 ymax=1.3 uguale=1 legenda=0 titolo="After rotation through $-\beta$ the chord becomes $P'A$, with $P'\big( \cos(\alpha - \beta), \sin(\alpha - \beta) \big)$ and $A(1, 0)$. Its length equals that of $PQ$"}

Equating the two expressions gives $2 - 2\cos(\alpha - \beta) = 2 - 2\,(\cos\alpha\cos\beta + \sin\alpha\sin\beta)$. Subtracting $2$ from both sides and dividing by $-2$ proves the identity.
:::
::::

::::teorema{#coseno-somma titolo="Cosine of a sum"}
For any two real numbers $\alpha$ and $\beta$,
$$
\cos(\alpha + \beta) = \cos\alpha\cos\beta - \sin\alpha\sin\beta .
$$
Only the sign before the product of the sines changes from the difference formula. For example, since $\dfrac{5\pi}{12} = \dfrac{\pi}{4} + \dfrac{\pi}{6}$,
$$
\cos\frac{5\pi}{12} = \frac{\sqrt{2}}{2} \cdot \frac{\sqrt{3}}{2} - \frac{\sqrt{2}}{2} \cdot \frac{1}{2} = \frac{\sqrt{6} - \sqrt{2}}{4} .
$$

:::dimostrazione
Write the sum as a difference, $\alpha + \beta = \alpha - (-\beta)$, and apply the cosine difference formula with $-\beta$ in place of $\beta$:
$$
\cos(\alpha + \beta) = \cos\alpha\cos(-\beta) + \sin\alpha\sin(-\beta) .
$$
Since $\cos(-\beta) = \cos\beta$ and $\sin(-\beta) = -\sin\beta$, the right-hand side equals $\cos\alpha\cos\beta - \sin\alpha\sin\beta$.
:::
::::

:::esempio{titolo="Cosine of a sum when the quadrants are given"}
Let $\cos\alpha = \dfrac{3}{5}$ with $0 < \alpha < \dfrac{\pi}{2}$ and $\sin\beta = \dfrac{5}{13}$ with $\dfrac{\pi}{2} < \beta < \pi$. The formulas also require $\sin\alpha$ and $\cos\beta$, which follow from the Pythagorean identity. The angle $\alpha$ lies in the first quadrant, so its sine is positive. The angle $\beta$ lies in the second quadrant, so its cosine is negative:
$$
\sin\alpha = \sqrt{1 - \frac{9}{25}} = \frac{4}{5} ,
\qquad
\cos\beta = -\sqrt{1 - \frac{25}{169}} = -\frac{12}{13} .
$$
Then
$$
\cos(\alpha + \beta) = \frac{3}{5} \cdot \left( -\frac{12}{13} \right) - \frac{4}{5} \cdot \frac{5}{13} = -\frac{56}{65} ,
\qquad
\cos(\alpha - \beta) = -\frac{36}{65} + \frac{20}{65} = -\frac{16}{65} .
$$
:::

:::attenzione
The cosine of a difference differs from the difference of the cosines. For $\alpha = \beta = \dfrac{\pi}{3}$ we have $\cos(\alpha - \beta) = \cos 0 = 1$, whereas $\cos\alpha - \cos\beta = 0$.
:::

## Sine and tangent of a sum and of a difference

::::teorema{#seno-somma-differenza titolo="Sine of a sum and of a difference"}
For any two real numbers $\alpha$ and $\beta$, the following identities hold:
$$
\sin(\alpha + \beta) = \sin\alpha\cos\beta + \cos\alpha\sin\beta ,
\qquad
\sin(\alpha - \beta) = \sin\alpha\cos\beta - \cos\alpha\sin\beta .
$$
The sine formulas contain mixed products, a sine times a cosine, and the sign between the products is the sign between the angles. For example,
$$
\sin\frac{\pi}{12} = \sin\left( \frac{\pi}{3} - \frac{\pi}{4} \right) = \frac{\sqrt{3}}{2} \cdot \frac{\sqrt{2}}{2} - \frac{1}{2} \cdot \frac{\sqrt{2}}{2} = \frac{\sqrt{6} - \sqrt{2}}{4} .
$$
The result equals $\cos\dfrac{5\pi}{12}$, as expected, since $\dfrac{\pi}{12}$ and $\dfrac{5\pi}{12}$ are complementary angles.

:::dimostrazione
The idea is to express the sine as a cosine using complementary angles. Since $\sin t = \cos\left( \dfrac{\pi}{2} - t \right)$ for every $t$,
$$
\begin{aligned}
\sin(\alpha + \beta) &= \cos\left( \left( \frac{\pi}{2} - \alpha \right) - \beta \right) \\[6pt]
&= \cos\left( \frac{\pi}{2} - \alpha \right)\cos\beta + \sin\left( \frac{\pi}{2} - \alpha \right)\sin\beta \\[6pt]
&= \sin\alpha\cos\beta + \cos\alpha\sin\beta ,
\end{aligned}
$$
where the second step uses the cosine difference formula. The formula for $\sin(\alpha - \beta)$ follows by substituting $-\beta$ for $\beta$, since $\cos(-\beta) = \cos\beta$ and $\sin(-\beta) = -\sin\beta$.
:::
::::

:::esempio{titolo="Sine of a sum and the quadrant of the resulting angle"}
Using the angles from the cosine sum example, that is, $\sin\alpha = \dfrac{4}{5}$, $\cos\alpha = \dfrac{3}{5}$, $\sin\beta = \dfrac{5}{13}$, and $\cos\beta = -\dfrac{12}{13}$, we obtain
$$
\sin(\alpha + \beta) = \frac{4}{5} \cdot \left( -\frac{12}{13} \right) + \frac{3}{5} \cdot \frac{5}{13} = -\frac{48}{65} + \frac{15}{65} = -\frac{33}{65} .
$$
The sine and cosine of $\alpha + \beta$ are both negative, so the angle $\alpha + \beta$ lies in the third quadrant. This agrees with the given information, since $0 < \alpha < \dfrac{\pi}{2}$ and $\dfrac{\pi}{2} < \beta < \pi$ imply $\dfrac{\pi}{2} < \alpha + \beta < \dfrac{3\pi}{2}$.
:::

::::teorema{#tangente-somma-differenza titolo="Tangent of a sum and of a difference"}
Suppose that $\alpha$, $\beta$, and $\alpha + \beta$ all differ from $\dfrac{\pi}{2} + k\pi$. Then
$$
\tan(\alpha + \beta) = \frac{\tan\alpha + \tan\beta}{1 - \tan\alpha\tan\beta} .
$$
If instead $\alpha$, $\beta$, and $\alpha - \beta$ all differ from $\dfrac{\pi}{2} + k\pi$, then
$$
\tan(\alpha - \beta) = \frac{\tan\alpha - \tan\beta}{1 + \tan\alpha\tan\beta} .
$$
These conditions ensure that all three tangents in the formula exist. For example,
$$
\tan\frac{\pi}{12} = \tan\left( \frac{\pi}{3} - \frac{\pi}{4} \right) = \frac{\sqrt{3} - 1}{1 + \sqrt{3}} = \frac{\left( \sqrt{3} - 1 \right)^2}{3 - 1} = \frac{4 - 2\sqrt{3}}{2} = 2 - \sqrt{3} ,
$$
where the denominator has been rationalized by multiplying the numerator and denominator by $\sqrt{3} - 1$.

:::dimostrazione
Write the tangent as the ratio of sine to cosine and apply the addition formulas:
$$
\tan(\alpha + \beta) = \frac{\sin\alpha\cos\beta + \cos\alpha\sin\beta}{\cos\alpha\cos\beta - \sin\alpha\sin\beta} .
$$
By assumption $\cos\alpha \neq 0$ and $\cos\beta \neq 0$, so we can divide the numerator and denominator by $\cos\alpha\cos\beta$. The numerator becomes $\dfrac{\sin\alpha}{\cos\alpha} + \dfrac{\sin\beta}{\cos\beta} = \tan\alpha + \tan\beta$, and the denominator becomes $1 - \dfrac{\sin\alpha}{\cos\alpha} \cdot \dfrac{\sin\beta}{\cos\beta} = 1 - \tan\alpha\tan\beta$. The difference formula follows by substituting $-\beta$ for $\beta$, because $\tan(-\beta) = -\tan\beta$.
:::
::::

:::esempio{titolo="Angle between two lines"}
A line of slope $m$ is inclined to the $x$-axis at an angle $\theta$ such that $\tan\theta = m$. The lines $y = 3x$ and $y = \dfrac{x}{2}$ make angles with the $x$-axis denoted by $\theta_1$ and $\theta_2$, respectively, with $\tan\theta_1 = 3$ and $\tan\theta_2 = \dfrac{1}{2}$. The angle between the lines is the difference $\theta_1 - \theta_2$, and by the tangent difference formula,
$$
\tan(\theta_1 - \theta_2) = \frac{3 - \dfrac{1}{2}}{1 + 3 \cdot \dfrac{1}{2}} = \frac{\dfrac{5}{2}}{\dfrac{5}{2}} = 1 .
$$
Since $\theta_1 - \theta_2$ is between $0$ and $\dfrac{\pi}{2}$, the angle between the two lines is $\dfrac{\pi}{4}$.

::grafico{f="3*x;x/2" xmin=-1 xmax=3 ymin=-1 ymax=4 uguale=1 titolo="The lines $y = 3x$ and $y = \dfrac{x}{2}$ make an angle of $\dfrac{\pi}{4}$ because the tangent of the difference of their angles of inclination equals $1$"}

:::

:::osservazione
If $\tan\alpha\tan\beta = 1$, the denominator in the tangent sum formula is zero. In this case $\alpha + \beta = \dfrac{\pi}{2} + k\pi$, and the tangent of $\alpha + \beta$ is undefined. For example, if $\tan\alpha = 2$ and $\tan\beta = \dfrac{1}{2}$ and both angles are acute, then $\cos(\alpha + \beta) = \cos\alpha\cos\beta\,(1 - \tan\alpha\tan\beta) = 0$, so $\alpha + \beta = \dfrac{\pi}{2}$.
:::

## Double-angle formulas

::::teorema{#duplicazione titolo="Double-angle formulas"}
For every real number $\alpha$, the following identities hold:
$$
\sin 2\alpha = 2\sin\alpha\cos\alpha ,
\qquad
\cos 2\alpha = \cos^2\alpha - \sin^2\alpha = 1 - 2\sin^2\alpha = 2\cos^2\alpha - 1 .
$$
If in addition $\alpha \neq \dfrac{\pi}{2} + k\pi$ and $\alpha \neq \dfrac{\pi}{4} + k\dfrac{\pi}{2}$, then
$$
\tan 2\alpha = \frac{2\tan\alpha}{1 - \tan^2\alpha} .
$$
The three forms of the cosine formula allow us to choose the one that uses the single value available. If $\sin\alpha$ is known, use $1 - 2\sin^2\alpha$. If $\cos\alpha$ is known, use $2\cos^2\alpha - 1$. For example, given $\cos\alpha = \dfrac{1}{3}$, we obtain $\cos 2\alpha = 2 \cdot \dfrac{1}{9} - 1 = -\dfrac{7}{9}$ without calculating $\sin\alpha$.

:::dimostrazione
Set $\beta = \alpha$ in the addition formulas:
$$
\sin 2\alpha = \sin\alpha\cos\alpha + \cos\alpha\sin\alpha = 2\sin\alpha\cos\alpha ,
\qquad
\cos 2\alpha = \cos\alpha\cos\alpha - \sin\alpha\sin\alpha = \cos^2\alpha - \sin^2\alpha .
$$
Substituting $\cos^2\alpha = 1 - \sin^2\alpha$ gives $\cos 2\alpha = 1 - 2\sin^2\alpha$. Substituting $\sin^2\alpha = 1 - \cos^2\alpha$ instead gives $\cos 2\alpha = 2\cos^2\alpha - 1$. The tangent formula is the tangent sum formula with $\beta = \alpha$. The conditions ensure that $\tan\alpha$ and $\tan 2\alpha$ exist, that is, $\alpha \neq \dfrac{\pi}{2} + k\pi$ and $2\alpha \neq \dfrac{\pi}{2} + k\pi$.
:::
::::

:::esempio{titolo="Trigonometric functions of twice a second-quadrant angle"}
Let $\sin\alpha = \dfrac{3}{5}$ with $\dfrac{\pi}{2} < \alpha < \pi$. Cosine is negative in the second quadrant, so $\cos\alpha = -\sqrt{1 - \dfrac{9}{25}} = -\dfrac{4}{5}$. By the double-angle formulas,
$$
\sin 2\alpha = 2 \cdot \frac{3}{5} \cdot \left( -\frac{4}{5} \right) = -\frac{24}{25} ,
\qquad
\cos 2\alpha = 1 - 2 \cdot \frac{9}{25} = \frac{7}{25} ,
\qquad
\tan 2\alpha = \frac{\sin 2\alpha}{\cos 2\alpha} = -\frac{24}{7} .
$$
The condition $\dfrac{\pi}{2} < \alpha < \pi$ gives $\pi < 2\alpha < 2\pi$. The negative sine and positive cosine indicate that $2\alpha$ lies in the fourth quadrant.
:::

:::attenzione
The sine of twice an angle differs from twice its sine. For $x = \dfrac{\pi}{2}$ we have $\sin 2x = \sin\pi = 0$, whereas $2\sin x = 2$. The graphs of the two functions differ. Indeed, $\sin 2x$ has period $\pi$ and values between $-1$ and $1$, while $2\sin x$ has period $2\pi$ and values between $-2$ and $2$.

::grafico{f="sin(2*x);2*sin(x)" xmin=-1 xmax=7 ymin=-2.5 ymax=2.5 titolo="The graphs of $\sin 2x$ and $2\sin x$. The first function has period $\pi$ and amplitude $1$, and the second has period $2\pi$ and amplitude $2$"}

:::

::::teorema{#formule-abbassamento titolo="Power-reduction formulas"}
For every real number $\alpha$, the following identities hold:
$$
\sin^2\alpha = \frac{1 - \cos 2\alpha}{2} ,
\qquad
\cos^2\alpha = \frac{1 + \cos 2\alpha}{2} .
$$
The formulas express the square of a sine or cosine as a linear expression in the cosine of twice the angle. For example,
$$
\sin^2\frac{\pi}{8} = \frac{1 - \cos\dfrac{\pi}{4}}{2} = \frac{1 - \dfrac{\sqrt{2}}{2}}{2} = \frac{2 - \sqrt{2}}{4} .
$$
The first formula also shows that the graph of $\sin^2 x$ is a cosine wave of period $\pi$ oscillating between $0$ and $1$ about the value $\dfrac{1}{2}$.

::grafico{f="sin(x)^2;1/2" xmin=-1 xmax=7 ymin=-0.5 ymax=1.5 legenda="y = \sin^2 x;y = \dfrac{1}{2}" titolo="The graph of $\sin^2 x = \dfrac{1 - \cos 2x}{2}$ has period $\pi$ and oscillates between $0$ and $1$ about the line $y = \dfrac{1}{2}$"}

:::dimostrazione
The identity $\cos 2\alpha = 1 - 2\sin^2\alpha$ gives $2\sin^2\alpha = 1 - \cos 2\alpha$. Dividing by $2$ gives the first formula. The identity $\cos 2\alpha = 2\cos^2\alpha - 1$ yields the second in the same way.
:::
::::

:::esempio{titolo="Sine of three times an angle"}
Combining the addition and double-angle formulas gives the trigonometric functions of three times an angle. Write $3\alpha = 2\alpha + \alpha$:
$$
\begin{aligned}
\sin 3\alpha &= \sin 2\alpha\cos\alpha + \cos 2\alpha\sin\alpha \\[6pt]
&= 2\sin\alpha\cos^2\alpha + \left( 1 - 2\sin^2\alpha \right)\sin\alpha \\[6pt]
&= 2\sin\alpha\left( 1 - \sin^2\alpha \right) + \sin\alpha - 2\sin^3\alpha \\[6pt]
&= 3\sin\alpha - 4\sin^3\alpha .
\end{aligned}
$$
For $\alpha = \dfrac{\pi}{6}$ the formula gives $3 \cdot \dfrac{1}{2} - 4 \cdot \dfrac{1}{8} = 1$, which is the value of $\sin\dfrac{\pi}{2}$. The same procedure gives $\cos 3\alpha = 4\cos^3\alpha - 3\cos\alpha$.
:::

## Half-angle formulas

::::teorema{#bisezione titolo="Half-angle formulas"}
For every real number $\alpha$, the following identities hold:
$$
\sin\frac{\alpha}{2} = \pm\sqrt{\frac{1 - \cos\alpha}{2}} ,
\qquad
\cos\frac{\alpha}{2} = \pm\sqrt{\frac{1 + \cos\alpha}{2}} ,
$$
where each sign is the sign of the function in the quadrant containing the angle $\dfrac{\alpha}{2}$. The formulas give the trigonometric functions of half an angle from the cosine of the full angle alone. For example, if $\alpha = \dfrac{\pi}{4}$, the half-angle $\dfrac{\pi}{8}$ lies in the first quadrant and
$$
\cos\frac{\pi}{8} = \sqrt{\frac{1 + \dfrac{\sqrt{2}}{2}}{2}} = \sqrt{\frac{2 + \sqrt{2}}{4}} = \frac{\sqrt{2 + \sqrt{2}}}{2} .
$$

:::dimostrazione
Apply the power-reduction formulas to the angle $\dfrac{\alpha}{2}$, whose double is $\alpha$:
$$
\sin^2\frac{\alpha}{2} = \frac{1 - \cos\alpha}{2} ,
\qquad
\cos^2\frac{\alpha}{2} = \frac{1 + \cos\alpha}{2} .
$$
The right-hand sides are greater than or equal to $0$ because $-1 \leq \cos\alpha \leq 1$. Taking square roots gives the absolute values $\left| \sin\dfrac{\alpha}{2} \right| = \sqrt{\dfrac{1 - \cos\alpha}{2}}$ and $\left| \cos\dfrac{\alpha}{2} \right| = \sqrt{\dfrac{1 + \cos\alpha}{2}}$. The signs of $\sin\dfrac{\alpha}{2}$ and $\cos\dfrac{\alpha}{2}$ therefore depend on the quadrant of the angle $\dfrac{\alpha}{2}$.
:::
::::

:::osservazione{#segno-bisezione titolo="Choosing the sign in the half-angle formulas"}
The sign depends on the quadrant of the half-angle, which generally differs from that of the full angle. For $\alpha = \dfrac{4\pi}{3}$ in the third quadrant, we have $\cos\alpha = -\dfrac{1}{2}$, and the half-angle is $\dfrac{2\pi}{3}$, in the second quadrant. Sine is positive and cosine is negative in the second quadrant, so
$$
\sin\frac{2\pi}{3} = +\sqrt{\frac{1 + \dfrac{1}{2}}{2}} = \frac{\sqrt{3}}{2} ,
\qquad
\cos\frac{2\pi}{3} = -\sqrt{\frac{1 - \dfrac{1}{2}}{2}} = -\frac{1}{2} ,
$$
in agreement with the known values.

::grafico{curve="cos(t),sin(t),0,6.29;0.25*cos(t),0.25*sin(t),0,4.19;0.45*cos(t),0.45*sin(t),0,2.09" vettori="0,0,-0.5,-0.866,α;0,0,-0.5,0.866,α/2" segmenti="-0.5,-0.866,-0.5,0.866" xmin=-1.5 xmax=1.5 ymin=-1.3 ymax=1.3 uguale=1 legenda=0 titolo="The angle $\alpha = \dfrac{4\pi}{3}$ lies in the third quadrant and its half-angle $\dfrac{2\pi}{3}$ lies in the second, so the two formulas take the sign $+$ for the sine and $-$ for the cosine"}

When only an interval for $\alpha$ is given, divide the interval by $2$. From $\dfrac{3\pi}{2} < \alpha < 2\pi$ it follows that $\dfrac{3\pi}{4} < \dfrac{\alpha}{2} < \pi$, so the half-angle lies in the second quadrant.
:::

:::esempio{titolo="Half of a fourth-quadrant angle"}
Let $\cos\alpha = \dfrac{1}{9}$ with $\dfrac{3\pi}{2} < \alpha < 2\pi$. The half-angle satisfies $\dfrac{3\pi}{4} < \dfrac{\alpha}{2} < \pi$, so it lies in the second quadrant, where sine is positive and cosine is negative. By the half-angle formulas,
$$
\sin\frac{\alpha}{2} = \sqrt{\frac{1 - \dfrac{1}{9}}{2}} = \sqrt{\frac{4}{9}} = \frac{2}{3} ,
\qquad
\cos\frac{\alpha}{2} = -\sqrt{\frac{1 + \dfrac{1}{9}}{2}} = -\sqrt{\frac{5}{9}} = -\frac{\sqrt{5}}{3} .
$$
:::

::::teorema{#tangente-bisezione titolo="Tangent of a half-angle"}
For $\alpha \neq \pi + 2k\pi$,
$$
\tan\frac{\alpha}{2} = \frac{\sin\alpha}{1 + \cos\alpha} ,
$$
and for $\alpha \neq k\pi$ we also have
$$
\tan\frac{\alpha}{2} = \frac{1 - \cos\alpha}{\sin\alpha} .
$$
Neither formula contains square roots, so each gives the correct sign without checking the quadrant. However, both $\sin\alpha$ and $\cos\alpha$ must be known. For example,
$$
\tan\frac{\pi}{8} = \frac{1 - \cos\dfrac{\pi}{4}}{\sin\dfrac{\pi}{4}} = \frac{1 - \dfrac{\sqrt{2}}{2}}{\dfrac{\sqrt{2}}{2}} = \frac{2 - \sqrt{2}}{\sqrt{2}} = \sqrt{2} - 1 .
$$

:::dimostrazione
The idea is to multiply the numerator and denominator of $\dfrac{\sin\frac{\alpha}{2}}{\cos\frac{\alpha}{2}}$ by a factor that gives the double-angle formulas. For $\alpha \neq \pi + 2k\pi$ we have $\cos\dfrac{\alpha}{2} \neq 0$, and multiplying by $2\cos\dfrac{\alpha}{2}$ gives
$$
\tan\frac{\alpha}{2} = \frac{2\sin\dfrac{\alpha}{2}\cos\dfrac{\alpha}{2}}{2\cos^2\dfrac{\alpha}{2}} = \frac{\sin\alpha}{1 + \cos\alpha} ,
$$
because the numerator is $\sin\alpha$ by the sine double-angle formula and the denominator is $1 + \cos\alpha$ by the second power-reduction formula. For $\alpha \neq k\pi$ we also have $\sin\dfrac{\alpha}{2} \neq 0$. Multiplying by $2\sin\dfrac{\alpha}{2}$ instead gives $2\sin^2\dfrac{\alpha}{2} = 1 - \cos\alpha$ in the numerator and $\sin\alpha$ in the denominator.
:::
::::

## Tangent half-angle substitution

::::teorema{#parametriche titolo="Tangent half-angle substitution"}
Let $x \neq \pi + 2k\pi$ and let $t = \tan\dfrac{x}{2}$. Then
$$
\sin x = \frac{2t}{1 + t^2} ,
\qquad
\cos x = \frac{1 - t^2}{1 + t^2} .
$$
If in addition $x \neq \dfrac{\pi}{2} + k\pi$, then $\tan x = \dfrac{2t}{1 - t^2}$. The formulas express sine and cosine in terms of a single unknown $t$ without square roots. Therefore any rational expression in $\sin x$ and $\cos x$ becomes a rational expression in $t$. For example, if $t = 2$, we obtain
$$
\sin x = \frac{4}{5} ,
\qquad
\cos x = \frac{1 - 4}{5} = -\frac{3}{5} .
$$

:::dimostrazione
By the sine double-angle formula and the Pythagorean identity, we can write
$$
\sin x = \frac{2\sin\dfrac{x}{2}\cos\dfrac{x}{2}}{1} = \frac{2\sin\dfrac{x}{2}\cos\dfrac{x}{2}}{\sin^2\dfrac{x}{2} + \cos^2\dfrac{x}{2}} .
$$
By assumption $x \neq \pi + 2k\pi$, so $\dfrac{x}{2} \neq \dfrac{\pi}{2} + k\pi$ and $\cos\dfrac{x}{2} \neq 0$. Dividing the numerator and denominator by $\cos^2\dfrac{x}{2}$ gives $\sin x = \dfrac{2t}{t^2 + 1}$. Similarly, $\cos x = \dfrac{\cos^2\dfrac{x}{2} - \sin^2\dfrac{x}{2}}{\cos^2\dfrac{x}{2} + \sin^2\dfrac{x}{2}}$, and the same division gives $\cos x = \dfrac{1 - t^2}{1 + t^2}$. Taking the quotient of the two formulas gives the formula for $\tan x$.
:::
::::

:::osservazione{#significato-parametriche titolo="Geometric interpretation of the parameter"}
Let $P(\cos x, \sin x)$ be a point on the unit circle distinct from $A(-1, 0)$. The line $AP$ has slope
$$
\frac{\sin x - 0}{\cos x - (-1)} = \frac{\sin x}{1 + \cos x} = \tan\frac{x}{2} = t ,
$$
by the tangent half-angle formula. Therefore $t$ is the vertical coordinate of the point $T$ where the line $AP$ intersects the $y$-axis, and the angle $O\widehat{A}P$ measures $\dfrac{x}{2}$, half the central angle. As $t$ varies over $\mathbb{R}$, the point $P$ traces the entire circle except for the point $A$, which corresponds to the angles $x = \pi + 2k\pi$ excluded from the formulas.

::grafico{curve="cos(t),sin(t),0,6.29" linee="-1,0 1,1" vettori="0,0,0.6,0.8,P" punti="-1,0,pieno,A;0,0.5,pieno,T" xmin=-1.5 xmax=1.5 ymin=-1.3 ymax=1.3 uguale=1 legenda=0 titolo="For $t = \dfrac{1}{2}$, the line through $A(-1, 0)$ with slope $t$ meets the circle at $P\left( \dfrac{3}{5}, \dfrac{4}{5} \right)$ and the $y$-axis at $T\left( 0, \dfrac{1}{2} \right)$"}

:::

:::esempio{titolo="Converting an expression to rational form"}
Express $E = 2\sin x + \cos x - 1$ in terms of $t = \tan\dfrac{x}{2}$ for $x \neq \pi + 2k\pi$:
$$
E = \frac{4t}{1 + t^2} + \frac{1 - t^2}{1 + t^2} - \frac{1 + t^2}{1 + t^2} = \frac{4t - 2t^2}{1 + t^2} = \frac{2t\,(2 - t)}{1 + t^2} .
$$
The denominator $1 + t^2$ is always positive, so $E = 0$ when $t = 0$ or $t = 2$. The excluded value $x = \pi$ must be examined separately and gives $E = 2 \cdot 0 + (-1) - 1 = -2$, which differs from $0$.
:::

:::attenzione
The values $x = \pi + 2k\pi$ must be checked because the substitution is undefined at these values. In the equation $\sin x + \cos x + 1 = 0$ the substitution gives
$$
\frac{2t + 1 - t^2 + 1 + t^2}{1 + t^2} = \frac{2t + 2}{1 + t^2} = 0 ,
$$
that is, $t = -1$ and $x = -\dfrac{\pi}{2} + 2k\pi$. The value $x = \pi$ also satisfies the equation, since $\sin\pi + \cos\pi + 1 = 0 - 1 + 1 = 0$, and using the substitution alone would lose this solution. See the chapter on trigonometric equations.
:::

## Werner's product-to-sum formulas and the sum-to-product formulas

::::teorema{#werner titolo="Werner's product-to-sum formulas"}
For any two real numbers $\alpha$ and $\beta$, the following identities hold:
$$
\begin{aligned}
\sin\alpha\cos\beta &= \frac{1}{2}\big( \sin(\alpha + \beta) + \sin(\alpha - \beta) \big) , \\[6pt]
\cos\alpha\cos\beta &= \frac{1}{2}\big( \cos(\alpha + \beta) + \cos(\alpha - \beta) \big) , \\[6pt]
\sin\alpha\sin\beta &= \frac{1}{2}\big( \cos(\alpha - \beta) - \cos(\alpha + \beta) \big) .
\end{aligned}
$$
Werner's formulas express a product of trigonometric functions as a sum. For example,
$$
\cos\frac{5\pi}{12}\cos\frac{\pi}{12} = \frac{1}{2}\left( \cos\frac{\pi}{2} + \cos\frac{\pi}{3} \right) = \frac{1}{2}\left( 0 + \frac{1}{2} \right) = \frac{1}{4} .
$$

:::dimostrazione
Add the sine sum and difference formulas term by term:
$$
\sin(\alpha + \beta) + \sin(\alpha - \beta) = 2\sin\alpha\cos\beta ,
$$
because the terms $\cos\alpha\sin\beta$ have opposite signs and cancel. Dividing by $2$ gives the first formula. Adding the cosine sum and difference formulas cancels the terms $\sin\alpha\sin\beta$ and gives $\cos(\alpha + \beta) + \cos(\alpha - \beta) = 2\cos\alpha\cos\beta$. Subtracting the cosine sum formula from the cosine difference formula instead cancels the terms $\cos\alpha\cos\beta$ and gives $\cos(\alpha - \beta) - \cos(\alpha + \beta) = 2\sin\alpha\sin\beta$.
:::
::::

::::teorema{#prostaferesi titolo="Sum-to-product formulas"}
For any two real numbers $p$ and $q$, the following identities hold:
$$
\begin{aligned}
\sin p + \sin q &= 2\sin\frac{p + q}{2}\cos\frac{p - q}{2} , \\[6pt]
\sin p - \sin q &= 2\cos\frac{p + q}{2}\sin\frac{p - q}{2} , \\[6pt]
\cos p + \cos q &= 2\cos\frac{p + q}{2}\cos\frac{p - q}{2} , \\[6pt]
\cos p - \cos q &= -2\sin\frac{p + q}{2}\sin\frac{p - q}{2} .
\end{aligned}
$$
The sum-to-product formulas express a sum or difference as a product. Each formula contains half the sum $\dfrac{p + q}{2}$ and half the difference $\dfrac{p - q}{2}$ of the angles. For example,
$$
\sin\frac{5\pi}{12} + \sin\frac{\pi}{12} = 2\sin\frac{\pi}{4}\cos\frac{\pi}{6} = 2 \cdot \frac{\sqrt{2}}{2} \cdot \frac{\sqrt{3}}{2} = \frac{\sqrt{6}}{2} .
$$
A product is zero when one of its factors is zero, so the product form is useful for solving equations, as shown in the chapter on trigonometric equations.

:::dimostrazione
Set $\alpha = \dfrac{p + q}{2}$ and $\beta = \dfrac{p - q}{2}$, so that $\alpha + \beta = p$ and $\alpha - \beta = q$. Multiplying the first of Werner's formulas by $2$ gives
$$
2\sin\frac{p + q}{2}\cos\frac{p - q}{2} = \sin p + \sin q ,
$$
which is the first sum-to-product formula. With the same substitution, the second of Werner's formulas gives the third sum-to-product formula, and the third of Werner's formulas gives $2\sin\dfrac{p + q}{2}\sin\dfrac{p - q}{2} = \cos q - \cos p$, the fourth sum-to-product formula. The second formula follows from the first with $-q$ in place of $q$, since $\sin(-q) = -\sin q$.
:::
::::

:::esempio{titolo="Writing a sum of two sinusoids as a product"}
For the expression $\sin 3x + \sin x$, half the sum of the angles is $2x$ and half their difference is $x$, so
$$
\sin 3x + \sin x = 2\sin 2x\cos x .
$$
The factor $2\cos x$ ranges between $-2$ and $2$, and the graph of the sum stays between the curves $y = 2\cos x$ and $y = -2\cos x$, touching them at the points where $\sin 2x = \pm 1$. The expression is zero where $\sin 2x = 0$ or $\cos x = 0$, that is, when $x = k\dfrac{\pi}{2}$.

::grafico{f="sin(3*x)+sin(x);2*cos(x);-2*cos(x)" xmin=-4 xmax=4 ymin=-2.5 ymax=2.5 legenda="y = \sin 3x + \sin x;y = 2\cos x;y = -2\cos x" titolo="The graph of $\sin 3x + \sin x = 2\sin 2x\cos x$ stays between the curves $y = 2\cos x$ and $y = -2\cos x$ and is zero at the multiples of $\dfrac{\pi}{2}$"}

:::

:::attenzione
The minus sign in the fourth sum-to-product formula is necessary. For $p = 0$ and $q = \pi$ we have $\cos 0 - \cos\pi = 1 - (-1) = 2$, and the formula gives $-2\sin\dfrac{\pi}{2}\sin\left( -\dfrac{\pi}{2} \right) = -2 \cdot 1 \cdot (-1) = 2$. Omitting the minus sign would give $-2$.
:::

## Auxiliary angle

:::definizione{#angolo-aggiunto titolo="Auxiliary angle"}
Let $a$ and $b$ be two real numbers that are not both zero, and let $r = \sqrt{a^2 + b^2}$. An **auxiliary angle** for the expression $a\sin x + b\cos x$ is an angle $\varphi$ such that
$$
\begin{cases}
\cos\varphi = \dfrac{a}{r} \\[8pt]
\sin\varphi = \dfrac{b}{r}
\end{cases}
$$
The two conditions are compatible because $\left( \dfrac{a}{r} \right)^2 + \left( \dfrac{b}{r} \right)^2 = \dfrac{a^2 + b^2}{r^2} = 1$. In other words, $r$ is the distance from the point $(a, b)$ to the origin, and $\varphi$ is the angle that the segment from the origin to $(a, b)$ makes with the positive $x$-axis. For $a = \sqrt{3}$ and $b = 1$ we have $r = 2$, $\cos\varphi = \dfrac{\sqrt{3}}{2}$, and $\sin\varphi = \dfrac{1}{2}$, so $\varphi = \dfrac{\pi}{6}$.

::grafico{curve="2*cos(t),2*sin(t),0,6.29;0.6*cos(t),0.6*sin(t),0,0.524" vettori="0,0,1.732,1,(a, b)" segmenti="1.732,0,1.732,1" etichette="0.8,0.18,φ" xmin=-2.5 xmax=2.5 ymin=-2.3 ymax=2.3 uguale=1 legenda=0 titolo="The point $(a, b) = \left( \sqrt{3}, 1 \right)$ is at a distance $r = 2$ from the origin. The auxiliary angle $\varphi = \dfrac{\pi}{6}$ is the angle of inclination of the segment from the origin to the point"}

If $a > 0$, the angle $\varphi = \arctan\dfrac{b}{a}$ satisfies both conditions. If $a < 0$, the angle that satisfies them is $\varphi = \arctan\dfrac{b}{a} + \pi$.
:::

::::teorema{#formula-angolo-aggiunto titolo="Auxiliary-angle formula"}
Let $a$ and $b$ be numbers that are not both zero, let $r = \sqrt{a^2 + b^2}$, and let $\varphi$ be the auxiliary angle. For every real $x$,
$$
a\sin x + b\cos x = r\sin(x + \varphi) .
$$
Therefore $a\sin x + b\cos x$ is a sinusoid of amplitude $r$ and period $2\pi$. Its values fill the interval $[-r, r]$, with a maximum of $r$ when $x + \varphi = \dfrac{\pi}{2} + 2k\pi$ and a minimum of $-r$ when $x + \varphi = \dfrac{3\pi}{2} + 2k\pi$. For example, $3\sin x + 4\cos x = 5\sin(x + \varphi)$ with $\varphi = \arctan\dfrac{4}{3}$, so the expression takes precisely the values between $-5$ and $5$.

:::dimostrazione
Expand the right-hand side using the sine sum formula and apply the two conditions defining $\varphi$:
$$
r\sin(x + \varphi) = r\sin x\cos\varphi + r\cos x\sin\varphi = r \cdot \frac{a}{r}\sin x + r \cdot \frac{b}{r}\cos x = a\sin x + b\cos x .
$$
:::
::::

:::esempio{titolo="Maximum and minimum of a combination of sine and cosine"}
For $f(x) = \sqrt{3}\sin x + \cos x$ we have $r = 2$ and $\varphi = \dfrac{\pi}{6}$, so
$$
f(x) = 2\sin\left( x + \frac{\pi}{6} \right) .
$$
The maximum $2$ occurs when $x + \dfrac{\pi}{6} = \dfrac{\pi}{2} + 2k\pi$, that is, at $x = \dfrac{\pi}{3} + 2k\pi$. The minimum $-2$ occurs when $x + \dfrac{\pi}{6} = \dfrac{3\pi}{2} + 2k\pi$, that is, at $x = \dfrac{4\pi}{3} + 2k\pi$. The graph of $f$ is the graph of $2\sin x$ shifted to the left by $\dfrac{\pi}{6}$.

::grafico{f="sqrt(3)*sin(x)+cos(x);2*sin(x)" punti="1.047,2,pieno;4.189,-2,pieno" xmin=-1 xmax=7 ymin=-2.5 ymax=2.5 legenda="y = \sqrt{3}\sin x + \cos x;y = 2\sin x" titolo="The graph of $\sqrt{3}\sin x + \cos x = 2\sin\left( x + \dfrac{\pi}{6} \right)$ is the graph of $2\sin x$ shifted $\dfrac{\pi}{6}$ to the left. The maximum $2$ occurs at $x = \dfrac{\pi}{3}$ and the minimum $-2$ at $x = \dfrac{4\pi}{3}$"}

:::

:::esempio{titolo="Auxiliary angle in another quadrant"}
For $\sin x - \cos x$ we have $a = 1$ and $b = -1$, so $r = \sqrt{2}$, $\cos\varphi = \dfrac{\sqrt{2}}{2}$, and $\sin\varphi = -\dfrac{\sqrt{2}}{2}$. The point $(1, -1)$ lies in the fourth quadrant and $\varphi = -\dfrac{\pi}{4}$, so
$$
\sin x - \cos x = \sqrt{2}\sin\left( x - \frac{\pi}{4} \right) .
$$
For $-\sin x + \sqrt{3}\cos x$ we have $a = -1$ and $b = \sqrt{3}$, so $r = 2$, $\cos\varphi = -\dfrac{1}{2}$, and $\sin\varphi = \dfrac{\sqrt{3}}{2}$. The point $\left( -1, \sqrt{3} \right)$ lies in the second quadrant and $\varphi = \dfrac{2\pi}{3}$. Therefore $-\sin x + \sqrt{3}\cos x = 2\sin\left( x + \dfrac{2\pi}{3} \right)$.
:::

:::osservazione{#angolo-aggiunto-fisica titolo="Superposition of two simple harmonic motions"}
In physics, the auxiliary-angle formula describes the sum of two oscillations with the same angular frequency $\omega$. If the position of a point is given by $s(t) = 3\sin(\omega t) + 4\cos(\omega t)$, then $s(t) = 5\sin(\omega t + \varphi)$ with $\varphi = \arctan\dfrac{4}{3}$. The motion is therefore still simple harmonic, with amplitude $5$, the same angular frequency, and initial phase $\varphi$. For the graph of $y = A\sin(\omega x + \varphi)$, see the chapter on angles and trigonometric functions.
:::

## Identities and angles other than the standard special angles

:::osservazione{#verifica-identita titolo="Verifying an identity"}
To verify an identity, first determine the values of the variable for which both sides are defined. Then transform one side, usually the more complicated one, into the other, or transform both into the same expression. For example, in the equality
$$
\frac{\sin 2x}{1 + \cos 2x} = \tan x
$$
the left-hand side is defined when $\cos 2x \neq -1$, that is, when $x \neq \dfrac{\pi}{2} + k\pi$, and the right-hand side is defined for the same values. By the double-angle formulas,
$$
\frac{\sin 2x}{1 + \cos 2x} = \frac{2\sin x\cos x}{1 + 2\cos^2 x - 1} = \frac{2\sin x\cos x}{2\cos^2 x} = \frac{\sin x}{\cos x} = \tan x ,
$$
where canceling $\cos x$ is valid because $\cos x \neq 0$. The identity therefore holds for every $x \neq \dfrac{\pi}{2} + k\pi$.
:::

:::esempio{titolo="Two identities using the double-angle formulas"}
For every real $x$, we have $\cos^4 x - \sin^4 x = \cos 2x$. Indeed, the left-hand side is a difference of squares, and
$$
\cos^4 x - \sin^4 x = \left( \cos^2 x - \sin^2 x \right)\left( \cos^2 x + \sin^2 x \right) = \cos 2x \cdot 1 = \cos 2x .
$$
For every real $x$, we also have $\sin 4x = 4\sin x\cos x\cos 2x$. Apply the sine double-angle formula twice, first to the angle $2x$ and then to the angle $x$:
$$
\sin 4x = 2\sin 2x\cos 2x = 2 \cdot 2\sin x\cos x \cdot \cos 2x = 4\sin x\cos x\cos 2x .
$$
:::

:::teorema{#valori-non-notevoli titolo="Trigonometric functions of 15°, 75°, 22.5°, and 67.5°"}
The table gives the following values.

| angle | $\sin$ | $\cos$ | $\tan$ |
| --- | --- | --- | --- |
| $15^\circ = \dfrac{\pi}{12}$ | $\dfrac{\sqrt{6} - \sqrt{2}}{4}$ | $\dfrac{\sqrt{6} + \sqrt{2}}{4}$ | $2 - \sqrt{3}$ |
| $75^\circ = \dfrac{5\pi}{12}$ | $\dfrac{\sqrt{6} + \sqrt{2}}{4}$ | $\dfrac{\sqrt{6} - \sqrt{2}}{4}$ | $2 + \sqrt{3}$ |
| $22.5^\circ = \dfrac{\pi}{8}$ | $\dfrac{\sqrt{2 - \sqrt{2}}}{2}$ | $\dfrac{\sqrt{2 + \sqrt{2}}}{2}$ | $\sqrt{2} - 1$ |
| $67.5^\circ = \dfrac{3\pi}{8}$ | $\dfrac{\sqrt{2 + \sqrt{2}}}{2}$ | $\dfrac{\sqrt{2 - \sqrt{2}}}{2}$ | $\sqrt{2} + 1$ |

The values for $15^\circ$ follow from the difference formulas with $15^\circ = 45^\circ - 30^\circ$, and those for $22.5^\circ$ from the half-angle formulas with $\alpha = 45^\circ$. The angles $75^\circ$ and $67.5^\circ$ are complementary to $15^\circ$ and $22.5^\circ$, respectively, so sine and cosine switch roles and the tangent is replaced by its reciprocal. For example, $\dfrac{1}{2 - \sqrt{3}} = \dfrac{2 + \sqrt{3}}{4 - 3} = 2 + \sqrt{3}$. Related-angle identities then give values for other angles, such as $\cos 105^\circ = \cos(180^\circ - 75^\circ) = -\dfrac{\sqrt{6} - \sqrt{2}}{4}$.
:::

:::esempio{titolo="Geometric construction of the tangent of 15°"}
Consider the triangle $ABC$, right-angled at $C$, with $B\widehat{A}C = 60^\circ$ and $A\widehat{B}C = 30^\circ$, and with $\overline{AC} = 1$. Then $\overline{AB} = 2$ and $\overline{BC} = \sqrt{3}$. Extend the leg $CB$ beyond $B$ to the point $D$ with $\overline{BD} = \overline{AB} = 2$. Triangle $ABD$ is isosceles with base $AD$, and its exterior angle $A\widehat{B}C = 30^\circ$ is the sum of the two equal base angles. Therefore $A\widehat{D}C = 15^\circ$, and in the right triangle $ACD$,
$$
\tan 15^\circ = \frac{\overline{AC}}{\overline{CD}} = \frac{1}{2 + \sqrt{3}} = \frac{2 - \sqrt{3}}{4 - 3} = 2 - \sqrt{3} ,
$$
in agreement with the value obtained using the tangent difference formula.

::grafico{assi=0 uguale=1 linee="-3.732,0 0,0 0,1 -3.732,0;-1.732,0 0,1" punti="0,0,pieno;0,1,pieno;-1.732,0,pieno;-3.732,0,pieno" etichette="0.15,-0.2,C;0.15,1.15,A;-1.732,-0.25,B;-3.85,-0.25,D;-0.9,-0.25,√3;-2.7,-0.25,2;0.2,0.5,1;-3.1,0.12,15°;-1.35,0.12,30°" xmin=-4.2 xmax=0.6 ymin=-0.5 ymax=1.4 titolo="The triangle $ABD$ is isosceles with $\overline{BA} = \overline{BD} = 2$. The angle at $D$ measures $15^\circ$, and $\tan 15^\circ = \dfrac{1}{2 + \sqrt{3}} = 2 - \sqrt{3}$"}

:::

:::esempio{titolo="Expressions involving angles other than the standard special angles"}
The formulas reduce many expressions involving other angles to a special angle without using the table. By the sine and cosine double-angle formulas,
$$
\sin 15^\circ\cos 15^\circ = \frac{1}{2}\sin 30^\circ = \frac{1}{4} ,
\qquad
\cos^2 15^\circ - \sin^2 15^\circ = \cos 30^\circ = \frac{\sqrt{3}}{2} .
$$
By the second sum-to-product formula, with half-sum $45^\circ$ and half-difference $30^\circ$,
$$
\sin 75^\circ - \sin 15^\circ = 2\cos 45^\circ\sin 30^\circ = 2 \cdot \frac{\sqrt{2}}{2} \cdot \frac{1}{2} = \frac{\sqrt{2}}{2} .
$$
Finally, by the power-reduction formula, $\cos^2 22.5^\circ = \dfrac{1 + \cos 45^\circ}{2} = \dfrac{2 + \sqrt{2}}{4}$.
:::
