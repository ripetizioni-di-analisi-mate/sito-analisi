---
titolo: Oscillations and harmonic motion
sommario: What simple harmonic motion is, how to recognize it from the equation $\ddot{x} = -\omega^2 x$, how to compute the period and energy of the spring and of pendulums, and how damping and a driving force lead to resonance.
---

## Periodic motion and simple harmonic motion

:::definizione{#moto-periodico titolo="Periodic motion, period and frequency"}
A motion is called **periodic** if there exists a time interval $T > 0$ such that, for every instant $t$, the position and the velocity at the instant $t + T$ coincide with those at the instant $t$. The smallest $T$ with this property is the **period**, and the number of complete cycles performed per unit time is the **frequency**
$$
f = \frac{1}{T} ,
$$
which is measured in hertz ($1\,\mathrm{Hz} = 1\,\mathrm{s^{-1}}$). Period and frequency are obtained by counting oscillations; for example, a pendulum that performs $30$ complete oscillations in $45\,\mathrm{s}$ has $T = 1.5\,\mathrm{s}$ and $f = 0.67\,\mathrm{Hz}$.
:::

:::definizione{#moto-armonico-semplice titolo="Simple harmonic motion"}
A particle moving along the $x$-axis performs **simple harmonic motion** if its equation of motion is
$$
x(t) = A\cos(\omega t + \varphi) ,
$$
with $A > 0$, $\omega > 0$ and $\varphi \in \mathbb{R}$ constants. The number $A$ is the **amplitude**, that is, the maximum distance of the particle from the equilibrium position $x = 0$; $\omega$ is the **angular frequency**, in $\mathrm{rad/s}$; the argument $\omega t + \varphi$ is the phase and $\varphi$ is the initial phase. Since the cosine has period $2\pi$, the motion is periodic with
$$
T = \frac{2\pi}{\omega}, \qquad f = \frac{\omega}{2\pi} .
$$
The particle oscillates between $x = -A$ and $x = A$. A law written with the sine describes the same motion with a different initial phase, because $\sin\alpha = \cos\left(\alpha - \dfrac{\pi}{2}\right)$. For $x(t) = 0.20\cos(5t)\,\mathrm{m}$ we read $A = 0.20\,\mathrm{m}$ and $\omega = 5\,\mathrm{rad/s}$, so $T = \dfrac{2\pi}{5}\,\mathrm{s} = 1.26\,\mathrm{s}$.

::grafico{f="2*cos(pi*x/2)" asintoti="y=2;y=-2" punti="0,2,pieno;4,2,pieno;8,2,pieno" segmenti="0,2.5,4,2.5;8.4,0,8.4,2" etichette="1.8,2.75,T;8.5,0.9,A" xmin=-0.6 xmax=9 ymin=-2.8 ymax=3.2 nomi="t,x" titolo="Equation of motion $x(t) = A\cos(\omega t)$ with $A = 2$ and $T = 4$: the graph lies between $-A$ and $A$ and repeats identically after each period"}

:::

:::teorema{#velocita-e-accelerazione titolo="Velocity and acceleration in harmonic motion"}
In the harmonic motion $x(t) = A\cos(\omega t + \varphi)$ the velocity and the acceleration are
$$
v(t) = \frac{dx}{dt} = -A\omega\sin(\omega t + \varphi),
\qquad
a(t) = \frac{dv}{dt} = -A\omega^2\cos(\omega t + \varphi) = -\omega^2 x(t) .
$$
The formulas follow by differentiating the equation of motion twice with the chain rule. The maximum values of the magnitudes are $v_{\max} = A\omega$, reached when passing through equilibrium, and $a_{\max} = A\omega^2$, reached at the extremes $x = \pm A$, where the velocity is zero. The relation $a = -\omega^2 x$ says that the acceleration is proportional to the displacement and opposite in direction, so it always points toward the equilibrium position. For $x(t) = 0.20\cos(5t)\,\mathrm{m}$ we have $v_{\max} = 1.0\,\mathrm{m/s}$ and $a_{\max} = 5.0\,\mathrm{m/s^2}$.

::grafico{f="cos(pi*x/2);-(pi/2)*sin(pi*x/2);-(pi/2)^2*cos(pi*x/2)" xmin=-0.4 xmax=8.6 ymin=-2.8 ymax=2.8 nomi="t,x  v  a" titolo="With $A = 1$ and $T = 4$: position $x(t)$ (colored), velocity $v(t)$ (dashed) and acceleration $a(t)$ (red); the velocity vanishes where $|x|$ is maximum and the acceleration always has the opposite sign to $x$"}

:::

:::osservazione{#velocita-e-posizione titolo="Velocity as a function of position"}
Time is eliminated from the laws of $x$ and $v$. Setting $\alpha = \omega t + \varphi$, we have $\cos\alpha = \dfrac{x}{A}$ and $\sin\alpha = -\dfrac{v}{A\omega}$; since $\cos^2\alpha + \sin^2\alpha = 1$, it follows that
$$
\frac{x^2}{A^2} + \frac{v^2}{A^2\omega^2} = 1,
\qquad\text{hence}\qquad
|v| = \omega\sqrt{A^2 - x^2} .
$$
The formula gives the magnitude of the velocity at every position without knowing the instant; the direction depends on the part of the oscillation the particle is traveling. For $A = 0.10\,\mathrm{m}$ and $\omega = 4\,\mathrm{rad/s}$, at the position $x = 0.06\,\mathrm{m}$ we have $|v| = 4 \cdot 0.08\,\mathrm{m/s} = 0.32\,\mathrm{m/s}$.
:::

:::osservazione{#moto-circolare-e-armonico titolo="Harmonic motion and uniform circular motion"}
Let $P$ be a point moving in uniform circular motion, with angular velocity $\omega$, along the circle with center $O$ and radius $A$, and let $\omega t + \varphi$ be the angle that $\overrightarrow{OP}$ forms with the $x$-axis at the instant $t$. The projection $Q$ of $P$ onto the $x$-axis has abscissa $A\cos(\omega t + \varphi)$, so it moves in simple harmonic motion. The angular frequency of the harmonic motion is the angular velocity of the circular motion, and the phase is the angle that locates $P$ on the circle. The acceleration is also recovered, since the centripetal acceleration of $P$ has magnitude $\omega^2 A$ and points toward $O$, and therefore its component along $x$ is $-\omega^2 A\cos(\omega t + \varphi) = -\omega^2 x$. For uniform circular motion see the topic on motion in the plane.

::grafico{curve="2*cos(t),2*sin(t),0,6.29" vettori="0,0,1.414,1.414,A" segmenti="1.414,1.414,1.414,0" punti="1.414,1.414,pieno,P;1.414,0,pieno,Q" etichette="0.45,0.18,ωt + φ" xmin=-2.8 xmax=2.8 ymin=-2.6 ymax=2.6 uguale=1 titolo="The point $P$ travels around the circle of radius $A$ with angular velocity $\omega$; its projection $Q$ onto the $x$-axis has abscissa $A\cos(\omega t + \varphi)$"}

:::

## Equation of harmonic motion

:::richiamo{titolo="Second-order linear equations with constant coefficients"}
The equation $y'' + a\,y' + b\,y = 0$, with $a, b \in \mathbb{R}$, has characteristic equation $r^2 + ar + b = 0$, and the general solution depends on the roots:

- distinct real roots $r_1, r_2$: $y = C_1 e^{r_1 t} + C_2 e^{r_2 t}$;
- double real root $r$: $y = (C_1 + C_2 t)\,e^{r t}$;
- complex roots $\lambda \pm i\mu$: $y = e^{\lambda t}\bigl(C_1\cos(\mu t) + C_2\sin(\mu t)\bigr)$.

Given $y(t_0)$ and $y'(t_0)$, the initial value problem has one and only one solution. See the topic on differential equations in Mathematical Analysis 1.
:::

::::teorema{#equazione-del-moto-armonico titolo="Equation of harmonic motion"}
Let $\omega > 0$ and denote by $\dot{x} = \dfrac{dx}{dt}$ and $\ddot{x} = \dfrac{d^2 x}{dt^2}$ the first and second derivatives with respect to time. The solutions of the differential equation
$$
\ddot{x} = -\omega^2 x
$$
are *exactly* the functions $x(t) = A\cos(\omega t + \varphi)$ with $A \geq 0$ and $\varphi \in \mathbb{R}$. The theorem is used as follows. If Newton's second law, applied to a system, leads to an equation of the form $\ddot{x} = -\omega^2 x$, then the system performs **harmonic motion** with angular frequency equal to the square root of the coefficient of $x$ and period $T = \dfrac{2\pi}{\omega}$. For example, $\ddot{x} = -25\,x$ describes a harmonic motion with $\omega = 5\,\mathrm{rad/s}$ and $T = 1.26\,\mathrm{s}$. The same conclusion holds for any quantity, such as an angle, that satisfies an equation of this form.

:::dimostrazione
The equation can be written $\ddot{x} + \omega^2 x = 0$ and is a second-order linear equation with constant coefficients. The characteristic equation $r^2 + \omega^2 = 0$ has the complex conjugate roots $\pm i\omega$, so the general solution is $x(t) = C_1\cos(\omega t) + C_2\sin(\omega t)$ with $C_1, C_2 \in \mathbb{R}$. Set $A = \sqrt{C_1^2 + C_2^2}$. If $A > 0$, the point $\left(\dfrac{C_1}{A}, -\dfrac{C_2}{A}\right)$ lies on the circle of radius $1$, therefore there exists $\varphi$ such that $\cos\varphi = \dfrac{C_1}{A}$ and $\sin\varphi = -\dfrac{C_2}{A}$. By the cosine addition formula
$$
\begin{aligned}
A\cos(\omega t + \varphi) &= A\cos\varphi\cos(\omega t) - A\sin\varphi\sin(\omega t) \\[6pt]
&= C_1\cos(\omega t) + C_2\sin(\omega t) ,
\end{aligned}
$$
so every solution has the form in the statement; if $A = 0$ the solution is the zero solution. Conversely, by the theorem on **velocity and acceleration in harmonic motion**, every function $A\cos(\omega t + \varphi)$ has second derivative $-\omega^2 A\cos(\omega t + \varphi)$, and therefore it satisfies the equation.
:::
::::

:::teorema{#condizioni-iniziali titolo="Amplitude and phase from the initial conditions"}
If at the instant $t = 0$ the particle is at $x_0$ with velocity $v_0$, the amplitude and the initial phase of the harmonic motion with angular frequency $\omega$ are determined by
$$
A = \sqrt{x_0^2 + \frac{v_0^2}{\omega^2}},
\qquad
\begin{cases}
\cos\varphi = \dfrac{x_0}{A} \\[10pt]
\sin\varphi = -\dfrac{v_0}{A\omega}
\end{cases}
$$
The formulas follow by imposing $x(0) = A\cos\varphi = x_0$ and $v(0) = -A\omega\sin\varphi = v_0$, and adding the squares of the two equalities. The two conditions on $\varphi$ must be satisfied *together*; indeed, the tangent alone, $\tan\varphi = -\dfrac{v_0}{\omega x_0}$, determines $\varphi$ only up to $\pi$, and the sign of $\cos\varphi$ selects the correct value. A body released from rest at the position $x_0 > 0$ has $A = x_0$ and $\varphi = 0$; a body launched from the equilibrium position with velocity $v_0 > 0$ has $A = \dfrac{v_0}{\omega}$ and $\varphi = -\dfrac{\pi}{2}$.
:::

## Mass-spring oscillator

::::teorema{#massa-molla titolo="Mass-spring oscillator"}
A body of mass $m$, attached to an ideal spring (of negligible mass) with spring constant $k$, moves on a smooth horizontal plane; the $x$-axis is directed along the spring, with origin at the position where the spring has its rest length. Then the body performs simple harmonic motion with
$$
\omega = \sqrt{\frac{k}{m}},
\qquad
T = 2\pi\sqrt{\frac{m}{k}} .
$$
The period depends only on the mass and the spring constant and does *not* depend on the amplitude, so large oscillations and small oscillations last the same time (**isochronism**). The amplitude and phase instead depend on the initial conditions. A body of $0.25\,\mathrm{kg}$ attached to a spring with $k = 100\,\mathrm{N/m}$ oscillates with $\omega = 20\,\mathrm{rad/s}$ and $T = 0.314\,\mathrm{s}$, whether it is displaced by $1\,\mathrm{cm}$ or by $5\,\mathrm{cm}$.

:::dimostrazione
The forces acting on the body are the weight, the normal force of the plane and the elastic force. The plane is smooth, so there is no friction; the motion is horizontal, so the weight and the normal force balance. Along $x$ only the elastic force remains, which by Hooke's law is $F_x = -kx$ (see the topic on Newton's laws). Newton's second law along $x$ gives
$$
m\ddot{x} = -kx,
\qquad\text{that is}\qquad
\ddot{x} = -\frac{k}{m}\,x .
$$
The equation has the form $\ddot{x} = -\omega^2 x$ with $\omega^2 = \dfrac{k}{m}$, therefore by the **equation of harmonic motion** the motion is harmonic with $\omega = \sqrt{\dfrac{k}{m}}$ and period $T = \dfrac{2\pi}{\omega} = 2\pi\sqrt{\dfrac{m}{k}}$.
:::
::::

::::teorema{#molla-verticale titolo="Vertical spring"}
A body of mass $m$ hangs from an ideal vertical spring with spring constant $k$. At the equilibrium position the spring is stretched by
$$
\Delta\ell = \frac{mg}{k} ,
$$
and about that position the body performs harmonic motion with the same angular frequency $\omega = \sqrt{\dfrac{k}{m}}$ as the horizontal spring. The weight shifts the center of the oscillation and leaves the period unchanged. Since $\dfrac{k}{m} = \dfrac{g}{\Delta\ell}$, the period can also be obtained from the static extension alone, $T = 2\pi\sqrt{\dfrac{\Delta\ell}{g}}$; a spring that stretches by $10\,\mathrm{cm}$ under the weight of the body gives $T = 0.634\,\mathrm{s}$.

:::dimostrazione
Orient the $x$-axis vertically downward, with origin at the position of the free end of the spring at rest. The forces acting on the body are the weight $mg$, pointing downward, and the elastic force $-kx$, so Newton's second law gives $m\ddot{x} = mg - kx$. At equilibrium the acceleration is zero, therefore $k\,\Delta\ell = mg$. With the variable $s = x - \Delta\ell$, which measures the displacement from the equilibrium position, we have $\ddot{s} = \ddot{x}$ and
$$
m\ddot{s} = mg - k\,(s + \Delta\ell) = -ks ,
$$
because $mg - k\,\Delta\ell = 0$. The equation for $s$ coincides with that of the horizontal spring, so $s$ varies in harmonic motion with $\omega = \sqrt{\dfrac{k}{m}}$.
:::
::::

:::teorema{#molle-in-serie-e-in-parallelo titolo="Springs in parallel and in series"}
Two ideal springs with constants $k_1$ and $k_2$ are equivalent to a single spring with constant

- $k_p = k_1 + k_2$ if they are in parallel, that is, they have the same extension;
- $k_s = \dfrac{k_1 k_2}{k_1 + k_2}$, that is, $\dfrac{1}{k_s} = \dfrac{1}{k_1} + \dfrac{1}{k_2}$, if they are in series, that is, connected one after the other.

In parallel, for the same extension $x$, the forces of the two springs add up, so $F = k_1 x + k_2 x$. In series the force $F$ is the same in the two springs and it is the extensions that add up, so $x = \dfrac{F}{k_1} + \dfrac{F}{k_2}$. The period of the oscillator is then computed with the equivalent constant. Two identical springs with constant $k$ give $2k$ in parallel and $\dfrac{k}{2}$ in series, and with the same body the two periods are in the ratio $1 : 2$.
:::

## Energy of harmonic motion

::::teorema{#energia-oscillatore titolo="Energy of the harmonic oscillator"}
In the mass-spring oscillator, with $x(t) = A\cos(\omega t + \varphi)$ and $\omega^2 = \dfrac{k}{m}$, the kinetic energy $K = \dfrac{1}{2}mv^2$ and the elastic potential energy $U = \dfrac{1}{2}kx^2$ are
$$
K = \frac{1}{2}kA^2\sin^2(\omega t + \varphi),
\qquad
U = \frac{1}{2}kA^2\cos^2(\omega t + \varphi),
$$
and their sum is constant:
$$
E = K + U = \frac{1}{2}kA^2 = \frac{1}{2}m\omega^2 A^2 .
$$
The **mechanical energy** is proportional to the square of the amplitude. During the motion the energy passes from the potential form, which is all the energy at the extremes $x = \pm A$, to the kinetic form, which is all the energy when passing through equilibrium, where $\dfrac{1}{2}mv_{\max}^2 = \dfrac{1}{2}kA^2$. With $k = 200\,\mathrm{N/m}$ and $A = 0.050\,\mathrm{m}$ the energy is $0.25\,\mathrm{J}$.

::grafico{f="x^2;4" punti="-2,4,pieno,−A;2,4,pieno,A;1,1,pieno" segmenti="1,0,1,1" vettori="1,1,1,4" etichette="1.15,2.4,K;1.15,0.35,U;-2.9,4.35,E" xmin=-3 xmax=3 ymin=-0.6 ymax=5.6 nomi="x,E" titolo="The potential energy $U = \dfrac{1}{2}kx^2$ is a parabola; the line $E = \dfrac{1}{2}kA^2$ meets it at $x = \pm A$, and at every position the kinetic energy is the distance $K = E - U$ between the line and the parabola"}

Over time $K$ and $U$ oscillate with period $\dfrac{T}{2}$, half the period of the motion, and over one period they have the same average value $\dfrac{E}{2}$, as the graph shows.

::grafico{f="4*cos(pi*x/2)^2;4*sin(pi*x/2)^2;4" xmin=-0.4 xmax=8.6 ymin=-0.6 ymax=5 nomi="t,E" titolo="With $T = 4$: potential energy $U(t)$ (colored), kinetic energy $K(t)$ (dashed) and their constant sum $E$ (red)"}

:::dimostrazione
By the theorem on velocity and acceleration in harmonic motion $v = -A\omega\sin(\omega t + \varphi)$, so
$$
K = \frac{1}{2}mA^2\omega^2\sin^2(\omega t + \varphi) = \frac{1}{2}kA^2\sin^2(\omega t + \varphi) ,
$$
where we used $m\omega^2 = k$. Substituting $x(t)$ into $U = \dfrac{1}{2}kx^2$ gives the second formula, and adding, since $\sin^2\alpha + \cos^2\alpha = 1$, we obtain $E = \dfrac{1}{2}kA^2$. The result is a case of the **conservation of mechanical energy**, since the only force that does work is the elastic force, which is conservative, while the weight and the normal force are perpendicular to the displacement; see the topic on work and energy.
:::
::::

::::teorema{#piccole-oscillazioni titolo="Small oscillations about a minimum of the potential energy"}
A point particle of mass $m$ moves along the $x$-axis subject to a conservative force with potential energy $U(x)$ twice continuously differentiable. If $x_e$ is a minimum point of $U$ with $U''(x_e) > 0$, for small displacements from $x_e$ the motion is approximately harmonic with
$$
\omega = \sqrt{\frac{U''(x_e)}{m}} .
$$
The theorem extends the mass-spring oscillator to every position of stable equilibrium, and the number $U''(x_e)$ plays the role of the spring constant. For a mass of $2.0\,\mathrm{kg}$ with potential energy $U(x) = x^4 - 2x^2$ ($x$ in meters, $U$ in joules) the minima are at $x_e = \pm 1\,\mathrm{m}$, where $U''(x_e) = 12 - 4 = 8\,\mathrm{N/m}$, so $\omega = 2.0\,\mathrm{rad/s}$.

:::dimostrazione
Since $x_e$ is an interior minimum point, $U'(x_e) = 0$; hence the force $F(x) = -U'(x)$ is zero at $x_e$, which is an equilibrium position. The first-order Taylor formula for the function $U'$ about $x_e$ (see the topic on derivatives in Mathematical Analysis 1) gives
$$
\begin{aligned}
F(x) &= -U'(x_e) - U''(x_e)\,(x - x_e) + o(x - x_e) \\[6pt]
&= -U''(x_e)\,(x - x_e) + o(x - x_e) .
\end{aligned}
$$
For small displacements the remainder is neglected. With the variable $s = x - x_e$ Newton's second law then becomes $m\ddot{s} = -U''(x_e)\,s$, which is the **equation of harmonic motion** with $\omega^2 = \dfrac{U''(x_e)}{m}$. For potential energy curves see the topic on work and energy.
:::
::::

## Simple pendulum

:::definizione{#pendolo-semplice titolo="Simple pendulum"}
The **simple pendulum** is a point particle of mass $m$ hanging from an inextensible string, of negligible mass and length $\ell$, whose other end is fixed at a point $O$; the particle moves in a vertical plane and air resistance is negligible. The position is described by the angle $\theta$ that the string forms with the vertical through $O$, positive in a fixed direction. The particle travels along an arc of a circle of radius $\ell$, and its arc-length coordinate, measured from the lowest point, is $s = \ell\theta$ with $\theta$ in radians. The model describes a small, heavy body hanging from a light string, such as a metal sphere hanging from a thin thread. For the pendulum the period is denoted by $T_0$, because the letter $T$ denotes the magnitude of the tension in the string.
:::

::::teorema{#periodo-del-pendolo titolo="Period of the pendulum for small oscillations"}
For a simple pendulum of length $\ell$ the angle satisfies the equation
$$
\ddot{\theta} = -\frac{g}{\ell}\sin\theta .
$$
For small oscillations, that is, for angular amplitudes such that $\sin\theta \approx \theta$, the motion is harmonic with
$$
\omega = \sqrt{\frac{g}{\ell}},
\qquad
T_0 = 2\pi\sqrt{\frac{\ell}{g}} .
$$
The period does *not* depend on the mass and, in the limit of small oscillations, not on the amplitude either. The formula serves both to compute the period and, by measuring $T_0$ and $\ell$, to obtain the gravitational acceleration $g = \dfrac{4\pi^2 \ell}{T_0^2}$. A pendulum $1.00\,\mathrm{m}$ long has $T_0 = 2.01\,\mathrm{s}$.

::grafico{assi=0 curve="3.5*sin(t),-3.5*cos(t),-0.6,0.6" linee="-1,0 1.2,0;0,0 1.75,-3.031" segmenti="0,0,0,-3.9" vettori="1.75,-3.031,0.75,-1.299,T;1.75,-3.031,1.75,-5.431,mg;1.75,-3.031,0.711,-3.631;1.75,-3.031,2.789,-4.831,mg cosθ" punti="0,0,pieno,O;1.75,-3.031,pieno" etichette="0.12,-1.5,θ;-0.15,-3.95,mg sinθ" xmin=-1.6 xmax=4 ymin=-5.9 ymax=0.6 uguale=1 titolo="Forces on the pendulum: the tension $\vec{T}$ along the string and the weight $m\vec{g}$, which resolves into $mg\cos\theta$ along the string and $mg\sin\theta$ along the tangent to the path, toward the equilibrium position"}

:::dimostrazione
The forces acting on the particle are the weight $m\vec{g}$ and the tension of the string $\vec{T}$. The tension is directed along the string, so it is perpendicular to the path and has no tangential component. The component of the weight along the tangent, in the direction in which $\theta$ increases, is $-mg\sin\theta$. The tangential acceleration of a motion along a circle of radius $\ell$ is $\ddot{s} = \ell\ddot{\theta}$, therefore Newton's second law along the tangent gives
$$
m\ell\ddot{\theta} = -mg\sin\theta,
\qquad\text{that is}\qquad
\ddot{\theta} = -\frac{g}{\ell}\sin\theta .
$$
The mass cancels because it appears both in the weight and in the product of mass and acceleration. For small angles $\sin\theta$ is replaced by $\theta$, since $\sin\theta = \theta + o(\theta)$ as $\theta \to 0$, and we obtain $\ddot{\theta} = -\dfrac{g}{\ell}\,\theta$. By the **equation of harmonic motion** the angle oscillates with $\omega = \sqrt{\dfrac{g}{\ell}}$, so $T_0 = 2\pi\sqrt{\dfrac{\ell}{g}}$.
:::
::::

:::osservazione{#approssimazione-piccoli-angoli titolo="Validity of the approximation"}
The approximation $\sin\theta \approx \theta$ requires the angle in radians. At $10^\circ$, that is, $0.1745\,\mathrm{rad}$, we have $\sin\theta = 0.1736$, with a relative difference of $0.5\%$; therefore the period formula is accurate for amplitudes up to about ten degrees. For larger amplitudes the motion remains periodic but is no longer harmonic, and the period increases with the amplitude $\theta_0$; the first correction term gives
$$
T_0 \approx 2\pi\sqrt{\frac{\ell}{g}}\left(1 + \frac{\theta_0^2}{16}\right) .
$$
:::

:::osservazione{#tensione-del-filo titolo="Tension in the string"}
Along the string the component of the weight is $mg\cos\theta$, pointing outward, and the acceleration is the centripetal acceleration $\dfrac{v^2}{\ell}$, pointing toward $O$. Newton's second law along the string gives
$$
T - mg\cos\theta = m\,\frac{v^2}{\ell},
\qquad\text{hence}\qquad
T = mg\cos\theta + m\,\frac{v^2}{\ell} .
$$
The tension is greatest at the lowest point, where $\cos\theta = 1$ and the speed is greatest, and smallest at the extremes, where $v = 0$. For a pendulum that starts from rest at the angle $\theta_0$, the conservation of mechanical energy gives the speed at the lowest point, $v^2 = 2g\ell\,(1 - \cos\theta_0)$. For the centripetal force see the topic on Newton's laws.
:::

:::osservazione{#pendolo-in-un-sistema-accelerato titolo="Pendulum in an accelerated frame"}
In an elevator moving up with constant acceleration $a$, in the elevator's frame the particle is also acted on by the fictitious force $-m\vec{a}$, pointing downward, which adds to the weight. The pendulum therefore behaves as in a gravitational field of strength $g + a$, and the period for small oscillations becomes
$$
T_0 = 2\pi\sqrt{\frac{\ell}{g + a}} ,
$$
shorter than with the elevator at rest. If the elevator has acceleration $a < g$ pointing downward, $g - a$ is written in place of $g + a$. For fictitious forces see the topic on Newton's laws.
:::

## Physical pendulum and torsion pendulum

:::richiamo{titolo="Rotational equation of motion and parallel-axis theorem"}
For a rigid body rotating about a fixed axis we have $I\ddot{\theta} = M$, where $I$ is the moment of inertia about the axis and $M$ is the torque of the external forces about the axis. The moment of inertia about an axis at distance $d$ from the center of mass is $I = I_{\mathrm{cm}} + md^2$, where $I_{\mathrm{cm}}$ is the one about the parallel axis through the center of mass. See the topic on rigid body dynamics.
:::

::::teorema{#pendolo-fisico titolo="Physical pendulum"}
A **physical pendulum** is a rigid body of mass $m$ free to rotate without friction about a fixed horizontal axis that does not pass through its center of mass $G$. Let $I$ be the moment of inertia about the axis and $d$ the distance of $G$ from the axis. For small oscillations the motion is harmonic with
$$
\omega = \sqrt{\frac{mgd}{I}},
\qquad
T = 2\pi\sqrt{\frac{I}{mgd}} .
$$
The physical pendulum oscillates with the same period as a simple pendulum of length $\ell_r = \dfrac{I}{md}$, called the **equivalent length**. For a simple pendulum of length $\ell$ we have $I = m\ell^2$ and $d = \ell$, and the formula gives back the period $2\pi\sqrt{\dfrac{\ell}{g}}$ of the simple pendulum. For a uniform rod of length $L$ suspended from one end we have $I = \dfrac{1}{3}mL^2$ and $d = \dfrac{L}{2}$, so $T = 2\pi\sqrt{\dfrac{2L}{3g}}$; with $L = 1.00\,\mathrm{m}$ we obtain $T = 1.64\,\mathrm{s}$, compared with the $2.01\,\mathrm{s}$ of the simple pendulum of the same length.

:::dimostrazione
Let $\theta$ be the angle between the vertical through the axis and the segment joining the axis to $G$. The external forces are the weight, applied at $G$, and the reaction of the axis, which has zero torque because it is applied on the axis. The weight has lever arm $d\sin\theta$ and tends to bring the body back to the position $\theta = 0$, so its torque is $M = -mgd\sin\theta$. The **rotational equation of motion** gives
$$
I\ddot{\theta} = -mgd\sin\theta .
$$
For small oscillations $\sin\theta \approx \theta$, therefore $\ddot{\theta} = -\dfrac{mgd}{I}\,\theta$, which is the equation of harmonic motion with $\omega^2 = \dfrac{mgd}{I}$.
:::
::::

:::osservazione{#pendolo-di-torsione titolo="Torsion pendulum"}
A rigid body hanging from a vertical wire and free to rotate about the axis of the wire is subject to a restoring torque proportional to the angle of twist, $M = -\kappa\theta$, where $\kappa$ is the torsion constant of the wire, in $\mathrm{N\cdot m/rad}$. The rotational equation of motion gives $I\ddot{\theta} = -\kappa\,\theta$, so the motion is harmonic with
$$
T = 2\pi\sqrt{\frac{I}{\kappa}} .
$$
Here the approximation $\sin\theta \approx \theta$ is not needed, and the formula holds as long as the torque remains proportional to the angle. Measuring the period with a body of known moment of inertia gives $\kappa$; with the same wire unknown moments of inertia are then measured.
:::

## Damped oscillations

:::definizione{#oscillatore-smorzato titolo="Damped oscillator"}
A mass-spring oscillator moving through a fluid at low speed is also subject to a viscous force $\vec{F}_v = -b\,\vec{v}$, opposite to the velocity, with $b > 0$ the damping coefficient in $\mathrm{kg/s}$. Newton's second law along $x$ gives the equation of the **damped oscillator**
$$
m\ddot{x} + b\dot{x} + kx = 0,
\qquad\text{that is}\qquad
\ddot{x} + 2\gamma\dot{x} + \omega_0^2 x = 0,
$$
where $\omega_0 = \sqrt{\dfrac{k}{m}}$ is the **natural angular frequency**, the one the system would have without damping, and $\gamma = \dfrac{b}{2m}$ is the damping constant, in $\mathrm{s^{-1}}$. The factor $2$ in front of $\gamma$ simplifies the roots of the characteristic equation. For $m = 0.50\,\mathrm{kg}$, $k = 50\,\mathrm{N/m}$ and $b = 1.0\,\mathrm{kg/s}$ we have $\omega_0 = 10\,\mathrm{rad/s}$ and $\gamma = 1.0\,\mathrm{s^{-1}}$.
:::

::::teorema{#regimi-di-smorzamento titolo="Regimes of the damped oscillator"}
The solutions of $\ddot{x} + 2\gamma\dot{x} + \omega_0^2 x = 0$ depend on the comparison between $\gamma$ and $\omega_0$:

- weak damping (underdamping), $\gamma < \omega_0$: $x(t) = A_0\,e^{-\gamma t}\cos(\omega_s t + \varphi)$, with $\omega_s = \sqrt{\omega_0^2 - \gamma^2}$;
- critical damping, $\gamma = \omega_0$: $x(t) = (C_1 + C_2 t)\,e^{-\gamma t}$;
- strong damping (overdamping), $\gamma > \omega_0$: $x(t) = C_1 e^{r_1 t} + C_2 e^{r_2 t}$, with $r_{1,2} = -\gamma \pm \sqrt{\gamma^2 - \omega_0^2}$ both negative.

In the first case the body oscillates with angular frequency $\omega_s$, smaller than $\omega_0$, and with amplitude $A_0 e^{-\gamma t}$ decreasing exponentially; in each interval of duration $\dfrac{1}{\gamma}$ the amplitude is reduced by a factor $e$. In the other two cases the body returns to equilibrium **without oscillating**, and among these motions the fastest return is the one with critical damping.

::grafico{f="exp(-0.25*x)*cos(2*x);exp(-0.25*x);-exp(-0.25*x)" xmin=-0.4 xmax=14 ymin=-1.2 ymax=1.2 nomi="t,x" titolo="Weak damping: $x(t) = e^{-\gamma t}\cos(\omega_s t)$ oscillates between the curves $\pm e^{-\gamma t}$ (dashed and red), with amplitude reduced by a factor $e$ every $\dfrac{1}{\gamma}$"}

::grafico{f="exp(-0.5*x)*(cos(1.9365*x)+0.2582*sin(1.9365*x));(1+2*x)*exp(-2*x);1.0774*exp(-0.5359*x)-0.0774*exp(-7.4641*x)" xmin=-0.3 xmax=8 ymin=-0.8 ymax=1.3 nomi="t,x" titolo="With $\omega_0 = 2$, starting from rest at $x = 1$: weak damping with $\gamma = \dfrac{1}{2}$ (colored), critical with $\gamma = 2$ (dashed), strong with $\gamma = 4$ (red)"}

:::dimostrazione
The characteristic equation $r^2 + 2\gamma r + \omega_0^2 = 0$ has the roots $r = -\gamma \pm \sqrt{\gamma^2 - \omega_0^2}$. If $\gamma > \omega_0$ the roots are real and distinct and, since $\sqrt{\gamma^2 - \omega_0^2} < \gamma$, they are both negative. If $\gamma = \omega_0$ there is the double root $-\gamma$. If $\gamma < \omega_0$ the roots are $-\gamma \pm i\omega_s$, so the general solution is $e^{-\gamma t}\bigl(C_1\cos(\omega_s t) + C_2\sin(\omega_s t)\bigr)$, which can be written $A_0 e^{-\gamma t}\cos(\omega_s t + \varphi)$ with the same step as in the proof of the **equation of harmonic motion**.
:::
::::

:::osservazione{#energia-oscillatore-smorzato titolo="Dissipated energy and quality factor"}
Differentiating $E = \dfrac{1}{2}mv^2 + \dfrac{1}{2}kx^2$ and using the equation of motion we obtain $\dfrac{dE}{dt} = v\,(m\ddot{x} + kx) = -b\,v^2 \leq 0$, so the mechanical energy decreases because of the work of the viscous force. With weak damping and $\gamma$ much smaller than $\omega_0$ the energy is that of a harmonic oscillator with amplitude $A_0 e^{-\gamma t}$, that is,
$$
E(t) \approx \frac{1}{2}kA_0^2\,e^{-2\gamma t} ,
$$
and it decreases with constant $2\gamma$, twice that of the amplitude. The **quality factor** $Q = \dfrac{\omega_0}{2\gamma}$ measures how weak the damping is; it is the number of radians through which the phase advances while the energy is reduced by a factor $e$. If the amplitude goes from $A_1$ to $A_2$ in an interval $\Delta t$, then
$$
\gamma = \frac{1}{\Delta t}\ln\frac{A_1}{A_2} ,
$$
and in this way $\gamma$ is measured from recorded oscillations.
:::

## Forced oscillations and resonance

:::definizione{#oscillatore-forzato titolo="Forced oscillator"}
A damped oscillator also subject to a sinusoidal external force $F(t) = F_0\cos(\Omega t)$ is a **forced oscillator**; the angular frequency $\Omega$ of the driving force is in general different from the natural angular frequency $\omega_0$. The equation of motion is
$$
m\ddot{x} + b\dot{x} + kx = F_0\cos(\Omega t),
\qquad\text{that is}\qquad
\ddot{x} + 2\gamma\dot{x} + \omega_0^2 x = \frac{F_0}{m}\cos(\Omega t) .
$$
It is a nonhomogeneous linear equation, so its general solution is the sum of the general solution of the associated homogeneous equation, which describes the damped motion, and of a particular solution.
:::

:::teorema{#regime-stazionario titolo="Steady state"}
For $\gamma > 0$ every solution of the equation of the forced oscillator, after a transient, coincides with the motion
$$
x(t) = A(\Omega)\cos(\Omega t - \delta),
\qquad
A(\Omega) = \frac{F_0}{m\sqrt{(\omega_0^2 - \Omega^2)^2 + 4\gamma^2\Omega^2}},
$$
where the phase lag $\delta \in (0, \pi)$ satisfies $\tan\delta = \dfrac{2\gamma\Omega}{\omega_0^2 - \Omega^2}$. The body oscillates at the angular frequency of the driving force, with an amplitude that depends on $\Omega$ and lagging behind the force. The transient is the solution of the homogeneous equation, which tends to zero exponentially (like $e^{-\gamma t}$ in the case of weak damping); for this reason the **steady state** does not depend on the initial conditions. The particular solution is found with the method of undetermined coefficients, in the form $a\cos(\Omega t) + c\sin(\Omega t)$ (see the topic on differential equations in Mathematical Analysis 1). As $\Omega \to 0$ the amplitude tends to $\dfrac{F_0}{m\omega_0^2} = \dfrac{F_0}{k}$, the static extension produced by the force $F_0$, and as $\Omega \to +\infty$ it tends to $0$. If the damping is negligible we set $\gamma = 0$, and for $\Omega \neq \omega_0$ the particular solution has amplitude $\dfrac{F_0}{m\,|\omega_0^2 - \Omega^2|}$.
:::

::::teorema{#risonanza titolo="Resonance"}
If $\gamma < \dfrac{\omega_0}{\sqrt{2}}$, the amplitude of the steady state is maximum for
$$
\Omega_r = \sqrt{\omega_0^2 - 2\gamma^2},
\qquad
A_{\max} = \frac{F_0}{2m\gamma\sqrt{\omega_0^2 - \gamma^2}} .
$$
The phenomenon is called **resonance**. With small damping $\Omega_r$ is very close to $\omega_0$ and $A_{\max} \approx \dfrac{F_0}{2m\gamma\omega_0} = Q\,\dfrac{F_0}{k}$, so at resonance the driving force produces an amplitude about $Q$ times larger than the static displacement. As $\gamma$ decreases the peak becomes higher and narrower. If $\gamma \geq \dfrac{\omega_0}{\sqrt{2}}$ the amplitude decreases as $\Omega$ increases and there is no peak.

::grafico{f="16/sqrt((16-x^2)^2+0.64*x^2);16/sqrt((16-x^2)^2+4*x^2);16/sqrt((16-x^2)^2+16*x^2)" asintoti="x=4" xmin=-0.3 xmax=8 ymin=-0.4 ymax=5.8 nomi="Ω,A" titolo="Amplitude $A(\Omega)$ for $\omega_0 = 4$ and $\dfrac{F_0}{k} = 1$, with $\gamma = 0.4$ (colored), $\gamma = 1$ (dashed), $\gamma = 2$ (red): the peak rises and moves closer to $\omega_0$ as $\gamma$ decreases"}

:::dimostrazione
The amplitude is maximum where the radicand in the denominator is minimum. Setting $u = \Omega^2 \geq 0$, we study $h(u) = (\omega_0^2 - u)^2 + 4\gamma^2 u$, whose derivative is $h'(u) = 2u - 2\omega_0^2 + 4\gamma^2$. The derivative is increasing and vanishes at $u = \omega_0^2 - 2\gamma^2$, which is therefore the minimum point of $h$; the point is admissible, that is, positive, if and only if $\gamma^2 < \dfrac{\omega_0^2}{2}$. Substituting,
$$
h(\omega_0^2 - 2\gamma^2) = 4\gamma^4 + 4\gamma^2(\omega_0^2 - 2\gamma^2) = 4\gamma^2(\omega_0^2 - \gamma^2) ,
$$
which gives the formula for $A_{\max}$. If instead $\gamma^2 \geq \dfrac{\omega_0^2}{2}$, we have $h'(u) > 0$ for every $u > 0$, so $h$ is increasing and the amplitude is decreasing.
:::
::::

:::osservazione{#risonanza-senza-smorzamento titolo="Resonance without damping"}
If $\gamma = 0$ and the driving force has exactly the natural angular frequency, $\Omega = \omega_0$, the equation $\ddot{x} + \omega_0^2 x = \dfrac{F_0}{m}\cos(\omega_0 t)$ has the particular solution
$$
x_p(t) = \frac{F_0}{2m\omega_0}\,t\sin(\omega_0 t) ,
$$
which is obtained with the resonance rule of the method of undetermined coefficients. The amplitude grows *linearly* in time, because the driving force transfers energy to the system in every cycle and no force dissipates it. In real systems a small damping limits the growth to the value $A_{\max}$ of the theorem on resonance.
:::
