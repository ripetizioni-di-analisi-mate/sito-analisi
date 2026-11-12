---
titolo: Static equilibrium and elasticity
sommario: The two conditions that keep a rigid body at rest, the center of gravity and the torque of the weight, the equilibrium of beams, hinged members and ladders, and the response of a real solid to tensile, shear and volume stress through the three elastic moduli.
---

## The conditions for static equilibrium

:::richiamo{titolo="Torque of a force"}
The torque of a force $\vec{F}$ applied at the point located by $\vec{r}$ with respect to a chosen point $O$ is $\vec{\tau} = \vec{r} \times \vec{F}$, with magnitude
$$
\tau = r\,F \sin\varphi = F\,d ,
$$
where $\varphi$ is the angle between $\vec{r}$ and $\vec{F}$ and $d = r\sin\varphi$ is the distance from $O$ to the line of action of the force. For forces in a plane the torque is perpendicular to that plane, therefore it is treated as a signed number, positive when the force turns the body counterclockwise. The chapter on fixed-axis rotation establishes these facts.

::grafico{assi=0 uguale=1 linee="0,0 3.6,0" punti="0,0,pieno;3,0,pieno" vettori="0,0,3,0,r;3,0,4.286,1.532,F" segmenti="3,0,1.76,-1.478;0,0,1.76,-1.478" etichette="3.42,0.2,φ;0.45,-1.12,d" xmin=-0.7 xmax=4.9 ymin=-2.1 ymax=2.1 titolo="The torque of $\vec{F}$ about $O$ has magnitude $\tau = rF\sin\varphi = Fd$, where $d$ is the distance from $O$ to the line of action of the force"}
:::

