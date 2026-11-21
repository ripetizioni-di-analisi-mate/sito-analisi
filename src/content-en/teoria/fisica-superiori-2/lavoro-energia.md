---
titolo: Work, energy and power
sommario: Signed work, kinetic and potential energy, energy balances with and without friction, power and efficiency.
---

## Work of a constant force

:::definizione{#lavoro titolo="Force and displacement"}
**Work** is the amount of energy that a force transfers to an object while the object moves. A force and a displacement are vectors, that is, quantities described by a value (the **magnitude**), a direction and a sense. The constant force is written $\vec F$ and the displacement $\vec s$, their magnitudes $F$ and $s$, and $\theta$ (read "theta") is the angle between the two vectors. Work is written $W$ and equals
$$
W=Fs\cos\theta=F_\parallel s,\qquad 1\,\mathrm{J}=1\,\mathrm{N\,m}.
$$
- $\cos\theta$ (read "cosine of theta") is the number by which the length of a vector inclined at $\theta$ is multiplied to obtain its projection. It is $1$ for $0^\circ$, $\dfrac12$ for $60^\circ$, $0$ for $90^\circ$ and $-1$ for $180^\circ$.
- $F_\parallel=F\cos\theta$ is the **parallel component** of the force, that is, its projection onto the line of the displacement, taken with the sign $+$ if it points in the direction of the displacement and with the sign $-$ if it points the opposite way.
- Work is measured in **joules** ($\mathrm J$), the unit of energy of the International System of Units (SI). One joule is the work done by a force of one newton ($\mathrm N$, the unit of force) over one metre in its own direction.

$F$ and $s$ are magnitudes, that is, positive numbers, so the sign of work comes from the projection $F_\parallel$.
- If the angle is less than $90^\circ$, the cosine is positive and the work is **positive**. The force has a part in the direction of motion and gives energy to the object.
- If the angle is greater than $90^\circ$, the cosine is negative and the work is **negative**. The force has a part opposite to the motion and takes energy away from the object. With $\theta=180^\circ$ one has $\cos180^\circ=-1$, so a force of $8\,\mathrm N$ opposite to a displacement of $5\,\mathrm m$ does $-40\,\mathrm J$.
- If the force is perpendicular to the displacement ($\theta=90^\circ$), the projection is zero and the work is zero.

Work is a **scalar** quantity, that is, a number with a unit and no direction. Its sign shows whether energy enters the object or leaves it, not a direction in space. For this reason the product $Fs\cos\theta$ is called the **scalar product**, or dot product, of the vectors $\vec F$ and $\vec s$ and is written $\vec F\cdot\vec s$.

If several forces act, the work of each one is calculated and the results are then added with their signs. The **net force** is the single force equivalent to all the applied forces. For constant forces its work equals the sum of the individual works, because the projection of the net force is the sum of the projections of the individual forces.

A constant force, that is, one whose magnitude, direction and sense never change, can also act along a curved path, which is divided into short, almost straight sections. The work on each section uses the projection of that section onto the fixed direction of the force. The projections of the sections add up to the projection of the overall displacement, that is, of the segment from the starting point to the end point. For example, a horizontal force of $12\,\mathrm N$ along an arc that ends $3\,\mathrm m$ to the right of the starting point does $36\,\mathrm J$, whatever the length of the arc. If the object returns to the starting point, the overall displacement is zero and that total work is zero.
:::

:::esempio{titolo="The relevant projection of an inclined force"}
A suitcase moves $3\,\mathrm{m}$ along a floor. A rope pulls it with $20\,\mathrm{N}$ at $60^\circ$ to the displacement. Since $\cos60^\circ=\dfrac12$, the projection along the floor is $20\cos60^\circ\,\mathrm{N}=10\,\mathrm{N}$, so the rope does $10\cdot3\,\mathrm J=30\,\mathrm{J}$ of work.

The vertical part of the pull is perpendicular to the horizontal displacement, so its work is zero. It only changes the contact forces, that is, how hard the suitcase presses on the floor. Weight and the **normal force** (the force with which the floor supports the suitcase, perpendicular to the floor) are also vertical and do no work for this displacement. If the suitcase slides with friction, friction opposes the motion and does additional negative work.

::grafico{assi=0 uguale=1 linee="-0.7,0 4.2,0" vettori="0,0,3,0,s;0,0,1.3,2.25,F" segmenti="1.3,0,1.3,2.25" xmin=-0.8 xmax=4.3 ymin=-0.6 ymax=2.8 titolo="Force and displacement form an angle of 60°. The horizontal projection is half the force."}
:::

:::osservazione{#area-lavoro titolo="Work as a signed area"}
Consider a graph with the position $x$ of the object along the motion on the horizontal axis and the parallel component of the force on the vertical axis. On a section where the force is constant, the graph is a horizontal segment and the work $F_\parallel\cdot\Delta x$ is the area of the rectangle between the segment and the axis ($\Delta x$, "delta x", is the length of the section). The base is measured in metres and the height in newtons, so the area is measured in joules. The area is **signed**: a rectangle above the axis counts as positive work, one below the axis as negative work.

For a series of sections the areas are added with their signs. A force that grows linearly, that is, by equal amounts over equal distances, has a sloping segment as its graph.
- If it starts from zero, the area is a triangle, and the work is half of base times height.
- If it starts from a non-zero value, the area is a trapezium. The work is the **average force**, that is, the mean of the initial and final forces, multiplied by the length of the section. A force that rises from $4$ to $10\,\mathrm N$ over $3\,\mathrm m$ does $\dfrac{4+10}{2}\cdot3\,\mathrm J=21\,\mathrm J$.

This interpretation will be used to derive the energy of a spring.
:::

:::esempio{titolo="Positive and negative areas"}
A cart moves forwards along a horizontal track. The component of the force along the motion is $6\,\mathrm N$ over the first $4\,\mathrm m$ and $-4\,\mathrm N$ over the next $3\,\mathrm m$.
- In the first section the force transfers $6\cdot4\,\mathrm J=24\,\mathrm J$ to the cart.
- In the second section it removes $4\cdot3\,\mathrm J=12\,\mathrm J$, that is, it does $-12\,\mathrm J$.

The total work is $(24-12)\,\mathrm J=12\,\mathrm J$, over a distance travelled of $7\,\mathrm m$. Adding the two areas without signs would give $36\,\mathrm J$ and would not account for the change in the force's direction, therefore the rectangle below the axis counts as negative.

::grafico{linee="0,6 4,6;4,-4 7,-4" area="6;0;0;4|0;-4;4;7" segmenti="4,0,4,6;4,0,4,-4;7,0,7,-4" xmin=-0.3 xmax=7.8 ymin=-5.5 ymax=7.5 nomi="x (m),F (N)" titolo="The area from 0 to 4 m gives +24 J. The area from 4 to 7 m gives −12 J."}
:::

## Kinetic energy

::::teorema{#cinetica titolo="Net work changes kinetic energy"}
A **particle** is an object whose size does not matter in the problem being studied. The **speed** $v$ is the magnitude of the velocity, that is, how many metres the object covers in one second, without a sign. A particle with mass $m$ and speed $v$ has **kinetic energy**
$$
K=\frac12mv^2.
$$
With mass in kilograms and speed in metres per second the result is in $\mathrm{kg\,m^2/s^2}$, which is the joule. Speed appears squared, so if it triples, the kinetic energy becomes nine times greater.

The **net work** $W_{\mathrm{tot}}$ is the sum of the work done by all the forces acting on the object over one leg. The **work–kinetic energy theorem** states that the net work equals the change in kinetic energy, that is, final energy minus initial energy:
$$
W_{\mathrm{tot}}=\Delta K=K_f-K_i.
$$
The symbol $\Delta$ ("delta") always means final value minus initial value. One force may do positive work while others do negative work. The change in kinetic energy depends on the sum. If the net work is positive the object speeds up, if it is negative the object slows down, and if it is zero the object ends with the same speed it started with.
:::dimostrazione
Consider a straight segment, along an axis, on which the net force $F_R$ is constant and directed along the axis. The net work is the work of the net force, that is, $F_R\Delta x$.

Newton's second law states that $F_R=ma$, where $a$ is the acceleration, with signs taken along the axis. Hence $W_{\mathrm{tot}}=ma\Delta x$.

With constant acceleration the relation $v_f^2-v_i^2=2a\Delta x$ holds, so $a\Delta x=\dfrac{v_f^2-v_i^2}{2}$. Substituting gives
$$
W_{\mathrm{tot}}=ma\Delta x=\frac12m(v_f^2-v_i^2)=K_f-K_i.
$$
The result also holds when the force varies. In that case the motion is divided into short sections, on each of which the force is almost constant, and the energy changes of the sections are added. The intermediate terms cancel, because the energy at the end of each section is the initial energy of the next section, and $K_f-K_i$ remains.
:::
::::

:::esempio{titolo="Braking reduces kinetic energy"}
A $2\,\mathrm{kg}$ cart slows from $6$ to $4\,\mathrm{m/s}$. Its kinetic energies at the endpoints are
$$
K_i=\frac12\cdot2\cdot6^2\,\mathrm J=36\,\mathrm J,\qquad K_f=\frac12\cdot2\cdot4^2\,\mathrm J=16\,\mathrm J.
$$
The net work is $(16-36)\,\mathrm J=-20\,\mathrm{J}$. The sign is negative because the speed decreases.

If the only horizontal force is friction of constant magnitude $f$ and the cart travels $5\,\mathrm{m}$, the work of friction is $-f\cdot5\,\mathrm m$. Setting this equal to $-20\,\mathrm J$ gives the magnitude $f=\dfrac{20}{5}\,\mathrm{N}=4\,\mathrm{N}$.

With $m=2\,\mathrm{kg}$ one has $K=\dfrac12\cdot2\cdot v^2=v^2$ in joules. In the graph I is the initial point and F the final one.

::grafico{f="x^2" punti="4,16,pieno,F;6,36,pieno,I" xmin=0 xmax=6.7 ymin=0 ymax=44 nomi="v (m/s),K (J)" titolo="For 2 kg, energy in joules is the square of speed in m/s."}
:::

:::esempio{titolo="Carrying energy from one section to the next"}
A $2\,\mathrm{kg}$ cart enters a section at $3\,\mathrm{m/s}$, so with $K_i=\dfrac12\cdot2\cdot3^2\,\mathrm J=9\,\mathrm J$.
- Over the first $4\,\mathrm m$ the net force does $16\,\mathrm J$ of work. At the transition the cart has $(9+16)\,\mathrm J=25\,\mathrm J$. Since $v^2=\dfrac{2K}{m}=25\,\mathrm{m^2/s^2}$, it is travelling at $5\,\mathrm{m/s}$.
- Over the next $3\,\mathrm m$ a brake does $-9\,\mathrm J$. The second section starts from the $25\,\mathrm J$ already reached, so $(25-9)\,\mathrm J=16\,\mathrm J$ remain and the final speed is $4\,\mathrm{m/s}$.

In the graph of $K$ against position $x$, the **slope** of a segment is the ratio of how much the energy rises to the length of the section. On each section the net force is constant, so the slope equals the component of the net force along the motion. The first segment rises by $16\,\mathrm J$ over $4\,\mathrm m$, so the net force is $\dfrac{16}{4}\,\mathrm N=4\,\mathrm N$. The second falls by $9\,\mathrm J$ over $3\,\mathrm m$, so it is $-3\,\mathrm N$. Between A and C the energy increases by $(16-9)\,\mathrm J=7\,\mathrm J$, that is, by the net work over the whole path.

::grafico{linee="0,9 4,25 7,16" punti="0,9,pieno,A;4,25,pieno,B;7,16,pieno,C" xmin=-0.4 xmax=7.8 ymin=0 ymax=31 nomi="x (m),K (J)" titolo="The push ends at B and braking begins. Energy is continuous at the transition."}
:::

## Gravitational potential energy

:::definizione{#potenziale titolo="Energy associated with height"}
The weight of an object of mass $m$ is the force $mg$ directed downwards, where $g$ is the acceleration due to gravity. Near the ground $g$ is taken as constant. It is about $9.8\,\mathrm{m/s^2}$, and in exercises it is often rounded to $10\,\mathrm{m/s^2}$.

A **zero level** of height is chosen, for example the floor. The **height** $h$ of a point is its vertical distance from that level, and it is positive above the chosen level and negative below it. The **gravitational potential energy** of the object is
$$
U_g=mgh.
$$

Between an initial height $h_i$ and a final height $h_f$ the following relations hold:
$$
\Delta U_g=mg(h_f-h_i),\qquad W_g=mg(h_i-h_f)=-\Delta U_g.
$$
The second formula follows from the definition of work. Weight is vertical and points downwards, so only the vertical displacement $h_f-h_i$, measured upwards, counts, and the work of weight is $-mg(h_f-h_i)$.
- When descending $h_f<h_i$, so potential energy decreases and weight does **positive** work.
- When rising $h_f>h_i$, so potential energy increases and weight does **negative** work.
- On a path that returns to the starting height, the work of weight is zero.

Changing the zero level adds the same constant to the energy at every point. The difference between two heights does not change, so $\Delta U_g$ and the work of weight are unchanged too.

The work of weight depends only on the change in height. A long ramp and a shorter one with the same endpoints give the same work of gravity, even though friction removes different amounts of energy on the two ramps.
:::

:::esempio{titolo="Final position below the zero level"}
A $3\,\mathrm{kg}$ object descends from $h_i=2\,\mathrm{m}$ to $h_f=-1\,\mathrm{m}$, with $g=10\,\mathrm{m/s^2}$. Relative to the chosen level
$$
U_i=3\cdot10\cdot2\,\mathrm J=60\,\mathrm{J},\qquad U_f=3\cdot10\cdot(-1)\,\mathrm J=-30\,\mathrm{J}.
$$
Thus $\Delta U_g=(-30-60)\,\mathrm J=-90\,\mathrm{J}$ and weight does $+90\,\mathrm{J}$ of work. If the zero is chosen at the end point, the heights become $3\,\mathrm m$ and $0\,\mathrm m$, the energies $90$ and $0\,\mathrm{J}$, and the change is still $-90\,\mathrm J$.

::grafico{f="30*x" punti="-1,-30,pieno,F;2,60,pieno,I" xmin=-1.6 xmax=2.5 ymin=-50 ymax=80 nomi="h (m),U (J)" titolo="Weight does positive work because potential energy decreases from I to F."}
:::

:::esempio{titolo="Two lengths for the same vertical drop"}
Two tracks connect the same points A and B. Both drop by $3\,\mathrm m$ (the **vertical drop**, that is, the difference in height). The first is the segment AB, which is $5\,\mathrm m$ long by Pythagoras' theorem, since $\sqrt{3^2+4^2}=5$. The second is the bent path that goes $3\,\mathrm m$ straight down and then $4\,\mathrm m$ horizontally, so it is $7\,\mathrm m$ long. In the diagram the vertical and horizontal directions use the same scale, and the bent line represents a track with a very short transition at the corner.

For a $2\,\mathrm{kg}$ cart with $g=10\,\mathrm{m/s^2}$, gravity does $2\cdot10\cdot3\,\mathrm J=60\,\mathrm J$ of work along either path.

If a **tangential** resistance, that is, a force directed along the track and opposite to the motion, of constant magnitude $4\,\mathrm N$ also acts on the cart, its work depends on the track length.
- On the first track it is $-4\cdot5\,\mathrm J=-20\,\mathrm J$ and the net work is $(60-20)\,\mathrm J=40\,\mathrm J$.
- On the second it is $-4\cdot7\,\mathrm J=-28\,\mathrm J$ and the net work is $(60-28)\,\mathrm J=32\,\mathrm J$.

The cart therefore receives $8\,\mathrm J$ more net work along the shorter track. This assumes it can complete both paths.

::grafico{assi=0 uguale=1 linee="0,3 4,0;0,3 0,0 4,0" punti="0,3,pieno,A;4,0,pieno,B" segmenti="-0.35,0,-0.35,3" etichette="-1.02,1.45,3 m;1.85,1.77,5 m;1.15,-0.35,4 m" xmin=-1.35 xmax=4.9 ymin=-0.7 ymax=3.6 titolo="The tracks connect A and B with the same vertical drop. The bent path is 3 m + 4 m long."}
:::

## Elastic potential energy

:::teorema{#elastica titolo="Energy in an ideal spring"}
The **natural length** of a spring is its length when nobody pulls or squeezes it. The **deformation** $x$ is the difference between the length of the spring and its natural length. It is positive if the spring is stretched and negative if it is compressed.

The force of the spring on the object attached to its free end is given by **Hooke's law**
$$
F_e=-kx.
$$
- $k$ is the **spring constant**, measured in newtons per metre ($\mathrm{N/m}$), and it gives how many newtons are needed to deform the spring by one metre.
- The minus sign shows that the spring force is opposite to the deformation. A stretched spring pulls back, a compressed one pushes outwards.
- The law holds in the **linear range**, that is, as long as the deformation is small enough not to damage the spring. An ideal spring is a spring of negligible mass for which the law always holds.

The spring is stretched **slowly**, that is, without giving kinetic energy to the end, from $0$ to a deformation $x>0$. The external force needed is equal and opposite to $F_e$, so its magnitude grows linearly from zero to $kx$. Its work is the area under the line in the force–deformation graph, that is, the area of a triangle of base $x$ and height $kx$:
$$
\frac12\cdot x\cdot kx=\frac12kx^2.
$$
This work is stored in the spring as **elastic potential energy**,
$$
U_e=\frac12 kx^2.
$$
A compression of the same magnitude gives the same energy, because $(-x)^2=x^2$. For a given deformation the energy is proportional to $k$. For a given spring, if the deformation doubles the energy becomes four times greater.

When the spring returns towards its natural length, the spring force points in the direction of motion of the end and does positive work. Between an initial and a final deformation the work of the spring force is
$$
W_e=U_{e,i}-U_{e,f}.
$$
The factor $\dfrac12$ appears because the force is variable and during loading it reaches $kx$ only at the end. The product $kx\cdot x$ of the final force and the whole deformation is the area of the rectangle and is twice the loading work.
:::

:::esempio{titolo="Area under the loading force of a spring"}
A spring with $k=100\,\mathrm{N/m}$ is extended by $0.10\,\mathrm{m}$. The loading force rises to $100\cdot0.10\,\mathrm N=10\,\mathrm{N}$. The energy is the area of the triangle up to point A:
$$
U_e=\frac12\cdot0.10\cdot10\,\mathrm{J}=0.50\,\mathrm{J}.
$$
The factor one half appears because the force rises linearly, so the average force is $5\,\mathrm N$, half the final force.

::grafico{f="100*x" area="100*x;0;0;0.10" punti="0.1,10,pieno,A" etichette="0.086,-0.58,0.10 m" xmin=0 xmax=0.12 ymin=0 ymax=13 nomi="x (m),F (N)" titolo="The area of the triangle during loading is 0.50 J."}
:::

:::esempio{titolo="Partially releasing a spring"}
A spring with $k=250\,\mathrm{N/m}$ goes from a compression of $0.12\,\mathrm m$ to one of $0.04\,\mathrm m$. The deformations are negative, $x_i=-0.12\,\mathrm m$ and $x_f=-0.04\,\mathrm m$, and the free end moves in the positive direction, that is, towards the natural length.
- The spring force is initially $-250\cdot(-0.12)\,\mathrm N=30\,\mathrm N$ and falls to $-250\cdot(-0.04)\,\mathrm N=10\,\mathrm N$.
- The energies at the two endpoints are $\dfrac12\cdot250\cdot0.12^2\,\mathrm J=1.8\,\mathrm J$ and $\dfrac12\cdot250\cdot0.04^2\,\mathrm J=0.2\,\mathrm J$.
- The spring force therefore does positive work $W_e=(1.8-0.2)\,\mathrm J=1.6\,\mathrm J$.

In the graph the force is positive throughout the interval. The area is a trapezium with base $0.08\,\mathrm m$ and average force $\dfrac{30+10}{2}\,\mathrm N=20\,\mathrm N$, so it equals $20\cdot0.08\,\mathrm J=1.6\,\mathrm J$, the same work obtained from the difference between the two energies. Each of the two energies is calculated with its own deformation measured from the natural length, and only then is the subtraction done. The calculation $\dfrac12\cdot250\cdot0.08^2\,\mathrm J=0.8\,\mathrm J$, done with the difference of the deformations, gives a different value.

::grafico{f="-250*x" area="-250*x;0;-0.12;-0.04" punti="-0.12,30,pieno,I;-0.04,10,pieno,F" etichette="-0.135,-2.25,−0.12 m;-0.054,-2.25,−0.04 m" xmin=-0.15 xmax=0.018 ymin=-4 ymax=38 nomi="x (m),F_e (N)" titolo="The spring does positive work as the end moves from I towards F."}
:::

## Conservation of mechanical energy

:::teorema{#conservazione titolo="Transfers between kinetic and potential energy"}
The **mechanical energy** of an object is the sum of its kinetic energy and the potential energies of the forces present, here gravitational and elastic:
$$
E_m=K+U_g+U_e.
$$
Suppose that only weight and the spring force do work. Then the net work is
$$
W_{\mathrm{tot}}=W_g+W_e=-\Delta U_g-\Delta U_e.
$$
The work–kinetic energy theorem gives $\Delta K=W_{\mathrm{tot}}$, so $\Delta K=-\Delta U_g-\Delta U_e$, that is, $\Delta K+\Delta U_g+\Delta U_e=0$. Mechanical energy therefore does not change, $\Delta E_m=0$, and **conservation of mechanical energy** holds:
$$
K_i+U_{g,i}+U_{e,i}=K_f+U_{g,f}+U_{e,f}.
$$
The result also holds in the presence of a **stationary constraint**, that is, a fixed track, surface or string that supports the object, if its force is always perpendicular to the displacement, because then its work is zero. This is the case for the normal force of a smooth ramp, that is, one without friction.

An object starts from rest and descends a height $h$ without friction. All the decrease in gravitational energy becomes kinetic energy:
$$
mgh=\frac12mv^2.
$$
Both sides are divided by $m$ and multiplied by $2$, so $v^2=2gh$ and $v=\sqrt{2gh}$. Mass cancels because in this case all the energies involved are proportional to $m$.
:::

:::osservazione{#energia-attrito titolo="Energy balance when other forces do work"}
$W_{\mathrm{oth}}$ denotes the work of the **other forces**, that is, of all the forces that do work except weight and the spring force (the subscript oth stands for *other*). The net work is $W_g+W_e+W_{\mathrm{oth}}$, and the same reasoning as for conservation gives
$$
\Delta E_m=W_{\mathrm{oth}}.
$$
- Friction opposing sliding along a stationary surface does negative work on the object and reduces its mechanical energy. The energy removed goes, for example, into **internal energy** of the object and the surface, that is, the energy linked to the motion of the particles they are made of, which shows up as heating.
- A motor or a hand can instead transfer energy to the object and increase $E_m$.

The work of weight is already contained in $\Delta U_g$ and that of the spring in $\Delta U_e$, therefore these two works are not included in $W_{\mathrm{oth}}$. Adding them there as well would count them twice.

For example, a block attached to a spring starts and ends at rest on a horizontal track, with $4\,\mathrm J$ of initial elastic energy. The hand does $7\,\mathrm J$ and friction $-2\,\mathrm J$, so $E_m$ increases by $5\,\mathrm J$. Since $K$ and $U_g$ do not change, the final elastic energy is $(4+5)\,\mathrm J=9\,\mathrm J$.
:::

:::esempio{titolo="The same drop with and without friction"}
A $2\,\mathrm{kg}$ cart starts from rest and drops $5\,\mathrm{m}$ with $g=10\,\mathrm{m/s^2}$. The decrease in gravitational energy is $2\cdot10\cdot5\,\mathrm J=100\,\mathrm J$.
- Without friction $K_f=100\,\mathrm{J}$, so $v^2=\dfrac{2\cdot100}{2}\,\mathrm{m^2/s^2}=100\,\mathrm{m^2/s^2}$ and the speed is $10\,\mathrm{m/s}$.
- If friction does $-36\,\mathrm{J}$, the balance $\Delta E_m=W_{\mathrm{oth}}$ gives $K_f=(100-36)\,\mathrm J=64\,\mathrm{J}$, so $v^2=64\,\mathrm{m^2/s^2}$ and the speed is $8\,\mathrm{m/s}$.

The change in height is the same, while the work of the other forces changes. The result assumes the cart reaches the bottom of the descent.
:::

:::attenzione{titolo="Check that the cart reaches the next section"}
A $2\,\mathrm{kg}$ cart enters a $4\,\mathrm m$ horizontal section at $4\,\mathrm{m/s}$ against a constant resistance of $5\,\mathrm N$. The kinetic energy on entry is $\dfrac12\cdot2\cdot4^2\,\mathrm J=16\,\mathrm J$. To cross the whole section the cart would have to lose $5\cdot4\,\mathrm J=20\,\mathrm J$, more energy than it has, so it stops earlier. At the stopping point the resistive work $5\,\mathrm N\cdot d$ has removed all $16\,\mathrm J$, therefore $5d=16$ and $d=3.2\,\mathrm m$ from the start of the section.

A motor placed after the section would supply more energy only if the cart reached it. A balance between start and finish is therefore valid only if the kinetic energy calculated in every intermediate phase is positive.
:::

:::esempio{titolo="Descent, rough section and compression"}
A $2\,\mathrm{kg}$ cart starts from rest at A, $2.5\,\mathrm m$ above the horizontal track. The descent to B is smooth. Between B and C it slides for $2\,\mathrm m$ against a constant friction force of $7\,\mathrm N$ (the **rough** section). From C it enters a smooth section and compresses a spring with constant $200\,\mathrm{N/m}$ until it momentarily stops at D. Take $g=10\,\mathrm{m/s^2}$ and the horizontal track as the zero level.

::grafico{assi=0 uguale=1 linee="0,2.5 0.8,2.42 1.6,2 2.3,1 3.1,0.22 4,0 8,0;6.48,0.22 6.64,0.34 6.86,0.1 7.08,0.34 7.3,0.1 7.52,0.34 7.7,0.22;7.7,0 7.7,0.6" punti="0,2.5,pieno,A;4,0,pieno,B;6,0,pieno,C;6.6,0,pieno,D" segmenti="4,-0.3,6,-0.3" etichette="4.72,-0.56,2 m" xmin=-0.7 xmax=8.45 ymin=-0.82 ymax=3.15 titolo="The descent is smooth. Friction acts only between B and C. Compression takes place on the smooth section."}

- At A the energy is all gravitational, $2\cdot10\cdot2.5\,\mathrm J=50\,\mathrm J$. The descent is smooth, so at B these $50\,\mathrm J$ have become kinetic energy.
- Between B and C friction does $-7\cdot2\,\mathrm J=-14\,\mathrm J$. At C, $(50-14)\,\mathrm J=36\,\mathrm J$ of mechanical energy remains, still entirely kinetic, because the track is at the zero level and the spring is not yet compressed.

The table summarises the states, with $U=U_g+U_e$.

| Point | $K$ (J) | $U$ (J) | $E_m$ (J) |
| --- | ---: | ---: | ---: |
| A | 0 | 50 | 50 |
| B | 50 | 0 | 50 |
| C | 36 | 0 | 36 |
| D | 0 | 36 | 36 |

From C to D the section is smooth, so mechanical energy is conserved and transfers entirely to the spring. At D, therefore,
$$
\frac12\cdot200x^2=36,\qquad x^2=\frac{36}{100}=0.36,
$$
and the compression has magnitude $0.60\,\mathrm m$. Over the full path, the drop in $E_m$ from $50$ to $36\,\mathrm J$ equals the work of friction, the only force that does work without being represented by a potential energy. The changes in $K$ on the individual sections are instead different, because the speed at B differs from the speed at C.

::grafico{linee="4,50 6,36 6.6,36" punti="4,50,pieno,B;6,36,pieno,C;6.6,36,pieno,D" xmin=3.65 xmax=7.25 ymin=28 ymax=56 nomi="x (m),E_m (J)" titolo="On the horizontal track, mechanical energy decreases only while the cart slides through the rough section."}
:::

## Power and efficiency

:::definizione{#potenza titolo="Energy transferred per unit time"}
**Average power** $\mathcal P_m$ is work divided by the duration $\Delta t$ over which it is done:
$$
\mathcal P_m=\frac{W}{\Delta t}.
$$
The duration is positive. Power is measured in **watts**. One watt ($\mathrm W$, in upright type, while work $W$ is in italics) is one joule per second. One kilowatt is $1\,\mathrm{kW}=1000\,\mathrm W$. A motor that does $1400\,\mathrm J$ of work in $8\,\mathrm s$ has average power $\dfrac{1400}{8}\,\mathrm W=175\,\mathrm W$.

Two motors can transfer the same energy in different times. The one delivering it in less time has greater average power, because it divides the same work by a shorter duration.

If the parallel force and the velocity are constant, the displacement is $s=v\,\Delta t$. Substituting into the work $W=F_\parallel s$ gives
$$
\mathcal P=\frac{F_\parallel v\,\Delta t}{\Delta t}=F_\parallel v.
$$
:::

:::esempio{titolo="Two durations and one average power"}
A motor delivers $120\,\mathrm W$ for $2\,\mathrm s$ and then $45\,\mathrm W$ for $8\,\mathrm s$. In the graph of power against time, each interval is a rectangle with the duration as base and the power as height, and its area is the work done in that interval.
- The first rectangle gives $120\cdot2\,\mathrm J=240\,\mathrm J$.
- The second gives $45\cdot8\,\mathrm J=360\,\mathrm J$.

The total work is therefore $600\,\mathrm J$ and, over $10\,\mathrm s$ of operation, the average power is $\dfrac{600}{10}\,\mathrm W=60\,\mathrm W$.

The interval at $45\,\mathrm W$ lasts longer, so it contributes more to the average. The average power is therefore closer to $45\,\mathrm W$ than to $120\,\mathrm W$. If a pause with the motor off is inserted between the intervals, the total in joules stays the same while the duration over which the average is calculated increases, so the average power decreases.

::grafico{linee="0,120 2,120;2,45 10,45" area="120;0;0;2|45;0;2;10" segmenti="2,0,2,120;10,0,10,45" xmin=-0.4 xmax=10.9 ymin=0 ymax=144 nomi="t (s),P (W)" titolo="The rectangles give 240 J and 360 J. The second transfers more energy despite the lower power."}
:::

:::osservazione{titolo="Power of one force and net power"}
When speed varies, the ratio $\dfrac{W}{\Delta t}$ still gives the average power over the interval. The product $F_\parallel v$ instead gives the power of that force at a single instant, with the component and speed at that instant. A force perpendicular to the velocity has $F_\parallel=0$, so at that instant its power is zero.

A crane lifts a $100\,\mathrm{kg}$ mass at constant speed $0.20\,\mathrm{m/s}$, with $g=10\,\mathrm{m/s^2}$. The velocity is constant, so the crane's force balances the weight and equals $100\cdot10\,\mathrm N=1000\,\mathrm N$ upwards. Its useful power is $1000\cdot0.20\,\mathrm W=200\,\mathrm W$. Weight opposes the motion and does work at a rate of $-200\,\mathrm W$. The net power on the load is therefore zero and its kinetic energy stays constant.
:::

:::definizione{#rendimento titolo="Useful fraction of input energy"}
A machine takes in energy (for example electrical) and gives back part of it in the form that is needed, called **useful energy**; the rest goes into other forms, for example heating the machine. **Efficiency** $\eta$ (read "eta") is the ratio of the useful energy $E_u$ to the input energy $E_i$ ("i" stands for input) in the same process, measured over the same interval:
$$
\eta=\frac{E_u}{E_i}=\frac{\mathcal P_u}{\mathcal P_i}.
$$
- The power ratio applies if both are average powers over the same duration, because dividing the two energies by the same duration does not change their ratio.
- Useful energy is part of the input energy, so $\eta$ is a number between $0$ and $1$. The percentage value is $100\eta\,\%$.
- If all the useful output of a first device goes into a second one, the efficiency of the combination is the product of the two efficiencies. For example, with $80\%$ and $75\%$ one has $0.80\cdot0.75=0.60$, that is, $60\%$.

If a motor takes in $500\,\mathrm{J}$ and delivers $350\,\mathrm{J}$ of useful energy, the efficiency is $\dfrac{350}{500}=0.70$, that is, $70\%$. The remaining $(500-350)\,\mathrm J=150\,\mathrm{J}$ is not useful output. If the process lasts $5\,\mathrm{s}$, the two average powers are $\dfrac{500}{5}\,\mathrm W=100\,\mathrm{W}$ and $\dfrac{350}{5}\,\mathrm W=70\,\mathrm{W}$, and their ratio is still $0.70$.
:::
