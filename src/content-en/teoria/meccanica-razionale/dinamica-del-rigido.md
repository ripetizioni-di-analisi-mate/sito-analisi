---
titolo: Rigid body dynamics and Euler equations
sommario: How the equations of motion of a rigid body are written and integrated for a fixed axis, in planar motion and with a fixed point, from the compound pendulum to the Euler equations, to permanent rotations and the regular precessions of the gyroscope.
---

## The cardinal equations for a rigid body

:::richiamo{titolo="Cardinal equations of dynamics"}
Let a material system be subject to external forces of resultant $\vec{R}^{(e)}$ and resultant moment $\vec{M}_O^{(e)}$ with respect to a fixed pole $O$. Then
$$
\frac{d\vec{Q}}{dt} = \vec{R}^{(e)} ,
\qquad
\frac{d\vec{K}_O}{dt} = \vec{M}_O^{(e)} ,
$$
where $\vec{Q} = M\,\vec{v}_G$ is the linear momentum and $\vec{K}_O$ the angular momentum. The second equation holds in the same form with the pole at the center of mass $G$, even when $G$ is moving. See the topic on the dynamics of systems.
:::

:::teorema{#momento-angolare-rigido titolo="Angular momentum and kinetic energy of a rigid body"}
Let a rigid body have mass $M$ and angular velocity $\vec{\omega}$. If the point $O$ of the body is fixed, then
$$
\vec{K}_O = \mathbb{I}_O\,\vec{\omega} ,
\qquad
T = \frac{1}{2}\,\vec{\omega} \cdot \mathbb{I}_O\,\vec{\omega} ;
$$
in general, with the pole at the center of mass,
$$
\vec{K}_G = \mathbb{I}_G\,\vec{\omega} ,
\qquad
T = \frac{1}{2}\,M\,v_G^2 + \frac{1}{2}\,\vec{\omega} \cdot \mathbb{I}_G\,\vec{\omega} .
$$
Both expressions follow from the fundamental formula of rigid kinematics and from König's theorem, therefore see the topics on the kinematics of the rigid body and on the dynamics of systems. The inertia tensor carries the moments of inertia on the diagonal and the products of inertia, with the sign changed, off the diagonal,
$$
\mathbb{I}_O =
\begin{pmatrix}
I_{xx} & -I_{xy} & -I_{xz} \\
-I_{xy} & I_{yy} & -I_{yz} \\
-I_{xz} & -I_{yz} & I_{zz}
\end{pmatrix} ,
\qquad
I_{xy} = \int xy\,dm .
$$
When the body-fixed frame $\xi$, $\eta$, $\zeta$ is principal of inertia at $O$ the tensor is diagonal, with principal moments $A$, $B$, $C$. Denoting by $p$, $q$, $r$ the components of $\vec{\omega}$ in that frame, the two formulas become $\vec{K}_O = A\,p\,\hat{e}_\xi + B\,q\,\hat{e}_\eta + C\,r\,\hat{e}_\zeta$ and $T = \dfrac{1}{2}\big( A\,p^2 + B\,q^2 + C\,r^2 \big)$, and it is in this form that they are used throughout the topic.
:::

:::osservazione{#incognite-del-moto titolo="Equations and unknowns in the motion of a rigid body"}
A free rigid body has six degrees of freedom, and the two cardinal equations give six scalar equations, therefore the motion is determined by the applied forces and by the initial data. When the body is constrained, the degrees of freedom drop to $n$ and the constraint reactions, which are unknown, appear among the external forces. In the case of the fixed axis ($n = 1$), of planar motion ($n \le 3$) and of the fixed point ($n = 3$) one selects the components of the cardinal equations that contain the Lagrangian coordinates alone, integrates the motion and only afterwards obtains the reactions from the remaining equations.
:::

## The rigid body with a fixed axis

:::definizione{#asse-fisso titolo="Rigid body with a fixed axis"}
A rigid body has a **fixed axis** when two distinct points $O$ and $A$ of it stay at rest; then the whole line $a$ through $O$ and $A$ stays at rest, the points of the body describe circles whose centers lie on the axis and the system has one degree of freedom. One takes the $z$ axis coincident with $a$ and denotes by $\vartheta$ the angle of rotation, measured counterclockwise about $\hat{k}$, so that $\vec{\omega} = \dot{\vartheta}\,\hat{k}$. The moment of inertia with respect to the axis is denoted by $I_a = I_{zz}$ and is constant in time, since the axis is fixed in the body as well. A flywheel, a pulley with a horizontal axis and a door on its hinges are rigid bodies with a fixed axis.
:::

::::teorema{#equazione-asse-fisso titolo="Equation of motion about a fixed axis"}
Let a rigid body have a fixed axis $a$, be held by ideal constraints, and let $M_a^{(e)}$ be the axial moment with respect to $a$ of the applied forces alone. Then
$$
I_a\,\ddot{\vartheta} = M_a^{(e)} .
$$
The equation contains the single unknown $\vartheta$, hence it determines the motion without the reactions of the axis being known; the same equation describes a particle of mass $I_a$ moving on a line under the force $M_a^{(e)}$. For a flywheel braked by a constant couple $-\mathcal{M}$ one obtains $\ddot{\vartheta} = -\dfrac{\mathcal{M}}{I_a}$, therefore the angular velocity decreases linearly in time and the flywheel stops after $\dfrac{I_a\,\omega_0}{\mathcal{M}}$ seconds.

::struttura{poligoni="0,0 1.9,-1.1 1.5,-3 -0.7,-2.7 -1.1,-1" nodi="O,0,0" vincoli="O,cerniera,90" punti="0.45,-1.85,G,baricentro" tratteggi="0,0 0,-3.3" forze="0.45 -1.85,0,-1,Mg" quote="O,0.45 -1.85,d,-0.4" etichette="0.33,-1.15,ϑ" coppie="-0.75 -0.35,1,ω" titolo="Rigid body with a fixed axis perpendicular to the page: one degree of freedom, the angle $\vartheta$, and the center of mass at distance $d$ from the axis"}

:::dimostrazione
One projects the second cardinal equation with pole at $O$ onto the $z$ axis. The angular velocity is $\vec{\omega} = \dot{\vartheta}\,\hat{k}$, hence the third component of $\vec{K}_O = \mathbb{I}_O\,\vec{\omega}$ is $K_{Oz} = I_{zz}\,\dot{\vartheta} = I_a\,\dot{\vartheta}$. The moment of inertia $I_a$ is constant, therefore
$$
\frac{dK_{Oz}}{dt} = I_a\,\ddot{\vartheta} .
$$
The axial moment of the external forces is the sum of the moment of the applied forces and the moment of the reactions of the axis. The constraints are ideal, hence the reactions are orthogonal to the virtual displacements; the only virtual displacement is the rotation about $a$, therefore the virtual work of the reactions vanishes for every $\delta\vartheta$ and their axial moment with respect to $a$ is zero. There remains $I_a\,\ddot{\vartheta} = M_a^{(e)}$.
:::
::::

:::osservazione{#energia-asse-fisso titolo="First integral of the energy"}
The kinetic energy of a rigid body with a fixed axis is $T = \dfrac{1}{2}\,I_a\,\dot{\vartheta}^2$. If the applied forces are conservative, with potential $U(\vartheta)$ and potential energy $V = -U$, then the equation of motion yields the first integral
$$
\frac{1}{2}\,I_a\,\dot{\vartheta}^2 + V(\vartheta) = E ,
$$
because the work of the reactions of an ideal and fixed constraint is zero. With the weight alone one has $V = M g\,y_G$, and the first integral gives the angular velocity as a function of the height of the center of mass without integrating the differential equation. A homogeneous rod of mass $m$ and length $\ell$ hinged at one end, released from rest in the horizontal position, has $I_a = \dfrac{m\,\ell^2}{3}$ and lowers its center of mass by $\dfrac{\ell}{2}$, hence $\dfrac{1}{2}\cdot\dfrac{m\,\ell^2}{3}\,\omega^2 = \dfrac{m\,g\,\ell}{2}$ and the angular velocity in the vertical position is $\omega = \sqrt{\dfrac{3g}{\ell}}$.
:::

## The reactions of the axis and balancing

The reactions of the axis are obtained from the remaining cardinal equations, once the motion is known, and in general they depend on the angular velocity.

::::teorema{#reazioni-asse titolo="Reactions of a fixed axis"}
Let a rigid body have fixed axis $z$ and be held at the points $O$ and $A = O + h\,\hat{k}$ by two ideal constraints of reactions $\vec{\Phi}_O$ and $\vec{\Phi}_A$, and let $\vec{R}^{(a)}$ and $\vec{M}_O^{(a)}$ be the resultant and the moment of the applied forces. Take the body-fixed frame $\xi$, $\eta$, $\zeta = z$ with origin at $O$. Then the transverse components of the reaction at $A$ are obtained from
$$
\begin{cases}
-h\,\Phi_{A\eta} + M^{(a)}_{O\xi} = -I_{\xi\zeta}\,\ddot{\vartheta} + I_{\eta\zeta}\,\dot{\vartheta}^2 \\[6pt]
\phantom{-}h\,\Phi_{A\xi} + M^{(a)}_{O\eta} = -I_{\eta\zeta}\,\ddot{\vartheta} - I_{\xi\zeta}\,\dot{\vartheta}^2
\end{cases}
$$
and the reaction at $O$ from the first cardinal equation $\vec{\Phi}_O + \vec{\Phi}_A + \vec{R}^{(a)} = M\,\vec{a}_G$, with
$$
\vec{a}_G = \ddot{\vartheta}\,\hat{k} \wedge (G - O) - \dot{\vartheta}^2\,(G - O)_\perp ,
$$
where $(G - O)_\perp$ is the component of $G - O$ orthogonal to the axis. The reactions are therefore the sum of a part that depends only on the applied forces and of a part proportional to $\ddot{\vartheta}$ and to $\dot{\vartheta}^2$, which vanishes for every motion if and only if $(G-O)_\perp = \vec{0}$ and $I_{\xi\zeta} = I_{\eta\zeta} = 0$.

::struttura{nodi="O,0,0;A,0,4;D,1.7,3.15,-;E,-1.7,0.85,-" aste="O-A;D-E" vincoli="O,cerniera;A,cerniera,90" punti="0,2,G,baricentro" tratteggi="0,2 0,3.7" reazioni="O,1.1,0,Φ_O;A,-1.1,0,Φ_A" etichette="0.38,2.9,α" quote="O,A,h,-0.95" titolo="Body welded to a shaft between the two bearings $O$ and $A$: the transverse reactions depend on $\ddot{\vartheta}$ and on $\dot{\vartheta}^2$ through the products of inertia"}

:::dimostrazione
One projects the cardinal equations onto the body-fixed frame. From the fundamental formula of rigid kinematics, with $O$ fixed, one has $\vec{v}_G = \vec{\omega} \wedge (G-O)$ and hence
$$
\vec{a}_G = \dot{\vec{\omega}} \wedge (G - O) + \vec{\omega} \wedge \big( \vec{\omega} \wedge (G-O) \big) = \ddot{\vartheta}\,\hat{k} \wedge (G-O) - \dot{\vartheta}^2\,(G-O)_\perp ,
$$
which gives the first cardinal equation in the form of the statement. For the second one starts from $\vec{K}_O = \mathbb{I}_O\,\vec{\omega}$ with $\vec{\omega} = \dot{\vartheta}\,\hat{e}_\zeta$, that is
$$
\vec{K}_O = -I_{\xi\zeta}\,\dot{\vartheta}\,\hat{e}_\xi - I_{\eta\zeta}\,\dot{\vartheta}\,\hat{e}_\eta + I_a\,\dot{\vartheta}\,\hat{e}_\zeta ,
$$
where the three products and moments of inertia are constant, since the frame is fixed in the body. The derivative of a vector in the fixed frame is obtained from the one in the body-fixed frame by adding $\vec{\omega} \wedge \vec{K}_O$, therefore
$$
\frac{d\vec{K}_O}{dt} = \big( -I_{\xi\zeta}\,\ddot{\vartheta} + I_{\eta\zeta}\,\dot{\vartheta}^2 \big)\,\hat{e}_\xi + \big( -I_{\eta\zeta}\,\ddot{\vartheta} - I_{\xi\zeta}\,\dot{\vartheta}^2 \big)\,\hat{e}_\eta + I_a\,\ddot{\vartheta}\,\hat{e}_\zeta .
$$
The moment of the external forces with respect to $O$ is $\vec{M}_O^{(a)} + (A - O) \wedge \vec{\Phi}_A$, because the reaction at $O$ has zero moment with respect to $O$; since $A - O = h\,\hat{e}_\zeta$, the cross product is $h\,(-\Phi_{A\eta}\,\hat{e}_\xi + \Phi_{A\xi}\,\hat{e}_\eta)$. Equating the components along $\hat{e}_\xi$ and along $\hat{e}_\eta$ one obtains the system of the statement, while the component along $\hat{e}_\zeta$ reproduces the equation of motion.
:::
::::

:::definizione{#bilanciamento titolo="Static and dynamic balancing"}
A rigid body with a fixed axis is **statically balanced** when its center of mass lies on the axis of rotation, so that $\vec{a}_G = \vec{0}$ in every motion. It is **dynamically balanced** when the axis of rotation is a principal axis of inertia at one of its points, that is when $I_{\xi\zeta} = I_{\eta\zeta} = 0$. When both conditions hold, the reactions of the bearings coincide with those that would be computed in statics, whatever the angular velocity, and this is the reason why shafts, wheels and rotors are balanced before being set in rotation. A wheel with an unbalanced mass $m$ at distance $e$ from the axis is balanced statically by adding a mass $m'$ diametrically opposite with $m'e' = m\,e$, and at the angular velocity $\omega$ the unbalanced mass produces reactions proportional to $m\,e\,\omega^2$, which grow with the square of the rotation speed.
:::

:::attenzione
Static balancing does not imply dynamic balancing. A homogeneous rod of mass $m$ and length $\ell$ welded by its midpoint $G$ to a vertical shaft, with $G$ on the axis and the rod inclined by $\alpha$ to the axis, is statically balanced, because $\vec{a}_G = \vec{0}$. The product of inertia with respect to the body-fixed frame is however
$$
I_{\xi\zeta} = \int \xi\,\zeta\,dm = \frac{m}{\ell}\int_{-\ell/2}^{\ell/2} s^2 \sin\alpha \cos\alpha \,ds = \frac{m\,\ell^2}{24}\,\sin 2\alpha ,
$$
which is different from zero for $0 < \alpha < \dfrac{\pi}{2}$. With $\dot{\vartheta} = \omega$ constant the two bearings, at distance $h$, then exert two opposite forces of magnitude
$$
\frac{m\,\ell^2\,\omega^2\,\sin 2\alpha}{24\,h} ,
$$
which rotate with the shaft and are largest for $\alpha = \dfrac{\pi}{4}$.
:::

## The compound pendulum

::::teorema{#pendolo-composto titolo="Compound pendulum"}
Let a rigid body of mass $M$ be subject to the weight alone and held by ideal constraints to a fixed horizontal axis $a$ that does not pass through the center of mass, and let $d$ be the distance of $G$ from the axis and $I_a$ the moment of inertia with respect to $a$. Denoting by $\vartheta$ the angle that the plane containing $a$ and $G$ forms with the vertical plane, the equation of motion is
$$
I_a\,\ddot{\vartheta} = -M\,g\,d\,\sin\vartheta ,
$$
which is the equation of a simple pendulum of length
$$
\ell_r = \frac{I_a}{M\,d} .
$$
The small oscillations about $\vartheta = 0$ have angular frequency and period
$$
\omega = \sqrt{\frac{M\,g\,d}{I_a}} ,
\qquad
\mathcal{T} = 2\pi\sqrt{\frac{I_a}{M\,g\,d}} .
$$
The theorem serves to measure $g$ and to compare different bodies, since two bodies with the same $\ell_r$ oscillate with the same period, whatever their shape. For a homogeneous rod of length $\ell$ suspended at one end one has $I_a = \dfrac{m\,\ell^2}{3}$ and $d = \dfrac{\ell}{2}$, hence $\ell_r = \dfrac{2\ell}{3}$ and the period is that of a simple pendulum two thirds as long as the rod.

:::dimostrazione
The axial moment of the weight with respect to $a$ is computed as the moment of the resultant $-M g\,\hat{\jmath}$ applied at $G$. The distance of $G$ from the axis is $d$ and the lever arm of the weight with respect to the axis is the horizontal projection of that distance, that is $d\,\sin\vartheta$; the moment tends to bring the body back towards $\vartheta = 0$, therefore it has the sign opposite to $\vartheta$ and equals $-M g\,d\,\sin\vartheta$. The constraint is ideal, hence by the equation of motion about a fixed axis one obtains $I_a\,\ddot{\vartheta} = -M g\,d \sin\vartheta$. Dividing by $I_a$ and introducing $\ell_r = \dfrac{I_a}{M d}$ one has $\ddot{\vartheta} = -\dfrac{g}{\ell_r}\,\sin\vartheta$, which is the equation of the simple pendulum of length $\ell_r$. For small $|\vartheta|$ one replaces $\sin\vartheta$ with $\vartheta$ and obtains the equation of the harmonic oscillator $\ddot{\vartheta} + \dfrac{g}{\ell_r}\,\vartheta = 0$, of angular frequency $\sqrt{\dfrac{g}{\ell_r}} = \sqrt{\dfrac{M g d}{I_a}}$.
:::
::::

:::definizione{#lunghezza-ridotta titolo="Reduced length and center of oscillation"}
The **reduced length** of a compound pendulum is $\ell_r = \dfrac{I_a}{M\,d}$, that is the length of the simple pendulum that oscillates with the same period. The point $O^*$ of the ray that starts from the axis, passes through $G$ and lies at distance $\ell_r$ from the axis is called the **center of oscillation**. By the Huygens-Steiner theorem one has $I_a = I_G + M d^2$, hence, denoting by $\rho$ the radius of gyration about the center of mass in the direction of the axis,
$$
\ell_r = d + \frac{\rho^2}{d} > d ,
$$
therefore the center of oscillation always lies beyond the center of mass.

::struttura{poligoni="-0.95,-1.9 0.95,-1.9 0.95,-3.5 -0.95,-3.5" nodi="A,0,0;B,0,-1.9,-" aste="A-B" vincoli="A,cerniera,90" punti="0,-2.7,G,baricentro;0,-3.8,O*,centro" tratteggi="0,0 0,-4.2" quote="A,0 -2.7,d,0.75;A,0 -3.8,ℓ_r,-1.5" titolo="Compound pendulum: the center of mass lies at distance $d$ from the axis and the center of oscillation $O^*$ at distance $\ell_r = d + \dfrac{\rho^2}{d}$"}

:::

:::osservazione{#reversibilita titolo="Reversibility and minimum period"}
Two properties follow from the expression $\ell_r = d + \dfrac{\rho^2}{d}$. Suspending the body at the center of oscillation, that is taking $d' = \ell_r - d = \dfrac{\rho^2}{d}$, the new reduced length is
$$
\ell_r' = d' + \frac{\rho^2}{d'} = \frac{\rho^2}{d} + d = \ell_r ,
$$
hence the period does not change and the two points exchange their roles; Kater's reversible pendulum is built on this property. Moreover $\ell_r$ is smallest for $d = \rho$, with $\ell_r = 2\rho$, therefore among all the axes parallel to a fixed direction the period is smallest when the distance of $G$ from the axis equals the radius of gyration about the center of mass. For a homogeneous rod $\rho^2 = \dfrac{\ell^2}{12}$, hence the period is smallest for $d = \dfrac{\ell}{2\sqrt{3}}$ and equals $2\pi\sqrt{\dfrac{\ell}{g\sqrt{3}}}$.

::grafico{f="x+1/x" xmin=0 xmax=4 ymin=0 ymax=5 punti="1,2,pieno" nomi="d,ℓr" titolo="The reduced length $\ell_r = d + \dfrac{\rho^2}{d}$, drawn for $\rho = 1$: the minimum equals $2\rho$ and occurs for $d = \rho$, while two distances $d$ and $d'$ with $d\,d' = \rho^2$ give the same period"}

:::

## Planar rigid motion

:::teorema{#moto-rigido-piano titolo="Equations of planar rigid motion"}
Let a rigid body move in the plane $Oxy$, that is with $\vec{\omega} = \dot{\vartheta}\,\hat{k}$ and with the center of mass in the plane, and let $I_G$ be the moment of inertia with respect to the axis through $G$ perpendicular to the plane. The system has at most three degrees of freedom, described by $x_G$, $y_G$ and $\vartheta$, and the cardinal equations reduce to the three scalar equations
$$
\begin{cases}
M\,\ddot{x}_G = R_x^{(e)} \\[4pt]
M\,\ddot{y}_G = R_y^{(e)} \\[4pt]
I_G\,\ddot{\vartheta} = M_{Gz}^{(e)}
\end{cases}
$$
The system of the three equations suffices to determine the motion and the reactions. One eliminates the reactions among the three equations and the constraint equations until as many equations remain as there are degrees of freedom, integrates the motion and then goes back to computing the reactions. For a rod resting at one end on a smooth horizontal plane and released from rest the horizontal forces vanish, hence $\ddot{x}_G = 0$ and the center of mass descends along a vertical line.
:::

:::osservazione{#polo-nel-contatto titolo="Second cardinal equation with the pole at the contact point"}
For a disk that rolls without slipping on a straight guide the contact point $C$ is the instantaneous center of rotation, but it is not a fixed point, therefore the second cardinal equation with pole $C$ has to be justified. For a moving pole $P$ one has $\dfrac{d\vec{K}_P}{dt} = \vec{M}_P^{(e)} - M\,\vec{v}_P \wedge \vec{v}_G$. Taking as $P$ the geometric contact point, its velocity is parallel to the guide and $\vec{v}_G$ is parallel to the guide, hence the cross product vanishes; moreover $\vec{K}_C = I_C\,\dot{\vartheta}\,\hat{k}$ with $I_C = I_G + M R^2$ constant, because the distance of $G$ from the contact stays equal to the radius. For a disk on a straight guide one therefore obtains $I_C\,\ddot{\vartheta} = M_{Cz}^{(e)}$, and choosing this pole is convenient because the reaction of the contact has zero moment.
:::

::::teorema{#rotolamento-su-piano-inclinato titolo="Rolling without slipping on an inclined plane"}
Let a body of mass $m$ and radius $R$, with the center of mass on the axis of figure and moment of inertia about the center of mass $I_G = \beta\,m\,R^2$, roll without slipping on a plane inclined by $\alpha$ to the horizontal. Then the acceleration of the center of mass and the friction force are
$$
a_G = \frac{g\,\sin\alpha}{1 + \beta} ,
\qquad
F_a = \frac{\beta}{1 + \beta}\,m\,g\,\sin\alpha ,
$$
and pure rolling is possible, with coefficient of static friction $f_s$, as long as
$$
\tan\alpha \le \frac{1 + \beta}{\beta}\,f_s .
$$
Bodies with smaller $\beta$ descend faster, independently of mass and radius. For the solid disk $\beta = \dfrac{1}{2}$ and $a_G = \dfrac{2}{3}\,g\sin\alpha$, for the solid sphere $\beta = \dfrac{2}{5}$ and $a_G = \dfrac{5}{7}\,g\sin\alpha$, for the thin ring $\beta = 1$ and $a_G = \dfrac{1}{2}\,g\sin\alpha$.

::struttura{linee="0,0 6,3.46 6,0 0,0" cerchi="2.57,2.48,0.86" punti="2.57,2.48,G,baricentro;3,1.73,C,centro" forze="2.57 2.48,0,-1,mg" reazioni="3 1.73,-0.6,1.04,N;3 1.73,0.95,0.55,F_a" etichette="1.05,0.26,α" coppie="2.57 2.48,1,ω" titolo="Disk rolling without slipping: the weight at $G$, the normal reaction $N$ and the friction force $F_a$ at the contact point $C$"}

:::dimostrazione
One takes the axis of abscissas along the plane, oriented downwards, denotes by $x$ the abscissa of $G$ and by $\vartheta$ the angle of rotation measured counterclockwise. The condition of pure rolling links the rotation to the translation, $\dot{x} = R\,\dot{\vartheta}$, hence $a_G = \ddot{x} = R\,\ddot{\vartheta}$ and the system has one degree of freedom. The external forces are the weight, the normal reaction $N$ and the friction force $F_a$, applied at the contact point. The projection of the first cardinal equation along the plane and the second cardinal equation with pole at $G$ give
$$
\begin{cases}
m\,a_G = m\,g\,\sin\alpha - F_a \\[4pt]
\beta\,m\,R^2\,\dfrac{a_G}{R} = F_a\,R
\end{cases}
$$
From the second equation one obtains $F_a = \beta\,m\,a_G$; substituting into the first one gets $m\,a_G\,(1+\beta) = m g \sin\alpha$, whence the two expressions of the statement. The contact is one of pure rolling as long as the static friction force required does not exceed the maximum value $f_s\,N = f_s\,m\,g\cos\alpha$, that is as long as $\dfrac{\beta}{1+\beta}\,m g \sin\alpha \le f_s\,m g \cos\alpha$, which is the condition on the angle.
:::
::::

:::osservazione{#attrito-volvente titolo="Rolling friction"}
In the rolling of a deformable body the contact takes place over a small area and the reaction of the plane turns out to be displaced forward with respect to the geometric contact point. This situation is modeled by adding a resisting couple to the normal reaction, whose moment has magnitude at most $f_v\,N$, with $f_v$ a **coefficient of rolling friction** that has the dimensions of a length and is measured in meters. The couple opposes the rotation, hence for a body that rolls on a horizontal plane the equation of motion about $G$ becomes $I_G\,\ddot{\vartheta} = F_a\,R - f_v\,N$ and the body slows down even in the absence of slipping. The values of $f_v$ are small, of the order of $10^{-4}\,\mathrm{m}$ for steel on steel, and in the problems of this topic they are neglected unless stated otherwise.
:::

## The rigid body with a fixed point: Euler equations

:::richiamo{titolo="Derivative of a vector in two frames"}
Let $\vec{w}(t)$ be a vector and let $(\Omega; \xi, \eta, \zeta)$ be a moving frame of angular velocity $\vec{\omega}$ with respect to the fixed frame. Then
$$
\left( \frac{d\vec{w}}{dt} \right)_{\!\text{fixed}} = \left( \frac{d\vec{w}}{dt} \right)_{\!\text{moving}} + \vec{\omega} \wedge \vec{w} ,
$$
where the derivative in the moving frame is computed by differentiating the components along $\hat{e}_\xi$, $\hat{e}_\eta$, $\hat{e}_\zeta$ alone. See the topic on the kinematics of the point and on relative motions.
:::

::::teorema{#equazioni-di-eulero titolo="Euler equations"}
Let a rigid body have the point $O$ fixed, let $\xi$, $\eta$, $\zeta$ be a body-fixed frame principal of inertia at $O$, with principal moments $A$, $B$, $C$, and let $p$, $q$, $r$ be the components of $\vec{\omega}$ in that frame. Denoting by $M_\xi$, $M_\eta$, $M_\zeta$ the components of the moment of the external forces with respect to $O$, the **Euler equations** hold
$$
\begin{cases}
A\,\dot{p} + (C - B)\,q\,r = M_\xi \\[4pt]
B\,\dot{q} + (A - C)\,r\,p = M_\eta \\[4pt]
C\,\dot{r} + (B - A)\,p\,q = M_\zeta
\end{cases}
$$
The system contains the three unknowns $p$, $q$, $r$ and does not contain the reaction of the constraint at $O$, which has zero moment with respect to $O$, therefore the three equations determine the angular velocity, and from it one goes back to the Euler angles and to the reaction at $O$. The quadratic terms $(C-B)qr$ and the other two are due to the fact that the reference frame rotates. On a fixed axis, where $p = q = 0$, they vanish and only $C\,\dot{r} = M_\zeta$ remains.

::struttura{nodi="O,0,0" poligoni="0.6,0.5 3.3,1.1 3.9,2.9 1.4,3.3" frecce="0,0,3.1,2.1,ζ;0,0,2.6,-0.75,ξ;0,0,0.3,2.9,η" punti="2.4,1.95,G,baricentro" reazioni="0 0,1.1,-1.05,Φ_O" vincoli="O,cerniera" riferimento=0 titolo="Rigid body with the fixed point $O$ and body-fixed frame principal of inertia $\xi$, $\eta$, $\zeta$: three degrees of freedom and reaction $\vec{\Phi}_O$ of zero moment with respect to $O$"}

:::dimostrazione
One starts from the second cardinal equation with the pole at the fixed point $O$, that is $\dfrac{d\vec{K}_O}{dt} = \vec{M}_O^{(e)}$. The frame is fixed in the body and principal of inertia at $O$, hence
$$
\vec{K}_O = A\,p\,\hat{e}_\xi + B\,q\,\hat{e}_\eta + C\,r\,\hat{e}_\zeta ,
$$
where $A$, $B$, $C$ are constant. The derivative in the body-fixed frame is obtained by differentiating the components alone, therefore it equals $A\,\dot{p}\,\hat{e}_\xi + B\,\dot{q}\,\hat{e}_\eta + C\,\dot{r}\,\hat{e}_\zeta$, and by the derivative of a vector in two frames one adds $\vec{\omega} \wedge \vec{K}_O$. The cross product has components
$$
\vec{\omega} \wedge \vec{K}_O = (C - B)\,q\,r\,\hat{e}_\xi + (A - C)\,r\,p\,\hat{e}_\eta + (B - A)\,p\,q\,\hat{e}_\zeta ,
$$
as one obtains by computing the formal determinant with rows $(\hat{e}_\xi, \hat{e}_\eta, \hat{e}_\zeta)$, $(p, q, r)$ and $(Ap, Bq, Cr)$. Equating component by component to the derivative of $\vec{K}_O$ one obtains the three equations. The reaction of the constraint is applied at $O$, hence its moment with respect to $O$ is zero and only the applied forces appear in $\vec{M}_O^{(e)}$.
:::
::::

## Torque-free motions and permanent rotations

:::teorema{#integrali-primi-poinsot titolo="Poinsot motions: first integrals"}
A **Poinsot motion**, or torque-free motion, is the motion of a rigid body with a fixed point in which the moment of the applied forces with respect to $O$ is zero. In such a motion the vector $\vec{K}_O$ is constant and the kinetic energy is constant, hence
$$
A\,p^2 + B\,q^2 + C\,r^2 = 2T ,
\qquad
A^2 p^2 + B^2 q^2 + C^2 r^2 = |\vec{K}_O|^2 .
$$
The first equality follows from the kinetic energy theorem, because the constraint at $O$ is ideal and fixed and the applied forces have zero moment; the second follows from the second cardinal equation. The two relations confine $|\vec{\omega}|$ to an interval. Once $T$ and $|\vec{K}_O|$ are fixed, the vector $\vec{\omega}$ moves in the body-fixed frame on the intersection of an ellipsoid and a sphere, therefore $|\vec{\omega}|$ oscillates between a minimum value and a maximum value computable from the two first integrals. A satellite in free flight and a coin tossed in the air move as in Poinsot motion, because the weight has zero moment with respect to the center of mass.
:::

::::teorema{#rotazioni-permanenti titolo="Permanent rotations and their stability"}
Let a Poinsot motion of a body with distinct principal moments $A$, $B$, $C$ be given. The motion is a **permanent rotation**, that is $\vec{\omega}$ is constant in magnitude, direction and sense, if and only if $\vec{\omega}$ is directed along a principal axis of inertia at $O$. Moreover the permanent rotations about the axis of largest moment of inertia and about the axis of smallest moment are stable, in the sense that a small initial perturbation of $\vec{\omega}$ stays small; the rotation about the axis of intermediate moment is unstable. The result explains why satellites are stabilized by making them rotate about the axis of largest moment of inertia, and why a body launched almost about the intermediate axis changes its orientation after a few turns.

::struttura{poligoni="-2,-1 2,-1 2,1 -2,1" nodi="G,0,0,-" frecce="0,0,2.9,0,ξ;0,0,0,1.9,η" punti="0,0,G,baricentro" etichette="0.42,-0.3,ζ out of page" quote="-2 -1,2 -1,2ℓ,0.75;2 -1,2 1,ℓ,0.75" titolo="Homogeneous rectangular lamina of sides $2\ell$ and $\ell$: the principal moments at $G$ are $A = \dfrac{m\,\ell^2}{12}$, $B = \dfrac{m\,\ell^2}{3}$ and $C = \dfrac{5\,m\,\ell^2}{12}$, hence $\eta$ is the intermediate axis"}

:::dimostrazione
One sets the moment equal to zero in the Euler equations. If $\vec{\omega} = p_0\,\hat{e}_\xi$ with $p_0$ constant, then $q = r = 0$ and the three equations are satisfied, therefore the rotation about a principal axis is a possible motion. Conversely, if $\vec{\omega}$ is constant then $\dot{p} = \dot{q} = \dot{r} = 0$ and the equations become $(C-B)qr = 0$, $(A-C)rp = 0$, $(B-A)pq = 0$; since $A$, $B$, $C$ are distinct, the three products $qr$, $rp$, $pq$ vanish, hence at most one of the three components is different from zero and $\vec{\omega}$ is directed along a principal axis.

For the stability one studies the rotation about $\xi$, setting $p = p_0 + \varepsilon$ with $q$ and $r$ small. Neglecting the products of two small quantities, the first equation gives $\dot{\varepsilon} = 0$ and the other two become
$$
\begin{cases}
B\,\dot{q} = (C - A)\,r\,p_0 \\[4pt]
C\,\dot{r} = (A - B)\,p_0\,q
\end{cases}
$$
Differentiating the first and substituting the second one obtains
$$
\ddot{q} = \frac{(C-A)(A-B)}{B\,C}\,p_0^2\,q .
$$
If $A$ is the largest or the smallest among the three moments, the two factors $(C-A)$ and $(A-B)$ have opposite signs, hence the coefficient is negative and $q$ oscillates harmonically with amplitude of the order of the initial datum; the same holds for $r$, therefore the rotation is stable. If $A$ is the intermediate moment, the two factors have the same sign, the coefficient is positive and the general solution contains the growing exponential $e^{\lambda t}$ with $\lambda = p_0\sqrt{\dfrac{(C-A)(A-B)}{BC}}$, therefore the rotation is unstable.
:::
::::

:::attenzione
The instability of the rotation about the intermediate axis concerns the torque-free motion, not the geometry of the masses alone. For the rectangular lamina of sides $2\ell$ and $\ell$ one has $A = \dfrac{m\,\ell^2}{12}$, $B = \dfrac{m\,\ell^2}{3}$, $C = \dfrac{5\,m\,\ell^2}{12}$, and the Euler equations of the torque-free motion are $\dot{p} = -q\,r$, $\dot{q} = r\,p$, $\dot{r} = -\dfrac{3}{5}\,p\,q$. Launching the lamina with $\vec{\omega}$ almost parallel to the intermediate axis $\eta$, the perturbation grows with $\lambda = q_0\sqrt{\dfrac{3}{5}}$ and after a few turns the lamina rotates about a completely different direction; with $\vec{\omega}$ almost parallel to $\xi$ or to $\zeta$ the perturbation stays small instead.
:::

## Regular precessions and the gyroscopic effect

:::definizione{#precessione-regolare titolo="Regular precession"}
A rigid body with a fixed point $O$ is called a **gyroscope** when it has gyroscopic structure with respect to $O$, that is when two principal moments at $O$ are equal, $A = B$; the axis of the third principal moment $C$ is called the axis of figure. The motion of the gyroscope is a **regular precession** when the axis of figure $\zeta$ forms a constant angle $\vartheta$ with a fixed line through $O$, called the axis of precession, and the Euler angles $\psi$ and $\varphi$ vary uniformly:
$$
\dot{\psi} = \Omega \ \text{constant} ,
\qquad
\dot{\varphi} \ \text{constant} ,
\qquad
\vartheta \ \text{constant} .
$$
The angular velocity then decomposes as $\vec{\omega} = \Omega\,\hat{k} + \dot{\varphi}\,\hat{e}_\zeta$, the sum of the precession velocity about the fixed axis and of the spin velocity about the axis of figure. A top that spins inclined without wobbling and the axis of the Earth, which describes a cone in about twenty-six thousand years, move in regular precession.
:::

::::teorema{#condizione-precessione-regolare titolo="Condition for the regular precession of the heavy gyroscope"}
Let a heavy gyroscope of mass $M$ have fixed point $O$, principal moments $A = B$ and $C$ at $O$ and center of mass on the axis of figure at distance $d$ from $O$. A regular precession with nutation $\vartheta \in (0, \pi)$, precession velocity $\Omega$ and axial component $r = \dot{\varphi} + \Omega\cos\vartheta$ is possible if and only if
$$
C\,\Omega\,r - A\,\Omega^2 \cos\vartheta = M\,g\,d .
$$
With the axis of figure horizontal, that is $\vartheta = \dfrac{\pi}{2}$, the condition reduces to $C\,\Omega\,\dot{\varphi} = M g d$, hence
$$
\Omega = \frac{M\,g\,d}{C\,\dot{\varphi}} .
$$
The precession velocity is inversely proportional to the spin velocity, therefore a fast top precesses slowly. For a homogeneous disk of mass $m$ and radius $R$ one has $C = \dfrac{m\,R^2}{2}$ and the relation becomes $\Omega = \dfrac{2\,g\,d}{R^2\,\dot{\varphi}}$.

::struttura{nodi="O,0,0" frecce="0,0,0,3.4,precession axis;0,0,1.95,2.4,ζ" tratteggi="0,0 2.6,3.2" cerchi="1.5,1.85,0.62" punti="1.5,1.85,G,baricentro" forze="1.5 1.85,0,-1,Mg" coppie="0 2.75,1,Ω;1.95 2.4,1,φ̇" etichette="0.42,2.05,ϑ" riferimento=0 titolo="Regular precession: the axis of figure $\zeta$ forms the constant angle $\vartheta$ with the axis of precession and rotates about it with angular velocity $\Omega$"}

:::dimostrazione
One writes the components of $\vec{\omega}$ in the body-fixed frame by means of the Euler angles, that is $p = \dot{\psi}\sin\vartheta\sin\varphi + \dot{\vartheta}\cos\varphi$, $q = \dot{\psi}\sin\vartheta\cos\varphi - \dot{\vartheta}\sin\varphi$ and $r = \dot{\varphi} + \dot{\psi}\cos\vartheta$. In the regular precession one has $\dot{\vartheta} = 0$, $\dot{\psi} = \Omega$ and $\dot{\varphi}$ constant, therefore
$$
p = \Omega\sin\vartheta\sin\varphi ,
\qquad
q = \Omega\sin\vartheta\cos\varphi ,
\qquad
\dot{p} = \dot{\varphi}\,q ,
\qquad
\dot{q} = -\dot{\varphi}\,p .
$$
The moment of the weight with respect to $O$ is $\vec{M}_O = d\,\hat{e}_\zeta \wedge (-M g\,\hat{k})$. Expressing $\hat{k} = \sin\vartheta\sin\varphi\,\hat{e}_\xi + \sin\vartheta\cos\varphi\,\hat{e}_\eta + \cos\vartheta\,\hat{e}_\zeta$ one obtains
$$
\vec{M}_O = M g d \sin\vartheta\cos\varphi\,\hat{e}_\xi - M g d \sin\vartheta\sin\varphi\,\hat{e}_\eta = \frac{M g d}{\Omega}\,\big( q\,\hat{e}_\xi - p\,\hat{e}_\eta \big) .
$$
One substitutes into the first Euler equation, with $B = A$:
$$
A\,\dot{\varphi}\,q + (C - A)\,q\,r = \frac{M g d}{\Omega}\,q .
$$
Since $\vartheta \in (0,\pi)$ and $\Omega \neq 0$, the components $p$ and $q$ are not both identically zero, hence one can divide by $q$ at the times when $q \neq 0$ and one obtains $A\,\dot{\varphi} + (C-A)\,r = \dfrac{M g d}{\Omega}$. Multiplying by $\Omega$ and substituting $\dot{\varphi} = r - \Omega\cos\vartheta$ one gets
$$
A\,\Omega\,r - A\,\Omega^2\cos\vartheta + C\,\Omega\,r - A\,\Omega\,r = M g d ,
$$
that is the relation of the statement. The second Euler equation gives the same relation, while the third reduces to $C\,\dot{r} = 0$, satisfied because $r$ is constant. Conversely, if the relation holds, the three Euler equations are satisfied by the functions written above, therefore the regular precession is a possible motion.
:::
::::

:::osservazione{#effetto-giroscopico titolo="Gyroscopic effect"}
A gyroscope that rotates fast about the axis of figure has $\vec{K}_O \simeq C\,r\,\hat{e}_\zeta$, that is angular momentum almost parallel to the axis. By the second cardinal equation, an external moment $\vec{M}_O$ perpendicular to the axis makes the axis rotate about the direction of $\hat{e}_\zeta \wedge \vec{M}_O$ with velocity $\Omega = \dfrac{|\vec{M}_O|}{C\,r}$, the smaller the faster the spin is. The direction in which the axis moves is that of the applied moment, as the relation $\dfrac{d\hat{e}_\zeta}{dt} = \dfrac{\vec{M}_O}{C\,r}$ shows. Symmetrically, if a constraint imposes the precession $\Omega$ on an axis of figure perpendicular to the axis of precession, the supports must exert a couple of moment
$$
|\vec{M}_O| = C\,r\,\Omega ,
$$
called the gyroscopic couple, directed perpendicularly to the two axes. A rotor of axial moment $C = 0.9\,\mathrm{kg\,m^2}$ that spins at $100\,\mathrm{rad/s}$, mounted on two bearings at distance $0.5\,\mathrm{m}$ and forced to precess at $2\,\mathrm{rad/s}$, loads the bearings with a couple of $180\,\mathrm{N\,m}$, that is two opposite forces of $360\,\mathrm{N}$.

::struttura{nodi="A,-1.9,0;B,1.9,0" aste="A-B" vincoli="A,cerniera;B,cerniera" cerchi="0,0,0.8" frecce="-2.9,0,3.1,0,ζ;0,-1.9,0,2.3,precession axis" reazioni="A,0,1.1,Φ_A;B,0,-1.1,Φ_B" coppie="2.45 0,1,r;0 1.85,1,Ω" quote="A,B,b,-1.6" riferimento=0 titolo="Gyroscopic couple on two bearings at distance $b$: the reactions equal $\dfrac{C\,r\,\Omega}{b}$ and are opposite"}

:::
