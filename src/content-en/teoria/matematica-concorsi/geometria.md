---
titolo: Plane and Solid Geometry
sommario: Angles, triangles and the Pythagorean theorem, perimeters and areas of plane figures, circles, similarity, surface areas and volumes of solids, and the basics of Cartesian coordinates, with methods for solving geometry questions quickly on competitive exams.
---

## Angles

:::definizione{#angolo titolo="Angles and their measure"}
An **angle** is either of the two regions of the plane bounded by two rays with a common endpoint. The endpoint is the **vertex**, and the rays are the **sides**. Angles are measured in degrees. A full turn sweeps out the entire plane around the vertex and measures $360^\circ$. This gives the measures of the most common angles:

- A **straight** angle has sides that form a straight line. It is half a full turn and measures $180^\circ$.
- A **right** angle is half a straight angle and measures $90^\circ$.
- An angle is **acute** if it measures more than zero degrees but less than $90^\circ$ and **obtuse** if it measures more than $90^\circ$ but less than $180^\circ$.

Measuring angles in degrees lets us work with them as numbers. For example, in $20$ minutes the minute hand of a clock turns through $\dfrac{20}{60} \cdot 360^\circ = 120^\circ$ because it makes a full turn in $60$ minutes.
:::

:::definizione{#angoli-complementari-supplementari titolo="Complementary and supplementary angles"}
Two angles are **complementary** if their measures add up to $90^\circ$ and **supplementary** if their measures add up to $180^\circ$. Thus an angle $\alpha$ has complement $90^\circ - \alpha$ and supplement $180^\circ - \alpha$. The complement of $35^\circ$ is $55^\circ$, and the supplement of $35^\circ$ is $145^\circ$. These two definitions come up in almost every question about angles because they let us find an unknown angle from a known one. The supplement of an acute angle exceeds its complement by $90^\circ$ because $(180^\circ - \alpha) - (90^\circ - \alpha) = 90^\circ$.
:::

:::teorema{#angoli-opposti-al-vertice titolo="Vertical angles"}
Two lines that intersect at a point form four angles. Two angles whose sides are opposite rays in pairs are called **vertical angles** and have equal measures. Each is supplementary to the same adjacent angle $\beta$, so both measure $180^\circ - \beta$. If one of the four angles measures $50^\circ$, the others measure $130^\circ$, $50^\circ$, and $130^\circ$.

::grafico{assi=0 uguale=1 linee="-2.82,-1.03 2.82,1.03;1.72,-2.46 -1.72,2.46;0.52,0.19 0.49,0.26 0.44,0.32 0.39,0.38 0.34,0.44 0.27,0.48 0.2,0.51 0.13,0.53 0.05,0.55 -0.03,0.55 -0.1,0.54 -0.18,0.52 -0.25,0.49 -0.32,0.45;-0.52,-0.19 -0.49,-0.26 -0.44,-0.32 -0.39,-0.38 -0.34,-0.44 -0.27,-0.48 -0.2,-0.51 -0.13,-0.53 -0.05,-0.55 0.03,-0.55 0.1,-0.54 0.18,-0.52 0.25,-0.49 0.32,-0.45;-0.4,0.57 -0.48,0.51 -0.55,0.43 -0.61,0.35 -0.65,0.26 -0.68,0.16 -0.7,0.06 -0.7,-0.04 -0.69,-0.14 -0.66,-0.24;0.4,-0.57 0.48,-0.51 0.55,-0.43 0.61,-0.35 0.65,-0.26 0.68,-0.16 0.7,-0.06 0.7,0.04 0.69,0.14 0.66,0.24" etichette="0.2,0.85,α;-0.4,-1.05,α;-1.05,0.2,β;0.85,-0.4,β" xmin=-3.2 xmax=3.2 ymin=-2.6 ymax=2.6 titolo="Two intersecting lines form two pairs of vertical angles. Each angle marked $\alpha$ is supplementary to each of the two adjacent angles marked $\beta$"}

:::

::::teorema{#rette-parallele-trasversale titolo="Parallel lines cut by a transversal"}
Two parallel lines $r$ and $s$ crossed by a third line $t$, called a **transversal**, form eight angles. These angles have the following relationships:

- **Alternate interior angles**, which lie between the parallel lines and on opposite sides of the transversal, have equal measures.
- **Corresponding angles**, which occupy the same position relative to $r$ and relative to $s$, have equal measures.
- **Same-side interior angles**, which lie between the parallel lines and on the same side of the transversal, are supplementary.

The eight angles therefore have at most two distinct measures, $\alpha$ and $180^\circ - \alpha$. If the angle the transversal forms with $r$ is $60^\circ$, each angle in the figure measures either $60^\circ$ or $120^\circ$.

::grafico{assi=0 uguale=1 linee="-3,0 4,0;-3,2 4,2;-0.75,-1.3 1.91,3.3;0.45,0 0.44,0.07 0.43,0.13 0.41,0.2 0.37,0.25 0.33,0.31 0.28,0.35 0.23,0.39;0.7,2 0.71,1.93 0.72,1.87 0.75,1.8 0.78,1.75 0.82,1.69 0.87,1.65 0.93,1.61;1.6,2 1.6,2.07 1.58,2.13 1.56,2.2 1.53,2.25 1.48,2.31 1.44,2.35 1.38,2.39;0.3,0.52 0.22,0.56 0.15,0.58 0.06,0.6 -0.02,0.6 -0.1,0.59 -0.19,0.57 -0.26,0.54 -0.34,0.5 -0.4,0.45 -0.46,0.39 -0.51,0.32 -0.55,0.24 -0.58,0.17 -0.59,0.08 -0.6,0" etichette="0.6,0.12,α;0.15,1.65,α;1.7,2.15,α;-0.75,0.5,β;4.1,-0.1,r;4.1,1.9,s;2.01,3.2,t" xmin=-3.2 xmax=4.6 ymin=-1.5 ymax=3.5 titolo="Two parallel lines $r$ and $s$ are cut by the transversal $t$. The three angles marked $\alpha$ are equal because they are alternate interior or corresponding angles. The angles $\alpha$ and $\beta$ are supplementary"}

:::dimostrazione
Translating $r$ onto $s$ along the transversal preserves angles, so corresponding angles are equal. An alternate interior angle is vertical to a corresponding angle, so it also has the same measure. Of two same-side interior angles, one is supplementary to an adjacent angle that is alternate interior to the other. The two same-side interior angles therefore add up to $180^\circ$.
:::
::::

## Triangles and polygons

::::teorema{#somma-angoli-triangolo titolo="Sum of the interior angles of a triangle"}
The interior angles of every triangle add up to $180^\circ$. Given two angles, find the third by subtraction. In a triangle with angles of $48^\circ$ and $77^\circ$, the third angle measures $180^\circ - 48^\circ - 77^\circ = 55^\circ$.

:::dimostrazione
Draw the line through vertex $C$ parallel to side $AB$. The angles it forms with sides $CA$ and $CB$ are alternate interior to angle $\alpha$ at $A$ and angle $\beta$ at $B$, so their measures are $\alpha$ and $\beta$. Together with angle $\gamma$ at $C$, they form a straight angle. Hence $\alpha + \beta + \gamma = 180^\circ$.
:::

::grafico{assi=0 uguale=1 poligoni="0,0 6.5,0 2.2,4" linee="0.7,0 0.69,0.11 0.67,0.21 0.63,0.31 0.57,0.4 0.51,0.48 0.43,0.55 0.34,0.61;5.99,0.48 5.92,0.39 5.87,0.3 5.83,0.21 5.81,0.1 5.8,0;1.5,4 1.51,3.89 1.53,3.79 1.57,3.69 1.63,3.6 1.69,3.52 1.77,3.45 1.86,3.39;2.71,3.52 2.78,3.61 2.83,3.7 2.87,3.79 2.89,3.9 2.9,4;1.98,3.61 2.04,3.58 2.11,3.56 2.17,3.55 2.24,3.55 2.3,3.56 2.37,3.58 2.43,3.61 2.48,3.65 2.53,3.69" segmenti="-1.2,4,6.5,4" etichette="0.85,0.2,α;5.55,0.2,β;1.05,3.55,α;3.05,3.55,β;2.05,3.2,γ;-0.4,-0.4,A;6.6,-0.4,B;2.1,4.25,C" xmin=-1.5 xmax=7.2 ymin=-0.8 ymax=4.7 titolo="The dashed line passes through $C$ and is parallel to $AB$. The angles it forms with sides $CA$ and $CB$ are alternate interior to $\alpha$ and $\beta$, so at $C$ we have $\alpha + \gamma + \beta = 180^\circ$"}

::::

:::definizione{#classificazione-triangoli titolo="Classifying triangles"}
Classified by its sides, a triangle is **equilateral** if all three sides have equal lengths, **isosceles** if at least two do, and **scalene** if all three lengths are different. Classified by its angles, it is **acute** if it has three acute angles, **right** if it has a right angle, and **obtuse** if it has an obtuse angle. In a right triangle, the two sides that form the right angle are the **legs**, and the side opposite it is the **hypotenuse**.

Both classifications give information about the angles. In an isosceles triangle the base angles are equal, so if the vertex angle measures $40^\circ$, each base angle measures $\dfrac{180^\circ - 40^\circ}{2} = 70^\circ$. In an equilateral triangle all three angles are equal and therefore measure $60^\circ$ each. In a right triangle the two acute angles are complementary.
:::

:::teorema{#somma-angoli-poligono titolo="Sum of the interior angles of a polygon"}
In a convex polygon with $n$ sides, the interior angles add up to
$$
(n - 2) \cdot 180^\circ .
$$
The diagonals drawn from one vertex divide the polygon into $n - 2$ triangles. Together, the angles of these triangles make up the angles of the polygon. The interior angles of a hexagon therefore add up to $4 \cdot 180^\circ = 720^\circ$. In a **regular** polygon, all sides are equal and all angles are equal, so each interior angle measures $\dfrac{(n - 2) \cdot 180^\circ}{n}$. In a regular hexagon this gives $\dfrac{720^\circ}{6} = 120^\circ$.

::grafico{assi=0 uguale=1 poligoni="0,2 -1.9,0.62 -1.18,-1.62 1.18,-1.62 1.9,0.62" segmenti="0,2,-1.18,-1.62;0,2,1.18,-1.62" etichette="-1.3,0.35,1;-0.15,-0.9,2;1.05,0.35,3" xmin=-2.6 xmax=2.6 ymin=-2.1 ymax=2.4 titolo="The two diagonals from one vertex divide the pentagon into $5 - 2 = 3$ triangles, so its interior angles add up to $3 \cdot 180^\circ = 540^\circ$"}

:::

:::osservazione{#angoli-esterni titolo="Exterior angles of a polygon"}
At each vertex, the exterior angle is supplementary to the interior angle. The exterior angles of a convex polygon add up to $360^\circ$ regardless of the number of sides, since $n \cdot 180^\circ - (n - 2) \cdot 180^\circ = 360^\circ$. In a regular polygon each exterior angle therefore measures $\dfrac{360^\circ}{n}$. This relationship gives the number of sides of a regular polygon when its interior angle is known. If the interior angle is $150^\circ$, the exterior angle is $30^\circ$, so the polygon has $\dfrac{360}{30} = 12$ sides.
:::

## The Pythagorean theorem

:::teorema{#teorema-di-pitagora titolo="The Pythagorean theorem"}
In a right triangle with legs $a$ and $b$ and hypotenuse $c$,
$$
a^2 + b^2 = c^2 .
$$
Geometrically, the area of the square on the hypotenuse equals the sum of the areas of the squares on the legs. The theorem lets us find one side of a right triangle when the other two are known:
$$
c = \sqrt{a^2 + b^2},
\qquad
a = \sqrt{c^2 - b^2} .
$$
With legs $6$ and $8$, the hypotenuse is $\sqrt{36 + 64} = \sqrt{100} = 10$. With hypotenuse $17$ and one leg $8$, the other leg is $\sqrt{289 - 64} = \sqrt{225} = 15$. The hypotenuse is always the longest side, which provides a quick check on the result.

::grafico{assi=0 uguale=1 poligoni="0,0 4,0 4,-4 0,-4;0,0 0,3 -3,3 -3,0;4,0 0,3 3,7 7,4" linee="0,0 4,0 0,3 0,0;0.35,0 0.35,0.35 0,0.35" etichette="1.6,-2.2,16;-1.75,1.3,9;3.2,3.4,25;1.8,0.25,4;0.15,1.3,3;2.15,1.75,5" xmin=-3.5 xmax=7.5 ymin=-4.5 ymax=7.5 titolo="The right triangle has legs $3$ and $4$ and hypotenuse $5$. The square on the hypotenuse has area $25$, equal to the sum $9 + 16$ of the areas of the squares on the legs"}

:::

:::attenzione
The hypotenuse is *not* the sum of the legs. With legs $3$ and $4$, their sum is $7$, whereas the hypotenuse is $\sqrt{9 + 16} = 5$. Similarly, $\sqrt{a^2 + b^2}$ differs from $a + b$ whenever $a$ and $b$ are positive. An answer choice equal to the sum of the legs reflects this error.
:::

:::osservazione{#terne-pitagoriche titolo="Pythagorean triples"}
A **Pythagorean triple** is a triple of integers $a$, $b$, $c$ satisfying $a^2 + b^2 = c^2$. The ones that occur most often on exams are
$$
(3, 4, 5),
\qquad
(5, 12, 13),
\qquad
(8, 15, 17),
\qquad
(7, 24, 25),
$$
along with their multiples, because multiplying all three numbers by the same factor preserves the equality. For example, $(6, 8, 10)$ and $(9, 12, 15)$ are multiples of $(3, 4, 5)$. Recognizing a triple saves taking a square root. A right triangle with legs $15$ and $20$ has hypotenuse $25$ because its legs are $5 \cdot 3$ and $5 \cdot 4$.
:::

:::teorema{#triangoli-rettangoli-particolari titolo="Right triangles with 45°, 30°, and 60° angles"}
Right triangles with acute angles of $45^\circ$, or with acute angles of $30^\circ$ and $60^\circ$, have fixed side ratios that follow from the Pythagorean theorem.

- A diagonal divides a square with side length $l$ into two isosceles right triangles with acute angles of $45^\circ$. The hypotenuse, which is the diagonal of the square, is $d = \sqrt{l^2 + l^2} = l\sqrt{2}$.
- An altitude divides an equilateral triangle of side length $l$ into two right triangles with angles of $30^\circ$ and $60^\circ$. The leg opposite the $30^\circ$ angle is half the hypotenuse, or $\dfrac{l}{2}$, and the other leg, which is the altitude of the equilateral triangle, is $h = \sqrt{l^2 - \dfrac{l^2}{4}} = \dfrac{l\sqrt{3}}{2}$.

Thus a square with side length $5$ has diagonal $5\sqrt{2} \approx 7.07$, and an equilateral triangle with side length $8$ has altitude $4\sqrt{3} \approx 6.93$. This also gives the area of the equilateral triangle, $\dfrac{l \cdot h}{2} = \dfrac{l^2\sqrt{3}}{4}$.

::grafico{assi=0 uguale=1 poligoni="0,0 3,3 0,3" linee="0,0 3,0 3,3 0,3 0,0;0,0 3,3;0.42,0.42 0.35,0.49 0.27,0.53 0.19,0.57 0.09,0.59 0,0.6;2.4,3 2.41,2.91 2.43,2.81 2.47,2.73 2.51,2.65 2.58,2.58" etichette="1.35,-0.4,l;3.15,1.4,l;1.65,1.25,d;0.12,0.75,45°;1.75,2.6,45°" xmin=-0.6 xmax=3.8 ymin=-0.7 ymax=3.4 titolo="The diagonal divides the square of side length $l$ into two isosceles right triangles with acute angles of $45^\circ$. By the Pythagorean theorem, $d = l\sqrt{2}$"}

::grafico{assi=0 uguale=1 poligoni="0,0 2,0 2,3.46" linee="0,0 4,0 2,3.46 0,0;2,0.3 1.7,0.3 1.7,0;0.6,0 0.59,0.09 0.57,0.18 0.54,0.26 0.5,0.34 0.44,0.41 0.37,0.47 0.3,0.52;1.65,2.86 1.73,2.82 1.82,2.79 1.91,2.77 2,2.76" segmenti="2,0,2,3.46" etichette="0.7,0.15,60°;1.65,2.55,30°;2.15,1.6,h;0.55,1.95,l;3.15,1.95,l" xmin=-0.6 xmax=4.6 ymin=-0.7 ymax=3.9 titolo="The altitude divides the equilateral triangle with side length $l$ into two right triangles with angles of $30^\circ$ and $60^\circ$. The shorter leg is $\dfrac{l}{2}$ and the altitude is $h = \dfrac{l\sqrt{3}}{2}$"}

:::

## Quadrilaterals, perimeters, and areas

:::definizione{#quadrilateri titolo="Quadrilaterals"}
A **quadrilateral** is a polygon with four sides. Its interior angles add up to $360^\circ$. The following quadrilaterals appear in exam questions:

- A **trapezoid** has a pair of parallel sides called bases.
- A **parallelogram** has opposite sides that are parallel and equal in length. Its diagonals bisect each other.
- A **rectangle** is a parallelogram with four right angles.
- A **rhombus** is a parallelogram with four equal sides. Its diagonals are perpendicular.
- A **square** is a rectangle with four equal sides, so it is also a rhombus.

The properties of diagonals let us construct right triangles. In a rhombus with diagonals $16$ and $12$, the half-diagonals $8$ and $6$ are the legs of a right triangle whose hypotenuse is a side of the rhombus. The side length is therefore $10$.
:::

:::teorema{#aree-poligoni titolo="Perimeters and areas of polygons"}
The **perimeter** of a polygon is the sum of its side lengths. Its **area** measures the region it encloses. Let $b$ be a base, $h$ the height relative to that base, $l$ a side length, $D$ and $d$ the diagonal lengths, and $B$ and $b$ the bases of a trapezoid. Then
$$
\begin{aligned}
\text{rectangle: } & A = b \cdot h, \qquad 2p = 2\,(b + h) \\[6pt]
\text{square: } & A = l^2, \qquad 2p = 4\,l \\[6pt]
\text{parallelogram: } & A = b \cdot h \\[6pt]
\text{triangle: } & A = \frac{b \cdot h}{2} \\[6pt]
\text{rhombus: } & A = \frac{D \cdot d}{2} \\[6pt]
\text{trapezoid: } & A = \frac{(B + b) \cdot h}{2}
\end{aligned}
$$
The symbol $2p$ denotes the perimeter, and $p$ the semiperimeter. All the formulas follow from the formula for a rectangle. A triangle has half the area of a parallelogram with the same base and height, and a rhombus has half the area of the rectangle whose sides have the lengths of its diagonals. A trapezoid with bases $10$ and $6$ and height $4$ has area $\dfrac{16 \cdot 4}{2} = 32$.

::grafico{assi=0 uguale=1 poligoni="0,0 6,0 4.5,2.5 1,2.5;8.1,1.25 9.5,3.25 10.9,1.25 9.5,-0.75" segmenti="1,2.5,1,0;8.1,1.25,10.9,1.25;9.5,3.25,9.5,-0.75" linee="1.25,0 1.25,0.25 1,0.25" etichette="2.8,-0.45,B;2.6,2.7,b;1.15,1.1,h;10.2,1.45,d;9.65,2.2,D" xmin=-0.5 xmax=11.5 ymin=-1.1 ymax=3.6 titolo="On the left, a trapezoid with bases $B$ and $b$ and height $h$ has area $\dfrac{(B + b) \cdot h}{2}$. On the right, a rhombus with diagonals $D$ and $d$ has area $\dfrac{D \cdot d}{2}$"}

:::

:::osservazione{#unita-di-superficie titolo="Units of area"}
Area is measured in square units. Moving down to the next smaller metric unit of length multiplies the numerical measure of area by $100$. Since $1\ \text{m} = 100\ \text{cm}$, we have
$$
1\ \text{m}^2 = 100\ \text{cm} \cdot 100\ \text{cm} = 10\,000\ \text{cm}^2 .
$$
Similarly, $1\ \text{km}^2 = 1\,000\,000\ \text{m}^2$ and $1\ \text{m}^3 = 1\,000\,000\ \text{cm}^3$. An area of $3.5\ \text{m}^2$ is therefore $35\,000\ \text{cm}^2$. See the topic on units of measurement for other conversions.
:::

:::attenzione
Perimeter and area do *not* vary together. A $9 \times 1$ rectangle and a $5 \times 5$ square have the same perimeter, $20$, but their areas are $9$ and $25$. Two figures with the same perimeter can therefore have very different areas, and vice versa.
:::

## Circles and disks

:::teorema{#circonferenza-e-cerchio titolo="Circumference and area"}
The **circle** with center $O$ and radius $r$ is the set of points in the plane at distance $r$ from $O$. The **disk** is the region enclosed by that circle. The diameter is $d = 2r$. Let $\pi \approx 3.14$ denote the ratio of circumference to diameter, which is the same for every circle. Then
$$
C = 2\pi r = \pi d,
\qquad
A = \pi r^2 .
$$
With $\pi \approx 3.14$, a circle of radius $5$ cm has circumference $10\pi \approx 31.4$ cm and area $25\pi \approx 78.5\ \text{cm}^2$. Given the circumference, divide by $2\pi$ to find the radius and then calculate the area. With $C = 12\pi$, this gives $r = 6$ and $A = 36\pi$. The area formula requires the radius, so halve a given diameter before squaring it.
:::

:::teorema{#arco-e-settore titolo="Arcs and sectors"}
A **central angle** $\alpha$, whose vertex is at the center, determines an **arc** on the circle and a **sector** of the disk. The arc and the sector each make up the fraction $\dfrac{\alpha}{360^\circ}$ of the full circumference and area, respectively:
$$
\ell = \frac{\alpha}{360^\circ} \cdot 2\pi r,
\qquad
A_{\text{sector}} = \frac{\alpha}{360^\circ} \cdot \pi r^2 .
$$
Both formulas express proportions. The arc length is to the circumference as $\alpha$ is to $360^\circ$. With $r = 6$ and $\alpha = 60^\circ$, the fraction is $\dfrac{1}{6}$, so the arc length is $2\pi$ and the sector has area $6\pi$.

::grafico{assi=0 uguale=1 poligoni="0,0 3,0 2.99,0.26 2.95,0.52 2.9,0.78 2.82,1.03 2.72,1.27 2.6,1.5 2.46,1.72 2.3,1.93 2.12,2.12 1.93,2.3 1.72,2.46 1.5,2.6" linee="3,0 2.99,0.26 2.95,0.52 2.9,0.78 2.82,1.03 2.72,1.27 2.6,1.5 2.46,1.72 2.3,1.93 2.12,2.12 1.93,2.3 1.72,2.46 1.5,2.6 1.27,2.72 1.03,2.82 0.78,2.9 0.52,2.95 0.26,2.99 0,3 -0.26,2.99 -0.52,2.95 -0.78,2.9 -1.03,2.82 -1.27,2.72 -1.5,2.6 -1.72,2.46 -1.93,2.3 -2.12,2.12 -2.3,1.93 -2.46,1.72 -2.6,1.5 -2.72,1.27 -2.82,1.03 -2.9,0.78 -2.95,0.52 -2.99,0.26 -3,0 -2.99,-0.26 -2.95,-0.52 -2.9,-0.78 -2.82,-1.03 -2.72,-1.27 -2.6,-1.5 -2.46,-1.72 -2.3,-1.93 -2.12,-2.12 -1.93,-2.3 -1.72,-2.46 -1.5,-2.6 -1.27,-2.72 -1.03,-2.82 -0.78,-2.9 -0.52,-2.95 -0.26,-2.99 0,-3 0.26,-2.99 0.52,-2.95 0.78,-2.9 1.03,-2.82 1.27,-2.72 1.5,-2.6 1.72,-2.46 1.93,-2.3 2.12,-2.12 2.3,-1.93 2.46,-1.72 2.6,-1.5 2.72,-1.27 2.82,-1.03 2.9,-0.78 2.95,-0.52 2.99,-0.26 3,0;0,0 3,0;0,0 1.5,2.6;0.6,0 0.59,0.09 0.57,0.18 0.54,0.26 0.5,0.34 0.44,0.41 0.37,0.47 0.3,0.52" punti="0,0,pieno,O" etichette="1.3,-0.35,r;0.65,0.25,α;2.85,2.0,arc" xmin=-3.4 xmax=3.6 ymin=-3.4 ymax=3.4 titolo="The central angle $\alpha$ determines an arc and a sector. When $\alpha = 60^\circ$, their length and area are $\dfrac{60}{360} = \dfrac{1}{6}$ of the full circumference and disk area, respectively"}

:::

## Similarity

:::definizione{#similitudine titolo="Similar figures and scale factors"}
Two figures are **similar** if one is an enlargement or a reduction of the other. Corresponding angles are equal, and corresponding sides are proportional. The constant ratio $k$ of corresponding side lengths is called the **scale factor**. Perimeters, heights, and all other corresponding lengths also have ratio $k$. Two triangles with two equal pairs of corresponding angles are similar. Their third angles are equal as well because the angles in each triangle add up to $180^\circ$. If one triangle has sides $3$, $4$, and $5$, and the shortest side of a similar triangle is $6$, then $k = 2$ and its other sides are $8$ and $10$. A map scale is a scale factor, as discussed in the topic on proportions.
:::

:::teorema{#rapporto-aree-volumi titolo="Area and volume ratios for similar figures"}
If two figures are similar with scale factor $k$, the ratio of their areas is $k^2$ and, for solids, the ratio of their volumes is $k^3$. An area is a product of two lengths, each multiplied by $k$, while a volume is a product of three lengths. Doubling the side of a square multiplies its area by $4$. Doubling the edge of a cube multiplies its volume by $8$. Increasing every dimension by $10\%$ multiplies the area by $1.1^2 = 1.21$, an increase of $21\%$.

::grafico{assi=0 uguale=1 poligoni="0,0 3,0 0,2;5,0 11,0 5,4" linee="0.3,0 0.3,0.3 0,0.3;5.3,0 5.3,0.3 5,0.3" etichette="1.4,-0.45,3;-0.4,0.9,2;7.9,-0.45,6;4.6,1.9,4" xmin=-0.8 xmax=11.6 ymin=-0.9 ymax=4.4 titolo="Two similar triangles with scale factor $k = 2$. Their sides double, and their areas increase from $3$ to $12$, a factor of $k^2 = 4$"}

:::

:::osservazione{#cambio-di-una-dimensione titolo="Changing just one dimension"}
Changing just one dimension generally does not preserve similarity. How the area or volume changes depends on how that dimension enters the formula. If the area or volume is proportional to a power of the dimension, raise its scale factor to that same power. In a rectangle, doubling the base while keeping the height fixed doubles the area. The radius is squared in the volume formulas for a cylinder and a cone, so doubling the radius while keeping the height fixed multiplies the volume by $4$. Doubling the height while keeping the radius fixed doubles the volume.
:::

## Surface areas and volumes of solids

:::teorema{#prismi titolo="Cubes, rectangular prisms, and other prisms"}
A **right prism** has two congruent, parallel polygonal bases and rectangular lateral faces. Its lateral surface area is the perimeter of the base times the height. Adding the areas of the two bases gives its total surface area. Its volume is the base area times the height:
$$
S_{\text{lat}} = 2p \cdot h,
\qquad
S_{\text{tot}} = S_{\text{lat}} + 2\,A_{\text{base}},
\qquad
V = A_{\text{base}} \cdot h .
$$
A **rectangular prism** with dimensions $a$, $b$, and $c$ is a prism with a rectangular base, so its volume is $V = a \cdot b \cdot c$ and its total surface area is $2\,(ab + bc + ac)$. A **cube** with edge length $l$ has six square faces, so $S_{\text{tot}} = 6\,l^2$ and $V = l^3$. A rectangular prism with dimensions $5 \times 4 \times 3$ has volume $60$ and total surface area $2\,(20 + 12 + 15) = 94$.
:::

:::teorema{#diagonale-parallelepipedo titolo="Diagonals of rectangular prisms and cubes"}
The space diagonal of a rectangular prism with dimensions $a$, $b$, and $c$ has length
$$
d = \sqrt{a^2 + b^2 + c^2} .
$$
The formula follows by applying the Pythagorean theorem twice. The diagonal of the base is $e = \sqrt{a^2 + b^2}$. The space diagonal is the hypotenuse of a right triangle with legs $e$ and $c$, so $d = \sqrt{e^2 + c^2} = \sqrt{a^2 + b^2 + c^2}$. For a cube with edge length $l$, this gives $d = l\sqrt{3}$. A rectangular prism with dimensions $12 \times 4 \times 3$ has space diagonal $\sqrt{144 + 16 + 9} = \sqrt{169} = 13$.

::grafico{assi=0 uguale=1 poligoni="0,0 5.2,0.9 5.2,2.9" linee="0,0 4,0 4,2 0,2 0,0;0,2 1.2,2.9 5.2,2.9 4,2;4,0 5.2,0.9 5.2,2.9;0,0 5.2,2.9" segmenti="0,0,1.2,0.9;1.2,0.9,5.2,0.9;1.2,0.9,1.2,2.9;0,0,5.2,0.9" etichette="1.9,-0.4,a;4.75,0.25,b;5.35,1.8,c;2.3,1.55,d;2.9,0.2,e" xmin=-0.5 xmax=6 ymin=-0.7 ymax=3.3 titolo="In the rectangular prism with dimensions $a$, $b$, and $c$, the diagonal $e$ of the base has length $\sqrt{a^2 + b^2}$. The shaded triangle is a right triangle, so the space diagonal is $d = \sqrt{e^2 + c^2} = \sqrt{a^2 + b^2 + c^2}$"}

:::

:::teorema{#piramide titolo="Pyramids"}
A **pyramid** has a polygonal base and triangular lateral faces that share a common vertex $V$. Its volume is one third of the volume of a prism with the same base and height:
$$
V = \frac{A_{\text{base}} \cdot h}{3} .
$$
In a regular pyramid the lateral surface area is $\dfrac{2p \cdot a}{2}$, where $a$ is the **slant height**, the altitude of a lateral face. In a regular square pyramid, the slant height can be found from the height of the pyramid and half the side length of the base using the Pythagorean theorem. With base side length $6$ and height $4$, we obtain $a = \sqrt{16 + 9} = 5$, lateral surface area $\dfrac{24 \cdot 5}{2} = 60$, and volume $\dfrac{36 \cdot 4}{3} = 48$.

::grafico{assi=0 uguale=1 poligoni="2.6,3.65 2.6,0.45 2,0" linee="0,0 4,0 5.2,0.9;2.6,3.65 0,0;2.6,3.65 4,0;2.6,3.65 5.2,0.9;2.6,3.65 2,0" segmenti="0,0,1.2,0.9;1.2,0.9,5.2,0.9;1.2,0.9,2.6,3.65;2.6,0.45,2.6,3.65;2.6,0.45,2,0" etichette="2.7,1.9,h;1.55,1.5,a;2.2,-0.4,l;2.7,3.8,V" xmin=-0.5 xmax=5.6 ymin=-0.7 ymax=4.3 titolo="A regular square pyramid has base side length $l$. Its height $h$, the distance $\dfrac{l}{2}$ from the center of the base to a side, and the slant height $a$ form a right triangle, so $a = \sqrt{h^2 + \left(\dfrac{l}{2}\right)^2}$"}

:::

:::teorema{#solidi-rotondi titolo="Cylinders, cones, and spheres"}
The following formulas apply to a cylinder and a cone with base radius $r$ and height $h$, and to a sphere of radius $r$:
$$
\begin{aligned}
\text{cylinder: } & S_{\text{lat}} = 2\pi r h, \qquad V = \pi r^2 h \\[6pt]
\text{cone: } & S_{\text{lat}} = \pi r a, \qquad V = \frac{\pi r^2 h}{3} \\[6pt]
\text{sphere: } & S = 4\pi r^2, \qquad V = \frac{4}{3}\pi r^3
\end{aligned}
$$
For the cone, $a = \sqrt{r^2 + h^2}$ is the slant height, the hypotenuse of a right triangle with legs $r$ and $h$. As with a prism, the volume of a cylinder is the area of its circular base times its height. A cone relates to a cylinder as a pyramid does to a prism. A cone with $r = 3$ and $h = 4$ has slant height $5$, lateral surface area $15\pi$, and volume $12\pi$. A sphere with radius $3$ has surface area $36\pi$ and volume $36\pi$.

::grafico{assi=0 uguale=1 linee="2,4 1.97,4.09 1.88,4.17 1.73,4.25 1.53,4.32 1.29,4.38 1,4.43 0.68,4.47 0.35,4.49 0,4.5 -0.35,4.49 -0.68,4.47 -1,4.43 -1.29,4.38 -1.53,4.32 -1.73,4.25 -1.88,4.17 -1.97,4.09 -2,4 -1.97,3.91 -1.88,3.83 -1.73,3.75 -1.53,3.68 -1.29,3.62 -1,3.57 -0.68,3.53 -0.35,3.51 0,3.5 0.35,3.51 0.68,3.53 1,3.57 1.29,3.62 1.53,3.68 1.73,3.75 1.88,3.83 1.97,3.91 2,4;-2,0 -1.97,-0.09 -1.88,-0.17 -1.73,-0.25 -1.53,-0.32 -1.29,-0.38 -1,-0.43 -0.68,-0.47 -0.35,-0.49 0,-0.5 0.35,-0.49 0.68,-0.47 1,-0.43 1.29,-0.38 1.53,-0.32 1.73,-0.25 1.88,-0.17 1.97,-0.09 2,0;-2,0 -2,4;2,0 2,4;4,0 4.03,-0.09 4.12,-0.17 4.27,-0.25 4.47,-0.32 4.71,-0.38 5,-0.43 5.32,-0.47 5.65,-0.49 6,-0.5 6.35,-0.49 6.68,-0.47 7,-0.43 7.29,-0.38 7.53,-0.32 7.73,-0.25 7.88,-0.17 7.97,-0.09 8,0;4,0 6,4 8,0" segmenti="2,0,1.97,0.09;1.88,0.17,1.73,0.25;1.53,0.32,1.29,0.38;1,0.43,0.68,0.47;0.35,0.49,0,0.5;-0.35,0.49,-0.68,0.47;-1,0.43,-1.29,0.38;-1.53,0.32,-1.73,0.25;-1.88,0.17,-1.97,0.09;8,0,7.97,0.09;7.88,0.17,7.73,0.25;7.53,0.32,7.29,0.38;7,0.43,6.68,0.47;6.35,0.49,6,0.5;5.65,0.49,5.32,0.47;5,0.43,4.71,0.38;4.47,0.32,4.27,0.25;4.12,0.17,4.03,0.09;0,0,0,4;0,0,2,0;6,0,6,4;6,0,8,0" punti="0,0,pieno;6,0,pieno" etichette="0.8,0.15,r;-0.45,2,h;6.8,0.15,r;5.6,2,h;7.25,2.2,a" xmin=-2.6 xmax=8.6 ymin=-0.9 ymax=4.9 titolo="A cylinder and a cone with base radius $r$ and height $h$. In the cone, the slant height $a$ is the hypotenuse of the right triangle with legs $r$ and $h$"}

:::

:::osservazione{#volumi-e-litri titolo="Volume and capacity"}
For tanks and containers, convert volume to liters using $1\ \text{dm}^3 = 1$ liter, so $1\ \text{m}^3 = 1000$ liters. A rectangular tank with dimensions $3\ \text{m} \times 1.5\ \text{m} \times 0.8\ \text{m}$ has volume $3.6\ \text{m}^3$ and therefore holds $3600$ liters. See the topic on units of measurement for other conversions between volume and capacity.
:::

## The Cartesian plane

:::teorema{#distanza-e-punto-medio titolo="Distance between two points and midpoint"}
In the Cartesian plane, a pair of numbers $(x, y)$, the horizontal and vertical coordinates, specifies each point. The distance between $A(x_1, y_1)$ and $B(x_2, y_2)$ and the midpoint $M$ of segment $AB$ are given by
$$
\overline{AB} = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2},
\qquad
M = \left( \frac{x_1 + x_2}{2},\ \frac{y_1 + y_2}{2} \right) .
$$
The distance formula is the Pythagorean theorem applied to a right triangle whose legs are parallel to the axes and have lengths $|x_2 - x_1|$ and $|y_2 - y_1|$. The midpoint coordinates are the averages of the corresponding endpoint coordinates. For $A(1, 1)$ and $B(5, 4)$, we obtain $\overline{AB} = \sqrt{16 + 9} = 5$ and $M = (3;\ 2.5)$. The semicolon separates the coordinates because the second coordinate is written with a decimal comma in Italian notation.

::grafico{xmin=-1 xmax=6 ymin=-1 ymax=5 uguale=1 linee="1,1 5,4" punti="1,1,pieno,A;5,4,pieno,B" segmenti="1,1,5,1;5,1,5,4" etichette="2.9,0.55,4;5.15,2.4,3;2.6,2.55,5" titolo="The distance between $A(1, 1)$ and $B(5, 4)$ is the hypotenuse of a right triangle with legs $5 - 1 = 4$ and $4 - 1 = 3$, so $\overline{AB} = 5$"}

:::

:::definizione{#retta titolo="The line y = mx + q"}
Every nonvertical line has an equation of the form $y = mx + q$. The number $q$ is the **y-intercept**, the vertical coordinate of the point where the line crosses the $y$-axis, because setting $x = 0$ gives $y = q$. The number $m$ is the **slope**, the change in $y$ when $x$ increases by $1$. If the line passes through $(x_1, y_1)$ and $(x_2, y_2)$, then
$$
m = \frac{y_2 - y_1}{x_2 - x_1} .
$$
The line rises if $m > 0$, falls if $m < 0$, and is horizontal if $m = 0$. The line $y = 2x - 1$ crosses the $y$-axis at $(0, -1)$ and the $x$-axis where $2x - 1 = 0$, that is, at $\left( \dfrac{1}{2}, 0 \right)$. In exam questions a line can describe a quantity that increases at a constant rate from a fixed starting amount, such as the cost of a service with a fixed charge $q$ and a rate of $m$ per unit.

::grafico{f="2*x-1" xmin=-2 xmax=4 ymin=-2 ymax=6 uguale=1 legenda="y = 2x - 1" punti="0,-1,pieno,q;0.5,0,pieno" segmenti="1,1,2,1;2,1,2,3" etichette="1.4,0.6,1;2.15,1.9,2" titolo="The line $y = 2x - 1$ crosses the $y$-axis at vertical coordinate $q = -1$. Moving $1$ unit to the right produces a rise of $2$, so the slope is $m = 2$"}

:::

## Quick methods for exam questions

:::osservazione{#metodi-rapidi titolo="Checks and shortcuts for geometry questions"}
A few observations can help solve many geometry questions in seconds.

- **Recognize Pythagorean triples** and triangles with angles of $30^\circ$, $45^\circ$, and $60^\circ$. With hypotenuse $26$ and one leg $10$, the other leg is $24$ because $(10, 24, 26)$ is twice $(5, 12, 13)$.
- **Check the dimensions**. Perimeter is a length, area is a product of two lengths, and volume is a product of three. An answer in $\text{cm}^2$ can be ruled out immediately for a volume.
- **Use the scale factors** $k$, $k^2$, and $k^3$ to avoid recalculating. If the radius of a sphere triples, its volume is multiplied by $27$.
- **Estimate** the result using $\pi \approx 3$. A circle of radius $10$ has an area just over $300$, so among $31.4$, $314$, and $3140$ the answer is $314$.
- **Check the order of magnitude**. The hypotenuse is the longest side but is shorter than the sum of the legs. Likewise, the space diagonal of a rectangular prism is shorter than the sum of its three dimensions.

Wrong choices usually come from using the diameter in place of the radius, omitting division by $2$ or $3$ in the area of a triangle or the volume of a cone or pyramid, or using a factor of $10$ or $100$ when converting units of area.
:::
