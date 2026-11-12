---
titolo: Applications of Newton's laws
sommario: How the laws of static and kinetic friction, the models of fluid resistance and the condition of circular motion turn Newton's second law into the equations that solve inclined planes, falling bodies with drag, flat and banked curves, vertical loops and problems set in an accelerating frame.
---

## Friction between solid surfaces

:::definizione{#friction-force titolo="Friction force"}
When two solid surfaces are pressed together, the contact force exerted by one on the other has a component perpendicular to the surfaces, the normal force $\vec{N}$, and a component parallel to them, the **friction force** $\vec{f}$. The friction force is parallel to the surface of contact and opposes the relative sliding of the two surfaces, or the tendency to slide when there is none.

Two cases are distinguished, since the force behaves differently in each:

- **static friction** $\vec{f}_s$, when the surfaces do not slide on each other;
- **kinetic friction** $\vec{f}_k$, when they do slide.

Both have the same microscopic origin, namely the adhesion and the interlocking of the irregularities of the two surfaces, therefore both grow with the force pressing the surfaces together, which is measured by $N$.

::grafico{assi=0 uguale=1 punti="0,0,pieno" vettori="0,0,2.2,0,F;0,0,-1.5,0,f;0,0,0,2.8,N;0,0,0,-2.8,P" riferimento="-3,-2.4,0,1,x,y" xmin=-3.4 xmax=3.4 ymin=-3.4 ymax=3.4 titolo="Free-body diagram of a block pushed along a horizontal floor, with the arrows drawn to scale: the weight $\vec{P}$ and the normal force $\vec{N}$ balance each other, hence the net force is $F - f$ along the direction of the push"}
:::

:::teorema{#static-friction titolo="Law of static friction"}
Let two surfaces in contact be pressed together with normal force of magnitude $N$ and let them not slide on each other. Then the magnitude of the static friction force satisfies
$$
f_s \le \mu_s N ,
$$
where the **coefficient of static friction** $\mu_s$ is a dimensionless number that depends on the two materials and on the state of their surfaces. The equality holds at the instant sliding is about to begin, hence $f_{s,\max} = \mu_s N$ is the largest tangential force the contact can sustain without sliding.

This is a law obtained from experiment, not derived from the three laws of motion. Its use has two steps: the actual value of $f_s$ is found from the equilibrium equations, and then it is compared with $\mu_s N$ to decide whether the body stays at rest. A crate of mass $20\,\mathrm{kg}$ on a floor with $\mu_s = 0.45$ withstands a horizontal push up to $\mu_s m g = 0.45 \cdot 20\,\mathrm{kg} \cdot 9.81\,\mathrm{m/s^2} = 88.3\,\mathrm{N}$, therefore a push of $70\,\mathrm{N}$ leaves it at rest and the static friction force equals $70\,\mathrm{N}$.
:::

:::teorema{#kinetic-friction titolo="Law of kinetic friction"}
Let two surfaces in contact slide on each other with normal force of magnitude $N$. Then the magnitude of the kinetic friction force is
$$
f_k = \mu_k N ,
$$
where the **coefficient of kinetic friction** $\mu_k$ depends on the two materials, and its direction is opposite to the velocity of the body relative to the surface. For the same pair of surfaces $\mu_k \le \mu_s$, and over the range of speeds met in mechanics $\mu_k$ is nearly independent of the speed and of the area of contact.

Since $f_k$ is determined by $N$ alone, the kinetic friction force is known before the motion is solved, which is what makes a sliding problem reduce to one equation per axis. It follows that a body sliding on a horizontal floor with no other horizontal force has acceleration of magnitude $\mu_k g$, independent of its mass.

::grafico{linee="0,0 3,3;3,3 3,2.4;3,2.4 6,2.4" segmenti="0,3,3,3;0,2.4,3,2.4" etichette="2.25,0.75,at rest;4.1,2.72,sliding;-1.05,3.02,μₛN;-1.05,2.4,μₖN" nomi="F,f" xmin=-1.5 xmax=6.6 ymin=-0.6 ymax=4 titolo="Friction force $f$ against the applied horizontal force $F$: while the body is at rest $f = F$, at $F = \mu_s N$ sliding begins and $f$ drops to the constant value $\mu_k N$"}
:::

:::osservazione{#friction-coefficients titolo="Orders of magnitude"}
Typical values of the coefficients are $\mu_s \approx 1.0$ and $\mu_k \approx 0.8$ for rubber on dry concrete, $\mu_s \approx 0.74$ and $\mu_k \approx 0.57$ for steel on steel, $\mu_s \approx 0.4$ and $\mu_k \approx 0.3$ for dry wood on wood, and $\mu_s \approx 0.14$ and $\mu_k \approx 0.10$ for waxed wood on wet snow. Values above $1$ occur for rubber on rough surfaces, therefore $\mu_s \le 1$ is not a law.

A coefficient quoted in a problem is known to two significant figures at best, hence a result that depends on friction carries the same precision.
:::

:::attenzione
The static friction force is not equal to $\mu_s N$ in general, since $\mu_s N$ is only its largest possible value. For a book lying on a horizontal table with no horizontal force applied, the static friction force is zero, while $\mu_s N$ is positive. Writing $f_s = \mu_s N$ in an equilibrium equation therefore gives a wrong answer except at the threshold of sliding.
:::

## Sliding on a horizontal surface

:::esempio{#stopping-distance titolo="Braking distance of a car"}
A car traveling at $v_0 = 25\,\mathrm{m/s}$ brakes with the wheels locked on a road with $\mu_k = 0.80$. The only horizontal force is kinetic friction, therefore Newton's second law along the direction of motion gives
$$
-\mu_k m g = m a
\quad\Longrightarrow\quad
a = -\mu_k g = -7.85\,\mathrm{m/s^2} .
$$
The acceleration is constant, hence the relation between speed and distance of uniformly accelerated motion applies with final speed zero:
$$
d = \frac{v_0^2}{2\mu_k g} = \frac{(25\,\mathrm{m/s})^2}{2 \cdot 0.80 \cdot 9.81\,\mathrm{m/s^2}} = 39.8\,\mathrm{m} .
$$
The mass has cancelled, therefore a loaded truck and a small car with the same tyres stop in the same distance. The distance grows with the square of the speed, so doubling the speed makes the braking distance four times as long.
:::

## The inclined plane

The weight of a body on an incline is neither parallel nor perpendicular to the surface, hence the first step of every problem of this kind is the choice of axes that makes the two components of the weight explicit.

:::definizione{#incline-components titolo="Axes and components on an incline"}
On a plane inclined at the angle $\theta$ to the horizontal, take the $x$ axis along the plane and the $y$ axis perpendicular to it. With this choice the normal force lies along $y$, the friction force lies along $x$, and the weight of a body of mass $m$ has components
$$
P_x = -\,m g \sin\theta ,
\qquad
P_y = -\,m g \cos\theta ,
$$
where the $x$ axis points up the slope. The angle between the weight and the perpendicular to the plane equals $\theta$, which is why the sine multiplies the component along the plane and the cosine the component across it.

::grafico{assi=0 uguale=1 poligoni="0,0 6,0 6,3.4641" punti="4.2,2.4249,pieno" vettori="4.2,2.4249,4.2,0.0249;4.2,2.4249,3.1608,1.8249;4.2,2.4249,5.2393,0.625" segmenti="3.1608,1.8249,4.2,0.0249;5.2393,0.625,4.2,0.0249" etichette="0.95,0.2,θ;2.05,1.5,mg sinθ;5.75,0.3,mg cosθ;4.35,0.9,P" xmin=-0.6 xmax=7.4 ymin=-0.9 ymax=4.4 titolo="The weight of a body on a plane inclined at $\theta$ splits into $m g \sin\theta$ down the slope and $m g \cos\theta$ perpendicular to it"}

Since the body does not leave the surface, its acceleration along $y$ is zero, therefore the equation along $y$ gives $N = m g\cos\theta$ whenever no other force has a component perpendicular to the plane. Every result of this section rests on that value of $N$.
:::

::::teorema{#angle-of-repose titolo="Angle of repose"}
Let a body rest on a plane inclined at the angle $\theta$, with coefficient of static friction $\mu_s$ and no applied force other than its weight and the contact force. Then the body remains at rest if and only if
$$
\tan\theta \le \mu_s ,
$$
and the **angle of repose** $\theta_s = \arctan\mu_s$ is the largest inclination at which it does not slide.

:::dimostrazione
Take the axes of the preceding definition. The body is at rest, hence both components of its acceleration vanish and the equations of equilibrium are
$$
\begin{cases}
f_s - m g \sin\theta = 0 \\[4pt]
N - m g \cos\theta = 0 .
\end{cases}
$$
The first equation gives $f_s = m g \sin\theta$ and the second gives $N = m g \cos\theta$. The law of static friction requires $f_s \le \mu_s N$, therefore
$$
m g \sin\theta \le \mu_s\, m g \cos\theta .
$$
Since $m g \cos\theta > 0$ for $0 \le \theta < 90^\circ$, dividing by it preserves the inequality and gives $\tan\theta \le \mu_s$. Conversely, when $\tan\theta \le \mu_s$ the value $f_s = m g\sin\theta$ required by equilibrium does not exceed $\mu_s N$, hence the contact can supply it and the body stays at rest.
:::

The condition contains neither the mass nor the area of contact, therefore the angle of repose measures $\mu_s$ directly: tilting a plank until the object begins to slide and reading the angle gives $\mu_s = \tan\theta_s$. For $\mu_s = 0.60$ the angle of repose is $\arctan 0.60 = 31.0^\circ$.

::grafico{assi=0 uguale=1 poligoni="0,0 6,0 6,3.4641" punti="4.3,2.55,pieno" vettori="4.3,2.55,4.3,0.15;4.3,2.55,3.2608,4.35;4.3,2.55,5.3392,3.15" riferimento="0.9,2.5,30,1.4,x,y" etichette="0.95,0.2,θ;4.62,1.3,P;3.0,4.62,N;5.6,3.22,f" xmin=-0.6 xmax=7.6 ymin=-0.9 ymax=5.3 titolo="Body at rest on an incline: the friction force balances $m g \sin\theta$ and the normal force balances $m g \cos\theta$, with the axes taken along the plane and perpendicular to it"}
::::

:::esempio{#incline-with-friction titolo="Acceleration down an incline"}
A block is released on a plane inclined at $\theta = 30^\circ$ with $\mu_k = 0.25$. Since $\tan 30^\circ = 0.577 > 0.25$, the block slides down, hence kinetic friction acts up the slope and the equations along the two axes are
$$
\begin{cases}
m g \sin\theta - \mu_k N = m a \\[4pt]
N - m g \cos\theta = 0 .
\end{cases}
$$
Substituting $N = m g \cos\theta$ into the first equation and dividing by $m$,
$$
a = g\,(\sin\theta - \mu_k \cos\theta) = 9.81\,\mathrm{m/s^2} \cdot (0.500 - 0.25 \cdot 0.866) = 2.78\,\mathrm{m/s^2} .
$$
The mass has cancelled again, therefore all blocks of that material slide with the same acceleration. For a block pushed *up* the same plane the friction force points down the slope, and the same algebra gives $a = g\,(\sin\theta + \mu_k\cos\theta)$ for the magnitude of the deceleration.
:::

## Fluid resistance and terminal speed

:::definizione{#drag-force titolo="Drag force"}
A body moving through a fluid is acted on by a **drag force** $\vec{F}_D$, directed opposite to the velocity of the body relative to the fluid, whose magnitude grows with the speed. Two models cover the cases met in mechanics:
$$
F_D = b\,v
\qquad\text{and}\qquad
F_D = D\,v^2 ,
$$
the first for small bodies at low speed, such as a droplet in air or a sphere in oil, the second for bodies of ordinary size moving fast in air, such as a car or a skydiver. The constant $b$ is measured in $\mathrm{kg/s}$ and the constant $D$ in $\mathrm{kg/m}$, and both depend on the size and the shape of the body and on the properties of the fluid.

Drag differs from kinetic friction because it depends on the speed, therefore the net force on a falling body is not constant and the motion is not uniformly accelerated.
:::

::::teorema{#terminal-speed titolo="Terminal speed"}
Let a body of mass $m$ fall vertically in a fluid, acted on by its weight and by a drag force that increases with the speed. Then the speed tends to the **terminal speed** $v_t$ at which the drag balances the weight, given by
$$
v_t = \frac{m g}{b}
\qquad\text{for } F_D = b v ,
\qquad\qquad
v_t = \sqrt{\frac{m g}{D}}
\qquad\text{for } F_D = D v^2 .
$$

:::dimostrazione
Take the $y$ axis downwards. While the body falls, the weight $m g$ acts downwards and the drag acts upwards, hence Newton's second law reads $m g - F_D(v) = m a$. The speed stops changing exactly when $a = 0$, that is when $F_D(v) = m g$. Solving $b v_t = m g$ gives the first formula, and solving $D v_t^2 = m g$ gives the second, where the positive root is taken since $v_t$ is a speed.

For $v < v_t$ the drag is smaller than the weight, therefore $a > 0$ and the speed increases; for $v > v_t$ the drag exceeds the weight, therefore $a < 0$ and the speed decreases. The speed consequently approaches $v_t$ from either side.
:::

Terminal speed fixes the speed with which a body arrives at the ground after a long fall in air. A skydiver of mass $75\,\mathrm{kg}$ in free fall with $D = 0.25\,\mathrm{kg/m}$ reaches
$$
v_t = \sqrt{\frac{75\,\mathrm{kg} \cdot 9.81\,\mathrm{m/s^2}}{0.25\,\mathrm{kg/m}}} = 54\,\mathrm{m/s} ,
$$
and opening the parachute multiplies $D$ by about $30$, which divides the terminal speed by about $\sqrt{30} \approx 5.5$.
::::

:::richiamo{titolo="Separable first-order equation"}
Hypothesis: $y' = F(t)\,G(y)$ with $G$ continuous and $G(y) \ne 0$.

Conclusion: the solution satisfies $\displaystyle\int \frac{dy}{G(y)} = \int F(t)\,dt$, and one arbitrary constant is fixed by the initial condition.

The chapter of Calculus on separable equations establishes the method, which is the only integration needed here.
:::

::::teorema{#linear-drag-motion titolo="Fall with linear drag"}
Let a body of mass $m$ start from rest and fall in a fluid with drag $F_D = b v$. Then its speed and the distance fallen are
$$
v(t) = v_t\left(1 - e^{-\frac{t}{\tau}}\right) ,
\qquad
y(t) = v_t\left[\,t - \tau\left(1 - e^{-\frac{t}{\tau}}\right)\right] ,
$$
where $v_t = \dfrac{m g}{b}$ is the terminal speed and $\tau = \dfrac{m}{b}$ is the **time constant** of the motion.

:::dimostrazione
With the $y$ axis downwards, Newton's second law gives the differential equation
$$
m\,\frac{dv}{dt} = m g - b v .
$$
Dividing by $m$ and writing $v_t = \dfrac{m g}{b}$ and $\tau = \dfrac{m}{b}$,
$$
\frac{dv}{dt} = \frac{v_t - v}{\tau} .
$$
The equation is separable and $v < v_t$ during the motion, hence
$$
\int_0^{v} \frac{dv'}{v_t - v'} = \int_0^{t} \frac{dt'}{\tau}
\quad\Longrightarrow\quad
-\ln\frac{v_t - v}{v_t} = \frac{t}{\tau} .
$$
Taking the exponential of both sides and solving for $v$ gives $v = v_t\left(1 - e^{-t/\tau}\right)$, which vanishes at $t = 0$ as required. Integrating this speed from $0$ to $t$ gives the distance fallen,
$$
y(t) = \int_0^t v_t\left(1 - e^{-t'/\tau}\right) dt' = v_t\left[\,t - \tau\left(1 - e^{-t/\tau}\right)\right] .
$$
:::

The time constant measures how fast the terminal speed is approached, since $v(\tau) = 0.632\,v_t$ and $v(3\tau) = 0.950\,v_t$. For large $t$ the distance grows as $v_t\,(t - \tau)$, therefore the graph of $y(t)$ becomes a straight line of slope $v_t$, as uniform motion requires.

::grafico{f="4.905*(1-exp(-x/0.5))" asintoti="y=4.905" nomi="t,v" xmin=-0.15 xmax=3 ymin=-0.6 ymax=6.2 etichette="2.1,5.3,v = vₜ" titolo="Speed of a body falling from rest with linear drag, for $v_t = 4.91\,\mathrm{m/s}$ and $\tau = 0.50\,\mathrm{s}$: the curve approaches the terminal speed without reaching it"}
::::

## Circular motion and centripetal force

:::richiamo{titolo="Centripetal acceleration"}
Hypothesis: a particle moves on a circle of radius $r$ with speed $v$.

Conclusion: its acceleration has the component $a_c = \dfrac{v^2}{r}$ directed towards the center of the circle, and the component $a_t = \dfrac{dv}{dt}$ tangent to it. In uniform circular motion $v$ is constant, hence $a_t = 0$ and the acceleration is radial.

The chapter on motion in two and three dimensions establishes both components.
:::

::::teorema{#centripetal-force titolo="Net force in uniform circular motion"}
Let a particle of mass $m$ move with constant speed $v$ on a circle of radius $r$. Then the net force on it is directed towards the center of the circle at every instant and has magnitude
$$
F_{\text{net}} = m\,\frac{v^2}{r} = m\,\omega^2 r ,
$$
where $\omega = \dfrac{v}{r}$ is the angular speed.

:::dimostrazione
Newton's second law states $\vec{F}_{\text{net}} = m\vec{a}$, hence the net force has the direction of the acceleration and the magnitude $m a$. In uniform circular motion the acceleration is radial and directed towards the center, with magnitude $\dfrac{v^2}{r}$, therefore the net force is radial and equal to $m\dfrac{v^2}{r}$. Substituting $v = \omega r$ gives the second expression.
:::

The quantity $m\dfrac{v^2}{r}$ is not a new force in the free-body diagram: it is the value that the sum of the real forces must have. Every problem of circular motion is therefore solved by writing the components of the real forces along the radius and setting their sum equal to $m\dfrac{v^2}{r}$, with the axis pointing towards the center.

::grafico{assi=0 uguale=1 curve="2*cos(t),2*sin(t),0,6.29" punti="0,0,pieno;1.4142,1.4142,pieno" vettori="1.4142,1.4142,0.5652,2.2632,v;1.4142,1.4142,0.7071,0.7071,a" segmenti="0,0,1.4142,1.4142" etichette="0.62,0.42,r" xmin=-2.6 xmax=2.9 ymin=-2.6 ymax=2.9 titolo="Uniform circular motion: the velocity is tangent to the circle and the acceleration points towards the center, with $a_c = \dfrac{v^2}{r}$"}
::::

:::esempio{#conical-pendulum titolo="Conical pendulum"}
A ball of mass $m$ hangs from a string of length $L$ and travels a horizontal circle, the string making the constant angle $\theta$ with the vertical. The forces on the ball are its weight and the tension of the string, hence with the vertical axis upwards and the horizontal axis towards the center,
$$
\begin{cases}
T\cos\theta - m g = 0 \\[4pt]
T\sin\theta = m\,\dfrac{v^2}{r}
\end{cases}
\qquad\text{with}\qquad
r = L\sin\theta .
$$
The first equation gives $T = \dfrac{m g}{\cos\theta}$. Substituting it into the second and using $r = L\sin\theta$,
$$
\frac{m g\sin\theta}{\cos\theta} = \frac{m v^2}{L\sin\theta}
\quad\Longrightarrow\quad
v = \sin\theta\sqrt{\frac{g L}{\cos\theta}} ,
$$
and the period follows as $\mathcal{T} = \dfrac{2\pi r}{v} = 2\pi\sqrt{\dfrac{L\cos\theta}{g}}$. For $L = 1.2\,\mathrm{m}$ and $\theta = 25^\circ$ the speed is $1.52\,\mathrm{m/s}$ and the period is $2.09\,\mathrm{s}$.

::grafico{assi=0 uguale=1 linee="-1.1,3 1.1,3;0,3 1.5,0.402" curve="1.5*cos(t),0.402+0.42*sin(t),0,6.29" punti="1.5,0.402,pieno" vettori="1.5,0.402,0.5,2.134,T;1.5,0.402,1.5,-1.33,P;1.5,0.402,0.5,0.402,F" segmenti="0,3,0,0.402" etichette="0.13,2.45,θ" xmin=-2 xmax=2.8 ymin=-1.8 ymax=3.6 titolo="Conical pendulum: the horizontal component of the tension supplies the net force $m\dfrac{v^2}{r}$ towards the center, while the vertical component balances the weight"}
:::

## Curves on a road

::::teorema{#flat-curve titolo="Maximum speed on a flat curve"}
Let a vehicle of mass $m$ travel a horizontal curve of radius $r$ on a flat road, with coefficient of static friction $\mu_s$ between the tyres and the road. Then the curve can be taken without sliding if and only if
$$
v \le \sqrt{\mu_s\, g\, r} .
$$

:::dimostrazione
The road is horizontal, hence the weight and the normal force are vertical and cancel, so $N = m g$. The tyres do not slide sideways, therefore the only horizontal force is static friction, and it must supply the net force towards the center:
$$
f_s = m\,\frac{v^2}{r} .
$$
The law of static friction requires $f_s \le \mu_s N = \mu_s m g$, hence
$$
m\,\frac{v^2}{r} \le \mu_s\, m g
\quad\Longrightarrow\quad
v^2 \le \mu_s\, g\, r ,
$$
and taking the square root of both positive sides gives the condition.
:::

The maximum speed does not depend on the mass, therefore a loaded and an empty vehicle leave the road at the same speed. It falls as the square root of $\mu_s$, hence a wet road with $\mu_s$ halved reduces the safe speed by the factor $\sqrt{2}$. A curve of radius $50\,\mathrm{m}$ with $\mu_s = 0.80$ can be taken at $\sqrt{0.80 \cdot 9.81\,\mathrm{m/s^2} \cdot 50\,\mathrm{m}} = 19.8\,\mathrm{m/s}$.
::::

::::teorema{#banked-curve titolo="Banked curve without friction"}
Let a curve of radius $r$ be banked at the angle $\theta$ to the horizontal. Then a vehicle travels it with no sideways friction at the single speed $v$ for which
$$
\tan\theta = \frac{v^2}{g\,r} .
$$

:::dimostrazione
The forces on the vehicle are its weight, vertical and of magnitude $m g$, and the normal force, perpendicular to the road surface and therefore tilted by $\theta$ from the vertical. With the $y$ axis vertical and upwards and the $x$ axis horizontal and towards the center of the curve, the components of the normal force are $N\sin\theta$ along $x$ and $N\cos\theta$ along $y$. The vehicle has no vertical acceleration and its horizontal acceleration is $\dfrac{v^2}{r}$ towards the center, hence
$$
\begin{cases}
N\cos\theta - m g = 0 \\[4pt]
N\sin\theta = m\,\dfrac{v^2}{r} .
\end{cases}
$$
Dividing the second equation by the first eliminates both $N$ and $m$, and since $\cos\theta \ne 0$,
$$
\tan\theta = \frac{v^2}{g\,r} .
$$
:::

The angle depends on $v$ and $r$ alone, therefore a bank is designed for one speed, and at any other speed friction makes up the difference. Highway curves are banked for the posted speed, so that the road remains safe when it is wet and $\mu_s$ is small. For $v = 25\,\mathrm{m/s}$ and $r = 120\,\mathrm{m}$ the design angle is $\arctan\dfrac{(25\,\mathrm{m/s})^2}{9.81\,\mathrm{m/s^2} \cdot 120\,\mathrm{m}} = 28.0^\circ$.

::grafico{assi=0 uguale=1 poligoni="-1,0 5,3.4641 5,0" punti="2,1.7321,pieno" vettori="2,1.7321,0.701,3.9821,N;2,1.7321,2,-0.518,P;2,1.7321,0.701,1.7321,F" etichette="-0.1,0.2,θ" xmin=-2 xmax=5.8 ymin=-1.2 ymax=4.6 titolo="Banked curve: the normal force and the weight add to a horizontal net force $m\dfrac{v^2}{r}$ pointing towards the center of the curve"}
::::

## Vertical circles

::::teorema{#vertical-loop titolo="Minimum speed at the top of a vertical loop"}
Let a body travel the inside of a vertical circular track of radius $r$, or be attached to a string of length $r$, in a vertical circle. Then contact with the track, or tension in the string, is maintained at the top of the circle if and only if the speed there satisfies
$$
v_{\text{top}} \ge \sqrt{g\,r} .
$$

:::dimostrazione
At the top of the circle the center lies vertically below the body, hence the radial axis points downwards. The weight $m g$ points downwards and the contact force, whether the normal force of the track or the tension of the string, also points downwards, towards the center. Newton's second law along the radial axis therefore gives
$$
N + m g = m\,\frac{v_{\text{top}}^2}{r}
\quad\Longrightarrow\quad
N = m\left(\frac{v_{\text{top}}^2}{r} - g\right) .
$$
A track can push but cannot pull, and an ideal string can pull but cannot push, hence in both cases $N \ge 0$ is required. That inequality holds if and only if $\dfrac{v_{\text{top}}^2}{r} \ge g$, that is $v_{\text{top}} \ge \sqrt{g r}$.
:::

At the critical speed $v_{\text{top}} = \sqrt{g r}$ the contact force vanishes and the weight alone supplies the net force towards the center, which is the condition of free fall along a circular path. A loop of radius $6.0\,\mathrm{m}$ therefore requires at least $\sqrt{9.81\,\mathrm{m/s^2} \cdot 6.0\,\mathrm{m}} = 7.67\,\mathrm{m/s}$ at the top. The chapter on potential energy and conservation of energy relates that speed to the height from which the body is released.

::grafico{assi=0 uguale=1 unicolore=1 curve="2*cos(t),2*sin(t),0,6.29" punti="0,2,pieno;0,-2,pieno" vettori="-0.35,2,-0.35,1.2,N;0.35,2,0.35,0.9,P;-0.35,-2,-0.35,-0.3,N;0.35,-2,0.35,-3.1,P" etichette="1.45,1.75,top;1.25,-1.85,bottom" xmin=-2.8 xmax=3 ymin=-3.6 ymax=2.8 titolo="Vertical loop: at the top both forces point towards the center, at the bottom they oppose each other, hence the contact force is largest at the bottom"}
::::

:::esempio{#car-over-hill titolo="Car over the crest of a hill"}
A car passes the crest of a hill whose profile has radius of curvature $r$. At the crest the center of the circle lies below the car, hence the radial axis points downwards and the equation along it is
$$
m g - N = m\,\frac{v^2}{r}
\quad\Longrightarrow\quad
N = m\left(g - \frac{v^2}{r}\right) .
$$
The normal force is therefore smaller than the weight, which is the reason for the feeling of lightness at the crest. The road ceases to push when $N = 0$, hence the car leaves the surface at
$$
v = \sqrt{g\,r} = \sqrt{9.81\,\mathrm{m/s^2} \cdot 40\,\mathrm{m}} = 19.8\,\mathrm{m/s}
$$
for a crest of radius $40\,\mathrm{m}$. At that speed the wheels carry no load, therefore friction vanishes and the car can neither brake nor steer.
:::

## Accelerating frames of reference

:::definizione{#noninertial-frame titolo="Noninertial frame and inertial force"}
A frame of reference that accelerates with respect to an inertial frame is **noninertial**, and Newton's second law in the form $\vec{F}_{\text{net}} = m\vec{a}$ does not hold in it. Let the frame translate with acceleration $\vec{A}$ with respect to an inertial frame. Then the motion of a particle of mass $m$ as measured in the accelerating frame obeys
$$
\vec{F}_{\text{net}} + \vec{F}_{\text{in}} = m\,\vec{a}' ,
\qquad
\vec{F}_{\text{in}} = -\,m\vec{A} ,
$$
where $\vec{a}'$ is the acceleration measured in the accelerating frame and $\vec{F}_{\text{in}}$ is the **inertial force**. The inertial force has no agent exerting it and no third-law partner, therefore it appears in the equations of the accelerating frame alone.

A rotating frame is not described by that formula, since the points of such a frame do not all have the same acceleration. In the frame that rotates with a body traveling a circle of radius $r$ at the constant speed $v$, the body is at rest and the inertial force acting on it, called the **centrifugal force**, points away from the center and has magnitude $m\dfrac{v^2}{r}$. A passenger in a turning car is in equilibrium in that frame, since the centrifugal force balances the friction and the contact forces directed inwards.
:::

:::esempio{#accelerating-car-pendulum titolo="Pendulum in an accelerating vehicle"}
A small body hangs from the ceiling of a vehicle that accelerates horizontally with magnitude $A$, and the string settles at a constant angle $\theta$ from the vertical. In the frame of the vehicle the body is at rest, hence the tension, the weight and the inertial force $m A$ directed backwards add to zero:
$$
\begin{cases}
T\sin\theta - m A = 0 \\[4pt]
T\cos\theta - m g = 0 .
\end{cases}
$$
Dividing the first equation by the second gives
$$
\tan\theta = \frac{A}{g} ,
$$
therefore the angle measures the acceleration and does not depend on the mass. For $A = 2.5\,\mathrm{m/s^2}$ the string hangs at $\arctan\dfrac{2.5}{9.81} = 14.3^\circ$ from the vertical, tilted towards the rear of the vehicle. The same equations written in the ground frame, where the body has acceleration $A$ and only two forces act on it, give the same angle.
:::

:::attenzione
An inertial force cannot be added to a free-body diagram drawn in an inertial frame. For a car on a flat curve the ground frame sees only the real forces, and the friction force supplies the centripetal force, $f_s = m\dfrac{v^2}{r}$. Adding $m\dfrac{v^2}{r}$ outwards to that diagram and still writing $\sum F = m\dfrac{v^2}{r}$ counts the same term twice: it gives $f_s = 2m\dfrac{v^2}{r}$, hence the wrong limit $v \le \sqrt{\dfrac{\mu_s g r}{2}}$ in place of $v \le \sqrt{\mu_s g r}$. Each frame gives a consistent description on its own, therefore only one frame is used at a time.
:::
