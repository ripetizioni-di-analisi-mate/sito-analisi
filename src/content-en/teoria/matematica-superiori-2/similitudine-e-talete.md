---
titolo: Similarity and the intercept theorem
sommario: Proportional segments, the intercept theorem, triangle similarity criteria, corresponding sides, perimeter and area ratios, and scales.
---

## Correspondences between figures

:::definizione{#rapporto titolo="The scale factor"}
Two figures are **similar** when they have the same shape and differ at most in size, like a photograph and its enlargement. In polygons we compare **corresponding** elements, that is, the angles and sides that occupy the same position in the two figures. Two polygons are similar if their corresponding angles are **congruent**, meaning they have the same size, and their corresponding sides are **proportional**, meaning that the ratio of a side of the second figure to the corresponding side of the first is the same number for every pair. This number is written $k$ and is called the **scale factor** from the first figure to the second. It is positive, because it is a ratio of two lengths.

If a side goes from $4$ to $10$, the scale factor is $k=\dfrac{10}{4}=\dfrac52$. Another side measuring $6$ then becomes $6\cdot\dfrac52=15$. To go back from the second figure to the first we use the reciprocal ratio $\dfrac25$, and indeed $10\cdot\dfrac25=4$.

With $k>1$ the second figure is an **enlargement** of the first, and with $k<1$ it is a **reduction**. With $k=1$ corresponding sides are equal, so the two similar figures are congruent, that is, they can be placed exactly on top of each other.
:::

:::esempio{titolo="Matching angles, or matching sides, on their own"}
The first rectangle has sides $2$ and $3$, and the second has sides $2$ and $4$. All the angles are right angles, so corresponding angles are congruent. The shorter side goes from $2$ to $2$, with ratio $\dfrac22=1$, while the longer side goes from $3$ to $4$, with ratio $\dfrac43$. The two ratios are different, so there is no single factor converting the first rectangle into the second, and the rectangles are not similar.

Conversely, a square and a rhombus (a quadrilateral with four equal sides) with a $60^\circ$ angle, whose sides have the same length, have all side ratios equal to $1$. Their angles, however, are different, $90^\circ$ in the square and $60^\circ$ and $120^\circ$ in the rhombus, so these two figures are not similar either. For polygons with more than three sides, both conditions in the definition are therefore checked.

::grafico{assi=0 uguale=1 xmin=-0.6 xmax=9.6 ymin=-0.65 ymax=2.75 linee="0,0 3,0 3,2 0,2 0,0;5,0 9,0 9,2 5,2 5,0" etichette="1.5,-0.32,3;-0.25,1,2;7,-0.32,4;4.75,1,2" titolo="The rectangles have the same angles and different side ratios"}
:::

## Proportional segments

:::teorema{#proporzioni titolo="Order of the terms"}
A **proportion** is an equality between two ratios. It is written $a:b=c:d$, or $\dfrac ab=\dfrac cd$, and read "$a$ is to $b$ as $c$ is to $d$", with the denominators $b$ and $d$ nonzero. The numbers $a$ and $d$ are the **extremes**, and $b$ and $c$ are the **means**. Multiplying both sides of $\dfrac ab=\dfrac cd$ by $bd$ gives $ad=bc$, so the proportion is equivalent to the equality between the product of the extremes and the product of the means. This step is also called **cross multiplication**. In geometric problems the lengths are positive.

If $\dfrac{x}{6}=\dfrac{4}{3}$, cross multiplication gives $3x=6\cdot4=24$, so $x=\dfrac{24}{3}=8$. If one ratio is inverted, the other is inverted as well, and indeed $\dfrac6x=\dfrac68=\dfrac34$.

Correspondence is part of the given data. The symbol $\sim$ is read "is similar to", and $\triangle$ denotes a triangle. In $\triangle ABC\sim\triangle DEF$ the vertices in the same position correspond, that is, $A$ and $D$, $B$ and $E$, $C$ and $F$. Therefore $AB$ corresponds to $DE$, $BC$ to $EF$, and $AC$ to $DF$.
:::

:::esempio{titolo="Read corresponding sides from the vertex order"}
Suppose $ABC\sim DEF$, with $AB=4$, $BC=6$, $AC=5$, and $DE=10$. The order of the letters establishes that $AB$ and $DE$ are corresponding sides, so
$$
k=\frac{DE}{AB}=\frac{10}{4}=\frac52.
$$
The other sides of the second triangle are obtained by multiplying the corresponding sides of the first by $k$:
$$
EF=\frac52\cdot6=15,\qquad DF=\frac52\cdot5=\frac{25}{2}.
$$
In the reverse direction, from the second triangle to the first, all the ratios equal $\dfrac25$:
$$
\frac{AB}{DE}=\frac{BC}{EF}=\frac{AC}{DF}=\frac25.
$$
The calculation starts from two pairs of corresponding sides read from the names of the triangles, and only then are the numbers substituted.

::grafico{assi=0 uguale=1 xmin=-0.65 xmax=16 ymin=-0.75 ymax=13.2 linee="0,0 4,0 0.625,4.960783708 0,0;5.3,0 15.3,0 6.8625,12.40195927 5.3,0" etichette="-0.21,-0.31,A;4.19,-0.31,B;0.56,5.27,C;5.11,-0.31,D;15.56,-0.31,E;6.76,12.72,F" titolo="Corresponding sides"}
:::

:::osservazione{titolo="Reverse all the fractions together"}
For two positive corresponding lengths, the reverse ratio is the reciprocal of the forward one. So from $\dfrac{DE}{AB}=\dfrac{EF}{BC}$, inverting both fractions, it follows that $\dfrac{AB}{DE}=\dfrac{BC}{EF}$. With $AB=4$, $DE=10$, $BC=6$, and $EF=15$, both fractions in the first direction equal $\dfrac52$ and both in the reverse direction equal $\dfrac25$. If the directions are mixed in one comparison, the equality becomes $\dfrac{DE}{AB}=\dfrac{BC}{EF}$, that is, $\dfrac52=\dfrac25$, which is false. The factor from the small figure to the large one and the factor from the large figure to the small one indeed describe two different transformations, an enlargement and a reduction.
:::

## Triangle similarity criteria

:::teorema{#criteri titolo="Three ways to recognize similarity"}
For triangles, fewer conditions than those in the definition are enough. Two triangles are similar if one of the following three conditions holds.
- **First criterion (angle-angle).** Two pairs of corresponding angles are congruent. Then the third pair is congruent as well, because the angles of each triangle add up to $180^\circ$.
- **Second criterion (SAS, two sides and the included angle).** Two pairs of corresponding sides are proportional and the *included* angles, that is, the angles formed by those two sides, are congruent.
- **Third criterion (SSS, three sides).** All three pairs of corresponding sides are proportional.

Triangles with sides $3$, $4$, $5$ and $6$, $8$, $10$ are similar by the third criterion, because
$$
\frac63=\frac84=\frac{10}{5}=2,
$$
and the scale factor is $2$. Three lengths are the sides of a triangle when the largest is less than the sum of the other two (the **triangle inequality**), as happens for $10<6+8$.

A single congruent angle does not determine a shape, so another piece of data from one of the criteria is needed. In the second criterion the angle lies between the two sides whose ratio is known.
:::

:::dimostrazione{titolo="Reduce similarity tests to congruence tests"}
The idea is to enlarge or reduce one of the two triangles until a pair of corresponding sides have the same length, and then to use a congruence test. The tool is the **dilation** with centre $O$ and factor $k$, which sends each point $X$ to the point $X'$ on ray $OX$ with $OX'=k\cdot OX$. If a point lies $3$ units to the right of $O$ and $2$ units above it, its image lies $3k$ units to the right and $2k$ units above. Therefore every segment keeps its direction and has its length multiplied by $k$, and so angle measures stay the same.

The congruence tests for triangles are SAS (two sides and the included angle), ASA (one side and the two angles at its endpoints), and SSS (three sides), where S stands for side and A for angle.
- If two angles match, the third matches as well. After making two corresponding sides equal with a dilation, the angles at their endpoints are equal and ASA applies.
- If two equal ratios and the included angle are known, the dilation with factor equal to that ratio makes both pairs of sides equal, and the angle between them stays congruent, so SAS applies.
- With three equal ratios, the dilation makes all corresponding sides equal and SSS applies.

In every case the dilated triangle is similar to the first and congruent to the second, so the two original triangles are similar.
:::

:::attenzione{titolo="The angle must lie between the two given sides"}
A ray from $A$ meets the circle with centre $B$ and radius $\sqrt{13}$ (the square root of $13$) at $C_1$ and $C_2$. Every point of the circle is at distance $\sqrt{13}$ from the centre, so $BC_1=BC_2=\sqrt{13}$. In the diagram, $AB=5$, $AC_1=2$, and $AC_2=6$. Triangles $ABC_1$ and $ABC_2$ therefore have the same side $AB$, the same side of length $\sqrt{13}$, and the same angle at $A$.

The angle at $A$ is not included between sides $AB$ and $BC_1$, nor between $AB$ and $BC_2$, because those sides meet at $B$. The second criterion therefore does not apply, and the two triangles also have different shapes. The sides of the first triangle are $2$, $\sqrt{13}\approx3.61$, and $5$, and those of the second are $\sqrt{13}$, $5$, and $6$. The ratio of the longest sides is $\dfrac65=1.2$, while the ratio of the shortest sides is $\dfrac{\sqrt{13}}{2}\approx1.80$, so the sides are not proportional and the two figures are not similar.

::grafico{assi=0 uguale=1 legenda=0 xmin=-0.7 xmax=9.1 ymin=-3.9 ymax=4.55 linee="0,0 5,0 4.8,3.6 0,0;5,0 1.6,1.2" curve="5+sqrt(13)*cos(t),sqrt(13)*sin(t),0,6.2831853072" punti="0,0;5,0;1.6,1.2;4.8,3.6" etichette="-0.23,-0.29,A;5.16,-0.28,B;1.49,1.61,C₁;4.69,3.96,C₂" titolo="Two equal pairs of sides and a common non-included angle give two different triangles"}
:::

## The intercept theorem

:::teorema{#talete titolo="Parallel lines and transversals"}
A **family of parallel lines** is a set of lines that are all parallel to each other, and a **transversal** is a line that crosses all of them. The **intercept theorem** states that a family of parallel lines cuts two transversals into proportional corresponding segments. If the parallel lines meet the first transversal at $A,B,C$ and the second at the corresponding points $A',B',C'$ (read "$A$ prime", and so on), then
$$
\frac{AB}{BC}=\frac{A'B'}{B'C'}.
$$
With segments $AB=2$, $BC=3$, and $A'B'=6$, we get $\dfrac23=\dfrac{6}{B'C'}$, so $2\cdot B'C'=18$ and $B'C'=9$.

Corresponding segments are determined by the same pairs of parallel lines: $AB$ and $A'B'$ lie between the first and the second, and $BC$ and $B'C'$ between the second and the third. If a whole segment is compared with a part on one transversal, the same comparison is made on the other, that is, $\dfrac{AB}{AC}=\dfrac{A'B'}{A'C'}$. With the numbers above, both ratios equal $\dfrac25$, because $AC=2+3=5$ and $A'C'=6+9=15$.

In a triangle, a line parallel to one side divides the other two into proportional parts. This is the case most commonly used in the exercises.
:::

:::dimostrazione{titolo="Distances between parallel lines and lengths along transversals"}
The idea is to compare each segment with the width of the strip it crosses. Let $h_1$ and $h_2$ be the distances between the first two and between the last two parallel lines, measured perpendicular to the lines. On an oblique transversal, the two consecutive segments are the hypotenuses of two right triangles with one leg perpendicular to the parallel lines, of length $h_1$ in the first strip and $h_2$ in the second. The acute angle between the transversal and the parallel lines is the same in both strips, because all the parallel lines have the same direction. The two right triangles are therefore similar by the first criterion, and so $\dfrac{AB}{BC}=\dfrac{h_1}{h_2}$.

The same calculation on the other transversal gives $\dfrac{A'B'}{B'C'}=\dfrac{h_1}{h_2}$, even if it slants differently. On a perpendicular transversal the segments have lengths $h_1$ and $h_2$ directly. In every case the ratio of the two segments on a transversal depends only on the distances between the parallel lines, so it is the same on all transversals.
:::

:::esempio{titolo="Ratio of a whole segment to one of its parts"}

On the first transversal, $AB=3$ and $BC=6$. On the second, $A\prime B\prime=5$. Cross multiplying the proportion of the intercept theorem gives $AB\cdot B\prime C\prime=BC\cdot A\prime B\prime$ and, dividing by $AB\cdot BC$, $\dfrac{A\prime B\prime}{AB}=\dfrac{B\prime C\prime}{BC}$. Each segment on the second transversal is therefore the corresponding one on the first multiplied by the same number $\dfrac{A\prime B\prime}{AB}=\dfrac53$. The whole segment $AC$ measures $3+6=9$, so the corresponding whole segment measures $15$. Subtracting the known segment $A\prime B\prime$ gives the remaining segment, $B\prime C\prime=10$.

$$
\begin{aligned}
A\prime C\prime&=\frac53(3+6)=15 \\[5pt]
B\prime C\prime&=15-5=10
\end{aligned}
$$

In the diagram the three parallel lines are horizontal, the first transversal is vertical, and the second is oblique.

::grafico{assi=0 uguale=1 linee="-0.6,0 14,0;-0.6,3 14,3;-0.6,9 14,9;0,0 0,9;1,0 13,9" punti="0,0,pieno,A;0,3,pieno,B;0,9,pieno,C;1,0;5,3;13,9" etichette="1,-0.45,A';5.22,2.6,B';13.24,9.36,C'" xmin=-1 xmax=14.6 ymin=-1 ymax=10 titolo="The three parallel lines mark the same sequence of segments on both transversals"}
:::

## A line parallel to the base

:::teorema{#parallela titolo="Nested triangles"}
In triangle $ABC$, point $D$ lies on side $AB$, point $E$ lies on side $AC$, and $DE\parallel BC$, where the symbol $\parallel$ is read "is parallel to". Then $ADE$ and $ABC$ are similar. Indeed, they share the angle at $A$. Moreover, line $AB$ crosses the parallel lines $DE$ and $BC$, so angles $\angle ADE$ and $\angle ABC$ are congruent, because they are corresponding angles formed by two parallel lines and a transversal. By the first criterion the triangles are similar.

It follows that
$$
\frac{AD}{AB}=\frac{AE}{AC}=\frac{DE}{BC}.
$$
If $AD=3$, $AB=9$, and $BC=12$, the ratio is $\dfrac{AD}{AB}=\dfrac39=\dfrac13$, so $DE=\dfrac13\cdot12=4$.

::grafico{assi=0 uguale=1 linee="0,0 12,0 0,9 0,0;0,6 4,6" punti="0,9,pieno,A;0,0,pieno,B;12,0,pieno,C;0,6,pieno,D;4,6,pieno,E" xmin=-1 xmax=13 ymin=-1 ymax=10 titolo="The parallel segment $DE$ determines two similar triangles"}

The ratio of the segments of the small triangle to those of the large triangle is the same for all three sides. The denominator is the whole side $AB$ of the large triangle. The segment $DB$ is only the part of $AB$ outside the small triangle and is not a side of either triangle.
:::

:::esempio{titolo="The denominator changes when the entire side is used"}
If $\dfrac{AD}{DB}=\dfrac23$, side $AB$ is divided into equal parts of length $t$, so that $AD$ contains $2$ of them and $DB$ contains $3$. Therefore $AD=2t$, $DB=3t$, and $AB=5t$. The ratio of the small triangle to the large one is $\dfrac{AD}{AB}=\dfrac{2t}{5t}=\dfrac25$. With $DE\parallel BC$ and $BC=15$, this gives $DE=\dfrac25\cdot15=6$. On the other side, $\dfrac{AE}{AC}=\dfrac25$ and $\dfrac{AE}{EC}=\dfrac23$. The first ratio compares the two triangles, while the second compares the two parts of the same side.
:::

:::esempio{titolo="A nearly parallel segment can give a different ratio"}
In the triangle shown, point $D$ divides $AB$ with $\dfrac{AD}{AB}=\dfrac13$. On $AC$, point $E$ one third of the way from $A$ gives $DE\parallel BC$. Point $E$ is moved to a new point $F$ with $\dfrac{AF}{AC}=\dfrac5{12}$. The ratios become different, because $\dfrac13=\dfrac4{12}$ is different from $\dfrac5{12}$. Segment $DF$ looks only slightly tilted compared with $DE$. If it were parallel to $BC$, the nested triangles theorem would give $\dfrac{AF}{AC}=\dfrac{AD}{AB}$, so $DF$ is not parallel to $BC$. The fact that the points lie on the sides does not, on its own, guarantee that the triangles formed are similar.

::grafico{assi=0 uguale=1 xmin=-0.8 xmax=13 ymin=-0.7 ymax=9.85 linee="0,0 12,0 0,9 0,0;0,6 4,6" segmenti="0,6,5,5.25" punti="0,9;0,0;12,0;0,6;4,6;5,5.25" etichette="-0.25,9.29,A;-0.25,-0.31,B;12.24,-0.32,C;-0.26,6.23,D;4.38,6.31,E;5.28,5.56,F" titolo="DE is parallel to the base. DF joins different fractions of the sides"}
:::

:::dimostrazione{titolo="When the ratios guarantee parallelism"}
The converse theorem states that equal ratios on the two sides guarantee parallelism. Let $D$ lie inside $AB$ and $E$ inside $AC$, with $\dfrac{AD}{AB}=\dfrac{AE}{AC}$. Through $D$ the line parallel to $BC$ is drawn, and its intersection with $AC$ is called $E_0$. By the direct theorem $\dfrac{AE_0}{AC}=\dfrac{AD}{AB}$, so $\dfrac{AE_0}{AC}=\dfrac{AE}{AC}$ and therefore $AE_0=AE$. The two points lie on the same ray from $A$ at the same distance from $A$, so $E_0=E$. Thus $DE$ is parallel to $BC$. If instead the ratios differ, parallelism is impossible, because a parallel line would give equal ratios by the direct theorem.
:::

## Perimeters and altitudes

:::teorema{#perimetri titolo="Linear ratios"}
All corresponding lengths in similar figures are multiplied by $k$. This applies to:
- sides;
- **altitudes**, where the altitude to a side is the segment drawn from the opposite vertex perpendicular to the line of that side;
- **medians**, where the median to a side is the segment joining the midpoint of that side to the opposite vertex;
- **perimeters**, that is, the sums of the sides.

If the sides are multiplied by $3$, their sum is also multiplied by $3$. A triangle of perimeter $14$ therefore has a similar triangle of perimeter $3\cdot14=42$.

A consistent correspondence also matches the vertices opposite the bases in question. The altitude to a side corresponds to the altitude to the matching side of the other triangle, drawn from the corresponding vertex.
:::

:::dimostrazione{titolo="Perimeters, altitudes, and corresponding projections"}
Each side of the second polygon is $k$ times its corresponding side in the first. For a triangle with sides $a$, $b$, $c$, the sides of the similar triangle are $ka$, $kb$, $kc$, and adding them gives
$$
P_2=ka+kb+kc=k(a+b+c)=kP_1.
$$
The same dilation preserves angles, so it sends a line perpendicular to a side to the line perpendicular to the corresponding side through the corresponding vertex. Therefore the altitude and the **projections** onto corresponding sides are multiplied by $k$; a projection is the segment from an endpoint of the side to the **foot** of the altitude, the point where the altitude meets the line of the side. This also holds when the foot of the altitude lies on the extension of the side, as in obtuse triangles. The dilation also multiplies the two halves of a side by $k$, so it sends the midpoint to the midpoint of the corresponding side, and the medians are multiplied by $k$ as well.
:::

## Projections in a right triangle

:::teorema{#proiezioni titolo="Projections of the legs onto the hypotenuse"}
In triangle $ABC$ with a right angle at $A$, side $BC$, opposite the right angle, is the **hypotenuse**, and $AB$, $AC$ are the **legs**. Let $H$ be the foot of the perpendicular from $A$ to $BC$. The lengths $BH$ and $CH$ are the projections of legs $AB$ and $AC$ onto the hypotenuse.

Triangles $ABH$ and $CBA$ are similar by the first criterion, because they share the angle at $B$ and have right angles at $H$ and at $A$. In this correspondence $BH$ corresponds to $BA$, and $AB$ corresponds to $CB$. Similarly, $ACH\sim BCA$, with the shared angle at $C$. The two correspondences give

$$
\frac{BH}{AB}=\frac{AB}{BC},\qquad
\frac{CH}{AC}=\frac{AC}{BC}.
$$

Cross multiplication gives $AB^2=BH\cdot BC$ and $AC^2=CH\cdot BC$, which is Euclid's first theorem. Dividing the first equality by the second, the common factor $BC$ cancels and we are left with
$$
\frac{BH}{CH}=\frac{AB^2}{AC^2}.
$$

If $AB=6$, $AC=8$, and $BC=10$, the projections are $BH=\dfrac{36}{10}=3.6$ and $CH=\dfrac{64}{10}=6.4$. They add to $10$, the hypotenuse, and their ratio is $\dfrac{36}{64}=\dfrac9{16}$, while the ratio of the legs is $\dfrac68=\dfrac34$. Indeed $\left(\dfrac34\right)^2=\dfrac9{16}$.

::grafico{assi=0 uguale=1 xmin=-0.75 xmax=10.8 ymin=-0.65 ymax=5.75 linee="0,0 10,0 3.6,4.8 0,0;3.6,0.28 3.88,0.28 3.88,0" segmenti="3.6,0,3.6,4.8" punti="0,0;10,0;3.6,4.8;3.6,0" etichette="-0.22,-0.31,B;10.22,-0.31,C;3.55,5.16,A;3.57,-0.35,H;1.78,0.29,3.6;7.1,0.29,6.4" titolo="The projections of the legs add to the length of the hypotenuse"}
:::

:::osservazione
The reasoning also works backward. If $\dfrac{BH}{CH}=\dfrac49$, the ratio $\dfrac{AB}{AC}$ is the positive square root $\sqrt{\dfrac49}=\dfrac23$. If the hypotenuse is $13$, the projections are $4$ and $9$, because they must be in the ratio $\dfrac49$ and their sum must be $4+9=13$. The leg lengths then follow from Euclid's first theorem:
$$
AB=\sqrt{13\cdot4}=\sqrt{52},\qquad AC=\sqrt{13\cdot9}=\sqrt{117}.
$$
The ratio $\dfrac49$ compares two segments of the same triangle and is the square of $\dfrac{AB}{AC}$. The scale factor, on the other hand, compares two different figures.
:::

## Area ratios

:::teorema{#aree titolo="The square of the ratio"}
The ratio of the areas of similar figures is $k^2$. A triangle with base $b$ and altitude $h$ has area $A_1=\dfrac{bh}{2}$. In the similar triangle the base and altitude are both multiplied by $k$, so
$$
A_2=\frac{(kb)(kh)}2=k^2A_1.
$$
The same result holds for similar polygons by decomposing them into triangles, because each triangle has its area multiplied by $k^2$, and so does their sum.

With a length ratio of $3$, an area of $8$ becomes $3^2\cdot8=72$. If the area ratio is $25$, that is, $k^2=25$, the length ratio is $k=\sqrt{25}=5$. We take the positive square root of the area ratio, because $k$ is a ratio of lengths.

In the diagram the length ratio is $2$ and the areas go from $2$ to $8$, that is, they are multiplied by $2^2=4$.

::grafico{assi=0 uguale=1 poligoni="0,0 2,0 2,1 0,1;4,0 8,0 8,2 4,2" xmin=-1 xmax=9 ymin=-1 ymax=3 titolo="With length ratio $2$, the rectangles have areas $2$ and $8$"}
:::

:::esempio{titolo="Area of the remaining part"}

A line parallel to $BC$ cuts triangle $ADE$ out of triangle $ABC$, whose area is $45$. If $\dfrac{AD}{AB}=\dfrac23$, the two triangles are similar with ratio $\dfrac23$ and the area of $ADE$ is $\left(\dfrac23\right)^2\cdot45=\dfrac49\cdot45=20$. **Trapezoid** $DBCE$, the quadrilateral with the two parallel sides $DE$ and $BC$, occupies the remaining area of $45-20=25$. The square of the ratio applies to the two similar triangles, while the area of the trapezoid is found by subtraction.

::grafico{assi=0 uguale=1 poligoni="0,0 10,0 7,3 0.3333,3" linee="0,0 10,0 1,9 0,0;0.3333,3 7,3" punti="1,9,pieno,A;0,0,pieno,B;10,0,pieno,C;0.3333,3,pieno,D;7,3,pieno,E" xmin=-1 xmax=11 ymin=-1 ymax=10 titolo="The trapezoid occupies the part of the larger triangle below the parallel segment"}
:::

:::esempio{titolo="Cross-check perimeter and area ratios"}
If two similar figures have perimeters of $28$ and $42$, the length factor from the first to the second is $\dfrac{42}{28}=\dfrac32$. For an initial area of $40$, the new area is $\left(\dfrac32\right)^2\cdot40=\dfrac94\cdot40=90$. In the reverse direction the perimeter returns to $28$ by factor $\dfrac23$, and the area returns to $40$ by factor $\left(\dfrac23\right)^2=\dfrac49$. These deductions use the given similarity. Two arbitrary figures with the same area can have different shapes and perimeters. For example, a rectangle with sides $2$ and $8$ and a square with side $4$ both have area $16$, but perimeters $20$ and $16$.
:::

:::esempio{titolo="When the trapezoid area is given"}
If $k=\dfrac{AD}{AB}$ for nested triangles with $DE\parallel BC$, the small triangle occupies the fraction $k^2$ of the original area and the trapezoid occupies the remaining fraction $1-k^2$. When $k=\dfrac23$, that fraction is $1-\dfrac49=\dfrac59$. If the trapezoid has area $50$, then $\dfrac59$ of the area of the whole triangle equals $50$, so the whole triangle has area $50\cdot\dfrac95=90$ and the triangle cut off has area $90-50=40$. As a check, $\dfrac{40}{90}=\dfrac49$.
:::

## Scales and applications

:::osservazione{#scale titolo="Lengths on paper and in reality"}
A **scale** $1:N$, read "one to $N$", means that a length on the drawing is $\dfrac1N$ of the corresponding real length, with both lengths in the same unit. Thus $l_{\mathrm{reale}}=N\cdot l_{\mathrm{carta}}$.

At scale $1:200$, a segment of $3\,\mathrm{cm}$ represents $200\cdot3=600\,\mathrm{cm}$, that is, $6\,\mathrm m$, because $1\,\mathrm m=100\,\mathrm{cm}$. The drawing and reality are similar figures with ratio $N$, so areas are in the ratio $1:N^2$, and converting an area uses the square of the factor.

Similarity is also used for indirect measurement, that is, finding a length without measuring it directly. With parallel solar rays and level ground, the height of a vertical object and its shadow form a right triangle similar to the one formed by an object of known height.
:::

:::esempio{titolo="From centimetres on a plan to square metres"}
At scale $1:500$, each centimetre on the plan represents $500\,\mathrm{cm}=5\,\mathrm m$. So a one-centimetre square on the drawing represents a real square with side $5\,\mathrm m$ and area $5\cdot5=25\,\mathrm{m}^2$. If a region occupies $3.2\,\mathrm{cm}^2$ on the plan, its real area is $3.2\cdot25=80\,\mathrm{m}^2$. The same result follows from the area scale in square centimetres, $1:500^2$, which gives $3.2\cdot250\,000=800\,000\,\mathrm{cm}^2$. Since $1\,\mathrm{m}^2=100\cdot100\,\mathrm{cm}^2$, dividing at the end by $100^2$ gives $80\,\mathrm{m}^2$.
:::

:::esempio{titolo="Shadows measured at the same time"}
A vertical pole of height $1.5\,\mathrm m$ casts a horizontal shadow of length $2\,\mathrm m$. At the same moment, a vertical tree on the same ground casts a shadow of length $6\,\mathrm m$. Each object forms a right triangle with its shadow and with the sun ray through its top, because the verticals are perpendicular to the ground. The parallel rays form the same acute angle with the ground, so the triangles are similar by the first criterion. The shadows have ratio $\dfrac62=3$, so the heights are also in the ratio $3$ and the tree is $1.5\cdot3=4.5\,\mathrm m$ tall.

::grafico{assi=0 uguale=1 xmin=-0.86 xmax=11.8 ymin=-0.7 ymax=5.4 linee="0,0 11.5,0;0.5,0 0.5,1.5 2.5,0;4.7,0 4.7,4.5 10.7,0;0.5,0.2 0.7,0.2 0.7,0;4.7,0.22 4.92,0.22 4.92,0" etichette="0.15,0.84,1.5;1.5,-0.34,2;4.33,2.28,4.5;7.7,-0.34,6" titolo="The slanted rays are parallel and the heights are perpendicular to the ground"}
:::

:::attenzione
The shadow triangles are similar when the objects are vertical, the shadows are measured at the same time and in the same direction, and they fall on ground with the same slope. If the pole tilts, the angle at the base changes, and if the shadows fall on surfaces with different slopes, the angle between ray and ground changes, so the measurements need not form two similar triangles. A map scale, on the other hand, has a fixed factor set by the drawing. The units are converted first, then $N$ is used for lengths and $N^2$ for areas.
:::
