---
titolo: "Trigonometry and right triangles"
sommario: "Using right triangles, angles, trigonometric functions, and projections to calculate distances, directions, and components."
---

## Sides of a right triangle

:::definizione{titolo="Legs and hypotenuse"}
A **right triangle** has one right angle. The two sides that form this angle are its legs. The side opposite it is the hypotenuse. Once we choose one of the acute angles, the leg across from it is called the *opposite* leg and the other is called the *adjacent* leg. Changing the reference angle leaves the hypotenuse unchanged but switches the roles of the legs.

This distinction arises in problems involving two perpendicular distances. For example, suppose we reach a point by moving four centimeters horizontally and then three vertically. The two segments are the legs. The direct distance from the starting point to the endpoint is the hypotenuse.
:::

::::teorema{#pitagora titolo="Pythagorean theorem"}
In a right triangle with legs of lengths $a$ and $b$ and hypotenuse of length $c$,
$$
c^2=a^2+b^2.
$$
Since lengths are positive, the identity gives $c=\sqrt{a^2+b^2}$. If the hypotenuse and the leg $a$ are known, the other leg has length $b=\sqrt{c^2-a^2}$.

:::dimostrazione
Place a copy of the triangle in each corner of a square of side $a+b$. Along each side of the outer square, the two adjacent triangles occupy a segment of length $a$ and one of length $b$. Their four hypotenuses form the sides of the inner figure. Each interior angle is a right angle because it forms a straight angle together with the two acute angles of the triangle. The inner figure is therefore a square of side $c$.

The area of the outer square is $(a+b)^2$. Subtracting four times the area of one triangle gives
$$
c^2=(a+b)^2-4\cdot\frac{ab}{2}=a^2+b^2.
$$
:::
::::

:::esempio{titolo="Direct distance and a path with a right-angle turn"}
A point moves $4\,\mathrm{cm}$ to the right from $A$ to $B$, then $3\,\mathrm{cm}$ upward from $B$ to $C$. The angle at $B$ is a right angle. The distance from $A$ to $C$ is
$$
c=\sqrt{4^2+3^2}\,\mathrm{cm}
=\sqrt{25}\,\mathrm{cm}
=5\,\mathrm{cm}.
$$
The length of the path along the legs is $7\,\mathrm{cm}$. In a displacement problem, the hypotenuse gives the distance between the initial and final positions, while the length of the path depends on the segments actually traveled.

::grafico{assi=0 uguale=1 xmin=-0.55 xmax=4.95 ymin=-0.52 ymax=3.55 linee="0,0 4,0 4,3 0,0;3.72,0 3.72,0.28 4,0.28" etichette="-0.15,-0.19,A;4.08,-0.19,B;4.08,3.05,C;1.79,-0.23,4 cm;4.18,1.38,3 cm;1.54,1.67,5 cm" titolo="The legs represent the horizontal and vertical displacements. The hypotenuse represents the direct distance."}
:::

:::osservazione{titolo="Checking whether a triangle has a right angle"}
The Pythagorean relation can also be used to identify a right triangle. Suppose a triangle has side lengths $a,b,c$, with $c$ the longest, and that $c^2=a^2+b^2$. Construct a right triangle with legs of lengths $a$ and $b$. By the Pythagorean theorem, its hypotenuse has length $c$. All three pairs of corresponding sides are therefore equal, so the two triangles are congruent. Thus the angle opposite $c$ in the original triangle is also a right angle.

For example, side lengths of $8\,\mathrm{cm}$, $15\,\mathrm{cm}$, and $17\,\mathrm{cm}$ give $8^2+15^2=64+225=289=17^2$. We can therefore take the $17\,\mathrm{cm}$ side as the hypotenuse and apply the trigonometric ratios to the acute angles.
:::

## Degrees, radians, and arc length

:::definizione{#radianti titolo="Radian measure"}
A full turn measures $360^\circ$. In a circle of radius $r>0$, a central angle subtends an arc. If the arc has length $s$, the positive radian measure of the angle is the ratio $\theta=\dfrac{s}{r}$. A **radian** is therefore the angle that subtends an arc equal in length to the radius.

The circumference is $2\pi r$, so a full turn measures $2\pi\,\mathrm{rad}$. A straight angle therefore measures $180^\circ=\pi\,\mathrm{rad}$. The two measures describe the same angle. The ratio of the radian measure to the degree measure is therefore constant.
$$
\begin{aligned}
\theta_{\mathrm{rad}}&=\theta_{\mathrm{gradi}}\frac{\pi}{180},\\[6pt]
\theta_{\mathrm{gradi}}&=\theta_{\mathrm{rad}}\frac{180}{\pi}.
\end{aligned}
$$
:::

:::esempio{titolo="An arc as long as the radius"}
On a circle of radius $2\,\mathrm{cm}$, an arc has length $2\,\mathrm{cm}$ when the central angle is $1\,\mathrm{rad}$. On a circle with twice the radius, the same angle subtends an arc twice as long. This is because the ratio of arc length to radius is unchanged.

::grafico{assi=0 uguale=1 xmin=-2.35 xmax=2.8 ymin=-2.26 ymax=2.3 curve="2*cos(t),2*sin(t),0,1;2*cos(t),2*sin(t),1,6.283185307179586;0.65*cos(t),0.65*sin(t),0,1" linee="2,0 0,0 1.080604612,1.682941970" etichette="0.73,0.19,1 rad;1.14,-0.22,r = 2 cm;1.72,1.27,2 cm arc" legenda=0 titolo="The ratio of arc length to radius is one, so the angle measures one radian."}
:::

:::esempio{titolo="From degrees to arc length and from arc length to degrees"}
A wheel of radius $24\,\mathrm{cm}$ rotates through $150^\circ$. To calculate the length of the arc traced by a point on the rim, first express the angle in radians.
$$
\begin{aligned}
\theta&=150\cdot\frac{\pi}{180}\,\mathrm{rad}
=\frac{5\pi}{6}\,\mathrm{rad},\\[6pt]
s&=24\,\mathrm{cm}\cdot\frac{5\pi}{6}
=20\pi\,\mathrm{cm}.
\end{aligned}
$$
As a check, observe that $150^\circ$ is five-twelfths of a turn. Five-twelfths of the circumference, which is $48\pi\,\mathrm{cm}$, indeed gives $20\pi\,\mathrm{cm}$. For the inverse calculation, divide the arc length by the radius to obtain the angle in radians. For example, an arc of length $7\pi\,\mathrm{m}$ on a circle of radius $9\,\mathrm{m}$ corresponds to $\dfrac{7\pi}{9}\,\mathrm{rad}$, or $140^\circ$.
:::

:::attenzione{titolo="Units in the arc length formula"}
The formula $s=r\theta$ uses the numerical value of the angle in radians. If an angle measures $90^\circ$ and the radius is $4\,\mathrm{m}$, the arc is one-quarter of the circumference. Conversion gives $\theta=\dfrac{\pi}{2}\,\mathrm{rad}$, so $s=2\pi\,\mathrm{m}$. Using the number $90$ in the formula would give $360\,\mathrm{m}$, more than the entire circumference.

For motion along the rim, the distance traveled is calculated from the magnitude of the angle swept out. For example, a clockwise rotation of $90^\circ$ has a signed angle of $-\dfrac{\pi}{2}\,\mathrm{rad}$, but the distance traveled along the rim is positive, $2\pi\,\mathrm{m}$.
:::

## Sine, cosine, and tangent in a triangle

:::definizione{#rapporti titolo="Trigonometric ratios of an acute angle"}
Let $\theta$ be an acute angle in a right triangle. Let $a$ denote the leg opposite $\theta$, $b$ the adjacent leg, and $c$ the hypotenuse. The three ratios are
$$
\begin{aligned}
\sin\theta&=\frac{a}{c},\\[6pt]
\cos\theta&=\frac{b}{c},\\[6pt]
\tan\theta&=\frac{a}{b}.
\end{aligned}
$$
The sides are measured in the same unit, so the ratios are dimensionless. Right triangles with the same acute angle are similar, so their corresponding side lengths are proportional. Thus the three ratios depend only on the angle, even if the triangle is enlarged. Dividing sine by cosine gives $\dfrac{\frac{a}{c}}{\frac{b}{c}}=\dfrac{a}{b}$, the tangent.
:::

:::esempio{titolo="Similar triangles and the ratio of their legs"}
In a right triangle, the leg opposite $\theta$ has length $1\,\mathrm{m}$ and the adjacent leg has length $2\,\mathrm{m}$. In a second triangle the corresponding legs measure $2\,\mathrm{m}$ and $4\,\mathrm{m}$. Every side of the second triangle is twice as long. The tangents are therefore both $\dfrac{1}{2}$. The same scale factor cancels in the ratios for sine and cosine.

::grafico{assi=0 uguale=1 xmin=-0.4 xmax=7.85 ymin=-0.6 ymax=2.55 curve="0.59*cos(t),0.59*sin(t),0,0.463647609;3+0.59*cos(t),0.59*sin(t),0,0.463647609" legenda=0 linee="0,0 2,0 2,1 0,0;1.8,0 1.8,0.2 2,0.2;3,0 7,0 7,2 3,0;6.77,0 6.77,0.23 7,0.23" etichette="0.72,-0.29,2 m;2.12,0.44,1 m;4.64,-0.29,4 m;7.14,0.92,2 m;0.67,0.12,θ;3.69,0.12,θ" titolo="The second triangle has twice the side lengths of the first. The ratio of the opposite leg to the adjacent leg stays the same."}
:::

:::esempio{titolo="Finding a vertical rise from a horizontal distance"}
A point is observed at an angle of elevation of $30^\circ$. The horizontal distance from the observer to the vertical line through the point is $9\,\mathrm{m}$. The rise $h$ is the opposite leg, while the nine meters measure the adjacent leg. Thus the ratio relating the two is the tangent.
$$
\begin{aligned}
\frac{h}{9\,\mathrm{m}}&=\tan 30^\circ=\frac{1}{\sqrt{3}},\\[6pt]
h&=\frac{9}{\sqrt{3}}\,\mathrm{m}=3\sqrt{3}\,\mathrm{m}.
\end{aligned}
$$
The line-of-sight distance is the hypotenuse. To find it from the same information, use cosine, which relates the horizontal leg to the hypotenuse. The choice of function therefore depends on which two sides enter the calculation.
:::

:::osservazione{titolo="Slope, angle, and units"}
The slope of a straight uphill stretch is its rise divided by its horizontal distance. If these distances are $3\,\mathrm{m}$ and $12\,\mathrm{m}$, the slope is $\dfrac{1}{4}$, or $25\%$. For an angle $\theta$ measured from the horizontal, this ratio equals $\tan\theta$. Consequently, the angle is $\arctan\left(\dfrac{1}{4}\right)$, or about $14.0^\circ$.

The number $25$ gives the rise in meters per hundred horizontal meters. The angle in degrees describes the inclination of the stretch to the horizontal. A grade of $100\%$ corresponds to an angle of $45^\circ$ because the rise and the horizontal distance are then equal.
:::

## Exact trigonometric values for special angles

:::osservazione{titolo="The 45-degree triangle"}
In a right triangle with equal legs, the acute angles are equal. They sum to $90^\circ$, so both measure $45^\circ$. If each leg has length $1$, the hypotenuse has length $\sqrt{2}$ by the Pythagorean theorem. Consequently,
$$
\sin45^\circ=\cos45^\circ=\frac{1}{\sqrt{2}}
=\frac{\sqrt{2}}{2},
\qquad \tan45^\circ=1.
$$
Choosing legs of unit length simplifies the calculation. In a triangle of a different size, the ratios have the same values because the angles are the same.
:::

:::osservazione{titolo="The 30-60-90 triangle"}
An equilateral triangle of side $4$ has three angles of $60^\circ$. Its altitude divides the base into two segments of length $2$ and the vertex angle into two angles of $30^\circ$. This gives two right triangles with hypotenuse $4$. The altitude has length $\sqrt{4^2-2^2}=2\sqrt{3}$.

For the $30^\circ$ angle, the opposite leg is half the base and the adjacent leg is the altitude. Thus the sine is $\dfrac{2}{4}=\dfrac{1}{2}$ and the cosine is $\dfrac{2\sqrt{3}}{4}=\dfrac{\sqrt{3}}{2}$. For the $60^\circ$ angle the legs switch roles, so the sine and cosine values are interchanged.

::grafico{assi=0 uguale=1 xmin=-0.55 xmax=4.6 ymin=-0.45 ymax=3.85 linee="0,0 4,0 2,3.464101615 0,0;2,0 2,3.464101615;1.78,0 1.78,0.22 2,0.22" etichette="0.48,0.28,60°;1.65,2.22,30°;0.75,-0.23,2;2.82,-0.23,2;2.23,1.50,2√3;0.55,1.65,4" titolo="The altitude bisects the vertex angle and divides the base into two equal halves."}
:::

:::esempio{titolo="Calculating a length in radical form"}
A ramp of length $8\,\mathrm{m}$ makes an angle of $30^\circ$ with the horizontal. Its horizontal projection is $8\cos30^\circ\,\mathrm{m}=4\sqrt{3}\,\mathrm{m}$ and its rise is $8\sin30^\circ\,\mathrm{m}=4\,\mathrm{m}$. The exact values can be checked using the Pythagorean theorem. The squares of the two numerical values are $48$ and $16$. Their sum is $64$, confirming that the hypotenuse is eight meters long.
:::

:::osservazione{titolo="Sine and cosine of complementary angles"}
In a right triangle the two acute angles are complementary. The leg opposite one angle is therefore adjacent to the other. Its ratio to the hypotenuse is the same, so $\sin\theta=\cos(90^\circ-\theta)$ for an acute angle $\theta$. Similarly, $\cos\theta=\sin(90^\circ-\theta)$.

The identity helps us calculate a projection when the diagram gives the angle from the other axis. For example, a segment of length $8\,\mathrm{m}$ at $60^\circ$ to the horizontal has vertical projection $8\sin60^\circ\,\mathrm{m}=4\sqrt{3}\,\mathrm{m}$. Measuring the angle from the vertical instead gives the same value by calculating $8\cos30^\circ\,\mathrm{m}$.
:::

:::osservazione{titolo="Exact and approximate values"}
When an exercise calls for an approximation, the decimal value can be calculated after finding the radical expression. In the ramp example, $4\sqrt{3}\,\mathrm{m}$ is approximately $6.93\,\mathrm{m}$. The exact result retains the information needed to check the Pythagorean relation. Squaring the rounded value makes the check approximate as well.
:::

## The unit circle and the quadrants

:::definizione{#quadranti titolo="Coordinates on the unit circle"}
Consider the circle centered at the origin $O$ with radius $1$. A directed angle $\theta$ is measured from the positive $x$-axis, counterclockwise for positive angles. Its terminal side meets the circle at a point $P$. Define $\cos\theta$ and $\sin\theta$ as the horizontal and vertical coordinates of $P$, respectively. For an acute angle, the triangle formed with the $x$-axis has a hypotenuse of unit length, so this definition agrees with the definition based on side ratios.

The coordinates determine the signs in each quadrant. Both coordinates are positive in the first quadrant. In the second, the horizontal coordinate is negative and the vertical coordinate is positive. Both are negative in the third quadrant. In the fourth, the horizontal coordinate is positive and the vertical coordinate is negative. When the point lies on an axis, one coordinate is zero. A full turn returns the point to the same position, so sine and cosine repeat when integer multiples of $360^\circ$ are added or subtracted.
:::

:::esempio{titolo="Reference angle in the second quadrant"}
The angle $150^\circ$ lies in the second quadrant. The angle between its radius and the negative $x$-axis is $180^\circ-150^\circ=30^\circ$. The magnitudes of its coordinates are therefore those of the point corresponding to $30^\circ$ in the first quadrant. In the second quadrant the horizontal coordinate changes sign and the vertical coordinate remains positive.
$$
\cos150^\circ=-\frac{\sqrt{3}}{2},
\qquad
\sin150^\circ=\frac{1}{2}.
$$

::grafico{uguale=1 xmin=-1.45 xmax=1.45 ymin=-1.35 ymax=1.35 curve="cos(t),sin(t),0,6.283185307179586;0.35*cos(t),0.35*sin(t),0,2.617993877991494" legenda=0 punti="-0.866025403784,0.5,pieno,P" linee="0,0 -0.866025403784,0.5" segmenti="-0.866025403784,0,-0.866025403784,0.5;-0.866025403784,0.5,0,0.5" etichette="0.12,0.39,150°" titolo="The point P at 150° has a negative horizontal coordinate and a positive vertical coordinate."}
:::

::::teorema{#angoli-supplementari titolo="Sine and cosine of supplementary angles"}
For every angle $\theta$,
$$
\begin{aligned}
\sin(180^\circ-\theta)&=\sin\theta,\\[6pt]
\cos(180^\circ-\theta)&=-\cos\theta.
\end{aligned}
$$
The two identities express the functions of a second-quadrant angle in terms of an acute angle. For example, setting $\theta=60^\circ$ gives $\sin120^\circ=\sin60^\circ=\dfrac{\sqrt{3}}{2}$ and $\cos120^\circ=-\cos60^\circ=-\dfrac{1}{2}$.

:::dimostrazione
The points on the unit circle corresponding to $\theta$ and $180^\circ-\theta$ are reflections of each other across the $y$-axis. Reflection across the $y$-axis takes the positive $x$-axis to the negative $x$-axis and reverses the direction of rotation. The radius at angle $\theta$, measured counterclockwise from the positive $x$-axis, is therefore reflected to the radius at angle $\theta$ measured clockwise from the negative $x$-axis. The latter radius corresponds to the angle $180^\circ-\theta$.

Thus the point $(\cos\theta,\sin\theta)$ maps to $(\cos(180^\circ-\theta),\sin(180^\circ-\theta))$. Reflection across the $y$-axis reverses the sign of the horizontal coordinate and leaves the vertical coordinate unchanged, so $\cos(180^\circ-\theta)=-\cos\theta$ and $\sin(180^\circ-\theta)=\sin\theta$.
:::
::::

:::osservazione{titolo="Negative angles and coterminal angles"}
The angle $-60^\circ$ is measured clockwise from the positive $x$-axis. Its terminal side coincides with that of $300^\circ$ because the two measures differ by one full turn. Thus $\cos(-60^\circ)=\dfrac{1}{2}$ and $\sin(-60^\circ)=-\dfrac{\sqrt{3}}{2}$. The same direction in the plane can be represented by different directed angle measures. If the problem asks for a value in $[0^\circ,360^\circ)$, the answer in this example is $300^\circ$.
:::

## Trigonometric identities and the tangent

::::teorema{#identita titolo="The Pythagorean identity for sine and cosine"}
For every real angle $\theta$,
$$
\sin^2\theta+\cos^2\theta=1.
$$
The identity gives the magnitude of one trigonometric function when the value of the other is known. The quadrant then determines the sign.

:::dimostrazione
The point representing the angle on the unit circle has coordinates $(\cos\theta,\sin\theta)$. Since its distance from the origin is $1$, the sum of the squares of the coordinates equals the square of that distance. This gives the identity.
:::
::::

:::esempio{titolo="Finding sine from cosine and the quadrant"}
Suppose $\cos\theta=-\dfrac{5}{13}$ in the third quadrant. By the Pythagorean identity, the square of the sine is
$$
\begin{aligned}
\sin^2\theta
&=1-\frac{25}{169}\\[6pt]
&=\frac{144}{169}.
\end{aligned}
$$
The sine is negative in the third quadrant, so $\sin\theta=-\dfrac{12}{13}$. The tangent is then $\dfrac{-12}{-5}=\dfrac{12}{5}$. Both coordinates have the same sign, so their ratio is positive.
:::

:::attenzione{titolo="When is the tangent defined?"}
The tangent of $\theta$ is the ratio $\dfrac{\sin\theta}{\cos\theta}$ for $\cos\theta\ne0$. At $90^\circ$ and $270^\circ$ the point lies on the vertical axis, so the denominator of the ratio is zero and the tangent is undefined. At $0^\circ$ the point has coordinates $(1,0)$, so the tangent is zero. If the horizontal projection is zero, whether the segment points up or down determines its angle directly, before any ratio is needed.
:::

::::teorema{#tangente-coseno titolo="Relation between tangent and cosine"}
For every angle $\theta$ with $\cos\theta\ne0$,
$$
1+\tan^2\theta=\frac{1}{\cos^2\theta}.
$$
This relation gives the cosine when the tangent is known, without calculating the angle. For example, if $\tan\theta=\dfrac{3}{4}$ and $\theta$ is acute, then $\dfrac{1}{\cos^2\theta}=1+\dfrac{9}{16}=\dfrac{25}{16}$, so $\cos^2\theta=\dfrac{16}{25}$. The cosine of an acute angle is positive, so $\cos\theta=\dfrac{4}{5}$ and $\sin\theta=\tan\theta\cos\theta=\dfrac{3}{5}$.

:::dimostrazione
Start from the identity $\sin^2\theta+\cos^2\theta=1$. Since $\cos\theta\ne0$, we also have $\cos^2\theta\ne0$, so both sides can be divided by $\cos^2\theta$:
$$
\frac{\sin^2\theta}{\cos^2\theta}+\frac{\cos^2\theta}{\cos^2\theta}=\frac{1}{\cos^2\theta}.
$$
The first term is the square of $\dfrac{\sin\theta}{\cos\theta}=\tan\theta$ and the second is $1$. Thus $\tan^2\theta+1=\dfrac{1}{\cos^2\theta}$.
:::
::::

:::osservazione{titolo="Period of tangent and checking signs"}
Adding a straight angle takes the point on the unit circle to the other end of a diameter. Both coordinates change sign. Thus whenever the cosine is nonzero, the ratio of the two coordinates remains unchanged. The tangent therefore repeats every $180^\circ$.

For example, $\tan 45^\circ=1$ and $\tan225^\circ=1$. For a second-quadrant angle, however, the numerator is positive and the denominator is negative. Consequently, $\tan135^\circ=-1$. Checking the signs can reveal an error even before we calculate the magnitudes of the coordinates.
:::

## Orthogonal projections and components

:::definizione{#proiezioni titolo="Components along the coordinate axes"}
A directed segment of magnitude $A>0$ makes an angle $\theta$ with the positive $x$-axis. Its horizontal component is $A_x=A\cos\theta$ and its vertical component is $A_y=A\sin\theta$. Indeed, the components of a segment of magnitude $1$ are the coordinates of the point on the unit circle. Multiplying its length by $A$ also multiplies each component by $A$.

Components are signed quantities. For example, if a segment points to the left and upward, its horizontal component is negative and its vertical component is positive. The lengths of the two projections are the absolute values of the components.
:::

:::esempio{titolo="Projection when the angle is measured from the vertical"}
A segment of length $6\,\mathrm{m}$ lies in the first quadrant and makes an angle of $30^\circ$ with the vertical. The angle measured from the positive $x$-axis is $60^\circ$ because the axes are perpendicular. The horizontal projection has length $6\cos60^\circ\,\mathrm{m}=3\,\mathrm{m}$ and the vertical projection has length $6\sin60^\circ\,\mathrm{m}=3\sqrt{3}\,\mathrm{m}$.

Using the angle from the vertical directly gives the same result. In that case the horizontal projection is the opposite leg and the vertical projection is the adjacent leg. The choice between sine and cosine therefore depends on the axis from which the angle is measured.

::grafico{uguale=1 xmin=-0.65 xmax=4.45 ymin=-0.5 ymax=5.9 nomi="x,y" curve="1.17*cos(t),1.17*sin(t),1.047197551196598,1.570796326794897" legenda=0 vettori="0,0,3,5.196152423" segmenti="3,0,3,5.196152423;0,5.196152423,3,5.196152423" etichette="0.2,1.55,30°;2.12,3.08,6 m;0.72,-0.37,Horizontal projection" titolo="The segment makes an angle of 30° with the vertical and 60° with the horizontal."}
:::

:::esempio{titolo="Two negative components"}
A displacement of length $12\,\mathrm{m}$ makes an angle of $210^\circ$ measured counterclockwise from the positive $x$-axis. The angle lies in the third quadrant and its reference angle is $30^\circ$. Thus the cosine is $-\dfrac{\sqrt{3}}{2}$ and the sine is $-\dfrac{1}{2}$. The horizontal component is $-6\sqrt{3}\,\mathrm{m}$ and the vertical component is $-6\,\mathrm{m}$.

The displacement therefore points to the left and downward from the starting point. Its projections have lengths $6\sqrt{3}\,\mathrm{m}$ and $6\,\mathrm{m}$. Their squares are $108\,\mathrm{m^2}$ and $36\,\mathrm{m^2}$. Their sum is the square of $12\,\mathrm{m}$, confirming the magnitude of the displacement. The Pythagorean calculation checks the lengths. The quadrant separately determines the signs of the components.
:::

## Finding the angle from sides or components

:::definizione{#inverse titolo="Inverse trigonometric functions"}
Trigonometric functions take the same value at more than one angle. To find an angle from a ratio, first determine the interval in which to look for it. In a right triangle the angle sought is acute. In this interval each of the three ratios, sine, cosine, and tangent, determines a unique angle.

If the ratio of the opposite leg to the hypotenuse is $r$, the acute angle is $\arcsin r$. If the ratio of the adjacent leg to the hypotenuse is known, use $\arccos r$. If the ratio of the two legs is given, use $\arctan r$. For example, two equal legs have a ratio of one, so the acute angle is $\arctan 1=45^\circ$. The expression $\arctan r$ denotes an angle, while $\dfrac{1}{\tan\theta}$ denotes the reciprocal of a ratio.
:::

:::esempio{titolo="Directions with the same tangent"}
Two directed segments have components $(1,1)$ and $(-1,-1)$. For each, the ratio of the vertical to the horizontal component is $1$. In the first case both components are positive, so the segment lies in the first quadrant and its direction is $45^\circ$. In the second case both are negative, so the segment lies in the third quadrant. Its direction is therefore $180^\circ+45^\circ=225^\circ$.

The tangents of the two angles are equal because both the numerator and the denominator change sign. Given two components, we can first find the acute angle using the ratio of their magnitudes. Then we determine the directed angle from the quadrant. If one component is zero, it suffices to identify the positive or negative coordinate axis along which the segment points.

::grafico{assi=0 uguale=1 xmin=-1.55 xmax=1.6 ymin=-1.43 ymax=1.55 riferimento="0,0,0,1.42,x,y" vettori="0,0,1,1;0,0,-1,-1" linee="-1.42,0 0,0;0,-1.38 0,0" segmenti="1,0,1,1;-1,0,-1,-1" etichette="0.70,1.22,45°;-1.49,-1.20,225°;-0.17,0.10,O;0.97,-0.14,1;-1.08,0.08,−1" titolo="Oppositely directed segments have the same ratio of components and angles that differ by 180°."}
:::

:::esempio{titolo="Signed angle measure in the fourth quadrant"}
A directed segment has horizontal component $3\,\mathrm{m}$ and vertical component $-3\,\mathrm{m}$. The ratio of their magnitudes is $1$, so the acute reference angle is $45^\circ$. The signs place the segment in the fourth quadrant. Its directed angle can be written as $-45^\circ$. To express it in the interval $[0^\circ,360^\circ)$, add a full turn to obtain $315^\circ$.

For a segment along the vertical axis, the ratio of vertical to horizontal component would have a zero denominator. If the vertical component is positive, the direction is $90^\circ$. If it is negative, the direction is $270^\circ$. A segment of zero length has two zero components and does not determine an angle.
:::

## Components of weight on an inclined plane

:::osservazione{#piano-inclinato titolo="Axes parallel and perpendicular to the plane"}
Consider a plane that rises from left to right and makes an acute angle $\alpha$ with the horizontal. Choose the positive $x'$-axis pointing uphill and the positive $y'$-axis perpendicular to the plane and pointing away from it. Weight acts vertically downward and has magnitude $P=mg$, where $m$ is the mass and $g$ the magnitude of the acceleration due to gravity.

The negative $y'$-axis makes the same angle $\alpha$ with the downward vertical as the plane makes with the horizontal. Indeed, rotating each direction by ninety degrees gives the other pair of directions and preserves the angle. In the right triangle formed by the projections, the leg opposite $\alpha$ is parallel to the plane. Its length is $P\sin\alpha$, while the perpendicular projection has length $P\cos\alpha$.

Both components are negative in the chosen coordinate system because the weight points downhill and into the plane.
$$
P_{x'}=-mg\sin\alpha,\qquad
P_{y'}=-mg\cos\alpha.
$$

::grafico{assi=0 uguale=1 xmin=-0.5 xmax=6.4 ymin=-0.3 ymax=3.95 linee="0,0 5.75,0 5.75,3.319764048 0,0" riferimento="3.48,2.009178936,30,1.2,x′,y′" vettori="3.48,2.009178936,3.48,0.309178936;3.48,2.009178936,2.743878407,1.584178936;3.48,2.009178936,4.216121593,0.734178936" segmenti="2.743878407,1.584178936,3.48,0.309178936;4.216121593,0.734178936,3.48,0.309178936" etichette="0.83,0.19,α;3.09,0.25,P;1.87,0.70,P along x′;4.36,0.70,P along y′" titolo="The projections of the weight point downhill and into the plane."}
:::

:::esempio{titolo="Calculating the two components of weight"}
An object of mass $6\,\mathrm{kg}$ rests on a plane inclined at $30^\circ$. Take $g=10\,\mathrm{m/s^2}$ for the calculation. Its weight has magnitude $60\,\mathrm{N}$. With positive $x'$ pointing uphill and positive $y'$ pointing away from the plane, we obtain
$$
\begin{aligned}
P_{x'}&=-60\sin30^\circ\,\mathrm{N}
=-30\,\mathrm{N},\\[6pt]
P_{y'}&=-60\cos30^\circ\,\mathrm{N}
=-30\sqrt{3}\,\mathrm{N}.
\end{aligned}
$$
The components are perpendicular, so the sum of their squares must equal $P^2$. The values found give $900+2700=3600$ in newtons squared, consistent with a weight of $60\,\mathrm{N}$. As the inclination decreases, the magnitude of the parallel component decreases because the sine of an acute angle decreases as the angle gets smaller. On a horizontal plane this component is zero and the entire weight is perpendicular to the plane.
:::
