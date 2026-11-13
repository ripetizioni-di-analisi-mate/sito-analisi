---
titolo: "Formulario di Fisica 1"
sommario: "Le formule di Fisica 1 con le condizioni di validità: cinematica e moto del proiettile, leggi di Newton, lavoro ed energia, oscillazioni, urti, corpo rigido, gravitazione, fluidi, primo e secondo principio della termodinamica."
descrizione: "Formulario di Fisica 1 in PDF: proiettile, leggi di Newton, energia, urti, momento d'inerzia, gravitazione, Bernoulli, gas perfetto, Carnot, entropia."
---

## Units of measurement and vectors

The definitions and examples are in the chapter [Physical quantities, units of measurement, and vectors](/en/fisica-1/grandezze-e-vettori/teoria).

:::formula{#unita-derivate titolo="Derived SI units"}
$$
1\,\mathrm{N} = 1\,\mathrm{kg\cdot m/s^2},
\qquad
1\,\mathrm{J} = 1\,\mathrm{N\cdot m},
\qquad
1\,\mathrm{W} = 1\,\mathrm{J/s},
\qquad
1\,\mathrm{Pa} = 1\,\mathrm{N/m^2}
$$
$$
1\,\frac{\mathrm{km}}{\mathrm{h}} = \frac{1}{3{,}6}\,\frac{\mathrm{m}}{\mathrm{s}},
\qquad
1\,\mathrm{L} = 10^{-3}\,\mathrm{m^3},
\qquad
1\,\frac{\mathrm{g}}{\mathrm{cm^3}} = 10^{3}\,\frac{\mathrm{kg}}{\mathrm{m^3}},
\qquad
1\,\mathrm{kWh} = 3{,}6 \cdot 10^{6}\,\mathrm{J}
$$
The base units of mechanics are the meter, kilogram, and second. All given values are converted to SI units before they are substituted into a formula.
:::

:::formula{#prefissi titolo="Prefixes"}
| Prefix | Factor |
| --- | --- |
| giga $\mathrm{G}$, mega $\mathrm{M}$, kilo $\mathrm{k}$ | $10^{9}$, $10^{6}$, $10^{3}$ |
| centi $\mathrm{c}$, milli $\mathrm{m}$ | $10^{-2}$, $10^{-3}$ |
| micro $\mu$, nano $\mathrm{n}$, pico $\mathrm{p}$ | $10^{-6}$, $10^{-9}$, $10^{-12}$ |

An exponent also applies to the prefix, so $1\,\mathrm{cm^2} = 10^{-4}\,\mathrm{m^2}$ and $1\,\mathrm{cm^3} = 10^{-6}\,\mathrm{m^3}$.
:::

:::formula{#analisi-dimensionale titolo="Dimensional analysis"}
$$
[v] = [L\,T^{-1}],
\qquad
[a] = [L\,T^{-2}],
\qquad
[F] = [M\,L\,T^{-2}],
\qquad
[E] = [M\,L^{2}\,T^{-2}]
$$
In a valid physical relation, the two sides have the same dimensions, only terms with the same dimensions are added, and the argument of $\sin$, $\cos$, $\exp$, or $\ln$ is dimensionless. A dimensionally consistent formula can still have an incorrect numerical coefficient.
:::

:::formula{#cifre-significative titolo="Significant figures"}
$$
(3{,}0 \cdot 10^{8}) \cdot (2{,}0 \cdot 10^{-3}) = 6{,}0 \cdot 10^{5},
\qquad
12{,}52 + 1{,}3 = 13{,}8
$$
For products and quotients, the result has as many significant figures as the input with the fewest. For sums and differences, the result has as many decimal places as the input with the fewest.
:::

:::formula{#componenti-cartesiane-e-polari titolo="Cartesian and polar components, vector addition"}
$$
A_x = A\cos\theta,
\qquad
A_y = A\sin\theta
$$
$$
A = \sqrt{A_x^2 + A_y^2 + A_z^2},
\qquad
\tan\theta = \frac{A_y}{A_x}
$$
$$
\vec{A} + \vec{B} = (A_x + B_x,\ A_y + B_y,\ A_z + B_z),
\qquad
k\vec{A} = (kA_x,\ kA_y,\ kA_z)
$$
The angle $\theta$ is measured counterclockwise from the positive $x$ axis for a vector in the $xy$ plane. The tangent determines $\theta$ up to a multiple of $180^\circ$, so the signs of $A_x$ and $A_y$ determine the quadrant. The formula requires $A_x \neq 0$. The resultant of several forces is found by adding the components separately.
:::

:::formula{#prodotto-scalare titolo="Dot product"}
$$
\vec{A} \cdot \vec{B} = A B \cos\theta = A_x B_x + A_y B_y + A_z B_z
$$
$$
\cos\theta = \frac{\vec{A} \cdot \vec{B}}{A B}
$$
The angle $\theta \in [0^\circ, 180^\circ]$ is the angle between the two vectors, and the second formula applies to nonzero vectors. The product is zero *only if* the vectors are perpendicular or one is zero. The dot product $\vec{A} \cdot \hat{u}$ with a unit vector is the component of $\vec{A}$ along $\hat{u}$.
:::

:::formula{#prodotto-vettoriale titolo="Cross product"}
$$
\vec{A} \times \vec{B} = (A_y B_z - A_z B_y)\,\hat{\imath} + (A_z B_x - A_x B_z)\,\hat{\jmath} + (A_x B_y - A_y B_x)\,\hat{k}
$$
$$
|\vec{A} \times \vec{B}| = A B \sin\theta,
\qquad
\vec{B} \times \vec{A} = -\,\vec{A} \times \vec{B}
$$
The vector is perpendicular to the plane of $\vec{A}$ and $\vec{B}$, with direction given by the right-hand rule. The following hold: $\hat{\imath} \times \hat{\jmath} = \hat{k}$, $\hat{\jmath} \times \hat{k} = \hat{\imath}$, $\hat{k} \times \hat{\imath} = \hat{\jmath}$.
:::

:::formula{#derivata-di-un-vettore titolo="Derivative of a vector"}
$$
\frac{d\vec{A}}{dt} = \frac{dA_x}{dt}\,\hat{\imath} + \frac{dA_y}{dt}\,\hat{\jmath} + \frac{dA_z}{dt}\,\hat{k},
\qquad
\frac{d}{dt}\big(\vec{A} \cdot \vec{B}\big) = \frac{d\vec{A}}{dt} \cdot \vec{B} + \vec{A} \cdot \frac{d\vec{B}}{dt}
$$
The unit vectors $\hat{\imath}, \hat{\jmath}, \hat{k}$ are constant, so only the components are differentiated. If $|\vec{A}|$ is constant, then $\vec{A} \cdot \dfrac{d\vec{A}}{dt} = 0$, meaning the derivative is perpendicular to the vector.
:::

## One-dimensional kinematics

The laws of motion are derived in the chapter [One-dimensional kinematics](/en/fisica-1/cinematica-1d/teoria).

:::formula{#velocita-e-accelerazione-1d titolo="Velocity and acceleration"}
$$
v_m = \frac{\Delta x}{\Delta t},
\qquad
v(t) = \frac{dx}{dt},
\qquad
a_m = \frac{\Delta v}{\Delta t},
\qquad
a(t) = \frac{dv}{dt} = \frac{d^2 x}{dt^2}
$$
The displacement $\Delta x = x(t_2) - x(t_1)$ equals the distance traveled *only if* the direction of motion does not change. The body speeds up when $v$ and $a$ have the same sign, and slows down when they have opposite signs.
:::

:::formula{#moto-rettilineo-uniforme titolo="Uniform rectilinear motion"}
$$
x(t) = x_0 + v\,(t - t_0)
$$
The formula applies when the velocity $v$ is constant, and $x_0$ is the position at time $t_0$. To find when two bodies meet, write the position of each as a function of time in the same reference frame and solve $x_A(t) = x_B(t)$.
:::

:::formula{#moto-uniformemente-accelerato titolo="Motion with constant acceleration"}
$$
v(t) = v_0 + a\,t,
\qquad
x(t) = x_0 + v_0\,t + \frac{1}{2}\,a\,t^2
$$
$$
v^2 = v_0^2 + 2\,a\,(x - x_0),
\qquad
v_m = \frac{v_0 + v}{2}
$$
The formulas apply with constant acceleration $a$ and with $t$ measured from the instant at which the position is $x_0$ and the velocity is $v_0$. The relation between velocity and displacement is used when the time is unknown. For example, a body braking from $v_0$ to rest travels $\dfrac{v_0^2}{2|a|}$.
:::

:::formula{#caduta-libera-e-lancio-verticale titolo="Free fall and vertical launch"}
$$
v(t) = v_0 - g\,t,
\qquad
y(t) = y_0 + v_0\,t - \frac{1}{2}\,g\,t^2,
\qquad
g = 9{,}81\,\mathrm{m/s^2}
$$
The $y$ axis points upward and air resistance is negligible. A body released from rest at height $h$ reaches the ground after time $\sqrt{\dfrac{2h}{g}}$ with speed $\sqrt{2gh}$.
:::

:::formula{#altezza-massima-lancio-verticale titolo="Time to the highest point and maximum height"}
$$
t_s = \frac{v_0}{g},
\qquad
h_{\mathrm{max}} = y_0 + \frac{v_0^2}{2g}
$$
The formulas apply to an upward launch with $v_0 > 0$ and negligible air resistance. The body returns to height $y_0$ after time $2t_s$, with velocity $-v_0$.
:::

:::formula{#area-sotto-il-grafico titolo="Displacement and distance traveled from the velocity graph"}
$$
\Delta x = \int_{t_1}^{t_2} v(t)\,dt,
\qquad
d = \int_{t_1}^{t_2} |v(t)|\,dt
$$
Displacement is the signed area under the graph of $v(t)$, and distance traveled is the unsigned area. Likewise, the change in velocity is the area under the graph of $a(t)$.
:::

:::formula{#legge-oraria-da-accelerazione titolo="Position as a function of time from acceleration"}
$$
v(t) = v_0 + \int_{t_0}^{t} a(s)\,ds,
\qquad
x(t) = x_0 + \int_{t_0}^{t} v(s)\,ds
$$
The formulas apply when $a(t)$ is continuous and $v_0$ and $x_0$ are the values at time $t_0$. Both initial conditions are needed because each integration introduces a constant.
:::

:::formula{#accelerazione-funzione-della-posizione titolo="Acceleration as a function of position"}
$$
a = v\,\frac{dv}{dx},
\qquad
\frac{1}{2}\,v^2 - \frac{1}{2}\,v_0^2 = \int_{x_0}^{x} a(\xi)\,d\xi
$$
This relation is used when acceleration is given as a function of position, $a = a(x)$. Here $v_0$ is the velocity at position $x_0$.
:::

:::formula{#accelerazione-proporzionale-alla-velocita titolo="Acceleration proportional to velocity"}
$$
a = -k\,v
\quad\Longrightarrow\quad
v(t) = v_0\,e^{-k t},
\qquad
x(t) = x_0 + \frac{v_0}{k}\left(1 - e^{-k t}\right)
$$
The formulas apply when $k > 0$ is constant and $v_0$ and $x_0$ are the values at $t = 0$. The body comes to rest only as $t \to +\infty$ and travels a total distance $\dfrac{v_0}{k}$.
:::

:::formula{#velocita-limite titolo="Terminal velocity"}
$$
a = A - k\,v
\quad\Longrightarrow\quad
v(t) = \frac{A}{k}\left(1 - e^{-k t}\right),
\qquad
v_L = \frac{A}{k}
$$
The formulas apply when $A > 0$ and $k > 0$ are constant and the body starts from rest, as when a body falls in a fluid with drag proportional to velocity. The terminal velocity is the velocity at which acceleration vanishes.
:::

## Motion in a plane and circular motion

The chapter [Motion in a plane: projectile and circular motion](/en/fisica-1/moto-nel-piano/teoria) contains the derivations and examples.

:::formula{#velocita-e-accelerazione-vettoriali titolo="Position, velocity, and acceleration in a plane"}
$$
\vec{r}(t) = x(t)\,\hat{\imath} + y(t)\,\hat{\jmath},
\qquad
\vec{v} = \frac{d\vec{r}}{dt},
\qquad
\vec{a} = \frac{d\vec{v}}{dt} = \frac{d^2\vec{r}}{dt^2}
$$
$$
\vec{v}(t) = \vec{v}_0 + \vec{a}\,t,
\qquad
\vec{r}(t) = \vec{r}_0 + \vec{v}_0\,t + \frac{1}{2}\,\vec{a}\,t^2
$$
The position functions in the second line apply when $\vec{a}$ is constant. The velocity is tangent to the trajectory, and each component follows the law for rectilinear motion with its own acceleration.
:::

:::formula{#leggi-orarie-del-proiettile titolo="Projectile position as a function of time"}
$$
x(t) = v_0\cos\theta\; t,
\qquad
y(t) = v_0\sin\theta\; t - \frac{1}{2}\,g\,t^2
$$
$$
v_x = v_0\cos\theta,
\qquad
v_y(t) = v_0\sin\theta - g\,t
$$
The projectile starts at the origin with velocity $v_0$ at an angle $\theta$ above the horizontal, the $y$ axis points upward, and air resistance is negligible. The horizontal motion is uniform and the vertical motion has constant acceleration.
:::

:::formula{#traiettoria-parabolica titolo="Parabolic trajectory"}
$$
y = \tan\theta\; x - \frac{g}{2\,v_0^2\cos^2\theta}\; x^2
$$
The equation follows by solving for $t$ from $x(t)$ and substituting into $y(t)$, so it requires $\cos\theta \neq 0$. It determines whether the projectile clears an obstacle at horizontal distance $x$.
:::

:::formula{#altezza-massima-tempo-di-volo-gittata titolo="Maximum height, flight time, and range"}
$$
H = \frac{v_0^2\sin^2\theta}{2g},
\qquad
T = \frac{2\,v_0\sin\theta}{g},
\qquad
R = \frac{v_0^2\sin 2\theta}{g}
$$
The flight time and range refer to the return to the launch height. For a given $v_0$, the range is greatest at $\theta = 45^\circ$, where it equals $\dfrac{v_0^2}{g}$, and the complementary angles $\theta$ and $90^\circ - \theta$ give the same range.
:::

:::formula{#lancio-orizzontale titolo="Horizontal launch from a height"}
$$
t_c = \sqrt{\frac{2h}{g}},
\qquad
d = v_0\,\sqrt{\frac{2h}{g}},
\qquad
v_{\mathrm{suolo}} = \sqrt{v_0^2 + 2gh}
$$
The body is launched from height $h$ with horizontal velocity $v_0$ and negligible air resistance. Its fall takes the same time as that of a body released from rest from the same height.
:::

:::formula{#velocita-e-quota titolo="Speed as a function of height"}
$$
v = \sqrt{v_0^2 - 2g\,(y - y_0)}
$$
The formula applies to a body subject only to its weight, with the $y$ axis pointing upward, for any launch direction. For a launch from a height at any angle, the time at which the body reaches height $y_f$ follows from the quadratic equation $y_0 + v_0\sin\theta\; t - \dfrac{1}{2}\,g\,t^2 = y_f$, using the positive root that matches the motion described.
:::

:::formula{#moto-circolare-uniforme titolo="Uniform circular motion"}
$$
s = R\,\theta,
\qquad
\omega = \frac{d\theta}{dt},
\qquad
v = \omega R
$$
$$
T = \frac{2\pi}{\omega} = \frac{2\pi R}{v},
\qquad
f = \frac{1}{T} = \frac{\omega}{2\pi},
\qquad
a_n = \frac{v^2}{R} = \omega^2 R
$$
The angle $\theta$ is measured in radians and $\omega$ is constant. The centripetal acceleration $a_n$ points toward the center of the circle, and in vector form $\vec{a} = -\omega^2\,\vec{r}$ when the origin is at the center.
:::

:::formula{#moto-circolare-uniformemente-accelerato titolo="Circular motion with constant angular acceleration"}
$$
\begin{aligned}
\omega(t) &= \omega_0 + \alpha\,t \\[4pt]
\theta(t) &= \theta_0 + \omega_0\,t + \frac{1}{2}\,\alpha\,t^2 \\[4pt]
\omega^2 &= \omega_0^2 + 2\alpha\,(\theta - \theta_0)
\end{aligned}
$$
The formulas apply when the angular acceleration $\alpha = \dfrac{d\omega}{dt}$ is constant. They follow from the equations for motion with constant acceleration by using $\theta$ in place of $x$.
:::

:::formula{#accelerazione-tangenziale-e-centripeta titolo="Tangential and centripetal acceleration"}
$$
\vec{a} = a_t\,\hat{u}_t + a_n\,\hat{u}_n,
\qquad
a_t = \frac{dv}{dt} = \alpha R,
\qquad
a_n = \frac{v^2}{R},
\qquad
a = \sqrt{a_t^2 + a_n^2}
$$
The formulas apply to circular motion of radius $R$. The component $\hat{u}_t$ is tangent in the direction of motion, and $\hat{u}_n$ points toward the center. For an arbitrary trajectory, $R$ is replaced by the radius of curvature $\rho = \dfrac{v^2}{a_n}$, giving $a_t = \dfrac{\vec{a} \cdot \vec{v}}{v}$.
:::

:::formula{#trasformazioni-di-galileo titolo="Galilean transformations and addition of velocities"}
$$
\vec{r} = \vec{r}\,' + \vec{V}\,t,
\qquad
\vec{v} = \vec{v}\,' + \vec{V},
\qquad
\vec{a} = \vec{a}\,'
$$
The formulas apply if $S'$ translates relative to $S$ with constant velocity $\vec{V}$ and the origins coincide at $t = 0$, for speeds small compared with the speed of light. Primed quantities are measured in $S'$.
:::

## Newton's laws and forces

The statements and worked problems are in the chapter [Newton's laws and forces](/en/fisica-1/leggi-di-newton/teoria).

:::formula{#secondo-principio-dinamica titolo="Newton's second law and equilibrium"}
$$
\vec{R} = m\,\vec{a},
\qquad
\begin{cases}
R_x = m\,a_x \\[4pt]
R_y = m\,a_y
\end{cases}
$$
$\vec{R}$ is the net force on the particle in an inertial reference frame. Both scalar equations hold together. A particle at rest remains in equilibrium *if and only if* $R_x = 0$ and $R_y = 0$.
:::

:::formula{#peso-e-terzo-principio titolo="Weight and Newton's third law"}
$$
\vec{P} = m\,\vec{g},
\qquad
\vec{F}_{BA} = -\,\vec{F}_{AB}
$$
The weight is $mg$ near Earth's surface. The two forces in Newton's third law have the same line of action and act on different bodies, so only one appears in the equation of motion for either body.
:::

:::formula{#leggi-dell-attrito titolo="Dry friction"}
$$
f_s \leq \mu_s\,N,
\qquad
f_d = \mu_d\,N
$$
$N$ is the magnitude of the normal force. Static friction acts while the surfaces do not slide and takes the value needed for equilibrium, up to a maximum of $\mu_s N$. Kinetic friction acts during sliding and points opposite the relative velocity.
:::

:::attenzione
The formula $f_s = \mu_s N$ gives the maximum static friction. A block of $2{,}0\,\mathrm{kg}$ at rest on a floor with $\mu_s = 0{,}50$ remains at rest when pushed horizontally with $5{,}0\,\mathrm{N}$. The friction force has magnitude $5{,}0\,\mathrm{N}$, whereas $\mu_s N = 9{,}8\,\mathrm{N}$.
:::

:::formula{#piano-inclinato titolo="Inclined plane"}
$$
N = m g \cos\alpha,
\qquad
a = g \sin\alpha
$$
$$
a_{\mathrm{discesa}} = g\,(\sin\alpha - \mu_d \cos\alpha),
\qquad
a_{\mathrm{salita}} = g\,(\sin\alpha + \mu_d \cos\alpha)
$$
The first line applies to a smooth plane inclined at $\alpha$, with no other forces perpendicular to the plane. With kinetic friction, $a_{\mathrm{discesa}}$ is the acceleration of a body sliding down and $a_{\mathrm{salita}}$ is the magnitude of the deceleration of a body sliding up. Both accelerations point down the plane.
:::

:::formula{#angolo-limite titolo="Angle of repose"}
$$
\tan\alpha \leq \mu_s
$$
A body at rest on a plane inclined at $\alpha$ remains at rest *if and only if* the inequality holds. The limiting angle $\arctan\mu_s$ is independent of mass.
:::

:::formula{#legge-di-hooke titolo="Hooke's law and springs in series and in parallel"}
$$
F_x = -k\,x
$$
$$
k_{\mathrm{par}} = k_1 + k_2,
\qquad
\frac{1}{k_{\mathrm{ser}}} = \frac{1}{k_1} + \frac{1}{k_2}
$$
The spring is ideal, meaning its mass is negligible, and $x$ is its extension from its natural length. Springs in parallel have the same extension, while springs in series transmit the same force.
:::

:::formula{#forza-centripeta titolo="Centripetal force"}
$$
F_c = m\,\frac{v^2}{r} = m\,\omega^2 r
$$
$F_c$ is the component of the net force directed toward the center of the circular trajectory of radius $r$. It is the sum of the radial components of the forces present, such as tension, friction, the normal force, and gravity.
:::

:::formula{#curve-stradali titolo="Flat and banked curves"}
$$
v_{\mathrm{max}} = \sqrt{\mu_s\,g\,r},
\qquad
v = \sqrt{g\,r \tan\alpha}
$$
The first formula gives the maximum speed on a flat curve of radius $r$, where static friction supplies the centripetal force. The second gives the speed at which a curve banked at $\alpha$ can be taken without friction.
:::

:::formula{#giro-della-morte titolo="Vertical loop"}
$$
v_{\mathrm{alto}} \geq \sqrt{g\,r},
\qquad
N_{\mathrm{alto}} = m\,\frac{v^2}{r} - m g,
\qquad
N_{\mathrm{basso}} = m g + m\,\frac{v^2}{r}
$$
The body travels along the inside of a vertical circular track of radius $r$. In each formula, $v$ is the speed at the point under consideration. The first condition is necessary and sufficient to stay in contact at the highest point. If the track is smooth, conservation of mechanical energy gives $v_{\mathrm{basso}}^2 = v_{\mathrm{alto}}^2 + 4gr$, so $v \geq \sqrt{5gr}$ is required at the lowest point.
:::

:::formula{#macchina-di-atwood titolo="Atwood machine"}
$$
a = \frac{m_1 - m_2}{m_1 + m_2}\,g,
\qquad
T = \frac{2\,m_1 m_2}{m_1 + m_2}\,g
$$
The string and pulley are ideal: the string is inextensible and has negligible mass, and the pulley has negligible mass and rotates without friction. Acceleration is positive in the direction in which $m_1$ descends.
:::

:::formula{#corpo-trainato titolo="Body on a surface pulled by a hanging body"}
$$
a = \frac{m_2 - \mu_d\,m_1}{m_1 + m_2}\,g,
\qquad
T = \frac{(1 + \mu_d)\,m_1 m_2}{m_1 + m_2}\,g
$$
Body $m_1$ slides on a horizontal surface with kinetic friction $\mu_d$, and body $m_2$ descends while suspended from an ideal string passing over an ideal pulley. The system starts moving from rest *only if* $m_2 > \mu_s\,m_1$.
:::

:::formula{#sistema-come-unico-corpo titolo="Treating the system as one body and the movable pulley"}
$$
a = \frac{F_{\mathrm{est}}}{m_{\mathrm{tot}}},
\qquad
T = \frac{mg}{2}
$$
The first formula applies to bodies with the same acceleration, where $F_{\mathrm{est}}$ is the resultant of the external forces alone along the direction of motion. The internal contact forces can then be found from the equation for a single body. The second formula gives the equilibrium tension in an ideal string with a body of mass $m$ suspended from an ideal movable pulley.
:::

:::formula{#forze-apparenti titolo="Apparent forces and apparent weight"}
$$
\vec{R} + \vec{F}_{\mathrm{app}} = m\,\vec{a}\,',
\qquad
\vec{F}_{\mathrm{app}} = -\,m\,\vec{A}
$$
$$
N = m\,(g + a),
\qquad
F_{\mathrm{cf}} = m\,\omega^2 r
$$
The first line applies in a frame that translates with acceleration $\vec{A}$ relative to an inertial frame. The apparent weight in an elevator is $N$ when its acceleration $a$ is positive upward. The centrifugal force acts on a body at rest in a frame rotating with constant $\omega$ at distance $r$ from the axis.
:::

## Work, power, and energy

The definitions and proofs of the theorems are given in the chapter [Work and energy](/en/fisica-1/lavoro-ed-energia/teoria).

:::formula{#lavoro-forza-costante titolo="Work done by a constant force"}
$$
L = \vec{F} \cdot \vec{s} = F\, s \cos\theta,
\qquad
L_{\mathrm{tot}} = L_1 + \dots + L_n = \vec{R} \cdot \vec{s}
$$
The force is constant and the displacement $\vec{s}$ is along a straight line. The angle $\theta$ is measured between the force and the displacement. The work is positive for $\theta < 90^\circ$, zero for forces perpendicular to the displacement, and negative for $\theta > 90^\circ$.
:::

:::formula{#lavoro-forza-variabile titolo="Work done by a variable force"}
$$
L = \int_{x_A}^{x_B} F_x(x)\, dx,
\qquad
L = \int_\gamma \vec{F} \cdot d\vec{r}
$$
The first formula applies to straight-line motion along the $x$ axis. The work is the signed area under the graph of $F_x(x)$. The second formula applies along a curved path $\gamma$.
:::

:::formula{#lavori-notevoli titolo="Work done by gravity, the spring force, and friction"}
$$
L_P = mg\,(y_A - y_B),
\qquad
L_{\mathrm{el}} = \frac{1}{2} k x_A^2 - \frac{1}{2} k x_B^2,
\qquad
L_{\mathrm{att}} = -\mu_d\, N\, d
$$
The $y$ axis points upward and $x$ is the extension of the spring. The work done by gravity and by the spring force depends only on the initial and final positions. The formula for work done by kinetic friction applies when $N$ is constant, and $d$ is the distance traveled.
:::

:::formula{#potenza titolo="Power and efficiency"}
$$
P_m = \frac{L}{\Delta t},
\qquad
P = \frac{dL}{dt} = \vec{F} \cdot \vec{v} = F\,v\cos\theta,
\qquad
\eta = \frac{P_{\mathrm{u}}}{P_{\mathrm{ass}}}
$$
Power is measured in watts. A constant force applied to a body moving at constant velocity delivers constant power $F v\cos\theta$. The efficiency of a motor satisfies $0 < \eta < 1$.
:::

:::formula{#teorema-energia-cinetica titolo="Work–kinetic energy theorem"}
$$
K = \frac{1}{2} m v^2,
\qquad
L_{\mathrm{tot}} = K_B - K_A
$$
$L_{\mathrm{tot}}$ is the work done by *all* forces acting on the particle, both conservative and nonconservative. For example, the braking distance on a horizontal surface with kinetic friction is $d = \dfrac{v_0^2}{2\mu_d\, g}$.
:::

:::formula{#energia-potenziale titolo="Potential energy"}
$$
L_{A \to B} = U(A) - U(B),
\qquad
U = m g y,
\qquad
U = \frac{1}{2} k x^2
$$
Potential energy is defined for conservative forces up to an additive constant. The relation $U = mgy$ applies near Earth's surface with $y$ pointing upward, and $U = \dfrac{1}{2} k x^2$ applies to an ideal spring with extension $x$.
:::

:::formula{#forza-da-energia-potenziale titolo="Force as the derivative of potential energy"}
$$
F_x(x) = -\frac{dU}{dx},
\qquad
U(x) = -\int_{x_0}^{x} F_x(s)\,ds
$$
The formulas apply to a conservative force that depends only on position along $x$. The point $x_0$ is where $U = 0$ is set.
:::

:::formula{#conservazione-energia-meccanica titolo="Conservation of mechanical energy"}
$$
E = K + U,
\qquad
K_A + U_A = K_B + U_B
$$
Energy is conserved when the forces acting on the body are conservative or do no work, as with the normal force from a stationary frictionless surface or the tension in a string with one end fixed. For a body starting from rest and descending through a height $h$ along a frictionless track, $v = \sqrt{2gh}$ regardless of the shape of the track.
:::

:::formula{#lavoro-forze-non-conservative titolo="Work done by nonconservative forces"}
$$
L_{\mathrm{nc}} = E_B - E_A = (K_B + U_B) - (K_A + U_A)
$$
$L_{\mathrm{nc}}$ is the work done by nonconservative forces, such as friction, and the conservative forces are accounted for in the potential energy. With kinetic friction as the only nonconservative force, $L_{\mathrm{nc}} = -\mu_d N d$ and the mechanical energy decreases.
:::

:::formula{#curve-di-energia-potenziale titolo="Potential energy curves and equilibrium"}
$$
U(x) \leq E,
\qquad
U'(x_0) = 0,
\qquad
U''(x_0) > 0 \implies \text{equilibrio stabile}
$$
Motion with constant mechanical energy $E$ occurs only where $U(x) \leq E$, and the points where $U(x) = E$ are turning points. Equilibrium positions are the stationary points of $U$. If $U''(x_0) < 0$, the equilibrium is unstable. The criterion requires $U$ to be twice differentiable with $U''$ continuous.
:::

## Oscillations and harmonic motion

The solutions of the equations of motion are derived in the chapter [Oscillations and harmonic motion](/en/fisica-1/oscillazioni/teoria).

:::formula{#moto-armonico-semplice titolo="Position as a function of time in harmonic motion"}
$$
x(t) = A\cos(\omega t + \varphi),
\qquad
T = \frac{2\pi}{\omega},
\qquad
f = \frac{1}{T} = \frac{\omega}{2\pi}
$$
$$
v(t) = -A\omega\sin(\omega t + \varphi),
\qquad
a(t) = -A\omega^2\cos(\omega t + \varphi) = -\omega^2 x(t)
$$
The amplitude is $A > 0$, the angular frequency is $\omega$ in $\mathrm{rad/s}$, and the initial phase is $\varphi$. The velocity has maximum magnitude $A\omega$ at the equilibrium position, and the acceleration has maximum magnitude $A\omega^2$ at the endpoints.
:::

:::formula{#velocita-in-funzione-della-posizione titolo="Speed as a function of position"}
$$
|v| = \omega\sqrt{A^2 - x^2}
$$
The formula applies for $|x| \leq A$ and does not require the time to be known. It follows from $\dfrac{x^2}{A^2} + \dfrac{v^2}{A^2\omega^2} = 1$.
:::

:::formula{#equazione-del-moto-armonico titolo="Equation of harmonic motion"}
$$
\ddot{x} = -\omega^2 x
\quad\Longrightarrow\quad
x(t) = C_1\cos(\omega t) + C_2\sin(\omega t) = A\cos(\omega t + \varphi)
$$
Any system whose equation of motion has this form, with $\omega > 0$, undergoes harmonic motion with angular frequency $\omega$. The period is independent of the amplitude.
:::

:::formula{#ampiezza-e-fase titolo="Amplitude and phase from the initial conditions"}
$$
A = \sqrt{x_0^2 + \frac{v_0^2}{\omega^2}},
\qquad
\begin{cases}
\cos\varphi = \dfrac{x_0}{A} \\[10pt]
\sin\varphi = -\dfrac{v_0}{A\omega}
\end{cases}
$$
$x_0$ and $v_0$ are the position and velocity at $t = 0$, and both conditions on $\varphi$ must hold. The tangent alone would determine the phase only up to a multiple of $\pi$.
:::

:::formula{#oscillatore-massa-molla titolo="Mass–spring oscillator"}
$$
\omega = \sqrt{\frac{k}{m}},
\qquad
T = 2\pi\sqrt{\frac{m}{k}},
\qquad
\Delta\ell = \frac{mg}{k}
$$
The spring is ideal and there is no friction. For a vertical spring, $\Delta\ell$ is the equilibrium extension, and the body oscillates about the new equilibrium position with the same $\omega$. With several springs, the equivalent spring constant for the series or parallel arrangement is used.
:::

:::formula{#energia-oscillatore titolo="Energy of harmonic motion"}
$$
K = \frac{1}{2}kA^2\sin^2(\omega t + \varphi),
\qquad
U = \frac{1}{2}kA^2\cos^2(\omega t + \varphi)
$$
$$
E = K + U = \frac{1}{2}kA^2 = \frac{1}{2}m\omega^2 A^2
$$
The formulas apply to a frictionless mass–spring oscillator, with $U$ zero at the equilibrium position. The total energy is constant and proportional to the square of the amplitude.
:::

:::formula{#piccole-oscillazioni titolo="Small oscillations about a minimum"}
$$
\omega = \sqrt{\frac{U''(x_e)}{m}}
$$
The formula applies near an equilibrium point $x_e$ with $U''(x_e) > 0$, for oscillations whose amplitude is small compared with the scale over which $U''$ varies. Near $x_e$ the force is approximately $-U''(x_e)\,(x - x_e)$, like that of a spring.
:::

:::formula{#pendolo-semplice titolo="Simple pendulum"}
$$
\omega = \sqrt{\frac{g}{\ell}},
\qquad
T_0 = 2\pi\sqrt{\frac{\ell}{g}},
\qquad
T = mg\cos\theta + m\,\frac{v^2}{\ell}
$$
The period $T_0$ applies to small oscillations with amplitude up to about ten degrees and an inextensible string of negligible mass. For a larger amplitude $\theta_0$ in radians, $T_0 \approx 2\pi\sqrt{\dfrac{\ell}{g}}\left(1 + \dfrac{\theta_0^2}{16}\right)$. The third formula gives the tension in the string when it makes an angle $\theta$ with the vertical. In an elevator with upward acceleration $a$, replace $g$ with $g + a$.
:::

:::formula{#pendolo-fisico-e-di-torsione titolo="Physical pendulum and torsion pendulum"}
$$
T = 2\pi\sqrt{\frac{I}{mgd}},
\qquad
T = 2\pi\sqrt{\frac{I}{\kappa}}
$$
For small oscillations of a physical pendulum, $I$ is the moment of inertia about the suspension axis and $d$ is the distance from the center of mass to that axis. In a torsion pendulum, $\kappa$ is the torsion constant of the wire, and the formula applies as long as the restoring torque is proportional to the angle.
:::

:::formula{#oscillatore-smorzato titolo="Damped oscillator"}
$$
m\ddot{x} + b\dot{x} + kx = 0,
\qquad
\ddot{x} + 2\gamma\dot{x} + \omega_0^2 x = 0
$$
$$
\omega_0 = \sqrt{\frac{k}{m}},
\qquad
\gamma = \frac{b}{2m}
$$
The viscous force is $-b\,\vec{v}$, with $b > 0$. The undamped natural angular frequency is $\omega_0$, and the damping constant is $\gamma$ in $\mathrm{s^{-1}}$.
:::

:::formula{#regimi-di-smorzamento titolo="Damping regimes"}
$$
\begin{aligned}
&\gamma < \omega_0: && x(t) = A_0\,e^{-\gamma t}\cos(\omega_s t + \varphi), \quad \omega_s = \sqrt{\omega_0^2 - \gamma^2} \\[4pt]
&\gamma = \omega_0: && x(t) = (C_1 + C_2 t)\,e^{-\gamma t} \\[4pt]
&\gamma > \omega_0: && x(t) = C_1 e^{r_1 t} + C_2 e^{r_2 t}, \quad r_{1,2} = -\gamma \pm \sqrt{\gamma^2 - \omega_0^2}
\end{aligned}
$$
The body oscillates only in the first case, with angular frequency $\omega_s < \omega_0$. Critical damping corresponds to $b = 2\sqrt{km}$ and gives the fastest return to equilibrium among nonoscillatory motions.
:::

:::formula{#energia-e-fattore-di-qualita titolo="Energy and quality factor"}
$$
E(t) \approx \frac{1}{2}kA_0^2\,e^{-2\gamma t},
\qquad
Q = \frac{\omega_0}{2\gamma},
\qquad
\gamma = \frac{1}{\Delta t}\ln\frac{A_1}{A_2}
$$
The formulas apply to weak damping, with $\gamma$ much smaller than $\omega_0$. The third formula gives $\gamma$ from two amplitudes $A_1$ and $A_2$ measured at a time interval of $\Delta t$.
:::

:::formula{#oscillatore-forzato titolo="Driven oscillator and steady-state motion"}
$$
\ddot{x} + 2\gamma\dot{x} + \omega_0^2 x = \frac{F_0}{m}\cos(\Omega t)
$$
$$
x(t) = A(\Omega)\cos(\Omega t - \delta),
\qquad
A(\Omega) = \frac{F_0}{m\sqrt{(\omega_0^2 - \Omega^2)^2 + 4\gamma^2\Omega^2}}
$$
For $\gamma > 0$, the steady state is reached after the transient and does not depend on the initial conditions. The phase shift $\delta \in (0, \pi)$ satisfies $\tan\delta = \dfrac{2\gamma\Omega}{\omega_0^2 - \Omega^2}$.
:::

:::formula{#risonanza titolo="Resonance"}
$$
\Omega_r = \sqrt{\omega_0^2 - 2\gamma^2},
\qquad
A_{\mathrm{max}} = \frac{F_0}{2m\gamma\sqrt{\omega_0^2 - \gamma^2}} \approx Q\,\frac{F_0}{k}
$$
The amplitude has a maximum *only if* $\gamma < \dfrac{\omega_0}{\sqrt{2}}$. The approximation using the quality factor applies to weak damping, where $\Omega_r \approx \omega_0$.
:::

## Momentum, center of mass, and collisions

The proofs and examples are given in the chapter [Systems of particles, momentum, and collisions](/en/fisica-1/quantita-di-moto/teoria).

:::formula{#quantita-di-moto titolo="Momentum"}
$$
\vec{p} = m\,\vec{v},
\qquad
\vec{F} = \frac{d\vec{p}}{dt}
$$
$\vec{F}$ is the net force on the particle in an inertial reference frame. For constant mass, the second formula reduces to $\vec{F} = m\,\vec{a}$.
:::

:::formula{#impulso titolo="Impulse and average force"}
$$
\vec{J} = \int_{t_1}^{t_2} \vec{F}(t)\,dt = \vec{p}(t_2) - \vec{p}(t_1),
\qquad
\vec{F}_m = \frac{\Delta\vec{p}}{\Delta t}
$$
$\vec{F}$ is the net force applied. During a bounce, the change $\Delta\vec{p}$ is calculated using the signed velocities. For a ball that reverses direction without changing speed, $|\Delta p| = 2mv$.
:::

:::formula{#centro-di-massa titolo="Center of mass"}
$$
\vec{r}_{\mathrm{cm}} = \frac{1}{M} \sum_{i=1}^{N} m_i\,\vec{r}_i,
\qquad
x_{\mathrm{cm}} = \frac{\sum_i m_i x_i}{M},
\qquad
\vec{r}_{\mathrm{cm}} = \frac{1}{M} \int \vec{r}\,dm
$$
$M$ is the total mass. For a homogeneous body with a center or an axis of symmetry, the center of mass lies at that center or on that axis. For a rod with linear mass density $\lambda(x)$, $x_{\mathrm{cm}} = \dfrac{\int_0^L x\,\lambda(x)\,dx}{\int_0^L \lambda(x)\,dx}$.
:::

:::formula{#centro-di-massa-composto titolo="Center of mass of a composite body"}
$$
\vec{r}_{\mathrm{cm}} = \frac{M_1\,\vec{r}_1 + M_2\,\vec{r}_2}{M_1 + M_2}
$$
Each part is treated as a point particle at its own center of mass $\vec{r}_1$, $\vec{r}_2$. A hole in a homogeneous body is treated as a part with negative mass.
:::

:::formula{#moto-del-centro-di-massa titolo="Motion of the center of mass"}
$$
\vec{P} = \sum_i m_i\,\vec{v}_i = M\,\vec{v}_{\mathrm{cm}},
\qquad
M\,\vec{a}_{\mathrm{cm}} = \frac{d\vec{P}}{dt} = \vec{F}_{\mathrm{est}}
$$
$\vec{F}_{\mathrm{est}}$ is the net external force, since internal forces cancel in pairs by Newton's third law. The center of mass moves like a particle of mass $M$ acted on by $\vec{F}_{\mathrm{est}}$.
:::

:::formula{#conservazione-quantita-di-moto titolo="Conservation of momentum"}
$$
\vec{P} = \sum_i m_i\,\vec{v}_i = \text{costante},
\qquad
m_1\,\Delta x_1 + m_2\,\Delta x_2 = 0
$$
Momentum is conserved when the net external force is zero. If only the $x$ component is zero, only $P_x$ is conserved. The second formula applies to two bodies initially at rest in a system isolated along $x$, as in the case of a person walking on a boat, because the center of mass stays at rest.
:::

:::formula{#urto-completamente-anelastico titolo="Perfectly inelastic collision"}
$$
V = \frac{m_1 v_1 + m_2 v_2}{m_1 + m_2},
\qquad
\Delta K = -\frac{1}{2}\,\frac{m_1 m_2}{m_1 + m_2}\,(v_1 - v_2)^2
$$
The two bodies remain joined after the one-dimensional collision, and external forces are negligible during the collision. Momentum is conserved, while kinetic energy decreases by $|\Delta K|$.
:::

:::formula{#pendolo-balistico titolo="Ballistic pendulum"}
$$
v = \frac{m + M}{m}\,\sqrt{2 g h}
$$
A projectile of mass $m$ embeds itself in a stationary block of mass $M$ suspended by inextensible strings. The block rises to height $h$. Momentum is conserved during the collision, and mechanical energy is conserved during the subsequent rise.
:::

:::formula{#urto-elastico titolo="Elastic collision in one dimension"}
$$
v_1' = \frac{(m_1 - m_2)\,v_1 + 2 m_2 v_2}{m_1 + m_2},
\qquad
v_2' = \frac{(m_2 - m_1)\,v_2 + 2 m_1 v_1}{m_1 + m_2}
$$
Momentum and kinetic energy are conserved, and the velocities are signed components along the line of impact. It follows that $v_1' - v_2' = -(v_1 - v_2)$. With $v_2 = 0$ and equal masses, the bodies exchange velocities.
:::

:::formula{#coefficiente-di-restituzione titolo="Coefficient of restitution"}
$$
e = -\frac{v_2' - v_1'}{v_2 - v_1},
\qquad
e = \sqrt{\frac{h'}{h}}
$$
For elastic collisions $e = 1$, for perfectly inelastic collisions $e = 0$, and for other collisions $0 < e < 1$. The second formula applies when a ball falls from height $h$ onto a stationary floor and rebounds to height $h'$, with negligible air resistance.
:::

:::formula{#urti-nel-piano titolo="Collisions in a plane"}
$$
\begin{cases}
m_1 v_{1x} + m_2 v_{2x} = m_1 v_{1x}' + m_2 v_{2x}' \\[6pt]
m_1 v_{1y} + m_2 v_{2y} = m_1 v_{1y}' + m_2 v_{2y}'
\end{cases}
$$
Both components of momentum are conserved when external forces are negligible during the collision. In an elastic collision between equal masses with the target at rest, $\vec{v}_1\,' \cdot \vec{v}_2\,' = 0$ also holds. Thus, if the collision is oblique, the bodies move away in perpendicular directions.
:::

:::formula{#teorema-di-konig titolo="König's theorem"}
$$
K = \frac{1}{2}\,M v_{\mathrm{cm}}^2 + K^{*},
\qquad
K^{*} = \frac{1}{2}\,\mu\,(v_1 - v_2)^2,
\qquad
\mu = \frac{m_1 m_2}{m_1 + m_2}
$$
$K^{*}$ is the kinetic energy in the center-of-mass frame. The second formula applies to two bodies moving along a straight line. In a collision with negligible external forces, the term $\dfrac{1}{2} M v_{\mathrm{cm}}^2$ does not change, so at most $K^{*}$ of energy can be dissipated.
:::

:::formula{#sistemi-a-massa-variabile titolo="Variable-mass systems and the rocket equation"}
$$
M\,\frac{d\vec{v}}{dt} = \vec{F}_{\mathrm{est}} + \vec{u}\,\frac{dM}{dt},
\qquad
v_f = v_i + u \ln \frac{M_i}{M_f}
$$
$\vec{u}$ is the velocity of the mass gained or expelled *relative* to the body. The rocket equation applies in the absence of external forces, with gas expelled backward at constant relative speed $u$. For a vertical launch, add $-g\,t$, where $t$ is the burn time.
:::

## Rigid body dynamics

The definitions and proofs are given in the chapter [Rigid body dynamics](/en/fisica-1/corpo-rigido/teoria).

:::formula{#grandezze-angolari titolo="Velocity and acceleration of points on a rigid body"}
$$
v = \omega r,
\qquad
a_t = \alpha r,
\qquad
a_c = \omega^2 r = \frac{v^2}{r}
$$
The formulas apply to a rigid body rotating about a fixed axis, where $r$ is the distance from the point to the axis. All points have the same $\omega$ and the same $\alpha$. For constant $\alpha$, the equations for circular motion with constant angular acceleration apply.
:::

:::formula{#momento-di-una-forza titolo="Torque of a force"}
$$
\vec{\tau}_O = \vec{r} \times \vec{F},
\qquad
\tau_O = rF\sin\varphi = F b,
\qquad
\tau_z = x F_y - y F_x
$$
$\vec{r} = \overrightarrow{OP}$ extends from the reference point $O$ to the point of application, and $b$ is the moment arm, the distance from $O$ to the line of action. For forces in a plane perpendicular to the $z$ axis, $\tau_z = \pm F b$, with a positive value when the force tends to rotate the body counterclockwise.
:::

:::formula{#momento-angolare titolo="Angular momentum"}
$$
\vec{L}_O = \vec{r} \times m\vec{v},
\qquad
L_z = I\omega
$$
The second formula applies to a rigid body rotating about the fixed $z$ axis, with $I$ the moment of inertia about that axis. For a point in circular motion with radius $r$, $L_z = m r^2 \omega$.
:::

:::formula{#momento-di-inerzia titolo="Moment of inertia"}
$$
I = \sum_i m_i R_i^2,
\qquad
I = \int R^2\,dm
$$
$R_i$ is the distance from point $i$ to the axis. The moment of inertia depends on the axis and is additive, so the moment of inertia of a composite body is the sum of those of its parts about the same axis.
:::

:::formula{#momenti-di-inerzia-notevoli titolo="Moments of inertia of homogeneous bodies"}
| Body and axis | $I$ |
| --- | --- |
| Rod of length $L$, axis through its center | $\dfrac{1}{12} M L^2$ |
| Rod of length $L$, axis through one end | $\dfrac{1}{3} M L^2$ |
| Ring or thin-walled hollow cylinder, axis of symmetry | $M R^2$ |
| Disk or solid cylinder, axis of symmetry | $\dfrac{1}{2} M R^2$ |
| Solid sphere, axis through its center | $\dfrac{2}{5} M R^2$ |

Each axis for a rod is perpendicular to that rod. For a different axis, the parallel-axis theorem is used.
:::

:::formula{#teorema-di-steiner titolo="Parallel-axis theorem"}
$$
I = I_C + M d^2
$$
$I_C$ is the moment of inertia about an axis through the center of mass, and $I$ is the moment of inertia about a *parallel* axis at distance $d$. For a rod, for example, $\dfrac{1}{12} M L^2 + M\left(\dfrac{L}{2}\right)^2 = \dfrac{1}{3} M L^2$.
:::

:::formula{#equazione-rotazione-asse-fisso titolo="Angular momentum balance and rotation about a fixed axis"}
$$
\frac{d\vec{L}_O}{dt} = \vec{\tau}_O^{(e)},
\qquad
\tau_z = I\alpha
$$
$\vec{\tau}_O^{(e)}$ is the torque due to external forces alone, measured about a reference point $O$ that is fixed or coincides with the center of mass. In the second formula, $I$ is the moment of inertia about the fixed axis, and $\tau_z$ is the axial torque of the external forces. The reactions of a frictionless axle have zero axial torque. In problems with strings and pulleys of nonnegligible mass, the constraint $a = \alpha R$ applies if the string does not slip.
:::

:::formula{#energia-cinetica-di-rotazione titolo="Energy, work, and power in rotation"}
$$
K = \frac{1}{2} I\omega^2,
\qquad
W = \int_{\theta_1}^{\theta_2} \tau_z\,d\theta = \frac{1}{2} I\omega_2^2 - \frac{1}{2} I\omega_1^2,
\qquad
P = \tau_z\,\omega
$$
The formulas apply to rotation about a fixed axis. Work is denoted by $W$ to distinguish it from angular momentum $L$. The equality between work and the change in kinetic energy requires a frictionless axle.
:::

:::formula{#energia-corpo-rigido titolo="Kinetic and potential energy of a rigid body"}
$$
K = \frac{1}{2} M v_C^2 + \frac{1}{2} I_C\,\omega^2,
\qquad
U = M g z_C
$$
$I_C$ is the moment of inertia about an axis of fixed direction through the center of mass $C$, and $z_C$ is the height of $C$. If the forces doing work are conservative, $K + U$ is conserved. For a rod released from rest in a vertical position and rotating about one end, $\omega = \sqrt{\dfrac{3g}{L}}$ when the rod is horizontal.
:::

:::formula{#conservazione-momento-angolare titolo="Conservation of angular momentum"}
$$
I_1\,\omega_1 = I_2\,\omega_2
$$
The formula applies if the net external torque about the axis is zero and the system rotates rigidly about the axis at every instant, even when the moment of inertia changes, as when a skater pulls in her arms. The rotational kinetic energy generally changes.
:::

:::formula{#urti-con-asse-fisso titolo="Collision with a body constrained to rotate about an axis"}
$$
m v_0 d = \left( I_O + m d^2 \right) \omega
$$
A projectile of mass $m$ embeds itself in the stationary body, which is mounted on a frictionless hinge. Its velocity $v_0$ is perpendicular to the axis, and its line of motion is at distance $d$ from the axis. Angular momentum about the axis is conserved. Linear momentum changes because of the impulse exerted by the support at the axis.
:::

:::formula{#rotolamento-puro titolo="Rolling without slipping"}
$$
v_C = \omega R,
\qquad
a_C = \alpha R,
\qquad
K = \frac{1}{2}\left( M + \frac{I_C}{R^2} \right) v_C^2
$$
The body of radius $R$ rolls without slipping, so the contact point has zero velocity. Static friction acts at the contact point and does no work.
:::

:::formula{#rotolamento-piano-inclinato titolo="Rolling down an inclined plane"}
$$
a_C = \frac{g\sin\beta}{1 + k},
\qquad
f = \frac{k}{1 + k}\,M g\sin\beta,
\qquad
v_C = \sqrt{\frac{2 g h}{1 + k}}
$$
The body has $I_C = k M R^2$, with $k = \dfrac{2}{5}$ for a solid sphere, $\dfrac{1}{2}$ for a solid cylinder, and $1$ for a ring. It starts from rest on a plane inclined at $\beta$. Rolling without slipping is possible *only if* $\mu_s \geq \dfrac{k}{1 + k}\tan\beta$. $v_C$ gives the speed after a vertical drop of $h$.
:::

:::formula{#condizioni-di-equilibrio titolo="Static equilibrium of a rigid body"}
$$
\begin{cases}
\vec{R}^{(e)} = \vec{0} \\[4pt]
\vec{\tau}_O^{(e)} = \vec{0}
\end{cases}
$$
$$
F_1\,b_1 = F_2\,b_2
$$
Both conditions must hold together. For forces in a plane they become $R_x = 0$, $R_y = 0$, and $\tau_z = 0$. If the net force is zero, the torque has the same value about every reference point, so the reference point can be chosen where the unknown forces act. The second formula is the equilibrium condition for a lever, with $b_1$ and $b_2$ the moment arms of the two forces about the fulcrum.
:::

## Gravitation

The laws and their consequences are derived in the chapter on [Gravitation](/en/fisica-1/gravitazione/teoria).

:::formula{#legge-di-gravitazione-universale titolo="Law of universal gravitation"}
$$
F = G\,\frac{m_1 m_2}{r^2},
\qquad
G = 6{,}67 \cdot 10^{-11}\,\mathrm{N\cdot m^2/kg^2}
$$
The formula applies to point masses and to spherically symmetric bodies, with $r$ the distance between their centers. The force is attractive and acts along the line joining the centers. With several masses, the forces are added as vectors.
:::

:::formula{#campo-gravitazionale titolo="Gravitational field"}
$$
\vec{g} = \frac{\vec{F}}{m},
\qquad
g = \frac{GM}{r^2}
$$
The second formula gives the magnitude of the field of a point mass or spherical mass $M$ at distance $r$ from the center, outside the mass. The field points toward $M$, and the field of several masses is the vector sum of their fields.
:::

:::formula{#energia-potenziale-gravitazionale titolo="Gravitational potential energy and gravitational potential"}
$$
U(r) = -\,\frac{G M m}{r},
\qquad
V(r) = -\,\frac{GM}{r},
\qquad
L_{A \to B} = G M m \left( \frac{1}{r_B} - \frac{1}{r_A} \right)
$$
Potential energy is zero at infinite distance, so $U < 0$ for every finite $r$. For a system of several masses, $U = -\displaystyle\sum_{i < j} \frac{G m_i m_j}{r_{ij}}$, with one term for each distinct pair.
:::

:::formula{#guscio-e-sfera titolo="Spherical shell and uniform sphere"}
$$
g_{\mathrm{guscio}}(r) =
\begin{cases}
\dfrac{GM}{r^2} & \text{se } r > R \\[10pt]
0 & \text{se } r < R
\end{cases}
\qquad
g_{\mathrm{sfera}}(r) =
\begin{cases}
\dfrac{GM}{r^2} & \text{se } r \geq R \\[10pt]
\dfrac{GM}{R^3}\,r & \text{se } r \leq R
\end{cases}
$$
The shell and sphere are uniform, with mass $M$ and radius $R$. Outside the body, the field is the same as that of a point mass at the center.
:::

:::formula{#variazione-di-g titolo="Gravitational acceleration at the surface, at altitude, and at depth"}
$$
g_0 = \frac{GM}{R^2},
\qquad
g(h) = g_0\,\frac{R^2}{(R + h)^2} \approx g_0 \left( 1 - \frac{2h}{R} \right),
\qquad
g(d) = g_0 \left( 1 - \frac{d}{R} \right)
$$
For Earth, $M_T = 5{,}97 \cdot 10^{24}\,\mathrm{kg}$, $R_T = 6{,}37 \cdot 10^6\,\mathrm{m}$, and $g_0 = 9{,}81\,\mathrm{m/s^2}$, and $GM = g_0 R^2$ holds. The approximation at altitude requires $h$ to be much smaller than $R$. The formula for depth applies to a uniform planet.
:::

:::formula{#orbita-circolare titolo="Speed and period in a circular orbit"}
$$
v = \sqrt{\frac{GM}{r}},
\qquad
T = 2\pi\,\sqrt{\frac{r^3}{GM}},
\qquad
\frac{T^2}{r^3} = \frac{4\pi^2}{GM}
$$
The satellite follows a circular orbit of radius $r$ measured from the center of the planet, and the mass $M$ of the central body is much greater than that of the satellite. The third formula is Kepler's third law, which applies to an elliptical orbit when the semimajor axis replaces $r$. For a geostationary satellite, $r = 4{,}21 \cdot 10^7\,\mathrm{m}$.
:::

:::formula{#energia-di-un-satellite titolo="Energy of a satellite in a circular orbit"}
$$
K = \frac{GMm}{2r},
\qquad
U = -\,\frac{GMm}{r},
\qquad
E = -\,\frac{GMm}{2r}
$$
The formulas apply to a circular orbit, with the zero of $U$ at infinity. The work required to move the satellite from orbit $r_1$ to orbit $r_2 > r_1$ is $\dfrac{GMm}{2}\left(\dfrac{1}{r_1} - \dfrac{1}{r_2}\right)$.
:::

:::formula{#velocita-di-fuga titolo="Escape speed and bound motion"}
$$
v_f = \sqrt{\frac{2GM}{R}} = \sqrt{2 g_0 R},
\qquad
r_{\mathrm{max}} = \frac{GMm}{|E|}
$$
The escape speed refers to the surface of a planet of radius $R$, with the atmosphere and rotation neglected. The motion is bound if $E = \dfrac{1}{2} m v^2 - \dfrac{GMm}{r} < 0$, and in that case the distance from the center does not exceed $r_{\mathrm{max}}$. For $E \geq 0$ the body reaches infinity with speed $\sqrt{\dfrac{2E}{m}}$.
:::

:::formula{#seconda-legge-di-keplero titolo="Kepler's second law"}
$$
\frac{dA}{dt} = \frac{|\vec{L}|}{2m} = \text{costante},
\qquad
r_p v_p = r_a v_a
$$
The areal velocity is constant because the gravitational force is central and angular momentum about the center of attraction is conserved. The second formula relates distances and speeds at perihelion and aphelion, where the velocity is perpendicular to the radius vector.
:::

:::attenzione
The formula $U = mgh$ applies only at altitudes small compared with the radius of the planet. Moving a body from Earth's surface to altitude $h = R_T$ requires $\Delta U = GM_T m\left(\dfrac{1}{R_T} - \dfrac{1}{2R_T}\right) = \dfrac{1}{2}\,m g_0 R_T$, half the value $m g_0 R_T$ given by $mgh$.
:::

## Fluids at rest

The laws of fluid statics are derived in the chapter [Fluid mechanics](/en/fisica-1/fluidi/teoria).

:::formula{#densita-e-pressione titolo="Density, pressure, and units"}
$$
\rho = \frac{m}{V},
\qquad
p = \frac{F_\perp}{A}
$$
$$
1\,\mathrm{atm} = 1{,}013 \cdot 10^5\,\mathrm{Pa} = 760\,\mathrm{mmHg},
\qquad
1\,\mathrm{bar} = 10^5\,\mathrm{Pa}
$$
$F_\perp$ is the component of the force perpendicular to the surface of area $A$. For water, $\rho = 1{,}00 \cdot 10^3\,\mathrm{kg/m^3}$, and for mercury, $13{,}6 \cdot 10^3\,\mathrm{kg/m^3}$.
:::

:::formula{#legge-di-stevino titolo="Stevin's law and gauge pressure"}
$$
p_2 = p_1 + \rho g\,(y_1 - y_2),
\qquad
p = p_0 + \rho g h,
\qquad
p - p_0 = \rho g h
$$
The law applies to an incompressible fluid at rest, with $y$ directed upward and $h$ the depth below the free surface at pressure $p_0$. Points at the same elevation in the same fluid have the same pressure. The difference $p - p_0$ is the gauge pressure, which pressure gauges measure. For a wall with air on the other side, the net force is calculated using the gauge pressure alone.
:::

:::formula{#tubo-a-u-e-barometro titolo="U-tube and barometer"}
$$
\rho_1 h_1 = \rho_2 h_2,
\qquad
p_0 = \rho_{\mathrm{Hg}}\, g h
$$
In a U-tube containing two immiscible liquids, $h_1$ and $h_2$ are the column heights above the interface. In Torricelli's barometer, $h$ is the height of the mercury column above the surface of the reservoir, about $760\,\mathrm{mm}$ at sea level.
:::

:::formula{#forza-su-una-parete titolo="Force on a vertical wall"}
$$
F = \frac{1}{2}\,\rho g w H^2
$$
The wall is rectangular, with width $w$, and the liquid reaches a height of $H$ on one side, with air on the other. The force is obtained by integrating the gauge pressure $\rho g z$ over horizontal strips at depth $z$.
:::

:::formula{#torchio-idraulico titolo="Pascal's principle and the hydraulic press"}
$$
F_2 = \frac{A_2}{A_1}\, F_1,
\qquad
s_2 = \frac{A_1}{A_2}\, s_1
$$
The liquid is incompressible and the pistons, whose masses are negligible, are at the same elevation. The force is multiplied by the ratio of the areas and the displacement is divided by the same ratio, so $F_1 s_1 = F_2 s_2$.
:::

:::formula{#principio-di-archimede titolo="Archimedes' principle and apparent weight"}
$$
S = \rho_f\, V_{\mathrm{imm}}\, g,
\qquad
P_{\mathrm{app}} = P - S = (\rho_c - \rho_f)\, V g
$$
The buoyant force $S$ points vertically upward, with $\rho_f$ the fluid density and $V_{\mathrm{imm}}$ the submerged volume. The apparent-weight formula applies to a fully submerged homogeneous body of density $\rho_c$ and gives $\dfrac{\rho_c}{\rho_f} = \dfrac{P}{P - P_{\mathrm{app}}}$.
:::

:::formula{#condizione-di-galleggiamento titolo="Flotation"}
$$
\frac{V_{\mathrm{imm}}}{V} = \frac{\rho_c}{\rho_f}
$$
The formula applies to a floating homogeneous body, for which $\rho_c < \rho_f$, when forces exerted by the air are neglected. If $\rho_c = \rho_f$, the submerged body is in equilibrium at any depth. If $\rho_c > \rho_f$, it sinks.
:::

## Fluids in motion

The chapter [Fluid mechanics](/en/fisica-1/fluidi/teoria) also covers fluid dynamics, including Bernoulli's theorem and its applications.

:::formula{#equazione-di-continuita titolo="Flow rate and continuity equation"}
$$
Q = \frac{dV}{dt} = A v,
\qquad
A_1 v_1 = A_2 v_2
$$
The velocity is assumed to be uniform across the cross section of area $A$. The continuity equation applies to an incompressible fluid in steady flow. If the diameter of a circular pipe is halved, the speed quadruples.
:::

:::formula{#teorema-di-bernoulli titolo="Bernoulli's theorem"}
$$
p_1 + \frac{1}{2}\rho v_1^2 + \rho g y_1 = p_2 + \frac{1}{2}\rho v_2^2 + \rho g y_2
$$
The theorem applies to an **ideal fluid**, which is incompressible and inviscid, in steady flow. It relates two sections of the same pipe or two points on the same streamline. Setting $v_1 = v_2 = 0$ recovers Stevin's law.
:::

:::formula{#teorema-di-torricelli titolo="Torricelli's theorem"}
$$
v = \sqrt{2 g h},
\qquad
Q = a\sqrt{2gh}
$$
The tank is open to the atmosphere and the hole, with area $a$ much smaller than that of the free surface, is at depth $h$ below the surface. The liquid is ideal. The jet then follows projectile motion.
:::

:::formula{#tubo-di-venturi titolo="Venturi tube"}
$$
v_1 = \sqrt{\frac{2\,\Delta p}{\rho\left( \dfrac{A_1^2}{A_2^2} - 1 \right)}},
\qquad
\Delta p = \rho g\, \Delta h
$$
An ideal fluid flows through a horizontal pipe of cross-sectional area $A_1$ with a constriction of area $A_2 < A_1$, where $\Delta p = p_1 - p_2$. The second formula applies when pressure is measured with two open vertical tubes filled with the same liquid and the liquid levels differ by $\Delta h$.
:::

:::formula{#viscosita-e-poiseuille titolo="Viscosity, Poiseuille's law, and the Reynolds number"}
$$
F = \eta\, A\, \frac{v}{d},
\qquad
Q = \frac{\pi R^4\, \Delta p}{8\, \eta L},
\qquad
\mathrm{Re} = \frac{\rho\, v D}{\eta}
$$
The formulas apply to Newtonian fluids, with $\eta$ expressed in $\mathrm{Pa\cdot s}$. Poiseuille's law applies to a horizontal cylindrical pipe of radius $R$ and length $L$ in steady laminar flow, where $\mathrm{Re}$ is less than about $2000$.
:::

## Temperature, heat, and calorimetry

The definitions and experimental laws are given in the chapter [Temperature, heat and the first law of thermodynamics](/en/fisica-1/primo-principio/teoria).

:::formula{#scale-termometriche titolo="Temperature scales"}
$$
T = t_C + 273{,}15,
\qquad
t_F = \frac{9}{5}\,t_C + 32,
\qquad
\Delta T = \Delta t_C
$$
$T$ is in kelvins, $t_C$ in degrees Celsius, and $t_F$ in degrees Fahrenheit. In formulas containing $T$, such as the gas equation of state, temperature must be in kelvins. In formulas containing $\Delta T$, the two scales give the same value.
:::

:::formula{#dilatazione-termica titolo="Thermal expansion"}
$$
\Delta L = \alpha\, L_0\, \Delta T,
\qquad
\Delta S = 2\alpha\, S_0\, \Delta T,
\qquad
\Delta V = \beta\, V_0\, \Delta T, \quad \beta = 3\alpha
$$
The formulas apply to small temperature changes and to homogeneous, isotropic solids. A hole expands as if it were filled with the same material. If a liquid fills a container to the brim and the two are heated together, a volume $(\beta_{\ell} - 3\alpha_r)\,V_0\,\Delta T$ overflows.
:::

:::formula{#calore-specifico titolo="Heat capacity and specific heat capacity"}
$$
C = \frac{Q}{\Delta T},
\qquad
Q = m\,c\,\Delta T,
\qquad
Q = m \int_{T_i}^{T_f} c(T)\, dT
$$
$Q$ is the heat absorbed, which is positive when the temperature rises. No phase change occurs. The second formula applies when $c$ is constant. For water, $c_a = 4186\,\mathrm{J/(kg\cdot K)}$.
:::

:::formula{#temperatura-di-equilibrio titolo="Equilibrium temperature"}
$$
\sum_i Q_i = 0,
\qquad
T_e = \frac{m_1 c_1 T_1 + m_2 c_2 T_2}{m_1 c_1 + m_2 c_2}
$$
The system is thermally insulated, and the $Q_i$ are the amounts of heat absorbed by the individual bodies. The second formula applies to two bodies with no phase changes. A real calorimeter is included as a mass of water equal to its water equivalent $m_e$.
:::

:::formula{#calore-latente titolo="Latent heat"}
$$
Q = \pm\, m\,\lambda
$$
$$
\lambda_f = 3{,}33 \cdot 10^5\,\mathrm{J/kg},
\qquad
\lambda_v = 2{,}26 \cdot 10^6\,\mathrm{J/kg}
$$
The sign is positive for melting and vaporization and negative for solidification and condensation. During a phase change at constant pressure, the temperature remains constant. The values given are for water at $1\,\mathrm{atm}$. In heat balances involving phase changes, first check whether the available heat is sufficient to complete melting.
:::

:::formula{#propagazione-del-calore titolo="Conduction and radiation"}
$$
P = \frac{Q}{\Delta t} = k\,A\,\frac{T_1 - T_2}{d},
\qquad
P = e\,\sigma\,A\,T^4
$$
Fourier's law applies to a flat wall of thickness $d$ and area $A$ in steady state, with $k$ the thermal conductivity in $\mathrm{W/(m\cdot K)}$. The Stefan–Boltzmann law gives the power radiated by a body at absolute temperature $T$, with $\sigma = 5{,}67 \cdot 10^{-8}\,\mathrm{W/(m^2\cdot K^4)}$ and emissivity $0 \leq e \leq 1$.
:::

## Ideal gas and the first law of thermodynamics

The first law and ideal gas processes are covered in the chapter [Temperature, heat and the first law of thermodynamics](/en/fisica-1/primo-principio/teoria).

:::formula{#equazione-di-stato titolo="Ideal gas equation of state"}
$$
pV = nRT,
\qquad
pV = N k_B T,
\qquad
n = \frac{m}{M}
$$
$$
R = 8{,}314\,\mathrm{J/(mol\cdot K)},
\qquad
N_A = 6{,}022 \cdot 10^{23}\,\mathrm{mol^{-1}},
\qquad
k_B = \frac{R}{N_A} = 1{,}38 \cdot 10^{-23}\,\mathrm{J/K}
$$
The equation applies to equilibrium states, with $p$ in pascals, $V$ in cubic meters, and $T$ in kelvins. $M$ is the molar mass. At $0\,^\circ\mathrm{C}$ and $1\,\mathrm{atm}$, one mole occupies $22{,}4\,\mathrm{L}$.
:::

:::formula{#leggi-dei-gas titolo="Boyle's, Charles's, and Gay-Lussac's laws"}
$$
pV = \text{costante},
\qquad
\frac{V}{T} = \text{costante},
\qquad
\frac{p}{T} = \text{costante}
$$
The three laws apply to a fixed amount of ideal gas at constant temperature, pressure, and volume, respectively. For two states they can be written as $\dfrac{p_1 V_1}{T_1} = \dfrac{p_2 V_2}{T_2}$.
:::

:::attenzione
In the equation of state and in Charles's and Gay-Lussac's laws, temperature must be in kelvins. When a gas at constant volume is taken from $27\,^\circ\mathrm{C}$ to $54\,^\circ\mathrm{C}$, its temperature goes from $300\,\mathrm{K}$ to $327\,\mathrm{K}$, so its pressure increases by about $9\%$ and does not double.
:::

:::formula{#lavoro-termodinamico titolo="Thermodynamic work"}
$$
L = \int_{V_i}^{V_f} p\, dV,
\qquad
L = p\,(V_f - V_i) \ \text{ a pressione costante}
$$
$L$ is the work done by the system in a quasistatic process and is positive during expansion. In the $(V, p)$ plane, the work is the area under the process curve, with the sign of $dV$.
:::

:::formula{#primo-principio titolo="First law of thermodynamics"}
$$
\Delta U = Q - L,
\qquad
dU = \delta Q - \delta L
$$
$Q$ is the heat *absorbed* by the system and $L$ is the work *done* by the system, for a closed system between two equilibrium states. $U$ is a state function, while $Q$ and $L$ depend on the process. In adiabatic processes, $\Delta U = -L$. At constant volume, $\Delta U = Q$. Over a cycle, $Q = L$.
:::

:::formula{#energia-interna-e-calori-molari titolo="Internal energy and molar heat capacities of an ideal gas"}
$$
\Delta U = n\,c_V\,(T_f - T_i),
\qquad
c_p - c_V = R,
\qquad
\gamma = \frac{c_p}{c_V}
$$
$$
\text{monoatomico: } c_V = \frac{3}{2}R, \ \gamma = \frac{5}{3};
\qquad
\text{biatomico: } c_V = \frac{5}{2}R, \ \gamma = \frac{7}{5}
$$
The internal energy of an ideal gas depends only on temperature, so the first formula applies to *every* process, even when the volume changes. The values for diatomic gases apply at room temperature.
:::

:::formula{#trasformazione-isocora-isobara titolo="Isochoric and isobaric processes"}
$$
\text{isocora:} \quad \frac{p}{T} = \text{costante}, \qquad L = 0, \qquad Q = n\,c_V\,\Delta T
$$
$$
\text{isobara:} \quad \frac{V}{T} = \text{costante}, \qquad L = p\,\Delta V = nR\,\Delta T, \qquad Q = n\,c_p\,\Delta T
$$
The formulas apply to $n$ moles of ideal gas in quasistatic processes. In both cases, $\Delta U = n\,c_V\,\Delta T$.
:::

:::formula{#trasformazione-isoterma titolo="Isothermal process"}
$$
pV = \text{costante},
\qquad
\Delta U = 0,
\qquad
Q = L = nRT \ln\frac{V_f}{V_i} = nRT \ln\frac{p_i}{p_f}
$$
The formulas apply to an ideal gas undergoing a quasistatic isothermal process at temperature $T$. The gas absorbs heat during expansion and releases it during compression.
:::

:::formula{#trasformazione-adiabatica titolo="Adiabatic process"}
$$
pV^{\gamma} = \text{costante},
\qquad
TV^{\gamma - 1} = \text{costante},
\qquad
T p^{\frac{1 - \gamma}{\gamma}} = \text{costante}
$$
$$
Q = 0,
\qquad
L = -\Delta U = n\,c_V\,(T_i - T_f) = \frac{p_i V_i - p_f V_f}{\gamma - 1}
$$
The relations in the first line apply to a quasistatic (reversible) adiabatic process in an ideal gas. In an irreversible adiabatic process, $Q = 0$ and $L = n\,c_V\,(T_i - T_f)$ still hold. For expansion against a constant external pressure $p_e$, we have $L = p_e\,(V_f - V_i)$.
:::

:::formula{#cicli-termodinamici titolo="Thermodynamic cycles"}
$$
\Delta U = 0,
\qquad
Q_{\mathrm{tot}} = L_{\mathrm{tot}},
\qquad
L_{\mathrm{rett}} = (p_2 - p_1)(V_2 - V_1)
$$
For a quasistatic cycle, $|L_{\mathrm{tot}}|$ is the area enclosed in the $(V, p)$ plane, and $L_{\mathrm{tot}}$ is positive if the cycle runs clockwise and negative if it runs counterclockwise. The third formula applies to a clockwise rectangular cycle consisting of two isobars and two isochores. The heat exchanged on each leg follows from $Q = \Delta U + L$.
:::

## Second law, heat engines, and entropy

The statements and proofs are given in the chapter [Second law, heat engines and entropy](/en/fisica-1/secondo-principio/teoria).

:::formula{#macchina-termica titolo="Heat engine and efficiency"}
$$
L = Q_{\mathrm{ass}} - Q_{\mathrm{ced}},
\qquad
\eta = \frac{L}{Q_{\mathrm{ass}}} = 1 - \frac{Q_{\mathrm{ced}}}{Q_{\mathrm{ass}}}
$$
$$
L = Q_1 + Q_2,
\qquad
\eta = 1 + \frac{Q_2}{Q_1} = 1 - \frac{|Q_2|}{Q_1}
$$
$Q_{\mathrm{ass}}$ and $Q_{\mathrm{ced}}$ are positive quantities per cycle. In the second line, the engine operates between two reservoirs at $T_1 > T_2$ and $Q_1 > 0$, and $Q_2 < 0$ are the heat transfers signed according to the first-law convention.
:::

:::formula{#frigorifero-e-pompa-di-calore titolo="Refrigerator and heat pump"}
$$
|Q_1| = Q_2 + |L|,
\qquad
\varepsilon = \frac{Q_2}{|L|},
\qquad
\varepsilon_{\mathrm{pc}} = \frac{|Q_1|}{|L|} = \varepsilon + 1
$$
The device absorbs $Q_2 > 0$ from the cold reservoir, delivers $|Q_1|$ to the hot reservoir, and receives work $|L|$ in each cycle. The coefficients of performance can exceed $1$.
:::

:::formula{#rendimento-di-carnot titolo="Carnot cycle"}
$$
\frac{Q_2}{Q_1} = -\frac{T_2}{T_1},
\qquad
\eta_C = 1 - \frac{T_2}{T_1}
$$
$$
\varepsilon_C = \frac{T_2}{T_1 - T_2},
\qquad
\varepsilon_{\mathrm{pc},C} = \frac{T_1}{T_1 - T_2}
$$
The cycle is reversible and exchanges heat with just two reservoirs at temperatures $T_1 > T_2$, expressed in kelvins. For an ideal gas, the amounts of heat exchanged on the isotherms are $Q_1 = nRT_1 \ln\dfrac{V_B}{V_A}$ and $Q_2 = -\,nRT_2 \ln\dfrac{V_C}{V_D}$, with $\dfrac{V_B}{V_A} = \dfrac{V_C}{V_D}$.
:::

:::formula{#teorema-di-carnot titolo="Carnot's theorem and engine balance"}
$$
\eta \leq 1 - \frac{T_2}{T_1},
\qquad
\frac{Q_1}{T_1} + \frac{Q_2}{T_2} \leq 0
$$
The inequalities apply to any engine operating between two reservoirs at $T_1 > T_2$, with equality *only* for reversible engines. An engine whose data fail to satisfy these inequalities violates the second law and therefore cannot exist.
:::

:::attenzione
Temperatures in the Carnot efficiency formula must be in kelvins. Between $500\,^\circ\mathrm{C}$ and $20\,^\circ\mathrm{C}$, the efficiency is $\eta_C = 1 - \dfrac{293{,}15}{773{,}15} \approx 0{,}62$, whereas using the ratio of the Celsius temperatures would give $1 - \dfrac{20}{500} = 0{,}96$.
:::

:::formula{#disuguaglianza-di-clausius titolo="Clausius inequality"}
$$
\sum_{i=1}^{n} \frac{Q_i}{T_i} \leq 0,
\qquad
\oint \frac{\delta Q}{T} \leq 0
$$
The system goes through a cycle. $Q_i$ is the heat absorbed by the system from the reservoir at temperature $T_i$, and $T$ is the temperature of the reservoir supplying $\delta Q$. Equality holds for reversible cycles.
:::

:::formula{#entropia titolo="Entropy"}
$$
S(B) - S(A) = \int_A^B \left( \frac{\delta Q}{T} \right)_{\mathrm{rev}},
\qquad
S(B) - S(A) \geq \int_A^B \frac{\delta Q}{T}
$$
In the definition, the integral is evaluated along any reversible process from $A$ to $B$. For an irreversible process, $\Delta S$ is therefore calculated along a reversible path between the same states. In the inequality, the process can be arbitrary and $T$ is the temperature of the reservoirs. Along a reversible process, $Q = \displaystyle\int T\, dS$ is the area under the curve in the $(S, T)$ plane.
:::

:::formula{#entropia-del-gas-perfetto titolo="Entropy change of an ideal gas"}
$$
\Delta S = n c_V \ln\frac{T_B}{T_A} + nR \ln\frac{V_B}{V_A} = n c_p \ln\frac{T_B}{T_A} - nR \ln\frac{p_B}{p_A}
$$
The formula applies between two equilibrium states for any process, including an irreversible one, because $S$ is a state function. In the free expansion of $n$ moles to twice the initial volume, $\Delta S = nR\ln 2$, even though $Q = 0$.
:::

:::formula{#entropia-casi-particolari titolo="Entropy in ideal gas processes"}
$$
\begin{aligned}
&\text{isoterma:} && \Delta S = nR \ln\frac{V_B}{V_A} = \frac{Q}{T} \\[4pt]
&\text{isocora:} && \Delta S = n c_V \ln\frac{T_B}{T_A} \\[4pt]
&\text{isobara:} && \Delta S = n c_p \ln\frac{T_B}{T_A} \\[4pt]
&\text{adiabatica reversibile:} && \Delta S = 0
\end{aligned}
$$
The formulas follow from the change in entropy of an ideal gas. The equality $\Delta S = \dfrac{Q}{T}$ for an isothermal process requires a reversible path.
:::

:::formula{#entropia-di-corpi-e-serbatoi titolo="Entropy of reservoirs, bodies, and phase changes"}
$$
\Delta S_{\mathrm{serb}} = \frac{Q}{T},
\qquad
\Delta S_{\mathrm{corpo}} = m c \ln\frac{T_B}{T_A},
\qquad
\Delta S = \pm\,\frac{m \lambda}{T}
$$
$Q$ is the heat absorbed by the reservoir at constant temperature $T$. The second formula applies to a body with constant specific heat capacity $c$ taken from $T_A$ to $T_B$. The third applies to a phase change at temperature $T$, with a positive sign for melting and vaporization.
:::

:::formula{#aumento-dell-entropia titolo="Principle of entropy increase"}
$$
\Delta S_{\mathrm{u}} = \sum \Delta S \geq 0
$$
The inequality applies to an isolated system, particularly to the universe consisting of the system and all reservoirs and bodies with which it interacts. Equality holds *only* for reversible processes. For heat $Q$ flowing from a reservoir at $T_1$ to a reservoir at $T_2 < T_1$, we have $\Delta S_{\mathrm{u}} = Q\left(\dfrac{1}{T_2} - \dfrac{1}{T_1}\right) > 0$.
:::

:::formula{#lavoro-perso titolo="Entropy and lost work"}
$$
\Delta S_{\mathrm{u}} = -\frac{Q_1}{T_1} - \frac{Q_2}{T_2},
\qquad
L_{\mathrm{rev}} - L = T_2\, \Delta S_{\mathrm{u}}
$$
The formulas apply to an engine that absorbs $Q_1 > 0$ from the reservoir at $T_1$ and exchanges $Q_2 < 0$ with the reservoir at $T_2$ in one cycle. The entropy of the working fluid does not change over the cycle. $L_{\mathrm{rev}} = Q_1\left(1 - \dfrac{T_2}{T_1}\right)$ is the work done by a reversible engine that absorbs the same $Q_1$.
:::
