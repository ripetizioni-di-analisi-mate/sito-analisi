---
titolo: Angular momentum and rolling
sommario: How the rolling condition links the motion of the centre of a wheel to its rotation, how the angular momentum of a particle and of a rigid body is defined and changed by a torque, and how its conservation governs rotating platforms, rotational collisions and the precession of a gyroscope.
---

## Rolling without slipping

:::definizione{#rolling-without-slipping titolo="Rolling without slipping"}
A rigid body with a circular section of radius $R$ **rolls without slipping** on a fixed surface when the point of the body that touches the surface has zero velocity at every instant. The body then translates and rotates at the same time, and the two motions are not independent: in one complete turn the whole circumference comes into contact with the surface in turn, hence the centre advances by exactly $2\pi R$. For an arbitrary rotation angle $\theta$ the arc that has unwound equals the path $s$ travelled by the centre, so that
$$
s = R\,\theta .
$$
Differentiating with respect to time once and then twice gives the **rolling condition**
$$
v_{\mathrm{cm}} = \omega R ,
\qquad
a_{\mathrm{cm}} = \alpha R ,
$$
where $\omega$ and $\alpha$ are the angular speed and the angular acceleration of the body about its own axis.

The rolling condition is a constraint, therefore it removes one unknown from every rolling problem: once $v_{\mathrm{cm}}$ is known, $\omega$ follows without any further information. A bicycle wheel of radius $0.35\,\mathrm{m}$ on a bicycle travelling at $5.0\,\mathrm{m/s}$ turns at $\omega = \dfrac{5.0\,\mathrm{m/s}}{0.35\,\mathrm{m}} = 14\,\mathrm{rad/s}$.
:::

::::teorema{#velocity-field-of-a-rolling-body titolo="Velocity of the points of a rolling body"}
Let a body of radius $R$ roll without slipping with centre velocity $\vec{v}_{\mathrm{cm}}$ and angular velocity $\vec{\omega}$. The velocity of the point located by $\vec{r}\,'$ with respect to the centre is
$$
\vec{v}_P = \vec{v}_{\mathrm{cm}} + \vec{\omega} \times \vec{r}\,' .
$$
In particular, for a point of the rim at the angle $\varphi$ measured from the contact point,
$$
v_P = 2\,v_{\mathrm{cm}} \sin\frac{\varphi}{2} ,
$$
so the contact point is at rest, the highest point moves at $2v_{\mathrm{cm}}$ and a point level with the axle moves at $\sqrt{2}\,v_{\mathrm{cm}}$.

:::dimostrazione
The motion of a rigid body is the superposition of the translation of the centre of mass and a rotation about the centre of mass, hence the velocity of any point is the sum written in the statement. Take the $x$ axis in the sense of the motion, the $y$ axis upward and the centre at the origin, so that $\vec{v}_{\mathrm{cm}} = v_{\mathrm{cm}}\hat{\imath}$ and $\vec{\omega} = -\omega\hat{k}$, since the body turns clockwise while advancing towards $+x$. A rim point at the angle $\varphi$ from the contact point has $\vec{r}\,' = R\sin\varphi\,\hat{\imath} - R\cos\varphi\,\hat{\jmath}$, therefore
$$
\vec{\omega} \times \vec{r}\,' = -\omega R\cos\varphi\,\hat{\imath} - \omega R \sin\varphi\,\hat{\jmath} ,
$$
and using $\omega R = v_{\mathrm{cm}}$,
$$
\vec{v}_P = v_{\mathrm{cm}}\left[(1 - \cos\varphi)\,\hat{\imath} - \sin\varphi\,\hat{\jmath}\right] .
$$
Its magnitude is
$$
v_P = v_{\mathrm{cm}}\sqrt{(1-\cos\varphi)^2 + \sin^2\varphi} = v_{\mathrm{cm}}\sqrt{2 - 2\cos\varphi} = 2\,v_{\mathrm{cm}}\sin\frac{\varphi}{2} ,
$$
where the last equality uses $1 - \cos\varphi = 2\sin^2\dfrac{\varphi}{2}$. Substituting $\varphi = 0$, $\varphi = \pi$ and $\varphi = \dfrac{\pi}{2}$ gives the three values stated.
:::

::grafico{assi=0 uguale=1 curve="cos(t),1+sin(t),0,6.29" linee="-2.1,0 2.9,0" punti="0,1,pieno;0,0,pieno" vettori="0,2,1.4,2,2v;0,1,0.7,1,v;1,1,1.7,0.3,√2 v" etichette="0.12,-0.32,v = 0" xmin=-2.3 xmax=3.3 ymin=-0.7 ymax=2.8 titolo="Velocity of four points of a wheel rolling without slipping towards the right, with $v = v_{\mathrm{cm}}$: the contact point is at rest and the highest point moves twice as fast as the axle"}

The result explains why the lower part of a rolling wheel is sharp in a photograph while the upper part is blurred, and it is the reason why the static friction at the contact of a rolling body does no work, as the section on the dynamics of rolling shows.
::::

:::osservazione{#instantaneous-axis-of-rotation titolo="The contact line as instantaneous axis"}
The contact point has zero velocity, therefore at each instant the body moves as if it were rotating about the line of contact with the same angular speed $\omega$. The speed of any point of the body is then $\omega$ times the distance of that point from the contact line, which is often the fastest way to answer a question about speeds. A rim point at height $\dfrac{R}{2}$ above the ground is at distance
$$
d = \sqrt{R^2\sin^2\varphi + R^2(1-\cos\varphi)^2} = R\sqrt{2-2\cos\varphi} = R
\quad\text{for}\quad
\cos\varphi = \frac{1}{2}
$$
from the contact point, hence it moves exactly as fast as the centre.

The instantaneous axis changes from one instant to the next, since a new point of the rim touches the ground at every instant. The path of a single rim point is therefore not a circle but a cycloid, with a cusp at each contact, where the speed of that point vanishes.

::grafico{assi=0 uguale=1 curve="t-sin(t),1-cos(t),0,12.57" linee="-0.4,0 13.4,0" punti="0,0,pieno;6.283,0,pieno;12.566,0,pieno" xmin=-0.6 xmax=13.6 ymin=-0.5 ymax=2.6 titolo="Path of a point of the rim over two complete turns: the cusps are the instants at which that point touches the ground, where its velocity is zero"}
:::

:::richiamo{#moments-of-inertia titolo="Moments of inertia about an axis of symmetry"}
For a homogeneous body of mass $M$ and radius $R$, rotating about its axis of symmetry, the moment of inertia is
$$
I_{\mathrm{cm}} = \beta\,M R^2
\qquad\text{with}\qquad
\beta = \begin{cases}
1 & \text{thin ring or hoop} \\[4pt]
\dfrac{1}{2} & \text{solid cylinder or disk} \\[4pt]
\dfrac{2}{5} & \text{solid sphere} \\[4pt]
\dfrac{2}{3} & \text{thin spherical shell}
\end{cases}
$$
and for an axis parallel to the first one at distance $d$ the parallel-axis theorem gives $I = I_{\mathrm{cm}} + M d^2$. Both results are established in the chapter on fixed-axis rotation.
:::

## Kinetic energy of a rolling body

::::teorema{#kinetic-energy-of-a-rolling-body titolo="Kinetic energy of a rolling body"}
Let a rigid body of mass $M$ and moment of inertia $I_{\mathrm{cm}}$ about its symmetry axis roll without slipping with centre speed $v_{\mathrm{cm}}$. Then its kinetic energy is
$$
K = \frac{1}{2}M v_{\mathrm{cm}}^2 + \frac{1}{2}I_{\mathrm{cm}}\,\omega^2
= \frac{1}{2}\left(M + \frac{I_{\mathrm{cm}}}{R^2}\right)v_{\mathrm{cm}}^2 .
$$

:::dimostrazione
Let $\vec{v}_i$ be the velocity of the particle of mass $m_i$ and $\vec{u}_i$ its velocity with respect to the centre of mass, so that $\vec{v}_i = \vec{v}_{\mathrm{cm}} + \vec{u}_i$. Then
$$
K = \sum_i \frac{1}{2}m_i v_i^2
= \frac{1}{2}\left(\sum_i m_i\right)v_{\mathrm{cm}}^2 + \vec{v}_{\mathrm{cm}} \cdot \sum_i m_i\vec{u}_i + \sum_i \frac{1}{2}m_i u_i^2 .
$$
The sum $\sum_i m_i\vec{u}_i$ is the total momentum measured in the frame of the centre of mass, which vanishes by the definition of the centre of mass, hence the middle term is zero. The last sum is the kinetic energy of the rotation about the centre of mass, and for a rigid body turning with angular speed $\omega$ it equals $\dfrac{1}{2}I_{\mathrm{cm}}\omega^2$. The rolling condition $\omega = \dfrac{v_{\mathrm{cm}}}{R}$ then gives the second form.
:::

The two terms are called the translational and the rotational part of the kinetic energy, and their ratio depends on the shape alone, since $\dfrac{K_{\mathrm{rot}}}{K_{\mathrm{transl}}} = \dfrac{I_{\mathrm{cm}}}{MR^2}$. A rolling hoop carries half of its energy in the rotation, so a hoop of mass $1.0\,\mathrm{kg}$ rolling at $2.0\,\mathrm{m/s}$ has $K = Mv_{\mathrm{cm}}^2 = 4.0\,\mathrm{J}$, twice the kinetic energy of a block of the same mass sliding at the same speed.
::::

:::esempio{#rolling-race titolo="Bodies released from the same height"}
A body rolls without slipping from rest down a slope, descending a height $h$. The normal force is perpendicular to the displacement of the contact point and the static friction acts on a point that is at rest, therefore neither does work, and the mechanical energy is conserved:
$$
M g h = \frac{1}{2}\left(M + \frac{I_{\mathrm{cm}}}{R^2}\right)v_{\mathrm{cm}}^2
\quad\Longrightarrow\quad
v_{\mathrm{cm}} = \sqrt{\frac{2gh}{1 + \beta}} ,
$$
with $\beta = \dfrac{I_{\mathrm{cm}}}{MR^2}$. The speed at the bottom depends on the shape through $\beta$ alone, and neither on the mass nor on the radius. For $h = 1.00\,\mathrm{m}$ the solid sphere arrives at $3.74\,\mathrm{m/s}$, the solid cylinder at $3.62\,\mathrm{m/s}$, the spherical shell at $3.43\,\mathrm{m/s}$ and the hoop at $3.13\,\mathrm{m/s}$. The order follows from $\beta$: the more mass a body carries far from its axis, the larger the fraction of the available energy that goes into the rotation, hence the smaller the speed of its centre.
:::

:::attenzione
The energy of a rolling body is *not* $\dfrac{1}{2}Mv_{\mathrm{cm}}^2$. A solid sphere released from $h = 1.00\,\mathrm{m}$ reaches $3.74\,\mathrm{m/s}$, while a block sliding without friction from the same height reaches $\sqrt{2gh} = 4.43\,\mathrm{m/s}$, because the block stores no energy in a rotation.
:::

## Dynamics of a rolling body

The energy method gives speeds but not forces. The accelerations and the friction at the contact come from the two equations of motion, one for the translation of the centre of mass and one for the rotation about it.

::::teorema{#acceleration-of-a-rolling-body titolo="Acceleration of a body rolling down an incline"}
Let a body of mass $M$, radius $R$ and moment of inertia $I_{\mathrm{cm}} = \beta M R^2$ roll without slipping down a plane inclined at the angle $\theta$ to the horizontal. Then the acceleration of its centre and the static friction at the contact are
$$
a_{\mathrm{cm}} = \frac{g\sin\theta}{1 + \beta} ,
\qquad
f = \frac{\beta}{1+\beta}\,M g\sin\theta .
$$

:::dimostrazione
Take the $x$ axis down the slope. The forces on the body are the weight, whose component along $x$ is $Mg\sin\theta$, the normal force, perpendicular to $x$, and the static friction $f$, directed up the slope. Newton's second law along $x$ and the equation of rotation about the centre of mass give
$$
\begin{cases}
M g \sin\theta - f = M\,a_{\mathrm{cm}} \\[4pt]
f R = I_{\mathrm{cm}}\,\alpha \\[4pt]
a_{\mathrm{cm}} = \alpha R
\end{cases}
$$
since the weight and the normal force have zero torque about the centre, the first being applied at the centre and the second being directed along the line joining the contact point to the centre. Eliminating $\alpha$ from the second and the third equation gives $f = \dfrac{I_{\mathrm{cm}}}{R^2}\,a_{\mathrm{cm}} = \beta M a_{\mathrm{cm}}$, and substituting into the first equation gives
$$
M g\sin\theta = M a_{\mathrm{cm}}(1 + \beta) ,
$$
from which both results follow.
:::

::grafico{assi=0 uguale=1 poligoni="8,0 0,0 0,4.6188" curve="4.5+cos(t),3.1754+sin(t),0,6.29" punti="4,2.3094,pieno;4.5,3.1754,pieno" vettori="4.5,3.1754,4.5,1.1754;4,2.3094,5.3,4.5614;4,2.3094,2.961,2.909" riferimento="1.7,1.1,-30,1.3,x,y" etichette="4.28,1.5,Mg;5.65,4.72,N;2.8,3.05,f;6.75,0.22,θ" xmin=-0.8 xmax=8.8 ymin=-0.9 ymax=5.4 titolo="Forces on a body rolling down the slope: the weight is applied at the centre, while the normal force and the static friction act at the contact point, and only the friction has a torque about the centre"}

The acceleration is smaller than $g\sin\theta$, which is the value for a body sliding without friction, and the reduction is larger for a body with more mass far from the axis. Friction is what makes the body turn, therefore a sphere on a frictionless slope would slide down without rotating at all.
::::

::::teorema{#condition-for-rolling-without-slipping titolo="Condition for rolling without slipping"}
A body of moment of inertia $I_{\mathrm{cm}} = \beta MR^2$ released on a plane inclined at $\theta$, with coefficient of static friction $\mu_s$ between body and plane, rolls without slipping if and only if
$$
\mu_s \ge \frac{\beta}{1+\beta}\tan\theta .
$$

:::dimostrazione
Rolling without slipping requires the static friction found above, $f = \dfrac{\beta}{1+\beta}Mg\sin\theta$. The body does not accelerate in the direction perpendicular to the plane, hence the normal force is $N = Mg\cos\theta$, and static friction can supply at most $\mu_s N$. The condition $f \le \mu_s N$ reads
$$
\frac{\beta}{1+\beta}\,M g \sin\theta \le \mu_s\,M g\cos\theta ,
$$
and dividing by $Mg\cos\theta$ gives the inequality stated.
:::

The required coefficient grows with the slope, therefore every body slips on a slope steep enough. A solid sphere has $\dfrac{\beta}{1+\beta} = \dfrac{2}{7}$, hence on a slope of $30^\circ$ it needs only $\mu_s \ge 0.165$, while a hoop needs $\mu_s \ge 0.289$ on the same slope.
::::

:::attenzione
Static friction at the contact of a body that rolls without slipping does no work, since the point on which it acts has zero velocity. It is *not* a dissipative force here, and the mechanical energy is conserved even though friction is present and is what drives the rotation. A body that slips is a different case: there the contact point moves, kinetic friction acts, and mechanical energy decreases.
:::

## Angular momentum of a particle

:::definizione{#angular-momentum-of-a-particle titolo="Angular momentum of a particle"}
The **angular momentum** of a particle of momentum $\vec{p} = m\vec{v}$, located by the position vector $\vec{r}$ with respect to a chosen origin $O$, is
$$
\vec{\ell} = \vec{r} \times \vec{p} .
$$
Its magnitude is $\ell = r\,p\sin\varphi = p\,r_\perp$, where $\varphi$ is the angle between $\vec{r}$ and $\vec{p}$ and $r_\perp = r\sin\varphi$ is the distance from $O$ to the line along which the particle is moving, called the **lever arm**. The unit is $\mathrm{kg\cdot m^2/s}$, and the direction is perpendicular to the plane of $\vec{r}$ and $\vec{p}$, with the sense given by the right-hand rule.

For a particle moving in the $xy$ plane only the $z$ component survives, and
$$
\ell_z = x\,p_y - y\,p_x = m\,(x\,v_y - y\,v_x) ,
$$
positive when the particle turns counterclockwise as seen from $O$. The angular momentum depends on the origin, therefore the origin must be stated before any value is computed. For a particle in uniform circular motion of radius $r$, with $O$ at the centre, $\vec{r}$ and $\vec{v}$ are perpendicular and $\ell = m v r$ is constant: a stone of mass $0.40\,\mathrm{kg}$ whirling at $3.0\,\mathrm{m/s}$ on a circle of radius $0.50\,\mathrm{m}$ has $\ell = 0.60\,\mathrm{kg\cdot m^2/s}$.

::grafico{uguale=1 vettori="0,0,3,1,r;3,1,5,5,p" segmenti="0,0,2,-1;2,-1,3,1" punti="0,0,pieno,O;3,1,pieno" etichette="0.55,-1.05,r⊥" xmin=-1.2 xmax=5.8 ymin=-2.2 ymax=5.6 titolo="The angular momentum about $O$ has magnitude $\ell = p\,r_\perp$, where $r_\perp$ is the distance from $O$ to the line of $\vec{p}$, drawn dashed"}
:::

:::richiamo{#derivative-of-a-vector-product titolo="Derivative of a vector product"}
If $\vec{A}(t)$ and $\vec{B}(t)$ are differentiable vector functions, then
$$
\frac{d}{dt}\left(\vec{A} \times \vec{B}\right)
= \frac{d\vec{A}}{dt} \times \vec{B} + \vec{A} \times \frac{d\vec{B}}{dt} ,
$$
with the order of the factors preserved in both terms, because the vector product is not commutative. The rule is proved in the differential calculus course by differentiating the components given in the chapter on units, measurement and vectors.
:::

::::teorema{#torque-and-angular-momentum titolo="Torque and the rate of change of angular momentum"}
Let a particle be subject to a resultant force $\vec{F}$, and let $\vec{\ell}$ and $\vec{\tau} = \vec{r} \times \vec{F}$ be its angular momentum and the torque of that force about the same origin $O$, fixed in an inertial frame. Then
$$
\frac{d\vec{\ell}}{dt} = \vec{\tau} .
$$

:::dimostrazione
Differentiate the definition with the rule for the derivative of a vector product:
$$
\frac{d\vec{\ell}}{dt} = \frac{d\vec{r}}{dt} \times \vec{p} + \vec{r} \times \frac{d\vec{p}}{dt} .
$$
In the first term $\dfrac{d\vec{r}}{dt} = \vec{v}$ and $\vec{p} = m\vec{v}$ are parallel, hence their vector product vanishes. In the second term Newton's second law gives $\dfrac{d\vec{p}}{dt} = \vec{F}$, hence that term is $\vec{r} \times \vec{F} = \vec{\tau}$.
:::

This is the rotational counterpart of $\dfrac{d\vec{p}}{dt} = \vec{F}$, and it is the equation from which every conservation statement of this chapter follows. Since a torque vanishes when the force is zero and also when the force is directed along $\vec{r}$, the angular momentum of a particle is constant both for free motion and for any central force, which is how the chapter on gravitation obtains Kepler's second law.
::::

:::esempio{#angular-momentum-in-straight-line-motion titolo="A particle in straight-line motion"}
A particle of mass $m$ travels with constant velocity of magnitude $v$ along a straight line whose distance from the origin $O$ is $b$. The lever arm is the same at every instant, therefore
$$
\ell = m\,v\,b
$$
is constant, in agreement with the fact that the resultant force, and hence the torque, is zero. A car of mass $1100\,\mathrm{kg}$ driving at $20\,\mathrm{m/s}$ along a straight road $35\,\mathrm{m}$ from an observer has angular momentum $7.7 \times 10^{5}\,\mathrm{kg\cdot m^2/s}$ about that observer, constant while the car keeps its velocity.

::grafico{assi=0 uguale=1 linee="-1,2.5 6,2.5" vettori="0,0,2.5,2.5,r;2.5,2.5,4.3,2.5,p" segmenti="0,0,0,2.5" punti="0,0,pieno,O;2.5,2.5,pieno" etichette="-0.42,1.2,b" xmin=-1.3 xmax=6.2 ymin=-0.8 ymax=3.4 titolo="The position vector changes along the motion, yet the lever arm stays equal to $b$, hence $\ell = m\,v\,b$ does not change"}
:::

## Angular momentum of a system and of a rigid body

:::definizione{#angular-momentum-of-a-system titolo="Angular momentum of a system of particles"}
The **angular momentum** of a system of particles about a point $O$ is the sum of the angular momenta of its particles about the same point,
$$
\vec{L}_O = \sum_i \vec{r}_i \times m_i\vec{v}_i .
$$
Nothing in this definition requires the particles to be rigidly connected, hence it applies to a gas, to a solar system and to a rigid body alike. The quantity is useful because its rate of change depends on the external forces alone, which the following result establishes.
:::

::::teorema{#second-cardinal-equation titolo="Angular momentum theorem for a system"}
Let a system of particles be subject to external forces, and let the internal forces between any two particles be equal and opposite and directed along the line joining them. Let $O$ be a point fixed in an inertial frame. Then
$$
\frac{d\vec{L}_O}{dt} = \vec{\tau}_O^{\,\mathrm{ext}} ,
$$
where $\vec{\tau}_O^{\,\mathrm{ext}}$ is the total torque of the external forces about $O$. The same equation holds when $O$ is the centre of mass, even when the centre of mass accelerates.

:::dimostrazione
Differentiating the definition and discarding the terms $\vec{v}_i \times m_i\vec{v}_i$, which vanish because the two factors are parallel, gives
$$
\frac{d\vec{L}_O}{dt} = \sum_i \vec{r}_i \times m_i\vec{a}_i
= \sum_i \vec{r}_i \times \vec{F}_i^{\,\mathrm{ext}} + \sum_i \sum_{j \ne i} \vec{r}_i \times \vec{F}_{ij} ,
$$
where $\vec{F}_{ij}$ is the force exerted on the particle $i$ by the particle $j$. The internal forces occur in pairs, and Newton's third law gives $\vec{F}_{ji} = -\vec{F}_{ij}$, hence each pair contributes
$$
\vec{r}_i \times \vec{F}_{ij} + \vec{r}_j \times \vec{F}_{ji} = (\vec{r}_i - \vec{r}_j) \times \vec{F}_{ij} = \vec{0} ,
$$
since $\vec{F}_{ij}$ is parallel to $\vec{r}_i - \vec{r}_j$ by hypothesis. Only the torque of the external forces survives.

If $O$ is the centre of mass, the same computation carried out in the frame of the centre of mass adds to each particle the inertial force $-m_i\vec{a}_{\mathrm{cm}}$, whose total torque about the centre of mass is
$$
-\left(\sum_i m_i\vec{r}_i\,'\right) \times \vec{a}_{\mathrm{cm}} = \vec{0}
$$
by the definition of the centre of mass, therefore the equation is unchanged even when that frame is not inertial.
:::

The theorem is what makes rotational problems solvable without any knowledge of the internal forces: the tension in the spokes of a wheel and the forces between the molecules of a spinning top never enter the calculation.
::::

::::teorema{#angular-momentum-of-a-rigid-body titolo="Angular momentum of a rigid body about a fixed axis"}
Let a rigid body rotate with angular speed $\omega$ about a fixed axis $z$, and let $I$ be its moment of inertia about that axis. Then the component of the angular momentum along the axis is
$$
L_z = I\,\omega .
$$

:::dimostrazione
Each particle of the body moves on a circle of radius $r_i$ centred on the axis, with speed $v_i = \omega r_i$ and velocity tangent to that circle. Its position vector with respect to a point of the axis decomposes into a part along the axis and a part of length $r_i$ perpendicular to it. The first part contributes to $\vec{r}_i \times m_i\vec{v}_i$ a vector perpendicular to the axis, which has no $z$ component; the second part is perpendicular to $\vec{v}_i$, hence it contributes $m_i r_i v_i = m_i r_i^2 \omega$ along the axis. Summing over the particles,
$$
L_z = \sum_i m_i r_i^2\,\omega = I\,\omega ,
$$
because $\omega$ is the same for every particle of a rigid body.
:::

::grafico{assi=0 uguale=1 curve="2.5*cos(t),2.5*sin(t),0,6.29;1.6*cos(t),1.6*sin(t),0,6.29" punti="0,0,pieno;1.131,1.131,pieno" vettori="0,0,1.131,1.131;1.131,1.131,0.071,2.191,vᵢ" etichette="0.82,0.36,rᵢ" xmin=-3 xmax=3.4 ymin=-3 ymax=3.2 titolo="A disk seen from above, turning counterclockwise about the axis through its centre: the particle at distance $r_i$ moves at $v_i = \omega r_i$ and contributes $m_i r_i^2 \omega$ to $L_z$"}

Combining this result with the angular momentum theorem gives $I\dfrac{d\omega}{dt} = \tau_z^{\,\mathrm{ext}}$, which is the equation of rotation about a fixed axis used in the chapter on fixed-axis rotation. Written as $L_z = I\omega$, the same result shows that a body can change its angular speed without any external torque, provided it changes its moment of inertia.
::::

:::esempio{#angular-momentum-of-a-rolling-body titolo="Angular momentum of a rolling body"}
A body rolling without slipping turns, at each instant, about the contact line, therefore its angular momentum about that line is
$$
L = \left(I_{\mathrm{cm}} + M R^2\right)\omega = (1 + \beta)\,M\,v_{\mathrm{cm}}\,R ,
$$
where the parallel-axis theorem supplies the moment of inertia about the contact line and the rolling condition replaces $\omega$. The same value is obtained by adding the angular momentum $I_{\mathrm{cm}}\omega$ of the rotation about the centre and the angular momentum $M v_{\mathrm{cm}} R$ of the centre of mass about the contact line. A solid cylinder of mass $2.0\,\mathrm{kg}$ and radius $0.10\,\mathrm{m}$ rolling at $3.0\,\mathrm{m/s}$ has $\omega = 30\,\mathrm{rad/s}$ and
$$
L = \frac{3}{2}\,M R^2\,\omega = \frac{3}{2} \cdot 2.0\,\mathrm{kg} \cdot (0.10\,\mathrm{m})^2 \cdot 30\,\mathrm{rad/s} = 0.90\,\mathrm{kg\cdot m^2/s} .
$$
:::

## Conservation of angular momentum

::::teorema{#conservation-of-angular-momentum titolo="Conservation of angular momentum"}
Let a system be such that the total torque of the external forces about a point $O$, fixed in an inertial frame or coinciding with the centre of mass, is zero. Then
$$
\vec{L}_O = \text{constant} .
$$
If in addition the system rotates about a fixed axis through $O$ and changes its moment of inertia from $I_1$ to $I_2$, then
$$
I_1\,\omega_1 = I_2\,\omega_2 .
$$

:::dimostrazione
The angular momentum theorem gives $\dfrac{d\vec{L}_O}{dt} = \vec{\tau}_O^{\,\mathrm{ext}} = \vec{0}$, hence $\vec{L}_O$ does not change. Projecting on the fixed axis and using $L_z = I\omega$ at the initial and at the final instant gives $I_1\omega_1 = L_z = I_2\omega_2$.
:::

The hypothesis is weaker than the vanishing of the external forces, since a force whose line passes through $O$ has zero torque about $O$. The weight of a body supported at its centre of mass, the reaction of a frictionless pivot and the force of a central field all satisfy this condition, and each of the following examples rests on one of them.
::::

:::esempio{#rotating-platform titolo="A body that changes its moment of inertia"}
A skater turning on a frictionless vertical axis pulls her arms towards her body. The weight and the reaction of the ice are vertical, hence their torque about the axis vanishes, and the angular momentum along the axis is conserved. Reducing the moment of inertia from $I_1 = 3.0\,\mathrm{kg\cdot m^2}$ to $I_2 = 1.0\,\mathrm{kg\cdot m^2}$ while turning at $\omega_1 = 2.0\,\mathrm{rad/s}$ gives
$$
\omega_2 = \frac{I_1}{I_2}\,\omega_1 = 6.0\,\mathrm{rad/s} .
$$
The kinetic energy changes from $\dfrac{1}{2}I_1\omega_1^2 = 6.0\,\mathrm{J}$ to $\dfrac{1}{2}I_2\omega_2^2 = 18\,\mathrm{J}$. The increase of $12\,\mathrm{J}$ is the work done by the skater's muscles in pulling the arms inward against the centrifugal effect, and in general
$$
K = \frac{L^2}{2I} ,
$$
so the kinetic energy grows whenever $I$ decreases at constant $L$.
:::

:::esempio{#rotational-collisions titolo="Rotational collisions"}
When two bodies interact for a short time about a common axis, the angular momentum about that axis is conserved, because the forces they exert on each other are internal. A disk of moment of inertia $I_2 = 0.30\,\mathrm{kg\cdot m^2}$, at rest, is dropped onto a disk of $I_1 = 0.50\,\mathrm{kg\cdot m^2}$ turning at $\omega_0 = 12\,\mathrm{rad/s}$ about the same vertical axis; friction between the faces brings them to a common angular speed
$$
\omega = \frac{I_1}{I_1 + I_2}\,\omega_0 = 7.5\,\mathrm{rad/s} .
$$
The kinetic energy falls from $36\,\mathrm{J}$ to $22.5\,\mathrm{J}$, and the fraction retained is $\dfrac{I_1}{I_1+I_2} = 0.625$, exactly as in a perfectly inelastic collision along a line with $I$ in place of the mass.
:::

:::attenzione
In a collision against a body held by a pivot the linear momentum of the system is *not* conserved, since the pivot exerts an external force of unknown magnitude. That force is applied at the pivot, hence its lever arm about the pivot is zero and its torque vanishes, so the angular momentum about the pivot is conserved. A ball of putty striking the end of a hinged rod is treated with the angular momentum about the hinge and never with the linear momentum.
:::

## Precession of a gyroscope

::::teorema{#gyroscopic-precession titolo="Precession of a gyroscope"}
Let a wheel of moment of inertia $I$ spin with angular speed $\omega$ about its own axle, which is horizontal and supported at one point, with the centre of mass at distance $d$ from the support, and let $M$ be the mass of the wheel. If $\omega$ is large enough that the angular momentum of the precession can be neglected, then the axle turns in the horizontal plane with the **precession angular speed**
$$
\Omega = \frac{M g d}{I\,\omega} ,
$$
in the sense of the torque of the weight.

:::dimostrazione
Take the support as origin. The weight $-Mg\hat{\jmath}$ is applied at the centre of mass, located by $d\,\hat{u}$ with $\hat{u}$ the horizontal unit vector along the axle, hence the torque is
$$
\vec{\tau} = d\,\hat{u} \times (-M g\,\hat{\jmath}) ,
\qquad
\tau = M g d ,
$$
and $\vec{\tau}$ is horizontal and perpendicular to the axle. The angular momentum of the spinning wheel is $\vec{L} = I\omega\,\hat{u}$, directed along the axle, and the angular momentum theorem gives $d\vec{L} = \vec{\tau}\,dt$. Since $\vec{\tau}$ is perpendicular to $\vec{L}$, the increment $d\vec{L}$ changes the direction of $\vec{L}$ and not its magnitude, therefore the axle turns in the horizontal plane by
$$
d\varphi = \frac{|d\vec{L}|}{L} = \frac{\tau\,dt}{I\omega} ,
$$
and dividing by $dt$ gives $\Omega = \dfrac{d\varphi}{dt} = \dfrac{M g d}{I \omega}$.
:::

::grafico{assi=0 uguale=1 punti="0,0,pieno" vettori="0,0,3,0,L;3,0,3,1,τ Δt;0,0,3,1,L′" curve="3.7*cos(t),3.7*sin(t),0,0.322" etichette="4.0,0.62,Δφ" xmin=-0.6 xmax=4.9 ymin=-0.8 ymax=1.9 titolo="Seen from above: the torque of the weight is perpendicular to $\vec{L}$, hence in the time $\Delta t$ it rotates the angular momentum by $\Delta\varphi = \dfrac{\tau\,\Delta t}{L}$ without changing its magnitude"}

The relation accounts for the behaviour of a spinning top, whose axis sweeps a cone instead of falling, and of a bicycle wheel held by one end of its axle. A wheel with $I = 0.15\,\mathrm{kg\cdot m^2}$ spinning at $20\,\mathrm{rad/s}$, of mass $1.8\,\mathrm{kg}$ with its centre $0.12\,\mathrm{m}$ from the support, precesses at $\Omega = 0.71\,\mathrm{rad/s}$, that is, once every $8.9\,\mathrm{s}$. The precession is slower the faster the wheel spins, which is why a top falls over as friction reduces $\omega$.
::::
