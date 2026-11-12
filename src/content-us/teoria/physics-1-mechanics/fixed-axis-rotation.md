---
titolo: Fixed-axis rotation
sommario: How angular position, angular velocity and angular acceleration describe a rigid body turning about a fixed axis, how the moment of inertia and the parallel-axis theorem measure its resistance to being spun up, and how torque, Newton's second law for rotation and the energy methods determine the motion.
---

## Rotation about a fixed axis

:::definizione{#rigid-body titolo="Rigid body and axis of rotation"}
A **rigid body** is a system of particles whose mutual distances stay constant throughout the motion. The body **rotates about a fixed axis** when one straight line of the body remains at rest, while every other point describes a circle whose center lies on that line and whose plane is perpendicular to it. The line at rest is the **axis of rotation**.

Each point of the body travels on a circle of its own radius, and all these circles are described in the same time. A single variable is therefore enough to locate the whole body, since fixing the position of one point off the axis fixes the position of every other point.
:::

:::definizione{#angular-position titolo="Angular position and angular displacement"}
Fix a reference line through the axis, in the plane of the motion. The **angular position** $\theta$ of the body is the angle between the reference line and the line drawn from the axis to a chosen point of the body, counted positive counterclockwise. The angle is measured in **radians**, so that a point at distance $r$ from the axis which travels the arc $s$ satisfies
$$
\theta = \dfrac{s}{r} ,
\qquad
s = r\,\theta .
$$
Since $\theta$ is a ratio of two lengths, the radian is dimensionless, and one complete turn corresponds to $\theta = 2\pi\,\mathrm{rad}$.

The **angular displacement** over a time interval is $\Delta\theta = \theta_2 - \theta_1$, positive for a counterclockwise turn and negative for a clockwise one. The angle is not reduced to a single turn, hence a wheel making three complete counterclockwise revolutions has $\Delta\theta = 6\pi\,\mathrm{rad}$, because the arc travelled by each of its points is three times the circumference.

::grafico{assi=0 uguale=1 curve="2*cos(t),2*sin(t),0,6.29;0.55*cos(t),0.55*sin(t),0,0.6981" linee="0,0 2,0;0,0 1.5321,1.2856" punti="0,0,pieno;1.5321,1.2856,pieno,P" etichette="0.7,0.2,θ;0.9,-0.3,r;2.15,0.8,s" xmin=-2.4 xmax=2.8 ymin=-2.4 ymax=2.4 titolo="The point $P$ at distance $r$ from the axis travels the arc $s = r\theta$ while the body turns through the angle $\theta$ measured from the reference line"}
:::

:::osservazione{#angular-units titolo="Revolutions, degrees and radians"}
Angular positions are quoted in revolutions or in degrees in engineering practice, and every formula of this chapter requires radians. The conversions follow from $1\,\mathrm{rev} = 2\pi\,\mathrm{rad} = 360^\circ$:
$$
\omega = 1800\,\dfrac{\mathrm{rev}}{\mathrm{min}}
= 1800 \cdot \dfrac{2\pi\,\mathrm{rad}}{60\,\mathrm{s}}
= 188.5\,\mathrm{rad/s} .
$$
A rate in revolutions per minute is therefore multiplied by $\dfrac{2\pi}{60} \approx 0.1047$ to obtain radians per second, and an angle in degrees is multiplied by $\dfrac{\pi}{180}$.
:::

:::attenzione
The relation $s = r\theta$ holds *only* when $\theta$ is expressed in radians. A wheel of radius $0.20\,\mathrm{m}$ turned through $30^\circ$ advances $s = 0.20\,\mathrm{m} \cdot \dfrac{\pi}{6} = 0.105\,\mathrm{m}$, while substituting the number $30$ would give $6.0\,\mathrm{m}$, a value larger than the circumference itself.
:::

## Angular velocity and angular acceleration

:::definizione{#angular-velocity titolo="Angular velocity"}
The **average angular velocity** over a time interval is the ratio $\dfrac{\Delta\theta}{\Delta t}$, and the **instantaneous angular velocity** is its limit as the interval shrinks to zero,
$$
\omega = \lim_{\Delta t \to 0} \dfrac{\Delta\theta}{\Delta t} = \dfrac{d\theta}{dt} ,
$$
measured in $\mathrm{rad/s}$. The sign of $\omega$ gives the sense of the rotation, positive for a counterclockwise turn and negative for a clockwise one, with the chosen reference line and positive sense fixed once for the whole problem.

Since one variable locates the whole body, one value of $\omega$ describes the rotation of every point at once, which is the reason angular quantities are preferred to the velocities of the single points.
:::

:::richiamo{titolo="Derivative of a function of time"}
The derivative $\dfrac{df}{dt}$ of a function $f(t)$ is the limit of the ratio $\dfrac{\Delta f}{\Delta t}$ as $\Delta t \to 0$, and it measures the rate of change of $f$ at the instant considered. The derivative of $t^{n}$ is $n\,t^{\,n-1}$, and the derivative of a sum is the sum of the derivatives. The Calculus I course establishes these rules.
:::

:::definizione{#angular-acceleration titolo="Angular acceleration"}
The **angular acceleration** is the rate of change of the angular velocity,
$$
\alpha = \dfrac{d\omega}{dt} = \dfrac{d^2\theta}{dt^2} ,
$$
measured in $\mathrm{rad/s^2}$. The body speeds up when $\omega$ and $\alpha$ have the same sign and slows down when they have opposite signs, exactly as in straight-line motion.

The three quantities $\theta$, $\omega$ and $\alpha$ play here the role that $x$, $v$ and $a$ play in the chapter on motion along a straight line, and every result of that chapter transfers to rotation by replacing each quantity with its angular counterpart.
:::

:::esempio{#angular-kinematics-example titolo="Reading the motion from the angular position"}
A wheel has angular position $\theta(t) = 0.50 + 2.0\,t^2$, with $\theta$ in radians and $t$ in seconds. Differentiating twice,
$$
\omega(t) = \dfrac{d\theta}{dt} = 4.0\,t ,
\qquad
\alpha(t) = \dfrac{d\omega}{dt} = 4.0\,\mathrm{rad/s^2} .
$$
The angular acceleration is constant, therefore at $t = 3.0\,\mathrm{s}$ the wheel turns at $\omega = 12\,\mathrm{rad/s}$ and has turned through $\theta(3.0) - \theta(0) = 18\,\mathrm{rad}$, that is, $2.9$ revolutions.
:::

## Rotation with constant angular acceleration

A constant torque applied to a rigid body produces a constant angular acceleration, hence this case covers most of the problems of the chapter.

::::teorema{#constant-angular-acceleration titolo="Equations of rotation with constant angular acceleration"}
Let a body rotate about a fixed axis with constant angular acceleration $\alpha$, and let $\theta_0$ and $\omega_0$ be its angular position and angular velocity at $t = 0$. Then
$$
\begin{aligned}
\omega &= \omega_0 + \alpha\,t , \\[6pt]
\theta &= \theta_0 + \omega_0\,t + \dfrac{1}{2}\,\alpha\,t^2 , \\[6pt]
\omega^2 &= \omega_0^2 + 2\,\alpha\,(\theta - \theta_0) .
\end{aligned}
$$

:::dimostrazione
From $\dfrac{d\omega}{dt} = \alpha$ with $\alpha$ constant, integration between $0$ and $t$ gives $\omega - \omega_0 = \alpha\,t$, which is the first equation. Substituting it into $\dfrac{d\theta}{dt} = \omega$ and integrating again between $0$ and $t$ gives
$$
\theta - \theta_0 = \int_0^t (\omega_0 + \alpha\,t')\,dt' = \omega_0\,t + \dfrac{1}{2}\,\alpha\,t^2 ,
$$
which is the second equation. Eliminating $t$ between the first two equations, that is, substituting $t = \dfrac{\omega - \omega_0}{\alpha}$ into the second one, gives
$$
\theta - \theta_0 = \dfrac{\omega^2 - \omega_0^2}{2\,\alpha} ,
$$
and solving for $\omega^2$ gives the third equation.
:::

The first two equations answer every question in which the time is given or requested, while the third one connects angular velocity and angular displacement without the time, which is what a braking problem requires. For a flywheel started from rest with $\alpha = 2.5\,\mathrm{rad/s^2}$, after $6.0\,\mathrm{s}$ the angular velocity is $15\,\mathrm{rad/s}$ and the angular displacement is $45\,\mathrm{rad}$, that is, $7.2$ revolutions.
::::

::grafico{f="2+3*x" area="2+3*x;0;0;4" punti="0,2,pieno;4,14,pieno" xmin=-0.9 xmax=5.2 ymin=-2.5 ymax=16 nomi="t,ω" titolo="With constant angular acceleration the graph of $\omega(t)$ is a straight line of slope $\alpha$, and the shaded area equals the angular displacement $\Delta\theta = \omega_0 t + \dfrac{1}{2}\alpha t^2$"}

## Angular and linear quantities

::::teorema{#arc-and-speed titolo="Speed and tangential acceleration of a point of the body"}
Let a rigid body rotate about a fixed axis, and let $P$ be a point of the body at distance $r$ from the axis. Then the speed of $P$ and the component of its acceleration along the direction of the motion are
$$
v = \omega\,r ,
\qquad
a_t = \alpha\,r .
$$

:::dimostrazione
The point $P$ moves on a circle of radius $r$, and the arc travelled from the reference line is $s = r\,\theta$ with $r$ constant. Differentiating with respect to the time,
$$
v = \dfrac{ds}{dt} = r\,\dfrac{d\theta}{dt} = \omega\,r .
$$
The speed is the magnitude of the velocity, which is tangent to the circle, therefore differentiating once more gives the component of the acceleration along the tangent,
$$
a_t = \dfrac{dv}{dt} = r\,\dfrac{d\omega}{dt} = \alpha\,r .
$$
:::

The two formulas convert one rotation into the motion of each of its points. Points farther from the axis move faster, which is why the rim of a wheel of radius $0.35\,\mathrm{m}$ turning at $\omega = 12.6\,\mathrm{rad/s}$ advances at $4.4\,\mathrm{m/s}$ while a point halfway to the axis advances at $2.2\,\mathrm{m/s}$. Two pulleys joined by a belt that does not slip share the speed of the belt, hence $\omega_1 r_1 = \omega_2 r_2$, and the smaller pulley turns faster.
::::

:::definizione{#centripetal-and-tangential titolo="Radial and tangential acceleration"}
The acceleration of a point of a rotating body is resolved along the radius and along the tangent to its circle. The **radial component**, also called centripetal, points towards the axis and has magnitude
$$
a_r = \dfrac{v^2}{r} = \omega^2\,r ,
$$
while the **tangential component** $a_t = \alpha\,r$ lies along the direction of the motion. The two components are perpendicular, therefore the magnitude of the acceleration is
$$
a = \sqrt{a_r^2 + a_t^2} .
$$
The radial component changes the direction of the velocity and the tangential component changes its magnitude. A body turning at constant $\omega$ has $\alpha = 0$ and keeps the radial component alone, which is the uniform circular motion of the chapter on motion in two and three dimensions.

::grafico{assi=0 uguale=1 curve="2*cos(t),2*sin(t),0,6.29" linee="0,0 1,1.7321" vettori="1,1.7321,0.25,0.4331,aᵣ;1,1.7321,-0.0392,2.3321,aₜ;1,1.7321,-0.7892,1.0331,a" segmenti="0.25,0.4331,-0.7892,1.0331;-0.0392,2.3321,-0.7892,1.0331" punti="0,0,pieno;1,1.7321,pieno" xmin=-2.6 xmax=2.6 ymin=-2.4 ymax=2.9 titolo="The acceleration of a point of the body is the sum of the radial component $a_r = \omega^2 r$, directed towards the axis, and the tangential component $a_t = \alpha r$"}
:::

## Moment of inertia

:::definizione{#moment-of-inertia titolo="Moment of inertia about an axis"}
Let a body be divided into particles of masses $m_i$ at distances $r_i$ from a given axis. The **moment of inertia** of the body about that axis is
$$
I = \sum_i m_i\,r_i^2 ,
$$
and for a body with a continuous distribution of mass the sum becomes the integral
$$
I = \int r^2\,dm ,
$$
extended to the whole body. The unit is $\mathrm{kg\cdot m^2}$.

Each mass is weighted by the square of its distance from the axis, therefore mass placed far from the axis contributes much more than the same mass placed close to it. The moment of inertia measures how hard it is to change the angular velocity of the body, in the same way as the mass measures how hard it is to change its velocity.
:::

:::attenzione
The moment of inertia depends on the axis, not on the body alone. A uniform rod of mass $M$ and length $L$ has $I = \dfrac{1}{12}ML^2$ about the perpendicular axis through its center and $I = \dfrac{1}{3}ML^2$ about the perpendicular axis through one end, four times as much, although the mass and the length are the same. A value of $I$ is meaningful *only* when the axis it refers to is stated.
:::

:::esempio{#rod-about-center titolo="Moment of inertia of a uniform rod"}
A uniform rod of mass $M$ and length $L$ rotates about the perpendicular axis through its center. The rod is uniform, hence its linear mass density is $\lambda = \dfrac{M}{L}$, and the element of the rod between $x$ and $x + dx$ has mass $dm = \lambda\,dx$ and distance $|x|$ from the axis. Therefore
$$
I = \int_{-L/2}^{\,L/2} x^2\,\lambda\,dx
= \lambda\,\left[\dfrac{x^3}{3}\right]_{-L/2}^{\,L/2}
= \dfrac{M}{L} \cdot \dfrac{2}{3} \cdot \dfrac{L^3}{8}
= \dfrac{1}{12}\,M L^2 .
$$

::grafico{assi=0 uguale=1 poligoni="-3,-0.12 3,-0.12 3,0.12 -3,0.12" linee="1.7,-0.12 2,-0.12 2,0.12 1.7,0.12 1.7,-0.12" segmenti="0,-1.1,0,1.1;0,0.5,1.85,0.5" punti="0,0,pieno" etichette="0.12,0.95,axis;0.85,0.68,x;2.15,0.4,dm" xmin=-3.6 xmax=3.8 ymin=-1.8 ymax=1.8 titolo="The element of the rod of mass $dm = \dfrac{M}{L}\,dx$ lies at distance $|x|$ from the axis and contributes $x^2\,dm$ to the moment of inertia"}
:::

:::osservazione{#common-moments-of-inertia titolo="Moments of inertia of uniform bodies"}
The integral has been evaluated once for each shape in common use, with $M$ the total mass and the axis as stated.

| Body | Axis | Moment of inertia |
|---|---|---|
| thin rod, length $L$ | perpendicular, through the center | $\dfrac{1}{12}ML^2$ |
| thin rod, length $L$ | perpendicular, through one end | $\dfrac{1}{3}ML^2$ |
| solid disk or cylinder, radius $R$ | through the center, perpendicular to the face | $\dfrac{1}{2}MR^2$ |
| thin ring or hoop, radius $R$ | through the center, perpendicular to the plane | $MR^2$ |
| solid sphere, radius $R$ | through the center | $\dfrac{2}{5}MR^2$ |
| thin spherical shell, radius $R$ | through the center | $\dfrac{2}{3}MR^2$ |
| rectangular plate, sides $a$ and $b$ | perpendicular, through the center | $\dfrac{1}{12}M(a^2 + b^2)$ |

The moment of inertia is a sum, therefore the moment of inertia of a body made of several parts about one axis is the sum of the moments of inertia of the parts about that same axis. A rod with a small body attached at each end has $I = \dfrac{1}{12}M L^2 + 2\,m\left(\dfrac{L}{2}\right)^2$ about its center, and the hole drilled in a disk is accounted for by subtracting the moment of inertia of the removed material.
:::

## The parallel-axis theorem

::::teorema{#parallel-axis-theorem titolo="Parallel-axis theorem"}
Let $I_{\mathrm{cm}}$ be the moment of inertia of a body of mass $M$ about an axis through its center of mass, and let $I$ be the moment of inertia about a second axis, parallel to the first one and at distance $d$ from it. Then
$$
I = I_{\mathrm{cm}} + M\,d^2 .
$$

:::dimostrazione
Choose the plane perpendicular to the two axes through the center of mass, with the origin at the center of mass and the $x$ axis along the line joining the two axes, so that the second axis meets the plane at the point $(d, 0)$. The element of mass $dm$ at the point $(x, y)$ has squared distance $x^2 + y^2$ from the first axis and $(x - d)^2 + y^2$ from the second one, therefore
$$
I = \int \left[(x - d)^2 + y^2\right] dm
= \int (x^2 + y^2)\,dm - 2d \int x\,dm + d^2 \int dm .
$$
The first integral is $I_{\mathrm{cm}}$ and the third one is $M$. The origin is the center of mass, hence $\int x\,dm = M\,x_{\mathrm{cm}} = 0$ and the middle term vanishes, which leaves $I = I_{\mathrm{cm}} + M d^2$.
:::

The theorem gives the moment of inertia about any axis once the value about the parallel axis through the center of mass is known, so that the table of uniform bodies covers displaced axes as well. Since $M d^2 > 0$ for $d \neq 0$, the axis through the center of mass is the one about which the moment of inertia is smallest among all parallel axes.
::::

:::esempio{#rod-about-end titolo="Rod about an axis through one end"}
A uniform rod of mass $M$ and length $L$ has $I_{\mathrm{cm}} = \dfrac{1}{12}ML^2$, and the perpendicular axis through one end is parallel to it at distance $d = \dfrac{L}{2}$. The parallel-axis theorem applies, hence
$$
I = \dfrac{1}{12}\,ML^2 + M\left(\dfrac{L}{2}\right)^2 = \dfrac{1}{3}\,ML^2 ,
$$
which agrees with the value obtained by integrating $x^2\,dm$ from $0$ to $L$. The same step gives the moment of inertia of a disk about an axis on its rim, $I = \dfrac{1}{2}MR^2 + MR^2 = \dfrac{3}{2}MR^2$, which the problems on a disk swinging about a point of its rim require.

::grafico{assi=0 uguale=1 curve="1.7*cos(t),1.15*sin(t),0,6.29" punti="0,0,pieno;2.8,0,pieno;0.75,0.65,pieno" segmenti="0,0,2.8,0;0,0,0.75,0.65;2.8,0,0.75,0.65" etichette="-0.75,-0.1,CM;3.0,-0.1,P;1.4,-0.32,d;0.2,0.55,rᵢ;1.95,0.62,hᵢ;0.72,0.9,dm" xmin=-2.4 xmax=3.8 ymin=-1.9 ymax=1.9 titolo="The element $dm$ is at distance $r_i$ from the axis through the center of mass and at distance $h_i$ from the parallel axis through $P$, with the two axes a distance $d$ apart"}
:::

## Torque

:::definizione{#torque titolo="Torque about a fixed axis"}
Let a force $\vec{F}$ be applied at a point of a body located by the vector $\vec{r}$ drawn from the axis, in the plane perpendicular to the axis, and let $\varphi$ be the angle between $\vec{r}$ and $\vec{F}$. The **torque** of the force about the axis is the quantity
$$
\tau = r\,F\sin\varphi = F\,\ell ,
\qquad
\ell = r\sin\varphi ,
$$
measured in $\mathrm{N\cdot m}$, where the **lever arm** $\ell$ is the perpendicular distance from the axis to the line of action of the force. The torque is counted positive when the force tends to turn the body counterclockwise and negative otherwise, with the same convention chosen for $\theta$.

The torque measures the effectiveness of a force in changing the rotation, and it grows with the lever arm. A force of $40\,\mathrm{N}$ applied perpendicular to a wrench $0.30\,\mathrm{m}$ long produces $\tau = 12\,\mathrm{N\cdot m}$, while the same force applied at $0.15\,\mathrm{m}$ from the axis produces half as much.

::grafico{assi=0 uguale=1 vettori="0,0,3,1,r;3,1,3.684,2.879,F" linee="2.33,-0.85 3.9,3.45" segmenti="0,0,2.3277,-0.8471;3,1,4.3,1.4333" punti="0,0,pieno;3,1,pieno" etichette="-0.45,0.05,O;2.8,0.55,A;1.05,-0.72,ℓ;3.72,1.6,φ" xmin=-1.0 xmax=4.9 ymin=-1.6 ymax=3.8 titolo="The torque of $\vec{F}$ about the axis through $O$ is $\tau = F\ell$, where $\ell$ is the distance from $O$ to the line of action of the force"}
:::

:::attenzione
A force applied to a body produces no torque about an axis when its line of action meets the axis, since then $\ell = 0$. Pushing a door at the hinge, with any magnitude, leaves the door at rest, while the same push applied at the handle opens it. For the same reason the forces exerted by the axle on a pulley contribute nothing to the torque about the axis of the pulley.
:::

:::osservazione{#net-torque titolo="Net torque on a body"}
Several forces acting on the same body give the **net torque** $\tau_{\mathrm{net}} = \sum_i \tau_i$, the algebraic sum of the single torques with their signs. Three facts reduce the number of terms to be written:

- a force whose line of action meets the axis gives no torque;
- the internal forces between the particles of the body cancel in pairs by Newton's third law, hence only the external forces contribute;
- the weight of a body gives the torque of a single force $M\vec{g}$ applied at the center of mass.

The last fact is what allows the weight of a rod or of a plate to be treated as one force in the problems on a body pivoted at one point, and the chapter on static equilibrium and elasticity uses it throughout.
:::

## Newton's second law for rotation

::::teorema{#newtons-second-law-rotation titolo="Newton's second law for fixed-axis rotation"}
Let a rigid body rotate about a fixed axis, let $I$ be its moment of inertia about that axis and let $\tau_{\mathrm{net}}$ be the net torque of the external forces about the same axis. Then
$$
\tau_{\mathrm{net}} = I\,\alpha .
$$

:::dimostrazione
Consider the particle of mass $m_i$ at distance $r_i$ from the axis, and resolve the force acting on it along the radius and along the tangent. Newton's second law applied to the tangential direction gives $F_{i,t} = m_i\,a_{i,t}$, and the particle belongs to the rigid body, hence $a_{i,t} = \alpha\,r_i$ with the same $\alpha$ for every particle. Multiplying by $r_i$,
$$
F_{i,t}\,r_i = m_i\,r_i^2\,\alpha .
$$
The left side is the torque of the force on the particle about the axis, since the radial component has zero lever arm. Summing over all the particles,
$$
\sum_i \tau_i = \left(\sum_i m_i\,r_i^2\right)\alpha = I\,\alpha .
$$
The internal forces cancel in pairs, therefore the sum on the left reduces to the net torque of the external forces, and $\tau_{\mathrm{net}} = I\,\alpha$ follows.
:::

The law determines the motion, since the net torque and the moment of inertia give the angular acceleration, and the equations of rotation with constant angular acceleration then give $\omega$ and $\theta$. A body connected to a rotating pulley is treated by writing Newton's second law for the translation of the body and this law for the rotation of the pulley, with the two accelerations linked by $a = \alpha R$ as long as the cord does not slip.
::::

:::esempio{#pulley-and-block titolo="Block hanging from a pulley with mass"}
A cord is wound around a pulley of mass $M = 2.0\,\mathrm{kg}$ and radius $R = 0.10\,\mathrm{m}$, treated as a uniform disk free to turn on a frictionless axle, and a body of mass $m = 1.0\,\mathrm{kg}$ hangs from the free end. The cord is massless and inextensible and does not slip on the rim. The two equations are
$$
\begin{cases}
m g - T = m\,a \\[4pt]
T R = \dfrac{1}{2}M R^2\,\alpha
\end{cases}
\qquad\text{with}\qquad
a = \alpha R ,
$$
and eliminating $T$ and $\alpha$ gives
$$
a = \dfrac{m g}{m + \dfrac{M}{2}}
= \dfrac{1.0\,\mathrm{kg} \cdot 9.81\,\mathrm{m/s^2}}{2.0\,\mathrm{kg}}
= 4.91\,\mathrm{m/s^2} ,
\qquad
T = m(g - a) = 4.91\,\mathrm{N} .
$$
The acceleration is smaller than $g$, because the cord must also spin up the pulley, and the tension is smaller than the weight $9.81\,\mathrm{N}$, consistently with the body accelerating downwards.

::grafico{assi=0 uguale=1 curve="3+0.6*cos(t),4.6+0.6*sin(t),0,6.29" linee="2.1,5.7 3.9,5.7;3,5.7 3,4.6;3.6,4.6 3.6,2.5" poligoni="3.2,1.9 4,1.9 4,2.5 3.2,2.5" punti="3,4.6,pieno" vettori="3.6,2.5,3.6,3.45,T;3.6,1.9,3.6,0.75,mg" segmenti="3,4.6,3.6,4.6" etichette="3.1,4.85,R;2.8,2.15,m;2.25,4.5,M" xmin=0.4 xmax=6.4 ymin=0.2 ymax=6.2 titolo="The cord pulls the rim of the pulley with the force $T$ at lever arm $R$, and the same $T$ pulls the body upwards against its weight $mg$"}
:::

## Rotational kinetic energy, work and power

::::teorema{#rotational-kinetic-energy titolo="Kinetic energy of a body rotating about a fixed axis"}
A rigid body rotating about a fixed axis with angular velocity $\omega$ and moment of inertia $I$ about that axis has kinetic energy
$$
K = \dfrac{1}{2}\,I\,\omega^2 .
$$

:::dimostrazione
The kinetic energy of the body is the sum of the kinetic energies of its particles, and the particle of mass $m_i$ at distance $r_i$ from the axis has speed $v_i = \omega\,r_i$ by the formula for the speed of a point of the body. Therefore
$$
K = \sum_i \dfrac{1}{2}\,m_i\,v_i^2
= \sum_i \dfrac{1}{2}\,m_i\,\omega^2 r_i^2
= \dfrac{1}{2}\left(\sum_i m_i\,r_i^2\right)\omega^2
= \dfrac{1}{2}\,I\,\omega^2 ,
$$
since $\omega$ is the same for every particle and can be taken out of the sum.
:::

The energy methods of the chapter on potential energy and conservation of energy apply to rotating bodies once this term is included in the energy balance. A flywheel with $I = 0.50\,\mathrm{kg\cdot m^2}$ turning at $30\,\mathrm{rad/s}$ stores $K = 225\,\mathrm{J}$, which is the energy it can return to the machine it drives while slowing down.
::::

::::teorema{#work-energy-theorem-rotation titolo="Work-energy theorem for rotation"}
Let a body rotate about a fixed axis under a net torque $\tau_{\mathrm{net}}$ while its angular position goes from $\theta_1$ to $\theta_2$. Then the work done by the external forces is
$$
W = \int_{\theta_1}^{\theta_2} \tau_{\mathrm{net}}\,d\theta ,
$$
and it equals the change in the kinetic energy of the body,
$$
W = \dfrac{1}{2}\,I\,\omega_2^2 - \dfrac{1}{2}\,I\,\omega_1^2 .
$$

:::dimostrazione
A force applied at a point at distance $r$ from the axis does the work $dW = F_t\,ds$ along the arc $ds = r\,d\theta$, hence $dW = F_t\,r\,d\theta = \tau\,d\theta$. Summing over the forces and integrating between the two angular positions gives the first formula. For the second one, write $\tau_{\mathrm{net}} = I\,\alpha$ and change the variable of integration,
$$
W = \int_{\theta_1}^{\theta_2} I\,\dfrac{d\omega}{dt}\,d\theta
= \int_{\omega_1}^{\omega_2} I\,\omega\,d\omega
= \dfrac{1}{2}\,I\,\omega_2^2 - \dfrac{1}{2}\,I\,\omega_1^2 ,
$$
where $d\theta = \omega\,dt$ has been used to replace $\dfrac{d\omega}{dt}\,d\theta$ with $\omega\,d\omega$.
:::

A constant torque reduces the integral to the product $W = \tau\,\Delta\theta$, with $\Delta\theta$ in radians. The theorem gives the angular velocity reached after a known angular displacement without solving for the time, and it is the rotational counterpart of the work-energy theorem of the chapter on work and kinetic energy.
::::

:::definizione{#power-rotation titolo="Power delivered by a torque"}
The **power** delivered by a torque is the work it does per unit time. From $dW = \tau\,d\theta$,
$$
P = \dfrac{dW}{dt} = \tau\,\dfrac{d\theta}{dt} = \tau\,\omega ,
$$
measured in watts when $\tau$ is in $\mathrm{N\cdot m}$ and $\omega$ in $\mathrm{rad/s}$.

The formula is how the torque of a motor is obtained from its rated power and its angular velocity. A motor delivering $15\,\mathrm{kW}$ at $1800\,\mathrm{rev/min}$, that is, at $188.5\,\mathrm{rad/s}$, exerts
$$
\tau = \dfrac{P}{\omega} = \dfrac{15\,000\,\mathrm{W}}{188.5\,\mathrm{rad/s}} = 79.6\,\mathrm{N\cdot m} ,
$$
and the same motor at half the angular velocity exerts twice the torque for the same power.
:::

:::esempio{#falling-rod titolo="Rod released from the horizontal position"}
A uniform rod of mass $M$ and length $L$ turns about a horizontal frictionless axis through one end. It is held horizontal and released from rest. The axis exerts no torque about itself and the weight acts at the center of mass, which descends by $\dfrac{L}{2}$ while the rod reaches the vertical, hence the mechanical energy is conserved and
$$
M g\,\dfrac{L}{2} = \dfrac{1}{2}\left(\dfrac{1}{3}M L^2\right)\omega^2
\qquad\Longrightarrow\qquad
\omega = \sqrt{\dfrac{3g}{L}} .
$$
For $L = 0.90\,\mathrm{m}$ the angular velocity at the vertical is $\omega = 5.72\,\mathrm{rad/s}$, and the free end moves at $v = \omega L = 5.15\,\mathrm{m/s}$. The chapter on angular momentum and rolling takes up the motion of bodies whose axis is itself free to move.

::grafico{assi=0 uguale=1 poligoni="0,-0.1 3,-0.1 3,0.1 0,0.1" linee="0,0 0,-3" punti="0,0,pieno;1.5,0,pieno;0,-1.5,pieno" segmenti="1.5,0,1.5,-1.5;0,-1.5,1.5,-1.5" etichette="0.1,0.4,O;1.35,0.4,CM;0.22,-1.45,CM;1.75,-0.8,h" xmin=-1.2 xmax=3.8 ymin=-3.5 ymax=1.0 titolo="The center of mass descends by $h = \dfrac{L}{2}$ while the rod turns from the horizontal to the vertical position"}
:::
