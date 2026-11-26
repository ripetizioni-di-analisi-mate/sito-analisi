---
titolo: Acceleration and free fall
sommario: How velocity changes, how to calculate position and time for motion with constant acceleration, and how to describe braking, falling, and vertical launches.
---

## Changes in velocity

:::definizione{#accelerazione-media titolo="Average acceleration"}
An object can move along a straight road while its velocity changes. To describe the change, we compare its final and initial velocities and consider how much time has elapsed.

**Average acceleration** is the change in velocity divided by the time interval over which the change takes place. If $v_i$ is the initial velocity, $v_f$ the final velocity, and $\Delta t$ the elapsed time, then
$$
a_m = \frac{v_f-v_i}{\Delta t},
\qquad \Delta t>0.
$$
The symbol $\Delta$ denotes a difference. The velocities are components along an axis with a chosen positive direction, so they can be positive or negative. Acceleration is measured in $\mathrm{m/s^2}$, read as meters per second squared. If an acceleration of $2\,\mathrm{m/s^2}$ stays constant, the velocity increases by $2\,\mathrm{m/s}$ each second.

For example, a cart's velocity changes from $3\,\mathrm{m/s}$ to $11\,\mathrm{m/s}$ in $4\,\mathrm{s}$. The change in velocity is $8\,\mathrm{m/s}$, so
$$
a_m=\frac{11-3}{4}\,\mathrm{m/s^2}=2\,\mathrm{m/s^2}.
$$
This value describes the overall change over the interval. To determine how the velocity varies during those four seconds, we need more information about the motion.
:::

:::osservazione{#segni titolo="Signs of velocity and acceleration"}
The sign of the velocity indicates the direction of motion. The sign of the acceleration indicates the direction of the change in velocity. To determine whether an object is speeding up or slowing down, we compare its velocity and acceleration at the same instant. The following rules describe an entire interval if both signs stay as indicated. The average acceleration alone does not describe every change in velocity within the interval.

- If velocity and acceleration have the same sign, the magnitude of the velocity increases.
- If velocity and acceleration have opposite signs, the magnitude of the velocity decreases until the object stops, if a stop occurs.

A cart whose velocity changes from $-2\,\mathrm{m/s}$ to $-8\,\mathrm{m/s}$ in $3\,\mathrm{s}$ has an average acceleration of $-2\,\mathrm{m/s^2}$. The magnitude of its velocity increases from $2$ to $8\,\mathrm{m/s}$, so its speed increases. A negative sign alone does not indicate braking.
:::

## Motion with constant acceleration

:::definizione{#accelerazione-costante titolo="Uniformly accelerated motion"}
Motion along a straight line is **uniformly accelerated** if the acceleration remains constant over the interval considered. The velocity then changes by the same amount in equal time intervals.

Set $t=0$ at the start of the interval and let $v_0$ denote the initial velocity. Starting from $a=\dfrac{v-v_0}{t}$ for $t>0$, multiplying by $t$ and adding $v_0$ gives
$$
v=v_0+at.
$$
The formula also holds at $t=0$, when it gives $v=v_0$. The product $at$ has units of velocity because $\mathrm{m/s^2}$ multiplied by $\mathrm{s}$ gives $\mathrm{m/s}$.

For example, with $v_0=2\,\mathrm{m/s}$ and $a=3\,\mathrm{m/s^2}$, the velocities after $1$, $2$, and $3\,\mathrm{s}$ are $5$, $8$, and $11\,\mathrm{m/s}$, respectively. The increase each second is $3\,\mathrm{m/s}$. The velocity–time graph is a straight line whose slope gives the acceleration.

::grafico{f="2+3*x+0*sqrt(x*(3-x))" punti="0,2,pieno;1,5,pieno;2,8,pieno;3,11,pieno" xmin=-1 xmax=4 ymin=-1 ymax=13 nomi="t,v" legenda="v=2+3t" titolo="Velocity in $\mathrm{m/s}$ and time in seconds. The velocity increases by $3\,\mathrm{m/s}$ each second from $0$ to $3\,\mathrm{s}$"}
:::

:::osservazione{#tempo-da-velocita titolo="Time needed for a change in velocity"}
If $a$ is constant and nonzero, solving the velocity equation for time gives
$$
t=\frac{v-v_0}{a}.
$$
For an object whose velocity changes from $4\,\mathrm{m/s}$ to $10\,\mathrm{m/s}$ with an acceleration of $2\,\mathrm{m/s^2}$, the time is $t=\dfrac{10-4}{2}\,\mathrm{s}=3\,\mathrm{s}$. A negative time would indicate an instant before the chosen time origin. In a problem about motion after the start, we consider nonnegative times.
:::


:::osservazione{titolo="The time origin for a later interval"}
When we study motion starting at a time $t_0$ other than zero, the formulas use the elapsed time $t-t_0$. The initial velocity $v_0$ and initial position $x_0$ both refer to that starting time.
$$
v=v_0+a(t-t_0),
\qquad
x=x_0+v_0(t-t_0)+\frac{1}{2}a(t-t_0)^2.
$$
For example, if the acceleration begins when the clock reads $5\,\mathrm{s}$, then by the time it reads $8\,\mathrm{s}$, three seconds of accelerated motion have elapsed. Using eight seconds would describe a longer interval than the one given. Resetting the clock to zero at the start of this stage lets us write $t$ directly in place of $t-t_0$. The two descriptions give the same results if the initial data refer to the same physical situation.
:::

## Position in accelerated motion

::::teorema{#legge-oraria titolo="Position as a function of time with constant acceleration"}
If at time $t=0$ an object has position $x_0$ and velocity $v_0$, and its acceleration $a$ is constant, then its position at time $t$ is
$$
x=x_0+v_0t+\frac{1}{2}at^2.
$$
The difference $x-x_0$ is the displacement. The term $v_0t$ gives the displacement the object would have if it maintained its initial velocity. The term $\dfrac{1}{2}at^2$ accounts for the change in velocity.

:::dimostrazione
We use the average velocity over an interval in which the velocity varies linearly. In this case, the average velocity is the arithmetic mean of its initial and final values,
$$
v_m=\frac{v_0+v}{2}.
$$
This follows because, on the velocity–time graph, the displacement is the signed area of the trapezoid between the line and the time axis. Multiplying the average of the two heights by the base gives the area. Substituting $v=v_0+at$ gives
$$
\begin{aligned}
x-x_0 &= v_m t \\[6pt]
&=\frac{v_0+v_0+at}{2}\,t \\[6pt]
&=v_0t+\frac{1}{2}at^2.
\end{aligned}
$$
If the velocity changes sign, we add the areas above the axis and subtract those below it, so the same displacement equation still holds.
:::
::::

:::esempio{titolo="A cart already moving at the start"}
A cart is initially at $x_0=1\,\mathrm{m}$, with velocity $v_0=2\,\mathrm{m/s}$ and constant acceleration $a=2\,\mathrm{m/s^2}$. After $3\,\mathrm{s}$, its position is
$$
\begin{aligned}
x&=1\,\mathrm{m}+2\,\mathrm{m/s}\cdot3\,\mathrm{s}
+\frac{1}{2}\cdot2\,\mathrm{m/s^2}\cdot(3\,\mathrm{s})^2\\[6pt]
&=1\,\mathrm{m}+6\,\mathrm{m}+9\,\mathrm{m}\\[6pt]
&=16\,\mathrm{m}.
\end{aligned}
$$
The displacement is $16-1=15\,\mathrm{m}$. The final position and displacement differ because the object's starting point is away from the origin.

::grafico{f="1+2*x+x^2+0*sqrt(x*(3-x))" punti="0,1,pieno;1,4,pieno;2,9,pieno;3,16,pieno" xmin=-1 xmax=4 ymin=-1 ymax=18 nomi="t,x" legenda="x=1+2t+t^2" titolo="Position in meters and time in seconds. The displacements in successive one-second intervals are $3$, $5$, and $7\,\mathrm{m}$"}
:::

## Velocity and displacement when time is unknown

::::teorema{#velocita-spostamento titolo="Relating the two velocities to displacement"}
For motion with constant acceleration, we can relate the initial and final velocities to the displacement even when the time is unknown. The relation is
$$
v^2-v_0^2=2a\Delta x.
$$
Here $\Delta x=x-x_0$ denotes the displacement along the chosen axis. Velocity and acceleration retain their signs relative to that axis. This relation is useful, for example, when the distance available for braking is known and we want to find the acceleration needed to stop.

:::dimostrazione
Express the displacement in terms of the arithmetic mean of the velocities, which applies because the acceleration is constant. Then multiply by $2a$ and use $at=v-v_0$ to obtain
$$
\begin{aligned}
\Delta x&=\frac{v_0+v}{2}\,t,\\[6pt]
2a\Delta x&=(v_0+v)at,\\[6pt]
&=(v_0+v)(v-v_0),\\[6pt]
&=v^2-v_0^2.
\end{aligned}
$$
When the last product is expanded into four terms, the two cross terms $v_0v$ and $-vv_0$ cancel. This leaves the square of the final velocity minus the square of the initial velocity.
:::
::::

:::esempio{titolo="Acceleration needed to stop within a given distance"}
A cart traveling at $8\,\mathrm{m/s}$ comes to rest after $16\,\mathrm{m}$ with constant acceleration. We take the direction of motion as positive, so the displacement is positive and the final velocity is zero. This gives
$$
\begin{aligned}
a&=\frac{v^2-v_0^2}{2\Delta x}\\[6pt]
&=\frac{0-(8\,\mathrm{m/s})^2}{2\cdot16\,\mathrm{m}}\\[6pt]
&=-2\,\mathrm{m/s^2}.
\end{aligned}
$$
The negative sign is consistent with braking. From the velocity equation, the time to stop is $4\,\mathrm{s}$. The average velocity is $4\,\mathrm{m/s}$, so their product gives the stated distance of $16\,\mathrm{m}$.
:::

:::osservazione{titolo="Choosing the sign after taking a square root"}
When the relation gives $v^2$, taking its square root gives the magnitude of the velocity. The direction of motion then determines the sign of the component $v$. For example, if an object falls $5\,\mathrm{m}$ from rest, using $g=10\,\mathrm{m/s^2}$ gives a final speed of $10\,\mathrm{m/s}$. With the axis positive downward, we write $v=10\,\mathrm{m/s}$. With the axis positive upward, we write $v=-10\,\mathrm{m/s}$. Both descriptions represent the same motion. The signs of the components change because the positive direction of the chosen axis changes.
:::

## Displacement from a velocity–time graph

:::osservazione{#area-grafico titolo="Signed area and displacement"}
On a velocity–time graph, a rectangle with base $\Delta t$ and height $v$ has area $v\Delta t$. The product has units of $\mathrm{m/s}\cdot\mathrm{s}=\mathrm{m}$, so the area represents a displacement. For constant velocity, the rectangle gives exactly $\Delta x=v\Delta t$.

If the velocity increases linearly from zero, the region is a triangle. Its area is half the product of the base and height. An object whose velocity increases uniformly from $0$ to $6\,\mathrm{m/s}$ in $3\,\mathrm{s}$ has displacement
$$
\Delta x=\frac{3\,\mathrm{s}\cdot6\,\mathrm{m/s}}{2}=9\,\mathrm{m}.
$$
Regions above the time axis contribute positively, and those below contribute negatively. To find the distance traveled, we add the magnitudes of the areas for all segments. This distinguishes displacement from the length of the path when the object doubles back.

::grafico{f="2*x+0*sqrt(x*(3-x))" area="2*x;0;0;3" punti="0,0,pieno;3,6,pieno" segmenti="3,0,3,6" xmin=-1 xmax=4 ymin=-1 ymax=8 nomi="t,v" legenda="v=2t" titolo="With time in seconds and velocity in $\mathrm{m/s}$, the area of the triangle represents a displacement of $9\,\mathrm{m}$"}
:::

## Braking and stopping

:::teorema{#frenata titolo="Braking time and braking distance"}
Consider an object initially moving in the positive direction with velocity $v_0>0$ and slowing down with constant acceleration $a<0$. Its velocity is zero when it stops, so
$$
0=v_0+at_{\mathrm{arresto}},
\qquad
 t_{\mathrm{arresto}}=-\frac{v_0}{a}.
$$
During braking, the average velocity is $\dfrac{v_0}{2}$, so the braking distance is
$$
s_{\mathrm{frenata}}=\frac{v_0}{2}\,t_{\mathrm{arresto}}
=-\frac{v_0^2}{2a}.
$$
Both results are positive because $a$ is negative. With $v_0=12\,\mathrm{m/s}$ and $a=-3\,\mathrm{m/s^2}$, we obtain $t_{\mathrm{arresto}}=4\,\mathrm{s}$ and $s_{\mathrm{frenata}}=24\,\mathrm{m}$. These relations describe braking *up to the instant the object stops*.
:::

:::attenzione{titolo="The interval over which the equation applies"}
Extending the formula $v=12-3t$, with velocity in $\mathrm{m/s}$ and time in seconds, to $t=5\,\mathrm{s}$ gives $v=-3\,\mathrm{m/s}$. This value describes backward motion, whereas a vehicle may remain at rest after braking. In that case, the braking equation applies only until $4\,\mathrm{s}$, and the velocity is zero at all later times. The equations of motion apply over the interval in which the given assumptions hold.
:::

## Falling from rest

:::teorema{#caduta-libera titolo="Free fall near Earth's surface"}
An object is in **free fall** when gravity is the only force acting on it. Near Earth's surface, if the height is small compared with the size of Earth and air resistance is negligible, the acceleration is constant, vertical, and directed downward. Its magnitude is approximately $g=9.81\,\mathrm{m/s^2}$.

Take the axis to point downward, with its origin at the release point. If the object starts from rest, then after a time $t$ its velocity and the distance it has fallen are
$$
v=gt,
\qquad
h=\frac{1}{2}gt^2.
$$
Mass does not appear in these relations. Two objects released simultaneously from the same height fall in the same way if air resistance is negligible for both. A feather falling through air requires a model that also accounts for air resistance.
:::

:::esempio{titolo="Time to fall from a given height"}
Starting from $h=\dfrac{1}{2}gt^2$, multiplying by $2$ and dividing by $g$ gives $t^2=\dfrac{2h}{g}$. The time is nonnegative, so
$$
t=\sqrt{\frac{2h}{g}}.
$$
The square root of a nonnegative number is the nonnegative number that gives the original number when squared. For $h=20\,\mathrm{m}$, using $g=10\,\mathrm{m/s^2}$ gives $4\,\mathrm{s^2}$ for the square of the time, so $t=2\,\mathrm{s}$. The velocity just before the object reaches the ground is $v=10\cdot2=20\,\mathrm{m/s}$ downward. The model ends at the first contact with the ground.
:::

## Launching an object upward

:::teorema{#lancio-verticale titolo="Ascent and descent using the same axis"}
Take the vertical axis to be positive upward, with its origin at the launch point. If air resistance is negligible, an object launched upward with initial velocity $v_0>0$ has acceleration $a=-g$ throughout its flight. Its equations of motion are
$$
v=v_0-gt,
\qquad
 y=v_0t-\frac{1}{2}gt^2.
$$
During ascent the velocity is positive and decreases. It is zero at the highest point and negative during descent. The acceleration remains $-g$ even at the highest point because gravity continues to act.

Setting $v=0$ gives the time to reach the highest point, $t_s=\dfrac{v_0}{g}$. Substituting this time into the position equation gives the maximum height above the launch point, $h_{\max}=\dfrac{v_0^2}{2g}$. The object returns to its launch height at $t_r=\dfrac{2v_0}{g}$, provided it can reach that height without encountering an obstacle.
:::

:::esempio{titolo="A launch with an initial velocity of ten meters per second"}
Using $g=10\,\mathrm{m/s^2}$ and $v_0=10\,\mathrm{m/s}$ gives an ascent time of $1\,\mathrm{s}$ and a maximum height of $5\,\mathrm{m}$. After $2\,\mathrm{s}$, the object returns to its initial height with velocity $-10\,\mathrm{m/s}$. Over this interval, the total displacement is zero, while the distance traveled is $5+5=10\,\mathrm{m}$.

::grafico{f="10*x-5*x^2+0*sqrt(x*(2-x))" punti="0,0,pieno;1,5,pieno;2,0,pieno" xmin=-1 xmax=3 ymin=-1 ymax=7 nomi="t,y" legenda="y=10t-5t^2" titolo="Height in meters and time in seconds. The object reaches $5\,\mathrm{m}$ at $1\,\mathrm{s}$ and returns to its initial height at $2\,\mathrm{s}$"}
:::
