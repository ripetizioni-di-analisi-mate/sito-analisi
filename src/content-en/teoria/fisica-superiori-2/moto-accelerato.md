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

:::esempio{#letture-irregolari titolo="Measurement intervals of different lengths"}
A sensor records these times and velocities. The times are measured from the moment the sensor is turned on, before the first reading.

| Time (s) | Velocity (m/s) |
| ---: | ---: |
| 2 | −2 |
| 3 | 0 |
| 5 | 4 |
| 8 | 10 |

Velocity increases by $2$, $4$ and $6\,\mathrm{m/s}$ over intervals of $1$, $2$ and $3\,\mathrm{s}$, respectively. Dividing each increase by its own duration always gives $2\,\mathrm{m/s^2}$. The points are therefore consistent with a constant slope. The sensor leaves a gap between readings, during which shorter changes could occur.
:::

:::osservazione{#stessi-estremi titolo="Two profiles with the same average acceleration"}
Two objects start at $4\,\mathrm{m/s}$ and reach $8\,\mathrm{m/s}$ in $4\,\mathrm s$. The first object's velocity increases by $1\,\mathrm{m/s}$ each second. The second object's velocity stays constant for $2\,\mathrm s$, then increases by $2\,\mathrm{m/s}$ each second for another $2\,\mathrm s$. The total changes and durations are equal, so both average accelerations are $1\,\mathrm{m/s^2}$. Halfway through the interval, the first object is moving at $6\,\mathrm{m/s}$ and the second at $4\,\mathrm{m/s}$.

::grafico{f="4+x+0*sqrt(4-x);4+max(0,2*x-4)+0*sqrt(4-x)" xmin=0 xmax=4.3 ymin=0 ymax=9 punti="0,4,pieno;2,4,pieno;2,6,pieno;4,8,pieno" nomi="t (s),v (m/s)" legenda="\text{First motion};\text{Second motion}" titolo="The endpoints coincide. The slopes within the interval differ."}
:::

:::esempio{#conversione-accelerazione titolo="Velocities in kilometres per hour and time in seconds"}
A bicycle goes from $18$ to $36\,\mathrm{km/h}$ in $4\,\mathrm s$. Since $1\,\mathrm{km}=1000\,\mathrm m$ and $1\,\mathrm h=3600\,\mathrm s$, the two readings are $5$ and $10\,\mathrm{m/s}$. The increase is therefore $5\,\mathrm{m/s}$ and the average acceleration is $\dfrac54=1.25\,\mathrm{m/s^2}$. Converting just the difference of $18\,\mathrm{km/h}$ gives the same result. The conversion multiplies both velocities by the same factor, so subtraction can come first.
:::

:::osservazione{#tolleranza-pendenza titolo="Checking a third reading against the model"}
The velocities recorded at $t=0$ and $t=2\,\mathrm s$ are $4$ and $8\,\mathrm{m/s}$. If these two readings are exact, they fix a slope of $2\,\mathrm{m/s^2}$. Extending the same model to $t=5\,\mathrm s$ predicts $4+2\cdot5=14\,\mathrm{m/s}$.

The third reading is $13.5\,\mathrm{m/s}$ with an absolute uncertainty of $0.6\,\mathrm{m/s}$. The compatible values range from $12.9$ to $14.1\,\mathrm{m/s}$ and include the prediction. With an uncertainty of $0.2\,\mathrm{m/s}$, the interval would run from $13.3$ to $13.7\,\mathrm{m/s}$ and would be incompatible. The comparison uses the measurement interval, which in this example determines whether the difference is enough to rule out the model.
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

:::esempio{#origine-tempi titolo="Measure elapsed time from the first reading"}
A stopwatch is already running when, at $t_i=2\,\mathrm s$, the velocity $v_i=-6\,\mathrm{m/s}$ is measured. From then on, acceleration remains $3\,\mathrm{m/s^2}$. At $t=5\,\mathrm s$, $3\,\mathrm s$ have elapsed since the reading. In SI units, the equation is $v=-6+3(t-2)$, which gives the required velocity of $3\,\mathrm{m/s}$. Velocity reaches $0$ after $2\,\mathrm s$ from the reading, when the stopwatch shows $4\,\mathrm s$.

::grafico{f="-6+3*(x-2)" xmin=2 xmax=5.2 ymin=-7 ymax=4 punti="2,-6,pieno,I;4,0,pieno;5,3,pieno,F" nomi="t (s),v (m/s)" legenda="v=-6+3(t-2)" titolo="The interval from I to F lasts 3 s. The stopwatch shows 5 s at F."}

Writing $v=-6+3t$ would assign the velocity of $-6\,\mathrm{m/s}$ to time zero. Substituting $t=2\,\mathrm s$ into that equation would give a velocity already equal to zero, in disagreement with the reading.
:::

:::osservazione{#orologio-sfasato titolo="Two clocks can give the same acceleration"}
A sensor records $3\,\mathrm{m/s}$ at $7\,\mathrm s$ and $9\,\mathrm{m/s}$ at $9\,\mathrm s$. Its clock is found to read four seconds ahead of the laboratory clock. The readings therefore belong to laboratory times $3$ and $5\,\mathrm s$. The interval is still $2\,\mathrm s$, so both pairs yield an average acceleration of $3\,\mathrm{m/s^2}$. The correction shifts the points on the graph horizontally and leaves the slope unchanged. It is needed to compare the velocity with an event recorded on the other clock.
:::

:::osservazione{#area-accelerazione titolo="Adding changes in velocity"}
Two consecutive intervals have different constant accelerations. For each interval, multiply its duration by its signed acceleration to obtain $\Delta v$. For example, $a=4\,\mathrm{m/s^2}$ for $1\,\mathrm s$ and $a=-1\,\mathrm{m/s^2}$ for $3\,\mathrm s$ give changes of $4$ and $-3\,\mathrm{m/s}$. The final velocity is $1\,\mathrm{m/s}$ above the initial velocity. On an acceleration-time graph, these changes are the signed areas of two rectangles. The average acceleration over the whole interval is $\dfrac14\,\mathrm{m/s^2}$.
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

:::esempio{#distanza-inversione titolo="Displacement and distance when direction reverses"}
A trolley starts at position $5\,\mathrm m$ with $v_0=6\,\mathrm{m/s}$ and maintains $a=-2\,\mathrm{m/s^2}$ for $5\,\mathrm s$. Its velocity reaches zero at $3\,\mathrm s$, when its position is $5+6\cdot3-3^2=14\,\mathrm m$. At $5\,\mathrm s$, its position is $5+6\cdot5-5^2=10\,\mathrm m$.

::grafico{f="5+6*x-x^2+0*sqrt(5-x)" xmin=0 xmax=5.2 ymin=0 ymax=16 punti="0,5,pieno,I;3,14,pieno,M;5,10,pieno,F" nomi="t (s),x (m)" legenda="x=5+6t-t^2" titolo="The slope of the position-time graph is zero at M and negative beyond M."}

Displacement compares the initial and final positions and is $10-5=5\,\mathrm m$. Distance includes $9\,\mathrm m$ on the outward leg and $4\,\mathrm m$ on the return leg, for a total of $13\,\mathrm m$. Position remains positive on the return leg. The negative slope during that leg gives the direction of motion.
:::

:::esempio{#spostamenti-consecutivi titolo="Finding acceleration from two consecutive displacements"}
A trolley moves $10\,\mathrm m$ in the first $2\,\mathrm s$ and $18\,\mathrm m$ in the next $2\,\mathrm s$. Assume its acceleration is constant. For two consecutive intervals of equal duration $T$, the term $\dfrac12aT^2$ is the same in both displacements. The initial velocity in the second interval is $aT$ greater than in the first. The difference between the displacements is therefore $(aT)T=aT^2$.

Here $a=\dfrac{18-10}{2^2}=2\,\mathrm{m/s^2}$. Substitution into the first interval's equation gives $10=2v_0+4$, so $v_0=3\,\mathrm{m/s}$. At the beginning of the second interval, the velocity is $7\,\mathrm{m/s}$. The displacement calculated over that interval is $7\cdot2+4=18\,\mathrm m$, which confirms the second reading.
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

:::attenzione{#posizione-accessibile titolo="A squared velocity shows whether the point can be reached"}
Take $v_0=12\,\mathrm{m/s}$ and $a=-2\,\mathrm{m/s^2}$ again. At a positive displacement of $40\,\mathrm m$, the relation would give $v^2=144-4\cdot40=-16$, in SI units. The square of a velocity is always greater than or equal to zero. This value therefore places the point beyond the trolley's maximum position during this motion. The furthest point along the initial direction occurs at $v=0$ and gives $\Delta x=36\,\mathrm m$.

::grafico{f="144-4*x+0*sqrt(36-x)" xmin=0 xmax=41 ymin=0 ymax=155 punti="0,144,pieno;20,64,pieno;36,0,pieno" nomi="Δx (m),v² (m²/s²)" legenda="v^2=144-4\Delta x" titolo="The accessible range along the initial direction ends at Δx = 36 m."}

The slope of $v^2$ plotted against $\Delta x$ is $2a$. Two measurements on the graph can therefore give $a$. Between the displacements $0$ and $20\,\mathrm m$, for example, the square decreases by $80\,\mathrm{m^2/s^2}$. Dividing by $20\,\mathrm m$ gives $-4\,\mathrm{m/s^2}$, and dividing again by two gives $a=-2\,\mathrm{m/s^2}$.
:::

## Braking and reaction time

:::osservazione{#frenata titolo="Motion up to rest"}
Choose the initial direction of the vehicle as positive and let $b>0$ be the magnitude of deceleration. If braking occurs at constant $a=-b$ until rest, setting $v=0$ gives $t_a=\dfrac{v_0}{b}$. On that same leg the timeless relation gives the braking distance $s_f=\dfrac{v_0^2}{2b}$. The braking model ends at rest, unless another force then causes reversal. Extending the same velocity–time line beyond the stop would describe an artificial reverse motion.

Before the brakes act, the driver's reaction takes time $t_r$. In the two-stage model the vehicle maintains $v_0$ during the reaction and covers $s_r=v_0t_r$. The total distance is $s_r+s_f$. Doubling $v_0$ at fixed $b$ and $t_r$ doubles the reaction distance and quadruples the braking distance.
:::

:::esempio{titolo="A rectangle and a triangle in the total distance"}
For $v_0=20\,\mathrm{m/s}$, $t_r=1\,\mathrm{s}$ and $b=5\,\mathrm{m/s^2}$, the reaction distance is $20\,\mathrm m$. Braking lasts $4\,\mathrm s$ and covers $\dfrac12\cdot4\cdot20\,\mathrm m=40\,\mathrm m$. The vehicle stops $5\,\mathrm s$ after noticing the danger and travels $60\,\mathrm m$ in total.

::grafico{f="20-5*max(0,x-1)+0*sqrt(5-x)" area="20;0;0;1|25-5*x;0;1;5" xmin=0 xmax=5.5 ymin=0 ymax=23 punti="1,20,pieno,R;5,0,pieno" etichette="4.87,3,F" nomi="t (s),v (m/s)" titolo="Before R is the reaction interval. Braking takes place from R to F."}
:::

:::esempio{#reazione-inversa titolo="Finding a stage's duration from the total distance"}
In an idealised test a vehicle travels at $16\,\mathrm{m/s}$ and brakes with an acceleration magnitude of $4\,\mathrm{m/s^2}$. Braking alone covers $\dfrac{16^2}{2\cdot4}=32\,\mathrm m$. If the distance measured from signal to stop is $48\,\mathrm m$, the vehicle covered $48-32=16\,\mathrm m$ during the reaction. At a constant speed of $16\,\mathrm{m/s}$, that distance takes $1\,\mathrm s$.

::grafico{f="32+16*x" xmin=0 xmax=2.2 ymin=0 ymax=70 punti="0,32,pieno;1,48,pieno;2,64,pieno" nomi="tᵣ (s),s (m)" legenda="s=32+16t_r" titolo="The intercept gives the braking distance. The slope is the velocity during the reaction."}

A total distance below $32\,\mathrm m$ would give a negative reaction time. One of the other assumptions, such as the constant magnitude of the deceleration, would then need an independent check.
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

::grafico{f="20*x-5*x^2+0*sqrt(4-x)" xmin=0 xmax=4.5 ymin=0 ymax=22 punti="1,15,pieno,A;2,20,pieno,M;3,15,pieno,B" nomi="t (s),y (m)" titolo="A and B have the same height. The slope changes sign between the two points."}
:::

:::attenzione
The vertical-motion equation applies until contact with the ground. Extending the parabola below ground produces more mathematical values of the model without describing the object after impact. Check the time requested and the physical domain before interpreting a solution of the equation.
:::

:::esempio{#radici-dominio titolo="Selecting the root within the observed motion"}
An object is launched upwards from a height of $15\,\mathrm m$ with a velocity of $10\,\mathrm{m/s}$. With $g=10\,\mathrm{m/s^2}$ and negligible air resistance, its height in metres is $15+10t-5t^2$. Its height at the ground is zero. Dividing the equation by $-5$ gives $t^2-2t-3=0$, or $(t+1)(t-3)=0$.

The root $t=-1\,\mathrm s$ precedes the launch and lies outside the modelled interval. Impact occurs after $3\,\mathrm s$, with velocity $v=10-10\cdot3=-20\,\mathrm{m/s}$. The sign indicates downward motion and the speed is $20\,\mathrm{m/s}$. The highest point occurs at $1\,\mathrm s$, between launch and impact, where the velocity is zero but its slope remains $-g$.

::grafico{f="10-10*x+0*sqrt(3-x)" xmin=0 xmax=3.2 ymin=-24 ymax=12 punti="0,10,pieno;1,0,pieno,M;3,-20,pieno" nomi="t (s),v (m/s)" legenda="v=10-10t" titolo="The motion starts at t = 0 and ends at the ground at t = 3 s. M marks the highest point."}
:::

:::osservazione{#asse-verticale titolo="The direction of the axis determines the signs"}
An object is launched upwards at $6\,\mathrm{m/s}$. With downward taken as positive and $g=10\,\mathrm{m/s^2}$, we write $v_0=-6\,\mathrm{m/s}$ and $a=+10\,\mathrm{m/s^2}$. Its velocity is $v=-6+10t$, which reaches zero at $t=0.6\,\mathrm s$. Taking upward as positive would give $v=6-10t$. The two expressions have opposite signs and reach zero at the same instant.
:::
