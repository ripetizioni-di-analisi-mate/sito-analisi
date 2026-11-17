---
titolo: Work, energy and power
sommario: Signed work, mechanical energy balances, friction, power and efficiency.
---

## Work done by a constant force

:::definizione{#lavoro titolo="Component along the displacement"}
Consider a constant force $\vec F$ acting while its point of application moves by $\Delta\vec r$. **Work** measures the energy transferred by that force during the displacement. Let $s=|\Delta\vec r|$ be the displacement magnitude and let $\theta$ be the angle between the vectors. Then
$$
W=\vec F\cdot\Delta\vec r=(F\cos\theta)s .
$$
The component $F_s=F\cos\theta$ is signed. Work is positive for an acute angle, negative for an obtuse angle and zero at $\theta=90^\circ$. Even a large force does zero work when its point of application is stationary. Work is a scalar measured in joules, with $1\,\mathrm J=1\,\mathrm{N\cdot m}$.

When several forces act, add their individual work contributions or project the net force onto the displacement first. The two procedures agree because the dot product is distributive. On a stationary horizontal surface, for instance, weight and the normal force are perpendicular to horizontal displacement. They enter the vertical force balance and may determine friction, while they do zero work directly.
:::

:::esempio{titolo="An inclined pull with horizontal resistance"}
A rope pulls a crate with $20\,\mathrm N$ at $60^\circ$ above the horizontal. The crate moves $4\,\mathrm m$ to the right and friction has magnitude $6\,\mathrm N$. The pull along the displacement is $20\cos 60^\circ=10\,\mathrm N$. It follows that
$$
W_{\mathrm{net}}=10\cdot4\,\mathrm J-6\cdot4\,\mathrm J=16\,\mathrm J.
$$
The positive net work means the crate gains kinetic energy. The $40\,\mathrm J$ supplied by the pull exceeds the $24\,\mathrm J$ transferred through its interaction with the surface.

::grafico{assi=0 uguale=1 vettori="0,0,4,0,s;0,0,1.7,2.944,F;0,0,-1,0,f" xmin=-2 xmax=5 ymin=-1 ymax=4 titolo="The pull makes a $60^\circ$ angle with the displacement"}
:::

## Work on a force–position graph

:::osservazione{#lavoro-variabile titolo="Area under the force–position graph"}
If the component $F_x$ varies along a straight path, the work over a short segment is approximately $F_x\,\Delta x$. Adding these contributions in the limit of finer intervals gives the **signed area** between the graph of $F_x$ and the position axis. For motion towards increasing $x$, regions above the axis count positively and regions below it count negatively. Traversing the same interval in reverse changes the sign of the work for the same force law $F_x(x)$.

The horizontal coordinate is position. The area under a force–time graph represents impulse, because its units are $\mathrm{N\cdot s}$ rather than $\mathrm{N\cdot m}$. On a piecewise linear $F_x$–$x$ graph, add triangles, rectangles and trapezia. The rectangular regions correspond to intervals with constant force.
:::

:::esempio{titolo="Regions of opposite signs"}
From $0$ to $2\,\mathrm m$ the force increases linearly from zero to $6\,\mathrm N$. From $2$ to $4\,\mathrm m$ it is $-1\,\mathrm N$. The triangle has area $2\cdot6/2\,\mathrm J=6\,\mathrm J$. The rectangle contributes $-1\cdot2\,\mathrm J=-2\,\mathrm J$. The algebraic sum is therefore $4\,\mathrm J$. A sudden change in force at $x=2\,\mathrm m$ adds no work because it occurs at a single position.

::grafico{linee="0,0 2,6;2,-1 4,-1" area="3*x;0;0;2|-1;0;2;4" punti="2,6,pieno;4,-1,pieno" xmin=0 xmax=5 ymin=-3 ymax=7 nomi="x (m),F_x (N)" titolo="The triangle contributes $+6\,\mathrm J$ and the rectangle $-2\,\mathrm J$"}
:::

## Kinetic energy

:::teorema{#energia-cinetica titolo="Work–kinetic energy theorem"}
In an inertial frame, the kinetic energy of a particle of constant mass is $K=\dfrac12mv^2$, where $v$ is its speed. The work done by the net force between two positions is
$$
W_{\mathrm{tot}}=K_f-K_i.
$$
For a constant force along an axis, choose the same positive direction for force, displacement and velocity. Newton's equation gives $W_{\mathrm{tot}}=ma\Delta x$. The law $v_f^2-v_i^2=2a\Delta x$ then gives $ma\Delta x=\dfrac12m(v_f^2-v_i^2)$. For variable forces, apply this reasoning to short intervals. When the contributions are added, the intermediate energy changes cancel.

A moving body has positive kinetic energy, whose value depends on the frame used to measure velocity. Velocities of equal magnitude and opposite direction give the same $K$. Zero net work means the initial and final speed are equal. The direction may change, as in a constant-speed turn, where the net force is perpendicular to the velocity at each instant.
:::

:::esempio{titolo="Stopping with a constant force"}
A $4\,\mathrm{kg}$ cart moves at $5\,\mathrm{m/s}$ and a $10\,\mathrm N$ resisting force brings it to rest. Its initial energy is $\dfrac12\cdot4\cdot5^2\,\mathrm J=50\,\mathrm J$ and its final energy is zero. The resisting work is $-10d$ joules when $d$ is measured in metres, so $-10d=-50$ gives $d=5\,\mathrm m$. Doubling the speed quadruples the stopping distance if the mass and force stay the same. The prediction no longer applies if the resisting force changes during braking.

::grafico{f="2*x^2" punti="5,50,pieno,A;0,0,pieno,B" xmin=0 xmax=6 ymin=0 ymax=74 nomi="v (m/s),K (J)" titolo="For this cart $K=2v^2$ in SI units"}
:::

## Conservative forces and potential energy

:::definizione{#potenziale titolo="Energy associated with configuration"}
A force is **conservative** if its work between two configurations depends only on the endpoints. Assign a potential energy $U$ to the configurations using $W_c=-\Delta U$. On a closed path the configurations coincide, so $\Delta U=0$ and the total work of the conservative force is zero. Changing the zero level shifts every value of $U$ by the same amount and leaves its work unchanged.

Near Earth's surface, gravity is approximately uniform. For the body–Earth system use $U_g=mgh$, where $h$ is the height relative to the chosen level. As the body rises, $U_g$ increases and weight does negative work. As it descends, $U_g$ decreases and weight does positive work. This formula is valid over paths much shorter than Earth's radius. The gravitational potential beyond that approximation is covered in gravitation.

An ideal spring exerts $F_x=-kx$, where $x$ is the signed deformation relative to its natural length. The work done by the spring from $x=0$ to $x=d$ is $-\dfrac12 kd^2$. Hence $U_e=\dfrac12 kx^2$ with zero at the natural length. An extension and compression of equal magnitude store the same energy because the deformation is squared. Their elastic forces have opposite signs.
:::

:::esempio{titolo="From compression to extension"}
For $k=200\,\mathrm{N/m}$, the configurations $x=-0.10\,\mathrm m$ and $x=+0.10\,\mathrm m$ both have elastic energy $1\,\mathrm J$. The spring first supplies $1\,\mathrm J$ as it returns to its natural length and then receives $1\,\mathrm J$ as it stretches. The overall work done by the spring is zero even though the potential energy changes over each segment.

::grafico{f="100*x^2" punti="-0.1,1,pieno,A;0.1,1,pieno,B" xmin=-0.18 xmax=0.18 ymin=0 ymax=3.5 nomi="x (m),U_e (J)" titolo="The two deformations store the same elastic energy"}
:::

## Conservation and dissipation

:::teorema{#bilancio-energia titolo="Mechanical energy balance"}
For a system described by $K$ and the chosen potential energies, the **mechanical energy** is $E=K+U$. Splitting the total work into conservative work and the remaining work gives
$$
\Delta K=W_c+W_{\mathrm{nc}},
\qquad
\Delta(K+U)=W_{\mathrm{nc}}.
$$
Choose the system and the configurations first, then decide which interactions belong in $U$. Count each force once. If gravity is already in $U_g$, adding the work done by weight to the right-hand side would count the same transfer twice. If the remaining work sums to zero, $E_i=E_f$. For an object that starts from rest and descends without friction, the balance gives $\dfrac12mv^2=mgh$. The mass cancels and $v=\sqrt{2gh}$.

Kinetic friction on a stationary surface dissipates mechanical energy. On a horizontal surface, with weight and the normal force as the only vertical forces, $N=mg$ and the frictional work is $W_{\mathrm{attr}}=-\mu_dmg\,s$. On a path with several segments, use the length and normal force appropriate to each segment. On an inclined surface, when no other force has a perpendicular component, $N=mg\cos\alpha$. Nonconservative work can be positive, as with a person pushing a crate. The criterion is the sum of all remaining contributions.
:::

:::esempio{titolo="A path with a dissipative segment"}
A $2\,\mathrm{kg}$ cart starts from rest and drops through $3\,\mathrm m$ without friction. On a later horizontal segment, friction does $-12\,\mathrm J$ of work. Taking $g=9.81\,\mathrm{m/s^2}$, the descent supplies $58.86\,\mathrm J$. After the horizontal segment, $46.86\,\mathrm J$ of kinetic energy remain, so $v=\sqrt{46.86}\,\mathrm{m/s}\simeq6.85\,\mathrm{m/s}$. If the stated resisting work exceeded $58.86\,\mathrm J$, the cart would stop before the final point. A negative radicand would show that this point is unreachable under the model.

::grafico{linee="0,3 3,0 6,0" punti="0,3,pieno,A;3,0,pieno,B;6,0,pieno,C" xmin=-.6 xmax=6.7 ymin=-.8 ymax=3.9 nomi="s,h (m)" titolo="The descent from A to B precedes the dissipative segment from B to C. Horizontal position is schematic"}
:::

## Power and efficiency

:::definizione{#potenza titolo="Rate of energy transfer"}
The **average power** of a transfer is $P_m=\dfrac{W}{\Delta t}$. The instantaneous power of a force is the dot product $P=\vec F\cdot\vec v$, because over a short interval $\Delta\vec r\simeq\vec v\,\Delta t$. Its sign depends on the component of force along the velocity. A resisting force acting on a moving body supplies negative mechanical power. A watt is a joule per second. A kilowatt-hour is an energy unit because it multiplies a power by a time, and equals $3.6\cdot10^6\,\mathrm J$.

**Efficiency** compares the useful output with the input energy over the same interval. In $\eta=\dfrac{E_{\mathrm{utile}}}{E_{\mathrm{fornita}}}$, the numerator includes the transfers classed as useful. For a machine in steady operation, the ratio of average powers can be used because the two averages refer to the same time. An efficiency of $80\%$ means the useful output is $0.80$ times the received energy. When the useful output is known, divide it by $0.80$ to find the input energy.
:::

:::esempio{titolo="Power required during ascent"}
A hoist raises a $50\,\mathrm{kg}$ mass at constant speed through $8\,\mathrm m$ in $10\,\mathrm s$. Taking $g=9.81\,\mathrm{m/s^2}$, useful work is $3924\,\mathrm J$ and useful average power is $392.4\,\mathrm W$. With an overall efficiency of $0.75$, the input power must be $523.2\,\mathrm W$. The difference of $130.8\,\mathrm W$ is the power that does not contribute to raising the mass. If there were an acceleration phase, the kinetic energy change would be an additional term.
:::
