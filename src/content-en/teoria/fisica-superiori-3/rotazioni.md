---
titolo: Rotation, angular momentum and rolling
sommario: Angular kinematics and dynamics, work, conservation of angular momentum and rolling without slip.
---

## Angular kinematics

:::definizione{#cinematica-angolare titolo="Angular velocity and acceleration"}
A body rotates about a fixed line, the **axis of rotation**, like a wheel about its axle. Looking at the axis from one end, one sense of rotation is chosen as positive, usually anticlockwise. An angle swept in the positive sense has sign $+$ and an angle swept in the opposite sense has sign $-$.

The angle $\theta$ (read «theta») is measured in **radians**. An angle of $1\,\mathrm{rad}$ subtends an arc as long as the radius, and a full revolution is $2\pi\simeq6.28\,\mathrm{rad}$. On a circle of radius $R$, the angle $\Delta\theta$ subtends an arc of length $R\Delta\theta$ (the letter $\Delta$, delta, denotes a change). The arc has the sign of the angle, so it is called a signed length. To count several revolutions, $\theta$ may grow beyond $2\pi$, so after three revolutions $\theta$ is $6\pi$. A speed in revolutions per minute is converted to radians per second by multiplying by $2\pi$ and dividing by $60$: for example, $120$ revolutions per minute are $2$ revolutions per second, that is $4\pi\,\mathrm{rad/s}$.

The **angular velocity** $\omega$ (omega) is the angle swept divided by the time taken, $\omega=\dfrac{\Delta\theta}{\Delta t}$, and is measured in $\mathrm{rad/s}$. The **angular acceleration** $\alpha$ (alpha) is the change of angular velocity divided by the time, $\alpha=\dfrac{\Delta\omega}{\Delta t}$, and is measured in $\mathrm{rad/s^2}$. Both have a sign, and $\omega>0$ indicates a rotation in the positive sense. If $\alpha$ is constant over an interval of duration $t$, with initial angular velocity $\omega_0$ and initial angle $\theta_0$,
$$
\omega=\omega_0+\alpha t,\qquad
\theta-\theta_0=\omega_0t+\frac12\alpha t^2.
$$
These are the laws of uniformly accelerated straight-line motion, with $\theta$ in place of position, $\omega$ in place of velocity and $\alpha$ in place of acceleration.

In the second formula the term $\omega_0t$ is the angle the body would sweep if it always turned at $\omega_0$, and the term $\dfrac12\alpha t^2$ is the extra angle due to the acceleration. The same result is the area under the $\omega$–$t$ graph. The graph is a segment, so the region below it is a trapezium with parallel sides $\omega_0$ and $\omega$ and height $t$, with area $\dfrac{\omega_0+\omega}{2}\,t$. The area is signed, that is, the parts above the time axis count with sign $+$ and those below with sign $-$. When $\omega$ crosses zero, the signed sum of the two parts gives the net angle, that is, the final position relative to the initial one. To calculate the total angle swept, instead, the magnitudes (unsigned values) of the areas are added.

A **rigid body** is a body that does not deform, so all its points turn through the same angle in the same time and have the same $\omega$ and $\alpha$. A point at distance $R$ from the axis, however, travels on a circle of radius $R$, so points at different distances from the axis have velocities of different magnitude. The velocity of the point is tangent to the circle (tangential velocity) and has magnitude $v=|\omega|R$. The acceleration of the point has two components.

- The tangential component has magnitude $a_t=|\alpha|R$ and changes the magnitude of the velocity.
- The radial component points towards the centre, has magnitude $\omega^2R$ and changes the direction of the velocity. It is the centripetal acceleration of circular motion.

Even when $\omega$ is constant, and therefore $a_t=0$, the point has radial acceleration, because the direction of its velocity changes continuously.
:::

:::esempio{titolo="Accelerations at a point on a disc"}
Looking at the disc from one end of the axis, anticlockwise is chosen as positive. Consider the point on the right edge, at $R=0.35\,\mathrm m$ from the centre, at the instant when $\omega=-6\,\mathrm{rad/s}$. The minus sign indicates a clockwise rotation, so the point on the right edge moves downwards with speed
$$
v=|\omega|R=6\cdot0.35=2.1\,\mathrm{m/s}.
$$
At the same instant $\alpha=+4\,\mathrm{rad/s^2}$. The tangential acceleration is $a_t=4\cdot0.35=1.4\,\mathrm{m/s^2}$ and, since $\alpha$ is anticlockwise, at the right edge it points upwards. At that instant the speed is decreasing because the tangential component is opposite to the velocity. The radial acceleration is $\omega^2R=36\cdot0.35=12.6\,\mathrm{m/s^2}$ and points towards the centre $O$.

::grafico{assi=0 uguale=1 curve="2*cos(t),2*sin(t),0,6.283185" linee="0,0 2,0" vettori="2,0,2,-1.45,v;2,0,2,1.05,a_t;2,0,.48,0,a_r" punti="0,0,pieno,O;2,0,pieno" xmin=-2.35 xmax=2.85 ymin=-2.35 ymax=2.35 titolo="At the right edge, velocity and tangential acceleration point in opposite directions. The arrows show the directions."}
:::

:::esempio{titolo="Stopping and reversing"}
A disc has $\omega_0=4\,\mathrm{rad/s}$ and $\alpha=-2\,\mathrm{rad/s^2}$. After $3\,\mathrm s$ the angular velocity is
$$
\omega=4+(-2)\cdot3=-2\,\mathrm{rad/s}.
$$
The disc stops when $4-2t=0$, that is at $t=2\,\mathrm s$, and then turns in the opposite sense. The graph crosses the time axis at $2\,\mathrm s$ and forms two triangles.

- From $0$ to $2\,\mathrm s$ the triangle lies above the axis and is worth $\dfrac12\cdot2\cdot4=4\,\mathrm{rad}$.
- From $2$ to $3\,\mathrm s$ the triangle lies below the axis and is worth $-\dfrac12\cdot1\cdot2=-1\,\mathrm{rad}$.

The net angle is $4-1=3\,\mathrm{rad}$, while the magnitude of the angle swept is $4+1=5\,\mathrm{rad}$.

::grafico{linee="0,4 3,-2" area="4-2*x;0;0;2|4-2*x;0;2;3" punti="2,0,pieno" xmin=0 xmax=3.6 ymin=-3 ymax=5 nomi="t (s),ω (rad/s)" titolo="The areas above and below the axis have opposite signs"}
:::

:::esempio{titolo="Finding acceleration from sensor readings"}
A sensor records angles of $0.20$, $0.68$ and $1.28\,\mathrm{rad}$ at times $0$, $0.20$ and $0.40\,\mathrm s$. In the two intervals the angle increases by $0.68-0.20=0.48\,\mathrm{rad}$ and by $1.28-0.68=0.60\,\mathrm{rad}$. The average velocities are therefore
$$
\frac{0.48}{0.20}=2.40\,\mathrm{rad/s},\qquad \frac{0.60}{0.20}=3.00\,\mathrm{rad/s}.
$$
With constant angular acceleration $\omega$ grows uniformly, so each average is the velocity at the midpoint of its own interval, that is at $0.10\,\mathrm s$ and at $0.30\,\mathrm s$.

The two midpoints are $0.20\,\mathrm s$ apart, so $\alpha=\dfrac{3.00-2.40}{0.20}=3.0\,\mathrm{rad/s^2}$. Taking the first average back by $0.10\,\mathrm s$, to the instant $0$, gives $\omega_0=2.40-3.0\cdot0.10=2.10\,\mathrm{rad/s}$. A fourth reading would show whether the acceleration is really constant. Some sensors report the angle always within one turn, that is, they restart from zero after $2\pi$. In that case, before taking the differences, $2\pi$ is added for every completed revolution.
:::

## Moment of inertia

:::definizione{#inerzia-rotazione titolo="Distance of mass from the axis"}
The **moment of inertia** of a set of point masses about an axis is the sum of the products of each mass and the square of its distance from the axis,
$$
I=\sum_i m_ir_i^2=m_1r_1^2+m_2r_2^2+\ldots
$$
The symbol $\sum$ (capital sigma) denotes the sum over all the masses, numbered by the index $i$. The distance $r_i$ is measured along the perpendicular from the point to the axis. The moment of inertia is measured in $\mathrm{kg\cdot m^2}$. A mass on the axis has $r_i=0$ and contributes zero. Since the distance appears squared, moving a mass to twice the distance quadruples its contribution. An extended body is divided into ever smaller portions of mass, each almost point-like, and the same sum is applied to them.

A **uniform** body has its mass distributed evenly. For bodies of mass $m$ and radius $R$ the calculation gives the following values.

- A thin ring, about the central axis perpendicular to its plane, has $I=mR^2$.
- A uniform solid disc, about the same axis, has $I=\dfrac12mR^2$.
- A uniform solid sphere, about a diameter, has $I=\dfrac25mR^2$.

The formulas describe different mass distributions. In the ring all the mass lies at distance $R$, while in the disc and in the sphere part of the mass is closer to the axis. For a device made of several parts, the parts' moments of inertia about the same axis are added.

The **centre of mass** (CM) is the point whose coordinates are the average of the coordinates of the masses, each weighted by its own mass; in a uniform, symmetric body it coincides with the geometric centre. If $I_{CM}$ is the moment of inertia about an axis through the centre of mass, then about an axis parallel to it at distance $d$ the **parallel-axis theorem** gives $I=I_{CM}+md^2$.
:::

:::osservazione{titolo="Choice of axis and mass distribution"}
The ratio $b=\dfrac{I_{CM}}{mR^2}$ is dimensionless, that is a pure number, because numerator and denominator are both measured in $\mathrm{kg\cdot m^2}$. For the bodies in the table, $R$ is the outer radius and $I_{CM}$ refers to the axis specified. The coefficient $b$ tells what fraction of $mR^2$ the moment of inertia is, so it compares bodies of equal mass and radius by their mass distribution. A larger $b$ corresponds to mass further from the axis.

| Body | Axis | $b$ |
| --- | --- | ---: |
| Thin ring | Central, perpendicular to the plane | $1$ |
| Uniform solid disc | Central, perpendicular to the plane | $\dfrac{1}{2}$ |
| Uniform solid sphere | Diameter | $\dfrac{2}{5}$ |

The parallel-axis theorem is derived as follows. The origin of the $x$ and $y$ axes is placed at the centre of mass; the mass $m_i$ has coordinates $(x_i,y_i)$ and the square of its distance from the central axis is $x_i^2+y_i^2$. The axis is shifted by $d$ along the $x$ direction, and the squared distance becomes
$$
(x_i-d)^2+y_i^2=x_i^2+y_i^2-2dx_i+d^2.
$$
Multiplying by $m_i$ and summing over all the masses gives three terms.

- The term $\sum_i m_i\left(x_i^2+y_i^2\right)$ is $I_{CM}$.
- The cross terms sum to $-2d\sum_i m_ix_i=0$, because the origin is the centre of mass and so the weighted average of the $x_i$ is zero.
- The remaining term is $d^2\sum_i m_i=md^2$.

This step requires parallel axes.

::grafico{f="x^2/100" punti="20,4,pieno;40,16,pieno" etichette="21.2,3.4,4;40.8,15.1,16" xmin=0 xmax=50 ymin=0 ymax=25 nomi="r (cm),I (10⁻² kg·m²)" titolo="For a 1 kg point mass, moving from 0.20 to 0.40 m quadruples its contribution"}
:::

:::esempio{titolo="A disc about two axes"}
A uniform disc of $4\,\mathrm{kg}$ and radius $0.50\,\mathrm m$, about the axis through the centre $C$, has moment
$$
I_{CM}=\frac12\cdot4\cdot0.50^2=0.50\,\mathrm{kg\cdot m^2}.
$$
Shifting the axis parallel to itself to the point $B$ on the rim, the distance between the two axes is $d=R=0.50\,\mathrm m$, so $4\cdot0.50^2\,\mathrm{kg\cdot m^2}=1\,\mathrm{kg\cdot m^2}$ is added. The total is $1.50\,\mathrm{kg\cdot m^2}$. The added term is positive because, relative to the new axis, the squared distances of the masses increase on average.

::grafico{uguale=1 assi=0 curve=".5*cos(t),.5*sin(t),0,6.283185" linee="0,0.5,0" punti="0,0,pieno,C;.5,0,pieno,B" xmin=-.7 xmax=.8 ymin=-.7 ymax=.7 titolo="The axes are perpendicular to the diagram and pass through C and B"}
:::

## Equation of rotation

:::teorema{#dinamica-rotazione titolo="Net torque and angular acceleration"}
The **torque** $M$ of a force about an axis is the product of the force and the distance between the axis and the line along which the force acts, with a sign that indicates the sense of rotation produced. For a force $F$ applied at distance $r$ from the axis, in the plane perpendicular to the axis, the magnitude of the torque can be calculated in three equivalent ways.

- $M=rF\sin\phi$, where $\phi$ (phi) is the angle between the radius, that is the segment from the axis to the point of application, and the force.
- $M=rF_t$, where $F_t=F\sin\phi$ is the tangential component of the force, perpendicular to the radius.
- $M=F d_\perp$, where the **moment arm** $d_\perp=r\sin\phi$ is the perpendicular distance from the axis to the line of action, that is to the line that contains the force.

Torque is measured in $\mathrm{N\cdot m}$. The sign $+$ is then assigned if the force tends to turn the body in the positive sense, and the sign $-$ otherwise. A force along a line through the axis, for example a radial force, has zero moment arm and therefore zero torque, even if it is applied far from the axis.

For a rigid body rotating about a fixed axis with constant $I$, the algebraic sum of the torques of the forces about the axis, that is the sum with their signs, is
$$
\sum_jM_j=I\alpha.
$$
It is the analogue of Newton's second law $F=ma$, with torque in place of force and moment of inertia in place of mass.

Two opposing torques subtract. A zero net torque implies $\alpha=0$, so the angular velocity stays constant and a body that is already rotating keeps rotating. In a pulley with inertia, the two strings pull with tensions $T_1$ and $T_2$ tangent to the rim, so both have moment arm $R$. Choosing the sense of $T_1$ as positive, the torque of the tensions is $(T_1-T_2)R$. If the acceleration is non-zero, $(T_1-T_2)R=I\alpha$ is non-zero, so the two tensions are different and their difference supplies the required torque. If instead the inertia of the pulley is negligible, $I\alpha$ is negligible too and the two tensions are almost equal.
:::

:::esempio{titolo="Signed torque and perpendicular moment arm"}
The $x$ axis is taken to the right, the $y$ axis upwards and the $z$ axis towards the viewer, so anticlockwise torque is positive. For a force with components $(F_x,F_y)$ applied at the point $(x,y)$, the $z$ component of the cross product $\vec r\times\vec F$ is
$$
M_z=xF_y-yF_x.
$$
The force $\vec F=(3,-4)\,\mathrm N$, that is $3\,\mathrm N$ to the right and $4\,\mathrm N$ downwards, is applied at $A=(0.40,0)\,\mathrm m$. The horizontal component has its line of action along the $x$ axis, which passes through $O$, so it has zero torque, while the vertical component gives
$$
M_z=0.40\cdot(-4)-0\cdot3=-1.6\,\mathrm{N\cdot m}.
$$
The minus sign indicates a clockwise torque. The magnitude of the force is $\sqrt{3^2+4^2}=5\,\mathrm N$ and the line of action is $d_\perp=r\sin\phi=0.40\cdot\dfrac45=0.32\,\mathrm m$ from $O$, with $\sin\phi=\dfrac45$ because the component perpendicular to the radius is $4\,\mathrm N$ out of $5\,\mathrm N$, so the product $F d_\perp$ gives the magnitude $5\cdot0.32=1.6\,\mathrm{N\cdot m}$.

::grafico{assi=0 uguale=1 linee="0,0.4,0" segmenti=".12,.373333,.64,-.32;0,0,.256,.192" vettori=".4,0,.58,-.24,F" punti="0,0,pieno,O;.4,0,pieno,A;.256,.192,pieno" etichette=".092,.14,d_⊥" xmin=-.07 xmax=.73 ymin=-.36 ymax=.45 titolo="The marked moment arm is perpendicular to the line of action. The force tends to turn the lever clockwise."}
:::

:::esempio{titolo="Opposing torques"}
A wheel with $I=2\,\mathrm{kg\cdot m^2}$ receives two torques, $+6\,\mathrm{N\cdot m}$ and $-2\,\mathrm{N\cdot m}$. The sum and the acceleration are
$$
\sum M=6-2=+4\,\mathrm{N\cdot m},\qquad \alpha=\frac{4}{2}=+2\,\mathrm{rad/s^2}.
$$
If the wheel is initially turning in the negative sense, $\alpha$ has the opposite sign to $\omega$, so this acceleration slows it down until it stops. After it stops, the angular velocity grows in the positive sense, as long as the same torques act.
:::

:::osservazione{titolo="The two tensions on a pulley"}
A pulley of radius $0.20\,\mathrm m$ is pulled downwards with $30\,\mathrm N$ on the left side and with $10\,\mathrm N$ on the right side. The tensions are tangent to the rim, so their moment arm is the radius. With anticlockwise as positive, the left string turns the pulley anticlockwise and the right string clockwise, so about the pivot $O$ the tensions give the torques
$$
+30\cdot0.20=+6\,\mathrm{N\cdot m},\qquad -10\cdot0.20=-2\,\mathrm{N\cdot m}.
$$
The pivot exerts a reaction whose line of action passes through the axis, so its torque is zero. If the friction at the pivot is also negligible, the net torque is $+4\,\mathrm{N\cdot m}$, as in the wheel example.

::grafico{assi=0 uguale=1 curve=".2*cos(t),.2*sin(t),0,6.283185" linee="-.2,0.2,0" vettori="-.2,0,-.2,-.3,T_1;.2,0,.2,-.1,T_2" punti="0,0,pieno,O" xmin=-.36 xmax=.43 ymin=-.37 ymax=.27 titolo="T1 and T2 both point downwards and produce opposing torques about O"}
:::

## Energy and work in rotation

:::teorema{#energia-rotazione titolo="Rotational kinetic energy"}
In rotation about a fixed axis, the mass $m_i$ at distance $r_i$ from the axis has speed $|\omega|r_i$ and therefore kinetic energy $\dfrac12m_i\omega^2r_i^2$. Summing over all the masses and taking out the common factor $\dfrac12\omega^2$ gives the **rotational kinetic energy**
$$
K_{\mathrm{rot}}=\frac12\omega^2\sum_i m_ir_i^2=\frac12I\omega^2.
$$
For the same $I$, doubling the angular velocity quadruples the energy. Since $\omega$ appears squared, reversing the sense of rotation leaves the energy unchanged.

A constant torque about the axis, while the body turns through the angle $\Delta\theta$, does work $W=M\Delta\theta$, with the angle in radians and with its sign. It is the analogue of the work $Fs$ of a constant force. The work is positive if torque and rotation have the same sense and negative if they have opposite senses, as for a brake. A varying torque requires instead the signed area under the torque–angle graph. The work of all the torques that act equals the change of the rotational kinetic energy. The instantaneous mechanical power, that is the work done per unit time, is $P=M\omega$ and is measured in watts ($1\,\mathrm W=1\,\mathrm{J/s}$); with constant power the work in a time $t$ is $Pt$. Torque is measured in newton metres, like the joule ($1\,\mathrm J=1\,\mathrm{N\cdot m}$), but it is the product of torque and the angle swept that represents work in joules.

The plane motion of a rigid body, like a rolling wheel, separates into two parts: the translation of the centre of mass, with velocity $v_{CM}$, and the rotation about the centre of mass, with angular velocity $\omega$. The total energy is
$$
K=\frac12mv_{CM}^2+\frac12I_{CM}\omega^2.
$$
The calculation also produces cross terms, which contain the product of the two velocities. These terms cancel because, relative to the centre of mass, the weighted sum of the positions of the points is zero.
:::

:::esempio{titolo="Work needed to change angular speed"}
A flywheel with $I=0.50\,\mathrm{kg\cdot m^2}$ goes from $4$ to $8\,\mathrm{rad/s}$. The energy goes from
$$
K_i=\frac12\cdot0.50\cdot4^2=4\,\mathrm J\qquad\text{to}\qquad K_f=\frac12\cdot0.50\cdot8^2=16\,\mathrm J,
$$
so the net work is $16-4=12\,\mathrm J$. If the torque along the axis is constant and equal to $3\,\mathrm{N\cdot m}$, an angular displacement $\Delta\theta=\dfrac{12}{3}=4\,\mathrm{rad}$ is needed.
:::

:::esempio{titolo="Work from a torque–angle graph"}
A motor applies a net torque of $4\,\mathrm{N\cdot m}$ while a shaft turns through its first $3\,\mathrm{rad}$ in the positive sense. Over the next $2\,\mathrm{rad}$ the torque changes to $-2\,\mathrm{N\cdot m}$. The work is the sum of the areas of the two rectangles,
$$
W=4\cdot3+(-2)\cdot2=12-4=8\,\mathrm J.
$$
With an initial kinetic energy of $10\,\mathrm J$ the energy rises to $10+12=22\,\mathrm J$ and then falls to $22-4=18\,\mathrm J$. During the second stretch the power $P=M\omega$ of the torque is negative, because the torque is negative and the velocity positive. The velocity stays positive, because the energy only falls to $18\,\mathrm J$, not to zero.

::grafico{linee="0,4 3,4;3,-2 5,-2" segmenti="3,4,3,-2" area="4;0;0;3|-2;0;3;5" xmin=0 xmax=5.65 ymin=-3 ymax=5 nomi="θ (rad),M (N·m)" titolo="The first rectangle represents 12 J, and the second represents −4 J"}
:::

:::esempio{titolo="Two ways to calculate the same energy"}
The disc of mass $4\,\mathrm{kg}$ and radius $0.50\,\mathrm m$ rotates about a fixed pivot on its rim with $\omega=4\,\mathrm{rad/s}$. Describing the whole motion as a rotation about the pivot, the inertia about the rim is $1.50\,\mathrm{kg\cdot m^2}$, so
$$
K=\frac12\cdot1.50\cdot4^2=12\,\mathrm J.
$$
Separating instead translation and rotation, the centre moves on a circle of radius $0.50\,\mathrm m$ about the pivot, with speed $4\cdot0.50=2\,\mathrm{m/s}$. Its translation contributes $\dfrac12\cdot4\cdot2^2=8\,\mathrm J$ and the rotation about the centre contributes $\dfrac12\cdot0.50\cdot4^2=4\,\mathrm J$, for a total of $12\,\mathrm J$. In the parallel-axis theorem the term $mR^2=1\,\mathrm{kg\cdot m^2}$, multiplied by $\dfrac12\omega^2=8\,\mathrm{rad^2/s^2}$, produces exactly the $8\,\mathrm J$ of the translation. Adding them to the energy already calculated about the pivot would count them twice.
:::

## Angular momentum

:::teorema{#momento-angolare titolo="Balance about an axis"}
The **angular momentum** of a particle about a point $O$ is $\vec L=\vec r\times\vec p$, the cross product of the position vector $\vec r$, which goes from $O$ to the particle, and the momentum $\vec p=m\vec v$. Its magnitude is $L=rp\sin\phi$, with $\phi$ the angle between $\vec r$ and $\vec p$; it equals $rp$ if the momentum is perpendicular to the radius and zero if it points along the line through $O$. It is measured in $\mathrm{kg\cdot m^2/s}$. For rotation about a fixed axis the component along that axis is used, $L=I\omega$, which has the sign of $\omega$.

An external torque is the torque of a force exerted by a body that is not part of the system. The **angular momentum balance** states that the change of $L$ equals the angular impulse of the external torque about the same axis. The impulse of a constant torque $M$ acting for a time $\Delta t$ is $M\Delta t$, so $\Delta L=M\Delta t$; for a varying torque the impulse is the signed area of the $M$–$t$ graph. With zero net external torque $L$ does not change, so
$$
I_i\omega_i=I_f\omega_f.
$$
In this relation $I$ can change because the positions of the masses relative to the axis change, even if the total mass stays the same. During the rearrangement $L=I\omega$ can be used if all the masses share the same angular velocity. In that case the change of $L$ depends both on the change of $\omega$ and on the change of $I$. When the inertia is constant, $\Delta L=I\Delta\omega$; dividing by $\Delta t$ the balance becomes $\sum M=I\alpha$, and the equation of rotation is recovered.

A skater spinning on the spot who pulls the arms towards the axis reduces $I$. The external torque along the axis is negligible, so $L$ stays the same and the magnitude of $\omega$ increases. Substituting $\omega=\dfrac LI$ into $K_{\mathrm{rot}}=\dfrac12I\omega^2$ gives
$$
K_{\mathrm{rot}}=\frac{L^2}{2I}.
$$
For fixed angular momentum, therefore, the energy increases when $I$ decreases. The extra energy comes from the work of the skater's muscles, which pull the arms towards the axis. These forces are internal to the system, so their work increases the kinetic energy without supplying an external torque.
:::

:::esempio{titolo="Checking the two quantities separately"}
For $I_i=3\,\mathrm{kg\cdot m^2}$, $\omega_i=2\,\mathrm{rad/s}$ and $I_f=1.5\,\mathrm{kg\cdot m^2}$, the angular momentum is $L=3\cdot2=6\,\mathrm{kg\cdot m^2/s}$. Since $L$ is conserved, it follows that
$$
\omega_f=\frac{6}{1.5}=4\,\mathrm{rad/s}.
$$
The energy goes from $\dfrac12\cdot3\cdot2^2=6\,\mathrm J$ to $\dfrac12\cdot1.5\cdot4^2=12\,\mathrm J$. The angular momentum stays constant while the energy increases by $6\,\mathrm J$. In the graph the curve $\omega=\dfrac6I$ contains all the states with $L=6\,\mathrm{kg\cdot m^2/s}$, and the system moves from $A$ to $B$.

::grafico{f="6/x" punti="3,2,pieno,A;1.5,4,pieno,B" xmin=1 xmax=4 ymin=0 ymax=7 nomi="I (kg·m²),ω (rad/s)" titolo="Reducing I moves up the constant-angular-momentum curve"}
:::

:::esempio{titolo="Angular momentum changes across two intervals"}
The signed area of the $M$–$t$ graph is the angular impulse. A rotor has $L_i=-2\,\mathrm{kg\cdot m^2/s}$. A torque of $+3\,\mathrm{N\cdot m}$ for $2\,\mathrm s$ and then one of $-1\,\mathrm{N\cdot m}$ for the following $3\,\mathrm s$ change $L$ as follows:
$$
\begin{aligned}
L_1&=-2+3\cdot2=+4\,\mathrm{kg\cdot m^2/s},\\[6pt]
L_f&=4+(-1)\cdot3=+1\,\mathrm{kg\cdot m^2/s}.
\end{aligned}
$$
Over the whole interval the impulse is $6-3=+3\,\mathrm{N\cdot m\cdot s}$, a unit equivalent to $\mathrm{kg\cdot m^2/s}$ because $1\,\mathrm N=1\,\mathrm{kg\cdot m/s^2}$. If two impulses cancel, the final value equals the initial one even if there are changes in between.

::grafico{linee="0,3 2,3;2,-1 5,-1" segmenti="2,3,2,-1" area="3;0;0;2|-1;0;2;5" xmin=0 xmax=5.65 ymin=-2 ymax=4 nomi="t (s),M (N·m)" titolo="The two areas give angular impulses of +6 and −3 N·m·s"}
:::

:::esempio{titolo="Two flywheels coupled by a clutch"}
Two coaxial flywheels, that is mounted on the same axis, each have inertia $0.80\,\mathrm{kg\cdot m^2}$; the first turns at $10\,\mathrm{rad/s}$ and the second is at rest. An internal clutch, a device that connects them by friction, couples them, and the impulse of the external torques along the axis is negligible. The angular momentum is initially $0.80\cdot10=8\,\mathrm{kg\cdot m^2/s}$. When the flywheels turn together, this value is divided by the total inertia, giving
$$
\omega_f=\frac{8}{0.80+0.80}=5\,\mathrm{rad/s}.
$$
The initial kinetic energy is $\dfrac12\cdot0.80\cdot10^2=40\,\mathrm J$ and the final one $\dfrac12\cdot1.60\cdot5^2=20\,\mathrm J$. While the clutch slips, it exerts opposite torques on the two flywheels, but the flywheels have different velocities. The torque on the faster flywheel opposes its rotation, and its negative work is larger in magnitude than the positive work on the slower flywheel, so the total work of the clutch is negative. The lost kinetic energy becomes internal energy of the clutch and the flywheels, while the total angular momentum stays constant.
:::

## Rolling without slipping

:::teorema{#rotolamento titolo="Constraint relating translation and rotation"}
A wheel of radius $R$ rolls without slipping on a stationary surface when its contact point has zero instantaneous velocity relative to the surface. The velocity of each point of the wheel is the sum of the velocity of the centre, the same for all points, and the velocity due to the rotation about the centre, tangent to the rim and of magnitude $|\omega|R$. At the contact point the two contributions are opposite and, since their sum is zero, they have equal magnitude. For the magnitudes it follows that
$$
v_{CM}=|\omega|R.
$$
At the top point the two contributions have the same direction, and the speed is $v_{CM}+|\omega|R=2v_{CM}$. While the wheel turns through the angle $\Delta\theta$ the centre advances by $R|\Delta\theta|$, so in one revolution it advances by one circumference, $2\pi R$. The condition concerns the velocity of the contact point, which changes from instant to instant. A material point of the rim then moves away from the ground. If the surface moves, like a conveyor belt, rolling without slipping requires the contact point to have the same velocity as the surface.

**Static friction** is the friction force between two surfaces that do not slide over each other. When rolling is pure and without dissipation (no energy turned into heat) on a fixed surface, static friction can produce a torque about the centre without doing work, because it acts on the contact point, which is at rest. If the body starts from rest and descends through a height $h$, the potential energy $mgh$ becomes kinetic energy of translation and rotation; with $\omega=\dfrac{v_{CM}}{R}$,
$$
mgh=\frac12 m v_{CM}^2+\frac12 I_{CM}\frac{v_{CM}^2}{R^2}.
$$
Setting $b=\dfrac{I_{CM}}{mR^2}$, that is $I_{CM}=bmR^2$, the second term becomes $\dfrac12bmv_{CM}^2$. Dividing by $m$ gives $gh=\dfrac12(1+b)v_{CM}^2$, so
$$
v_{CM}=\sqrt{\frac{2gh}{1+b}}.
$$
For the uniform solid disc $b=\dfrac12$, for the ring $b=1$. The disc arrives faster because, for equal mass, radius and speed, it would store less energy in rotation, leaving more for translation. The criterion holds when static friction prevents slipping along the whole path.
:::

:::esempio{titolo="Speeds on a rolling wheel"}
With $R=0.40\,\mathrm m$ and $|\omega|=5\,\mathrm{rad/s}$, the centre moves forwards at $v_{CM}=5\cdot0.40=2\,\mathrm{m/s}$. At the top point the rotation adds another $2\,\mathrm{m/s}$ in the same direction, for a total of $4\,\mathrm{m/s}$. The bottom point $C$ instead has a rotational contribution of $2\,\mathrm{m/s}$ backwards and is instantaneously at rest, because $2-2=0$.

::grafico{uguale=1 assi=0 curve="0.4*cos(t),0.4+0.4*sin(t),0,6.283185" linee="-.6,0 1.05,0" vettori="0,.4,.3,.4,v_CM;0,.8,.6,.8,v" punti="0,0,pieno,C" xmin=-.65 xmax=1.1 ymin=-.2 ymax=1.05 titolo="The top velocity vector is twice as long as the centre velocity vector"}
:::

:::esempio{titolo="How much friction a ramp requires"}
A body descends a fixed slope of inclination $\beta$ (beta) with its centre of mass on the geometric axis. The weight and the **normal force**, that is the force that the surface exerts perpendicular to itself, have lines of action through the centre, so the only force with a torque about the centre is static friction $F_s$, directed up the slope and applied at distance $R$. When the rolling constraint is satisfied, $v_{CM}=\omega R$ holds at every instant, so the acceleration of the centre is $a=\alpha R$ and
$$
F_sR=I_{CM}\frac aR.
$$
With $I_{CM}=bmR^2$ this equation gives $F_s=bma$. Along the slope $ma=mg\sin\beta-F_s$. Substituting $F_s=bma$ gives $(1+b)ma=mg\sin\beta$, and the results are
$$
a=\frac{g\sin\beta}{1+b},\qquad
F_s=\frac{bmg\sin\beta}{1+b}.
$$
The normal force equals $mg\cos\beta$. Static friction does not exceed $\mu_s mg\cos\beta$, where $\mu_s$ is the coefficient of static friction of the two surfaces. The available friction is therefore enough if $F_s\leq\mu_s mg\cos\beta$; dividing by $mg\cos\beta$ and using $\tan\beta=\dfrac{\sin\beta}{\cos\beta}$ the condition becomes $\mu_s\geq\dfrac{b}{1+b}\tan\beta$. For $\beta=30^\circ$, with $\tan30^\circ\simeq0.577$, the limit is about $\dfrac13\cdot0.577\simeq0.192$ for the disc and $\dfrac12\cdot0.577\simeq0.289$ for the ring. If $\mu_s=0.22$, the disc can keep rolling without slipping because $0.22>0.192$, and the ring starts to slip because $0.22<0.289$. The energy balance without dissipation therefore applies to the disc on this ramp. The figure shows the required friction as a percentage of the weight, $\dfrac{100F_s}{mg}=\dfrac{50b}{1+b}$ at $30^\circ$, which increases with $b$.

::grafico{f="50*x/(1+x)" punti=".5,16.66667,pieno,D;1,25,pieno,A" xmin=0 xmax=1.2 ymin=0 ymax=31 nomi="b,100 F_s/(mg)" titolo="At 30°, required friction as a percentage of the weight increases with b. D marks the disc and A the ring."}
:::
