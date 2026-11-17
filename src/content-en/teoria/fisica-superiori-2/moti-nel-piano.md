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

::grafico{vettori="0,0,4,0,Δx;4,0,4,3,Δy;0,0,4,3,Δr" xmin=-1 xmax=6 ymin=-1 ymax=5 uguale=1 nomi="x (m),y (m)" titolo="The two legs along the axes total 7 m. The diagonal is 5 m."}
:::

:::esempio{titolo="Reading direction from component pairs"}
A bicycle has components $v_x=-4\,\mathrm{m/s}$ and $v_y=3\,\mathrm{m/s}$. If $x$ increases eastward and $y$ northward, the bicycle is heading north-west. Its speed is $\sqrt{(-4)^2+3^2}\,\mathrm{m/s}=5\,\mathrm{m/s}$. Replacing $v_x$ by $+4\,\mathrm{m/s}$ leaves the speed unchanged and changes the direction. The magnitude alone leaves the orientation open.
:::

## Combining motions

:::teorema{#composizione titolo="Studying the axes separately"}
The equations along perpendicular axes describe components of the same motion. Evaluate both coordinates at the **same instant**. With constant component velocities such as $v_x=3\,\mathrm{m/s}$ and $v_y=-2\,\mathrm{m/s}$, after $4\,\mathrm{s}$ the displacements are $+12\,\mathrm{m}$ and $-8\,\mathrm{m}$. The displacement along $x$ comes from the data along $x$. The displacement along $y$ comes from the data along $y$. Combine the two quantities in the displacement vector.
:::

:::esempio{titolo="Same duration, different scales"}
Suppose an object has $x=2+3t$ and $y=6-t^2$, in SI units. After $2\,\mathrm{s}$ it is at $(8,2)$ in metres. The graph of $x$ as a function of time is a rising line with slope $3\,\mathrm{m/s}$. The graph of $y$ as a function of time is a parabola. The two readings at the required time form the pair $(8,2)$. The plot in the $xy$ plane, obtained by varying time, is a separate graph. It shows the points in space passed through by the object, with both axes measured in metres.

::grafico{f="2+3*x;6-x^2" punti="2,8,pieno,A;2,2,pieno,B" xmin=0 xmax=3 ymin=-4 ymax=12 nomi="t (s),r (m)" legenda="x(t);y(t)" titolo="A and B are the components at 2 s on the same time axis."}
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
Eliminating time with $t=\dfrac{x}{u_0}$ gives $y=h-\dfrac{g}{2u_0^2}x^2$. The horizontal coordinate now measures space in metres. The curve ends at impact. Two balls released from the same height at the same instant, one dropped and one launched horizontally, have the same $y(t)$. The second also travels a horizontal distance. The conclusion assumes a level floor at the same height.
:::

:::esempio{titolo="Impact position and velocity direction"}
A ball launches from $h=5\,\mathrm{m}$ at $3\,\mathrm{m/s}$, with $g=10\,\mathrm{m/s^2}$. It reaches the ground at $t=1\,\mathrm{s}$ and $x=3\,\mathrm{m}$. Its components then are $v_x=3\,\mathrm{m/s}$ and $v_y=-10\,\mathrm{m/s}$, so it hits moving rightward and downward. Its speed is $\sqrt{109}\,\mathrm{m/s}$. A single component would be insufficient to determine the magnitude.

::grafico{f="5-(5/9)*x^2" punti="0,5,pieno,L;3,0,pieno" etichette="2.86,0.75,I" xmin=0 xmax=3 ymin=0 ymax=6 nomi="x (m),y (m)" titolo="The trajectory from L to I is a parabola. The range is 3 m."}
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
A point on a disk of radius $2\,\mathrm m$ starts at the rightmost position and completes one revolution every $4\,\mathrm{s}$. One quarter period later the point is on the positive vertical axis if it turns anticlockwise. Its horizontal coordinate starts at $2\,\mathrm{m}$, reaches zero at $1\,\mathrm{s}$ and $-2\,\mathrm{m}$ at $2\,\mathrm{s}$. At $4\,\mathrm{s}$ it returns to the initial value.

::grafico{f="2*cos(PI*x/2)" punti="0,2,pieno,A;1,0,pieno,B;2,-2,pieno,C;4,2,pieno,D" xmin=0 xmax=4.3 ymin=-2.6 ymax=2.6 nomi="t (s),x (m)" titolo="The horizontal projection repeats after 4 s."}
:::

## Tangential and angular velocity

:::teorema{#circolare titolo="The length of one revolution"}
The length of one revolution at radius $r$ is $2\pi r$. A complete turn corresponds to an angle of $2\pi$ radians. For an arc of length $s$, the angle in radians is $s/r$. In uniform circular motion, angular speed is $\omega=\dfrac{2\pi}{T}=2\pi f$. The magnitude of **tangential velocity** is
$$
v=\frac{2\pi r}{T}=\omega r.
$$
Instantaneous velocity points along the tangent, in the direction of rotation. Two points fixed on the same disk sweep the same angle in the same time, so they have the same $\omega$. The point farther from the centre has greater speed because its arc is longer for the same angle.
:::

:::esempio{titolo="Points at different distances from the centre"}
A disk rotates at $f=2\,\mathrm{Hz}$. Two marks lie $0.20\,\mathrm{m}$ and $0.40\,\mathrm{m}$ from its centre. Both have $\omega=4\pi\,\mathrm{rad/s}$, while their speeds are $0.8\pi$ and $1.6\pi\,\mathrm{m/s}$. The speed ratio equals the radius ratio. At fixed frequency, tangential speed is linear in $r$.

::grafico{f="4*PI*x" punti="0.2,2.513274,pieno,A;0.4,5.026548,pieno,B" xmin=0 xmax=0.5 ymin=0 ymax=7 nomi="r (m),v (m/s)" titolo="Tangential speed doubles from A to B."}
:::

## Centripetal acceleration

:::teorema{#centripeta titolo="Velocity changes direction"}
In uniform circular motion the speed remains constant. The direction of velocity changes between two points on the circle. To find the change, draw the two velocity vectors with the same tail. The change is the arrow from the first tip to the second. When the points are very close, this change points almost towards the centre. For instantaneous acceleration the direction is precisely radial and inward. The magnitude of the centripetal acceleration is
$$
a_c=\frac{v^2}{r}=\omega^2r.
$$
To motivate the value, for a small angle $\Delta\theta$ the magnitude of the velocity change is about $v\Delta\theta$, since the chord in the velocity triangle approaches its arc. Dividing by $\Delta t$ gives approximately $v\omega$. In the limit of smaller intervals this gives $v\omega=\dfrac{v^2}{r}$. The same relation expresses two different dependencies depending on which variable is fixed. At fixed $v$, a larger radius gives smaller acceleration. At fixed $\omega$, a larger radius gives greater acceleration.
:::

:::esempio{titolo="Velocity and acceleration at the same point"}
A point moves around a circle of radius $2\,\mathrm{m}$ at speed $4\,\mathrm{m/s}$. At the right of the centre, when going anticlockwise, the velocity points up. The acceleration points left, with magnitude $\dfrac{4^2}{2}\,\mathrm{m/s^2}=8\,\mathrm{m/s^2}$. The arrows are perpendicular. Their directions repeat each revolution.

::grafico{curve="2*cos(t),2*sin(t),0,6.2831853" vettori="2,0,2,1.6,v;2,0,0.85,0,a" punti="0,0,pieno,O;2,0,pieno,P" xmin=-2.8 xmax=3 ymin=-2.8 ymax=2.8 uguale=1 nomi="x (m),y (m)" titolo="To the right of the centre, velocity is tangential and acceleration points towards O."}
:::

:::attenzione
A constant speed in circular motion may suggest zero acceleration. If the velocity vector were constant, its direction would also be constant and the motion would be straight. In circular motion the tangent direction changes from point to point.
:::
