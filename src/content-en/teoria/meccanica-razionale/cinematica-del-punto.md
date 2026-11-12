---
titolo: Kinematics of a particle and relative motion
sommario: How the trajectory, the velocity and the acceleration of a particle are described, how the acceleration splits along the tangent and the normal to the trajectory, and how velocity and acceleration change when passing from a fixed frame to a frame in motion.
---

## Motion, trajectory and time law

:::definizione{#moto-di-un-punto titolo="Motion of a particle, trajectory and equations of motion"}
Fix the frame $(O; x, y, z)$, with the unit vectors $\hat{\imath}$, $\hat{\jmath}$, $\hat{k}$ constant in time. The **motion** of a particle $P$ over a time interval $I$ is the map that associates with every instant $t \in I$ the position of $P$, written as the difference between the point and the origin:
$$
P - O = x(t)\,\hat{\imath} + y(t)\,\hat{\jmath} + z(t)\,\hat{k} ,
$$
with $x$, $y$, $z$ twice differentiable in $I$. The three functions are the **equations of motion**, and the set of the positions occupied by $P$ is the **trajectory**.

The equations of motion contain two different pieces of information: the trajectory tells through which points of space $P$ passes, while the law by which the coordinates depend on time tells at which instant $P$ passes through each of them. A particle that describes a given circle at constant speed and a particle that describes it while slowing down have the same trajectory and two distinct motions.
:::

:::richiamo{titolo="Length of a regular curve"}
Let $\gamma : [a, b] \to \mathbb{R}^3$ be of class $C^1$ with $\gamma'(\tau) \neq \vec{0}$ for every $\tau \in [a, b]$. Then the length of $\gamma$ equals
$$
L = \int_a^b \big| \gamma'(\tau) \big|\,d\tau .
$$
See the topic on curves and line integrals in Analysis 2.
:::

:::definizione{#ascissa-curvilinea titolo="Arc length coordinate and time law"}
Suppose that the trajectory is a regular curve and choose on it a direction of travel and a point $P_0$ as the origin of the arcs. The **arc length coordinate** $s$ of a point of the trajectory is the length of the arc going from $P_0$ to that point, taken with the positive sign in the chosen direction and with the negative sign in the opposite one. During the motion the arc length coordinate becomes a function of time $s(t)$, called the **time law**, and the position is obtained by composing the curve with the time law.

The derivative $\dot{s}$ is the **scalar velocity** of the particle, and it is positive when $P$ advances in the chosen direction along the trajectory and negative when it goes back. For a particle traveling along a circle of radius $R$, with $\vartheta$ the central angle measured counterclockwise, the arc equals $s = R\,\vartheta$, hence $\dot{s} = R\,\dot{\vartheta}$.
:::

:::definizione{#velocita-e-accelerazione titolo="Velocity and acceleration"}
The **velocity** and the **acceleration** of $P$ in the frame $(O; x, y, z)$ are the first and second derivatives of the position vector:
$$
\vec{v}_P = \frac{d}{dt}(P - O) = \dot{x}\,\hat{\imath} + \dot{y}\,\hat{\jmath} + \dot{z}\,\hat{k} ,
\qquad
\vec{a}_P = \frac{d\vec{v}_P}{dt} = \ddot{x}\,\hat{\imath} + \ddot{y}\,\hat{\jmath} + \ddot{z}\,\hat{k} .
$$
The unit vectors of the frame are constant, therefore the derivative of the position vector is computed by differentiating the single components. The velocity is measured in $\mathrm{m/s}$ and the acceleration in $\mathrm{m/s^2}$.

The two quantities are used throughout the mechanics that follows: the momentum and the kinetic energy are written with $\vec{v}_P$, Newton's equations and the cardinal equations with $\vec{a}_P$. For the plane motion with $x = \ell\,\omega t$ and $y = \dfrac{1}{2}\,\ell\,\omega^2 t^2$ one obtains $\vec{v}_P = \ell\omega\,\hat{\imath} + \ell\omega^2 t\,\hat{\jmath}$ and $\vec{a}_P = \ell\omega^2\,\hat{\jmath}$, hence the acceleration is constant; eliminating time between the two equations, the trajectory turns out to be the parabola $y = \dfrac{x^2}{2\ell}$.

::grafico{curve="0.7*t,0.9+sin(0.9*t),0,4.5" vettori="0.7,1.68,1.56,2.37,vₚ;0,0,0.7,1.68,P − O" punti="0.7,1.68,pieno,P;2.24,1.16,pieno,Q" etichette="1.9,1.3,s" uguale=1 xmin=-0.4 xmax=3.6 ymin=-0.4 ymax=2.9 legenda=0 titolo="The vector $P - O$ gives the position, the velocity $\vec{v}_P$ is tangent to the trajectory and $s$ is the arc traveled from $P$ to $Q$"}
:::

## Intrinsic triad and components of the acceleration

The Cartesian components of the velocity and of the acceleration depend on the chosen frame. Along the trajectory there exists instead a triad of unit vectors that depends only on the curve, and with respect to it the acceleration splits into two terms with different meanings.

:::definizione{#terna-intrinseca titolo="Unit tangent, normal and binormal vectors"}
Let the trajectory be a regular curve parametrized by the arc length coordinate $s$. The **unit tangent vector** is
$$
\hat{t} = \frac{d}{ds}(P - O) ,
$$
and it has magnitude one, because the derivative with respect to the arc length coordinate of a curve parametrized by arc length is a unit vector. Since $\hat{t} \cdot \hat{t} = 1$, differentiating with respect to $s$ one obtains $\hat{t} \cdot \dfrac{d\hat{t}}{ds} = 0$, hence $\dfrac{d\hat{t}}{ds}$ is orthogonal to $\hat{t}$. At the points where this vector is not zero one sets
$$
\frac{d\hat{t}}{ds} = \frac{1}{\rho}\,\hat{n} ,
$$
where $\hat{n}$ is the **unit normal vector**, of magnitude one, and $\rho > 0$ is the **radius of curvature** of the trajectory at the point considered; its reciprocal $\dfrac{1}{\rho}$ is the **curvature**. The **unit binormal vector** is $\hat{b} = \hat{t} \wedge \hat{n}$, and the triad $(\hat{t}, \hat{n}, \hat{b})$ is the **intrinsic triad**.

The radius of curvature measures how much the trajectory departs from a straight line. The unit normal vector points toward the concave side of the curve, and the circle with center $C = P + \rho\,\hat{n}$ and radius $\rho$, called the osculating circle, is the circle that best approximates the trajectory near $P$. For a straight line $\hat{t}$ is constant, therefore $\dfrac{d\hat{t}}{ds} = \vec{0}$ and the curvature is zero; for a circle of radius $R$ the radius of curvature equals $R$ at every point.

::grafico{curve="t,0.8*t*t,-1.5,1.5;-0.32+1.31*cos(t),1.23+1.31*sin(t),0,6.29" vettori="0.5,0.2,1.2,0.76;0.5,0.2,0.16,0.63" segmenti="0.5,0.2,-0.32,1.23" punti="0.5,0.2,pieno,P;-0.32,1.23,pieno,C" etichette="1.16,0.5,t;0.05,0.52,n;-0.62,0.92,ρ" uguale=1 xmin=-1.9 xmax=1.9 ymin=-0.35 ymax=2.75 legenda=0 titolo="Unit tangent vector $\hat{t}$, unit normal vector $\hat{n}$ and osculating circle with center $C$ and radius $\rho$"}
:::

::::teorema{#componenti-intrinseche titolo="Tangential and normal components of the acceleration"}
Let the motion of $P$ be of class $C^2$, with $\vec{v}_P \neq \vec{0}$ and with radius of curvature $\rho$ at the point occupied at the instant considered. Then
$$
\vec{v}_P = \dot{s}\,\hat{t} ,
\qquad
\vec{a}_P = \ddot{s}\,\hat{t} + \frac{\dot{s}^2}{\rho}\,\hat{n} .
$$
The two components are called the **tangential acceleration** $a_t = \ddot{s}$ and the **normal acceleration**, or centripetal acceleration, $a_n = \dfrac{\dot{s}^2}{\rho}$; the component along $\hat{b}$ is zero, hence the acceleration always belongs to the plane of $\hat{t}$ and $\hat{n}$.

The decomposition separates two effects: $a_t$ measures the change of the magnitude of the velocity, $a_n$ measures the change of its direction. Since $a_n \ge 0$, the acceleration always points toward the concave side of the trajectory. In a rectilinear motion one has $\dfrac{1}{\rho} = 0$, therefore $\vec{a}_P = \ddot{s}\,\hat{t}$ and it is parallel to the velocity; in a motion with $|\vec{v}_P|$ constant one has $\ddot{s} = 0$, therefore $\vec{a}_P = \dfrac{\dot{s}^2}{\rho}\,\hat{n}$ and it is orthogonal to the velocity.

::grafico{curve="t,0.35*t*t,-1,2.4" vettori="1,0.35,1.07,2.35;1,0.35,1.98,1.04;1,0.35,0.08,1.66" segmenti="1.98,1.04,1.07,2.35;0.08,1.66,1.07,2.35" punti="1,0.35,pieno,P" etichette="1.18,1.85,a;1.62,0.55,aₜ;0.08,1.28,aₙ" uguale=1 xmin=-1.3 xmax=2.7 ymin=-0.4 ymax=2.8 legenda=0 titolo="The acceleration splits into $a_t\,\hat{t}$, which changes the magnitude of the velocity, and $a_n\,\hat{n}$, which changes its direction"}

:::dimostrazione
Write the position as a function of the arc length coordinate and the arc length coordinate as a function of time. By the chain rule
$$
\vec{v}_P = \frac{d}{dt}(P - O) = \frac{d}{ds}(P - O)\,\dot{s} = \dot{s}\,\hat{t} ,
$$
and this is the first equality. Differentiating once more with respect to time one obtains
$$
\vec{a}_P = \frac{d}{dt}\big( \dot{s}\,\hat{t} \big) = \ddot{s}\,\hat{t} + \dot{s}\,\frac{d\hat{t}}{dt} .
$$
The unit tangent vector depends on time through $s$, hence $\dfrac{d\hat{t}}{dt} = \dfrac{d\hat{t}}{ds}\,\dot{s}$, and by the definition of unit normal vector $\dfrac{d\hat{t}}{ds} = \dfrac{1}{\rho}\,\hat{n}$. Substituting one has
$$
\vec{a}_P = \ddot{s}\,\hat{t} + \frac{\dot{s}^2}{\rho}\,\hat{n} ,
$$
which is the second equality.
:::
::::

::::teorema{#formula-raggio-curvatura titolo="Radius of curvature from the velocity and the acceleration"}
Let the motion of $P$ be such that $\vec{v}_P \wedge \vec{a}_P \neq \vec{0}$ at the instant considered. Then
$$
a_t = \frac{\vec{v}_P \cdot \vec{a}_P}{|\vec{v}_P|} ,
\qquad
a_n = \frac{|\vec{v}_P \wedge \vec{a}_P|}{|\vec{v}_P|} ,
\qquad
\rho = \frac{|\vec{v}_P|^3}{|\vec{v}_P \wedge \vec{a}_P|} .
$$
The three formulas allow the intrinsic components and the radius of curvature to be computed starting from the Cartesian components of the motion alone, without determining the arc length coordinate first. For the plane motion with $x = v_0 t$ and $y = -\dfrac{1}{2}\,g t^2$ one has $\vec{v}_P \wedge \vec{a}_P = -v_0 g\,\hat{k}$ and $|\vec{v}_P| = \sqrt{v_0^2 + g^2t^2}$, hence
$$
\rho = \frac{\big( v_0^2 + g^2t^2 \big)^{\frac{3}{2}}}{v_0\,g} ,
$$
which at the instant $t = 0$ equals $\dfrac{v_0^2}{g}$.

:::dimostrazione
By the theorem on the intrinsic components of the acceleration one has $\vec{v}_P = \dot{s}\,\hat{t}$, hence $|\vec{v}_P| = |\dot{s}|$. The dot product of velocity and acceleration equals
$$
\vec{v}_P \cdot \vec{a}_P = \dot{s}\,\hat{t} \cdot \left( \ddot{s}\,\hat{t} + \frac{\dot{s}^2}{\rho}\,\hat{n} \right) = \dot{s}\,\ddot{s} ,
$$
since $\hat{t} \cdot \hat{t} = 1$ and $\hat{t} \cdot \hat{n} = 0$; dividing by $|\vec{v}_P| = |\dot{s}|$ one obtains $\ddot{s}$ up to the sign of $\dot{s}$, and with the direction of travel chosen so that $\dot{s} > 0$ one has the first formula. The cross product equals
$$
\vec{v}_P \wedge \vec{a}_P = \dot{s}\,\hat{t} \wedge \left( \ddot{s}\,\hat{t} + \frac{\dot{s}^2}{\rho}\,\hat{n} \right) = \frac{\dot{s}^3}{\rho}\,\hat{b} ,
$$
because $\hat{t} \wedge \hat{t} = \vec{0}$ and $\hat{t} \wedge \hat{n} = \hat{b}$. Taking the magnitudes one obtains $|\vec{v}_P \wedge \vec{a}_P| = \dfrac{|\dot{s}|^3}{\rho}$, from which there follow the third formula, dividing by $|\vec{v}_P|^3 = |\dot{s}|^3$, and the second one, dividing by $|\vec{v}_P| = |\dot{s}|$.
:::
::::

:::attenzione
A motion with constant magnitude of the velocity has zero acceleration only if the trajectory is a straight line. In the uniform circular motion of radius $R$ and angular velocity $\omega$ one has $|\vec{v}_P| = R\,\omega$ constant, hence $a_t = 0$; the radius of curvature equals $R$, therefore
$$
|\vec{a}_P| = a_n = \frac{(R\omega)^2}{R} = R\,\omega^2 \neq 0 .
$$
The acceleration is directed toward the center and changes the direction of the velocity without changing its magnitude.
:::

## Plane motions in polar coordinates

When the trajectory is plane and the problem has a symmetry with respect to a point, as in central motions or for particles constrained to a rotating guide, it is convenient to resolve velocity and acceleration along the direction of the radius and along the orthogonal direction.

:::definizione{#coordinate-polari titolo="Polar coordinates, radial unit vector and transverse unit vector"}
Let the motion be contained in the plane $Oxy$ and let $P \neq O$. Set $r = |P - O| > 0$ and let $\vartheta$ be the angle that $P - O$ forms with the $x$ axis, measured counterclockwise, so that $P - O = r\,\hat{u}_r$ with
$$
\hat{u}_r = \cos\vartheta\,\hat{\imath} + \sin\vartheta\,\hat{\jmath} ,
\qquad
\hat{u}_\vartheta = -\sin\vartheta\,\hat{\imath} + \cos\vartheta\,\hat{\jmath} .
$$
The **radial unit vector** $\hat{u}_r$ has the direction and the orientation of $P - O$; the **transverse unit vector** $\hat{u}_\vartheta$ is obtained by rotating $\hat{u}_r$ by $\dfrac{\pi}{2}$ counterclockwise, hence the pair $(\hat{u}_r, \hat{u}_\vartheta)$ is orthonormal. Along the motion the angle depends on time, therefore the two unit vectors change direction and their derivatives equal
$$
\dot{\hat{u}}_r = \dot{\vartheta}\,\hat{u}_\vartheta ,
\qquad
\dot{\hat{u}}_\vartheta = -\,\dot{\vartheta}\,\hat{u}_r ,
$$
as one checks by differentiating with respect to time the two expressions written above. These derivatives are the reason why the formulas for velocity and acceleration in polar coordinates contain terms that do not appear in Cartesian coordinates.

::struttura{nodi="O,0,0;P,2.01,1.41" punti="0,0;2.01,1.41" linee="0,0 2.01,1.41;0.7,0.0 0.7,0.05 0.69,0.11 0.68,0.16 0.67,0.21 0.65,0.26 0.63,0.31 0.6,0.36 0.57,0.4" frecce="0,0,3.2,0,x;0,0,0,2.6,y;2.01,1.41,2.83,1.98,u_r;2.01,1.41,1.44,2.23,u_ϑ" etichette="1.0,0.85,r;0.82,0.14,ϑ" riferimento=0 titolo="Polar coordinates in the plane: the radial unit vector $\hat{u}_r$ has the direction of $P - O$, the transverse unit vector $\hat{u}_\vartheta$ is rotated by $\dfrac{\pi}{2}$ counterclockwise"}
:::

::::teorema{#velocita-accelerazione-polari titolo="Velocity and acceleration in polar coordinates"}
Let the motion of $P$ be plane, of class $C^2$, with $r(t) > 0$. Then
$$
\vec{v}_P = \dot{r}\,\hat{u}_r + r\,\dot{\vartheta}\,\hat{u}_\vartheta ,
\qquad
\vec{a}_P = \big( \ddot{r} - r\,\dot{\vartheta}^2 \big)\,\hat{u}_r + \big( r\,\ddot{\vartheta} + 2\,\dot{r}\,\dot{\vartheta} \big)\,\hat{u}_\vartheta .
$$
The components are called the radial velocity $\dot{r}$ and the transverse velocity $r\dot{\vartheta}$, the radial acceleration $\ddot{r} - r\dot{\vartheta}^2$ and the transverse acceleration $r\ddot{\vartheta} + 2\dot{r}\dot{\vartheta}$. The term $-r\dot{\vartheta}^2$ is the centripetal acceleration of circular motion and the term $2\dot{r}\dot{\vartheta}$ is the Coriolis term, which appears every time the particle moves away from the center while the radius rotates.

For a particle that moves on a rotating straight guide, with $r = u t$ and $\vartheta = \omega t$, one obtains $\vec{v}_P = u\,\hat{u}_r + u\omega t\,\hat{u}_\vartheta$ and $\vec{a}_P = -u\omega^2 t\,\hat{u}_r + 2u\omega\,\hat{u}_\vartheta$, hence the acceleration has a constant transverse component even though the particle moves with uniform motion along the guide.

:::dimostrazione
Start from $P - O = r\,\hat{u}_r$ and differentiate with respect to time the product of the function $r$ and the unit vector $\hat{u}_r$:
$$
\vec{v}_P = \dot{r}\,\hat{u}_r + r\,\dot{\hat{u}}_r = \dot{r}\,\hat{u}_r + r\,\dot{\vartheta}\,\hat{u}_\vartheta ,
$$
where the derivative $\dot{\hat{u}}_r = \dot{\vartheta}\,\hat{u}_\vartheta$ has been used. Differentiating a second time one obtains
$$
\begin{aligned}
\vec{a}_P &= \ddot{r}\,\hat{u}_r + \dot{r}\,\dot{\hat{u}}_r + \dot{r}\,\dot{\vartheta}\,\hat{u}_\vartheta + r\,\ddot{\vartheta}\,\hat{u}_\vartheta + r\,\dot{\vartheta}\,\dot{\hat{u}}_\vartheta \\[6pt]
&= \ddot{r}\,\hat{u}_r + \dot{r}\,\dot{\vartheta}\,\hat{u}_\vartheta + \dot{r}\,\dot{\vartheta}\,\hat{u}_\vartheta + r\,\ddot{\vartheta}\,\hat{u}_\vartheta - r\,\dot{\vartheta}^2\,\hat{u}_r \\[6pt]
&= \big( \ddot{r} - r\,\dot{\vartheta}^2 \big)\,\hat{u}_r + \big( r\,\ddot{\vartheta} + 2\,\dot{r}\,\dot{\vartheta} \big)\,\hat{u}_\vartheta ,
\end{aligned}
$$
where in the second line the derivatives of the two unit vectors have been substituted and in the third one the terms along $\hat{u}_r$ and along $\hat{u}_\vartheta$ have been collected.
:::
::::

:::definizione{#velocita-areolare titolo="Areal velocity"}
Let the motion of $P$ be plane and let $A(t)$ be the area swept by the segment $OP$ between the initial instant and the instant $t$. The **areal velocity** with respect to the pole $O$ is
$$
\frac{dA}{dt} = \frac{1}{2}\,\big| (P - O) \wedge \vec{v}_P \big| = \frac{1}{2}\,r^2\,\big| \dot{\vartheta} \big| ,
$$
where the second equality follows by substituting $P - O = r\,\hat{u}_r$ and the polar expression of the velocity, since $\hat{u}_r \wedge \hat{u}_r = \vec{0}$ and $\hat{u}_r \wedge \hat{u}_\vartheta = \hat{k}$. The area swept in a short interval is that of the triangle with vertices $O$, $P(t)$ and $P(t + \Delta t)$, which equals $\dfrac{1}{2}\,|(P - O) \wedge \Delta P|$ up to infinitesimals of higher order.

The areal velocity measures how fast the position vector sweeps area, therefore it is large where the particle is far from the pole and rotates quickly. For the uniform circular motion of radius $R$ and angular velocity $\omega$ it equals $\dfrac{1}{2}\,R^2\omega$, constant.

::struttura{nodi="O,0,0;P,2.27,0.92;Q,2.01,1.41" punti="0,0;2.27,0.92;2.01,1.41" poligoni="0,0 2.27,0.92 2.01,1.41" linee="1.73,1.73 1.83,1.63 1.93,1.51 2.02,1.39 2.11,1.25 2.18,1.11 2.25,0.96 2.3,0.81 2.35,0.65 2.39,0.49 2.42,0.33" frecce="0,0,3.2,0,x;0,0,0,2.6,y" etichette="1.3,0.72,ΔA" riferimento=0 titolo="Area swept by the segment $OP$ between two nearby instants: the areal velocity equals $\dfrac{1}{2}\,r^2\,\dot{\vartheta}$"}
:::

:::osservazione{#accelerazione-trasversa titolo="Transverse acceleration and areal velocity"}
From the polar expression of the acceleration there follows the identity
$$
r\,\ddot{\vartheta} + 2\,\dot{r}\,\dot{\vartheta} = \frac{1}{r}\,\frac{d}{dt}\big( r^2\,\dot{\vartheta} \big) ,
$$
which is checked by differentiating the product on the right. Since $r > 0$, the transverse acceleration is zero at every instant if and only if $r^2\dot{\vartheta}$ is constant, that is if and only if the areal velocity is constant. This equivalence is the kinematic content of Kepler's second law and it will be used in the study of central motions, in the topic on the dynamics of a particle.
:::

## Notable motions

:::esempio{#moto-rettilineo-uniformemente-accelerato titolo="Uniformly accelerated rectilinear motion"}
The trajectory is a straight line, which is taken as the $x$ axis, and the acceleration is constant, $\ddot{x} = a_0$. Integrating twice with the initial data $x(0) = x_0$ and $\dot{x}(0) = v_0$ one obtains
$$
\dot{x}(t) = v_0 + a_0 t ,
\qquad
x(t) = x_0 + v_0 t + \frac{1}{2}\,a_0 t^2 ,
$$
and, eliminating time between the two, the relation $\dot{x}^2 = v_0^2 + 2\,a_0\,(x - x_0)$. The radius of curvature is infinite, therefore $a_n = 0$ and the acceleration is entirely tangential.
:::

:::definizione{#moto-armonico titolo="Simple harmonic motion"}
A particle moves with **simple harmonic motion** of angular frequency $\omega > 0$ along the $x$ axis when
$$
\ddot{x} = -\,\omega^2 x .
$$
The general solution of this linear second order differential equation is $x(t) = A\cos(\omega t + \varphi)$, with $A \ge 0$ the **amplitude** and $\varphi$ the **initial phase**; the motion is periodic with **period** $T = \dfrac{2\pi}{\omega}$ and frequency $\nu = \dfrac{1}{T}$. From the initial data $x(0) = x_0$ and $\dot{x}(0) = v_0$ one gets
$$
A = \sqrt{x_0^2 + \frac{v_0^2}{\omega^2}} ,
$$
and the maximum values of the magnitude of the velocity and of the acceleration are $A\omega$ and $A\omega^2$.

Simple harmonic motion describes the oscillations of a particle attached to a spring and, more generally, the small oscillations of a system about a stable equilibrium configuration, as is seen in the topic on equilibrium, stability and small oscillations.

::grafico{f="2*cos(1.5*x-0.6)" segmenti="0,2,9,2;0,-2,9,-2;0.4,0,0.4,2;4.59,0,4.59,2" etichette="2.2,0.3,T;8.2,2.25,A;7.9,-2.5,−A" xmin=0 xmax=9 ymin=-2.7 ymax=2.7 nomi="t,x" legenda=0 titolo="Simple harmonic motion with amplitude $A$ and period $T = \dfrac{2\pi}{\omega}$"}
:::

:::esempio{#moto-circolare titolo="Circular motion"}
The particle travels along the circle with center $O$ and radius $R$ in the plane $Oxy$, hence in polar coordinates $r = R$ is constant and the only coordinate that varies is $\vartheta(t)$. From the formulas in polar coordinates, with $\dot{r} = \ddot{r} = 0$,
$$
\vec{v}_P = R\,\dot{\vartheta}\,\hat{u}_\vartheta ,
\qquad
\vec{a}_P = -R\,\dot{\vartheta}^2\,\hat{u}_r + R\,\ddot{\vartheta}\,\hat{u}_\vartheta .
$$
The velocity is tangent to the circle, therefore $\hat{u}_\vartheta = \hat{t}$ if $\dot{\vartheta} > 0$, and $-\hat{u}_r = \hat{n}$; the comparison with the intrinsic components gives $a_t = R\ddot{\vartheta}$ and $a_n = R\dot{\vartheta}^2$, in agreement with $\rho = R$ and $\dot{s} = R\dot{\vartheta}$. The motion is uniform when $\dot{\vartheta} = \omega$ is constant, and in that case the acceleration equals $-R\omega^2\,\hat{u}_r$.
:::

:::esempio{#moto-elicoidale titolo="Helical motion"}
The particle travels along the circular helix of radius $R$ and pitch $2\pi h$:
$$
P - O = R\cos(\omega t)\,\hat{\imath} + R\sin(\omega t)\,\hat{\jmath} + h\,\omega t\,\hat{k} .
$$
Differentiating one obtains $\vec{v}_P = \omega\big( -R\sin(\omega t)\,\hat{\imath} + R\cos(\omega t)\,\hat{\jmath} + h\,\hat{k} \big)$ and $\vec{a}_P = -R\omega^2 \big( \cos(\omega t)\,\hat{\imath} + \sin(\omega t)\,\hat{\jmath} \big)$, hence
$$
|\vec{v}_P| = \omega\sqrt{R^2 + h^2} ,
\qquad
s(t) = \omega t \sqrt{R^2 + h^2} ,
\qquad
\rho = \frac{R^2 + h^2}{R} .
$$
The magnitude of the velocity is constant, therefore $a_t = 0$ and the acceleration is entirely normal, directed toward the axis of the helix and of magnitude $R\omega^2$. The radius of curvature is greater than $R$ and depends only on the geometry of the helix, not on the time law with which it is traveled.
:::

## Moving frame and derivative of a vector

A particle constrained to a guide that rotates, or observed from a platform in motion, is described more easily in the frame that moves with the constraint. In order to compare the two descriptions one needs to know how the derivative of a vector changes when the frame is changed.

:::definizione{#riferimento-mobile titolo="Fixed frame and moving frame"}
The triad $(O; x, y, z)$ with constant unit vectors $\hat{\imath}$, $\hat{\jmath}$, $\hat{k}$ is called the **fixed frame**, and a triad $(\Omega; \xi, \eta, \zeta)$ whose origin $\Omega$ and whose unit vectors $\hat{e}_1(t)$, $\hat{e}_2(t)$, $\hat{e}_3(t)$ depend on time, remaining orthonormal at every instant, is called a **moving frame**. The position of a point $P$ splits as
$$
P - O = (\Omega - O) + (P - \Omega) ,
$$
where $\Omega - O$ describes the motion of the moving origin and $P - \Omega = \xi\,\hat{e}_1 + \eta\,\hat{e}_2 + \zeta\,\hat{e}_3$ the position of $P$ as seen from the moving frame.

The coordinates $\xi$, $\eta$, $\zeta$ are the ones measured by an observer attached to the moving frame. The derivatives of $\xi$, $\eta$, $\zeta$ therefore give the motion of $P$ for that observer, while the derivatives of $x$, $y$, $z$ give the motion for the fixed observer; the two motions are different and the link between them is the object of the theorems that follow.

::struttura{nodi="O,0,0;Ω,2.6,1.1;P,4.3,2.5" punti="0,0;2.6,1.1;4.3,2.5" frecce="0,0,1.5,0,x;0,0,0,1.5,y;2.6,1.1,3.8,1.5,ξ;2.6,1.1,2.2,2.3,η;0,0,2.6,1.1;2.6,1.1,4.3,2.5;0,0,4.3,2.5" etichette="1.25,0.28,Ω − O;3.05,2.05,P − Ω;1.75,1.2,P − O" riferimento=0 titolo="Fixed frame with origin $O$ and moving frame with origin $\Omega$: the position of $P$ splits into $(\Omega - O) + (P - \Omega)$"}
:::

::::teorema{#formule-di-poisson titolo="Angular velocity of a moving frame"}
Let $\hat{e}_1(t)$, $\hat{e}_2(t)$, $\hat{e}_3(t)$ be the unit vectors of a moving frame, differentiable and orthonormal at every instant. Then there exists one and only one vector $\vec{\omega}(t)$, called the **angular velocity** of the moving frame, such that
$$
\dot{\hat{e}}_h = \vec{\omega} \wedge \hat{e}_h ,
\qquad h = 1, 2, 3 ,
$$
equalities known as **Poisson's formulas**.

The theorem reduces the nine derivatives of the moving unit vectors to three numbers, the components of $\vec{\omega}$. In plane problems the moving frame rotates about the $z$ axis by an angle $\vartheta(t)$, and then $\vec{\omega} = \dot{\vartheta}\,\hat{k}$. The same vector $\vec{\omega}$ is the angular velocity of the rigid body attached to the moving triad, as is seen in the topic on the kinematics of a rigid body.

:::dimostrazione
Write each derivative in the moving basis, $\dot{\hat{e}}_h = \displaystyle\sum_{k=1}^{3} a_{kh}\,\hat{e}_k$ with $a_{kh} = \dot{\hat{e}}_h \cdot \hat{e}_k$. From the orthonormality conditions $\hat{e}_h \cdot \hat{e}_k = \delta_{hk}$, differentiating with respect to time, one obtains
$$
\dot{\hat{e}}_h \cdot \hat{e}_k + \hat{e}_h \cdot \dot{\hat{e}}_k = 0 ,
\qquad \text{that is} \qquad
a_{kh} + a_{hk} = 0 ,
$$
therefore the matrix of the coefficients is skew-symmetric and its diagonal entries are zero. Three independent coefficients remain, which are called
$$
\omega_1 = a_{32} , \qquad \omega_2 = a_{13} , \qquad \omega_3 = a_{21} ,
$$
and one sets $\vec{\omega} = \omega_1\,\hat{e}_1 + \omega_2\,\hat{e}_2 + \omega_3\,\hat{e}_3$. With this choice one computes
$$
\vec{\omega} \wedge \hat{e}_1 = \omega_2\,(\hat{e}_2 \wedge \hat{e}_1) + \omega_3\,(\hat{e}_3 \wedge \hat{e}_1) = \omega_3\,\hat{e}_2 - \omega_2\,\hat{e}_3 ,
$$
while from the skew-symmetry $\dot{\hat{e}}_1 = a_{21}\,\hat{e}_2 + a_{31}\,\hat{e}_3 = \omega_3\,\hat{e}_2 - \omega_2\,\hat{e}_3$; the two vectors coincide. In the same way the equalities for $\hat{e}_2$ and for $\hat{e}_3$ are checked. Finally, if $\vec{\omega}\,'$ also satisfies the three equalities, then $(\vec{\omega} - \vec{\omega}\,') \wedge \hat{e}_h = \vec{0}$ for $h = 1, 2, 3$, hence the vector $\vec{\omega} - \vec{\omega}\,'$ is parallel to three linearly independent directions; therefore it is zero and the angular velocity is unique.
:::
::::

::::teorema{#derivata-relativa titolo="Derivative of a vector in the two frames"}
Let $\vec{u}(t)$ be a vector and let $u_1$, $u_2$, $u_3$ be its components in the moving basis, so that $\vec{u} = u_1\hat{e}_1 + u_2\hat{e}_2 + u_3\hat{e}_3$. The **relative derivative** of $\vec{u}$ is the vector
$$
\frac{d^{*}\vec{u}}{dt} = \dot{u}_1\,\hat{e}_1 + \dot{u}_2\,\hat{e}_2 + \dot{u}_3\,\hat{e}_3 ,
$$
that is the derivative computed by the moving observer, for whom the unit vectors $\hat{e}_h$ are constant. Then
$$
\frac{d\vec{u}}{dt} = \frac{d^{*}\vec{u}}{dt} + \vec{\omega} \wedge \vec{u} .
$$
The formula is the tool with which one passes from one frame to the other: the absolute derivative differs from the relative one by the term $\vec{\omega} \wedge \vec{u}$, due to the rotation of the moving basis. Applied to $\vec{u} = \vec{\omega}$ it gives $\dot{\vec{\omega}} = \dfrac{d^{*}\vec{\omega}}{dt}$, since $\vec{\omega} \wedge \vec{\omega} = \vec{0}$, that is the derivative of the angular velocity is the same in the two frames.

:::dimostrazione
Differentiate with respect to time the expression of $\vec{u}$ in the moving basis, recalling that the unit vectors depend on time:
$$
\frac{d\vec{u}}{dt} = \sum_{h=1}^{3} \dot{u}_h\,\hat{e}_h + \sum_{h=1}^{3} u_h\,\dot{\hat{e}}_h .
$$
The first sum is the relative derivative. In the second one substitute Poisson's formulas $\dot{\hat{e}}_h = \vec{\omega} \wedge \hat{e}_h$ and take $\vec{\omega}$ out of the sum, which is legitimate because the cross product is linear in the second factor:
$$
\sum_{h=1}^{3} u_h\,\big( \vec{\omega} \wedge \hat{e}_h \big) = \vec{\omega} \wedge \sum_{h=1}^{3} u_h\,\hat{e}_h = \vec{\omega} \wedge \vec{u} .
$$
Adding the two contributions one obtains the formula.
:::
::::

## Composition of velocities

:::definizione{#moti-assoluto-relativo-trascinamento titolo="Absolute motion, relative motion and transport motion"}
Let $P$ be a particle in motion and let $(\Omega; \xi, \eta, \zeta)$ be a moving frame of angular velocity $\vec{\omega}$. The vectors
$$
\vec{v}_a = \frac{d}{dt}(P - O) ,
\qquad
\vec{v}_r = \frac{d^{*}}{dt}(P - \Omega) ,
\qquad
\vec{v}_\tau = \vec{v}_\Omega + \vec{\omega} \wedge (P - \Omega)
$$
are called respectively the **absolute velocity**, the **relative velocity** and the **transport velocity** of $P$. The relative velocity is the one measured by the moving observer and it is computed by differentiating the coordinates $\xi$, $\eta$, $\zeta$. The transport velocity is the velocity that $P$ would have if it were rigidly attached to the moving frame at the position occupied at the instant considered.

The point that at the instant $t$ occupies the position of $P$ and is attached to the moving triad is called the transport point, and its velocity is obtained from the fundamental formula of rigid kinematics applied to the moving triad, treated in the topic on the kinematics of a rigid body.
:::

::::teorema{#composizione-velocita titolo="Theorem on the composition of velocities"}
For every particle $P$ in motion and for every moving frame
$$
\vec{v}_a = \vec{v}_\tau + \vec{v}_r = \vec{v}_\Omega + \vec{\omega} \wedge (P - \Omega) + \vec{v}_r .
$$
The theorem is used in both directions: to obtain the absolute velocity of a particle whose relative motion is simple, such as a slider running along a rotating guide, and to obtain the relative velocity when the absolute motion is known. If the moving frame moves with translational motion then $\vec{\omega} = \vec{0}$, hence $\vec{v}_a = \vec{v}_\Omega + \vec{v}_r$ and the velocities add as in the Galilean composition.

:::dimostrazione
Differentiate with respect to time, in the fixed frame, the decomposition $P - O = (\Omega - O) + (P - \Omega)$:
$$
\vec{v}_a = \frac{d}{dt}(\Omega - O) + \frac{d}{dt}(P - \Omega) = \vec{v}_\Omega + \frac{d}{dt}(P - \Omega) .
$$
To the vector $P - \Omega$ apply the theorem on the derivative of a vector in the two frames, which gives
$$
\frac{d}{dt}(P - \Omega) = \frac{d^{*}}{dt}(P - \Omega) + \vec{\omega} \wedge (P - \Omega) = \vec{v}_r + \vec{\omega} \wedge (P - \Omega) .
$$
Substituting in the previous equality and collecting the terms that form $\vec{v}_\tau$ one obtains the thesis.
:::
::::

:::esempio{titolo="Slider on a rotating guide"}
A straight guide rotates in the plane $Oxy$ about $O$ with the angle $\vartheta = \omega t$, and a slider $P$ runs along it with $|P - O| = s_0 + u t$. Take the moving frame with origin at $O$ and first unit vector $\hat{e}_1$ along the guide, so that $\vec{\omega} = \omega\,\hat{k}$ and $P - O = (s_0 + ut)\,\hat{e}_1$. Since $\vec{v}_\Omega = \vec{0}$ and $\hat{k} \wedge \hat{e}_1 = \hat{e}_2$,
$$
\vec{v}_r = u\,\hat{e}_1 ,
\qquad
\vec{v}_\tau = \omega\,(s_0 + ut)\,\hat{e}_2 ,
\qquad
\vec{v}_a = u\,\hat{e}_1 + \omega\,(s_0 + ut)\,\hat{e}_2 .
$$
The two components coincide with the radial velocity and the transverse velocity of the theorem in polar coordinates, with $r = s_0 + ut$ and $\dot{\vartheta} = \omega$, because $\hat{e}_1 = \hat{u}_r$ and $\hat{e}_2 = \hat{u}_\vartheta$.
:::

## Composition of accelerations and Coriolis acceleration

::::teorema{#composizione-accelerazioni titolo="Theorem on the composition of accelerations"}
For every particle $P$ in motion and for every moving frame
$$
\vec{a}_a = \vec{a}_\tau + \vec{a}_r + \vec{a}_c ,
$$
where
$$
\vec{a}_\tau = \vec{a}_\Omega + \dot{\vec{\omega}} \wedge (P - \Omega) + \vec{\omega} \wedge \big( \vec{\omega} \wedge (P - \Omega) \big) ,
\qquad
\vec{a}_r = \frac{d^{*2}}{dt^2}(P - \Omega) ,
\qquad
\vec{a}_c = 2\,\vec{\omega} \wedge \vec{v}_r
$$
are the **transport acceleration**, the **relative acceleration** and the **Coriolis acceleration**, also called the complementary acceleration.

With respect to the composition of velocities one more term appears, $\vec{a}_c$, which depends jointly on the rotation of the frame and on the relative velocity of the particle. In plane problems with $\vec{\omega} = \omega\,\hat{k}$ constant the transport acceleration reduces to $-\omega^2\,(P - \Omega)$ if $\Omega$ is at rest, that is to the centripetal acceleration alone.

:::dimostrazione
Differentiate with respect to time, in the fixed frame, the equality $\vec{v}_a = \vec{v}_\Omega + \vec{\omega} \wedge (P - \Omega) + \vec{v}_r$, treating the three summands separately. The first one gives $\vec{a}_\Omega$. The second one, by the rule for differentiating a cross product and by the theorem on the derivative of a vector in the two frames, gives
$$
\frac{d}{dt}\Big[ \vec{\omega} \wedge (P - \Omega) \Big] = \dot{\vec{\omega}} \wedge (P - \Omega) + \vec{\omega} \wedge \Big[ \vec{v}_r + \vec{\omega} \wedge (P - \Omega) \Big] .
$$
The third one, applying the same theorem to the vector $\vec{v}_r$, gives
$$
\frac{d\vec{v}_r}{dt} = \frac{d^{*}\vec{v}_r}{dt} + \vec{\omega} \wedge \vec{v}_r = \vec{a}_r + \vec{\omega} \wedge \vec{v}_r .
$$
Adding the three contributions, the two terms $\vec{\omega} \wedge \vec{v}_r$ add up to each other and give $2\,\vec{\omega} \wedge \vec{v}_r$; the others are grouped into $\vec{a}_\tau$ and into $\vec{a}_r$, therefore
$$
\vec{a}_a = \underbrace{\vec{a}_\Omega + \dot{\vec{\omega}} \wedge (P - \Omega) + \vec{\omega} \wedge \big( \vec{\omega} \wedge (P - \Omega) \big)}_{\vec{a}_\tau} + \vec{a}_r + \underbrace{2\,\vec{\omega} \wedge \vec{v}_r}_{\vec{a}_c} .
$$
:::
::::

:::osservazione{#annullamento-coriolis titolo="When the Coriolis acceleration is zero"}
The cross product $2\,\vec{\omega} \wedge \vec{v}_r$ is zero in three cases:
- the moving frame moves with translational motion, hence $\vec{\omega} = \vec{0}$;
- the particle is at relative rest, hence $\vec{v}_r = \vec{0}$, and then $\vec{a}_a = \vec{a}_\tau$;
- the relative velocity is parallel to the angular velocity, as for a particle that moves along the axis of rotation of the moving frame.

Outside these cases the Coriolis acceleration is different from zero, and it is orthogonal both to $\vec{\omega}$ and to $\vec{v}_r$. For a particle that moves on a radial guide of a rotating platform in a plane orthogonal to $\vec{\omega}$ its magnitude equals $2\,\omega\,|\vec{v}_r|$ and its orientation is that of $\hat{u}_\vartheta$ if the particle moves away from the center.
:::

:::esempio{titolo="Particle on a radial guide of a rotating platform"}
A platform rotates about the $z$ axis with constant angular velocity $\vec{\omega} = \omega\,\hat{k}$ and a particle $P$ moves on a radial guide with $|P - O| = u t$, where $u$ is constant. In the frame attached to the platform the motion is uniform rectilinear, hence $\vec{v}_r = u\,\hat{e}_1$ and $\vec{a}_r = \vec{0}$. It follows that
$$
\vec{a}_\tau = -\,\omega^2\,u t\,\hat{e}_1 ,
\qquad
\vec{a}_c = 2\,\omega u\,\hat{e}_2 ,
\qquad
\vec{a}_a = -\,\omega^2 u t\,\hat{e}_1 + 2\,\omega u\,\hat{e}_2 .
$$
The same result is obtained from the formulas in polar coordinates with $r = ut$ and $\vartheta = \omega t$, since $\ddot{r} - r\dot{\vartheta}^2 = -\omega^2 u t$ and $r\ddot{\vartheta} + 2\dot{r}\dot{\vartheta} = 2\omega u$. The observer attached to the platform sees a motion without acceleration, while the fixed observer sees a nonzero acceleration.

::struttura{cerchi="0,0,2.4" punti="0,0,O,centro;1.23,1.03,P" linee="0,0 1.84,1.54" frecce="1.23,1.03,1.84,1.54,v_r;1.23,1.03,0.62,1.76,a_c" coppie="-1.2 -1.1,1,ω" titolo="Radial guide on a platform rotating with angular velocity $\omega$: the relative velocity is radial, the Coriolis acceleration is transverse"}
:::

## Notable cases of relative motion

:::osservazione{#riferimento-traslante titolo="Moving frame in translational motion"}
If the unit vectors $\hat{e}_1$, $\hat{e}_2$, $\hat{e}_3$ are constant, then $\vec{\omega} = \vec{0}$ and the two composition theorems reduce to
$$
\vec{v}_a = \vec{v}_\Omega + \vec{v}_r ,
\qquad
\vec{a}_a = \vec{a}_\Omega + \vec{a}_r .
$$
In particular, if $\Omega$ moves with uniform rectilinear motion, then $\vec{a}_\Omega = \vec{0}$ and the accelerations measured in the two frames coincide. This is the property that makes inertial frames equivalent in the dynamics of a particle.
:::

:::osservazione{#traiettoria-relativa titolo="Relative trajectory and absolute trajectory"}
The **relative trajectory** is the set of the positions that $P$ occupies in the moving frame, that is the image of the functions $\xi(t)$, $\eta(t)$, $\zeta(t)$; it is a curve different from the absolute trajectory. A particle at rest in the fixed frame, at distance $d$ from the axis of rotation of a moving triad that rotates with constant angular velocity $\omega$, has $\vec{v}_a = \vec{0}$, hence
$$
\vec{v}_r = -\,\vec{v}_\tau = -\,\vec{\omega} \wedge (P - \Omega) ,
$$
and its relative trajectory is the circle of radius $d$ traveled with angular velocity $-\omega$. A particle in uniform rectilinear motion that passes through the origin has instead a spiral relative trajectory, with $r = u t$ and relative angle $-\omega t$.
:::
