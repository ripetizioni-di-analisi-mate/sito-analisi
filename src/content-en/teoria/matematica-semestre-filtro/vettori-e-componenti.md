---
titolo: Vectors, components, and products
sommario: Represent vectors, calculate their components and resultants, and use dot and cross products in physics problems.
---

## Scalar and vector quantities

:::definizione{#scalari titolo="Scalars and vectors"}
A **scalar quantity** is described by a value and, when needed, a unit. For example, the mass of an object can be given as $2\,\mathrm{kg}$. A **vector quantity** also specifies a direction, including which way it points along a line. A displacement of $2\,\mathrm{m}$ east differs from a displacement of $2\,\mathrm{m}$ west, even though they have the same magnitude. Both lie along the east–west line. Their directions distinguish the two ways of moving along that line.

A vector is represented by a directed line segment. The tail marks the starting point of the arrow, and the head shows which way it points. The **magnitude** is the length of the arrow at the chosen scale. Parallel arrows of the same length pointing the same way represent the same free vector, even if their tails are at different points. For a force applied to a rigid body, the point of application matters when calculating its rotational effect.
:::

:::esempio{titolo="Displacement and distance traveled"}
A person travels from $P$ to $Q$, moving $3\,\mathrm{m}$ east, then from $Q$ to $R$, moving $4\,\mathrm{m}$ north. The positive $x$ and $y$ axes point east and north, respectively. The distance traveled is $3\,\mathrm{m}+4\,\mathrm{m}=7\,\mathrm{m}$. The total displacement is represented by the arrow from $P$ to $R$. The two displacements along the axes are $3$ and $4\,\mathrm{m}$, so the magnitude of the total displacement is
$$
|\vec s|=\sqrt{(3\,\mathrm{m})^2+(4\,\mathrm{m})^2}
=5\,\mathrm{m}.
$$
The distance traveled depends on the path. Displacement depends only on the initial and final positions. Someone who reaches $R$ along a straight line from $P$ has the same total displacement and travels a distance of $5\,\mathrm{m}$.

::grafico{uguale=1 xmin=-1.1 xmax=4.8 ymin=-1.3 ymax=5.4 vettori="0,0,3,0;3,0,3,4;0,0,3,4" punti="0,0,pieno;3,0,pieno;3,4,pieno,R" etichette="-0.45,0.35,P;3.2,0.25,Q;1.3,-0.6,3 m;3.24,2,4 m" titolo="The path follows the two legs of the triangle. The arrow from $P$ to $R$ represents the displacement."}
:::

:::osservazione{titolo="The zero vector"}
A path that ends where it began has displacement $\vec 0$. The zero vector has magnitude zero. All its components are zero, so its direction is undefined. It can be added to other vectors because addition is performed component by component, even when all the components of one term are zero.
:::

:::esempio{titolo="Coordinates and the choice of reference frame"}
An elevator rises $4\,\mathrm{m}$. If the vertical axis points upward, the displacement component is $+4\,\mathrm{m}$. If the same axis points downward, the component is $-4\,\mathrm{m}$. In both cases the arrow represents the same displacement in space. Only the description has changed. The reference frame must therefore be chosen before assigning signs. When two observations use axes pointing in opposite directions, express both in the same frame before comparing their components.
:::

## Coordinates, components, and magnitude

:::definizione{#componenti titolo="Components along Cartesian axes"}
Choose two perpendicular axes with the same length scale, and translate the tail of a free vector to the origin. The coordinates of its head are its **Cartesian components**. For $\vec A=(A_x,A_y)$, $A_x$ is the signed displacement along $x$, and $A_y$ is the signed displacement along $y$. A negative component points opposite to the positive direction of its axis. In three dimensions, add $A_z$ along a third axis perpendicular to the other two.

If the arrow runs from $P=(x_P,y_P)$ to $Q=(x_Q,y_Q)$, its components are the changes in the coordinates:
$$
\overrightarrow{PQ}=(x_Q-x_P,\;y_Q-y_P).
$$
For example, going from $P=(2,1)\,\mathrm{m}$ to $Q=(-1,5)\,\mathrm{m}$ gives $\overrightarrow{PQ}=(-3,4)\,\mathrm{m}$. Always subtract the coordinate of the tail from that of the head. Interchanging the two points reverses the signs of both components.
:::

:::definizione{#modulo titolo="Magnitude from components"}
The **magnitude** of a vector in the plane follows from the Pythagorean theorem. The lengths of the legs of the triangle are the absolute values of the components, so $|\vec A|=\sqrt{A_x^2+A_y^2}$. In three dimensions, apply the theorem first in the $xy$ plane, then to the triangle whose legs have lengths equal to the magnitude of the projection onto the plane and $|A_z|$. This gives
$$
|\vec A|=\sqrt{A_x^2+A_y^2+A_z^2}.
$$
For $\vec A=(-3,4)\,\mathrm{m}$ the magnitude is $5\,\mathrm{m}$ even though the first component is negative. The sign gives the direction along the axis, while the square measures the component's contribution to the magnitude.

::grafico{uguale=1 xmin=-4.7 xmax=2 ymin=-1.3 ymax=5.4 vettori="0,0,-3,4,A" segmenti="-3,0,-3,4;0,4,-3,4" punti="-3,4,pieno" etichette="-3.5,-0.66,−3;0.2,4.2,4" titolo="The projections onto the axes give the components $-3$ and $4$. The vector has magnitude $5$."}
:::

:::esempio{titolo="Components from magnitude and angle"}
Consider a nonzero vector of magnitude $A=|\vec A|$. The angle $\theta$ is measured counterclockwise from the positive $x$ axis. Trigonometry gives $A_x=A\cos\theta$ and $A_y=A\sin\theta$. A vector of magnitude $6\,\mathrm{N}$ at an angle of $120^\circ$ lies in the second quadrant, so its horizontal component is negative and its vertical component positive.
$$
\begin{aligned}
A_x&=6\,\mathrm{N}\cdot\left(-\frac12\right)
=-3\,\mathrm{N}\\[6pt]
A_y&=6\,\mathrm{N}\cdot\frac{\sqrt3}{2}
=3\sqrt3\,\mathrm{N}.
\end{aligned}
$$
Checking the magnitude gives $\sqrt{9+27}\,\mathrm{N}=6\,\mathrm{N}$. If the components are known and the angle is required, the ratio $\dfrac{A_y}{A_x}$ gives the tangent only when $A_x\ne 0$. Use the signs of both components to identify the quadrant, since angles differing by $180^\circ$ have the same tangent.
:::

:::esempio{titolo="Displacement in three dimensions"}
A probe moves from position $(1,2,3)\,\mathrm{m}$ to position $(3,1,5)\,\mathrm{m}$. Subtracting the initial coordinates from the final coordinates gives the displacement $(2,-1,2)\,\mathrm{m}$. Its projection onto the $xy$ plane has magnitude $\sqrt{2^2+(-1)^2}\,\mathrm{m}=\sqrt5\,\mathrm{m}$. The full displacement has magnitude $\sqrt{5+2^2}\,\mathrm{m}=3\,\mathrm{m}$. These values differ because the height changes. If the third coordinates of the two positions were equal, the vertical component would be zero and the projection onto the plane would have the same magnitude as the displacement.
:::

## Addition and subtraction

:::osservazione{#somma titolo="Addition by components and the head-to-tail rule"}
A displacement $\vec A$ followed by a displacement $\vec B$ gives two successive displacements along each axis. The coordinate changes add, so
$$
\vec A+\vec B=(A_x+B_x,\;A_y+B_y)
$$
in the plane. The same calculation applies to the third component in space. In the diagram, place the tail of $\vec B$ at the head of $\vec A$. The resultant runs from the initial tail to the final head. Since component addition is commutative, making the displacements in reverse order gives the same endpoint.

Let $\vec A=(3,1)$ and $\vec B=(-1,2)$. The components of the sum are $3-1=2$ and $1+2=3$, so $\vec A+\vec B=(2,3)$. In the figure, the arrow representing $\vec B$ has its tail at $(3,1)$, but its components are still $(-1,2)$.

::grafico{uguale=1 xmin=-1.2 xmax=5.2 ymin=-1.1 ymax=4.5 vettori="0,0,3,1,A;3,1,2,3,B;0,0,2,3" punti="3,1;2,3" etichette="0.56,1.68,R" titolo="The resultant $R$ completes the head-to-tail construction for $A=(3,1)$ and $B=(-1,2)$."}
:::

:::osservazione{titolo="Subtraction and the direction of the negative of a vector"}
The vector $-\vec B$ has components $(-B_x,-B_y)$. For nonzero $\vec B$, it has the same magnitude and lies along the same line, pointing in the opposite direction. The difference $\vec A-\vec B$ is the sum $\vec A+(-\vec B)$. If the two vectors share a tail, the difference runs from the head of $\vec B$ to the head of $\vec A$. Its negative, $\vec B-\vec A$, runs along the same segment in the opposite direction.

With $\vec A=(3,1)$ and $\vec B=(-1,2)$, we have $\vec A-\vec B=(4,-1)$. The first component increases because a negative value is subtracted. The second becomes negative because the corresponding component of $\vec B$ exceeds that of $\vec A$.
:::

:::esempio{titolo="Resultant of two forces"}
Two forces with components $(4,2)\,\mathrm{N}$ and $(-1,-6)\,\mathrm{N}$ act on a particle. The negative sign of the second component of the second force indicates its direction along $-y$. Adding the forces gives
$$
\begin{aligned}
\vec F_{\mathrm{ris}}&=(4-1,\;2-6)\,\mathrm{N}=(3,-4)\,\mathrm{N}\\[6pt]
|\vec F_{\mathrm{ris}}|&=\sqrt{3^2+(-4)^2}\,\mathrm{N}=5\,\mathrm{N}.
\end{aligned}
$$
Calculate the magnitude from the resultant. Adding the individual force magnitudes would give the resultant's magnitude only if the forces were parallel and pointed in the same direction.
:::

:::esempio{titolo="A force that cancels a resultant"}
A particle is subject to forces $\vec F_1=(2,-3)\,\mathrm{N}$ and $\vec F_2=(1,5)\,\mathrm{N}$. Their resultant is $(3,2)\,\mathrm{N}$. For the total force to be zero, a third force must cancel both components of the resultant. The third force therefore has components $(-3,-2)\,\mathrm{N}$. To check, add all the horizontal components and all the vertical components. This gives $(2+1-3,-3+5-2)\,\mathrm{N}=(0,0)\,\mathrm{N}$. In a plane, zero net force imposes two simultaneous conditions. If only the horizontal component vanishes, a vertical net force remains.
:::

## Scalar multiples and unit vectors

:::definizione{#versori titolo="Scalar multiples and normalization"}
For a real number $k$, the product $k\vec A$ is found by multiplying each component by $k$. Its magnitude is $|k||\vec A|$ because each squared component contains the factor $k^2$. For $\vec A\ne\vec 0$, the direction stays the same if $k>0$ and reverses if $k<0$. With $k=0$ the result is the zero vector.

A **unit vector** is a vector of magnitude one. Given $\vec A\ne\vec0$, the unit vector $\widehat A$ pointing in the direction of $\vec A$ is
$$
\widehat A=\frac{\vec A}{|\vec A|}.
$$
The divisor is positive, so division preserves the direction of the vector. The new magnitude is $\dfrac{|\vec A|}{|\vec A|}=1$. If the components of $\vec A$ have units, the same units appear in both numerator and denominator. The components of the unit vector are therefore dimensionless.
:::

:::esempio{titolo="A given direction and magnitude"}
The vector $\vec A=(3,-4)$ has magnitude $5$. The unit vector in the direction of $\vec A$ is
$$
\widehat A=\left(\frac35,-\frac45\right).
$$
To obtain a force of magnitude $10\,\mathrm{N}$ in the opposite direction, multiply the unit vector by $-10\,\mathrm{N}$. This gives
$$
\vec F=(-6,8)\,\mathrm{N}.
$$
The first component is now negative and the second positive. The magnitude is $\sqrt{36+64}\,\mathrm{N}=10\,\mathrm{N}$.

::grafico{uguale=1 xmin=-7.5 xmax=5.1 ymin=-5.5 ymax=9.4 vettori="0,0,3,-4,A;0,0,-6,8,F" punti="3,-4;-6,8" titolo="The two vectors lie on the same line and point in opposite directions."}
:::

:::osservazione{titolo="Unit vectors along the axes"}
The Cartesian unit vectors $\hat\imath=(1,0,0)$, $\hat\jmath=(0,1,0)$, and $\hat k=(0,0,1)$ point in the three positive axis directions. Any vector in space can be written as $A_x\hat\imath+A_y\hat\jmath+A_z\hat k$. In the $xy$ plane, the coefficient of $\hat k$ is zero. This notation makes clear which axis belongs to each component. For example, $(2,-3,0)\,\mathrm{m}$ means $2\,\mathrm{m}$ along $\hat\imath$ and $-3\,\mathrm{m}$ along $\hat\jmath$.
:::

:::osservazione{titolo="Comparing two parallel vectors"}
Two nonzero vectors are parallel if one is a scalar multiple of the other. For example, $\vec A=(2,6)$ and $\vec B=(-1,-3)$ satisfy $\vec B=-\dfrac12\vec A$. They point in opposite directions because the factor is negative. This relation can be checked even when a component is zero. For $\vec U=(0,4)$ and $\vec V=(0,8)$, the factor $2$ works because it takes both components of $\vec U$ to the corresponding components of $\vec V$. Looking for a common factor avoids division by zero.
:::

## Dot product and projection

:::definizione{#scalare titolo="Dot product"}
To calculate the **dot product**, multiply corresponding components and add the products. In three dimensions,
$$
\vec A\cdot\vec B=A_xB_x+A_yB_y+A_zB_z.
$$
In the plane, the third term is zero. The result is a scalar whose unit is the product of the units of the two vectors. If both vectors are nonzero and $\theta$ denotes the angle between them, measured between $0$ and $180^\circ$, then
$$
\vec A\cdot\vec B=|\vec A|\,|\vec B|\cos\theta.
$$
The two expressions give the same number. Indeed, the sum of the squares of the components of the difference $\vec A-\vec B$ is $|\vec A|^2+|\vec B|^2-2\vec A\cdot\vec B$. The law of cosines gives the same expression with final term $-2|\vec A||\vec B|\cos\theta$. Equating the two expressions gives the geometric formula.
:::

:::esempio{titolo="Condition for perpendicularity"}
Let $\vec A=(1,-2)$ and $\vec B=(4,2)$. Their dot product is
$$
\vec A\cdot\vec B=1\cdot4+(-2)\cdot2=0.
$$
Both magnitudes are positive, so the geometric formula implies $\cos\theta=0$. In the range of angles between two vectors, this occurs at $90^\circ$. The dot product therefore tests for perpendicularity without finding the angle of each vector relative to the $x$ axis.
:::

:::definizione{#proiezioni titolo="Signed scalar projection"}
Given $\vec B\ne\vec 0$, the **scalar projection** of $\vec A$ in the direction of $\vec B$ is $\vec A\cdot\widehat B$. The vector projection is $(\vec A\cdot\widehat B)\widehat B$. The first is a signed number, while the second is a vector along the line of $\vec B$. For $\vec B=(4,0)$ the unit vector is $(1,0)$. The vector $\vec A=(-2,3)$ therefore has scalar projection $-2$ and vector projection $(-2,0)$. The negative sign indicates a direction opposite to $\vec B$.

::grafico{uguale=1 xmin=-3.7 xmax=5.5 ymin=-1.5 ymax=4.6 vettori="0,0,-2,3,A;0,0,4,0,B;0,-0.32,-2,-0.32" segmenti="-2,0,-2,3" punti="-2,0;-2,3" etichette="-2.95,-0.8,−2" titolo="The projection of $A$ in the direction of $B$ is negative because the foot of the perpendicular has horizontal coordinate $-2$."}
:::

::::teorema{#scomposizione titolo="Resolving a vector along a chosen direction"}
Let $\vec B\ne\vec0$, and let $\widehat B$ be its unit vector. Every vector $\vec A$ can be written as the sum $\vec A=\vec A_{\parallel}+\vec A_{\perp}$, with
$$
\vec A_{\parallel}=(\vec A\cdot\widehat B)\,\widehat B,
\qquad
\vec A_{\perp}=\vec A-\vec A_{\parallel}.
$$
We have $\vec A_{\perp}\cdot\vec B=0$, so $\vec A_{\perp}$, when nonzero, is perpendicular to $\vec B$. This decomposition resolves the weight of an object on an inclined plane into a component along the plane and one perpendicular to it. For $\vec A=(1,3)$ and $\vec B=(2,0)$, we have $\widehat B=(1,0)$, so $\vec A_{\parallel}=(1,0)$ and $\vec A_{\perp}=(0,3)$.

:::dimostrazione
Take the dot product of $\vec A_{\perp}$ with $\widehat B$. The unit vector has magnitude one, so $\widehat B\cdot\widehat B=1$. The distributive property of the dot product gives
$$
\begin{aligned}
\vec A_{\perp}\cdot\widehat B
&=\vec A\cdot\widehat B-(\vec A\cdot\widehat B)\,(\widehat B\cdot\widehat B)\\[6pt]
&=\vec A\cdot\widehat B-\vec A\cdot\widehat B=0.
\end{aligned}
$$
Since $\vec B=|\vec B|\,\widehat B$, $\vec A_{\perp}\cdot\vec B=|\vec B|\,(\vec A_{\perp}\cdot\widehat B)$ is also zero.
:::
::::

:::esempio{titolo="Finding the angle from the components"}
The vectors $\vec A=(2,0)$ and $\vec B=(1,\sqrt3)$ both have magnitude $2$. Their dot product is $2$, so
$$
\cos\theta=\frac{2}{2\cdot2}=\frac12.
$$
The angle between the vectors lies between zero and 180 degrees, so $\theta=60^\circ$. It is acute because the dot product is positive. For noncollinear vectors, a negative dot product gives a negative cosine and an obtuse angle. Checking the sign is useful when comparing a calculator's answer in radians with a diagram marked in degrees.
:::

::::teorema{#modulo-somma titolo="Magnitude of the sum of two vectors"}
For two vectors $\vec A$ and $\vec B$,
$$
|\vec A+\vec B|^2=|\vec A|^2+|\vec B|^2+2\,\vec A\cdot\vec B.
$$
If both vectors are nonzero and $\theta$ is the angle between them, twice their dot product is $2|\vec A|\,|\vec B|\cos\theta$. For $\theta=90^\circ$ this term vanishes and the formula reduces to the Pythagorean theorem. The formula gives the magnitude of the resultant of two forces from their magnitudes and the angle between them, without having to calculate their components. For example, two forces of $3\,\mathrm{N}$ and $5\,\mathrm{N}$ at an angle of $60^\circ$ have a resultant of magnitude
$$
|\vec F_{\mathrm{ris}}|
=\sqrt{9+25+2\cdot3\cdot5\cdot\frac12}\,\mathrm{N}
=\sqrt{49}\,\mathrm{N}=7\,\mathrm{N}.
$$

:::dimostrazione
Write the square of the magnitude as the dot product of a vector with itself. For every vector $\vec V$ we have $\vec V\cdot\vec V=V_x^2+V_y^2+V_z^2=|\vec V|^2$. Apply this identity to $\vec V=\vec A+\vec B$ and use the distributive property, which follows from the component formula:
$$
\begin{aligned}
|\vec A+\vec B|^2&=(\vec A+\vec B)\cdot(\vec A+\vec B)\\[6pt]
&=\vec A\cdot\vec A+\vec A\cdot\vec B+\vec B\cdot\vec A+\vec B\cdot\vec B.
\end{aligned}
$$
The dot product is commutative because $A_xB_x=B_xA_x$, and the same is true for the other components. The two middle terms are therefore equal and add up to $2\,\vec A\cdot\vec B$. Since $\vec A\cdot\vec A=|\vec A|^2$ and $\vec B\cdot\vec B=|\vec B|^2$, the result follows. The second expression for twice the dot product follows from the geometric formula for the dot product.
:::
::::

:::esempio{titolo="Component along an oblique direction"}
Let $\vec A=(7,1)$ and $\vec B=(3,4)$. The magnitude of $\vec B$ is $5$, so the unit vector is $\left(\dfrac35,\dfrac45\right)$. The scalar projection is
$$
\vec A\cdot\widehat B
=7\cdot\frac35+1\cdot\frac45
=5.
$$
The vector projection is therefore $5\widehat B=(3,4)$. Subtracting it from $\vec A$ leaves $(4,-3)$. The dot product of this remainder with $\vec B$ is $4\cdot3+(-3)\cdot4=0$, so the remainder is perpendicular to the chosen direction. Any vector can be resolved this way relative to a given direction. One component is parallel to the direction and the other perpendicular. The first component of the force is the one that contributes to work, since the second has zero dot product with the displacement.
:::

## Work done by a constant force

:::osservazione{#lavoro titolo="Force component along the displacement"}
For a constant force $\vec F$ and a displacement $\vec s$, the work done is $W=\vec F\cdot\vec s$. The dot product picks out the component of the force along the displacement. If the force and displacement are both nonzero, this component is $|\vec F|\cos\theta$, where $\theta$ is the angle between the vectors. The work is positive for $\theta<90^\circ$, zero for $\theta=90^\circ$, and negative for $\theta>90^\circ$. If either vector is zero, the work is also zero. Its unit is the joule, equal to one newton times one meter.

The sign can be read directly from the components when the displacement is parallel to an axis. If $\vec s=(s_x,0)$ with $s_x>0$, then $W=F_xs_x$. The product of the vertical components of force and displacement is zero. A vertical force can have a substantial physical effect while doing zero work during a horizontal displacement.
:::

:::esempio{titolo="Positive and negative work"}
A constant force of magnitude $10\,\mathrm{N}$ makes an angle of $60^\circ$ with a horizontal displacement of $2\,\mathrm{m}$. The cosine is one-half, so the projection of the force along the displacement is $5\,\mathrm{N}$.
$$
W=10\,\mathrm{N}\cdot 2\,\mathrm{m}\cdot\frac12
=10\,\mathrm{J}.
$$
If a second force has the same magnitude and makes an angle of $120^\circ$ with the same displacement, the cosine of this angle is $-\dfrac12$. The projection of the second force is $-5\,\mathrm{N}$ and its work is $-10\,\mathrm{J}$. The figure distinguishes the direction of the force from that of its component along the displacement.

::grafico{uguale=1 xmin=-6.5 xmax=6.5 ymin=-1.5 ymax=10.5 vettori="0,0,5,8.660254;0,0,-5,8.660254;0,0,2,0,s" etichette="3.08,4.2,F₁;-4.02,4.6,F₂" segmenti="5,0,5,8.660254;-5,0,-5,8.660254" titolo="The projections along the direction of motion are $5\,\mathrm{N}$ and $-5\,\mathrm{N}$. The displacement arrow indicates direction only."}
:::

:::attenzione
To calculate work from a constant force and a displacement, use the angle between those two vectors. The angle the force makes with the horizontal equals the required angle when the displacement is in the positive horizontal direction. If the displacement is leftward, a force inclined at $60^\circ$ to the positive horizontal axis makes an angle of $120^\circ$ with the displacement. This change of angle reverses the sign of the work.
:::

:::esempio{titolo="Work done by two forces during the same displacement"}
An object undergoes a displacement $\vec s=(4,0)\,\mathrm{m}$ under forces $\vec F_1=(8,2)\,\mathrm{N}$ and $\vec F_2=(-3,0)\,\mathrm{N}$. The work done by each is $8\cdot4\,\mathrm{J}=32\,\mathrm{J}$ and $(-3)\cdot4\,\mathrm{J}=-12\,\mathrm{J}$, respectively. The total work is therefore $20\,\mathrm{J}$. The same result follows by first finding the resultant $(5,2)\,\mathrm{N}$ and then taking its dot product with the displacement. This equality follows from the distributive property of the dot product over addition. The sign of the total depends on the combined contributions along the direction of motion.
:::

## Cross product and orientation

:::definizione{#vettoriale titolo="The cross product in three dimensions"}
The **cross product** $\vec A\times\vec B$ is a vector. For two nonparallel vectors, it is perpendicular to the plane containing them. Its magnitude is $|\vec A||\vec B|\sin\theta$, the area of the parallelogram spanned by the two vectors. To find its direction using the right-hand rule, curl the fingers of your right hand from the first vector toward the second through the smaller angle. Your thumb points in the direction of the cross product. Reversing the order reverses the direction and leaves the magnitude unchanged. If the vectors are parallel or either vector is zero, the result is $\vec0$.

In a right-handed Cartesian coordinate system, the components are
$$
\vec A\times\vec B=
\bigl(A_yB_z-A_zB_y,\;
A_zB_x-A_xB_z,\;
A_xB_y-A_yB_x\bigr).
$$
If $\vec A$ and $\vec B$ lie in the $xy$ plane, the $x$ and $y$ components of their cross product vanish. Only the term $A_xB_y-A_yB_x$ along $z$ remains. With $x$ pointing right and $y$ pointing up, the positive $z$ direction points out of the page.
:::

:::esempio{titolo="Area and orientation in the plane"}
For $\vec A=(3,0,0)$ and $\vec B=(1,2,0)$, the component along $z$ is $3\cdot2-0\cdot1=6$. The parallelogram has base $3$ and perpendicular height $2$, so its area is $6$. In the figure, the rotation from $\vec A$ to $\vec B$ is counterclockwise when viewed from the positive side of the $z$ axis. Thus the cross product is $(0,0,6)$.

::grafico{uguale=1 xmin=-1.1 xmax=5.4 ymin=-1.2 ymax=4.1 vettori="0,0,3,0,A;0,0,1,2,B" poligoni="0,0 3,0 4,2 1,2" linee="3,0 4,2 1,2" segmenti="1,0,1,2" etichette="1.2,1.07,2;2.6,2.7,+z out of the page" titolo="The parallelogram has area $6$. Taking $A$ first and $B$ second gives the positive $z$ direction."}
:::

:::osservazione{titolo="Checking with dot products"}
The cross product is orthogonal to both factors. To check a calculation in three dimensions, take two dot products. For example, $\vec A=(1,2,0)$ and $\vec B=(0,1,1)$ give $\vec A\times\vec B=(2,-1,1)$. Its dot products with $\vec A$ and $\vec B$ are $2-2=0$ and $-1+1=0$, respectively. This confirms orthogonality. To check the direction, use the right-hand rule or verify the sign of one component with the cross product formula.
:::

:::esempio{titolo="Cross product of two three-component vectors"}
Let $\vec A=(2,-1,3)$ and $\vec B=(1,4,-2)$. Since both vertical components are nonzero, the cross product can have components along all three axes. Calculating the components in the order $x$, $y$, $z$ gives
$$
\begin{aligned}
(\vec A\times\vec B)_x&=(-1)(-2)-3\cdot4=-10\\[6pt]
(\vec A\times\vec B)_y&=3\cdot1-2(-2)=7\\[6pt]
(\vec A\times\vec B)_z&=2\cdot4-(-1)\cdot1=9.
\end{aligned}
$$
To check the calculation, verify that $2(-10)-7+3\cdot9=0$ and $(-10)+4\cdot7-2\cdot9=0$. These equalities confirm that the result is perpendicular to both vectors. Reversing the order of the factors gives $(10,-7,-9)$.
:::

## Torque

:::definizione{#momento titolo="Torque about a point"}
Let $O$ be the point about which rotation is to be studied, and let $P$ be the point at which the force $\vec F$ acts. The position vector $\vec r$ runs from $O$ to $P$. The **torque** about $O$ is $\vec M_O=\vec r\times\vec F$. Its magnitude equals the magnitude of the force times the moment arm, the perpendicular distance from $O$ to the line of action of the force. If the line of action passes through $O$, the moment arm is zero and the force produces zero torque about that point.

In the $xy$ plane we obtain $M_{O,z}=r_xF_y-r_yF_x$. A positive torque is counterclockwise when viewed from the positive side of the $z$ axis. A negative torque is clockwise from the same viewpoint. The unit is the newton-meter. Although it has the same dimensions as the joule, the newton-meter here denotes the unit of torque, a vector quantity.
:::

:::esempio{titolo="An angled force applied to a lever"}
A force with components $(3,-6,0)\,\mathrm{N}$ acts at a point $0.40\,\mathrm{m}$ from the pivot along the positive $x$ axis. The position vector is $\vec r=(0.40;\,0;\,0)\,\mathrm{m}$. The figure uses different scales for position and force.
$$
\begin{aligned}
M_{O,z}&=r_xF_y-r_yF_x\\[6pt]
&=0.40\,\mathrm{m}\cdot(-6\,\mathrm{N})-0\\[6pt]
&=-2.4\,\mathrm{N\,m}.
\end{aligned}
$$
The horizontal component of force has a line of action through the pivot, so it produces no torque. The vertical component points down and acts to the right of the pivot. In this position it tends to turn the lever clockwise, in agreement with the sign of the calculated torque.

::grafico{assi=0 uguale=1 xmin=-1.2 xmax=6.2 ymin=-3.8 ymax=1.7 riferimento="0.45,-2.3,0,1,x,y" linee="0,0 4,0" vettori="4,0,5.5,-3,F;4,0,4,-3;4,0,5.5,0" segmenti="4,-3,5.5,-3;5.5,0,5.5,-3" punti="0,0,pieno;4,0,pieno,P" etichette="-0.4,0.38,O;0.9,0.3,0.40 m;4.2,-2.35,−6 N;4.5,0.6,3 N" titolo="The vertical component contributes to the torque. The horizontal component is parallel to the lever."}
:::

:::esempio{titolo="Opposing torques about the same point"}
Two downward forces act on a horizontal lever. A force of $12\,\mathrm{N}$ acts $0.30\,\mathrm{m}$ to the left of the pivot. A force of $8\,\mathrm{N}$ acts $0.45\,\mathrm{m}$ to the right. For the first force, $r_x<0$ and $F_y<0$, so its torque is positive and equals $3.6\,\mathrm{N\,m}$. For the second force, $r_x>0$ and $F_y<0$, so its torque is negative and equals $-3.6\,\mathrm{N\,m}$. The two torques cancel about the pivot. The forces point in the same direction, however, so the net vertical force is $20\,\mathrm{N}$ downward. The torque balance and the force balance describe different effects and are checked using separate equations.
:::

:::osservazione{titolo="Choosing the point about which to calculate torque"}
The same force can produce different torques about different points. A downward force acting to the right of a pivot produces a clockwise torque about the pivot. Its torque about the point of application is zero because the position vector is zero. If the chosen point lies on the same vertical line as the force, the moment arm is again zero. The choice of point is therefore part of the problem, even when the force and its point of application are already known.
:::
