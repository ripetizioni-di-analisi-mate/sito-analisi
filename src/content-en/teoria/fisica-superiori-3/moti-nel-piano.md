---
titolo: "Motion in a plane"
sommario: "Components and velocity, projectile motion without drag, trajectories and acceleration in circular motion."
---

## Describing two-dimensional motion

:::definizione{#componenti-moto titolo="Position, velocity and acceleration in a plane"}
A **particle** is a body whose position is the only thing of interest, because its size is small compared with the distances it travels. In the plane two perpendicular axes are fixed: the $x$ axis, horizontal and pointing to the right, and the $y$ axis, vertical and pointing upwards. The position of the particle is given by its two **coordinates**, the abscissa $x$ and the ordinate $y$. During the motion both depend on the same time $t$. The functions $x(t)$ and $y(t)$ are called the **position equations** of the motion, and for each instant $t$ the pair $(x(t),y(t))$ gives the point where the body is. With $x(t)=2t$ and $y(t)=t^2$, for example, at the instant $t=1\,\mathrm s$ the body is at the point $(2\,;1)\,\mathrm m$.

The **trajectory** is the curve formed by all the points the body passes through. It is obtained by eliminating $t$. To do this, one position equation is solved for $t$ and the result is substituted into the other. The trajectory alone says neither at which instant the body passes each point nor which way it travels along the curve.

**Velocity** is a vector, that is, a quantity with a magnitude (the length of the arrow), a direction and a sense. Its **components** $v_x$ and $v_y$ say how quickly $x$ and $y$ change. The symbol $\Delta$ (delta) denotes the change in a quantity: $\Delta x$ is the final abscissa minus the initial one. The vector that goes from the initial position to the final one is called the **displacement** and has components $\Delta x$ and $\Delta y$. Over an interval of duration $\Delta t$ the ratios $\dfrac{\Delta x}{\Delta t}$ and $\dfrac{\Delta y}{\Delta t}$ are the components of the **average velocity**, that is, of the displacement divided by $\Delta t$. Computed over shorter and shorter intervals, the same ratios become the instantaneous **slopes** of the two position equations, that is, the components $v_x$ and $v_y$ of the velocity at that instant. Velocity is **tangent** to the trajectory, that is, it lies along the line that touches the curve at that point, and it points in the direction of motion. This holds at points where the curve has no corners and the velocity is nonzero.

The two components are perpendicular, so the magnitude of the velocity is found with Pythagoras' theorem. This magnitude is called the **speed**:
$$
v=\sqrt{v_x^2+v_y^2}.
$$
From $v_x=6\,\mathrm{m/s}$ and $v_y=-8\,\mathrm{m/s}$ we find $v=\sqrt{36+64}\,\mathrm{m/s}=\sqrt{100}\,\mathrm{m/s}=10\,\mathrm{m/s}$. The sign of $v_x$ shows that the arrow points to the right, and the sign of $v_y$ that it points downwards. Adding $6$ and $-8$ would mix contributions along perpendicular axes. The **average speed** over a journey is instead the length of the path divided by the time taken. It is greater than the magnitude of the average velocity when the path is not a straight segment travelled always in the same direction.

**Acceleration** is the change in the velocity vector over time. Over an interval $\Delta t$ the **average acceleration** is computed component by component:
$$
\vec a_m=\left(\frac{\Delta v_x}{\Delta t}\,;\frac{\Delta v_y}{\Delta t}\right).
$$
If in $0.5\,\mathrm s$ the velocity changes from $(4\,;0)\,\mathrm{m/s}$ to $(4\,;-5)\,\mathrm{m/s}$, then $\Delta v_x=0$ and $\Delta v_y=-5\,\mathrm{m/s}$, so $\vec a_m=(0\,;-10)\,\mathrm{m/s^2}$, vertical and downwards.

A velocity can change in magnitude, in direction, or both. The part of the acceleration parallel to the velocity, called the **tangential component**, changes the speed. The part perpendicular to the velocity, called the **normal component**, changes the direction. Motion at constant speed can therefore have nonzero acceleration, as when a particle follows a circle. In a projectile launch without air resistance, acceleration is instead vertical, downwards and constant near the ground.
:::

:::osservazione{titolo="Read an angle and a projection"}
The angle $\theta$ (theta) of a velocity is measured from the positive $x$ semi-axis and is taken as positive anticlockwise. The ratio $\dfrac{v_y}{v_x}$ is the tangent of $\theta$, so the angle is found with the $\arctan$ (arctangent) function, which returns the angle with a given tangent. For the velocity $(6\,;-8)\,\mathrm{m/s}$ the angle is
$$
\theta=\arctan\left(\frac{-8}{6}\right)=-\arctan\left(\frac{8}{6}\right)\simeq-53^\circ.
$$
The negative angle is measured clockwise, so it agrees with the positive horizontal and negative vertical components.

A **unit vector** is a vector of magnitude $1$, which only indicates a direction and a sense. The vector $\hat e=\left(\dfrac35\,;\dfrac45\right)$ is a unit vector, because $\dfrac{9}{25}+\dfrac{16}{25}=1$. A camera aligned with $\hat e$ reads the component of velocity along that direction, that is, the projection of the arrow $\vec v$ onto the line of $\hat e$. Each velocity component is multiplied by the matching component of the unit vector and the two products are added. This operation is called the **dot product** and is written with a dot:
$$
\vec v\cdot\hat e=\left(6\cdot\frac35-8\cdot\frac45\right)\,\mathrm{m/s}=\left(\frac{18}{5}-\frac{32}{5}\right)\,\mathrm{m/s}=-2.8\,\mathrm{m/s}.
$$
The minus sign means the projection moves opposite to $\hat e$.
:::

:::esempio{titolo="One path travelled at two rates"}
Two idealised trolleys follow $A(t)=(2t\,;t^2)$ and $B(t)=(4t\,;4t^2)$ in SI units (International System: lengths in metres, times in seconds), for $t\geq0$. For A, $x=2t$ gives $t=\dfrac{x}{2}$, and the equation for $y$ becomes $y=\left(\dfrac x2\right)^2=\dfrac{x^2}{4}$. For B, $x=4t$ gives $t=\dfrac{x}{4}$, and we obtain $y=4\left(\dfrac x4\right)^2=\dfrac{4x^2}{16}=\dfrac{x^2}{4}$. Both calculations therefore give $y=\dfrac{x^2}{4}$ for $x\geq0$, a parabola. The point $P=(2\,;1)\,\mathrm m$ lies on the curve. A reaches it when $2t=2$, that is, after one second, and B when $4t=2$, that is, after half a second.

The velocity components are the instantaneous slopes of $x(t)$ and $y(t)$. The slope of $2t$ is $2$ at every instant. For $t^2$ the ratio is computed over a short interval $\delta$:
$$
\frac{(t+\delta)^2-t^2}{\delta}=\frac{2t\delta+\delta^2}{\delta}=2t+\delta,
$$
which approaches $2t$ as $\delta$ becomes smaller and smaller. Likewise the slope of $4t^2$ is $8t$. At P the velocities are therefore $(2\,;2\cdot1)\,\mathrm{m/s}=(2\,;2)\,\mathrm{m/s}$ for A and $(4\,;8\cdot0.5)\,\mathrm{m/s}=(4\,;4)\,\mathrm{m/s}$ for B. The two arrows have the same tangent direction and B has twice the speed of A. Since the vertical component grows as $2t$ for A and as $8t$ for B, the accelerations are vertical, with magnitudes $2$ and $8\,\mathrm{m/s^2}$ respectively. The same curve can therefore be travelled with different velocities and accelerations.

::grafico{curve="t,t^2/4,0,3.7" punti="2,1,pieno" vettori="2,1,3,2;2,1,2.5,1.5" segmenti="2,0,2,1;0,1,2,1" etichette="1.73,1.24,P;2.46,1.81,v A;3.03,2.12,v B" xmin=-0.2 xmax=4.05 ymin=-0.3 ymax=3.8 uguale=1 nomi="x (m),y (m)" titolo="The trolleys follow the same parabola. At P the arrow lengths are proportional to their speeds."}
:::

## Horizontal launch

:::teorema{#lancio-orizzontale titolo="Independent component equations"}
Assume that air resistance is negligible, that the ground is horizontal and that the gravitational acceleration $g$ is uniform, that is, the same at every point, vertical and directed downwards. Near the Earth's surface $g\simeq9.8\,\mathrm{m/s^2}$, a value often rounded to $10\,\mathrm{m/s^2}$ in exercises. Take $x$ horizontally and $y$ upwards. Gravity acts only along $y$, so the component $v_x$ stays constant, while $v_y$ decreases by $g$ every second. If the body starts at $(0,h)$ with horizontal velocity $v_0>0$, the equations are
$$
x(t)=v_0t,\qquad y(t)=h-\tfrac12gt^2.
$$
The first is the equation of uniform straight-line motion, the second that of uniformly accelerated motion with zero initial velocity.

Vertical motion starts from rest and determines the landing time $t_f$. At the ground $y=0$, so
$$
h=\tfrac12gt_f^2\quad\Longrightarrow\quad t_f^2=\frac{2h}{g}\quad\Longrightarrow\quad t_f=\sqrt{\frac{2h}{g}},
$$
where the positive root is taken because the flight time is positive. Horizontal motion continues with zero acceleration over the same time. The horizontal distance between the launch point and the landing point is called the **range** and equals $R=v_0t_f=v_0\sqrt{\dfrac{2h}{g}}$. The range is therefore proportional to $v_0$ and to the square root of $h$. Quadrupling $h$ multiplies the time by $\sqrt4=2$ and, at fixed $v_0$, also doubles the distance.

With $h=5\,\mathrm m$, $v_0=6\,\mathrm{m/s}$ and $g=10\,\mathrm{m/s^2}$, we have $t_f=\sqrt{\dfrac{2\cdot5}{10}}\,\mathrm s=1\,\mathrm s$ and $R=(6\cdot1)\,\mathrm m=6\,\mathrm m$. Just before impact $v_x=6\,\mathrm{m/s}$ and $v_y=-gt_f=-10\,\mathrm{m/s}$, so the velocity has components $(6,-10)\,\mathrm{m/s}$. It points diagonally because the horizontal component keeps its initial value while the vertical component grows in magnitude. Substituting $t=\dfrac{x}{v_0}$ into the vertical equation gives the equation of the trajectory, a parabola:
$$
y=h-\frac12g\left(\frac{x}{v_0}\right)^2=h-\frac{g}{2v_0^2}x^2.
$$
The parabola describes the motion only on the section from $x=0$ to $x=R$, because the flight ends on contact with the ground.
:::

::grafico{curve="6*t,5-5*t^2,0,1" punti="0,5,pieno;6,0,pieno" vettori="0,5,2,5,v_0" xmin=-0.6 xmax=7 ymin=-0.5 ymax=6.5 nomi="x (m),y (m)" titolo="The horizontal launch follows a parabola until it reaches the ground"}

:::esempio{titolo="Estimating acceleration from video frames"}
A camera measures the position of a ball launched horizontally. Each height reading may differ from the true one by about $0.02\,\mathrm m$: this is the **uncertainty** of the reading. Take the first reading as reference, with $x=0$ and $h=4.90\,\mathrm m$. The horizontal coordinates increase by one metre every fifth of a second, so the horizontal speed is $\dfrac{1\,\mathrm m}{0.20\,\mathrm s}=5\,\mathrm{m/s}$. The predicted heights are computed with $g=9.80\,\mathrm{m/s^2}$, that is, with $y=4.90-4.90\,t^2$ in SI units; for example, at $t=0.20\,\mathrm s$ we get $y=4.90-4.90\cdot0.04=4.704$.

| $t$ (s) | $x$ (m) | Measured $y$ (m) | Predicted $y$ (m) |
| ---: | ---: | ---: | ---: |
| 0.00 | 0.00 | 4.90 | 4.900 |
| 0.20 | 1.00 | 4.70 | 4.704 |
| 0.40 | 2.00 | 4.10 | 4.116 |

The drop $h-y$ equals $\tfrac12gt^2$. Therefore the graph of the drop against $t^2$ is a straight line through the origin with slope $\dfrac g2$. The final reading gives $h-y=(4.90-4.10)\,\mathrm m=0.80\,\mathrm m$ at $t^2=0.16\,\mathrm{s^2}$, from which
$$
\frac g2=\frac{0.80}{0.16}\,\mathrm{m/s^2}=5\,\mathrm{m/s^2},\qquad g\simeq10\,\mathrm{m/s^2}.
$$
With $9.80\,\mathrm{m/s^2}$ the difference between measured and predicted height is at most $(4.116-4.10)\,\mathrm m=0.016\,\mathrm m$ in magnitude, less than the uncertainty. With $10\,\mathrm{m/s^2}$ the predicted heights, $4.70$ and $4.10\,\mathrm m$, coincide with the measured ones. Both values of $g$ are therefore consistent with these readings. Telling them apart would require more precise height readings or frames farther apart in time, still before impact.

The estimate can also be made using just the two later frames. Subtracting the equations $y_1=h-\tfrac12gt_1^2$ and $y_2=h-\tfrac12gt_2^2$ eliminates $h$ and leaves $y_1-y_2=\tfrac12g\left(t_2^2-t_1^2\right)$. This is useful when the camera misses the instant of launch but the time elapsed since launch is known. The height difference is $(4.70-4.10)\,\mathrm m=0.60\,\mathrm m$ and the difference of the squares of the times is $(0.16-0.04)\,\mathrm{s^2}=0.12\,\mathrm{s^2}$. The ratio $\dfrac{0.60}{0.12}\,\mathrm{m/s^2}=5\,\mathrm{m/s^2}$ is half of $g$, so in this case too $g\simeq10\,\mathrm{m/s^2}$.

::grafico{f="4.9*x" punti="0,0,pieno;0.04,0.2,pieno;0.16,0.8,pieno" segmenti="0.04,0,0.04,0.2;0.16,0,0.16,0.8" etichette="0.032,-0.069,0.04;0.152,-0.069,0.16;0.043,0.268,0.20;0.146,0.873,0.80" xmin=0 xmax=0.188 ymin=0 ymax=1 nomi="t² (s²),h − y (m)" legenda="g=9.80\,\mathrm{m/s^2}" titolo="The measured drops plotted against time squared lie close to the predicted line."}
:::

## Oblique launch

:::teorema{#lancio-obliquo titolo="Flight time, peak height and range"}
Let $\theta$ be the angle between the launch velocity and the positive $x$ semi-axis. The arrow $\vec v_0$ is the hypotenuse of a right triangle whose legs are the initial components, so
$$
v_{0x}=v_0\cos\theta,\qquad v_{0y}=v_0\sin\theta,
$$
where the cosine $\cos\theta$ and the sine $\sin\theta$ are, respectively, the ratio of the side adjacent to the angle $\theta$ to the hypotenuse and the ratio of the opposite side to the hypotenuse. With $v_0=10\,\mathrm{m/s}$ and an angle of about $37^\circ$, for which $\cos\theta=0.8$ and $\sin\theta=0.6$, the components are $8\,\mathrm{m/s}$ and $6\,\mathrm{m/s}$. Starting at $(0,h)$ without air resistance, the position equations are
$$
x=v_{0x}t,\qquad y=h+v_{0y}t-\tfrac12gt^2,
$$
and the vertical component of the velocity is $v_y=v_{0y}-gt$. If $v_{0y}>0$, the body rises to its highest point, called the **apex**, where $v_y=0$. This happens at the instant $t_A=\dfrac{v_{0y}}{g}$. Substituting $t_A$ into the vertical equation gives the rise in height
$$
H=v_{0y}\cdot\frac{v_{0y}}{g}-\frac12g\left(\frac{v_{0y}}{g}\right)^2=\frac{v_{0y}^2}{g}-\frac{v_{0y}^2}{2g}=\frac{v_{0y}^2}{2g}.
$$
At the apex the velocity is horizontal and equals $v_{0x}$, if $v_{0x}$ is nonzero.

If launch and landing are at the same height, we set $y(t)=h$, that is, $v_{0y}t-\tfrac12gt^2=0$. Factoring out $t$ gives $t\left(v_{0y}-\tfrac12gt\right)=0$. The first solution is the launch, $t=0$. The second is the flight time $t_f=\dfrac{2v_{0y}}{g}$, twice the rise time. Multiplying by $v_{0x}$ and using the double-angle formula $\sin(2\theta)=2\sin\theta\cos\theta$ gives the range
$$
R=\frac{2v_{0x}v_{0y}}g=\frac{2v_0^2\sin\theta\cos\theta}{g}=\frac{v_0^2\sin(2\theta)}g .
$$
For $0<\theta<90^\circ$ and fixed $v_0$, the sine is at most $1$, and it reaches this value for $2\theta=90^\circ$. The range is therefore largest for $\theta=45^\circ$. Two angles are called complementary if they add up to $90^\circ$, like $30^\circ$ and $60^\circ$. Complementary angles have the same range in these conditions, because their doubles add up to $180^\circ$ and $\sin\alpha=\sin(180^\circ-\alpha)$. Their flight times and peak heights differ because they depend on the vertical component.

If the landing height differs, the vertical equation is solved with the new height. For $x=8t$, $y=15+5t-5t^2$ in SI units, the ground $y=0$ gives $5t^2-5t-15=0$, that is, $t^2-t-3=0$. The positive solution is
$$
t=\frac{1+\sqrt{1+12}}{2}\,\mathrm s=\frac{1+\sqrt{13}}{2}\,\mathrm s\simeq2.30\,\mathrm s,
$$
and the impact point I has abscissa $x\simeq(8\cdot2.30)\,\mathrm m\simeq18.4\,\mathrm m$. The equal-height formula would give $t_f=\dfrac{2\cdot5}{10}\,\mathrm s=1\,\mathrm s$, which instead marks the return to the initial height of fifteen metres, at the point P with abscissa $8\,\mathrm m$. In the graph L is the launch point and A the apex, reached at $t=0.5\,\mathrm s$ at the point $(4\,;16.25)\,\mathrm m$.
:::

::grafico{curve="8*t,15+5*t-5*t^2,0,2.302775638" punti="0,15,pieno,L;4,16.25,pieno,A;8,15,pieno,P;18.4222051,0,pieno" etichette="17.85,1.2,I" segmenti="0,15,8,15" xmin=-0.5 xmax=21 ymin=-0.5 ymax=18.5 nomi="x (m),y (m)" titolo="The return to launch height precedes ground impact"}

:::esempio{titolo="Two passages at the same height"}
A ball starts at a height of $1.5\,\mathrm m$ with horizontal speed $4\,\mathrm{m/s}$. It is seen passing a height of $5.25\,\mathrm m$ twice, after $0.5\,\mathrm s$ and after $1.5\,\mathrm s$. Air resistance is neglected and $g=10\,\mathrm{m/s^2}$. Because $v_y$ decreases linearly, the two passages through the same height are symmetric about the apex. In fact, equating the heights $v_{0y}t_1-\tfrac12gt_1^2=v_{0y}t_2-\tfrac12gt_2^2$ gives
$$
v_{0y}(t_2-t_1)=\frac12g\left(t_2^2-t_1^2\right)=\frac12g(t_2-t_1)(t_2+t_1),
$$
and dividing by $t_2-t_1$
$$
v_{0y}=\frac{g(t_1+t_2)}{2}=\frac{10\cdot(0.5+1.5)}{2}\,\mathrm{m/s}=10\,\mathrm{m/s}.
$$
The apex is at $t=\dfrac{v_{0y}}{g}=1\,\mathrm s$, halfway between the two passages, so the maximum height is $(1.5+10\cdot1-5\cdot1^2)\,\mathrm m=6.5\,\mathrm m$. At the first observation $x=(4\cdot0.5)\,\mathrm m=2\,\mathrm m$ and the ball is rising at $v_y=(10-10\cdot0.5)\,\mathrm{m/s}=5\,\mathrm{m/s}$. At the second $x=6\,\mathrm m$ and the ball is falling at $v_y=-5\,\mathrm{m/s}$. Two readings at the same height can therefore correspond to different places and directions of motion.

::grafico{curve="4*t,1.5+10*t-5*t^2,0,2.140175425" punti="0,1.5,pieno;2,5.25,pieno;4,6.5,pieno;6,5.25,pieno" segmenti="2,5.25,6,5.25;2,0,2,5.25;6,0,6,5.25" etichette="0.14,1.23,L;1.76,5.61,P;4.02,6.95,A;6.1,5.56,Q" xmin=-0.2 xmax=9.2 ymin=-0.5 ymax=8 nomi="x (m),y (m)" titolo="The ball passes the same height at P on the way up and Q on the way down. A is the highest point."}
:::

:::osservazione{titolo="Check both coordinates of a point"}
In the previous launch, both observed times give the height $5.25\,\mathrm m$. The question is whether the ball passes through an opening placed at $x=5\,\mathrm m$ at that height. The horizontal equation $x=4t$ gives $t=\dfrac54\,\mathrm s=1.25\,\mathrm s$. At that instant the ball is at
$$
y=\left(1.5+10\cdot1.25-5\cdot1.25^2\right)\,\mathrm m\simeq6.19\,\mathrm m,
$$
so it passes above the opening. Reaching a specified point requires both coordinates to match at the same instant.
:::

:::esempio{titolo="Same range, different apex heights"}
Two projectiles both start and land at height zero. Their initial components are $(8\,;6)\,\mathrm{m/s}$ and $(6\,;8)\,\mathrm{m/s}$. Both start at $\sqrt{64+36}\,\mathrm{m/s}=10\,\mathrm{m/s}$. The angles are complementary, because swapping the components turns the sine of one angle into the cosine of the other. With $g=10\,\mathrm{m/s^2}$ the flight times are
$$
t_A=\frac{2\cdot6}{10}\,\mathrm s=1.2\,\mathrm s,\qquad t_B=\frac{2\cdot8}{10}\,\mathrm s=1.6\,\mathrm s.
$$
The range is $(8\cdot1.2)\,\mathrm m=(6\cdot1.6)\,\mathrm m=9.6\,\mathrm m$ in both cases. The steeper launch rises by $\dfrac{8^2}{2\cdot10}\,\mathrm m=3.2\,\mathrm m$, while the first rises by $\dfrac{6^2}{2\cdot10}\,\mathrm m=1.8\,\mathrm m$. Checking whether a projectile clears an obstacle also requires the shape of the trajectory. The apex is reached halfway through the flight time, so halfway along the range, at $x=4.8\,\mathrm m$, each projectile is at its own apex. An edge $2.5\,\mathrm m$ high at that position is therefore cleared by the second projectile and not by the first.

::grafico{curve="8*t,6*t-5*t^2,0,1.2;6*t,8*t-5*t^2,0,1.6" punti="4.8,1.8,pieno;4.8,3.2,pieno;9.6,0,pieno" segmenti="4.8,0,4.8,3.2" etichette="4.98,1.98,A;4.98,3.38,B;9.65,0.27,I" xmin=0 xmax=10.55 ymin=-0.15 ymax=4 nomi="x (m),y (m)" legenda="A;B" titolo="Both trajectories end at I. Their apexes have the same horizontal coordinate and different heights."}
:::

## Angles and angular velocity

:::definizione{#radianti titolo="The radian"}
On a circle of radius $r$, an angle with its vertex at the centre cuts off an arc of length $s$. The measure of the angle in **radians** (symbol $\mathrm{rad}$) is the ratio of the arc to the radius: $\theta=\dfrac{s}{r}$. The arc is taken with a sign, positive if travelled anticlockwise. On a circle of radius $4\,\mathrm m$, an arc of $6\,\mathrm m$ corresponds to $\dfrac64\,\mathrm{rad}=1.5\,\mathrm{rad}$. A full turn has arc $2\pi r$, so it measures $\dfrac{2\pi r}{r}=2\pi$ radians, with $\pi\simeq3.14$. Hence $360^\circ=2\pi\,\mathrm{rad}$ and $180^\circ=\pi\,\mathrm{rad}$; a right angle is $\dfrac\pi2\,\mathrm{rad}$.

**Angular velocity** $\omega$ (omega) is the change in angle divided by the time, $\omega=\dfrac{\Delta\theta}{\Delta t}$, and is measured in $\mathrm{rad/s}$. With anticlockwise taken as positive, a clockwise rotation has negative $\omega$; its magnitude is called the angular speed. The **period** $T$ is the time for one complete turn. The **frequency** $f$ is the number of turns per second and is measured in hertz ($1\,\mathrm{Hz}$ = one turn per second); it equals $f=\dfrac1T$. In uniform circular motion, that is, at constant speed, the angle increases by $2\pi$ in one period, so the angular speed is
$$
\omega=\frac{2\pi}{T}=2\pi f.
$$
If a rotor makes thirty turns per minute, the frequency is $\dfrac{30}{60}\,\mathrm{Hz}=0.5\,\mathrm{Hz}$, that is, half a turn per second, and the period is $2\,\mathrm s$. Therefore $\omega=2\pi\cdot0.5\,\mathrm{rad/s}=\pi\,\mathrm{rad/s}$.

From $s=r\theta$ it follows that in an interval $\Delta t$ the point covers the arc $\Delta s=r\,\Delta\theta$. Dividing by $\Delta t$ gives the **tangential velocity**, that is, the speed along the circle:
$$
v_t=\frac{\Delta s}{\Delta t}=r\,\frac{\Delta\theta}{\Delta t}=r\omega,
$$
valid when $\theta$ is measured in radians. At double the radius and the same angular velocity, a point covers twice the arc in the same time. In a **rigid** disc, that is, one that does not deform, all points turn through the same angle in the same time and complete a turn in the same period. Those farther from the axis, however, have greater tangential speed, and a point on the axis, with $r=0$, has zero tangential speed. Two discs that touch at their edges and turn without slipping have the same tangential speed at the point of contact, so $r_1\omega_1=r_2\omega_2$. With $r_1=0.30\,\mathrm m$, $\omega_1=4\,\mathrm{rad/s}$ and $r_2=0.10\,\mathrm m$ we get $v_t=1.2\,\mathrm{m/s}$ and $\omega_2=\dfrac{1.2}{0.10}\,\mathrm{rad/s}=12\,\mathrm{rad/s}$. The angle measures how far the body turns, and multiplied by the radius it gives the distance covered along the circle.
:::

:::esempio{titolo="Reconstructing rotation from two pictures"}
Two pictures taken $0.20\,\mathrm s$ apart show a mark, that is, a sign on the edge of the disc, first to the right of the centre (point A) and then directly above it (point B). The disk turns uniformly anticlockwise. Between the pictures the mark travels at least one quarter turn, that is, $\dfrac\pi2\,\mathrm{rad}$, and may also complete whole revolutions, each of $2\pi\,\mathrm{rad}$. The angular displacement is therefore $\Delta\theta=\dfrac{\pi}{2}+2k\pi$, where the integer $k=0,1,2,\ldots$ counts the extra whole turns.

If continuous observation confirms that less than one revolution elapsed between the pictures, then $k=0$. Dividing the angle by the time gives
$$
\omega=\frac{\frac{\pi}{2}}{0.20}\,\mathrm{rad/s}=\frac{\pi}{2}\cdot\frac{1}{0.20}\,\mathrm{rad/s}=\frac{5\pi}{2}\,\mathrm{rad/s}.
$$
With $k=1$ the angle increases by $2\pi$ and the angular velocity by $\dfrac{2\pi}{0.20}\,\mathrm{rad/s}=10\pi\,\mathrm{rad/s}$. This greater angular velocity would therefore produce the same two images after one additional turn. Counting intermediate passages or taking pictures at shorter intervals resolves this ambiguity.

If instead only the two positions are known and a full revolution is ruled out, the direction of rotation still has to be determined. A clockwise rotation of three quarters of a turn joins the same two points. Taking anticlockwise angles as positive gives $\Delta\theta=-\dfrac{3\pi}{2}$ and therefore $\omega=-\dfrac{3\pi}{2}\cdot\dfrac{1}{0.20}\,\mathrm{rad/s}=-\dfrac{15\pi}{2}\,\mathrm{rad/s}$. Both calculations refer to the same interval.

::grafico{curve="cos(t),sin(t),0,6.283185307;0.4*cos(t),0.4*sin(t),0,1.570796327" punti="1,0,pieno;0,1,pieno" segmenti="0,0,1,0;0,0,0,1" etichette="1.05,0.13,A;0.1,1.08,B;0.36,0.34,90°" xmin=-1.35 xmax=1.5 ymin=-1.35 ymax=1.48 uguale=1 nomi="x,y" titolo="The pictures show A and B. The inner arc marks a quarter turn, and the mark may have completed additional turns."}
:::

## Centripetal acceleration

:::teorema{#centripeta titolo="Change in velocity direction"}
On a circle, velocity is tangential and therefore perpendicular to the radius. In uniform circular motion the velocity arrows all have the same length $v$, but at different times they point in different directions. When the radius turns through an angle $\Delta\theta$, the velocity turns through the same angle, because it stays perpendicular to the radius. Drawn from the same point, two nearby velocities form an isosceles triangle with two sides of length $v$ and angle $\Delta\theta$ between them. The third side is the difference $\Delta\vec v$. For a very small angle, measured in radians, the third side is almost equal to the arc of radius $v$ and angle $\Delta\theta$, so $|\Delta\vec v|\simeq v\,|\Delta\theta|$. Dividing by $\Delta t$ gives $v\,\dfrac{|\Delta\theta|}{\Delta t}=v\omega$. Using $\omega=\dfrac vr$, or $v=\omega r$, we obtain
$$
a_c=v\omega=\frac{v^2}r=\omega^2r .
$$
As the interval becomes shorter and shorter, the difference $\Delta\vec v$ becomes perpendicular to the velocity and points towards the centre. For this reason the acceleration is called **centripetal**, that is, directed towards the centre. It changes the direction of the velocity, which becomes tangent to the circle at the new position, and the path bends.

The most helpful form depends on the data. At fixed linear speed, a bend of half the radius needs twice the acceleration, because $\dfrac{v^2}{\frac r2}=2\,\dfrac{v^2}{r}$. At fixed angular speed instead, a point on a disc at twice the radius has twice the acceleration, because $\omega^2(2r)=2\,\omega^2r$. The apparent difference arises because the magnitude of the velocity also doubles in the second comparison, since $v=\omega r$.
:::

::grafico{curve="2*cos(t),2*sin(t),0,6.2832" vettori="2,0,2,1.4,v;2,0,0.9,0,a_c" xmin=-2.5 xmax=2.8 ymin=-2.5 ymax=2.5 uguale=1 nomi="x (m),y (m)" titolo="At the right-hand point the acceleration points towards the centre"}

:::osservazione{titolo="Approximating acceleration from two readings"}
A point travels around a circle of radius $3\,\mathrm m$ at $6\,\mathrm{m/s}$. After a quarter turn anticlockwise starting from the rightmost point, its velocity changes from $\vec v_1=(0\,;6)\,\mathrm{m/s}$ to $\vec v_2=(-6\,;0)\,\mathrm{m/s}$. The difference is $\Delta\vec v=(-6-0\,;0-6)\,\mathrm{m/s}=(-6\,;-6)\,\mathrm{m/s}$, with magnitude $\sqrt{36+36}\,\mathrm{m/s}=6\sqrt2\,\mathrm{m/s}$. The angular velocity is $\omega=\dfrac63\,\mathrm{rad/s}=2\,\mathrm{rad/s}$, so the quarter turn lasts $\dfrac{\pi}{2}\cdot\dfrac12\,\mathrm s=\dfrac{\pi}{4}\,\mathrm s$. The mean acceleration has magnitude
$$
\left|\vec a_m\right|=6\sqrt2\cdot\frac{4}{\pi}\,\mathrm{m/s^2}=\frac{24\sqrt2}{\pi}\,\mathrm{m/s^2}\simeq10.8\,\mathrm{m/s^2},
$$
while the instantaneous magnitude is $a_c=\dfrac{6^2}{3}\,\mathrm{m/s^2}=12\,\mathrm{m/s^2}$.

With less than a full turn between readings, the difference between the two velocities is the base of the isosceles triangle with sides $v$ and angle $|\Delta\theta|$. A **chord** is a segment joining two points of a circle, and this base is a chord of the circle of radius $v$ traced by the tips of the arrows. Splitting the triangle into two right triangles shows that the chord has length $2v\sin\left(\dfrac{|\Delta\theta|}{2}\right)$. Since the interval $\dfrac{|\Delta\theta|}{\omega}$ is proportional to the angle, the ratio of the magnitudes of the average and instantaneous accelerations is
$$
\frac{|\vec a_m|}{a_c}
=\frac{2\sin\left(\dfrac{|\Delta\theta|}{2}\right)}{|\Delta\theta|}.
$$
For a quarter turn, with $|\Delta\theta|=\dfrac\pi2$, this ratio is about $0.900$. For an arc of $10^\circ$ it is about $0.999$. Using the arc to approximate the chord becomes more accurate when the separation between measurements decreases.

::grafico{vettori="0,0,0,6;0,0,-6,0;0,6,-6,0" punti="0,6,pieno;-6,0,pieno" etichette="0.35,3.4,v₁;-4.55,-0.66,v₂;-3.88,3.2,Δv" xmin=-7 xmax=1.6 ymin=-1.15 ymax=7 uguale=1 nomi="vₓ (m/s),vᵧ (m/s)" titolo="With both velocities drawn from the origin, the change is the vector from the first tip to the second."}
:::

## Non-uniform circular motion

:::osservazione{#tangenziale titolo="Two components of acceleration"}
In non-uniform circular motion, the magnitude of the velocity changes as well. The positive tangential direction is taken along the motion. The mean tangential component is $a_t=\dfrac{\Delta v}{\Delta t}$, where $\Delta v$ is the change in speed along the segment. The instantaneous value is obtained over shorter and shorter intervals and is the slope of the speed-time graph at that instant. A negative sign means the body slows down. The radial component remains $a_c=\dfrac{v^2}{r}$, directed towards the centre.

The two directions are perpendicular, so by Pythagoras' theorem $a=\sqrt{a_c^2+a_t^2}$. For $v=4\,\mathrm{m/s}$, $r=4\,\mathrm m$ and $a_t=3\,\mathrm{m/s^2}$, the radial acceleration is $\dfrac{4^2}{4}\,\mathrm{m/s^2}=4\,\mathrm{m/s^2}$ and the total magnitude is $\sqrt{16+9}\,\mathrm{m/s^2}=5\,\mathrm{m/s^2}$. If the body slows with $a_t=-3\,\mathrm{m/s^2}$, the magnitude stays $5\,\mathrm{m/s^2}$, but the acceleration tilts backwards relative to the motion. The sign matters when drawing the direction.

Along a fixed circle, at the instant when the body has zero velocity the radial component $\dfrac{v^2}{r}$ is zero. A tangential acceleration may still exist, as for a wheel starting with increasing angular velocity. At nonzero speed, if the tangential acceleration is zero, a centripetal component of positive magnitude remains.
:::

::grafico{curve="4*cos(t),4*sin(t),0,6.2832" vettori="4,0,0.8,0,a_c;4,0,4,2.4,a_t;4,0,0.8,2.4,a" segmenti="0.8,0,0.8,2.4;0.8,2.4,4,2.4" xmin=-5 xmax=5.4 ymin=-5 ymax=5 uguale=1 nomi="x (m),y (m)" titolo="The resultant is the diagonal of the component parallelogram"}

:::osservazione{titolo="Angular acceleration from successive images"}
**Angular acceleration** $\alpha$ (alpha) is the change in angular velocity divided by the time, $\alpha=\dfrac{\Delta\omega}{\Delta t}$, and is measured in $\mathrm{rad/s^2}$. Since $v_t=r\omega$, the tangential component of the acceleration is $a_t=r\alpha$. If $\alpha$ is constant, the average angular velocities over two successive intervals of $0.20\,\mathrm s$ can be compared. For angular advances of $0.30\,\mathrm{rad}$ and $0.70\,\mathrm{rad}$, the two averages are $\dfrac{0.30}{0.20}\,\mathrm{rad/s}=1.5\,\mathrm{rad/s}$ and $\dfrac{0.70}{0.20}\,\mathrm{rad/s}=3.5\,\mathrm{rad/s}$. Because angular velocity changes linearly, each average equals the instantaneous value halfway through its own interval. These midpoints are $0.20\,\mathrm s$ apart, so
$$
\alpha=\frac{3.5-1.5}{0.20}\,\mathrm{rad/s^2}=10\,\mathrm{rad/s^2}.
$$
At a radius of $0.40\,\mathrm m$ the tangential acceleration is $r\alpha=(0.40\cdot10)\,\mathrm{m/s^2}=4\,\mathrm{m/s^2}$ in the direction of increasing angle. Over the same time the radial component $\omega^2r$ changes, because it depends on the square of the instantaneous angular velocity.
:::

:::esempio{titolo="Finding speed and deceleration from a sensor"}
A point on the edge of a disk of radius $4\,\mathrm m$ passes the rightmost point of the circle moving upwards. A sensor reconstructs $\vec a=(-4\,;-3)\,\mathrm{m/s^2}$ with $x$ to the right and $y$ upwards. At that point the centre is to the left, so the component along $x$ is the radial one and gives $a_c=4\,\mathrm{m/s^2}$. The tangent is vertical and the motion is upwards, so the component along $y$ is the tangential one and gives $a_t=-3\,\mathrm{m/s^2}$. The negative sign means the point is slowing down. Solving $a_c=\dfrac{v^2}{r}$ for $v$ gives $v=\sqrt{a_cr}=\sqrt{4\cdot4}\,\mathrm{m/s}=4\,\mathrm{m/s}$.

If the tangential deceleration stays constant, with $t$ measured from that passage, the speed in SI units is $v(t)=4-3t$. The point stops when $4-3t=0$, that is, at $t=\dfrac43\,\mathrm s$. The centripetal component decreases according to $a_c(t)=\dfrac{(4-3t)^2}{4}$ and reaches zero at the stop. The magnitude of the acceleration $\sqrt{a_c^2+3^2}$ therefore approaches $3\,\mathrm{m/s^2}$ just before the point stops. The deceleration model covers the interval in which the point keeps moving in its original direction.

::grafico{curve="t,(4-3*t)^2/4,0,1.333333333;t,-3,0,1.333333333" punti="0,4,pieno;1.333333333,0,pieno;1.333333333,-3,pieno" segmenti="1.333333333,0,1.333333333,-3" etichette="1.28,0.57,4/3" xmin=0 xmax=1.58 ymin=-4 ymax=5 nomi="t (s),a (m/s²)" legenda="a_c;a_t" titolo="During deceleration the tangential component stays constant and the centripetal component falls to zero."}
:::
