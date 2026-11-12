---
titolo: "Dynamics of systems: cardinal equations and energy"
sommario: The two cardinal equations of dynamics for a system of material points, König's theorem for the angular momentum and for the kinetic energy, the kinetic energy theorem and the first integrals that follow from it.
---

## Internal forces and external forces

A mechanical system is made of several material points, and the forces acting on them are divided into two classes according to the body that exerts them.

:::definizione{#forze-interne-ed-esterne titolo="Internal forces and external forces"}
Let $S$ be a system of $N$ material points $P_1, \dots, P_N$ with masses $m_1, \dots, m_N$. The force $\vec{F}_i$ applied at the point $P_i$ splits into the sum
$$
\vec{F}_i = \vec{F}_i^{(e)} + \vec{F}_i^{(i)} ,
\qquad
\vec{F}_i^{(i)} = \sum_{j \neq i} \vec{F}_{ij} ,
$$
where $\vec{F}_{ij}$ is the force that the point $P_j$ of the system exerts on $P_i$. The forces $\vec{F}_i^{(i)}$ are the **internal forces**, exerted by the points of the system on one another; the force $\vec{F}_i^{(e)}$ is the **external force** applied at $P_i$, exerted by bodies that do not belong to $S$.

The distinction depends on the system under consideration. For two rods hinged to each other, the reaction that each rod exerts on the other at the internal hinge is a force internal to the system of the two rods and an external force for the single rod taken on its own. Which unknowns appear in the equations one writes depends on this choice.
:::

::::teorema{#risultante-delle-forze-interne titolo="Resultant and resultant moment of the internal forces"}
Assume that the internal forces satisfy the action and reaction principle in the strong form: for every pair of indices $i \neq j$ we have $\vec{F}_{ij} = -\,\vec{F}_{ji}$ and the vector $\vec{F}_{ij}$ is parallel to $P_i - P_j$. Then the resultant and the resultant moment of the internal forces vanish:
$$
\vec{R}^{(i)} = \sum_{i=1}^{N} \vec{F}_i^{(i)} = \vec{0} ,
\qquad
\vec{M}_O^{(i)} = \sum_{i=1}^{N} (P_i - O) \wedge \vec{F}_i^{(i)} = \vec{0}
$$
for every pole $O$. The theorem is the reason why the cardinal equations can be written even when the internal forces are unknown: the tensions of the strings, the reactions of the internal hinges and the actions that hold a rigid body together do not appear in them.

::struttura{punti="0,0,P_i,pieno;4,1.5,P_j,pieno" tratteggi="-1.5,-0.56 5.5,2.06" forze="0 0,1.25,0.47,F_ij;4 1.5,-1.25,-0.47,F_ji" titolo="The two internal forces of a pair have the same line of action, equal magnitudes and opposite directions, therefore their sum and their moment about every pole vanish"}

:::dimostrazione
The internal forces add up in pairs. For every pair $\{i, j\}$ the sum of the two terms is $\vec{F}_{ij} + \vec{F}_{ji} = \vec{0}$, hence the sum extended to all the pairs vanishes and $\vec{R}^{(i)} = \vec{0}$.

For the moments the terms are again added in pairs:
$$
(P_i - O) \wedge \vec{F}_{ij} + (P_j - O) \wedge \vec{F}_{ji}
= \big( (P_i - O) - (P_j - O) \big) \wedge \vec{F}_{ij}
= (P_i - P_j) \wedge \vec{F}_{ij} .
$$
The vector $\vec{F}_{ij}$ is parallel to $P_i - P_j$ by hypothesis, therefore the cross product vanishes. Every pair gives a vanishing contribution, hence $\vec{M}_O^{(i)} = \vec{0}$.
:::
::::

## Linear momentum and motion of the center of mass

:::definizione{#quantita-di-moto titolo="Linear momentum of a system"}
The **linear momentum** of the system $S$ is the sum of the linear momenta of its points:
$$
\vec{Q} = \sum_{i=1}^{N} m_i\,\vec{v}_i .
$$
For a continuous system of mass $M$ the sum becomes the integral $\vec{Q} = \displaystyle\int_S \vec{v}\,dm$. The linear momentum is measured in $\mathrm{kg\,m/s}$ and it is the quantity on which the first cardinal equation is read.
:::

::::teorema{#quantita-di-moto-e-centro-di-massa titolo="Linear momentum and velocity of the center of mass"}
Let $M = \sum_i m_i$ be the total mass and let $G$ be the center of mass of the system. Then
$$
\vec{Q} = M\,\vec{v}_G .
$$
The linear momentum of an arbitrary system therefore coincides with that of a single material point of mass $M$ moving as $G$ does. For a homogeneous rod of mass $m$ and length $\ell$ rotating about one of its endpoints with angular velocity $\dot{\vartheta}$ we have $v_G = \dfrac{\ell\,\dot{\vartheta}}{2}$, hence $Q = \dfrac{m\,\ell\,\dot{\vartheta}}{2}$.

::struttura{punti="0,0,m,pieno;4,0,2m,pieno;1,3,m,pieno;2.25,0.75,G,baricentro" tratteggi="0,0 4,0;4,0 1,3;1,3 0,0" titolo="The center of mass $G$ of three points of masses $m$, $2m$ and $m$: the linear momentum of the system is $\vec{Q} = 4m\,\vec{v}_G$"}

:::dimostrazione
The center of mass is defined by the relation $M\,(G - O) = \sum_i m_i\,(P_i - O)$, with $O$ a fixed point. The masses are constant, therefore the time derivative of the left-hand side is $M\,\vec{v}_G$ and that of the right-hand side is $\sum_i m_i\,\vec{v}_i = \vec{Q}$. The claim follows from the equality of the two derivatives.
:::
::::

::::teorema{#prima-equazione-cardinale titolo="First cardinal equation of dynamics"}
For every system of material points we have
$$
\dot{\vec{Q}} = \vec{R}^{(e)} ,
$$
where $\vec{R}^{(e)}$ is the resultant of the external forces alone. In the plane the equation gives the two scalar equations on the $x$ and $y$ components. It is used to obtain the reactions of the external constraints when the motion of the center of mass is known, and to obtain the motion of $G$ when the external forces are known.

:::dimostrazione
One writes Newton's equation for each point, $m_i\,\vec{a}_i = \vec{F}_i^{(e)} + \vec{F}_i^{(i)}$, and sums over $i$:
$$
\sum_i m_i\,\vec{a}_i = \vec{R}^{(e)} + \vec{R}^{(i)} .
$$
The left-hand side is the derivative of $\vec{Q} = \sum_i m_i \vec{v}_i$, since the masses are constant. By the theorem on the resultant of the internal forces we have $\vec{R}^{(i)} = \vec{0}$, hence $\dot{\vec{Q}} = \vec{R}^{(e)}$.
:::
::::

:::teorema{#teorema-del-centro-di-massa titolo="Theorem on the motion of the center of mass"}
The center of mass of a system moves as a material point of mass $M$ on which the resultant of the external forces acts:
$$
M\,\vec{a}_G = \vec{R}^{(e)} .
$$
The result follows from the first cardinal equation and from the equality $\vec{Q} = M \vec{v}_G$, differentiated once with respect to time. A body thrown in vacuum, rotating in any manner whatsoever, has a center of mass that describes a parabola, because the only external force is the weight $-Mg\,\hat{\jmath}$ and therefore $\vec{a}_G = -g\,\hat{\jmath}$.
:::

::::teorema{#conservazione-della-quantita-di-moto titolo="Conservation of the linear momentum"}
If $\vec{R}^{(e)} = \vec{0}$ during the motion, then $\vec{Q}$ is constant and the center of mass moves with uniform rectilinear motion. If only the component of $\vec{R}^{(e)}$ along a fixed direction $\vec{u}$ vanishes, then only the component $\vec{Q} \cdot \vec{u}$ stays constant.

::struttura{poligoni="0,0 1.2,0 1.2,0.9 0,0.9;3.4,0 5.2,0 5.2,0.9 3.4,0.9" linee="-0.6,0 6,0;1.2,0.45 1.47,0.72 1.92,0.18 2.37,0.72 2.82,0.18 3.13,0.45 3.4,0.45" etichette="0.6,0.45,m;4.3,0.45,3m;2.3,1.15,k" titolo="Two bodies pushed by a spring on a smooth horizontal plane: the horizontal component of $\vec{R}^{(e)}$ vanishes, therefore $Q_x$ stays constant"}

:::dimostrazione
From the first cardinal equation, $\vec{R}^{(e)} = \vec{0}$ gives $\dot{\vec{Q}} = \vec{0}$, hence $\vec{Q}$ is constant; from the equality $\vec{Q} = M \vec{v}_G$ it follows that $\vec{v}_G$ is constant. In the second case one projects the first cardinal equation onto $\vec{u}$, which is a fixed unit vector, and obtains $\dfrac{d}{dt}\big( \vec{Q} \cdot \vec{u} \big) = \vec{R}^{(e)} \cdot \vec{u} = 0$.
:::
::::

:::esempio{titolo="Two bodies and a spring on a smooth plane"}
Two bodies of mass $m$ and $3m$ rest on a smooth horizontal plane and press on a compressed spring; the system starts from rest. The vertical external forces, weight and reactions of the plane, balance each other, and in the horizontal direction no external forces act, therefore $Q_x$ stays zero. When the spring reaches its rest length and the bodies separate, the two velocities $v$ and $u$ satisfy $m v - 3 m u = 0$, hence $u = \dfrac{v}{3}$ and the body of larger mass moves away with a velocity three times smaller.
:::

## Angular momentum and second cardinal equation

:::definizione{#momento-angolare titolo="Angular momentum about a pole"}
The **angular momentum** (or moment of the linear momentum) of the system $S$ about the pole $O$ is
$$
\vec{K}_O = \sum_{i=1}^{N} (P_i - O) \wedge m_i\,\vec{v}_i ,
$$
and for a continuous system $\vec{K}_O = \displaystyle\int_S (P - O) \wedge \vec{v}\,dm$. For a planar system in the plane $Oxy$ the vector $\vec{K}_O$ is parallel to $\hat{k}$, and its component is positive when the system turns about $O$ counterclockwise. The angular momentum is measured in $\mathrm{kg\,m^2/s}$.

::struttura{punti="0,0,,pieno;3,2,P_i,pieno" frecce="0,0,2.9,1.93;3,2,5.2,1.2" etichette="-0.3,-0.35,O;1.75,0.8,P_i − O;4.45,1.1,m_i v_i" titolo="The angular momentum sums the moments of the vectors $m_i \vec{v}_i$ about the pole $O$"}
:::

::::teorema{#seconda-equazione-cardinale titolo="Second cardinal equation of dynamics"}
Let $O$ be a **fixed** point in the frame in which the motion is studied. Then
$$
\dot{\vec{K}}_O = \vec{M}_O^{(e)} ,
$$
where $\vec{M}_O^{(e)}$ is the resultant moment of the external forces alone about $O$. The equation serves to write a relation in which the constraint reactions whose line of action passes through $O$ do not appear. Choosing the pole at the fixed hinge of a rod one obtains an equation in the unknown of the motion alone.

:::dimostrazione
One differentiates the definition of $\vec{K}_O$ with respect to time, recalling that $O$ is fixed and therefore $\dfrac{d}{dt}(P_i - O) = \vec{v}_i$:
$$
\dot{\vec{K}}_O = \sum_i \vec{v}_i \wedge m_i\,\vec{v}_i + \sum_i (P_i - O) \wedge m_i\,\vec{a}_i .
$$
The first summand vanishes, since every cross product has its two factors parallel. In the second one substitutes $m_i \vec{a}_i = \vec{F}_i^{(e)} + \vec{F}_i^{(i)}$, obtaining $\vec{M}_O^{(e)} + \vec{M}_O^{(i)}$; by the theorem on the resultant moment of the internal forces we have $\vec{M}_O^{(i)} = \vec{0}$, hence $\dot{\vec{K}}_O = \vec{M}_O^{(e)}$.
:::
::::

::::teorema{#polo-mobile titolo="Second cardinal equation with a moving pole"}
Let $O$ be a point moving with velocity $\vec{v}_O$. Then
$$
\dot{\vec{K}}_O + \vec{v}_O \wedge M\,\vec{v}_G = \vec{M}_O^{(e)} .
$$
The form with the term $\dot{\vec{K}}_O$ alone is therefore recovered in three cases: $\vec{v}_O = \vec{0}$, that is a fixed pole; $O \equiv G$, because $\vec{v}_G \wedge \vec{v}_G = \vec{0}$; $\vec{v}_O$ parallel to $\vec{v}_G$. The case $O \equiv G$ is the one used when the system has no fixed points, for example for a rolling body.

:::dimostrazione
In the derivative of $\vec{K}_O$ the velocity of the pole now appears as well, because $\dfrac{d}{dt}(P_i - O) = \vec{v}_i - \vec{v}_O$:
$$
\dot{\vec{K}}_O = \sum_i (\vec{v}_i - \vec{v}_O) \wedge m_i\,\vec{v}_i + \sum_i (P_i - O) \wedge m_i\,\vec{a}_i .
$$
The terms $\vec{v}_i \wedge m_i \vec{v}_i$ vanish, therefore the first sum equals
$$
-\,\vec{v}_O \wedge \sum_i m_i\,\vec{v}_i = -\,\vec{v}_O \wedge \vec{Q} = -\,\vec{v}_O \wedge M\,\vec{v}_G .
$$
The second sum equals $\vec{M}_O^{(e)}$, as in the proof with a fixed pole. Moving the first summand to the left-hand side one obtains the claim.
:::
::::

:::teorema{#conservazione-del-momento-angolare titolo="Conservation of the angular momentum"}
Let $O$ be a fixed pole. If $\vec{M}_O^{(e)} = \vec{0}$ during the motion, then $\vec{K}_O$ is constant. If only the component of $\vec{M}_O^{(e)}$ along a fixed axis of unit vector $\vec{u}$ through $O$ vanishes, then only the component $\vec{K}_O \cdot \vec{u}$ stays constant, called axial angular momentum. The result follows from the second cardinal equation, projected onto $\vec{u}$ when the axis is fixed. On a platform turning about a smooth vertical axis, the weight and the reaction of the axis have vanishing axial moment, therefore $K_z$ is conserved even when the masses move on the platform.
:::

:::attenzione
The two cardinal equations are *necessary* conditions for the motion of an arbitrary system, and in general they are not sufficient to determine it. Two material points joined by a spring, free in the plane and subject to no external forces, have four unknown coordinates, whereas the cardinal equations give three scalar equations, in which the distance between the two points does not appear; the oscillation along the line joining them therefore remains undetermined, and to obtain it one needs Newton's equations of the single points or Lagrange's equations. The cardinal equations are enough to determine the motion when the system is a single rigid body, because then the configurations depend on three parameters in the plane and on six in space, as many as the scalar equations.
:::

## König's theorem

König's theorem refers the angular momentum and the kinetic energy to the motion of the center of mass, separating the contribution of the translation from that of the motion seen from $G$.

::::teorema{#koenig-momento-angolare titolo="König's theorem for the angular momentum"}
Let $O$ be a fixed pole and let $G$ be the center of mass. Then
$$
\vec{K}_O = \vec{K}_G + (G - O) \wedge M\,\vec{v}_G ,
$$
where $\vec{K}_G$ is the angular momentum about $G$. The angular momentum about an arbitrary pole is therefore obtained from the one about $G$ by adding the moment of the total linear momentum thought of as applied at $G$. For a homogeneous rod of mass $m$ and length $\ell$ hinged at the endpoint $A$ we have $K_G = \dfrac{1}{12}\,m\,\ell^2\,\dot{\vartheta}$ and the second term equals $m\,\dfrac{\ell}{2} \cdot \dfrac{\ell\,\dot{\vartheta}}{2}$, hence $K_A = \dfrac{1}{3}\,m\,\ell^2\,\dot{\vartheta}$.

::struttura{punti="0,0,O,pieno;3,2,G,baricentro;4.3,3,P_i,pieno" frecce="3,2,5,2,ξ;3,2,3,3.8,η" tratteggi="0,0 3,2;3,2 4.3,3" etichette="1.75,0.8,G − O" titolo="The frame of the center of mass translates with $G$: König's theorem separates the motion of $G$ from the motion relative to $G$"}

:::dimostrazione
One writes $P_i - O = (P_i - G) + (G - O)$ and decomposes the velocity as $\vec{v}_i = \vec{v}_G + \vec{v}_i'$, where $\vec{v}_i'$ is the velocity of $P_i$ in the frame translating with $G$. Substituting into the definition one obtains four sums:
$$
\vec{K}_O = \sum_i (P_i - G) \wedge m_i \vec{v}_i' + \Big( \sum_i m_i (P_i - G) \Big) \wedge \vec{v}_G + (G - O) \wedge \sum_i m_i \vec{v}_i' + (G - O) \wedge M \vec{v}_G .
$$
By the definition of center of mass we have $\sum_i m_i\,(P_i - G) = \vec{0}$, therefore the second sum vanishes; differentiating this same identity one obtains $\sum_i m_i \vec{v}_i' = \vec{0}$, therefore the third sum vanishes. The first sum is the angular momentum about $G$ computed with the relative velocities, and it coincides with $\vec{K}_G$ because
$$
\sum_i (P_i - G) \wedge m_i\,\vec{v}_i = \sum_i (P_i - G) \wedge m_i\,\vec{v}_i' + \Big( \sum_i m_i (P_i - G) \Big) \wedge \vec{v}_G = \sum_i (P_i - G) \wedge m_i\,\vec{v}_i' .
$$
There remains $\vec{K}_O = \vec{K}_G + (G - O) \wedge M \vec{v}_G$.
:::
::::

::::teorema{#koenig-energia-cinetica titolo="König's theorem for the kinetic energy"}
The kinetic energy of the system, $T = \dfrac{1}{2}\displaystyle\sum_i m_i\,v_i^2$, satisfies
$$
T = \frac{1}{2}\,M\,v_G^2 + T' ,
$$
where $T'$ is the kinetic energy computed in the frame translating with $G$. The first summand is the kinetic energy of translation of the whole mass, the second one that of the motion seen from $G$. The theorem is used in every exercise in which one writes $T$ of a system: one computes separately $v_G$ and the motion relative to $G$, which for a rigid body is a rotation.

:::dimostrazione
One substitutes $\vec{v}_i = \vec{v}_G + \vec{v}_i'$ into the definition of kinetic energy and expands the square of the magnitude:
$$
T = \frac{1}{2} \sum_i m_i \,\big( v_G^2 + 2\,\vec{v}_G \cdot \vec{v}_i' + v_i'^2 \big)
= \frac{1}{2}\,M\,v_G^2 + \vec{v}_G \cdot \sum_i m_i \vec{v}_i' + \frac{1}{2} \sum_i m_i\,v_i'^2 .
$$
The intermediate term vanishes, since $\sum_i m_i \vec{v}_i' = \vec{0}$, and the last one is $T'$.
:::
::::

## Kinetic energy of a rigid body

:::richiamo{titolo="Inertia tensor"}
The inertia tensor relative to the pole $G$ is the symmetric matrix $\mathbb{I}_G$ with diagonal entries $I_{xx} = \displaystyle\int (y^2 + z^2)\,dm$, and analogous ones, and with $-I_{xy}$, $-I_{xz}$, $-I_{yz}$ off the diagonal, where $I_{xy} = \displaystyle\int xy\,dm$ are the products of inertia. The moment of inertia about the axis through $G$ of unit vector $\vec{u}$ equals $I_u = \vec{u} \cdot \mathbb{I}_G\,\vec{u}$. See the topic on the geometry of masses.
:::

::::teorema{#energia-cinetica-del-rigido titolo="Kinetic energy of a rigid body"}
Let $C$ be a rigid body of mass $m$, with center of mass $G$ and angular velocity $\vec{\omega}$. Then
$$
T = \frac{1}{2}\,m\,v_G^2 + \frac{1}{2}\,\vec{\omega} \cdot \mathbb{I}_G\,\vec{\omega} .
$$
In planar rigid motion, with $\vec{\omega} = \dot{\vartheta}\,\hat{k}$ and $I_G$ the moment of inertia about the axis through $G$ orthogonal to the plane, the formula becomes
$$
T = \frac{1}{2}\,m\,v_G^2 + \frac{1}{2}\,I_G\,\dot{\vartheta}^2 .
$$
This is the formula with which the kinetic energy of all the systems of rods and disks of the exercises is written, by summing the contribution of each rigid body.

:::dimostrazione
By König's theorem we have $T = \dfrac{1}{2} m v_G^2 + T'$, where $T'$ is the kinetic energy in the frame translating with $G$. In that frame the motion of the rigid body is a rotation about $G$, hence $\vec{v}_i' = \vec{\omega} \wedge (P_i - G)$. Setting $\vec{r}_i = P_i - G$, one uses the identity $|\vec{\omega} \wedge \vec{r}_i|^2 = \omega^2 r_i^2 - (\vec{\omega} \cdot \vec{r}_i)^2$ and obtains
$$
T' = \frac{1}{2} \sum_i m_i \big( \omega^2 r_i^2 - (\vec{\omega} \cdot \vec{r}_i)^2 \big) = \frac{1}{2}\,\vec{\omega} \cdot \mathbb{I}_G\,\vec{\omega} ,
$$
since the last expression is the quadratic form associated with the inertia tensor, written componentwise. In the planar case $\vec{\omega} = \dot{\vartheta} \hat{k}$ is orthogonal to all the vectors $\vec{r}_i$, hence $\vec{\omega} \cdot \mathbb{I}_G \vec{\omega} = I_G\,\dot{\vartheta}^2$.
:::
::::

:::teorema{#energia-cinetica-atto-rotatorio titolo="Kinetic energy in a rotatory state of motion"}
If the rigid body has a point $A$ of zero velocity, then
$$
T = \frac{1}{2}\,I_a\,\dot{\vartheta}^2 ,
$$
where $I_a$ is the moment of inertia about the instantaneous axis of rotation through $A$. The result follows from the previous theorem and from the Huygens-Steiner theorem, since $v_G = \dot{\vartheta}\,|G - A|$ gives $T = \dfrac{1}{2}\big(I_G + m\,|G - A|^2\big)\dot{\vartheta}^2$. The formula shortens the computations for a rod hinged at one endpoint and for a disk rolling without slipping, in which the contact point has zero velocity.
:::

:::esempio{titolo="Disk rolling without slipping"}
A homogeneous disk of mass $m$ and radius $R$ rolls without slipping on a horizontal guide. The pure rolling condition gives $v_G = R\,|\dot{\vartheta}|$, and the moment of inertia of the disk about the axis through $G$ orthogonal to the plane equals $I_G = \dfrac{1}{2}\,m\,R^2$. From the formula for the kinetic energy of a rigid body it follows that
$$
T = \frac{1}{2}\,m\,R^2\,\dot{\vartheta}^2 + \frac{1}{2} \cdot \frac{1}{2}\,m\,R^2\,\dot{\vartheta}^2 = \frac{3}{4}\,m\,R^2\,\dot{\vartheta}^2 .
$$
The same value is obtained from the rotatory state of motion about the contact point $C$, because $I_C = \dfrac{1}{2}mR^2 + mR^2 = \dfrac{3}{2}mR^2$.

::struttura{cerchi="3,1.5,1.5" linee="0,0 7,0" punti="3,1.5,G,baricentro;3,0,C,centro" frecce="3,1.5,5.1,1.5,v_G" coppie="3 2.45,-1,ω" titolo="Disk rolling without slipping: the contact point $C$ has zero velocity, hence $T = \dfrac{1}{2}\,I_C\,\dot{\vartheta}^2$"}
:::

## Work, power and the kinetic energy theorem

:::definizione{#lavoro-e-potenza titolo="Work and power of a system of forces"}
The **power** of the system of forces applied at the points of $S$ is
$$
\Pi = \sum_{i=1}^{N} \vec{F}_i \cdot \vec{v}_i ,
$$
and the **work** done between the instants $t_1$ and $t_2$ is $L = \displaystyle\int_{t_1}^{t_2} \Pi\,dt$. The power splits into the contribution of the external forces and that of the internal forces, $\Pi = \Pi^{(e)} + \Pi^{(i)}$. The work is measured in $\mathrm{J}$ and the power in $\mathrm{W}$.
:::

::::teorema{#teorema-dell-energia-cinetica titolo="Kinetic energy theorem"}
For every system of material points we have
$$
\dot{T} = \Pi^{(e)} + \Pi^{(i)} ,
$$
and in integrated form $T(t_2) - T(t_1) = L^{(e)} + L^{(i)}$: the change of the kinetic energy is equal to the work of all the forces, external and internal. The theorem provides a scalar equation that does not contain the reactions of the ideal constraints, which have zero power, and it is used to obtain the velocity of a system with one degree of freedom as a function of the configuration.

:::dimostrazione
One multiplies Newton's equation of each point scalarly by $\vec{v}_i$ and sums:
$$
\sum_i m_i\,\vec{a}_i \cdot \vec{v}_i = \sum_i \vec{F}_i \cdot \vec{v}_i = \Pi^{(e)} + \Pi^{(i)} .
$$
The left-hand side is the derivative of $T$, since $\dfrac{d}{dt}\Big( \dfrac{1}{2} m_i\,\vec{v}_i \cdot \vec{v}_i \Big) = m_i\,\vec{a}_i \cdot \vec{v}_i$. Integrating between $t_1$ and $t_2$ one obtains the integrated form.
:::
::::

::::teorema{#lavoro-delle-forze-interne-di-un-rigido titolo="Work of the internal forces of a rigid body"}
The internal forces of a rigid body have zero power in every state of motion, hence $\Pi^{(i)} = 0$ and the kinetic energy theorem reduces to $\dot{T} = \Pi^{(e)}$. The same holds for a system of rigid bodies joined by ideal constraints, because the internal reactions of the ideal constraints have zero power too. For this reason, in the exercises on the dynamics of rigid systems the kinetic energy theorem contains only the work of the external active forces, that is of the weight and of the springs.

:::dimostrazione
The contributions are summed in pairs. For the pair $\{i, j\}$, using $\vec{F}_{ji} = -\vec{F}_{ij}$,
$$
\vec{F}_{ij} \cdot \vec{v}_i + \vec{F}_{ji} \cdot \vec{v}_j = \vec{F}_{ij} \cdot (\vec{v}_i - \vec{v}_j) .
$$
By the fundamental formula of rigid kinematics we have $\vec{v}_i - \vec{v}_j = \vec{\omega} \wedge (P_i - P_j)$, a vector orthogonal to $P_i - P_j$. The vector $\vec{F}_{ij}$ is parallel to $P_i - P_j$, hence the scalar product vanishes. Every pair gives a vanishing contribution, hence $\Pi^{(i)} = 0$.
:::
::::

:::osservazione{#rotolamento-senza-lavoro titolo="The pure rolling constraint does no work"}
In rolling without slipping the reaction of the plane, including the normal component and the friction component, is applied at the contact point $C$, which has zero velocity. The power of that reaction is therefore $\vec{\Phi} \cdot \vec{v}_C = 0$. The result justifies the use of the conservation of energy for a disk or a sphere rolling on an inclined plane, where friction is present and does not dissipate energy.
:::

## Conservation of the mechanical energy

:::richiamo{titolo="Potential and potential energy"}
A system of forces is conservative if there exists a function $U$ of the coordinates alone, the **potential**, such that $\vec{F} = \operatorname{grad} U$ for each force; the potential energy is $V = -U$ and the work equals $L = U(2) - U(1) = V(1) - V(2)$. For the weight of a body of mass $m$ we have $U = -m\,g\,y_G$ and for a spring of constant $k$, length $\ell$ and rest length $\ell_0$ we have $U = -\dfrac{1}{2}\,k\,(\ell - \ell_0)^2$. See the topic on virtual work, the potential and equilibrium.
:::

::::teorema{#conservazione-dell-energia-meccanica titolo="Conservation of the mechanical energy"}
Consider a system with fixed and ideal constraints, in which all the forces that do work are conservative with potential $U$. Then the **mechanical energy**
$$
E = T + V = T - U
$$
is constant during the motion. The equality $T + V = E$ is a first integral, which for a system with one degree of freedom provides the velocity as a function of the configuration without integrating the equation of motion, and together with the initial datum determines the positions that can be reached.

:::dimostrazione
By the kinetic energy theorem and by the hypothesis on the constraints we have $\dot{T} = \Pi$, where $\Pi$ is the power of the conservative forces alone. The potential depends on the coordinates alone, therefore its time derivative along the motion is
$$
\dot{U} = \sum_i \operatorname{grad}_i U \cdot \vec{v}_i = \sum_i \vec{F}_i \cdot \vec{v}_i = \Pi .
$$
Hence $\dot{T} = \dot{U}$, that is $\dfrac{d}{dt}(T - U) = 0$, and $T - U$ is constant.
:::
::::

:::esempio{titolo="Hinged rod released from the horizontal position"}
A homogeneous rod $AB$ of mass $m$ and length $\ell$ is hinged at the endpoint $A$ in a vertical plane, with a smooth hinge, and is released at rest in the horizontal position. The hinge is a fixed and ideal constraint, therefore its reaction does no work and the only force that does work is the weight. Calling $\vartheta$ the angle by which the rod has descended below the horizontal, the center of mass lowers by $\dfrac{\ell}{2}\sin\vartheta$ and the state of motion is rotatory about $A$, hence
$$
\frac{1}{2} \cdot \frac{1}{3}\,m\,\ell^2\,\dot{\vartheta}^2 = m\,g\,\frac{\ell}{2}\,\sin\vartheta ,
\qquad
\dot{\vartheta}^2 = \frac{3\,g\,\sin\vartheta}{\ell} .
$$
In the vertical position, $\vartheta = \dfrac{\pi}{2}$, we get $\dot{\vartheta} = \sqrt{\dfrac{3g}{\ell}}$ and the endpoint $B$ has velocity $\sqrt{3g\ell}$.

::struttura{nodi="A,0,0;B,2.6,-1.5" aste="A-B" vincoli="A,cerniera,90" tratteggi="0,0 3,0" punti="1.3,-0.75,G,baricentro" forze="1.3 -0.75,0,-0.9,mg" etichette="0.85,-0.22,ϑ" titolo="The rod descends from the dashed horizontal position: the weight does work, the reaction of the hinge does not"}
:::

## Impacts

In an impact the forces involved have a very large intensity for a very short time interval, and it is convenient to write the cardinal equations in integrated form.

:::definizione{#impulso titolo="Impulse and impulsive forces"}
The **impulse** of a force $\vec{F}$ in the interval $[t_1, t_2]$ is
$$
\vec{J} = \int_{t_1}^{t_2} \vec{F}\,dt .
$$
A force is said to be **impulsive** when it acts for a very short time $\tau$ with an intensity such that the impulse stays finite as $\tau$ tends to zero. In the model of the instantaneous impact the positions of the points do not change during the impact and the ordinary forces, such as the weight, give a negligible impulse; the velocities, on the contrary, change by a finite amount.
:::

:::teorema{#conservazione-negli-urti titolo="Linear momentum and angular momentum in an impact"}
The values before the impact are denoted by $\vec{Q}^-$, $\vec{K}_O^-$ and those after it by $\vec{Q}^+$, $\vec{K}_O^+$. Integrating the two cardinal equations over the duration of the impact one obtains
$$
\begin{cases}
\vec{Q}^+ - \vec{Q}^- = \vec{J}^{(e)} \\[4pt]
\vec{K}_O^+ - \vec{K}_O^- = \vec{N}_O^{(e)}
\end{cases}
$$
where $\vec{J}^{(e)}$ is the impulse of the impulsive external forces and $\vec{N}_O^{(e)}$ its moment about the fixed pole $O$. If no impulsive external forces act, the linear momentum is conserved in the impact; if the only impulsive external force is the reaction of a fixed hinge at $A$, the angular momentum about $A$ is conserved, because the moment of that reaction about $A$ vanishes.
:::

:::teorema{#urti-elastici-e-anelastici titolo="Elastic and inelastic impacts"}
An impact is said to be **elastic** when the kinetic energies immediately before and immediately after the impact are equal, and **perfectly inelastic** when the two bodies, after the impact, have the same velocity at the contact point. For two material points of masses $m_1$ and $m_2$ colliding along the line joining them, with the second one initially at rest, the conservation of the linear momentum and of the kinetic energy give
$$
v_1^+ = \frac{m_1 - m_2}{m_1 + m_2}\,v_1^- ,
\qquad
v_2^+ = \frac{2\,m_1}{m_1 + m_2}\,v_1^- ,
$$
whereas in the perfectly inelastic impact the common velocity is $\dfrac{m_1\,v_1^-}{m_1 + m_2}$ and the kinetic energy lost equals $\dfrac{m_1\,m_2}{2\,(m_1 + m_2)}\,(v_1^-)^2$.
:::

:::esempio{titolo="Point sticking to a hinged rod"}
A material point of mass $m$, moving horizontally with velocity $v_0$, strikes the endpoint $B$ of a homogeneous rod $AB$ of mass $3m$ and length $\ell$, hinged at $A$ and at rest in the vertical position, and sticks to it. The only impulsive external force is the reaction of the hinge, whose moment about $A$ vanishes, therefore $K_A$ is conserved. Before the impact $K_A^- = m\,v_0\,\ell$; after the impact the system rotates about $A$ with angular velocity $\omega$ and moment of inertia $I_A = \dfrac{1}{3}\,(3m)\,\ell^2 + m\,\ell^2 = 2\,m\,\ell^2$, hence $K_A^+ = 2\,m\,\ell^2\,\omega$. From the equality it follows that $\omega = \dfrac{v_0}{2\,\ell}$.

::struttura{nodi="A,0,3;B,0,0" aste="A-B" vincoli="A,cerniera,90" punti="-1.8,0,P,pieno;0,1.5,G,baricentro" frecce="-1.8,0,-0.35,0" etichette="-1.05,0.3,v_0" titolo="The point $P$ sticks to the endpoint $B$: in the impact the angular momentum about the hinge $A$ is conserved"}
:::
