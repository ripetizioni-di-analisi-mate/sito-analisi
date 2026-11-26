---
titolo: Alternating current and transformers
sommario: How an alternator produces a sinusoidal electromotive force, what root-mean-square values represent, how resistors, inductors, and capacitors behave in AC circuits, how to calculate impedance, phase difference, resonance, and average power in a series RLC circuit, how a transformer works, and how charge oscillates in an LC circuit.
---

## Alternators and sinusoidal electromotive force

:::richiamo{titolo="Magnetic flux through a loop"}
Let $\vec{B}$ be a uniform magnetic field and $S$ the area of a planar loop whose unit normal $\hat{n}$ makes an angle $\theta$ with $\vec{B}$. The flux of $\vec{B}$ through the loop is then $\Phi_B = B S \cos\theta$.
:::

:::richiamo{titolo="Derivative of a composite function"}
If $g$ is differentiable at $t$ and $f$ is differentiable at $g(t)$, then $f\big( g(t) \big)$ is differentiable at $t$ and its derivative is $f'\big( g(t) \big) \cdot g'(t)$.
:::

:::richiamo{titolo="Faraday’s law of induction"}
If the magnetic flux linked with a circuit is a differentiable function $\Phi_B(t)$, the emf induced in the circuit is $\mathcal{E}(t) = -\dfrac{d\Phi_B}{dt}$.
:::

