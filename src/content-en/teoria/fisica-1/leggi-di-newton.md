---
titolo: Newton's laws and forces
sommario: The three laws of dynamics, the forces that appear in mechanics problems (weight, constraint force, tension, friction, elastic force) and the method for writing and solving the equation of motion of a body or of a system of bodies, also in circular motion and in noninertial reference frames.
---

## Forces and Newton's first law

:::definizione{#forza titolo="Force"}
A **force** is a vector quantity that describes the action of one body on another, capable of changing its state of motion or of deforming it. It is specified by magnitude, direction, sense and point of application. In the International System the magnitude is measured in newtons, with $1\,\mathrm{N} = 1\,\mathrm{kg\cdot m/s^2}$.

In this topic bodies are treated as **point particles**, that is, their size and rotations are neglected and all forces are considered applied at the same point; the case in which the point of application matters is treated in the topic on rigid body dynamics.
:::

:::teorema{#principio-di-sovrapposizione titolo="Principle of superposition of forces"}
If the forces $\vec{F}_1, \vec{F}_2, \dots, \vec{F}_n$ act simultaneously on a point particle, the effect on the motion is the same as that which the single force
$$
\vec{R} = \vec{F}_1 + \vec{F}_2 + \dots + \vec{F}_n ,
$$
called the **net force**, would produce. It is an experimental principle, and it states that forces behave as vectors and add by the parallelogram rule. In components $R_x = \sum_i F_{ix}$ and $R_y = \sum_i F_{iy}$. For example a force of $3.0\,\mathrm{N}$ along $x$ and one of $4.0\,\mathrm{N}$ along $y$ have a net force of magnitude $\sqrt{3.0^2 + 4.0^2}\,\mathrm{N} = 5.0\,\mathrm{N}$, which forms with the $x$ axis the angle $\arctan \dfrac{4}{3} \approx 53^\circ$.

::grafico{vettori="0,0,3,0,F₁;0,0,0,4,F₂;0,0,3,4,R" segmenti="3,0,3,4;0,4,3,4" xmin=-0.8 xmax=4.6 ymin=-0.6 ymax=4.6 uguale=1 titolo="The forces $\vec{F}_1$ of $3\,\mathrm{N}$ and $\vec{F}_2$ of $4\,\mathrm{N}$ have net force $\vec{R}$ of magnitude $5\,\mathrm{N}$, the diagonal of the parallelogram"}

:::

:::definizione{#sistema-inerziale titolo="Inertial reference frame"}
A point particle is called **isolated** if the net force acting on it is zero. A reference frame is called **inertial** if in it every isolated point particle has constant velocity, that is, it remains at rest or moves in uniform straight-line motion.

A frame that translates with constant velocity relative to an inertial frame is also inertial, because by the Galilean transformations the accelerations in the two frames coincide. A frame attached to the ground is inertial to a good approximation, since the acceleration due to the Earth's rotation is at most $0.034\,\mathrm{m/s^2}$, about $0.34\%$ of $g$.
:::

:::teorema{#primo-principio titolo="Newton's first law"}
Inertial reference frames exist. In an inertial frame a point particle subject to zero net force remains at rest, if it was at rest, or moves in uniform straight-line motion.

This is the **law of inertia**, a principle of mechanics, that is, a statement assumed to be true because all its consequences are confirmed by experiments. It states that a force is needed to *change* the velocity of a body, while to keep it constant it is enough for the net force to be zero; indeed a hockey puck on ice slows down less the smaller the friction is. The first law also identifies the frames in which the second and third laws hold.
:::

## Second law, mass and weight

:::teorema{#secondo-principio titolo="Newton's second law"}
In an inertial reference frame, a point particle of mass $m$ subject to the net force $\vec{R}$ has acceleration $\vec{a}$ such that
$$
\vec{R} = m\,\vec{a} .
$$
It is a principle of mechanics, confirmed by experiments. The **inertial mass** $m$, measured in kilograms, expresses the resistance of the body to changing its velocity, and indeed for the same force the acceleration is inversely proportional to the mass. The vector equation is equivalent to one equation for each component, to be satisfied simultaneously:
$$
\begin{cases}
R_x = m\,a_x \\[4pt]
R_y = m\,a_y
\end{cases}
$$
For example a $3.0\,\mathrm{kg}$ crate on a smooth floor, pushed by a horizontal force of $12\,\mathrm{N}$, has acceleration $a = \dfrac{12\,\mathrm{N}}{3.0\,\mathrm{kg}} = 4.0\,\mathrm{m/s^2}$ in the direction and sense of the force.
:::

:::richiamo{titolo="Derivative and integral in motion"}
Acceleration is the derivative of velocity and velocity is the derivative of position: $\vec{a} = \dfrac{d\vec{v}}{dt}$, $\vec{v} = \dfrac{d\vec{r}}{dt}$. Therefore the second law is a differential equation for the equation of motion. If the force is constant, integrating twice with respect to time one obtains uniformly accelerated motion, $x(t) = x_0 + v_0 t + \dfrac{1}{2} a t^2$. For derivatives and integrals see the Mathematical Analysis 1 topics on derivatives and on integrals, and for uniformly accelerated motion see the topic on kinematics in one dimension.
:::

:::definizione{#peso titolo="Weight"}
Near the Earth's surface every body of mass $m$ is subject to the **weight**
$$
\vec{P} = m\,\vec{g} ,
$$
directed vertically downward, with $g = 9.81\,\mathrm{m/s^2}$. Mass is a scalar and does not depend on location; weight is a vector and depends on the local value of $g$. A $70\,\mathrm{kg}$ person weighs $687\,\mathrm{N}$ on the Earth and $113\,\mathrm{N}$ on the Moon, where $g = 1.62\,\mathrm{m/s^2}$. Since weight is proportional to mass, in the absence of air resistance *all* bodies fall with the same acceleration $\vec{g}$; the origin of weight is the subject of the topic on gravitation.
:::

:::teorema{#equilibrio-del-punto titolo="Equilibrium of a point particle"}
A point particle at rest in an inertial frame has zero acceleration, therefore by the second law the net force is zero. In components the equilibrium condition is
$$
\begin{cases}
R_x = 0 \\[4pt]
R_y = 0
\end{cases}
$$
The two equations make it possible to find unknown forces, such as tensions and constraint forces. A $2.0\,\mathrm{kg}$ body hanging at rest from a vertical string is subject to its weight and to the tension $T$ of the string, therefore equilibrium along the vertical gives $T - mg = 0$, that is, $T = 19.6\,\mathrm{N}$.
:::

## Third law and constraint forces

:::teorema{#terzo-principio titolo="Newton's third law"}
If a body $A$ exerts on a body $B$ the force $\vec{F}_{AB}$, then $B$ exerts on $A$ the force
$$
\vec{F}_{BA} = -\,\vec{F}_{AB} ,
$$
with the same line of action. This is the **law of action and reaction**, a principle of mechanics confirmed by experiments. The two forces of the pair act on *different* bodies, so only one of them appears in the equation of motion of a single body. A $0.10\,\mathrm{kg}$ apple attracts the Earth with a force of $0.98\,\mathrm{N}$, equal and opposite to its weight; given the mass of the Earth, $5.97 \cdot 10^{24}\,\mathrm{kg}$, the resulting acceleration of the Earth is of the order of $10^{-25}\,\mathrm{m/s^2}$.
:::

:::definizione{#reazione-vincolare titolo="Constraint force"}
A **constraint** is a body that limits the possible movements of another body, such as a supporting surface or a guide. The force that the constraint exerts is the **constraint force**; its magnitude is the one needed to prevent the forbidden movements and is obtained from the equations of motion.

A **smooth** surface exerts a force perpendicular to the surface, called the normal force and denoted by $\vec{N}$. A supporting surface can only push, therefore $N \geq 0$; the condition $N = 0$ indicates that the body detaches from the surface. For a book at rest on a horizontal table equilibrium gives $N = mg$.
:::

:::attenzione
The weight of a book resting on the table and the normal force of the table do *not* form an action-reaction pair, because they act on the same body. The reaction to the weight of the book is the force with which the book attracts the Earth; the reaction to $\vec{N}$ is the force with which the book presses on the table. In an elevator accelerating upward the normal force exceeds the weight, while the two forces of a third-law pair always have the same magnitude.
:::

:::definizione{#diagramma-di-corpo-libero titolo="Free-body diagram"}
The **free-body diagram** is the drawing of a single body, represented as a point, with all and only the forces that *act on it*. The forces that the body exerts on other bodies do not appear.

A $2.0\,\mathrm{kg}$ cart on a smooth horizontal floor is pushed with a force of $10\,\mathrm{N}$ inclined $30^\circ$ downward. Along the vertical the acceleration is zero, therefore $N - mg - F \sin 30^\circ = 0$ and $N = 19.6\,\mathrm{N} + 5.0\,\mathrm{N} = 24.6\,\mathrm{N}$; along the horizontal $F \cos 30^\circ = m a$, from which $a = 4.33\,\mathrm{m/s^2}$.

::grafico{assi=0 uguale=1 punti="0,0,pieno" vettori="0,0,0,-1.962,P;-0.866,0.5,0,0,F;0,0,0,2.462,N" segmenti="-1.4,0.808,-0.866,0.5;-1.5,0,0,0" etichette="-1.25,0.13,30°" riferimento="1.6,-1.6,0,0.9,x,y" xmin=-2.6 xmax=2.8 ymin=-2.3 ymax=2.8 titolo="Free-body diagram of the cart, with the arrows to scale: $N = mg + F \sin 30^\circ$, therefore the normal force exceeds the weight"}

:::

:::osservazione{#metodo-equazione-del-moto titolo="How a dynamics problem is set up"}
The solution of a dynamics problem always follows the same steps.

1. The body to be studied and an inertial reference frame are chosen.
2. The free-body diagram is drawn with all the forces acting on the body.
3. The axes are chosen, with one axis along the direction of the acceleration when this is known (along the supporting surface, toward the center of a circular trajectory).
4. The second law is written in components, with one equation for each axis.
5. The system is solved for the unknowns, first in symbolic form and then with the numerical values.

With these axes one component of the acceleration is zero, and the corresponding equation gives the constraint force.
:::

## Ideal strings and pulleys

:::definizione{#tensione titolo="Tension of a string"}
A taut string exerts on each of the bodies to which it is attached a force directed along the string, pointing from the body toward the string, because a string can only pull. The magnitude of this force is the **tension** $T$. An **ideal string** is inextensible and of negligible mass. Since it is inextensible, two bodies connected by a taut string travel equal distances along the string, therefore they have velocities and accelerations of equal magnitude.
:::

::::teorema{#tensione-filo-ideale titolo="Tension along an ideal string"}
In a taut ideal string the tension has the same value at every point. In particular the two ends of the string exert forces of equal magnitude on the connected bodies, even when the system accelerates.

Thanks to this result, in a problem with an ideal string a single unknown $T$ appears for the whole string.

:::dimostrazione
Consider a straight segment of string of mass $m_f$, accelerating with acceleration $a$ along the string. On the segment act the forces exerted by the rest of the system at the two ends, of magnitudes $T_1$ and $T_2$ and opposite senses, therefore the second law along the string gives
$$
T_2 - T_1 = m_f\,a .
$$
For an ideal string $m_f = 0$, so $T_2 - T_1 = 0$ whatever $a$ is. Since the segment is arbitrary, the tension is the **same** at every point of the string.
:::
::::

:::definizione{#carrucola-ideale titolo="Ideal pulley"}
An **ideal pulley** has negligible mass and rotates without friction about its own axis. An ideal string passing over an ideal pulley changes direction and keeps the magnitude of the tension; the justification uses the second cardinal equation, for which see the topic on rigid body dynamics.

A fixed pulley therefore changes the direction of the force and leaves its magnitude unchanged. With a movable pulley, from which the body hangs, the pulley is supported by *two* segments of the same string, therefore at equilibrium $2T = mg$ and the required force is halved, $T = \dfrac{mg}{2}$.
:::

:::esempio{titolo="Body hanging from two strings"}
A $4.0\,\mathrm{kg}$ body hangs at rest from two ideal strings that both form an angle of $30^\circ$ with the horizontal. By symmetry the two strings have the same tension $T$, the horizontal components cancel and along the vertical equilibrium gives
$$
2\,T \sin 30^\circ - mg = 0
\quad\Longrightarrow\quad
T = \frac{mg}{2 \sin 30^\circ} = mg = 39.2\,\mathrm{N} .
$$
The closer the strings are to the horizontal, the smaller the sine of the angle they form with the horizontal and the larger the tension.

::grafico{assi=0 uguale=1 linee="-4.83,2.5 4.83,2.5;0,0 -4.33,2.5;0,0 4.33,2.5" punti="0,0,pieno" vettori="0,0,-3.398,1.962,T;0,0,3.398,1.962,T;0,0,0,-3.924,P" segmenti="-1.8,0,1.8,0" etichette="-1.6,0.25,30°;1.1,0.25,30°" riferimento="3.2,-3.4,0,0.9,x,y" xmin=-5.0 xmax=5.0 ymin=-4.3 ymax=2.9 titolo="The two tensions have vertical components $T \sin 30^\circ$ that together balance the weight"}

:::

## Sliding friction

:::definizione{#attrito-radente titolo="Sliding friction force"}
When two rough surfaces are in contact, each exerts on the other, in addition to the normal force $\vec{N}$, a force parallel to the contact surface: the **sliding friction force**. Two situations are distinguished.

- **Static friction**: the surfaces do not slide over each other. The friction force $\vec{f}_s$ opposes the sliding that the other forces would tend to produce, and its magnitude takes the value needed to keep the body at rest relative to the surface.
- **Kinetic friction**: the surfaces slide. The friction force $\vec{f}_d$ points opposite to the velocity of the body relative to the surface.
:::

:::teorema{#leggi-dell-attrito titolo="Laws of sliding friction"}
The magnitude of the friction force satisfies the relations
$$
f_s \leq \mu_s\,N ,
\qquad
f_d = \mu_d\,N ,
$$
where $\mu_s$ and $\mu_d$ are the **coefficients of static and kinetic friction**, dimensionless numbers that depend on the materials and on the condition of the surfaces, with in general $\mu_d < \mu_s$. They are approximate experimental laws; to good precision friction depends neither on the contact area nor, for kinetic friction, on the velocity.

The laws make it possible to determine whether a body moves. If the static friction needed for equilibrium does not exceed $\mu_s N$ the body remains at rest, otherwise it slides and the friction equals $\mu_d N$. A $5.0\,\mathrm{kg}$ crate on a horizontal floor with $\mu_s = 0.40$ and $\mu_d = 0.30$ has $N = mg = 49.1\,\mathrm{N}$, therefore static friction can reach $\mu_s N = 19.6\,\mathrm{N}$. A horizontal push of $15\,\mathrm{N}$ does not move it, and static friction equals $15\,\mathrm{N}$; a push of $25\,\mathrm{N}$ sets it in motion, friction becomes $\mu_d N = 14.7\,\mathrm{N}$ and the acceleration is $\dfrac{25\,\mathrm{N} - 14.7\,\mathrm{N}}{5.0\,\mathrm{kg}} = 2.06\,\mathrm{m/s^2}$.

::grafico{f="x<=19.62?x:(x>19.7?14.715:NaN)" punti="19.62,19.62,pieno;19.62,14.715,vuoto" segmenti="19.62,0,19.62,14.715" etichette="20.2,20.6,μs·N;23,16.4,μd·N" nomi="F,f" xmin=0 xmax=30 ymin=0 ymax=24 titolo="Friction force $f$ as a function of the horizontal push $F$, in newtons, for the crate with $\mu_s N = 19.6\,\mathrm{N}$ and $\mu_d N = 14.7\,\mathrm{N}$"}

:::

:::osservazione{#attrito-come-forza-motrice titolo="Static friction as a driving force"}
Friction opposes the *relative* sliding of the surfaces, and for this reason it can point in the direction of motion. A crate resting on the bed of an accelerating truck is dragged forward by the static friction of the bed; a car accelerates because the ground exerts on the tires, which push backward on the asphalt, a forward static friction force.
:::

## Inclined plane

::::teorema{#piano-inclinato titolo="Body on a smooth inclined plane"}
A point particle of mass $m$ resting on a smooth inclined plane, with inclination $\alpha$ to the horizontal, is subject only to its weight and to the normal force. Then
$$
N = m g \cos\alpha ,
\qquad
a = g \sin\alpha ,
$$
with the acceleration directed down along the plane. The acceleration does not depend on the mass and varies between $0$ (horizontal plane) and $g$ (vertical plane, free fall). On a smooth plane inclined at $30^\circ$ every body slides down with $a = 9.81 \cdot \dfrac{1}{2}\,\mathrm{m/s^2} = 4.91\,\mathrm{m/s^2}$.

::grafico{assi=0 uguale=1 poligoni="0,0 6,0 0,3.464;1.949,2.339 2.555,1.989 2.905,2.595 2.299,2.945" vettori="2.427,2.467,2.427,0.467,P;2.427,2.467,3.293,3.967,N" segmenti="2.427,2.467,3.293,1.967;2.427,2.467,1.561,0.967;2.427,0.467,3.293,1.967;2.427,0.467,1.561,0.967" riferimento="4.1,3.3,-30,1.1,x,y" etichette="3.45,1.75,mg sin α;0.3,1.0,mg cos α;5.0,0.12,α" xmin=-0.4 xmax=6.4 ymin=-0.4 ymax=4.4 titolo="With the $x$ axis along the plane and the $y$ axis perpendicular, the weight decomposes into $mg\sin\alpha$ along the plane and $mg\cos\alpha$ perpendicular to the plane, which the normal force balances"}

:::dimostrazione
The $x$ axis is chosen along the plane, with positive sense pointing down, and the $y$ axis perpendicular to the plane, pointing outward. The angle between the weight and the direction perpendicular to the plane is equal to $\alpha$, because the two angles have respectively perpendicular sides; so the components of the weight are $P_x = mg\sin\alpha$ and $P_y = -mg\cos\alpha$. The normal force has only the component $N_y = N$. The body stays on the plane, therefore $a_y = 0$, and the second law in components gives
$$
\begin{cases}
m g \sin\alpha = m\,a \\[4pt]
N - m g \cos\alpha = 0
\end{cases}
$$
from which the two formulas follow.
:::
::::

::::teorema{#piano-inclinato-con-attrito titolo="Inclined plane with friction"}
A point particle slides along a plane inclined at $\alpha$, with coefficient of kinetic friction $\mu_d$. Then the acceleration along the plane has magnitude
$$
a_{\text{down}} = g\,(\sin\alpha - \mu_d \cos\alpha)
$$
if the body slides down, and it is directed downward; it has magnitude
$$
a_{\text{up}} = g\,(\sin\alpha + \mu_d \cos\alpha)
$$
if the body moves up, and in this case too it is directed downward, therefore the body slows down. On a $30^\circ$ plane with $\mu_d = 0.20$ a body slides down with $a = 9.81\,(0.500 - 0.173)\,\mathrm{m/s^2} = 3.21\,\mathrm{m/s^2}$.

:::dimostrazione
With the axes of the smooth inclined plane, the equation along $y$ is the same and gives $N = mg\cos\alpha$, therefore kinetic friction has magnitude $f_d = \mu_d N = \mu_d m g \cos\alpha$ and is directed along the plane, opposite to the velocity. If the body slides down, friction points up and the equation along the $x$ axis, oriented downward, is $mg\sin\alpha - \mu_d mg\cos\alpha = m a$. If the body moves up, friction points down like the component of the weight, and the downward component of the acceleration satisfies $mg\sin\alpha + \mu_d mg\cos\alpha = m a$. Dividing by $m$ one obtains the two formulas.
:::
::::

::::teorema{#angolo-limite titolo="Angle of repose"}
A body at rest on a plane inclined at $\alpha$, with coefficient of static friction $\mu_s$, remains at rest if and only if
$$
\tan\alpha \leq \mu_s .
$$
The angle $\alpha_{\lim} = \arctan \mu_s$ does not depend on the mass and makes it possible to measure $\mu_s$, by gradually tilting the plane until the body starts to move. If sliding begins at $22^\circ$, then $\mu_s = \tan 22^\circ = 0.40$.

:::dimostrazione
At equilibrium the acceleration is zero. Along the perpendicular to the plane one has $N = mg\cos\alpha$; along the plane static friction must balance the component of the weight, therefore $f_s = mg\sin\alpha$. By the law of static friction equilibrium is possible if and only if $f_s \leq \mu_s N$, that is, $mg\sin\alpha \leq \mu_s\,mg\cos\alpha$. Since $\cos\alpha > 0$ for $0 \leq \alpha < 90^\circ$, dividing by $mg\cos\alpha$ one obtains $\tan\alpha \leq \mu_s$.
:::
::::

## Elastic force

:::teorema{#legge-di-hooke titolo="Hooke's law"}
An ideal spring, of negligible mass, stretched or compressed by $x$ relative to its rest length, exerts on the body attached to its end the force
$$
F_x = -k\,x ,
$$
where the $x$ axis is along the spring, with the origin at the position of the end at rest. The constant $k > 0$ is the **spring constant** and is measured in $\mathrm{N/m}$. It is an experimental law, valid as long as the deformation remains within the elastic limit of the material.

The minus sign indicates that the force is a restoring force, because the stretched spring pulls toward the rest position and the compressed one pushes toward it. The law is the basis of the **dynamometer** and of harmonic motion, for which see the topic on oscillations. A $0.50\,\mathrm{kg}$ body hanging from a spring with $k = 200\,\mathrm{N/m}$ is in equilibrium when $kx = mg$, that is, with an extension $x = \dfrac{mg}{k} = 2.45\,\mathrm{cm}$.

::grafico{f="-2*x" nomi="x,F" etichette="0.15,-4.4,stretched spring: F < 0;-2.45,1.2,compressed spring: F > 0" xmin=-2.5 xmax=2.5 ymin=-5.2 ymax=5.2 titolo="The elastic force $F_x = -kx$ is proportional to the deformation and opposite in sense"}

:::

::::teorema{#molle-in-serie-e-parallelo titolo="Springs in series and in parallel"}
Two ideal springs with constants $k_1$ and $k_2$ are equivalent to a single spring with constant
$$
k_{\text{par}} = k_1 + k_2
$$
if they are connected in parallel, that is, side by side and with the same extension, and with constant $k_{\text{ser}}$ such that
$$
\frac{1}{k_{\text{ser}}} = \frac{1}{k_1} + \frac{1}{k_2}
$$
if they are connected in series, that is, one after the other. Two equal springs with constant $k$ in parallel are equivalent to a spring with constant $2k$, in series to a spring with constant $\dfrac{k}{2}$.

:::dimostrazione
In parallel the two springs have the same extension $x$ and the total force on the body is the sum of the two elastic forces, $k_1 x + k_2 x = (k_1 + k_2)\,x$. In series, since the springs have negligible mass, the argument for the tension along an ideal string shows that both are stretched by the same force $F$; therefore the extensions are $x_1 = \dfrac{F}{k_1}$ and $x_2 = \dfrac{F}{k_2}$, and the total extension is
$$
x = x_1 + x_2 = F \left( \frac{1}{k_1} + \frac{1}{k_2} \right) ,
$$
which is that of a spring with constant $k_{\text{ser}}$.
:::
::::

## Dynamics of circular motion

::::teorema{#forza-centripeta titolo="Centripetal force"}
A point particle of mass $m$ in uniform circular motion, on a circle of radius $r$ with velocity of magnitude $v$ and angular velocity $\omega$, is subject to a net force directed toward the center, of magnitude
$$
F_c = m\,\frac{v^2}{r} = m\,\omega^2 r .
$$
In nonuniform circular motion the radial component of the net force still has magnitude $m\dfrac{v^2}{r}$, and in addition the tangential component equals $m\,a_t$.

The name **centripetal force** denotes the radial component of the net force, which is always provided by forces already known: the tension of a string, friction, the constraint force, the weight. A $0.20\,\mathrm{kg}$ stone rotating on a smooth table, tied to a $0.80\,\mathrm{m}$ string, with velocity $10\,\mathrm{m/s}$, requires a tension $T = 0.20 \cdot \dfrac{10^2}{0.80}\,\mathrm{N} = 25\,\mathrm{N}$.

:::dimostrazione
By the kinematics of uniform circular motion the acceleration is directed toward the center and has magnitude $a_c = \dfrac{v^2}{r} = \omega^2 r$. The second law $\vec{R} = m\,\vec{a}$ states that the net force has the direction and sense of the acceleration, therefore it points toward the center, and it has magnitude $m\,a_c$. In nonuniform motion the same argument applies component by component.
:::
::::

:::richiamo{titolo="Centripetal acceleration"}
In uniform circular motion of radius $r$ the acceleration is directed toward the center and has magnitude $a_c = \dfrac{v^2}{r} = \omega^2 r$, with $v = \omega r$. The proof is found in the topic on motion in a plane.
:::

::::teorema{#curva-piana titolo="Curve on a level road"}
A car travels at constant speed around a circular curve of radius $r$ on a level road, with coefficient of static friction $\mu_s$ between tires and asphalt. The curve is traveled without skidding if and only if
$$
v \leq v_{\max} = \sqrt{\mu_s\,g\,r} .
$$
The maximum speed does not depend on the mass of the car and grows with the radius and with the grip. With $r = 50\,\mathrm{m}$ and $\mu_s = 0.80$ (dry asphalt) one obtains $v_{\max} = \sqrt{0.80 \cdot 9.81 \cdot 50}\,\mathrm{m/s} = 19.8\,\mathrm{m/s}$, about $71\,\mathrm{km/h}$.

:::dimostrazione
The forces on the car are its weight, the normal force and static friction. The tires do not skid sideways, therefore friction is static; since it is the only horizontal force, it is friction that provides the centripetal force. The second law along the vertical and along the radial direction gives
$$
\begin{cases}
N - m g = 0 \\[4pt]
f_s = m\,\dfrac{v^2}{r}
\end{cases}
$$
The law of static friction requires $f_s \leq \mu_s N$, that is, $m\dfrac{v^2}{r} \leq \mu_s m g$, which is equivalent to $v^2 \leq \mu_s g r$.
:::
::::

::::teorema{#curva-sopraelevata titolo="Banked curve"}
A circular curve of radius $r$ has its roadway inclined at an angle $\alpha$ toward the center. In the absence of friction a vehicle travels around it without sliding inward or outward if and only if its speed is
$$
v = \sqrt{g\,r \tan\alpha} .
$$
This is the design speed of the curve; at other speeds friction provides the difference. With $r = 100\,\mathrm{m}$ and a design speed of $20\,\mathrm{m/s}$ one needs $\tan\alpha = \dfrac{v^2}{g r} = 0.408$, that is, $\alpha = 22^\circ$.

::grafico{assi=0 uguale=1 poligoni="-2.6,-1.501 2,1.155 2,-2.4 -2.6,-2.4" vettori="0,0,0,-2,P;0,0,-1.155,2,N;0,0,-1.155,0,R" segmenti="-1.155,2,-1.155,0;0,0,1.6,0" punti="0,0,pieno" etichette="-3.3,-0.45,toward the center;1.05,0.18,α" xmin=-3.4 xmax=2.4 ymin=-2.6 ymax=2.6 titolo="On the banked curve the net force $\vec{R}$ of $\vec{P}$ and $\vec{N}$ is horizontal and directed toward the center"}

:::dimostrazione
The only forces are the weight and the normal force, which is perpendicular to the roadway and therefore forms the angle $\alpha$ with the vertical. The acceleration is centripetal and horizontal, therefore along the vertical the net force is zero and along the horizontal it equals $m\dfrac{v^2}{r}$:
$$
\begin{cases}
N \cos\alpha = m g \\[4pt]
N \sin\alpha = m\,\dfrac{v^2}{r}
\end{cases}
$$
Dividing the second equation by the first one obtains $\tan\alpha = \dfrac{v^2}{g r}$, from which the formula follows.
:::
::::

::::teorema{#giro-della-morte titolo="Loop-the-loop"}
A point particle travels along the inside of a vertical circular track of radius $r$. At the highest point of the track the body remains in contact with the track if and only if
$$
v \geq \sqrt{g\,r} .
$$
At the lowest point the force of the track is $N = m g + m\dfrac{v^2}{r}$, greater than the weight. The same result holds for a body rotating in a vertical plane tied to a string, with the tension in place of the normal force. In a loop-the-loop of radius $4.0\,\mathrm{m}$ the speed at the highest point must be at least $\sqrt{9.81 \cdot 4.0}\,\mathrm{m/s} = 6.26\,\mathrm{m/s}$. The relation between the speeds at the bottom and at the top is derived in the topic on work and energy.

::grafico{assi=0 uguale=1 curve="2*cos(t),2*sin(t),0,6.29" vettori="-0.3,2,-0.3,1,P;0.3,2,0.3,1.2,N;-0.3,-2,-0.3,-3,P;0.3,-2,0.3,-0.2,N" punti="0,0,pieno,C;0,2,pieno;0,-2,pieno" xmin=-3.2 xmax=3.2 ymin=-3.3 ymax=2.6 titolo="At the highest point $\vec{P}$ and $\vec{N}$ both point toward the center $C$; at the lowest point $\vec{N}$ exceeds the weight"}

:::dimostrazione
At the highest point the weight and the force of the track are both directed downward, that is, toward the center. Their sum provides the centripetal force:
$$
N + m g = m\,\frac{v^2}{r}
\quad\Longrightarrow\quad
N = m\,\frac{v^2}{r} - m g .
$$
The track can only push, therefore there is contact if and only if $N \geq 0$, that is, $v^2 \geq g r$. At the lowest point the center is above, therefore the component of the net force toward the center is $N - mg = m\dfrac{v^2}{r}$.
:::
::::

## Systems of connected bodies

:::osservazione{#corpi-collegati titolo="Bodies connected by a string"}
When several bodies are connected by ideal strings, the second law is written for *each* body separately, each along its own direction of motion. The equations are linked by two conditions.

- The string is inextensible, therefore all the bodies have acceleration of equal magnitude $a$; it is convenient to choose on each body the positive sense in agreement with the sense in which the string moves.
- The string and the pulleys are ideal, therefore the tension $T$ is the same along the whole string.

One obtains a system with as many equations as there are unknowns, usually $a$ and $T$. When there is friction, the sense of motion must be determined before writing the equations, because the sense of friction depends on it.
:::

:::osservazione{#blocchi-a-contatto titolo="System treated as a single body"}
If several bodies move together with the same acceleration, the forces they exchange are internal forces and by the third law they cancel in pairs in the sum. The common acceleration is then
$$
a = \frac{F_{\text{ext}}}{m_{\text{tot}}} ,
$$
where $F_{\text{ext}}$ is the net force of the external forces alone along the direction of motion. The internal forces are then found by applying the second law to a single body. Two blocks in contact on a smooth surface, of $2.0\,\mathrm{kg}$ and $1.0\,\mathrm{kg}$, pushed by a force of $12\,\mathrm{N}$ applied to the first, accelerate with $a = 4.0\,\mathrm{m/s^2}$; the second block is accelerated only by the push of the first, which therefore equals $1.0\,\mathrm{kg} \cdot 4.0\,\mathrm{m/s^2} = 4.0\,\mathrm{N}$.
:::

::::teorema{#macchina-di-atwood titolo="Atwood machine"}
Two bodies of masses $m_1 > m_2$ hang from the two ends of an ideal string that passes over a fixed ideal pulley. Then the body of mass $m_1$ descends and the system moves with
$$
a = \frac{m_1 - m_2}{m_1 + m_2}\,g ,
\qquad
T = \frac{2\,m_1 m_2}{m_1 + m_2}\,g .
$$
The limiting cases confirm the formulas: with $m_1 = m_2$ one has $a = 0$ and $T = m g$, that is, equilibrium; with $m_2 = 0$ one has $a = g$ and $T = 0$, that is, free fall. With $m_1 = 3.0\,\mathrm{kg}$ and $m_2 = 2.0\,\mathrm{kg}$ one obtains $a = \dfrac{1}{5}\,g = 1.96\,\mathrm{m/s^2}$ and $T = 23.5\,\mathrm{N}$, a value between the two weights $19.6\,\mathrm{N}$ and $29.4\,\mathrm{N}$.

:::dimostrazione
The motion is oriented in the sense in which $m_1$ descends and $m_2$ rises. On each body act its weight and the tension, therefore
$$
\begin{cases}
m_1 g - T = m_1 a \\[4pt]
T - m_2 g = m_2 a
\end{cases}
$$
Adding the two equations the tension is eliminated and one obtains $(m_1 - m_2)\,g = (m_1 + m_2)\,a$, from which $a$ follows. Substituting into the second equation,
$$
T = m_2\,(g + a) = m_2\,g\,\frac{(m_1 + m_2) + (m_1 - m_2)}{m_1 + m_2} = \frac{2\,m_1 m_2}{m_1 + m_2}\,g .
$$
:::
::::

::::teorema{#corpo-trainato-da-massa-appesa titolo="Body on a surface pulled by a hanging body"}
A body of mass $m_1$ on a horizontal surface, with coefficient of kinetic friction $\mu_d$, is connected by an ideal string, which passes over an ideal pulley fixed to the edge of the surface, to a hanging body of mass $m_2$. If the system is in motion, with $m_2$ descending, then
$$
a = \frac{m_2 - \mu_d\,m_1}{m_1 + m_2}\,g ,
\qquad
T = \frac{(1 + \mu_d)\,m_1 m_2}{m_1 + m_2}\,g .
$$
Starting from rest, the system sets in motion if and only if the hanging weight exceeds the maximum static friction, that is, $m_2 > \mu_s m_1$. With $m_1 = 4.0\,\mathrm{kg}$, $m_2 = 1.0\,\mathrm{kg}$ and $\mu_d = 0.10$ one has $a = \dfrac{1.0 - 0.40}{5.0} \cdot 9.81\,\mathrm{m/s^2} = 1.18\,\mathrm{m/s^2}$ and $T = 8.63\,\mathrm{N}$.

::grafico{assi=0 uguale=1 poligoni="-1.2,3.1 4.8,3.1 4.8,3.6 -1.2,3.6;1.25,3.6 1.95,3.6 1.95,4.3 1.25,4.3;5.1,1.6 5.7,1.6 5.7,2.2 5.1,2.2" curve="5.1+0.3*cos(t),3.65+0.3*sin(t),0,6.29" linee="1.95,3.95 5.1,3.95;5.4,3.65 5.4,2.2;4.8,3.65 5.1,3.65" punti="5.1,3.65,pieno" vettori="1.95,3.95,2.641,3.95,T;1.6,3.6,1.286,3.6,f;1.6,3.95,1.6,7.089,N₁;1.6,3.95,1.6,0.811,P₁;5.4,2.2,5.4,2.891,T;5.4,1.6,5.4,0.815,P₂" etichette="0.75,4.45,m₁;4.65,1.85,m₂" xmin=-1.4 xmax=6.6 ymin=0.5 ymax=7.6 titolo="Forces on the two bodies with $m_1 = 4.0\,\mathrm{kg}$, $m_2 = 1.0\,\mathrm{kg}$ and $\mu_d = 0.10$, to scale: on the resting body $\vec{N}_1$ balances $\vec{P}_1$, along the string the tension and friction act"}

:::dimostrazione
Along the vertical the resting body has zero acceleration, therefore $N_1 = m_1 g$ and kinetic friction equals $\mu_d m_1 g$, directed opposite to the motion. The motion is oriented in the sense in which $m_2$ descends; the second law along the string for the two bodies gives
$$
\begin{cases}
T - \mu_d\,m_1 g = m_1 a \\[4pt]
m_2 g - T = m_2 a
\end{cases}
$$
Adding one obtains $(m_2 - \mu_d m_1)\,g = (m_1 + m_2)\,a$, from which $a$ follows; from the second equation $T = m_2\,(g - a)$, which after simplification gives the formula for the tension.
:::
::::

## Noninertial frames and fictitious forces

:::definizione{#forze-apparenti titolo="Fictitious forces"}
In a reference frame that accelerates relative to an inertial frame, the second law, written with only the forces due to other bodies, is not satisfied. For a frame that translates with acceleration $\vec{A}$ relative to an inertial frame, the acceleration $\vec{a}'$ measured in the accelerated frame satisfies
$$
\vec{R} + \vec{F}_{\text{app}} = m\,\vec{a}' ,
\qquad
\vec{F}_{\text{app}} = -\,m\,\vec{A} .
$$
The **fictitious force** $\vec{F}_{\text{app}}$ is not exerted by any body and therefore has no reaction according to the third law. The relation follows from the Galilean transformations, $\vec{a} = \vec{a}' + \vec{A}$, substituted into the second law $\vec{R} = m\,\vec{a}$.

A pendulum hanging from the ceiling of a railway car accelerating with $A = 2.0\,\mathrm{m/s^2}$ remains at rest relative to the car, tilted backward. In the car the tension balances the weight and the fictitious force $mA$, therefore the string forms with the vertical the angle $\theta$ with $\tan\theta = \dfrac{A}{g} = 0.204$, that is, $\theta = 11.5^\circ$.
:::

::::teorema{#peso-apparente titolo="Apparent weight in an elevator"}
A person of mass $m$ stands on a scale in an elevator that has vertical acceleration $a$, positive upward. Then the scale reads
$$
N = m\,(g + a) .
$$
The reading of the scale is the **apparent weight**. The possible cases are the following.

- $a > 0$ (elevator starting upward or braking on the way down): the apparent weight exceeds the weight.
- $a = 0$ (elevator at rest or in uniform motion): the apparent weight coincides with the weight.
- $a < 0$ (elevator starting downward or braking on the way up): the apparent weight is less than the weight, and for $a = -g$, in free fall, it vanishes.

A $60\,\mathrm{kg}$ person in an elevator accelerating upward with $a = 1.5\,\mathrm{m/s^2}$ reads $N = 60 \cdot 11.31\,\mathrm{N} = 679\,\mathrm{N}$; a scale calibrated in kilograms would show $69\,\mathrm{kg}$.

:::dimostrazione
In the inertial frame of the building the forces on the person are the weight and the force $N$ of the scale, which by the third law is equal in magnitude to the force with which the person presses on the scale, that is, to the reading. The second law along the vertical gives $N - m g = m a$, from which the claim follows. In the frame of the elevator the person is at rest, and the equilibrium among $\vec{N}$, the weight and the fictitious force, of vertical component $-m\,a$, leads to the same equation $N - mg - ma = 0$.
:::
::::

:::definizione{#forza-centrifuga titolo="Centrifugal force"}
In a reference frame that rotates with constant angular velocity $\omega$ relative to an inertial frame, on a body of mass $m$ at rest relative to the rotating frame, at distance $r$ from the axis, acts the fictitious force
$$
F_{\text{cf}} = m\,\omega^2 r ,
$$
directed radially outward, called the **centrifugal force**. For a body moving relative to the rotating frame a further fictitious force appears, the Coriolis force, which is omitted here.

An object resting on a platform rotating with $\omega = 2.0\,\mathrm{rad/s}$, with $\mu_s = 0.50$, remains at rest relative to the platform as long as static friction balances the centrifugal force, that is, as long as $m\,\omega^2 r \leq \mu_s m g$, therefore for $r \leq \dfrac{\mu_s g}{\omega^2} = 1.23\,\mathrm{m}$.
:::
