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

:::esempio{titolo="Position, velocity, and direction of motion"}
With $A=0.050\,\mathrm{m}$, $T=0.50\,\mathrm{s}$, and $\varphi=0$, we have $\omega=4\pi\,\mathrm{rad/s}$. At $t=\dfrac{T}{4}=0.125\,\mathrm{s}$ the phase is $\dfrac{\pi}{2}$, so $x=0$ and $v=-4\pi\cdot 0.050\,\mathrm{m/s}\simeq -0.628\,\mathrm{m/s}$. At $t=\dfrac{3T}{4}$ the position is again $x=0$, but the sine is $-1$ and the velocity is positive. The same position thus corresponds to two different states.

::grafico{f="cos(pi*x/250);-sin(pi*x/250)" xmin=0 xmax=500 ymin=-1.3 ymax=1.3 nomi="t,ratio" legenda="\dfrac{x}{A};\dfrac{v}{\omega A}" punti="125,0,pieno;125,-1,pieno;375,0,pieno;375,1,pieno" titolo="In one 0.50 s period, the body passes through equilibrium first with negative velocity and then with positive velocity. Time in milliseconds."}

:::

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

:::teorema{#energia-armonica titolo="Energy of a spring oscillator"}
For an ideal spring oscillator without dissipation, setting potential energy to zero at equilibrium gives the mechanical energy
$$
E=\frac{1}{2}mv^2+\frac{1}{2}kx^2
=\frac{1}{2}kA^2.
$$
The last equality comes from evaluating the energy at either turning point. There $|x|=A$ and the velocity is zero. Halfway to the positive turning point, $x=\dfrac{A}{2}$, the elastic energy is $\dfrac{E}{4}$, so the kinetic energy is $\dfrac{3E}{4}$. Conservation of energy gives
$$
|v|=\sqrt{\frac{k}{m}(A^2-x^2)}.
$$
This relation gives the magnitude of the velocity from a known position. Its sign requires the direction of motion at that instant.
:::

:::esempio{titolo="Energy balance at an intermediate position"}
With $k=200\,\mathrm{N/m}$, $m=0.50\,\mathrm{kg}$, and $A=0.050\,\mathrm{m}$, we get $E=0.25\,\mathrm{J}$. At $x=0.030\,\mathrm{m}$ the potential energy is $0.090\,\mathrm{J}$, so $K=0.160\,\mathrm{J}$. From $K=\dfrac{1}{2}mv^2$ it follows that $|v|=0.80\,\mathrm{m/s}$. The velocity is negative if the body is moving toward $x=0$ at that instant, because the body is to the right of equilibrium.
:::

## Simple pendulum and resonance

::::teorema{#pendolo titolo="Small oscillations of a pendulum"}
A simple pendulum consists of a point mass suspended from an inextensible string of length $\ell$, with negligible string mass. With negligible friction and small angles about the vertical, the period is
$$
T=2\pi\sqrt{\frac{\ell}{g}}.
$$
For $\ell=1.0\,\mathrm{m}$ and $g=9.81\,\mathrm{m/s^2}$, the period is about $2.01\,\mathrm{s}$. The mass cancels out when we calculate the acceleration. A pendulum one quarter as long has half the period at the same $g$.

:::dimostrazione
Measure the angle $\theta$ from the downward vertical and use the signed arc displacement $s=\ell\theta$. The tension in the string is radial, so the tangential force comes from the component of the weight, $-mg\sin\theta$. Dividing by $m$ gives $a_{\mathrm{tan}}=-g\sin\theta$. For small $\theta$ in radians, $\sin\theta\simeq\theta$. It follows that $a_{\mathrm{tan}}\simeq-\dfrac{g}{\ell}s$, so the motion along the arc is approximately harmonic with $\omega=\sqrt{\dfrac{g}{\ell}}$, giving the stated period.
:::
::::

:::attenzione
The formula for the period relies on the approximation $\sin\theta\simeq\theta$. For an amplitude of $60^\circ$ we have $\theta=\dfrac{\pi}{3}\,\mathrm{rad}$ and $\sin\theta=\dfrac{\sqrt{3}}{2}$, about $17\%$ less than $\theta$. At large angles the restoring force departs from a linear law and the period also depends on the amplitude.
:::

:::osservazione
Friction removes energy from an oscillator and reduces its amplitude over time. A periodic external force can compensate for the dissipation. With weak damping, the steady-state amplitude reaches a maximum when the driving frequency is close to the system's natural frequency. This phenomenon is called **resonance**. For example, pushing a swing once per cycle in the direction the seat is moving adds energy with each push. Dissipation limits the amplitude reached.
:::

## Propagation and reading graphs

:::definizione{#onda titolo="Mechanical waves and wave speed"}
A **mechanical wave** is a disturbance that propagates through a medium. On a string, let the $x$ axis run along the string at rest. The value $y(x,t)$ is the transverse displacement of the point on the string whose equilibrium coordinate is $x$. As the wave passes, the point moves in the transverse direction. A crest advances along the string because successive points reach their maximum at successive times. The crest and a point on the string therefore have different velocities. In a longitudinal wave, such as sound in a fluid, local displacements are parallel to the direction of propagation.

The **wavelength** $\lambda$ is the distance between two successive crests observed at one instant. The **period** $T$ is the time between the passage of two successive crests through the same point. Since a crest travels $\lambda$ in time $T$, the magnitude of the wave velocity is
$$
u=\frac{\lambda}{T}=\lambda f.
$$
:::

:::esempio{titolo="A snapshot and a recording of the same wave"}
In the first graph $t=0$ is fixed and the horizontal axis represents position $x$. Crests are $2\,\mathrm{m}$ apart, so $\lambda=2\,\mathrm{m}$. The second graph follows the single point $x=0$. The horizontal axis represents time $t$ and the maxima are $0.20\,\mathrm{s}$ apart, so $T=0.20\,\mathrm{s}$. The wave travels at $u=\dfrac{2}{0.20}\,\mathrm{m/s}=10\,\mathrm{m/s}$.

::grafico{f="3*cos(pi*x)" xmin=0 xmax=4.2 ymin=-4 ymax=4 nomi="x,y (cm)" punti="0,3,pieno;2,3,pieno;4,3,pieno" titolo="Profile at t = 0, with crests at x = 0 m, 2 m, and 4 m. Horizontal coordinates in meters."}

::grafico{f="3*cos(pi*x/100)" xmin=0 xmax=400 ymin=-4 ymax=4 nomi="t,y (cm)" punti="0,3,pieno;200,3,pieno;400,3,pieno" titolo="Displacement at x = 0, with maxima at t = 0 ms, 200 ms, and 400 ms. Time in milliseconds."}

A crest and the adjacent trough are $\dfrac{\lambda}{2}=1\,\mathrm{m}$ apart horizontally. The vertical difference between the same points is $6\,\mathrm{cm}$, twice the amplitude, because the vertical coordinates are $+3\,\mathrm{cm}$ and $-3\,\mathrm{cm}$. The two measurements use different axes.
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
The wavenumber $k$ is the change in phase per unit length and is measured in $\mathrm{rad/m}$. Here $k$ denotes the wavenumber because it multiplies a length. To find the direction of propagation, follow a crest, which stays at the same phase. Between two times we have $k\Delta x-\omega\Delta t=0$, so $\Delta x=\dfrac{\omega}{k}\Delta t>0$ for $\Delta t>0$. If the phase is $kx+\omega t+\varphi$, the same condition gives $\Delta x=-\dfrac{\omega}{k}\Delta t<0$.

At a fixed time the phase difference between two positions is $k\Delta x$. Points separated by $\dfrac{\lambda}{2}$ therefore have opposite displacements at the same instant. At a fixed position in the wave traveling toward increasing $x$, the phase changes by $-\omega\Delta t$. A full wavelength in space or a full period in time brings the cosine back to the same value.
:::

:::esempio{titolo="The crest advances while the point at the crest is at rest"}
For $y(x,t)=0.03\cos(2\pi x-8\pi t)$, with distances in meters and times in seconds, we find $\lambda=1\,\mathrm{m}$ and $u=4\,\mathrm{m/s}$. The crest that passes through the origin at $t=0$ satisfies $2\pi x-8\pi t=0$, so at $t=0.10\,\mathrm{s}$ it is at $x=0.40\,\mathrm{m}$. At that instant the material point there is at the maximum of its oscillation, so its instantaneous transverse velocity is zero. Its maximum speed, reached when passing through equilibrium, is $\omega A=0.24\pi\,\mathrm{m/s}$.
:::

:::teorema{#velocita-su-corda titolo="Speed on a stretched string"}
For small transverse disturbances on an ideal uniform string with tension $F_T$ and mass per unit length $\mu$, we have
$$
u=\sqrt{\frac{F_T}{\mu}}.
$$
Applying four times the tension to the same string doubles the speed. If a $2.0\,\mathrm{m}$ length of string has mass $20\,\mathrm{g}$, then $\mu=0.010\,\mathrm{kg/m}$. With $F_T=100\,\mathrm{N}$, we get $u=100\,\mathrm{m/s}$. The source sets the frequency. At a junction with a string that has a different wave speed, both segments must oscillate at the same frequency at the junction, so $\lambda=\dfrac{u}{f}$ changes.
:::

## Superposition and reflection

:::teorema{#sovrapposizione titolo="Adding disturbances"}
In the linear regime, the resulting displacement is the algebraic sum of the displacements the waves would produce separately. For two identical waves in phase, the sum has amplitude $2A$. For two identical waves in phase opposition, the resulting displacement is zero. If the waves are in phase opposition but have amplitudes $5\,\mathrm{cm}$ and $2\,\mathrm{cm}$, the resulting amplitude at the point of overlap is $3\,\mathrm{cm}$. When the first disturbance is at $+5\,\mathrm{cm}$, the second is at $-2\,\mathrm{cm}$ and the total displacement is $+3\,\mathrm{cm}$.

The sum applies to **displacements**. Energy quantities depend on the square of the amplitude under otherwise equal conditions, so the distribution of energy also depends on the relative phase.
:::

:::esempio{titolo="Pulse reflection at fixed and free ends"}
Suppose a pulse with positive displacement arrives. At a fixed end the total displacement must be zero at all times. The reflected pulse must therefore provide a displacement opposite to the incident pulse at the boundary and returns inverted. An ideal free end can move. Its boundary condition is zero slope, and the incident and reflected pulses have the same sign. In both cases the reflected pulse travels in the opposite direction to the incident one.
:::

## Standing waves on a string

::::teorema{#onde-stazionarie titolo="Nodes, antinodes, and harmonics"}
On an ideal string of length $L$ fixed at both ends, a single standing mode has wavelength and frequency
$$
\lambda_n=\frac{2L}{n},
\qquad
f_n=\frac{nu}{2L},
\qquad n=1,2,3,\ldots
$$
**Nodes** are points where the displacement remains zero at all times. Between successive nodes there is an **antinode**, a point of maximum oscillation amplitude. Successive nodes are $\dfrac{\lambda_n}{2}$ apart, and the distance from a node to the adjacent antinode is $\dfrac{\lambda_n}{4}$. The mode $n=1$ is the fundamental.

:::dimostrazione
Two identical sinusoidal waves traveling in opposite directions can be represented by $A\sin(kx-\omega t)$ and $A\sin(kx+\omega t)$. The sine addition formula gives their sum
$$
y(x,t)=2A\sin(kx)\cos(\omega t).
$$
The local amplitude is $2A|\sin(kx)|$, so its zeros stay fixed in space. For a node at $x=L$ in addition to the one at $x=0$, we need $kL=n\pi$. Using $k=\dfrac{2\pi}{\lambda_n}$ gives $L=n\dfrac{\lambda_n}{2}$, then $u=\lambda_n f_n$ gives the allowed frequency.
:::
::::

:::esempio{titolo="Third harmonic of a string"}
For a $3\,\mathrm{m}$ string with $u=60\,\mathrm{m/s}$, the fundamental frequency is $f_1=10\,\mathrm{Hz}$. The third harmonic has frequency $f_3=30\,\mathrm{Hz}$ and wavelength $\lambda_3=2\,\mathrm{m}$, because three one-meter intervals span the string. The internal nodes are therefore at $x=1\,\mathrm{m}$ and $x=2\,\mathrm{m}$. The three antinodes lie halfway between the nodes. At certain instants the whole string lies on the equilibrium line, but the antinodes pass through it at maximum speed. Only the nodes stay still.

::grafico{f="sin(pi*x/3);sin(pi*x)" xmin=0 xmax=3 ymin=-1.3 ymax=1.3 nomi="x,profile" legenda="fundamental;third harmonic" punti="0,0,pieno;1,0,pieno;2,0,pieno;3,0,pieno" titolo="Profiles of the fundamental and third harmonic. The marked points are nodes of the third harmonic. Horizontal coordinates in meters."}

:::
