---
titolo: Newton's laws of motion
sommario: How to isolate an object, draw its free-body diagram and find acceleration on a surface or around a bend.
---

## Forces and resultant

:::definizione{#risultante titolo="The sum of forces"}
A **force** is a push or a pull that one object exerts on another, like a hand pushing a cart or Earth attracting a stone. Every force therefore arises from an **interaction** between two objects. Force is a **vector**, that is, it is drawn as an arrow with a **magnitude** (its numerical value), a **direction** (the line it lies on) and a **sense** (shown by the arrowhead). It is measured in **newtons**, symbol $\mathrm N$, the unit of the International System (SI). The letter with the arrow, $\vec F$, denotes the vector; the letter without the arrow, $F$, denotes the magnitude.

This chapter studies the **translation** of an object, that is, motion in which all its parts move in the same way, without rotating. To study it, the object is chosen first. Then only the forces that other objects exert on the chosen one are drawn. This drawing is the **free-body diagram**. For a book on a table it contains the weight (the force of Earth on the book) and the force of the table on the book, while the force of the book on the table belongs to the table's diagram.

The **net force** $\vec F_R$ (the subscript $R$ stands for "resultant") is the vector sum of the arrows in the diagram, that is, the single force equivalent to all of them. To calculate it, two perpendicular axes $x$ and $y$ are chosen, each with a positive sense. The **component** of a force along an axis is its projection on the axis, with sign $+$ if the force points in the positive sense and $-$ in the opposite case. Components along the two axes can be added separately.
$$
F_{Rx}=\sum_j F_{jx},\qquad F_{Ry}=\sum_j F_{jy}.
$$
The symbol $\sum$ (capital sigma) denotes a sum and the index $j$ numbers the forces, so $F_{Rx}=F_{1x}+F_{2x}+\dots$

The sign of each component depends on the sense chosen for the axis. A force to the right and one to the left on the same line therefore enter the sum with opposite signs. On a horizontal table, weight and the **normal force**, that is, the force of the table perpendicular to its surface, are vertical and contribute only along the vertical axis. Two horizontal pushes contribute only along the other axis. A slanting force contributes along both axes.

The magnitude of the net force is found with Pythagoras' theorem, because the two components are the legs of a right triangle whose hypotenuse is the net force. With $F_{Rx}=6\,\mathrm N$ and $F_{Ry}=8\,\mathrm N$ we get $F_R=\sqrt{6^2+8^2}\,\mathrm N=10\,\mathrm N$.
:::

:::esempio{titolo="A cart pushed from two sides"}
With rightward taken as positive, the pushes are $+9\,\mathrm{N}$ and $-5\,\mathrm{N}$. The horizontal component of the net force is $(9-5)\,\mathrm N=4\,\mathrm{N}$, which is positive, so it points to the right. Vertically, the weight $P$ and the normal force $N$ act. If the cart stays on the horizontal surface and no other vertical force acts, the normal force balances the weight. The vector sum therefore has only the horizontal component of $4\,\mathrm{N}$.

::grafico{assi=0 uguale=1 poligoni="-1,-0.5 1,-0.5 1,0.5 -1,0.5" linee="-3,-0.55 3,-0.55" vettori="0,0,2.7,0,F₁;0,0,-1.5,0,F₂;0,0,0,1.2,N;0,0,0,-1.2,P" xmin=-3.2 xmax=3.4 ymin=-1.7 ymax=1.7 titolo="Free-body diagram of the cart. The pushes are opposite, as are weight and normal force."}
:::

:::esempio{titolo="Cancelling just one component"}
A sled on horizontal ice experiences a $12\,\mathrm N$ push to the east. A second rope pulls it in a direction between north and west, closer to north. With east and north positive in the horizontal plane, the rope's components are $(-3;4)\,\mathrm N$. The notation $(a;b)$ gives the component $a$ towards the east and the component $b$ towards the north, so the rope pulls $3\,\mathrm N$ towards the west and $4\,\mathrm N$ towards the north. Weight and the normal force balance along the vertical axis. Adding the components along the two horizontal axes gives

$$
\vec F_R=\bigl(12-3;0+4\bigr)\,\mathrm N=(9;4)\,\mathrm N.
$$

The rope reduces the eastward component from $12\,\mathrm N$ to $9\,\mathrm N$ and introduces a northward component of $4\,\mathrm N$. For a net force pointing due east, a $4\,\mathrm N$ pull towards the south is added, with components $(0;-4)\,\mathrm N$, which cancels the northward component. This leaves $9\,\mathrm N$ along the east-west axis. If only the sense of that axis were reversed, the component would become $-9\,\mathrm N$ and the force would still point east, because the axis has changed and the force has not. For this reason, the positive sense of the axis is stated together with every component of a force or of an acceleration.
:::

## Newton's first law

:::teorema{#inerzia titolo="Balance and constant velocity"}
In an **inertial reference frame**, an object with zero net force keeps its velocity vector. If it is at rest, it remains at rest. If it is moving, it continues along a straight line at constant velocity, that is, in **uniform straight-line motion**.

A **reference frame** is the object, with its axes, relative to which positions and velocities are measured, for example the classroom floor; it is called **inertial** if this law holds in it. Keeping the velocity vector means keeping its magnitude, direction and sense. The magnitude of the velocity is called **speed**.

A laboratory fixed to the ground can be treated as inertial in many brief experiments. Axes attached to a vehicle that speeds up, brakes or turns are not inertial. On a smooth flatbed accelerating to the right at $2\,\mathrm{m/s^2}$, for example, a puck with zero net force has acceleration $(0-2)\,\mathrm{m/s^2}=-2\,\mathrm{m/s^2}$ relative to the flatbed. The laws in this chapter apply in the chosen inertial frame, usually the ground.
:::

:::esempio{titolo="Rest and translation with zero net force"}
A book at rest on a table experiences a downward force from Earth and an upward force from the table. If their magnitudes agree, the sum is zero and the velocity stays zero. On a horizontal track with negligible friction, a cart already moving likewise has zero net force, because weight and the normal force balance and no force acts horizontally. The cart then continues with the velocity it has. In both cases the net force is zero and the velocities are different, so zero net force only establishes that the velocity does not change.

If the cart passes a sensor at $2\,\mathrm{m/s}$ and the net force remains zero, in the next $3\,\mathrm s$ it covers $(2)(3)\,\mathrm m=6\,\mathrm m$. On the graph of velocity against time, the cart is the line $v=2\,\mathrm{m/s}$ (point $A$ at $3\,\mathrm s$) and the book the line $v=0$ (point $B$). The **slope** of a line is the increase in the vertical quantity divided by the increase in the horizontal one; on this graph it is the acceleration, so it is zero for both lines. The graph of position, by contrast, would have slope $2\,\mathrm{m/s}$, because there the slope is the velocity. To recognise uniform motion, one therefore checks which quantity is on the vertical axis. The height of the velocity graph shows how fast the cart moves, while the slope shows the acceleration.

::grafico{f="2;0" punti="3,2,pieno,A;3,0,pieno,B" xmin=0 xmax=4 ymin=-1 ymax=4 nomi="t (s),v (m/s)" legenda="\text{cart};\text{book}" titolo="The cart and the book have different velocities. Both lines have zero slope."}
:::

:::attenzione
A constant force in the direction of motion changes the velocity if the other forces do not balance it. On a real road a bicycle experiences resistances opposing the motion, such as air resistance. At constant velocity the net force is zero, so the push has the same magnitude as the resistances. In the model without resistances, uniform motion continues even without a push.
:::

## Newton's second law

:::teorema{#newton titolo="Net force, mass and acceleration"}
**Acceleration** is the change in velocity divided by the time in which it occurs: $3\,\mathrm{m/s^2}$ means that the velocity changes by $3\,\mathrm{m/s}$ every second. In an inertial frame, for an object of constant mass $m$, net force and acceleration are related by
$$
\vec F_R=m\vec a,\qquad F_{Rx}=ma_x,\qquad F_{Ry}=ma_y.
$$
The relation holds at every instant, and from it we obtain $a=\dfrac{F_R}{m}$ and $m=\dfrac{F_R}{a}$. Since $m$ is positive, $\vec a$ has the same direction and sense as $\vec F_R$, because multiplying a vector by a positive number changes only its magnitude. A larger mass needs a larger net force for the same acceleration. The equation also gives the unit $1\,\mathrm{N}=1\,\mathrm{kg\,m/s^2}$: one newton is the net force that gives one kilogram an acceleration of one metre per second squared.
:::

:::esempio{titolo="Acceleration from a signed net force"}
A $2\,\mathrm{kg}$ cart experiences a horizontal net force of $-6\,\mathrm{N}$, with right positive. Its acceleration is
$$
a_x=\frac{-6}{2}\,\mathrm{m/s^2}=-3\,\mathrm{m/s^2},
$$
so it points to the left. If the cart initially moves to the right, the velocity is positive and the acceleration negative, so at first the cart slows down. If instead it moves to the left, velocity and acceleration have the same sign, so the speed increases. The law determines the acceleration. Knowing how the speed changes also requires the initial velocity.

On the graph of net force against acceleration, the line $F=2a$ passes through the origin with slope equal to the mass; $A$ is this example, $B$ a net force of $4\,\mathrm N$ with $a=2\,\mathrm{m/s^2}$.

::grafico{f="2*x" punti="-3,-6,pieno,A;2,4,pieno,B" xmin=-4 xmax=4 ymin=-9 ymax=9 nomi="a (m/s²),F (N)" titolo="For a mass of 2 kg, net force divided by acceleration is constant."}
:::

:::osservazione{titolo="Net force and the sensor reading"}
A motor pulls a $2\,\mathrm{kg}$ cart and a force sensor measures only the motor's pull. A pull of $6\,\mathrm N$ gives $a=2\,\mathrm{m/s^2}$, and a pull of $10\,\mathrm N$ gives $a=4\,\mathrm{m/s^2}$. By the second law the net force is $(2)(2)\,\mathrm N=4\,\mathrm N$ in the first trial and $(2)(4)\,\mathrm N=8\,\mathrm N$ in the second. In both, the measured force exceeds the net force by $2\,\mathrm N$, so a constant $2\,\mathrm N$ resistance opposing the pull also acts on the cart. The **intercept** of a line is the value at which the line meets the vertical axis. On the graph of pull against acceleration the intercept is $2\,\mathrm N$ and represents the resistance. On the graph of net force against acceleration the intercept is zero.
:::

:::esempio{titolo="A scale reading in a lift"}
A person with a mass of $60\,\mathrm{kg}$ rides a lift upwards. Shortly before stopping the lift slows down, so the acceleration, of magnitude $0.5\,\mathrm{m/s^2}$, is opposite to the velocity and points downwards. Taking upwards as positive and using $g=10\,\mathrm{m/s^2}$, the weight has magnitude $600\,\mathrm N$. The scale exerts an upward normal force $N$ and displays its magnitude, equal to that of the force with which the person presses on it (third law, next section). The vertical force balance is

$$
\begin{aligned}
N-(60)(10)\,\mathrm N&=(60)(-0.5)\,\mathrm N,\\[6pt]
N-600\,\mathrm N&=-30\,\mathrm N,\\[6pt]
N&=(600-30)\,\mathrm N=570\,\mathrm N.
\end{aligned}
$$

The scale reading, in newtons, is therefore $570\,\mathrm N$. The gravitational weight stays at $600\,\mathrm N$. The difference of $30\,\mathrm N$ is the magnitude of the net force, directed downwards while the lift slows. Rising at constant velocity would instead give $N=600\,\mathrm N$, as would a lift at rest, because in both cases the acceleration is zero and therefore the net force is zero.

::grafico{assi=0 uguale=1 poligoni="-0.35,-0.22 0.35,-0.22 0.35,0.55 -0.35,0.55" linee="-1,-0.25 1,-0.25" vettori="0,0,0,1.9,N;0,0,0,-2,P" xmin=-1.7 xmax=1.7 ymin=-2.5 ymax=2.5 titolo="The scale exerts an upward normal force of 570 N, and the person's weight is 600 N downwards."}
:::

## Newton's third law

:::teorema{#azione-reazione titolo="The two forces of an interaction"}
If $A$ exerts a force on $B$, then $B$ exerts a force on $A$ of equal magnitude and opposite direction.
$$
\vec F_{A\to B}=-\vec F_{B\to A}.
$$
The symbol $\vec F_{A\to B}$ denotes the force of $A$ on $B$; the minus sign denotes the opposite vector. The two forces are of the same type (both contact forces, or both gravitational), they are simultaneous, that is, they exist at the same instant, and they act on different objects. Therefore a diagram for one object contains just one member of the pair.

A **system** is a set of objects studied together. **Internal** forces are exchanged between objects of the system, **external** forces come from objects outside it. If the system consists of both objects, the two forces of the pair are internal and sum to zero, so the net force on the system is the sum of the external forces alone.
:::

:::esempio{titolo="Two skaters pushing apart"}
Two skaters of $40\,\mathrm{kg}$ and $60\,\mathrm{kg}$ push one another on ice with negligible friction. If the horizontal contact force is $60\,\mathrm{N}$, by the third law each skater receives a force of that magnitude, in opposite senses. The accelerations are opposite and their magnitudes are
$$
a_{40}=\frac{60}{40}\,\mathrm{m/s^2}=1.5\,\mathrm{m/s^2},\qquad a_{60}=\frac{60}{60}\,\mathrm{m/s^2}=1\,\mathrm{m/s^2}.
$$
The force is the same and the masses are different, so the skater with the smaller mass has the larger acceleration.

::grafico{assi=0 uguale=1 poligoni="-2,-0.55 -1,-0.55 -1,0.55 -2,0.55;1,-0.55 2,-0.55 2,0.55 1,0.55" vettori="-1.5,0,-3.1,0,F;1.5,0,3.1,0,F" xmin=-3.7 xmax=3.7 ymin=-1.6 ymax=1.6 titolo="The two horizontal force arrows belong to different objects."}
:::

:::esempio{titolo="Two carts connected by a string"}
Carts $A$ and $B$, of masses $2\,\mathrm{kg}$ and $4\,\mathrm{kg}$, are joined by a taut ideal string. An **ideal string** has negligible mass and does not stretch. The string pulls the two carts with forces of the same magnitude $T$, called the **tension**. Cart $B$, ahead of $A$, is pulled to the right with $24\,\mathrm N$. Horizontal resistance is negligible. The carts have the same acceleration because the string keeps them the same distance apart.

In the system of the two carts, of mass $6\,\mathrm{kg}$, the tension is internal and its two contributions cancel, so only the towing force remains. On cart $A$ alone, the only horizontal force is the tension to the right. The balance for the system and the balance for cart $A$ give

$$
\begin{aligned}
a&=\frac{24}{2+4}\,\mathrm{m/s^2}=4\,\mathrm{m/s^2},\\[6pt]
T&=(2)(4)\,\mathrm N=8\,\mathrm N.
\end{aligned}
$$

As a check, the string pulls $B$ to the left. The net force on $B$ is therefore $24\,\mathrm N-8\,\mathrm N=16\,\mathrm N$, equal to $(4)(4)\,\mathrm N$, that is, the mass of $B$ times the common acceleration. The system of the two carts gives the acceleration without knowing the tension, and cart $A$ alone then gives the tension.

::grafico{assi=0 uguale=1 poligoni="-2.6,-0.45 -1.4,-0.45 -1.4,0.45 -2.6,0.45;0.6,-0.45 1.8,-0.45 1.8,0.45 0.6,0.45" linee="-1.4,0 0.6,0" vettori="-2,0,-1.2,0,T;1.2,0,0.4,0,T;1.2,0,3.6,0,24 N" etichette="-2.2,0.28,A;1,0.28,B" xmin=-3 xmax=4.2 ymin=-1.2 ymax=1.2 titolo="The string pulls the carts towards each other. The 24 N towing force acts on B alone."}
:::

:::attenzione
A book's weight and the normal force from the table may have equal magnitudes and opposite directions. They are not a third-law pair, however, because both act on the book. The partner of the weight is the gravitational force the book exerts on Earth, acting on Earth. The partner of the normal force is the contact force the book exerts on the table, acting on the table.

For example, if the book weighs $20\,\mathrm N$ and a hand presses it down with $5\,\mathrm N$, the normal force is $25\,\mathrm N$ and is no longer equal to the weight. The magnitudes of the two forces of a third-law pair, by contrast, are always equal.
:::

## Weight, spring force and friction

:::definizione{#forze titolo="Models of common forces"}
**Weight** is the force with which Earth attracts an object. Near the surface its magnitude is $P=mg$ and its direction is vertically down. Here $g$ is the **acceleration due to gravity**, that is, the acceleration of an object acted on by its weight alone; it depends on the location, and the value given in the problem is used, often $9.81\,\mathrm{m/s^2}$ near the ground or the rounded value $10\,\mathrm{m/s^2}$. Mass is measured in kilograms and describes the object's **inertia**, that is, how much it resists changes in its velocity; it is the same everywhere. Weight is measured in newtons and depends on $g$. An object of $2\,\mathrm{kg}$ weighs $(2)(9.81)\,\mathrm N=19.62\,\mathrm N$ where $g=9.81\,\mathrm{m/s^2}$ and $(2)(1.6)\,\mathrm N=3.2\,\mathrm N$ where $g=1.6\,\mathrm{m/s^2}$, as on the Moon. From the weight formula we obtain $m=\dfrac{P}{g}$ and $g=\dfrac{P}{m}$.

An **ideal spring** is a spring of negligible mass. Its **natural length** is the length it has when no force deforms it. The **deformation** $x$ is the current length minus the natural length, so $x>0$ for an extension and $x<0$ for a compression. A spring of natural length $18\,\mathrm{cm}$ compressed to $14\,\mathrm{cm}$ has $x=(0.14-0.18)\,\mathrm m=-0.04\,\mathrm m$. In the **linear range**, that is, for small enough deformations, the spring exerts the force given by **Hooke's law**
$$
F_e=-kx.
$$
The letter $k$ is the **spring constant**, or **stiffness**, in $\mathrm{N/m}$: with $k=160\,\mathrm{N/m}$ the spring exerts $1.6\,\mathrm N$ for every centimetre of deformation. The magnitude $k\lvert x\rvert$ is directly proportional to the deformation, and from it we obtain $k=\dfrac{\lvert F_e\rvert}{\lvert x\rvert}$ and $\lvert x\rvert=\dfrac{\lvert F_e\rvert}{k}$. On the graph of $F_e$ against $x$ the law is a line through the origin with slope $-k$.

The minus sign shows that the force is a **restoring** force, that is, opposite to the deformation. With $x>0$ for an extension, the spring pulls towards its natural configuration. With $x<0$ for a compression, it pushes in the positive direction: for the compressed spring above with $k=160\,\mathrm{N/m}$ we get $F_e=-160\cdot(-0.04)\,\mathrm N=+6.4\,\mathrm N$. If several springs act on the same object, their elastic forces add like the other forces in the diagram.
:::

:::osservazione{#attrito titolo="Contact, static and kinetic friction"}
The normal force is the component of the contact force perpendicular to the surface and is written $N$ (in italics, while the newton $\mathrm N$ is upright); the parallel, or tangential, component is **friction**. On a horizontal plane, with no other vertical forces and zero vertical acceleration, $N-mg=0$, so $N=mg$. When an upward pull is added or the incline changes, the sum of perpendicular forces must be recalculated: with an upward pull $T$ we get $N=mg-T$, with a downward push $F$ we get $N=mg+F$.

When the object **slides** on the plane, that is, moves relative to the surface, **kinetic friction** acts. Its magnitude is $\mu_dN$ and its direction is opposite to the relative sliding, that is, to the motion of the object relative to the surface. The number $\mu_d$ (the Greek letter $\mu$ is read "mu") is the **coefficient of kinetic friction**; it depends on the materials and has no unit, because it is the ratio $\dfrac{f_d}{N}$ of two forces.

When the object stays still relative to the plane, **static friction** takes the value that makes the sum of forces parallel to the plane zero, up to the **static limit** $\mu_sN$ ($\mu_s$ is the coefficient of static friction). If a $5\,\mathrm{N}$ push can be balanced and the limit is $12\,\mathrm{N}$, the actual friction is $5\,\mathrm{N}$, opposite to the push. If the push exceeds the limit, the contact cannot keep the object at rest and the object slides. The minimum static coefficient for rest is the required friction divided by the normal force. With $8\,\mathrm N$ required and $N=40\,\mathrm N$ we get $\mu_s\ge\dfrac{8}{40}=0.20$.
:::

:::esempio{titolo="Increasing the push up to the sliding threshold"}
A block at rest is pushed horizontally. Maximum static friction is $12\,\mathrm{N}$. Before sliding, the sum of the horizontal forces is zero, so each increase in the push requires an equal increase in the friction magnitude (line $f=F$ on the graph). At point $S$, the **sliding threshold**, the push is $12\,\mathrm N$ and rest is just possible. With a greater push the block slides and kinetic friction can have a different magnitude. The kinetic coefficient is then needed to determine the acceleration while sliding.

::grafico{linee="0,0 12,12" punti="12,12,pieno,S" xmin=0 xmax=14 ymin=0 ymax=14 nomi="F (N),f (N)" titolo="Up to the threshold, the magnitude of static friction follows the magnitude of the push."}
:::

:::esempio{titolo="From static contact to sliding"}
A $5\,\mathrm{kg}$ block is initially at rest on a horizontal surface. A vertical string pulls it upwards with $10\,\mathrm N$. With $g=10\,\mathrm{m/s^2}$ and zero vertical acceleration, the contact supplies $N=(50-10)\,\mathrm N=40\,\mathrm N$. The coefficients are $\mu_s=0.30$ and $\mu_d=0.20$. The static limit is $0.30\cdot40\,\mathrm N=12\,\mathrm N$. Each rightward horizontal push is compared with this threshold, assuming the block starts from rest.

| Push | Friction magnitude | Rightward acceleration |
|---:|---:|---:|
| $8\,\mathrm N$ | $8\,\mathrm N$ | $0\,\mathrm{m/s^2}$ |
| $12\,\mathrm N$ | $12\,\mathrm N$ | $0\,\mathrm{m/s^2}$ |
| $15\,\mathrm N$ | $8\,\mathrm N$ during sliding | $1.4\,\mathrm{m/s^2}$ |

With $8\,\mathrm N$ and $12\,\mathrm N$ the push does not exceed the threshold, so the block stays at rest and static friction balances it. In the third case, remaining at rest would require $15\,\mathrm N$ of friction, above the threshold, so the block slides. Once the block moves relative to the surface, the magnitude of friction is $0.20\cdot40\,\mathrm N=8\,\mathrm N$, to the left. The balance along the surface gives $a_x=\dfrac{15-8}{5}\,\mathrm{m/s^2}=1.4\,\mathrm{m/s^2}$. Whether the block slides is therefore established before choosing the coefficient.

::grafico{assi=0 uguale=1 poligoni="-0.55,-0.4 0.55,-0.4 0.55,0.42 -0.55,0.42" linee="-1.6,-0.42 1.8,-0.42" vettori="0,0,0,-2,P;0,0,0,1.6,N;0.4,0,0.4,0.4;0,0,0.6,0;0,0,-0.32,0" etichette="0.48,0.54,T 10 N;0.7,0.03,F 15 N;-0.74,0.15,f 8 N" xmin=-2 xmax=2 ymin=-2.4 ymax=2.1 titolo="With a 15 N push, the vertical pull reduces the normal force and kinetic friction acts to the left."}
:::

## Inclined planes and circular motion

:::teorema{#applicazioni titolo="Choosing axes along the motion"}
An **inclined plane** is a flat surface that makes an angle $\alpha$ (the Greek letter "alpha") with the horizontal. The axis parallel to the plane is convenient for sliding and the other axis is perpendicular to the surface. With this choice the normal force lies entirely on the perpendicular axis and the acceleration entirely on the parallel one, because the object stays on the plane.

The weight is resolved along the two axes. In a right triangle the **sine** of an acute angle is the opposite leg divided by the hypotenuse, and the **cosine** is the adjacent leg divided by the hypotenuse. The weight is the hypotenuse of the triangle formed by its two components, and the angle between the weight and the axis perpendicular to the plane equals $\alpha$. Therefore the weight has component $mg\sin\alpha$ downhill and component $mg\cos\alpha$ into the plane.

With no other perpendicular force and maintained contact, the sum of perpendicular forces is zero, that is, $N-mg\cos\alpha=0$, so $N=mg\cos\alpha$. The plane is **smooth** if friction is negligible. If the plane is smooth, only the weight component acts along the plane, and the downhill acceleration is
$$
a=\frac{mg\sin\alpha}{m}=g\sin\alpha.
$$
Mass cancels because the weight and the inertia belong to the same object, so objects of different mass have the same acceleration on the same smooth plane. For $\alpha=0$ we have $\sin0^\circ=0$, so the acceleration is zero along the horizontal plane. As the angle increases the sine approaches $1$, so the acceleration approaches $g$ in the vertical limit, while the weight component along the plane approaches the full weight.
:::

:::esempio{titolo="A smooth thirty-degree slope"}
A $4\,\mathrm{kg}$ block slides on a smooth $30^\circ$ slope, and $g=10\,\mathrm{m/s^2}$ is assumed. Its weight is $(4)(10)\,\mathrm N=40\,\mathrm{N}$. Since $\sin30^\circ=\dfrac12$, the component along the slope is $40\sin30^\circ\,\mathrm{N}=20\,\mathrm{N}$. The normal force balances the component perpendicular to the plane, which is $40\cos30^\circ\,\mathrm N\simeq34.6\,\mathrm N$. Applying the second law in the downhill direction gives $a=\dfrac{20}{4}\,\mathrm{m/s^2}=5\,\mathrm{m/s^2}$. In the figure the normal force $N$ is perpendicular to the plane and $P_\parallel$ is the component of the weight along the slope.

::grafico{assi=0 uguale=1 linee="-3,-1.73 3,1.73" punti="0,0,pieno,B" vettori="0,0,0,-2,P;0,0,-0.866025,1.5,N;0,0,-0.866025,-0.5" etichette="-1.35,-0.5,P∥" xmin=-3.7 xmax=3.7 ymin=-2.5 ymax=2.3 titolo="N is perpendicular to the surface. P∥ is the component of weight along the slope."}
:::

:::esempio{titolo="A horizontal push on a smooth ramp"}
A ramp has height, base and sloping side in the ratio $3:4:5$, that is, the height measures $3$ parts, the base $4$ and the sloping side $5$. The sloping side is the hypotenuse, so $\sin\alpha=\dfrac35$ and $\cos\alpha=\dfrac45$. A $5\,\mathrm{kg}$ block is pushed horizontally towards the higher side with a force of $25\,\mathrm N$. With $g=10\,\mathrm{m/s^2}$, the weight is $50\,\mathrm N$. The push is horizontal and makes with the plane the same angle $\alpha$ as the base does, so its component parallel to the plane is found with the cosine. The weight is vertical and its parallel component is found with the sine, as in the previous block. The parallel components have magnitudes $25\cdot\dfrac45\,\mathrm N=20\,\mathrm N$ uphill for the push and $50\cdot\dfrac35\,\mathrm N=30\,\mathrm N$ downhill for the weight.

Taking uphill as positive gives $a_x=\dfrac{20-30}{5}\,\mathrm{m/s^2}=-2\,\mathrm{m/s^2}$, so the acceleration points downhill. The push also has a component perpendicular to the plane, directed into the plane, of magnitude $25\cdot\dfrac35\,\mathrm N=15\,\mathrm N$. The weight also presses into the plane with $50\cdot\dfrac45\,\mathrm N=40\,\mathrm N$. For the block to stay on the ramp the sum of the perpendicular forces must be zero, so $N=(40+15)\,\mathrm N=55\,\mathrm N$ is required. With a push of the same magnitude parallel to the ramp, by contrast, the perpendicular contribution of the push would be zero and the normal force would be $40\,\mathrm N$. The two forces have the same magnitude and different projections.

::grafico{assi=0 uguale=1 linee="-3,-2.25 3,2.25" vettori="0,0,0,-2.5,P;0,0,1.25,0,F;0,0,-1.65,2.2,N" punti="0,0,pieno" xmin=-3.5 xmax=3.5 ymin=-3 ymax=2.8 titolo="Weight acts vertically and the push is horizontal. Neither force is parallel to the slope."}
:::

:::osservazione{#risultante-radiale titolo="Net force that keeps the object turning"}
An object moving on a circle of radius $r$ at constant speed $v$ is in **uniform circular motion**. The velocity has constant magnitude and keeps changing direction, because at every point it is tangent to the circle. For this reason the object has an acceleration, called **centripetal acceleration**, equal to $\dfrac{v^2}{r}$ and pointing towards the centre. By the second law, the sum of the force components along the radius, taken positive towards the centre, is therefore
$$
F_R=m\frac{v^2}{r}.
$$
Since $v$ is squared, at fixed mass and radius a doubled speed requires a net force four times larger. At fixed speed, a smaller radius requires a larger net force.

The radial net force can come from road friction, string tension or a combination of forces. A diagram shows the actual interactions, that is, the forces that other objects exert on the object. The word *centripetal* means "directed towards the centre" and specifies the sense of the required net force. If the radial net force disappears, for example because the string breaks, by the first law the object continues in a straight line along the tangent.
:::

:::esempio{titolo="Turning on a horizontal plane"}
A small object of $1\,\mathrm{kg}$ moves on a circle of radius $2\,\mathrm{m}$ at $4\,\mathrm{m/s}$. Weight and normal force balance vertically. The required horizontal force is $1\cdot\dfrac{4^2}{2}\,\mathrm{N}=8\,\mathrm{N}$, towards the centre. The object rests on a rotating disk and moves **with the disk**, that is, it turns with it without sliding. The object is at rest relative to the disk, so the force towards the centre is static friction. If the limit of this friction is below $8\,\mathrm{N}$, the object cannot stay fixed to the disk at that radius and speed.

With $\mu_s=0.5$ and $g=10\,\mathrm{m/s^2}$, the normal force is $(1)(10)\,\mathrm N=10\,\mathrm N$ and the limit at that contact is $0.5\cdot10\,\mathrm N=5\,\mathrm N$. The highest speed at which the object moves with the disk is the one at which the required force equals the limit.
$$
\begin{aligned}
1\cdot\frac{v^2}{2}&=5,\\[6pt]
v^2&=10,\\[6pt]
v&=\sqrt{10}\,\mathrm{m/s}\simeq3.16\,\mathrm{m/s}.
\end{aligned}
$$
On the graph the curve of the required force grows with the square of the speed. The point $S$ where it meets the horizontal limit line separates the speeds the contact can sustain from those at which the object starts to slide; at $A$ the required $8\,\mathrm N$ exceeds the limit.

::grafico{f="x^2/2;5" punti="3.16227766,5,pieno;4,8,pieno" etichette="2.96,5.46,S;4.11,7.83,A" xmin=0 xmax=4.5 ymin=0 ymax=11 nomi="v (m/s),F (N)" legenda="\text{required net force};\text{static-friction limit}" titolo="The force required for the turn meets the static-friction limit at S. At A the speed is 4 m/s and the required force exceeds the limit."}
:::
