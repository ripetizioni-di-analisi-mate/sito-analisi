---
titolo: Kinematics of the rigid body
sommario: How the rigidity constraint reduces the velocity field to the fundamental formula with the angular velocity, how the state of motion is classified by means of the kinematic invariant and the Mozzi axis, and how the instantaneous center of rotation, the fixed centrode, the moving centrode and the rolling conditions are found.
---

## The rigidity constraint and the state of motion

:::definizione{#corpo-rigido titolo="Rigid body and rigidity constraint"}
A **rigid body** is a system of material points such that the distance between any two of its points stays constant during the motion. The **rigidity constraint** is this condition, written for every pair of points $P$ and $Q$ of the body:
$$
|P - Q| = \text{constant} .
$$
The constraint greatly reduces the number of parameters needed to locate the configuration, because six numbers suffice to fix the position of a free rigid body in space, three for the position of one of its points and three for the orientation, whereas in the plane three suffice. The classification of constraints and the counting of the degrees of freedom are seen in the topic on constraints and Lagrangian coordinates; what matters here is the kinematic consequence, that is, the form that the constraint imposes on the velocity field.
:::

:::definizione{#atto-di-moto titolo="State of motion"}
The **state of motion** of a rigid body at the instant $t$ is the field that associates with every point $P$ of the body its velocity $\vec{v}_P(t)$ at that instant. The state of motion concerns a single instant, therefore two different motions can have the same state of motion at one instant.

One chooses a fixed frame $(O; x, y, z)$ with unit vectors $\hat{\imath}$, $\hat{\jmath}$, $\hat{k}$ and a frame **attached** to the body $(\Omega; \xi, \eta, \zeta)$, whose unit vectors $\hat{e}_1$, $\hat{e}_2$, $\hat{e}_3$ depend on time because they move with the body. A point $P$ of the body has constant coordinates in the attached frame, therefore
$$
P - \Omega = \xi_P\,\hat{e}_1 + \eta_P\,\hat{e}_2 + \zeta_P\,\hat{e}_3
$$
with $\xi_P$, $\eta_P$, $\zeta_P$ independent of time. The whole kinematics of the rigid body is obtained by differentiating this expression.

::struttura{poligoni="0,0 3,0.4 3.6,2 2,3 0.3,2.2" punti="1.2,1.2,Ω;2.8,2.2,P" frecce="1.2,1.2,2.4,0.5,v_Ω;2.8,2.2,4.1,2.6,v_P;1.2,1.2,1.7,2.6,ω" titolo="State of motion: with every point of the body is associated its velocity at the instant considered"}
:::

:::teorema{#rigidita-differenziale titolo="Differential form of the rigidity constraint"}
For every pair of points $P$ and $Q$ of a rigid body
$$
(P - Q) \cdot (\vec{v}_P - \vec{v}_Q) = 0 .
$$
The condition follows by differentiating with respect to time the equality $|P - Q|^2 = \text{constant}$, since $\dfrac{d}{dt}\,|P-Q|^2 = 2\,(P-Q) \cdot (\vec{v}_P - \vec{v}_Q)$. The relative velocity of two points of a rigid body is therefore orthogonal to the line joining them, and this is the kinematic way of saying that their distance stays constant.
:::

:::teorema{#equiproiettivita titolo="Equiprojectivity of the velocity field"}
Let $P$ and $Q$ be two points of a rigid body and let $\hat{u} = \dfrac{P-Q}{|P-Q|}$ be the unit vector of the line joining them. Then
$$
\vec{v}_P \cdot \hat{u} = \vec{v}_Q \cdot \hat{u} ,
$$
that is, the velocities of two points have the *same* component along the line joining them. The equality follows from the differential form of the rigidity constraint, upon dividing by $|P-Q|$. Equiprojectivity provides the quickest check on a given velocity field, because every rigid state of motion satisfies it for *every* pair of points; in the exercises it is used as a final check on the computed velocities.

::struttura{nodi="A,0,0;B,5,2.5" aste="A-B" punti="0,0;5,2.5" frecce="0,0,0.8,2.2,v_A;5,2.5,7.65,1,v_B" tratteggi="0.8,2.2 1.52,0.76;7.65,1 6.52,3.26" etichette="0.95,0.1,p;5.95,2.6,p" titolo="The projections $p$ of $\vec{v}_A$ and $\vec{v}_B$ on the line $AB$ are equal"}
:::

## The fundamental formula of rigid kinematics

:::richiamo{titolo="Cross product"}
The cross product $\vec{a} \wedge \vec{b}$ of two vectors forming the angle $\varphi$ is orthogonal to both, has magnitude $ab\sin\varphi$ and the direction given by the right-hand rule. It vanishes if and only if the two vectors are parallel, it is antisymmetric, $\vec{b} \wedge \vec{a} = -\,\vec{a} \wedge \vec{b}$, and it is distributive with respect to addition. Moreover the identity
$$
\vec{a} \wedge (\vec{b} \wedge \vec{c}) = (\vec{a} \cdot \vec{c})\,\vec{b} - (\vec{a} \cdot \vec{b})\,\vec{c}
$$
holds. See the topic on vectors in space of Linear algebra.
:::

:::richiamo{titolo="Vector associated with an antisymmetric matrix"}
Let $\mathbb{A}$ be a $3 \times 3$ antisymmetric matrix, that is, with $\mathbb{A}^T = -\mathbb{A}$. Then there exists a unique vector $\vec{w}$ such that $\mathbb{A}\,\vec{u} = \vec{w} \wedge \vec{u}$ for every $\vec{u} \in \mathbb{R}^3$, and its components are
$$
\vec{w} = (-a_{23},\; a_{13},\; -a_{12}) .
$$
See the topic on matrices and linear maps of Linear algebra.
:::

::::teorema{#formula-fondamentale titolo="Fundamental formula of rigid kinematics"}
Let a rigid body in motion be given and let $\Omega$ be one of its points. Then at every instant there exists a vector $\vec{\omega}$, called the **angular velocity** of the body, such that for every point $P$ of the body
$$
\vec{v}_P = \vec{v}_\Omega + \vec{\omega} \wedge (P - \Omega) .
$$
The vector $\vec{\omega}$ depends on the instant but not on the point $\Omega$ chosen as reference. The formula says that the state of motion of a rigid body is determined by two vectors only, the velocity of one of its points and the angular velocity, hence by six numbers: the velocity of all the other points is obtained by a cross product. In plane problems one sets $\vec{\omega} = \dot{\vartheta}\,\hat{k}$, where $\vartheta$ is the angle that a line attached to the body forms with the $x$ axis, the counterclockwise sense being positive.

:::dimostrazione
The idea is to differentiate the expression of $P - \Omega$ in the attached basis and to use the orthonormality of the basis in order to recognize an antisymmetric matrix.

One starts from
$$
P - \Omega = \xi_P\,\hat{e}_1 + \eta_P\,\hat{e}_2 + \zeta_P\,\hat{e}_3 ,
$$
where the three coordinates are constant. Differentiating with respect to time one obtains
$$
\vec{v}_P - \vec{v}_\Omega = \xi_P\,\dot{\hat{e}}_1 + \eta_P\,\dot{\hat{e}}_2 + \zeta_P\,\dot{\hat{e}}_3 .
$$
Consider now the nine numbers $a_{ij} = \hat{e}_i \cdot \dot{\hat{e}}_j$. The basis is orthonormal at every instant, therefore $\hat{e}_i \cdot \hat{e}_j$ is constant and its derivative vanishes:
$$
\dot{\hat{e}}_i \cdot \hat{e}_j + \hat{e}_i \cdot \dot{\hat{e}}_j = 0 ,
\qquad \text{that is} \qquad
a_{ji} + a_{ij} = 0 .
$$
The matrix $\mathbb{A} = (a_{ij})$ is therefore antisymmetric, and by the recalled result there exists a unique vector $\vec{\omega}$ such that $\mathbb{A}\,\vec{u} = \vec{\omega} \wedge \vec{u}$ for every $\vec{u}$, the components being referred to the attached basis. Resolving $\dot{\hat{e}}_j$ in that basis one obtains $\dot{\hat{e}}_j = \sum_i a_{ij}\,\hat{e}_i$, that is, the $j$-th column of $\mathbb{A}$; therefore
$$
\dot{\hat{e}}_j = \mathbb{A}\,\hat{e}_j = \vec{\omega} \wedge \hat{e}_j
\qquad (j = 1, 2, 3) .
$$
Substituting in the expression of $\vec{v}_P - \vec{v}_\Omega$ and using the distributivity of the cross product one obtains
$$
\vec{v}_P - \vec{v}_\Omega = \vec{\omega} \wedge \big( \xi_P\,\hat{e}_1 + \eta_P\,\hat{e}_2 + \zeta_P\,\hat{e}_3 \big) = \vec{\omega} \wedge (P - \Omega) ,
$$
which is the thesis. The vector $\vec{\omega}$ has been built from the attached basis alone, therefore it does not depend on the point $\Omega$.
:::
::::

::::teorema{#unicita-omega titolo="Uniqueness of the angular velocity"}
Let the state of motion of a rigid body whose points are not all collinear be given. If for every point $P$ of the body
$$
\vec{v}_P = \vec{v}_\Omega + \vec{\omega} \wedge (P - \Omega)
\qquad \text{and} \qquad
\vec{v}_P = \vec{v}_\Omega + \vec{\omega}\,' \wedge (P - \Omega)
$$
hold, then $\vec{\omega} = \vec{\omega}\,'$. The angular velocity is therefore a quantity of the state of motion, and does not depend on the attached frame used to introduce it.

:::dimostrazione
Subtracting the two equalities one obtains $(\vec{\omega} - \vec{\omega}\,') \wedge (P - \Omega) = \vec{0}$ for every point $P$ of the body. The points of the body are not all collinear, therefore among the vectors $P - \Omega$ there are two that are linearly independent. The vector $\vec{\omega} - \vec{\omega}\,'$ is then parallel to two independent directions, and this happens only for the zero vector, hence $\vec{\omega} = \vec{\omega}\,'$.
:::
::::

## The acceleration field

::::teorema{#campo-accelerazioni titolo="Acceleration of the points of a rigid body"}
Let $\Omega$ and $P$ be two points of a rigid body with angular velocity $\vec{\omega}$. Then
$$
\vec{a}_P = \vec{a}_\Omega + \dot{\vec{\omega}} \wedge (P - \Omega) + \vec{\omega} \wedge \big( \vec{\omega} \wedge (P - \Omega) \big) .
$$
The acceleration field is therefore determined by $\vec{a}_\Omega$, by $\vec{\omega}$ and by its derivative $\dot{\vec{\omega}}$, called the **angular acceleration**. The formula is needed every time the equations of dynamics are written for a point other than the center of mass, for example the contact point of a rolling disk.

:::dimostrazione
One differentiates the fundamental formula with respect to time. The first term gives $\vec{a}_\Omega$ and the second, by the rule for differentiating a cross product, gives
$$
\dot{\vec{\omega}} \wedge (P - \Omega) + \vec{\omega} \wedge \frac{d}{dt}\,(P - \Omega) .
$$
The derivative of $P - \Omega$ is $\vec{v}_P - \vec{v}_\Omega$, which by the fundamental formula equals $\vec{\omega} \wedge (P - \Omega)$. Substituting one obtains the thesis.
:::
::::

:::osservazione{#accelerazioni-nel-piano titolo="The plane case"}
In a plane motion one has $\vec{\omega} = \dot{\vartheta}\,\hat{k}$ and the vector $P - \Omega$ belongs to the plane $Oxy$, therefore it is orthogonal to $\vec{\omega}$. In the identity of the vector triple product the term $\vec{\omega} \cdot (P - \Omega)$ vanishes, hence
$$
\vec{\omega} \wedge \big( \vec{\omega} \wedge (P - \Omega) \big) = -\,\dot{\vartheta}^{\,2}\,(P - \Omega)
$$
and the acceleration formula becomes
$$
\vec{a}_P = \vec{a}_\Omega + \ddot{\vartheta}\,\hat{k} \wedge (P - \Omega) - \dot{\vartheta}^{\,2}\,(P - \Omega) .
$$
The second term is orthogonal to $P - \Omega$ and the third is directed from $P$ toward $\Omega$, therefore one recognizes the tangential term and the centripetal term of the circular motion of $P$ about $\Omega$, treated in the topic on the kinematics of the point.
:::

## Kinematic invariant and Mozzi's theorem

:::definizione{#invariante-cinematico titolo="Kinematic invariant"}
The **kinematic invariant** of a rigid state of motion is the number
$$
I = \vec{\omega} \cdot \vec{v}_P ,
$$
which does not depend on the point $P$ of the body. Indeed, for two points $P$ and $\Omega$ of the body
$$
\vec{\omega} \cdot \vec{v}_P = \vec{\omega} \cdot \vec{v}_\Omega + \vec{\omega} \cdot \big( \vec{\omega} \wedge (P - \Omega) \big) = \vec{\omega} \cdot \vec{v}_\Omega ,
$$
because a scalar triple product with two equal factors vanishes. The invariant measures the component of the velocity along the axis of the rotation, hence it tells whether the body, besides rotating, advances along $\vec{\omega}$.
:::

::::teorema{#teorema-di-mozzi titolo="Mozzi's theorem"}
Let a rigid state of motion with $\vec{\omega} \neq \vec{0}$ be given and let $\Omega$ be a point of the body. Then the points whose velocity is parallel to $\vec{\omega}$ form a line parallel to $\vec{\omega}$, called the **Mozzi axis**, passing through the point
$$
P^* = \Omega + \frac{\vec{\omega} \wedge \vec{v}_\Omega}{|\vec{\omega}|^2} ,
$$
and the common velocity of its points is
$$
\vec{v}_{\min} = \frac{I}{|\vec{\omega}|^2}\;\vec{\omega} .
$$
For every other point $P$ one has $\vec{v}_P = \vec{v}_{\min} + \vec{\omega} \wedge (P - P^*)$, with the two terms orthogonal, hence $|\vec{v}_P| \ge |\vec{v}_{\min}|$. The most general state of motion of a rigid body is therefore the sum of a translation along an axis and of a rotation about the same axis, that is, a helical state of motion; the number $p = \dfrac{I}{|\vec{\omega}|^2}$ is the **pitch** of the helix and equals the advance per radian of rotation.

::struttura{linee="-0.4,0 3.6,0" tratteggi="0,1 0.18,1.01 0.34,0.86 0.46,0.59 0.55,0.22 0.59,-0.18 0.59,-0.55 0.55,-0.84 0.5,-1 0.45,-1.01 0.41,-0.86 0.41,-0.59 0.45,-0.22 0.54,0.18 0.66,0.55 0.82,0.84 1,1 1.18,1.01 1.34,0.86 1.46,0.59 1.55,0.22 1.59,-0.18 1.59,-0.55 1.55,-0.84 1.5,-1 1.45,-1.01 1.41,-0.86 1.41,-0.59 1.45,-0.22 1.54,0.18 1.66,0.55 1.82,0.84 2,1" punti="0.3,0,P*,centro" frecce="0.3,0,1,0,v_min;2.2,0,3.1,0,ω" etichette="3,-0.4,Mozzi axis;2.15,1.2,P" riferimento=0 titolo="Mozzi axis: its points have velocity $\vec{v}_{\min}$ parallel to $\vec{\omega}$, while a point $P$ off the axis describes a helix"}

:::dimostrazione
One looks for the points $P$ for which $\vec{v}_P = \lambda\,\vec{\omega}$ for some number $\lambda$. One first checks that $P^*$ is one of them. From the fundamental formula and from the identity of the vector triple product
$$
\begin{aligned}
\vec{v}_{P^*} &= \vec{v}_\Omega + \vec{\omega} \wedge \frac{\vec{\omega} \wedge \vec{v}_\Omega}{|\vec{\omega}|^2} \\[6pt]
&= \vec{v}_\Omega + \frac{(\vec{\omega} \cdot \vec{v}_\Omega)\,\vec{\omega} - (\vec{\omega} \cdot \vec{\omega})\,\vec{v}_\Omega}{|\vec{\omega}|^2} \\[6pt]
&= \frac{I}{|\vec{\omega}|^2}\;\vec{\omega} ,
\end{aligned}
$$
hence the velocity of $P^*$ is parallel to $\vec{\omega}$ and equals $\vec{v}_{\min}$. If then $P = P^* + t\,\vec{\omega}$, one has $\vec{\omega} \wedge (P - P^*) = \vec{0}$ and $\vec{v}_P = \vec{v}_{P^*}$, therefore the whole line through $P^*$ parallel to $\vec{\omega}$ has the same velocity.

It remains to rule out the existence of other points. Let $\vec{v}_P$ be parallel to $\vec{\omega}$ and set $\vec{d} = P - P^*$. From the fundamental formula $\vec{v}_P = \vec{v}_{\min} + \vec{\omega} \wedge \vec{d}$, and the vector $\vec{\omega} \wedge \vec{d}$ is orthogonal to $\vec{\omega}$. Since $\vec{v}_P$ and $\vec{v}_{\min}$ are both parallel to $\vec{\omega}$, their difference $\vec{\omega} \wedge \vec{d}$ is parallel to $\vec{\omega}$ and orthogonal to $\vec{\omega}$, hence it vanishes; then $\vec{d}$ is parallel to $\vec{\omega}$ and $P$ lies on the line found. The inequality $|\vec{v}_P| \ge |\vec{v}_{\min}|$ follows from the Pythagorean theorem applied to the two orthogonal terms $\vec{v}_{\min}$ and $\vec{\omega} \wedge (P - P^*)$.
:::
::::

:::osservazione{#atti-di-moto-notevoli titolo="Classification of the states of motion"}
Mozzi's theorem, read together with the value of the invariant, gives the three possible cases for the state of motion of a rigid body at a given instant.

- $\vec{\omega} = \vec{0}$: all the points have the same velocity $\vec{v}_\Omega$ and the state of motion is **translational**. The Mozzi axis is not defined.
- $\vec{\omega} \neq \vec{0}$ and $I = 0$: one has $\vec{v}_{\min} = \vec{0}$, hence the points of the Mozzi axis are at rest and the state of motion is **rotational**. The axis is then called the axis of instantaneous rotation, and for every point $\vec{v}_P = \vec{\omega} \wedge (P - P^*)$.
- $\vec{\omega} \neq \vec{0}$ and $I \neq 0$: the state of motion is **helical**, with pitch $p = \dfrac{I}{|\vec{\omega}|^2}$ and no point at rest.

In a rigid body with a fixed point $\Omega$ the velocity of $\Omega$ is zero, therefore $I = 0$ and the state of motion is rotational at every instant, and the axis of instantaneous rotation passes through the fixed point. This is the case of the motions studied in the topic on the dynamics of the rigid body with Euler's equations.
:::

## Plane rigid motion and instantaneous center of rotation

:::definizione{#moto-rigido-piano titolo="Plane rigid motion"}
A rigid motion is **plane** if there exists a fixed plane, taken as $Oxy$, such that every point of the body moves in a plane parallel to it. In a plane motion the velocities are parallel to $Oxy$ and the angular velocity is orthogonal to the plane:
$$
\vec{\omega} = \dot{\vartheta}\,\hat{k} ,
$$
where $\vartheta$ is the angle between a line attached to the body and the $x$ axis, positive in the counterclockwise sense. The kinematic invariant is then $I = \vec{\omega} \cdot \vec{v}_P = 0$, because $\vec{\omega}$ is orthogonal to all the velocities; therefore a plane rigid state of motion is either translational or rotational. Plane motion is the case of the exam exercises with rods, disks and plates in the vertical plane, and everything reduces to the study of the function $\vartheta(t)$ and of the motion of one point.
:::

::::teorema{#centro-di-istantanea-rotazione titolo="Instantaneous center of rotation"}
Let a plane rigid state of motion with $\dot{\vartheta} \neq 0$ be given and let $\Omega$ be a point of the body. Then there exists one and only one point $C$ of the plane of the motion with zero velocity, called the **instantaneous center of rotation**, given by
$$
C = \Omega + \frac{\hat{k} \wedge \vec{v}_\Omega}{\dot{\vartheta}} ,
$$
and for every point $P$ of the body
$$
\vec{v}_P = \dot{\vartheta}\,\hat{k} \wedge (P - C) .
$$
In particular $\vec{v}_P$ is orthogonal to the segment $CP$ and has magnitude $|\dot{\vartheta}|\,|P - C|$. The instantaneous center of rotation therefore reduces the computation of the velocities to that of a circular motion, because, once $C$ has been found, every velocity is obtained as the product of $|\dot{\vartheta}|$ by the distance from $C$, with direction orthogonal to the joining segment. The point $C$ belongs to the plane attached to the body and may fall outside the material body.

:::dimostrazione
The instantaneous center of rotation is the intersection of the Mozzi axis with the plane of the motion, because the invariant vanishes and the axis is orthogonal to $Oxy$; it is however obtained directly. One looks for $C$ with $\vec{v}_C = \vec{0}$ and sets $\vec{d} = C - \Omega$, a vector of the plane $Oxy$. The fundamental formula gives
$$
\vec{0} = \vec{v}_\Omega + \dot{\vartheta}\,\hat{k} \wedge \vec{d} .
$$
One multiplies on the left by $\hat{k}$ in the sense of the cross product and uses the identity of the vector triple product with $\hat{k} \cdot \vec{d} = 0$:
$$
\hat{k} \wedge (\hat{k} \wedge \vec{d}) = (\hat{k} \cdot \vec{d})\,\hat{k} - (\hat{k} \cdot \hat{k})\,\vec{d} = -\,\vec{d} .
$$
It follows that $\vec{0} = \hat{k} \wedge \vec{v}_\Omega - \dot{\vartheta}\,\vec{d}$, and since $\dot{\vartheta} \neq 0$ one obtains $\vec{d} = \dfrac{\hat{k} \wedge \vec{v}_\Omega}{\dot{\vartheta}}$, which is the announced expression. The point so determined is unique, because $\vec{d}$ is the only solution of the equation. Finally, writing the fundamental formula with pole $C$ and $\vec{v}_C = \vec{0}$ one obtains $\vec{v}_P = \dot{\vartheta}\,\hat{k} \wedge (P - C)$.
:::
::::

:::osservazione{#costruzione-del-centro titolo="How the instantaneous center of rotation is constructed"}
From the relation $\vec{v}_P = \dot{\vartheta}\,\hat{k} \wedge (P - C)$ it follows that $C$ belongs to the line through $P$ orthogonal to $\vec{v}_P$. Knowing the directions of the velocities of two points $A$ and $B$, the center is therefore the intersection of the line through $A$ orthogonal to $\vec{v}_A$ with the line through $B$ orthogonal to $\vec{v}_B$. In the problems the directions are read off the constraints: a point on a guide has velocity parallel to the guide, a point hinged to the ground is at rest and coincides with the center, a body that rolls without slipping on a fixed guide has the center at the contact point.

The two lines orthogonal to the velocities may also turn out to be parallel and distinct. In that case the velocities of $A$ and of $B$ are parallel to each other, and by equiprojectivity they are equal, therefore $\dot{\vartheta} = 0$ and the state of motion is translational; in this case one says that the instantaneous center of rotation is at infinity, in the direction orthogonal to the velocities.

::struttura{nodi="A,0,0;B,4.5,1.6" aste="A-B" punti="0,0;4.5,1.6;2.2,-2.2,C,centro" frecce="0,0,1.2,1.2,v_A;4.5,1.6,6.57,0.35,v_B" tratteggi="0,0 2.2,-2.2;4.5,1.6 2.2,-2.2" titolo="The center $C$ is the intersection of the lines orthogonal to $\vec{v}_A$ and to $\vec{v}_B$"}
:::

:::esempio{#esempio-guide-ortogonali titolo="Rod with its endpoints on two orthogonal guides"}
A rod $AB$ of length $\ell$ has the endpoint $A$ on a horizontal guide and the endpoint $B$ on a vertical guide, and forms the angle $\vartheta$ with the horizontal. Then
$$
A - O = \ell\cos\vartheta\;\hat{\imath} ,
\qquad
B - O = \ell\sin\vartheta\;\hat{\jmath} ,
$$
hence $\vec{v}_A = -\,\ell\dot{\vartheta}\sin\vartheta\;\hat{\imath}$ and $\vec{v}_B = \ell\dot{\vartheta}\cos\vartheta\;\hat{\jmath}$. The velocity of $A$ is horizontal and that of $B$ is vertical, therefore the instantaneous center of rotation is the intersection of the vertical line through $A$ with the horizontal line through $B$:
$$
C - O = \ell\cos\vartheta\;\hat{\imath} + \ell\sin\vartheta\;\hat{\jmath} .
$$
The distance $|A - C| = \ell\sin\vartheta$ multiplied by $|\dot{\vartheta}|$ gives back $|\vec{v}_A|$, as it must. The rod belongs to the attached plane in which $C$ is the fourth vertex of the rectangle $OACB$, and the angular velocity of the rod is $\vec{\omega} = -\,\dot{\vartheta}\,\hat{k}$, because when $\vartheta$ increases the endpoint $B$ rises and the rod turns in the clockwise sense.

::struttura{nodi="A,2.6,0;B,0,1.5" aste="A-B" linee="-0.3,0 3.4,0;0,-0.3 0,2.3" punti="2.6,0;0,1.5;2.6,1.5,C,centro" frecce="2.6,0,1.7,0,v_A;0,1.5,0,2.1,v_B" tratteggi="2.6,0 2.6,1.5;0,1.5 2.6,1.5" etichette="2.15,0.22,ϑ" riferimento=0 titolo="The rod between two orthogonal guides: the center $C$ closes the rectangle $OACB$"}
:::

## Fixed centrode and moving centrode

:::definizione{#base-e-rulletta titolo="Fixed centrode and moving centrode"}
In a plane rigid motion with $\dot{\vartheta} \neq 0$ the instantaneous center of rotation changes from instant to instant. The curve described by $C$ in the fixed plane is called the **fixed centrode**, or space centrode; the curve described by $C$ in the plane attached to the body is called the **moving centrode**, or body centrode. The fixed centrode is obtained by writing the coordinates $x_C$, $y_C$ as functions of the parameter that locates the configuration and eliminating the parameter; the moving centrode is obtained by computing the coordinates $\xi_C$, $\eta_C$ of $C$ in the attached frame and eliminating the same parameter.
:::

:::richiamo{titolo="Composition of velocities"}
Given a moving frame, the absolute velocity of a point is the sum of the dragging velocity and the relative velocity:
$$
\vec{v}_a = \vec{v}_\tau + \vec{v}_r .
$$
See the topic on the kinematics of the point and relative motions.
:::

::::teorema{#rotolamento-rulletta titolo="The moving centrode rolls without slipping on the fixed centrode"}
In a plane rigid motion with $\dot{\vartheta} \neq 0$ the fixed centrode and the moving centrode are tangent at the point $C$, and the motion of the body is obtained by rolling the moving centrode without slipping on the fixed centrode.

:::dimostrazione
Consider the geometric point $C(t)$. As a point of the fixed centrode it has velocity $\vec{u}_b = \dfrac{dC}{dt}$, computed in the fixed frame. As a point of the moving centrode it has a velocity $\vec{u}_r$ with respect to the attached frame. The theorem on the composition of velocities, applied to the geometric point $C$, gives
$$
\vec{u}_b = \vec{v}_\tau + \vec{u}_r ,
$$
where $\vec{v}_\tau$ is the velocity of the point of the body that at that instant occupies the position $C$. That point is the instantaneous center of rotation, hence $\vec{v}_\tau = \vec{0}$ and $\vec{u}_b = \vec{u}_r$. The two curves therefore have the same tangent vector at the common point $C$, hence they are tangent, and the arc lengths traveled in the same time interval are equal, because the magnitudes of the two velocities coincide at every instant. The contact between the moving centrode and the fixed centrode then takes place without slipping.
:::
::::

:::esempio{#esempio-base-rulletta titolo="Fixed centrode and moving centrode of the rod between two orthogonal guides"}
For the rod with its endpoints on the two orthogonal guides one has found $C - O = \ell\cos\vartheta\;\hat{\imath} + \ell\sin\vartheta\;\hat{\jmath}$, hence $x_C^2 + y_C^2 = \ell^2$, therefore the **fixed centrode** is the circle with center $O$ and radius $\ell$.

For the moving centrode one takes the attached frame with origin at $A$ and first unit vector $\hat{e}_1 = \dfrac{B-A}{\ell}$, that is, $\hat{e}_1 = -\cos\vartheta\;\hat{\imath} + \sin\vartheta\;\hat{\jmath}$, and $\hat{e}_2 = -\sin\vartheta\;\hat{\imath} - \cos\vartheta\;\hat{\jmath}$. From $C - A = \ell\sin\vartheta\;\hat{\jmath}$ one obtains
$$
\xi_C = (C-A) \cdot \hat{e}_1 = \ell\sin^2\vartheta ,
\qquad
\eta_C = (C-A) \cdot \hat{e}_2 = -\,\ell\sin\vartheta\cos\vartheta .
$$
Then $\xi_C^2 + \eta_C^2 = \ell^2\sin^2\vartheta = \ell\,\xi_C$, that is,
$$
\left( \xi_C - \frac{\ell}{2} \right)^{2} + \eta_C^{2} = \frac{\ell^2}{4} .
$$
The **moving centrode** is therefore the circle of diameter $\ell$ having its center at the midpoint of the rod. The motion of the rod is thus obtained by rolling a circle of radius $\dfrac{\ell}{2}$ inside a circle of radius $\ell$.

::struttura{nodi="A,2.6,0;B,0,1.5" aste="A-B" linee="-0.4,0 3.3,0;0,-0.4 0,3.3;2.8,0.75 2.75,1.14 2.6,1.5 2.36,1.81 2.05,2.05 1.69,2.2 1.3,2.25 0.91,2.2 0.55,2.05 0.24,1.81 0,1.5 -0.15,1.14 -0.2,0.75 -0.15,0.36 0,0 0.24,-0.31 0.55,-0.55 0.91,-0.7 1.3,-0.75 1.69,-0.7 2.05,-0.55 2.36,-0.31 2.6,0 2.75,0.36 2.8,0.75" tratteggi="2.97,-0.42 2.99,-0.18 3,0.05 2.99,0.29 2.95,0.52 2.9,0.75 2.84,0.98 2.75,1.2 2.65,1.41 2.53,1.61 2.4,1.81 2.25,1.99 2.08,2.16 1.91,2.31 1.72,2.46 1.52,2.58 1.32,2.7 1.1,2.79 0.88,2.87 0.65,2.93 0.42,2.97 0.18,2.99 -0.05,3 -0.29,2.99 -0.52,2.95" punti="2.6,1.5,C,centro;1.3,0.75,M;0,0,O" etichette="0.35,3.2,fixed centrode;1.2,-1.1,moving centrode" riferimento=0 titolo="Fixed centrode of radius $\ell$ and moving centrode of radius $\dfrac{\ell}{2}$, tangent at the center $C$"}
:::

## Rolling without slipping

:::definizione{#rotolamento-senza-strisciamento titolo="Rolling without slipping"}
Two rigid bodies in contact at a point $C$ **roll without slipping** if, at every instant, the point of the first body and the point of the second body that occupy the position $C$ have the same velocity:
$$
\vec{v}_C^{\,(1)} = \vec{v}_C^{\,(2)} .
$$
The condition concerns the velocities of the two material points that occupy the position $C$ at the instant considered, whereas the geometric contact point in general moves. When the second body is fixed the condition becomes $\vec{v}_C^{\,(1)} = \vec{0}$, hence $C$ is the instantaneous center of rotation of the first body.
:::

:::teorema{#disco-su-guida-rettilinea titolo="Disk rolling on a fixed straight guide"}
A disk of radius $R$ and center $G$ rolls without slipping on a fixed horizontal guide, with $G - O = s\,\hat{\imath} + R\,\hat{\jmath}$. Then
$$
\vec{\omega} = -\,\frac{\dot{s}}{R}\;\hat{k} ,
$$
and the velocity of the point $T$ diametrically opposite to the contact is $\vec{v}_T = 2\dot{s}\;\hat{\imath}$. The first equality follows from the condition $\vec{v}_C = \vec{0}$ written by means of the fundamental formula. Setting $\vec{\omega} = \omega\,\hat{k}$ and $C - G = -R\,\hat{\jmath}$, one has
$$
\vec{v}_C = \dot{s}\,\hat{\imath} + \omega\,\hat{k} \wedge (-R\,\hat{\jmath}) = (\dot{s} + \omega R)\,\hat{\imath} ,
$$
which vanishes if and only if $\omega = -\dfrac{\dot{s}}{R}$. The minus sign says that a disk advancing to the right turns in the clockwise sense. The velocity of $T$ is obtained from the same formula with $T - G = R\,\hat{\jmath}$, and equals twice that of the center because $T$ is twice as far from $C$ as $G$ is. The condition $\dot{s} = -\omega R$ integrates to $s = -R\vartheta + \text{constant}$, with $\vec{\omega} = \dot{\vartheta}\,\hat{k}$, therefore the constraint of pure rolling on a straight guide is holonomic and the disk has a single degree of freedom.

::struttura{cerchi="2,1,1" linee="-0.3,0 4.6,0" punti="2,1,G,baricentro;2,0,C,centro;2,2,T" frecce="2,1,2.9,1,v_G;2,2,3.8,2,v_T" coppie="1.4 0.5,-1,ω" titolo="Disk rolling without slipping: $\vec{v}_C = \vec{0}$, $|\vec{v}_T| = 2\,|\vec{v}_G|$"}
:::

:::attenzione
The contact point of a disk rolling without slipping has zero velocity, whereas its acceleration is not zero. For the disk rolling on the horizontal guide, with $\vec{a}_G = \ddot{s}\,\hat{\imath}$ and $\dot{\vec{\omega}} = -\dfrac{\ddot{s}}{R}\,\hat{k}$, the acceleration formula gives
$$
\vec{a}_C = \ddot{s}\,\hat{\imath} - \frac{\ddot{s}}{R}\,\hat{k} \wedge (-R\,\hat{\jmath}) - \frac{\dot{s}^{\,2}}{R^2}\,(-R\,\hat{\jmath}) = \frac{\dot{s}^{\,2}}{R}\;\hat{\jmath} ,
$$
directed from $C$ toward the center $G$. A disk advancing with constant velocity therefore has zero acceleration at the center and acceleration $\dfrac{\dot{s}^{\,2}}{R}$ at the contact point.
:::

## Euler angles and Poisson's formulas

:::definizione{#angoli-di-eulero titolo="Euler angles"}
Let a rigid body with a fixed point $\Omega$ be given, and take the fixed frame $(\Omega; x, y, z)$ and the attached frame $(\Omega; \xi, \eta, \zeta)$ with unit vectors $\hat{e}_1$, $\hat{e}_2$, $\hat{e}_3$. If $\hat{e}_3 \neq \pm\hat{k}$, the two planes $xy$ and $\xi\eta$ intersect in a line called the **line of nodes**, with unit vector
$$
\hat{N} = \frac{\hat{k} \wedge \hat{e}_3}{|\hat{k} \wedge \hat{e}_3|} .
$$
The **Euler angles** are the following three angles.

- The **precession** $\psi$, the angle between $\hat{\imath}$ and $\hat{N}$, measured in the plane $xy$ about $\hat{k}$.
- The **nutation** $\vartheta$, the angle between $\hat{k}$ and $\hat{e}_3$, measured about $\hat{N}$.
- The **proper rotation** $\varphi$, the angle between $\hat{N}$ and $\hat{e}_1$, measured in the plane $\xi\eta$ about $\hat{e}_3$.

The three angles locate the orientation of the body, and they are therefore three Lagrangian coordinates for a rigid body with a fixed point; the configuration is reached from the initial position by the rotation of $\psi$ about $\hat{k}$, then that of $\vartheta$ about the line of nodes, then that of $\varphi$ about $\hat{e}_3$.

::struttura{linee="0,0 3.2,0;0,0 0,2.8;0,0 -1.5,-1.1;0,0 1.1,2.3;0,0 2.6,-0.8" tratteggi="-1.5,-1.1 2.6,-0.8" punti="0,0,Ω" etichette="3.3,0.1,x;-1.9,-1.3,y;0.1,2.9,z;1.15,2.45,ζ;2.75,-0.85,N;0.45,0.5,ϑ;1.3,-0.35,ψ" riferimento=0 titolo="Line of nodes $\hat{N}$, nutation $\vartheta$ between $z$ and $\zeta$, precession $\psi$ between $x$ and $\hat{N}$"}
:::

:::teorema{#formule-di-poisson titolo="Poisson's formulas"}
Let $\hat{e}_1$, $\hat{e}_2$, $\hat{e}_3$ be the unit vectors of a frame attached to a rigid body with angular velocity $\vec{\omega}$. Then
$$
\dot{\hat{e}}_i = \vec{\omega} \wedge \hat{e}_i
\qquad (i = 1, 2, 3) .
$$
The formulas follow from the fundamental formula applied to the points $P_i = \Omega + \hat{e}_i$, which are points of the body. On one hand $\vec{v}_{P_i} = \vec{v}_\Omega + \vec{\omega} \wedge \hat{e}_i$, on the other hand $\vec{v}_{P_i} = \dfrac{d}{dt}\,(\Omega + \hat{e}_i) = \vec{v}_\Omega + \dot{\hat{e}}_i$; comparing, one obtains the thesis. They are needed every time a vector attached to the body is differentiated, for example the axis of a gyroscope or the unit vector of a rod, and they are the key step in the computation of the angular velocity from the Euler angles.
:::

:::teorema{#omega-con-gli-angoli-di-eulero titolo="Angular velocity in terms of the Euler angles"}
For a rigid body with a fixed point, the angular velocity resolves along the three axes of the three rotations that define the Euler angles:
$$
\vec{\omega} = \dot{\psi}\,\hat{k} + \dot{\vartheta}\,\hat{N} + \dot{\varphi}\,\hat{e}_3 .
$$
Its components in the attached basis are
$$
\begin{aligned}
\omega_\xi &= \dot{\psi}\sin\vartheta\sin\varphi + \dot{\vartheta}\cos\varphi , \\[4pt]
\omega_\eta &= \dot{\psi}\sin\vartheta\cos\varphi - \dot{\vartheta}\sin\varphi , \\[4pt]
\omega_\zeta &= \dot{\psi}\cos\vartheta + \dot{\varphi} ,
\end{aligned}
$$
and the magnitude equals
$$
|\vec{\omega}|^2 = \dot{\psi}^{\,2} + \dot{\vartheta}^{\,2} + \dot{\varphi}^{\,2} + 2\,\dot{\psi}\dot{\varphi}\cos\vartheta .
$$
The first equality is obtained by applying Poisson's formulas to the composition of the three rotations; the components follow by projecting $\hat{k}$ and $\hat{N}$ on the attached basis. These expressions are needed in order to write the kinetic energy of a rigid body with a fixed point in Lagrangian coordinates, as is seen in the topic on Lagrange's equations.
:::

:::osservazione{#precessioni titolo="Regular precessions"}
A rigid motion with a fixed point is called a **precession** if the nutation angle $\vartheta$ stays constant, that is, if the axis $\zeta$ attached to the body forms a constant angle with the fixed axis $z$; the precession is **regular** if $\dot{\psi}$ and $\dot{\varphi}$ are constant as well. In a regular precession $\dot{\vartheta} = 0$, therefore
$$
\vec{\omega} = \dot{\psi}\,\hat{k} + \dot{\varphi}\,\hat{e}_3 ,
\qquad
|\vec{\omega}| = \sqrt{\dot{\psi}^{\,2} + \dot{\varphi}^{\,2} + 2\,\dot{\psi}\dot{\varphi}\cos\vartheta} ,
$$
and the magnitude of the angular velocity is constant. The vector $\vec{\omega}$ forms constant angles with $\hat{k}$ and with $\hat{e}_3$, hence the axis of instantaneous rotation describes a cone about the fixed axis, called the fixed cone, and a cone about the attached axis, called the moving cone; the motion is realized by rolling the moving cone without slipping on the fixed cone. The angles $\alpha$ between $\vec{\omega}$ and $\hat{k}$ and $\beta$ between $\vec{\omega}$ and $\hat{e}_3$ satisfy $\alpha + \beta = \vartheta$ when $\vec{\omega}$ lies between the two axes, and they are computed by
$$
\cos\alpha = \frac{\dot{\psi} + \dot{\varphi}\cos\vartheta}{|\vec{\omega}|} ,
\qquad
\cos\beta = \frac{\dot{\psi}\cos\vartheta + \dot{\varphi}}{|\vec{\omega}|} .
$$
:::

## Systems of several connected rigid bodies

:::osservazione{#sistemi-collegati titolo="Connected rigid bodies"}
A system formed by several rigid bodies has one angular velocity for each body, and the connections impose relations among the angular velocities and the velocities of the points. The relations that recur in the exercises are these.

- Internal hinge at a point $A$ common to two bodies: the point $A$ belongs both to body $1$ and to body $2$, hence $\vec{v}_A^{\,(1)} = \vec{v}_A^{\,(2)}$. The fundamental formula is written for each body with pole $A$.
- Roller or sleeve on a fixed guide: the velocity of the constrained point is parallel to the guide.
- Contact with rolling without slipping: the velocity of the contact point is the same for the two bodies; if one of them is fixed, the contact point is the instantaneous center of rotation of the other.
- Inextensible string stretched between two bodies: the components of the velocities of the two endpoints along the string are equal.

The procedure is always the same: one chooses the parameters that locate the configuration, writes the position of the notable points as a function of them, differentiates and imposes the connections. The angular velocities are then obtained from the fundamental formula or, in plane motions, from the instantaneous center of rotation of each body.
:::

:::esempio{#esempio-disco-asta titolo="Disk with a rod hinged at its center"}
A disk of radius $R$ and center $G$ rolls without slipping on a fixed horizontal guide, and at the center $G$ a rod $GB$ of length $\ell$ is hinged, free to turn in the vertical plane. One takes as parameters the abscissa $s$ of $G$ and the angle $\vartheta$ between the rod and the downward vertical, therefore the system has two degrees of freedom. Then
$$
G - O = s\,\hat{\imath} + R\,\hat{\jmath} ,
\qquad
B - O = (s + \ell\sin\vartheta)\,\hat{\imath} + (R - \ell\cos\vartheta)\,\hat{\jmath} ,
$$
and differentiating one obtains
$$
\vec{v}_B = (\dot{s} + \ell\dot{\vartheta}\cos\vartheta)\,\hat{\imath} + \ell\dot{\vartheta}\sin\vartheta\,\hat{\jmath} .
$$
The rolling without slipping of the disk gives $\vec{\omega}_{\text{disk}} = -\dfrac{\dot{s}}{R}\,\hat{k}$, whereas the rod has $\vec{\omega}_{\text{rod}} = \dot{\vartheta}\,\hat{k}$, because the angle between the rod and the $x$ axis is $\vartheta - \dfrac{\pi}{2}$ and its derivative is $\dot{\vartheta}$. The two angular velocities are independent, as must be the case for a system with two degrees of freedom.

::struttura{cerchi="2,1.4,1.4" linee="-0.3,0 5,0" aste="G-B" nodi="G,2,1.4,-;B,3.46,0.18" punti="2,1.4,G,baricentro;2,0,C,centro" tratteggi="2,1.4 2,0.25" etichette="2.3,0.75,ϑ" frecce="2,1.4,2.9,1.4,v_G" titolo="Disk rolling with the rod $GB$ hinged at its center: two degrees of freedom, $s$ and $\vartheta$"}
:::
