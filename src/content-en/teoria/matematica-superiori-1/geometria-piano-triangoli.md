---
titolo: "Plane geometry and triangles"
sommario: "Segments, angles, triangles, and congruence. SAS, ASA, and SSS, isosceles triangles, the triangle inequality, and introductory proofs."
---

## Points, lines, segments, and triangles

:::definizione{#concetti titolo="Objects of plane geometry"}
Two distinct points determine a line. The **segment** $AB$ is the part of the line between $A$ and $B$, including both endpoints. A **ray** has an endpoint and extends without bound in one direction. The midpoint $M$ of a segment lies on that segment and satisfies $AM=MB$.

Two rays with a common endpoint form an angle. A right angle measures $90^\circ$, a straight angle measures $180^\circ$, and a full turn measures $360^\circ$. An acute angle measures strictly between $0^\circ$ and $90^\circ$, and an obtuse angle strictly between $90^\circ$ and $180^\circ$.

A **triangle** has three noncollinear vertices, three sides, and three interior angles. It is scalene if all side lengths differ, isosceles if at least two sides are congruent, and equilateral if all three are congruent. With this inclusive definition, an equilateral triangle is also isosceles. According to its angles, a triangle can be acute, right, or obtuse.

Congruent figures can be placed exactly on top of each other by a rigid motion. Corresponding sides and angles therefore have equal measures. In a proof, equalities follow from the hypotheses and geometric properties.
:::

## Relationships between angles

:::teorema{#regole titolo="Complementary, supplementary, and vertical angles"}
Two angles are **complementary** if their measures add to $90^\circ$ and **supplementary** if they add to $180^\circ$. The complement of $35^\circ$ is $55^\circ$. The supplement of $35^\circ$ is $145^\circ$.

Two adjacent angles share a vertex and a side and have disjoint interiors. If their other sides are opposite rays, the angles form a linear pair and are supplementary. **Vertical angles** formed by two intersecting lines are congruent because they are each supplementary to the same adjacent angle.

An **angle bisector** divides an angle into two congruent angles. If the angle measures $64^\circ$, each part measures $32^\circ$. An angle bisector is a ray, while a midpoint is a point on a segment.
:::

## Triangle congruence criteria

:::teorema{#metodo titolo="Which data determine a triangle"}
To prove that two triangles are congruent, it is sufficient to apply one of the following criteria with the correct correspondence between vertices.

| Criterion | Congruent data in the two triangles |
|---|---|
| Side-angle-side, SAS | Two sides and their included angle |
| Angle-side-angle, ASA | One side and the two angles adjacent to it |
| Side-side-side, SSS | All three corresponding sides |

In SAS, the angle must be **included** between the given sides. Two sides and an angle chosen without that condition do not guarantee congruence in general. Two equilateral triangles with side lengths $3$ and $6$ have equal angles and different corresponding side lengths.

In the figure, $AB=DE=3$, $AC=DF=2$, and both angles at $A$ and $D$ are right. The triangles are congruent by SAS. The vertex correspondence is $A\leftrightarrow D$, $B\leftrightarrow E$, $C\leftrightarrow F$. Thus $BC=EF$ as well.

::grafico{assi=0 uguale=1 xmin=-1 xmax=9 ymin=-1 ymax=3 linee="0,0 3,0 0,2 0,0;5,0 8,0 5,2 5,0;0,0.25 0.25,0.25 0.25,0;5,0.25 5.25,0.25 5.25,0" punti="0,0;3,0,pieno,B;0,2,pieno,C;5,0;8,0,pieno,E;5,2,pieno,F" etichette="-0.25,-0.4,A;4.75,-0.4,D;1.5,-0.45,3;6.5,-0.45,3;-0.45,1,2;4.55,1,2" titolo="The SAS criterion applies to the two triangles"}
:::

:::attenzione{titolo="Two sides and a non-included angle"}
On the ray from $A$ take $B_1$, $H$, and $B_2$ in the order shown. The lengths satisfy $AH=5$ and $HB_1=HB_2=4$. The perpendicular through $H$ meets $C$ at distance $HC=3$. The triangles $HB_1C$ and $HB_2C$ are congruent by SAS, so $CB_1=CB_2$.

The triangles $AB_1C$ and $AB_2C$ therefore have two matching side lengths, $AC$ and $CB_i$, and the same angle at $A$. The angle at $A$ is not between those sides. The triangles have $AB_1=1$ and $AB_2=9$, so they are not congruent.

::grafico{assi=0 uguale=1 xmin=-1 xmax=10 ymin=-1.2 ymax=4 linee="0,0 9,0;0,0 5,3 1,0;5,3 9,0;5,0.24 5.24,0.24 5.24,0" segmenti="5,0,5,3" punti="0,0;1,0;5,0;9,0;5,3" etichette="-0.12,-0.43,A;1,-0.47,B_1;5,-0.44,H;9,-0.47,B_2;5,3.44,C" titolo="The angle at A is common to both triangles"}
:::

## Angle sum and exterior angles

:::teorema{#esempi titolo="A straight angle in every triangle"}
The interior angles of a triangle add to $180^\circ$.
$$
\alpha+\beta+\gamma=180^\circ.
$$
One justification is to draw the parallel to the opposite side through a vertex. The alternate interior angles place all three angles along a single straight angle. These relationships between parallel lines are covered in the chapter on parallel lines.

If two angles measure $48^\circ$ and $67^\circ$, the third measures $180^\circ-48^\circ-67^\circ=65^\circ$. The two acute angles of a right triangle are complementary.

An **exterior angle**, adjacent to an interior angle and formed by extending a side, equals the sum of the two nonadjacent interior angles. If an exterior angle measures $125^\circ$ and one of the two nonadjacent interior angles measures $50^\circ$, the other measures $75^\circ$.

::grafico{assi=0 uguale=1 xmin=-1.5 xmax=5.5 ymin=-1 ymax=3 linee="0,0 4,0 1,2 0,0;-1,2 5,2" punti="0,0;4,0;1,2,pieno,C" etichette="-0.2,-0.35,A;4.2,-0.35,B" titolo="The line through $C$ is parallel to $AB$. The triangle’s angles form a straight angle"}
:::

## Properties of isosceles triangles

:::teorema{#problemi titolo="From congruent sides to base angles"}
In an isosceles triangle $ABC$ with $AB=AC$, the base angles at $B$ and $C$ are congruent. To prove this, draw the angle bisector $AD$ of the vertex angle, where $D$ lies on the base $BC$.

The triangles $ABD$ and $ACD$ have $AB=AC$ by hypothesis, share $AD$, and satisfy $\widehat{BAD}=\widehat{DAC}$ because $AD$ bisects the angle. They are therefore congruent by SAS. It follows that the angles at $B$ and $C$ are equal and that $BD=DC$.

The angles $\widehat{ADB}$ and $\widehat{ADC}$ are congruent too. Since they form a linear pair, their sum is $180^\circ$ and each measures $90^\circ$. Thus the bisector to the base is also a **median** and an **altitude**. A median joins a vertex to the midpoint of the opposite side. An altitude is perpendicular to the line containing the opposite side.

::grafico{assi=0 uguale=1 xmin=-3 xmax=3 ymin=-1 ymax=4 linee="-2,0 2,0 0,3 -2,0;0,0.25 0.25,0.25 0.25,0" segmenti="0,3,0,0" punti="0,3,pieno,A;-2,0;2,0,pieno,C;0,0" etichette="-2.25,-0.35,B;0,-0.35,D" titolo="In the isosceles triangle $AB=AC$, the angle bisector $AD$ is also a median and an altitude"}

If the vertex angle measures $44^\circ$, each base angle measures $\dfrac{180^\circ-44^\circ}{2}=68^\circ$. If a base angle measures $52^\circ$, the vertex angle measures $180^\circ-2\cdot52^\circ=76^\circ$.
:::

## When three lengths form a triangle

:::teorema{#disuguaglianza titolo="The triangle inequality"}
Every side of a triangle is shorter than the sum of the other two. For positive side lengths $a$, $b$, and $c$, with $a$ and $b$ given, the condition on the third side is
$$
|a-b|<c<a+b.
$$
The inequalities are strict because equality would put the vertices on a straight line. For known sides of $4$ and $7$ centimeters, the third length $c$ in centimeters must satisfy $3<c<11$. The value $3$ is excluded, while $5$ is allowed.

For three given positive lengths, it is enough to check that the longest is shorter than the sum of the other two. The lengths $3$, $4$, and $8$ fail this test because $8>3+4$.
:::

## Finding sides from the perimeter

:::esempio{#applicazioni titolo="Choosing the unknown"}
An isosceles triangle has perimeter $32\,\mathrm{cm}$ and base $8\,\mathrm{cm}$. Let $l$ denote each equal side.
$$
2l+8=32,\qquad 2l=24,\qquad l=12\,\mathrm{cm}.
$$
The perimeter check gives $12+12+8=32$. The triangle inequality holds because $8<12+12$ and $12<12+8$.

In the notation $ABC\cong DEF$, the vertices in corresponding positions determine the congruent sides. This gives $AB=DE$, $BC=EF$, and $AC=DF$.
:::

## Building and checking a proof

:::osservazione{#controlli titolo="Hypotheses, conclusion, and reasoning"}
The **hypotheses** are the given information. The **conclusion** is the statement to be proved. In the isosceles triangle problem, the hypothesis is $AB=AC$ and the conclusion is $\widehat B=\widehat C$.

Every step follows from an established premise. For example, if $AD$ is an angle bisector, it splits the angle into two congruent parts by definition. The equality of corresponding parts can be used after establishing that the triangles are congruent.

To check the computed measures, test that the interior angles are positive and sum to $180^\circ$ and that the sides satisfy the triangle inequality. A figure drawn without a scale does not give missing measurements.
:::
