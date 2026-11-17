---
titolo: "Motion in a straight line"
sommario: "Position, velocity and acceleration. Graphs, equations of motion, braking and piecewise motion."
---

## Position and displacement

:::definizione{#posizione titolo="Coordinate and time interval"}
To describe motion along a straight line, choose an origin, a positive direction and a clock. The **position** $x(t)$ is the particle's coordinate at time $t$. Moving the origin without reversing the axis changes all coordinates by the same amount. The difference between any two coordinates remains the same.

Between $t_i$ and $t_f>t_i$, **displacement** is $\Delta x=x(t_f)-x(t_i)$ and elapsed time is $\Delta t=t_f-t_i$. The sign of $\Delta x$ tells which side of its starting position the particle finishes on. Distance travelled instead adds the actual lengths of the segments. A particle moves from $x=2\,\mathrm m$ to $x=9\,\mathrm m$ and returns to $x=5\,\mathrm m$. Its total displacement is $3\,\mathrm m$ and its distance travelled is $7+4=11\,\mathrm m$.

Reversing the axis changes the signs of displacement, velocity and acceleration. Distance and duration do not depend on this choice. Choose a direction at the start of a calculation and keep it until you interpret the result.
:::

::grafico{segmenti="0,2,2,9;2,9,4,5" punti="0,2,pieno;2,9,pieno;4,5,pieno" xmin=-0.2 xmax=4.4 ymin=0 ymax=10 nomi="t,x" titolo="The direction reverses at 2 s. Distance travelled is 11 m and total displacement is 3 m"}

## Average and instantaneous velocity

:::definizione{#velocita titolo="Change in position"}
**Average velocity** is $v_m=\dfrac{\Delta x}{\Delta t}$. On a position–time graph it is the slope of the segment joining the two recorded points. **Average speed** uses the distance travelled in the numerator. On a trip out and back, average velocity is zero while average speed is positive.

**Instantaneous velocity** is found by taking shorter and shorter intervals around the instant of interest, provided this process approaches a single value. Geometrically it is the slope of the tangent to $x(t)$ at that time. If the graph has a corner, the slopes to its left and right can differ. A sharp-corner model describes the positions before and after a quick manoeuvre, but it does not give a single velocity at the idealised switching time.

Consider $x(t)=2t^2$, with $x$ in metres and $t$ in seconds. To find the slope at $t=1\,\mathrm s$, use the ratio between $1$ and $1+h$:
$$
\frac{x(1+h)-x(1)}h
=\frac{2(1+h)^2-2}h=4+2h.
$$
As $h$ gets closer to zero, the ratio approaches $4\,\mathrm{m/s}$. Keep $h$ small but nonzero to avoid division by zero.
:::

::grafico{f="2*x^2;4*x-2" punti="1,2,pieno" xmin=0 xmax=2 ymin=0 ymax=8.5 nomi="t,x" titolo="The tangent at t equal to 1 s has slope 4 m/s"}

## Uniform motion

:::teorema{#uniforme titolo="Equation of motion at constant velocity"}
At constant velocity, equal time intervals produce equal displacements. If $x_0$ is the position at $t_0$, then
$$
x(t)=x_0+v(t-t_0).
$$
On an $x$–$t$ graph, the slope is $v$. With negative velocity the line slopes down because the coordinate decreases. A horizontal line represents rest. The vertical intercept equals $x_0$ only if $t_0=0$.

To locate a meeting between two particles, write both equations in the same frame with the same clock. Then equate the coordinates. If $x_A(t)=4+3t$ and $x_B(t)=22-t$, we obtain $4t=18$, so $t=4.5\,\mathrm s$. Substituting into both equations gives $17.5\,\mathrm m$. This check avoids confusing a meeting with two passes through the same position at different times.
:::

::grafico{f="4+3*x;22-x" punti="4.5,17.5,pieno" xmin=0 xmax=6 ymin=0 ymax=26 nomi="t,x" titolo="The intersection means the same position at the same time"}

:::osservazione{#moto-a-tratti titolo="Successive stages"}
If motion has several stages, each has its own duration and initial data. The second stage starts from the position reached in the first. Three seconds at $4\,\mathrm{m/s}$ cover $12\,\mathrm m$. The next two seconds at $-2\,\mathrm{m/s}$ contribute a displacement of $-4\,\mathrm m$. The total is $8\,\mathrm m$, so average velocity is $1.6\,\mathrm{m/s}$. The arithmetic mean of the two velocities is instead $1\,\mathrm{m/s}$ because it assigns them equal weight even though they last different amounts of time.

If a stage equation uses time since the transition, use $t-t_1$ in the second stage, where $t_1$ is the switching time. A solution from that branch represents an event only if its time lies in the branch's interval.
:::

## Acceleration

:::definizione{#accelerazione titolo="Change in velocity"}
**Average acceleration** over an interval is $a_m=\dfrac{v_f-v_i}{t_f-t_i}$. Its unit is $\mathrm{m/s^2}$, a change measured in metres per second for each second. Instantaneous acceleration is the slope of the tangent on the velocity–time graph. Going from $v_i=4\,\mathrm{m/s}$ to $v_f=-2\,\mathrm{m/s}$ in $3\,\mathrm s$ gives $a_m=-2\,\mathrm{m/s^2}$. If velocity is continuous its sign changes inside the interval, but the final value does not say when it crosses zero.

The sign of acceleration tells how signed velocity changes. If $v$ and $a$ have the same sign, the magnitude of $v$ increases. If their signs are opposite, that magnitude decreases. With $v<0$ and $a<0$, the object speeds up in the negative direction. An instant with $v=0$ can mark a reversal with nonzero acceleration.
:::

::grafico{f="4-2*x" punti="2,0,pieno;3,-2,pieno" xmin=0 xmax=3.3 ymin=-3 ymax=5 nomi="t,v" titolo="Before 2 s the speed falls. It then rises in the negative direction"}

## Equations for uniformly accelerated motion

:::teorema{#uniformemente-accelerato titolo="Position and velocity at constant acceleration"}
For constant acceleration, with $t$ measured from the start of the stage,
$$
v=v_0+at,\qquad x=x_0+v_0t+\tfrac12at^2,\qquad
v^2=v_0^2+2a(x-x_0).
$$
The first relation represents the change in velocity, $at$ in $t$ seconds. For the second, velocity changes linearly, so its mean is $\dfrac{v_0+v}{2}$. Multiply by $t$ and substitute $v=v_0+at$ to obtain displacement. Finally, multiply $(v-v_0)=at$ by $(v+v_0)$ and use $(v+v_0)t=2(x-x_0)$ to obtain the time-free relation.

The last equation contains $v^2$. A square root gives its magnitude but not its sign. For example, an object thrown upwards may pass the same level on the way up and down. To distinguish those events, use the time or further information about direction.

For braking from $v_0=20\,\mathrm{m/s}$ to $v=0$ at acceleration $-5\,\mathrm{m/s^2}$, braking takes $4\,\mathrm s$ and covers $40\,\mathrm m$. A one-second reaction interval beforehand at constant velocity adds $20\,\mathrm m$. After stopping, replace the braking equation by a rest stage if the vehicle stays still.
:::

::grafico{segmenti="0,20,1,20;1,20,5,0;5,0,6,0" punti="1,20,pieno;5,0,pieno" xmin=0 xmax=6.2 ymin=-1 ymax=24 nomi="t,v" titolo="The reaction interval contributes a rectangle before the braking triangle"}

## Reading graphs and free fall

:::osservazione{#grafici-caduta titolo="Slopes and areas"}
On a velocity–time graph, the **signed area** between the curve and the time axis gives displacement. Area above the axis is positive and area below it is negative. To find distance travelled, add their magnitudes. If $v$ falls linearly from $4$ to $-2\,\mathrm{m/s}$ in $3\,\mathrm s$, it crosses zero at $2\,\mathrm s$. The positive triangle has area $4\,\mathrm m$ and the negative one contributes $-1\,\mathrm m$. Displacement is $3\,\mathrm m$ and distance is $5\,\mathrm m$.

Near the ground with air resistance neglected, a body in **free fall** accelerates downwards at magnitude $g$. With the axis upwards, $a=-g$. For an object released from rest at height $h$, take $y(0)=h$ and $v_0=0$. The equation $0=h-\tfrac12gt^2$ gives $t=\sqrt{2h/g}$ using the positive root. This model applies until contact with the ground.

Two objects released from the same height with the same initial conditions land together in the model. If one is released a second later, however, the first object already has downward velocity and is lower when the second is released. From then on both have the same acceleration and their relative velocity is constant. Comparing acceleration alone does not show that their separation stays constant.
:::
