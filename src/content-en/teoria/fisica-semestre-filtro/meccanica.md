---
titolo: "Particle and system mechanics"
sommario: "Position and motion, forces and constraints, work and energy, impulses and collisions, centre of mass and levers: models, assumptions and checks."
---

:::osservazione
Mechanics connects three questions: where a body is, which interactions change its motion, and which quantities allow two states to be compared. Before calculating, choose the **system**: a ball, a cart, or several bodies together. The same interaction may be external to the first system and internal to the second. Then specify the reference frame, axes, time interval and idealisations; a correct formula used outside its domain can give a physically impossible answer.
:::

## Position, velocity and acceleration

:::definizione{#cinematica titolo="Describing motion"}
A **particle model** represents a body when its dimensions and rotation are irrelevant to the question. It does not mean that the body literally has no size. Once an origin, axes and clock are fixed, the position function $\vec r(t)$ assigns a position to each instant; the trajectory is the set of positions visited, without their timing.

Displacement is $\Delta\vec r=\vec r_f-\vec r_i$. Distance travelled $s$ is instead the path length: it is non-negative and does not decrease when the body turns back. Completing one lap returns the body to its initial point, giving zero displacement but a positive distance.

$$
\vec v_{\mathrm m}=\dfrac{\Delta\vec r}{\Delta t},\qquad
\vec v=\dfrac{d\vec r}{dt},\qquad
\vec a_{\mathrm m}=\dfrac{\Delta\vec v}{\Delta t},\qquad
\vec a=\dfrac{d\vec v}{dt}.
$$

Instantaneous **speed** is $|\vec v|$; average speed is $\dfrac{s}{\Delta t}$. In general it differs from the magnitude of average velocity. On a straight line, $v_x>0$ means motion in the positive direction, whereas $a_x<0$ means that algebraic velocity decreases: the body slows down only if velocity and acceleration have opposite signs. If they have the same sign, speed increases. In more dimensions, acceleration can also change only the direction of velocity.
:::

:::osservazione
On a position–time graph the secant slope gives average velocity; the tangent slope gives instantaneous velocity. An intersection of two position curves indicates a meeting, not necessarily equal velocities. On a velocity–time graph the slope gives acceleration and the **signed** area gives displacement. Distance is instead the sum of the absolute areas. On an acceleration–time graph the area gives the change in velocity, not the final velocity unless the initial velocity is known.

![Velocity–time straight line from 4 to −2 m/s: areas +4 m and −1 m.](/figure/fisica-semestre-filtro/meccanica/grafici-moto-en.svg)

*For $v_x=4-2t$ in SI units, between $0$ and $3\,\mathrm{s}$ displacement is $3\,\mathrm{m}$ and distance is $5\,\mathrm{m}$. Direction reverses at $2\,\mathrm{s}$.*
:::

## Straight-line motion and free fall

:::teorema{#moti-rettilinei titolo="Constant acceleration and the model domain"}
In uniform straight-line motion $a_x=0$: velocity is constant and $x=x_0+v_0t$. With constant acceleration and $t=0$ at the initial instant, the rectangular area under $a_x(t)$ gives $v-v_0=at$. The trapezoidal area under $v(t)$ gives displacement:

$$
v=v_0+at,\qquad
x=x_0+v_0t+\dfrac12at^2.
$$
$$
x-x_0=\dfrac{v_0+v}{2}\,t,\qquad
v^2=v_0^2+2a(x-x_0).
$$

The last relation eliminates time, but squaring hides the direction of velocity: the positive square root gives a speed, not automatically a positive component. The average $\dfrac{v_0+v}{2}$ applies here because velocity changes linearly; it is not a general rule for arbitrary motion.
:::

:::osservazione
During braking with $v_0=12\,\mathrm{m/s}$ and $a=-3\,\mathrm{m/s^2}$, the results are $t=4\,\mathrm{s}$ and $s=24\,\mathrm{m}$. Extending $v=12-3t$ beyond stopping would describe motion restarting backwards: it would no longer represent braking that ends at rest. If a reaction time $t_r$ precedes braking, with constant velocity, add $v_0t_r$ to the stopping distance. Reaction time must not be included in the constant-deceleration phase.

**Free fall** is motion under gravity alone; it can include an upward phase. Near Earth's surface, for height changes small compared with Earth's radius, $g$ can be treated as uniform and air resistance neglected. With the vertical axis positive upwards, set $a_y=-g$, including during ascent. At the highest point of a vertical throw, $v_y=0$ momentarily, but $a_y=-g$ continues to change velocity. Mass does not appear in the position equations of this model. Differently shaped objects may instead fall differently in air because fluid resistance acts.
:::

## Motion in a plane and circular motion

:::teorema{#moti-nel-piano titolo="Independent components, shared time"}
For a projectile without air resistance, in a uniform vertical gravitational field, choose horizontal $x$ and upward $y$. The horizontal velocity component remains constant; the vertical component follows uniformly accelerated motion. Both components belong to the same body and must be evaluated at the **same instant**.

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

Eliminating $t$ gives a parabola if $v_x\ne0$. At the apex only $v_y$ vanishes: velocity remains horizontal. If launch and landing heights are equal, with launch above the horizontal, flight time and range are:

$$
T=\dfrac{2v_0\sin\theta}{g},\qquad
R=\dfrac{v_0^2\sin(2\theta)}{g}.
$$

Maximum range at $45^\circ$ and equal ranges for complementary angles hold under these assumptions. For a launch from a balcony, instead solve the vertical equation at landing height and select the physically admissible time.
:::

:::osservazione
In uniform circular motion, speed is constant, but the velocity vector rotates and is tangent to the circle. Period $T$ is the time for one revolution, while $\omega=\dfrac{2\pi}{T}$ is angular velocity, measured in radians per second.

$$
v=\dfrac{2\pi r}{T}=\omega r,\qquad
a_c=\dfrac{v^2}{r}=\omega^2r.
$$

Acceleration points towards the centre. At fixed radius, doubling speed quadruples $a_c$. The term **centripetal force** denotes the required radial resultant, $\dfrac{mv^2}{r}$: identify it among the actual forces, such as tension or friction. It is not an additional force to add to a free-body diagram. If speed changes, tangential acceleration is also present.

![Projectile parabola for 20 m/s at 30 degrees, apex at 5.10 m and range 35.31 m.](/figure/fisica-semestre-filtro/meccanica/proiettile-en.svg)

*The figure uses $g=9.81\,\mathrm{m/s^2}$ and equal launch and landing heights. At the apex $v_x$ remains nonzero.*

![Tangential velocity and radial acceleration on a circle of radius 0.80 m.](/figure/fisica-semestre-filtro/meccanica/circolare-en.svg)

*With $v=4\,\mathrm{m/s}$ and $r=0.80\,\mathrm{m}$, $a_c=20\,\mathrm{m/s^2}$. Velocity and acceleration arrows have different units: their lengths cannot be compared numerically.*
:::

## The laws of dynamics

:::teorema{#newton titolo="Newton and choosing the body"}
An **inertial** reference frame is one in which a body with no net interaction maintains its velocity. A terrestrial laboratory can often be approximated as inertial for short experiments over small distances; an accelerating lift cannot. Newton's three laws are used here in an inertial frame.

The first law states that zero resultant maintains constant velocity: no force is needed to sustain uniform straight-line motion. The second law relates the resultant to the acceleration of a constant mass:

$$
\sum\vec F=m\vec a,\qquad
\sum F_x=ma_x,\qquad \sum F_y=ma_y.
$$

The third law pairs every force of $A$ on $B$ with an equal and opposite force of $B$ on $A$. The pair acts on **different bodies**: its forces do not cancel in the equation for just one of them. A book's weight and the table's normal force on the book may balance, but are not an action–reaction pair. The reaction to weight is the book's gravitational attraction on Earth; the reaction to the normal force is the book's force on the table.
:::

:::osservazione
A free-body diagram contains all and only the forces applied to the selected body. A component is not an additional force: showing both $\vec F$ and its components helps with projection, but does not allow double counting. Axes can be aligned with an inclined plane to simplify the equations without changing the physics.

A body with zero resultant is in translational equilibrium; it remains at rest only if its initial velocity is zero. For an extended object this is insufficient to rule out rotation. Furthermore, an instant with $v=0$ does not imply equilibrium: a ball at the top of a throw still has weight and acceleration. For several bodies, their equations can be added to eliminate internal forces, but finding an internal tension requires returning to a subsystem.

![Forces on a block pulled at 30 degrees: pull 24 N, weight 39.24 N, normal 27.24 N.](/figure/fisica-semestre-filtro/meccanica/corpo-libero-en.svg)

*The $4\,\mathrm{kg}$ block stays on the frictionless floor: $N+F\sin30^\circ-mg=0$. The normal force does not equal weight. Arrow lengths are proportional to forces.*
:::

## Common forces

:::definizione{#forze titolo="Identifying interactions"}
Gravity attracts two point masses according to $F=\dfrac{Gm_1m_2}{r^2}$, with $G\simeq6.67\cdot10^{-11}\,\mathrm{N\,m^2/kg^2}$. The same relation holds outside spherically symmetric distributions, using the distance between centres. Doubling $r$ reduces the force to one quarter. Near Earth the local field is represented by $\vec g$, giving weight $\vec P=m\vec g$. Mass in kilograms is not weight in newtons: moving to another planet changes the latter, not the former.

The **normal force** is the contact force perpendicular to a surface. A non-adhesive support can push but cannot pull: $N\ge0$ is required. If a calculation imposing contact gives $N<0$, the constraint is unrealizable and the body separates. **Tension** in a taut flexible string pulls along the string. Equal tension at both ends requires negligible string mass; across a pulley, negligible pulley mass and friction are also assumed.

$$
|F_s|\le\mu_sN,\qquad |F_d|=\mu_dN,\qquad F_{\mathrm{el},x}=-kx.
$$

**Static friction** takes the value needed to prevent relative slipping, provided it does not exceed $\mu_sN$. It is not always at its maximum: with a horizontal push of $5\,\mathrm{N}$ and a threshold of $12\,\mathrm{N}$, it equals $5\,\mathrm{N}$. Equality at the threshold is still compatible with ideal equilibrium; exceeding it makes rest impossible. During sliding, the **kinetic friction** model uses magnitude $\mu_dN$, opposite to the relative velocity of the surfaces. The coefficients are dimensionless and the model is an approximation, not a law for every contact.

For an ideal spring, $x$ is algebraic extension from the natural length, not total length. The elastic force is restoring and $k$ is measured in $\mathrm{N/m}$. Hooke's law holds in the linear elastic regime. Two ideal springs in series carry the same force and add their extensions: $\dfrac{1}{k_{\mathrm{eq}}}=\dfrac1{k_1}+\dfrac1{k_2}$. In parallel they share the same extension and add their forces: $k_{\mathrm{eq}}=k_1+k_2$.
:::

:::osservazione
On a stationary plane inclined at $\theta$, with no other forces normal to the plane, $N=mg\cos\theta$ and the downslope weight component is $mg\sin\theta$. Rest is possible if $mg\sin\theta\le\mu_smg\cos\theta$, or $\tan\theta\le\mu_s$ for $0\le\theta<90^\circ$. When sliding down, acceleration is $g(\sin\theta-\mu_d\cos\theta)$: it may be negative if the body is descending but slowing down.

![Block on an incline with vertical weight, perpendicular normal force and upslope friction.](/figure/fisica-semestre-filtro/meccanica/piano-inclinato-en.svg)

*The friction shown opposes downward sliding or the tendency to slide down. If sliding were uphill, kinetic friction would reverse. The diagram shows directions, not magnitudes.*
:::

## Work, power and kinetic energy

:::teorema{#lavoro-energia titolo="From forces to changes in kinetic energy"}
Work measures energy transfer associated with a force during displacement of its point of application. For a particle under a constant force, $W=F\Delta r\cos\theta$: work is positive if the force assists displacement, negative if it opposes it and zero if it is perpendicular. For a variable force, infinitesimal contributions are added:

$$
W=\int_i^f\vec F\cdot d\vec r,\qquad
K=\dfrac12mv^2,\qquad W_{\mathrm{tot}}=K_f-K_i.
$$

On a straight line, work is the signed area under $F_x(x)$, not under $F_x(t)$: the latter gives impulse. The **work–kinetic energy theorem** uses the total work of all forces on the body. Indeed, $F_{\mathrm{tot},x}=ma_x$ and $a_x\,dx=v_x\,dv_x$ give, after integration, $W_{\mathrm{tot}}=\dfrac{m(v_f^2-v_i^2)}2$. Kinetic energy is a non-negative scalar; it depends on the reference frame because it depends on velocity.
:::

:::osservazione
With $F_x=(4\,\mathrm{N/m})x$ between $0$ and $3\,\mathrm{m}$, work equals the triangular area, $18\,\mathrm{J}$. Using only the final force over the whole distance would give $36\,\mathrm{J}$ and overestimate the transfer. One joule is one newton metre, $1\,\mathrm{J}=1\,\mathrm{N\,m}$. A negative energy result can represent work or an energy change, but cannot be a value of $K$.

**Power** measures how rapidly the transfer occurs:

$$
P_{\mathrm m}=\dfrac{W}{\Delta t},\qquad P=\vec F\cdot\vec v,\qquad
1\,\mathrm{W}=1\,\mathrm{J/s}.
$$

Average power does not determine the instantaneous peak. A constant force on an accelerating body can deliver increasing power. Holding a weight still performs zero mechanical work on the weight because the application point does not move; this does not imply zero metabolic consumption by muscles. Efficiency $\eta=\dfrac{E_{\mathrm{useful}}}{E_{\mathrm{in}}}$ compares energies expressed in the same units and allows input requirements to be found without confusing power with energy.

![Force–position graph increasing from zero to 12 N over 3 m; triangular area 18 J.](/figure/fisica-semestre-filtro/meccanica/lavoro-en.svg)

*Use the force component along the displacement to calculate the area. Here force grows linearly, so its spatial mean is $6\,\mathrm{N}$.*
:::

## Potential energy and conservation

:::teorema{#energia-meccanica titolo="Conservative work and the system balance"}
A force is **conservative** if its work between two positions does not depend on the path, equivalently if its work around every closed path is zero. A potential energy can then be defined such that $W_c=-\Delta U$. Potential energy is not work: a gravitational descent decreases $U$ and gives positive work by weight. The zero of $U$ is arbitrary; differences matter.

$$
U_g=mgy,\qquad U_e=\dfrac12kx^2,\qquad
E_{\mathrm{mecc}}=K+U.
$$
$$
\Delta(K+U)=W_{\mathrm{non\,cons}}.
$$

The first expression assumes uniform gravity and height $y$ measured from a chosen level. The second assumes a linear spring with zero energy at its natural length; equal amounts of compression and extension store equal energy. Gravitational potential energy belongs to the body–Earth interaction, while elastic potential energy belongs to the system including the spring. Abbreviated expressions assigned to the body implicitly include these systems.

The balance follows from $\Delta K=W_c+W_{\mathrm{non\,cons}}$ by substituting $W_c=-\Delta U$. If non-conservative work is zero, mechanical energy is conserved. This does not require all forces to vanish: gravity and elastic force can exchange potential and kinetic energy; the normal force of an ideal fixed guide does no work when perpendicular to motion.
:::

:::osservazione
For constant kinetic friction on a **stationary** surface, $W_d=-\mu_dNs$, with $s$ the length travelled. With a moving conveyor belt, friction can instead do positive work on the body: its direction depends on relative sliding, whereas work depends on the body's displacement in the selected frame. Do not automatically apply a minus sign to every friction problem.

During a descent with initial potential energy $30\,\mathrm{J}$, starting at rest and dissipating $10\,\mathrm{J}$, $20\,\mathrm{J}$ of kinetic energy remain at the bottom. Mechanical energy decreases, but including the internal energy of the body and plane preserves the total balance. An energy method can give speed at a height without finding the entire motion; by itself it does not give flight time, velocity direction or the validity of contact. These require additional equations and checks.

![Balance of 30 J: initial potential energy becomes 20 J kinetic and 10 J internal energy.](/figure/fisica-semestre-filtro/meccanica/energie-en.svg)

*Choose $U_g=0$ at the bottom. Bar heights are proportional to energies; the complete system includes body, Earth and plane.*
:::

## Impulse and momentum

:::teorema{#quantita-di-moto titolo="Forces over time and collisions"}
Momentum $\vec p=m\vec v$ is a vector, measured in $\mathrm{kg\,m/s}$. The sign of a component must be retained in a balance. Integrating Newton's second law over time gives the impulse–momentum theorem:

$$
\vec J_{\mathrm{ext}}=\int_{t_i}^{t_f}\vec F_{\mathrm{ext}}\,dt
=\Delta\vec p,\qquad
\vec F_{\mathrm m}=\dfrac{\vec J}{\Delta t}.
$$

The area under a force–time graph gives impulse even when force is not constant; $1\,\mathrm{N\,s}=1\,\mathrm{kg\,m/s}$. Average force is the force that, acting throughout the interval, produces the same impulse: in general it is not the maximum force. For a fixed momentum change, a longer time reduces the magnitude of average resultant force. If a contact force during a vertical collision is requested, the weight impulse must also be included: contact impulse is not automatically net impulse.

For a system of bodies, internal forces cancel in the sum by Newton's third law. Total momentum is conserved if external impulse is zero, or approximately conserved when that impulse is negligible during the interval considered. A single component can be conserved if external impulse vanishes only along that axis.
:::

:::osservazione
An **elastic** collision also conserves total kinetic energy; an inelastic collision can transform some of it into other forms. In a completely inelastic collision the bodies remain joined and share the same final velocity:

$$
v_f=\dfrac{m_1v_1+m_2v_2}{m_1+m_2}.
$$

This formula follows from momentum conservation, not kinetic-energy conservation. A ballistic pendulum requires two phases: during the brief collision, horizontal momentum of the projectile–block system is approximately conserved; during the subsequent rise without dissipation, mechanical energy is conserved. A single mechanical-energy balance from before the collision to the maximum height would ignore dissipation as the projectile becomes embedded.

![Triangular net-force pulse: base 0.10 s, height 100 N and area 5 N s.](/figure/fisica-semestre-filtro/meccanica/impulso-en.svg)

*Average force is $50\,\mathrm{N}$, half the maximum for this particular triangular profile. The area determines $\Delta p$, not directly $\Delta v$ unless mass is known.*
:::

## Centre of mass and systems of bodies

:::definizione{#centro-di-massa titolo="A mass-weighted position describing the system"}
For constant masses, the centre of mass is the mass-weighted mean of their positions. It need not coincide with the geometric centre and can lie where no matter is present, as at the centre of a uniform ring.

$$
\vec r_{\mathrm{CM}}=\dfrac{\sum_i m_i\vec r_i}{M},\qquad
M=\sum_i m_i.
$$
$$
\vec p_{\mathrm{tot}}=M\vec v_{\mathrm{CM}},\qquad
M\vec a_{\mathrm{CM}}=\sum\vec F_{\mathrm{ext}}.
$$

Differentiating the position gives the relation to total momentum; differentiating again and adding Newton's equations gives the acceleration law. Internal forces can change relative distances and velocities, but cannot by themselves accelerate the centre of mass of a closed system with constant mass. Overall motion can therefore be studied as that of a mass $M$ under the external resultant, without assuming that every part follows the same trajectory.
:::

:::osservazione
With $2\,\mathrm{kg}$ at $x=0$ and $1\,\mathrm{kg}$ at $x=3\,\mathrm{m}$, the result is $x_{\mathrm{CM}}=1\,\mathrm{m}$: the point is closer to the larger mass. A value outside the interval between two positive masses would indicate an error. The midpoint $1.5\,\mathrm{m}$ would be correct only for equal masses.

If external resultant force is zero, the centre of mass has constant velocity but is not necessarily at rest. Its position remains fixed only if initial momentum is zero. For a person walking on a free cart, the person and cart move in opposite directions, keeping the horizontal centre of mass fixed when the system starts at rest and horizontal external forces are negligible. The cart does not remain stationary in the ground frame: the person's travel relative to the cart differs from their displacement relative to the ground.

Momentum conservation does not imply kinetic-energy conservation: an internal spring can separate two initially stationary carts, producing opposite velocities and transforming elastic energy into kinetic energy.

![Two masses of 2 kg and 1 kg at 0 and 3 m; centre of mass at 1 m.](/figure/fisica-semestre-filtro/meccanica/centro-massa-en.svg)

*Distances from the centre of mass are $1\,\mathrm{m}$ and $2\,\mathrm{m}$: mass times distance is equal on either side.*
:::

## Rotational equilibrium and levers

:::teorema{#leve titolo="Forces, torques and rigid bodies"}
A **rigid body** maintains constant distances between its points; it can still translate and rotate. The model neglects deformation and is useful for studying levers and beams. Torque about a point $O$ is $\vec\tau=\vec r\times\vec F$, where $\vec r$ runs from the chosen point to the force's application point. Its magnitude is $Fb$, with $b=r\sin\theta$ the perpendicular distance from the line of action to the chosen point. The moment arm is not always the distance to the application point: a force directed towards the chosen point has zero torque even when applied far away.

In a plane, one may take anticlockwise torque as positive and clockwise torque as negative. Torque is measured in $\mathrm{N\,m}$; despite having the same dimensions as energy, it describes a rotational effect and is not interpreted as work. Static equilibrium of an initially stationary body requires both conditions:

$$
\sum\vec F=0,\qquad \sum\vec\tau_O=0.
$$

Two equal and opposite forces along distinct parallel lines have zero resultant but can form a couple with nonzero torque. Conversely, zero total torque does not guarantee translational equilibrium. Choosing the pivot at a hinge eliminates the torque of its reaction, not the reaction itself: it remains in the force equation.
:::

:::osservazione
For an ideal lever with two opposing torques, $F_1b_1=F_2b_2$. In a horizontal forearm model with negligible own weight, a $40\,\mathrm{N}$ load at $0.30\,\mathrm{m}$ from the elbow and a vertical muscle force at $0.05\,\mathrm{m}$ require $F_m=240\,\mathrm{N}$. Muscle force exceeds the load because its moment arm is smaller. Vertical equilibrium then gives $R_y=40-240=-200\,\mathrm{N}$: the joint reaction on the segment points downwards.

If the muscle is inclined, use either its perpendicular component or its perpendicular moment arm in the torque, without applying the sine factor twice. If forearm weight is included, it acts at its centre of mass and adds a torque. These are idealisations of a rigid segment with specified forces: they do not by themselves quantify clinical loads, contractions of several muscles or tissue deformation. The final check requires both zero force sum and zero torque sum, together with checking that reaction directions are allowed by the constraints.

![Horizontal lever: elbow at zero, muscle at 5 cm and load at 30 cm; joint reaction points downwards.](/figure/fisica-semestre-filtro/meccanica/leva-en.svg)

*Positions are to scale along the forearm; arrows are schematic. Muscle and load produce opposite torques about the elbow.*
:::
