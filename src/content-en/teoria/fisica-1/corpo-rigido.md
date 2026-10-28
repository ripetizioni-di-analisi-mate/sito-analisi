---
titolo: Rigid-body dynamics
sommario: How the rotation of a rigid body is described, how torque, moment of inertia and angular momentum determine its motion, and when the body rolls without slipping or remains in equilibrium.
---

## Rigid body and angular quantities

:::definizione{#corpo-rigido titolo="Rigid body"}
A **rigid body** is a system of particles whose mutual distances remain constant during the motion. It is a model, adequate when the deformations of the real body are negligible. The mass can be concentrated at points or distributed with density $\rho$; in this case a volume element $dV$ has mass $dm = \rho\,dV$ and the sums over the points become integrals.

The motion is a **translation** if every segment joining two points of the body remains parallel to itself, and then all points have the same velocity. It is a **rotation about a fixed axis** if the points of a line remain at rest and every other point describes a circle centered on the axis. The most general motion decomposes into a translation of the center of mass and a rotation about an axis through the center of mass.
:::

:::definizione{#grandezze-angolari titolo="Angular position, velocity and acceleration"}
Consider a rigid body rotating about a fixed axis, chosen as the $z$ axis. The configuration of the body is determined by the **angular position** $\theta$, the angle in radians that a half-line fixed in the body and perpendicular to the axis forms with a fixed half-line. The angular velocity and the angular acceleration are
$$
\omega = \frac{d\theta}{dt} ,
\qquad
\alpha = \frac{d\omega}{dt} = \frac{d^2\theta}{dt^2} ,
$$
and they are measured in $\mathrm{rad/s}$ and in $\mathrm{rad/s^2}$. They are the same for *all* points of the body, so the rotation is described by a single equation of motion $\theta(t)$. We take $\omega > 0$ for counterclockwise rotation seen from the positive side of the $z$ axis, and the **angular velocity vector** is $\vec{\omega} = \omega\,\hat{k}$.

When $\alpha$ is constant, the laws of uniformly accelerated rectilinear motion hold, for which we refer to the topic on kinematics in one dimension, with $\theta$ in place of $x$:
$$
\omega = \omega_0 + \alpha t ,
\qquad
\theta = \theta_0 + \omega_0 t + \frac{1}{2}\alpha t^2 ,
\qquad
\omega^2 = \omega_0^2 + 2\alpha\,(\theta - \theta_0) .
$$
A grinding wheel that starts from rest with $\alpha = 4.0\,\mathrm{rad/s^2}$ rotates after $5.0\,\mathrm{s}$ at $\omega = 20\,\mathrm{rad/s}$ and has described the angle $\theta - \theta_0 = 50\,\mathrm{rad}$, that is $\dfrac{50}{2\pi} \approx 8.0$ revolutions.
:::

:::teorema{#velocita-dei-punti titolo="Velocity and acceleration of the points of the body"}
Let $P$ be a point of the body at distance $r$ from the axis of rotation. Then $P$ describes a circle of radius $r$ and
$$
v = \omega r ,
\qquad
a_t = \alpha r ,
\qquad
a_c = \omega^2 r = \frac{v^2}{r} ,
$$
where $a_t$ is the tangential acceleration and $a_c$ the centripetal acceleration, directed toward the axis. The formulas follow from those of circular motion, treated in the topic on motion in the plane, because the arc traveled by $P$ is $s = r\theta$. In vector form, with the origin on the axis, $\vec{v} = \vec{\omega} \times \vec{r}$. A disk of radius $0.20\,\mathrm{m}$ rotating at $30\,\mathrm{rad/s}$ has on its rim $v = 6.0\,\mathrm{m/s}$ and $a_c = 180\,\mathrm{m/s^2}$.
:::

## Torque and angular momentum

:::richiamo{titolo="Cross product"}
For two vectors $\vec{a}$ and $\vec{b}$ forming the angle $\varphi$, the cross product $\vec{a} \times \vec{b}$ is orthogonal to both, has magnitude $ab\sin\varphi$ and direction given by the right-hand rule; moreover $\vec{b} \times \vec{a} = -\,\vec{a} \times \vec{b}$, and the product of two parallel vectors is zero. We refer to the topic on vectors in the plane and in space in Linear Algebra.
:::

:::definizione{#momento-di-una-forza titolo="Torque of a force"}
Let $\vec{F}$ be a force applied at the point $P$ and let $O$ be a fixed point, called the *pole*. The **torque of the force** about $O$ is
$$
\vec{\tau}_O = \vec{r} \times \vec{F} ,
\qquad
\vec{r} = \overrightarrow{OP} .
$$
Its magnitude is $\tau_O = rF\sin\varphi = F b$, where $\varphi$ is the angle between $\vec{r}$ and $\vec{F}$ and $b = r\sin\varphi$ is the **lever arm**, that is the distance of $O$ from the line of action of the force; it is measured in $\mathrm{N\cdot m}$. For a given force the torque grows with the lever arm, and it is zero when the line of action passes through $O$. A wrench $0.25\,\mathrm{m}$ long pushed at its end with $40\,\mathrm{N}$ perpendicular to the handle produces a torque of $10\,\mathrm{N\cdot m}$; with the force at $30^\circ$ to the handle the torque is $5.0\,\mathrm{N\cdot m}$.

For a body rotating about a $z$ axis what matters is the **axial torque** $\tau_z = \hat{k} \cdot \vec{\tau}_O$, with $O$ on the axis; it does not depend on the position of $O$ on the axis, because moving the pole along the axis changes $\vec{r}$ by a vector parallel to $\hat{k}$. For a force in a plane perpendicular to the axis $\tau_z = \pm F b$, with the positive sign when the force tends to rotate the body counterclockwise.

::grafico{assi=0 uguale=1 linee="0.92,1.839 1.08,1.759 1.161,1.92" vettori="0,0,3,1,r;3,1,4.6,0.2,F" segmenti="0,0,1,2;1,2,3,1;3,1,4.5,1.5" punti="0,0,pieno,O;3,1,pieno,P" etichette="0.25,1.15,b;3.62,0.95,φ" xmin=-0.6 xmax=5.2 ymin=-0.6 ymax=2.6 titolo="The lever arm $b$ is the distance of the pole $O$ from the line of action of $\vec{F}$, so $b = r\sin\varphi$ and $\tau_O = F b$"}

:::

:::definizione{#momento-angolare titolo="Angular momentum"}
The **angular momentum** about the pole $O$ of a particle of mass $m$, position $\vec{r}$ and velocity $\vec{v}$ is
$$
\vec{L}_O = \vec{r} \times m\vec{v} = \vec{r} \times \vec{p} ,
$$
and it is measured in $\mathrm{kg\cdot m^2/s}$; the angular momentum of a system of particles is the sum of the angular momenta of the individual particles. For a particle in uniform circular motion of radius $r$, about the center, $\vec{r}$ is perpendicular to $\vec{v}$, so $L_O = m v r = m r^2 \omega$ and $\vec{L}_O$ is directed along the axis of the circle.
:::

::::teorema{#momento-angolare-asse-fisso titolo="Angular momentum of a rotating rigid body"}
Let a rigid body, made of particles of mass $m_i$, rotate with angular velocity $\omega$ about the fixed axis $z$, and let $R_i$ be the distance of the $i$-th particle from the axis. Then the component along the axis of the angular momentum, computed about a pole on the axis, is
$$
L_z = \Big( \sum_i m_i R_i^2 \Big)\,\omega .
$$
The coefficient of $\omega$ depends only on how the mass is distributed around the axis and is the moment of inertia of the body about the axis. Two masses of $0.50\,\mathrm{kg}$ at the ends of a light rod $0.60\,\mathrm{m}$ long, rotating at $4.0\,\mathrm{rad/s}$ about the perpendicular axis through the midpoint, have $L_z = 2 \cdot 0.50 \cdot 0.30^2 \cdot 4.0 = 0.36\,\mathrm{kg\cdot m^2/s}$.

:::dimostrazione
We choose the pole $O$ on the axis and write the position of the $i$-th particle as $\vec{r}_i = \vec{R}_i + z_i\,\hat{k}$, with $\vec{R}_i$ perpendicular to the axis and of magnitude $R_i$. The particle describes a circle of radius $R_i$, so its velocity $\vec{v}_i$ is perpendicular both to $\hat{k}$ and to $\vec{R}_i$ and has magnitude $|\omega| R_i$. Then
$$
\hat{k} \cdot (\vec{r}_i \times m_i\vec{v}_i) = \hat{k} \cdot (\vec{R}_i \times m_i\vec{v}_i) + z_i\,\hat{k} \cdot (\hat{k} \times m_i\vec{v}_i) .
$$
The second term is zero, because $\hat{k} \times m_i\vec{v}_i$ is orthogonal to $\hat{k}$. The vector $\vec{R}_i \times m_i\vec{v}_i$ is parallel to $\hat{k}$, since $\vec{R}_i$ and $\vec{v}_i$ are perpendicular to the axis, and has magnitude $m_i R_i \cdot |\omega| R_i$, since $\vec{R}_i$ and $\vec{v}_i$ are orthogonal; its direction is that of $\hat{k}$ for $\omega > 0$ and the opposite one for $\omega < 0$. Therefore the contribution of the $i$-th particle to $L_z$ is $m_i R_i^2\,\omega$, and summing over all particles we obtain the claim.
:::
::::

::::teorema{#momento-della-forza-peso titolo="Torque of the weight"}
In a uniform gravitational field the resultant torque, about a pole $O$, of the weights of the individual particles of a body of mass $M$ is equal to the torque of the total weight $M\vec{g}$ applied at the center of mass $C$:
$$
\sum_i \vec{r}_i \times m_i\vec{g} = \vec{r}_C \times M\vec{g} .
$$
For this reason the center of mass is also called the **center of gravity**, and in the computation of torques the weight is treated as a single force applied at $C$; in a uniform rod $C$ is the midpoint.

:::dimostrazione
The vector $\vec{g}$ is the same for all particles, so it is factored out on the right: $\sum_i \vec{r}_i \times m_i\vec{g} = \big( \sum_i m_i\vec{r}_i \big) \times \vec{g}$. By definition of the center of mass $\sum_i m_i\vec{r}_i = M\vec{r}_C$, and therefore the torque is $\vec{r}_C \times M\vec{g}$.
:::
::::

## Moment of inertia

:::definizione{#momento-di-inerzia titolo="Moment of inertia"}
The **moment of inertia** of a system of particles about an axis is
$$
I = \sum_i m_i R_i^2 ,
$$
where $R_i$ is the distance from the axis of the particle of mass $m_i$; for a body with continuously distributed mass the sum becomes the integral $I = \displaystyle\int R^2\,dm$ over the whole body. It is measured in $\mathrm{kg\cdot m^2}$. In rotations it plays the role that mass plays in translations, because it appears in the angular momentum $L_z = I\omega$, in the equation of motion $\tau_z = I\alpha$ and in the kinetic energy $\dfrac{1}{2} I\omega^2$. It depends on the axis and grows the farther the mass is from the axis. It is **additive**: the moment of inertia of a composite body is the sum of those of its parts about the same axis.
:::

:::richiamo{titolo="Definite integral"}
For a continuous function $f$ on $[a, b]$, the integral $\displaystyle\int_a^b f(x)\,dx$ is the limit of the sums $\sum_k f(x_k)\,\Delta x_k$ as the width of the intervals $\Delta x_k$ tends to zero, and if $F$ is an antiderivative of $f$, then $\displaystyle\int_a^b f(x)\,dx = F(b) - F(a)$. We refer to the topic on integrals in Mathematical Analysis 1.
:::

::::teorema{#momenti-di-inerzia-notevoli titolo="Moments of inertia of uniform bodies"}
The following moments of inertia of uniform bodies of mass $M$ hold.

- Thin rod of length $L$, perpendicular axis through the center: $I = \dfrac{1}{12} M L^2$; perpendicular axis through one end: $I = \dfrac{1}{3} M L^2$.
- Thin ring or thin-walled hollow cylinder of radius $R$, symmetry axis: $I = M R^2$.
- Disk or solid cylinder of radius $R$, symmetry axis: $I = \dfrac{1}{2} M R^2$.
- Solid sphere of radius $R$, axis through the center: $I = \dfrac{2}{5} M R^2$.

A disk of $2.0\,\mathrm{kg}$ and radius $0.10\,\mathrm{m}$ has $I = \dfrac{1}{2} \cdot 2.0 \cdot 0.10^2 = 0.010\,\mathrm{kg\cdot m^2}$, while a ring with the same mass and the same radius has twice the moment of inertia, because all its mass is at the maximum distance from the axis.

:::dimostrazione
For the rod we take the $x$ axis along the rod, with the origin at the center. The segment of length $dx$ has mass $dm = \dfrac{M}{L}\,dx$ and is at distance $|x|$ from the axis, therefore
$$
I = \int_{-\frac{L}{2}}^{\frac{L}{2}} x^2\,\frac{M}{L}\,dx = \frac{M}{L}\left[ \frac{x^3}{3} \right]_{-\frac{L}{2}}^{\frac{L}{2}} = \frac{M}{L} \cdot \frac{L^3}{12} = \frac{1}{12} M L^2 .
$$
With the origin at one end the integral extends from $0$ to $L$ and equals $\dfrac{M}{L} \cdot \dfrac{L^3}{3} = \dfrac{1}{3} M L^2$. In the ring all points are at distance $R$ from the axis, so $I = \displaystyle\int R^2\,dm = R^2 \int dm = M R^2$. The disk is decomposed into concentric rings of radius $r$ and thickness $dr$, of area $2\pi r\,dr$ and mass $dm = \dfrac{M}{\pi R^2}\,2\pi r\,dr$; by the result for the ring each one contributes $r^2\,dm$, therefore
$$
I = \int_0^R r^2 \cdot \frac{2M}{R^2}\,r\,dr = \frac{2M}{R^2} \cdot \frac{R^4}{4} = \frac{1}{2} M R^2 .
$$
The solid cylinder is a stack of coaxial disks and therefore has the same moment of inertia. The sphere is decomposed into disks perpendicular to the axis: the disk at height $z$ has radius $\sqrt{R^2 - z^2}$ and mass $dm = \rho\,\pi(R^2 - z^2)\,dz$, with $\rho = \dfrac{3M}{4\pi R^3}$, and by the result for the disk it contributes $\dfrac{1}{2}(R^2 - z^2)\,dm$. Therefore
$$
I = \frac{\rho\pi}{2} \int_{-R}^{R} (R^2 - z^2)^2\,dz = \frac{\rho\pi}{2} \cdot \frac{16}{15} R^5 = \frac{2}{5} M R^2 .
$$
:::
::::

::::teorema{#teorema-di-steiner titolo="Parallel-axis theorem (Steiner's theorem)"}
Let $I_C$ be the moment of inertia of a body of mass $M$ about an axis through the center of mass $C$, and let $I$ be the moment of inertia about an axis parallel to the first, at distance $d$ from it. Then
$$
I = I_C + M d^2 .
$$
The theorem reduces the computation about any axis to the one about the parallel axis through the center of mass, and shows that the latter has the minimum moment of inertia among the axes with the same direction. For a rod, with $d = \dfrac{L}{2}$, we recover $I = \dfrac{1}{12} M L^2 + \dfrac{1}{4} M L^2 = \dfrac{1}{3} M L^2$; for a disk, about the perpendicular axis through a point of the rim, $I = \dfrac{1}{2} M R^2 + M R^2 = \dfrac{3}{2} M R^2$.

::grafico{assi=0 uguale=1 poligoni="0,-0.15 6,-0.15 6,0.15 0,0.15" segmenti="0,-1,0,2.2;3,-1,3,2.2;0,1.5,3,1.5" punti="0,0,pieno,O;3,0,pieno,C" etichette="1.4,1.7,d;-0.6,-0.85,axis through O;3.1,-0.85,axis through C" xmin=-1.2 xmax=7 ymin=-1.2 ymax=2.5 titolo="For a rod of length $L$ the axis through the end $O$ is at distance $d = \dfrac{L}{2}$ from the parallel axis through the center of mass $C$"}

:::dimostrazione
We choose the origin at $C$, the $z$ axis along the axis through $C$ and the $x$ axis so that the second axis passes through the point $(d, 0, 0)$. The particle of mass $m_i$ and coordinates $(x_i, y_i, z_i)$ is at distance $\sqrt{x_i^2 + y_i^2}$ from the first axis and $\sqrt{(x_i - d)^2 + y_i^2}$ from the second. Therefore
$$
\begin{aligned}
I &= \sum_i m_i \big[ (x_i - d)^2 + y_i^2 \big] \\[6pt]
&= \sum_i m_i (x_i^2 + y_i^2) - 2d \sum_i m_i x_i + d^2 \sum_i m_i .
\end{aligned}
$$
The first term is $I_C$ and the last is $M d^2$. The middle term is zero, because $\sum_i m_i x_i = M x_C$ and the center of mass is at the origin, that is $x_C = 0$. Therefore $I = I_C + M d^2$.
:::
::::

## Second cardinal equation and rotational motion

:::richiamo{titolo="First cardinal equation"}
The center of mass of a system of particles of total mass $M$ moves like a particle of mass $M$ subject to the resultant of the external forces only: $M\vec{a}_C = \vec{R}^{(e)}$. We refer to the topic on systems of particles, momentum and collisions.
:::

::::teorema{#seconda-equazione-cardinale titolo="Second cardinal equation"}
Consider a system of particles in an inertial frame, with internal forces that the particles exchange in pairs along the line joining them, and let $O$ be a fixed pole. Then
$$
\frac{d\vec{L}_O}{dt} = \vec{\tau}_O^{(e)} ,
$$
where $\vec{L}_O$ is the angular momentum of the system and $\vec{\tau}_O^{(e)}$ is the resultant torque of the external forces only. The same equation holds with the pole at the center of mass, even when the latter is moving; the verification is omitted. For a rigid body the two cardinal equations, together, determine the motion.

:::dimostrazione
Let $\vec{r}_i$ be the position of the $i$-th particle with respect to $O$; since $O$ is fixed, $\dfrac{d\vec{r}_i}{dt} = \vec{v}_i$. Differentiating $\vec{L}_O = \sum_i \vec{r}_i \times m_i\vec{v}_i$ with the product rule we obtain
$$
\frac{d\vec{L}_O}{dt} = \sum_i \vec{v}_i \times m_i\vec{v}_i + \sum_i \vec{r}_i \times m_i\vec{a}_i .
$$
The first term is zero, because each term is the cross product of two parallel vectors. By Newton's second law $m_i\vec{a}_i = \vec{F}_i^{(e)} + \sum_{j \neq i} \vec{F}_{ij}$, where $\vec{F}_{ij}$ is the force exerted by particle $j$ on particle $i$. The internal forces appear in pairs and by Newton's third law $\vec{F}_{ji} = -\vec{F}_{ij}$, therefore
$$
\vec{r}_i \times \vec{F}_{ij} + \vec{r}_j \times \vec{F}_{ji} = (\vec{r}_i - \vec{r}_j) \times \vec{F}_{ij} = \vec{0} ,
$$
since $\vec{F}_{ij}$ is parallel to $\vec{r}_i - \vec{r}_j$. Therefore what remains is $\dfrac{d\vec{L}_O}{dt} = \sum_i \vec{r}_i \times \vec{F}_i^{(e)} = \vec{\tau}_O^{(e)}$.
:::
::::

::::teorema{#equazione-rotazione-asse-fisso titolo="Equation of rotational motion about a fixed axis"}
Let a rigid body be constrained to rotate about a frictionless fixed axis $z$, and let $I$ be its moment of inertia about the axis. Then
$$
\tau_z = I\alpha ,
$$
where $\tau_z$ is the axial torque of the external forces other than the reactions of the axis. It is the rotational analogue of Newton's second law $F = ma$. For a grinding wheel with $I = 0.20\,\mathrm{kg\cdot m^2}$ a torque of $1.0\,\mathrm{N\cdot m}$ produces $\alpha = 5.0\,\mathrm{rad/s^2}$.

:::dimostrazione
We take a pole $O$ on the axis and project the **second cardinal equation** onto the unit vector $\hat{k}$, which is constant; we obtain $\dfrac{dL_z}{dt} = \tau_z^{(e)}$. By the angular momentum of a rotating rigid body $L_z = I\omega$, and $I$ is constant because the distances of the points from the axis do not change, so $\dfrac{dL_z}{dt} = I\,\dfrac{d\omega}{dt} = I\alpha$. A frictionless axis exerts forces applied at points of the axis; for these $\vec{r} = z\,\hat{k}$, and $\hat{k} \cdot (z\,\hat{k} \times \vec{F}) = 0$ because $\hat{k} \times \vec{F}$ is orthogonal to $\hat{k}$. Therefore the reactions of the axis have zero axial torque, and $\tau_z^{(e)}$ reduces to the torque of the other forces.
:::
::::

:::esempio{titolo="Block hanging from a disk"}
A uniform disk of mass $M = 3.0\,\mathrm{kg}$ and radius $R = 0.10\,\mathrm{m}$ rotates without friction about its own horizontal axis. An inextensible string of negligible mass, wound around the rim, supports a block of mass $m = 0.50\,\mathrm{kg}$. The string does not slip on the disk, so the acceleration of the block is equal to the tangential acceleration of the rim, $a = \alpha R$. Newton's second law for the block, the equation of rotational motion for the disk and the condition on the string form the system
$$
\begin{cases}
m g - T = m a \\[4pt]
T R = \dfrac{1}{2} M R^2\,\alpha \\[4pt]
a = \alpha R
\end{cases}
$$
From the last two equations $T = \dfrac{1}{2} M a$, and substituting into the first
$$
a = \frac{m g}{m + \dfrac{1}{2} M} = \frac{0.50 \cdot 9.81}{0.50 + 1.5}\,\mathrm{m/s^2} = 2.45\,\mathrm{m/s^2} ,
\qquad
T = \frac{1}{2} M a = 3.68\,\mathrm{N} .
$$
The tension is smaller than the weight $m g = 4.91\,\mathrm{N}$, so $a < g$.

::grafico{assi=0 uguale=1 poligoni="1,0 0.985,0.174 0.94,0.342 0.866,0.5 0.766,0.643 0.643,0.766 0.5,0.866 0.342,0.94 0.174,0.985 0,1 -0.174,0.985 -0.342,0.94 -0.5,0.866 -0.643,0.766 -0.766,0.643 -0.866,0.5 -0.94,0.342 -0.985,0.174 -1,0 -0.985,-0.174 -0.94,-0.342 -0.866,-0.5 -0.766,-0.643 -0.643,-0.766 -0.5,-0.866 -0.342,-0.94 -0.174,-0.985 0,-1 0.174,-0.985 0.342,-0.94 0.5,-0.866 0.643,-0.766 0.766,-0.643 0.866,-0.5 0.94,-0.342 0.985,-0.174;0.65,-3.1 1.35,-3.1 1.35,-2.3 0.65,-2.3" linee="1,0 1,-2.3;-1.4,1.4 1.4,1.4;0,0 0,1.4" vettori="1,0,1,-0.9,T;1,-2.3,1,-1.4,T;1,-2.7,1,-3.9,mg" punti="0,0,pieno" etichette="-0.35,-0.45,M;1.5,-2.85,m" xmin=-2.8 xmax=3.2 ymin=-4.1 ymax=1.6 titolo="The string exerts the tension $\vec{T}$ downward on the rim of the disk and upward on the block"}

:::

:::osservazione{#pendolo-fisico titolo="Physical pendulum"}
A **physical pendulum** is a rigid body that oscillates in a vertical plane about a frictionless fixed horizontal axis that does not pass through the center of mass. Let $d$ be the distance of the center of mass $C$ from the axis, $I_O$ the moment of inertia about the axis and $\theta$ the angle between $OC$ and the vertical. The weight, applied at $C$, has lever arm $d\sin\theta$ and tends to bring the body back toward $\theta = 0$, so the equation of rotational motion gives
$$
I_O\,\frac{d^2\theta}{dt^2} = -M g d\sin\theta .
$$
For small oscillations $\sin\theta \approx \theta$, and the equation becomes that of harmonic motion with angular frequency $\omega_0 = \sqrt{\dfrac{M g d}{I_O}}$, for which we refer to the topic on oscillations and harmonic motion. For a rod of length $L = 1.0\,\mathrm{m}$ suspended from one end, $d = \dfrac{L}{2}$ and $I_O = \dfrac{1}{3} M L^2$, so the period of small oscillations is $T_0 = 2\pi\sqrt{\dfrac{2L}{3g}} = 1.64\,\mathrm{s}$.

::grafico{assi=0 uguale=1 poligoni="0.104,0.06 2.104,-3.404 1.896,-3.524 -0.104,-0.06" linee="-0.6,0 0.6,0" segmenti="0,0,0,-3.8;0,-1.732,1,-1.732" vettori="1,-1.732,1,-3.332,Mg" punti="0,0,pieno,O;1,-1.732,pieno,C" etichette="0.12,-1.05,θ;0.85,-0.6,d" xmin=-1.6 xmax=3.2 ymin=-4 ymax=0.6 titolo="The weight applied at $C$ has lever arm $d\sin\theta$ about the pivot $O$ and torque $-M g d\sin\theta$"}

:::

## Energy in rotational motion

::::teorema{#energia-cinetica-di-rotazione titolo="Rotational kinetic energy"}
The kinetic energy of a rigid body rotating with angular velocity $\omega$ about a fixed axis, about which it has moment of inertia $I$, is
$$
K = \frac{1}{2} I\omega^2 .
$$
A flywheel with $I = 4.0\,\mathrm{kg\cdot m^2}$ rotating at $100\,\mathrm{rad/s}$ has kinetic energy $K = 2.0 \cdot 10^4\,\mathrm{J}$.

:::dimostrazione
The particle of mass $m_i$ at distance $R_i$ from the axis has speed $v_i = |\omega| R_i$, therefore
$$
K = \sum_i \frac{1}{2} m_i v_i^2 = \frac{1}{2} \Big( \sum_i m_i R_i^2 \Big)\,\omega^2 = \frac{1}{2} I\omega^2 .
$$
:::
::::

::::teorema{#lavoro-e-potenza-rotazione titolo="Work and power in rotations"}
Let a rigid body rotate about a fixed axis and let $\tau_z$ be the axial torque of a force applied to the body. When the body rotates by the angle $d\theta$ the force does the work $dW = \tau_z\,d\theta$, denoted by $W$ to distinguish it from the angular momentum $L$, and its power is
$$
P = \tau_z\,\omega .
$$
In a rotation from $\theta_1$ to $\theta_2$ the work is $W = \displaystyle\int_{\theta_1}^{\theta_2} \tau_z\,d\theta$, which for a constant torque equals $\tau_z\,(\theta_2 - \theta_1)$. If the axis is frictionless, the work of all the applied forces equals the change in rotational kinetic energy,
$$
W = \frac{1}{2} I\omega_2^2 - \frac{1}{2} I\omega_1^2 ,
$$
that is the work-energy theorem, treated in the topic on work and energy. A motor that applies $12\,\mathrm{N\cdot m}$ to a shaft turning at $100\,\mathrm{rad/s}$ delivers a power of $1.2\,\mathrm{kW}$.

:::dimostrazione
The point of application of the force, at distance $R$ from the axis, travels the arc $ds = R\,d\theta$ along the tangent to its circle. The radial and axial components of the force are perpendicular to the displacement and do no work, so $dW = F_t\,R\,d\theta$, where $F_t$ is the tangential component, taken positive in the sense in which $\theta$ increases. The same two components have zero axial torque, therefore $\tau_z = F_t R$ and $dW = \tau_z\,d\theta$; dividing by $dt$ we obtain $P = \tau_z\,\dfrac{d\theta}{dt} = \tau_z\,\omega$. For the last equality we sum over all the forces and use the equation of rotational motion $\tau_z = I\,\dfrac{d\omega}{dt}$:
$$
\tau_z\,d\theta = I\,\frac{d\omega}{dt}\,\omega\,dt = I\omega\,d\omega ,
$$
and integrating from $\omega_1$ to $\omega_2$ we obtain $W = \dfrac{1}{2} I\omega_2^2 - \dfrac{1}{2} I\omega_1^2$.
:::
::::

:::richiamo{titolo="König's theorem"}
The kinetic energy of a system of particles of total mass $M$ is the sum of the kinetic energy of the center of mass and of the kinetic energy $K'$ of the motion relative to the center of mass: $K = \dfrac{1}{2} M v_C^2 + K'$. We refer to the topic on systems of particles, momentum and collisions.
:::

::::teorema{#energia-cinetica-corpo-rigido titolo="Kinetic energy of a rigid body"}
Let a rigid body of mass $M$, whose center of mass $C$ has velocity $v_C$, rotate with angular velocity $\omega$ about an axis through $C$ of fixed direction, about which it has moment of inertia $I_C$. Then
$$
K = \frac{1}{2} M v_C^2 + \frac{1}{2} I_C\,\omega^2 .
$$
The formula also applies when no point of the body remains at rest, as in rolling.

:::dimostrazione
In the frame that translates with the center of mass the axis through $C$ is fixed and the body rotates about it with angular velocity $\omega$. By the rotational kinetic energy, the kinetic energy of the motion relative to the center of mass is therefore $K' = \dfrac{1}{2} I_C\,\omega^2$, and **König's theorem** gives the claim.
:::
::::

::::teorema{#energia-potenziale-corpo-rigido titolo="Gravitational potential energy of a rigid body"}
In a uniform gravitational field, with the $z$ axis vertical and pointing upward, the potential energy of a body of mass $M$ is
$$
U = M g z_C ,
$$
where $z_C$ is the height of the center of mass. A rod of $2.0\,\mathrm{kg}$ that raises its center of mass by $0.50\,\mathrm{m}$ increases its potential energy by $2.0 \cdot 9.81 \cdot 0.50\,\mathrm{J} = 9.81\,\mathrm{J}$.

:::dimostrazione
Summing the potential energies of the individual particles we obtain $U = \sum_i m_i g z_i = g\sum_i m_i z_i = M g z_C$, because by definition of the center of mass $\sum_i m_i z_i = M z_C$.
:::
::::

:::osservazione{#conservazione-energia-corpo-rigido titolo="Conservation of mechanical energy"}
If the forces that do work are conservative and the constraints are ideal, the mechanical energy $K + U$ of a rigid body is conserved. A frictionless fixed axis and the contact in pure rolling are ideal constraints, because their reactions are applied at points at rest and therefore do no work. Conservation of energy then gives the angular velocity as a function of the position, without computing the accelerations.
:::

:::esempio{titolo="Rod falling while rotating about one end"}
A uniform rod of length $L = 1.2\,\mathrm{m}$, hinged without friction at one end, is released from rest in a horizontal position. When it passes through the vertical the center of mass has descended by $\dfrac{L}{2}$, so conservation of energy gives
$$
M g\,\frac{L}{2} = \frac{1}{2} \cdot \frac{1}{3} M L^2\,\omega^2
\quad\Longrightarrow\quad
\omega = \sqrt{\frac{3g}{L}} = 4.95\,\mathrm{rad/s} .
$$
The free end has speed $v = \omega L = \sqrt{3gL} = 5.94\,\mathrm{m/s}$, greater than the speed $\sqrt{2gL} = 4.85\,\mathrm{m/s}$ of a stone falling freely from the same height.
:::

## Conservation of angular momentum

::::teorema{#conservazione-momento-angolare titolo="Conservation of angular momentum"}
If the resultant torque of the external forces about a fixed pole $O$ is zero, the angular momentum $\vec{L}_O$ of the system is constant. If only the component of the torque along a fixed axis $z$ is zero, $L_z$ is conserved; for a system that rotates about the axis and changes its own moment of inertia, by moving masses, we have
$$
I_1\,\omega_1 = I_2\,\omega_2 .
$$
Forces with zero axial torque are, for example, the weight when it is parallel to the axis and the reactions of a frictionless axis. Therefore a system that reduces its own moment of inertia rotates faster.

:::dimostrazione
By the **second cardinal equation** $\dfrac{d\vec{L}_O}{dt} = \vec{\tau}_O^{(e)}$. If $\vec{\tau}_O^{(e)} = \vec{0}$ at every instant, the derivative of $\vec{L}_O$ is zero, and therefore $\vec{L}_O$ is constant. If only $\tau_z^{(e)}$ is zero, projecting onto the constant unit vector $\hat{k}$ we obtain $\dfrac{dL_z}{dt} = 0$, therefore $L_z$ is constant. For a system that at every instant rotates rigidly about the axis, $L_z = I\omega$, as for the angular momentum of a rotating rigid body, and from $L_z$ constant it follows that $I_1\omega_1 = I_2\omega_2$.
:::
::::

:::esempio{titolo="Skater pulling in her arms"}
A skater spins with $\omega_1 = 2.0\,\mathrm{rad/s}$ and moment of inertia $I_1 = 3.0\,\mathrm{kg\cdot m^2}$ about the vertical axis; by pulling in her arms she brings the moment of inertia to $I_2 = 1.2\,\mathrm{kg\cdot m^2}$. The friction of the skates is negligible, and the weight and the reaction of the ice are parallel to the axis, so their axial torque is zero and $L_z$ is conserved:
$$
\omega_2 = \frac{I_1}{I_2}\,\omega_1 = \frac{3.0}{1.2} \cdot 2.0\,\mathrm{rad/s} = 5.0\,\mathrm{rad/s} .
$$
The kinetic energy goes from $\dfrac{1}{2} I_1\omega_1^2 = 6.0\,\mathrm{J}$ to $\dfrac{1}{2} I_2\omega_2^2 = 15\,\mathrm{J}$. The increase of $9.0\,\mathrm{J}$ is the work of the arm muscles, which exert internal forces; their total torque is zero, so they leave $L_z$ unchanged, while their work changes the kinetic energy.
:::

:::osservazione{#urti-con-asse-fisso titolo="Collisions with a body constrained to an axis"}
When a projectile strikes a hinged rigid body, the axis exerts an impulsive reaction, that is a very intense force for a very short time, which changes the momentum of the system; momentum is therefore *not* conserved. The reaction, however, is applied on the axis and has zero axial torque, while the weight has a finite torque and in the short time of the collision produces a negligible change. Therefore the angular momentum about the axis is conserved. For a projectile of mass $m$ and velocity $v_0$ perpendicular to the axis, with line of action at distance $d$ from the axis, that embeds itself in a body at rest with moment of inertia $I_O$,
$$
m v_0 d = \left( I_O + m d^2 \right) \omega .
$$
The collision is inelastic, so kinetic energy is not conserved during the collision; the subsequent motion is studied with conservation of mechanical energy.
:::

## Pure rolling

:::definizione{#rotolamento-puro titolo="Pure rolling"}
A body with circular cross section of radius $R$ (wheel, cylinder, sphere) moving on a fixed surface is in **pure rolling**, or rolls without slipping, if the point of the body in contact with the surface has zero velocity at every instant. The velocity of a point is the sum of the velocity $\vec{v}_C$ of the center and of the velocity $\vec{\omega} \times \vec{r}\,'$ of the rotation about the center; at the contact point the two velocities have opposite directions, so the condition is equivalent to
$$
v_C = \omega R ,
\qquad
a_C = \alpha R ,
$$
where the second equality is obtained by differentiating the first. The highest point has velocity $2 v_C$, and at every instant the body rotates about the contact point $P$, with the speed of each point proportional to its distance from $P$. In one revolution the center advances by $2\pi R$.

::grafico{assi=0 uguale=1 poligoni="4,1 3.985,1.174 3.94,1.342 3.866,1.5 3.766,1.643 3.643,1.766 3.5,1.866 3.342,1.94 3.174,1.985 3,2 2.826,1.985 2.658,1.94 2.5,1.866 2.357,1.766 2.234,1.643 2.134,1.5 2.06,1.342 2.015,1.174 2,1 2.015,0.826 2.06,0.658 2.134,0.5 2.234,0.357 2.357,0.234 2.5,0.134 2.658,0.06 2.826,0.015 3,0 3.174,0.015 3.342,0.06 3.5,0.134 3.643,0.234 3.766,0.357 3.866,0.5 3.94,0.658 3.985,0.826" linee="-0.3,0 6,0" vettori="3,1,4.2,1,v;3,2,5.4,2,2v;2,1,3.2,2.2" segmenti="3,0,3,2;3,0,5.4,2;3,0,2,1" punti="3,0,pieno,P;3,1,pieno,C" xmin=-0.5 xmax=6 ymin=-0.6 ymax=2.8 titolo="In pure rolling the contact point $P$ is at rest, the center has velocity $v_C = \omega R$ and the highest point $2 v_C$"}

:::

::::teorema{#energia-cinetica-rotolamento titolo="Kinetic energy in pure rolling"}
Let a body of mass $M$ and radius $R$, with moment of inertia $I_C$ about the axis through the center, roll without slipping with velocity of the center $v_C$. Then
$$
K = \frac{1}{2}\left( M + \frac{I_C}{R^2} \right) v_C^2 .
$$
For a solid cylinder $K = \dfrac{3}{4} M v_C^2$, for a solid sphere $K = \dfrac{7}{10} M v_C^2$, for a ring $K = M v_C^2$, so for equal mass and velocity the body with the mass farther from the axis has more energy.

:::dimostrazione
By the **kinetic energy of a rigid body** $K = \dfrac{1}{2} M v_C^2 + \dfrac{1}{2} I_C\,\omega^2$, and in pure rolling $\omega = \dfrac{v_C}{R}$; substituting we obtain the claim. The same result follows by considering the motion as a rotation about the contact point $P$, with moment of inertia $I_P = I_C + M R^2$ by the **parallel-axis theorem**:
$$
K = \frac{1}{2} I_P\,\omega^2 = \frac{1}{2}\left( I_C + M R^2 \right) \frac{v_C^2}{R^2} .
$$
:::
::::

::::teorema{#rotolamento-piano-inclinato titolo="Rolling down an inclined plane"}
A body of mass $M$ and radius $R$, with moment of inertia $I_C = k M R^2$ about the axis through the center, rolls without slipping down a plane inclined at an angle $\beta$, denoted by $\beta$ because in this topic $\alpha$ is the angular acceleration. Then the acceleration of the center and the static friction force are
$$
a_C = \frac{g\sin\beta}{1 + k} ,
\qquad
f = \frac{k}{1 + k}\,M g\sin\beta ,
$$
and pure rolling is possible only if the coefficient of static friction satisfies $\mu_s \geq \dfrac{k}{1 + k}\tan\beta$. The coefficient $k$ equals $\dfrac{2}{5}$ for the solid sphere, $\dfrac{1}{2}$ for the solid cylinder and $1$ for the ring, so the accelerations are $\dfrac{5}{7} g\sin\beta$, $\dfrac{2}{3} g\sin\beta$ and $\dfrac{1}{2} g\sin\beta$. They are smaller than the acceleration $g\sin\beta$ of a block sliding without friction and depend neither on the mass nor on the radius, therefore along the same plane the sphere arrives before the cylinder and the cylinder before the ring.

::grafico{assi=0 uguale=1 poligoni="0,0 5.196,0 0,3;3.5,2.711 3.485,2.885 3.44,3.053 3.366,3.211 3.266,3.354 3.143,3.477 3,3.577 2.842,3.651 2.674,3.696 2.5,3.711 2.326,3.696 2.158,3.651 2,3.577 1.857,3.477 1.734,3.354 1.634,3.211 1.56,3.053 1.515,2.885 1.5,2.711 1.515,2.537 1.56,2.369 1.634,2.211 1.734,2.068 1.857,1.945 2,1.845 2.158,1.771 2.326,1.726 2.5,1.711 2.674,1.726 2.842,1.771 3,1.845 3.143,1.945 3.266,2.068 3.366,2.211 3.44,2.369 3.485,2.537" vettori="2.5,2.711,2.5,0.711,Mg;2,1.845,2.425,2.581,N;2,1.845,1.567,2.095,f" punti="2.5,2.711,pieno,C" riferimento="4.2,3.2,-30,1.0,x,y" etichette="4.25,0.12,β" xmin=-0.5 xmax=5.8 ymin=-0.5 ymax=4.3 titolo="The rolling body is acted on by the weight at $C$, the normal reaction $\vec{N}$ and static friction $\vec{f}$ at the contact point"}

:::dimostrazione
We orient the $x$ axis along the plane, downward. The body is acted on by the weight $M\vec{g}$, applied at $C$, and at the contact point by the normal reaction $\vec{N}$ and static friction $\vec{f}$, which is assumed to point up the plane. The first cardinal equation along the plane, the second cardinal equation about the center of mass, with the sense of rotation consistent with the descent, and the rolling condition form the system
$$
\begin{cases}
M g\sin\beta - f = M a_C \\[4pt]
f R = k M R^2\,\alpha \\[4pt]
a_C = \alpha R
\end{cases}
$$
The weight and the normal force do not appear in the second equation, because the weight is applied at $C$ and the line of action of the normal force passes through $C$. From the second and third equations $f = k M a_C$, and substituting into the first $M g\sin\beta = (1 + k) M a_C$, from which $a_C$ and $f$ follow; since $f > 0$, the assumed direction is the correct one. Perpendicular to the plane the acceleration is zero, so $N = M g\cos\beta$. Static friction satisfies $f \leq \mu_s N$, that is $\dfrac{k}{1 + k}\,M g\sin\beta \leq \mu_s M g\cos\beta$, which is equivalent to the condition on $\mu_s$.
:::
::::

:::osservazione{#attrito-nel-rotolamento titolo="Friction and energy in rolling"}
In pure rolling the friction force is static and acts on the contact point, which has zero velocity; its power $\vec{f} \cdot \vec{v}_P$ is therefore zero, and friction does *not* do work. Therefore mechanical energy is conserved, and for a body that starts from rest and descends through a height difference $h$
$$
M g h = \frac{1}{2}\left( M + \frac{I_C}{R^2} \right) v_C^2
\quad\Longrightarrow\quad
v_C = \sqrt{\frac{2 g h}{1 + k}} .
$$
Friction is nevertheless necessary, because its torque about the center makes the angular velocity increase; on a smooth plane a body starting from rest would slide without rotating, with $v_C = \sqrt{2 g h}$.
:::

## Static equilibrium of the rigid body

::::teorema{#condizioni-di-equilibrio titolo="Equilibrium conditions for the rigid body"}
A rigid body initially at rest remains at rest if and only if the resultant of the external forces and their resultant torque about a pole $O$ are zero:
$$
\begin{cases}
\vec{R}^{(e)} = \vec{0} \\[4pt]
\vec{\tau}_O^{(e)} = \vec{0}
\end{cases}
$$
With all forces in an $xy$ plane the system reduces to three scalar equations, $R_x = 0$, $R_y = 0$ and $\tau_z = 0$, which determine at most three unknowns, for example the reactions of the constraints. The second condition excludes that the body starts to rotate; for example, two opposite forces on distinct lines of action have zero resultant, but they form a **couple** with nonzero torque.

:::dimostrazione
If the body remains at rest, the momentum and the angular momentum are zero at every instant, and so are their derivatives; by the two cardinal equations $\vec{R}^{(e)} = M\vec{a}_C = \vec{0}$ and $\vec{\tau}_O^{(e)} = \dfrac{d\vec{L}_O}{dt} = \vec{0}$. Conversely, let the two conditions be satisfied. By the first cardinal equation the center of mass, initially at rest, remains at rest. The torque about the center of mass is $\vec{\tau}_C^{(e)} = \vec{\tau}_O^{(e)} + \overrightarrow{CO} \times \vec{R}^{(e)} = \vec{0}$, so by the second cardinal equation about the center of mass the angular momentum, initially zero, remains zero. For a rigid body the angular momentum about the center of mass is zero only if the body does not rotate, therefore the body remains at rest.
:::
::::

:::osservazione{#scelta-del-polo titolo="Choice of the pole"}
If the resultant of the forces is zero, the resultant torque is the same about every pole. Indeed, passing from the pole $O$ to the pole $O'$,
$$
\vec{\tau}_{O'} = \sum_i \big( \overrightarrow{O'O} + \overrightarrow{OP_i} \big) \times \vec{F}_i = \overrightarrow{O'O} \times \vec{R} + \vec{\tau}_O ,
$$
and the first term is zero when $\vec{R} = \vec{0}$. In statics exercises the pole is therefore chosen where an unknown force is applied, because the torque of that force is zero and the torque equation contains one unknown fewer.
:::

:::definizione{#leva titolo="Lever"}
A **lever** is a rigid body, usually a rod, free to rotate about a fixed point called the fulcrum, on which a load force $\vec{F}_1$ and an effort force $\vec{F}_2$ act with lever arms $b_1$ and $b_2$ about the fulcrum. Neglecting the weight of the lever, the balance of torques about the fulcrum gives the **law of the lever**
$$
F_2\,b_2 = F_1\,b_1 ,
$$
while the reaction of the fulcrum balances the resultant. To lift a boulder that presses with $600\,\mathrm{N}$ on a crowbar, with a load arm of $0.30\,\mathrm{m}$ and an effort arm of $0.90\,\mathrm{m}$, a force of $200\,\mathrm{N}$ is enough.

::grafico{assi=0 uguale=1 poligoni="-1.2,1.5 3.2,1.5 3.2,1.7 -1.2,1.7;-0.45,0 0.45,0 0,1.5" linee="-1,0 1,0" vettori="-1,3.4,-1,1.72,F₁;3,2.28,3,1.72,F₂" segmenti="-1,1.5,-1,1.1;3,1.5,3,1.1;-1,1.1,0,1.1;0,1.1,3,1.1" etichette="-0.65,0.75,b₁;1.4,0.75,b₂" xmin=-1.8 xmax=3.8 ymin=-0.4 ymax=3.6 titolo="Lever with the fulcrum between the two forces: with $b_2 = 3 b_1$ the effort force is one third of the load force"}

:::

:::esempio{titolo="Ladder leaning against a wall"}
A uniform ladder of mass $m$ and length $\ell$ leans against a smooth vertical wall and forms the angle $\theta$ with the floor, which has coefficient of static friction $\mu_s$. The ladder is acted on by the weight, applied at the midpoint, the normal reaction $N$ and the friction $f$ of the floor at the foot $A$, and the reaction $N_p$ of the wall, horizontal because the wall is smooth. With the $x$ axis horizontal, the $y$ axis vertical and torques computed about $A$, the equilibrium conditions are
$$
\begin{cases}
N_p - f = 0 \\[4pt]
N - m g = 0 \\[4pt]
m g\,\dfrac{\ell}{2}\cos\theta - N_p\,\ell\sin\theta = 0
\end{cases}
$$
therefore $N = m g$ and $f = N_p = \dfrac{m g}{2\tan\theta}$. The ladder stays at rest if $f \leq \mu_s N$, that is if $\tan\theta \geq \dfrac{1}{2\mu_s}$, so the smaller the angle $\theta$, the more friction is needed. For $\theta = 60^\circ$ we need $\mu_s \geq 0.29$.

::grafico{assi=0 uguale=1 poligoni="2.5,0 2.673,0.1 0.173,4.43 0,4.33" linee="0,5 0,0 5,0" vettori="1.25,2.165,1.25,0.165,mg;2.5,0,2.5,2,N;2.5,0,1.923,0,f;0,4.33,0.577,4.33,Nₚ" punti="2.5,0,pieno,A;1.25,2.165,pieno" etichette="1.85,0.32,θ" xmin=-0.6 xmax=5.2 ymin=-0.6 ymax=5 titolo="Forces on the ladder leaning against a smooth wall: the weight at the midpoint, $\vec{N}$ and $\vec{f}$ at the foot $A$, $\vec{N}_p$ horizontal at the top"}

:::
