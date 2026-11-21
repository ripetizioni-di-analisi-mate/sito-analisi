---
titolo: Trigonometry, statistics and counting
sommario: Angles and triangles, trigonometric identities and equations, frequencies and statistical measures, counting with and without order.
---

## Angles, radians and the circle

:::definizione{#radianti titolo="Measuring an angle in radians"}
The **radian** is a unit for measuring angles, like the degree. A **central angle** has its vertex at the center of a circle and its sides cut off an arc of the circle. The measure of the angle in radians is the arc length divided by the radius. On a circle of radius $5\,\mathrm{cm}$, an angle that cuts off an arc $10\,\mathrm{cm}$ long measures $\dfrac{10}{5}=2$ radians.

If the arc has length $s$ and the radius is $r>0$, the measure of the angle, denoted by the Greek letter $\theta$ (theta), is $\theta=\dfrac sr$, with both lengths in the same unit.

The number $\pi$ (pi, about $3.14$) is the ratio of the length of a circle to its diameter, so a circle of radius $r$ has length $2\pi r$. A full turn cuts off the whole circle, hence it measures $\dfrac{2\pi r}{r}=2\pi$ radians. A straight angle is half a turn and measures $\pi$ radians.

A straight angle also measures $180^\circ$, so $180^\circ=\pi$ radians. A measure in degrees is therefore converted to radians by multiplying it by $\dfrac{\pi}{180}$, and one in radians is converted to degrees by multiplying it by $\dfrac{180}{\pi}$:
$$
150^\circ=150\cdot\frac{\pi}{180}=\frac{5\pi}{6}\ \text{radians},\qquad \frac\pi3\ \text{radians}=\frac\pi3\cdot\frac{180^\circ}{\pi}=60^\circ.
$$
One radian therefore corresponds to $\dfrac{180^\circ}{\pi}$, about $57.3^\circ$. Radians and degrees are different units for the same opening.
:::

:::esempio{titolo="Arc length and rotation"}
Multiplying both sides of $\theta=\dfrac sr$ by $r$ gives the arc length, $s=r\theta$. On a circle of radius $6\,\mathrm{cm}$, the arc cut off by an angle of $\dfrac{2\pi}{3}$ radians has length
$$
s=6\cdot\frac{2\pi}{3}=4\pi\,\mathrm{cm}\approx12.6\,\mathrm{cm}.
$$
The symbol $\approx$ is read “approximately equal to”.

A **sector** is the part of a disc bounded by two radii and the arc. An angle $\theta$, with $0\le\theta\le2\pi$, is the fraction $\dfrac{\theta}{2\pi}$ of a full turn, so the sector takes up the same fraction of the area $\pi r^2$ of the disc: $\mathcal A=\dfrac{\theta}{2\pi}\cdot\pi r^2=\dfrac12r^2\theta$. With the previous data, $\mathcal A=\dfrac12\cdot36\cdot\dfrac{2\pi}{3}=12\pi\,\mathrm{cm^2}$. The area has squared units, unlike the arc length.

A **directed angle** is positive if the rotation is counterclockwise and negative if it is clockwise. Two angles that differ by a whole number of turns, that is, by a multiple of $2\pi$, lead to the same final position. This is the case for $-\dfrac{5\pi}{4}$ and $\dfrac{3\pi}{4}$, because $-\dfrac{5\pi}{4}+2\pi=\dfrac{3\pi}{4}$. The rotation performed is different: clockwise in the first case, counterclockwise in the second.
:::

:::attenzione
The formulas $s=r\theta$ and $\mathcal A=\dfrac12r^2\theta$ hold with the angle measured in radians. In the example the angle of $\dfrac{2\pi}{3}$ radians is $120^\circ$. Using the number $120$ would give $6\cdot120=720\,\mathrm{cm}$, whereas the whole circle has length $12\pi\approx37.7\,\mathrm{cm}$.
:::

:::definizione{#circonferenza-goniometrica titolo="Coordinates on the unit circle"}
The **unit circle** has its center at the origin $O$ of the coordinate axes and radius $1$. An angle $\theta$ is placed on it starting from the radius that ends at the point $(1,0)$, on the positive horizontal half-axis. The radius rotates through $\theta$ about $O$, counterclockwise if $\theta$ is positive and clockwise if it is negative, and ends at a point $P$ of the circle. The **cosine** of $\theta$, written $\cos\theta$, is the horizontal coordinate of $P$. The **sine** of $\theta$, written $\sin\theta$, is the vertical coordinate of $P$. In symbols, $P=(\cos\theta,\sin\theta)$.

In the figure the angle is $60^\circ$ and the segments drawn from $P$ to the two axes reach the horizontal coordinate $0.5$ and the vertical coordinate $0.87$, approximately, so $\cos60^\circ=0.5$ and $\sin60^\circ\approx0.87$. Sine and cosine always lie between $-1$ and $1$, because $P$ is at distance $1$ from the origin.

For an acute angle, the radius $OP$ and the vertical segment from $P$ to the horizontal axis form a right triangle with that axis. The hypotenuse, that is, the side opposite the right angle, is the radius and has length $1$. The other two sides are the legs: the horizontal one has length $\cos\theta$ and the vertical one, opposite the angle $\theta$, has length $\sin\theta$. The definition on the circle applies to every angle, including angles greater than $90^\circ$ and negative angles.

::grafico{curve="cos(t),sin(t),0,6.2831853072" legenda=0 uguale=1 xmin=-1.5 xmax=1.5 ymin=-1.5 ymax=1.5 punti="0.5,0.8660254038,pieno,P" segmenti="0,0,0.5,0.8660254038;0.5,0,0.5,0.8660254038;0,0.8660254038,0.5,0.8660254038" titolo="The projections of point P give the cosine and sine of the angle."}
:::

## Special values, signs and symmetries

:::teorema{#valori-notevoli titolo="Values at special angles"}
For the angles $30^\circ$, $45^\circ$ and $60^\circ$, sine and cosine have exact values, obtained from two right triangles. The values at $0$ and at $\dfrac\pi2$ are read on the unit circle, at the points $(1,0)$ and $(0,1)$. The last column gives the **tangent**, that is, the ratio of sine to cosine; at $\dfrac\pi2$ the cosine is $0$ and the ratio is undefined.

| Angle | Sine | Cosine | Tangent |
| --- | --- | --- | --- |
| $0$ | $0$ | $1$ | $0$ |
| $\dfrac\pi6=30^\circ$ | $\dfrac12$ | $\dfrac{\sqrt3}{2}$ | $\dfrac{\sqrt3}{3}$ |
| $\dfrac\pi4=45^\circ$ | $\dfrac{\sqrt2}{2}$ | $\dfrac{\sqrt2}{2}$ | $1$ |
| $\dfrac\pi3=60^\circ$ | $\dfrac{\sqrt3}{2}$ | $\dfrac12$ | $\sqrt3$ |
| $\dfrac\pi2=90^\circ$ | $1$ | $0$ | undefined |

*The angle $45^\circ$.* An isosceles right triangle, that is, one with equal legs, has two angles of $45^\circ$. If the legs have length $1$, by the Pythagorean theorem (the square of the hypotenuse is the sum of the squares of the legs) the hypotenuse has length $\sqrt{1^2+1^2}=\sqrt2$. Dividing the sides by $\sqrt2$ gives a triangle with the same angles and hypotenuse $1$, like the one on the unit circle. Its legs have length $\dfrac1{\sqrt2}$, that is, $\dfrac{\sqrt2}{2}\approx0.71$ after multiplying numerator and denominator by $\sqrt2$. Hence $\sin45^\circ=\cos45^\circ=\dfrac{\sqrt2}{2}$.

*The angles $30^\circ$ and $60^\circ$.* An equilateral triangle has three angles of $60^\circ$. Its altitude bisects one angle and the opposite side, so it forms two right triangles with acute angles of $30^\circ$ and $60^\circ$. If the side has length $2$, the hypotenuse has length $2$, one leg is half a side and has length $1$, the other is the altitude and has length $\sqrt{2^2-1^2}=\sqrt3$. Dividing the sides by $2$, the hypotenuse becomes $1$ and the legs become $\dfrac12$ and $\dfrac{\sqrt3}{2}\approx0.87$. The short leg is opposite the $30^\circ$ angle, so $\sin30^\circ=\dfrac12$ and $\cos30^\circ=\dfrac{\sqrt3}{2}$. For the $60^\circ$ angle the two values are swapped.
:::

:::definizione{#tangente titolo="Tangent and quadrants"}
The **tangent** of an angle $\theta$ is the ratio of its sine to its cosine, $\tan\theta=\dfrac{\sin\theta}{\cos\theta}$. Dividing by $\dfrac12$ is the same as multiplying by $2$, so $\tan60^\circ=\dfrac{\sqrt3}{2}\cdot2=\sqrt3\approx1.73$. Similarly, $\tan30^\circ=\dfrac12\cdot\dfrac2{\sqrt3}=\dfrac1{\sqrt3}=\dfrac{\sqrt3}{3}$.

The ratio exists when $\cos\theta\ne0$. The cosine is $0$ when $P$ lies on the vertical axis, that is, for $\theta=\dfrac\pi2+k\pi$ with $k\in\mathbb Z$. The notation $k\in\mathbb Z$ is read “$k$ belongs to the set of integers”: $k$ takes the values $0,1,-1,2,-2$ and so on.

The axes divide the plane into four **quadrants**, numbered counterclockwise starting from the one where both coordinates are positive. The cosine has the sign of the horizontal coordinate of $P$ and the sine that of the vertical coordinate. The tangent is positive where the two signs are equal.

| Quadrant | Cosine | Sine | Tangent |
| --- | --- | --- | --- |
| first ($0^\circ$–$90^\circ$) | $+$ | $+$ | $+$ |
| second ($90^\circ$–$180^\circ$) | $-$ | $+$ | $-$ |
| third ($180^\circ$–$270^\circ$) | $-$ | $-$ | $+$ |
| fourth ($270^\circ$–$360^\circ$) | $+$ | $-$ | $-$ |

The **reference angle** of an angle is the acute angle between the radius $OP$ and the horizontal axis. The sine and cosine of an angle have the absolute value (the number without its sign) of those of the reference angle and the sign given by the quadrant. The angle $\dfrac{5\pi}{6}=150^\circ$ lies in the second quadrant and has reference angle $180^\circ-150^\circ=30^\circ$, so $\sin\dfrac{5\pi}{6}=\dfrac12$ and $\cos\dfrac{5\pi}{6}=-\dfrac{\sqrt3}{2}$.
:::

:::teorema{#simmetrie titolo="Related angles"}
The **related angles** of an angle $x$ include $-x$, $\pi-x$ and $\dfrac\pi2-x$. Their points on the unit circle are symmetric to the point of $x$, so their sines and cosines are obtained from those of $x$. Each equality is an **identity**, that is, it holds for every $x$, and is checked here with $x=\dfrac\pi6$.

- Opposite angles, $x$ and $-x$. The two points have the same horizontal coordinate and opposite vertical coordinates, hence $\cos(-x)=\cos x$ and $\sin(-x)=-\sin x$. Check: $\sin\left(-\dfrac\pi6\right)=-\dfrac12$.
- Supplementary angles, $x$ and $\pi-x$ (sum $\pi$). The two points have the same vertical coordinate and opposite horizontal coordinates, hence $\sin(\pi-x)=\sin x$ and $\cos(\pi-x)=-\cos x$. Check: $\cos\dfrac{5\pi}{6}=-\dfrac{\sqrt3}{2}=-\cos\dfrac\pi6$.
- Complementary angles, $x$ and $\dfrac\pi2-x$ (sum $\dfrac\pi2$). In the two points the coordinates are swapped, hence $\sin x=\cos\left(\dfrac\pi2-x\right)$. Check: $\sin\dfrac\pi6=\dfrac12=\cos\dfrac\pi3$.

With these identities an angle is reduced to a special angle: $\cos\dfrac{2\pi}{3}=\cos\left(\pi-\dfrac\pi3\right)=-\cos\dfrac\pi3=-\dfrac12$.
:::

## Identities and addition formulas

::::teorema{#identita-fondamentale titolo="The fundamental identity"}
For every real number $x$,
$$
\sin^2x+\cos^2x=1,
$$
where $\sin^2x$ means $(\sin x)^2$. For $x=\dfrac\pi6$ we get $\left(\dfrac12\right)^2+\left(\dfrac{\sqrt3}{2}\right)^2=\dfrac14+\dfrac34=1$.
:::dimostrazione
The point $P=(\cos x,\sin x)$ lies on the unit circle, so it is at distance $1$ from the origin. By the Pythagorean theorem, the square of the distance of a point from the origin is the sum of the squares of its coordinates. Hence $\cos^2x+\sin^2x=1$.
:::
::::

:::esempio{titolo="Finding cosine and choosing its sign"}
Let $\alpha$ (alpha) be an angle with $\sin\alpha=\dfrac35$. The fundamental identity gives
$$
\cos^2\alpha=1-\left(\frac35\right)^2=1-\frac9{25}=\frac{16}{25}.
$$
Two numbers have square $\dfrac{16}{25}$, namely $\dfrac45$ and $-\dfrac45$. We write $\cos\alpha=\pm\dfrac45$, where $\pm$ is read “plus or minus”. In the second quadrant the cosine is negative, so $\cos\alpha=-\dfrac45$. In the first quadrant $\cos\alpha=\dfrac45$. Without information on the quadrant the sign remains undetermined.

Dividing both sides of the fundamental identity by $\cos^2x$, with $\cos x\ne0$, gives
$$
\frac{\sin^2x}{\cos^2x}+1=\frac1{\cos^2x},\quad\text{that is}\quad1+\tan^2x=\frac1{\cos^2x}.
$$
For $x=\dfrac\pi3$ the left-hand side equals $1+\left(\sqrt3\right)^2=4$ and the right-hand side equals $\dfrac1{\left(\frac12\right)^2}=4$.
:::

:::attenzione
The condition $\cos x\ne0$ remains after a simplification. The equality $\tan x\cos x=\sin x$ holds only where the tangent is defined: for $x=\dfrac\pi2$ the right-hand side equals $1$, whereas the left-hand side has no value, because $\tan\dfrac\pi2$ does not exist.
:::

:::teorema{#addizione-duplicazione titolo="Addition, subtraction and double angles"}
The **addition formulas** express the sine and cosine of the sum of two angles through the sine and cosine of the two angles. For every pair of angles $a$ and $b$,
$$
\sin(a+b)=\sin a\cos b+\cos a\sin b,
$$
$$
\cos(a+b)=\cos a\cos b-\sin a\sin b.
$$
The two formulas follow from composing two rotations of the unit circle, through the angles $a$ and $b$. With $a=\dfrac\pi6$ and $b=\dfrac\pi3$, whose sum is $\dfrac\pi2$, the first formula gives $\dfrac12\cdot\dfrac12+\dfrac{\sqrt3}{2}\cdot\dfrac{\sqrt3}{2}=\dfrac14+\dfrac34=1$, which is $\sin\dfrac\pi2$.

Replacing $b$ by $-b$ and using $\sin(-b)=-\sin b$ and $\cos(-b)=\cos b$ gives the **subtraction formulas**, $\sin(a-b)=\sin a\cos b-\cos a\sin b$ and $\cos(a-b)=\cos a\cos b+\sin a\sin b$. Since $15^\circ=45^\circ-30^\circ$, we compute
$$
\cos15^\circ=\frac{\sqrt2}{2}\cdot\frac{\sqrt3}{2}+\frac{\sqrt2}{2}\cdot\frac12=\frac{\sqrt6+\sqrt2}{4}\approx0.97.
$$

Setting $a=b=x$ in the addition formulas gives the **double-angle formulas**:
$$
\sin(2x)=2\sin x\cos x,
$$
$$
\cos(2x)=\cos^2x-\sin^2x=1-2\sin^2x=2\cos^2x-1.
$$
The last two forms of the cosine are obtained by substituting $\cos^2x=1-\sin^2x$ or $\sin^2x=1-\cos^2x$. For $x=\dfrac\pi6$ we recover the values at $\dfrac\pi3$: the sine is $2\cdot\dfrac12\cdot\dfrac{\sqrt3}{2}=\dfrac{\sqrt3}{2}$ and the cosine is $\dfrac34-\dfrac14=\dfrac12$.

The last two forms give $\sin^2x=\dfrac{1-\cos2x}{2}$ and $\cos^2x=\dfrac{1+\cos2x}{2}$. For $x=\dfrac\pi6$ the first gives $\dfrac12\left(1-\dfrac12\right)=\dfrac14$, which is the square of $\sin\dfrac\pi6$. The sign of sine and cosine is then determined by the quadrant.
:::

:::attenzione
The sine of a sum differs from the sum of the sines. With $a=\dfrac\pi6$ and $b=\dfrac\pi3$ we have $\sin(a+b)=1$, whereas $\sin a+\sin b=\dfrac12+\dfrac{\sqrt3}{2}\approx1.37$, a number greater than $1$.
:::

## Graphs, periodicity and equations

:::definizione{#periodicita titolo="Period and amplitude"}
A function $f$ is **periodic** if its values repeat at equal intervals, that is, if there is a number $T>0$ such that $f(x+T)=f(x)$ for every $x$ in the domain, with $x+T$ still in the domain. The domain is the set of numbers at which $f$ is defined. The smallest $T$ with this property, when it exists, is the **fundamental period**, or simply the period.

Adding $2\pi$ to an angle means making one more full turn, which leads back to the same point $P$. Hence sine and cosine have period $2\pi$: for example, $\sin\dfrac{13\pi}{6}=\sin\left(\dfrac\pi6+2\pi\right)=\dfrac12$. The tangent has period $\pi$, because half a turn changes the sign of both coordinates of $P$ and leaves their ratio unchanged: $\tan\dfrac{5\pi}{4}=\tan\dfrac\pi4=1$.

For the function $A\sin(bx)+c$, with $A\ne0$ and $b\ne0$, let $|A|$ and $|b|$ denote the absolute values of $A$ and $b$.

- The period is $\dfrac{2\pi}{|b|}$, because the quantity $bx$ changes by $2\pi$ when $x$ increases by $\dfrac{2\pi}{|b|}$.
- The **amplitude** is $|A|$, because the sine varies between $-1$ and $1$ and so $A\sin(bx)$ varies between $-|A|$ and $|A|$.
- The number $c$ shifts the graph vertically without changing the period. The function oscillates around the level $c$ and its values form the interval $[c-|A|,\,c+|A|]$, that is, they range from $c-|A|$ to $c+|A|$, endpoints included.

For $3\sin(2x)+1$ the period is $\dfrac{2\pi}{2}=\pi$, the amplitude is $3$ and the values range from $1-3=-2$ to $1+3=4$.

In the graph the sine equals $0$ at $x=0$, rises to $1$ at $\dfrac\pi2\approx1.57$, falls to $-1$ at $\dfrac{3\pi}{2}\approx4.71$ and returns to $0$ at $2\pi\approx6.28$. The cosine equals $1$ at $x=0$, falls to $-1$ at $\pi\approx3.14$ and returns to $1$ at $2\pi$.

::grafico{f="sin(x);cos(x)" xmin=-1 xmax=7 ymin=-1.5 ymax=1.5 titolo="Sine and cosine oscillate between -1 and 1 and repeat their values after a full turn."}
:::

:::esempio{#equazioni-goniometriche titolo="Equations on an interval"}
Solving $\sin x=\dfrac12$ means finding the angles whose point $P$ has vertical coordinate $\dfrac12$. Within one turn there are two such points: that of the angle $\dfrac\pi6$ and its mirror image in the vertical axis, which corresponds to the angle $\pi-\dfrac\pi6=\dfrac{5\pi}{6}$. The sine has period $2\pi$, so all real solutions are
$$
x=\frac\pi6+2k\pi\quad\text{or}\quad x=\frac{5\pi}{6}+2k\pi,\qquad k\in\mathbb Z.
$$
If the question specifies an interval, the solutions belonging to it are kept: in $[2\pi,4\pi]$ they are $\dfrac{13\pi}{6}$ and $\dfrac{17\pi}{6}$, obtained with $k=1$.

The interval $[0,\pi)$ contains the numbers $x$ with $0\le x<\pi$: the endpoint $0$ is included, the endpoint $\pi$ is excluded. To solve $\sin(2x)=0$ on $[0,\pi)$, set $t=2x$. From $0\le x<\pi$ it follows that $0\le t<2\pi$. On this interval $\sin t=0$ for $t=0$ and for $t=\pi$. Dividing by $2$ gives $x=0$ or $x=\dfrac\pi2$. The value $x=\pi$ makes $\sin(2x)$ zero but is excluded from the interval.
:::

:::esempio{#disequazioni-goniometriche titolo="Comparisons on the circle"}
We look for the $x$ in $[0,\pi]$ such that $\sin x\ge\dfrac{\sqrt2}{2}$, that is, the angles whose point $P$ has vertical coordinate at least $\dfrac{\sqrt2}{2}\approx0.71$. The equality $\sin x=\dfrac{\sqrt2}{2}$ holds at $\dfrac\pi4$ and at $\pi-\dfrac\pi4=\dfrac{3\pi}{4}$. Between these two angles the point $P$ is higher, so the inequality is satisfied; for example, at $\dfrac\pi2$ the sine is $1$. Elsewhere the point is lower; for example, at $\dfrac\pi6$ the sine is $0.5$. The solutions form the interval $\left[\dfrac\pi4,\dfrac{3\pi}{4}\right]$. With the sign $>$ instead of $\ge$ the two endpoints would be excluded.
:::

## Triangles and indirect measurements

:::definizione{#triangolo-rettangolo titolo="Ratios in a right triangle"}
In a right triangle the **hypotenuse** is the side opposite the right angle and the **legs** are the other two sides. With respect to an acute angle $\alpha$, the opposite leg is the one facing $\alpha$ and the adjacent leg is the one that forms $\alpha$ together with the hypotenuse. The sine, cosine and tangent of $\alpha$ are ratios of sides.

- $\sin\alpha=\dfrac{\text{opposite leg}}{\text{hypotenuse}}$
- $\cos\alpha=\dfrac{\text{adjacent leg}}{\text{hypotenuse}}$
- $\tan\alpha=\dfrac{\text{opposite leg}}{\text{adjacent leg}}$

In the triangle with legs $3$ and $4$ and hypotenuse $5$, for the angle $\alpha$ facing the leg $3$ we have $\sin\alpha=\dfrac35=0.6$, $\cos\alpha=\dfrac45=0.8$ and $\tan\alpha=\dfrac34=0.75$. For the other acute angle the two legs swap names, so its sine is $\dfrac45$. Dividing the three sides by the hypotenuse gives a triangle with the same angles and hypotenuse $1$, that is, the one of the unit circle, so the two definitions agree.

A ramp $8\,\mathrm m$ long, inclined at $30^\circ$ to the horizontal, is the hypotenuse of a right triangle. The vertical rise is the leg opposite the $30^\circ$ angle and measures $8\sin30^\circ=8\cdot\dfrac12=4\,\mathrm m$. The horizontal distance is the adjacent leg and measures $8\cos30^\circ=8\cdot\dfrac{\sqrt3}{2}=4\sqrt3\,\mathrm m\approx6.93\,\mathrm m$.

::grafico{linee="0,0 6.9282032303,0 6.9282032303,4 0,0" assi=0 uguale=1 xmin=-1 xmax=8 ymin=-1 ymax=5 etichette="3.2,-0.5,horizontal;7.3,2,4 m;2.9,2.7,8 m;1.2,0.35,30°" titolo="The ramp, horizontal distance and vertical rise form a right triangle."}
:::

:::teorema{#teoremi-triangoli titolo="The sine and cosine rules"}
In any triangle, let $a$, $b$, $c$ be the sides and $\alpha$, $\beta$, $\gamma$ (alpha, beta, gamma) the respectively opposite angles. The **sine rule** states that the ratio of a side to the sine of the opposite angle is the same for the three sides. The **cosine rule** gives one side from the other two and the angle *included* between them.
$$
\frac a{\sin\alpha}=\frac b{\sin\beta}=\frac c{\sin\gamma},
\qquad c^2=a^2+b^2-2ab\cos\gamma.
$$
Both are obtained by drawing an altitude and applying the side ratios and the Pythagorean theorem to the two right triangles obtained.

- Sine rule. If $\alpha=30^\circ$, $\beta=45^\circ$ and $a=4$, from $\dfrac b{\sin\beta}=\dfrac a{\sin\alpha}$ we get $b=\dfrac{a\sin\beta}{\sin\alpha}=4\cdot\dfrac{\sqrt2}{2}\cdot2=4\sqrt2\approx5.66$.
- Cosine rule. If $a=5$, $b=8$ and $\gamma=60^\circ$, then $c^2=25+64-2\cdot5\cdot8\cdot\dfrac12=49$, so $c=7$. For $\gamma=90^\circ$ the cosine is $0$ and the formula becomes the Pythagorean theorem, $c^2=a^2+b^2$.

With two sides and an angle not included between them, the sine rule gives the sine of a second angle, and two supplementary angles have the same sine. With $\alpha=30^\circ$, $a=2$ and $b=2\sqrt2$ we find $\sin\beta=\dfrac{b\sin\alpha}{a}=\dfrac{\sqrt2}{2}$, so $\beta=45^\circ$ or $\beta=135^\circ$. The angles of a triangle add up to $180^\circ$, so a value of $\beta$ is accepted if it leaves a positive third angle, that is, if $\alpha+\beta<180^\circ$. The sums are $75^\circ$ and $165^\circ$, hence there are two triangles with these data.

The area of the triangle is $\dfrac12ab\sin\gamma$, because the altitude relative to the side $a$ measures $b\sin\gamma$. With $a=6\,\mathrm{cm}$, $b=8\,\mathrm{cm}$ and $\gamma=30^\circ$ the altitude is $8\cdot\dfrac12=4\,\mathrm{cm}$ and the area is $\dfrac12\cdot6\cdot4=12\,\mathrm{cm^2}$.
:::

## Data, frequencies and displays

:::definizione{#frequenze titolo="Variables and frequencies"}
A statistical survey records a **variable**, that is, a characteristic, on a group of people or objects. Each recorded value is an observation; the different values taken by the variable are called **categories** when they are labels and simply values when they are numbers. A variable is *qualitative* if it takes categories, such as the means of transport used, and *quantitative* if it takes numbers. A quantitative variable is discrete when it comes from a count, such as the number of absences, and continuous when it comes from a measurement, such as a duration.

The **absolute frequency** $n_i$ of the value $i$ is the number of observations equal to that value. Denoting by $N$ the total number of observations, the **relative frequency** is $f_i=\dfrac{n_i}{N}$ and the percentage frequency is $100\cdot f_i$. Suppose that, out of $80$ items inspected, $12$ are defective and $68$ are not. The relative frequency of the defective items is $\dfrac{12}{80}=0.15$ and the percentage is $15\%$. For the non-defective items we get $\dfrac{68}{80}=0.85$, that is, $85\%$. Each item belongs to exactly one of the two categories, so the absolute frequencies add up to $N=80$ and the relative frequencies add up to $1$.

The denominator is the size of the group considered. If $3$ of the $12$ defective items have a color defect, they are $\dfrac3{12}=0.25$, that is, $25\%$ of the defective items, and $\dfrac3{80}=0.0375$, that is, $3.75\%$ of all the items.
:::

:::definizione{#frequenze-cumulative titolo="Cumulative frequencies"}
The **cumulative frequency** of a value is the number of observations less than or equal to that value. It requires values that can be ordered and is computed by adding the absolute frequencies from the first value up to the one considered. Suppose the absences of $19$ students in one month are distributed as in the table.

| Absences | Absolute frequency | Cumulative frequency |
| --- | --- | --- |
| $0$ | $4$ | $4$ |
| $1$ | $7$ | $4+7=11$ |
| $2$ | $5$ | $11+5=16$ |
| $3$ | $3$ | $16+3=19$ |

The row of the value $2$ shows that $16$ students have at most $2$ absences. Cumulative frequencies increase or stay equal from one row to the next, because each row adds observations and removes none; the last one is the total $N$.

The difference between two consecutive cumulative frequencies is an absolute frequency. If the cumulative frequencies up to $2$ and up to $3$ are $13$ and $18$, the observations equal to $3$ are $18-13=5$; in the table of absences they are $19-16=3$.
:::

:::definizione{#istogrammi titolo="Charts and histograms"}
- In a **pie chart** each category is a sector of angle $360^\circ\cdot f$, where $f$ is the relative frequency. The category “defective”, with $f=0.15$, gets an angle of $360^\circ\cdot0.15=54^\circ$.
- In a **bar chart** each category has a bar whose height equals its frequency.
- A **histogram** represents a quantitative variable whose values are grouped into **classes**, that is, intervals. Each class has a rectangle whose *area* is the frequency. The base is the class width and the height is the **density**, that is, the frequency divided by the width.

With the classes $[0,10)$ and $[10,20)$ each observation belongs to exactly one class: the value $10$ is excluded from the first and lies in the second.

In the figure the vertical axis shows the density $d$. The first rectangle has base $2$ and height $8$, so its class contains $2\cdot8=16$ observations. The second has base $5$ and height $4$ and contains $5\cdot4=20$ observations; the third has base $4$ and height $3$ and contains $12$. The first rectangle is the tallest and contains fewer observations than the second, because it is narrower.

::grafico{poligoni="0,0 2,0 2,8 0,8;2,0 7,0 7,4 2,4;7,0 11,0 11,3 7,3" xmin=-1 xmax=12 ymin=-1 ymax=9 nomi="x,d" titolo="The rectangle areas are 16, 20 and 12; their heights are densities."}
:::

:::esempio{titolo="Exact information and grouped data"}
A table lists the classes $[0,10)$ and $[10,20)$ with frequencies $4$ and $6$. The table shows that $4$ observations are below $10$. The number of observations below $5$ remains unknown, because the individual values are not listed: all four, none or only some of them could be.

For the same reason the mean, that is, the sum of the observations divided by their number, can only be computed approximately. Each observation is assigned the midpoint of its class, $5$ for the first and $15$ for the second, which gives $\dfrac{4\cdot5+6\cdot15}{10}=11$. The number $11$ is an estimate, because with four observations equal to $1$ and six equal to $12$ the table would be the same and the mean would be $\dfrac{4\cdot1+6\cdot12}{10}=7.6$.
:::

## Mean, median and mode

:::definizione{#media titolo="Arithmetic and weighted means"}
The **arithmetic mean** of $N$ observations $x_1,\dots,x_N$ is their sum divided by $N$. It is denoted by $\bar x$, read “x bar”: $\bar x=\dfrac{x_1+\cdots+x_N}{N}$. Suppose three students solved $2$, $4$ and $6$ exercises in a week. The sum is $12$, so $\bar x=\dfrac{12}{3}=4$ exercises. In general the sum of the observations is $N\bar x$; here $3\cdot4=12$.

When the data are collected in a frequency table, each value $v_i$ is counted $n_i$ times. The mean is then
$$
\bar x=\frac{\sum_i n_iv_i}{\sum_i n_i},
$$
where the symbol $\sum_i$, called the summation sign, denotes the sum of the terms to its right, one for each row $i$ of the table. The mean is called **weighted** because the frequencies act as weights. For the table of absences, with values $0,1,2,3$ and frequencies $4,7,5,3$,
$$
\bar x=\frac{4\cdot0+7\cdot1+5\cdot2+3\cdot3}{4+7+5+3}=\frac{26}{19}\approx1.37.
$$

The same calculation combines two groups whose means are known. A group of $20$ people with mean $24$ has sum $20\cdot24=480$; a group of $10$ people with mean $27$ has sum $10\cdot27=270$. The $30$ people together have sum $750$ and mean $\dfrac{750}{30}=25$.
:::

:::attenzione
The mean of two combined groups differs from the mean of the two means when the groups have different sizes and different means. In the example $\dfrac{24+27}{2}=25.5$, whereas the mean of the $30$ people is $25$. The first group has twice the weight, because it contains twice as many people.
:::

:::definizione{#mediana-moda titolo="Median and mode"}
The **median** is the value in the central position when the observations are written in increasing order.

- With an odd number of observations it is the central one: in $2,4,5,7,8$ it is the third, namely $5$.
- With an even number it is the mean of the two central observations. The observations $4,7,2,13,6,8$, in order, are $2,4,6,7,8,13$. The two central ones are the third and the fourth, so the median is $\dfrac{6+7}{2}=6.5$.

The central position is found in the ordered list. In the original list the two observations in the middle are $2$ and $13$, which have mean $7.5$.

The **mode** is the value with the highest frequency. In the table of absences the mode is $1$, which has frequency $7$. The data set $2,2,5,9,9$ has two modes, $2$ and $9$.

In a frequency table the median is found with the cumulative frequencies. The table of absences has $19$ observations, so the central one is the tenth. The cumulative frequency goes from $4$ to $11$ in the row of the value $1$, so the tenth observation equals $1$ and the median is $1$.

The mean depends on all the observations, the median on their order and on the central ones, the mode on the frequencies. If in the data $2,4,6,7,8,13$ the value $13$ becomes $73$, the sum increases by $60$ and the mean increases by $\dfrac{60}{6}=10$, while the central observations are still $6$ and $7$ and the median remains $6.5$.
:::

:::esempio{titolo="A missing or removed observation"}
Five measurements have mean $18$, so their sum is $5\cdot18=90$.

- Missing observation. If four of the measurements are $15$, $17$, $20$ and $22$, their sum is $74$ and the fifth measurement is $90-74=16$.
- Removed observation. If a measurement equal to $26$ is removed, four measurements remain, with sum $90-26=64$ and mean $\dfrac{64}{4}=16$.
- Added observation. Adding a measurement equal to $30$ gives six measurements, with sum $90+30=120$ and mean $\dfrac{120}{6}=20$.

When an observation is removed or added, both the sum and the divisor change.
:::

## Spread and transformations of data

:::definizione{#varianza titolo="Descriptive variance and standard deviation"}
The variance measures how far the observations are from their mean. The data sets $2,4,6$ and $0,4,8$ have the same mean $4$, and in the second the observations are farther from $4$.

The **deviation** of an observation is the difference $x_i-\bar x$ between the observation and the mean. The **descriptive variance** is the mean of the squared deviations:
$$
\sigma^2=\frac1N\sum_{i=1}^N(x_i-\bar x)^2.
$$
The symbol $\sigma$ is the Greek letter sigma; the sum $\sum_{i=1}^N$ has one term for each observation, from the first to the $N$-th. The square root of the variance, $\sigma=\sqrt{\sigma^2}$, is the **standard deviation**, also called the root-mean-square deviation.

For the data $2,4,6$, which have mean $4$, the deviations are $-2$, $0$ and $2$, with sum $0$. Their squares are $4$, $0$ and $4$, with sum $8$. The variance is $\sigma^2=\dfrac83\approx2.67$ and the standard deviation is $\sigma=\sqrt{\dfrac83}\approx1.63$ exercises.

The sum of the deviations is $0$ for any data set, because $N$ times the mean is subtracted from the sum of the observations, which is $N\bar x$. This is why the squares, which are positive or zero, are added, and the variance is always positive or zero. The standard deviation has the unit of the data, the variance has the squared unit.

Expanding the squares and using $\sum_i x_i=N\bar x$ gives a second formula: the variance is the mean of the squares of the observations minus the square of the mean, $\sigma^2=\dfrac{\sum_i x_i^2}{N}-\bar x^2$. With the data $2,4,6$ we get $\dfrac{4+16+36}{3}-4^2=\dfrac{56}{3}-\dfrac{48}{3}=\dfrac83$.

For $N>1$ there is also a variance with divisor $N-1$, which for the data $2,4,6$ equals $\dfrac82=4$; the question states which of the two is required. The **range** is the difference between the largest and the smallest observation, here $6-2=4$, and uses only the two extreme observations.
:::

:::teorema{#trasformazioni-dati titolo="Effect of an affine transformation"}
An **affine transformation** of the data replaces each observation $x_i$ with $y_i=ax_i+b$, where $a$ and $b$ are two fixed numbers. The mean, variance and standard deviation of the new data are
$$
\bar y=a\bar x+b,\qquad \sigma_y^2=a^2\sigma_x^2,\qquad \sigma_y=|a|\,\sigma_x.
$$
Indeed, the deviation of a new observation is $y_i-\bar y=(ax_i+b)-(a\bar x+b)=a(x_i-\bar x)$. The number $b$ cancels and each deviation is multiplied by $a$, so its square is multiplied by $a^2$.

With $a=2$ and $b=1$ the data $2,4,6$ become $5,9,13$. Their mean is $\dfrac{27}{3}=9$, which is $2\cdot4+1$. The deviations are $-4,0,4$ and their squares add up to $32$, so the variance is $\dfrac{32}{3}$, which is $2^2\cdot\dfrac83$, and the standard deviation is $\sqrt{\dfrac{32}{3}}=2\sqrt{\dfrac83}$.

- Adding $3$ to all the observations ($a=1$, $b=3$) increases the mean by $3$ and leaves the variance and the standard deviation unchanged.
- Doubling all the observations ($a=2$, $b=0$) doubles the mean and the standard deviation and multiplies the variance by $4$.
- With $a=-2$ the standard deviation doubles, because it is a square root and stays positive; this is why $|a|$ appears in the formula.
- Repeating each observation the same number of times leaves the mean and the descriptive variance unchanged, because the sums and the number of observations are multiplied by the same factor. Writing the data $2,4,6$ twice, the mean is $\dfrac{24}{6}=4$ and the variance is $\dfrac{16}{6}=\dfrac83$, as before.
- A zero variance means that all the squared deviations are zero, that is, all the observations equal the mean. The groups $3,3,3$ and $7,7,7$ both have variance $0$. Combined, they have mean $5$ and deviations $-2$ or $2$, hence variance $4$. Spread is measured from the mean of the combined data.
:::

## Counting, order and repetition

:::definizione{#principi-conteggio titolo="The product rule and alternative cases"}
Combinatorics counts in how many ways a choice can be made, without listing them.

The **product rule** concerns a choice made in successive stages: if the number of possibilities at each stage is the same whatever the outcome of the previous stages, the total number is the product of these numbers. A menu offers $3$ starters, $5$ main courses and $2$ desserts. For each starter there are $5$ main courses, so there are $3\cdot5=15$ starter–main pairs. For each pair there are $2$ desserts, so there are $15\cdot2=30$ complete meals.

The **sum rule** concerns a choice among alternative cases with no common elements: the possibilities of the cases are added. Someone ordering a single dish, chosen among main courses and desserts, has $5+2=7$ possibilities.

If two cases have common elements, the sum counts them twice, so their number is subtracted once. Among the integers from $1$ to $20$ there are $10$ multiples of $2$ and $4$ multiples of $5$, namely $5,10,15,20$. The numbers $10$ and $20$ are multiples of both, so the multiples of $2$ or $5$ are $10+4-2=12$.
:::

:::definizione{#permutazioni-combinazioni titolo="Arrangements, permutations and combinations"}
The **factorial** of an integer $n\ge1$, written $n!$, is the product of the integers from $n$ down to $1$, that is, $n!=n(n-1)\cdots1$. For example, $3!=6$, $4!=24$ and $5!=120$. By convention $0!=1$. In the following counts $n$ and $k$ are integers with $0\le k\le n$.

- **Permutations.** The orderings of $n$ distinct objects are $n!$, because the first place can be filled in $n$ ways, the second in $n-1$ and so on. The letters $\mathrm A$, $\mathrm B$, $\mathrm C$ have $3!=6$ orderings: $\mathrm{ABC}$, $\mathrm{ACB}$, $\mathrm{BAC}$, $\mathrm{BCA}$, $\mathrm{CAB}$, $\mathrm{CBA}$.
- **Arrangements.** The ways of choosing $k$ objects out of $n$, giving each a different place or role, without repetition, are $n(n-1)\cdots(n-k+1)$, a product of $k$ factors. A president and a secretary among $5$ people can be chosen in $5\cdot4=20$ ways.
- **Combinations.** If order does not matter, each group of $k$ objects appears $k!$ times among the arrangements, once for each of its orderings. The number of groups is therefore the number of arrangements divided by $k!$. It is the binomial coefficient $\binom nk$, read “$n$ choose $k$”, which equals $\binom nk=\dfrac{n!}{k!\,(n-k)!}$. A pair among $5$ people can be chosen in $\dfrac{20}{2}=10$ ways; with the formula, $\dfrac{5!}{2!\,3!}=\dfrac{120}{2\cdot6}=10$.
- Sequences with repetition. If each place can be filled with any of $n$ symbols, $k$ places give $n^k$ sequences. The codes of $3$ digits, each from $0$ to $9$, are $10^3=1000$.
- Anagrams with repeated letters. The factorial of the number of letters is divided by the factorials of the numbers of repetitions of each letter. The word “mamma” has $5$ letters, with m repeated $3$ times and a repeated $2$ times, so it has $\dfrac{5!}{3!\,2!}=\dfrac{120}{12}=10$ distinct anagrams.

A request of the type “at least one” is counted by subtracting the opposite cases from the total. The codes of $3$ digits with no $7$ use $9$ digits per place and are $9^3=729$, so the codes with at least one $7$ are $1000-729=271$.

A count describes possibilities. It becomes a probability, as the ratio of favorable to possible cases, only under the assumption that the counted cases are equally likely.
:::

:::esempio{titolo="Restrictions on the first position and neighboring positions"}
Using the digits $0,1,2,3,4$, we count the three-digit numbers with all digits different. The first digit has $4$ possibilities, because a three-digit number does not start with $0$. The second has $4$, because it excludes the first and allows $0$. The third has $3$, because it excludes the first two. By the product rule there are $4\cdot4\cdot3=48$ numbers.

Five people stand in a row and two of them, Anna and Bruno, stand next to each other. The two people are treated as a single block, so there are $4$ objects to order, the block and the other three people, with $4!=24$ orderings. Inside the block there are $2$ orders, Anna–Bruno and Bruno–Anna. Hence there are $2\cdot24=48$ rows, twice the $4!$ orderings, because the order inside the block also counts.
:::
