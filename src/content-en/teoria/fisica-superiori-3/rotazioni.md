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

:::esempio{titolo="Stopping and reversing"}
With $\omega_0=4\,\mathrm{rad/s}$ and $\alpha=-2\,\mathrm{rad/s^2}$, the value after $3\,\mathrm s$ is $\omega=-2\,\mathrm{rad/s}$. The disc stops at $2\,\mathrm s$ and then reverses. The first triangle of the graph contributes $4\,\mathrm{rad}$ and the second $-1\,\mathrm{rad}$. The net angle is $3\,\mathrm{rad}$, while the magnitude of the angle swept is $5\,\mathrm{rad}$.

::grafico{linee="0,4 3,-2" area="4-2*x;0;0;2|4-2*x;0;2;3" punti="2,0,pieno" xmin=0 xmax=3.6 ymin=-3 ymax=5 nomi="t (s),ω (rad/s)" titolo="The areas above and below the axis have opposite signs"}
:::

## Moment of inertia

:::definizione{#inerzia-rotazione titolo="Distance of mass from the axis"}
For point masses, the **moment of inertia** about an axis is $I=\sum_i m_ir_i^2$, where $r_i$ is the perpendicular distance to the axis. It is measured in $\mathrm{kg\cdot m^2}$. A mass on the axis contributes zero, and doubling its distance quadruples its contribution. For extended bodies, apply the same sum to ever smaller portions.

About the central axis perpendicular to the plane, a thin ring has $I=mR^2$ and a uniform solid disc has $I=\dfrac12mR^2$. About a diameter, a uniform solid sphere has $I=\dfrac25mR^2$. The formulas describe different mass distributions. For a composite device add the components' moments about the same axis. For an axis parallel to the centre-of-mass axis at distance $d$, the **parallel-axis theorem** gives $I=I_{CM}+md^2$.
:::

:::esempio{titolo="A disc about two axes"}
A $4\,\mathrm{kg}$ disc of radius $0.50\,\mathrm m$ has central inertia $0.50\,\mathrm{kg\cdot m^2}$. Shifting the axis parallel to itself to the rim adds $4\cdot0.50^2\,\mathrm{kg\cdot m^2}=1\,\mathrm{kg\cdot m^2}$. The total is $1.50\,\mathrm{kg\cdot m^2}$. The added term is positive because the mean squared distance to the axis increases.

::grafico{uguale=1 assi=0 curve=".5*cos(t),.5*sin(t),0,6.283185" linee="0,0 .5,0" punti="0,0,pieno,C;.5,0,pieno,B" xmin=-.7 xmax=.8 ymin=-.7 ymax=.7 titolo="The axes are perpendicular to the diagram and pass through C and B"}
:::

## Equation of rotation

:::teorema{#dinamica-rotazione titolo="Net torque and angular acceleration"}
For a rigid body rotating about a fixed axis with constant $I$, the algebraic sum of torques about that axis is
$$
\sum_j M_j=I\alpha.
$$
A force applied in the plane perpendicular to the axis has torque magnitude $M=rF\sin\phi$, where $\phi$ is the angle between the radius and force. This equals $rF_t$ for tangential component $F_t$, or $Fb$ for perpendicular distance $b$ from the axis to the line of action. Assign the sign according to the sense of rotation induced. A force whose line of action passes through the axis has zero moment arm even if applied far away.

Opposing torques subtract. Zero net torque implies $\alpha=0$, but the body may already rotate with nonzero angular velocity. For a pulley with inertia and two tangential tensions, their torque is $(T_1-T_2)R$ with the sense of $T_1$ taken as positive. If acceleration is nonzero, the tensions can differ to supply the required torque.
:::

:::esempio{titolo="Opposing torques"}
A wheel with $I=2\,\mathrm{kg\cdot m^2}$ experiences torques of $+6\,\mathrm{N\cdot m}$ and $-2\,\mathrm{N\cdot m}$. Their sum is $+4\,\mathrm{N\cdot m}$ and angular acceleration is $+2\,\mathrm{rad/s^2}$. If the wheel initially rotates in the negative sense, that acceleration slows it until it stops. It then gains positive angular velocity while the same torques act.
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

## Angular momentum

:::teorema{#momento-angolare titolo="Balance about an axis"}
For a particle, angular momentum about a point is $\vec L=\vec r\times\vec p$. For fixed-axis rotation use its component along the axis, $L=I\omega$. The **angular momentum balance** equates its change to the external torque impulse about that same axis. With zero net external torque, $I_i\omega_i=I_f\omega_f$. In this equation $I$ can change as the masses move, even if total mass stays the same.

A skater who moves their arms closer to the axis decreases $I$. To keep the same $L$, the magnitude of $\omega$ increases. Writing $K_{\mathrm{rot}}=\dfrac{L^2}{2I}$ shows that at fixed angular momentum, energy grows as $I$ decreases. Muscular work can increase kinetic energy without applying external torque to the system.
:::

:::esempio{titolo="Checking the two quantities separately"}
For $I_i=3\,\mathrm{kg\cdot m^2}$, $\omega_i=2\,\mathrm{rad/s}$ and $I_f=1.5\,\mathrm{kg\cdot m^2}$, angular momentum is $6\,\mathrm{kg\cdot m^2/s}$. Thus $\omega_f=4\,\mathrm{rad/s}$. Energy goes from $6$ to $12\,\mathrm J$. Angular momentum stays constant while energy increases by $6\,\mathrm J$.

::grafico{f="6/x" punti="3,2,pieno,A;1.5,4,pieno,B" xmin=1 xmax=4 ymin=0 ymax=7 nomi="I,ω" titolo="Reducing I moves up the constant-angular-momentum curve"}
:::

## Rolling without slipping

:::teorema{#rotolamento titolo="Constraint relating translation and rotation"}
A wheel of radius $R$ rolls without slipping on a stationary surface when its contact point has zero instantaneous velocity relative to the surface. Translation of the centre and rotation give that point opposite velocities of equal magnitude. In magnitudes this gives $v_{CM}=|\omega|R$. At the top the two contributions point in the same direction, and the speed is $2v_{CM}$. The constraint concerns the current point of contact, which changes with time. A material point of the rim then leaves the ground.

For pure rolling without dissipation on a fixed surface, static friction can provide torque while doing zero work at the contact point. If the body starts from rest and descends through a height $h$,
$$
mgh=\frac12 m v_{CM}^2+\frac12 I_{CM}\frac{v_{CM}^2}{R^2}.
$$
Writing $b=I_{CM}/(mR^2)$ gives $v_{CM}=\sqrt{2gh/(1+b)}$. For a uniform solid disc $b=\dfrac12$, and for a ring $b=1$. The disc arrives at greater speed because at the same mass, radius and speed it would store less energy in rotation. The criterion applies when static friction suffices to maintain rolling contact without slip along the path.
:::

:::esempio{titolo="Speeds on a rolling wheel"}
With $R=0.40\,\mathrm m$ and $|\omega|=5\,\mathrm{rad/s}$, the centre moves forward at $2\,\mathrm{m/s}$. At the top rotation adds another $2\,\mathrm{m/s}$ in the same direction. At the bottom the rotational velocity is $2\,\mathrm{m/s}$ backwards, so the point is instantaneously at rest.

::grafico{uguale=1 assi=0 curve="0.4*cos(t),0.4+0.4*sin(t),0,6.283185" linee="-.6,0 1.05,0" vettori="0,.4,.3,.4,v_CM;0,.8,.6,.8,v" punti="0,0,pieno,C" xmin=-.65 xmax=1.1 ymin=-.2 ymax=1.05 titolo="The top velocity vector is twice as long as the centre velocity vector"}
:::
