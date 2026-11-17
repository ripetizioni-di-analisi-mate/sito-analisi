---
titolo: Work, energy and power
sommario: Signed work, kinetic and potential energy, energy balances with and without friction, power and efficiency.
---

## Work of a constant force

:::definizione{#lavoro titolo="Force and displacement"}
The **work** done by a constant force $\vec F$ during a displacement $\vec s$ measures an energy transfer. If $\theta$ is the angle between the vectors, the definition is
$$
W=Fs\cos\theta=F_\parallel s,\qquad 1\,\mathrm{J}=1\,\mathrm{N\,m}.
$$
$F$ and $s$ are magnitudes, so the sign of work comes from the projection $F_\parallel$. A parallel component in the direction of travel gives positive work. The opposite component gives negative work. A perpendicular force has zero projection along the displacement. Work is scalar: its sign concerns the transfer, with no spatial direction.

With several forces, find the work of each force and then add with their signs. For constant forces, calculating the work of the net force gives the same result because the projections along displacement add.

A constant force can also act along a curved path divided into sections. The work in each section uses the projection of its displacement onto the fixed direction of the force. The projections add to give the projection of the overall displacement. If the object returns to the starting point, that total work is zero.
:::

:::esempio{titolo="The relevant projection of an inclined force"}
A suitcase moves $3\,\mathrm{m}$ along a floor. A rope pulls it with $20\,\mathrm{N}$ at $60^\circ$ to the displacement. The projection along the floor is $20\cos60^\circ\,\mathrm{N}=10\,\mathrm{N}$, so the rope does $30\,\mathrm{J}$ of work. The vertical part of the pull changes the contact forces but does no direct work during horizontal displacement. Weight and normal force likewise do no work for that displacement. If the suitcase slides with friction, friction does additional negative work.

::grafico{assi=0 uguale=1 linee="-0.7,0 4.2,0" vettori="0,0,3,0,s;0,0,1.3,2.25,F" segmenti="1.3,0,1.3,2.25" xmin=-0.8 xmax=4.3 ymin=-0.6 ymax=2.8 titolo="Force and displacement form an angle of 60°. The horizontal projection is half the force."}
:::

:::osservazione{#area-lavoro titolo="Work as a signed area"}
If a graph shows the parallel force component against position along the motion, work over a constant-force segment is the signed rectangle area. The base is measured in metres, the height in newtons and the product in joules. For a series of segments add the areas. A force that grows linearly from zero gives a triangle. This interpretation will be used to derive the energy of a spring.
:::

:::esempio{titolo="Positive and negative areas"}
A cart moves forwards along a horizontal track. The component of the force along the motion is $6\,\mathrm N$ over the first $4\,\mathrm m$ and $-4\,\mathrm N$ over the next $3\,\mathrm m$. In the first section, the force transfers $24\,\mathrm J$ to the cart. In the second, it removes $12\,\mathrm J$. The total work done by this force is $12\,\mathrm J$ and the distance travelled is $7\,\mathrm m$. Adding the two geometric areas loses the information about the change in the force's direction. The rectangle below the axis counts as negative.

::grafico{linee="0,6 4,6;4,-4 7,-4" area="6;0;0;4|0;-4;4;7" segmenti="4,0,4,6;4,0,4,-4;7,0,7,-4" xmin=-0.3 xmax=7.8 ymin=-5.5 ymax=7.5 nomi="x (m),F (N)" titolo="The area from 0 to 4 m gives +24 J. The area from 4 to 7 m gives −12 J."}
:::

## Kinetic energy

::::teorema{#cinetica titolo="Net work changes kinetic energy"}
A particle with mass $m$ and speed $v$ has kinetic energy $K=\dfrac12mv^2$. The **net work** done by the forces on one leg is $\Delta K=K_f-K_i$. One force may do positive work as others do negative work. The change in kinetic energy depends on the sum.
:::dimostrazione
On a straight segment with constant net force along the axis, the net work is $F_R\Delta x$. Newton's second law gives $F_R=ma$ with the signs along the axis. Using $2a\Delta x=v_f^2-v_i^2$ gives
$$
W_{\mathrm{tot}}=ma\Delta x=\frac12m(v_f^2-v_i^2)=K_f-K_i.
$$
The result holds more generally. If the force varies, divide the motion into short sections and add the energy changes. Intermediate terms cancel because the final energy on each section becomes the initial energy on the next.
:::
::::

:::esempio{titolo="Braking reduces kinetic energy"}
A $2\,\mathrm{kg}$ cart slows from $6$ to $4\,\mathrm{m/s}$. Its endpoint kinetic energies are $36$ and $16\,\mathrm{J}$. Its net work is $16-36=-20\,\mathrm{J}$. The negative sign agrees with the decrease in speed. If uniform friction is the only horizontal force and the cart travels $5\,\mathrm{m}$, its magnitude is $\dfrac{20}{5}\,\mathrm{N}=4\,\mathrm{N}$.

::grafico{f="x^2" punti="4,16,pieno,F;6,36,pieno,I" xmin=0 xmax=6.7 ymin=0 ymax=44 nomi="v (m/s),K (J)" titolo="For 2 kg, energy in joules is the square of speed in m/s."}
:::

:::esempio{titolo="Carrying energy from one section to the next"}
A $2\,\mathrm{kg}$ cart enters a section at $3\,\mathrm{m/s}$ with $K_i=9\,\mathrm J$. The resultant force does $16\,\mathrm J$ of work over the first $4\,\mathrm m$. At the transition, the cart therefore has $25\,\mathrm J$ and is travelling at $5\,\mathrm{m/s}$. A brake then does $-9\,\mathrm J$ of work over the next $3\,\mathrm m$. The second section starts with the $25\,\mathrm J$ already reached. This leaves $16\,\mathrm J$ and the final speed is $4\,\mathrm{m/s}$.

The resultant forces are constant within each section, so the slope of each segment in the graph of $K$ equals the force along the motion. The first segment rises by $16\,\mathrm J$ and the second falls by $9\,\mathrm J$. Between the endpoints, energy increases by $7\,\mathrm J$, equal to the net work over the whole path.

::grafico{linee="0,9 4,25 7,16" punti="0,9,pieno,A;4,25,pieno,B;7,16,pieno,C" xmin=-0.4 xmax=7.8 ymin=0 ymax=31 nomi="x (m),K (J)" titolo="The push ends at B and braking begins. Energy is continuous at the transition."}
:::

## Gravitational potential energy

:::definizione{#potenziale titolo="Energy associated with height"}
Near the ground take $g$ as constant. For an object of mass $m$, gravitational potential energy relative to a chosen zero level is $U_g=mgh$. Height $h$ is positive above this level and negative below it. Changing the reference adds the same constant to the energy at every point. Thus the difference between heights and the work of weight are unchanged.
$$
\Delta U_g=mg(h_f-h_i),\qquad W_g=mg(h_i-h_f)=-\Delta U_g.
$$
Weight points downwards and therefore does positive work during descent. Its work depends on the change in height. A long ramp and a shorter one with the same endpoints give the same work of gravity, even if their losses to friction differ.
:::

:::esempio{titolo="Final position below the zero level"}
A $3\,\mathrm{kg}$ object descends from $h_i=2\,\mathrm{m}$ to $h_f=-1\,\mathrm{m}$, with $g=10\,\mathrm{m/s^2}$. Relative to the chosen level, $U_i=60\,\mathrm{J}$ and $U_f=-30\,\mathrm{J}$. Thus $\Delta U_g=-90\,\mathrm{J}$ and weight does $+90\,\mathrm{J}$ of work. Choosing zero at the endpoint gives $90$ and $0\,\mathrm{J}$, with the same difference.

::grafico{f="30*x" punti="-1,-30,pieno,F;2,60,pieno,I" xmin=-1.6 xmax=2.5 ymin=-50 ymax=80 nomi="h (m),U (J)" titolo="Weight does positive work because potential energy decreases from I to F."}
:::

:::esempio{titolo="Two lengths for the same vertical drop"}
Two tracks connect the same initial and final heights. The first is $5\,\mathrm m$ long and the second $7\,\mathrm m$, but both drop by $3\,\mathrm m$. For a $2\,\mathrm{kg}$ cart with $g=10\,\mathrm{m/s^2}$, gravity does $60\,\mathrm J$ of work along either path. In the diagram, the vertical and horizontal directions use the same scale. The bent line distinguishes the two distances and represents a track with a very short transition at the bend.

If a constant tangential resistance of $4\,\mathrm N$ also acts on the cart, its work depends on the track length. The resistance does $-20\,\mathrm J$ along the first track and $-28\,\mathrm J$ along the second. The cart therefore receives $8\,\mathrm J$ more net work along the shorter track. This assumes it can complete both paths.

::grafico{assi=0 uguale=1 linee="0,3 4,0;0,3 0,0 4,0" punti="0,3,pieno,A;4,0,pieno,B" segmenti="-0.35,0,-0.35,3" etichette="-1.02,1.45,3 m;1.85,1.77,5 m;1.15,-0.35,4 m" xmin=-1.35 xmax=4.9 ymin=-0.7 ymax=3.6 titolo="The tracks connect A and B with the same vertical drop. The bent path is 3 m + 4 m long."}
:::

## Elastic potential energy

:::teorema{#elastica titolo="Energy in an ideal spring"}
Spring displacement $x$ is measured from its natural length. The spring law $F_e=-kx$ holds in the linear range. Slowly extending the spring from zero to $x>0$ needs an external force rising from zero to $kx$. The work done by the external force is the area under the line, a triangle of base $x$ and height $kx$. The work is stored in the spring as elastic potential energy,
$$
U_e=\frac12 kx^2.
$$
Compression of the same magnitude gives the same energy because squaring removes the sign. While relaxing, the spring does positive work if it moves towards natural length. In general, its work between configurations is $W_e=U_{e,i}-U_{e,f}$. Force depends on $x$, so multiplying the final force by the full displacement would double the loading work from zero.
:::

:::esempio{titolo="Area under the loading force of a spring"}
A spring with $k=100\,\mathrm{N/m}$ is extended by $0.10\,\mathrm{m}$. The loading force reaches $10\,\mathrm{N}$. The energy is $\dfrac12\cdot0.10\cdot10\,\mathrm{J}=0.50\,\mathrm{J}$. The factor one half reflects the linear rise of force over the displacement.

::grafico{f="100*x" area="100*x;0;0;0.10" punti="0.1,10,pieno,A" etichette="0.086,-0.58,0.10 m" xmin=0 xmax=0.12 ymin=0 ymax=13 nomi="x (m),F (N)" titolo="The area of the triangle during loading is 0.50 J."}
:::

:::esempio{titolo="Partially releasing a spring"}
A spring with $k=250\,\mathrm{N/m}$ goes from a compression of $0.12\,\mathrm m$ to one of $0.04\,\mathrm m$. The deformations are negative and the free end moves in the positive direction. The spring force starts at $30\,\mathrm N$ and falls to $10\,\mathrm N$. The energies at the two endpoints are $1.8$ and $0.2\,\mathrm J$. The spring force does positive work of $1.6\,\mathrm J$.

In the graph, the force is positive throughout the interval. The area is a trapezoid with base $0.08\,\mathrm m$ and mean force $20\,\mathrm N$. This gives the same work as the difference between the two energies. The squared-deformation formula therefore applies separately to the two deformations measured from the natural length, before subtraction.

::grafico{f="-250*x" area="-250*x;0;-0.12;-0.04" punti="-0.12,30,pieno,I;-0.04,10,pieno,F" etichette="-0.135,-2.25,−0.12 m;-0.054,-2.25,−0.04 m" xmin=-0.15 xmax=0.018 ymin=-4 ymax=38 nomi="x (m),F_e (N)" titolo="The spring does positive work as the end moves from I towards F."}
:::

## Conservation of mechanical energy

:::teorema{#conservazione titolo="Transfers between kinetic and potential energy"}
Consider mechanical energy $E_m=K+U_g+U_e$, including the potential energies of the relevant interactions. If only weight and spring force do work, $W_{\mathrm{tot}}=-\Delta U_g-\Delta U_e$. The work–kinetic energy theorem then gives $\Delta E_m=0$. A stationary constraint exerting a force always perpendicular to displacement may still be present because its work is zero.
$$
K_i+U_{g,i}+U_{e,i}=K_f+U_{g,f}+U_{e,f}.
$$
From rest, after descending a height $h$ without friction, all the decrease in gravitational potential energy becomes kinetic energy. Thus $mgh=\dfrac12mv^2$, giving $v=\sqrt{2gh}$. Mass cancels because all the energies involved are proportional to $m$ in this case.
:::

:::osservazione{#energia-attrito titolo="Energy balance when other forces do work"}
If additional forces do work $W_{\mathrm{oth}}$, then $\Delta E_m=W_{\mathrm{oth}}$. Friction opposing sliding along a stationary surface does negative work on the object and reduces its mechanical energy. Some energy goes, for example, into internal energy of the object and surface. A motor can instead transfer energy to the object and increase $E_m$. State which forces are already included through potential energy to avoid counting them twice.
:::

:::esempio{titolo="The same drop with and without friction"}
A $2\,\mathrm{kg}$ cart starts from rest and drops $5\,\mathrm{m}$ with $g=10\,\mathrm{m/s^2}$. Without friction it has $K_f=100\,\mathrm{J}$ and speed $10\,\mathrm{m/s}$. If friction does $-36\,\mathrm{J}$ of work, the balance gives $K_f=64\,\mathrm{J}$ and speed $8\,\mathrm{m/s}$. The drop is identical and the work of the other forces changes. The result assumes the cart reaches the bottom.
:::

:::attenzione{titolo="Check that the cart reaches the next section"}
A $2\,\mathrm{kg}$ cart enters a $4\,\mathrm m$ horizontal section at $4\,\mathrm{m/s}$ against a constant resistance of $5\,\mathrm N$. The kinetic energy on entry is $16\,\mathrm J$. Crossing the whole section would require a loss of $20\,\mathrm J$, so the cart stops earlier. The stopping point satisfies $5d=16$, giving $d=3.2\,\mathrm m$ from the start. A motor placed after the section could supply more energy only if the cart reached it. Check the balance in every phase leading to the final point.
:::

:::esempio{titolo="Descent, rough section and compression"}
A $2\,\mathrm{kg}$ cart starts from rest at A, $2.5\,\mathrm m$ above the horizontal track. The descent to B is smooth. Between B and C it slides for $2\,\mathrm m$ against a constant friction force of $7\,\mathrm N$. From C it enters a smooth section and compresses a spring with constant $200\,\mathrm{N/m}$ until it momentarily stops at D. Take $g=10\,\mathrm{m/s^2}$.

::grafico{assi=0 uguale=1 linee="0,2.5 0.8,2.42 1.6,2 2.3,1 3.1,0.22 4,0 8,0;6.48,0.22 6.64,0.34 6.86,0.1 7.08,0.34 7.3,0.1 7.52,0.34 7.7,0.22;7.7,0 7.7,0.6" punti="0,2.5,pieno,A;4,0,pieno,B;6,0,pieno,C;6.6,0,pieno,D" segmenti="4,-0.3,6,-0.3" etichette="4.72,-0.56,2 m" xmin=-0.7 xmax=8.45 ymin=-0.82 ymax=3.15 titolo="The descent is smooth. Friction acts only between B and C. Compression takes place on the smooth section."}

On arrival at B, the descent has converted the $50\,\mathrm J$ of gravitational energy into kinetic energy. Friction in the next section does $-7\cdot2\,\mathrm J=-14\,\mathrm J$ of work. At C, $36\,\mathrm J$ of mechanical energy remains, still entirely kinetic. The table summarises the states, with $U=U_g+U_e$.

| Point | $K$ (J) | $U$ (J) | $E_m$ (J) |
| --- | ---: | ---: | ---: |
| A | 0 | 50 | 50 |
| B | 50 | 0 | 50 |
| C | 36 | 0 | 36 |
| D | 0 | 36 | 36 |

From C to D, mechanical energy is conserved and transfers entirely to the spring. The equation $\dfrac12\cdot200x^2=36$ gives a compression of magnitude $0.60\,\mathrm m$. Over the full path, the drop from $50$ to $36\,\mathrm J$ equals the work of the only force unaccounted for by potential energy. The changes in $K$ in each section must be kept separate because the speed at B differs from the speed at C.

::grafico{linee="4,50 6,36 6.6,36" punti="4,50,pieno,B;6,36,pieno,C;6.6,36,pieno,D" xmin=3.65 xmax=7.25 ymin=28 ymax=56 nomi="x (m),E_m (J)" titolo="On the horizontal track, mechanical energy decreases only while the cart slides through the rough section."}
:::

## Power and efficiency

:::definizione{#potenza titolo="Energy transferred per unit time"}
**Average power** is work divided by positive elapsed time, $\mathcal P_m=\dfrac{W}{\Delta t}$. One watt is one joule per second. Two motors can transfer the same energy in different times. The one delivering it in less time has greater average power. For constant parallel force and constant speed, substituting displacement gives $\mathcal P=F_\parallel v$.
:::

:::esempio{titolo="Two durations and one average power"}
A motor delivers $120\,\mathrm W$ for $2\,\mathrm s$ and then $45\,\mathrm W$ for $8\,\mathrm s$. In each interval, the product of power and duration is a rectangle on the graph. The first rectangle gives $240\,\mathrm J$ and the second $360\,\mathrm J$. The total work is therefore $600\,\mathrm J$ and the average power over $10\,\mathrm s$ is $60\,\mathrm W$.

The longer interval contributes more to the average. The average power is therefore closer to $45\,\mathrm W$ than to $120\,\mathrm W$. If there is a pause with the motor off between the intervals, the total in joules stays the same while the duration over which the average is calculated increases.

::grafico{linee="0,120 2,120;2,45 10,45" area="120;0;0;2|45;0;2;10" segmenti="2,0,2,120;10,0,10,45" xmin=-0.4 xmax=10.9 ymin=0 ymax=144 nomi="t (s),P (W)" titolo="The rectangles give 240 J and 360 J. The second transfers more energy despite the lower power."}
:::

:::osservazione{titolo="Power of one force and net power"}
When speed varies, the ratio $\dfrac{W}{\Delta t}$ still describes the average over the interval. The product $F_\parallel v$ gives the power of that force at the instant when the component and speed are measured. A crane lifting a $100\,\mathrm{kg}$ mass at constant speed $0.20\,\mathrm{m/s}$, with $g=10\,\mathrm{m/s^2}$, exerts an upward force of $1000\,\mathrm N$. Its useful power is $200\,\mathrm W$. Gravity does work at a rate of $-200\,\mathrm W$, so the net power on the load is zero and its kinetic energy stays constant.
:::

:::definizione{#rendimento titolo="Useful fraction of input energy"}
**Efficiency** $\eta$ compares useful energy with input energy for the same process. Input energy is positive and useful output is measured over the same interval. The fraction is
$$
\eta=\frac{E_u}{E_i}=\frac{\mathcal P_u}{\mathcal P_i}.
$$
The power ratio applies when both are averages over the same duration. The percentage is $100\eta\%$. If a motor takes in $500\,\mathrm{J}$ and delivers $350\,\mathrm{J}$ of useful energy, efficiency is $70\%$ and $150\,\mathrm{J}$ is not useful output. Over $5\,\mathrm{s}$, the corresponding average powers are $100\,\mathrm{W}$ and $70\,\mathrm{W}$. Their ratio also gives $0.70$.
:::
