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

:::esempio{#trazione-inversa titolo="Finding the tension from the work balance"}
A sled travels $6\,\mathrm m$ horizontally. Its rope makes a $60^\circ$ angle and the constant resistance is $4\,\mathrm N$. For the total work to be $36\,\mathrm J$, the work of the tension must offset the resistance and leave the required $36\,\mathrm J$. The resistance does $-24\,\mathrm J$ of work, so the tension must do $60\,\mathrm J$.
$$
F\cos60^\circ=\dfrac{60\,\mathrm J}{6\,\mathrm m}=10\,\mathrm N,\qquad F=20\,\mathrm N.
$$
The balance gives the horizontal force first. Finding the tension magnitude also requires the angle. A tension perpendicular to the displacement could never produce the specified balance, regardless of its magnitude.

For a constant force, adding the work on several segments gives the same result as using the displacement between endpoints. In the diagram, the first rightward leg and the final leftward leg cancel over three metres. The net displacement has components $(1,3)\,\mathrm m$. The distance travelled instead determines the work of a resistance that always opposes motion.

::grafico{assi=0 uguale=1 vettori="0,0,4,0;4,0,4,3;4,3,1,3" segmenti="0,0,1,3" punti="0,0,pieno,A;1,3,pieno,B" xmin=-.52 xmax=4.51 ymin=-.50 ymax=3.56 titolo="The dashed line joins endpoints A and B. Adding the segment displacements gives this vector."}
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

:::esempio{#lavoro-accumulato titolo="Where the accumulated work returns to zero"}
A slider travels from $x=0$ to $x=6\,\mathrm m$. The force along its axis follows $F_x=(6-2x)\,\mathrm N$, where $x$ is given numerically in metres. The force is zero at $x=3\,\mathrm m$. Up to that point the accumulated work increases by $9\,\mathrm J$, because the graph forms a triangle with a base of $3\,\mathrm m$ and a height of $6\,\mathrm N$. An equal triangle lies below the axis over the rest of the path. At the end, the net work is zero. The zero of the force corresponds to a maximum of the accumulated work. The work itself returns to zero where the two areas cancel.

::grafico{linee="0,6 6,-6" area="6-2*x;0;0;3|0;6-2*x;3;6" punti="0,6,pieno;3,0,pieno;6,-6,pieno" xmin=0 xmax=7 ymin=-7 ymax=8 nomi="x (m),F_x (N)" titolo="The accumulated work increases up to 3 m and returns to zero at 6 m"}

The area rule works for other pairs of quantities. The unit obtained by multiplying the ordinate and abscissa units identifies what is being accumulated.

| Graph | Area unit | Quantity |
| --- | --- | --- |
| $F_x$ versus $x$ | $\mathrm{N\,m}$ | Work |
| $F_x$ versus $t$ | $\mathrm{N\,s}$ | Impulse |
| $P$ versus $t$ | $\mathrm{W\,s}$ | Energy transferred |
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

:::esempio{#frenata-parziale titolo="Stopping halfway through a braking distance"}
A constant resistance would bring a body to rest after $12\,\mathrm m$. After the body travels $6\,\mathrm m$, the resistance has done half as much work as it will have done at a full stop. Half of the initial kinetic energy therefore remains. The theorem gives
$$
\dfrac{K}{K_i}=\dfrac{1}{2},\qquad \dfrac{v}{v_i}=\dfrac{1}{\sqrt 2}.
$$
Half of the stopping distance still remains, but the speed is about seventy per cent of its initial value. Take a square root to move from a fraction of energy to a fraction of speed. The result requires neither the force nor the mass, as long as the resistance stays constant along the path.

::grafico{curve="t,1-t/12,0,12;t,sqrt(1-t/12),0,12" punti="6,.5,pieno;6,.707107,pieno" segmenti="6,0,6,.707107" xmin=0 xmax=13 ymin=0 ymax=1.15 nomi="s (m),fraction" legenda="K/K_i;v/v_i" titolo="Halfway through braking, half the kinetic energy remains. The speed is about 71% of its initial value."}
:::

## Conservative forces and potential energy

:::definizione{#potenziale titolo="Energy associated with configuration"}
A force is **conservative** if its work between two configurations depends only on the endpoints. Assign a potential energy $U$ to the configurations using $W_c=-\Delta U$. On a closed path the configurations coincide, so $\Delta U=0$ and the total work of the conservative force is zero. Changing the zero level shifts every value of $U$ by the same amount and leaves its work unchanged.

Near Earth's surface, gravity is approximately uniform. For the body–Earth system use $U_g=mgh$, where $h$ is the height relative to the chosen level. As the body rises, $U_g$ increases and weight does negative work. As it descends, $U_g$ decreases and weight does positive work. This formula is valid over paths much shorter than Earth's radius. The gravitational potential beyond that approximation is covered in gravitation.

An ideal spring exerts $F_x=-kx$, where $x$ is the signed deformation relative to its natural length. The work done by the spring from $x=0$ to $x=d$ is $-\dfrac12 kd^2$. Hence $U_e=\dfrac12 kx^2$ with zero at the natural length. An extension and compression of equal magnitude store the same energy because the deformation is squared. Their elastic forces have opposite signs.
:::

:::esempio{titolo="From compression to extension"}
For $k=200\,\mathrm{N/m}$, the configurations $x=-0.10\,\mathrm m$ and $x=+0.10\,\mathrm m$ both have elastic energy $1\,\mathrm J$. The spring first supplies $1\,\mathrm J$ as it returns to its natural length and then receives $1\,\mathrm J$ as it stretches. The overall work done by the spring is zero even though the potential energy changes over each segment.

::grafico{f=".01*x^2" punti="-10,1,pieno,A;10,1,pieno,B" xmin=-18 xmax=18 ymin=0 ymax=3.5 nomi="x (cm),Uₑ (J)" titolo="The two deformations store the same elastic energy"}
:::

:::osservazione{#molla-verticale titolo="Equilibrium position of a vertical spring"}
For a mass suspended from a spring, take the extension $x$ as positive downwards and set gravitational potential energy to zero at the spring's natural length. The total potential energy is
$$
U=\dfrac{1}{2}kx^2-mgx
  =\dfrac{1}{2}k\left(x-\dfrac{mg}{k}\right)^2-\dfrac{(mg)^2}{2k}.
$$
The minimum occurs at $x=\dfrac{mg}{k}$, where the elastic force balances the weight. Configurations equally far from this point have the same total potential energy. In calculations, the minimum can serve as the zero of total potential energy. The difference in energy between configurations is unchanged because the subtracted constant appears in both the initial and the final state.

With $k=200\,\mathrm{N/m}$, mass $3\,\mathrm{kg}$ and $g=10\,\mathrm{m/s^2}$, equilibrium occurs at $15\,\mathrm{cm}$. At $5\,\mathrm{cm}$ and $25\,\mathrm{cm}$ the potential is the same, $-1.25\,\mathrm J$ relative to zero at the natural length.

::grafico{f=".01*x^2-.3*x" punti="5,-1.25,pieno;15,-2.25,pieno,E;25,-1.25,pieno" segmenti="5,-1.25,25,-1.25;15,0,15,-2.25" xmin=0 xmax=34 ymin=-2.75 ymax=2 nomi="x (cm),U (J)" titolo="The total potential has its minimum at E, below the natural length. Points equally far from E have the same energy."}
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

:::esempio{#contorno-sistema titolo="Friction, system boundaries and thermal energy"}
A skate starts with $50\,\mathrm J$ of kinetic energy and finishes a horizontal stretch with $32\,\mathrm J$. If the skate alone is treated as a point mass, the work–energy theorem assigns $-18\,\mathrm J$ of work to the net force. If friction from the track is the force responsible, the work done by friction has that value. If the system includes the skate and track, and exchanges with the surroundings are negligible, the mechanical loss of $18\,\mathrm J$ corresponds to an increase in the internal energy of the whole system. The energy balance determines the total increase. How much each body warms up depends on the contact and the materials.
:::

:::esempio{#vincolo-guida titolo="Energy and contact on a circular track"}
A particle starts at rest at height $H$ relative to the bottom of a circular track of radius $R$, running on the inside of the fixed, frictionless track. At the top, both the normal force and weight point towards the centre. At the contact limit the normal force is zero, so $\dfrac{v^2}{R}=g$. Energy balance from release to the top gives $gH=2gR+\dfrac{v^2}{2}$ and hence $H_{\rm min}=\dfrac{5R}{2}$. During the loop, speed is lowest at the top and the inward component of weight is greatest there. The top therefore sets the contact requirement. Energy gives the speed, while the radial force equation checks whether the track can exert the required force.

::grafico{assi=0 uguale=1 linee="-3,2.5 -2.65,2.5;-1.08,0 0,0" curve="-2.65+1.57*t,2.5*(1-3*t^2+2*t^3),0,1;cos(t),1+sin(t),0,6.283185" segmenti="-3,0,-.15,0;-2.95,0,-2.95,2.5;0,1,1,1" vettori="0,2,0,1.39,mg" punti="-2.65,2.5,pieno,A;0,2,pieno;0,0,pieno" etichette="-2.85,1.52,H;.44,1.08,R" xmin=-3.45 xmax=1.45 ymin=-.28 ymax=2.88 titolo="At the contact limit, only weight acts radially at the top. Heights are measured from the bottom of the track."}
:::

## Power and efficiency

:::definizione{#potenza titolo="Rate of energy transfer"}
The **average power** of a transfer is $P_m=\dfrac{W}{\Delta t}$. The instantaneous power of a force is the dot product $P=\vec F\cdot\vec v$, because over a short interval $\Delta\vec r\simeq\vec v\,\Delta t$. Its sign depends on the component of force along the velocity. A resisting force acting on a moving body supplies negative mechanical power. A watt is a joule per second. A kilowatt-hour is an energy unit because it multiplies a power by a time, and equals $3.6\cdot10^6\,\mathrm J$.

**Efficiency** compares the useful output with the input energy over the same interval. In $\eta=\dfrac{E_{\mathrm{utile}}}{E_{\mathrm{fornita}}}$, the numerator includes the transfers classed as useful. For a machine in steady operation, the ratio of average powers can be used because the two averages refer to the same time. An efficiency of $80\%$ means the useful output is $0.80$ times the received energy. When the useful output is known, divide it by $0.80$ to find the input energy.
:::

:::esempio{titolo="Power required during ascent"}
A hoist raises a $50\,\mathrm{kg}$ mass at constant speed through $8\,\mathrm m$ in $10\,\mathrm s$. Taking $g=9.81\,\mathrm{m/s^2}$, useful work is $3924\,\mathrm J$ and useful average power is $392.4\,\mathrm W$. With an overall efficiency of $0.75$, the input power must be $523.2\,\mathrm W$. The difference of $130.8\,\mathrm W$ is the power that does not contribute to raising the mass. If there were an acceleration phase, the kinetic energy change would be an additional term.
:::

:::esempio{#potenza-ciclo titolo="Average power over the phases of a cycle"}
A machine delivers $300\,\mathrm W$ for $4\,\mathrm s$ and then stops for $6\,\mathrm s$, with no useful transfer during the pause. The useful work over the cycle is $1200\,\mathrm J$. Average power must be calculated over the full ten seconds.
$$
P_m=\dfrac{300\cdot4\,\mathrm J}{10\,\mathrm s}=120\,\mathrm W.
$$
A machine delivering a constant $120\,\mathrm W$ would supply the same energy after one cycle. During the first four seconds, however, it would supply less useful energy. Equal average powers therefore imply equal energy transfers between the endpoints of the averaging interval.

::grafico{linee="0,300 4,300;4,0 10,0" area="300;0;0;4" segmenti="0,120,10,120;4,0,4,300" xmin=0 xmax=11 ymin=0 ymax=330 nomi="t (s),P (W)" titolo="The area of the rectangle up to 4 s equals the area for 120 W over all 10 s."}
:::
