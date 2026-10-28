---
titolo: Systems of particles, momentum and collisions
sommario: How momentum, impulse and the center of mass describe systems of several bodies, why the total momentum is conserved in the absence of external forces, and how this law, together with energy, solves collisions, explosions and the motion of a rocket.
---

## Momentum of a particle

:::definizione{#quantita-di-moto titolo="Momentum"}
Let $P$ be a particle of mass $m$ moving with velocity $\vec{v}$. The **momentum** of $P$ is the vector
$$
\vec{p} = m\,\vec{v} .
$$
It has the direction and the sense of the velocity and is measured in $\mathrm{kg\cdot m/s}$, a unit that coincides with $\mathrm{N\cdot s}$. Two bodies with the same velocity have momenta proportional to their masses; for example a car of $1200\,\mathrm{kg}$ at $15\,\mathrm{m/s}$ has $p = 1.8 \cdot 10^4\,\mathrm{kg\cdot m/s}$, a tennis ball of $0.058\,\mathrm{kg}$ at $30\,\mathrm{m/s}$ has $p \approx 1.7\,\mathrm{kg\cdot m/s}$. Momentum is the quantity that bodies exchange when they interact, and in collision problems it is the first one to be written.
:::

:::teorema{#secondo-principio-quantita-di-moto titolo="Newton's second law in terms of momentum"}
Newton's second law, which is an experimental law and for which we refer to the topic on Newton's laws, can be written in the form
$$
\vec{F} = \frac{d\vec{p}}{dt} ,
$$
where $\vec{F}$ is the resultant of the forces acting on the particle. If the mass is constant, then $\dfrac{d\vec{p}}{dt} = m\,\dfrac{d\vec{v}}{dt} = m\,\vec{a}$, so this form coincides with $\vec{F} = m\vec{a}$. The form with $\vec{p}$ states that the force measures the rate at which momentum changes, and from this form follow the impulse-momentum theorem and the equation of variable-mass systems. For example, if the momentum of a body increases uniformly by $6.0\,\mathrm{kg\cdot m/s}$ every $2.0\,\mathrm{s}$, the resultant force has magnitude $3.0\,\mathrm{N}$.
:::

## Impulse and the impulse-momentum theorem

:::definizione{#impulso titolo="Impulse of a force"}
Let $\vec{F}(t)$ be a force acting on a particle in the time interval $[t_1, t_2]$. The **impulse** of the force over the interval is the vector
$$
\vec{J} = \int_{t_1}^{t_2} \vec{F}(t)\,dt ,
$$
computed component by component. For a constant force the impulse is $\vec{J} = \vec{F}\,\Delta t$, with $\Delta t = t_2 - t_1$. If the force has a fixed direction, the magnitude of the impulse is the area under the graph of $F(t)$, and this makes it possible to compute it even when the force is known only at certain points or from a graph.

::grafico{f="3*sin(pi*min(max(x,0),4)/4)" area="3*sin(pi*x/4);0;0;4" segmenti="0,1.91,4,1.91;4,0,4,1.91" etichette="4.15,1.85,Fₘ" xmin=-0.3 xmax=5.2 ymin=-0.4 ymax=3.6 nomi="t,F" titolo="The impulse of the force $F(t) = F_{\max} \sin \dfrac{\pi t}{\tau}$, with $F_{\max} = 3\,\mathrm{kN}$ and $\tau = 4\,\mathrm{ms}$, is the shaded area $J = \dfrac{2 F_{\max} \tau}{\pi} \approx 7.6\,\mathrm{N\cdot s}$; the dashed rectangle with base $\tau$ and height $F_m \approx 1.9\,\mathrm{kN}$ has the same area"}

:::

::::teorema{#teorema-dell-impulso titolo="Impulse-momentum theorem"}
Let $\vec{F}(t)$ be the resultant of the forces acting on a particle in the interval $[t_1, t_2]$. Then the impulse of the resultant is equal to the change in momentum:
$$
\vec{J} = \vec{p}(t_2) - \vec{p}(t_1) = \Delta \vec{p} .
$$
The theorem relates a quantity that depends on the whole history of the force, the impulse, to a difference between two instants. It is used when the force is intense, brief and cannot be measured instant by instant, as in the stroke of a racket or in a collision with a wall; in these cases the impulse is obtained from the change in velocity, and from the impulse the average force.

:::dimostrazione
By Newton's second law in terms of momentum, at every instant $\vec{F}(t) = \dfrac{d\vec{p}}{dt}$. Integrating both sides between $t_1$ and $t_2$, component by component, and applying the **fundamental theorem of calculus** to the right-hand side, we obtain
$$
\int_{t_1}^{t_2} \vec{F}(t)\,dt = \int_{t_1}^{t_2} \frac{d\vec{p}}{dt}\,dt = \vec{p}(t_2) - \vec{p}(t_1) ,
$$
which is the claim.
:::
::::

:::richiamo{titolo="Fundamental theorem of calculus"}
If $g$ has a continuous derivative on $[a, b]$, then $\displaystyle\int_a^b g'(t)\,dt = g(b) - g(a)$. We refer to the topic on integrals in Mathematical Analysis 1.
:::

:::definizione{#forza-media titolo="Average force"}
The **average force** over the interval $[t_1, t_2]$ is the constant force that produces the same impulse over the same interval:
$$
\vec{F}_{m} = \frac{\vec{J}}{\Delta t} = \frac{\Delta \vec{p}}{\Delta t} .
$$
In the graph of $F(t)$ it is the height of the rectangle with base $\Delta t$ and the same area. For a given change in momentum, the average force is smaller the longer the contact time; for this reason an airbag or a foam mat reduces the force on the body that is being stopped.
:::

:::esempio{titolo="Tennis ball against a wall"}
A tennis ball of mass $m = 0.058\,\mathrm{kg}$ hits a wall perpendicularly with speed $30\,\mathrm{m/s}$ and bounces back at $25\,\mathrm{m/s}$; the contact lasts $\Delta t = 4.0\,\mathrm{ms}$. With the $x$ axis pointing from the wall outward, $v_1 = -30\,\mathrm{m/s}$ and $v_2 = 25\,\mathrm{m/s}$, therefore
$$
J_x = m\,(v_2 - v_1) = 0.058 \cdot 55\,\mathrm{kg\cdot m/s} \approx 3.2\,\mathrm{N\cdot s},
\qquad
F_m = \frac{J_x}{\Delta t} \approx 8.0 \cdot 10^{2}\,\mathrm{N} .
$$
The change in velocity is the sum of the two magnitudes, because the velocity reverses its sense. The average force of the wall is about $1400$ times the weight of the ball, which is $0.57\,\mathrm{N}$.
:::

:::osservazione{#forze-impulsive titolo="Impulsive forces"}
Forces that are very intense and act for a very short time, such as the contact forces in a collision, are called **impulsive**. During a small interval $\Delta t$, a force of bounded magnitude, such as weight or friction, produces an impulse of magnitude at most $F_{\max}\,\Delta t$, which tends to zero with $\Delta t$; impulsive forces instead produce a finite impulse. Therefore, over the interval of the collision, all non-impulsive forces can be neglected. In the example of the tennis ball, the impulse of the weight during contact is $0.57 \cdot 0.004\,\mathrm{N\cdot s} \approx 2 \cdot 10^{-3}\,\mathrm{N\cdot s}$, compared with $3.2\,\mathrm{N\cdot s}$ for the impulse of the wall.
:::

## Systems of particles and center of mass

:::definizione{#sistema-di-punti titolo="System of particles"}
A **system of particles** is a set of $N$ particles $P_1, \dots, P_N$ with masses $m_1, \dots, m_N$, positions $\vec{r}_i$ and velocities $\vec{v}_i$; the **total mass** is $M = m_1 + \dots + m_N$. The forces acting on the particle $P_i$ are divided into **internal forces**, exerted by the other particles of the system, and **external forces**, exerted by bodies that are not part of the system. The **total momentum** of the system is
$$
\vec{P} = \sum_{i=1}^{N} m_i\,\vec{v}_i .
$$
The division into internal and external depends on the choice of the system; for example, for two carts that collide, the force of one on the other is internal if the system consists of both, external if the system is a single cart.
:::

:::definizione{#centro-di-massa titolo="Center of mass"}
The **center of mass** of a system of particles is the point with position
$$
\vec{r}_{cm} = \frac{1}{M} \sum_{i=1}^{N} m_i\,\vec{r}_i ,
$$
that is, in components,
$$
x_{cm} = \frac{\sum_i m_i x_i}{M},
\qquad
y_{cm} = \frac{\sum_i m_i y_i}{M},
\qquad
z_{cm} = \frac{\sum_i m_i z_i}{M} .
$$
Each coordinate of the center of mass is the average of the coordinates of the particles, weighted by the masses; therefore the center of mass is closer to the particles of greater mass. For two particles on the $x$ axis the center of mass lies on the segment joining them and divides the segment into parts inversely proportional to the masses.

::grafico{punti="1,1,pieno,m₁ = 2 kg;5,1,pieno,m₂ = 1 kg;3,5,pieno,m₃ = 1 kg;2.5,2,vuoto,CM" segmenti="1,1,5,1;5,1,3,5;3,5,1,1" xmin=-0.6 xmax=6.4 ymin=-0.6 ymax=5.8 uguale=1 titolo="The center of mass of the masses $m_1 = 2\,\mathrm{kg}$ at $(1, 1)$, $m_2 = 1\,\mathrm{kg}$ at $(5, 1)$, $m_3 = 1\,\mathrm{kg}$ at $(3, 5)$ has $x_{cm} = \dfrac{2 + 5 + 3}{4} = 2.5\,\mathrm{m}$ and $y_{cm} = \dfrac{2 + 1 + 5}{4} = 2\,\mathrm{m}$, and is closer to the larger mass"}

:::

:::definizione{#centro-di-massa-corpi-continui titolo="Center of mass of a continuous body"}
For an extended body the sum becomes an integral. The body is divided into mass elements $dm$ and we set
$$
\vec{r}_{cm} = \frac{1}{M} \int \vec{r}\,dm .
$$
For a rod lying on the $x$ axis between $0$ and $L$, with linear density $\lambda(x)$, we have $dm = \lambda(x)\,dx$, therefore
$$
x_{cm} = \frac{\displaystyle\int_0^L x\,\lambda(x)\,dx}{\displaystyle\int_0^L \lambda(x)\,dx} .
$$
For a uniform rod, with constant $\lambda$, we get $x_{cm} = \dfrac{L}{2}$; for $\lambda(x) = kx$, with $k > 0$, the numerator is $\dfrac{kL^3}{3}$ and the denominator $\dfrac{kL^2}{2}$, therefore $x_{cm} = \dfrac{2L}{3}$, shifted toward the denser end. If a uniform body has a center or an axis of symmetry, the center of mass lies on it, since symmetric elements give opposite contributions to the coordinates measured from the center or from the axis; the center of mass of a uniform sphere, disk or rectangle is therefore the geometric center.
:::

::::teorema{#centro-di-massa-corpi-composti titolo="Center of mass of a composite body"}
Let a system be divided into two parts of masses $M_1$ and $M_2$, with centers of mass $\vec{r}_1$ and $\vec{r}_2$. Then the center of mass of the system is
$$
\vec{r}_{cm} = \frac{M_1\,\vec{r}_1 + M_2\,\vec{r}_2}{M_1 + M_2} ,
$$
that is, it is obtained by treating each part as a particle located at its center of mass. The rule holds for any number of parts and makes it possible to compute the center of mass of L-shaped plates, of bodies with holes (subtracting the missing part as a negative mass) and of systems made of rods and spheres.

::grafico{area="1;0;0;4|4;1;0;1" punti="2,0.5,pieno,C₁;0.5,2.5,pieno,C₂;1.357,1.357,vuoto,CM" segmenti="2,0.5,0.5,2.5" xmin=-0.6 xmax=4.6 ymin=-0.6 ymax=4.6 uguale=1 titolo="Uniform L-shaped plate made of a $4 \times 1$ rectangle (center $C_1$) and a $1 \times 3$ rectangle (center $C_2$): the center of mass lies on the segment $C_1C_2$ and has coordinates $x_{cm} = y_{cm} = \dfrac{4 \cdot 2 + 3 \cdot 0.5}{7} = \dfrac{19}{14}$"}

:::dimostrazione
Let $I_1$ and $I_2$ be the sets of indices of the particles of the two parts. By the definition of the center of mass of each part, $\sum_{i \in I_1} m_i\,\vec{r}_i = M_1\,\vec{r}_1$ and $\sum_{i \in I_2} m_i\,\vec{r}_i = M_2\,\vec{r}_2$. Splitting the sum that defines $\vec{r}_{cm}$ into the two parts we obtain
$$
\vec{r}_{cm} = \frac{1}{M_1 + M_2}\left( \sum_{i \in I_1} m_i\,\vec{r}_i + \sum_{i \in I_2} m_i\,\vec{r}_i \right) = \frac{M_1\,\vec{r}_1 + M_2\,\vec{r}_2}{M_1 + M_2} .
$$
For a continuous body the proof is the same, with the integrals over the two parts in place of the sums.
:::
::::

## Motion of the center of mass

::::teorema{#quantita-di-moto-del-sistema titolo="Total momentum and velocity of the center of mass"}
For a system of particles with constant total mass $M$, the velocity of the center of mass is $\vec{v}_{cm} = \dfrac{d\vec{r}_{cm}}{dt}$ and
$$
\vec{P} = M\,\vec{v}_{cm} .
$$
The total momentum of the system is therefore that of a single particle of mass $M$ moving with the center of mass. For two carts of $2.0\,\mathrm{kg}$ and $1.0\,\mathrm{kg}$ with velocities $3.0\,\mathrm{m/s}$ and $0$ we have $P = 6.0\,\mathrm{kg\cdot m/s}$, therefore $v_{cm} = 2.0\,\mathrm{m/s}$.

:::dimostrazione
The masses are constant, so differentiating with respect to time the definition $M\,\vec{r}_{cm} = \sum_i m_i\,\vec{r}_i$ we obtain $M\,\vec{v}_{cm} = \sum_i m_i\,\vec{v}_i = \vec{P}$.
:::
::::

::::teorema{#moto-del-centro-di-massa titolo="Center-of-mass theorem"}
Let a system of particles have constant total mass $M$ and let $\vec{F}_{\mathrm{est}}$ be the resultant of the external forces only. Then
$$
\frac{d\vec{P}}{dt} = \vec{F}_{\mathrm{est}},
\qquad\text{i.e.}\qquad
M\,\vec{a}_{cm} = \vec{F}_{\mathrm{est}} .
$$
This equation is the **first cardinal equation** of the dynamics of systems. The center of mass moves like a particle of mass $M$ acted on by the resultant of the external forces, whatever the internal forces are. For example, the center of mass of a projectile that explodes in flight keeps following the parabola it would have followed without the explosion, until a fragment touches the ground, because the forces of the explosion are internal and the resultant of the external forces remains the total weight $M\vec{g}$.

:::dimostrazione
Let $\vec{F}_i$ be the resultant of the external forces on $P_i$ and let $\vec{F}_{ij}$ be the force that particle $P_j$ exerts on $P_i$, with $j \neq i$. Newton's second law applied to particle $P_i$ gives
$$
m_i\,\vec{a}_i = \vec{F}_i + \sum_{j \neq i} \vec{F}_{ij} .
$$
Summing over all indices $i$ we obtain
$$
\sum_i m_i\,\vec{a}_i = \sum_i \vec{F}_i + \sum_i \sum_{j \neq i} \vec{F}_{ij} .
$$
In the double sum the internal forces appear in pairs $\vec{F}_{ij} + \vec{F}_{ji}$, and by **Newton's third law** $\vec{F}_{ji} = -\vec{F}_{ij}$, so each pair has zero sum and the double sum equals $\vec{0}$. The left-hand side is the derivative of $\sum_i m_i\,\vec{v}_i = \vec{P}$, and the first term on the right-hand side is $\vec{F}_{\mathrm{est}}$. Therefore $\dfrac{d\vec{P}}{dt} = \vec{F}_{\mathrm{est}}$, and since $\vec{P} = M\,\vec{v}_{cm}$ with $M$ constant, $M\,\vec{a}_{cm} = \vec{F}_{\mathrm{est}}$.
:::
::::

:::richiamo{titolo="Newton's third law"}
If body $A$ exerts on body $B$ the force $\vec{F}_{BA}$, then $B$ exerts on $A$ the force $\vec{F}_{AB} = -\vec{F}_{BA}$, with the same line of action. We refer to the topic on Newton's laws.
:::

:::esempio{titolo="Projectile exploding in flight"}
A projectile is launched from horizontal ground and, neglecting air resistance, its trajectory would reach the ground at distance $R$ from the launch point. At the highest point it explodes into two fragments of equal mass: the first, immediately after the explosion, has zero velocity and falls vertically, so it touches the ground at distance $\dfrac{R}{2}$. Immediately before the explosion the momentum is horizontal and is conserved, because the weight is not impulsive; since the first fragment is at rest, the second has a horizontal velocity. Therefore the two fragments fall from the same height with zero initial vertical velocity and touch the ground at the same instant. At that instant the center of mass, which follows the original parabola, is at distance $R$; since the masses are equal, $R = \dfrac{1}{2}\left(\dfrac{R}{2} + x_2\right)$, therefore the second fragment touches the ground at $x_2 = \dfrac{3R}{2}$.

::grafico{curve="t,t-t^2/20,0,10;t,t-t^2/20,10,20;t,5-(t-10)^2/80,10,30" vettori="10,5,10,0.15" punti="10,5,pieno;10,0,vuoto,A;20,0,vuoto,CM;30,0,vuoto,B" xmin=-0.5 xmax=33 ymin=-0.6 ymax=7 titolo="With $R = 20\,\mathrm{m}$ fragment $A$ falls vertically and touches the ground at $10\,\mathrm{m}$, fragment $B$ touches the ground at $30\,\mathrm{m}$, and the center of mass (dashed curve) continues along the parabola up to $20\,\mathrm{m}$, the midpoint between $A$ and $B$"}

:::

## Conservation of momentum

::::teorema{#conservazione-quantita-di-moto titolo="Conservation of momentum"}
Let a system of particles be such that the resultant of the external forces is zero at every instant of a time interval. Then over that interval the total momentum is constant:
$$
\vec{P} = \sum_i m_i\,\vec{v}_i = \text{constant},
\qquad
\vec{v}_{cm} = \text{constant} .
$$
A system on which no external forces act is called **isolated**, and conservation holds in particular for isolated systems. The law does not require knowledge of the internal forces, which in collisions and explosions are complicated and unknown; it is enough to equate the total momentum before and after the interaction. Internal forces can dissipate energy, therefore the total kinetic energy can change even when $\vec{P}$ is conserved.

:::dimostrazione
By the **center-of-mass theorem** $\dfrac{d\vec{P}}{dt} = \vec{F}_{\mathrm{est}} = \vec{0}$ at every instant of the interval. A vector function with zero derivative on an interval is constant, because each of its components is; therefore $\vec{P}$ is constant and, since $\vec{P} = M\,\vec{v}_{cm}$, $\vec{v}_{cm}$ is constant as well.
:::
::::

:::osservazione{#conservazione-per-componenti titolo="Conservation of a single component"}
If the resultant of the external forces has zero component along a fixed direction, for example $F_{\mathrm{est},x} = 0$, the first cardinal equation read along $x$ gives $\dfrac{dP_x}{dt} = 0$, so only the component $P_x$ is conserved. On a smooth horizontal plane, for example, the weight and the normal reaction are vertical, so the horizontal component of momentum is conserved, while the vertical one can change. Conservation also holds in approximate form during a collision or an explosion, because non-impulsive external forces, such as weight, produce a negligible impulse over that interval; therefore $\vec{P}$ immediately after is equal to $\vec{P}$ immediately before.
:::

:::esempio{titolo="Recoil"}
A rifle of mass $M = 4.0\,\mathrm{kg}$, free to move, fires a bullet of mass $m = 10\,\mathrm{g}$ horizontally at $v = 400\,\mathrm{m/s}$. Before the shot the system is at rest and the forces of the gases are internal, so the horizontal component of momentum remains zero: $m\,v + M\,V = 0$, from which
$$
V = -\frac{m}{M}\,v = -\frac{0.010}{4.0} \cdot 400\,\mathrm{m/s} = -1.0\,\mathrm{m/s} .
$$
The minus sign indicates that the rifle **recoils** in the sense opposite to the bullet, with a speed that is smaller the larger its mass.
:::

:::esempio{titolo="Person on a boat"}
A person of mass $m = 70\,\mathrm{kg}$ walks from one end to the other of a boat of mass $M = 140\,\mathrm{kg}$ and length $L = 3.0\,\mathrm{m}$, initially at rest; the horizontal resistance of the water is neglected. The external forces are vertical and the system starts from rest, so the center of mass stays at rest horizontally. If the boat moves by $d$ in one sense, the person moves by $L - d$ relative to the water in the opposite sense, and the position of the center of mass does not change if $m\,(L - d) - M\,d = 0$, that is
$$
d = \frac{m\,L}{m + M} = \frac{70 \cdot 3.0}{210}\,\mathrm{m} = 1.0\,\mathrm{m} .
$$
:::

## Collisions in one dimension

:::definizione{#urto titolo="Collision"}
A **collision** is an interaction between two bodies that lasts a very short time, during which the bodies exchange impulsive forces; it is assumed that the positions do not change during the collision. If the external forces are not impulsive, the total momentum immediately after the collision is equal to that immediately before, by the **conservation of momentum** in approximate form. Collisions with a fixed constraint, such as a wall or the floor, whose reaction is impulsive, are an exception. On the basis of kinetic energy, collisions are divided into three classes:

- **elastic**, if the total kinetic energy is conserved;
- **inelastic**, if the total kinetic energy decreases;
- **perfectly inelastic**, if after the collision the two bodies stay together and move with the same velocity.

The collision between two billiard balls is elastic to a good approximation; a bullet that embeds itself in a wooden block gives a perfectly inelastic collision.
:::

::::teorema{#urto-completamente-anelastico titolo="Perfectly inelastic collision"}
Two bodies of masses $m_1$ and $m_2$ move along a line with velocities $v_1$ and $v_2$ (signed components) and collide, sticking together, without impulsive external forces. Then the common velocity after the collision and the change in kinetic energy are
$$
V = \frac{m_1 v_1 + m_2 v_2}{m_1 + m_2},
\qquad
\Delta K = -\frac{1}{2}\,\frac{m_1 m_2}{m_1 + m_2}\,(v_1 - v_2)^2 .
$$
The velocity $V$ is the velocity of the center of mass, which the collision leaves unchanged. The kinetic energy always decreases, except in the case $v_1 = v_2$ in which there is no collision, and the loss depends only on the relative velocity. For $m_1 = 2.0\,\mathrm{kg}$ at $3.0\,\mathrm{m/s}$ against $m_2 = 1.0\,\mathrm{kg}$ at rest we obtain $V = 2.0\,\mathrm{m/s}$, and the kinetic energy goes from $9.0\,\mathrm{J}$ to $6.0\,\mathrm{J}$, with $\Delta K = -3.0\,\mathrm{J}$.

:::dimostrazione
Conservation of momentum gives $m_1 v_1 + m_2 v_2 = (m_1 + m_2)\,V$, from which the first formula follows. For the second, $V$ is substituted into the final energy:
$$
\begin{aligned}
\Delta K &= \frac{(m_1 v_1 + m_2 v_2)^2}{2\,(m_1 + m_2)} - \frac{1}{2}\,m_1 v_1^2 - \frac{1}{2}\,m_2 v_2^2 \\[6pt]
&= \frac{m_1^2 v_1^2 + 2 m_1 m_2 v_1 v_2 + m_2^2 v_2^2 - (m_1 + m_2)(m_1 v_1^2 + m_2 v_2^2)}{2\,(m_1 + m_2)} \\[6pt]
&= \frac{-m_1 m_2\,(v_1^2 - 2 v_1 v_2 + v_2^2)}{2\,(m_1 + m_2)} = -\frac{1}{2}\,\frac{m_1 m_2}{m_1 + m_2}\,(v_1 - v_2)^2 .
\end{aligned}
$$
:::
::::

::::teorema{#pendolo-balistico titolo="Ballistic pendulum"}
A bullet of mass $m$ and horizontal velocity $v$ embeds itself in a block of mass $M$ hanging from inextensible strings of negligible mass, at rest in the equilibrium position; after the collision the block with the bullet rises to a maximum height $h$ above the initial position. Then, neglecting air friction,
$$
v = \frac{m + M}{m}\,\sqrt{2 g h} .
$$
The ballistic pendulum measures large speeds, such as that of a bullet, through a height of a few centimeters. With $m = 10\,\mathrm{g}$, $M = 2.0\,\mathrm{kg}$ and $h = 5.0\,\mathrm{cm}$ we obtain $v \approx 2.0 \cdot 10^{2}\,\mathrm{m/s}$; the kinetic energy remaining after the collision is the fraction $\dfrac{m}{m + M} \approx 0.5\,\%$ of that of the bullet.

::grafico{curve="1+2.4*t,4.5-3.2*t,0,1;1+4*sin(t),4.5-4*cos(t),0,0.6435" vettori="-1.6,0.5,0.6,0.5,v" segmenti="1,4.5,1,0.5;1,0.5,3.4,0.5;3.4,0.5,3.4,1.3" punti="1,4.5,vuoto;1,0.5,pieno;3.4,1.3,pieno" etichette="3.55,0.8,h;1.15,0.05,M" xmin=-2 xmax=4.6 ymin=-0.4 ymax=5 uguale=1 titolo="The bullet embeds itself in the block at rest (perfectly inelastic collision), then the system rises along the dashed arc up to height $h$ (conservation of mechanical energy)"}

:::dimostrazione
The motion is divided into two phases governed by different laws. During the collision the strings are vertical, so the external forces, that is the weights and the tensions, have no horizontal component, and the horizontal component of momentum is conserved: $m v = (m + M)\,V$. Since the collision is **perfectly inelastic**, in this phase mechanical energy is *not* conserved. After the collision the tension is perpendicular to the velocity and does no work, and the only force that does work is the weight, which is conservative; therefore mechanical energy is conserved: $\dfrac{1}{2}\,(m + M)\,V^2 = (m + M)\,g h$, from which $V = \sqrt{2 g h}$. Substituting into the first relation we obtain $v = \dfrac{m + M}{m}\,\sqrt{2 g h}$.
:::
::::

:::richiamo{titolo="Conservation of mechanical energy"}
If the only forces that do work are conservative, then $K + U$ is constant during the motion. We refer to the topic on work and energy.
:::

::::teorema{#urto-elastico titolo="Elastic collision in one dimension"}
Two bodies of masses $m_1$ and $m_2$ move along a line with velocities $v_1$ and $v_2$ and collide elastically, without impulsive external forces. Then the velocities after the collision are
$$
v_1' = \frac{(m_1 - m_2)\,v_1 + 2 m_2 v_2}{m_1 + m_2},
\qquad
v_2' = \frac{(m_2 - m_1)\,v_2 + 2 m_1 v_1}{m_1 + m_2} ,
$$
and the relative velocity changes sign: $v_2' - v_1' = -(v_2 - v_1)$. The formulas give the final velocities directly; the relation on the relative velocity, together with conservation of momentum, forms a linear system that is simpler to solve by hand. For $m_1 = 1.0\,\mathrm{kg}$ at $3.0\,\mathrm{m/s}$ against $m_2 = 2.0\,\mathrm{kg}$ at rest we obtain $v_1' = -1.0\,\mathrm{m/s}$ and $v_2' = 2.0\,\mathrm{m/s}$.

::grafico{f="min(3*x,8-x);x+4;max(6,2*x+2)" punti="2,6,pieno" etichette="4.7,2.0,body 1;3.9,11.2,body 2;4.9,8.0,CM" xmin=-0.3 xmax=5.6 ymin=-0.6 ymax=14 nomi="t,x" titolo="Position-time graphs in the elastic collision between $m_1 = 1\,\mathrm{kg}$ with $v_1 = 3\,\mathrm{m/s}$ and $m_2 = 2\,\mathrm{kg}$ at rest at $x = 6\,\mathrm{m}$; after the collision $v_1' = -1\,\mathrm{m/s}$ and $v_2' = 2\,\mathrm{m/s}$, while the center of mass (dashed line) moves with constant velocity $v_{cm} = 1\,\mathrm{m/s}$"}

:::dimostrazione
Conservation of momentum and conservation of kinetic energy, after grouping the terms of each body, are written
$$
\begin{cases}
m_1\,(v_1 - v_1') = m_2\,(v_2' - v_2) \\[6pt]
m_1\,(v_1 - v_1')(v_1 + v_1') = m_2\,(v_2' - v_2)(v_2' + v_2)
\end{cases}
$$
where the second equation is obtained by multiplying by $2$ the conservation of kinetic energy, which becomes $m_1 v_1^2 + m_2 v_2^2 = m_1 v_1'^2 + m_2 v_2'^2$, and factoring the differences of squares. The solution $v_1' = v_1$, $v_2' = v_2$ corresponds to no collision and is discarded; therefore $v_1' \neq v_1$, the left-hand side of the first equation is nonzero and the second equation can be divided by the first, giving $v_1 + v_1' = v_2' + v_2$, that is $v_2' - v_1' = -(v_2 - v_1)$. Solving for $v_2' = v_1 + v_1' - v_2$ and substituting into the first equation we obtain $(m_1 + m_2)\,v_1' = (m_1 - m_2)\,v_1 + 2 m_2 v_2$, which is the formula for $v_1'$; that for $v_2'$ follows by exchanging the indices.
:::
::::

:::osservazione{#casi-particolari-urto-elastico titolo="Special cases of the elastic collision"}
With the second body at rest, $v_2 = 0$, the formulas give $v_1' = \dfrac{m_1 - m_2}{m_1 + m_2}\,v_1$ and $v_2' = \dfrac{2 m_1}{m_1 + m_2}\,v_1$, and three situations can be distinguished.

- Equal masses: $v_1' = 0$ and $v_2' = v_1$, so the bodies exchange velocities, as in the balls of Newton's cradle.
- Much heavier target, $m_2 \gg m_1$: $v_1' \approx -v_1$ and $v_2' \approx 0$, so the light body bounces back with almost unchanged speed, like a ball against a wall.
- Much heavier projectile, $m_1 \gg m_2$: $v_1' \approx v_1$ and $v_2' \approx 2 v_1$, so the heavy body continues almost undisturbed and the light one moves off with almost twice the speed.
:::

:::osservazione{#coefficiente-di-restituzione titolo="Coefficient of restitution"}
For a collision along a line the **coefficient of restitution** is defined as
$$
e = -\frac{v_2' - v_1'}{v_2 - v_1} ,
$$
the ratio between the relative velocity of separation and that of approach. It equals $e = 1$ in elastic collisions, by the relation on the relative velocity, and $e = 0$ in perfectly inelastic collisions, because $v_1' = v_2'$; inelastic collisions have $0 < e < 1$. For a ball hitting the floor at rest we have $e = \dfrac{v'}{v}$, the ratio between the speeds after and before the collision; if the ball falls from a height $h$ and bounces up to $h'$, conservation of mechanical energy during the flight gives $e = \sqrt{\dfrac{h'}{h}}$.
:::

## Collisions in two dimensions

:::osservazione{#urti-nel-piano titolo="Collisions in the plane"}
When the velocities do not lie on the same line, conservation of momentum is an equality between vectors, and in the plane it is equivalent to two scalar equations:
$$
\begin{cases}
m_1 v_{1x} + m_2 v_{2x} = m_1 v_{1x}' + m_2 v_{2x}' \\[6pt]
m_1 v_{1y} + m_2 v_{2y} = m_1 v_{1y}' + m_2 v_{2y}'
\end{cases}
$$
In a perfectly inelastic collision the unknowns are the two components of the common velocity, so the system determines them. In an elastic collision the unknowns are four, the components of $\vec{v}_1'$ and of $\vec{v}_2'$, while the equations are three, the two components of momentum and conservation of kinetic energy; therefore one more piece of data is needed, usually the direction of one of the two bodies after the collision, which depends on the point where the bodies touch.
:::

::::teorema{#urto-elastico-masse-uguali titolo="Oblique elastic collision between equal masses"}
A body of mass $m$ with velocity $\vec{v}_1$ collides elastically with a body of equal mass at rest, without impulsive external forces. Then, if after the collision both bodies are moving, their velocities are perpendicular:
$$
\vec{v}_1' \cdot \vec{v}_2' = 0 .
$$
The velocities $\vec{v}_1'$ and $\vec{v}_2'$ are therefore the legs of a right triangle with hypotenuse $\vec{v}_1$. If the first body is deflected by an angle $\theta$, then $v_1' = v_1 \cos\theta$ and $v_2' = v_1 \sin\theta$, and the second body moves off at an angle $\dfrac{\pi}{2} - \theta$ on the other side of the initial direction. Billiard balls after a glancing shot separate at a right angle to a good approximation.

::grafico{vettori="0,0,4,0,v₁;0,0,1,1.732,v₁';0,0,3,-1.732,v₂'" segmenti="1,1.732,4,0" xmin=-0.6 xmax=4.8 ymin=-2.2 ymax=2.4 uguale=1 titolo="With $v_1 = 4\,\mathrm{m/s}$ and deflection $\theta = 60^\circ$ we have $v_1' = 2\,\mathrm{m/s}$ and $v_2' = 2\sqrt{3}\,\mathrm{m/s}$ at $30^\circ$ on the other side; the dashed segment is $\vec{v}_2'$ applied at the tip of $\vec{v}_1'$, and $\vec{v}_1' + \vec{v}_2' = \vec{v}_1$"}

:::dimostrazione
The masses are equal, so dividing by $m$ the conservation of momentum and that of kinetic energy we obtain
$$
\begin{cases}
\vec{v}_1 = \vec{v}_1' + \vec{v}_2' \\[6pt]
v_1^2 = v_1'^2 + v_2'^2
\end{cases}
$$
Taking the dot product of the first equation with itself we have $v_1^2 = v_1'^2 + v_2'^2 + 2\,\vec{v}_1' \cdot \vec{v}_2'$, and comparing with the second equation we obtain $\vec{v}_1' \cdot \vec{v}_2' = 0$. Since the two vectors are nonzero, they are perpendicular.
:::
::::

## König's theorem

:::definizione{#sistema-del-centro-di-massa titolo="Center-of-mass frame"}
The **center-of-mass frame** is the reference frame with origin at the center of mass and axes parallel to those of an inertial frame; it moves in translational motion with velocity $\vec{v}_{cm}$. By the Galilean transformations, for which we refer to the topic on motion in the plane, the velocity of particle $P_i$ in this frame is
$$
\vec{v}_i^{\,*} = \vec{v}_i - \vec{v}_{cm} .
$$
In the center-of-mass frame the total momentum is zero, since $\sum_i m_i\,\vec{v}_i^{\,*} = \vec{P} - M\,\vec{v}_{cm} = \vec{0}$. For this reason collisions are described simply in the center-of-mass frame; in particular, in an elastic collision in one dimension each body reverses its velocity $\vec{v}_i^{\,*}$ without changing its magnitude.
:::

::::teorema{#teorema-di-konig titolo="König's theorem for kinetic energy"}
Let a system of particles have total mass $M$, with center of mass moving with velocity $\vec{v}_{cm}$. Then the kinetic energy of the system is
$$
K = \frac{1}{2}\,M v_{cm}^2 + K^{*},
\qquad
K^{*} = \sum_i \frac{1}{2}\,m_i\,(v_i^{*})^2 ,
$$
where $K^{*}$ is the kinetic energy computed in the center-of-mass frame. The kinetic energy splits into a part due to the overall motion, as if all the mass were concentrated at the center of mass, and a part due to the motion relative to the center of mass. The theorem is also used for the rigid body, where $K^{*}$ is the rotational kinetic energy, and we refer to the topic on rigid-body dynamics.

:::dimostrazione
We substitute $\vec{v}_i = \vec{v}_{cm} + \vec{v}_i^{\,*}$ into $K = \sum_i \dfrac{1}{2}\,m_i\,\vec{v}_i \cdot \vec{v}_i$ and expand the dot product:
$$
\begin{aligned}
K &= \sum_i \frac{1}{2}\,m_i\,\big( v_{cm}^2 + 2\,\vec{v}_{cm} \cdot \vec{v}_i^{\,*} + (v_i^{*})^2 \big) \\[6pt]
&= \frac{1}{2}\,M v_{cm}^2 + \vec{v}_{cm} \cdot \sum_i m_i\,\vec{v}_i^{\,*} + K^{*} .
\end{aligned}
$$
The sum $\sum_i m_i\,\vec{v}_i^{\,*}$ is the total momentum in the center-of-mass frame, which is zero, so the middle term vanishes and the claim remains.
:::
::::

:::osservazione{#energia-disponibile-negli-urti titolo="Energy that can be dissipated in a collision"}
In a collision without impulsive external forces $\vec{v}_{cm}$ does not change, so by König's theorem the term $\dfrac{1}{2}\,M v_{cm}^2$ is the same before and after the collision, and the collision can change only $K^{*}$. In the perfectly inelastic collision the bodies stay together and at rest relative to the center of mass, so $K^{*}$ after the collision is zero; therefore the dissipated energy is the whole initial $K^{*}$, and it is the maximum possible loss. For two bodies we obtain
$$
K^{*} = \frac{1}{2}\,\mu\,(v_1 - v_2)^2,
\qquad
\mu = \frac{m_1 m_2}{m_1 + m_2} ,
$$
where $\mu$ is called the **reduced mass**; the formula coincides with the energy loss of the perfectly inelastic collision. For $m_1 = 1.0\,\mathrm{kg}$ at $3.0\,\mathrm{m/s}$ and $m_2 = 2.0\,\mathrm{kg}$ at rest we have $K = 4.5\,\mathrm{J}$, $v_{cm} = 1.0\,\mathrm{m/s}$ and $\dfrac{1}{2}\,M v_{cm}^2 = 1.5\,\mathrm{J}$, therefore $K^{*} = 3.0\,\mathrm{J}$.
:::

## Variable-mass systems and the rocket

::::teorema{#sistemi-a-massa-variabile titolo="Equation of variable-mass systems"}
A body of mass $M(t)$ moves with velocity $\vec{v}$ and in each interval $dt$ gains or loses the mass $|dM|$, which has velocity $\vec{u}$ relative to the body. Let $\vec{F}_{\mathrm{est}}$ be the resultant of the external forces on the body. Then
$$
M\,\frac{d\vec{v}}{dt} = \vec{F}_{\mathrm{est}} + \vec{u}\,\frac{dM}{dt} .
$$
The term $\vec{u}\,\dfrac{dM}{dt}$ has the dimensions of a force and is called **thrust**. In a rocket the gases leave backward with relative speed $u$, while $\dfrac{dM}{dt} < 0$, so the thrust points forward and has magnitude $u\,\left|\dfrac{dM}{dt}\right|$. A wagon that receives sand falling vertically has $\dfrac{dM}{dt} > 0$ and $\vec{u} = -\vec{v}$, so to keep it at constant velocity an external force $\vec{v}\,\dfrac{dM}{dt}$ is needed.

:::dimostrazione
We apply the **impulse-momentum theorem** to the system formed by the body and the mass $|dM|$ exchanged in the interval $dt$; the forces between the body and that mass are internal. In the case where the body gains mass ($dM > 0$), at time $t$ the momentum of the system is $M\vec{v} + dM\,(\vec{v} + \vec{u})$, at time $t + dt$ it is $(M + dM)(\vec{v} + d\vec{v})$. Neglecting the product $dM\,d\vec{v}$, which is an infinitesimal of higher order, the change is
$$
(M + dM)(\vec{v} + d\vec{v}) - M\vec{v} - dM\,(\vec{v} + \vec{u}) = M\,d\vec{v} - \vec{u}\,dM ,
$$
and by the impulse-momentum theorem it is equal to $\vec{F}_{\mathrm{est}}\,dt$. In the case where the body loses mass ($dM < 0$), at time $t$ the momentum is $M\vec{v}$ and at time $t + dt$ it is $(M + dM)(\vec{v} + d\vec{v}) + (-dM)(\vec{v} + \vec{u})$, and the change has the same expression $M\,d\vec{v} - \vec{u}\,dM$. In both cases, dividing by $dt$, we obtain the claim.
:::
::::

::::teorema{#equazione-del-razzo titolo="Rocket equation"}
A rocket expels gas with relative velocity of constant magnitude $u$, directed opposite to the motion, and is not subject to external forces. Then, if the mass goes from $M_i$ to $M_f$, the velocity goes from $v_i$ to
$$
v_f = v_i + u \ln \frac{M_i}{M_f} .
$$
The increase in velocity depends only on the exhaust velocity and on the mass ratio, and the required ratio grows exponentially with the required velocity, since $\dfrac{M_i}{M_f} = \exp\left(\dfrac{v_f - v_i}{u}\right)$. With $u = 2.5\,\mathrm{km/s}$ and $\dfrac{M_i}{M_f} = 4$ we obtain $v_f - v_i = 2.5 \ln 4\,\mathrm{km/s} \approx 3.5\,\mathrm{km/s}$; to double this value the mass ratio must go from $4$ to $16$. In the presence of weight, for a vertical launch the term $-g\,t$ is added, where $t$ is the burn time.

:::dimostrazione
Along the direction of motion, the **equation of variable-mass systems** with $\vec{F}_{\mathrm{est}} = \vec{0}$ and $u_x = -u$ gives $M\,\dfrac{dv}{dt} = -u\,\dfrac{dM}{dt}$. Dividing by $M$ and integrating in time from the initial to the final instant we obtain
$$
v_f - v_i = -u \int_{M_i}^{M_f} \frac{dM}{M} = -u\,(\ln M_f - \ln M_i) = u \ln \frac{M_i}{M_f} .
$$
:::
::::

:::richiamo{titolo="Integral of a function and change of variable"}
An antiderivative of $\dfrac{1}{x}$ for $x > 0$ is $\ln x$; moreover, with the change of variable $M = M(t)$, we have $\displaystyle\int_{t_1}^{t_2} \frac{1}{M(t)}\,\frac{dM}{dt}\,dt = \int_{M(t_1)}^{M(t_2)} \frac{dM}{M}$. We refer to the topic on integrals in Mathematical Analysis 1.
:::
