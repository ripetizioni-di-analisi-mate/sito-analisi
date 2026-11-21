---
titolo: "Motion in a straight line"
sommario: "Position, velocity and acceleration. Graphs, equations of motion, braking and piecewise motion."
---

## Position and displacement

:::definizione{#posizione titolo="Coordinate and time interval"}
The moving body is treated as a **particle**, that is, as a point whose shape and size are neglected. The particle moves along a straight line. To describe the motion, three elements are fixed.

- The **origin** is the point of the line from which distances are measured.
- The **positive direction** is the direction of travel in which the coordinates increase. The line with its origin and positive direction is called the $x$-axis.
- The clock gives the time $t$, measured in seconds.

Origin, direction and clock together form the **frame of reference**. The **position** $x(t)$, read "$x$ of $t$", is the particle's coordinate at time $t$. The coordinate is positive if the particle lies on the side of the positive direction with respect to the origin, and negative if it lies on the opposite side. If the origin is moved along the axis without reversing its direction, all coordinates change by the same amount. The difference between two coordinates, however, stays the same.

The symbol $\Delta$ is the Greek capital letter delta and denotes the difference between a final value and an initial one. The subscripts $i$ and $f$ stand for "initial" and "final". Between the times $t_i$ and $t_f$, with $t_f>t_i$, two quantities are defined.

- The **displacement** is $\Delta x=x(t_f)-x(t_i)$, that is, the final coordinate minus the initial one.
- The elapsed time is $\Delta t=t_f-t_i$.

The sign of $\Delta x$ tells which side of its starting position the particle finishes on. If $\Delta x>0$, the particle ends up on the side of the positive direction. If $\Delta x<0$, it ends up on the opposite side. The **distance travelled**, instead, is the sum of the actual lengths of the segments travelled, each taken with a positive sign.

A particle moves from $x=2\,\mathrm m$ to $x=9\,\mathrm m$ and then returns to $x=5\,\mathrm m$. Its total displacement is $\Delta x=5\,\mathrm m-2\,\mathrm m=3\,\mathrm m$. The outward leg measures $9-2=7\,\mathrm m$ and the return leg $9-5=4\,\mathrm m$, so the distance travelled is $7+4=11\,\mathrm m$. On the position–time graph, with time on the horizontal axis and position on the vertical one, the particle rises from $2\,\mathrm m$ to $9\,\mathrm m$ in the first $2\,\mathrm s$ and then falls to $5\,\mathrm m$ at time $4\,\mathrm s$.

When the axis is reversed, the displacement changes sign, and the same happens to velocity and acceleration. Distance and duration do not depend on this choice. Therefore in a calculation the direction is fixed at the start and kept until the result is interpreted.
:::

::grafico{curve="t,2+3.5*t,0,2;t,13-2*t,2,4" punti="0,2,pieno;2,9,pieno;4,5,pieno" xmin=-0.2 xmax=4.4 ymin=0 ymax=10 nomi="t (s),x (m)" titolo="The direction reverses at 2 s. Distance travelled is 11 m and total displacement is 3 m"}

:::esempio{titolo="The same motion from two origins"}
Sensor A records a cart moving from $x=3\,\mathrm m$ to $x=11\,\mathrm m$ in $4\,\mathrm s$. Sensor B has its origin at the point that A labels $5\,\mathrm m$ and uses the same positive direction. Each coordinate of B, written with a prime as $x'$, is therefore A's coordinate reduced by $5\,\mathrm m$. In B's frame the cart goes from $x'=3-5=-2\,\mathrm m$ to $x'=11-5=6\,\mathrm m$. The coordinates of the two endpoints each change by $-5\,\mathrm m$. Subtracting the initial coordinate from the final one, however, gives the same displacement for both sensors.
$$
\Delta x=11\,\mathrm m-3\,\mathrm m=8\,\mathrm m,\qquad
\Delta x'=6\,\mathrm m-(-2\,\mathrm m)=8\,\mathrm m.
$$
The average velocity, that is, displacement divided by elapsed time, is therefore $\dfrac{8\,\mathrm m}{4\,\mathrm s}=2\,\mathrm{m/s}$ for both. If B points its axis in the opposite direction, each coordinate becomes $x'=5\,\mathrm m-x$, and the coordinates are $x'_i=2\,\mathrm m$ and $x'_f=-6\,\mathrm m$. The average velocity becomes $\dfrac{-6-2}{4}\,\mathrm{m/s}=-2\,\mathrm{m/s}$ and describes the same motion using sensor B's sign convention. On the graph the three lines are the motion seen by A ($x_A$), by B with the same direction ($x_B^{(+)}$) and by B with the opposite direction ($x_B^{(-)}$).

::grafico{curve="t,3+2*t,0,4;t,-2+2*t,0,4;t,2-2*t,0,4" legenda="x_A;x_B^{(+)};x_B^{(-)}" punti="0,3,pieno;0,-2,pieno;0,2,pieno;4,11,pieno;4,6,pieno;4,-6,pieno" xmin=0 xmax=4.55 ymin=-8 ymax=12 nomi="t (s),x (m)" titolo="The three lines describe one motion. Reversing the axis reverses the slope."}
:::

## Average and instantaneous velocity

:::definizione{#velocita titolo="Change in position"}
The **average velocity** between two times is the displacement divided by the elapsed time.
$$
v_m=\frac{\Delta x}{\Delta t}
$$
It is measured in metres per second, $\mathrm{m/s}$. On a position–time graph the average velocity is the slope of the segment joining the two recorded points. The **slope** of a segment is the ratio of the change in the vertical coordinate to the change in the horizontal one, here $\dfrac{\Delta x}{\Delta t}$. The line through two points of a graph is called a **secant**.

The **average speed** is the distance travelled divided by the elapsed time, so it is never negative. On a trip out and back the average velocity is zero, because the displacement is zero, while the average speed is positive. In the motion from $2\,\mathrm m$ to $9\,\mathrm m$ and back to $5\,\mathrm m$, which lasted $4\,\mathrm s$, the average velocity is $\dfrac{3}{4}\,\mathrm{m/s}=0.75\,\mathrm{m/s}$ and the average speed is $\dfrac{11}{4}\,\mathrm{m/s}=2.75\,\mathrm{m/s}$.

The **instantaneous velocity** $v$ is the velocity at a single instant, like the one shown by a speedometer. It is found by computing the average velocity over shorter and shorter intervals around the instant of interest, provided these values approach a single number. The instantaneous velocity is positive if the particle moves in the positive direction and negative in the opposite direction. Its value without sign is called the **magnitude** of the velocity, or the **speed**.

Geometrically the instantaneous velocity is the slope of the **tangent** to the graph of $x(t)$ at that time, that is, of the line through that point of the graph with the same steepness as the graph. If the graph has a corner, that is, a point where it forms an angle, the slope of the piece to its left and that of the piece to its right can differ. A **model** is a simplified description of the motion. A sharp-corner model describes the positions before and after a quick manoeuvre, but it does not give a single velocity at the idealised switching time.

Consider $x(t)=2t^2$, with $x$ in metres and $t$ in seconds. To find the slope at $t=1\,\mathrm s$, compute the average velocity between time $1$ and time $1+h$, where $h$ is a short duration.
$$
\frac{x(1+h)-x(1)}{h}
=\frac{2(1+h)^2-2}{h}
=\frac{2+4h+2h^2-2}{h}
=\frac{4h+2h^2}{h}=4+2h.
$$
In the last step the expression is divided by $h$, and the division is possible because $h$ is small but nonzero. As $h$ gets closer to zero, the ratio $4+2h$ approaches $4$, so the instantaneous velocity at $1\,\mathrm s$ is $4\,\mathrm{m/s}$. The graph shows the parabola $x=2t^2$ and its tangent at the point with coordinates $1\,\mathrm s$ and $2\,\mathrm m$.
:::

::grafico{f="2*x^2;4*x-2" punti="1,2,pieno" xmin=0 xmax=2 ymin=0 ymax=8.5 nomi="t (s),x (m)" titolo="The tangent at t equal to 1 s has slope 4 m/s"}

:::esempio{titolo="Estimating velocity from sampled positions"}
A sensor that records position only at certain times performs **sampling**. The sensor records positions of $4\,\mathrm m$, $9\,\mathrm m$ and $16\,\mathrm m$ at times $2\,\mathrm s$, $3\,\mathrm s$ and $4\,\mathrm s$.

- The slope for the interval before $3\,\mathrm s$ is $\dfrac{9-4}{3-2}\,\mathrm{m/s}=5\,\mathrm{m/s}$.
- The slope for the next interval is $\dfrac{16-9}{4-3}\,\mathrm{m/s}=7\,\mathrm{m/s}$.
- The two outer points give the estimate centred on the time $3\,\mathrm s$, which is $\dfrac{16-4}{4-2}\,\mathrm{m/s}=6\,\mathrm{m/s}$.

In the constant-acceleration model velocity changes linearly, that is, by equal amounts in equal times. Therefore the average velocity over the interval equals the velocity at the midpoint time. On the graph this shows in the fact that the secant through the points at $2\,\mathrm s$ and $4\,\mathrm s$ is parallel to the tangent at $3\,\mathrm s$. For arbitrary motion, sampling alone gives only average velocities. A stop or a reversal between two readings could be missing from the data. More closely spaced readings or a model of the motion are needed to judge how reliable the estimate of the instantaneous velocity is.

A further frame, at $t=3.5\,\mathrm s$, gives a position of $12.4\,\mathrm m$ with **uncertainty** $0.2\,\mathrm m$. The uncertainty means that the true position lies between $12.4-0.2=12.2\,\mathrm m$ and $12.4+0.2=12.6\,\mathrm m$.

- The model $x=t^2$ predicts $3.5^2=12.25\,\mathrm m$.
- Straight-line **interpolation**, that is, the segment joining the data at $3\,\mathrm s$ and at $4\,\mathrm s$, predicts $\dfrac{9+16}{2}\,\mathrm m=12.5\,\mathrm m$ halfway through the interval.

Both predictions lie within the reported interval, so both are **compatible** with the measurement. The extra frame makes the readings more closely spaced in time, but its precision still leaves both models compatible on this short interval.

If each of the outer readings, at $2\,\mathrm s$ and $4\,\mathrm s$, has a maximum position error of $0.2\,\mathrm m$, the estimated displacement can be off by at most $0.2+0.2=0.4\,\mathrm m$. The largest effect occurs when one reading is high and the other low. Over $2\,\mathrm s$ the error in the average velocity can therefore reach $\dfrac{0.4}{2}\,\mathrm{m/s}=0.2\,\mathrm{m/s}$. A zero-offset error, that is, a shifted zero of the instrument that adds the same amount to every reading, cancels in the difference. The calculated uncertainty concerns the measurement of the average velocity. Identifying it with the instantaneous velocity at $3\,\mathrm s$ also requires the model.

::grafico{f="x^2" curve="t,6*t-8,2,4;t,6*t-9,2.3,3.88" legenda="\text{Motion};\text{Secant};\text{Tangent}" punti="2,4,pieno;3,9,pieno;4,16,pieno" segmenti="3,3,3,9" xmin=1.8 xmax=4.3 ymin=2 ymax=18.5 nomi="t (s),x (m)" titolo="The secant through the two outer readings is parallel to the tangent at the middle time."}
:::

## Uniform motion

:::teorema{#uniforme titolo="Equation of motion at constant velocity"}
A motion is **uniform** when the velocity is constant. At constant velocity, equal time intervals produce equal displacements. If $x_0$ is the position at time $t_0$, in the time $t-t_0$ the particle moves by $v(t-t_0)$, so
$$
x(t)=x_0+v(t-t_0).
$$
This formula is called the **equation of motion**, because it gives the position at every instant. For example, with $x_0=9\,\mathrm m$ at $t_0=3\,\mathrm s$ and $v=2\,\mathrm{m/s}$, at time $8\,\mathrm s$ one has $x=9+2\cdot(8-3)=19\,\mathrm m$.

On the graph of $x$ against $t$ the equation of motion is a straight line with slope $v$. With negative velocity the line slopes down, because the coordinate decreases. A line parallel to the time axis has zero slope and represents rest. The **intercept** on the vertical axis is the value of $x$ at $t=0$, and it equals $x_0$ only if $t_0=0$. In the previous example $x(t)=9+2(t-3)=3+2t$, so the intercept is $3\,\mathrm m$ and differs from $x_0=9\,\mathrm m$.

Two particles meet when they have the same position at the same time. To locate the meeting, both equations of motion are written in the same frame and with the same clock. The coordinates are then set equal. The equations $x_A(t)=4+3t$ and $x_B(t)=22-t$ are written in **SI units**, that is, in the units of the International System: $x$ in metres and $t$ in seconds.
$$
4+3t=22-t\ \Longrightarrow\ 4t=18\ \Longrightarrow\ t=\frac{18}{4}\,\mathrm s=4.5\,\mathrm s.
$$
Substituting this time into both equations gives $x_A=4+3\cdot4.5=17.5\,\mathrm m$ and $x_B=22-4.5=17.5\,\mathrm m$. This check avoids confusing a meeting with two passes through the same position at different times. The same time can be found from the distance between the two particles. At the start it is $22-4=18\,\mathrm m$ and, since the particles move towards each other, it decreases every second by $3+1=4\,\mathrm m$, the sum of the two speeds. On the graph the meeting is the point where the two lines intersect.
:::

::grafico{f="4+3*x;22-x" punti="4.5,17.5,pieno" xmin=0 xmax=6 ymin=0 ymax=26 nomi="t (s),x (m)" titolo="The intersection means the same position at the same time"}

:::osservazione{#moto-a-tratti titolo="Successive stages"}
If motion has several stages, each stage has its own duration and initial data. The second stage starts from the position reached in the first. A particle starts from $x=0$.

- For three seconds at $4\,\mathrm{m/s}$ it moves by $4\cdot3=12\,\mathrm m$.
- In the next two seconds at velocity $-2\,\mathrm{m/s}$ the displacement is $(-2)\cdot2=-4\,\mathrm m$.

The total displacement is $12-4=8\,\mathrm m$ in $5\,\mathrm s$, so the average velocity is $\dfrac{8}{5}\,\mathrm{m/s}=1.6\,\mathrm{m/s}$. The arithmetic mean of the two velocities is instead $\dfrac{4+(-2)}{2}\,\mathrm{m/s}=1\,\mathrm{m/s}$, because it gives them equal weight even though they last different amounts of time.

When the equation of a stage uses time measured from the change of stage, the second stage starts with $t-t_1$, where $t_1$ is the switching time. In the motion just described $t_1=3\,\mathrm s$ and the second stage has equation $x=12-2(t-3)$, which gives $8\,\mathrm m$ at $t=5\,\mathrm s$. The equation of a single stage is called a **branch**. A solution obtained from a branch represents an event only if the calculated time lies in that branch's interval.
:::

:::esempio{titolo="Different durations over equal distances"}
A cyclist covers $600\,\mathrm m$ at $6\,\mathrm{m/s}$, then another $600\,\mathrm m$ in the same direction at $3\,\mathrm{m/s}$. The first segment takes $\dfrac{600}{6}\,\mathrm s=100\,\mathrm s$ and the second takes $\dfrac{600}{3}\,\mathrm s=200\,\mathrm s$. She covers $1200\,\mathrm m$ in $300\,\mathrm s$ in all, so her average velocity is $\dfrac{1200}{300}\,\mathrm{m/s}=4\,\mathrm{m/s}$. The arithmetic mean of the two velocities would be $\dfrac{6+3}{2}\,\mathrm{m/s}=4.5\,\mathrm{m/s}$ and would apply to segments of equal duration. Over equal distances, the slower segment takes more time and weighs more in the average. If the cyclist covered the second segment in the opposite direction, she would return to the start after $300\,\mathrm s$. Her average speed would remain $4\,\mathrm{m/s}$, while her average velocity would be zero.
:::

:::esempio{titolo="An encounter during a stop"}
Trolley A starts at $2\,\mathrm m$ and travels at $4\,\mathrm{m/s}$ until $3\,\mathrm s$, when it reaches $2+4\cdot3=14\,\mathrm m$. It remains still until $6\,\mathrm s$ and then returns at $-2\,\mathrm{m/s}$. Trolley B follows $x_B(t)=26-3t$ in SI units. The equations of A form three branches.

- Outward leg, for $0\leq t\leq3$: $x_A=2+4t$.
- Stop, for $3\leq t\leq6$: $x_A=14$.
- Return leg, for $t\geq6$: $x_A=14-2(t-6)=26-2t$.

$x_B$ is set equal to each branch and the interval is checked.

- Outward leg: $2+4t=26-3t$ gives $7t=24$, that is, $t=\dfrac{24}{7}\,\mathrm s\simeq3.4\,\mathrm s$. This time is beyond the duration of A's first leg, so the two trolleys do not meet on that leg.
- Stop: $14=26-3t$ gives $3t=12$, that is, $t=4\,\mathrm s$, which lies within the stop.
- Return leg: $26-2t=26-3t$ gives $t=0$, which falls outside the branch.

The only encounter is at four seconds, while A is stationary at $14\,\mathrm m$. Testing each interval also rules out an apparent second encounter obtained by extending the return line. On the graph the equation of A has the horizontal piece of the stop, and the point I is the encounter.

::grafico{f="2+4*x-2*((x-3)+abs(x-3))-((x-6)+abs(x-6));26-3*x" legenda="x_A;x_B" punti="3,14,pieno;4,14,pieno;6,14,pieno" segmenti="4,0,4,14" etichette="4.12,14.97,I" xmin=0 xmax=8.4 ymin=0 ymax=26.9 nomi="t (s),x (m)" titolo="A stops at 3 s and restarts at 6 s. The intersection I is at 4 s, during the stop."}
:::

## Acceleration

:::definizione{#accelerazione titolo="Change in velocity"}
The **average acceleration** over an interval is the change in velocity divided by the elapsed time.
$$
a_m=\frac{v_f-v_i}{t_f-t_i}
$$
Its unit is $\mathrm{m/s^2}$, read "metres per second squared". An acceleration of $2\,\mathrm{m/s^2}$ means that the velocity changes by $2\,\mathrm{m/s}$ every second. The **instantaneous acceleration** $a$ is the slope of the tangent on the velocity–time graph, which has time on the horizontal axis and velocity on the vertical one. Going from $v_i=4\,\mathrm{m/s}$ to $v_f=-2\,\mathrm{m/s}$ in $3\,\mathrm s$ gives
$$
a_m=\frac{-2-4}{3}\,\mathrm{m/s^2}=\frac{-6}{3}\,\mathrm{m/s^2}=-2\,\mathrm{m/s^2}.
$$
If the velocity is continuous, that is, it changes without jumps, it passes through zero inside the interval, because it goes from a positive value to a negative one. The final value, however, does not say at which time it crosses zero.

The sign of the acceleration tells how the signed velocity, that is, the velocity with its sign, changes.

- If $v$ and $a$ have the same sign, the magnitude of $v$ increases.
- If their signs are opposite, the magnitude decreases and the body slows down. An acceleration opposite to the velocity is called a **deceleration**. In braking problems its magnitude is written $d$, and with the axis along the motion the acceleration is $a=-d$.

With $v<0$ and $a<0$, the particle speeds up in the negative direction. For example, the velocity can go from $-3\,\mathrm{m/s}$ to $-9\,\mathrm{m/s}$. An instant with $v=0$ can mark a reversal with nonzero acceleration. On the graph of $v=4-2t$ the velocity is zero at $2\,\mathrm s$, while the acceleration is always $-2\,\mathrm{m/s^2}$.
:::

::grafico{f="4-2*x" punti="2,0,pieno;3,-2,pieno" xmin=0 xmax=3.3 ymin=-3 ymax=5 nomi="t (s),v (m/s)" titolo="Before 2 s the speed falls. It then rises in the negative direction"}

:::esempio{titolo="Constant acceleration from three positions"}
A cart has $x(0)=0\,\mathrm m$. Two photographs taken after $1\,\mathrm s$ and $2\,\mathrm s$ give positions of $7\,\mathrm m$ and $20\,\mathrm m$.

- The two one-second displacements are $7-0=7\,\mathrm m$ and $20-7=13\,\mathrm m$, so the average velocities are $7\,\mathrm{m/s}$ and $13\,\mathrm{m/s}$.
- If the acceleration is constant, these are the velocities at the midpoint times $0.5\,\mathrm s$ and $1.5\,\mathrm s$.
- The velocity increases by $13-7=6\,\mathrm{m/s}$ in $1\,\mathrm s$, so $a=6\,\mathrm{m/s^2}$.
- Going back half a second to $t=0$ subtracts $6\cdot0.5=3\,\mathrm{m/s}$ and gives $v_0=7-3=4\,\mathrm{m/s}$.

With these data the equation of motion, derived in the section on uniformly accelerated motion, is $x(t)=4t+3t^2$ in SI units. It reproduces both photographs, because $x(1)=4+3=7\,\mathrm m$ and $x(2)=8+12=20\,\mathrm m$. A fourth photograph would allow the model to be tested over another interval.

Suppose the fourth picture at $t=3\,\mathrm s$ gives $38.7\,\mathrm m$ with uncertainty $0.1\,\mathrm m$. For this check the previous readings, treated as exact, are taken as the reference for the model.

| $t$ (s) | Measured $x$ (m) | Predicted $x$ (m) |
| ---: | ---: | ---: |
| 0 | 0 | 0 |
| 1 | 7 | 7 |
| 2 | 20 | 20 |
| 3 | $38.7\pm0.1$ | 39 |

The model predicts $4\cdot3+3\cdot3^2=12+27=39\,\mathrm m$ for the new measurement. The **gap**, that is, the difference between predicted and measured value, is $39-38.7=0.3\,\mathrm m$. It exceeds the stated uncertainty, so $39\,\mathrm m$ falls outside the interval from $38.6\,\mathrm m$ to $38.8\,\mathrm m$. If the times are correct, the fourth picture is inconsistent with the **extrapolation**, that is, with using the model outside the range of the data from which it was derived. Checking the clocks and adding further readings separates a timing error from a change of acceleration. The graph zooms in near $3\,\mathrm s$, showing the reading of $38.7\,\mathrm m$, its error bar and the predicted value of $39\,\mathrm m$ marked by the open circle.

::grafico{f="4*x+3*x^2" legenda="x=4t+3t^2" punti="3,38.7,pieno;3,39,vuoto" linee="3,38.6 3,38.8;2.994,38.6 3.006,38.6;2.994,38.8 3.006,38.8" etichette="3.012,38.72,38.7 m;2.964,39.09,39 m" xmin=2.93 xmax=3.07 ymin=37.5 ymax=40.6 nomi="t (s),x (m)" titolo="Near 3 s the model passes above the error bar of the fourth reading."}
:::

## Equations for uniformly accelerated motion

:::teorema{#uniformemente-accelerato titolo="Position and velocity at constant acceleration"}
A motion with constant acceleration is called **uniformly accelerated**. With $t$ measured from the start of the stage, and with $x_0$ and $v_0$ the position and velocity at time $t=0$,
$$
v=v_0+at,\qquad x=x_0+v_0t+\tfrac12at^2,\qquad
v^2=v_0^2+2a(x-x_0).
$$
The first relation represents the change in velocity, which is $at$ in $t$ seconds.

For the second, the velocity changes linearly, so its mean value is $\dfrac{v_0+v}{2}$. The displacement is the average velocity multiplied by $t$. Substituting $v=v_0+at$ gives
$$
x-x_0=\frac{v_0+v}{2}\,t=\frac{v_0+v_0+at}{2}\,t=v_0t+\tfrac12at^2.
$$
For the third, both sides of the first relation, written as $v-v_0=at$, are multiplied by the factor $v+v_0$. The left-hand side becomes $v^2-v_0^2$, because the product of a sum and a difference is the difference of the squares. On the right-hand side the product $(v+v_0)t$ appears, which by the second relation equals $2(x-x_0)$.
$$
v^2-v_0^2=a\,(v+v_0)\,t=2a(x-x_0).
$$
This relation does not contain time and is called the time-free relation.

The last equation contains $v^2$. A square root gives the magnitude but not the sign. For example, $v^2=25\,\mathrm{m^2/s^2}$ holds both for $v=5\,\mathrm{m/s}$ and for $v=-5\,\mathrm{m/s}$. An object thrown upwards passes the same height on the way up and on the way down. To distinguish the two events, the time or further information about direction is needed.

For braking from $v_0=20\,\mathrm{m/s}$ to $v=0$ at acceleration $-5\,\mathrm{m/s^2}$, the following two calculations hold.

- From the first relation $0=20-5t$, so the braking time is $t=4\,\mathrm s$.
- From the time-free relation $0=20^2+2\cdot(-5)\cdot(x-x_0)$, so the braking distance is $x-x_0=\dfrac{400}{10}\,\mathrm m=40\,\mathrm m$.

The **reaction time** is the time between the moment the driver sees the obstacle and the start of braking. If it lasts one second, the vehicle covers it at constant velocity and adds another $20\cdot1=20\,\mathrm m$. After stopping, the braking model is replaced by a rest stage, with $v=0$, if the vehicle stays still. On the velocity–time graph the rectangle corresponds to the reaction time and the triangle to the braking.
:::

::grafico{curve="t,20,0,1;t,25-5*t,1,5" area="20;0;0;1|25-5*x;0;1;5" segmenti="1,0,1,20;5,0,6,0" punti="1,20,pieno;5,0,pieno" xmin=0 xmax=6.2 ymin=-0.5 ymax=24 nomi="t (s),v (m/s)" titolo="The reaction interval contributes a rectangle before the braking triangle"}

:::esempio{titolo="Two passes through the same height"}
A ball leaves the ground at $15\,\mathrm{m/s}$ upwards. The symbol $g$ denotes the magnitude of the acceleration due to gravity, which near the ground is about $9.81\,\mathrm{m/s^2}$; here $g=10\,\mathrm{m/s^2}$ is used. With the axis pointing upwards the acceleration is $a=-10\,\mathrm{m/s^2}$, so the height in metres is $x(t)=15t-5t^2$ when time is expressed in seconds. To find when it reaches $10\,\mathrm m$, the equation is solved, divided by $-5$ in the second step.
$$
15t-5t^2=10,\qquad t^2-3t+2=0,\qquad (t-1)(t-2)=0.
$$
The two passes occur at $t=1\,\mathrm s$ and $t=2\,\mathrm s$. The velocity equation $v(t)=15-10t$ gives $5\,\mathrm{m/s}$ upwards and $-5\,\mathrm{m/s}$ in the chosen direction, respectively. At the same height the magnitudes agree, while the slope of the curve changes sign, positive at P and negative at Q. The maximum height A is reached when $v=0$, that is, at $t=1.5\,\mathrm s$, and equals $15\cdot1.5-5\cdot1.5^2=11.25\,\mathrm m$. The time $1.5\,\mathrm s$ is halfway between the two passes, because the parabola is symmetric about the time of maximum height. If the ball is caught on its first pass, the flight model ends there and the second root describes only the path it would have followed without being caught.

::grafico{curve="t,15*t-5*t^2,0,3" punti="1,10,pieno;2,10,pieno;1.5,11.25,pieno" segmenti="1,0,1,10;2,0,2,10;1,10,2,10" etichette="0.81,10.53,P;2.16,10.05,Q;1.52,11.8,A" xmin=0 xmax=3.32 ymin=0 ymax=12.8 nomi="t (s),x (m)" titolo="The position is the same at P and Q. The tangent points upwards at P and downwards at Q."}
:::

## Reading graphs and free fall

:::osservazione{#grafici-caduta titolo="Slopes and areas"}
On a velocity–time graph, the **signed area** between the curve and the time axis gives the displacement. Area above the axis, where $v>0$, is positive, and area below it, where $v<0$, is negative. The reason is clear in a stage at constant velocity, where the displacement $v\,\Delta t$ is the area of the rectangle with base $\Delta t$ and height $v$. To find the distance travelled, the magnitudes of the areas are added.

If $v$ falls linearly from $4$ to $-2\,\mathrm{m/s}$ in $3\,\mathrm s$, it loses $2\,\mathrm{m/s}$ every second and therefore crosses zero at $2\,\mathrm s$.

- The positive triangle has area $\tfrac12\cdot2\cdot4=4\,\mathrm m$.
- The negative triangle has area $\tfrac12\cdot1\cdot(-2)=-1\,\mathrm m$.

The displacement is $4-1=3\,\mathrm m$ and the distance is $4+1=5\,\mathrm m$.

Near the ground and with air resistance neglected, a body in **free fall** accelerates downwards with magnitude $g$, which is about $9.81\,\mathrm{m/s^2}$ and is sometimes rounded to $10\,\mathrm{m/s^2}$ in calculations. If the axis, labelled $y$, points upwards, $a=-g$. For an object released from rest at height $h$, take $y(0)=h$ and $v_0=0$, so $y(t)=h-\tfrac12gt^2$. At the ground the height is zero.
$$
0=h-\tfrac12gt^2\ \Longrightarrow\ t^2=\frac{2h}{g}\ \Longrightarrow\ t=\sqrt{\frac{2h}{g}}
$$
The positive root is chosen, because the time elapsed since release is positive. With $h=20\,\mathrm m$ and $g=10\,\mathrm{m/s^2}$ one obtains $t=\sqrt{4}\,\mathrm s=2\,\mathrm s$. This model applies until contact with the ground.

Two objects released from the same height with the same initial conditions land together in the model, because the equation $y=h-\tfrac12gt^2$ does not contain the mass. If one is released a second later, at the second release the first already has a velocity of magnitude $g\cdot1\,\mathrm s$, about $10\,\mathrm{m/s}$, and has already fallen about $5\,\mathrm m$. From then on both have the same acceleration, so the difference of their velocities, that is, the **relative velocity**, stays constant and the distance between them keeps growing. Comparing acceleration alone does not show that their separation stays constant.
:::

:::esempio{titolo="Signed area when velocity reverses"}
On a track, the velocity changes linearly from $6\,\mathrm{m/s}$ to $-2\,\mathrm{m/s}$ in $4\,\mathrm s$. The change is $-8\,\mathrm{m/s}$ in $4\,\mathrm s$, so the velocity loses $2\,\mathrm{m/s}$ every second and reaches zero after three seconds.

- The triangle above the axis has base $3\,\mathrm s$ and height $6\,\mathrm{m/s}$, giving a displacement of $\tfrac12\cdot3\cdot6=9\,\mathrm m$.
- The triangle below the axis has base $1\,\mathrm s$ and height of magnitude $2\,\mathrm{m/s}$, giving a displacement of $-\tfrac12\cdot1\cdot2=-1\,\mathrm m$.

The total displacement is $9-1=8\,\mathrm m$ and the distance travelled is $9+1=10\,\mathrm m$. Multiplying the mean of the initial and final velocities, $\dfrac{6+(-2)}{2}\,\mathrm{m/s}=2\,\mathrm{m/s}$, by the duration of $4\,\mathrm s$ also gives $8\,\mathrm m$, because velocity varies linearly. To find the distance, instead, the calculation is split where the velocity reaches zero.

The area gives the final position when the initial coordinate is known. If the point starts at $x(0)=2\,\mathrm m$, it ends at $2+8=10\,\mathrm m$. At the reversal its coordinate is $2+9=11\,\mathrm m$, since only the positive triangle has been accumulated up to that time. The position therefore reaches a maximum at $t=3\,\mathrm s$ even though the acceleration remains constant.

::grafico{curve="t,6-2*t,0,4" area="6-2*x;0;0;3|0;6-2*x;3;4" punti="0,6,pieno;3,0,pieno;4,-2,pieno" segmenti="4,0,4,-2" etichette="0.91,1.25,+9 m;3.42,-0.38,−1 m" xmin=0 xmax=4.23 ymin=-3 ymax=7 nomi="t (s),v (m/s)" titolo="The two triangles contribute 9 m and −1 m to the displacement."}
:::
