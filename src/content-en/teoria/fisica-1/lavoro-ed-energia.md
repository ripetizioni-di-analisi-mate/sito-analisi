---
titolo: Work and energy
sommario: How to compute the work of a constant or variable force, what power measures, how the work-energy theorem and the conservation of mechanical energy give speeds without solving the equations of motion, and how a potential energy curve describes motion and equilibrium.
---

## Work of a constant force

Throughout this topic the body is treated as a point particle and the reference frame is inertial.

:::richiamo{titolo="Dot product"}
For two vectors $\vec{a}$ and $\vec{b}$ forming the angle $\theta \in [0, \pi]$ we have $\vec{a} \cdot \vec{b} = a\,b\cos\theta = a_x b_x + a_y b_y + a_z b_z$. See the topic on vectors in Linear algebra and the topic on physical quantities and vectors.
:::

:::definizione{#lavoro-forza-costante titolo="Work of a constant force"}
Consider a point particle that undergoes a straight-line displacement $\vec{s}$ while a constant force $\vec{F}$ acts on it. The **work** done by the force is the scalar
$$
L = \vec{F} \cdot \vec{s} = F\, s \cos\theta ,
$$
where $\theta$ is the angle between $\vec{F}$ and $\vec{s}$. In the International System work is measured in **joules**, $1\,\mathrm{J} = 1\,\mathrm{N \cdot m}$. In Cartesian components $L = F_x\,\Delta x + F_y\,\Delta y + F_z\,\Delta z$, where $\Delta x$, $\Delta y$, $\Delta z$ are the components of the displacement.

The work depends only on the component $F\cos\theta$ of the force parallel to the displacement, because the perpendicular component has zero dot product with $\vec{s}$. For example, a cart pulled for $10\,\mathrm{m}$ on a horizontal plane with a force of $50\,\mathrm{N}$ inclined at $30^\circ$ receives from the force the work $L = 50 \cdot 10 \cdot \cos 30^\circ\,\mathrm{J} \approx 433\,\mathrm{J}$.

::grafico{assi=0 vettori="0,0,6,0,s;0,0,3.46,2,F" segmenti="3.46,0,3.46,2" etichette="0.75,0.18,θ;1.7,-0.4,F cos θ" xmin=-0.6 xmax=6.6 ymin=-0.9 ymax=2.6 uguale=1 titolo="A constant force $\vec{F}$ inclined at $\theta$ to the displacement $\vec{s}$ does the work $F s \cos\theta$, which depends only on the projection of $\vec{F}$ onto the direction of $\vec{s}$"}

:::

:::osservazione{#segno-del-lavoro titolo="Sign of the work"}
The sign of the work is the sign of $\cos\theta$.

- If $0 \leq \theta < \dfrac{\pi}{2}$, the work is positive and the force is called **driving**; for example, the weight does positive work on a body moving down.
- If $\theta = \dfrac{\pi}{2}$, the work is zero; the normal force of a plane on which the body slides and the centripetal force in uniform circular motion are perpendicular to the displacement and do *not* do work.
- If $\dfrac{\pi}{2} < \theta \leq \pi$, the work is negative and the force is called **resistive**; kinetic friction, opposite to the displacement, has $\theta = \pi$ and does the work $L = -f\,s$.

Therefore a force can act on a moving body without doing work, when it is perpendicular to the displacement.
:::

:::teorema{#lavoro-della-risultante titolo="Work of the net force"}
If the constant forces $\vec{F}_1, \dots, \vec{F}_n$ act on the point particle, with net force $\vec{R} = \vec{F}_1 + \dots + \vec{F}_n$, the total work during the displacement $\vec{s}$ is
$$
L_{\text{tot}} = L_1 + \dots + L_n = \vec{R} \cdot \vec{s} .
$$
The equality follows from the distributive property of the dot product over addition. Therefore the total work can be computed in two equivalent ways, by adding the works of the individual forces or by computing the work of the net force; the first is more convenient when the contribution of each force is also required. The total work is the quantity that appears in the work-energy theorem.
:::

## Work of a variable force

:::richiamo{titolo="Definite integral"}
For a function $f$ continuous on $[a, b]$, the integral $\displaystyle\int_a^b f(x)\,dx$ is the limit of the sums $\sum_i f(x_i)\,\Delta x_i$ as the maximum width of the subintervals tends to zero, and it measures the signed area between the graph of $f$ and the $x$-axis. See the topic on integrals in Mathematical Analysis 1.
:::

:::definizione{#lavoro-forza-variabile titolo="Work of a variable force"}
Consider a point particle moving along the $x$-axis from $x_A$ to $x_B$, subject to a force whose component $F_x(x)$ depends on the position. The interval is divided into pieces of width $\Delta x_i$ so small that on each of them the force can be considered constant; the work on the $i$-th piece is approximately $F_x(x_i)\,\Delta x_i$, and the sum of these contributions tends to the integral as the pieces shrink. We therefore set
$$
L = \int_{x_A}^{x_B} F_x(x)\, dx .
$$
The work is the **signed area** under the graph of $F_x$ as a function of $x$, and for a constant force the definition gives back $L = F_x\,(x_B - x_A)$. For example, with $F_x(x) = 4 + 2x$, where $x$ is in meters and $F_x$ in newtons, the work between $x = 0$ and $x = 3\,\mathrm{m}$ is $\left[ 4x + x^2 \right]_0^3 = 21\,\mathrm{J}$.

::grafico{f="4+2*x" area="4+2*x;0;0;3" segmenti="3,0,3,10" xmin=-0.6 xmax=4.2 ymin=-1 ymax=12 nomi="x,F" titolo="The work of $F_x(x) = 4 + 2x$ between $x = 0$ and $x = 3$ is the area of the shaded trapezoid, $21\,\mathrm{J}$"}

:::

:::osservazione{#lavoro-lungo-una-curva titolo="Work along a curved path"}
If the particle travels along a curved path $\gamma$ from $A$ to $B$ and the force depends on the position, the work is
$$
L = \int_\gamma \vec{F} \cdot d\vec{r} ,
$$
where $d\vec{r}$ is the infinitesimal displacement along the path. The definition repeats the previous reasoning, adding the contributions $\vec{F} \cdot \Delta\vec{r}$ of the small pieces into which the curve is divided. It is a line integral, for which see the topic on curves and line integrals in Mathematical Analysis 2. In problems of particle mechanics the path is often straight or the force is conservative, and the computation reduces to an integral in one variable or to a difference of potential energies.
:::

::::teorema{#lavoro-forza-elastica titolo="Work of the elastic force"}
Consider an ideal spring with spring constant $k$, with one end fixed and the other attached to a body moving along the $x$-axis, with the origin at the rest position; by Hooke's law the elastic force is $F_x = -kx$. When the deformation goes from $x_A$ to $x_B$ the elastic force does the work
$$
L = \frac{1}{2} k x_A^2 - \frac{1}{2} k x_B^2 .
$$
The work is negative when the deformation increases in absolute value, because the force opposes the displacement, and positive when the spring returns toward its rest length. For a spring with $k = 200\,\mathrm{N/m}$ that returns to rest from an extension of $0.10\,\mathrm{m}$ we have $L = \dfrac{1}{2} \cdot 200 \cdot 0.10^2\,\mathrm{J} = 1.0\,\mathrm{J}$.

::grafico{f="-2*x" area="0;-2*x;0;2" segmenti="2,0,2,-4" xmin=-2.6 xmax=2.8 ymin=-5 ymax=5 nomi="x,F" etichette="0.9,-0.9,area" titolo="The elastic force $F_x = -kx$: when the spring stretches from $0$ to $x$ the work is the signed area of the triangle, $-\dfrac{1}{2} k x^2$"}

:::dimostrazione
By the definition of the work of a variable force,
$$
L = \int_{x_A}^{x_B} (-kx)\,dx = \left[ -\frac{1}{2} k x^2 \right]_{x_A}^{x_B} = \frac{1}{2} k x_A^2 - \frac{1}{2} k x_B^2 .
$$
The result depends only on the initial and final deformations.
:::
::::

## Power

:::definizione{#potenza titolo="Power"}
If a force does the work $L$ in the time interval $\Delta t$, the **average power** is $P_m = \dfrac{L}{\Delta t}$; the **instantaneous power** is the derivative of the work with respect to time,
$$
P = \frac{dL}{dt} .
$$
The unit is the watt, $1\,\mathrm{W} = 1\,\mathrm{J/s}$. Power measures the rate at which a force does work; two motors that lift the same load to the same height do the same work, and the more powerful one takes less time. From the definition it follows that the product of a power and a time is an energy, and for this reason electrical energy is also measured in kilowatt-hours, $1\,\mathrm{kWh} = 1000\,\mathrm{W} \cdot 3600\,\mathrm{s} = 3.6 \cdot 10^6\,\mathrm{J}$.
:::

:::teorema{#potenza-e-velocita titolo="Power and velocity"}
If a force $\vec{F}$ acts on a point particle with velocity $\vec{v}$, the instantaneous power of the force is
$$
P = \vec{F} \cdot \vec{v} = F\,v\cos\theta .
$$
Indeed, in the interval $dt$ the displacement is $d\vec{r} = \vec{v}\,dt$, so the work is $dL = \vec{F} \cdot \vec{v}\,dt$, and dividing by $dt$ gives the formula. For a vehicle moving at constant velocity the driving force balances the resistive forces, so the power required from the engine is the product of the resistive force and the speed. A car traveling at $25\,\mathrm{m/s}$ against a resistive force of $600\,\mathrm{N}$ requires $P = 600 \cdot 25\,\mathrm{W} = 15\,\mathrm{kW}$.
:::

:::definizione{#rendimento titolo="Efficiency of a motor"}
A motor takes in the power $P_{\text{in}}$ (electrical or chemical) and delivers only a part $P_{\text{u}}$ of it as useful work, because the rest is lost to friction and heat. The **efficiency** is the ratio
$$
\eta = \frac{P_{\text{u}}}{P_{\text{in}}} , \qquad 0 < \eta < 1 .
$$
A motor with $\eta = 0.80$ that must deliver $4.0\,\mathrm{kW}$ takes in $\dfrac{4.0}{0.80}\,\mathrm{kW} = 5.0\,\mathrm{kW}$. The efficiency of heat engines has the same form; see the topic on the second law of thermodynamics.
:::

## Kinetic energy and the work-energy theorem

:::definizione{#energia-cinetica titolo="Kinetic energy"}
The **kinetic energy** of a point particle of mass $m$ with velocity $\vec{v}$ is
$$
K = \frac{1}{2} m v^2 .
$$
It is a positive or zero scalar, which depends on the magnitude of the velocity and not on its direction, and it is measured in joules, since $1\,\mathrm{kg \cdot m^2/s^2} = 1\,\mathrm{N \cdot m}$. Kinetic energy is proportional to the square of the speed, so doubling the speed quadruples it. A car of $1000\,\mathrm{kg}$ at $20\,\mathrm{m/s}$ has $K = \dfrac{1}{2} \cdot 1000 \cdot 20^2\,\mathrm{J} = 2.0 \cdot 10^5\,\mathrm{J}$.
:::

::::teorema{#teorema-energia-cinetica titolo="Work-energy theorem"}
Consider a point particle of mass $m$ moving from $A$ to $B$ in an inertial reference frame. The total work $L_{\text{tot}}$ done by all the forces acting on it is equal to the change in its kinetic energy:
$$
L_{\text{tot}} = K_B - K_A = \frac{1}{2} m v_B^2 - \frac{1}{2} m v_A^2 .
$$
The theorem links forces to speed without going through acceleration and time, and it is used when the data and the unknowns are speeds and displacements. A positive total work increases the speed, a negative total work decreases it. The theorem also holds with variable forces and curved paths, where Newton's second law would lead to a differential equation.

:::dimostrazione
Let $\vec{R}$ be the net force. In the time interval $dt$ the particle undergoes the displacement $d\vec{r} = \vec{v}\,dt$, and by **Newton's second law** $\vec{R} = m\,\dfrac{d\vec{v}}{dt}$. Hence
$$
\vec{R} \cdot d\vec{r} = m\,\frac{d\vec{v}}{dt} \cdot \vec{v}\,dt .
$$
Since $v^2 = \vec{v} \cdot \vec{v}$, the rule for differentiating a dot product gives $\dfrac{d}{dt}\left( v^2 \right) = 2\,\vec{v} \cdot \dfrac{d\vec{v}}{dt}$, therefore
$$
m\,\frac{d\vec{v}}{dt} \cdot \vec{v} = \frac{d}{dt}\left( \frac{1}{2} m v^2 \right) .
$$
Integrating between the instant $t_A$ at which the particle is at $A$ and the instant $t_B$ at which it is at $B$ we obtain
$$
L_{\text{tot}} = \int_{t_A}^{t_B} \frac{d}{dt}\left( \frac{1}{2} m v^2 \right) dt = \frac{1}{2} m v_B^2 - \frac{1}{2} m v_A^2 ,
$$
where the last equality follows from the fundamental formula of integral calculus.
:::
::::

:::richiamo{titolo="Newton's second law"}
In an inertial reference frame the net force $\vec{R}$ acting on a point particle of mass $m$ satisfies $\vec{R} = m\vec{a} = m\,\dfrac{d\vec{v}}{dt}$. See the topic on Newton's laws and forces.
:::

:::esempio{titolo="Braking distance"}
A car traveling at speed $v_0$ on a horizontal road brakes with locked wheels, and the coefficient of kinetic friction between tires and asphalt is $\mu_d$. The forces acting on the car are the weight, the normal force $N = mg$ and the friction $f = \mu_d\,m g$, opposite to the displacement. The weight and the normal force are perpendicular to the displacement, so the total work over the braking distance $d$ is that of friction, $-\mu_d\,m g\,d$. The **work-energy theorem**, with zero final speed, gives
$$
-\mu_d\, m g\, d = 0 - \frac{1}{2} m v_0^2
\quad\Longrightarrow\quad
d = \frac{v_0^2}{2 \mu_d\, g} .
$$
The mass cancels, and the braking distance is proportional to the square of the initial speed. With $v_0 = 20\,\mathrm{m/s}$ and $\mu_d = 0.50$ we obtain $d = \dfrac{400}{2 \cdot 0.50 \cdot 9.81}\,\mathrm{m} \approx 41\,\mathrm{m}$.
:::

## Conservative forces

:::definizione{#forza-conservativa titolo="Conservative force"}
A force that depends only on position is called **conservative** if the work it does when the point particle moves from $A$ to $B$ depends only on the positions $A$ and $B$, and not on the path followed. Equivalently, a force is conservative if its work along *every* closed path is zero.

The two formulations are equivalent because a closed path through $A$ and $B$ splits into a path $\gamma_1$ from $A$ to $B$ and a path from $B$ to $A$; denoting by $\gamma_2$ this last path traversed from $A$ toward $B$, every displacement changes sign and the work with it, so the work along the closed path is $L_{\gamma_1} - L_{\gamma_2}$. This difference is zero if and only if the works along the two paths from $A$ to $B$ coincide. The weight and the elastic force are conservative; kinetic friction is not.
:::

::::teorema{#lavoro-del-peso titolo="Work of the weight"}
Consider a point particle of mass $m$ near the Earth's surface, where the weight $\vec{P} = -mg\,\hat{\jmath}$ is constant, with the $y$-axis vertical and pointing upward. Along *any* path from a position at height $y_A$ to a position at height $y_B$ the weight does the work
$$
L_P = -mg\,(y_B - y_A) = mg\,(y_A - y_B) .
$$
The work is positive when the body moves down and negative when it moves up, and it depends only on the difference in height; therefore the weight is a **conservative force**. A $20\,\mathrm{kg}$ crate carried from the floor onto a shelf $1.5\,\mathrm{m}$ high, by a ladder or along a ramp, receives from the weight the work $-20 \cdot 9.81 \cdot 1.5\,\mathrm{J} \approx -294\,\mathrm{J}$.

::grafico{assi=0 curve="4*t,3-2*t,0,1;4*t,3-2*t+1.4*sin(pi*t),0,1" segmenti="0,3,4,3;4,3,4,1" punti="0,3,pieno,A;4,1,pieno,B" etichette="4.15,2.1,Δy;1.4,1.75,γ₁;1.6,3.85,γ₂" xmin=-0.6 xmax=5.2 ymin=0.4 ymax=4.5 uguale=1 titolo="Along the paths $\gamma_1$ and $\gamma_2$ from $A$ to $B$ the weight does the same work $-mg\,\Delta y$, with $\Delta y = y_B - y_A$"}

:::dimostrazione
The infinitesimal displacement along the path is $d\vec{r} = dx\,\hat{\imath} + dy\,\hat{\jmath} + dz\,\hat{k}$, so $\vec{P} \cdot d\vec{r} = -mg\,dy$. Only the vertical displacements enter the dot product, therefore adding the contributions along the path we obtain
$$
L_P = \int_\gamma \vec{P} \cdot d\vec{r} = \int_{y_A}^{y_B} (-mg)\,dy = -mg\,(y_B - y_A) .
$$
:::
::::

:::osservazione{#forza-elastica-conservativa titolo="The elastic force is conservative"}
By the theorem on the work of the elastic force, the work $\dfrac{1}{2} k x_A^2 - \dfrac{1}{2} k x_B^2$ depends only on the initial and final deformations, so the elastic force is conservative. In particular, if the spring returns to its starting deformation, the total work is zero even if in the meantime the spring has stretched and shortened several times. The force of universal gravitation is also conservative; see the topic on gravitation.
:::

:::attenzione{#attrito-non-conservativo}
Kinetic friction is *not* a conservative force. A crate of mass $m = 2.0\,\mathrm{kg}$ is dragged on a horizontal floor, with $\mu_d = 0.30$, for $d = 5.0\,\mathrm{m}$ in one direction and then for $5.0\,\mathrm{m}$ in the opposite direction, back to the starting point. Friction has magnitude $\mu_d\,mg$ and is always opposite to the displacement, so it does negative work on both legs:
$$
L_{\text{fr}} = -2\,\mu_d\, m g\, d = -2 \cdot 0.30 \cdot 2.0 \cdot 9.81 \cdot 5.0\,\mathrm{J} \approx -59\,\mathrm{J} .
$$
The path is closed and the work is different from zero. Moreover, the work of friction is proportional to the length of the path, so it depends on the path followed.
:::

## Potential energy

:::definizione{#energia-potenziale titolo="Potential energy"}
Let $\vec{F}$ be a conservative force and let $O$ be an arbitrarily chosen reference position. The **potential energy** associated with $\vec{F}$ at the position $A$ is
$$
U(A) = L_{A \to O} ,
$$
that is, the work the force does when the particle goes from $A$ to the reference position. The definition is well posed because the work of a conservative force does not depend on the path. Going from $A$ to $B$ through $O$ we have $L_{A \to B} = L_{A \to O} + L_{O \to B} = U(A) - U(B)$, so for every pair of positions
$$
L_{A \to B} = U(A) - U(B) = -\Delta U .
$$
Changing the reference position adds a constant to $U$, which does not affect the differences; for this reason only **changes** in potential energy have physical meaning.
:::

:::teorema{#energia-potenziale-gravitazionale titolo="Potential energy of the weight"}
Near the Earth's surface, with the $y$-axis vertical and pointing upward and the reference at height $y = 0$, the potential energy associated with the weight of a body of mass $m$ is
$$
U = m g y .
$$
The formula follows from the work of the weight, since from height $y$ to the reference height the weight does the work $mg\,(y - 0) = mgy$. The zero height is chosen where convenient, for example at ground level or at the lowest point of the path, and $y$ is negative below that level. The formula holds as long as the weight can be considered constant, that is, for differences in height small compared with the Earth's radius; for larger distances see the topic on gravitation.
:::

:::teorema{#energia-potenziale-elastica titolo="Elastic potential energy"}
For an ideal spring of constant $k$, with the reference position at the rest length, the elastic potential energy when the deformation is $x$ is
$$
U = \frac{1}{2} k x^2 .
$$
The formula follows from the work of the elastic force with $x_A = x$ and $x_B = 0$. The elastic potential energy is positive both for a stretched spring and for a compressed spring and grows with the square of the deformation; a spring with $k = 800\,\mathrm{N/m}$ compressed by $0.10\,\mathrm{m}$ has $U = \dfrac{1}{2} \cdot 800 \cdot 0.10^2\,\mathrm{J} = 4.0\,\mathrm{J}$.
:::

::::teorema{#forza-da-energia-potenziale titolo="Force as the derivative of potential energy"}
Consider a point particle moving along the $x$-axis, subject to a conservative force with continuous component $F_x(x)$, and let $U(x)$ be the associated potential energy. Then
$$
F_x(x) = -\frac{dU}{dx} .
$$
The formula makes it possible to obtain the force from the potential energy, and it shows that the force points toward the positions where the potential energy decreases. For $U = mgy$ we obtain $F_y = -mg$, that is, the weight, and for $U = \dfrac{1}{2} k x^2$ we obtain $F_x = -kx$, that is, Hooke's law. In space the relation becomes $\vec{F} = -\nabla U$; for conservative fields see the topic on vector fields in Mathematical Analysis 2.

:::dimostrazione
Let $x_0$ be the reference position. By the definition of potential energy and by the definition of the work of a variable force,
$$
U(x) = L_{x \to x_0} = -\int_{x_0}^{x} F_x(s)\,ds .
$$
Since $F_x$ is continuous, by the **fundamental theorem of calculus** the integral function is differentiable with derivative $F_x(x)$, hence $U'(x) = -F_x(x)$, which is the claim.
:::
::::

:::richiamo{titolo="Fundamental theorem of calculus"}
If $f$ is continuous on an interval $I$ and $x_0 \in I$, the function $G(x) = \displaystyle\int_{x_0}^{x} f(s)\,ds$ is differentiable at every point of $I$ and $G'(x) = f(x)$. See the topic on integrals in Mathematical Analysis 1.
:::

## Conservation of mechanical energy

:::definizione{#energia-meccanica titolo="Mechanical energy"}
The **mechanical energy** of a point particle is the sum of the kinetic energy and of the potential energies associated with the conservative forces acting on it:
$$
E = K + U .
$$
If the weight and an elastic force act, $U = mgy + \dfrac{1}{2} k x^2$. The value of $E$ depends on the reference positions chosen for the potential energies, while its changes do not depend on them.
:::

::::teorema{#conservazione-energia-meccanica titolo="Conservation of mechanical energy"}
Consider a point particle subject to conservative forces and possibly to other forces that do no work, such as the normal force of a fixed smooth surface or the tension of an inextensible string with one fixed end. Then the mechanical energy is conserved during the motion, that is, for every pair of positions $A$ and $B$
$$
K_A + U_A = K_B + U_B .
$$
The theorem gives the speed as a function of position without knowing the shape of the path or the duration of the motion. A body that slides from rest along a smooth track with a drop in height $h$ reaches the bottom with $mgh = \dfrac{1}{2} m v^2$, that is, with $v = \sqrt{2gh}$, whatever the profile of the track; for $h = 5.0\,\mathrm{m}$ we obtain $v \approx 9.9\,\mathrm{m/s}$.

::grafico{assi=0 linee="0.00,5.000 0.25,4.395 0.50,3.828 0.75,3.301 1.00,2.812 1.25,2.363 1.50,1.953 1.75,1.582 2.00,1.250 2.25,0.957 2.50,0.703 2.75,0.488 3.00,0.312 3.25,0.176 3.50,0.078 3.75,0.020 4.00,0.000 6.8,0;-0.4,-0.12 6.8,-0.12" segmenti="-0.25,0,-0.25,5" vettori="5,0,6.4,0,v" punti="0,5,pieno,A;5,0,pieno,B" etichette="-0.55,2.6,h" xmin=-0.9 xmax=7 ymin=-0.6 ymax=5.8 uguale=1 titolo="Along a smooth track the body released from rest at $A$ reaches $B$ with $v = \sqrt{2gh}$, whatever the shape of the profile"}

:::dimostrazione
The forces that do no work do not contribute to the total work, so $L_{\text{tot}}$ coincides with the work $L_c$ of the conservative forces. By the definition of potential energy $L_c = U_A - U_B$, and by the **work-energy theorem** $L_{\text{tot}} = K_B - K_A$. Equating the two expressions we obtain
$$
K_B - K_A = U_A - U_B
\quad\Longrightarrow\quad
K_A + U_A = K_B + U_B .
$$
:::
::::

:::richiamo{titolo="Work-energy theorem"}
For a point particle moving from $A$ to $B$ in an inertial frame, the total work of the forces acting on it is $L_{\text{tot}} = K_B - K_A$.
:::

:::esempio{titolo="Exchange between kinetic and potential energy"}
A body of mass $1.0\,\mathrm{kg}$ falls from rest from the height $h_0 = 5.0\,\mathrm{m}$, with negligible air resistance. The mechanical energy is $E = m g h_0 \approx 49\,\mathrm{J}$ and remains constant. At height $h$ the potential energy is $U = mgh$ and the kinetic energy is $K = E - U = mg\,(h_0 - h)$; hence, as the body moves down, the potential energy is converted into kinetic energy. At the ground $K = 49\,\mathrm{J}$, that is, $v = \sqrt{2 g h_0} \approx 9.9\,\mathrm{m/s}$.

::grafico{f="9.81*x+0*sqrt(x*(5-x));49.05-9.81*x+0*sqrt(x*(5-x));49.05+0*sqrt(x*(5-x))" segmenti="5,0,5,49.05" xmin=-0.5 xmax=6 ymin=-7 ymax=63 nomi="h,E" etichette="3.4,40,U = mgh;0.5,40,K;2.3,54,E = K + U" titolo="Energies as functions of the height $h$ in the fall from $h_0 = 5.0\,\mathrm{m}$: the sum of $K$ and $U$ stays equal to $E \approx 49\,\mathrm{J}$"}

:::

:::esempio{titolo="Speed of a pendulum"}
A simple pendulum of length $\ell$ is released from rest with the string inclined at $\theta_0$ to the vertical. The tension of the string is always perpendicular to the velocity, so it does no work, and the mechanical energy is conserved. Going from the initial position to the lowest point the body drops by the height $\ell\,(1 - \cos\theta_0)$, therefore
$$
mg\,\ell\,(1 - \cos\theta_0) = \frac{1}{2} m v^2
\quad\Longrightarrow\quad
v = \sqrt{2 g \ell\,(1 - \cos\theta_0)} .
$$
For $\ell = 1.0\,\mathrm{m}$ and $\theta_0 = 60^\circ$ we obtain $v = \sqrt{9.81}\,\mathrm{m/s} \approx 3.1\,\mathrm{m/s}$.
:::

:::esempio{titolo="Spring launching a block"}
A block of mass $0.50\,\mathrm{kg}$ rests against a spring with $k = 800\,\mathrm{N/m}$ compressed by $0.10\,\mathrm{m}$, on a smooth horizontal plane, and is released. The weight and the normal force do no work, so the sum of the kinetic energy and the elastic potential energy is conserved. At the start the block is at rest, and when the spring returns to its rest length the elastic potential energy is zero; therefore
$$
\frac{1}{2} k x^2 = \frac{1}{2} m v^2
\quad\Longrightarrow\quad
v = x\sqrt{\frac{k}{m}} = 0.10 \cdot \sqrt{\frac{800}{0.50}}\,\mathrm{m/s} = 4.0\,\mathrm{m/s} .
$$
:::

## Nonconservative forces and the work of friction

::::teorema{#lavoro-forze-non-conservative titolo="Work of nonconservative forces"}
Consider a point particle subject to conservative forces, with total potential energy $U$, and to other forces that together do the work $L_{\text{nc}}$ when the particle goes from $A$ to $B$. Then
$$
L_{\text{nc}} = E_B - E_A = (K_B + U_B) - (K_A + U_A) .
$$
Hence the change in mechanical energy is equal to the work of the nonconservative forces, and the conservation of mechanical energy is the special case $L_{\text{nc}} = 0$. The theorem is used when the work of friction can be computed directly, for example when the friction force has constant magnitude along a stretch of known length.

:::dimostrazione
The total work is the sum of the work $L_c$ of the conservative forces and the work $L_{\text{nc}}$ of the other forces. By the definition of potential energy $L_c = U_A - U_B$, and by the **work-energy theorem** $L_c + L_{\text{nc}} = K_B - K_A$. Substituting $L_c$ we obtain $L_{\text{nc}} = (K_B - K_A) + (U_B - U_A)$, which is the claim.
:::
::::

:::osservazione{#energia-dissipata titolo="Energy dissipated by friction"}
Kinetic friction is always opposite to the velocity of the body relative to the surface, so it does negative work and the mechanical energy **decreases**. If the body slides over a distance $d$ on a fixed surface with constant normal force $N$, friction has magnitude $\mu_d N$ and
$$
L_{\text{fr}} = -\mu_d\, N\, d .
$$
The mechanical energy lost, equal to $|L_{\text{fr}}|$, is called **dissipated**; it reappears as an increase in the internal energy of the bodies in contact, which heat up; see the topic on the first law of thermodynamics. In the absence of other forces perpendicular to the surface, the normal force is $mg$ on a horizontal plane and $mg\cos\alpha$ on a plane inclined at an angle $\alpha$.
:::

:::esempio{titolo="Sliding down a rough inclined plane"}
A block released at the top of a plane inclined at $\alpha = 30^\circ$, of length $d = 4.0\,\mathrm{m}$, slides down with coefficient of kinetic friction $\mu_d = 0.20$. The drop in height is $h = d\sin\alpha = 2.0\,\mathrm{m}$, the normal force is $mg\cos\alpha$ and friction does the work $-\mu_d\, mg\cos\alpha\, d$. With zero height at the base of the plane, the theorem on the work of nonconservative forces gives
$$
-\mu_d\, m g \cos\alpha\, d = \frac{1}{2} m v^2 - m g\, d \sin\alpha
\quad\Longrightarrow\quad
v = \sqrt{2 g d\,(\sin\alpha - \mu_d \cos\alpha)} ,
$$
and numerically $v = \sqrt{2 \cdot 9.81 \cdot 4.0 \cdot (0.50 - 0.20 \cdot 0.866)}\,\mathrm{m/s} \approx 5.1\,\mathrm{m/s}$. Without friction the speed would be $\sqrt{2gh} \approx 6.3\,\mathrm{m/s}$.

::grafico{assi=0 poligoni="0,0 6.93,0 6.93,4;3.20,1.85 3.72,2.15 3.42,2.67 2.90,2.37" vettori="3.31,2.26,2.21,4.17,N;3.31,2.26,3.31,-0.34,P;3.31,2.26,4.09,2.71,f" punti="3.31,2.26,pieno" etichette="1.3,0.25,α" xmin=-0.6 xmax=7.6 ymin=-0.8 ymax=4.8 uguale=1 titolo="Block sliding down a rough inclined plane: the normal force $\vec{N}$ does no work, the weight $\vec{P}$ does positive work and friction $\vec{f}$, pointing up the incline, does negative work"}

:::

## Potential energy curves and equilibrium

:::osservazione{#curve-energia-potenziale titolo="Reading a potential energy curve"}
Consider a point particle moving along the $x$-axis subject only to a conservative force with potential energy $U(x)$. By the conservation of mechanical energy $K = E - U(x)$, and since $K \geq 0$ the motion can take place only where
$$
U(x) \leq E .
$$
The points where $U(x) = E$ are called **turning points**, because there the speed is zero and, if the force is not zero, the direction of motion reverses. If the allowed region containing the initial position is a bounded interval, the motion is confined between two turning points and the particle oscillates back and forth; if the region is unbounded, the particle can move away indefinitely. In the graph of $U$ the vertical distance between the horizontal line at height $E$ and the curve is the kinetic energy, so the speed is greatest where $U$ is smallest.
:::

:::definizione{#posizione-di-equilibrio titolo="Equilibrium position"}
A position $x_0$ is an **equilibrium** position if the force at $x_0$ is zero, that is, by the relation between force and potential energy, if $U'(x_0) = 0$. A point particle at rest at an equilibrium position stays there indefinitely. The equilibrium is called **stable** if, when the particle is displaced slightly, the force tends to bring it back toward $x_0$, and *unstable* if it tends to move it away.
:::

:::teorema{#stabilita-equilibrio titolo="Stability criterion for equilibrium"}
Let $x_0$ be an equilibrium position, with $U$ twice differentiable and $U''$ continuous.

- If $U''(x_0) > 0$, that is, if $x_0$ is a local minimum point of $U$, the equilibrium is stable.
- If $U''(x_0) < 0$, that is, if $x_0$ is a local maximum point of $U$, the equilibrium is unstable.

The criterion follows from the sign of the force near $x_0$. If $U''(x_0) > 0$, the derivative $U'$ is increasing near $x_0$ and vanishes at $x_0$, so $U' > 0$ to the right of $x_0$ and $U' < 0$ to the left; therefore $F_x = -U'$ is negative to the right and positive to the left, that is, directed toward $x_0$. The case $U''(x_0) < 0$ is analogous, with the signs exchanged. Near a minimum the force is approximately $F_x \approx -U''(x_0)\,(x - x_0)$, like that of a spring of constant $U''(x_0)$, and the particle performs small oscillations; see the topic on oscillations and harmonic motion.
:::

:::esempio{titolo="Equilibrium in a cubic potential energy"}
Let $U(x) = 2x^3 - 6x$, with $x$ in meters and $U$ in joules. The derivative $U'(x) = 6x^2 - 6$ vanishes at $x = -1\,\mathrm{m}$ and at $x = 1\,\mathrm{m}$, and $U''(x) = 12x$. Since $U''(1) = 12 > 0$, the position $x = 1\,\mathrm{m}$ is a position of **stable equilibrium**, with $U(1) = -4\,\mathrm{J}$; since $U''(-1) = -12 < 0$, the position $x = -1\,\mathrm{m}$ is a position of unstable equilibrium, with $U(-1) = 4\,\mathrm{J}$.

A particle with mechanical energy $E = 2\,\mathrm{J}$ located near the minimum stays confined between the turning points $x_1 \approx -0.35\,\mathrm{m}$ and $x_2 \approx 1.88\,\mathrm{m}$, solutions of $2x^3 - 6x = 2$. With $E > 4\,\mathrm{J}$ the particle passes over the maximum at $x = -1\,\mathrm{m}$ and continues to the left, where $U$ decreases without bound.

::grafico{f="2*x^3-6*x;2" punti="1,-4,pieno;-1,4,pieno;-0.347,2,vuoto,x₁;1.879,2,vuoto,x₂" etichette="-2.5,2.6,E" xmin=-2.6 xmax=2.6 ymin=-6 ymax=7 nomi="x,U" titolo="Potential energy $U(x) = 2x^3 - 6x$: stable minimum at $x = 1$, unstable maximum at $x = -1$; with $E = 2\,\mathrm{J}$ the motion near the minimum is confined between $x_1$ and $x_2$"}

:::
