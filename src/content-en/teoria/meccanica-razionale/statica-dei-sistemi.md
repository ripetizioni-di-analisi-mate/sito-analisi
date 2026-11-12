---
titolo: "Statics of a particle and of systems: cardinal equations"
sommario: When a particle and a system of rigid bodies remain at rest, how the cardinal equations of statics are written, why for a rigid body they are also sufficient and how they are used to compute the constraint reactions and the equilibrium configurations.
---

## Equilibrium of a particle

:::definizione{#configurazione-di-equilibrio titolo="Equilibrium configuration"}
Consider a material system subject to fixed constraints and to forces that depend on the configuration alone. A configuration compatible with the constraints is called an **equilibrium configuration** if the system, placed in that configuration with zero velocities, remains in it at every subsequent instant.

The definition concerns rest, therefore throughout this topic the velocities and the accelerations of the points are zero and the equations that are written contain only the forces and their positions. The equilibrium configurations of a system with one degree of freedom are found by solving an equation in the Lagrangian coordinate, and the constraint reactions are obtained from the remaining equations.
:::

:::teorema{#equilibrio-punto-libero titolo="Equilibrium of a free particle"}
Let $P$ be a free particle subject to the forces $\vec{F}_1, \dots, \vec{F}_n$. Then $P$ is in equilibrium in the position considered if and only if the resultant of the forces vanishes:
$$
\vec{R} = \sum_{i=1}^{n} \vec{F}_i = \vec{0} .
$$
The condition follows from Newton's law $m\,\vec{a}_P = \vec{R}$. Indeed, if $\vec{R} = \vec{0}$, the acceleration is zero and the particle at rest remains at rest; if conversely the particle is at rest, then $\vec{a}_P = \vec{0}$ and therefore $\vec{R} = \vec{0}$. In the plane the vector condition is equivalent to the two scalar equations $R_x = 0$ and $R_y = 0$. A particle of mass $m$ hanging from a vertical spring of constant $k$ and natural length $\ell_0$ is in equilibrium when the elastic force balances the weight, therefore when the spring has length $\ell_0 + \dfrac{m g}{k}$.
:::

:::definizione{#reazione-vincolare titolo="Active forces and constraint reactions"}
The forces applied to a particle are divided into **active forces**, known as functions of the position (the weight, the force of a spring, an assigned force), and **constraint reactions** $\vec{\Phi}$, exerted by the constraints and unknown. If $\vec{F}$ denotes the resultant of the active forces, the equilibrium of the constrained particle is written as
$$
\vec{F} + \vec{\Phi} = \vec{0} .
$$
A constraint is called **smooth** when the reaction it exerts is orthogonal to the curve or to the surface on which the particle is forced to remain; throughout this topic the constraints are smooth and bilateral, unless stated otherwise. The previous equation contains the two unknown components of $\vec{\Phi}$ in the plane, therefore by itself it does not determine the equilibrium, and it is consequently necessary to separate out the part that concerns the active forces alone. For a particle resting on a smooth horizontal plane and subject to the weight alone, the reaction is $\vec{\Phi} = m g\,\hat{\jmath}$ and is normal to the plane, as the smooth constraint requires.
:::

::::teorema{#equilibrio-punto-vincolato titolo="Equilibrium of a particle on a smooth curve or surface"}
Let $P$ be a particle constrained to a smooth fixed curve $\gamma$, and let $\vec{F}$ be the resultant of the active forces. Then $P$ is in equilibrium if and only if
$$
\vec{F} \cdot \hat{t} = 0 ,
$$
where $\hat{t}$ is the unit tangent vector to $\gamma$ at $P$; in that case the constraint reaction is $\vec{\Phi} = -\,\vec{F}$. For a particle constrained to a smooth surface the condition is that $\vec{F}$ be orthogonal to the surface, that is, that its two tangential components vanish.

The condition $\vec{F} \cdot \hat{t} = 0$ is a single scalar equation in the coordinate that locates $P$ on $\gamma$, therefore it determines the equilibrium configurations without the reactions appearing. Once the configuration has been found, the reaction is read off from the equation $\vec{\Phi} = -\,\vec{F}$. For a particle of mass $m$ on a smooth straight guide inclined at $\alpha$ to the horizontal, with a spring of constant $k$ and zero natural length connecting it to the upper end of the guide, the condition gives $mg\sin\alpha - k s = 0$, therefore the equilibrium distance from the end is $s = \dfrac{mg\sin\alpha}{k}$.

::grafico{assi=0 uguale=1 curve="2*cos(t),2*sin(t),0,6.29" vettori="1.41,-1.41,2.26,-2.26,F;1.41,-1.41,0.56,-0.56,Φ;1.41,-1.41,2.26,-0.56" punti="1.41,-1.41,pieno,P;0,0,pieno,O" etichette="2.45,-0.35,t" xmin=-2.8 xmax=3.4 ymin=-3.2 ymax=2.6 titolo="Particle on a smooth circular guide: the reaction $\vec{\Phi}$ is orthogonal to the guide, therefore it has no component along the unit tangent vector $\hat{t}$; equilibrium requires that the active force $\vec{F}$ have none either"}

:::dimostrazione
The particle is at rest if and only if the resultant of all the forces vanishes, that is, $\vec{F} + \vec{\Phi} = \vec{0}$. Since the constraint is smooth, the reaction is orthogonal to $\gamma$, therefore $\vec{\Phi} \cdot \hat{t} = 0$. Projecting the equilibrium equation onto $\hat{t}$ one then obtains
$$
\vec{F} \cdot \hat{t} + \vec{\Phi} \cdot \hat{t} = \vec{F} \cdot \hat{t} = 0 ,
$$
which is the required condition, necessary because it has been derived from the equilibrium.

Conversely, let $\vec{F} \cdot \hat{t} = 0$. Set $\vec{\Phi} = -\,\vec{F}$. This vector is orthogonal to $\hat{t}$, since $\vec{\Phi} \cdot \hat{t} = -\,\vec{F} \cdot \hat{t} = 0$, therefore it is a reaction that the smooth constraint can exert. With such a reaction the resultant of all the forces vanishes, therefore the particle at rest remains at rest and the configuration is one of equilibrium.
:::
::::

## Unilateral constraints and detachment

Constraints that prevent displacement in one direction only, such as the support on a plane, add an inequality to the equilibrium equations.

:::teorema{#vincolo-unilaterale titolo="Equilibrium with a unilateral constraint"}
Let $P$ be a particle resting on a smooth surface that can only push, and let $\hat{n}$ be the unit normal vector to the surface directed toward the side on which the particle is free to move. The reaction is then of the form $\vec{\Phi} = \Phi\,\hat{n}$ with $\Phi \ge 0$, and the configuration is one of equilibrium if and only if
$$
\begin{cases}
\vec{F} \cdot \hat{t} = 0 \\[4pt]
\Phi = -\,\vec{F} \cdot \hat{n} \ge 0
\end{cases}
$$
The first condition locates the configurations in which the active forces are orthogonal to the surface; the second says that in those configurations the active force must press against the surface. When $\Phi$ turns out to be negative the particle detaches from the constraint, and the value of the data that makes $\Phi$ vanish is the **detachment value**.

::struttura{linee="0,0 6,0" punti="2,0,P;4.6,0,P′" forze="2 0,0,-1.1,mg;4.6 0,0,-1.1,mg;4.6 0,0.9,0.9,F" reazioni="2 0,0,1.1,Φ" titolo="On the left the active force presses on the support and the reaction $\Phi = mg$ is positive; on the right the force $\vec{F}$ lifts the particle, and when its vertical component exceeds $mg$ the required reaction turns out to be negative, therefore the particle detaches"}
:::

:::richiamo{titolo="Coulomb-Morin law for static friction"}
A rough support constraint exerts a reaction $\vec{\Phi} = \Phi_n\,\hat{n} + \vec{\Phi}_t$, with $\Phi_n \ge 0$ and with the tangential component bounded by
$$
|\vec{\Phi}_t| \le f\,\Phi_n ,
$$
where $f$ is the coefficient of static friction. The admissible reactions form the cone of half-opening $\varphi = \arctan f$ about the normal, called the friction cone. We refer to the topic on constraints, degrees of freedom and Lagrangian coordinates.
:::

:::teorema{#equilibrio-con-attrito titolo="Equilibrium with friction"}
Let $P$ be a particle resting on a rough surface with coefficient of static friction $f$, and let $\vec{F}$ be the resultant of the active forces, with components $F_n = \vec{F} \cdot \hat{n}$ and $\vec{F}_t$. The configuration is one of equilibrium if and only if
$$
\begin{cases}
F_n \le 0 \\[4pt]
|\vec{F}_t| \le f\,|F_n|
\end{cases}
$$
The first condition says that the active force presses against the surface; the second that the tangential component which the constraint must balance falls inside the friction cone. In the presence of friction the equilibrium is realized in a *set* of configurations, therefore the answer to a problem with friction is an inequality. For a particle resting on a plane inclined at $\alpha$ one obtains $mg\sin\alpha \le f\,mg\cos\alpha$, that is, $\tan\alpha \le f$.

::grafico{assi=0 uguale=1 linee="-2.4,0 2.4,0" segmenti="0,0,0,2.6;0,0,-1.2,2.4;0,0,1.2,2.4" vettori="0,0,0.5,1.4,Φ;0,0,-0.5,-1.4,F" punti="0,0,pieno,P" etichette="0.5,1.95,φ;-1.75,2.75,friction cone" xmin=-2.8 xmax=2.8 ymin=-2 ymax=3.2 titolo="Friction cone of half-opening $\varphi = \arctan f$: equilibrium is possible if the required reaction, opposite to the active force $\vec{F}$, falls inside the cone"}
:::

## The cardinal equations of statics

:::definizione{#forze-interne-ed-esterne titolo="Internal and external forces"}
Consider a system of $N$ particles $P_1, \dots, P_N$. The applied forces are divided into **internal forces**, exerted between points of the system, and **external forces**, exerted by bodies that do not belong to the system. One sets
$$
\vec{R}^{(e)} = \sum_{i=1}^{N} \vec{F}_i^{(e)} ,
\qquad
\vec{M}_O^{(e)} = \sum_{i=1}^{N} (P_i - O) \wedge \vec{F}_i^{(e)} ,
$$
and analogously $\vec{R}^{(i)}$ and $\vec{M}_O^{(i)}$ for the internal forces. The division depends on which set of points is chosen as the system. In a system of two rods hinged to each other, for example, the force that one rod exerts on the other is internal if the system consists of the two rods and is external if the system is a single rod.
:::

::::teorema{#forze-interne-nulle titolo="Resultant and moment of the internal forces"}
For every material system the internal forces have zero resultant and zero resultant moment with respect to every pole $O$:
$$
\vec{R}^{(i)} = \vec{0} ,
\qquad
\vec{M}_O^{(i)} = \vec{0} .
$$
The result makes it possible to write the equilibrium equations of a system without knowing the internal forces, which in the exercises are the actions in the internal hinges and the tensions of the strings. Such forces disappear from the equations of the whole system and reappear when the equations of one of its subsystems are written.

:::dimostrazione
By the principle of action and reaction, the force $\vec{F}_{ij}$ that the point $P_j$ exerts on $P_i$ and the force $\vec{F}_{ji}$ that $P_i$ exerts on $P_j$ satisfy $\vec{F}_{ij} = -\,\vec{F}_{ji}$ and have the same line of action, the line $P_i P_j$. Summing over all the pairs, the terms cancel two by two, therefore $\vec{R}^{(i)} = \vec{0}$. For the moments one sums the contributions of a single pair:
$$
(P_i - O) \wedge \vec{F}_{ij} + (P_j - O) \wedge \vec{F}_{ji} = (P_i - P_j) \wedge \vec{F}_{ij} ,
$$
where $\vec{F}_{ji} = -\,\vec{F}_{ij}$ has been used. The vector $P_i - P_j$ is parallel to $\vec{F}_{ij}$, since the line of action is the line $P_i P_j$, therefore the cross product vanishes. Summing over all the pairs one obtains $\vec{M}_O^{(i)} = \vec{0}$.
:::
::::

::::teorema{#equazioni-cardinali titolo="Cardinal equations of statics"}
If a material system is in equilibrium, then for every pole $O$ the external forces satisfy the **cardinal equations of statics**
$$
\begin{cases}
\vec{R}^{(e)} = \vec{0} \\[4pt]
\vec{M}_O^{(e)} = \vec{0}
\end{cases}
$$
The two equations are *necessary* conditions for every system, whatever the constraints and the nature of the bodies. In plane problems they give three scalar equations, $R_x^{(e)} = 0$, $R_y^{(e)} = 0$ and $M_O^{(e)} = 0$, and in space six. They are the tool with which the constraint reactions are computed and the equilibrium equations of a system of rigid bodies are written. For a homogeneous rod of mass $m$ and length $\ell$, hinged at $A$ and resting on a roller support at $B$, the three scalar equations with the pole at $A$ are
$$
\begin{cases}
\Phi_{Ax} = 0 \\[4pt]
\Phi_{Ay} + \Phi_B - m g = 0 \\[4pt]
\ell\,\Phi_B - \dfrac{\ell}{2}\,m g = 0
\end{cases}
$$
and they give $\Phi_B = \dfrac{m g}{2}$, $\Phi_{Ay} = \dfrac{m g}{2}$ and $\Phi_{Ax} = 0$.

:::dimostrazione
Let the system be in equilibrium. Every point $P_i$ is at rest, therefore the resultant of all the forces acting on it vanishes:
$$
\vec{F}_i^{(e)} + \vec{F}_i^{(i)} = \vec{0} ,
\qquad i = 1, \dots, N .
$$
Summing the $N$ relations one obtains $\vec{R}^{(e)} + \vec{R}^{(i)} = \vec{0}$, and since $\vec{R}^{(i)} = \vec{0}$ by the theorem on the internal forces, it follows that $\vec{R}^{(e)} = \vec{0}$.

Multiplying the relation for $P_i$ on the left by $P_i - O$ as a cross product and summing one obtains
$$
\sum_{i=1}^{N} (P_i - O) \wedge \vec{F}_i^{(e)} + \sum_{i=1}^{N} (P_i - O) \wedge \vec{F}_i^{(i)} = \vec{M}_O^{(e)} + \vec{M}_O^{(i)} = \vec{0} ,
$$
and since $\vec{M}_O^{(i)} = \vec{0}$, it follows that $\vec{M}_O^{(e)} = \vec{0}$.
:::
::::

:::osservazione{#scelta-del-polo titolo="Choice of the pole"}
If $\vec{R}^{(e)} = \vec{0}$, by the formula for the change of pole one has $\vec{M}_{O'}^{(e)} = \vec{M}_O^{(e)}$ for every pair of poles, therefore the moment equation written with respect to one pole and the one written with respect to another are not independent, and in the plane the independent scalar equations remain three. The pole is consequently chosen where it is convenient, and the standard choice is a point at which the lines of action of several unknown reactions meet, because those reactions have zero moment and do not appear in the equation. In a rod with a hinge at $A$ and a roller support at $B$ the pole is taken at $A$, and the moment equation then contains the reaction of the roller support alone.
:::

## Sufficiency for the rigid body

:::attenzione
For a system that is not a rigid body the cardinal equations are necessary and not sufficient. Consider two points $P_1$ and $P_2$ free to slide on a smooth horizontal line and connected by a spring of constant $k$ and natural length $\ell_0$, with the forces $-\,F\,\hat{\imath}$ applied at $P_1$ and $F\,\hat{\imath}$ applied at $P_2$. The two forces have the same line of action and are opposite, therefore $\vec{R}^{(e)} = \vec{0}$ and $\vec{M}_O^{(e)} = \vec{0}$ *whatever* the distance $d$ between the two points. Equilibrium holds, however, only for
$$
d = \ell_0 + \frac{F}{k} ,
$$
that is, when the elastic force on each point balances the force applied at that point.
:::

:::richiamo{titolo="Uniqueness of the solution of the Cauchy problem"}
Let $\dot{\vec{y}} = \vec{g}(t, \vec{y})$ be a system of differential equations with $\vec{g}$ continuous and locally Lipschitz with respect to $\vec{y}$. Then for every initial datum $\vec{y}(t_0) = \vec{y}_0$ there exists exactly one solution in a neighborhood of $t_0$. We refer to the topic on differential equations in Mathematical Analysis 1.
:::

::::teorema{#sufficienza-corpo-rigido titolo="The cardinal equations are sufficient for the rigid body"}
Let $C$ be a rigid body and let one of its configurations compatible with the constraints be given. Then the configuration is one of equilibrium if and only if in it
$$
\begin{cases}
\vec{R}^{(e)} = \vec{0} \\[4pt]
\vec{M}_G^{(e)} = \vec{0}
\end{cases}
$$
where $G$ is the center of mass. For a rigid body in the plane one thus obtains three scalar equations, and for a free rigid body in space six, as many as there are degrees of freedom. The theorem is the reason why in the exercises one always reasons about rigid bodies and the cardinal equations suffice to solve them.

:::dimostrazione
Necessity is the theorem on the cardinal equations of statics. For sufficiency one uses the cardinal equations of dynamics, stated in the topic on the dynamics of systems, according to which for every material system
$$
M\,\vec{a}_G = \vec{R}^{(e)} ,
\qquad
\frac{d\vec{K}_G}{dt} = \vec{M}_G^{(e)} ,
$$
hold, and for a rigid body $\vec{K}_G = \mathbb{I}_G\,\vec{\omega}$. The rigid motion is determined by the position of $G$ and by the orientation of the body frame, that is, by six functions of time, and the two previous equations are six second-order differential equations in such functions, solvable for the second derivatives because the mass $M$ is positive and the inertia tensor $\mathbb{I}_G$ is invertible.

Consider now the state of rest in the assigned configuration, that is, $\vec{v}_G \equiv \vec{0}$, $\vec{\omega} \equiv \vec{0}$ and constant configuration. This function of time satisfies the six equations, since the left-hand side is identically zero and the right-hand side is zero by hypothesis, given that in the assigned configuration the resultant and the resultant moment of the external forces vanish. Since the Cauchy problem with initial datum of rest has exactly one solution, rest is *the* solution of the motion, therefore the configuration is one of equilibrium.
:::
::::

:::osservazione{#corpo-rigido-vincolato titolo="Constrained rigid body: unknowns and equations"}
A constrained plane rigid body has $n$ residual degrees of freedom and a certain number $r$ of unknown reaction components. The cardinal equations give three scalar equations, therefore the count is $3 = n + r$ when the problem is well posed. Three cases occur in the exercises:

- $n = 0$ and $r = 3$: the configuration is assigned and the three equations determine the three reactions, as for the rod with a hinge and a roller support.
- $n = 1$ and $r = 2$: one Lagrangian coordinate is unknown; one of the three equations determines it and the other two give the reactions, as for the rod hinged at one end.
- $r > 3$: the reactions are not determined by the cardinal equations alone, and the body is said to be statically indeterminate.
:::

## Constrained rigid bodies and free-body diagram

:::definizione{#diagramma-di-corpo-libero titolo="Free-body diagram"}
The **free-body diagram** of a body is the drawing of the body isolated from the constraints and from the other bodies, with all the active forces and all the reactions that the constraints and the removed bodies exert on it, each one drawn in a direction chosen a priori. The cardinal equations are written by reading the diagram, and a negative value of a component means that the true direction is opposite to the one drawn.

::struttura{nodi="A,0,0;B,5,0" aste="A-B" vincoli="A,cerniera;B,carrello" forze="2.5 0,0,-1.2,mg;5 0,0,-1.2,F" quote="A,B,ℓ" titolo="Rod with a hinge at $A$ and a roller support at $B$, loaded by the force $\vec{F}$ at the end"}

::struttura{nodi="A,0,0;B,5,0" aste="A-B" reazioni="A,1.2,0,Φ_Ax;A,0,1.2,Φ_Ay;B,0,1.2,Φ_B" forze="2.5 0,0,-1.2,mg;5 0,0,-1.2,F" quote="A,B,ℓ" titolo="Free-body diagram: three unknown reaction components and three cardinal equations"}
:::

:::richiamo{titolo="Reactions exerted by plane constraints"}
In the plane the constraints used in the exercises exert the following reactions: the fixed hinge at $A$ a force of components $\Phi_{Ax}$ and $\Phi_{Ay}$ applied at $A$; the roller support and the sleeve on a smooth guide a force orthogonal to the guide; the clamped support a force of two components and a couple $\Gamma_A$; the link a force directed along the connecting rod; the smooth unilateral support a normal force of assigned direction. We refer to the topic on constraints, degrees of freedom and Lagrangian coordinates.
:::

## Springs and strings

:::definizione{#forza-elastica titolo="Ideal spring and elastic force"}
An **ideal spring** of elastic constant $k$ and natural length $\ell_0$, connecting the points $A$ and $B$, exerts on $B$ the force
$$
\vec{F}_B = -\,k\,\big(|B - A| - \ell_0\big)\,\frac{B - A}{|B - A|}
$$
and on $A$ the opposite force. The force is directed along the line joining them, it is attractive when the spring is stretched and repulsive when it is compressed; its magnitude is $k$ times the change in length. In the case $\ell_0 = 0$, recurrent in the exercises because it simplifies the computations, the force on $B$ becomes $\vec{F}_B = -\,k\,(B - A)$, that is, it is proportional to the vector joining the two points. The work and the potential of the elastic force are treated in the topic on virtual work, the potential and equilibrium.

::struttura{nodi="A,0,0;B,5,0" aste="A-B" vincoli="A,cerniera" linee="5,0 5.3,0.35 5.9,-0.35 6.5,0.35 7.1,-0.35 7.4,0 8,0" punti="8,0,D" forze="B,0.9,0,F_B" etichette="6.3,0.75,k" titolo="Ideal spring between the end $B$ of the rod and the fixed point $D$: the force on $B$ is directed along $BD$ and equals $k$ times the elongation"}
:::

:::definizione{#filo-inestensibile titolo="Inextensible string and tension"}
An **ideal string** is inextensible, massless and perfectly flexible. It exerts on the bodies to which it is attached two forces directed along the string, of equal magnitude $T$, called the **tension**, oriented from each end toward the other; the tension satisfies $T \ge 0$, because a string pulls and does not push. An **ideal pulley**, massless and with a smooth pin, changes the direction of the string leaving its tension unchanged.

The string is therefore a unilateral constraint, and consequently the condition $T \ge 0$ must be checked at the end of the computation; a negative value means that in the configuration considered the string goes slack and the equilibrium must be re-examined without it. A particle of mass $m$ hanging from a vertical string fixed to the ceiling is in equilibrium with $T = m g$, and the same tension acts on the ceiling, directed downward.
:::

## Systems of several rigid bodies

:::teorema{#equazioni-cardinali-per-sottosistemi titolo="Cardinal equations for every subsystem"}
Let a material system be in equilibrium and let $S$ be any subset of its points. Then $S$ is in equilibrium, therefore the cardinal equations hold for $S$ with the forces external *to* $S$, among which appear the actions that the remaining points exert on $S$. The result follows from the theorem on the cardinal equations applied to $S$, given that every point of $S$ is at rest.

From this arises the method of computation for systems of several bodies, in which one first writes the cardinal equations of the whole system, where the internal actions do not appear, and then those of a single body, where the actions of the neighboring bodies do appear.
:::

:::definizione{#smontaggio titolo="Taking the system apart"}
To **take apart** a system of rigid bodies means to write the free-body diagram of each body, replacing every internal connection with the reactions that the two bodies exchange. For a plane system of $c$ rigid bodies one obtains $3c$ scalar equations. The unknowns are the components of the external reactions, the components of the internal reactions and the Lagrangian coordinates of the configuration, and the problem is well posed when their number is $3c$.

::struttura{nodi="A,0,0;B,2.5,2;C,5,0" aste="A-B;B-C" vincoli="A,cerniera;C,cerniera" cerniere="B" forze="1.25 1,0,-1,mg;3.75 1,0,-1,mg" quote="A,C,2ℓcosϑ,-3" titolo="Two rods hinged to each other at $B$ and hinged to the ground at $A$ and at $C$: the system has six reaction unknowns and six equations"}

::struttura{nodi="A,0,0;B,2.5,2" aste="A-B" vincoli="A,cerniera" forze="1.25 1,0,-1,mg" reazioni="B,-0.9,0,X_B;B,0,-0.9,Y_B" titolo="Free-body diagram of the rod $AB$: at $B$ the action of the rod $BC$ acts, of components $-X_B$ and $-Y_B$"}

::struttura{nodi="B,2.5,2;C,5,0" aste="B-C" vincoli="C,cerniera" forze="3.75 1,0,-1,mg" reazioni="B,0.9,0,X_B;B,0,0.9,Y_B" titolo="Free-body diagram of the rod $BC$: at $B$ the action of the rod $AB$ acts, of components $X_B$ and $Y_B$"}
:::

:::osservazione{#azione-e-reazione-interna titolo="Action and reaction in an internal hinge"}
In an internal hinge at $B$ between two bodies $C_1$ and $C_2$, the force that $C_1$ exerts on $C_2$ has components $X_B$ and $Y_B$ applied at $B$, and the force that $C_2$ exerts on $C_1$ has components $-X_B$ and $-Y_B$ applied at the same point. The internal hinge transmits a force and not a couple, since the two bodies can rotate with respect to each other.

In the free-body diagrams it is convenient to draw the two forces in opposite directions and to use the same symbols, so that the sign found by solving the equations of one body automatically holds for the other as well.
:::

## Equilibrium of a system with one degree of freedom

:::teorema{#equilibrio-un-grado-di-liberta titolo="Equilibrium equation of a system with one degree of freedom"}
Let a plane system of rigid bodies with one degree of freedom be given, with Lagrangian coordinate $q$ and with smooth constraints. Then among the $3c$ cardinal equations of the bodies that compose it one can be chosen in which no unknown constraint reaction appears, and such an equation has the form
$$
h(q) = 0 ;
$$
its solutions compatible with the constraints are the equilibrium configurations, and the remaining equations determine the reactions.

The equation is obtained by choosing the pole at the point at which the lines of action of the reactions meet, or else by projecting the first cardinal equation onto the direction orthogonal to the reactions. For a rod hinged at one end the equation is the moment equation with respect to the hinge; for a disk that rolls without slipping on a guide it is the moment equation with respect to the contact point, through which the line of action of the contact reaction passes.
:::

:::esempio{titolo="Hinged rod with a horizontal force"}
A homogeneous rod $OA$ of mass $m$ and length $\ell$ is hinged at $O$ in a vertical plane and at the end $A$ the horizontal force $\vec{F} = F\,\hat{\imath}$ acts, with $F > 0$. Let $\vartheta$ be the angle that $OA$ makes with the downward vertical, measured counterclockwise, so that
$$
A - O = \ell\sin\vartheta\,\hat{\imath} - \ell\cos\vartheta\,\hat{\jmath} ,
\qquad
G - O = \frac{\ell}{2}\sin\vartheta\,\hat{\imath} - \frac{\ell}{2}\cos\vartheta\,\hat{\jmath} .
$$
The moment equation with respect to $O$ does not contain the reaction of the hinge, since its line of action passes through $O$, and gives
$$
-\,\frac{mg\,\ell}{2}\sin\vartheta + F\,\ell\cos\vartheta = 0 ,
\qquad\text{therefore}\qquad
\tan\vartheta = \frac{2F}{mg} .
$$
The equilibrium configurations are two, $\vartheta_1 = \arctan\dfrac{2F}{mg}$ and $\vartheta_2 = \vartheta_1 + \pi$. The first cardinal equation then gives $\vec{\Phi}_O = -\,F\,\hat{\imath} + mg\,\hat{\jmath}$, the same in both configurations.

::struttura{nodi="O,0,0;A,2.1,-2.5" aste="O-A" vincoli="O,cerniera,90" tratteggi="0,0 0,-3.3" forze="A,1,0,F;1.05 -1.25,0,-1,mg" etichette="0.45,-2.6,ϑ" titolo="Rod hinged at $O$: at equilibrium $\tan\vartheta = \dfrac{2F}{mg}$"}
:::

:::attenzione
A solution of the equilibrium equation is to be accepted only if it is compatible with the constraints. For a particle resting on the inside of a smooth circular guide limited to the arc $|\vartheta| \le \dfrac{\pi}{3}$, with a horizontal force $F$ and the weight $mg$, the equation gives $\tan\vartheta = \dfrac{F}{mg}$; if $F > \sqrt{3}\,mg$ the solution falls outside the arc and the particle has no equilibrium configurations on the guide.
:::

## Checking the result

:::osservazione{#verifica-equazione-indipendente titolo="Check with an independent equation"}
After computing the reactions and the configurations it is convenient to substitute them into an equation that has not been used to obtain them. Three checks are in current use:

- the moment equation with respect to a second pole, written with the reactions found, must give $0$;
- the cardinal equations of a body of the system other than the one used must be satisfied by the same internal reactions;
- a limiting case must reproduce a known result, as happens for $k \to 0$, where the spring does not act and the hinged rod returns to the vertical, and for $f \to 0$, where the equilibrium condition with friction becomes that of the smooth constraint.

The check with the second pole is a genuine check when unknown reactions appear in the computation, because the moment equation with respect to the new pole contains them with different moment arms. In a system with one degree of freedom without unknown reactions in the configuration equation, on the other hand, the change of pole reproduces the same equation, and one then resorts to a limiting case or to the comparison between two subsystems.
:::
