---
titolo: Trigonometry, statistics and counting
sommario: Angles and triangles, trigonometric identities and equations, frequencies and statistical measures, counting with and without order.
---

## Angles, radians and the circle

:::definizione{#radianti titolo="Measuring an angle in radians"}
The measure in **radians** of a central angle is the ratio of the length of its intercepted arc to the radius of the circle. If the arc length is $s$ and the radius is $r>0$, then $\theta=\dfrac sr$. The two lengths must use the same unit. A full turn has arc length $2\pi r$, so its measure is $2\pi$ radians; half a turn measures $\pi$ radians.

Conversion between degrees and radians follows from $180^\circ=\pi$ radians. To convert a degree measure, multiply its value by $\dfrac{\pi}{180}$; for the reverse conversion, multiply by $\dfrac{180}{\pi}$. For example, $150^\circ=\dfrac{5\pi}{6}$ radians. One radian is not one degree: the two measurements use different units to describe the same angle.
:::

:::esempio{titolo="Arc length and rotation"}
An arc of radius $6\,\mathrm{cm}$ subtending $\dfrac{2\pi}{3}$ radians has length $s=r\theta=4\pi\,\mathrm{cm}$. If the arc length and radius are known instead, use their ratio $\dfrac sr$. The formula $s=r\theta$ requires radians; inserting the number of degrees without converting would produce a different result.

The same fraction of a full turn determines sector area: $\mathcal A=\dfrac{\theta}{2\pi}\pi r^2=\dfrac12r^2\theta$, for $0\le\theta\le2\pi$, with the angle measured in radians. This area differs from arc length and has squared units.

Directed angles are measured positively counterclockwise. Two angles differing by an integer multiple of $2\pi$ have the same terminal side. For example, $-\dfrac{5\pi}{4}$ and $\dfrac{3\pi}{4}$ identify the same point on the circle because they differ by one full turn. The rotation performed can be different even when the final position is the same.
:::

:::definizione{#circonferenza-goniometrica titolo="Coordinates on the unit circle"}
On the circle centered at the origin with radius $1$, an angle $\theta$ identifies the point $P=(\cos\theta,\sin\theta)$. Cosine is therefore the horizontal coordinate, and sine the vertical coordinate. Both lie between $-1$ and $1$. This representation extends the right-triangle definitions to any directed angle.

::grafico{curve="cos(t),sin(t),0,6.2831853072" legenda=0 uguale=1 xmin=-1.5 xmax=1.5 ymin=-1.5 ymax=1.5 punti="0.5,0.8660254038,pieno,P" segmenti="0,0,0.5,0.8660254038;0.5,0,0.5,0.8660254038;0,0.8660254038,0.5,0.8660254038" titolo="The projections of point P give the cosine and sine of the angle."}
:::

## Special values, signs and symmetries

:::teorema{#valori-notevoli titolo="Values at special angles"}
Isosceles right triangles and the triangles obtained by halving an equilateral triangle provide the following values.

| Angle | Sine | Cosine | Tangent |
| --- | --- | --- | --- |
| $0$ | $0$ | $1$ | $0$ |
| $\dfrac\pi6$ | $\dfrac12$ | $\dfrac{\sqrt3}{2}$ | $\dfrac{\sqrt3}{3}$ |
| $\dfrac\pi4$ | $\dfrac{\sqrt2}{2}$ | $\dfrac{\sqrt2}{2}$ | $1$ |
| $\dfrac\pi3$ | $\dfrac{\sqrt3}{2}$ | $\dfrac12$ | $\sqrt3$ |
| $\dfrac\pi2$ | $1$ | $0$ | undefined |

In an isosceles right triangle with unit legs, the hypotenuse is $\sqrt2$, so the sine and cosine of $\dfrac\pi4$ both equal $\dfrac1{\sqrt2}=\dfrac{\sqrt2}{2}$. In an equilateral triangle of side $2$, the altitude is $\sqrt3$ and half a side is $1$; dividing by the hypotenuse $2$ gives the values at $30^\circ$ and $60^\circ$.
:::

:::definizione{#tangente titolo="Tangent and quadrants"}
Tangent is $\tan\theta=\dfrac{\sin\theta}{\cos\theta}$ and is defined when $\cos\theta\ne0$, that is, for $\theta\ne\dfrac\pi2+k\pi$, where $k\in\mathbb Z$. Sine and cosine are positive in the first quadrant; sine is positive and cosine negative in the second; both are negative in the third; sine is negative and cosine positive in the fourth. Tangent is positive in the first and third quadrants because the two coordinates have the same sign.

An angle in the second quadrant with reference angle $\dfrac\pi6$ is $\dfrac{5\pi}{6}$. Its sine is $\dfrac12$, whereas its cosine is $-\dfrac{\sqrt3}{2}$. The reference angle determines the absolute value, and the quadrant determines the sign.
:::

:::teorema{#simmetrie titolo="Related angles"}
The symmetries of the circle give $\sin(-x)=-\sin x$, $\cos(-x)=\cos x$, $\sin(\pi-x)=\sin x$ and $\cos(\pi-x)=-\cos x$. An angle's sine also equals the cosine of its complement: $\sin x=\cos\left(\dfrac\pi2-x\right)$. These identities reduce different angles to known values while preserving the correct sign.
:::

## Identities and addition formulas

::::teorema{#identita-fondamentale titolo="The fundamental identity"}
For every real number $x$,
$$
\sin^2x+\cos^2x=1.
$$
:::dimostrazione
The point with coordinates $(\cos x,\sin x)$ lies on the unit circle. Its equation is $X^2+Y^2=1$, so substituting the coordinates gives the identity. It expresses the Pythagorean theorem for the two projections of the radius.
:::
::::

:::esempio{titolo="Finding cosine and choosing its sign"}
If $\sin\alpha=\dfrac35$, the identity gives $\cos^2\alpha=1-\dfrac9{25}=\dfrac{16}{25}$. Hence $\cos\alpha=\pm\dfrac45$. If $\alpha$ is in the second quadrant, cosine is negative and equals $-\dfrac45$. Knowing the sine alone, without a quadrant or another restriction, does not determine which sign to choose.

Dividing the fundamental identity by $\cos^2x$, when $\cos x\ne0$, gives $1+\tan^2x=\dfrac1{\cos^2x}$. The condition on the denominator remains necessary after simplification. For example, $\tan x\cos x=\sin x$ holds only where the original tangent is defined.
:::

:::teorema{#addizione-duplicazione titolo="Addition, subtraction and double angles"}
For every pair of angles,
$$
\sin(a+b)=\sin a\cos b+\cos a\sin b,
$$
$$
\cos(a+b)=\cos a\cos b-\sin a\sin b.
$$
Replacing $b$ by $-b$ gives the subtraction formulas. Setting $a=b=x$ yields
$$
\sin(2x)=2\sin x\cos x,
$$
$$
\cos(2x)=\cos^2x-\sin^2x=1-2\sin^2x=2\cos^2x-1.
$$
These relations follow from composing two rotations of the circle. For instance, they allow us to calculate $\cos15^\circ$ by writing $15^\circ=45^\circ-30^\circ$. The result is $\dfrac{\sqrt6+\sqrt2}{4}$.

The double-angle formulas also give $\sin^2x=\dfrac{1-\cos2x}{2}$ and $\cos^2x=\dfrac{1+\cos2x}{2}$. Passing from squares to the values of sine and cosine still requires the sign determined by the angle.
:::

## Graphs, periodicity and equations

:::definizione{#periodicita titolo="Period and amplitude"}
A function is periodic if some $T>0$ satisfies $f(x+T)=f(x)$ for every argument in its domain, with translation preserving that domain. The smallest such number, when it exists, is the **fundamental period**. Sine and cosine have fundamental period $2\pi$, whereas tangent has period $\pi$.

For $A\ne0$ and $b\ne0$, the function $A\sin(bx)+c$ has period $\dfrac{2\pi}{|b|}$ and range $[c-|A|,c+|A|]$. The number $|A|$ is the amplitude of the oscillation around the level $c$. Multiplying the argument changes the period, while a vertical shift changes the middle level without changing the period.

::grafico{f="sin(x);cos(x)" xmin=-1 xmax=7 ymin=-1.5 ymax=1.5 titolo="Sine and cosine oscillate between -1 and 1 and repeat their values after a full turn."}
:::

:::esempio{#equazioni-goniometriche titolo="Equations on an interval"}
The equation $\sin x=\dfrac12$ has solutions $\dfrac\pi6$ and $\dfrac{5\pi}{6}$ within one full turn. All real solutions are $x=\dfrac\pi6+2k\pi$ or $x=\dfrac{5\pi}{6}+2k\pi$, where $k\in\mathbb Z$. A specified interval selects which values to retain.

For $\sin(2x)=0$ on $[0,\pi)$, we have $0\le2x<2\pi$. The allowed zeros of the argument are $0$ and $\pi$, so $x=0$ or $x=\dfrac\pi2$. The endpoint $x=\pi$ is excluded by the problem even though it would make the sine zero. Transforming the interval correctly prevents missing or adding solutions.
:::

:::esempio{#disequazioni-goniometriche titolo="Comparisons on the circle"}
On $[0,\pi]$, the condition $\sin x\ge\dfrac{\sqrt2}{2}$ asks for the vertical coordinate on the unit circle to be at least that threshold. Equality holds at $\dfrac\pi4$ and $\dfrac{3\pi}{4}$; the upper arc between the two points satisfies the comparison. The complete set is $\left[\dfrac\pi4,\dfrac{3\pi}{4}\right]$. A strict inequality would exclude both endpoints.
:::

## Triangles and indirect measurements

:::definizione{#triangolo-rettangolo titolo="Ratios in a right triangle"}
For an acute angle $\alpha$, sine is the opposite leg divided by the hypotenuse, cosine is the adjacent leg divided by the hypotenuse, and tangent is the opposite leg divided by the adjacent leg. The names opposite and adjacent depend on the chosen angle, whereas the hypotenuse is always the side opposite the right angle.

A ramp of length $8\,\mathrm m$ inclined at $30^\circ$ to the horizontal has a vertical rise of $8\sin30^\circ=4\,\mathrm m$. Its length along the slope is the hypotenuse; the horizontal distance is instead $8\cos30^\circ=4\sqrt3\,\mathrm m$. Distinguishing these two measurements determines which ratio to use.

::grafico{linee="0,0 6.9282032303,0 6.9282032303,4 0,0" assi=0 uguale=1 xmin=-1 xmax=8 ymin=-1 ymax=5 etichette="3.2,-0.5,horizontal;7.3,2,4 m;2.9,2.7,8 m;1.2,0.35,30°" titolo="The ramp, horizontal distance and vertical rise form a right triangle."}
:::

:::teorema{#teoremi-triangoli titolo="The sine and cosine rules"}
In any triangle, let $a,b,c$ be the sides opposite angles $\alpha,\beta,\gamma$. Then
$$
\frac a{\sin\alpha}=\frac b{\sin\beta}=\frac c{\sin\gamma},
\qquad c^2=a^2+b^2-2ab\cos\gamma.
$$
The sine rule connects sides with their opposite angles; the cosine rule uses two sides and their *included* angle. These formulas follow by drawing an altitude and applying right-triangle ratios and the Pythagorean theorem. When $\gamma=90^\circ$, cosine is zero and the formula becomes $c^2=a^2+b^2$.

With two sides and a nonincluded angle, the sine rule may produce two supplementary angles. Each is allowed only if, added to the known angle, it leaves a positive third angle. The data therefore do not always guarantee a unique triangle.

The area is also $\dfrac12ab\sin\gamma$, because the altitude relative to base $a$ is $b\sin\gamma$. With sides $6$ and $8$ and included angle $30^\circ$, the area is $12$. Area units are the square of the units used for lengths.
:::

## Data, frequencies and displays

:::definizione{#frequenze titolo="Variables and frequencies"}
A qualitative variable describes categories, such as the type of transport used; a quantitative variable describes a count or a measurement. A count is a discrete quantitative variable, whereas a measurement such as duration is normally treated as continuous. The **absolute frequency** $n_i$ counts how many observations belong to category or value $i$. The relative frequency is $f_i=\dfrac{n_i}{N}$, where $N$ is the total.

If the categories cover all cases and do not overlap, absolute frequencies sum to $N$ and relative frequencies sum to $1$. The percentage frequency is $100f_i\%$. With $12$ defective items out of $80$, $f=\dfrac{12}{80}=0.15$, so the percentage is $15\%$. The denominator must correspond to the group referred to by the question.
:::

:::definizione{#frequenze-cumulative titolo="Cumulative frequencies"}
For ordered values, the cumulative frequency up to a value counts observations no greater than that value. If the cumulative frequencies up to $2$ and up to $3$ are $13$ and $18$, there are $18-13=5$ observations equal to $3$. A cumulative frequency is nondecreasing, since adding values cannot reduce the count. The last cumulative frequency equals the total.
:::

:::definizione{#istogrammi titolo="Charts and histograms"}
In a pie chart, a category with relative frequency $f$ occupies an angle of $360f$ degrees. In a bar chart for categories, heights represent frequencies. In a histogram with unequal class widths, frequency is instead represented by the **area** of the rectangle. Height is a density, equal to the frequency divided by the class width.

A class of width $2$ and density $8$ contains $16$ observations; a class of width $5$ and density $4$ contains $20$. The taller rectangle can therefore represent fewer observations. Endpoint conventions such as $[0,10)$ and $[10,20)$ assign each observation to exactly one class: the value $10$ belongs to the second.

::grafico{poligoni="0,0 2,0 2,8 0,8;2,0 7,0 7,4 2,4;7,0 11,0 11,3 7,3" xmin=-1 xmax=12 ymin=-1 ymax=9 nomi="x,d" titolo="The rectangle areas are 16, 20 and 12; their heights are densities."}
:::

:::esempio{titolo="Exact information and grouped data"}
A table with classes $[0,10)$ and $[10,20)$, having frequencies $4$ and $6$, tells us that $4$ observations are below $10$. It does not determine how many are below $5$: all four, none or only some could be. Using each class midpoint to calculate a mean gives an estimate, because the individual values are unknown. The distinction between an exact result and an estimate depends on the information retained in the table.
:::

## Mean, median and mode

:::definizione{#media titolo="Arithmetic and weighted means"}
The **arithmetic mean** of $N$ values is $\bar x=\dfrac{x_1+\cdots+x_N}{N}$. The product $N\bar x$ recovers their sum. If each value $v_i$ occurs $n_i$ times, the mean is $\bar x=\dfrac{\sum_i n_iv_i}{\sum_i n_i}$. Frequencies act as weights because a repeated value contributes to the sum more than once.

To combine groups of different sizes, weight their means in the same way. A group of $20$ people with mean $24$ and a group of $10$ with mean $27$ have total sum $20\cdot24+10\cdot27=750$ and total size $30$, so the combined mean is $25$. Taking the simple mean of the two means would give the same result only for equal group sizes, apart from special coincidences.
:::

:::definizione{#mediana-moda titolo="Median and mode"}
The **median** is calculated after sorting the observations. With an odd number of observations it is the central value; with an even number it is the arithmetic mean of the two central values. For $4,7,2,13,6,8$, the sorted order is $2,4,6,7,8,13$ and the median is $\dfrac{6+7}{2}=6.5$. The central position cannot be identified in an unsorted list.

The mode is the value with the highest frequency and need not be unique. In a table with values $0,1,2,3$ and frequencies $4,7,5,3$, the mode is $1$, while $7$ is its frequency. The mean uses every value; the median depends on order; the mode depends on frequencies. Changing an extreme observation can greatly affect the mean while leaving the median unchanged.
:::

:::esempio{titolo="A missing or removed observation"}
Five measurements with mean $18$ sum to $90$. If a measurement of $26$ is removed, the remaining four sum to $64$ and have mean $16$. The new divisor is $4$, because the number of observations has changed. If a value is added instead, both the sum and the number of observations increase: both changes must be taken into account.
:::

## Spread and transformations of data

:::definizione{#varianza titolo="Descriptive variance and standard deviation"}
The **descriptive variance**, using divisor $N$, is
$$
\sigma^2=\frac1N\sum_{i=1}^N(x_i-\bar x)^2.
$$
It averages the squared deviations, so it is always nonnegative. In contrast, the sum of the unsquared deviations is zero and does not measure spread. The standard deviation is $\sigma=\sqrt{\sigma^2}$ and has the same units as the data; variance has squared units. For $N>1$, a different quantity uses divisor $N-1$: the problem must specify the convention required.

For the data $2,4,6$, the mean is $4$, the deviations are $-2,0,2$ and the descriptive variance is $\dfrac{4+0+4}{3}=\dfrac83$. Expanding the squares and using $\sum_i x_i=N\bar x$ also gives $\sigma^2=\dfrac{\sum_i x_i^2}{N}-\bar x^2$: the mean of the squares minus the square of the mean. The two formulas describe the same quantity.

The range is instead the maximum minus the minimum, namely $6-2=4$, and uses only the two extreme values.
:::

:::teorema{#trasformazioni-dati titolo="Effect of an affine transformation"}
If every observation is transformed by $y_i=ax_i+b$, the new mean is $\bar y=a\bar x+b$, the new variance is $\sigma_y^2=a^2\sigma_x^2$ and the standard deviation is $\sigma_y=|a|\sigma_x$. Indeed, $y_i-\bar y=a(x_i-\bar x)$: translation cancels in the deviations, and multiplication is squared in the variance.

Adding $3$ to all observations increases the mean by $3$ without changing their spread. Doubling all observations doubles the standard deviation and multiplies the variance by four. Replicating each observation the same number of times leaves the mean and descriptive variance unchanged, because each numerator and its divisor are multiplied by the same factor. Combining groups with zero variances may instead produce positive variance if their common values differ: spread must be measured relative to the new combined mean.

Zero variance means that all squared deviations are zero, so every observation equals the mean.
:::

## Counting, order and repetition

:::definizione{#principi-conteggio titolo="The product rule and alternative cases"}
If a choice has several stages and every outcome of the first stage allows $m$ possibilities at the second, multiply to find the total. With $3$ starters, $5$ main courses and $2$ desserts, choosing one dish from each category produces $3\cdot5\cdot2=30$ meals. If one dish is chosen from either main courses or desserts instead, there are $5+2=7$ alternatives.

Addition applies to disjoint alternative cases; multiplication applies to successive stages. If cases overlap, subtract the size of their intersection. Among the integers from $1$ to $20$, there are $10$ multiples of $2$, $4$ multiples of $5$ and $2$ multiples of both, giving $12$ distinct integers in total.
:::

:::definizione{#permutazioni-combinazioni titolo="Arrangements, permutations and combinations"}
The factorial $n!$ is the product $n(n-1)\cdots1$ for $n\ge1$, with the convention $0!=1$. In the following counts, $n$ and $k$ are integers satisfying $0\le k\le n$. Ordering $n$ distinct objects gives $n!$ possibilities. Choosing $k$ of them for different roles or positions, without repetition, gives $n(n-1)\cdots(n-k+1)$. If order does not matter, every group has been counted $k!$ times, so the number of combinations is $\binom nk=\dfrac{n!}{k!(n-k)!}$. A pair from five people can be chosen in $10$ ways; a president and a secretary from the same people can be appointed in $20$ ways.

With independent repetition, $k$ positions and $n$ symbols give $n^k$ sequences. For repeated letters in a word, instead divide $n!$ by the factorials of the multiplicities: MAMMA has $\dfrac{5!}{3!2!}=10$ distinct arrangements. Conditions such as “at least one” can be handled by counting the total and subtracting excluded cases. Counts describe possibilities; turning them into probabilities requires further assumptions about the random model.
:::

:::esempio{titolo="Restrictions on the first position and neighboring positions"}
Using the digits $0,1,2,3,4$, there are $4\cdot4\cdot3=48$ three-digit numbers with distinct digits. The first digit has four possibilities because it cannot be zero; the second has four because it may be zero but cannot repeat the first; the third has three. The restrictions therefore depend on the position.

If five distinct people must stand in a row and two specified people must be next to each other, initially treat those two as one block. Arrange four objects in $4!$ ways; the block itself has two possible internal orders. The total is $2\cdot4!=48$. Simply reducing the number of people by one is insufficient: the internal order must also be counted.
:::
