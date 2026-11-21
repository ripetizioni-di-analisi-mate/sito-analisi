---
titolo: Work, energy and power
sommario: Signed work, mechanical energy balances, friction, power and efficiency.
---

## Work done by a constant force

:::definizione{#lavoro titolo="Component along the displacement"}
The **work** done by a force is the energy the force transfers while its **point of application**, that is, the point of the body on which the force acts, moves. Consider a constant force $\vec F$, that is, one whose magnitude, direction and sense do not change during the motion (the **magnitude** of a vector is its size; for a force it is measured in newtons). The displacement of the point of application is the vector $\Delta\vec r$ from the initial position to the final one (the Greek letter $\Delta$, "delta", denotes a change). Let $s=|\Delta\vec r|$ be the displacement magnitude and let $\theta$ ("theta") be the angle between the two vectors. Then the work is
$$
W=\vec F\cdot\Delta\vec r=(F\cos\theta)s .
$$
The symbol $\vec F\cdot\Delta\vec r$ denotes the **dot product** of the two vectors, that is, the product of their magnitudes and the cosine of the angle between them. The factor $F_s=F\cos\theta$ is the **component** of the force along the displacement, that is, the projection of $\vec F$ onto the line of the displacement, taken with a sign. The sign is that of the cosine:
- for an acute angle ($\theta<90^\circ$) the cosine is positive, so the work is positive;
- for an obtuse angle ($90^\circ<\theta\le180^\circ$) the cosine is negative, so the work is negative;
- for $\theta=90^\circ$ the cosine is zero, so the work is zero.

If the point of application stays still, $s=0$ and the work is zero even for a large force. Work is a **scalar**, that is, a signed number with no direction, and it is measured in joules ($\mathrm J$), with $1\,\mathrm J=1\,\mathrm{N\cdot m}$; one joule is the work done by a force of one newton over a displacement of one metre in the same direction and sense.

If force and displacement are given by their components along two perpendicular axes, $\vec F=(F_x,F_y)$ and $\Delta\vec r=(\Delta x,\Delta y)$, the dot product is the sum of the products of corresponding components, $W=F_x\Delta x+F_y\Delta y$. For example, with $\vec F=(6,2)\,\mathrm N$ and $\Delta\vec r=(3,-1)\,\mathrm m$ the work is $W=(6\cdot3-2\cdot1)\,\mathrm J=16\,\mathrm J$.

When several forces act, the total work is found in two ways:
- calculate the work of each force and add the results with their signs;
- first find the **net force**, that is, the vector sum of the forces, and take its component along the displacement.

The two procedures give the same value because the dot product is distributive: $(\vec F_1+\vec F_2)\cdot\Delta\vec r=\vec F_1\cdot\Delta\vec r+\vec F_2\cdot\Delta\vec r$. On a stationary horizontal surface, for instance, weight and the **normal force** (the force the surface exerts perpendicular to itself) are vertical, hence perpendicular to the horizontal displacement, and their work is zero. The two forces still enter the vertical force balance, which gives the value of the normal force and therefore of friction.
:::

:::esempio{titolo="An inclined pull with horizontal resistance"}
A rope pulls a crate with $20\,\mathrm N$ at $60^\circ$ above the horizontal. The crate moves $4\,\mathrm m$ to the right and friction, opposing the motion, has magnitude $6\,\mathrm N$. The component of the tension along the displacement is $20\cos 60^\circ\,\mathrm N=20\cdot0.5\,\mathrm N=10\,\mathrm N$, so the tension does $10\cdot4\,\mathrm J=40\,\mathrm J$ of work. Friction makes an angle of $180^\circ$ with the displacement and does $-6\cdot4\,\mathrm J=-24\,\mathrm J$. The total work (subscript "net") is
$$
W_{\mathrm{net}}=10\cdot4\,\mathrm J-6\cdot4\,\mathrm J=16\,\mathrm J.
$$
The total work is positive, so the crate's kinetic energy increases, as the work–kinetic energy theorem states. The $40\,\mathrm J$ supplied by the pull exceeds the $24\,\mathrm J$ removed by friction with the surface.

::grafico{assi=0 uguale=1 vettori="0,0,4,0,s;0,0,1.7,2.944,F;0,0,-1,0,f" xmin=-2 xmax=5 ymin=-1 ymax=4 titolo="The pull makes a $60^\circ$ angle with the displacement"}
:::

:::esempio{#trazione-inversa titolo="Finding the tension from the work balance"}
A sled travels $6\,\mathrm m$ horizontally, pulled by a rope inclined at $60^\circ$ to the horizontal, while a constant resistance of $4\,\mathrm N$ opposes the motion. The total work is $36\,\mathrm J$ and the rope tension $F$ is required. The resistance does $-4\cdot6\,\mathrm J=-24\,\mathrm J$ of work. The total work is the sum of the two works, so the pull does $36\,\mathrm J-(-24\,\mathrm J)=60\,\mathrm J$. Dividing by the displacement and then by $\cos60^\circ=0.5$ gives:
$$
F\cos60^\circ=\dfrac{60\,\mathrm J}{6\,\mathrm m}=10\,\mathrm N,\qquad F=20\,\mathrm N.
$$
The balance gives the horizontal component, and the magnitude also requires the angle. A rope perpendicular to the displacement would do zero work whatever its magnitude, so the total work could not be $36\,\mathrm J$.

For a constant force, the sum of the work done over several segments equals the work calculated with the **net displacement**, that is, the vector from the starting point to the end point. The reason is the distributive property: $\vec F\cdot\Delta\vec r_1+\vec F\cdot\Delta\vec r_2+\vec F\cdot\Delta\vec r_3=\vec F\cdot(\Delta\vec r_1+\Delta\vec r_2+\Delta\vec r_3)$. In the diagram the path goes $4\,\mathrm m$ to the right, $3\,\mathrm m$ up and $3\,\mathrm m$ to the left. The first and last segments cancel over three metres, so the net displacement from A to B has components $(1,3)\,\mathrm m$. The distance travelled, $10\,\mathrm m$, instead determines the work of a resistance that always opposes motion, because that force changes direction with the motion and is therefore not constant.

::grafico{assi=0 uguale=1 vettori="0,0,4,0;4,0,4,3;4,3,1,3" segmenti="0,0,1,3" punti="0,0,pieno,A;1,3,pieno,B" xmin=-.52 xmax=4.51 ymin=-.50 ymax=3.56 titolo="The dashed line joins endpoints A and B. Adding the segment displacements gives this vector."}
:::

## Work on a force–position graph

:::osservazione{#lavoro-variabile titolo="Area under the force–position graph"}
Consider straight-line motion along the $x$ axis with a force component $F_x$ that changes from point to point. Over a short segment $\Delta x$ the force is almost constant, so the work over that segment is approximately $F_x\,\Delta x$, that is, the area of a thin rectangle with base $\Delta x$ and height $F_x$. Adding the rectangles and making them ever narrower, the sum becomes the **signed area** between the graph of $F_x$ and the position axis. "Signed" means that each region has a sign. For motion towards increasing $x$:
- regions above the axis, where $F_x>0$, count positively;
- regions below the axis, where $F_x<0$, count negatively.

If the same interval is traversed in reverse, the displacements $\Delta x$ are negative, so the work of the same force law $F_x(x)$ changes sign.

On a force–position graph the horizontal coordinate is position. The area under a force–time graph represents **impulse** instead, that is, the sum of the products of force and duration, because its units are $\mathrm{N\cdot s}$ rather than $\mathrm{N\cdot m}$. When the $F_x$–$x$ graph is made of straight segments, the area is found with triangles, rectangles and trapezia. Intervals with constant force correspond to rectangles. For an interval in which the force increases linearly from $2$ to $4\,\mathrm N$ over $3\,\mathrm m$ the area is a trapezium, and the work is the base times the mean of the two heights, $\dfrac{(2+4)\cdot3}{2}\,\mathrm J=9\,\mathrm J$.
:::

:::esempio{titolo="Regions of opposite signs"}
From $0$ to $2\,\mathrm m$ the force increases linearly from zero to $6\,\mathrm N$. From $2$ to $4\,\mathrm m$ it is $-1\,\mathrm N$. The first interval forms a triangle above the axis with area $\dfrac{2\cdot6}{2}\,\mathrm J=6\,\mathrm J$. The rectangle below the axis contributes $-1\cdot2\,\mathrm J=-2\,\mathrm J$. The algebraic sum is therefore $6\,\mathrm J-2\,\mathrm J=4\,\mathrm J$. The sudden change in force at $x=2\,\mathrm m$ adds no work, because it occurs at a single position and the corresponding region has zero width.

::grafico{linee="0,0 2,6;2,-1 4,-1" area="3*x;0;0;2|-1;0;2;4" punti="2,6,pieno;4,-1,pieno" xmin=0 xmax=5 ymin=-3 ymax=7 nomi="x (m),F_x (N)" titolo="The triangle contributes $+6\,\mathrm J$ and the rectangle $-2\,\mathrm J$"}
:::

:::esempio{#lavoro-accumulato titolo="Where the accumulated work returns to zero"}
A slider travels from $x=0$ to $x=6\,\mathrm m$. The force along its axis follows $F_x=(6-2x)\,\mathrm N$, where $x$ is given numerically in metres. The **accumulated work** up to a position is the work done from the start up to that position. The force is zero where $6-2x=0$, that is, at $x=3\,\mathrm m$. Up to that point the graph forms a triangle above the axis with a base of $3\,\mathrm m$ and a height of $6\,\mathrm N$, so the accumulated work increases by $\dfrac{3\cdot6}{2}\,\mathrm J=9\,\mathrm J$. From $3$ to $6\,\mathrm m$ the force is negative and forms an equal triangle below the axis, which contributes $-9\,\mathrm J$. At the end the net work is $9\,\mathrm J-9\,\mathrm J=0$. The accumulated work increases while the force is positive and decreases while the force is negative, so it is greatest where the force is zero, and it returns to zero where the two areas cancel.

::grafico{linee="0,6 6,-6" area="6-2*x;0;0;3|0;6-2*x;3;6" punti="0,6,pieno;3,0,pieno;6,-6,pieno" xmin=0 xmax=7 ymin=-7 ymax=8 nomi="x (m),F_x (N)" titolo="The accumulated work increases up to 3 m and returns to zero at 6 m"}

The area rule works for other pairs of quantities. The unit of the area is the product of the units of the **ordinate** (vertical axis) and the **abscissa** (horizontal axis), and it identifies what is being added up; one watt times one second is one joule.

| Graph | Area unit | Quantity |
| --- | --- | --- |
| $F_x$ versus $x$ | $\mathrm{N\,m}$ | Work |
| $F_x$ versus $t$ | $\mathrm{N\,s}$ | Impulse |
| $P$ versus $t$ | $\mathrm{W\,s}$ | Energy transferred |
:::

## Kinetic energy

:::teorema{#energia-cinetica titolo="Work–kinetic energy theorem"}
**Kinetic energy** is the energy a body has because it is moving. For a **particle** (a body whose size is neglected) of constant mass $m$, $K=\dfrac12mv^2$, where $v$ is the speed in metres per second. A speed in $\mathrm{km/h}$ is converted to $\mathrm{m/s}$ by dividing by $3.6$, because $1\,\mathrm{km/h}=\dfrac{1000\,\mathrm m}{3600\,\mathrm s}$; for example, $18\,\mathrm{km/h}=5\,\mathrm{m/s}$. If the velocity is given by its components along two perpendicular axes, Pythagoras' theorem gives $v^2=v_x^2+v_y^2$. The **momentum** of a body is the vector $\vec p=m\vec v$, of magnitude $p=mv$. Substituting $v=\dfrac pm$ into the kinetic energy gives $K=\dfrac{p^2}{2m}$; for example, with $p=6\,\mathrm{kg\cdot m/s}$ and $m=2\,\mathrm{kg}$, $K=\dfrac{6^2}{2\cdot2}\,\mathrm J=9\,\mathrm J$.

The **work–kinetic energy theorem** states that, in an inertial frame (a frame of reference in which the law of inertia holds), the work done by the net force between two positions equals the change in kinetic energy:
$$
W_{\mathrm{tot}}=K_f-K_i.
$$
The subscripts $i$ and $f$ denote the initial and final states. The theorem is proved for a constant force along an axis, with the same positive direction for force, displacement and velocity. By Newton's second law the net force is $ma$, so its work is $W_{\mathrm{tot}}=ma\Delta x$. In uniformly accelerated motion the law $v_f^2-v_i^2=2a\Delta x$ holds; multiplying both sides by $\dfrac12m$ gives $ma\Delta x=\dfrac12m(v_f^2-v_i^2)=K_f-K_i$. For a variable force, the same reasoning is applied to short intervals, over which the force is almost constant. When the intervals are added, each intermediate kinetic energy appears once as a final energy and once as an initial energy, so it cancels and $K_f-K_i$ remains.

A moving body has positive kinetic energy, whose value depends on the velocity measured in the chosen frame. In a frame moving with constant velocity $\vec u$ the body's velocity is $\vec v-\vec u$; for example, a cart moving at $9\,\mathrm{m/s}$ seen from a train travelling at $4\,\mathrm{m/s}$ in the same direction has velocity $5\,\mathrm{m/s}$. Two velocities of equal magnitude and opposite direction give the same $K$, because $v$ is squared. If the net work is zero, then $K_f=K_i$, so the initial and final speeds are equal. The direction may change, however, as in a turn taken at constant **speed** (the magnitude of the velocity). In that case the net force is perpendicular to the velocity at each instant, so it does no work and changes only the direction of motion.
:::

:::esempio{titolo="Stopping with a constant force"}
A $4\,\mathrm{kg}$ cart moves at $5\,\mathrm{m/s}$ and a $10\,\mathrm N$ resisting force brings it to rest. Its initial energy is $\dfrac12\cdot4\cdot5^2\,\mathrm J=50\,\mathrm J$ and its final energy is zero. The force opposes the displacement $d$, so the resisting work is $-10d$ joules when $d$ is measured in metres. By the work–kinetic energy theorem this work equals $K_f-K_i=-50\,\mathrm J$, so $-10d=-50$ gives $d=5\,\mathrm m$. With fixed mass and force the stopping distance is proportional to the initial energy, that is, to $v^2$, so doubling the speed quadruples the stopping distance. The prediction no longer applies if the resisting force changes during braking. The graph shows the parabola $K=2v^2$ for this cart (SI denotes the International System of Units).

::grafico{f="2*x^2" punti="5,50,pieno,A;0,0,pieno,B" xmin=0 xmax=6 ymin=0 ymax=74 nomi="v (m/s),K (J)" titolo="For this cart $K=2v^2$ in SI units"}
:::

:::esempio{#frenata-parziale titolo="Stopping halfway through a braking distance"}
A constant resisting force of magnitude $F$ would bring a body to rest in $12\,\mathrm m$; by the work–kinetic energy theorem its work over those $12\,\mathrm m$, that is, $-F\cdot12\,\mathrm m$, equals $-K_i$. After $6\,\mathrm m$ the resisting work is $-F\cdot6\,\mathrm m$, half of that value, so half of the initial kinetic energy remains. Kinetic energy is proportional to $v^2$, so the ratio of the speeds is the square root of the ratio of the energies:
$$
\dfrac{K}{K_i}=\dfrac{1}{2},\qquad \dfrac{v}{v_i}=\dfrac{1}{\sqrt 2}.
$$
Half of the stopping distance still remains, but the speed is $\dfrac{1}{\sqrt2}\simeq0.71$ times its initial value, about seventy per cent. The result requires neither the force nor the mass, as long as the resistance stays constant along the path.

::grafico{curve="t,1-t/12,0,12;t,sqrt(1-t/12),0,12" punti="6,.5,pieno;6,.707107,pieno" segmenti="6,0,6,.707107" xmin=0 xmax=13 ymin=0 ymax=1.15 nomi="s (m),fraction" legenda="K/K_i;v/v_i" titolo="Halfway through braking, half the kinetic energy remains. The speed is about 71% of its initial value."}
:::

## Conservative forces and potential energy

:::definizione{#potenziale titolo="Energy associated with configuration"}
A force is **conservative** if the work it does between two **configurations** (the positions of the bodies in the system) depends only on the initial and final configurations, and not on the path followed. Weight and the force of a spring are conservative; friction is not, because its work grows with the length of the path. Each configuration is assigned a **potential energy** $U$, chosen so that the work of the conservative force is the opposite of the change $\Delta U=U_f-U_i$:
$$
W_c=-\Delta U .
$$
When the force does positive work, the potential energy decreases by the same amount. On a closed path the final configuration coincides with the initial one, so $\Delta U=0$ and the total work of the conservative force is zero. The zero level of $U$ is chosen freely. Changing the zero level shifts every value of $U$ by the same amount and leaves the differences $\Delta U$ and the work unchanged.

Near Earth's surface, gravity is approximately **uniform**, that is, it has the same value $g=9.81\,\mathrm{m/s^2}$ at every point (in exercises also $10\,\mathrm{m/s^2}$). For the body–Earth system use $U_g=mgh$, where $h$ is the height relative to the level chosen as zero; below that level the height $h$ is negative and $U_g$ is negative too. As the body rises, $U_g$ increases and weight does negative work. As it descends, $U_g$ decreases and weight does positive work. Only the vertical height difference enters the formula; on a ramp of length $s$ inclined at an angle $\alpha$ ("alpha") it is $h=s\sin\alpha$. This formula is valid over paths much shorter than Earth's radius, about $6400\,\mathrm{km}$. Over larger distances $g$ changes appreciably with height, and the gravitational potential of the gravitation chapter is used.

An ideal spring exerts the force $F_x=-kx$ (Hooke's law), where $k$ is the **spring constant**, in $\mathrm{N/m}$, and $x$ is the deformation relative to the **natural length**, that is, the length of the spring at rest. The deformation is positive for an extension and negative for a compression; the minus sign shows that the force opposes the deformation. The graph of $F_x$ is a straight line through the origin, so from $x=0$ to $x=d$ the area between the line and the axis is a triangle with base $d$ and height $-kd$. The work done by the spring from $x=0$ to $x=d$ is therefore $-\dfrac12 kd^2$. Since $W_c=-\Delta U$, it follows that $U_e=\dfrac12 kx^2$, with zero at the natural length. An extension and a compression of equal magnitude store the same energy, because the deformation is squared. Their elastic forces have opposite signs.
:::

:::esempio{titolo="From compression to extension"}
For $k=200\,\mathrm{N/m}$, the configurations $x=-0.10\,\mathrm m$ and $x=+0.10\,\mathrm m$ both have elastic energy $\dfrac12\cdot200\cdot0.10^2\,\mathrm J=1\,\mathrm J$. During the movement the spring first returns to its natural length and does $+1\,\mathrm J$ of work, then stretches and does $-1\,\mathrm J$. The overall work done by the spring is zero, because the potential energy has the same value at the two endpoints, even though it changes over each segment. On the graph, points A and B, at $-10$ and $+10\,\mathrm{cm}$, are at the same height on the parabola.

::grafico{f=".01*x^2" punti="-10,1,pieno,A;10,1,pieno,B" xmin=-18 xmax=18 ymin=0 ymax=3.5 nomi="x (cm),Uₑ (J)" titolo="The two deformations store the same elastic energy"}
:::

:::osservazione{#molla-verticale titolo="Equilibrium position of a vertical spring"}
Consider a mass $m$ suspended from a vertical spring. Take the extension $x$ as positive downwards and set gravitational potential energy to zero at the spring's natural length. When the spring is extended by $x$, the mass is at height $-x$, so $U_g=-mgx$. The **total potential energy**, that is, the sum of elastic and gravitational energy, is
$$
U=\dfrac{1}{2}kx^2-mgx
  =\dfrac{1}{2}k\left(x-\dfrac{mg}{k}\right)^2-\dfrac{(mg)^2}{2k}.
$$
The second form is checked by expanding the square, which gives $\dfrac12kx^2-mgx+\dfrac{(mg)^2}{2k}$, and subtracting the last term. The first term of the second form is never negative and is zero for $x=\dfrac{mg}{k}$, so the minimum occurs at $x=\dfrac{mg}{k}$. At that point $kx=mg$, that is, the elastic force balances the weight. Configurations equally far from this point have the same total potential energy. In calculations, the minimum can serve as the zero of total potential energy, by adding the constant $\dfrac{(mg)^2}{2k}$ to every value. The difference in energy between configurations is unchanged, because the constant appears in both the initial and the final state.

With $k=200\,\mathrm{N/m}$, mass $3\,\mathrm{kg}$ and $g=10\,\mathrm{m/s^2}$, equilibrium occurs at $\dfrac{3\cdot10}{200}\,\mathrm m=0.15\,\mathrm m=15\,\mathrm{cm}$. At $5\,\mathrm{cm}$ and $25\,\mathrm{cm}$ the potential is the same, with zero at the natural length:
$$
\begin{aligned}
U(0.05\,\mathrm m)&=\left(100\cdot0.05^2-30\cdot0.05\right)\mathrm J=(0.25-1.5)\,\mathrm J=-1.25\,\mathrm J,\\[6pt]
U(0.25\,\mathrm m)&=\left(100\cdot0.25^2-30\cdot0.25\right)\mathrm J=(6.25-7.5)\,\mathrm J=-1.25\,\mathrm J.
\end{aligned}
$$
At the minimum E the potential is $-\dfrac{30^2}{2\cdot200}\,\mathrm J=-2.25\,\mathrm J$.

::grafico{f=".01*x^2-.3*x" punti="5,-1.25,pieno;15,-2.25,pieno,E;25,-1.25,pieno" segmenti="5,-1.25,25,-1.25;15,0,15,-2.25" xmin=0 xmax=34 ymin=-2.75 ymax=2 nomi="x (cm),U (J)" titolo="The total potential has its minimum at E, below the natural length. Points equally far from E have the same energy."}
:::

## Conservation and dissipation

:::teorema{#bilancio-energia titolo="Mechanical energy balance"}
The **mechanical energy** of a system is the sum of its kinetic energy and the potential energies chosen to describe it, $E=K+U$. The total work splits into two parts, the work $W_c$ of the conservative forces and the work $W_{\mathrm{nc}}$ of the other forces, called nonconservative (friction, pushes, tensions). The work–kinetic energy theorem gives the first equation; substituting $W_c=-\Delta U$ and moving $\Delta U$ to the left-hand side gives the second:
$$
\Delta K=W_c+W_{\mathrm{nc}},
\qquad
\Delta(K+U)=W_{\mathrm{nc}}.
$$
First the system and the initial and final configurations are chosen, then it is decided which interactions belong in $U$. Each force is counted once. If gravity is already in $U_g$, adding the work done by weight to the right-hand side would count the same transfer twice. If all the nonconservative work sums to zero, $E_i=E_f$, that is, mechanical energy is **conserved**. The normal force of a fixed track is perpendicular to the displacement at each instant, so it does no work and does not enter the balance. For an object that descends through a height $h$ without friction and starts from rest, $K_i=0$ and $U$ decreases by $mgh$, so the balance gives $\dfrac12mv^2=mgh$. The mass appears on both sides and cancels, so $v=\sqrt{2gh}$. If the body starts with speed $v_i$, the same balance gives $v_f^2=v_i^2+2gh$.

**Kinetic friction** is the force a surface exerts on a body sliding over it. It opposes the motion and has magnitude $\mu_dN$, where $\mu_d$ ("mu d") is the coefficient of kinetic friction, a dimensionless number, and $N$ is the magnitude of the normal force. Kinetic friction on a stationary surface dissipates mechanical energy, that is, it turns it into internal energy of the bodies in contact, which warm up. On a horizontal surface, with weight and the normal force as the only vertical forces, the vertical balance gives $N=mg$, and the frictional work over a path of length $s$ is $W_{\mathrm{attr}}=-\mu_dmg\,s$. On a there-and-back path, for example, friction reverses direction with the motion and its work is negative on both legs. On a path with several segments, this work is calculated on each segment with its own length and normal force, and the results are added. When the plane is inclined at an angle $\alpha$ and no other force has a component perpendicular to the plane, $N=mg\cos\alpha$. If instead a force pulls the body with an upward vertical component $F_y$, the normal force on a horizontal surface drops to $N=mg-F_y$. Nonconservative work can also be positive, as with a person pushing a crate. What counts in the balance is the sum of all nonconservative work.
:::

:::esempio{titolo="A path with a dissipative segment"}
A $2\,\mathrm{kg}$ cart starts from rest and drops through $3\,\mathrm m$ without friction. On a later horizontal segment, friction does $-12\,\mathrm J$ of work. Taking $g=9.81\,\mathrm{m/s^2}$, during the descent the potential energy decreases by $mgh=2\cdot9.81\cdot3\,\mathrm J=58.86\,\mathrm J$. The cart starts from rest and there is no friction, so at the bottom of the descent its kinetic energy is $58.86\,\mathrm J$. After the horizontal segment, $(58.86-12)\,\mathrm J=46.86\,\mathrm J$ of kinetic energy remain. With $m=2\,\mathrm{kg}$, $K=\dfrac12\cdot2\cdot v^2=v^2$ in SI units, so $v=\sqrt{46.86}\,\mathrm{m/s}\simeq6.85\,\mathrm{m/s}$. If the stated resisting work exceeded $58.86\,\mathrm J$, the cart would stop before the final point. In that case the balance would give a negative kinetic energy, and a negative radicand shows that the point is unreachable under the conditions of the problem.

::grafico{linee="0,3 3,0 6,0" punti="0,3,pieno,A;3,0,pieno,B;6,0,pieno,C" xmin=-.6 xmax=6.7 ymin=-.8 ymax=3.9 nomi="s,h (m)" titolo="The descent from A to B precedes the dissipative segment from B to C. Horizontal position is schematic"}
:::

:::esempio{#contorno-sistema titolo="Friction, system boundaries and thermal energy"}
A skate starts with $50\,\mathrm J$ of kinetic energy and finishes a horizontal stretch with $32\,\mathrm J$, so its kinetic energy changes by $(32-50)\,\mathrm J=-18\,\mathrm J$. The balance depends on which bodies are included in the system.
- If the system is the skate alone, treated as a particle, the work–kinetic energy theorem assigns $-18\,\mathrm J$ of work to the net force. If friction from the track is the only force doing work, the work done by friction has that value.
- If the system includes the skate and the track, and exchanges with the surroundings are negligible, the mechanical loss of $18\,\mathrm J$ corresponds to an increase in the **internal energy** of the whole, that is, the energy of agitation of the particles of the two bodies, observed as a rise in temperature.

If an external force also does work on the system, the increase in internal energy is the mechanical loss plus that work. The energy balance determines the total increase. How much each body warms up depends on information about the contact and the materials.
:::

:::esempio{#vincolo-guida titolo="Energy and contact on a circular track"}
A particle starts at rest at height $H$ relative to the bottom of a circular track of radius $R$, that is, a rail in the shape of a vertical circle, run on the inside. The track is fixed and frictionless, so the normal force does no work and mechanical energy is conserved. At the top, which is at height $2R$, both the normal force and weight point towards the centre. In circular motion the net force towards the centre equals the mass times the centripetal acceleration $\dfrac{v^2}{R}$, so at the top $N+mg=\dfrac{mv^2}{R}$. At the contact limit the normal force is zero, so $\dfrac{v^2}{R}=g$, that is, $v^2=gR$. The energy balance from release to the top, divided by the mass, gives $gH=2gR+\dfrac{v^2}{2}$. Substituting $v^2=gR$ gives $gH=2gR+\dfrac{gR}{2}=\dfrac{5gR}{2}$, and hence $H_{\rm min}=\dfrac{5R}{2}$. During the loop the speed is lowest at the top, so the required force towards the centre is smallest there, while the inward component of weight is greatest. The normal force is therefore smallest at the top, and the top sets the contact requirement. The energy balance gives the speed, while the radial equation determines whether the track can exert the required force.

::grafico{assi=0 uguale=1 linee="-3,2.5 -2.65,2.5;-1.08,0 0,0" curve="-2.65+1.57*t,2.5*(1-3*t^2+2*t^3),0,1;cos(t),1+sin(t),0,6.283185" segmenti="-3,0,-.15,0;-2.95,0,-2.95,2.5;0,1,1,1" vettori="0,2,0,1.39,mg" punti="-2.65,2.5,pieno,A;0,2,pieno;0,0,pieno" etichette="-2.85,1.52,H;.44,1.08,R" xmin=-3.45 xmax=1.45 ymin=-.28 ymax=2.88 titolo="At the contact limit, only weight acts radially at the top. Heights are measured from the bottom of the track."}
:::

## Power and efficiency

:::definizione{#potenza titolo="Rate of energy transfer"}
**Power** is the energy transferred, or the work done, per unit time. The **average power** of a transfer over an interval of duration $\Delta t$ is $P_m=\dfrac{W}{\Delta t}$. The instantaneous power of a force is the dot product $P=\vec F\cdot\vec v=Fv\cos\theta$, with $\theta$ the angle between force and velocity. Over a short interval the displacement is $\Delta\vec r\simeq\vec v\,\Delta t$, so the work is $\vec F\cdot\Delta\vec r\simeq\vec F\cdot\vec v\,\Delta t$, and dividing by $\Delta t$ gives $\vec F\cdot\vec v$. Its sign depends on the component of force along the velocity. A resisting force acting on a moving body supplies negative mechanical power. The **watt** ($\mathrm W$) is a joule per second. The **kilowatt-hour** ($\mathrm{kWh}$) is an energy unit because it multiplies a power by a time, and equals $1000\,\mathrm W\cdot3600\,\mathrm s=3.6\cdot10^6\,\mathrm J$.

The **efficiency** $\eta$ ("eta") of a machine is the ratio of the useful energy the machine delivers to the energy it receives over the same interval, $\eta=\dfrac{E_{\mathrm{utile}}}{E_{\mathrm{fornita}}}$. Writing the ratio specifies which transfers are classed as useful in the numerator. Efficiency is a dimensionless number, not greater than $1$, and is also written as a percentage. For a machine in **steady operation**, that is, always under the same conditions, the ratio of average powers can be used, because the two averages refer to the same time. An efficiency of $80\%$ means the useful output is $0.80$ times the received energy. When the useful output is known, the input energy is found by dividing by $0.80$. If energy passes through two machines one after the other, the output of the first is the input of the second, so the overall efficiency is the product of the two efficiencies; for example, $0.90$ and $0.50$ give $0.90\cdot0.50=0.45$.
:::

:::esempio{titolo="Power required during ascent"}
A hoist raises a $50\,\mathrm{kg}$ mass at constant speed through $8\,\mathrm m$ in $10\,\mathrm s$. At constant speed the kinetic energy does not change, so the useful work is the increase in potential energy. Taking $g=9.81\,\mathrm{m/s^2}$, the useful work is $mgh=50\cdot9.81\cdot8\,\mathrm J=3924\,\mathrm J$ and the useful average power is $\dfrac{3924\,\mathrm J}{10\,\mathrm s}=392.4\,\mathrm W$. With an overall efficiency of $0.75$, the input power must be $\dfrac{392.4\,\mathrm W}{0.75}=523.2\,\mathrm W$. The difference of $(523.2-392.4)\,\mathrm W=130.8\,\mathrm W$ is the power that does not contribute to raising the mass. If there were an acceleration phase, the kinetic energy change would be an additional term in the useful work.
:::

:::esempio{#potenza-ciclo titolo="Average power over the phases of a cycle"}
A machine delivers $300\,\mathrm W$ for $4\,\mathrm s$ and then stops for $6\,\mathrm s$, with no useful transfer during the pause. The useful work over the cycle is $300\cdot4\,\mathrm J=1200\,\mathrm J$. Average power must be calculated over the full ten seconds, pause included.
$$
P_m=\dfrac{300\cdot4\,\mathrm J}{10\,\mathrm s}=120\,\mathrm W.
$$
A machine delivering a constant $120\,\mathrm W$ would supply the same energy, $1200\,\mathrm J$, after one cycle. During the first four seconds, however, its useful energy would be $120\cdot4\,\mathrm J=480\,\mathrm J$, less than the $1200\,\mathrm J$ of the first machine. Equal average powers therefore imply equal energy transfers only between the endpoints of the averaging interval. On the graph the energy is the area under the power curve, and the two rectangles have the same area.

::grafico{linee="0,300 4,300;4,0 10,0" area="300;0;0;4" segmenti="0,120,10,120;4,0,4,300" xmin=0 xmax=11 ymin=0 ymax=330 nomi="t (s),P (W)" titolo="The area of the rectangle up to 4 s equals the area for 120 W over all 10 s."}
:::
