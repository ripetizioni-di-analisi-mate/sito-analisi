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

::grafico{assi=0 uguale=1 poligoni="-1,-0.5 1,-0.5 1,0.5 -1,0.5" linee="-3,-0.55 3,-0.55" vettori="0,0,2.7,0,F₁;0,0,-1.5,0,F₂;0,0,0,1.2,N;0,0,0,-1.2,W" xmin=-3.2 xmax=3.4 ymin=-1.7 ymax=1.7 titolo="Free-body diagram of the cart. The pushes are opposite, as are weight and normal force."}
:::

## Newton's first law

:::teorema{#inerzia titolo="Balance and constant velocity"}
In an **inertial reference frame**, an object with zero net force keeps its velocity vector. If it is at rest, it remains at rest. If it is moving, it continues along a straight line at constant velocity. A laboratory fixed to the ground can be treated as inertial in many brief experiments. Axes attached to an accelerating vehicle require other considerations. Apply the laws in this chapter in the chosen inertial frame.
:::

:::esempio{titolo="Rest and translation with zero net force"}
A book at rest on a table experiences a downward force from Earth and an upward force from the table. If their magnitudes agree, the sum is zero and velocity stays zero. A moving cart on a horizontal track with negligible friction likewise has zero net force. It continues with the velocity it already had. In both cases the same net force permits different initial velocities.
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

::grafico{f="x" punti="0,0,pieno,O;12,12,pieno,S" xmin=0 xmax=12 ymin=0 ymax=13 nomi="F (N),f (N)" titolo="Up to the threshold, the magnitude of static friction follows the magnitude of the push."}
:::

## Inclined planes and circular motion

:::teorema{#applicazioni titolo="Choosing axes along the motion"}
For an object on an inclined plane, choose one axis parallel to the slope for sliding. The other axis is perpendicular to the surface. If the slope makes angle $\alpha$ with the horizontal, weight has component $mg\sin\alpha$ downhill and component $mg\cos\alpha$ into the plane. With no other perpendicular force and maintained contact, $N=mg\cos\alpha$. For a smooth slope, acceleration parallel to the plane downhill is
$$
a=\frac{mg\sin\alpha}{m}=g\sin\alpha.
$$
Mass cancels because the weight and inertia belong to the same object. At $\alpha=0$ there is zero acceleration along the horizontal plane. As slope angle increases, the parallel component increases and approaches $g$ in the vertical limit.
:::

:::esempio{titolo="A smooth thirty-degree slope"}
A $4\,\mathrm{kg}$ block slides on a $30^\circ$ slope with $g=10\,\mathrm{m/s^2}$. Its weight is $40\,\mathrm{N}$. The component along the slope is $40\sin30^\circ\,\mathrm{N}=20\,\mathrm{N}$. The normal force balances the perpendicular component. Apply the second law along the slope to get $\dfrac{20}{4}=5$, in metres per second squared.

::grafico{assi=0 uguale=1 linee="-3,-1.73 3,1.73" punti="0,0,pieno,B" vettori="0,0,0,-2,W;0,0,-0.78,1.35,N;0,0,-0.87,-0.5,W∥" xmin=-3.7 xmax=3.7 ymin=-2.5 ymax=2.3 titolo="The projection W∥ is along the slope, and N is perpendicular to it."}
:::

:::osservazione{#risultante-radiale titolo="Net force that keeps the object turning"}
On a circle of radius $r$ at constant speed $v$, the acceleration is $\dfrac{v^2}{r}$ and points inward. Sum the force components in that direction to get $m\dfrac{v^2}{r}$. The radial net force can come from road friction, string tension or a combination of forces. A free-body diagram represents the actual interactions. The word *centripetal* specifies the inward direction of the required net force.
:::

:::esempio{titolo="Turning on a horizontal plane"}
A small object of $1\,\mathrm{kg}$ moves on a circle of radius $2\,\mathrm{m}$ at $4\,\mathrm{m/s}$. Weight and normal force balance vertically. The required horizontal force is $1\cdot\dfrac{4^2}{2}\,\mathrm{N}=8\,\mathrm{N}$ inward. If the only inward force is static friction with a limit below $8\,\mathrm{N}$, the object cannot stay fixed to a rotating disk at that radius and speed.
:::
