---
titolo: "Circles, disks, and polygons"
sommario: "Chords, angles, tangents, regular polygons, arcs, and areas, with proofs and inverse problems."
---

## The circle and the disk

:::definizione{#definizione titolo="The role of distance from the centre"}

Fix a point $O$, the **centre**, and a length $r>0$, the **radius**. The **circle** is the line made of all the points $P$ at distance exactly $r$ from the centre, that is, with $OP=r$. The **disk** is the part of the plane enclosed by the circle, boundary included, so it is made of the points with $OP\le r$.

With respect to the circle, a point $P$ is in one of these three positions.

- It is **inside** if $OP<r$.
- It lies **on the circle** if $OP=r$.
- It is **outside** if $OP>r$.

For example, with $r=6$ cm a point $5$ cm from the centre is inside, a point $6$ cm away lies on the circle, and a point $7$ cm away is outside. The point $6$ cm away belongs both to the circle and to the disk. In this chapter we compute the length of the circle, its circumference, and the area of the disk.

The segments joining the centre to a point on the circle are also called radii; they all measure $r$. A **chord** is a segment joining two distinct points on the circle. A chord through the centre is a **diameter** and measures $2r$, because the centre lies between its two endpoints and each half is a radius. The endpoints of a chord split the circle into two **arcs**, that is, two portions of the circle. If the two parts are different, the shorter one is called the minor arc and the longer one the major arc. A diameter splits the circle into two equal arcs, called **semicircles**.

In the figure $AB$ is a diameter and $OP$ is a radius. Point $Q$ is inside and point $S$ is outside.

::grafico{assi=0 uguale=1 xmin=-4.1 xmax=4.5 ymin=-3.75 ymax=3.75 curve="3*cos(t),3*sin(t),0.000000000000,6.283185307180" linee="-3,0 3,0;0,0 0,-3" punti="0,0;-3,0;3,0;0,-3;1,1.2;3.55,1.4" etichette="-0.28,0.36,O;-3.32,-0.25,A;3.34,-0.26,B;0,-3.43,P;1.25,1.5,Q;3.76,1.7,S" titolo="$P$ is on the circle, $Q$ is inside, and $S$ is outside"}

:::

## Chords and distances

::::teorema{#corde titolo="The perpendicular from the centre"}

From the centre $O$ draw the perpendicular to the line through a chord $AB$, that is, the line meeting it at a right angle. The point $H$ where it meets that line is called the **foot** of the perpendicular, and the length $d=OH$ is the **distance** of the chord from the centre.

The foot $H$ is the **midpoint** of the chord, so $AH=HB$. If $0\le d<r$, the chord has length

$$
AB=2\sqrt{r^2-d^2}.
$$

In the figure $r=5$, $d=3$, and the half chord $AH$ measures $\sqrt{5^2-3^2}=\sqrt{16}=4$, so $AB=8$.

:::dimostrazione

The proof uses the **Pythagorean theorem**. In a right triangle the side opposite the right angle is called the hypotenuse and the other two sides are called legs. The square of the hypotenuse equals the sum of the squares of the legs.

If the chord passes through $O$, the foot is $H=O$ and the chord is a diameter, so $AB=2r$. The formula gives the same value, because $d=0$ gives $2\sqrt{r^2}=2r$.

In the other cases triangles $OHA$ and $OHB$ have a right angle at $H$. Their hypotenuses are the radii $OA$ and $OB$. By the Pythagorean theorem

$$
\begin{aligned}
AH^2&=OA^2-OH^2=r^2-d^2,\\[6pt]
BH^2&=OB^2-OH^2=r^2-d^2.
\end{aligned}
$$

The two right sides are equal, so $AH=BH=\sqrt{r^2-d^2}$. Point $H$ lies on line $AB$ at the same distance from $A$ and from $B$, therefore it is the midpoint of the chord. Then $AB=2AH=2\sqrt{r^2-d^2}$.

The converse also holds. Let $H$ be the midpoint of a chord that does not pass through $O$. Triangles $OHA$ and $OHB$ have $OA=OB$ (radii), $AH=HB$ ($H$ is the midpoint), and the side $OH$ in common. Two triangles whose three sides are respectively congruent, that is, of equal length, are congruent, that is, they can be superimposed (side-side-side criterion). So the angles $\widehat{OHA}$ and $\widehat{OHB}$ are equal. Together these two angles form a straight angle, which measures $180^\circ$, therefore each measures $90^\circ$ and $OH$ is perpendicular to the chord.

:::

::grafico{assi=0 uguale=1 xmin=-5.7 xmax=5.7 ymin=-5.5 ymax=5.7 curve="5*cos(t),5*sin(t),0.000000000000,6.283185307180" linee="-4,3 4,3;0,0 0,3;0,0 4,3;0,2.7 0.3,2.7 0.3,3" punti="0,0;-4,3;4,3;0,3" etichette="-0.42,-0.32,O;-4.24,3.42,A;4.25,3.42,B;0,3.43,H;2.16,1.35,5;-0.38,1.44,3;2.05,3.4,4" titolo="The radius, the distance $OH$, and half the chord form a right triangle"}

::::

:::esempio{titolo="Reading the formula in reverse"}

The formula links three lengths: radius, distance from the centre, and chord. Knowing two of them gives the third.

In the same circle the radius $r$ is fixed. Two chords of the same length therefore have the same distance from the centre. If the distance $d$ increases, the number $r^2-d^2$ under the square root decreases, so the chord is shorter. The longest chord is the diameter, which has $d=0$. At $d=r$ the line touches the circle at one point only, so the two endpoints of the chord coincide and there is no chord any more.

A chord of length $16$ cm lies in a circle of radius $10$ cm. We look for its distance from the centre. The right triangle has the radius as hypotenuse and half the chord as a leg:

$$
\begin{aligned}
AH&=\frac{16}{2}=8\,\mathrm{cm},\\[6pt]
d&=\sqrt{10^2-8^2}=\sqrt{100-64}=\sqrt{36}=6\,\mathrm{cm}.
\end{aligned}
$$

:::

:::attenzione

The leg of the right triangle is half the chord. Using the whole $16$ cm chord would give $10^2-16^2=100-256=-156$, a negative number under the square root, which gives no length at all.

:::

## Angles subtended by an arc

::::teorema{#angoli titolo="Central and inscribed angles"}

A **central angle** has its vertex at the centre $O$ and its sides along two radii. The part of the disk between the two radii is called a **circular sector**, and its curved boundary is an arc. By definition, the measure of the arc is the measure of the corresponding central angle. The arc may also be larger than a semicircle. In that case the central angle exceeds $180^\circ$ and is called **reflex**.

An **inscribed angle** has its vertex $C$ on the circle, and its two sides meet the circle again at two distinct points $A$ and $B$. The angle is said to **intercept** the arc between $A$ and $B$ that does not contain $C$ (or to be subtended by that arc).

The inscribed angle $\widehat{ACB}$ measures half the central angle on the same arc:

$$
\widehat{ACB}=\frac{\widehat{AOB}}{2}.
$$

For example, an arc of $100^\circ$ gives an inscribed angle of $\dfrac{100^\circ}{2}=50^\circ$. Conversely, an inscribed angle of $20^\circ$ intercepts an arc of $2\cdot20^\circ=40^\circ$. The two endpoints of a chord determine two arcs of different measures, so the same chord can give two different inscribed angles.

:::dimostrazione

Draw the diameter starting at $C$ and call its other endpoint $D$. There are three cases, depending on the position of diameter $CD$ relative to the angle.

*First case: one side of the angle lies on the diameter* (first figure). Call $A$ the endpoint of the other side. Triangle $OCA$ is isosceles, that is, it has two equal sides, because $OC$ and $OA$ are radii. In an isosceles triangle the base angles are equal, so $\widehat{CAO}=\widehat{OCA}=\widehat{ACD}$. Angle $\widehat{AOD}$ is an **exterior angle** of the triangle, that is, the angle formed by a side and the extension of the adjacent side. An exterior angle of a triangle equals the sum of the two non-adjacent interior angles, therefore

$$
\widehat{AOD}=\widehat{OCA}+\widehat{CAO}=2\,\widehat{ACD}.
$$

The central angle is therefore twice the inscribed angle.

*Second case: the diameter lies inside the angle* (second figure). Diameter $CD$ splits $\widehat{ACB}$ into the two angles $\widehat{ACD}$ and $\widehat{DCB}$, and at point $D$ it also splits the intercepted arc into two arcs. By the first case each of the two arcs measures twice the corresponding angle. Adding, the whole arc measures twice $\widehat{ACD}+\widehat{DCB}=\widehat{ACB}$.

*Third case: the diameter lies outside the angle* (third figure). Angle $\widehat{ACB}$ is the difference between $\widehat{ACD}$ and $\widehat{BCD}$, the larger minus the smaller. The intercepted arc is also the difference between the two arcs that do not contain $C$, because one lies inside the other. By the first case each arc is twice its angle, so the difference of the arcs is also twice the difference of the angles.

:::

::grafico{assi=0 uguale=1 xmin=-3.8 xmax=3.8 ymin=-3.6 ymax=3.65 curve="3*cos(t),3*sin(t),0.000000000000,6.283185307180" linee="-3,0 3,0;-3,0 1.5,2.598076 0,0" punti="-3,0;0,0;3,0;1.5,2.598076" etichette="-3.35,-0.28,C;0,-0.39,O;3.32,-0.28,D;1.67,2.89,A" titolo="With one side on the diameter, use the exterior angle at $O$"}

::grafico{assi=0 uguale=1 xmin=-3.8 xmax=3.8 ymin=-3.8 ymax=3.6 curve="3*cos(t),3*sin(t),0.000000000000,6.283185307180" linee="-3,0 1.5,2.598076; -3,0 0,-3;0,0 1.5,2.598076;0,0 0,-3" segmenti="-3,0,3,0" punti="-3,0;0,0;3,0;1.5,2.598076;0,-3" etichette="-3.36,-0.22,C;0.29,-0.28,O;3.35,-0.24,D;1.71,2.91,A;0,-3.39,B" titolo="The diameter lies inside the angle and splits the intercepted arc into two"}

::grafico{assi=0 uguale=1 xmin=-3.8 xmax=3.8 ymin=-3.6 ymax=3.6 curve="3*cos(t),3*sin(t),0.000000000000,6.283185307180" linee="-3,0 1.5,2.598076;-3,0 -1.5,2.598076;1.5,2.598076 0,0 -1.5,2.598076" segmenti="-3,0,3,0" punti="-3,0;0,0;3,0;1.5,2.598076;-1.5,2.598076" etichette="-3.34,-0.27,C;0,-0.4,O;3.3,-0.25,D;1.63,2.93,A;-1.65,2.93,B" titolo="The diameter lies outside the angle and two measures are subtracted"}

::::

:::esempio{titolo="The same chord from different sides"}

Chord $AB$ splits the circle into a minor arc of $90^\circ$ and a major arc of $360^\circ-90^\circ=270^\circ$. In the figure $C$ lies on the major arc and $D$ on the minor arc. Each angle intercepts the arc that does not contain its vertex:

$$
\begin{aligned}
\widehat{ACB}&=\frac{90^\circ}{2}=45^\circ,\\[6pt]
\widehat{ADB}&=\frac{270^\circ}{2}=135^\circ.
\end{aligned}
$$

The two measures add to $180^\circ$, because the two arcs together form the whole circle. If the vertex moves along the same arc, the intercepted arc stays the same, so the inscribed angle stays the same.

::grafico{assi=0 uguale=1 xmin=-4.7 xmax=4.7 ymin=-4.45 ymax=4.82 curve="4*cos(t),4*sin(t),0.000000000000,6.283185307180" linee="4,0 0,4;-4,0 0,4;-4,0 4,0;4,0 2.828427,2.828427 0,4" punti="4,0;0,4;-4,0;2.828427,2.828427" etichette="4.31,-0.28,A;0,4.46,B;-4.32,-0.29,C;3.12,3.12,D" titolo="$C$ and $D$ intercept different arcs of chord $AB$"}

:::

## Diameters and inscribed quadrilaterals

:::teorema{#semicirconferenza titolo="A diameter subtends a right angle"}

If $AB$ is a diameter and $C$ is another point on the circle, angle $\widehat{ACB}$ is a **right angle**. Indeed, the angle intercepts a semicircle, which measures $180^\circ$, so it measures $\dfrac{180^\circ}{2}=90^\circ$.

The converse also holds. Let $A$, $B$, $C$ be three points on the circle with $\widehat{ACB}=90^\circ$. The arc that does not contain $C$ measures $2\cdot90^\circ=180^\circ$. Then radii $OA$ and $OB$ lie on the same line, on opposite sides of $O$, therefore $AB$ is a diameter.

In both directions all three points must lie on the circle. For example, the circle through the three vertices of a right triangle has the hypotenuse as a diameter. With legs of $9$ cm and $12$ cm the hypotenuse measures $\sqrt{9^2+12^2}=\sqrt{225}=15$ cm, so the radius is $\dfrac{15}{2}$ cm.

:::

::::teorema{#inscritti titolo="Opposite angles of a cyclic quadrilateral"}

A polygon is **inscribed** in a circle if all its vertices lie on the circle. A quadrilateral is **convex** if each of its interior angles is less than $180^\circ$. Two angles are **supplementary** if their sum is $180^\circ$.

If a convex quadrilateral $ABCD$ is inscribed in a circle, its opposite angles are supplementary:

$$
\begin{aligned}
\widehat{A}+\widehat{C}&=180^\circ,\\[6pt]
\widehat{B}+\widehat{D}&=180^\circ.
\end{aligned}
$$

For example, if one angle measures $110^\circ$, the opposite angle measures $180^\circ-110^\circ=70^\circ$.

:::dimostrazione

Angles $\widehat{ABC}$ and $\widehat{ADC}$ are inscribed angles intercepting the two arcs with endpoints $A$ and $C$. The angle at $B$ intercepts the arc through $D$, the angle at $D$ the arc through $B$. Together the two arcs form the circle, so their measures add to $360^\circ$. Each angle is half its arc, therefore the sum of the two angles is $\dfrac{360^\circ}{2}=180^\circ$. With chord $BD$ in place of $AC$ the same reasoning applies to the angles at $A$ and $C$.

:::

::grafico{assi=0 uguale=1 xmin=-4.65 xmax=4.65 ymin=-4.7 ymax=4.7 curve="4*cos(t),4*sin(t),0.000000000000,6.283185307180" linee="4.000000,0.000000 2.000000,3.464102 -3.064178,2.571150 -1.368081,-3.758770 4.000000,0.000000" segmenti="4.000000,0.000000,-3.064178,2.571150" punti="4.000000,0.000000;2.000000,3.464102;-3.064178,2.571150;-1.368081,-3.758770" etichette="4.29,-0.25,A;2.32,3.71,B;-3.37,2.81,C;-1.52,-4.13,D" titolo="The angles at $B$ and $D$ intercept the two arcs of chord $AC$"}

::::

:::esempio{titolo="Checking data for a cyclic quadrilateral"}

In a quadrilateral $\widehat{ABC}=112^\circ$ and $\widehat{ADC}=71^\circ$. The two angles are opposite and their sum is $112^\circ+71^\circ=183^\circ$, which is not $180^\circ$. The property of opposite angles holds for *every* inscribed quadrilateral, so the four vertices cannot all lie on one circle.

In a rectangle the four angles are right angles and opposite angles add to $90^\circ+90^\circ=180^\circ$. The centre of the circle through the four vertices can also be found. The two diagonals of a rectangle have equal length and bisect each other at their common point $M$. Therefore $M$ is half a diagonal away from each vertex, and it is the required centre.

:::

## Tangents and points of contact

::::teorema{#tangenti titolo="Distance of the line and perpendicularity"}

A line is **tangent** to the circle if it has *exactly one* point in common with it, called the point of contact or point of tangency. Let $H$ be the foot of the perpendicular from the centre to the line. The number of common points depends on the distance $OH$ of the line from the centre.

- If $OH<r$, the line meets the circle at two points (a **secant** line).
- If $OH=r$, the line has only one common point, $H$, and is tangent.
- If $OH>r$, the line has no common points (an **exterior** line).

For the tangent line the point of contact $T$ is the foot $H$, so radius $OT$ is **perpendicular** to the tangent.

For example, with $r=4$ cm the lines at distances $2$ cm, $4$ cm, and $6$ cm from the centre have $2$, $1$, and $0$ points in common with the circle respectively.

:::dimostrazione

Let $Q$ be a point on the line. Triangle $OHQ$ has a right angle at $H$, so by the Pythagorean theorem $OQ^2=OH^2+HQ^2$. Point $Q$ lies on the circle when $OQ=r$, that is, when

$$
HQ^2=r^2-OH^2.
$$

- If $OH<r$, the right side is positive and there are two points $Q$, one on each side of $H$, at distance $\sqrt{r^2-OH^2}$.
- If $OH=r$, the right side is zero, so $HQ=0$ and the only point is $Q=H$.
- If $OH>r$, the right side is negative. A square is never negative, therefore there is no common point.

The argument also applies to a line through the centre, which has $OH=0$.

:::

::grafico{assi=0 uguale=1 xmin=-4.5 xmax=4.5 ymin=-3.6 ymax=5.03 curve="3*cos(t),3*sin(t),0.000000000000,6.283185307180" linee="-4.1,1 4.1,1;-4.1,3 4.1,3;-4.1,4.22 4.1,4.22;0,2.76 0.24,2.76 0.24,3" segmenti="0,0,0,4.22" punti="0,0;-2.828427,1;2.828427,1;0,3" etichette="-0.34,-0.36,O;-3.88,1.32,s;-3.88,3.35,t;-3.88,4.55,e;0,3.37,T" titolo="$s$ has two intersections, $t$ is tangent, and $e$ is outside"}

::::

:::esempio{titolo="The two tangents from one point"}

The number of tangents through a point $P$ depends on the position of $P$.

- Two tangents pass through an exterior point $P$.
- Only one tangent passes through a point on the circle, the perpendicular to the radius at that point.
- No tangent passes through an interior point.

For an exterior point $P$ the points of contact $S$ and $T$ are the intersections of the given circle with the circle having $OP$ as diameter. At each common point the angle on diameter $OP$ is a right angle, so the radius is perpendicular to the line joining it to $P$. The two points are symmetric with respect to line $OP$.

Triangles $OSP$ and $OTP$ have right angles at $S$ and at $T$. They have the same hypotenuse $OP$ and legs $OS$ and $OT$ equal to the radius. By the Pythagorean theorem the two **tangent segments** are equal:

$$
PS=PT=\sqrt{OP^2-r^2}.
$$

With $OP=5$ and $r=3$ each tangent segment measures $\sqrt{25-9}=\sqrt{16}=4$. The distance $OP$ goes from the centre to the exterior point and is the hypotenuse, because it lies opposite the right angle.

The tangent segment also gives the radius. If $PT=12$ cm and $OP=13$ cm, then

$$
OT^2=OP^2-PT^2=13^2-12^2=169-144=25,
$$

so $r=5$ cm. The two perpendicular lines are $OT$ and $PT$, which meet at the point of contact $T$. Line $OP$ passes through the centre and is distinct from both tangents.

::grafico{assi=0 uguale=1 xmin=-3.6 xmax=5.8 ymin=-3.5 ymax=3.65 curve="3*cos(t),3*sin(t),0.000000000000,6.283185307180" linee="0,0 1.8,2.4 5,0 1.8,-2.4 0,0" segmenti="0,0,5,0" punti="0,0;5,0;1.8,2.4;1.8,-2.4" etichette="-0.34,-0.33,O;5.3,-0.32,P;1.96,2.73,T;1.93,-2.83,S" titolo="The two points of tangency are reflections across line $OP$"}

:::

## Regular polygons and the apothem

::::teorema{#poligoni titolo="Angles, radii, and area of a regular polygon"}

A polygon is **regular** if it has *all* sides congruent and *all* interior angles congruent. Both conditions are needed together. A rhombus with a $75^\circ$ angle has four equal sides, but its angles measure $75^\circ$ and $105^\circ$, so it is not regular. Here we consider convex regular polygons with $n\ge3$ sides.

Every regular polygon has a centre $O$ with these properties.

- The vertices lie on a circle with centre $O$, the **circumcircle**. Its radius $R$ is the segment from the centre to a vertex.
- The sides are tangent to a circle with centre $O$, the **incircle**.
- The **apothem** $a$ is the perpendicular segment from the centre to a side, that is, the distance of the centre from a side. Its length equals the radius of the incircle.

The angles and the area are computed from the number of sides $n$, the **perimeter** $p$ (the sum of the sides), and the apothem:

$$
\begin{aligned}
\text{central angle between consecutive vertices}&=\frac{360^\circ}{n},\\[6pt]
\text{interior angle}&=180^\circ-\frac{360^\circ}{n},\\[6pt]
\text{area}&=\frac{p\,a}{2}.
\end{aligned}
$$

The **exterior angle** at a vertex is the angle that, added to the interior angle, gives $180^\circ$. In a regular polygon it equals $180^\circ$ minus the interior angle, so $\dfrac{360^\circ}{n}$. The $n$ exterior angles therefore add to $n\cdot\dfrac{360^\circ}{n}=360^\circ$. Indeed, going round the boundary, at each vertex one turns by the exterior angle and at the end one has made a full turn. For example, with an interior angle of $156^\circ$ the exterior angle is $180^\circ-156^\circ=24^\circ$ and there are $\dfrac{360^\circ}{24^\circ}=15$ sides.

The sum of the interior angles of a convex polygon with $n$ sides is $(n-2)\cdot180^\circ$, because the diagonals from one vertex split it into $n-2$ triangles. For $n=9$ this gives $7\cdot180^\circ=1260^\circ$, and each angle of the regular polygon measures $\dfrac{1260^\circ}{9}=140^\circ$.

:::dimostrazione

A **rotation** about $O$ is the motion that turns every point of the plane about $O$ through the same angle. A rotation does not change distances.

Consider the motion that takes one side of the polygon onto the next side, with the same direction of travel. All sides have the same length and the turn at each vertex is the same. So the same motion takes every side onto the next side and the polygon onto itself. This motion changes the direction of the sides, therefore it is a rotation, about a centre called $O$.

The centre $O$ stays fixed in the rotation, which takes each vertex to the next one. So $O$ has the same distance from all the vertices and the same distance from all the sides. For this reason the vertices lie on a circle with centre $O$ and the sides are tangent to another circle with centre $O$.

Joining $O$ to the vertices gives $n$ equal isosceles triangles. Their angles at $O$ divide the full angle, which measures $360^\circ$, into $n$ equal parts, so each measures $\dfrac{360^\circ}{n}$. Each triangle has two equal base angles, which add to $180^\circ-\dfrac{360^\circ}{n}$. At each vertex of the polygon two base angles meet, one from each of the two neighbouring triangles. Their sum equals the sum of the two base angles of a single triangle, therefore the interior angle measures $180^\circ-\dfrac{360^\circ}{n}$.

Each triangle has a side $\ell$ as base and the apothem $a$ as height, so its area is $\dfrac{\ell\,a}{2}$. Adding the $n$ areas, the bases add up to the perimeter, so the area of the polygon is $\dfrac{p\,a}{2}$.

:::

::grafico{assi=0 uguale=1 xmin=-4.6 xmax=4.65 ymin=-4.55 ymax=4.65 curve="4*cos(t),4*sin(t),0.000000000000,6.283185307180;3.464101615*cos(t),3.464101615*sin(t),0.000000000000,6.283185307180" linee="4.000000,0.000000 2.000000,3.464102 -2.000000,3.464102 -4.000000,0.000000 -2.000000,-3.464102 2.000000,-3.464102 4.000000,0.000000;0,0 4,0;0,0 2,3.464102;0,0 3,1.732051" punti="0,0;4,0;2,3.464102;3,1.732051" etichette="-0.27,-0.35,O;4.32,-0.24,A;2.17,3.79,B;3.22,1.98,H;1.76,-0.31,R;1.33,1.03,a" titolo="$OA$ is a circumradius, and $OH$ is the apothem"}

::::

:::esempio{titolo="The hexagon and the octagon"}

In a regular hexagon the central angle is $\dfrac{360^\circ}{6}=60^\circ$. Each central isosceles triangle therefore has base angles adding to $180^\circ-60^\circ=120^\circ$, that is, $60^\circ$ each. The triangle has three $60^\circ$ angles and is equilateral, therefore the side of the hexagon equals the radius of the circumcircle.

With side $8$ cm the perimeter is $6\cdot8=48$ cm. The apothem is a leg of the right triangle that has the $8$ cm radius as hypotenuse and half a side, $4$ cm, as the other leg:

$$
a=\sqrt{8^2-4^2}=\sqrt{48}=4\sqrt3\,\mathrm{cm}.
$$

In a regular octagon the central angle measures $\dfrac{360^\circ}{8}=45^\circ$ and the interior angle $180^\circ-45^\circ=135^\circ$. The exterior angle is $180^\circ-135^\circ=45^\circ$. The exterior angle and the central angle have the same measure, but they are different angles, because the central angle has its vertex at $O$ and the exterior angle has its vertex at a vertex of the polygon.

:::

## Inscribed and circumscribed polygons

:::osservazione{#circoscritti titolo="Vertices on a circle and tangent sides"}

A polygon is **inscribed** in a circle if all its vertices lie on the circle. It is **circumscribed** about a circle if all its sides are tangent to the circle, which then lies inside the polygon. In a regular polygon the circumcircle passes through the vertices and the incircle touches the sides, so they are two different circles with the same centre. A quadrilateral with sides of different lengths can also be circumscribed about a circle.

In a circumscribed quadrilateral $ABCD$ the sums of opposite sides are equal:

$$
AB+CD=BC+DA.
$$

The reason is the tangent segments. From each vertex two equal tangent segments start, reaching the points of contact of the two sides that leave that vertex. Call $u$, $v$, $w$, $z$ their lengths starting from $A$, $B$, $C$, $D$. Each side is made of one segment from each of its two endpoints:

$$
\begin{aligned}
AB+CD&=(u+v)+(w+z)=u+v+w+z,\\[6pt]
BC+DA&=(v+w)+(z+u)=u+v+w+z.
\end{aligned}
$$

For example, if $AB=8$, $BC=6$, and $CD=5$, then $DA=AB+CD-BC=8+5-6=7$.

::grafico{assi=0 uguale=1 xmin=-3.08 xmax=2.8 ymin=-2.66 ymax=3.72 curve="2*cos(t),2*sin(t),0.000000000000,6.283185307180" linee="2,-2 2,1.400415 -2.571150,3.064178 -1.678199,-2 2,-2" punti="2,-2;2,1.400415;-2.571150,3.064178;-1.678199,-2;2,0;0.684040,1.879385;-1.969616,-0.347296;0,-2" etichette="2.15,-2.36,A;2.31,1.58,B;-2.78,3.4,C;-1.8,-2.35,D" titolo="Tangency divides each side into the two portions from its two vertices"}

:::

## Circumferences and arc lengths

:::teorema{#lunghezze titolo="The fraction of a full turn"}

The number $\pi$ (read "pi") is the ratio between the length of a circle and its diameter, and is approximately $3.14$. The circumference is therefore

$$
C=2\pi r=\pi d,
$$

where $d=2r$ is the diameter. For example, with $r=3$ cm we get $C=6\pi$ cm. In exact results $\pi$ is kept as it is. A wheel that rolls without slipping moves forward, at each turn, by a length equal to its circumference.

An arc with central angle $\alpha$ is the fraction $\dfrac{\alpha}{360^\circ}$ of the whole circle. For $0<\alpha<360^\circ$ its length is

$$
\ell=\dfrac{\alpha}{360^\circ}\,2\pi r.
$$

On the same circle, arcs of equal measure have equal lengths, because a rotation about the centre takes one onto the other. So a given fraction of a full turn corresponds to the same fraction of the total length. With $\alpha=60^\circ$ and $r=6$ cm the arc is $\dfrac{60^\circ}{360^\circ}=\dfrac16$ of the circle:

$$
\ell=\frac16\cdot2\pi\cdot6=2\pi\,\mathrm{cm}.
$$

If an inscribed angle is given, its measure is first doubled to find the measure of the arc.

The relation is also used to find the angle. An arc of $5\pi$ cm lies on a circle of radius $10$ cm, whose length is $2\pi\cdot10=20\pi$ cm. The ratio between the two lengths, measured in the same unit, is

$$
\frac{5\pi}{20\pi}=\frac14,
$$

so the central angle is $\dfrac14\cdot360^\circ=90^\circ$.

:::

## Areas of disks, sectors, and annuli

:::teorema{#aree titolo="The sector's area and boundary"}

The area of the disk of radius $r$ is $\pi r^2$. For example, with $r=3$ cm the area is $9\pi$ cm$^2$. The area depends on the square of the radius, so if the radius doubles the area becomes $2^2=4$ times as large, while the circumference doubles.

A circular sector with central angle $\alpha$ is the fraction $\dfrac{\alpha}{360^\circ}$ of the disk. Its boundary is made of the arc $\ell$ and the two radii. For $0<\alpha<360^\circ$ its area and perimeter are

$$
\begin{aligned}
A_{\mathrm{s}}&=\dfrac{\alpha}{360^\circ}\,\pi r^2,\\[6pt]
P_{\mathrm{s}}&=\ell+2r .
\end{aligned}
$$

The figure shows a quarter disk with $r=4$ cm, that is, $\alpha=90^\circ$ and fraction $\dfrac14$. We compute the arc, the perimeter, which includes arc $AB$ and the two radii, and the area:

$$
\begin{aligned}
\ell&=\frac14\cdot2\pi\cdot4=2\pi\,\mathrm{cm},\\[6pt]
P_{\mathrm{s}}&=(2\pi+8)\,\mathrm{cm},\\[6pt]
A_{\mathrm{s}}&=\frac14\cdot\pi\cdot4^2=4\pi\,\mathrm{cm^2}.
\end{aligned}
$$

The arc and area formulas contain the same fraction $\dfrac{\alpha}{360^\circ}$. From the arc formula $\dfrac{\alpha}{360^\circ}=\dfrac{\ell}{2\pi r}$ and, substituting into the area formula,

$$
A_{\mathrm{s}}=\frac{\ell}{2\pi r}\cdot\pi r^2=\frac{r\ell}{2}.
$$

With an arc of $9$ cm and a radius of $6$ cm the area is $\dfrac{6\cdot9}{2}=27$ cm$^2$, without computing the angle.

::grafico{assi=0 uguale=1 xmin=-0.8 xmax=4.65 ymin=-0.74 ymax=4.65 curve="4*cos(t),4*sin(t),0.000000000000,1.570796326795" poligoni="0,0 4.000000,0.000000 3.984779,0.348623 3.939231,0.694593 3.863703,1.035276 3.758770,1.368081 3.625231,1.690473 3.464102,2.000000 3.276608,2.294306 3.064178,2.571150 2.828427,2.828427 2.571150,3.064178 2.294306,3.276608 2.000000,3.464102 1.690473,3.625231 1.368081,3.758770 1.035276,3.863703 0.694593,3.939231 0.348623,3.984779 0.000000,4.000000" linee="4,0 0,0 0,4" punti="0,0;4,0;0,4" etichette="-0.19,-0.37,O;4.16,-0.37,A;-0.18,4.32,B;2,-0.37,4;-0.3,2,4" titolo="The sector boundary includes two radii and arc $AB$"}

:::

:::esempio{titolo="An annulus and a portion of it"}

Two circles are **concentric** if they have the same centre. An **annulus** is the part of the plane between two concentric circles of radii $R>r$. Its area is the difference between the areas of the two disks:

$$
\pi R^2-\pi r^2=\pi(R^2-r^2).
$$

A portion of an annulus between two radii is computed by taking the same fraction of a turn from both disks. With $R=8$ cm, $r=5$ cm, and $\alpha=120^\circ$ the fraction is $\dfrac{120^\circ}{360^\circ}=\dfrac13$ and the area is

$$
\frac13\,\pi\,(64-25)=\frac13\cdot39\pi=13\pi\,\mathrm{cm^2}.
$$

The boundary of this portion is made of two arcs, one on each circle, and two segments of length $R-r$ each.

:::
