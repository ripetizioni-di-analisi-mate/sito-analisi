---
titolo: Electromagnetic induction
sommario: How a change in the magnetic flux linked with a circuit generates an electromotive force, how to compute the emf of a moving rod and of a rotating loop, what inductance and the RL circuit are, and where the energy of the magnetic field resides.
---

## Flux linkage and the Faraday-Neumann-Lenz law

Throughout this topic the circuits are in vacuum (or in air), and the currents vary slowly enough that the laws of direct-current circuits can be applied at every instant (quasi-static regime).

:::richiamo{titolo="Flux of a vector field"}
The flux of a field $\vec{F}$ through an oriented surface $S$ with unit normal $\hat{n}$ is $\displaystyle\iint_S \vec{F} \cdot \hat{n}\,dS$. If the field is uniform and the surface is flat with area $A$, the flux equals $F A\cos\theta$, where $\theta$ is the angle between $\vec{F}$ and $\hat{n}$. See the Mathematical Analysis 2 topic on surfaces, fluxes, and the theorems of Gauss and Stokes.
:::

:::definizione{#flusso-concatenato titolo="Magnetic flux linkage"}
Let $\gamma$ be an oriented closed circuit and let $S$ be a surface whose boundary is $\gamma$, with the normal $\hat{n}$ related to the orientation of $\gamma$ by the right-hand rule. The **magnetic flux linked** with $\gamma$ is
$$
\Phi_B = \iint_S \vec{B} \cdot \hat{n}\,dS .
$$
The flux of $\vec{B}$ through a closed surface is zero, by Gauss's law for magnetism (see the topic on sources of the magnetic field); therefore $\Phi_B$ is the same for all surfaces whose boundary is $\gamma$ and depends only on the circuit. The unit of measurement is the **weber**, $1\,\mathrm{Wb} = 1\,\mathrm{T \cdot m^2}$. For a coil of $N$ identical turns the flux linkage is $N$ times the flux through one turn; in a uniform field, with flat turns of area $A$, it equals $\Phi_B = N B A\cos\theta$.

::grafico{assi=0 vettori="-0.5,1.2,-0.5,3.2,B;3,2,2.3,3.21" linee="0.6,0 0.6,4.2;1.5,0 1.5,4.2;2.4,0 2.4,4.2;3.6,0 3.6,4.2;4.5,0 4.5,4.2;5.4,0 5.4,4.2;1.79,1.3 4.21,2.7" segmenti="3,2,3,3.4" punti="3,2,pieno" etichette="2.84,2.72,θ;1.95,3.3,n̂" xmin=-1.0 xmax=6.2 ymin=-0.3 ymax=4.5 uguale=1 titolo="Flat loop seen edge-on in a uniform field $\vec{B}$: the flux linkage is $B A\cos\theta$, where $\theta$ is the angle between $\vec{B}$ and the normal $\hat{n}$"}

:::

:::teorema{#legge-faraday titolo="Faraday-Neumann-Lenz law"}
This is an experimental law. When the magnetic flux linked with a circuit varies in time, an **induced electromotive force** is generated in the circuit,
$$
\mathcal{E} = -\frac{d\Phi_B}{dt} ,
$$
where $\mathcal{E}$ is positive if it acts in the direction of the circuit associated with the normal $\hat{n}$ by the right-hand rule. The emf is determined by the rate at which the flux changes, whatever the value of the flux; the minus sign expresses Lenz's law on the direction of the induced current. If the flux varies uniformly during the interval $\Delta t$, the emf equals $-\dfrac{\Delta\Phi_B}{\Delta t}$; in general this ratio is the **average emf**.

For example, if the field perpendicular to a coil of $100$ turns with area $20\,\mathrm{cm^2}$ increases uniformly from $0$ to $0.60\,\mathrm{T}$ in $0.15\,\mathrm{s}$, the flux linkage increases by $100 \cdot 20 \cdot 10^{-4} \cdot 0.60\,\mathrm{Wb} = 0.12\,\mathrm{Wb}$ and the magnitude of the emf is $\dfrac{0.12}{0.15}\,\mathrm{V} = 0.80\,\mathrm{V}$.
:::

:::osservazione{#modi-di-variare-il-flusso titolo="Ways to change the flux"}
For a flat loop in a uniform field $\Phi_B = B A\cos\theta$, so the flux varies if at least one of the three factors changes.

- The magnitude of the field varies, for example because the current that generates it varies or because a magnet approaches; the loop is at rest.
- The area of the loop varies, as when a rod slides on two conducting rails; one then speaks of *motional* emf.
- The angle $\theta$ varies, as in a loop rotating in the field; this is the principle of the alternator.

The Faraday-Neumann-Lenz law describes all three cases with the same formula. In the first case the emf is due to an induced electric field, in the other two to the Lorentz force on the charges of the moving conductor.
:::

## Induced current and Lenz's law

:::definizione{#corrente-indotta titolo="Induced current"}
If the circuit in which the induced emf $\mathcal{E}$ is generated is closed and has total resistance $R$, and if the self-induction of the circuit is negligible, the **induced current**
$$
i = \frac{\mathcal{E}}{R} = -\frac{1}{R}\,\frac{d\Phi_B}{dt}
$$
flows in it. The induced current exists only as long as the flux varies. If the circuit is open, a potential difference equal in magnitude to $\mathcal{E}$ is measured across the gap, while the current is zero.
:::

::::teorema{#carica-indotta titolo="Induced charge (Felici's law)"}
Consider a circuit of resistance $R$, with negligible self-induction, whose flux linkage changes from the value $\Phi_1$ at time $t_1$ to the value $\Phi_2$ at time $t_2$. The charge that passes through a cross-section of the circuit during the interval $[t_1, t_2]$ is
$$
q = \int_{t_1}^{t_2} i\,dt = -\frac{\Phi_2 - \Phi_1}{R} .
$$
The charge depends only on the change in flux, whatever the rate at which it occurs, and for this reason a measurement of charge makes it possible to measure a magnetic field. If a circular loop of radius $5.0\,\mathrm{cm}$ and resistance $0.20\,\mathrm{\Omega}$ is pulled out of a perpendicular field of $0.40\,\mathrm{T}$, the charge that passes through it has magnitude $\dfrac{0.40 \cdot \pi \cdot 0.050^2}{0.20}\,\mathrm{C} \approx 16\,\mathrm{mC}$, whether the extraction is slow or fast.

:::dimostrazione
By the definition of induced current $i = -\dfrac{1}{R}\,\dfrac{d\Phi_B}{dt}$, and $R$ is constant. Integrating between $t_1$ and $t_2$, by the fundamental theorem of calculus we obtain
$$
q = -\frac{1}{R} \int_{t_1}^{t_2} \frac{d\Phi_B}{dt}\,dt = -\frac{\Phi_2 - \Phi_1}{R} .
$$
:::
::::

:::osservazione{#legge-di-lenz titolo="Direction of the induced current (Lenz's law)"}
Because of the minus sign in the Faraday-Neumann-Lenz law, the induced current flows in the direction in which the magnetic field it generates opposes the **change** in the flux that produced it. In practice one proceeds in three steps: determine whether the flux through the circuit increases or decreases; deduce the direction of the induced field inside the circuit, opposite to the external field if the flux increases and in the same direction if it decreases; obtain the direction of the current with the right-hand rule.

Lenz's law is a consequence of the conservation of energy. If the induced current reinforced the change in flux, the change would grow by itself and the circuit would produce electrical energy without receiving work from outside.

::grafico{assi=0 curve="2*cos(t),2*sin(t),0,6.29" vettori="-0.7,2,0.7,2,i;0.7,-2,-0.7,-2" etichette="-1.1,1.0,⊙;1.1,1.0,⊙;-1.1,-1.0,⊙;1.1,-1.0,⊙;-2.9,1.6,⊙;2.9,1.6,⊙;-2.9,-1.6,⊙;2.9,-1.6,⊙;0,-0.05,⊗ B′;2.75,0.3,B ⊙" xmin=-3.4 xmax=3.4 ymin=-2.6 ymax=2.6 uguale=1 titolo="The external field $\vec{B}$, pointing out of the page, increases: the induced current flows clockwise and generates inside the loop the field $\vec{B}\,'$ pointing into the page, which opposes the increase in flux"}

:::

:::attenzione{#lenz-variazione}
The induced field is opposite to the *change* in the flux, and therefore it is in the same direction as the external field when the latter decreases. If the outward field in the figure decreased, the outward flux would decrease; the induced current would flow counterclockwise and would generate an outward field, in the same direction as $\vec{B}$, which partly compensates for the decrease.
:::

## Motional electromotive force

:::richiamo{titolo="Lorentz force"}
A charge $q$ moving with velocity $\vec{v}$ in a magnetic field $\vec{B}$ is subject to the force $\vec{F} = q\,\vec{v} \times \vec{B}$; a straight wire of length $\ell$ carrying the current $I$ in a uniform field is subject to the force $\vec{F} = I\,\vec{\ell} \times \vec{B}$, with $\vec{\ell}$ oriented like the current. See the topic on the magnetic field and the Lorentz force.
:::

::::teorema{#fem-mozionale titolo="Emf of a moving rod"}
A straight conducting rod of length $\ell$ translates with constant velocity $\vec{v}$ in a uniform magnetic field $\vec{B}$, with $\vec{v}$, $\vec{B}$ and the rod mutually perpendicular. Then the electromotive force
$$
\mathcal{E} = B \ell v
$$
is generated between the ends of the rod. If the rod closes a circuit by sliding on two conducting rails, the same emf is obtained from the Faraday-Neumann-Lenz law, because the area of the circuit changes. A rod $20\,\mathrm{cm}$ long moving at $3.0\,\mathrm{m/s}$ in a field of $0.50\,\mathrm{T}$ has across its ends the emf $0.50 \cdot 0.20 \cdot 3.0\,\mathrm{V} = 0.30\,\mathrm{V}$.

::grafico{assi=0 linee="0,2 7,2;0,0 7,0;0,2 0,1.6 0.3,1.5 -0.3,1.3 0.3,1.1 -0.3,0.9 0.3,0.7 -0.3,0.5 0,0.4 0,0" poligoni="4.42,-0.3 4.58,-0.3 4.58,2.3 4.42,2.3" vettori="4.7,1.3,5.9,1.3,v;4.3,0.7,3.1,0.7,F;3.0,2.3,1.8,2.3,i" etichette="-0.75,1.0,R;1.4,1.4,⊗;2.6,1.4,⊗;1.4,0.6,⊗;2.6,0.6,⊗;5.6,0.5,⊗;6.6,1.5,⊗;6.6,0.5,⊗;4.85,-0.35,ℓ;6.8,2.4,B ⊗" xmin=-1.2 xmax=7.2 ymin=-0.7 ymax=2.8 uguale=1 titolo="Rod on two rails in a field $\vec{B}$ pointing into the page: the rod moves to the right, the induced current flows counterclockwise and the magnetic force $\vec{F}$ on the rod opposes the motion"}

:::dimostrazione
The free charges of the rod, which move with it, are subject to the **Lorentz force** $q\,\vec{v} \times \vec{B}$. Since $\vec{v}$ and $\vec{B}$ are perpendicular, the force has magnitude $q v B$ and is directed along the rod. The emf is the work per unit charge done by this force along the rod, therefore
$$
\mathcal{E} = \frac{q v B\,\ell}{q} = B \ell v .
$$
In the circuit closed by the rails let $x$ be the distance of the rod from the fixed side; the area of the circuit is $\ell x$, and with the normal parallel to $\vec{B}$ the flux is $\Phi_B = B \ell x$. By the **Faraday-Neumann-Lenz law** the magnitude of the emf is $\left| \dfrac{d\Phi_B}{dt} \right| = B \ell \dfrac{dx}{dt} = B \ell v$, in agreement with the previous calculation.
:::
::::

:::osservazione{#fem-mozionale-generale titolo="Motional emf in general"}
If a circuit, or a part of it, moves in a static magnetic field, the emf is the circulation of the Lorentz force per unit charge:
$$
\mathcal{E} = \oint_\gamma \left( \vec{v} \times \vec{B} \right) \cdot d\vec{\ell} ,
$$
where $\vec{v}$ is the velocity of the element $d\vec{\ell}$. Only the moving parts contribute. For a bar of length $\ell$ rotating with angular velocity $\omega$ about one end, in a plane perpendicular to a uniform field, the element at distance $s$ from the axis has speed $\omega s$, therefore
$$
\mathcal{E} = \int_0^\ell B\,\omega s\,ds = \frac{1}{2} B \omega \ell^2 .
$$
For $B = 0.40\,\mathrm{T}$, $\ell = 0.50\,\mathrm{m}$ and $\omega = 20\,\mathrm{rad/s}$ we obtain $\mathcal{E} = 1.0\,\mathrm{V}$. The same result holds for the Faraday disk, a conducting disk of radius $\ell$ rotating about its own axis, between the center and the rim.
:::

## Rod on rails: forces and energy balance

:::richiamo{titolo="First-order linear differential equations"}
The equation $y' + a\,y = b$, with $a \neq 0$ and $b$ constants, with the initial condition $y(0) = y_0$, has the unique solution
$$
y(t) = \frac{b}{a} + \left( y_0 - \frac{b}{a} \right) e^{-a t} .
$$
If $a > 0$, the solution tends to the value $\dfrac{b}{a}$ as $t \to +\infty$. See the Mathematical Analysis 1 topic on differential equations.
:::

::::teorema{#sbarretta-su-binari titolo="Rod launched on rails"}
Two parallel horizontal conducting rails, a distance $\ell$ apart, are closed by a resistor $R$ and immersed in a uniform field $\vec{B}$ perpendicular to their plane. A conducting rod of mass $m$ slides without friction on the rails, perpendicular to them, and at time $t = 0$ has velocity $v_0$. The resistances of the rails and the rod and the self-induction are negligible. Then the rod is subject to the magnetic braking force of magnitude
$$
F = \frac{B^2 \ell^2 v}{R} ,
$$
and the velocity decreases according to the law
$$
v(t) = v_0\,e^{-\frac{t}{\tau}} , \qquad \tau = \frac{m R}{B^2 \ell^2} .
$$
The rod stops only asymptotically, after covering the distance $v_0 \tau$. With $m = 0.10\,\mathrm{kg}$, $R = 0.50\,\mathrm{\Omega}$, $B = 0.50\,\mathrm{T}$, $\ell = 0.40\,\mathrm{m}$ and $v_0 = 2.0\,\mathrm{m/s}$ we have $\tau = 1.25\,\mathrm{s}$, and the distance covered is $2.5\,\mathrm{m}$.

::grafico{f="exp(-x)+0*sqrt(x)" segmenti="0,1,1,0" punti="0,1,pieno;1,0.368,pieno" xmin=-0.3 xmax=4.6 ymin=-0.2 ymax=1.3 nomi="t,v" legenda="v(t) = v_0\,e^{-\frac{t}{\tau}}" titolo="Velocity of the rod, in units of $v_0$, with time in units of $\tau$: the tangent at the origin meets the time axis at $t = \tau$, where $v = \dfrac{v_0}{e} \approx 0.37\,v_0$"}

:::dimostrazione
By the theorem on the emf of a moving rod, the emf $B \ell v$ acts in the circuit, so the current $I = \dfrac{B \ell v}{R}$ flows. The rod carrying current is subject to the force $I\,\vec{\ell} \times \vec{B}$, of magnitude $I \ell B = \dfrac{B^2 \ell^2 v}{R}$; by Lenz's law the force opposes the motion, because the induced current opposes the increase in the area of the circuit. The weight and the normal force of the rails are perpendicular to the motion, therefore **Newton's second law** along the rails gives
$$
m\,\frac{dv}{dt} = -\frac{B^2 \ell^2}{R}\,v
\quad\Longrightarrow\quad
\frac{dv}{dt} + \frac{1}{\tau}\,v = 0 .
$$
This is a first-order linear equation with $a = \dfrac{1}{\tau}$ and $b = 0$, so with $v(0) = v_0$ the solution is $v(t) = v_0\,e^{-\frac{t}{\tau}}$. The distance covered is $\displaystyle\int_0^{+\infty} v_0\,e^{-\frac{t}{\tau}}\,dt = v_0 \tau$.
:::
::::

:::osservazione{#bilancio-energetico-sbarretta titolo="Energy balance"}
The power of the magnetic braking force is $-F v = -\dfrac{B^2 \ell^2 v^2}{R}$, and the power dissipated in the resistor by the Joule effect is $R I^2 = \dfrac{B^2 \ell^2 v^2}{R}$. The two powers are equal in magnitude, so the kinetic energy lost by the rod is entirely converted into heat in the resistor; for the launched rod the total heat is $\dfrac{1}{2} m v_0^2$. If instead an external force keeps the rod at constant velocity, it must balance the braking force, and its power $F v$ equals the electrical power $\mathcal{E} I$ delivered to the circuit.

On vertical rails, with the rod falling, the weight $mg$ is constant and the braking force grows with the velocity; the rod reaches the **terminal velocity** at which the two forces balance, $v_{\text{lim}} = \dfrac{m g R}{B^2 \ell^2}$.
:::

## Rotating loop and alternator

::::teorema{#spira-rotante titolo="Emf in a rotating loop"}
A coil of $N$ flat turns of area $A$ rotates with constant angular velocity $\omega$ about an axis perpendicular to a uniform magnetic field $\vec{B}$, and at time $t = 0$ the normal to the turns is parallel to $\vec{B}$. Then the emf induced in the coil is
$$
\mathcal{E}(t) = N B A \omega \sin(\omega t) .
$$
The emf is **alternating**, with maximum value $\mathcal{E}_{\max} = N B A \omega$ and frequency equal to the rotation frequency $f = \dfrac{\omega}{2\pi}$. The maximum value occurs when the plane of the turns is parallel to $\vec{B}$, that is, when the flux is zero and varies most rapidly. For a coil of $100$ turns of area $0.010\,\mathrm{m^2}$ rotating at $50$ revolutions per second in a field of $0.20\,\mathrm{T}$ we have $\omega = 2\pi \cdot 50\,\mathrm{rad/s}$ and $\mathcal{E}_{\max} \approx 63\,\mathrm{V}$.

::grafico{f="cos(x);sin(x)" xmin=-0.4 xmax=13.2 ymin=-1.5 ymax=1.7 nomi="ωt,y" legenda="\dfrac{\Phi_B}{NBA};\dfrac{\mathcal{E}}{NBA\omega}" titolo="Flux linkage and emf in the rotating loop, divided by their respective maximum values: the emf is maximum in magnitude where the flux vanishes"}

:::dimostrazione
At time $t$ the angle between the normal and the field is $\theta = \omega t$, so the flux linkage is $\Phi_B(t) = N B A\cos(\omega t)$. By the **Faraday-Neumann-Lenz law**
$$
\mathcal{E}(t) = -\frac{d\Phi_B}{dt} = N B A \omega \sin(\omega t) .
$$
:::
::::

:::osservazione{#alternatore titolo="Alternator"}
An **alternator** is a coil set rotating in a magnetic field by a turbine or a motor, with its ends connected to the external circuit through sliding contacts. If the external circuit is a resistor $R$ and the resistance of the coil is negligible, the instantaneous power is $\dfrac{\mathcal{E}^2}{R} = \dfrac{\mathcal{E}_{\max}^2}{R}\sin^2(\omega t)$; since the average value of $\sin^2(\omega t)$ over one period is $\dfrac{1}{2}$, the average power is
$$
P_m = \frac{\mathcal{E}_{\max}^2}{2 R} .
$$
By Lenz's law the magnetic forces on the current-carrying coil oppose the rotation; the motor must therefore supply a torque, and the mechanical power it expends equals the electrical power delivered. For rms values and alternating-current circuits see the topic on electrical oscillations and alternating-current circuits.
:::

## Induced electric field

:::richiamo{titolo="Circulation and Stokes' theorem"}
The circulation of a field $\vec{F}$ along a closed curve $\gamma$ is the line integral $\displaystyle\oint_\gamma \vec{F} \cdot d\vec{\ell}$. By Stokes' theorem, if $S$ is a surface with boundary $\gamma$ and consistent orientation, $\displaystyle\oint_\gamma \vec{F} \cdot d\vec{\ell} = \iint_S (\nabla \times \vec{F}) \cdot \hat{n}\,dS$. See the Mathematical Analysis 2 topics on curves and line integrals and on surfaces, fluxes, and the theorems of Gauss and Stokes.
:::

:::teorema{#faraday-forma-integrale titolo="Faraday's law in integral form"}
This is a postulate of electromagnetism, which extends the Faraday-Neumann-Lenz law to any closed line, even in the absence of conductors. For every stationary oriented closed curve $\gamma$, boundary of a surface $S$,
$$
\oint_\gamma \vec{E} \cdot d\vec{\ell} = -\frac{d}{dt} \iint_S \vec{B} \cdot \hat{n}\,dS .
$$
A time-varying magnetic field therefore generates an **induced electric field**, which exists even where there are no charges or conductors; a conductor placed along $\gamma$ reveals its presence through a current. By Stokes' theorem the law is equivalent to the local form $\nabla \times \vec{E} = -\dfrac{\partial \vec{B}}{\partial t}$, which is one of Maxwell's equations; see the topic on Maxwell's equations and electromagnetic waves.
:::

:::attenzione{#campo-indotto-non-conservativo}
The induced electric field is *not* conservative, and the electric potential is not defined for it. Along the circle of radius $r$ coaxial with a solenoid in which the field varies, the circulation of $\vec{E}$ is nonzero; therefore the work done by the field on a charge moving from a point $P$ to a point $Q$ of the circle depends on the arc traveled, and there is no function $V$ with $\vec{E} = -\nabla V$. The electrostatic field produced by stationary charges instead has zero circulation, as seen in the topic on electric potential.
:::

::::teorema{#campo-indotto-solenoide titolo="Electric field induced by a solenoid"}
An infinite straight solenoid of radius $a$ contains a uniform magnetic field $B(t)$, parallel to the axis, which varies in time; outside, the magnetic field is zero. Then the field lines of the induced electric field are circles coaxial with the solenoid and, at distance $r$ from the axis, the magnitude of the field is
$$
E(r) =
\begin{cases}
\dfrac{r}{2} \left| \dfrac{dB}{dt} \right| & \text{if } r \leq a \\[10pt]
\dfrac{a^2}{2 r} \left| \dfrac{dB}{dt} \right| & \text{if } r \geq a
\end{cases}
$$
The field grows linearly inside, is maximum at the surface of the solenoid and decreases as $\dfrac{1}{r}$ outside, where the magnetic field is zero. With $a = 2.0\,\mathrm{cm}$ and $\left| \dfrac{dB}{dt} \right| = 0.50\,\mathrm{T/s}$, the field equals $2.5\,\mathrm{mV/m}$ both at $1.0\,\mathrm{cm}$ and at $4.0\,\mathrm{cm}$ from the axis, and $5.0\,\mathrm{mV/m}$ at the surface.

::grafico{f="min(x,1/x)" segmenti="1,0,1,1" xmin=-0.3 xmax=4.6 ymin=-0.2 ymax=1.3 nomi="r,E" legenda=0 titolo="Magnitude of the induced electric field as a function of the distance $r$ from the axis, with $r$ in units of the radius $a$ and $E$ in units of $\dfrac{a}{2} \left| \dfrac{dB}{dt} \right|$"}

:::dimostrazione
The system is invariant under rotations about the axis and translations along the axis, so the field lines of the induced field are coaxial circles and the magnitude $E$ depends only on $r$. We apply **Faraday's law in integral form** to the circle of radius $r$, oriented so that the normal to the disk is in the same direction as $\vec{B}$. The field $\vec{E}$ is tangent and has constant magnitude along the circle, therefore the circulation equals $2\pi r\,E$, up to sign. The magnetic flux is $\pi r^2 B$ if $r \leq a$, and $\pi a^2 B$ if $r \geq a$, since outside the solenoid the field is zero. Equating the magnitudes we obtain
$$
2\pi r\,E = \pi r^2 \left| \frac{dB}{dt} \right|
\quad \text{or} \quad
2\pi r\,E = \pi a^2 \left| \frac{dB}{dt} \right| ,
$$
from which the two expressions of $E(r)$ follow.
:::
::::

:::osservazione{#correnti-parassite titolo="Eddy currents"}
In a conducting block that moves in a magnetic field, or that is located in a varying field, the induced electric field drives closed currents inside the material, called **eddy currents** or Foucault currents. By Lenz's law they oppose the cause that generates them, so they brake the motion of the conductor, and they dissipate energy by the Joule effect. The first effect is exploited in electromagnetic brakes, the second in induction cooktops. In transformer cores eddy currents are a defect, and they are reduced by building the core from laminations insulated from one another.
:::

## Self-induction and inductance

:::definizione{#induttanza titolo="Inductance"}
A circuit carrying the current $i$ generates a magnetic field which, by the Biot-Savart law, is proportional to $i$ at every point; therefore the flux of its own field linked with the circuit is also proportional to $i$. The **inductance** (or self-inductance coefficient) of the circuit is the constant
$$
L = \frac{\Phi_B}{i} ,
$$
where $\Phi_B$ is the self-linked flux. In vacuum $L$ depends only on the shape and size of the circuit. The unit of measurement is the **henry**, $1\,\mathrm{H} = 1\,\mathrm{Wb/A} = 1\,\mathrm{V \cdot s/A}$. A component designed to have a significant inductance, usually a coil, is called an inductor.
:::

::::teorema{#fem-autoindotta titolo="Self-induced emf"}
If the current in a rigid circuit of inductance $L$ varies in time, the self-induced emf
$$
\mathcal{E}_L = -L\,\frac{di}{dt}
$$
is generated in the circuit. By Lenz's law the self-induced emf opposes the change in the current; inductance is therefore the electrical analog of mass, which opposes the change in velocity. If the current in a coil with $L = 0.20\,\mathrm{H}$ increases by $50\,\mathrm{A}$ per second, an emf of magnitude $0.20 \cdot 50\,\mathrm{V} = 10\,\mathrm{V}$ is generated across it, directed opposite to the current.

:::dimostrazione
The self-linked flux is $\Phi_B = L i$, and $L$ is constant because the circuit is rigid. By the **Faraday-Neumann-Lenz law**
$$
\mathcal{E}_L = -\frac{d\Phi_B}{dt} = -\frac{d(L i)}{dt} = -L\,\frac{di}{dt} .
$$
:::
::::

:::richiamo{titolo="Magnetic field of a solenoid"}
Inside an infinite straight solenoid with $n$ turns per unit length, carrying the current $i$, the magnetic field is uniform, parallel to the axis and of magnitude $B = \mu_0 n i$; outside it is zero. See the topic on sources of the magnetic field.
:::

::::teorema{#induttanza-solenoide titolo="Inductance of a solenoid"}
A solenoid of length $\ell$, with $N$ turns of area $A$, long compared with the radius of the turns so that edge effects are negligible, has inductance
$$
L = \frac{\mu_0 N^2 A}{\ell} = \mu_0 n^2 A \ell , \qquad n = \frac{N}{\ell} .
$$
The inductance grows with the square of the number of turns, because doubling $N$ doubles both the field and the number of turns crossed by the flux. A solenoid with $N = 400$, $\ell = 20\,\mathrm{cm}$ and turns of radius $1.0\,\mathrm{cm}$ has $L = \dfrac{4\pi \cdot 10^{-7} \cdot 400^2 \cdot \pi \cdot 0.010^2}{0.20}\,\mathrm{H} \approx 0.32\,\mathrm{mH}$.

:::dimostrazione
With $n = \dfrac{N}{\ell}$ and current $i$, the field inside is uniform and equals $B = \mu_0 \dfrac{N}{\ell}\,i$. The flux through one turn is $B A$, so the flux linked with the $N$ turns is
$$
\Phi_B = N B A = \frac{\mu_0 N^2 A}{\ell}\,i .
$$
By the definition of inductance $L = \dfrac{\Phi_B}{i} = \dfrac{\mu_0 N^2 A}{\ell}$.
:::
::::

## RL circuit

:::osservazione{#maglia-con-induttore titolo="Loop rule with an inductor"}
In a circuit with an ideal inductor, without resistance, the loop rule is applied by treating the self-induced emf as a source, that is, by setting the sum of the emfs around the loop equal to the sum of the voltage drops $R i$. For a loop with an ideal source $\mathcal{E}$, a resistor $R$ and an inductor $L$ in series we therefore have
$$
\mathcal{E} - L\,\frac{di}{dt} = R\,i .
$$
Equivalently, the potential difference across the inductor is $L\,\dfrac{di}{dt}$, and a real coil is represented as an ideal inductor in series with its resistance. For Kirchhoff's laws see the topic on electric current and direct-current circuits.

::grafico{assi=0 curve="4+0.35*abs(sin(t)),2.2-0.35*t/pi,0,12.566" linee="0,0 0,1.4;-0.22,1.4 0.22,1.4;-0.45,1.6 0.45,1.6;0,1.6 0,3 1.2,3;1.2,3 1.9,3.4;2.0,3 2.4,3 2.5,3.2 2.7,2.8 2.9,3.2 3.1,2.8 3.3,3.2 3.5,2.8 3.6,3 4,3 4,2.2;4,0.8 4,0 0,0" punti="1.2,3,pieno;2.0,3,pieno" vettori="2.6,-0.3,1.4,-0.3,i" etichette="0.65,1.45,ℰ;-0.75,1.75,+;-0.75,1.2,−;3.0,3.55,R;4.85,1.5,L;1.55,3.7,T" xmin=-1.2 xmax=5.4 ymin=-0.7 ymax=4 uguale=1 titolo="RL circuit: when the switch $T$ is closed the current grows gradually to the value $\dfrac{\mathcal{E}}{R}$"}

:::

::::teorema{#circuito-rl-chiusura titolo="Closing an RL circuit"}
In a circuit consisting of an ideal source of constant emf $\mathcal{E}$, a resistor $R$ and an inductor $L$ in series, the switch is closed at time $t = 0$, when the current is zero. Then for $t \geq 0$
$$
i(t) = \frac{\mathcal{E}}{R} \left( 1 - e^{-\frac{t}{\tau}} \right) , \qquad \tau = \frac{L}{R} .
$$
The quantity $\tau$ is the **time constant** of the circuit. At the instant of closing the current is zero and its derivative equals $\dfrac{\mathcal{E}}{L}$, because the whole emf of the source is balanced by the self-induced emf; as $t \to +\infty$ the current tends to $\dfrac{\mathcal{E}}{R}$, as in a circuit without an inductor. With $\mathcal{E} = 6.0\,\mathrm{V}$, $R = 3.0\,\mathrm{\Omega}$ and $L = 0.12\,\mathrm{H}$ we have $\tau = 40\,\mathrm{ms}$, the steady-state current is $2.0\,\mathrm{A}$ and after a time $\tau$ the current equals $2.0 \cdot (1 - e^{-1})\,\mathrm{A} \approx 1.3\,\mathrm{A}$.

::grafico{f="1-exp(-x)+0*sqrt(x);exp(-x)+0*sqrt(x)" asintoti="y=1" segmenti="1,0,1,0.632;0,0.632,1,0.632" punti="1,0.632,pieno;1,0.368,pieno" xmin=-0.3 xmax=5.2 ymin=-0.2 ymax=1.35 nomi="t,i" legenda="\text{closing: } 1 - e^{-\frac{t}{\tau}};\text{opening: } e^{-\frac{t}{\tau}}" titolo="Current in the RL circuit, in units of the steady-state value, with time in units of $\tau$: after a time $\tau$ the current has reached $63\,\%$ of the final value on closing and has dropped to $37\,\%$ on opening"}

:::dimostrazione
By the loop rule with an inductor
$$
\mathcal{E} - L\,\frac{di}{dt} = R\,i
\quad\Longrightarrow\quad
\frac{di}{dt} + \frac{R}{L}\,i = \frac{\mathcal{E}}{L} .
$$
This is a first-order linear equation with $a = \dfrac{R}{L}$ and $b = \dfrac{\mathcal{E}}{L}$, so $\dfrac{b}{a} = \dfrac{\mathcal{E}}{R}$. With the initial condition $i(0) = 0$ the solution is
$$
i(t) = \frac{\mathcal{E}}{R} + \left( 0 - \frac{\mathcal{E}}{R} \right) e^{-\frac{R}{L} t} = \frac{\mathcal{E}}{R} \left( 1 - e^{-\frac{t}{\tau}} \right) .
$$
:::
::::

::::teorema{#circuito-rl-apertura titolo="Opening an RL circuit"}
In an RL circuit carrying the steady-state current $I_0$, at time $t = 0$ the source is cut out with a changeover switch, and the inductor remains closed on the resistor $R$. Then for $t \geq 0$
$$
i(t) = I_0\,e^{-\frac{t}{\tau}} , \qquad \tau = \frac{L}{R} .
$$
The current decreases gradually, because the inductor opposes the change in current; the time in which the current halves is $\tau \ln 2$. With $L = 0.12\,\mathrm{H}$ and $R = 3.0\,\mathrm{\Omega}$ the current halves in $40 \cdot 0.693\,\mathrm{ms} \approx 28\,\mathrm{ms}$.

:::dimostrazione
In the loop formed by the inductor and the resistor the only emf is the self-induced one, so
$$
-L\,\frac{di}{dt} = R\,i
\quad\Longrightarrow\quad
\frac{di}{dt} + \frac{1}{\tau}\,i = 0 .
$$
By the solution formula for first-order linear equations, with $b = 0$ and $i(0) = I_0$, the solution is $i(t) = I_0\,e^{-\frac{t}{\tau}}$.
:::
::::

:::osservazione{#costante-di-tempo-rl titolo="Meaning of the time constant"}
The time constant $\tau = \dfrac{L}{R}$ is measured in seconds, since $1\,\mathrm{H/\Omega} = 1\,\mathrm{V \cdot s/A} \cdot 1\,\mathrm{A/V} = 1\,\mathrm{s}$. After a time $\tau$ the closing current has reached $63\,\%$ of the steady-state value, since $1 - e^{-1} \approx 0.632$, and after $5\tau$ it has reached more than $99\,\%$ of it; for this reason, after a few time constants, the circuit is considered to be in steady state. If a circuit with an inductor is opened abruptly without offering the current an alternative path, the current drops in a very short time and the self-induced emf $-L\,\dfrac{di}{dt}$ becomes very large; this phenomenon is the origin of the spark observed at the contacts of a switch.
:::

## Energy of the magnetic field

::::teorema{#energia-induttore titolo="Energy stored in an inductor"}
An inductor of inductance $L$ carrying the current $I$ stores the energy
$$
U = \frac{1}{2} L I^2 .
$$
The energy is the work, denoted by $W$ because $L$ is the inductance, that the source does against the self-induced emf to bring the current from $0$ to $I$; when the current goes to zero, the inductor returns the same energy, which on opening the RL circuit is dissipated in the resistor. With $L = 0.12\,\mathrm{H}$ and $I = 2.0\,\mathrm{A}$ we have $U = \dfrac{1}{2} \cdot 0.12 \cdot 2.0^2\,\mathrm{J} = 0.24\,\mathrm{J}$.

:::dimostrazione
Multiplying both sides of the loop rule of the RL circuit, $\mathcal{E} = R\,i + L\,\dfrac{di}{dt}$, by $i$ we obtain
$$
\mathcal{E}\,i = R\,i^2 + L\,i\,\frac{di}{dt} = R\,i^2 + \frac{d}{dt} \left( \frac{1}{2} L i^2 \right) .
$$
The power $\mathcal{E}\,i$ delivered by the source is therefore the sum of the power dissipated by the Joule effect and the rate at which the quantity $\dfrac{1}{2} L i^2$ grows. The work done against the self-induced emf while the current goes from $0$ to $I$ is
$$
W = \int L\,i\,\frac{di}{dt}\,dt = \int_0^I L\,i\,di = \frac{1}{2} L I^2 ,
$$
and this work is the energy stored in the inductor.
:::
::::

::::teorema{#densita-energia-magnetica titolo="Energy density of the magnetic field"}
In a region where the magnetic field has magnitude $B$, in vacuum, the magnetic energy per unit volume is
$$
u_B = \frac{B^2}{2 \mu_0} .
$$
The energy of the inductor therefore resides in the magnetic field, distributed in space with density $u_B$; the formula, derived for the solenoid, holds for any magnetic field, and the energy contained in a volume is obtained by integrating $u_B$. A field of $1.0\,\mathrm{T}$ has energy density $\dfrac{1}{2 \cdot 4\pi \cdot 10^{-7}}\,\mathrm{J/m^3} \approx 4.0 \cdot 10^5\,\mathrm{J/m^3}$. The analogous formula for the electric field, $u_E = \dfrac{1}{2} \varepsilon_0 E^2$, is found in the topic on conductors, capacitors, and dielectrics.

:::dimostrazione
Consider a solenoid of length $\ell$, with $N$ turns of area $A$, carrying the current $I$. By the theorem on the **inductance of a solenoid** the energy equals
$$
U = \frac{1}{2} \frac{\mu_0 N^2 A}{\ell}\,I^2 = \frac{1}{2 \mu_0} \left( \mu_0 \frac{N}{\ell}\,I \right)^2 A \ell = \frac{B^2}{2 \mu_0}\,A \ell ,
$$
where we used $B = \mu_0 \dfrac{N}{\ell}\,I$. The field is uniform inside, in the volume $A \ell$, and zero outside, therefore the energy per unit volume is $\dfrac{U}{A \ell} = \dfrac{B^2}{2 \mu_0}$.
:::
::::

## Mutual induction

:::definizione{#mutua-induttanza titolo="Mutual inductance"}
Consider two rigid circuits at rest. The flux $\Phi_{21}$ of the field generated by the current $i_1$ of the first circuit, linked with the second, is proportional to $i_1$, and the constant of proportionality $M$ is the **mutual inductance** of the two circuits:
$$
\Phi_{21} = M\,i_1 , \qquad \mathcal{E}_2 = -M\,\frac{di_1}{dt} .
$$
The second formula follows from the Faraday-Neumann-Lenz law and states that a varying current in one circuit induces an emf in the other. The reciprocity property holds, which is assumed here without proof: the flux linked with the first circuit due to the current $i_2$ of the second is $M\,i_2$, with the *same* constant $M$. Mutual inductance is measured in henries and depends on the shape of the circuits and on their relative position. The transformer works on this principle; see the topic on electrical oscillations and alternating-current circuits.
:::

::::teorema{#mutua-induttanza-solenoidi titolo="Mutual inductance of two coaxial solenoids"}
A long solenoid, with $n_1$ turns per unit length, contains inside it, far from the ends, a coaxial coil of $N_2$ turns of area $A_2$. The mutual inductance is
$$
M = \mu_0\,n_1 N_2 A_2 .
$$
With $n_1 = 2000$ turns per meter, $N_2 = 50$ and inner turns of radius $1.0\,\mathrm{cm}$ we have $M = 4\pi \cdot 10^{-7} \cdot 2000 \cdot 50 \cdot \pi \cdot 0.010^2\,\mathrm{H} \approx 3.9 \cdot 10^{-5}\,\mathrm{H}$; if the current in the outer solenoid varies by $100\,\mathrm{A}$ per second, an emf of about $3.9\,\mathrm{mV}$ is induced in the inner coil.

:::dimostrazione
The current $i_1$ generates inside the outer solenoid the uniform field $B_1 = \mu_0 n_1 i_1$, parallel to the axis. The flux through each turn of the inner coil is $B_1 A_2$, so the flux linked with the coil is
$$
\Phi_{21} = N_2 B_1 A_2 = \mu_0 n_1 N_2 A_2\,i_1 ,
$$
and by the definition of mutual inductance $M = \mu_0 n_1 N_2 A_2$.
:::
::::
