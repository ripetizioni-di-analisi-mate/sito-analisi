---
titolo: Parallel lines and quadrilaterals
sommario: Angles made by parallel lines and a transversal, and properties of parallelograms, rectangles, rhombuses, squares, and trapezoids. Classification criteria and problems involving sides and angles.
---

## Parallel lines cut by a transversal

:::definizione{#concetti titolo="Recognising angle positions"}
In the Euclidean plane, that is, the plane of the geometry studied at school, two distinct lines are **parallel** if they do not meet at any point. To state that lines $r$ and $s$ are parallel we write $r\parallel s$, which is read "$r$ is parallel to $s$".

A **transversal** is a third line that cuts both lines. The point where the transversal cuts one of the two lines is called an intersection. At each intersection four angles are formed, so there are eight angles in all.

The angles are compared in pairs, one at the first intersection and one at the second. The name of the pair depends on the position of the two angles.

- Two **corresponding angles** have the same position at the two intersections. For example, both are above their own line and to the right of the transversal.
- Two **alternate interior angles** lie between the two lines and on opposite sides of the transversal.
- Two **same-side interior angles** lie between the two lines and on the same side of the transversal.

The position relative to the lines and the transversal therefore identifies the pair.

In the figure the Greek letters $\alpha$ (alpha) and $\beta$ (beta) denote two angles. Angle $\alpha$ is above line $r$ and to the right of the transversal, and angle $\beta$ is above line $s$ and to the right of the transversal, so the two angles are corresponding angles. Two angles with the same measure are called **congruent**. When $r\parallel s$, angles $\alpha$ and $\beta$ are congruent by the theorem on equalities and sums.

::grafico{assi=0 uguale=1 xmin=-2 xmax=5 ymin=-2 ymax=4 linee="-1.5,0 4.5,0;-1.5,2 4.5,2;-1,-1 3,3" punti="0,0;2,2" etichette="0.7,0.25,α;2.7,2.25,β;-1.2,0.25,r;-1.2,2.25,s" titolo="When $r\parallel s$, the corresponding angles $\alpha$ and $\beta$ are congruent"}
:::

:::esempio{titolo="One transversal, two different pairs"}
An angle is **acute** if it measures less than $90^\circ$, **right** if it measures $90^\circ$, and **obtuse** if it measures more than $90^\circ$ and less than $180^\circ$. In the two figures the horizontal lines are parallel and the transversal meets them at $A$ and at $B$ with a slope of $45^\circ$.

The first figure marks the acute interior angle at $A$, to the right of the transversal, and the acute interior angle at $B$, to the left. The two angles lie between the lines and on opposite sides of the transversal, so they are alternate interior angles. Both measure $45^\circ$ and are labelled $\alpha$.

In the second figure the angle at $A$ stays the same. To find its same-side interior angle, at $B$ we choose the sector, that is, the region of the plane between the two sides of the angle, that lies between the lines and to the right of the transversal like the angle at $A$. This sector is obtuse and is labelled $\beta$. Its measure is $180^\circ-45^\circ=135^\circ$.

::grafico{assi=0 uguale=1 legenda=0 xmin=-1.7 xmax=4.8 ymin=-0.8 ymax=3.1 linee="-1.5,0 4.5,0;-1.5,2 4.5,2;-0.7,-0.7 3,3" curve="0.62*cos(t),0.62*sin(t),0,0.7853981634;2+0.62*cos(t),2+0.62*sin(t),3.1415926536,3.9269908170" punti="0,0;2,2" etichette="-0.22,-0.29,A;2.2,2.3,B;0.96,0.45,α;1.2,1.58,α" titolo="Alternate interior angles occupy equal sectors on opposite sides of the transversal"}

::grafico{assi=0 uguale=1 legenda=0 xmin=-1.7 xmax=4.8 ymin=-0.8 ymax=3.1 linee="-1.5,0 4.5,0;-1.5,2 4.5,2;-0.7,-0.7 3,3" curve="0.62*cos(t),0.62*sin(t),0,0.7853981634;2+0.62*cos(t),2+0.62*sin(t),3.9269908170,6.2831853072" punti="0,0;2,2" etichette="-0.22,-0.29,A;2.2,2.3,B;0.96,0.45,α;2.41,1.14,β" titolo="Same-side interior angles occupy two sectors on the same side of the transversal"}
:::

## Properties and criteria for parallel lines

:::teorema{#regole titolo="Equalities and sums"}
Two angles are **supplementary** when their measures add up to $180^\circ$, as happens for $70^\circ$ and $110^\circ$.

If two parallel lines are cut by a transversal, then:

- corresponding angles are congruent;
- alternate interior angles are congruent;
- same-side interior angles are supplementary.

If one angle measures $64^\circ$, its corresponding angle and its alternate interior angle measure $64^\circ$. Its same-side interior angle measures $180^\circ-64^\circ=116^\circ$.

The other angles are found with two relationships that hold at every intersection. Two **vertical angles** have the same vertex, and the sides of one are the extensions of the sides of the other; two vertical angles are congruent. Two **adjacent angles** have one side in common and the other two sides on the same line, on opposite sides of the vertex. Together they form a **straight angle**, that is, an angle of $180^\circ$, so two adjacent angles are supplementary. At the intersection where one angle measures $64^\circ$, the vertical angle measures $64^\circ$ and the two adjacent angles measure $116^\circ$.

The **converse** also holds, and it is used to prove that two lines are parallel starting from the angles. Two lines cut by a transversal are parallel if one of these conditions is satisfied:

- two corresponding angles are congruent;
- two alternate interior angles are congruent;
- two same-side interior angles add up to $180^\circ$.

The equality or the sum involves one of the three pairs listed.

For example, two same-side interior angles measure $(3x+10)^\circ$ and $(2x+20)^\circ$, where $x$ is a number to be found. The lines are parallel when the two measures add up to $180$:
$$
\begin{aligned}
(3x+10)+(2x+20)&=180\\[6pt]
5x+30&=180\\[6pt]
5x&=150\\[6pt]
x&=30.
\end{aligned}
$$
In the second step the terms with $x$ are added together and the numbers are added together, in the third $30$ is subtracted from both sides of the equals sign, and in the fourth both sides are divided by $5$. With $x=30$ the angles measure $3\cdot30+10=100^\circ$ and $2\cdot30+20=80^\circ$, and indeed $100^\circ+80^\circ=180^\circ$.
:::

:::dimostrazione{titolo="Why parallel lines give equal corresponding angles"}
Let $A$ and $B$ be the intersections of a transversal with two parallel lines. A **translation** is a movement in which all points move in the same direction, the same way along it, and by the same length. The arrow that describes the movement is called the translation vector. Consider the translation that takes $A$ to $B$.

A translation takes every line to a parallel line. The first line passes through $A$, so it is taken to the parallel line through $B$, that is, to the second line. The translation vector lies along the transversal, so the transversal is taken to itself.

The two sides of an angle at $A$ therefore end up in the same position at $B$, and the angle obtained is the corresponding angle of the starting one. A translation preserves angle measures, so the two corresponding angles are congruent.
:::

:::dimostrazione{titolo="From the corresponding-angle test to the other two tests"}
The corresponding-angle test is proved first. Two lines are cut by a transversal at $A$ and at $B$, and an angle at $A$ is congruent to its corresponding angle at $B$. Through point $B$ there is exactly one line parallel to the line through $A$. By the direct property, the parallel forms at $B$ a corresponding angle congruent to the given angle at $A$. The second line also forms at $B$ an angle of that measure in the same sector. A **ray** is one of the two parts into which a point divides a line. The rays that bound the two angles start at $B$, lie on the same side of the transversal, and form the same angle with it, so they coincide. The two lines through $B$ are then the same line, and the second line is parallel to the first.

The other two tests are reduced to the corresponding-angle test. Fix an interior angle at $A$. At $B$ its alternate interior angle is vertical to its corresponding angle, so it has the same measure as the corresponding angle. If the two alternate interior angles are congruent, the two corresponding angles are congruent too, and the corresponding-angle test applies.

Finally, consider two same-side interior angles that add up to $180^\circ$. At $B$ the same-side interior angle is replaced by its adjacent angle that lies between the two lines, on the other side of the transversal. The angle at $A$ and this adjacent angle are both supplementary to the same-side interior angle, so they have the same measure. They are alternate interior angles, so the test just proved applies.
:::

:::attenzione{titolo="Equal measures alone do not identify the type of pair"}
Two vertical angles are congruent at every single intersection, whatever the direction of the second line. Their equality involves only one intersection.

In the figure a horizontal line passes through $A$ and a slanted line passes through $B$. Both meet a vertical transversal. The two right angles marked at $A$ are vertical angles and are equal. The line through $B$ is slanted and the line through $A$ is horizontal, so the two lines are not parallel.

::grafico{assi=0 uguale=1 xmin=-2.5 xmax=3.5 ymin=-1.2 ymax=3.7 linee="-2.3,0 3.3,0;-2.2,1.4 3.2,3.2;0,-0.9 0,3.4;0,0.24 0.24,0.24 0.24,0;-0.24,0 -0.24,-0.24 0,-0.24" punti="0,0;0,2.1333333333" etichette="-0.45,0.35,A;0.35,2.17,B" titolo="The marked angles at A are vertical angles. The two lines have different directions"}
:::

## Quadrilaterals and their classification

:::definizione{#metodo titolo="General properties and families"}
A **quadrilateral** is a polygon with four sides and four vertices. Quadrilateral $ABCD$ has vertices $A$, $B$, $C$, $D$ and sides $AB$, $BC$, $CD$, $DA$. Two sides are **consecutive** if they share a vertex, like $AB$ and $BC$, and **opposite** if they do not, like $AB$ and $CD$. The angles at $A$ and at $B$, vertices of the same side, are consecutive; the angles at $A$ and at $C$ are opposite. A **diagonal** is a segment that joins two opposite vertices. $ABCD$ has two diagonals, $AC$ and $BD$.

A quadrilateral is **convex** when all its interior angles measure less than $180^\circ$; in this case both diagonals lie inside the shape. This chapter considers convex quadrilaterals. A diagonal divides the quadrilateral into two triangles and the interior angles of a triangle add up to $180^\circ$, so the interior angles of a quadrilateral add up to $360^\circ$.

Two segments are congruent when they have the same length.

| Family | Defining property |
|---|---|
| Parallelogram | Has two pairs of parallel opposite sides |
| Rectangle | Is a parallelogram with four right angles |
| Rhombus | Is a parallelogram with four congruent sides |
| Square | Is a parallelogram with four right angles and four congruent sides |
| Trapezoid, under the convention used here | Has exactly one pair of parallel opposite sides |

A square has four right angles, so it is also a rectangle. It has four congruent sides, so it is also a rhombus. It is also a parallelogram. A rectangle with sides $3$ and $2$ meets the definition of a rectangle and has two different side lengths, so it is a rectangle that is not a square.

Some textbooks call a trapezoid any quadrilateral with **at least** one pair of parallel sides. With that definition parallelograms are trapezoids too. Here the convention is exactly one pair.
:::

:::dimostrazione{titolo="The diagonal counts every angle exactly once"}
In the convex quadrilateral $ABCD$, diagonal $AC$ lies inside the shape and divides it into triangles $ABC$ and $ACD$. The diagonal splits the angle at $A$ and the angle at $C$ into two parts. The angles at $B$ and at $D$ stay whole, each in one triangle. The sum of the angles of the two triangles is therefore equal to the sum of the four angles of the quadrilateral, and it is
$$
180^\circ+180^\circ=360^\circ.
$$
For example, if three angles measure $80^\circ$, $95^\circ$, and $110^\circ$, their sum is $285^\circ$ and the fourth angle measures $360^\circ-285^\circ=75^\circ$.
:::

## Properties of parallelograms

:::teorema{#esempi titolo="Sides, angles, and diagonals"}
In a parallelogram:

- opposite sides are congruent;
- opposite angles are congruent;
- consecutive angles are supplementary;
- the diagonals **bisect each other**, that is, each divides the other into two equal parts.

The **midpoint** of a segment is the point that divides it into two equal parts, so the diagonals cut each other at their midpoints.

If $ABCD$ is a parallelogram and the diagonals meet at $O$, then
$$
AB=CD,\quad BC=AD,\quad AO=OC,\quad BO=OD.
$$
The equality $AO=OC$ involves the two halves of diagonal $AC$, and the equality $BO=OD$ the two halves of diagonal $BD$. In the parallelogram in the figure the diagonals have different lengths and meet at an angle other than $90^\circ$.

::grafico{assi=0 uguale=1 xmin=-1 xmax=6.5 ymin=-1 ymax=3.5 linee="0,0 4,0 5.5,2.5 1.5,2.5 0,0" segmenti="0,0,5.5,2.5;4,0,1.5,2.5" punti="0,0;4,0;5.5,2.5,pieno,C;1.5,2.5,pieno,D;2.75,1.25" etichette="-0.2,-0.35,A;4.2,-0.35,B;2.75,1.7,O" titolo="The diagonals of a parallelogram meet at their common midpoint"}

The equality of opposite sides is proved by drawing diagonal $AC$, which divides the parallelogram into triangles $ABC$ and $CDA$. The symbol $\angle BAC$ denotes the angle with vertex $A$ and sides through $B$ and $C$; the middle letter is always the vertex.

- Lines $AB$ and $CD$ are parallel and $AC$ is a transversal, so the alternate interior angles $\angle BAC$ and $\angle DCA$ are congruent.
- Lines $BC$ and $AD$ are parallel and $AC$ is a transversal, so the alternate interior angles $\angle BCA$ and $\angle DAC$ are congruent.
- Side $AC$ is shared by the two triangles.

The ASA congruence criterion (angle, side, angle) states that two triangles are congruent, that is, they can be placed exactly on top of each other, if they have congruent one side and the two angles whose vertices are the endpoints of that side. Triangles $ABC$ and $CDA$ are therefore congruent by ASA. In two congruent triangles the sides that correspond have the same length, so $AB=CD$ and $BC=AD$.
:::

:::dimostrazione{titolo="From parallel sides to a shared midpoint"}
The diagonals meet at $O$, and triangles $ABO$ and $CDO$ are compared. Lines $AB$ and $CD$ are parallel. Diagonal $AC$ is a transversal, so the alternate interior angles $\angle BAO$ and $\angle DCO$ are congruent. Diagonal $BD$ is also a transversal, so the alternate interior angles $\angle ABO$ and $\angle CDO$ are congruent.

Side $AB$ is included between the two angles of the first triangle, side $CD$ between the two angles of the second, and $AB=CD$, as follows from the congruence of the two triangles built on diagonal $AC$. By ASA, triangles $ABO$ and $CDO$ are then congruent, with $A$ corresponding to $C$ and $B$ corresponding to $D$. Corresponding sides are congruent, so $AO=CO$ and $BO=DO$.
:::

:::esempio{titolo="Recovering all four angles"}
In parallelogram $ABCD$ the angle at $A$ measures $58^\circ$, that is, $\angle A=58^\circ$.

Lines $AD$ and $BC$ are parallel and line $AB$ is a transversal. The consecutive angles at $A$ and at $B$ lie between the two parallel lines and on the same side of $AB$, so they are same-side interior angles and are supplementary:
$$
\angle B=180^\circ-58^\circ=122^\circ.
$$
The same reasoning is repeated with transversal $BC$ of the parallel lines $AB$ and $CD$, and then with transversal $CD$ of the parallel lines $BC$ and $AD$:
$$
\angle C=180^\circ-122^\circ=58^\circ,\qquad \angle D=180^\circ-58^\circ=122^\circ.
$$
The opposite angles at $A$ and at $C$ are both supplementary to the angle at $B$, and for this reason they are congruent.
:::

## Recognising a parallelogram

:::teorema{#problemi titolo="Sufficient conditions"}
A condition is **sufficient** when, if it is satisfied, the conclusion is guaranteed. A convex quadrilateral is a parallelogram if it satisfies one of the following conditions.

- Both pairs of opposite sides are congruent.
- One pair of opposite sides is both parallel and congruent.
- The diagonals bisect each other.

The last criterion is proved here. The diagonals meet at $O$ and by hypothesis $AO=OC$ and $BO=OD$. The SAS congruence criterion (side, angle, side) states that two triangles are congruent if they have congruent two sides and the angle included between them. In triangles $AOB$ and $COD$:

- $AO=CO$ and $BO=DO$ by hypothesis;
- the angles $\angle AOB$ and $\angle COD$, included between these sides, are vertical angles and therefore congruent.

By SAS the two triangles are congruent. The angles that correspond are congruent, so $\angle OAB=\angle OCD$. These two angles are alternate interior angles for lines $AB$ and $CD$ cut by transversal $AC$. By the converse, $AB\parallel CD$. Repeating the reasoning for triangles $AOD$ and $COB$ gives $AD\parallel BC$. Both pairs of opposite sides are parallel, so the quadrilateral is a parallelogram.

If the diagonals meet at $O$ with $AO=OC=4\,\mathrm{cm}$ and $BO=OD=6\,\mathrm{cm}$, the quadrilateral is therefore a parallelogram. These data alone guarantee neither right angles nor four equal sides.
:::

:::dimostrazione{titolo="One pair of opposite sides both parallel and congruent"}
By hypothesis $AB\parallel CD$ and $AB=CD$. Diagonal $AC$ is drawn and triangles $BAC$ and $DCA$ are compared.

- Side $AC$ is shared.
- Sides $AB$ and $CD$ are congruent by hypothesis.
- Angles $\angle BAC$ and $\angle DCA$ are alternate interior angles for the parallel lines $AB$ and $CD$ cut by $AC$, so they are congruent. Each of them is included between the sides listed.

By SAS the two triangles are congruent. Hence $\angle BCA=\angle DAC$. These two angles are alternate interior angles for lines $BC$ and $AD$ cut by $AC$. By the converse, $BC\parallel AD$ as well, so the quadrilateral is a parallelogram.
:::

:::osservazione
The first criterion is proved with the SSS congruence criterion (side, side, side), which states that two triangles with their three sides congruent in order are congruent. If both pairs of opposite sides are congruent, triangles $ABC$ and $CDA$ built on diagonal $AC$ have three pairs of congruent sides, so they are congruent by SSS. This gives the equalities $\angle BAC=\angle DCA$ and $\angle BCA=\angle DAC$. The alternate interior angle test, applied twice, gives $AB\parallel CD$ and $BC\parallel AD$.

Two pairs of congruent opposite angles also suffice. In that case $\angle A=\angle C$ and $\angle B=\angle D$, and the four angles add up to $360^\circ$. Therefore
$$
2(\angle A+\angle B)=360^\circ,\qquad \angle A+\angle B=180^\circ.
$$
The consecutive angles at $A$ and at $B$ are same-side interior angles for lines $AD$ and $BC$ cut by $AB$ and are supplementary, so $AD\parallel BC$. In the same way $\angle B+\angle C=180^\circ$ gives $AB\parallel CD$.
:::

## Rectangles, rhombuses, and squares

:::teorema{#casi-particolari titolo="Additional properties of diagonals"}
Rectangles, rhombuses, and squares are parallelograms, so their diagonals bisect each other. Two lines are **perpendicular** when they meet forming four right angles. Each family has one more property.

- In a rectangle the diagonals are congruent and bisect each other.
- In a rhombus the diagonals are perpendicular, bisect each other, and bisect the angles at the vertices. The **angle bisector** of an angle is the ray that divides it into two congruent angles, so each diagonal of the rhombus is the angle bisector of the angles at the two vertices it joins. If an angle of the rhombus measures $70^\circ$, the diagonal starting from that vertex divides it into two angles of $35^\circ$.
- In a square the diagonals are congruent and perpendicular, and they bisect each other.

In the figure, on the left there is a rectangle with sides $3$ and $2$. Its diagonals are congruent and meet at an angle other than $90^\circ$, as in every rectangle that is not a square. In a rhombus that is not a square the diagonals have different lengths. On the right there is a square with one vertex at the top. Its diagonals, one horizontal and one vertical, both measure $3$.

The same properties are used to recognise the shapes. If a quadrilateral is already known to be a parallelogram:

- congruent diagonals guarantee that it is a rectangle;
- perpendicular diagonals guarantee that it is a rhombus.

Both criteria require the quadrilateral to be a parallelogram.

::grafico{assi=0 uguale=1 xmin=-1 xmax=8 ymin=-1 ymax=4 linee="0,0 3,0 3,2 0,2 0,0;4,1.5 5.5,3 7,1.5 5.5,0 4,1.5" segmenti="0,0,3,2;3,0,0,2;4,1.5,7,1.5;5.5,0,5.5,3" titolo="The rectangle has congruent diagonals. The square on the right also has perpendicular diagonals"}
:::

:::dimostrazione{titolo="What the diagonal condition adds"}
The first criterion is proved first. In a parallelogram $ABCD$ with $AC=BD$, triangles $ABC$ and $DCB$ are compared.

- Side $BC$ is shared.
- Sides $AB$ and $DC$ are congruent, because they are opposite sides of a parallelogram.
- Sides $AC$ and $DB$ are the diagonals, congruent by hypothesis.

By SSS the two triangles are congruent, so $\angle ABC=\angle DCB$. These two angles are consecutive in the parallelogram, so they are also supplementary. Two congruent angles that add up to $180^\circ$ measure $90^\circ$ each. Opposite angles of a parallelogram are congruent, so all four angles are right angles and the shape is a rectangle.

The second criterion is proved next. The symbol $\perp$ is read "perpendicular to". In a parallelogram $ABCD$ with $AC\perp BD$, let $O$ be the point where the diagonals meet, and compare triangles $AOB$ and $COB$.

- Side $OB$ is shared.
- $AO=CO$, because the diagonals of a parallelogram bisect each other.
- The angles at $O$, included between these sides, are right angles.

By SAS the two triangles are congruent, so $AB=CB$. Opposite sides of a parallelogram are congruent, that is, $AB=CD$ and $CB=AD$. All four sides then have the same length and the shape is a rhombus.
:::

:::esempio{titolo="A rhombus whose diagonals have different lengths"}
In the figure the horizontal diagonal $AC$ measures $6$ and the vertical diagonal $BD$ measures $4$. The diagonals are perpendicular and meet at $O$, the midpoint of both, so $AO=OC=3$ and $BO=OD=2$.

The four halves form triangles $AOB$, $BOC$, $COD$, and $DOA$. Each has a right angle at $O$ included between a side of length $3$ and a side of length $2$, so the four triangles are congruent by SAS. Their third sides $AB$, $BC$, $CD$, and $DA$ have the same length, so the shape is a rhombus. A rectangle has congruent diagonals, while here they measure $6$ and $4$. The shape is therefore a rhombus that is not a rectangle.

::grafico{assi=0 uguale=1 xmin=-3.8 xmax=3.8 ymin=-2.65 ymax=2.75 linee="-3,0 0,2 3,0 0,-2 -3,0;0.24,0 0.24,0.24 0,0.24" segmenti="-3,0,3,0;0,-2,0,2" etichette="-3.25,0.27,A;0,2.31,B;3.25,0.27,C;0,-2.31,D;0.29,-0.29,O" titolo="The common midpoint O and perpendicular diagonals identify a rhombus"}
:::

## Trapezoids and measurement problems

:::definizione{#applicazioni titolo="Bases, height, and perimeter"}
The parallel sides of a trapezoid are called **bases**. The longer one is the longer base and the shorter one is the shorter base. The other two sides, which are not parallel, are called **legs**. The **height** is the distance between the lines containing the bases, measured along a line perpendicular to the bases. An **isosceles trapezoid** has congruent legs. In an isosceles trapezoid the two angles adjacent to the same base, that is, those whose vertices are the endpoints of that base, are congruent.

In trapezoid $ABCD$ in the figure the longer base is $AB=6$ and the shorter base is $DC=3$. Segment $DH$, perpendicular to $AB$, measures $3$ and is the height of the trapezoid. The legs are $AD$ and $BC$.

::grafico{assi=0 uguale=1 xmin=-1 xmax=7 ymin=-1 ymax=4 linee="0,0 6,0 4,3 1,3 0,0;1,0.25 1.25,0.25 1.25,0" segmenti="1,3,1,0" punti="0,0;6,0,pieno,B;4,3,pieno,C;1,3,pieno,D;1,0" etichette="-0.2,-0.35,A;1,-0.35,H" titolo="Bases $AB$ and $DC$ are parallel. $DH$ is the height, perpendicular to $AB$"}

The **perimeter** of a polygon is the sum of the lengths of its sides. In a parallelogram with consecutive sides $a$ and $b$ each length appears twice, because opposite sides are congruent. The perimeter is therefore $P=2(a+b)$. The sum $a+b$ is half the perimeter and is called the **semiperimeter**. If $P=34\,\mathrm{cm}$ and $a=7\,\mathrm{cm}$, the semiperimeter is $\dfrac{34}{2}=17\,\mathrm{cm}$ and the other side measures
$$
b=\frac{34}{2}-7=17-7=10\,\mathrm{cm}.
$$
A rhombus has four congruent sides, so its perimeter is four times the side. For a rhombus of perimeter $28\,\mathrm{cm}$ each side measures $\dfrac{28}{4}=7\,\mathrm{cm}$.

In a quadrilateral with three angles of $80^\circ$, $95^\circ$, and $105^\circ$, the fourth is found by subtracting the three measures from $360^\circ$:
$$
360^\circ-80^\circ-95^\circ-105^\circ=80^\circ.
$$
:::

:::osservazione{titolo="Side length and perpendicular height"}
The **area** of a shape is the measure of its surface. For a parallelogram with base $b$ and height $h$ the area is $A=bh$. The base is one of the sides, and the height is the distance, measured along a perpendicular, between the line containing the base and the line containing the opposite side.

The formula is proved by enclosing the parallelogram in a rectangle of height $h$. The upper side of the parallelogram is shifted horizontally by a length $u$ from the lower side, so the rectangle has base $b+u$ and area $(b+u)h$. Between the rectangle and the parallelogram there are two right triangles, one on each side. A right triangle has one right angle, and the two sides that form it are called **legs**. Each of the two triangles has legs $u$ and $h$ and area $\dfrac{uh}{2}$. Removing the two triangles from the rectangle leaves
$$
(b+u)h-2\cdot\frac{uh}{2}=bh+uh-uh=bh.
$$
The length $u$ is the **projection** of the slanted side onto the line containing the base. The slanted side is the longest side of the right triangle with legs $u$ and $h$, that is, its **hypotenuse**. By the Pythagorean theorem the square of the hypotenuse is equal to the sum of the squares of the legs. If the slanted side measures $5$ and its projection measures $3$, then $h^2=5^2-3^2=25-9=16$ and the height measures $h=4$.

In a rhombus with diagonals of lengths $d_1$ and $d_2$, the diagonals form four right triangles with legs $\dfrac{d_1}{2}$ and $\dfrac{d_2}{2}$. The area of each is half the product of the legs. Adding the four areas gives
$$
A=4\cdot\frac{1}{2}\cdot\frac{d_1}{2}\cdot\frac{d_2}{2}=\frac{d_1d_2}{2}.
$$
With diagonals of $8\,\mathrm{cm}$ and $6\,\mathrm{cm}$ the area is $\dfrac{8\cdot6}{2}=24\,\mathrm{cm}^2$. The side of the rhombus is the hypotenuse of a triangle with legs $4\,\mathrm{cm}$ and $3\,\mathrm{cm}$, and $4^2+3^2=25=5^2$, so the side measures $5\,\mathrm{cm}$. The equality of the sides is used to find the perimeter, which here is $4\cdot5=20\,\mathrm{cm}$. For the area formula the perpendicular diagonals that bisect each other are enough.
:::

:::dimostrazione{titolo="The area of a trapezoid from a rotated copy"}
Let $B$ be the longer base, $b$ the shorter base, and $h$ the height of a trapezoid. A second copy, rotated by $180^\circ$ around the midpoint of one leg, is joined to the trapezoid. The rotation takes that leg to itself, so the two legs placed side by side coincide.

A rotation by $180^\circ$ takes every line to a parallel line. Along each of the two horizontal edges of the combined shape, a base of length $B$ and a base of length $b$ are therefore placed end to end. The other two outer sides are a leg and its image under the rotation, so they are parallel. The combined shape is therefore a parallelogram with base $B+b$ and height $h$. Its area is $(B+b)h$. The trapezoid takes up half of this area, that is,
$$
A=\frac{(B+b)h}{2}.
$$
In the figure the shaded trapezoid has $B=7$, $b=4$, and $h=3$. The parallelogram has base $11$ and area $33$, so the trapezoid has area $\dfrac{33}{2}=16.5$.

::grafico{assi=0 uguale=1 xmin=-1 xmax=13 ymin=-0.8 ymax=3.9 linee="0,0 11,0 12,3 1,3 0,0" segmenti="7,0,5,3;1,0,1,3" poligoni="0,0 7,0 5,3 1,3" etichette="3.6,-0.38,B;9,-0.38,b;3,3.42,b;8.4,3.42,B;0.59,1.45,h" titolo="A trapezoid and its rotated copy form a parallelogram"}
:::

:::esempio{titolo="Recovering the height from the area"}
A trapezoid has bases of $12\,\mathrm{cm}$ and $8\,\mathrm{cm}$ and an area of $70\,\mathrm{cm}^2$. From the formula $A=\dfrac{(B+b)h}{2}$ the height is found by multiplying the area by $2$ and dividing by the sum of the bases:
$$
h=\frac{2A}{B+b}=\frac{2\cdot70}{12+8}=\frac{140}{20}=7\,\mathrm{cm}.
$$
In the formula $h$ is the perpendicular distance between the bases. A leg that is not perpendicular to the bases is longer than the height, so the length of a leg alone is not a substitute for $h$.
:::

## Checking what follows from the data

:::osservazione{#controlli titolo="A property and its converse"}
Every rectangle has diagonals that bisect each other. The common midpoint of the diagonals, alone, guarantees that the quadrilateral is a parallelogram. To conclude that it is a rectangle, additional information is needed, such as a right angle or congruent diagonals.

A square has all the properties of a rhombus. A rhombus is also a square when it has at least one right angle. Opposite angles are congruent and consecutive angles are supplementary. If one angle measures $90^\circ$, the opposite angle measures $90^\circ$ and the two consecutive angles measure $180^\circ-90^\circ=90^\circ$. One right angle therefore gives the other three.
:::

:::attenzione{titolo="Congruent diagonals in a trapezoid"}
Congruent diagonals guarantee a rectangle only in a parallelogram. In the isosceles trapezoid in the figure, sides $AB$ and $CD$ are parallel and have different lengths, $6$ and $3$. Triangles $ABC$ and $BAD$ are compared.

- Side $AB$ is shared.
- The legs $BC$ and $AD$ are congruent.
- Angles $\angle ABC$ and $\angle BAD$, adjacent to the longer base and included between the sides listed, are congruent.

The two triangles are therefore congruent by SAS, which gives $AC=BD$. The trapezoid has congruent diagonals and exactly one pair of parallel sides, so it is not a rectangle.

::grafico{assi=0 uguale=1 xmin=-1 xmax=7 ymin=-0.9 ymax=3.8 linee="0,0 6,0 4.5,3 1.5,3 0,0" segmenti="0,0,4.5,3;6,0,1.5,3" punti="0,0;6,0;4.5,3;1.5,3" etichette="-0.15,-0.35,A;6.15,-0.35,B;4.67,3.35,C;1.33,3.35,D" titolo="The diagonals of an isosceles trapezoid are congruent"}
:::

:::attenzione{titolo="Perpendicular diagonals with only one midpoint"}
In the quadrilateral in the figure, diagonals $AC$ and $BD$ are perpendicular and meet at $O$. The horizontal diagonal $AC$ cuts $BD$ at its midpoint, since $BO=OD=3$. On diagonal $AC$, however, $AO=4$ and $OC=2$, so $O$ is not the midpoint of $AC$. In a parallelogram the meeting point is the midpoint of both diagonals, so this shape is not a parallelogram.

The shape is not a rhombus either, because by the Pythagorean theorem $AB^2=4^2+3^2=25$ and $BC^2=2^2+3^2=13$. For this reason perpendicular diagonals are sufficient to recognise a rhombus only after the shape has been proved to be a parallelogram.

::grafico{assi=0 uguale=1 xmin=-4.8 xmax=2.8 ymin=-3.6 ymax=3.7 linee="-4,0 0,3 2,0 0,-3 -4,0;0.25,0 0.25,0.25 0,0.25" segmenti="-4,0,2,0;0,-3,0,3" etichette="-4.26,0.28,A;0,3.3,B;2.28,0.3,C;0,-3.25,D;0.3,-0.27,O" titolo="O is the midpoint of BD. The two segments on AC have different lengths"}
:::
