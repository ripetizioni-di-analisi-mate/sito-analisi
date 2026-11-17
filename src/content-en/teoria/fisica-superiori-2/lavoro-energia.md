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
:::

:::esempio{titolo="The relevant projection of an inclined force"}
A suitcase moves $3\,\mathrm{m}$ along a floor. A rope pulls it with $20\,\mathrm{N}$ at $60^\circ$ to the displacement. The projection along the floor is $20\cos60^\circ\,\mathrm{N}=10\,\mathrm{N}$, so the rope does $30\,\mathrm{J}$ of work. The vertical part of the pull changes the contact forces but does no direct work during horizontal displacement. Weight and normal force likewise do no work for that displacement. If the suitcase slides with friction, friction does additional negative work.

::grafico{assi=0 uguale=1 linee="-0.7,0 4.2,0" vettori="0,0,3,0,s;0,0,1.3,2.25,F" segmenti="1.3,0,1.3,2.25" xmin=-0.8 xmax=4.3 ymin=-0.6 ymax=2.8 titolo="Force and displacement form an angle of 60°. The horizontal projection is half the force."}
:::

:::osservazione{#area-lavoro titolo="Work as a signed area"}
If a graph shows the parallel force component against position along the motion, work over a constant-force segment is the signed rectangle area. The base is measured in metres, the height in newtons and the product in joules. For a series of segments add the areas. A force that grows linearly from zero gives a triangle. This interpretation will be used to derive the energy of a spring.
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

::grafico{f="100*x" area="100*x;0;0;0.10" punti="0.1,10,pieno,A" xmin=0 xmax=0.12 ymin=0 ymax=13 nomi="x (m),F (N)" titolo="The area of the triangle during loading is 0.50 J."}
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

## Power and efficiency

:::definizione{#potenza titolo="Energy transferred per unit time"}
**Average power** is work divided by positive elapsed time, $\mathcal P_m=\dfrac{W}{\Delta t}$. One watt is one joule per second. Two motors can transfer the same energy in different times. The one delivering it in less time has greater average power. For constant parallel force and constant speed, substituting displacement gives $\mathcal P=F_\parallel v$.
:::

:::definizione{#rendimento titolo="Useful fraction of input energy"}
**Efficiency** $\eta$ compares useful energy with input energy for the same process. Input energy is positive and useful output is measured over the same interval. The fraction is
$$
\eta=\frac{E_u}{E_i}=\frac{\mathcal P_u}{\mathcal P_i}.
$$
The power ratio applies when both are averages over the same duration. The percentage is $100\eta\%$. If a motor takes in $500\,\mathrm{J}$ and delivers $350\,\mathrm{J}$ of useful energy, efficiency is $70\%$ and $150\,\mathrm{J}$ is not useful output. Over $5\,\mathrm{s}$, the corresponding average powers are $100\,\mathrm{W}$ and $70\,\mathrm{W}$. Their ratio also gives $0.70$.
:::
