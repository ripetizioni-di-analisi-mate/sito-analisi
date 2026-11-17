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

::grafico{curve="t,2+3.5*t,0,2;t,13-2*t,2,4" punti="0,2,pieno;2,9,pieno;4,5,pieno" xmin=-0.2 xmax=4.4 ymin=0 ymax=10 nomi="t (s),x (m)" titolo="The direction reverses at 2 s. Distance travelled is 11 m and total displacement is 3 m"}

:::esempio{titolo="The same motion from two origins"}
Sensor A records a cart moving from $x=3\,\mathrm m$ to $x=11\,\mathrm m$ in $4\,\mathrm s$. Sensor B has its origin at $x=5\,\mathrm m$ and uses the same positive direction. In its frame, the cart goes from $x'=-2\,\mathrm m$ to $x'=6\,\mathrm m$. The coordinates of the two endpoints each change by $-5\,\mathrm m$. Subtracting the initial coordinate from the final one still gives $8\,\mathrm m$ in both cases, so the average velocity is $2\,\mathrm{m/s}$ in either frame. If B points its axis in the opposite direction, the coordinates become $x'_i=2\,\mathrm m$ and $x'_f=-6\,\mathrm m$. The average velocity becomes $-2\,\mathrm{m/s}$ and describes the same motion using sensor B's sign convention.

::grafico{curve="t,3+2*t,0,4;t,-2+2*t,0,4;t,2-2*t,0,4" legenda="x_A;x_B^{(+)};x_B^{(-)}" punti="0,3,pieno;0,-2,pieno;0,2,pieno;4,11,pieno;4,6,pieno;4,-6,pieno" xmin=0 xmax=4.55 ymin=-8 ymax=12 nomi="t (s),x (m)" titolo="The three lines describe one motion. Reversing the axis reverses the slope."}
:::

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

::grafico{f="2*x^2;4*x-2" punti="1,2,pieno" xmin=0 xmax=2 ymin=0 ymax=8.5 nomi="t (s),x (m)" titolo="The tangent at t equal to 1 s has slope 4 m/s"}

:::esempio{titolo="Estimating velocity from sampled positions"}
A sensor records positions of $4\,\mathrm m$, $9\,\mathrm m$ and $16\,\mathrm m$ at times $2\,\mathrm s$, $3\,\mathrm s$ and $4\,\mathrm s$. The slope for the interval before $3\,\mathrm s$ is $(9-4)\,\mathrm{m/s}=5\,\mathrm{m/s}$. The slope for the next interval is $(16-9)\,\mathrm{m/s}=7\,\mathrm{m/s}$. Using the two endpoints gives the centred estimate $\dfrac{16-4}{4-2}\,\mathrm{m/s}=6\,\mathrm{m/s}$. In the constant-acceleration model, velocity changes linearly, so the average over the interval equals the value at the midpoint. For arbitrary motion, sampling alone gives only average velocities. A stop or reversal between two readings could go undetected. More closely spaced readings or a model of the motion are needed to judge the reliability of the instantaneous estimate.

A further frame at $t=3.5\,\mathrm s$ gives a position of $12.4\,\mathrm m$ with uncertainty $0.2\,\mathrm m$. The model $x=t^2$ predicts $12.25\,\mathrm m$. A straight interpolation between $3$ and $4\,\mathrm s$ predicts $12.5\,\mathrm m$. Both predictions are within the reported interval. The extra frame improves time resolution, while its precision still leaves both models compatible on this short interval.

If each of the outer readings at $2\,\mathrm s$ and $4\,\mathrm s$ has a maximum position error of $0.2\,\mathrm m$, the displacement estimate can be off by up to $0.4\,\mathrm m$. The largest effect occurs when one reading is high and the other low. Over $2\,\mathrm s$ this means an error of up to $0.2\,\mathrm{m/s}$ in the average velocity. A common offset of the position sensor would cancel in the difference. The uncertainty covers a measurement of average velocity, while identifying it with the instantaneous velocity also needs the model.

::grafico{f="x^2" curve="t,6*t-8,2,4;t,6*t-9,2.3,3.88" legenda="\text{Motion};\text{Secant};\text{Tangent}" punti="2,4,pieno;3,9,pieno;4,16,pieno" segmenti="3,3,3,9" xmin=1.8 xmax=4.3 ymin=2 ymax=18.5 nomi="t (s),x (m)" titolo="The secant through the two outer readings is parallel to the tangent at the middle time."}
:::

