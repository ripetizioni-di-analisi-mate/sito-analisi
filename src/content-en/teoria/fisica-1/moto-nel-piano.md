---
titolo: "Motion in a plane: projectile and circular motion"
sommario: How position, velocity and acceleration become vectors in the plane, how projectile motion and uniform and nonuniform circular motion are described, and how velocities and trajectories change when passing from one reference frame to another in translational motion.
---

## Position, velocity and acceleration vectors

:::definizione{#vettore-posizione titolo="Position vector and trajectory"}
A Cartesian frame $Oxy$ with unit vectors $\hat{\imath}$ and $\hat{\jmath}$ is fixed in the plane of motion. The position of a point particle $P$ at time $t$ is given by the **position vector**
$$
\vec{r}(t) = \overrightarrow{OP} = x(t)\,\hat{\imath} + y(t)\,\hat{\jmath} .
$$
The function $t \mapsto \vec{r}(t)$ is the **equation of motion**, and the scalar functions $x(t)$ and $y(t)$ are the equations of motion of the projections of $P$ onto the two axes. The set of points occupied by $P$ as $t$ varies is the **trajectory**. Eliminating $t$ between $x(t)$ and $y(t)$ gives the Cartesian equation of the trajectory; for example, with $x$ and $y$ in meters and $t$ in seconds, from $x = 2t$ and $y = t^2$ one obtains $t = \dfrac{x}{2}$, therefore the trajectory is the parabola $y = \dfrac{x^2}{4}$.
:::

:::definizione{#velocita-media titolo="Displacement and average velocity"}
The **displacement** between times $t$ and $t + \Delta t$ is the vector $\Delta\vec{r} = \vec{r}(t + \Delta t) - \vec{r}(t)$, which goes from the initial position to the final position. The **average velocity** over the interval is
$$
\vec{v}_m = \frac{\Delta\vec{r}}{\Delta t} ,
$$
a vector with the direction and sense of the displacement, measured in $\mathrm{m/s}$. The displacement depends only on the initial and final positions, so its magnitude is in general smaller than the length of the stretch of trajectory traveled. After one complete revolution on a circle the displacement is zero, and therefore the average velocity is also zero.
:::

:::definizione{#velocita-istantanea titolo="Instantaneous velocity"}
The **velocity** at time $t$ is the limit of the average velocity as $\Delta t \to 0$, that is, the derivative of the position vector:
$$
\vec{v}(t) = \lim_{\Delta t \to 0} \frac{\Delta\vec{r}}{\Delta t} = \frac{d\vec{r}}{dt} = \frac{dx}{dt}\,\hat{\imath} + \frac{dy}{dt}\,\hat{\jmath} .
$$
As $\Delta t$ tends to zero the chord $\Delta\vec{r}$ tends to the direction of the tangent line, therefore the velocity is **tangent to the trajectory** at the occupied point and points in the direction of motion. The magnitude $v = |\vec{v}| = \sqrt{v_x^2 + v_y^2}$ is the speed, that is, the time derivative of the length of the arc traveled. For $\vec{r}(t) = 2t\,\hat{\imath} + t^2\,\hat{\jmath}$ one has $\vec{v}(t) = 2\,\hat{\imath} + 2t\,\hat{\jmath}$, and at time $t = 1\,\mathrm{s}$ the velocity has magnitude $\sqrt{8}\,\mathrm{m/s} \approx 2.83\,\mathrm{m/s}$.

::grafico{f="x^2/4" vettori="0,0,2,1,r(t);0,0,4,4,r(t+Δt);2,1,4,4,Δr;2,1,3.2,2.2,v" punti="2,1,pieno;4,4,pieno" xmin=-0.6 xmax=5 ymin=-0.6 ymax=5 uguale=1 titolo="On the trajectory $y = \dfrac{x^2}{4}$ the displacement $\Delta\vec{r}$ is the chord between the positions at times $t = 1\,\mathrm{s}$ and $t = 2\,\mathrm{s}$; the velocity $\vec{v}$ at $(2, 1)$ is tangent to the trajectory"}

:::

:::richiamo{titolo="Derivative of a vector"}
If $\vec{r}(t) = x(t)\,\hat{\imath} + y(t)\,\hat{\jmath}$, with fixed unit vectors $\hat{\imath}$ and $\hat{\jmath}$ and differentiable components, then $\dfrac{d\vec{r}}{dt} = \dfrac{dx}{dt}\,\hat{\imath} + \dfrac{dy}{dt}\,\hat{\jmath}$, that is, one differentiates component by component. For the differentiation rules see the topic on derivatives in Mathematical Analysis 1, and for the derivative of a vector see the topic on physical quantities and vectors.
:::

:::definizione{#accelerazione titolo="Acceleration"}
The **average acceleration** over the interval $[t, t + \Delta t]$ is $\vec{a}_m = \dfrac{\Delta\vec{v}}{\Delta t}$, and the **acceleration** at time $t$ is the derivative of the velocity:
$$
\vec{a}(t) = \frac{d\vec{v}}{dt} = \frac{d^2\vec{r}}{dt^2} = \frac{dv_x}{dt}\,\hat{\imath} + \frac{dv_y}{dt}\,\hat{\jmath} ,
$$
measured in $\mathrm{m/s^2}$. The acceleration records every change of the velocity vector, both in magnitude and in direction; therefore a point that travels along a curve with constant speed has nonzero acceleration. For $\vec{r}(t) = 2t\,\hat{\imath} + t^2\,\hat{\jmath}$ one obtains $\vec{a} = 2\,\hat{\jmath}\ \mathrm{m/s^2}$, constant, while the velocity changes both in magnitude and in direction.
:::

:::osservazione{#indipendenza-dei-moti titolo="Motions of the projections"}
Since derivatives are computed component by component, the relations $v_x = \dfrac{dx}{dt}$ and $a_x = \dfrac{dv_x}{dt}$ involve only quantities along the $x$ axis, and the same holds along the $y$ axis. Therefore motion in a plane is equivalent to two simultaneous straight-line motions, that of the projection on $x$ and that of the projection on $y$, which have only time in common. On each axis the laws of one-dimensional kinematics hold, for which see the topic on kinematics in one dimension. Time is the variable that links the two motions, so it is generally obtained from an equation on one axis and substituted into the equation of the other.
:::

## Motion with constant acceleration

::::teorema{#moto-accelerazione-costante titolo="Equations of motion with constant acceleration"}
Let $\vec{a}$ be constant and let $\vec{r}_0$ and $\vec{v}_0$ be the position and velocity at time $t = 0$. Then for every $t$
$$
\vec{v}(t) = \vec{v}_0 + \vec{a}\,t, \qquad \vec{r}(t) = \vec{r}_0 + \vec{v}_0\,t + \frac{1}{2}\,\vec{a}\,t^2 .
$$
In components there are two uniformly accelerated motions, $x(t) = x_0 + v_{0x}\,t + \dfrac{1}{2}\,a_x t^2$ and $y(t) = y_0 + v_{0y}\,t + \dfrac{1}{2}\,a_y t^2$, and on each axis the time-independent relation $v_x^2 = v_{0x}^2 + 2a_x\,(x - x_0)$ holds, and similarly for $y$. The formulas describe every motion with constant acceleration; the most important case is the motion of bodies near the Earth's surface, with $\vec{a} = -g\,\hat{\jmath}$.

:::dimostrazione
By definition of acceleration $\dfrac{dv_x}{dt} = a_x$, with $a_x$ constant. By the **fundamental theorem of calculus**
$$
v_x(t) - v_{0x} = \int_0^t a_x\,dt' = a_x\,t ,
$$
therefore $v_x(t) = v_{0x} + a_x t$. Since $\dfrac{dx}{dt} = v_x$, integrating again one obtains
$$
x(t) - x_0 = \int_0^t \left( v_{0x} + a_x t' \right) dt' = v_{0x}\,t + \frac{1}{2}\,a_x t^2 .
$$
The same computation holds for the $y$ component, and recombining the components with the unit vectors gives the vector formulas. For the time-independent relation, if $a_x \neq 0$ one obtains $t = \dfrac{v_x - v_{0x}}{a_x}$ from the velocity law and substitutes it into the position law; carrying out the computation one obtains $x - x_0 = \dfrac{v_x^2 - v_{0x}^2}{2a_x}$, which is the claim. If $a_x = 0$ the relation reduces to $v_x = v_{0x}$, which is true.
:::
::::

:::richiamo{titolo="Fundamental theorem of calculus"}
If $f$ is continuous on $[a, b]$ and $F$ is an antiderivative of it, that is, $F' = f$, then $\displaystyle\int_a^b f(t)\,dt = F(b) - F(a)$. See the topic on integrals in Mathematical Analysis 1.
:::

:::osservazione{#forma-della-traiettoria titolo="Shape of the trajectory"}
With constant nonzero acceleration the trajectory is a line segment or an arc of a parabola. If $\vec{v}_0$ is zero or parallel to $\vec{a}$, the motion takes place along the line through the initial point with the direction of $\vec{a}$, and it is a uniformly accelerated straight-line motion. If $\vec{v}_0$ and $\vec{a}$ are not parallel, the $y$ axis is chosen parallel to $\vec{a}$; then $a_x = 0$ and $v_{0x} \neq 0$, therefore $x$ is a first-degree function of $t$ and $y$ a second-degree function. Solving for $t$ from $x$ and substituting, $y$ turns out to be a second-degree polynomial in $x$, so the trajectory is a **parabola** with axis parallel to $\vec{a}$. Projectile motion is the main example of this case.
:::

## Projectile motion

:::definizione{#moto-del-proiettile titolo="Projectile motion"}
**Projectile motion** is the motion of a body launched near the Earth's surface under the following assumptions: the body can be treated as a point particle, air resistance is negligible, and the gravitational acceleration $\vec{g}$ is constant, directed downward and of magnitude $g = 9.81\,\mathrm{m/s^2}$. The last assumption is acceptable when the distances traveled are small compared with the Earth's radius. The $x$ axis is chosen horizontal in the direction of the launch, the $y$ axis vertical and pointing upward, and the origin at the launch point. The initial velocity $\vec{v}_0$ has magnitude $v_0$ and forms the angle $\theta$ with the horizontal, so
$$
v_{0x} = v_0\cos\theta, \qquad v_{0y} = v_0\sin\theta ,
$$
and the acceleration is $\vec{a} = -g\,\hat{\jmath}$ at every instant of the flight, on the way up as on the way down.
:::

:::teorema{#leggi-orarie-del-proiettile titolo="Equations of motion of the projectile"}
Under the assumptions of projectile motion, with the launch from the origin at time $t = 0$, the following hold:
$$
x(t) = v_0\cos\theta\; t, \qquad y(t) = v_0\sin\theta\; t - \frac{1}{2}\,g\,t^2 ,
$$
$$
v_x(t) = v_0\cos\theta, \qquad v_y(t) = v_0\sin\theta - g\,t .
$$
The formulas follow from the **equations of motion with constant acceleration** with $a_x = 0$ and $a_y = -g$. The horizontal projection moves with uniform straight-line motion, the vertical projection with uniformly accelerated motion, like a body thrown vertically with velocity $v_0\sin\theta$. Therefore the horizontal component of the velocity remains constant throughout the flight, while the vertical component decreases by $9.81\,\mathrm{m/s}$ every second.

::grafico{curve="6*t,8*t-4.905*t^2,0,1.631" vettori="0,0,1.5,2,v₀;4.893,3.262,6.393,3.262,v;9.786,0,11.286,-2,v" segmenti="4.893,0,4.893,3.262" punti="4.893,3.262,pieno;9.786,0,pieno" etichette="4.3,1.5,H" xmin=-0.8 xmax=12 ymin=-2.6 ymax=4.4 uguale=1 titolo="Projectile with $v_{0x} = 6\,\mathrm{m/s}$ and $v_{0y} = 8\,\mathrm{m/s}$, velocities drawn to scale: the horizontal component stays constant, the vertical component vanishes at the highest point and then becomes negative"}

:::

::::teorema{#traiettoria-parabolica titolo="Parabolic trajectory"}
Under the assumptions of projectile motion, with $-\dfrac{\pi}{2} < \theta < \dfrac{\pi}{2}$, the trajectory is the parabola
$$
y = \tan\theta\; x - \frac{g}{2\,v_0^2\cos^2\theta}\; x^2 ,
$$
with vertical axis and concave downward. The equation gives the height of the projectile as a function of the horizontal distance from the launch point, without going through time; therefore it is used to determine whether the projectile clears an obstacle or reaches a target with given coordinates. For $\theta = \dfrac{\pi}{2}$ the launch is vertical and the trajectory is a segment of the $y$ axis.

:::dimostrazione
Since $-\dfrac{\pi}{2} < \theta < \dfrac{\pi}{2}$, one has $\cos\theta > 0$, and from the equation of motion for $x$ one obtains $t = \dfrac{x}{v_0\cos\theta}$. Substituting into the equation of motion for $y$ one obtains
$$
\begin{aligned}
y &= v_0\sin\theta\,\frac{x}{v_0\cos\theta} - \frac{1}{2}\,g\,\frac{x^2}{v_0^2\cos^2\theta} \\[6pt]
&= \tan\theta\; x - \frac{g}{2\,v_0^2\cos^2\theta}\; x^2 ,
\end{aligned}
$$
which is a second-degree polynomial in $x$ with negative coefficient of $x^2$.
:::
::::

## Maximum height, time of flight and range

::::teorema{#altezza-massima titolo="Maximum height"}
Under the assumptions of projectile motion, with $0 < \theta \le \dfrac{\pi}{2}$, the projectile reaches the highest point of the trajectory at time $t_H = \dfrac{v_0\sin\theta}{g}$, and the **maximum height** above the launch point is
$$
H = \frac{v_0^2\sin^2\theta}{2g} .
$$
The maximum height depends only on the vertical component of the initial velocity, $H = \dfrac{v_{0y}^2}{2g}$, and it is the same one would obtain by throwing the body vertically with velocity $v_{0y}$. For $v_{0x} = 6\,\mathrm{m/s}$ and $v_{0y} = 8\,\mathrm{m/s}$ one obtains $t_H = 0.815\,\mathrm{s}$ and $H = 3.26\,\mathrm{m}$.

:::dimostrazione
At the highest point the height $y(t)$ has a maximum, therefore its derivative $v_y(t) = v_0\sin\theta - g\,t$ vanishes. This happens for $t_H = \dfrac{v_0\sin\theta}{g}$, which is positive because $\sin\theta > 0$; before $t_H$ one has $v_y > 0$ and the projectile rises, after it one has $v_y < 0$ and it descends. Substituting $t_H$ into the equation of motion for $y$ one obtains
$$
\begin{aligned}
H = y(t_H) &= v_0\sin\theta\,\frac{v_0\sin\theta}{g} - \frac{1}{2}\,g\,\frac{v_0^2\sin^2\theta}{g^2} \\[6pt]
&= \frac{v_0^2\sin^2\theta}{g} - \frac{v_0^2\sin^2\theta}{2g} = \frac{v_0^2\sin^2\theta}{2g} .
\end{aligned}
$$
:::
::::

::::teorema{#tempo-di-volo-e-gittata titolo="Time of flight and range"}
Under the assumptions of projectile motion, with $0 < \theta < \dfrac{\pi}{2}$ and the landing point at the same height as the launch point, the **time of flight** and the **range**, that is, the horizontal distance between the launch point and the landing point, are
$$
T = \frac{2\,v_0\sin\theta}{g}, \qquad R = \frac{v_0^2\sin 2\theta}{g} .
$$
The time of flight is twice $t_H$, therefore the ascent and the descent last the same time and the trajectory is symmetric about the vertical line through the highest point. With $v_{0x} = 6\,\mathrm{m/s}$ and $v_{0y} = 8\,\mathrm{m/s}$ one has $T = 1.63\,\mathrm{s}$ and $R = v_{0x}\,T = 9.79\,\mathrm{m}$. The formulas hold *only* if the landing height coincides with the launch height; in the other cases the landing time is obtained from the equation $y(t) = y_f$, with $y_f$ the landing height.

:::dimostrazione
The projectile returns to the launch height when $y(t) = 0$, that is, when
$$
v_0\sin\theta\; t - \frac{1}{2}\,g\,t^2 = t \left( v_0\sin\theta - \frac{1}{2}\,g\,t \right) = 0 .
$$
The solution $t = 0$ is the launch time, therefore the landing time is $T = \dfrac{2\,v_0\sin\theta}{g}$. At that instant the horizontal coordinate is
$$
R = x(T) = v_0\cos\theta\,\frac{2\,v_0\sin\theta}{g} = \frac{v_0^2 \cdot 2\sin\theta\cos\theta}{g} = \frac{v_0^2\sin 2\theta}{g} ,
$$
by the **double-angle formula** $\sin 2\theta = 2\sin\theta\cos\theta$.
:::
::::

:::osservazione{#gittata-massima titolo="Maximum range and complementary angles"}
For a given $v_0$, the range depends on $\theta$ through $\sin 2\theta$, whose maximum value is $1$ for $2\theta = 90^\circ$. Therefore the **maximum range** is obtained with $\theta = 45^\circ$ and equals $R_{\max} = \dfrac{v_0^2}{g}$. Moreover $\sin(180^\circ - 2\theta) = \sin 2\theta$, so the complementary angles $\theta$ and $90^\circ - \theta$ give the same range. The launch with the larger angle rises higher and stays in flight longer, with a smaller horizontal component of the velocity. With $v_0 = 20\,\mathrm{m/s}$ the launches at $30^\circ$ and at $60^\circ$ have range $35.3\,\mathrm{m}$, while the launch at $45^\circ$ reaches $40.8\,\mathrm{m}$.

::grafico{curve="14.142*t,14.142*t-4.905*t^2,0,2.8832;17.3205*t,10*t-4.905*t^2,0,2.0387;10*t,17.3205*t-4.905*t^2,0,3.5312" punti="35.31,0,pieno;40.77,0,pieno" etichette="21,11.2,45°;24,5.4,30°;19.5,15.8,60°" xmin=-5 xmax=45 ymin=-2 ymax=18 uguale=1 titolo="Launches with $v_0 = 20\,\mathrm{m/s}$ at $30^\circ$, $45^\circ$ and $60^\circ$: the complementary angles give the same range $35.3\,\mathrm{m}$, the launch at $45^\circ$ goes farthest"}

:::

## Launches from a height

:::osservazione{#lancio-orizzontale titolo="Horizontal launch"}
If the body is launched horizontally from a height $h$ above the ground, the origin is placed on the ground vertically below the launch point, and the equations of motion are
$$
x(t) = v_0\,t, \qquad y(t) = h - \frac{1}{2}\,g\,t^2 .
$$
The body hits the ground when $y = 0$, therefore the **fall time** and the horizontal distance traveled are
$$
t_c = \sqrt{\frac{2h}{g}}, \qquad d = v_0\,\sqrt{\frac{2h}{g}} .
$$
The fall time does not depend on $v_0$, because in every case the vertical motion starts with zero vertical velocity; a body launched horizontally and one dropped from the same height at the same instant hit the ground together. At the instant of impact $v_x = v_0$ and $v_y = -g\,t_c$, and the angle $\beta$ of the velocity below the horizontal satisfies $\tan\beta = \dfrac{|v_y|}{v_x}$. For $h = 20\,\mathrm{m}$ and $v_0 = 8.0\,\mathrm{m/s}$ one has $t_c = 2.02\,\mathrm{s}$ and $d = 16.2\,\mathrm{m}$.

::grafico{curve="8*t,20-4.905*t^2,0,2.0193" punti="0,20,pieno;4,18.774,pieno;8,15.095,pieno;12,8.964,pieno;16,0.38,pieno" segmenti="4,18.774,4,0;8,15.095,8,0;12,8.964,12,0;16,0.38,16,0;4,18.774,0,18.774;8,15.095,0,15.095;12,8.964,0,8.964" xmin=-2 xmax=18 ymin=-3 ymax=24 uguale=1 titolo="Horizontal launch from $h = 20\,\mathrm{m}$ with $v_0 = 8.0\,\mathrm{m/s}$, positions every $0.5\,\mathrm{s}$: the horizontal displacements are equal, the vertical ones grow with time"}

:::

:::osservazione{#lancio-da-quota titolo="Launch from a height at any angle"}
If the landing point is at a height $y_f$ different from the launch height $y_0$, the formulas for the time of flight and the range do not apply. The landing time is obtained by solving the quadratic equation
$$
y_0 + v_0\sin\theta\; t - \frac{1}{2}\,g\,t^2 = y_f ,
$$
and substituting the solution into $x(t)$ gives the horizontal distance. If the landing point is lower than the launch point, the product of the solutions is negative, therefore the equation has only one positive solution, which is the one sought. If the landing point is higher and reachable, there are two positive solutions, and the first corresponds to the passage during the ascent, the second to the passage during the descent. When the horizontal distance of a target is known, the equation of the **parabolic trajectory** directly gives the height at which the projectile passes.
:::

::::teorema{#velocita-e-quota titolo="Speed as a function of height"}
Under the assumptions of projectile motion, if the body starts from height $y_0$ with velocity of magnitude $v_0$, at the instant it is at height $y$ the magnitude of its velocity is
$$
v = \sqrt{v_0^2 - 2g\,(y - y_0)} ,
$$
whatever the direction of the launch. The magnitude of the velocity therefore depends only on the difference in height. A body launched from $h = 20\,\mathrm{m}$ with $v_0 = 8.0\,\mathrm{m/s}$ reaches the ground with $v = \sqrt{64 + 2 \cdot 9.81 \cdot 20}\,\mathrm{m/s} = 21.4\,\mathrm{m/s}$, both in the horizontal launch and in any other direction. The same relation is found again as conservation of mechanical energy, for which see the topic on work and energy.

:::dimostrazione
The horizontal component of the velocity is constant, $v_x = v_{0x}$. For the vertical component the time-independent relation of the **equations of motion with constant acceleration** holds with $a_y = -g$, that is, $v_y^2 = v_{0y}^2 - 2g\,(y - y_0)$. Adding the squares of the components one obtains
$$
v^2 = v_x^2 + v_y^2 = v_{0x}^2 + v_{0y}^2 - 2g\,(y - y_0) = v_0^2 - 2g\,(y - y_0) ,
$$
from which the claim follows by taking the square root.
:::
::::

## Uniform circular motion

:::definizione{#posizione-angolare titolo="Angular position and arc length"}
A point moves in **circular motion** if its trajectory is a circle. With the origin at the center and radius $R$, the position of the point is given by the angle $\theta(t)$ that the position vector forms with the $x$ axis, measured in radians and positive counterclockwise:
$$
\vec{r}(t) = R\cos\theta(t)\,\hat{\imath} + R\sin\theta(t)\,\hat{\jmath} .
$$
The length of the arc between the $x$ axis and the point is the **arc length** $s = R\,\theta$; the relation holds because the radian measure of an angle is the ratio of the arc to the radius. Thus a point on a circle of radius $2\,\mathrm{m}$ that rotates by $1\,\mathrm{rad}$ travels an arc of $2\,\mathrm{m}$.

::grafico{curve="2*cos(t),2*sin(t),0,1;2*cos(t),2*sin(t),1,6.29" segmenti="0,0,2,0;0,0,1.081,1.683" punti="1.081,1.683,pieno,P" etichette="0.45,0.18,θ;2.02,1.08,s;0.2,1.05,R" xmin=-2.6 xmax=2.8 ymin=-2.6 ymax=2.6 uguale=1 titolo="The angular position $\theta$ locates the point $P$ on the circle of radius $R$, and the colored arc has length $s = R\,\theta$"}

:::

:::definizione{#velocita-angolare titolo="Angular velocity"}
The **angular velocity** is the derivative of the angular position,
$$
\omega = \frac{d\theta}{dt} ,
$$
measured in $\mathrm{rad/s}$. For counterclockwise motion $\omega > 0$ and, differentiating $s = R\,\theta$, the speed is $v = \dfrac{ds}{dt} = \omega R$; for clockwise motion $\omega < 0$ and $v = |\omega|\,R$. Circular motion is called **uniform** if $\omega$ is constant; in this case $\theta(t) = \theta_0 + \omega\,t$, and the point travels equal arcs in equal times. All points of a rigid rotating disk have the same angular velocity, while their speed grows in proportion to the distance from the axis.
:::

:::definizione{#periodo-e-frequenza titolo="Period and frequency"}
In uniform circular motion the **period** $T$ is the time taken to complete one revolution, and the **frequency** $f$ is the number of revolutions completed in one second:
$$
T = \frac{2\pi}{\omega} = \frac{2\pi R}{v}, \qquad f = \frac{1}{T} = \frac{\omega}{2\pi} .
$$
Frequency is measured in hertz, with $1\,\mathrm{Hz} = 1\,\mathrm{s^{-1}}$; in engineering revolutions per minute (rpm) are also used, and one revolution per minute corresponds to $\dfrac{1}{60}\,\mathrm{Hz}$. A point $0.50\,\mathrm{m}$ from the axis of a wheel that completes one revolution in $2.0\,\mathrm{s}$ has $f = 0.50\,\mathrm{Hz}$, $\omega = \pi\,\mathrm{rad/s} \approx 3.14\,\mathrm{rad/s}$ and $v = \omega R = 1.57\,\mathrm{m/s}$.
:::

::::teorema{#accelerazione-centripeta titolo="Centripetal acceleration"}
In uniform circular motion of radius $R$ and angular velocity $\omega$, the acceleration is directed at every instant toward the center of the circle and has magnitude
$$
a_n = \omega^2 R = \frac{v^2}{R} .
$$
In vector form, with the origin at the center, $\vec{a} = -\omega^2\,\vec{r}$. This acceleration is called **centripetal acceleration**. The magnitude of the velocity remains constant, and the acceleration measures how fast the direction of the velocity rotates. For the wheel that completes one revolution in $2.0\,\mathrm{s}$, at $0.50\,\mathrm{m}$ from the axis one has $a_n = \pi^2 \cdot 0.50\,\mathrm{m/s^2} = 4.93\,\mathrm{m/s^2}$. A body moves in uniform circular motion only if the net force acting on it is directed toward the center, and for this aspect see the topic on Newton's laws.

::grafico{curve="2*cos(t),2*sin(t),0,6.29" vettori="1.732,1,1.032,2.212,v;1.732,1,0.693,0.4,a" segmenti="0,0,1.732,1" punti="1.732,1,pieno,P;0,0,pieno" xmin=-2.6 xmax=2.8 ymin=-2.6 ymax=2.6 uguale=1 titolo="In uniform circular motion the velocity is tangent to the circle and the acceleration is directed along the radius toward the center"}

:::dimostrazione
Set $\varphi(t) = \omega t + \theta_0$, so that the equation of motion is $\vec{r}(t) = R\cos\varphi\,\hat{\imath} + R\sin\varphi\,\hat{\jmath}$. Differentiating component by component with the chain rule one obtains
$$
\vec{v}(t) = -\omega R\sin\varphi\,\hat{\imath} + \omega R\cos\varphi\,\hat{\jmath} ,
$$
which has magnitude $|\omega|\,R$ and is orthogonal to $\vec{r}$, since $\vec{r} \cdot \vec{v} = -\omega R^2\cos\varphi\sin\varphi + \omega R^2\sin\varphi\cos\varphi = 0$. Differentiating again one obtains
$$
\vec{a}(t) = -\omega^2 R\cos\varphi\,\hat{\imath} - \omega^2 R\sin\varphi\,\hat{\jmath} = -\omega^2\,\vec{r}(t) .
$$
Therefore $\vec{a}$ points opposite to $\vec{r}$, that is, toward the center, and its magnitude is $\omega^2 R$. Since $v = |\omega|\,R$, one also has $\omega^2 R = \dfrac{v^2}{R}$.
:::
::::

:::richiamo{titolo="Derivatives of composite sine and cosine"}
By the chain rule, $\dfrac{d}{dt}\cos(\omega t + \theta_0) = -\omega\sin(\omega t + \theta_0)$ and $\dfrac{d}{dt}\sin(\omega t + \theta_0) = \omega\cos(\omega t + \theta_0)$. See the topic on derivatives in Mathematical Analysis 1.
:::

## Nonuniform circular motion

:::definizione{#accelerazione-angolare titolo="Angular acceleration"}
If the angular velocity varies with time, the circular motion is **nonuniform**, and the **angular acceleration** is
$$
\alpha = \frac{d\omega}{dt} = \frac{d^2\theta}{dt^2} ,
$$
measured in $\mathrm{rad/s^2}$. If $\alpha$ has the same sign as $\omega$ the rotation speeds up, if it has the opposite sign it slows down. A disk that goes uniformly from rest to $\omega = 12\,\mathrm{rad/s}$ in $4.0\,\mathrm{s}$ has angular acceleration $\alpha = 3.0\,\mathrm{rad/s^2}$.
:::

:::teorema{#moto-circolare-uniformemente-accelerato titolo="Uniformly accelerated circular motion"}
If $\alpha$ is constant and at time $t = 0$ the angular position is $\theta_0$ and the angular velocity is $\omega_0$, then
$$
\begin{aligned}
\omega(t) &= \omega_0 + \alpha\,t \\[6pt]
\theta(t) &= \theta_0 + \omega_0\,t + \frac{1}{2}\,\alpha\,t^2 \\[6pt]
\omega^2 &= \omega_0^2 + 2\alpha\,(\theta - \theta_0) .
\end{aligned}
$$
These are the laws of uniformly accelerated straight-line motion with $\theta$, $\omega$, $\alpha$ in place of $x$, $v$, $a$, and they are derived by the same integration as the **equations of motion with constant acceleration**. The number of revolutions completed is $\dfrac{\theta - \theta_0}{2\pi}$. The disk that starts from rest with $\alpha = 3.0\,\mathrm{rad/s^2}$ rotates in $4.0\,\mathrm{s}$ through $\dfrac{1}{2} \cdot 3.0 \cdot 4.0^2\,\mathrm{rad} = 24\,\mathrm{rad}$, that is, $3.8$ revolutions.
:::

::::teorema{#accelerazione-tangenziale-e-normale titolo="Tangential acceleration and centripetal acceleration"}
Consider a point in circular motion of radius $R$ counterclockwise, with angular velocity $\omega(t) > 0$ and angular acceleration $\alpha(t)$. Denoting by $\hat{u}_t$ the unit tangent vector in the direction of motion and by $\hat{u}_n$ the unit vector directed from the point toward the center, the acceleration is
$$
\vec{a} = a_t\,\hat{u}_t + a_n\,\hat{u}_n, \qquad a_t = \frac{dv}{dt} = \alpha R, \qquad a_n = \frac{v^2}{R} = \omega^2 R ,
$$
and its magnitude is $|\vec{a}| = \sqrt{a_t^2 + a_n^2}$. The **tangential acceleration** $a_t$ measures the change in the magnitude of the velocity, the **centripetal acceleration** $a_n$ the change in its direction. For a point at $R = 0.40\,\mathrm{m}$ from the axis, at the instant when $\omega = 5.0\,\mathrm{rad/s}$ and $\alpha = 2.0\,\mathrm{rad/s^2}$, one has $a_t = 0.80\,\mathrm{m/s^2}$, $a_n = 10\,\mathrm{m/s^2}$ and $|\vec{a}| = 10.0\,\mathrm{m/s^2}$.

::grafico{curve="2*cos(t),2*sin(t),0,6.29" vettori="1,1.732,0.221,2.182,aₜ;1,1.732,0.25,0.433,aₙ;1,1.732,-0.529,0.883,a" segmenti="0.221,2.182,-0.529,0.883;0.25,0.433,-0.529,0.883" punti="1,1.732,pieno;0,0,pieno" xmin=-2.6 xmax=2.8 ymin=-2.6 ymax=2.6 uguale=1 titolo="In a circular motion that speeds up counterclockwise, the acceleration $\vec{a}$ is the sum of the tangential component $a_t$ and the centripetal component $a_n$"}

:::dimostrazione
With the origin at the center, the radial unit vector is $\hat{u}_r = \cos\theta\,\hat{\imath} + \sin\theta\,\hat{\jmath}$, therefore $\hat{u}_n = -\hat{u}_r$, and the unit tangent vector in the counterclockwise direction is $\hat{u}_t = -\sin\theta\,\hat{\imath} + \cos\theta\,\hat{\jmath}$. Differentiating $\vec{r} = R\,\hat{u}_r$, with $R$ constant and $\theta = \theta(t)$, one obtains $\vec{v} = R\,\omega\,\hat{u}_t = v\,\hat{u}_t$. Differentiating the product $v\,\hat{u}_t$ one has
$$
\vec{a} = \frac{dv}{dt}\,\hat{u}_t + v\,\frac{d\hat{u}_t}{dt} ,
$$
and by the chain rule
$$
\frac{d\hat{u}_t}{dt} = -\omega\cos\theta\,\hat{\imath} - \omega\sin\theta\,\hat{\jmath} = -\omega\,\hat{u}_r = \omega\,\hat{u}_n ,
$$
so $\vec{a} = \dfrac{dv}{dt}\,\hat{u}_t + v\,\omega\,\hat{u}_n$. Finally, from $v = \omega R$ it follows that $\dfrac{dv}{dt} = \alpha R$ and $v\,\omega = \omega^2 R = \dfrac{v^2}{R}$. Since $\hat{u}_t$ and $\hat{u}_n$ are orthogonal, the magnitude follows from the Pythagorean theorem.
:::
::::

:::osservazione{#raggio-di-curvatura titolo="Intrinsic components on an arbitrary trajectory"}
The decomposition holds for every regular plane trajectory, and at every point one has $\vec{a} = \dfrac{dv}{dt}\,\hat{u}_t + \dfrac{v^2}{\rho}\,\hat{u}_n$, where $\rho$ is the **radius of curvature**, that is, the radius of the circle that best approximates the trajectory near the point, and $\hat{u}_n$ is directed toward the center of that circle. In general $a_t$ and $a_n$ are computed by projecting $\vec{a}$ onto the direction of $\vec{v}$, with $a_t = \dfrac{\vec{a} \cdot \vec{v}}{v}$ and $a_n = \sqrt{|\vec{a}|^2 - a_t^2}$, and then $\rho = \dfrac{v^2}{a_n}$. At the highest point of a projectile's trajectory the velocity is horizontal and equals $v_{0x}$, while the acceleration $g$ is vertical and therefore entirely centripetal; so at that point $\rho = \dfrac{v_{0x}^2}{g}$, which for $v_{0x} = 6.0\,\mathrm{m/s}$ equals $3.67\,\mathrm{m}$.
:::

## Relative motion and Galilean transformations

:::definizione{#sistemi-in-moto-relativo titolo="Reference frames in relative motion"}
The position, velocity and trajectory of a point depend on the observer's **reference frame**. Consider two frames, $S$ with origin $O$ and axes $x$, $y$, and $S'$ with origin $O'$ and axes $x'$, $y'$. $S'$ is said to be in **translational motion** relative to $S$ if its axes remain parallel to those of $S$; the velocity $\vec{V}$ of the origin $O'$ measured in $S$ is called the **velocity of the moving frame**. The car of a train on a straight track and the station platform are two frames of this kind, and a seated passenger is at rest in the frame of the car and in motion in the frame of the platform.
:::

::::teorema{#trasformazioni-di-galileo titolo="Galilean transformations"}
Let $S'$ be in translational motion relative to $S$ with constant velocity $\vec{V}$, and let the origins coincide at time $t = 0$. Then a point $P$ that has position vector $\vec{r}\,'$ in $S'$ has position vector in $S$
$$
\vec{r} = \vec{r}\,' + \vec{V}\,t, \qquad t = t' .
$$
If $\vec{V}$ is directed along the $x$ axis, in components the transformations are $x = x' + V t$ and $y = y'$. The equality $t = t'$ expresses the assumption that time flows in the same way for the two observers; the assumption is satisfied to a very good approximation for speeds small compared with the speed of light, while for comparable speeds the Galilean transformations are replaced by those of special relativity.

::grafico{vettori="0,0,3,1,V t;0,0,6,3.5,r;3,1,6,3.5,r'" segmenti="3,1,7.6,1;3,1,3,4.6" punti="6,3.5,pieno,P" etichette="7.35,0.62,x';2.55,4.45,y';2.45,0.62,O'" xmin=-0.5 xmax=8 ymin=-0.5 ymax=5 uguale=1 titolo="The point $P$ has position $\vec{r}$ in frame $S$ and $\vec{r}\,'$ in frame $S'$, whose origin has moved by $\vec{V}\,t$, therefore $\vec{r} = \vec{r}\,' + \vec{V}\,t$"}

:::dimostrazione
By the tip-to-tail rule for vector addition one has $\overrightarrow{OP} = \overrightarrow{OO'} + \overrightarrow{O'P}$. The vector $\overrightarrow{O'P}$ is the position of $P$ in $S'$, that is, $\vec{r}\,'$, because the axes of the two frames are parallel and therefore a vector has the same components in $S$ and in $S'$. The origin $O'$ moves in $S$ with uniform straight-line motion with velocity $\vec{V}$ starting from $O$, therefore $\overrightarrow{OO'} = \vec{V}\,t$; substituting one obtains the claim.
:::
::::

::::teorema{#composizione-delle-velocita titolo="Velocity addition"}
Under the assumptions of the Galilean transformations, the velocity and acceleration of a point measured in $S$ and in $S'$ are related by
$$
\vec{v} = \vec{v}\,' + \vec{V}, \qquad \vec{a} = \vec{a}\,' .
$$
The velocity relative to $S$ is the vector sum of the velocity relative to $S'$ and the velocity of the moving frame. In particular, if $A$ and $B$ are two bodies with velocities $\vec{v}_A$ and $\vec{v}_B$, choosing $S'$ attached to $A$ one obtains the **relative velocity** of $B$ with respect to $A$, $\vec{v}_{B,A} = \vec{v}_B - \vec{v}_A$. A passenger walking toward the front of the train at $1.5\,\mathrm{m/s}$ relative to the car, while the train travels at $20\,\mathrm{m/s}$, has velocity $21.5\,\mathrm{m/s}$ relative to the tracks.

:::dimostrazione
Differentiate with respect to time the equality $\vec{r} = \vec{r}\,' + \vec{V}\,t$. Since $\vec{V}$ is constant and $t' = t$, one obtains $\dfrac{d\vec{r}}{dt} = \dfrac{d\vec{r}\,'}{dt} + \vec{V}$, that is, $\vec{v} = \vec{v}\,' + \vec{V}$. Differentiating again, the derivative of $\vec{V}$ is zero, therefore $\vec{a} = \vec{a}\,'$.
:::
::::

:::esempio{titolo="Boat crossing a river"}
A boat heads perpendicular to the banks with velocity $v' = 4.0\,\mathrm{m/s}$ relative to the water, and the current has velocity $V = 3.0\,\mathrm{m/s}$ parallel to the banks. In the frame of the bank the velocity of the boat is $\vec{v} = \vec{v}\,' + \vec{V}$; since the two vectors are orthogonal, the magnitude is $v = \sqrt{4.0^2 + 3.0^2}\,\mathrm{m/s} = 5.0\,\mathrm{m/s}$, and the direction forms with the perpendicular to the banks the angle $\varphi$ with $\tan\varphi = \dfrac{3.0}{4.0}$, that is, $\varphi \approx 36.9^\circ$. The crossing time depends only on the component of the velocity perpendicular to the banks, which is $v'$, while the current shifts the landing point downstream.

::grafico{vettori="0,0,0,4,v';0,4,3,4,V;0,0,3,4,v" etichette="0.25,1.5,φ" xmin=-0.8 xmax=4.2 ymin=-0.8 ymax=4.8 uguale=1 titolo="Velocities in $\mathrm{m/s}$, with the $x$ axis along the current: the velocity $\vec{v}$ of the boat relative to the bank is the sum of $\vec{v}\,'$, relative to the water, and of the velocity $\vec{V}$ of the current"}

:::

:::osservazione{#invarianza-dell-accelerazione titolo="Invariance of acceleration"}
Two frames in uniform translational motion relative to each other measure the same acceleration for every body, even though they measure different velocities and trajectories. A stone dropped by a passenger on a train in uniform straight-line motion falls vertically in the frame of the car and describes an arc of a parabola in the frame of the tracks, with the same acceleration $\vec{g}$ in both frames. The principle of Galilean relativity is based on this invariance, for which see the topic on Newton's laws and inertial frames. If instead $S'$ translates with variable velocity $\vec{V}(t)$, $\vec{v} = \vec{v}\,' + \vec{V}(t)$ still holds, and differentiating one obtains $\vec{a} = \vec{a}\,' + \dfrac{d\vec{V}}{dt}$; the accelerations measured in the two frames then differ by the acceleration of the moving frame.
:::
