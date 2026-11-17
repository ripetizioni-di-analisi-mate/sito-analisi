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

## Splitting and rearranging figures

:::teorema{#scomposizioni titolo="Additivity of area"}
If a figure is divided into parts with disjoint interiors, its area is the sum of the areas of those parts. If an interior figure is removed, subtract its area.

A rectangle $8$ by $5$ with a rectangular hole $3$ by $2$ has area $40-6=34$. Its perimeter requires a separate calculation because it includes the boundary of the hole.

Moving congruent pieces without overlap preserves the total area. This property justifies rearranging a parallelogram into a rectangle and many planar area formulas.
:::

## Rectangles and parallelograms

:::teorema{#parallelogramma titolo="Base times height"}
A rectangle with base $b$ and height $h$ has area $A=bh$. A parallelogram with the same base and height has the same area as the rectangle and the same formula.

A triangle can be cut from one side of a parallelogram and moved to the other to form a rectangle. The height is the perpendicular distance between the lines containing the parallel sides.

If the base is $7$, the slanted side is $5$, and the height is $4$, the area is $28$. The product $7\cdot5$ would use a side that is not perpendicular to the base.

::grafico{assi=0 uguale=1 poligoni="0,0 6,0 8,3 2,3" linee="2,0 2,3" punti="0,0,pieno,A;6,0,pieno,B;8,3,pieno,C;2,3,pieno,D" xmin=-1 xmax=9 ymin=-1 ymax=4 titolo="The height is perpendicular to the base of the parallelogram"}
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

## Inverse problems and composite figures

:::osservazione{#problemi titolo="Unknowns and units"}
An area formula can be solved for the missing measure. From $A=\dfrac{bh}{2}$ we get $h=\dfrac{2A}b$. If $A=42\,\mathrm{cm}^2$ and $b=12\,\mathrm{cm}$, then $h=7\,\mathrm{cm}$.

When two lengths depend on the same unknown, the area may give a quadratic equation. For a rectangle with sides $x$ and $x+3$ and area $40$, solve $x(x+3)=40$. The positive solution is $5$.

In a composite figure, first identify the parts to add or subtract. Convert the lengths to a common unit before calculating the areas.
:::
