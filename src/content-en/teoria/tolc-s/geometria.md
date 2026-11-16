---
titolo: "Geometry for TOLC-S"
sommario: "Plane and solid figures, distances, similarity, and coordinate geometry, with examples and diagrams."
---

## Angles, triangles, and distances

:::definizione{#angoli titolo="Angles and parallel lines"}
An **angle** measures the rotation between two rays with the same endpoint. A right angle measures $90^\circ$, a straight angle $180^\circ$, and a full turn $360^\circ$. Two angles are complementary if their sum is $90^\circ$ and supplementary if it is $180^\circ$. When two lines intersect, vertically opposite angles are equal, while adjacent angles are supplementary.

If two parallel lines are cut by a transversal, corresponding angles are equal. This property transfers an angle from one part of a figure to another. For example, if an acute angle measures $38^\circ$, the adjacent obtuse angle measures $180^\circ-38^\circ=142^\circ$. The apparent slope of a drawing does not assign an angle a value: the stated data and relationships determine it.
:::

::::teorema{#triangoli titolo="Angle sum and triangle inequality"}
In a nondegenerate triangle, the interior angles sum to $180^\circ$. Moreover, if two sides have lengths $a$ and $b$, the third side $c$ satisfies
$$
|a-b|<c<a+b.
$$
These conditions distinguish a triangle from three segments that cannot close. With sides $4$ and $7$, for example, the third side must be greater than $3$ and less than $11$.

:::dimostrazione
For the angle sum, draw a line through one vertex parallel to the opposite side. The other two angles occur at that vertex as alternate interior angles, and together with the third angle they form a straight angle. For the inequality, the path between two vertices through the third is longer than the direct segment; applying this observation to all three sides gives both the upper and lower bounds.
:::
::::

::::teorema{#pitagora titolo="Pythagorean theorem"}
In a right triangle, let $a,b$ be the legs and $c$ the hypotenuse. Then
$$
c^2=a^2+b^2.
$$
The hypotenuse is the side opposite the right angle. The formula gives an oblique distance from two perpendicular displacements. The converse also holds: if the square of the longest side equals the sum of the squares of the other two, the triangle is right-angled.

:::dimostrazione
A square with side $a+b$ can be divided into four congruent right triangles and an inner square with side $c$. Comparing areas gives $(a+b)^2=4\cdot\dfrac{ab}{2}+c^2$. Expanding the square and subtracting $2ab$ leaves $a^2+b^2=c^2$.
:::
::::

:::esempio{titolo="An altitude in an isosceles triangle"}
An isosceles triangle has equal sides of $13\,\mathrm{cm}$ and a base of $10\,\mathrm{cm}$. The altitude to the base divides it into two $5\,\mathrm{cm}$ segments. Each half is a right triangle, so
$$
h=\sqrt{13^2-5^2}=\sqrt{144}=12\,\mathrm{cm}.
$$
The area is $\dfrac{10\cdot12}{2}=60\,\mathrm{cm^2}$. The $13\,\mathrm{cm}$ side is oblique to the base, so the height used in the product is $12\,\mathrm{cm}$.

::struttura{nodi="A,-5,0;B,5,0;C,0,12;H,0,0" linee="-5,0 5,0 0,12 -5,0;0,0 0,12;0,0.7 0.7,0.7 0.7,0" quote="A,H,5 cm;H,B,5 cm;A,C,13 cm,-0.8" titolo="Altitude CH divides the isosceles triangle into two right triangles"}
:::

:::osservazione{titolo="Classification from side lengths"}
Let $a,b,c$ be the sides of a triangle, with $c$ the longest. If $c^2>a^2+b^2$, the angle opposite $c$ is obtuse; if $c^2<a^2+b^2$, all angles are acute. The distinction follows from the law of cosines, $c^2=a^2+b^2-2ab\cos\gamma$: the cosine of the largest angle is negative in the first case and positive in the second. The triangle inequality must hold before this criterion applies.
:::


## Similarity and scale factors

:::definizione{#similitudine titolo="Similar figures"}
Two figures are **similar** if they have the same shape and corresponding lengths are multiplied by the same factor $k>0$. For triangles, two pairs of equal angles are sufficient; the third angles agree because their sum is $180^\circ$. Ratios must be written in the same order for every pair, matching sides opposite equal angles.

If one triangle has sides $3,4,5$ and another has sides $6,8,10$, the ratio from the first to the second is $k=2$. Altitudes and perimeters also double. For areas, every product of two lengths contains two factors $k$, so the ratio is $k^2$. For volumes of similar solids, it is $k^3$ instead.
:::

:::esempio{titolo="From areas to lengths"}
Two squares have areas $18\,\mathrm{cm^2}$ and $50\,\mathrm{cm^2}$. The ratio of the first side length to the second is
$$
k=\sqrt{\frac{18}{50}}=\sqrt{\frac{9}{25}}=\frac35.
$$
The ratio of their perimeters is also $\dfrac35$. The ratio $\dfrac9{25}$ describes areas, so using it for side lengths would count the effect of scale twice. In a drawing at scale $1:200$, a $3\,\mathrm{cm}$ segment represents $600\,\mathrm{cm}=6\,\mathrm{m}$ in reality.
:::

:::osservazione
Similarity applies to shadows when the ground is horizontal, the objects are vertical, and sunlight travels in the same direction. Heights and shadows then form right triangles with the same angles. A $2\,\mathrm{m}$ pole casting a $3\,\mathrm{m}$ shadow and a tree casting a $12\,\mathrm{m}$ shadow give $h=12\cdot\dfrac23=8\,\mathrm{m}$. The geometric conditions justify the proportion.
:::

## Polygons, areas, and decompositions

:::definizione{#aree titolo="Area and corresponding altitude"}
**Area** measures the size of a plane region. For a rectangle with sides $b,h$, it is $bh$. A parallelogram with base $b$ and height $h$ has the same area: moving a triangular piece from one side produces a rectangle. The height is the perpendicular distance between the lines containing the two bases.

A triangle occupies half the parallelogram formed with a copy of itself, so $A=\dfrac{bh}{2}$. For a trapezoid with parallel bases $B,b$ and height $h$, $A=\dfrac{(B+b)h}{2}$. The perpendicular diagonals of a rhombus divide it into four right triangles, giving $A=\dfrac{d_1d_2}{2}$. Lengths are expressed in the same unit before multiplying.
:::

:::esempio{titolo="Area after removing a piece"}
From a $10\,\mathrm{cm}$ by $6\,\mathrm{cm}$ rectangle, a $4\,\mathrm{cm}$ by $2\,\mathrm{cm}$ rectangle is removed at one corner. Since the regions do not overlap, the remaining area is
$$
A=10\cdot6-4\cdot2=52\,\mathrm{cm^2}.
$$
The perimeter instead requires tracing the boundary. Removing the corner rectangle replaces the deleted outer segments with segments of equal lengths, so in this case the perimeter remains $32\,\mathrm{cm}$. The area has decreased while the perimeter has stayed the same.

::struttura{poligoni="0,0 10,0 10,4 6,4 6,6 0,6" nodi="A,0,0;B,10,0;C,10,4;D,6,4;E,6,6;F,0,6" quote="A,B,10 cm;F,A,6 cm;D,C,4 cm;E,D,2 cm" titolo="The remaining region has area 52 square centimeters"}
:::

:::teorema{#poligoni titolo="Angles and diagonals of a polygon"}
A convex polygon with $n\ge3$ sides can be divided into $n-2$ triangles by drawing diagonals from one vertex. Its interior angle sum is therefore $(n-2)180^\circ$. If the polygon is regular, each interior angle measures $\dfrac{(n-2)180^\circ}{n}$ and each adjacent exterior angle measures $\dfrac{360^\circ}{n}$.

There are $n-3$ diagonals from each vertex: the vertex itself and its two neighbors are excluded. Counting from all vertices counts every diagonal twice, so the total is $\dfrac{n(n-3)}2$. A hexagon has $9$ diagonals, while its interior angles sum to $720^\circ$.
:::

## Circles, arcs, and chords

:::definizione{#cerchio titolo="Circle and disk"}
A **circle** is the set of points at distance $r>0$ from a center $O$. The **disk** also contains the interior points. The diameter measures $2r$, the circumference is $2\pi r$, and the disk area is $\pi r^2$. The presence of $r$ or $r^2$ distinguishes a length from an area, including in the units.

A chord joins two points on the circle. The perpendicular from the center to the chord bisects it. If its distance from the center is $d<r$, half the chord has length $\sqrt{r^2-d^2}$. At a tangent point, the radius is perpendicular to the tangent line: this property provides a right triangle in many distance problems.
:::

:::definizione{#settori titolo="Arc and circular sector"}
A sector with central angle $\alpha$, measured in degrees, occupies the fraction $\dfrac{\alpha}{360^\circ}$ of the disk. Therefore its arc length $\ell$ and sector area are
$$
\ell=\frac{\alpha}{360^\circ}2\pi r,
\qquad A=\frac{\alpha}{360^\circ}\pi r^2.
$$
The complete sector perimeter contains the arc and both radii, so it is $\ell+2r$. An inscribed angle measures half the central angle subtending the same arc. If the arc is a semicircle, the inscribed angle is a right angle.
:::

:::esempio{titolo="Chord and distance from the center"}
A chord in a circle of radius $5\,\mathrm{cm}$ is $3\,\mathrm{cm}$ from the center. Let $M$ be its midpoint. Triangle $OMA$ has hypotenuse $5$ and one leg $3$, so $MA=\sqrt{25-9}=4\,\mathrm{cm}$. The entire chord measures $8\,\mathrm{cm}$.

::struttura{cerchi="0,0,5" nodi="O,0,0;M,3,0;A,3,4;B,3,-4" linee="0,0 3,4;3,-4 3,4;0,0 3,0" quote="O,M,3 cm,0.5;O,A,5 cm,-0.8" titolo="Radius OA and distance OM determine half of chord AB"}
:::

## Solids and measurement units

:::definizione{#volumi titolo="Prisms, pyramids, and solids of revolution"}
The volume of a prism is $V=A_bh$, where $A_b$ is the base area and $h$ the perpendicular distance between the bases. A cylinder follows the same rule with $A_b=\pi r^2$. A pyramid and a cone have volume $\dfrac{A_bh}{3}$. For a sphere of radius $r$,
$$
V=\frac43\pi r^3,\qquad S=4\pi r^2.
$$
The factor one third concerns the volume of pyramids and cones; surface area must be found from the actual faces. For a closed cylinder, total surface area is $2\pi rh+2\pi r^2$, the sum of the lateral area and both bases. If the cylinder is open at the top, only one base is included. In a right cone, the slant height is $s=\sqrt{r^2+h^2}$ and the lateral area is $\pi rs$.
:::

:::esempio{titolo="Space diagonal of a box"}
A rectangular box has edge lengths $3,4,12\,\mathrm{cm}$. The base diagonal measures $\sqrt{3^2+4^2}=5\,\mathrm{cm}$. This diagonal and the height are perpendicular, so the space diagonal measures
$$
d=\sqrt{5^2+12^2}=13\,\mathrm{cm}.
$$
The procedure applies the Pythagorean theorem twice and gives the formula $d=\sqrt{a^2+b^2+c^2}$. For a cube with edge $a$, it gives $a\sqrt3$; a face diagonal instead measures $a\sqrt2$.
:::

:::osservazione{#unita-geometriche titolo="Area and volume conversions"}
Since $1\,\mathrm{m}=100\,\mathrm{cm}$, a square with a one-meter side contains $100^2=10000$ squares with one-centimeter sides. Thus $1\,\mathrm{m^2}=10000\,\mathrm{cm^2}$. Similarly, $1\,\mathrm{m^3}=1000000\,\mathrm{cm^3}$. For capacity, $1\,\mathrm{L}=1\,\mathrm{dm^3}=1000\,\mathrm{cm^3}$.

A tank with an internal base $40\,\mathrm{cm}$ by $30\,\mathrm{cm}$ contains $6\,\mathrm{L}=6000\,\mathrm{cm^3}$ of water. The level is therefore $h=\dfrac{6000}{40\cdot30}=5\,\mathrm{cm}$. Multiplying the base area by this height recovers the given volume. This check distinguishes the water height from the total height of the container.
:::

## Coordinates, midpoints, and loci

:::definizione{#coordinate titolo="Distance and midpoint"}
In the Cartesian plane, a point $P(x,y)$ is specified by two coordinates. Coordinate differences between $A(x_1,y_1)$ and $B(x_2,y_2)$ give the horizontal and vertical displacements between them. By the Pythagorean theorem,
$$
AB=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}.
$$
The midpoint halves both displacements, so
$$
M=\left(\frac{x_1+x_2}{2},\frac{y_1+y_2}{2}\right).
$$
For example, the midpoint of $(-2,5)$ and $(6,-1)$ is $(2,2)$. The distance from $(x,y)$ to the horizontal axis is $|y|$, while its distance to the vertical axis is $|x|$. Absolute values express the fact that a distance is nonnegative.
:::

:::definizione{#luoghi titolo="Geometric loci"}
A **locus** is the set of points satisfying a property. Points equidistant from two distinct points $A,B$ form the perpendicular bisector of the segment, the line perpendicular to $AB$ through its midpoint. The property becomes $PA^2=PB^2$: equal quadratic terms cancel, leaving a linear equation.

In a triangle, the perpendicular bisectors meet at the circumcenter, equidistant from the vertices. The internal angle bisectors meet at the incenter, equidistant from the lines containing the sides. Medians join vertices to the midpoints of the opposite sides; their intersection, the centroid, divides each median in the ratio $2:1$ starting from the vertex. These points satisfy different properties and may occupy different positions. The three altitude lines meet at the **orthocenter**: each altitude passes through a vertex and is perpendicular to the opposite side line. The orthocenter is inside an acute triangle, at the right-angle vertex of a right triangle, and outside an obtuse triangle.
:::

:::osservazione{titolo="Coordinates and transformations"}
Coordinates describe the movement of a figure point by point. A translation by vector $(u,v)$ adds the two components to the coordinates, so $(x,y)$ becomes $(x+u,y+v)$. Reflection in the $x$-axis changes the sign of $y$; reflection in the $y$-axis changes the sign of $x$; reflection in $y=x$ exchanges the coordinates. Distances are preserved in all these cases.

If a transformation has center $C$, work with vector $P-C$ and add $C$ again at the end. For example, dilation by factor $2$ centered at $(1,2)$ sends $P=(3,1)$ to $(1,2)+2(2,-1)=(5,0)$. The center stays fixed and the distance from it doubles. Applying the factor directly to the original coordinates would instead use the origin as the center.
:::


## Lines and intersections

:::definizione{#rette titolo="Slope and line equation"}
A nonvertical line has equation $y=mx+q$. The **slope** $m$ gives the change in $y$ when $x$ increases by one unit; $q$ is the vertical coordinate where the line meets the $y$-axis. From two points with different horizontal coordinates,
$$
m=\frac{y_2-y_1}{x_2-x_1}.
$$
Given the slope and a point $(x_0,y_0)$, the line is $y-y_0=m(x-x_0)$. A horizontal line has equation $y=k$ and slope zero. A vertical line has equation $x=k$; in this case, the ratio defining the slope has zero denominator and is not a real number.
:::

:::teorema{#parallelismo titolo="Parallelism, perpendicularity, and distance"}
Two distinct nonvertical lines are parallel if they have the same slope. Two lines with slopes $m_1,m_2$ are perpendicular if $m_1m_2=-1$. A vertical and a horizontal line are perpendicular and can be treated directly from their equations.

To find the intersection of two lines, impose both equations. One solution identifies a common point; an inconsistent system means distinct parallel lines; an identity means coincident lines. The distance from $P(x_0,y_0)$ to the line $ax+by+c=0$, with $(a,b)\ne(0,0)$, is
$$
d=\frac{|ax_0+by_0+c|}{\sqrt{a^2+b^2}}.
$$
The absolute value removes the sign associated with which side of the line contains the point. If the numerator is zero, the point lies on the line and the distance is zero.
:::

:::esempio{titolo="Intersection as a shared condition"}
The lines $y=2x+1$ and $y=-x+7$ intersect when $2x+1=-x+7$. Hence $3x=6$, $x=2$, and $y=5$. Substituting $(2,5)$ into both equations gives $5=5$ and $5=5$, respectively.

::grafico{f="2*x+1; -x+7" xmin=-1 xmax=5 ymin=-1 ymax=9 punti="2,5,pieno" titolo="The two lines share the point (2; 5)"}
:::

## The circle in Cartesian coordinates

:::definizione{#circonferenza-cartesiana titolo="Center and radius from an equation"}
The circle with center $(a,b)$ and radius $r>0$ is described by
$$
(x-a)^2+(y-b)^2=r^2.
$$
The left side is the square of the distance from the center. Substituting a point's coordinates gives a value below $r^2$ for a point inside the disk, equality for a point on the circle, and a value above it for an exterior point.

To read the center and radius from an expanded equation, complete the squares. The equation $x^2+y^2-4x+6y-12=0$ becomes $(x-2)^2+(y+3)^2=25$. The center is $(2,-3)$ and the radius is $5$. The term $25$ is the square of the radius. If completing the square leaves a negative right side, there are no real points; if it is zero, the locus consists only of the center.
:::

:::osservazione{#intersezioni-circonferenza titolo="Relative positions of lines and circles"}
A line at distance $d$ from the center is a secant, tangent, or exterior line according as $d<r$, $d=r$, or $d>r$. Substituting the line equation into the circle equation gives the same distinction through the solutions of a quadratic equation.

For two distinct circles with radii $r_1,r_2$ and center distance $d$, external tangency means $d=r_1+r_2$, while internal tangency means $d=|r_1-r_2|$. Two intersections require $|r_1-r_2|<d<r_1+r_2$. If the centers and radii agree, the circles coincide and have infinitely many common points; this case must be separated from internal tangency.
:::

## Transformations and plane regions

:::definizione{#trasformazioni titolo="Translations, reflections, and rotations"}
A translation by vector $(u,v)$ sends $(x,y)$ to $(x+u,y+v)$. It moves all points in the same way, so it preserves distances, angles, areas, and orientation. Reflection in the $x$-axis sends a point to $(x,-y)$, while reflection in the $y$-axis sends it to $(-x,y)$. Reflection in the line $y=x$ exchanges the coordinates.

A counterclockwise $90^\circ$ rotation about the origin sends $(x,y)$ to $(-y,x)$. A $180^\circ$ rotation sends $(x,y)$ to $(-x,-y)$. If the center is $C(a,b)$, first subtract the center coordinates, rotate the resulting vector, and then add $(a,b)$ again. For a $180^\circ$ rotation, this directly gives $(2a-x,2b-y)$.

A dilation centered at the origin with factor $k>0$ sends $(x,y)$ to $(kx,ky)$. It preserves angles but multiplies distances by $k$ and areas by $k^2$. A circle remains a circle; isometries preserve its radius, while dilation multiplies it by $k$.
:::

:::esempio{titolo="Order of transformations"}
Point $P=(2,1)$ is translated by $(3,0)$ and then reflected in the $y$-axis. After translation it is $(5,1)$, so the final point is $(-5,1)$. Reversing the order gives $(-2,1)$ after reflection and $(1,1)$ after translation. The two operations do not have the same effect when their order changes.

::struttura{punti="2,1,P;5,1,Q;-5,1,R" frecce="0,0,6,0,x;0,0,0,3,y;2,1,5,1;5,1,-5,1" riferimento=0 titolo="P is translated to Q and then reflected to R"}
:::

:::definizione{#regioni titolo="Simultaneous conditions in the plane"}
A linear inequality describes a half-plane. The condition $x\ge2$ contains the vertical line $x=2$ and points to its right; $y<3$ contains points below the line $y=3$, excluding the line. A system requires all conditions to hold together, so it describes the intersection of the regions. To test whether a point belongs, substitute both coordinates into every condition. Adding an equation restricts the region to points on the corresponding curve.
:::
