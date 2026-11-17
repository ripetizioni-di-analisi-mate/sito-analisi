---
titolo: "Motion in a plane"
sommario: "Components and velocity, projectile motion without drag, trajectories and acceleration in circular motion."
---

## Describing two-dimensional motion

:::definizione{#componenti-moto titolo="Position, velocity and acceleration in a plane"}
Position has two coordinates that depend on the same time. In the plane, $(x(t),y(t))$ specifies the particle. Eliminating $t$ may give the **trajectory**, the curve of points the particle visits. The trajectory alone says neither when the particle passes each point nor which way it travels along the curve.

**Velocity** has components $v_x$ and $v_y$, estimated from the slopes of the two position equations over shrinking intervals. It is tangent to the trajectory at smooth points with nonzero velocity and points in the direction of motion. From $v_x=6\,\mathrm{m/s}$ and $v_y=-8\,\mathrm{m/s}$, the speed is $10\,\mathrm{m/s}$ and the direction is rightwards and downwards. Adding $6$ and $-8$ would mix contributions along perpendicular axes.

Acceleration is the change in the velocity vector over time. Velocity can change in magnitude, in direction, or both. Motion at constant speed can therefore have nonzero acceleration, as when a particle follows a circle. In a projectile launch without drag near the ground, acceleration is instead vertical and constant.
:::

:::osservazione{titolo="Read an angle and a projection"}
For the velocity $(6\,;-8)\,\mathrm{m/s}$, the angle measured from the positive $x$ axis is $\theta=-\arctan\left(\dfrac{8}{6}\right)\simeq-53^\circ$. The negative angle is measured clockwise, so it agrees with the positive horizontal and negative vertical components. A camera aligned with a line of sight in direction $\hat e=\left(\dfrac35\,;\dfrac45\right)$ reads the component of velocity along that direction. Multiplying each velocity component by the matching component of the unit vector and adding gives $\vec v\cdot\hat e=\left(6\cdot\dfrac35-8\cdot\dfrac45\right)\,\mathrm{m/s}=-2.8\,\mathrm{m/s}$. The minus sign means the projection moves opposite to $\hat e$.
:::

:::esempio{titolo="One path travelled at two rates"}
Two idealised trolleys follow $A(t)=(2t\,;t^2)$ and $B(t)=(4t\,;4t^2)$ in SI units for $t\geq0$. For A, substitute $t=\dfrac{x}{2}$ into the equation for $y$. For B, substitute $t=\dfrac{x}{4}$. Both calculations give $y=\dfrac{x^2}{4}$ for $x\geq0$. The point $P=(2\,;1)\,\mathrm m$ lies on their common path. A reaches it after one second and B after half a second.

The velocity components are the instantaneous slopes of $x(t)$ and $y(t)$. At P they are $(2\,;2)\,\mathrm{m/s}$ for A and $(4\,;4)\,\mathrm{m/s}$ for B. The arrows therefore have the same tangent direction and B has twice the speed of A. The vertical component grows as $2t$ for A and $8t$ for B, so their accelerations are vertical, with magnitudes $2$ and $8\,\mathrm{m/s^2}$ respectively. The same curve can describe motions with different velocities and accelerations.

::grafico{curve="t,t^2/4,0,3.7" punti="2,1,pieno" vettori="2,1,3,2;2,1,2.5,1.5" segmenti="2,0,2,1;0,1,2,1" etichette="1.73,1.24,P;2.46,1.81,v A;3.03,2.12,v B" xmin=-0.2 xmax=4.05 ymin=-0.3 ymax=3.8 uguale=1 nomi="x (m),y (m)" titolo="The trolleys follow the same parabola. At P the arrow lengths are proportional to their speeds."}
:::

## Horizontal launch

:::teorema{#lancio-orizzontale titolo="Independent component equations"}
Assume negligible air resistance, horizontal ground and uniform $g$. Take $x$ horizontally and $y$ upwards. If the body starts at $(0,h)$ with horizontal velocity $v_0>0$, the equations are
$$
x(t)=v_0t,\qquad y(t)=h-\tfrac12gt^2.
$$
Vertical motion starts from rest and determines the landing time $t_f=\sqrt{\dfrac{2h}{g}}$. Horizontal motion continues with zero acceleration over the same time. The horizontal distance is $R=v_0t_f$, so it varies linearly with $v_0$ and as the square root of $h$. Quadrupling $h$ doubles the time and, at fixed $v_0$, the distance.

With $h=5\,\mathrm m$, $v_0=6\,\mathrm{m/s}$ and $g=10\,\mathrm{m/s^2}$, $t_f=1\,\mathrm s$ and $R=6\,\mathrm m$. The velocity just before impact has components $(6,-10)\,\mathrm{m/s}$. It points diagonally because the horizontal component keeps its initial value while the vertical component grows in magnitude. Substituting $t=x/v_0$ into the vertical equation gives $y=h-\dfrac{g}{2v_0^2}x^2$. Use the section from $x=0$ to $x=R$, up to contact.
:::

::grafico{curve="6*t,5-5*t^2,0,1" punti="0,5,pieno;6,0,pieno" vettori="0,5,2,5,v_0" xmin=-0.6 xmax=7 ymin=-0.5 ymax=6.5 nomi="x (m),y (m)" titolo="The horizontal launch follows a parabola until it reaches the ground"}

:::esempio{titolo="Estimating acceleration from video frames"}
A camera measures the position of a ball launched horizontally. The height readings have an uncertainty of about $0.02\,\mathrm m$. Take the first reading as reference, with $x=0$ and $h=4.90\,\mathrm m$. The horizontal coordinates increase by one metre every fifth of a second, consistent with a horizontal speed of $5\,\mathrm{m/s}$. The predicted heights use $g=9.80\,\mathrm{m/s^2}$.

| $t$ (s) | $x$ (m) | Measured $y$ (m) | Predicted $y$ (m) |
| ---: | ---: | ---: | ---: |
| 0.00 | 0.00 | 4.90 | 4.900 |
| 0.20 | 1.00 | 4.70 | 4.704 |
| 0.40 | 2.00 | 4.10 | 4.116 |

The equation $h-y=\tfrac12gt^2$ shows that plotting the drop against $t^2$ gives a straight line of slope $\dfrac g2$. The final reading gives $h-y=0.80\,\mathrm m$ at $t^2=0.16\,\mathrm{s^2}$, so $g\simeq10\,\mathrm{m/s^2}$. With $9.80\,\mathrm{m/s^2}$ the magnitude of the difference between measured and predicted height is $0.016\,\mathrm m$. Both values of $g$ are consistent with these readings. Telling them apart would require more precise height readings or frames farther apart in time, still before impact.

The estimate can also be made using just the two later frames. Subtracting the height equations eliminates $h$, which is useful when the camera misses the instant of launch but the time elapsed since launch is known. The measured height difference is $0.60\,\mathrm m$ and the difference of squares of the times is $0.12\,\mathrm{s^2}$. The estimate is again $g\simeq10\,\mathrm{m/s^2}$, since the height difference divided by the difference of the squares gives half of $g$.

::grafico{f="4.9*x" punti="0,0,pieno;0.04,0.2,pieno;0.16,0.8,pieno" segmenti="0.04,0,0.04,0.2;0.16,0,0.16,0.8" etichette="0.032,-0.069,0.04;0.152,-0.069,0.16;0.043,0.268,0.20;0.146,0.873,0.80" xmin=0 xmax=0.188 ymin=0 ymax=1 nomi="t² (s²),h − y (m)" legenda="g=9.80\,\mathrm{m/s^2}" titolo="The measured drops plotted against time squared lie close to the predicted line."}
:::

## Oblique launch

:::teorema{#lancio-obliquo titolo="Flight time, peak height and range"}
Let $\theta$ be the launch angle from the positive $x$-axis. Starting at $(0,h)$ without drag, the initial components are $v_{0x}=v_0\cos\theta$ and $v_{0y}=v_0\sin\theta$. Thus $x=v_{0x}t$ and $y=h+v_{0y}t-\frac12gt^2$. If $v_{0y}>0$, at the top $v_y=v_{0y}-gt=0$. The rise in height is $H=\dfrac{v_{0y}^2}{2g}$. At that instant velocity remains horizontal if $v_{0x}$ is nonzero.

If launch and landing are at the same height, the first solution of $y(t)=h$ is the launch, $t=0$. The second gives $t_f=2v_{0y}/g$. This yields the range
$$
R=\frac{2v_{0x}v_{0y}}g=\frac{v_0^2\sin(2\theta)}g .
$$
For $0<\theta<90^\circ$ and fixed $v_0$, the sine is largest at $2\theta=90^\circ$. Complementary angles have the same range in these conditions because $\sin\alpha=\sin(180^\circ-\alpha)$. Their flight times and peak heights differ because they depend on the vertical component.

If the landing height differs, solve the vertical equation with the new height. For $x=8t$, $y=15+5t-5t^2$, the ground is reached at $t=(1+\sqrt{13})/2\,\mathrm s\simeq2.30\,\mathrm s$. The equal-height formula would give $1\,\mathrm s$, which instead marks the return to the initial height of fifteen metres.
:::

::grafico{curve="8*t,15+5*t-5*t^2,0,2.302775638" punti="0,15,pieno,L;4,16.25,pieno,A;8,15,pieno,P;18.4222051,0,pieno" etichette="17.85,1.2,I" segmenti="0,15,8,15" xmin=-0.5 xmax=21 ymin=-0.5 ymax=18.5 nomi="x (m),y (m)" titolo="The return to launch height precedes ground impact"}

:::esempio{titolo="Two passages at the same height"}
A ball starts at a height of $1.5\,\mathrm m$ with horizontal speed $4\,\mathrm{m/s}$. It is seen passing a height of $5.25\,\mathrm m$ after $0.5\,\mathrm s$ and again after $1.5\,\mathrm s$. Neglect air resistance and use $g=10\,\mathrm{m/s^2}$. Because $v_y$ decreases linearly, the two passages through the same height are symmetric about the apex. In fact, subtracting the two height equations gives
$$
v_{0y}=\frac{g(t_1+t_2)}{2}=10\,\mathrm{m/s}.
$$
The apex is at $t=1\,\mathrm s$, so the maximum height is $(1.5+10-5)\,\mathrm m=6.5\,\mathrm m$. At the first observation $x=2\,\mathrm m$ and the ball is rising at $v_y=5\,\mathrm{m/s}$. At the second $x=6\,\mathrm m$ and the ball is falling at $v_y=-5\,\mathrm{m/s}$. Two readings at the same height can therefore correspond to different places and directions of motion.

::grafico{curve="4*t,1.5+10*t-5*t^2,0,2.140175425" punti="0,1.5,pieno;2,5.25,pieno;4,6.5,pieno;6,5.25,pieno" segmenti="2,5.25,6,5.25;2,0,2,5.25;6,0,6,5.25" etichette="0.14,1.23,L;1.76,5.61,P;4.02,6.95,A;6.1,5.56,Q" xmin=-0.2 xmax=9.2 ymin=-0.5 ymax=8 nomi="x (m),y (m)" titolo="The ball passes the same height at P on the way up and Q on the way down. A is the highest point."}
:::

:::osservazione{titolo="Check both coordinates of a point"}
In the previous launch, either of the two times gives the required height $5.25\,\mathrm m$. To see whether the ball passes through an opening at $x=5\,\mathrm m$ at that height, the horizontal law gives $t=\dfrac54\,\mathrm s$. At that instant the ball is at $y=1.5+10\cdot1.25-5\cdot1.25^2\simeq6.19$, in metres, so it passes above the opening. A specified point requires both coordinates to match at the same instant.
:::

:::esempio{titolo="Same range, different apex heights"}
Two projectiles both start and land at height zero. Their initial components are $(8\,;6)\,\mathrm{m/s}$ and $(6\,;8)\,\mathrm{m/s}$. Both start at $10\,\mathrm{m/s}$ and their launch angles are complementary because the positive components are interchanged. With $g=10\,\mathrm{m/s^2}$ the first flight lasts $1.2\,\mathrm s$ and the second $1.6\,\mathrm s$. Both travel $9.6\,\mathrm m$ horizontally. The steeper launch rises by $3.2\,\mathrm m$, compared with $1.8\,\mathrm m$ for the first launch. Checking whether a projectile clears an obstacle also requires the shape of the trajectory. Each projectile is at its apex halfway along its range, so the second clears an edge $2.5\,\mathrm m$ above the launch height at that position.

::grafico{curve="8*t,6*t-5*t^2,0,1.2;6*t,8*t-5*t^2,0,1.6" punti="4.8,1.8,pieno;4.8,3.2,pieno;9.6,0,pieno" segmenti="4.8,0,4.8,3.2" etichette="4.98,1.98,A;4.98,3.38,B;9.65,0.27,I" xmin=0 xmax=10.55 ymin=-0.15 ymax=4 nomi="x (m),y (m)" legenda="A;B" titolo="Both trajectories end at I. Their apexes have the same horizontal coordinate and different heights."}
:::

## Angles and angular velocity

:::definizione{#radianti titolo="The radian"}
An angle in radians is signed arc length $s$ over radius $r$: $\theta=\dfrac{s}{r}$. One revolution is $2\pi$ radians, so $180^\circ=\pi\,\mathrm{rad}$. Angular velocity measures angular change per unit time. In uniform circular motion the angular speed is $\omega=\dfrac{2\pi}{T}=2\pi f$, where $T$ is period and $f$ frequency. A rotor making thirty turns per minute has a frequency of half a turn per second, so $\omega=\pi\,\mathrm{rad/s}$.

From $s=r\theta$ follows $v_t=r\omega$ when $\theta$ is in radians. At double the radius and the same angular velocity, a point covers twice the arc in the same time. All points of a rigid disc complete a turn in the same period, but those farther from the axis have greater tangential speed. Angle measures the turn and radius turns that rotation into a distance.
:::

:::esempio{titolo="Reconstructing rotation from two pictures"}
Two pictures taken $0.20\,\mathrm s$ apart show a mark first to the right of the centre and then directly above it. The disk turns uniformly anticlockwise. Between the pictures the mark travels at least one quarter turn and may also complete whole revolutions. The angular displacement is therefore $\Delta\theta=\dfrac{\pi}{2}+2k\pi$, where $k$ is a non-negative integer.

If continuous observation confirms that less than one revolution elapsed between the pictures, then $k=0$. Dividing the angular displacement by the time gives $\omega=\dfrac{5\pi}{2}\,\mathrm{rad/s}$. An angular speed greater by $10\pi\,\mathrm{rad/s}$ would produce the same two images after one additional turn. Counting intermediate passages or taking pictures at shorter intervals resolves the ambiguity.

If only the positions are known and a full revolution is ruled out, the direction still has to be determined. A clockwise rotation of three quarters of a turn joins the same two points. Taking anticlockwise angles as positive gives $\omega=-\dfrac{15\pi}{2}\,\mathrm{rad/s}$. Both calculations refer to the same interval.

::grafico{curve="cos(t),sin(t),0,6.283185307;0.4*cos(t),0.4*sin(t),0,1.570796327" punti="1,0,pieno;0,1,pieno" segmenti="0,0,1,0;0,0,0,1" etichette="1.05,0.13,A;0.1,1.08,B;0.36,0.34,90°" xmin=-1.35 xmax=1.5 ymin=-1.35 ymax=1.48 uguale=1 nomi="x,y" titolo="The pictures show A and B. The inner arc marks a quarter turn, and the mark may have completed additional turns."}
:::

## Centripetal acceleration

:::teorema{#centripeta titolo="Change in velocity direction"}
On a circle, velocity is tangential and perpendicular to the radius. In uniform circular motion, velocity arrows have the same length but point in different directions at different times. The difference between two nearby velocities has magnitude about $v\,|\Delta\theta|$ for a very small angle $\Delta\theta$ measured in radians. Dividing by time and using $\omega=\dfrac vr$ gives
$$
a_c=v\omega=\frac{v^2}r=\omega^2r .
$$
In the limit the direction of the change points towards the centre. Acceleration shifts the velocity towards a new tangent, causing the path to bend.

The most helpful form depends on the data. At fixed linear speed, a bend of half the radius needs twice the acceleration. At fixed angular speed instead, a point on a disc at twice the radius has twice the acceleration. The apparent difference arises because linear speed also doubles in the second comparison.
:::

::grafico{curve="2*cos(t),2*sin(t),0,6.2832" vettori="2,0,2,1.4,v;2,0,0.9,0,a_c" xmin=-2.5 xmax=2.8 ymin=-2.5 ymax=2.5 uguale=1 nomi="x (m),y (m)" titolo="At the right-hand point the acceleration points towards the centre"}

:::osservazione{titolo="Approximating acceleration from two readings"}
A point travels around a circle of radius $3\,\mathrm m$ at $6\,\mathrm{m/s}$. After a quarter turn anticlockwise from the right, its velocity changes from $(0\,;6)\,\mathrm{m/s}$ to $(-6\,;0)\,\mathrm{m/s}$. The magnitude of the difference is $6\sqrt2\,\mathrm{m/s}$. The interval is $\dfrac{\pi}{4}\,\mathrm s$, since $\omega=2\,\mathrm{rad/s}$. The mean acceleration has magnitude $\dfrac{24\sqrt2}{\pi}\,\mathrm{m/s^2}\simeq10.8\,\mathrm{m/s^2}$, while the instantaneous magnitude is $12\,\mathrm{m/s^2}$.

With less than a full turn between readings, the velocity difference is a chord of length $2v\sin\left(\dfrac{|\Delta\theta|}{2}\right)$. Since the interval is proportional to the angle, the ratio of the magnitudes of the average and instantaneous accelerations is
$$
\frac{|\vec a_m|}{a_c}
=\frac{2\sin\left(\dfrac{|\Delta\theta|}{2}\right)}{|\Delta\theta|}.
$$
This ratio is about $0.900$ for a quarter turn. For an arc of $10^\circ$ it is about $0.999$. Using the arc to approximate the chord becomes more accurate when the separation between measurements decreases.

::grafico{vettori="0,0,0,6;0,0,-6,0;0,6,-6,0" punti="0,6,pieno;-6,0,pieno" etichette="0.35,3.4,v₁;-4.55,-0.66,v₂;-3.88,3.2,Δv" xmin=-7 xmax=1.6 ymin=-1.15 ymax=7 uguale=1 nomi="vₓ (m/s),vᵧ (m/s)" titolo="With both velocities drawn from the origin, the change is the vector from the first tip to the second."}
:::

## Non-uniform circular motion

:::osservazione{#tangenziale titolo="Two components of acceleration"}
In non-uniform circular motion, speed changes as well. The tangential component is $a_t=\dfrac{\Delta v}{\Delta t}$ as a mean rate of change of speed along a segment. Instantaneously it is the limit over short intervals. With the tangential direction defined along the motion, a negative sign means the body slows down. The radial component remains $a_c=\dfrac{v^2}{r}$ towards the centre.

The two directions are perpendicular, so $a=\sqrt{a_c^2+a_t^2}$. For $v=4\,\mathrm{m/s}$, $r=4\,\mathrm m$ and $a_t=3\,\mathrm{m/s^2}$, the radial acceleration is $4\,\mathrm{m/s^2}$ and total magnitude is $5\,\mathrm{m/s^2}$. If the body slows with $a_t=-3\,\mathrm{m/s^2}$, the magnitude stays five but the direction tilts backwards relative to the motion. The sign matters when drawing that direction.

Along a fixed circle, the radial component vanishes whenever speed is zero. A tangential acceleration may still exist, as for a wheel starting with increasing angular velocity. At nonzero speed, zero tangential acceleration leaves a nonzero centripetal component.
:::

::grafico{curve="4*cos(t),4*sin(t),0,6.2832" vettori="4,0,0.8,0,a_c;4,0,4,2.4,a_t;4,0,0.8,2.4,a" segmenti="0.8,0,0.8,2.4;0.8,2.4,4,2.4" xmin=-5 xmax=5.4 ymin=-5 ymax=5 uguale=1 nomi="x (m),y (m)" titolo="The resultant is the diagonal of the component parallelogram"}

:::osservazione{titolo="Angular acceleration from successive images"}
If angular velocity changes at a constant rate, the angular acceleration is $\alpha=\dfrac{\Delta\omega}{\Delta t}$. The average angular velocities over two successive intervals of $0.20\,\mathrm s$ can be compared directly. For angular advances of $0.30\,\mathrm{rad}$ and $0.70\,\mathrm{rad}$, the two averages are $1.5$ and $3.5\,\mathrm{rad/s}$. Because angular velocity changes linearly, each average equals the instantaneous value halfway through its own interval. These midpoints are $0.20\,\mathrm s$ apart, so $\alpha=\dfrac{3.5-1.5}{0.20}\,\mathrm{rad/s^2}=10\,\mathrm{rad/s^2}$. At a radius of $0.40\,\mathrm m$ the tangential acceleration is $r\alpha=4\,\mathrm{m/s^2}$ in the direction of increasing angle. Over the same time, the radial acceleration changes because it depends on the square of the instantaneous angular velocity.
:::

:::esempio{titolo="Finding speed and deceleration from a sensor"}
A point on the edge of a disk of radius $4\,\mathrm m$ passes the rightmost point moving upwards. A sensor reconstructs $\vec a=(-4\,;-3)\,\mathrm{m/s^2}$ with $x$ to the right and $y$ upwards. When it passes, the direction towards the centre is to the left and the positive tangent is upwards, so $a_c=4\,\mathrm{m/s^2}$ and $a_t=-3\,\mathrm{m/s^2}$. Solving $a_c=\dfrac{v^2}{r}$ gives $v=\sqrt{4\cdot4}\,\mathrm{m/s}=4\,\mathrm{m/s}$.

If the tangential deceleration stays constant, with $t$ measured from that passage, the speed in SI units is $v(t)=4-3t$ until the point stops at $t=\dfrac43\,\mathrm s$. The centripetal component decreases according to $a_c(t)=\dfrac{(4-3t)^2}{4}$ and reaches zero at the stop. The magnitude of acceleration approaches $3\,\mathrm{m/s^2}$ just before the point stops. The deceleration model covers the interval in which the point keeps moving in its original direction.

::grafico{curve="t,(4-3*t)^2/4,0,1.333333333;t,-3,0,1.333333333" punti="0,4,pieno;1.333333333,0,pieno;1.333333333,-3,pieno" segmenti="1.333333333,0,1.333333333,-3" etichette="1.28,0.57,4/3" xmin=0 xmax=1.58 ymin=-4 ymax=5 nomi="t (s),a (m/s²)" legenda="a_c;a_t" titolo="During deceleration the tangential component stays constant and the centripetal component falls to zero."}
:::
