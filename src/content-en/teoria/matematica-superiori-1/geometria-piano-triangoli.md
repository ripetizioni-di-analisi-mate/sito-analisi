---
titolo: "Plane geometry and triangles"
sommario: "Segments, angles, congruence, and triangle constructions, with proofs and counterexamples."
---

## Points, lines, and segments

:::definizione{#concetti titolo="Starting with two distinct points"}

Two distinct points $A$ and $B$ determine a line. The ray starting at $A$ and passing through $B$ contains the points reached by proceeding from $A$ towards $B$. The segment $AB$ includes the endpoints and the points between them. In sums or comparisons of lengths, $AB$ also denotes the length of the segment.

If $M$ belongs to segment $AB$, its parts $AM$ and $MB$ satisfy $AB=AM+MB$. The **midpoint** also satisfies $AM=MB$. It is therefore at distance $\dfrac{AB}{2}$ from each endpoint. Belonging to the segment is part of the definition.

::grafico{assi=0 uguale=1 xmin=-0.8 xmax=8.8 ymin=-0.85 ymax=0.85 linee="0,0 8,0" punti="0,0;3,0;6,0;8,0" etichette="0,-0.44,A;3,-0.44,M;6,-0.44,B;8,-0.44,C;1.5,0.36,3;4.5,0.36,3;7,0.36,2" titolo="$M$ is the midpoint of $AB$, and $AC=AB+BC$"}

In the figure $B$ lies between $A$ and $C$, so $AC=6+2=8$. Knowing only that $A,B,C$ are collinear leaves their order undetermined. With $C$ between $A$ and $B$, the relation would instead be $AB=AC+CB$.

:::

## Angle relationships

::::teorema{#regole titolo="Complementary, supplementary, and vertical angles"}

The sides of an angle are two rays with the same origin. Among angles with positive measure below $180^\circ$, those below $90^\circ$ are **acute**, those of $90^\circ$ are **right**, and those above $90^\circ$ are **obtuse**. A straight angle measures $180^\circ$, and a full turn measures $360^\circ$.

Two angles are **complementary** if they add to $90^\circ$ and **supplementary** if they add to $180^\circ$. Consecutive angles share a vertex and one side, with disjoint interiors. If their other sides are opposite rays, the angles form a **linear pair** and are supplementary. Vertical angles formed by two intersecting lines are congruent.

:::dimostrazione

Take vertical angles $\alpha$ and $\gamma$ and the angle $\beta$ forming a linear pair with each one. The pairs $\alpha,\beta$ and $\beta,\gamma$ each form a straight angle. From $\alpha+\beta=180^\circ=\beta+\gamma$ it follows that $\alpha=\gamma$. The reasoning also applies when the lines are perpendicular and all four angles measure $90^\circ$.

:::

::grafico{assi=0 uguale=1 xmin=-3 xmax=3 ymin=-2.25 ymax=2.25 linee="-2.7,0 2.7,0;-2.4,-1.75 2.4,1.75" punti="0,0" etichette="1.35,0.43,α;-0.28,1.05,β;-1.35,-0.58,γ;0.3,-0.25,O" titolo="Angles $\alpha$ and $\gamma$ are each supplementary to $\beta$"}

::::

:::esempio{titolo="Bisectors and linear pairs"}

An angle's **bisector** is the ray inside the angle that divides it into two congruent angles. If the angle measures $68^\circ$, each part measures $34^\circ$. Construct its supplement of $112^\circ$ by extending one side past the vertex. The two bisectors enclose an angle of $34^\circ+56^\circ=90^\circ$, made up of the halves adjacent to the shared side.

:::

## Triangles and congruence criteria

:::definizione{titolo="Vertices and correspondence"}

A triangle is formed by three noncollinear vertices and the segments joining them. It is **scalene** if all sides have different lengths, **isosceles** if at least two sides are congruent, and **equilateral** if all three are congruent. An equilateral triangle is therefore also isosceles. By its angles, a triangle is acute if all its angles are acute, right if one is a right angle, and obtuse if one is obtuse.

Congruent triangles can be matched exactly by translations, rotations, or reflections. The notation $ABC\cong DEF$ fixes the order of the correspondence. Vertex $B$ matches $E$, and side $BC$ matches $EF$. Changing the order requires reordering the vertices in both triangles.

:::

::::teorema{#metodo titolo="Sufficient data for congruence"}

Any one of the three sets of data is enough to establish congruence. The equalities must always match corresponding elements.

| Criterion | Data to check |
|---|---|
| Side-angle-side, SAS | Two sides and the included angle |
| Angle-side-angle, ASA | One side and the two angles at its endpoints |
| Side-side-side, SSS | All three sides |

:::dimostrazione

To see why the positions matter, match a given side and put the third vertices in the same half-plane, reflecting one triangle if needed. For SAS, the included angle determines a ray and the second side locates a unique point on it. For ASA, the angles at the endpoints of the given side determine two rays. They have at most one intersection, and they meet because the triangles exist. For SSS, the other two lengths set the distances from the third vertex to the endpoints of the side. The two circles with those radii have at most one point in common in each half-plane defined by the base. The two possible positions are reflections, so they give congruent triangles.

:::

::::

:::esempio{titolo="Matching sides and vertices"}

In the two triangles in the first figure, $AB=DE=3$, $AC=DF=2$, and the angles at $A$ and $D$ are right angles. These angles lie between the given sides. SAS establishes $ABC\cong DEF$. Thus $BC=EF$ follows even without knowing those lengths.

The second figure constructs both triangles with base $AB=6$ and the other sides of length $5$. Each possible third vertex belongs to both circles of radius $5$, one centred at $A$ and the other at $B$. The two drawings are reflections and give the same triangle up to a rigid motion.

::grafico{assi=0 uguale=1 xmin=-0.9 xmax=9 ymin=-0.85 ymax=2.9 linee="0,0 3,0 0,2 0,0;5,0 8,0 5,2 5,0;0,0.25 0.25,0.25 0.25,0;5,0.25 5.25,0.25 5.25,0" punti="0,0;3,0;0,2;5,0;8,0;5,2" etichette="-0.15,-0.42,A;3.1,-0.42,B;-0.18,2.35,C;4.85,-0.42,D;8.1,-0.42,E;4.82,2.35,F;1.5,-0.42,3;6.5,-0.42,3;-0.45,1,2;4.55,1,2" titolo="The right angles lie between the two given sides"}

::grafico{assi=0 uguale=1 xmin=-0.7 xmax=6.75 ymin=-4.8 ymax=4.8 curve="5*cos(t),5*sin(t),-1.04,1.04;6+5*cos(t),5*sin(t),2.1,4.18" linee="0,0 6,0 3,4 0,0;0,0 3,-4 6,0" punti="0,0;6,0;3,4;3,-4" etichette="-0.25,0.04,A;6.25,0.04,B;3,4.4,C;3,-4.55,C′" titolo="For SSS the two intersections give congruent triangles"}

:::

:::attenzione{titolo="Two sides and a non-included angle"}

On the same ray from $A$, take $B_1,H,B_2$ in that order, with $AH=5$ and $HB_1=HB_2=4$. Choose $C$ on the perpendicular through $H$ with $HC=3$. By SAS the triangles $HB_1C$ and $HB_2C$ are congruent, so $CB_1=CB_2$.

In triangles $AB_1C$ and $AB_2C$, the data are $AC$, $CB_i$, and the angle at $A$. The common vertex of the two given sides is $C$. The two bases have lengths $AB_1=1$ and $AB_2=9$, so the triangles have different perimeters. Three given angles leave the scale free. Equilateral triangles with side lengths $3$ and $6$ have identical corresponding angle measures and different perimeters.

::grafico{assi=0 uguale=1 xmin=-0.8 xmax=9.9 ymin=-0.85 ymax=3.8 linee="0,0 9,0;0,0 5,3 1,0;5,3 9,0;5,0.23 5.23,0.23 5.23,0" segmenti="5,0,5,3" punti="0,0;1,0;5,0;9,0;5,3" etichette="-0.14,-0.4,A;1,-0.47,B_1;5,-0.44,H;9,-0.47,B_2;5,3.36,C" titolo="The two choices for $B$ give different bases with the same angle at $A$"}

:::

## Angle sum and exterior angles

::::teorema{#esempi titolo="A straight angle in every triangle"}

The interior angles of a triangle add to $180^\circ$. An exterior angle formed by extending one side equals the sum of the two non-adjacent interior angles.

:::dimostrazione

Draw the parallel to $AB$ through $C$. Side $AC$ crosses the parallel lines, carrying the angle at $A$ to the sector to the left of $AC$ at $C$. Likewise $BC$ carries the angle at $B$ to the sector on the right at $C$. These are equalities of alternate interior angles. The two sectors and the interior angle at $C$ together fill the straight angle below the parallel line.

If $AB$ is extended past $B$, the exterior angle $\varepsilon$ and the interior angle $\beta$ at $B$ form a linear pair. Hence $\varepsilon+\beta=180^\circ$. Comparing this equation with $\alpha+\beta+\gamma=180^\circ$ gives $\varepsilon=\alpha+\gamma$.

:::

::grafico{assi=0 uguale=1 xmin=-1.6 xmax=5.5 ymin=-0.8 ymax=2.9 linee="0,0 4,0 1,2 0,0;-1.2,2 5.15,2" punti="0,0;4,0;1,2" etichette="-0.12,-0.4,A;4.18,-0.4,B;1,2.39,C;0.58,0.28,α;3.12,0.19,β;0.35,1.62,α;1.23,1.48,γ;2.25,1.68,β" titolo="Angles $\alpha$, $\gamma$, and $\beta$ make a straight angle at $C$"}

::grafico{assi=0 uguale=1 xmin=-0.65 xmax=6.4 ymin=-0.75 ymax=2.65 linee="0,0 6,0;0,0 1.5,2 4,0" punti="0,0;4,0;1.5,2;6,0" etichette="-0.13,-0.38,A;4,-0.38,B;1.46,2.36,C;6,-0.38,D;0.63,0.29,α;3.2,0.2,β;1.5,1.43,γ;4.37,0.49,ε" titolo="Extending the side to $D$ forms the exterior angle $\varepsilon=\alpha+\gamma$"}

::::

:::esempio{titolo="Finding and checking the third angle"}

If the given interior angles are $48^\circ$ and $67^\circ$, the third measures $65^\circ$. All three are positive and below $90^\circ$, so the triangle is acute. In a right triangle the two acute angles are complementary. If one measures $31^\circ$, the other measures $59^\circ$.

An exterior angle of $124^\circ$ at $B$ leaves an interior angle of $56^\circ$ at $B$. If the angle at $A$ measures $46^\circ$, the angle at $C$ is $124^\circ-46^\circ=78^\circ$. The total $46^\circ+56^\circ+78^\circ=180^\circ$ checks the calculation.

:::

## Medians, altitudes, and angle bisectors

:::definizione{#segmenti-triangolo titolo="Three segments from the same vertex"}

Several distinct segments can be drawn from vertex $A$ of a triangle $ABC$. The **median** joins $A$ to the midpoint $M$ of side $BC$. The **altitude** joins $A$ to the foot $H$ of the perpendicular to line $BC$. The foot can lie on the extension of the side, as in the figure. The **angle bisector** at $A$ meets $BC$ at a point $D$ such that $\widehat{BAD}=\widehat{DAC}$. The name angle bisector of the triangle also refers to the segment $AD$.

::grafico{assi=0 uguale=1 xmin=-1.75 xmax=5.65 ymin=-0.85 ymax=3.25 linee="-1,2.6 0,0 5,0 -1,2.6 2.5,0;-1,0 0,0;-1,0.24 -0.76,0.24 -0.76,0" segmenti="-1,2.6,-1,0" punti="-1,2.6;-1,0;0,0;2.5,0;5,0" etichette="-1.14,2.97,A;-1.06,-0.43,H;-0.03,-0.43,B;2.5,-0.43,M;5.12,-0.43,C" titolo="In this triangle $AM$ reaches the midpoint and the altitude $AH$ lies outside"}

A fact such as $BM=MC$ identifies a median when $M$ lies on the side. A right-angle mark at the base identifies the altitude. Applying the definition of the bisector requires comparing the angles at $A$. The angles at its meeting point with the base describe a different property.

:::

## The isosceles triangle

::::teorema{#problemi titolo="Equal legs, base angles, and the segment from the vertex"}

If $AB=AC$, the angles at the base $BC$ are congruent. The bisector of the angle at $A$ is also the median and the altitude to the base.

:::dimostrazione

Let $D$ be the point where the angle bisector at $A$ meets side $BC$. Triangles $ABD$ and $ACD$ share side $AD$, have congruent sides $AB$ and $AC$ by hypothesis, and have congruent angles $\widehat{BAD}$ and $\widehat{DAC}$ by construction. These angles are included between the given sides, so SAS applies. Thus $\widehat{ABD}=\widehat{ACD}$ and $BD=DC$.

The two angles at $D$ are also congruent. As a linear pair they add to $180^\circ$, so each measures $90^\circ$. Therefore $D$ is both the midpoint of the base and the foot of the perpendicular to its line.

:::

::grafico{assi=0 uguale=1 xmin=-2.8 xmax=2.8 ymin=-0.95 ymax=3.7 linee="-2,0 2,0 0,3 -2,0;0,3 0,0;0,0.24 0.24,0.24 0.24,0;-1,-0.1 -1,0.1;1,-0.1 1,0.1" punti="0,3;-2,0;2,0;0,0" etichette="0,3.36,A;-2.14,-0.38,B;2.14,-0.38,C;0,-0.43,D" titolo="The bisector $AD$ is also the altitude and the median"}

::::

::::teorema{#isoscele-converso titolo="From base angles to sides"}

If the angles at $B$ and $C$ in $ABC$ are equal, then $AB=AC$.

:::dimostrazione

Compare $ABC$ with $ACB$, the same figure with the correspondence $A\leftrightarrow A$, $B\leftrightarrow C$, and $C\leftrightarrow B$. Base $BC$ matches $CB$, and the angles at its endpoints match by hypothesis. ASA gives congruence in that order. The matching sides include $AB$ and $AC$.

:::

::::

:::esempio{titolo="Which angle occurs twice"}

If the vertex angle measures $44^\circ$, each base angle measures $\dfrac{180^\circ-44^\circ}{2}=68^\circ$. If a base angle measures $52^\circ$, that value occurs twice and the vertex angle measures $180^\circ-2\cdot52^\circ=76^\circ$. A base angle of an isosceles triangle must be acute, since two angles of at least $90^\circ$ would leave a zero or negative vertex angle.

:::

## Constructing a triangle from three lengths

::::teorema{#disuguaglianza titolo="The triangle inequality"}

Given two positive side lengths $a$ and $b$, a length $c$ is the third side of a triangle if and only if

$$
|a-b|<c<a+b.
$$

:::dimostrazione

The segment joining two vertices is shorter than the route along the other two sides, because the third vertex is off its line. This gives $c<a+b$, as well as $a<b+c$ and $b<a+c$. The last two inequalities are equivalent to $|a-b|<c$.

To construct the triangle, draw a segment $AB$ of length $c$ and two circles with centres $A,B$ and radii $a,b$. The circles cross at two points when the distance between their centres exceeds the absolute difference of the radii and is less than their sum. Either intersection gives a possible third vertex, and SSS gives congruence of the two results. If the distance equals the sum or absolute difference of the radii, the point of tangency lies on line $AB$. This gives three collinear points.

:::

::grafico{assi=0 uguale=1 xmin=-0.7 xmax=8.7 ymin=-1.75 ymax=1.8 curve="5*cos(t),5*sin(t),-0.30,0.30;8+3*cos(t),3*sin(t),2.66,3.62" linee="0,0 8,0" punti="0,0;5,0;8,0" etichette="0,-0.35,A;5,-0.43,C;8,-0.35,B;2.5,0.28,5;6.5,0.28,3" titolo="With $AB=5+3$ the arcs touch at a collinear point"}

::::

:::esempio{titolo="Checking the data"}

For given sides of $4$ and $7$ centimetres, the condition is $3<c<11$. Lengths of $5$ or $10$ centimetres work. With $c=3$, the equality $7=4+3$ would make the longest side equal to the sum of the other two. When all three positive lengths are given, compare only the largest with the sum of the other two. For either smaller length, the sum of the other two already includes the largest length and another positive term.

:::

## Finding sides from the perimeter

:::esempio{#applicazioni titolo="Distinguishing the base from the equal legs"}

An isosceles triangle of perimeter $32\,\mathrm{cm}$ and base $8\,\mathrm{cm}$ has two equal legs of length $l$. The equation $2l+8=32$ gives $l=12\,\mathrm{cm}$. The side lengths are valid because $12<12+8$. Knowing that the given length is the base leads to just one equation.

If the perimeter is $36\,\mathrm{cm}$ and you only know that one side measures $10\,\mathrm{cm}$, there are two cases. If that side is the base, each equal leg measures $(36-10)/2=13\,\mathrm{cm}$. If it is one of the legs, the other also measures $10\,\mathrm{cm}$ and the base measures $16\,\mathrm{cm}$. Both triples work because $13<13+10$ and $16<10+10$. The triangle inequality determines which algebraic solutions can actually be constructed.

:::

## Building and checking a proof

:::esempio{#controlli titolo="Hypotheses, goal, and use of congruence"}

Suppose $M$ is the midpoint of segments $AB$ and $CD$, whose lines intersect there. The goal is to prove $AC=BD$. The midpoint hypotheses give $AM=MB$ and $CM=MD$. Because the lines intersect, $\widehat{AMC}=\widehat{BMD}$ by the vertical-angle property. The angle in each triangle lies between the two sides just matched. By SAS, $AMC\cong BMD$. It follows that $AC=BD$, since the sides join the corresponding vertices $A,B$ and $C,D$.

::grafico{assi=0 uguale=1 xmin=-2.8 xmax=2.8 ymin=-3.8 ymax=3.8 linee="-2,-1 2,1;1,-3 -1,3;-2,-1 1,-3;2,1 -1,3" punti="-2,-1;2,1;1,-3;-1,3;0,0" etichette="-2.28,-1.08,A;2.28,1.12,B;1.05,-3.43,C;-1.03,3.43,D;0.4,-0.19,M" titolo="The angles at $M$ used in SAS are vertical angles"}

In another drawing $M$ might be only the intersection. The vertical angles would still be congruent, while the length equalities would require more data. The SAS step needs all three facts. This check distinguishes the information given from the properties the proof still has to establish.

:::
