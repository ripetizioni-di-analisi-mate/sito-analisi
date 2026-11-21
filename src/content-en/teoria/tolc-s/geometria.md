---
titolo: "Geometry for TOLC-S"
sommario: "Plane and solid figures, distances, similarity, and coordinate geometry, with examples and diagrams."
---

## Angles, triangles, and distances

:::definizione{#angoli titolo="Angles and parallel lines"}
An **angle** is the part of the plane between two rays with the same endpoint, called the vertex; a ray is the part of a line that starts at a point and continues on one side only. The size of an angle is measured in degrees, with symbol $^\circ$: a full turn measures $360^\circ$, a straight angle $180^\circ$ and a right angle $90^\circ$. An acute angle is smaller than $90^\circ$; an obtuse angle lies between $90^\circ$ and $180^\circ$.

Two angles are **complementary** if their sum is $90^\circ$ and **supplementary** if it is $180^\circ$. The complement of $38^\circ$ is $52^\circ$ and its supplement is $180^\circ-38^\circ=142^\circ$.

Two intersecting lines form four angles. Two of them with a common side are called adjacent; together they form a straight angle, so they are supplementary. Two vertically opposite angles, which face each other, are equal, because they are supplements of the same angle. If the four angles are right angles, the two lines are perpendicular.

Two **parallel** lines are lines of the same plane with no common points. A line that intersects both, called a transversal, forms eight angles with them.

- **Corresponding** angles occupy the same position at the two intersections, for example both above the parallel line and to the right of the transversal, and are equal.
- **Alternate interior** angles lie between the two parallel lines, on opposite sides of the transversal, and are equal.

If the transversal forms an angle of $38^\circ$ with one parallel line, the corresponding angle on the other measures $38^\circ$ and the adjacent one $142^\circ$. In this way the measure of an angle is carried from one part of a figure to another, and it is obtained from the data and from these relations, even when the appearance of the drawing suggests a different value.
:::

::::teorema{#triangoli titolo="Angle sum and triangle inequality"}
In a triangle, the figure whose vertices are three points not on one line, the sum of the three interior angles is $180^\circ$. If two angles measure $50^\circ$ and $60^\circ$, the third measures $180^\circ-50^\circ-60^\circ=70^\circ$.

Moreover, each side is shorter than the sum of the other two (**triangle inequality**). If two sides measure $a$ and $b$, the third side $c$ satisfies
$$
|a-b|<c<a+b,
$$
where $|a-b|$ is the absolute value of the difference, the longer side minus the shorter. With sides $4$ and $7$ the third side is greater than $7-4=3$ and less than $7+4=11$. Three segments of lengths $4$, $7$ and $12$ do not form a triangle, because $12>11$.

:::dimostrazione
For the angle sum, the line parallel to the opposite side is drawn through one vertex. With the two sides leaving that vertex it forms two angles, which are equal to the other two angles of the triangle because they are alternate interior angles. Together with the angle of the triangle at the vertex they form a straight angle, so the sum is $180^\circ$.

For the inequality, a segment is the shortest path between two points, so the path between two vertices through the third is longer than the side joining them, that is, $c<a+b$. Likewise $a<b+c$ and $b<a+c$, so $c>a-b$ and $c>b-a$, which together are equivalent to $c>|a-b|$.
:::
::::

::::teorema{#pitagora titolo="Pythagorean theorem"}
A **right** triangle has a right angle. The two sides that form it are the **legs**; the side opposite the right angle is the **hypotenuse**, which is the longest side. If $a,b$ are the legs and $c$ is the hypotenuse, then
$$
c^2=a^2+b^2.
$$
The theorem gives one side when the other two are known, and therefore an oblique distance from two perpendicular displacements. With legs $6$ and $8$, $c^2=36+64=100$, so $c=10$.

The converse also holds: if the square of the longest side equals the sum of the squares of the other two, the triangle is right-angled. This is the case for sides $5$, $12$ and $13$, because $25+144=169$.

:::dimostrazione
On each side of a square of side $a+b$ the point dividing it into a part of length $a$ and a part of length $b$ is marked, always in the same direction. Joining the four points divides the square into four equal right triangles, with legs $a$ and $b$, and an inner square of side $c$. Comparing areas gives
$$
(a+b)^2=4\cdot\frac{ab}{2}+c^2.
$$
The left side is $a^2+2ab+b^2$ and the right side is $2ab+c^2$. Subtracting $2ab$ from both leaves $a^2+b^2=c^2$.
:::
::::

:::esempio{titolo="An altitude in an isosceles triangle"}
An isosceles triangle has two equal sides; the third side is the base. The **altitude** to a side is the perpendicular segment drawn to that side from the opposite vertex. In an isosceles triangle the altitude to the base divides it in half.

In the figure, triangle $ABC$ has equal sides of $13\,\mathrm{cm}$ and base $AB$ of $10\,\mathrm{cm}$. The altitude $CH$ divides the base into two segments of $5\,\mathrm{cm}$. Triangle $AHC$ is right-angled at $H$ and has hypotenuse $AC$, so
$$
CH=\sqrt{13^2-5^2}=\sqrt{144}=12\,\mathrm{cm}.
$$
The area of a triangle is half the product of a base and the corresponding altitude, so the area of $ABC$ is $\dfrac{10\cdot12}{2}=60\,\mathrm{cm^2}$. The side of $13\,\mathrm{cm}$ is oblique to the base, so the height used in the product is $CH=12\,\mathrm{cm}$.

::struttura{nodi="A,-5,0;B,5,0;C,0,12;H,0,0" linee="-5,0 5,0 0,12 -5,0;0,0 0,12;0,0.7 0.7,0.7 0.7,0" quote="A,H,5 cm;H,B,5 cm;A,C,13 cm,-0.8" titolo="Altitude CH divides the isosceles triangle into two right triangles"}
:::

:::osservazione{titolo="Classification from side lengths"}
A triangle is acute if it has three acute angles and obtuse if it has one obtuse angle. Let $a,b,c$ be the sides of a triangle, with $c$ the longest. The largest angle is the one opposite $c$.

- If $c^2=a^2+b^2$, the triangle is right-angled.
- If $c^2<a^2+b^2$, the triangle is acute. With sides $4$, $5$ and $6$, $36<16+25$.
- If $c^2>a^2+b^2$, the triangle is obtuse. With sides $3$, $5$ and $7$, $49>9+25$.

The criterion follows from the cosine rule, $c^2=a^2+b^2-2ab\cos\gamma$, where $\gamma$ (gamma) is the angle opposite $c$; the rule is stated in the trigonometry chapter. The cosine of an obtuse angle is negative, so in that case $c^2>a^2+b^2$; the cosine of an acute angle is positive, so $c^2<a^2+b^2$. The criterion applies to lengths that satisfy the triangle inequality, such as $3$, $5$ and $7$, for which $7<3+5$.
:::

## Similarity and scale factors

:::definizione{#similitudine titolo="Similar figures"}
Two figures are **similar** if they have the same shape: one is an enlargement or a reduction of the other. Corresponding angles are equal and every length of the second figure is the corresponding length of the first multiplied by the same number $k>0$, called the **scale factor**.

The triangles with sides $3,4,5$ and $6,8,10$ are similar with $k=2$, because $\dfrac63=\dfrac84=\dfrac{10}{5}=2$. The ratios are all written in the same order and between corresponding sides, those opposite equal angles. Two triangles with two pairs of equal angles are similar; indeed the third angle is also equal, because in both the sum is $180^\circ$.

- Sides, altitudes and perimeters are multiplied by $k$. The perimeter is the sum of the sides and in the example goes from $12$ to $24$.
- Areas are multiplied by $k^2$, because an area is the product of two lengths. The two triangles of the example are right-angled and have areas $\dfrac{3\cdot4}{2}=6$ and $\dfrac{6\cdot8}{2}=24=6\cdot2^2$.
- The volumes of two similar solids are multiplied by $k^3$. A cube of side $2$ has volume $8$, one of side $6$ has volume $216=8\cdot3^3$.
:::

:::esempio{titolo="From areas to lengths"}
Two squares have areas $18\,\mathrm{cm^2}$ and $50\,\mathrm{cm^2}$. The ratio of the areas is $k^2=\dfrac{18}{50}$, so the ratio of the side of the first to the side of the second is
$$
k=\sqrt{\frac{18}{50}}=\sqrt{\frac{9}{25}}=\frac35.
$$
The same ratio holds for the perimeters, which are lengths. The number $\dfrac{9}{25}$ is the ratio of the areas; using it for the sides would apply the scale factor twice.

In a drawing at scale $1:200$ every real length is $200$ times the length in the drawing. A segment of $3\,\mathrm{cm}$ represents $3\cdot200=600\,\mathrm{cm}=6\,\mathrm{m}$.
:::

:::osservazione
A vertical pole and a vertical tree, on horizontal ground, receive the Sun's rays from the same direction. The right triangles formed by each of them with its shadow therefore have the same angles and are similar. If the pole is $2\,\mathrm{m}$ tall and casts a shadow of $3\,\mathrm{m}$, and the shadow of the tree measures $12\,\mathrm{m}$, the height $h$ of the tree satisfies
$$
\frac{h}{12}=\frac23,\qquad h=12\cdot\frac23=8\,\mathrm{m}.
$$
:::

## Polygons, areas, and decompositions

:::definizione{#aree titolo="Area and corresponding altitude"}
**Area** measures the extent of a plane region and is expressed in square units, such as $\mathrm{cm^2}$. In the formulas $b$ is a side chosen as the base and the **height** $h$ is the perpendicular distance between the line of the base and the opposite side or, in a triangle, the opposite vertex.

| Figure | Area | Example |
|---|---|---|
| Rectangle | $bh$ | $b=5$, $h=3$: $15$ |
| Parallelogram, with opposite sides parallel | $bh$ | $b=5$, $h=3$: $15$ |
| Triangle | $\dfrac{bh}{2}$ | $b=5$, $h=3$: $7.5$ |
| Trapezoid, with two parallel sides $B$ and $b$ called bases | $\dfrac{(B+b)h}{2}$ | $B=7$, $b=3$, $h=4$: $20$ |
| Rhombus, with four equal sides and perpendicular diagonals $d_1$, $d_2$ | $\dfrac{d_1d_2}{2}$ | $d_1=6$, $d_2=8$: $24$ |

Moving a triangle from one side to the other turns a parallelogram into a rectangle with the same base and the same height. Two copies of a triangle form a parallelogram, so the area of the triangle is half of it; likewise two copies of a trapezoid form a parallelogram with base $B+b$. The diagonals of a rhombus, the segments joining opposite vertices, divide it into four equal right triangles, with legs $\dfrac{d_1}{2}$ and $\dfrac{d_2}{2}$; each has area $\dfrac{d_1d_2}{8}$ and the four together $\dfrac{d_1d_2}{2}$.

Before multiplying, the lengths are expressed in the same unit.
:::

:::esempio{titolo="Area after removing a piece"}
From a rectangle of $10\,\mathrm{cm}$ by $6\,\mathrm{cm}$, a rectangle of $4\,\mathrm{cm}$ by $2\,\mathrm{cm}$ is removed at one corner. In the figure the remaining region has vertices from $A$ to $F$, and the sides $DC$ and $ED$ are the edge left by the removed part. The remaining area is the difference between the two areas:
$$
A=10\cdot6-4\cdot2=60-8=52\,\mathrm{cm^2}.
$$
The perimeter is the sum of the six sides. The two sides with no measurement in the figure are $BC=6-2=4\,\mathrm{cm}$ and $EF=10-4=6\,\mathrm{cm}$, so the perimeter is $10+4+4+2+6+6=32\,\mathrm{cm}$. The area has decreased, while the perimeter is that of the whole rectangle, $2\cdot(10+6)=32\,\mathrm{cm}$, because the two removed stretches of boundary are replaced by $DC$ and $ED$, which have the same lengths.

::struttura{poligoni="0,0 10,0 10,4 6,4 6,6 0,6" nodi="A,0,0;B,10,0;C,10,4;D,6,4;E,6,6;F,0,6" quote="A,B,10 cm;F,A,6 cm;D,C,4 cm;E,D,2 cm" titolo="The remaining region has area 52 square centimeters"}
:::

:::teorema{#poligoni titolo="Angles and diagonals of a polygon"}
A **polygon** is a closed plane figure bounded by segments, called sides. It is convex if all its interior angles are smaller than $180^\circ$ and regular if all its sides are equal and all its angles are equal. A **diagonal** is a segment joining two non-consecutive vertices.

The diagonals drawn from a single vertex divide a convex polygon with $n\ge3$ sides into $n-2$ triangles; the symbol $\ge$ reads "greater than or equal to". The sum of the interior angles is therefore $(n-2)\cdot180^\circ$. For a hexagon, with $n=6$, the sum is $4\cdot180^\circ=720^\circ$.

In a regular polygon each interior angle measures $\dfrac{(n-2)\cdot180^\circ}{n}$ and each exterior angle, which is its supplement, measures $\dfrac{360^\circ}{n}$. In a regular hexagon they measure $\dfrac{720^\circ}{6}=120^\circ$ and $\dfrac{360^\circ}{6}=60^\circ$.

From each vertex there are $n-3$ diagonals, because the vertex itself and its two neighbors are excluded. In the product $n(n-3)$ every diagonal is counted twice, once for each endpoint, so the number of diagonals is $\dfrac{n(n-3)}{2}$. A hexagon has $\dfrac{6\cdot3}{2}=9$.
:::

## Circles, arcs, and chords

:::definizione{#cerchio titolo="Circle and disk"}
A **circle** is the line formed by the points at the same distance $r>0$, called the radius, from a point $O$, called the center. The **disk** also includes the interior points. A diameter is a segment that joins two points of the circle through the center and measures $2r$. The length of the circle, or circumference, is $2\pi r$ and the area of the disk is $\pi r^2$, where $\pi$ (pi) is about $3.14$. With $r=5\,\mathrm{cm}$ the circumference is $10\pi\approx31.4\,\mathrm{cm}$ and the area is $25\pi\approx78.5\,\mathrm{cm^2}$; the symbol $\approx$ reads "approximately equal to". The radius appears to the first power in the length, which is measured in $\mathrm{cm}$, and squared in the area, which is measured in $\mathrm{cm^2}$.

A **chord** is a segment joining two points of the circle. The perpendicular from the center to a chord divides it in half. If the chord is at distance $d<r$ from the center, the distance $d$, half the chord and a radius form a right triangle with hypotenuse $r$, so half the chord measures $\sqrt{r^2-d^2}$.

A **tangent** line has only one point in common with the circle, the point of contact, and at that point it is perpendicular to the radius. If $T$ is the point of contact of a tangent drawn from a point $P$, triangle $OTP$ is therefore right-angled at $T$.
:::

:::definizione{#settori titolo="Arc and circular sector"}
A central angle has its vertex at the center of the disk. Its sides bound an **arc**, a stretch of the circle, and a **circular sector**, the part of the disk between the two radii and the arc. A sector with central angle $\alpha$ in degrees is the fraction $\dfrac{\alpha}{360^\circ}$ of the disk. Therefore the length $\ell$ of the arc and the area $A$ of the sector are
$$
\ell=\frac{\alpha}{360^\circ}2\pi r,
\qquad A=\frac{\alpha}{360^\circ}\pi r^2.
$$
With $r=6\,\mathrm{cm}$ and $\alpha=60^\circ$ the fraction is $\dfrac16$. The arc measures $\dfrac16\cdot12\pi=2\pi\approx6.28\,\mathrm{cm}$ and the area of the sector is $\dfrac16\cdot36\pi=6\pi\approx18.85\,\mathrm{cm^2}$. The boundary of the sector consists of the arc and the two radii, so the perimeter is $\ell+2r=2\pi+12\approx18.28\,\mathrm{cm}$.

An inscribed angle has its vertex on the circle and its sides pass through the two endpoints of an arc. It measures half the central angle that subtends the same arc, the one whose sides pass through the same endpoints: a central angle of $80^\circ$ corresponds to an inscribed angle of $40^\circ$. If the arc is a semicircle, the central angle is a straight angle and the inscribed angle is a right angle.
:::

:::esempio{titolo="Chord and distance from the center"}
A chord $AB$ of a circle with center $O$ and radius $5\,\mathrm{cm}$ is at distance $3\,\mathrm{cm}$ from the center. In the figure $OM$ is the perpendicular from the center to the chord, so it measures $3\,\mathrm{cm}$ and $M$ is the midpoint of $AB$. Triangle $OMA$ is right-angled at $M$ and has hypotenuse $OA=5\,\mathrm{cm}$, so
$$
MA=\sqrt{5^2-3^2}=\sqrt{16}=4\,\mathrm{cm}.
$$
The whole chord measures $AB=2\cdot4=8\,\mathrm{cm}$.

::struttura{cerchi="0,0,5" nodi="O,0,0;M,3,0;A,3,4;B,3,-4" linee="0,0 3,4;3,-4 3,4;0,0 3,0" quote="O,M,3 cm,0.5;O,A,5 cm,-0.8" titolo="Radius OA and distance OM determine half of chord AB"}
:::

## Solids and measurement units

:::definizione{#volumi titolo="Prisms, pyramids, and solids of revolution"}
**Volume** measures the space occupied by a solid and is expressed in cubic units, such as $\mathrm{cm^3}$. A prism has two equal and parallel bases, which are polygons; the rectangular box is the prism with all faces rectangular. A cylinder has two disks as bases. A pyramid has a polygon as base and a cone has a disk as base; both end in a vertex. The height $h$ is the perpendicular distance between the two bases or between the vertex and the plane of the base, and $A_b$ is the area of the base.

| Solid | Volume | Example |
|---|---|---|
| Prism | $A_bh$ | box with sides $3$, $4$, $12$: $3\cdot4\cdot12=144$ |
| Cylinder | $\pi r^2h$ | $r=3$, $h=10$: $90\pi\approx282.7$ |
| Pyramid | $\dfrac{A_bh}{3}$ | square base of side $6$, $h=10$: $\dfrac{36\cdot10}{3}=120$ |
| Cone | $\dfrac{\pi r^2h}{3}$ | $r=3$, $h=10$: $30\pi\approx94.2$ |
| Sphere of radius $r$ | $\dfrac43\pi r^3$ | $r=3$: $36\pi\approx113.1$ |

The cylinder, the cone and the sphere are solids of revolution, obtained by rotating a plane figure about a line.

The factor $\dfrac13$ concerns only the volumes of pyramids and cones. The surface area of a solid is the sum of the areas of the parts that bound it.

- The sphere has surface area $4\pi r^2$.
- The lateral surface of a cylinder, laid flat on a plane, is a rectangle with sides $2\pi r$ and $h$. With the two bases the total surface area is $2\pi rh+2\pi r^2$, which for $r=3$ and $h=10$ is $60\pi+18\pi=78\pi\approx245.0$. A cylinder open at the top has only one base.
- In a right cone, with the vertex above the center of the base, the **slant height** $s$ is the distance from the vertex to the circle of the base. Height, radius and slant height form a right triangle, so $s=\sqrt{r^2+h^2}$, and the lateral area is $\pi rs$. With $r=3$ and $h=4$, $s=5$ and the lateral area is $15\pi\approx47.1$.
:::

:::esempio{titolo="Space diagonal of a box"}
A rectangular box has edges (the sides of its faces) of $3$, $4$ and $12\,\mathrm{cm}$. The space diagonal joins two vertices that do not lie on the same face. The diagonal of the base, a rectangle with sides $3\,\mathrm{cm}$ and $4\,\mathrm{cm}$, measures $\sqrt{3^2+4^2}=5\,\mathrm{cm}$. It is perpendicular to the vertical edge of $12\,\mathrm{cm}$, so the space diagonal is the hypotenuse of a right triangle and measures
$$
d=\sqrt{5^2+12^2}=\sqrt{169}=13\,\mathrm{cm}.
$$
The Pythagorean theorem is applied twice and, for edges $a,b,c$, the two steps together give $d=\sqrt{a^2+b^2+c^2}$. In a cube of edge $a$ the diagonal of a face measures $\sqrt{a^2+a^2}=a\sqrt2$ and the space diagonal $\sqrt{3a^2}=a\sqrt3$.
:::

:::osservazione{#unita-geometriche titolo="Area and volume conversions"}
Since $1\,\mathrm{m}=100\,\mathrm{cm}$, a square of side $1\,\mathrm{m}$ contains $100$ rows of $100$ squares of side $1\,\mathrm{cm}$. Thus $1\,\mathrm{m^2}=100^2\,\mathrm{cm^2}=10000\,\mathrm{cm^2}$. Likewise $1\,\mathrm{m^3}=100^3\,\mathrm{cm^3}=1000000\,\mathrm{cm^3}$.

The capacity of a container is measured in liters, with symbol $\mathrm{L}$. A liter is the volume of a cube with an edge of one decimeter ($10\,\mathrm{cm}$), so $1\,\mathrm{L}=1\,\mathrm{dm^3}=1000\,\mathrm{cm^3}$.

A tank shaped like a rectangular box has an internal base of $40\,\mathrm{cm}$ by $30\,\mathrm{cm}$ and contains $6\,\mathrm{L}=6000\,\mathrm{cm^3}$ of water. The water occupies a rectangular box with the same base and height $h$, so $40\cdot30\cdot h=6000$ and $h=\dfrac{6000}{1200}=5\,\mathrm{cm}$. The check gives $1200\cdot5=6000\,\mathrm{cm^3}$. The value found is the height of the water; the height of the tank is another quantity, greater than or equal to $5\,\mathrm{cm}$.
:::

## Coordinates, midpoints, and loci

:::definizione{#coordinate titolo="Distance and midpoint"}
In the **Cartesian plane** two oriented perpendicular lines are fixed, the horizontal $x$-axis and the vertical $y$-axis, which meet at the origin. A point $P(x,y)$ has two coordinates: the **abscissa** $x$ is the horizontal displacement from the origin, positive to the right; the **ordinate** $y$ is the vertical displacement, positive upwards. The point $(3,-2)$ is reached from the origin by moving $3$ units right and $2$ down.

Given $A(x_1,y_1)$ and $B(x_2,y_2)$, the differences $x_2-x_1$ and $y_2-y_1$ are the horizontal and vertical displacements from $A$ to $B$, the legs of a right triangle with hypotenuse $AB$. By the Pythagorean theorem
$$
AB=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}.
$$
For $A(1,2)$ and $B(4,6)$ the displacements are $3$ and $4$, so $AB=\sqrt{9+16}=5$.

The **midpoint** of a segment is its point equidistant from the endpoints, that is, at the same distance from both, and its coordinates are the averages of their coordinates:
$$
M=\left(\frac{x_1+x_2}{2},\frac{y_1+y_2}{2}\right).
$$
The midpoint of $(-2,5)$ and $(6,-1)$ is $\left(\dfrac{-2+6}{2},\dfrac{5-1}{2}\right)=(2,2)$.

The distance of $(x,y)$ from the $x$-axis is $|y|$ and its distance from the $y$-axis is $|x|$. The absolute value is the number without its sign, and a distance is positive or zero.
:::

:::definizione{#luoghi titolo="Geometric loci"}
A **locus** is the set of all the points that have a given property. The circle, for example, is the locus of the points at distance $r$ from the center.

The **perpendicular bisector** of a segment $AB$ is the line perpendicular to the segment at its midpoint, and it is the locus of the points equidistant from $A$ and $B$. In coordinates the condition $PA=PB$ is written $PA^2=PB^2$, which contains no roots. With $A(0,0)$, $B(4,2)$ and $P(x,y)$ this gives $x^2+y^2=(x-4)^2+(y-2)^2$. When the squares are expanded, the terms $x^2$ and $y^2$ cancel and $0=-8x-4y+20$ remains: the line $2x+y=5$, which passes through the midpoint $(2,1)$.

In a triangle the lines of each of the following four triples meet at one point.

| Lines | What they are | Meeting point |
|---|---|---|
| Perpendicular bisectors of the sides | perpendicular to the sides at their midpoints | **circumcenter**, equidistant from the three vertices |
| Angle bisectors | divide each interior angle into two equal angles | **incenter**, equidistant from the three sides |
| Medians | join each vertex to the midpoint of the opposite side | **centroid** |
| Altitudes | perpendiculars drawn from each vertex to the line of the opposite side | **orthocenter** |

The centroid divides each median into two parts, and the part towards the vertex is twice the other (ratio $2:1$): on a median $9\,\mathrm{cm}$ long it is $6\,\mathrm{cm}$ from the vertex and $3\,\mathrm{cm}$ from the midpoint of the side. The orthocenter is inside acute triangles, is the vertex of the right angle in right triangles and is outside obtuse triangles. The four points are defined by different properties and occupy different positions; they coincide only in an equilateral triangle, which has three equal sides.
:::

:::osservazione{titolo="Coordinates and transformations"}
A **transformation** of the plane assigns to each point $(x,y)$ another point and is described by saying how the coordinates change. The following three are applied to $P(3,1)$.

- A **translation** moves all points by the same vector $(u,v)$, $u$ units horizontally and $v$ vertically, so $(x,y)$ becomes $(x+u,y+v)$. With the vector $(2,-4)$ the point $P$ becomes $(5,-3)$.
- A **reflection** in a line sends each point to the other side of the line, at the same distance, along the perpendicular. In the $x$-axis the sign of $y$ changes and $P$ becomes $(3,-1)$; in the $y$-axis the sign of $x$ changes and $P$ becomes $(-3,1)$; in the line $y=x$ the coordinates are exchanged and $P$ becomes $(1,3)$.
- A **dilation** with center $C$ and factor $k>0$ leaves $C$ fixed and multiplies by $k$ the distance from $C$ of every other point, in the same direction. If the center is the origin, $(x,y)$ becomes $(kx,ky)$ and, with $k=2$, $P$ becomes $(6,2)$.

Translations and reflections preserve distances. A dilation transforms every figure into a similar figure, with scale factor $k$.

If the center $C$ is not the origin, the displacement from $C$ to $P$ is multiplied by $k$ and applied starting from $C$. With $C(1,2)$ and $k=2$ the displacement is $(3-1,1-2)=(2,-1)$ and its double is $(4,-2)$, so $P$ goes to $(1+4,2-2)=(5,0)$. The center stays fixed and the distance of $P$ from $C$ doubles, from $\sqrt5$ to $2\sqrt5$. Multiplying the coordinates of $P$ directly by $2$ gives $(6,2)$, which is the result of the dilation centered at the origin.
:::

## Lines and intersections

:::definizione{#rette titolo="Slope and line equation"}
A non-vertical line is formed by the points $(x,y)$ that satisfy an equation $y=mx+q$. The **slope** $m$, also called the gradient, is the change in $y$ when $x$ increases by one unit: if $m>0$ the line rises from left to right, if $m<0$ it falls. The number $q$ is the ordinate of the point where the line meets the $y$-axis, because $x=0$ gives $y=q$. In the line $y=2x+1$, $m=2$ and $q=1$.

Given two points of the line with different abscissas, $m$ is the ratio of the vertical displacement to the horizontal one:
$$
m=\frac{y_2-y_1}{x_2-x_1}.
$$
The line through $(x_0,y_0)$ with slope $m$ has equation $y-y_0=m(x-x_0)$. For the points $(1,3)$ and $(3,7)$, $m=\dfrac{7-3}{3-1}=2$. The line is $y-3=2(x-1)$, or $y=2x+1$.

A horizontal line has equation $y=k$ and slope zero. A vertical line has equation $x=k$: its points have the same abscissa, so in the ratio that defines $m$ the denominator is zero and the slope is not defined.
:::

:::teorema{#parallelismo titolo="Parallelism, perpendicularity, and distance"}
Two distinct non-vertical lines, with slopes $m_1$ and $m_2$, are parallel if $m_1=m_2$ and perpendicular if $m_1m_2=-1$. The lines $y=2x+1$ and $y=-\dfrac12x+4$ are perpendicular, because $2\cdot\left(-\dfrac12\right)=-1$. A vertical line $x=k$ and a horizontal line $y=h$ are always perpendicular; this case is recognized from the equations, because a vertical line has no slope.

The intersection point of two lines satisfies both equations, so it is found by solving the system they form.

- If the system has exactly one solution, the lines meet at one point.
- If the system has no solution, the lines are parallel and distinct. For the parallel lines $y=2x+1$ and $y=2x-3$ the equality $2x+1=2x-3$ reduces to $1=-3$, which is false.
- If the two equations have the same solutions, the lines coincide. This is the case for $y=2x+1$ and $2y=4x+2$.

Every line, including a vertical one, can be written in the form $ax+by+c=0$, with $a$ and $b$ not both zero. The distance of a point $P(x_0,y_0)$ from the line is the length of the perpendicular segment drawn from $P$ to the line, and it is
$$
d=\frac{|ax_0+by_0+c|}{\sqrt{a^2+b^2}}.
$$
The absolute value removes the sign, which depends on the side of the line on which the point lies. For $P(1,2)$ and the line $3x+4y+4=0$,
$$
d=\frac{|3\cdot1+4\cdot2+4|}{\sqrt{3^2+4^2}}=\frac{15}{5}=3.
$$
If the numerator is zero, $P$ satisfies the equation, so it belongs to the line and the distance is zero.
:::

:::esempio{titolo="Intersection as a shared condition"}
At the common point of the lines $y=2x+1$ and $y=-x+7$ the two expressions for $y$ are equal, so $2x+1=-x+7$. Moving the terms with $x$ to the left side and the numbers to the right gives $3x=6$, so $x=2$. The first equation gives $y=2\cdot2+1=5$ and the second gives the same value, $y=-2+7=5$.

In the graph the rising line is $y=2x+1$, the falling line is $y=-x+7$ and the marked point is their intersection $(2,5)$.

::grafico{f="2*x+1; -x+7" xmin=-1 xmax=5 ymin=-1 ymax=9 punti="2,5,pieno" titolo="The two lines share the point (2; 5)"}
:::

## The circle in Cartesian coordinates

:::definizione{#circonferenza-cartesiana titolo="Center and radius from an equation"}
A point $P(x,y)$ belongs to the circle with center $(a,b)$ and radius $r>0$ if its distance from the center is $r$. Squaring the distance formula gives the equation
$$
(x-a)^2+(y-b)^2=r^2.
$$
The circle with center $(2,-3)$ and radius $5$ has equation $(x-2)^2+(y+3)^2=25$, where $y+3$ comes from $y-(-3)$.

The left side is the square of the distance from the center, and comparing it with $r^2$ establishes the position of a point.

- The point $(5,1)$ gives $3^2+4^2=25$, so it lies on the circle.
- The origin gives $4+9=13<25$, so it is inside.
- The point $(8,0)$ gives $36+9=45>25$, so it is outside.

Expanding the squares turns the equation into $x^2+y^2-4x+6y-12=0$, and in this form the center and the radius cannot be read directly. They are recovered by **completing the squares**.

1. The terms are grouped and the number is moved to the right side: $(x^2-4x)+(y^2+6y)=12$.
2. The expression $x^2-4x$ becomes a square by adding $4$, the square of half the coefficient of $x$: $x^2-4x+4=(x-2)^2$.
3. Likewise $y^2+6y+9=(y+3)^2$.
4. The numbers $4$ and $9$ are added to both sides: $(x-2)^2+(y+3)^2=12+4+9=25$.

The center is $(2,-3)$ and the radius is $\sqrt{25}=5$. A sum of squares is positive or zero. Therefore, if the right side turns out negative, no point satisfies the equation; if it is zero, only the center satisfies it.
:::

:::osservazione{#intersezioni-circonferenza titolo="Relative positions of lines and circles"}
A line at distance $d$ from the center of a circle of radius $r$ is a **secant** if $d<r$, with two common points, a tangent if $d=r$, with only one common point, and an exterior line if $d>r$, with no common points.

Substituting the equation of the line into that of the circle gives a quadratic equation, which in the three cases has two, one or no solutions. For the circle $x^2+y^2=25$, with center the origin and radius $5$, the line $y=3$ is at distance $3$ from the center and is a secant. The substitution gives $x^2+9=25$, that is, $x^2=16$, and the common points are $(4,3)$ and $(-4,3)$.

For two distinct circles, with radii $r_1$ and $r_2$ and centers at distance $d$, $d$ is compared with the sum and with the difference of the radii. In the examples the radii are $5$ and $3$.

| Condition | Position and common points | Example |
|---|---|---|
| $d>r_1+r_2$ | exterior, no points | $d=10$ |
| $d=r_1+r_2$ | externally tangent, one point | $d=8$ |
| $\lvert r_1-r_2\rvert<d<r_1+r_2$ | intersecting, two points | $d=6$ |
| $d=\lvert r_1-r_2\rvert$ | internally tangent, one point | $d=2$ |
| $d<\lvert r_1-r_2\rvert$ | one inside the other, no points | $d=1$ |

Two circles with the same center and the same radius coincide and have infinitely many common points. This case is distinct from internal tangency, although here too $d=\lvert r_1-r_2\rvert=0$.
:::

## Transformations and plane regions

:::definizione{#trasformazioni titolo="Translations, reflections, and rotations"}
An **isometry** is a transformation that preserves distances, and therefore also angles and areas. Translations, reflections and rotations are isometries. A **rotation** turns all points through the same angle about a fixed point, the center; the counterclockwise direction is opposite to that of the hands of a clock.

| Transformation | $(x,y)$ becomes | $(3,2)$ becomes |
|---|---|---|
| Translation by the vector $(u,v)$ | $(x+u,y+v)$ | $(4,-2)$ with the vector $(1,-4)$ |
| Reflection in the $x$-axis | $(x,-y)$ | $(3,-2)$ |
| Reflection in the $y$-axis | $(-x,y)$ | $(-3,2)$ |
| Reflection in the line $y=x$ | $(y,x)$ | $(2,3)$ |
| Counterclockwise rotation of $90^\circ$ about the origin | $(-y,x)$ | $(-2,3)$ |
| Rotation of $180^\circ$ about the origin | $(-x,-y)$ | $(-3,-2)$ |

Translations and rotations also preserve orientation, the direction in which the vertices of a figure follow one another; a reflection reverses it.

If the center of rotation is $C(a,b)$, the displacement from $C$ to the point is rotated and then applied starting from $C$. In the rotation of $180^\circ$ the displacement $(x-a,y-b)$ becomes $(a-x,b-y)$, so the point goes to $(2a-x,2b-y)$. With $C(1,1)$ the point $(3,2)$ goes to $(2-3,2-2)=(-1,0)$.

The dilation with center the origin and factor $k>0$ sends $(x,y)$ to $(kx,ky)$. It preserves angles, multiplies distances by $k$ and areas by $k^2$, so it is an isometry only for $k=1$. A circle of radius $r$ becomes a circle of radius $kr$: with $k=3$ the one with center $(1,0)$ and radius $2$ becomes the one with center $(3,0)$ and radius $6$. In an isometry the radius stays the same.
:::

:::esempio{titolo="Order of transformations"}
The translation by the vector $(3,0)$ and the reflection in the $y$-axis are applied to the point $P(2,1)$. If the translation is performed first, $P$ goes to $Q(5,1)$ and the reflection then sends $Q$ to $R(-5,1)$. In the figure the arrow from $P$ to $Q$ is the translation and the arrow from $Q$ to $R$ is the reflection; $Q$ and $R$ are at the same distance from the $y$-axis.

If the reflection is performed first, $P$ goes to $(-2,1)$ and the translation sends it to $(-2+3,1)=(1,1)$. The final point is $(-5,1)$ in the first case and $(1,1)$ in the second, so the result depends on the order of the two transformations.

::struttura{punti="2,1,P;5,1,Q;-5,1,R" frecce="0,0,6,0,x;0,0,0,3,y;2,1,5,1;5,1,-5,1" riferimento=0 titolo="P is translated to Q and then reflected to R"}
:::

:::definizione{#regioni titolo="Simultaneous conditions in the plane"}
A line divides the plane into two **half-planes**. A linear inequality in $x$ and $y$, a condition written with $<$, $>$, $\le$ or $\ge$, is satisfied by the points of one of the two. With $\le$ ("less than or equal to") and $\ge$ the points of the line belong to the region; with $<$ and $>$ they are excluded. The condition $x\ge2$ describes the vertical line $x=2$ and the points to its right; $y<3$ describes the points below the horizontal line $y=3$, without the line.

A system requires the conditions to hold together, so it describes the intersection of the regions, their common part. To establish whether a point belongs to the region of the system
$$
\begin{cases}
x\ge2\\
y<3
\end{cases}
$$
its coordinates are substituted into both conditions.

- The point $(4,1)$ belongs to the region, because $4\ge2$ and $1<3$.
- The point $(4,3)$ is outside the region, because $3<3$ is false.

An equation added to the system restricts the region to the points of the corresponding curve. With $y=1$ the points of the line $y=1$ that have $x\ge2$ remain.
:::
