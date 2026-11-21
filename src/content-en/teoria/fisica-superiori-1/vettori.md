---
titolo: "Vectors"
sommario: "Components, sums, differences, magnitudes, and equilibrant forces, with geometric constructions and sign checks."
---

Two displacements of $4$ metres, one east and one west, have the same length and end at different points. This chapter describes quantities of this kind with an arrow or with a pair of numbers, and uses those numbers to calculate sums, differences and lengths.

## Magnitude, direction, and sense

:::definizione{#definizione titolo="Representing an oriented quantity"}
A **quantity** is a property that is measured, such as a length or a time. The result of the measurement is a number followed by a unit of measurement. In $4\,\mathrm m$ the number is $4$ and the unit is the metre, whose symbol is $\mathrm m$. The **displacement** of an object is its change of position, from the starting point to the end point.

A **vector** is a quantity described by three pieces of information, which are the magnitude, the direction and the sense. It is drawn as an arrow: the point where the arrow starts is called the *tail*, and the end with the arrowhead is called the *tip*. A vector is written as a letter with an arrow above it, for example $\vec u$, which is read "vector u".

- The **magnitude** is the length of the arrow. It is a positive number or zero, followed by the unit of measurement.
- The **direction** is the orientation of the line on which the arrow lies, for example horizontal or vertical.
- The **sense** is one of the two ways of travelling along that line, for example to the right or to the left.

A displacement of $4\,\mathrm m$ east and one of $4\,\mathrm m$ west have the same magnitude, namely $4\,\mathrm m$, and the same direction, because both lie on the east-west line. They have opposite senses.

A **scalar** quantity is a quantity described completely by a number and its unit. Distance travelled is a scalar. For the two displacements above it is $4\,\mathrm m$ in both cases, and this value contains no information about the sense.
:::

:::osservazione{#traslazione titolo="Moving an arrow parallel to itself"}
A displacement depends only on the difference between the final position and the starting position. On paper the scale of the drawing also matters, that is, how many metres each square represents.

Two lines are *parallel* when they have the same direction. Two parallel arrows have the *same sense* if they point the same way and *opposite senses* if they point opposite ways. Two parallel arrows of equal length with the same sense represent the same vector, even when they are drawn at different places on the page. In the figure the two arrows named $u$ start at $(0;0)$ and at $(3;2)$, are both horizontal, point to the right and are $4\,\mathrm m$ long, so they are the same vector. The third arrow has the same length and points to the left, so it is the opposite vector $-\vec u$. Because of this property, in a geometric construction an arrow is redrawn at the point where it is needed.

A **force** is a push or a pull exerted on an object. Its unit of measurement is the newton, whose symbol is $\mathrm N$. The *point of application* of a force is the point of the object where the force acts. In problems where the point of application matters, it is an extra piece of data, kept alongside the arrow.

The **zero vector** has magnitude zero. Written with Cartesian components, which are the two signed numbers used to describe an arrow, it has both components equal to zero. Its arrow reduces to a point, so the zero vector has neither direction nor sense.
:::

::grafico{uguale=1 xmin=-1 xmax=8 ymin=-1 ymax=5 vettori="0,0,4,0,u;3,2,7,2,u;4,4,0,4,−u" punti="0,0,pieno;3,2,pieno;4,4,pieno" nomi="x (m),y (m)" titolo="Two equal arrows at different locations and one arrow pointing the opposite way"}

:::esempio{titolo="A closed route and zero displacement"}
On a map, a person walks $6\,\mathrm m$ east from $A$ to $B$. They then walk $8\,\mathrm m$ north to reach $C$. The distance travelled as far as $C$ is $6+8=14\,\mathrm m$.

The displacement from $A$ to $C$ is the arrow that joins the two points directly. The directions east and north form a right angle, that is, an angle of $90^\circ$, so $A$, $B$ and $C$ are the vertices of a right-angled triangle. The two sides that form the right angle are called *legs* and measure $6\,\mathrm m$ and $8\,\mathrm m$. The side opposite the right angle is called the *hypotenuse* and is the segment $AC$. By Pythagoras' theorem the square of the hypotenuse is the sum of the squares of the legs:
$$
\begin{aligned}
AC^2&=6^2+8^2=36+64=100\,\mathrm{m^2},\\[6pt]
AC&=\sqrt{100}\,\mathrm m=10\,\mathrm m.
\end{aligned}
$$
The square root of $100$ is the positive number whose square is $100$, namely $10$. The vector from $A$ to $C$ therefore has magnitude $10\,\mathrm m$, while the distance travelled is $14\,\mathrm m$.

The person then returns directly from $C$ to $A$ along the diagonal, which is $10\,\mathrm m$ long. In total they have walked $14+10=24\,\mathrm m$. The end point coincides with the starting point, so the overall displacement is the zero vector and has magnitude zero.

In the figure the horizontal axis points east and the vertical axis points north. The segment $AB$ represents $6\,\mathrm m$, so its length on paper fixes the scale: if $AB$ covers $6$ squares, each square is worth $1\,\mathrm m$. The magnitude of an arrow is measured with a ruler only if one unit has the same length on paper along both axes. If the two scales are different, for example one square is worth $1\,\mathrm m$ horizontally and $2\,\mathrm m$ vertically, the coordinates of the points are still correct. In that case the length of the drawn arrow is not converted to metres by multiplying it by a single number.
:::

::grafico{uguale=1 xmin=-1.4 xmax=8.2 ymin=-1.2 ymax=9.4 nomi="east (m),north (m)" vettori="0,0,6,0,AB;6,0,6,8,BC;6,8,0,0" punti="0,0,pieno;6,0,pieno,B;6,8,pieno,C" etichette="0.38,-0.45,A;3.42,3.76,CA" titolo="The closed path has three sides of 6 m, 8 m and 10 m. The starting and ending points coincide."}

## Cartesian components

:::definizione{#componenti titolo="Signed projections"}
The **Cartesian axes** are two numbered lines that meet at a right angle. The horizontal axis is called the $x$-axis, the vertical one the $y$-axis, and the point where they meet is the *origin*. Every point of the plane is identified by two numbers, its *coordinates*: the first, the *horizontal coordinate*, is read on the $x$-axis; the second, the *vertical coordinate*, is read on the $y$-axis. The point $(3;-2)$ has horizontal coordinate $3$ and vertical coordinate $-2$.

The **components** of a vector $\vec u$ are two signed numbers. The component $u_x$, read "u sub x", is the displacement along the horizontal axis. The component $u_y$ is the displacement along the vertical axis. The vector is written $\vec u=(u_x;u_y)$, followed by the unit of measurement.

If the $x$-axis is positive to the right and the $y$-axis is positive upwards, the vector $(3;-2)\,\mathrm m$ moves three metres to the right and two metres down. In the figure its tail is at the origin and its tip is the point $B=(3;-2)$. Two segments start from $B$ and reach the axes at a right angle. This operation is called *projection*. The vertical segment meets the $x$-axis at the value $3$, which is $u_x$. The horizontal segment meets the $y$-axis at the value $-2$, which is $u_y$.

If one component is zero and the other is nonzero, the vector is parallel to the axis of the other component. For example, $(3;0)\,\mathrm m$ is horizontal.

The sign of a component depends on the sense chosen for the axis. If the vertical axis were positive downwards, the same vector would be written $(3;2)\,\mathrm m$. The physical displacement stays the same, namely three metres to the right and two metres down.
:::

::grafico{uguale=1 xmin=-1 xmax=5 ymin=-3.6 ymax=2 vettori="0,0,3,-2,u" segmenti="3,0,3,-2;0,-2,3,-2" punti="3,-2,pieno,B" etichette="2.95,0.35,3;-0.55,-1.9,−2" nomi="x (m),y (m)" titolo="Read the components of u by projecting B onto the axes"}

:::esempio{#punti-estremi titolo="From two points to a displacement"}
The symbol $\overrightarrow{AB}$ is read "vector AB" and denotes the arrow with its tail at $A$ and its tip at $B$. Its components are obtained by subtracting the coordinates of the starting point from those of the end point.

Let $A=(2;1)\,\mathrm m$ and $B=(5;3)\,\mathrm m$. Going from $A$ to $B$ the horizontal coordinate increases by $5-2=3\,\mathrm m$ and the vertical coordinate increases by $3-1=2\,\mathrm m$. Thus $\overrightarrow{AB}=(3;2)\,\mathrm m$.

The pair $(5;3)\,\mathrm m$ is a *position*, because it says where the end point is. The pair $(3;2)\,\mathrm m$ is a *change in position*, because it says how far one has moved.

On the reverse path, from $B$ to $A$, the starting point and the end point are interchanged, so both components change sign: $\overrightarrow{BA}=(2-5;1-3)\,\mathrm m=(-3;-2)\,\mathrm m$.
:::

::grafico{uguale=1 xmin=0 xmax=6 ymin=0 ymax=4 vettori="2,1,5,3" punti="2,1,pieno;5,3,pieno,B" etichette="1.70,1.29,A;3.50,2.28,AB" segmenti="2,1,5,1;5,1,5,3" nomi="x (m),y (m)" titolo="From A to B the change is 3 m horizontally and 2 m vertically"}

:::esempio{titolo="A vertical axis pointing downwards"}
In a sports hall, a target moves from position $A=(2;5)\,\mathrm m$ to position $B=(7;3)\,\mathrm m$. The second coordinate is the *height* above the floor, measured upwards. Subtracting the starting coordinates from the final ones gives
$$
\overrightarrow{AB}=(7-2;3-5)\,\mathrm m=(5;-2)\,\mathrm m.
$$
Both heights are positive. The vertical component of the displacement is negative because the final height, $3\,\mathrm m$, is less than the starting height, $5\,\mathrm m$.

A camera uses the same horizontal coordinates and measures the vertical coordinate downwards, starting from a zero placed at a height of $6\,\mathrm m$. The camera reading is therefore $6$ minus the height. For $A$ it is $6-5=1\,\mathrm m$ and for $B$ it is $6-3=3\,\mathrm m$. The vertical component according to the camera is $3-1=+2\,\mathrm m$.

In the difference the zero of the scale is eliminated, because $(6-3)-(6-5)=5-3=2$. The sign is instead opposite to the earlier one, because a decrease in the height measured upwards is an increase in the coordinate measured downwards. The magnitude is the same in both descriptions and equals $\sqrt{5^2+2^2}\,\mathrm m=\sqrt{29}\,\mathrm m$, about $5.4\,\mathrm m$. Swapping the starting point and the end point changes the sign of both components for the camera as well. The sign of a component therefore has a meaning only together with the sense of the axis on which it is measured.
:::

:::esempio{titolo="From position readings to changes"}
A cart passes through the points $A$, $B$ and $C$, in that order. The table lists the positions read on two rulers, in centimetres (symbol $\mathrm{cm}$). The *increment* of a coordinate is its change, that is, the final value minus the starting value.

| Point | x (cm) | y (cm) |
| --- | ---: | ---: |
| A | 6 | 4 |
| B | 4 | 9 |
| C | 8 | 5 |

The vertical component of the section from A to B is obtained from the vertical column alone and equals $9-4=5\,\mathrm{cm}$. The distance between A and B also requires the horizontal column.

From A to B the vector is $(4-6;9-4)=(-2;5)\,\mathrm{cm}$ and from B to C it is $(8-4;5-9)=(4;-4)\,\mathrm{cm}$. The horizontal component changes sign, because the horizontal coordinate first decreases from $6$ to $4$ and then increases from $4$ to $8$.

The overall change from A to C is obtained by subtracting the first row from the last, without using the intermediate reading, and equals $(8-6;5-4)=(2;1)\,\mathrm{cm}$. Adding the two displacements gives the same pair, because $(-2+4;5-4)=(2;1)\,\mathrm{cm}$. The return from $C$ to $A$ has both signs changed, so it is $(-2;-1)\,\mathrm{cm}$.
:::

## Sums, differences, and scalar multiplication

::::teorema{#operazioni titolo="Operations component by component"}
Consider the displacements $\vec u=(3;1)\,\mathrm m$ and $\vec v=(-1;3)\,\mathrm m$, carried out one after the other starting from the origin. Horizontally the movement is $3\,\mathrm m$ to the right and then $1\,\mathrm m$ to the left, so $3+(-1)=2\,\mathrm m$ in total. Vertically the movement is $1+3=4\,\mathrm m$. The end point is $(2;4)$. The vector that goes from the start to the end is the **sum** of the two vectors and is also called the **resultant**. In the figure it is the arrow $R$.

The rule holds for every pair of vectors $\vec u=(u_x;u_y)$ and $\vec v=(v_x;v_y)$ expressed in the same unit of measurement. The sum and the difference are calculated one component at a time:
$$
\vec u+\vec v=(u_x+v_x;u_y+v_y),\qquad
\vec u-\vec v=(u_x-v_x;u_y-v_y).
$$

:::dimostrazione
First $\vec u$ is drawn. Then $\vec v$ is drawn with its tail on the tip of $\vec u$. This construction is called the **tip-to-tail rule**. The overall horizontal displacement is that of the first arrow followed by that of the second, so it equals $u_x+v_x$. The same reasoning holds along the vertical axis, so the overall displacement is $u_y+v_y$.

The *opposite* vector of $\vec v$ is written $-\vec v$ and has the same magnitude, the same direction and the opposite sense. Its components are $(-v_x;-v_y)$. Subtracting $\vec v$ means adding $-\vec v$. Since the opposite has both components with the sign changed, the sums become differences and the result is $(u_x-v_x;u_y-v_y)$.
:::
::::

::grafico{uguale=1 xmin=-1 xmax=5 ymin=-1 ymax=5 vettori="0,0,3,1,u;3,1,2,4,v;0,0,2,4,R" punti="3,1,pieno;2,4,pieno" nomi="x (m),y (m)" titolo="The sum of (3; 1) and (−1; 3) runs from the origin to (2; 4)"}

:::esempio{#differenza-punte titolo="A difference with a shared tail"}
Draw $\vec u=(3;2)\,\mathrm m$ and $\vec v=(1;4)\,\mathrm m$ with the same tail, placed at the origin. The tip of $\vec u$ is then the point $(3;2)$ and the tip of $\vec v$ is the point $(1;4)$. The displacement that leads from the tip of $\vec v$ to the tip of $\vec u$ is calculated as final minus starting:
$$
(3-1;2-4)\,\mathrm m=(2;-2)\,\mathrm m.
$$
The same subtractions define $\vec u-\vec v$, so this arrow is the difference $\vec u-\vec v$.

The sense is checked by adding the difference to $\vec v$. The result is $(1+2;4-2)\,\mathrm m=(3;2)\,\mathrm m$, which is $\vec u$, so the arrow $\vec u-\vec v$ ends at the tip of $\vec u$.
:::

::grafico{uguale=1 xmin=-1 xmax=5 ymin=-1 ymax=5 vettori="0,0,3,2,u;0,0,1,4,v;1,4,3,2,u−v" punti="3,2,pieno;1,4,pieno" nomi="x (m),y (m)" titolo="With a shared tail, u − v runs from the tip of v to the tip of u"}

:::osservazione{#scalare titolo="Multiplying by a scalar"}
In this context a *scalar* is simply a number, denoted by $k$. Multiplying a vector by $k$ means multiplying both components by $k$:
$$
k\vec u=(ku_x;ku_y).
$$
For $\vec u=(3;-1)\,\mathrm m$ and $k=-2$ the result is $-2\vec u=(-2\cdot3;-2\cdot(-1))\,\mathrm m=(-6;2)\,\mathrm m$.

The *absolute value* of a number is the number without its sign and is written between two vertical bars: $\lvert-2\rvert=2$ and $\lvert2\rvert=2$. The magnitude of $k\vec u$ is the magnitude of $\vec u$ multiplied by $\lvert k\rvert$.

- If $k>0$, the vector $k\vec u$ has the same sense as $\vec u$.
- If $k<0$, the vector $k\vec u$ has the opposite sense to $\vec u$.
- If $k=0$, the result is the zero vector.

For $k\neq0$ the vector $k\vec u$ is parallel to $\vec u$. For example $(4;6)=2\cdot(2;3)$ is parallel to $(2;3)$. The vector $(3;2)$, instead, is not parallel to $(2;3)$, because the factor that takes $2$ to $3$ is $\dfrac32$ and the one that takes $3$ to $2$ is $\dfrac23$.

In the example $k=-2$ is negative and $\lvert-2\rvert=2$. The product $-2\vec u$ therefore has both components with the sign changed, the opposite sense and twice the magnitude, as the figure shows.

The scalar $k$ is *dimensionless*, that is, it is a number without a unit of measurement. For this reason the components of $k\vec u$ keep the unit of $\vec u$.
:::

::grafico{uguale=1 xmin=-7 xmax=4 ymin=-2.5 ymax=3.5 vettori="0,0,3,-1,u;0,0,-6,2,−2u" punti="3,-1,pieno;-6,2,pieno" nomi="x (m),y (m)" titolo="The factor −2 reverses the arrow and doubles its length"}

:::esempio{titolo="Drawing both sums and a difference"}
Take $\vec u=(4;1)\,\mathrm m$ and $\vec v=(-1;2)\,\mathrm m$. In the tip-to-tail construction, applying $\vec u$ first and then $\vec v$ passes through the point $(4;1)$ and ends at
$$
(4-1;1+2)\,\mathrm m=(3;3)\,\mathrm m.
$$
Applying $\vec v$ first and then $\vec u$ passes through the point $(-1;2)$ and ends at $(-1+4;2+1)\,\mathrm m=(3;3)\,\mathrm m$. The intermediate points depend on the order, the end point is the same.

The four arrows of the two constructions form a *parallelogram*, that is, a quadrilateral with opposite sides parallel. Its diagonal, from the common start to the point $(3;3)$, is the sum $\vec u+\vec v$.

The displacement that leads from the tip of $\vec v$ to the tip of $\vec u$ is instead the difference:
$$
\vec u-\vec v=(4-(-1);1-2)\,\mathrm m=(5;-1)\,\mathrm m.
$$
The diagonal of the sum, instead, starts at the common tail, so it is a different arrow from the difference.

The check of the difference is $\vec v+(\vec u-\vec v)=\vec u$. The horizontal coordinate is $-1+5=4$ and the vertical coordinate is $2-1=1$, which are the components of $\vec u$.

If one vector is given in centimetres and the other in metres, the same construction is carried out after both have been expressed in the same unit.
:::

::grafico{uguale=1 xmin=-2.2 xmax=5.4 ymin=-1 ymax=5.4 vettori="0,0,4,1,u;0,0,-1,2,v;4,1,3,3,v;-1,2,3,3,u;0,0,3,3" punti="4,1,pieno;-1,2,pieno;3,3,pieno" etichette="1.51,1.20,u+v" nomi="x (m),y (m)" titolo="The paths have different intermediate points and the same resultant (3; 3)."}

:::esempio{titolo="Compensating for a contribution in the same unit"}
A displacement $\vec u=(0.60;-0.20)\,\mathrm m$ is followed by $\vec v=(-20;10)\,\mathrm{cm}$. The two pairs have different units, so before adding, the second is converted to metres. One metre contains $100$ centimetres, so the values are divided by $100$:
$$
-20\,\mathrm{cm}=-\frac{20}{100}\,\mathrm m=-0.20\,\mathrm m,\qquad
10\,\mathrm{cm}=\frac{10}{100}\,\mathrm m=0.10\,\mathrm m.
$$
With $\vec v=(-0.20;0.10)\,\mathrm m$ the sum is
$$
\vec u+\vec v=(0.60-0.20;-0.20+0.10)\,\mathrm m=(0.40;-0.10)\,\mathrm m.
$$
These are the coordinates of the end point relative to the original tail. The horizontal component remains positive because the $20\,\mathrm{cm}$ to the left cancel only part of the $60\,\mathrm{cm}$ travelled to the right.

A third arrow that restores the original height while leaving the horizontal coordinate reached unchanged has components $(0;0.10)\,\mathrm m$, because $-0.10+0.10=0$. A third arrow that returns exactly to the starting point has components $(-0.40;0.10)\,\mathrm m$, because it must also cancel the $0.40\,\mathrm m$ horizontally. The two requirements are different, so the two arrows are different, even though they have the same vertical component.
:::

## Magnitudes and Pythagoras

::::teorema{#modulo titolo="Perpendicular components"}
Two lines are *perpendicular* when they meet at a right angle, like the Cartesian axes. The magnitude of $\vec u$ is written $\lVert\vec u\rVert$, which is read "magnitude of u". In the exercises it is also written $\lvert\vec u\rvert$ or with the letter alone, for example $R$ for the magnitude of $\vec R$.

In the figure the force $\vec u=(6;8)\,\mathrm N$ has its tail at the origin and its tip at $P=(6;8)$. With its two projections the arrow forms a right-angled triangle of which it is the hypotenuse, with legs of $6\,\mathrm N$ and $8\,\mathrm N$. By Pythagoras' theorem
$$
\lVert\vec u\rVert=\sqrt{6^2+8^2}\,\mathrm N=\sqrt{36+64}\,\mathrm N=\sqrt{100}\,\mathrm N=10\,\mathrm N.
$$

For every vector $\vec u=(u_x;u_y)$ referred to perpendicular axes, the magnitude is
$$
\lVert\vec u\rVert=\sqrt{u_x^2+u_y^2}.
$$

:::dimostrazione
Draw $\vec u$ with its tail at the origin. The arrow, its projection on the $x$-axis and the vertical segment that drops from the tip form a right-angled triangle, because the axes are perpendicular. The legs have lengths $\lvert u_x\rvert$ and $\lvert u_y\rvert$. The absolute value is used because a length is positive even when the component is negative. The arrow is the hypotenuse.

By Pythagoras' theorem, the square of the hypotenuse is the sum of the squares of the legs, so $\lVert\vec u\rVert^2=u_x^2+u_y^2$. The square of a number and the square of its absolute value coincide, so the components appear directly in the formula. Of the two numbers that have that square, the positive or zero root is taken, because the magnitude is a length.

If one of the two components is zero, the triangle reduces to a segment. The formula then gives the absolute value of the other component: for $(0;-3)$ the result is $\sqrt{0+9}=3$.
:::
::::

::grafico{uguale=1 xmin=-1 xmax=9 ymin=-2 ymax=10 nomi="uₓ (N),uᵧ (N)" vettori="0,0,6,8" etichette="3.17,3.75,u" segmenti="6,0,6,8;0,8,6,8" punti="6,8,pieno,P" titolo="Legs of 6 N and 8 N give a magnitude of 10 N"}

:::esempio{#componente-mancante titolo="Finding a component from the length"}
A vector has magnitude $5\,\mathrm m$ and horizontal component $3\,\mathrm m$. From the relation $5^2=3^2+u_y^2$ the square of the vertical component is found by subtracting $3^2$ from both sides of the equality:
$$
u_y^2=5^2-3^2=25-9=16\,\mathrm{m^2}.
$$
The square root of $16$ is $4$, so the vertical component, taken without its sign, is $4\,\mathrm m$. This value without sign is its **size**.

Both $+4$ and $-4$ have square $16$, so the data are satisfied by $u_y=+4\,\mathrm m$ and by $u_y=-4\,\mathrm m$. If the text of the exercise says that the arrow points down, with the $y$-axis positive upwards the component is $u_y=-4\,\mathrm m$.

A component of size $6\,\mathrm m$ is impossible for a vector of magnitude $5\,\mathrm m$, because $6^2=36$ exceeds $5^2=25$ and the square of the other component would be negative.
:::

:::esempio{titolo="Two possible arrows and a measurement that distinguishes them"}
A detector gives for $\vec u$ the component $u_x=-5\,\mathrm m$ and the magnitude $13\,\mathrm m$. Pythagoras' theorem gives
$$
u_y^2=13^2-5^2=169-25=144\,\mathrm{m^2},
$$
and the square root of $144$ is $12$. The tips $(-5;12)$ and $(-5;-12)$ both satisfy the data.

In the figure the *circle* with centre at the origin and radius $13$ contains all the points at distance $13$ from the origin, that is, all the possible tips of an arrow of magnitude $13\,\mathrm m$. The vertical line contains all the points with horizontal coordinate $-5$. The two tips found are the points where the line meets the circle.

If a second photograph shows that the tip is higher than the tail, then $u_y=+12\,\mathrm m$. This information selects one of the two points and leaves the measured magnitude unchanged.

With a magnitude of $5\,\mathrm m$ and the same horizontal component the result would be $u_y^2=25-25=0$. The two possibilities would coincide at the point $(-5;0)$ and the arrow would be horizontal. With a magnitude below $5\,\mathrm m$ no point would satisfy the data, because the absolute value of a component is always less than or equal to the magnitude. This comparison between component and magnitude is made before calculating the root.
:::

::grafico{uguale=1 xmin=-15 xmax=15 ymin=-15 ymax=15 nomi="x (m),y (m)" curve="13*cos(t),13*sin(t),0,6.283185307" vettori="0,0,-5,12,u₁;0,0,-5,-12,u₂" segmenti="-5,-13,-5,13" punti="-5,12,pieno;-5,-12,pieno" titolo="Both arrows have horizontal component −5 m and magnitude 13 m."}

## Vectors along the same line

:::teorema{#collineari titolo="Signed sums and bounds on the resultant"}
Two vectors are **collinear** when they lie on the same line or on parallel lines, that is, when they have the same direction. To add them, one signed number for each is enough. A positive sense is chosen on the line, the component of the vectors with that sense is written with the sign $+$ and that of the vectors with the opposite sense with the sign $-$. The component of the resultant is the sum of these numbers.

A displacement of $8\,\mathrm m$ to the right is followed by one of $3\,\mathrm m$ to the left. With the right chosen as the positive sense, the components are $+8\,\mathrm m$ and $-3\,\mathrm m$. The sum has component $8-3=5\,\mathrm m$. The result is positive, so the resultant points to the right and has magnitude $5\,\mathrm m$.

The total length of the path is $8+3=11\,\mathrm m$, because both sections are travelled, including the one in the opposite sense.
:::

:::osservazione{#limiti-modulo titolo="Minimum and maximum at fixed magnitudes"}
Two forces have magnitudes $7\,\mathrm N$ and $4\,\mathrm N$ and any directions. If they are aligned with the same sense, the resultant has magnitude $7+4=11\,\mathrm N$. If they are aligned with opposite senses, the resultant has magnitude $7-4=3\,\mathrm N$. In all other positions the magnitude of the resultant lies between $3\,\mathrm N$ and $11\,\mathrm N$.

For two arrows of magnitudes $a$ and $b$, the magnitude of the resultant lies between $\lvert a-b\rvert$ and $a+b$. The absolute value is needed because the difference $a-b$ is negative when $b$ exceeds $a$.

The reason can be read in the tip-to-tail construction, in which the two arrows and the resultant are the three sides of a triangle. In a triangle each side is at most as long as the sum of the other two, because the segment is the shortest path between two points.

- The resultant is the side that joins the start and the end directly, so it is at most $a+b$ long. This is the upper bound.
- The arrow of magnitude $a$ is in turn at most as long as the resultant plus the other arrow, so the resultant is at least $a-b$ long. The same reasoning on the arrow of magnitude $b$ gives at least $b-a$. This is the lower bound.
:::

:::esempio{titolo="Testing two candidate readings without knowing the angle"}
Two forces applied at the same point have magnitudes $10\,\mathrm N$ and $6\,\mathrm N$. If they have the same sense, the resultant has magnitude $10+6=16\,\mathrm N$. If they are opposite, the magnitude is $10-6=4\,\mathrm N$. Whatever the angle between the two forces, the magnitude of the resultant therefore lies between $4\,\mathrm N$ and $16\,\mathrm N$.

A reading of $17\,\mathrm N$ is impossible with these data, because it exceeds the sum of the magnitudes. A reading of $3\,\mathrm N$ is also impossible, because it is less than $4\,\mathrm N$. An arrow of magnitude $6$ pointing in the opposite sense to one of magnitude $10$ cancels at most $6$ of it, and $4$ remain.

If the forces are perpendicular, the magnitude is calculated with Pythagoras' theorem:
$$
\sqrt{10^2+6^2}\,\mathrm N=\sqrt{136}\,\mathrm N=\sqrt{4\cdot34}\,\mathrm N=2\sqrt{34}\,\mathrm N,
$$
about $11.7\,\mathrm N$. The converse also holds: if a reading gives $R^2=10^2+6^2$, the two forces are perpendicular. This is the converse of Pythagoras' theorem, by which a triangle with $c^2=a^2+b^2$ has a right angle between the sides $a$ and $b$.

The axes divide the plane into four regions, called *quadrants*. The first contains the points with both coordinates positive and the others are counted anticlockwise. To establish which quadrant the resultant points into, the directions and senses of the two forces are needed. The magnitude alone does not indicate which of the two components is larger. For vectors on the same line, in contrast, the sign assigned to each arrow contains all the information about the sense.
:::

## The equilibrant vector

:::definizione{#equilibrante titolo="Cancelling a resultant"}
A point is in *equilibrium* when the sum of the forces applied to it is the zero vector. The **equilibrant** of a resultant $\vec R$ is the vector that, added to $\vec R$, gives the zero vector. It is therefore the opposite vector $-\vec R$.

The sum is zero when it is zero along each axis, so each component of the equilibrant is the opposite of the corresponding component of $\vec R$. If $\vec R=(-4;2)\,\mathrm N$, the equilibrant is $\vec E=(4;-2)\,\mathrm N$. Indeed
$$
\vec R+\vec E=(-4+4;2-2)\,\mathrm N=(0;0)\,\mathrm N.
$$
The two arrows have the same magnitude and opposite senses, as the figure shows.

This check concerns only the sum of the vectors. For an *extended body*, that is, an object whose size matters, such as a rod or a door, the study of equilibrium also involves the points of application of the forces.
:::

::grafico{uguale=1 xmin=-5.4 xmax=5.4 ymin=-3.6 ymax=3.6 vettori="0,0,-4,2,R;0,0,4,-2,E" nomi="x (N),y (N)" titolo="R and E have opposite components along both axes"}

:::esempio{titolo="More than two contributions"}
The forces $\vec a=(5;-2)\,\mathrm N$ and $\vec b=(-3;4)\,\mathrm N$ are given. First the resultant is calculated:
$$
\vec R=\vec a+\vec b=(5-3;-2+4)\,\mathrm N=(2;2)\,\mathrm N.
$$
The force that cancels it is the equilibrant $\vec c=-\vec R=(-2;-2)\,\mathrm N$.

The check is made by adding the three forces, one axis at a time. The horizontal sum is $5-3-2=0$ and the vertical sum is $-2+4-2=0$. The two checks are separate, because the sums along the two axes are independent. With $\vec c=(-2;0)\,\mathrm N$, for example, the horizontal sum would be zero and the vertical sum $-2+4=2\,\mathrm N$.
:::

:::esempio{titolo="Two constraints aligned with different axes"}
A ring is pulled by a force $\vec R=(8;-6)\,\mathrm N$. Two cords are tied to the same ring. A cord exerts a force only by pulling, along its own direction. The first cord pulls to the left and the second pulls upwards. This restriction on direction and sense is the *constraint* of each cord.

The *tension* of a cord is the magnitude of the force with which it pulls. The tensions are denoted by $T_1$ and $T_2$ and are positive numbers or zero, in symbols $T_1\geq0$ and $T_2\geq0$. The first cord exerts the force $(-T_1;0)$ and the second the force $(0;T_2)$. The ring is in equilibrium when the sum of the three forces is zero along both axes. With the forces expressed in newtons, the two conditions hold together:
$$
\begin{cases}
8-T_1=0\\
-6+T_2=0
\end{cases}
$$
The first gives $T_1=8\,\mathrm N$ and the second gives $T_2=6\,\mathrm N$. Together the two cords exert the force $(-8;6)\,\mathrm N$, which is the equilibrant of $\vec R$. Its magnitude is
$$
\sqrt{(-8)^2+6^2}\,\mathrm N=\sqrt{64+36}\,\mathrm N=\sqrt{100}\,\mathrm N=10\,\mathrm N.
$$
The same effect is obtained with a single cord under a tension of $10\,\mathrm N$ in the direction and sense of the equilibrant, which in the figure is the arrow $E$.

If both cords pulled only horizontally, the vertical component $-6\,\mathrm N$ would remain uncancelled for any value of the tensions. The examination of the components that each cord supplies therefore comes before the calculation. When the calculation gives a negative tension for a cord that pulls only in the assigned sense, those cords do not maintain equilibrium.
:::

::grafico{uguale=1 xmin=-11 xmax=10.3 ymin=-8.4 ymax=8.2 nomi="Fₓ (N),Fᵧ (N)" vettori="0,0,8,-6,R;0,0,-8,0,T₁;0,0,0,6,T₂;0,0,-8,6,E" segmenti="-8,0,-8,6;-8,6,0,6" titolo="The cords supply −8 N along x and 6 N along y. The diagonal E is the equilibrant."}
