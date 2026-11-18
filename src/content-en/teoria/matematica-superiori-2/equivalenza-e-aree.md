---
titolo: Equal areas and area formulas
sommario: Figures with equal areas, decomposition, areas of triangles and quadrilaterals, regular polygons, inverse problems, and composite figures.
---

## Measuring area

:::definizione{#equivalenza titolo="Equal area and congruence"}
Two figures have **equal area** when their areas are the same. Congruent figures have the same shape and size and thus also have equal area. Figures with equal area can have different perimeters.

A rectangle with sides $2$ and $6$ has area $12$ and perimeter $16$. One with sides $3$ and $4$ has the same area but perimeter $14$. Equal areas therefore do not determine equal perimeters.

Area is expressed in square units. Since $1\,\mathrm m=100\,\mathrm{cm}$, it follows that $1\,\mathrm m^2=10000\,\mathrm{cm}^2$. The conversion uses the square of the length conversion factor.
:::

:::esempio{titolo="The same area with different boundaries"}
In the diagram, each rectangle covers twelve unit squares. The first has sides of lengths $6$ and $2$, the second of lengths $4$ and $3$. The same twelve squares can be arranged in two ways. Counting unit edges along the boundaries gives $16$ and $14$, respectively. Congruent rectangles would also have matching side lengths, so this is an example of equal areas without congruence.

::grafico{assi=0 uguale=1 xmin=-0.7 xmax=12.8 ymin=-0.7 ymax=3.8 linee="0,0 6,0 6,2 0,2 0,0;8,0 12,0 12,3 8,3 8,0;0,1 6,1;1,0 1,2;2,0 2,2;3,0 3,2;4,0 4,2;5,0 5,2;8,1 12,1;8,2 12,2;9,0 9,3;10,0 10,3;11,0 11,3" etichette="3,-0.34,6;-0.25,1.1,2;10,-0.34,4;7.73,1.59,3" titolo="Twelve unit squares arranged into two rectangles"}
:::

:::attenzione{titolo="The same perimeter with different areas"}
Conversely, rectangles $4\times8$ and $5\times7$ both have perimeter $24$, but their areas are $32$ and $35$. For a fixed side sum $s$, the square of side $s/2$ has area at least as large as that of a rectangle with sides $a,b$. Indeed, $(s/2)^2-ab=(a-b)^2/4$, which is nonnegative and is zero only when the sides agree.
:::

## Splitting and rearranging figures

:::teorema{#scomposizioni titolo="Additivity of area"}
If a figure is divided into parts with disjoint interiors, its area is the sum of the areas of those parts. If an interior figure is removed, subtract its area.

A rectangle $8$ by $5$ with a rectangular hole $3$ by $2$ has area $40-6=34$. Its perimeter requires a separate calculation because it includes the boundary of the hole.

Moving congruent pieces without overlap preserves the total area. This property justifies rearranging a parallelogram into a rectangle and many planar area formulas.
:::

:::esempio{titolo="Two decompositions of an L-shape"}
For the L-shape shown, start with the full $10\times7$ rectangle. It is missing a rectangle with sides $4$ and $3$, giving area $70-12=58$. To split it without subtracting, make the vertical cut that separates a $6\times7$ rectangle from a $4\times4$ rectangle. Their interiors are disjoint, so $42+16=58$. The cut is part of the decomposition but is inside the region and does not belong to its outer boundary.

::grafico{assi=0 uguale=1 xmin=-0.8 xmax=10.9 ymin=-0.8 ymax=7.9 poligoni="0,0 10,0 10,4 6,4 6,7 0,7" linee="0,0 10,0 10,4 6,4 6,7 0,7 0,0" segmenti="6,0,6,4;6,7,10,7;10,4,10,7" etichette="5,-0.35,10;-0.28,3.5,7;8,7.35,4;10.26,5.5,3" titolo="Add the two parts or subtract the missing rectangle"}
:::

:::osservazione{titolo="A hole and a corner cutout remove the same area"}
Removing a $3\times2$ rectangle from an $8\times5$ rectangle leaves area $34$, whether it is entirely inside or at a corner. An interior hole adds its boundary to the outer boundary, for a total of $26+10=36$. A corner cutout removes two outer edges of lengths $3$ and $2$ and creates two new edges of those same lengths. The new boundary still measures $26$.
:::

:::esempio{titolo="What to do when the pieces overlap"}
Rectangles with sides $7,3$ and $4,5$ intersect in a $2\times3$ rectangle. The sum $21+20$ counts the common area twice. Subtracting one copy of the six common unit squares leaves $35$ square units covered by at least one rectangle. To count only the parts covered by exactly one rectangle, subtract the overlap twice instead.

::grafico{assi=0 uguale=1 xmin=-0.7 xmax=9.8 ymin=-0.7 ymax=5.8 linee="0,0 7,0 7,3 0,3 0,0;5,0 9,0 9,5 5,5 5,0" poligoni="5,0 7,0 7,3 5,3" etichette="3.5,-0.33,7;-0.26,1.5,3;7,5.33,4;9.28,2.5,5;6,1.5,6" titolo="The highlighted region belongs to both rectangles"}
:::

:::osservazione{titolo="A shared edge leaves the boundary"}
Join two rectangles along a segment of length $s$, with no overlap of their interiors. Their areas add. The shared segment was counted in both original perimeters and, apart from its endpoints, is now inside the combined region. The new perimeter is $P_1+P_2-2s$. That subtraction accounts for the join and leaves the area calculation unchanged.
:::

## Rectangles and parallelograms

:::teorema{#parallelogramma titolo="Base times height"}
A rectangle with base $b$ and height $h$ has area $A=bh$. A parallelogram with the same base and height has the same area as the rectangle and the same formula.

A triangle can be cut from one side of a parallelogram and moved to the other to form a rectangle. The height is the perpendicular distance between the lines containing the parallel sides.

If the base is $7$, the slanted side is $5$, and the height is $4$, the area is $28$. The product $7\cdot5$ would use a side that is not perpendicular to the base.

::grafico{assi=0 uguale=1 poligoni="0,0 6,0 8,3 2,3" linee="2,0 2,3" punti="0,0,pieno,A;6,0,pieno,B;8,3,pieno,C;2,3,pieno,D" xmin=-1 xmax=9 ymin=-1 ymax=4 titolo="The height is perpendicular to the base of the parallelogram"}
:::

:::dimostrazione{titolo="Move the cut triangle across the parallelogram"}
In the diagram, the vertical cut from $D$ to the base separates a triangle with base $2$ and height $3$. Moving it horizontally by one full base makes its edges fit the empty space at the right. The reconstructed rectangle has base $6$ and height $3$, just like the parallelogram. The diagram on the right shows the moved piece.

::grafico{assi=0 uguale=1 xmin=-0.7 xmax=18 ymin=-0.65 ymax=3.7 linee="0,0 6,0 8,3 2,3 0,0;2,0 2,3;11,0 17,0 17,3 11,3 11,0;15,0 17,3" poligoni="0,0 2,0 2,3;15,0 17,0 17,3" etichette="4,-0.34,6;14,-0.34,6;17.38,1.48,3" titolo="The triangle at the left fills the space at the right without overlap"}

If the projection of $D$ falls beyond the base segment, the same single cut may fail to form a rectangle. Instead, enclose the figure in a rectangle of base $b+u$, where $u$ is the horizontal shift of the upper side. The two outer triangles have legs $u$ and $h$. Removing them leaves $(b+u)h-2(uh/2)=bh$.
:::

## Triangles

:::teorema{#triangolo titolo="Half the parallelogram"}
A triangle with base $b$ and corresponding altitude $h$ has area $A=\dfrac{bh}{2}$. Two congruent copies of the triangle make up a parallelogram with the same base and height.

Triangles with the same base and congruent altitudes have equal areas, even when their opposite vertices are at different positions on a line parallel to the base. For base $10$ and altitude $3$, the area is always $15$.

In an obtuse triangle, the foot of an altitude can lie on the extension of a side. The formula still uses the perpendicular distance from the line through the base.

::grafico{assi=0 uguale=1 poligoni="0,0 6,0 2,4" linee="2,0 2,4" punti="0,0,pieno,A;6,0,pieno,B;2,4,pieno,C;2,0,pieno,H" xmin=-1 xmax=7 ymin=-1 ymax=5 titolo="Base $6$ and height $4$ give area $12$"}
:::

:::esempio{titolo="An exterior altitude in an obtuse triangle"}

Triangle $ABC$ has base $AB=6\,\mathrm{cm}$. The foot $H$ of its altitude lies on the extension of $AB$ beyond $A$, with $HA=2\,\mathrm{cm}$ and $CH=3\,\mathrm{cm}$. Triangle $HBC$ has base $8$, and the smaller triangle $HAC$ has base $2$. Both have altitude $3$. The difference of their areas gives the area of $ABC$.

$$
\begin{aligned}
\mathcal A_{ABC}&=\frac{8\cdot3}{2}-\frac{2\cdot3}{2} \\[5pt]
&=\frac{6\cdot3}{2}=9\,\mathrm{cm}^2
\end{aligned}
$$

::grafico{assi=0 uguale=1 poligoni="0,0 6,0 -2,3" linee="-2,3 -2,0 0,0;-2,0.3 -1.7,0.3 -1.7,0" punti="0,0,pieno,A;6,0,pieno,B;-2,3,pieno,C;-2,0" etichette="-1,-0.27,2;3,-0.27,6;-2.35,1.35,3;-2.15,-0.37,H" xmin=-3 xmax=7 ymin=-1 ymax=4 titolo="Altitude $CH$ falls on the extension of the base"}
:::

:::dimostrazione{titolo="Double the triangle with a half-turn"}
Take a second copy of $ABC$ and rotate it by $180^\circ$ about the midpoint of $BC$. Endpoints $B,C$ swap positions, and $A$ becomes a point $D$ on the other side of $BC$. The pairs $AB,CD$ and $AC,BD$ are parallel because each is related by the rotation. Their union is a parallelogram with base $AB$ and the same height as the triangle. The copies are congruent, so each has half the area.
:::

:::osservazione
If $M$ is the midpoint of $AB$, triangles $AMC$ and $MBC$ have equal bases and share the altitude from $C$ to the line $AB$. Their areas are equal even when sides $AC,BC$ differ. More generally, dividing the base in a given ratio divides the area in the same ratio because the altitude factor is shared.
:::

:::esempio{titolo="Recover an exterior altitude from a slanted side"}
If foot $H$ lies beyond $B$, use right triangle $BHC$. With $AB=10$, $BH=4$, and $BC=5$, the Pythagorean theorem gives $CH=\sqrt{5^2-4^2}=3$. The area of $ABC$ is $10\cdot3/2=15$. Distance $BH$ is horizontal and is used to find the perpendicular length. Check by subtracting $4\cdot3/2$ from $(10+4)\cdot3/2$, which also gives $15$.
:::

:::esempio{titolo="Changing the base changes the corresponding altitude"}
If $AB=12$ and the altitude from $C$ is $5$, the triangle has area $30$. Using $AC=10$ as base gives the same area with altitude $2\cdot30/10=6$. The base-altitude product stays constant, so a shorter base requires a longer corresponding altitude. Pair each altitude with the line containing its own side, even though both altitudes are drawn from vertices of the same triangle.
:::

## Trapezoids

:::teorema{#trapezio titolo="Sum of the bases"}
For a trapezoid with bases $B$ and $b$ and height $h$,
$$
A=\frac{(B+b)h}{2}.
$$
Drawing a diagonal gives two triangles with bases $B$ and $b$ and the same height $h$. Adding their areas proves the formula.

For bases $9$ and $5$ and height $4$, the area is $28$. The inverse formula is $h=\dfrac{2A}{B+b}$. Since the base lengths are positive, the division is defined.

::grafico{assi=0 uguale=1 poligoni="0,0 9,0 7,4 2,4" linee="2,0 2,4" xmin=-1 xmax=10 ymin=-1 ymax=5 titolo="A trapezoid with bases $9$ and $5$ and height $4$ has area $28$"}
:::

:::esempio{titolo="Find a base and check which base it is"}
A trapezoid of area $52\,\mathrm{cm}^2$ and height $4\,\mathrm{cm}$ has shorter base $10\,\mathrm{cm}$. The sum of the bases is $2A/h=26\,\mathrm{cm}$, so the other is $16\,\mathrm{cm}$. Substitution recovers the given area, and $16>10$ confirms the base order. A positive result smaller than $10$ would contradict the specified shorter base even if its substitution into the area formula worked.
:::

## Rhombuses and diagonals

:::teorema{#rombo titolo="Perpendicular diagonals"}
The diagonals of a rhombus are perpendicular and bisect each other. If their lengths are $D$ and $d$, the four right triangles have legs $\dfrac D2$ and $\dfrac d2$. The sum of the areas is
$$
A=4\cdot\frac12\frac D2\frac d2=\frac{Dd}{2}.
$$
For diagonals $12$ and $16$, the area is $96$. The formula $A=bh$ also applies when one side and the corresponding height are known.

The formula using half the product of the diagonals applies to quadrilaterals with perpendicular diagonals.

::grafico{assi=0 uguale=1 poligoni="-8,0 0,6 8,0 0,-6" linee="-8,0 8,0;0,-6 0,6" xmin=-9 xmax=9 ymin=-7 ymax=7 titolo="Diagonals $16$ and $12$ divide the rhombus into four right triangles"}
:::

:::dimostrazione{titolo="Why perpendicularity is enough"}
In a convex quadrilateral with perpendicular diagonals $AC,BD$, use $AC$ as the common base of triangles $ABC$ and $ACD$. Their altitudes meet the base at the intersection $O$ of the diagonals. The altitudes have lengths $BO$ and $DO$, so the total is $AC(BO+DO)/2=AC\cdot BD/2$. Point $O$ need not bisect the diagonals.

::grafico{assi=0 uguale=1 xmin=-4.8 xmax=2.8 ymin=-1.7 ymax=3.8 poligoni="-4,0 0,3 2,0 0,-1" linee="-4,0 0,3 2,0 0,-1 -4,0;0,0.22 0.22,0.22 0.22,0" segmenti="-4,0,2,0;0,-1,0,3" etichette="-4.28,0.28,A;0,3.27,B;2.29,0.27,C;0,-1.3,D;0.34,-0.34,O" titolo="The diagonals give the area even though O is not a midpoint"}
:::

:::attenzione{titolo="Congruent diagonals can meet obliquely"}
A $4\times2$ rectangle has both diagonals of length $\sqrt{20}$, but half their product is $10$ while the area is $8$. The diagonals are not perpendicular. Equal diagonal lengths alone do not give the altitudes used in the previous calculation.
:::

## Regular polygons

:::teorema{#regolari titolo="Perimeter and apothem"}
Joining the center of a regular polygon to the vertices divides it into triangles, each with altitude equal to apothem $a$. Adding the areas and writing $P$ for the perimeter gives
$$
A=\frac{Pa}{2}.
$$
A regular hexagon of side length $6$ has perimeter $36$ and apothem $3\sqrt3$, the altitude of an equilateral triangle of side length $6$. Its area is $54\sqrt3$. In a square of side length $l$, the apothem is $\dfrac l2$. The formula gives $l^2$.

The same formula holds for a convex polygon circumscribed about a circle because the distance from the center to each side is the radius of the inscribed circle.
:::

:::esempio{titolo="Finding the apothem from a construction"}

Joining the center $O$ to the vertices of a regular hexagon of side length $4$ gives six equilateral triangles. The apothem is the altitude of one of these triangles. In triangle $OAB$, the foot $H$ of the altitude bisects $AB$. In right triangle $OHA$, leg $AH$ has length $2$ and hypotenuse $OA$ has length $4$.

$$
\begin{aligned}
a&=\sqrt{4^2-2^2}=2\sqrt3 \\[5pt]
\mathcal A&=\frac{(6\cdot4)\,2\sqrt3}{2}=24\sqrt3
\end{aligned}
$$

::grafico{assi=0 uguale=1 poligoni="4,0 2,3.464102 -2,3.464102 -4,0 -2,-3.464102 2,-3.464102" linee="-4,0 4,0;2,3.464102 -2,-3.464102;-2,3.464102 2,-3.464102;0,0 3,1.732051" punti="0,0;4,0,pieno,A;2,3.464102,pieno,B;3,1.732051,pieno,H" etichette="-0.55,0.3,O" xmin=-5 xmax=5 ymin=-4.3 ymax=4.3 titolo="Apothem $OH$ is the altitude of equilateral triangle $OAB$"}
:::

:::dimostrazione{titolo="When one altitude gives the entire area"}
The bases of the triangles from the central point are the polygon’s sides. If their altitude is the same $a$ in every triangle, the sum is $a(l_1+\dots+l_n)/2=aP/2$. Regularity suffices because all sides share the same apothem. Tangency to one common circle also gives a common altitude even for unequal sides. In a general convex polygon, the distances from an interior point to the various sides can differ and must then be used separately.
:::

## Inverse problems and composite figures

:::osservazione{#problemi titolo="Unknowns and units"}
An area formula can be solved for the missing measure. From $A=\dfrac{bh}{2}$ we get $h=\dfrac{2A}b$. If $A=42\,\mathrm{cm}^2$ and $b=12\,\mathrm{cm}$, then $h=7\,\mathrm{cm}$.

When two lengths depend on the same unknown, the area may give a quadratic equation. For a rectangle with sides $x$ and $x+3$ and area $40$, solve $x(x+3)=40$. The positive solution is $5$.

In a composite figure, first identify the parts to add or subtract. Convert the lengths to a common unit before calculating the areas.
:::

:::esempio{titolo="From an algebraic solution to a length"}
For the rectangle of area $40$, the equation $x(x+3)=40$ becomes $(x-5)(x+8)=0$. Its algebraic solutions are $5$ and $-8$. Only the first is a length, giving sides of $5$ and $8$. Their product checks the area and their difference checks the original condition. The same setup rules out any value that makes one dimension zero or negative.
:::

:::esempio{titolo="Use the same unit for both lengths"}
A rectangular sheet measures $120\,\mathrm{cm}$ by $0.8\,\mathrm m$. Converting to metres gives $1.2\cdot0.8=0.96\,\mathrm{m}^2$. Converting both lengths to centimetres instead gives $120\cdot80=9600\,\mathrm{cm}^2$. The two forms agree after dividing by $100^2$. Multiplying $120$ by $0.8$ without tracking their units does not directly give a result in square metres or square centimetres.
:::

| Available data | Calculation | Condition to check |
|---|---|---|
| Triangle area and base | $h=2A/b$ | Altitude perpendicular to the base line |
| Rhombus area and one diagonal | $d=2A/D$ | Perpendicular diagonals |
| Trapezoid area, height, and one base | $B=2A/h-b$ | Positive base and correct base order |
| Regular polygon area and perimeter | $a=2A/P$ | A common altitude for every triangle |
