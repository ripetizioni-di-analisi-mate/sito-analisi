---
titolo: Lagrange's equations
sommario: How the equations of motion of a holonomic system with ideal constraints are written starting from the kinetic energy and the potential in Lagrangian coordinates, and how the first integrals of the motion are recognized.
---

## Holonomic systems with ideal constraints

The cardinal equations of dynamics contain the constraint reactions, which are unknown, and for a system of several bodies they must be written body by body, therefore the number of equations grows with the number of constraints. Lagrange's method eliminates the reactions of the ideal constraints from the very beginning and reduces the problem to as many equations as there are degrees of freedom.

:::richiamo{titolo="Lagrangian coordinates and virtual displacements"}
A system of $N$ points $P_1, \dots, P_N$ subject to holonomic constraints with $n$ degrees of freedom admits Lagrangian coordinates $q_1, \dots, q_n$ such that
$$
P_i = P_i(q_1, \dots, q_n, t) ,
\qquad i = 1, \dots, N ,
$$
with the matrix of the derivatives $\dfrac{\partial P_i}{\partial q_h}$ of rank $n$. The velocity of the point $P_i$ and its virtual displacement are
$$
\vec{v}_i = \sum_{h=1}^{n} \frac{\partial P_i}{\partial q_h}\,\dot{q}_h + \frac{\partial P_i}{\partial t} ,
\qquad
\delta P_i = \sum_{h=1}^{n} \frac{\partial P_i}{\partial q_h}\,\delta q_h ,
$$
where the increments $\delta q_1, \dots, \delta q_n$ are arbitrary and independent and time is held fixed. See the topic on constraints, degrees of freedom and Lagrangian coordinates.
:::

