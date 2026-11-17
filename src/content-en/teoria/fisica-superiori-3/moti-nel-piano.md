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

## Horizontal launch

:::teorema{#lancio-orizzontale titolo="Independent component equations"}
Assume negligible air resistance, horizontal ground and uniform $g$. Take $x$ horizontally and $y$ upwards. If the body starts at $(0,h)$ with horizontal velocity $v_0>0$, the equations are
$$
x(t)=v_0t,\qquad y(t)=h-\tfrac12gt^2.
$$
Vertical motion starts from rest and determines the landing time $t_f=\sqrt{2h/g}$. Horizontal motion continues with zero acceleration over the same time. The horizontal distance is $R=v_0t_f$, so it varies linearly with $v_0$ and as the square root of $h$. Quadrupling $h$ doubles the time and, at fixed $v_0$, the distance.

With $h=5\,\mathrm m$, $v_0=6\,\mathrm{m/s}$ and $g=10\,\mathrm{m/s^2}$, $t_f=1\,\mathrm s$ and $R=6\,\mathrm m$. The velocity just before impact has components $(6,-10)\,\mathrm{m/s}$. It points diagonally because the horizontal component keeps its initial value while the vertical component grows in magnitude. Substituting $t=x/v_0$ into the vertical equation gives $y=h-\dfrac{g}{2v_0^2}x^2$. Use the section from $x=0$ to $x=R$, up to contact.
:::

::grafico{curve="6*t,5-5*t^2,0,1" punti="0,5,pieno;6,0,pieno" vettori="0,5,2,5,v_0" xmin=-0.6 xmax=7 ymin=-0.5 ymax=6.5 titolo="The horizontal launch follows a parabola until it reaches the ground"}

## Oblique launch

:::teorema{#lancio-obliquo titolo="Flight time, peak height and range"}
Let $\theta$ be the launch angle from the positive $x$-axis. Starting at $(0,h)$ without drag, the initial components are $v_{0x}=v_0\cos\theta$ and $v_{0y}=v_0\sin\theta$. Thus $x=v_{0x}t$ and $y=h+v_{0y}t-\frac12gt^2$. If $v_{0y}>0$, at the top $v_y=v_{0y}-gt=0$. The rise in height is $H=v_{0y}^2/(2g)$. At that instant velocity remains horizontal if $v_{0x}$ is nonzero.

If launch and landing are at the same height, the first solution of $y(t)=h$ is the launch, $t=0$. The second gives $t_f=2v_{0y}/g$. This yields the range
$$
R=\frac{2v_{0x}v_{0y}}g=\frac{v_0^2\sin(2\theta)}g .
$$
For $0<\theta<90^\circ$ and fixed $v_0$, the sine is largest at $2\theta=90^\circ$. Complementary angles have the same range in these conditions because $\sin\alpha=\sin(180^\circ-\alpha)$. Their flight times and peak heights differ because they depend on the vertical component.

If the landing height differs, solve the vertical equation with the new height. For $x=8t$, $y=15+5t-5t^2$, the ground is reached at $t=(1+\sqrt{13})/2\,\mathrm s\simeq2.30\,\mathrm s$. The equal-height formula would give $1\,\mathrm s$, which instead marks the return to the initial height of fifteen metres.
:::

::grafico{curve="8*t,15+5*t-5*t^2,0,2.30277564" punti="0,15,pieno;4,16.25,pieno;8,15,pieno" segmenti="0,15,8,15" xmin=-0.5 xmax=20 ymin=-1 ymax=18.5 titolo="The return to launch height precedes ground impact"}

## Angles and angular velocity

:::definizione{#radianti titolo="The radian"}
An angle in radians is signed arc length $s$ over radius $r$: $\theta=s/r$. One revolution is $2\pi$ radians, so $180^\circ=\pi\,\mathrm{rad}$. Angular velocity measures angular change per unit time. In uniform circular motion $\omega=2\pi/T=2\pi f$, where $T$ is period and $f$ frequency. A rotor making thirty turns per minute has a frequency of half a turn per second, so $\omega=\pi\,\mathrm{rad/s}$.

From $s=r\theta$ follows $v_t=r\omega$ when $\theta$ is in radians. At double the radius and the same angular velocity, a point covers twice the arc in the same time. All points of a rigid disc complete a turn in the same period, but those farther from the axis have greater tangential speed. Angle measures the turn and radius turns that rotation into a distance.
:::

## Centripetal acceleration

:::teorema{#centripeta titolo="Change in velocity direction"}
On a circle, velocity is tangential and perpendicular to the radius. In uniform circular motion, velocity arrows have the same length but point in different directions at different times. The difference between two nearby velocities has magnitude about $v\,\Delta\theta$ for a very small angle $\Delta\theta$ measured in radians. Dividing by time and using $\omega=v/r$ gives
$$
a_c=v\omega=\frac{v^2}r=\omega^2r .
$$
In the limit the direction of the change points towards the centre. Acceleration shifts the velocity towards a new tangent, causing the path to bend.

The most helpful form depends on the data. At fixed linear speed, a bend of half the radius needs twice the acceleration. At fixed angular speed instead, a point on a disc at twice the radius has twice the acceleration. The apparent difference arises because linear speed also doubles in the second comparison.
:::

::grafico{curve="2*cos(t),2*sin(t),0,6.2832" vettori="2,0,2,1.4,v;2,0,0.9,0,a_c" xmin=-2.5 xmax=2.8 ymin=-2.5 ymax=2.5 uguale=1 titolo="At the right-hand point the acceleration points towards the centre"}

## Non-uniform circular motion

:::osservazione{#tangenziale titolo="Two components of acceleration"}
In non-uniform circular motion, speed changes as well. The tangential component is $a_t=\Delta v/\Delta t$ as a mean rate of change of speed along a segment. Instantaneously it is the limit over short intervals. With the tangential direction defined along the motion, a negative sign means the body slows down. The radial component remains $a_c=v^2/r$ towards the centre.

The two directions are perpendicular, so $a=\sqrt{a_c^2+a_t^2}$. For $v=4\,\mathrm{m/s}$, $r=4\,\mathrm m$ and $a_t=3\,\mathrm{m/s^2}$, the radial acceleration is $4\,\mathrm{m/s^2}$ and total magnitude is $5\,\mathrm{m/s^2}$. If the body slows with $a_t=-3\,\mathrm{m/s^2}$, the magnitude stays five but the direction tilts backwards relative to the motion. The sign matters when drawing that direction.

Along a fixed circle, the radial component vanishes whenever speed is zero. A tangential acceleration may still exist, as for a wheel starting with increasing angular velocity. At nonzero speed, zero tangential acceleration leaves a nonzero centripetal component.
:::

::grafico{curve="2*cos(t),2*sin(t),0,6.2832" vettori="2,0,0.4,0,a_c;2,0,2,1.2,a_t;2,0,0.4,1.2,a" segmenti="0.4,0,0.4,1.2;0.4,1.2,2,1.2" xmin=-2.5 xmax=2.8 ymin=-2.5 ymax=2.5 uguale=1 titolo="The resultant is the diagonal of the component parallelogram"}
