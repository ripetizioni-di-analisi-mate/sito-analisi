---
titolo: Straight-line motion with constant acceleration
sommario: Acceleration, graphs, the position equation, vehicle stopping and vertical motion under gravity.
---

## Acceleration

:::definizione{#accelerazione titolo="Change in velocity"}
**Average acceleration** along the axis is the change in velocity divided by elapsed time. Let $v_i$ and $v_f$ be the signed velocities at the two endpoints and $\Delta t=t_f-t_i>0$ the duration.
$$
a_m=\frac{v_f-v_i}{\Delta t}.
$$
Its SI unit is $\mathrm{(m/s)/s}=\mathrm{m/s^2}$. For example, $2\,\mathrm{m/s^2}$ means that velocity increases by $2\,\mathrm{m/s}$ each second if acceleration is constant. The sign refers to the change in velocity. A cyclist can travel in the negative direction while velocity changes from $-8$ to $-2\,\mathrm{m/s}$. The average acceleration is then positive and the magnitude of velocity decreases.
:::

:::esempio{titolo="Acceleration sign from the slope"}
Velocity changes from $-8\,\mathrm{m/s}$ to $-2\,\mathrm{m/s}$ in $3\,\mathrm{s}$. The change is $-2-(-8)=6\,\mathrm{m/s}$, so $a_m=2\,\mathrm{m/s^2}$. With constant acceleration, velocity is negative throughout this stage. The object therefore moves in the negative direction and slows down.

::grafico{f="-8+2*x" xmin=0 xmax=3 ymin=-9 ymax=2 punti="0,-8,pieno,A;3,-2,pieno,B" nomi="t (s),v (m/s)" titolo="Positive slope and negative velocity throughout the stage."}
:::

:::attenzione
The endpoint velocities determine the average. Constant acceleration is an additional assumption if that average is to apply at every instant. A car may have zero average acceleration on a journey that started at rest, involved motion and ended at rest.
:::

## The velocity equation

:::teorema{#velocita titolo="Velocity under constant acceleration"}
When acceleration $a$ is constant, it equals the average in every interval. If $v_0$ is the initial velocity and $t$ is the elapsed time since that instant, multiplying by $t$ gives
$$
v(t)=v_0+at.
$$
The velocity–time graph is a straight line. Its slope is $a$ and its value at $t=0$ is $v_0$. For $a=0$ the line is horizontal and the familiar uniform motion is recovered. When $v$ and $a$ have the same sign, the magnitude of velocity increases. When they have opposite signs, it decreases until the object possibly reaches $v=0$.
:::

:::esempio{titolo="A velocity that changes sign"}
For a cart with $v_0=6\,\mathrm{m/s}$ and $a=-2\,\mathrm{m/s^2}$ the velocity is $v=6-2t$, in SI units. It reaches zero after three seconds. If acceleration remains active after that point, the cart moves in the negative direction. At $t=5\,\mathrm{s}$ its velocity is $-4\,\mathrm{m/s}$. During this second stage speed increases because both velocity and acceleration are negative.

::grafico{f="6-2*x" xmin=0 xmax=5 ymin=-5 ymax=7 punti="0,6,pieno,A;3,0,pieno,B;5,-4,pieno,C" nomi="t (s),v (m/s)" titolo="B marks reversal. Speed decreases before B and increases after B."}
:::

## The position equation

::::teorema{#posizione titolo="Position under constant acceleration"}
The initial position is $x_0$. During the constant-acceleration interval, position at time $t$ is
$$
x(t)=x_0+v_0t+\frac12at^2.
$$

:::dimostrazione
On a velocity–time graph, displacement is the signed area relative to the time axis. The line $v=v_0+at$ is the sum of the horizontal line $v_0$ and the linear change $at$. The first contributes a rectangle of area $v_0t$ and the second a triangle of signed area $\dfrac12t(at)$. Their sum is $\Delta x$. Adding $x_0$ gives the equation. The argument also applies when the graph crosses the axis because the areas are added with their signs.
:::
::::

:::esempio{titolo="Starting from rest"}
A skater starts from rest with $a=2\,\mathrm{m/s^2}$. After $2\,\mathrm{s}$ the velocity is $4\,\mathrm{m/s}$ and displacement is the area of the triangle, $\dfrac12\cdot2\cdot4\,\mathrm m=4\,\mathrm m$. After $4\,\mathrm{s}$ the velocity is $8\,\mathrm{m/s}$ and displacement is $16\,\mathrm m$. Doubling the duration doubles the final speed and quadruples the distance from rest because both base and height double.

::grafico{f="2*x" area="2*x;0;0;4" xmin=0 xmax=4.5 ymin=0 ymax=9 punti="2,4,pieno,A;4,8,pieno,B" nomi="t (s),v (m/s)" titolo="The area of the triangle over four seconds is 16 m."}
:::

:::osservazione{#area-velocita titolo="Averaging endpoint velocities"}
Under constant acceleration, the average velocity is $\dfrac{v_0+v_f}{2}$. Calculate displacement as the area of a trapezoid with signed bases $v_0$ and $v_f$, or substitute $at=v_f-v_0$ in the position equation. If the object reverses in the interval, the average includes contributions of opposite sign. For distance, find the reversal at $v=0$ and add the magnitudes of the two displacements.
:::

## A relation without time

:::teorema{#senza-tempo titolo="Velocity and displacement"}
If displacement is known but the time is missing, combine the two constant-acceleration equations to obtain
$$
v_f^2-v_0^2=(v_f-v_0)(v_f+v_0)=at(v_f+v_0)=2a\Delta x.
$$
The squared relation gives the magnitude of velocity, while choosing its sign requires knowing the direction of motion at that instant. A position can be reached on both outward and return legs. The relation gives the same speed at both crossings.
:::

:::esempio{titolo="Braking over a known distance"}
A vehicle travels at $12\,\mathrm{m/s}$ and loses $2\,\mathrm{m/s}$ each second. After moving $20\,\mathrm{m}$ during braking, $v^2=12^2+2(-2)\cdot20=64$, in SI units. Since the vehicle still moves in the positive direction, its velocity is $8\,\mathrm{m/s}$. The velocity equation gives $t=2\,\mathrm{s}$ and the position equation then reproduces the given displacement.
:::

## Braking and reaction time

:::osservazione{#frenata titolo="Motion up to rest"}
Choose the initial direction of the vehicle as positive and let $b>0$ be the magnitude of deceleration. If braking occurs at constant $a=-b$ until rest, setting $v=0$ gives $t_a=\dfrac{v_0}{b}$. On that same leg the timeless relation gives the braking distance $s_f=\dfrac{v_0^2}{2b}$. The braking model ends at rest, unless another force then causes reversal. Extending the same velocity–time line beyond the stop would describe an artificial reverse motion.

Before the brakes act, the driver's reaction takes time $t_r$. In the two-stage model the vehicle maintains $v_0$ during the reaction and covers $s_r=v_0t_r$. The total distance is $s_r+s_f$. Doubling $v_0$ at fixed $b$ and $t_r$ doubles the reaction distance and quadruples the braking distance.
:::

:::esempio{titolo="A rectangle and a triangle in the total distance"}
For $v_0=20\,\mathrm{m/s}$, $t_r=1\,\mathrm{s}$ and $b=5\,\mathrm{m/s^2}$, the reaction distance is $20\,\mathrm m$. Braking lasts $4\,\mathrm s$ and covers $\dfrac12\cdot4\cdot20\,\mathrm m=40\,\mathrm m$. The vehicle stops $5\,\mathrm s$ after noticing the danger and travels $60\,\mathrm m$ in total.

::grafico{f="20-5*max(0,x-1)" area="20;0;0;1|25-5*x;0;1;5" xmin=0 xmax=5 ymin=0 ymax=23 punti="1,20,pieno,R;5,0,pieno,F" nomi="t (s),v (m/s)" titolo="Before R is the reaction interval. Braking takes place from R to F."}
:::

## Falling and vertical launch

:::teorema{#caduta titolo="Vertical motion near Earth"}
Ignoring air resistance and changes in gravity with height, acceleration points vertically down. Taking upward as positive gives $a=-g$. Use $g\simeq9.81\,\mathrm{m/s^2}$ near the surface, or use the value stated in the problem. With $y_0$ the initial height and $v_0$ the signed initial velocity, the equations are
$$
v(t)=v_0-gt,\qquad y(t)=y_0+v_0t-\frac12gt^2.
$$
For an object released from rest at height $h$ above the ground, $v_0=0$ and seek $y=0$. The only positive duration is $t=\sqrt{\dfrac{2h}{g}}$. For an upward launch, $v=0$ at the highest point. Acceleration there remains $-g$ and the object begins to fall. The time to the highest point is $\dfrac{v_0}{g}$ and the height gained is $\dfrac{v_0^2}{2g}$.
:::

:::esempio{titolo="Equal heights at different times"}
A ball starts at $y_0=0$ with $v_0=20\,\mathrm{m/s}$. With $g=10\,\mathrm{m/s^2}$, $y=20t-5t^2$ in metres. To reach $15\,\mathrm m$ solve $20t-5t^2=15$, or $t^2-4t+3=0$. The solutions are $t=1\,\mathrm s$ and $t=3\,\mathrm s$. The velocities at those instants are $+10$ and $-10\,\mathrm{m/s}$ respectively. The highest point is at $t=2\,\mathrm s$ and $y=20\,\mathrm m$.

::grafico{f="20*x-5*x^2" xmin=0 xmax=4 ymin=0 ymax=22 punti="1,15,pieno,A;2,20,pieno,M;3,15,pieno,B" nomi="t (s),y (m)" titolo="A and B have the same height. The slope changes sign between the two points."}
:::

:::attenzione
The vertical-motion equation applies until contact with the ground. Extending the parabola below ground produces more mathematical values of the model without describing the object after impact. Check the time requested and the physical domain before interpreting a solution of the equation.
:::
