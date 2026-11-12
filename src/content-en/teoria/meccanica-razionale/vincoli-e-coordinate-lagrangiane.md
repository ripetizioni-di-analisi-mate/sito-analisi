---
titolo: Constraints, degrees of freedom and Lagrangian coordinates
sommario: How the constraint equations of a mechanical system are written, how its degrees of freedom are counted and the Lagrangian coordinates are chosen, what the difference is between possible displacements and virtual displacements, and which reactions the most common constraints exert.
---

## Configurations and constraints

:::definizione{#configurazione titolo="Configuration of a system"}
Let a system of $N$ material points $P_1, \dots, P_N$ be given. The **configuration** of the system at a given instant is the ordered set of the positions of its points, identified in the fixed frame $(O; x, y, z)$ by the $3N$ Cartesian coordinates
$$
x_1,\, y_1,\, z_1,\; \dots,\; x_N,\, y_N,\, z_N .
$$
If the points are free, every point of $\mathbb{R}^{3N}$ is a configuration of the system. A rigid body is a continuum of points, and yet it is identified by a finite number of parameters, since the mutual distances of its points are assigned.
:::

:::definizione{#vincolo titolo="Constraint and constraint equation"}
A **constraint** is a limitation, imposed a priori, on the configurations the system can assume or on the velocities with which its points can move. A limitation on the configurations is written as a **constraint equation**
$$
f(P_1, \dots, P_N, t) = 0
$$
or as an inequality $f(P_1, \dots, P_N, t) \geq 0$, where $f$ is a smooth function of the coordinates of the points and, possibly, of time. A limitation on the velocities is instead written as a relation between the coordinates and their derivatives.

A point forced to lie on the circle of center $O$ and radius $R$ of the plane $Oxy$ satisfies the equation $x^2 + y^2 - R^2 = 0$, and two points connected by a rigid rod of length $\ell$ satisfy $|P_2 - P_1|^2 - \ell^2 = 0$. A point hanging from an inextensible string of length $\ell$ fixed at $O$ satisfies instead the inequality $\ell^2 - |P - O|^2 \geq 0$, because the string prevents the point from moving away from $O$ beyond $\ell$ and leaves it free to come closer.
:::

## Classification of constraints

:::definizione{#vincolo-olonomo titolo="Holonomic constraint and nonholonomic constraint"}
A constraint is **holonomic** when it is expressed by a relation between the positions of the points and time alone, that is, by an equation or an inequality of the form $f(P_1, \dots, P_N, t) = 0$ or $f(P_1, \dots, P_N, t) \geq 0$. A constraint on the velocities is **nonholonomic** when it cannot be reduced to a relation between the positions alone, that is, when there exists no function of the coordinates and of time that is conserved along all the admissible states of motion.

The distinction lies in the reachable configurations. A holonomic constraint reduces the set of admissible configurations, whereas a nonholonomic constraint leaves all configurations reachable and limits only the way of reaching them; the wheels of a car prevent instantaneous lateral displacement, and yet every position in the parking lot is reached with the appropriate maneuvers. A constraint on the velocities that can be integrated, such as the pure rolling of a disk on a line, is a holonomic constraint for all purposes. The systems of the following topics, from the cardinal equations to the Lagrange equations, are assumed to be holonomic.
:::

:::definizione{#vincolo-bilaterale titolo="Bilateral constraint and unilateral constraint"}
A constraint is **bilateral** when it is expressed by an equation $f = 0$, and **unilateral** when it is expressed by an inequality $f \geq 0$. A hinge, a rigid rod and a sleeve are bilateral constraints; a simple support, an inextensible string and a stop are unilateral constraints.

With a unilateral constraint the configurations fall into two families. In the **ordinary** configurations the strict inequality $f > 0$ holds, and then the constraint exerts no force; in the **boundary** configurations $f = 0$ holds, and then the constraint acts as the corresponding bilateral constraint. A point resting on a horizontal plane and subject to its own weight stays on the boundary $y = 0$, where the plane supports it.
:::

:::definizione{#vincolo-fisso titolo="Fixed constraint and moving constraint"}
A constraint is **fixed**, or time independent, when its equation does not contain $t$ explicitly, that is, when $\dfrac{\partial f}{\partial t} = 0$; it is **moving** when $t$ appears explicitly. A motionless straight guide is a fixed constraint; the same guide rotating about $O$ with assigned constant angular velocity $\omega$ is a moving constraint, of equation
$$
x \sin(\omega t) - y \cos(\omega t) = 0 .
$$
The distinction matters in Lagrangian Mechanics. With fixed constraints the kinetic energy is a quadratic form in the generalized velocities and the mechanical energy is conserved under conservative loading, whereas with moving constraints terms of first degree and of degree zero appear, as is seen in the topic on the Lagrange equations.
:::

:::definizione{#vincolo-liscio titolo="Smooth constraint and rough constraint"}
A constraint is **smooth**, or frictionless, when the force it exerts on the system is orthogonal to every displacement allowed by the constraint itself; it is **rough** when that force also has a component along the allowed displacements, that is, when the constraint exerts friction. A ring that slides without friction on a guide receives from it a force orthogonal to the guide; a block resting on a rough floor also receives from the floor a tangential force, which opposes the sliding.

Unless stated otherwise, constraints are assumed to be smooth, since in that case the force of the constraint has a known direction and a single scalar unknown.
:::

## Degrees of freedom and Lagrangian coordinates

:::richiamo{titolo="Implicit function theorem"}
Let $F : A \subseteq \mathbb{R}^{n+m} \to \mathbb{R}^m$ be of class $C^1$ on the open set $A$, let $F(u_0, w_0) = 0$ with $u_0 \in \mathbb{R}^n$ and $w_0 \in \mathbb{R}^m$, and let the Jacobian matrix $\dfrac{\partial F}{\partial w}(u_0, w_0)$, of order $m$, be invertible. Then there exist a neighborhood $U$ of $u_0$, a neighborhood $W$ of $w_0$ and a unique function $g : U \to W$ of class $C^1$ such that, for $(u, w) \in U \times W$, the equality $F(u, w) = 0$ holds if and only if $w = g(u)$. See the topic on implicit functions of Mathematical Analysis 2.
:::

::::teorema{#gradi-di-liberta titolo="Degrees of freedom of a holonomic system"}
Let a system of $N$ material points be given, subject to $m$ bilateral holonomic constraints
$$
f_\alpha(x_1, y_1, z_1, \dots, x_N, y_N, z_N, t) = 0 ,
\qquad \alpha = 1, \dots, m ,
$$
with the $f_\alpha$ of class $C^1$ and with the Jacobian matrix $\Big( \dfrac{\partial f_\alpha}{\partial x_i} \Big)$, of $m$ rows and $3N$ columns, of rank $m$ in a configuration $\mathcal{C}_0$ admissible at the instant $t_0$. Setting
$$
n = 3N - m ,
$$
there exist then a neighborhood of $\mathcal{C}_0$ and $n$ parameters $q_1, \dots, q_n$ such that the admissible configurations of that neighborhood are written
$$
P_i = P_i(q_1, \dots, q_n, t) ,
\qquad i = 1, \dots, N ,
$$
with one-to-one correspondence and with functions of class $C^1$. The number $n$ is called the number of **degrees of freedom** of the system.

The number of parameters to be assigned in order to fix the configuration is therefore obtained by subtracting the number of independent constraints from the number of the coordinates. Two points of the plane connected by a rigid rod have $N = 2$, $m = 1$ and therefore $n = 4 - 1 = 3$ degrees of freedom, which are the two coordinates of one end and the angle of the rod.

:::dimostrazione
The hypothesis on the rank says that the Jacobian matrix possesses $m$ linearly independent columns in the configuration $\mathcal{C}_0$. Let $w = (w_1, \dots, w_m)$ denote the $m$ coordinates corresponding to those columns and $u = (u_1, \dots, u_n)$ the remaining $n = 3N - m$. The matrix $\dfrac{\partial f}{\partial w}$ is therefore invertible in $\mathcal{C}_0$, hence the implicit function theorem applies to the system $f(u, w, t) = 0$ and guarantees the existence of a neighborhood of $\mathcal{C}_0$ and of a function $g$ of class $C^1$ such that in that neighborhood the admissible configurations are all and only those with $w = g(u, t)$. The $n$ coordinates $u$ remain free, since to each of their values in the neighborhood there corresponds one and only one admissible configuration; one then sets $q_h = u_h$ for $h = 1, \dots, n$ and obtains the representation of the statement, because the coordinates of each point are either one of the $u$ or a component of $g(u, t)$.
:::
::::

:::definizione{#coordinate-lagrangiane titolo="Lagrangian coordinates"}
The parameters $q_1, \dots, q_n$ that identify the configuration of a holonomic system with $n$ degrees of freedom are called **Lagrangian coordinates**, or free coordinates, and their derivatives $\dot{q}_1, \dots, \dot{q}_n$ are called **generalized velocities**. The positions of the points of the system are known functions of the Lagrangian coordinates and of time, $P_i = P_i(q, t)$, and the velocities are obtained by differentiating:
$$
\vec{v}_i = \sum_{h=1}^{n} \frac{\partial P_i}{\partial q_h}\,\dot{q}_h + \frac{\partial P_i}{\partial t} .
$$
The choice of the Lagrangian coordinates is not unique, and it is made so that the positions of the points have the simplest expression. In plane exercises one uses the angles that the rods form with a fixed direction, the abscissas of the points that slide on straight guides and the rotation angles of the disks. With these coordinates one writes the kinetic energy and the potential, which are the starting data of the Lagrange equations.
:::

:::osservazione{#gdl-corpo-rigido titolo="Degrees of freedom of rigid bodies and of linkages"}
A free rigid body has $6$ degrees of freedom in space, which are the three coordinates of one of its points and the three Euler angles, and it has $3$ in the plane, which are the two coordinates of one of its points and the rotation angle. A rod regarded as a segment has $5$ degrees of freedom in space, because the rotation about its own axis does not change the position of its points.

For a plane system formed by $c$ rigid bodies one starts from $3c$ and subtracts the scalar conditions imposed by the constraints:
$$
\begin{aligned}
&\text{hinge to the ground: } 2 , \qquad \text{internal hinge between two bodies: } 2 , \\[4pt]
&\text{roller support: } 1 , \qquad \text{clamped support to the ground: } 3 , \\[4pt]
&\text{sleeve on a fixed guide: } 2 , \qquad \text{disk rolling without slipping: } 2 .
\end{aligned}
$$
The two conditions of the rolling disk are the contact with the guide and the absence of slipping. Two rods hinged to each other, with a hinge to the ground at the first end and a roller support at the second, have $3 \cdot 2 - (2 + 2 + 1) = 1$ degree of freedom. The count holds when the constraints are independent, that is, when the Jacobian matrix has rank equal to their number; if they are not, as for two roller supports that prevent the same displacement, the number of degrees of freedom is greater than the one given by the count.
:::

## Notable plane systems

:::esempio{#punto-su-una-curva titolo="Point on a curve and on a surface"}
A point constrained to a smooth and fixed curve of the plane has one degree of freedom, and a parameter of the curve is taken as Lagrangian coordinate. For the parabola of equation $y = \dfrac{x^2}{2a}$ one takes $q = x$, hence
$$
P - O = x\,\hat{\imath} + \frac{x^2}{2a}\,\hat{\jmath} ,
\qquad
\vec{v}_P = \dot{x}\,\Big( \hat{\imath} + \frac{x}{a}\,\hat{\jmath} \Big) .
$$
The velocity is parallel to the vector $\hat{\imath} + \dfrac{x}{a}\,\hat{\jmath}$, which is tangent to the curve; for a smooth constraint the reaction is then parallel to $-\dfrac{x}{a}\,\hat{\imath} + \hat{\jmath}$, which is orthogonal to the tangent.

::struttura{linee="-3.5,3.06 -3,2.25 -2.5,1.56 -2,1 -1.5,0.56 -1,0.25 -0.5,0.06 0,0 0.5,0.06 1,0.25 1.5,0.56 2,1 2.5,1.56 3,2.25 3.5,3.06" punti="2,1,P,pieno" reazioni="2 1,-0.85,0.85,Φ" frecce="2,1,2.95,1.95,δP" titolo="Point on a smooth guide: the virtual displacement $\delta P$ is tangent to the guide, the reaction $\vec{\Phi}$ is orthogonal"}

A point constrained to a fixed surface has two degrees of freedom. On the spherical surface of center $O$ and radius $R$ one takes the colatitude $\vartheta$ and the longitude $\varphi$, hence
$$
P - O = R\,\big( \sin\vartheta \cos\varphi\,\hat{\imath} + \sin\vartheta \sin\varphi\,\hat{\jmath} + \cos\vartheta\,\hat{k} \big) ,
$$
and the magnitude of the velocity turns out to be $|\vec{v}_P| = R\,\sqrt{\dot{\vartheta}^2 + \dot{\varphi}^2 \sin^2\vartheta}$.
:::

:::esempio{#asta-su-due-guide titolo="Rod with its ends on two orthogonal guides"}
A rod $AB$ of length $\ell$ has the end $A$ on a vertical guide and the end $B$ on a horizontal guide, and the two guides meet at $O$. The rod is a rigid body in the plane, hence it starts from three degrees of freedom; the two roller supports impose $x_A = 0$ and $y_B = 0$, therefore one degree of freedom remains. The angle $\vartheta$ that the rod forms with the horizontal guide is taken as Lagrangian coordinate, and then
$$
A - O = \ell \sin\vartheta\,\hat{\jmath} ,
\qquad
B - O = \ell \cos\vartheta\,\hat{\imath} ,
\qquad
G - O = \frac{\ell}{2}\,\big( \cos\vartheta\,\hat{\imath} + \sin\vartheta\,\hat{\jmath} \big) ,
$$
where $G$ is the midpoint of the rod. Since $|G - O| = \dfrac{\ell}{2}$ for every $\vartheta$, the midpoint travels along the circle of center $O$ and radius $\dfrac{\ell}{2}$.

::struttura{nodi="A,0,3;B,4,0" aste="A-B" vincoli="A,carrello,180;B,carrello,270" linee="0,-0.4 0,4.2;-0.4,0 5,0" punti="2,1.5,G,baricentro" etichette="3.45,0.28,ϑ" quote="A,B,ℓ,-0.9" titolo="Rod with its ends on two orthogonal guides: one degree of freedom, Lagrangian coordinate $\vartheta$"}
:::

:::esempio{#biella-manovella titolo="Slider-crank mechanism"}
The crank $OA$, of length $r$, rotates about the fixed hinge $O$; the connecting rod $AB$, of length $\ell > r$, is hinged at $A$ to the other end and has the end $B$ forced to slide on the horizontal guide through $O$. The two rigid bodies give $3 \cdot 2 = 6$, and the constraints impose $2 + 2 + 1 = 5$ conditions, therefore the system has one degree of freedom. The angle $\vartheta$ of the crank is taken as Lagrangian coordinate and the position of the connecting-rod end is obtained from the equation $|B - A| = \ell$:
$$
x_B = r \cos\vartheta + \sqrt{\ell^2 - r^2 \sin^2\vartheta} .
$$
The angle $\varphi$ of the connecting rod with the guide is not an independent coordinate, since the condition $y_A = y_B + \ell \sin\varphi$ with $y_B = 0$ gives $\sin\varphi = \dfrac{r}{\ell}\,\sin\vartheta$. With $\ell = 2r$ one obtains $x_B = 3r$ for $\vartheta = 0$ and $x_B = r$ for $\vartheta = \pi$, hence the stroke of the connecting-rod end equals $2r$.

::struttura{nodi="O,0,0;A,0.75,1.3;B,3.45,0" aste="O-A;A-B" cerniere="A" vincoli="O,cerniera;B,carrello,270" linee="-0.6,0 4.4,0" quote="A,B,ℓ,-0.7" etichette="0.2,0.85,r;0.62,0.3,ϑ;3.05,0.3,φ" titolo="Slider-crank mechanism: one degree of freedom, Lagrangian coordinate $\vartheta$"}
:::

:::esempio{#pendolo-doppio titolo="Double pendulum"}
Two rods $OA$ and $AB$, of lengths $\ell_1$ and $\ell_2$, are hinged to each other at $A$, and the rod $OA$ is hinged to the fixed point $O$. The count gives $3 \cdot 2 - (2 + 2) = 2$ degrees of freedom. The angles $\vartheta_1$ and $\vartheta_2$ that the two rods form with the downward vertical are taken as Lagrangian coordinates, therefore
$$
A - O = \ell_1\,\big( \sin\vartheta_1\,\hat{\imath} - \cos\vartheta_1\,\hat{\jmath} \big) ,
\qquad
B - A = \ell_2\,\big( \sin\vartheta_2\,\hat{\imath} - \cos\vartheta_2\,\hat{\jmath} \big) .
$$
The two angles are independent, since every pair of values identifies an admissible configuration. The double pendulum is the standard example of a system with two degrees of freedom, and it is found again in the topic on the Lagrange equations and in the one on small oscillations.

::struttura{nodi="O,0,0;A,1,-1.73;B,2.03,-2.96" aste="O-A;A-B" cerniere="A" vincoli="O,cerniera,90" tratteggi="0,0 0,-2.3;1,-1.73 1,-3.3" etichette="0.32,-1.05,ϑ_1;1.3,-2.6,ϑ_2" titolo="Double pendulum: two degrees of freedom, Lagrangian coordinates $\vartheta_1$ and $\vartheta_2$"}
:::

## Pure rolling and nonholonomic constraints

:::richiamo{titolo="Fundamental formula of rigid kinematics"}
Let a rigid body be in motion and let $\Omega$ and $P$ be two of its points. Then there exists a vector $\vec{\omega}$, the angular velocity, depending only on the instant and not on the two points, such that
$$
\vec{v}_P = \vec{v}_\Omega + \vec{\omega} \wedge (P - \Omega) .
$$
In plane rigid motion in the plane $Oxy$ one has $\vec{\omega} = \dot{\vartheta}\,\hat{k}$, where $\vartheta$ is the rotation angle of the body, positive counterclockwise. See the topic on the kinematics of the rigid body.
:::

::::teorema{#puro-rotolamento titolo="Pure rolling of a disk on a line"}
A disk of radius $R$ moves in the plane $Oxy$ keeping in contact with the fixed line $y = 0$; its center therefore has coordinates $C = (x_C, R)$ and its rotation is measured by the angle $\vartheta$, positive counterclockwise. The condition of **pure rolling**, that is, the condition that the point of the disk in contact with the line have zero velocity, is written
$$
\dot{x}_C + R\,\dot{\vartheta} = 0 ,
$$
and it is equivalent to the holonomic constraint
$$
x_C + R\,\vartheta = \text{constant} .
$$
The disk that rolls without slipping on a line therefore has one degree of freedom, and either $x_C$ or $\vartheta$ is taken as Lagrangian coordinate. The sign says that a counterclockwise rotation corresponds to an advance toward the negative abscissas, in agreement with the convention on the positive senses. If the disk rolls to the right, $\dot{x}_C > 0$, then $\dot{\vartheta} < 0$ and the disk turns clockwise.

::struttura{cerchi="3,1.2,1.2" linee="-0.3,0 6,0" punti="3,1.2,C,baricentro;3,0,H,centro" coppie="3 1.2,1,ϑ" tratteggi="0,-1.3 0,0.5" quote="0 0,3 0,x_C,0.9" etichette="3.3,0.6,R;-0.3,0.3,O" riferimento=0 titolo="Disk rolling without slipping: the contact point $H$ has zero velocity, hence $\dot{x}_C = -R\,\dot{\vartheta}$"}

:::dimostrazione
The point of the disk in contact with the line is $H = C - R\,\hat{\jmath}$. The center moves on a line parallel to the line, therefore $\vec{v}_C = \dot{x}_C\,\hat{\imath}$. By the fundamental formula of rigid kinematics, applied to the points $C$ and $H$ of the disk,
$$
\vec{v}_H = \vec{v}_C + \dot{\vartheta}\,\hat{k} \wedge (H - C) = \dot{x}_C\,\hat{\imath} + \dot{\vartheta}\,\hat{k} \wedge (-R\,\hat{\jmath}) = \big( \dot{x}_C + R\,\dot{\vartheta} \big)\,\hat{\imath} ,
$$
where $\hat{k} \wedge \hat{\jmath} = -\hat{\imath}$ has been used. The condition $\vec{v}_H = \vec{0}$ is therefore equivalent to $\dot{x}_C + R\,\dot{\vartheta} = 0$. The left-hand side is the derivative of the function $x_C + R\,\vartheta$, therefore the condition holds at every instant if and only if that function is constant along the motion, that is, if and only if the holonomic constraint of the statement is satisfied.
:::
::::

::::teorema{#slitta-anolonoma titolo="Nonholonomic constraint of the sled"}
A rod $AB$ moves in the plane $Oxy$ and its end $A$ is forced to have velocity parallel to the rod, like the blade of a skate that does not slide sideways. Setting $A = (x, y)$ and denoting by $\vartheta$ the angle of the rod with the $x$ axis, the constraint is written
$$
\dot{x} \sin\vartheta - \dot{y} \cos\vartheta = 0 ,
$$
and it is **not** reducible to a relation between $x$, $y$ and $\vartheta$, hence the constraint is nonholonomic. The system has three free coordinates and two kinematic degrees of freedom, because in every configuration the admissible velocities form a subspace of dimension $2$ of the space of the triples $(\dot{x}, \dot{y}, \dot{\vartheta})$.

:::dimostrazione
The unit vector of the rod is $\cos\vartheta\,\hat{\imath} + \sin\vartheta\,\hat{\jmath}$, therefore the velocity $\vec{v}_A = \dot{x}\,\hat{\imath} + \dot{y}\,\hat{\jmath}$ is parallel to the rod if and only if the determinant vanishes,
$$
\dot{x} \sin\vartheta - \dot{y} \cos\vartheta = 0 ,
$$
which is the equation of the statement. Suppose now, for contradiction, that there exist a function $f(x, y, \vartheta)$ of class $C^2$ and a nowhere vanishing function $\lambda$ such that
$$
\lambda\,\big( \dot{x} \sin\vartheta - \dot{y} \cos\vartheta \big) = \frac{df}{dt} = \frac{\partial f}{\partial x}\,\dot{x} + \frac{\partial f}{\partial y}\,\dot{y} + \frac{\partial f}{\partial \vartheta}\,\dot{\vartheta}
$$
for every triple $(\dot{x}, \dot{y}, \dot{\vartheta})$. Equating the coefficients of the three velocities one obtains the system
$$
\begin{cases}
\dfrac{\partial f}{\partial x} = \lambda \sin\vartheta \\[8pt]
\dfrac{\partial f}{\partial y} = -\lambda \cos\vartheta \\[8pt]
\dfrac{\partial f}{\partial \vartheta} = 0
\end{cases}
$$
From the third equation it follows that the mixed second derivatives $\dfrac{\partial^2 f}{\partial \vartheta\,\partial x}$ and $\dfrac{\partial^2 f}{\partial \vartheta\,\partial y}$ are zero. Since $f$ is of class $C^2$, the mixed second derivatives do not depend on the order of differentiation, hence differentiating the first two equations with respect to $\vartheta$ one obtains
$$
\begin{cases}
\dfrac{\partial \lambda}{\partial \vartheta}\,\sin\vartheta + \lambda \cos\vartheta = 0 \\[8pt]
-\dfrac{\partial \lambda}{\partial \vartheta}\,\cos\vartheta + \lambda \sin\vartheta = 0
\end{cases}
$$
One multiplies the first equation by $\cos\vartheta$, the second by $\sin\vartheta$ and adds the two equations; the terms in $\dfrac{\partial \lambda}{\partial \vartheta}$ cancel and $\lambda\,(\cos^2\vartheta + \sin^2\vartheta) = 0$ remains, that is, $\lambda = 0$. This contradicts the hypothesis that $\lambda$ is nowhere zero, therefore the function $f$ does not exist and the constraint is not reducible to a relation between the coordinates.
:::
::::

:::osservazione{#disco-su-un-piano titolo="Disk rolling on a horizontal plane"}
A disk of radius $R$ that keeps vertical and rolls without slipping on a horizontal plane is identified by four parameters: the coordinates $x$ and $y$ of the contact point, the angle $\psi$ that the plane of the disk forms with the $x$ axis and the angle of proper rotation $\varphi$. Pure rolling then imposes the two conditions
$$
\begin{cases}
\dot{x} + R\,\dot{\varphi} \cos\psi = 0 \\[4pt]
\dot{y} + R\,\dot{\varphi} \sin\psi = 0
\end{cases}
$$
which are nonholonomic. Indeed the disk, by rolling forward through a length $s$, rotating half a turn about the vertical through the contact point, rolling again through $s$ and rotating half a turn backward, returns to the initial configuration with the same $\psi$ and with $\varphi$ decreased by $\dfrac{2s}{R}$; since $s$ is arbitrary, no relation between the four parameters is conserved along the admissible motions. The disk therefore has four configuration parameters and two kinematic degrees of freedom, and the plane case is recovered by setting $\psi$ constant.
:::

## Possible displacements and virtual displacements

:::definizione{#spostamento-possibile titolo="Possible displacement"}
Let the system be in an admissible configuration at the instant $t$. A **possible displacement** is the set of the infinitesimal displacements
$$
dP_i = \vec{v}_i\,dt ,
\qquad i = 1, \dots, N ,
$$
where $(\vec{v}_1, \dots, \vec{v}_N)$ is a state of motion compatible with the constraints at the instant $t$. In Lagrangian coordinates, differentiating $P_i = P_i(q, t)$,
$$
dP_i = \sum_{h=1}^{n} \frac{\partial P_i}{\partial q_h}\,dq_h + \frac{\partial P_i}{\partial t}\,dt .
$$
The possible displacement is the one that the system performs in an infinitesimal time interval, and it takes the motion of the constraints into account through the term $\dfrac{\partial P_i}{\partial t}\,dt$.
:::

:::definizione{#spostamento-virtuale titolo="Virtual displacement"}
A **virtual displacement** of the system in the configuration and at the instant considered is a set of vectors
$$
\delta P_i = \sum_{h=1}^{n} \frac{\partial P_i}{\partial q_h}\,\delta q_h ,
\qquad i = 1, \dots, N ,
$$
with $\delta q_1, \dots, \delta q_n$ arbitrary. The virtual displacement is the displacement compatible with the constraints regarded as motionless at the instant $t$, that is, with time frozen, and it serves as a test displacement for writing the equilibrium conditions.

The virtual displacements of a system with bilateral constraints form a vector space of dimension $n$, since the $\delta q_h$ are arbitrary; in particular, if $(\delta P_i)$ is virtual, so is $(-\delta P_i)$. With a unilateral constraint $f \geq 0$ in the boundary configuration $f = 0$ the virtual displacements are instead those that satisfy the linearized inequality $\sum_i \operatorname{grad}_{P_i} f \cdot \delta P_i \geq 0$, and they form a half-space. On these displacements the virtual work is built, with which the equilibrium configurations are found in the topic on virtual work.
:::

::::teorema{#spostamenti-virtuali-e-vincoli titolo="Virtual displacements and constraint equations"}
Let a system be given, subject to $m$ independent bilateral holonomic constraints $f_\alpha(P_1, \dots, P_N, t) = 0$. Then the virtual displacements in the configuration and at the instant considered are all and only the solutions of the homogeneous linear system
$$
\sum_{i=1}^{N} \operatorname{grad}_{P_i} f_\alpha \cdot \delta P_i = 0 ,
\qquad \alpha = 1, \dots, m ,
$$
where $\operatorname{grad}_{P_i} f_\alpha$ is the vector of the derivatives of $f_\alpha$ with respect to the coordinates of $P_i$. Moreover, if the constraints are fixed, the possible displacements coincide with the virtual displacements, up to the factor $dt$; if at least one constraint is moving, the two sets are different.

The theorem gives the practical way of computing the virtual displacements when the Lagrangian coordinates have not yet been chosen, since it is enough to differentiate the constraint equations keeping time fixed.

:::dimostrazione
One substitutes the representation $P_i = P_i(q, t)$ into the constraint equations, which turn out to be satisfied identically in $q$ and in $t$. Differentiating with respect to $q_h$ one obtains
$$
\sum_{i=1}^{N} \operatorname{grad}_{P_i} f_\alpha \cdot \frac{\partial P_i}{\partial q_h} = 0 ,
\qquad h = 1, \dots, n .
$$
One multiplies by $\delta q_h$ and sums over $h$; by the definition of virtual displacement one then obtains $\sum_i \operatorname{grad}_{P_i} f_\alpha \cdot \delta P_i = 0$, hence every virtual displacement satisfies the linear system. Conversely, the linear system has $3N$ unknowns and $m$ independent equations, therefore its solution space has dimension $3N - m = n$; since the virtual displacements form a subspace of dimension $n$ contained in the space of the solutions, the two subspaces coincide.

For the second part one compares the two expressions. If the constraints are fixed, then $P_i$ does not depend explicitly on $t$, hence $\dfrac{\partial P_i}{\partial t} = \vec{0}$ and the possible displacement $dP_i = \sum_h \dfrac{\partial P_i}{\partial q_h}\,dq_h$ is the virtual displacement with $\delta q_h = dq_h$. If instead a constraint is moving, the possible displacement contains the additional term $\dfrac{\partial P_i}{\partial t}\,dt$, which is not zero and is not of the form $\sum_h \dfrac{\partial P_i}{\partial q_h}\,\delta q_h$.
:::
::::

:::attenzione
With a moving constraint the virtual displacement is not the displacement that the system performs. A point $P$ slides on a straight guide that rotates about $O$ with assigned constant angular velocity $\omega$, and the distance $s = |P - O|$ is taken as Lagrangian coordinate. Then
$$
P - O = s\,\big( \cos(\omega t)\,\hat{\imath} + \sin(\omega t)\,\hat{\jmath} \big) ,
$$
hence the virtual displacement is directed along the guide,
$$
\delta P = \delta s\,\big( \cos(\omega t)\,\hat{\imath} + \sin(\omega t)\,\hat{\jmath} \big) ,
$$
whereas the possible displacement equals
$$
dP = ds\,\big( \cos(\omega t)\,\hat{\imath} + \sin(\omega t)\,\hat{\jmath} \big) + s\,\omega\,dt\,\big( -\sin(\omega t)\,\hat{\imath} + \cos(\omega t)\,\hat{\jmath} \big)
$$
and has a component orthogonal to the guide, due to the rotation of the guide itself. At the instant $t = 0$, with $s = 2\,\mathrm{m}$ and $\omega = 3\,\mathrm{rad/s}$, the virtual displacement is $\delta s\,\hat{\imath}$ and the possible displacement is $ds\,\hat{\imath} + 6\,dt\,\hat{\jmath}$.

::struttura{nodi="O,0,0;P,3,1.5,-" linee="-0.4,-0.2 4.4,2.2" tratteggi="-0.3,-0.55 4,3.6" vincoli="O,cerniera" punti="3,1.5,P,pieno" frecce="3,1.5,4.1,2.05,δP;3,1.5,2.45,2.6,dP" coppie="1.3 0.65,1,ω" titolo="Point on a rotating guide: $\delta P$ is along the guide, the possible displacement $dP$ also has the component due to the rotation"}
:::

## Ideal constraints and constraint reactions

:::definizione{#reazione-vincolare titolo="Constraint reaction"}
The forces acting on a constrained system are divided into **active** forces, assigned as functions of the positions, of the velocities and of time, and **constraint reactions**, that is, the forces with which the constraints act on the points of the system. The reaction that the constraint exerts on the point $P_i$ is denoted by $\vec{\Phi}_i$.

The constraint reactions are unknowns of the problem, since they depend on the active forces and on the motion. What the constraint determines a priori is the direction along which the reaction can act.
:::

:::definizione{#vincolo-ideale titolo="Ideal constraint"}
A system of constraints is said to be **ideal**, or perfect, when the virtual work of the constraint reactions satisfies
$$
\delta L^{(v)} = \sum_{i=1}^{N} \vec{\Phi}_i \cdot \delta P_i \geq 0
$$
for every virtual displacement of the system. If the constraints are bilateral, then together with $(\delta P_i)$ also $(-\delta P_i)$ is virtual, and the inequality applied to the two displacements gives $\delta L^{(v)} = 0$.

The condition of ideal constraint is the hypothesis on which the principle of virtual work and the Lagrange equations, treated in the corresponding topics, are founded, since it eliminates the constraint reactions from the equations of equilibrium and of motion. Smooth bilateral constraints are ideal, and so is pure rolling, although the contact is rough.
:::

::::teorema{#reazione-di-un-vincolo-liscio titolo="Reaction of a smooth bilateral constraint"}
Let a point $P$ be constrained to the fixed and regular surface of equation $f(P) = 0$, and let the constraint be smooth and bilateral. Then the constraint reaction is parallel to $\operatorname{grad} f$, that is, orthogonal to the surface:
$$
\vec{\Phi} = \Phi\,\frac{\operatorname{grad} f}{|\operatorname{grad} f|} ,
$$
with $\Phi$ a scalar unknown. The same holds for a point constrained to a fixed and smooth curve, with the reaction orthogonal to the tangent. The result reduces the unknowns of the reaction from three to one, therefore the motion of a point on a smooth surface is determined by the three Newton equations in the unknowns given by the two parameters of the surface and by $\Phi$.

:::dimostrazione
The constraint is smooth and bilateral, therefore it is ideal and the virtual work of the reaction is zero, that is, $\vec{\Phi} \cdot \delta P = 0$ for every virtual displacement $\delta P$. The constraint is fixed, hence by the theorem on virtual displacements the virtual displacements are all the vectors $\delta P$ with $\operatorname{grad} f \cdot \delta P = 0$, that is, all the vectors of the plane tangent to the surface at $P$. The vector $\vec{\Phi}$ is therefore orthogonal to every vector of that plane, hence it is parallel to $\operatorname{grad} f$.
:::
::::

:::osservazione{#reazioni-dei-vincoli-elementari titolo="Reactions exerted by the elementary constraints"}
In plane systems the most used smooth constraints exert the following reactions, which are drawn in the free-body diagram of the body released from its constraints.

- **Simple support**, unilateral: a force normal to the plane, $\Phi_n \geq 0$, directed from the plane toward the body; $\Phi_n = 0$ signals the detachment.
- **Roller support** on a guide, bilateral: a force normal to the guide, of either sign.
- Fixed **hinge**: the two components $\Phi_{Ax}$ and $\Phi_{Ay}$ applied at the pin and zero moment, since the hinge leaves the rotation free.
- **Clamped support**: the two force components and the reaction moment $\Gamma_A$, since the clamped support also prevents the rotation.
- **Sleeve** on a straight guide: a force normal to the guide and a reaction moment, since only the translation along the guide remains free.
- Inextensible **string**, unilateral: a force directed along the string toward the attachment point, of magnitude $T \geq 0$; $T = 0$ signals that the string is slack.
- **Internal hinge** between two bodies: two opposite forces applied at the pin, by the principle of action and reaction.

::struttura{nodi="A,0,0;B,5,0" aste="A-B" vincoli="A,cerniera;B,carrello" reazioni="A,1.2,0,Φ_Ax;A,0,1.2,Φ_Ay;B,0,1.2,Φ_B" titolo="Reactions of a hinge and of a roller support: three scalar unknowns"}

::struttura{nodi="A,0,0;B,4,0" aste="A-B" vincoli="A,incastro,180" reazioni="A,1.2,0,Φ_Ax;A,0,1.2,Φ_Ay" coppie="0.9 0,1,Γ_A" titolo="Reactions of a clamped support: two force components and the reaction moment $\Gamma_A$"}
:::

:::teorema{#rotolamento-ideale titolo="Pure rolling is an ideal constraint"}
A disk that rolls without slipping on a fixed guide receives from the guide a reaction $\vec{\Phi}$ applied at the contact point $H$, with a normal component and a tangential friction component. The virtual work of this reaction is zero, hence the constraint is ideal. Indeed the point of the disk in contact has zero velocity in every state of motion compatible with the constraint, and the constraint is fixed; therefore its virtual displacement is zero, $\delta H = \vec{0}$, and the virtual work equals $\vec{\Phi} \cdot \delta H = 0$. The result follows from the theorem on pure rolling and from the theorem on virtual displacements, and it allows systems with disks that roll without slipping to be studied with the Lagrange equations, notwithstanding the presence of friction.
:::

:::attenzione
A rough contact with sliding is not an ideal constraint. A block that slides on a rough floor receives a tangential friction force $\vec{\Phi}_t$ opposite to the sliding, and the virtual displacement of the contact point is directed along the floor; the virtual work $\vec{\Phi}_t \cdot \delta P$ is therefore not zero. For these systems friction is treated as an assigned active force.
:::

## Static friction and the Coulomb-Morin law

:::definizione{#attrito-statico titolo="Normal component and friction component"}
Let a body be in contact at a point $A$ with a fixed surface, of normal $\hat{n}$ at the contact point. The constraint reaction splits into the **normal component** and the **tangential component**, called the friction force:
$$
\vec{\Phi} = \Phi_n\,\hat{n} + \vec{\Phi}_t ,
\qquad
\Phi_n = \vec{\Phi} \cdot \hat{n} ,
\qquad
\vec{\Phi}_t = \vec{\Phi} - \Phi_n\,\hat{n} .
$$
The contact is unilateral, therefore $\Phi_n \geq 0$, with the sense of $\hat{n}$ chosen from the surface toward the body. The friction component is zero for a smooth contact and is different from zero for a rough contact.
:::

::::teorema{#coulomb-morin titolo="Coulomb-Morin law and friction cone"}
Let a body be at rest in contact with a fixed rough surface, and let $f_s > 0$ be the **static friction coefficient** of the pair of materials in contact. Rest is compatible with the contact if and only if
$$
|\vec{\Phi}_t| \leq f_s\,\Phi_n ,
$$
and this condition is equivalent to the geometric condition that the reaction $\vec{\Phi}$ belong to the **friction cone**, that is, to the cone of vertex $A$, axis $\hat{n}$ and half-aperture
$$
\rho = \arctan f_s ,
$$
called the friction angle. When the equality holds the contact is at the limit of sliding. The law limits the direction of the reaction and does not determine it, therefore in the plane the unknowns remain two and they are obtained from the equilibrium equations, treated in the topic on the statics of the point and of systems.

::struttura{linee="-0.3,0 6.3,0;3,0 1.4,2.8;3,0 4.6,2.8" tratteggi="3,0 3,3.1" reazioni="3 0,-0.5,1.4,Φ" etichette="3.22,1.95,ρ;2.8,2.95,n" punti="3,0,A,pieno" titolo="Friction cone of half-aperture $\rho = \arctan f_s$: rest is possible if and only if $\vec{\Phi}$ lies inside the cone"}

:::dimostrazione
Let $\phi \in \Big[ 0, \dfrac{\pi}{2} \Big)$ denote the angle that the reaction $\vec{\Phi}$ forms with the normal $\hat{n}$, an angle defined because $\Phi_n > 0$. From the decomposition of the reaction it follows that
$$
\tan\phi = \frac{|\vec{\Phi}_t|}{\Phi_n} .
$$
The tangent function is strictly increasing on $\Big[ 0, \dfrac{\pi}{2} \Big)$, hence the inequality $\tan\phi \leq f_s = \tan\rho$ holds if and only if $\phi \leq \rho$, that is, if and only if $\vec{\Phi}$ lies inside the cone of axis $\hat{n}$ and half-aperture $\rho$. Multiplying the inequality $\tan\phi \leq f_s$ by $\Phi_n > 0$ one finally obtains $|\vec{\Phi}_t| \leq f_s\,\Phi_n$, therefore the two conditions are equivalent.
:::
::::

:::esempio{#blocco-su-piano-inclinato titolo="Body resting on a rough inclined plane"}
A body of mass $m$ rests on a plane inclined by the angle $\alpha$ to the horizontal, with static friction coefficient $f_s$, and the only active forces are the weight and the reaction of the plane. The equilibrium of the body requires the reaction to be opposite to the weight, therefore its components equal
$$
\Phi_n = m g \cos\alpha ,
\qquad
|\vec{\Phi}_t| = m g \sin\alpha .
$$
The Coulomb-Morin law then gives $m g \sin\alpha \leq f_s\,m g \cos\alpha$, that is,
$$
\tan\alpha \leq f_s .
$$
The condition does not contain the mass, hence the body stays at rest for every mass if and only if the inclination does not exceed the friction angle $\rho = \arctan f_s$. With $f_s = 0.5$ one obtains $\alpha \leq 26.57^\circ$. The same result is read on the friction cone, since the reaction is opposite to the weight and forms the angle $\alpha$ with the normal to the plane.
:::
