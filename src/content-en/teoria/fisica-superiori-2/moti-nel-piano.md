---
titolo: Motion in a plane and circular motion
sommario: Position and velocity components, horizontal launch, frequency, angular velocity and centripetal acceleration.
---

## Vectors and components

:::definizione{#componenti titolo="Describing two directions"}
To describe motion on a plane (a floor, a sheet of paper, a wall) two **perpendicular axes** are chosen, that is, two directed lines that meet at a right angle. The $x$ axis is usually horizontal and the $y$ axis vertical. The position of an object is the pair of numbers $(x,y)$, its **coordinates**. The first is called the horizontal coordinate and the second the vertical coordinate. Perpendicular axes with the same unit of length on both are called **orthonormal Cartesian axes**. On these axes one metre on the $x$ axis has the same length as one metre on the $y$ axis.

**Displacement** is the vector that goes from the initial position to the final position. A vector is a quantity represented by an arrow, with a magnitude (the length of the arrow), a line of action (the line it lies on) and a direction (the side it points to). Displacement is written $\Delta\vec r$. The arrow above the letter indicates a vector, and the Greek letter $\Delta$ (read "delta") indicates a change, that is, final value minus initial value. The **components** of displacement are the changes in the two coordinates, $\Delta x=x_f-x_i$ and $\Delta y=y_f-y_i$, where the subscripts $f$ and $i$ indicate the final and initial positions. A component is negative when the object moves opposite to the direction of the axis, so the two components can have different signs.

The two components are the **legs** (the sides that form the right angle) of a right triangle, and the displacement is its **hypotenuse** (the side opposite the right angle). The **magnitude** of the displacement, that is, its length, is therefore found with Pythagoras' theorem, which states that the square of the hypotenuse equals the sum of the squares of the legs. The vertical bars indicate the magnitude.
$$
\lvert \Delta\vec r\rvert=\sqrt{(\Delta x)^2+(\Delta y)^2}.
$$
If you walk $4\,\mathrm{m}$ east and then $3\,\mathrm{m}$ north, with the $x$ axis pointing east and the $y$ axis pointing north, the components are $\Delta x=4\,\mathrm m$ and $\Delta y=3\,\mathrm m$. The magnitude of the displacement is $\sqrt{4^2+3^2}\,\mathrm m=\sqrt{16+9}\,\mathrm m=\sqrt{25}\,\mathrm m=5\,\mathrm{m}$. The **distance travelled**, that is, the length of the route, is instead $4+3=7\,\mathrm{m}$. In the figure the two legs of the walk lie along the axes, and the diagonal $\Delta\vec r$ joins the two endpoints directly. The length of the route depends on the **path**, that is, the line followed by the object, whereas displacement depends only on the starting point and the end point.

The axes divide the plane into four regions, the **quadrants**. The signs of the components indicate the quadrant the arrow points into. For example, $\Delta x<0$ and $\Delta y>0$ indicate the upper-left quadrant. In the magnitude the components appear squared, and the square of a negative number is positive, as in $(-3)^2=9$. Therefore the magnitude is always positive or zero.

::grafico{vettori="0,0,4,0,Δx;4,0,4,3,Δy;0,0,4,3" etichette="1.8,1.68,Δr" xmin=-1 xmax=6 ymin=-1 ymax=5 uguale=1 nomi="x (m),y (m)" titolo="The two legs along the axes total 7 m. The diagonal is 5 m."}
:::

:::esempio{titolo="Reading direction from component pairs"}
Velocity is also a vector, with component $v_x$ along the $x$ axis and $v_y$ along the $y$ axis. Its magnitude is called **speed** and indicates how many metres per second the object covers, whatever the direction.

A bicycle has components $v_x=-4\,\mathrm{m/s}$ and $v_y=3\,\mathrm{m/s}$. If $x$ increases eastward and $y$ increases northward, the negative component indicates motion towards the west and the positive one motion towards the north, so the bicycle is heading north-west. Its speed is
$$
\sqrt{(-4)^2+3^2}\,\mathrm{m/s}=\sqrt{16+9}\,\mathrm{m/s}=5\,\mathrm{m/s}.
$$
With $v_x=+4\,\mathrm{m/s}$ the bicycle would head north-east, and the speed would still be $5\,\mathrm{m/s}$ because $(+4)^2=(-4)^2=16$. Therefore the magnitude alone gives the length of the arrow, and the direction of the vector comes from the signs of the components.
:::

:::esempio{titolo="From positions to average velocity"}
A point goes from $A=(-2;1)\,\mathrm m$ to $B=(4;-2)\,\mathrm m$ in $3\,\mathrm s$. In coordinate pairs a semicolon is used, because in the Italian convention the comma is the decimal separator. The coordinates of $A$ are subtracted from those of $B$, in the same order.
$$
\Delta\vec r=\bigl(4-(-2);\,-2-1\bigr)\,\mathrm m=(6;-3)\,\mathrm m.
$$
The **average velocity** is the displacement divided by the duration of the motion. Dividing each component by $3\,\mathrm s$ gives the average velocity $(2;-1)\,\mathrm{m/s}$, with magnitude $\sqrt{2^2+(-1)^2}\,\mathrm{m/s}=\sqrt5\,\mathrm{m/s}\approx2.24\,\mathrm{m/s}$. The same average velocity results from travelling six metres right and then three metres down (the dashed route in the figure), provided the total duration is three seconds, because the displacement and the duration are the same.

In the first case, if the route is the straight segment from $A$ to $B$, the distance travelled is $\sqrt{6^2+3^2}\,\mathrm m=\sqrt{45}\,\mathrm m\approx6.71\,\mathrm m$. In the second it is $6+3=9\,\mathrm m$. The **average speed** is the distance travelled divided by the duration, so for the two-leg route it is $\dfrac{9}{3}\,\mathrm{m/s}=3\,\mathrm{m/s}$. The average velocity vector depends only on the starting and end positions. The average speed depends also on the length of the route actually travelled.

::grafico{segmenti="-2,1,4,1;4,1,4,-2" vettori="-2,1,4,-2" punti="-2,1,pieno;4,-2,pieno" etichette="-2.45,1.42,A;4.16,-1.8,B;0.7,0.03,Δr" xmin=-3 xmax=5.2 ymin=-3 ymax=2 uguale=1 nomi="x (m),y (m)" titolo="The dashed route and the direct route join the same two points A and B."}
:::

## Combining motions

:::teorema{#composizione titolo="Studying the axes separately"}
Motion in a plane is studied as two straight-line motions that take place together, one along the $x$ axis and one along the $y$ axis. The **position equations** $x(t)$ and $y(t)$ (read "$x$ of $t$" and "$y$ of $t$") give the two coordinates as functions of the time $t$. The displacement along the $x$ axis comes only from the data along $x$, and the displacement along $y$ only from the data along $y$. The two coordinates are then evaluated at the **same instant**, because together they describe a single position of the object.

If the velocity components are constant, the displacement along each axis is the velocity component times the duration, as in uniform straight-line motion, that is, motion along a straight line at constant velocity. For example, with $v_x=3\,\mathrm{m/s}$ and $v_y=-2\,\mathrm{m/s}$, after $4\,\mathrm{s}$
$$
\Delta x=3\cdot4\,\mathrm m=+12\,\mathrm m,\qquad \Delta y=(-2)\cdot4\,\mathrm m=-8\,\mathrm m.
$$
The two quantities are then combined in the displacement vector $(12;-8)\,\mathrm m$.
:::

:::esempio{titolo="Same duration, different scales"}
An object has position equations $x=2+3t$ and $y=6-t^2$ in SI units. SI stands for the International System of Units, so the coordinates are in metres and the time in seconds. After $2\,\mathrm{s}$ the coordinates are $x=2+3\cdot2=8$ and $y=6-2^2=2$, so the object is at $(8,2)$, in metres.

The graph of $x$ as a function of time is a rising line with **slope** $3\,\mathrm{m/s}$. The slope is the increase of the quantity on the vertical axis for each unit on the horizontal axis, so here $x$ grows by $3\,\mathrm m$ every second. The graph of $y$ as a function of time is a parabola, because $y$ contains $t^2$. In the figure the two curves share the same time axis. Point $A$ on the line and point $B$ on the parabola are both read at $t=2\,\mathrm s$ and give the pair $(8,2)$. The plot in the $xy$ plane, obtained by varying time, is a separate graph. It shows the points in space passed through by the object, with both axes measured in metres.

::grafico{f="2+3*x;6-x^2" punti="2,8,pieno,A;2,2,pieno,B" xmin=0 xmax=3 ymin=-4 ymax=12 nomi="t (s),components (m)" legenda="x(t);y(t)" titolo="A and B are the components at 2 s on the same time axis."}
:::

:::esempio{titolo="Two paths cross"}
Two sensors track points $A$ and $B$ in the same reference frame with a common clock and $t\geq0$. Their positions are $A(t)=(t;2t)$ and $B(t)=(4-t;3)$, with coordinates in metres and times in seconds. For $A$ the vertical coordinate is always twice the horizontal one, so its path lies on the line $y=2x$. For $B$ the vertical coordinate is always $3$, so its path lies on the horizontal line $y=3$. On the first line the point with $y=3$ has $x=1.5$, therefore both paths pass through the point $P=(1.5;3)\,\mathrm m$.

To find the arrival time at $P$, return to the two position equations. Point $A$ has horizontal coordinate $1.5\,\mathrm m$ at $t=1.5\,\mathrm s$. Point $B$ has that same coordinate when $4-t=1.5$, that is, at $t=2.5\,\mathrm s$. The crossing of the paths therefore indicates only a place both points pass through, possibly at different times. The two points **meet** if they are at the same place at the same instant, that is, if some value of $t$ satisfies both conditions together
$$
\begin{cases}
x_A(t)=x_B(t),\\
y_A(t)=y_B(t).
\end{cases}
$$
Here the horizontal coordinates are equal when $t=4-t$, that is, $2t=4$ and $t=2\,\mathrm s$. The vertical coordinates are equal when $2t=3$, that is, $t=1.5\,\mathrm s$. The two times differ, so no instant satisfies both conditions and the points do not meet. With $B(t)=(3-t;3)$ the horizontal coordinates would be equal when $t=3-t$, that is, at $t=1.5\,\mathrm s$, the same instant as for the vertical coordinates. In that case the two points would meet at $P$. The path of $B$ is still the line $y=3$, therefore changing B's initial position changes only the time it passes through $P$.

::grafico{vettori="0,0,2.4,4.8;4,3,0.3,3" punti="0,0,pieno;4,3,pieno;1.5,3,pieno" etichette="0.27,0.87,A;3.64,3.34,B;1.66,2.73,P" xmin=-0.6 xmax=4.6 ymin=-0.6 ymax=5.5 uguale=1 nomi="x (m),y (m)" titolo="P lies on both paths. A passes through at 1.5 s and B at 2.5 s."}
:::

## Horizontal launch

:::teorema{#lancio titolo="From the edge of a table"}
A ball leaves an edge of height $h$ with a horizontal initial velocity of magnitude $u_0>0$ (read "u nought"). The $x$ axis is chosen in the launch direction and the $y$ axis upward, with height zero at ground level. The **height** is the distance of the ball above the ground. Neglecting air resistance, the only force on the ball is its weight, which is vertical. Acceleration is the change in velocity in each second. Therefore the horizontal acceleration is zero and the vertical acceleration is the acceleration due to gravity $g$, about $9.81\,\mathrm{m/s^2}$, directed downward. Since the $y$ axis points upward, the vertical component of the acceleration is $-g$.

Along $x$ the motion is therefore uniform, with constant velocity $u_0$. Along $y$ the motion is uniformly accelerated, that is, the velocity changes by the same amount every second, and starts with zero vertical velocity, because the launch is horizontal. The position and velocity equations are
$$
x(t)=u_0t,\quad y(t)=h-\frac12gt^2,\qquad
v_x(t)=u_0,\quad v_y(t)=-gt.
$$
Impact with the ground occurs when $y=0$. The equation $h-\dfrac12gt^2=0$ is solved one step at a time.
$$
\frac12gt^2=h,\qquad t^2=\frac{2h}{g},\qquad t=\sqrt{\frac{2h}{g}}.
$$
Of the two solutions the positive root is taken, because time is counted from the launch. This is the flight time $t_f=\sqrt{\dfrac{2h}{g}}$. The **range** is the horizontal displacement up to impact and equals $R=u_0t_f$. Horizontal velocity affects range, while the flight time depends only on $h$ and $g$. Increasing the magnitude of $u_0$ leaves the ball in the air for the same time and carries it farther horizontally each second.
:::

:::osservazione{#traiettoria titolo="The parabola in space"}
The shape of the path is found by eliminating time from the position equations. The horizontal equation gives $t=\dfrac{x}{u_0}$, which is substituted into the vertical equation.
$$
y=h-\frac12g\left(\frac{x}{u_0}\right)^2=h-\frac{g}{2u_0^2}x^2.
$$
The horizontal coordinate now measures position in metres, and the curve is a parabola. The curve ends at impact, because after the collision the flight equations no longer apply. If one ball is dropped and another launched horizontally from the same height at the same instant, both start with zero vertical velocity. They therefore have the same coordinate $y(t)$ while both are in flight. The second also travels horizontally. If their landing surfaces are at the same height, the two balls reach them at the same instant.
:::

:::esempio{titolo="Impact position and velocity direction"}
A ball is launched from $h=5\,\mathrm{m}$ at $3\,\mathrm{m/s}$, with $g=10\,\mathrm{m/s^2}$. The flight time is $t_f=\sqrt{\dfrac{2\cdot5}{10}}\,\mathrm s=\sqrt1\,\mathrm s=1\,\mathrm{s}$ and the horizontal coordinate at impact is $x=3\cdot1\,\mathrm m=3\,\mathrm{m}$. At that instant $v_x=3\,\mathrm{m/s}$ and $v_y=-10\cdot1\,\mathrm{m/s}=-10\,\mathrm{m/s}$, so the ball hits moving rightward and downward. The speed at impact is
$$
\sqrt{3^2+(-10)^2}\,\mathrm{m/s}=\sqrt{9+100}\,\mathrm{m/s}=\sqrt{109}\,\mathrm{m/s}\approx10.4\,\mathrm{m/s}.
$$
The calculation uses both components, because a single component is insufficient to determine the magnitude. In the figure the path goes from the launch point $L$, at height $5\,\mathrm m$, to the impact point $I$, $3\,\mathrm m$ from the vertical through the launch point.

::grafico{curve="t,5-(5/9)*t^2,0,3" punti="0,5,pieno,L;3,0,pieno" etichette="3.04,0.57,I" xmin=0 xmax=3.5 ymin=0 ymax=6 nomi="x (m),y (m)" titolo="The trajectory from L to I is a parabola. The range is 3 m."}
:::

:::esempio{titolo="Reconstructing a launch from readings"}
A horizontally launched ball has $x=4\,\mathrm m$ and height $y=15\,\mathrm m$ after $1\,\mathrm s$. Its initial horizontal coordinate is zero, air resistance is negligible and $g=10\,\mathrm{m/s^2}$. The equation $x=u_0t$ gives $u_0=\dfrac{4\,\mathrm m}{1\,\mathrm s}=4\,\mathrm{m/s}$. In that second the ball has dropped by $\dfrac{1}{2} gt^2=\dfrac12\cdot10\cdot1^2\,\mathrm m=5\,\mathrm m$, so it was launched from $15+5=20\,\mathrm m$. The flight time is $\sqrt{\dfrac{2\cdot20}{10}}\,\mathrm s=\sqrt4\,\mathrm s=2\,\mathrm s$. The table compares the coordinates and the vertical velocity component at three times.

| t (s) | x (m) | y (m) | $v_y$ (m/s) |
| ---: | ---: | ---: | ---: |
| 0 | 0 | 20 | 0 |
| 1 | 4 | 15 | -10 |
| 2 | 8 | 0 | -20 |

The horizontal position always increases by four metres in one second. The height drops by five metres in the first second and by fifteen in the second. The velocity graph explains the difference. In a velocity-time graph the area between the curve and the time axis equals the displacement, and it is counted with a minus sign when the velocity is negative. The $v_x$ curve gives two equal rectangles, each of area $4\cdot1=4\,\mathrm m$. The areas between the $v_y$ curve and the time axis are instead negative and have different magnitudes in the two intervals. The two-second flight corresponds to a range of $4\cdot2=8\,\mathrm m$. After $2\,\mathrm s$ the ball is on the ground, so the flight equations apply only up to that instant.

The areas for the vertical component can be checked with the average velocities in each second. In uniformly accelerated motion the average velocity over an interval is the mean of the values at its start and end. In the first second the average is $\dfrac{0-10}{2}\,\mathrm{m/s}=-5\,\mathrm{m/s}$. In the second it is $\dfrac{-10-20}{2}\,\mathrm{m/s}=-15\,\mathrm{m/s}$. Multiplying by the one-second duration recovers the drops in height of $5\,\mathrm m$ and $15\,\mathrm m$.

::grafico{curve="t,4,0,2;t,-10*t,0,2" punti="0,0,pieno;1,-10,pieno;2,-20,pieno" segmenti="1,0,1,-10;2,0,2,-20" xmin=0 xmax=2.12 ymin=-24 ymax=8 nomi="t (s),v (m/s)" legenda="v_x;v_y" titolo="The horizontal component stays at 4 m/s. The vertical component decreases by 10 m/s every second."}
:::

## Period and frequency

:::definizione{#periodo titolo="Counting revolutions"}
An object is in **uniform circular motion** when it moves around a circle at constant speed, like a point on the rim of a wheel that always turns at the same rate. The **period** $T$ is the duration of one revolution. The **frequency** $f$ is the number of revolutions completed in one second. If the motion has constant frequency and $N$ revolutions are observed in a time interval $\Delta t$, then
$$
f=\frac{N}{\Delta t},\qquad T=\frac{\Delta t}{N},\qquad fT=1.
$$
The last equality follows from the first two, because $\dfrac{N}{\Delta t}\cdot\dfrac{\Delta t}{N}=1$. Therefore $T=\dfrac1f$, that is, the period is the reciprocal of the frequency. Frequency is measured in hertz (Hz), with $\mathrm{Hz}=\mathrm{s^{-1}}$. The symbol $\mathrm{s^{-1}}$ means $\dfrac{1}{\mathrm s}$, so $1\,\mathrm{Hz}$ is one revolution per second. If the wheel makes $24$ revolutions in $6\,\mathrm{s}$, then $f=\dfrac{24}{6}\,\mathrm{Hz}=4\,\mathrm{Hz}$ and $T=\dfrac{6}{24}\,\mathrm{s}=0.25\,\mathrm{s}$. A value in revolutions per minute is divided by $60$, because a minute contains $60$ seconds. For example, $120$ revolutions per minute correspond to $\dfrac{120}{60}\,\mathrm{Hz}=2\,\mathrm{Hz}$. When frequency increases, period decreases because one revolution takes less time.
:::

:::esempio{titolo="The horizontal coordinate returns after one period"}
A point on the rim of a disk of radius $2\,\mathrm m$ starts at the rightmost position and rotates uniformly anticlockwise (opposite to the hands of a clock), completing one revolution every $4\,\mathrm{s}$. The centre of the disk is the origin of the axes. The horizontal coordinate $x$ of the point is its **projection** onto the $x$ axis, that is, the point of the axis directly below or above it.

After a quarter of a period, that is, after $1\,\mathrm s$, the point has made a quarter turn and is at the top of the disk, on the positive vertical axis. The horizontal coordinate, initially $2\,\mathrm{m}$, is therefore zero at $1\,\mathrm{s}$. At $2\,\mathrm{s}$ the point has made half a turn and is at the leftmost position, with $x=-2\,\mathrm{m}$. At $4\,\mathrm{s}$ it has completed the revolution and $x$ returns to its initial value. In the graph the points $A$, $B$, $C$ and $D$ are the readings at $0$, $1$, $2$ and $4\,\mathrm s$.

::grafico{f="2*cos(PI*x/2)" punti="0,2,pieno,A;1,0,pieno,B;2,-2,pieno,C;4,2,pieno,D" xmin=0 xmax=4.3 ymin=-2.6 ymax=2.6 nomi="t (s),x (m)" titolo="The horizontal projection repeats after 4 s."}
:::

:::esempio{titolo="Two passages on the same vertical line"}
On the disk in the preceding graph, at $1\,\mathrm s$ the point is at $(0;2)\,\mathrm m$. At $3\,\mathrm s$, after three quarters of a turn, it is at $(0;-2)\,\mathrm m$. A sensor reading the horizontal projection gives zero in both cases. In the first passage, however, the projection is decreasing, because the point is moving to the left, while in the second it is increasing. The two readings have the same horizontal coordinate and correspond to two different positions on the circle, shown in the figure.

The period is the time after which the point returns to the same position with the same direction of motion. To measure it, one can track the point passing through the same position in the rotation, or choose two successive maxima of its horizontal projection, here at $0\,\mathrm s$ and at $4\,\mathrm s$. For a sensor that records only the times when the projection is zero, two crossings are chosen in which the projection changes in the same direction, both decreasing or both increasing. In this example two seconds separate consecutive zeros, that is, half a period, while the period is four. The direction of the crossing therefore distinguishes the two halves of the revolution.

::grafico{curve="2*cos(t),2*sin(t),0,6.2831853" punti="2,0,pieno;0,2,pieno;0,-2,pieno" etichette="1.31,0.36,0 s;0.23,2.2,1 s;0.23,-2.3,3 s" xmin=-2.65 xmax=2.92 ymin=-2.7 ymax=2.7 uguale=1 nomi="x (m),y (m)" titolo="The times 1 s and 3 s have the same horizontal coordinate x=0 and opposite vertical coordinates."}
:::

## Tangential and angular velocity

:::teorema{#circolare titolo="The length of one revolution"}
The length of one revolution at radius $r$ is the circumference of the circle, $2\pi r$, where $\pi$ (read "pi") is about $3.14$. Angles are measured here in **radians** (symbol $\mathrm{rad}$). A central angle of $1\,\mathrm{rad}$ corresponds to an arc as long as the radius. For an arc of length $s$, therefore, the angle in radians is $\dfrac{s}{r}$. For a complete turn the arc is $2\pi r$ and the angle is $\dfrac{2\pi r}{r}=2\pi$ radians, that is, $360^\circ$.

The **angular velocity** $\omega$ (Greek letter, read "omega") is the angle swept by the radius in one second and is measured in $\mathrm{rad/s}$. In uniform circular motion the radius sweeps $2\pi$ radians in one period, so the magnitude of the angular velocity is $\omega=\dfrac{2\pi}{T}$. Since $\dfrac1T=f$, also $\omega=2\pi f$. The **tangential velocity** is the velocity of the point along the circle. Its magnitude is the length of one revolution divided by the duration of one revolution, and since $\dfrac{2\pi}{T}=\omega$,
$$
v=\frac{2\pi r}{T}=\omega r.
$$
Instantaneous velocity points along the tangent to the circle, in the direction of rotation. The **tangent** at a point is the line that touches the circle only at that point and is perpendicular to the radius. Two points fixed on the same disk sweep the same angle in the same time, so they have the same $\omega$. The point farther from the centre has greater speed because its arc is longer for the same angle.
:::

:::esempio{titolo="Points at different distances from the centre"}
A disk rotates at $f=2\,\mathrm{Hz}$. Two marks lie $0.20\,\mathrm{m}$ and $0.40\,\mathrm{m}$ from its centre. Both have $\omega=2\pi\cdot2\,\mathrm{rad/s}=4\pi\,\mathrm{rad/s}$. Their speeds are
$$
v_A=4\pi\cdot0.20\,\mathrm{m/s}=0.8\pi\,\mathrm{m/s},\qquad v_B=4\pi\cdot0.40\,\mathrm{m/s}=1.6\pi\,\mathrm{m/s},
$$
that is, about $2.51\,\mathrm{m/s}$ and $5.03\,\mathrm{m/s}$. The speed ratio equals the radius ratio, because $\dfrac{1.6\pi}{0.8\pi}=2$ and $\dfrac{0.40}{0.20}=2$. At fixed frequency the speed is therefore directly proportional to the radius, that is, it doubles when the radius doubles, and its graph as a function of $r$ is a line through the origin, as in the figure.

::grafico{f="4*PI*x" punti="0.2,2.513274,pieno;0.4,5.026548,pieno" segmenti="0.2,0,0.2,2.513274;0.4,0,0.4,5.026548" etichette="0.185,-0.48,0.2;0.385,-0.48,0.4;0.2,2.99,A;0.4,5.51,B" xmin=0 xmax=0.5 ymin=0 ymax=7 nomi="r (m),v (m/s)" titolo="Tangential speed doubles from A to B."}
:::

:::osservazione{titolo="Rotation direction and arc length"}
An angle of rotation is written $\Delta\theta$ ($\theta$ is the Greek letter "theta"). If anticlockwise is chosen as positive, a clockwise quarter turn corresponds to $\Delta\theta=-\dfrac{\pi}{2}\,\mathrm{rad}$, because a quarter of $2\pi$ is $\dfrac{\pi}{2}$. On a wheel of radius $0.60\,\mathrm m$ the point covers an arc of length $0.60\cdot\dfrac{\pi}{2}\,\mathrm m=0.30\pi\,\mathrm m\approx0.94\,\mathrm m$. The magnitude of the angle is used for that length. The sign records the direction of rotation.

With uniform rotation, if the quarter turn takes $0.50\,\mathrm s$, the angular speed, that is, the magnitude of the angular velocity, is $\dfrac{\pi}{2}\cdot\dfrac{1}{0.50}\,\mathrm{rad/s}=\pi\,\mathrm{rad/s}$. The signed angular velocity is $-\pi\,\mathrm{rad/s}$ in the chosen convention, because the rotation is clockwise. A full revolution lasts four quarter turns, so the period is $4\cdot0.50\,\mathrm s=2\,\mathrm s$. Reversing direction at the same period changes the sign of the angular velocity, while the point covers the same arc length at the same tangential speed.
:::

## Centripetal acceleration

:::teorema{#centripeta titolo="Velocity changes direction"}
**Acceleration** is the change in the velocity vector divided by the time over which it occurs. The velocity vector changes when its magnitude changes, and also when only its direction changes. In uniform circular motion the speed remains constant, while between two points on the circle the direction of velocity changes, since it is always tangent. To find the change, the two velocity vectors are drawn with the same tail, and the change is the arrow from the tip of the first to the tip of the second. When the two points are very close, this arrow points almost towards the centre of the circle. For the acceleration at an instant the direction is precisely **radial**, that is, along the radius, and inward towards the centre. For this reason it is called **centripetal acceleration** (pointing to the centre) and is written $a_c$. Its magnitude is
$$
a_c=\frac{v^2}{r}=\omega^2r.
$$
The formula is obtained as follows. In a small interval $\Delta t$ the radius turns through an angle $\Delta\theta$. The two velocities are perpendicular to the two radii, so they also form the angle $\Delta\theta$ with each other. The two velocity vectors, both of length $v$, are sides of a triangle with a common tail, and the third side is the change in velocity. When the angle is small, the third side is almost equal to the arc of radius $v$ and angle $\lvert\Delta\theta\rvert$, so the magnitude of the velocity change is about $v\lvert\Delta\theta\rvert$. Dividing by $\Delta t$ gives approximately $v\omega$, because $\dfrac{\lvert\Delta\theta\rvert}{\Delta t}=\omega$. Taking smaller and smaller intervals the approximation becomes exact, and $a_c=v\omega$. Since $\omega=\dfrac{v}{r}$, $v\omega=\dfrac{v^2}{r}$. Since $v=\omega r$, also $v\omega=\omega^2r$.

The same relation expresses two different dependencies depending on which quantity is kept fixed. At fixed $v$, a larger radius gives smaller acceleration, because $r$ is in the denominator of $\dfrac{v^2}{r}$. At fixed $\omega$, a larger radius gives greater acceleration, because $r$ multiplies $\omega^2$.
:::

:::esempio{titolo="Velocity and acceleration at the same point"}
A point moves around a circle of radius $2\,\mathrm{m}$ at speed $4\,\mathrm{m/s}$. At the point $P$ to the right of the centre $O$, when going anticlockwise, the velocity is tangent and points up. The acceleration points towards the centre, that is, to the left, with magnitude $\dfrac{4^2}{2}\,\mathrm{m/s^2}=\dfrac{16}{2}\,\mathrm{m/s^2}=8\,\mathrm{m/s^2}$. The two arrows in the figure are perpendicular, because the tangent is perpendicular to the radius. Their directions repeat each revolution.

::grafico{curve="2*cos(t),2*sin(t),0,6.2831853" vettori="2,0,2,1.6,v;2,0,0.85,0,a" punti="0,0,pieno;2,0,pieno,P" xmin=-2.8 xmax=3 ymin=-2.8 ymax=2.8 uguale=1 nomi="x (m),y (m)" titolo="To the right of the centre, velocity is tangential and acceleration points towards O."}
:::

:::attenzione
A constant speed in circular motion may suggest zero acceleration. If the velocity vector were constant, its direction would also be constant and the motion would be straight. In circular motion the direction of velocity is tangent and changes from point to point, so the acceleration is non-zero. For example, at $2\,\mathrm{m}$ from the centre and at $4\,\mathrm{m/s}$ it is $8\,\mathrm{m/s^2}$.
:::

:::esempio{titolo="Comparing radii under two conditions"}
Consider the point at $r=2\,\mathrm m$ travelling at $v=4\,\mathrm{m/s}$. Its angular velocity is $\omega=\dfrac{v}{r}=\dfrac{4}{2}\,\mathrm{rad/s}=2\,\mathrm{rad/s}$ and its centripetal acceleration is $8\,\mathrm{m/s^2}$. On a second circle of radius $4\,\mathrm m$, one option is to keep the original speed. The acceleration is then $\dfrac{4^2}{4}\,\mathrm{m/s^2}=\dfrac{16}{4}\,\mathrm{m/s^2}=4\,\mathrm{m/s^2}$. The path bends less sharply for the same number of metres travelled per second.

If instead $\omega=2\,\mathrm{rad/s}$ is kept at radius $4\,\mathrm m$, the point covers twice the arc in the same interval. This gives $v=\omega r=2\cdot4\,\mathrm{m/s}=8\,\mathrm{m/s}$ and $a_c=\omega^2r=4\cdot4\,\mathrm{m/s^2}=16\,\mathrm{m/s^2}$. In the graph the curve $a_c=\dfrac{16}{r}$ (speed fixed at $4\,\mathrm{m/s}$) and the line $a_c=4r$ (angular velocity fixed at $2\,\mathrm{rad/s}$) pass through the same starting point, $r=2\,\mathrm m$ and $a_c=8\,\mathrm{m/s^2}$, but have different trends. Therefore, to decide whether $a_c$ increases or decreases when the radius changes, one needs to know which of $v$ and $\omega$ stays fixed.

::grafico{f="16/x;4*x" punti="2,8,pieno;4,4,pieno;4,16,pieno" segmenti="4,4,4,16" xmin=1 xmax=5 ymin=0 ymax=21 nomi="r (m),a_c (m/s²)" legenda="\text{Fixed speed};\text{Fixed angular speed}" titolo="At radius 4 m the acceleration is 4 m/s² at fixed speed and 16 m/s² at fixed angular speed."}
:::

:::osservazione{titolo="Average acceleration between two phases"}
**Average acceleration** is the change in the velocity vector divided by the elapsed time. If a point starts to the right of the centre and rotates anticlockwise, after half a revolution it is to the left of the centre and its velocity points down. If the initial velocity is $(0;4)\,\mathrm{m/s}$, the final velocity is $(0;-4)\,\mathrm{m/s}$. The change is $(0;-4-4)\,\mathrm{m/s}=(0;-8)\,\mathrm{m/s}$, and it is divided by the duration of the half revolution. After a full revolution the velocity returns to its initial value and the change is $(0;0)$. The average acceleration over that revolution is therefore zero, while the instantaneous acceleration still points towards the centre.
:::
