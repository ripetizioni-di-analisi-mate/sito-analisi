---
titolo: "Plane geometry and triangles"
sommario: "Segments, angles, congruence, and triangle constructions, with proofs and counterexamples."
---

## Points, lines, and segments

:::definizione{#concetti titolo="Starting with two distinct points"}

A **line** is a straight path that continues without end in both directions. Points are named with capital letters. Through two distinct points $A$ and $B$, that is, two points that do not coincide, there is exactly one line, called line $AB$.

The same two points also determine:

- the **ray** starting at $A$ and passing through $B$ is the part of the line that begins at $A$ and continues without end on the side of $B$. Point $A$ is the **origin** of the ray;
- the **segment** $AB$ is the part of the line made up of $A$, $B$, and the points between them. The points $A$ and $B$ are the **endpoints** of the segment.

The notation $AB$ denotes the segment and, in an equality such as $AB=6$, its length, measured for example in centimetres (symbol $\mathrm{cm}$). The **distance** between two points is the length of the segment joining them.

Three or more points are **collinear** if they belong to the same line.

A point $M$ of segment $AB$ divides it into the parts $AM$ and $MB$, and the length of the segment is the sum of their lengths:

$$
AB=AM+MB.
$$

The **midpoint** of $AB$ is the point $M$ of the segment for which $AM=MB$. Each part is therefore half of the segment:

$$
AM=MB=\frac{AB}{2}.
$$

::grafico{assi=0 uguale=1 xmin=-0.8 xmax=8.8 ymin=-0.85 ymax=0.85 linee="0,0 8,0" punti="0,0;3,0;6,0;8,0" etichette="0,-0.44,A;3,-0.44,M;6,-0.44,B;8,-0.44,C;1.5,0.36,3;4.5,0.36,3;7,0.36,2" titolo="$M$ is the midpoint of $AB$, and $AC=AB+BC$"}

In the figure $AB=6$ and $M$ is the midpoint of $AB$, so $AM=MB=\dfrac{6}{2}=3$. Point $B$ lies between $A$ and $C$, so $AC=AB+BC=6+2=8$.

Knowing only that $A,B,C$ are collinear leaves open the order of the points on the line, on which the sum to write depends. If $C$ lies between $A$ and $B$, then $AB=AC+CB$. With $AB=8$ and $AC=5$, if $C$ lies between $A$ and $B$ then $BC=8-5=3$, while if $A$ lies between $B$ and $C$ then $BC=8+5=13$.

In the definition of midpoint, belonging to the segment is necessary, because there are also points off line $AB$ at the same distance from $A$ and from $B$.

:::

## Angle relationships

::::teorema{#regole titolo="Complementary, supplementary, and vertical angles"}

An **angle** is the part of the plane between two rays that have the same origin. The two rays are the **sides** of the angle and their common origin is the **vertex**. The **measure** of an angle tells how far apart its sides are opened and is expressed in degrees (symbol $^\circ$).

Angles are named with the lower-case Greek letters $\alpha$ (alpha), $\beta$ (beta), $\gamma$ (gamma), $\delta$ (delta). The angle with vertex $O$ whose sides pass through $A$ and $B$ is written $\widehat{AOB}$, with the letter of the vertex in the middle. Two angles are **congruent** if they have the same measure. Two segments are congruent if they have the same length.

Angles are named according to their measure.

- An **acute** angle is less than $90^\circ$, for example $40^\circ$.
- A **right** angle measures $90^\circ$.
- An **obtuse** angle is greater than $90^\circ$ and less than $180^\circ$, for example $130^\circ$.
- A **straight** angle measures $180^\circ$. Its sides are **opposite rays**, that is, two rays with the same origin that together form a line.
- A **full turn** measures $360^\circ$.

The following relationships hold between two angles.

- Two angles are **complementary** if their measures add to $90^\circ$. Angles of $23^\circ$ and $67^\circ$ are complementary, because $23^\circ+67^\circ=90^\circ$.
- Two angles are **supplementary** if their measures add to $180^\circ$.
- Two angles are **consecutive** if they have the same vertex and one side in common, and lie on opposite sides of that common side.
- Two angles form a **linear pair** if they are consecutive and their two other sides are opposite rays. Together they form a straight angle, so the two angles of a linear pair are supplementary.
- Two **intersecting** lines, that is, two lines that meet at exactly one point, form four angles around that point. Two of these angles are **vertical angles** if the sides of one are the rays opposite to the sides of the other. Two vertical angles are congruent.

Two lines are **perpendicular** if they meet forming four right angles.

:::dimostrazione

In the figure the two lines meet at $O$. Angles $\alpha$ and $\gamma$ are vertical angles, and angle $\beta$ forms a linear pair with each of them.

Angles $\alpha$ and $\beta$ form a linear pair, so $\alpha+\beta=180^\circ$. Angles $\beta$ and $\gamma$ also form a linear pair, so $\beta+\gamma=180^\circ$. The two sums are therefore equal, $\alpha+\beta=\beta+\gamma$, and subtracting $\beta$ on the left and on the right of the equals sign leaves $\alpha=\gamma$.

The reasoning also holds when the two lines are perpendicular and all four angles measure $90^\circ$.

:::

::grafico{assi=0 uguale=1 xmin=-3 xmax=3 ymin=-2.25 ymax=2.25 linee="-2.7,0 2.7,0;-2.4,-1.75 2.4,1.75" punti="0,0" etichette="1.35,0.43,α;-0.28,1.05,β;-1.35,-0.58,γ;0.3,-0.25,O" titolo="Angles $\alpha$ and $\gamma$ are each supplementary to $\beta$"}

::::

:::esempio{titolo="Bisectors and linear pairs"}

The **bisector** of an angle is the ray that starts at the vertex, lies inside the angle, and divides it into two congruent angles. If the angle measures $68^\circ$, each part measures $\dfrac{68^\circ}{2}=34^\circ$.

Extending one side of the $68^\circ$ angle past the vertex gives the angle that forms a linear pair with it, that is, its supplement, which measures $180^\circ-68^\circ=112^\circ$. Its bisector divides it into two parts of $\dfrac{112^\circ}{2}=56^\circ$.

The angle between the two bisectors is made up of the two halves next to the shared side, so it measures $34^\circ+56^\circ=90^\circ$.

:::

## Triangles and congruence criteria

:::definizione{titolo="Vertices and correspondence"}

A **triangle** is the figure formed by three non-collinear points, the **vertices**, and the three segments joining them, the **sides**. The triangle with vertices $A$, $B$, $C$ is written $ABC$. Its **interior angles** have their vertices at $A$, $B$, and $C$. The angle at $A$ is written $\widehat A$ or $\widehat{BAC}$.

Each side is **opposite** the vertex that does not belong to it and the angle at that vertex. Side $BC$ is opposite vertex $A$. The **perimeter** is the sum of the lengths of the three sides. A triangle with sides of $3$, $4$, and $5$ centimetres has perimeter $3+4+5=12\,\mathrm{cm}$.

By its sides, a triangle is

- **scalene** if the three sides have different lengths, such as $3$, $4$, $5$;
- **isosceles** if at least two sides are congruent, such as $5$, $5$, $6$;
- **equilateral** if all three sides are congruent, such as $4$, $4$, $4$. An equilateral triangle is therefore also isosceles.

By its angles, a triangle is

- **acute** if all three angles are acute;
- **right** if one angle is a right angle. The two sides that form the right angle are called **legs**, and the side opposite the right angle is called the **hypotenuse**;
- **obtuse** if one angle is obtuse.

Two triangles are **congruent** if they can be placed one on top of the other so that they coincide point by point. This is done with **rigid motions**, which leave lengths and angle measures unchanged: the translation (the figure slides without turning), the rotation around a point, and the reflection over a line, as in a mirror. The sides and angles that coincide when the triangles are placed one on the other are called **corresponding** and are congruent.

The symbol $\cong$ is read "is congruent to". In the notation $ABC\cong DEF$ the order of the letters shows which vertices are matched. Vertex $A$ corresponds to $D$, $B$ to $E$, and $C$ to $F$. Consequently side $AB$ corresponds to $DE$, side $BC$ to $EF$, and side $AC$ to $DF$. The same congruence is also written $BCA\cong EFD$, because the order of the vertices has changed in the same way in both triangles.

:::

::::teorema{#metodo titolo="Sufficient data for congruence"}

A triangle has six elements, three sides and three angles. A **congruence criterion** is a set of three equalities between corresponding elements that is enough to conclude that two triangles are congruent. Each of the three criteria has an abbreviation in which S stands for side and A stands for angle. The order of the letters shows the position of the elements. In SAS the angle lies between the two sides, and in ASA the side lies between the two angles.

| Criterion | Data to check |
|---|---|
| Side-angle-side, SAS | Two sides and the included angle |
| Angle-side-angle, ASA | One side and the two angles at its endpoints |
| Side-side-side, SSS | All three sides |

The **included angle** between two sides is the angle whose vertex is the point common to the two sides. In triangle $ABC$ the included angle between $AB$ and $AC$ is the angle at $A$.

The equalities always concern corresponding elements. Once congruence is established, the other three pairs of corresponding elements are congruent as well.

:::dimostrazione

The idea is to show that the data of each criterion leave only one possible position for the third vertex.

One side of the first triangle is placed on the corresponding side of the second, which has the same length. The line of this side divides the plane into two parts, called **half-planes**. The third vertices of the two triangles are brought into the same half-plane, reflecting one of the triangles over that line if needed.

- **SAS.** The included angle fixes the ray, starting at an endpoint of the matched side, on which the second side lies. On a ray there is only one point at a given distance from the origin. The length of the second side therefore fixes the third vertex.
- **ASA.** The two angles at the endpoints of the matched side fix two rays, one starting at each endpoint. Two rays lying on different lines have at most one point in common, that is, one or none. A common point exists, because the triangles exist, and that point is the third vertex.
- **SSS.** The lengths of the other two sides are the distances from the third vertex to the two endpoints of the matched side. The **circle** with centre $P$ and radius $r$ is made up of the points at distance $r$ from $P$. The third vertex therefore belongs to two circles, whose centres are the two endpoints and whose radii are the two lengths. Two such circles have at most one common point in each half-plane. The two points, one in each half-plane, are mirror images over the line of the side, so the two triangles obtained are congruent.

In all three cases the third vertices coincide, so the two triangles lie exactly one on the other and are therefore congruent.

:::

::::

:::esempio{titolo="Matching sides and vertices"}

In the two triangles in the first figure, $AB=DE=3$, $AC=DF=2$, and the angles at $A$ and $D$ are right angles. Each of the two right angles is included between the two given sides, so by SAS we have $ABC\cong DEF$. Sides $BC$ and $EF$ join corresponding vertices, hence $BC=EF$, even without knowing their length.

::grafico{assi=0 uguale=1 xmin=-0.9 xmax=9 ymin=-0.85 ymax=2.9 linee="0,0 3,0 0,2 0,0;5,0 8,0 5,2 5,0;0,0.25 0.25,0.25 0.25,0;5,0.25 5.25,0.25 5.25,0" punti="0,0;3,0;0,2;5,0;8,0;5,2" etichette="-0.15,-0.42,A;3.1,-0.42,B;-0.18,2.35,C;4.85,-0.42,D;8.1,-0.42,E;4.82,2.35,F;1.5,-0.42,3;6.5,-0.42,3;-0.45,1,2;4.55,1,2" titolo="The right angles lie between the two given sides"}

The second figure shows the construction of a triangle with side $AB=6$ and the other two sides of length $5$. The third vertex is at distance $5$ from $A$ and from $B$, so it belongs to the two circles of radius $5$ with centres $A$ and $B$. The figure shows only two arcs of them. There are two common points, $C$ above line $AB$ and $C'$ (read "C prime") below it.

Triangles $ABC$ and $ABC'$ have sides of lengths $6$, $5$, and $5$. By SSS they are congruent. The two triangles are mirror images over line $AB$, that is, a reflection over that line places one on the other.

::grafico{assi=0 uguale=1 xmin=-0.7 xmax=6.75 ymin=-4.8 ymax=4.8 curve="5*cos(t),5*sin(t),-1.04,1.04;6+5*cos(t),5*sin(t),2.1,4.18" linee="0,0 6,0 3,4 0,0;0,0 3,-4 6,0" punti="0,0;6,0;3,4;3,-4" etichette="-0.25,0.04,A;6.25,0.04,B;3,4.4,C;3,-4.55,C′" titolo="For SSS the two intersections give congruent triangles"}

:::

:::attenzione{titolo="Two sides and a non-included angle"}

Two sides and an angle that is *not* included between them are not enough for congruence. This is shown by a **counterexample**, that is, a case in which the data are equal and the conclusion is false.

On a ray starting at $A$, take the points $B_1$, $H$, $B_2$ in this order, with $AH=5$ and $HB_1=HB_2=4$. Hence $AB_1=5-4=1$ and $AB_2=5+4=9$. On the perpendicular to the ray at $H$, take a point $C$ with $HC=3$.

Triangles $HB_1C$ and $HB_2C$ have side $HC$ in common, congruent sides $HB_1$ and $HB_2$, and right angles at $H$. Each right angle is included between the two sides considered. By SAS the two triangles are congruent, so $CB_1=CB_2$.

Now compare triangles $AB_1C$ and $AB_2C$. They have side $AC$ in common, congruent sides $CB_1$ and $CB_2$, and the angle at $A$ in common. The two equal sides, however, meet at vertex $C$, so the angle at $A$ is not the included angle and SAS does not apply. The third sides are different, $AB_1=1$ and $AB_2=9$, hence the two triangles are not congruent.

::grafico{assi=0 uguale=1 xmin=-0.8 xmax=9.9 ymin=-0.85 ymax=3.8 linee="0,0 9,0;0,0 5,3 1,0;5,3 9,0;5,0.23 5.23,0.23 5.23,0" segmenti="5,0,5,3" punti="0,0;1,0;5,0;9,0;5,3" etichette="-0.14,-0.4,A;1,-0.47,B_1;5,-0.44,H;9,-0.47,B_2;5,3.36,C" titolo="The two choices for $B$ give different bases with the same angle at $A$"}

Three equal angles are not enough either. Two equilateral triangles with side $3$ and side $6$ have all corresponding angles of the same measure and different perimeters, $9$ and $18$. The three angles fix the shape of the triangle and leave its size free.

:::

## Angle sum and exterior angles

::::teorema{#esempi titolo="A straight angle in every triangle"}

In every triangle the three interior angles add to $180^\circ$, that is, a straight angle. If the interior angles are $\alpha$, $\beta$, and $\gamma$, then

$$
\alpha+\beta+\gamma=180^\circ.
$$

Each interior angle has measure greater than $0^\circ$.

An **exterior angle** of a triangle is the angle formed by one side and the extension of another side past their common vertex. It forms a linear pair with the interior angle at the same vertex. Each exterior angle equals the sum of the two interior angles that are not adjacent to it. In the second figure the exterior angle at $B$ is denoted by the Greek letter $\varepsilon$ (epsilon), and

$$
\varepsilon=\alpha+\gamma.
$$

:::dimostrazione

Two lines are **parallel** if they lie in the same plane and do not meet. When a third line crosses two parallel lines, two angles that lie between the parallels, on opposite sides of the third line and with different vertices, are called **alternate interior angles** and are congruent.

In the first figure the line parallel to side $AB$ is drawn through $C$. Line $AC$ crosses the two parallels, and the angle $\alpha$ at $A$ and the angle at $C$ between the parallel and $AC$, to the left of $AC$, are alternate interior angles. This angle therefore measures $\alpha$. In the same way, with line $BC$, the angle at $C$ between the parallel and $BC$, to the right of $BC$, measures $\beta$.

Below the parallel, around $C$, the three angles $\alpha$, $\gamma$, and $\beta$ lie side by side and form the straight angle with vertex $C$ and sides on the parallel. Hence $\alpha+\gamma+\beta=180^\circ$.

For the exterior angle, in the second figure side $AB$ is extended past $B$ to $D$. The exterior angle $\varepsilon=\widehat{CBD}$ and the interior angle $\beta$ form a linear pair, so $\varepsilon+\beta=180^\circ$, that is, $\varepsilon=180^\circ-\beta$. The sum of the interior angles gives $\alpha+\gamma=180^\circ-\beta$. Both expressions equal $180^\circ-\beta$, hence $\varepsilon=\alpha+\gamma$.

:::

::grafico{assi=0 uguale=1 xmin=-1.6 xmax=5.5 ymin=-0.8 ymax=2.9 linee="0,0 4,0 1,2 0,0;-1.2,2 5.15,2" punti="0,0;4,0;1,2" etichette="-0.12,-0.4,A;4.18,-0.4,B;1,2.39,C;0.58,0.28,α;3.12,0.19,β;0.35,1.62,α;1.23,1.48,γ;2.25,1.68,β" titolo="Angles $\alpha$, $\gamma$, and $\beta$ make a straight angle at $C$"}

::grafico{assi=0 uguale=1 xmin=-0.65 xmax=6.4 ymin=-0.75 ymax=2.65 linee="0,0 6,0;0,0 1.5,2 4,0" punti="0,0;4,0;1.5,2;6,0" etichette="-0.13,-0.38,A;4,-0.38,B;1.46,2.36,C;6,-0.38,D;0.63,0.29,α;3.2,0.2,β;1.5,1.43,γ;4.37,0.49,ε" titolo="Extending the side to $D$ forms the exterior angle $\varepsilon=\alpha+\gamma$"}

::::

:::esempio{titolo="Finding and checking the third angle"}

Two interior angles of a triangle are known, of $48^\circ$ and $67^\circ$. Their sum is $48^\circ+67^\circ=115^\circ$. The third angle is what is missing to reach $180^\circ$:

$$
180^\circ-115^\circ=65^\circ.
$$

The three angles, $48^\circ$, $67^\circ$, and $65^\circ$, are all less than $90^\circ$, so the triangle is acute.

In a right triangle the right angle measures $90^\circ$, so $180^\circ-90^\circ=90^\circ$ is left for the other two angles. The two acute angles of a right triangle are therefore complementary. If one measures $31^\circ$, the other measures $90^\circ-31^\circ=59^\circ$.

In a triangle $ABC$ the exterior angle at $B$ measures $124^\circ$ and the interior angle at $A$ measures $46^\circ$. The interior angle at $B$ forms a linear pair with the exterior angle, so it measures $180^\circ-124^\circ=56^\circ$. The exterior angle at $B$ is the sum of the interior angles at $A$ and $C$, so the angle at $C$ measures $124^\circ-46^\circ=78^\circ$. As a check, the sum of the three interior angles is $46^\circ+56^\circ+78^\circ=180^\circ$.

:::

## Medians, altitudes, and angle bisectors

:::definizione{#segmenti-triangolo titolo="Three segments from the same vertex"}

Three named segments start from each vertex of a triangle. For vertex $A$ of triangle $ABC$ they are:

- The **median** is the segment joining $A$ to the midpoint $M$ of the opposite side $BC$.
- The **altitude** is the segment that starts at $A$ and reaches line $BC$ forming a right angle with it. The point $H$ where it arrives is called the **foot** of the altitude.
- The **angle bisector** at $A$ meets side $BC$ at a point $D$, and the two angles $\widehat{BAD}$ and $\widehat{DAC}$ are congruent. The name angle bisector of the triangle also refers to the segment $AD$.

Each of these segments is said to be drawn *to* side $BC$, that is, to the side it reaches.

::grafico{assi=0 uguale=1 xmin=-1.75 xmax=5.65 ymin=-0.85 ymax=3.25 linee="-1,2.6 0,0 5,0 -1,2.6 2.5,0;-1,0 0,0;-1,0.24 -0.76,0.24 -0.76,0" segmenti="-1,2.6,-1,0" punti="-1,2.6;-1,0;0,0;2.5,0;5,0" etichette="-1.14,2.97,A;-1.06,-0.43,H;-0.03,-0.43,B;2.5,-0.43,M;5.12,-0.43,C" titolo="In this triangle $AM$ reaches the midpoint and the altitude $AH$ lies outside"}

In the triangle in the figure $BC=5$. Point $M$ is the midpoint of $BC$, so $BM=MC=2.5$ and $AM$ is the median. The angle at $B$ is obtuse, hence the perpendicular drawn from $A$ meets line $BC$ on the extension of the side past $B$, and the altitude $AH$ lies outside the triangle. The foot lies instead on side $BC$ when the angles at $B$ and $C$ are acute. If the angle at $B$ is a right angle, the foot coincides with $B$ and the altitude is the leg $AB$.

Each segment is recognised from a different piece of information.

- The equality $BM=MC$, with $M$ on side $BC$, shows that $AM$ is the median.
- A right angle between the segment and line $BC$ shows the altitude.
- The equality $\widehat{BAD}=\widehat{DAC}$, between the angles at $A$, shows the angle bisector. The angles that $AD$ forms with $BC$ at $D$ are used instead to recognise an altitude.

:::

## The isosceles triangle

::::teorema{#problemi titolo="Equal legs, base angles, and the segment from the vertex"}

In an isosceles triangle the two congruent sides are called **legs** and the third side is called the **base**. The **vertex angle** is the angle included between the two legs. The **base angles** are the other two, whose vertices are the endpoints of the base.

If $AB=AC$ in triangle $ABC$, the base is $BC$ and two properties hold.

- The base angles, that is, the angles at $B$ and $C$, are congruent.
- The bisector of the vertex angle at $A$ is also the median and the altitude to the base.

In the triangle in the figure $BC=4$ and the bisector $AD$ reaches the midpoint of the base, with $BD=DC=2$, forming a right angle.

:::dimostrazione

Draw the bisector of the angle at $A$ and call $D$ the point where it meets side $BC$. Three equalities hold in the two triangles $ABD$ and $ACD$.

- $AB=AC$ by hypothesis, that is, because the statement says so.
- $\widehat{BAD}=\widehat{DAC}$, because $AD$ is the bisector.
- Side $AD$ is shared.

Angles $\widehat{BAD}$ and $\widehat{DAC}$ are included between these sides, so by SAS we have $ABD\cong ACD$, with $A$ corresponding to $A$, $B$ to $C$, and $D$ to $D$. Corresponding elements are congruent, hence

$$
\widehat{ABD}=\widehat{ACD},\qquad BD=DC,\qquad \widehat{ADB}=\widehat{ADC}.
$$

The first equality says that the base angles are congruent. By the second, $D$ is the midpoint of $BC$, so $AD$ is the median. In the third, the two angles at $D$ form a linear pair and so their sum is $180^\circ$. Being congruent, each measures $\dfrac{180^\circ}{2}=90^\circ$. Segment $AD$ is therefore perpendicular to $BC$, that is, it is the altitude.

:::

::grafico{assi=0 uguale=1 xmin=-2.8 xmax=2.8 ymin=-0.95 ymax=3.7 linee="-2,0 2,0 0,3 -2,0;0,3 0,0;0,0.24 0.24,0.24 0.24,0;-1,-0.1 -1,0.1;1,-0.1 1,0.1" punti="0,3;-2,0;2,0;0,0" etichette="0,3.36,A;-2.14,-0.38,B;2.14,-0.38,C;0,-0.43,D" titolo="The bisector $AD$ is also the altitude and the median"}

::::

::::teorema{#isoscele-converso titolo="From base angles to sides"}

If the angles at $B$ and $C$ in a triangle $ABC$ are congruent, then $AB=AC$. The triangle is therefore isosceles with base $BC$.

This theorem is the converse of the theorem on base angles and is used to recognise an isosceles triangle from its angles. A triangle with angles of $70^\circ$, $70^\circ$, and $40^\circ$ has congruent the two sides opposite the $70^\circ$ angles.

:::dimostrazione

The triangle is compared with itself, read with vertices $B$ and $C$ exchanged, that is, $ABC$ with $ACB$. The symbol $\leftrightarrow$ is read "corresponds to". The correspondences are $A\leftrightarrow A$, $B\leftrightarrow C$, and $C\leftrightarrow B$.

- Side $BC$ of the first corresponds to side $CB$ of the second. It is the same segment, so the lengths are equal.
- The angle at $B$ of the first corresponds to the angle at $C$ of the second. The two angles are congruent by hypothesis.
- The angle at $C$ of the first corresponds to the angle at $B$ of the second. These are also congruent by hypothesis.

One side and the two angles at its endpoints are equal, so ASA gives $ABC\cong ACB$. In this congruence side $AB$ of the first triangle corresponds to side $AC$ of the second, so $AB=AC$.

:::

::::

:::esempio{titolo="Which angle occurs twice"}

If the vertex angle measures $44^\circ$, each base angle measures

$$
\frac{180^\circ-44^\circ}{2}=\frac{136^\circ}{2}=68^\circ.
$$

If instead a base angle of $52^\circ$ is known, the other base angle also measures $52^\circ$ and the vertex angle measures

$$
180^\circ-2\cdot52^\circ=180^\circ-104^\circ=76^\circ.
$$

If an angle of $40^\circ$ of an isosceles triangle is known without knowing which one it is, the angles are $40^\circ$, $70^\circ$, $70^\circ$ when that angle is the vertex angle and $40^\circ$, $40^\circ$, $100^\circ$ when it is a base angle.

A base angle of an isosceles triangle is always acute. Two base angles of $90^\circ$ or more would add to at least $180^\circ$, and a zero or negative measure would be left for the vertex angle.

:::

## Constructing a triangle from three lengths

::::teorema{#disuguaglianza titolo="The triangle inequality"}

In every triangle each side is less than the sum of the other two and greater than their difference. This property is called the **triangle inequality**.

Let $a$ and $b$ be the lengths of two sides, both positive. A length $c$ is the third side of a triangle if and only if

$$
|a-b|<c<a+b.
$$

The symbol $|a-b|$ is the **absolute value** of $a-b$ and denotes the difference between the larger and the smaller length, for example $|3-5|=5-3=2$. The expression "if and only if" means that the triangle exists when $c$ satisfies the double inequality and does not exist in the other cases.

:::dimostrazione

The first step is to show that the inequalities hold in a triangle. The shortest path between two points is the segment joining them. The side of length $c$ joins two vertices, while the path between the same vertices that passes through the third vertex is made up of the other two sides and has length $a+b$. The third vertex is off the line of the side, so this path is longer than the side and $c<a+b$. The same reasoning on the other two sides gives $a<b+c$ and $b<a+c$. Subtracting $b$ on the left and on the right in $a<b+c$ gives $a-b<c$, and subtracting $a$ in $b<a+c$ gives $b-a<c$. One of the two numbers $a-b$ and $b-a$ is $|a-b|$, so $|a-b|<c$.

The second step is to show how the triangle is constructed. Draw a segment $AB$ of length $c$ and two circles, one with centre $A$ and radius $a$, the other with centre $B$ and radius $b$. The third vertex is a point common to the two circles. The number of common points depends on the distance $c$ between the centres.

- If $|a-b|<c<a+b$, the circles cross at two points, one in each half-plane with respect to line $AB$. Each of the two points is a possible third vertex. By SSS the two triangles obtained are congruent.
- If $c=a+b$ or $c=|a-b|$, the circles touch at a single point, called the point of tangency, which lies on line $AB$. In this case the result is three collinear points and no triangle. The figure shows the case $a=5$, $b=3$, and $c=8=5+3$.
- In the other cases the circles have no common points.

:::

::grafico{assi=0 uguale=1 xmin=-0.7 xmax=8.7 ymin=-1.75 ymax=1.8 curve="5*cos(t),5*sin(t),-0.30,0.30;8+3*cos(t),3*sin(t),2.66,3.62" linee="0,0 8,0" punti="0,0;5,0;8,0" etichette="0,-0.35,A;5,-0.43,C;8,-0.35,B;2.5,0.28,5;6.5,0.28,3" titolo="With $AB=5+3$ the arcs touch at a collinear point"}

::::

:::esempio{titolo="Checking the data"}

Two sides measure $4$ and $7$ centimetres. We have $|4-7|=3$ and $4+7=11$, so the condition on the third side is $3<c<11$. The values of $c$ greater than $3$ and less than $11$ form an **interval**, also written $\left(3,\,11\right)$. The values $3$ and $11$ are the endpoints of the interval and are excluded.

Lengths of $5$ and $10$ centimetres satisfy the condition. With $c=3$ we have $7=4+3$. The longest side would equal the sum of the other two, so the three points would be collinear.

When three positive lengths are already known, a single comparison is enough, the one between the largest length and the sum of the other two. The inequalities for the two smaller lengths are true in every case, because the right-hand side contains the largest length added to a positive number.

:::

## Finding sides from the perimeter

:::esempio{#applicazioni titolo="Distinguishing the base from the equal legs"}

An isosceles triangle has perimeter $32\,\mathrm{cm}$ and base $8\,\mathrm{cm}$. Let $l$ be the length in centimetres of each of the two legs. The perimeter is the sum of the three sides, so $l+l+8=32$:

$$
\begin{aligned}
2l+8&=32,\\[6pt]
2l&=32-8=24,\\[6pt]
l&=\frac{24}{2}=12.
\end{aligned}
$$

In the second step $8$ is subtracted on the left and on the right of the equals sign. In the third both sides are divided by $2$. The sides measure $12$, $12$, and $8$ centimetres. The triangle inequality is satisfied, because the largest side verifies $12<12+8$. The side of $8\,\mathrm{cm}$ is known to be the base, so there is only one equation to write.

Another isosceles triangle has perimeter $36\,\mathrm{cm}$ and one side of $10\,\mathrm{cm}$, without knowing whether that side is the base. There are two cases.

- If the side of $10\,\mathrm{cm}$ is the base, $2l+10=36$ gives $2l=26$ and each leg measures $l=\dfrac{36-10}{2}=13\,\mathrm{cm}$. The sides are $13$, $13$, and $10$, with $13<13+10$.
- If the side of $10\,\mathrm{cm}$ is a leg, the other leg also measures $10\,\mathrm{cm}$ and the base measures $36-10-10=16\,\mathrm{cm}$. The sides are $10$, $10$, and $16$, with $16<10+10$.

Both triples satisfy the triangle inequality, so the problem has two solutions. The triangle inequality establishes which solutions of the equation correspond to a triangle that can actually be constructed.

:::

## Building and checking a proof

:::esempio{#controlli titolo="Hypotheses, goal, and use of congruence"}

A **proof** is a chain of reasoning that starts from what is known and arrives, one step at a time, at what is to be proved. The **hypothesis** is what the statement gives as known. The **goal** (or thesis) is what is to be proved. Each step is justified by a hypothesis, by a definition, or by a theorem already proved.

In the example the hypothesis is that segments $AB$ and $CD$ lie on two different lines and meet at point $M$, which is the midpoint of both. The goal is $AC=BD$.

1. $M$ is the midpoint of $AB$, so $AM=MB$ by the definition of midpoint.
2. $M$ is the midpoint of $CD$, so $CM=MD$ by the same definition.
3. Lines $AB$ and $CD$ intersect at $M$. Angles $\widehat{AMC}$ and $\widehat{BMD}$ are vertical angles, so $\widehat{AMC}=\widehat{BMD}$.
4. In triangle $AMC$ the angle $\widehat{AMC}$ is included between sides $AM$ and $CM$. In triangle $BMD$ the angle $\widehat{BMD}$ is included between sides $MB$ and $MD$. By SAS we have $AMC\cong BMD$, with $A$ corresponding to $B$, $M$ to $M$, and $C$ to $D$.
5. Sides $AC$ and $BD$ join corresponding vertices, so $AC=BD$.

::grafico{assi=0 uguale=1 xmin=-2.8 xmax=2.8 ymin=-3.8 ymax=3.8 linee="-2,-1 2,1;1,-3 -1,3;-2,-1 1,-3;2,1 -1,3" punti="-2,-1;2,1;1,-3;-1,3;0,0" etichette="-2.28,-1.08,A;2.28,1.12,B;1.05,-3.43,C;-1.03,3.43,D;0.4,-0.19,M" titolo="The angles at $M$ used in SAS are vertical angles"}

SAS in step 4 requires all three equalities of steps 1, 2, and 3. If $M$ were only the intersection of the two segments, the vertical angles would still be congruent, while the equalities $AM=MB$ and $CM=MD$ would need more data.

In this check, step by step, the information given by the hypothesis is distinguished from the properties the proof still has to establish.

:::
