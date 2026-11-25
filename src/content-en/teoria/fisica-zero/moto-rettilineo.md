---
titolo: Position, displacement and uniform motion in a straight line
sommario: Describe motion along a straight line using positions, times, velocities, position equations, and graphs, and solve problems about when objects meet.
---

## The reference frame

:::definizione{#riferimento titolo="Reference frame"}
To describe the motion of an object, we must specify what its positions are measured relative to. A seated passenger is at rest relative to the bus seat. Relative to the road, the passenger moves with the bus.

A **reference frame** comprises the choices needed to specify positions and measure time. For motion along a straight line, we choose a point as the origin, a positive direction along the axis, and a unit of length. We also choose an instant to label $t=0$ and measure time with a clock.

For example, on a straight road, a bus stop can serve as the origin, the direction toward the town square as the positive direction, and the instant a person sets off as the initial time. All positions and times in the problem refer to these choices.
:::

:::definizione{#posizione-e-traiettoria titolo="Position and trajectory"}
The **position** $x$ indicates where the object is relative to the origin. If the positive direction is to the right, $x=5\,\mathrm{m}$ indicates a point $5\,\mathrm{m}$ to the right of the origin, and $x=-3\,\mathrm{m}$ indicates a point $3\,\mathrm{m}$ to the left.

The **trajectory** is the set of points the object occupies as it moves. Motion is **rectilinear** when the trajectory lies along a straight line. To study a cart moving along a track, we can follow one point on the cart, neglecting the dimensions of the cart compared with the distances involved.

Position depends on the choice of origin. Moving the origin changes the coordinates, while the distances between the same points stay the same.

::grafico{vettori="-5,0,7,0,x" punti="-3,0,pieno,A;0,0,pieno,O;5,0,pieno,B" etichette="-3,-0.8,−3 m;0,-0.8,0;5,-0.8,5 m" assi=0 uguale=1 xmin=-6 xmax=8 ymin=-2 ymax=2 titolo="The position of $A$ is $-3\,\mathrm{m}$ and that of $B$ is $5\,\mathrm{m}$ relative to the origin $O$."}
:::

## Displacement and distance traveled

:::definizione{#spostamento titolo="Displacement along a straight line"}
To find how much the position has changed, we compare the final position $x_f$ with the initial position $x_i$. The **displacement** along the axis is the difference
$$
\Delta x=x_f-x_i.
$$
The symbol $\Delta x$, read “delta x,” denotes the change in position. If $x_i=2\,\mathrm{m}$ and $x_f=9\,\mathrm{m}$, the displacement is $7\,\mathrm{m}$. If the object moves from $9\,\mathrm{m}$ to $2\,\mathrm{m}$, the displacement is $-7\,\mathrm{m}$.

The sign gives the direction of the overall displacement. Its magnitude is $|\Delta x|$, the distance between the initial and final positions. These two endpoints are enough to calculate displacement, even if the object changed direction along the way.
:::

:::definizione{#distanza-percorsa titolo="Distance traveled"}
The **distance traveled** $s$ is the total length of the path. We find it by adding the lengths of the individual legs, counting each length as positive. If the object moves along the line without changing direction, then $s=|\Delta x|$.

A person starts at $x=0$, reaches $x=6\,\mathrm{m}$, and returns to $x=2\,\mathrm{m}$. The first leg is $6\,\mathrm{m}$ long and the second is $4\,\mathrm{m}$ long, so
$$
s=6\,\mathrm{m}+4\,\mathrm{m}=10\,\mathrm{m},
\qquad
\Delta x=2\,\mathrm{m}-0\,\mathrm{m}=2\,\mathrm{m}.
$$
The person has traveled $10\,\mathrm{m}$ and is $2\,\mathrm{m}$ ahead of the starting point. If the person returned to the starting point, the displacement would be zero and the distance traveled would be positive.
:::

## Time intervals

:::definizione{#intervallo-di-tempo titolo="Instant and duration"}
An **instant** is a reading on the clock chosen for the problem. A **time interval**, or duration, is the difference between two successive clock readings.
$$
\Delta t=t_f-t_i.
$$
If an object starts moving at $t_i=4\,\mathrm{s}$ and stops at $t_f=11\,\mathrm{s}$, it moves for $7\,\mathrm{s}$. The final clock reading is $11\,\mathrm{s}$, while the time spent moving is $7\,\mathrm{s}$.

The time intervals used to calculate velocity are positive. Unit conversions use the relationships $1\,\mathrm{min}=60\,\mathrm{s}$ and $1\,\mathrm{h}=3600\,\mathrm{s}$. An interval of $2\,\mathrm{min}$ and $30\,\mathrm{s}$ therefore equals $150\,\mathrm{s}$. In minutes it is $2.5\,\mathrm{min}$ because $30\,\mathrm{s}$ is half a minute.
:::

## Average velocity and average speed

:::definizione{#velocita-media titolo="Average velocity"}
The **average velocity** along an axis compares the displacement with the time taken. It is defined by
$$
v_m=\frac{\Delta x}{\Delta t},
\qquad \Delta t>0.
$$
Its unit in the International System of Units is the meter per second, $\mathrm{m/s}$. A displacement of $12\,\mathrm{m}$ in $4\,\mathrm{s}$ gives $v_m=3\,\mathrm{m/s}$. A displacement of $-12\,\mathrm{m}$ in the same time gives $v_m=-3\,\mathrm{m/s}$.

The average velocity has the same sign as the overall displacement because the time interval is positive. Average velocity describes the entire interval. By itself, it does not specify how the object moved during each part of that interval.
:::

:::definizione{#rapidita-media titolo="Average speed"}
The **average speed**, or mean speed, is a scalar equal to the distance traveled divided by the total time.
$$
u_m=\frac{s}{\Delta t}.
$$
Here the symbol $u_m$ distinguishes it from the signed average velocity. Average speed is nonnegative. For a round trip covering a total of $20\,\mathrm{m}$ in $10\,\mathrm{s}$, we obtain $u_m=2\,\mathrm{m/s}$. If the final point coincides with the initial point, the average velocity is zero.

When a trip includes stops, the total time includes the time spent at rest. If an object travels $30\,\mathrm{m}$ in $20\,\mathrm{s}$ and then stops for $10\,\mathrm{s}$, its average speed over the full $30\,\mathrm{s}$ is $1\,\mathrm{m/s}$.
:::

:::attenzione{titolo="Averaging speeds"}
The average speed is generally different from the arithmetic mean of the speeds on the individual legs. An object travels $12\,\mathrm{m}$ at $2\,\mathrm{m/s}$ and another $12\,\mathrm{m}$ at $4\,\mathrm{m/s}$. The two legs take $6\,\mathrm{s}$ and $3\,\mathrm{s}$, respectively, so
$$
u_m=\frac{24\,\mathrm{m}}{9\,\mathrm{s}}
=\frac{8}{3}\,\mathrm{m/s}
\approx2.67\,\mathrm{m/s}.
$$
The arithmetic mean would be $3\,\mathrm{m/s}$. The object spends more time on the slower leg, so the two legs contribute different amounts to the total time.
:::

## Converting speed units

:::teorema{#conversione-velocita titolo="Meters per second and kilometers per hour"}
Since one kilometer contains $1000$ meters and one hour contains $3600$ seconds, it follows that
$$
1\,\mathrm{km/h}
=\frac{1000\,\mathrm{m}}{3600\,\mathrm{s}}
=\frac{1}{3.6}\,\mathrm{m/s}.
$$
Therefore, dividing the numerical value in $\mathrm{km/h}$ by $3.6$ gives the value in $\mathrm{m/s}$. To convert in the opposite direction, multiply by $3.6$.

For example, $36\,\mathrm{km/h}=10\,\mathrm{m/s}$ and $5\,\mathrm{m/s}=18\,\mathrm{km/h}$. Multiplying a velocity in meters per second by a time interval in seconds gives a displacement in meters. Multiplying a velocity in kilometers per hour by a time interval in hours gives a displacement in kilometers.
:::

## Uniform motion in a straight line

:::definizione{#moto-uniforme titolo="Uniform motion in a straight line"}
An object undergoes **uniform motion in a straight line** if it moves along a straight line with constant velocity. In equal time intervals, it undergoes equal displacements in the same direction.

For example, a cart that moves forward $2\,\mathrm{m}$ every second has a constant velocity $v=2\,\mathrm{m/s}$. If it travels in the negative direction along the axis, covering $2\,\mathrm{m}$ each second, its velocity is $v=-2\,\mathrm{m/s}$. The signed velocity remains constant throughout the interval over which the model applies.

This model can describe actual motion when the changes in velocity over the interval of interest are negligible. Starting and stopping require a different description.
:::

::::teorema{#legge-oraria titolo="Position equation for uniform motion"}
If at time $t_0$ an object is at position $x_0$ and from then on maintains a constant velocity $v$, its position at time $t$ is
$$
x=x_0+v(t-t_0).
$$
The equation that gives position as a function of time is called the **position equation**. Choosing $t_0=0$ gives $x=x_0+vt$.

An object that starts at $x_0=3\,\mathrm{m}$ with $v=2\,\mathrm{m/s}$ is at $x=11\,\mathrm{m}$ after $4\,\mathrm{s}$. The product $vt$ gives the displacement of $8\,\mathrm{m}$. Adding the initial position gives the final position.

:::dimostrazione
We can derive the displacement from the definition of average velocity. Since velocity is constant in uniform motion, the average velocity over any interval equals $v$. For $t>t_0$, we therefore have
$$
v=\frac{x-x_0}{t-t_0}.
$$
Multiplying by $t-t_0$ gives $x-x_0=v(t-t_0)$. Adding $x_0$ to both sides gives the position equation.
:::
::::

:::osservazione{#tempo-di-arrivo titolo="Arrival time"}
To find the time needed to reach a given position at a constant, nonzero velocity, we use
$$
t-t_0=\frac{x-x_0}{v}.
$$
An object that starts at $x_0=10\,\mathrm{m}$ and moves with $v=-2\,\mathrm{m/s}$ reaches the origin after $5\,\mathrm{s}$ because its displacement is $-10\,\mathrm{m}$ and the ratio of two negative numbers is positive. The result must fall within the interval for which the position equation describes the motion.
:::

## Position-time graphs

:::definizione{#grafico-orario titolo="Position-time graph"}
On a **position-time graph**, time is on the horizontal axis and position is on the vertical axis. Each point shows the position occupied at a particular instant. The straight line $x=x_0+vt$ represents uniform motion.

A rising line corresponds to a positive velocity and a falling line to a negative velocity. A horizontal line indicates a constant position, so the object is at rest. The height of the graph at $t=0$ gives $x_0$.

To find the velocity from two points, divide the change in position by the change in time. For a straight line through $(0\,\mathrm{s},3\,\mathrm{m})$ and $(4\,\mathrm{s},11\,\mathrm{m})$, this gives $v=2\,\mathrm{m/s}$. The graph shows how position changes over time, while a drawing of the trajectory shows the points the object passes through in space.

::grafico{f="3+2*x" punti="0,3;4,11" segmenti="0,3,4,3;4,3,4,11" xmin=0 xmax=6 ymin=0 ymax=16 nomi="t,x" legenda=0 titolo="Position equation $x=3+2t$, with $t$ in seconds and $x$ in meters. In $4\,\mathrm{s}$ the position increases by $8\,\mathrm{m}$."}

::grafico{f="10-2*x;4" xmin=0 xmax=5 ymin=0 ymax=12 nomi="t,x" legenda="x_A=10-2t;x_B=4" titolo="Time in seconds and position in meters. Object $A$ moves in the negative direction, while $B$ remains at position $4\,\mathrm{m}$."}
:::

## Meetings and delayed starts

:::teorema{#incontro titolo="When two objects meet"}
Two objects on the same straight line meet when they occupy the **same position at the same time**. Their position equations must use the same origin and the same clock. We therefore find the time at which they meet by solving
$$
x_A(t)=x_B(t).
$$
If $A$ starts at $0$ with velocity $2\,\mathrm{m/s}$ and $B$ starts at $12\,\mathrm{m}$ with velocity $-1\,\mathrm{m/s}$, we have $2t=12-t$. Therefore $3t=12$, and the objects meet after $4\,\mathrm{s}$ at position $8\,\mathrm{m}$. The equations apply for $t\geq0$, so the time we found is valid.

::grafico{f="2*x;12-x" punti="4,8,pieno,I" xmin=0 xmax=6 ymin=0 ymax=14 nomi="t,x" legenda="x_A=2t;x_B=12-t" titolo="Time in seconds and position in meters. The intersection of the lines shows that the objects meet at $t=4\,\mathrm{s}$ and $x=8\,\mathrm{m}$."}
:::

:::osservazione{#partenza-ritardata titolo="Delayed start"}
If an object starts at time $t_0$, it has been moving for $t-t_0$. Object $A$ starts at the origin at $t=0$ with $v_A=1\,\mathrm{m/s}$. Object $B$ starts at the same origin at $t=3\,\mathrm{s}$ with $v_B=2\,\mathrm{m/s}$. After $B$ starts, the position equations are
$$
x_A=t,
\qquad x_B=2(t-3),
\qquad t\geq3\,\mathrm{s},
$$
with positions in meters and $t$ in seconds. The equation $t=2(t-3)$ gives $t=6\,\mathrm{s}$ and $x=6\,\mathrm{m}$. The second object has traveled for $3\,\mathrm{s}$, while the first has traveled for $6\,\mathrm{s}$.

The check $6\geq3$ confirms that the objects meet when both equations apply. The fact that they are initially at the same point, before the second object starts, is a separate event from the meeting we are looking for after it starts.
:::
