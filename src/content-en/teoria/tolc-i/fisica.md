---
titolo: "Physics for the TOLC-I"
sommario: "Measurements, motion, forces, energy, fluids, heat, waves, optics and electromagnetism through models, examples and graphs."
---

## Measurements, units and vectors

:::definizione{#misure titolo="Physical quantity and measurement unit"}
A **physical quantity** is expressed by a numerical value and a unit. In the measurement $2\,\mathrm{m}$, the number states how many times the length contains the meter unit. A conversion changes the number and the unit together, leaving the quantity unchanged. The base units used in this chapter are the meter, kilogram, second, kelvin and ampere.

A prefix represents a power of ten. Since $1\,\mathrm{cm}=10^{-2}\,\mathrm{m}$, one square centimeter is $10^{-4}\,\mathrm{m^2}$ and one cubic centimeter is $10^{-6}\,\mathrm{m^3}$. The exponent also applies to the conversion factor. Moreover, $1\,\mathrm{L}=10^{-3}\,\mathrm{m^3}$; therefore half a liter occupies $5\cdot10^{-4}\,\mathrm{m^3}$.
:::

:::esempio{titolo="A speed conversion"}
The speed $72\,\mathrm{km/h}$ is equivalent to
$$
72\,\frac{\mathrm{km}}{\mathrm{h}}
=72\,\frac{1000\,\mathrm{m}}{3600\,\mathrm{s}}
=20\,\mathrm{m/s}.
$$
The ratio of length to time retains the dimension of speed. A formula adding a speed to a distance would be dimensionally inconsistent, because the two quantities have different units.
:::

:::definizione{#vettori titolo="Scalars and vectors"}
Mass, temperature and energy are **scalars**. Displacement, velocity and force are vectors, described by magnitude, direction and sense. Along an oriented axis, a positive component indicates the direction of the axis; a negative component indicates the opposite direction. Opposite forces are added algebraically; two perpendicular components $F_x,F_y$ give magnitude $\sqrt{F_x^2+F_y^2}$. The dot product $\vec F\cdot\vec s=Fs\cos\theta$ measures how much the force acts along the displacement and will be used for work.
:::

:::osservazione
Repeated measurements generally show a spread. Averaging reduces the effect of random fluctuations, whereas a calibration error can shift all readings in the same direction. A value $L=(12.0\pm0.2)\,\mathrm{cm}$ has relative uncertainty $\dfrac{0.2}{12.0}$, approximately $1.7\%$. Decimal places express measurement precision; adding zeros without new experimental information does not increase it.
:::

## Position, velocity and acceleration

:::definizione{#cinematica titolo="Displacement and average velocity"}
Once an origin and an axis have been chosen, $x(t)$ gives the position at time $t$. Between two times, the **displacement** is $\Delta x=x_f-x_i$ and average velocity is $v_m=\dfrac{\Delta x}{\Delta t}$. Distance traveled instead adds the lengths of all segments, regardless of direction. Someone completing a lap and returning to the start has zero displacement, even though the distance traveled is positive.

On a position-time graph, the slope of the segment joining two points gives average velocity. An increasing straight line describes a constant positive velocity; a horizontal straight line describes a stationary body. An intersection between two position graphs means that the bodies occupy the same position at the same time.
:::

:::teorema{#moto-uniformemente-accelerato titolo="Motion with constant acceleration"}
Average acceleration measures the change in velocity per unit time. If acceleration $a$ is constant and $t=0$ is the initial time, then
$$
v=v_0+at,\qquad x=x_0+v_0t+\frac12at^2.
$$
Eliminating time gives $v^2-v_0^2=2a(x-x_0)$. The quantities are components along the same axis, so their signs have physical meaning. Positive velocity with negative acceleration initially describes slowing down; after possibly stopping, the body may move in the negative direction.
:::

:::esempio{titolo="From a velocity-time graph to distance"}
A body starts from rest and has acceleration $2\,\mathrm{m/s^2}$ for $3\,\mathrm{s}$. Its final velocity is $6\,\mathrm{m/s}$. Displacement is the area of the triangle under the graph, so it is $\dfrac12\cdot3\cdot6=9\,\mathrm{m}$. Multiplying the final velocity by the entire time would give twice as much, because the body reaches that velocity only at the end.

::grafico{f="2*x" xmin=0 xmax=3.5 ymin=0 ymax=7 nomi="t,v" area="2*x;0;0;3" punti="3,6,pieno" legenda="v=2t" titolo="Time in seconds, velocity in m/s: the area is the displacement of 9 m"}
:::

:::osservazione
In free fall near Earth's surface, neglecting air resistance, acceleration has magnitude $g$ and points downward. With the positive axis upward, it is written $a=-g$. At the highest point of a vertical throw, velocity is zero for an instant, whereas acceleration remains $-g$. Zero velocity and zero acceleration therefore describe different conditions.
:::

## Forces, equilibrium and circular motion

:::teorema{#dinamica titolo="Newton's laws"}
In an inertial reference frame, zero net force keeps a body's velocity constant. For constant mass $m$, **Newton's second law** is $\sum\vec F=m\vec a$. All forces acting on the selected body are added, and then the equation is solved along each axis. A crate pulled with $18\,\mathrm{N}$ and opposed by $6\,\mathrm{N}$ of friction experiences a net force of $12\,\mathrm{N}$, not $18\,\mathrm{N}$.

Action and reaction forces have equal magnitude and opposite directions, but act on different bodies. A book's weight and the table's force on the book may balance; the reaction to the weight is instead the book's gravitational force on Earth.
:::

:::definizione{#forze-usuali titolo="Weight, elasticity and friction"}
Weight near Earth's surface is $P=mg$; mass stays the same if $g$ changes. An ideal spring extended by $x$ exerts a restoring force of magnitude $k|x|$, where $k$ is the spring constant. The normal force $N$ is perpendicular to the contact surface.

Static friction adjusts up to the limit $F_s\leq\mu_sN$. If a push of $8\,\mathrm{N}$ leaves the body at rest, friction is $8\,\mathrm{N}$ even when the limit is greater. During sliding, the kinetic-friction model gives $F_d=\mu_dN$, opposite to relative velocity. An extended body is in equilibrium when both the net force and the sum of torques are zero. The torque of a force about a point has magnitude $Fb$, where $b$ is the perpendicular distance to its line of action.
:::

:::definizione{#moto-circolare titolo="Centripetal acceleration"}
A body in uniform circular motion maintains its speed $v$, while the direction of its velocity changes continuously. For radius $r$ and period $T$, the time for one revolution,
$$
v=\frac{2\pi r}{T},\qquad f=\frac1T,\qquad a_c=\frac{v^2}{r}.
$$
Acceleration points toward the center. Centripetal force is the name of the net radial force required by the motion, equal to $\dfrac{mv^2}{r}$; it can be supplied by string tension, friction or gravitation. In the following graph, velocity and acceleration are perpendicular.

::grafico{curve="2*cos(t),2*sin(t),0,6.283185" xmin=-3 xmax=4 ymin=-3 ymax=4 uguale=1 vettori="2,0,2,2,v;2,0,0.5,0,a" punti="2,0,pieno,P" legenda="x^2+y^2=4" titolo="At point P velocity v is tangential and acceleration a is centripetal"}
:::

## Work, energy and momentum

:::definizione{#energia titolo="Work and kinetic energy"}
For a constant force, the **work** over displacement $s$ is $W=Fs\cos\theta$. If force and displacement point the same way, work is positive; if they point opposite ways, it is negative; if they are perpendicular, it is zero. One joule equals one newton multiplied by one meter, $1\,\mathrm{J}=1\,\mathrm{N}\,\mathrm{m}$. A force of $10\,\mathrm{N}$ at $60^\circ$ to a displacement of $4\,\mathrm{m}$ does $20\,\mathrm{J}$ of work, because the relevant component is $5\,\mathrm{N}$.

The kinetic energy of a body of mass $m$ and speed $v$ is $K=\dfrac12mv^2$. The work of the net force satisfies $W_{\mathrm{tot}}=K_f-K_i$. Negative net work reduces kinetic energy, but its final value remains nonnegative. Average power is $P=\dfrac W{\Delta t}$ and is measured in watts, or joules per second.
:::

:::teorema{#conservazione-energia titolo="Mechanical energy"}
Near Earth's surface, gravitational potential energy relative to a reference height is $U_g=mgh$. For an ideal spring, $U_e=\dfrac12kx^2$. If nonconservative forces do zero work, mechanical energy $K+U$ is conserved. A body starting from rest and descending through height $h$ without friction satisfies
$$
mgh=\frac12mv^2,\qquad v=\sqrt{2gh}.
$$
Mass cancels; the result depends on the vertical drop, not on the guide's length. With friction, the change in mechanical energy equals the work of nonconservative forces, generally negative for sliding.
:::

:::definizione{#quantita-di-moto titolo="Impulse and collisions"}
**Momentum** is $\vec p=m\vec v$. The impulse of the net force is the change in momentum; for a constant force, $\vec J=\vec F\Delta t$. For a system with negligible external impulse, the vector sum of momenta is conserved.

If two carts stick together, their common velocity satisfies $m_1v_1+m_2v_2=(m_1+m_2)v_f$, with signed velocities. The collision is completely inelastic: some kinetic energy changes into other forms. Conserving momentum remains correct even when kinetic energy decreases. In an elastic collision both are conserved.
:::

## Fluids at rest and in motion

:::definizione{#fluidi titolo="Density and pressure"}
Average density is $\rho=\dfrac mV$, with unit $\mathrm{kg/m^3}$. Average pressure on a surface is $p=\dfrac{F_\perp}{A}$, where the normal component of force is used. The pascal is equivalent to $\mathrm{N/m^2}$. For the same force, a smaller surface experiences greater pressure; this is why a sharp tip concentrates mechanical action.

In a liquid at rest, with uniform density and constant gravitational acceleration, the **hydrostatic pressure law** gives $p=p_0+\rho gh$, where $h$ is depth below the surface. With equal surface pressure, density and gravity, pressure at the same depth is equal even in differently shaped containers. In communicating vessels open to the same pressure, the surfaces of the same liquid lie at the same height.
:::

:::esempio{titolo="Absolute pressure and pressure increase"}
In water with $\rho=1000\,\mathrm{kg/m^3}$, at $2\,\mathrm{m}$ below the surface, using $g=10\,\mathrm{m/s^2}$, the increase is $\rho gh=20000\,\mathrm{Pa}$. With $p_0=100000\,\mathrm{Pa}$, absolute pressure is $120000\,\mathrm{Pa}$. The two answers concern different quantities.

::grafico{f="10*x" xmin=0 xmax=4 ymin=0 ymax=45 nomi="h,Δp" punti="2,20,pieno" legenda="p-p_0=10h" titolo="Depth h in meters and pressure increase Δp in kPa: Δp is the difference from surface pressure"}
:::

:::teorema{#archimede titolo="Buoyant force"}
An immersed body experiences an upward force equal to the weight of displaced fluid, $F_A=\rho_f gV_{\mathrm{imm}}$. For a floating body in equilibrium, with no other vertical forces, $F_A=mg$. If the body has volume $V$ and average density $\rho_c$, then $\dfrac{V_{\mathrm{imm}}}{V}=\dfrac{\rho_c}{\rho_f}$. A body with half the liquid's density floats with half its volume immersed. Buoyancy depends on immersed volume, which need not equal total volume.
:::

:::definizione{#continuita titolo="Volume flow rate and continuity"}
Volume flow rate is $q_v=\dfrac{\Delta V}{\Delta t}=Av$, where $v$ is the average velocity over the cross section. For an incompressible liquid in steady flow through a pipe without leaks or branches, $A_1v_1=A_2v_2$. A narrowing therefore increases average velocity. Laminar flow has ordered layers; turbulent flow has fluctuations and mixing. Continuity expresses conservation of mass and remains distinct from the relations connecting pressure and flow energy. A pressure increase applied to a confined liquid is transmitted throughout it: this is Pascal’s principle. In an ideal press with pistons at the same height, $\dfrac{F_1}{A_1}=\dfrac{F_2}{A_2}$.
:::

## Temperature, heat and gases

:::definizione{#calore titolo="Temperature and energy transfer"}
Temperature describes the thermal state; **heat** is energy transferred because of a temperature difference. Two bodies in contact reach thermal equilibrium when they have the same temperature. Spontaneous transfer is from the hotter body to the colder one. Conduction, convection and radiation are three transfer mechanisms; radiation can also occur in a vacuum.

Absolute temperature is $T=t_C+273.15$, with $T$ in kelvin and $t_C$ in degrees Celsius. An increase of $20\,{}^\circ\mathrm{C}$ corresponds to an increase of $20\,\mathrm{K}$, because the constant cancels in the difference. Ratios of gas temperatures instead require absolute values.
:::

:::teorema{#calorimetria titolo="Specific heat capacity and phase changes"}
Without phase changes, and with approximately constant specific heat capacity $c$, absorbed heat is $Q=mc\Delta T$. Specific heat capacity gives the energy needed to raise the temperature of one kilogram of a substance by one kelvin. For $m=0.5\,\mathrm{kg}$, $c=4000\,\mathrm{J/(kg\,K)}$ and $\Delta T=3\,\mathrm{K}$, this gives $Q=6000\,\mathrm{J}$.

During a phase change in equilibrium at constant pressure, heat is $Q=mL$, where $L$ is the specific latent heat. While water and ice coexist at atmospheric pressure, heat supplied for melting changes the amounts of the two phases while keeping temperature approximately at $0\,{}^\circ\mathrm{C}$. Linear expansion of a solid, for small temperature intervals, is $\Delta\ell=\alpha\ell_0\Delta T$.
:::

:::teorema{#gas-ideali titolo="Ideal-gas equation"}
For an amount $n$ of ideal gas, $pV=nRT$, with absolute pressure and absolute temperature. For a fixed amount of gas, two states satisfy $\dfrac{p_1V_1}{T_1}=\dfrac{p_2V_2}{T_2}$. In an isothermal process, $pV$ is constant; in an isochoric process, $\dfrac pT$ is constant; in an isobaric process, $\dfrac VT$ is constant. These laws therefore depend on which quantity is held constant. A rigid container prevents volume changes, whereas a movable piston may allow them.
:::

## Thermodynamic energy balances

:::teorema{#termodinamica titolo="First law"}
Internal energy $U$ includes the system's microscopic energy. Taking $Q$ as positive when the system absorbs heat and $W$ as positive when it does work on its surroundings, the **first law** is written
$$
\Delta U=Q-W.
$$
Compression receives work from the surroundings and has $W<0$. A gas absorbing $500\,\mathrm{J}$ and doing $200\,\mathrm{J}$ of work therefore increases its internal energy by $300\,\mathrm{J}$. Heat and work describe energy transfers; internal energy instead describes a state property.
:::

:::esempio{titolo="Recognizing processes from constraints"}
In a rigid container, expansion work is zero, so $\Delta U=Q$. In an adiabatic process, heat exchange is zero, so $\Delta U=-W$. During an isothermal expansion of an ideal gas, internal energy stays constant because it depends only on temperature; hence $Q=W$.

In an expansion against constant external pressure, work is $W=p_{\mathrm{est}}\Delta V$. With $p_{\mathrm{est}}=2\cdot10^5\,\mathrm{Pa}$ and a volume increase of $10^{-3}\,\mathrm{m^3}$, the gas does $200\,\mathrm{J}$ of work. On a pressure-volume graph, work corresponds to the area under a quasistatic process. The direction in which the curve is followed distinguishes expansion from compression.
:::

:::definizione{#rendimento titolo="Heat engines and efficiency"}
Over a cycle, the system returns to its initial state, so $\Delta U=0$. An engine absorbs heat $Q_h>0$, releases heat of magnitude $Q_c>0$, and produces work $W=Q_h-Q_c$. Its efficiency is
$$
\eta=\frac W{Q_h}=1-\frac{Q_c}{Q_h}.
$$
With $Q_h=500\,\mathrm{J}$ and $Q_c=350\,\mathrm{J}$, work is $150\,\mathrm{J}$ and efficiency is $30\%$. The denominator is the heat absorbed from the hot reservoir. The second law rules out a cyclic engine converting all the heat taken from a single reservoir into work. A refrigerator transfers heat from cold to hot by using work supplied from outside.
:::

## Oscillations, waves and sound

:::definizione{#onde titolo="Period, frequency and wavelength"}
Period $T$ is the time for one complete oscillation; frequency $f=\dfrac1T$ is the number of oscillations per second, expressed in hertz. Amplitude is the greatest displacement from equilibrium. In harmonic motion $x=A\cos(\omega t+\varphi)$, with angular frequency $\omega=2\pi f$, the initial phase $\varphi$ determines the starting point of the oscillation.

A wave carries energy through a disturbance. Wavelength $\lambda$ is the distance between successive crests, and propagation speed is $v=\lambda f$. In sound traveling through air, particles oscillate mainly along the propagation direction, so the wave is longitudinal. Sound needs a material medium; an electromagnetic wave can propagate through a vacuum. For small oscillations of a simple pendulum of length $\ell$, the period is $T=2\pi\sqrt{\dfrac{\ell}{g}}$. A periodic driving force close to the natural frequency can transfer energy effectively and increase amplitude: this phenomenon is resonance.
:::

:::esempio{titolo="Reading a wave profile"}
The graph shows the profile at a fixed time. Crests repeat every $4\,\mathrm{m}$, so $\lambda=4\,\mathrm{m}$. If a point in the medium oscillates at frequency $3\,\mathrm{Hz}$, the disturbance travels at $12\,\mathrm{m/s}$. The spatial profile alone does not give frequency; temporal information is also needed.

::grafico{f="sin(pi*x/2)" xmin=0 xmax=8 ymin=-1.5 ymax=1.5 nomi="x,y" legenda="y=\sin(\pi x/2)" punti="1,1,pieno;5,1,pieno" titolo="Horizontal coordinates in meters and vertical coordinates in cm: crests are 4 m apart and amplitude is 1 cm"}
:::

:::osservazione
When a wave passes between two stationary media, frequency remains set by the source. If speed changes, wavelength therefore changes. Superposition adds the displacements of the disturbances: two waves in phase reinforce each other, whereas opposite-phase waves can cancel if their amplitudes are equal. Diffraction describes the spreading of propagation near an opening or obstacle, particularly noticeable when its dimensions are comparable to the wavelength.

For a sound source approaching a stationary observer, wavefronts arrive closer together and the perceived frequency increases. This is the Doppler effect. An echo instead requires an outward and return trip; with sound speed $v$ and delay $\Delta t$, the distance to the wall is $\dfrac{v\Delta t}{2}$.
:::

## Reflection, refraction and lenses

:::teorema{#ottica titolo="Reflection and Snell's law"}
In reflection, the reflected angle equals the incident angle; both are measured from the surface normal. A plane mirror forms a virtual image behind its plane, at the same distance as the object in front. The object-image distance is therefore twice the distance to the mirror.

Refractive index is $n=\dfrac cv$, with $c$ the speed of light in vacuum and $v$ its speed in the medium. Between two media, $n_1\sin\theta_1=n_2\sin\theta_2$. On entering a higher-index medium, an oblique ray bends toward the normal. Frequency stays unchanged at the boundary, whereas speed and wavelength change.
:::

:::definizione{#riflessione-totale titolo="Critical angle and dispersion"}
Total internal reflection can occur when passing from higher index $n_1$ to lower index $n_2$. The critical angle satisfies $\sin\theta_c=\dfrac{n_2}{n_1}$; beyond this angle there is no propagating refracted ray. From a medium of index $2$ into air of index $1$, $\theta_c=30^\circ$. Dependence of refractive index on wavelength is called dispersion; therefore a prism can deflect the components of white light differently.
:::

:::teorema{#lenti titolo="Thin lenses"}
For a thin lens, in the paraxial approximation,
$$
\frac1f=\frac1p+\frac1q,\qquad M=-\frac qp.
$$
The conventions are $p>0$ for a real object, $q>0$ for a real image and $f>0$ for a converging lens. A value $q<0$ indicates a virtual image on the object's side. Magnification $M$ compares heights: a negative sign indicates an inverted image.

With $f=10\,\mathrm{cm}$ and $p=30\,\mathrm{cm}$, this gives $\dfrac1q=\dfrac1{10}-\dfrac1{30}=\dfrac1{15}$, so $q=15\,\mathrm{cm}$ and $M=-\dfrac12$. A converging lens with its object between the lens and the focal point instead produces an upright virtual image. A diverging lens has $f<0$ and, for a real object, produces a reduced virtual image.
:::

## Charges, circuits and magnetism

:::teorema{#campo-elettrico titolo="Electric force and potential"}
Two stationary point charges in vacuum interact with force of magnitude $F=k\dfrac{|q_1q_2|}{r^2}$. Like charges repel; opposite charges attract. Electric field is force per unit positive test charge, $\vec E=\dfrac{\vec F}{q}$. For a negative charge, force is opposite to the field. Fields from multiple sources add as vectors.

Conductors contain charges free to move; in insulators their mobility is very limited. Rubbing and contact can transfer electrons while conserving the isolated system’s total charge.

Potential difference satisfies $\Delta U=q\Delta V$. Work done by the electric field is $-\Delta U$. Total charge is conserved in an isolated system. Two identical conducting spheres touching far from other bodies share total charge equally by symmetry. A conductor in electrostatic equilibrium has zero field within its material; a capacitor of capacitance $C$ holds opposite charges of magnitude $Q=C\Delta V$ on its plates.
:::

:::definizione{#circuiti titolo="Current and resistance"}
Average current is $I=\dfrac{\Delta Q}{\Delta t}$. Conventional current points in the direction of positive-charge motion. An ohmic resistor at constant temperature satisfies $V=RI$. Dissipated power is $P=VI=I^2R=\dfrac{V^2}{R}$, and energy over an interval is $P\Delta t$ when power is constant.

In series, all resistors carry the same current and $R_{\mathrm{eq}}=R_1+R_2$. In parallel, they have the same voltage and $\dfrac1{R_{\mathrm{eq}}}=\dfrac1{R_1}+\dfrac1{R_2}$. At junctions, the sum of incoming currents equals the sum of outgoing currents, because charge is conserved. An open switch interrupts current in its own branch; the other parallel branches supplied by an ideal source remain at the same voltage. An ideal voltmeter connects in parallel and has infinite resistance, whereas an ideal ammeter connects in series and has zero resistance. For a source with electromotive force $\mathcal E$ and internal resistance $r$, delivered terminal voltage is $V=\mathcal E-Ir$.
:::

:::definizione{#magnetismo titolo="Magnetic field and Lorentz force"}
A straight wire carrying current generates circular field lines around the wire. A magnet retains two poles even when divided into magnetized pieces. Ferromagnetic materials, such as iron, can become strongly magnetised through alignment of magnetic domains. A moving charge experiences a magnetic force of magnitude $|q|vB\sin\theta$, perpendicular to velocity and field. For velocity parallel to the field, the force is zero. For perpendicular velocity and a uniform field, in the absence of other forces, the motion is uniform circular motion: the magnetic force changes the direction of velocity and does zero work.

A change in magnetic flux linked with a circuit induces an electromotive force. The induced current opposes the change producing it. Electromagnetic waves combine varying electric and magnetic fields and satisfy $c=\lambda f$ in vacuum. In increasing frequency order, the spectrum includes radio waves, microwaves, infrared, visible light, ultraviolet, X-rays and gamma rays; wavelength decreases in that order.
:::
