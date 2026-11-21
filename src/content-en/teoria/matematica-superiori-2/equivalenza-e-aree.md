---
titolo: Equal areas and area formulas
sommario: Figures with equal areas, decomposition, areas of triangles and quadrilaterals, regular polygons, inverse problems, and composite figures.
---

## Measuring area

:::definizione{#equivalenza titolo="Equal area and congruence"}
The **area** of a plane figure is the measure of its surface, that is, the number of unit squares (squares of side $1$) needed to cover it. The **perimeter** is the length of the boundary, that is, the sum of the lengths of the sides.

Two figures have **equal area** when their areas are the same. Two figures are **congruent** when they have the same shape and the same size, that is, when one can be moved so that it lies exactly on top of the other. Two congruent figures cover the same surface, so they also have equal area. Two figures with equal area, on the other hand, can have different perimeters.

A rectangle with sides $2$ and $6$ has area $2\cdot6=12$ and perimeter $2+6+2+6=16$. A rectangle with sides $3$ and $4$ has the same area $3\cdot4=12$, but perimeter $3+4+3+4=14$. Therefore equal areas do not determine equal boundaries.

Area is expressed in **square units**. A square centimetre ($\mathrm{cm}^2$) is the area of a square of side $1\,\mathrm{cm}$, and a square metre ($\mathrm m^2$) is the area of a square of side $1\,\mathrm m$. Since $1\,\mathrm m=100\,\mathrm{cm}$, the square of side $1\,\mathrm m$ contains $100$ rows of $100$ squares of side $1\,\mathrm{cm}$, so
$$
1\,\mathrm m^2=100\cdot100\,\mathrm{cm}^2=10000\,\mathrm{cm}^2.
$$
To convert an area, one therefore multiplies by the square of the factor that converts the lengths. In the same way, since $1\,\mathrm{cm}=10\,\mathrm{mm}$ (millimetres), it follows that $1\,\mathrm{cm}^2=10\cdot10\,\mathrm{mm}^2=100\,\mathrm{mm}^2$.
:::

:::esempio{titolo="The same area with different boundaries"}
The diagram shows two rectangles, each made of twelve unit squares. The first has sides $6$ and $2$, the second has sides $4$ and $3$. They are the same twelve squares arranged in two different ways, so both areas equal $12$. Counting the edges of the small squares that lie on the boundary gives instead $16$ for the first rectangle and $14$ for the second. Two congruent rectangles would also have equal sides. These two have different sides, so they have equal area without being congruent.

::grafico{assi=0 uguale=1 xmin=-0.7 xmax=12.8 ymin=-0.7 ymax=3.8 linee="0,0 6,0 6,2 0,2 0,0;8,0 12,0 12,3 8,3 8,0;0,1 6,1;1,0 1,2;2,0 2,2;3,0 3,2;4,0 4,2;5,0 5,2;8,1 12,1;8,2 12,2;9,0 9,3;10,0 10,3;11,0 11,3" etichette="3,-0.34,6;-0.25,1.1,2;10,-0.34,4;7.73,1.59,3" titolo="Twelve unit squares arranged into two rectangles"}
:::

:::attenzione{titolo="The same perimeter with different areas"}
Two figures with the same perimeter can also have different areas. The rectangles $4\times8$ and $5\times7$ (the notation $4\times8$ means a rectangle with sides $4$ and $8$) both have perimeter $2(4+8)=2(5+7)=24$, but their areas are $32$ and $35$.

Among the rectangles in which the sum $s$ of two adjacent sides is the same (this sum is the **semiperimeter**, that is, half the perimeter), the square of side $\dfrac s2$ has the largest area. For a rectangle with sides $a$ and $b$ and $a+b=s$, the difference between the two areas is
$$
\left(\frac s2\right)^2-ab=\frac{(a+b)^2}{4}-ab=\frac{a^2+2ab+b^2-4ab}{4}=\frac{(a-b)^2}{4}.
$$
The square of a number is never negative, so the difference is greater than or equal to zero. It equals zero only when $a=b$, that is, when the rectangle is a square.
:::

## Splitting and rearranging figures

:::teorema{#scomposizioni titolo="Additivity of area"}
Two parts of a figure have **disjoint interiors** when they do not overlap, that is, when they share at most some pieces of boundary. If a figure is divided into parts with disjoint interiors, its area is the sum of the areas of those parts. If an interior figure is removed from a figure, the area of the remaining region is the original area minus the removed area.

A rectangle $8\times5$ with a rectangular hole $3\times2$ has area $8\cdot5-3\cdot2=40-6=34$. Its perimeter requires a separate calculation, because the boundary also includes the edge of the hole.

Moving congruent pieces without overlap preserves the total area, because each piece keeps its own area. This property justifies rearranging a parallelogram into a rectangle, and many area formulas for plane figures follow from it.
:::

:::esempio{titolo="Two decompositions of an L-shape"}
The L-shape in the diagram lies inside the full $10\times7$ rectangle. Compared with that rectangle, the rectangle with sides $4$ and $3$ in the top right corner is missing, so the area is $10\cdot7-4\cdot3=70-12=58$.

The same area can also be found without subtracting. The vertical cut marked in the diagram divides the figure into a $6\times7$ rectangle and a $4\times4$ rectangle. The two pieces have disjoint interiors, so the area is $6\cdot7+4\cdot4=42+16=58$. The cut lies inside the region, so it does not belong to the outer boundary.

::grafico{assi=0 uguale=1 xmin=-0.8 xmax=10.9 ymin=-0.8 ymax=7.9 poligoni="0,0 10,0 10,4 6,4 6,7 0,7" linee="0,0 10,0 10,4 6,4 6,7 0,7 0,0" segmenti="6,0,6,4;6,7,10,7;10,4,10,7" etichette="5,-0.35,10;-0.28,3.5,7;8,7.35,4;10.26,5.5,3" titolo="Add the two parts or subtract the missing rectangle"}
:::

:::osservazione{titolo="A hole and a corner cutout remove the same area"}
A $3\times2$ rectangle is removed from an $8\times5$ rectangle. The remaining area is $40-6=34$ both when the removed piece is a hole entirely inside and when it is a cutout at a corner. The outer boundary of the original rectangle measures $2(8+5)=26$, and the two cases give different perimeters.

- With the interior hole, the edge of the hole, of length $2(3+2)=10$, is added to the outer boundary. The total is $26+10=36$.
- With the corner cutout, two outer pieces of lengths $3$ and $2$ disappear from the boundary, and the two inner sides of the cutout appear, also of lengths $3$ and $2$. The new boundary therefore still measures $26$.
:::

:::esempio{titolo="What to do when the pieces overlap"}
Two rectangles, one with sides $7$ and $3$ and one with sides $4$ and $5$, overlap. Their common part, called the **intersection**, is the $2\times3$ rectangle highlighted in the diagram, with area $6$. The sum of the areas $7\cdot3+4\cdot5=21+20$ counts the six squares of the intersection twice. Subtracting one copy gives the area covered by at least one of the two rectangles:
$$
21+20-6=35.
$$
To count only the part covered by exactly one of the two rectangles, the intersection is subtracted twice instead, which gives $41-2\cdot6=29$.

::grafico{assi=0 uguale=1 xmin=-0.7 xmax=9.8 ymin=-0.7 ymax=5.8 linee="0,0 7,0 7,3 0,3 0,0;5,0 9,0 9,5 5,5 5,0" poligoni="5,0 7,0 7,3 5,3" etichette="3.5,-0.33,7;-0.26,1.5,3;7,5.33,4;9.28,2.5,5;6,1.5,6" titolo="The highlighted region belongs to both rectangles"}
:::

:::osservazione{titolo="A shared edge leaves the boundary"}
Two rectangles are **joined** along a segment of length $s$ when they share that piece of boundary and no interior point. The area of the combined figure is the sum of the two areas. The joining segment was counted both in the perimeter $P_1$ of the first rectangle and in the perimeter $P_2$ of the second. In the combined figure, apart from its endpoints, that segment lies inside, so it no longer belongs to the boundary. The new perimeter is therefore
$$
P=P_1+P_2-2s.
$$
For example, a $6\times2$ rectangle and a $4\times3$ rectangle, joined along a piece of length $2$, have perimeters $16$ and $14$. The combined figure has perimeter $16+14-2\cdot2=26$ and area $12+12=24$.
:::

## Rectangles and parallelograms

:::teorema{#parallelogramma titolo="Base times height"}
A **parallelogram** is a quadrilateral whose opposite sides are parallel. One side is chosen as the **base**. The **height** relative to that base is the distance between the line of the base and the line of the opposite side, measured along a perpendicular, that is, along a line that makes right angles with the base.

A rectangle with base $b$ and height $h$ has area $A=bh$. For example, a rectangle with base $4$ and height $2$ is made of $2$ rows of $4$ unit squares, so its area is $4\cdot2=8$. A parallelogram with the same base and the same height has the same area as the rectangle, so its area is given by the same formula $A=bh$.

The reason is that a triangle can be cut from one side of the parallelogram and moved to the other side to form a rectangle. In the diagram the height is the vertical segment that goes down from $D$ to the base $AB$.

A parallelogram with base $7$, slanted side $5$, and height $4$ has area $7\cdot4=28$. The **slanted side** is the inclined side, which is not perpendicular to the base. For this reason the product $7\cdot5=35$ is not the area.

::grafico{assi=0 uguale=1 poligoni="0,0 6,0 8,3 2,3" linee="2,0 2,3" punti="0,0,pieno,A;6,0,pieno,B;8,3,pieno,C;2,3,pieno,D" xmin=-1 xmax=9 ymin=-1 ymax=4 titolo="The height is perpendicular to the base of the parallelogram"}
:::

:::dimostrazione{titolo="Move the cut triangle across the parallelogram"}
The parallelogram in the diagram has base $6$ and height $3$. The vertical cut from $D$ to the base separates on the left a right triangle with base $2$ and height $3$. This triangle is moved to the right, without rotating it, by a distance equal to the base. Its edges then fit the empty space to the right of side $BC$. The reconstructed figure is a rectangle with base $6$ and height $3$, like the parallelogram, and the diagram on the right shows the moved piece. The moved triangle keeps its area, so the two figures have equal area.

::grafico{assi=0 uguale=1 xmin=-0.7 xmax=18 ymin=-0.65 ymax=3.7 linee="0,0 6,0 8,3 2,3 0,0;2,0 2,3;11,0 17,0 17,3 11,3 11,0;15,0 17,3" poligoni="0,0 2,0 2,3;15,0 17,0 17,3" etichette="4,-0.34,6;14,-0.34,6;17.38,1.48,3" titolo="The triangle at the left fills the space at the right without overlap"}

The **projection** of $D$ onto the base is the point where the perpendicular drawn from $D$ meets the line of the base. When the projection of $D$ falls beyond the base, that is, outside segment $AB$, the same single cut may fail to form a rectangle. The figure is then enclosed in a rectangle of base $b+u$, where $u$ is the horizontal shift of the upper side with respect to the base. Inside the rectangle and outside the parallelogram there are two congruent right triangles, each with **legs** (the two sides that form the right angle) $u$ and $h$ and area $\dfrac{uh}{2}$. Removing them leaves
$$
(b+u)h-2\cdot\frac{uh}{2}=bh+uh-uh=bh.
$$
:::

## Triangles

:::teorema{#triangolo titolo="Half the parallelogram"}
In a triangle, one side is chosen as the base. The **corresponding altitude** is the perpendicular segment from the opposite vertex to the line of the base, and its **foot** is the point where it meets that line. A triangle with base $b$ and corresponding altitude $h$ has area $A=\dfrac{bh}{2}$. The reason is that two congruent copies of the triangle make up a parallelogram with the same base and the same height, of area $bh$, and each copy fills half of it.

Triangles with the same base and congruent altitudes have equal areas. This also holds when the vertices opposite the base are at different positions on a line parallel to the base, because all the points of that line are at the same distance from the base. For base $10$ and altitude $3$, the area is always $\dfrac{10\cdot3}{2}=15$.

A triangle is **obtuse** when it has an angle greater than $90^\circ$. In an obtuse triangle, the foot of an altitude can lie on the **extension** of a side, that is, on the line of the side but outside the segment. The formula still uses as altitude the perpendicular distance from the vertex to the line of the base.

In the diagram the base $AB$ measures $6$ and the altitude $CH$ measures $4$, so the area is $\dfrac{6\cdot4}{2}=12$.

::grafico{assi=0 uguale=1 poligoni="0,0 6,0 2,4" linee="2,0 2,4" punti="0,0,pieno,A;6,0,pieno,B;2,4,pieno,C;2,0,pieno,H" xmin=-1 xmax=7 ymin=-1 ymax=5 titolo="Base $6$ and height $4$ give area $12$"}
:::

:::esempio{titolo="An exterior altitude in an obtuse triangle"}

Triangle $ABC$ has base $AB=6\,\mathrm{cm}$ and an obtuse angle at $A$. The foot $H$ of the altitude from $C$ lies on the extension of $AB$ beyond $A$, with $HA=2\,\mathrm{cm}$ and $CH=3\,\mathrm{cm}$. Triangle $HBC$ has base $HB=2+6=8\,\mathrm{cm}$, and the smaller triangle $HAC$ has base $2\,\mathrm{cm}$. Both have altitude $3\,\mathrm{cm}$. Triangle $ABC$ is obtained by removing $HAC$ from $HBC$, so its area is the difference of their areas.

$$
\begin{aligned}
\mathcal A_{ABC}&=\frac{8\cdot3}{2}-\frac{2\cdot3}{2} \\[5pt]
&=12-3 \\[5pt]
&=\frac{6\cdot3}{2}=9\,\mathrm{cm}^2
\end{aligned}
$$

::grafico{assi=0 uguale=1 poligoni="0,0 6,0 -2,3" linee="-2,3 -2,0 0,0;-2,0.3 -1.7,0.3 -1.7,0" punti="0,0,pieno,A;6,0,pieno,B;-2,3,pieno,C;-2,0" etichette="-1,-0.27,2;3,-0.27,6;-2.35,1.35,3;-2.15,-0.37,H" xmin=-3 xmax=7 ymin=-1 ymax=4 titolo="Altitude $CH$ falls on the extension of the base"}
:::

:::dimostrazione{titolo="Double the triangle with a half-turn"}
Take a second copy of triangle $ABC$ and rotate it by $180^\circ$, that is, by a half-turn, about the midpoint of $BC$. The midpoint lies halfway between $B$ and $C$, so the rotation takes $B$ to $C$ and $C$ to $B$. Vertex $A$ goes to a point $D$ on the other side of $BC$. A half-turn maps every line to a parallel line. Segment $AB$ becomes segment $DC$, so $AB$ and $CD$ are parallel. In the same way $AC$ becomes $DB$, so $AC$ and $BD$ are parallel. The union of the two copies is therefore a parallelogram with base $AB$ and the same height as the triangle. The two copies are congruent, so each has half the area of the parallelogram, that is, $\dfrac{bh}{2}$.
:::

:::osservazione
The **midpoint** $M$ of $AB$ is the point that divides $AB$ into two equal parts. Triangles $AMC$ and $MBC$ have equal bases, $AM=MB$, and share the altitude, that is, the distance from $C$ to the line $AB$. Their areas are therefore equal even when sides $AC$ and $BC$ differ.

More generally, if a point $M$ divides the base into two parts, the areas of the two triangles are in the same ratio as the two parts, because the altitude is the same for both. For example, if $AM=1$, $MB=2$, and the area of $ABC$ is $30$, triangle $AMC$ has area $30\cdot\dfrac{1}{3}=10$ and triangle $MBC$ has area $30\cdot\dfrac{2}{3}=20$.
:::

:::esempio{titolo="Recover an exterior altitude from a slanted side"}
The foot $H$ of the altitude from $C$ lies on the extension of $AB$ beyond $B$. Triangle $BHC$ is then right-angled at $H$, with hypotenuse $BC$. Let $AB=10$, $BH=4$, and $BC=5$. The **Pythagorean theorem** states that in a right triangle the square of the hypotenuse equals the sum of the squares of the legs, so
$$
CH=\sqrt{BC^2-BH^2}=\sqrt{5^2-4^2}=\sqrt{25-16}=\sqrt9=3.
$$
The area of $ABC$ is therefore $\dfrac{10\cdot3}{2}=15$. Segment $BH$ lies on the line of the base and is used only to find the perpendicular length $CH$. Subtraction gives the same value. Triangle $AHC$ has base $10+4=14$ and area $\dfrac{14\cdot3}{2}=21$, triangle $BHC$ has area $\dfrac{4\cdot3}{2}=6$, and $21-6=15$.
:::

:::esempio{titolo="Changing the base changes the corresponding altitude"}
If $AB=12$ and the altitude from $C$ is $5$, the triangle has area $\dfrac{12\cdot5}{2}=30$. Side $AC=10$ can also be used as the base. The altitude corresponding to $AC$ is the distance from $B$ to the line $AC$. The area is still $30$, so from $\dfrac{10\cdot h}{2}=30$ it follows that
$$
h=\frac{2\cdot30}{10}=6.
$$
The product of base and altitude equals $60$ in both cases, so if the base gets shorter, the corresponding altitude gets longer. Each altitude is paired with the line containing its own side, because it is perpendicular to that line and starts from the opposite vertex.
:::

## Trapezoids

:::teorema{#trapezio titolo="Sum of the bases"}
A **trapezoid** is a quadrilateral with two parallel sides, called the **bases**. The longer base is written $B$ and the shorter base $b$. The height $h$ is the distance between the lines of the two bases. The area of the trapezoid is
$$
A=\frac{(B+b)h}{2}.
$$
A **diagonal** is a segment joining two non-adjacent vertices. Drawing a diagonal gives two triangles with disjoint interiors, one with base $B$ and one with base $b$. Both have height $h$, because the vertex opposite each base lies on the line of the other base. Adding their areas proves the formula:
$$
\frac{Bh}{2}+\frac{bh}{2}=\frac{(B+b)h}{2}.
$$
The formula amounts to multiplying the average length of the bases, $\dfrac{B+b}{2}$, by the height.

For bases $9$ and $5$ and height $4$, the area is $\dfrac{(9+5)\cdot4}{2}=\dfrac{56}{2}=28$, as in the diagram. Multiplying the formula by $2$ and dividing by $B+b$ gives the **inverse formula** for the height
$$
h=\frac{2A}{B+b}.
$$
The bases are positive lengths, so $B+b$ is not zero and the division is defined.

::grafico{assi=0 uguale=1 poligoni="0,0 9,0 7,4 2,4" linee="2,0 2,4" xmin=-1 xmax=10 ymin=-1 ymax=5 titolo="A trapezoid with bases $9$ and $5$ and height $4$ has area $28$"}
:::

:::esempio{titolo="Find a base and check which base it is"}
A trapezoid has area $52\,\mathrm{cm}^2$, height $4\,\mathrm{cm}$, and shorter base $10\,\mathrm{cm}$. Multiplying the area formula by $2$ and dividing by $h$ gives the sum of the bases:
$$
B+b=\frac{2A}{h}=\frac{2\cdot52}{4}=26\,\mathrm{cm}.
$$
The other base therefore measures $26-10=16\,\mathrm{cm}$. Substituting, $\dfrac{(16+10)\cdot4}{2}=52$ is the given area, and $16>10$ confirms that $10\,\mathrm{cm}$ is the shorter base. If the calculation gave a positive length smaller than $10$, the data would be **inconsistent**, that is, they could not all be true at the same time. In that case the known base would be the longer one, contradicting the given "shorter base", even if the product with the height gave back the area.
:::

## Rhombuses and diagonals

:::teorema{#rombo titolo="Perpendicular diagonals"}
A **rhombus** is a quadrilateral with four equal sides. The diagonals of a rhombus are perpendicular and bisect each other, that is, they meet at right angles at their common midpoint. If the diagonals measure $D$ and $d$, their halves, called **semi-diagonals**, measure $\dfrac D2$ and $\dfrac d2$. The diagonals divide the rhombus into four right triangles with legs $\dfrac D2$ and $\dfrac d2$, so the sum of the areas is
$$
A=4\cdot\frac12\cdot\frac D2\cdot\frac d2=\frac{4Dd}{8}=\frac{Dd}{2}.
$$
The area of the rhombus is therefore half the product of the diagonals. For diagonals $12$ and $16$, as in the diagram, the semi-diagonals measure $6$ and $8$ and the area is $\dfrac{12\cdot16}{2}=96$. A rhombus is also a parallelogram, so the formula $A=bh$ still applies when one side and the corresponding height are known.

The formula using half the product of the diagonals holds for quadrilaterals with perpendicular diagonals and does not apply automatically to every quadrilateral. A square is a rhombus with equal diagonals, so a square with diagonal $d$ has area $\dfrac{d\cdot d}{2}=\dfrac{d^2}{2}$. For $d=8$ the area is $\dfrac{64}{2}=32$.

::grafico{assi=0 uguale=1 poligoni="-8,0 0,6 8,0 0,-6" linee="-8,0 8,0;0,-6 0,6" xmin=-9 xmax=9 ymin=-7 ymax=7 titolo="Diagonals $16$ and $12$ divide the rhombus into four right triangles"}
:::

:::dimostrazione{titolo="Why perpendicularity is enough"}
A quadrilateral is **convex** when every segment joining two of its points stays inside the figure. In a convex quadrilateral the two diagonals meet at an interior point. Let $ABCD$ be a convex quadrilateral with perpendicular diagonals $AC$ and $BD$, which meet at point $O$. Diagonal $AC$ is the common base of triangles $ABC$ and $ACD$. Diagonal $BD$ is perpendicular to $AC$, so the altitudes of the two triangles corresponding to $AC$ are segments $BO$ and $DO$, with their foot at the same point $O$. Adding the two areas gives
$$
\frac{AC\cdot BO}{2}+\frac{AC\cdot DO}{2}=\frac{AC\,(BO+DO)}{2}=\frac{AC\cdot BD}{2},
$$
because $BO+DO=BD$. The argument uses only perpendicularity, so point $O$ need not bisect the diagonals. In the diagram $AC=6$ and $BD=4$, and the area is $\dfrac{6\cdot4}{2}=12$ even though $O$ is not the midpoint of either diagonal.

::grafico{assi=0 uguale=1 xmin=-4.8 xmax=2.8 ymin=-1.7 ymax=3.8 poligoni="-4,0 0,3 2,0 0,-1" linee="-4,0 0,3 2,0 0,-1 -4,0;0,0.22 0.22,0.22 0.22,0" segmenti="-4,0,2,0;0,-1,0,3" etichette="-4.28,0.28,A;0,3.27,B;2.29,0.27,C;0,-1.3,D;0.34,-0.34,O" titolo="The diagonals give the area even though O is not a midpoint"}
:::

:::attenzione{titolo="Congruent diagonals can meet obliquely"}
A $4\times2$ rectangle has two congruent diagonals, both of length $\sqrt{4^2+2^2}=\sqrt{20}$ by the Pythagorean theorem. Half their product is $\dfrac{\sqrt{20}\cdot\sqrt{20}}{2}=\dfrac{20}{2}=10$, while the area is $4\cdot2=8$. The diagonals of this rectangle are not perpendicular, so the half-product formula does not apply. Equal diagonal lengths alone do not give the altitudes used in the previous proof.
:::

## Regular polygons

:::teorema{#regolari titolo="Perimeter and apothem"}
A **regular polygon** has all sides equal and all angles equal, like the equilateral triangle, the square, and the regular hexagon. Its **centre** is the point at the same distance from all the vertices and from all the sides. The **apothem** $a$ is the distance from the centre to a side, that is, the length of the perpendicular segment from the centre to the midpoint of the side.

Joining the centre to the vertices divides the polygon into triangles whose bases are the sides and whose altitudes all equal the apothem $a$. Adding the areas and writing $P$ for the perimeter gives
$$
A=\frac{Pa}{2}.
$$
A regular hexagon of side length $6$ has perimeter $6\cdot6=36$ and apothem $3\sqrt3$, the altitude of an equilateral triangle of side length $6$. By the Pythagorean theorem that altitude is $\sqrt{6^2-3^2}=\sqrt{27}=3\sqrt3$. Its area is $\dfrac{36\cdot3\sqrt3}{2}=54\sqrt3$. In a square of side length $l$, the apothem is $\dfrac l2$ and the perimeter is $4l$, so the formula gives $\dfrac{4l}{2}\cdot\dfrac l2=l^2$.

A polygon is **circumscribed** about a circle when all its sides are **tangent** to the circle, that is, each side touches it at exactly one point. The circle is then said to be **inscribed** in the polygon. The same expression $A=\dfrac{Pa}{2}$ holds for a convex polygon circumscribed about a circle, with $a$ equal to the radius, because the distance from the centre to every side is the radius of the inscribed circle.
:::

:::esempio{titolo="Finding the apothem from a construction"}

Joining the centre $O$ to the vertices of a regular hexagon of side length $4$ gives six triangles. Each has two equal sides, from the centre to two vertices, and the angle between them measures $\dfrac{360^\circ}{6}=60^\circ$. The other two angles are equal, because they are opposite the two equal sides, and together they measure $180^\circ-60^\circ=120^\circ$. Each therefore measures $60^\circ$, so the six triangles are equilateral. The apothem is the altitude of one of these triangles. In triangle $OAB$, the foot $H$ of the altitude bisects $AB$. In right triangle $OHA$, leg $AH$ has length $2$ and hypotenuse $OA$ has length $4$.

$$
\begin{aligned}
a&=\sqrt{4^2-2^2}=\sqrt{12}=2\sqrt3 \\[5pt]
\mathcal A&=\frac{(6\cdot4)\,2\sqrt3}{2}=\frac{48\sqrt3}{2}=24\sqrt3
\end{aligned}
$$

::grafico{assi=0 uguale=1 poligoni="4,0 2,3.464102 -2,3.464102 -4,0 -2,-3.464102 2,-3.464102" linee="-4,0 4,0;2,3.464102 -2,-3.464102;-2,3.464102 2,-3.464102;0,0 3,1.732051" punti="0,0;4,0,pieno,A;2,3.464102,pieno,B;3,1.732051,pieno,H" etichette="-0.55,0.3,O" xmin=-5 xmax=5 ymin=-4.3 ymax=4.3 titolo="Apothem $OH$ is the altitude of equilateral triangle $OAB$"}
:::

:::dimostrazione{titolo="When one altitude gives the entire area"}
The bases of the triangles with vertex at the centre are the sides of the polygon, of lengths $l_1,l_2,\dots,l_n$, where $n$ is the number of sides. If the altitude is the same $a$ in every triangle, the sum of the areas is
$$
\frac{l_1a}{2}+\frac{l_2a}{2}+\dots+\frac{l_na}{2}=\frac{a\,(l_1+l_2+\dots+l_n)}{2}=\frac{aP}{2},
$$
because the sum of the sides is the perimeter $P$. In a regular polygon all sides have the same apothem, so regularity suffices. Tangency to one common circle also gives a common altitude, equal to the radius, even for unequal sides. In a general convex polygon, on the other hand, the distances from an interior point to the various sides can differ. In that case each triangle has its own altitude, and the areas of the triangles are calculated separately and then added.
:::

## Inverse problems and composite figures

:::osservazione{#problemi titolo="Unknowns and units"}
In an **inverse problem** the area is given and one of the measures from which it is calculated is sought. The area formula is then solved for the missing measure. From $A=\dfrac{bh}{2}$, multiplying both **sides** of the equation (the expressions to the left and to the right of the equals sign) by $2$ gives $2A=bh$. Dividing by $b$ gives $h=\dfrac{2A}{b}$. If $A=42\,\mathrm{cm}^2$ and $b=12\,\mathrm{cm}$, then $h=\dfrac{2\cdot42}{12}=\dfrac{84}{12}=7\,\mathrm{cm}$.

When two lengths depend on the same unknown, the area may lead to a **quadratic equation**, that is, an equation in which the unknown appears squared. For a rectangle with sides $x$ and $x+3$ and area $40$, one solves $x(x+3)=40$. The positive solution is $5$.

A **composite figure** is made of several simple figures, such as rectangles and triangles. In a composite figure, the parts to add or subtract are identified first. The lengths are converted to a common unit before calculating the areas.
:::

:::esempio{titolo="From an algebraic solution to a length"}
For the rectangle of area $40$, the product is expanded and everything is moved to the left-hand side:
$$
x(x+3)=40\quad\Longrightarrow\quad x^2+3x-40=0.
$$
The two numbers with product $-40$ and sum $3$ are $8$ and $-5$, so the equation becomes $(x-5)(x+8)=0$. A product equals zero when one of its factors equals zero, so the algebraic solutions are $5$ and $-8$. A length is positive, so only the first is a length, giving sides of $5$ and $5+3=8$. Their product $5\cdot8=40$ checks the area and their difference $8-5=3$ checks the original condition. The same setup rules out any value that makes one dimension zero or negative.
:::

:::esempio{titolo="Use the same unit for both lengths"}
A rectangular sheet measures $120\,\mathrm{cm}$ by $0.8\,\mathrm m$. The two lengths are in different units, so they are first converted to the same unit.

- In metres, $120\,\mathrm{cm}=1.2\,\mathrm m$ and the area is $1.2\cdot0.8=0.96\,\mathrm{m}^2$.
- In centimetres, $0.8\,\mathrm m=80\,\mathrm{cm}$ and the area is $120\cdot80=9600\,\mathrm{cm}^2$.

The two forms agree, because dividing $9600$ by $100^2=10000$ gives $0.96$. The product $120\cdot0.8=96$ of the numbers written without converting does not directly give a result in square metres or square centimetres.
:::

| Available data | Calculation | Condition to check |
|---|---|---|
| Triangle area and base | $h=\dfrac{2A}{b}$ | Altitude perpendicular to the base line |
| Rhombus area and one diagonal | $d=\dfrac{2A}{D}$ | Perpendicular diagonals |
| Trapezoid area, height, and one base | $B=\dfrac{2A}{h}-b$ | Positive base and correct base order |
| Regular polygon area and perimeter | $a=\dfrac{2A}{P}$ | A common altitude for every triangle |
