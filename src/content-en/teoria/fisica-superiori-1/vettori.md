---
titolo: "Vectors"
sommario: "Components, sums, differences, magnitudes, and equilibrant forces, with geometric constructions and sign checks."
---

Two displacements of the same length can end at different points. To describe them we need a length and information about orientation, which can be represented by an arrow or two components.

## Magnitude, direction, and sense

:::definizione{#definizione titolo="Representing an oriented quantity"}
A vector's **magnitude** is its length and is always nonnegative. The **direction** is the orientation of the line containing the arrow, such as horizontal. The **sense** identifies one of the two ways along that line, such as to the right or to the left. Displacements of $4\,\mathrm m$ east and $4\,\mathrm m$ west have the same magnitude and direction, with opposite senses. Distance travelled is instead a scalar quantity. It is four metres in both cases, expressed with only a number and unit.
:::

:::osservazione{#traslazione titolo="Moving an arrow parallel to itself"}
A displacement depends on the difference between final and starting positions and on scale. Two parallel arrows of equal length pointing the same way represent the same displacement vector, even when they are drawn in different places. This lets us use an arrow at different positions in a geometric construction. In problems where the point of application of a force matters, keep separate information about where the force acts. The zero vector has magnitude zero and every component is zero. Its arrow collapses to a point and specifies neither direction nor sense.
:::

::grafico{uguale=1 xmin=-1 xmax=8 ymin=-1 ymax=5 vettori="0,0,4,0,u;3,2,7,2,u;4,4,0,4,−u" punti="0,0,pieno;3,2,pieno;4,4,pieno" nomi="x (m),y (m)" titolo="Two equal arrows at different locations and one arrow pointing the opposite way"}

:::esempio{titolo="A closed route and zero displacement"}
On a map, a person walks $6\,\mathrm m$ east from $A$ to $B$. They then walk $8\,\mathrm m$ north to reach $C$. The vector from $A$ to $C$ has magnitude $10\,\mathrm m$, because it is the hypotenuse of a triangle with legs of six and eight metres. The distance travelled is $14\,\mathrm m$. The person returns directly from $C$ to $A$ along the diagonal, bringing the total distance to $24\,\mathrm m$. The final displacement has magnitude zero because the endpoint coincides with the starting point.

In a plane with east as the horizontal direction and north as the vertical direction, use the segment from $A$ to $B$ as a reference for the scale. One unit must have the same length on paper along both axes if you want to measure the magnitude with a ruler. On a map with different scales the coordinates are still meaningful, but no single factor converts the length of the drawn arrow.
:::

::grafico{uguale=1 xmin=-1.4 xmax=8.2 ymin=-1.2 ymax=9.4 nomi="east (m),north (m)" vettori="0,0,6,0,AB;6,0,6,8,BC;6,8,0,0" punti="0,0,pieno;6,0,pieno,B;6,8,pieno,C" etichette="0.38,-0.45,A;3.42,3.76,CA" titolo="The closed path has three sides of 6 m, 8 m and 10 m. The starting and ending points coincide."}

## Cartesian components

:::definizione{#componenti titolo="Signed projections"}
Once axes are chosen, **component** $u_x$ is the signed displacement along the horizontal axis and $u_y$ the signed displacement along the vertical axis. With right and up positive, $(3;-2)\,\mathrm m$ moves three metres right and two metres down. If a component is zero, the vector stays parallel to the other axis as long as the other component is nonzero. Changing which way an axis points can change a sign because the reading convention changes. The physical displacement stays the same.
:::

::grafico{uguale=1 xmin=-1 xmax=5 ymin=-3.6 ymax=2 vettori="0,0,3,-2,u" segmenti="3,0,3,-2;0,-2,3,-2" punti="3,-2,pieno,B" etichette="2.95,0.35,3;-0.55,-1.9,−2" nomi="x (m),y (m)" titolo="Read the components of u by projecting B onto the axes"}

:::esempio{#punti-estremi titolo="From two points to a displacement"}
Let $A=(2;1)\,\mathrm m$ and $B=(5;3)\,\mathrm m$. From $A$ to $B$ the horizontal position increases by $5-2=3\,\mathrm m$ and the vertical position by $3-1=2\,\mathrm m$. Thus $\overrightarrow{AB}=(3;2)\,\mathrm m$. The endpoint $(5;3)\,\mathrm m$ gives a position, while $(3;2)\,\mathrm m$ gives a change in position. Reversing the path interchanges start and finish, so both signs change.
:::

::grafico{uguale=1 xmin=0 xmax=6 ymin=0 ymax=4 vettori="2,1,5,3" punti="2,1,pieno;5,3,pieno,B" etichette="1.70,1.29,A;3.50,2.28,AB" segmenti="2,1,5,1;5,1,5,3" nomi="x (m),y (m)" titolo="From A to B the change is 3 m horizontally and 2 m vertically"}

:::esempio{titolo="A vertical axis pointing downwards"}
In a sports hall, a target moves from $A=(2;5)\,\mathrm m$ to $B=(7;3)\,\mathrm m$, with heights measured upwards. Subtracting the coordinates gives $\overrightarrow{AB}=(5;-2)\,\mathrm m$. Both heights are positive, yet the vertical displacement is negative because the final height is lower. A camera uses the same horizontal coordinates but measures the vertical coordinate downwards from a zero at height $6\,\mathrm m$. The heights read by the camera are therefore $1\,\mathrm m$ and $3\,\mathrm m$, and its vertical component is $+2\,\mathrm m$.

The zero of the scale cancels in the difference. Reversing the axis changes the sign because a decrease in upward height becomes an increase in the downward coordinate. The magnitude $\sqrt{5^2+2^2}\,\mathrm m$ is the same in both descriptions. Swapping the start and finish would reverse both components for the camera as well. In every case, read the axis convention before subtracting.
:::

:::esempio{titolo="From position readings to changes"}
A cart passes through $A$, $B$ and $C$ in that order. The table lists positions read on two rulers. To find the vertical component from A to B, compare the two readings in the vertical column. Finding the distance from A to B would also require the horizontal readings.

| Point | x (cm) | y (cm) |
| --- | ---: | ---: |
| A | 6 | 4 |
| B | 4 | 9 |
| C | 8 | 5 |

From A to B the displacement is $(4-6;9-4)=(-2;5)\,\mathrm{cm}$. From B to C the sign of the horizontal component changes because the coordinate goes from four to eight. The vector is $(8-4;5-9)=(4;-4)\,\mathrm{cm}$. To find the overall change, you can set aside the intermediate readings and subtract the first row from the last, giving $(2;1)\,\mathrm{cm}$. Adding both displacements gives the same pair. The return along $CA$ would reverse both signs.
:::

## Sums, differences, and scalar multiplication

::::teorema{#operazioni titolo="Operations component by component"}
For $\vec u=(u_x;u_y)$ and $\vec v=(v_x;v_y)$ expressed in the same unit,
$$
\vec u+\vec v=(u_x+v_x;u_y+v_y),\qquad
\vec u-\vec v=(u_x-v_x;u_y-v_y).
$$

:::dimostrazione
Draw $\vec u$ first and put the tail of $\vec v$ on its tip. The overall horizontal displacement is that of the first arrow followed by that of the second. The same addition applies vertically. This is the **tip-to-tail rule**. To subtract $\vec v$, add its opposite $-\vec v$. The opposite changes both component signs, turning the sums into differences.
:::
::::

::grafico{uguale=1 xmin=-1 xmax=5 ymin=-1 ymax=5 vettori="0,0,3,1,u;3,1,2,4,v;0,0,2,4,R" punti="3,1,pieno;2,4,pieno" nomi="x (m),y (m)" titolo="The sum of (3; 1) and (−1; 3) runs from the origin to (2; 4)"}

:::esempio{#differenza-punte titolo="A difference with a shared tail"}
Draw $\vec u=(3;2)\,\mathrm m$ and $\vec v=(1;4)\,\mathrm m$ from a shared tail. Going from the tip of $\vec v$ to the tip of $\vec u$ requires displacement $(3-1;2-4)=(2;-2)\,\mathrm m$. This arrow is $\vec u-\vec v$. To check the orientation, add the difference to $\vec v$. The resulting path reaches the tip of $\vec u$ and recovers the first vector.
:::

::grafico{uguale=1 xmin=-1 xmax=5 ymin=-1 ymax=5 vettori="0,0,3,2,u;0,0,1,4,v;1,4,3,2,u−v" punti="3,2,pieno;1,4,pieno" nomi="x (m),y (m)" titolo="With a shared tail, u − v runs from the tip of v to the tip of u"}

:::osservazione{#scalare titolo="Multiplying by a scalar"}
For a number $k$, $k\vec u=(ku_x;ku_y)$. The magnitude is multiplied by $\lvert k\rvert$. For $k>0$ the sense agrees with that of $\vec u$; for $k<0$ it reverses. For $\vec u=(3;-1)\,\mathrm m$, the product $-2\vec u=(-6;2)\,\mathrm m$ changes both component signs and doubles the magnitude. For $k=0$ the result is the zero vector. Here the scalar is dimensionless, so the components keep their unit.
:::

::grafico{uguale=1 xmin=-7 xmax=4 ymin=-2.5 ymax=3.5 vettori="0,0,3,-1,u;0,0,-6,2,−2u" punti="3,-1,pieno;-6,2,pieno" nomi="x (m),y (m)" titolo="The factor −2 reverses the arrow and doubles its length"}

:::esempio{titolo="Drawing both sums and a difference"}
Take $\vec u=(4;1)\,\mathrm m$ and $\vec v=(-1;2)\,\mathrm m$. In a tip-to-tail construction, applying $\vec u$ before $\vec v$ leads to $(4-1;1+2)\,\mathrm m=(3;3)\,\mathrm m$. Applying the arrows in the opposite order reaches the same point, passing through $(-1;2)\,\mathrm m$ first. The two constructions make up the sides of a parallelogram. The intermediate points change with the order. The diagonal from start to finish remains the same and represents the sum.

If we want the change from the tip of $\vec v$ to the tip of $\vec u$, it is instead $(4-(-1);1-2)\,\mathrm m=(5;-1)\,\mathrm m$. Following the sum diagonal would start at the common tail and answer a different question. The check is $\vec v+(\vec u-\vec v)=\vec u$. The horizontal coordinate is $-1+5=4$ and the vertical coordinate is $2-1=1$. For measurements in centimetres and metres, express them in one unit before carrying out the same construction.
:::

::grafico{uguale=1 xmin=-2.2 xmax=5.4 ymin=-1 ymax=5.4 vettori="0,0,4,1,u;0,0,-1,2,v;4,1,3,3,v;-1,2,3,3,u;0,0,3,3" punti="4,1,pieno;-1,2,pieno;3,3,pieno" etichette="1.51,1.20,u+v" nomi="x (m),y (m)" titolo="The paths have different intermediate points and the same resultant (3; 3)."}

:::esempio{titolo="Compensating for a contribution in the same unit"}
A displacement $\vec u=(0.60;-0.20)\,\mathrm m$ is followed by $\vec v=(-20;10)\,\mathrm{cm}$. To find the final position relative to the original tail, convert the second pair to metres. With $\vec v=(-0.20;0.10)\,\mathrm m$ we get $\vec u+\vec v=(0.40;-0.10)\,\mathrm m$. The horizontal component remains positive because twenty centimetres to the left only partly cancel the sixty travelled to the right.

If a third arrow must restore the original height while preserving the horizontal coordinate reached so far, it must add $0.10\,\mathrm m$ vertically and zero horizontally. To return exactly to the starting point instead, its horizontal component must also be $-0.40\,\mathrm m$. These are different requirements, so they produce different arrows even though the vertical contribution is the same.
:::

## Magnitudes and Pythagoras

::::teorema{#modulo titolo="Perpendicular components"}
With perpendicular axes, the magnitude of $\vec u$ is
$$
\lVert\vec u\rVert=\sqrt{u_x^2+u_y^2}.
$$

:::dimostrazione
The two legs have lengths $\lvert u_x\rvert$ and $\lvert u_y\rvert$. The arrow from the origin to the tip forms the hypotenuse. Pythagoras' theorem gives the squared magnitude as the sum of the squared legs. Take the nonnegative root because magnitude is a length. If one leg has length zero, the formula returns the absolute value of the nonzero component.
:::
::::

::grafico{uguale=1 xmin=-1 xmax=9 ymin=-2 ymax=10 nomi="uₓ (N),uᵧ (N)" vettori="0,0,6,8" etichette="3.17,3.75,u" segmenti="6,0,6,8;0,8,6,8" punti="6,8,pieno,P" titolo="Legs of 6 N and 8 N give a magnitude of 10 N"}

:::esempio{#componente-mancante titolo="Finding a component from the length"}
With magnitude $5\,\mathrm m$ and horizontal component $3\,\mathrm m$, the squared vertical component is $5^2-3^2=16\,\mathrm m^2$. Its **size** is therefore $4\,\mathrm m$. Both $+4\,\mathrm m$ and $-4\,\mathrm m$ are possible components because they have the same square. If the arrow is said to point down, choose the negative sign. A component of size $6\,\mathrm m$ would be incompatible with a total magnitude of five metres.
:::

:::esempio{titolo="Two possible arrows and a measurement that distinguishes them"}
A detector gives the component $u_x=-5\,\mathrm m$ and the magnitude $13\,\mathrm m$ for $\vec u$. Pythagoras gives $u_y^2=13^2-5^2=144\,\mathrm{m^2}$. Both points $(-5;12)$ and $(-5;-12)$ satisfy the data. In the graph they are the intersections of the line with horizontal coordinate $-5$ and a circle of radius $13$ centred at the origin. If a second photograph shows the tip above the tail, then $u_y=+12\,\mathrm m$. This information selects one intersection without changing the measured magnitude.

If the given magnitude had been $5\,\mathrm m$ with the same horizontal component, the two possibilities would coincide at $(-5;0)$. The arrow would be entirely horizontal. With a magnitude below $5\,\mathrm m$ there would be no point, because the absolute value of each component is at most the magnitude. These checks can be made before taking a square root.
:::

::grafico{uguale=1 xmin=-15 xmax=15 ymin=-15 ymax=15 nomi="x (m),y (m)" curve="13*cos(t),13*sin(t),0,6.283185307" vettori="0,0,-5,12,u₁;0,0,-5,-12,u₂" segmenti="-5,-13,-5,13" punti="-5,12,pieno;-5,-12,pieno" titolo="Both arrows have horizontal component −5 m and magnitude 13 m."}

## Vectors along the same line

:::teorema{#collineari titolo="Signed sums and bounds on the resultant"}
For **collinear** vectors, choose a positive sense along their line and add the signed components. Displacements of $8\,\mathrm m$ right and $3\,\mathrm m$ left have a resultant component $8-3=5\,\mathrm m$ to the right. The magnitude of the sum is five metres. The distance travelled is $8+3=11\,\mathrm m$ because both sections are travelled, including the one in the opposite sense.
:::

:::osservazione{#limiti-modulo titolo="Minimum and maximum at fixed magnitudes"}
If two arrows have magnitudes $a$ and $b$, the resultant magnitude lies between $\lvert a-b\rvert$ and $a+b$. For the upper bound use the tip-to-tail construction. The direct side of the triangle is at most as long as the path along the other two sides. For the lower bound, each original side is at most as long as the resultant plus the other original side. The maximum occurs when the arrows line up pointing the same way; the minimum occurs when they line up pointing opposite ways. For magnitudes $7$ and $4\,\mathrm N$, the bounds are $3$ and $11\,\mathrm N$.
:::

:::esempio{titolo="Testing two candidate readings without knowing the angle"}
Two forces applied at the same point have magnitudes $10\,\mathrm N$ and $6\,\mathrm N$. If they point in the same direction, the resultant has magnitude $16\,\mathrm N$. If they point in opposite directions, the magnitude is $4\,\mathrm N$. A reading of $17\,\mathrm N$ would be inconsistent with the data because it exceeds the sum of the magnitudes. A reading of $3\,\mathrm N$ would also be inconsistent. If one arrow has magnitude ten, even an arrow of magnitude six pointing in the opposite direction cannot reduce it below four.

If the forces are perpendicular, the magnitude is $\sqrt{10^2+6^2}\,\mathrm N=\sqrt{136}\,\mathrm N$, between the bounds above. The directions of the two forces are needed to tell which quadrant the resultant points into. Its magnitude alone cannot determine which component is larger. For displacement along a line, in contrast, the sign assigned to each arrow fully determines its direction along that line.
:::

## The equilibrant vector

:::definizione{#equilibrante titolo="Cancelling a resultant"}
The **equilibrant** of a resultant $\vec R$ is $-\vec R$. To obtain a zero sum, each added component must cancel the corresponding one of $\vec R$. If $\vec R=(-4;2)\,\mathrm N$, the equilibrant is $(4;-2)\,\mathrm N$. The two arrows have equal magnitudes and point opposite ways. This check concerns the vector sum. For extended bodies, the points of application must also be considered.
:::

::grafico{uguale=1 xmin=-5.4 xmax=5.4 ymin=-3.6 ymax=3.6 vettori="0,0,-4,2,R;0,0,4,-2,E" nomi="x (N),y (N)" titolo="R and E have opposite components along both axes"}

:::esempio{titolo="More than two contributions"}
Given $\vec a=(5;-2)\,\mathrm N$ and $\vec b=(-3;4)\,\mathrm N$, first find the components of their resultant, $\vec R=(2;2)\,\mathrm N$. To cancel it, add $\vec c=(-2;-2)\,\mathrm N$. Checking the horizontal sum gives $5-3-2=0$; the vertical sum gives $-2+4-2=0$. The checks are separate because a resultant can vanish along one axis while remaining nonzero along the other.
:::

:::esempio{titolo="Two constraints aligned with different axes"}
A ring is pulled at a single point by a force $\vec R=(8;-6)\,\mathrm N$. Two additional cords can pull leftwards and upwards, respectively. The first supplies a force with components $(-T_1;0)$, the second a force with components $(0;T_2)$, with $T_1,T_2\geq0$. Equilibrium requires
$$
8-T_1=0,\qquad -6+T_2=0
$$
when the forces are given in newtons. This gives $T_1=8\,\mathrm N$ and $T_2=6\,\mathrm N$. Together the cords exert a force $(-8;6)\,\mathrm N$. Its magnitude is $10\,\mathrm N$, which could be supplied by a single cord pulling in the direction of that equilibrant.

If both cords could only pull horizontally, no choice of tensions would cancel the vertical component $-6\,\mathrm N$. Before calculating, therefore, check which components each cord can supply. If the calculation requires a negative value for a cord that can only pull in the given direction, the proposed constraint cannot maintain equilibrium.
:::

::grafico{uguale=1 xmin=-11 xmax=10.3 ymin=-8.4 ymax=8.2 nomi="Fₓ (N),Fᵧ (N)" vettori="0,0,8,-6,R;0,0,-8,0,T₁;0,0,0,6,T₂;0,0,-8,6,E" segmenti="-8,0,-8,6;-8,6,0,6" titolo="The cords supply −8 N along x and 6 N along y. The diagonal E is the equilibrant."}
