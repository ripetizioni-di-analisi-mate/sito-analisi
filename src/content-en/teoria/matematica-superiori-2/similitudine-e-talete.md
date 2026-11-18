---
titolo: Similarity and the intercept theorem
sommario: Proportional segments, the intercept theorem, triangle similarity criteria, corresponding sides, perimeter and area ratios, and scales.
---

## Correspondences between figures

:::definizione{#rapporto titolo="The scale factor"}
Two polygons are **similar** if their corresponding angles are congruent and their corresponding sides are proportional. The ratio $k>0$ of a length in the second figure to the corresponding length in the first is the **scale factor** from the first to the second.

If a side goes from $4$ to $10$, then $k=\dfrac{10}{4}=\dfrac52$. Another side measuring $6$ becomes $15$. The reciprocal ratio is $\dfrac25$ and describes the transformation in the opposite direction.

A ratio greater than one gives an enlargement, and a ratio less than one gives a reduction. When the ratio is one, similar figures are congruent.
:::

:::esempio{titolo="Matching angles, or matching sides, on their own"}
Rectangles with side lengths $2,3$ and $2,4$ have the same angles. Comparing the shorter sides gives a factor of $2/2=1$, while the longer sides give $4/3$. There is no single factor converting one rectangle into the other. Conversely, a square and a rhombus with a $60^\circ$ angle, all of whose sides have the same length, have side ratios of one but different angles. For polygons with more than three sides, check both conditions in the definition.

::grafico{assi=0 uguale=1 xmin=-0.6 xmax=9.6 ymin=-0.65 ymax=2.75 linee="0,0 3,0 3,2 0,2 0,0;5,0 9,0 9,2 5,2 5,0" etichette="1.5,-0.32,3;-0.25,1,2;7,-0.32,4;4.75,1,2" titolo="The rectangles have the same angles and different side ratios"}
:::

## Proportional segments

:::teorema{#proporzioni titolo="Order of the terms"}
The proportion $a:b=c:d$, with nonzero denominators, is equivalent to $ad=bc$. In geometric problems the lengths are positive.

If $\dfrac{x}{6}=\dfrac{4}{3}$, cross multiplication gives $3x=24$ and $x=8$. If one ratio is inverted, the other must be inverted as well.

Correspondence is part of the given data. In $\triangle ABC\sim\triangle DEF$, the corresponding vertices are $A,D$, $B,E$, and $C,F$. Therefore $AB$ corresponds to $DE$, and $BC$ to $EF$.
:::

:::esempio{titolo="Read corresponding sides from the vertex order"}
Suppose $ABC\sim DEF$, $AB=4$, $BC=6$, $AC=5$, and $DE=10$. The order identifies $k=DE/AB=5/2$, which gives $EF=15$ and $DF=25/2$. In the reverse direction the ratios become $AB/DE=BC/EF=AC/DF=2/5$. Write down two pairs of corresponding sides before substituting the numbers.

::grafico{assi=0 uguale=1 xmin=-0.65 xmax=16 ymin=-0.75 ymax=13.2 linee="0,0 4,0 0.625,4.960783708 0,0;5.3,0 15.3,0 6.8625,12.40195927 5.3,0" etichette="-0.21,-0.31,A;4.19,-0.31,B;0.56,5.27,C;5.11,-0.31,D;15.56,-0.31,E;6.76,12.72,F" titolo="Corresponding sides"}
:::

:::osservazione{titolo="Reverse all the fractions together"}
For two positive corresponding lengths, the reverse ratio is the reciprocal of the forward one. From $DE/AB=EF/BC$ it follows that $AB/DE=BC/EF$. For example, with $AB=4$, $DE=10$, $BC=6$, and $EF=15$, both fractions in the first direction are $5/2$ and both in the reverse direction are $2/5$. In general, mixing directions in one comparison is not equivalent. The scale from small to large and that from large to small describe different transformations.
:::

## Triangle similarity criteria

:::teorema{#criteri titolo="Three ways to recognize similarity"}
Two triangles are similar if two pairs of corresponding angles are congruent. The third pair is then congruent because the angles of each triangle add up to $180^\circ$.

They are also similar if all three corresponding sides are proportional, or if two pairs of corresponding sides are proportional and the *included* angles are congruent.

Two triangles with sides $3,4,5$ and $6,8,10$ are similar with scale factor $2$. A single congruent angle does not determine the shape. Another condition of the criterion is needed. In the two-side criterion, the angle must be between those sides.
:::

:::dimostrazione{titolo="Reduce similarity tests to congruence tests"}
To compare two triangles, enlarge or reduce one until a pair of corresponding sides have the same length. A dilation by $k$ about $O$ sends $X$ to $X'$ on ray $OX$, with $OX'=k\,OX$. Relative to $O$, it multiplies both components of any displacement by $k$. The segment keeps its direction and its length is multiplied by $k$. Angle measures therefore stay the same.

If two angles match, the third matches as well. After making corresponding sides equal, apply ASA using the angles at their endpoints. If two side ratios agree and the included angles match, dilation makes those two pairs of sides equal and SAS applies. If all three side ratios agree, dilation makes the three pairs of sides equal and SSS applies.
:::

:::attenzione{titolo="The angle must lie between the two given sides"}
A ray from $A$ meets a circle with center $B$ and radius $\sqrt{13}$ at $C_1$ and $C_2$. In the diagram, $AB=5$, $AC_1=2$, and $AC_2=6$. Triangles $ABC_1$ and $ABC_2$ share side $AB$, have sides of length $\sqrt{13}$, and have the same angle at $A$. That angle is outside the given pair of sides $AB$ and $BC_1$, or $AB$ and $BC_2$. The remaining lengths differ, and the triangles are not similar.

::grafico{assi=0 uguale=1 legenda=0 xmin=-0.7 xmax=9.1 ymin=-3.9 ymax=4.55 linee="0,0 5,0 4.8,3.6 0,0;5,0 1.6,1.2" curve="5+sqrt(13)*cos(t),sqrt(13)*sin(t),0,6.2831853072" punti="0,0;5,0;1.6,1.2;4.8,3.6" etichette="-0.23,-0.29,A;5.16,-0.28,B;1.49,1.61,C₁;4.69,3.96,C₂" titolo="Two equal pairs of sides and a common non-included angle give two different triangles"}
:::

## The intercept theorem

:::teorema{#talete titolo="Parallel lines and transversals"}
A family of parallel lines cuts two transversals into proportional corresponding segments. For points $A,B,C$ on the first transversal and $A',B',C'$ on the second, we have
$$
\frac{AB}{BC}=\frac{A'B'}{B'C'}.
$$
With segments $AB=2$, $BC=3$, and $A'B'=6$, the result is $B'C'=9$.

The segments must be determined by the same pairs of parallel lines. A comparison of a whole segment with a part on one transversal must use the same comparison on the other.

In a triangle, a line parallel to one side divides the other two into proportional parts. This is the case most commonly used in the exercises.
:::

:::dimostrazione{titolo="Distances between parallel lines and lengths along transversals"}
Let $h_1,h_2$ be the perpendicular distances between the first two and between the last two parallel lines. On an oblique transversal, its two consecutive segments are the hypotenuses of two right triangles with perpendicular legs $h_1,h_2$. The acute angle between the transversal and the parallel lines is the same in both strips. The triangles are similar by the angle-angle criterion, so $AB/BC=h_1/h_2$.

Applying the same calculation on the other transversal gives $A'B'/B'C'=h_1/h_2$, even if it slants differently. For a perpendicular transversal the segments have lengths $h_1,h_2$ directly. In each case the ratio within a transversal depends on the distances between the parallel lines, regardless of where the transversal crosses them.
:::

:::esempio{titolo="Ratio of a whole segment to one of its parts"}

On the first transversal, $AB=3$ and $BC=6$. On the second, $A\prime B\prime=5$. The scale factor from $AB$ to $A\prime B\prime$ is $\dfrac53$. The whole segment $AC$ measures $9$, so the corresponding whole segment measures $15$. Subtracting the known segment $A\prime B\prime$ gives the remaining segment, $B\prime C\prime=10$.

$$
\begin{aligned}
A\prime C\prime&=\frac53(3+6)=15 \\[5pt]
B\prime C\prime&=15-5=10
\end{aligned}
$$

::grafico{assi=0 uguale=1 linee="-0.6,0 14,0;-0.6,3 14,3;-0.6,9 14,9;0,0 0,9;1,0 13,9" punti="0,0,pieno,A;0,3,pieno,B;0,9,pieno,C;1,0;5,3;13,9" etichette="1,-0.45,A';5.22,2.6,B';13.24,9.36,C'" xmin=-1 xmax=14.6 ymin=-1 ymax=10 titolo="The three parallel lines mark the same sequence of segments on both transversals"}
:::

## A line parallel to the base

:::teorema{#parallela titolo="Nested triangles"}
If $D$ lies on side $AB$, $E$ lies on side $AC$, and $DE\parallel BC$, then $ADE$ and $ABC$ are similar. Their angle $A$ is shared, and their corresponding angles are congruent because of the parallel lines.

It follows that
$$
\frac{AD}{AB}=\frac{AE}{AC}=\frac{DE}{BC}.
$$
If $AD=3$, $AB=9$, and $BC=12$, the result is $DE=4$.

::grafico{assi=0 uguale=1 linee="0,0 12,0 0,9 0,0;0,6 4,6" punti="0,9,pieno,A;0,0,pieno,B;12,0,pieno,C;0,6,pieno,D;4,6,pieno,E" xmin=-1 xmax=13 ymin=-1 ymax=10 titolo="The parallel segment $DE$ determines two similar triangles"}

The ratio of the shorter to the longer segments is the same for all three sides. The whole segment $AB$ and its part $DB$ represent different lengths.
:::

:::esempio{titolo="The denominator changes when you use the entire side"}
If $AD/DB=2/3$, write $AD=2t$ and $DB=3t$, so $AB=5t$. The ratio from the larger triangle to the smaller one is $AD/AB=2/5$. With $DE\parallel BC$ and $BC=15$, this gives $DE=6$. Also, $AE/AC=2/5$ and $AE/EC=2/3$. The first ratio compares the two triangles, while the second compares two parts of the same side.
:::

:::esempio{titolo="A nearly parallel segment can give a different ratio"}
In the triangle shown, point $D$ divides $AB$ with $AD/AB=1/3$. On $AC$, point $E$ one third of the way from $A$ gives $DE\parallel BC$. Move $E$ to a new point $F$ with $AF/AC=5/12$ and the ratios differ. Segment $DF$ looks nearly horizontal, but it is not parallel to $BC$. The fact that the points lie inside the sides is insufficient to guarantee that the triangles are similar.

::grafico{assi=0 uguale=1 xmin=-0.8 xmax=13 ymin=-0.7 ymax=9.85 linee="0,0 12,0 0,9 0,0;0,6 4,6" segmenti="0,6,5,5.25" punti="0,9;0,0;12,0;0,6;4,6;5,5.25" etichette="-0.25,9.29,A;-0.25,-0.31,B;12.24,-0.32,C;-0.26,6.23,D;4.38,6.31,E;5.28,5.56,F" titolo="DE is parallel to the base. DF joins different fractions of the sides"}
:::

:::dimostrazione{titolo="When the ratios guarantee parallelism"}
Let $D$ lie inside $AB$ and $E$ inside $AC$, with $AD/AB=AE/AC$. Through $D$ draw the line parallel to $BC$, and call its intersection with $AC$ point $E_0$. The direct result gives $AE_0/AC=AD/AB$. Since $AE_0=AE$ and both points lie on the same ray from $A$, $E_0=E$. Thus $DE$ is parallel to $BC$. If the ratios differ, parallelism is impossible.
:::

## Perimeters and altitudes

:::teorema{#perimetri titolo="Linear ratios"}
All corresponding lengths in similar figures are multiplied by $k$. This applies to sides, altitudes, medians, and perimeters.

If the sides are multiplied by $3$, their sum is also multiplied by $3$. A triangle of perimeter $14$ therefore has a similar triangle of perimeter $42$.

A consistent correspondence also matches the vertices opposite the bases in question. The altitude to a side corresponds to the altitude to its matching side in the other triangle.
:::

:::dimostrazione{titolo="Perimeters, altitudes, and corresponding projections"}
Each side of the second polygon is $k$ times its corresponding side in the first. Adding the equations gives $P_2=kP_1$. The same dilation sends a line perpendicular to a side to a line perpendicular to its corresponding side through the corresponding vertex. Altitudes and projections onto corresponding sides therefore scale by $k$. This also holds when the foot of the altitude lies on the extension of the side.
:::

## Projections in a right triangle

:::teorema{#proiezioni titolo="Projections of the legs onto the hypotenuse"}
In triangle $ABC$ with a right angle at $A$, let $H$ be the foot of the perpendicular from $A$ to $BC$. The lengths $BH$ and $CH$ are the projections of legs $AB$ and $AC$ onto the hypotenuse. Triangles $ABH$ and $CBA$ are similar because they share the angle at $B$ and have right angles at $H$ and $A$. Similarly, $ACH\sim BCA$. The two correspondences give

$$
\frac{BH}{AB}=\frac{AB}{BC},\qquad
\frac{CH}{AC}=\frac{AC}{BC},\qquad
\frac{BH}{CH}=\frac{AB^2}{AC^2}.
$$

If $AB=6$, $AC=8$, and $BC=10$, the projections are $36/10$ and $64/10$. They add to $10$ and their ratio is $9/16$, while the ratio of the legs is $3/4$.

::grafico{assi=0 uguale=1 xmin=-0.75 xmax=10.8 ymin=-0.65 ymax=5.75 linee="0,0 10,0 3.6,4.8 0,0;3.6,0.28 3.88,0.28 3.88,0" segmenti="3.6,0,3.6,4.8" punti="0,0;10,0;3.6,4.8;3.6,0" etichette="-0.22,-0.31,B;10.22,-0.31,C;3.55,5.16,A;3.57,-0.35,H;1.78,0.29,3.6;7.1,0.29,6.4" titolo="The projections of the legs add to the length of the hypotenuse"}
:::

:::osservazione
The reasoning also works backward. If $BH/CH=4/9$, the ratio $AB/AC$ is the positive square root $2/3$. If the hypotenuse is $13$, the projections are $4$ and $9$, because they must add to $13$. Then $AB=\sqrt{13\cdot4}$ and $AC=\sqrt{13\cdot9}$ give the leg lengths. This calculation distinguishes the ratio of the projections from the linear scale factor between two different figures.
:::

## Area ratios

:::teorema{#aree titolo="The square of the ratio"}
The ratio of the areas of similar figures is $k^2$. For triangles, the base and altitude are both multiplied by $k$.
$$
A_2=\frac{(kb)(kh)}2=k^2A_1.
$$
The same result holds for similar polygons by decomposing them into triangles.

With a length ratio of $3$, an area of $8$ becomes $72$. If the area ratio is $25$, the length ratio is $5$. Take the positive square root of the area ratio.

::grafico{assi=0 uguale=1 poligoni="0,0 2,0 2,1 0,1;4,0 8,0 8,2 4,2" xmin=-1 xmax=9 ymin=-1 ymax=3 titolo="With length ratio $2$, the rectangles have areas $2$ and $8$"}
:::

:::esempio{titolo="Area of the remaining part"}

A line parallel to $BC$ cuts triangle $ADE$ out of triangle $ABC$, whose area is $45$. If $\dfrac{AD}{AB}=\dfrac23$, the area of $ADE$ is $\left(\dfrac23\right)^2\cdot45=20$. Trapezoid $DBCE$ occupies the remaining area of $45-20=25$. The square of the ratio applies to the two similar triangles, and subtraction gives the area of the trapezoid.

::grafico{assi=0 uguale=1 poligoni="0,0 10,0 7,3 0.3333,3" linee="0,0 10,0 1,9 0,0;0.3333,3 7,3" punti="1,9,pieno,A;0,0,pieno,B;10,0,pieno,C;0.3333,3,pieno,D;7,3,pieno,E" xmin=-1 xmax=11 ymin=-1 ymax=10 titolo="The trapezoid occupies the part of the larger triangle below the parallel segment"}
:::

:::esempio{titolo="Cross-check perimeter and area ratios"}
If two similar figures have perimeters of $28$ and $42$, the length factor from the first to the second is $3/2$. For an initial area of $40$, the new area is $(3/2)^2\cdot40=90$. In the reverse direction the perimeter returns to $28$ by factor $2/3$, and the area returns to $40$ by factor $4/9$. These deductions use the given similarity. Two arbitrary figures with the same area can have different shapes and perimeters.
:::

:::esempio{titolo="When the trapezoid area is given"}
If $k=AD/AB$ for nested triangles with $DE\parallel BC$, the trapezoid occupies $1-k^2$ of the original area. When $k=2/3$, that fraction is $5/9$. If the trapezoid has area $50$, the whole triangle has area $50/(5/9)=90$ and the triangle cut off has area $40$. Check that $40/90$ is $4/9$ and that their difference gives the stated area.
:::

## Scales and applications

:::osservazione{#scale titolo="Lengths on paper and in reality"}
A scale $1:N$ means a length on the drawing is $\dfrac1N$ of the real length in the same unit. Thus $l_{\mathrm{reale}}=Nl_{\mathrm{carta}}$.

At scale $1:200$, a segment of $3\,\mathrm{cm}$ represents $600\,\mathrm{cm}=6\,\mathrm m$. Areas are in the ratio $1:N^2$, so an area conversion requires squaring the factor.

Similarity also allows indirect measurement. With parallel solar rays and level ground, the height of an object and its shadow form a triangle similar to the one formed by an object of known height.
:::

:::esempio{titolo="From centimetres on a plan to square metres"}
At scale $1:500$, each centimetre on the plan represents $500\,\mathrm{cm}=5\,\mathrm m$. So a one-centimetre square on the drawing represents a square with side $5\,\mathrm m$ and area $25\,\mathrm{m}^2$. If a region occupies $3.2\,\mathrm{cm}^2$ on the plan, its real area is $3.2\cdot25=80\,\mathrm{m}^2$. The same result follows by using the area scale $1:500^2$ with both areas in square centimetres, and then dividing by $100^2$ to convert to square metres.
:::

:::esempio{titolo="Shadows measured at the same time"}
A vertical pole of height $1.5\,\mathrm m$ casts a horizontal shadow of length $2\,\mathrm m$. On the same ground, a vertical tree casts a shadow of length $6\,\mathrm m$. The verticals are perpendicular to the ground. The parallel rays form the same acute angle with the ground, so the triangles are similar by angle-angle. The shadows have ratio $6/2=3$, so the tree is $1.5\cdot3=4.5\,\mathrm m$ tall.

::grafico{assi=0 uguale=1 xmin=-0.86 xmax=11.8 ymin=-0.7 ymax=5.4 linee="0,0 11.5,0;0.5,0 0.5,1.5 2.5,0;4.7,0 4.7,4.5 10.7,0;0.5,0.2 0.7,0.2 0.7,0;4.7,0.22 4.92,0.22 4.92,0" etichette="0.15,0.84,1.5;1.5,-0.34,2;4.33,2.28,4.5;7.7,-0.34,6" titolo="The slanted rays are parallel and the heights are perpendicular to the ground"}
:::

:::attenzione
Measure the shadows at the same time and in the same direction. If the pole tilts or the shadows fall on surfaces with different slopes, the measurements need not form similar triangles. A map scale, on the other hand, has a fixed factor set by the drawing. Convert the units first, then use $N$ for lengths and $N^2$ for areas.
:::
