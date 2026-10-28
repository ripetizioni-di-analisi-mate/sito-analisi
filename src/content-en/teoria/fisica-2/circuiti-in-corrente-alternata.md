---
titolo: Electrical oscillations and alternating-current circuits
sommario: How the charge oscillates in an LC circuit and how the oscillations are damped in an RLC circuit, how resistors, capacitors and inductors respond to a sinusoidal voltage, how phasors and impedance give the current and the phase shift, what resonance and the power factor are, and how a transformer changes an alternating voltage.
---

## LC circuit and electrical oscillations

The circuits are assumed to be in the quasi-static regime, that is, at every instant the current has the same value at all points of a branch; this hypothesis is satisfied when the time taken by an electromagnetic signal to cross the circuit is negligible compared with the period of the varying quantities. The wires have negligible resistance, except where a resistor is indicated.

:::richiamo{titolo="Capacitor and inductor"}
A capacitor of capacitance $C$ with charge $q$ on its positive plate has the voltage $\dfrac{q}{C}$ across it and stores the energy $\dfrac{q^2}{2C}$. In an inductor of inductance $L$ carrying the current $i(t)$ the self-induced emf is $-L\,\dfrac{di}{dt}$, so the potential drop across the inductor, in the direction of the current, is $L\,\dfrac{di}{dt}$; the stored energy is $\dfrac{1}{2} L i^2$. See the topics on conductors, capacitors, and dielectrics and on electromagnetic induction.
:::

:::richiamo{titolo="Equation of harmonic motion"}
The second-order linear differential equation $\ddot{x} + \omega^2 x = 0$, with $\omega > 0$, has general solution $x(t) = A\cos(\omega t + \varphi)$, with $A$ and $\varphi$ constants fixed by the initial conditions. See the Mathematical Analysis 1 topic on differential equations and the Physics 1 topic on oscillations and harmonic motion.
:::

