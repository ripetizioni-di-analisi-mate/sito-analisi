---
titolo: Circles, disks, and polygons
sommario: Chords, central and inscribed angles, tangents, inscribed and circumscribed polygons, arcs, and areas.
---

## Circle and disk

:::definizione{#definizione titolo="Points at a given distance"}
The **circle** with center $O$ and radius $r>0$ is the set of points at distance $r$ from $O$. The **disk** includes the circle and the region inside it. A radius joins the center to a point on the circle. A chord joins two points on the circle.

A diameter is a chord through the center and measures $2r$. For $r=4$, the diameter is $8$. The two endpoints of a chord divide the circumference into two arcs, which must be distinguished when discussing angles.

::grafico{curve="3*cos(t),3*sin(t),0,6.283185307" linee="0,0 3,0;-3,0 3,0" punti="0,0,pieno,O;3,0,pieno,A;-3,0,pieno,B" xmin=-4 xmax=4 ymin=-4 ymax=4 uguale=1 titolo="A diameter and a radius of the same circle"}
:::

## Chords and distances

:::teorema{#corde titolo="The perpendicular from the center"}
A perpendicular from the center to a chord divides the chord into two congruent segments. The two right triangles have congruent hypotenuses, since both are radii, and share a leg. They are therefore congruent.

If $d$ is the distance from the center to the chord, the chord length is $2\sqrt{r^2-d^2}$, with $0\le d<r$. For $r=5$ and $d=3$, half the chord measures $4$, so the whole chord measures $8$.

In the same circle, congruent chords are at the same distance from the center. Of two chords, the one closer to the center is longer, as the preceding formula shows.

::grafico{curve="5*cos(t),5*sin(t),0,6.283185307" linee="-4,3 4,3;0,0 0,3;0,0 4,3" punti="0,0,pieno,O;-4,3,pieno,A;4,3,pieno,B;0,3,pieno,H" xmin=-6 xmax=6 ymin=-6 ymax=6 uguale=1 titolo="With radius $5$ and distance $OH=3$, the chord measures $8$"}
:::

## Angles intercepting the same arc

:::teorema{#angoli titolo="Central and inscribed angles"}
A central angle has its vertex at the center. An inscribed angle has its vertex on the circle and sides that meet the circle again. When the angles intercept the same arc, the inscribed angle is half the central angle.

For a central angle of $100^\circ$, the inscribed angle on the same arc measures $50^\circ$. All inscribed angles intercepting the same arc are therefore congruent.

When one side of the inscribed angle passes through the center, the triangle formed by the two radii is isosceles. The exterior-angle theorem shows that the central angle is twice the inscribed angle. The other cases follow by adding or subtracting two configurations of this kind.

::grafico{curve="3*cos(t),3*sin(t),0,6.283185307" linee="3,0 0,0 1.5,2.598076;-3,0 3,0;-3,0 1.5,2.598076" punti="0,0,pieno,O;3,0,pieno,A;1.5,2.598076,pieno,B;-3,0,pieno,C" xmin=-4 xmax=4 ymin=-4 ymax=4 uguale=1 titolo="On minor arc $AB$, angle $AOB$ is $60^\circ$ and angle $ACB$ is $30^\circ$"}
:::

:::esempio{titolo="Two locations for viewing the same chord"}

The endpoints $A$ and $B$ of the chord divide the circle into arcs of $90^\circ$ and $270^\circ$. A point $C$ on the major arc intercepts the minor arc, so $\angle ACB=45^\circ$. A point $D$ on the minor arc intercepts the major arc, so $\angle ADB=135^\circ$. Moving across the chord changes the intercepted arc.

::grafico{assi=0 uguale=1 curve="4*cos(t),4*sin(t),0,6.283185307" linee="4,0 0,4;-4,0 0,4;-4,0 4,0;4,0 2.828427,2.828427 0,4" punti="4,0,pieno,A;0,4,pieno,B;-4,0,pieno,C;2.828427,2.828427,pieno,D" xmin=-5 xmax=5 ymin=-4.6 ymax=5 titolo="Points $C$ and $D$ lie on different arcs cut off by the same chord"}
:::

## Semicircles and quadrilaterals

:::teorema{#inscritti titolo="Right angles and opposite angles"}
An inscribed angle that intercepts a diameter measures $90^\circ$ because the corresponding central angle measures $180^\circ$. An inscribed triangle with one side along a diameter is therefore a right triangle.

In a convex cyclic quadrilateral, opposite angles are supplementary. They intercept two arcs that together form the full circle, so the sum of their measures is half of $360^\circ$.

If one angle in a cyclic quadrilateral measures $112^\circ$, the opposite angle measures $68^\circ$. All four vertices of a cyclic quadrilateral lie on the same circle.
:::

## Tangents

:::teorema{#tangenti titolo="The perpendicular radius"}
A tangent line has exactly one point in common with the circle. The radius to the point of contact is perpendicular to the tangent.

From an external point $P$, the tangent segments $PT$ and $PS$ are congruent. Right triangles $OTP$ and $OSP$ share the hypotenuse $OP$ and have congruent radii as legs, so they are congruent.

If $OP=13$ and $r=5$, the tangent segment measures $\sqrt{13^2-5^2}=12$. The point must lie outside the circle, so $OP>r$. No tangents can be drawn from an interior point.

::grafico{curve="3*cos(t),3*sin(t),0,6.283185307" linee="0,0 5,0 1.8,2.4 0,0" punti="0,0,pieno,O;5,0,pieno,P;1.8,2.4,pieno,T" xmin=-4 xmax=6 ymin=-4 ymax=4 uguale=1 titolo="With $OT=3$ and $OP=5$, tangent segment $PT$ measures $4$"}
:::

## Regular polygons

:::definizione{#poligoni titolo="Angles and apothem"}
A **regular polygon** has congruent sides and congruent angles. With $N$ sides, each central angle measures $\dfrac{360^\circ}{N}$, and each interior angle measures $\dfrac{(N-2)180^\circ}{N}$.

The circumscribed and inscribed circles share the same center. The **apothem** is the distance from the center to a side and is the radius of the inscribed circle.

In a regular hexagon, the side length equals the radius of the circumscribed circle. The six triangles with a vertex at the center have central angle $60^\circ$ and are equilateral.

In a quadrilateral circumscribed about a circle, the sums of opposite side lengths are equal because the two tangent segments from each vertex are congruent.
:::

:::esempio{titolo="Distinguishing interior, exterior, and central angles"}

In a regular octagon, a full turn is divided into eight central angles of $45^\circ$. Moving from one side to the next changes direction by $45^\circ$, the exterior angle. The interior angle is supplementary to it, so it is $180^\circ-45^\circ=135^\circ$.
:::

## Circumference and arcs

:::teorema{#lunghezze titolo="Length and proportions"}
The circumference is $C=2\pi r$. The length of an arc with central angle $\alpha$ measured in degrees is
$$
\ell=\frac{\alpha}{360^\circ}\,2\pi r.
$$
For $r=6$ and $\alpha=60^\circ$, the arc length is $2\pi$. Take one sixth of the circumference because the angle is one sixth of a full turn.

The radius and the arc must be expressed in the same unit of length. Keep $\pi$ in exact results. Use a decimal approximation when requested.
:::

## Disks and sectors

:::teorema{#aree titolo="Areas of circular regions"}
The area of the disk is $A=\pi r^2$. The area of a sector with central angle $\alpha$ is
$$
A_{\mathrm{settore}}=\frac{\alpha}{360^\circ}\,\pi r^2.
$$
For $r=4$ and $\alpha=90^\circ$, this gives $4\pi$. An annulus between concentric circles with radii $R>r$ has area $\pi(R^2-r^2)$.

The sector area and the arc length use the same fraction of a full turn, but multiply different quantities. The perimeter of a sector includes the arc and both radii. For a quarter circle of radius $4$, it is $2\pi+8$.
:::
