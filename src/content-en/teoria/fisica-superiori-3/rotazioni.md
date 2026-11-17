---
titolo: Rotation, angular momentum and rolling
sommario: Angular kinematics and dynamics, work, conservation of angular momentum and rolling without slip.
---

## Angular kinematics

:::definizione{#cinematica-angolare titolo="Angular velocity and acceleration"}
Fix the rotation axis and choose a positive sense. The angle $\theta$ is measured in radians; one revolution is $2\pi$ radians, and an arc of radius $R$ and angle $\Delta\theta$ has signed length $R\Delta\theta$. Several revolutions can be recorded by allowing $\theta$ to increase beyond $2\pi$. **Angular velocity** $\omega$ is the angle change per time, and **angular acceleration** $\alpha$ is the change of angular velocity per time. With constant $\alpha$ over duration $t$,
$$
\omega=\omega_0+\alpha t,\qquad
\theta-\theta_0=\omega_0t+\frac12\alpha t^2.
$$
The second formula adds the initial angular velocity contribution and the acceleration contribution. The same result is the signed area of the trapezium below the $\omega$–$t$ graph. If $\omega$ crosses zero, the two regions have opposite signs in the net angle. To calculate the total angle swept in magnitude, add the magnitudes of the areas instead.

Two points of the same rigid body have the same $\omega$ and $\alpha$, but their tangential speeds can differ when their distances from the axis differ. At distance $R$, the tangential magnitudes are $v=|\omega|R$ and $a_t=|\alpha|R$; radial acceleration of magnitude $\omega^2R$ changes the velocity direction. Even with constant $\omega$ and $a_t=0$, the point has radial acceleration.
:::

:::esempio{titolo="Accelerations at a point on a disc"}
Viewed from one end of the axis, choose anticlockwise rotation as positive. At the right edge, where $R=0.35\,\mathrm m$, $\omega=-6\,\mathrm{rad/s}$ gives a downward speed of $2.1\,\mathrm{m/s}$. If $\alpha=+4\,\mathrm{rad/s^2}$, the tangential acceleration is $1.4\,\mathrm{m/s^2}$ upwards. The speed is decreasing at that instant because the tangential component opposes the velocity. The radial acceleration of $12.6\,\mathrm{m/s^2}$ points towards the centre. Its effect on the direction combines with the tangential component's effect on speed.

::grafico{assi=0 uguale=1 curve="2*cos(t),2*sin(t),0,6.283185" linee="0,0 2,0" vettori="2,0,2,-1.45,v;2,0,2,1.05,a_t;2,0,.48,0,a_r" punti="0,0,pieno,O;2,0,pieno" xmin=-2.35 xmax=2.85 ymin=-2.35 ymax=2.35 titolo="At the right edge, velocity and tangential acceleration point in opposite directions. The arrows show the directions."}
:::

:::esempio{titolo="Stopping and reversing"}
With $\omega_0=4\,\mathrm{rad/s}$ and $\alpha=-2\,\mathrm{rad/s^2}$, the value after $3\,\mathrm s$ is $\omega=-2\,\mathrm{rad/s}$. The disc stops at $2\,\mathrm s$ and then reverses. The first triangle of the graph contributes $4\,\mathrm{rad}$ and the second $-1\,\mathrm{rad}$. The net angle is $3\,\mathrm{rad}$, while the magnitude of the angle swept is $5\,\mathrm{rad}$.

::grafico{linee="0,4 3,-2" area="4-2*x;0;0;2|4-2*x;0;2;3" punti="2,0,pieno" xmin=0 xmax=3.6 ymin=-3 ymax=5 nomi="t (s),ω (rad/s)" titolo="The areas above and below the axis have opposite signs"}
:::

:::esempio{titolo="Finding acceleration from sensor readings"}
A sensor records angles of $0.20$, $0.68$ and $1.28\,\mathrm{rad}$ at times $0$, $0.20$ and $0.40\,\mathrm s$. The angle increases by $0.48$ and $0.60\,\mathrm{rad}$ in the two intervals. The average angular velocities are therefore $2.40$ and $3.00\,\mathrm{rad/s}$. With constant angular acceleration, each average is the velocity at the midpoint of its own interval.

The two midpoints are $0.20\,\mathrm s$ apart, so $\alpha=\dfrac{3.00-2.40}{0.20}=3.0\,\mathrm{rad/s^2}$. Extrapolating the first average by $0.10\,\mathrm s$ back to the start gives $\omega_0=2.10\,\mathrm{rad/s}$. A fourth reading would allow us to check the constant-acceleration assumption. If the sensor reports angles within a single turn, the completed revolutions must be restored before subtracting the readings.
:::

## Moment of inertia

:::definizione{#inerzia-rotazione titolo="Distance of mass from the axis"}
For point masses, the **moment of inertia** about an axis is $I=\sum_i m_ir_i^2$, where $r_i$ is the perpendicular distance to the axis. It is measured in $\mathrm{kg\cdot m^2}$. A mass on the axis contributes zero, and doubling its distance quadruples its contribution. For extended bodies, apply the same sum to ever smaller portions.

About the central axis perpendicular to the plane, a thin ring has $I=mR^2$ and a uniform solid disc has $I=\dfrac12mR^2$. About a diameter, a uniform solid sphere has $I=\dfrac25mR^2$. The formulas describe different mass distributions. For a composite device add the components' moments about the same axis. For an axis parallel to the centre-of-mass axis at distance $d$, the **parallel-axis theorem** gives $I=I_{CM}+md^2$.
:::

:::osservazione{titolo="Choice of axis and mass distribution"}
The ratio $b=\dfrac{I_{CM}}{mR^2}$ is dimensionless. For the bodies in the table, $R$ is the outer radius and $I_{CM}$ refers to the axis specified. The coefficient lets us compare bodies of equal mass and radius from their mass distributions.

| Body | Axis | $b$ |
| --- | --- | ---: |
| Thin ring | Central, perpendicular to the plane | $1$ |
| Uniform solid disc | Central, perpendicular to the plane | $\dfrac{1}{2}$ |
| Uniform solid sphere | Diameter | $\dfrac{2}{5}$ |

To shift the central axis by $d$ along the $x$ direction, the squared distance of each mass becomes $(x_i-d)^2+y_i^2$. The cross terms sum to $-2d\sum_i m_ix_i=0$ because the origin is the centre of mass. The term left in addition to $I_{CM}$ is $d^2\sum_i m_i=md^2$. This step requires parallel axes.

::grafico{f="x^2/100" punti="20,4,pieno;40,16,pieno" etichette="21.2,3.4,4;40.8,15.1,16" xmin=0 xmax=50 ymin=0 ymax=25 nomi="r (cm),I (10⁻² kg·m²)" titolo="For a 1 kg point mass, moving from 0.20 to 0.40 m quadruples its contribution"}
:::

:::esempio{titolo="A disc about two axes"}
A $4\,\mathrm{kg}$ disc of radius $0.50\,\mathrm m$ has central inertia $0.50\,\mathrm{kg\cdot m^2}$. Shifting the axis parallel to itself to the rim adds $4\cdot0.50^2\,\mathrm{kg\cdot m^2}=1\,\mathrm{kg\cdot m^2}$. The total is $1.50\,\mathrm{kg\cdot m^2}$. The added term is positive because the mean squared distance to the axis increases.

::grafico{uguale=1 assi=0 curve=".5*cos(t),.5*sin(t),0,6.283185" linee="0,0.5,0" punti="0,0,pieno,C;.5,0,pieno,B" xmin=-.7 xmax=.8 ymin=-.7 ymax=.7 titolo="The axes are perpendicular to the diagram and pass through C and B"}
:::

## Equation of rotation

:::teorema{#dinamica-rotazione titolo="Net torque and angular acceleration"}
For a rigid body rotating about a fixed axis with constant $I$, the algebraic sum of torques about that axis is
$$
\sum_j M_j=I\alpha.
$$
A force applied in the plane perpendicular to the axis has torque magnitude $M=rF\sin\phi$, where $\phi$ is the angle between the radius and force. This equals $rF_t$ for tangential component $F_t$, or $F d_\perp$ for perpendicular distance $d_\perp$ from the axis to the line of action. Assign the sign according to the sense of rotation induced. A force whose line of action passes through the axis has zero moment arm even if applied far away.

Opposing torques subtract. Zero net torque implies $\alpha=0$, but the body may already rotate with nonzero angular velocity. For a pulley with inertia and two tangential tensions, their torque is $(T_1-T_2)R$ with the sense of $T_1$ taken as positive. If acceleration is nonzero, the tensions can differ to supply the required torque.
:::

:::esempio{titolo="Signed torque and perpendicular moment arm"}
Point the $z$ axis towards the observer so that anticlockwise torque is positive. The axial component of the cross product is $M_z=xF_y-yF_x$. For a force $\vec F=(3,-4)\,\mathrm N$ applied at $A=(0.40,0)\,\mathrm m$, the horizontal component produces zero torque and the vertical component gives $M_z=-1.6\,\mathrm{N\cdot m}$. The line of action is $0.32\,\mathrm m$ from $O$, so the product $F d_\perp$ gives the magnitude $5\cdot0.32=1.6\,\mathrm{N\cdot m}$.

::grafico{assi=0 uguale=1 linee="0,0.4,0" segmenti=".12,.373333,.64,-.32;0,0,.256,.192" vettori=".4,0,.58,-.24,F" punti="0,0,pieno,O;.4,0,pieno,A;.256,.192,pieno" etichette=".092,.14,d_⊥" xmin=-.07 xmax=.73 ymin=-.36 ymax=.45 titolo="The marked moment arm is perpendicular to the line of action. The force tends to turn the lever clockwise."}
:::

:::esempio{titolo="Opposing torques"}
A wheel with $I=2\,\mathrm{kg\cdot m^2}$ experiences torques of $+6\,\mathrm{N\cdot m}$ and $-2\,\mathrm{N\cdot m}$. Their sum is $+4\,\mathrm{N\cdot m}$ and angular acceleration is $+2\,\mathrm{rad/s^2}$. If the wheel initially rotates in the negative sense, that acceleration slows it until it stops. It then gains positive angular velocity while the same torques act.
:::

:::osservazione{titolo="The two tensions on a pulley"}
A pulley of radius $0.20\,\mathrm m$ is pulled downwards with $30\,\mathrm N$ on its left side and $10\,\mathrm N$ on its right side. The tensions give torques of $+6$ and $-2\,\mathrm{N\cdot m}$ about the axle. If the axle reaction acts through the axis and axle friction is negligible, the net torque is $+4\,\mathrm{N\cdot m}$, as in the wheel example.

::grafico{assi=0 uguale=1 curve=".2*cos(t),.2*sin(t),0,6.283185" linee="-.2,0.2,0" vettori="-.2,0,-.2,-.3,T_1;.2,0,.2,-.1,T_2" punti="0,0,pieno,O" xmin=-.36 xmax=.43 ymin=-.37 ymax=.27 titolo="T1 and T2 both point downwards and produce opposing torques about O"}
:::

## Energy and work in rotation

:::teorema{#energia-rotazione titolo="Rotational kinetic energy"}
For a fixed-axis rotation, each mass has speed $|\omega|r_i$. Add $\dfrac12m_i\omega^2r_i^2$ and factor out the common term to obtain $K_{\mathrm{rot}}=\dfrac12I\omega^2$. At fixed $I$, doubling angular speed quadruples energy, and reversing the rotation leaves energy unchanged.

A constant axial torque does work $W=M\Delta\theta$, with a signed angle in radians. A varying torque instead requires the signed area on the torque–angle graph. Instantaneous mechanical power is $P=M\omega$. Torque is measured in newton-metres, but it is the product with angular displacement that represents work in joules.

In planar rigid-body motion, split translation of the centre of mass from rotation about it. Total kinetic energy is $\dfrac12mv_{CM}^2+\dfrac12I_{CM}\omega^2$. The cross terms cancel because the mass-weighted sum of positions relative to the centre of mass is zero.
:::

:::esempio{titolo="Work needed to change angular speed"}
A flywheel with $I=0.50\,\mathrm{kg\cdot m^2}$ changes from $4$ to $8\,\mathrm{rad/s}$. Its energy changes from $4$ to $16\,\mathrm J$, so the net work is $12\,\mathrm J$. With a constant axial torque of $3\,\mathrm{N\cdot m}$, it must turn through $4\,\mathrm{rad}$.
:::

:::esempio{titolo="Work from a torque–angle graph"}
A motor supplies a net torque of $4\,\mathrm{N\cdot m}$ as a shaft turns through its first $3\,\mathrm{rad}$ in the positive direction. Over the next $2\,\mathrm{rad}$ the torque changes to $-2\,\mathrm{N\cdot m}$. The work is $4\cdot3-2\cdot2=8\,\mathrm J$. From an initial kinetic energy of $10\,\mathrm J$ the energy rises to $22\,\mathrm J$ and then falls to $18\,\mathrm J$. During the second interval the angular velocity remains positive while the torque supplies negative power.

::grafico{linee="0,4 3,4;3,-2 5,-2" segmenti="3,4,3,-2" area="4;0;0;3|-2;0;3;5" xmin=0 xmax=5.65 ymin=-3 ymax=5 nomi="θ (rad),M (N·m)" titolo="The first rectangle represents 12 J, and the second represents −4 J"}
:::

:::esempio{titolo="Two ways to calculate the same energy"}
The disc of mass $4\,\mathrm{kg}$ and radius $0.50\,\mathrm m$ can turn about a fixed axle at the rim. With $\omega=4\,\mathrm{rad/s}$ the whole motion can be described as rotation about the axle. The inertia about the rim is $1.50\,\mathrm{kg\cdot m^2}$, giving a kinetic energy of $12\,\mathrm J$.

In the other description, the centre moves in a circle about the axle at a speed of $2\,\mathrm{m/s}$. Translation of the centre contributes $8\,\mathrm J$, and rotation about the centre contributes $4\,\mathrm J$. The parallel-axis term $mR^2$ times $\dfrac12\omega^2$ gives precisely those $8\,\mathrm J$. Adding them to the energy already calculated about the axle would count them twice.
:::

## Angular momentum

:::teorema{#momento-angolare titolo="Balance about an axis"}
For a particle, angular momentum about a point is $\vec L=\vec r\times\vec p$. For fixed-axis rotation use its component along the axis, $L=I\omega$. The **angular momentum balance** equates its change to the external torque impulse about that same axis. With zero net external torque, $I_i\omega_i=I_f\omega_f$. In this equation $I$ can change as the masses move, even if total mass stays the same. During the shift, $L=I\omega$ applies if all masses share the same angular velocity. The change in $L$ then depends on changes to both $\omega$ and $I$. The law $\sum M=I\alpha$ follows when the inertia is constant.

A skater who moves their arms closer to the axis decreases $I$. To keep the same $L$, the magnitude of $\omega$ increases. Writing $K_{\mathrm{rot}}=\dfrac{L^2}{2I}$ shows that at fixed angular momentum, energy grows as $I$ decreases. Muscular work can increase kinetic energy without applying external torque to the system.
:::

:::esempio{titolo="Checking the two quantities separately"}
For $I_i=3\,\mathrm{kg\cdot m^2}$, $\omega_i=2\,\mathrm{rad/s}$ and $I_f=1.5\,\mathrm{kg\cdot m^2}$, angular momentum is $6\,\mathrm{kg\cdot m^2/s}$. Thus $\omega_f=4\,\mathrm{rad/s}$. Energy goes from $6$ to $12\,\mathrm J$. Angular momentum stays constant while energy increases by $6\,\mathrm J$.

::grafico{f="6/x" punti="3,2,pieno,A;1.5,4,pieno,B" xmin=1 xmax=4 ymin=0 ymax=7 nomi="I (kg·m²),ω (rad/s)" titolo="Reducing I moves up the constant-angular-momentum curve"}
:::

:::esempio{titolo="Angular momentum changes across two intervals"}
The signed area on the $M$–$t$ graph is the angular impulse. If a rotor has $L_i=-2\,\mathrm{kg\cdot m^2/s}$, a torque of $+3\,\mathrm{N\cdot m}$ for $2\,\mathrm s$ takes $L$ to $+4\,\mathrm{kg\cdot m^2/s}$. A torque of $-1\,\mathrm{N\cdot m}$ for the next $3\,\mathrm s$ reduces it to $+1\,\mathrm{kg\cdot m^2/s}$. The angular impulse over the whole interval is $+3\,\mathrm{N\cdot m\cdot s}$, a unit equivalent to $\mathrm{kg\cdot m^2/s}$. If two impulses cancel, the final value equals the initial one even if it changes in between.

::grafico{linee="0,3 2,3;2,-1 5,-1" segmenti="2,3,2,-1" area="3;0;0;2|-1;0;2;5" xmin=0 xmax=5.65 ymin=-2 ymax=4 nomi="t (s),M (N·m)" titolo="The two areas give angular impulses of +6 and −3 N·m·s"}
:::

:::esempio{titolo="Two flywheels coupled by a clutch"}
Two coaxial flywheels each have inertia $0.80\,\mathrm{kg\cdot m^2}$. One starts at $10\,\mathrm{rad/s}$ and the other at rest. An internal clutch couples them, and the impulse of external torques along the axis is negligible. The initial angular momentum is $8\,\mathrm{kg\cdot m^2/s}$. Once the flywheels rotate together, dividing this value by their combined inertia gives $5\,\mathrm{rad/s}$.

Their initial kinetic energy is $40\,\mathrm J$ and their final kinetic energy is $20\,\mathrm J$. While the clutch slips, the torques on the two flywheels are opposite but their velocities differ. The combined work done by the clutch is negative. The lost kinetic energy is converted to internal energy in the clutch and flywheels, while the total angular momentum stays constant.
:::

## Rolling without slipping

:::teorema{#rotolamento titolo="Constraint relating translation and rotation"}
A wheel of radius $R$ rolls without slipping on a stationary surface when its contact point has zero instantaneous velocity relative to the surface. Translation of the centre and rotation give that point opposite velocities of equal magnitude. In magnitudes this gives $v_{CM}=|\omega|R$. At the top the two contributions point in the same direction, and the speed is $2v_{CM}$. The constraint concerns the current point of contact, which changes with time. A material point of the rim then leaves the ground.

For pure rolling without dissipation on a fixed surface, static friction can provide torque while doing zero work at the contact point. If the body starts from rest and descends through a height $h$,
$$
mgh=\frac12 m v_{CM}^2+\frac12 I_{CM}\frac{v_{CM}^2}{R^2}.
$$
Writing $b=\dfrac{I_{CM}}{mR^2}$ gives $v_{CM}=\sqrt{\dfrac{2gh}{1+b}}$. For a uniform solid disc $b=\dfrac12$, and for a ring $b=1$. The disc arrives at greater speed because at the same mass, radius and speed it would store less energy in rotation. The criterion applies when static friction suffices to maintain rolling contact without slip along the path.
:::

:::esempio{titolo="Speeds on a rolling wheel"}
With $R=0.40\,\mathrm m$ and $|\omega|=5\,\mathrm{rad/s}$, the centre moves forward at $2\,\mathrm{m/s}$. At the top rotation adds another $2\,\mathrm{m/s}$ in the same direction. At the bottom the rotational velocity is $2\,\mathrm{m/s}$ backwards, so the point is instantaneously at rest.

::grafico{uguale=1 assi=0 curve="0.4*cos(t),0.4+0.4*sin(t),0,6.283185" linee="-.6,0 1.05,0" vettori="0,.4,.3,.4,v_CM;0,.8,.6,.8,v" punti="0,0,pieno,C" xmin=-.65 xmax=1.1 ymin=-.2 ymax=1.05 titolo="The top velocity vector is twice as long as the centre velocity vector"}
:::

:::esempio{titolo="How much friction a ramp requires"}
A body descends a fixed surface inclined at angle $\beta$, with its centre of mass on the geometric axis. Since static friction $F_s$ points uphill and provides torque about the centre, $F_sR=I_{CM}\dfrac aR$ when the rolling constraint holds. Along the ramp, $ma=mg\sin\beta-F_s$. Combining the equations gives
$$
a=\frac{g\sin\beta}{1+b},\qquad
F_s=\frac{bmg\sin\beta}{1+b}.
$$
The normal force is $mg\cos\beta$, so the available friction is sufficient if $\mu_s\geq\dfrac{b}{1+b}\tan\beta$. For $\beta=30^\circ$ the threshold is about $0.192$ for the disc and $0.289$ for the ring. If $\mu_s=0.22$, the disc can maintain rolling without slipping and the ring begins to slip. The lossless energy balance applies to the disc on this ramp.

::grafico{f="50*x/(1+x)" punti=".5,16.66667,pieno,D;1,25,pieno,A" xmin=0 xmax=1.2 ymin=0 ymax=31 nomi="b,100 F_s/(mg)" titolo="At 30°, required friction as a percentage of the weight increases with b. D marks the disc and A the ring."}
:::
