---
titolo: Equilibrium, stability and small oscillations
sommario: How the equilibrium configurations of a conservative holonomic system are found from the potential, how their stability is studied with the Lagrange-Dirichlet theorem and with the Hessian matrix, and how the natural angular frequencies and the normal modes of the small oscillations are computed.
---

## Equilibrium of a conservative holonomic system

:::richiamo{#matrice-cinetica titolo="Kinetic energy of a holonomic system with fixed constraints"}
Let a holonomic system with fixed, bilateral constraints be given, with $n$ degrees of freedom and Lagrangian coordinates $q = (q_1, \dots, q_n)$. The kinetic energy is the quadratic form
$$
T = \frac{1}{2} \sum_{h,k=1}^{n} a_{hk}(q)\,\dot{q}_h\,\dot{q}_k = \frac{1}{2}\,\dot{q} \cdot \mathbb{A}(q)\,\dot{q} ,
$$
where the **kinetic matrix** $\mathbb{A}(q)$ is symmetric and positive definite in every configuration, since $T$ vanishes only for a null state of motion. See the topic on Lagrange equations.
:::

:::definizione{#configurazione-di-equilibrio titolo="Equilibrium configuration"}
A configuration $q_0$ is an **equilibrium** configuration when the motion starting at $q_0$ with zero generalized velocities stays at $q_0$, that is, when the constant function $q(t) = q_0$ is a solution of the equations of motion. A system left in an equilibrium configuration, with no initial velocity, remains there.
:::

:::definizione{#potenziale-e-energia-potenziale titolo="Potential and potential energy"}
A force system is **conservative** when it admits a potential $U$, a function of the Lagrangian coordinates alone, such that the Lagrangian components of the force system are
$$
Q_h = \frac{\partial U}{\partial q_h} ,
\qquad h = 1, \dots, n .
$$
The **potential energy** is $V = -U$. Throughout the subject the convention $\vec{F} = \operatorname{grad} U$ is used, therefore the potential of the weight of a body of mass $m$ and center of mass $G$ is
$$
U = -m g\,y_G ,
$$
and the potential of a spring of stiffness $k$, length $\ell$ and natural length $\ell_0$ is
$$
U = -\frac{1}{2}\,k\,(\ell - \ell_0)^2 .
$$
The potential of a system of conservative forces is the sum of the potentials of the individual forces. For a uniform rod of mass $m$ and length $\ell$, hinged at $A$ and inclined by $\vartheta$ with respect to the downward vertical, the center of mass is at height $y_G = -\dfrac{\ell}{2}\cos\vartheta$ with respect to $A$, hence $U = \dfrac{m g \ell}{2}\cos\vartheta$.
:::

::::teorema{#stazionarieta-del-potenziale titolo="The equilibrium configurations are the stationary points of the potential"}
Let a holonomic system with fixed, bilateral and ideal constraints be given, subject to a conservative force system of potential $U$. A configuration $q_0$ interior to the domain of the coordinates is an equilibrium configuration if and only if
$$
\frac{\partial U}{\partial q_h}(q_0) = 0 ,
\qquad h = 1, \dots, n ,
$$
that is, if and only if $q_0$ is a stationary point of $U$, and equivalently of $V = -U$.

The theorem turns the search for equilibrium into the computation of a gradient, since it is enough to write the potential as a function of the Lagrangian coordinates and to solve the system $\operatorname{grad} U = 0$. For the uniform rod hinged at one end we obtain $U'(\vartheta) = -\dfrac{m g \ell}{2}\sin\vartheta$, which vanishes for $\vartheta = 0$ and $\vartheta = \pi$, therefore the equilibrium configurations are the two vertical ones.

:::dimostrazione
The Lagrange equations of the system are
$$
\frac{d}{dt}\frac{\partial T}{\partial \dot{q}_h} - \frac{\partial T}{\partial q_h} = \frac{\partial U}{\partial q_h} ,
\qquad h = 1, \dots, n .
$$
Substitute the constant function $q(t) = q_0$. Then $\dot{q} = 0$ and $\ddot{q} = 0$ at every instant; since $T$ is a homogeneous quadratic form in the $\dot{q}_h$, both $\dfrac{\partial T}{\partial \dot{q}_h}$ and $\dfrac{\partial T}{\partial q_h}$ vanish for a null state of motion. The left-hand side is therefore zero, and the constant function solves the equations if and only if $\dfrac{\partial U}{\partial q_h}(q_0) = 0$ for every $h$.

Conversely, let $q_0$ be a stationary point of $U$. The Lagrange equations are written in the form $\mathbb{A}(q)\,\ddot{q} = b(q, \dot{q})$ with $b$ zero when $\dot{q} = 0$ and $\operatorname{grad} U(q) = 0$; since $\mathbb{A}(q_0)$ is invertible, the initial value problem with data $q(0) = q_0$ and $\dot{q}(0) = 0$ admits one and only one solution, which is the constant function $q(t) = q_0$. Therefore $q_0$ is an equilibrium configuration.
:::
::::

:::esempio{titolo="Hinged rod with a spring"}
The uniform rod $AB$ of mass $m$ and length $\ell$ is hinged at $A$ and moves in the vertical plane; a spring of stiffness $k$ and zero natural length connects $B$ to the fixed point $C$, placed on the vertical at distance $\ell$ below $A$. The angle $\vartheta$ between the rod and the downward vertical is taken as the Lagrangian coordinate.

::struttura{nodi="A,0,3;B,1.5,0.4" aste="A-B" vincoli="A,cerniera,90" tratteggi="0,3 0,0.65" linee="0,0 0.3,0.3 0.75,-0.2 1.2,0.3 1.5,0.4" punti="0,0,C;0.75,1.7,G,baricentro" forze="0.75 1.7,0,-0.9,mg" etichette="0.35,2,ϑ;0.8,-0.6,k" titolo="Rod hinged at $A$ with the spring between $B$ and the fixed point $C$"}

The distance between $B$ and $C$ satisfies $\overline{BC}^2 = 2\ell^2\,(1 - \cos\vartheta)$, hence
$$
U(\vartheta) = \frac{m g \ell}{2}\cos\vartheta - k\,\ell^2\,(1 - \cos\vartheta)
= \left( \frac{m g \ell}{2} + k\,\ell^2 \right)\cos\vartheta - k\,\ell^2 .
$$
From the condition $U'(\vartheta) = 0$ it follows that $\sin\vartheta = 0$, therefore the equilibrium configurations are $\vartheta = 0$ and $\vartheta = \pi$.
:::

## Stability in the sense of Lyapunov

Knowing that a configuration is an equilibrium configuration tells what happens with exact initial data. Stability concerns instead the motions that start near the equilibrium, with a small initial velocity.

:::definizione{#stabilita-lyapunov titolo="Stable equilibrium in the sense of Lyapunov"}
An equilibrium configuration $q_0$ is **stable** when, for every $\varepsilon > 0$, there exists $\delta > 0$ such that every motion with initial data satisfying
$$
|q(0) - q_0| < \delta ,
\qquad
|\dot{q}(0)| < \delta
$$
satisfies $|q(t) - q_0| < \varepsilon$ and $|\dot{q}(t)| < \varepsilon$ for every $t \ge 0$. In other words, it is enough to start close enough to the configuration, and slowly enough, to stay within the required tolerance for the whole subsequent motion. The definition requires that the condition hold on the velocities as well, since a configuration can be crossed with a large velocity.
:::

:::osservazione{#equilibrio-instabile titolo="Unstable equilibrium"}
An equilibrium configuration that does not satisfy the definition of stability is called **unstable**: there exists then a tolerance $\varepsilon$ that is exceeded by motions with initial data arbitrarily close to the equilibrium. The rod hinged at $A$ in the configuration $\vartheta = \pi$, with the free end upward, is unstable: however small the initial displacement, the rod moves away and reaches the opposite configuration.

::grafico{f="x^4-2*x^2;-0.6" xmin=-2 xmax=2 ymin=-1.5 ymax=1.5 punti="-1,-1,pieno;1,-1,pieno;0,0,pieno" nomi="q,V" etichette="-1.75,-0.35,E;0.12,0.25,unstable;0.75,-1.45,stable" titolo="A motion of energy $E$ smaller than the maximum of $V$ stays in the well around the minimum"}
:::

:::attenzione{titolo="Stability does not mean return to equilibrium"}
The definition requires that the motion stay near $q_0$, and not that it tend to it. A simple pendulum displaced by a small angle oscillates indefinitely about the lowest position without approaching it: the configuration is stable, and the motion does not converge to the equilibrium. Convergence appears when a dissipation is present, as in damped oscillations.
:::

## The Lagrange-Dirichlet theorem

:::richiamo{#conservazione-energia titolo="Conservation of mechanical energy"}
For a holonomic system with fixed, bilateral and ideal constraints, subject to a conservative force system of potential $U$, the mechanical energy
$$
E = T + V ,
\qquad V = -U ,
$$
stays constant along every motion. See the topic on the dynamics of systems.
:::

::::teorema{#lagrange-dirichlet titolo="Lagrange-Dirichlet theorem"}
Let a holonomic system with fixed, bilateral and ideal constraints be given, subject to a conservative force system of potential energy $V$ of class $C^2$. If $q_0$ is a point of **strict relative minimum** of $V$, that is, if there exists a neighborhood of $q_0$ in which $V(q) > V(q_0)$ for every $q \neq q_0$, then $q_0$ is a stable equilibrium configuration.

The theorem reduces the study of stability to the study of a minimum of a function of $n$ variables, which is addressed with the tools of analysis, namely the second derivative with one degree of freedom and the Hessian matrix with several degrees of freedom. The idea of the proof is that the mechanical energy is conserved, and that a potential well around $q_0$ does not let out a motion that starts with small energy.

:::dimostrazione
Since $q_0$ is an interior minimum point of $V$, the gradient of $V$ vanishes there, therefore $q_0$ is an equilibrium configuration. One may assume $V(q_0) = 0$, since the potential energy is defined up to an additive constant.

Let $\varepsilon > 0$ be small enough that the closed ball of center $q_0$ and radius $\varepsilon$ is contained in the neighborhood in which $V(q) > 0$ for $q \neq q_0$. The boundary $|q - q_0| = \varepsilon$ is a closed and bounded set and $V$ is continuous, hence $V$ attains a minimum there,
$$
\mu = \min_{|q - q_0| = \varepsilon} V(q) > 0 .
$$
The function $E(q, \dot{q}) = T(q, \dot{q}) + V(q)$ is continuous and $E(q_0, 0) = 0$, therefore there exists $\delta > 0$ such that $|q - q_0| < \delta$ and $|\dot{q}| < \delta$ imply $E(q, \dot{q}) < \mu$.

Consider the motion with initial data in such a neighborhood. The energy is conserved, hence $E(t) = E(0) < \mu$ for every $t$. If there existed an instant $t_1 > 0$ with $|q(t_1) - q_0| = \varepsilon$, then, since $T \ge 0$,
$$
E(t_1) = T(t_1) + V(q(t_1)) \ge V(q(t_1)) \ge \mu ,
$$
against $E(t_1) < \mu$. The function $t \mapsto |q(t) - q_0|$ is continuous and starts from a value smaller than $\delta < \varepsilon$, therefore it cannot exceed $\varepsilon$ without taking the value $\varepsilon$; consequently $|q(t) - q_0| < \varepsilon$ for every $t \ge 0$.

It remains to control the velocities. On the closed ball of radius $\varepsilon$ the matrix $\mathbb{A}(q)$ is symmetric, positive definite and continuous, therefore its smallest eigenvalue has an infimum $\lambda > 0$ and $T \ge \dfrac{\lambda}{2}\,|\dot{q}|^2$ holds. From the inequalities $T \le E < \mu$ it follows that
$$
|\dot{q}(t)| < \sqrt{\frac{2\mu}{\lambda}}
$$
for every $t \ge 0$. Since $\mu$ tends to zero as $\varepsilon$ tends to zero, the bound on the velocities can be made as small as desired, and the configuration $q_0$ is stable.
:::
::::

:::osservazione{#inversione-parziale titolo="Sufficient condition and criterion for instability"}
The Lagrange-Dirichlet theorem gives a sufficient condition. The converse result holds in the cases met in the exercises, since, if the Hessian matrix of $V$ at $q_0$ admits a negative eigenvalue, then the equilibrium is unstable by the Lyapunov instability theorems. In the exercises stability is therefore concluded from the sign of the Hessian, and only the case in which the Hessian is semidefinite and singular is left aside.
:::

## Stability with one degree of freedom

:::richiamo{#richiamo-taylor titolo="Taylor's formula with Peano remainder"}
Let $f$ be a function of class $C^2$ in a neighborhood of $x_0$. Then
$$
f(x) = f(x_0) + f'(x_0)\,(x - x_0) + \frac{1}{2}\,f''(x_0)\,(x - x_0)^2 + o\big((x - x_0)^2\big)
$$
as $x \to x_0$. See the topic on derivatives and Taylor's formula in Mathematical Analysis 1.
:::

:::teorema{#criterio-un-grado-di-liberta titolo="Second derivative criterion"}
Let a conservative holonomic system with one degree of freedom be given, with potential energy $V(q)$ of class $C^2$, and let $q_0$ be an equilibrium configuration, that is, $V'(q_0) = 0$. Then
$$
\begin{cases}
V''(q_0) > 0 & \text{stable equilibrium} \\[4pt]
V''(q_0) < 0 & \text{unstable equilibrium}
\end{cases}
$$
If $V''(q_0) > 0$, by Taylor's formula $V(q) - V(q_0) = \dfrac{1}{2}\,V''(q_0)\,(q - q_0)^2 + o\big((q-q_0)^2\big)$ is positive in a punctured neighborhood of $q_0$, hence $q_0$ is a strict minimum and the Lagrange-Dirichlet theorem applies. If $V''(q_0) < 0$ the configuration is a strict maximum of $V$ and the equilibrium is unstable. In applications it is convenient to work with the potential $U = -V$, since the equilibrium is stable where $U$ has a maximum.
:::

:::esempio{titolo="The two vertical configurations of the rod"}
For the hinged rod with the spring, from $U(\vartheta) = \left( \dfrac{m g \ell}{2} + k\,\ell^2 \right)\cos\vartheta - k\,\ell^2$ it follows that
$$
U''(\vartheta) = -\left( \frac{m g \ell}{2} + k\,\ell^2 \right)\cos\vartheta .
$$
At $\vartheta = 0$ we have $U'' < 0$, hence $V'' > 0$ and the configuration with the rod downward is **stable**; at $\vartheta = \pi$ we have $V'' < 0$ and the configuration with the rod upward is **unstable**. The spring, which pulls $B$ downward, strengthens the effect of the weight in both configurations.

::grafico{f="-cos(x)" xmin=-3.6 xmax=3.6 ymin=-1.5 ymax=1.5 punti="0,-1,pieno;3.1416,1,pieno;-3.1416,1,pieno" nomi="ϑ,V" titolo="Potential energy of the rod: minimum at $\vartheta = 0$, maxima at $\vartheta = \pm\pi$"}
:::

:::attenzione{#caso-degenere titolo="Vanishing second derivative"}
When $V''(q_0) = 0$ the criterion does not apply and the nature of the equilibrium is decided with the higher derivatives. For $V(q) = q^4$ the configuration $q = 0$ is a strict minimum, hence it is stable; for $V(q) = -q^4$ it is a strict maximum and it is unstable; for $V(q) = q^3$ it is neither one nor the other and the equilibrium is unstable. In all three cases $V'(0) = V''(0) = 0$.

::grafico{f="x^4;-x^4;x^3" xmin=-1.3 xmax=1.3 ymin=-1.3 ymax=1.3 punti="0,0,pieno" nomi="q,V" titolo="Three potential energies with $V'(0) = V''(0) = 0$: $q^4$ (stable), $-q^4$ and $q^3$ (unstable)"}
:::

## Stability with several degrees of freedom

:::definizione{#matrice-hessiana titolo="Hessian matrix of the potential energy"}
Let $V$ be of class $C^2$ and let $q_0$ be an equilibrium configuration. The **Hessian matrix** of $V$ at $q_0$ is the symmetric matrix of order $n$
$$
\mathbb{V} = \left[ \frac{\partial^2 V}{\partial q_h\,\partial q_k}(q_0) \right]_{h,k = 1,\dots,n} .
$$
It is the matrix of the quadratic form that approximates $V - V(q_0)$ near $q_0$, and it appears also in the equations of the small oscillations.
:::

:::richiamo{#segno-forma-quadratica titolo="Sign of a quadratic form"}
A real symmetric matrix has real eigenvalues. The associated quadratic form is positive definite if and only if all the eigenvalues are positive, and equivalently, by Sylvester's criterion, if and only if all the leading principal minors are positive. For a matrix of order two the condition is written as
$$
\begin{cases}
\det \mathbb{V} > 0 \\[4pt]
V_{11} > 0
\end{cases}
$$
whereas $\det \mathbb{V} < 0$ says that the two eigenvalues have opposite sign. See the topic on quadratic forms and diagonalization in Linear algebra.
:::

:::teorema{#criterio-hessiano titolo="Hessian criterion"}
Let $q_0$ be an equilibrium configuration of a conservative holonomic system with fixed, bilateral and ideal constraints, and let $\mathbb{V}$ be the Hessian matrix of $V$ at $q_0$. If $\mathbb{V}$ is positive definite, then $q_0$ is a strict minimum of $V$ and the equilibrium is stable by the Lagrange-Dirichlet theorem. If $\mathbb{V}$ admits a negative eigenvalue, the equilibrium is unstable.

With two degrees of freedom the criterion is used in the form given by the sign of the determinant and of the first entry. A negative determinant is enough to conclude instability, since the eigenvalues have then opposite sign, and there is no need to compute them.
:::

:::esempio{titolo="Double pendulum of two rods"}
Two equal uniform rods, of mass $m$ and length $\ell$, are hinged, the first at $O$ and the second at the free end of the first; the angles $\vartheta_1$ and $\vartheta_2$ are measured from the downward vertical.

::struttura{nodi="O,0,3.4;A,0.9,1.74;B,2.5,1.1" aste="O-A;A-B" vincoli="O,cerniera,90" cerniere="A" tratteggi="0,3.4 0,1.6;0.9,1.74 0.9,0.3" etichette="0.25,2.5,ϑ_1;1.2,0.95,ϑ_2" punti="0.45,2.57,G_1,baricentro;1.7,1.42,G_2,baricentro" titolo="Double pendulum: the second rod is hinged at the free end of the first"}

The potential energy is
$$
V = -m g \ell \left( \frac{3}{2}\cos\vartheta_1 + \frac{1}{2}\cos\vartheta_2 \right) ,
$$
and its gradient vanishes in the four configurations with $\vartheta_1, \vartheta_2 \in \{0, \pi\}$. The Hessian is diagonal,
$$
\mathbb{V} = m g \ell
\begin{bmatrix}
\dfrac{3}{2}\cos\vartheta_1 & 0 \\[8pt]
0 & \dfrac{1}{2}\cos\vartheta_2
\end{bmatrix} ,
$$
hence the only **stable** configuration is $(0, 0)$, with both rods downward; in the other three at least one eigenvalue is negative.
:::

## Equilibrium as a parameter varies

:::osservazione{#parametro-adimensionale titolo="The dimensionless parameter of a system"}
When the potential contains several constants, the discussion is simplified by factoring out one coefficient and introducing a dimensionless parameter, that is, a pure number that compares two effects. In systems made of heavy rods and springs the parameter is the ratio between the action of the weight and the elastic one, for example $\lambda = \dfrac{m g}{2 k \ell}$. The equilibrium configurations and their stability then depend only on $\lambda$, and not on the four data separately.
:::

:::esempio{#biforcazione titolo="Bifurcation of a rod resting on two guides"}
The uniform rod $AB$, of mass $m$ and length $\ell$, has the end $A$ on a smooth vertical guide and the end $B$ on a smooth horizontal guide; a spring of stiffness $k$ and zero natural length connects $B$ to the origin $O$.

::struttura{nodi="A,0,2.6;B,3,0" aste="A-B" vincoli="A,carrello,180;B,carrello,270" linee="0,0 4,0;0,0 0,3.2;0,0 0.4,0.3 0.9,0 1.4,0.3 1.9,0 2.4,0.3 2.7,0.15 3,0" punti="1.5,1.3,G,baricentro" etichette="2.45,0.3,ϑ;1.5,0.75,k" forze="1.5 1.3,0,-0.8,mg" titolo="Rod with $A$ on the vertical guide, $B$ on the horizontal one and the spring between $B$ and $O$"}

With $\vartheta$ the angle between the rod and the horizontal guide and $\lambda = \dfrac{m g}{2 k \ell}$ we obtain
$$
U'(\vartheta) = \ell\,\cos\vartheta\,\left( k \ell \sin\vartheta - \frac{m g}{2} \right) ,
$$
hence the rod is in equilibrium for $\vartheta = \dfrac{\pi}{2}$, and moreover, if $\lambda < 1$, in the two oblique configurations with $\sin\vartheta = \lambda$. The vertical configuration is stable for $\lambda < 1$ and unstable for $\lambda > 1$, whereas the two oblique ones are unstable. The value $\lambda = 1$ is a **bifurcation** value, since crossing it changes the number of the equilibrium configurations and the vertical one loses stability.

::grafico{f="pi/2" curve="cos(t),pi/2+t,-1.45,1.45" xmin=0 xmax=3 ymin=0 ymax=3.3 nomi="λ,ϑ" etichette="2.2,1.75,ϑ = π/2;0.5,3.05,sin ϑ = λ;1.08,0.2,λ = 1" segmenti="1,0,1,3.15" titolo="Equilibrium configurations as $\lambda$ varies: the two oblique branches detach from the vertical one $\vartheta = \dfrac{\pi}{2}$ at $\lambda = 1$"}
:::

## The equations of the small oscillations

::::teorema{#equazioni-delle-piccole-oscillazioni titolo="Equations of the small oscillations"}
Let $q_0$ be an equilibrium configuration of a conservative holonomic system with fixed, bilateral and ideal constraints, and let $\mathbb{A} = \mathbb{A}(q_0)$ be the kinetic matrix computed in the equilibrium configuration and $\mathbb{V}$ the Hessian matrix of $V$ at $q_0$. Setting $x = q - q_0$, the motions that take place near $q_0$ with small velocities are described, up to higher-order terms, by the linear system
$$
\mathbb{A}\,\ddot{x} + \mathbb{V}\,x = 0 .
$$
The linearized system has constant coefficients, therefore it is solved with the methods of linear differential equations, and its solutions give the period and the shape of the oscillations about the equilibrium. Speaking of small oscillations means that the displacement $x$ and the velocity $\dot{x}$ stay small enough for the neglected terms to be irrelevant; the Lagrange-Dirichlet theorem guarantees that, about a stable equilibrium configuration, small initial data produce motions that stay small for every time.

:::dimostrazione
Expand $T$ and $V$ about $q_0$. In the kinetic energy substitute $\mathbb{A}(q) = \mathbb{A}(q_0) + O(|x|)$; since $T$ already contains the quadratic factor $\dot{x} \cdot \mathbb{A}\,\dot{x}$, the neglected terms are of order higher than the second in the variables $x$ and $\dot{x}$, hence
$$
T = \frac{1}{2}\,\dot{x} \cdot \mathbb{A}\,\dot{x} + \cdots
$$
In the potential energy the first-degree term vanishes, since $q_0$ is stationary, therefore by Taylor's formula
$$
V = V(q_0) + \frac{1}{2}\,x \cdot \mathbb{V}\,x + o(|x|^2) .
$$
Now write the Lagrange equations of the quadratic Lagrangian $\mathcal{L} = \dfrac{1}{2}\,\dot{x} \cdot \mathbb{A}\,\dot{x} - \dfrac{1}{2}\,x \cdot \mathbb{V}\,x$. Since $\mathbb{A}$ and $\mathbb{V}$ are symmetric and constant,
$$
\frac{\partial \mathcal{L}}{\partial \dot{x}} = \mathbb{A}\,\dot{x} ,
\qquad
\frac{\partial \mathcal{L}}{\partial x} = -\,\mathbb{V}\,x ,
$$
and the equations $\dfrac{d}{dt}\dfrac{\partial \mathcal{L}}{\partial \dot{x}} - \dfrac{\partial \mathcal{L}}{\partial x} = 0$ become $\mathbb{A}\,\ddot{x} + \mathbb{V}\,x = 0$.
:::
::::

:::teorema{#pulsazioni-proprie titolo="Natural angular frequencies"}
Let $\mathbb{A}$ be positive definite and $\mathbb{V}$ positive definite. The system $\mathbb{A}\,\ddot{x} + \mathbb{V}\,x = 0$ admits solutions of the form $x(t) = u\,\cos(\omega t + \varphi)$, with $u \neq 0$ a constant vector, if and only if
$$
\det\big( \mathbb{V} - \omega^2\,\mathbb{A} \big) = 0 ,
\qquad
\big( \mathbb{V} - \omega^2\,\mathbb{A} \big)\,u = 0 .
$$
The equation $\det(\mathbb{V} - \omega^2 \mathbb{A}) = 0$, called the **characteristic equation**, is algebraic of degree $n$ in $\omega^2$ and admits $n$ real and positive roots $\omega_1^2, \dots, \omega_n^2$, called the **natural angular frequencies** of the system. Substituting $x = u\cos(\omega t + \varphi)$ into the system gives $(-\omega^2 \mathbb{A} + \mathbb{V})\,u\,\cos(\omega t + \varphi) = 0$, which holds for every $t$ if and only if the vector $(\mathbb{V} - \omega^2\mathbb{A})\,u$ is zero; such a homogeneous system has nonzero solutions if and only if the determinant of the coefficient matrix vanishes.

The roots are real and positive because $\mathbb{A}$ and $\mathbb{V}$ are symmetric and positive definite. Indeed $\omega^2$ is an eigenvalue of the matrix $\mathbb{A}^{-1}\mathbb{V}$, which is similar to a symmetric positive definite matrix, and for every eigenvector $u$ we have $\omega^2 = \dfrac{u \cdot \mathbb{V}\,u}{u \cdot \mathbb{A}\,u} > 0$. If instead $\mathbb{V}$ admits a negative eigenvalue, that is, if the equilibrium is unstable, the characteristic equation has a root $\omega^2 < 0$ and the corresponding solution contains a growing exponential, therefore the motion moves away from the configuration.
:::

:::osservazione{#coordinate-dall-equilibrio titolo="Coordinates measured from the equilibrium configuration"}
In the exercises it is convenient to take the equilibrium configuration as the origin of the coordinates, since the first-degree term of the potential energy is then zero and only the quadratic terms remain in the expansion. A body of mass $m$ hanging from a spring of stiffness $k$ has potential energy $V(s) = \dfrac{1}{2}\,k\,(s - \ell_0)^2 - m g s$, with $s$ the distance from the suspension point; setting $s = s_0 + x$ with $s_0 = \ell_0 + \dfrac{m g}{k}$ we obtain $V = \dfrac{1}{2}\,k\,x^2 + \text{constant}$, hence the weight no longer appears and the angular frequency equals $\sqrt{\dfrac{k}{m}}$, whatever the static elongation of the spring. The same happens in every system in which the weight produces only a shift of the equilibrium configuration.
:::

:::teorema{#oscillazioni-un-grado-di-liberta titolo="Angular frequency and period with one degree of freedom"}
For a system with one degree of freedom with kinetic energy $T = \dfrac{1}{2}\,a(q)\,\dot{q}^2$ and stable equilibrium configuration $q_0$ with $V''(q_0) > 0$, the equation of the small oscillations is $a(q_0)\,\ddot{x} + V''(q_0)\,x = 0$, hence the motion is harmonic with angular frequency and period
$$
\omega = \sqrt{\frac{V''(q_0)}{a(q_0)}} ,
\qquad
\mathcal{T} = \frac{2\pi}{\omega} .
$$
The coefficient $a(q_0)$ is the inertia of the system with respect to the chosen coordinate and $V''(q_0)$ is its stiffness, therefore, for equal inertia, a more curved potential gives faster oscillations.
:::

:::esempio{titolo="Period of the compound pendulum"}
For the uniform rod hinged at one end, $T = \dfrac{1}{2}\,\dfrac{m\ell^2}{3}\,\dot{\vartheta}^2$ and $V = -\dfrac{m g \ell}{2}\cos\vartheta$, hence $V''(0) = \dfrac{m g \ell}{2}$ and
$$
\omega^2 = \frac{\dfrac{m g \ell}{2}}{\dfrac{m \ell^2}{3}} = \frac{3 g}{2 \ell} ,
\qquad
\mathcal{T} = 2\pi\sqrt{\frac{2\ell}{3g}} .
$$
The comparison with the simple pendulum, which has $\omega^2 = \dfrac{g}{L}$, gives the **reduced length** $L = \dfrac{2\ell}{3}$, hence the rod oscillates like a simple pendulum of length two thirds of the rod.
:::

## Normal modes and normal coordinates

:::definizione{#modi-normali titolo="Normal modes"}
A **normal mode** is a solution of the equations of the small oscillations in which all the coordinates oscillate with the same angular frequency and in phase,
$$
x(t) = u_r\,\cos(\omega_r t + \varphi_r) ,
$$
where $\omega_r$ is a natural angular frequency and $u_r$ is a nonzero solution of $(\mathbb{V} - \omega_r^2\,\mathbb{A})\,u = 0$. The vector $u_r$ is defined up to a factor and says in which ratio the coordinates move, since the components of equal sign oscillate in the same direction and those of opposite sign oscillate in opposite directions. The general motion is the superposition of the $n$ modes,
$$
x(t) = \sum_{r=1}^{n} c_r\,u_r\,\cos(\omega_r t + \varphi_r) ,
$$
with the $2n$ constants $c_r$ and $\varphi_r$ determined by the initial data.
:::

:::osservazione{#coordinate-normali titolo="Normal coordinates"}
The eigenvectors $u_1, \dots, u_n$ can be chosen orthogonal with respect to $\mathbb{A}$, that is, with $u_r \cdot \mathbb{A}\,u_s = 0$ for $r \neq s$, and they form a basis. Writing $x = \sum_r \xi_r\,u_r$ one obtains the **normal coordinates** $\xi_r$, which satisfy the uncoupled equations
$$
\ddot{\xi}_r + \omega_r^2\,\xi_r = 0 ,
\qquad r = 1, \dots, n .
$$
Every normal coordinate therefore behaves as a harmonic oscillator independent of the others.

Orthogonality with respect to $\mathbb{A}$ serves also to obtain the constants from the initial data, since multiplying $x(0) = \sum_r \xi_r(0)\,u_r$ scalarly by $\mathbb{A}\,u_s$ leaves only the terms with $r = s$, whence
$$
\xi_s(0) = \frac{u_s \cdot \mathbb{A}\,x(0)}{u_s \cdot \mathbb{A}\,u_s} ,
\qquad
\dot{\xi}_s(0) = \frac{u_s \cdot \mathbb{A}\,\dot{x}(0)}{u_s \cdot \mathbb{A}\,u_s} .
$$
A motion that starts with $\dot{x}(0) = 0$ and with $x(0)$ parallel to a single eigenvector excites that single mode, and the system oscillates with the corresponding angular frequency.
:::

:::esempio{titolo="Two masses and three springs"}
Two point particles of mass $m$ slide on a smooth horizontal guide and are connected to the walls and to each other by three equal springs of stiffness $k$. Calling $x_1$ and $x_2$ the abscissas measured from the respective equilibrium positions,
$$
\mathbb{A} = m
\begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix} ,
\qquad
\mathbb{V} = k
\begin{bmatrix} 2 & -1 \\ -1 & 2 \end{bmatrix} ,
$$
and the characteristic equation $(2k - m\omega^2)^2 - k^2 = 0$ gives $\omega_1^2 = \dfrac{k}{m}$ and $\omega_2^2 = \dfrac{3k}{m}$. The first mode is $u_1 = (1, 1)$, in which the two masses move together and the central spring stays unloaded. The second is $u_2 = (1, -1)$, in which the masses approach and move apart in opposition and the central spring deforms twice as much. The normal coordinates are $\xi_1 = \dfrac{x_1 + x_2}{2}$ and $\xi_2 = \dfrac{x_1 - x_2}{2}$.

::struttura{poligoni="2,0 3,0 3,1 2,1;5,0 6,0 6,1 5,1" linee="0,0 8,0;0,0 0,1.6;8,0 8,1.6;0,0.5 0.4,0.75 0.9,0.25 1.4,0.75 1.9,0.5 2,0.5;3,0.5 3.4,0.75 3.9,0.25 4.4,0.75 4.9,0.25 5,0.5;6,0.5 6.4,0.75 6.9,0.25 7.4,0.75 7.9,0.5 8,0.5" etichette="1,1.15,k;4,1.15,k;7,1.15,k;2.5,0.5,m;5.5,0.5,m" frecce="2.5,1.5,3.3,1.5,x_1;5.5,1.5,6.3,1.5,x_2" titolo="The two masses and the three springs, with the abscissas measured from the equilibrium positions"}
:::

## Small damped oscillations

:::osservazione{#oscillazioni-smorzate titolo="Viscous damping"}
When a viscous resistance is added to the system with one degree of freedom, that is, a force system of Lagrangian component $-h\,\dot{q}$ with $h > 0$, the equation of the small oscillations about a stable equilibrium configuration becomes
$$
a\,\ddot{x} + h\,\dot{x} + V''\,x = 0 ,
$$
that is, $\ddot{x} + 2\beta\,\dot{x} + \omega_0^2\,x = 0$ with $\beta = \dfrac{h}{2a}$ and $\omega_0^2 = \dfrac{V''}{a}$. The characteristic equation $s^2 + 2\beta s + \omega_0^2 = 0$ distinguishes the three cases
$$
\begin{cases}
\beta < \omega_0 & x = C\,e^{-\beta t}\cos(\omega t + \varphi), \quad \omega = \sqrt{\omega_0^2 - \beta^2} \\[4pt]
\beta = \omega_0 & x = (C_1 + C_2 t)\,e^{-\beta t} \\[4pt]
\beta > \omega_0 & x = C_1 e^{s_1 t} + C_2 e^{s_2 t}, \quad s_{1,2} < 0
\end{cases}
$$
In the first case the motion is oscillatory with amplitude that decreases like $e^{-\beta t}$ and pseudo-period $\dfrac{2\pi}{\omega}$; the value $h = 2a\,\omega_0$ that separates the first case from the others is the **critical damping**. In all three cases the solution tends to zero, therefore the equilibrium configuration is asymptotically stable. See the topic on the dynamics of a particle for the damped oscillator and for resonance.

::grafico{f="exp(-0.25*x)*cos(3*x);exp(-0.25*x)" xmin=0 xmax=12 ymin=-1.2 ymax=1.2 nomi="t,x" titolo="Damped oscillation and the curve $C\,e^{-\beta t}$ that bounds its amplitude"}
:::
