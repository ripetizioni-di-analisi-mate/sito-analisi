---
titolo: Motion in a plane and circular motion
sommario: Position and velocity components, horizontal launch, frequency, angular velocity and centripetal acceleration.
---

## Vectors and components

:::definizione{#componenti titolo="Describing two directions"}
Choose two perpendicular axes $x$ and $y$ in the plane. Position is the coordinate pair $(x,y)$. **Displacement** has components $\Delta x=x_f-x_i$ and $\Delta y=y_f-y_i$. They can have different signs. In a right triangle with these legs, the **magnitude** of displacement is the length of the hypotenuse.
$$
\lvert \Delta\vec r\rvert=\sqrt{(\Delta x)^2+(\Delta y)^2}.
$$
If you walk $4\,\mathrm{m}$ east and then $3\,\mathrm{m}$ north, the walking distance is $7\,\mathrm{m}$ and the displacement magnitude is $5\,\mathrm{m}$. The diagonal joins the endpoints directly. Distance travelled depends on the path, whereas displacement depends on its endpoints. Negative component signs identify the quadrant. Squaring the components gives a non-negative magnitude.

::grafico{vettori="0,0,4,0,Δx;4,0,4,3,Δy;0,0,4,3" etichette="1.8,1.68,Δr" xmin=-1 xmax=6 ymin=-1 ymax=5 uguale=1 nomi="x (m),y (m)" titolo="The two legs along the axes total 7 m. The diagonal is 5 m."}
:::

:::esempio{titolo="Reading direction from component pairs"}
A bicycle has components $v_x=-4\,\mathrm{m/s}$ and $v_y=3\,\mathrm{m/s}$. If $x$ increases eastward and $y$ northward, the bicycle is heading north-west. Its speed is $\sqrt{(-4)^2+3^2}\,\mathrm{m/s}=5\,\mathrm{m/s}$. Setting $v_x=+4\,\mathrm{m/s}$ leaves the speed unchanged and changes the direction. The magnitude alone leaves the orientation open.
:::

:::esempio{titolo="From positions to average velocity"}
A point goes from $A=(-2;1)\,\mathrm m$ to $B=(4;-2)\,\mathrm m$ in $3\,\mathrm s$. Subtract the coordinates in the same order to obtain displacement $(6;-3)\,\mathrm m$. Dividing both components by the duration gives average velocity $(2;-1)\,\mathrm{m/s}$, with magnitude $\sqrt5\,\mathrm{m/s}$. The same average velocity results from travelling six metres right and then three metres down, provided the total duration is three seconds.

In the first case, if the route is the straight segment, the distance is $\sqrt{45}\,\mathrm m$. In the second it is $9\,\mathrm m$. The average speed along the two-leg route is therefore $3\,\mathrm{m/s}$. The average velocity vector describes the position change between the two observations. Finding the average speed also requires the actual path length.

::grafico{segmenti="-2,1,4,1;4,1,4,-2" vettori="-2,1,4,-2" punti="-2,1,pieno;4,-2,pieno" etichette="-2.45,1.42,A;4.16,-1.8,B;0.7,0.03,Δr" xmin=-3 xmax=5.2 ymin=-3 ymax=2 uguale=1 nomi="x (m),y (m)" titolo="The dashed route and the direct route join the same two points A and B."}
:::

## Combining motions

:::teorema{#composizione titolo="Studying the axes separately"}
The equations along perpendicular axes describe components of the same motion. Evaluate both coordinates at the **same instant**. With constant component velocities such as $v_x=3\,\mathrm{m/s}$ and $v_y=-2\,\mathrm{m/s}$, after $4\,\mathrm{s}$ the displacements are $+12\,\mathrm{m}$ and $-8\,\mathrm{m}$. The displacement along $x$ comes from the data along $x$. The displacement along $y$ comes from the data along $y$. Combine the two quantities in the displacement vector.
:::

:::esempio{titolo="Same duration, different scales"}
Suppose an object has $x=2+3t$ and $y=6-t^2$, in SI units. After $2\,\mathrm{s}$ it is at $(8,2)$ in metres. The graph of $x$ as a function of time is a rising line with slope $3\,\mathrm{m/s}$. The graph of $y$ as a function of time is a parabola. The two readings at the required time form the pair $(8,2)$. The plot in the $xy$ plane, obtained by varying time, is a separate graph. It shows the points in space passed through by the object, with both axes measured in metres.

::grafico{f="2+3*x;6-x^2" punti="2,8,pieno,A;2,2,pieno,B" xmin=0 xmax=3 ymin=-4 ymax=12 nomi="t (s),components (m)" legenda="x(t);y(t)" titolo="A and B are the components at 2 s on the same time axis."}
:::

:::esempio{titolo="Two paths cross"}
Two sensors track points $A$ and $B$ in the same reference frame with a common clock and $t\geq0$. Their positions are $A(t)=(t;2t)$ and $B(t)=(4-t;3)$, with coordinates in metres and times in seconds. The first path lies along $y=2x$ and the second along $y=3$. Both therefore pass through the point $P=(1.5;3)\,\mathrm m$.

To find the arrival time at $P$, return to the two position equations. Point $A$ has horizontal coordinate $1.5\,\mathrm m$ at $t=1.5\,\mathrm s$. Point $B$ has that same coordinate when $4-t=1.5$, at $t=2.5\,\mathrm s$. The intersection of the paths identifies a common location. For a meeting, solve both conditions together
$$
\begin{cases}
x_A(t)=x_B(t),\\
y_A(t)=y_B(t).
\end{cases}
$$
Here equal horizontal coordinates would give $t=2\,\mathrm s$, whereas equal vertical coordinates give $t=1.5\,\mathrm s$. The answers differ, so the points occupy different locations when their horizontal or vertical coordinates coincide. With $B(t)=(3-t;3)$, both equations would hold at $t=1.5\,\mathrm s$. Changing B's initial position changes the time it passes through P while its path remains on the same line.

::grafico{vettori="0,0,2.4,4.8;4,3,0.3,3" punti="0,0,pieno;4,3,pieno;1.5,3,pieno" etichette="0.27,0.87,A;3.64,3.34,B;1.66,2.73,P" xmin=-0.6 xmax=4.6 ymin=-0.6 ymax=5.5 uguale=1 nomi="x (m),y (m)" titolo="P lies on both paths. A passes through at 1.5 s and B at 2.5 s."}
:::

## Horizontal launch

:::teorema{#lancio titolo="From the edge of a table"}
A ball leaves an edge of height $h$ with initial horizontal velocity $u_0>0$. Choose the $x$ axis in the launch direction and the $y$ axis upward, with height zero at ground level. Neglecting air resistance, the horizontal acceleration is zero and the vertical acceleration is $-g$. Thus
$$
x(t)=u_0t,\quad y(t)=h-\frac12gt^2,\qquad
v_x(t)=u_0,\quad v_y(t)=-gt.
$$
Impact with the ground occurs at $y=0$. The positive root gives the flight time $t_f=\sqrt{\dfrac{2h}{g}}$. The **range** is the horizontal displacement up to impact and equals $R=u_0t_f$. Horizontal velocity affects range, while in the model the duration depends only on $h$ and $g$. Increasing the magnitude of $u_0$ leaves the ball in the air for the same time and carries it farther horizontally each second.
:::

:::osservazione{#traiettoria titolo="The parabola in space"}
Eliminating time with $t=\dfrac{x}{u_0}$ gives $y=h-\dfrac{g}{2u_0^2}x^2$. The horizontal coordinate now measures position in metres. The curve ends at impact. If one ball is dropped and another launched horizontally from the same height at the same instant, both start with zero vertical velocity. They therefore have the same coordinate $y(t)$ while both are in flight. The second also travels horizontally. If their landing surfaces are at the same height, the two balls reach them at the same instant.
:::

:::esempio{titolo="Impact position and velocity direction"}
A ball launches from $h=5\,\mathrm{m}$ at $3\,\mathrm{m/s}$, with $g=10\,\mathrm{m/s^2}$. It reaches the ground at $t=1\,\mathrm{s}$ and $x=3\,\mathrm{m}$. Its components then are $v_x=3\,\mathrm{m/s}$ and $v_y=-10\,\mathrm{m/s}$, so it hits moving rightward and downward. Its speed is $\sqrt{109}\,\mathrm{m/s}$. A single component would be insufficient to determine the magnitude.

::grafico{curve="t,5-(5/9)*t^2,0,3" punti="0,5,pieno,L;3,0,pieno" etichette="3.04,0.57,I" xmin=0 xmax=3.5 ymin=0 ymax=6 nomi="x (m),y (m)" titolo="The trajectory from L to I is a parabola. The range is 3 m."}
:::

:::esempio{titolo="Reconstructing a launch from readings"}
A horizontally launched ball has $x=4\,\mathrm m$ and height $y=15\,\mathrm m$ after $1\,\mathrm s$. Its initial horizontal coordinate is zero, air resistance is negligible and $g=10\,\mathrm{m/s^2}$. The first reading gives $u_0=4\,\mathrm{m/s}$. In that second the ball has dropped by $\dfrac{1}{2} gt^2=5\,\mathrm m$, so it was launched from $20\,\mathrm m$. The table compares the coordinates and the vertical velocity component at three times.

| t (s) | x (m) | y (m) | $v_y$ (m/s) |
| ---: | ---: | ---: | ---: |
| 0 | 0 | 20 | 0 |
| 1 | 4 | 15 | -10 |
| 2 | 8 | 0 | -20 |

The horizontal position always increases by four metres in one second. The height drops by five metres in the first second and fifteen in the second. The velocity graph explains the difference. The signed areas between the $v_y$ curve and the time axis are negative and have different magnitudes in the two intervals. The $v_x$ curve gives two equal rectangles. The two-second flight corresponds to a range of eight metres. A position calculated after that time would extend the model past contact with the floor.

Check the areas for the vertical component using average velocities in each second. In the first the average is $\dfrac{0-10}{2}\,\mathrm{m/s}=-5\,\mathrm{m/s}$. In the second it is $\dfrac{-10-20}{2}\,\mathrm{m/s}=-15\,\mathrm{m/s}$. Multiplying by the one-second duration recovers the changes in height.

::grafico{curve="t,4,0,2;t,-10*t,0,2" punti="0,0,pieno;1,-10,pieno;2,-20,pieno" segmenti="1,0,1,-10;2,0,2,-20" xmin=0 xmax=2.12 ymin=-24 ymax=8 nomi="t (s),v (m/s)" legenda="v_x;v_y" titolo="The horizontal component stays at 4 m/s. The vertical component decreases by 10 m/s every second."}
:::

## Period and frequency

:::definizione{#periodo titolo="Counting revolutions"}
In uniform circular motion the **period** $T$ is the duration of one revolution. The **frequency** $f$ counts revolutions per unit time. If motion has constant frequency and $N$ revolutions are observed in $\Delta t$, then
$$
f=\frac{N}{\Delta t},\qquad T=\frac{\Delta t}{N},\qquad fT=1.
$$
Frequency is measured in hertz, with $\mathrm{Hz}=\mathrm{s^{-1}}$. If the wheel makes $24$ revolutions in $6\,\mathrm{s}$ then $f=4\,\mathrm{Hz}$ and $T=0.25\,\mathrm{s}$. Divide revolutions per minute by $60$ to convert to revolutions per second. For example, $120$ revolutions per minute corresponds to $2\,\mathrm{Hz}$. When frequency increases, period decreases because one revolution takes less time.
:::

:::esempio{titolo="The horizontal coordinate returns after one period"}
A point on the rim of a disk of radius $2\,\mathrm m$ starts at the rightmost position and rotates uniformly anticlockwise, completing one revolution every $4\,\mathrm{s}$. One quarter period later, the point is on the positive vertical axis. Its horizontal coordinate starts at $2\,\mathrm{m}$, reaches zero at $1\,\mathrm{s}$ and $-2\,\mathrm{m}$ at $2\,\mathrm{s}$. At $4\,\mathrm{s}$ it returns to the initial value.

::grafico{f="2*cos(PI*x/2)" punti="0,2,pieno,A;1,0,pieno,B;2,-2,pieno,C;4,2,pieno,D" xmin=0 xmax=4.3 ymin=-2.6 ymax=2.6 nomi="t (s),x (m)" titolo="The horizontal projection repeats after 4 s."}
:::

:::esempio{titolo="Two passages on the same vertical line"}
On the disk in the preceding graph, at $1\,\mathrm s$ the point is at $(0;2)\,\mathrm m$. At $3\,\mathrm s$ it is at $(0;-2)\,\mathrm m$. The horizontal sensor reads zero in both cases, but in the first passage the projection is decreasing, while in the second it is increasing. Both readings have the same horizontal coordinate and represent different phases of the rotation.

To determine the period, compare corresponding phases. Track the point passing through the same position in the rotation, or choose two successive maxima of its horizontal projection. If a sensor records the zeros of the projection, select two crossings in the same direction. In this example two seconds separate consecutive zeros, while the period is four. The crossing direction distinguishes the two halves of the cycle.

::grafico{curve="2*cos(t),2*sin(t),0,6.2831853" punti="2,0,pieno;0,2,pieno;0,-2,pieno" etichette="1.31,0.36,0 s;0.23,2.2,1 s;0.23,-2.3,3 s" xmin=-2.65 xmax=2.92 ymin=-2.7 ymax=2.7 uguale=1 nomi="x (m),y (m)" titolo="The times 1 s and 3 s have the same horizontal coordinate x=0 and opposite vertical coordinates."}
:::

## Tangential and angular velocity

:::teorema{#circolare titolo="The length of one revolution"}
The length of one revolution at radius $r$ is $2\pi r$. A complete turn corresponds to an angle of $2\pi$ radians. For an arc of length $s$, the angle in radians is $\dfrac{s}{r}$. In uniform circular motion, angular speed is $\omega=\dfrac{2\pi}{T}=2\pi f$. The magnitude of **tangential velocity** is
$$
v=\frac{2\pi r}{T}=\omega r.
$$
Instantaneous velocity points along the tangent, in the direction of rotation. Two points fixed on the same disk sweep the same angle in the same time, so they have the same $\omega$. The point farther from the centre has greater speed because its arc is longer for the same angle.
:::

:::esempio{titolo="Points at different distances from the centre"}
A disk rotates at $f=2\,\mathrm{Hz}$. Two marks lie $0.20\,\mathrm{m}$ and $0.40\,\mathrm{m}$ from its centre. Both have $\omega=4\pi\,\mathrm{rad/s}$, while their speeds are $0.8\pi$ and $1.6\pi\,\mathrm{m/s}$. The speed ratio equals the radius ratio. At fixed frequency, tangential speed is linear in $r$.

::grafico{f="4*PI*x" punti="0.2,2.513274,pieno;0.4,5.026548,pieno" segmenti="0.2,0,0.2,2.513274;0.4,0,0.4,5.026548" etichette="0.185,-0.48,0.2;0.385,-0.48,0.4;0.2,2.99,A;0.4,5.51,B" xmin=0 xmax=0.5 ymin=0 ymax=7 nomi="r (m),v (m/s)" titolo="Tangential speed doubles from A to B."}
:::

:::osservazione{titolo="Rotation direction and arc length"}
If anticlockwise is positive, a clockwise quarter turn corresponds to $\Delta\theta=-\dfrac{\pi}{2}\,\mathrm{rad}$. On a wheel of radius $0.60\,\mathrm m$, the point covers an arc of length $0.60\cdot\dfrac{\pi}{2}=0.30\pi\,\mathrm m$. Use the magnitude of the angle for that length. The sign records the direction of rotation.

With uniform rotation, if the quarter turn takes $0.50\,\mathrm s$, the angular speed is $\pi\,\mathrm{rad/s}$. The signed angular velocity is $-\pi\,\mathrm{rad/s}$ in the chosen convention. The period is $2\,\mathrm s$. Reversing direction at the same period changes the sign of the angular velocity while the point covers the same arc length at the same tangential speed.
:::

## Centripetal acceleration

:::teorema{#centripeta titolo="Velocity changes direction"}
In uniform circular motion the speed remains constant. The direction of velocity changes between two points on the circle. To find the change, draw the two velocity vectors with the same tail. The change is the arrow from the first tip to the second. When the points are very close, this change points almost towards the centre. For instantaneous acceleration the direction is precisely radial and inward. The magnitude of the centripetal acceleration is
$$
a_c=\frac{v^2}{r}=\omega^2r.
$$
For a small rotation $\Delta\theta$ the magnitude of the velocity change is about $v\lvert\Delta\theta\rvert$, since the chord in the velocity triangle approaches its arc. Dividing by $\Delta t$ gives approximately $v\omega$. In the limit of smaller intervals this gives $v\omega=\dfrac{v^2}{r}$. The same relation expresses two dependencies depending on which variable is fixed. At fixed $v$, a larger radius gives smaller acceleration. At fixed $\omega$, a larger radius gives greater acceleration.
:::

:::esempio{titolo="Velocity and acceleration at the same point"}
A point moves around a circle of radius $2\,\mathrm{m}$ at speed $4\,\mathrm{m/s}$. At the right of the centre, when going anticlockwise, the velocity points up. The acceleration points left, with magnitude $\dfrac{4^2}{2}\,\mathrm{m/s^2}=8\,\mathrm{m/s^2}$. The arrows are perpendicular. Their directions repeat each revolution.

::grafico{curve="2*cos(t),2*sin(t),0,6.2831853" vettori="2,0,2,1.6,v;2,0,0.85,0,a" punti="0,0,pieno;2,0,pieno,P" xmin=-2.8 xmax=3 ymin=-2.8 ymax=2.8 uguale=1 nomi="x (m),y (m)" titolo="To the right of the centre, velocity is tangential and acceleration points towards O."}
:::

:::attenzione
A constant speed in circular motion may suggest zero acceleration. If the velocity vector were constant, its direction would also be constant and the motion would be straight. In circular motion the tangent direction changes from point to point.
:::

:::esempio{titolo="Comparing radii under two conditions"}
Consider the point at $r=2\,\mathrm m$ travelling at $v=4\,\mathrm{m/s}$. It has $\omega=2\,\mathrm{rad/s}$ and centripetal acceleration $8\,\mathrm{m/s^2}$. On a second circle of radius $4\,\mathrm m$, one option is to keep the original speed. The acceleration is then $\dfrac{16}{4}\,\mathrm{m/s^2}=4\,\mathrm{m/s^2}$. The path bends less sharply for the same number of metres travelled per second.

If instead $\omega=2\,\mathrm{rad/s}$ is kept at radius $4\,\mathrm m$, the point covers twice the arc in the same interval. This gives $v=8\,\mathrm{m/s}$ and $a_c=4\cdot4\,\mathrm{m/s^2}=16\,\mathrm{m/s^2}$. The two relations in the graph share the same starting point but have different trends. Before comparing accelerations, identify which velocity stays fixed. The change in radius alone does not determine whether $a_c$ increases or decreases.

::grafico{f="16/x;4*x" punti="2,8,pieno;4,4,pieno;4,16,pieno" segmenti="4,4,4,16" xmin=1 xmax=5 ymin=0 ymax=21 nomi="r (m),a_c (m/s²)" legenda="\text{Fixed speed};\text{Fixed angular speed}" titolo="At radius 4 m the acceleration is 4 m/s² at fixed speed and 16 m/s² at fixed angular speed."}
:::

:::osservazione{titolo="Average acceleration between two phases"}
Average acceleration compares the change in the velocity vector with the elapsed time. If a point starts to the right of the centre and rotates anticlockwise, its velocity points down after half a revolution. If the initial velocity is $(0;4)\,\mathrm{m/s}$, the final velocity is $(0;-4)\,\mathrm{m/s}$. Divide the change $(0;-8)\,\mathrm{m/s}$ by the duration of the half revolution. After a full revolution the velocity returns to its initial value. The average acceleration over that revolution is therefore zero, while the instantaneous acceleration still points towards the centre.
:::
