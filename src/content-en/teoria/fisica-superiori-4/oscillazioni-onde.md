---
titolo: Oscillations and mechanical waves
sommario: Simple harmonic motion, spring oscillators, pendulums, propagation, superposition, and standing wave modes on a string.
---

## Period, frequency, and phase

:::definizione{#periodo-frequenza titolo="Quantities that describe an oscillation"}
Motion is **periodic** if it repeats at regular time intervals. The **period** $T$ is the shortest interval after which the cycle begins again. A body moving along a line can pass through the same position twice in one cycle. The cycle is complete when both its position and its velocity return to their starting values. A body that passes through equilibrium to the right and then to the left has gone through half a cycle.

If we count $N$ complete oscillations in a time interval $\Delta t$, the **frequency** $f$ is
$$
f=\frac{N}{\Delta t}=\frac{1}{T},
\qquad
\omega=2\pi f=\frac{2\pi}{T}.
$$
Frequency is measured in hertz, with $1\,\mathrm{Hz}=1\,\mathrm{s^{-1}}$. The angular frequency $\omega$ is measured in radians per second because the **phase** advances by $2\pi$ radians in one cycle.
:::

:::esempio{titolo="Counting cycles and intervals"}
If a stopwatch records $20\,\mathrm{s}$ for $40$ complete oscillations, then $f=2.0\,\mathrm{Hz}$ and each oscillation takes $T=0.50\,\mathrm{s}$. A sensor may record the first maximum at $t=0$ and the fifth at $t=2\,\mathrm{s}$. Five maxima enclose four complete intervals, so this measurement also gives $T=\dfrac{2}{4}\,\mathrm{s}=0.50\,\mathrm{s}$.

To compare two oscillations of the same frequency, we can compare the times of their maxima. A delay of $\dfrac{T}{4}$ gives a phase difference of magnitude $\dfrac{\pi}{2}$. Half a period later, a sinusoid takes the opposite value. A phase difference of $\pi$ radians is therefore called **phase opposition**.
:::

:::attenzione
Angular frequency and frequency describe the same oscillation with different numbers. An oscillator with $\omega=20\,\mathrm{rad/s}$ has $f=\dfrac{20}{2\pi}\,\mathrm{Hz}\simeq3.18\,\mathrm{Hz}$ and each cycle lasts $T=\dfrac{2\pi}{20}\,\mathrm{s}\simeq0.314\,\mathrm{s}$. If $20$ were read as a frequency, we would find $T=\dfrac{1}{20}\,\mathrm{s}=0.050\,\mathrm{s}$, a period $2\pi$ times shorter than the true one.
:::

## Simple harmonic motion

:::definizione{#moto-armonico titolo="Displacement in simple harmonic motion"}
Let $x=0$ be the equilibrium position. In simple harmonic motion the displacement is
$$
x(t)=A\cos(\omega t+\varphi),
\qquad A>0.
$$
The amplitude $A$ is the maximum value of $|x|$. The initial phase $\varphi$ determines the state at time $t=0$. For $\varphi=0$ the body starts at $x=A$. For $\varphi=\dfrac{\pi}{2}$ it starts at $x=0$ and moves into $x<0$ at small positive times.

Projecting uniform circular motion with radius $A$ and angular frequency $\omega$ gives the same displacement law. Projecting the tangential velocity and centripetal acceleration onto the same axis gives
$$
v(t)=-\omega A\sin(\omega t+\varphi),
\qquad
a(t)=-\omega^2x(t).
$$
At every position away from equilibrium, $a$ has the opposite sign to $x$. At equilibrium, $|v|=\omega A$ and $a=0$. At the turning points, $v=0$ and $|a|=\omega^2 A$, so the body reverses direction.
:::

:::osservazione{titolo="Projection of uniform circular motion"}
The point $P$ travels around the circle of radius $A$ with angular velocity $\omega$, and its radius makes the angle $\omega t+\varphi$ with the $x$ axis. The projection $Q$ of $P$ onto the axis has coordinate $A\cos(\omega t+\varphi)$, which is the harmonic displacement law. One full revolution of $P$ corresponds to one complete oscillation of $Q$, so the time of one revolution is the period $T$ and the angle swept in one second is the angular frequency $\omega$. The amplitude is the radius of the circle and the initial phase is the angle of $P$ at $t=0$.

::grafico{assi=0 uguale=1 curve="2*cos(t),2*sin(t),0,6.29" vettori="-2.6,0,2.9,0;0,0,1.414,1.414,A" segmenti="1.414,1.414,1.414,0" punti="1.414,1.414,pieno,P;1.414,0,pieno,Q" etichette="2.95,0.3,x" xmin=-3 xmax=3.2 ymin=-2.5 ymax=2.5 titolo="The point $Q$ projects $P$ onto the $x$ axis and moves in simple harmonic motion with amplitude $A$"}

:::

:::esempio{titolo="Position, velocity, and direction of motion"}
With $A=0.050\,\mathrm{m}$, $T=0.50\,\mathrm{s}$, and $\varphi=0$, we have $\omega=4\pi\,\mathrm{rad/s}$. At $t=\dfrac{T}{4}=0.125\,\mathrm{s}$ the phase is $\dfrac{\pi}{2}$, so $x=0$ and $v=-4\pi\cdot 0.050\,\mathrm{m/s}\simeq -0.628\,\mathrm{m/s}$. At $t=\dfrac{3T}{4}$ the position is again $x=0$, but the sine is $-1$ and the velocity is positive. The same point of the path thus corresponds to two different states.

::grafico{f="cos(pi*x/250);-sin(pi*x/250)" xmin=0 xmax=500 ymin=-1.3 ymax=1.3 nomi="t,ratio" legenda="\dfrac{x}{A};\dfrac{v}{\omega A}" punti="125,0,pieno;125,-1,pieno;375,0,pieno;375,1,pieno" titolo="In one 0.50 s period, the body passes through equilibrium first with negative velocity and then with positive velocity. Time in milliseconds."}

:::

:::esempio{titolo="Initial phase from the initial conditions"}
An oscillator with $A=0.050\,\mathrm{m}$ and $\omega=4\pi\,\mathrm{rad/s}$ is at $x=0.025\,\mathrm{m}$ at $t=0$ and moves toward equilibrium. From $x(0)=A\cos\varphi$ we get $\cos\varphi=\dfrac{1}{2}$, so $\varphi=\dfrac{\pi}{3}$ or $\varphi=-\dfrac{\pi}{3}$. The initial velocity $v(0)=-\omega A\sin\varphi$ must be negative, because $x$ is decreasing, so $\sin\varphi>0$ and the phase is $\varphi=\dfrac{\pi}{3}$. Then $v(0)=-4\pi\cdot0.050\cdot\dfrac{\sqrt{3}}{2}\,\mathrm{m/s}\simeq-0.544\,\mathrm{m/s}$. The initial position alone leaves two possible phases, which differ in the direction of motion.
:::

::::teorema{#velocita-posizione titolo="Velocity as a function of position"}
In simple harmonic motion with amplitude $A$ and angular frequency $\omega$, the magnitude of the velocity at a position $x$ is
$$
|v|=\omega\sqrt{A^2-x^2}.
$$
The relation gives the magnitude of the velocity from a single position measurement, without knowing the time. With $A=0.040\,\mathrm{m}$, $T=0.50\,\mathrm{s}$, and $x=0.024\,\mathrm{m}$ we have $\omega=4\pi\,\mathrm{rad/s}$ and $|v|=4\pi\sqrt{0.040^2-0.024^2}\,\mathrm{m/s}=4\pi\cdot0.032\,\mathrm{m/s}\simeq0.402\,\mathrm{m/s}$, smaller than the maximum $\omega A\simeq0.503\,\mathrm{m/s}$.

:::dimostrazione
From the displacement law, $x=A\cos(\omega t+\varphi)$ and $v=-\omega A\sin(\omega t+\varphi)$. Squaring gives $x^2=A^2\cos^2(\omega t+\varphi)$ and $v^2=\omega^2A^2\sin^2(\omega t+\varphi)$. Since $\sin^2\alpha=1-\cos^2\alpha$, we have $v^2=\omega^2A^2\left(1-\cos^2(\omega t+\varphi)\right)=\omega^2\left(A^2-x^2\right)$. Taking the square root of both sides gives the magnitude $|v|$.
:::
::::

## Mass, spring, and energy

::::teorema{#massa-molla titolo="Period of a spring oscillator"}
A mass $m$ moving along the spring axis under the restoring force of an ideal spring with spring constant $k$ oscillates with angular frequency and period
$$
\omega=\sqrt{\frac{k}{m}},
\qquad
T=2\pi\sqrt{\frac{m}{k}}.
$$
A larger mass has a smaller acceleration at the same displacement, so its period is longer. For $m=0.50\,\mathrm{kg}$ and $k=200\,\mathrm{N/m}$, we get $\omega=20\,\mathrm{rad/s}$ and $T=\dfrac{\pi}{10}\,\mathrm{s}$. If the mass quadruples at fixed $k$, the period doubles.

:::dimostrazione
Measure $x$ from equilibrium. Hooke's law gives $F=-kx$. Since $ma=F$, it follows that $a=-\dfrac{k}{m}x$. The acceleration is proportional to the displacement with the opposite sign, so the motion is harmonic and $\omega^2=\dfrac{k}{m}$. The period follows from $T=\dfrac{2\pi}{\omega}$. The same reasoning applies to a vertical spring if we measure $x$ from the static equilibrium position, where the spring force balances the weight.
:::
::::

:::esempio{titolo="Vertical spring and static extension"}
A mass $m=0.20\,\mathrm{kg}$ hanging from a vertical spring stretches it by $\Delta\ell=9.81\,\mathrm{cm}$ at equilibrium. In that position the spring force balances the weight, $k\Delta\ell=mg$, so $k=\dfrac{mg}{\Delta\ell}=\dfrac{0.20\cdot9.81}{0.0981}\,\mathrm{N/m}=20\,\mathrm{N/m}$. The period is $T=2\pi\sqrt{\dfrac{m}{k}}=2\pi\sqrt{\dfrac{0.20}{20}}\,\mathrm{s}\simeq0.628\,\mathrm{s}$. Since $\dfrac{m}{k}=\dfrac{\Delta\ell}{g}$, we can also write $T=2\pi\sqrt{\dfrac{\Delta\ell}{g}}$, which gives the same value from the static extension alone.
:::

:::attenzione
The period of a harmonic oscillator does not depend on the amplitude. With $m=0.50\,\mathrm{kg}$ and $k=200\,\mathrm{N/m}$ we have $T=\dfrac{\pi}{10}\,\mathrm{s}\simeq0.314\,\mathrm{s}$ for both $A=0.050\,\mathrm{m}$ and $A=0.100\,\mathrm{m}$. Doubling the amplitude quadruples the energy $\dfrac{1}{2}kA^2$, from $0.25\,\mathrm{J}$ to $1.00\,\mathrm{J}$, and doubles the maximum speed $\omega A$, from $1.0\,\mathrm{m/s}$ to $2.0\,\mathrm{m/s}$.
:::

::::teorema{#molle-parallelo-serie titolo="Springs in parallel and in series"}
Two ideal springs with constants $k_1$ and $k_2$, attached to the same mass so that they undergo the same extension (parallel), are equivalent to a single spring with constant
$$
k=k_1+k_2.
$$
Two springs connected one after the other, which transmit the same force (series), are equivalent to a single spring with constant
$$
\frac{1}{k}=\frac{1}{k_1}+\frac{1}{k_2}.
$$
The equivalent constant allows us to use $T=2\pi\sqrt{\dfrac{m}{k}}$ for the whole system. With $k_1=100\,\mathrm{N/m}$, $k_2=300\,\mathrm{N/m}$, and $m=0.30\,\mathrm{kg}$, the parallel arrangement has $k=400\,\mathrm{N/m}$ and $T=2\pi\sqrt{\dfrac{0.30}{400}}\,\mathrm{s}\simeq0.172\,\mathrm{s}$. The series arrangement has $\dfrac{1}{k}=\dfrac{1}{100}+\dfrac{1}{300}=\dfrac{4}{300}$, that is, $k=75\,\mathrm{N/m}$ and $T=2\pi\sqrt{\dfrac{0.30}{75}}\,\mathrm{s}\simeq0.397\,\mathrm{s}$.

:::dimostrazione
In the parallel arrangement, for an extension $x$ the two springs exert forces $k_1x$ and $k_2x$ in the same direction. The total force has magnitude $(k_1+k_2)x$, which is the force of a spring with constant $k_1+k_2$.

In the series arrangement, the junction point has negligible mass, so the two springs transmit the same force $F$. The extensions are $\dfrac{F}{k_1}$ and $\dfrac{F}{k_2}$ and the total extension is $x=F\left(\dfrac{1}{k_1}+\dfrac{1}{k_2}\right)$. An equivalent spring with constant $k$ has, under the same force, extension $x=\dfrac{F}{k}$. Comparing the two extensions gives the formula.
:::
::::

:::richiamo{titolo="Displacement law of the spring oscillator"}
A mass $m$ attached to an ideal spring with constant $k$ moves with $x(t)=A\cos(\omega t+\varphi)$ and $v(t)=-\omega A\sin(\omega t+\varphi)$, where $\omega=\sqrt{\dfrac{k}{m}}$, so $m\omega^2=k$.
:::

::::teorema{#energia-armonica titolo="Energy of a spring oscillator"}
For an ideal spring oscillator without dissipation, setting potential energy to zero at equilibrium gives the mechanical energy
$$
E=\frac{1}{2}mv^2+\frac{1}{2}kx^2
=\frac{1}{2}kA^2.
$$
The last equality comes from evaluating the energy at either turning point. There $|x|=A$ and the velocity is zero. Halfway to the turning point, $x=\dfrac{A}{2}$, the elastic part is $\dfrac{E}{4}$, so the kinetic part is $\dfrac{3E}{4}$. Conservation of energy gives
$$
|v|=\sqrt{\frac{k}{m}(A^2-x^2)}.
$$
This relation gives the magnitude of the velocity at a known position. Its sign depends on the direction of motion at that instant.

:::dimostrazione
The kinetic energy as a function of time is $\dfrac{1}{2}mv^2=\dfrac{1}{2}m\omega^2A^2\sin^2(\omega t+\varphi)$. Since $m\omega^2=k$, it becomes $\dfrac{1}{2}kA^2\sin^2(\omega t+\varphi)$. The elastic energy is $\dfrac{1}{2}kx^2=\dfrac{1}{2}kA^2\cos^2(\omega t+\varphi)$. The sum contains $\sin^2(\omega t+\varphi)+\cos^2(\omega t+\varphi)=1$, so $E=\dfrac{1}{2}kA^2$ at every instant. The result does not depend on time, so the mechanical energy is conserved. From $\dfrac{1}{2}mv^2=E-\dfrac{1}{2}kx^2=\dfrac{1}{2}k\left(A^2-x^2\right)$ we then obtain $v^2=\dfrac{k}{m}\left(A^2-x^2\right)$.
:::
::::

:::esempio{titolo="Energy balance at an intermediate position"}
With $k=200\,\mathrm{N/m}$, $m=0.50\,\mathrm{kg}$, and $A=0.050\,\mathrm{m}$, we get $E=0.25\,\mathrm{J}$. At $x=0.030\,\mathrm{m}$ the potential energy is $0.090\,\mathrm{J}$, so $K=0.160\,\mathrm{J}$. From $K=\dfrac{1}{2}mv^2$ it follows that $|v|=0.80\,\mathrm{m/s}$. The velocity is negative if the body is moving toward $x=0$ at that instant, because the body is to the right of equilibrium.

::grafico{f="10*x^2;250-10*x^2" xmin=-5 xmax=5 ymin=0 ymax=300 nomi="x,E (mJ)" legenda="\text{elastic energy};\text{kinetic energy}" punti="3,90,pieno;3,160,pieno" titolo="Energies as functions of $x$, with $x$ in centimeters and energies in millijoules. At $x=3\,\mathrm{cm}$ the elastic energy is $90\,\mathrm{mJ}$ and the kinetic energy is $160\,\mathrm{mJ}$, for a total of $250\,\mathrm{mJ}$"}

:::

## Simple pendulum and resonance

::::teorema{#pendolo titolo="Small oscillations of a pendulum"}
A simple pendulum consists of a point mass suspended from an inextensible string of length $\ell$, with negligible string mass. With negligible friction and small angles about the vertical, the period is
$$
T=2\pi\sqrt{\frac{\ell}{g}}.
$$
For $\ell=1.0\,\mathrm{m}$ and $g=9.81\,\mathrm{m/s^2}$, the period is about $2.01\,\mathrm{s}$. The mass cancels out when we calculate the acceleration. A pendulum one quarter as long has half the period at the same $g$.

:::dimostrazione
Measure the angle $\theta$ from the downward vertical and use the signed arc displacement $s=\ell\theta$. The tension in the string is radial, so the tangential force comes from the component of the weight, $-mg\sin\theta$. Dividing by $m$ gives $a_{\mathrm{tan}}=-g\sin\theta$. For small $\theta$ in radians, $\sin\theta\simeq\theta$. It follows that $a_{\mathrm{tan}}\simeq-\dfrac{g}{\ell}s$, so the motion along the arc is approximately harmonic with $\omega=\sqrt{\dfrac{g}{\ell}}$, and the period is the one stated.
:::
::::

:::osservazione{titolo="Forces on the pendulum mass"}
The weight $m\vec{g}$ and the tension in the string act on the mass. The weight resolves into a component $mg\cos\theta$ along the string, which together with the tension determines the centripetal acceleration and produces no acceleration along the arc, and a component $mg\sin\theta$ tangent to the arc, directed toward the equilibrium position. Only the latter accelerates the mass along its path.

::grafico{assi=0 uguale=1 linee="-1.2,4 1.2,4;0,4 2.571,0.936" segmenti="0,4,0,-0.4;2.571,0.936,1.832,0.316;2.571,0.936,3.31,0.056" curve="4*sin(t),4-4*cos(t),-0.8,0.8" vettori="2.571,0.936,2.571,-0.564,mg;2.571,0.936,1.832,0.316,;2.571,0.936,3.31,0.056," punti="0,4,pieno,O;2.571,0.936,pieno" etichette="1.3,2.9,ℓ;0.18,3.1,θ;1.6,0.05,mg sinθ;3.45,-0.1,mg cosθ" xmin=-1.5 xmax=4.5 ymin=-1 ymax=4.6 titolo="The weight resolves into a component along the string and a component tangent to the arc, directed toward the equilibrium position"}

:::

:::esempio{titolo="Length for a given period"}
A pendulum has period $T=2.00\,\mathrm{s}$, that is, it completes a half-oscillation in $1.00\,\mathrm{s}$. From $T=2\pi\sqrt{\dfrac{\ell}{g}}$ we get $\ell=\dfrac{gT^2}{4\pi^2}=\dfrac{9.81\cdot4.00}{4\pi^2}\,\mathrm{m}\simeq0.994\,\mathrm{m}$. For a period three times as long, the length must be nine times as large, that is, about $8.95\,\mathrm{m}$.
:::

:::attenzione
The formula for the period relies on the approximation $\sin\theta\simeq\theta$. For an amplitude of $60^\circ$ we have $\theta=\dfrac{\pi}{3}\,\mathrm{rad}$ and $\sin\theta=\dfrac{\sqrt{3}}{2}$, about $17\%$ less than $\theta$. At large angles the restoring force departs from a linear law and the period also depends on the amplitude.
:::

:::osservazione{titolo="Exact period and amplitude"}
A numerical calculation of the period without the approximation $\sin\theta\simeq\theta$ gives, relative to the value $2\pi\sqrt{\dfrac{\ell}{g}}$, an increase of about $0.2\%$ for an amplitude of $10^\circ$, about $1.7\%$ for $30^\circ$, and about $7.3\%$ for $60^\circ$. For $10^\circ$ and a period of $2.0\,\mathrm{s}$, the difference is therefore about $4\,\mathrm{ms}$.
:::

:::osservazione
Friction removes energy from an oscillator and reduces its amplitude over time. A periodic external force can compensate for the dissipation. With weak damping, the steady-state amplitude reaches a maximum when the frequency of the force is close to the system's natural frequency. This phenomenon is called **resonance**. For example, pushing a swing once per cycle in the direction the seat is moving adds energy with each push. Dissipation limits the amplitude reached.
:::

:::esempio{titolo="Natural frequency and resonance curve"}
A pendulum of length $\ell=2.50\,\mathrm{m}$ has period $T=2\pi\sqrt{\dfrac{2.50}{9.81}}\,\mathrm{s}\simeq3.17\,\mathrm{s}$, so its natural frequency is $f_0=\dfrac{1}{T}\simeq0.315\,\mathrm{Hz}$. A push repeated at this frequency transfers energy in every cycle. If the push has frequency $\dfrac{f_0}{2}$ or $2f_0$, the amplitude reached is much smaller, as the curve shows.

::grafico{f="1/sqrt((1-x^2)^2+0.04*x^2)" xmin=0 xmax=2 ymin=0 ymax=6 nomi="f/f₀,A" titolo="Qualitative behavior of the steady-state amplitude, in arbitrary units, as a function of $\dfrac{f}{f_0}$ for weak damping"}

:::

## Propagation and reading graphs

:::definizione{#onda titolo="Mechanical waves and wave speed"}
A **mechanical wave** is a disturbance that propagates through a medium. On a string, let the $x$ axis run along the string at rest. The value $y(x,t)$ is the transverse displacement of the point on the string whose equilibrium coordinate is $x$. As the wave passes, the point moves in the transverse direction. A crest advances along the string because successive points reach their maximum at successive times. The crest and a point on the string therefore have different velocities. In a longitudinal wave, such as sound in a fluid, local displacements are parallel to the direction of propagation.

The **wavelength** $\lambda$ is the distance between two successive crests observed at one instant. The **period** $T$ is the time between the passage of two successive crests through the same point. Since a crest travels $\lambda$ in time $T$, the magnitude of the wave velocity is
$$
u=\frac{\lambda}{T}=\lambda f.
$$
:::

:::osservazione{titolo="Wavefronts"}
On a water surface, a point source produces circular crests that move away from the source. A **wavefront** is the set of points reached by the disturbance with the same phase, and two successive wavefronts of the same phase are $\lambda$ apart. The direction of propagation is perpendicular to the wavefronts. With $f=4.0\,\mathrm{Hz}$ and $\lambda=0.050\,\mathrm{m}$ we have $u=\lambda f=0.20\,\mathrm{m/s}$. $5.0\,\mathrm{s}$ after the source is switched on, the first wavefront has radius $r=ut=1.0\,\mathrm{m}$, and between the source and that wavefront there are $\dfrac{1.0}{0.050}=20$ wavelengths.

::grafico{assi=0 uguale=1 curve="cos(t),sin(t),0,6.29;2*cos(t),2*sin(t),0,6.29;3*cos(t),3*sin(t),0,6.29;4*cos(t),4*sin(t),0,6.29" vettori="0,0,2.12,2.12," segmenti="1,0,2,0" punti="0,0,pieno,S" etichette="1.5,0.3,λ" xmin=-4.6 xmax=4.6 ymin=-4.4 ymax=4.4 titolo="Circular wavefronts of a point source $S$, spaced $\lambda$ apart. The arrow shows the direction of propagation"}

:::

:::esempio{titolo="A snapshot and a recording of the same wave"}
In the first graph $t=0$ is fixed and the horizontal axis represents position $x$. Crests are $2\,\mathrm{m}$ apart, so $\lambda=2\,\mathrm{m}$. The second graph follows the single point $x=0$. The horizontal axis represents time $t$ and the maxima are $0.20\,\mathrm{s}$ apart, so $T=0.20\,\mathrm{s}$. The wave travels at $u=\dfrac{2}{0.20}\,\mathrm{m/s}=10\,\mathrm{m/s}$.

::grafico{f="3*cos(pi*x)" xmin=0 xmax=4.2 ymin=-4 ymax=4 nomi="x,y (cm)" punti="0,3,pieno;2,3,pieno;4,3,pieno" titolo="Profile at t = 0, with crests at x = 0 m, 2 m, and 4 m. Horizontal coordinates in meters."}

::grafico{f="3*cos(pi*x/100)" xmin=0 xmax=400 ymin=-4 ymax=4 nomi="t,y (cm)" punti="0,3,pieno;200,3,pieno;400,3,pieno" titolo="Displacement at x = 0, with maxima at t = 0 ms, 200 ms, and 400 ms. Time in milliseconds."}

A crest and the adjacent trough are $\dfrac{\lambda}{2}=1\,\mathrm{m}$ apart. The vertical difference between the same points is $6\,\mathrm{cm}$, twice the amplitude, because the vertical coordinates are $+3\,\mathrm{cm}$ and $-3\,\mathrm{cm}$. The wavelength is read on the $x$ axis, the amplitude on the $y$ axis.
:::

:::attenzione
The wave speed $u$ and the velocity of a point on the string are different quantities. For a wave with $A=3.0\,\mathrm{cm}$ and $T=0.20\,\mathrm{s}$ traveling at $u=10\,\mathrm{m/s}$, a point on the string has maximum transverse speed $\omega A=\dfrac{2\pi}{0.20}\cdot0.030\,\mathrm{m/s}\simeq0.94\,\mathrm{m/s}$, about eleven times smaller than $u$. The point moves in the transverse direction, while the disturbance advances along the string.
:::

## Equation of a harmonic wave

:::definizione{#equazione-onda titolo="Wavenumber and direction of propagation"}
For a harmonic wave traveling in the direction of increasing $x$, we write
$$
y(x,t)=A\cos(kx-\omega t+\varphi),
\qquad
k=\frac{2\pi}{\lambda},
\qquad
u=\frac{\omega}{k}.
$$
The wavenumber $k$ is the change in phase per unit length and is measured in $\mathrm{rad/m}$. In this section the symbol $k$ denotes the wavenumber because it multiplies a length. To find the direction of propagation, follow a crest, which stays at the same phase. Between two times we have $k\Delta x-\omega\Delta t=0$, so $\Delta x=\dfrac{\omega}{k}\Delta t>0$ for $\Delta t>0$. If the phase is $kx+\omega t+\varphi$, the same condition gives $\Delta x=-\dfrac{\omega}{k}\Delta t<0$.

At a fixed time the phase difference between two positions is $k\Delta x$. Points separated by $\dfrac{\lambda}{2}$ therefore have opposite displacements at the same instant. At a fixed position, in the wave traveling toward increasing $x$, the phase changes by $-\omega\Delta t$. A full wavelength in space or a full period in time brings the cosine back to the same value.
:::

:::esempio{titolo="The crest advances while the point at the crest is at rest"}
For $y(x,t)=0.03\cos(2\pi x-8\pi t)$, with distances in meters and times in seconds, we find $\lambda=1\,\mathrm{m}$ and $u=4\,\mathrm{m/s}$. The crest that passes through the origin at $t=0$ satisfies $2\pi x-8\pi t=0$, so at $t=0.10\,\mathrm{s}$ it is at $x=0.40\,\mathrm{m}$. At that instant the material point there is at the maximum of its oscillation, so its instantaneous transverse velocity is zero. Its maximum speed, reached when passing through equilibrium, is $\omega A=0.24\pi\,\mathrm{m/s}$.
:::

:::esempio{titolo="Wave traveling toward negative x"}
For $y(x,t)=0.040\cos(\pi x+6\pi t)$, with distances in meters and times in seconds, the phase contains $+\omega t$, so propagation is toward decreasing $x$. Comparing with the general form gives $k=\pi\,\mathrm{rad/m}$ and $\omega=6\pi\,\mathrm{rad/s}$. It follows that $\lambda=\dfrac{2\pi}{k}=2\,\mathrm{m}$, $f=\dfrac{\omega}{2\pi}=3\,\mathrm{Hz}$, and $u=\dfrac{\omega}{k}=6\,\mathrm{m/s}$, which coincides with $\lambda f$.
:::

:::esempio{titolo="Phase difference between two points"}
In a wave with $\lambda=1.0\,\mathrm{m}$, two points at $x_1=0.10\,\mathrm{m}$ and $x_2=0.35\,\mathrm{m}$ have, at the same instant, phase difference $k\Delta x=\dfrac{2\pi}{1.0}\cdot0.25=\dfrac{\pi}{2}$. For $\Delta x=0.50\,\mathrm{m}$ the difference is $\pi$ and the points are in phase opposition, for $\Delta x=1.0\,\mathrm{m}$ it is $2\pi$ and the points are in phase.
:::

:::teorema{#velocita-su-corda titolo="Speed on a stretched string"}
For small transverse disturbances on an ideal uniform string with tension $F_T$ and mass per unit length $\mu$, we have
$$
u=\sqrt{\frac{F_T}{\mu}}.
$$
Applying four times the tension to the same string doubles the speed. If a $2.0\,\mathrm{m}$ length of string has mass $20\,\mathrm{g}$, then $\mu=0.010\,\mathrm{kg/m}$. With $F_T=100\,\mathrm{N}$, we get $u=100\,\mathrm{m/s}$. The source sets the frequency. At a junction with a string that has a different wave speed, both segments must oscillate at the same frequency at the junction, so $\lambda=\dfrac{u}{f}$ changes.
:::

:::osservazione{titolo="Dependence on tension and linear density"}
The ratio $\dfrac{F_T}{\mu}$ has units $\dfrac{\mathrm{kg\cdot m/s^2}}{\mathrm{kg/m}}=\mathrm{m^2/s^2}$, so its square root is a speed. A string under greater tension transmits the disturbance faster, because the force that returns a segment toward equilibrium is larger. A string with more mass per unit length responds more slowly, because each segment has more mass to accelerate. At the same tension, a density $\mu$ four times larger halves the speed.
:::

## Superposition and reflection

:::teorema{#sovrapposizione titolo="Adding disturbances"}
In the linear regime, the resulting displacement is the algebraic sum of the displacements the waves would produce separately. For two identical waves in phase, the sum has amplitude $2A$. For two identical waves in phase opposition, the resulting displacement is zero. If the waves are in phase opposition but have amplitudes $5\,\mathrm{cm}$ and $2\,\mathrm{cm}$, the resulting amplitude at the point of overlap is $3\,\mathrm{cm}$. When the first disturbance is at $+5\,\mathrm{cm}$, the second is at $-2\,\mathrm{cm}$ and the total displacement is $+3\,\mathrm{cm}$.

The sum applies to **displacements**. Energy quantities depend on the square of the amplitude under otherwise equal conditions, so the distribution of energy also depends on the relative phase.
:::

:::esempio{titolo="Pulse reflection at fixed and free ends"}
Suppose a pulse with positive displacement arrives. At a fixed end the total displacement must be zero at all times. The reflected pulse must therefore provide a displacement opposite to the incident pulse at the boundary and returns inverted. An ideal free end can move. Its boundary condition is zero slope, and the incident and reflected pulses have the same sign. In both cases the reflected pulse travels in the opposite direction to the incident one.
:::

:::osservazione{titolo="Round-trip time"}
On a string of length $L=12\,\mathrm{m}$ with $u=40\,\mathrm{m/s}$, a pulse reflected at the far end returns to its starting point after $\Delta t=\dfrac{2L}{u}=\dfrac{24}{40}\,\mathrm{s}=0.60\,\mathrm{s}$, whatever the type of end, because only the sign of the pulse changes. This time is the period of the fundamental of a string fixed at both ends, because $\dfrac{2L}{u}=\dfrac{1}{f_1}$.
:::

:::attenzione
Two overlapping waves do not cancel permanently. Two pulses with displacements $+5\,\mathrm{cm}$ and $-5\,\mathrm{cm}$ that meet on a string give, at the instant they coincide, zero displacement at every point. The pulses then continue unchanged, each in its own direction, because superposition is a sum of displacements. At the instant of coincidence the string is straight, but its points have nonzero transverse velocity and the energy is entirely kinetic.
:::

:::richiamo{titolo="Sum-to-product formula for the cosine"}
For every pair of angles $\alpha$ and $\beta$ we have $\cos\alpha+\cos\beta=2\cos\!\left(\dfrac{\alpha+\beta}{2}\right)\cos\!\left(\dfrac{\alpha-\beta}{2}\right)$.
:::

::::teorema{#interferenza-armonica titolo="Sum of two harmonic waves with a phase difference"}
Two waves with the same frequency and the same amplitude $A$, traveling in the same direction with phase difference $\delta$, have as their sum
$$
A\cos(kx-\omega t)+A\cos(kx-\omega t+\delta)=2A\cos\!\left(\dfrac{\delta}{2}\right)\cos\!\left(kx-\omega t+\dfrac{\delta}{2}\right).
$$
The resulting amplitude is $2A\left|\cos\dfrac{\delta}{2}\right|$. It equals $2A$ for $\delta=2m\pi$ and vanishes for $\delta=(2m+1)\pi$, with $m$ an integer. If the two waves start in phase from different sources and arrive at a point after paths that differ by $\Delta r$, then $\delta=k\,\Delta r=\dfrac{2\pi\,\Delta r}{\lambda}$. The waves reinforce each other for $\Delta r=m\lambda$ and cancel for $\Delta r=\left(m+\dfrac{1}{2}\right)\lambda$.

With $\lambda=0.50\,\mathrm{m}$, at a point $2.00\,\mathrm{m}$ from one source and $2.75\,\mathrm{m}$ from the other we have $\Delta r=0.75\,\mathrm{m}=\dfrac{3}{2}\lambda$, so $\delta=3\pi$ and the amplitude is zero. At a point with $\Delta r=1.00\,\mathrm{m}=2\lambda$ we have $\delta=4\pi$ and the amplitude is $2A$. For $\delta=\dfrac{\pi}{2}$ the resulting amplitude is $2A\cos\dfrac{\pi}{4}=\sqrt{2}A\simeq1.41\,A$, as the graph shows.

::grafico{f="cos(pi*x);cos(pi*x+pi/2);sqrt(2)*cos(pi*x+pi/4)" xmin=0 xmax=4 ymin=-2 ymax=2 nomi="x,y/A" legenda="\text{wave 1};\text{wave 2};\text{sum}" titolo="Profiles at $t=0$ of two waves with a phase difference of $\dfrac{\pi}{2}$ and of their sum, with amplitude $\sqrt{2}A$. Horizontal coordinates in meters, with $\lambda=2\,\mathrm{m}$"}

:::dimostrazione
Set $\alpha=kx-\omega t$ and $\beta=kx-\omega t+\delta$. The half-sum is $\dfrac{\alpha+\beta}{2}=kx-\omega t+\dfrac{\delta}{2}$ and the half-difference is $\dfrac{\alpha-\beta}{2}=-\dfrac{\delta}{2}$. The cosine is even, so $\cos\!\left(-\dfrac{\delta}{2}\right)=\cos\dfrac{\delta}{2}$ and the sum-to-product formula gives the stated equality. The factor $2A\cos\dfrac{\delta}{2}$ does not depend on $x$ and $t$, while the second cosine oscillates between $-1$ and $1$, so the amplitude is $2A\left|\cos\dfrac{\delta}{2}\right|$. The cosine of $\dfrac{\delta}{2}$ equals $\pm1$ if $\dfrac{\delta}{2}=m\pi$, that is, $\delta=2m\pi$, and equals $0$ if $\dfrac{\delta}{2}=\dfrac{\pi}{2}+m\pi$, that is, $\delta=(2m+1)\pi$. Finally, a path difference $\Delta r$ is equivalent to a phase difference $k\,\Delta r$, because the phase changes by $k$ for every meter.
:::
::::

## Standing waves on a string

::::teorema{#onde-stazionarie titolo="Nodes, antinodes, and harmonics"}
On an ideal string of length $L$ fixed at both ends, a single standing mode has wavelength and frequency
$$
\lambda_n=\frac{2L}{n},
\qquad
f_n=\frac{nu}{2L},
\qquad n=1,2,3,\ldots
$$
**Nodes** are points where the displacement remains zero at all times. Between two successive nodes there is an **antinode**, a point where the oscillation amplitude is maximum. Successive nodes are $\dfrac{\lambda_n}{2}$ apart, and the distance from a node to the adjacent antinode is $\dfrac{\lambda_n}{4}$. The mode $n=1$ is the fundamental.

:::dimostrazione
Two identical sinusoidal waves traveling in opposite directions can be represented by $A\sin(kx-\omega t)$ and $A\sin(kx+\omega t)$. The sine addition formula gives their sum
$$
y(x,t)=2A\sin(kx)\cos(\omega t).
$$
The local amplitude is $2A|\sin(kx)|$, so its zeros stay fixed in space. For a node at $x=L$ in addition to the one at $x=0$, we need $kL=n\pi$. Using $k=\dfrac{2\pi}{\lambda_n}$ gives $L=n\dfrac{\lambda_n}{2}$, and $u=\lambda_n f_n$ then gives the allowed frequency.
:::
::::

:::esempio{titolo="Third harmonic of a string"}
For a $3\,\mathrm{m}$ string with $u=60\,\mathrm{m/s}$, the fundamental frequency is $f_1=10\,\mathrm{Hz}$. The third harmonic has frequency $f_3=30\,\mathrm{Hz}$ and wavelength $\lambda_3=2\,\mathrm{m}$, because three one-meter intervals span the string. The internal nodes are therefore at $x=1\,\mathrm{m}$ and $x=2\,\mathrm{m}$. The three antinodes lie halfway between the nodes. At certain instants the whole string lies on the equilibrium line, but the antinodes pass through it at maximum speed. Only the nodes stay still.

::grafico{f="sin(pi*x/3);sin(pi*x)" xmin=0 xmax=3 ymin=-1.3 ymax=1.3 nomi="x,profile" legenda="\text{fundamental};\text{third harmonic}" punti="0,0,pieno;1,0,pieno;2,0,pieno;3,0,pieno" titolo="Profiles of the fundamental and third harmonic. The marked points are nodes of the third harmonic. Horizontal coordinates in meters."}

:::

:::attenzione
The nodes of one mode are not nodes of the other modes. On a string of length $L=1.0\,\mathrm{m}$ fixed at both ends, the midpoint $x=0.50\,\mathrm{m}$ is an antinode of the fundamental, because $\sin\dfrac{\pi\cdot0.50}{1.0}=1$, and a node of the second harmonic, because $\sin\dfrac{2\pi\cdot0.50}{1.0}=\sin\pi=0$.
:::

:::esempio{titolo="Guitar string"}
A string with $L=0.65\,\mathrm{m}$, $\mu=4.0\cdot10^{-3}\,\mathrm{kg/m}$, and tension $F_T=80\,\mathrm{N}$ has speed $u=\sqrt{\dfrac{80}{4.0\cdot10^{-3}}}\,\mathrm{m/s}=\sqrt{20000}\,\mathrm{m/s}\simeq141\,\mathrm{m/s}$ and fundamental $f_1=\dfrac{u}{2L}\simeq109\,\mathrm{Hz}$. Pressing the string at the midpoint of its length makes the vibrating part $L'=0.325\,\mathrm{m}$ and the frequency doubles, to about $218\,\mathrm{Hz}$, because $f_1$ is inversely proportional to $L$.
:::
