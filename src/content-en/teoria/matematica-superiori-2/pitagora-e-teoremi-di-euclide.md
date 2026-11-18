---
titolo: "Pythagoras and Euclid's theorems"
sommario: "The Pythagorean theorem and its converse, diagonals, leg projections, Euclid's theorems, and distance applications."
---

## Legs and hypotenuse

:::definizione{#triangolo titolo="Starting from the right angle"}

A right triangle has a $90^\circ$ angle. The sides forming it are the **legs**, and the opposite side is the **hypotenuse**. For a right angle at $A$, we use $a=AB$, $b=AC$, and $c=BC$. Thus $c$ denotes the side without $A$ as an endpoint. Whether it slants in a drawing depends on the triangle's orientation.

Identify which information establishes the right angle. It may be stated, follow from perpendicular lines, or be deduced from the side lengths. The side relations of a right triangle require that information.

::grafico{assi=0 uguale=1 xmin=-0.85 xmax=5.65 ymin=-0.82 ymax=4.61 poligoni="0,0 5,0 0,3.75" linee="0.28,0 0.28,0.28 0,0.28" punti="0,0;5,0;0,3.75" etichette="-0.23,-0.38,A;5.19,-0.37,B;-0.2,4.13,C;2.5,-0.39,a;-0.42,1.85,b;2.67,2.25,c" titolo="The mark at $A$ identifies the legs and the opposite side $BC$"}

:::

## The Pythagorean theorem

::::teorema{#pitagora titolo="A relation between squares"}

If a triangle is right, the square of the hypotenuse equals the sum of the squares of the legs.

$$
c^2=a^2+b^2.
$$

:::dimostrazione

Arrange four copies of the same triangle at the corners of a square with side $a+b$. Each side of the central quadrilateral is a hypotenuse of length $c$. At its vertices, two acute angles of the triangles occupy $90^\circ$ together, because they are the two non-right angles of the same shape. The angle left in the straight angle is therefore right, making the central quadrilateral a square of side $c$.

::grafico{assi=0 uguale=1 xmin=-0.65 xmax=7.62 ymin=-0.66 ymax=7.67 poligoni="0,0 4,0 0,3;4,0 7,0 7,4;7,4 7,7 3,7;3,7 0,7 0,3" linee="4,0 7,4 3,7 0,3 4,0" etichette="2,-0.39,a;5.5,-0.39,b;4.95,2.15,c" titolo="The central square remains after removing the four triangles"}

$$
\begin{aligned}
c^2&=(a+b)^2-4\cdot\dfrac{ab}{2}\\[6pt]
&=a^2+2ab+b^2-2ab=a^2+b^2 .
\end{aligned}
$$

:::

::::

:::esempio{titolo="Finding the required side"}

For legs of $6$ cm and $8$ cm, add the squares. The hypotenuse is $\sqrt{36+64}=10$ cm and is longer than either leg. If the given values are $c=13$ cm and $a=5$ cm, isolate the square of the missing leg. This gives $b=\sqrt{169-25}=12$ cm. In the second calculation the expression under the root must be positive because the missing leg has positive length.

The terms under the square root are squared lengths. Using centimetres for both known sides gives square centimetres under the root and centimetres for the result. Take the positive square root to recover a side length. The addition or subtraction is done on the squares.

:::

## The converse theorem

::::teorema{#inverso titolo="From three side lengths to a right angle"}

If three positive lengths $a,b,c$ form a triangle and $c^2=a^2+b^2$, the triangle is right with the right angle opposite side $c$.

:::dimostrazione

Construct a triangle with legs $a$ and $b$ on perpendicular rays. By the direct theorem, its third side has length $\sqrt{a^2+b^2}=c$. The constructed triangle matches the given one in all three side lengths. The SSS criterion establishes congruence, so the angle opposite $c$ in the given triangle is right too.

:::

::grafico{assi=0 uguale=1 xmin=-1.05 xmax=13.03 ymin=-0.82 ymax=6.25 linee="0,0 12,0 0,5 0,0;0,0.37 0.37,0.37 0.37,0" punti="0,0;12,0;0,5" etichette="6,-0.44,12;-0.48,2.49,5;6.02,2.85,13" titolo="The construction with legs $5$ and $12$ matches the given side lengths"}

::::

:::attenzione{titolo="Checking the three lengths before deciding"}

For $4,5,6$, the longest side is shorter than the sum of the others, so a triangle exists. The squares give $4^2+5^2=41$ and $6^2=36$, so the angle opposite $6$ is not right. With $2,3,5$ there is no triangle to begin with, since the points would be collinear. Existence and the right-angle test answer different questions.

If a positive triple satisfies the Pythagorean equality, the triangle inequality also follows. Since $(a+b)^2=c^2+2ab>c^2$, we have $a+b>c$. Compare the square of the greatest length to the sum of the other two squares.

:::

:::osservazione{titolo="Pythagorean triples and changes of scale"}

A Pythagorean triple consists of three positive integers satisfying the equality in the theorem. From $3,4,5$, obtain $9,12,15$ by multiplying each side by $3$. Both sides of the equality between the squares multiply by $9$, so the right angle is preserved. The diagonal of a unit square instead measures $\sqrt2$. It is the hypotenuse of a right triangle, but the three lengths do not form a triple of integers.

:::

## Squares and equilateral triangles

::::teorema{#notevoli titolo="Diagonals, altitudes, and special angles"}

In a square of side $l$, the diagonal measures $l\sqrt2$. In an equilateral triangle of the same side length, the altitude measures $\dfrac{\sqrt3}{2}l$ and the area $\dfrac{\sqrt3}{4}l^2$.

:::dimostrazione

The square's diagonal completes a right triangle whose legs both have length $l$. Its square is $2l^2$. In the equilateral triangle the altitude is also a median and angle bisector. It joins the vertex to the midpoint of the base, making a triangle with hypotenuse $l$ and leg $\dfrac l2$. The square of the altitude is $l^2-\left(\dfrac l2\right)^2=\dfrac{3l^2}{4}$. Take the square root and multiply the base by the altitude, then halve the product for the area.

:::

::grafico{assi=0 uguale=1 xmin=-0.75 xmax=4.83 ymin=-0.78 ymax=4.75 linee="0,0 4,0 4,4 0,4 0,0;0,0 4,4;0,0.24 0.24,0.24 0.24,0" etichette="2,-0.41,l;-0.37,2,l;2.34,1.7,d" titolo="Diagonal $d$ is the hypotenuse across two equal sides"}

::grafico{assi=0 uguale=1 xmin=-0.82 xmax=6.79 ymin=-0.85 ymax=6.03 linee="0,0 6,0 3,5.196152 0,0;3,5.196152 3,0;3,0.27 3.27,0.27 3.27,0" punti="0,0;6,0;3,5.196152;3,0" etichette="-0.17,-0.35,B;6.16,-0.35,C;3,5.63,A;3,-0.4,H;1.5,-0.38,l/2;4.5,-0.38,l/2;3.33,2.45,h" titolo="A side of the equilateral triangle is the hypotenuse of triangle $AHC$"}

::::

:::esempio{titolo="Using a diagonal or a thirty-degree angle"}

If a square has a diagonal of $10$ cm, the side measures $\dfrac{10}{\sqrt2}=5\sqrt2$ cm and the area is $50$ cm$^2$. The value $100$ cm$^2$ is the square of the diagonal, twice the area.

The altitude of the equilateral triangle splits its $60^\circ$ vertex angle into two $30^\circ$ angles. In the resulting right triangle the side opposite $30^\circ$ is therefore half the hypotenuse. The relation holds for every right triangle with a $30^\circ$ angle, by angle-angle similarity.

:::

## Projections onto the hypotenuse

:::definizione{#proiezioni titolo="Projecting the endpoints of a leg"}

In $ABC$ right at $A$, let $H$ be the foot of $AH$ on line $BC$. The foot lies inside $BC$ because the angles at $B$ and $C$ are acute. On the extension past either endpoint, a right triangle would have an additional obtuse angle, which is impossible.

When projecting $AB$, endpoint $B$ stays on line $BC$, while $A$ drops to $H$. The projection of leg $AB$ is therefore $BH$, of length $p$. The projection of $AC$ is $HC$, of length $q$. Write $h=AH$ for the altitude. Both projections are positive and $p+q=c$.

::grafico{assi=0 uguale=1 xmin=-1.25 xmax=26.35 ymin=-1.35 ymax=13.84 linee="0,0 25,0 9,12 0,0;9,12 9,0;9,0.6 9.6,0.6 9.6,0" punti="0,0;25,0;9,12;9,0" etichette="-0.39,-0.65,B;25.37,-0.66,C;9,12.84,A;9,-0.72,H;4.5,-0.65,p;17,-0.65,q;9.99,5.64,h" titolo="$BH$ starts at the same endpoint $B$ as leg $AB$"}

Read the correspondence in the three triangles from their angles. The whole triangle is right at $A$, whereas the two smaller ones are right at $H$. The angle at $B$ is shared by $ABC$ and $HBA$. The angle at $C$ is shared by $ABC$ and $HAC$. These matches give the ordered similarity statements.

$$
ABC\sim HBA\sim HAC.
$$

:::

## Euclid's first theorem

::::teorema{#euclide-primo titolo="A leg, the hypotenuse, and its projection"}

In a right triangle, the square of each leg is the product of the hypotenuse and that leg's projection onto it.

$$
a^2=cp,\qquad b^2=cq.
$$

:::dimostrazione

From $ABC\sim HBA$, compare hypotenuses $BC$ and $AB$, then the legs next to the angle at $B$, namely $AB$ and $BH$. This gives $\dfrac{BC}{AB}=\dfrac{AB}{BH}$. Similarity with $HAC$ gives $\dfrac{BC}{AC}=\dfrac{AC}{HC}$. Cross-multiplication gives the two equalities. The projection depends on the leg used in each proportion.

:::

::::

:::esempio{titolo="Solving for a projection"}

With $c=17$ cm and $a=8$ cm, divide the square of $8$ by $17$. This gives $p=\dfrac{64}{17}$ cm. The other segment is $q=17-\dfrac{64}{17}=\dfrac{225}{17}$ cm. Applying the theorem again gives $b=\sqrt{17q}=15$ cm. Both projections are shorter than $c$, and $8^2+15^2=17^2$ checks the leg lengths.

In $p=\dfrac{a^2}{c}$, divide square units by linear units. The result has units of length, as it must for a segment of the hypotenuse.

:::

:::osservazione{titolo="Comparing legs and projections"}

Dividing the two equations of the first theorem gives $\dfrac{a^2}{b^2}=\dfrac pq$. Lengths are positive, so the ratio of the legs is the square root of the ratio of their projections. If $p:q=4:9$, it follows that $a:b=2:3$. The longer leg has the longer projection.

Adding the two equations gives a different check. We obtain $a^2+b^2=c(p+q)=c^2$, exactly the Pythagorean result. This sum alone does not distinguish which projection belongs to which leg. To match them, use points $B$ and $C$ in the diagram again.

:::

## Euclid's second theorem

::::teorema{#euclide-secondo titolo="The altitude and the product of the projections"}

The square of the altitude to the hypotenuse of a right triangle is the product of the two projections.

$$
h^2=pq.
$$

:::dimostrazione

In the similarity $HBA\sim HAC$, side $BH$ corresponds to $AH$, while $AH$ of the first triangle corresponds to $HC$ of the second. Taking the ratios in the same order gives $\dfrac{BH}{AH}=\dfrac{AH}{HC}$. Cross-multiplication gives $AH^2=BH\cdot HC$. The altitude is the middle term because it is the shared side and has different roles in the two triangles.

:::

::::

:::esempio{titolo="Recovering and checking the projections"}

With $h=6$ cm and $p=4$ cm, the second theorem gives $q=\dfrac{h^2}{p}=9$ cm. The hypotenuse is $c=p+q=13$ cm. Locate $H$ starting from the endpoint associated with $p$. Swapping the names of the projections swaps the corresponding legs and leaves $h$ and $c$ unchanged.

If only $c$ is known, write $q=c-p$ to check the possible values of the altitude. Completing the square gives

$$
h^2=p(c-p)=\left(\dfrac c2\right)^2-\left(p-\dfrac c2\right)^2.
$$

It follows that $h\le\dfrac c2$. Equality occurs when the projections are equal, and the first theorem then makes the legs equal too. For $c=10$ cm the maximum is $h=5$ cm. The endpoints in the graph give a zero projection, so they do not represent triangles with two positive legs.

::grafico{xmin=-0.8 xmax=10.9 ymin=-3.7 ymax=28.3 curve="t,t*(10-t),0,10" nomi="p,y" legenda="y=h^2=p(10-p)" punti="0,0,vuoto;5,25,pieno;10,0,vuoto" segmenti="5,0,5,25" titolo="For $c=10$, the altitude squared is largest at $p=q=5$"}

:::

::::teorema{#euclide-inverso titolo="A test for recognizing the right angle"}

Even without knowing the angle at $A$, the altitude $AH$ can be drawn in triangle $ABC$. If $H$ is inside $BC$ and $AH^2=BH\cdot HC$, then the original triangle is right at $A$.

:::dimostrazione

By the Pythagorean theorem in the two triangles that are right at $H$, $AB^2=p^2+h^2$ and $AC^2=q^2+h^2$. The hypothesis gives $h^2=pq$. Their sum is therefore $p^2+q^2+2pq=(p+q)^2=BC^2$. The converse Pythagorean theorem makes the angle opposite $BC$ right. The interior position of the foot justifies using $p+q$.

:::

::::

:::esempio{titolo="Starting from the altitude and hypotenuse"}

If $c=20$ cm and $h=8$ cm, the altitude is below the bound of $10$ cm. The completed square gives $(p-10)^2=100-64=36$. Thus $p$ is either $4$ cm or $16$ cm, and $q$ is the other value. Check both $4+16=20$ and $4\cdot16=8^2$. Once $A$ has been marked at distance $h$ on the perpendicular at $H$, the converse just proved guarantees a right angle at $A$.

Information about the legs would distinguish which segment is $BH$. For example, $AB<AC$ requires $p<q$, so $p=4$ cm. If $h=11$ cm were given, the quantity under the square root for the distance of $p$ from the interval's midpoint would be negative.

:::

## Area and inverse calculations

:::osservazione{#problemi titolo="Two choices of base"}

Find the area of a right triangle using one leg as the base and the other as its altitude. If the hypotenuse is the base, the altitude is $AH$. The same area $\mathcal A$ therefore has two expressions.

$$
\mathcal A=\dfrac{ab}{2}=\dfrac{ch}{2},\qquad h=\dfrac{ab}{c}.
$$

For legs of $9$ cm and $12$ cm, the hypotenuse is $c=15$ cm and the area is $54$ cm$^2$. Dividing twice the area by $c$ gives $h=\dfrac{108}{15}=7.2$ cm. Compare this with half the hypotenuse, $7.5$ cm, the bound from the second theorem.

:::

:::esempio{titolo="From area to a possible altitude"}

If a right triangle has area $42$ cm$^2$ and hypotenuse $14$ cm, find $h=\dfrac{2\cdot42}{14}=6$ cm without knowing the legs. The check $6\le7$ confirms that the altitude is within its bound.

Substituting $h\le\dfrac c2$ in the area formula gives $\mathcal A\le\dfrac{c^2}{4}$. With hypotenuse $14$ cm, the largest area is $49$ cm$^2$, attained with equal legs. A given area of $50$ cm$^2$ would be incompatible, even though the equation $ch=2\mathcal A$ alone gives a numerical value of $h$.

:::

:::esempio{titolo="An altitude in an isosceles triangle"}

Suppose an isosceles triangle has equal sides of $13$ cm and base $10$ cm. Its altitude to the base meets the midpoint. In both resulting right triangles half the base measures $5$ cm. The side of length $13$ cm is the hypotenuse. The altitude is $\sqrt{13^2-5^2}=12$ cm and the area is $60$ cm$^2$. The right angle used is the one at the foot of the constructed altitude.

::grafico{assi=0 uguale=1 xmin=-0.94 xmax=10.91 ymin=-0.9 ymax=13.05 linee="0,0 10,0 5,12 0,0;5,12 5,0;5,0.32 5.32,0.32 5.32,0" punti="0,0;10,0;5,12;5,0" etichette="2.5,-0.44,5;7.5,-0.44,5;1.83,6.26,13;8.24,6.22,13;5.36,5.72,h" titolo="The median to the base produces two congruent right triangles"}

:::

## Distances in a plane

:::esempio{#distanze titolo="Two perpendicular displacements"}

On a map, move from $P$ to $Q$ for $0.3$ km east, then from $Q$ to $R$ for $400$ m north. The route along both legs is $700$ m long. For the direct distance, convert $0.3$ km to $300$ m and identify the right angle at $Q$. The direct segment $PR$ is the hypotenuse and measures $\sqrt{300^2+400^2}=500$ m.

::grafico{assi=0 uguale=1 xmin=-0.73 xmax=4.02 ymin=-0.77 ymax=4.79 linee="0,0 3,0 3,4;2.76,0 2.76,0.24 3,0.24" segmenti="0,0,3,4" punti="0,0;3,0;3,4" etichette="-0.18,-0.38,P;3.18,-0.38,Q;3.19,4.35,R;1.47,-0.38,300 m;3.56,2,400 m" titolo="The dashed line is the direct distance"}

The direct distance is longer than either leg but shorter than the route through $Q$. If the direction of the second displacement changed, the two lengths alone would not justify applying the Pythagorean theorem. The information about the directions fixes the angle.

:::

:::esempio{titolo="Using differences between coordinates"}

In the coordinate plane, points $P=(2,-3)$ and $R=(8,5)$ can be joined by a horizontal segment and a vertical one. Their lengths are the absolute differences of corresponding coordinates, $6$ and $8$. The axes are perpendicular, so the distance is $\sqrt{6^2+8^2}=10$. Reversing the point order changes the signs of the differences while leaving their squares unchanged.

When one coordinate agrees, one segment has length zero. In that case the points lie on the same horizontal or vertical line and the absolute value of the other difference is enough.

::grafico{xmin=-0.6 xmax=9 ymin=-4.1 ymax=6.2 punti="2,-3,pieno,P;8,5,pieno,R;8,-3,pieno,Q" segmenti="2,-3,8,-3;8,-3,8,5" linee="2,-3 8,5" titolo="The legs of the triangle are the horizontal and vertical differences"}

:::
