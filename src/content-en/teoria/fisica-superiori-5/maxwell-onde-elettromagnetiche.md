---
titolo: Maxwell's equations and electromagnetic waves
sommario: How a changing magnetic field generates an electric field and a changing electric field generates a magnetic field, what Maxwell's four equations state, and how the fields in an electromagnetic wave are arranged. The chapter also examines how much energy and momentum a wave carries, how to find its intensity, and how polarization and the electromagnetic spectrum are described.
---

## Induced electric field

:::richiamo{titolo="Flux and circulation"}
Divide a surface into small elements of area $\Delta S$ and assign to each the vector $\Delta\vec{S}$ perpendicular to the element and of magnitude $\Delta S$. The **flux** of a field $\vec{B}$ through the surface is the sum $\Phi(\vec{B}) = \sum \vec{B} \cdot \Delta\vec{S}$. Now divide an oriented closed path into small segments $\Delta\vec{\ell}$ pointing in the direction of traversal. The **circulation** of $\vec{B}$ around the path is the sum $\Gamma(\vec{B}) = \sum \vec{B} \cdot \Delta\vec{\ell}$. The same definitions apply to the electric field $\vec{E}$. Two cases occur frequently.

- If the field is uniform and perpendicular to a flat surface of area $S$, the flux is $B S$.
- If the field is tangent to a circle of radius $r$ and has the same magnitude at every point on the circle, the circulation is $2\pi r\,B$.
:::

:::richiamo{titolo="Faraday's law of induction and Lenz's law"}
When the magnetic flux linked with a circuit varies with time, an induced emf $\mathcal{E} = -\dfrac{d\Phi(\vec{B})}{dt}$ develops in the circuit. The induced current flows in the direction that makes the magnetic field it produces oppose the change in flux. See the chapter on electromagnetic induction.
:::

