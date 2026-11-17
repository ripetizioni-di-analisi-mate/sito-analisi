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

## Proportional segments

:::teorema{#proporzioni titolo="Order of the terms"}
The proportion $a:b=c:d$, with nonzero denominators, is equivalent to $ad=bc$. In geometric problems the lengths are positive.

If $\dfrac{x}{6}=\dfrac{4}{3}$, cross multiplication gives $3x=24$ and $x=8$. If one ratio is inverted, the other must be inverted as well.

Correspondence is part of the given data. In $\triangle ABC\sim\triangle DEF$, the corresponding vertices are $A,D$, $B,E$, and $C,F$. Therefore $AB$ corresponds to $DE$, and $BC$ to $EF$.
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

## Triangle similarity criteria

:::teorema{#criteri titolo="Three ways to recognize similarity"}
Two triangles are similar if two pairs of corresponding angles are congruent. The third pair is then congruent because the angles of each triangle add up to $180^\circ$.

They are also similar if all three corresponding sides are proportional, or if two pairs of corresponding sides are proportional and the *included* angles are congruent.

Two triangles with sides $3,4,5$ and $6,8,10$ are similar with scale factor $2$. A single congruent angle does not determine the shape. Another condition of the criterion is needed. In the two-side criterion, the angle must be between those sides.
:::

## A line parallel to the base

:::teorema{#parallela titolo="Nested triangles"}
If $D$ lies on side $AB$, $E$ lies on side $AC$, and $DE\parallel BC$, then $ADE$ and $ABC$ are similar. Their angle $A$ is shared, and their corresponding angles are congruent because of the parallel lines.

It follows that
$$
\frac{AD}{AB}=\frac{AE}{AC}=\frac{DE}{BC}.
$$
If $AD=3$, $AB=9$, and $BC=12$, the result is $DE=4$.

::grafico{assi=0 uguale=1 linee="0,0 6,0 2,6 0,0;1,3 4,3" punti="2,6,pieno,A;0,0,pieno,B;6,0,pieno,C;1,3,pieno,D;4,3,pieno,E" xmin=-1 xmax=7 ymin=-1 ymax=7 titolo="The parallel segment $DE$ determines two similar triangles"}

The ratio of the shorter to the longer segments is the same for all three sides. The whole segment $AB$ and its part $DB$ represent different lengths.
:::

## Perimeters and altitudes

:::teorema{#perimetri titolo="Linear ratios"}
All corresponding lengths in similar figures are multiplied by $k$. This applies to sides, altitudes, medians, and perimeters.

If the sides are multiplied by $3$, their sum is also multiplied by $3$. A triangle of perimeter $14$ therefore has a similar triangle of perimeter $42$.

A consistent correspondence also matches the vertices opposite the bases in question. The altitude to a side corresponds to the altitude to its matching side in the other triangle.
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

## Scales and applications

:::osservazione{#scale titolo="Lengths on paper and in reality"}
A scale $1:N$ means a length on the drawing is $\dfrac1N$ of the real length in the same unit. Thus $l_{\mathrm{reale}}=Nl_{\mathrm{carta}}$.

At scale $1:200$, a segment of $3\,\mathrm{cm}$ represents $600\,\mathrm{cm}=6\,\mathrm m$. Areas are in the ratio $1:N^2$, so an area conversion requires squaring the factor.

Similarity also allows indirect measurement. With parallel solar rays and level ground, the height of an object and its shadow form a triangle similar to the one formed by an object of known height.
:::