::::teorema{#circuito-lc titolo="Oscillations of the LC circuit"}
Consider a capacitor of capacitance $C$ with initial charge $Q_0$, connected at time $t = 0$ to an ideal inductor of inductance $L$, in a circuit of negligible resistance. Let $q(t)$ be the charge of the initially positive plate and let $i = \dfrac{dq}{dt}$ be the current, with the positive direction being the one that carries charge onto that plate. Then
$$
q(t) = Q_0 \cos(\omega_0 t) , \qquad i(t) = -\omega_0 Q_0 \sin(\omega_0 t) , \qquad \omega_0 = \frac{1}{\sqrt{LC}} .
$$
The charge oscillates in harmonic motion with **natural angular frequency** $\omega_0$, period $T = 2\pi\sqrt{LC}$ and frequency $f_0 = \dfrac{1}{2\pi\sqrt{LC}}$, and the current has amplitude $I_0 = \omega_0 Q_0$. The $LC$ circuit is the simplest electrical oscillator and is used to generate signals of fixed frequency. With $L = 10\,\mathrm{mH}$ and $C = 1.0\,\mu\mathrm{F}$ we have $\omega_0 = \dfrac{1}{\sqrt{10^{-2} \cdot 10^{-6}}}\,\mathrm{rad/s} = 1.0 \cdot 10^4\,\mathrm{rad/s}$ and $f_0 \approx 1.6\,\mathrm{kHz}$.

::grafico{assi=0 uguale=1 linee="-0.42,1.63 0.42,1.63;-0.42,1.37 0.42,1.37;0,1.63 0,3 4,3 4,2.1;4,0.9 4.05,0.91 4.09,0.93 4.12,0.96 4.14,1 4.15,1.05 4.14,1.1 4.12,1.14 4.09,1.17 4.05,1.19 4,1.2 4,1.2 4.05,1.21 4.09,1.23 4.12,1.26 4.14,1.3 4.15,1.35 4.14,1.4 4.12,1.44 4.09,1.47 4.05,1.49 4,1.5 4,1.5 4.05,1.51 4.09,1.53 4.12,1.56 4.14,1.6 4.15,1.65 4.14,1.7 4.12,1.74 4.09,1.77 4.05,1.79 4,1.8 4,1.8 4.05,1.81 4.09,1.83 4.12,1.86 4.14,1.9 4.15,1.95 4.14,2 4.12,2.04 4.09,2.07 4.05,2.09 4,2.1;4,0.9 4,0 0,0 0,1.37" vettori="2.4,3,1.6,3,i" etichette="-0.95,1.38,C;0.6,1.75,+q;0.6,1.0,−q;4.6,1.38,L" xmin=-1.4 xmax=5.4 ymin=-0.5 ymax=3.6 titolo="$LC$ circuit: the positive direction of $i$ is the one in which the current carries charge onto the plate with charge $q$, so $i = \dfrac{dq}{dt}$"}

:::dimostrazione
We traverse the loop in the positive direction of the current. The potential drop across the inductor is $L\,\dfrac{di}{dt}$, and across the capacitor, from the plate with charge $q$ to the other, it is $\dfrac{q}{C}$. There are no sources in the loop, so by the **loop rule** the sum of the two drops is zero; with $i = \dfrac{dq}{dt}$ we obtain
$$
L\,\frac{d^2 q}{dt^2} + \frac{q}{C} = 0
\quad\Longrightarrow\quad
\frac{d^2 q}{dt^2} + \omega_0^2\, q = 0 , \qquad \omega_0^2 = \frac{1}{LC} .
$$
This is the equation of harmonic motion, therefore $q(t) = A\cos(\omega_0 t + \varphi)$. At the initial instant the charge is $Q_0$ and the current is zero, because before the circuit is closed no current flows through the inductor and the current in an inductor varies continuously. The initial conditions form the system
$$
\begin{cases}
A\cos\varphi = Q_0 \\[4pt]
-\omega_0 A \sin\varphi = 0
\end{cases}
$$
which with $A > 0$ gives $\varphi = 0$ and $A = Q_0$. Differentiating $q(t)$ we obtain $i(t)$.
:::
::::

::::teorema{#energia-circuito-lc titolo="Conservation of energy in the LC circuit"}
In the $LC$ circuit the sum of the electric energy of the capacitor and the magnetic energy of the inductor is constant:
$$
U = \frac{q^2}{2C} + \frac{1}{2} L i^2 = \frac{Q_0^2}{2C} .
$$
The energy passes from the electric field of the capacitor to the magnetic field of the inductor and back, twice per period. When the capacitor is discharged all the energy is in the inductor, and the current is maximum in magnitude; equating the two expressions of the energy we obtain $\dfrac{Q_0^2}{2C} = \dfrac{1}{2} L I_0^2$, that is, $I_0 = \dfrac{Q_0}{\sqrt{LC}} = \omega_0 Q_0$. In the circuit with $L = 10\,\mathrm{mH}$ and $C = 1.0\,\mu\mathrm{F}$, if the capacitor is charged to $10\,\mathrm{V}$, we have $Q_0 = 10\,\mu\mathrm{C}$, $U = 50\,\mu\mathrm{J}$ and $I_0 = 0.10\,\mathrm{A}$.

::grafico{f="cos(x);-sin(x)" xmin=-0.5 xmax=13 ymin=-1.5 ymax=1.6 nomi="t," legenda="q(t);i(t)" titolo="Charge $q(t) = Q_0 \cos(\omega_0 t)$ and current $i(t) = -\omega_0 Q_0 \sin(\omega_0 t)$, measured in units of $Q_0$ and of $\omega_0 Q_0$, with time in units of $\dfrac{1}{\omega_0}$: the current is maximum in magnitude when the capacitor is discharged"}

:::dimostrazione
Differentiating $U$ with respect to time and using $i = \dfrac{dq}{dt}$ we obtain
$$
\frac{dU}{dt} = \frac{q}{C}\,\frac{dq}{dt} + L\,i\,\frac{di}{dt} = i \left( \frac{q}{C} + L\,\frac{di}{dt} \right) = 0 ,
$$
because the expression $\dfrac{q}{C} + L\,\dfrac{di}{dt}$ is zero by the loop rule. Hence $U$ is constant and equal to the initial value $\dfrac{Q_0^2}{2C}$, computed when the current is zero.
:::
::::

:::osservazione{#analogia-meccanica titolo="Analogy with the mass-spring oscillator"}
The equation $L\ddot{q} + \dfrac{q}{C} = 0$ has the same form as the equation $m\ddot{x} + kx = 0$ of the mass-spring oscillator, so every result on one translates into the other with the following correspondence.

| Mass-spring oscillator | $LC$ circuit |
|---|---|
| position $x$ | charge $q$ |
| velocity $v = \dot{x}$ | current $i = \dot{q}$ |
| mass $m$ | inductance $L$ |
| spring constant $k$ | reciprocal of the capacitance $\dfrac{1}{C}$ |
| kinetic energy $\dfrac{1}{2} m v^2$ | magnetic energy $\dfrac{1}{2} L i^2$ |
| potential energy $\dfrac{1}{2} k x^2$ | electric energy $\dfrac{q^2}{2C}$ |
| damping coefficient $b$ | resistance $R$ |

For example, the angular frequency $\sqrt{\dfrac{k}{m}}$ of the oscillator becomes $\sqrt{\dfrac{1}{LC}}$. Inductance plays the role of inertia, because it opposes changes in the current as mass opposes changes in velocity. See the Physics 1 topic on oscillations and harmonic motion.
:::

## Series RLC circuit and damped oscillations

:::richiamo{titolo="Second-order linear equations with constant coefficients"}
The equation $\ddot{x} + 2\gamma\dot{x} + \omega_0^2 x = 0$, with $\gamma > 0$ and $\omega_0 > 0$, has characteristic equation $\lambda^2 + 2\gamma\lambda + \omega_0^2 = 0$, with roots $\lambda = -\gamma \pm \sqrt{\gamma^2 - \omega_0^2}$. If $\gamma < \omega_0$ the roots are complex conjugates, with real part $-\gamma$ and imaginary part $\pm\omega_s$, where $\omega_s = \sqrt{\omega_0^2 - \gamma^2}$, and the general solution is $A\,e^{-\gamma t}\cos(\omega_s t + \varphi)$; if $\gamma > \omega_0$ it is a combination of two real exponentials; if $\gamma = \omega_0$ it is $(c_1 + c_2 t)\,e^{-\gamma t}$. See the Mathematical Analysis 1 topic on differential equations.
:::

::::teorema{#circuito-rlc-libero titolo="Damped oscillations of the RLC circuit"}
Consider a capacitor of capacitance $C$ with initial charge $Q_0$ that discharges through an inductor of inductance $L$ and a resistor of resistance $R$, connected in series. The charge satisfies the equation
$$
L\,\frac{d^2 q}{dt^2} + R\,\frac{dq}{dt} + \frac{q}{C} = 0 ,
\qquad\text{i.e.}\qquad
\ddot{q} + 2\gamma\,\dot{q} + \omega_0^2\, q = 0 ,
\qquad
\gamma = \frac{R}{2L} , \quad \omega_0 = \frac{1}{\sqrt{LC}} .
$$
The behavior depends on the comparison between $R$ and the **critical resistance** $R_c = 2\sqrt{\dfrac{L}{C}}$, which corresponds to $\gamma = \omega_0$.

- If $R < R_c$ (underdamping), the charge oscillates with decreasing amplitude, $q(t) = A\,e^{-\gamma t}\cos(\omega_s t + \varphi)$, with angular frequency $\omega_s = \sqrt{\omega_0^2 - \gamma^2}$ smaller than $\omega_0$.
- If $R = R_c$ (critical damping), the charge tends to zero without oscillating; among the regimes without oscillations it is the one in which the charge vanishes most rapidly.
- If $R > R_c$ (overdamping), the charge tends to zero without oscillating, more slowly than in the critical case.

The resistor plays in the circuit the role of viscous friction in the mechanical oscillator. With $L = 10\,\mathrm{mH}$, $C = 1.0\,\mu\mathrm{F}$ and $R = 2.0\,\Omega$ we have $R_c = 200\,\Omega$, so the damping is weak, with $\gamma = 100\,\mathrm{s^{-1}}$ and $\omega_s \approx \omega_0 = 1.0 \cdot 10^4\,\mathrm{rad/s}$.

::grafico{f="exp(-0.12*x)*cos(2*x)" curve="t-21*floor(t/21),(1-2*floor(t/21))*exp(-0.12*(t-21*floor(t/21))),0,41.9" xmin=-0.5 xmax=20 ymin=-1.3 ymax=1.4 nomi="t,q" legenda="q(t);\pm Q_0 e^{-\gamma t}" titolo="Discharge of an underdamped $RLC$ circuit: the charge oscillates with angular frequency $\omega_s$ and its amplitude decreases as $Q_0 e^{-\gamma t}$, with $\gamma = \dfrac{R}{2L}$"}

:::dimostrazione
We traverse the loop in the positive direction of the current, with $i = \dfrac{dq}{dt}$. The potential drop across the resistor is $Ri$ by Ohm's law, and the drops across the capacitor and the inductor are those of the $LC$ circuit. By the loop rule the sum of the three drops is zero, so $L\ddot{q} + R\dot{q} + \dfrac{q}{C} = 0$, and dividing by $L$ we obtain the second form. The characteristic equation $\lambda^2 + 2\gamma\lambda + \omega_0^2 = 0$ has discriminant $4\left( \gamma^2 - \omega_0^2 \right)$. If $\gamma < \omega_0$ the roots are complex conjugates with real part $-\gamma$, therefore the charge is an oscillation of angular frequency $\omega_s$ multiplied by $e^{-\gamma t}$. If $\gamma \geq \omega_0$ the roots are real and negative, since $\sqrt{\gamma^2 - \omega_0^2} < \gamma$, so the solutions are combinations of decreasing exponentials, possibly multiplied by $t$, which do not oscillate. Finally $\gamma < \omega_0$ is equivalent to $\dfrac{R}{2L} < \dfrac{1}{\sqrt{LC}}$, that is, to $R < 2\sqrt{\dfrac{L}{C}}$.
:::
::::

:::osservazione{#energia-rlc titolo="Energy dissipated in the resistor"}
Differentiating the energy $U = \dfrac{q^2}{2C} + \dfrac{1}{2} L i^2$ and using the equation of the circuit we obtain
$$
\frac{dU}{dt} = i \left( \frac{q}{C} + L\,\frac{di}{dt} \right) = -R\,i^2 ,
$$
so the energy decreases at the rate $R i^2$, which is the power dissipated by the **Joule effect** in the resistor. With weak damping and $\gamma$ much smaller than $\omega_0$, the energy is that of an $LC$ circuit with maximum charge $Q_0 e^{-\gamma t}$, that is,
$$
U(t) \approx \frac{Q_0^2}{2C}\,e^{-2\gamma t} = U_0\, e^{-\frac{R}{L} t} .
$$
The energy halves after the time $\dfrac{L \ln 2}{R}$; in the circuit with $R = 2.0\,\Omega$ and $L = 10\,\mathrm{mH}$ this time is about $3.5\,\mathrm{ms}$, equal to about five and a half periods.
:::

## Alternating voltages and currents

:::definizione{#grandezza-alternata titolo="Alternating voltage and current"}
A voltage is called **sinusoidal alternating** if it has the form
$$
v(t) = V_0 \sin(\omega t + \alpha) ,
$$
where $V_0 > 0$ is the amplitude, or peak value, $\omega$ is the angular frequency, in $\mathrm{rad/s}$, and $\alpha$ is the initial phase. The frequency is $f = \dfrac{\omega}{2\pi}$, in hertz, and the period is $T = \dfrac{1}{f}$. Similarly an alternating current has the form $i(t) = I_0 \sin(\omega t + \beta)$. An alternating voltage is obtained from an alternator, in which a coil rotates with constant angular velocity in a uniform magnetic field; see the topic on electromagnetic induction. The European household grid has frequency $f = 50\,\mathrm{Hz}$, hence angular frequency $\omega = 2\pi \cdot 50\,\mathrm{rad/s} \approx 314\,\mathrm{rad/s}$.
:::

:::definizione{#valore-efficace titolo="Rms value"}
The **rms value** (root mean square) of a periodic current $i(t)$ of period $T$ is the square root of the mean value of $i^2$ over one period:
$$
I_{\text{rms}} = \sqrt{\frac{1}{T}\int_0^T i^2(t)\,dt} .
$$
The rms value $V_{\text{rms}}$ of a voltage is defined in the same way. The physical meaning follows from the Joule effect. A resistor $R$ carrying the current $i(t)$ dissipates the instantaneous power $R\,i^2$, so the average power over one period is $R\,I_{\text{rms}}^2$; the rms value is therefore the magnitude of the direct current that dissipates in a resistor the same average power as the alternating current.
:::

::::teorema{#efficace-sinusoidale titolo="Rms value of a sinusoidal quantity"}
For a sinusoidal current $i(t) = I_0 \sin(\omega t + \beta)$ and for a sinusoidal voltage $v(t) = V_0 \sin(\omega t + \alpha)$ we have
$$
I_{\text{rms}} = \frac{I_0}{\sqrt{2}} , \qquad V_{\text{rms}} = \frac{V_0}{\sqrt{2}} .
$$
The values of alternating voltage and current stated for the grid and for appliances are rms values, and alternating-current voltmeters and ammeters are calibrated on them. The grid voltage of $230\,\mathrm{V}$ therefore has amplitude $V_0 = 230\sqrt{2}\,\mathrm{V} \approx 325\,\mathrm{V}$.

:::dimostrazione
By the double-angle formula $\sin^2\theta = \dfrac{1 - \cos(2\theta)}{2}$, so
$$
\frac{1}{T}\int_0^T I_0^2 \sin^2(\omega t + \beta)\,dt = \frac{I_0^2}{2} - \frac{I_0^2}{2T}\int_0^T \cos(2\omega t + 2\beta)\,dt = \frac{I_0^2}{2} ,
$$
because the cosine completes two full periods in the interval $[0, T]$ and its integral is zero. Taking the square root we obtain the claim; for the voltage the computation is identical.
:::
::::

## Resistor, capacitor and inductor in AC

In this section a source imposes the voltage $v(t) = V_0 \sin(\omega t)$ across a single component, and the steady-state current is determined.

:::teorema{#resistore-in-alternata titolo="Resistor in AC"}
If the voltage across a resistor of resistance $R$ is $v(t) = V_0 \sin(\omega t)$, the current is
$$
i(t) = \frac{V_0}{R}\,\sin(\omega t) ,
$$
so it has amplitude $I_0 = \dfrac{V_0}{R}$ and is **in phase** with the voltage. The result follows from Ohm's law, which holds instant by instant, and the ratio of the rms values is also $\dfrac{V_{\text{rms}}}{I_{\text{rms}}} = R$. By the definition of rms value the average power dissipated is $R\,I_{\text{rms}}^2 = \dfrac{V_{\text{rms}}^2}{R}$; a $60\,\mathrm{W}$ incandescent lamp supplied at $230\,\mathrm{V}$ therefore has $R = \dfrac{230^2}{60}\,\Omega \approx 8.8 \cdot 10^2\,\Omega$ and carries the rms current $\dfrac{60}{230}\,\mathrm{A} \approx 0.26\,\mathrm{A}$.
:::

::::teorema{#condensatore-in-alternata titolo="Capacitor in AC"}
If the voltage across a capacitor of capacitance $C$ is $v(t) = V_0 \sin(\omega t)$, the current is
$$
i(t) = \omega C V_0 \cos(\omega t) = \frac{V_0}{X_C}\,\sin\left( \omega t + \frac{\pi}{2} \right) ,
\qquad
X_C = \frac{1}{\omega C} .
$$
The current **leads** the voltage by $\dfrac{\pi}{2}$, that is, it reaches its maximum a quarter of a period earlier, and the amplitudes are related by $V_0 = X_C I_0$. The quantity $X_C$ is called **capacitive reactance** and is measured in ohms; in the ratio of the amplitudes it plays the role of resistance, but the capacitor does not dissipate energy. A $10\,\mu\mathrm{F}$ capacitor at the frequency of $50\,\mathrm{Hz}$ has $X_C = \dfrac{1}{314 \cdot 10^{-5}}\,\Omega \approx 318\,\Omega$, and under the grid voltage it carries the rms current $\dfrac{230}{318}\,\mathrm{A} \approx 0.72\,\mathrm{A}$.

::grafico{f="1.5*sin(x);cos(x)" segmenti="6.283,0,6.283,1;7.854,0,7.854,1.5" xmin=-0.5 xmax=13 ymin=-1.9 ymax=2.1 nomi="t," legenda="v(t);i(t)" titolo="Voltage and current across a capacitor: the current reaches its maximum a quarter of a period before the voltage, that is, it leads by $\dfrac{\pi}{2}$"}

:::dimostrazione
At every instant the charge of the capacitor is $q = Cv = CV_0\sin(\omega t)$, so
$$
i = \frac{dq}{dt} = \omega C V_0 \cos(\omega t) .
$$
Since $\cos(\omega t) = \sin\left( \omega t + \dfrac{\pi}{2} \right)$, the current has amplitude $\omega C V_0 = \dfrac{V_0}{X_C}$ and phase $\dfrac{\pi}{2}$.
:::
::::

::::teorema{#induttore-in-alternata titolo="Inductor in AC"}
If the voltage across an ideal inductor of inductance $L$ is $v(t) = V_0 \sin(\omega t)$, the steady-state current is
$$
i(t) = -\frac{V_0}{\omega L}\cos(\omega t) = \frac{V_0}{X_L}\,\sin\left( \omega t - \frac{\pi}{2} \right) ,
\qquad
X_L = \omega L .
$$
The current **lags** the voltage by $\dfrac{\pi}{2}$, and the amplitudes are related by $V_0 = X_L I_0$. The quantity $X_L$ is called **inductive reactance** and is measured in ohms, since $1\,\mathrm{H} \cdot 1\,\mathrm{s^{-1}} = 1\,\Omega$. A $0.50\,\mathrm{H}$ inductor at the frequency of $50\,\mathrm{Hz}$ has $X_L = 314 \cdot 0.50\,\Omega \approx 157\,\Omega$.

:::dimostrazione
The potential drop across the inductor is $L\,\dfrac{di}{dt}$, so $\dfrac{di}{dt} = \dfrac{V_0}{L}\sin(\omega t)$ and, integrating,
$$
i(t) = -\frac{V_0}{\omega L}\cos(\omega t) + c .
$$
The constant $c$ is a direct current superimposed on the alternating one; because of the resistance, however small, of a real inductor this component vanishes after a transient, so in steady state $c = 0$. Since $-\cos(\omega t) = \sin\left( \omega t - \dfrac{\pi}{2} \right)$, the current has amplitude $\dfrac{V_0}{\omega L}$ and phase $-\dfrac{\pi}{2}$.
:::
::::

:::osservazione{#reattanze-e-frequenza titolo="Reactances and frequency"}
The inductive reactance $X_L = \omega L$ grows with the angular frequency, while the capacitive reactance $X_C = \dfrac{1}{\omega C}$ decreases. At low frequencies the capacitive reactance is large and the inductive one is small, so the capacitor lets little current through and the inductor has a small voltage across it; at high frequencies the opposite happens. In the limit $\omega \to 0$, that is, in direct current in steady state, the capacitor interrupts the circuit and the ideal inductor has zero voltage across it. Filters, which separate the components of a signal at different frequencies, are based on this dependence.
:::

## Phasors

:::definizione{#fasore titolo="Phasor"}
To a sinusoidal quantity $a(t) = A_0 \sin(\omega t + \alpha)$ we associate its **phasor**, the vector in the plane of length $A_0$ that makes the angle $\omega t + \alpha$ with the horizontal axis and therefore rotates counterclockwise with angular velocity $\omega$. The vertical component of the phasor is, at every instant, $a(t)$.

The phasor makes operations on sinusoidal quantities with the same angular frequency geometric. Their phasors rotate together, so the phase shift between two quantities is the fixed angle between the phasors. Moreover the vertical component of a sum of vectors is the sum of the components, therefore the phasor of $a(t) + b(t)$ is the vector sum of the phasors. For example, $3\sin(\omega t) + 4\sin\left( \omega t + \dfrac{\pi}{2} \right)$ has as its phasor the sum of two perpendicular vectors of length $3$ and $4$, so it is a sinusoid of amplitude $5$ and phase $\arctan\dfrac{4}{3} \approx 0.93\,\mathrm{rad}$. In diagrams the phasors are drawn at time $t = 0$; the lengths are often the rms values instead of the amplitudes, since the former differ from the latter by the common factor $\sqrt{2}$ and the angles remain the same.

::grafico{curve="2*cos(t),2*sin(t),0,6.29" uguale=1 vettori="0,0,1.286,1.532,A₀" segmenti="1.286,1.532,0,1.532" punti="0,1.532,pieno" etichette="0.5,0.22,ωt + α;-0.45,1.68,a(t)" xmin=-2.7 xmax=2.9 ymin=-2.5 ymax=2.8 legenda=0 titolo="The phasor of $a(t) = A_0 \sin(\omega t + \alpha)$ is a vector of length $A_0$ that rotates counterclockwise with angular velocity $\omega$: its projection on the vertical axis is $a(t)$"}

:::

:::richiamo{titolo="Exponential form of complex numbers"}
For every real $\theta$ Euler's formula $e^{j\theta} = \cos\theta + j\sin\theta$ holds, and every nonzero complex number can be written as $z = |z|\,e^{j\theta}$. The product of two complex numbers has as modulus the product of the moduli and as argument the sum of the arguments; in particular, multiplying by $j = e^{j\frac{\pi}{2}}$ rotates a number by $\dfrac{\pi}{2}$ counterclockwise in the complex plane. In electrical engineering the imaginary unit is denoted by $j$, because the letter $i$ denotes the current. See the Mathematical Analysis 1 topic on complex numbers.
:::

:::definizione{#impedenza-complessa titolo="Complex impedance"}
Identifying the plane of phasors with the complex plane, the phasor of $a(t) = A_0 \sin(\omega t + \alpha)$ at time $t = 0$ is the complex number $\tilde{A} = A_0\, e^{j\alpha}$, and $a(t)$ is the imaginary part of $\tilde{A}\,e^{j\omega t}$. The **complex impedance** of a component is the ratio $Z = \dfrac{\tilde{V}}{\tilde{I}}$ of the phasor of the voltage across it to the phasor of the current through it. From the theorems on the resistor, the capacitor and the inductor in AC it follows that
$$
Z_R = R , \qquad Z_L = j\omega L , \qquad Z_C = \frac{1}{j\omega C} = -\frac{j}{\omega C} .
$$
The modulus of the impedance is the ratio of the amplitudes, and the argument is the lead of the voltage over the current; for the inductor $|Z_L| = X_L$ and the voltage leads by $\dfrac{\pi}{2}$, for the capacitor $|Z_C| = X_C$ and the voltage lags by $\dfrac{\pi}{2}$.

Kirchhoff's laws hold instant by instant and the phasor of a sum is the sum of the phasors, so Kirchhoff's laws also hold for phasors. It follows that components in series have impedance $Z = Z_1 + Z_2 + \dots$ and components in parallel have $\dfrac{1}{Z} = \dfrac{1}{Z_1} + \dfrac{1}{Z_2} + \dots$, with the same rules as resistances in direct current. For example, a $30\,\Omega$ resistor in series with an inductor of reactance $40\,\Omega$ has impedance $Z = (30 + 40j)\,\Omega$, of modulus $50\,\Omega$.
:::

## Series RLC circuit in sinusoidal steady state

::::teorema{#impedenza-rlc titolo="Impedance of the series RLC circuit"}
A source of alternating voltage $v(t) = V_0 \sin(\omega t)$ supplies a resistor $R$, an inductor $L$ and a capacitor $C$ connected in series. In steady state the current is
$$
i(t) = I_0 \sin(\omega t - \varphi) ,
\qquad
I_0 = \frac{V_0}{Z} ,
$$
where the **impedance** $Z$ and the **phase shift** $\varphi$ are
$$
Z = \sqrt{R^2 + (X_L - X_C)^2} = \sqrt{R^2 + \left( \omega L - \frac{1}{\omega C} \right)^2} ,
\qquad
\tan\varphi = \frac{X_L - X_C}{R} , \quad -\frac{\pi}{2} < \varphi < \frac{\pi}{2} .
$$
The same relation holds between the rms values, $I_{\text{rms}} = \dfrac{V_{\text{rms}}}{Z}$. The theorem also applies to circuits with only two components, setting $X_L = 0$ for an $RC$ circuit and $X_C = 0$ for an $RL$ circuit. The steady state is reached after a transient, which is a solution of the free $RLC$ circuit and decays as $e^{-\gamma t}$.

::grafico{assi=0 uguale=1 linee="0.42,1.5 0.41,1.57 0.4,1.63 0.37,1.69 0.34,1.75 0.3,1.8 0.25,1.84 0.19,1.87 0.13,1.9 0.07,1.91 0,1.92 -0.07,1.91 -0.13,1.9 -0.19,1.87 -0.25,1.84 -0.3,1.8 -0.34,1.75 -0.37,1.69 -0.4,1.63 -0.41,1.57 -0.42,1.5 -0.41,1.43 -0.4,1.37 -0.37,1.31 -0.34,1.25 -0.3,1.2 -0.25,1.16 -0.19,1.13 -0.13,1.1 -0.07,1.09 0,1.08 0.07,1.09 0.13,1.1 0.19,1.13 0.25,1.16 0.3,1.2 0.34,1.25 0.37,1.31 0.4,1.37 0.41,1.43 0.42,1.5;-0.25,1.5 -0.23,1.54 -0.2,1.57 -0.18,1.6 -0.15,1.62 -0.13,1.63 -0.1,1.62 -0.08,1.6 -0.05,1.57 -0.03,1.54 0,1.5 0.03,1.46 0.05,1.43 0.08,1.4 0.1,1.38 0.13,1.37 0.15,1.38 0.18,1.4 0.2,1.43 0.23,1.46 0.25,1.5;0,1.92 0,3 1,3;1,3 1.06,3.18 1.18,2.82 1.29,3.18 1.41,2.82 1.52,3.18 1.64,2.82 1.76,3.18 1.88,2.82 1.99,3.18 2.11,2.82 2.22,3.18 2.34,2.82 2.4,3;2.4,3 3.4,3;3.4,3 3.41,3.05 3.43,3.1 3.47,3.14 3.52,3.17 3.57,3.17 3.63,3.17 3.68,3.14 3.72,3.1 3.74,3.05 3.75,3 3.75,3 3.76,3.05 3.78,3.1 3.82,3.14 3.87,3.17 3.92,3.17 3.98,3.17 4.03,3.14 4.07,3.1 4.09,3.05 4.1,3 4.1,3 4.11,3.05 4.13,3.1 4.17,3.14 4.22,3.17 4.28,3.17 4.33,3.17 4.38,3.14 4.42,3.1 4.44,3.05 4.45,3 4.45,3 4.46,3.05 4.48,3.1 4.52,3.14 4.57,3.17 4.62,3.17 4.68,3.17 4.73,3.14 4.77,3.1 4.79,3.05 4.8,3;4.8,3 6,3 6,1.63;5.58,1.63 6.42,1.63;5.58,1.37 6.42,1.37;6,1.37 6,0 0,0 0,1.08" vettori="3.4,0,2.6,0,i" etichette="1.55,3.5,R;3.95,3.65,L;6.6,1.38,C;-1.5,1.38,v(t)" xmin=-1.7 xmax=7.2 ymin=-0.6 ymax=4.0 titolo="Series $RLC$ circuit supplied by the alternating voltage source $v(t) = V_0 \sin(\omega t)$"}

:::dimostrazione
The same current flows through the three components in series, and its phasor is $\tilde{I} = I_0\,e^{-j\varphi}$. By the definition of complex impedance the phasors of the voltages across the components are $R\,\tilde{I}$, $jX_L\,\tilde{I}$ and $-jX_C\,\tilde{I}$, and by the loop rule their sum is the phasor $\tilde{V} = V_0$ of the source voltage:
$$
V_0 = \left( R + j(X_L - X_C) \right) I_0\, e^{-j\varphi} .
$$
The complex number $R + j(X_L - X_C)$ has modulus $Z$ and argument $\varphi$, with $\tan\varphi = \dfrac{X_L - X_C}{R}$ and $\varphi \in \left( -\dfrac{\pi}{2}, \dfrac{\pi}{2} \right)$ because the real part $R$ is positive. Hence $V_0 = Z\,e^{j\varphi} \cdot I_0\,e^{-j\varphi} = Z I_0$, that is, $I_0 = \dfrac{V_0}{Z}$. In geometric terms, the phasor of the voltage across the resistor has the direction of the current, the phasors of the voltages across the inductor and the capacitor are perpendicular to it and opposite to each other, and the source voltage is the hypotenuse of the right triangle with legs $R I_0$ and $(X_L - X_C)\, I_0$.
:::
::::

:::osservazione{#carattere-induttivo-capacitivo titolo="Inductive circuit and capacitive circuit"}
The sign of the phase shift depends on which reactance prevails.

- If $X_L > X_C$, then $\varphi > 0$ and the current lags the voltage; the circuit is called **inductive**.
- If $X_L < X_C$, then $\varphi < 0$ and the current leads the voltage; the circuit is called **capacitive**.
- If $X_L = X_C$, then $\varphi = 0$ and $Z = R$, so current and voltage are in phase as in a resistor; this is the resonance condition.
:::

:::esempio{titolo="RLC circuit supplied by the grid"}
A $40\,\Omega$ resistor, a $0.20\,\mathrm{H}$ inductor and a $100\,\mu\mathrm{F}$ capacitor in series are supplied by the grid, with $V_{\text{rms}} = 230\,\mathrm{V}$ and $f = 50\,\mathrm{Hz}$. The reactances are $X_L = 314 \cdot 0.20\,\Omega \approx 62.8\,\Omega$ and $X_C = \dfrac{1}{314 \cdot 10^{-4}}\,\Omega \approx 31.8\,\Omega$, so
$$
Z = \sqrt{40^2 + 31.0^2}\,\Omega \approx 50.6\,\Omega ,
\qquad
I_{\text{rms}} = \frac{230}{50.6}\,\mathrm{A} \approx 4.5\,\mathrm{A} ,
\qquad
\varphi = \arctan\frac{31.0}{40} \approx 38^\circ .
$$
The circuit is inductive and the current lags the voltage by about $38^\circ$. The rms voltages across the components are $V_R = R I_{\text{rms}} \approx 182\,\mathrm{V}$, $V_L = X_L I_{\text{rms}} \approx 286\,\mathrm{V}$ and $V_C = X_C I_{\text{rms}} \approx 145\,\mathrm{V}$.

::grafico{assi=0 uguale=1 vettori="0,0,3.03,2.35,V;0,0,0,4.76,VL;0,0,0,-2.41,VC;0,0,3.03,0" segmenti="3.03,0,3.03,2.35;0,2.35,3.03,2.35" etichette="0.42,0.12,φ;1.31,-0.45,VR" xmin=-4 xmax=7.4 ymin=-2.9 ymax=5.4 titolo="Phasors of the rms voltages in the example: $V_R$ has the direction of the current, $V_L$ leads by $\dfrac{\pi}{2}$, $V_C$ lags by $\dfrac{\pi}{2}$, and the sum $V$ makes the angle $\varphi$ with the current"}

:::

:::attenzione{#tensioni-sfasate}
The rms voltages across components in series do *not* add as numbers, because they are out of phase. In the $RLC$ circuit supplied by the grid we have $V_R + V_L + V_C \approx 612\,\mathrm{V}$, while the source supplies $230\,\mathrm{V}$; the correct relation is the one between the phasors, $V_{\text{rms}} = \sqrt{V_R^2 + (V_L - V_C)^2} = \sqrt{182^2 + 141^2}\,\mathrm{V} \approx 230\,\mathrm{V}$. In particular the voltage across the inductor, $286\,\mathrm{V}$, exceeds that of the source.
:::

## Resonance

::::teorema{#risonanza-rlc titolo="Resonance of the series RLC circuit"}
In the series $RLC$ circuit supplied with a voltage of fixed amplitude $V_0$ and variable angular frequency $\omega$, the current amplitude
$$
I_0(\omega) = \frac{V_0}{\sqrt{R^2 + \left( \omega L - \frac{1}{\omega C} \right)^2}}
$$
is maximum for $\omega = \omega_0 = \dfrac{1}{\sqrt{LC}}$, the natural angular frequency of the $LC$ circuit. At **resonance** we have $X_L = X_C$, $Z = R$, $\varphi = 0$ and $I_0 = \dfrac{V_0}{R}$. Resonance makes it possible to select a frequency; for example, a radio receiver selects a station by adjusting the capacitance of an oscillating circuit until $f_0$ coincides with the frequency of the station. With $L = 0.25\,\mathrm{mH}$, a station at $1.0\,\mathrm{MHz}$ requires $C = \dfrac{1}{(2\pi f_0)^2 L} \approx 1.0 \cdot 10^{-10}\,\mathrm{F} = 100\,\mathrm{pF}$.

::grafico{f="500/sqrt(50^2+(20*x-2000/x)^2)+0*sqrt(x);500/sqrt(100^2+(20*x-2000/x)^2)+0*sqrt(x)" asintoti="x=10" xmin=-0.4 xmax=19.5 ymin=-0.5 ymax=12 nomi="ω,I" legenda="R = 50\,\Omega;R = 100\,\Omega" titolo="Rms current as a function of the angular frequency ($\omega$ in $10^3\,\mathrm{rad/s}$, $I_{\text{rms}}$ in $\mathrm{mA}$) for $L = 20\,\mathrm{mH}$, $C = 0.50\,\mu\mathrm{F}$ and $V_{\text{rms}} = 0.50\,\mathrm{V}$: the maximum is at $\omega_0 = 10^4\,\mathrm{rad/s}$, and with the smaller resistance the peak is higher and narrower"}

:::dimostrazione
The numerator $V_0$ does not depend on $\omega$, so $I_0$ is maximum where the denominator is minimum. The radicand is the sum of the constant $R^2$ and the square $\left( \omega L - \dfrac{1}{\omega C} \right)^2 \geq 0$, which vanishes if and only if $\omega L = \dfrac{1}{\omega C}$, that is, for $\omega^2 = \dfrac{1}{LC}$. At that point the denominator takes its minimum value $R$, and $\tan\varphi = 0$.
:::
::::

:::definizione{#fattore-di-qualita titolo="Quality factor and bandwidth"}
The **quality factor** of the series $RLC$ circuit is the pure number
$$
Q = \frac{\omega_0 L}{R} = \frac{1}{R}\sqrt{\frac{L}{C}} .
$$
The **bandwidth** is the interval of angular frequencies in which $I_0 \geq \dfrac{I_{0,\max}}{\sqrt{2}}$, that is, in which the power dissipated in the resistor is at least half of that at resonance. At the endpoints we have $Z = \sqrt{2}\,R$, that is, $\omega L - \dfrac{1}{\omega C} = \pm R$; the positive solutions of these two quadratic equations in $\omega$ are $\omega_\pm = \sqrt{\omega_0^2 + \dfrac{R^2}{4L^2}} \pm \dfrac{R}{2L}$, so the width of the band is
$$
\Delta\omega = \omega_+ - \omega_- = \frac{R}{L} = \frac{\omega_0}{Q} .
$$
A large quality factor corresponds to a narrow resonance, that is, to a highly selective circuit. The radio receiver circuit with $L = 0.25\,\mathrm{mH}$ and $f_0 = 1.0\,\mathrm{MHz}$, if it has $R = 10\,\Omega$, has $Q = \dfrac{2\pi \cdot 10^6 \cdot 2.5 \cdot 10^{-4}}{10} \approx 157$ and $\Delta\omega = 4.0 \cdot 10^4\,\mathrm{rad/s}$, that is, a band about $6.4\,\mathrm{kHz}$ wide in frequency.
:::

:::osservazione{#tensioni-alla-risonanza titolo="Voltages across the inductor and the capacitor at resonance"}
At resonance the voltages across the inductor and the capacitor have the same amplitude $X_L I_0 = \omega_0 L\,\dfrac{V_0}{R} = Q\,V_0$ and are in phase opposition, so their sum is zero at every instant and the source voltage equals the voltage across the resistor. If $Q$ is large, each of the two voltages is much larger than that of the source; for example, with $V_{\text{rms}} = 5.0\,\mathrm{V}$ and $Q = 20$ the capacitor is subjected to an rms voltage of $100\,\mathrm{V}$, and this is taken into account when choosing the components.
:::

## Power in alternating current

::::teorema{#potenza-media titolo="Average power"}
A circuit supplied by the voltage $v(t) = V_0 \sin(\omega t)$ and carrying the current $i(t) = I_0 \sin(\omega t - \varphi)$ absorbs the instantaneous power $p(t) = v(t)\,i(t)$, whose mean value over one period is
$$
P = \frac{1}{2} V_0 I_0 \cos\varphi = V_{\text{rms}}\, I_{\text{rms}} \cos\varphi .
$$
The average power therefore depends on the phase shift, as well as on the rms values. For a resistor $\varphi = 0$ and $P = V_{\text{rms}} I_{\text{rms}}$. For an ideal inductor or capacitor $\varphi = \pm\dfrac{\pi}{2}$ and $P = 0$, because the energy stored during a quarter of a period is returned to the source during the following quarter.

::grafico{f="3*sin(x)*sin(x-pi/3);0.75" xmin=-0.5 xmax=13 ymin=-1 ymax=2.6 nomi="t,p" legenda="p(t);P" titolo="Instantaneous power $p(t) = v(t)\,i(t)$ with phase shift $\varphi = \dfrac{\pi}{3}$: it oscillates at twice the frequency around the mean value $P = \dfrac{1}{2} V_0 I_0 \cos\varphi$ and is negative in the intervals in which the circuit returns energy to the source"}

:::dimostrazione
By Werner's product-to-sum formula $\sin a \sin b = \dfrac{1}{2}\left( \cos(a - b) - \cos(a + b) \right)$ we have
$$
p(t) = V_0 I_0 \sin(\omega t)\sin(\omega t - \varphi) = \frac{1}{2} V_0 I_0 \cos\varphi - \frac{1}{2} V_0 I_0 \cos(2\omega t - \varphi) .
$$
The first term is constant; the second oscillates with angular frequency $2\omega$, completes two full periods in one period $T$ and therefore has zero mean. Hence $P = \dfrac{1}{2} V_0 I_0 \cos\varphi$, and by the rms value of a sinusoidal quantity $\dfrac{1}{2} V_0 I_0 = \dfrac{V_0}{\sqrt{2}} \cdot \dfrac{I_0}{\sqrt{2}} = V_{\text{rms}} I_{\text{rms}}$.
:::
::::

:::definizione{#fattore-di-potenza titolo="Power factor"}
The **power factor** of a circuit is $\cos\varphi$, where $\varphi$ is the phase shift between voltage and current; for a passive circuit it lies between $0$ and $1$. In the series $RLC$ circuit the phasor triangle gives $\cos\varphi = \dfrac{R}{Z}$, and since $V_{\text{rms}} = Z I_{\text{rms}}$ we obtain
$$
P = V_{\text{rms}}\, I_{\text{rms}}\,\frac{R}{Z} = R\, I_{\text{rms}}^2 .
$$
All the average power is dissipated in the resistor, while the inductor and the capacitor exchange energy with the source without absorbing any on average. In the $RLC$ circuit supplied by the grid we have $\cos\varphi = \dfrac{40}{50.6} \approx 0.79$ and $P = 40 \cdot 4.54^2\,\mathrm{W} \approx 8.3 \cdot 10^2\,\mathrm{W}$.
:::

:::osservazione{#rifasamento titolo="Power factor correction"}
A load that absorbs the average power $P$ at the voltage $V_{\text{rms}}$ draws from the line the current $I_{\text{rms}} = \dfrac{P}{V_{\text{rms}} \cos\varphi}$, which is larger the smaller the power factor. A $2.0\,\mathrm{kW}$ motor supplied at $230\,\mathrm{V}$ draws about $12\,\mathrm{A}$ with $\cos\varphi = 0.70$ and about $9.2\,\mathrm{A}$ with $\cos\varphi = 0.95$. The power dissipated in the wires of the line is proportional to $I_{\text{rms}}^2$, therefore the losses are smaller when the power factor is close to $1$. Motors are inductive loads, and their power factor is increased by connecting a capacitor in parallel, whose leading current compensates for the lagging component of the motor current; this operation is called **power factor correction**.
:::

## Transformer

:::richiamo{titolo="Faraday-Neumann-Lenz law"}
In a coil of $N$ turns, each crossed by the magnetic flux $\Phi_B(t)$, the emf $\mathcal{E} = -N\,\dfrac{d\Phi_B}{dt}$ is induced. See the topic on electromagnetic induction.
:::

::::teorema{#trasformatore titolo="Ideal transformer"}
A transformer consists of two windings, the **primary** with $N_1$ turns and the **secondary** with $N_2$ turns, wound on the same iron core. Assume that all the magnetic flux crosses both windings, that their resistances are negligible and that there are no energy losses in the core. If an alternating voltage is applied to the primary, an alternating voltage of the same frequency appears at the secondary, and the rms values satisfy
$$
\frac{V_{2,\text{rms}}}{V_{1,\text{rms}}} = \frac{N_2}{N_1} ,
\qquad
\frac{I_{2,\text{rms}}}{I_{1,\text{rms}}} = \frac{N_1}{N_2} ,
$$
where the second relation concerns the case in which a load is connected to the secondary. With $N_2 > N_1$ the transformer steps up the voltage and reduces the current, with $N_2 < N_1$ it steps down the voltage and increases the current, and the product $V_{\text{rms}} I_{\text{rms}}$ is the same in the two windings. A power supply that brings the grid voltage from $230\,\mathrm{V}$ to $6.0\,\mathrm{V}$ with $N_1 = 920$ turns has $N_2 = 920 \cdot \dfrac{6.0}{230} = 24$ turns. The transformer requires a varying voltage, because a direct voltage at the primary produces in steady state a constant flux, which induces no emf in the secondary.

::grafico{assi=0 uguale=1 poligoni="1,0 2,0 2,4 1,4;4,0 5,0 5,4 4,4;2,3 4,3 4,4 2,4;2,0 4,0 4,1 2,1" linee="-0.5,0.8 0.8,0.8 2.2,1 0.8,1.2 2.2,1.4 0.8,1.6 2.2,1.8 0.8,2 2.2,2.2 0.8,2.4 2.2,2.6 0.8,2.8 2.2,3 0.8,3.2 -0.5,3.2;6.5,1.3 5.2,1.3 3.8,1.53 5.2,1.77 3.8,2 5.2,2.23 3.8,2.47 5.2,2.7 6.5,2.7" punti="-0.5,0.8,vuoto;-0.5,3.2,vuoto;6.5,1.3,vuoto;6.5,2.7,vuoto" etichette="-1.25,1.9,V₁;6.75,1.9,V₂;1.15,4.35,N₁;4.15,4.35,N₂" xmin=-1.5 xmax=7.5 ymin=-0.4 ymax=4.8 titolo="Transformer: the primary with $N_1$ turns and the secondary with $N_2$ turns are wound on the same iron core, which channels the magnetic flux from one to the other"}

:::dimostrazione
Let $\Phi_B(t)$ be the flux of the magnetic field through one turn, equal by hypothesis in all the turns of the two windings. By the **Faraday-Neumann-Lenz law** the emf induced in the primary is $-N_1\,\dfrac{d\Phi_B}{dt}$ and the one induced in the secondary is $-N_2\,\dfrac{d\Phi_B}{dt}$. The resistance of the primary is negligible, so by the loop rule the applied voltage $v_1$ is equal in magnitude to the emf induced in the primary; the secondary also has negligible resistance, so the voltage $v_2$ across it is equal in magnitude to the emf induced in it. Therefore at every instant
$$
v_2(t) = \pm \frac{N_2}{N_1}\, v_1(t) ,
$$
with the sign fixed by the winding direction, and the same ratio holds between the rms values. In the ideal transformer there are no losses and the two currents have the same phase shift with respect to their respective voltages, so the average power absorbed by the primary equals the power delivered to the load, $V_{1,\text{rms}} I_{1,\text{rms}} = V_{2,\text{rms}} I_{2,\text{rms}}$. It follows that $\dfrac{I_{2,\text{rms}}}{I_{1,\text{rms}}} = \dfrac{V_{1,\text{rms}}}{V_{2,\text{rms}}} = \dfrac{N_1}{N_2}$.
:::
::::

:::osservazione{#trasporto-energia titolo="High-voltage transmission of electrical energy"}
A power plant that sends the power $P$ along a line of resistance $R_\ell$, with rms voltage $V$ and power factor $1$, drives the rms current $I = \dfrac{P}{V}$ through the line and loses in it the power
$$
P_{\text{lost}} = R_\ell\, I^2 = \frac{R_\ell\, P^2}{V^2} .
$$
For the same transmitted power, the losses are inversely proportional to the square of the voltage. For $P = 1.0\,\mathrm{MW}$ and $R_\ell = 5.0\,\Omega$, $50\,\mathrm{kW}$ are lost at $10\,\mathrm{kV}$ and only $500\,\mathrm{W}$ at $100\,\mathrm{kV}$. For this reason electrical energy is transmitted at high voltage; transformers step up the voltage at the output of the power plant and step it down near the users, and the possibility of doing so is one of the reasons why the distribution grid operates in alternating current.
:::
