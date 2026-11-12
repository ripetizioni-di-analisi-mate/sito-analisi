---
titolo: Motion along a straight line
sommario: How position, velocity and acceleration are defined for a body moving on a line, how the equations of uniform and uniformly accelerated motion and of free fall follow from them, and how the graphs of position, velocity and acceleration are read through slopes, areas and integration.
---

## Position, frame of reference and the law of motion

:::definizione{#frame-of-reference titolo="Frame of reference and position"}
A **frame of reference** is a rigid body taken as fixed, together with a system of coordinates attached to it and a clock that measures time. For a body that moves along a straight line, one axis is enough: a point $O$ of the line is chosen as the **origin**, a positive sense is chosen on the line, and a unit of length is fixed.

The **position** of the body at the instant $t$ is the coordinate $x$ of the point it occupies, that is, the signed distance from $O$, positive on the side of the positive sense and negative on the other. The position is a scalar with the dimension of a length, and the sign carries the information that in two or three dimensions is carried by the direction of a vector.

Motion is described with respect to a frame, therefore the same body can be at rest in one frame and moving in another. A passenger seated in a moving train keeps a constant position in the frame of the train and a changing position in the frame of the ground.
:::

:::definizione{#law-of-motion titolo="Law of motion"}
The **law of motion** of the body is the function that gives the position at each instant,
$$
t \longmapsto x(t) ,
$$
defined on the time interval during which the motion is observed. Knowing $x(t)$ is knowing everything about the motion in that frame, since velocity and acceleration are obtained from it by differentiation.

The graph of $x(t)$ in the plane of the axes $t$ and $x$ is called the **position-time graph**. The graph is not the path of the body: the path is the segment of the line that the body sweeps, while the graph records at which instant each position is occupied.

::grafico{f="2+4*x-0.5*x^2" xmin=-0.5 xmax=8.2 ymin=-1 ymax=11.5 nomi="t,x" punti="0,2,pieno;4,10,pieno;6,8,pieno" segmenti="4,0,4,10;6,0,6,8" legenda=0 titolo="Position-time graph of the motion $x(t) = 2 + 4t - \dfrac{1}{2}t^2$ (SI units): the body starts at $x = 2\,\mathrm{m}$, reaches $x = 10\,\mathrm{m}$ at $t = 4\,\mathrm{s}$ and then moves back"}
:::

:::definizione{#displacement titolo="Displacement and distance travelled"}
The **displacement** between the instants $t_1$ and $t_2 > t_1$ is the change in position
$$
\Delta x = x(t_2) - x(t_1) ,
$$
a signed quantity: it is positive when the final position is on the positive side of the initial one, and negative in the opposite case. The **distance travelled** is instead the length of the path actually covered, and it is a non-negative quantity.

The two quantities coincide when the body moves always in the same sense. When the body reverses, the distance travelled is the sum of the lengths of the single stretches, while the displacement only compares the two end positions. For the motion drawn above, between $t_1 = 1\,\mathrm{s}$ and $t_2 = 6\,\mathrm{s}$ the positions are $x(1) = 5.5\,\mathrm{m}$ and $x(6) = 8\,\mathrm{m}$, hence the displacement is $\Delta x = 2.5\,\mathrm{m}$; the body however first advances to $x = 10\,\mathrm{m}$ and then returns, therefore the distance travelled is $4.5\,\mathrm{m} + 2\,\mathrm{m} = 6.5\,\mathrm{m}$.

The displacement is what enters the definition of velocity, and the distance travelled is what an odometer reads.
:::

## Average velocity and average speed

:::definizione{#average-velocity titolo="Average velocity"}
The **average velocity** of the body between the instants $t_1$ and $t_2$ is the ratio of the displacement to the elapsed time,
$$
v_{\mathrm{av}} = \frac{\Delta x}{\Delta t} = \frac{x(t_2) - x(t_1)}{t_2 - t_1} ,
$$
measured in $\mathrm{m/s}$. The sign of the average velocity is the sign of the displacement, since $\Delta t > 0$, therefore a positive average velocity means that the body has ended up on the positive side of where it started.

On the position-time graph the average velocity is the slope of the straight line through the two points $(t_1, x(t_1))$ and $(t_2, x(t_2))$, called the **secant line**. The average velocity therefore depends only on the two end positions and ignores everything that happens in between: a body that leaves a point and comes back to it has zero average velocity over that interval, whatever it did meanwhile.

::grafico{f="2+4*x-0.5*x^2;4+1.5*x" xmin=-0.5 xmax=8.2 ymin=-1 ymax=11.5 nomi="t,x" punti="1,5.5,pieno;4,10,pieno" segmenti="1,0,1,5.5;4,0,4,10;1,5.5,4,5.5;4,5.5,4,10" etichette="2.3,4.9,Δt = 3 s;4.2,7.6,Δx = 4.5 m" legenda=0 titolo="Between $t_1 = 1\,\mathrm{s}$ and $t_2 = 4\,\mathrm{s}$ the average velocity is the slope of the secant line, $v_{\mathrm{av}} = \dfrac{4.5\,\mathrm{m}}{3\,\mathrm{s}} = 1.5\,\mathrm{m/s}$"}
:::

:::definizione{#average-speed titolo="Average speed"}
The **average speed** between two instants is the ratio of the distance travelled to the elapsed time. It is a non-negative quantity, and it is measured in $\mathrm{m/s}$ as well.

Average speed and average velocity have the same magnitude exactly when the body does not reverse during the interval. For the motion of the figure, between $t_1 = 1\,\mathrm{s}$ and $t_2 = 6\,\mathrm{s}$ the average velocity is $\dfrac{2.5\,\mathrm{m}}{5\,\mathrm{s}} = 0.5\,\mathrm{m/s}$, while the average speed is $\dfrac{6.5\,\mathrm{m}}{5\,\mathrm{s}} = 1.3\,\mathrm{m/s}$.

Average speed is the quantity that answers questions about travel times, and problems with several stretches covered at different speeds are solved with it.
:::

:::attenzione
The average speed over a journey made of several stretches is not the average of the speeds of the stretches, since each speed must be weighted with the time spent at it and not with the distance covered. A car that covers the first half of a route at $90\,\mathrm{km/h}$ and the second half at $60\,\mathrm{km/h}$ spends more time on the slower half, hence its average speed is
$$
v_{\mathrm{av}} = \frac{2d}{\dfrac{d}{90\,\mathrm{km/h}} + \dfrac{d}{60\,\mathrm{km/h}}} = 72\,\mathrm{km/h} ,
$$
and not $75\,\mathrm{km/h}$. The value $75\,\mathrm{km/h}$ is obtained when the two speeds are held for equal *times* instead of equal distances.
:::

## Instantaneous velocity

The average velocity describes a whole interval with a single number. To describe the motion at one instant the interval is made arbitrarily short.

:::richiamo{#derivative-recall titolo="Derivative of a function"}
Let $f$ be defined in a neighborhood of $t_0$. The **derivative** of $f$ at $t_0$ is
$$
f'(t_0) = \lim_{\Delta t \to 0} \frac{f(t_0 + \Delta t) - f(t_0)}{\Delta t} ,
$$
when the limit exists and is finite. Geometrically the difference quotient is the slope of the secant line through the points of abscissa $t_0$ and $t_0 + \Delta t$, and the derivative is the slope of the tangent line at $t_0$. The derivative of a sum is the sum of the derivatives, and $\dfrac{d}{dt}\,t^{n} = n\,t^{\,n-1}$.
:::

:::definizione{#instantaneous-velocity titolo="Instantaneous velocity"}
The **instantaneous velocity** at the instant $t$ is the limit of the average velocity over intervals that shrink to $t$, that is, the derivative of the law of motion,
$$
v(t) = \lim_{\Delta t \to 0} \frac{x(t + \Delta t) - x(t)}{\Delta t} = \frac{dx}{dt} .
$$
Since the difference quotient is the slope of a secant line, the instantaneous velocity is the slope of the tangent to the position-time graph at the point of abscissa $t$. Its sign tells the sense of the motion at that instant, and its magnitude $|v|$ is the **instantaneous speed**, which is the quantity a speedometer displays.

For the law $x(t) = 2 + 4t - \dfrac{1}{2}t^2$ the derivative is $v(t) = 4 - t$ in SI units. The velocity is positive for $t < 4\,\mathrm{s}$, it vanishes at $t = 4\,\mathrm{s}$ and it is negative afterwards, which is why the position grows up to $t = 4\,\mathrm{s}$ and decreases afterwards. A vanishing velocity is the analytic signature of a reversal, therefore the instants at which $v = 0$ are the ones that separate the stretches used to compute a distance travelled.

::grafico{f="2+4*x-0.5*x^2;4+2*x" xmin=-0.5 xmax=8.2 ymin=-1 ymax=11.5 nomi="t,x" punti="2,8,pieno" legenda=0 titolo="At $t = 2\,\mathrm{s}$ the tangent to the graph has slope $v(2) = 2\,\mathrm{m/s}$, which is the instantaneous velocity at that instant"}
:::

:::osservazione
Average velocity and instantaneous velocity agree in one case only, namely when the velocity is constant throughout the interval. In every other case the average velocity over $[t_1, t_2]$ equals the instantaneous velocity at some intermediate instant, by the mean value theorem of differential calculus applied to $x(t)$. This is the reason why the average velocity of a uniformly accelerated motion equals the arithmetic mean of the initial and final velocities, a relation used in many problems.
:::

## Acceleration

:::definizione{#average-acceleration titolo="Average acceleration"}
The **average acceleration** between the instants $t_1$ and $t_2$ is the ratio of the change in velocity to the elapsed time,
$$
a_{\mathrm{av}} = \frac{\Delta v}{\Delta t} = \frac{v(t_2) - v(t_1)}{t_2 - t_1} ,
$$
measured in $\mathrm{m/s^2}$. A car whose speed goes from rest to $28\,\mathrm{m/s}$ in $7.0\,\mathrm{s}$ has average acceleration $4.0\,\mathrm{m/s^2}$.

The definition has the same form as that of average velocity, with the velocity in place of the position, so the acceleration measures how fast the velocity changes exactly as the velocity measures how fast the position changes.
:::

:::definizione{#instantaneous-acceleration titolo="Instantaneous acceleration"}
The **instantaneous acceleration** at the instant $t$ is the derivative of the velocity,
$$
a(t) = \lim_{\Delta t \to 0} \frac{v(t + \Delta t) - v(t)}{\Delta t} = \frac{dv}{dt} = \frac{d^2x}{dt^2} ,
$$
hence it is also the second derivative of the law of motion. On the velocity-time graph it is the slope of the tangent, and on the position-time graph its sign tells whether the graph is concave up or concave down.

For the law $x(t) = 2 + 4t - \dfrac{1}{2}t^2$ the velocity is $v(t) = 4 - t$ and the acceleration is $a(t) = -1\,\mathrm{m/s^2}$, constant and negative at every instant. The acceleration is the quantity that Newton's second law connects to the forces applied to the body, as the chapter on Newton's laws of motion shows, therefore it is the quantity through which a cause of the motion enters the description.
:::

:::osservazione{#sign-of-acceleration titolo="Speeding up and slowing down"}
Whether the body speeds up or slows down is decided by the signs of $v$ and $a$ together, and not by the sign of $a$ alone:

- when $v$ and $a$ have the same sign the speed $|v|$ increases;
- when $v$ and $a$ have opposite signs the speed $|v|$ decreases.

A body with $v = +10\,\mathrm{m/s}$ and $a = -2\,\mathrm{m/s^2}$ is slowing down, while a body with $v = -10\,\mathrm{m/s}$ and the same $a = -2\,\mathrm{m/s^2}$ is speeding up, since it is moving in the negative sense and is pushed further in that sense. A negative acceleration is therefore a deceleration *only* for a body that is moving in the positive sense.
:::

## Motion with constant velocity

::::teorema{#uniform-motion titolo="Uniform motion"}
Let the velocity be constant and equal to $v$ on an interval, and let $x_0 = x(t_0)$. Then
$$
x(t) = x_0 + v\,(t - t_0) ,
$$
and the acceleration vanishes at every instant of the interval.

:::dimostrazione
The position is an antiderivative of the velocity, since $v = \dfrac{dx}{dt}$. The function $x_0 + v\,(t - t_0)$ has derivative $v$ and takes the value $x_0$ at $t_0$, therefore it is the law of motion, because two antiderivatives of the same function that agree at one point agree everywhere. The acceleration is the derivative of the constant $v$, hence it vanishes.
:::

The graph of $x(t)$ is a straight line of slope $v$, and the displacement over an interval of duration $\Delta t$ is $v\,\Delta t$. Uniform motion is the motion of a body on which the resultant force vanishes, by Newton's first law, and it is also the phase at constant speed in the multi-stage problems treated further on.

::grafico{f="2+1.5*x;11-2*x" xmin=-0.5 xmax=6.2 ymin=-1 ymax=12 nomi="t,x" punti="0,2,pieno;0,11,pieno" legenda=0 etichette="2.5,9.8,v = 1.5 m/s;4.3,5.2,v = −2 m/s" titolo="Two uniform motions: the line with positive slope describes a body moving in the positive sense, the line with negative slope a body moving in the negative sense"}
::::

## Motion with constant acceleration

::::teorema{#constant-acceleration-equations titolo="Equations of uniformly accelerated motion"}
Let the acceleration be constant and equal to $a$ on an interval, and let $x_0$ and $v_0$ be the position and the velocity at the instant $t = 0$. Then, for every $t$ in the interval,
$$
\begin{cases}
v(t) = v_0 + a\,t \\[6pt]
x(t) = x_0 + v_0\,t + \dfrac{1}{2}\,a\,t^2
\end{cases}
$$

:::dimostrazione
The velocity is an antiderivative of the acceleration, since $a = \dfrac{dv}{dt}$. The function $v_0 + a t$ has derivative $a$ and takes the value $v_0$ at $t = 0$, therefore it is the velocity.

The position is an antiderivative of the velocity just found. The function $x_0 + v_0 t + \dfrac{1}{2}a t^2$ has derivative $v_0 + a t$ and takes the value $x_0$ at $t = 0$, hence it is the law of motion.
:::

The two equations contain five quantities, namely $x$, $v$, $t$, $v_0$ and $a$, with $x_0$ fixed by the choice of the origin. A problem gives three of them and asks for the others, therefore the standard method is to write both equations with the data substituted and to solve the resulting system. A braking car, a train leaving a station and a body in free fall are all described by these equations.
::::

::::teorema{#velocity-position-relation titolo="Relation between velocity and position"}
Under the hypotheses of the previous theorem,
$$
v^2 = v_0^2 + 2\,a\,(x - x_0) .
$$

:::dimostrazione
From $v = v_0 + a t$ with $a \neq 0$ it follows that $t = \dfrac{v - v_0}{a}$. Substituting this value of $t$ into the equation of the position gives
$$
x - x_0 = v_0\,\frac{v - v_0}{a} + \frac{1}{2}\,a\,\frac{(v - v_0)^2}{a^2}
= \frac{2v_0 v - 2v_0^2 + v^2 - 2 v_0 v + v_0^2}{2a}
= \frac{v^2 - v_0^2}{2a} .
$$
Multiplying both sides by $2a$ gives the stated relation. For $a = 0$ the relation reduces to $v = v_0$, which holds as well.
:::

The relation contains no time, therefore it answers at once every question in which the time is neither given nor asked. A car travelling at $30\,\mathrm{m/s}$ that brakes with $a = -6.0\,\mathrm{m/s^2}$ stops after
$$
d = \frac{v_0^2}{2\,|a|} = \frac{(30\,\mathrm{m/s})^2}{2 \cdot 6.0\,\mathrm{m/s^2}} = 75\,\mathrm{m} ,
$$
and since $d$ grows with the square of $v_0$, doubling the initial speed makes the stopping distance four times as long. The same relation, applied to the work of a constant force, leads to the work-energy theorem of the chapter on work and kinetic energy.
::::

:::esempio{#multi-stage-motion titolo="A motion in several stages"}
A subway train starts from rest, accelerates with $a_1 = 1.2\,\mathrm{m/s^2}$ until it reaches $v = 20\,\mathrm{m/s}$, keeps that speed, and finally brakes with deceleration $1.6\,\mathrm{m/s^2}$ until it stops at the next station, $1200\,\mathrm{m}$ away. The duration of the trip is asked.

Each stage has its own constant acceleration, hence the equations of uniformly accelerated motion are applied to one stage at a time, and the final values of a stage are the initial values of the next. The first and the third stage give
$$
t_1 = \frac{v}{a_1} = \frac{20\,\mathrm{m/s}}{1.2\,\mathrm{m/s^2}} = 16.7\,\mathrm{s},
\qquad
d_1 = \frac{v^2}{2 a_1} = 166.7\,\mathrm{m},
$$
$$
t_3 = \frac{v}{a_3} = \frac{20\,\mathrm{m/s}}{1.6\,\mathrm{m/s^2}} = 12.5\,\mathrm{s},
\qquad
d_3 = \frac{v^2}{2 a_3} = 125\,\mathrm{m} .
$$
The middle stage covers what is left, that is $d_2 = 1200\,\mathrm{m} - 166.7\,\mathrm{m} - 125\,\mathrm{m} = 908.3\,\mathrm{m}$, at constant speed, hence $t_2 = \dfrac{908.3\,\mathrm{m}}{20\,\mathrm{m/s}} = 45.4\,\mathrm{s}$. The total duration is therefore $74.6\,\mathrm{s}$, and the average velocity of the whole trip is $\dfrac{1200\,\mathrm{m}}{74.6\,\mathrm{s}} = 16.1\,\mathrm{m/s}$, smaller than the cruising speed, as the two stages at lower speed require.
:::

## Free fall

:::teorema{#free-fall titolo="Law of free fall"}
A body left free near the surface of the Earth, with air resistance negligible, falls with constant acceleration directed vertically downward, of magnitude
$$
g = 9.81\,\mathrm{m/s^2}
$$
at mid latitudes and at sea level. The value of $g$ is the same for every body, independently of its mass, its shape and its material.

This is an experimental law, established by Galileo with inclined planes and confirmed by every later measurement. The independence of $g$ from the mass is the fact that the chapter on Newton's laws of motion explains through the proportionality between weight and mass.

Since the acceleration is constant, free fall is a uniformly accelerated motion, therefore the equations already established apply. With a vertical axis $y$ oriented upward and the origin at the starting point, the acceleration is $a = -g$ and
$$
\begin{cases}
v(t) = v_0 - g\,t \\[6pt]
y(t) = v_0\,t - \dfrac{1}{2}\,g\,t^2
\end{cases}
$$
These are the equations used for a body dropped from rest, with $v_0 = 0$, and for a body thrown vertically upward or downward, with $v_0 > 0$ or $v_0 < 0$.
:::

:::esempio{#vertical-motion titolo="Body thrown vertically upward"}
A ball is thrown upward from the ground with $v_0 = 18\,\mathrm{m/s}$. The maximum height and the time of flight are asked.

At the highest point the velocity vanishes, since the motion changes sense there, therefore $t_{\mathrm{rise}}$ is found from $v = 0$ and the height from the relation between velocity and position:
$$
t_{\mathrm{rise}} = \frac{v_0}{g} = \frac{18\,\mathrm{m/s}}{9.81\,\mathrm{m/s^2}} = 1.83\,\mathrm{s},
\qquad
h = \frac{v_0^2}{2g} = \frac{(18\,\mathrm{m/s})^2}{2 \cdot 9.81\,\mathrm{m/s^2}} = 16.5\,\mathrm{m} .
$$
Setting $y = 0$ in the law of motion gives $t\left(v_0 - \dfrac{1}{2}g t\right) = 0$, whose positive root is $t = \dfrac{2v_0}{g} = 3.67\,\mathrm{s}$, which is twice the rising time. The ball therefore returns to the ground with speed $18\,\mathrm{m/s}$, equal to the launch speed, because the relation between velocity and position gives the same $v^2$ at the same height.

::grafico{f="18*x-4.905*x^2" xmin=-0.2 xmax=4.1 ymin=-1 ymax=18.5 nomi="t,y" punti="1.835,16.51,pieno;3.67,0,pieno" segmenti="1.835,0,1.835,16.51" legenda=0 titolo="Height of the ball as a function of time: the apex is reached at $t = \dfrac{v_0}{g} = 1.83\,\mathrm{s}$ and the flight lasts $\dfrac{2v_0}{g} = 3.67\,\mathrm{s}$"}
:::

:::attenzione
At the highest point the velocity vanishes and the acceleration does not. The acceleration keeps the value $-g$ throughout the flight, including the apex, since the body is free there as well. Were the acceleration zero at the apex, the velocity would stay zero and the body would remain suspended.
:::

## Graphs, slopes and areas

:::osservazione{#slope-of-graphs titolo="What the slope of each graph gives"}
The three graphs of a motion are read through the same two operations:

- the slope of the tangent to the position-time graph at the instant $t$ is the velocity $v(t)$;
- the slope of the tangent to the velocity-time graph at the instant $t$ is the acceleration $a(t)$.

A horizontal tangent on the position-time graph therefore marks an instant at which the body is at rest, and a horizontal tangent on the velocity-time graph marks an instant of zero acceleration, which is where the speed attains a maximum or a minimum. A straight velocity-time graph means constant acceleration, and a straight position-time graph means constant velocity.
:::

::::teorema{#area-under-velocity-graph titolo="Displacement as an area"}
Let the velocity $v(t)$ be continuous on $[t_1, t_2]$. Then the displacement is the integral of the velocity,
$$
\Delta x = x(t_2) - x(t_1) = \int_{t_1}^{t_2} v(t)\,dt ,
$$
that is, the area between the velocity-time graph and the time axis, counted positive where $v > 0$ and negative where $v < 0$.

:::dimostrazione
The position $x$ is an antiderivative of $v$, since $v = \dfrac{dx}{dt}$. By the fundamental theorem of calculus the integral of $v$ on $[t_1, t_2]$ equals the increment of any of its antiderivatives between the two ends, hence it equals $x(t_2) - x(t_1)$.
:::

The same argument applied to the acceleration gives $\Delta v = \displaystyle\int_{t_1}^{t_2} a(t)\,dt$, so the area under the acceleration-time graph is the change in velocity. These two statements let a motion be studied even when no formula for $v(t)$ is available and only a graph is given, which is how data recorded by an accelerometer are treated.

::grafico{f="4+2*x" area="4+2*x;0;0;5" xmin=-0.5 xmax=6.2 ymin=-1 ymax=15.5 nomi="t,v" punti="0,4,pieno;5,14,pieno" legenda=0 titolo="For $v(t) = 4 + 2t$ the shaded trapezoid between $t = 0$ and $t = 5\,\mathrm{s}$ has area $\dfrac{4 + 14}{2} \cdot 5 = 45\,\mathrm{m}$, which is the displacement"}
::::

:::attenzione
The area that gives the displacement is a signed area, therefore the stretches in which the velocity is negative subtract. For $v(t) = 8 - 2t$ in SI units the area between $t = 0$ and $t = 4\,\mathrm{s}$ is $+16\,\mathrm{m}$ and the area between $t = 4\,\mathrm{s}$ and $t = 7\,\mathrm{s}$ is $-9\,\mathrm{m}$, hence the displacement over the whole interval is $7\,\mathrm{m}$ while the distance travelled is $25\,\mathrm{m}$. The distance travelled is obtained by adding the areas with the sign changed where $v < 0$, that is, by integrating $|v(t)|$.

::grafico{f="8-2*x" area="8-2*x;0;0;4|0;8-2*x;4;7" xmin=-0.5 xmax=7.6 ymin=-7 ymax=9.5 nomi="t,v" punti="4,0,pieno" legenda=0 titolo="The positive area $16\,\mathrm{m}$ and the negative area $-9\,\mathrm{m}$ give the displacement $7\,\mathrm{m}$; their magnitudes added give the distance travelled $25\,\mathrm{m}$"}
:::

## From the acceleration back to the position

The derivative takes the position to the velocity and the velocity to the acceleration. When the acceleration is the datum, the two steps are run backwards by integration.

:::richiamo{#integral-recall titolo="Definite integral and antiderivative"}
Let $f$ be continuous on $[t_0, t]$ and let $F$ be an antiderivative of $f$, that is, $F' = f$. Then
$$
\int_{t_0}^{t} f(\tau)\,d\tau = F(t) - F(t_0) ,
$$
and the function $t \mapsto \displaystyle\int_{t_0}^{t} f(\tau)\,d\tau$ is the antiderivative of $f$ that vanishes at $t_0$. In particular $\displaystyle\int_{t_0}^{t} \tau^{n}\,d\tau = \dfrac{t^{\,n+1} - t_0^{\,n+1}}{n+1}$ for $n \neq -1$.
:::

::::teorema{#integration-of-motion titolo="Velocity and position from the acceleration"}
Let $a(t)$ be continuous, and let $v_0 = v(t_0)$ and $x_0 = x(t_0)$ be given. Then the motion is determined, and
$$
v(t) = v_0 + \int_{t_0}^{t} a(\tau)\,d\tau ,
\qquad
x(t) = x_0 + \int_{t_0}^{t} v(\tau)\,d\tau .
$$

:::dimostrazione
The function $v$ satisfies $v' = a$, hence $v$ is an antiderivative of $a$. The right-hand side of the first formula is an antiderivative of $a$ as well, by the recalled theorem, and it takes the value $v_0$ at $t_0$. Two antiderivatives of the same continuous function differ by a constant, and here the constant vanishes because the two functions agree at $t_0$, therefore the first formula holds.

The second formula is obtained by repeating the argument with $x$ in place of $v$ and $v$ in place of $a$.
:::

Two data are needed besides $a(t)$, namely the initial velocity and the initial position, because each integration introduces one constant. This is the general method: the equations of uniformly accelerated motion are the particular case $a(t) = a$ constant, and the same scheme governs the oscillator of the chapter on oscillations, where the acceleration depends on the position.
::::

:::esempio{titolo="Acceleration growing with time"}
A body starts from rest at the origin with acceleration $a(t) = 1.5\,t$, in SI units. Integrating once from $t_0 = 0$ with $v_0 = 0$,
$$
v(t) = \int_{0}^{t} 1.5\,\tau\,d\tau = 0.75\,t^2 ,
$$
and integrating once more with $x_0 = 0$,
$$
x(t) = \int_{0}^{t} 0.75\,\tau^2\,d\tau = 0.25\,t^3 .
$$
At $t = 4.0\,\mathrm{s}$ the velocity is $0.75 \cdot 16\,\mathrm{m/s} = 12\,\mathrm{m/s}$ and the position is $0.25 \cdot 64\,\mathrm{m} = 16\,\mathrm{m}$. The equations of uniformly accelerated motion do not apply here, since the acceleration is not constant, and in fact the displacement $16\,\mathrm{m}$ differs from the value $\dfrac{1}{2}a(4)\,t^2 = 48\,\mathrm{m}$ that would follow from using the final acceleration as if it were constant.

::grafico{f="1.5*x" area="1.5*x;0;0;4" xmin=-0.5 xmax=5.2 ymin=-1 ymax=8.5 nomi="t,a" punti="4,6,pieno" legenda=0 titolo="Area under the acceleration-time graph between $0$ and $4\,\mathrm{s}$: it equals $\dfrac{1}{2} \cdot 4 \cdot 6 = 12\,\mathrm{m/s}$, which is the velocity reached"}
:::
