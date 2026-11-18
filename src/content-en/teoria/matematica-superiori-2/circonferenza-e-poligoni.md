---
titolo: "Circles, disks, and polygons"
sommario: "Chords, angles, tangents, regular polygons, arcs, and areas, with proofs and inverse problems."
---

## The circle and the disk

:::definizione{#definizione titolo="The role of distance from the centre"}

Fix a centre $O$ and a radius $r>0$. The **circle** is the set of points $P$ such that $OP=r$. The **disk** also includes the interior, so it is the set of points for which $OP\le r$. Points with $OP<r$ are inside, and those with $OP>r$ are outside. In this chapter we measure the circumference of the circle and the area of the disk.

A **radius** joins the centre to a point on the circle. A **chord** joins two distinct points on the circle. A chord through the centre is a **diameter** of length $2r$, since the centre lies between its endpoints and each half has length $r$. The endpoints of a chord split the circle into two arcs, or portions of the boundary. The diameter splits it into two semicircles.

::grafico{assi=0 uguale=1 xmin=-4.1 xmax=4.5 ymin=-3.75 ymax=3.75 curve="3*cos(t),3*sin(t),0.000000000000,6.283185307180" linee="-3,0 3,0;0,0 0,-3" punti="0,0;-3,0;3,0;0,-3;1,1.2;3.55,1.4" etichette="-0.28,0.36,O;-3.32,-0.25,A;3.34,-0.26,B;0,-3.43,P;1.25,1.5,Q;3.76,1.7,S" titolo="$P$ is on the circle, $Q$ is inside, and $S$ is outside"}

:::

## Chords and distances

::::teorema{#corde titolo="The perpendicular from the centre"}

If $H$ is the foot of the perpendicular from $O$ to the line through a chord $AB$, then $H$ is the chord's midpoint. For $0\le d=OH<r$, its length is

$$
AB=2\sqrt{r^2-d^2}.
$$

:::dimostrazione

If the chord passes through $O$, then $H=O$ and $AB=2r$, as required. In the other cases the Pythagorean theorem gives $AH^2=OA^2-OH^2$ and $BH^2=OB^2-OH^2$. The two radii have equal length, so $AH=BH$. Since $H$ lies on line $AB$, this equality makes it the midpoint. Thus $AB=2AH$.

Conversely, if $H$ is the midpoint of a chord that does not pass through $O$, triangles $OHA$ and $OHB$ have three pairs of congruent sides. The angles in the linear pair at $H$ are equal. They add to $180^\circ$, so both are right angles and $OH$ is perpendicular to the chord.

:::

::grafico{assi=0 uguale=1 xmin=-5.7 xmax=5.7 ymin=-5.5 ymax=5.7 curve="5*cos(t),5*sin(t),0.000000000000,6.283185307180" linee="-4,3 4,3;0,0 0,3;0,0 4,3;0,2.7 0.3,2.7 0.3,3" punti="0,0;-4,3;4,3;0,3" etichette="-0.42,-0.32,O;-4.24,3.42,A;4.25,3.42,B;0,3.43,H;2.16,1.35,5;-0.38,1.44,3;2.05,3.4,4" titolo="The radius, the distance $OH$, and half the chord form a right triangle"}

::::

:::esempio{titolo="Reading the formula in reverse"}

In the same circle, chords of equal length have equal distances from the centre. For a fixed $r$, a greater distance leaves a smaller value under the square root, so it gives a shorter chord. The longest chord is the diameter, corresponding to $d=0$. At $d=r$ the line would have just one point of contact and the chord's endpoints would coincide.

For a chord of length $16$ cm in a circle of radius $10$ cm, the leg along the chord measures $8$ cm. Its distance from the centre is $\sqrt{10^2-8^2}=6$ cm. Using $16$ for the leg would give a negative quantity under the square root, because the whole chord is not a side of the right triangle being used.

:::

## Angles subtended by an arc

::::teorema{#angoli titolo="Central and inscribed angles"}

A **central angle** has its vertex at $O$ and its sides along two radii. Its sector determines an arc, which may be larger than a semicircle. An **inscribed angle** has its vertex $C$ on the circle and its sides meet the circle again at two distinct points $A,B$. The angle intercepts the arc between $A$ and $B$ that does not contain $C$.

The measure of $\widehat{ACB}$ is half the central angle associated with that arc. For example, an arc of $100^\circ$ gives a $50^\circ$ inscribed angle. The same chord can give two different measures because each of its two arcs has its own measure.

:::dimostrazione

Draw diameter $CD$. If one side of the angle is along $CD$, call the other endpoint $A$. Triangle $OCA$ has $OC=OA$. Its exterior angle $\widehat{AOD}$ equals $\widehat{OCA}+\widehat{CAO}=2\widehat{ACD}$. This proves the case with one side along the diameter.

When $CD$ lies inside $\widehat{ACB}$, it splits the angle into $\widehat{ACD}$ and $\widehat{DCB}$. The intercepted arc is likewise split into two at $D$. The arc measures are twice the corresponding angle measures just found, so their sum is twice $\widehat{ACB}$. When $CD$ lies outside, obtain the angle by subtracting the smaller of $\widehat{ACD}$ and $\widehat{BCD}$ from the larger. The corresponding arcs that do not contain $C$ are nested too. Subtracting their measures keeps the factor of two.

:::

::grafico{assi=0 uguale=1 xmin=-3.8 xmax=3.8 ymin=-3.6 ymax=3.65 curve="3*cos(t),3*sin(t),0.000000000000,6.283185307180" linee="-3,0 3,0;-3,0 1.5,2.598076 0,0" punti="-3,0;0,0;3,0;1.5,2.598076" etichette="-3.35,-0.28,C;0,-0.39,O;3.32,-0.28,D;1.67,2.89,A" titolo="With one side on the diameter, use the exterior angle at $O$"}

::grafico{assi=0 uguale=1 xmin=-3.8 xmax=3.8 ymin=-3.8 ymax=3.6 curve="3*cos(t),3*sin(t),0.000000000000,6.283185307180" linee="-3,0 1.5,2.598076; -3,0 0,-3;0,0 1.5,2.598076;0,0 0,-3" segmenti="-3,0,3,0" punti="-3,0;0,0;3,0;1.5,2.598076;0,-3" etichette="-3.36,-0.22,C;0.29,-0.28,O;3.35,-0.24,D;1.71,2.91,A;0,-3.39,B" titolo="The diameter lies inside the angle and splits the intercepted arc into two"}

::grafico{assi=0 uguale=1 xmin=-3.8 xmax=3.8 ymin=-3.6 ymax=3.6 curve="3*cos(t),3*sin(t),0.000000000000,6.283185307180" linee="-3,0 1.5,2.598076;-3,0 -1.5,2.598076;1.5,2.598076 0,0 -1.5,2.598076" segmenti="-3,0,3,0" punti="-3,0;0,0;3,0;1.5,2.598076;-1.5,2.598076" etichette="-3.34,-0.27,C;0,-0.4,O;3.3,-0.25,D;1.63,2.93,A;-1.65,2.93,B" titolo="The diameter lies outside the angle and two measures are subtracted"}

::::

:::esempio{titolo="The same chord from different sides"}

If chord $AB$ splits the circle into a $90^\circ$ arc and a $270^\circ$ arc, a point $C$ on the major arc gives $\widehat{ACB}=45^\circ$. A point $D$ on the minor arc instead gives $\widehat{ADB}=135^\circ$. Halve the measure of the arc that avoids the vertex. Moving the vertex along the same arc leaves the inscribed angle unchanged.

::grafico{assi=0 uguale=1 xmin=-4.7 xmax=4.7 ymin=-4.45 ymax=4.82 curve="4*cos(t),4*sin(t),0.000000000000,6.283185307180" linee="4,0 0,4;-4,0 0,4;-4,0 4,0;4,0 2.828427,2.828427 0,4" punti="4,0;0,4;-4,0;2.828427,2.828427" etichette="4.31,-0.28,A;0,4.46,B;-4.32,-0.29,C;3.12,3.12,D" titolo="$C$ and $D$ intercept different arcs of chord $AB$"}

:::

## Diameters and inscribed quadrilaterals

:::teorema{#semicirconferenza titolo="A diameter subtends a right angle"}

If $AB$ is a diameter and $C$ is another point on the circle, $\widehat{ACB}$ intercepts a semicircle and measures $90^\circ$. The converse also holds. If $\widehat{ACB}$ measures $90^\circ$, the arc without $C$ measures $180^\circ$. Rays $OA$ and $OB$ are opposite, so $AB$ is a diameter. All three points must lie on the circle in both directions of the argument.

:::

::::teorema{#inscritti titolo="Opposite angles of a cyclic quadrilateral"}

If the four distinct vertices of a convex quadrilateral lie on one circle, its opposite angles are supplementary.

:::dimostrazione

Angles $\widehat{ABC}$ and $\widehat{ADC}$ intercept the two arcs between $A$ and $C$. The first intercepts the arc through $D$, and the second the arc through $B$. The two arcs add to $360^\circ$, so the two inscribed measures add to $180^\circ$. Applying the same reasoning to chord $BD$ gives the property for the angles at $A$ and $C$.

:::

::grafico{assi=0 uguale=1 xmin=-4.65 xmax=4.65 ymin=-4.7 ymax=4.7 curve="4*cos(t),4*sin(t),0.000000000000,6.283185307180" linee="4.000000,0.000000 2.000000,3.464102 -3.064178,2.571150 -1.368081,-3.758770 4.000000,0.000000" segmenti="4.000000,0.000000,-3.064178,2.571150" punti="4.000000,0.000000;2.000000,3.464102;-3.064178,2.571150;-1.368081,-3.758770" etichette="4.29,-0.25,A;2.32,3.71,B;-3.37,2.81,C;-1.52,-4.13,D" titolo="The angles at $B$ and $D$ intercept the two arcs of chord $AC$"}

::::

:::esempio{titolo="Checking data for a cyclic quadrilateral"}

If $\widehat{ABC}=112^\circ$ and $\widehat{ADC}=71^\circ$, the sum is $183^\circ$. A necessary condition fails, so the four vertices cannot all lie on one circle. A rectangle has four right angles, and its circumcentre can also be found directly. The diagonals are equal and share a midpoint, so their intersection is half a diagonal away from each vertex.

:::

## Tangents and points of contact

::::teorema{#tangenti titolo="Distance of the line and perpendicularity"}

A line is tangent to a circle if it meets the circle at exactly one point. This occurs when its distance from the centre is $r$. The foot of the perpendicular from the centre is then the point of tangency $T$, and radius $OT$ is perpendicular to the line.

:::dimostrazione

Let $H$ be the foot of the perpendicular. For a point $Q$ on the line, $OQ^2=OH^2+HQ^2$. An intersection with the circle therefore requires $HQ^2=r^2-OH^2$. If $OH<r$, there are two points, one on either side of $H$. If $OH=r$, the only solution is $Q=H$. If $OH>r$, the right side is negative and the line stays outside the circle. The test also applies to a line through the centre, where $OH=0$.

:::

::grafico{assi=0 uguale=1 xmin=-4.5 xmax=4.5 ymin=-3.6 ymax=5.03 curve="3*cos(t),3*sin(t),0.000000000000,6.283185307180" linee="-4.1,1 4.1,1;-4.1,3 4.1,3;-4.1,4.22 4.1,4.22;0,2.76 0.24,2.76 0.24,3" segmenti="0,0,0,4.22" punti="0,0;-2.828427,1;2.828427,1;0,3" etichette="-0.34,-0.36,O;-3.88,1.32,s;-3.88,3.35,t;-3.88,4.55,e;0,3.37,T" titolo="$s$ has two intersections, $t$ is tangent, and $e$ is outside"}

::::

:::esempio{titolo="The two tangents from one point"}

For an exterior point $P$, find the contacts $S,T$ by intersecting the given circle with the circle of diameter $OP$. The angle at each common point is right, so the radius there is perpendicular to the line through $P$. This gives two distinct points, reflected across line $OP$. At a point on the circle there is one tangent, perpendicular to the radius. From an interior point there is no tangent.

Triangles $OSP$ and $OTP$ are right triangles with the same hypotenuse $OP$ and equal radii. The Pythagorean theorem gives $PS=PT=\sqrt{OP^2-r^2}$. With $OP=5$ and $r=3$, each tangent segment measures $4$. In each triangle, $OP$ joins two distinct points and is the hypotenuse.

The tangent segment also gives a way to recover the radius. If $PT=12$ cm and $OP=13$ cm, use $OT^2=13^2-12^2=25$, so $r=5$ cm. The perpendicular sides are $OT$ and $PT$, which meet at the point of contact. Line $OP$ goes through the centre and is distinct from both tangents.

::grafico{assi=0 uguale=1 xmin=-3.6 xmax=5.8 ymin=-3.5 ymax=3.65 curve="3*cos(t),3*sin(t),0.000000000000,6.283185307180" linee="0,0 1.8,2.4 5,0 1.8,-2.4 0,0" segmenti="0,0,5,0" punti="0,0;5,0;1.8,2.4;1.8,-2.4" etichette="-0.34,-0.33,O;5.3,-0.32,P;1.96,2.73,T;1.93,-2.83,S" titolo="The two points of tangency are reflections across line $OP$"}

:::

## Regular polygons and the apothem

::::teorema{#poligoni titolo="Angles, radii, and area of a regular polygon"}

A regular convex polygon has all sides congruent and all its interior angles congruent. The vertices lie on the circumcircle, and the sides are tangent to the incircle. The centres coincide. The **apothem** $a$ is the perpendicular segment from the centre to a side. Its length equals the incircle radius. The circumradius $R$ reaches a vertex.

With $n\ge3$ sides, the central angle between consecutive vertices is $\dfrac{360^\circ}{n}$ and the interior angle is $180^\circ-\dfrac{360^\circ}{n}$. For perimeter $p$, its area is $\dfrac{pa}{2}$.

:::dimostrazione

A rigid motion preserving orientation maps one directed side of the polygon to the next. Since all sides have equal length and the turn at each vertex is the same, the motion takes every other side to the next as well. The sides change direction, so the motion is a rotation about a centre $O$.

The point $O$ is fixed by the rotation. Its distances to the vertices are therefore equal, as are its distances to the lines through the sides. Joining the centre to the vertices gives $n$ congruent isosceles triangles. Their central angles divide $360^\circ$ into $n$ equal parts. Two base angles of those triangles meet at each polygon vertex. They add to $180^\circ-\dfrac{360^\circ}{n}$, the interior angle of the polygon.

Each triangle has area equal to half the product of its polygon side and the apothem. The bases add to the perimeter, so the areas add to $\dfrac{pa}{2}$.

:::

::grafico{assi=0 uguale=1 xmin=-4.6 xmax=4.65 ymin=-4.55 ymax=4.65 curve="4*cos(t),4*sin(t),0.000000000000,6.283185307180;3.464101615*cos(t),3.464101615*sin(t),0.000000000000,6.283185307180" linee="4.000000,0.000000 2.000000,3.464102 -2.000000,3.464102 -4.000000,0.000000 -2.000000,-3.464102 2.000000,-3.464102 4.000000,0.000000;0,0 4,0;0,0 2,3.464102;0,0 3,1.732051" punti="0,0;4,0;2,3.464102;3,1.732051" etichette="-0.27,-0.35,O;4.32,-0.24,A;2.17,3.79,B;3.22,1.98,H;1.76,-0.31,R;1.33,1.03,a" titolo="$OA$ is a circumradius, and $OH$ is the apothem"}

::::

:::esempio{titolo="The hexagon and the octagon"}

For a regular hexagon, the central angle is $60^\circ$. Each central isosceles triangle therefore has three $60^\circ$ angles and is equilateral. A hexagon side equals the circumradius. With side length $8$ cm, the perimeter is $48$ cm and the apothem is $\sqrt{8^2-4^2}=4\sqrt3$ cm.

In a regular octagon, the central angle is $45^\circ$ and the interior angle is $135^\circ$. The exterior angle forming a linear pair with the interior angle is $45^\circ$. Its measure equals that of the central angle, but they have different vertices and describe different constructions.

:::

## Inscribed and circumscribed polygons

:::osservazione{#circoscritti titolo="Vertices on a circle and tangent sides"}

A polygon is **inscribed** in a circle if every vertex lies on it. A polygon is **circumscribed** about a circle if all sides are tangent and the circle lies inside it. For a regular polygon the two descriptions refer to different circles. A circumscribed quadrilateral can also have sides of different lengths.

In a circumscribed quadrilateral $ABCD$, the sums $AB+CD$ and $BC+DA$ are equal. If the tangent segments from $A,B,C,D$ have respective lengths $u,v,w,z$, each side adds the contributions from its endpoints. Both sums of opposite sides are $u+v+w+z$. For example, if $AB=8$, $BC=6$, and $CD=5$, then $DA=8+5-6=7$.

::grafico{assi=0 uguale=1 xmin=-3.08 xmax=2.8 ymin=-2.66 ymax=3.72 curve="2*cos(t),2*sin(t),0.000000000000,6.283185307180" linee="2,-2 2,1.400415 -2.571150,3.064178 -1.678199,-2 2,-2" punti="2,-2;2,1.400415;-2.571150,3.064178;-1.678199,-2;2,0;0.684040,1.879385;-1.969616,-0.347296;0,-2" etichette="2.15,-2.36,A;2.31,1.58,B;-2.78,3.4,C;-1.8,-2.35,D" titolo="Tangency divides each side into the two portions from its two vertices"}

:::

## Circumferences and arc lengths

:::teorema{#lunghezze titolo="The fraction of a full turn"}

The circumference is $C=2\pi r$. For an arc corresponding to a central angle of measure $\alpha$, with $0<\alpha<360^\circ$, we have

$$
\ell=\dfrac{\alpha}{360^\circ}\,2\pi r.
$$

Arcs of equal measure on the same circle have equal lengths by rotation. A fraction of a full turn therefore gives the same fraction of total circumference. With $\alpha=60^\circ$ and $r=6$ cm, the arc length is $2\pi$ cm. If an inscribed angle is given, first double its measure to find the arc measure.

The relation can recover the angle. An arc of length $5\pi$ cm on a circle of radius $10$ cm takes up one quarter of the total $20\pi$ cm. Its central angle therefore measures $90^\circ$. The fraction is a ratio of lengths measured in the same unit. Keep $\pi$ in exact results.

:::

## Areas of disks, sectors, and annuli

:::teorema{#aree titolo="The sector's area and boundary"}

The area of the disk is $\pi r^2$. A sector of central angle $\alpha$ occupies the fraction $\dfrac{\alpha}{360^\circ}$ of the disk. For $0<\alpha<360^\circ$, its area and perimeter are

$$
\begin{aligned}
A_{\mathrm{s}}&=\dfrac{\alpha}{360^\circ}\,\pi r^2,\\[6pt]
P_{\mathrm{s}}&=\ell+2r .
\end{aligned}
$$

The perimeter follows the arc and the two radii. For a quarter disk of radius $r=4$ cm, the arc length is $2\pi$ cm, the sector perimeter is $2\pi+8$ cm, and its area is $4\pi$ cm$^2$. The three results describe the arc, the whole boundary, and the surface. Eliminating the common fraction of the turn also gives $A_{\mathrm{s}}=\dfrac{r\ell}{2}$. For an arc of length $9$ cm and radius $6$ cm, the area is $27$ cm$^2$ without finding the angle.

::grafico{assi=0 uguale=1 xmin=-0.8 xmax=4.65 ymin=-0.74 ymax=4.65 curve="4*cos(t),4*sin(t),0.000000000000,1.570796326795" poligoni="0,0 4.000000,0.000000 3.984779,0.348623 3.939231,0.694593 3.863703,1.035276 3.758770,1.368081 3.625231,1.690473 3.464102,2.000000 3.276608,2.294306 3.064178,2.571150 2.828427,2.828427 2.571150,3.064178 2.294306,3.276608 2.000000,3.464102 1.690473,3.625231 1.368081,3.758770 1.035276,3.863703 0.694593,3.939231 0.348623,3.984779 0.000000,4.000000" linee="4,0 0,0 0,4" punti="0,0;4,0;0,4" etichette="-0.19,-0.37,O;4.16,-0.37,A;-0.18,4.32,B;2,-0.37,4;-0.3,2,4" titolo="The sector boundary includes two radii and arc $AB$"}

:::

:::esempio{titolo="An annulus and a portion of it"}

An annulus between concentric radii $R>r$ has area $\pi(R^2-r^2)$, the difference between the two disk areas. For an annular sector bounded by two radial lines, take the same fraction of a turn from both disks. With $R=8$ cm, $r=5$ cm, and $\alpha=120^\circ$, the area is $\dfrac13\pi(64-25)=13\pi$ cm$^2$. Its boundary includes two arcs and two straight parts of length $R-r$ each.

:::
