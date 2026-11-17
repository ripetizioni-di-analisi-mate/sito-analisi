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

## Cartesian components

:::definizione{#componenti titolo="Signed projections"}
Once axes are chosen, **component** $u_x$ is the signed displacement along the horizontal axis and $u_y$ the signed displacement along the vertical axis. With right and up positive, $(3;-2)\,\mathrm m$ moves three metres right and two metres down. If a component is zero, the vector stays parallel to the other axis as long as the other component is nonzero. Changing which way an axis points can change a sign because the reading convention changes. The physical displacement stays the same.
:::

::grafico{uguale=1 xmin=-1 xmax=5 ymin=-3.6 ymax=2 vettori="0,0,3,-2,u" segmenti="3,0,3,-2;0,-2,3,-2" punti="3,-2,pieno,B" etichette="2.95,0.35,3;-0.55,-1.9,−2" nomi="x (m),y (m)" titolo="Read the components of u by projecting B onto the axes"}

:::esempio{#punti-estremi titolo="From two points to a displacement"}
Let $A=(2;1)\,\mathrm m$ and $B=(5;3)\,\mathrm m$. From $A$ to $B$ the horizontal position increases by $5-2=3\,\mathrm m$ and the vertical position by $3-1=2\,\mathrm m$. Thus $\overrightarrow{AB}=(3;2)\,\mathrm m$. The endpoint $(5;3)\,\mathrm m$ gives a position, while $(3;2)\,\mathrm m$ gives a change in position. Reversing the path interchanges start and finish, so both signs change.
:::

::grafico{uguale=1 xmin=0 xmax=6 ymin=0 ymax=4 vettori="2,1,5,3,AB" punti="2,1,pieno,A;5,3,pieno,B" segmenti="2,1,5,1;5,1,5,3" nomi="x (m),y (m)" titolo="From A to B the change is 3 m horizontally and 2 m vertically"}

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

::grafico{uguale=1 xmin=-1 xmax=9 ymin=-1 ymax=10 nomi="uₓ (N),uᵧ (N)" vettori="0,0,6,8,u" segmenti="6,0,6,8;0,8,6,8" punti="6,8,pieno,P" titolo="Legs of 6 N and 8 N give a magnitude of 10 N"}

:::esempio{#componente-mancante titolo="Finding a component from the length"}
With magnitude $5\,\mathrm m$ and horizontal component $3\,\mathrm m$, the squared vertical component is $5^2-3^2=16\,\mathrm m^2$. Its **size** is therefore $4\,\mathrm m$. Both $+4\,\mathrm m$ and $-4\,\mathrm m$ are possible components because they have the same square. If the arrow is said to point down, choose the negative sign. A component of size $6\,\mathrm m$ would be incompatible with a total magnitude of five metres.
:::

## Vectors along the same line

:::teorema{#collineari titolo="Signed sums and bounds on the resultant"}
For **collinear** vectors, choose a positive sense along their line and add the signed components. Displacements of $8\,\mathrm m$ right and $3\,\mathrm m$ left have a resultant component $8-3=5\,\mathrm m$ to the right. The magnitude of the sum is five metres. The distance travelled is $8+3=11\,\mathrm m$ because both sections are travelled, including the one in the opposite sense.
:::

:::osservazione{#limiti-modulo titolo="Minimum and maximum at fixed magnitudes"}
If two arrows have magnitudes $a$ and $b$, the resultant magnitude lies between $\lvert a-b\rvert$ and $a+b$. For the upper bound use the tip-to-tail construction. The direct side of the triangle is at most as long as the path along the other two sides. For the lower bound, each original side is at most as long as the resultant plus the other original side. The maximum occurs when the arrows line up pointing the same way; the minimum occurs when they line up pointing opposite ways. For magnitudes $7$ and $4\,\mathrm N$, the bounds are $3$ and $11\,\mathrm N$.
:::

## The equilibrant vector

:::definizione{#equilibrante titolo="Cancelling a resultant"}
The **equilibrant** of a resultant $\vec R$ is $-\vec R$. To obtain a zero sum, each added component must cancel the corresponding one of $\vec R$. If $\vec R=(-4;2)\,\mathrm N$, the equilibrant is $(4;-2)\,\mathrm N$. The two arrows have equal magnitudes and point opposite ways. This check concerns the vector sum. For extended bodies, the points of application must also be considered.
:::

::grafico{uguale=1 xmin=-5.4 xmax=5.4 ymin=-3.6 ymax=3.6 vettori="0,0,-4,2,R;0,0,4,-2,E" nomi="x (N),y (N)" titolo="R and E have opposite components along both axes"}

:::esempio{titolo="More than two contributions"}
Given $\vec a=(5;-2)\,\mathrm N$ and $\vec b=(-3;4)\,\mathrm N$, first find the components of their resultant, $\vec R=(2;2)\,\mathrm N$. To cancel it, add $\vec c=(-2;-2)\,\mathrm N$. Checking the horizontal sum gives $5-3-2=0$; the vertical sum gives $-2+4-2=0$. The checks are separate because a resultant can vanish along one axis while remaining nonzero along the other.
:::