::::teorema{#alternatore titolo="Electromotive force of an alternator"}
A coil of $N$ planar turns, each of area $S$, rotates at a constant angular speed $\omega$ in a uniform magnetic field $\vec{B}$. The axis of rotation is perpendicular to $\vec{B}$, and at time $t = 0$ the normal $\hat{n}$ to the turns points in the same direction as $\vec{B}$. The emf induced in the coil is then
$$
\mathcal{E}(t) = N B S \omega \sin(\omega t) .
$$
A device of this type is called an **alternator**. The emf changes sign twice per revolution and has a peak value of $\mathcal{E}_0 = N B S \omega$. Its frequency equals the rotational frequency of the coil. For example, a coil with $50$ turns, each of area $0.040\,\mathrm{m^2}$, that makes $50$ revolutions per second in a field of $0.25\,\mathrm{T}$ has $\omega = 2\pi \cdot 50\,\mathrm{rad/s} \approx 314\,\mathrm{rad/s}$, so
$$
\mathcal{E}_0 = 50 \cdot 0.25 \cdot 0.040 \cdot 314\,\mathrm{V} \approx 157\,\mathrm{V} .
$$

::grafico{assi=0 uguale=1 vettori="-3,1.7,3,1.7,B;-3,-1.7,3,-1.7;0,0,1.149,0.964,n̂" unicolore=1 linee="0.836,-0.996 -0.836,0.996" segmenti="0,0,1.7,0" curve="0.6*cos(t),0.6*sin(t),0,0.698" punti="0,0,pieno" etichette="0.72,0.22,θ;-0.6,-0.35,⊙" legenda=0 xmin=-3.2 xmax=3.4 ymin=-2.2 ymax=2.3 titolo="The coil viewed along its axis of rotation, perpendicular to the page ($\odot$). The line segment represents a turn seen edge-on, and its normal $\hat{n}$ makes an angle $\theta = \omega t$ with $\vec{B}$"}

:::dimostrazione
The coil undergoes uniform circular motion, so at time $t$ its normal $\hat{n}$ has rotated through an angle $\theta = \omega t$ from the direction of $\vec{B}$.

The field is uniform and each turn is planar, so the flux through one turn is $B S \cos(\omega t)$. The same flux passes through each of the $N$ turns, so the total flux linkage of the coil is
$$
\Phi_B(t) = N B S \cos(\omega t) .
$$
By the chain rule, the derivative of $\cos(\omega t)$ is $-\omega \sin(\omega t)$. Applying **Faraday’s law of induction** therefore gives
$$
\mathcal{E}(t) = -\frac{d\Phi_B}{dt} = -N B S \cdot \big( -\omega \sin(\omega t) \big) = N B S \omega \sin(\omega t) .
$$
:::
::::

:::osservazione{#flusso-e-fem titolo="Maximum flux and zero emf"}
The flux is greatest when the plane of the turns is perpendicular to $\vec{B}$, that is, at $\omega t = 0$. At that instant the emf is zero. The magnitude of the emf is greatest when the plane of the turns is parallel to $\vec{B}$, that is, when the flux is zero and changing most rapidly.

::grafico{f="cos(0.314*x);sin(0.314*x)" xmin=0 xmax=42 ymin=-1.5 ymax=1.6 nomi="t," legenda="\dfrac{\Phi_B}{NBS};\dfrac{\mathcal{E}}{\mathcal{E}_0}" titolo="Flux linkage and emf of a $50\,\mathrm{Hz}$ alternator, each divided by its peak value, with $t$ in milliseconds. The period is $20\,\mathrm{ms}$, and the emf is zero when the magnitude of the flux is greatest"}

In a power plant, a turbine drives the coil. When the coil is connected to a circuit, it carries current. By Lenz’s law, the magnetic forces on the coil oppose its rotation. The turbine therefore does work that is converted into electrical energy.
:::

:::definizione{#grandezze-alternate titolo="Alternating voltage and current"}
An alternating voltage is **sinusoidal** if it has the form
$$
v(t) = V_0 \sin(\omega t + \alpha) ,
$$
where $V_0 > 0$ is the **amplitude**, or peak value, $\omega$ is the **angular frequency**, measured in $\mathrm{rad/s}$, and $\alpha$ is the initial phase. The frequency is $f = \dfrac{\omega}{2\pi}$ and the period is $T = \dfrac{1}{f}$. Similarly, a sinusoidal alternating current has the form $i(t) = I_0 \sin(\omega t + \beta)$. The Italian power grid operates at a frequency of $f = 50\,\mathrm{Hz}$, so its period is $T = \dfrac{1}{50}\,\mathrm{s} = 20\,\mathrm{ms}$ and its angular frequency is $\omega = 2\pi \cdot 50\,\mathrm{rad/s} \approx 314\,\mathrm{rad/s}$.
:::

## Root-mean-square values

:::definizione{#valore-efficace titolo="Root-mean-square value"}
The **root-mean-square (rms) value** $I_{\text{eff}}$ of an alternating current is the magnitude of the direct current that dissipates the same average power in the same resistor.

A resistor of resistance $R$ carrying a current $i(t)$ dissipates an instantaneous power $R\,i^2$ through Joule heating. Thus $R\,I_{\text{eff}}^2$ equals the average of $R\,i^2$ over one period, and $I_{\text{eff}}$ is the square root of the average of $i^2$. The rms value $V_{\text{eff}}$ of an alternating voltage is defined in the same way. Using rms values, we can calculate the average power with the same formula as for direct current, $P = R\,I_{\text{eff}}^2$.
:::

:::richiamo{titolo="Average value of a function"}
Let $f$ be continuous on the interval $[a, b]$. The average value of $f$ on $[a, b]$ is the number $\dfrac{1}{b - a} \displaystyle\int_a^b f(x)\,dx$.
:::

::::teorema{#efficace-sinusoidale titolo="Rms value of a sinusoidal quantity"}
For a current $i(t) = I_0 \sin(\omega t)$ and a voltage $v(t) = V_0 \sin(\omega t)$, the following relations hold:
$$
I_{\text{eff}} = \frac{I_0}{\sqrt{2}} ,
\qquad
V_{\text{eff}} = \frac{V_0}{\sqrt{2}} .
$$
The values quoted for the power grid and household appliances are rms values, and AC meters measure rms values. A supply voltage of $230\,\mathrm{V}$ therefore has an amplitude of $V_0 = 230\sqrt{2}\,\mathrm{V} \approx 325\,\mathrm{V}$.

::grafico{f="2*sin(0.314*x);4*sin(0.314*x)^2" asintoti="y=2" xmin=0 xmax=42 ymin=-3 ymax=4.6 nomi="t," legenda="i(t);i^2(t)" titolo="A current with amplitude $I_0 = 2\,\mathrm{A}$ and frequency $50\,\mathrm{Hz}$, with $t$ in milliseconds, and its square. The average of $i^2$ is $2\,\mathrm{A^2}$, half the maximum $4\,\mathrm{A^2}$, so $I_{\text{eff}} = \sqrt{2}\,\mathrm{A}$"}

:::dimostrazione
We calculate the average of $\sin^2(\omega t)$ over one period $T$, with $\omega T = 2\pi$. The double-angle identity $\cos(2x) = 1 - 2\sin^2 x$ gives $\sin^2(\omega t) = \dfrac{1 - \cos(2\omega t)}{2}$, so
$$
\begin{aligned}
\frac{1}{T} \int_0^T \sin^2(\omega t)\,dt
&= \frac{1}{T} \int_0^T \frac{1}{2}\,dt - \frac{1}{2T} \int_0^T \cos(2\omega t)\,dt \\[6pt]
&= \frac{1}{2} - \frac{1}{2T} \left[ \frac{\sin(2\omega t)}{2\omega} \right]_0^T \\[6pt]
&= \frac{1}{2} - \frac{1}{2T} \cdot \frac{\sin(4\pi) - \sin 0}{2\omega} = \frac{1}{2} .
\end{aligned}
$$
The instantaneous power dissipated in a resistor $R$ is $R\,i^2 = R\,I_0^2 \sin^2(\omega t)$, so its average over one period is $\dfrac{1}{2} R\,I_0^2$. By the definition of the rms value, this average equals $R\,I_{\text{eff}}^2$, so $I_{\text{eff}}^2 = \dfrac{I_0^2}{2}$ and $I_{\text{eff}} = \dfrac{I_0}{\sqrt{2}}$. The calculation for voltage is the same, with $V_0$ in place of $I_0$.
:::
::::

:::esempio{titolo="A kettle connected to the power grid"}
A $2000\,\mathrm{W}$ kettle operates at an rms voltage of $230\,\mathrm{V}$. The average power is $P = V_{\text{eff}}\,I_{\text{eff}}$, as with direct current, so
$$
I_{\text{eff}} = \frac{P}{V_{\text{eff}}} = \frac{2000}{230}\,\mathrm{A} \approx 8.70\,\mathrm{A} ,
\qquad
R = \frac{V_{\text{eff}}^2}{P} = \frac{230^2}{2000}\,\Omega \approx 26.5\,\Omega .
$$
The current amplitude is $I_0 = \sqrt{2}\,I_{\text{eff}} \approx 12.3\,\mathrm{A}$, meaning that the current oscillates between $-12.3\,\mathrm{A}$ and $12.3\,\mathrm{A}$.
:::

## Purely resistive, inductive, and capacitive circuits

:::teorema{#circuito-resistivo titolo="Purely resistive circuit"}
If the voltage across a resistor of resistance $R$ is $v(t) = V_0 \sin(\omega t)$, the current is
$$
i(t) = \frac{V_0}{R} \sin(\omega t) .
$$
The current has amplitude $I_0 = \dfrac{V_0}{R}$ and is **in phase** with the voltage: the two quantities pass through zero and reach their peaks at the same times. This result follows from Ohm’s law, which holds at every instant. Dividing the amplitudes by $\sqrt{2}$ gives $V_{\text{eff}} = R\,I_{\text{eff}}$. For example, a $46\,\Omega$ resistor connected to the power grid carries an rms current of $I_{\text{eff}} = \dfrac{230}{46}\,\mathrm{A} = 5.0\,\mathrm{A}$ and dissipates an average power of $P = 230 \cdot 5.0\,\mathrm{W} = 1.15\,\mathrm{kW}$.
:::

:::richiamo{titolo="Self-induced emf"}
The emf induced in an inductor of inductance $L$ carrying a current $i(t)$ is $\mathcal{E} = -L\,\dfrac{di}{dt}$.
:::

:::teorema{#circuito-induttivo titolo="Purely inductive circuit"}
An AC voltage source is connected to an ideal inductor with inductance $L$ and negligible resistance. If the current is $i(t) = I_0 \sin(\omega t)$, the voltage across the inductor is
$$
v(t) = \omega L I_0 \cos(\omega t) = X_L I_0 \sin\left( \omega t + \frac{\pi}{2} \right) ,
\qquad
X_L = \omega L .
$$
The voltage **leads** the current by $\dfrac{\pi}{2}$, meaning that it reaches its peak a quarter of a period earlier. Equivalently, the current lags the voltage by $\dfrac{\pi}{2}$. The quantity $X_L$ is called the **inductive reactance** and is measured in ohms because $1\,\mathrm{H} = 1\,\mathrm{V \cdot s/A}$. The amplitudes and rms values are related by $V_0 = X_L I_0$ and $V_{\text{eff}} = X_L I_{\text{eff}}$, as in Ohm’s law.

The result follows from Kirchhoff’s loop rule. The circuit resistance is zero, so the source voltage and the self-induced emf add to zero, giving $v = L\,\dfrac{di}{dt}$. Differentiating $i(t)$ yields the formula. For example, a $0.30\,\mathrm{H}$ inductor connected to the power grid has $X_L = 314 \cdot 0.30\,\Omega \approx 94.2\,\Omega$ and carries an rms current of $I_{\text{eff}} = \dfrac{230}{94.2}\,\mathrm{A} \approx 2.44\,\mathrm{A}$.

::grafico{f="1.5*cos(x);sin(x)" segmenti="6.283,0,6.283,1.5;7.854,0,7.854,1" xmin=0 xmax=13 ymin=-2 ymax=2.2 nomi="ωt," legenda="v(t);i(t)" titolo="Purely inductive circuit. The voltage peaks at $\omega t = 2\pi$ and the current a quarter of a period later, at $\omega t = \dfrac{5\pi}{2}$. The current lags the voltage by $\dfrac{\pi}{2}$"}

:::

:::teorema{#circuito-capacitivo titolo="Purely capacitive circuit"}
If the voltage across a capacitor of capacitance $C$ is $v(t) = V_0 \sin(\omega t)$, the current in the circuit is
$$
i(t) = \omega C V_0 \cos(\omega t) = \frac{V_0}{X_C} \sin\left( \omega t + \frac{\pi}{2} \right) ,
\qquad
X_C = \frac{1}{\omega C} .
$$
The current **leads** the voltage by $\dfrac{\pi}{2}$. The quantity $X_C$ is called the **capacitive reactance** and is measured in ohms. The resulting relation is $V_{\text{eff}} = X_C I_{\text{eff}}$.

This result follows from the relation between charge and voltage for a capacitor. At each instant the charge on its plates is $q = C v = C V_0 \sin(\omega t)$, and the current in the wires is its derivative, $i = \dfrac{dq}{dt}$. Charges do not cross the dielectric. Current flows in the wires because the plates charge and discharge twice per period. For example, a $20\,\mu\mathrm{F}$ capacitor connected to the power grid has $X_C = \dfrac{1}{314 \cdot 20 \cdot 10^{-6}}\,\Omega \approx 159\,\Omega$, and the rms current is $I_{\text{eff}} = \dfrac{230}{159}\,\mathrm{A} \approx 1.45\,\mathrm{A}$.

::grafico{f="1.5*sin(x);cos(x)" segmenti="7.854,0,7.854,1.5;6.283,0,6.283,1" xmin=0 xmax=13 ymin=-2 ymax=2.2 nomi="ωt," legenda="v(t);i(t)" titolo="Purely capacitive circuit. The current peaks at $\omega t = 2\pi$ and the voltage a quarter of a period later. The current leads the voltage by $\dfrac{\pi}{2}$"}

:::

:::osservazione{#reattanze-frequenza titolo="Reactance and frequency"}
Inductive reactance $X_L = 2\pi f L$ is proportional to frequency, whereas capacitive reactance $X_C = \dfrac{1}{2\pi f C}$ is inversely proportional to frequency. At $5\,\mathrm{kHz}$, a hundred times the grid frequency, the $0.30\,\mathrm{H}$ inductor has $X_L \approx 9.42\,\mathrm{k\Omega}$ and the $20\,\mu\mathrm{F}$ capacitor has $X_C \approx 1.59\,\Omega$. In the direct-current limit, as $f$ approaches $0$, the capacitive reactance approaches infinity and the capacitor acts as an open circuit, while the inductive reactance approaches $0$ and the ideal inductor behaves like a wire.
:::

## Phasors

:::definizione{#fasori titolo="Phasor"}
A sinusoidal quantity $a(t) = A_0 \sin(\omega t + \alpha)$ can be represented by a vector called a **phasor**, of length $A_0$, making an angle $\omega t + \alpha$ with the $x$-axis. The phasor rotates counterclockwise at angular speed $\omega$, and its component along the $y$-axis is $A_0 \sin(\omega t + \alpha) = a(t)$, the instantaneous value of the quantity.

::grafico{curve="2*cos(t),2*sin(t),0,6.29" uguale=1 vettori="0,0,1.638,1.147,A₀" segmenti="1.638,1.147,0,1.147;0,0,1.9,0" punti="0,1.147,pieno" etichette="0.55,0.12,ωt + α;-0.75,1.25,a(t)" legenda=0 xmin=-3 xmax=3 ymin=-3 ymax=3 titolo="The phasor representing $a(t) = A_0 \sin(\omega t + \alpha)$ rotates counterclockwise. Its component along the $y$-axis gives the instantaneous value $a(t)$"}

Phasors can be used to compare and add sinusoidal quantities of the same angular frequency. Two phasors with the same $\omega$ rotate together, so the angle between them remains constant and equals the **phase difference** between the quantities. Also, the $y$-component of a vector sum equals the sum of the components, so the phasor representing the sum of two quantities is the vector sum of their phasors. For example, the phasor for $5 \sin(\omega t) + 12 \sin\left( \omega t + \dfrac{\pi}{2} \right)$ is the sum of two perpendicular vectors of lengths $5$ and $12$, so the result is a sinusoid of amplitude $\sqrt{5^2 + 12^2} = 13$ and initial phase $\arctan \dfrac{12}{5} \approx 67^\circ$.
:::

:::osservazione{#fasori-componenti titolo="Voltage and current phasors in the three circuits"}
The phasors are drawn at time $t = 0$. Their lengths often represent rms values instead of amplitudes because the two scales differ by a factor of $\sqrt{2}$ and the angles stay the same. The results for single-component circuits give the position of the voltage phasor relative to the current phasor.

- In a resistor the two phasors point in the same direction.
- In an inductor the voltage phasor is rotated counterclockwise by $90^\circ$ relative to the current phasor.
- In a capacitor the voltage phasor is rotated clockwise by $90^\circ$ relative to the current phasor.
:::

## Series RLC circuit

:::teorema{#impedenza-rlc titolo="Impedance of a series RLC circuit"}
An AC voltage source supplies a resistor $R$, an inductor $L$, and a capacitor $C$ connected in series. In the steady state the current is $i(t) = I_0 \sin(\omega t)$ and the source voltage is $v(t) = V_0 \sin(\omega t + \varphi)$, where
$$
V_0 = Z\,I_0 ,
\qquad
Z = \sqrt{R^2 + (X_L - X_C)^2} ,
\qquad
\tan\varphi = \frac{X_L - X_C}{R} ,
$$
where $X_L = \omega L$, $X_C = \dfrac{1}{\omega C}$, and $\varphi$ lies between $-\dfrac{\pi}{2}$ and $\dfrac{\pi}{2}$. The quantity $Z$ is called the **impedance** of the circuit and is measured in ohms. The same ratio holds for the rms values, $V_{\text{eff}} = Z\,I_{\text{eff}}$. The angle $\varphi$ is the **phase difference** between voltage and current. The result also holds for an $RL$ circuit with $X_C = 0$ and for an $RC$ circuit with $X_L = 0$.

This result can be derived using phasors. The three components are in series and therefore carry the same current. Draw the current phasor along the $x$-axis. The resistor voltage phasor, of length $R\,I_0$, points in the same direction. The inductor and capacitor voltage phasors, of lengths $X_L I_0$ and $X_C I_0$, are perpendicular to the current phasor and point in opposite directions. The source voltage is the sum of the three voltages, so its phasor is the hypotenuse of a right triangle with legs $R\,I_0$ and $(X_L - X_C)\,I_0$. By the Pythagorean theorem, $V_0^2 = R^2 I_0^2 + (X_L - X_C)^2 I_0^2 = Z^2 I_0^2$, and the tangent of the angle between the hypotenuse and the $x$-axis is $\dfrac{X_L - X_C}{R}$.
:::

:::esempio{titolo="An RLC circuit connected to the power grid"}
A $60\,\Omega$ resistor, a $0.40\,\mathrm{H}$ inductor, and a $50\,\mu\mathrm{F}$ capacitor in series are connected to the power grid, with $V_{\text{eff}} = 230\,\mathrm{V}$ and $f = 50\,\mathrm{Hz}$. The reactances are
$$
X_L = 314 \cdot 0.40\,\Omega \approx 126\,\Omega ,
\qquad
X_C = \frac{1}{314 \cdot 50 \cdot 10^{-6}}\,\Omega \approx 63.7\,\Omega ,
$$
so $X_L - X_C \approx 62.0\,\Omega$ and
$$
Z = \sqrt{60^2 + 62.0^2}\,\Omega \approx 86.3\,\Omega ,
\qquad
I_{\text{eff}} = \frac{230}{86.3}\,\mathrm{A} \approx 2.67\,\mathrm{A} ,
\qquad
\varphi = \arctan \frac{62.0}{60} \approx 46^\circ .
$$
The rms voltages across the components are $V_R = R\,I_{\text{eff}} \approx 160\,\mathrm{V}$, $V_L = X_L I_{\text{eff}} \approx 335\,\mathrm{V}$, and $V_C = X_C I_{\text{eff}} \approx 170\,\mathrm{V}$.

::grafico{assi=0 uguale=1 vettori="0,0,1.6,0,VR;0,0,0,3.35,VL;0,0,0,-1.7,VC;0,0,1.6,1.65,V" segmenti="1.6,0,1.6,1.65;0,1.65,1.6,1.65" etichette="0.42,0.18,φ" xmin=-1.6 xmax=3.6 ymin=-2.2 ymax=3.8 titolo="Rms voltage phasors in hundreds of volts. $V_R$ points in the direction of the current, while $V_L$ and $V_C$ are perpendicular to it and point in opposite directions. The resultant $V$ makes an angle $\varphi \approx 46^\circ$ with the current"}

:::

:::attenzione{#tensioni-sfasate}
The rms voltages across components in series do not add arithmetically because they are out of phase. In the preceding example $V_R + V_L + V_C \approx 665\,\mathrm{V}$, while the source supplies $230\,\mathrm{V}$. The correct relation is the one between the phasors, $V_{\text{eff}} = \sqrt{V_R^2 + (V_L - V_C)^2} = \sqrt{160^2 + 165^2}\,\mathrm{V} \approx 230\,\mathrm{V}$. The voltage across the inductor, $335\,\mathrm{V}$, exceeds the source voltage.
:::

:::osservazione{#carattere-circuito titolo="Inductive and capacitive circuits"}
The sign of the phase difference depends on which reactance is greater.

- If $X_L > X_C$, then $\varphi > 0$ and the current lags the voltage. The circuit is **inductive**.
- If $X_L < X_C$, then $\varphi < 0$ and the current leads the voltage. The circuit is **capacitive**.
- If $X_L = X_C$, then $\varphi = 0$ and $Z = R$, so current and voltage are in phase, as in a resistor.

The circuit in the example, with $X_L \approx 126\,\Omega$ and $X_C \approx 63.7\,\Omega$, is inductive.
:::

## Resonance

:::teorema{#risonanza titolo="Resonance in a series RLC circuit"}
In a series $RLC$ circuit supplied at a fixed rms voltage and variable frequency, the rms current is greatest when $X_L = X_C$, that is, at the angular frequency and frequency given by
$$
\omega_0 = \frac{1}{\sqrt{LC}} ,
\qquad
f_0 = \frac{1}{2\pi\sqrt{LC}} .
$$
This condition is called **resonance**. At resonance, $Z = R$, $\varphi = 0$, and $I_{\text{eff}} = \dfrac{V_{\text{eff}}}{R}$. This follows from the impedance formula. The term $R^2$ is independent of frequency and the term $(X_L - X_C)^2$ is nonnegative, so $Z$ is smallest and the current is greatest when $X_L - X_C = 0$. The equality $\omega L = \dfrac{1}{\omega C}$ is equivalent to $\omega^2 = \dfrac{1}{LC}$.

Resonance can be used to select a frequency. A radio receiver selects a station by varying the capacitance of a circuit until $f_0$ equals the station’s frequency. With $L = 0.20\,\mathrm{mH}$, tuning to a station at $900\,\mathrm{kHz}$ requires
$$
C = \frac{1}{4\pi^2 f_0^2 L} = \frac{1}{4\pi^2 \cdot \left( 9.0 \cdot 10^5 \right)^2 \cdot 2.0 \cdot 10^{-4}}\,\mathrm{F} \approx 1.6 \cdot 10^{-10}\,\mathrm{F} .
$$
:::

:::esempio{titolo="Resonance curve"}
A circuit with $L = 0.050\,\mathrm{H}$ and $C = 20\,\mu\mathrm{F}$ is supplied at $V_{\text{eff}} = 20\,\mathrm{V}$. The resonant angular frequency is
$$
\omega_0 = \frac{1}{\sqrt{0.050 \cdot 20 \cdot 10^{-6}}}\,\mathrm{rad/s} = \frac{1}{\sqrt{1.0 \cdot 10^{-6}}}\,\mathrm{rad/s} = 1.0 \cdot 10^3\,\mathrm{rad/s} ,
$$
that is, $f_0 \approx 159\,\mathrm{Hz}$. With $R = 10\,\Omega$ the rms current at resonance is $\dfrac{20}{10}\,\mathrm{A} = 2.0\,\mathrm{A}$, and with $R = 20\,\Omega$ it is $1.0\,\mathrm{A}$. Far from resonance the reactance $|X_L - X_C|$ is much greater than $R$, so the two currents are nearly equal.

::grafico{f="20/sqrt(100+(50*x-50/x)^2)+0*sqrt(x);20/sqrt(400+(50*x-50/x)^2)+0*sqrt(x)" asintoti="x=1" xmin=0 xmax=3.2 ymin=-0.5 ymax=2.6 nomi="ω,I" legenda="R = 10\,\Omega;R = 20\,\Omega" titolo="Rms current in amperes as a function of angular frequency, with $\omega$ in $10^3\,\mathrm{rad/s}$, for $L = 0.050\,\mathrm{H}$, $C = 20\,\mu\mathrm{F}$, and $V_{\text{eff}} = 20\,\mathrm{V}$. The current peaks at $\omega_0 = 1.0 \cdot 10^3\,\mathrm{rad/s}$, and the lower resistance gives a taller, narrower peak"}

:::

:::osservazione{#tensioni-risonanza titolo="Voltages across the inductor and capacitor at resonance"}
At resonance, the voltages across the inductor and capacitor have the same rms value $X_L I_{\text{eff}} = X_C I_{\text{eff}}$ and are in opposite phase. They therefore cancel at every instant, and the entire source voltage appears across the resistor. Either voltage can be much larger than the source voltage. In the circuit used for the resonance curve, with $R = 10\,\Omega$, we have $X_L = 1.0 \cdot 10^3 \cdot 0.050\,\Omega = 50\,\Omega$ and therefore $V_L = V_C = 50 \cdot 2.0\,\mathrm{V} = 100\,\mathrm{V}$, five times the source voltage.
:::

## Average power and power factor

:::teorema{#potenza-media titolo="Average power in an AC circuit"}
A circuit with rms voltage $V_{\text{eff}}$, rms current $I_{\text{eff}}$, and phase difference $\varphi$ between voltage and current absorbs an average power of
$$
P = V_{\text{eff}}\, I_{\text{eff}} \cos\varphi .
$$
The formula follows by averaging the instantaneous power $v(t)\,i(t)$ over one period, using the same procedure as for the average of $\sin^2(\omega t)$. For a resistor, $\varphi = 0$ and $P = V_{\text{eff}} I_{\text{eff}}$. For an ideal inductor or capacitor, $\varphi = \pm\dfrac{\pi}{2}$, so $\cos\varphi = 0$ and $P = 0$, because the energy stored during one quarter of a period returns to the source during the next quarter. For example, a motor operating at $230\,\mathrm{V}$ with rms current $4.0\,\mathrm{A}$ and phase difference $\varphi = 30^\circ$ draws $P = 230 \cdot 4.0 \cdot \cos 30^\circ\,\mathrm{W} \approx 797\,\mathrm{W}$.
:::

:::definizione{#fattore-di-potenza titolo="Power factor"}
The number $\cos\varphi$ is called the **power factor** of the circuit and lies between $0$ and $1$. In a series $RLC$ circuit the phasor triangle gives $\cos\varphi = \dfrac{R}{Z}$, and since $V_{\text{eff}} = Z\,I_{\text{eff}}$, it follows that
$$
P = Z\,I_{\text{eff}} \cdot I_{\text{eff}} \cdot \frac{R}{Z} = R\,I_{\text{eff}}^2 .
$$
Thus all the average power is dissipated in the resistor. For the $RLC$ circuit connected to the power grid, $\cos\varphi = \dfrac{60}{86.3} \approx 0.70$ and $P = 60 \cdot 2.67^2\,\mathrm{W} \approx 4.3 \cdot 10^2\,\mathrm{W}$.

The power factor also matters to electric utilities. A device drawing power $P$ at voltage $V_{\text{eff}}$ requires a current $I_{\text{eff}} = \dfrac{P}{V_{\text{eff}} \cos\varphi}$, which increases as $\cos\varphi$ decreases. A higher current dissipates more energy in the transmission lines, so utilities ask industrial customers to maintain a power factor close to $1$.
:::

## Transformers

:::teorema{#trasformatore titolo="Ideal transformer"}
A **transformer** consists of two coils wound around the same iron core. The **primary**, with $N_1$ turns, is connected to the source, and the **secondary**, with $N_2$ turns, is connected to the load. A transformer is ideal if all the magnetic flux passes through both coils, the resistance of each coil is negligible, and no energy is lost in the core. In an ideal transformer the rms voltages and currents satisfy
$$
\frac{V_2}{V_1} = \frac{N_2}{N_1} ,
\qquad
\frac{I_2}{I_1} = \frac{N_1}{N_2} .
$$
The first relation follows from Faraday’s law of induction. The same flux $\Phi_B(t)$ passes through every turn of both windings, so the induced emfs are $-N_1 \dfrac{d\Phi_B}{dt}$ and $-N_2 \dfrac{d\Phi_B}{dt}$, and their ratio is $\dfrac{N_2}{N_1}$. The second relation follows from conservation of energy: the power $V_1 I_1$ supplied to the primary equals the power $V_2 I_2$ delivered to the load.

::grafico{assi=0 uguale=1 poligoni="0,0 0.8,0 0.8,4 0,4;5.2,0 6,0 6,4 5.2,4;0.8,3.2 5.2,3.2 5.2,4 0.8,4;0.8,0 5.2,0 5.2,0.8 0.8,0.8" linee="-1.2,1 -0.3,1 1.1,1.33 -0.3,1.67 1.1,2 -0.3,2.33 1.1,2.67 -0.3,3 -1.2,3;7.2,1.4 6.3,1.4 4.9,1.7 6.3,2 4.9,2.3 6.3,2.6 7.2,2.6" punti="-1.2,1,vuoto;-1.2,3,vuoto;7.2,1.4,vuoto;7.2,2.6,vuoto" vettori="2.5,3.6,3.5,3.6,Φ" etichette="-1.9,1.9,V₁;7.4,1.9,V₂;0.1,4.4,N₁;5.3,4.4,N₂" legenda=0 xmin=-2.2 xmax=8 ymin=-0.4 ymax=4.9 titolo="Transformer. The primary with $N_1$ turns and the secondary with $N_2$ turns are wound around the same iron core, which carries the magnetic flux $\Phi_B$ from one coil to the other"}

A transformer with $N_2 > N_1$ steps up the voltage and reduces the current. With $N_2 < N_1$, it steps down the voltage and increases the current. For example, a power supply that converts $230\,\mathrm{V}$ to $12\,\mathrm{V}$, with $N_1 = 1150$, has $N_2 = 1150 \cdot \dfrac{12}{230} = 60$ turns on the secondary. If the load draws $2.0\,\mathrm{A}$, the current in the primary is $I_1 = 2.0 \cdot \dfrac{60}{1150}\,\mathrm{A} \approx 0.10\,\mathrm{A}$.
:::

:::attenzione
A transformer supplied with a constant DC voltage produces no secondary voltage in the steady state. The primary current is then constant, so the flux in the core is constant and induces no emf in the secondary. A $9\,\mathrm{V}$ battery connected to the primary of a transformer with $N_2 = 10\,N_1$ gives a secondary voltage of zero rather than $90\,\mathrm{V}$.
:::

:::osservazione{#trasporto-energia titolo="High-voltage electric power transmission"}
A power plant transmits power $P$ along a line of resistance $R_\ell$ at rms voltage $V$ and power factor $1$. The line carries a current $I = \dfrac{P}{V}$, and the power dissipated as heat in the wires is
$$
P_{\text{loss}} = R_\ell\, I^2 = \frac{R_\ell\, P^2}{V^2} .
$$
For a given transmitted power, the power loss is inversely proportional to the square of the voltage. With $P = 2.0\,\mathrm{MW}$ and $R_\ell = 4.0\,\Omega$, transmitting at $20\,\mathrm{kV}$ gives a current of $100\,\mathrm{A}$ and a loss of $40\,\mathrm{kW}$. At $200\,\mathrm{kV}$ the current is $10\,\mathrm{A}$ and the loss is $400\,\mathrm{W}$. This is why electric power is transmitted at high voltage. Transformers step up the voltage at the power plant and step it down near consumers. The ability to do this is one reason the power grid uses alternating current.
:::

## LC circuits and electrical oscillations

:::richiamo{titolo="Existence and uniqueness theorem for second-order equations"}
Let $a$, $b$, and $c$ be real numbers with $a \neq 0$, and let $y_0$ and $y_1$ be real numbers. The equation $a\,y'' + b\,y' + c\,y = 0$ then has exactly one solution satisfying the conditions $y(0) = y_0$ and $y'(0) = y_1$.
:::

::::teorema{#circuito-lc titolo="Oscillations in an LC circuit"}
At time $t = 0$, a capacitor of capacitance $C$ and initial charge $Q_0$ is connected to an ideal inductor of inductance $L$ in a circuit of negligible resistance. Let $q(t)$ be the charge on the initially positive plate and $i = \dfrac{dq}{dt}$ the current. Then
$$
q(t) = Q_0 \cos(\omega_0 t) ,
\qquad
i(t) = -\omega_0 Q_0 \sin(\omega_0 t) ,
\qquad
\omega_0 = \frac{1}{\sqrt{LC}} .
$$
The charge and current oscillate at the **natural angular frequency** $\omega_0$, equal to the resonant angular frequency of the $RLC$ circuit, with period $T = 2\pi\sqrt{LC}$ and frequency $f_0 = \dfrac{1}{2\pi\sqrt{LC}}$. The current has amplitude $I_0 = \omega_0 Q_0$ and differs in phase from the charge by a quarter of a period. For example, with $L = 0.25\,\mathrm{H}$ and $C = 4.0\,\mu\mathrm{F}$, we have $\omega_0 = \dfrac{1}{\sqrt{1.0 \cdot 10^{-6}}}\,\mathrm{rad/s} = 1.0 \cdot 10^3\,\mathrm{rad/s}$, $f_0 \approx 159\,\mathrm{Hz}$, and $T \approx 6.28\,\mathrm{ms}$. If the capacitor was charged to $5.0\,\mathrm{V}$, then $Q_0 = C V_0 = 20\,\mu\mathrm{C}$ and $I_0 = 1.0 \cdot 10^3 \cdot 20 \cdot 10^{-6}\,\mathrm{A} = 20\,\mathrm{mA}$.

::grafico{f="20*cos(x);-20*sin(x)" xmin=0 xmax=13 ymin=-24 ymax=30 nomi="t," legenda="q(t);i(t)" titolo="Charge in $\mu\mathrm{C}$ and current in $\mathrm{mA}$ in an LC circuit with $\omega_0 = 1.0 \cdot 10^3\,\mathrm{rad/s}$ and $Q_0 = 20\,\mu\mathrm{C}$, with $t$ in milliseconds. The magnitude of the current is greatest when the capacitor is discharged"}

:::dimostrazione
The circuit contains no sources or resistors, so by Kirchhoff’s loop rule the voltage $\dfrac{q}{C}$ across the capacitor and the voltage $L\,\dfrac{di}{dt}$ across the inductor add to zero. Since $i = \dfrac{dq}{dt}$, we have $\dfrac{di}{dt} = q''(t)$, and the charge satisfies the differential equation
$$
L\,q''(t) + \frac{q(t)}{C} = 0 .
$$
Substitution shows that $q(t) = Q_0 \cos(\omega_0 t)$ is a solution. Its derivatives are $q'(t) = -\omega_0 Q_0 \sin(\omega_0 t)$ and $q''(t) = -\omega_0^2 Q_0 \cos(\omega_0 t)$, so
$$
L\,q'' + \frac{q}{C} = \left( -L\,\omega_0^2 + \frac{1}{C} \right) Q_0 \cos(\omega_0 t) = \left( -\frac{L}{LC} + \frac{1}{C} \right) Q_0 \cos(\omega_0 t) = 0 .
$$
Initially the capacitor has charge $Q_0$ and the current is zero, so the initial conditions are $q(0) = Q_0$ and $q'(0) = 0$. The function we found satisfies both. By the existence and uniqueness theorem from the chapter on differential equations in fifth-year high school mathematics, this is the only solution. The current is the derivative $q'(t)$.
:::
::::

:::osservazione{#energia-lc titolo="Energy in an LC circuit"}
In an LC circuit, energy moves back and forth between the capacitor’s electric field and the inductor’s magnetic field, while the total energy stays constant. Indeed, using the expressions in the theorem and $L\,\omega_0^2 = \dfrac{1}{C}$,
$$
\frac{q^2}{2C} + \frac{1}{2} L i^2 = \frac{Q_0^2}{2C} \cos^2(\omega_0 t) + \frac{1}{2} L\,\omega_0^2 Q_0^2 \sin^2(\omega_0 t) = \frac{Q_0^2}{2C} \left( \cos^2(\omega_0 t) + \sin^2(\omega_0 t) \right) = \frac{Q_0^2}{2C} .
$$
When the capacitor is discharged, all the energy is in the inductor, so $\dfrac{1}{2} L I_0^2 = \dfrac{Q_0^2}{2C}$. In the circuit with $L = 0.25\,\mathrm{H}$ and $C = 4.0\,\mu\mathrm{F}$, charged to $5.0\,\mathrm{V}$, the energy is $\dfrac{1}{2} C V_0^2 = 50\,\mu\mathrm{J}$, and indeed $\dfrac{1}{2} \cdot 0.25 \cdot \left( 0.020 \right)^2\,\mathrm{J} = 50\,\mu\mathrm{J}$. In a real circuit, resistance in the wires dissipates energy through Joule heating, damping the oscillations.
:::

:::osservazione{#analogia-massa-molla titolo="Analogy with a mass on a spring"}
The equation $L\,q'' + \dfrac{q}{C} = 0$ has the same form as the equation $m\,x'' + k\,x = 0$ for a mass $m$ attached to a spring of spring constant $k$, so the two systems correspond term by term.

| Mass on a spring | LC circuit |
| --- | --- |
| position $x$ | charge $q$ |
| velocity $v = x'$ | current $i = q'$ |
| mass $m$ | inductance $L$ |
| spring constant $k$ | reciprocal of capacitance $\dfrac{1}{C}$ |
| kinetic energy $\dfrac{1}{2} m v^2$ | magnetic energy $\dfrac{1}{2} L i^2$ |
| elastic potential energy $\dfrac{1}{2} k x^2$ | electric potential energy $\dfrac{q^2}{2C}$ |

For example, the spring’s angular frequency $\sqrt{\dfrac{k}{m}}$ corresponds to $\sqrt{\dfrac{1}{LC}}$. Inductance plays the role of mass because it opposes changes in current just as mass opposes changes in velocity.
:::
