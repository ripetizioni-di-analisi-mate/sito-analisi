---
titolo: Uniform motion in a straight line and graphs
sommario: How to find positions, velocities and meeting times along a line, and how to read graphs of motion.
---

## Position and displacement

:::definizione{#posizione titolo="Describing the position of an object"}
Describing motion along a straight road requires three choices:
- an **origin**, that is, a point on the road from which distances are measured;
- a **positive direction**, that is, one of the two directions of travel, marked with an arrow;
- a unit of length, usually the metre ($\mathrm m$).

The road with these three choices is called an **axis**, and the three choices together form the **reference frame**. The **position** $x$ of an object is its **coordinate** on this axis: a signed number that gives how many metres the object is from the origin and on which side. For example, $x=5\,\mathrm m$ is a point $5$ metres from the origin in the positive direction. A negative coordinate, such as $x=-3\,\mathrm m$, places the object on the side of the origin opposite the positive direction.

The **position function** assigns a position to each **time** $t$, that is, to each clock reading, measured in seconds ($\mathrm s$). The position at a single time does not tell in which direction the object is moving. The direction of motion is found by comparing the positions at two or more times, or from the velocity, if it is known. An object at $-4\,\mathrm m$, for example, may move towards $-1\,\mathrm m$ or towards $-7\,\mathrm m$.
:::

:::definizione{#distanza titolo="Displacement and distance travelled"}
Over a time interval the **displacement** is
$$
\Delta x=x_f-x_i,
$$
where $x_i$ is the initial position and $x_f$ is the final position (the subscripts $i$ and $f$ stand for "initial" and "final"). The symbol $\Delta$ is the Greek capital letter delta; placed before a quantity it denotes the difference between the final value and the initial value. The displacement is positive when the final coordinate is greater than the initial coordinate and negative when it is smaller.

The displacement depends on the reference frame in two ways.
- If the origin is shifted along the axis, both coordinates change by the same amount, so their difference is unchanged.
- If the direction of the axis is reversed, every coordinate changes sign, so the displacement changes sign too.

The **distance travelled** is the length of the path, that is, how many metres the object has actually covered; it is always positive or zero. If the object travels in the same direction throughout, the distance is $|\Delta x|$. The vertical bars denote the **absolute value** (or **magnitude**), that is, the number taken without its sign: $|-12|=12$. When the object turns back, the path is divided into legs travelled in a single direction, and the distance is the sum of the lengths of the legs. In the displacement, by contrast, legs in opposite directions count with opposite signs.
:::

:::esempio{titolo="A delivery with a turn back"}
A courier starts at $x_i=-2\,\mathrm{m}$, reaches $x=6\,\mathrm{m}$ and returns to $x_f=1\,\mathrm{m}$. The first leg covers $6-(-2)=8\,\mathrm{m}$ and the second $6-1=5\,\mathrm{m}$. The total displacement is
$$
\Delta x=x_f-x_i=1-(-2)=3\,\mathrm{m},
$$
while the distance travelled is $8+5=13\,\mathrm{m}$. The displacement is also obtained by adding the contributions of the two legs with their signs: the outward leg counts $+8\,\mathrm m$, the return leg $1-6=-5\,\mathrm{m}$, and $8+(-5)=3\,\mathrm m$. Going from $-2\,\mathrm{m}$ to $1\,\mathrm{m}$, the courier also crosses the origin. The final position is one metre from the origin, while the distance travelled depends on the entire sequence of legs.

The graph has time on the horizontal axis and position on the vertical axis, with two seconds for each leg: the line rises from P to Q and falls from Q to R.

::grafico{f="(-2+4*x)*(x<=2)+(11-2.5*x)*(x>2)" xmin=0 xmax=4 ymin=-3 ymax=7 punti="0,-2,pieno;2,6,pieno,Q;4,1,pieno,R" etichette="0.15,-2.25,P" nomi="t (s),x (m)" titolo="The position rises from −2 m to 6 m on the first leg and falls to 1 m on the second."}
:::

:::esempio{titolo="Negative positions measured from the same origin"}
On a track, a cart travels from $-18\,\mathrm m$ to $-6\,\mathrm m$ without reversing direction. The displacement is the difference between the final reading and the initial reading:
$$
\Delta x=-6-(-18)=-6+18=12\,\mathrm m.
$$
The displacement is positive, so the cart moves in the positive direction, even though it stays on the negative side of the origin.

Now the origin is moved $4\,\mathrm m$ in the positive direction, without changing the direction of the axis. Every point is $4\,\mathrm m$ further back with respect to the new origin, so $4\,\mathrm m$ is subtracted from each reading: the two readings become $-18-4=-22\,\mathrm m$ and $-6-4=-10\,\mathrm m$. Their difference is $-10-(-22)=12\,\mathrm m$, because the same correction has been subtracted from both. The displacement therefore depends on the motion of the cart and not on where the origin is placed.
:::

## Average velocity and units

:::definizione{#velocita titolo="Change in position per unit of time"}
**Average velocity** is the displacement divided by the time taken. Between two times $t_i<t_f$ it is
$$
v_m=\frac{x_f-x_i}{t_f-t_i}=\frac{\Delta x}{\Delta t},
$$
where $\Delta t=t_f-t_i$ is the duration of the interval and the subscript $m$ stands for "mean". If an object goes from $20\,\mathrm m$ to $8\,\mathrm m$ in $4\,\mathrm s$, then
$$
v_m=\frac{8-20}{4}\,\mathrm{m/s}=\frac{-12}{4}\,\mathrm{m/s}=-3\,\mathrm{m/s}.
$$
The duration is positive, so $v_m$ has the same sign as the displacement. Therefore a negative average velocity means that the final position is smaller than the initial position. The average velocity concerns the whole interval and does not tell how the object moved within it.

**Speed** is velocity taken without its sign, that is, its magnitude; it gives how many metres are covered each second, in whichever direction. **Average speed** is the total distance travelled divided by the total elapsed time. The distance travelled is always at least $|\Delta x|$, so the average speed is also at least $|v_m|$. On a trip back to the starting point the displacement is zero, so the average velocity is zero; the average speed, however, is positive if a positive distance is travelled.
:::

:::esempio{titolo="Ratios with the same elapsed time"}
A person walks $60\,\mathrm{m}$ away in $20\,\mathrm{s}$, stops for $10\,\mathrm{s}$ and returns in $30\,\mathrm{s}$. The total duration is $20+10+30=60\,\mathrm{s}$. The person returns to the starting point, so the total displacement is zero and $v_m=0$. The distance travelled is $60+60=120\,\mathrm{m}$ and the average speed is
$$
\frac{120\,\mathrm m}{60\,\mathrm s}=2\,\mathrm{m/s}.
$$
The stop is part of the requested interval, so its $10\,\mathrm s$ count towards the duration. Excluding it would answer a different question about the periods of motion alone.

In the graph the position rises to A, stays at $60\,\mathrm m$ between A and B during the stop and returns to zero at C.

::grafico{linee="0,0 20,60 30,60 60,0" xmin=0 xmax=64 ymin=-7 ymax=67 punti="0,0,pieno;20,60,pieno,A;30,60,pieno,B;60,0,pieno" etichette="59,7,C" nomi="t (s),x (m)" titolo="The total displacement is zero. The stop is the horizontal segment from A to B."}
:::

:::osservazione{#conversione titolo="Converting metres per second and kilometres per hour"}
The **International System** of units (abbreviated **SI**) is the set of units used in physics: the metre for lengths and the second for times. The SI unit of velocity is therefore the metre per second ($\mathrm{m/s}$). On roads the kilometre per hour ($\mathrm{km/h}$) is used instead, that is, the kilometres covered in one hour. To convert, both the length in the numerator and the time in the denominator are changed:
$$
54\,\frac{\mathrm{km}}{\mathrm{h}}
=\frac{54\cdot1000\,\mathrm{m}}{3600\,\mathrm{s}}
=15\,\mathrm{m/s}.
$$
One kilometre is $1000\,\mathrm{m}$ and one hour is $3600\,\mathrm{s}$, so converting from kilometres per hour to metres per second is the same as multiplying by $\dfrac{1000}{3600}$, that is, dividing the numerical value by $\dfrac{3600}{1000}=3.6$. The reverse conversion, from metres per second to kilometres per hour, is done by multiplying by $3.6$: for example $12\,\mathrm{m/s}=12\cdot3.6\,\mathrm{km/h}=43.2\,\mathrm{km/h}$. The number in kilometres per hour is always larger, because the kilometre per hour is a smaller unit: $1\,\mathrm{km/h}$ corresponds to $\dfrac{1}{3.6}\,\mathrm{m/s}$.

The two values describe the same velocity. This is checked by calculating the distance covered in the same time. At $54\,\mathrm{km/h}$, in one minute, which is $\dfrac{1}{60}$ of an hour, the distance covered is $\dfrac{54}{60}\,\mathrm{km}=0.9\,\mathrm{km}$. At $15\,\mathrm{m/s}$, in $60\,\mathrm{s}$ the distance covered is $15\cdot60=900\,\mathrm{m}$, which is the same distance.
:::

:::osservazione{titolo="Measurements consistent with a range of velocities"}
A **photogate** is a sensor that records when an object passes a point. Two photogates give positions of $8\,\mathrm m$ and $18\,\mathrm m$ separated by $2\,\mathrm s$. Each position may differ from its true value by at most $1\,\mathrm m$, while the duration is taken to be exact. The first true position is therefore between $7$ and $9\,\mathrm m$, and the second between $17$ and $19\,\mathrm m$.
- The smallest displacement is obtained with the second position as small as possible and the first as large as possible: $17-9=8\,\mathrm m$.
- The largest displacement is obtained the other way round: $19-7=12\,\mathrm m$.

Dividing by the same duration of $2\,\mathrm s$, the average velocity lies between $\dfrac{8}{2}=4\,\mathrm{m/s}$ and $\dfrac{12}{2}=6\,\mathrm{m/s}$. The central value $\dfrac{18-8}{2}=5\,\mathrm{m/s}$, on its own, does not show how much the velocity may vary.

This calculation holds because the two readings are independent, so they can lie at the indicated endpoints at the same time. If instead both were wrong by the same fixed error, for example because the measuring tape was laid with its zero shifted (a zero error), that error would cancel in the difference. To build the velocity interval, the uncertainty of each single reading is therefore distinguished from an error shared by both measurements.

In the graph the two vertical bars are the intervals $[7,9]$ and $[17,19]$; the three lines through them have slopes $4$, $5$ and $6\,\mathrm{m/s}$.

::grafico{f="4*x+9;5*x+8;6*x+7" xmin=0 xmax=2.4 ymin=4 ymax=22 linee="0,7 0,9;2,17 2,19" punti="0,8,pieno;2,18,pieno" etichette="0.12,11,[7, 9];1.75,21,[17, 19]" nomi="t (s),x (m)" titolo="The two measurement intervals allow average slopes from 4 to 6 m/s."}
:::

## The equation for uniform motion

::::teorema{#uniforme titolo="Position at constant velocity"}
**Uniform motion in a straight line** is motion along a line with constant velocity. The velocity $v$ is taken with its sign, that is, as the **component** along the axis: it is positive if the object moves in the positive direction and negative in the opposite direction. If the object is at position $x_0$ at the initial time $t_0$ (the subscript $0$ marks initial values), then throughout the interval in which the velocity stays constant
$$
x(t)=x_0+v(t-t_0).
$$
In this equation:
- $t-t_0$ is the time elapsed since the initial time;
- $v(t-t_0)$ is the displacement made in that time;
- adding the displacement to $x_0$ gives the coordinate at time $t$.

For example, a cart that starts at $3\,\mathrm m$ moving at $3\,\mathrm{m/s}$ is at $3+3\cdot2=9\,\mathrm m$ after $2\,\mathrm s$. The object makes equal displacements in intervals of equal duration; if instead different displacements are measured in two intervals of equal duration, the motion is not uniform. If $t_0=0$, the equation becomes $x(t)=x_0+vt$.

The same equation gives the duration of a journey. The displacement is $\Delta x=v\,\Delta t$; dividing both sides of the equality by $v$ gives $\Delta t=\dfrac{\Delta x}{v}$; for a journey of length $d$ travelled at speed $u$ the duration is $\dfrac{d}{u}$. A cyclist who covers $180\,\mathrm m$ at $6\,\mathrm{m/s}$ takes $\dfrac{180}{6}\,\mathrm s=30\,\mathrm s$.

:::dimostrazione
Over the interval from $t_0$ to $t$ the velocity is constant, so it equals the average velocity over that interval. For $t>t_0$ the definition of average velocity gives
$$
v=\frac{x(t)-x_0}{t-t_0}.
$$
Both sides, that is, the two expressions to the left and right of the equals sign, are multiplied by $t-t_0$, giving $v(t-t_0)=x(t)-x_0$. Then $x_0$ is added to both sides, giving $x(t)=x_0+v(t-t_0)$. At $t=t_0$ the equation gives $x(t_0)=x_0+v\cdot0=x_0$, as required by the initial condition.
:::
::::

:::esempio{titolo="An object crossing the origin"}
A cart starts at $x_0=6\,\mathrm{m}$ with $v=-2\,\mathrm{m/s}$ at $t_0=0$. Its position in metres, with $t$ in seconds, is
$$
x(t)=6-2t.
$$
The cart crosses the origin when its position is zero. Setting $6-2t=0$ gives $2t=6$, so $t=3\,\mathrm{s}$. After $5\,\mathrm{s}$ the cart is at $6-2\cdot5=-4\,\mathrm{m}$. The zero crossing concerns the position, while the velocity is still $-2\,\mathrm{m/s}$ at that instant.

In the graph the line starts at A, reaches position zero at Z and ends at B.

::grafico{f="6-2*x" xmin=0 xmax=6 ymin=-8 ymax=8 punti="0,6,pieno,A;3,0,pieno,Z;5,-4,pieno,B" nomi="t (s),x (m)" titolo="The line crosses position zero at Z and continues with the same slope."}
:::

:::esempio{titolo="A clock already reading five seconds"}
A light gate detects the object at $x_0=4\,\mathrm{m}$ when the clock reads $t_0=5\,\mathrm{s}$. The velocity is $3\,\mathrm{m/s}$. At $t=9\,\mathrm{s}$, $9-5=4$ seconds have elapsed since the detection, so
$$
x(9)=4+3\cdot(9-5)=4+3\cdot4=16,
$$
in metres. The sum $4+3\cdot9=31$ would also count the $5\,\mathrm s$ before $t_0$, whereas $4\,\mathrm{m}$ is exactly the position recorded at $5\,\mathrm{s}$. A quick check is to substitute $t=t_0$ in the equation: the result must be $x_0$.
:::

## The position–time graph

:::osservazione{#grafico-posizione titolo="The slope represents velocity"}
The **position–time graph** has time on the horizontal axis (the time axis) and position on the vertical axis. Each point of the graph has as its horizontal coordinate a time and as its vertical coordinate the position at that time. Uniform motion is represented by a straight line over the period studied, because the position changes by the same amount in equal times.

The **slope** of the line is the vertical change divided by the horizontal change between two distinct points on it, each with its unit. Between $(t_1,x_1)$ and $(t_2,x_2)$ it is
$$
\frac{x_2-x_1}{t_2-t_1},
$$
that is, a displacement divided by a duration, measured in metres per second; therefore the slope is the velocity.
- A rising line indicates positive velocity.
- A falling line indicates negative velocity.
- A horizontal line indicates rest, that is, the object is stationary.

The height of a point on the graph gives the position, measured in metres; the slope gives the velocity, measured in metres per second. The **intercept** is the vertical coordinate of the point where the line meets the vertical axis, that is, the position at time $t=0$.

The angle at which the line appears on the screen is not enough to read the velocity, because changing the scale of either axis changes the apparent angle. The line through $(0\,\mathrm s,0\,\mathrm m)$ and $(1\,\mathrm s,2\,\mathrm m)$ has a slope of $2\,\mathrm{m/s}$ whether one metre takes up one grid square or two; in the second drawing the line looks steeper. In addition, a sloping straight line indicates uniform motion only if position is on the vertical axis: on a velocity–time graph the same line indicates a changing velocity.
:::

:::esempio{titolo="Reading the slope between two measurements"}
Two points on the graph are $A=(2\,\mathrm{s},7\,\mathrm{m})$ and $B=(6\,\mathrm{s},15\,\mathrm{m})$. Between the two readings the displacement is $15-7=8\,\mathrm{m}$ and the duration is $6-2=4\,\mathrm{s}$, so
$$
v=\frac{8\,\mathrm m}{4\,\mathrm s}=2\,\mathrm{m/s}.
$$
If the uniform-motion equation already holds at $t=0$, the position at $t=0$ is found by going back $2\,\mathrm s$ from A: $x(0)=7-2\cdot2=3$, in metres. This value is the intercept of the line. If the observation starts at $t=2\,\mathrm{s}$, the value obtained for $t=0$ is an **extrapolation**, that is, an estimate outside the observed interval, and it requires the assumption that the motion was uniform before as well.

::grafico{f="2*x+3" xmin=0 xmax=7 ymin=0 ymax=19 punti="2,7,pieno,A;6,15,pieno,B" nomi="t (s),x (m)" titolo="From A to B the ratio of 8 m to 4 s is 2 m/s."}
:::

:::attenzione
A position–time graph does not show the shape of the road. A falling line can describe a vehicle on a level road travelling towards decreasing coordinates. Similarly, two parallel position–time lines at different heights describe two objects moving along the road with the same velocity at different positions.
:::

:::esempio{titolo="Checking velocity using three measurements"}
A sensor records $x=1\,\mathrm m$ at $t=1\,\mathrm s$, $x=7\,\mathrm m$ at $t=3\,\mathrm s$ and $x=10\,\mathrm m$ at $t=5\,\mathrm s$. The average velocities in the two intervals are
$$
\frac{7-1}{3-1}\,\mathrm{m/s}=3\,\mathrm{m/s},\qquad
\frac{10-7}{5-3}\,\mathrm{m/s}=1.5\,\mathrm{m/s}.
$$
In the graph the three points are A, B and C. The slopes of segments AB and BC differ, so a single straight line cannot pass through all three points and the motion is not uniform. The segment joining the first and last points is called the **chord** AC; its slope is
$$
\frac{10-1}{5-1}\,\mathrm{m/s}=\frac{9}{4}\,\mathrm{m/s}=2.25\,\mathrm{m/s},
$$
that is, the average velocity over the whole observation. The slope of a chord gives the average velocity between two measurements even when the **instantaneous velocity**, that is, the velocity at each single instant, is unknown between those points.

::grafico{linee="1,1 3,7 5,10" segmenti="1,1,5,10" punti="1,1,pieno;3,7,pieno,B;5,10,pieno,C" etichette="0.8,1.75,A" xmin=0 xmax=6 ymin=0 ymax=12 nomi="t (s),x (m)" titolo="B lies above chord AC. Segments AB and BC have different slopes."}
:::

## Meeting and catching up

:::teorema{#incontri titolo="The same position at the same time"}
Two objects meet if they occupy the same position at the same time. Therefore both position equations must be written with the same reference frame and the same clock. If both apply from $t=0$, with initial positions $x_{A0}$, $x_{B0}$ and velocities $v_A$, $v_B$, the meeting time solves the equation
$$
x_{A0}+v_A t=x_{B0}+v_B t.
$$
The terms with $t$ are moved to the left and the others to the right, $(v_A-v_B)\,t=x_{B0}-x_{A0}$. For $v_A\ne v_B$, dividing by $v_A-v_B$ gives
$$
t=\frac{x_{B0}-x_{A0}}{v_A-v_B}.
$$
The numerator is the initial **gap**, that is, the difference between the two positions; the denominator $v_A-v_B$ is the **relative velocity**, that is, the amount by which the gap decreases each second. For two objects moving towards each other the speeds are added; for two objects moving in the same direction they are subtracted. Two objects $140\,\mathrm m$ apart approaching each other at $4$ and $3\,\mathrm{m/s}$ meet after $\dfrac{140}{4+3}\,\mathrm s=20\,\mathrm s$.

If an object leaves position $x_{B0}$ at time $t_B$, its equation is $x_B=x_{B0}+v_B(t-t_B)$ for $t\geq t_B$. At $t=t_B$ this gives $x_B=x_{B0}$, so $x_{B0}$ is the coordinate of B when it starts; if B is at rest before starting, that is also its position up to $t_B$.

Each position equation applies only over a time interval, its **domain**. The result of the equation must lie in the time period when both equations apply. A negative value describes a meeting before $t=0$ only if the motion can be extended to that period. Two objects with the same velocity keep the same gap, so they do not meet if they start from different points. If they start at the same position with the same velocity, their equations agree throughout the motion and the objects stay together.
:::

:::esempio{titolo="Two objects approaching each other"}
$A$ starts from $1\,\mathrm{m}$ with velocity $2\,\mathrm{m/s}$; $B$ starts from $7\,\mathrm{m}$ with velocity $-1\,\mathrm{m/s}$. At the start the gap is $7-1=6\,\mathrm{m}$ and it decreases by $2+1=3\,\mathrm{m}$ each second. Setting the two equations equal:
$$
1+2t=7-t,\qquad 2t+t=7-1,\qquad 3t=6,\qquad t=2\,\mathrm{s}.
$$
The meeting point, from the equation for $A$, is $x=1+2\cdot2=5\,\mathrm{m}$. The equation for $B$ gives $7-2=5\,\mathrm m$, the same value.

::grafico{f="2*x+1;-x+7" xmin=0 xmax=4 ymin=0 ymax=10 punti="2,5,pieno,I" nomi="t (s),x (m)" legenda="A;B" titolo="The lines meet at I. Both objects occupy the same position at 2 s."}
:::

:::esempio{titolo="Catching up after a delayed start"}
$A$ leaves $x=0$ at $3\,\mathrm{m/s}$ at $t=0$. $B$ leaves the same point at $5\,\mathrm{m/s}$ at $t=4\,\mathrm{s}$. When $B$ starts, $A$ has already covered $3\cdot4=12\,\mathrm{m}$, which is its lead. The lead then decreases by $5-3=2\,\mathrm{m}$ each second, so it reaches zero $\dfrac{12}{2}=6\,\mathrm{s}$ after $B$ starts. On the shared clock the meeting is at $t=4+6=10\,\mathrm{s}$. The position equations give $x_A=3\cdot10=30\,\mathrm{m}$ and $x_B=5\cdot(10-4)=30\,\mathrm{m}$.

::grafico{f="3*x;5*max(0,x-4)" xmin=0 xmax=12 ymin=0 ymax=41 punti="4,0,pieno,B;10,30,pieno,I" nomi="t (s),x (m)" legenda="A;B" titolo="B remains at the origin until 4 s. I marks the meeting after B sets off."}
:::

:::esempio{titolo="Two bodies at the same position at different times"}
At $t=0$, two carts start at coordinates $0$ and $10\,\mathrm m$, with respective velocities $2$ and $3\,\mathrm{m/s}$ in the positive direction. The first passes $x=20\,\mathrm m$ after $\dfrac{20}{2}=10\,\mathrm s$, the second after $\dfrac{20-10}{3}=\dfrac{10}{3}\,\mathrm s$. Both pass through that point, but at different times, so they do not meet there. Equating the position equations gives $2t=10+3t$, so $t=-10\,\mathrm s$. This time comes before the start, so it belongs only to the extensions of the lines and not to a real meeting. After the start the separation in metres is $(10+3t)-2t=10+t$, so it grows throughout the observed interval.
:::

:::esempio{titolo="The applicable interval in a pursuit"}
On a track, trolley $A$ passes the origin at $t=0$ and maintains $3\,\mathrm{m/s}$. Trolley $B$ waits at rest at the origin, leaves at $t=2\,\mathrm{s}$ at $5\,\mathrm{m/s}$ and stops on a platform at $t=4\,\mathrm{s}$. The two equations $x_A=3t$ and $x_B=5(t-2)$, with positions in metres, give $3t=5t-10$, so $t=5\,\mathrm{s}$. This value uses the equation for $B$ beyond the time when $B$ stops, so it does not describe a meeting. Indeed, at $t=4\,\mathrm{s}$, $B$ is at $5\cdot(4-2)=10\,\mathrm{m}$ and $A$ is already at $3\cdot4=12\,\mathrm{m}$.

The intervals are then checked one by one.
- From $2$ to $4\,\mathrm{s}$ the gap $x_A-x_B$ goes from $6-0=6\,\mathrm m$ to $12-10=2\,\mathrm{m}$ and always decreases by the same amount each second, so it stays positive throughout that interval.
- After $4\,\mathrm{s}$, $x_A$ is compared with the fixed coordinate $10\,\mathrm{m}$ of $B$. The equation $3t=10$ gives $t=\dfrac{10}{3}\,\mathrm{s}$, which comes before the stop begins, so it does not belong to this interval.

The two trolleys share the origin at the initial instant and do not meet after $B$ leaves. The domain check is repeated for each interval, because from one interval to the next both the slope and the applicable equations change.

::grafico{f="3*x;5*min(max(0,x-2),2)" xmin=0 xmax=6 ymin=0 ymax=20 punti="2,0,pieno;4,10,pieno;4,12,pieno" segmenti="4,10,4,12" legenda="A;B" nomi="t (s),x (m)" titolo="When B stops at 4 s, A is already 2 m ahead. The equations applying after B starts have no intersection."}
:::

## Motion in stages

:::osservazione{#tratti titolo="One interval for each velocity"}
A motion is **in stages** when the velocity stays constant for some time, then changes and stays constant over another interval. In each stage the displacement is the velocity multiplied by the duration of the stage; the total displacement is the sum of the displacements with their signs. The position at the end of one stage is the initial position of the next, so on the position–time graph the straight segments join without jumps and form a **broken line**.

On a **velocity–time graph** time is on the horizontal axis and velocity on the vertical axis; each stage at constant velocity is a horizontal segment. The displacement for a stage corresponds to the **signed area** of the rectangle between the segment and the time axis. Its base measures time and its height measures velocity, so the product has the unit $\mathrm{m/s}\cdot\mathrm s=\mathrm m$, that is, a length. A rectangle below the time axis corresponds to a negative velocity and gives a negative displacement. To find the distance travelled, the areas are instead added without their signs, that is, their magnitudes.
:::

:::esempio{titolo="Two rectangles above and below the axis"}
A vehicle maintains $v_1=4\,\mathrm{m/s}$ for $3\,\mathrm{s}$ and then $v_2=-2\,\mathrm{m/s}$ for $4\,\mathrm{s}$. The two contributions are
$$
\Delta x_1=4\cdot3=12\,\mathrm{m},\qquad \Delta x_2=(-2)\cdot4=-8\,\mathrm{m},
$$
so the total displacement is $\Delta x=12+(-8)=4\,\mathrm{m}$. The distance travelled is $12+8=20\,\mathrm{m}$. The total duration is $3+4=7\,\mathrm{s}$, so the average velocity is $\dfrac{4}{7}\,\mathrm{m/s}$ and the average speed is $\dfrac{20}{7}\,\mathrm{m/s}$. The average velocity is positive, like the total displacement.

::grafico{linee="0,4 3,4;3,-2 7,-2" segmenti="3,0,3,4;3,0,3,-2;7,0,7,-2" etichette="1,2.15,+12 m;4.6,-1.23,−8 m" xmin=0 xmax=7 ymin=-3 ymax=5 nomi="t (s),v (m/s)" titolo="The first rectangle has area +12 m. The second contributes −8 m."}
:::

:::osservazione{#media-tratti titolo="Averaging over equal distances or equal times"}
For motion in two stages the average is always the total displacement (or distance) divided by the total duration. Two special cases have a formula of their own.

**Stages of equal duration.** Let $\tau$ (the Greek letter tau) be the common duration and $v_1$, $v_2$ the signed velocities. The total displacement is $v_1\tau+v_2\tau$ and the total duration is $2\tau$, so
$$
v_m=\frac{v_1\tau+v_2\tau}{2\tau}=\frac{(v_1+v_2)\,\tau}{2\tau}=\frac{v_1+v_2}{2}.
$$
In this case the average velocity is the arithmetic mean of the two velocities: for $6\,\mathrm{m/s}$ and $-2\,\mathrm{m/s}$ it is $\dfrac{6+(-2)}{2}=2\,\mathrm{m/s}$.

**Stages of equal length.** Let $d$ be the common length and $u_1$, $u_2$ the speeds, both positive. Since duration equals distance divided by speed, the durations of the stages are $\dfrac{d}{u_1}$ and $\dfrac{d}{u_2}$. The average speed is the total distance $2d$ divided by the sum of the durations:
$$
\frac{2d}{\frac{d}{u_1}+\frac{d}{u_2}}
=\frac{2u_1u_2}{u_1+u_2}.
$$
The second step is obtained by writing the denominator as $\dfrac{d\,u_2+d\,u_1}{u_1u_2}$ and cancelling $d$. For two $100\,\mathrm{m}$ stages travelled at $2$ and $4\,\mathrm{m/s}$, the first takes $\dfrac{100}{2}=50\,\mathrm{s}$ and the second $\dfrac{100}{4}=25\,\mathrm{s}$. The average speed is
$$
\frac{200\,\mathrm m}{75\,\mathrm s}=\frac{8}{3}\,\mathrm{m/s}\approx2.67\,\mathrm{m/s},
$$
and the formula gives the same value, $\dfrac{2\cdot2\cdot4}{2+4}=\dfrac{16}{6}=\dfrac{8}{3}$. The result is closer to $2\,\mathrm{m/s}$ than to $4\,\mathrm{m/s}$, because $50$ of the $75$ seconds, that is, two thirds of the time, are spent at $2\,\mathrm{m/s}$. Over equal distances, therefore, the average speed is smaller than the arithmetic mean $\dfrac{2+4}{2}=3\,\mathrm{m/s}$.

When the average speed $u_m$ and one of the two speeds are known, the other is found from the **reciprocals** (the reciprocal of a number $a$ is $\dfrac{1}{a}$). The equality between the durations, $\dfrac{2d}{u_m}=\dfrac{d}{u_1}+\dfrac{d}{u_2}$, is divided by $d$, giving $\dfrac{2}{u_m}=\dfrac{1}{u_1}+\dfrac{1}{u_2}$. Subtracting $\dfrac{1}{u_1}$ from both sides gives
$$
\frac{1}{u_2}=\frac{2}{u_m}-\frac{1}{u_1}.
$$
With $u_1=8\,\mathrm{m/s}$ and $u_m=6\,\mathrm{m/s}$ this gives $\dfrac{1}{u_2}=\dfrac{2}{6}-\dfrac{1}{8}=\dfrac{8}{24}-\dfrac{3}{24}=\dfrac{5}{24}\,\mathrm{s/m}$, so $u_2=\dfrac{24}{5}\,\mathrm{m/s}=4.8\,\mathrm{m/s}$.
:::

:::esempio{titolo="Including a stop at a traffic light in the average velocity"}
A cyclist travels for $40\,\mathrm s$ at $5\,\mathrm{m/s}$, stops for $10\,\mathrm s$, then continues in the same direction for $20\,\mathrm s$ at $2\,\mathrm{m/s}$. The displacements of the three stages are $5\cdot40=200\,\mathrm m$, $0\,\mathrm m$ and $2\cdot20=40\,\mathrm m$, so the total displacement is $200+0+40=240\,\mathrm m$. The duration of the whole observation is $40+10+20=70\,\mathrm s$ and the average velocity is
$$
v_m=\frac{240}{70}\,\mathrm{m/s}=\frac{24}{7}\,\mathrm{m/s}.
$$
The stop counts towards the duration because it falls in the requested interval. Dividing by the $60\,\mathrm s$ of moving time alone would give $\dfrac{240}{60}=4\,\mathrm{m/s}$, which is the average over the moving time and answers a different question.

The table gives the position at each time when the motion changes. From $40$ to $50\,\mathrm s$ two consecutive rows have the same position, $200\,\mathrm m$: during the stop the duration grows by ten seconds while the change in coordinate is zero. On the graph the stop is the horizontal segment between two rising sections, and the final position $240\,\mathrm m$ results from adding the two rising sections.

| Time (s) | Position (m) |
| ---: | ---: |
| 0 | 0 |
| 40 | 200 |
| 50 | 200 |
| 70 | 240 |

::grafico{linee="0,0 40,200 50,200 70,240" xmin=0 xmax=74 ymin=0 ymax=260 punti="0,0,pieno;40,200,pieno;50,200,pieno;70,240,pieno" etichette="41,206,200 m" nomi="t (s),x (m)" titolo="The position is constant from 40 to 50 s. The final section has a slope of 2 m/s."}
:::
