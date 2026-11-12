---
titolo: Virtual work, potential and equilibrium
sommario: The work of a force, the potential of conservative forces, the Lagrangian components of the force system and the principle of virtual work, with which the equilibrium configurations of a constrained system are found and the constraint reactions are computed.
---

## Work of a force

:::richiamo{titolo="Line integral of a vector field"}
Let $\vec{F}$ be a continuous vector field and let $\gamma$ be a regular curve with endpoints $P_1$ and $P_2$, described by the parametrization $P(u)$ with $u \in [u_1, u_2]$. The line integral of $\vec{F}$ along $\gamma$ is
$$
\int_\gamma \vec{F} \cdot dP = \int_{u_1}^{u_2} \vec{F}\big(P(u)\big) \cdot \frac{dP}{du}\,du ,
$$
and its value does not depend on the parametrization chosen, provided that the direction of travel remains the same. See the topic on line integrals and differential forms in Mathematical Analysis 2.
:::

:::definizione{#lavoro-di-una-forza titolo="Work of a force"}
Let $\vec{F}$ be a force applied at the point $P$ and let $dP$ be the infinitesimal displacement of its point of application. The **elementary work** of the force is the scalar product
$$
dL = \vec{F} \cdot dP .
$$
The elementary work is positive when the force and the displacement form an acute angle, zero when the two vectors are orthogonal and negative when the angle is obtuse. If the point of application travels along the curve $\gamma$ from the position $P_1$ to the position $P_2$, the **work** of the force along $\gamma$ is
$$
L = \int_\gamma \vec{F} \cdot dP ,
$$
measured in joules, with $1\,\mathrm{J} = 1\,\mathrm{N}\,\mathrm{m}$. For a constant force the integral depends only on the endpoints, therefore $L = \vec{F} \cdot (P_2 - P_1)$. The weight $-mg\,\hat{\jmath}$ of a particle that passes from the height $y_1$ to the height $y_2$ hence does the work $mg\,(y_1 - y_2)$, positive when the particle descends.

::struttura{linee="0,0 0.8,0.55 1.6,0.9 2.4,1.1 3.2,1.25 4,1.5" punti="2.4,1.1,P" forze="2.4 1.1,1,0.75,F" frecce="2.4,1.1,3.18,1.25,dP" etichette="0.05,-0.4,P_1;4.05,1.75,P_2" titolo="The elementary work $dL = \vec{F} \cdot dP$ depends on the angle between the force and the displacement of the point of application"}

:::

:::definizione{#lavoro-di-un-sistema-di-forze titolo="Work of a system of forces and power"}
Let a material system be acted upon by the forces $\vec{F}_1, \dots, \vec{F}_n$, applied respectively at the points $P_1, \dots, P_n$. The **elementary work of the system of forces** is the sum of the elementary works,
$$
dL = \sum_{i=1}^{n} \vec{F}_i \cdot dP_i ,
$$
and the **power** of the force system is
$$
\Pi = \sum_{i=1}^{n} \vec{F}_i \cdot \vec{v}_{P_i} ,
$$
so that $dL = \Pi\,dt$ and the power is measured in watts. A couple of moment $\mathcal{M}\,\hat{k}$ applied to a rigid body that rotates with angular velocity $\dot{\vartheta}\,\hat{k}$ has power $\mathcal{M}\,\dot{\vartheta}$ and elementary work $\mathcal{M}\,d\vartheta$, because its resultant is zero and its moment is the same with respect to every pole.
:::

## Conservative forces and potential

:::definizione{#forza-conservativa titolo="Conservative force and potential"}
Let $\vec{F}(P)$ be a force that depends only on the position of its point of application, defined on a connected region $D$ of space. The force is **conservative** if there exists a function $U : D \to \mathbb{R}$, called the **potential**, such that
$$
\vec{F} = \operatorname{grad} U .
$$
Throughout analytical mechanics this convention is adopted, with the plus sign in front of the gradient, and the function $V = -U$ is called the **potential energy**, so that $\vec{F} = -\operatorname{grad} V$; the mechanical energy of a system is $E = T + V$, where $T$ is the kinetic energy. The potential is determined up to an additive constant, since two functions with the same gradient on a connected region differ by a constant. The constant is discarded without consequences, because the work and the equilibrium configurations depend only on the derivatives of $U$.
:::

::::teorema{#lavoro-di-una-forza-conservativa titolo="Work of a conservative force"}
Let $\vec{F} = \operatorname{grad} U$ be a conservative force on the region $D$ and let $\gamma \subset D$ be a regular curve with endpoints $P_1$ and $P_2$. Then
$$
L = U(P_2) - U(P_1) = V(P_1) - V(P_2) ,
$$
therefore the work depends only on the initial position and on the final position, and not on the curve traveled; on a closed curve the work is hence zero. Once the potential is known, the work is then obtained without computing the line integral. The elastic force of constant $k$ that pulls a particle back towards the origin has potential $U = -\dfrac{1}{2}\,k\,r^2$, where $r$ is the distance from the origin; its work from $r_1 = \ell$ to $r_2 = 2\ell$ is therefore $-\dfrac{3}{2}\,k\,\ell^2$, whatever path is followed.

:::dimostrazione
Let $P(u)$, with $u \in [u_1, u_2]$, be a regular parametrization of $\gamma$, with $P(u_1) = P_1$ and $P(u_2) = P_2$. The composite function $u \mapsto U\big(P(u)\big)$ is differentiable and, by the chain rule,
$$
\frac{d}{du}\,U\big(P(u)\big) = \operatorname{grad} U\big(P(u)\big) \cdot \frac{dP}{du} = \vec{F}\big(P(u)\big) \cdot \frac{dP}{du} .
$$
The integrand of the work is thus the derivative of $U\big(P(u)\big)$, hence by the fundamental theorem of calculus
$$
L = \int_{u_1}^{u_2} \frac{d}{du}\,U\big(P(u)\big)\,du = U(P_2) - U(P_1) .
$$
The expression obtained contains only the endpoints, therefore the work does not depend on the curve; if $P_2 = P_1$ the difference is zero.
:::
::::

:::osservazione{#potenziale-di-un-sistema titolo="Potential of a system of forces"}
Let $\vec{F}_1, \dots, \vec{F}_n$ be conservative forces with potentials $U_1, \dots, U_n$. The elementary work of the force system is the sum of the elementary works, hence the overall force system is conservative and its potential is
$$
U = \sum_{i=1}^{n} U_i .
$$
For a system made of rods, disks, particles and springs one therefore writes one term for the weight of each body and one term for each spring. The viscous resistance $-h\,\vec{v}$ is not conservative, since it is not a function of position alone.
:::

## Standard potentials

The three potentials that follow cover almost all the force systems of the exercises.

::::teorema{#potenziale-del-peso titolo="Potential of the weight"}
Let a material system have total mass $M$ and center of mass $G$, subject to the gravitational field $-g\,\hat{\jmath}$ with $\hat{\jmath}$ vertical and pointing upwards. The weight of the system is conservative and has potential
$$
U = -M g\,y_G ,
$$
where $y_G$ is the height of the center of mass, and potential energy $V = M g\,y_G$. To write the potential of the weight it is therefore enough to have the height of the center of mass as a function of the generalized coordinates. A homogeneous rod of mass $m$ and length $\ell$, hinged at the origin and inclined by the angle $\vartheta$ with respect to the downward vertical, has its center of mass at the midpoint, at the height $y_G = -\dfrac{\ell}{2}\cos\vartheta$, therefore $U = \dfrac{m g \ell}{2}\cos\vartheta$.

::struttura{nodi="O,0,0;A,1.6,-2.2" aste="O-A" vincoli="O,cerniera,90" punti="0.8,-1.1,G,baricentro" tratteggi="0,0 0,-2.6;-1.1,-1.1 0.8,-1.1" forze="0.8 -1.1,0,-0.9,mg" etichette="0.32,-1,ϑ;-1.45,-1.1,y_G" titolo="The potential of the weight of a rod depends only on the height $y_G$ of the center of mass"}

:::dimostrazione
The weight of the point $P_i$ of mass $m_i$ is $-m_i g\,\hat{\jmath}$, and the function $-m_i g\,y_i$ has gradient $-m_i g\,\hat{\jmath}$, therefore the weight of each single point is conservative with potential $-m_i g\,y_i$. By the additivity of the potentials of a system of forces
$$
U = -g \sum_{i=1}^{N} m_i\,y_i .
$$
The definition of center of mass gives $M\,y_G = \sum_i m_i\,y_i$, as seen in the topic on mass geometry; substituting gives $U = -M g\,y_G$. For a continuous system the sum is an integral and the argument is the same.
:::
::::

::::teorema{#potenziale-della-molla titolo="Potential of a spring"}
An **ideal spring** of elastic constant $k$ and natural length $\ell_0$, with its ends at the points $A$ and $B$ of the system, exerts on $A$ the force
$$
\vec{F}_A = -k\,(\ell - \ell_0)\,\frac{A - B}{\ell} ,
\qquad
\ell = |A - B| ,
$$
and on $B$ the opposite force. The pair of forces is conservative with potential
$$
U = -\frac{1}{2}\,k\,(\ell - \ell_0)^2 ,
$$
a function of the distance $\ell$ between the ends alone. In the exercises one computes $\ell$ as a function of the generalized coordinates and substitutes. With $\ell_0 = 0$ the potential becomes $U = -\dfrac{1}{2}\,k\,\ell^2$, and the same expression holds when one of the two ends is a fixed point, because in that case the force applied at the fixed point does zero work.

::struttura{nodi="A,0,0;B,4,0" linee="0,0 0.5,0 0.75,0.35 1.25,-0.35 1.75,0.35 2.25,-0.35 2.75,0.35 3.25,-0.35 3.5,0 4,0" forze="A,0.95,0,F_A;B,-0.95,0,F_B" quote="A,B,ℓ,1" etichette="2,0.75,k" titolo="Spring of constant $k$ between the points $A$ and $B$: the potential $U = -\dfrac{1}{2}\,k\,(\ell - \ell_0)^2$ depends only on the distance $\ell$"}

:::dimostrazione
Set $\vec{w} = A - B$, so that $\ell = |\vec{w}|$ and $\vec{F}_A = -k\,\dfrac{\ell - \ell_0}{\ell}\,\vec{w}$. The elementary work of the pair of forces is
$$
dL = \vec{F}_A \cdot dA + \vec{F}_B \cdot dB = -k\,\frac{\ell - \ell_0}{\ell}\,\vec{w} \cdot (dA - dB) = -k\,\frac{\ell - \ell_0}{\ell}\,\vec{w} \cdot d\vec{w} ,
$$
since $\vec{F}_B = -\vec{F}_A$ and $dA - dB = d\vec{w}$. From the equality $\vec{w} \cdot \vec{w} = \ell^2$, differentiated, it follows that $\vec{w} \cdot d\vec{w} = \ell\,d\ell$, therefore
$$
dL = -k\,(\ell - \ell_0)\,d\ell = d\!\left[ -\frac{1}{2}\,k\,(\ell - \ell_0)^2 \right] .
$$
The elementary work is thus the differential of the function $-\dfrac{1}{2}\,k\,(\ell - \ell_0)^2$, which is therefore the potential of the pair of elastic forces.
:::
::::

:::teorema{#potenziale-forza-centrale titolo="Potential of a central force"}
Let $O$ be a fixed point, let $r = |P - O|$ and let $\hat{u} = \dfrac{P - O}{r}$. A force of the form $\vec{F} = f(r)\,\hat{u}$, with $f$ continuous, is called **central** and is conservative with potential an antiderivative of $f$,
$$
U(r) = \int f(r)\,dr ,
$$
since $\operatorname{grad} U(r) = U'(r)\,\operatorname{grad} r = f(r)\,\hat{u}$. The elastic force that pulls back towards $O$ has $f(r) = -k\,r$, therefore $U = -\dfrac{1}{2}\,k\,r^2$; the gravitational attraction of a mass $M$ placed at $O$ has $f(r) = -\dfrac{G\,m\,M}{r^2}$, therefore $U = \dfrac{G\,m\,M}{r}$. These potentials are used in the dynamics of a particle for one-dimensional conservative motions and for Keplerian motions.
:::

:::esempio{titolo="Potential of a rod with a spring"}
A homogeneous rod $OA$, of mass $m$ and length $\ell$, is hinged at the origin $O$ and moves in the vertical plane $Oxy$. A spring of constant $k$ and zero natural length connects the end $A$ to the fixed point $B = (0, \ell)$. The angle $\vartheta$ between the rod and the downward vertical, measured counterclockwise, is taken as the generalized coordinate, so that
$$
A - O = \ell\,(\sin\vartheta\,\hat{\imath} - \cos\vartheta\,\hat{\jmath}) ,
\qquad
y_G = -\frac{\ell}{2}\cos\vartheta .
$$
The length of the spring is obtained from the square of the distance,
$$
\ell_{AB}^{\,2} = \ell^2\sin^2\vartheta + (-\ell\cos\vartheta - \ell)^2 = \ell^2\,(2 + 2\cos\vartheta) ,
$$
therefore, adding the potential of the weight and that of the spring,
$$
U(\vartheta) = \frac{m g \ell}{2}\cos\vartheta - \frac{1}{2}\,k\,\ell^2\,(2 + 2\cos\vartheta) = \left( \frac{m g \ell}{2} - k\,\ell^2 \right)\cos\vartheta - k\,\ell^2 .
$$
The last term is constant and can be discarded. The system reappears in the equilibrium configurations and in the computation of the reaction of the hinge.

::struttura{nodi="O,0,0;A,1.3,-1.8;B,0,2.2" aste="O-A" vincoli="O,cerniera,90" punti="0.65,-0.9,G,baricentro" linee="0.00,2.20 0.12,1.82 0.40,1.69 0.11,1.14 0.66,0.88 0.37,0.33 0.93,0.07 0.64,-0.48 1.19,-0.74 0.90,-1.29 1.18,-1.42 1.30,-1.80" tratteggi="0,0 0,-2.2" forze="0.65 -2.35,0,-0.6,mg" etichette="0.3,-0.85,ϑ;1.25,0.8,k" titolo="Rod hinged at $O$ with a spring between $A$ and the fixed point $B = (0, \ell)$"}

:::

## Virtual displacements and virtual work

:::richiamo{titolo="Virtual displacements"}
Let a system have holonomic constraints, with $n$ degrees of freedom and generalized coordinates $q_1, \dots, q_n$, so that the position of each of its points is $P_i = P_i(q_1, \dots, q_n, t)$. The **virtual displacement** of the point $P_i$ starting from a given configuration is
$$
\delta P_i = \sum_{h=1}^{n} \frac{\partial P_i}{\partial q_h}\,\delta q_h ,
$$
where time is held fixed and the variations $\delta q_h$ are arbitrary and independent if the constraints are bilateral. With fixed constraints the virtual displacements coincide with the possible displacements, whereas with moving constraints the two families are different. See the topic on constraints and generalized coordinates.
:::

:::definizione{#lavoro-virtuale titolo="Virtual work"}
Let $\vec{F}_1, \dots, \vec{F}_N$ be a system of forces applied at the points $P_1, \dots, P_N$ of a constrained system. The **virtual work** of the force system, relative to a fixed virtual displacement, is
$$
\delta L = \sum_{i=1}^{N} \vec{F}_i \cdot \delta P_i .
$$
The forces are evaluated in the configuration from which one starts, therefore $\delta L$ is a linear function of the variations $\delta q_h$. One distinguishes the **active forces**, known as functions of the configuration, and the **constraint reactions**, which are unknown; their virtual works are denoted by $\delta L^{(a)}$ and $\delta L^{(v)}$.

::struttura{nodi="A,0,2.4;B,3.2,0" aste="A-B" vincoli="A,carrello,180;B,carrello" linee="0,-0.2 0,3.1;-0.3,0 4.1,0" tratteggi="0,1.9 3.6,0" punti="1.6,1.2,G,baricentro" frecce="0,2.4,0,1.9,δA;3.2,0,3.62,0,δB" titolo="Virtual displacement of a rod with its ends on two guides: the dashed configuration is the displaced one"}

:::

:::definizione{#componenti-lagrangiane titolo="Lagrangian components of the force system"}
Let a system have holonomic constraints with generalized coordinates $q_1, \dots, q_n$. Substituting into the expression of the virtual work the virtual displacements of the points of application gives
$$
\delta L = \sum_{i=1}^{N} \vec{F}_i \cdot \sum_{h=1}^{n} \frac{\partial P_i}{\partial q_h}\,\delta q_h = \sum_{h=1}^{n} Q_h\,\delta q_h ,
$$
where the number
$$
Q_h = \sum_{i=1}^{N} \vec{F}_i \cdot \frac{\partial P_i}{\partial q_h}
$$
is called the **Lagrangian component of the force system** relative to the coordinate $q_h$. The virtual work is thus written as a sum of $n$ terms, one for each degree of freedom, and the $Q_h$ are the quantities that appear in the equilibrium equations and in the Lagrange equations. If $q_h$ is an angle, the corresponding $Q_h$ has the dimensions of a moment; if $q_h$ is a length, it has the dimensions of a force.
:::

::::teorema{#componenti-lagrangiane-conservative titolo="Lagrangian components of a conservative force system"}
Let the active force system be conservative, with potential $U$, and let the constraints be fixed, so that the potential, expressed in the generalized coordinates, is the function $U(q_1, \dots, q_n)$. Then
$$
Q_h = \frac{\partial U}{\partial q_h} ,
\qquad h = 1, \dots, n .
$$
The Lagrangian components are therefore obtained by differentiating a single function, and this makes the potential the fastest tool for writing the equilibrium equations of a conservative system.

:::dimostrazione
Let $U$ be the potential of the force system as a function of the positions of the points, so that $\vec{F}_i = \operatorname{grad}_{P_i} U$. The composite function $U\big(P_1(q), \dots, P_N(q)\big)$ is differentiated with respect to $q_h$ by the chain rule,
$$
\frac{\partial U}{\partial q_h} = \sum_{i} \operatorname{grad}_{P_i} U \cdot \frac{\partial P_i}{\partial q_h} = \sum_{i} \vec{F}_i \cdot \frac{\partial P_i}{\partial q_h} = Q_h .
$$
:::
::::

::::teorema{#lavoro-virtuale-di-un-rigido titolo="Virtual work of a system of forces on a rigid body"}
Let a rigid body be given, let $\Omega$ be one of its points and let $\delta\vec{\vartheta}$ be the infinitesimal virtual rotation. The virtual displacements of the points of the rigid body are
$$
\delta P = \delta\Omega + \delta\vec{\vartheta} \wedge (P - \Omega) ,
$$
and the virtual work of a system of forces with resultant $\vec{R}$ and resultant moment $\vec{M}_\Omega$ is
$$
\delta L = \vec{R} \cdot \delta\Omega + \vec{M}_\Omega \cdot \delta\vec{\vartheta} .
$$
The virtual work on a rigid body therefore depends on the forces only through $\vec{R}$ and $\vec{M}_\Omega$, hence two equivalent systems of forces do the same virtual work. In the plane, with $\delta\vec{\vartheta} = \delta\vartheta\,\hat{k}$, the expression becomes $\delta L = \vec{R} \cdot \delta\Omega + M_\Omega\,\delta\vartheta$: for a rod that rotates about the fixed hinge $\Omega$ one has $\delta\Omega = \vec{0}$ and $\delta L = M_\Omega\,\delta\vartheta$.

:::dimostrazione
The formula for the virtual displacements of a rigid body follows from the fundamental formula of rigid-body kinematics, multiplied by the time interval and with time held fixed; see the topic on the kinematics of a rigid body. Substituting it into the virtual work gives
$$
\delta L = \sum_{i} \vec{F}_i \cdot \delta\Omega + \sum_{i} \vec{F}_i \cdot \big( \delta\vec{\vartheta} \wedge (P_i - \Omega) \big) .
$$
The first sum is $\vec{R} \cdot \delta\Omega$. In the second one uses the identity of the scalar triple product $\vec{a} \cdot (\vec{b} \wedge \vec{c}) = \vec{b} \cdot (\vec{c} \wedge \vec{a})$ with $\vec{a} = \vec{F}_i$, $\vec{b} = \delta\vec{\vartheta}$ and $\vec{c} = P_i - \Omega$, whence
$$
\sum_{i} \vec{F}_i \cdot \big( \delta\vec{\vartheta} \wedge (P_i - \Omega) \big) = \delta\vec{\vartheta} \cdot \sum_{i} (P_i - \Omega) \wedge \vec{F}_i = \vec{M}_\Omega \cdot \delta\vec{\vartheta} .
$$
:::
::::

## Ideal constraints

:::definizione{#vincolo-ideale titolo="Ideal constraint"}
A constraint is called **ideal**, or perfect, if the reactions it can exert are all and only those systems of forces whose virtual work satisfies
$$
\delta L^{(v)} \geq 0
$$
for every virtual displacement of the constrained system. If the constraint is bilateral, every virtual displacement is reversible, that is, $-\delta P_i$ is again virtual, therefore $\delta L^{(v)} \geq 0$ and $-\delta L^{(v)} \geq 0$ hold together, hence $\delta L^{(v)} = 0$: the reactions of an ideal bilateral constraint do zero virtual work. The definition identifies the reactions without knowing them one by one, and this makes it possible to eliminate them from the equilibrium equations.
:::

:::osservazione{#vincoli-ideali-esempi titolo="Which constraints are ideal"}
The smooth support, the smooth roller, the smooth hinge, the fixed support, the smooth sleeve, the inextensible string and contact with pure rolling are ideal. In the smooth hinge the reaction is applied at a fixed point, whose virtual displacement is zero, therefore the virtual work is zero; in the smooth support the reaction is normal to the surface and the virtual displacement is tangent, hence the two vectors are orthogonal; in pure rolling the reaction is applied at the point of contact, which has zero velocity and therefore zero virtual displacement. The internal reactions of a rigidity constraint and those of a smooth internal hinge also do zero virtual work overall, because the two forces that the bodies exchange are opposite and act on points that are displaced in the same way.
:::

:::attenzione
Sliding friction makes the constraint non-ideal. A particle resting on a rough plane receives a reaction with a tangential component opposite to the displacement, therefore $\delta L^{(v)} < 0$ for the virtual displacements other than the zero one, and the principle of virtual work does not apply. The equilibrium of a body resting with friction is studied with the cardinal equations of statics and with the Coulomb-Morin law, as seen in the topic on constraints and generalized coordinates.
:::

## The principle of virtual work

::::teorema{#principio-dei-lavori-virtuali titolo="Principle of virtual work"}
Let a material system have fixed and ideal holonomic constraints, subject to the active force system $\vec{F}_1, \dots, \vec{F}_N$. A configuration $C$ is an equilibrium configuration if and only if
$$
\delta L^{(a)} \leq 0
$$
for every virtual displacement starting from $C$. If all the constraints are bilateral the condition becomes
$$
\delta L^{(a)} = 0 ,
$$
and this is the form used in the great majority of problems. The principle provides the equilibrium equations without the constraint reactions appearing in them, therefore it makes it possible to find the equilibrium configurations of a system with many constraints by writing a single scalar equation for each degree of freedom.

::struttura{poligoni="0,0 3.4,0 3.4,1.9 0,1.9" nodi="Ω,0.6,0.6" punti="2.4,1.2,P" forze="2.4 1.2,0.9,0.6,F_i" frecce="0.6,0.6,1.3,0.95,δΩ" coppie="1.75 0.55,1,δϑ" titolo="Virtual displacement of a rigid body: the translation $\delta\Omega$ and the rotation $\delta\vartheta$ determine $\delta P$ at every point"}

:::dimostrazione
The statement is proved for a constrained rigid body, the case in which the cardinal equations of statics are necessary and sufficient for equilibrium, as seen in the topic on the statics of systems. Let $\Omega$ be a point of the rigid body, and let $\vec{R}^{(a)}$, $\vec{M}_\Omega^{(a)}$ be the resultant and the resultant moment of the active forces, $\vec{R}^{(v)}$, $\vec{M}_\Omega^{(v)}$ those of the reactions.

Suppose that $C$ is an equilibrium configuration. Then the cardinal equations are satisfied,
$$
\begin{cases}
\vec{R}^{(a)} + \vec{R}^{(v)} = \vec{0} \\[4pt]
\vec{M}_\Omega^{(a)} + \vec{M}_\Omega^{(v)} = \vec{0}
\end{cases}
$$
By the virtual work of a system of forces on a rigid body, taking the scalar product of the first equation with $\delta\Omega$ and of the second with $\delta\vec{\vartheta}$ and adding, one obtains $\delta L^{(a)} + \delta L^{(v)} = 0$ for every virtual displacement. The constraints are ideal, therefore $\delta L^{(v)} \geq 0$, hence $\delta L^{(a)} = -\delta L^{(v)} \leq 0$.

Suppose conversely that $\delta L^{(a)} \leq 0$ for every virtual displacement, and consider the system of forces with resultant $-\vec{R}^{(a)}$ and moment $-\vec{M}_\Omega^{(a)}$. Its virtual work is
$$
-\vec{R}^{(a)} \cdot \delta\Omega - \vec{M}_\Omega^{(a)} \cdot \delta\vec{\vartheta} = -\delta L^{(a)} \geq 0 ,
$$
hence it is a system of reactions that the ideal constraint can exert. With these reactions the two cardinal equations are satisfied, and since for a rigid body they are sufficient for equilibrium, the configuration $C$ is an equilibrium configuration. For a system of several connected rigid bodies the argument is repeated on each body, taking into account that the virtual work of the internal reactions of the ideal connecting constraints is zero.
:::
::::

:::osservazione{#plv-e-equazioni-cardinali titolo="Comparison with the cardinal equations"}
The cardinal equations of statics and the principle of virtual work give the same equilibrium configurations, but they require different computations. The cardinal equations also contain the constraint reactions, therefore for a system of $c$ bodies in the plane one writes $3c$ equations and solves the system for the reactions and the coordinates. The principle of virtual work eliminates the reactions and gives $n$ equations, one for each degree of freedom. For a system with one degree of freedom made of three rods the first method leads to nine equations, the second to a single one.
:::

## Equilibrium configurations

::::teorema{#equilibrio-stazionarieta-del-potenziale titolo="Equilibrium and stationarity of the potential"}
Let a system have fixed, ideal and bilateral holonomic constraints, with $n$ degrees of freedom and generalized coordinates $q_1, \dots, q_n$, and let the active force system be conservative with potential $U(q_1, \dots, q_n)$ of class $C^1$. A configuration is an equilibrium configuration if and only if it is a stationary point of the potential, that is,
$$
\begin{cases}
\dfrac{\partial U}{\partial q_1} = 0 \\[6pt]
\;\;\vdots \\[4pt]
\dfrac{\partial U}{\partial q_n} = 0
\end{cases}
$$
The equilibrium configurations of a conservative system are therefore found by writing the potential and setting its partial derivatives equal to zero, and they are also the stationary points of the potential energy $V = -U$. For $n = 1$ one solves the single equation $U'(q) = 0$.

:::dimostrazione
The constraints are ideal and bilateral, therefore by the principle of virtual work the configuration is an equilibrium configuration if and only if $\delta L^{(a)} = 0$ for every virtual displacement. The force system is conservative and the constraints are fixed, hence by the Lagrangian components of a conservative force system
$$
\delta L^{(a)} = \sum_{h=1}^{n} Q_h\,\delta q_h = \sum_{h=1}^{n} \frac{\partial U}{\partial q_h}\,\delta q_h .
$$
The constraints are bilateral, therefore the variations $\delta q_1, \dots, \delta q_n$ are arbitrary and independent. Choosing $\delta q_h = 1$ and all the others zero gives $\dfrac{\partial U}{\partial q_h} = 0$ for every $h$; conversely, if all the partial derivatives are zero the sum is zero for every choice of the variations.
:::
::::

:::esempio{titolo="Equilibrium configurations of the rod with the spring"}
For the rod hinged at $O$ with the spring between $A$ and $B = (0, \ell)$ the potential computed previously is
$$
U(\vartheta) = \left( \frac{m g \ell}{2} - k\,\ell^2 \right)\cos\vartheta - k\,\ell^2 ,
$$
therefore
$$
U'(\vartheta) = -\left( \frac{m g \ell}{2} - k\,\ell^2 \right)\sin\vartheta .
$$
If $k \neq \dfrac{m g}{2 \ell}$ the coefficient is different from zero, therefore the equation $U'(\vartheta) = 0$ is equivalent to $\sin\vartheta = 0$ and the equilibrium configurations are two, $\vartheta = 0$ with the rod vertical and pointing downwards and $\vartheta = \pi$ with the rod vertical and pointing upwards. If instead $k = \dfrac{m g}{2 \ell}$ the potential is constant, hence **every configuration is an equilibrium configuration**: in that case the moment of the spring with respect to $O$ balances the moment of the weight for every value of $\vartheta$.

::grafico{f="0.6*cos(x)-1;-0.6*cos(x)-1;-1" xmin=-3.4 xmax=3.4 ymin=-1.9 ymax=-0.2 nomi="ϑ,U" legenda="k < \dfrac{mg}{2\ell};k > \dfrac{mg}{2\ell};k = \dfrac{mg}{2\ell}" titolo="The potential $U(\vartheta)$ in units of $k\,\ell^2$: the stationary points are $\vartheta = 0$ and $\vartheta = \pi$, and in the case $k = \dfrac{mg}{2\ell}$ the potential is constant"}

:::

:::attenzione
The equation $U'(\vartheta) = 0$ identifies the equilibrium configurations and says nothing about their stability. In the example of the rod with the spring, with $k < \dfrac{m g}{2 \ell}$ the two configurations $\vartheta = 0$ and $\vartheta = \pi$ are both equilibrium configurations, but the first is stable and the second unstable. Stability is studied with the Lagrange-Dirichlet theorem and with the Hessian matrix of the potential energy, in the topic on equilibrium, stability and small oscillations.
:::

## Constraint reactions with virtual work

::::teorema{#reazione-vincolare-con-il-plv titolo="Computation of a constraint reaction"}
Let a system be in equilibrium in the configuration $C$, with ideal and bilateral constraints, and let the reaction $\vec{\Phi}$ of one of the constraints, applied at the point $P$, be unknown. That constraint is removed and the force $\vec{\Phi}$ is applied to the system at $P$ as an active force. The system so obtained has more degrees of freedom, its remaining constraints are still ideal and bilateral, and the configuration $C$ is an equilibrium configuration for it as well; the principle of virtual work therefore gives
$$
\delta L^{(a)} + \vec{\Phi} \cdot \delta P = 0
$$
for every virtual displacement of the released system. Choosing the virtual displacements that the added coordinates make possible, one obtains as many scalar equations as there are unknown components of $\vec{\Phi}$. The method computes one reaction at a time, without writing the cardinal equations of all the bodies of the system.

:::dimostrazione
Denote by $S$ the original system and by $S'$ the one without the constraint under consideration. In the configuration $C$ the system $S$ is in equilibrium, hence each of its points has zero resultant of the forces acting on it. In $S'$ the same forces act, because the removed reaction has been put back as the active force $\vec{\Phi}$; therefore in $C$ the system $S'$ too is in equilibrium. The remaining constraints of $S'$ are ideal and bilateral, therefore the principle of virtual work applies to $S'$ and gives the vanishing of the virtual work of all its active forces, which are the original ones together with $\vec{\Phi}$.
:::
::::

:::esempio{titolo="Reaction of the hinge of the rod with the spring"}
The reaction $\vec{\Phi}_O$ of the hinge is computed in the equilibrium configuration $\vartheta = 0$ of the rod with the spring. The hinge is removed and the force $\vec{\Phi}_O$ is applied at $O$: the rod, free in the plane, has three degrees of freedom, and the virtual displacements of translation $\delta O = \delta x\,\hat{\imath} + \delta y\,\hat{\jmath}$ are considered, for which every point of the rod is displaced by $\delta O$. In the configuration $\vartheta = 0$ one has $A = (0, -\ell)$ and $B = (0, \ell)$, therefore the spring has length $2\ell$ and exerts on $A$ the force
$$
-k\,(A - B) = 2\,k\,\ell\,\hat{\jmath} ,
$$
directed upwards. The weight $-m g\,\hat{\jmath}$ acts at $G$. The virtual work of the active forces and of $\vec{\Phi}_O$ for the translation is
$$
\delta L = \Phi_{Ox}\,\delta x + \big( \Phi_{Oy} + 2\,k\,\ell - m g \big)\,\delta y = 0 ,
$$
and since $\delta x$ and $\delta y$ are arbitrary and independent one obtains
$$
\Phi_{Ox} = 0 ,
\qquad
\Phi_{Oy} = m g - 2\,k\,\ell .
$$
The reaction is **vertical**, directed upwards if $k < \dfrac{m g}{2 \ell}$ and downwards if $k > \dfrac{m g}{2 \ell}$, because in the second case the spring pulls the rod upwards more than the rod weighs and the hinge holds it back. The cardinal equations of statics give the same result: the vertical translation is $\Phi_{Oy} - m g + 2\,k\,\ell = 0$, whereas the rotation about $O$ is identically satisfied, since the weight and the elastic force have lines of action passing through $O$.

::struttura{nodi="O,0,0;A,0,-4" aste="O-A" punti="0,-2,G,baricentro" forze="0 -2,0,-0.55,mg;A,0,0.8,2kℓ" reazioni="O,0,0.7,Φ_Oy" titolo="Free-body diagram of the rod in the configuration $\vartheta = 0$, with the reaction of the hinge in the second color"}

:::

## Equilibrium with unilateral constraints

:::definizione{#configurazioni-di-confine titolo="Ordinary and boundary configurations"}
Let a system have unilateral constraints, expressed by inequalities $f_j(q) \geq 0$. A configuration is called **ordinary** if in it all the inequalities are satisfied strictly, and a **boundary** configuration if at least one of them is satisfied with equality. In an ordinary configuration all the virtual displacements are reversible, because small variations of the coordinates in both directions preserve the inequalities; in a boundary configuration the displacements that leave the active constraint are virtual, whereas the opposite ones are not. A rod resting on a plane is in a boundary configuration, and the displacement that lifts it is virtual and not reversible.
:::

::::teorema{#equilibrio-vincoli-unilaterali titolo="Equilibrium with unilateral constraints"}
Let a system have fixed and ideal holonomic constraints, with unilateral constraints as well, and let the active force system be conservative with potential $U$. A configuration is an equilibrium configuration if and only if
$$
\sum_{h=1}^{n} \frac{\partial U}{\partial q_h}\,\delta q_h \leq 0
$$
for every virtual displacement. In an ordinary configuration the condition is equivalent to the vanishing of all the partial derivatives of $U$; in a boundary configuration the inequality remains, and it translates into a condition on the data of the problem. In the exercises the inequality provides the **no-detachment condition** of a unilateral support, and the value of the data that makes it an equality identifies the detachment.

:::dimostrazione
By the principle of virtual work the configuration is an equilibrium configuration if and only if $\delta L^{(a)} \leq 0$ for every virtual displacement. The force system is conservative and the constraints are fixed, therefore $\delta L^{(a)} = \sum_h \dfrac{\partial U}{\partial q_h}\,\delta q_h$, whence the condition of the statement. In an ordinary configuration every virtual displacement is reversible, therefore from the inequality applied to $\delta q$ and to $-\delta q$ the equality to zero follows, and one falls back on the bilateral case.
:::
::::

:::esempio{titolo="Detachment of a support"}
A homogeneous rod $AB$, of mass $m$ and length $2\ell$, is hinged at $A$ and rests at $B$ on a horizontal plane that can only push it upwards; a couple of moment $\mathcal{M}$ in the counterclockwise direction acts on the rod. The system has one degree of freedom, the angle $\vartheta$ of rotation about $A$, and the virtual displacements starting from the horizontal configuration are those with $\delta\vartheta \geq 0$, because the support prevents $B$ from descending. The center of mass is at distance $\ell$ from $A$, therefore $\delta y_G = \ell\,\delta\vartheta$ and
$$
\delta L^{(a)} = -m g\,\ell\,\delta\vartheta + \mathcal{M}\,\delta\vartheta = (\mathcal{M} - m g \ell)\,\delta\vartheta .
$$
The condition $\delta L^{(a)} \leq 0$ for every $\delta\vartheta \geq 0$ is equivalent to
$$
\mathcal{M} \leq m g \ell ,
$$
and for $\mathcal{M} = m g \ell$ the support is on the point of detaching, because its reaction vanishes. The cardinal equations give the same conclusion: the rotation about $A$ is $2\ell\,\Phi_B - m g \ell + \mathcal{M} = 0$, therefore $\Phi_B = \dfrac{m g \ell - \mathcal{M}}{2\ell}$, and the reaction of the support is directed upwards if and only if $\mathcal{M} \leq m g \ell$.

::struttura{nodi="A,0,0;B,3.4,0" aste="A-B" vincoli="A,cerniera" linee="2.85,-0.16 3.95,-0.16" punti="1.7,0,G,baricentro" forze="1.7 0,0,-0.9,mg" coppie="2.55 0.6,1,ℳ" frecce="3.4,0,3.4,0.65,δy_B" quote="A,1.7 0,ℓ,0.95;1.7 0,B,ℓ,0.95" titolo="Rod hinged at $A$ and resting at $B$: the virtual displacement lifts $B$ and the condition $\delta L^{(a)} \leq 0$ gives $\mathcal{M} \leq m g \ell$"}

:::
