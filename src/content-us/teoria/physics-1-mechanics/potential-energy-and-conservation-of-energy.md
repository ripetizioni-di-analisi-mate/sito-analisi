---
titolo: Potential energy and conservation of energy
sommario: How the work of a conservative force is stored as potential energy, how the mechanical energy of a body is conserved when no other force does work, how friction and the other nonconservative forces change the energy balance, and how a potential energy curve gives the force, the turning points and the positions of equilibrium.
---

## Conservative forces and potential energy

The work-energy theorem relates the total work done on a body to the change of its kinetic energy. For some forces the work turns out to depend only on the initial and the final position, and that property allows the work to be recorded once and for all as a function of position.

:::definizione{#conservative-force titolo="Conservative force"}
A force acting on a body is **conservative** when the work it does on the body during a displacement from a position $1$ to a position $2$ is the same for every path joining the two positions. A force that does not have this property is called **nonconservative**.

The weight of a body near the surface of the Earth, the force of an ideal spring and the gravitational attraction between two bodies are conservative. Kinetic friction and the resistance of a fluid are nonconservative, since the work they do grows with the length of the path travelled.

::grafico{punti="0,0,pieno,A;4,3,pieno,B" linee="0,0 4,3;0,0 4,0 4,3" xmin=-0.9 xmax=5.2 ymin=-0.9 ymax=4 uguale=1 nomi="x,y" titolo="Two paths joining $A$ and $B$. A conservative force does the same work along both; for the weight that work is $mg\,(y_A - y_B)$, which depends on the two heights alone"}
:::

::::teorema{#closed-path-work titolo="Work of a conservative force around a closed path"}
Let $\vec{F}$ be a force acting on a body. The work of $\vec{F}$ is the same along every path joining two positions *if and only if* the work of $\vec{F}$ is zero along every closed path.

:::dimostrazione
Let $\gamma_1$ and $\gamma_2$ be two paths from a position $1$ to a position $2$, and let $W_1$ and $W_2$ be the works of $\vec{F}$ along them. Travelling a path in the opposite sense reverses every displacement element $d\vec{s}$, hence it reverses the sign of every contribution $\vec{F} \cdot d\vec{s}$ and the work changes sign. The closed path obtained by going from $1$ to $2$ along $\gamma_1$ and returning along $\gamma_2$ therefore has work
$$
W_{\text{closed}} = W_1 - W_2 .
$$
If the work around every closed path vanishes, then $W_1 = W_2$ for every pair of paths, so the work is path independent. Conversely, if the work is path independent, then $W_1 - W_2 = 0$ for every closed path, and the work around a closed path vanishes.
:::

The theorem gives the test that is actually used on a force, since a complete turn is enough to decide. A body carried once around a closed circuit on a frictionless track returns with the same speed, while the same circuit travelled on a rough track costs work at every point, and the body returns slower.
::::

:::definizione{#potential-energy titolo="Potential energy"}
Let $\vec{F}$ be a conservative force. A **potential energy** of $\vec{F}$ is a function $U$ of the position of the body such that the work of $\vec{F}$ during any displacement from a position $1$ to a position $2$ satisfies
$$
W = U_1 - U_2 = -\,\Delta U .
$$
The potential energy is measured in joules, since it is equal to a work.

Only differences of $U$ appear in the relation, therefore adding the same constant to $U$ at every position leaves every work unchanged. The constant is fixed by choosing a **reference position** at which $U$ is declared to be zero, and the choice is free.
:::

:::osservazione{#why-potential-energy titolo="What the potential energy is used for"}
Computing a work means computing an integral along the path, while $U_1 - U_2$ is a difference of two numbers. Once the function $U$ of a conservative force is known, every work done by that force is read off from the initial and the final position, and the path is not needed.

The sign convention is chosen so that $U$ decreases exactly when the force does positive work. A body released in free fall loses potential energy while the weight does positive work on it.
:::

## Gravitational potential energy near the Earth's surface

::::teorema{#gravitational-potential-energy titolo="Gravitational potential energy"}
Let a body of mass $m$ move near the surface of the Earth, where the weight has constant magnitude $mg$ and points downwards, and let $y$ be the height measured upwards from a chosen level. Then the weight is conservative and the function
$$
U(y) = m g y
$$
is a potential energy of the weight, with the reference level $y = 0$.

:::dimostrazione
Take the $y$ axis vertical and directed upwards, so that the weight is $\vec{w} = -mg\,\hat{\jmath}$. A displacement element has the form $d\vec{s} = dx\,\hat{\imath} + dy\,\hat{\jmath}$, hence
$$
\vec{w} \cdot d\vec{s} = -mg\,dy .
$$
Integrating along any path from a point at height $y_1$ to a point at height $y_2$,
$$
W = \int_{y_1}^{y_2} (-mg)\,dy = -mg\,(y_2 - y_1) = mg y_1 - mg y_2 .
$$
Only the two heights appear in the result, therefore the work is path independent and the weight is conservative. The last expression is $U_1 - U_2$ with $U(y) = mgy$.
:::

The horizontal part of the displacement contributes nothing, since the weight is perpendicular to it. For this reason the work of the weight on a body that descends a drop $h$ is $mgh$ whether the body falls vertically, slides down a ramp or runs along a curved track.

::grafico{assi=0 uguale=1 poligoni="1,0 7,0 7,3.5" linee="0,0 9.2,0" punti="7,3.5,pieno;1,0,pieno" vettori="4,1.75,4,0.55,w" segmenti="7,3.5,8.6,3.5;8.6,0,8.6,3.5" etichette="8.8,1.6,h;6.4,3.75,A;0.6,-0.45,B" xmin=-0.4 xmax=9.7 ymin=-1 ymax=4.3 titolo="The weight does the work $mgh$ from $A$ to $B$ for every shape of the ramp, since only the drop $h$ enters the result"}
::::

:::esempio{#lifting-a-book titolo="Raising and lowering a body"}
A book of mass $m = 2.0\,\mathrm{kg}$ is raised by $h = 1.5\,\mathrm{m}$. Taking the initial position as the reference level, the potential energy changes by
$$
\Delta U = m g h = 2.0\,\mathrm{kg} \cdot 9.81\,\mathrm{m/s^2} \cdot 1.5\,\mathrm{m} = 29\,\mathrm{J} ,
$$
and the weight does the work $-29\,\mathrm{J}$, since $U$ has increased.

Choosing the floor of the room as the reference level instead gives different values of $U_1$ and $U_2$, and the same difference $\Delta U$. The height of the reference level cancels in the subtraction, therefore no physical conclusion depends on it.
:::

## Elastic potential energy

:::teorema{#hookes-law titolo="Hooke's law"}
Let a spring of negligible mass be stretched or compressed by the amount $x$ from its natural length, with the $x$ axis along the spring and the origin at the free end of the unstressed spring. Within the elastic range of the material the force exerted by the spring on the body attached to it has the component
$$
F_x = -k x ,
$$
where the **spring constant** $k > 0$ is measured in $\mathrm{N/m}$ and depends on the spring alone.

The relation is an experimental law, and the minus sign states that the force opposes the deformation. A spring with $k = 250\,\mathrm{N/m}$ stretched by $0.12\,\mathrm{m}$ pulls the body back with the force $30\,\mathrm{N}$.
:::

::::teorema{#elastic-potential-energy titolo="Elastic potential energy"}
Let a spring obey Hooke's law with constant $k$, and let $x$ be the deformation from the natural length. Then the elastic force is conservative and the function
$$
U(x) = \frac{1}{2} k x^2
$$
is a potential energy of the elastic force, with the reference position at the natural length.

:::dimostrazione
The motion takes place along the axis of the spring, so a displacement element is $d\vec{s} = dx\,\hat{\imath}$ and the work of the elastic force from $x_1$ to $x_2$ is
$$
W = \int_{x_1}^{x_2} (-kx)\,dx = -\frac{1}{2}k x_2^2 + \frac{1}{2} k x_1^2 .
$$
The result depends only on the initial and the final deformation, hence the elastic force is conservative, and the two terms are $U_1 - U_2$ with $U(x) = \dfrac{1}{2}kx^2$.
:::

The potential energy is positive for a stretched spring and for a compressed one, since $x$ appears squared. A spring therefore stores energy in both cases, and that stored energy is what launches a body when the spring is released.

::grafico{f="2*x" area="2*x;0;0;2" punti="2,4,pieno" xmin=-0.6 xmax=3.2 ymin=-0.8 ymax=6.4 nomi="x,F" titolo="The force needed to hold the spring deformed by $x$ has magnitude $kx$, therefore the work spent in deforming it from $0$ to $x$ is the area of the triangle, $\dfrac{1}{2}kx^2$ (drawn for $k = 2\,\mathrm{N/m}$)"}
::::

:::esempio{#spring-energy-example titolo="Energy stored in a compressed spring"}
A spring of constant $k = 250\,\mathrm{N/m}$ is compressed by $x = 0.12\,\mathrm{m}$. The energy stored is
$$
U = \frac{1}{2} \cdot 250\,\mathrm{N/m} \cdot (0.12\,\mathrm{m})^2 = 1.8\,\mathrm{J} .
$$
Compressing the same spring by $0.24\,\mathrm{m}$ stores $7.2\,\mathrm{J}$, which is four times as much, because the energy grows with the square of the deformation.
:::

## Conservation of mechanical energy

:::definizione{#mechanical-energy titolo="Mechanical energy"}
Let a body of mass $m$ have speed $v$ and let $U$ be the total potential energy of the conservative forces acting on it. The **mechanical energy** of the body is
$$
E = K + U = \frac{1}{2} m v^2 + U .
$$
The kinetic energy is never negative, while the potential energy takes the sign fixed by the reference position, therefore $E$ can be positive, zero or negative.
:::

:::richiamo{titolo="Work-energy theorem"}
If the total work done on a body of mass $m$ by all the forces acting on it during a displacement is $W_{\text{tot}}$, then
$$
W_{\text{tot}} = \Delta K = \frac{1}{2}m v_2^2 - \frac{1}{2}m v_1^2 .
$$
The theorem is established in the chapter on work and kinetic energy.
:::

::::teorema{#conservation-of-mechanical-energy titolo="Conservation of mechanical energy"}
Let a body move under forces that satisfy the following conditions:

$$
\begin{cases}
\text{every force that does work on the body is conservative} \\[4pt]
\text{the remaining forces are perpendicular to the displacement at every instant}
\end{cases}
$$

Then the mechanical energy keeps the same value throughout the motion:
$$
\frac{1}{2}m v_1^2 + U_1 = \frac{1}{2}m v_2^2 + U_2 .
$$

:::dimostrazione
A force perpendicular to the displacement does no work, hence the total work reduces to the work of the conservative forces, and by the definition of potential energy
$$
W_{\text{tot}} = -\,\Delta U .
$$
The work-energy theorem gives $W_{\text{tot}} = \Delta K$, therefore $\Delta K = -\Delta U$, that is $\Delta K + \Delta U = 0$. The quantity $K + U$ has zero change between any two positions of the motion, so it is constant.
:::

The second hypothesis is what admits the normal force of a track and the tension of a string into the problem, because both stay perpendicular to the velocity, hence both do no work and neither needs a potential energy. The conservation law then connects speed and position directly, without the acceleration and without the time.

::grafico{f="0.15*(x-5)^2" punti="0,3.75,pieno;5,0,pieno;8,1.35,pieno" xmin=-0.6 xmax=10.6 ymin=-0.7 ymax=4.6 nomi="x,y" titolo="Profile of a frictionless track. The speed at each point is fixed by the height alone, since $\dfrac{1}{2}mv^2 + mgy$ has the same value at every point"}
::::

:::esempio{#speed-from-height titolo="Speed at the bottom of a frictionless track"}
A body is released from rest at the height $h = 3.0\,\mathrm{m}$ above the lowest point of a frictionless track. Taking the lowest point as the reference level,
$$
0 + mgh = \frac{1}{2}mv^2 + 0
\quad\Longrightarrow\quad
v = \sqrt{2gh} = \sqrt{2 \cdot 9.81\,\mathrm{m/s^2} \cdot 3.0\,\mathrm{m}} = 7.7\,\mathrm{m/s} .
$$
The mass cancels, therefore the speed at the bottom is the same for every body released from that height. The shape of the track does not appear either, since the normal force does no work and the work of the weight depends only on the drop.
:::

:::attenzione
Mechanical energy is conserved *only* under the hypotheses of the conservation theorem. A block that slides $2.0\,\mathrm{m}$ along a rough horizontal floor and comes to rest had kinetic energy at the start and has none at the end, while its potential energy did not change, hence $E$ decreased.

A body that is pushed by a hand is a second case in which the hypotheses are not satisfied, since the push is a force that does work and has no potential energy. The energy equation with nonconservative forces covers both cases.
:::

## Nonconservative forces and the energy equation

:::definizione{#nonconservative-force titolo="Nonconservative force"}
A force is **nonconservative** when the work it does between two positions depends on the path followed. No potential energy can be assigned to such a force, since a function of position alone could not reproduce two different works between the same two positions.

Kinetic friction is the standard example. A block dragged along a floor against a friction force of constant magnitude $f_k$ receives the work $-f_k s$, where $s$ is the length of the path travelled, therefore a longer path costs more, and a round trip costs twice the one-way value instead of returning zero.
:::

::::teorema{#energy-equation titolo="Energy equation with nonconservative forces"}
Let a body move under conservative forces with total potential energy $U$ and under nonconservative forces whose total work during the displacement is $W_{\text{nc}}$. Then
$$
W_{\text{nc}} = \Delta K + \Delta U = E_2 - E_1 .
$$

:::dimostrazione
The total work splits into the work of the conservative forces and the work of the nonconservative ones,
$$
W_{\text{tot}} = W_{\text{c}} + W_{\text{nc}} ,
$$
and by the definition of potential energy $W_{\text{c}} = -\Delta U$. The work-energy theorem gives $W_{\text{tot}} = \Delta K$, hence
$$
\Delta K = -\Delta U + W_{\text{nc}} ,
$$
and moving $\Delta U$ to the left side gives the stated relation.
:::

The relation contains the conservation law as the particular case $W_{\text{nc}} = 0$. The work of friction is negative, so friction lowers the mechanical energy; the work of a motor or of a hand pushing in the sense of the motion is positive, so it raises the mechanical energy.

::grafico{f="20-4*x" punti="0,20,pieno;5,0,pieno" xmin=-0.5 xmax=5.4 ymin=-1.4 ymax=22 nomi="x,K" titolo="Kinetic energy of a block that slides on a rough horizontal floor with $K_0 = 20\,\mathrm{J}$ and $f_k = 4\,\mathrm{N}$, where friction takes $f_k$ per unit length, hence $K$ falls linearly and the block stops after $5.0\,\mathrm{m}$"}
::::

:::esempio{#sliding-with-friction titolo="Block stopped by friction"}
A block of mass $m = 3.0\,\mathrm{kg}$ slides along a horizontal floor with the initial speed $v_0 = 5.0\,\mathrm{m/s}$ and stops after a distance $d$. The coefficient of kinetic friction is $\mu_k = 0.25$, hence $f_k = \mu_k m g$ and the energy equation with $\Delta U = 0$ gives
$$
-\mu_k m g\,d = 0 - \frac{1}{2} m v_0^2
\quad\Longrightarrow\quad
d = \frac{v_0^2}{2 \mu_k g} = \frac{(5.0\,\mathrm{m/s})^2}{2 \cdot 0.25 \cdot 9.81\,\mathrm{m/s^2}} = 5.1\,\mathrm{m} .
$$
The mass cancels, therefore the stopping distance depends on the initial speed and on the coefficient of friction alone.
:::

:::osservazione{#thermal-energy titolo="Where the energy goes"}
The mechanical energy lost to friction does not disappear. The two surfaces that rub against each other warm up, and the amount $f_k s$ appears as thermal energy of the block and of the floor. Counting that contribution as well, the total energy of the system is conserved in every process, and the conservation of mechanical energy is the special case in which no energy crosses over to the thermal form.
:::

## The force derived from the potential energy

The relation $W = -\Delta U$ produces the work from the potential energy. Reading it over an infinitesimal displacement produces the force itself.

:::richiamo{titolo="Derivative and antiderivative"}
If $f$ is continuous and $F(x) = \displaystyle\int_{a}^{x} f(t)\,dt$, then $F$ is differentiable and $F'(x) = f(x)$. The rules for differentiating powers and the fundamental theorem of calculus are established in the chapter on derivatives and in the chapter on integrals of a first calculus course.
:::

::::teorema{#force-from-potential-energy titolo="Force from the potential energy"}
Let a body move along the $x$ axis under a conservative force with potential energy $U(x)$, with $U$ differentiable. Then the component of the force along the axis is
$$
F_x = -\frac{dU}{dx} .
$$

:::dimostrazione
By the definition of potential energy, for every pair of positions
$$
U(x) - U(x_0) = -\int_{x_0}^{x} F_x(s)\,ds .
$$
The right side is an antiderivative of $-F_x$, hence differentiating both sides with respect to $x$ gives $\dfrac{dU}{dx} = -F_x$, which is the stated relation.
:::

The relation turns a single function into the whole dynamics of the motion along a line. For $U(y) = mgy$ it returns $F_y = -mg$, the weight; for $U(x) = \dfrac{1}{2}kx^2$ it returns $F_x = -kx$, Hooke's law. Where $U$ decreases the derivative is negative and the force is positive, so the force always points towards the positions of lower potential energy.

::grafico{f="x^3-3*x;3-3*x^2" punti="-1,2,pieno;1,-2,pieno" etichette="-1.45,3.2,U;0.35,3.6,Fx" xmin=-2.5 xmax=2.5 ymin=-6.5 ymax=6.5 titolo="$U(x) = x^3 - 3x$ in joules, with $x$ in meters, and the force $F_x = -\dfrac{dU}{dx} = 3 - 3x^2$ in newtons (dashed): the force vanishes at the stationary points $x = \pm 1\,\mathrm{m}$ of $U$"}
::::

:::osservazione{#three-dimensional-case titolo="Motion in space"}
For a body that moves in space the same reading of $W = -\Delta U$ along each axis separately gives the three components
$$
F_x = -\frac{\partial U}{\partial x},
\qquad
F_y = -\frac{\partial U}{\partial y},
\qquad
F_z = -\frac{\partial U}{\partial z} ,
$$
where each partial derivative is taken with the other two coordinates held fixed. The vector built from these three components is written $\vec{F} = -\vec{\nabla} U$ and is studied in the chapter on partial derivatives of a multivariable calculus course.
:::

## Energy diagrams, turning points and equilibrium

:::definizione{#turning-point titolo="Turning point"}
Let a body of mass $m$ move along the $x$ axis with mechanical energy $E$ and potential energy $U(x)$. Since $K = E - U(x)$ and the kinetic energy is never negative, the motion takes place only at the positions where
$$
U(x) \le E .
$$
A position at which $U(x) = E$ is a **turning point**. There the kinetic energy vanishes, hence the speed is zero, and if the force at that position is not zero the body reverses the sense of its motion.

The speed at a generic position follows from the same relation,
$$
v = \sqrt{\frac{2\,\bigl(E - U(x)\bigr)}{m}} ,
$$
hence the speed is largest where $U$ is smallest.

::grafico{f="2*x^2;8" punti="-2,8,pieno;2,8,pieno" etichette="2.45,8.5,E" xmin=-3.2 xmax=3.2 ymin=-1.2 ymax=12 nomi="x,U" titolo="Energy diagram of a body attached to a spring with $k = 4\,\mathrm{N/m}$. With $E = 8\,\mathrm{J}$ the motion is confined to $-2\,\mathrm{m} \le x \le 2\,\mathrm{m}$, and the turning points are the positions where $U = E$"}
:::

:::definizione{#equilibrium titolo="Stable, unstable and neutral equilibrium"}
A position $x_0$ is a position of **equilibrium** when the force vanishes there, that is when $\dfrac{dU}{dx}(x_0) = 0$. The equilibrium is classified by the behaviour of $U$ near $x_0$:

- $U$ has a minimum at $x_0$, hence $\dfrac{d^2U}{dx^2}(x_0) > 0$, and the equilibrium is **stable**, since a small displacement produces a force directed back towards $x_0$;
- $U$ has a maximum at $x_0$, hence $\dfrac{d^2U}{dx^2}(x_0) < 0$, and the equilibrium is **unstable**, since a small displacement produces a force directed away from $x_0$;
- $U$ is constant on an interval containing $x_0$, and the equilibrium is **neutral**, since the force vanishes on the whole interval and the body stays wherever it is placed.

::grafico{f="(x^2-1)^2;0.25" punti="-1,0,pieno;1,0,pieno;0,1,pieno" etichette="1.62,0.45,E" xmin=-2.1 xmax=2.1 ymin=-0.6 ymax=3.2 nomi="x,U" titolo="$U(x) = (x^2 - 1)^2$ in joules, with $x$ in meters: the two minima at $x = \pm 1\,\mathrm{m}$ are positions of stable equilibrium and the maximum at $x = 0$ is unstable"}
:::

:::esempio{#double-well titolo="Reading a potential energy curve"}
For $U(x) = (x^2 - 1)^2$, with $U$ in joules and $x$ in meters,
$$
\frac{dU}{dx} = 4x\,(x^2 - 1) ,
\qquad
\frac{d^2U}{dx^2} = 12x^2 - 4 ,
$$
hence the force vanishes at $x = -1\,\mathrm{m}$, $x = 0$ and $x = 1\,\mathrm{m}$. The second derivative is $8\,\mathrm{N/m}$ at $x = \pm 1\,\mathrm{m}$ and $-4\,\mathrm{N/m}$ at $x = 0$, therefore the two outer positions are **stable** and the central one is **unstable**.

A body released from rest at $x = 1.5\,\mathrm{m}$ has $E = U(1.5\,\mathrm{m}) = 1.5625\,\mathrm{J}$, which exceeds the value $U(0) = 1\,\mathrm{J}$ of the central maximum, therefore the body crosses $x = 0$ and reaches the other well. A body released from rest at $x = 1.2\,\mathrm{m}$ has $E = 0.1936\,\mathrm{J}$, which is smaller than $1\,\mathrm{J}$, hence it oscillates inside the right well between its two turning points and never reaches the left one.
:::

## Several conservative forces acting together

::::teorema{#additive-potential-energy titolo="Potential energy of several conservative forces"}
Let the conservative forces $\vec{F}_1, \dots, \vec{F}_n$ act on a body, with potential energies $U_1, \dots, U_n$. Then their resultant is conservative and the function
$$
U = U_1 + \dots + U_n
$$
is a potential energy of the resultant.

:::dimostrazione
The work of the resultant during a displacement is the sum of the works of the single forces, hence
$$
W = \sum_{i=1}^{n} \bigl(U_{i,1} - U_{i,2}\bigr) = \left(\sum_{i=1}^{n} U_{i,1}\right) - \left(\sum_{i=1}^{n} U_{i,2}\right) = U_1^{\text{tot}} - U_2^{\text{tot}} ,
$$
where $U^{\text{tot}}$ denotes the sum of the $n$ potential energies evaluated at the same position. The work is therefore a difference of values of a function of position, which is the definition required.
:::

A body attached to a spring and subject to its own weight is the case that occurs most often, and the two potential energies are added.

::grafico{f="2*x^2-4*x" punti="1,-2,pieno;2,0,pieno" xmin=-0.7 xmax=2.9 ymin=-3 ymax=4.2 nomi="y,U" titolo="$U(y) = \dfrac{1}{2}ky^2 - mgy$ for $k = 4\,\mathrm{N/m}$ and $mg = 4\,\mathrm{N}$, with $y$ measured downwards from the unstretched position: the minimum is at the equilibrium position $y = \dfrac{mg}{k}$, and a block released from rest at $y = 0$ comes back to rest at $y = \dfrac{2mg}{k}$"}
::::

:::esempio{#vertical-spring titolo="Block hanging on a vertical spring"}
A block of mass $m = 0.50\,\mathrm{kg}$ hangs from a spring of constant $k = 20\,\mathrm{N/m}$. Let $y$ be measured downwards from the position of the free end of the unstretched spring, so that the elastic potential energy is $\dfrac{1}{2}ky^2$ and the gravitational one is $-mgy$. The total potential energy is
$$
U(y) = \frac{1}{2}k y^2 - m g y ,
\qquad
\frac{dU}{dy} = k y - m g .
$$
The derivative vanishes at
$$
y_0 = \frac{m g}{k} = \frac{0.50\,\mathrm{kg} \cdot 9.81\,\mathrm{m/s^2}}{20\,\mathrm{N/m}} = 0.245\,\mathrm{m} ,
$$
and the second derivative is $k > 0$, hence that position is the **stable equilibrium** of the block.

Releasing the block from rest at $y = 0$ gives $E = 0$, therefore its turning points are the solutions of $U(y) = 0$, namely $y = 0$ and
$$
y = \frac{2 m g}{k} = 0.491\,\mathrm{m} .
$$
The block oscillates between those two positions, and it passes through the equilibrium position with its largest speed.
:::

:::osservazione{#harmonic-form titolo="The shape of the curve near a minimum"}
Writing $U(y) = \dfrac{1}{2}k y^2 - m g y$ in terms of the displacement $u = y - y_0$ from the equilibrium position gives
$$
U = \frac{1}{2} k u^2 - \frac{m^2 g^2}{2k} ,
$$
hence the total potential energy has the same quadratic form as that of a spring alone, apart from an additive constant. The force is therefore $F_u = -k u$, and the motion about the equilibrium position is the simple harmonic motion studied in the chapter on oscillations, waves and sound. The same quadratic approximation holds near any minimum of a potential energy curve, which is why small oscillations about a stable equilibrium are harmonic.
:::