## Uniform motion

:::teorema{#uniforme titolo="Equation of motion at constant velocity"}
At constant velocity, equal time intervals produce equal displacements. If $x_0$ is the position at $t_0$, then
$$
x(t)=x_0+v(t-t_0).
$$
On an $x$–$t$ graph, the slope is $v$. With negative velocity the line slopes down because the coordinate decreases. A horizontal line represents rest. The vertical intercept equals $x_0$ only if $t_0=0$.

To locate a meeting between two particles, write both equations in the same frame with the same clock. Then equate the coordinates. If $x_A(t)=4+3t$ and $x_B(t)=22-t$, we obtain $4t=18$, so $t=4.5\,\mathrm s$. Substituting into both equations gives $17.5\,\mathrm m$. This check avoids confusing a meeting with two passes through the same position at different times.
:::

::grafico{f="4+3*x;22-x" punti="4.5,17.5,pieno" xmin=0 xmax=6 ymin=0 ymax=26 nomi="t (s),x (m)" titolo="The intersection means the same position at the same time"}

:::osservazione{#moto-a-tratti titolo="Successive stages"}
If motion has several stages, each has its own duration and initial data. The second stage starts from the position reached in the first. Three seconds at $4\,\mathrm{m/s}$ cover $12\,\mathrm m$. The next two seconds at $-2\,\mathrm{m/s}$ contribute a displacement of $-4\,\mathrm m$. The total is $8\,\mathrm m$, so average velocity is $1.6\,\mathrm{m/s}$. The arithmetic mean of the two velocities is instead $1\,\mathrm{m/s}$ because it assigns them equal weight even though they last different amounts of time.

If a stage equation uses time since the transition, use $t-t_1$ in the second stage, where $t_1$ is the switching time. A solution from that branch represents an event only if its time lies in the branch's interval.
:::

:::esempio{titolo="Different durations over equal distances"}
A cyclist covers $600\,\mathrm m$ at $6\,\mathrm{m/s}$, then another $600\,\mathrm m$ in the same direction at $3\,\mathrm{m/s}$. The first segment takes $\dfrac{600}{6}\,\mathrm s=100\,\mathrm s$ and the second takes $\dfrac{600}{3}\,\mathrm s=200\,\mathrm s$. She covers $1200\,\mathrm m$ in $300\,\mathrm s$, so her average velocity is $4\,\mathrm{m/s}$. The arithmetic mean of the two velocities would be $4.5\,\mathrm{m/s}$ and would apply to segments of equal duration. Over equal distances, the slower segment takes more time. If the cyclist covered the second segment in the opposite direction, she would return to the start after $300\,\mathrm s$. Her average speed would remain $4\,\mathrm{m/s}$, while her average velocity would be zero.
:::

:::esempio{titolo="An encounter during a stop"}
Trolley A starts at $2\,\mathrm m$ and travels at $4\,\mathrm{m/s}$ until $3\,\mathrm s$, where it reaches $14\,\mathrm m$. It remains still until $6\,\mathrm s$ and then returns at $-2\,\mathrm{m/s}$. Trolley B follows $x_B(t)=26-3t$ in SI units. Equating $2+4t$ to $x_B(t)$ gives $t=\dfrac{24}{7}\,\mathrm s$. This time is beyond the interval of A's first leg, so the two trolleys do not meet on that leg.

During the stop, $x_A=14$ gives $t=4\,\mathrm s$, a time within the stop. On the return leg A follows $x_A=26-2t$. Equating it to $x_B$ gives $t=0$, which falls outside that leg. The only encounter is at four seconds, while A is stationary. Testing each interval also rules out an apparent second encounter obtained by extending the return line.

::grafico{f="2+4*x-2*((x-3)+abs(x-3))-((x-6)+abs(x-6));26-3*x" legenda="x_A;x_B" punti="3,14,pieno;4,14,pieno;6,14,pieno" segmenti="4,0,4,14" etichette="4.12,14.97,I" xmin=0 xmax=8.4 ymin=0 ymax=26.9 nomi="t (s),x (m)" titolo="A stops at 3 s and restarts at 6 s. The intersection I is at 4 s, during the stop."}
:::

## Acceleration

:::definizione{#accelerazione titolo="Change in velocity"}
**Average acceleration** over an interval is $a_m=\dfrac{v_f-v_i}{t_f-t_i}$. Its unit is $\mathrm{m/s^2}$, a change measured in metres per second for each second. Instantaneous acceleration is the slope of the tangent on the velocity–time graph. Going from $v_i=4\,\mathrm{m/s}$ to $v_f=-2\,\mathrm{m/s}$ in $3\,\mathrm s$ gives $a_m=-2\,\mathrm{m/s^2}$. If velocity is continuous its sign changes inside the interval, but the final value does not say when it crosses zero.

The sign of acceleration tells how signed velocity changes. If $v$ and $a$ have the same sign, the magnitude of $v$ increases. If their signs are opposite, that magnitude decreases. With $v<0$ and $a<0$, the object speeds up in the negative direction. An instant with $v=0$ can mark a reversal with nonzero acceleration.
:::

::grafico{f="4-2*x" punti="2,0,pieno;3,-2,pieno" xmin=0 xmax=3.3 ymin=-3 ymax=5 nomi="t (s),v (m/s)" titolo="Before 2 s the speed falls. It then rises in the negative direction"}

:::esempio{titolo="Constant acceleration from three positions"}
A cart has $x(0)=0\,\mathrm m$. Two photographs taken after $1\,\mathrm s$ and $2\,\mathrm s$ give positions of $7\,\mathrm m$ and $20\,\mathrm m$. The two one-second displacements are $7\,\mathrm m$ and $13\,\mathrm m$, so the average velocities are $7\,\mathrm{m/s}$ and $13\,\mathrm{m/s}$. If acceleration is constant, these are the velocities at the midpoint times $0.5\,\mathrm s$ and $1.5\,\mathrm s$. The difference of $6\,\mathrm{m/s}$ over $1\,\mathrm s$ gives $a=6\,\mathrm{m/s^2}$. Working back half a second to $t=0$, subtract $3\,\mathrm{m/s}$ to obtain $v_0=4\,\mathrm{m/s}$. The position equation with these data reproduces both photographs. A fourth photograph would allow the model to be tested over another interval.

The model inferred from the first three positions is $x(t)=4t+3t^2$ in SI units. Suppose the fourth picture at $t=3\,\mathrm s$ gives $38.7\,\mathrm m$ with uncertainty $0.1\,\mathrm m$. For this check take the previous readings as the reference for the model.

| $t$ (s) | Measured $x$ (m) | Predicted $x$ (m) |
| ---: | ---: | ---: |
| 0 | 0 | 0 |
| 1 | 7 | 7 |
| 2 | 20 | 20 |
| 3 | $38.7\pm0.1$ | 39 |

The model predicts $39\,\mathrm m$ for the new measurement. The gap of $0.3\,\mathrm m$ exceeds the stated uncertainty. If all the times are correct and the preceding readings are treated as exact, the fourth picture is inconsistent with the extrapolation. Checking the timing devices and adding further readings can separate a timing error from a change of acceleration.

::grafico{f="4*x+3*x^2" legenda="x=4t+3t^2" punti="3,38.7,pieno;3,39,vuoto" linee="3,38.6 3,38.8;2.994,38.6 3.006,38.6;2.994,38.8 3.006,38.8" etichette="3.012,38.72,38.7 m;2.964,39.09,39 m" xmin=2.93 xmax=3.07 ymin=37.5 ymax=40.6 nomi="t (s),x (m)" titolo="Near 3 s the model passes above the error bar of the fourth reading."}
:::

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

::grafico{curve="t,20,0,1;t,25-5*t,1,5" area="20;0;0;1|25-5*x;0;1;5" segmenti="1,0,1,20;5,0,6,0" punti="1,20,pieno;5,0,pieno" xmin=0 xmax=6.2 ymin=-0.5 ymax=24 nomi="t (s),v (m/s)" titolo="The reaction interval contributes a rectangle before the braking triangle"}

:::esempio{titolo="Two passes through the same height"}
A ball leaves the ground at $15\,\mathrm{m/s}$ upwards, with $g=10\,\mathrm{m/s^2}$. Its height in metres is $x(t)=15t-5t^2$ when time is expressed in seconds. To find when it reaches $10\,\mathrm m$, solve
$$
15t-5t^2=10,\qquad (t-1)(t-2)=0.
$$
The two passes occur at $t=1\,\mathrm s$ and $t=2\,\mathrm s$. The velocity equation $v(t)=15-10t$ gives $5\,\mathrm{m/s}$ upwards and $-5\,\mathrm{m/s}$ in the chosen direction, respectively. At the same height, the magnitudes agree while the slope of the curve changes sign. If the ball is caught on its first pass, the flight model ends there and the second root describes only the path it would have followed without being caught.

::grafico{curve="t,15*t-5*t^2,0,3" punti="1,10,pieno;2,10,pieno;1.5,11.25,pieno" segmenti="1,0,1,10;2,0,2,10;1,10,2,10" etichette="0.81,10.53,P;2.16,10.05,Q;1.52,11.8,A" xmin=0 xmax=3.32 ymin=0 ymax=12.8 nomi="t (s),x (m)" titolo="The position is the same at P and Q. The tangent points upwards at P and downwards at Q."}
:::

## Reading graphs and free fall

:::osservazione{#grafici-caduta titolo="Slopes and areas"}
On a velocity–time graph, the **signed area** between the curve and the time axis gives displacement. Area above the axis is positive and area below it is negative. To find distance travelled, add their magnitudes. If $v$ falls linearly from $4$ to $-2\,\mathrm{m/s}$ in $3\,\mathrm s$, it crosses zero at $2\,\mathrm s$. The positive triangle has area $4\,\mathrm m$ and the negative one contributes $-1\,\mathrm m$. Displacement is $3\,\mathrm m$ and distance is $5\,\mathrm m$.

Near the ground with air resistance neglected, a body in **free fall** accelerates downwards at magnitude $g$. With the axis upwards, $a=-g$. For an object released from rest at height $h$, take $y(0)=h$ and $v_0=0$. The equation $0=h-\tfrac12gt^2$ gives $t=\sqrt{\dfrac{2h}{g}}$ using the positive root. This model applies until contact with the ground.

Two objects released from the same height with the same initial conditions land together in the model. If one is released a second later, however, the first object already has downward velocity and is lower when the second is released. From then on both have the same acceleration and their relative velocity is constant. Comparing acceleration alone does not show that their separation stays constant.
:::

:::esempio{titolo="Signed area when velocity reverses"}
On a track, the velocity changes linearly from $6\,\mathrm{m/s}$ to $-2\,\mathrm{m/s}$ in $4\,\mathrm s$. Since it decreases by $2\,\mathrm{m/s}$ each second, it reaches zero after three seconds. The triangle above the axis has base $3\,\mathrm s$ and height $6\,\mathrm{m/s}$, giving a displacement of $9\,\mathrm m$. The triangle below the axis has base $1\,\mathrm s$ and height of magnitude $2\,\mathrm{m/s}$, giving a displacement of $-1\,\mathrm m$. The total displacement is $8\,\mathrm m$ and the distance travelled is $10\,\mathrm m$. Multiplying the mean of the initial and final velocities by the duration also gives $8\,\mathrm m$, because velocity varies linearly. To find the distance, split the calculation where velocity reaches zero.

The area gives the final position when the initial coordinate is known. If the point starts at $x(0)=2\,\mathrm m$, it ends at $10\,\mathrm m$. At the reversal its coordinate is $11\,\mathrm m$, since only the positive triangle has been traversed up to that time. The position graph therefore has a maximum at $t=3\,\mathrm s$ even though the acceleration remains constant.

::grafico{curve="t,6-2*t,0,4" area="6-2*x;0;0;3|0;6-2*x;3;4" punti="0,6,pieno;3,0,pieno;4,-2,pieno" segmenti="4,0,4,-2" etichette="0.91,1.25,+9 m;3.42,-0.38,−1 m" xmin=0 xmax=4.23 ymin=-3 ymax=7 nomi="t (s),v (m/s)" titolo="The two triangles contribute 9 m and −1 m to the displacement."}
:::
