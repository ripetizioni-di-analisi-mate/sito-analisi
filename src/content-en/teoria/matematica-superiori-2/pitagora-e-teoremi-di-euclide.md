---
titolo: "Pythagoras and Euclid’s theorems"
sommario: "Right triangles, the Pythagorean theorem and its converse, special right triangles, projections of the legs, and Euclid’s theorems."
---

## The right triangle

:::definizione{#triangolo titolo="Legs and hypotenuse"}
A **right triangle** has a $90^\circ$ angle. The sides that form that angle are its **legs** $a$ and $b$. The opposite side is its **hypotenuse** $c$. Since the largest angle is opposite the longest side, $c$ is longer than either leg. This relationship helps identify which length to isolate in the Pythagorean theorem.
:::

:::esempio{titolo="The triangle with sides $3$, $4$, and $5$"}
If the right angle is at $A$, the legs are $AB$ and $AC$. The hypotenuse is therefore $BC$, which measures $5$ in the figure.

::grafico{assi=0 uguale=1 poligoni="0,0 4,0 0,3" linee="0.35,0 0.35,0.35 0,0.35" punti="0,0;4,0;0,3" etichette="-0.25,-0.27,A;4.25,-0.19,B;-0.22,3.17,C;2,-0.28,4;-0.35,1.4,3;2.2,1.9,5" xmin=-1 xmax=5 ymin=-1 ymax=4 titolo="The hypotenuse $BC$ is opposite the right angle at $A$"}

:::

## The Pythagorean theorem

::::teorema{#pitagora titolo="Pythagorean theorem"}
For a right triangle with legs $a$, $b$ and hypotenuse $c$,
$$
c^2=a^2+b^2.
$$
The equation determines a side when the other two are known. For example, if the legs measure $6$ and $8$, then $c=\sqrt{36+64}=10$. If $c$ and $a$ are known, isolate $b^2=c^2-a^2$ and take its square root.

:::dimostrazione
Arrange four copies of the triangle along the sides of a square of side length $a+b$. Each copy occupies a corner of the outer square and places its hypotenuse along the edge of the central quadrilateral. That quadrilateral has four sides of length $c$. At each of its vertices the two acute angles of the adjacent triangles add up to $90^\circ$, so the remaining angle is $90^\circ$. The central region is therefore a square.

::grafico{assi=0 uguale=1 poligoni="0,0 4,0 0,3;4,0 7,0 7,4;7,4 7,7 3,7;3,7 0,7 0,3" linee="4,0 7,4 3,7 0,3 4,0" xmin=-0.5 xmax=7.5 ymin=-0.5 ymax=7.5 titolo="Four identical triangles and the central square"}

Subtracting the areas of the four triangles from the area of the outer square gives
$$
\begin{aligned}
c^2&=(a+b)^2-4\cdot\frac{ab}{2}\\[5pt]
   &=a^2+2ab+b^2-2ab\\[5pt]
   &=a^2+b^2.
\end{aligned}
$$
:::
::::

## The converse theorem

:::teorema{#inverso titolo="Converse of the Pythagorean theorem"}
If three positive lengths form a triangle and the square of the longest side equals the sum of the squares of the other two, the triangle is right. The longest side is opposite the right angle. For $5$, $12$, and $13$, the inequality $5+12>13$ holds, so these lengths form a triangle. Also, $25+144=169$, so the angle opposite the side of length $13$ is a right angle.
:::

:::attenzione
The lengths $4$, $5$, and $6$ form a triangle because $4+5>6$. However, $4^2+5^2=41$ differs from $6^2=36$, so the triangle is not right.
:::

:::osservazione
A **Pythagorean triple** consists of three positive integers satisfying the theorem. Multiplying all three sides by the same positive integer multiplies their squares by the same factor. For example, $(3,4,5)$ gives $(9,12,15)$.
:::

## Special right triangles

:::teorema{#notevoli titolo="Squares and equilateral triangles"}
The diagonal of a square of side length $l$ is the hypotenuse of a right triangle whose two legs measure $l$. By the Pythagorean theorem, it measures $l\sqrt{2}$.

The altitude of an equilateral triangle of side length $l$ splits the base into two equal segments. The resulting right triangle has hypotenuse $l$ and a leg of length $\dfrac l2$, so
$$
\begin{aligned}
h&=\sqrt{l^2-\left(\frac l2\right)^2}\\[5pt]
 &=\frac{\sqrt3}{2}l.
\end{aligned}
$$
The area is $\dfrac{lh}{2}=\dfrac{\sqrt3}{4}l^2$. With $l=6$, the altitude is $h=3\sqrt3$ and the area is $9\sqrt3$.

The altitude also bisects the vertex angle, so the right triangle has angles of $30^\circ$ and $60^\circ$. The leg opposite the $30^\circ$ angle is half the hypotenuse.

::grafico{assi=0 uguale=1 poligoni="0,0 6,0 3,5.196152" linee="3,0 3,5.196152;3,0.25 3.25,0.25 3.25,0" etichette="1.5,-0.25,3;4.5,-0.25,3;3.65,2.4,h" xmin=-0.6 xmax=6.6 ymin=-0.8 ymax=6 titolo="The altitude divides the base into two segments of length $3$"}

:::

## Projections onto the hypotenuse

:::definizione{#proiezioni titolo="Altitude and projections of the legs"}
Let $ABC$ be a right triangle with right angle at $A$, and let $H$ be the foot of the altitude to $BC$. Write $c$ for the length of hypotenuse $BC$, $p$ for the length of $BH$, $q$ for the length of $HC$, and $h$ for the length of $AH$. Since $H$ lies strictly between $B$ and $C$, $p,q>0$ and $p+q=c$.

To identify the projection of leg $AB$, observe that $B$ already lies on the hypotenuse and that $A$ projects to $H$. Its projection is therefore $BH$. The projection of leg $AC$ is $HC$.

::grafico{assi=0 uguale=1 linee="0,0 5,0 1.8,2.4 0,0;1.8,2.4 1.8,0;1.8,0.25 2.05,0.25 2.05,0" punti="0,0,pieno,B;5,0,pieno,C;1.8,2.4,pieno,A;1.8,0" etichette="0.9,-0.28,p;3.4,-0.28,q;2.09,1.12,h;1.8,-0.34,H" xmin=-0.6 xmax=5.7 ymin=-0.8 ymax=3.25 titolo="The projections $BH$ and $HC$ together make up the hypotenuse $BC$"}

The altitude splits the triangle into two right triangles. Each shares an acute angle with $ABC$, so both are similar to the original triangle. Ratios of corresponding sides justify Euclid’s theorems.
:::

## Euclid’s first theorem

:::teorema{#euclide-primo titolo="Leg, hypotenuse, and projection"}
In a right triangle, the square of a leg equals the product of the hypotenuse and the projection of that leg onto the hypotenuse. Using the notation in the figure gives $AB^2=cp$ and $AC^2=cq$.

Triangles $ABC$ and $HBA$ are similar. The ratio of their hypotenuses, $BC$ and $AB$, therefore equals the ratio of the legs adjacent to the angle at $B$, namely $AB$ and $BH$. The proportion $\dfrac{BC}{AB}=\dfrac{AB}{BH}$ gives $AB^2=BC\cdot BH$. The same reasoning at angle $C$ gives $AC^2=BC\cdot HC$.
:::

:::esempio{titolo="Finding the legs from their projections"}
If $c=25$ and $p=9$, then $q=25-9=16$. Euclid’s first theorem gives
$$
AB=\sqrt{25\cdot9}=15,
\qquad AC=\sqrt{25\cdot16}=20.
$$
The sum $15^2+20^2=625$ agrees with $25^2$, as the Pythagorean theorem predicts.
:::

## Euclid’s second theorem

:::teorema{#euclide-secondo titolo="Altitude and projections"}
In a right triangle, the square of the altitude to the hypotenuse is the product of the projections of the legs, so $h^2=pq$.

In the similarity between $HBA$ and $HAC$, leg $BH$ of the first triangle corresponds to $AH$ of the second, while $AH$ of the first corresponds to $HC$ of the second. Therefore $\dfrac{BH}{AH}=\dfrac{AH}{HC}$. The cross products are equal, giving $AH^2=BH\cdot HC$.

With $p=4$ and $q=9$, the altitude is $h=\sqrt{36}=6$. Applying Euclid’s first theorem with $c=13$ gives $AB=\sqrt{52}$ and $AC=\sqrt{117}$.
:::

## Multistep problems

:::osservazione{#problemi titolo="Choosing a base for the area"}
The area $\mathcal{A}$ of a right triangle can be calculated using a leg or the hypotenuse as the base. In the first case the other leg is the altitude. In the second case the altitude is $h$, the altitude to the hypotenuse.
$$
\mathcal A=\frac{AB\cdot AC}{2}=\frac{ch}{2}.
$$
It follows that $h=\dfrac{AB\cdot AC}{c}$. For legs $3$ and $4$ and hypotenuse $5$, this gives $h=\dfrac{12}{5}$.
:::

:::esempio{titolo="The altitude of an isosceles triangle"}
The equal sides have length $5$ and the base has length $6$. The altitude to the base divides it into two segments of length $3$, so the Pythagorean theorem applies to either resulting right triangle. The altitude is $\sqrt{5^2-3^2}=4$ and the area is $\dfrac{6\cdot4}{2}=12$.
:::
