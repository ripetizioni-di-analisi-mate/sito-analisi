---
titolo: Dynamics of a particle, free and constrained
sommario: How the equation of motion of a particle is written and integrated, what the kinetic energy theorem and the conservation of mechanical energy state, and how one studies one-dimensional motions, a particle constrained to a smooth curve, central motions and motion in a non-inertial frame.
---

## The fundamental law and the problem of motion

:::definizione{#punto-materiale titolo="Particle, mass and force"}
A **particle** is a body whose dimensions are negligible with respect to the distances it travels, therefore its configuration is determined by the position $P$ alone. With the particle one associates a positive number $m$, the **mass**, which measures its inertia, and one calls **force** the vector $\vec{F}$ that describes the action of the environment on it.

Throughout this topic the frame $(O; x, y, z)$, with unit vectors $\hat{\imath}$, $\hat{\jmath}$ and $\hat{k}$, is **inertial**, that is, it is a frame in which a particle subject to no force moves with uniform rectilinear motion. In plane problems the plane of the motion is $Oxy$, with $x$ horizontal pointing to the right and $y$ vertical pointing upwards, therefore the weight is $-mg\,\hat{\jmath}$, with $g = 9.81\,\mathrm{m/s^2}$.
:::

:::definizione{#equazione-fondamentale titolo="Fundamental equation of dynamics"}
In an inertial frame the motion of a particle of mass $m$ subject to the force $\vec{F}$ satisfies
$$
m\,\vec{a}_P = \vec{F} .
$$
The force is assigned as a function of the position, of the velocity and of the time, $\vec{F} = \vec{F}(P, \vec{v}_P, t)$: the weight is constant, the elastic force depends on the position, the resistance of a fluid depends on the velocity, the thrust of an engine may depend on the time. If the particle is constrained, to the assigned force $\vec{F}$ one adds the **constraint reaction** $\vec{\Phi}$, which is unknown, and the equation becomes
$$
m\,\vec{a}_P = \vec{F} + \vec{\Phi} .
$$
The constraint reaction is determined together with the motion, by adding to the equation the properties of the constraint, treated in the topic on constraints and Lagrangian coordinates.
:::

:::richiamo{titolo="Existence and uniqueness for a system of differential equations"}
Let $\vec{g}(\vec{z}, t)$ be continuous in a neighborhood of $(\vec{z}_0, t_0)$ and have continuous partial derivatives with respect to $\vec{z}$. Then the Cauchy problem
$$
\begin{cases}
\dot{\vec{z}} = \vec{g}(\vec{z}, t) \\[4pt]
\vec{z}(t_0) = \vec{z}_0
\end{cases}
$$
admits one and only one solution, defined in a neighborhood of $t_0$. See the topic on differential equations in Mathematical Analysis 1 and Mathematical Analysis 2.
:::

:::osservazione{#problema-del-moto titolo="The problem of motion"}
In components the fundamental equation is a system of three second order differential equations in the unknowns $x(t)$, $y(t)$, $z(t)$. Setting $\vec{z} = (P - O, \vec{v}_P)$ the system is rewritten in first order form
$$
\begin{cases}
\dot{\vec{z}}_1 = \vec{z}_2 \\[4pt]
\dot{\vec{z}}_2 = \dfrac{1}{m}\,\vec{F}(\vec{z}_1, \vec{z}_2, t)
\end{cases}
$$
therefore, if $\vec{F}$ is regular, the existence and uniqueness theorem applies. It follows that the position and the velocity at an instant $t_0$ determine the motion. The six numbers $P(t_0)$ and $\vec{v}_P(t_0)$ are the **initial data**.

Two problems of opposite kind are encountered. In the direct problem the force is assigned and the motion is sought, therefore the equation is integrated; in the inverse problem the motion is assigned and the force is sought, therefore the law of motion is differentiated twice and multiplied by $m$.
:::

## Forces depending on the time and on the velocity

The first cases integrable by quadratures are those in which the force has a single non-zero component and depends on the time or on the velocity.

::::teorema{#forza-costante titolo="Motion under a constant force"}
Let $\vec{F}$ be constant and let $P_0$ and $\vec{v}_0$ be the initial data at $t = 0$. Then
$$
\vec{v}_P(t) = \vec{v}_0 + \frac{\vec{F}}{m}\,t ,
\qquad
P(t) - O = (P_0 - O) + \vec{v}_0\,t + \frac{\vec{F}}{2m}\,t^2 .
$$
The trajectory is a straight line if $\vec{v}_0$ is parallel to $\vec{F}$ or is zero, and in every other case it is a parabola with axis parallel to $\vec{F}$. The most frequent case is the motion of a body under gravity, with $\vec{F} = -mg\,\hat{\jmath}$: the height is $y(t) = y_0 + v_{0y}t - \dfrac{1}{2}g t^2$ and the horizontal coordinate grows uniformly, $x(t) = x_0 + v_{0x}t$.

:::dimostrazione
The fundamental equation gives $\vec{a}_P = \dfrac{\vec{F}}{m}$, which is a constant vector. Integrating once between $0$ and $t$ one obtains $\vec{v}_P(t) - \vec{v}_0 = \dfrac{\vec{F}}{m}\,t$, and integrating again one obtains the second formula. To find the trajectory one chooses the axes with $\hat{\jmath}$ parallel to $\vec{F}$ and $\vec{v}_0$ in the plane $Oxy$; then $x = v_{0x}t$ and $y = v_{0y}t + \dfrac{F}{2m}t^2$, and if $v_{0x} \neq 0$ one eliminates $t = \dfrac{x}{v_{0x}}$ between the two relations, obtaining the equation of a parabola. If $v_{0x} = 0$ the motion takes place on the line $x = 0$.
:::
::::

::::teorema{#resistenza-viscosa titolo="Motion with viscous resistance"}
A particle subject to the viscous resistance $-h\,\vec{v}_P$ alone, with $h > 0$, and launched with velocity $\vec{v}_0$ moves with rectilinear motion with
$$
\vec{v}_P(t) = \vec{v}_0\,e^{-\frac{h}{m}t} ,
\qquad
P(t) - O = (P_0 - O) + \frac{m\,\vec{v}_0}{h}\Big( 1 - e^{-\frac{h}{m}t} \Big) ,
$$
therefore the velocity tends to zero without vanishing at any finite instant and the particle travels the finite distance $\dfrac{m\,v_0}{h}$. If besides the resistance a constant force $\vec{F}$ acts, the velocity tends to the **terminal velocity** $\vec{v}_\ell = \dfrac{\vec{F}}{h}$, according to
$$
\vec{v}_P(t) = \vec{v}_\ell + (\vec{v}_0 - \vec{v}_\ell)\,e^{-\frac{h}{m}t} .
$$
For a body falling vertically under gravity the terminal velocity is $v_\ell = \dfrac{mg}{h}$, and the time $\dfrac{m}{h}$ measures how quickly it is reached.

::grafico{f="1-exp(-x)" xmin=0 xmax=5 ymin=-0.1 ymax=1.3 asintoti="y=1" nomi="t,v" titolo="Velocity of a body under gravity with viscous resistance, in units of $v_\ell = \dfrac{mg}{h}$ and of $\dfrac{m}{h}$: the terminal velocity is a horizontal asymptote"}

:::dimostrazione
With the resistance alone the fundamental equation is $m\,\dot{\vec{v}}_P = -h\,\vec{v}_P$. Every component satisfies the same linear equation $\dot{v} = -\dfrac{h}{m}v$, whose solution with initial datum $v_0$ is $v_0\,e^{-\frac{h}{m}t}$; therefore $\vec{v}_P$ remains parallel to $\vec{v}_0$ and the motion is rectilinear. Integrating the velocity between $0$ and $t$ one obtains the displacement, and passing to the limit as $t \to +\infty$ one obtains the distance travelled $\dfrac{m\,v_0}{h}$.

With the constant force the equation is $m\,\dot{\vec{v}}_P = \vec{F} - h\,\vec{v}_P$. One sets $\vec{w} = \vec{v}_P - \dfrac{\vec{F}}{h}$, so that $\dot{\vec{w}} = \dot{\vec{v}}_P$ and the equation becomes $m\,\dot{\vec{w}} = -h\,\vec{w}$, already solved. Hence $\vec{w}(t) = \vec{w}(0)\,e^{-\frac{h}{m}t}$, which is the formula of the statement.
:::
::::

## The harmonic oscillator

:::richiamo{titolo="Linear second order equations with constant coefficients"}
The equation $\ddot{x} + 2\gamma\,\dot{x} + \omega_0^2\,x = 0$ has as general integral a linear combination of $e^{\lambda_1 t}$ and $e^{\lambda_2 t}$, where $\lambda_1$ and $\lambda_2$ are the roots of $\lambda^2 + 2\gamma\lambda + \omega_0^2 = 0$; if the roots coincide the two solutions are $e^{\lambda t}$ and $t\,e^{\lambda t}$, and if they are complex conjugate $-\gamma \pm i\,\mu$ the real solutions are $e^{-\gamma t}\cos\mu t$ and $e^{-\gamma t}\sin\mu t$. See the topic on linear differential equations in Mathematical Analysis 2.
:::

::::teorema{#oscillatore-armonico titolo="Harmonic oscillator"}
Let a particle of mass $m$ be constrained to the $x$ axis and subject to the elastic force $-k\,x\,\hat{\imath}$, with $k > 0$. Setting
$$
\omega_0 = \sqrt{\frac{k}{m}} ,
$$
the motion is $x(t) = A\cos(\omega_0 t + \varphi)$, with the amplitude $A$ and the phase $\varphi$ determined by the initial data:
$$
A = \sqrt{x_0^2 + \frac{v_0^2}{\omega_0^2}} ,
\qquad
\tan\varphi = -\frac{v_0}{\omega_0\,x_0} .
$$
The motion is therefore **periodic** with period $T = \dfrac{2\pi}{\omega_0} = 2\pi\sqrt{\dfrac{m}{k}}$, and the period does not depend on the initial data. The harmonic oscillator is the model of every system that oscillates slightly about a configuration of stable equilibrium, as is seen in the topic on equilibrium, stability and small oscillations. A mass of $0.50\,\mathrm{kg}$ attached to a spring of constant $k = 200\,\mathrm{N/m}$ has $\omega_0 = 20\,\mathrm{rad/s}$ and $T = 0.31\,\mathrm{s}$.

:::dimostrazione
The fundamental equation along $x$ is $m\,\ddot{x} = -k\,x$, that is, $\ddot{x} + \omega_0^2\,x = 0$. The characteristic equation $\lambda^2 + \omega_0^2 = 0$ has roots $\pm i\,\omega_0$, therefore the general integral is $x(t) = c_1\cos\omega_0 t + c_2\sin\omega_0 t$. Imposing $x(0) = x_0$ and $\dot{x}(0) = v_0$ one obtains $c_1 = x_0$ and $c_2 = \dfrac{v_0}{\omega_0}$. One then sets $A = \sqrt{c_1^2 + c_2^2}$ and chooses $\cos\varphi = \dfrac{c_1}{A}$ and $\sin\varphi = -\dfrac{c_2}{A}$; then
$$
A\cos(\omega_0 t + \varphi) = A\cos\varphi\,\cos\omega_0 t - A\sin\varphi\,\sin\omega_0 t = c_1\cos\omega_0 t + c_2\sin\omega_0 t ,
$$
which is the form of the statement. Finally $x(t + T) = x(t)$ for every $t$ if and only if $\omega_0 T$ is a multiple of $2\pi$, and the smallest positive value is $T = \dfrac{2\pi}{\omega_0}$.
:::
::::

::::teorema{#oscillatore-smorzato titolo="Damped harmonic oscillator"}
Let a particle of mass $m$ on the $x$ axis be subject to the elastic force $-k\,x$ and to the viscous resistance $-h\,\dot{x}$, with $h > 0$. Setting $\omega_0 = \sqrt{\dfrac{k}{m}}$ and $\gamma = \dfrac{h}{2m}$, the equation of motion is
$$
\ddot{x} + 2\gamma\,\dot{x} + \omega_0^2\,x = 0 ,
$$
and the motion depends on the comparison between $\gamma$ and $\omega_0$.

- If $\gamma < \omega_0$ (**underdamping**), $x(t) = A\,e^{-\gamma t}\cos(\omega_s t + \varphi)$ with $\omega_s = \sqrt{\omega_0^2 - \gamma^2}$: the particle oscillates with pseudo-period $\dfrac{2\pi}{\omega_s}$ and amplitude that decreases as $e^{-\gamma t}$.
- If $\gamma = \omega_0$ (**critical damping**), $x(t) = (c_1 + c_2\,t)\,e^{-\gamma t}$.
- If $\gamma > \omega_0$ (**overdamping**), $x(t) = c_1\,e^{\lambda_1 t} + c_2\,e^{\lambda_2 t}$ with $\lambda_{1,2} = -\gamma \pm \sqrt{\gamma^2 - \omega_0^2}$, both negative.

In all three cases $x(t) \to 0$ as $t \to +\infty$, because the exponentials have exponent with negative real part. In the last two cases the particle passes through the origin at most once, therefore the motion is not oscillatory. The value $h = 2\sqrt{mk}$ separates the two behaviors and is the one sought in shock absorbers, because it brings the particle back to the origin in the shortest time without oscillations.

::grafico{f="exp(-0.3*x)*(cos(0.9539*x)+0.3145*sin(0.9539*x));(1+x)*exp(-x);1.0774*exp(-0.2679*x)-0.0774*exp(-3.732*x)" xmin=0 xmax=20 ymin=-0.5 ymax=1.15 nomi="t,x" titolo="Damped motion with $x(0) = 1$ and $\dot{x}(0) = 0$, in units of $\dfrac{1}{\omega_0}$: underdamping $\gamma = 0.3\,\omega_0$ (solid color), critical $\gamma = \omega_0$ (dashed) and overdamping $\gamma = 2\,\omega_0$ (red)"}

:::dimostrazione
The fundamental equation along $x$ is $m\,\ddot{x} = -k\,x - h\,\dot{x}$, and dividing by $m$ one obtains the form of the statement. The characteristic equation is $\lambda^2 + 2\gamma\lambda + \omega_0^2 = 0$, with discriminant $4(\gamma^2 - \omega_0^2)$. If $\gamma < \omega_0$ the roots are $-\gamma \pm i\,\omega_s$, hence the general integral is $e^{-\gamma t}(c_1\cos\omega_s t + c_2\sin\omega_s t)$, which is rewritten in the form with the amplitude and the phase as for the harmonic oscillator. If $\gamma = \omega_0$ the root $-\gamma$ is double and the solutions are $e^{-\gamma t}$ and $t\,e^{-\gamma t}$. If $\gamma > \omega_0$ the roots are real and distinct; their product is $\omega_0^2 > 0$ and their sum is $-2\gamma < 0$, therefore they are both negative.

In the last two cases $x(t) = 0$ requires $c_1 + c_2 t = 0$ in the critical case, that is, a single value of $t$, and $c_1\,e^{(\lambda_1 - \lambda_2)t} = -c_2$ in the overdamped case, that is, again a single value of $t$, because $\lambda_1 \neq \lambda_2$ and the exponential is injective.
:::
::::

::::teorema{#oscillatore-forzato titolo="Forced oscillator and resonance"}
Let the underdamped oscillator be subject also to the force $F_0\cos\Omega t$. Then
$$
\ddot{x} + 2\gamma\,\dot{x} + \omega_0^2\,x = \frac{F_0}{m}\cos\Omega t ,
$$
and as $t \to +\infty$ every solution tends to the **steady-state motion**
$$
x_r(t) = A(\Omega)\cos(\Omega t - \delta) ,
\qquad
A(\Omega) = \frac{\dfrac{F_0}{m}}{\sqrt{(\omega_0^2 - \Omega^2)^2 + 4\gamma^2\Omega^2}} ,
\qquad
\tan\delta = \frac{2\gamma\Omega}{\omega_0^2 - \Omega^2} .
$$
If $\gamma < \dfrac{\omega_0}{\sqrt{2}}$ the amplitude $A(\Omega)$ has a maximum at the **resonant angular frequency**
$$
\Omega_r = \sqrt{\omega_0^2 - 2\gamma^2} ,
\qquad
A(\Omega_r) = \frac{F_0}{2m\,\gamma\sqrt{\omega_0^2 - \gamma^2}} ,
$$
and the maximum grows beyond every bound as $\gamma \to 0$. Resonance is the reason why a forcing of small intensity produces wide oscillations, provided that its angular frequency is close to the natural one of the system.

::grafico{f="1/sqrt((1-x^2)^2+0.04*x^2);1/sqrt((1-x^2)^2+0.25*x^2);1/sqrt((1-x^2)^2+x^2)" xmin=0 xmax=2.5 ymin=0 ymax=5.5 nomi="Ω,A" titolo="Steady-state amplitude as a function of $\Omega$, in units of $\omega_0$ and of $\dfrac{F_0}{m\,\omega_0^2}$, for $\gamma = 0.1\,\omega_0$ (solid color), $\gamma = 0.25\,\omega_0$ (dashed) and $\gamma = 0.5\,\omega_0$ (red)"}

:::dimostrazione
The general integral is the sum of the general integral of the homogeneous equation and of a particular solution. The first tends to zero as $t \to +\infty$, because the damped oscillator has $x(t) \to 0$; therefore every solution tends to the particular solution, which is sought in the form $x_r = A\cos(\Omega t - \delta)$. Substituting and collecting one obtains
$$
A\big[ (\omega_0^2 - \Omega^2)\cos(\Omega t - \delta) - 2\gamma\Omega\sin(\Omega t - \delta) \big] = \frac{F_0}{m}\cos\Omega t .
$$
One writes $\cos\Omega t = \cos\big( (\Omega t - \delta) + \delta \big)$ and expands; equating the coefficients of $\cos(\Omega t - \delta)$ and of $\sin(\Omega t - \delta)$ one obtains
$$
\begin{cases}
A\,(\omega_0^2 - \Omega^2) = \dfrac{F_0}{m}\cos\delta \\[6pt]
2\gamma\Omega\,A = \dfrac{F_0}{m}\sin\delta
\end{cases}
$$
The quotient of the two equations gives $\tan\delta$, and the sum of their squares gives $A^2\big[ (\omega_0^2 - \Omega^2)^2 + 4\gamma^2\Omega^2 \big] = \dfrac{F_0^2}{m^2}$, whence the expression of $A(\Omega)$.

The maximum of $A$ is obtained at the minimum point of the function $\Omega \mapsto (\omega_0^2 - \Omega^2)^2 + 4\gamma^2\Omega^2$. Its derivative is $4\Omega\,(\Omega^2 - \omega_0^2 + 2\gamma^2)$, which for $\Omega > 0$ vanishes only at $\Omega_r = \sqrt{\omega_0^2 - 2\gamma^2}$, provided that the radicand is positive, that is, $\gamma < \dfrac{\omega_0}{\sqrt{2}}$. The derivative is negative before $\Omega_r$ and positive after, therefore $\Omega_r$ is a minimum point. Substituting $\Omega_r$ one obtains $(\omega_0^2 - \Omega_r^2)^2 + 4\gamma^2\Omega_r^2 = 4\gamma^4 + 4\gamma^2(\omega_0^2 - 2\gamma^2) = 4\gamma^2(\omega_0^2 - \gamma^2)$, whence the value of $A(\Omega_r)$.
:::
::::

## Work, kinetic energy and potential

::::teorema{#teorema-energia-cinetica titolo="Kinetic energy theorem"}
Let $T = \dfrac{1}{2}\,m\,v_P^2$ be the **kinetic energy** of the particle and let $\Pi = \vec{F} \cdot \vec{v}_P$ be the **power** of the force. Then at every instant
$$
\frac{dT}{dt} = \Pi ,
$$
and integrating between two instants $t_1$ and $t_2$
$$
T(t_2) - T(t_1) = L ,
\qquad
L = \int_{t_1}^{t_2} \vec{F} \cdot \vec{v}_P\,dt = \int_{\gamma} \vec{F} \cdot d\vec{r} ,
$$
where $L$ is the **work** done by the force along the arc of trajectory $\gamma$ travelled between the two instants. The theorem links the change of the velocity to the work, hence it gives the velocity without integrating the equation of motion, whenever the work can be computed beforehand. If a constraint reaction also acts on the particle, its work must be included as well.

:::dimostrazione
One differentiates $T = \dfrac{1}{2}\,m\,\vec{v}_P \cdot \vec{v}_P$ with respect to the time:
$$
\frac{dT}{dt} = m\,\vec{v}_P \cdot \dot{\vec{v}}_P = \vec{v}_P \cdot m\,\vec{a}_P .
$$
By the fundamental equation $m\,\vec{a}_P = \vec{F}$, hence $\dfrac{dT}{dt} = \vec{F} \cdot \vec{v}_P = \Pi$. Integrating between $t_1$ and $t_2$ one obtains $T(t_2) - T(t_1) = \displaystyle\int_{t_1}^{t_2}\Pi\,dt$; since $\vec{v}_P\,dt = d\vec{r}$ is the elementary displacement along the trajectory, the integral is written as a line integral of $\vec{F}$ along $\gamma$.
:::
::::

:::definizione{#forze-conservative titolo="Conservative forces, potential and potential energy"}
A positional force $\vec{F} = \vec{F}(P)$ is **conservative** if there exists a scalar function $U(P)$, called the **potential**, such that
$$
\vec{F} = \operatorname{grad} U .
$$
The **potential energy** is $V = -U$, and throughout Rational mechanics this convention is used: the potential is $U$ and the potential energy is its opposite. The two cases that appear in almost all problems are the weight and the spring:
$$
U_{\text{weight}} = -m g\,y_P ,
\qquad
U_{\text{spring}} = -\frac{1}{2}\,k\,(\ell - \ell_0)^2 ,
$$
where $y_P$ is the height of the particle, $\ell$ is the length of the spring and $\ell_0$ its rest length. The work of a conservative force along an arc from $P_1$ to $P_2$ equals $L = U(P_2) - U(P_1)$, hence it depends only on the endpoints and is computed by evaluating the potential twice, without carrying out the line integral. For a spring of constant $k = 100\,\mathrm{N/m}$ and zero rest length, stretched from $0$ to $0.20\,\mathrm{m}$, the work is $-\dfrac{1}{2} \cdot 100 \cdot 0.04 = -2\,\mathrm{J}$.
:::

::::teorema{#conservazione-energia titolo="Conservation of mechanical energy"}
Let the particle be subject to conservative forces of potential $U$ and, if it is constrained, to a constraint reaction of zero power. Then the **mechanical energy**
$$
E = T + V = \frac{1}{2}\,m\,v_P^2 - U(P)
$$
is constant during the motion. The equality $T + V = E$ is a **first integral**: it links the velocity to the position, therefore it gives the velocity at every point reached by the motion once $E$ is known from the initial data.

:::dimostrazione
By the kinetic energy theorem $\dfrac{dT}{dt} = \vec{F} \cdot \vec{v}_P + \vec{\Phi} \cdot \vec{v}_P$, and by hypothesis $\vec{\Phi} \cdot \vec{v}_P = 0$. The force is conservative, hence $\vec{F} = \operatorname{grad} U$ and, by the chain rule,
$$
\vec{F} \cdot \vec{v}_P = \operatorname{grad} U \cdot \vec{v}_P = \frac{d}{dt}\,U\big( P(t) \big) .
$$
Therefore $\dfrac{d}{dt}(T - U) = 0$, that is, $T - U = T + V$ is constant.
:::
::::

:::osservazione{#reazioni-lisce titolo="When the constraint reaction has zero power"}
If the constraint is **smooth and fixed**, the reaction $\vec{\Phi}$ is orthogonal to the constraining curve or surface, while the velocity is tangent to it; therefore $\vec{\Phi} \cdot \vec{v}_P = 0$ and the hypothesis of the conservation theorem is satisfied. The same holds for a taut inextensible string fixed at one end, because the tension is directed along the string and the velocity of the particle is orthogonal to it. With a moving constraint, or with friction, the power of the reaction is in general not zero.
:::

## One-dimensional conservative motions

When the particle moves on a straight line or on an assigned curve and the forces are conservative, the conservation of energy suffices to describe the motion without integrating the differential equation.

::::teorema{#moto-unidimensionale titolo="Discussion of one-dimensional conservative motion"}
Let a particle of mass $m$ be constrained to the $x$ axis by a smooth, fixed and bilateral constraint, subject to the force $F(x)\,\hat{\imath}$ with potential energy $V(x)$, that is, $F = -V'(x)$. From the initial data $x_0$ and $v_0$ one computes $E = \dfrac{1}{2}\,m\,v_0^2 + V(x_0)$ and it holds that
$$
\frac{1}{2}\,m\,\dot{x}^2 = E - V(x) .
$$
Then the following facts hold.

- The motion takes place in the set $\{ x : V(x) \leq E \}$, and the particle remains in the connected component that contains $x_0$.
- The **equilibrium** configurations are the solutions of $V'(x) = 0$: if $x_0$ is one of them and $v_0 = 0$, the motion is rest.
- A point $\bar{x}$ with $V(\bar{x}) = E$ and $V'(\bar{x}) \neq 0$ is a **turning point**: the particle arrives there with zero velocity and goes back.
- If $x_0$ lies between two turning points $x_1 < x_2$ and $V(x) < E$ for $x_1 < x < x_2$, the motion is periodic between $x_1$ and $x_2$.

::grafico{f="x^4/4-x^2/2;-0.1;0.4" punti="-1.332,-0.1;-0.4748,-0.1;0.4748,-0.1;1.332,-0.1;-1.6163,0.4;1.6163,0.4" xmin=-2 xmax=2 ymin=-0.55 ymax=0.85 nomi="x,V" titolo="Potential energy with two wells: at the level $E = -0.1$ the motion is periodic in one of the two wells, at the level $E = 0.4$ it crosses the origin and oscillates between the two outermost turning points"}

:::dimostrazione
The force is conservative with potential $U = -V$, and the reaction of the smooth and fixed constraint has zero power; therefore, by the conservation of mechanical energy, $\dfrac{1}{2}\,m\,\dot{x}^2 + V(x) = E$, which is the relation of the statement.

The left-hand side is non-negative, hence $V(x) \leq E$ at every position reached by the motion, therefore the motion takes place in the indicated set. The function $t \mapsto x(t)$ is continuous, therefore its image is an interval, and such an interval contains $x_0$: the particle remains in the connected component of $x_0$.

If $V'(x_0) = 0$ and $v_0 = 0$, the constant function $x(t) = x_0$ satisfies the equation $m\,\ddot{x} = -V'(x)$ and the initial data; by the uniqueness of the solution it is the motion sought.

Let $\bar{x}$ be such that $V(\bar{x}) = E$ and $V'(\bar{x}) \neq 0$, and let $\bar{t}$ be an instant at which $x(\bar{t}) = \bar{x}$. From the energy relation it follows that $\dot{x}(\bar{t}) = 0$, and from the equation of motion that $m\,\ddot{x}(\bar{t}) = -V'(\bar{x}) \neq 0$. Hence $\bar{t}$ is a point of strict maximum or minimum for $x(t)$, therefore the particle reverses the direction of the motion.

In the last case, as long as $x$ lies between $x_1$ and $x_2$ one has $\dot{x} \neq 0$ and the direction of the motion does not change; hence the particle reaches one of the two endpoints in a finite time, because the velocity has positive minimum modulus on every closed interval contained in $(x_1, x_2)$, there it reverses the motion and by uniqueness it retraces the path symmetrically. The motion is therefore periodic.
:::
::::

:::teorema{#periodo-unidimensionale titolo="Period of a one-dimensional motion"}
Under the hypotheses of the previous item, with $x_1$ and $x_2$ consecutive turning points, the period equals
$$
T = \sqrt{2m}\,\int_{x_1}^{x_2} \frac{dx}{\sqrt{E - V(x)}} .
$$
The formula follows from the energy relation: one obtains $\dot{x} = \sqrt{\dfrac{2}{m}\big( E - V(x) \big)}$ on the stretch in which the particle goes from $x_1$ to $x_2$, one separates the variables and integrates; the time of the return is equal to that of the outward journey, therefore the period is twice the integral between $x_1$ and $x_2$ of the reciprocal of the velocity. For $V = \dfrac{1}{2}\,k\,x^2$ and $E = \dfrac{1}{2}\,k\,A^2$ the integral is computed with the substitution $x = A\sin\vartheta$ and gives back $T = 2\pi\sqrt{\dfrac{m}{k}}$, that is, the period of the harmonic oscillator.
:::

:::attenzione
A turning point at which $V'$ vanishes as well is not reached in a finite time. Let for example $V(x) = -\dfrac{1}{2}\,k\,x^2$ and $E = 0$, with initial data $x_0 < 0$ and $v_0 = \sqrt{\dfrac{k}{m}}\,|x_0|$ towards the origin. The energy equation gives $\dot{x} = \sqrt{\dfrac{k}{m}}\,|x|$, whose solution is $x(t) = x_0\,e^{-\sqrt{k/m}\,t}$, which tends to zero without vanishing at any finite instant. The maximum of the potential energy is therefore reached only asymptotically, and the motion is not periodic.
:::

## Particle constrained to a smooth curve or surface

:::richiamo{titolo="Intrinsic frame and components of the acceleration"}
Let $s$ be the arc length on a regular curve and let $\hat{t}$ be the tangent unit vector, $\hat{n}$ the principal normal unit vector and $\varrho$ the radius of curvature. Then
$$
\vec{v}_P = \dot{s}\,\hat{t} ,
\qquad
\vec{a}_P = \ddot{s}\,\hat{t} + \frac{\dot{s}^2}{\varrho}\,\hat{n} ,
$$
and the binormal unit vector is $\hat{b} = \hat{t} \wedge \hat{n}$. See the topic on the kinematics of a particle and relative motions.

::grafico{f="0.18*x^2" legenda=0 uguale=1 vettori="2,0.72,3.22,1.59;2,0.72,1.125,1.936,n" etichette="2.98,1.0,t" punti="2,0.72,pieno,P" xmin=-3.2 xmax=4.0 ymin=-0.6 ymax=2.4 titolo="Tangent unit vector $\hat{t}$ and principal normal unit vector $\hat{n}$ at the point $P$ of a plane curve"}
:::

::::teorema{#equazioni-intrinseche titolo="Equations of motion in intrinsic form"}
Let a particle of mass $m$ be constrained to a smooth and fixed curve, subject to the assigned force $\vec{F}$ and to the reaction $\vec{\Phi}$. Since the constraint is smooth, $\vec{\Phi}$ is orthogonal to the curve, hence $\vec{\Phi} \cdot \hat{t} = 0$, and projecting the fundamental equation onto the intrinsic frame one obtains
$$
\begin{cases}
m\,\ddot{s} = \vec{F} \cdot \hat{t} \\[4pt]
m\,\dfrac{\dot{s}^2}{\varrho} = \vec{F} \cdot \hat{n} + \vec{\Phi} \cdot \hat{n} \\[4pt]
0 = \vec{F} \cdot \hat{b} + \vec{\Phi} \cdot \hat{b}
\end{cases}
$$
The first equation contains the single unknown $s(t)$, therefore it determines the motion; the other two then give the constraint reaction, once the law of motion is known. The first equation is therefore the **pure equation of motion** and the other two are the **equations of the reactions**.

::grafico{f="0.18*x^2" legenda=0 uguale=1 vettori="2,0.72,2,-0.38,mg;2,0.72,1.125,1.936,Φ" punti="2,0.72,pieno,P" xmin=-3.2 xmax=4.0 ymin=-0.9 ymax=2.4 titolo="Particle constrained to a smooth guide: the weight $m g$ and the reaction $\vec{\Phi}$, orthogonal to the guide"}

:::dimostrazione
The fundamental equation for the constrained particle is $m\,\vec{a}_P = \vec{F} + \vec{\Phi}$. One substitutes the intrinsic expression of the acceleration and multiplies scalarly by the three unit vectors of the frame, which are orthonormal. The tangential component of the acceleration is $\ddot{s}$, the normal one is $\dfrac{\dot{s}^2}{\varrho}$ and the binormal one is zero; the tangential component of $\vec{\Phi}$ is zero by the hypothesis of a smooth constraint. One thus obtains the three equations of the statement.
:::
::::

:::osservazione{#distacco titolo="Unilateral constraint and detachment"}
A **unilateral** constraint, such as a support or a guide that pushes from one side only, exerts a reaction with normal component of assigned sign: if the surface can only push the particle, the component of $\vec{\Phi}$ along the outward normal is non-negative. One then proceeds in two steps: one solves the problem as if the constraint were bilateral, then one imposes the sign condition on the reaction found. The instant at which the reaction vanishes is the instant of **detachment**, and after it the motion continues as free motion, with the initial data given by the position and the velocity at the instant of detachment.
:::

## The simple pendulum and the inclined plane

::::teorema{#pendolo-semplice titolo="Simple pendulum"}
A particle of mass $m$ hangs from a taut inextensible string of length $\ell$, fixed at $O$, and moves in the vertical plane $Oxy$. Let $\vartheta$ be the angle that the string makes with the downward vertical. Then the pure equation of motion is
$$
\ddot{\vartheta} + \frac{g}{\ell}\sin\vartheta = 0 ,
$$
the mechanical energy $E = \dfrac{1}{2}\,m\,\ell^2\,\dot{\vartheta}^2 - m g \ell\cos\vartheta$ is constant and the tension of the string equals
$$
\Phi = m g\cos\vartheta + m\,\ell\,\dot{\vartheta}^2 .
$$
If the particle starts from rest at the angle $\vartheta_0 < \pi$, then $\ell^2\dot{\vartheta}^2 = 2 g \ell\,(\cos\vartheta - \cos\vartheta_0)$ and the tension equals $\Phi = m g\,(3\cos\vartheta - 2\cos\vartheta_0)$; at the lowest point $\Phi = m g\,(3 - 2\cos\vartheta_0)$, which for $\vartheta_0 = \dfrac{\pi}{2}$ equals $3 m g$.

::struttura{nodi="O,0,3;P,1.491,0.869" catene="O-P" vincoli="O,cerniera,90" tratteggi="0,3 0,0.3" forze="P,0,-1,mg" reazioni="P,-0.52,0.74,Φ" etichette="0.33,2.35,ϑ" quote="O,P,ℓ,-0.5" punti="1.491,0.869" titolo="Simple pendulum: the tension $\vec{\Phi}$ is directed along the string towards $O$ and the weight has tangential component $-m g\sin\vartheta$"}

:::dimostrazione
The string is taut and inextensible, hence the particle moves on the circle of center $O$ and radius $\ell$, with arc length $s = \ell\,\vartheta$ and radius of curvature $\varrho = \ell$. The tangent unit vector, oriented in the direction of increasing $\vartheta$, has component $-\sin\vartheta$ along the downward vertical, therefore $\vec{F} \cdot \hat{t} = -m g\sin\vartheta$; the principal normal unit vector is directed from $P$ towards $O$, and the component of the weight along it is $-m g\cos\vartheta$, while the tension is $\Phi$, positive because the string pulls towards $O$.

The first intrinsic equation gives $m\,\ell\,\ddot{\vartheta} = -m g\sin\vartheta$, that is, the equation of the statement. The second gives
$$
m\,\frac{\ell^2\dot{\vartheta}^2}{\ell} = \Phi - m g\cos\vartheta ,
$$
whence the expression of the tension. The weight is conservative with potential $U = -m g\,y_P = m g \ell\cos\vartheta$ and the tension has zero power, hence the mechanical energy is conserved. Imposing $\dot{\vartheta} = 0$ at $\vartheta_0$ one obtains $E = -m g \ell\cos\vartheta_0$, and substituting into the first integral one finds $\ell^2\dot{\vartheta}^2 = 2 g \ell\,(\cos\vartheta - \cos\vartheta_0)$. Substituting this expression into the tension one obtains $\Phi = m g\cos\vartheta + 2 m g\,(\cos\vartheta - \cos\vartheta_0) = m g\,(3\cos\vartheta - 2\cos\vartheta_0)$.
:::
::::

:::osservazione{#piccole-oscillazioni-pendolo titolo="Small oscillations of the pendulum"}
For $|\vartheta|$ small one replaces $\sin\vartheta$ with $\vartheta$, because the Taylor expansion gives $\sin\vartheta = \vartheta + o(\vartheta^2)$, and the equation of the pendulum becomes that of the harmonic oscillator
$$
\ddot{\vartheta} + \frac{g}{\ell}\,\vartheta = 0 ,
\qquad
T = 2\pi\sqrt{\frac{\ell}{g}} .
$$
The period of the small oscillations depends neither on the amplitude nor on the mass. A pendulum of length $1.00\,\mathrm{m}$ has $T = 2.01\,\mathrm{s}$. For amplitudes that are not small the period grows with the amplitude and is computed with the formula for the period of a one-dimensional motion, which in this case leads to an elliptic integral.
:::

:::esempio{#piano-inclinato titolo="Particle on a smooth inclined plane"}
A particle of mass $m$ slides down a smooth and fixed inclined plane, which makes the angle $\alpha$ with the horizontal. One takes the abscissa $\sigma$ along the line of steepest slope, increasing downwards. The weight has tangential component $m g\sin\alpha$ and normal component $-m g\cos\alpha$, hence the intrinsic equations give
$$
m\,\ddot{\sigma} = m g\sin\alpha ,
\qquad
\Phi = m g\cos\alpha ,
$$
because the trajectory is rectilinear and the centripetal term is zero. The motion is therefore uniformly accelerated with acceleration $g\sin\alpha$, and starting from rest the particle travels the stretch $d$ in a time $\sqrt{\dfrac{2 d}{g\sin\alpha}}$ reaching the velocity $\sqrt{2 d g\sin\alpha}$. With $d\sin\alpha = h$, that is, with a difference in height $h$, the velocity is $\sqrt{2 g h}$, the same value obtained from the conservation of mechanical energy and which does not depend on the inclination.

::struttura{linee="0,0 4,3 4,0 0,0" punti="2,1.5,P" forze="2 1.5,0,-1,mg" reazioni="2 1.5,-0.6,0.8,Φ" etichette="0.95,0.26,α" quote="0 0,4 3,d,-0.75" riferimento=0 titolo="Particle on a smooth inclined plane: the weight $m g$ and the reaction $\vec{\Phi}$, normal to the plane"}

:::

## Central motions

:::definizione{#moto-centrale titolo="Central motion"}
The motion of a particle $P$ is **central** with center $O$ if the force is at every instant parallel to $P - O$, that is,
$$
\vec{F} = f(P)\,\hat{u}_r ,
\qquad
\hat{u}_r = \frac{P - O}{|P - O|} ,
$$
with $f < 0$ if the force is attractive and $f > 0$ if it is repulsive. Central forces are the gravitational force $f = -\dfrac{G M m}{r^2}$, the Coulomb force and the elastic force $f = -k\,r$ of a spring with one end at $O$ and zero rest length. Central motion is the model of planetary motions and, more generally, of the motion of two bodies that attract each other.
:::

::::teorema{#velocita-areolare titolo="Angular momentum and areal velocity in a central motion"}
In a central motion with center $O$ the angular momentum $\vec{K}_O = (P - O) \wedge m\,\vec{v}_P$ is constant. Consequently the following facts hold.

- If $\vec{K}_O \neq \vec{0}$, the motion is plane and takes place in the plane through $O$ orthogonal to $\vec{K}_O$.
- In polar coordinates $(r, \vartheta)$ of that plane, the quantity $c = r^2\,\dot{\vartheta}$ is constant and $|\vec{K}_O| = m\,|c|$.
- The **areal velocity**, that is, the derivative with respect to the time of the area swept by the position vector, equals $\dfrac{c}{2}$ and is constant: this is Kepler's second law.

:::dimostrazione
One differentiates the angular momentum with respect to the time:
$$
\frac{d\vec{K}_O}{dt} = \vec{v}_P \wedge m\,\vec{v}_P + (P - O) \wedge m\,\vec{a}_P = (P - O) \wedge \vec{F} .
$$
The first summand is zero because it is the cross product of two parallel vectors. The second is zero because the force is parallel to $P - O$, the motion being central. Therefore $\vec{K}_O$ is constant.

Let $\vec{K}_O \neq \vec{0}$. From the definition it follows that $(P - O) \cdot \vec{K}_O = 0$ at every instant, hence $P$ always belongs to the plane through $O$ orthogonal to the constant vector $\vec{K}_O$. In polar coordinates of that plane $\vec{v}_P = \dot{r}\,\hat{u}_r + r\,\dot{\vartheta}\,\hat{u}_\vartheta$, therefore
$$
\vec{K}_O = r\,\hat{u}_r \wedge m\,( \dot{r}\,\hat{u}_r + r\,\dot{\vartheta}\,\hat{u}_\vartheta ) = m\,r^2\,\dot{\vartheta}\,\hat{k} ,
$$
and the constancy of $\vec{K}_O$ is equivalent to that of $c = r^2\dot{\vartheta}$. Finally the area swept between the instants $t$ and $t + dt$ is that of the sector of radius $r$ and angle $d\vartheta$, that is, $dA = \dfrac{1}{2}\,r^2\,d\vartheta$ up to infinitesimals of higher order; dividing by $dt$ one obtains $\dot{A} = \dfrac{1}{2}\,r^2\,\dot{\vartheta} = \dfrac{c}{2}$.
:::
::::

::::teorema{#formula-di-binet titolo="Binet's formula"}
Let a plane central motion be given with $c = r^2\dot{\vartheta} \neq 0$ and set $u = \dfrac{1}{r}$, regarded as a function of $\vartheta$. Then the radial component of the force equals
$$
f = -m\,c^2\,u^2\left( \frac{d^2 u}{d\vartheta^2} + u \right) .
$$
The formula is used in the inverse problem: given the orbit $r = r(\vartheta)$, it gives the force that produces it, without passing through the law of motion. For a circular orbit of radius $r_0$ one has $u = \dfrac{1}{r_0}$ constant, hence $f = -\dfrac{m\,c^2}{r_0^3}$, which with $c = r_0\,v$ reduces to $f = -\dfrac{m\,v^2}{r_0}$, the well known centripetal force.

:::dimostrazione
The radial acceleration in polar coordinates is $a_r = \ddot{r} - r\,\dot{\vartheta}^2$, and the force is radial, hence $f = m\,(\ddot{r} - r\,\dot{\vartheta}^2)$. From $c = r^2\dot{\vartheta}$ it follows that $\dot{\vartheta} = c\,u^2$. One differentiates $r = \dfrac{1}{u}$ with respect to the time using $\dfrac{d}{dt} = \dot{\vartheta}\,\dfrac{d}{d\vartheta}$:
$$
\dot{r} = -\frac{1}{u^2}\,\frac{du}{d\vartheta}\,\dot{\vartheta} = -c\,\frac{du}{d\vartheta} ,
$$
$$
\ddot{r} = -c\,\frac{d^2u}{d\vartheta^2}\,\dot{\vartheta} = -c^2\,u^2\,\frac{d^2u}{d\vartheta^2} .
$$
Moreover $r\,\dot{\vartheta}^2 = \dfrac{1}{u}\,c^2u^4 = c^2u^3$. Substituting into the expression of $f$ one obtains
$$
f = m\left( -c^2u^2\,\frac{d^2u}{d\vartheta^2} - c^2u^3 \right) = -m\,c^2\,u^2\left( \frac{d^2u}{d\vartheta^2} + u \right) .
$$
:::
::::

:::osservazione{#orbite-kepleriane titolo="Keplerian orbits"}
For the Newtonian force $f = -\dfrac{\mu\,m}{r^2}$ Binet's formula gives $\dfrac{d^2u}{d\vartheta^2} + u = \dfrac{\mu}{c^2}$, which is the equation of the harmonic oscillator with a constant forcing term. Its general integral is
$$
u = \frac{\mu}{c^2} + C\cos(\vartheta - \vartheta_0) ,
\qquad\text{that is}\qquad
r = \frac{p}{1 + e\cos(\vartheta - \vartheta_0)} ,
\qquad
p = \frac{c^2}{\mu} ,
\qquad
e = \frac{C\,c^2}{\mu} .
$$
The orbit is therefore a conic with a focus at the center of force, and it is an ellipse for $e < 1$, a parabola for $e = 1$ and a hyperbola for $e > 1$: this is Kepler's first law. For the circular orbit of radius $r_0$ the velocity is $\sqrt{\dfrac{\mu}{r_0}}$ and the period is $2\pi\sqrt{\dfrac{r_0^3}{\mu}}$, therefore $\dfrac{T^2}{r_0^3}$ has the same value for all the circular orbits about the same center: this is Kepler's third law.

::grafico{curve="cos(t)/(1+0.5*cos(t)),sin(t)/(1+0.5*cos(t)),0,6.283" uguale=1 vettori="0,0,-0.667,1.1547,r" punti="0,0,pieno,O;-0.667,1.1547,pieno,P" xmin=-2.3 xmax=1.3 ymin=-1.5 ymax=1.5 titolo="Elliptic orbit $r = \dfrac{p}{1 + e\cos\vartheta}$ with $e = \dfrac{1}{2}$ and focus at the center of force $O$"}

:::

## Relative dynamics and apparent forces

:::richiamo{#teorema-di-coriolis titolo="Theorem on the composition of accelerations"}
Let $(O; x, y, z)$ be a fixed frame and $(\Omega; \xi, \eta, \zeta)$ a moving frame with angular velocity $\vec{\omega}$. Then the absolute acceleration of a point $P$ decomposes as
$$
\vec{a}_a = \vec{a}_\tau + \vec{a}_r + \vec{a}_c ,
\qquad
\vec{a}_\tau = \vec{a}_\Omega + \dot{\vec{\omega}} \wedge (P - \Omega) + \vec{\omega} \wedge \big( \vec{\omega} \wedge (P - \Omega) \big) ,
\qquad
\vec{a}_c = 2\,\vec{\omega} \wedge \vec{v}_r ,
$$
where $\vec{a}_\tau$ is the transport acceleration, $\vec{a}_r$ the relative one and $\vec{a}_c$ the Coriolis one. See the topic on the kinematics of a particle and relative motions.
:::

::::teorema{#forze-apparenti titolo="Equation of motion in a non-inertial frame"}
Let $(\Omega; \xi, \eta, \zeta)$ be a frame in motion with respect to an inertial frame, with angular velocity $\vec{\omega}$. Then the relative motion of a particle of mass $m$ subject to the force $\vec{F}$ satisfies
$$
m\,\vec{a}_r = \vec{F} + \vec{F}_\tau + \vec{F}_c ,
\qquad
\vec{F}_\tau = -m\,\vec{a}_\tau ,
\qquad
\vec{F}_c = -m\,\vec{a}_c = -2m\,\vec{\omega} \wedge \vec{v}_r .
$$
The two added vectors are the **transport force** and the **Coriolis force**, called apparent forces, because they do not describe actions of other bodies and appear only in a non-inertial frame. In the moving frame the fundamental equation therefore holds in the same form, provided that the apparent forces are added to the true ones.

If $\Omega$ is fixed, $\vec{\omega}$ is constant and parallel to a fixed axis, the transport force reduces to the **centrifugal force** $m\,\omega^2\,\vec{d}$, where $\vec{d}$ is the vector going from the axis of rotation to $P$, orthogonal to the axis. Such a force is conservative with potential $U_c = \dfrac{1}{2}\,m\,\omega^2 d^2$, therefore in problems on guides rotating with constant angular velocity the relative mechanical energy, computed with the total potential $U + U_c$, is conserved. The Coriolis force has zero power in the relative motion, because it is orthogonal to $\vec{v}_r$.

:::dimostrazione
In the inertial frame $m\,\vec{a}_a = \vec{F}$ holds. By the theorem on the composition of accelerations $\vec{a}_a = \vec{a}_\tau + \vec{a}_r + \vec{a}_c$, therefore
$$
m\,\vec{a}_r = \vec{F} - m\,\vec{a}_\tau - m\,\vec{a}_c ,
$$
which is the statement. If $\Omega$ is on the axis of rotation and $\vec{\omega}$ is constant, then $\vec{a}_\Omega = \vec{0}$ and $\dot{\vec{\omega}} = \vec{0}$, hence $\vec{a}_\tau = \vec{\omega} \wedge \big( \vec{\omega} \wedge (P - \Omega) \big)$. One decomposes $P - \Omega = \vec{d} + \vec{z}$ with $\vec{z}$ parallel to $\vec{\omega}$ and $\vec{d}$ orthogonal; the double cross product gives $\vec{\omega} \wedge (\vec{\omega} \wedge \vec{d}) = -\omega^2\,\vec{d}$, because $\vec{\omega} \wedge \vec{z} = \vec{0}$. Hence $-m\,\vec{a}_\tau = m\,\omega^2\,\vec{d}$.

This force has the direction of $\vec{d}$ and modulus $m\,\omega^2 d$, and the gradient of $\dfrac{1}{2}\,m\,\omega^2 d^2$ with respect to the position is $m\,\omega^2\,\vec{d}$; therefore the centrifugal force is conservative with that potential. Finally $\vec{F}_c \cdot \vec{v}_r = -2m\,(\vec{\omega} \wedge \vec{v}_r) \cdot \vec{v}_r = 0$, because the cross product is orthogonal to $\vec{v}_r$.
:::
::::

:::osservazione{#deviazione-verso-oriente titolo="Eastward deflection"}
The terrestrial frame rotates with angular velocity $\omega_T = 7.29 \cdot 10^{-5}\,\mathrm{rad/s}$, hence it is not inertial. The centrifugal force adds to the gravitational attraction and gives the effective weight, with the value of $g$ measured at the place. The Coriolis force produces instead effects that depend on the velocity: a particle dropped from a height $h_0$ at the equator touches the ground displaced eastwards by
$$
d = \frac{\omega_T\,g\,t_c^3}{3} = \frac{2\sqrt{2}}{3}\,\omega_T\,\sqrt{\frac{h_0^3}{g}} ,
\qquad
t_c = \sqrt{\frac{2 h_0}{g}} ,
$$
which for $h_0 = 100\,\mathrm{m}$ equals $2.2\,\mathrm{cm}$. The same term explains the slow rotation of the plane of oscillation of Foucault's pendulum.
:::
