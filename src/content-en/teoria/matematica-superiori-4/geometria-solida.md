---
titolo: Euclidean geometry in space
sommario: How points, lines, and planes are arranged in space, what perpendicularity, distances, and angles between lines and planes mean, how to identify polyhedra and solids of revolution and calculate their surface areas and volumes, and how to apply Cavalieri's principle and work with inscribed and circumscribed solids.
---

## Points, lines, and planes in space

:::definizione{#postulati-spazio titolo="Incidence postulates in space"}
The primitive objects of solid geometry are the **point**, the **line**, and the **plane**. Primitive objects are left undefined, and their properties are specified by postulates. The incidence postulates are as follows.
- Exactly one plane passes through any three noncollinear points.
- If two points on a line lie in a plane, then the entire line lies in that plane.
- If two distinct planes share a point, then they share a line passing through that point.

The postulates help determine when several points or several lines lie in the same plane. A three-legged table always stands on the floor with all three legs touching, since the ends of the legs are three noncollinear points and therefore determine a plane. With four legs, the fourth point can lie outside that plane.
:::

:::teorema{#individuare-piano titolo="How to determine a plane"}
A plane is uniquely determined by three noncollinear points, by a line and a point outside it, by two intersecting lines, or by two distinct parallel lines. The last three cases reduce to the first by choosing three noncollinear points from the given lines and point. In cube $ABCDEFGH$, with base $ABCD$ and lateral edges $AE$, $BF$, $CG$, and $DH$, the parallel edges $AE$ and $CG$ determine a plane that cuts the cube in the rectangle $ACGE$.
:::

:::definizione{#posizioni-rette titolo="Relative positions of two lines"}
Two distinct lines in space are:
- **intersecting** if they have exactly one point in common.
- **parallel** if they lie in the same plane and have no points in common.
- **skew** if no plane contains them both.

Intersecting lines and parallel lines are **coplanar**, meaning that they lie in the same plane. Two skew lines have no points in common, as is also true of two parallel lines. What distinguishes the two cases is that parallel lines lie in a common plane, whereas skew lines do not. In the cube in the figure, edges $AB$ and $BC$ intersect at $B$. Edges $AB$ and $HG$ are parallel since they lie in plane $ABGH$ and have no points in common, and edges $AB$ and $CG$ are skew.

::grafico{assi=0 uguale=1 linee="0,0 4,0 5.41,1.41;0,0 0,4 4,4 4,0;4,4 5.41,5.41 5.41,1.41;0,4 1.41,5.41 5.41,5.41" segmenti="0,0,1.41,1.41;1.41,1.41,5.41,1.41;1.41,1.41,1.41,5.41" etichette="-0.5,-0.5,A;4.15,-0.5,B;5.61,1.11,C;0.86,1.56,D;-0.5,4.1,E;4.15,3.55,F;5.56,5.56,G;0.96,5.61,H" xmin=-1.1 xmax=6.21 ymin=-1.1 ymax=6.21 legenda=0 titolo="In cube $ABCDEFGH$, lines $AB$ and $CG$ have no points in common and do not lie in the same plane, so they are skew"}

:::

:::attenzione
Two lines with no points in common need not be parallel. If $AB$ and $CG$ were parallel, they would lie in a plane containing $A$, $B$, and $C$, that is, the plane of the base. However, point $G$ does not lie in the plane of the base, so the two lines are **skew**.
:::

:::definizione{#posizioni-retta-piano titolo="Relative positions of a line and a plane, and of two planes"}
A line and a plane can have three relative positions:
- the line **lies in** the plane if at least two points of the line are in the plane.
- the line **intersects** the plane if it has exactly one point in common with the plane.
- the line is **parallel** to the plane if it has no points in common with the plane.

Two distinct planes **intersect** if they share a line and are **parallel** if they have no points in common. The third incidence postulate rules out other cases. A line outside a plane is parallel to that plane if it is parallel to a line in the plane. In the cube, edge $EF$ is parallel to edge $AB$ of the base and is therefore parallel to the plane of the base, whereas edge $AE$ intersects the plane of the base at $A$. The plane of the base and the plane of face $ABFE$ intersect along line $AB$. The plane of the base and that of face $EFGH$ are parallel.
:::

## Perpendicular lines and planes

:::definizione{#retta-perpendicolare-piano titolo="A line perpendicular to a plane"}
A line $r$ intersecting a plane $\alpha$ at point $H$ is **perpendicular** to the plane if it is perpendicular to *every* line in $\alpha$ through $H$. The point $H$ is called the **foot** of the perpendicular. A vertical pole set in the ground is a concrete example. It makes a right angle with every line on the ground passing through its base.

Exactly one line through a given point in space is perpendicular to a given plane, and exactly one plane through a given point is perpendicular to a given line. These two properties allow us to speak of the perpendicular from a point to a plane.
:::

:::teorema{#criterio-perpendicolarita titolo="Criterion for a line to be perpendicular to a plane"}
If a line $r$ intersects plane $\alpha$ at point $H$ and is perpendicular to two distinct lines in $\alpha$ through $H$, then $r$ is perpendicular to plane $\alpha$.

With this criterion, only two lines need to be checked instead of infinitely many. In the cube with edge length $4$, edge $AE$ is perpendicular to edges $AB$ and $AD$ because the faces are squares. Therefore $AE$ is perpendicular to the plane of the base and, in particular, to diagonal $AC$. Thus triangle $ACE$ has a right angle at $A$. Since $AC = 4\sqrt{2}$, the space diagonal of the cube has length
$$
CE = \sqrt{AE^2 + AC^2} = \sqrt{16 + 32} = \sqrt{48} = 4\sqrt{3} .
$$
:::

:::teorema{#tre-perpendicolari titolo="Three perpendiculars theorem"}
Let $PH$ be a segment perpendicular to plane $\alpha$, with $H$ in $\alpha$, and let $r$ be a line in $\alpha$ that does not pass through $H$. If $A$ is the foot of the perpendicular from $H$ to line $r$, then segment $PA$ is perpendicular to line $r$.

::grafico{assi=0 uguale=1 curve="1.89+(7.4)*t,1.59+(0)*t,0,1" poligoni="0,0 8,0 10.12,2.12 2.12,2.12" linee="0,0 8,0 10.12,2.12 2.12,2.12 0,0;3.42,4.42 3.42,0.42;3.42,0.42 4.59,1.59;3.42,4.42 4.59,1.59;3.58,0.58 3.58,1.03 3.42,0.87;4.43,1.43 4.88,1.43 5.04,1.59" punti="3.42,4.42,pieno,P;4.59,1.59,pieno,A;3.42,0.42,pieno" etichette="2.72,0.12,H;9.29,1.84,r;7.31,0.11,α" xmin=-0.6 xmax=10.72 ymin=-0.6 ymax=5.02 legenda=0 titolo="Three perpendiculars theorem. Since $PH$ is perpendicular to plane $\alpha$ and $HA$ is perpendicular to line $r$, $PA$ is also perpendicular to $r$"}

The three perpendiculars are $PH$ to the plane, $HA$ to line $r$, and $PA$ to line $r$. The theorem can be used to find the distance from a point to a line in a plane. For example, if $PH = 3$ and the distance from $H$ to line $r$ is $HA = 4$, then $PA$ is perpendicular to $r$ and triangle $PHA$ has a right angle at $H$, so the distance from $P$ to $r$ is
$$
PA = \sqrt{3^2 + 4^2} = 5 .
$$
We will use this theorem to identify the altitude of a lateral face of a pyramid.
:::

## Projections and distances

::::teorema{#perpendicolare-obliqua titolo="Perpendicular and oblique segments"}
Let $P$ be a point outside plane $\alpha$ and let $H$ be the foot of the perpendicular from $P$ to $\alpha$. The point $H$ is called the **orthogonal projection** of $P$ onto $\alpha$, and segment $HA$ is the projection of the oblique segment $PA$. Then:
- for each point $A$ in $\alpha$ distinct from $H$, we have $PA > PH$.
- two oblique segments $PA$ and $PB$ are congruent if and only if their projections $HA$ and $HB$ are congruent.

::grafico{assi=0 uguale=1 curve="3.71+(4)*t,4.71+(-4)*t,0,1" poligoni="0,0 9,0 11.12,2.12 2.12,2.12" linee="0,0 9,0 11.12,2.12 2.12,2.12 0,0;3.71,4.71 3.71,0.71;3.71,0.71 7.71,0.71;4.16,0.71 4.16,1.16 3.71,1.16" punti="3.71,4.71,pieno,P;3.71,0.71,pieno,H;7.71,0.71,pieno,A" etichette="8.31,0.11,α" xmin=-0.6 xmax=11.72 ymin=-0.6 ymax=5.31 legenda=0 titolo="Perpendicular segment $PH$ and oblique segment $PA$. Triangle $PHA$ has a right angle at $H$, so $PA > PH$"}

The theorem states that $PH$ is the shortest segment from $P$ to the plane. For example, with $PH = 5$ and $HA = 12$, the oblique segment has length $PA = \sqrt{25 + 144} = 13$, which is greater than $5$. The second part shows that the points of the plane at a fixed distance from $P$ form a circle with center $H$.

:::dimostrazione
The idea is to use the Pythagorean theorem in triangle $PHA$. Line $PH$ is perpendicular to $\alpha$, so it is perpendicular to line $HA$, which lies in $\alpha$ and passes through $H$. Therefore triangle $PHA$ has a right angle at $H$, and
$$
PA^2 = PH^2 + HA^2 .
$$
Since $A \neq H$, we have $HA^2 > 0$, so $PA^2 > PH^2$ and $PA > PH$. For the second part, write the same relationship for $B$, namely $PB^2 = PH^2 + HB^2$. Thus $PA = PB$ if and only if $HA^2 = HB^2$, that is, if and only if $HA = HB$.
:::
::::

:::definizione{#distanze titolo="Distances in space"}
The **distance from a point to a plane** is the length of the perpendicular segment $PH$, which is the shortest of all segments joining the point to the plane. The other distances reduce to this one.
- The distance between two parallel planes is the distance from any point in one plane to the other plane.
- The distance between a line and a plane parallel to it is the distance from any point on the line to the plane.
- The distance between two skew lines is the length of the segment that joins them and is perpendicular to both. This segment is called the **common perpendicular**, and exactly one such segment exists for each pair of skew lines.

In the cube with edge length $4$, vertex $G$ is at a distance of $4$ from the plane of the base, and the top face is at a distance of $4$ from the base. For skew lines $AB$ and $CG$, the common perpendicular is edge $BC$, which is perpendicular to $AB$ in the base and to $CG$ in face $BCGF$. Therefore the distance between the lines is $BC = 4$.
:::

## Angles between lines and planes, and dihedral angles

:::definizione{#angolo-retta-piano titolo="Angle between a line and a plane"}
If a line $r$ is oblique to plane $\alpha$, meaning that it intersects the plane without being perpendicular to it, the **angle between the line and the plane** is the acute angle between $r$ and its orthogonal projection onto $\alpha$. If $r$ is perpendicular to $\alpha$, the angle is a right angle. If $r$ is parallel to $\alpha$ or lies in $\alpha$, the angle is zero.

In right triangle $PHA$, the angle $\theta$ at $A$ can be found using trigonometry, since $PH = PA \sin\theta$ and $HA = PA \cos\theta$. In the cube with edge length $4$, diagonal $CE$ projects onto the base diagonal $CA$, since $A$ is the projection of $E$. The angle $\theta$ between the space diagonal and the base therefore satisfies
$$
\tan\theta = \frac{AE}{AC} = \frac{4}{4\sqrt{2}} = \frac{\sqrt{2}}{2} ,
\qquad
\theta = \arctan\frac{\sqrt{2}}{2} \approx 35.3° .
$$
:::

:::definizione{#diedro titolo="A dihedral angle and its normal section"}
Two half-planes $\alpha$ and $\beta$ with the same boundary line $s$ divide space into two regions. Each region together with the two half-planes is called a **dihedral angle**. Line $s$ is the **edge** of the dihedral angle, and the half-planes are its **faces**. The **normal section** of a dihedral angle is the angle obtained by cutting it with a plane perpendicular to the edge. It is the angle between two rays, one in each face, perpendicular to $s$ at the same point.

::grafico{assi=0 uguale=1 poligoni="0,0 5,0 7.12,2.12 2.12,2.12;0,0 2.5,4.33 4.62,6.45 2.12,2.12" linee="0,0 5,0 7.12,2.12 2.12,2.12;0,0 2.5,4.33 4.62,6.45 2.12,2.12;-0.28,-0.28 2.4,2.4;5.06,1.06 1.06,1.06 3.06,4.52;2.16,1.06 2.16,1.16 2.14,1.25 2.12,1.35 2.09,1.44 2.06,1.53 2.01,1.61 1.96,1.69 1.9,1.77 1.84,1.84 1.77,1.9 1.69,1.96 1.61,2.01" etichette="2.29,1.71,θ;2.5,2.5,s;4.54,0.14,α;2.44,3.87,β" xmin=-0.88 xmax=7.72 ymin=-0.88 ymax=7.05 legenda=0 titolo="Dihedral angle with edge $s$ and faces $\alpha$ and $\beta$. Its normal section is the angle $\theta$ between two rays perpendicular to the edge"}

All normal sections of a dihedral angle are congruent, so the **measure of a dihedral angle** is defined as the measure of its normal section. A dihedral angle is right when its normal section is a right angle. In this case, the planes containing its faces are **perpendicular**. For example, two adjacent faces of a cube form a right dihedral angle because the normal section along edge $AB$ is angle $\widehat{DAE}$, which is a right angle.
:::

:::esempio{titolo="Dihedral angle between the base and a lateral face of a pyramid"}
A regular pyramid has a square base $ABCD$ with side length $6$ and height $VH = 4$, where $H$ is the center of the square. We seek the measure of the dihedral angle with edge $AB$ formed by the base and face $VAB$. Let $M$ be the midpoint of $AB$. Segment $HM$ is perpendicular to $AB$ and has length $3$, half the side length. By the **three perpendiculars theorem**, applied to $VH$ perpendicular to the base and $HM$ perpendicular to $AB$, it follows that $VM$ is also perpendicular to $AB$. Therefore angle $\widehat{VMH}$ is the normal section of the dihedral angle, and in triangle $VHM$, with a right angle at $H$, we have
$$
\tan\widehat{VMH} = \frac{VH}{HM} = \frac{4}{3} ,
\qquad
\widehat{VMH} = \arctan\frac{4}{3} \approx 53.1° .
$$

::grafico{assi=0 uguale=1 curve="0+(-1.06)*t,4+(-5.06)*t,0,1" linee="-4.06,-1.06 1.94,-1.06 4.06,1.06;-4.06,-1.06 0,4 1.94,-1.06;0,4 4.06,1.06" segmenti="4.06,1.06,-1.94,1.06;-1.94,1.06,-4.06,-1.06;0,4,-1.94,1.06;0,4,0,0;0,0,-1.06,-1.06" etichette="-4.56,-1.56,A;2.09,-1.56,B;4.26,0.86,C;-2.49,1.16,D;0.1,4.2,V;0.15,-0.1,H;-1.01,-1.66,M;-1.13,-0.48,3;0.15,2,4" xmin=-5.16 xmax=4.86 ymin=-2.26 ymax=4.8 legenda=0 titolo="In the regular pyramid with square base $ABCD$, the slant height $VM$ and segment $HM$ are perpendicular to edge $AB$. Angle $\widehat{VMH}$ is the normal section of the dihedral angle with edge $AB$"}

:::

## Polyhedra, prisms, and parallelepipeds

:::definizione{#poliedro titolo="Polyhedron"}
A **polyhedron** is the region of space bounded by a finite number of polygons arranged so that each side of a polygon is a side of exactly one other polygon. The polygons are the **faces**, their sides are the **edges**, and their vertices are the **vertices** of the polyhedron. A polyhedron is **convex** if, for each face, the entire polyhedron lies on one side of the plane of that face. A cube is a convex polyhedron with $6$ square faces, $12$ edges, and $8$ vertices.
:::

:::definizione{#prisma titolo="Prism"}
A **prism** is a polyhedron bounded by two congruent polygons in parallel planes, its **bases**, and by the parallelograms joining corresponding sides of the bases, its **lateral faces**. The **height** of a prism is the distance between the planes of its bases. A prism is **right** if its lateral edges are perpendicular to its bases. In this case its lateral faces are rectangles and its height equals the length of a lateral edge. A right prism is **regular** if its bases are regular polygons. A regular prism with a hexagonal base has $8$ faces, $18$ edges, and $12$ vertices.
:::

::::teorema{#aree-prisma titolo="Lateral and total surface areas of a right prism"}
Consider a right prism with base area $B$, base perimeter $2p$, and height $h$. Its lateral surface area $A_l$ and total surface area $A_t$ are
$$
A_l = 2p \cdot h ,
\qquad
A_t = A_l + 2B .
$$
For example, consider a right prism of height $10$ whose base is a right triangle with legs $3$ and $4$. The base has hypotenuse $5$, perimeter $2p = 12$, and area $B = 6$. Therefore $A_l = 12 \cdot 10 = 120$ and $A_t = 120 + 12 = 132$.

:::dimostrazione
The lateral faces of a right prism are rectangles. The base of each rectangle is a side of the base polygon and its height is the lateral edge of the prism, of length $h$. If the sides of the base are $l_1, l_2, \dots, l_n$, the sum of the areas of the lateral faces is $l_1 h + l_2 h + \dots + l_n h = (l_1 + l_2 + \dots + l_n)\, h = 2p \cdot h$. For the total surface area, add the areas of the two congruent bases, each of area $B$.
:::
::::

:::definizione{#parallelepipedo titolo="Parallelepiped"}
A **parallelepiped** is a prism whose bases are parallelograms. Hence all six faces are parallelograms, and opposite faces are congruent and lie in parallel planes. A right parallelepiped with a rectangular base is called a **rectangular prism**. It has six rectangular faces, and the three edges from the same vertex have lengths $a$, $b$, and $c$, called its **dimensions**. A **cube** is a rectangular prism whose three dimensions are equal. The total surface area of a rectangular prism is $A_t = 2\,(ab + ac + bc)$, since the faces form three pairs of congruent rectangles. For $a = 3$, $b = 4$, and $c = 12$, we obtain $A_t = 2\,(12 + 36 + 48) = 192$.
:::

::::teorema{#diagonale-parallelepipedo titolo="Space diagonal of a rectangular prism"}
In a rectangular prism with dimensions $a$, $b$, and $c$, the space diagonal has length
$$
d = \sqrt{a^2 + b^2 + c^2} .
$$
In particular, the space diagonal of a cube with edge length $l$ has length $d = \sqrt{3l^2} = l\sqrt{3}$. For dimensions $3$, $4$, and $12$, we obtain $d = \sqrt{9 + 16 + 144} = \sqrt{169} = 13$. The formula can also be used in reverse to find one dimension given the diagonal and the other two dimensions.

::grafico{assi=0 uguale=1 curve="0+(7.41)*t,0+(1.41)*t,0,1;0+(7.41)*t,0+(4.41)*t,0,1" linee="0,0 6,0 7.41,1.41;0,0 0,3 6,3 6,0;6,3 7.41,4.41 7.41,1.41;0,3 1.41,4.41 7.41,4.41" segmenti="0,0,1.41,1.41;1.41,1.41,7.41,1.41;1.41,1.41,1.41,4.41" etichette="-0.5,-0.5,A;6.15,-0.5,B;7.61,1.11,C;0.86,1.56,D;-0.5,3.1,E;6.15,2.55,F;7.56,4.56,G;0.96,4.61,H;3,-0.55,a;6.91,0.51,b;6.15,1.5,c" xmin=-1.1 xmax=8.21 ymin=-1.15 ymax=5.21 legenda=0 titolo="The space diagonal $AG$ of the rectangular prism is the hypotenuse of triangle $ACG$, which has a right angle at $C$. Segment $AC$ is a diagonal of the base"}

:::dimostrazione
The idea is to apply the Pythagorean theorem twice, first in the base and then in triangle $ACG$. Let $AB = a$, $BC = b$, and $CG = c$. Triangle $ABC$ has a right angle at $B$, so the base diagonal has length
$$
AC^2 = a^2 + b^2 .
$$
Edge $CG$ is perpendicular to edges $CB$ and $CD$, which lie in the base and pass through $C$. By the perpendicularity criterion, $CG$ is perpendicular to the plane of the base and therefore to line $CA$. Thus triangle $ACG$ has a right angle at $C$, and
$$
AG^2 = AC^2 + CG^2 = a^2 + b^2 + c^2 .
$$
Taking the square root gives the formula.
:::
::::

## Pyramids and frustums of pyramids

:::definizione{#piramide titolo="Pyramids, right pyramids, and regular pyramids"}
A **pyramid** is a polyhedron bounded by a polygon, its **base**, and the triangles whose bases are the sides of that polygon and whose common vertex is a point $V$ outside the plane of the base. The **height** is the distance $VH$ from the vertex to the plane of the base. A pyramid with a triangular base is called a **tetrahedron**.

A pyramid is **right** if its base has an inscribed circle and the foot $H$ of its altitude is the center of that circle. It is **regular** if, in addition, the base is a regular polygon. In a right pyramid, the altitudes of its lateral faces drawn from $V$ are congruent, and their common length is called the **slant height** of the pyramid.
:::

:::richiamo{titolo="Three perpendiculars theorem"}
If $PH$ is perpendicular to plane $\alpha$, with $H$ in $\alpha$, and $HA$ is perpendicular to line $r$ in $\alpha$, with $A$ on $r$, then $PA$ is perpendicular to $r$.
:::

::::teorema{#apotema-piramide titolo="Slant height of a right pyramid"}
Consider a right pyramid of height $h$, and let $r$ be the radius of the circle inscribed in its base. The slant height $a$ of the pyramid satisfies
$$
a = \sqrt{h^2 + r^2} .
$$
In a regular pyramid with a square base of side $6$ and height $4$, the radius of the circle inscribed in the square is half its side, namely $3$, so the slant height is $a = \sqrt{16 + 9} = 5$. To find the lateral edge $VA$, use the distance $HA = 3\sqrt{2}$, half the diagonal of the square. The edge has length $VA = \sqrt{16 + 18} = \sqrt{34}$.

:::dimostrazione
The idea is to identify the altitude of a lateral face using the three perpendiculars theorem. Let $M$ be the point where the circle inscribed in the base touches side $AB$. Radius $HM$ is perpendicular to $AB$, since a radius is perpendicular to the tangent at the point of tangency, and has length $r$. Segment $VH$ is perpendicular to the plane of the base, so by the three perpendiculars theorem, $VM$ is also perpendicular to $AB$. Consequently, $VM$ is the altitude of face $VAB$, that is, the slant height $a$. Triangle $VHM$ has a right angle at $H$ because $VH$ is perpendicular to each line in the base through $H$, and the Pythagorean theorem gives $a^2 = h^2 + r^2$.
:::
::::

:::teorema{#aree-piramide titolo="Lateral and total surface areas of a right pyramid"}
For a right pyramid with base area $B$, base perimeter $2p$, and slant height $a$, we have
$$
A_l = p \cdot a ,
\qquad
A_t = A_l + B .
$$
The formula follows because the lateral faces are triangles whose bases are the sides of the base polygon and whose heights are all $a$. Their areas therefore add up to $\dfrac{1}{2}\,(l_1 + \dots + l_n)\,a = \dfrac{2p \cdot a}{2} = p \cdot a$. For the square pyramid with base side $6$ and slant height $5$, the semiperimeter is $p = 12$, so $A_l = 12 \cdot 5 = 60$ and $A_t = 60 + 36 = 96$.
:::

:::teorema{#sezione-parallela-piramide titolo="Cross section of a pyramid parallel to its base"}
Cut a pyramid of height $h$ and base area $B$ with a plane parallel to its base at a distance of $x$ from the apex, with $0 < x < h$. The cross section is a polygon similar to the base with scale factor $\dfrac{x}{h}$, and its area $B'$ is
$$
B' = B \left( \frac{x}{h} \right)^2 .
$$
The ratio of the areas is the square of the scale factor, as for similar polygons in the plane. For a pyramid of height $12$ with base area $81$, the section at a distance of $8$ from the apex has area $81 \cdot \left( \dfrac{8}{12} \right)^2 = 81 \cdot \dfrac{4}{9} = 36$.
:::

:::definizione{#tronco-piramide titolo="Frustum of a pyramid"}
The **frustum of a pyramid** is the portion of the pyramid between its base and a cross section parallel to the base. The two bases are similar polygons in parallel planes, the lateral faces are trapezoids, and the height of the frustum is the distance between its bases. If the original pyramid is regular, the lateral faces are congruent isosceles trapezoids and their height is called the **slant height of the frustum**. The lateral surface area of the frustum of a regular pyramid is
$$
A_l = (p + p') \cdot a ,
$$
where $p$ and $p'$ are the semiperimeters of the bases and $a$ is the slant height, since the area of each trapezoid equals half the sum of its bases times its height. Consider a frustum with square bases of side lengths $10$ and $4$ and height $4$. Cut it with the plane through the centers of the bases perpendicular to two opposite sides. The section is an isosceles trapezoid of height $4$ with bases $10$ and $4$, and its legs are slant heights of the frustum. The difference between the half-lengths of the bases is $5 - 2 = 3$, so $a = \sqrt{16 + 9} = 5$. The semiperimeters are $20$ and $8$, hence $A_l = 28 \cdot 5 = 140$ and $A_t = 140 + 100 + 16 = 256$.
:::

## Regular polyhedra and Euler's formula

:::definizione{#poliedro-regolare titolo="Regular polyhedron"}
A convex polyhedron is **regular** if its faces are congruent regular polygons and the same number of faces meet at each vertex. The cube is regular because it has six congruent square faces and three faces meet at each vertex. A right prism with equilateral triangular bases and square lateral faces is *not* regular, since it has two different types of faces.
:::

::::teorema{#cinque-poliedri-regolari titolo="The five regular polyhedra"}
There are exactly five regular polyhedra. The **tetrahedron**, **octahedron**, and **icosahedron** have triangular faces, the **cube** has square faces, and the **dodecahedron** has pentagonal faces.

| polyhedron | faces $F$ | vertices $V$ | edges $S$ | faces at a vertex |
| --- | --- | --- | --- | --- |
| tetrahedron | $4$ | $4$ | $6$ | $3$ triangles |
| octahedron | $8$ | $6$ | $12$ | $4$ triangles |
| icosahedron | $20$ | $12$ | $30$ | $5$ triangles |
| cube | $6$ | $8$ | $12$ | $3$ squares |
| dodecahedron | $12$ | $20$ | $30$ | $3$ pentagons |

:::dimostrazione
The idea is to count how many faces can meet at a vertex. In a convex polyhedron, the face angles at each vertex add up to less than $360°$. We accept this property without proof. It can be seen with a paper model, since if the angles add up to $360°$, the faces lie flat and do not form a point. Moreover, at least three faces meet at a vertex, since two faces alone cannot enclose a region of space. If $k$ faces, each with angle $\varphi$, meet at a vertex, we must therefore have $k \cdot \varphi < 360°$ with $k \geq 3$.
- For equilateral triangles, $\varphi = 60°$, so $k \cdot 60° < 360°$ gives $k < 6$. The possible values are $k = 3, 4, 5$, which correspond to the tetrahedron, octahedron, and icosahedron.
- For squares, $\varphi = 90°$, so $k < 4$, and the only value is $k = 3$, corresponding to the cube.
- For regular pentagons, $\varphi = 108°$, so $k < \dfrac{360}{108} \approx 3.3$, and the only value is $k = 3$, corresponding to the dodecahedron.
- For regular hexagons, $\varphi = 120°$, and already $3 \cdot 120° = 360°$. Therefore no value $k \geq 3$ satisfies the condition. For polygons with more sides, the angle is even larger.

Thus there are five possible combinations. Constructing the five polyhedra verifies their existence.
:::
::::

:::teorema{#relazione-eulero titolo="Euler's formula"}
In every convex polyhedron, the number $F$ of faces, the number $V$ of vertices, and the number $S$ of edges satisfy
$$
F + V - S = 2 .
$$
We can check this relation in the table of regular polyhedra. For the cube, $6 + 8 - 12 = 2$, and for the icosahedron, $20 + 12 - 30 = 2$. It also holds for polyhedra that are not regular. For the hexagonal prism, $8 + 12 - 18 = 2$. We can use the relation to find any one of the three numbers from the other two. The dodecahedron has $12$ pentagonal faces. Each edge belongs to two faces, so $S = \dfrac{12 \cdot 5}{2} = 30$, and Euler's formula gives $V = 2 - F + S = 2 - 12 + 30 = 20$.
:::

## Solids of revolution

:::definizione{#solidi-rotazione titolo="Solids of revolution"}
A **solid of revolution** is the solid swept out by a plane figure as it makes one complete turn about a line in its plane, called the **axis of rotation**.
- A **cylinder** is generated by rotating a rectangle about one of its sides.
- A **cone** is generated by rotating a right triangle about one of its legs.
- A **conical frustum** is generated by rotating a right trapezoid about the leg perpendicular to its bases.
- A **solid sphere** is generated by rotating a semicircular disk about its diameter.

The side that sweeps out the lateral surface as it rotates is called the **generator**. Cross sections of a solid of revolution by planes perpendicular to its axis are disks. For example, rotating a rectangle with side lengths $3$ and $5$ about the side of length $5$ generates a cylinder with radius $3$ and height $5$.
:::

:::teorema{#aree-cilindro titolo="Lateral and total surface areas of a cylinder"}
For a cylinder with base radius $r$ and height $h$, we have
$$
A_l = 2\pi r h ,
\qquad
A_t = 2\pi r h + 2\pi r^2 = 2\pi r\,(h + r) .
$$
Cutting the lateral surface along a generator and unrolling it onto a plane gives a rectangle with base $2\pi r$, the circumference of the base circle, and height $h$. This gives the first formula. A cylinder with radius $3$ and height $5$ has $A_l = 30\pi$ and $A_t = 30\pi + 18\pi = 48\pi$. A cylinder is called **equilateral** if $h = 2r$, that is, if its cross section by a plane containing its axis is a square.

::grafico{assi=0 uguale=1 curve="0+(3)*t,5+(0)*t,0,1" linee="-3,0 -2.97,-0.12 -2.9,-0.23 -2.77,-0.34 -2.6,-0.45 -2.38,-0.55 -2.12,-0.64 -1.83,-0.71 -1.5,-0.78 -1.15,-0.83 -0.78,-0.87 -0.39,-0.89 0,-0.9 0.39,-0.89 0.78,-0.87 1.15,-0.83 1.5,-0.78 1.83,-0.71 2.12,-0.64 2.38,-0.55 2.6,-0.45 2.77,-0.34 2.9,-0.23 2.97,-0.12 3,0;3,5 2.97,5.12 2.9,5.23 2.77,5.34 2.6,5.45 2.38,5.55 2.12,5.64 1.83,5.71 1.5,5.78 1.15,5.83 0.78,5.87 0.39,5.89 0,5.9 -0.39,5.89 -0.78,5.87 -1.15,5.83 -1.5,5.78 -1.83,5.71 -2.12,5.64 -2.38,5.55 -2.6,5.45 -2.77,5.34 -2.9,5.23 -2.97,5.12 -3,5 -2.97,4.88 -2.9,4.77 -2.77,4.66 -2.6,4.55 -2.38,4.45 -2.12,4.36 -1.83,4.29 -1.5,4.22 -1.15,4.17 -0.78,4.13 -0.39,4.11 0,4.1 0.39,4.11 0.78,4.13 1.15,4.17 1.5,4.22 1.83,4.29 2.12,4.36 2.38,4.45 2.6,4.55 2.77,4.66 2.9,4.77 2.97,4.88 3,5;-3,0 -3,5;3,0 3,5" segmenti="3,0,2.94,0.18;2.94,0.18,2.77,0.34;2.77,0.34,2.49,0.5;2.49,0.5,2.12,0.64;2.12,0.64,1.67,0.75;1.67,0.75,1.15,0.83;1.15,0.83,0.59,0.88;0.59,0.88,0,0.9;0,0.9,-0.59,0.88;-0.59,0.88,-1.15,0.83;-1.15,0.83,-1.67,0.75;-1.67,0.75,-2.12,0.64;-2.12,0.64,-2.49,0.5;-2.49,0.5,-2.77,0.34;-2.77,0.34,-2.94,0.18;-2.94,0.18,-3,0;0,0,0,5;0,0,3,0" etichette="1.2,5.25,r;0.15,2.5,h;0.15,-0.45,O;0.15,5.15,O′" xmin=-3.6 xmax=3.6 ymin=-1.5 ymax=6.5 legenda=0 titolo="Cylinder with radius $r$ and height $h$. Its axis $OO'$ is perpendicular to both bases"}

:::

::::teorema{#aree-cono titolo="Lateral and total surface areas of a cone"}
For a cone with base radius $r$ and height $h$, the **slant height**, that is, the length of a generator, is $a = \sqrt{h^2 + r^2}$, and
$$
A_l = \pi r a ,
\qquad
A_t = \pi r a + \pi r^2 = \pi r\,(a + r) .
$$
A cone with radius $3$ and height $4$ has slant height $a = \sqrt{16 + 9} = 5$, so $A_l = 15\pi$ and $A_t = 15\pi + 9\pi = 24\pi$.

::grafico{assi=0 uguale=1 curve="3+(-3)*t,0+(4)*t,0,1" linee="-3,0 -2.97,-0.12 -2.9,-0.23 -2.77,-0.34 -2.6,-0.45 -2.38,-0.55 -2.12,-0.64 -1.83,-0.71 -1.5,-0.78 -1.15,-0.83 -0.78,-0.87 -0.39,-0.89 0,-0.9 0.39,-0.89 0.78,-0.87 1.15,-0.83 1.5,-0.78 1.83,-0.71 2.12,-0.64 2.38,-0.55 2.6,-0.45 2.77,-0.34 2.9,-0.23 2.97,-0.12 3,0;-3,0 0,4 3,0" segmenti="3,0,2.94,0.18;2.94,0.18,2.77,0.34;2.77,0.34,2.49,0.5;2.49,0.5,2.12,0.64;2.12,0.64,1.67,0.75;1.67,0.75,1.15,0.83;1.15,0.83,0.59,0.88;0.59,0.88,0,0.9;0,0.9,-0.59,0.88;-0.59,0.88,-1.15,0.83;-1.15,0.83,-1.67,0.75;-1.67,0.75,-2.12,0.64;-2.12,0.64,-2.49,0.5;-2.49,0.5,-2.77,0.34;-2.77,0.34,-2.94,0.18;-2.94,0.18,-3,0;0,0,0,4;0,0,3,0" etichette="1.3,-0.5,r;0.15,1.7,h;1.75,2.2,a;0.15,4.1,V" xmin=-3.6 xmax=3.6 ymin=-1.5 ymax=4.7 legenda=0 titolo="Cone with radius $r$ and height $h$. Its slant height $a$ is the hypotenuse of a right triangle with legs $r$ and $h$"}

:::dimostrazione
The idea is to unroll the lateral surface onto a plane. Cutting along a generator gives a circular sector of radius $a$ whose arc has length $2\pi r$, the circumference of the base. The area of a circular sector equals half the product of its arc length and its radius, just as the area of a triangle equals half the product of its base and its height. Therefore
$$
A_l = \frac{1}{2} \cdot 2\pi r \cdot a = \pi r a .
$$
For a cone with radius $3$ and slant height $5$, the sector has a central angle of $\dfrac{2\pi r}{a} = \dfrac{6\pi}{5}$ radians, or $216°$.
:::
::::

:::teorema{#aree-tronco-cono titolo="Lateral surface area of a conical frustum"}
For a conical frustum with base radii $R$ and $r$, where $R > r$, and height $h$, the slant height is $a = \sqrt{h^2 + (R - r)^2}$ and the lateral surface area is
$$
A_l = \pi\,(R + r)\,a .
$$
The slant height is the hypotenuse of a right triangle whose legs are the height and the difference of the radii, as seen in the right trapezoid that generates the frustum. The area formula follows by subtracting the lateral surface areas of the two cones. For $R = 6$, $r = 3$, and $h = 4$, we obtain $a = \sqrt{16 + 9} = 5$, so $A_l = 45\pi$ and the total surface area is $A_t = 45\pi + 36\pi + 9\pi = 90\pi$.
:::

::::teorema{#sezione-sfera titolo="Plane sections of a sphere"}
The **spherical surface** with center $O$ and radius $R$ is the set of all points in space at a distance of $R$ from $O$. The **solid sphere** consists of the spherical surface together with its interior. A plane at a distance of $d$ from the center, with $0 \leq d < R$, cuts the solid sphere in a disk of radius
$$
r = \sqrt{R^2 - d^2} .
$$
If $d = R$, the plane is **tangent** to the sphere and has exactly one point in common with it. If $d > R$, the plane lies outside the sphere. For $d = 0$, the cross section is a **disk bounded by a great circle** of radius $R$. For $R = 5$ and $d = 3$, the cross section has radius $4$ and area $16\pi$.

::grafico{assi=0 uguale=1 linee="5,0 4.98,0.44 4.92,0.87 4.83,1.29 4.7,1.71 4.53,2.11 4.33,2.5 4.1,2.87 3.83,3.21 3.54,3.54 3.21,3.83 2.87,4.1 2.5,4.33 2.11,4.53 1.71,4.7 1.29,4.83 0.87,4.92 0.44,4.98 0,5 -0.44,4.98 -0.87,4.92 -1.29,4.83 -1.71,4.7 -2.11,4.53 -2.5,4.33 -2.87,4.1 -3.21,3.83 -3.54,3.54 -3.83,3.21 -4.1,2.87 -4.33,2.5 -4.53,2.11 -4.7,1.71 -4.83,1.29 -4.92,0.87 -4.98,0.44 -5,0 -4.98,-0.44 -4.92,-0.87 -4.83,-1.29 -4.7,-1.71 -4.53,-2.11 -4.33,-2.5 -4.1,-2.87 -3.83,-3.21 -3.54,-3.54 -3.21,-3.83 -2.87,-4.1 -2.5,-4.33 -2.11,-4.53 -1.71,-4.7 -1.29,-4.83 -0.87,-4.92 -0.44,-4.98 0,-5 0.44,-4.98 0.87,-4.92 1.29,-4.83 1.71,-4.7 2.11,-4.53 2.5,-4.33 2.87,-4.1 3.21,-3.83 3.54,-3.54 3.83,-3.21 4.1,-2.87 4.33,-2.5 4.53,-2.11 4.7,-1.71 4.83,-1.29 4.92,-0.87 4.98,-0.44 5,0;-5,0 -4.96,-0.2 -4.83,-0.39 -4.62,-0.57 -4.33,-0.75 -3.97,-0.91 -3.54,-1.06 -3.04,-1.19 -2.5,-1.3 -1.91,-1.39 -1.29,-1.45 -0.65,-1.49 0,-1.5 0.65,-1.49 1.29,-1.45 1.91,-1.39 2.5,-1.3 3.04,-1.19 3.54,-1.06 3.97,-0.91 4.33,-0.75 4.62,-0.57 4.83,-0.39 4.96,-0.2 5,0;-4,3 -3.97,2.84 -3.86,2.69 -3.7,2.54 -3.46,2.4 -3.17,2.27 -2.83,2.15 -2.44,2.05 -2,1.96 -1.53,1.89 -1.04,1.84 -0.52,1.81 0,1.8 0.52,1.81 1.04,1.84 1.53,1.89 2,1.96 2.44,2.05 2.83,2.15 3.17,2.27 3.46,2.4 3.7,2.54 3.86,2.69 3.97,2.84 4,3" segmenti="5,0,4.9,0.29;4.9,0.29,4.62,0.57;4.62,0.57,4.16,0.83;4.16,0.83,3.54,1.06;3.54,1.06,2.78,1.25;2.78,1.25,1.91,1.39;1.91,1.39,0.98,1.47;0.98,1.47,0,1.5;0,1.5,-0.98,1.47;-0.98,1.47,-1.91,1.39;-1.91,1.39,-2.78,1.25;-2.78,1.25,-3.54,1.06;-3.54,1.06,-4.16,0.83;-4.16,0.83,-4.62,0.57;-4.62,0.57,-4.9,0.29;-4.9,0.29,-5,0;4,3,3.92,3.23;3.92,3.23,3.7,3.46;3.7,3.46,3.33,3.67;3.33,3.67,2.83,3.85;2.83,3.85,2.22,4;2.22,4,1.53,4.11;1.53,4.11,0.78,4.18;0.78,4.18,0,4.2;0,4.2,-0.78,4.18;-0.78,4.18,-1.53,4.11;-1.53,4.11,-2.22,4;-2.22,4,-2.83,3.85;-2.83,3.85,-3.33,3.67;-3.33,3.67,-3.7,3.46;-3.7,3.46,-3.92,3.23;-3.92,3.23,-4,3;0,0,0,3;0,3,4,3;0,0,4,3" etichette="0.15,-0.6,O;-0.55,3.15,O′;0.25,1.4,d;1.8,3.15,r;2.3,1,R" xmin=-5.6 xmax=5.6 ymin=-5.6 ymax=5.6 legenda=0 titolo="The plane at a distance of $d$ from center $O$ cuts the sphere of radius $R$ in a disk with center $O'$ and radius $r = \sqrt{R^2 - d^2}$"}

:::dimostrazione
Let $O'$ be the projection of $O$ onto the plane, so that $OO' = d$, and let $P$ be a point common to the plane and the spherical surface. Line $OO'$ is perpendicular to the plane, so triangle $OO'P$ has a right angle at $O'$. By the Pythagorean theorem,
$$
O'P^2 = OP^2 - OO'^2 = R^2 - d^2 .
$$
Every point common to the plane and the surface is therefore at the same distance $\sqrt{R^2 - d^2}$ from $O'$, so the cross section is the disk with center $O'$ and radius $\sqrt{R^2 - d^2}$.
:::
::::

## Volumes and Cavalieri's principle

:::teorema{#principio-cavalieri titolo="Cavalieri's principle"}
Consider two solids and a plane $\pi$. If every plane parallel to $\pi$ cuts the two solids in equivalent cross sections, meaning sections of equal area, then the two solids have equal volume.

Two solids with the same volume are called **equivalent**, and this principle lets us compare a solid with one whose volume we already know. An upright stack of coins and the same stack pushed sideways have equal volumes because the area of each coin stays the same at every height. Likewise, an oblique prism and a right prism with equal-area bases in the same plane and equal heights have equal volumes, since every section parallel to either base is congruent to that base.
:::

:::teorema{#volume-prisma-cilindro titolo="Volumes of prisms and cylinders"}
A prism, right or oblique, and a cylinder, each with base area $B$ and height $h$, have volume
$$
V = B \cdot h .
$$
We start with the rectangular prism with dimensions $a$, $b$, and $c$. When its dimensions are integers, it can be decomposed into $abc$ small cubes with edge length $1$, so its volume is $V = abc$. The other cases follow from Cavalieri's principle by comparing each solid with a rectangular prism of equal base area and height. For the cylinder, $B = \pi r^2$, so $V = \pi r^2 h$. A right prism of height $10$ whose base is a right triangle with legs $3$ and $4$ has volume $6 \cdot 10 = 60$. A cylinder with radius $3$ and height $5$ has volume $\pi \cdot 9 \cdot 5 = 45\pi$.
:::

:::teorema{#volume-piramide-cono titolo="Volumes of pyramids and cones"}
A pyramid and a cone, each with base area $B$ and height $h$, have volume
$$
V = \frac{1}{3}\, B \cdot h .
$$
A triangular prism can be decomposed into three pyramids that, taken in pairs, have equal base areas and equal heights, and hence equal volumes. One of the three has the same base and height as the prism, so its volume is one-third that of the prism. Cavalieri's principle then extends the formula to all pyramids and cones. A square pyramid with base side $6$ and height $4$ has volume $\dfrac{1}{3} \cdot 36 \cdot 4 = 48$. A cone with radius $3$ and height $4$ has volume $\dfrac{1}{3}\,\pi \cdot 9 \cdot 4 = 12\pi$, one-third the volume of a cylinder with the same base and height.
:::

:::teorema{#volume-tronchi titolo="Volumes of frustums"}
A pyramidal frustum with base areas $B$ and $B'$ and height $h$, and a conical frustum with base radii $R$ and $r$ and height $h$, have volumes
$$
V = \frac{h}{3} \left( B + B' + \sqrt{B B'} \right) ,
\qquad
V = \frac{\pi h}{3} \left( R^2 + R r + r^2 \right) .
$$
The formulas follow by subtracting from the volume of the complete pyramid or cone the volume of the smaller pyramid or cone cut off by the section. A pyramidal frustum with square bases of sides $10$ and $4$ and height $4$ has volume $\dfrac{4}{3}\,(100 + 16 + 40) = 208$. A conical frustum with $R = 6$, $r = 3$, and $h = 4$ has volume $\dfrac{4\pi}{3}\,(36 + 18 + 9) = 84\pi$.
:::

::::teorema{#volume-sfera titolo="Volume of a sphere"}
A sphere of radius $R$ has volume
$$
V = \frac{4}{3}\,\pi R^3 .
$$
A sphere of radius $3$ has volume $\dfrac{4}{3}\,\pi \cdot 27 = 36\pi$. The volume of the sphere is two-thirds the volume of its circumscribed cylinder, which has radius $R$ and height $2R$, since $\dfrac{4}{3}\,\pi R^3 = \dfrac{2}{3} \cdot 2\pi R^3$.

:::dimostrazione
The idea is to use Cavalieri's principle to compare a hemisphere of radius $R$ with a solid whose volume we can calculate. This solid is a **cylinder with a conical cavity**. Start with a cylinder of radius $R$ and height $R$, then remove the cone whose base is the cylinder's top base and whose apex is the center of its bottom base. Place the hemisphere and the cylinder with a conical cavity on the same plane and cut them with a parallel plane at a distance of $d$, with $0 \leq d \leq R$.

By the theorem on plane sections of a sphere, the cross section of the hemisphere is a disk of radius $\sqrt{R^2 - d^2}$ and has area $\pi\,(R^2 - d^2)$. The cross section of the cylinder with a conical cavity is an annulus of outer radius $R$. Its inner radius is $d$ because the cone has radius equal to its height, so at a distance of $d$ from its apex its cross section has radius $d$. The area of the annulus is therefore $\pi R^2 - \pi d^2 = \pi\,(R^2 - d^2)$.

::grafico{assi=0 uguale=1 poligoni="-2.4,1.7 2.4,1.7 2.4,1.9 -2.4,1.9;5,1.7 6.2,1.7 6.2,1.9 5,1.9;9.8,1.7 11,1.7 11,1.9 9.8,1.9" linee="3,0 2.99,0.2 2.97,0.39 2.94,0.59 2.9,0.78 2.84,0.96 2.77,1.15 2.69,1.33 2.6,1.5 2.49,1.67 2.38,1.83 2.26,1.98 2.12,2.12 1.98,2.26 1.83,2.38 1.67,2.49 1.5,2.6 1.33,2.69 1.15,2.77 0.96,2.84 0.78,2.9 0.59,2.94 0.39,2.97 0.2,2.99 0,3 -0.2,2.99 -0.39,2.97 -0.59,2.94 -0.78,2.9 -0.96,2.84 -1.15,2.77 -1.33,2.69 -1.5,2.6 -1.67,2.49 -1.83,2.38 -1.98,2.26 -2.12,2.12 -2.26,1.98 -2.38,1.83 -2.49,1.67 -2.6,1.5 -2.69,1.33 -2.77,1.15 -2.84,0.96 -2.9,0.78 -2.94,0.59 -2.97,0.39 -2.99,0.2 -3,0;-3,0 3,0;5,0 11,0 11,3 5,3 5,0;5,3 8,0 11,3" segmenti="0,0,0,1.8;8,0,8,1.8" etichette="-0.1,-0.55,O;7.9,-0.55,O′;-1.3,3.35,hemisphere;5.4,3.3,cylinder minus cone;0.12,0.7,d;8.12,0.7,d" xmin=-3.6 xmax=11.6 ymin=-1.15 ymax=3.95 legenda=0 titolo="Axial sections of the hemisphere of radius $R$ and the cylinder with a conical cavity. At a distance of $d$ from the base plane, the two colored cross sections have the same area $\pi\left(R^2 - d^2\right)$"}

The cross sections have equal areas for every $d$, so by Cavalieri's principle the two solids have equal volumes. The volume of the hemisphere is then
$$
\pi R^2 \cdot R - \frac{1}{3}\,\pi R^2 \cdot R = \frac{2}{3}\,\pi R^3 ,
$$
and the volume of the sphere is twice that, namely $\dfrac{4}{3}\,\pi R^3$.
:::
::::

:::teorema{#area-sfera titolo="Surface area of a sphere"}
A sphere of radius $R$ has surface area $A = 4\pi R^2$, four times the area enclosed by a great circle. To justify this formula, divide the surface into many small patches and join them to the center. This produces solids that are approximately pyramids of height $R$ whose volumes add up to $\dfrac{1}{3}\,A R$. Equating this to $\dfrac{4}{3}\,\pi R^3$ gives $A = 4\pi R^2$. For $R = 3$, the area is $36\pi$.
:::

:::osservazione{#solidi-simili titolo="Areas and volumes of similar solids"}
If two solids are similar with scale factor $k$, meaning that each length in the second is $k$ times its counterpart in the first, then their areas are in the ratio $k^2$ and their volumes in the ratio $k^3$. Doubling the radius of a sphere multiplies its surface area by $4$ and its volume by $8$. For $R = 3$ and $R = 6$, the volumes are $36\pi$ and $288\pi$. The same applies when converting units, since $1\,\mathrm{m} = 100\,\mathrm{cm}$ gives $1\,\mathrm{m}^2 = 10^4\,\mathrm{cm}^2$ and $1\,\mathrm{m}^3 = 10^6\,\mathrm{cm}^3$.
:::

## Inscribed and circumscribed solids

:::definizione{#inscritto-circoscritto titolo="Inscribed and circumscribed solids"}
A polyhedron is **inscribed** in a sphere if all its vertices lie on the spherical surface. The sphere is then **circumscribed** about the polyhedron. A sphere is **inscribed** in a polyhedron if it is tangent to all its faces. The same terminology applies to solids of revolution. A cone is inscribed in a sphere if its apex and the circle bounding its base lie on the spherical surface. A cylinder is inscribed in a cone if one base lies on the base of the cone and the circle bounding the other base lies on the lateral surface of the cone.

Problems involving these solids are almost always solved using an **axial section**, a section by a plane containing the axis of symmetry. In this section the problem becomes one of plane geometry. For a cube with edge length $2$, the inscribed sphere has radius $1$, half the edge length, and the circumscribed sphere has radius $\sqrt{3}$, half the space diagonal $2\sqrt{3}$.
:::

::::teorema{#raggio-sfera-inscritta titolo="Radius of a sphere inscribed in a polyhedron"}
If a polyhedron of volume $V$ and total surface area $A_t$ has an inscribed sphere, its radius is
$$
r = \frac{3V}{A_t} .
$$
For the square pyramid with base side $6$ and height $4$, the volume is $48$ and the total surface area is $96$, so $r = \dfrac{3 \cdot 48}{96} = \dfrac{3}{2}$. We can check the result in the section by the plane through $V$ perpendicular to two opposite sides of the base. This section is an isosceles triangle with base $6$ and legs $5$. Its inradius equals its area divided by its semiperimeter, namely $\dfrac{12}{8} = \dfrac{3}{2}$.

::grafico{assi=0 uguale=1 curve="1.5*cos(t),1.5+1.5*sin(t),0,6.29;0+(1.2)*t,1.5+(0.9)*t,0,1" linee="-3,0 3,0 0,4 -3,0" segmenti="0,0,0,4" etichette="0.12,-0.5,H;0.12,4.1,V;3.1,-0.4,M;-0.45,1.5,O;0.45,2.15,r" xmin=-3.6 xmax=3.7 ymin=-1.1 ymax=4.7 legenda=0 titolo="Section of the square pyramid with base side $6$ and height $4$ by the plane through $V$ perpendicular to two opposite sides of the base. The disk with center $O$ and radius $r = \dfrac{3}{2}$ is the cross section of the inscribed sphere"}

:::dimostrazione
The idea is to divide the polyhedron into pyramids whose apex is the center $O$ of the inscribed sphere. Join $O$ to the vertices of the polyhedron. This gives one pyramid per face, with that face as its base and $O$ as its apex. The sphere is tangent to every face, so the distance from $O$ to the plane of each face is the radius $r$, and every pyramid has height $r$. If $B_1, B_2, \dots, B_n$ are the face areas, then the sum of the volumes is
$$
V = \frac{1}{3}\,B_1 r + \frac{1}{3}\,B_2 r + \dots + \frac{1}{3}\,B_n r = \frac{1}{3}\,A_t \, r .
$$
Solving for $r$ gives $r = \dfrac{3V}{A_t}$.
:::
::::

:::esempio{titolo="Cone inscribed in a sphere"}
A cone of height $h$ is inscribed in a sphere of radius $R$, with $R < h < 2R$, so the center of the sphere lies inside the cone. In the axial section, the center $O$ of the sphere lies on the altitude $VK$ of the cone, at a distance of $h - R$ from the center $K$ of the base, and a point $P$ on the circle bounding the base is at a distance of $R$ from $O$. Triangle $OKP$ has a right angle at $K$, so the base radius $r$ of the cone satisfies
$$
r^2 = R^2 - (h - R)^2 = 2Rh - h^2 .
$$
For $R = 5$ and $h = 8$, we obtain $r^2 = 80 - 64 = 16$, that is, $r = 4$, and the volume of the cone is $\dfrac{1}{3}\,\pi \cdot 16 \cdot 8 = \dfrac{128}{3}\,\pi$.
:::
