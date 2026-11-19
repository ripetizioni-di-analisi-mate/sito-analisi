---
titolo: "Applied vectors, moments and equivalent force systems"
sommario: "How to describe a force acting on a rigid body, calculate its moment about a point and replace a system of forces, couples and distributed loads with a simpler equivalent system."
---

## Forces and applied vectors

:::definizione{#vettore-applicato titolo="Applied vectors and lines of action"}
A force acting on a body is specified by its magnitude, direction, sense and point of application on the body. It is therefore represented by an **applied vector** $(P, \vec{F})$, that is, a vector $\vec{F}$ associated with a point $P$ called the point of application. The **line of action** of the force is the line through $P$ parallel to $\vec{F}$.

The structures considered in this statics course are planar. We take the $x$-axis horizontally to the right, the $y$-axis vertically upward and the $z$-axis out of the page. A force of magnitude $F$ that makes an angle $\alpha$, measured counterclockwise from the $x$-axis, has components
$$
F_x = F\cos\alpha ,
\qquad
F_y = F\sin\alpha .
$$
Forces are measured in $\mathrm{kN}$ and lengths in $\mathrm{m}$. A force of $10\,\mathrm{kN}$ directed to the right at $30^\circ$ below the horizontal has $\alpha = -30^\circ$, so $F_x = 8.66\,\mathrm{kN}$ and $F_y = -5\,\mathrm{kN}$.
:::

:::osservazione{#forze-su-un-corpo-rigido titolo="Forces on a rigid body"}
Throughout this course, bodies are rigid, meaning that the distances between their points remain constant. Their displacements are negligible compared with the dimensions of the structure, so forces are taken to act on the initial configuration. Two forces with identical vectors but different lines of action have different effects on the body. A vertical load at the free end of a cantilever has a greater tendency to rotate it about the support than the same load applied close to the support. The moment of the force measures this difference. The principle of transmissibility will show that, for a rigid body, the point of application matters only through the line of action.
:::

## Moment of a force about a point

:::richiamo{titolo="Cross product"}
The cross product $\vec{a} \times \vec{b}$ of two vectors that form an angle $\varphi$ is perpendicular to both. Its magnitude is $ab\sin\varphi$ and its direction is given by the right-hand rule. The product vanishes for parallel vectors, satisfies $\vec{b} \times \vec{a} = -\,\vec{a} \times \vec{b}$ and is distributive over addition. For two vectors in the $xy$-plane,
$$
(a_x\,\hat{\imath} + a_y\,\hat{\jmath}) \times (b_x\,\hat{\imath} + b_y\,\hat{\jmath}) = (a_x b_y - a_y b_x)\,\hat{k} .
$$
See the discussion of vectors in the plane and in space in Linear Algebra.
:::

:::definizione{#momento-di-una-forza titolo="Moment of a force about a point"}
The moment measures the tendency of a force to rotate a body about a point. Let $(P, \vec{F})$ be a force and let $O$ be a point, called the **moment center**. The **moment** of the force about $O$ is the vector
$$
\vec{M}_O = \overrightarrow{OP} \times \vec{F} .
$$
For a force in the $xy$-plane, the moment is perpendicular to the plane, $\vec{M}_O = M_O\,\hat{k}$. Evaluating the cross product in components gives
$$
M_O = (x_P - x_O)\,F_y - (y_P - y_O)\,F_x .
$$
The scalar $M_O$ is positive when the force tends to rotate the body counterclockwise about $O$ and negative for clockwise rotation. Its units are $\mathrm{kN\,m}$. Taking $O$ at the origin and measuring coordinates in meters, the force with $F_x = 6\,\mathrm{kN}$ and $F_y = -8\,\mathrm{kN}$ acting at $P = (4, 2)$ has moment
$$
M_O = 4 \cdot (-8) - 2 \cdot 6 = -44\,\mathrm{kN\,m} ,
$$
so it tends to rotate the body clockwise about $O$.
:::

::::teorema{#momento-e-braccio titolo="Moment and moment arm"}
Let $(P, \vec{F})$ be a force of magnitude $F$, and let $b$ be the perpendicular distance from the reference point $O$ to its line of action, called the **moment arm**. Then
$$
|M_O| = F\,b ,
$$
and the moment stays the same if the point of application moves to another point on the line of action. In particular, for $\vec{F} \neq \vec{0}$, the moment vanishes if and only if the line of action passes through $O$. The sign can be read from the diagram by determining which way the force tends to rotate the body about $O$. The force used in the definition of moment has magnitude $\sqrt{6^2 + 8^2} = 10\,\mathrm{kN}$, so its line of action is a distance $b = \dfrac{44}{10} = 4.4\,\mathrm{m}$ from the origin. For a vertical force, the moment arm is the horizontal distance from the reference point to the line of action. A downward load of $15\,\mathrm{kN}$, applied $3\,\mathrm{m}$ to the right of $O$, has moment $-15 \cdot 3 = -45\,\mathrm{kN\,m}$.

::struttura{nodi="O,0,0;P,4,2;H,3.52,2.64" forze="4.9 0.8,0.9,-1.2,F" tratteggi="2.8,3.6 5.5,0;0,0 3.52,2.64" etichette="1.55,1.6,b" punti="0,0;4,2;3.52,2.64" titolo="The moment arm $b$ is the distance from $O$ to the line of action of $\vec{F}$, measured along the perpendicular $OH$"}

:::dimostrazione
Let $H$ be the foot of the perpendicular from $O$ to the line of action, so $|\overrightarrow{OH}| = b$. The vector $\overrightarrow{HP}$ is parallel to $\vec{F}$, hence $\overrightarrow{HP} \times \vec{F} = \vec{0}$ and
$$
\vec{M}_O = \big( \overrightarrow{OH} + \overrightarrow{HP} \big) \times \vec{F} = \overrightarrow{OH} \times \vec{F} .
$$
The vector $\overrightarrow{OH}$ is perpendicular to $\vec{F}$, so the magnitude of the cross product is $bF$. The last expression depends on the point of application only through the line of action, which determines $H$. The moment is therefore the same at every point on that line. Finally, if $\vec{F} \neq \vec{0}$, the product $bF$ vanishes if and only if $b = 0$, that is, if $O$ lies on the line of action.
:::
::::

## Resultant force, resultant moment and change of reference point

:::definizione{#risultante-e-momento-risultante titolo="Resultant force and resultant moment"}
A **force system** is a finite set of forces $(P_1, \vec{F}_1), \dots, (P_n, \vec{F}_n)$ applied to the same body. The **resultant force** is their vector sum, and the **resultant moment** about the reference point $O$ is the sum of their moments:
$$
\vec{R} = \sum_{i=1}^{n} \vec{F}_i ,
\qquad
\vec{M}_O = \sum_{i=1}^{n} \overrightarrow{OP_i} \times \vec{F}_i .
$$
The resultant force is a free vector because it depends only on the vectors $\vec{F}_i$ and not on their points of application. The resultant moment depends on the reference point. In the plane we calculate the three scalars $R_x = \sum_i F_{x,i}$, $R_y = \sum_i F_{y,i}$ and $M_O$ that appear in the equilibrium equations discussed in the chapter on support reactions. Consider a horizontal beam with the reference point at its left end $A$. A downward load of $8\,\mathrm{kN}$ acting $2\,\mathrm{m}$ from $A$ and an upward force of $4\,\mathrm{kN}$ acting $6\,\mathrm{m}$ from $A$ give
$$
R_y = -8 + 4 = -4\,\mathrm{kN} ,
\qquad
M_A = 2 \cdot (-8) + 6 \cdot 4 = 8\,\mathrm{kN\,m} .
$$
:::

::::teorema{#cambiamento-di-polo titolo="Changing the reference point for moments"}
Let $O$ and $O'$ be two reference points. For a force system with resultant $\vec{R}$, the resultant moment satisfies
$$
\vec{M}_{O'} = \vec{M}_O + \overrightarrow{O'O} \times \vec{R} ,
$$
which in the plane becomes
$$
M_{O'} = M_O + (x_O - x_{O'})\,R_y - (y_O - y_{O'})\,R_x .
$$
Given $\vec{R}$ and the moment about one point, we can therefore find the moment about any other point without summing over all the forces again. If $\vec{R} = \vec{0}$, the resultant moment is the same about every point. For the two beam loads used in the definition of the resultant, with $R_y = -4\,\mathrm{kN}$ and $M_A = 8\,\mathrm{kN\,m}$, the moment about the end $B$, located $6\,\mathrm{m}$ from $A$, is $M_B = 8 + (0 - 6) \cdot (-4) = 32\,\mathrm{kN\,m}$. Direct calculation gives the same value, $(2 - 6) \cdot (-8) = 32\,\mathrm{kN\,m}$, because the force at $B$ has zero moment about that point.

:::dimostrazione
For each force, $\overrightarrow{O'P_i} = \overrightarrow{O'O} + \overrightarrow{OP_i}$. By the distributive property of the cross product,
$$
\begin{aligned}
\vec{M}_{O'} &= \sum_i \big( \overrightarrow{O'O} + \overrightarrow{OP_i} \big) \times \vec{F}_i \\[6pt]
&= \overrightarrow{O'O} \times \sum_i \vec{F}_i + \sum_i \overrightarrow{OP_i} \times \vec{F}_i \\[6pt]
&= \overrightarrow{O'O} \times \vec{R} + \vec{M}_O .
\end{aligned}
$$
The planar form follows by evaluating the cross product in components, with $\overrightarrow{O'O} = (x_O - x_{O'},\; y_O - y_{O'})$.
:::
::::

## Couples

:::definizione{#coppia titolo="Force couple"}
A **couple** consists of two forces $(A, \vec{F})$ and $(B, -\vec{F})$ with distinct, parallel lines of action. The distance $d$ between the lines is the **couple arm**. The resultant force of a couple is zero, so the couple tends to rotate the body without translating it. Two forces of $5\,\mathrm{kN}$, one downward and one upward, acting along vertical lines $2\,\mathrm{m}$ apart form a couple with arm $2\,\mathrm{m}$.
:::

::::teorema{#momento-di-una-coppia titolo="Moment of a couple"}
The moment of a couple is the same about every reference point and is given by
$$
\vec{M} = \overrightarrow{BA} \times \vec{F} ,
$$
with magnitude $F d$. In the plane it is positive when the couple tends to rotate the body counterclockwise. A couple is therefore fully described by its moment and is represented by a curved arrow in diagrams. For structures, an applied **concentrated couple** is denoted by $\mathcal{M}$ to distinguish it from the bending moment $M$ discussed in the chapter on internal forces and moments. In a system of forces and couples, each concentrated couple contributes its own $\mathcal{M}$ to the resultant moment about any point and zero to the resultant force. The two forces of $5\,\mathrm{kN}$ in the definition, with the downward force on the left and the upward force on the right, form a couple of moment $\mathcal{M} = 5 \cdot 2 = 10\,\mathrm{kN\,m}$, counterclockwise.

::struttura{nodi="A,0,0;B,2,0" forze="A,0,-1,F;B,0,1,F" coppie="1 0.6,1,ℳ" quote="A,B,d = 2 m,1.4" tratteggi="0,-1.2 0,1.4;2,-1.2 2,1.4" punti="0,0;2,0" titolo="A couple with arm $d$ has zero resultant force and moment $\mathcal{M} = F d$ about every point"}

:::dimostrazione
The resultant force of the couple is $\vec{F} - \vec{F} = \vec{0}$, so the change-of-reference-point formula gives the same moment about every point. We therefore take moments about $B$. The force $-\vec{F}$ at $B$ has zero moment, and the force $\vec{F}$ has moment $\overrightarrow{BA} \times \vec{F}$. By the moment-arm formula, the magnitude of this moment is $F$ times the distance from $B$ to the line of action of $\vec{F}$, giving $F d$.
:::
::::

## Equivalent systems and moving a force

:::definizione{#sistemi-equivalenti titolo="Equivalent force systems"}
Two systems of forces and couples acting on the same rigid body are **equivalent** if they have the same resultant force and the same resultant moment about a point $O$:
$$
\begin{cases}
\vec{R}' = \vec{R} \\[4pt]
\vec{M}'_O = \vec{M}_O
\end{cases}
$$
In the plane, these conditions give three scalar equalities, $R'_x = R_x$, $R'_y = R_y$ and $M'_O = M_O$. Forces enter the equilibrium equations of a rigid body only through $\vec{R}$ and $\vec{M}_O$, as discussed in the chapter on static equilibrium. Two equivalent systems therefore produce the same support reactions, so a complicated system can be replaced by a simpler equivalent system. Two downward loads of $10\,\mathrm{kN}$ acting $1\,\mathrm{m}$ and $5\,\mathrm{m}$ from the end $A$ of a beam are equivalent to a downward load of $20\,\mathrm{kN}$ acting $3\,\mathrm{m}$ from $A$ because in both cases $R_y = -20\,\mathrm{kN}$ and $M_A = -60\,\mathrm{kN\,m}$.
:::

::::teorema{#equivalenza-rispetto-a-ogni-polo titolo="Equivalence about any point"}
If two systems have the same resultant force and the same moment about one point $O$, they have the same moment about every point $O'$. Equivalence is therefore independent of the point used to check it. We can choose a point that simplifies the calculation, such as the point of application of one of the forces.

:::dimostrazione
Applying the change-of-reference-point formula to both systems and using $\vec{R}' = \vec{R}$ and $\vec{M}'_O = \vec{M}_O$ gives
$$
\vec{M}'_{O'} = \vec{M}'_O + \overrightarrow{O'O} \times \vec{R}' = \vec{M}_O + \overrightarrow{O'O} \times \vec{R} = \vec{M}_{O'} .
$$
:::
::::

::::teorema{#scorrimento-e-trasporto titolo="Sliding a force and moving it to a parallel line"}
Let $(P, \vec{F})$ be a force acting on a rigid body.

- **Sliding a force**: for every point $P'$ on the line of action, the force $(P', \vec{F})$ is equivalent to $(P, \vec{F})$.
- **Moving a force to a parallel line**: for every point $Q$, the force $(P, \vec{F})$ is equivalent to a system consisting of the force $(Q, \vec{F})$ and a couple with moment
$$
\mathcal{M}_t = \overrightarrow{QP} \times \vec{F} ,
$$
called the **transfer couple**. Its moment is that of the original force about its new point of application $Q$.

This operation moves forces to a chosen point, such as a frame joint or the fixed support of a cantilever. A downward force of $6\,\mathrm{kN}$ applied at $P$, a distance $2\,\mathrm{m}$ to the right of $Q$, is equivalent to the same force applied at $Q$ together with the clockwise couple $\mathcal{M}_t = 2 \cdot (-6) = -12\,\mathrm{kN\,m}$.

::struttura{nodi="Q,0,0;P,2,0" aste="Q-P" forze="P,0,-1,F" quote="Q,P,2 m" titolo="The force $F = 6\,\mathrm{kN}$ applied at $P$"}

::struttura{nodi="Q,0,0;P,2,0" aste="Q-P" forze="Q,0,-1,F" coppie="Q,-1,ℳ_t" quote="Q,P,2 m" titolo="The equivalent system at $Q$ consists of the same force and the transfer couple $\mathcal{M}_t = -12\,\mathrm{kN\,m}$"}

:::dimostrazione
In both cases the resultant force is $\vec{F}$. When the force slides along its line of action, its moment about every point stays the same by the moment-arm formula. For a parallel shift, compare moments about $Q$. The original force has moment $\overrightarrow{QP} \times \vec{F}$. In the new system the force acting at $Q$ has zero moment and the couple has moment $\mathcal{M}_t = \overrightarrow{QP} \times \vec{F}$. The two systems therefore have the same resultant force and the same moment about $Q$, so they are equivalent.
:::
::::

:::osservazione{#da-forza-e-coppia-a-una-forza titolo="Replacing a force and a couple with a single force"}
The parallel shift can also be reversed. A force $(Q, \vec{F})$ with $\vec{F} \neq \vec{0}$ and a couple of moment $\mathcal{M}$ are equivalent to the single force $\vec{F}$ shifted parallel to itself by a distance $d = \dfrac{|\mathcal{M}|}{F}$, to the side for which the moment of $\vec{F}$ about $Q$ has the sign of $\mathcal{M}$. A downward force of $6\,\mathrm{kN}$ acting at $Q$ and a couple of $-12\,\mathrm{kN\,m}$ are therefore equivalent to a force of $6\,\mathrm{kN}$ applied $2\,\mathrm{m}$ to the right of $Q$, where a downward load produces a clockwise moment about $Q$.
:::

## Reduction of a planar force system

Sliding a force along its line of action and moving it to a parallel line allow any planar system to be replaced by an equivalent system consisting of at most a single force or a single couple.

::::teorema{#riduzione-sistema-piano titolo="Reduction of a planar force system"}
Consider a planar system of forces and couples with resultant force $\vec{R} = (R_x, R_y)$ and moment $M_O$ about the origin $O$.

- If $\vec{R} \neq \vec{0}$, the system is equivalent to the single force $\vec{R}$ applied at any point on the line with equation
$$
x\,R_y - y\,R_x = M_O ,
$$
which is parallel to $\vec{R}$ and is called the **line of action of the resultant**. Its distance from $O$ is $\dfrac{|M_O|}{R}$.
- If $\vec{R} = \vec{0}$ and $M_O \neq 0$, the system is equivalent to a couple of moment $M_O$.
- If $\vec{R} = \vec{0}$ and $M_O = 0$, the system is equivalent to the zero system.

For vertical loads on a horizontal beam, $R_x = 0$. If $R_y \neq 0$, the line of action of the resultant is vertical and has horizontal coordinate $x = \dfrac{M_O}{R_y}$.

:::dimostrazione
In the first case, we seek a point $(x, y)$ at which the force $\vec{R}$ has moment $M_O$ about $O$. The moment of $\vec{R}$ applied at $(x, y)$ is $x R_y - y R_x$, so the desired points satisfy $x R_y - y R_x = M_O$. Since $\vec{R} \neq \vec{0}$, the coefficients $R_y$ and $-R_x$ cannot both vanish, and the equation represents a line. The vector $(R_x, R_y)$ satisfies the homogeneous equation $x R_y - y R_x = 0$ and is therefore parallel to the line. The force $\vec{R}$ acting on this line has the same resultant and moment about $O$ as the original system, so the two are equivalent. The moment-arm formula gives the distance from $O$ to the line as $\dfrac{|M_O|}{R}$. In the second case, a couple of moment $M_O$ has zero resultant force and, by the theorem on couple moments, moment $M_O$ about every point. It is therefore equivalent to the system. In the third case the resultant and moment both vanish, as they do for the zero system.
:::
::::

::::teorema{#teorema-di-varignon titolo="Varignon's theorem"}
Let $(P_1, \vec{F}_1), \dots, (P_n, \vec{F}_n)$ be forces whose lines of action all pass through a point $K$, and let $\vec{R}$ be their resultant. Then for every reference point $O$,
$$
\overrightarrow{OK} \times \vec{R} = \sum_{i=1}^{n} \overrightarrow{OP_i} \times \vec{F}_i ,
$$
that is, the moment of the resultant acting at $K$ equals the sum of the moments of the individual forces, and the system is equivalent to its resultant acting at $K$. A common application is to resolve a force into components $F_x$ and $F_y$ at its point of application. The moment of the force then equals the sum of the moments of the two components, each calculated with its own moment arm. For the force with $F_x = 6\,\mathrm{kN}$ and $F_y = -8\,\mathrm{kN}$ applied at $P = (4, 2)$, the vertical component has arm $4\,\mathrm{m}$ and moment $-32\,\mathrm{kN\,m}$, and the horizontal component has arm $2\,\mathrm{m}$ and moment $-12\,\mathrm{kN\,m}$. Their sum is the moment $-44\,\mathrm{kN\,m}$ already found from the cross product.

:::dimostrazione
Each force $\vec{F}_i$ can slide to the point $K$ on its line of action without changing its moment, so $\overrightarrow{OP_i} \times \vec{F}_i = \overrightarrow{OK} \times \vec{F}_i$. Summing over $i$ and using distributivity gives $\sum_i \overrightarrow{OK} \times \vec{F}_i = \overrightarrow{OK} \times \vec{R}$.
:::
::::

:::esempio{titolo="Two forces and a couple on a plate"}
A plate carries a downward force $F_1 = 10\,\mathrm{kN}$ at $(2, 0)$, a rightward force $F_2 = 6\,\mathrm{kN}$ at $(0, 3)$ and a counterclockwise couple $\mathcal{M} = 8\,\mathrm{kN\,m}$. Coordinates are in meters. The resultant force and its moment about the origin are
$$
R_x = 6\,\mathrm{kN} ,
\qquad
R_y = -10\,\mathrm{kN} ,
\qquad
M_O = 2 \cdot (-10) - 3 \cdot 6 + 8 = -30\,\mathrm{kN\,m} .
$$
The line of action of the resultant has equation $-10x - 6y = -30$, or $5x + 3y = 15$, and intersects the axes at $(3, 0)$ and $(0, 5)$. Without the couple the moment would be $-38\,\mathrm{kN\,m}$ and the line of action would be $5x + 3y = 19$, passing through $K = (2, 3)$ where the lines of action of $F_1$ and $F_2$ meet, as required by **Varignon's theorem**. Adding the couple shifts this line parallel to itself by a distance $\dfrac{8}{\sqrt{6^2 + 10^2}} = 0.69\,\mathrm{m}$.

::struttura{poligoni="0,0 4,0 4,3 0,3" nodi="O,0,0;K,2,3" forze="2 -1.25,0,-1.25,F_1;0 3,1.2,0,F_2" coppie="3 1.5,1,ℳ" tratteggi="2,-1.4 2,4.2;-1.4,3 4.6,3;-0.6,6 4.2,-2" reazioni="3 0,0.75,-1.25,R" punti="2,3;3,0" titolo="The forces $F_1$ and $F_2$, the couple $\mathcal{M}$ and, in the second color, the resultant on the line $5x + 3y = 15$"}

:::

## Parallel forces

::::teorema{#centro-forze-parallele titolo="Center of parallel forces"}
Consider parallel forces $\vec{F}_i = F_i\,\hat{u}$ applied at points $P_i = (x_i, y_i)$, where $\hat{u}$ is a common unit vector and $F_i$ is a signed scalar, positive when the force points in the direction of $\hat{u}$. If $\sum_i F_i \neq 0$, the system is equivalent to its resultant $\big( \sum_i F_i \big)\,\hat{u}$ acting at the **center of parallel forces** $C$, whose coordinates are
$$
x_C = \frac{\sum_i F_i\,x_i}{\sum_i F_i} ,
\qquad
y_C = \frac{\sum_i F_i\,y_i}{\sum_i F_i} .
$$
The point $C$ depends on the magnitudes and points of application, independently of the direction $\hat{u}$. If all forces turn through the same angle about their points of application, the line of action of the resultant rotates about $C$. Three downward vertical loads of $10$, $20$ and $30\,\mathrm{kN}$ acting $1$, $4$ and $6\,\mathrm{m}$ from the end $A$ of a beam have a downward resultant of $60\,\mathrm{kN}$ whose line of action passes through
$$
x_C = \frac{10 \cdot 1 + 20 \cdot 4 + 30 \cdot 6}{60} = 4.5\,\mathrm{m} .
$$
The same calculation gives the center of gravity of a body as the center of the weights of its parts, and the line of action of the resultant of a distributed load. For centroids, see the chapter on geometric properties of areas.

::struttura{nodi="A,0,0;B,7,0;C,4.5,0" aste="A-B" forze="1 0,0,-0.6,10 kN;4 0,0,-1.2,20 kN;6 0,0,-1.8,30 kN" reazioni="4.5 -1.9,0,-1.6,60 kN" quote="A,4.5 0,4.5 m,2.4" punti="4.5,0" titolo="Three parallel loads and, in the second color, their resultant acting at the center $C$"}

:::dimostrazione
The resultant force is $\sum_i F_i\,\hat{u}$. Set $R = \sum_i F_i$ and let $C$ be the point satisfying $\overrightarrow{OC} = \dfrac{1}{R}\sum_i F_i\,\overrightarrow{OP_i}$, with the coordinates given in the statement. By distributivity of the cross product, the moment about the origin $O$ is
$$
\begin{aligned}
\vec{M}_O &= \sum_i \overrightarrow{OP_i} \times F_i\,\hat{u} = \Big( \sum_i F_i\,\overrightarrow{OP_i} \Big) \times \hat{u} \\[6pt]
&= R\,\overrightarrow{OC} \times \hat{u} = \overrightarrow{OC} \times R\,\hat{u} .
\end{aligned}
$$
The resultant acting at $C$ therefore has the same moment about $O$ as the system and is equivalent to it. The definition of $C$ does not involve $\hat{u}$, so the point is independent of the direction of the forces.
:::
::::

:::osservazione{#forze-parallele-a-risultante-nulla titolo="Parallel forces with zero resultant"}
If $\sum_i F_i = 0$, the formulas for the center are undefined because the denominator vanishes. The resultant force is then zero and, by the reduction theorem for planar systems, the system is equivalent either to a couple or to the zero system. The simplest example is a couple consisting of two opposite parallel forces acting on distinct lines.
:::

## Force systems in equilibrium

:::definizione{#sistema-equilibrato titolo="Force system in equilibrium"}
A system of forces and couples is **in equilibrium** if it is equivalent to the zero system, that is, if
$$
\begin{cases}
\vec{R} = \vec{0} \\[4pt]
\vec{M}_O = \vec{0}
\end{cases}
$$
for one point $O$ and hence, by the change-of-reference-point formula, for every point. In the plane the conditions are the three scalar equations $R_x = 0$, $R_y = 0$ and $M_O = 0$. A rigid body initially at rest remains in equilibrium if and only if the system of all the forces acting on it, including the support reactions, is in equilibrium. This is the content of the equilibrium equations discussed in the chapter on support reactions. Two forces are in equilibrium if and only if they are opposite and share a line of action. Indeed, $\vec{R} = \vec{0}$ requires that they be opposite. They then either form a couple or lie on the same line, and the moment vanishes only in the latter case.
:::

::::teorema{#tre-forze-in-equilibrio titolo="Three forces in equilibrium"}
Consider three nonzero coplanar forces in equilibrium, with the lines of action of two forces meeting at $K$. The third line of action must also pass through $K$. This theorem determines the direction of a force applied at a known point when the lines of action of the other two forces are known. For example, a downward load of $12\,\mathrm{kN}$ acting at $(2, 0)$, a force applied at $B = (6, 0)$ along a line inclined at $45^\circ$, $y = 6 - x$, and a force applied at $A = (0, 0)$ can be in equilibrium only if the force at $A$ acts along the line joining $A$ and $K = (2, 4)$. The equations $R_x = 0$ and $R_y = 0$ then give $8.94\,\mathrm{kN}$ for the force at $A$ and $5.66\,\mathrm{kN}$ for the force at $B$.

:::dimostrazione
The system is in equilibrium, so its moment about $K$ vanishes. The first two forces have zero moment about $K$ because their lines of action pass through $K$. The third force must therefore also have zero moment about $K$. Since it is nonzero, the moment-arm formula requires its line of action to pass through $K$.
:::
::::

## Distributed loads

:::definizione{#carico-distribuito titolo="Distributed load"}
A **distributed load** is a force spread continuously along part of a beam. Its intensity $q(x)$ is force per unit length, measured in $\mathrm{kN/m}$ and taken as positive downward. A segment of length $dx$ at coordinate $x$ therefore carries the vertical force $q(x)\,dx$. The **load diagram** is the region between the beam axis and the graph of $q$. The self-weight of a homogeneous beam is a uniform load, whereas water pressure on a wall increases linearly with depth and produces a triangular load. A distributed load consists of infinitely many parallel forces. Its resultant follows from the center-of-parallel-forces formula by replacing sums with integrals.
:::

:::richiamo{titolo="Definite integral"}
For a continuous function $f$ on $[a, b]$, the integral $\displaystyle\int_a^b f(x)\,dx$ is the limit of the sums $\sum_k f(x_k)\,\Delta x_k$ as the greatest width of the intervals $\Delta x_k$ tends to zero. For $f \geq 0$, it is the area between the graph and the $x$-axis. If $F$ is an antiderivative of $f$, then $\displaystyle\int_a^b f(x)\,dx = F(b) - F(a)$. See the chapter on integral calculus in Mathematical Analysis 1.
:::

::::teorema{#risultante-carico-distribuito titolo="Resultant of a distributed load"}
Let $q(x) \geq 0$ be a continuous or piecewise continuous load on the interval $a \leq x \leq b$ of a horizontal beam. It is equivalent to a downward vertical force of magnitude
$$
Q = \int_a^b q(x)\,dx ,
$$
equal to the area of the load diagram, with a vertical line of action at horizontal coordinate
$$
x_Q = \frac{1}{Q}\int_a^b x\,q(x)\,dx ,
$$
which is the horizontal coordinate of the centroid of the load diagram. Distributed loads can therefore enter the equilibrium equations as concentrated forces through their resultants.

:::dimostrazione
Divide $[a, b]$ into intervals of width $\Delta x_k$ and replace the load on each interval by a force $q(x_k)\,\Delta x_k$ acting at a point $x_k$ in that interval. The forces are vertical, so the center-of-parallel-forces formula gives a resultant of $\sum_k q(x_k)\,\Delta x_k$ with its line of action at horizontal coordinate
$$
\frac{\sum_k x_k\,q(x_k)\,\Delta x_k}{\sum_k q(x_k)\,\Delta x_k} .
$$
As the interval widths tend to zero, the two sums converge to the integrals in the statement. In the load diagram, a strip of width $dx$ and height $q(x)$ has area $q(x)\,dx$ and centroid at horizontal coordinate $x$. Thus $\displaystyle\int_a^b x\,q(x)\,dx$ is the first moment of the load diagram about the $y$-axis, and $x_Q$ is the horizontal coordinate of its centroid, as discussed in the chapter on geometric properties of areas.
:::
::::

::::teorema{#carichi-notevoli titolo="Uniform, triangular and trapezoidal loads"}
Let $L$ be the length of the loaded segment and let $x$ be measured from its left end.

- **Uniform** load $q$: $Q = qL$, with $x_Q = \dfrac{L}{2}$.
- **Triangular** load, zero at the left end and equal to $q_0$ at the right end: $Q = \dfrac{q_0 L}{2}$, with $x_Q = \dfrac{2L}{3}$, one third of the segment length from the end carrying the maximum load.
- **Trapezoidal** load, equal to $q_1$ at the left end and $q_2$ at the right end:
$$
Q = \frac{(q_1 + q_2)\,L}{2} ,
\qquad
x_Q = \frac{(q_1 + 2q_2)\,L}{3\,(q_1 + q_2)} .
$$

A trapezoidal load can also be split into a uniform load $q_1$ and a triangular load varying from $0$ to $q_2 - q_1$. Their resultants can then be used separately. With $q_1 = 2\,\mathrm{kN/m}$, $q_2 = 8\,\mathrm{kN/m}$ and $L = 6\,\mathrm{m}$, the uniform part contributes $12\,\mathrm{kN}$ at $3\,\mathrm{m}$ and the triangular part contributes $18\,\mathrm{kN}$ at $4\,\mathrm{m}$. The formula gives $Q = 30\,\mathrm{kN}$ with
$$
x_Q = \frac{(2 + 16) \cdot 6}{3 \cdot 10} = 3.6\,\mathrm{m} ,
$$
which is the center of the two component forces, $\dfrac{12 \cdot 3 + 18 \cdot 4}{30} = 3.6\,\mathrm{m}$.

::struttura{nodi="A,0,0;B,6,0" aste="A-B" carichi="A,B,0,1.2,q_0" reazioni="4 1.35,0,-1.3,Q" quote="A,4 0,4 m,0.9;4 0,B,2 m,0.9" riferimento=0 titolo="Triangular load on $L = 6\,\mathrm{m}$ with resultant $Q = \dfrac{q_0 L}{2}$ acting $4\,\mathrm{m}$ from the unloaded end"}

::struttura{nodi="A,0,0;B,6,0" aste="A-B" carichi="A,B,0.3,1.2,q" reazioni="3.6 1.35,0,-1.3,Q" quote="A,3.6 0,3.6 m,0.9" riferimento=0 titolo="Trapezoidal load varying from $2$ to $8\,\mathrm{kN/m}$ over $6\,\mathrm{m}$, with resultant $Q = 30\,\mathrm{kN}$ acting $3.6\,\mathrm{m}$ from $A$"}

:::dimostrazione
The trapezoidal load is $q(x) = q_1 + (q_2 - q_1)\,\dfrac{x}{L}$. It includes the other two cases for $q_1 = q_2 = q$ and for $q_1 = 0$, $q_2 = q_0$. Applying the distributed-load resultant formula gives
$$
Q = \int_0^L \Big( q_1 + (q_2 - q_1)\,\frac{x}{L} \Big)\,dx = q_1 L + (q_2 - q_1)\,\frac{L}{2} = \frac{(q_1 + q_2)\,L}{2} ,
$$
$$
\int_0^L x\,q(x)\,dx = q_1\,\frac{L^2}{2} + (q_2 - q_1)\,\frac{L^2}{3} = \frac{(q_1 + 2q_2)\,L^2}{6} ,
$$
and dividing the second integral by $Q$ gives $x_Q$. Setting $q_1 = q_2$ gives $x_Q = \dfrac{L}{2}$. Setting $q_1 = 0$ gives $Q = \dfrac{q_2 L}{2}$ and $x_Q = \dfrac{2L}{3}$.
:::
::::

:::osservazione{#carichi-su-asta-inclinata titolo="Loads on an inclined member"}
For an inclined member of length $\ell$ and horizontal projection $a$, a uniform vertical load can be specified in two ways. Self-weight is given per unit member length, $q_s$, and has resultant $q_s\,\ell$. A snow load is given per unit length of horizontal projection, $q$, and has resultant $q\,a$. In both cases the resultant is vertical and passes through the midpoint of the member. For a member $5\,\mathrm{m}$ long with a horizontal projection of $4\,\mathrm{m}$, a self-weight of $2\,\mathrm{kN/m}$ has resultant $10\,\mathrm{kN}$, whereas a snow load of $2\,\mathrm{kN/m}$ has resultant $8\,\mathrm{kN}$. A uniform load $p$ perpendicular to the member, such as wind pressure, has resultant $p\,\ell$ perpendicular to the member and applied at its midpoint.

::struttura{nodi="A,0,0;B,4,3" aste="A-B" carichi="A,B,0.6,0.6,q_s" reazioni="2 1.5,0,-1.3,q_s ℓ" quote="A,4 0,a = 4 m,0.5;A,B,ℓ = 5 m,-0.9" titolo="Self-weight $q_s$ along an inclined member has a vertical resultant $q_s\,\ell$ through its midpoint"}

:::

:::attenzione
Replacing a load with its resultant preserves the support reactions but changes the internal forces and moments in the beam. Consider a simply supported beam of span $4\,\mathrm{m}$ carrying either $q = 5\,\mathrm{kN/m}$ over the entire span or its resultant of $20\,\mathrm{kN}$ at midspan. The support reactions are $10\,\mathrm{kN}$ in both cases. The midspan bending moment is $10\,\mathrm{kN\,m}$ under the distributed load and $20\,\mathrm{kN\,m}$ under the concentrated force. A load can therefore be replaced by its resultant in the equilibrium equations of a body, or of a part of that body, containing the entire loaded segment. If a free body contains only part of the loaded segment, use the resultant of that part, as discussed in the chapter on internal forces and moments.
:::