:::definizione{#campo-elettrico-indotto titolo="Induced electric field"}
In a stationary loop placed in a time-varying magnetic field, the electrons in the wire begin to move. The magnetic part of the Lorentz force, $q\,\vec{v} \times \vec{B}$, vanishes for charges initially at rest, so the force that sets them in motion is electric. The electric field that produces this force is called an **induced electric field**. It exists throughout the region where the magnetic flux changes, even where there are no conductors. The loop merely reveals its presence through a current.

The work the induced field does on a unit charge in one complete trip around the loop is the induced emf, so $\mathcal{E} = \Gamma(\vec{E})$ along the wire.
:::

:::teorema{#circuitazione-campo-elettrico titolo="Faraday's law for the electric field"}
For any stationary oriented closed path $\gamma$,
$$
\Gamma(\vec{E}) = -\frac{d\Phi(\vec{B})}{dt} ,
$$
where $\Phi(\vec{B})$ is the magnetic flux through a surface bounded by $\gamma$. The direction of $\Delta\vec{S}$ follows from the right-hand rule applied to the direction of traversal of $\gamma$. This is an experimental law that Maxwell extended from a conducting loop to an arbitrary closed path.

The law can be used to calculate the induced electric field when there is sufficient symmetry. If a uniform magnetic field perpendicular to a disk of radius $r = 10\,\mathrm{cm}$ increases at a rate $0.20\,\mathrm{T/s}$, the magnitude of the circulation of the induced field around the circle is
$$
|\Gamma(\vec{E})| = \pi r^2 \cdot 0.20\,\mathrm{T/s} = \pi \cdot (0.10\,\mathrm{m})^2 \cdot 0.20\,\mathrm{T/s} \approx 6.3 \cdot 10^{-3}\,\mathrm{V} .
$$
:::

:::attenzione{#campo-indotto-non-conservativo}
The electrostatic field produced by stationary charges has zero circulation around every closed path. It is therefore conservative and can be described by an electric potential. The induced electric field, however, has nonzero circulation. It is *not* conservative, and no scalar potential alone describes it. With $r = 10\,\mathrm{cm}$ and $0.20\,\mathrm{T/s}$, the induced field does work $e\,|\Gamma(\vec{E})| = 1.60 \cdot 10^{-19}\,\mathrm{C} \cdot 6.3 \cdot 10^{-3}\,\mathrm{V} \approx 1.0 \cdot 10^{-21}\,\mathrm{J}$ on an electron as it travels once around the circle. The field does the same work on every subsequent trip even though the electron returns to its starting point.
:::

:::esempio{#campo-indotto-solenoide titolo="Electric field induced by a solenoid"}
A very long straight solenoid has radius $a$. Inside it, the magnetic field is uniform, parallel to the axis, and changes at a rate $\dfrac{dB}{dt}$. Outside, the magnetic field is zero. By the symmetry of the solenoid, the induced field lines are circles centered on its axis, and $\vec{E}$ is tangent to each circle and has constant magnitude along it. Apply Faraday's law to a circle of radius $r$.

- If $r \leq a$, the flux is $\pi r^2 B$, so $2\pi r\,E = \pi r^2 \left| \dfrac{dB}{dt} \right|$ and $E = \dfrac{r}{2} \left| \dfrac{dB}{dt} \right|$.
- If $r \geq a$, the flux is $\pi a^2 B$ because $B = 0$ outside the solenoid, so $E = \dfrac{a^2}{2r} \left| \dfrac{dB}{dt} \right|$.

With $a = 3.0\,\mathrm{cm}$ and $\left| \dfrac{dB}{dt} \right| = 0.40\,\mathrm{T/s}$, the field at a distance $r = 2.0\,\mathrm{cm}$ from the axis is $E = 0.010\,\mathrm{m} \cdot 0.40\,\mathrm{T/s} = 4.0 \cdot 10^{-3}\,\mathrm{V/m}$, and at a distance $r = 6.0\,\mathrm{cm}$ it is $E = \dfrac{(0.030\,\mathrm{m})^2}{0.12\,\mathrm{m}} \cdot 0.40\,\mathrm{T/s} = 3.0 \cdot 10^{-3}\,\mathrm{V/m}$. The induced field is nonzero even outside the solenoid, where the magnetic field vanishes. If $\vec{B}$ points out of the page and increases, Lenz's law gives a clockwise direction for the field lines of $\vec{E}$.

::grafico{assi=0 uguale=1 unicolore=1 poligoni="1.500,0.000 1.449,0.388 1.299,0.750 1.061,1.061 0.750,1.299 0.388,1.449 0.000,1.500 -0.388,1.449 -0.750,1.299 -1.061,1.061 -1.299,0.750 -1.449,0.388 -1.500,0.000 -1.449,-0.388 -1.299,-0.750 -1.061,-1.061 -0.750,-1.299 -0.388,-1.449 0.000,-1.500 0.388,-1.449 0.750,-1.299 1.061,-1.061 1.299,-0.750 1.449,-0.388" curve="cos(t),sin(t),0,6.29;2.5*cos(t),2.5*sin(t),0,6.29" vettori="-0.45,1,0.45,1,E;0.45,-1,-0.45,-1;-0.6,2.5,0.6,2.5,E;0.6,-2.5,-0.6,-2.5;2.5,0.6,2.5,-0.6;-2.5,-0.6,-2.5,0.6" segmenti="0,0,1.061,-1.061" etichette="-0.1,-0.05,⊙;-0.55,0.45,⊙;0.45,0.45,⊙;-0.55,-0.5,⊙;0.45,-0.5,⊙;0.75,-0.45,a" xmin=-3.2 xmax=3.2 ymin=-3 ymax=3 legenda=0 titolo="Cross section of the solenoid viewed from above. The field $\vec{B}$ points out of the page and increases. The induced electric field lines circle the axis clockwise both inside and outside the solenoid"}

:::

## Displacement current

:::richiamo{titolo="Ampère's law"}
For steady currents and any oriented closed path $\gamma$, we have $\Gamma(\vec{B}) = \mu_0\, i_{\text{enc}}$. Here $i_{\text{enc}}$ is the current enclosed by $\gamma$, that is, the current passing through any surface bounded by $\gamma$. See the chapter on sources of magnetic fields.
:::

:::osservazione{#problema-condensatore titolo="Ampère's law and a charging capacitor"}
A parallel-plate capacitor charges through a wire carrying current $i$. Choose a circle $\gamma$ around the wire and two surfaces bounded by $\gamma$. The wire passes through the flat surface $S_1$, so the enclosed current is $i$. The other surface $S_2$ bulges into the gap between the plates, where there are no moving charges, so the current passing through it is zero. Ampère's law would give different values for the same circulation $\Gamma(\vec{B})$ using the two surfaces. In the form just stated, it therefore does not apply to changing currents.

Between the plates, however, there is an electric field that grows as the capacitor charges, and its flux through $S_2$ increases. Maxwell completed Ampère's law by adding a term involving the rate of change of this flux.

::grafico{assi=0 uguale=1 linee="0,0 5,0;6,0 10,0;5,-1.4 5,1.4;6,-1.4 6,1.4" curve="2.5+0.25*cos(t),sin(t),0,6.29" segmenti="2.5,1,3.2,1.7;3.2,1.7,4.2,1.95;4.2,1.95,5.5,1.95;5.5,1.95,5.5,-1.95;5.5,-1.95,4.2,-1.95;4.2,-1.95,3.2,-1.7;3.2,-1.7,2.5,-1" vettori="0.4,0,1.5,0,i;7.6,0,8.7,0,i" etichette="2.0,1.2,γ;1.8,-0.55,S₁;3.6,2.25,S₂;4.4,-1.15,+q;6.2,-1.15,−q" xmin=-0.3 xmax=10.3 ymin=-2.5 ymax=2.6 legenda=0 titolo="Charging capacitor. The flat surface $S_1$ is crossed by the current $i$, while surface $S_2$ has the same boundary $\gamma$ but extends between the plates, where there are no moving charges"}

:::

:::definizione{#corrente-di-spostamento titolo="Displacement current"}
The **displacement current** through a surface is
$$
i_s = \varepsilon_0 \frac{d\Phi(\vec{E})}{dt} ,
$$
where $\Phi(\vec{E})$ is the electric flux through the surface. Displacement current is measured in amperes because $\varepsilon_0 \Phi(\vec{E})$ is measured in $\mathrm{C^2/(N\cdot m^2)} \cdot \mathrm{N\cdot m^2/C} = \mathrm{C}$, so its time derivative is measured in $\mathrm{C/s} = \mathrm{A}$. Unlike conduction current, displacement current does *not* correspond to moving charge. It arises solely from the changing electric field. If the uniform field between two plates of area $S = 0.025\,\mathrm{m^2}$ increases at a rate $\dfrac{dE}{dt} = 2.0 \cdot 10^{12}\,\mathrm{V/(m\cdot s)}$, the flux is $E S$ and the displacement current is
$$
i_s = \varepsilon_0 S \frac{dE}{dt} = 8.85 \cdot 10^{-12} \cdot 0.025 \cdot 2.0 \cdot 10^{12}\,\mathrm{A} \approx 0.44\,\mathrm{A} .
$$
:::

:::esempio{#corrente-spostamento-condensatore titolo="Displacement current in a parallel-plate capacitor"}
A parallel-plate capacitor in a vacuum has plates of area $S$ and charges at a current $i = \dfrac{dq}{dt}$, where $q$ is the charge on the positive plate. Neglecting edge effects, the field between the plates is uniform and equals $E = \dfrac{\sigma}{\varepsilon_0} = \dfrac{q}{\varepsilon_0 S}$. The flux through a surface between and parallel to the plates is therefore
$$
\Phi(\vec{E}) = E S = \frac{q}{\varepsilon_0} ,
\qquad \text{therefore} \qquad
i_s = \varepsilon_0 \frac{d\Phi(\vec{E})}{dt} = \frac{dq}{dt} = i .
$$
The displacement current between the plates equals the current in the wires and continues the current where conduction stops. With $i = 0.50\,\mathrm{A}$ and $S = 0.010\,\mathrm{m^2}$, the field between the plates increases at a rate $\dfrac{dE}{dt} = \dfrac{i}{\varepsilon_0 S} = \dfrac{0.50}{8.85 \cdot 10^{-12} \cdot 0.010}\,\mathrm{V/(m\cdot s)} \approx 5.6 \cdot 10^{12}\,\mathrm{V/(m\cdot s)}$.
:::

:::teorema{#legge-ampere-maxwell titolo="Ampère–Maxwell law"}
For every oriented closed path $\gamma$ and every surface bounded by $\gamma$ and oriented using the right-hand rule,
$$
\Gamma(\vec{B}) = \mu_0 \left( i_{\text{enc}} + i_s \right) = \mu_0\, i_{\text{enc}} + \mu_0 \varepsilon_0 \frac{d\Phi(\vec{E})}{dt} ,
$$
where $i_{\text{enc}}$ is the conduction current through the surface and $\Phi(\vec{E})$ is the electric flux through the same surface. This law is one of Maxwell's postulates and was confirmed by the experimental discovery of electromagnetic waves.

The law states that both currents and time-varying electric fields generate a magnetic field. For steady currents the flux $\Phi(\vec{E})$ does not change, and Ampère's law is recovered. For a capacitor charging at a current $i = 0.50\,\mathrm{A}$, the circulation around $\gamma$ equals $\mu_0 i = 4\pi \cdot 10^{-7} \cdot 0.50\,\mathrm{T\cdot m} \approx 6.3 \cdot 10^{-7}\,\mathrm{T\cdot m}$ whether we use surface $S_1$, through which the conduction current passes, or surface $S_2$, through which the displacement current passes.
:::

:::esempio{#campo-magnetico-condensatore titolo="Magnetic field between capacitor plates"}
A parallel-plate capacitor with circular plates of radius $R$ charges at a current $i$. Between the plates, the electric field is uniform. Its rate of increase follows as in the parallel-plate capacitor example on displacement current, using $S = \pi R^2$, which gives $\dfrac{dE}{dt} = \dfrac{i}{\varepsilon_0 \pi R^2}$. By symmetry, the field lines of $\vec{B}$ are circles centered on the axis of the plates. Apply the Ampère–Maxwell law to a circle of radius $r$ between and parallel to the plates. No conduction current passes through the disk it bounds.

- If $r \leq R$, the flux is $\Phi(\vec{E}) = E\,\pi r^2$, so $2\pi r\,B = \mu_0 \varepsilon_0\,\pi r^2 \dfrac{i}{\varepsilon_0 \pi R^2}$ and $B = \dfrac{\mu_0\, i\, r}{2\pi R^2}$.
- If $r \geq R$, the electric field outside the plates is zero, so $\Phi(\vec{E}) = E\,\pi R^2$ and $B = \dfrac{\mu_0\, i}{2\pi r}$, as for a straight wire.

With $R = 4.0\,\mathrm{cm}$ and $i = 1.0\,\mathrm{A}$, the field at the edge of the plates is $B = \dfrac{4\pi \cdot 10^{-7} \cdot 1.0}{2\pi \cdot 0.040}\,\mathrm{T} = 5.0 \cdot 10^{-6}\,\mathrm{T}$.

::grafico{f="min(1.25*x,20/x)" punti="4,5,pieno" segmenti="4,0,4,5" xmin=0 xmax=12 ymin=0 ymax=6 nomi="r,B" legenda=0 titolo="Magnetic field in $\mu\mathrm{T}$ as a function of distance $r$ from the axis in $\mathrm{cm}$, for $R = 4.0\,\mathrm{cm}$ and $i = 1.0\,\mathrm{A}$. It increases linearly up to the edge of the plates, then decreases as $\dfrac{1}{r}$"}

:::

## Maxwell's equations

:::teorema{#equazioni-di-maxwell titolo="Maxwell's equations"}
In a vacuum, for every closed surface and every oriented closed path, the electric and magnetic fields satisfy the four equations
$$
\begin{cases}
\Phi(\vec{E}) = \dfrac{Q}{\varepsilon_0} & \text{(closed surface)} \\[10pt]
\Phi(\vec{B}) = 0 & \text{(closed surface)} \\[10pt]
\Gamma(\vec{E}) = -\dfrac{d\Phi(\vec{B})}{dt} & \text{(closed path)} \\[10pt]
\Gamma(\vec{B}) = \mu_0 \left( i_{\text{enc}} + \varepsilon_0 \dfrac{d\Phi(\vec{E})}{dt} \right) & \text{(closed path)}
\end{cases}
$$
where $Q$ is the charge enclosed by the closed surface. In the last two equations the fluxes are evaluated through a surface bounded by the path. These equations are postulates that bring together Gauss's law for electricity, Gauss's law for magnetism, Faraday's law, and the Ampère–Maxwell law.

Together with the Lorentz force $\vec{F} = q\vec{E} + q\,\vec{v} \times \vec{B}$, which describes how fields act on charges, Maxwell's equations describe all the electric and magnetic phenomena of classical physics. For example, according to the first equation, a charge of $2.0\,\mathrm{nC}$ enclosed by a closed surface produces a flux $\Phi(\vec{E}) = \dfrac{2.0 \cdot 10^{-9}}{8.85 \cdot 10^{-12}}\,\mathrm{V\cdot m} \approx 2.3 \cdot 10^{2}\,\mathrm{V\cdot m}$ through it, regardless of the shape of the surface.
:::

:::osservazione{#significato-equazioni-maxwell titolo="Meaning of the four equations"}
- Gauss's law for electricity states that electric charges are the sources of the electric field. Hence the field lines of $\vec{E}$ start on positive charges and end on negative charges.
- Gauss's law for magnetism states that the flux of $\vec{B}$ through a closed surface is always zero. Thus there are no isolated magnetic poles, and the field lines of $\vec{B}$ form closed loops.
- Faraday's law states that a changing magnetic field generates an electric field with closed field lines and nonzero circulation.
- The Ampère–Maxwell law states that currents and changing electric fields generate a magnetic field.

When the fields do not vary with time, the flux derivatives vanish and the equations for $\vec{E}$ separate from those for $\vec{B}$. This gives the laws of electrostatics and magnetostatics.
:::

:::osservazione{#campi-che-si-generano titolo="How changing electric and magnetic fields generate each other"}
In a region with no charges or currents, $Q = 0$ and $i_{\text{enc}} = 0$, and the last two equations become
$$
\Gamma(\vec{E}) = -\frac{d\Phi(\vec{B})}{dt} ,
\qquad
\Gamma(\vec{B}) = \mu_0 \varepsilon_0 \frac{d\Phi(\vec{E})}{dt} .
$$
A changing magnetic field generates a changing electric field, which in turn generates a changing magnetic field. The two fields can thus sustain each other even far from the charges that produced them and can propagate through space. From this property Maxwell deduced the existence of **electromagnetic waves**.
:::

## Electromagnetic waves

:::osservazione{#produzione-onde titolo="How electromagnetic waves are produced"}
A stationary charge produces only an electrostatic field, and a charge moving at constant velocity in a straight line also produces a magnetic field that travels with it. An **accelerating** charge emits an electromagnetic wave that travels away from the charge. In an antenna, electrons oscillate along a conductor at the frequency $f$ of the alternating current produced by an oscillating circuit. The antenna emits a wave of the same frequency. For the $LC$ circuit, see the chapter on alternating current and transformers.

Hertz produced and detected the waves predicted by Maxwell between 1886 and 1888. An oscillating discharge between two conductors emitted the wave. Several meters away, a spark jumped the gap in a metal ring that served as the receiver. Hertz measured the wavelength and frequency of the waves he produced and used them to obtain a propagation speed close to the speed of light.
:::

:::definizione{#onda-elettromagnetica titolo="Electromagnetic wave"}
An **electromagnetic wave** is a disturbance that propagates through space as varying electric and magnetic fields linked by Maxwell's equations. Far from the source, the wave has the following properties.

- At every point, $\vec{E}$ and $\vec{B}$ are perpendicular to each other and to the direction of propagation, so the wave is **transverse**.
- The cross product $\vec{E} \times \vec{B}$ points in the direction of propagation.
- The two fields oscillate in phase: they reach zero and their maximum values at the same times.
- The wave can propagate in a vacuum, without a material medium.

Light from the Moon, about $3.84 \cdot 10^{8}\,\mathrm{m}$ from Earth, crosses the vacuum of space and arrives after $\dfrac{3.84 \cdot 10^{8}}{3.00 \cdot 10^{8}}\,\mathrm{s} = 1.28\,\mathrm{s}$.

::grafico{assi=0 uguale=1 linee="0,0 10.2,0;0,0 0,2.2;0,0 -1.1,-1.1" curve="t,1.5*sin(t),0,9.42;t-0.6*sin(t),-0.6*sin(t),0,9.42" vettori="1.571,0,1.571,1.5,E;1.571,0,0.971,-0.6,B;8.6,-1.5,10.1,-1.5,c" etichette="10.4,-0.05,x;0.15,2.35,y;-1.4,-1.3,z" xmin=-1.7 xmax=10.8 ymin=-2 ymax=2.6 legenda=0 titolo="Electromagnetic wave propagating along the $x$ axis. The electric field oscillates along $y$ and the magnetic field along $z$, in phase. The vector $\vec{E} \times \vec{B}$ points in the direction of propagation"}

:::

:::teorema{#velocita-della-luce titolo="Speed of electromagnetic waves"}
It follows from Maxwell's equations that electromagnetic waves travel in a vacuum at speed
$$
c = \frac{1}{\sqrt{\varepsilon_0 \mu_0}} .
$$
The derivation requires mathematics beyond high school level, so only the result is given here. The product of the two constants is
$$
\varepsilon_0 \mu_0 = 8.85 \cdot 10^{-12} \cdot 4\pi \cdot 10^{-7}\,\mathrm{s^2/m^2} \approx 1.112 \cdot 10^{-17}\,\mathrm{s^2/m^2} ,
$$
so
$$
c = \frac{1}{\sqrt{1.112 \cdot 10^{-17}}}\,\mathrm{m/s} = \frac{1}{3.335 \cdot 10^{-9}}\,\mathrm{m/s} \approx 3.00 \cdot 10^{8}\,\mathrm{m/s} .
$$
This value agrees with the measured speed of light, and from this agreement Maxwell concluded that light is an electromagnetic wave. The speed $c$ is independent of both the frequency and the amplitude of the wave.
:::

:::teorema{#relazione-e-cb titolo="Relationship between the fields in a wave"}
In an electromagnetic wave propagating in a vacuum, the magnitudes of the two fields at any point and instant satisfy
$$
E = c B .
$$
This relation also follows from Maxwell's equations. It gives the wave's magnetic field when the electric field is known. An electric field of $600\,\mathrm{V/m}$ corresponds to a magnetic field $B = \dfrac{600}{3.00 \cdot 10^{8}}\,\mathrm{T} = 2.0 \cdot 10^{-6}\,\mathrm{T}$. Therefore, on a charge moving at speed $v \ll c$, the magnetic force of the wave, whose magnitude is at most $q v B = q E \dfrac{v}{c}$, is much smaller than the electric force $q E$.
:::

## Sinusoidal plane waves

:::definizione{#onda-piana-sinusoidale titolo="Sinusoidal plane wave"}
A wave is called **plane** if, at a given instant, the fields are the same at all points in each plane perpendicular to the direction of propagation. Far from a small source, the wave is approximately plane. A plane wave traveling along the positive $x$ axis is **sinusoidal** if its fields are
$$
E(x,t) = E_0 \sin(kx - \omega t) ,
\qquad
B(x,t) = B_0 \sin(kx - \omega t) ,
$$
with $B_0 = \dfrac{E_0}{c}$. The positive constants in the formulas have the following names.

- $E_0$ and $B_0$ are the **amplitudes** of the two fields.
- $k = \dfrac{2\pi}{\lambda}$ is the **wave number**, where the **wavelength** $\lambda$ is the distance between consecutive crests at a given instant.
- $\omega = \dfrac{2\pi}{T} = 2\pi f$ is the **angular frequency**, where the **period** $T$ is the time for one complete oscillation at a fixed point and $f = \dfrac{1}{T}$ is the **frequency**.

The wave number is measured in $\mathrm{rad/m}$ and the angular frequency in $\mathrm{rad/s}$. At time $t = 0$, the electric field is $E_0 \sin(kx)$, which repeats whenever $x$ increases by $\lambda$ because $k\lambda = 2\pi$.

::grafico{f="2*sin(pi*x/4)" segmenti="2,2.5,10,2.5;2,0,2,2;10,0,10,2" punti="2,2,pieno;10,2,pieno" etichette="5.7,2.75,λ;2.3,1.0,E₀" xmin=0 xmax=18 ymin=-3 ymax=3 nomi="x,E" titolo="Electric field of a sinusoidal wave at time $t = 0$. Consecutive crests are separated by one wavelength $\lambda$, and the height of a crest is the amplitude $E_0$"}

:::

::::teorema{#relazione-lambda-f titolo="Relationship between wavelength and frequency"}
For a sinusoidal electromagnetic wave in a vacuum,
$$
c = \lambda f = \frac{\omega}{k} .
$$
The wave thus travels one wavelength in one period. If either the frequency or the wavelength is known, the relation gives the other. Wi-Fi waves with $f = 2.4\,\mathrm{GHz}$ have wavelength $\lambda = \dfrac{c}{f} = \dfrac{3.00 \cdot 10^{8}}{2.4 \cdot 10^{9}}\,\mathrm{m} = 0.125\,\mathrm{m}$.

:::dimostrazione
The idea is to identify a traveling profile in the wave equation. Factoring $k$ out of the argument of the sine gives
$$
E(x,t) = E_0 \sin\left( k \left( x - \frac{\omega}{k}\, t \right) \right) .
$$
At time $t$, the field at point $x$ equals the field that was present at time $0$ at point $x - \dfrac{\omega}{k}\, t$. The field profile thus travels without changing shape. In time $t$ it travels a distance $\dfrac{\omega}{k}\, t$, so its speed is $\dfrac{\omega}{k}$. This is the wave speed $c$, so $c = \dfrac{\omega}{k}$. Substituting $\omega = \dfrac{2\pi}{T}$ and $k = \dfrac{2\pi}{\lambda}$ gives
$$
c = \frac{2\pi}{T} \cdot \frac{\lambda}{2\pi} = \frac{\lambda}{T} = \lambda f .
$$
:::
::::

:::esempio{titolo="Reading a wave equation"}
The electric field of a wave is $E(x,t) = 80 \sin\left( 1.0 \cdot 10^{7}\,x - 3.0 \cdot 10^{15}\,t \right)$, with $E$ in $\mathrm{V/m}$, $x$ in meters, and $t$ in seconds. Comparison with the expression for a sinusoidal wave gives $E_0 = 80\,\mathrm{V/m}$, $k = 1.0 \cdot 10^{7}\,\mathrm{rad/m}$, and $\omega = 3.0 \cdot 10^{15}\,\mathrm{rad/s}$. Therefore,
$$
\lambda = \frac{2\pi}{k} \approx 6.3 \cdot 10^{-7}\,\mathrm{m} ,
\qquad
f = \frac{\omega}{2\pi} \approx 4.8 \cdot 10^{14}\,\mathrm{Hz} ,
\qquad
B_0 = \frac{E_0}{c} \approx 2.7 \cdot 10^{-7}\,\mathrm{T} .
$$
The ratio $\dfrac{\omega}{k} = 3.0 \cdot 10^{8}\,\mathrm{m/s}$ equals $c$, as required for a wave in a vacuum. The wavelength of about $630\,\mathrm{nm}$ is in the visible range.
:::

## Energy and intensity

:::richiamo{titolo="Energy densities of the fields"}
In a vacuum, the electric field has energy density $u_E = \dfrac{1}{2} \varepsilon_0 E^2$, as found for a parallel-plate capacitor. The magnetic field has energy density $u_B = \dfrac{B^2}{2\mu_0}$, as found for a solenoid in the chapter on self-induction, RL circuits, and magnetic energy.
:::

::::teorema{#densita-energia-onda titolo="Energy density of a wave"}
In an electromagnetic wave in a vacuum, the electric and magnetic energy densities are equal at every point and instant, and the total energy density is
$$
u = u_E + u_B = \varepsilon_0 E^2 .
$$
Thus half the energy of the wave is associated with the magnetic field. In a sinusoidal wave, $E^2$ oscillates, and the average of $\sin^2$ over a period is $\dfrac{1}{2}$, as for alternating currents. The average energy density is therefore
$$
\bar{u} = \frac{1}{2} \varepsilon_0 E_0^2 = \varepsilon_0 E_{\text{rms}}^2 ,
\qquad \text{with} \qquad
E_{\text{rms}} = \frac{E_0}{\sqrt{2}} ,
$$
where $E_{\text{rms}}$ is the **root-mean-square value** of the electric field. With $E_{\text{rms}} = 50\,\mathrm{V/m}$, we have $\bar{u} = 8.85 \cdot 10^{-12} \cdot 50^2\,\mathrm{J/m^3} \approx 2.2 \cdot 10^{-8}\,\mathrm{J/m^3}$.

:::dimostrazione
The relationship between the fields in a wave gives $B = \dfrac{E}{c}$, and the expression for the speed of electromagnetic waves gives $c^2 = \dfrac{1}{\varepsilon_0 \mu_0}$. Substitution into the magnetic energy density gives
$$
u_B = \frac{B^2}{2\mu_0} = \frac{E^2}{2\mu_0 c^2} = \frac{\varepsilon_0 \mu_0 E^2}{2\mu_0} = \frac{1}{2} \varepsilon_0 E^2 = u_E .
$$
The total density is therefore $u = 2 u_E = \varepsilon_0 E^2$.
:::
::::

:::definizione{#intensita-onda titolo="Wave intensity"}
The **intensity** $I$ of a wave is the average energy that crosses a surface of area $1\,\mathrm{m^2}$ perpendicular to the direction of propagation in one second. If the wave's average power $P$ is distributed uniformly over a perpendicular surface of area $S$, the intensity is
$$
I = \frac{P}{S} ,
$$
and is measured in $\mathrm{W/m^2}$. Because $I$ denotes intensity, the lowercase letter $i$ denotes current throughout this chapter. A laser pointer emitting $1.0\,\mathrm{mW}$ over a cross section of $1.0\,\mathrm{mm^2}$ produces an intensity $I = \dfrac{1.0 \cdot 10^{-3}\,\mathrm{W}}{1.0 \cdot 10^{-6}\,\mathrm{m^2}} = 1.0 \cdot 10^{3}\,\mathrm{W/m^2}$.
:::

::::teorema{#intensita-campo-efficace titolo="Intensity and electric field"}
The intensity of a sinusoidal electromagnetic wave in a vacuum is
$$
I = c\,\bar{u} = c\,\varepsilon_0 E_{\text{rms}}^2 = \frac{1}{2}\, c\,\varepsilon_0 E_0^2 .
$$
Intensity is proportional to the square of the field, so doubling the amplitude quadruples the intensity. The rms field can be found from the intensity using $E_{\text{rms}} = \sqrt{\dfrac{I}{c\,\varepsilon_0}}$. For the laser pointer of intensity $1.0 \cdot 10^{3}\,\mathrm{W/m^2}$,
$$
E_{\text{rms}} = \sqrt{\frac{1.0 \cdot 10^{3}}{3.00 \cdot 10^{8} \cdot 8.85 \cdot 10^{-12}}}\,\mathrm{V/m} \approx 6.1 \cdot 10^{2}\,\mathrm{V/m} .
$$

::grafico{assi=0 uguale=1 linee="1,0 5,0;1,2 5,2" curve="5+0.35*cos(t),1+sin(t),0,6.29;1+0.35*cos(t),1+sin(t),-1.571,1.571" segmenti="1,-0.4,5,-0.4" vettori="5.5,1,7.3,1,c" etichette="2.7,-0.8,c Δt;5.45,2.2,S" xmin=0.2 xmax=7.8 ymin=-1.2 ymax=2.6 legenda=0 titolo="In time $\Delta t$, the energy crossing surface $S$ is the energy contained in the cylinder of base area $S$ and height $c\,\Delta t$, namely $\bar{u}\,S\,c\,\Delta t$"}

:::dimostrazione
The wave travels a distance $c\,\Delta t$ in time $\Delta t$. Thus the energy crossing surface $S$ in this time is all the energy in a cylinder of base area $S$ and height $c\,\Delta t$ immediately in front of it. The cylinder's volume is $S\,c\,\Delta t$, so the average energy crossing $S$ is $\bar{u}\,S\,c\,\Delta t$. Dividing by the time $\Delta t$ and area $S$ gives the intensity
$$
I = \frac{\bar{u}\,S\,c\,\Delta t}{S\,\Delta t} = c\,\bar{u} .
$$
Substituting $\bar{u} = \varepsilon_0 E_{\text{rms}}^2 = \dfrac{1}{2} \varepsilon_0 E_0^2$ gives the other two expressions.
:::
::::

:::teorema{#sorgente-puntiforme titolo="Intensity of a point source"}
A point source emitting average power $P$ uniformly in all directions in a medium that does not absorb energy produces an intensity at distance $r$ given by
$$
I = \frac{P}{4\pi r^2} .
$$
The formula follows from conservation of energy. The power $P$ crosses every sphere centered on the source and is distributed uniformly over its surface of area $4\pi r^2$. The intensity therefore decreases as $\dfrac{1}{r^2}$, and the rms field, proportional to $\sqrt{I}$, decreases as $\dfrac{1}{r}$. A lamp emitting $60\,\mathrm{W}$ of electromagnetic radiation produces, at $r = 3.0\,\mathrm{m}$, an intensity $I = \dfrac{60}{4\pi \cdot 3.0^2}\,\mathrm{W/m^2} \approx 0.53\,\mathrm{W/m^2}$.
:::

## Momentum and radiation pressure

:::teorema{#quantita-di-moto-onda titolo="Momentum of radiation"}
An electromagnetic wave carrying energy $U$ in a vacuum also carries momentum of magnitude
$$
p = \frac{U}{c} ,
$$
directed along the direction of propagation. The result follows from Maxwell's equations and is confirmed by measurements of the force a beam of light exerts on a mirror suspended from a thin fiber. The factor $\dfrac{1}{c}$ is very small, so even for large energies the momentum of light is small. A laser pulse of energy $2.0\,\mathrm{J}$ carries momentum $p = \dfrac{2.0}{3.00 \cdot 10^{8}}\,\mathrm{kg\cdot m/s} \approx 6.7 \cdot 10^{-9}\,\mathrm{kg\cdot m/s}$.
:::

:::richiamo{titolo="Impulse–momentum theorem"}
If, during a time interval $\Delta t$, an object's momentum changes by $\Delta p$, the average force acting on it has magnitude $F = \dfrac{\Delta p}{\Delta t}$.
:::

::::teorema{#pressione-di-radiazione titolo="Radiation pressure"}
A wave of intensity $I$ strikes a flat surface at normal incidence. It exerts a force perpendicular to the surface. The ratio of the force magnitude to the area, called **radiation pressure**, is

- $p_{\text{rad}} = \dfrac{I}{c}$ if the surface absorbs all the radiation.
- $p_{\text{rad}} = \dfrac{2I}{c}$ if the surface reflects all the radiation.

Near Earth, outside the atmosphere, solar radiation has an intensity of about $1360\,\mathrm{W/m^2}$. On an absorbing surface it produces a pressure $p_{\text{rad}} = \dfrac{1360}{3.00 \cdot 10^{8}}\,\mathrm{Pa} \approx 4.5 \cdot 10^{-6}\,\mathrm{Pa}$, about $4 \cdot 10^{-11}$ times atmospheric pressure. This pressure has visible effects only on very light objects with a large surface area, such as solar sails, and on comet dust, which forms a tail pointing away from the Sun.

:::dimostrazione
Let $S$ be the area of the surface. In time $\Delta t$, energy $U = I\,S\,\Delta t$ reaches the surface. By the relation for the momentum of radiation, this energy carries momentum $\dfrac{U}{c} = \dfrac{I\,S\,\Delta t}{c}$ perpendicular to the surface. If the surface absorbs the radiation, it receives all this momentum. If it reflects the radiation, the wave travels back with opposite momentum, so the momentum of the radiation changes by $\dfrac{2U}{c}$ and the surface receives $\dfrac{2U}{c}$. By the **impulse–momentum theorem**, the average force is the momentum received divided by $\Delta t$.
$$
F = \frac{I\,S}{c} \quad \text{(absorption)} ,
\qquad
F = \frac{2 I\,S}{c} \quad \text{(reflection)} .
$$
Dividing by $S$ gives the two pressures.
:::
::::

## Polarization

:::definizione{#polarizzazione titolo="Polarization"}
An electromagnetic wave is **linearly polarized** if its electric field always oscillates along the same direction, called the direction of polarization. The wave emitted by a straight antenna is polarized along the antenna because the charges oscillate in that direction. Light from the Sun or an incandescent lamp is **unpolarized** because it is the sum of waves emitted by many independent atoms, with electric field directions distributed randomly and changing very rapidly.
:::

:::definizione{#filtro-polarizzatore titolo="Polarizing filter"}
A **polarizing filter** is a sheet with a preferred direction called its transmission axis. The filter transmits the electric field component parallel to the axis and absorbs the perpendicular component. The emerging light is polarized along the filter's axis. If unpolarized light of intensity $I_0$ is incident on the filter, the transmitted intensity is
$$
I = \frac{I_0}{2} ,
$$
because the average of $\cos^2\theta$ over all field directions is $\dfrac{1}{2}$. An unpolarized beam of intensity $800\,\mathrm{W/m^2}$ emerges from a polarizer with intensity $400\,\mathrm{W/m^2}$ regardless of the filter orientation.
:::

::::teorema{#legge-di-malus titolo="Malus's law"}
A linearly polarized wave of intensity $I_0$ strikes a polarizing filter whose transmission axis makes an angle $\theta$ with the direction of polarization. The transmitted intensity is then
$$
I = I_0 \cos^2\theta .
$$
The law shows how to adjust light intensity by rotating the filter. At $\theta = 0^\circ$, all the light passes through. At $\theta = 90^\circ$, it is completely blocked. Light of intensity $400\,\mathrm{W/m^2}$ emerging from a first filter passes through a second filter rotated by $30^\circ$ with transmitted intensity $I = 400 \cdot \cos^2 30^\circ\,\mathrm{W/m^2} = 400 \cdot \dfrac{3}{4}\,\mathrm{W/m^2} = 300\,\mathrm{W/m^2}$.

::grafico{curve="t,cos(t*pi/180)^2,0,180" punti="0,1,pieno;90,0,pieno;180,1,pieno" xmin=0 xmax=200 ymin=0 ymax=1.2 nomi="θ,I" legenda=0 titolo="Intensity transmitted by a polarizer, in units of $I_0$, as a function of the angle $\theta$ in degrees. It is greatest at $\theta = 0^\circ$ and $\theta = 180^\circ$ and zero at $\theta = 90^\circ$"}

:::dimostrazione
Let $E_0$ be the electric field amplitude of the incident wave. The filter transmits only the field component parallel to its axis, whose amplitude is $E_0 \cos\theta$. The formula relating intensity to electric field shows that the intensity is proportional to the square of the amplitude, so
$$
\frac{I}{I_0} = \frac{\left( E_0 \cos\theta \right)^2}{E_0^2} = \cos^2\theta .
$$
:::
::::

## Electromagnetic spectrum

:::definizione{#spettro-elettromagnetico titolo="Electromagnetic spectrum"}
All electromagnetic waves have the same physical nature and the same speed $c$ in a vacuum. They differ in frequency or, equivalently, in wavelength $\lambda = \dfrac{c}{f}$. The full range of frequencies is called the **electromagnetic spectrum**. It is divided into bands named according to how the waves are produced and detected. The boundaries are approximate.

- Radio waves, with $\lambda$ greater than about $1\,\mathrm{m}$, are used for radio and television broadcasting.
- Microwaves, with $\lambda$ between about $1\,\mathrm{mm}$ and $1\,\mathrm{m}$, are used in radar, cell phones, Wi-Fi, and microwave ovens.
- Infrared, with $\lambda$ between about $750\,\mathrm{nm}$ and $1\,\mathrm{mm}$, is emitted by warm objects and is used in remote controls and thermal imaging cameras.
- Visible light has $\lambda$ between about $380\,\mathrm{nm}$ (violet) and $750\,\mathrm{nm}$ (red).
- Ultraviolet, with $\lambda$ between about $10\,\mathrm{nm}$ and $380\,\mathrm{nm}$, tans the skin and is used for sterilization.
- X-rays, with $\lambda$ between about $0.01\,\mathrm{nm}$ and $10\,\mathrm{nm}$, are used to produce radiographs.
- Gamma rays, with $\lambda$ less than about $0.01\,\mathrm{nm}$, are emitted during nuclear decay and are used in radiation therapy.

The edges of the visible range correspond to frequencies $\dfrac{3.00 \cdot 10^{8}}{750 \cdot 10^{-9}}\,\mathrm{Hz} = 4.0 \cdot 10^{14}\,\mathrm{Hz}$ and $\dfrac{3.00 \cdot 10^{8}}{380 \cdot 10^{-9}}\,\mathrm{Hz} \approx 7.9 \cdot 10^{14}\,\mathrm{Hz}$. A microwave oven operates at frequency $f = 2.45\,\mathrm{GHz}$, so $\lambda = \dfrac{3.00 \cdot 10^{8}}{2.45 \cdot 10^{9}}\,\mathrm{m} \approx 12\,\mathrm{cm}$.

::grafico{assi=0 uguale=1 poligoni="-14,0 3,0 3,0.8 -14,0.8;-6.42,0 -6.12,0 -6.12,0.8 -6.42,0.8" segmenti="-11,0,-11,0.8;-8,0,-8,0.8;-3,0,-3,0.8;0,0,0,0.8" linee="-12,0 -12,-0.2;-9,0 -9,-0.2;-6,0 -6,-0.2;-3,0 -3,-0.2;0,0 0,-0.2;3,0 3,-0.2" vettori="-6.27,2.0,-6.27,0.95" etichette="-12.8,0.3,γ;-9.8,0.3,X;-7.5,0.3,UV;-4.8,0.3,IR;-2.6,0.3,microwaves;1.1,0.3,radio;-7.1,2.25,visible;-12.6,-0.6,1 pm;-9.6,-0.6,1 nm;-6.6,-0.6,1 μm;-3.7,-0.6,1 mm;-0.4,-0.6,1 m;2.4,-0.6,1 km" xmin=-14.5 xmax=3.5 ymin=-1.1 ymax=2.7 legenda=0 titolo="Electromagnetic spectrum with wavelength on a logarithmic scale. Toward the left, $\lambda$ decreases and the frequency $f = \dfrac{c}{\lambda}$ increases. Visible light occupies the narrow band between $380\,\mathrm{nm}$ and $750\,\mathrm{nm}$"}

:::
