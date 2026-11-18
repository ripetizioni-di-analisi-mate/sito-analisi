---
titolo: Parallel lines and quadrilaterals
sommario: Angles made by parallel lines and a transversal, and properties of parallelograms, rectangles, rhombuses, squares, and trapezoids. Classification criteria and problems involving sides and angles.
---

## Parallel lines cut by a transversal

:::definizione{#concetti titolo="Recognizing angle positions"}
In the Euclidean plane, two distinct lines are **parallel** if they never meet. A transversal that crosses them forms four angles at each of the two intersections.

**Corresponding angles** have the same position at the two intersections. **Alternate interior angles** lie between the two lines and on opposite sides of the transversal. **Same-side interior angles** lie between the two lines and on the same side of the transversal. The positions relative to the lines and the transversal identify which pair to use.

In the figure, angles $\alpha$ and $\beta$ are both above the horizontal line and on the same side of the transversal, so they are corresponding angles.

::grafico{assi=0 uguale=1 xmin=-2 xmax=5 ymin=-2 ymax=4 linee="-1.5,0 4.5,0;-1.5,2 4.5,2;-1,-1 3,3" punti="0,0;2,2" etichette="0.7,0.25,α;2.7,2.25,β;-1.2,0.25,r;-1.2,2.25,s" titolo="When $r\parallel s$, the corresponding angles $\alpha$ and $\beta$ are congruent"}
:::

:::esempio{titolo="One transversal, two different pairs"}
Label the intersections $A$ and $B$. The acute interior angle at $A$ and the acute interior angle at $B$ are alternate interior angles because they lie on opposite sides of the transversal. To find the same-side interior angle paired with the angle at $A$, choose the obtuse sector at $B$ on the same side of the transversal. The angle at $A$ stays the same in both diagrams.

::grafico{assi=0 uguale=1 legenda=0 xmin=-1.7 xmax=4.8 ymin=-0.8 ymax=3.1 linee="-1.5,0 4.5,0;-1.5,2 4.5,2;-0.7,-0.7 3,3" curve="0.62*cos(t),0.62*sin(t),0,0.7853981634;2+0.62*cos(t),2+0.62*sin(t),3.1415926536,3.9269908170" punti="0,0;2,2" etichette="-0.22,-0.29,A;2.2,2.3,B;0.96,0.45,α;1.2,1.58,α" titolo="Alternate interior angles occupy equal sectors on opposite sides of the transversal"}

::grafico{assi=0 uguale=1 legenda=0 xmin=-1.7 xmax=4.8 ymin=-0.8 ymax=3.1 linee="-1.5,0 4.5,0;-1.5,2 4.5,2;-0.7,-0.7 3,3" curve="0.62*cos(t),0.62*sin(t),0,0.7853981634;2+0.62*cos(t),2+0.62*sin(t),3.9269908170,6.2831853072" punti="0,0;2,2" etichette="-0.22,-0.29,A;2.2,2.3,B;0.96,0.45,α;2.41,1.14,β" titolo="Same-side interior angles occupy two sectors on the same side of the transversal"}
:::

## Properties and criteria for parallel lines

:::teorema{#regole titolo="Equalities and sums"}
If a transversal cuts two parallel lines, corresponding angles are congruent, alternate interior angles are congruent, and same-side interior angles are supplementary.

If one angle measures $64^\circ$, its corresponding angle and its alternate interior angle both measure $64^\circ$. Its same-side interior angle measures $180^\circ-64^\circ=116^\circ$. Vertical and adjacent angle relationships determine all the other angles.

For the converse, the lines are parallel if a pair of corresponding angles is congruent, if a pair of alternate interior angles is congruent, or if a pair of same-side interior angles sums to $180^\circ$. The equality must involve one of the specified pairs.

For example, if a pair of same-side interior angles measures $(3x+10)^\circ$ and $(2x+20)^\circ$, parallelism requires $5x+30=180$. This gives $x=30$, and the angle measures are $100^\circ$ and $80^\circ$.
:::

:::dimostrazione{titolo="Why parallel lines give equal corresponding angles"}
Let $A$ and $B$ be the two intersections of a transversal with parallel lines. Translating $A$ to $B$ takes the first line to the parallel line through $B$. It maps the transversal to itself because the translation vector lies along it. The two rays of an angle at $A$ therefore move to matching positions at $B$. A translation preserves angle measures, which gives the equality.
:::

:::dimostrazione{titolo="From the corresponding-angle test to the other two tests"}
Suppose the transversal meets the two lines at $A$ and $B$. Through $B$, draw the unique parallel to the line through $A$. By the direct property, it makes a corresponding angle equal to the given angle at $A$. If the second line makes that same angle in the corresponding position at $B$, the ray forming the angle has the same direction. The two lines through $B$ must coincide.

Start with an interior angle at $A$. At $B$, its alternate interior angle is vertically opposite to its corresponding angle. They have the same measure, so equal alternate interior angles give equal corresponding angles. When two same-side interior angles add to $180^circ$, replace one by its adjacent supplementary angle. That gives two equal angles in corresponding positions.
:::

:::attenzione{titolo="Equal measures alone do not identify the type of pair"}
Vertical angles are equal at any individual intersection, regardless of the direction of the second line. For example, a horizontal line through $A$ and a slanted line through $B$ both meet a vertical transversal. The two opposite right angles at $A$ are equal, while the slope at $B$ shows that the two lines are not parallel.

::grafico{assi=0 uguale=1 xmin=-2.5 xmax=3.5 ymin=-1.2 ymax=3.7 linee="-2.3,0 3.3,0;-2.2,1.4 3.2,3.2;0,-0.9 0,3.4;0,0.24 0.24,0.24 0.24,0;-0.24,0 -0.24,-0.24 0,-0.24" punti="0,0;0,2.1333333333" etichette="-0.45,0.35,A;0.35,2.17,B" titolo="The marked angles at A are vertical angles. The two lines have different directions"}
:::

## Quadrilaterals and their classification

:::definizione{#metodo titolo="General properties and families"}
A quadrilateral has four sides and two diagonals. This chapter considers convex quadrilaterals. A diagonal divides a quadrilateral into two triangles, so the interior angles sum to $360^\circ$.

| Family | Defining property |
|---|---|
| Parallelogram | Has two pairs of parallel opposite sides |
| Rectangle | Is a parallelogram with four right angles |
| Rhombus | Is a parallelogram with four congruent sides |
| Square | Is a parallelogram with four right angles and four congruent sides |
| Trapezoid, under the convention used here | Has exactly one pair of parallel opposite sides |

A square is also a rectangle, a rhombus, and a parallelogram. A rectangle with sides $3$ and $2$ meets the definition of a rectangle even though it has two different side lengths. Some textbooks require **at least** one pair of parallel sides for a trapezoid, including parallelograms. Here the convention is exactly one pair.
:::

:::dimostrazione{titolo="The diagonal counts every angle exactly once"}
In the convex quadrilateral $ABCD$, segment $AC$ lies inside the shape. Triangles $ABC$ and $ACD$ split the angles at $A$ and $C$ into two parts, while keeping the angles at $B$ and $D$ whole. Adding the two triangle totals gives $180^circ+180^circ=360^circ$. For example, angles of $80^circ$, $95^circ$, and $110^circ$ leave $75^circ$ for the fourth.
:::

## Properties of parallelograms

:::teorema{#esempi titolo="Sides, angles, and diagonals"}
In a parallelogram, opposite sides are congruent, opposite angles are congruent, and consecutive angles are supplementary. The diagonals **bisect each other**. Each diagonal meets the other at its midpoint.

If $ABCD$ is a parallelogram and the diagonals meet at $O$, then
$$
AB=CD,\quad BC=AD,\quad AO=OC,\quad BO=OD.
$$
The equalities $AO=OC$ and $BO=OD$ separately relate the two halves of each diagonal. In a general parallelogram, the diagonals can have different lengths and can meet at an angle other than $90^\circ$.

::grafico{assi=0 uguale=1 xmin=-1 xmax=6.5 ymin=-1 ymax=3.5 linee="0,0 4,0 5.5,2.5 1.5,2.5 0,0" segmenti="0,0,5.5,2.5;4,0,1.5,2.5" punti="0,0;4,0;5.5,2.5,pieno,C;1.5,2.5,pieno,D;2.75,1.25" etichette="-0.2,-0.35,A;4.2,-0.35,B;2.75,1.7,O" titolo="The diagonals of a parallelogram meet at their common midpoint"}

To justify the equality of opposite sides, draw diagonal $AC$. Parallelism gives two pairs of congruent alternate interior angles, and side $AC$ is shared. The two triangles are congruent by ASA, so their corresponding sides are congruent.
:::

:::dimostrazione{titolo="From parallel sides to a shared midpoint"}
Lines $AB$ and $CD$ are parallel. Diagonals $AC$ and $BD$ cross them and give two pairs of congruent alternate interior angles, $angle BAO,angle DCO$ and $angle ABO,angle CDO$. Included side $AB$ is congruent to $CD$, as follows from the congruence of the two triangles built on diagonal $AC$. By ASA, $ABO$ and $CDO$ are therefore congruent, with $A$ corresponding to $C$ and $B$ to $D$. This gives $AO=CO$ and $BO=DO$.
:::

:::esempio{titolo="Recovering all four angles"}
If $angle A=58^circ$, transversal $AB$ crosses $AD$ and $BC$, forming consecutive angles $A$ and $B$. They are same-side interior angles, so $B=122^circ$. Repeating the argument on $BC$ and then $CD$ gives $C=58^circ$ and $D=122^circ$. The same pattern explains why opposite angles are equal: each supplements the same consecutive angle.
:::

## Recognizing a parallelogram

:::teorema{#problemi titolo="Sufficient conditions"}
A convex quadrilateral is a parallelogram if it satisfies any of the following conditions.

- Both pairs of opposite sides are congruent.
- One pair of opposite sides is both parallel and congruent.
- The diagonals bisect each other.

To prove the last criterion, assume $AO=OC$ and $BO=OD$. Triangles $AOB$ and $COD$ have two pairs of congruent sides. The angles at $O$ are vertical and are therefore congruent. By SAS, the triangles are congruent. Equality of corresponding angles gives $AB\parallel CD$. Repeating the reasoning for the other pair of triangles gives $AD\parallel BC$.

If the diagonals meet at $O$ with $AO=OC=4\,\mathrm{cm}$ and $BO=OD=6\,\mathrm{cm}$, the quadrilateral is a parallelogram. These data alone imply neither right angles nor four equal sides.
:::

:::dimostrazione{titolo="One pair of opposite sides both parallel and congruent"}
Assume $ABparallel CD$ and $AB=CD$. Diagonal $AC$ is shared by triangles $BAC$ and $DCA$. Angles $angle BAC$ and $angle DCA$ are alternate interior angles and are therefore congruent. The triangles are congruent by SAS. Hence $angle BCA=angle DAC$, a pair of alternate interior angles for lines $BC$ and $AD$ cut by $AC$. The converse angle test also gives $BCparallel AD$.
:::

:::osservazione
If both pairs of opposite sides are congruent, the two triangles on diagonal $AC$ have three pairs of congruent sides and SSS applies. The resulting angle equalities let us use the alternate interior angle test twice. Two pairs of equal opposite angles also suffice. In that case $2(angle A+angle B)=360^circ$, so each consecutive pair of angles is supplementary.
:::

## Rectangles, rhombuses, and squares

:::teorema{#casi-particolari titolo="Additional properties of diagonals"}
The diagonals of a rectangle are congruent and bisect each other. The diagonals of a rhombus are perpendicular, bisect each other, and bisect the angles at the vertices. The diagonals of a square are congruent and perpendicular and bisect each other.

The diagonals of a rectangle can meet at an angle other than $90^\circ$. The diagonals of a rhombus can have different lengths.

In a quadrilateral already known to be a parallelogram, congruent diagonals establish that it is a rectangle. Perpendicular diagonals establish that it is a rhombus. Both criteria require a parallelogram.

::grafico{assi=0 uguale=1 xmin=-1 xmax=8 ymin=-1 ymax=4 linee="0,0 3,0 3,2 0,2 0,0;4,1.5 5.5,3 7,1.5 5.5,0 4,1.5" segmenti="0,0,3,2;3,0,0,2;4,1.5,7,1.5;5.5,0,5.5,3" titolo="The rectangle has congruent diagonals. The square on the right also has perpendicular diagonals"}
:::

:::dimostrazione{titolo="What the diagonal condition adds"}
In a parallelogram with $AC=BD$, compare triangles $ABC$ and $DCB$. They share side $BC$, have $AB=DC$, and have equal diagonals. They are congruent by SSS. The consecutive angles $angle ABC$ and $angle DCB$ are therefore equal and supplementary, so both are right angles.

If instead $ACperp BD$, label their intersection $O$. Triangles $AOB$ and $COB$ have a right angle at $O$, share side $OB$, and satisfy $AO=CO$ by the parallelogram property. By SAS, $AB=CB$. Since opposite sides are already congruent, all four sides are congruent.
:::

:::esempio{titolo="A rhombus whose diagonals have different lengths"}
The horizontal and vertical diagonals in the diagram have lengths $6$ and $4$. Their four halves form four right triangles congruent by SAS, so the shape is a rhombus. The different lengths rule out a rectangle.

::grafico{assi=0 uguale=1 xmin=-3.8 xmax=3.8 ymin=-2.65 ymax=2.75 linee="-3,0 0,2 3,0 0,-2 -3,0;0.24,0 0.24,0.24 0,0.24" segmenti="-3,0,3,0;0,-2,0,2" etichette="-3.25,0.27,A;0,2.31,B;3.25,0.27,C;0,-2.31,D;0.29,-0.29,O" titolo="The common midpoint O and perpendicular diagonals identify a rhombus"}
:::

## Trapezoids and measurement problems

:::definizione{#applicazioni titolo="Bases, height, and perimeter"}
The parallel sides of a trapezoid are its **bases**. The other two sides are the nonparallel sides. The **height** is the perpendicular distance between the lines containing the bases. An isosceles trapezoid has congruent legs and congruent angles adjacent to the same base.

::grafico{assi=0 uguale=1 xmin=-1 xmax=7 ymin=-1 ymax=4 linee="0,0 6,0 4,3 1,3 0,0;1,0.25 1.25,0.25 1.25,0" segmenti="1,3,1,0" punti="0,0;6,0,pieno,B;4,3,pieno,C;1,3,pieno,D;1,0" etichette="-0.2,-0.35,A;1,-0.35,H" titolo="Bases $AB$ and $DC$ are parallel. $DH$ is the height, perpendicular to $AB$"}

For a parallelogram with consecutive sides $a$ and $b$, the perimeter is $P=2(a+b)$. If $P=34\,\mathrm{cm}$ and $a=7\,\mathrm{cm}$, then $b=\dfrac{34}{2}-7=10\,\mathrm{cm}$.

For a rhombus of perimeter $28\,\mathrm{cm}$, each side measures $\dfrac{28}{4}=7\,\mathrm{cm}$. In a quadrilateral with three angles of $80^\circ$, $95^\circ$, and $105^\circ$, the fourth angle measures $360^\circ-80^\circ-95^\circ-105^\circ=80^\circ$.
:::

:::osservazione{titolo="Side length and perpendicular height"}
A parallelogram with base $b$ and height $h$ has area $A=bh$. The height is the perpendicular distance between the lines containing the chosen parallel sides. To prove the formula, enclose the parallelogram in a rectangle of height $h$. If the upper side is shifted horizontally by a distance $u$ from the lower side, the rectangle has base $b+u$. Remove the two right triangles with legs $u$ and $h$, one from each side. The remaining area is $(b+u)h-2(uh/2)=bh$.

In a rhombus the diagonals of lengths $d_1$ and $d_2$ form four right triangles with legs $d_1/2$ and $d_2/2$. Adding the four areas gives $A=d_1d_2/2$. Congruent sides determine the perimeter from one side length. This area formula follows from the perpendicular diagonals bisecting each other.
:::

:::dimostrazione{titolo="The area of a trapezoid from a rotated copy"}
Join a trapezoid to a copy rotated by $180^circ$ around the midpoint of one leg. The two copies of that leg line up. Along each outer horizontal edge, a long base $B$ joins a short base $b$. The other two outer sides are parallel after the rotation, so the resulting shape is a parallelogram with base $B+b$ and height $h$. The trapezoid takes up half its area, or $dfrac{(B+b)h}{2}$.

::grafico{assi=0 uguale=1 xmin=-1 xmax=13 ymin=-0.8 ymax=3.9 linee="0,0 11,0 12,3 1,3 0,0" segmenti="7,0,5,3;1,0,1,3" poligoni="0,0 7,0 5,3 1,3" etichette="3.6,-0.38,B;9,-0.38,b;3,3.42,b;8.4,3.42,B;0.59,1.45,h" titolo="A trapezoid and its rotated copy form a parallelogram"}
:::

:::esempio{titolo="Recovering the height from the area"}
For a trapezoid with bases of $12,mathrm{cm}$ and $8,mathrm{cm}$ and an area of $70,mathrm{cm}^2$, the height is $2cdot70/(12+8)=7,mathrm{cm}$. The formula uses the perpendicular distance between the bases, so the length of a slanted leg alone cannot be substituted for $h$.
:::

## Checking what follows from the data

:::osservazione{#controlli titolo="A property and its converse"}
A common midpoint of the diagonals guarantees that the quadrilateral is a parallelogram. Recognizing a rectangle requires additional information, such as a right angle or congruent diagonals.

A square has all the properties of a rhombus. To determine whether a rhombus is also a square, check whether it has at least one right angle. Opposite angles are congruent and consecutive angles are supplementary, so one right angle forces the other three to be right.
:::

:::attenzione{titolo="Congruent diagonals in a trapezoid"}
In the isosceles trapezoid shown, $AB$ and $CD$ are parallel and have different lengths. Triangles $ABC$ and $BAD$ share side $AB$, have congruent sides $BC$ and $AD$, and have congruent angles at the longer base. They are congruent by SAS, giving $AC=BD$. The trapezoid has congruent diagonals and exactly one pair of parallel sides.

::grafico{assi=0 uguale=1 xmin=-1 xmax=7 ymin=-0.9 ymax=3.8 linee="0,0 6,0 4.5,3 1.5,3 0,0" segmenti="0,0,4.5,3;6,0,1.5,3" punti="0,0;6,0;4.5,3;1.5,3" etichette="-0.15,-0.35,A;6.15,-0.35,B;4.67,3.35,C;1.33,3.35,D" titolo="The diagonals of an isosceles trapezoid are congruent"}
:::

:::attenzione{titolo="Perpendicular diagonals with only one midpoint"}
In the quadrilateral shown, horizontal diagonal $AC$ crosses $BD$ at its midpoint, but $AO=4$ and $OC=2$. The diagonals are perpendicular. Their intersection is not the midpoint of both diagonals, as a parallelogram would require. This is why perpendicularity identifies a rhombus only after the figure is known to be a parallelogram.

::grafico{assi=0 uguale=1 xmin=-4.8 xmax=2.8 ymin=-3.6 ymax=3.7 linee="-4,0 0,3 2,0 0,-3 -4,0;0.25,0 0.25,0.25 0,0.25" segmenti="-4,0,2,0;0,-3,0,3" etichette="-4.26,0.28,A;0,3.3,B;2.28,0.3,C;0,-3.25,D;0.3,-0.27,O" titolo="O is the midpoint of BD. The two segments on AC have different lengths"}
:::