:::definizione{#vincoli-ideali titolo="Ideal constraints"}
The constraints of a system are called **ideal**, or *perfect*, when the constraint reactions $\vec{\Phi}_1, \dots, \vec{\Phi}_N$ that they exert do zero virtual work in every virtual displacement of the configuration occupied:
$$
\sum_{i=1}^{N} \vec{\Phi}_i \cdot \delta P_i = 0
\qquad
\text{for every } (\delta q_1, \dots, \delta q_n) .
$$
The most common smooth bilateral constraints are ideal, since in each of them the reaction is orthogonal to the virtual displacements allowed: the reaction of a smooth guide is orthogonal to the guide, that of a fixed hinge is applied at a point that does not move, that of an inextensible string has opposite components at the two endpoints of a segment of constant length. Pure rolling of a disk on a fixed guide is an ideal constraint too, since the reaction is applied at the contact point, which in the act of motion has zero velocity.

::grafico{assi=0 uguale=1 linee="-0.6,-0.2 5.4,1.8" vettori="2.4,0.8,3.75,1.25,δP;2.4,0.8,1.77,2.69,Φ" punti="2.4,0.8,pieno,P" etichette="4.4,1.1,smooth guide" xmin=-1 xmax=5.8 ymin=-0.8 ymax=3.2 titolo="Point constrained to a smooth guide: the reaction $\vec{\Phi}$ is orthogonal to the guide and the virtual displacement $\delta P$ is tangent, therefore $\vec{\Phi} \cdot \delta P = 0$"}
:::

::::teorema{#relazione-simbolica titolo="Symbolic relation of dynamics"}
Consider a holonomic system with ideal constraints, with active forces $\vec{F}_1, \dots, \vec{F}_N$ applied at the points $P_1, \dots, P_N$. During the motion, at every instant and for every virtual displacement of the configuration occupied,
$$
\sum_{i=1}^{N} \big( \vec{F}_i - m_i \vec{a}_i \big) \cdot \delta P_i = 0 .
$$
The relation contains the active forces alone, therefore it is the starting point for obtaining equations of motion free of the constraint reactions. In the static case all the accelerations are zero and the principle of virtual work, treated in the topic on virtual work and the potential, is recovered.

:::dimostrazione
For every point of the system Newton's law is written separating the active forces from the constraint reactions,
$$
m_i \vec{a}_i = \vec{F}_i + \vec{\Phi}_i ,
\qquad i = 1, \dots, N .
$$
The $i$-th equality is multiplied scalarly by the virtual displacement $\delta P_i$ and summed over $i$, which gives
$$
\sum_{i=1}^{N} \big( \vec{F}_i - m_i \vec{a}_i \big) \cdot \delta P_i + \sum_{i=1}^{N} \vec{\Phi}_i \cdot \delta P_i = 0 .
$$
The constraints are ideal by hypothesis, therefore the second sum is zero, and the stated relation remains.
:::
::::

## Kinetic energy in Lagrangian coordinates

:::definizione{#matrice-cinetica titolo="Kinetic matrix and structure of the kinetic energy"}
In the kinetic energy $T = \dfrac{1}{2}\displaystyle\sum_{i=1}^{N} m_i\,v_i^2$ the expression of the velocity in Lagrangian coordinates is substituted. Expanding the squares gives
$$
T = T_2 + T_1 + T_0 ,
$$
where the three summands are respectively of second, first and zero degree in the generalized velocities:
$$
T_2 = \frac{1}{2} \sum_{h,k=1}^{n} a_{hk}(q, t)\,\dot{q}_h\,\dot{q}_k ,
\qquad
T_1 = \sum_{h=1}^{n} b_h(q, t)\,\dot{q}_h ,
\qquad
T_0 = c(q, t) ,
$$
with the coefficients
$$
a_{hk} = \sum_{i=1}^{N} m_i\,\frac{\partial P_i}{\partial q_h} \cdot \frac{\partial P_i}{\partial q_k} ,
\qquad
b_h = \sum_{i=1}^{N} m_i\,\frac{\partial P_i}{\partial q_h} \cdot \frac{\partial P_i}{\partial t} ,
\qquad
c = \frac{1}{2} \sum_{i=1}^{N} m_i \left| \frac{\partial P_i}{\partial t} \right|^2 .
$$
The symmetric matrix $\mathbb{A}(q, t) = (a_{hk})$ is the **kinetic matrix** of the system. When the constraints are fixed the functions $P_i$ do not depend on time, therefore $b_h = 0$ and $c = 0$ and the kinetic energy reduces to the quadratic form $T = T_2$. The terms $T_1$ and $T_0$ thus appear only with moving constraints, such as a guide that rotates with a prescribed angular velocity.
:::

::::teorema{#definita-positiva titolo="The kinetic matrix is positive definite"}
For every configuration and at every instant the quadratic form associated with $\mathbb{A}$ satisfies
$$
\sum_{h,k=1}^{n} a_{hk}\,\lambda_h\,\lambda_k > 0
\qquad
\text{for every } (\lambda_1, \dots, \lambda_n) \neq (0, \dots, 0) .
$$
The matrix $\mathbb{A}$ is therefore invertible, and this makes it possible to solve Lagrange's equations for the accelerations $\ddot{q}_h$.

:::dimostrazione
From the definition of the coefficients $a_{hk}$, exchanging the order of the sums,
$$
\sum_{h,k=1}^{n} a_{hk}\,\lambda_h\,\lambda_k
= \sum_{i=1}^{N} m_i \left( \sum_{h=1}^{n} \frac{\partial P_i}{\partial q_h}\,\lambda_h \right) \cdot \left( \sum_{k=1}^{n} \frac{\partial P_i}{\partial q_k}\,\lambda_k \right)
= \sum_{i=1}^{N} m_i \left| \sum_{h=1}^{n} \frac{\partial P_i}{\partial q_h}\,\lambda_h \right|^2 .
$$
Every summand is non-negative, hence the sum is zero only if the vector $\displaystyle\sum_h \frac{\partial P_i}{\partial q_h}\,\lambda_h$ is zero for every $i$. This vector is the virtual displacement corresponding to the increments $\delta q_h = \lambda_h$; since the matrix of the derivatives $\dfrac{\partial P_i}{\partial q_h}$ has rank $n$, the only way to make all these vectors vanish is to take $\lambda_1 = \dots = \lambda_n = 0$. Therefore the quadratic form is positive on every non-zero vector.
:::
::::

:::esempio{titolo="Kinetic matrix of a rod with one endpoint on a guide"}
The uniform rod $AB$, of mass $m$ and length $2\ell$, has the endpoint $A$ on a smooth horizontal guide and rotates about $A$ in the vertical plane. The abscissa $x$ of $A$ and the angle $\vartheta$ that the rod forms with the downward vertical are chosen as Lagrangian coordinates.

::struttura{nodi="A,2,0;B,3.376,-1.966" aste="A-B" vincoli="A,carrello,90" linee="-0.6,0 5.2,0" tratteggi="2,0 2,-2.3" punti="0,0,O;2.688,-0.983,G,baricentro" etichette="2.26,-1.1,ϑ" quote="0 0,A,x,-0.62" titolo="Rod with the endpoint $A$ on a horizontal guide: two degrees of freedom, the Lagrangian coordinates $x$ and $\vartheta$"}

The center of mass $G$ is the midpoint of the rod, hence
$$
G - O = (x + \ell\sin\vartheta)\,\hat{\imath} - \ell\cos\vartheta\,\hat{\jmath} ,
\qquad
\vec{v}_G = (\dot{x} + \ell\dot{\vartheta}\cos\vartheta)\,\hat{\imath} + \ell\dot{\vartheta}\sin\vartheta\,\hat{\jmath} .
$$
The moment of inertia of the rod with respect to the axis through $G$ orthogonal to the plane of the motion is $I_G = \dfrac{1}{12}\,m\,(2\ell)^2 = \dfrac{1}{3}\,m\,\ell^2$, as obtained in the topic on the geometry of masses. By König's theorem the kinetic energy is the sum of that of the center of mass and that of the relative rotational motion, therefore
$$
T = \frac{1}{2}\,m\,v_G^2 + \frac{1}{2}\,I_G\,\dot{\vartheta}^2
= \frac{1}{2}\,m\,\dot{x}^2 + \frac{2}{3}\,m\,\ell^2\,\dot{\vartheta}^2 + m\,\ell\,\dot{x}\,\dot{\vartheta}\cos\vartheta .
$$
The constraints are fixed, hence $T = T_2$ and the kinetic matrix is read directly from the coefficients:
$$
\mathbb{A}(\vartheta) =
\begin{pmatrix}
m & m\,\ell\cos\vartheta \\[4pt]
m\,\ell\cos\vartheta & \dfrac{4}{3}\,m\,\ell^2
\end{pmatrix} .
$$
Its determinant is $\dfrac{4}{3}\,m^2\,\ell^2 - m^2\,\ell^2\cos^2\vartheta$, which is positive for every $\vartheta$ because $\cos^2\vartheta \le 1 < \dfrac{4}{3}$, in agreement with the theorem on the kinetic matrix.
:::

## Lagrange's equations

:::richiamo{titolo="Schwarz's theorem"}
If a function of several variables has continuous second derivatives on an open set, then the mixed second derivatives do not depend on the order of differentiation. See the topic on partial derivatives and differentiability of Calculus 2.
:::

::::teorema{#equazioni-di-lagrange titolo="Lagrange's equations"}
Consider a holonomic system with $n$ degrees of freedom, with ideal constraints, with kinetic energy $T$ expressed in the Lagrangian coordinates $q_1, \dots, q_n$. Set
$$
Q_h = \sum_{i=1}^{N} \vec{F}_i \cdot \frac{\partial P_i}{\partial q_h} ,
\qquad h = 1, \dots, n ,
$$
where $Q_h$ is the **Lagrangian component of the active load** with respect to the coordinate $q_h$. Then during the motion the $n$ equations
$$
\begin{cases}
\dfrac{d}{dt}\dfrac{\partial T}{\partial \dot{q}_1} - \dfrac{\partial T}{\partial q_1} = Q_1 \\[8pt]
\phantom{xxxx} \vdots \\[4pt]
\dfrac{d}{dt}\dfrac{\partial T}{\partial \dot{q}_n} - \dfrac{\partial T}{\partial q_n} = Q_n
\end{cases}
$$
hold. The number of equations equals the number of degrees of freedom and the reactions of the ideal constraints do not appear: in order to write the motion the kinetic energy and the active forces are therefore enough. For the rod with one endpoint on a guide, with the weight as the only force, the two equations are obtained by differentiating the expression of $T$ already computed.

:::dimostrazione
In the symbolic relation of dynamics the expression of the virtual displacement $\delta P_i = \displaystyle\sum_h \frac{\partial P_i}{\partial q_h}\,\delta q_h$ is substituted and the order of the sums is exchanged:
$$
\sum_{h=1}^{n} \left[ \sum_{i=1}^{N} \vec{F}_i \cdot \frac{\partial P_i}{\partial q_h} - \sum_{i=1}^{N} m_i \vec{a}_i \cdot \frac{\partial P_i}{\partial q_h} \right] \delta q_h = 0 .
$$
The increments $\delta q_h$ are arbitrary and independent, therefore every coefficient of the sum is zero, that is
$$
\sum_{i=1}^{N} m_i \vec{a}_i \cdot \frac{\partial P_i}{\partial q_h} = Q_h ,
\qquad h = 1, \dots, n .
$$
It remains to recognize in the left-hand side an expression built with the kinetic energy alone. From the formula of the velocity in Lagrangian coordinates, in which $\dfrac{\partial P_i}{\partial q_k}$ and $\dfrac{\partial P_i}{\partial t}$ depend on $q$ and on $t$ but not on the generalized velocities, differentiating with respect to $\dot{q}_h$ gives
$$
\frac{\partial \vec{v}_i}{\partial \dot{q}_h} = \frac{\partial P_i}{\partial q_h} .
$$
Differentiating instead $\dfrac{\partial P_i}{\partial q_h}$ with respect to time along the motion and $\vec{v}_i$ with respect to $q_h$ gives the two expressions
$$
\frac{d}{dt}\frac{\partial P_i}{\partial q_h} = \sum_{k=1}^{n} \frac{\partial^2 P_i}{\partial q_k \, \partial q_h}\,\dot{q}_k + \frac{\partial^2 P_i}{\partial t \, \partial q_h} ,
\qquad
\frac{\partial \vec{v}_i}{\partial q_h} = \sum_{k=1}^{n} \frac{\partial^2 P_i}{\partial q_h \, \partial q_k}\,\dot{q}_k + \frac{\partial^2 P_i}{\partial q_h \, \partial t} ,
$$
which coincide by **Schwarz's theorem**, given that the mixed second derivatives are equal. Therefore
$$
\frac{d}{dt}\frac{\partial P_i}{\partial q_h} = \frac{\partial \vec{v}_i}{\partial q_h}
$$
holds as well. The product $m_i \vec{v}_i \cdot \dfrac{\partial P_i}{\partial q_h}$ is now differentiated with respect to time and the term with the acceleration is isolated:
$$
m_i \vec{a}_i \cdot \frac{\partial P_i}{\partial q_h}
= \frac{d}{dt}\left( m_i \vec{v}_i \cdot \frac{\partial P_i}{\partial q_h} \right) - m_i \vec{v}_i \cdot \frac{d}{dt}\frac{\partial P_i}{\partial q_h} .
$$
In the first summand $\dfrac{\partial P_i}{\partial q_h} = \dfrac{\partial \vec{v}_i}{\partial \dot{q}_h}$ is used and in the second $\dfrac{d}{dt}\dfrac{\partial P_i}{\partial q_h} = \dfrac{\partial \vec{v}_i}{\partial q_h}$, therefore
$$
m_i \vec{a}_i \cdot \frac{\partial P_i}{\partial q_h}
= \frac{d}{dt}\frac{\partial}{\partial \dot{q}_h}\left( \frac{1}{2}\,m_i\,v_i^2 \right) - \frac{\partial}{\partial q_h}\left( \frac{1}{2}\,m_i\,v_i^2 \right) .
$$
The sum over $i$ from $1$ to $N$ is taken. The sum of the kinetic energies of the single points is the kinetic energy $T$ of the system, hence the left-hand side becomes $\dfrac{d}{dt}\dfrac{\partial T}{\partial \dot{q}_h} - \dfrac{\partial T}{\partial q_h}$, and the equality with $Q_h$ gives the $h$-th equation.
:::
::::

:::osservazione{#struttura-equazioni titolo="Normal form and Cauchy problem"}
In the equation of index $h$ the derivative $\dfrac{d}{dt}\dfrac{\partial T}{\partial \dot{q}_h}$ produces the terms $\displaystyle\sum_k a_{hk}\,\ddot{q}_k$ and terms that contain only $q$, $\dot{q}$ and $t$. The system is therefore written in the form
$$
\mathbb{A}(q, t)\,\ddot{q} = \vec{g}(q, \dot{q}, t) ,
$$
and since $\mathbb{A}$ is invertible by the theorem on the kinetic matrix, it is solved for the accelerations:
$$
\ddot{q} = \mathbb{A}^{-1}(q, t)\,\vec{g}(q, \dot{q}, t) .
$$
A system of $n$ second-order differential equations in normal form is obtained in this way, to which the existence and uniqueness theorem for the Cauchy problem applies: once the configuration $q(t_0)$ and the generalized velocities $\dot{q}(t_0)$ are prescribed, the motion is determined. This justifies the fact that a system with $n$ degrees of freedom requires $2n$ initial data.
:::

## Conservative loads and the Lagrangian

:::definizione{#lagrangiana titolo="Conservative load and Lagrangian"}
The active load is called **conservative** when there exists a function $U(q_1, \dots, q_n)$, called the *potential*, such that
$$
Q_h = \frac{\partial U}{\partial q_h} ,
\qquad h = 1, \dots, n .
$$
Throughout Analytical mechanics the potential is related to the force by $\vec{F} = \operatorname{grad} U$ and the potential energy is $V = -U$; for the weight of a body of mass $m$ and center of mass $G$ one has $U = -m\,g\,y_G$ and for a spring of constant $k$, length $\ell$ and rest length $\ell_0$ one has $U = -\dfrac{1}{2}\,k\,(\ell - \ell_0)^2$. Once the **Lagrangian**
$$
\mathcal{L} = T + U = T - V ,
$$
is set, and since $U$ does not depend on the generalized velocities, Lagrange's equations take the form
$$
\frac{d}{dt}\frac{\partial \mathcal{L}}{\partial \dot{q}_h} - \frac{\partial \mathcal{L}}{\partial q_h} = 0 ,
\qquad h = 1, \dots, n .
$$
The motion of a conservative system is therefore determined by the single function $\mathcal{L}$, and writing it reduces to computing $T$ and $U$ in the chosen coordinates.
:::

:::esempio{titolo="Compound pendulum"}
The uniform rod $OA$, of mass $m$ and length $\ell$, is hinged at the endpoint $O$ by a smooth fixed hinge and rotates in the vertical plane. The system has one degree of freedom and the angle $\vartheta$ between the rod and the downward vertical is taken as Lagrangian coordinate.

::struttura{nodi="O,0,0;A,1.2,-2.078" aste="O-A" vincoli="O,cerniera,90" tratteggi="0,0 0,-2.4" punti="0.6,-1.039,G,baricentro" forze="0.6 -1.039,0,-0.85,mg" etichette="0.3,-1.08,ϑ" quote="O,A,ℓ,-0.55" titolo="Compound pendulum: the rod rotates about the fixed hinge $O$ and the Lagrangian coordinate is the angle $\vartheta$"}

The act of motion is a rotation about the fixed axis through $O$, therefore, with $I_O = \dfrac{1}{3}\,m\,\ell^2$,
$$
T = \frac{1}{2}\,I_O\,\dot{\vartheta}^2 = \frac{1}{6}\,m\,\ell^2\,\dot{\vartheta}^2 ,
\qquad
U = -m\,g\,y_G = \frac{1}{2}\,m\,g\,\ell\cos\vartheta .
$$
The two derivatives that appear in the equation are computed,
$$
\frac{d}{dt}\frac{\partial T}{\partial \dot{\vartheta}} = \frac{1}{3}\,m\,\ell^2\,\ddot{\vartheta} ,
\qquad
\frac{\partial T}{\partial \vartheta} = 0 ,
\qquad
Q_\vartheta = \frac{\partial U}{\partial \vartheta} = -\frac{1}{2}\,m\,g\,\ell\sin\vartheta ,
$$
and the equation of motion turns out to be
$$
\frac{1}{3}\,m\,\ell^2\,\ddot{\vartheta} = -\frac{1}{2}\,m\,g\,\ell\sin\vartheta ,
\qquad \text{that is} \qquad
\ddot{\vartheta} = -\frac{3\,g}{2\,\ell}\sin\vartheta .
$$
The equation coincides with that of the simple pendulum of length $\dfrac{2}{3}\,\ell$, which is the **reduced length** of the compound pendulum, and it coincides with the second cardinal equation written with pole at the hinge, $I_O\,\ddot{\vartheta} = M_O^{(e)}$, because the moment of the weight with respect to $O$ is $-\dfrac{1}{2}\,m\,g\,\ell\sin\vartheta$.
:::

:::osservazione{#sollecitazioni-mista titolo="Partly conservative loads"}
When some active forces admit a potential and others do not, the conservative contribution is separated from the rest by setting
$$
Q_h = \frac{\partial U}{\partial q_h} + Q_h^{*} ,
$$
and the equations are written with the Lagrangian on the left-hand side and the residual part on the right-hand side:
$$
\frac{d}{dt}\frac{\partial \mathcal{L}}{\partial \dot{q}_h} - \frac{\partial \mathcal{L}}{\partial q_h} = Q_h^{*} .
$$
The separation is convenient because the weight and the springs, which appear in almost every problem, give the potential $U$ with a single computation of heights and lengths, while the components $Q_h^{*}$ of the few remaining forces are computed from the virtual work.
:::

## Non-conservative loads: viscous friction

:::definizione{#dissipazione-rayleigh titolo="Rayleigh dissipation function"}
Suppose that viscous resistances $\vec{F}_i = -h_i\,\vec{v}_i$, with $h_i > 0$, act on some points of the system. Once the **Rayleigh dissipation function**
$$
\mathcal{D} = \frac{1}{2} \sum_{i=1}^{N} h_i\,v_i^2 ,
$$
is set, the Lagrangian components of these forces are obtained by differentiating $\mathcal{D}$ with respect to the generalized velocities:
$$
Q_h^{*} = -\frac{\partial \mathcal{D}}{\partial \dot{q}_h} .
$$
The equality follows from the definition of $Q_h^{*}$ and from the identity $\dfrac{\partial \vec{v}_i}{\partial \dot{q}_h} = \dfrac{\partial P_i}{\partial q_h}$ proved for Lagrange's equations, since
$$
Q_h^{*} = \sum_i (-h_i \vec{v}_i) \cdot \frac{\partial P_i}{\partial q_h} = -\sum_i h_i \vec{v}_i \cdot \frac{\partial \vec{v}_i}{\partial \dot{q}_h} = -\frac{\partial}{\partial \dot{q}_h} \left( \frac{1}{2}\sum_i h_i v_i^2 \right) .
$$
The function $\mathcal{D}$ is computed like the kinetic energy, with $h_i$ in place of $m_i$, therefore the viscous resistance enters the equations with the same kind of computation already carried out for $T$.
:::

:::esempio{titolo="Oscillator with viscous resistance"}
The material point $P$ of mass $m$ slides on a smooth horizontal guide, is connected to the fixed point $O$ of the guide by a spring of constant $k$ and zero rest length and is immersed in a fluid that exerts the resistance $-h\,\vec{v}_P$. The abscissa $x$ of $P$ is taken as Lagrangian coordinate.

::struttura{nodi="O,0,0;P,3.2,0" linee="-0.4,0 5,0;0,0 0.45,0.26 1.1,-0.26 1.75,0.26 2.4,-0.26 2.85,0 3.2,0" etichette="1.5,-0.45,k" forze="3.2 0,-1,0,-h v_P" quote="O,P,x,-0.62" titolo="Point on a horizontal guide with a spring of constant $k$ and viscous resistance $-h\,\vec{v}_P$"}

The kinetic energy, the potential of the spring and the dissipation function are computed:
$$
T = \frac{1}{2}\,m\,\dot{x}^2 ,
\qquad
U = -\frac{1}{2}\,k\,x^2 ,
\qquad
\mathcal{D} = \frac{1}{2}\,h\,\dot{x}^2 .
$$
Lagrange's equation with the non-conservative part gives
$$
m\,\ddot{x} = -k\,x - h\,\dot{x} ,
\qquad \text{that is} \qquad
m\,\ddot{x} + h\,\dot{x} + k\,x = 0 ,
$$
which is the equation of the damped harmonic oscillator studied in the topic on the dynamics of the material point.
:::

## First integrals of the motion

Solving Lagrange's equations in closed form is possible in few cases, whereas the functions that remain constant along the motion are recognized from the structure of the Lagrangian and give information on the motion without integrating.

:::definizione{#momenti-cinetici titolo="Kinetic momenta and cyclic coordinates"}
The **kinetic momentum** conjugate to the coordinate $q_h$ is the function
$$
p_h = \frac{\partial \mathcal{L}}{\partial \dot{q}_h} = \frac{\partial T}{\partial \dot{q}_h} .
$$
The coordinate $q_h$ is called **cyclic**, or *absent*, when the Lagrangian does not depend on $q_h$, that is when $\dfrac{\partial \mathcal{L}}{\partial q_h} = 0$. In the case of a system of bodies free to translate along a fixed direction, the coordinate that measures the translation is cyclic if the active forces have zero component in that direction, and the conjugate momentum is the component of the linear momentum along that direction.
:::

:::teorema{#coordinata-ciclica titolo="Conservation of the kinetic momentum"}
If the coordinate $q_h$ is cyclic, then the conjugate kinetic momentum $p_h$ is constant along every motion of the system. The conservation follows immediately from Lagrange's equation of index $h$, which reduces to $\dfrac{d p_h}{dt} = 0$. The constant $p_h$ is computed from the initial data and links the generalized velocities to one another, reducing the number of unknowns by one: in a system with two degrees of freedom with one cyclic coordinate a single differential equation remains to be studied.
:::

::::teorema{#funzione-di-jacobi titolo="Generalized integral of the energy"}
Consider a holonomic system with ideal constraints and conservative load and set
$$
\mathcal{H} = \sum_{h=1}^{n} \dot{q}_h\,\frac{\partial \mathcal{L}}{\partial \dot{q}_h} - \mathcal{L} ,
$$
a function called the **Jacobi function**. Along every motion
$$
\frac{d\mathcal{H}}{dt} = -\frac{\partial \mathcal{L}}{\partial t}
$$
holds, therefore if the Lagrangian does not depend explicitly on time the Jacobi function is constant. Moreover, in terms of the three summands of the kinetic energy,
$$
\mathcal{H} = T_2 - T_0 + V .
$$
The Jacobi function is thus a first integral also for systems with moving constraints, provided that the Lagrangian does not depend explicitly on time, as happens for a guide that rotates with constant angular velocity, where the mechanical energy $T + V$ is not conserved.

:::dimostrazione
$\mathcal{H}$ is differentiated with respect to time along the motion:
$$
\frac{d\mathcal{H}}{dt} = \sum_{h} \left( \ddot{q}_h\,\frac{\partial \mathcal{L}}{\partial \dot{q}_h} + \dot{q}_h\,\frac{d}{dt}\frac{\partial \mathcal{L}}{\partial \dot{q}_h} \right) - \sum_{h} \left( \frac{\partial \mathcal{L}}{\partial q_h}\,\dot{q}_h + \frac{\partial \mathcal{L}}{\partial \dot{q}_h}\,\ddot{q}_h \right) - \frac{\partial \mathcal{L}}{\partial t} .
$$
The terms with $\ddot{q}_h$ cancel, hence
$$
\frac{d\mathcal{H}}{dt} = \sum_{h} \dot{q}_h \left( \frac{d}{dt}\frac{\partial \mathcal{L}}{\partial \dot{q}_h} - \frac{\partial \mathcal{L}}{\partial q_h} \right) - \frac{\partial \mathcal{L}}{\partial t} .
$$
Every bracket is zero by Lagrange's equations, therefore $\dfrac{d\mathcal{H}}{dt} = -\dfrac{\partial \mathcal{L}}{\partial t}$ remains.

For the second expression one observes that $T_2$ is a quadratic form in the generalized velocities and $T_1$ is linear, hence by Euler's theorem on homogeneous functions
$$
\sum_{h} \dot{q}_h\,\frac{\partial T}{\partial \dot{q}_h} = 2\,T_2 + T_1 .
$$
Since $U$ does not depend on the generalized velocities, one has $\dfrac{\partial \mathcal{L}}{\partial \dot{q}_h} = \dfrac{\partial T}{\partial \dot{q}_h}$ and therefore
$$
\mathcal{H} = 2\,T_2 + T_1 - (T_2 + T_1 + T_0 + U) = T_2 - T_0 - U = T_2 - T_0 + V .
$$
:::
::::

:::osservazione{#conservazione-energia titolo="Fixed constraints: conservation of the mechanical energy"}
With fixed constraints the kinetic energy reduces to $T_2$, therefore $T_0 = 0$ and the Jacobi function coincides with the mechanical energy:
$$
\mathcal{H} = T + V = E .
$$
If moreover the potential does not depend on time, the Lagrangian does not depend explicitly on time and the mechanical energy is constant. In this way the conservation of the mechanical energy proved in the topic on the dynamics of systems is recovered from the structure of Lagrange's equations alone. The energy integral is the one used in exercises with one degree of freedom to obtain the velocity in a prescribed configuration without integrating the equation of motion.
:::

:::esempio{titolo="Point on a rotating guide"}
The material point $P$ of mass $m$ slides on a smooth horizontal straight guide, which rotates with constant angular velocity $\omega$ about the vertical axis through its point $O$; a spring of constant $k$ and zero rest length connects $P$ to $O$. The distance $r$ of $P$ from $O$ is taken as Lagrangian coordinate.

::struttura{nodi="O,0,0;P,2.4,0" linee="-3,0 3.4,0;0,0 0.34,0.24 0.82,-0.24 1.3,0.24 1.78,-0.24 2.12,0 2.4,0" coppie="-2 0,1,ω" etichette="1.1,-0.45,k" quote="O,P,r,-0.62" titolo="Guide rotating with constant angular velocity $\omega$: the constraint is moving, hence the kinetic energy contains the term $T_0$"}

The guide is horizontal, hence the weight is balanced by the reaction of the guide and does zero virtual work. The velocity of $P$ has the component $\dot{r}$ along the guide and the component $\omega\,r$ orthogonal to it, therefore
$$
T = \frac{1}{2}\,m\,\dot{r}^2 + \frac{1}{2}\,m\,\omega^2\,r^2 ,
\qquad
T_2 = \frac{1}{2}\,m\,\dot{r}^2 ,
\qquad
T_0 = \frac{1}{2}\,m\,\omega^2\,r^2 ,
$$
while the potential of the spring is $U = -\dfrac{1}{2}\,k\,r^2$. Lagrange's equation gives
$$
m\,\ddot{r} = m\,\omega^2\,r - k\,r ,
$$
where the term $m\,\omega^2 r$ comes from $\dfrac{\partial T}{\partial r}$ and is interpreted in the moving frame as a centrifugal force. The Lagrangian does not depend explicitly on time, hence the Jacobi function
$$
\mathcal{H} = T_2 - T_0 + V = \frac{1}{2}\,m\,\dot{r}^2 - \frac{1}{2}\,m\,\omega^2\,r^2 + \frac{1}{2}\,k\,r^2
$$
remains **constant** along the motion, whereas the mechanical energy $T + V$ increases or decreases, because the moving constraint does work on the point.
:::

## Examples with one and with two degrees of freedom

:::esempio{titolo="Disk rolling on an inclined plane"}
The homogeneous disk of mass $m$ and radius $R$ rolls without slipping on a plane inclined at an angle $\alpha$, in the vertical plane. The curvilinear abscissa $s$ of the center $G$ along the plane, measured downwards, is taken as Lagrangian coordinate.

::struttura{poligoni="0,0 5,0 0,2.887" cerchi="2.132,2.580,0.8" punti="2.132,2.580,G,baricentro;1.732,1.887,C,centro" frecce="2.132,2.580,3.431,1.830,s" etichette="3.85,0.25,α" titolo="Disk rolling without slipping: the pure rolling constraint leaves a single degree of freedom"}

The pure rolling constraint links the angular velocity to the velocity of the center by $|\dot{\varphi}| = \dfrac{\dot{s}}{R}$, as obtained in the topic on the kinematics of the rigid body. The moment of inertia of the disk with respect to the axis through $G$ orthogonal to the plane of the motion is $I_G = \dfrac{1}{2}\,m\,R^2$, hence by König's theorem
$$
T = \frac{1}{2}\,m\,\dot{s}^2 + \frac{1}{2} \cdot \frac{1}{2}\,m\,R^2 \cdot \frac{\dot{s}^2}{R^2} = \frac{3}{4}\,m\,\dot{s}^2 .
$$
The center descends by the height $s\sin\alpha$, therefore $U = -m\,g\,y_G = m\,g\,s\sin\alpha$ up to an additive constant, and Lagrange's equation gives
$$
\frac{3}{2}\,m\,\ddot{s} = m\,g\sin\alpha ,
\qquad \text{that is} \qquad
\ddot{s} = \frac{2}{3}\,g\sin\alpha .
$$
The acceleration is constant and smaller than $g\sin\alpha$, which is the value for a point that slides without friction on the same plane, because part of the energy goes into the rotational motion. The reaction of the rolling constraint does not appear in the equation, although its tangential component is different from zero: the contact point has zero velocity, hence the virtual work of the reaction is zero and the constraint is ideal.
:::

:::esempio{titolo="Double pendulum"}
The uniform rods $OA$ and $AB$, each of mass $m$ and length $\ell$, are connected by a smooth hinge at $A$, while $OA$ is hinged at the fixed point $O$; the system moves in the vertical plane. The angles $\vartheta_1$ and $\vartheta_2$ that the two rods form with the downward vertical are taken as Lagrangian coordinates.

::struttura{nodi="O,0,0;A,0.761,-1.631;B,2.235,-2.663" aste="O-A;A-B" vincoli="O,cerniera,90" cerniere="A" tratteggi="0,0 0,-1.95;0.761,-1.631 0.761,-3.1" punti="0.38,-0.816,G_1,baricentro;1.498,-2.147,G_2,baricentro" etichette="0.16,-0.98,ϑ_1;0.95,-2.33,ϑ_2" titolo="Double pendulum: two degrees of freedom and kinetic matrix depending on the configuration"}

The first rod rotates about the fixed axis through $O$, hence its kinetic energy is $\dfrac{1}{6}\,m\,\ell^2\,\dot{\vartheta}_1^2$. The center of mass of the second rod has position and velocity
$$
G_2 - O = \left( \ell\sin\vartheta_1 + \frac{\ell}{2}\sin\vartheta_2 \right) \hat{\imath} - \left( \ell\cos\vartheta_1 + \frac{\ell}{2}\cos\vartheta_2 \right) \hat{\jmath} ,
\qquad
v_{G_2}^2 = \ell^2\,\dot{\vartheta}_1^2 + \frac{\ell^2}{4}\,\dot{\vartheta}_2^2 + \ell^2\,\dot{\vartheta}_1\,\dot{\vartheta}_2\cos(\vartheta_1 - \vartheta_2) ,
$$
and by König's theorem, with $I_{G_2} = \dfrac{1}{12}\,m\,\ell^2$, the total kinetic energy turns out to be
$$
T = \frac{2}{3}\,m\,\ell^2\,\dot{\vartheta}_1^2 + \frac{1}{6}\,m\,\ell^2\,\dot{\vartheta}_2^2 + \frac{1}{2}\,m\,\ell^2\,\dot{\vartheta}_1\,\dot{\vartheta}_2\cos(\vartheta_1 - \vartheta_2) .
$$
The potential of the weight of the two rods is
$$
U = -m\,g\,y_{G_1} - m\,g\,y_{G_2} = \frac{1}{2}\,m\,g\,\ell\,(3\cos\vartheta_1 + \cos\vartheta_2) ,
$$
and the two Lagrange equations, divided by $m\,\ell$, are
$$
\begin{cases}
\dfrac{4}{3}\,\ell\,\ddot{\vartheta}_1 + \dfrac{1}{2}\,\ell\cos(\vartheta_1 - \vartheta_2)\,\ddot{\vartheta}_2 + \dfrac{1}{2}\,\ell\sin(\vartheta_1 - \vartheta_2)\,\dot{\vartheta}_2^2 + \dfrac{3}{2}\,g\sin\vartheta_1 = 0 \\[8pt]
\dfrac{1}{3}\,\ell\,\ddot{\vartheta}_2 + \dfrac{1}{2}\,\ell\cos(\vartheta_1 - \vartheta_2)\,\ddot{\vartheta}_1 - \dfrac{1}{2}\,\ell\sin(\vartheta_1 - \vartheta_2)\,\dot{\vartheta}_1^2 + \dfrac{1}{2}\,g\sin\vartheta_2 = 0
\end{cases}
$$
The two equations are coupled through the terms in $\cos(\vartheta_1 - \vartheta_2)$ and $\sin(\vartheta_1 - \vartheta_2)$, which come from the mixed term of the kinetic energy. The constraints are fixed and the load is conservative, therefore the mechanical energy $E = T - U$ is a first integral of the motion.
:::

## What Lagrange's method gives

:::osservazione{#confronto-cardinali titolo="Comparison with the cardinal equations"}
For a system with one degree of freedom Lagrange's equation and the second cardinal equation written with a suitable pole give the same equation of motion, as is seen in the compound pendulum and in the rolling disk. The difference is seen in systems of several bodies: the cardinal equations must be written for every body and contain the reactions of the internal hinges, which are then eliminated, whereas Lagrange's equations are already as many as the degrees of freedom and do not contain those reactions. Lagrange's method does not provide the reactions of the ideal constraints; in order to compute a reaction the corresponding constraint is suppressed, it is replaced by an unknown active force and the additional degree of freedom is used, as in the topic on virtual work and the potential, or else a cardinal equation is written for the body concerned.
:::

:::attenzione
Lagrange's equations in the form proved require the constraints to be holonomic and ideal: if a constraint does virtual work different from zero, the reactions are not eliminated from the symbolic relation of dynamics and the equations do not hold.

A disk that slides on a rough guide is an example: the contact point has velocity different from zero, the kinetic friction has component opposite to that velocity and its virtual work is negative. In that case friction is treated as an active force, computing its Lagrangian component $Q^{*}$ from the virtual work, and the equations are written in the form with the non-conservative load on the right-hand side.
:::
