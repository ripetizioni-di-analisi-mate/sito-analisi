---
titolo: Straight-line motion with constant acceleration
sommario: Acceleration, graphs, the position equation, vehicle stopping and vertical motion under gravity.
---

## Acceleration

:::definizione{#accelerazione titolo="Change in velocity"}
Throughout this chapter the object moves along a straight line on which an **axis** is fixed: an origin and a direction chosen as positive. The **signed velocity** $v$ is positive if the object moves in the positive direction and negative if it moves in the opposite direction. The value without the sign is the **magnitude** of the velocity, also called the **speed**. For example, the velocity $-8\,\mathrm{m/s}$ has magnitude $8\,\mathrm{m/s}$.

**Average acceleration** along the axis is the change in velocity divided by the time over which it happens. Let $v_i$ be the velocity at the start of the interval and $v_f$ the velocity at the end (the subscripts $i$ and $f$ stand for "initial" and "final"). The Greek letter $\Delta$, read "delta", denotes the difference between a final value and an initial value. Therefore $\Delta t=t_f-t_i$ is the duration of the interval, which is always positive.
$$
a_m=\frac{v_f-v_i}{\Delta t}.
$$
The unit in the SI (International System of Units, the system of the metre and the second) is the metre per second divided by the second, $\dfrac{\mathrm{m/s}}{\mathrm s}=\mathrm{m/s^2}$, read "metres per second squared". For example, a value of $2\,\mathrm{m/s^2}$ means that velocity increases by $2\,\mathrm{m/s}$ each second, if acceleration stays constant.

The sign of the acceleration is the sign of the change $v_f-v_i$. A cyclist can travel in the negative direction while velocity changes from $-8$ to $-2\,\mathrm{m/s}$. In this case the change is positive, so the average acceleration is positive. The magnitude of the velocity falls from $8$ to $2\,\mathrm{m/s}$, so the cyclist slows down.
:::

:::esempio{titolo="Acceleration sign from the slope"}
On a velocity–time graph, time is on the horizontal axis and velocity on the vertical axis. The **slope** of a straight line is the ratio of the vertical change to the horizontal change between two of its points. On this graph the slope is therefore $\dfrac{v_f-v_i}{\Delta t}$, that is, the average acceleration.

Velocity changes from $-8\,\mathrm{m/s}$ to $-2\,\mathrm{m/s}$ in $3\,\mathrm{s}$. The change is
$$
-2-(-8)=-2+8=6\,\mathrm{m/s},
$$
so $a_m=\dfrac{6}{3}=2\,\mathrm{m/s^2}$. If acceleration is constant, velocity rises steadily from $-8$ to $-2\,\mathrm{m/s}$ and stays negative throughout this stage. The object therefore moves in the negative direction and slows down. In the figure the line from A to B rises, because the slope is positive, and stays below the time axis, because velocity is negative.

::grafico{f="-8+2*x" xmin=0 xmax=3 ymin=-9 ymax=2 punti="0,-8,pieno,A;3,-2,pieno,B" nomi="t (s),v (m/s)" titolo="Positive slope and negative velocity throughout the stage."}
:::

:::attenzione
Average acceleration depends only on the two velocities at the ends of the interval. It equals the acceleration at every instant only if acceleration is constant. For example, a car starts at rest, moves and finally comes to rest again. Then $v_i=0$ and $v_f=0$, so the average acceleration over the whole journey is zero, even though the car accelerated and braked during the journey.
:::

:::esempio{#letture-irregolari titolo="Measurement intervals of different lengths"}
A sensor records these times and velocities. The times are measured from the moment the sensor is turned on, which happens before the first reading; this is why the first reading has time $2\,\mathrm s$.

| Time (s) | Velocity (m/s) |
| ---: | ---: |
| 2 | −2 |
| 3 | 0 |
| 5 | 4 |
| 8 | 10 |

For each interval between two readings, the increase in velocity is divided by the duration:

- from $2$ to $3\,\mathrm s$: $\dfrac{0-(-2)}{3-2}=\dfrac{2}{1}=2\,\mathrm{m/s^2}$;
- from $3$ to $5\,\mathrm s$: $\dfrac{4-0}{5-3}=\dfrac{4}{2}=2\,\mathrm{m/s^2}$;
- from $5$ to $8\,\mathrm s$: $\dfrac{10-4}{8-5}=\dfrac{6}{3}=2\,\mathrm{m/s^2}$.

The three ratios are equal, so the points lie on a line with slope $2\,\mathrm{m/s^2}$. The data are therefore **consistent**, that is, in agreement, with a constant-slope **model**. A model is the simplified description of the motion used for calculations, here "acceleration always the same". The sensor records no data between two readings, and during those intervals velocity could have had short changes that the four readings do not show.
:::

:::osservazione{#stessi-estremi titolo="Two profiles with the same average acceleration"}
Two objects start at $4\,\mathrm{m/s}$ and reach $8\,\mathrm{m/s}$ in $4\,\mathrm s$.

- In the first motion, velocity increases by $1\,\mathrm{m/s}$ each second.
- In the second motion, velocity stays at $4\,\mathrm{m/s}$ for $2\,\mathrm s$, then increases by $2\,\mathrm{m/s}$ each second for another $2\,\mathrm s$.

The total change is $8-4=4\,\mathrm{m/s}$ and the total duration is $4\,\mathrm s$ in both motions, so the average acceleration is $\dfrac44=1\,\mathrm{m/s^2}$ in each. Halfway through the interval, at $t=2\,\mathrm s$, the first object is moving at $4+1\cdot2=6\,\mathrm{m/s}$ and the second is still at $4\,\mathrm{m/s}$. On the graph the first motion is a single straight line; the second is a horizontal segment followed by a steeper segment.

::grafico{f="4+x+0*sqrt(4-x);4+max(0,2*x-4)+0*sqrt(4-x)" xmin=0 xmax=4.3 ymin=0 ymax=9 punti="0,4,pieno;2,4,pieno;2,6,pieno;4,8,pieno" nomi="t (s),v (m/s)" legenda="\text{First motion};\text{Second motion}" titolo="The endpoints coincide. The slopes within the interval differ."}
:::

:::esempio{#conversione-accelerazione titolo="Velocities in kilometres per hour and time in seconds"}
A bicycle goes from $18$ to $36\,\mathrm{km/h}$ in $4\,\mathrm s$. Since $1\,\mathrm{km}=1000\,\mathrm m$ and $1\,\mathrm h=3600\,\mathrm s$, a velocity in kilometres per hour becomes metres per second by dividing by $3.6$:
$$
18\,\mathrm{km/h}=\frac{18\cdot1000\,\mathrm m}{3600\,\mathrm s}=\frac{18}{3.6}\,\mathrm{m/s}=5\,\mathrm{m/s},\qquad 36\,\mathrm{km/h}=\frac{36}{3.6}\,\mathrm{m/s}=10\,\mathrm{m/s}.
$$
The increase is therefore $10-5=5\,\mathrm{m/s}$ and the average acceleration is $\dfrac54=1.25\,\mathrm{m/s^2}$. Converting just the difference $36-18=18\,\mathrm{km/h}$, which becomes $5\,\mathrm{m/s}$, gives the same result. The conversion divides both velocities by the same number, so subtraction can come first.
:::

:::osservazione{#tolleranza-pendenza titolo="Checking a third reading against the model"}
The velocities recorded at $t=0$ and $t=2\,\mathrm s$ are $4$ and $8\,\mathrm{m/s}$. If these two readings are exact, they fix the slope $\dfrac{8-4}{2}=2\,\mathrm{m/s^2}$. Extending the same model to $t=5\,\mathrm s$ predicts $4+2\cdot5=14\,\mathrm{m/s}$.

The third reading is $13.5\,\mathrm{m/s}$ with an **absolute uncertainty** of $0.6\,\mathrm{m/s}$. This means that the true value lies between $13.5-0.6=12.9$ and $13.5+0.6=14.1\,\mathrm{m/s}$. The interval contains the prediction $14\,\mathrm{m/s}$, so the measurement is consistent with the model. With an uncertainty of $0.2\,\mathrm{m/s}$, the interval would run from $13.3$ to $13.7\,\mathrm{m/s}$. The prediction would lie outside it and the measurement would be inconsistent with the model. In both cases the difference between measurement and prediction is $0.5\,\mathrm{m/s}$; the decision depends on the width of the measurement interval.
:::

## The velocity equation

:::teorema{#velocita titolo="Velocity under constant acceleration"}
Acceleration is **constant** when velocity changes by the same amount each second. In this case the acceleration $a$ equals the average acceleration over every interval. Let $v_0$ ("v nought") be the velocity at the instant $t=0$ and $v(t)$ the velocity at the instant $t$. Over the interval from $0$ to $t$ the definition gives
$$
a=\frac{v(t)-v_0}{t}.
$$
Multiplying both sides by $t$ gives $at=v(t)-v_0$. Adding $v_0$ to both sides gives
$$
v(t)=v_0+at.
$$
The velocity–time graph is therefore a straight line. Its slope is $a$ and its value at $t=0$, where the line meets the vertical axis, is $v_0$. For $a=0$ the line is horizontal, velocity stays at $v_0$ and uniform motion is recovered. When $v$ and $a$ have the same sign, the magnitude of velocity increases. When they have opposite signs, the magnitude decreases until the object possibly reaches $v=0$.
:::

:::esempio{titolo="A velocity that changes sign"}
For a cart with $v_0=6\,\mathrm{m/s}$ and $a=-2\,\mathrm{m/s^2}$ the velocity is $v=6-2t$ in SI units, that is, with $t$ in seconds and $v$ in metres per second. Velocity is zero when $6-2t=0$, that is, $2t=6$ and $t=3\,\mathrm s$. Up to that instant velocity and acceleration have opposite signs, so the cart slows down. If acceleration remains active after that point, the cart moves in the negative direction. At $t=5\,\mathrm{s}$ its velocity is $6-2\cdot5=-4\,\mathrm{m/s}$. During this second stage the magnitude increases because both velocity and acceleration are negative. In the figure, point B, where the line crosses the time axis, is the **reversal**, that is, the instant at which the cart changes direction.

::grafico{f="6-2*x" xmin=0 xmax=5 ymin=-5 ymax=7 punti="0,6,pieno,A;3,0,pieno,B;5,-4,pieno,C" nomi="t (s),v (m/s)" titolo="B marks reversal. Speed decreases before B and increases after B."}
:::

:::esempio{#origine-tempi titolo="Measure elapsed time from the first reading"}
A stopwatch is already running when, at $t_i=2\,\mathrm s$, the velocity $v_i=-6\,\mathrm{m/s}$ is measured. From then on, acceleration remains $3\,\mathrm{m/s^2}$. The time elapsed since the reading is $t-2$, so in SI units the equation is
$$
v=-6+3(t-2).
$$
At $t=5\,\mathrm s$, $5-2=3\,\mathrm s$ have elapsed since the reading, and the velocity is $-6+3\cdot3=3\,\mathrm{m/s}$. Velocity is zero when $3(t-2)=6$, that is, $t-2=2$. This happens $2\,\mathrm s$ after the reading, when the stopwatch shows $4\,\mathrm s$.

::grafico{f="-6+3*(x-2)" xmin=2 xmax=5.2 ymin=-7 ymax=4 punti="2,-6,pieno,I;4,0,pieno;5,3,pieno,F" nomi="t (s),v (m/s)" legenda="v=-6+3(t-2)" titolo="The interval from I to F lasts 3 s. The stopwatch shows 5 s at F."}

The equation $v=-6+3t$ would assign the velocity of $-6\,\mathrm{m/s}$ to time zero. Substituting $t=2\,\mathrm s$ into that equation would give $-6+6=0$, in disagreement with the reading of $-6\,\mathrm{m/s}$.
:::

:::osservazione{#orologio-sfasato titolo="Two clocks can give the same acceleration"}
A sensor records $3\,\mathrm{m/s}$ at $7\,\mathrm s$ and $9\,\mathrm{m/s}$ at $9\,\mathrm s$. Its clock is found to read four seconds ahead of the laboratory clock. The readings therefore belong to laboratory times $7-4=3$ and $9-4=5\,\mathrm s$. The interval between the two measurements is still $2\,\mathrm s$, so both pairs yield an average acceleration of $\dfrac{9-3}{2}=3\,\mathrm{m/s^2}$. The correction shifts all the points on the graph horizontally by the same amount and leaves the slope unchanged. It is needed, however, before comparing the velocity with an event recorded on the laboratory clock.
:::

:::osservazione{#area-accelerazione titolo="Adding changes in velocity"}
Two consecutive intervals have different constant accelerations. From the velocity equation, in each interval the change is $\Delta v=a\,\Delta t$, that is, the duration multiplied by the signed acceleration. For example:

- $a=4\,\mathrm{m/s^2}$ for $1\,\mathrm s$ gives $\Delta v=4\cdot1=4\,\mathrm{m/s}$;
- $a=-1\,\mathrm{m/s^2}$ for $3\,\mathrm s$ gives $\Delta v=(-1)\cdot3=-3\,\mathrm{m/s}$.

The total change is $4+(-3)=1\,\mathrm{m/s}$, so the final velocity is $1\,\mathrm{m/s}$ above the initial velocity. On an acceleration-time graph each interval is a rectangle with base $\Delta t$ and height $a$, and its area is $a\,\Delta t$. The changes are therefore the **signed areas** of the two rectangles. An area below the time axis counts as negative. The average acceleration over the whole interval is $\dfrac{1}{1+3}=\dfrac14\,\mathrm{m/s^2}$.
:::

## The position equation

::::teorema{#posizione titolo="Position under constant acceleration"}
The **position** $x$ is the number that indicates where the object is on the axis; $x_0$ is the initial position. The **position equation** is the formula that gives the position at every instant. During the constant-acceleration interval, position at time $t$ is
$$
x(t)=x_0+v_0t+\frac12at^2.
$$
Every term is a length: in the last one, for example, $\mathrm{m/s^2}$ multiplied by $\mathrm{s^2}$ gives metres. For $a\neq0$ the formula contains $t^2$, so the position–time graph is a **parabola**, a symmetric arch-shaped curve with a highest or a lowest point. The slope of this graph at each point is the velocity.

:::dimostrazione
**Displacement** is the change in position, $\Delta x=x-x_0$. On a velocity–time graph, displacement is the area between the graph and the time axis, as in uniform motion, where the area of the rectangle is velocity times time. The area is signed: the parts below the axis, where velocity is negative, count as negative.

Between $0$ and $t$ the region under the line $v=v_0+at$ splits into two parts:

- a rectangle with base $t$ and height $v_0$, with area $v_0t$;
- a triangle with base $t$ and height $at$, which is the change in velocity, with signed area $\dfrac12t(at)=\dfrac12at^2$.

Their sum is $\Delta x=v_0t+\dfrac12at^2$. Since $x=x_0+\Delta x$, adding $x_0$ gives the equation. The argument also applies when the graph crosses the axis because the areas are added with their signs.
:::
::::

:::esempio{titolo="Starting from rest"}
A skater starts from rest, so $v_0=0$, with $a=2\,\mathrm{m/s^2}$. After $2\,\mathrm{s}$ the velocity is $2\cdot2=4\,\mathrm{m/s}$ and displacement is the area of the triangle, $\dfrac12\cdot2\cdot4\,\mathrm m=4\,\mathrm m$. After $4\,\mathrm{s}$ the velocity is $8\,\mathrm{m/s}$ and displacement is $\dfrac12\cdot4\cdot8\,\mathrm m=16\,\mathrm m$. Doubling the duration doubles the final speed and quadruples the distance from rest. The reason is that on the graph both the base and the height of the triangle double, and the area becomes $2\cdot2=4$ times larger.

::grafico{f="2*x" area="2*x;0;0;4" xmin=0 xmax=4.5 ymin=0 ymax=9 punti="2,4,pieno,A;4,8,pieno,B" nomi="t (s),v (m/s)" titolo="The area of the triangle over four seconds is 16 m."}
:::

:::osservazione{#area-velocita titolo="Averaging endpoint velocities"}
The **average velocity** over an interval is the displacement divided by the duration. Under constant acceleration, the average velocity is $\dfrac{v_0+v_f}{2}$, the average of the endpoint velocities. Indeed, the displacement is the area of a trapezoid with signed bases $v_0$ and $v_f$ and height $t$, that is, $\dfrac{v_0+v_f}{2}\,t$. The same result follows by substituting $at=v_f-v_0$ in the position equation:
$$
\Delta x=v_0t+\frac12(v_f-v_0)t=\frac{v_0+v_f}{2}\,t.
$$
If the object reverses in the interval, this average adds contributions of opposite sign. **Distance travelled**, by contrast, is the total length of the path and is always positive. It is calculated by finding the instant of reversal, where $v=0$, and adding the magnitudes of the two displacements, before and after the reversal.
:::

:::esempio{#distanza-inversione titolo="Displacement and distance when direction reverses"}
A trolley starts at position $5\,\mathrm m$ with $v_0=6\,\mathrm{m/s}$ and maintains $a=-2\,\mathrm{m/s^2}$ for $5\,\mathrm s$. The position equation is $x=5+6t+\dfrac12(-2)t^2=5+6t-t^2$. The velocity $6-2t$ reaches zero at $3\,\mathrm s$, when its position is $5+6\cdot3-3^2=14\,\mathrm m$. At $5\,\mathrm s$, its position is $5+6\cdot5-5^2=10\,\mathrm m$.

::grafico{f="5+6*x-x^2+0*sqrt(5-x)" xmin=0 xmax=5.2 ymin=0 ymax=16 punti="0,5,pieno,I;3,14,pieno,M;5,10,pieno,F" nomi="t (s),x (m)" legenda="x=5+6t-t^2" titolo="The slope of the position-time graph is zero at M and negative beyond M."}

Displacement compares only the initial and final positions and is $10-5=5\,\mathrm m$. Distance includes $14-5=9\,\mathrm m$ on the outward leg and $14-10=4\,\mathrm m$ on the return leg, for a total of $13\,\mathrm m$. At point M, the highest point of the parabola, the slope is zero because the velocity is zero. The **tangent** to the curve at M, that is, the line that touches the curve at that single point, is therefore horizontal. Position remains positive on the return leg. The direction of motion is given by the slope, which is negative during that leg.
:::

:::esempio{#spostamenti-consecutivi titolo="Finding acceleration from two consecutive displacements"}
A trolley moves $10\,\mathrm m$ in the first $2\,\mathrm s$ and $18\,\mathrm m$ in the next $2\,\mathrm s$. Assume its acceleration is constant. Let $T$ be the duration of each interval and $v_0$ the velocity at the start of the first. From the position equation the two displacements are:

- first interval: $\Delta x_1=v_0T+\dfrac12aT^2$;
- second interval, which starts with velocity $v_0+aT$: $\Delta x_2=(v_0+aT)T+\dfrac12aT^2$.

On subtraction, the terms $v_0T$ and $\dfrac12aT^2$ cancel. The difference between the displacements is therefore $\Delta x_2-\Delta x_1=(aT)T=aT^2$.

Here $a=\dfrac{18-10}{2^2}=\dfrac84=2\,\mathrm{m/s^2}$. Substitution into the first interval's equation gives $10=2v_0+\dfrac12\cdot2\cdot2^2=2v_0+4$, so $2v_0=6$ and $v_0=3\,\mathrm{m/s}$. At the beginning of the second interval, the velocity is $3+2\cdot2=7\,\mathrm{m/s}$. The displacement calculated over that interval is $7\cdot2+4=18\,\mathrm m$, which confirms the second reading.
:::

## A relation without time

:::teorema{#senza-tempo titolo="Velocity and displacement"}
When displacement is known but the time is missing, two formulas valid under constant acceleration are combined:

- from the velocity equation, $v_f-v_0=at$;
- from the average velocity, $\Delta x=\dfrac{v_0+v_f}{2}\,t$, that is, $(v_f+v_0)\,t=2\Delta x$.

This gives
$$
v_f^2-v_0^2=(v_f-v_0)(v_f+v_0)=at(v_f+v_0)=2a\Delta x.
$$
The first step is the difference of two squares, $A^2-B^2=(A-B)(A+B)$; the second substitutes $v_f-v_0=at$, the third substitutes $(v_f+v_0)\,t=2\Delta x$. The relation is also written $v_f^2=v_0^2+2a\Delta x$. It gives the square of the velocity, and the square root gives its magnitude. Choosing the sign requires knowing the direction of motion at that instant. A position can be reached on both the outward and the return leg. At the two crossings the relation gives the same $v_f^2$, hence the same magnitude, with opposite signs.
:::

:::esempio{titolo="Braking over a known distance"}
A vehicle travels at $12\,\mathrm{m/s}$ in the positive direction and loses $2\,\mathrm{m/s}$ each second, so $a=-2\,\mathrm{m/s^2}$. After moving $20\,\mathrm{m}$ during braking, in SI units
$$
v^2=12^2+2\cdot(-2)\cdot20=144-80=64.
$$
Since the vehicle still moves in the positive direction, its velocity is $\sqrt{64}=8\,\mathrm{m/s}$. Substituting into the velocity equation gives $8=12-2t$, that is, $t=2\,\mathrm{s}$. The position equation reproduces the given displacement, $12\cdot2-\dfrac12\cdot2\cdot2^2=24-4=20\,\mathrm m$.
:::

:::attenzione{#posizione-accessibile titolo="A squared velocity shows whether the point can be reached"}
Take $v_0=12\,\mathrm{m/s}$ and $a=-2\,\mathrm{m/s^2}$ again. At a positive displacement of $40\,\mathrm m$, the relation would give $v^2=144-4\cdot40=144-160=-16$, in SI units. The square of a number is always greater than or equal to zero, so no velocity has square $-16$. The point at $40\,\mathrm m$ therefore lies beyond the trolley's maximum position during this motion. The furthest position occurs at $v=0$, that is, $0=144-4\Delta x$, which gives $\Delta x=\dfrac{144}{4}=36\,\mathrm m$.

::grafico{f="144-4*x+0*sqrt(36-x)" xmin=0 xmax=41 ymin=0 ymax=155 punti="0,144,pieno;20,64,pieno;36,0,pieno" nomi="Δx (m),v² (m²/s²)" legenda="v^2=144-4\Delta x" titolo="The accessible range along the initial direction ends at Δx = 36 m."}

In the figure $v^2$ is on the vertical axis and $\Delta x$ on the horizontal axis. The graph is the line $v^2=v_0^2+2a\Delta x$, so its slope is $2a$. Two points on the graph can therefore give $a$. Between the displacements $0$ and $20\,\mathrm m$, for example, the square falls from $144$ to $64$, that is, by $80\,\mathrm{m^2/s^2}$. Dividing $-80$ by $20\,\mathrm m$ gives $-4\,\mathrm{m/s^2}$, and dividing again by two gives $a=-2\,\mathrm{m/s^2}$.
:::

## Braking and reaction time

:::osservazione{#frenata titolo="Motion up to rest"}
The initial direction of the vehicle is chosen as positive. The **deceleration** is the magnitude of the acceleration during braking; it is denoted by $b>0$, and the signed acceleration is $a=-b$. If braking occurs at constant $a=-b$ until rest, the vehicle stops when $v=0$, that is, $0=v_0-bt_a$. The **stopping time** is therefore
$$
t_a=\frac{v_0}{b}.
$$
On that same leg the relation without time, with $v_f=0$ and $a=-b$, gives $0=v_0^2-2bs_f$. The **braking distance** is therefore
$$
s_f=\frac{v_0^2}{2b}.
$$
The braking model ends at rest, unless another force then causes reversal. Extending the line $v=v_0-bt$ beyond $t_a$, velocity would become negative, that is, the model would describe a reverse motion that the brakes do not produce.

Before the brakes act, a **reaction time** $t_r$ passes, that is, the time between the instant the driver sees the danger and the instant the brakes begin to act. The two-stage model is as follows:

- during the reaction the vehicle maintains velocity $v_0$ and covers the **reaction distance** $s_r=v_0t_r$;
- then it brakes and covers the braking distance $s_f$.

The total stopping distance is $s_r+s_f$. Doubling $v_0$ at fixed $b$ and $t_r$ doubles the reaction distance, because it is proportional to $v_0$. The braking distance quadruples, because it contains $v_0^2$ and $(2v_0)^2=4v_0^2$.
:::

:::esempio{titolo="A rectangle and a triangle in the total distance"}
For $v_0=20\,\mathrm{m/s}$, $t_r=1\,\mathrm{s}$ and $b=5\,\mathrm{m/s^2}$, the reaction distance is $20\cdot1=20\,\mathrm m$. Braking lasts $\dfrac{20}{5}=4\,\mathrm s$ and the braking distance is the area of the triangle, $\dfrac12\cdot4\cdot20\,\mathrm m=40\,\mathrm m$. The vehicle stops $1+4=5\,\mathrm s$ after noticing the danger and travels $20+40=60\,\mathrm m$ in total. In the figure the reaction distance is the area of the rectangle before R and the braking distance is the area of the triangle from R to F.

::grafico{f="20-5*max(0,x-1)+0*sqrt(5-x)" area="20;0;0;1|25-5*x;0;1;5" xmin=0 xmax=5.5 ymin=0 ymax=23 punti="1,20,pieno,R;5,0,pieno" etichette="4.87,3,F" nomi="t (s),v (m/s)" titolo="Before R is the reaction interval. Braking takes place from R to F."}
:::

:::esempio{#reazione-inversa titolo="Finding a stage's duration from the total distance"}
In an idealised test a vehicle travels at $16\,\mathrm{m/s}$ and brakes with an acceleration magnitude of $4\,\mathrm{m/s^2}$. Braking alone covers $\dfrac{16^2}{2\cdot4}=\dfrac{256}{8}=32\,\mathrm m$. If the distance measured from signal to stop is $48\,\mathrm m$, the vehicle covered $48-32=16\,\mathrm m$ during the reaction. At a constant speed of $16\,\mathrm{m/s}$, that distance takes $\dfrac{16}{16}=1\,\mathrm s$.

::grafico{f="32+16*x" xmin=0 xmax=2.2 ymin=0 ymax=70 punti="0,32,pieno;1,48,pieno;2,64,pieno" nomi="tᵣ (s),s (m)" legenda="s=32+16t_r" titolo="The intercept gives the braking distance. The slope is the velocity during the reaction."}

The figure shows the total distance $s=32+16t_r$ as the reaction time varies. The **intercept**, that is, the value for $t_r=0$, is the braking distance alone. A total distance below $32\,\mathrm m$ would give a negative reaction time, which no real test can have. One of the other assumptions of the model, such as the constant magnitude of the deceleration, would then need an independent check.
:::

## Falling and vertical launch

:::teorema{#caduta titolo="Vertical motion near Earth"}
Air resistance and the small change in gravity with height are ignored. Then an object moving vertically near Earth has constant acceleration, pointing down. Its magnitude is the **acceleration due to gravity** $g$, the same for all objects whatever their mass. The value $g\simeq9.81\,\mathrm{m/s^2}$ is used near the surface (the symbol $\simeq$ is read "approximately equal to"), or the value stated in the problem. Taking upward as positive gives $a=-g$. With $y$ the height, $y_0$ the initial height and $v_0$ the signed initial velocity, substituting $a=-g$ in the equations of motion gives
$$
v(t)=v_0-gt,\qquad y(t)=y_0+v_0t-\frac12gt^2.
$$
The relation without time becomes $v^2=v_0^2-2g(y-y_0)$.

For an object released from rest at height $h$ above the ground, $v_0=0$, $y_0=h$ and $y=0$ at the ground. Therefore $0=h-\dfrac12gt^2$, that is, $t^2=\dfrac{2h}{g}$. The only positive duration is $t=\sqrt{\dfrac{2h}{g}}$; the other solution, $-\sqrt{\dfrac{2h}{g}}$, comes before the release.

For an upward launch, $v=0$ at the highest point, called the **apex**. Acceleration at that instant remains $-g$, so immediately afterwards velocity becomes negative and the object begins to fall. Setting $v=0$ in the velocity equation gives $0=v_0-gt$, so the time to the highest point is $\dfrac{v_0}{g}$. Setting $v=0$ in the relation without time gives $0=v_0^2-2g(y-y_0)$, so the height gained is $\dfrac{v_0^2}{2g}$.
:::

:::esempio{titolo="Equal heights at different times"}
A ball starts at $y_0=0$ with $v_0=20\,\mathrm{m/s}$. With $g=10\,\mathrm{m/s^2}$, $\dfrac12g=5$, so $y=20t-5t^2$ in metres. The height $15\,\mathrm m$ is reached by solving $20t-5t^2=15$. Moving everything to the left-hand side and dividing by $-5$ gives $t^2-4t+3=0$, that is, $(t-1)(t-3)=0$. The solutions are $t=1\,\mathrm s$ and $t=3\,\mathrm s$. The velocity $v=20-10t$ at those instants is $+10$ and $-10\,\mathrm{m/s}$ respectively. So at $1\,\mathrm s$ the ball is rising, at $3\,\mathrm s$ it is falling with the same speed. The highest point is at $t=\dfrac{20}{10}=2\,\mathrm s$ and $y=20\cdot2-5\cdot2^2=20\,\mathrm m$.

::grafico{f="20*x-5*x^2+0*sqrt(4-x)" xmin=0 xmax=4.5 ymin=0 ymax=22 punti="1,15,pieno,A;2,20,pieno,M;3,15,pieno,B" nomi="t (s),y (m)" titolo="A and B have the same height. The slope changes sign between the two points."}
:::

:::attenzione
The vertical-motion equation applies until contact with the ground. After impact the object stops or bounces, while the parabola extended below the ground gives negative heights and other mathematical solutions that do not describe the object. In problems, therefore, one checks that the instant found lies in the **physical domain** of the motion, that is, between launch and impact, before interpreting a solution of the equation.
:::

:::esempio{#radici-dominio titolo="Selecting the root within the observed motion"}
An object is launched upwards from a height of $15\,\mathrm m$ with a velocity of $10\,\mathrm{m/s}$. With $g=10\,\mathrm{m/s^2}$ and negligible air resistance, its height in metres is $15+10t-5t^2$. Its height at the ground is zero, so $15+10t-5t^2=0$. Dividing the equation by $-5$ gives $t^2-2t-3=0$. The two numbers with product $-3$ and sum $-2$ are $1$ and $-3$, so the equation can be written $(t+1)(t-3)=0$. Its **roots**, that is, its solutions, are $t=-1\,\mathrm s$ and $t=3\,\mathrm s$.

The root $t=-1\,\mathrm s$ precedes the launch and lies outside the modelled interval. Impact occurs after $3\,\mathrm s$, with velocity $v=10-10\cdot3=-20\,\mathrm{m/s}$. The sign indicates downward motion and the speed is $20\,\mathrm{m/s}$. The apex occurs where $10-10t=0$, that is, at $1\,\mathrm s$, between launch and impact. There the velocity is zero, but the slope of the velocity–time graph, that is, the acceleration, remains $-g$.

::grafico{f="10-10*x+0*sqrt(3-x)" xmin=0 xmax=3.2 ymin=-24 ymax=12 punti="0,10,pieno;1,0,pieno,M;3,-20,pieno" nomi="t (s),v (m/s)" legenda="v=10-10t" titolo="The motion starts at t = 0 and ends at the ground at t = 3 s. M marks the highest point."}
:::

:::osservazione{#asse-verticale titolo="The direction of the axis determines the signs"}
An object is launched upwards at $6\,\mathrm{m/s}$, with $g=10\,\mathrm{m/s^2}$. If the axis is positive downwards, the launch is in the negative direction and gravity in the positive direction, so we write $v_0=-6\,\mathrm{m/s}$ and $a=+10\,\mathrm{m/s^2}$. Its velocity is $v=-6+10t$, which reaches zero when $10t=6$, that is, at $t=0.6\,\mathrm s$. Taking upward as positive would give $v=6-10t$, which reaches zero at the same $t=0.6\,\mathrm s$. The two expressions have opposite signs and reach zero at the same instant.
:::
