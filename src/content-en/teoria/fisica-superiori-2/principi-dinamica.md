---
titolo: Newton's laws of motion
sommario: How to isolate an object, draw its free-body diagram and find acceleration on a surface or around a bend.
---

## Forces and resultant

:::definizione{#risultante titolo="The sum of forces"}
A **force** describes an interaction between objects. It is represented by a vector and measured in newtons. To study translation, first choose the object. Draw only the forces exerted on it by other objects. This representation is a free-body diagram. The **net force** $\vec F_R$ is the vector sum of the arrows. Components along two perpendicular axes can be added separately.
$$
F_{Rx}=\sum_j F_{jx},\qquad F_{Ry}=\sum_j F_{jy}.
$$
The sign of each component depends on the axis orientation. A force to the right and one to the left on the same line therefore enter the sum with opposite signs. On a horizontal table, weight and normal force contribute along the vertical axis. Two horizontal pushes contribute along the other axis.
:::

:::esempio{titolo="A cart pushed from two sides"}
Choose rightward as positive. The pushes are $+9\,\mathrm{N}$ and $-5\,\mathrm{N}$. The horizontal net force is $4\,\mathrm{N}$ to the right. If the cart stays on the horizontal surface and no other vertical force acts, the normal force balances weight. The vector sum therefore has only the horizontal component of $4\,\mathrm{N}$.

::grafico{assi=0 uguale=1 poligoni="-1,-0.5 1,-0.5 1,0.5 -1,0.5" linee="-3,-0.55 3,-0.55" vettori="0,0,2.7,0,F₁;0,0,-1.5,0,F₂;0,0,0,1.2,N;0,0,0,-1.2,P" xmin=-3.2 xmax=3.4 ymin=-1.7 ymax=1.7 titolo="Free-body diagram of the cart. The pushes are opposite, as are weight and normal force."}
:::

:::esempio{titolo="Cancelling just one component"}
A sled on horizontal ice experiences a $12\,\mathrm N$ push to the east. A second rope pulls it towards the northwest. With east and north positive in the horizontal plane, the rope's components are $(-3;4)\,\mathrm N$. Weight and the normal force balance along the vertical axis. Adding along the two horizontal axes gives

$$
\vec F_R=\bigl(12-3;0+4\bigr)\,\mathrm N=(9;4)\,\mathrm N.
$$

The rope reduces the eastward component and introduces a northward component. If the net force must point due east, an additional $4\,\mathrm N$ southward pull can cancel the northward component. This leaves $9\,\mathrm N$ along the east-west axis. Reversing this axis alone would make the numerical component $-9\,\mathrm N$, with the force still pointing physically east. Keep each axis orientation explicit when moving from force to acceleration.
:::

## Newton's first law

:::teorema{#inerzia titolo="Balance and constant velocity"}
In an **inertial reference frame**, an object with zero net force keeps its velocity vector. If it is at rest, it remains at rest. If it is moving, it continues along a straight line at constant velocity. A laboratory fixed to the ground can be treated as inertial in many brief experiments. Axes attached to an accelerating vehicle require other considerations. Apply the laws in this chapter in the chosen inertial frame.
:::

:::esempio{titolo="Rest and translation with zero net force"}
A book at rest on a table experiences a downward force from Earth and an upward force from the table. If their magnitudes agree, the sum is zero and velocity stays zero. A moving cart on a horizontal track with negligible friction likewise has zero net force. It continues with the velocity it already had. In both cases the same net force permits different initial velocities.

If the cart passes a sensor at $2\,\mathrm{m/s}$ and the net force remains zero, over the next $3\,\mathrm s$ it travels $6\,\mathrm m$. Its velocity graph has zero slope. Its position graph would have a slope of $2\,\mathrm{m/s}$. To identify uniform motion, check which quantity is on the vertical axis. The height of the velocity graph gives the cart's rate of travel, and the slope gives its acceleration.

::grafico{f="2;0" punti="3,2,pieno,A;3,0,pieno,B" xmin=0 xmax=4 ymin=-1 ymax=4 nomi="t (s),v (m/s)" legenda="\text{cart};\text{book}" titolo="The cart and the book have different velocities. Both lines have zero slope."}
:::

:::attenzione
A constant force in the direction of motion changes velocity if other forces do not balance it. To keep a bicycle at constant speed on a real road, the push must balance the resistive forces. In a model without resistance, uniform motion continues even without a push.
:::

## Newton's second law

:::teorema{#newton titolo="Net force, mass and acceleration"}
In an inertial frame, for an object of constant mass $m$, net force and acceleration are related by
$$
\vec F_R=m\vec a,\qquad F_{Rx}=ma_x,\qquad F_{Ry}=ma_y.
$$
Since $m$ is positive, $\vec a$ has the same direction and sense as $\vec F_R$. A larger mass needs a larger net force for the same acceleration. The equation gives the unit $1\,\mathrm{N}=1\,\mathrm{kg\,m/s^2}$: one newton accelerates one kilogram by one metre per second squared.
:::

:::esempio{titolo="Acceleration from a signed net force"}
A $2\,\mathrm{kg}$ cart experiences a horizontal net force of $-6\,\mathrm{N}$, with right positive. Its acceleration is $-3\,\mathrm{m/s^2}$. If the cart initially moves to the right, it first slows down. If it moves to the left, its speed increases. The law determines acceleration. Knowing how speed changes also requires the initial velocity.

::grafico{f="2*x" punti="-3,-6,pieno,A;2,4,pieno,B" xmin=-4 xmax=4 ymin=-9 ymax=9 nomi="a (m/s²),F (N)" titolo="For a mass of 2 kg, net force divided by acceleration is constant."}
:::

:::osservazione{titolo="Net force and the sensor reading"}
A sensor measures only the motor's pull on a $2\,\mathrm{kg}$ cart. A pull of $6\,\mathrm N$ gives a reading of $a=2\,\mathrm{m/s^2}$, and a pull of $10\,\mathrm N$ gives $a=4\,\mathrm{m/s^2}$. The net force is $4\,\mathrm N$ in the first trial and $8\,\mathrm N$ in the second. In both, the measured force exceeds the net force by $2\,\mathrm N$. The readings are consistent with a constant $2\,\mathrm N$ resistance opposing the pull. The intercept on a graph of pull against acceleration represents this resistance, while the net force graph has zero intercept.
:::

:::esempio{titolo="A scale reading in a lift"}
A person with a mass of $60\,\mathrm{kg}$ rides a lift upwards. Shortly before the lift stops, its acceleration has magnitude $0.5\,\mathrm{m/s^2}$ and points downwards. Taking upwards as positive and using $g=10\,\mathrm{m/s^2}$ gives a weight of $600\,\mathrm N$. The scale exerts an upward normal force $N$. The vertical force balance is

$$
N-(60)(10)\,\mathrm N=(60)(-0.5)\,\mathrm N.
$$

The scale reads $N=570\,\mathrm N$ in newtons. The gravitational weight stays at $600\,\mathrm N$. The difference of $30\,\mathrm N$ is the magnitude of the net force while the lift slows. At constant upward velocity the reading would be $600\,\mathrm N$, the same as when the lift stays at rest, because the acceleration is zero in both cases.

::grafico{assi=0 uguale=1 poligoni="-0.35,-0.22 0.35,-0.22 0.35,0.55 -0.35,0.55" linee="-1,-0.25 1,-0.25" vettori="0,0,0,1.9,N;0,0,0,-2,P" xmin=-1.7 xmax=1.7 ymin=-2.5 ymax=2.5 titolo="The scale exerts an upward normal force of 570 N, and the person's weight is 600 N downwards."}
:::

## Newton's third law

:::teorema{#azione-reazione titolo="The two forces of an interaction"}
If $A$ exerts a force on $B$, then $B$ exerts a force on $A$ of equal magnitude and opposite direction.
$$
\vec F_{A\to B}=-\vec F_{B\to A}.
$$
The two forces are simultaneous and act on different objects. A diagram for one object contains just one member of the pair. If the system consists of both objects, the two forces are internal and sum to zero across its parts.
:::

:::esempio{titolo="Two skaters pushing apart"}
Two skaters of $40\,\mathrm{kg}$ and $60\,\mathrm{kg}$ push one another on ice with negligible friction. If the horizontal contact force has magnitude $60\,\mathrm{N}$, each skater receives a force of that magnitude. The accelerations are opposite, with respective magnitudes $1.5\,\mathrm{m/s^2}$ and $1\,\mathrm{m/s^2}$. Dividing the same force by different masses explains the different effects of the contact.

::grafico{assi=0 uguale=1 poligoni="-2,-0.55 -1,-0.55 -1,0.55 -2,0.55;1,-0.55 2,-0.55 2,0.55 1,0.55" vettori="-1.5,0,-3.1,0,F;1.5,0,3.1,0,F" xmin=-3.7 xmax=3.7 ymin=-1.6 ymax=1.6 titolo="The two horizontal force arrows belong to different objects."}
:::

:::esempio{titolo="Two carts connected by a string"}
Carts $A$ and $B$, of masses $2\,\mathrm{kg}$ and $4\,\mathrm{kg}$, are joined by a taut ideal string. Cart $B$, ahead of $A$, is pulled to the right with $24\,\mathrm N$. Horizontal resistance is negligible. The carts have the same acceleration because the string keeps them the same distance apart. In the system containing both carts, the string pulls in opposite directions. The balance for the system and the balance for cart $A$ give

$$
\begin{aligned}
a&=\frac{24}{2+4}\,\mathrm{m/s^2}=4\,\mathrm{m/s^2},\\[6pt]
T&=(2)(4)\,\mathrm N=8\,\mathrm N.
\end{aligned}
$$

As a check, the string pulls $B$ to the left. The net force on $B$ is therefore $24\,\mathrm N-8\,\mathrm N=16\,\mathrm N$, consistent with its mass of $4\,\mathrm{kg}$ and the common acceleration. Choosing the system lets us find the acceleration first and then recover the internal tension.

::grafico{assi=0 uguale=1 poligoni="-2.6,-0.45 -1.4,-0.45 -1.4,0.45 -2.6,0.45;0.6,-0.45 1.8,-0.45 1.8,0.45 0.6,0.45" linee="-1.4,0 0.6,0" vettori="-2,0,-1.2,0,T;1.2,0,0.4,0,T;1.2,0,3.6,0,24 N" etichette="-2.2,0.28,A;1,0.28,B" xmin=-3 xmax=4.2 ymin=-1.2 ymax=1.2 titolo="The string pulls the carts towards each other. The 24 N towing force acts on B alone."}
:::

:::attenzione
A book's weight and the normal force from the table may have equal and opposite values. Both act on the book. The partner of the weight is the gravitational force the book exerts on Earth. The partner of the normal force is the contact force the book exerts on the table.
:::

## Weight, spring force and friction

:::definizione{#forze titolo="Models of common forces"}
**Weight** is the force exerted by Earth. Near the surface its magnitude is $P=mg$ and its direction is vertically down. Mass is measured in kilograms and describes the object's inertia. Weight is measured in newtons and depends on $g$. Use the value specified in the problem, often $9.81\,\mathrm{m/s^2}$ near the ground.

An **ideal spring** in its linear range exerts $F_e=-kx$, where $x$ is displacement from natural length and $k$ is the spring constant in $\mathrm{N/m}$. The minus sign gives a restoring force. With $x>0$ for an extension, the spring pulls towards its natural configuration. With $x<0$ for compression, it pushes in the positive direction.
:::

:::osservazione{#attrito titolo="Contact, static and kinetic friction"}
The normal force is the contact-force component perpendicular to the surface. On a horizontal plane, with no other vertical forces and zero vertical acceleration, it equals $N=mg$. When an upwards pull is added or the incline changes, recalculate the sum of perpendicular forces.

When an object slides, **kinetic friction** has magnitude $\mu_dN$ and opposes relative sliding. When the object stays still relative to the surface, **static friction** adjusts up to $\mu_sN$ to prevent sliding. If a $5\,\mathrm{N}$ push can be balanced and the limit is $12\,\mathrm{N}$, the actual friction is $5\,\mathrm{N}$. If the push exceeds the limit, the contact cannot keep the block at rest.
:::

:::esempio{titolo="Increasing the push up to the sliding threshold"}
A block at rest is pushed horizontally. Maximum static friction is $12\,\mathrm{N}$. Before sliding each increase in push requires an equal increase in friction magnitude. At the limit, rest is just possible. With a greater push, kinetic friction can have a different magnitude. The kinetic coefficient is then needed to determine acceleration while sliding.

::grafico{linee="0,0 12,12" punti="12,12,pieno,S" xmin=0 xmax=14 ymin=0 ymax=14 nomi="F (N),f (N)" titolo="Up to the threshold, the magnitude of static friction follows the magnitude of the push."}
:::

:::esempio{titolo="From static contact to sliding"}
A $5\,\mathrm{kg}$ block is initially at rest on a horizontal surface. A vertical string pulls it upwards with $10\,\mathrm N$. With $g=10\,\mathrm{m/s^2}$ and zero vertical acceleration, the contact supplies $N=(50-10)\,\mathrm N=40\,\mathrm N$. The coefficients are $\mu_s=0.30$ and $\mu_d=0.20$. Compare each rightward horizontal push with the $12\,\mathrm N$ threshold, starting with the block at rest in each case.

| Push | Friction magnitude | Rightward acceleration |
|---:|---:|---:|
| $8\,\mathrm N$ | $8\,\mathrm N$ | $0\,\mathrm{m/s^2}$ |
| $12\,\mathrm N$ | $12\,\mathrm N$ | $0\,\mathrm{m/s^2}$ |
| $15\,\mathrm N$ | $8\,\mathrm N$ during sliding | $1.4\,\mathrm{m/s^2}$ |

In the third case, remaining at rest would require $15\,\mathrm N$ of friction, above the threshold. Once the block slides relative to the surface, the magnitude of friction is $0.20\cdot40\,\mathrm N=8\,\mathrm N$. The balance along the surface gives $a_x=\dfrac{15-8}{5}\,\mathrm{m/s^2}=1.4\,\mathrm{m/s^2}$. Establish whether the block slides before choosing the coefficient.

::grafico{assi=0 uguale=1 poligoni="-0.55,-0.4 0.55,-0.4 0.55,0.42 -0.55,0.42" linee="-1.6,-0.42 1.8,-0.42" vettori="0,0,0,-2,P;0,0,0,1.6,N;0.4,0,0.4,0.4;0,0,0.6,0;0,0,-0.32,0" etichette="0.48,0.54,T 10 N;0.7,0.03,F 15 N;-0.74,0.15,f 8 N" xmin=-2 xmax=2 ymin=-2.4 ymax=2.1 titolo="With a 15 N push, the vertical pull reduces the normal force and kinetic friction acts to the left."}
:::

## Inclined planes and circular motion

:::teorema{#applicazioni titolo="Choosing axes along the motion"}
For an object on an inclined plane, choose one axis parallel to the slope for sliding. The other axis is perpendicular to the surface. If the slope makes angle $\alpha$ with the horizontal, weight has component $mg\sin\alpha$ downhill and component $mg\cos\alpha$ into the plane. With no other perpendicular force and maintained contact, $N=mg\cos\alpha$. For a smooth slope, acceleration parallel to the plane downhill is
$$
a=\frac{mg\sin\alpha}{m}=g\sin\alpha.
$$
Mass cancels because the weight and inertia belong to the same object. At $\alpha=0$ there is zero acceleration along the horizontal plane. As the angle increases, the acceleration approaches $g$ in the vertical limit, while the parallel weight component approaches the full weight.
:::

:::esempio{titolo="A smooth thirty-degree slope"}
A $4\,\mathrm{kg}$ block slides on a $30^\circ$ slope with $g=10\,\mathrm{m/s^2}$. Its weight is $40\,\mathrm{N}$. The component along the slope is $40\sin30^\circ\,\mathrm{N}=20\,\mathrm{N}$. The normal force balances the perpendicular component. Apply the second law along the slope to get $\dfrac{20}{4}=5$, in metres per second squared.

::grafico{assi=0 uguale=1 linee="-3,-1.73 3,1.73" punti="0,0,pieno,B" vettori="0,0,0,-2,P;0,0,-0.866025,1.5,N;0,0,-0.866025,-0.5" etichette="-1.35,-0.5,P∥" xmin=-3.7 xmax=3.7 ymin=-2.5 ymax=2.3 titolo="N is perpendicular to the surface. P∥ is the component of weight along the slope."}
:::

:::esempio{titolo="A horizontal push on a smooth ramp"}
A ramp has height, base and sloping side in the ratio $3:4:5$. A $5\,\mathrm{kg}$ block is pushed horizontally towards the higher side with a force of $25\,\mathrm N$. With $g=10\,\mathrm{m/s^2}$, the parallel components have magnitudes $25\cdot\dfrac45\,\mathrm N=20\,\mathrm N$ uphill for the push and $50\cdot\dfrac35\,\mathrm N=30\,\mathrm N$ downhill for weight.

Taking uphill as positive gives $a_x=\dfrac{20-30}{5}\,\mathrm{m/s^2}=-2\,\mathrm{m/s^2}$. The push also has a component into the surface of magnitude $25\cdot\dfrac35\,\mathrm N=15\,\mathrm N$. Staying on the ramp therefore requires $N=(40+15)\,\mathrm N=55\,\mathrm N$. A push of the same magnitude parallel to the ramp would supply no perpendicular component. The two forces have the same magnitude and different projections.

::grafico{assi=0 uguale=1 linee="-3,-2.25 3,2.25" vettori="0,0,0,-2.5,P;0,0,1.25,0,F;0,0,-1.65,2.2,N" punti="0,0,pieno" xmin=-3.5 xmax=3.5 ymin=-3 ymax=2.8 titolo="Weight acts vertically and the push is horizontal. Neither force is parallel to the slope."}
:::

:::osservazione{#risultante-radiale titolo="Net force that keeps the object turning"}
On a circle of radius $r$ at constant speed $v$, the acceleration is $\dfrac{v^2}{r}$ and points inward. Sum the force components in that direction to get $m\dfrac{v^2}{r}$. The radial net force can come from road friction, string tension or a combination of forces. A free-body diagram represents the actual interactions. The word *centripetal* specifies the inward direction of the required net force.
:::

:::esempio{titolo="Turning on a horizontal plane"}
A small object of $1\,\mathrm{kg}$ moves on a circle of radius $2\,\mathrm{m}$ at $4\,\mathrm{m/s}$. Weight and normal force balance vertically. The required horizontal force is $1\cdot\dfrac{4^2}{2}\,\mathrm{N}=8\,\mathrm{N}$ inward. If the only inward force is static friction with a limit below $8\,\mathrm{N}$, the object cannot stay fixed to a rotating disk at that radius and speed.

With $\mu_s=0.5$ and $g=10\,\mathrm{m/s^2}$, the limit at that contact is $5\,\mathrm N$. The highest speed at which the body can move with the disk satisfies $\dfrac{v^2}{2}=5$ and equals $\sqrt{10}\,\mathrm{m/s}$, about $3.16\,\mathrm{m/s}$. The required force on the graph grows with the square of speed. Where the curve meets the horizontal limit line, it separates the speeds the contact can sustain from those at which the body starts to slide.

::grafico{f="x^2/2;5" punti="3.16227766,5,pieno;4,8,pieno" etichette="2.96,5.46,S;4.11,7.83,A" xmin=0 xmax=4.5 ymin=0 ymax=11 nomi="v (m/s),F (N)" legenda="\text{required net force};\text{static-friction limit}" titolo="The force required for the turn meets the static-friction limit at S. At A the speed is 4 m/s and the required force exceeds the limit."}
:::