:::definizione{#static-equilibrium titolo="Static equilibrium"}
A rigid body is in **static equilibrium** with respect to an inertial frame when every one of its points stays at rest. Since the velocity of the center of mass and the angular velocity are both zero and both stay zero, the acceleration of the center of mass and the angular acceleration vanish:
$$
\vec{a}_{\mathrm{cm}} = \vec{0},
\qquad
\vec{\alpha} = \vec{0} .
$$
A body in equilibrium is therefore described by two vanishing quantities, one for the translation and one for the rotation. The whole chapter rests on reading these two conditions as equations for the unknown forces.
:::

::::teorema{#equilibrium-conditions titolo="Conditions for the equilibrium of a rigid body"}
Let a rigid body at rest be acted on by the external forces $\vec{F}_1, \dots, \vec{F}_n$, applied at the points located by $\vec{r}_1, \dots, \vec{r}_n$, and let $O$ be any point. The body stays at rest if and only if
$$
\begin{cases}
\displaystyle\sum_{i=1}^{n} \vec{F}_i = \vec{0} \\[8pt]
\displaystyle\sum_{i=1}^{n} \vec{r}_i \times \vec{F}_i = \vec{0}
\end{cases}
$$

:::dimostrazione
The motion of the center of mass obeys $\sum \vec{F}_i = M\vec{a}_{\mathrm{cm}}$, and the rotation about an axis through the center of mass obeys $\sum \vec{\tau}_i = I\vec{\alpha}$. The body stays at rest, hence $\vec{a}_{\mathrm{cm}} = \vec{0}$ and $\vec{\alpha} = \vec{0}$, and the two sums vanish. Conversely, let the two sums vanish while the body is at rest. Then $\vec{a}_{\mathrm{cm}} = \vec{0}$ and $\vec{\alpha} = \vec{0}$, therefore the velocity of the center of mass and the angular velocity keep the value zero they already have, and every point of the body stays at rest.
:::
::::

For forces lying in the $xy$ plane the first condition splits into two scalar equations and the torque has only the component along $z$, hence the equilibrium of a plane problem is governed by the three equations
$$
\sum F_x = 0,
\qquad
\sum F_y = 0,
\qquad
\sum \tau = 0 .
$$
Three equations determine at most three unknown scalars, which is why a beam on two supports can be solved and a beam on three supports cannot be solved by these conditions alone.

::::teorema{#pivot-independence titolo="Independence of the reference point"}
Let the total force on a body vanish, $\sum \vec{F}_i = \vec{0}$. Then the total torque has the same value about every point.

:::dimostrazione
Let $O'$ be a second point, located by $\vec{d}$ with respect to $O$. The position of the point of application of $\vec{F}_i$ with respect to $O'$ is $\vec{r}_i - \vec{d}$, hence
$$
\sum (\vec{r}_i - \vec{d}) \times \vec{F}_i
= \sum \vec{r}_i \times \vec{F}_i - \vec{d} \times \sum \vec{F}_i .
$$
The last sum vanishes by hypothesis, therefore the total torque about $O'$ equals the total torque about $O$.
:::
::::

:::osservazione
The hypothesis of the preceding theorem is satisfied in every equilibrium problem, since the first condition is imposed anyway. The reference point for the torques is therefore free, and it is chosen to make the equations simple: a point on the line of action of an unknown force gives that force zero torque, so the torque equation contains one unknown fewer.
:::

## Center of gravity

:::definizione{#center-of-gravity titolo="Center of gravity"}
The **center of gravity** of a body is the point $G$ at which the whole weight of the body can be considered applied. For a body made of the particles of masses $m_1, \dots, m_N$ located by $\vec{r}_1, \dots, \vec{r}_N$ in a region where the gravitational field is uniform, the position of $G$ is
$$
\vec{r}_G = \frac{\displaystyle\sum_i m_i \vec{r}_i}{\displaystyle\sum_i m_i} ,
$$
which is the position of the center of mass. The two points coincide whenever $\vec{g}$ has the same value at every point of the body, and every problem in this chapter satisfies that condition.
:::

:::richiamo{titolo="Center of mass of a continuous body"}
For a body whose mass is distributed continuously the sums become integrals,
$$
\vec{r}_G = \frac{1}{M}\int \vec{r}\,dm ,
$$
one integral per coordinate. The chapter on linear momentum and collisions sets up this definition, and the Calculus chapter on integrals provides the technique. For a homogeneous body $G$ lies at the geometric center of the figure, and on every axis of symmetry the body possesses.
:::

::::teorema{#weight-at-center-of-gravity titolo="Torque of the weight"}
Let the gravitational field $\vec{g}$ be uniform over a body of total mass $M$ and center of gravity $G$. Then the total torque of the weights of its particles, about any point, equals the torque of the single force $M\vec{g}$ applied at $G$.

:::dimostrazione
The weight of the $i$-th particle is $m_i\vec{g}$, hence the total torque about the chosen origin is
$$
\sum_i \vec{r}_i \times m_i\vec{g}
= \left(\sum_i m_i \vec{r}_i\right) \times \vec{g}
= M\vec{r}_G \times \vec{g}
= \vec{r}_G \times (M\vec{g}) ,
$$
where the vector $\vec{g}$ has been taken out of the sum because it is the same for every particle. The last expression is the torque of $M\vec{g}$ applied at $G$.
:::
::::

The theorem is what allows a free-body diagram to carry one weight arrow instead of one arrow per particle, therefore it is used in every diagram that follows.

::::teorema{#composite-center-of-gravity titolo="Center of gravity of a composite body"}
Let a body be divided into the parts of masses $M_1, \dots, M_p$ whose centers of gravity are located by $\vec{r}_1, \dots, \vec{r}_p$. Then
$$
\vec{r}_G = \frac{\displaystyle\sum_{k=1}^{p} M_k \vec{r}_k}{\displaystyle\sum_{k=1}^{p} M_k} .
$$

:::dimostrazione
Group the particles of the body according to the part they belong to. The sum $\sum_i m_i \vec{r}_i$ restricted to the $k$-th part equals $M_k \vec{r}_k$, by the definition of the center of gravity of that part. Summing over the parts gives the numerator, and summing the masses of the parts gives the total mass.
:::
::::

A body with a hole is treated as the full body together with a part of negative mass occupying the hole, since the sum of the two mass distributions is the real one. For a homogeneous plate of constant thickness the masses are proportional to the areas, therefore the areas can be used in place of the masses.

:::esempio{titolo="Center of gravity of an L-shaped plate"}
A homogeneous plate of constant thickness has the shape of an L formed by a horizontal rectangle $60\,\mathrm{cm} \times 12\,\mathrm{cm}$ and a vertical rectangle $12\,\mathrm{cm} \times 36\,\mathrm{cm}$ standing on its left end. With the origin at the lower left corner, the two parts have areas $A_1 = 720\,\mathrm{cm^2}$ and $A_2 = 432\,\mathrm{cm^2}$, and their centers are the centers of the two rectangles:
$$
G_1 = (30,\ 6)\,\mathrm{cm},
\qquad
G_2 = (6,\ 30)\,\mathrm{cm} .
$$
The plate is homogeneous, hence the areas replace the masses:
$$
x_G = \frac{720 \cdot 30 + 432 \cdot 6}{720 + 432}\,\mathrm{cm} = 21.0\,\mathrm{cm},
\qquad
y_G = \frac{720 \cdot 6 + 432 \cdot 30}{1152}\,\mathrm{cm} = 15.0\,\mathrm{cm} .
$$

::grafico{uguale=1 poligoni="0,0 60,0 60,12 12,12 12,48 0,48" punti="30,6,vuoto,G₁;6,30,vuoto,G₂;21,15,pieno,G" segmenti="21,0,21,15;0,15,21,15" xmin=-6 xmax=70 ymin=-6 ymax=54 titolo="The center of gravity $G$ of the L-shaped plate lies at $(21.0,\ 15.0)\,\mathrm{cm}$, on the segment joining the centers of the two rectangles; coordinates in $\mathrm{cm}$"}

The point $G$ lies on the segment joining $G_1$ and $G_2$, closer to $G_1$ because the horizontal rectangle is heavier. It falls in the notch of the L, that is outside the material of the plate, which is admissible since the center of gravity is a point of the plane and not a particle of the body.
:::

## Solving equilibrium problems

:::osservazione{#equilibrium-method titolo="Method for an equilibrium problem"}
The two conditions are applied in a fixed order.

1. Isolate one body and draw its free-body diagram, with each external force at its own point of application, the weight $M\vec{g}$ at the center of gravity.
2. Choose the axes $x$ and $y$ and the positive sense of rotation.
3. Write $\sum F_x = 0$ and $\sum F_y = 0$.
4. Choose a point and write $\sum \tau = 0$, the torque of each force taken as $\pm F d$ with $d$ the distance from the chosen point to the line of action.
5. Solve the system and check the sign of each result.

A negative value for a component means that the force has the sense opposite to the one assumed in the diagram, and its magnitude is still the absolute value of the number found.
:::

:::osservazione{#choice-of-pivot titolo="Choosing the point for the torques"}
The point is chosen where the largest number of unknown forces act, since a force whose line of action passes through the chosen point has zero torque about it. In a beam held by a pin and a cable the pin is the natural choice, because the two unknown components of the pin reaction then disappear and the torque equation gives the tension at once. A second torque equation about a different point replaces one of the force equations when that is more convenient.
:::

:::esempio{#beam-on-two-supports titolo="A plank on two supports"}
A homogeneous plank of mass $M = 24\,\mathrm{kg}$ and length $L = 4.0\,\mathrm{m}$ rests on two supports placed at its ends. A load of mass $m = 60\,\mathrm{kg}$ sits at the distance $d = 1.0\,\mathrm{m}$ from the left support. The supports are smooth, therefore each exerts a vertical force alone, $N_1$ on the left and $N_2$ on the right.

::grafico{assi=0 uguale=1 poligoni="0,-0.08 4,-0.08 4,0.08 0,0.08;0.7,0.08 1.3,0.08 1.3,0.68 0.7,0.68;0,-0.08 -0.3,-0.75 0.3,-0.75;4,-0.08 3.7,-0.75 4.3,-0.75" linee="-0.9,-0.75 4.9,-0.75" vettori="0,0.08,0,1.5,N₁;4,0.08,4,1.5,N₂;2,-0.08,2,-1.35,Mg;1,-0.08,1,-1.0,mg" etichette="0.78,0.9,load" xmin=-1.2 xmax=5.2 ymin=-1.8 ymax=2.0 titolo="Free-body diagram of the plank: the weight $Mg$ acts at the center, the contact force $mg$ of the load at $1.0\,\mathrm{m}$ from the left support"}

Torques are taken about the left support, so that $N_1$ drops out:
$$
N_2 L - M g\,\frac{L}{2} - m g\,d = 0
\quad\Longrightarrow\quad
N_2 = \frac{M \dfrac{L}{2} + m d}{L}\,g .
$$
The vertical equation then gives $N_1$:
$$
N_2 = \frac{24 \cdot 2.0 + 60 \cdot 1.0}{4.0}\,\mathrm{kg} \cdot 9.81\,\mathrm{m/s^2} = 265\,\mathrm{N},
\qquad
N_1 = (M + m)g - N_2 = 559\,\mathrm{N} .
$$
The left support carries more, which agrees with the load sitting nearer to it.
:::

## Hinges, cables and struts

:::definizione{#hinge-reaction titolo="Reactions of the common constraints"}
A constraint is described by the force, and possibly the torque, it is able to exert.

- A **pin**, also called a hinge, holds one point of the body fixed and lets the body turn about it. Its reaction is a force of unknown magnitude and direction, written through the two components $H$ and $V$, and it exerts no torque about its own point.
- A **smooth support** or roller holds the body on one side only. Its reaction is normal to the contact surface and its sense is fixed, since a support pushes and does not pull.
- An **ideal cable** exerts a force directed along itself, away from the body, of magnitude equal to its tension. A cable pulls and does not push, therefore a negative tension in the solution means that the assumed arrangement is impossible.
- A **built-in end**, or clamp, prevents both translation and rotation of the end, hence its reaction consists of two force components and a torque.

Counting unknowns against the three plane equations tells in advance whether a problem is solvable: a pin and a cable give three unknowns, a pin and a smooth support give three, two pins give four.
:::

::::teorema{#two-force-member titolo="Body acted on by two forces"}
Let a body in equilibrium be acted on by exactly two forces, $\vec{F}_1$ applied at $P_1$ and $\vec{F}_2$ applied at $P_2$. Then the two forces have equal magnitudes, opposite senses, and both lie along the line $P_1P_2$.

:::dimostrazione
The first condition gives $\vec{F}_2 = -\vec{F}_1$, hence equal magnitudes and opposite senses. Taking torques about $P_1$, the force $\vec{F}_1$ contributes nothing, therefore
$$
\vec{r}_{21} \times \vec{F}_2 = \vec{0} ,
$$
where $\vec{r}_{21}$ joins $P_1$ to $P_2$. A vector product vanishes with both factors nonzero only when the factors are parallel, hence $\vec{F}_2$ lies along the line $P_1P_2$, and so does $\vec{F}_1$.
:::
::::

A straight bar pinned at both ends and loaded at those ends alone is a body of this kind, therefore it carries a force along its own axis: the bars of a truss are treated in this way, and each of them is in tension or in compression.

:::esempio{#boom titolo="A hinged beam held by a cable"}
A homogeneous beam of mass $M = 20\,\mathrm{kg}$ and length $L = 2.4\,\mathrm{m}$ is pinned to a wall at its left end and held horizontal by a cable fastened to its right end, making the angle $\theta = 30^\circ$ with the beam.

::grafico{assi=0 uguale=1 linee="0,-0.6 0,1.75;0,1.386 2.4,0" poligoni="0,-0.06 2.4,-0.06 2.4,0.06 0,0.06" punti="0,0,pieno" vettori="2.4,0,1.794,0.35,T;1.2,-0.06,1.2,-0.95,Mg;0,0,0.85,0,H;0,0,0,0.6,V" etichette="1.93,0.14,30°" xmin=-0.6 xmax=3.1 ymin=-1.3 ymax=1.9 titolo="The pin reaction has the two components $H$ and $V$; the cable pulls along its own direction with the tension $T$"}

Torques about the pin contain neither $H$ nor $V$, and the moment arm of the tension is $L\sin\theta$:
$$
T L \sin\theta - M g\,\frac{L}{2} = 0
\quad\Longrightarrow\quad
T = \frac{M g}{2\sin\theta} = \frac{20\,\mathrm{kg} \cdot 9.81\,\mathrm{m/s^2}}{2 \cdot 0.500} = 196\,\mathrm{N} .
$$
The two force equations then give the components of the pin reaction:
$$
H = T\cos\theta = 170\,\mathrm{N},
\qquad
V = M g - T\sin\theta = 196.2\,\mathrm{N} - 98.1\,\mathrm{N} = 98.1\,\mathrm{N} .
$$
The tension grows without bound as $\theta$ decreases, since $\sin\theta \to 0$, and a nearly horizontal cable must therefore pull enormously to hold the same beam.
:::

## Equilibrium in the presence of friction

:::richiamo{titolo="Static friction"}
While two surfaces in contact do not slide, the friction force is parallel to the surface, it takes whatever value equilibrium requires, and its magnitude satisfies
$$
f_s \le \mu_s N ,
$$
with $N$ the normal force and $\mu_s$ the coefficient of static friction. The chapter on applications of Newton's laws establishes this inequality. An equilibrium problem is therefore solved first with $f_s$ unknown, and the result is admissible only when the inequality is satisfied.
:::

:::esempio{#ladder titolo="A ladder against a smooth wall"}
A homogeneous ladder of mass $M = 18\,\mathrm{kg}$ and length $L = 4.0\,\mathrm{m}$ leans against a smooth vertical wall, making the angle $\theta = 65^\circ$ with a horizontal floor. The wall is smooth, hence it exerts the horizontal force $N_1$ alone; the floor exerts the normal force $N_2$ and the friction force $f$.

::grafico{assi=0 uguale=1 linee="0,-0.4 0,4.1;-0.6,0 4.1,0;1.69,0 0,3.625" punti="0.845,1.8125,pieno,G" vettori="0,3.625,0.75,3.625,N₁;1.69,0,1.69,1.35,N₂;1.69,0,0.94,0,f;0.845,1.8125,0.845,0.46,Mg" etichette="1.33,0.36,65°" xmin=-0.8 xmax=4.35 ymin=-0.6 ymax=4.3 titolo="Forces on the ladder: the smooth wall pushes horizontally, the floor pushes up and holds the foot with friction"}

The three equations are written with torques about the foot of the ladder:
$$
\begin{cases}
N_1 - f = 0 \\[4pt]
N_2 - M g = 0 \\[4pt]
N_1 L \sin\theta - M g \dfrac{L}{2}\cos\theta = 0
\end{cases}
$$
The torque equation gives $N_1$, and the first two equations give $f$ and $N_2$:
$$
N_1 = \frac{M g}{2}\,\frac{\cos\theta}{\sin\theta} = \frac{18 \cdot 9.81}{2}\,\mathrm{N} \cdot \frac{1}{\tan 65^\circ} = 41.2\,\mathrm{N},
\qquad
f = 41.2\,\mathrm{N},
\qquad
N_2 = 177\,\mathrm{N} .
$$
Friction can supply this value only if $f \le \mu_s N_2$, hence equilibrium requires
$$
\mu_s \ge \frac{f}{N_2} = \frac{1}{2\tan\theta} = 0.233 .
$$
The required coefficient grows as $\theta$ decreases, therefore a ladder set at a small angle slips on a floor that holds it when it stands steeply.
:::

:::osservazione{#tipping titolo="Tipping"}
A body resting on a flat base touches the floor over a whole region, and the floor pushes with a distributed force. The resultant of that distributed force is a single normal force whose line of action can be placed anywhere inside the base of contact, and nowhere outside it. The torque equation therefore has a solution only while the forces require that line to fall inside the base, and the body **tips** about the edge of the base as soon as the required point reaches that edge.

::grafico{assi=0 uguale=1 poligoni="0,0 0.6,0 0.6,1.2 0,1.2" linee="-0.8,0 1.9,0" punti="0.6,0,pieno;0.3,0.6,pieno,G" vettori="0,1.2,0.58,1.2,F;0.3,0.6,0.3,0.08,Mg" segmenti="0.3,0.6,0.3,-0.5;0.6,0,0.6,-0.5;0.3,-0.34,0.6,-0.34" etichette="0.45,-0.62,w/2;1.0,0.12,edge" xmin=-1.0 xmax=2.1 ymin=-0.95 ymax=1.7 titolo="Tipping of a crate of width $w$ and height $h$: the limit is reached when $F h = M g \dfrac{w}{2}$, hence $F = \dfrac{M g w}{2h}$"}

For a crate of width $w$ and height $h$ standing on an incline of angle $\theta$, the same condition on the line of action of the weight gives $\tan\theta = \dfrac{w}{h}$ at the limit.
:::

:::attenzione
A body pushed on a rough floor does *not* always begin to slide. The crate of width $w = 0.40\,\mathrm{m}$ and height $h = 1.0\,\mathrm{m}$ on a floor with $\mu_s = 0.70$, placed on an incline of growing angle, tips when $\tan\theta = \dfrac{w}{h} = 0.40$, that is at $\theta = 21.8^\circ$, while sliding would start at $\tan\theta = \mu_s$, that is at $35.0^\circ$. The body therefore tips first, and the sliding condition alone would give a wrong answer.
:::

## Stress and strain

The conditions for equilibrium treat a body as rigid. A real solid changes shape under the forces applied to it, and the amount of that change is governed by the quantities that follow.

:::definizione{#stress titolo="Stress"}
Let a force of magnitude $F_\perp$ act perpendicular to a cross section of area $A$ of a body. The **stress** on that section is
$$
\sigma = \frac{F_\perp}{A} ,
$$
measured in $\mathrm{N/m^2} = \mathrm{Pa}$. The stress is **tensile** when the forces on the two sides of the section pull it apart and **compressive** when they push it together.

Stress rather than force governs the deformation, since the same force of $10^4\,\mathrm{N}$ barely stretches a steel beam and breaks a thin wire. A cable is specified by the stress its material tolerates, and its area follows from the load it must carry.
:::

:::definizione{#strain titolo="Strain"}
Let a bar of initial length $L_0$ be stretched to the length $L_0 + \Delta L$. The **strain** is the relative change in length,
$$
\varepsilon = \frac{\Delta L}{L_0} ,
$$
a dimensionless number, often quoted as a percentage. A strain of $10^{-3}$ means an elongation of one millimeter per meter.
:::

:::teorema{#hookes-law-solids titolo="Hooke's law for solids"}
Experiment establishes that for small deformations of a solid the strain is proportional to the stress,
$$
\sigma = (\text{elastic modulus}) \times \varepsilon ,
$$
with a constant of proportionality that depends on the material and on the kind of deformation considered. The law holds up to a value of the stress characteristic of the material, called the proportional limit.

The law is experimental, therefore it is not derived from the principles of mechanics, and it is stated in three forms, one for stretching, one for shearing and one for uniform compression. Each form defines its own modulus, and the three are introduced in the sections that follow.
:::

## Young's modulus and tensile deformation

:::definizione{#youngs-modulus titolo="Young's modulus"}
For a bar under tension or compression the constant of proportionality between stress and strain is **Young's modulus**,
$$
Y = \frac{\sigma}{\varepsilon} = \frac{\dfrac{F_\perp}{A}}{\dfrac{\Delta L}{L_0}} ,
$$
measured in $\mathrm{Pa}$, since the strain is dimensionless. Solving for the elongation,
$$
\Delta L = \frac{F_\perp L_0}{A\,Y} ,
$$
so a long bar stretches more than a short one and a thick bar stretches less than a thin one, under the same force.

| Material | $Y\ (\mathrm{Pa})$ |
|---|---|
| steel | $2.0 \times 10^{11}$ |
| copper | $1.1 \times 10^{11}$ |
| aluminum | $7.0 \times 10^{10}$ |
| glass | $7.0 \times 10^{10}$ |
| bone | $1.6 \times 10^{10}$ |
| rubber | $1.0 \times 10^{6}$ |

::grafico{assi=0 uguale=1 poligoni="0,-0.25 4,-0.25 4,0.25 0,0.25" linee="4,-0.25 4.6,-0.25;4.6,-0.25 4.6,0.25;4.6,0.25 4,0.25" vettori="4.6,0,5.7,0,F;0,0,-1.1,0,F" segmenti="0,-0.3,0,-0.8;4,-0.3,4,-0.8;4.6,-0.3,4.6,-1.15;0,-0.6,4,-0.6;4,-1.0,4.6,-1.0" etichette="1.9,-0.46,L₀;4.1,-1.3,ΔL" xmin=-1.8 xmax=6.2 ymin=-1.7 ymax=1.1 titolo="A bar of initial length $L_0$ and cross section $A$ pulled by two opposite forces $F$ elongates by $\Delta L = \dfrac{F L_0}{A Y}$"}
:::

::::teorema{#rod-as-a-spring titolo="Stiffness of a bar"}
A bar of initial length $L_0$, cross section $A$ and Young's modulus $Y$, loaded within its proportional limit, behaves as a spring of stiffness
$$
k = \frac{Y A}{L_0} ,
$$
in the sense that the applied force and the elongation satisfy $F = k\,\Delta L$.

:::dimostrazione
The definition of Young's modulus gives
$$
\frac{F}{A} = Y\,\frac{\Delta L}{L_0}
\quad\Longrightarrow\quad
F = \frac{Y A}{L_0}\,\Delta L .
$$
The coefficient multiplying $\Delta L$ does not depend on the load, therefore it is the stiffness of the bar.
:::
::::

The result connects this chapter to the one on potential energy and conservation of energy: a loaded bar stores the elastic potential energy $\dfrac{1}{2}k(\Delta L)^2$ with the stiffness just found, and a steel wire that supports a weight is a spring of very large $k$.

:::esempio{titolo="Elongation of a steel rod"}
A steel rod of length $L_0 = 1.50\,\mathrm{m}$ and cross section $A = 2.0\,\mathrm{cm^2} = 2.0 \times 10^{-4}\,\mathrm{m^2}$ carries the tensile force $F = 1.0 \times 10^{4}\,\mathrm{N}$, with $Y = 2.0 \times 10^{11}\,\mathrm{Pa}$. The stress and the strain are
$$
\sigma = \frac{1.0 \times 10^{4}\,\mathrm{N}}{2.0 \times 10^{-4}\,\mathrm{m^2}} = 5.0 \times 10^{7}\,\mathrm{Pa},
\qquad
\varepsilon = \frac{5.0 \times 10^{7}}{2.0 \times 10^{11}} = 2.5 \times 10^{-4} ,
$$
hence $\Delta L = 2.5 \times 10^{-4} \cdot 1.50\,\mathrm{m} = 0.375\,\mathrm{mm}$. The stiffness of the rod is
$$
k = \frac{Y A}{L_0} = \frac{2.0 \times 10^{11}\,\mathrm{Pa} \cdot 2.0 \times 10^{-4}\,\mathrm{m^2}}{1.50\,\mathrm{m}} = 2.7 \times 10^{7}\,\mathrm{N/m} .
$$
The elongation is a fraction of a millimeter under a load of one tonne, which is why treating the rod as rigid in the equilibrium equations is legitimate.
:::

## Shear and volume deformations

:::definizione{#shear-modulus titolo="Shear stress, shear strain and shear modulus"}
Let two opposite forces of magnitude $F_\parallel$ act tangentially on two opposite faces of area $A$ of a block of thickness $h$, so that one face slides by $x$ with respect to the other. The **shear stress** and the **shear strain** are
$$
\sigma_s = \frac{F_\parallel}{A} ,
\qquad
\varepsilon_s = \frac{x}{h} ,
$$
and the **shear modulus** is their ratio,
$$
S = \frac{\sigma_s}{\varepsilon_s} = \frac{\dfrac{F_\parallel}{A}}{\dfrac{x}{h}} .
$$
For metals $S$ is between a third and a half of $Y$: for steel $S = 7.5 \times 10^{10}\,\mathrm{Pa}$, for copper $4.4 \times 10^{10}\,\mathrm{Pa}$, for aluminum $2.5 \times 10^{10}\,\mathrm{Pa}$, for rubber about $2.5 \times 10^{6}\,\mathrm{Pa}$.

::grafico{assi=0 uguale=1 poligoni="0,0 1.5,0 1.85,1.0 0.35,1.0" linee="-0.4,0 2.3,0" segmenti="0,0,0,1.0;0,1.0,1.5,1.0;1.5,1.0,1.5,0" vettori="0.35,1.0,1.4,1.0,F;1.5,0,0.45,0,F" etichette="0.15,1.13,x;1.95,0.47,h;0.12,0.42,φ" xmin=-0.7 xmax=2.7 ymin=-0.5 ymax=1.6 titolo="Shear of a block: the dashed outline is the undeformed shape, the top face slides by $x$ and the shear strain is $\dfrac{x}{h} = \tan\varphi$"}

A shear stress is what a rivet or a bolt carries when the two plates it joins are pulled apart, therefore the shear modulus and the shear strength of the material fix the diameter of the bolt.
:::

:::definizione{#bulk-modulus titolo="Bulk modulus and compressibility"}
Let a body of volume $V_0$ be subjected to a uniform increase $\Delta p$ of the pressure acting on its whole surface. The volume changes by $\Delta V$, and the **bulk modulus** is defined by
$$
\Delta p = -B\,\frac{\Delta V}{V_0} .
$$
The minus sign makes $B$ positive, since an increase in pressure decreases the volume. The reciprocal $\kappa = \dfrac{1}{B}$ is the **compressibility**, measured in $\mathrm{Pa^{-1}}$.

| Material | $B\ (\mathrm{Pa})$ |
|---|---|
| steel | $1.6 \times 10^{11}$ |
| aluminum | $7.0 \times 10^{10}$ |
| mercury | $2.8 \times 10^{10}$ |
| water | $2.2 \times 10^{9}$ |
| ethanol | $0.9 \times 10^{9}$ |

::grafico{assi=0 uguale=1 unicolore=1 poligoni="0,0 1.2,0 1.2,1.2 0,1.2" vettori="-0.75,0.3,-0.06,0.3;-0.75,0.9,-0.06,0.9;1.95,0.3,1.26,0.3;1.95,0.9,1.26,0.9;0.3,-0.75,0.3,-0.06;0.9,-0.75,0.9,-0.06;0.3,1.95,0.3,1.26;0.9,1.95,0.9,1.26" etichette="0.6,2.1,p" xmin=-1.6 xmax=2.8 ymin=-1.2 ymax=2.5 titolo="A body under a uniform pressure increase $\Delta p$ contracts by $\dfrac{\Delta V}{V_0} = -\dfrac{\Delta p}{B}$, keeping its shape"}

A fluid has no shear modulus, because it does not resist a change of shape, and it does have a bulk modulus. The chapter on fluid mechanics uses $B$ to state in what conditions a liquid may be treated as incompressible.
:::

:::osservazione{#uniform-contraction titolo="Change of a linear dimension under uniform pressure"}
A uniform pressure contracts a body without changing its shape, therefore every linear dimension $a$ changes by the same relative amount. For a cube $V = a^3$, hence $dV = 3a^2\,da$ and
$$
\frac{dV}{V} = 3\,\frac{da}{a}
\quad\Longrightarrow\quad
\frac{\Delta a}{a} \simeq \frac{1}{3}\,\frac{\Delta V}{V_0} ,
$$
the last step being valid for small changes, as the Calculus chapter on differentials justifies. The relation holds for any shape, since all dimensions scale together, so a relative volume change of $-3 \times 10^{-4}$ corresponds to a relative shortening of $-10^{-4}$ in every direction.
:::

:::esempio{titolo="Water under pressure at depth"}
At a depth of about $1000\,\mathrm{m}$ the pressure exceeds the surface value by $\Delta p = 1.0 \times 10^{7}\,\mathrm{Pa}$. With $B = 2.2 \times 10^{9}\,\mathrm{Pa}$ for water,
$$
\frac{\Delta V}{V_0} = -\frac{\Delta p}{B} = -\frac{1.0 \times 10^{7}}{2.2 \times 10^{9}} = -4.5 \times 10^{-3} ,
$$
a contraction of $0.45\%$. The change is small, hence treating water as incompressible in the equations of fluid statics introduces an error of that order.
:::

## The limits of elasticity

:::definizione{#elastic-limit titolo="Proportional limit, elastic limit and tensile strength"}
As the stress on a specimen is increased, three values of the stress mark the changes in its behavior.

- The **proportional limit** is the largest stress for which the strain is still proportional to the stress.
- The **elastic limit** is the largest stress after which the specimen returns to its original length once the load is removed. Beyond it a permanent deformation remains.
- The **tensile strength**, or ultimate stress, is the largest stress the specimen sustains before it breaks.

For structural steel the proportional limit is about $2.5 \times 10^{8}\,\mathrm{Pa}$ and the tensile strength about $5 \times 10^{8}\,\mathrm{Pa}$, reached at a strain of a few per cent. The elastic moduli are therefore used only below the proportional limit, and the tensile strength is what decides whether a member is safe.
:::

:::attenzione
Proportionality is *not* a property of the whole range of stresses. A steel wire stretched beyond a strain of about $2 \times 10^{-3}$ keeps elongating while the stress stays nearly constant, hence a computation of $\Delta L$ from $\Delta L = \dfrac{F L_0}{A Y}$ gives a value far below the real one in that range. The formulas of this chapter are applied after the stress has been checked against the proportional limit of the material.
:::

:::osservazione{#safety-factor titolo="Allowable stress"}
An engineering design limits the stress to the **allowable stress**
$$
\sigma_{\mathrm{all}} = \frac{\sigma_u}{n} ,
$$
where $\sigma_u$ is the tensile strength and $n > 1$ is the safety factor, chosen between $2$ and $10$ according to how well the loads are known and how serious a failure would be. The minimum cross section of a member carrying the force $F$ follows from $A \ge \dfrac{F}{\sigma_{\mathrm{all}}}$, which is how the diameter of a cable or of a bolt is fixed.
:::
