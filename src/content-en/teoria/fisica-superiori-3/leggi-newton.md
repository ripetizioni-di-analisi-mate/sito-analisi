---
titolo: "Newton's laws of motion"
sommario: "Force diagrams, Newton's laws, connected systems, apparent weight and radial net force."
---

## Forces and the body under study

:::definizione{#risultante titolo="Free-body diagram"}
A **force** describes an interaction between two bodies. Its unit is the newton: $1\,\mathrm N=1\,\mathrm{kg\cdot m/s^2}$. To study a body, show the forces exerted on it by other bodies. In a particle model their arrows can start from a common point. To analyse rotation, keep the point of application, because torque depends on it.

For a book on a table, weight is Earth's gravitational action on the book and the normal force is the table's action on it. The force with which the book presses the table belongs in the table's diagram. After specifying the body, collect all external forces and add them as **vectors**. A force of $8\,\mathrm N$ to the right and one of $3\,\mathrm N$ to the left have a resultant of $5\,\mathrm N$ rightwards, regardless of the book's velocity at that instant.

For a system of bodies, a force between two of its members is internal and cancels with its reaction when the component equations are added. The distinction depends on the system chosen. If both carts and their connecting string are included in the system, the string–cart interactions are internal. Tension appears as an external force in a diagram of either cart alone.
:::

::grafico{assi=0 uguale=1 poligoni="-0.6,-0.4 0.6,-0.4 0.6,0.4 -0.6,0.4" segmenti="-2,-0.4,2,-0.4" vettori="0,0,0,1.5,N;0,0,0,-1.5,P;0,0,1.8,0,F" xmin=-2.7 xmax=2.7 ymin=-2 ymax=2 titolo="The book is pushed to the right. Its diagram shows weight, the normal force and the push on a smooth surface."}

:::esempio{#confine-sistema titolo="When the bodies have different accelerations"}
Two carts with masses $2\,\mathrm{kg}$ and $4\,\mathrm{kg}$ interact on the same track. At the same instant, measurements along the same axis give $a_1=+3\,\mathrm{m/s^2}$ and $a_2=-1\,\mathrm{m/s^2}$. To find the net external force on the system, add the two equations. The mutual forces cancel, leaving

$$
\sum F_{\mathrm{ext},x}=m_1a_1+m_2a_2=(2\cdot3+4\cdot(-1))\,\mathrm N=+2\,\mathrm N.
$$

The resultant is positive even though one cart accelerates leftwards. You can multiply total mass by a shared body acceleration only if the constraint makes the accelerations equal. In general, use the centre-of-mass acceleration, here $a_{\mathrm{CM},x}=\dfrac{2}{6}\,\mathrm{m/s^2}$. It is the mass-weighted average of the accelerations.
:::

::grafico{assi=0 uguale=1 linee="-3.8,0 3.8,0" poligoni="-2.2,0 -1.2,0 -1.2,0.7 -2.2,0.7;0.7,0 2.3,0 2.3,0.7 0.7,0.7" vettori="-1.7,1,-0.2,1,a₁;1.5,1,1.0,1,a₂" etichette="-1.9,0.43,2 kg;1.29,0.43,4 kg" xmin=-3.2 xmax=3.2 ymin=-0.44 ymax=1.65 titolo="The carts can accelerate in opposite directions. Use the same axis to add their contributions."}

## Newton's first law

:::teorema{#inerzia titolo="Law of inertia"}
A frame is **inertial** if bodies with zero net force maintain a constant velocity vector. Rest is the special case $v=0$. In a laboratory, Earth's frame can often be treated as approximately inertial for short motions. In an accelerating train carriage, however, a free puck can move relative to the carriage even with zero horizontal net force.

The law distinguishes continuation of motion from a change in it. On an ideal smooth horizontal surface, weight and the normal force cancel, and a moving puck keeps uniform straight-line motion when a push ends. In a real experiment it can slow because of friction. Slowing shows a resultant opposite to velocity, which can be checked by measuring the slope of the velocity–time graph.

A bend taken at constant speed requires a resultant because the velocity direction changes. To decide whether the motion is inertial, consider both the magnitude and the direction of velocity.
:::

:::esempio{#riferimenti titolo="Measuring the same puck from the ground and the carriage"}
A puck remains stationary relative to the laboratory as a carriage, initially at rest, sets off to the right with acceleration $2\,\mathrm{m/s^2}$. Its floor is horizontal and smooth. From the laboratory, the puck's horizontal velocity is zero because no horizontal force acts on it. To describe its motion relative to the carriage, subtract the two positions, $x_{\mathrm{rel}}=x-x_{\mathrm c}$.

The puck velocity measured from the carriage has a slope of $-2\,\mathrm{m/s^2}$. After $3\,\mathrm s$ it is $-6\,\mathrm{m/s}$. The difference between measurements comes from the acceleration of the carriage. If it carried on at constant velocity, the difference in velocities would be constant, and the two measured accelerations would agree.
:::

::grafico{linee="0,0 3,0;0,0 3,-6" punti="3,-6,pieno" etichette="1.3,0.43,ground;1.2,-3.36,carriage" xmin=0 xmax=3.6 ymin=-7.1 ymax=1.7 nomi="t (s),vₓ (m/s)" titolo="The puck's horizontal velocity is constant from the ground and drops by 2 m/s each second as seen from the carriage."}

## Newton's second law

:::teorema{#secondo-principio titolo="Force and acceleration"}
For a body of constant mass $m$ in an inertial frame, the second law gives
$$
\sum\vec F=m\vec a.
$$
In a plane, write $\sum F_x=ma_x$ and $\sum F_y=ma_y$ after choosing the axes. Mass is positive, so acceleration and the resultant point in the same direction. A resultant against the motion initially reduces speed. If it persists after velocity reaches zero, the body starts moving the other way.

For $m=4\,\mathrm{kg}$ and net force $(12,-16)\,\mathrm{N}$, acceleration is $\vec a=(3,-4)\,\mathrm{m/s^2}$, with magnitude $5\,\mathrm{m/s^2}$. Doubling mass at unchanged forces halves both components without changing direction. Reversing just one force component, by contrast, reverses the corresponding acceleration component.

Near Earth's surface, $\vec P=m\vec g$. An object of mass $2\,\mathrm{kg}$ has weight magnitude $19.62\,\mathrm N$ at $g=9.81\,\mathrm{m/s^2}$. In a different gravitational field, mass and response to the same resultant remain the same, but weight changes. A spring scale records a contact force. Its reading equals weight when vertical acceleration vanishes and weight and the normal force are the only forces.
:::

::grafico{f="4*x;8*x" punti="3,12,pieno;3,24,pieno" etichette="3.42,11.6,4 kg;3.2,26.8,8 kg" xmin=0 xmax=5 ymin=0 ymax=38 nomi="a (m/s²),F (N)" titolo="At equal acceleration the required force increases with mass"}

:::esempio{#proiezioni-rampa titolo="Using axes aligned with the ramp"}
A block weighs $50\,\mathrm N$ and stays at rest on a smooth ramp inclined at $30^\circ$, held by a string along the slope. Along the ramp, positive uphill, the weight component is $-50\sin30^\circ=-25\,\mathrm N$. The string therefore exerts $T=25\,\mathrm N$. Perpendicular to the ramp, acceleration is zero and the normal force is $N=50\cos30^\circ\simeq43.3\,\mathrm N$.

Find the normal force by projecting all the other forces onto the perpendicular axis. On a horizontal surface it equals weight if no other force has a vertical component. Even on a horizontal surface, an upward slanting pull reduces the normal force, lowering the limit for static friction.
:::

::grafico{assi=0 uguale=1 linee="-2.5,-1.943376 2.5,0.943376" vettori="0,0,0,-2,P;0,0,0.866025,0.5,T;0,0,-0.866025,1.5,N" segmenti="0,-2,-0.866025,-0.5;0,0,-0.866025,-0.5" punti="0,0,pieno" xmin=-2.7 xmax=2.7 ymin=-2.5 ymax=1.97 titolo="The dashed leg along the ramp has the same length as the T arrow."}

:::osservazione{#attrito titolo="The static threshold depends on the normal force"}
Find static friction by requiring that the surfaces do not slide. If the surface is fixed and the block starts at rest, set acceleration along the surface to zero. The friction force this requires is possible if $|F_{\mathrm s}|\leq\mu_{\mathrm s}N$. When the required force exceeds the limit, switch to the sliding model, with magnitude $|F_{\mathrm d}|=\mu_{\mathrm d}N$ and direction opposite the relative velocity of the surfaces.

For $m=4\,\mathrm{kg}$ on a horizontal surface, $g=10\,\mathrm{m/s^2}$, $\mu_{\mathrm s}=0.50$ and $\mu_{\mathrm d}=0.30$, the static limit is $20\,\mathrm N$. During sliding the magnitude is $12\,\mathrm N$. Let $F$ be the magnitude of the horizontal push to the right.

| State of the block | Applied force | Outcome |
| --- | --- | --- |
| Initially at rest | $0\leq F\leq20\,\mathrm N$ | Rest, friction of magnitude $F$ |
| Initially at rest | $F>20\,\mathrm N$ | Starts to slide right |
| Sliding right | $F>12\,\mathrm N$ | Speed increases |
| Sliding right | $F=12\,\mathrm N$ | Speed stays constant |
| Sliding right | $0\leq F<12\,\mathrm N$ | Slows to rest if the push stays constant |

A push of $16\,\mathrm N$ can therefore keep the block at rest or increase its speed, depending on its initial state. In the second case $a_x=\dfrac{16-12}{4}\,\mathrm{m/s^2}=1\,\mathrm{m/s^2}$. If the push is removed while the block is sliding, the block slows down. At rest, test the static regime again before extending the calculation.
:::

::grafico{curve="t,t,0,20;t,12,0,31" segmenti="20,0,20,20" punti="20,20,pieno;16,16,pieno;16,12,pieno" etichette="11.8,17.4,at rest;24,12.9,sliding" xmin=0 xmax=31 ymin=0 ymax=25 nomi="F (N),|friction| (N)" titolo="At F = 16 N the friction magnitude is 16 N for a block at rest and 12 N for a sliding block."}

:::esempio{#attrito-su-carrello titolo="Static friction with nonzero acceleration"}
A $5\,\mathrm{kg}$ parcel rests on the horizontal bed of a cart accelerating rightwards at $2\,\mathrm{m/s^2}$. If it does not slip, the parcel shares the cart’s acceleration relative to the laboratory floor. Static friction is its only horizontal force and must be $10\,\mathrm N$ to the right.

With $\mu_{\mathrm s}=0.30$ and $g=10\,\mathrm{m/s^2}$, the limit is $15\,\mathrm N$, so the parcel can stay in place. If the cart accelerated above $3\,\mathrm{m/s^2}$, available friction could no longer accelerate the parcel with it. The parcel would start sliding backwards relative to the bed while still being able to accelerate rightwards relative to the laboratory.
:::

## Newton's third law

:::teorema{#azione-reazione titolo="Mutual forces between two bodies"}
If $A$ exerts force $\vec F_{A\to B}$ on $B$, then $B$ exerts $\vec F_{B\to A}=-\vec F_{A\to B}$ on $A$. The two actions are simultaneous, equal in magnitude and opposite in direction, and belong to diagrams of different bodies. To decide whether two forces make a pair, identify the interacting bodies as well as comparing magnitude and direction.

On a book at rest, weight and the normal force may be equal and opposite. The reciprocal force to the book's weight is its gravitational pull on Earth. The reciprocal of the normal force is the book pressing on the table. For a truck and a car in contact during a collision, their contact forces have equal magnitude. If the truck is more massive and those forces dominate their respective resultants, the truck's acceleration is smaller in magnitude. Equal mutual forces are consistent with very different responses.
:::

::grafico{assi=0 uguale=1 poligoni="-2,-0.5 -1,-0.5 -1,0.5 -2,0.5;1,-0.5 2,-0.5 2,0.5 1,0.5" vettori="-1.5,0,-0.2,0,F_BA;1.5,0,0.2,0,F_AB" etichette="-1.63,-0.27,A;1.35,-0.27,B" xmin=-2.5 xmax=2.5 ymin=-1 ymax=1 titolo="F_BA is the force of B on A. F_AB is the force of A on B."}

## Connected bodies

:::osservazione{#sistemi-collegati titolo="Tension and common acceleration"}
An ideal taut inextensible string has fixed length and therefore links the displacements of its ends. For two carts on one track, it makes their accelerations equal. If the ends move on opposite sides of a pulley, their spatial directions may differ. Tension has the same magnitude in both branches for a massless string and massless frictionless pulley.

On a smooth horizontal plane, a force $F$ pulls cart $m_1$ connected to $m_2$. For the pair, $a=F/(m_1+m_2)$. Isolating the second cart, its only horizontal force is tension $T$, so $T=m_2a$. For $m_1=2\,\mathrm{kg}$, $m_2=3\,\mathrm{kg}$ and $F=10\,\mathrm{N}$, $a=2\,\mathrm{m/s^2}$ and $T=6\,\mathrm N$. The pulled cart has resultant $10-6=4\,\mathrm N$ and the same acceleration. Putting the second cart at the front and pulling it with $F$ keeps the common acceleration but changes which body the tension pulls.

For two hanging masses in an Atwood machine with $m_2>m_1$, take downwards as positive for the heavier mass and upwards for the lighter mass. The equations are
$$
m_2g-T=m_2a,\qquad T-m_1g=m_1a.
$$
Adding them gives $a=g(m_2-m_1)/(m_1+m_2)$. Recover tension using either equation. It is greater than the weight of the rising mass and below the weight of the descending mass. If the calculation gives the reverse, check the sign of $a$ in each separate diagram.
:::

::grafico{assi=0 uguale=1 poligoni="-1.8,0 -0.8,0 -0.8,0.8 -1.8,0.8;0.8,0 1.8,0 1.8,0.8 0.8,0.8" segmenti="-2.5,0,3.4,0;-0.8,0.4,0.8,0.4" vettori="1.8,0.4,3.0,0.4,F" etichette="-1.3,0.5,m_2;1.3,0.5,m_1" xmin=-2.6 xmax=3.4 ymin=-0.5 ymax=1.3 titolo="The connecting tension is internal to the two-cart system"}

:::osservazione{#massa-carrucola titolo="When the two branches have different tensions"}
If the pulley has mass, a torque is needed to change its angular velocity. For moment of inertia $I$, radius $R$ and a frictionless axle, the tension difference satisfies $(T_2-T_1)R=I\alpha$. If the string does not slip on the pulley, $\alpha=a/R$. Substituting the tension difference into the equations of the masses gives

$$
(m_2-m_1)g=\left(m_1+m_2+\frac{I}{R^2}\right)a.
$$

The term $I/R^2$ has units of mass. With the same weights it increases the resistance to a change in motion, lowering the acceleration. Setting $I=0$ recovers the ideal model and the two tensions agree.
:::

:::osservazione{#contatto-unilaterale titolo="Check that the constraint can exert the force"}
Blocks $A$ and $B$ touch on a smooth track, with $A$ on the left. A push to the right applied to $A$ can accelerate both. Compression from $A$ pushes $B$ to the right. If the same push acts only on $B$, test the shared-acceleration assumption on block $A$: for it to accelerate rightwards, $B$ would have to pull it. With no adhesion or connector, the contact opens and the contact force vanishes.

A taut string transmits a pull. If the tension calculated at fixed length is negative, the string would have to push. Allow the string to go slack and recalculate the two bodies' accelerations separately.
:::

::grafico{assi=0 uguale=1 linee="-2.9,0 2.9,0;-2.9,1.8 2.9,1.8" poligoni="-0.9,0 0,0 0,0.65 -0.9,0.65;0.36,0 1.26,0 1.26,0.65 0.36,0.65;-0.9,1.8 0,1.8 0,2.45 -0.9,2.45;0,1.8 0.9,1.8 0.9,2.45 0,2.45" vettori="-2.3,2.125,-0.9,2.125,F;1.26,0.325,2.55,0.325,F" etichette="-0.55,2.24,A;0.38,2.24,B;-0.55,0.44,A;0.74,0.44,B" xmin=-3.1 xmax=3.1 ymin=-0.35 ymax=2.8 titolo="Above, the push on A reaches B through compression. Below, B moves away from A."}

## Vertical and circular applications

:::teorema{#dinamica-circolare titolo="Apparent weight and radial force"}
Inside a lift, while the person remains on the scale and weight and the normal force are the vertical forces, take upwards as positive. Then $N-mg=ma$ and $N=m(g+a)$. If the lift slows while rising, $a<0$ and the reading is below weight. If it slows while descending, $a>0$ and the reading is above weight. The acceleration direction matters and may differ from the velocity direction.

For $m=60\,\mathrm{kg}$, $g=10\,\mathrm{m/s^2}$ and downward acceleration $2\,\mathrm{m/s^2}$, the normal force is $480\,\mathrm N$ while weight stays at $600\,\mathrm N$. In free fall $a=-g$ and $N=0$. The floor-contact model cannot have a negative normal force. If the equation required one, the person would have lost contact and the model would need to change.

In circular motion with nonzero speed, the net inward radial force has magnitude $mv^2/r$. Draw the actual forces first and then project them along the radius. On a horizontal bend without skidding, static tyre friction may provide that horizontal force. On a vertical curve, weight and the normal force may contribute with different signs. At the bottom of a dip the centre is above, so $N-mg=mv^2/r$. At the crest of an analogous hill the centre is below, so $mg-N=mv^2/r$ while contact lasts.
:::

::grafico{f="60*(10+x)" punti="-10,0,pieno;-2,480,pieno;0,600,pieno" xmin=-10 xmax=4 ymin=0 ymax=860 nomi="a (m/s²),N (N)" titolo="The scale reads 480 N at acceleration −2 m/s²"}

:::esempio{#soglia-curva titolo="Speed compatible with contact"}
With $m=3\,\mathrm{kg}$, $r=4\,\mathrm m$, $v=4\,\mathrm{m/s}$ and $g=10\,\mathrm{m/s^2}$, the required radial component is $12\,\mathrm N$. At the bottom of the dip, $N$ exceeds the weight by $12\,\mathrm N$ and is $42\,\mathrm N$. At the crest, $N$ is below the weight by $12\,\mathrm N$ and is $18\,\mathrm N$.

As speed increases, the normal force at the crest decreases and reaches zero at $v=\sqrt{gr}$. At higher speeds, following the road would require a downward normal force, which a supporting surface cannot supply. The body leaves the surface. On a horizontal track, check the available static friction instead: the condition $mv^2/r\leq\mu_{\mathrm s}mg$ gives $v\leq\sqrt{\mu_{\mathrm s}gr}$.
:::

::grafico{assi=0 uguale=1 curve="-2.4+t,-0.18+0.275*t^2,-1.6,1.6;2.4+t,-0.18-0.275*t^2,-1.6,1.6" vettori="-2.4,0,-2.4,1.68,N;-2.4,0,-2.4,-1.2,P;2.4,0,2.4,0.72,N;2.4,0,2.4,-1.2,P" punti="-2.4,0,pieno;2.4,0,pieno" etichette="-3.6,-1.6,dip;2.65,-1.6,crest" xmin=-4.3 xmax=4.3 ymin=-1.93 ymax=2.08 titolo="Weight is the same at both points. The centre is above at the bottom of the dip and below at the crest."}
