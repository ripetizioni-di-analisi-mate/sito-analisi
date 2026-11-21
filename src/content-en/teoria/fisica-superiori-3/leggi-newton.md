---
titolo: "Newton's laws of motion"
sommario: "Force diagrams, Newton's laws, connected systems, apparent weight and radial net force."
---

## Forces and the body under study

:::definizione{#risultante titolo="Free-body diagram"}
A **force** is the action that one body exerts on another, for example a push, a pull or the attraction of the Earth. It is a vector, that is, a quantity with a magnitude (its strength), a direction and a sense. Its unit is the newton (symbol $\mathrm N$). A force of $1\,\mathrm N$ gives a mass of $1\,\mathrm{kg}$ an acceleration of $1\,\mathrm{m/s^2}$, so $1\,\mathrm N=1\,\mathrm{kg\cdot m/s^2}$.

The **free-body diagram** of a body is the drawing of all the forces that *other* bodies exert on it. If the body is treated as a particle, that is, as a point that has the body's mass and whose size is neglected, the arrows can start from a common point. If rotation is also studied, each arrow starts from its point of application, because the torque of the force, that is, its ability to make the body rotate, depends on that point.

Two forces act on a book lying on a table.
- The **weight** is the gravitational attraction of the Earth on the book.
- The **normal force** is the push of the table on the book, perpendicular to the table's surface ("normal" means perpendicular).

The force with which the book presses on the table acts on the table, so it belongs in the table's diagram.

The **resultant** is the **vector** sum of the external forces acting on the chosen body. For forces along the same line, a positive direction is fixed and the values are added with their signs. With rightwards positive, a force of $8\,\mathrm N$ to the right and one of $3\,\mathrm N$ to the left give $8-3=5\,\mathrm N$, that is, a resultant of $5\,\mathrm N$ to the right. The sum depends only on the forces, so it holds whatever the book's velocity at that instant.

A **system** is a set of bodies chosen to be studied together. A force between two bodies of the system is **internal**; a force exerted by a body outside it is **external**. Internal forces come in equal and opposite pairs (third law), so they cancel when the equations of the individual bodies are added. The distinction depends on the system chosen. For two carts connected by a string, if the system includes the carts and the string, the string–cart forces are internal. If a single cart is isolated instead, the **tension**, that is, the force with which the string pulls, appears as an external force in its diagram.

In the figure the book is pushed to the right by the force $F$ on a smooth surface, that is, one with negligible friction. Weight $P$ and normal force $N$ have the same length and opposite directions, so they cancel and the resultant is $F$.
:::

::grafico{assi=0 uguale=1 poligoni="-0.6,-0.4 0.6,-0.4 0.6,0.4 -0.6,0.4" segmenti="-2,-0.4,2,-0.4" vettori="0,0,0,1.5,N;0,0,0,-1.5,P;0,0,1.8,0,F" xmin=-2.7 xmax=2.7 ymin=-2 ymax=2 titolo="The book is pushed to the right. Its diagram shows weight, the normal force and the push on a smooth surface."}

:::esempio{#confine-sistema titolo="When the bodies have different accelerations"}
Two carts with masses $m_1=2\,\mathrm{kg}$ and $m_2=4\,\mathrm{kg}$ push or pull each other on the same track, for example through a spring. At the same instant, measurements along the same axis, directed to the right, give $a_1=+3\,\mathrm{m/s^2}$ and $a_2=-1\,\mathrm{m/s^2}$. The first cart therefore accelerates to the right and the second to the left.

For each cart the second law (section "Newton's second law") says that the resultant equals mass times acceleration. The two equations are added. The force of the first cart on the second and that of the second on the first are equal and opposite, so they cancel, leaving the resultant of the external forces alone:

$$
\sum F_{\mathrm{ext},x}=m_1a_1+m_2a_2=(2\cdot3+4\cdot(-1))\,\mathrm N=+2\,\mathrm N.
$$

The symbol $\sum$ (capital sigma) is read "sum of"; the subscript $\mathrm{ext},x$ indicates that the $x$-components of the external forces are added.

The external resultant is positive even though one cart accelerates leftwards. The product of the total mass and a single acceleration makes sense only when a connection, such as a taut string, makes the accelerations equal. In the general case the acceleration of the **centre of mass** is used, which is the mass-weighted average of the accelerations:

$$
a_{\mathrm{CM},x}=\frac{m_1a_1+m_2a_2}{m_1+m_2}=\frac{2}{6}\,\mathrm{m/s^2}.
$$

Therefore $\sum F_{\mathrm{ext},x}=(m_1+m_2)\,a_{\mathrm{CM},x}$. In the figure the arrows $a_1$ and $a_2$, measured on the same axis, point in opposite directions.
:::

::grafico{assi=0 uguale=1 linee="-3.8,0 3.8,0" poligoni="-2.2,0 -1.2,0 -1.2,0.7 -2.2,0.7;0.7,0 2.3,0 2.3,0.7 0.7,0.7" vettori="-1.7,1,-0.2,1,a₁;1.5,1,1.0,1,a₂" etichette="-1.9,0.43,2 kg;1.29,0.43,4 kg" xmin=-3.2 xmax=3.2 ymin=-0.44 ymax=1.65 titolo="The carts can accelerate in opposite directions. Use the same axis to add their contributions."}

## Newton's first law

:::teorema{#inerzia titolo="Law of inertia"}
A **frame of reference** is the point of view from which positions and velocities are measured, for example the laboratory or a train carriage. A frame is **inertial** if every body with zero resultant keeps a constant velocity vector in it, that is, constant magnitude, direction and sense. The **law of inertia** states that, in an inertial frame, a body with zero resultant stays at rest or moves with uniform straight-line motion (along a straight line, at constant velocity). Rest is the special case $v=0$.

The frame fixed to the Earth is treated as inertial for short motions in a laboratory, even though the Earth rotates. The frame of an accelerating train carriage, by contrast, is not inertial. A puck lying on the smooth floor of the carriage, with no horizontal forces, moves relative to the carriage (next example).

A resultant is needed to change the velocity; motion at constant velocity takes place with zero resultant. On an ideal smooth horizontal surface, weight and the normal force cancel; therefore a puck already moving continues in uniform straight-line motion even after the push ends. In a real experiment the puck slows because of friction. The slowing shows a resultant opposite to the velocity. It is measured from the slope of the velocity–time graph, which is the acceleration.

A bend taken at constant speed (the **speed** is the magnitude of the velocity) requires a nonzero resultant, because the direction of the velocity changes. To decide whether a motion takes place with zero resultant, both the magnitude and the direction of the velocity are therefore checked.
:::

:::esempio{#riferimenti titolo="Measuring the same puck from the ground and the carriage"}
A puck is at rest relative to the laboratory, lying on the horizontal smooth floor of a carriage. The carriage, initially at rest, sets off to the right with acceleration $2\,\mathrm{m/s^2}$. From the laboratory the puck's horizontal velocity is zero, because on the smooth floor it receives no horizontal force.

The position of the puck relative to the carriage is the difference between the position of the puck and that of the carriage, both measured from the laboratory: $x_{\mathrm{rel}}=x-x_{\mathrm c}$. In the same way the velocity relative to the carriage is the difference of the velocities. After a time $t$ the carriage has velocity $2t$ (in $\mathrm{m/s}$, with $t$ in seconds) and the puck has zero velocity, so

$$
v_{\mathrm{rel}}=0-2t=-2t.
$$

The puck velocity measured from the carriage therefore has slope $-2\,\mathrm{m/s^2}$, that is, the puck moves backwards relative to the carriage ever faster. After $3\,\mathrm s$ it is $-2\cdot3=-6\,\mathrm{m/s}$, the filled point in the figure. The two measurements disagree because the carriage accelerates. If the carriage carried on at constant velocity, the difference of the velocities would be constant and the two measured accelerations would agree.
:::

::grafico{linee="0,0 3,0;0,0 3,-6" punti="3,-6,pieno" etichette="1.3,0.43,ground;1.2,-3.36,carriage" xmin=0 xmax=3.6 ymin=-7.1 ymax=1.7 nomi="t (s),vₓ (m/s)" titolo="The puck's horizontal velocity is constant from the ground and drops by 2 m/s each second as seen from the carriage."}

## Newton's second law

:::teorema{#secondo-principio titolo="Force and acceleration"}
For a body of constant mass $m$, in an inertial frame, Newton's second law holds:
$$
\sum\vec F=m\vec a.
$$
On the left is the resultant, on the right the mass times the acceleration. In a plane, two perpendicular axes $x$ and $y$ are fixed and the equality is written for each component, that is, for the signed projection of each vector onto the axis: $\sum F_x=ma_x$ and $\sum F_y=ma_y$. Mass is positive, so acceleration and resultant have the same direction and the same sense. A resultant opposite to the motion initially reduces the speed. If the force keeps acting after the velocity has reached zero, the body starts moving the other way.

For $m=4\,\mathrm{kg}$ and resultant $(12,-16)\,\mathrm{N}$, that is, $12\,\mathrm N$ along $x$ and $-16\,\mathrm N$ along $y$, each component is divided by the mass:
$$
a_x=\frac{12}{4}\,\mathrm{m/s^2}=3\,\mathrm{m/s^2},\qquad a_y=\frac{-16}{4}\,\mathrm{m/s^2}=-4\,\mathrm{m/s^2}.
$$
So $\vec a=(3,-4)\,\mathrm{m/s^2}$. By Pythagoras' theorem the magnitude is $\sqrt{3^2+(-4)^2}\,\mathrm{m/s^2}=\sqrt{25}\,\mathrm{m/s^2}=5\,\mathrm{m/s^2}$. If the mass is doubled with unchanged forces, both components are halved and the direction stays the same. If instead just one component of the force is reversed, the corresponding component of the acceleration is also reversed.

Near the Earth's surface the weight is $\vec P=m\vec g$, where $\vec g$ is the acceleration due to gravity, directed downwards, with magnitude $g=9.81\,\mathrm{m/s^2}$ (often $10\,\mathrm{m/s^2}$ in exercises). An object of mass $2\,\mathrm{kg}$ therefore has weight of magnitude $2\cdot9.81\,\mathrm N=19.62\,\mathrm N$. Mass measures the inertia of the body, that is, how hard it is to change its velocity, and does not depend on the place; weight, on the other hand, depends on $g$. In a place with different gravity, therefore, the mass and the acceleration produced by the same resultant stay the same, while the weight changes. A spring scale (force meter) measures the contact force it exerts on the body. Its reading equals the weight when only weight and the normal force act and the vertical acceleration is zero.

In the graph of force $F$ against acceleration $a$ the line passes through the origin and its slope is the mass. At $3\,\mathrm{m/s^2}$, $4\cdot3=12\,\mathrm N$ are needed for $4\,\mathrm{kg}$ and $8\cdot3=24\,\mathrm N$ for $8\,\mathrm{kg}$.
:::

::grafico{f="4*x;8*x" punti="3,12,pieno;3,24,pieno" etichette="3.42,11.6,4 kg;3.2,26.8,8 kg" xmin=0 xmax=5 ymin=0 ymax=38 nomi="a (m/s²),F (N)" titolo="At equal acceleration the required force increases with mass"}

:::esempio{#proiezioni-rampa titolo="Using axes aligned with the ramp"}
A smooth ramp is inclined at $30^\circ$ to the horizontal. A block weighing $50\,\mathrm N$ stays at rest on it, held by a string parallel to the slope. One axis is chosen along the slope and one perpendicular to it, because on these axes tension and normal force each have a single component. The weight, which is vertical, is split into two parts. With $\alpha$ (alpha) the angle of the ramp, the component along the slope has magnitude $P\sin\alpha$ and the perpendicular one has magnitude $P\cos\alpha$; sine and cosine are the ratios of the opposite side to the hypotenuse and of the adjacent side to the hypotenuse in a right-angled triangle.

Along the slope, with uphill positive, the weight has component $-50\sin30^\circ=-50\cdot\dfrac12=-25\,\mathrm N$. The block is at rest, so the sum along the slope is zero and the string exerts $T=25\,\mathrm N$. Perpendicular to the slope the acceleration is zero, so the normal force balances the other component: $N=50\cos30^\circ=50\cdot\dfrac{\sqrt3}{2}\simeq43.3\,\mathrm N$. In the figure the two dashed legs are the components of the weight. The one parallel to the ramp is as long as the $T$ arrow, the perpendicular one as long as the $N$ arrow.

The normal force is found from the projection of all the other forces onto the perpendicular axis. On a horizontal surface it equals the weight if no other force has a vertical component. Even on a horizontal surface, an upward slanting pull with vertical component $F_y$ reduces the normal force to $N=P-F_y$; so it lowers the limit for static friction.
:::

::grafico{assi=0 uguale=1 linee="-2.5,-1.943376 2.5,0.943376" vettori="0,0,0,-2,P;0,0,0.866025,0.5,T;0,0,-0.866025,1.5,N" segmenti="0,-2,-0.866025,-0.5;0,0,-0.866025,-0.5" punti="0,0,pieno" xmin=-2.7 xmax=2.7 ymin=-2.5 ymax=1.97 titolo="The dashed leg along the ramp has the same length as the T arrow."}

:::osservazione{#attrito titolo="The static threshold depends on the normal force"}
**Friction** is the force that a surface exerts on a body in contact with it, parallel to the surface. It is **static** if the body does not slide and **kinetic** if it slides. The coefficients $\mu_{\mathrm s}$ and $\mu_{\mathrm d}$ ($\mu$ is read "mu") are numbers without units that depend on the two surfaces.

Static friction takes whatever value is needed to stop the body sliding, up to a maximum value. It is therefore found by requiring that there is no sliding. If the surface is fixed and the block starts at rest, the acceleration along the surface is set to zero. The value obtained in this way is possible if $|F_{\mathrm s}|\leq\mu_{\mathrm s}N$, where $|F_{\mathrm s}|$ is the magnitude of the friction and $\mu_{\mathrm s}N$ is the static limit. When the required value exceeds the limit, the block slides and the sliding model applies: friction has magnitude $|F_{\mathrm d}|=\mu_{\mathrm d}N$ and direction opposite to the relative velocity of the surfaces.

For $m=4\,\mathrm{kg}$ on a horizontal surface, $g=10\,\mathrm{m/s^2}$, $\mu_{\mathrm s}=0.50$ and $\mu_{\mathrm d}=0.30$, the normal force is $N=mg=40\,\mathrm N$. The static limit is therefore $0.50\cdot40\,\mathrm N=20\,\mathrm N$, and during sliding the friction magnitude is $0.30\cdot40\,\mathrm N=12\,\mathrm N$. Let $F$ be the magnitude of the horizontal push to the right.

| State of the block | Applied force | Outcome |
| --- | --- | --- |
| Initially at rest | $0\leq F\leq20\,\mathrm N$ | Rest, friction of magnitude $F$ |
| Initially at rest | $F>20\,\mathrm N$ | Starts to slide right |
| Sliding right | $F>12\,\mathrm N$ | Speed increases |
| Sliding right | $F=12\,\mathrm N$ | Speed stays constant |
| Sliding right | $0\leq F<12\,\mathrm N$ | Slows to rest if the push stays constant |

A push of $16\,\mathrm N$ can therefore keep the block at rest or increase its speed, depending on its initial state. In the second case the resultant is $16-12=4\,\mathrm N$ and
$$
a_x=\frac{16-12}{4}\,\mathrm{m/s^2}=1\,\mathrm{m/s^2}.
$$
If the push is removed while the block is sliding, the block slows down. When it stops, the static limit is used again to check whether it stays at rest, before the calculation is extended. In the figure the slanting segment is the friction at rest, equal to the push up to $20\,\mathrm N$; the horizontal segment is the friction during sliding, constant at $12\,\mathrm N$.
:::

::grafico{curve="t,t,0,20;t,12,0,31" segmenti="20,0,20,20" punti="20,20,pieno;16,16,pieno;16,12,pieno" etichette="11.8,17.4,at rest;24,12.9,sliding" xmin=0 xmax=31 ymin=0 ymax=25 nomi="F (N),|friction| (N)" titolo="At F = 16 N the friction magnitude is 16 N for a block at rest and 12 N for a sliding block."}

:::esempio{#attrito-su-carrello titolo="Static friction with nonzero acceleration"}
A $5\,\mathrm{kg}$ parcel rests on the horizontal bed (the loading surface) of a cart accelerating rightwards at $2\,\mathrm{m/s^2}$. If it does not slip, the parcel has the same acceleration as the cart relative to the laboratory floor. Its only horizontal force is static friction, which must therefore be $5\cdot2=10\,\mathrm N$ to the right.

With $\mu_{\mathrm s}=0.30$ and $g=10\,\mathrm{m/s^2}$ the limit is $0.30\cdot5\cdot10\,\mathrm N=15\,\mathrm N$. Since $10\,\mathrm N\leq15\,\mathrm N$, the parcel stays in place on the bed. The largest acceleration that friction can give the parcel is $\dfrac{15}{5}\,\mathrm{m/s^2}=3\,\mathrm{m/s^2}$. If the cart accelerated above $3\,\mathrm{m/s^2}$, the available friction could no longer accelerate the parcel with it. The parcel would start sliding backwards relative to the bed; relative to the laboratory it would still accelerate rightwards, because the kinetic friction on it still points to the right.
:::

## Newton's third law

:::teorema{#azione-reazione titolo="Mutual forces between two bodies"}
If $A$ exerts force $\vec F_{A\to B}$ on $B$ (the subscript is read "of $A$ on $B$"), then $B$ exerts $\vec F_{B\to A}=-\vec F_{A\to B}$ on $A$. The two actions are simultaneous, equal in magnitude and opposite in direction, and they appear in the diagrams of different bodies, one in $B$'s and the other in $A$'s. To decide whether two forces form an action–reaction pair, the two interacting bodies are identified, as well as comparing magnitude and direction.

On a book at rest, weight and the normal force may be equal and opposite, but both act on the book, so they are not a third-law pair. The reaction to the book's weight is the book's gravitational pull on the Earth. The reaction to the normal force is the force with which the book presses on the table.

For a truck and a car that collide, the contact forces have equal magnitude. If those forces are much larger than the others, and therefore make up almost the whole resultant on each vehicle, the acceleration of each is the force divided by its mass. The truck has the larger mass, so its acceleration is smaller in magnitude. Equal mutual forces therefore produce very different accelerations.
:::

::grafico{assi=0 uguale=1 poligoni="-2,-0.5 -1,-0.5 -1,0.5 -2,0.5;1,-0.5 2,-0.5 2,0.5 1,0.5" vettori="-1.5,0,-0.2,0,F_BA;1.5,0,0.2,0,F_AB" etichette="-1.63,-0.27,A;1.35,-0.27,B" xmin=-2.5 xmax=2.5 ymin=-1 ymax=1 titolo="F_BA is the force of B on A. F_AB is the force of A on B."}

## Connected bodies

:::osservazione{#sistemi-collegati titolo="Tension and common acceleration"}
An **ideal** string has negligible mass and is **inextensible**, that is, its length does not change. As long as it is taut, therefore, if one end moves by $1\,\mathrm{cm}$ the other end also moves by $1\,\mathrm{cm}$. For two carts on the same track this constraint gives the same acceleration. A **pulley** is a wheel over which the string passes and changes direction. If the ends move on different sides of a pulley, one can rise while the other falls, so the directions of motion can be opposite. Tension has the same magnitude in both branches if string and pulley have negligible mass and the pulley turns without friction.

On a smooth horizontal surface a force $F$ pulls cart $m_1$, joined by a string to cart $m_2$.
- In the system of the two carts the tension is internal, so $F=(m_1+m_2)a$ and $a=\dfrac{F}{m_1+m_2}$.
- On the second cart, isolated from the first, the only horizontal force is $T$, so $T=m_2a$.

For $m_1=2\,\mathrm{kg}$, $m_2=3\,\mathrm{kg}$ and $F=10\,\mathrm{N}$ this gives $a=\dfrac{10}{2+3}\,\mathrm{m/s^2}=2\,\mathrm{m/s^2}$ and $T=3\cdot2\,\mathrm N=6\,\mathrm N$. On the pulled cart, $F$ acts forwards and $T$ backwards, giving a resultant of $10-6=4\,\mathrm N$, which on $2\,\mathrm{kg}$ gives the same acceleration. If the second cart is placed at the front and pulled with $F$, the common acceleration stays the same, but the tension pulls the other cart and is $T=m_1a=4\,\mathrm N$.

An **Atwood machine** consists of two masses hanging from the ends of a string that passes over a pulley. With $m_2>m_1$ the heavier mass falls and the lighter one rises. For each mass the direction in which it moves is taken as positive, that is, downwards for the heavier and upwards for the lighter; in this way the two accelerations have the same value $a$. On each mass the weight acts downwards and the tension upwards, so the equations are
$$
m_2g-T=m_2a,\qquad T-m_1g=m_1a.
$$
Adding them, $T$ cancels and $(m_2-m_1)g=(m_1+m_2)a$ remains, that is, $a=g\dfrac{m_2-m_1}{m_1+m_2}$. Since $m_2-m_1$ is less than $m_1+m_2$, the acceleration is less than $g$. Tension is recovered from either equation: $T=m_1(g+a)$ is greater than the weight of the rising mass, and $T=m_2(g-a)$ is less than the weight of the falling mass. If the calculation gives the reverse, the sign of $a$ in the separate diagram should be checked again.
:::

::grafico{assi=0 uguale=1 poligoni="-1.8,0 -0.8,0 -0.8,0.8 -1.8,0.8;0.8,0 1.8,0 1.8,0.8 0.8,0.8" segmenti="-2.5,0,3.4,0;-0.8,0.4,0.8,0.4" vettori="1.8,0.4,3.0,0.4,F" etichette="-1.3,0.5,m_2;1.3,0.5,m_1" xmin=-2.6 xmax=3.4 ymin=-0.5 ymax=1.3 titolo="The connecting tension is internal to the two-cart system"}

:::osservazione{#massa-carrucola titolo="When the two branches have different tensions"}
If the pulley has mass, a torque is needed to change its angular velocity (how fast it turns). The moment of inertia $I$ measures how much the pulley resists a change in its rotation, just as mass resists a change in velocity. With radius $R$ and a frictionless axle, the tensions $T_1$ and $T_2$ of the two branches give the torque $(T_2-T_1)R$, which satisfies $(T_2-T_1)R=I\alpha$, where $\alpha$ is the angular acceleration. If the string does not slip on the pulley, the rim moves with the string, so $\alpha=\dfrac{a}{R}$ and $T_2-T_1=\dfrac{I}{R^2}\,a$. The equations of the masses become $m_2g-T_2=m_2a$ and $T_1-m_1g=m_1a$. Adding them and substituting the tension difference gives

$$
(m_2-m_1)g=\left(m_1+m_2+\frac{I}{R^2}\right)a.
$$

The term $\dfrac{I}{R^2}$ is measured in $\mathrm{kg\cdot m^2/m^2}=\mathrm{kg}$, that is, it has units of mass. With the same weights it increases the quantity that resists a change in motion, so the acceleration decreases. Setting $I=0$ recovers the ideal model and the two tensions agree.
:::

:::osservazione{#contatto-unilaterale titolo="Check that the constraint can exert the force"}
Blocks $A$ and $B$ touch on a smooth track, with $A$ on the left. A simple contact can only push, that is, exert a compression. A push to the right applied to $A$ can therefore accelerate both, because the compression exerted by $A$ pushes $B$ to the right (top of the figure). If the same push acts only on $B$, the shared-acceleration assumption is tested on block $A$. For $A$ to accelerate rightwards, $B$ would have to pull it. Without glue or a coupling the contact cannot pull, so the contact opens, the contact force vanishes and $B$ moves away from $A$ with acceleration $\dfrac{F}{m_B}$ (bottom of the figure).

A taut string, on the other hand, can only pull, that is, it transmits tension. If the tension calculated assuming a fixed string length is negative, the string would have to push. In that case the string goes slack, the tension is zero and the accelerations of the two bodies are recalculated separately.
:::

::grafico{assi=0 uguale=1 linee="-2.9,0 2.9,0;-2.9,1.8 2.9,1.8" poligoni="-0.9,0 0,0 0,0.65 -0.9,0.65;0.36,0 1.26,0 1.26,0.65 0.36,0.65;-0.9,1.8 0,1.8 0,2.45 -0.9,2.45;0,1.8 0.9,1.8 0.9,2.45 0,2.45" vettori="-2.3,2.125,-0.9,2.125,F;1.26,0.325,2.55,0.325,F" etichette="-0.55,2.24,A;0.38,2.24,B;-0.55,0.44,A;0.74,0.44,B" xmin=-3.1 xmax=3.1 ymin=-0.35 ymax=2.8 titolo="Above, the push on A reaches B through compression. Below, B moves away from A."}

## Vertical and circular applications

:::teorema{#dinamica-circolare titolo="Apparent weight and radial force"}
A person stands on a scale inside a lift. While the person stays in contact with the scale, the vertical forces on them are the weight $mg$ downwards and the normal force $N$ upwards. The scale reads $N$, also called **apparent weight**. With upwards positive the second law gives $N-mg=ma$, so $N=m(g+a)$.
- If the lift slows while rising, the velocity points up and decreases, so the acceleration points down, $a<0$, and the reading is below the weight.
- If the lift slows while descending, $a>0$ and the reading is above the weight.
- If the lift rises or descends at constant velocity, $a=0$ and the reading equals the weight.

The direction of the acceleration therefore matters, and it may differ from the direction of the velocity.

For $m=60\,\mathrm{kg}$, $g=10\,\mathrm{m/s^2}$ and downward acceleration $2\,\mathrm{m/s^2}$, that is, $a=-2\,\mathrm{m/s^2}$, the normal force is $60\cdot(10-2)\,\mathrm N=480\,\mathrm N$, while the weight stays at $60\cdot10\,\mathrm N=600\,\mathrm N$. In free fall only the weight acts, so $a=-g$ and $N=m(g-g)=0$. The floor can only push, so the floor-contact model cannot have a negative normal force. If the equation required one, the person would have lost contact and the model would need to change. In the figure the line $N=60\,(10+a)$ passes through $480\,\mathrm N$ at $a=-2\,\mathrm{m/s^2}$ and through $600\,\mathrm N$ at $a=0$, and reaches zero at $a=-10\,\mathrm{m/s^2}$.

In circular motion with nonzero speed, the radial component of the resultant, that is, the component along the radius towards the centre, has magnitude $\dfrac{mv^2}{r}$. It is the mass times the **centripetal acceleration** $\dfrac{v^2}{r}$ of circular motion; with the angular velocity $\omega$ (omega, measured in radians per second, $\mathrm{rad/s}$) one has $v=\omega r$, so the centripetal acceleration can also be written $\omega^2r$. The radial component is the sum along the radius of the real forces, so the actual forces are drawn first and then projected along the radius. If the speed changes, the resultant also has a component tangent to the path, and its magnitude exceeds that of the radial component.

For a car on a horizontal bend taken without skidding, the force towards the centre may come from the static friction of the tyres. On a vertical curve, weight and the normal force may contribute with different signs, taking the direction towards the centre as positive.
- At the bottom of a dip the centre is above, so $N-mg=\dfrac{mv^2}{r}$.
- At the crest of an analogous hill the centre is below, so $mg-N=\dfrac{mv^2}{r}$, while contact lasts.
:::

::grafico{f="60*(10+x)" punti="-10,0,pieno;-2,480,pieno;0,600,pieno" xmin=-10 xmax=4 ymin=0 ymax=860 nomi="a (m/s²),N (N)" titolo="The scale reads 480 N at acceleration −2 m/s²"}

:::esempio{#soglia-curva titolo="Speed compatible with contact"}
With $m=3\,\mathrm{kg}$, $r=4\,\mathrm m$, $v=4\,\mathrm{m/s}$ and $g=10\,\mathrm{m/s^2}$, the required radial component is $\dfrac{mv^2}{r}=\dfrac{3\cdot4^2}{4}\,\mathrm N=12\,\mathrm N$ and the weight is $30\,\mathrm N$. At the bottom of the dip $N$ exceeds the weight by $12\,\mathrm N$ and is $30+12=42\,\mathrm N$. At the crest $N$ is below the weight by $12\,\mathrm N$ and is $30-12=18\,\mathrm N$. In the figure the weight is the same at both points and the normal-force arrow is longer in the dip.

As the speed increases, the normal force at the crest, $N=mg-\dfrac{mv^2}{r}$, decreases. It reaches zero when $mg=\dfrac{mv^2}{r}$, that is, cancelling the mass, at $v=\sqrt{gr}$; here $\sqrt{10\cdot4}\,\mathrm{m/s}\simeq6.3\,\mathrm{m/s}$. At higher speeds, following the road would require a downward normal force, which a simple support cannot supply, so the body leaves the surface. On a horizontal track the check concerns the available friction instead, which is at most $\mu_{\mathrm s}mg$. The condition $\dfrac{mv^2}{r}\leq\mu_{\mathrm s}mg$ therefore gives $v\leq\sqrt{\mu_{\mathrm s}gr}$.
:::

::grafico{assi=0 uguale=1 curve="-2.4+t,-0.18+0.275*t^2,-1.6,1.6;2.4+t,-0.18-0.275*t^2,-1.6,1.6" vettori="-2.4,0,-2.4,1.68,N;-2.4,0,-2.4,-1.2,P;2.4,0,2.4,0.72,N;2.4,0,2.4,-1.2,P" punti="-2.4,0,pieno;2.4,0,pieno" etichette="-3.6,-1.6,dip;2.65,-1.6,crest" xmin=-4.3 xmax=4.3 ymin=-1.93 ymax=2.08 titolo="Weight is the same at both points. The centre is above at the bottom of the dip and below at the crest."}
