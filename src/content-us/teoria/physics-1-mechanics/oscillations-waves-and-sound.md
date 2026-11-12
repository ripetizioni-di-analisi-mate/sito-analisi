---
titolo: Oscillations, waves and sound
sommario: How a linear restoring force produces simple harmonic motion, how the mass-spring system, the pendulum and the damped and driven oscillator follow from it, and how the same equation governs waves on a string, standing waves and sound.
---

## Simple harmonic motion

:::definizione{#periodic-motion titolo="Period, frequency and angular frequency"}
A motion is **periodic** when the position of the body repeats itself after a fixed time interval. The smallest such interval is the **period** $T$, in seconds; the **frequency** $f = \dfrac{1}{T}$ is the number of cycles per unit time, in hertz, $1\,\mathrm{Hz} = 1\,\mathrm{s^{-1}}$; and the **angular frequency** is $\omega = 2\pi f$, in $\mathrm{rad/s}$, since one cycle corresponds to a phase advance of $2\pi$.

Any one of the three determines the other two. The angular frequency appears in the equations of motion, while the period and the frequency are the quantities measured in the laboratory.
:::

:::definizione{#simple-harmonic-motion titolo="Simple harmonic motion"}
A particle of mass $m$ moving along the $x$ axis is in **simple harmonic motion** when the resultant force on it is a **restoring force** proportional to the displacement from a fixed point taken as the origin:
$$
F_x = -k\,x ,
\qquad k > 0 ,
$$
with $k$ measured in $\mathrm{N/m}$. The minus sign states that the force points towards the origin whatever the sign of $x$, therefore the origin is a position of stable equilibrium.

Newton's second law applied to this force gives $m\ddot{x} = -kx$, that is,
$$
\ddot{x} = -\omega^2 x
\qquad\text{with}\qquad
\omega = \sqrt{\frac{k}{m}} ,
$$
the **equation of simple harmonic motion**. Every system whose restoring force is linear in the displacement obeys this single equation, which is why the mass-spring system, the pendulum and the vibrating string are treated by the same formulas.
:::

:::richiamo{titolo="Linear equation with constant coefficients"}
The equation $\ddot{x} + \omega^2 x = 0$ is linear, of the second order and with constant coefficients, hence its general solution is a combination of $\cos\omega t$ and $\sin\omega t$ with two arbitrary constants, fixed by the initial position and the initial velocity. Such equations are treated in the Calculus sequence.
:::

::::teorema{#shm-solution titolo="Solution of the equation of simple harmonic motion"}
Let $x(t)$ satisfy $\ddot{x} = -\omega^2 x$ with $x(0) = x_0$ and $\dot{x}(0) = v_0$. Then
$$
x(t) = A\cos(\omega t + \varphi) ,
\qquad
A = \sqrt{x_0^2 + \frac{v_0^2}{\omega^2}} ,
\qquad
\tan\varphi = -\frac{v_0}{\omega x_0} .
$$

:::dimostrazione
Differentiating $x = A\cos(\omega t + \varphi)$ twice gives $\ddot{x} = -\omega^2 A\cos(\omega t + \varphi) = -\omega^2 x$, hence the function satisfies the equation for every $A$ and every $\varphi$. It carries two arbitrary constants and the equation is of the second order, therefore it is the general solution.

The initial conditions give $x_0 = A\cos\varphi$ and $v_0 = -\omega A\sin\varphi$. Squaring both and adding them eliminates $\varphi$, since $\cos^2\varphi + \sin^2\varphi = 1$, and leaves $x_0^2 + \dfrac{v_0^2}{\omega^2} = A^2$. Dividing the second condition by the first eliminates $A$ and gives the stated value of $\tan\varphi$.
:::

Since $\omega$ depends only on $k$ and $m$, the period of a harmonic oscillator does not depend on the amplitude, a property called isochronism, and it is the reason a pendulum clock keeps time as its swing dies down.
::::

:::definizione{#amplitude-phase titolo="Amplitude, phase and phase constant"}
In $x(t) = A\cos(\omega t + \varphi)$ the constant $A > 0$ is the **amplitude**, the largest distance from the equilibrium position; the argument $\omega t + \varphi$ is the **phase**, in radians; and $\varphi$ is the **phase constant**, which fixes where in the cycle the motion starts. A body released from rest at $x = A$ has $v_0 = 0$, hence $\varphi = 0$ and $x = A\cos\omega t$.

::grafico{f="3*cos(2*x)" nomi="t,x" asintoti="y=3;y=-3" segmenti="0,3.5,3.1416,3.5" etichette="1.35,3.75,T;5.45,3.15,A;5.35,-3.5,−A" xmin=-0.6 xmax=7.3 ymin=-4.1 ymax=4.3 titolo="The graph of $x(t) = A\cos\omega t$ oscillates between $-A$ and $A$ with period $T = \dfrac{2\pi}{\omega}$"}
:::

::::teorema{#velocity-acceleration-shm titolo="Velocity and acceleration in simple harmonic motion"}
For $x(t) = A\cos(\omega t + \varphi)$,
$$
v(t) = -\omega A\sin(\omega t + \varphi) ,
\qquad
a(t) = -\omega^2 A\cos(\omega t + \varphi) = -\omega^2 x ,
$$
hence $v_{\max} = \omega A$ and $a_{\max} = \omega^2 A$, and the speed at the position $x$ satisfies
$$
|v| = \omega\sqrt{A^2 - x^2} .
$$

:::dimostrazione
The first two formulas are the derivative and the second derivative of $x(t)$, and the sine and the cosine have modulus at most $1$, therefore the maxima are the stated ones. For the last formula write $\cos(\omega t + \varphi) = \dfrac{x}{A}$ and use $\sin^2 + \cos^2 = 1$:
$$
v^2 = \omega^2 A^2 \sin^2(\omega t + \varphi) = \omega^2 A^2\left(1 - \frac{x^2}{A^2}\right) = \omega^2 (A^2 - x^2) .
$$
:::

The last formula gives the speed without knowing the instant, which is what most problems ask. The speed is largest at the equilibrium position and vanishes at $x = \pm A$, where the modulus of the acceleration is largest.
::::

## The mass-spring oscillator

:::teorema{#hookes-law titolo="Hooke's law"}
Within its range of elastic behaviour, a spring stretched or compressed by $x$ from its natural length exerts the force
$$
F_x = -k\,x ,
$$
where the **spring constant** $k$ is a property of the spring. The statement is an experimental law, established by measuring the elongation produced by known loads, and it holds as long as the deformation is small enough for the spring to return to its natural length.

The law is the standard source of a linear restoring force, hence a body attached to a spring performs simple harmonic motion. Hanging a known mass and reading the elongation at equilibrium gives $k = \dfrac{mg}{x}$.
:::

::::teorema{#spring-mass-frequency titolo="Period of the mass-spring oscillator"}
A body of mass $m$ attached to a spring of constant $k$ and free to slide on a frictionless horizontal surface oscillates with
$$
\omega = \sqrt{\frac{k}{m}} ,
\qquad
T = 2\pi\sqrt{\frac{m}{k}} ,
\qquad
f = \frac{1}{2\pi}\sqrt{\frac{k}{m}} .
$$

:::dimostrazione
The weight and the normal force are vertical and cancel, and the surface is frictionless, therefore the resultant force is the spring force alone. Newton's second law along the $x$ axis gives $m\ddot{x} = -kx$, the equation of simple harmonic motion with $\omega^2 = \dfrac{k}{m}$, and the period follows from $T = \dfrac{2\pi}{\omega}$.
:::

A stiffer spring raises the frequency and a larger mass lowers it, therefore a measured period determines the mass of a body even where a balance cannot be used, as on an orbiting spacecraft.

::grafico{assi=0 uguale=1 linee="0,-0.8 0,1.3;-0.2,-0.8 4.3,-0.8;0,0.1 0.3,0.1 0.45,0.45 0.75,-0.25 1.05,0.45 1.35,-0.25 1.65,0.45 1.95,-0.25 2.1,0.1 2.3,0.1" poligoni="2.3,-0.8 3.3,-0.8 3.3,0.6 2.3,0.6" segmenti="1.7,-1.35,1.7,1.25" vettori="1.7,-1.15,2.3,-1.15,x;2.8,0.9,2.0,0.9,F = −k x" etichette="1.25,1.45,x = 0" xmin=-0.4 xmax=4.5 ymin=-1.8 ymax=1.8 titolo="The spring is stretched by $x$ and pulls the block back towards the equilibrium position, with $F_x = -kx$"}

::::

:::osservazione{#vertical-spring titolo="Vertical spring"}
A body hanging from a vertical spring carries the weight as well, and at equilibrium the spring is already stretched by $x_{\mathrm{eq}} = \dfrac{mg}{k}$. Measuring the displacement $u = x - x_{\mathrm{eq}}$ from that position, the resultant force is
$$
-k\,(u + x_{\mathrm{eq}}) + mg = -k\,u ,
$$
since the constant terms cancel. The motion is therefore simple harmonic about the new equilibrium position with the same $\omega$, and $T = 2\pi\sqrt{\dfrac{x_{\mathrm{eq}}}{g}}$, hence the period follows from the static elongation alone.
:::

## Energy in simple harmonic motion

::::teorema{#shm-energy titolo="Energy of a harmonic oscillator"}
For a body of mass $m$ oscillating with amplitude $A$ under the force $F_x = -kx$, the mechanical energy
$$
E = \frac{1}{2}mv^2 + \frac{1}{2}kx^2
$$
is constant and equals
$$
E = \frac{1}{2}kA^2 = \frac{1}{2}m\omega^2A^2 = \frac{1}{2}mv_{\max}^2 .
$$

:::dimostrazione
The spring force is conservative with potential energy $U = \dfrac{1}{2}kx^2$, and it is the only force doing work, therefore the mechanical energy is conserved, as the chapter on potential energy and conservation of energy establishes.

Its value is computed at a convenient instant. At $x = \pm A$ the velocity vanishes, hence $E = \dfrac{1}{2}kA^2$; substituting $k = m\omega^2$ gives the second form; at $x = 0$ the potential energy vanishes and the speed is $v_{\max} = \omega A$, which gives the third.
:::

The result replaces the explicit solution whenever a problem relates a speed to a position, since $\dfrac{1}{2}mv^2 = \dfrac{1}{2}kA^2 - \dfrac{1}{2}kx^2$ returns $|v| = \omega\sqrt{A^2 - x^2}$. The energy goes with the square of the amplitude, therefore doubling the amplitude requires four times the energy.

::grafico{f="100*x^2" nomi="x,U" asintoti="y=1" punti="-0.1,1,pieno,−A;0.1,1,pieno,A" segmenti="0.05,0,0.05,1" etichette="-0.125,1.08,E;0.057,0.11,U;0.057,0.58,K" xmin=-0.14 xmax=0.14 ymin=-0.15 ymax=1.35 titolo="The parabola $U(x) = \dfrac{1}{2}kx^2$ and the line $E = \dfrac{1}{2}kA^2$: the motion is confined to $-A \le x \le A$, and at each position the kinetic energy is the gap between the line and the parabola"}

::::

:::esempio{#energy-example titolo="Where kinetic and potential energy are equal"}
Equality of the two terms requires $\dfrac{1}{2}kx^2 = \dfrac{1}{2}E = \dfrac{1}{4}kA^2$, hence $x = \pm\dfrac{A}{\sqrt{2}} \approx \pm 0.707\,A$. At $x = \dfrac{A}{2}$ the potential energy is $\dfrac{1}{4}E$, therefore three quarters of the energy is kinetic. The division between the two forms depends on the position alone, and not on $m$, $k$ or $A$.
:::

## The simple pendulum

::::teorema{#simple-pendulum titolo="Period of the simple pendulum"}
A point mass $m$ hangs from a massless inextensible string of length $L$ fixed at one end, and air resistance is negligible. For small angular displacements the motion is simple harmonic with
$$
\omega = \sqrt{\frac{g}{L}} ,
\qquad
T = 2\pi\sqrt{\frac{L}{g}} .
$$

:::dimostrazione
Let $\theta$ be the angle of the string with the vertical and $s = L\theta$ the arc travelled by the mass. The tension is along the string, therefore it has no tangential component, and the tangential component of the weight is $-mg\sin\theta$, the minus sign stating that it is directed towards the lowest point. Newton's second law along the tangent gives
$$
m\,L\ddot{\theta} = -mg\sin\theta
\quad\Longrightarrow\quad
\ddot{\theta} = -\frac{g}{L}\sin\theta .
$$
For small $\theta$ the Taylor expansion of the sine gives $\sin\theta = \theta + O(\theta^3)$, hence $\sin\theta$ may be replaced by $\theta$, which leaves $\ddot{\theta} = -\dfrac{g}{L}\theta$, the equation of simple harmonic motion in the variable $\theta$ with $\omega^2 = \dfrac{g}{L}$.
:::

The period depends on $L$ and $g$ and not on the mass, therefore a pendulum of measured length and period gives a local value of $g$.

::grafico{assi=0 uguale=1 linee="0,0 0.676,-1.45" segmenti="0,0,0,-2.0;-0.09,-1.807,0.676,-3.45;1.442,-3.093,0.676,-3.45" punti="0,0,pieno;0.676,-1.45,pieno" vettori="0.676,-1.45,0.676,-3.45;0.676,-1.45,-0.09,-1.807;0.676,-1.45,1.442,-3.093" etichette="0.1,-0.95,θ;-0.3,0.18,O;0.78,-2.6,m g;-1.55,-1.72,m g sin θ;1.52,-2.9,m g cos θ" xmin=-1.75 xmax=3.3 ymin=-3.95 ymax=0.55 titolo="The tangential component $mg\sin\theta$ brings the mass back to the lowest point, while $mg\cos\theta$ is balanced by the tension"}

::::

:::attenzione
The replacement of $\sin\theta$ by $\theta$ holds for small angles only. The exact period exceeds the harmonic one by the factor $1 + \dfrac{\theta_0^2}{16} + \dots$, where $\theta_0$ is the angular amplitude in radians. For $\theta_0 = 5^\circ$ the correction is $0.05\%$, below the precision of an ordinary measurement, while for $\theta_0 = 30^\circ$ it reaches $1.7\%$, hence a clock regulated at a small amplitude runs fast when the swing is widened.
:::

## The physical pendulum

::::teorema{#physical-pendulum titolo="Period of the physical pendulum"}
A rigid body of mass $m$ swings about a fixed horizontal axis at distance $d$ from its centre of mass, with moment of inertia $I$ about that axis and negligible friction. For small angular displacements
$$
T = 2\pi\sqrt{\frac{I}{m\,g\,d}} .
$$

:::dimostrazione
The weight acts at the centre of mass, therefore its torque about the axis has magnitude $mgd\sin\theta$ and tends to decrease $\theta$, while the reaction at the axis has zero moment arm and contributes no torque. The second law for fixed-axis rotation gives
$$
I\ddot{\theta} = -m\,g\,d\,\sin\theta ,
$$
and replacing $\sin\theta$ by $\theta$ for small angles leaves $\ddot{\theta} = -\dfrac{mgd}{I}\theta$, the equation of simple harmonic motion with $\omega^2 = \dfrac{mgd}{I}$.
:::

The body therefore swings like a point mass on a string of equivalent length $L_{\mathrm{eq}} = \dfrac{I}{md}$, and the moment of inertia of a body of irregular shape follows from its measured period.
::::

:::richiamo{titolo="Parallel-axis theorem"}
Let $I_{\mathrm{cm}}$ be the moment of inertia of a body of mass $m$ about an axis through its centre of mass, and let a second axis be parallel to the first at distance $d$. Then
$$
I = I_{\mathrm{cm}} + m\,d^2 .
$$
The theorem supplies the $I$ needed above, and it is established in the chapter on fixed-axis rotation.
:::

:::esempio{#rod-pendulum titolo="Uniform rod pivoted at one end"}
A uniform rod of length $L$ has $I_{\mathrm{cm}} = \dfrac{1}{12}mL^2$ and its centre of mass at the middle, hence $d = \dfrac{L}{2}$ and, by the **parallel-axis theorem**,
$$
I = \frac{1}{12}mL^2 + m\frac{L^2}{4} = \frac{1}{3}mL^2 ,
\qquad
T = 2\pi\sqrt{\frac{\frac{1}{3}mL^2}{m\,g\,\frac{L}{2}}} = 2\pi\sqrt{\frac{2L}{3g}} .
$$
The equivalent length is $\dfrac{2L}{3}$, therefore a rod $1.20\,\mathrm{m}$ long swings with $T = 1.79\,\mathrm{s}$, the period of a simple pendulum $0.800\,\mathrm{m}$ long.
:::

## Damped and driven oscillations

::::teorema{#damped-oscillations titolo="Underdamped oscillation"}
Let a body of mass $m$ be subject to the restoring force $-kx$ and to a resistive force $-b\dot{x}$ proportional to the velocity, with $b > 0$. Write $\gamma = \dfrac{b}{2m}$ and $\omega_0 = \sqrt{\dfrac{k}{m}}$. For $\gamma < \omega_0$ the motion is
$$
x(t) = A\,e^{-\gamma t}\cos(\omega' t + \varphi) ,
\qquad
\omega' = \sqrt{\omega_0^2 - \gamma^2} .
$$

:::dimostrazione
The equation of motion is $m\ddot{x} + b\dot{x} + kx = 0$, that is, $\ddot{x} + 2\gamma\dot{x} + \omega_0^2 x = 0$. Substituting the stated function and collecting the terms, the coefficient of $e^{-\gamma t}\sin(\omega' t + \varphi)$ is $2\gamma\omega' - 2\gamma\omega'$, which vanishes identically, and the coefficient of $e^{-\gamma t}\cos(\omega' t + \varphi)$ is $\omega_0^2 - \gamma^2 - \omega'^2$, which vanishes exactly when $\omega'^2 = \omega_0^2 - \gamma^2$. The function carries two arbitrary constants, therefore it is the general solution.
:::

The amplitude falls by the factor $\dfrac{1}{e}$ in the time $\tau = \dfrac{1}{\gamma}$, which measures how long the oscillation lasts. The damping also lowers the frequency, although for $\gamma \ll \omega_0$ the shift is negligible and $\omega' \approx \omega_0$.

::grafico{f="3*exp(-0.25*x)*cos(3*x);3*exp(-0.25*x);-3*exp(-0.25*x)" legenda="x(t);A e^{-\gamma t};-A e^{-\gamma t}" nomi="t,x" xmin=-0.4 xmax=12.5 ymin=-3.6 ymax=3.6 titolo="The oscillation keeps the angular frequency $\omega'$ while its amplitude follows the envelope $A e^{-\gamma t}$"}

::::

:::definizione{#damping-regimes titolo="Critical and overdamped motion"}
The behaviour changes with the size of $\gamma$ compared with $\omega_0$:
$$
\begin{cases}
\gamma < \omega_0 & \text{underdamped: oscillations of decaying amplitude} \\[4pt]
\gamma = \omega_0 & \text{critically damped: } x = (C_1 + C_2 t)\,e^{-\gamma t} \\[4pt]
\gamma > \omega_0 & \text{overdamped: sum of two decaying exponentials}
\end{cases}
$$
Critical damping returns the body to equilibrium in the shortest time without overshoot, which is the condition a vehicle suspension is designed to meet.
:::

::::teorema{#driven-amplitude titolo="Amplitude of a driven oscillator"}
Let the damped oscillator be acted on by the periodic force $F = F_0\cos\omega_d t$. Once the transient has decayed the motion is $x(t) = A(\omega_d)\cos(\omega_d t - \delta)$ with
$$
A(\omega_d) = \frac{F_0}{\sqrt{(k - m\omega_d^2)^2 + b^2\omega_d^2}} ,
\qquad
\tan\delta = \frac{b\,\omega_d}{k - m\omega_d^2} .
$$

:::dimostrazione
Substituting $x = A\cos(\omega_d t - \delta)$ in $m\ddot{x} + b\dot{x} + kx = F_0\cos\omega_d t$ gives
$$
A\,(k - m\omega_d^2)\cos(\omega_d t - \delta) - A\,b\,\omega_d\sin(\omega_d t - \delta) = F_0\cos\omega_d t .
$$
The left side is the sum of two sinusoids of the same angular frequency in quadrature, hence it equals a single cosine of amplitude $A\sqrt{(k - m\omega_d^2)^2 + b^2\omega_d^2}$, whose phase is shifted by the angle $\delta$ satisfying the stated tangent. Equating that amplitude to $F_0$ gives $A(\omega_d)$.
:::

The driven amplitude is set by the driving frequency and not by the initial conditions, since the free part of the motion decays as $e^{-\gamma t}$, and the steady motion follows the driving force at the frequency $\omega_d$, delayed by the phase $\delta$.
::::

:::definizione{#resonance titolo="Resonance"}
**Resonance** is the growth of the driven amplitude as $\omega_d$ approaches $\omega_0 = \sqrt{\dfrac{k}{m}}$. At $\omega_d = \omega_0$ the term $k - m\omega_d^2$ vanishes and the amplitude reduces to
$$
A = \frac{F_0}{b\,\omega_0} ,
$$
therefore the smaller the damping, the taller and the narrower the peak. A structure is designed so that no expected driving frequency falls near one of its own.

::grafico{f="20/sqrt((800-2*x^2)^2+(8*x)^2);20/sqrt((800-2*x^2)^2+(20*x)^2)" legenda="b = 8.0;b = 20" nomi="ω,A" asintoti="x=20" xmin=-1 xmax=40 ymin=-0.012 ymax=0.145 titolo="Driven amplitude against driving frequency for $m = 2.0\,\mathrm{kg}$, $k = 800\,\mathrm{N/m}$ and $F_0 = 20\,\mathrm{N}$: the peak sits at $\omega_0 = 20\,\mathrm{rad/s}$ and is lowered by the damping"}
:::

## Mechanical waves

:::definizione{#mechanical-wave titolo="Transverse and longitudinal waves"}
A **mechanical wave** is a disturbance that travels through a medium, carrying energy and momentum, while the particles of the medium only oscillate about their own positions. The wave is **transverse** when the particles move perpendicular to the direction of propagation, as on a stretched string, and **longitudinal** when they move along it, as in a column of air.

The speed of the wave depends on the inertia and the elasticity of the medium and not on how the wave was produced. The speed of the particles is a different quantity, which depends on the amplitude and on the frequency.
:::

:::definizione{#wave-function titolo="Harmonic wave function"}
A **harmonic wave** travelling along the $x$ axis is described by
$$
y(x, t) = A\sin(kx - \omega t) ,
$$
where $y$ is the displacement of the particle whose equilibrium position is $x$. The **wave number** is $k = \dfrac{2\pi}{\lambda}$, in $\mathrm{rad/m}$, where the **wavelength** $\lambda$ is the spatial period, and $\omega = \dfrac{2\pi}{T}$ is the angular frequency, $T$ being the time each particle takes to complete one oscillation. A fixed value of the phase $kx - \omega t$ travels with the **wave speed**
$$
v = \frac{\omega}{k} = \frac{\lambda}{T} = \lambda f ,
$$
and $A\sin(kx + \omega t)$ describes the same wave travelling towards decreasing $x$. Each particle performs simple harmonic motion of amplitude $A$ and angular frequency $\omega$, therefore its maximum transverse speed is $\omega A$.

::grafico{f="2*sin(2*pi*x/1.5)" legenda=0 nomi="x,y" asintoti="y=2;y=-2" segmenti="0,2.45,1.5,2.45" etichette="0.65,2.65,λ;3.0,2.15,A" xmin=-0.2 xmax=3.4 ymin=-2.9 ymax=3.3 titolo="Snapshot of a harmonic wave at a fixed instant: the spatial period is the wavelength $\lambda = \dfrac{2\pi}{k}$"}
:::

::::teorema{#wave-equation titolo="Wave equation"}
The harmonic wave function $y(x,t) = A\sin(kx - \omega t)$ satisfies
$$
\frac{\partial^2 y}{\partial x^2} = \frac{1}{v^2}\,\frac{\partial^2 y}{\partial t^2} ,
\qquad v = \frac{\omega}{k} .
$$

:::dimostrazione
Differentiating twice with respect to $x$ at fixed $t$ gives $\dfrac{\partial^2 y}{\partial x^2} = -k^2 A\sin(kx - \omega t)$, and differentiating twice with respect to $t$ at fixed $x$ gives $\dfrac{\partial^2 y}{\partial t^2} = -\omega^2 A\sin(kx - \omega t)$. Dividing the first by $k^2$ and the second by $\omega^2$ returns the same function, therefore the two sides are equal with $v = \dfrac{\omega}{k}$.
:::

The equation is linear, hence the sum of two of its solutions is again a solution, which is the content of the **superposition principle**. Every function of the form $f(x - vt)$ satisfies it, therefore a pulse of any shape travels undistorted with the speed $v$.
::::

::::teorema{#wave-speed-string titolo="Speed of a transverse wave on a string"}
On a string under tension $F_T$ with linear mass density $\mu = \dfrac{m}{L}$, whose transverse displacements are small, a transverse wave travels with
$$
v = \sqrt{\frac{F_T}{\mu}} .
$$

:::dimostrazione
Take a short element of the string, of length $\Delta x$ and mass $\mu\,\Delta x$. The tension at its two ends has the same magnitude $F_T$ and the directions of the two tangents. The displacements are small, therefore the slopes are small and the transverse component of the tension is $F_T\dfrac{\partial y}{\partial x}$ at each end, so that the resultant transverse force is their difference,
$$
F_y = F_T\left[\left(\frac{\partial y}{\partial x}\right)_{x + \Delta x} - \left(\frac{\partial y}{\partial x}\right)_{x}\right] = F_T\,\frac{\partial^2 y}{\partial x^2}\,\Delta x .
$$
Newton's second law applied to the element gives $F_y = \mu\,\Delta x\,\dfrac{\partial^2 y}{\partial t^2}$, hence
$$
\frac{\partial^2 y}{\partial x^2} = \frac{\mu}{F_T}\,\frac{\partial^2 y}{\partial t^2} ,
$$
and comparison with the wave equation identifies $\dfrac{1}{v^2} = \dfrac{\mu}{F_T}$.
:::

The speed grows with the tension and falls with the mass per unit length, therefore tightening a string raises the note it produces, and the heavier strings of an instrument sound lowest.
::::

## Interference and standing waves

:::definizione{#interference titolo="Interference"}
Where two waves overlap, the displacement at each point is the sum of the displacements each wave would produce there. **Constructive interference** occurs where the two arrive in phase and the amplitudes add, **destructive interference** where they arrive in antiphase and the amplitudes subtract. For two identical sources the difference $\Delta r$ of the distances travelled decides which of the two occurs:
$$
\begin{cases}
\Delta r = n\lambda & \text{constructive} \\[4pt]
\Delta r = \left(n + \dfrac{1}{2}\right)\lambda & \text{destructive}
\end{cases}
\qquad n \in \mathbb{Z} .
$$
:::

::::teorema{#standing-waves titolo="Standing wave"}
Two harmonic waves of equal amplitude and frequency travelling in opposite senses produce
$$
y(x,t) = 2A\sin kx\,\cos\omega t ,
$$
a **standing wave**, in which every particle oscillates with angular frequency $\omega$ and with the position-dependent amplitude $2A|\sin kx|$.

:::dimostrazione
Add the two wave functions and use the identity $\sin\alpha + \sin\beta = 2\sin\dfrac{\alpha + \beta}{2}\cos\dfrac{\alpha - \beta}{2}$ with $\alpha = kx - \omega t$ and $\beta = kx + \omega t$:
$$
A\sin(kx - \omega t) + A\sin(kx + \omega t) = 2A\sin kx\,\cos\omega t .
$$
The variables $x$ and $t$ appear in separate factors, therefore the profile does not travel.
:::

The points where $\sin kx = 0$ stay at rest and are the **nodes**, spaced half a wavelength apart, while the points of largest amplitude are the **antinodes**, halfway between consecutive nodes. Such a wave forms on a string whose waves are reflected at a fixed end.
::::

::::teorema{#normal-modes titolo="Normal modes of a string fixed at both ends"}
A string of length $L$ fixed at $x = 0$ and $x = L$, on which waves travel with speed $v$, sustains standing waves only at the frequencies
$$
f_n = n\,\frac{v}{2L} = \frac{n}{2L}\sqrt{\frac{F_T}{\mu}} ,
\qquad
\lambda_n = \frac{2L}{n} ,
\qquad n = 1, 2, 3, \dots
$$

:::dimostrazione
Both ends are fixed, therefore the standing wave $2A\sin kx\cos\omega t$ must have a node at $x = 0$, which is satisfied, and a node at $x = L$, which requires $\sin kL = 0$, hence $kL = n\pi$ with $n$ a positive integer. Since $k = \dfrac{2\pi}{\lambda}$, it follows that $\lambda_n = \dfrac{2L}{n}$, and $f_n = \dfrac{v}{\lambda_n}$ gives the stated frequencies.
:::

The frequency $f_1$ is the **fundamental** and the others are its integer multiples, called harmonics, which is why a string sounds a definite pitch. The relation also works backwards, since a string tuned to a required $f_1$ fixes the tension, $F_T = \mu\,(2Lf_1)^2$.

::grafico{curve="t,sin(pi*t),0,1;t,sin(2*pi*t),0,1;t,sin(3*pi*t),0,1" legenda="n = 1;n = 2;n = 3" nomi="x,y" punti="0,0,pieno;1,0,pieno" etichette="1.02,-0.22,L" xmin=-0.12 xmax=1.22 ymin=-1.35 ymax=1.5 titolo="The first three modes of a string fixed at the two ends, with $\lambda_n = \dfrac{2L}{n}$ and $L = 1$"}

::::

## Sound

:::definizione{#sound-wave titolo="Sound wave"}
A **sound wave** is a longitudinal mechanical wave in a gas, a liquid or a solid, in which the particles oscillate along the direction of propagation and the pressure oscillates about its equilibrium value. In air at $20^\circ\mathrm{C}$ its speed is $343\,\mathrm{m/s}$, and the audible range of a human ear runs from about $20\,\mathrm{Hz}$ to about $20\,\mathrm{kHz}$, which corresponds to wavelengths from $17\,\mathrm{m}$ down to $17\,\mathrm{mm}$.
:::

:::definizione{#sound-intensity titolo="Intensity and intensity level"}
The **intensity** $I$ of a wave is the average power it carries through a unit area perpendicular to the propagation, in $\mathrm{W/m^2}$. The ear responds to enormous ratios of intensity, hence sound is reported through the **intensity level**
$$
\beta = 10\,\log_{10}\frac{I}{I_0} ,
\qquad
I_0 = 10^{-12}\,\mathrm{W/m^2} ,
$$
measured in decibels, $\mathrm{dB}$, where $I_0$ is the reference intensity near the threshold of hearing.

The scale is logarithmic, therefore equal multiplicative steps in intensity give equal additive steps in level. Multiplying the intensity by $10$ adds $10\,\mathrm{dB}$ and doubling it adds $10\log_{10}2 \approx 3.0\,\mathrm{dB}$, while ordinary conversation sits near $60\,\mathrm{dB}$.
:::

::::teorema{#inverse-square titolo="Intensity of a point source"}
A source of power $P$ radiating uniformly in all directions in a medium that absorbs no energy produces, at distance $r$,
$$
I = \frac{P}{4\pi r^2} .
$$

:::dimostrazione
The medium absorbs no energy, therefore the power crossing any closed surface around the source equals $P$. The radiation is uniform, hence the intensity is the same at every point of the sphere of radius $r$, whose area is $4\pi r^2$, and dividing the power by that area gives the stated intensity.
:::

Since the intensity falls as $\dfrac{1}{r^2}$, doubling the distance divides it by $4$ and lowers the level by about $6.0\,\mathrm{dB}$.
::::

::::teorema{#doppler-effect titolo="Doppler effect"}
Let a source emit sound of frequency $f$ in a medium where sound travels with speed $v$, let the source move with speed $v_s$ and the observer with speed $v_o$ along the line joining them, and let both speeds be smaller than $v$. The observed frequency is
$$
f' = f\;\frac{v + v_o}{v - v_s} ,
$$
where $v_o$ is positive when the observer moves towards the source and $v_s$ is positive when the source moves towards the observer.

:::dimostrazione
Take first the source in motion and the observer at rest. In one period $T$ the source emits one complete wave and advances by $v_sT$, therefore the wavelength ahead of it is shortened to $\lambda' = (v - v_s)T$. The speed of the wave in the medium is unchanged, hence the observer receives
$$
f' = \frac{v}{\lambda'} = \frac{v}{(v - v_s)T} = f\,\frac{v}{v - v_s} .
$$
Take now the observer in motion and the source at rest. The wavelength in the medium is $\lambda = \dfrac{v}{f}$, and the observer moving towards the source meets the crests at the relative speed $v + v_o$, hence $f' = \dfrac{v + v_o}{\lambda} = f\,\dfrac{v + v_o}{v}$. When both move, the two factors apply one after the other and their product is the stated formula.
:::

The shift is positive when source and observer approach and negative when they separate, therefore the pitch of a siren drops as the vehicle passes. The formula is not symmetric in the two speeds, since the medium fixes a preferred frame.
::::

::::teorema{#beats titolo="Beats"}
Two sounds of equal amplitude and of nearby frequencies $f_1$ and $f_2$, heard at the same point, produce an oscillation whose amplitude varies with the **beat frequency**
$$
f_{\mathrm{beat}} = |f_1 - f_2| .
$$

:::dimostrazione
Adding the two displacements at a fixed point and using the identity for the sum of two cosines gives
$$
A\cos 2\pi f_1 t + A\cos 2\pi f_2 t = 2A\cos\!\left(2\pi\,\frac{f_1 - f_2}{2}\,t\right)\cos\!\left(2\pi\,\frac{f_1 + f_2}{2}\,t\right) .
$$
The second factor is a rapid oscillation at the average frequency and the first is a slow modulation of its amplitude. The modulating factor reaches modulus $1$ twice in each of its periods, therefore the loudness peaks $|f_1 - f_2|$ times per second.
:::

Beats turn a comparison of two frequencies into a count of pulsations per second, which is how a string is tuned against a reference: the tension is adjusted until the beats disappear.
::::
