---
titolo: Motion in two and three dimensions
sommario: How position, velocity and acceleration are defined as vectors, how the equations of motion with constant acceleration describe a projectile, how centripetal and tangential acceleration describe circular motion, and how velocities transform between two frames in relative motion.
---

## Position, displacement and the path

:::definizione{#position-vector titolo="Position vector and path"}
Fix an origin $O$ and an orthogonal frame $Oxyz$. The **position vector** of a particle at the instant $t$ is the vector $\vec{r}(t)$ drawn from $O$ to the particle,
$$
\vec{r}(t) = x(t)\,\hat{\imath} + y(t)\,\hat{\jmath} + z(t)\,\hat{k} ,
$$
and its components are the coordinates of the particle, each a function of time. The set of the points occupied by the particle is its **path**, or trajectory.

One vector function of time replaces the three scalar functions, therefore every statement about the motion can be written once in vector form and then read on each axis separately. Motion along a straight line is the case in which two of the three components stay constant.
:::

:::definizione{#displacement titolo="Displacement"}
The **displacement** between the instants $t_1$ and $t_2$ is the change of the position vector,
$$
\Delta\vec{r} = \vec{r}(t_2) - \vec{r}(t_1) ,
$$
that is, the vector from the first position to the second one. Its magnitude $|\Delta\vec{r}|$ is the distance between the two positions.

The displacement depends on the two endpoints alone, hence it is in general shorter than the length of the path travelled between them, and it vanishes whenever the particle returns to its starting point. For a particle that goes once round a circle of radius $R$ the path has length $2\pi R$ and the displacement is zero.

::grafico{curve="t,1.118*sqrt(t),0.08,5" vettori="0,0,1,1.118,r₁;0,0,4,2.236,r₂;1,1.118,4,2.236,Δr" punti="1,1.118,pieno,P₁;4,2.236,pieno,P₂" xmin=-0.5 xmax=5.4 ymin=-0.5 ymax=3.2 uguale=1 nomi="x,y" titolo="The displacement $\Delta\vec{r} = \vec{r}_2 - \vec{r}_1$ joins the two positions, while the particle travels along the path"}
:::

## Velocity

:::definizione{#average-velocity titolo="Average velocity"}
The **average velocity** between the instants $t_1$ and $t_2$ is the displacement divided by the elapsed time,
$$
\vec{v}_{\mathrm{av}} = \frac{\Delta\vec{r}}{\Delta t} ,
\qquad
\Delta t = t_2 - t_1 > 0 ,
$$
a vector with the direction and the sense of the displacement, measured in $\mathrm{m/s}$.

Since $\Delta t$ is a positive scalar, the average velocity is parallel to the displacement, therefore it carries no information about the shape of the path between the two positions. A particle that completes one lap of a closed circuit has zero average velocity over the lap, *whatever* speed it kept.
:::

:::richiamo{titolo="Derivative of a vector function"}
A vector function $\vec{u}(t) = u_x(t)\hat{\imath} + u_y(t)\hat{\jmath} + u_z(t)\hat{k}$ is differentiated component by component, since the unit vectors are constant:
$$
\frac{d\vec{u}}{dt} = \frac{du_x}{dt}\,\hat{\imath} + \frac{du_y}{dt}\,\hat{\jmath} + \frac{du_z}{dt}\,\hat{k} .
$$
The calculus course establishes the rules used here, in particular the derivative of a sum and the derivative of a product of a scalar function and a vector function.
:::

:::definizione{#instantaneous-velocity titolo="Instantaneous velocity"}
The **instantaneous velocity** at the instant $t$ is the limit of the average velocity as the time interval shrinks to zero,
$$
\vec{v}(t) = \lim_{\Delta t \to 0} \frac{\Delta\vec{r}}{\Delta t} = \frac{d\vec{r}}{dt}
= \frac{dx}{dt}\,\hat{\imath} + \frac{dy}{dt}\,\hat{\jmath} + \frac{dz}{dt}\,\hat{k} .
$$
Its magnitude $v = |\vec{v}| = \sqrt{v_x^2 + v_y^2 + v_z^2}$ is the **speed**, a non-negative scalar.

Each component of the velocity is the derivative of the corresponding coordinate, hence a motion given by its coordinates is differentiated one axis at a time. For $\vec{r}(t) = (3t^2)\hat{\imath} + (4t)\hat{\jmath}$ in meters and seconds the velocity is $\vec{v}(t) = (6t)\hat{\imath} + 4\,\hat{\jmath}$ in $\mathrm{m/s}$, and at $t = 1\,\mathrm{s}$ the speed is $\sqrt{36 + 16} \approx 7.2\,\mathrm{m/s}$.
:::

::::teorema{#velocity-is-tangent titolo="The velocity is tangent to the path"}
At every instant at which $\vec{v} \ne \vec{0}$, the instantaneous velocity is tangent to the path and points in the sense of the motion.

:::dimostrazione
The displacement $\Delta\vec{r}$ over the interval $[t, t + \Delta t]$ is the chord of the path joining the two positions, and the average velocity $\dfrac{\Delta\vec{r}}{\Delta t}$ is parallel to that chord. As $\Delta t$ tends to zero the second position approaches the first one along the path, therefore the chord tends to the tangent line at the first position. The limit of a family of vectors parallel to those chords is therefore a vector parallel to the tangent line, and since $\Delta t > 0$ the sense is the one in which the particle advances.
:::

The tangency fixes the direction of the velocity from the geometry of the path alone, therefore only its magnitude is left to compute. The statement also shows that the velocity changes whenever the path bends, *even* at constant speed, which is the starting point of the treatment of circular motion.

::grafico{curve="t,1.118*sqrt(t),0.08,5" vettori="1,1.118,4,2.236,Δr;1,1.118,3.619,2.582,v" punti="1,1.118,pieno;4,2.236,pieno" xmin=-0.5 xmax=5.4 ymin=-0.5 ymax=3.2 uguale=1 nomi="x,y" titolo="The average velocity is parallel to the chord $\Delta\vec{r}$; as the second instant approaches the first one the chord tends to the tangent, along which $\vec{v}$ lies"}
::::

## Acceleration

:::definizione{#average-acceleration titolo="Average and instantaneous acceleration"}
The **average acceleration** between two instants is the change of velocity divided by the elapsed time,
$$
\vec{a}_{\mathrm{av}} = \frac{\Delta\vec{v}}{\Delta t} ,
\qquad
\Delta\vec{v} = \vec{v}(t_2) - \vec{v}(t_1) ,
$$
and the **instantaneous acceleration** is its limit as the interval shrinks to zero,
$$
\vec{a}(t) = \frac{d\vec{v}}{dt} = \frac{d^2\vec{r}}{dt^2}
= \frac{dv_x}{dt}\,\hat{\imath} + \frac{dv_y}{dt}\,\hat{\jmath} + \frac{dv_z}{dt}\,\hat{k} ,
$$
measured in $\mathrm{m/s^2}$.

The acceleration is the vector that Newton's second law relates to the resultant force, therefore computing it from the motion and computing it from the forces are the two halves of every mechanics problem.
:::

::::teorema{#acceleration-components titolo="Tangential and normal components of the acceleration"}
Let $\hat{u}_T$ be the unit vector tangent to the path in the sense of the motion, so that $\vec{v} = v\,\hat{u}_T$ with $v > 0$. Then the acceleration splits as
$$
\vec{a} = \vec{a}_{\mathrm{tan}} + \vec{a}_{\perp} ,
\qquad
\vec{a}_{\mathrm{tan}} = \frac{dv}{dt}\,\hat{u}_T ,
\qquad
\vec{a}_{\perp} = v\,\frac{d\hat{u}_T}{dt} ,
$$
where $\vec{a}_{\mathrm{tan}}$ is parallel to the velocity and $\vec{a}_{\perp}$ is perpendicular to it.

:::dimostrazione
Differentiating the product $v\,\hat{u}_T$ gives $\vec{a} = \dfrac{dv}{dt}\hat{u}_T + v\dfrac{d\hat{u}_T}{dt}$, which is the stated decomposition. The second term is perpendicular to $\hat{u}_T$. Since $\hat{u}_T \cdot \hat{u}_T = 1$ at every instant, differentiating this identity gives $2\,\hat{u}_T \cdot \dfrac{d\hat{u}_T}{dt} = 0$, hence $\dfrac{d\hat{u}_T}{dt}$ is perpendicular to $\hat{u}_T$ and so is $\vec{a}_\perp$.
:::

The decomposition separates the two effects of the acceleration. The component along the velocity changes the speed, and it vanishes exactly when the speed is constant; the component perpendicular to the velocity changes the direction of the motion, and it vanishes exactly when the path is straight. Uniform circular motion has only the perpendicular component, and free fall from rest has only the tangential one.

::grafico{curve="t,1.118*sqrt(t),0.08,5" vettori="2.25,1.677,4.686,2.585,v;2.25,1.677,3.349,1.019,a;2.25,1.677,3.0,1.956,aₜ;2.25,1.677,2.599,0.740,a⊥" segmenti="3.0,1.956,3.349,1.019;2.599,0.740,3.349,1.019" punti="2.25,1.677,pieno" xmin=-0.3 xmax=5.6 ymin=-0.3 ymax=3.2 uguale=1 nomi="x,y" titolo="The acceleration $\vec{a}$ is the sum of a component $\vec{a}_{\mathrm{tan}}$ along the velocity, which changes the speed, and a component $\vec{a}_\perp$ perpendicular to it, which bends the path"}
::::

:::attenzione
A constant speed does not imply a zero acceleration. A particle in uniform circular motion has $\dfrac{dv}{dt} = 0$, hence $\vec{a}_{\mathrm{tan}} = \vec{0}$, and yet its acceleration has magnitude $\dfrac{v^2}{R}$, because the direction of the velocity keeps changing.

In the same way a zero velocity does not imply a zero acceleration. At the highest point of a vertical throw the velocity vanishes and the acceleration is still $g$ downwards.
:::

## Motion with constant acceleration in a plane

:::richiamo{titolo="Antiderivative of a vector function"}
If $\dfrac{d\vec{u}}{dt} = \vec{w}(t)$, then $\vec{u}(t) = \vec{u}(t_0) + \displaystyle\int_{t_0}^{t} \vec{w}(s)\,ds$, where the integral is computed component by component. The calculus course establishes this relation, which is the fundamental theorem of calculus applied to each component.
:::

::::teorema{#constant-acceleration-in-a-plane titolo="Equations of motion with constant acceleration"}
Let the acceleration $\vec{a}$ be constant in magnitude, direction and sense, and let $\vec{r}_0$ and $\vec{v}_0$ be the position and the velocity at $t = 0$. Then
$$
\vec{v}(t) = \vec{v}_0 + \vec{a}\,t ,
\qquad
\vec{r}(t) = \vec{r}_0 + \vec{v}_0\,t + \frac{1}{2}\,\vec{a}\,t^2 .
$$

:::dimostrazione
Integrating $\dfrac{d\vec{v}}{dt} = \vec{a}$ between $0$ and $t$, and using that $\vec{a}$ does not depend on time,
$$
\vec{v}(t) - \vec{v}_0 = \int_0^t \vec{a}\,ds = \vec{a}\,t ,
$$
which is the first relation. Integrating $\dfrac{d\vec{r}}{dt} = \vec{v}_0 + \vec{a}\,t$ between $0$ and $t$,
$$
\vec{r}(t) - \vec{r}_0 = \int_0^t (\vec{v}_0 + \vec{a}\,s)\,ds = \vec{v}_0\,t + \frac{1}{2}\,\vec{a}\,t^2 ,
$$
which is the second relation.
:::

Reading the two vector equations on the axes of a frame in which $\vec{a} = a_x\hat{\imath} + a_y\hat{\jmath}$ gives
$$
\begin{cases}
v_x = v_{0x} + a_x t \\[4pt]
v_y = v_{0y} + a_y t
\end{cases}
\qquad
\begin{cases}
x = x_0 + v_{0x} t + \dfrac{1}{2} a_x t^2 \\[6pt]
y = y_0 + v_{0y} t + \dfrac{1}{2} a_y t^2
\end{cases}
$$
Each pair contains the equations of a motion along a straight line with constant acceleration, one per axis, coupled only by the common time $t$. A motion in the plane with constant acceleration is therefore solved as two one-dimensional motions, and the time is the quantity that links them.
::::

:::osservazione{#independence-of-components titolo="Independence of the components"}
The $x$ equations contain no $y$ quantity and the $y$ equations contain no $x$ quantity, hence the two motions proceed independently. Two balls released at the same instant from the same height, one dropped and one thrown horizontally, have the same vertical motion and therefore reach the floor together, although their horizontal positions differ.
:::

## Projectile motion

:::definizione{#projectile-motion titolo="Projectile"}
A **projectile** is a body launched with an initial velocity and then moving under its weight alone, with air resistance neglected. Over distances small compared with the radius of the Earth the weight is constant, hence the acceleration is constant, equal to $g = 9.81\,\mathrm{m/s^2}$ directed downwards.

The frame is chosen with the origin at the launch point, the $x$ axis horizontal in the direction of the launch and the $y$ axis vertical upwards, so that $a_x = 0$ and $a_y = -g$. The initial velocity of magnitude $v_0$ making the angle $\theta_0$ with the horizontal has components $v_{0x} = v_0\cos\theta_0$ and $v_{0y} = v_0\sin\theta_0$.
:::

::::teorema{#projectile-equations titolo="Equations of projectile motion"}
In the frame introduced with the definition of a projectile, the motion of a body launched from the origin satisfies
$$
\begin{cases}
x = v_0\cos\theta_0\, t \\[4pt]
y = v_0\sin\theta_0\, t - \dfrac{1}{2}g t^2
\end{cases}
\qquad
\begin{cases}
v_x = v_0\cos\theta_0 \\[4pt]
v_y = v_0\sin\theta_0 - g t
\end{cases}
$$

:::dimostrazione
The acceleration is constant, therefore the equations of motion with constant acceleration apply. Substituting $a_x = 0$, $a_y = -g$, $x_0 = y_0 = 0$ and the components of $\vec{v}_0$ into those equations gives the four relations written above.
:::

The horizontal motion is uniform, since $v_x$ does not depend on time, and the vertical motion is the free fall studied for motion along a straight line, with the initial vertical velocity $v_0\sin\theta_0$. Every question about a projectile is answered by eliminating the time between one $x$ relation and one $y$ relation, and that elimination gives the equation of the path, the maximum height and the range.
::::

::::teorema{#parabolic-trajectory titolo="The path of a projectile is a parabola"}
For $\theta_0 \ne 90^\circ$ the path of a projectile launched from the origin is the parabola
$$
y = x\tan\theta_0 - \frac{g}{2\,v_0^2\cos^2\theta_0}\,x^2 .
$$

:::dimostrazione
Since $\cos\theta_0 \ne 0$, the relation $x = v_0\cos\theta_0\,t$ can be solved for the time, giving $t = \dfrac{x}{v_0\cos\theta_0}$. Substituting this value into the equation for $y$,
$$
y = v_0\sin\theta_0 \cdot \frac{x}{v_0\cos\theta_0} - \frac{1}{2}g\left(\frac{x}{v_0\cos\theta_0}\right)^{2}
= x\tan\theta_0 - \frac{g}{2\,v_0^2\cos^2\theta_0}\,x^2 .
$$
The coefficient of $x^2$ is negative and the coefficient of $x$ is a number, therefore the relation between $y$ and $x$ is that of a parabola with vertical axis opening downwards.
:::

The equation of the path answers every question in which the time does not appear, such as the height reached above a given horizontal distance. A ball launched with $v_0 = 22\,\mathrm{m/s}$ at $\theta_0 = 55^\circ$ is at
$$
y = 35\,\mathrm{m} \cdot \tan 55^\circ - \frac{9.81\,\mathrm{m/s^2}}{2\,(22\,\mathrm{m/s})^2\cos^2 55^\circ}\,(35\,\mathrm{m})^2 = 12.2\,\mathrm{m}
$$
when it has advanced $35\,\mathrm{m}$ horizontally, hence it passes above a wall $10\,\mathrm{m}$ high placed at that distance.

::grafico{curve="t,1.7321*t-0.04905*t^2,0,35.31" vettori="0,0,5,8.66,v₀;17.656,15.29,22.656,15.29,v;30,7.818,35,1.763,v" segmenti="17.656,0,17.656,15.29" punti="0,0,pieno;17.656,15.29,pieno;35.31,0,pieno" etichette="2.4,1.2,θ₀;18.4,7,H;29,-2.3,R" xmin=-3 xmax=39 ymin=-3 ymax=18 uguale=1 nomi="x,y" titolo="Path of a projectile with $v_0 = 20\,\mathrm{m/s}$ and $\theta_0 = 60^\circ$: the velocity stays tangent to the parabola and is horizontal at the highest point"}
::::

## Range, maximum height and time of flight

::::teorema{#maximum-height titolo="Maximum height"}
A projectile launched from the origin with $v_{0y} = v_0\sin\theta_0 > 0$ reaches its highest point at the instant
$$
t_H = \frac{v_0\sin\theta_0}{g}
$$
and the height of that point above the launch level is
$$
H = \frac{v_0^2\sin^2\theta_0}{2g} .
$$

:::dimostrazione
The height $y$ is maximum where $\dfrac{dy}{dt} = v_y = 0$, hence where $v_0\sin\theta_0 - g t = 0$, which gives $t_H$. Substituting $t_H$ into the equation for $y$,
$$
H = v_0\sin\theta_0 \cdot \frac{v_0\sin\theta_0}{g} - \frac{1}{2}g\,\frac{v_0^2\sin^2\theta_0}{g^2}
= \frac{v_0^2\sin^2\theta_0}{g} - \frac{v_0^2\sin^2\theta_0}{2g}
= \frac{v_0^2\sin^2\theta_0}{2g} .
$$
Since $v_y$ decreases with time, it is positive before $t_H$ and negative after, therefore $y$ increases and then decreases and the point found is the maximum.
:::

The formula gives the clearance of a projectile launched upwards, and it shows that the height depends on the vertical component of the initial velocity alone. Two balls launched at $18\,\mathrm{m/s}$, one at $40^\circ$ and one straight up, reach $6.8\,\mathrm{m}$ and $16.5\,\mathrm{m}$ respectively.
::::

::::teorema{#time-of-flight-and-range titolo="Time of flight and range on level ground"}
Let a projectile be launched from the origin with $0 < \theta_0 < 90^\circ$ and let it return to the launch level $y = 0$. Then the **time of flight** and the **range** are
$$
T = \frac{2\,v_0\sin\theta_0}{g} ,
\qquad
R = \frac{v_0^2\sin 2\theta_0}{g} .
$$

:::dimostrazione
Imposing $y = 0$ gives $t\left(v_0\sin\theta_0 - \dfrac{1}{2}g t\right) = 0$, whose solutions are $t = 0$, the launch, and
$$
t = T = \frac{2\,v_0\sin\theta_0}{g} ,
$$
the return to the launch level. The range is the horizontal distance covered in that time, and the horizontal motion is uniform, therefore
$$
R = v_0\cos\theta_0 \cdot T = \frac{2\,v_0^2\sin\theta_0\cos\theta_0}{g} = \frac{v_0^2\sin 2\theta_0}{g} ,
$$
where the last step uses the identity $\sin 2\theta_0 = 2\sin\theta_0\cos\theta_0$.
:::

The range formula gives the launch angle required to hit a target on the same level, since $\sin 2\theta_0 = \dfrac{Rg}{v_0^2}$. The function $\sin 2\theta_0$ attains its maximum $1$ at $\theta_0 = 45^\circ$, hence the greatest range for a given speed is $\dfrac{v_0^2}{g}$; moreover $\sin 2\theta_0$ takes the same value at $\theta_0$ and at $90^\circ - \theta_0$, therefore two complementary angles give the same range, with different flight times and different heights.

::grafico{curve="t,0.5774*t-0.01635*t^2,0,35.31;t,1.7321*t-0.04905*t^2,0,35.31" punti="35.31,0,pieno" etichette="27,2.6,30°;11,13.5,60°" xmin=-3 xmax=39 ymin=-2 ymax=18 uguale=1 nomi="x,y" titolo="Two launches with $v_0 = 20\,\mathrm{m/s}$ at the complementary angles $30^\circ$ and $60^\circ$ reach the same range $R = 35.3\,\mathrm{m}$"}
::::

:::attenzione
The formulas for $T$ and $R$ hold *only* when the landing point is at the launch level, since they come from imposing $y = 0$. A stone thrown at $15\,\mathrm{m/s}$ and $25^\circ$ from the top of a building $30\,\mathrm{m}$ high has $\dfrac{2 v_0 \sin\theta_0}{g} = 1.29\,\mathrm{s}$, while its actual flight lasts $3.20\,\mathrm{s}$, because it keeps falling below the launch level.

When the launch and the landing levels differ, the time of flight is obtained from the quadratic equation $y_0 + v_0\sin\theta_0\,t - \dfrac{1}{2}g t^2 = y_{\mathrm{land}}$, and the horizontal distance follows from that time.
:::

## Uniform circular motion

:::definizione{#uniform-circular-motion titolo="Uniform circular motion"}
A particle is in **uniform circular motion** when its path is a circle of radius $R$ and its speed $v$ is constant. The **period** $T$ is the time of one revolution and the **frequency** $f = \dfrac{1}{T}$ is the number of revolutions per unit time, measured in $\mathrm{s^{-1}} = \mathrm{Hz}$.

The length of one revolution is $2\pi R$ and the speed is constant, therefore
$$
v = \frac{2\pi R}{T} = 2\pi f R .
$$
:::

:::definizione{#angular-velocity titolo="Angular velocity"}
Let $\theta(t)$ be the angle, measured in radians, that locates the particle on the circle with respect to a fixed radius. The **angular velocity** is
$$
\omega = \frac{d\theta}{dt} ,
$$
measured in $\mathrm{rad/s}$. Since the arc of a circle of radius $R$ subtending the angle $\theta$ has length $s = R\theta$, differentiating with respect to time gives
$$
v = R\,\omega .
$$
In uniform circular motion $\omega$ is constant and equals $\dfrac{2\pi}{T} = 2\pi f$.

The angular velocity describes the motion without reference to the radius, hence all the points of a rotating rigid body share the same $\omega$ while their speeds $R\omega$ grow with the distance from the axis. The chapter on fixed-axis rotation builds on this remark.
:::

::::teorema{#centripetal-acceleration titolo="Centripetal acceleration"}
A particle in uniform circular motion of radius $R$ and speed $v$ has an acceleration of constant magnitude
$$
a_{\mathrm{rad}} = \frac{v^2}{R} = \omega^2 R ,
$$
directed at every instant from the particle towards the centre of the circle.

:::dimostrazione
Place the origin at the centre and write the position as
$$
\vec{r}(t) = R\cos(\omega t)\,\hat{\imath} + R\sin(\omega t)\,\hat{\jmath} ,
$$
which describes the circle of radius $R$ travelled with constant angular velocity $\omega$. Differentiating once,
$$
\vec{v}(t) = -R\omega\sin(\omega t)\,\hat{\imath} + R\omega\cos(\omega t)\,\hat{\jmath} ,
$$
whose magnitude is $R\omega\sqrt{\sin^2(\omega t) + \cos^2(\omega t)} = R\omega$, constant and equal to $v$. Differentiating a second time,
$$
\vec{a}(t) = -R\omega^2\cos(\omega t)\,\hat{\imath} - R\omega^2\sin(\omega t)\,\hat{\jmath} = -\omega^2\,\vec{r}(t) .
$$
The acceleration is therefore the position vector multiplied by the negative number $-\omega^2$, hence it points from the particle towards the centre, and its magnitude is $\omega^2 R$. Replacing $\omega$ with $\dfrac{v}{R}$ gives $\dfrac{v^2}{R}$.
:::

The result is used in the opposite direction as well, since a particle in uniform circular motion has this acceleration and Newton's second law then requires a resultant force $m\dfrac{v^2}{R}$ directed towards the centre, which the chapter on applications of Newton's laws identifies with friction on a flat curve, with a component of the normal force on a banked curve and with the tension of a string in a conical pendulum. A car taking a bend of radius $50\,\mathrm{m}$ at $20\,\mathrm{m/s}$ has $a_{\mathrm{rad}} = 8.0\,\mathrm{m/s^2}$.

::grafico{curve="2*cos(t),2*sin(t),0,6.2832" vettori="0,2,-1.3,2,v;0,2,0,1,a;-1.7321,-1,-1.0821,-2.1258,v;-1.7321,-1,-0.8661,-0.5,a;1.7321,-1,2.3821,0.1258,v;1.7321,-1,0.8661,-0.5,a" punti="0,0,pieno,O" xmin=-3.2 xmax=3.2 ymin=-3.2 ymax=3.2 uguale=1 nomi="x,y" titolo="In uniform circular motion the velocity is tangent to the circle and the acceleration points towards the centre, with constant magnitude $\dfrac{v^2}{R}$"}
::::

## Nonuniform circular motion

:::definizione{#nonuniform-circular-motion titolo="Angular acceleration"}
A circular motion is **nonuniform** when the speed changes with time. The **angular acceleration** is
$$
\alpha = \frac{d\omega}{dt} ,
$$
measured in $\mathrm{rad/s^2}$, and differentiating $v = R\omega$ with $R$ constant gives the relation $\dfrac{dv}{dt} = R\,\alpha$ between the rate of change of the speed and the angular acceleration.
:::

::::teorema{#tangential-and-radial-acceleration titolo="Radial and tangential acceleration"}
In a circular motion of radius $R$ the acceleration has the two components
$$
a_{\mathrm{rad}} = \frac{v^2}{R} ,
\qquad
a_{\mathrm{tan}} = \frac{dv}{dt} ,
$$
the first directed towards the centre and the second along the tangent, hence
$$
a = \sqrt{a_{\mathrm{rad}}^2 + a_{\mathrm{tan}}^2} .
$$

:::dimostrazione
The decomposition of the acceleration into a component along the velocity and a component perpendicular to it applies, and the tangential component is $\dfrac{dv}{dt}$ by that decomposition. For the perpendicular component, write the position with a time-dependent angle $\theta(t)$,
$$
\vec{r}(t) = R\cos\theta\,\hat{\imath} + R\sin\theta\,\hat{\jmath} ,
$$
and let $\hat{u}_R = \cos\theta\,\hat{\imath} + \sin\theta\,\hat{\jmath}$ and $\hat{u}_T = -\sin\theta\,\hat{\imath} + \cos\theta\,\hat{\jmath}$ be the radial and tangential unit vectors. Differentiating twice with the chain rule and $\omega = \dfrac{d\theta}{dt}$,
$$
\vec{v} = R\omega\,\hat{u}_T ,
\qquad
\vec{a} = R\alpha\,\hat{u}_T - R\omega^2\,\hat{u}_R .
$$
The component along $\hat{u}_R$ has magnitude $R\omega^2 = \dfrac{v^2}{R}$ and the sign $-$ places it towards the centre. The two components are perpendicular, therefore the magnitude of the acceleration is the square root of the sum of their squares.
:::

The two components answer different questions, since $a_{\mathrm{rad}}$ measures how sharply the path bends at the current speed while $a_{\mathrm{tan}}$ measures how fast the speed changes. A car that enters a bend of radius $100\,\mathrm{m}$ at $10\,\mathrm{m/s}$ while speeding up at $2.0\,\mathrm{m/s^2}$ has $a_{\mathrm{rad}} = 1.0\,\mathrm{m/s^2}$ and $a_{\mathrm{tan}} = 2.0\,\mathrm{m/s^2}$, hence $a = 2.2\,\mathrm{m/s^2}$.

::grafico{curve="2*cos(t),2*sin(t),0,6.2832" vettori="1.4142,1.4142,0.4243,0.4243,aᵣ;1.4142,1.4142,0.7778,2.0506,aₜ;1.4142,1.4142,-0.2121,1.0607,a" segmenti="0.4243,0.4243,-0.2121,1.0607;0.7778,2.0506,-0.2121,1.0607" punti="1.4142,1.4142,pieno;0,0,pieno,O" xmin=-3.2 xmax=3.4 ymin=-2.8 ymax=2.8 uguale=1 nomi="x,y" titolo="Nonuniform circular motion: the radial component $\vec{a}_{\mathrm{rad}}$ points to the centre and the tangential component $\vec{a}_{\mathrm{tan}}$ lies along the velocity, which here is increasing"}
::::

:::osservazione{#uniform-as-a-special-case titolo="Uniform motion as a special case"}
Setting $\dfrac{dv}{dt} = 0$ in the decomposition leaves $a = a_{\mathrm{rad}} = \dfrac{v^2}{R}$, which is the centripetal acceleration of the uniform case. Setting $R \to \infty$, that is, straightening the path, leaves $a = a_{\mathrm{tan}}$, which is the acceleration of a motion along a straight line.
:::

## Relative motion

:::definizione{#relative-position titolo="Two frames in relative motion"}
Let $A$ and $B$ be two frames, with $B$ translating with respect to $A$ without rotating. For a particle $P$ write $\vec{r}_{PA}$ for its position with respect to $A$, $\vec{r}_{PB}$ for its position with respect to $B$ and $\vec{r}_{BA}$ for the position of the origin of $B$ with respect to $A$. The three vectors satisfy
$$
\vec{r}_{PA} = \vec{r}_{PB} + \vec{r}_{BA} ,
$$
which is the tip-to-tail addition of the vector from the origin of $A$ to the origin of $B$ and of the vector from the origin of $B$ to the particle.
:::

::::teorema{#relative-velocity titolo="Galilean addition of velocities"}
With the notation introduced for the two frames in relative motion, the velocities of $P$ measured in them satisfy
$$
\vec{v}_{PA} = \vec{v}_{PB} + \vec{v}_{BA} ,
$$
where $\vec{v}_{BA}$ is the velocity of the frame $B$ with respect to the frame $A$. If moreover $\vec{v}_{BA}$ is constant, then the accelerations measured in the two frames are equal, $\vec{a}_{PA} = \vec{a}_{PB}$.

:::dimostrazione
Differentiating the relation between the position vectors with respect to time, and using that the derivative of a sum is the sum of the derivatives,
$$
\frac{d\vec{r}_{PA}}{dt} = \frac{d\vec{r}_{PB}}{dt} + \frac{d\vec{r}_{BA}}{dt} ,
$$
which is the stated addition of velocities. Differentiating once more,
$$
\vec{a}_{PA} = \vec{a}_{PB} + \frac{d\vec{v}_{BA}}{dt} ,
$$
and if $\vec{v}_{BA}$ is constant the last term vanishes, hence the two accelerations coincide.
:::

The addition of velocities is what relates the motion seen from the ground and the motion seen from a moving vehicle, and reversing the order of the labels reverses the vector, since $\vec{v}_{AB} = -\,\vec{v}_{BA}$. The equality of the accelerations is the reason why Newton's laws take the same form in all frames moving with constant relative velocity, as the chapter on Newton's laws of motion states for inertial frames.
::::

:::esempio{#river-crossing titolo="Crossing a river"}
A boat moves at $4.0\,\mathrm{m/s}$ with respect to the water and heads perpendicular to the banks of a river $80\,\mathrm{m}$ wide, whose current flows at $3.0\,\mathrm{m/s}$. Let $\vec{u}$ be the velocity of the boat with respect to the water, $\vec{w}$ the velocity of the water with respect to the ground and $\vec{v} = \vec{u} + \vec{w}$ the velocity of the boat with respect to the ground. The two vectors $\vec{u}$ and $\vec{w}$ are perpendicular, therefore
$$
v = \sqrt{(4.0\,\mathrm{m/s})^2 + (3.0\,\mathrm{m/s})^2} = 5.0\,\mathrm{m/s} ,
\qquad
\tan\varphi = \frac{3.0}{4.0} ,
$$
hence the boat moves at $5.0\,\mathrm{m/s}$ along a line making $\varphi = 36.9^\circ$ with the perpendicular to the banks.

The component of $\vec{v}$ across the river is $4.0\,\mathrm{m/s}$, which the current does not change, therefore the crossing takes
$$
t = \frac{80\,\mathrm{m}}{4.0\,\mathrm{m/s}} = 20\,\mathrm{s} ,
$$
and in that time the current carries the boat $3.0\,\mathrm{m/s} \cdot 20\,\mathrm{s} = 60\,\mathrm{m}$ downstream.

::grafico{assi=0 uguale=1 vettori="0,0,0,4,u;0,4,3,4,w;0,0,3,4,v" punti="0,0,pieno" linee="-1.4,0 4.8,0" etichette="-1.2,-0.5,bank" xmin=-1.8 xmax=5.2 ymin=-1.1 ymax=5.2 titolo="The velocity of the boat with respect to the ground is $\vec{v} = \vec{u} + \vec{w}$, with $u = 4.0\,\mathrm{m/s}$ across the river and $w = 3.0\,\mathrm{m/s}$ along it, hence $v = 5.0\,\mathrm{m/s}$"}
:::
