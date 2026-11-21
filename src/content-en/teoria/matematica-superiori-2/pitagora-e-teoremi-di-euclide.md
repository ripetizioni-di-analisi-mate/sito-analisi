---
titolo: "Pythagoras and Euclid's theorems"
sommario: "The Pythagorean theorem and its converse, diagonals, leg projections, Euclid's theorems, and distance applications."
---

## Legs and hypotenuse

:::definizione{#triangolo titolo="Starting from the right angle"}

A **right triangle** is a triangle with a $90^\circ$ angle, that is, a **right angle**; in drawings the right angle is marked with a small square. The two sides that form the right angle are the **legs**. The side opposite the right angle is the **hypotenuse**. If the right angle is at $A$, this chapter writes $a=AB$ and $b=AC$ for the legs and $c=BC$ for the hypotenuse. Therefore $c$ always denotes the side that does not have $A$ as an endpoint. In a drawing the hypotenuse can be slanted, horizontal or vertical, depending on how the triangle is turned.

The right angle is recognised in three ways:

- it is stated in the text of the problem;
- it follows from the fact that two lines are **perpendicular**, that is, they meet forming right angles;
- it is deduced from the lengths of the three sides, with the converse of the Pythagorean theorem.

The relations between the sides in this chapter hold only in right triangles, so the first step in every problem is to identify the right angle.

::grafico{assi=0 uguale=1 xmin=-0.85 xmax=5.65 ymin=-0.82 ymax=4.61 poligoni="0,0 5,0 0,3.75" linee="0.28,0 0.28,0.28 0,0.28" punti="0,0;5,0;0,3.75" etichette="-0.23,-0.38,A;5.19,-0.37,B;-0.2,4.13,C;2.5,-0.39,a;-0.42,1.85,b;2.67,2.25,c" titolo="The mark at $A$ identifies the legs and the opposite side $BC$"}

:::

## The Pythagorean theorem

::::teorema{#pitagora titolo="A relation between squares"}

If a triangle is right, the square of the hypotenuse equals the sum of the squares of the legs.

$$
c^2=a^2+b^2.
$$

The **square** of a length is the length multiplied by itself ($c^2=c\cdot c$), and it is the area of the square with that side. Since $a^2$ and $b^2$ are positive, $c^2$ is greater than both $a^2$ and $b^2$; therefore the hypotenuse is the longest side of a right triangle.

:::dimostrazione

Construct a square of side $a+b$ and place a copy of the triangle in each of its four corners, so that every side of the large square is divided into a segment $a$ and a segment $b$. A quadrilateral remains in the centre, and each of its sides is a hypotenuse of length $c$.

The angles of a triangle add up to $180^\circ$, so the two acute angles of a right triangle together measure $180^\circ-90^\circ=90^\circ$. At each vertex of the central quadrilateral, on the side of the large square, there is a straight angle of $180^\circ$, made up of one acute angle of a triangle, the other acute angle of the neighbouring triangle and the angle of the quadrilateral. The angle of the quadrilateral therefore measures $180^\circ-90^\circ=90^\circ$. The central quadrilateral has four sides equal to $c$ and four right angles, so it is a square of side $c$ and its area is $c^2$.

::grafico{assi=0 uguale=1 xmin=-0.65 xmax=7.62 ymin=-0.66 ymax=7.67 poligoni="0,0 4,0 0,3;4,0 7,0 7,4;7,4 7,7 3,7;3,7 0,7 0,3" linee="4,0 7,4 3,7 0,3 4,0" etichette="2,-0.39,a;5.5,-0.39,b;4.95,2.15,c" titolo="The central square remains after removing the four triangles"}

The area of the central square is the area of the large square, $(a+b)^2$, minus the area of the four coloured triangles. Each triangle has its legs as base and height, so its area is $\dfrac{ab}{2}$. Expanding the square of a binomial, $(a+b)^2=a^2+2ab+b^2$, gives

$$
\begin{aligned}
c^2&=(a+b)^2-4\cdot\dfrac{ab}{2}\\[6pt]
&=a^2+2ab+b^2-2ab\\[6pt]
&=a^2+b^2 .
\end{aligned}
$$

:::

::::

:::esempio{titolo="Finding the required side"}

With legs of $6$ cm and $8$ cm the unknown is the hypotenuse, so the squares are added and the square root is taken:

$$
c=\sqrt{6^2+8^2}=\sqrt{36+64}=\sqrt{100}=10\,\mathrm{cm}.
$$

The value $10$ cm is longer than both legs. If the given values are instead $c=13$ cm and $a=5$ cm, the unknown is a leg. Subtracting $a^2$ from both sides (the two parts of the equality) of $c^2=a^2+b^2$ gives $b^2=c^2-a^2$:

$$
b=\sqrt{13^2-5^2}=\sqrt{169-25}=\sqrt{144}=12\,\mathrm{cm}.
$$

The number under the root sign is called the **radicand**. In this second calculation the radicand must be positive, because the missing leg has positive length; this happens because the hypotenuse is longer than the known leg.

The numbers under the square root are squared lengths. With both known sides in centimetres, the radicand is in square centimetres ($\mathrm{cm}^2$) and the result is in centimetres. Additions and subtractions are carried out on the squares, then the positive square root is taken. The direct sum of the sides, $6+8=14$ cm, is the length of the route along the two legs and is longer than the hypotenuse, which measures $10$ cm.

:::

## The converse theorem

::::teorema{#inverso titolo="From three side lengths to a right angle"}

The Pythagorean theorem starts from the right angle and arrives at a relation between the sides. The **converse theorem** goes the opposite way: from the side lengths it deduces the right angle.

If three positive lengths $a,b,c$ form a triangle and $c^2=a^2+b^2$, the triangle is right with the right angle opposite side $c$.

:::dimostrazione

Construct a second triangle with two sides of lengths $a$ and $b$ on two perpendicular rays, so that they form a right angle. This triangle is right, so by the Pythagorean theorem its third side measures $\sqrt{a^2+b^2}$. By hypothesis $a^2+b^2=c^2$, therefore the third side measures $c$. The two triangles then have their three sides respectively equal. By the **SSS criterion** (side-side-side), two triangles with three equal sides are congruent, that is, they can be placed exactly on top of each other, and they have the same angles. Hence the angle opposite $c$ in the given triangle is right as well.

:::

In the figure the construction has legs $5$ and $12$; the third side measures $\sqrt{25+144}=\sqrt{169}=13$. The three lengths $5$, $12$, $13$ therefore form a right triangle.

::grafico{assi=0 uguale=1 xmin=-1.05 xmax=13.03 ymin=-0.82 ymax=6.25 linee="0,0 12,0 0,5 0,0;0,0.37 0.37,0.37 0.37,0" punti="0,0;12,0;0,5" etichette="6,-0.44,12;-0.48,2.49,5;6.02,2.85,13" titolo="The construction with legs $5$ and $12$ matches the given side lengths"}

::::

:::attenzione{titolo="Checking the three lengths before deciding"}

Three lengths form a triangle only if the greatest is less than the sum of the other two. This condition is called the **triangle inequality**.

For $4,5,6$ the longest side satisfies $6<4+5=9$, so a triangle exists. The squares give $4^2+5^2=16+25=41$ and $6^2=36$; since $41\ne36$, the angle opposite $6$ is not right. For $2,3,5$ we have $2+3=5$, so the triangle inequality is not satisfied; the three points would be collinear and therefore the triangle does not exist. The existence check and the right-angle check therefore answer two different questions.

When three positive lengths satisfy $c^2=a^2+b^2$, the triangle inequality is automatically satisfied. Indeed

$$
(a+b)^2=a^2+2ab+b^2=c^2+2ab>c^2,
$$

and of two positive lengths the greater is the one with the greater square, so $a+b>c$. To decide whether three positive lengths form a right triangle it is therefore enough to compare the square of the greatest length with the sum of the squares of the other two. The greatest is chosen because the hypotenuse is the longest side.

:::

:::osservazione{titolo="Pythagorean triples and changes of scale"}

A **Pythagorean triple** consists of three positive integers satisfying the equality in the theorem, such as $3,4,5$: indeed $9+16=25$. From $3,4,5$ one obtains $9,12,15$ by multiplying each side by $3$. Each square is multiplied by $3^2=9$, and indeed $81+144=225=15^2$; the two sides of the equality remain equal, so the right angle is preserved. The diagonal of a square of side $1$ instead measures $\sqrt{1^2+1^2}=\sqrt2$, which is not an integer. It is the hypotenuse of a right triangle, but its three lengths $1,1,\sqrt2$ do not form a triple of integers.

:::

## Squares and equilateral triangles

::::teorema{#notevoli titolo="Diagonals, altitudes, and special angles"}

In a square of side $l$, the diagonal measures $l\sqrt2$. In an **equilateral** triangle (three equal sides and three $60^\circ$ angles) of the same side length, the altitude measures $\dfrac{\sqrt3}{2}l$ and the area $\dfrac{\sqrt3}{4}l^2$.

The **altitude** of a triangle is the segment that starts at a vertex and meets the opposite side perpendicularly. These two formulas give the diagonal, the altitude and the area directly, without repeating the Pythagorean theorem each time: for $l=4$ cm the diagonal of the square is $4\sqrt2$ cm and the altitude of the equilateral triangle is $2\sqrt3$ cm.

:::dimostrazione

The diagonal $d$ of the square divides the square into two right triangles whose legs both have length $l$. By the Pythagorean theorem

$$
d^2=l^2+l^2=2l^2,\qquad d=\sqrt{2l^2}=l\sqrt2 .
$$

In the equilateral triangle $ABC$ draw the altitude $AH$. An equilateral triangle is in particular isosceles, and in an isosceles triangle the altitude to the base is also a **median** (it reaches the midpoint of the opposite side) and an angle **bisector** (it divides the vertex angle into two equal angles). Therefore $HC=\dfrac l2$ and triangle $AHC$ is right at $H$, with hypotenuse $AC=l$. By the Pythagorean theorem

$$
h^2=l^2-\left(\dfrac l2\right)^2=l^2-\dfrac{l^2}{4}=\dfrac{3l^2}{4},\qquad h=\dfrac{\sqrt3}{2}l .
$$

The area is base times height divided by two:

$$
\mathcal A=\dfrac12\cdot l\cdot\dfrac{\sqrt3}{2}l=\dfrac{\sqrt3}{4}l^2 .
$$

:::

::grafico{assi=0 uguale=1 xmin=-0.75 xmax=4.83 ymin=-0.78 ymax=4.75 linee="0,0 4,0 4,4 0,4 0,0;0,0 4,4;0,0.24 0.24,0.24 0.24,0" etichette="2,-0.41,l;-0.37,2,l;2.34,1.7,d" titolo="Diagonal $d$ is the hypotenuse across two equal sides"}

::grafico{assi=0 uguale=1 xmin=-0.82 xmax=6.79 ymin=-0.85 ymax=6.03 linee="0,0 6,0 3,5.196152 0,0;3,5.196152 3,0;3,0.27 3.27,0.27 3.27,0" punti="0,0;6,0;3,5.196152;3,0" etichette="-0.17,-0.35,B;6.16,-0.35,C;3,5.63,A;3,-0.4,H;1.5,-0.38,l/2;4.5,-0.38,l/2;3.33,2.45,h" titolo="A side of the equilateral triangle is the hypotenuse of triangle $AHC$"}

::::

:::esempio{titolo="Using a diagonal or a thirty-degree angle"}

If the diagonal of a square is $10$ cm, the side is obtained from $l\sqrt2=10$; multiplying numerator and denominator by $\sqrt2$ removes the root from the denominator:

$$
l=\dfrac{10}{\sqrt2}=\dfrac{10\sqrt2}{2}=5\sqrt2\,\mathrm{cm},\qquad \mathcal A=l^2=25\cdot2=50\,\mathrm{cm}^2 .
$$

The value $100$ cm$^2$ is the square of the diagonal, that is, twice the area.

The altitude of the equilateral triangle is also an angle bisector, so it splits the $60^\circ$ vertex angle into two $30^\circ$ angles. The right triangle $AHC$ therefore has angles of $90^\circ$, $60^\circ$ and $30^\circ$. The side opposite the $30^\circ$ angle is $HC=\dfrac l2$, half the hypotenuse $AC=l$. The leg $AH$, opposite the $60^\circ$ angle, is the altitude of the equilateral triangle and measures $\dfrac{\sqrt3}{2}$ of the hypotenuse.

These relations hold for every right triangle with a $30^\circ$ angle. Such a triangle has the same angles as $AHC$, so it is similar to $AHC$ by the **angle-angle similarity criterion**: two triangles with two equal angles have the same shape and proportional sides. For example, with hypotenuse $10$ cm the leg opposite $30^\circ$ measures $5$ cm and the leg opposite $60^\circ$ measures $5\sqrt3$ cm.

:::

## Projections onto the hypotenuse

:::definizione{#proiezioni titolo="Projecting the endpoints of a leg"}

The **projection** of a point onto a line is the **foot** of the perpendicular drawn from the point to the line, that is, the point where the perpendicular meets the line. The projection of a segment is the segment whose endpoints are the projections of its two endpoints.

In $ABC$ right at $A$, the **altitude to the hypotenuse** is the segment $AH$ perpendicular to line $BC$, and $H$ is its foot. The foot $H$ lies inside segment $BC$. Indeed, if $H$ fell on the extension beyond $B$, triangle $AHB$ would be right at $H$ and its angle at $B$ would be acute. Angle $\widehat{ABC}$, which forms a straight angle together with it, would then be obtuse, and triangle $ABC$ would have a right angle and an obtuse angle, with a sum greater than $180^\circ$; this is impossible. The same holds beyond $C$.

When leg $AB$ is projected onto line $BC$, endpoint $B$ already lies on the line and stays where it is, while $A$ goes to $H$. The projection of leg $AB$ is therefore $BH$, of length $p$. In the same way the projection of $AC$ is $HC$, of length $q$. Write $h=AH$ for the altitude. Both projections are positive and, since $H$ lies inside $BC$, $p+q=c$.

::grafico{assi=0 uguale=1 xmin=-1.25 xmax=26.35 ymin=-1.35 ymax=13.84 linee="0,0 25,0 9,12 0,0;9,12 9,0;9,0.6 9.6,0.6 9.6,0" punti="0,0;25,0;9,12;9,0" etichette="-0.39,-0.65,B;25.37,-0.66,C;9,12.84,A;9,-0.72,H;4.5,-0.65,p;17,-0.65,q;9.99,5.64,h" titolo="$BH$ starts at the same endpoint $B$ as leg $AB$"}

The altitude $AH$ divides $ABC$ into two smaller triangles, $HBA$ and $HAC$. Two triangles are **similar** (symbol $\sim$) when they have equal angles; then the sides opposite equal angles are proportional. The correspondences are read from the angles:

- the whole triangle has its right angle at $A$, the two smaller ones have it at $H$;
- the angle at $B$ is shared by $ABC$ and $HBA$;
- the angle at $C$ is shared by $ABC$ and $HAC$.

The three triangles therefore have two equal angles pairwise, and the third angle is equal because the sum is always $180^\circ$. This gives the similarities

$$
ABC\sim HBA\sim HAC,
$$

written so that corresponding vertices occupy the same position: in $ABC\sim HBA$ vertex $A$ corresponds to $H$, $B$ to $B$ and $C$ to $A$.

:::

## Euclid's first theorem

::::teorema{#euclide-primo titolo="A leg, the hypotenuse, and its projection"}

In a right triangle, the square of each leg is the product of the hypotenuse and that leg's projection onto it.

$$
a^2=cp,\qquad b^2=cq.
$$

For example, with hypotenuse $c=25$ and projection $p=9$ the leg $a$ measures $\sqrt{25\cdot9}=15$.

:::dimostrazione

In the similarity $ABC\sim HBA$ corresponding sides are in the same ratio. Compare the hypotenuses $BC$ and $AB$, then the legs next to the angle at $B$, which are $AB$ and $BH$. This gives the proportion

$$
\dfrac{BC}{AB}=\dfrac{AB}{BH}.
$$

Cross-multiplying, that is, multiplying both sides by $AB\cdot BH$, gives $AB^2=BC\cdot BH$, that is, $a^2=cp$. In the same way the similarity $ABC\sim HAC$ gives $\dfrac{BC}{AC}=\dfrac{AC}{HC}$, so $AC^2=BC\cdot HC$, that is, $b^2=cq$. Each leg is paired with its own projection: $AB$ with $BH$, which shares endpoint $B$, and $AC$ with $HC$, which shares endpoint $C$.

:::

::::

:::esempio{titolo="Solving for a projection"}

With $c=17$ cm and $a=8$ cm, divide the square of $8$ by $17$ to find the projection of $a$; the other projection is the rest of the hypotenuse:

$$
\begin{aligned}
p&=\dfrac{a^2}{c}=\dfrac{64}{17}\,\mathrm{cm},\\[6pt]
q&=17-\dfrac{64}{17}=\dfrac{289-64}{17}=\dfrac{225}{17}\,\mathrm{cm}.
\end{aligned}
$$

Applying the theorem again to the other leg gives $b=\sqrt{cq}=\sqrt{17\cdot\dfrac{225}{17}}=\sqrt{225}=15$ cm. Both projections are shorter than $c$, and $8^2+15^2=64+225=289=17^2$ checks the leg lengths with the Pythagorean theorem.

In the formula $p=\dfrac{a^2}{c}$ square centimetres are divided by centimetres. The result is therefore in centimetres, as it must be for a segment of the hypotenuse.

:::

:::osservazione{titolo="Comparing legs and projections"}

Dividing the left side of $a^2=cp$ by the left side of $b^2=cq$, and the right side by the right side, the factor $c$ cancels and we find

$$
\dfrac{a^2}{b^2}=\dfrac pq .
$$

Lengths are positive, so the ratio of the legs is the square root of the ratio of the projections. If $p:q=4:9$, then $\dfrac ab=\sqrt{\dfrac49}=\dfrac23$, that is, $a:b=2:3$. The longer leg therefore corresponds to the longer projection.

Adding the two formulas instead gives a different check:

$$
a^2+b^2=cp+cq=c(p+q)=c\cdot c=c^2,
$$

which is exactly the Pythagorean theorem. This sum alone does not tell which projection belongs to which leg. To match them, look at the endpoints $B$ and $C$ in the figure.

:::

## Euclid's second theorem

::::teorema{#euclide-secondo titolo="The altitude and the product of the projections"}

The square of the altitude to the hypotenuse of a right triangle is the product of the two projections.

$$
h^2=pq.
$$

For example, with projections $p=9$ and $q=16$ the altitude measures $\sqrt{9\cdot16}=\sqrt{144}=12$.

:::dimostrazione

In the similarity $HBA\sim HAC$ vertex $H$ corresponds to $H$, $B$ to $A$ and $A$ to $C$. So side $BH$ of the first triangle corresponds to side $AH$ of the second, while side $AH$ of the first corresponds to $HC$ of the second. Taking the ratios in the same order gives the proportion

$$
\dfrac{BH}{AH}=\dfrac{AH}{HC}.
$$

In a proportion the product of the means (the two inner terms, here $AH$ and $AH$) equals the product of the extremes (the two outer terms, $BH$ and $HC$). Therefore $AH^2=BH\cdot HC$, that is, $h^2=pq$. The altitude appears twice, as the middle term of the proportion, because it is a side shared by the two triangles with a different role in each; for this reason the altitude is called the **mean proportional** between the two projections.

:::

::::

:::esempio{titolo="Recovering and checking the projections"}

With $h=6$ cm and $p=4$ cm, the second theorem gives $q=\dfrac{h^2}{p}=\dfrac{36}{4}=9$ cm. The hypotenuse is $c=p+q=4+9=13$ cm. Since $p=BH$, point $H$ lies on the hypotenuse $4$ cm from $B$. Swapping the names of the projections swaps the corresponding legs and leaves $h$ and $c$ unchanged.

If only $c$ is known, the possible values of the altitude are found by writing $q=c-p$, so that $h^2=p(c-p)=cp-p^2$. **Complete the square**: since $\left(p-\dfrac c2\right)^2=p^2-cp+\dfrac{c^2}{4}$, we have $cp-p^2=\dfrac{c^2}{4}-\left(p-\dfrac c2\right)^2$. Hence

$$
h^2=p(c-p)=\left(\dfrac c2\right)^2-\left(p-\dfrac c2\right)^2.
$$

A square is never negative, so $h^2\le\left(\dfrac c2\right)^2$ and $h\le\dfrac c2$. Equality holds when $p=\dfrac c2$, that is, when the projections are equal; by the first theorem, then $a^2=cp=cq=b^2$ and the legs are equal too. For $c=10$ cm the maximum is $h=5$ cm. The graph shows $h^2=p(10-p)$ for $p$ between $0$ and $10$, and its highest point is $(5;25)$. The values at the endpoints of the graph would give a zero projection and do not represent triangles with two positive legs; for this reason they are marked with an empty circle.

::grafico{xmin=-0.8 xmax=10.9 ymin=-3.7 ymax=28.3 curve="t,t*(10-t),0,10" nomi="p,y" legenda="y=h^2=p(10-p)" punti="0,0,vuoto;5,25,pieno;10,0,vuoto" segmenti="5,0,5,25" titolo="For $c=10$, the altitude squared is largest at $p=q=5$"}

:::

::::teorema{#euclide-inverso titolo="A test for recognising the right angle"}

The second theorem can also be reversed. In any triangle $ABC$ draw the altitude $AH$ to $BC$, even without knowing the measure of the angle at $A$. If $H$ lies inside $BC$ and $AH^2=BH\cdot HC$, then the triangle is right at $A$.

:::dimostrazione

Set $p=BH$, $q=HC$ and $h=AH$. Triangles $ABH$ and $AHC$ are right at $H$, so by the Pythagorean theorem $AB^2=p^2+h^2$ and $AC^2=q^2+h^2$. Adding and using the hypothesis $h^2=pq$,

$$
AB^2+AC^2=p^2+q^2+2h^2=p^2+q^2+2pq=(p+q)^2 .
$$

Since $H$ lies inside $BC$, we have $p+q=BC$, so $AB^2+AC^2=BC^2$. By the converse of the Pythagorean theorem the angle opposite $BC$, that is, the angle at $A$, is right.

:::

::::

:::esempio{titolo="Starting from the altitude and hypotenuse"}

If $c=20$ cm and $h=8$ cm, the altitude is below the bound $\dfrac c2=10$ cm. The completed-square form just obtained gives

$$
\begin{aligned}
64&=100-(p-10)^2,\\[6pt]
(p-10)^2&=100-64=36,\\[6pt]
p-10&=6\quad\text{or}\quad p-10=-6 .
\end{aligned}
$$

Thus $p$ is either $16$ cm or $4$ cm, and $q$ is the other value. Check both $4+16=20$ and $4\cdot16=64=8^2$. Then mark $A$ on the perpendicular to $BC$ at $H$, at distance $h$ from $H$; the test just proved guarantees that the angle at $A$ is right.

To know which of the two segments is $BH$, information about the legs is needed. For example, if $AB<AC$ the projection of $AB$ is the shorter one, so $p<q$ and $p=4$ cm. If instead $h=11$ cm were given, we would get $(p-10)^2=100-121=-21$; no square is negative, so with those data the triangle does not exist.

:::

## Area and inverse calculations

:::osservazione{#problemi titolo="Two choices of base"}

The area of a triangle is base times height divided by two, and any side can be chosen as the base, with the altitude to that side. In a right triangle:

- if the base is a leg, the height is the other leg;
- if the base is the hypotenuse, the height is $AH$.

The same area $\mathcal A$ therefore has two expressions. Setting them equal, multiplying by $2$ and dividing by $c$ gives the altitude to the hypotenuse:

$$
\mathcal A=\dfrac{ab}{2}=\dfrac{ch}{2},\qquad h=\dfrac{ab}{c}.
$$

For legs of $9$ cm and $12$ cm the hypotenuse is $c=\sqrt{81+144}=\sqrt{225}=15$ cm and the area is $\dfrac{9\cdot12}{2}=54$ cm$^2$. Dividing twice the area by $c$ gives $h=\dfrac{108}{15}=7.2$ cm. This value is less than half the hypotenuse, $7.5$ cm, which is the bound obtained from the second theorem.

:::

:::esempio{titolo="From area to a possible altitude"}

If a right triangle has area $42$ cm$^2$ and hypotenuse $14$ cm, the altitude to the hypotenuse can be found even without knowing the legs:

$$
h=\dfrac{2\mathcal A}{c}=\dfrac{2\cdot42}{14}=6\,\mathrm{cm}.
$$

The check $6\le\dfrac{14}{2}=7$ confirms that the altitude is within its bound.

Substituting $h\le\dfrac c2$ in the area formula gives $\mathcal A=\dfrac{ch}{2}\le\dfrac{c}{2}\cdot\dfrac c2=\dfrac{c^2}{4}$. With hypotenuse $14$ cm the largest area is therefore $\dfrac{196}{4}=49$ cm$^2$, attained with equal legs. A given area of $50$ cm$^2$ would be incompatible with a hypotenuse of $14$ cm. The equation $ch=2\mathcal A$ would still give a number, $h=\dfrac{100}{14}=\dfrac{50}{7}$ cm, but this value exceeds $7$ cm and corresponds to no right triangle.

:::

:::esempio{titolo="An altitude in an isosceles triangle"}

An **isosceles** triangle has two equal sides, called the lateral sides; the third side is the base. In an isosceles triangle the altitude to the base is also a median, so it meets the base at its midpoint.

Suppose an isosceles triangle has equal sides of $13$ cm and base $10$ cm. The altitude to the base divides it into two equal right triangles. In each of them half the base measures $\dfrac{10}{2}=5$ cm and is a leg, while the side of $13$ cm is the hypotenuse. Hence

$$
h=\sqrt{13^2-5^2}=\sqrt{169-25}=\sqrt{144}=12\,\mathrm{cm},\qquad \mathcal A=\dfrac{10\cdot12}{2}=60\,\mathrm{cm}^2 .
$$

The right angle used in the Pythagorean theorem is the one at $H$, the foot of the altitude, and it comes from the construction, because the altitude is perpendicular to the base.

::grafico{assi=0 uguale=1 xmin=-0.94 xmax=10.91 ymin=-0.9 ymax=13.05 linee="0,0 10,0 5,12 0,0;5,12 5,0;5,0.32 5.32,0.32 5.32,0" punti="0,0;10,0;5,12;5,0" etichette="2.5,-0.44,5;7.5,-0.44,5;1.83,6.26,13;8.24,6.22,13;5.36,5.72,h" titolo="The median to the base produces two congruent right triangles"}

:::

## Distances in a plane

:::esempio{#distanze titolo="Two perpendicular displacements"}

On a map, move from $P$ to $Q$ for $0.3$ km east, then from $Q$ to $R$ for $400$ m north. On the map the east and north directions are perpendicular, so there is a right angle at $Q$. Convert $0.3$ km to $0.3\cdot1000=300$ m, so that the two lengths have the same unit. The route along the two segments is $300+400=700$ m long. The direct segment $PR$ is the hypotenuse of triangle $PQR$:

$$
PR=\sqrt{300^2+400^2}=\sqrt{90\,000+160\,000}=\sqrt{250\,000}=500\,\mathrm{m}.
$$

::grafico{assi=0 uguale=1 xmin=-0.73 xmax=4.02 ymin=-0.77 ymax=4.79 linee="0,0 3,0 3,4;2.76,0 2.76,0.24 3,0.24" segmenti="0,0,3,4" punti="0,0;3,0;3,4" etichette="-0.18,-0.38,P;3.18,-0.38,Q;3.19,4.35,R;1.47,-0.38,300 m;3.56,2,400 m" titolo="The dashed line is the direct distance"}

The direct distance is longer than either segment but shorter than the route through $Q$. If the direction of the second displacement changed, the two lengths alone would not be enough to apply the Pythagorean theorem, because it is the information about the directions that establishes the right angle. The same calculation gives the **diagonal of a rectangle**: two consecutive sides of a rectangle are perpendicular, so a rectangle with sides of $300$ m and $400$ m has a diagonal of $500$ m.

:::

:::esempio{titolo="Using differences between coordinates"}

In the coordinate plane a point is given by its **coordinates** $(x,y)$: the $x$-coordinate is the horizontal position and the $y$-coordinate the vertical one. Points $P=(2,-3)$ and $R=(8,5)$ are joined by a horizontal segment from $P$ to $Q=(8,-3)$ and a vertical segment from $Q$ to $R$. The lengths of the two segments are the differences of the coordinates taken in **absolute value**, that is, without sign ($|-6|=6$):

$$
\left|8-2\right|=6,\qquad \left|5-(-3)\right|=8 .
$$

The directions of the axes are perpendicular, so triangle $PQR$ is right at $Q$ and the distance is

$$
PR=\sqrt{6^2+8^2}=\sqrt{36+64}=\sqrt{100}=10 .
$$

The differences of the coordinates are often written $\Delta x$ and $\Delta y$ (read "delta x"): here $\Delta x=8-2=6$ and $\Delta y=5-(-3)=8$. Reversing the order of the points changes the signs of the differences while leaving their squares unchanged; for example $(2-8)^2=(-6)^2=36$.

When one coordinate agrees, one segment has length zero. In that case the two points lie on the same horizontal or vertical line and the distance is the absolute value of the other difference.

::grafico{xmin=-0.6 xmax=9 ymin=-4.1 ymax=6.2 punti="2,-3,pieno,P;8,5,pieno,R;8,-3,pieno,Q" segmenti="2,-3,8,-3;8,-3,8,5" linee="2,-3 8,5" titolo="The legs of the triangle are the horizontal and vertical differences"}

:::
