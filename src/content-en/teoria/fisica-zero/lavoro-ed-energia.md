---
titolo: "Work, energy, and power"
sommario: "Work done by forces, energy due to motion and position, conservation of mechanical energy, power, and efficiency, with numerical examples and the conditions under which each relation applies."
---

## Work done by a force

:::definizione{#lavoro titolo="Work done by a constant force"}
A force can transfer energy to a body during a displacement. **Work** measures this transfer and is denoted by $W$. Consider a body moving in a straight line and a constant force parallel to its displacement. If the force points in the direction of the displacement, the work it does is
$$
W=Fs,
$$
where $F$ is the magnitude of the force and $s$ is the distance traveled. If the force points in the opposite direction, the work is $W=-Fs$.

Work is measured in **joules**, with the symbol $\mathrm{J}$. One joule is the work done by a force of one newton acting over one meter in the direction of the displacement, so
$$
1\,\mathrm{J}=1\,\mathrm{N\cdot m}.
$$
For example, a horizontal force of $12\,\mathrm{N}$ that pulls a box through $3\,\mathrm{m}$ in the same direction does work equal to $W=12\cdot3=36\,\mathrm{J}$. The time taken does not enter this calculation.

::grafico{assi=0 uguale=1 poligoni="0,0 1,0 1,1 0,1" linee="-0.5,0 5,0" vettori="1,0.5,3,0.5,F;0,-0.7,4,-0.7,s" xmin=-1 xmax=5.5 ymin=-1.5 ymax=2 titolo="The force and the displacement point in the same direction, so the force does positive work."}
:::

:::osservazione{#lavoro-nullo titolo="Forces perpendicular to the displacement"}
A force perpendicular to the displacement does zero work. For example, as a box slides on a horizontal surface, its weight acts vertically, so the work it does is $W_P=0$. The normal force exerted by the surface also does zero work.

If the point where a force is applied remains at rest throughout the interval, the force does zero work. A person holding a suitcase still does zero mechanical work on it while it remains at rest, even though the person's body uses energy.
:::

:::definizione{#lavoro-totale titolo="Net work"}
The **net work**, denoted by $W_{\mathrm{tot}}$, is the sum of the work done by all the forces acting on the body. Each contribution enters the sum with its own sign.

If a driving force does $50\,\mathrm{J}$ of work and friction does $-20\,\mathrm{J}$, while gravity and the normal force do zero work, then
$$
W_{\mathrm{tot}}=50\,\mathrm{J}-20\,\mathrm{J}=30\,\mathrm{J}.
$$
This sum tells us the combined effect of the forces on the motion.
:::

## Energy of motion

:::definizione{#energia-cinetica titolo="Kinetic energy"}
A moving body has **kinetic energy**. For a body of mass $m$ modeled as a particle moving at speed $v$, the kinetic energy is
$$
K=\frac{1}{2}mv^2.
$$
The symbol $v^2$ denotes the product $v\cdot v$. With mass in kilograms and speed in meters per second, the energy is in joules. The value of $K$ is positive when the body moves and zero when the body is at rest in the chosen frame of reference.

A mass of $2\,\mathrm{kg}$ moving at $3\,\mathrm{m/s}$ has kinetic energy
$$
K=\frac{1}{2}\cdot2\cdot3^2\,\mathrm{J}=9\,\mathrm{J}.
$$
At a speed of $6\,\mathrm{m/s}$ the same mass has $K=36\,\mathrm{J}$. Since the speed is squared, doubling it multiplies the kinetic energy by four.

::grafico{f="x^2" xmin=0 xmax=6 ymin=0 ymax=40 nomi="v,K" punti="3,9;6,36" legenda="K=v^2" titolo="Kinetic energy of a mass of $2\,\mathrm{kg}$, with $v$ in $\mathrm{m/s}$ and $K$ in joules."}
:::

## Work and changes in speed

::::teorema{#teorema-energia-cinetica titolo="The work–energy theorem"}
In an inertial frame of reference, the net work done by the forces on a particle of constant mass equals the change in its kinetic energy,
$$
W_{\mathrm{tot}}=K_f-K_i.
$$
The subscripts $i$ and $f$ denote the initial and final values, respectively. Positive net work increases the speed, and negative net work decreases it. If $W_{\mathrm{tot}}=0$, the final kinetic energy equals the initial kinetic energy.

:::dimostrazione
For motion in a straight line under a constant net force, we combine Newton's second law with the equation for motion at constant acceleration. Taking the axis along the motion and considering the motion before any reversal, we have
$$
F_{\mathrm{tot}}=ma,
\qquad v_f^2-v_i^2=2as.
$$
Multiplying the second relation by $\dfrac{m}{2}$ gives
$$
\frac{1}{2}mv_f^2-\frac{1}{2}mv_i^2=mas=F_{\mathrm{tot}}s.
$$
The product on the right is the net work, so the stated equality holds. This derivation applies to motion in a straight line under a constant net force. The theorem also holds in more general situations.
:::
::::

:::esempio{titolo="Work required to stop a moving body"}
A cart of mass $4\,\mathrm{kg}$ moves at $5\,\mathrm{m/s}$. Its initial energy is $K_i=\dfrac{1}{2}\cdot4\cdot25=50\,\mathrm{J}$. When it stops, $K_f=0$, so
$$
W_{\mathrm{tot}}=0-50\,\mathrm{J}=-50\,\mathrm{J}.
$$
The negative sign indicates a decrease in kinetic energy. The initial and final speeds are all we need to calculate the net work. We do not need to know how long braking takes.
:::

## Gravitational potential energy

:::definizione{#energia-potenziale titolo="Gravitational potential energy"}
Near Earth's surface, where the acceleration due to gravity $g$ is taken to be constant, a body at a given height has energy associated with its position relative to Earth. Once we choose a level at which to set the energy to zero, the **gravitational potential energy** is
$$
U=mgh,
$$
where $h$ is the height measured upward from that level. We use $g=9.81\,\mathrm{m/s^2}$ unless otherwise specified. This potential energy is associated with the interaction between the body and Earth.

For example, if the floor is the zero level, a mass of $2\,\mathrm{kg}$ at a height of $3\,\mathrm{m}$ has
$$
U=2\cdot9.81\cdot3\,\mathrm{J}=58.86\,\mathrm{J}.
$$
Choosing a different zero level changes the value of $U$, while the energy difference between two positions stays the same. If the body is below the chosen level, its height and its potential energy are negative.
:::

:::teorema{#lavoro-del-peso titolo="Work done by gravity and change in height"}
If a body of mass $m$ moves from height $h_i$ to height $h_f$ in a region where $g$ is constant, the work done by gravity is
$$
W_P=mg(h_i-h_f)=U_i-U_f.
$$
On the way down, $h_i>h_f$, so gravity does positive work. On the way up, it does negative work. The result depends on the difference in height between the initial and final positions.

For example, a mass of $2\,\mathrm{kg}$ that descends from $3\,\mathrm{m}$ to $1\,\mathrm{m}$ loses $39.24\,\mathrm{J}$ of potential energy. Gravity therefore does $+39.24\,\mathrm{J}$ of work.

::grafico{assi=0 uguale=1 linee="-0.5,0 4,0;0,1 2,1;0,3 2,3" punti="1,3,pieno,A;1,1,pieno,B" vettori="2.8,3,2.8,1,P" etichette="0.3,3.4,hᵢ = 3 m;0.3,1.4,hᶠ = 1 m;2.7,0.4,h = 0" xmin=-1 xmax=4.5 ymin=-0.5 ymax=4 titolo="The work done by gravity during the descent depends on the difference in height, which is $2\,\mathrm{m}$."}
:::

## Energy of a spring

::::teorema{#energia-elastica titolo="Elastic potential energy"}
An ideal spring used within its elastic limit exerts a restoring force of magnitude $F_e=kx$. The symbol $k$ denotes the spring constant, and $x$ is the magnitude of the extension or compression from the spring's natural length. The elastic potential energy, which is zero at the natural length, is
$$
U_e=\frac{1}{2}kx^2.
$$
This energy can be transferred to a body as the spring relaxes. For $k=100\,\mathrm{N/m}$ and $x=0.20\,\mathrm{m}$, we get $U_e=2\,\mathrm{J}$.

:::dimostrazione
As the deformation increases slowly from zero to $x$, the external force that balances the spring force increases linearly from zero to $kx$. The work is the area of the triangle under the force–extension graph, so
$$
W=\frac{\text{base}\cdot\text{height}}{2}
=\frac{x\cdot kx}{2}
=\frac{1}{2}kx^2.
$$
If there is no dissipation and the speed is negligible, this work increases the spring's elastic potential energy.
:::
::::

:::esempio{titolo="Area of the triangle and work"}
In the ideal model, if a spring with $k=2\,\mathrm{N/m}$ is slowly deformed by $3\,\mathrm{m}$, the final force is $6\,\mathrm{N}$. The area of the triangle is $\dfrac{3\cdot6}{2}=9\,\mathrm{J}$. Using the final force over the entire displacement would give $18\,\mathrm{J}$, whereas the force increases gradually.

::grafico{f="2*x" area="2*x;0;0;3" xmin=0 xmax=4 ymin=0 ymax=8 nomi="x,F" punti="3,6" legenda="F=2x" titolo="In the ideal model, $x$ is in meters and $F$ is in newtons. The shaded area represents $9\,\mathrm{J}$ of work."}
:::

## Conservation of mechanical energy

::::teorema{#conservazione titolo="Conservation of mechanical energy"}
The sum of kinetic and potential energy is called **mechanical energy** and is denoted by $E=K+U$. When only gravity and ideal spring forces do work, mechanical energy is conserved,
$$
K_i+U_i=K_f+U_f.
$$
The sum $U$ includes all the potential energies in the problem. Any other forces present must do zero work, as does the normal force from a fixed, smooth track.

:::dimostrazione
For these forces, the net work equals the decrease in potential energy, $W_{\mathrm{tot}}=U_i-U_f$. The work–energy theorem also gives $W_{\mathrm{tot}}=K_f-K_i$. Equating the two expressions gives
$$
K_f-K_i=U_i-U_f.
$$
Adding $K_i+U_f$ to both sides gives the equation for conservation of mechanical energy.
:::
::::

:::esempio{titolo="Falling from rest"}
A body falls from rest through $5\,\mathrm{m}$ with negligible air resistance. We take the final height as the zero level for potential energy and use $g=10\,\mathrm{m/s^2}$ in this example. Conservation of energy gives
$$
mg h=\frac{1}{2}mv_f^2,
\qquad v_f=\sqrt{2gh}=\sqrt{100}\,\mathrm{m/s}=10\,\mathrm{m/s}.
$$
The mass cancels because it appears on both sides. The positive root gives the speed. The motion is downward.
:::

## Friction and energy transformations

:::teorema{#dissipazione titolo="Work done by friction"}
On a stationary surface, a kinetic friction force of constant magnitude $f$ opposes sliding. Over a straight path of length $s$, its work is
$$
W_a=-fs.
$$
If friction is the only force that does work besides gravity and spring forces, then
$$
E_f-E_i=W_a.
$$
Therefore, the mechanical energy decreases. Energy transferred to the body and the surface through friction increases their internal energy. When this transformation is included, the overall energy balance still holds.

A body that initially has $40\,\mathrm{J}$ of mechanical energy and on which friction does $-12\,\mathrm{J}$ of work ends up with $E_f=28\,\mathrm{J}$.
:::

## Power and efficiency

:::definizione{#potenza titolo="Average power"}
**Average power** measures the energy transferred per unit time. If a motor does work $W$ in a time interval $\Delta t$, its average mechanical power is
$$
P_m=\frac{W}{\Delta t}.
$$
The unit is the **watt**, with the symbol $\mathrm{W}$, and $1\,\mathrm{W}=1\,\mathrm{J/s}$. The letter $W$ used for work denotes a quantity. The symbol $\mathrm{W}$ after a number denotes the unit of power.

A hoist that does $600\,\mathrm{J}$ of work in $3\,\mathrm{s}$ delivers $P_m=200\,\mathrm{W}$. If it does the same work in $6\,\mathrm{s}$, its average power is $100\,\mathrm{W}$. The energy transferred is the same in both cases, but the time taken differs.
:::

:::definizione{#rendimento titolo="Efficiency"}
A machine receives energy $E_{\mathrm{ass}}$ and transfers a portion $E_{\mathrm{utile}}$ in the desired form. The **efficiency** is
$$
\eta=\frac{E_{\mathrm{utile}}}{E_{\mathrm{ass}}}.
$$
The Greek letter $\eta$ is read as “eta.” The ratio has no units and can also be expressed as a percentage. For a machine whose stored energy does not change, $0\leq\eta\leq1$. A value of $1$ represents the ideal case in which all the input energy goes into the chosen useful output.

If a machine takes in $500\,\mathrm{J}$ and delivers $350\,\mathrm{J}$ of useful energy, its efficiency is $\eta=0.70=70\%$. The remaining $150\,\mathrm{J}$ is transferred in other forms. For average powers measured over the same interval, we also have $\eta=\dfrac{P_{\mathrm{utile}}}{P_{\mathrm{ass}}}$.
:::
