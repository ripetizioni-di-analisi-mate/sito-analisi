---
titolo: Momentum and collisions
sommario: Impulse, centre of mass and conservation laws in elastic and inelastic collisions.
---

## Momentum

:::definizione{#quantita-moto titolo="Momentum vector"}
An **inertial frame** is a frame of reference in which Newton's first law holds: a body acted on by no forces stays at rest or moves in a straight line at constant speed. The floor of a laboratory is, to a very good approximation, an inertial frame.

In an inertial frame, a body of mass $m$ and velocity $\vec v$ has **momentum**
$$
\vec p=m\vec v.
$$
Momentum is a vector, that is, a quantity with a magnitude (a positive value), a direction and a sense. Mass is positive, so $\vec p$ has the same direction and sense as $\vec v$, and its magnitude is $p=mv$. The unit is the kilogram metre per second, $\mathrm{kg\cdot m/s}$.

In one dimension, that is, for motion along a straight line, an axis with a positive direction is chosen. The **component** $v_x$ of the velocity equals $+v$ if the body moves in the positive direction and $-v$ if it moves the opposite way. The momentum component is $p_x=mv_x$ and has the same sign as $v_x$. With the same axis for every body, components of opposite sign subtract from one another when the total is calculated.

The momentum of a system, that is, of a set of bodies, is the vector sum of the momenta of the individual bodies:
$$
\vec P=\sum_jm_j\vec v_j=m_1\vec v_1+m_2\vec v_2+\dots
$$
The symbol $\sum$ (capital sigma) denotes a sum, and the index $j$ numbers the bodies. Two bodies can have $\vec P=0$ while both are moving, if their momenta have the same magnitude and opposite directions. In that case the kinetic energies $K=\dfrac12mv^2$ are both positive, because they contain the square of the velocity, and their sum stays positive. The two quantities therefore carry different information. Momentum is a vector and records the direction of the motion. Kinetic energy is a **scalar**, that is, a number with no direction, and it is a sum of terms that are never negative.

Momentum depends on the frame, because the velocity of a body depends on who measures it. If an observer moves with velocity $\vec u$ relative to the floor, the velocity of the body measured by that observer is $\vec v\,'=\vec v-\vec u$. For example, a cyclist at $10\,\mathrm{m/s}$, seen by an observer moving the same way at $4\,\mathrm{m/s}$, has velocity $6\,\mathrm{m/s}$. To compare the data of all the bodies a single frame is therefore used, usually the laboratory floor.

A system is **closed** if no body enters or leaves it, so its total mass $M$ stays constant. Two inertial observers assign different values to $\vec P$, because each velocity changes by $\vec u$ and therefore $\vec P\,'=\vec P-M\vec u$. For a closed system the term $M\vec u$ is the same at every instant, so both observers measure the same change in $\vec P$ between two instants.
:::

:::esempio{titolo="Spheres along perpendicular axes"}
A $2\,\mathrm{kg}$ sphere travels east at $3\,\mathrm{m/s}$ and a $1\,\mathrm{kg}$ sphere travels north at $8\,\mathrm{m/s}$. The $x$ axis is taken positive towards the east and the $y$ axis positive towards the north.
- The first sphere has $\vec p_1=(2\cdot3,\;0)\,\mathrm{kg\cdot m/s}=(6,0)\,\mathrm{kg\cdot m/s}$.
- The second sphere has $\vec p_2=(0,\;1\cdot8)\,\mathrm{kg\cdot m/s}=(0,8)\,\mathrm{kg\cdot m/s}$.

The total is obtained by adding component by component, so $\vec P=(6,8)\,\mathrm{kg\cdot m/s}$. The axes are perpendicular, so by Pythagoras' theorem the magnitude of the total is $\sqrt{6^2+8^2}\,\mathrm{kg\cdot m/s}=\sqrt{100}\,\mathrm{kg\cdot m/s}=10\,\mathrm{kg\cdot m/s}$. The sum of the magnitudes, $14\,\mathrm{kg\cdot m/s}$, would be the magnitude of the total only for two parallel vectors pointing the same way.

::grafico{uguale=1 vettori="0,0,6,0,p_1;6,0,6,8,p_2;0,0,6,8,P" xmin=-2 xmax=9 ymin=-2 ymax=10 nomi="pₓ (kg·m/s),pᵧ (kg·m/s)" titolo="Add the northward vector to the tip of the eastward vector"}
:::

:::esempio{titolo="Impulse when only the direction changes"}
A $0.50\,\mathrm{kg}$ ball enters a bend at $6\,\mathrm{m/s}$ heading east and leaves at the same speed heading north. The **speed** is the magnitude of the velocity. Taking east and north as positive, the momentum has magnitude $0.50\cdot6\,\mathrm{kg\cdot m/s}=3\,\mathrm{kg\cdot m/s}$ at the start and at the end, and
$$
\vec p_i=(3,0)\,\mathrm{kg\cdot m/s},\qquad
\vec p_f=(0,3)\,\mathrm{kg\cdot m/s}.
$$
The change is calculated by subtracting component by component:
$$
\Delta\vec p=\vec p_f-\vec p_i=(0-3,\;3-0)\,\mathrm{kg\cdot m/s}=(-3,3)\,\mathrm{kg\cdot m/s}.
$$
The $x$ component is negative and the $y$ component is positive, so the change points north-west. Its magnitude is $\sqrt{3^2+3^2}\,\mathrm{kg\cdot m/s}$. The kinetic energy is $\dfrac12\cdot0.50\cdot6^2\,\mathrm J=9\,\mathrm J$ both at the start and at the end. The difference of the magnitudes is zero, while $\Delta\vec p$ has magnitude $3\sqrt 2\,\mathrm{kg\cdot m/s}$. Therefore the change in momentum is found by subtracting the components of the vectors, and not the magnitudes.

In the figure the arrow $J$ goes from the tip of $\vec p_i$ to the tip of $\vec p_f$ and represents the change $\Delta\vec p$, which is called the impulse.

::grafico{vettori="0,0,3,0,p_i;0,0,0,3,p_f;3,0,0,3,J" uguale=1 xmin=-1 xmax=4 ymin=-1 ymax=4 nomi="pₓ,pᵧ" titolo="Impulse points from the tip of the initial momentum vector to the tip of the final one. Units in kg·m/s."}
:::

## Impulse

:::teorema{#impulso titolo="Impulse and change in momentum"}
The **impulse** of a constant force $\vec F$ acting for a time interval $\Delta t$ (read «delta t») is the vector $\vec J=\vec F\,\Delta t$, with the same direction as the force. The **net force** $\vec F_{\mathrm{tot}}$ is the vector sum of all the forces acting on the body.

For a body of constant mass, the impulse of the net force between two instants equals the change in momentum. If the net force is constant, the acceleration is constant and equals $\vec a=\dfrac{\vec v_f-\vec v_i}{\Delta t}$. By Newton's second law, $\vec F_{\mathrm{tot}}=m\vec a$, one then has
$$
\vec J=\vec F_{\mathrm{tot}}\Delta t
      =m\vec a\,\Delta t=m(\vec v_f-\vec v_i)=\vec p_f-\vec p_i.
$$
The unit of impulse is the newton second, $\mathrm{N\cdot s}$. One newton equals $1\,\mathrm{kg\cdot m/s^2}$, so $1\,\mathrm{N\cdot s}=1\,\mathrm{kg\cdot m/s}$, the unit of momentum.

If the force varies with time, the interval is divided into short parts in which the force is almost constant, and the impulses of the individual parts are added. In one dimension, on the graph of the component $F_x$ against time, the impulse of a short part is the area of a thin rectangle of base $\Delta t$ and height $F_x$. Therefore the total impulse is the **signed area** between the graph $F_x(t)$ and the time axis. Areas above the axis, where the force is positive, count with a plus sign. Areas below the axis, where the force is negative, count with a minus sign.

The impulse obtained from $\Delta\vec p$ is the impulse of the net force, that is, of all the forces together. Isolating the contribution of a single force requires further data on the other forces.

The **average force** is the constant force that would give the same impulse over the same interval:
$$
\vec F_m=\frac{\Delta\vec p}{\Delta t}.
$$
For the same change in momentum, a longer time gives an average force of smaller magnitude. This explains the use of shock absorbers and deformable surfaces, which lengthen the duration of the stop. The average value depends only on the change and the duration, while the **peak**, that is, the maximum value of the force, depends on how the force varies from instant to instant.
:::

:::esempio{titolo="Rebound and stop"}
The incoming direction is taken as positive. A $0.20\,\mathrm{kg}$ ball arrives at $5\,\mathrm{m/s}$, so $v_i=+5\,\mathrm{m/s}$, and rebounds at $3\,\mathrm{m/s}$ in the opposite direction, so $v_f=-3\,\mathrm{m/s}$. Thus
$$
J_x=m(v_f-v_i)=0.20\cdot(-3-5)\,\mathrm{N\cdot s}=0.20\cdot(-8)\,\mathrm{N\cdot s}=-1.6\,\mathrm{N\cdot s}.
$$
If the ball had merely stopped, the final component would have been zero and the impulse $0.20\cdot(0-5)\,\mathrm{N\cdot s}=-1\,\mathrm{N\cdot s}$. The rebound requires an impulse of larger magnitude, because the velocity goes from $+5$ to $0$ and then from $0$ to $-3\,\mathrm{m/s}$, so it changes by $8\,\mathrm{m/s}$ in total instead of $5\,\mathrm{m/s}$.

::grafico{assi=0 vettori="0,1,5,1,v_i;0,0,-3,0,v_f" xmin=-4 xmax=6 ymin=-.8 ymax=2 titolo="Right is positive. The lengths depict the two speeds"}
:::

:::esempio{titolo="Separating contact impulse from the impulse of weight"}
A ball of mass $0.20\,\mathrm{kg}$ moves vertically. The axis is positive upwards. The ball reaches the floor with $v_i=-4\,\mathrm{m/s}$ and leaves with $v_f=+3\,\mathrm{m/s}$. Contact lasts $0.020\,\mathrm s$, air resistance is negligible and $g=10\,\mathrm{m/s^2}$.

The change in momentum is
$$
\Delta p=m(v_f-v_i)=0.20\cdot\big(3-(-4)\big)\,\mathrm{N\cdot s}=0.20\cdot7\,\mathrm{N\cdot s}=1.4\,\mathrm{N\cdot s}.
$$
During contact two forces act, the weight and the force of the floor, so $\Delta p$ is the sum of their impulses. The weight equals $mg$ and points downwards, so its impulse is $-mg\,\Delta t=-0.20\cdot10\cdot0.020\,\mathrm{N\cdot s}=-0.04\,\mathrm{N\cdot s}$. The impulse of the floor is found by subtracting the contribution of the weight from the total impulse:
$$
J_{\mathrm{pav}}=\Delta p-(-mg\,\Delta t)
                 =1.4+0.04=1.44\,\mathrm{N\cdot s}.
$$
The weight removes a small part of the upward momentum, so the floor must provide a positive impulse slightly greater than the measured change.
:::

:::esempio{titolo="Impulse from four sensor readings"}
A sensor records the component of the net force along a track at four instants. Between two readings the force is approximated by the straight segment joining them. The full interval lasts $0.20\,\mathrm s$.

| $t$ (s) | $F_x$ (N) | Following interval |
| ---: | ---: | :--- |
| 0 | 0 | rising |
| 0.05 | 24 | falling to zero |
| 0.15 | 0 | negative correction |
| 0.20 | −8 | end of measurement |

::grafico{linee="0,0 50,24 150,0 200,-8" area=".48*x;0;0;50|36-.24*x;0;50;150|0;24-.16*x;150;200" punti="50,24,pieno;150,0,pieno;200,-8,pieno" xmin=0 xmax=250 ymin=-12 ymax=28 nomi="t (ms),Fₓ (N)" titolo="The graph uses milliseconds. The negative segment begins at 150 ms."}

In the graph time is in milliseconds ($1\,\mathrm{ms}=0.001\,\mathrm s$). The three areas are triangles, and the area of a triangle is half the base times the height.
- From $0$ to $0.05\,\mathrm s$: $\dfrac12\cdot0.05\cdot24\,\mathrm{N\cdot s}=0.60\,\mathrm{N\cdot s}$.
- From $0.05$ to $0.15\,\mathrm s$: $\dfrac12\cdot0.10\cdot24\,\mathrm{N\cdot s}=1.20\,\mathrm{N\cdot s}$.
- From $0.15$ to $0.20\,\mathrm s$, below the axis: $\dfrac12\cdot0.05\cdot(-8)\,\mathrm{N\cdot s}=-0.20\,\mathrm{N\cdot s}$.

The total is $(0.60+1.20-0.20)\,\mathrm{N\cdot s}=1.60\,\mathrm{N\cdot s}$. The average force is $\dfrac{1.60}{0.20}\,\mathrm N=8\,\mathrm N$, below the largest reading of $24\,\mathrm N$. The sensor records only four values, so a peak between two readings would be missed by the segment model and would change the estimate. With closer readings the peak can be measured.
:::

## Isolated systems

:::teorema{#conservazione-moto titolo="Total momentum balance"}
A system is the set of bodies chosen to be studied together, for example two carts that collide. For a closed system the forces fall into two groups.
- **Internal forces** are those that one body of the system exerts on another body of the system.
- **External forces** are those exerted by bodies that are not part of the system, such as the Earth (the weight), the floor, the air.

By Newton's third law (the law of action and reaction), internal forces come in equal and opposite pairs and act for the same time, so their impulses are opposite in pairs. For each body the change in momentum is the sum of the internal impulse and the external impulse it receives. Adding these equations for all the bodies, the internal impulses cancel in pairs, so
$$
\vec P_f-\vec P_i=\vec J_{\mathrm{est}} .
$$
A system is called **isolated** when the total external impulse is zero. In that case $\vec P_f=\vec P_i$, that is, the total momentum is conserved. The same balance applies to a single component. If the external impulse along an axis is zero, the component of the total along that axis is conserved. On a horizontal track the weight and the **normal force** (the force with which the track supports the cart, perpendicular to the track) are vertical, so their impulses are vertical. Neglecting friction, the external impulse along the track is zero, so the component along the track is conserved even though vertical forces act on the carts.

A **collision** is a brief interaction between two bodies, during which the bodies exchange very strong internal forces. Over such a short interval the impulse of the external forces is often small compared with the impulse exchanged between the bodies, and in that case it is neglected. The comparison concerns impulses, that is, products of force and time, and not forces alone. During contact the momenta of the individual bodies change. Their sum is conserved, provided the system includes every interacting body and only the components along which the external impulse is negligible are considered.
:::

:::esempio{titolo="Testing the isolation assumption"}
During a collision lasting $0.010\,\mathrm s$, one cart receives an impulse of magnitude $3\,\mathrm{N\cdot s}$ from another. The total external resistance is at most $2\,\mathrm N$, so the magnitude of its impulse on the system is at most $2\cdot0.010\,\mathrm{N\cdot s}=0.020\,\mathrm{N\cdot s}$.

This impulse is compared with the exchange between the carts: $\dfrac{0.020}{3}\approx0.0067$, that is, about $0.67\%$. Therefore the error made by setting the total momenta before and after the collision equal is below one per cent of the exchange. If the total is near zero, the same external impulse can instead be a much larger fraction of the total.

With the same internal exchange of $3\,\mathrm{N\cdot s}$ and a collision of different duration, the same one per cent precision requires an external impulse of at most $0.01\cdot3\,\mathrm{N\cdot s}=0.03\,\mathrm{N\cdot s}$. With a force of $2\,\mathrm N$ this impulse is reached after $\dfrac{0.03}{2}\,\mathrm s=0.015\,\mathrm s=15\,\mathrm{ms}$. The approximation therefore stays within one per cent for collisions lasting up to $15\,\mathrm{ms}$.

In the figure the impulse is in millinewton seconds ($1\,\mathrm{mN\cdot s}=0.001\,\mathrm{N\cdot s}$) and point $A$ corresponds to the $10\,\mathrm{ms}$ collision.

::grafico{linee="0,0 25,50;0,30 25,30" punti="10,20,pieno,A;15,30,pieno,B" xmin=0 xmax=30 ymin=0 ymax=55 nomi="t (ms),J (mN·s)" titolo="The rising line is the external bound. It reaches the 30 mN·s threshold, equal to 0.03 N·s, at 15 ms."}
:::

:::esempio{titolo="Putting a wall inside the system boundary"}
A $2\,\mathrm{kg}$ cart approaches a wall at $3\,\mathrm{m/s}$ and rebounds at $2\,\mathrm{m/s}$ in the opposite direction. The direction towards the wall is taken as positive, so
$$
\Delta p=m(v_f-v_i)=2\cdot(-2-3)\,\mathrm{kg\cdot m/s}=-10\,\mathrm{N\cdot s}.
$$
- If the system contains only the cart, the force of the wall is external. The impulse of $-10\,\mathrm{N\cdot s}$ comes from outside and changes the momentum of the system.
- If the system also contains the wall and the Earth to which it is fixed, the same contact force is internal. By the third law the wall–Earth system receives an impulse of $+10\,\mathrm{N\cdot s}$, which offsets the change of the cart.

The mass of the Earth is about $6\cdot10^{24}\,\mathrm{kg}$, so the change in its velocity is far too small to be observed.

In the figure the vertical line is the wall. The arrow $J_1$ is the impulse on the cart, pointing left, and the arrow $J_2$ is the impulse on the wall, pointing right.

::grafico{assi=0 vettori="0,1,-3,1,J₁;0,0,3,0,J₂" linee="0,-.5 0,1.5" xmin=-5 xmax=5 ymin=-.8 ymax=1.8 titolo="Cart–wall interaction. The two contact impulses have equal magnitudes and opposite directions."}
:::

## Centre of mass

:::definizione{#centro-massa titolo="Coordinates and mass-weighted motion"}
A **weighted average** of some values is calculated by multiplying each value by its weight, adding the products and dividing by the sum of the weights. The **centre of mass** of a system is the point whose position is the average of the positions of the bodies, weighted by their masses. With $\vec r_j$ the position of body $j$ and $M=\sum_jm_j$ the total mass,
$$
\vec r_{CM}=\frac{\sum_jm_j\vec r_j}{M}.
$$
In one dimension, with two bodies, the coordinate is $x_{CM}=\dfrac{m_1x_1+m_2x_2}{m_1+m_2}$. The centre-of-mass coordinate lies between the smallest and the largest coordinates of the bodies. With two bodies it is closer to the one of greater mass.

Between two instants each body moves by $\Delta\vec r_j$ and the masses do not change, so the centre of mass moves by $\Delta\vec r_{CM}=\dfrac{\sum_jm_j\Delta\vec r_j}{M}$. Dividing by $\Delta t$ gives the velocity of the centre of mass:
$$
\vec v_{CM}=\frac{\sum_jm_j\vec v_j}{M}=\frac{\vec P}{M}.
$$
Hence, if the total mass is constant and the external impulse is zero, $\vec P$ is constant and so the velocity of the centre of mass is also constant. During a collision the individual velocities change, while the centre of mass continues with the same velocity. The **centre-of-mass frame** is the frame that moves with velocity $\vec v_{CM}$. In it every velocity decreases by $\vec v_{CM}$, so the total momentum is $\vec P-M\vec v_{CM}=0$. This frame simplifies the study of elastic collisions.
:::

:::esempio{titolo="A mass-weighted average"}
A $2\,\mathrm{kg}$ mass is at $x=0$ and a $6\,\mathrm{kg}$ mass is at $x=4\,\mathrm m$. The centre-of-mass coordinate is
$$
x_{CM}=\frac{2\cdot0+6\cdot4}{2+6}\,\mathrm m=\frac{24}{8}\,\mathrm m=3\,\mathrm m.
$$
The centre of mass is $3\,\mathrm m$ from the smaller mass and $1\,\mathrm m$ from the larger mass.

If the origin is moved three metres to the right, every coordinate decreases by $3\,\mathrm m$, so the two coordinates become $-3\,\mathrm m$ and $1\,\mathrm m$. The centre of mass now has coordinate $\dfrac{2\cdot(-3)+6\cdot1}{8}\,\mathrm m=0$. The physical point is the same, and only the coordinates change.

::grafico{assi=0 linee="-0.4,0 4.58,0;0,-.14 0,.14;3,-.14 3,.14;4,-.14 4,.14" vettori="4.58,0,4.99,0" punti="0,0,pieno;3,0,pieno;4,0,pieno" etichette="-.08,.42,m₁;2.86,.42,CM;3.91,.42,m₂;-.03,-.38,0;2.95,-.38,3;3.95,-.38,4;4.5,.42,x (m)" xmin=-.65 xmax=5.25 ymin=-.65 ymax=.77 titolo="The centre of mass is closer to the larger mass"}
:::

:::esempio{titolo="Internal displacement on a free platform"}
A $60\,\mathrm{kg}$ person and a $40\,\mathrm{kg}$ platform are initially at rest. The floor is smooth, that is, frictionless, and the person walks $2\,\mathrm m$ relative to the platform. The direction in which the person walks is taken as positive, and $d$ denotes the signed displacement of the platform relative to the floor, in metres. Relative to the floor the person moves by their own step plus the displacement of the platform, that is, by $d+2$.

No external horizontal forces act on the person–platform system and the system starts at rest, so the centre of mass stays still. Its displacement is $\dfrac{60(d+2)+40d}{100}$, so the numerator is zero:
$$
60(d+2)+40d=0,\qquad 100d+120=0,\qquad d=-1.2\,\mathrm m.
$$
The platform moves back by $1.2\,\mathrm m$, and the displacement of the person relative to the floor is $(-1.2+2)\,\mathrm m=+0.8\,\mathrm m$. The two displacements, multiplied by the masses, give $60\cdot0.8=48$ and $40\cdot(-1.2)=-48$, so they exactly offset each other.

::grafico{assi=0 linee="-1.55,-.33 1.34,-.33;-1.2,-.42 -1.2,-.24;0,-.42 0,-.24;.8,-.42 .8,-.24;-1.2,0 0,0;0,.9 .8,.9" vettori="0,.25,-1.2,.25,d;0,1.15,.8,1.15,Δx;1.34,-.33,1.6,-.33" etichette="-1.35,-.65,−1.2;-.03,-.65,0;.71,-.65,0.8;1.16,-.66,x (m)" xmin=-1.75 xmax=1.85 ymin=-.92 ymax=1.67 titolo="The platform and the person move −1.2 m and +0.8 m, respectively, relative to the floor."}
:::

:::osservazione{titolo="Using the centre of mass of an extended body"}
A rod is **uniform** if its mass is distributed evenly along its whole length, and in that case its centre of mass is its midpoint. A **point load** is a body small enough to be treated as a point. To find the centre of mass of a uniform rod and a point load, the whole mass of the rod is placed at its midpoint. This substitution preserves the numerator of the weighted average, because the sum of the contributions of the small pieces of the rod equals the mass of the rod times the coordinate of the midpoint. If the rod is $4\,\mathrm m$ long and runs from zero to four metres, its mass is placed at $x=2\,\mathrm m$. For example, with a $3\,\mathrm{kg}$ rod and a $1\,\mathrm{kg}$ load at $x=4\,\mathrm m$ one obtains $x_{CM}=\dfrac{3\cdot2+1\cdot4}{3+1}\,\mathrm m=2.5\,\mathrm m$. For a rod that is denser at one end, the centre of mass is not the midpoint, so its position must first be known or measured.
:::

## Perfectly inelastic collision and recoil

:::teorema{#anelastico titolo="Bodies that stick or separate"}
A collision is **perfectly inelastic** when the two bodies stay joined after the collision, so they have the same final velocity $\vec v_f$. Neglecting external impulse during the collision, momentum is conserved, that is, $m_1\vec v_{1i}+m_2\vec v_{2i}=(m_1+m_2)\vec v_f$. Dividing by the total mass gives
$$
\vec v_f=\frac{m_1\vec v_{1i}+m_2\vec v_{2i}}{m_1+m_2}.
$$
This formula is the same as that of the velocity of the centre of mass, so the final velocity equals the initial velocity of the centre of mass.

The **relative velocity** of the two bodies is the difference of their velocities, $\vec v_{1i}-\vec v_{2i}$, that is, the velocity of the first body as seen from the second. The initial kinetic energy includes the energy of the common motion and that of the relative motion of the two bodies. When the bodies stick, the relative velocity becomes zero and the part due to the relative motion disappears. The difference goes into deformation, heating and other energy transfers. Conserving kinetic energy, as well as momentum, would be valid only if the initial relative velocity were zero, that is, if there were no collision at all in the model.

**Recoil** is the backward motion of a body that pushes another body away, as with a boat someone jumps from. Consider two bodies initially at rest that separate with zero external impulse. The initial total is zero and must stay zero, so $m_1\vec v_1+m_2\vec v_2=0$, that is, $m_1\vec v_1=-m_2\vec v_2$. The two momenta have the same magnitude and opposite directions, so the lighter body acquires the velocity of greater magnitude. Since $v=\dfrac pm$, the kinetic energy can also be written as
$$
K=\frac12mv^2=\frac{p^2}{2m},
$$
so, for the same momentum magnitude, the lighter body also has the greater kinetic energy. The final kinetic energy is positive even though the initial one is zero, because internal energy is converted, for instance when a compressed spring is released between the bodies.
:::

:::esempio{titolo="Sticking with opposing motion"}
A $3\,\mathrm{kg}$ cart moves to the right at $4\,\mathrm{m/s}$ and a $2\,\mathrm{kg}$ cart moves to the left at $1\,\mathrm{m/s}$. With the axis positive to the right, the total before the collision is
$$
P=\big(3\cdot4+2\cdot(-1)\big)\,\mathrm{kg\cdot m/s}=(12-2)\,\mathrm{kg\cdot m/s}=10\,\mathrm{kg\cdot m/s}.
$$
After sticking, the two carts form a $5\,\mathrm{kg}$ body with the same momentum, so they move to the right at $\dfrac{10}{5}\,\mathrm{m/s}=2\,\mathrm{m/s}$.

The initial kinetic energy is $\dfrac12\cdot3\cdot4^2\,\mathrm J+\dfrac12\cdot2\cdot1^2\,\mathrm J=24\,\mathrm J+1\,\mathrm J=25\,\mathrm J$, and the final one is $\dfrac12\cdot5\cdot2^2\,\mathrm J=10\,\mathrm J$. Thus $15\,\mathrm J$ of kinetic energy is lost, while the momentum is $10\,\mathrm{kg\cdot m/s}$ before and after.

::grafico{assi=0 vettori="0,1.5,4,1.5,u₁;0,1,-1,1,u₂;0,0,2,0,v" xmin=-2 xmax=5 ymin=-.7 ymax=2.1 titolo="The carts approach in opposite directions. The initial velocities appear above the common final velocity."}
:::

:::osservazione{titolo="How much kinetic energy can disappear when bodies stick"}
Let $u_1$ and $u_2$ be the signed velocities before the collision and $V$ the velocity of the centre of mass, with $M=m_1+m_2$. Each velocity is written as $u_j=V+(u_j-V)$, that is, the velocity of the centre of mass plus the velocity relative to the centre of mass. Expanding the square of the binomial,
$$
\frac12m_ju_j^2=\frac12m_jV^2+m_jV(u_j-V)+\frac12m_j(u_j-V)^2.
$$
Adding for the two bodies gives
$$
K_i=\frac{1}{2}(m_1+m_2)V^2+
    \frac{1}{2}m_1(u_1-V)^2+\frac{1}{2}m_2(u_2-V)^2.
$$
The cross terms cancel, because their sum is $V\big[m_1(u_1-V)+m_2(u_2-V)\big]$ and $m_1(u_1-V)+m_2(u_2-V)=m_1u_1+m_2u_2-MV=0$ by the definition of $V$. If the system is isolated, $V$ is conserved and the first term stays the same. After sticking both bodies have velocity $V$, so the two terms of the relative motion become zero. The kinetic energy that remains is that of the common motion, $\dfrac12MV^2$. For example, if both bodies already had the same velocity, the relative terms were zero even before contact and no energy is lost.

For two bodies the velocities relative to the centre of mass are
$$
u_1-V=u_1-\frac{m_1u_1+m_2u_2}{M}=\frac{m_2(u_1-u_2)}{M},\qquad
u_2-V=-\frac{m_1(u_1-u_2)}{M}.
$$
Substituting into the two relative terms and collecting $\dfrac{m_1m_2(m_1+m_2)}{2M^2}=\dfrac{m_1m_2}{2M}$, the loss when the bodies stick is
$$
\Delta K_{\mathrm{lost}}=\frac12\,\frac{m_1m_2}{M}(u_1-u_2)^2.
$$
The loss grows with the square of the relative velocity, so doubling the relative velocity makes the loss four times larger. For the two carts in the example the coefficient is $\dfrac12\cdot\dfrac{3\cdot2}{5}\,\mathrm{kg}=0.60\,\mathrm{kg}$ and the approach speed is $\big(4-(-1)\big)\,\mathrm{m/s}=5\,\mathrm{m/s}$, so $\Delta K_{\mathrm{lost}}=0.60\cdot5^2\,\mathrm J=15\,\mathrm J$, as in the direct calculation.

In the figure the curve is $\Delta K=0.6\,\Delta v^2$, with $\Delta v$ the relative velocity, and point $A$ corresponds to the example.

::grafico{f="0.6*x^2" legenda=0 xmin=0 xmax=6 ymin=0 ymax=24 punti="0,0,pieno;5,15,pieno,A" nomi="Δv (m/s),ΔK (J)" titolo="With the same masses and different relative speeds, the 15 J from the example lies at point A."}
:::

## Elastic collisions

:::teorema{#elastico titolo="Two conservation laws and relative velocity"}
A collision is **elastic** when, in an isolated system, both the total momentum and the total kinetic energy are conserved. In one dimension $u_1,u_2$ denote the initial velocities and $v_1,v_2$ the final ones, all with sign. The two conservation laws are $m_1u_1+m_2u_2=m_1v_1+m_2v_2$ and $\dfrac12m_1u_1^2+\dfrac12m_2u_2^2=\dfrac12m_1v_1^2+\dfrac12m_2v_2^2$. Moving the terms of the first body to the left and multiplying the second equation by $2$ gives
$$
m_1(u_1-v_1)=m_2(v_2-u_2),\qquad
m_1(u_1^2-v_1^2)=m_2(v_2^2-u_2^2).
$$
In the second equation the difference of squares $a^2-b^2=(a-b)(a+b)$ is used, so $m_1(u_1-v_1)(u_1+v_1)=m_2(v_2-u_2)(v_2+u_2)$. In an actual collision, with momentum exchange, the first body changes velocity, so $u_1-v_1\neq0$ and the second equation can be divided by the first. The result is $u_1+v_1=v_2+u_2$, or
$$
v_2-v_1=u_1-u_2.
$$
The relative velocity changes sign and keeps its magnitude, that is, the bodies move apart at the same speed at which they approached. This equation and momentum conservation form a system that gives both final velocities even when both bodies are moving.

If the second body is initially at rest, $u_2=0$ and therefore $v_2=u_1+v_1$. Substituting into momentum conservation gives $m_1u_1=m_1v_1+m_2(u_1+v_1)$, from which
$$
v_1=\frac{m_1-m_2}{m_1+m_2}u_1,\qquad
v_2=\frac{2m_1}{m_1+m_2}u_1.
$$
- With $m_1=m_2$ one has $v_1=0$ and $v_2=u_1$, so the velocities are exchanged.
- With $m_1<m_2$ the coefficient of $v_1$ is negative, so the first body rebounds.

In problems in more dimensions the momentum components and the total kinetic energy are conserved. In the plane there are four unknown final components and three equations, so an additional geometric datum may be needed, for example the exit direction of one of the bodies.
:::

:::esempio{titolo="Rebound of the lighter mass"}
With $m_1=1\,\mathrm{kg}$, $m_2=3\,\mathrm{kg}$, $u_1=4\,\mathrm{m/s}$ and $u_2=0$ the formulas give
$$
v_1=\frac{1-3}{1+3}\cdot4\,\mathrm{m/s}=-2\,\mathrm{m/s},\qquad
v_2=\frac{2\cdot1}{1+3}\cdot4\,\mathrm{m/s}=2\,\mathrm{m/s}.
$$
The initial momentum is $1\cdot4\,\mathrm{kg\cdot m/s}=4\,\mathrm{kg\cdot m/s}$ and the final one is $\big(1\cdot(-2)+3\cdot2\big)\,\mathrm{kg\cdot m/s}=4\,\mathrm{kg\cdot m/s}$. The initial kinetic energy is $\dfrac12\cdot1\cdot4^2\,\mathrm J=8\,\mathrm J$ and the final one is $\dfrac12\cdot1\cdot2^2\,\mathrm J+\dfrac12\cdot3\cdot2^2\,\mathrm J=2\,\mathrm J+6\,\mathrm J=8\,\mathrm J$. Both quantities are conserved, so the outcome is that of an elastic collision.
:::

:::esempio{titolo="An elastic collision in the centre-of-mass frame"}
On a line, a $1\,\mathrm{kg}$ mass travelling at $6\,\mathrm{m/s}$ collides elastically with a stationary $2\,\mathrm{kg}$ mass. The velocity of the centre of mass is
$$
V=\frac{1\cdot6+2\cdot0}{1+2}\,\mathrm{m/s}=2\,\mathrm{m/s}.
$$
In the centre-of-mass frame $V$ is subtracted from every velocity, so the initial velocities are $6-2=+4\,\mathrm{m/s}$ and $0-2=-2\,\mathrm{m/s}$. In a one-dimensional elastic collision with nonzero exchange, in this frame each body reverses its velocity and keeps its magnitude. This gives $-4$ and $+2\,\mathrm{m/s}$. Adding $2\,\mathrm{m/s}$ again gives the laboratory velocities $-2$ and $+4\,\mathrm{m/s}$. In a single step the final laboratory velocity is $v=2V-u$, for example $2\cdot2-6=-2$.

Before and after the collision the momentum is $1\cdot6=1\cdot(-2)+2\cdot4=6\,\mathrm{kg\cdot m/s}$. The kinetic energy is $\dfrac12\cdot1\cdot6^2\,\mathrm J=18\,\mathrm J$ before and $\big(\dfrac12\cdot1\cdot2^2+\dfrac12\cdot2\cdot4^2\big)\,\mathrm J=(2+16)\,\mathrm J=18\,\mathrm J$ after.

::grafico{assi=0 vettori="0,1.5,4,1.5,u₁;0,1,-2,1,u₂;0,0,-4,0,v₁;0,-.5,2,-.5,v₂" linee="0,-1 0,2" xmin=-5.2 xmax=5.2 ymin=-1.2 ymax=2.2 titolo="Above, approaching velocities in the centre-of-mass frame. Below, the reversal after the collision."}
:::

:::osservazione{titolo="Outgoing directions for equal masses in a plane"}
The **dot product** of two vectors is $\vec a\cdot\vec b=ab\cos\theta$, where $\theta$ (read «theta») is the angle between the two vectors. It is zero when the vectors are perpendicular, because $\cos90^\circ=0$, and the dot product of a vector with itself is the square of its magnitude, $\vec a\cdot\vec a=a^2$.

Two pucks of equal mass $m$ collide elastically on a plane with negligible external impulse. One is initially at rest. Let $\vec u$ be the only initial velocity and $\vec v_1,\vec v_2$ the two final ones. Momentum conservation, divided by $m$, gives $\vec u=\vec v_1+\vec v_2$. Kinetic energy conservation, divided by $\dfrac12m$, gives $u^2=v_1^2+v_2^2$. The square of the first equation is
$$
u^2=(\vec v_1+\vec v_2)\cdot(\vec v_1+\vec v_2)=v_1^2+v_2^2+2\vec v_1\cdot\vec v_2.
$$
Comparing it with the second equation leaves $2\vec v_1\cdot\vec v_2=0$. If both pucks move after contact, the magnitudes $v_1$ and $v_2$ are not zero, so $\cos\theta=0$ and the two outgoing directions are perpendicular. If one stops, its vector is zero and the product is zero even without a defined angle.
:::
