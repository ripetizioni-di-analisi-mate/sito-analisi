---
titolo: "Particle and system mechanics"
sommario: "Position and motion, forces and constraints, work and energy, impulses and collisions, centre of mass and levers: models, assumptions and checks."
---

:::osservazione
Mechanics studies the motion of bodies and its causes. It answers three questions: where a body is at each instant, which forces change its motion and which quantities, such as energy, stay the same while the body moves. Every problem begins by choosing the **system**, that is, the body or set of bodies under study. A force is internal if it is exerted by one body of the system on another body of the system, and external if it comes from outside. Then the reference frame, that is, the origin and the axes, and the simplifying assumptions, for example the absence of friction, are fixed.
:::

## Position, velocity and acceleration

:::definizione{#cinematica titolo="Describing motion"}
A **point particle** is a body treated as a point, because its size and rotations do not matter for the problem. A car travelling a hundred kilometres can be treated as a point particle.

The **position** of the point is the vector $\vec r$ from the origin to the point. The **equation of motion** $\vec r(t)$ gives the position at each instant $t$. The **trajectory** is the line formed by all the positions occupied.

The **displacement** is the difference between final and initial position, $\Delta\vec r=\vec r_f-\vec r_i$. It is a vector and depends only on the two endpoints. The **distance travelled** $s$ is the length of the actual path and is always positive. After a full lap of a track, for example, the displacement is zero and the distance travelled is the length of the track.

**Velocity** indicates how fast position changes, and **acceleration** how fast velocity changes. Each has an average value, calculated over a time interval $\Delta t$, and an instantaneous value, which is the limit of the average value as the interval becomes very small, that is, the derivative.

$$
\vec v_{\mathrm m}=\dfrac{\Delta\vec r}{\Delta t},\qquad
\vec v=\dfrac{d\vec r}{dt},\qquad
\vec a_{\mathrm m}=\dfrac{\Delta\vec v}{\Delta t},\qquad
\vec a=\dfrac{d\vec v}{dt}.
$$

Velocity is measured in $\mathrm{m/s}$ and acceleration in $\mathrm{m/s^2}$. The magnitude of the velocity, $|\vec v|$, is called **speed**. Average speed is the distance travelled divided by the time, $\dfrac{s}{\Delta t}$.

In motion along a line the sign of the velocity $v_x$ indicates the sense of motion. The sign of the acceleration $a_x$ alone does not say whether the body speeds up or brakes. What matters is the comparison of the two signs.

- If $v_x$ and $a_x$ have the same sign, the speed increases.
- If they have opposite signs, the speed decreases.

A body with $v_x=-5\,\mathrm{m/s}$ and $a_x=-2\,\mathrm{m/s^2}$, for example, moves in the negative sense faster and faster. In curved motion there is acceleration even when the speed is constant, because the direction of the velocity changes.
:::

:::osservazione
Motion along a line is read from three graphs.

- In the **position-time** graph the slope is the velocity. The slope of the line joining two points of the graph is the average velocity, and the slope of the tangent at a point is the instantaneous velocity.
- In the **velocity-time** graph the slope is the acceleration and the area between the graph and the time axis is the displacement. Areas below the axis count as negative. Adding the areas all as positive gives the distance travelled.
- In the **acceleration-time** graph the area is the change in velocity $\Delta v$.

![Velocity–time straight line from 4 to −2 m/s: areas +4 m and −1 m.](/figure/fisica-semestre-filtro/meccanica/grafici-moto-en.svg)

*In the figure $v_x=4-2t$ in SI units. The velocity is zero at $t=2\,\mathrm{s}$, where the body reverses its sense. The area of the first triangle is $\dfrac{2\cdot4}{2}=4\,\mathrm{m}$ and that of the second is $\dfrac{1\cdot2}{2}=1\,\mathrm{m}$, below the axis. Between $0$ and $3\,\mathrm{s}$ the displacement is $4-1=3\,\mathrm{m}$ and the distance travelled is $4+1=5\,\mathrm{m}$.*
:::

## Straight-line motion and free fall

:::teorema{#moti-rettilinei titolo="Constant acceleration and the model domain"}
The two simplest motions along a line are the following.

In **uniform motion** the velocity is constant and the acceleration is zero. Position grows in proportion to time: $x=x_0+v_0t$, where $x_0$ is the position at time $t=0$.

In **uniformly accelerated motion** the acceleration $a$ is constant. The velocity changes by the same amount every second, and the position is obtained from the area under the velocity-time graph. The four formulas are:

$$
v=v_0+at,\qquad
x=x_0+v_0t+\dfrac12at^2.
$$
$$
x-x_0=\dfrac{v_0+v}{2}\,t,\qquad
v^2=v_0^2+2a(x-x_0).
$$

The first two give velocity and position as functions of time. The third says that the displacement is the average velocity $\dfrac{v_0+v}{2}$ multiplied by the time. It holds only with constant acceleration. The fourth links velocity and position without time and is used when time is neither given nor asked for. It gives $v^2$, so the sign of $v$ has to be established from the sense of motion.
:::

:::osservazione
A car travels at $v_0=12\,\mathrm{m/s}$ and brakes with constant acceleration $a=-3\,\mathrm{m/s^2}$. It stops when $v=0$, that is, when $12-3t=0$, so after $t=4\,\mathrm{s}$. The braking distance is $\dfrac{v_0+v}{2}\,t=\dfrac{12+0}{2}\cdot4=24\,\mathrm{m}$. The formulas hold until the car stops. For $t>4\,\mathrm{s}$ they would give a negative velocity, that is, a car setting off backwards. If the driver takes a reaction time $t_r=1\,\mathrm{s}$ before braking, in that time the car covers $v_0t_r=12\,\mathrm{m}$ at constant velocity, which are added to the $24\,\mathrm{m}$.

**Free fall** is the motion of a body subject only to the force of gravity, without air resistance. Near the Earth's surface all bodies in free fall have the same acceleration, directed downwards, of magnitude $g\simeq9.81\,\mathrm{m/s^2}$. It does not depend on mass. With the $y$ axis pointing upwards one sets $a_y=-g$ and uses the formulas of uniformly accelerated motion. The acceleration is $-g$ at every instant: while the body rises, at the highest point and while it falls. At the highest point the velocity is zero for an instant and the acceleration is still $-g$. In air a feather falls more slowly than a stone because of air resistance, which the model neglects.
:::

## Motion in a plane and circular motion

:::teorema{#moti-nel-piano titolo="Independent components, shared time"}
A body thrown into the air with initial velocity $v_0$, inclined at an angle $\theta$ above the horizontal, performs **projectile motion**. Air resistance is neglected. The motion is studied by separating the two directions, with $x$ horizontal and $y$ upwards.

- In the horizontal direction no force acts, so the motion is uniform with velocity $v_0\cos\theta$.
- In the vertical direction gravity acts, so the motion is uniformly accelerated with acceleration $-g$ and initial velocity $v_0\sin\theta$.

The two motions are independent and share the time $t$.

$$
\begin{cases}
x=x_0+v_0\cos\theta\,t,\\
y=y_0+v_0\sin\theta\,t-\dfrac12gt^2,
\end{cases}
\qquad
\begin{cases}
v_x=v_0\cos\theta,\\
v_y=v_0\sin\theta-gt.
\end{cases}
$$

The trajectory is a parabola. At the highest point, the vertex, the vertical component of the velocity is zero and the velocity is horizontal, equal to $v_0\cos\theta$. If the body lands at the same height from which it started, the **time of flight** $T$ and the **range** $R$, that is, the horizontal distance covered, are:

$$
T=\dfrac{2v_0\sin\theta}{g},\qquad
R=\dfrac{v_0^2\sin(2\theta)}{g}.
$$

The time of flight is obtained by setting $y=y_0$ in the vertical equation, and the range by multiplying the horizontal velocity by the time of flight. The range is greatest for $\theta=45^\circ$, because $\sin(2\theta)$ is at most 1. Two angles adding up to $90^\circ$, such as $30^\circ$ and $60^\circ$, give the same range. These two formulas hold only with equal start and landing heights. If the body is thrown from a balcony, the vertical equation is solved with the landing height, the solution with $t>0$ is chosen and it is substituted into the horizontal equation.
:::

:::osservazione
In **uniform circular motion** a body travels round a circle of radius $r$ at constant speed. The velocity is tangent to the circle at every point, so it continuously changes direction. The **period** $T$ is the time taken for one turn. The **angular velocity** $\omega=\dfrac{2\pi}{T}$ is the angle covered in one second and is measured in radians per second.

$$
v=\dfrac{2\pi r}{T}=\omega r,\qquad
a_c=\dfrac{v^2}{r}=\omega^2r.
$$

Since the direction of the velocity changes, the body has an acceleration even though the speed is constant. It is called **centripetal acceleration**, $a_c$, and points towards the centre of the circle. It depends on the square of the speed, so at fixed radius double the speed gives four times the acceleration.

By Newton's second law, the sum of the forces on the body points towards the centre and has magnitude $\dfrac{mv^2}{r}$. This sum is called the **centripetal force**. It is the name given to the resultant of the forces present, such as the tension of a string, the friction of the tyres or gravity, and it is not an extra force to add to the drawing.

![Projectile parabola for 20 m/s at 30 degrees, apex at 5.10 m and range 35.31 m.](/figure/fisica-semestre-filtro/meccanica/proiettile-en.svg)

*The figure uses $g=9.81\,\mathrm{m/s^2}$ and equal launch and landing heights. At the apex $v_x$ remains nonzero.*

![Tangential velocity and radial acceleration on a circle of radius 0.80 m.](/figure/fisica-semestre-filtro/meccanica/circolare-en.svg)

*With $v=4\,\mathrm{m/s}$ and $r=0.80\,\mathrm{m}$, $a_c=20\,\mathrm{m/s^2}$. Velocity and acceleration arrows have different units: their lengths cannot be compared numerically.*
:::

## The laws of dynamics

:::teorema{#newton titolo="Newton and choosing the body"}
Newton's three laws link forces to motion. They hold in an **inertial reference frame**, that is, a frame in which a body subject to no forces stays at rest or moves in uniform motion along a line. A laboratory on Earth is inertial to a good approximation. An accelerating lift is not.

**First law (principle of inertia).** If the sum of the forces on a body is zero, its velocity stays constant. The body stays at rest if it was at rest and continues in uniform straight motion if it was moving. A force therefore serves to change velocity and not to maintain it.

**Second law.** The sum of the forces, called the **resultant**, equals mass times acceleration. It is an equation between vectors, so it holds separately along each axis.

$$
\sum\vec F=m\vec a,\qquad
\sum F_x=ma_x,\qquad \sum F_y=ma_y.
$$

A force of $1\,\mathrm{N}$ gives a mass of $1\,\mathrm{kg}$ an acceleration of $1\,\mathrm{m/s^2}$.

**Third law (action and reaction).** If a body A exerts a force on a body B, then B exerts on A a force equal in magnitude and direction and opposite in sense. The two forces act on different bodies, so they do not cancel each other when only one of the two bodies is studied. A book resting on a table, for example, is subject to two forces: its weight, exerted by the Earth, and the normal force, exerted by the table. They balance, but they are not an action-reaction pair, because both act on the book. The reaction to the weight is the force with which the book attracts the Earth. The reaction to the normal force is the force with which the book presses on the table.
:::

:::osservazione
To apply the second law one draws the **free-body diagram**: the body under study alone, with all the forces that other bodies exert on it. Then the axes are chosen, each force is resolved into its components and $\sum F=ma$ is written for each axis. The components replace the force and are not added to it. On an inclined plane it is convenient to choose one axis along the plane and one perpendicular to it.

A body with zero resultant is in **equilibrium**, that is, it has zero acceleration. Having zero velocity at one instant is a different condition. A ball thrown upwards, at its highest point, has zero velocity and is not in equilibrium, because its weight acts on it. In a problem with several connected bodies the second law is written for each body. The forces the bodies exchange, such as the tension of a string, appear in the equations of the single bodies and are eliminated by adding them.

![Forces on a block pulled at 30 degrees: pull 24 N, weight 39.24 N, normal 27.24 N.](/figure/fisica-semestre-filtro/meccanica/corpo-libero-en.svg)

*A $4\,\mathrm{kg}$ block is pulled by a $24\,\mathrm{N}$ force inclined at $30^\circ$, on a frictionless floor. Vertically the block does not accelerate, so $N+F\sin30^\circ-mg=0$ and $N=39.24-12=27.24\,\mathrm{N}$. The normal force is less than the weight, because the applied force partly lifts the block.*
:::

## Common forces

:::definizione{#forze titolo="Identifying interactions"}
The forces that appear most often in problems are six.

The **force of gravity** is the attraction between two masses. Between two masses $m_1$ and $m_2$ at distance $r$ it equals $F=\dfrac{Gm_1m_2}{r^2}$, with $G\simeq6.67\cdot10^{-11}\,\mathrm{N\,m^2/kg^2}$. For two spheres $r$ is the distance between the centres. The force decreases with the square of the distance, so at double the distance it is one quarter.

**Weight** is the force of gravity the Earth exerts on a body near its surface. It equals $\vec P=m\vec g$ and points downwards. A $70\,\mathrm{kg}$ body weighs $70\cdot9.81\simeq687\,\mathrm{N}$. On the Moon the same body still has a mass of $70\,\mathrm{kg}$ and weighs about one sixth as much.

The **normal force** $N$ is the force with which a surface pushes a body resting on it. It is perpendicular to the surface. A surface pushes and does not pull, so $N\ge0$. If the calculation gives $N<0$, the body has left the surface.

**Tension** $T$ is the force with which a taut string pulls the bodies attached to its ends. It points along the string. If the string has negligible mass the tension is the same at both ends, even when the string passes over an ideal pulley, that is, one without mass or friction.

The last two forces, friction and the elastic force, are described by the following formulas.

$$
|F_s|\le\mu_sN,\qquad |F_d|=\mu_dN,\qquad F_{\mathrm{el},x}=-kx.
$$

**Friction** is the force, parallel to the contact surface, that opposes sliding between two bodies. It is of two types.

- **Static friction** $F_s$ acts when the body is at rest relative to the surface. It has no fixed value: it is equal and opposite to the force tending to make the body slide, up to a maximum value $\mu_sN$. A body with a maximum static friction of $12\,\mathrm{N}$, pushed with $5\,\mathrm{N}$, stays at rest and the friction is $5\,\mathrm{N}$. If the push exceeds $12\,\mathrm{N}$ the body moves.
- **Kinetic friction** $F_d$ acts when the body slides. It has constant magnitude $\mu_dN$ and sense opposite to the velocity of the body relative to the surface.

The numbers $\mu_s$ and $\mu_d$ are called coefficients of friction. They are pure numbers, depend on the two surfaces and usually $\mu_d<\mu_s$.

The **elastic force** is the force exerted by a deformed spring. By **Hooke's law** it is proportional to the deformation $x$, that is, to how much longer or shorter the spring is than its rest length. The minus sign indicates that the force points opposite to the deformation, so it brings the spring back towards its rest length. The spring constant $k$ is measured in $\mathrm{N/m}$ and is larger for stiffer springs. Two springs connected one after the other (in series) are equivalent to a softer spring, with $\dfrac{1}{k_{\mathrm{eq}}}=\dfrac1{k_1}+\dfrac1{k_2}$. Two springs side by side (in parallel) are equivalent to a stiffer spring, with $k_{\mathrm{eq}}=k_1+k_2$.
:::

:::osservazione
The **inclined plane** brings these forces together. A block of mass $m$ rests on a plane inclined at an angle $\theta$. The weight is resolved into two components: $mg\sin\theta$ along the plane, downwards, and $mg\cos\theta$ perpendicular to the plane. In the perpendicular direction the block does not accelerate, so $N=mg\cos\theta$.

The block stays at rest if the component of the weight along the plane does not exceed the maximum static friction, that is, if $mg\sin\theta\le\mu_smg\cos\theta$. Dividing by $mg\cos\theta$ the condition becomes $\tan\theta\le\mu_s$. If the block slides down, along the plane $mg\sin\theta$ acts downwards and the kinetic friction $\mu_dmg\cos\theta$ upwards, so the acceleration is $a=g(\sin\theta-\mu_d\cos\theta)$.

![Block on an incline with vertical weight, perpendicular normal force and upslope friction.](/figure/fisica-semestre-filtro/meccanica/piano-inclinato-en.svg)

*The friction shown opposes downward sliding or the tendency to slide down. If sliding were uphill, kinetic friction would reverse. The diagram shows directions, not magnitudes.*
:::

## Work, power and kinetic energy

:::teorema{#lavoro-energia titolo="From forces to changes in kinetic energy"}
**Work** $W$ is the energy a force transfers to a body while the body moves. For a constant force $F$ and a displacement $\Delta r$ it equals $W=F\,\Delta r\cos\theta$, where $\theta$ is the angle between force and displacement. It is measured in joules, $1\,\mathrm{J}=1\,\mathrm{N\,m}$. The sign depends on the angle.

- Work is positive if the force has a component in the sense of the displacement. The force gives energy to the body.
- Work is negative if the force has a component opposite to the displacement, like friction. The force takes energy from the body.
- Work is zero if the force is perpendicular to the displacement, like the normal force on a plane.

If the force changes along the path, the work is the integral of the force along the displacement, that is, the area under the graph of force against position. **Kinetic energy** $K$ is the energy a body has because it is moving.

$$
W=\int_i^f\vec F\cdot d\vec r,\qquad
K=\dfrac12mv^2,\qquad W_{\mathrm{tot}}=K_f-K_i.
$$

The third formula is the **work-energy theorem**: the total work of all the forces acting on a body equals the change in its kinetic energy. If the total work is positive the body speeds up, if it is negative it slows down. A $2\,\mathrm{kg}$ body at rest receiving a total work of $16\,\mathrm{J}$, for example, reaches a kinetic energy of $16\,\mathrm{J}$, so $v=\sqrt{\dfrac{2K}{m}}=\sqrt{16}=4\,\mathrm{m/s}$. Kinetic energy is a scalar and is always positive or zero.
:::

:::osservazione
A force grows with position according to $F_x=(4\,\mathrm{N/m})\,x$. Between $x=0$ and $x=3\,\mathrm{m}$ it goes from $0$ to $12\,\mathrm{N}$. The work is the area of the triangle under the graph, $\dfrac{3\cdot12}{2}=18\,\mathrm{J}$. It is the work a constant force equal to the average value, $6\,\mathrm{N}$, would do.

**Power** $P$ is the work done in one second. It is measured in watts.

$$
P_{\mathrm m}=\dfrac{W}{\Delta t},\qquad P=\vec F\cdot\vec v,\qquad
1\,\mathrm{W}=1\,\mathrm{J/s}.
$$

The first formula gives the average power over a time interval. The second gives the power at an instant, as the product of force and velocity. A motor doing $600\,\mathrm{J}$ of work in $20\,\mathrm{s}$ has an average power of $30\,\mathrm{W}$.

Someone holding a weight still with their arm does no work on the weight, because the displacement is zero. The muscles nevertheless consume energy to stay contracted. **Efficiency** $\eta=\dfrac{E_{\mathrm{utile}}}{E_{\mathrm{in}}}$ is the fraction of the energy supplied that is converted into useful energy. It is a number between 0 and 1. A muscle with efficiency $0.25$ consumes $400\,\mathrm{J}$ to do $100\,\mathrm{J}$ of work, and the rest becomes heat.

![Force–position graph increasing from zero to 12 N over 3 m; triangular area 18 J.](/figure/fisica-semestre-filtro/meccanica/lavoro-en.svg)

*Use the force component along the displacement to calculate the area. Here force grows linearly, so its spatial mean is $6\,\mathrm{N}$.*
:::

## Potential energy and conservation

:::teorema{#energia-meccanica titolo="Conservative work and the system balance"}
A force is **conservative** if the work it does between two points depends only on the two points and not on the path followed. Weight and the elastic force are conservative. Friction is not, because it does more work over a longer path.

Each conservative force has an associated **potential energy** $U$, which depends on the position of the body. It is defined so that the work of the force equals the decrease in potential energy, $W_c=-\Delta U$. When a body descends, for example, its weight does positive work and the potential energy decreases. Only the change in $U$ matters, so the level at which $U=0$ is chosen freely.

$$
U_g=mgy,\qquad U_e=\dfrac12kx^2,\qquad
E_{\mathrm{mecc}}=K+U.
$$
$$
\Delta(K+U)=W_{\mathrm{non\,cons}}.
$$

The first two formulas give the potential energy of weight, with $y$ the height above the chosen level, and the elastic potential energy of a spring deformed by $x$. The spring stores the same energy whether stretched or compressed by the same amount, because $x$ is squared.

**Mechanical energy** is the sum of kinetic and potential energy. The last formula is the energy balance: the change in mechanical energy equals the work of non-conservative forces, such as friction. The **principle of conservation of mechanical energy** follows from it. If non-conservative forces do no work, mechanical energy stays constant, that is, $K_i+U_i=K_f+U_f$. During the motion energy passes from potential to kinetic and back.

A body falling from rest from a height $h$, for example, has energy $mgh$ at the start and energy $\dfrac12mv^2$ at the end. Equating them gives $v=\sqrt{2gh}$. From $h=5\,\mathrm{m}$ the final speed is $\sqrt{2\cdot9.81\cdot5}\simeq9.9\,\mathrm{m/s}$. The result is the same on a frictionless slide of any shape, because the normal force is perpendicular to the motion and does no work.
:::

:::osservazione
When there is friction mechanical energy decreases. The work of kinetic friction on a body covering a stretch of length $s$ on a stationary surface is $W_d=-\mu_dNs$. It is negative, because friction is opposite to the displacement.

A body starts from rest at the top of a slope with a potential energy of $30\,\mathrm{J}$ relative to the bottom. Along the slope friction does a work of $-10\,\mathrm{J}$. From the balance, the kinetic energy at the bottom is $30-10=20\,\mathrm{J}$. The missing $10\,\mathrm{J}$ have not disappeared: they have become internal energy of the body and the plane, which have warmed up. Total energy is always conserved.

The energy method gives the speed at a point without studying the motion instant by instant. It does not give the time taken or the direction of the velocity, for which the laws of motion are needed.

![Balance of 30 J: initial potential energy becomes 20 J kinetic and 10 J internal energy.](/figure/fisica-semestre-filtro/meccanica/energie-en.svg)

*Choose $U_g=0$ at the bottom. Bar heights are proportional to energies; the complete system includes body, Earth and plane.*
:::

## Impulse and momentum

:::teorema{#quantita-di-moto titolo="Forces over time and collisions"}
The **momentum** of a body is the product of mass and velocity, $\vec p=m\vec v$. It is a vector, with the direction and sense of the velocity, and is measured in $\mathrm{kg\,m/s}$. The **impulse** $\vec J$ of a force is the product of the force and the time during which it acts. If the force varies, it is the integral of the force over time, that is, the area under the force-time graph. The **impulse-momentum theorem** states that the impulse of the resultant equals the change in momentum.

$$
\vec J_{\mathrm{ext}}=\int_{t_i}^{t_f}\vec F_{\mathrm{ext}}\,dt
=\Delta\vec p,\qquad
\vec F_{\mathrm m}=\dfrac{\vec J}{\Delta t}.
$$

The second formula defines the average force, that is, the constant force that would give the same impulse in the same time. The theorem explains why a longer collision is less violent. To stop a body the change in momentum is fixed, so if the collision time increases the average force decreases. An airbag, for example, lengthens the time in which the head stops. A $0.5\,\mathrm{kg}$ ball arriving at $10\,\mathrm{m/s}$ and stopping has $\Delta p=-5\,\mathrm{kg\,m/s}$. If it stops in $0.01\,\mathrm{s}$ the average force has magnitude $500\,\mathrm{N}$, if it stops in $0.1\,\mathrm{s}$ it has magnitude $50\,\mathrm{N}$.

In a system of several bodies the internal forces are action-reaction pairs, equal and opposite, so their impulses cancel. The **principle of conservation of momentum** follows: if the resultant of the external forces is zero, the total momentum of the system stays constant. It also holds for a single direction, if no external forces act in that direction. During a collision the forces between the bodies are much stronger than the external ones, so the total momentum just before and just after the collision is the same.
:::

:::osservazione
**Collisions** are classified according to what happens to kinetic energy. Total momentum is conserved in all three cases.

- In an **elastic** collision total kinetic energy is also conserved. The bodies bounce without permanent deformation.
- In an **inelastic** collision part of the kinetic energy becomes heat or deformation.
- In a **perfectly inelastic** collision the two bodies stay together after the collision and move with the same velocity $v_f$. This is the case in which most kinetic energy is lost.

For the perfectly inelastic collision, conservation of momentum, $m_1v_1+m_2v_2=(m_1+m_2)v_f$, gives:

$$
v_f=\dfrac{m_1v_1+m_2v_2}{m_1+m_2}.
$$

A $2\,\mathrm{kg}$ trolley at $3\,\mathrm{m/s}$ hits a stationary $1\,\mathrm{kg}$ trolley and stays coupled to it. The final velocity is $\dfrac{2\cdot3+1\cdot0}{2+1}=2\,\mathrm{m/s}$. The kinetic energy was $9\,\mathrm{J}$ before the collision and is $6\,\mathrm{J}$ after, so $3\,\mathrm{J}$ have become heat and deformation.

Some problems are solved in two phases, with two different principles. In the **ballistic pendulum** a bullet embeds itself in a hanging block, which then rises. During the collision momentum is conserved and mechanical energy is not, because the collision is perfectly inelastic. During the rise mechanical energy is conserved. The first phase gives the velocity of the block just after the collision, the second gives the height reached.

![Triangular net-force pulse: base 0.10 s, height 100 N and area 5 N s.](/figure/fisica-semestre-filtro/meccanica/impulso-en.svg)

*The area of the triangle is $\dfrac{0.10\cdot100}{2}=5\,\mathrm{N\,s}$ and is the impulse, equal to $\Delta p$. The average force is $\dfrac{5}{0.10}=50\,\mathrm{N}$, half the maximum value. To obtain $\Delta v$, $\Delta p$ is divided by the mass.*
:::

## Centre of mass and systems of bodies

:::definizione{#centro-di-massa titolo="A mass-weighted position describing the system"}
The **centre of mass** of a system of bodies is the point representing its average position, calculated by giving each body a weight proportional to its mass. It is therefore closer to the bodies of larger mass. In a homogeneous symmetric body it coincides with the geometric centre. It may lie at a point where there is no matter, such as the centre of a ring.

$$
\vec r_{\mathrm{CM}}=\dfrac{\sum_i m_i\vec r_i}{M},\qquad
M=\sum_i m_i.
$$
$$
\vec p_{\mathrm{tot}}=M\vec v_{\mathrm{CM}},\qquad
M\vec a_{\mathrm{CM}}=\sum\vec F_{\mathrm{ext}}.
$$

The first two formulas define the centre of mass, with $M$ the total mass. The other two describe its motion. The total momentum of the system equals the total mass times the velocity of the centre of mass. Moreover the centre of mass moves like a point of mass $M$ acted on by the resultant of the external forces alone. Internal forces change the motion of the single parts and not that of the centre of mass. A diver who spins and tucks, for example, changes shape through internal forces, and the diver's centre of mass still follows a parabola.
:::

:::osservazione
A $2\,\mathrm{kg}$ mass lies at $x=0$ and a $1\,\mathrm{kg}$ mass at $x=3\,\mathrm{m}$. The centre of mass is at $x_{\mathrm{CM}}=\dfrac{2\cdot0+1\cdot3}{2+1}=1\,\mathrm{m}$. It is closer to the larger mass, and always lies between the two masses. The midpoint, $1.5\,\mathrm{m}$, would be the centre of mass only if the masses were equal.

If the resultant of the external forces is zero, the centre of mass has constant velocity. If in addition the system starts from rest, the centre of mass stays at rest. A person standing on a stationary trolley, free to roll, starts walking to the right. Horizontally no external forces act, so the centre of mass of person and trolley does not move, and the trolley rolls to the left.

Conservation of momentum does not imply conservation of kinetic energy. Two stationary trolleys, held together with a compressed spring between them, are released. They move off in opposite senses with equal and opposite momenta, and the total momentum stays zero. Total kinetic energy, by contrast, goes from zero to a positive value, at the expense of the elastic energy of the spring.

![Two masses of 2 kg and 1 kg at 0 and 3 m; centre of mass at 1 m.](/figure/fisica-semestre-filtro/meccanica/centro-massa-en.svg)

*Distances from the centre of mass are $1\,\mathrm{m}$ and $2\,\mathrm{m}$: mass times distance is equal on either side.*
:::

## Rotational equilibrium and levers

:::teorema{#leve titolo="Forces, torques and rigid bodies"}
A **rigid body** is a body that does not deform: the distances between its points stay constant. Unlike a point particle it can rotate, so the point where each force is applied also matters.

The turning effect of a force is measured by its **moment** (torque) about a point $O$, called the pivot, around which the body can rotate. The magnitude of the moment is $\tau=Fb$, where $b$ is the **lever arm**, that is, the distance between the pivot and the line along which the force acts. Moment is measured in $\mathrm{N\,m}$. A force whose line passes through the pivot has zero lever arm, hence zero moment, and does not make the body rotate. In the plane a sign is given to the moment: positive if the force tends to rotate the body anticlockwise, negative if clockwise.

A rigid body at rest stays in **equilibrium** if two conditions are met together. The sum of the forces is zero, and then the body does not translate. The sum of the moments about a pivot is zero, and then the body does not rotate.

$$
\sum\vec F=0,\qquad \sum\vec\tau_O=0.
$$

The two conditions are independent. Two equal and opposite forces applied at different points, on parallel lines, have zero sum and a non-zero total moment. They form a **couple** and make the body rotate, like hands on a steering wheel. In problems the pivot is chosen freely. It is convenient to put it at the point where an unknown force acts, for example at a hinge. That force has zero lever arm and does not appear in the moment equation. It still appears in the force equation.
:::

:::osservazione
A **lever** is a rigid bar that rotates about a fixed point, the fulcrum. It is in equilibrium when the moments of the two forces about the fulcrum are equal and opposite, that is, $F_1b_1=F_2b_2$. The force with the shorter lever arm is therefore the stronger one.

The forearm is a lever with its fulcrum at the elbow. A load of $40\,\mathrm{N}$ is held in the hand, $0.30\,\mathrm{m}$ from the elbow, with the forearm horizontal. The biceps muscle pulls upwards $0.05\,\mathrm{m}$ from the elbow. The weight of the forearm is neglected. From the balance of moments about the elbow, $F_m\cdot0.05=40\cdot0.30$, so $F_m=\dfrac{12}{0.05}=240\,\mathrm{N}$. The muscle exerts a force six times the load, because its lever arm is six times shorter.

From the balance of forces vertically one finds the force $R_y$ that the joint exerts on the forearm: $R_y+240-40=0$, so $R_y=-200\,\mathrm{N}$. The minus sign indicates that it points downwards. If the muscle pulls in an inclined direction, only the component of the force perpendicular to the forearm enters the moment. If the weight of the forearm is taken into account, it is applied at its centre of mass and its moment is added.

![Horizontal lever: elbow at zero, muscle at 5 cm and load at 30 cm; joint reaction points downwards.](/figure/fisica-semestre-filtro/meccanica/leva-en.svg)

*Positions are to scale along the forearm; arrows are schematic. Muscle and load produce opposite torques about the elbow.*
:::
