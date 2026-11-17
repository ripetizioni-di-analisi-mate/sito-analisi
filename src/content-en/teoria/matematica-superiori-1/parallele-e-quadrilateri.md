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

## Properties and criteria for parallel lines

:::teorema{#regole titolo="Equalities and sums"}
If a transversal cuts two parallel lines, corresponding angles are congruent, alternate interior angles are congruent, and same-side interior angles are supplementary.

If one angle measures $64^\circ$, its corresponding angle and its alternate interior angle both measure $64^\circ$. Its same-side interior angle measures $180^\circ-64^\circ=116^\circ$. Vertical and adjacent angle relationships determine all the other angles.

For the converse, the lines are parallel if a pair of corresponding angles is congruent, if a pair of alternate interior angles is congruent, or if a pair of same-side interior angles sums to $180^\circ$. The equality must involve one of the specified pairs.

For example, if a pair of same-side interior angles measures $(3x+10)^\circ$ and $(2x+20)^\circ$, parallelism requires $5x+30=180$. This gives $x=30$, and the angle measures are $100^\circ$ and $80^\circ$.
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

## Recognizing a parallelogram

:::teorema{#problemi titolo="Sufficient conditions"}
A convex quadrilateral is a parallelogram if it satisfies any of the following conditions.

- Both pairs of opposite sides are congruent.
- One pair of opposite sides is both parallel and congruent.
- The diagonals bisect each other.

To prove the last criterion, assume $AO=OC$ and $BO=OD$. Triangles $AOB$ and $COD$ have two pairs of congruent sides. The angles at $O$ are vertical and are therefore congruent. By SAS, the triangles are congruent. Equality of corresponding angles gives $AB\parallel CD$. Repeating the reasoning for the other pair of triangles gives $AD\parallel BC$.

If the diagonals meet at $O$ with $AO=OC=4\,\mathrm{cm}$ and $BO=OD=6\,\mathrm{cm}$, the quadrilateral is a parallelogram. These data alone imply neither right angles nor four equal sides.
:::

## Rectangles, rhombuses, and squares

:::teorema{#casi-particolari titolo="Additional properties of diagonals"}
The diagonals of a rectangle are congruent and bisect each other. The diagonals of a rhombus are perpendicular, bisect each other, and bisect the angles at the vertices. The diagonals of a square are congruent and perpendicular and bisect each other.

The diagonals of a rectangle can meet at an angle other than $90^\circ$. The diagonals of a rhombus can have different lengths.

In a quadrilateral already known to be a parallelogram, congruent diagonals establish that it is a rectangle. Perpendicular diagonals establish that it is a rhombus. Both criteria require a parallelogram.

::grafico{assi=0 uguale=1 xmin=-1 xmax=8 ymin=-1 ymax=4 linee="0,0 3,0 3,2 0,2 0,0;4,1.5 5.5,3 7,1.5 5.5,0 4,1.5" segmenti="0,0,3,2;3,0,0,2;4,1.5,7,1.5;5.5,0,5.5,3" titolo="The rectangle has congruent diagonals. The square on the right also has perpendicular diagonals"}
:::

## Trapezoids and measurement problems

:::definizione{#applicazioni titolo="Bases, height, and perimeter"}
The parallel sides of a trapezoid are its **bases**. The other two sides are the nonparallel sides. The **height** is the perpendicular distance between the lines containing the bases. An isosceles trapezoid has congruent legs and congruent angles adjacent to the same base.

::grafico{assi=0 uguale=1 xmin=-1 xmax=7 ymin=-1 ymax=4 linee="0,0 6,0 4,3 1,3 0,0;1,0.25 1.25,0.25 1.25,0" segmenti="1,3,1,0" punti="0,0;6,0,pieno,B;4,3,pieno,C;1,3,pieno,D;1,0" etichette="-0.2,-0.35,A;1,-0.35,H" titolo="Bases $AB$ and $DC$ are parallel. $DH$ is the height, perpendicular to $AB$"}

For a parallelogram with consecutive sides $a$ and $b$, the perimeter is $P=2(a+b)$. If $P=34\,\mathrm{cm}$ and $a=7\,\mathrm{cm}$, then $b=\dfrac{34}{2}-7=10\,\mathrm{cm}$.

For a rhombus of perimeter $28\,\mathrm{cm}$, each side measures $\dfrac{28}{4}=7\,\mathrm{cm}$. In a quadrilateral with three angles of $80^\circ$, $95^\circ$, and $105^\circ$, the fourth angle measures $360^\circ-80^\circ-95^\circ-105^\circ=80^\circ$.
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
