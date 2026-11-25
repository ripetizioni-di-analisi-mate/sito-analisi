---
titolo: Plane figures, perimeters, areas, and the Pythagorean theorem
sommario: Points, lines, and angles, triangles and quadrilaterals, perimeter and area formulas and why they work, the Pythagorean theorem, circles and disks, units of measurement, and volumes of common solids.
---

## Points, lines, and angles

:::definizione{#elementi-geometria titolo="Point, line, ray, and segment"}
The **point** and the **line** are the basic objects of geometry. A point marks a position and is denoted by an uppercase letter, such as $A$. A line is straight and extends without end in both directions. It is denoted by a lowercase letter, such as $r$. Exactly one line passes through two distinct points.

- A point $O$ divides a line into two parts. Each part, together with $O$, is called a ray with endpoint $O$. In simple terms, a ray is a straight line that begins at a point and extends forever in one direction.
- The part of a line between two points $A$ and $B$ is called segment $AB$, and $A$ and $B$ are its endpoints. A segment has a length, which can be measured with a ruler.

For example, the long edge of a sheet of A4 paper is a segment $29.7$ cm long. The sides of plane figures are segments, and their lengths are used to calculate perimeters and areas.
:::

:::definizione{#angolo titolo="Angles and degree measure"}
Two rays with the same endpoint divide the plane into two regions, each of which is called an **angle**. The two rays are the sides of the angle, and their common endpoint is the **vertex**. In simple terms, an angle tells us how far to rotate one ray about the vertex to bring it onto the other.

Angles are measured in degrees with a protractor. A complete turn about the vertex is called a full angle and measures $360^\circ$, so one degree is one three-hundred-sixtieth of a turn. Angles are often denoted by Greek letters, such as $\alpha$ (alpha), $\beta$ (beta), and $\gamma$ (gamma). For example, the minute hand of a clock makes one full turn in $60$ minutes, so in one minute it rotates through $\dfrac{360^\circ}{60} = 6^\circ$.
:::

:::definizione{#tipi-di-angoli titolo="Right, straight, acute, and obtuse angles"}
Angles are classified by their measure.

- A **straight** angle measures $180^\circ$, or half a turn, and its sides form a line.
- A **right** angle measures $90^\circ$, half a straight angle. A small square marks a right angle in a diagram.
- An angle is acute if it measures less than $90^\circ$, and obtuse if it measures more than $90^\circ$ and less than $180^\circ$.

For example, an angle of $35^\circ$ is acute and an angle of $120^\circ$ is obtuse. At $3$ o'clock, the hands of a clock form a right angle.
:::

:::definizione{#angoli-complementari-supplementari titolo="Complementary and supplementary angles"}
Two angles are **complementary** if their measures add up to a right angle, or $90^\circ$. Two angles are **supplementary** if their measures add up to a straight angle, or $180^\circ$. The complement of an angle $\alpha$ therefore measures $90^\circ - \alpha$, and its supplement measures $180^\circ - \alpha$.

These definitions allow us to calculate one angle when the other is known. For example, the complement of $30^\circ$ is $90^\circ - 30^\circ = 60^\circ$, and the supplement of $30^\circ$ is $180^\circ - 30^\circ = 150^\circ$.
:::

::::teorema{#angoli-opposti-al-vertice titolo="Vertical angles"}
Two intersecting lines form four angles. Two of these are called **vertical angles** when the sides of one are extensions of the sides of the other. Vertical angles are equal.

For example, if one of the four angles measures $50^\circ$, its opposite angle also measures $50^\circ$. The other two angles each measure $180^\circ - 50^\circ = 130^\circ$ because each forms a straight angle with the $50^\circ$ angle.

::grafico{assi=0 uguale=1 linee="-3,0 3,0;-1.93,-2.30 1.93,2.30;0.60,0.00 0.60,0.07 0.59,0.13 0.57,0.19 0.54,0.25 0.51,0.31 0.48,0.37 0.43,0.41 0.39,0.46;-0.60,0.00 -0.60,-0.07 -0.59,-0.13 -0.57,-0.19 -0.54,-0.25 -0.51,-0.31 -0.48,-0.37 -0.43,-0.41 -0.39,-0.46;0.55,0.65 0.47,0.71 0.39,0.75 0.31,0.79 0.22,0.82 0.13,0.84 0.04,0.85 -0.05,0.85 -0.14,0.84 -0.23,0.82 -0.32,0.79 -0.40,0.75 -0.48,0.70 -0.55,0.65 -0.62,0.58 -0.68,0.51 -0.73,0.44 -0.77,0.36 -0.81,0.27 -0.83,0.18 -0.85,0.09 -0.85,0.00;-0.55,-0.65 -0.47,-0.71 -0.39,-0.75 -0.31,-0.79 -0.22,-0.82 -0.13,-0.84 -0.04,-0.85 0.05,-0.85 0.14,-0.84 0.23,-0.82 0.32,-0.79 0.40,-0.75 0.48,-0.70 0.55,-0.65 0.62,-0.58 0.68,-0.51 0.73,-0.44 0.77,-0.36 0.81,-0.27 0.83,-0.18 0.85,-0.09 0.85,-0.00" punti="0,0,pieno" etichette="0.85,0.3,α;-0.75,1.05,β;-1.2,-0.6,α′;0.45,-1.3,β′" xmin=-3.2 xmax=3.2 ymin=-2.5 ymax=2.5 titolo="Two intersecting lines form two pairs of vertical angles. For $\alpha = 50^\circ$, we have $\alpha' = 50^\circ$ and $\beta = \beta' = 130^\circ$"}

:::dimostrazione
In the figure, angles $\alpha$ and $\beta$ share a side, and their other sides form a line. Together they therefore form a straight angle, so $\beta = 180^\circ - \alpha$. Similarly, $\beta$ and $\alpha'$ form a straight angle, so $\alpha' = 180^\circ - \beta$. Substituting $\beta = 180^\circ - \alpha$ gives
$$
\alpha' = 180^\circ - (180^\circ - \alpha) = \alpha .
$$
With the numbers in the example, $\beta = 180^\circ - 50^\circ = 130^\circ$, and therefore $\alpha' = 180^\circ - 130^\circ = 50^\circ$.
:::
::::

:::definizione{#rette-parallele-perpendicolari titolo="Parallel and perpendicular lines"}
Two lines in a plane are called **parallel** if they have no points in common, like the two rails of a railroad track, or if they coincide. Two lines are called **perpendicular** if they intersect to form four right angles. We write $r \parallel s$ for two parallel lines and $r \perp s$ for two perpendicular lines.

Parallel and perpendicular lines help describe figures. For example, the opposite sides of a rectangle lie on parallel lines, and adjacent sides lie on perpendicular lines.
:::

:::teorema{#angoli-alterni-interni titolo="Alternate interior angles"}
Two parallel lines $r$ and $s$ crossed by a third line $t$, called a **transversal**, form eight angles. Two angles are called alternate interior angles if they lie between the parallel lines and on opposite sides of the transversal. Alternate interior angles are equal.

We accept this property without proof and use it to find the sum of the angles of a triangle. For example, if the transversal meets $r$ at an angle of $55^\circ$, the alternate interior angle it forms with $s$ also measures $55^\circ$.
:::

## Polygons and triangles

:::definizione{#poligono-perimetro titolo="Polygons and perimeter"}
A **polygon** is a plane figure bounded by consecutive line segments that do not cross. The last segment ends where the first begins. The segments are the sides of the polygon, and their endpoints are the vertices. A polygon with three sides is a triangle, one with four sides is a quadrilateral, one with five is a pentagon, and one with six is a hexagon.

The **perimeter** of a polygon is the sum of its side lengths and is denoted by $2p$. In simple terms, the perimeter is the length of the boundary of the figure. It can be used, for example, to calculate how much fencing is needed to enclose a plot of land. A triangle with sides $a = 5$ cm, $b = 7$ cm, and $c = 9$ cm has perimeter
$$
2p = 5 + 7 + 9 = 21\ \text{cm} .
$$
Half the perimeter is called the semiperimeter and is denoted by $p$. In this example, $p = 10.5$ cm.
:::

::::teorema{#somma-angoli-triangolo titolo="Sum of the interior angles of a triangle"}
In every triangle, the three interior angles add up to $180^\circ$. If two angles are known, the third is obtained by subtracting their sum from $180^\circ$. For example, in a triangle with angles of $50^\circ$ and $60^\circ$, the third angle measures
$$
180^\circ - (50^\circ + 60^\circ) = 180^\circ - 110^\circ = 70^\circ .
$$

::grafico{assi=0 uguale=1 poligoni="0,0 6,0 2,3.5" linee="0.60,0.00 0.60,0.06 0.59,0.13 0.57,0.19 0.55,0.25 0.52,0.30 0.48,0.35 0.44,0.40 0.40,0.45 0.35,0.49 0.30,0.52;5.55,0.40 5.50,0.34 5.47,0.28 5.44,0.21 5.42,0.14 5.40,0.07 5.40,0.00;1.50,3.50 1.50,3.45 1.51,3.40 1.52,3.34 1.54,3.30 1.57,3.25 1.60,3.21 1.63,3.16 1.67,3.13 1.71,3.09 1.75,3.07;1.63,2.85 1.70,2.81 1.77,2.79 1.85,2.77 1.93,2.75 2.01,2.75 2.09,2.75 2.16,2.77 2.24,2.79 2.31,2.82 2.38,2.86 2.45,2.90 2.51,2.95 2.56,3.01;2.38,3.17 2.41,3.22 2.44,3.27 2.47,3.32 2.49,3.38 2.50,3.44 2.50,3.50" segmenti="-1.2,3.5,6.5,3.5" etichette="0.75,0.12,α;5.15,0.12,β;1.1,3.05,α;2.55,3.1,β;1.9,2.4,γ;-0.45,-0.45,A;6.1,-0.45,B;1.9,3.75,C" xmin=-1.5 xmax=7 ymin=-0.8 ymax=4.1 titolo="The dashed line through $C$ is parallel to $AB$. The angles it makes with $CA$ and $CB$ form pairs of alternate interior angles with $\alpha$ and $\beta$, respectively, so at $C$ we have $\alpha + \gamma + \beta = 180^\circ$"}

:::dimostrazione
Let $ABC$ be a triangle with angles $\alpha$ at $A$, $\beta$ at $B$, and $\gamma$ at $C$. Through vertex $C$, draw the line parallel to side $AB$. Side $AC$ is a transversal of these parallel lines, so the angle the new line makes with $CA$ and angle $\alpha$ are alternate interior angles. It therefore equals $\alpha$. Similarly, the angle the new line makes with $CB$ forms a pair of alternate interior angles with $\beta$ and therefore equals $\beta$. At $C$ the three angles $\alpha$, $\gamma$, and $\beta$ lie next to each other and together form a straight angle. It follows that $\alpha + \beta + \gamma = 180^\circ$.
:::
::::

:::definizione{#classificazione-triangoli titolo="Classifying triangles"}
Triangles are classified in two ways.

- By its sides, a triangle is **equilateral** if all three sides are equal, **isosceles** if at least two sides are equal, and **scalene** if all three side lengths are different.
- By its angles, a triangle is **acute** if all three angles are acute, **right** if it has a right angle, and **obtuse** if it has an obtuse angle.

For example, a triangle with angles of $30^\circ$, $60^\circ$, and $90^\circ$ is a right triangle, and one with angles of $20^\circ$, $40^\circ$, and $120^\circ$ is obtuse. A triangle has at most one right or obtuse angle, because two angles of at least $90^\circ$ would already add up to at least $180^\circ$, leaving $0^\circ$ or less for the third angle.
:::

:::definizione{#triangoli-isosceli-rettangoli titolo="Sides and angles of isosceles and right triangles"}
In an isosceles triangle, the side whose length differs from the other two is called the **base**, and the two equal sides are called the legs. The two angles adjacent to the base, called the base angles, are equal. In an equilateral triangle all three angles are also equal, so each measures $\dfrac{180^\circ}{3} = 60^\circ$. For example, in an isosceles triangle whose angle opposite the base is $40^\circ$, the two base angles add up to $180^\circ - 40^\circ = 140^\circ$, and each measures $\dfrac{140^\circ}{2} = 70^\circ$.

In a right triangle, the two sides that form the right angle are called the **legs**, and the side opposite the right angle is called the **hypotenuse**. The two acute angles add up to $180^\circ - 90^\circ = 90^\circ$, so they are complementary. For example, if one acute angle measures $30^\circ$, the other measures $90^\circ - 30^\circ = 60^\circ$.
:::

:::definizione{#altezza-triangolo titolo="Altitude of a triangle"}
The **altitude** of a triangle to a given side is the segment from the opposite vertex to the line containing that side, meeting it at a right angle. In simple terms, if the triangle rests on that side as its base, the altitude measures how high the triangle is. Every triangle has three altitudes, one for each side.

In a right triangle, the altitude to one leg is the other leg. In an isosceles triangle, the altitude to the base meets the midpoint of the base and divides the triangle into two congruent right triangles. The altitude is used to calculate the area of the triangle.
:::

## Quadrilaterals

:::definizione{#quadrilateri titolo="Quadrilaterals"}
A **quadrilateral** is a polygon with four sides. A segment joining two nonconsecutive vertices is called a **diagonal**, and every quadrilateral has two diagonals. The following are common quadrilaterals.

- A trapezoid has two parallel sides, called the longer base and the shorter base.
- A parallelogram has parallel opposite sides, and its opposite sides are also equal in length.
- A rectangle is a parallelogram with four right angles.
- A rhombus is a parallelogram with four equal sides. Its diagonals are perpendicular and bisect each other.
- A square has four equal sides and four right angles, so it is both a rectangle and a rhombus.

The distance between the two bases of a trapezoid, or between opposite sides of a parallelogram, is called its height.

::grafico{assi=0 uguale=1 poligoni="0,3.2 2,3.2 2,5.2 0,5.2;3,3.2 6.5,3.2 6.5,5.2 3,5.2;7.5,3.2 10.5,3.2 11.3,5.2 8.3,5.2;2,1 3.3,2 4.6,1 3.3,0;5.5,0 9.5,0 8.8,2 6.3,2" linee="0.25,3.2 0.25,3.45 0,3.45;3.25,3.2 3.25,3.45 3,3.45" segmenti="2,1,4.6,1;3.3,0,3.3,2" etichette="0.05,2.6,square;3.6,2.6,rectangle;7.7,2.6,parallelogram;2.75,-0.6,rhombus;6.6,-0.6,trapezoid" xmin=-0.4 xmax=11.8 ymin=-1.1 ymax=5.6 titolo="Common quadrilaterals. In the rhombus, the dashed lines are its perpendicular diagonals"}

:::

:::osservazione{#somma-angoli-quadrilatero titolo="Sum of the angles of a quadrilateral"}
A diagonal divides a quadrilateral into two triangles. Together, the angles of the two triangles make up the angles of the quadrilateral. The angles of each triangle add up to $180^\circ$, so the sum of the interior angles of a quadrilateral is $2 \cdot 180^\circ = 360^\circ$. For example, if three angles of a quadrilateral measure $80^\circ$, $95^\circ$, and $110^\circ$, their sum is $285^\circ$, and the fourth angle measures $360^\circ - 285^\circ = 75^\circ$.
:::

## Perimeters and areas

:::definizione{#area titolo="Area of a figure"}
The **area** of a plane figure measures the portion of the plane that the figure occupies and is denoted by $A$. It is measured by the number of unit squares needed to cover the figure. A square with side length $1$ cm has an area of one square centimeter, written as $1\ \text{cm}^2$, and a square with side length $1$ m has area $1\ \text{m}^2$.

In simple terms, the perimeter measures the boundary of a figure and the area measures the space enclosed by that boundary. For example, to determine how many tiles are needed to cover a floor, calculate its area. To determine how much baseboard is needed, calculate its perimeter.
:::

:::teorema{#area-rettangolo titolo="Perimeter and area of rectangles and squares"}
A rectangle with base $b$ and height $h$ has perimeter and area
$$
2p = 2 \cdot (b + h) , \qquad A = b \cdot h .
$$
A square of side $l$ is a rectangle whose base and height both equal $l$, so
$$
2p = 4 \cdot l , \qquad A = l \cdot l = l^2 .
$$
The area formula follows by counting squares. A rectangle with base $4$ cm and height $3$ cm can be divided into $3$ rows, each containing $4$ squares with side length $1$ cm. It therefore contains $3 \cdot 4 = 12$ squares and its area is $12\ \text{cm}^2$. Its perimeter is $2 \cdot (4 + 3) = 14$ cm because it has two sides of $4$ cm and two of $3$ cm. A square with side length $5$ cm has perimeter $4 \cdot 5 = 20$ cm and area $5^2 = 25\ \text{cm}^2$.

::grafico{assi=0 uguale=1 poligoni="0,0 4,0 4,3 0,3" segmenti="1,0,1,3;2,0,2,3;3,0,3,3;0,1,4,1;0,2,4,2" etichette="1.55,-0.5,4 cm;4.15,1.4,3 cm" xmin=-0.5 xmax=5.4 ymin=-0.9 ymax=3.4 titolo="A rectangle with base $4$ cm and height $3$ cm contains $3$ rows of $4$ squares with side length $1$ cm, so its area is $3 \cdot 4 = 12\ \text{cm}^2$"}

:::

::::teorema{#area-parallelogramma-triangolo titolo="Area of a parallelogram and a triangle"}
A parallelogram with base $b$ and height $h$ has area $A = b \cdot h$. A triangle with base $b$ and corresponding altitude $h$ has area
$$
A = \frac{b \cdot h}{2} .
$$
For example, a parallelogram with base $6$ cm and height $4$ cm has area $6 \cdot 4 = 24\ \text{cm}^2$, and a triangle with the same base and height has area $\dfrac{24}{2} = 12\ \text{cm}^2$. The area formula for the parallelogram uses the height. The slanted side is needed only for its perimeter.

::grafico{assi=0 uguale=1 poligoni="0,0 5,0 6.5,3 1.5,3;8.5,0 13.5,0 10,3" segmenti="1.5,0,1.5,3;5,0,6.5,0;6.5,0,6.5,3;13.5,0,15,3;15,3,10,3;10,0,10,3" linee="1.5,0.25 1.75,0.25 1.75,0;10,0.25 10.25,0.25 10.25,0" etichette="2.4,-0.5,b;0.95,1.4,h;10.15,1.4,h;10.9,-0.5,b" xmin=-0.6 xmax=15.6 ymin=-0.9 ymax=3.6 titolo="On the left, cutting along the altitude $h$ separates a triangle from the parallelogram. Moving it to the right side (dashed) produces a rectangle with base $b$ and height $h$. On the right, the triangle and a rotated copy (dashed) form a parallelogram with base $b$ and height $h$"}

:::dimostrazione
Cut the parallelogram along the altitude from one endpoint of its upper side to obtain a right triangle and a trapezoid. Move the triangle to the other end, against the opposite side. The resulting figure is a rectangle with the same base $b$ and the same height $h$. Cutting and moving the piece does not change the amount of surface covered, so the parallelogram has the same area as the rectangle, namely $b \cdot h$.

For the triangle, take a copy, rotate it through half a turn, and place it against the original triangle along one of the sides other than the base. This gives a parallelogram with base $b$ and height $h$, made up of two congruent triangles. The original triangle is therefore half of the parallelogram, so its area is $\dfrac{b \cdot h}{2}$.
:::
::::

:::teorema{#area-rombo-trapezio titolo="Area of a rhombus and a trapezoid"}
A rhombus with diagonals $D$ and $d$ and a trapezoid with longer base $B$, shorter base $b$, and height $h$ have areas
$$
A_{\text{rhombus}} = \frac{D \cdot d}{2} , \qquad A_{\text{trapezoid}} = \frac{(B + b) \cdot h}{2} .
$$
These formulas also follow from the area of a rectangle. A rhombus occupies half of the rectangle whose side lengths are the lengths of its diagonals, because the diagonals divide the rectangle into four smaller rectangles, each cut in half by a side of the rhombus. A trapezoid and a copy rotated through half a turn form a parallelogram with base $B + b$ and height $h$, so the area of the trapezoid is half of $(B + b) \cdot h$.

For example, a rhombus with diagonals of $8$ cm and $6$ cm has area $\dfrac{8 \cdot 6}{2} = 24\ \text{cm}^2$. A trapezoid with bases of $10$ cm and $6$ cm and a height of $4$ cm has area $\dfrac{(10 + 6) \cdot 4}{2} = \dfrac{64}{2} = 32\ \text{cm}^2$.

::grafico{assi=0 uguale=1 poligoni="0,1.5 2,3 4,1.5 2,0;5.5,0 9.5,0 8.5,3 6.5,3" linee="0,0 4,0 4,3 0,3 0,0" segmenti="0,1.5,4,1.5;2,0,2,3;9.5,0,11.5,0;11.5,0,12.5,3;12.5,3,8.5,3;6.5,0,6.5,3" etichette="2.9,1.7,D;2.15,2.4,d;7.3,-0.5,B;7.3,3.25,b;6.65,1.4,h;10.2,-0.5,b;10.2,3.25,B" xmin=-0.5 xmax=13 ymin=-0.9 ymax=3.7 titolo="On the left, the rhombus occupies half of the rectangle with sides $D$ and $d$. On the right, the trapezoid and a rotated copy (dashed) form a parallelogram with base $B + b$ and height $h$"}

:::

:::attenzione
Two figures with the same perimeter can have different areas. A rectangle with sides of $8$ cm and $2$ cm and a square with side length $5$ cm both have perimeter $20$ cm. The rectangle, however, has area $8 \cdot 2 = 16\ \text{cm}^2$, whereas the square has area $5 \cdot 5 = 25\ \text{cm}^2$. Thus, the perimeter alone does not determine a figure's area.
:::

## Pythagorean theorem

:::richiamo{titolo="Square root"}
For a number $a \geq 0$, the square root $\sqrt{a}$ is the nonnegative number whose square is $a$.
:::

::::teorema{#teorema-di-pitagora titolo="Pythagorean theorem"}
In a right triangle with legs $a$ and $b$ and hypotenuse $c$,
$$
a^2 + b^2 = c^2 .
$$
In words, the area of the square on the hypotenuse equals the sum of the areas of the squares on the two legs. When the legs are known, the theorem gives the length of the hypotenuse by taking a square root:
$$
c = \sqrt{a^2 + b^2} .
$$
For example, with legs of $a = 3$ cm and $b = 4$ cm, we have $c^2 = 9 + 16 = 25$, so $c = \sqrt{25} = 5$ cm.

::grafico{assi=0 uguale=1 poligoni="3,0 7,3 4,7 0,4;9,0 12,0 12,3 9,3;12,3 16,3 16,7 12,7" linee="0,0 7,0 7,7 0,7 0,0;3,0 7,3 4,7 0,4 3,0;9,0 16,0 16,7 9,7 9,0;12,0 12,7;9,3 16,3;12,0 16,3;9,7 12,3" etichette="1.3,-0.6,a;4.9,-0.6,b;7.25,1.3,a;7.25,4.9,b;1.25,1.45,c;2.85,3.6,c²;10.3,1.35,a²;13.7,4.85,b²;10.3,-0.6,a;13.9,-0.6,b" xmin=-0.6 xmax=16.8 ymin=-1.1 ymax=7.6 titolo="Two squares with side length $a + b$. On the left, four right triangles leave a square of area $c^2$ uncovered. On the right, the same triangles leave two squares of areas $a^2$ and $b^2$ uncovered. For $a = 3$ and $b = 4$, we have $9 + 16 = 25 = 5^2$"}

:::dimostrazione
Construct two congruent squares, each with side length $a + b$, and arrange four copies of the right triangle in each as shown in the figure.

- In the first square, the four triangles occupy the corners and leave a square with side length $c$ uncovered in the center. The uncovered region therefore has area $c^2$.
- In the second square, the four triangles are placed in pairs to form two rectangles with sides $a$ and $b$. The uncovered region consists of one square of side $a$ and one square of side $b$, so its area is $a^2 + b^2$.

The two large squares have the same area, and the four triangles cover the same amount of surface in each. The uncovered regions therefore also have equal areas, so $c^2 = a^2 + b^2$. For $a = 3$ and $b = 4$, the large squares have side length $7$ and area $49$. The area of the four triangles is $4 \cdot \dfrac{3 \cdot 4}{2} = 24$, so the uncovered area is $49 - 24 = 25$, which equals both $5^2$ and $9 + 16$.
:::
::::

:::esempio{titolo="Finding a leg"}
The equation $a^2 + b^2 = c^2$ gives the length of a leg when the hypotenuse and the other leg are known. Subtracting $b^2$ from both sides gives $a^2 = c^2 - b^2$, so
$$
a = \sqrt{c^2 - b^2} .
$$
For example, in a right triangle with hypotenuse $c = 13$ cm and one leg $b = 12$ cm, the other leg is
$$
a = \sqrt{13^2 - 12^2} = \sqrt{169 - 144} = \sqrt{25} = 5\ \text{cm} .
$$
:::

:::attenzione
In general, $\sqrt{a^2 + b^2}$ differs from $a + b$, so the hypotenuse length differs from the sum of the leg lengths. With legs of $6$ cm and $8$ cm, the sum of the leg lengths is $14$ cm, whereas the hypotenuse is $\sqrt{36 + 64} = \sqrt{100} = 10$ cm.
:::

:::definizione{#terne-pitagoriche titolo="Pythagorean triples"}
A **Pythagorean triple** is a group of three natural numbers $a$, $b$, and $c$ such that $a^2 + b^2 = c^2$. In simple terms, they are the side lengths of a right triangle whose three sides all have integer lengths. The most common triples are
$$
(3, 4, 5) , \qquad (5, 12, 13) , \qquad (8, 15, 17) .
$$
For example, $(5, 12, 13)$ is a Pythagorean triple because $5^2 + 12^2 = 25 + 144 = 169$ and $13^2 = 169$. Multiplying all three numbers in a triple by the same nonzero natural number gives another triple, because all three squares are multiplied by the same number. For example, multiplying by $2$ turns the triple $(3, 4, 5)$ into $(6, 8, 10)$, and indeed $36 + 64 = 100$. These triples allow us to recognize the hypotenuse or a leg without calculating a square root.
:::

:::osservazione{#diagonale-altezza titolo="Diagonal of a rectangle and altitude of an isosceles triangle"}
The Pythagorean theorem applies whenever a figure contains a right triangle.

- A diagonal divides a rectangle with base $b$ and height $h$ into two right triangles with legs $b$ and $h$. The diagonal therefore has length $d = \sqrt{b^2 + h^2}$. A rectangle with sides of $12$ cm and $5$ cm has a diagonal of $\sqrt{144 + 25} = \sqrt{169} = 13$ cm.
- The altitude to the base divides an isosceles triangle into two right triangles. In each, the hypotenuse is one of the equal sides, and the legs are the altitude and half the base. An isosceles triangle with a base of $10$ cm and equal sides of $13$ cm therefore has an altitude of $\sqrt{13^2 - 5^2} = \sqrt{169 - 25} = \sqrt{144} = 12$ cm and an area of $\dfrac{10 \cdot 12}{2} = 60\ \text{cm}^2$.
:::

## Circles and disks

:::definizione{#circonferenza-cerchio titolo="Circles and disks"}
Let $O$ be a point in the plane and $r$ a length. The **circle** with center $O$ and radius $r$ is the curve consisting of all points in the plane at distance $r$ from $O$. The **disk** is the region enclosed by the circle, including its boundary. In simple terms, the circle is the boundary and the disk is the filled-in figure. For example, the rim of a coin is a circle, and its face is a disk.

A segment joining two points on a circle and passing through its center is called a diameter. Its length is twice the radius, $d = 2r$, so a circle with radius $3$ cm has diameter $6$ cm.
:::

:::definizione{#pi-greco titolo="The number π and the circumference of a circle"}
If we measure the length of a circle, for example with a piece of string, and divide by its diameter, we always get the same number, regardless of the circle. This number is denoted by the Greek letter $\pi$ (pi) and is approximately $3.14$. Its decimal expansion goes on forever without repeating periodically, so $\pi$ is an irrational number, like $\sqrt{2}$ in the chapter on powers and roots.

The circumference $C$ of a circle is therefore $\pi$ times its diameter:
$$
C = \pi \cdot d = 2\pi r .
$$
For example, a circle with radius $5$ cm has circumference $2 \cdot \pi \cdot 5 = 10\pi$ cm, or about $10 \cdot 3.14 = 31.4$ cm. A bicycle wheel with diameter $70$ cm travels about $3.14 \cdot 70 = 219.8$ cm in one full turn.
:::

::::teorema{#area-cerchio titolo="Area of a disk"}
A disk with radius $r$ has area
$$
A = \pi \cdot r^2 .
$$
For example, a disk with radius $10$ cm has area $\pi \cdot 10^2 = 100\pi\ \text{cm}^2$, or approximately $314\ \text{cm}^2$. A disk with diameter $6$ cm has radius $3$ cm, so its area is $9\pi\ \text{cm}^2$, or approximately $28.26\ \text{cm}^2$.

::grafico{assi=0 uguale=1 poligoni="-3.60,0.95 -1.60,0.95 -1.61,1.15 -1.64,1.34 -1.69,1.53 -1.75,1.72 -1.84,1.89 -1.94,2.06 -2.05,2.22 -2.19,2.36;-3.60,0.95 -3.60,2.95 -3.80,2.94 -3.99,2.91 -4.18,2.86 -4.37,2.80 -4.54,2.71 -4.71,2.61 -4.87,2.50 -5.01,2.36;-3.60,0.95 -5.60,0.95 -5.59,0.75 -5.56,0.56 -5.51,0.37 -5.45,0.18 -5.36,0.01 -5.26,-0.16 -5.15,-0.32 -5.01,-0.46;-3.60,0.95 -3.60,-1.05 -3.40,-1.04 -3.21,-1.01 -3.02,-0.96 -2.83,-0.90 -2.66,-0.81 -2.49,-0.71 -2.33,-0.60 -2.19,-0.46;1.20,1.85 0.43,0.00 0.62,-0.07 0.81,-0.11 1.00,-0.14 1.20,-0.15 1.40,-0.14 1.59,-0.11 1.78,-0.07 1.97,0.00;2.73,1.85 1.97,0.00 2.15,-0.07 2.34,-0.11 2.53,-0.14 2.73,-0.15 2.93,-0.14 3.12,-0.11 3.31,-0.07 3.50,0.00;4.26,1.85 3.50,0.00 3.68,-0.07 3.87,-0.11 4.07,-0.14 4.26,-0.15 4.46,-0.14 4.65,-0.11 4.84,-0.07 5.03,0.00;5.79,1.85 5.03,0.00 5.21,-0.07 5.40,-0.11 5.60,-0.14 5.79,-0.15 5.99,-0.14 6.18,-0.11 6.37,-0.07 6.56,0.00" linee="-1.60,0.95 -1.61,1.12 -1.63,1.30 -1.67,1.47 -1.72,1.63 -1.79,1.80 -1.87,1.95 -1.96,2.10 -2.07,2.24 -2.19,2.36 -2.31,2.48 -2.45,2.59 -2.60,2.68 -2.75,2.76 -2.92,2.83 -3.08,2.88 -3.25,2.92 -3.43,2.94 -3.60,2.95 -3.77,2.94 -3.95,2.92 -4.12,2.88 -4.28,2.83 -4.45,2.76 -4.60,2.68 -4.75,2.59 -4.89,2.48 -5.01,2.36 -5.13,2.24 -5.24,2.10 -5.33,1.95 -5.41,1.80 -5.48,1.63 -5.53,1.47 -5.57,1.30 -5.59,1.12 -5.60,0.95 -5.59,0.78 -5.57,0.60 -5.53,0.43 -5.48,0.27 -5.41,0.10 -5.33,-0.05 -5.24,-0.20 -5.13,-0.34 -5.01,-0.46 -4.89,-0.58 -4.75,-0.69 -4.60,-0.78 -4.45,-0.86 -4.28,-0.93 -4.12,-0.98 -3.95,-1.02 -3.77,-1.04 -3.60,-1.05 -3.43,-1.04 -3.25,-1.02 -3.08,-0.98 -2.92,-0.93 -2.75,-0.86 -2.60,-0.78 -2.45,-0.69 -2.31,-0.58 -2.19,-0.46 -2.07,-0.34 -1.96,-0.20 -1.87,-0.05 -1.79,0.10 -1.72,0.27 -1.67,0.43 -1.63,0.60 -1.61,0.78 -1.60,0.95;-3.60,0.95 -1.60,0.95;-3.60,0.95 -2.19,2.36;-3.60,0.95 -3.60,2.95;-3.60,0.95 -5.01,2.36;-3.60,0.95 -5.60,0.95;-3.60,0.95 -5.01,-0.46;-3.60,0.95 -3.60,-1.05;-3.60,0.95 -2.19,-0.46;1.20,1.85 0.43,0.00 0.62,-0.07 0.81,-0.11 1.00,-0.14 1.20,-0.15 1.40,-0.14 1.59,-0.11 1.78,-0.07 1.97,0.00 1.20,1.85;1.97,0 2.73,1.85 2.55,1.91 2.36,1.96 2.16,1.99 1.97,2.00 1.77,1.99 1.58,1.96 1.38,1.91 1.20,1.85 1.97,0;2.73,1.85 1.97,0.00 2.15,-0.07 2.34,-0.11 2.53,-0.14 2.73,-0.15 2.93,-0.14 3.12,-0.11 3.31,-0.07 3.50,0.00 2.73,1.85;3.50,0 4.26,1.85 4.08,1.91 3.89,1.96 3.69,1.99 3.50,2.00 3.30,1.99 3.11,1.96 2.92,1.91 2.73,1.85 3.50,0;4.26,1.85 3.50,0.00 3.68,-0.07 3.87,-0.11 4.07,-0.14 4.26,-0.15 4.46,-0.14 4.65,-0.11 4.84,-0.07 5.03,0.00 4.26,1.85;5.03,0 5.79,1.85 5.61,1.91 5.42,1.96 5.22,1.99 5.03,2.00 4.83,1.99 4.64,1.96 4.45,1.91 4.26,1.85 5.03,0;5.79,1.85 5.03,0.00 5.21,-0.07 5.40,-0.11 5.60,-0.14 5.79,-0.15 5.99,-0.14 6.18,-0.11 6.37,-0.07 6.56,0.00 5.79,1.85;6.56,0 7.32,1.85 7.14,1.91 6.95,1.96 6.75,1.99 6.56,2.00 6.36,1.99 6.17,1.96 5.98,1.91 5.79,1.85 6.56,0" punti="-3.6,0.95,pieno,O" etichette="-2.75,0.55,r;3.35,-0.75,π · r;-0.2,0.85,r" xmin=-6 xmax=7.8 ymin=-1.4 ymax=3.4 titolo="The $8$ sectors of the disk, arranged with their tips alternating up and down, form a shape resembling a parallelogram. Its height is approximately $r$ and its base is approximately half the circumference, or $\pi r$"}

:::dimostrazione
Divide the disk into $8$ equal sectors and arrange them side by side with the tips alternating up and down. The resulting figure resembles a parallelogram. Its height is approximately the radius $r$ because each sector measures $r$ from tip to arc. Half the arcs form its base, so the base measures approximately half the circumference, or $\dfrac{2\pi r}{2} = \pi r$. As the sectors get narrower, the figure more closely resembles a rectangle with base $\pi r$ and height $r$, so the area of the disk is $\pi r \cdot r = \pi r^2$.
:::
::::

## Units of measurement

:::definizione{#unita-lunghezza titolo="Units of length"}
The unit of length is the **meter**, denoted by m. Its most common multiples and subdivisions are the kilometer (km), decimeter (dm), centimeter (cm), and millimeter (mm):
$$
1\ \text{km} = 1000\ \text{m} , \qquad 1\ \text{m} = 10\ \text{dm} = 100\ \text{cm} = 1000\ \text{mm} .
$$
In the sequence km, hm (hectometer), dam (decameter), m, dm, cm, mm, each unit is $10$ times as large as the next. To convert to a smaller unit, multiply by $10$ at each step. To convert to a larger unit, divide by $10$ at each step. For example, $3.5\ \text{m} = 350\ \text{cm}$, because there are two steps from meters to centimeters and $3.5 \cdot 100 = 350$. Similarly, $2400\ \text{m} = 2.4\ \text{km}$, because there are three steps from meters to kilometers and $\dfrac{2400}{1000} = 2.4$. When calculating a perimeter or an area, express all lengths in the same unit.
:::

:::teorema{#unita-area titolo="Units of area"}
Area is measured in square units, such as $\text{m}^2$, $\text{dm}^2$, and $\text{cm}^2$. In the sequence of area units, each unit is $100$ times as large as the next, so multiply or divide by $100$ at each step.

To see why, consider a square with side length $1$ dm. Its side measures $10$ cm, so the square contains $10$ rows of $10$ squares with side length $1$ cm, or $10 \cdot 10 = 100$ small squares. It follows that
$$
1\ \text{dm}^2 = 100\ \text{cm}^2 , \qquad 1\ \text{m}^2 = 100 \cdot 100\ \text{cm}^2 = 10\,000\ \text{cm}^2 .
$$
For example, $2.5\ \text{m}^2 = 2.5 \cdot 10\,000\ \text{cm}^2 = 25\,000\ \text{cm}^2$ and $600\ \text{cm}^2 = \dfrac{600}{100}\ \text{dm}^2 = 6\ \text{dm}^2$. Land area is also measured in hectares (ha). One hectare is the area of a square with side length $100$ m, or $100 \cdot 100 = 10\,000\ \text{m}^2$.
:::

:::attenzione
A square meter differs from $100$ square centimeters. A square with side length $1$ m has side length $100$ cm, so its area is $100 \cdot 100 = 10\,000\ \text{cm}^2$. The factor of $100$ applies to lengths measured in meters and centimeters. For areas, the factor becomes $100 \cdot 100$.
:::

## Solids and volumes

:::definizione{#volume-parallelepipedo titolo="Volumes of cubes and rectangular prisms"}
The **volume** of a solid measures the space it occupies. It is measured by the number of unit cubes that fill it. A cube with edge length $1$ cm has a volume of one cubic centimeter, written as $1\ \text{cm}^3$.

A rectangular **prism** is a solid with six rectangular faces, like a shoebox. The lengths of the three edges that meet at a vertex are its dimensions $a$, $b$, and $c$. A cube is a rectangular prism with every edge of length $l$. Their volumes are
$$
V_{\text{rectangular prism}} = a \cdot b \cdot c , \qquad V_{\text{cube}} = l \cdot l \cdot l = l^3 .
$$
The formula follows by counting cubes. A rectangular prism with dimensions $4$ cm, $3$ cm, and $2$ cm has $4 \cdot 3 = 12$ cubes on its base and contains $2$ identical layers, so its volume is $12 \cdot 2 = 24\ \text{cm}^3$. A cube with edge length $5$ cm has volume $5 \cdot 5 \cdot 5 = 125\ \text{cm}^3$.

::grafico{assi=0 uguale=1 poligoni="0,0 4,0 5.35,1.05 5.35,3.05 1.35,3.05 0,2" linee="0,0 4,0 4,2 0,2 0,0;0,2 1.35,3.05 5.35,3.05 4,2;4,0 5.35,1.05 5.35,3.05" segmenti="1,0,1,2;2,0,2,2;3,0,3,2;0,1,4,1;1,2,2.35,3.05;2,2,3.35,3.05;3,2,4.35,3.05;0.45,2.35,4.45,2.35;0.90,2.70,4.90,2.70;4.45,0.35,4.45,2.35;4.90,0.70,4.90,2.70;4,1,5.35,2.05" etichette="1.55,-0.5,4 cm;5.05,0.25,3 cm;-1.05,0.9,2 cm" xmin=-1.3 xmax=6.2 ymin=-0.9 ymax=3.4 titolo="A rectangular prism with dimensions $4$ cm, $3$ cm, and $2$ cm consists of $2$ layers of $4 \cdot 3 = 12$ cubes with edge length $1$ cm, so its volume is $24\ \text{cm}^3$"}

:::

:::teorema{#volume-cilindro titolo="Volume of a cylinder"}
A **cylinder** is a solid with two congruent, parallel circular bases, like a can. If the radius of its base is $r$ and its height is $h$, its volume is the base area times the height:
$$
V = \pi \cdot r^2 \cdot h .
$$
This is the same formula as for a rectangular prism, where $a \cdot b$ is the base area and $c$ is the height, because in both solids every cross section parallel to the base is congruent to it. For example, a cylinder with radius $3$ cm and height $10$ cm has volume $\pi \cdot 3^2 \cdot 10 = 90\pi\ \text{cm}^3$, or approximately $282.6\ \text{cm}^3$.
:::

:::osservazione{#volumi-e-litri titolo="Units of volume and liters"}
In the sequence of volume units, each unit is $1000$ times as large as the next because a cube with edge length $1$ dm contains $10 \cdot 10 \cdot 10 = 1000$ cubes with edge length $1$ cm. Thus, $1\ \text{dm}^3 = 1000\ \text{cm}^3$ and $1\ \text{m}^3 = 1000\ \text{dm}^3$. The capacity of a container is measured in liters, and one liter is the volume of one cubic decimeter:
$$
1\ \text{liter} = 1\ \text{dm}^3 = 1000\ \text{cm}^3 , \qquad 1\ \text{m}^3 = 1000\ \text{liters} .
$$
For example, a tank shaped like a rectangular prism with dimensions $2$ m, $1$ m, and $0.5$ m has volume $2 \cdot 1 \cdot 0.5 = 1\ \text{m}^3$ and therefore holds $1000$ liters of water.
:::
