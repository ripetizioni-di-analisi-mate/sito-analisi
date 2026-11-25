---
titolo: Trigonometry and solving triangles
sommario: The theorems relating the sides and angles of a triangle (right triangles, the sine formula for area, the chord length theorem, the law of sines, and the law of cosines), the four cases of solving a triangle, including the ambiguous case, and applications to distances, heights, forces, and problems with a variable angle.
---

## Parts of a triangle

:::definizione{#elementi-triangolo titolo="Sides and angles of a triangle"}
In a triangle $ABC$, the symbols $\alpha$, $\beta$, and $\gamma$ denote the measures of the angles at vertices $A$, $B$, and $C$, and $a$, $b$, and $c$ denote the lengths of the sides **opposite** those vertices. Thus side $a = BC$ is opposite angle $\alpha$, side $b = CA$ is opposite angle $\beta$, and side $c = AB$ is opposite angle $\gamma$. Each angle is **included** between the two sides that share its vertex. For example, $\alpha$ is included between $b$ and $c$.

::grafico{assi=0 curve="0+0.6*cos(t),0+0.6*sin(t),0,1.052;6+0.6*cos(t),0+0.6*sin(t),2.423,3.142;2+0.6*cos(t),3.5+0.6*sin(t),-2.09,-0.719" linee="0,0 6,0 2,3.5 0,0" etichette="0.986,0.572,α;4.933,0.401,β;2.189,2.376,γ;-0.412,-0.18,A;6.425,-0.149,B;1.876,3.933,C;4.366,1.91,a;0.622,1.882,b;3.11,-0.385,c" xmin=-1 xmax=7 ymin=-1 ymax=4.5 uguale=1 titolo="In a triangle, side $a$ is opposite vertex $A$ and angle $\alpha$, side $b$ is opposite $\beta$, and side $c$ is opposite $\gamma$"}

The angles of a triangle are positive and add up to $180^\circ$, or $\pi$ radians:
$$
\alpha + \beta + \gamma = 180^\circ .
$$
Thus two angles determine the third. If $\alpha = 40^\circ$ and $\beta = 65^\circ$, then $\gamma = 180^\circ - 40^\circ - 65^\circ = 75^\circ$. In problems involving triangles, angles are often given in degrees. Equations with an unknown angle use radians.
:::

:::teorema{#disuguaglianza-triangolare titolo="Triangle inequality and the order of the sides"}
In every triangle, each side is shorter than the sum of the other two and longer than their difference:
$$
|b - c| < a < b + c .
$$
Moreover, a longer side lies opposite a larger angle, and conversely. In symbols, $a > b$ if and only if $\alpha > \beta$.

Both properties are theorems from the Euclidean geometry of the first two years of high school. The first determines whether three positive numbers can be the side lengths of a triangle. The numbers $4$, $5$, and $7$ can, since $7 < 4 + 5$. The numbers $2$, $3$, and $6$ cannot, since $6 > 2 + 3$. The second property identifies the largest angle before we calculate it. In the triangle with sides $4$, $5$, and $7$, the largest angle is opposite the side of length $7$.
:::

:::definizione{#risolvere-triangolo titolo="Solving a triangle"}
**Solving a triangle** means finding the measures of all its sides and angles from the known measures. By the triangle congruence criteria, three measurements suffice if at least one is a side. Three angles determine only the shape, since similar triangles have the same angles and can have different side lengths.

Trigonometry provides formulas relating side lengths to the trigonometric functions of the angles, so it turns the congruence criteria into calculations. For example, the first criterion states that two sides and the included angle determine a triangle. The law of cosines gives a formula for finding the third side.
:::

## Right triangles

:::richiamo{titolo="Sine and cosine on the unit circle"}
Let $P$ be the point on the unit circle such that the radius $OP$ makes an angle $x$ with the positive horizontal axis. Then
$$
P = (\cos x, \sin x), \qquad \sin^2 x + \cos^2 x = 1, \qquad \tan x = \frac{\sin x}{\cos x} .
$$
:::

::::teorema{#primo-teorema-rettangoli titolo="First right-triangle theorem"}
Let $ABC$ be a triangle with a right angle at $A$, hypotenuse $a$, and legs $b$ and $c$. The length of a leg equals the hypotenuse times the sine of the angle opposite that leg, or the hypotenuse times the cosine of the acute angle adjacent to that leg:
$$
b = a\sin\beta = a\cos\gamma , \qquad c = a\sin\gamma = a\cos\beta .
$$
This theorem gives the leg lengths when the hypotenuse and one acute angle are known. If $a = 10$ and $\beta = 30^\circ$, then $b = 10\sin 30^\circ = 5$ and $c = 10\cos 30^\circ = 5\sqrt{3}$. The Pythagorean theorem confirms the result, since $25 + 75 = 100$.

::grafico{assi=0 curve="2*cos(t),2*sin(t),0,1.5708;0+0.6*cos(t),0+0.6*sin(t),0,0.644" linee="4,0 0,0 4,3 4,0;3.65,0 3.65,0.35 4,0.35" segmenti="1.6,1.2,1.6,0" punti="1.6,1.2,pieno;1.6,0,pieno" etichette="1.081,0.36,β;4.36,-0.27,A;-0.421,-0.158,B;4.25,3.374,C;1.68,1.74,a;4.375,1.64,b;2.9,-0.333,c;1.45,1.5,P;1.6,-0.35,H;0.5,0.95,1" xmin=-1 xmax=5 ymin=-1 ymax=4 uguale=1 titolo="Arc of the unit circle with center $B$ and radius $1$. The point $P$ has coordinates $(\cos\beta, \sin\beta)$ and triangle $BHP$ is similar to triangle $BAC$"}

:::dimostrazione
The idea is to compare the triangle with a similar triangle whose hypotenuse has length $1$. Draw the unit circle with its center at vertex $B$ and its horizontal axis along leg $BA$. Ray $BC$ makes an angle $\beta$ with the axis, so it intersects the circle at the point $P = (\cos\beta, \sin\beta)$. Let $H$ be the projection of $P$ onto leg $BA$. Then $BP = 1$, $PH = \sin\beta$, and $BH = \cos\beta$.

Triangles $BHP$ and $BAC$ have right angles at $H$ and $A$ respectively and share angle $\beta$, so they are similar. Corresponding sides of similar triangles are proportional, so
$$
\frac{CA}{BC} = \frac{PH}{BP} = \frac{\sin\beta}{1} , \qquad \frac{BA}{BC} = \frac{BH}{BP} = \frac{\cos\beta}{1} .
$$
Since $CA = b$, $BA = c$, and $BC = a$, we obtain $b = a\sin\beta$ and $c = a\cos\beta$. The acute angles of a right triangle are complementary, that is, $\gamma = 90^\circ - \beta$. The identities for complementary angles give $\sin\gamma = \cos\beta$ and $\cos\gamma = \sin\beta$, from which the other two equalities follow.
:::
::::

::::teorema{#secondo-teorema-rettangoli titolo="Second right-triangle theorem"}
Let $ABC$ be a triangle with a right angle at $A$. The length of one leg equals the length of the other times the tangent of the angle opposite the first leg, or times the cotangent of the angle adjacent to the first leg:
$$
b = c\tan\beta = c\cot\gamma , \qquad c = b\tan\gamma = b\cot\beta .
$$
This theorem relates the two legs directly. If $c = 12$ and $\beta = 60^\circ$, then $b = 12\tan 60^\circ = 12\sqrt{3}$. The hypotenuse follows from the first theorem, giving $a = \dfrac{c}{\cos\beta} = \dfrac{12}{\dfrac{1}{2}} = 24$.

:::dimostrazione
The idea is to divide the corresponding sides of the two equations in the first theorem. Since $b = a\sin\beta$ and $c = a\cos\beta$, with $c \neq 0$ and $\cos\beta \neq 0$ because $\beta$ is acute, we have
$$
\frac{b}{c} = \frac{a\sin\beta}{a\cos\beta} = \tan\beta .
$$
Therefore $b = c\tan\beta$. Since $\gamma = 90^\circ - \beta$, we have $\tan\beta = \cot\gamma$, which gives $b = c\cot\gamma$. To obtain the formulas for $c$, interchange $b$ and $c$.
:::
::::

:::teorema{#risoluzione-rettangoli titolo="Solving right triangles"}
Let $ABC$ have a right angle at $A$. In addition to the right angle, two measurements suffice if at least one is a side. There are four cases.

- **The hypotenuse and one acute angle.** The other angle is its complement, and the first theorem gives the legs.
- **One leg and one acute angle.** The second theorem gives the other leg and the first gives the hypotenuse, for example $a = \dfrac{b}{\sin\beta}$.
- **Both legs.** The Pythagorean theorem gives the hypotenuse, and the second theorem gives the angle through $\tan\beta = \dfrac{b}{c}$, so $\beta = \arctan\dfrac{b}{c}$.
- **The hypotenuse and one leg.** The Pythagorean theorem gives the other leg, and the first theorem gives the angle through $\sin\beta = \dfrac{b}{a}$, so $\beta = \arcsin\dfrac{b}{a}$.

In the last two cases, the angle is generally found using a calculator. The angle $\beta$ is acute, so it is precisely the angle given by $\arctan$ or $\arcsin$, whose values lie between $0^\circ$ and $90^\circ$ when the argument is positive.
:::

:::esempio{titolo="Given both legs or the hypotenuse and one leg"}
A triangle with a right angle at $A$ has legs $b = 5$ and $c = 12$. By the Pythagorean theorem, $a = \sqrt{25 + 144} = 13$. By the second theorem, $\tan\beta = \dfrac{5}{12}$, so $\beta = \arctan\dfrac{5}{12} \approx 22.62^\circ$ and $\gamma = 90^\circ - \beta \approx 67.38^\circ$.

Another triangle with a right angle at $A$ has hypotenuse $a = 10$ and leg $b = 6$. By the Pythagorean theorem, $c = \sqrt{100 - 36} = 8$. By the first theorem, $\sin\beta = \dfrac{6}{10} = \dfrac{3}{5}$, so $\beta = \arcsin\dfrac{3}{5} \approx 36.87^\circ$ and $\gamma \approx 53.13^\circ$.
:::

:::attenzione
The formulas $\sin\beta = \dfrac{b}{a}$ and $\cos\beta = \dfrac{c}{a}$ hold only for *right* triangles with hypotenuse $a$. In the triangle with sides $a = 7$, $b = 5$, and $c = 8$, which has no right angle, the ratio $\dfrac{c}{a} = \dfrac{8}{7}$ is greater than $1$ and cannot be the cosine of an angle. For general triangles, we use the law of sines and the law of cosines.
:::

## Area of a triangle

:::richiamo{titolo="Supplementary angles"}
For every angle $x$, we have $\sin(\pi - x) = \sin x$ and $\cos(\pi - x) = -\cos x$.
:::

::::teorema{#area-triangolo titolo="Area from two sides and the included angle"}
The area $S$ of a triangle equals half the product of two sides times the sine of their included angle:
$$
S = \frac{1}{2}\,ab\sin\gamma = \frac{1}{2}\,bc\sin\alpha = \frac{1}{2}\,ac\sin\beta .
$$
This formula gives the area without finding an altitude. If $a = 8$, $b = 5$, and $\gamma = 30^\circ$, then $S = \dfrac{1}{2} \cdot 8 \cdot 5 \cdot \dfrac{1}{2} = 10$. If instead $a = 6$, $b = 4$, and $\gamma = 120^\circ$, then $S = \dfrac{1}{2} \cdot 6 \cdot 4 \cdot \dfrac{\sqrt{3}}{2} = 6\sqrt{3}$.

::grafico{assi=0 curve="0+0.6*cos(t),0+0.6*sin(t),0,1.052" linee="2,3.5 6,0 0,0 2,3.5;2.3,0 2.3,0.3 2,0.3" segmenti="2,3.5,2,0" etichette="0.986,0.572,γ;1.876,3.933,A;6.425,-0.149,B;-0.412,-0.18,C;3.11,-0.385,a;0.622,1.882,b;4.366,1.91,c;2.3,1.4,h;2,-0.45,H" xmin=-1 xmax=7 ymin=-1 ymax=4.5 uguale=1 titolo="When $\gamma$ is acute, the foot $H$ of the altitude lies on side $a$, and $h = b\sin\gamma$"}

::grafico{assi=0 curve="0+0.7*cos(t),0+0.7*sin(t),0,2.159;0+1.2*cos(t),0+1.2*sin(t),2.159,3.142" linee="-3,4.5 7.5,0 0,0 -3,4.5;-2.6,0 -2.6,0.4 -3,0.4" segmenti="-3,4.5,-3,0;-3,0,0,0" etichette="0.52,0.97,γ;-3.35,4.85,A;7.9,-0.15,B;0.1,-0.45,C;3.75,-0.4,a;-2,2,b;2.43,2.66,c;-3.4,2.25,h;-3,-0.45,H;-2.3,0.45,π − γ" xmin=-5 xmax=8.5 ymin=-1.2 ymax=5.5 uguale=1 titolo="When $\gamma$ is obtuse, the foot $H$ lies on the extension of $a$, and $h = b\sin(\pi - \gamma) = b\sin\gamma$"}

:::dimostrazione
The idea is to express the altitude to side $a$ using the first right-triangle theorem. Let $h = AH$ be the altitude from $A$ to line $BC$, so that $S = \dfrac{1}{2}\,a\,h$.

- If $\gamma$ is acute, triangle $AHC$ has a right angle at $H$ and hypotenuse $AC = b$, and its angle at $C$ is $\gamma$. By the first theorem, $h = b\sin\gamma$.
- If $\gamma$ is obtuse, $H$ lies on the extension of side $BC$ beyond $C$. Triangle $AHC$ has a right angle at $H$, and its angle at $C$ is the supplementary angle $\pi - \gamma$. The first theorem gives $h = b\sin(\pi - \gamma)$, and since $\sin(\pi - \gamma) = \sin\gamma$, we again obtain $h = b\sin\gamma$.
- If $\gamma$ is a right angle, $H = C$ and $h = b = b\sin 90^\circ$.

In every case, $S = \dfrac{1}{2}\,a\,b\sin\gamma$. The other two formulas follow in the same way using the altitudes to $b$ and $c$.
:::
::::

:::esempio{titolo="Parallelogram and regular hexagon"}
A diagonal divides a parallelogram into two congruent triangles, each with two sides equal to sides of the parallelogram and an included angle equal to one of its angles. The area of the parallelogram with sides $p$ and $q$ and included angle $\theta$ is therefore twice the area of one triangle:
$$
S = 2 \cdot \frac{1}{2}\,pq\sin\theta = pq\sin\theta .
$$
With $p = 7$, $q = 4$, and $\theta = 45^\circ$, we obtain $S = 28 \cdot \dfrac{\sqrt{2}}{2} = 14\sqrt{2}$.

Joining the center of a regular hexagon of side $\ell$ to its vertices divides it into six triangles with two sides of length $\ell$ and an included angle of $60^\circ$. Its area is therefore $6 \cdot \dfrac{1}{2}\,\ell^2 \sin 60^\circ = \dfrac{3\sqrt{3}}{2}\,\ell^2$. For $\ell = 2$, the area is $6\sqrt{3}$.
:::

## Chord length theorem

:::richiamo{titolo="Inscribed angles"}
Inscribed angles that intercept the same arc are equal. An inscribed angle that intercepts a semicircle is a right angle. Opposite angles of a quadrilateral inscribed in a circle are supplementary.
:::

::::teorema{#teorema-corda titolo="Chord length theorem"}
In a circle of radius $r$, the length of a chord $AB$ equals the diameter times the sine of any inscribed angle subtended by the chord:
$$
AB = 2r\sin\alpha .
$$
The inscribed angles subtended by $AB$ have their vertices on one of the two arcs with endpoints $A$ and $B$. Those with vertices on one arc all equal $\alpha$, while those with vertices on the other arc equal $180^\circ - \alpha$, and the two values have the same sine. For example, in a circle of radius $5$, a chord that subtends an angle of $30^\circ$ at a point on the circle has length $AB = 10\sin 30^\circ = 5$, while a chord that subtends an angle of $120^\circ$ has length $10\sin 120^\circ = 5\sqrt{3}$.

::grafico{assi=0 curve="3*cos(t),3*sin(t),0,6.29;-2.598+0.6*cos(t),1.5+0.6*sin(t),-1.571,-0.524;0.776+0.6*cos(t),2.898+0.6*sin(t),-2.225,-1.178" linee="-2.598,-1.5 2.598,-1.5 -2.598,1.5 -2.598,-1.5;-2.298,-1.5 -2.298,-1.2 -2.598,-1.2" segmenti="0.776,2.898,-2.598,-1.5;0.776,2.898,2.598,-1.5" punti="0,0,pieno" etichette="-2.988,-1.725,A;2.988,-1.725,B;-2.988,1.725,A′;0.893,3.332,P;-2.028,0.513,α;0.628,1.768,α;0.25,0.35,O;-1.35,1.1,2r" xmin=-4 xmax=4 ymin=-4 ymax=4 uguale=1 titolo="Chord $AB$ and diameter $BA'$. The angles at $P$ and $A'$ intercept arc $AB$ and are equal, and triangle $ABA'$ has a right angle at $A$"}

:::dimostrazione
The idea is to replace the angle $\alpha$ with an equal angle in a right triangle. Let $P$ be the vertex of angle $\alpha$ and let $A'$ be the point diametrically opposite $B$, so that $BA' = 2r$.

- If $\alpha$ is acute, $A'$ lies on the same arc as $P$. Indeed, angle $AA'B$ is acute because it is an acute angle of triangle $ABA'$, which has a right angle at $A$, whereas inscribed angles with vertices on the other arc are supplementary to it and therefore obtuse. The angles at $P$ and $A'$ intercept the same arc, so the angle at $A'$ equals $\alpha$. Triangle $ABA'$ has a right angle at $A$ because the angle at $A$ intercepts semicircle $BA'$. By the first right-triangle theorem, leg $AB$ equals hypotenuse $BA'$ times the sine of the opposite angle, that is, $AB = 2r\sin\alpha$.
- If $\alpha$ is obtuse, $P$ and $A'$ lie on different arcs, and $APBA'$ is an inscribed quadrilateral. The angles at $P$ and $A'$ are opposite, so the angle at $A'$ equals $\pi - \alpha$. As in the previous case, $AB = 2r\sin(\pi - \alpha) = 2r\sin\alpha$.
- If $\alpha$ is a right angle, chord $AB$ is a diameter and $AB = 2r = 2r\sin 90^\circ$.
:::
::::

:::osservazione{#angolo-al-centro titolo="Chord and central angle"}
The central angle that intercepts arc $AB$ is twice the inscribed angle that intercepts the same arc. If the central angle is $\theta$, with $0 < \theta < \pi$, the chord length is therefore $AB = 2r\sin\dfrac{\theta}{2}$. The same formula follows by drawing the altitude of isosceles triangle $AOB$, which bisects $\theta$ and the chord. In a circle of radius $4$, the chord corresponding to a central angle of $90^\circ$ has length $8\sin 45^\circ = 4\sqrt{2}$, the side length of the inscribed square.
:::

## Law of sines

::::teorema{#teorema-seni titolo="Law of sines"}
In every triangle, the sides are proportional to the sines of the opposite angles, and the constant ratio equals the diameter $2R$ of the circumcircle:
$$
\frac{a}{\sin\alpha} = \frac{b}{\sin\beta} = \frac{c}{\sin\gamma} = 2R .
$$
We use this law when a side and its opposite angle are known, or when two angles and one side are known. If $a = 10$, $\alpha = 45^\circ$, and $\beta = 60^\circ$, then
$$
b = \frac{a\sin\beta}{\sin\alpha} = \frac{10 \cdot \dfrac{\sqrt{3}}{2}}{\dfrac{\sqrt{2}}{2}} = \frac{10\sqrt{3}}{\sqrt{2}} = 5\sqrt{6} , \qquad 2R = \frac{10}{\dfrac{\sqrt{2}}{2}} = 10\sqrt{2} ,
$$
so the radius of the circumcircle is $R = 5\sqrt{2}$.

:::dimostrazione
The idea is to view each side as a chord of the circumcircle. Let $R$ be the radius of the circle through $A$, $B$, and $C$. Side $a = BC$ is a chord of this circle, and angle $\alpha$ has its vertex $A$ on the circle and is subtended by chord $BC$. By the chord length theorem, $a = 2R\sin\alpha$. Since $0 < \alpha < \pi$, we have $\sin\alpha > 0$, so we can divide to obtain $\dfrac{a}{\sin\alpha} = 2R$. Applying the same reasoning to chords $CA$ and $AB$ gives $\dfrac{b}{\sin\beta} = 2R$ and $\dfrac{c}{\sin\gamma} = 2R$.
:::
::::

:::esempio{titolo="One side and two angles"}
In the triangle with $a = 10$, $\alpha = 45^\circ$, and $\beta = 60^\circ$, the third angle is $\gamma = 180^\circ - 45^\circ - 60^\circ = 75^\circ$. The addition formula gives the value $\sin 75^\circ = \dfrac{\sqrt{6} + \sqrt{2}}{4}$, as shown in the chapter on trigonometric identities. By the law of sines,
$$
c = \frac{a\sin\gamma}{\sin\alpha} = 10 \cdot \frac{\sqrt{6} + \sqrt{2}}{4} \cdot \frac{2}{\sqrt{2}} = 5\left( \sqrt{3} + 1 \right) \approx 13.66 .
$$
The longest side is $c$, opposite the largest angle $\gamma$, as expected from the ordering of the sides.
:::

:::teorema{#raggio-circoscritto titolo="Radius of the circumcircle"}
The radius $R$ of the circumcircle of a triangle of area $S$ is
$$
R = \frac{a}{2\sin\alpha} = \frac{abc}{4S} .
$$
The first formula is the law of sines. To obtain the second, substitute $\sin\gamma = \dfrac{c}{2R}$ into the area formula to get $S = \dfrac{1}{2}\,ab \cdot \dfrac{c}{2R} = \dfrac{abc}{4R}$, then solve for $R$. For the right triangle with sides $6$, $8$, and $10$, the area is $24$, so $R = \dfrac{6 \cdot 8 \cdot 10}{4 \cdot 24} = 5$. This result is half the hypotenuse because the hypotenuse of a right triangle is a diameter of its circumcircle.
:::

## Law of cosines

:::richiamo{titolo="Distance between two points"}
The distance between the points $P(x_1, y_1)$ and $Q(x_2, y_2)$ in the coordinate plane is
$$
PQ = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} .
$$
:::

::::teorema{#teorema-coseno titolo="Law of cosines"}
In every triangle, the square of one side equals the sum of the squares of the other two sides minus twice their product times the cosine of the included angle:
$$
a^2 = b^2 + c^2 - 2bc\cos\alpha , \qquad b^2 = a^2 + c^2 - 2ac\cos\beta , \qquad c^2 = a^2 + b^2 - 2ab\cos\gamma .
$$
This theorem is also known as **Carnot's theorem**. We use it to find the third side when two sides and the included angle are known, and to find an angle when all three sides are known. If $b = 5$, $c = 8$, and $\alpha = 60^\circ$, then
$$
a^2 = 25 + 64 - 2 \cdot 5 \cdot 8 \cdot \frac{1}{2} = 49 ,
$$
so $a = 7$.

::grafico{curve="0+0.6*cos(t),0+0.6*sin(t),0,1.047" linee="0,0 6,0 2,3.464 0,0" segmenti="2,3.464,2,0" punti="0,0,pieno,A;6,0,pieno,B;2,3.464,pieno,C" etichette="0.987,0.57,α;4.367,1.891,a;0.622,1.863,b;4.6,0.3,c" xmin=-1 xmax=7 ymin=-1 ymax=5 uguale=1 titolo="With $A$ at the origin and $B$ on the $x$-axis, vertex $C$ has coordinates $(b\cos\alpha, b\sin\alpha)$"}

:::dimostrazione
The idea is to place the triangle in the coordinate plane and find the side length $a$ as the distance between two vertices. Choose the axes so that $A$ is at the origin and $B$ lies on the positive horizontal axis, so $A = (0, 0)$ and $B = (c, 0)$. Side $AC$ has length $b$ and makes an angle $\alpha$ with the positive horizontal axis. By the definitions of sine and cosine, vertex $C$ has coordinates $(b\cos\alpha, b\sin\alpha)$, even when $\alpha$ is obtuse. By the distance formula,
$$
\begin{aligned}
a^2 = BC^2 &= (b\cos\alpha - c)^2 + (b\sin\alpha)^2 \\[6pt]
&= b^2\cos^2\alpha - 2bc\cos\alpha + c^2 + b^2\sin^2\alpha \\[6pt]
&= b^2\left( \cos^2\alpha + \sin^2\alpha \right) + c^2 - 2bc\cos\alpha \\[6pt]
&= b^2 + c^2 - 2bc\cos\alpha ,
\end{aligned}
$$
where the last step uses the fundamental identity $\cos^2\alpha + \sin^2\alpha = 1$. The other two formulas follow by placing vertex $B$ or vertex $C$ at the origin.
:::
::::

:::teorema{#coseno-di-un-angolo titolo="Finding an angle from the three sides"}
Solving the law of cosines for the cosine gives
$$
\cos\alpha = \frac{b^2 + c^2 - a^2}{2bc} ,
$$
with analogous formulas for $\beta$ and $\gamma$. Since $0 < \alpha < \pi$, the value of $\cos\alpha$ determines a unique angle, $\alpha = \arccos\dfrac{b^2 + c^2 - a^2}{2bc}$. The sign of the numerator also identifies the type of angle:

- $\alpha$ is acute if and only if $a^2 < b^2 + c^2$.
- $\alpha$ is a right angle if and only if $a^2 = b^2 + c^2$.
- $\alpha$ is obtuse if and only if $a^2 > b^2 + c^2$.

When $\alpha = 90^\circ$, we have $\cos\alpha = 0$, and the law of cosines becomes the Pythagorean theorem. For this reason, the law of cosines is considered a generalization of the Pythagorean theorem. In a triangle with sides $4$, $5$, and $7$, the longest side satisfies $49 > 16 + 25$, so the opposite angle is obtuse and equals $\arccos\left( -\dfrac{1}{5} \right) \approx 101.54^\circ$.
:::

:::attenzione
An obtuse angle and its supplement have the same sine, so the law of sines alone cannot distinguish an acute angle from an obtuse one. In a triangle with sides $a = 3$, $b = 5$, and $c = 7$, the law of cosines gives $\cos\gamma = \dfrac{9 + 25 - 49}{30} = -\dfrac{1}{2}$, so $\gamma = 120^\circ$. The law of sines gives $\sin\gamma = \dfrac{\sqrt{3}}{2}$, and the calculator returns $\arcsin\dfrac{\sqrt{3}}{2} = 60^\circ$, which is the wrong angle. For this reason, we use the law of cosines to find the angle opposite the longest side.
:::

## Solving general triangles

:::teorema{#quattro-casi titolo="The four cases for solving triangles"}
A general triangle can be solved from three measurements if at least one is a side. There are four cases, each with an appropriate theorem.

- **One side and two angles.** The third angle equals $180^\circ$ minus the sum of the other two. The law of sines gives the remaining sides.
- **Two sides and the included angle.** The law of cosines gives the third side. Apply the law of cosines again to find the angle opposite the longest side, then find the third angle by subtraction.
- **Three sides.** A triangle exists if and only if the triangle inequality holds. Use the law of cosines to find two angles and subtraction to find the third.
- **Two sides and the angle opposite one of them.** The law of sines gives the sine of a second angle, and there can be zero, one, or two triangles. This is the **ambiguous case**.

In the first three cases, if a triangle exists, it is unique, in agreement with the congruence criteria.
:::

:::esempio{titolo="Two sides and the included angle"}
We solve the triangle with $b = 5$, $c = 8$, and $\alpha = 60^\circ$. By the law of cosines, $a = 7$. The longest side is $c$, so we find $\gamma$ first:
$$
\cos\gamma = \frac{a^2 + b^2 - c^2}{2ab} = \frac{49 + 25 - 64}{70} = \frac{1}{7} , \qquad \gamma = \arccos\frac{1}{7} \approx 81.79^\circ .
$$
The third angle is $\beta = 180^\circ - 60^\circ - \gamma \approx 38.21^\circ$. As a check, $\cos\beta = \dfrac{a^2 + c^2 - b^2}{2ac} = \dfrac{88}{112} = \dfrac{11}{14}$, and $\arccos\dfrac{11}{14} \approx 38.21^\circ$.
:::

:::esempio{titolo="Three sides"}
We solve the triangle with $a = 3$, $b = 5$, and $c = 7$. The triangle inequality holds because $7 < 3 + 5$. The angle opposite the longest side is $\gamma = 120^\circ$, as we found using the law of cosines. For angle $\alpha$, we have
$$
\cos\alpha = \frac{b^2 + c^2 - a^2}{2bc} = \frac{25 + 49 - 9}{70} = \frac{13}{14} , \qquad \alpha \approx 21.79^\circ ,
$$
and therefore $\beta = 180^\circ - 120^\circ - \alpha \approx 38.21^\circ$.
:::

::::teorema{#caso-ambiguo titolo="The ambiguous case"}
Suppose sides $a$ and $b$ and angle $\alpha$, opposite $a$, are known. Let $h = b\sin\alpha$ be the distance from vertex $C$ to the line containing side $c$.

- If $\alpha$ is acute:
  - when $a < h$, no triangle exists.
  - when $a = h$, exactly one triangle exists, with a right angle at $B$.
  - when $h < a < b$, two triangles exist.
  - when $a \geq b$, exactly one triangle exists.
- If $\alpha$ is a right or obtuse angle, a triangle exists if and only if $a > b$, and in that case it is unique.

The law of sines gives $\sin\beta = \dfrac{b\sin\alpha}{a} = \dfrac{h}{a}$. When there are two triangles, the two values of $\beta$ are the acute angle $\beta_1 = \arcsin\dfrac{h}{a}$ and its supplement $\beta_2 = 180^\circ - \beta_1$.

::grafico{assi=0 curve="3.464+2.5*cos(t),2+2.5*sin(t),-2.564,-0.577;0+0.8*cos(t),0+0.8*sin(t),0,0.524" linee="0,0 3.464,2 1.964,0;3.464,2 4.964,0;0,0 5.6,0" segmenti="3.464,2,3.464,0" punti="1.964,0,pieno;4.964,0,pieno" etichette="1.391,0.373,α;-0.3,-0.3,A;3.464,2.35,C;1.964,-0.4,B₁;4.964,-0.4,B₂;1.432,1.3,b;3.714,1,h;2.364,1.1,a;4.564,1.1,a" xmin=-1 xmax=6 ymin=-1 ymax=3 uguale=1 titolo="With $\alpha = 30^\circ$, $b = 8$, and $a = 5$, the arc with center $C$ and radius $a$ intersects the ray from $A$ at two points because $h = 4 < a < b$"}

:::dimostrazione
The idea is to construct the triangle with a straightedge and compass. Draw the angle $\alpha$ with vertex $A$ and, on one of its sides, the point $C$ with $AC = b$. Vertex $B$ lies on the other side of the angle, a ray starting at $A$, and is at a distance $a$ from $C$. Therefore $B$ is a point where the circle with center $C$ and radius $a$ intersects this ray. By the first right-triangle theorem, the line containing the ray lies a distance $h = b\sin\alpha$ from $C$.

Suppose $\alpha$ is acute. When $a < h$, the circle does not meet the line. When $a = h$, the circle is tangent to the line at the foot $H$ of the perpendicular, which lies on the ray because $\alpha$ is acute. When $a > h$, the circle meets the line at two points symmetric about $H$. Both lie on the ray, with $B \neq A$, if and only if the radius $a$ is less than $CA = b$. When $a \geq b$, one of the two points lies on the extension of the ray beyond $A$ or coincides with $A$, leaving just one triangle.

Suppose $\alpha$ is right or obtuse. Then the angle at $B$ is acute and smaller than $\alpha$, so the ordering of the sides requires $a > b$. If $a > b$, the circle cuts the line at two points on opposite sides of $A$, and exactly one of them lies on the ray.
:::
::::

:::esempio{titolo="A case with two triangles"}
Let $\alpha = 30^\circ$, $b = 8$, and $a = 5$. The distance is $h = 8\sin 30^\circ = 4$, and $4 < 5 < 8$, so there are two triangles. The law of sines gives
$$
\sin\beta = \frac{8 \cdot \dfrac{1}{2}}{5} = \frac{4}{5} , \qquad \beta_1 = \arcsin\frac{4}{5} \approx 53.13^\circ , \qquad \beta_2 \approx 126.87^\circ .
$$
The law of cosines gives the third side through a quadratic equation in $c$:
$$
25 = 64 + c^2 - 2 \cdot 8 \cdot c \cdot \frac{\sqrt{3}}{2} \quad \Longrightarrow \quad c^2 - 8\sqrt{3}\,c + 39 = 0 \quad \Longrightarrow \quad c = 4\sqrt{3} \pm 3 .
$$
Both solutions are positive and correspond to the two triangles. Triangle $AB_2C$, with $c = 4\sqrt{3} + 3 \approx 9.93$, has the acute angle $\beta_1$. Triangle $AB_1C$, with $c = 4\sqrt{3} - 3 \approx 3.93$, has the obtuse angle $\beta_2$.
:::

## Distances and heights

:::definizione{#angolo-elevazione titolo="Angles of elevation and depression"}
An observer looks at a point $T$. The **angle of elevation** is the angle that the line of sight to $T$ makes with the horizontal plane when $T$ lies above the observer. When $T$ lies below the observer, the corresponding angle is called the **angle of depression**. These angles are measured with a theodolite and can be used to calculate heights and distances that cannot be measured directly.

Suppose the base of a tree is $30\,\mathrm{m}$ from the observer on level ground and the top is seen at an angle of elevation of $40^\circ$. The height of the tree above eye level is the leg opposite that angle. The second right-triangle theorem therefore gives $h = 30\tan 40^\circ \approx 25.17\,\mathrm{m}$.
:::

:::esempio{#altezza-torre titolo="Height of a tower with an inaccessible base"}
The base $O$ of a tower is inaccessible. From a point $A$, the top $T$ is seen at an angle of elevation of $30^\circ$. Moving $20\,\mathrm{m}$ closer along line $AO$ to point $B$ gives an angle of elevation of $60^\circ$. The ground is level, and the measurements are taken to be at ground level.

::grafico{assi=0 curve="0+1*cos(t),0+1*sin(t),0,0.524;4+0.6*cos(t),0+0.6*sin(t),0,1.047" linee="0,0 6,0 6,3.464;0,0 6,3.464;4,0 6,3.464;5.7,0 5.7,0.3 6,0.3" etichette="1.642,0.44,30°;4.987,0.57,60°;-0.3,-0.35,A;4,-0.4,B;6.3,-0.35,O;6.3,3.6,T;2,-0.45,20 m;5,-0.45,d;6.35,1.7,h" xmin=-1 xmax=7.5 ymin=-1 ymax=4.2 uguale=1 titolo="Angles of elevation of the top $T$ of the tower measured from $A$ and $B$, with $AB = 20\,\mathrm{m}$"}

Let $h = OT$ be the height, and let $d = BO$. Applying the second right-triangle theorem to triangles $BOT$ and $AOT$, both with a right angle at $O$, gives
$$
h = d\tan 60^\circ = \sqrt{3}\,d , \qquad h = (d + 20)\tan 30^\circ = \frac{d + 20}{\sqrt{3}} .
$$
The two expressions give the same height, so $\sqrt{3}\,d = \dfrac{d + 20}{\sqrt{3}}$, that is, $3d = d + 20$. It follows that $d = 10\,\mathrm{m}$ and $h = 10\sqrt{3}\,\mathrm{m} \approx 17.32\,\mathrm{m}$.

The same result follows from the law of sines in triangle $ABT$. The angle at $B$ equals $180^\circ - 60^\circ = 120^\circ$, so the angle at $T$ equals $180^\circ - 30^\circ - 120^\circ = 30^\circ$ and the triangle is isosceles with $BT = AB = 20\,\mathrm{m}$. Thus $h = BT\sin 60^\circ = 10\sqrt{3}\,\mathrm{m}$.
:::

:::esempio{#distanza-inaccessibile titolo="Distance to a point on the opposite bank of a river"}
From one bank of a river, we want to find the distance to a point $P$ on the opposite bank. On the near bank, establish a baseline $AB = 100\,\mathrm{m}$ and measure the angles $\widehat{PAB} = 75^\circ$ and $\widehat{PBA} = 45^\circ$.

::grafico{assi=0 curve="0+0.6*cos(t),0+0.6*sin(t),0,1.309;5+0.6*cos(t),0+0.6*sin(t),2.356,3.142;1.057+0.6*cos(t),3.943+0.6*sin(t),-1.833,-0.785" linee="0,0 5,0 1.057,3.943 0,0" segmenti="-1,1.6,6,1.6;-1,2.8,6,2.8" etichette="0.904,0.694,75°;3.947,0.436,45°;1.352,2.842,60°;-0.377,-0.246,A;5.412,-0.182,B;0.902,4.366,P;2.637,-0.376,100 m;5.2,2.2,river" xmin=-1 xmax=6.5 ymin=-1 ymax=5 uguale=1 titolo="From the baseline $AB$, the angles to point $P$ on the opposite bank are measured. The third angle equals $180^\circ - 75^\circ - 45^\circ = 60^\circ$"}

The angle at $P$ is $180^\circ - 75^\circ - 45^\circ = 60^\circ$. This is the first case for solving a triangle, one side and two angles, so we apply the law of sines:
$$
AP = \frac{AB\sin 45^\circ}{\sin 60^\circ} = 100 \cdot \frac{\sqrt{2}}{2} \cdot \frac{2}{\sqrt{3}} = \frac{100\sqrt{6}}{3} \approx 81.65\,\mathrm{m} .
$$
The distance from $P$ to line $AB$ is the leg opposite the $75^\circ$ angle in the right triangle with hypotenuse $AP$, and it equals $AP\sin 75^\circ \approx 78.87\,\mathrm{m}$.
:::

## Forces and inclined planes

:::definizione{#componenti-forza titolo="Components of a force"}
A force $\vec F$ of magnitude $F$ that makes an angle $\theta$ with the $x$-axis is the sum of two forces along the coordinate axes, called its **components**. The components are the legs of the right triangle whose hypotenuse represents the force, so by the first right-triangle theorem,
$$
F_x = F\cos\theta , \qquad F_y = F\sin\theta .
$$
A rope pulls a crate with a force of $50\,\mathrm{N}$ at an angle of $30^\circ$ above the horizontal. The horizontal component, which moves the crate, is $F_x = 50\cos 30^\circ = 25\sqrt{3}\,\mathrm{N} \approx 43.3\,\mathrm{N}$. The vertical component, which partly lifts the crate, is $F_y = 50\sin 30^\circ = 25\,\mathrm{N}$.
:::

:::esempio{#piano-inclinato titolo="Object on an inclined plane"}
An object of mass $m = 10\,\mathrm{kg}$ rests on a frictionless plane inclined at $\alpha = 30^\circ$. Its weight has magnitude $P = mg = 10 \cdot 9.8 = 98\,\mathrm{N}$ and is directed downward. Resolve the weight into components parallel and perpendicular to the plane. The angle between the weight and its perpendicular component equals $\alpha$ because the corresponding sides of the two angles are perpendicular. Therefore, by the first right-triangle theorem,
$$
P_\parallel = P\sin\alpha = 98 \cdot \frac{1}{2} = 49\,\mathrm{N} , \qquad P_\perp = P\cos\alpha = 98 \cdot \frac{\sqrt{3}}{2} = 49\sqrt{3}\,\mathrm{N} \approx 84.9\,\mathrm{N} .
$$

::grafico{assi=0 curve="0+1*cos(t),0+1*sin(t),0,0.524;3.325+0.7*cos(t),2.324+0.7*sin(t),-1.571,-1.047" poligoni="0,0 6,0 6,3.464;3.197,1.846 3.803,2.196 3.453,2.802 2.847,2.452" segmenti="2.459,1.824,3.325,0.324;4.191,0.824,3.325,0.324" vettori="3.325,2.324,3.325,0.324,P;3.325,2.324,2.459,1.824,P∥;3.325,2.324,4.191,0.824,P⊥" etichette="1.545,0.414,α;3.615,1.242,α" xmin=-0.5 xmax=6.5 ymin=-0.5 ymax=4 uguale=1 titolo="On a plane inclined at angle $\alpha$, the weight $\vec P$ has a component $P_\parallel = P\sin\alpha$ along the plane and a component $P_\perp = P\cos\alpha$ perpendicular to the plane"}

The normal force exerted by the plane balances the perpendicular component. Therefore a force of $49\,\mathrm{N}$ directed up the plane, parallel to its surface, is needed to hold the object at rest.
:::

:::teorema{#risultante-due-forze titolo="Resultant of two forces"}
Let $\vec F_1$ and $\vec F_2$ be two forces acting at the same point, with magnitudes $F_1$ and $F_2$ and an angle $\theta$ between them. The magnitude of their resultant $\vec R = \vec F_1 + \vec F_2$ is
$$
R^2 = F_1^2 + F_2^2 + 2F_1F_2\cos\theta .
$$
By the parallelogram rule, $\vec R$ is the diagonal of the parallelogram formed by the two forces. This diagonal divides the parallelogram into two triangles with sides $F_1$, $F_2$, and $R$ in which the angle opposite $R$ is $\pi - \theta$. By the law of cosines, $R^2 = F_1^2 + F_2^2 - 2F_1F_2\cos(\pi - \theta)$, and since $\cos(\pi - \theta) = -\cos\theta$, the formula follows.

::grafico{assi=0 curve="0+0.7*cos(t),0+0.7*sin(t),0,1.047;3+0.5*cos(t),0+0.5*sin(t),1.047,3.142" segmenti="3,0,5.5,4.33;2.5,4.33,5.5,4.33" vettori="0,0,3,0,F₁;0,0,2.5,4.33,F₂;0,0,5.5,4.33,R" etichette="1.031,0.595,θ;2.35,1.126,π − θ" xmin=-0.5 xmax=6.5 ymin=-1 ymax=5 uguale=1 titolo="The resultant $\vec R$ is the diagonal of the parallelogram formed by $\vec F_1$ and $\vec F_2$. In the triangle with sides $F_1$, $F_2$, and $R$, the angle opposite $R$ is $\pi - \theta$"}

With $F_1 = 3\,\mathrm{N}$, $F_2 = 5\,\mathrm{N}$, and $\theta = 60^\circ$, we have $R^2 = 9 + 25 + 15 = 49$, so $R = 7\,\mathrm{N}$. The angle $\varphi$ between $\vec R$ and $\vec F_1$ follows from the law of sines in the same triangle. It gives $\sin\varphi = \dfrac{F_2\sin(\pi - \theta)}{R} = \dfrac{5\sqrt{3}}{14}$, hence $\varphi \approx 38.21^\circ$. The angle $\varphi$ is acute because the triangle already contains the obtuse angle $\pi - \theta$.
:::

## Problems with a variable angle

:::definizione{#problemi-angolo-variabile titolo="Problems with a variable angle"}
In many geometry problems, the figure depends on an angle that can vary, and the question asks for the values of that angle for which a quantity takes a specified value. There are four steps.

- Choose an angle $x$, in radians, as the unknown and write down the geometric **restrictions**, that is, the interval of values of $x$ for which the figure exists.
- Express the required lengths in terms of $x$ using the theorems for triangles.
- Write the condition in the problem as a trigonometric equation in $x$.
- Solve the equation as in the chapter on trigonometric equations and retain only the solutions that satisfy the restrictions.

For example, a triangle has sides of lengths $6$ and $10$ and an included angle $x$, with $0 < x < \pi$. Its area is $S(x) = \dfrac{1}{2} \cdot 6 \cdot 10\sin x = 30\sin x$. The area equals $15$ if $\sin x = \dfrac{1}{2}$, that is, when $x = \dfrac{\pi}{6}$ or $x = \dfrac{5\pi}{6}$. Both values satisfy the restrictions. Since $\sin x \leq 1$, the maximum area is $30$ and is attained when $x = \dfrac{\pi}{2}$.
:::

:::esempio{#triangolo-semicirconferenza titolo="Triangle inscribed in a semicircle"}
A semicircle has diameter $AB = 2r$. We seek the point $P$ on the semicircle such that $AP + PB = (1 + \sqrt{3})\,r$. Set $x = \widehat{PAB}$. The point $P$ is distinct from $A$ and $B$, so the restrictions are $0 < x < \dfrac{\pi}{2}$.

::grafico{assi=0 curve="3*cos(t),3*sin(t),0,3.1416;-3+0.8*cos(t),0+0.8*sin(t),0,0.524" linee="-3,0 3,0 1.5,2.598 -3,0;1.197,2.423 1.372,2.12 1.675,2.295" punti="0,0,pieno" etichette="-1.532,0.393,x;-3.437,-0.108,A;3.425,-0.147,B;1.725,2.988,P;0,-0.4,O;-1.4,1.9,2r cos x;2.95,1.6,2r sin x" xmin=-4 xmax=4 ymin=-1 ymax=4 uguale=1 titolo="Triangle $ABP$, inscribed in the semicircle, has a right angle at $P$, with $AP = 2r\cos x$ and $BP = 2r\sin x$"}

Triangle $ABP$ has a right angle at $P$ because the angle at $P$ intercepts a semicircle. By the first right-triangle theorem, $AP = 2r\cos x$ and $PB = 2r\sin x$. The condition becomes
$$
2r\cos x + 2r\sin x = (1 + \sqrt{3})\,r \quad \Longrightarrow \quad \sin x + \cos x = \frac{1 + \sqrt{3}}{2} .
$$
This is a linear equation in sine and cosine. The auxiliary angle method gives $\sin x + \cos x = \sqrt{2}\sin\left( x + \dfrac{\pi}{4} \right)$, so
$$
\sin\left( x + \frac{\pi}{4} \right) = \frac{1 + \sqrt{3}}{2\sqrt{2}} = \frac{\sqrt{2} + \sqrt{6}}{4} = \sin\frac{5\pi}{12} .
$$
Under the given restrictions, the angle $x + \dfrac{\pi}{4}$ lies between $\dfrac{\pi}{4}$ and $\dfrac{3\pi}{4}$, so the solutions are $x + \dfrac{\pi}{4} = \dfrac{5\pi}{12}$ and $x + \dfrac{\pi}{4} = \pi - \dfrac{5\pi}{12} = \dfrac{7\pi}{12}$, that is, $x = \dfrac{\pi}{6}$ and $x = \dfrac{\pi}{3}$. Both are admissible. When $x = \dfrac{\pi}{6}$, we have $AP = \sqrt{3}\,r$ and $PB = r$. When $x = \dfrac{\pi}{3}$, the two values are interchanged. The two positions of $P$ are therefore symmetric about the perpendicular bisector of diameter $AB$.
:::
