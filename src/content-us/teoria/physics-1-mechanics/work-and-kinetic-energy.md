---
titolo: Work and kinetic energy
sommario: How the work done by a constant force, by a force that varies along a straight line and by a force along a curved path is computed, how power measures the rate at which work is done, and how the work-energy theorem relates the total work to the change in kinetic energy.
---

## Work of a constant force

:::definizione{#work-constant-force titolo="Work of a constant force"}
Let a constant force $\vec{F}$ act on a body while the body undergoes the displacement $\vec{d}$. The **work** done by that force is the scalar product of the two vectors,
$$
W = \vec{F} \cdot \vec{d} = F\,d\cos\varphi ,
$$
where $\varphi$ is the angle between $\vec{F}$ and $\vec{d}$ when they are drawn from the same point. Work is a scalar, and its SI unit is the **joule**,
$$
1\,\mathrm{J} = 1\,\mathrm{N\cdot m} = 1\,\mathrm{kg\cdot m^2/s^2} .
$$

The quantity $F\cos\varphi$ is the component of the force along the displacement, therefore only that component contributes, while the component perpendicular to the displacement contributes nothing. A force of $40\,\mathrm{N}$ pulling at $60^\circ$ above a horizontal displacement of $6.0\,\mathrm{m}$ does
$$
W = 40\,\mathrm{N} \cdot 6.0\,\mathrm{m} \cdot \cos 60^\circ = 120\,\mathrm{J} .
$$

::grafico{assi=0 uguale=1 linee="0,0 8,0" poligoni="1,0 2.2,0 2.2,1.1 1,1.1;5.4,0 6.6,0 6.6,1.1 5.4,1.1" vettori="1.6,0.55,3.6,1.705,F;1.6,-0.8,6,-0.8,d" segmenti="1.6,0.55,3.6,0.55" etichette="2.4,0.68,φ" xmin=-0.4 xmax=8.4 ymin=-1.6 ymax=2.4 titolo="A constant force $\vec{F}$ acts at the angle $\varphi$ to the horizontal displacement $\vec{d}$, and the work it does is $W = F\,d\cos\varphi$"}

Work is the quantity through which a force is linked to the speed of the body it acts on, and the work-energy theorem of this chapter states that link.
:::

:::osservazione{#sign-of-work titolo="Sign of the work"}
The magnitudes $F$ and $d$ are positive, hence the sign of $W$ is the sign of $\cos\varphi$:

- $W > 0$ when $\varphi < 90^\circ$, that is, when the force has a component in the sense of the motion;
- $W = 0$ when $\varphi = 90^\circ$, that is, when the force is perpendicular to the displacement;
- $W < 0$ when $\varphi > 90^\circ$, that is, when the force has a component opposite to the motion.

A body sliding along a horizontal floor keeps the normal force perpendicular to the displacement, therefore the normal force does zero work. Kinetic friction on the same body points opposite to the velocity, so $\varphi = 180^\circ$ and the friction work is $W_f = -f\,d$, negative at every instant of the sliding.
:::

:::attenzione
A force applied to a body in motion can do zero work. In uniform circular motion the net force points towards the center at every instant and the velocity is tangent to the circle, hence $\varphi = 90^\circ$ and the net work over any arc vanishes. This is consistent with the speed being constant in that motion, as the work-energy theorem shows.

Work also vanishes when the displacement vanishes, so a person holding a $200\,\mathrm{N}$ suitcase still does no work on it, *whatever* the muscular effort.
:::

## The total work done on a body

Several forces usually act at once, and the work of each of them is computed separately before the results are added.

::::teorema{#total-work titolo="Total work and the resultant force"}
Let the constant forces $\vec{F}_1, \vec{F}_2, \dots, \vec{F}_n$ act on a body during the displacement $\vec{d}$, and let $\vec{R} = \vec{F}_1 + \dots + \vec{F}_n$ be their resultant. Then the total work is both the sum of the individual works and the work of the resultant:
$$
W_{\text{tot}} = \sum_{i=1}^{n} \vec{F}_i \cdot \vec{d} = \vec{R} \cdot \vec{d} .
$$

:::dimostrazione
The scalar product is distributive with respect to the sum of vectors, therefore
$$
\vec{R} \cdot \vec{d} = (\vec{F}_1 + \dots + \vec{F}_n) \cdot \vec{d} = \vec{F}_1 \cdot \vec{d} + \dots + \vec{F}_n \cdot \vec{d} ,
$$
and each term of the right-hand side is the work of one force.
:::

A problem can therefore be solved either by adding the works one at a time or by computing the resultant first. A crate dragged $5.0\,\mathrm{m}$ along a horizontal floor by a horizontal force $F = 25\,\mathrm{N}$ against a friction force $f = 10\,\mathrm{N}$ receives $W_F = 125\,\mathrm{J}$ and $W_f = -50\,\mathrm{J}$, while the weight and the normal force do no work, hence $W_{\text{tot}} = 75\,\mathrm{J}$.

::grafico{assi=0 uguale=1 punti="0,0,pieno" vettori="0,0,2.4,0,F;0,0,-1.2,0,f;0,0,0,2,N;0,0,0,-2,P" riferimento="-2.9,-2.4,0,1,x,y" xmin=-3.6 xmax=3.2 ymin=-3.1 ymax=2.6 titolo="Free-body diagram of a crate dragged to the right: $\vec{N}$ and $\vec{P}$ are perpendicular to the displacement and do no work, therefore $W_{\text{tot}} = (F - f)\,d$"}
::::

## Work done by a variable force along a straight line

:::richiamo{titolo="The definite integral"}
For a function $F_x$ continuous on $[x_1, x_2]$, the definite integral $\displaystyle\int_{x_1}^{x_2} F_x(x)\,dx$ is the limit of the sums $\sum_k F_x(\xi_k)\,\Delta x_k$ as the widths $\Delta x_k$ of the subintervals tend to zero, and it equals the area between the graph of $F_x$ and the $x$ axis, counted negatively where the graph lies below the axis. Its calculation by antiderivatives is the subject of the chapter on the definite integral of a calculus course.
:::

:::definizione{#work-variable-force titolo="Work of a variable force in one dimension"}
Let a body move along the $x$ axis from $x_1$ to $x_2$ under a force whose component along the axis is the function $F_x(x)$. The path is divided into subintervals so short that on each of them the force is constant to any desired accuracy, hence the work on the subinterval containing $\xi_k$ is $F_x(\xi_k)\,\Delta x_k$ and the total work is the sum of these contributions. Passing to the limit of vanishing widths gives the **work of a variable force**,
$$
W = \int_{x_1}^{x_2} F_x(x)\,dx .
$$

The work is therefore the area under the graph of $F_x(x)$ between $x_1$ and $x_2$, with the sign of the area. For a constant force the graph is a horizontal line and the area is $F_x\,(x_2 - x_1)$, which returns the previous definition.

::grafico{f="2+0.5*x^2" area="2+0.5*x^2;0;0;3" xmin=-0.4 xmax=3.8 ymin=-0.9 ymax=7.4 nomi="x,F" titolo="The work done by a variable force between $x_1 = 0$ and $x_2 = 3$ is the shaded area under the graph of $F_x(x)$"}

For $F_x(x) = b\,x^2$ with $b = 3.0\,\mathrm{N/m^2}$, the work between $x_1 = 0$ and $x_2 = 2.0\,\mathrm{m}$ is
$$
W = \int_{0}^{2.0} b\,x^2\,dx = \frac{b\,x^3}{3}\bigg|_{0}^{2.0} = \frac{3.0\,\mathrm{N/m^2} \cdot (2.0\,\mathrm{m})^3}{3} = 8.0\,\mathrm{J} .
$$
The force of a spring is the variable force that occurs most often in mechanics, and it is treated next.
:::

:::teorema{#hookes-law titolo="Hooke's law"}
Let a spring of negligible mass be fixed at one end, let the $x$ axis lie along the spring with the origin at the position of the free end when the spring is at its natural length, and let the free end be displaced to the coordinate $x$. Then, within the elastic range of the spring, the force the spring exerts on the body attached to its free end has the component
$$
F_x = -k\,x ,
$$
where the positive constant $k$ is the **spring constant**, measured in $\mathrm{N/m}$.

This is an experimental law, established by measuring the elongation produced by known loads, and it holds as long as the deformation stays small enough for the spring to return to its natural length. The minus sign records that the force points towards the origin, since $F_x < 0$ for $x > 0$ and $F_x > 0$ for $x < 0$, and for this reason the spring force is called a restoring force. A spring with $k = 250\,\mathrm{N/m}$ stretched by $x = 0.20\,\mathrm{m}$ pulls the body back with a force of magnitude $50\,\mathrm{N}$.
:::

::::teorema{#work-of-a-spring titolo="Work done by a spring force"}
Let a spring obey Hooke's law with constant $k$, and let its free end move from the coordinate $x_1$ to the coordinate $x_2$, both measured from the natural length. Then the work done by the spring force on the body attached to it is
$$
W = \frac{1}{2}k\,x_1^2 - \frac{1}{2}k\,x_2^2 .
$$

:::dimostrazione
The force component is $F_x = -k\,x$, hence by the definition of the work of a variable force
$$
W = \int_{x_1}^{x_2} (-k\,x)\,dx = -\frac{1}{2}k\,x^2\bigg|_{x_1}^{x_2} = \frac{1}{2}k\,x_1^2 - \frac{1}{2}k\,x_2^2 .
$$
:::

The result depends on $x_1$ and $x_2$ alone, therefore the work is determined by the initial and the final deformation. Starting from the natural length, $x_1 = 0$, the work is $W = -\dfrac{1}{2}k\,x_2^2$, negative both for a stretch and for a compression, since the force opposes the displacement in either case. For $k = 250\,\mathrm{N/m}$ and a stretch of $0.20\,\mathrm{m}$,
$$
W = -\frac{1}{2} \cdot 250\,\mathrm{N/m} \cdot (0.20\,\mathrm{m})^2 = -5.0\,\mathrm{J} ,
$$
and the agent that stretches the spring slowly does $+5.0\,\mathrm{J}$ on it.

::grafico{f="-4*x" area="0;-4*x;0;1.2" xmin=-1.6 xmax=1.6 ymin=-5.6 ymax=5.6 nomi="x,F" titolo="Graph of the spring force $F_x = -kx$: while the spring is stretched from $0$ to $x$ the graph lies below the axis, hence the work is the shaded area taken with the minus sign, $W = -\dfrac{1}{2}k\,x^2$"}
::::

## Work along a curved path

:::definizione{#line-integral-work titolo="Work along a path"}
Let a body move along a path from the point $A$ to the point $B$ under a force $\vec{F}$ that changes in magnitude and in direction from point to point. The path is divided into displacements $d\vec{r}$ so short that each of them is a straight segment along which the force is constant, hence the work of one of them is $dW = \vec{F} \cdot d\vec{r}$. The sum of these contributions is the **work along the path**,
$$
W = \int_{A}^{B} \vec{F} \cdot d\vec{r} = \int_{A}^{B} F\cos\varphi\,ds ,
$$
where $ds = |d\vec{r}|$ is the element of arc length and $\varphi$ is the angle between the force and the tangent to the path at that point.

::grafico{assi=0 uguale=1 curve="t,0.3*t^2,0,3" punti="0,0,pieno,A;3,2.7,pieno,B;2,1.2,pieno" vettori="2,1.2,2.72,2.06,dr;2,1.2,4,1.65,F" etichette="2.95,1.95,φ" xmin=-0.5 xmax=4.6 ymin=-0.5 ymax=3.4 titolo="Along the path from $A$ to $B$ the element of work is $dW = \vec{F} \cdot d\vec{r}$, and $d\vec{r}$ is tangent to the path at each point"}

In Cartesian components the scalar product gives
$$
W = \int_{A}^{B} \left( F_x\,dx + F_y\,dy + F_z\,dz \right) ,
$$
and when the path is described by a parameter $t$, so that $\vec{r} = \vec{r}(t)$ with $\vec{v} = \dfrac{d\vec{r}}{dt}$, the integral becomes an ordinary integral in $t$,
$$
W = \int_{t_A}^{t_B} \vec{F} \cdot \vec{v}\,dt .
$$
This last form is used whenever the trajectory is given by its parametric equations, as in circular motion.
:::

::::teorema{#work-of-weight titolo="Work done by the weight"}
Let a body of mass $m$ move near the surface of the Earth, where the weight is the constant force $\vec{P} = -m g\,\hat{\jmath}$ with the $y$ axis vertical and directed upwards. Let the body go from a point at height $y_1$ to a point at height $y_2$ along *any* path. Then the work done by the weight is
$$
W = -m g\,(y_2 - y_1) ,
$$
and in particular it is $W = m g h$ for a descent of height $h$ and $W = -m g h$ for a climb of height $h$.

:::dimostrazione
The weight has components $(0, -mg, 0)$, therefore the work along the path is
$$
W = \int_{A}^{B} \left( 0 \cdot dx + (-m g)\,dy + 0 \cdot dz \right) = -m g \int_{y_1}^{y_2} dy = -m g\,(y_2 - y_1) .
$$
The horizontal displacements do not appear in the result, and the integral in $y$ depends on the two endpoints alone.
:::

The work of the weight is therefore fixed by the difference in height and is the same along a vertical fall, along an inclined plane and along a curved slide, which is what makes energy methods effective for bodies moving on tracks of complicated shape. A body of mass $2.0\,\mathrm{kg}$ that descends $3.0\,\mathrm{m}$ receives from the weight
$$
W = 2.0\,\mathrm{kg} \cdot 9.81\,\mathrm{m/s^2} \cdot 3.0\,\mathrm{m} = 58.9\,\mathrm{J} .
$$

::grafico{assi=0 uguale=1 linee="0,3 4,0" curve="t,3*(1-t/4)^2,0,4" punti="0,3,pieno,A;4,0,pieno,B" segmenti="0,3,0,0;0,0,4,0" vettori="2,1.5,2,0.6,P" etichette="0.18,1.5,h" xmin=-0.7 xmax=4.8 ymin=-0.7 ymax=3.6 titolo="The weight does the same work $W = m g h$ along the straight path and along the curved path from $A$ to $B$, since only the height difference $h$ enters the result"}

The weight and the spring force share this property, and the chapter on potential energy and conservation of energy builds the notion of a conservative force on it.
::::

## Power

:::definizione{#power titolo="Average power and instantaneous power"}
Let a force do the work $\Delta W$ during the time interval $\Delta t$. The **average power** is the ratio
$$
P_{\text{av}} = \frac{\Delta W}{\Delta t} ,
$$
and the **instantaneous power** is its limit for $\Delta t \to 0$, that is, the derivative
$$
P = \frac{dW}{dt} .
$$
The SI unit is the **watt**, $1\,\mathrm{W} = 1\,\mathrm{J/s}$. In engineering practice the horsepower is still used, with $1\,\mathrm{hp} = 746\,\mathrm{W}$, and the kilowatt hour is a unit of energy, since $1\,\mathrm{kW\cdot h} = 10^3\,\mathrm{W} \cdot 3600\,\mathrm{s} = 3.6 \times 10^{6}\,\mathrm{J}$.

Power distinguishes two machines that do the same work in different times. A hoist that raises a load through $10\,\mathrm{m}$ does the same work whether it takes $5\,\mathrm{s}$ or $50\,\mathrm{s}$, while the power it delivers is ten times larger in the first case, and the choice of its motor depends on the power.
:::

::::teorema{#power-force-velocity titolo="Power of a force"}
Let a force $\vec{F}$ act on a body whose velocity is $\vec{v}$. Then the instantaneous power delivered by that force is
$$
P = \vec{F} \cdot \vec{v} = F\,v\cos\varphi ,
$$
where $\varphi$ is the angle between the force and the velocity.

:::dimostrazione
During the time $dt$ the body undergoes the displacement $d\vec{r} = \vec{v}\,dt$, so the element of work is $dW = \vec{F} \cdot d\vec{r} = \vec{F} \cdot \vec{v}\,dt$. Dividing by $dt$ gives $P = \dfrac{dW}{dt} = \vec{F} \cdot \vec{v}$.
:::

The formula gives the power without computing the work first, which is what makes it the working tool for vehicles and motors. An elevator cabin of total mass $800\,\mathrm{kg}$ rising at the constant speed $2.5\,\mathrm{m/s}$ is held by a cable whose tension equals the weight, since the acceleration is zero, therefore the cable delivers
$$
P = m g v = 800\,\mathrm{kg} \cdot 9.81\,\mathrm{m/s^2} \cdot 2.5\,\mathrm{m/s} = 1.96 \times 10^{4}\,\mathrm{W} = 19.6\,\mathrm{kW} .
$$
A car that travels at the constant speed $30\,\mathrm{m/s}$ against a total resistive force of $600\,\mathrm{N}$ needs the propulsive force $600\,\mathrm{N}$ as well, hence $P = 1.8 \times 10^{4}\,\mathrm{W}$, which is about $24\,\mathrm{hp}$.
::::

## Kinetic energy

:::definizione{#kinetic-energy titolo="Kinetic energy"}
The **kinetic energy** of a particle of mass $m$ moving with speed $v$ is the scalar
$$
K = \frac{1}{2}m v^2 ,
$$
measured in joules, since $\mathrm{kg} \cdot \mathrm{m^2/s^2} = \mathrm{J}$. It is never negative, and it vanishes *only* when the body is at rest. The speed enters squared, so $K$ does not depend on the direction of the velocity, and the kinetic energy of a system of particles is the sum of the kinetic energies of its parts.

::grafico{f="x^2" punti="2,4,pieno;4,16,pieno" segmenti="2,0,2,4;0,4,2,4;4,0,4,16;0,16,4,16" xmin=-0.5 xmax=5.3 ymin=-1.4 ymax=27 nomi="v,K" titolo="Kinetic energy of a body of mass $2.0\,\mathrm{kg}$ against its speed: doubling the speed from $2.0\,\mathrm{m/s}$ to $4.0\,\mathrm{m/s}$ multiplies the kinetic energy by four"}

The quadratic dependence has a direct consequence for braking, since a car of mass $1200\,\mathrm{kg}$ traveling at $25\,\mathrm{m/s}$ carries
$$
K = \frac{1}{2} \cdot 1200\,\mathrm{kg} \cdot (25\,\mathrm{m/s})^2 = 3.75 \times 10^{5}\,\mathrm{J} ,
$$
and at $50\,\mathrm{m/s}$ it would carry four times as much, so the distance needed to stop it with the same braking force becomes four times longer.
:::

:::osservazione{#kinetic-energy-frame titolo="Kinetic energy depends on the frame"}
The speed of a body is measured in a chosen frame of reference, therefore the kinetic energy is relative to that frame. A passenger of mass $70\,\mathrm{kg}$ seated in a train moving at $30\,\mathrm{m/s}$ has kinetic energy $3.15 \times 10^{4}\,\mathrm{J}$ in the frame of the track and zero in the frame of the train, and the work-energy theorem holds separately in each inertial frame.
:::

## The work-energy theorem

:::richiamo{titolo="Newton's second law"}
In an inertial frame, for a particle of mass $m$ subject to the forces whose resultant is $\vec{R}$, the acceleration satisfies $\vec{R} = m\vec{a}$, with $\vec{a} = \dfrac{d\vec{v}}{dt}$.
:::

::::teorema{#work-energy-theorem titolo="Work-energy theorem"}
Let a particle of mass $m$ move in an inertial frame from a point $A$ to a point $B$ along any path, let $v_1$ and $v_2$ be its speeds at $A$ and at $B$, and let $W_{\text{tot}}$ be the total work done on it by all the forces acting during that motion. Then
$$
W_{\text{tot}} = \frac{1}{2}m v_2^2 - \frac{1}{2}m v_1^2 = K_2 - K_1 = \Delta K .
$$

:::dimostrazione
For a motion along the $x$ axis the resultant has the single component $R_x = m\,\dfrac{dv_x}{dt}$ by **Newton's second law**. Since $dx = v_x\,dt$, the total work is
$$
W_{\text{tot}} = \int_{x_1}^{x_2} R_x\,dx = \int_{t_1}^{t_2} m\,\frac{dv_x}{dt}\,v_x\,dt = m \int_{v_{x1}}^{v_{x2}} v_x\,dv_x = \frac{1}{2}m v_{x2}^2 - \frac{1}{2}m v_{x1}^2 .
$$
The velocity has the single component $v_x$ along the axis, hence $v_x^2 = v^2$ at every instant and the right-hand side is $\dfrac{1}{2}m v_2^2 - \dfrac{1}{2}m v_1^2$.

In the general case the element of work is $\vec{R} \cdot d\vec{r} = m\,\dfrac{d\vec{v}}{dt} \cdot \vec{v}\,dt$. The derivative of the scalar product of $\vec{v}$ with itself is
$$
\frac{d}{dt}(\vec{v} \cdot \vec{v}) = 2\,\frac{d\vec{v}}{dt} \cdot \vec{v} ,
$$
and $\vec{v} \cdot \vec{v} = v^2$, therefore $\dfrac{d\vec{v}}{dt} \cdot \vec{v} = \dfrac{1}{2}\dfrac{d(v^2)}{dt}$. Substituting,
$$
W_{\text{tot}} = \int_{t_1}^{t_2} \frac{1}{2}m\,\frac{d(v^2)}{dt}\,dt = \frac{1}{2}m v_2^2 - \frac{1}{2}m v_1^2 ,
$$
which is the stated equality.
:::

The theorem turns a question about forces and distances into a single scalar equation, with no components and no vectors to resolve. A car of mass $1200\,\mathrm{kg}$ traveling at $25\,\mathrm{m/s}$ is brought to rest by a constant braking force of $7.5 \times 10^{3}\,\mathrm{N}$; since the final kinetic energy is zero and the braking force is the only force doing work, $-F\,d = -K_1$, hence
$$
d = \frac{K_1}{F} = \frac{3.75 \times 10^{5}\,\mathrm{J}}{7.5 \times 10^{3}\,\mathrm{N}} = 50\,\mathrm{m} .
$$
::::

:::osservazione{#work-energy-strategy titolo="When the theorem is the convenient tool"}
The equality $W_{\text{tot}} = \Delta K$ contains the speeds and the displacement, and it does not contain the time. A problem that gives a distance and asks for a speed, or gives a speed and asks for a distance, is therefore solved by one scalar equation, whereas Newton's second law would require first the acceleration and then a kinematic relation.

Forces that do no work drop out of the equation altogether, so the normal force on an inclined plane never appears in it.
:::

:::attenzione
A vanishing change in kinetic energy does not mean that no force does work. A crate pushed at constant speed for $5.0\,\mathrm{m}$ along a rough floor by a horizontal force of $80\,\mathrm{N}$ keeps $\Delta K = 0$, while the applied force does $+400\,\mathrm{J}$ and friction does $-400\,\mathrm{J}$. The theorem constrains the *total* work, and the works of the single forces can be large and of opposite sign.
:::

## Using the work-energy theorem

:::esempio{#block-launched-by-a-spring titolo="Block launched by a spring"}
A block of mass $m = 0.50\,\mathrm{kg}$ is pressed against a spring of constant $k = 500\,\mathrm{N/m}$, compressing it by $x = 0.10\,\mathrm{m}$, and is then released on a horizontal frictionless surface. The spring force is the only force doing work, and its work from the compression $x$ to the natural length is
$$
W = \frac{1}{2}k\,x^2 = \frac{1}{2} \cdot 500\,\mathrm{N/m} \cdot (0.10\,\mathrm{m})^2 = 2.5\,\mathrm{J} .
$$
The block starts from rest, hence $\Delta K = \dfrac{1}{2}m v^2$ and the **work-energy theorem** gives
$$
v = \sqrt{\frac{2W}{m}} = \sqrt{\frac{2 \cdot 2.5\,\mathrm{J}}{0.50\,\mathrm{kg}}} = 3.2\,\mathrm{m/s} .
$$
The spring force varies along the motion, so Newton's second law would give a non-constant acceleration and the speed would follow only after an integration of the equation of motion.

::grafico{assi=0 uguale=1 linee="0,0 0,2.6;0,0 7.4,0;0,0.9 0.2,0.9 0.35,1.25 0.6,0.55 0.85,1.25 1.1,0.55 1.35,1.25 1.5,0.9 1.6,0.9" poligoni="1.6,0 2.4,0 2.4,1.7 1.6,1.7" segmenti="3.6,0,3.6,2.4" vettori="1.6,0.9,3.2,0.9,F;1.6,-0.7,3.6,-0.7,x" etichette="3.75,2.2,natural length" xmin=-0.5 xmax=7.6 ymin=-1.5 ymax=3 titolo="The spring is compressed by $x$ and pushes the block with the force $F = kx$ until the free end reaches the natural length, doing the work $\dfrac{1}{2}k\,x^2$"}
:::

:::esempio{#distance-against-friction titolo="Distance traveled against friction"}
The same block of mass $m = 0.50\,\mathrm{kg}$ leaves the spring at $v_1 = 3.2\,\mathrm{m/s}$ and slides onto a horizontal stretch whose coefficient of kinetic friction is $\mu_k = 0.30$. The vertical acceleration is zero, hence the normal force equals the weight and the friction force has the constant magnitude $f = \mu_k m g$, doing the work $-\mu_k m g\,d$ over the distance $d$. The block stops, so $\Delta K = -\dfrac{1}{2}m v_1^2$ and
$$
d = \frac{v_1^2}{2\,\mu_k\,g} = \frac{(3.2\,\mathrm{m/s})^2}{2 \cdot 0.30 \cdot 9.81\,\mathrm{m/s^2}} = 1.7\,\mathrm{m} .
$$
The mass cancels in the final formula, therefore two blocks of different mass launched at the same speed stop at the same place, as long as the coefficient of friction is the same.
:::

:::osservazione{#toward-potential-energy titolo="Towards conservation of energy"}
The work of the weight and the work of a spring force depend on the initial and the final position alone, hence each of them can be written as the decrease of a function of the position, and the work-energy theorem then takes the form of a conservation law. The chapter on potential energy and conservation of energy carries out this step.
:::
