---
titolo: "Newton's laws of motion"
sommario: "Force diagrams, Newton's laws, connected systems, apparent weight and radial net force."
---

## Forces and the body under study

:::definizione{#risultante titolo="Free-body diagram"}
A **force** describes an interaction between two bodies. Its unit is the newton: $1\,\mathrm N=1\,\mathrm{kg\cdot m/s^2}$. To study a body, show the forces exerted on it by other bodies. In a particle model their arrows can start from a common point. To analyse rotation, keep the point of application, because torque depends on it.

For a book on a table, weight is Earth's gravitational action on the book and the normal force is the table's action on it. The force with which the book presses the table belongs in the table's diagram. After specifying the body, collect all external forces and add them as **vectors**. A force of $8\,\mathrm N$ to the right and one of $3\,\mathrm N$ to the left have a resultant of $5\,\mathrm N$ rightwards, regardless of the book's velocity at that instant.

For a system of bodies, a force between two of its members is internal and cancels with its reaction when the component equations are added. The distinction depends on the system chosen. Tension between two carts is internal to the pair but external to each cart individually.
:::

::grafico{assi=0 uguale=1 poligoni="-0.6,-0.4 0.6,-0.4 0.6,0.4 -0.6,0.4" segmenti="-2,-0.4,2,-0.4" vettori="0,0,0,1.5,N;0,0,0,-1.5,P;0,0,1.8,0,F" xmin=-2.7 xmax=2.7 ymin=-2 ymax=2 titolo="The book's diagram shows only forces acting on the book"}

## Newton's first law

:::teorema{#inerzia titolo="Law of inertia"}
A frame is **inertial** if bodies with zero net force maintain a constant velocity vector. Rest is the special case $v=0$. In a laboratory, Earth's frame can often be treated as approximately inertial for short motions. In an accelerating train carriage, however, a free puck can move relative to the carriage even with zero horizontal net force.

The law distinguishes continuation of motion from a change in it. On an ideal smooth horizontal surface, weight and the normal force cancel, and a moving puck keeps uniform straight-line motion when a push ends. In a real experiment it can slow because of friction. Slowing shows a resultant opposite to velocity, which can be checked by measuring the slope of the velocity–time graph.

A bend taken at constant speed requires a resultant because the velocity direction changes. To decide whether the motion is inertial, consider both the magnitude and the direction of velocity.
:::

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

::grafico{f="4*x;8*x" punti="3,12,pieno;3,24,pieno" xmin=0 xmax=5 ymin=0 ymax=38 nomi="a,F" titolo="At equal acceleration the required force increases with mass"}

## Newton's third law

:::teorema{#azione-reazione titolo="Mutual forces between two bodies"}
If $A$ exerts force $\vec F_{A\to B}$ on $B$, then $B$ exerts $\vec F_{B\to A}=-\vec F_{A\to B}$ on $A$. The two actions are simultaneous, equal in magnitude and opposite in direction, and belong to diagrams of different bodies. To decide whether two forces make a pair, identify the interacting bodies as well as comparing magnitude and direction.

On a book at rest, weight and the normal force may be equal and opposite. The reciprocal force to the book's weight is its gravitational pull on Earth. The reciprocal of the normal force is the book pressing on the table. For a truck and a car in contact during a collision, their contact forces have equal magnitude. If the truck is more massive and those forces dominate their respective resultants, the truck's acceleration is smaller in magnitude. Equal mutual forces are consistent with very different responses.
:::

::grafico{assi=0 uguale=1 poligoni="-2,-0.5 -1,-0.5 -1,0.5 -2,0.5;1,-0.5 2,-0.5 2,0.5 1,0.5" vettori="-1.5,0,-0.2,0,F_BA;1.5,0,0.2,0,F_AB" xmin=-2.5 xmax=2.5 ymin=-1 ymax=1 titolo="The mutual forces are drawn on different bodies"}

## Connected bodies

:::osservazione{#sistemi-collegati titolo="Tension and common acceleration"}
An ideal taut inextensible string has fixed length and therefore links the displacements of its ends. For two carts on one track, it makes their accelerations equal. If the ends move on opposite sides of a pulley, their spatial directions may differ. Tension has the same magnitude in both branches for a massless string and massless frictionless pulley.

On a smooth horizontal plane, a force $F$ pulls cart $m_1$ connected to $m_2$. For the pair, $a=F/(m_1+m_2)$. Isolating the second cart, its only horizontal force is tension $T$, so $T=m_2a$. For $m_1=2\,\mathrm{kg}$, $m_2=3\,\mathrm{kg}$ and $F=10\,\mathrm{N}$, $a=2\,\mathrm{m/s^2}$ and $T=6\,\mathrm N$. The pulled cart has resultant $10-6=4\,\mathrm N$ and the same acceleration. Applying $F$ to the second cart keeps the common acceleration but changes which body the tension pulls.

For two hanging masses in an Atwood machine with $m_2>m_1$, take the motion on each branch as positive. The equations are
$$
m_2g-T=m_2a,\qquad T-m_1g=m_1a.
$$
Adding them gives $a=g(m_2-m_1)/(m_1+m_2)$. Recover tension using either equation. It is greater than the weight of the rising mass and below the weight of the descending mass. If the calculation gives the reverse, check the sign of $a$ in each separate diagram.
:::

::grafico{assi=0 uguale=1 poligoni="-1.8,0 -0.8,0 -0.8,0.8 -1.8,0.8;0.8,0 1.8,0 1.8,0.8 0.8,0.8" segmenti="-2.5,0,3.4,0;-0.8,0.4,0.8,0.4" vettori="1.8,0.4,3.0,0.4,F" etichette="-1.3,0.5,m_2;1.3,0.5,m_1" xmin=-2.6 xmax=3.4 ymin=-0.5 ymax=1.3 titolo="The connecting tension is internal to the two-cart system"}

## Vertical and circular applications

:::teorema{#dinamica-circolare titolo="Apparent weight and radial force"}
Inside a lift, while the person remains on the scale and weight and the normal force are the vertical forces, take upwards as positive. Then $N-mg=ma$ and $N=m(g+a)$. If the lift slows while rising, $a<0$ and the reading is below weight. If it slows while descending, $a>0$ and the reading is above weight. The acceleration direction matters and may differ from the velocity direction.

For $m=60\,\mathrm{kg}$, $g=10\,\mathrm{m/s^2}$ and downward acceleration $2\,\mathrm{m/s^2}$, the normal force is $480\,\mathrm N$ while weight stays at $600\,\mathrm N$. In free fall $a=-g$ and $N=0$. The floor-contact model cannot have a negative normal force. If the equation required one, the person would have lost contact and the model would need to change.

In circular motion with nonzero speed, the net inward radial force has magnitude $mv^2/r$. Draw the actual forces first and then project them along the radius. On a horizontal bend without skidding, static tyre friction may provide that horizontal force. On a vertical curve, weight and the normal force may contribute with different signs. At the bottom of a dip the centre is above, so $N-mg=mv^2/r$. At the crest of an analogous hill the centre is below, so $mg-N=mv^2/r$ while contact lasts.
:::

::grafico{f="60*(10+x)" punti="-10,0,pieno;-2,480,pieno;0,600,pieno" xmin=-10 xmax=4 ymin=0 ymax=860 nomi="a,N" titolo="The scale reads 480 N at acceleration −2 m/s²"}
