---
titolo: Uniform motion in a straight line and graphs
sommario: How to find positions, velocities and meeting times along a line, and how to read graphs of motion.
---

## Position and displacement

:::definizione{#posizione titolo="Describing the position of an object"}
To describe motion along a straight road, choose an origin, a positive direction along the road and a unit of length. The **position** $x$ is the object's coordinate in this reference frame. The position function assigns a position to each time $t$. A negative coordinate places the object on the side of the origin opposite the positive direction. To determine the direction of motion, compare the positions at two or more times, or use the velocity if it is known.
:::

:::definizione{#distanza titolo="Displacement and distance travelled"}
The **displacement** over an interval is $\Delta x=x_f-x_i$, where $x_i$ is the initial position and $x_f$ is the final position. The displacement is positive when the final coordinate exceeds the initial coordinate. If the origin is shifted along the axis, both coordinates change by the same amount, so their difference is unchanged. Reversing the direction of the axis reverses the sign of the displacement.

The **distance travelled** is the length of the path. When the object travels in the same direction throughout, this distance is $|\Delta x|$. If the object turns back, the distance is the sum of the lengths of the individual legs. Legs in opposite directions contribute with opposite signs to the displacement.
:::

:::esempio{titolo="A delivery with a turn back"}
A courier starts at $x_i=-2\,\mathrm{m}$, reaches $x=6\,\mathrm{m}$ and returns to $x_f=1\,\mathrm{m}$. The first leg covers $8\,\mathrm{m}$ and the second $5\,\mathrm{m}$. The total displacement is $1-(-2)=3\,\mathrm{m}$ and the distance travelled is $8+5=13\,\mathrm{m}$. Checking the signs, the return leg contributes $-5\,\mathrm{m}$ to the displacement. The trip from $-2\,\mathrm{m}$ to $1\,\mathrm{m}$ also involves crossing the origin. The final position is one metre from the origin, while the distance travelled depends on the entire sequence of legs.

::grafico{f="(-2+4*x)*(x<=2)+(11-2.5*x)*(x>2)" xmin=0 xmax=4 ymin=-3 ymax=7 punti="0,-2,pieno,P;2,6,pieno,Q;4,1,pieno,R" nomi="t (s),x (m)" titolo="The position rises from −2 m to 6 m on the first leg and falls to 1 m on the second."}
:::

## Average velocity and units

:::definizione{#velocita titolo="Change in position per unit of time"}
**Average velocity** compares displacement with elapsed time. Between two times $t_i<t_f$ it is
$$
v_m=\frac{x_f-x_i}{t_f-t_i}=\frac{\Delta x}{\Delta t}.
$$
The denominator is positive, so $v_m$ has the same sign as the displacement. This describes the whole interval and leaves open how the object moved within it. Average speed is the total distance divided by the total elapsed time. The distance travelled is at least $|\Delta x|$, so the average speed is at least $|v_m|$. On a trip back to the starting point the average velocity is zero, and the average speed is positive if a positive distance is travelled.
:::

:::esempio{titolo="Ratios with the same elapsed time"}
A person walks $60\,\mathrm{m}$ away in $20\,\mathrm{s}$, stops for $10\,\mathrm{s}$ and returns in $30\,\mathrm{s}$. The final time is $60\,\mathrm{s}$ after the initial time. The total displacement is zero, so $v_m=0$. The distance travelled is $120\,\mathrm{m}$ and the average speed is $\dfrac{120}{60}\,\mathrm{m/s}=2\,\mathrm{m/s}$. The stop is included in the requested interval. Excluding it would answer a different question about the periods of motion alone.

::grafico{f="(3*x)*(x<=20)+60*(x>20)*(x<=30)+(120-2*x)*(x>30)" xmin=0 xmax=60 ymin=-4 ymax=65 punti="0,0,pieno,O;20,60,pieno,A;30,60,pieno,B;60,0,pieno" etichette="58,7,C" nomi="t (s),x (m)" titolo="The total displacement is zero. The stop is the horizontal segment from A to B."}
:::

:::osservazione{#conversione titolo="Converting metres per second and kilometres per hour"}
The SI unit of velocity is the metre per second. The conversion involves both the length in the numerator and the time in the denominator,
$$
54\,\frac{\mathrm{km}}{\mathrm{h}}
=\frac{54\cdot1000\,\mathrm{m}}{3600\,\mathrm{s}}
=15\,\mathrm{m/s}.
$$
One kilometre is $1000\,\mathrm{m}$ and one hour is $3600\,\mathrm{s}$, so divide the numerical value by $3.6$ to convert kilometres per hour to metres per second. Multiply by $3.6$ for the reverse conversion. The result describes the same velocity. As a quick check, calculate the distance travelled in the same time from either value. At $54\,\mathrm{km/h}$ the distance covered in one minute is $0.9\,\mathrm{km}$. At $15\,\mathrm{m/s}$ the distance covered in $60\,\mathrm{s}$ is $900\,\mathrm{m}$.
:::

## The equation for uniform motion

::::teorema{#uniforme titolo="Position at constant velocity"}
In **uniform motion in a straight line**, the velocity component $v$ along the axis is constant. If the object is at position $x_0$ at the initial time $t_0$, throughout the interval to which the model applies its position is
$$
x(t)=x_0+v(t-t_0).
$$
The quantity $t-t_0$ is the time elapsed since the initial measurement. The product $v(t-t_0)$ is the displacement. Add it to $x_0$ to find the coordinate. The object makes equal displacements in intervals of equal duration. If $t_0=0$, the equation becomes $x(t)=x_0+vt$.

:::dimostrazione
The velocity is constant over the interval from $t_0$ to $t$, so it equals the average velocity. For $t>t_0$, $v=\dfrac{x(t)-x_0}{t-t_0}$. Multiplying by $t-t_0$ and adding $x_0$ to both sides gives the position equation. At $t=t_0$ this equation gives $x(t_0)=x_0$, as required by the initial condition.
:::
::::

:::esempio{titolo="An object crossing the origin"}
A cart starts at $x_0=6\,\mathrm{m}$ with $v=-2\,\mathrm{m/s}$ at $t_0=0$. Its position in metres is $x(t)=6-2t$, with $t$ measured in seconds. Set $x(t)=0$ to find when it crosses the origin, giving $t=3\,\mathrm{s}$. After $5\,\mathrm{s}$ it is at $-4\,\mathrm{m}$. The zero crossing concerns the position. The velocity is still $-2\,\mathrm{m/s}$ at that instant.

::grafico{f="6-2*x" xmin=0 xmax=6 ymin=-7 ymax=8 punti="0,6,pieno,A;3,0,pieno,O;5,-4,pieno,B" nomi="t (s),x (m)" titolo="The line crosses position zero at O and continues with the same slope."}
:::

:::esempio{titolo="A clock already reading five seconds"}
A light gate detects the object at $x_0=4\,\mathrm{m}$ when $t_0=5\,\mathrm{s}$. The velocity is $3\,\mathrm{m/s}$. At $t=9\,\mathrm{s}$, four seconds have elapsed since the detection, so $x(9)=4+3(9-5)=16$, in metres. Writing $4+3\cdot9$ would include the time before $t_0$, even though $4\,\mathrm{m}$ is the measured position at $5\,\mathrm{s}$. Substituting $t=t_0$ in the equation provides a quick check.
:::

## The position–time graph

:::osservazione{#grafico-posizione titolo="The slope represents velocity"}
Time is on the horizontal axis and position is on the vertical axis. Uniform motion is represented by a straight line over the period studied. Find its slope from two distinct points by dividing the vertical change by the horizontal change, with their respective units. A rising line indicates positive velocity, a falling line indicates negative velocity and a horizontal line indicates rest. The height of a point on the graph gives the position in metres. The slope gives the velocity in metres per second. Judging by the angle on the screen alone may be misleading because changing the scale of either axis changes the apparent angle.
:::

:::esempio{titolo="Reading the slope between two measurements"}
Two points on the graph are $(2\,\mathrm{s},7\,\mathrm{m})$ and $(6\,\mathrm{s},15\,\mathrm{m})$. The displacement between readings is $8\,\mathrm{m}$ and the duration is $4\,\mathrm{s}$, so $v=2\,\mathrm{m/s}$. If the uniform-motion model already holds at $t=0$, then $x(0)=7-2\cdot2=3$, in metres. If the observation starts at $t=2\,\mathrm{s}$, the value at $t=0$ is an extrapolation that requires the same assumption about the motion.

::grafico{f="2*x+3" xmin=0 xmax=7 ymin=0 ymax=19 punti="2,7,pieno,A;6,15,pieno,B" nomi="t (s),x (m)" titolo="From A to B the ratio of 8 m to 4 s is 2 m/s."}
:::

:::attenzione
A position–time graph does not show the shape of the road. A falling line can describe a vehicle on a level road travelling towards decreasing coordinates. Similarly, two parallel position–time lines at different heights describe two objects moving along the road with the same velocity at different positions.
:::

## Meeting and catching up

:::teorema{#incontri titolo="The same position at the same time"}
Two objects meet if they occupy the same position at the same time. Therefore write both position equations with the same reference frame and clock. If both apply from $t=0$, the equation is
$$
x_{A0}+v_A t=x_{B0}+v_B t.
$$
For $v_A\ne v_B$ this gives
$$
t=\frac{x_{B0}-x_{A0}}{v_A-v_B}.
$$
The result must lie in the time period when both equations apply. A negative value describes a meeting before $t=0$ only if the model can be extended to that period. Objects with the same velocity keep the same separation. If they start at the same position with the same velocity, their position functions agree throughout the period covered by the model.
:::

:::esempio{titolo="Two objects approaching each other"}
$A$ starts from $1\,\mathrm{m}$ with velocity $2\,\mathrm{m/s}$. $B$ starts from $7\,\mathrm{m}$ with velocity $-1\,\mathrm{m/s}$. Their initial separation is $6\,\mathrm{m}$ and decreases by $3\,\mathrm{m}$ each second. Setting the position equations equal gives $1+2t=7-t$, so $t=2\,\mathrm{s}$. They meet at $x=5\,\mathrm{m}$. To check, substituting in the equation for $B$ gives the same value, $7-2=5$.

::grafico{f="2*x+1;-x+7" xmin=0 xmax=4 ymin=0 ymax=10 punti="2,5,pieno,I" nomi="t (s),x (m)" legenda="A;B" titolo="The lines meet at I. Both objects occupy the same position at 2 s."}
:::

:::esempio{titolo="Catching up after a delayed start"}
$A$ leaves $x=0$ at $3\,\mathrm{m/s}$ at $t=0$. $B$ leaves the same point at $5\,\mathrm{m/s}$ at $t=4\,\mathrm{s}$. By the time $B$ starts, $A$ has a lead of $12\,\mathrm{m}$. The lead then decreases by $5-3=2\,\mathrm{m}$ each second, so it reaches zero $6\,\mathrm{s}$ after $B$ starts. On the first clock the meeting is at $t=10\,\mathrm{s}$. The position equations give $x_A=3\cdot10\,\mathrm{m}$ and $x_B=5(10-4)\,\mathrm{m}$, both equal to $30\,\mathrm{m}$.

::grafico{f="3*x;5*max(0,x-4)" xmin=0 xmax=12 ymin=0 ymax=41 punti="4,0,pieno,B;10,30,pieno,I" nomi="t (s),x (m)" legenda="A;B" titolo="B remains at the origin until 4 s. I marks the meeting after B sets off."}
:::

## Motion in stages

:::osservazione{#tratti titolo="One interval for each velocity"}
When velocity is constant within each stage, multiply each velocity by its actual duration and then add the signed displacements. The final position of one stage is the initial position of the next. On a velocity–time graph the displacement for a stage is the signed area of a rectangle. Its base measures time and its height measures velocity, so the product has units of length. A rectangle below the time axis gives a negative displacement. Add the magnitudes of the areas to find the distance travelled.
:::

:::esempio{titolo="Two rectangles above and below the axis"}
A vehicle maintains $v_1=4\,\mathrm{m/s}$ for $3\,\mathrm{s}$ and then $v_2=-2\,\mathrm{m/s}$ for $4\,\mathrm{s}$. The contributions are $\Delta x_1=12\,\mathrm{m}$ and $\Delta x_2=-8\,\mathrm{m}$, so $\Delta x=4\,\mathrm{m}$. The distance travelled is $20\,\mathrm{m}$. The duration is $7\,\mathrm{s}$, so the average velocity is $\dfrac{4}{7}\,\mathrm{m/s}$ and the average speed is $\dfrac{20}{7}\,\mathrm{m/s}$. The positive sign of $v_m$ agrees with the total displacement.

::grafico{f="4*(x<=3)-2*(x>3)" xmin=0 xmax=7 ymin=-3 ymax=5 nomi="t (s),v (m/s)" titolo="The first rectangle has area +12 m. The second contributes −8 m."}
:::

:::osservazione{#media-tratti titolo="Averaging over equal distances or equal times"}
For two stages of equal duration $\tau$ with signed velocities $v_1,v_2$, the average velocity is $\dfrac{v_1\tau+v_2\tau}{2\tau}=\dfrac{v_1+v_2}{2}$. For two stages of equal distance $d$, travelled at positive speeds $u_1,u_2$, the durations are $\dfrac{d}{u_1}$ and $\dfrac{d}{u_2}$. The average speed is
$$
\frac{2d}{\frac{d}{u_1}+\frac{d}{u_2}}
=\frac{2u_1u_2}{u_1+u_2}.
$$
For two $100\,\mathrm{m}$ stages travelled at $2$ and $4\,\mathrm{m/s}$, the first takes $50\,\mathrm{s}$ and the second $25\,\mathrm{s}$. The result is $\dfrac{200}{75}\,\mathrm{m/s}$, about $2.67\,\mathrm{m/s}$. It is closer to $2\,\mathrm{m/s}$ because two thirds of the time is spent at that speed.
:::
