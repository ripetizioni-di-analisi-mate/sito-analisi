---
titolo: Laws of motion and equilibrium
sommario: How forces determine acceleration, when a body remains in equilibrium, and how to use Newton's laws to calculate normal forces, tensions, and frictional forces.
---

## The body under study and the external forces acting on it

:::definizione{#punto-materiale titolo="The particle model"}
When studying the motion of a body, we can neglect its dimensions if its rotation and shape have negligible effects on the problem. We then represent the body as a **particle** with the same mass as the body.

We can describe a cart moving along a straight track by the position of its center. This model allows us to calculate the cart's acceleration without considering how the wheels rotate. To study whether the cart tips over, however, we also need to consider its dimensions and the points where the forces act.

**External forces** are the forces that other bodies exert on the body under study. Two forces act on a book resting on a table. Earth's gravitational pull gives the book its weight, and the table exerts a supporting force. The list of forces therefore depends on which body we are studying.
:::

:::definizione{#risultante titolo="Net force"}
The **net force** $\vec R$ acting on a body is the vector sum of all the forces applied to it. For two forces, we write
$$
\vec R=\vec F_1+\vec F_2.
$$
Along an axis, we add the components with their signs. If one force is $8\,\mathrm{N}$ to the right and another is $3\,\mathrm{N}$ to the left, taking rightward as positive gives $R_x=8-3=5\,\mathrm{N}$. The net force therefore points to the right.

A drawing showing only the forces that act on the body under study is called a **free-body diagram**. Each arrow represents a force acting on the same body. The arrow for the net force represents their sum and does not correspond to an additional interaction.

::grafico{assi=0 uguale=1 poligoni="-0.5,-0.4 0.5,-0.4 0.5,0.4 -0.5,0.4" vettori="0,0,4,0,F₁ = 8 N;0,0,-1.5,0,F₂ = 3 N" xmin=-2.5 xmax=5 ymin=-1.5 ymax=1.5 titolo="Two opposing forces act on the body. The net force has magnitude $5\,\mathrm{N}$ and points to the right. One unit in the diagram represents $2\,\mathrm{N}$"}
:::

## Newton's first law

:::definizione{#riferimento-inerziale titolo="Inertial frame of reference"}
An **inertial frame of reference** is a frame in which a body maintains a constant velocity when the net force on it is zero. The body can therefore remain at rest or move along a straight line without changing velocity.

For the short times and limited distances considered here, we treat the frame fixed to the ground as inertial. A frame that moves at constant velocity without rotating relative to an inertial frame is also inertial. A bus that is braking, however, is an accelerating frame. The laws written in the ground frame require additional terms to apply in the bus frame.
:::

:::teorema{#primo-principio titolo="Newton's first law of motion"}
Inertial frames exist. In an inertial frame, if the net force on a body is zero, its velocity remains constant. This statement is the **law of inertia**, an empirical law of mechanics.

For example, a cart moving at $2\,\mathrm{m/s}$ on a horizontal track continues to move at $2\,\mathrm{m/s}$ if the net force on it is zero. Over the same interval, a cart initially at rest, also subject to zero net force, remains at rest. The difference between the two motions depends on the initial velocity.

An object sliding across a floor normally slows down because the floor and the air exert resistive forces. The decrease in speed therefore indicates a net force opposite to the motion.
:::

## Newton's second law

:::teorema{#secondo-principio titolo="Net force and acceleration"}
In an inertial frame, the net force on a body of constant mass $m$ equals its mass times its acceleration,
$$
\vec R=m\vec a.
$$
This is **Newton's second law of motion**, an empirical law. The acceleration points in the same direction as the net force because the mass is positive. Along one axis, the relation becomes $R_x=ma_x$.

Mass measures how much the velocity changes under a given force. For the same net force, a larger mass gives a smaller acceleration, since
$$
a_x=\frac{R_x}{m}.
$$
For a horizontal net force of $12\,\mathrm{N}$, a mass of $3\,\mathrm{kg}$ has an acceleration of $4\,\mathrm{m/s^2}$, while a mass of $6\,\mathrm{kg}$ has an acceleration of $2\,\mathrm{m/s^2}$. The unit of force satisfies the relation $1\,\mathrm{N}=1\,\mathrm{kg\cdot m/s^2}$.
:::

:::esempio{titolo="Two opposing forces on a cart"}
A cart of mass $2\,\mathrm{kg}$ experiences a force of $10\,\mathrm{N}$ to the right and a force of $4\,\mathrm{N}$ to the left. The track is horizontal and the vertical forces balance. Taking rightward as positive gives
$$
\begin{aligned}
R_x&=10\,\mathrm{N}-4\,\mathrm{N}=6\,\mathrm{N},\\[6pt]
a_x&=\frac{6\,\mathrm{N}}{2\,\mathrm{kg}}=3\,\mathrm{m/s^2}.
\end{aligned}
$$
If the cart starts from rest and the forces remain constant for $2\,\mathrm{s}$, the equation $v=v_0+at$ gives $v=6\,\mathrm{m/s}$. Thus we use dynamics to find the acceleration and the equation for motion with constant acceleration to find the velocity.
:::


:::osservazione{titolo="From the physical situation to the equation of motion"}
To write the equation of motion for a body, first identify the objects it interacts with. The body's weight is Earth's gravitational pull on it. A supporting surface can exert a normal force and friction, and a taut string exerts tension. Each force in the diagram therefore corresponds to an identifiable physical interaction.

Next, choose an axis and assign a sign to each component. The magnitude of a force remains positive, while its component can be negative if the force points opposite to the positive axis. For the cart in the example, taking leftward as positive instead would give $R_x=-6\,\mathrm{N}$ and $a_x=-3\,\mathrm{m/s^2}$. Both descriptions indicate a net force and an acceleration to the right.

The initial velocity completes the description of the motion. If the same cart were initially moving to the left, it would slow down until its velocity reached zero. If the net force continued to point to the right, the cart would then move to the right. The forces determine the direction of the acceleration, while the direction of motion also depends on how the body was moving initially.
:::

## Newton's third law

:::teorema{#terzo-principio titolo="The forces in an interaction"}
If body $A$ exerts a force on body $B$, then body $B$ simultaneously exerts a force on $A$ of equal magnitude, parallel to the first force and pointing in the opposite direction. Identifying which body exerts each force and which body it acts on, we write
$$
\vec F_{A\to B}=-\vec F_{B\to A}.
$$
This is **Newton's third law of motion**, an empirical law. The two forces act on different bodies.

If a hand pushes on a wall with a force of $20\,\mathrm{N}$, the wall exerts a force of $20\,\mathrm{N}$ on the hand in the opposite direction. The free-body diagram for the hand shows the force of the wall on the hand. The diagram for the wall shows the force of the hand on the wall.
:::

:::attenzione{titolo="Equal and opposite forces on different bodies"}
The two forces in an interaction do not cancel in the free-body diagram for a single body. Two carts of masses $2\,\mathrm{kg}$ and $4\,\mathrm{kg}$ on a frictionless track interact through a spring that exerts $8\,\mathrm{N}$ on each. Their accelerations have magnitudes $4\,\mathrm{m/s^2}$ and $2\,\mathrm{m/s^2}$ and point in opposite directions. The forces have the same magnitude, but the different masses give different accelerations.
:::

## Equilibrium and the normal force

:::teorema{#equilibrio titolo="Equilibrium of a particle"}
The **condition for equilibrium** of a particle is that the net force on it be zero. Its acceleration is then zero. If it is initially at rest, it remains in **static equilibrium**. If its initial velocity is nonzero, it maintains that velocity and is said to be in dynamic equilibrium.

In a two-dimensional problem, both components must vanish, so
$$
\begin{cases}
R_x=0,\\[4pt]
R_y=0.
\end{cases}
$$
For example, if a force of $7\,\mathrm{N}$ acts on a body to the right and the body is to remain at rest, a second horizontal force must have a component of $-7\,\mathrm{N}$. This condition applies to a particle. To study an extended body whose rotation also matters, we need additional conditions on the torques exerted by the forces.
:::

:::definizione{#reazione-normale titolo="Normal force"}
A surface supporting a body exerts a force perpendicular to the surface, called the **normal force**. Its magnitude is denoted by $N$. The word normal means perpendicular.

A book at rest on a horizontal surface is subject to its weight $P=mg$ downward and the normal force $N$ upward. Taking upward as positive, equilibrium gives
$$
N-mg=0,
\qquad N=mg.
$$
For a book of mass $1\,\mathrm{kg}$ with $g=9.81\,\mathrm{m/s^2}$, the normal force is $9.81\,\mathrm{N}$. The weight and the normal force act on the same book, so they balance. The third-law partner of the book's weight is the gravitational pull that the book exerts on Earth.

::grafico{assi=0 uguale=1 linee="-3,-0.5 3,-0.5" poligoni="-0.8,-0.5 0.8,-0.5 0.8,0.5 -0.8,0.5" vettori="0,0,0,2.2,N;0,0,0,-2.2,P" xmin=-3.5 xmax=3.5 ymin=-3 ymax=3 titolo="Free-body diagram of a body at rest on a horizontal surface. The normal force and the weight have equal magnitudes and opposite directions"}
:::

:::osservazione{titolo="The normal force depends on the other forces"}
If a downward vertical force $F$ also acts on the book, equilibrium gives $N-mg-F=0$, so $N=mg+F$. For example, with a mass of $1\,\mathrm{kg}$ and $F=3\,\mathrm{N}$, we obtain $N=12.81\,\mathrm{N}$. When weight and the normal force are the only vertical forces, the relation $N=mg$ follows from zero vertical acceleration. In general, we find the normal force from the equation of motion by including all the vertical forces. Ordinary contact can exert a push on the body. A negative value of $N$ would indicate that we need to reconsider the assumption of contact.
:::

## Tension in a string

:::definizione{#tensione titolo="Tension"}
A taut string pulls on an attached body along the string, away from the body. The magnitude of this force is called the **tension** and is denoted by $T$. In the ideal string model, we neglect the mass and stretching of the string. If it passes over an ideal pulley, we also neglect the mass and friction of the pulley.

For a mass hanging from a single vertical string, the forces are the upward tension and the downward weight. When the body is at rest or moves at constant velocity, $T=mg$. If it accelerates vertically, taking upward as positive gives
$$
T-mg=ma,
\qquad T=m(g+a).
$$
For a mass of $2\,\mathrm{kg}$ accelerating upward at $1\,\mathrm{m/s^2}$ with $g=9.81\,\mathrm{m/s^2}$, the tension is $21.62\,\mathrm{N}$. Since the tension exceeds the weight, the net force points upward.

::grafico{assi=0 uguale=1 linee="-2,2.8 2,2.8;0,2.8 0,0.5" poligoni="-0.5,-0.5 0.5,-0.5 0.5,0.5 -0.5,0.5" vettori="0,0,0,2,T;0,0,0,-1.5,P" xmin=-2.5 xmax=2.5 ymin=-2.5 ymax=3.2 titolo="A hanging mass accelerates upward when the tension exceeds its weight. The arrows show only the forces on the mass"}
:::

## Static friction

:::definizione{#attrito-statico titolo="Friction between surfaces at rest relative to each other"}
**Static friction** is a force tangent to the contact surface that can prevent sliding from starting. Its magnitude adjusts to the force needed to prevent sliding, up to a maximum value. In the model used here,
$$
0\leq F_s\leq\mu_sN.
$$
The number $\mu_s$ is the **coefficient of static friction**. It depends on the surfaces and has no units. The maximum static friction is $F_{s,\max}=\mu_sN$.

A crate on a horizontal surface is pulled horizontally with a force of $5\,\mathrm{N}$ and remains at rest. The frictional force on it is $5\,\mathrm{N}$ in the opposite direction. If $\mu_sN=12\,\mathrm{N}$, this equilibrium is possible because $5\leq12$. The value $12\,\mathrm{N}$ is the maximum friction available. The actual frictional force in this situation is $5\,\mathrm{N}$.

When the force required to keep the crate at rest exceeds the limit, the crate begins to slide. Equality corresponds to the limiting case of the static friction model.
:::

## Kinetic friction and acceleration

:::definizione{#attrito-dinamico titolo="Friction during sliding"}
When the surfaces slide relative to each other, the **kinetic friction** model gives the magnitude of the frictional force as
$$
F_d=\mu_dN,
$$
where $\mu_d$ is the coefficient of kinetic friction. The force opposes the relative sliding motion. The formula describes an approximate model suitable for problems in which the coefficients are treated as constant.

On a horizontal surface, with a horizontal pulling force $F$, no additional vertical forces, and zero vertical acceleration, $N=mg$. If the body slides to the right and $F$ points to the right, then taking rightward as positive, Newton's second law gives
$$
F-\mu_dmg=ma.
$$
For a crate of mass $5\,\mathrm{kg}$ with $\mu_d=0.20$ and a pulling force $F=20\,\mathrm{N}$, using $g=10\,\mathrm{m/s^2}$ here gives a frictional force of $10\,\mathrm{N}$. The net force is therefore $10\,\mathrm{N}$ and the acceleration is $2\,\mathrm{m/s^2}$.

::grafico{assi=0 uguale=1 linee="-3,-0.5 3,-0.5" poligoni="-0.6,-0.5 0.6,-0.5 0.6,0.5 -0.6,0.5" vettori="0,0,2,0,F;0,0,-1,0,Fd;0,0,0,5,N;0,0,0,-5,P" xmin=-3.5 xmax=3.5 ymin=-6 ymax=6 titolo="A body sliding to the right on a surface. Kinetic friction points to the left, while the weight and the normal force balance"}
:::

:::osservazione{titolo="Slowing down under friction alone"}
If the pull is removed while the body is sliding to the right, the horizontal net force is $-\mu_dmg$. Dividing by the mass gives $a=-\mu_dg$ for as long as the body keeps sliding. With $\mu_d=0.20$ and $g=10\,\mathrm{m/s^2}$, the acceleration is $-2\,\mathrm{m/s^2}$. Once the body stops, we return to the static case. The braking model does not describe the body spontaneously moving backward after it stops.
:::
