---
titolo: "Mechanical waves and acoustics"
sommario: "From oscillation to propagation: phase, interference, energy, intensity and decibels, sound speed, echoes and the Doppler effect."
---

## From an oscillator to a wave source

:::osservazione{titolo="Local motion and propagation"}
A vibrating tip on a string first moves a small segment and then neighbouring segments. To understand the process, separate two questions: how each point moves and how the disturbance passes from one point to another. Harmonic motion describes the first aspect; wave speed describes the second. These two speeds generally differ.
:::

:::definizione{#armonico titolo="Period, frequency and harmonic motion"}
Periodic motion returns to the same state after one **period** $T$. Returning to the same position is insufficient: an oscillator can pass through it in opposite directions. **Frequency** $f=\dfrac1T$ counts complete cycles per second and is measured in hertz, $1\,\mathrm{Hz}=1\,\mathrm{s^{-1}}$. Angular frequency $\omega=2\pi f$ instead measures the rate of phase advance in radians per second.

For harmonic motion along an axis,
$$
x(t)=A\cos(\omega t+\varphi),\qquad
v_x(t)=-A\omega\sin(\omega t+\varphi),
$$
$$
a_x(t)=-\omega^2x(t).
$$
Amplitude $A$ is nonnegative and gives the greatest distance from equilibrium; initial phase $\varphi$ specifies position and direction of motion at $t=0$. A trigonometric function’s argument is an angle: when writing a numerical law, the coefficient of time must have units consistent with angular frequency.

Acceleration is opposite to displacement, whereas velocity does not always have that direction. At the turning points the body momentarily stops, but acceleration magnitude is greatest; at equilibrium acceleration vanishes and speed is greatest. Thus $v_{\max}=A\omega$ and $a_{\max}=A\omega^2$. The graph also distinguishes times when the body returns towards the centre from times when it moves away.

![Normalised position, velocity and acceleration over one period, showing their different phases.](/figure/fisica-semestre-filtro/onde-meccaniche/oscillator-en.svg)
:::

:::teorema{titolo="Mass–spring oscillator"}
For a mass $m$ and an ideal spring with stiffness $K$, the resultant force $-Kx$ gives $m\ddot x=-Kx$ and hence
$$
\omega=\sqrt{\dfrac{K}{m}},\qquad
T=2\pi\sqrt{\dfrac{m}{K}},\qquad
E=\dfrac12KA^2.
$$
Here $K$ denotes spring stiffness, reserving $k$ for wave number. Natural frequency depends on mass and stiffness, whereas energy also depends on amplitude. Doubling $A$ quadruples energy without changing the period in the linear model. This requires negligible friction and deformation within the elastic range: it does not imply that every real oscillator maintains its amplitude indefinitely.

For a vertical spring, measure $x$ from the loaded equilibrium, not the natural length. Weight shifts equilibrium by $\dfrac{mg}{K}$; subtracting the static balance leaves resultant force $-Kx$ for an additional displacement. This explains why the same period formula still applies.
:::

## Propagation and motion of the medium

:::definizione{#onda titolo="What propagates in a mechanical wave"}
A **mechanical wave** transfers a disturbance through interactions between parts of a material medium. A stretched string exerts forces on neighbouring segments; a compressed fluid exerts pressure on adjacent regions. Elasticity and inertia allow the disturbance to continue even after the source has changed position.

In the small-amplitude model, particles oscillate about equilibrium and do not travel with a crest. Propagation transfers energy; it does not require net transport of matter from emitter to receiver. Any mean currents or permanent deformation belong to additional phenomena and do not follow from a simple sinusoid.

In a **transverse** wave, displacement is perpendicular to propagation; in a **longitudinal** wave it is parallel. These words compare two directions, rather than describing the visible shape of a graph. A sound-pressure graph can be sinusoidal while representing a longitudinal wave. In a fluid, compressions and rarefactions travel along the acoustic direction; shear deformation lacks the same restoring force it would have in a solid.

![Comparison between transverse string oscillation and longitudinal displacements of medium particles.](/figure/fisica-semestre-filtro/onde-meccaniche/modes-en.svg)

A vacuum lacks the medium required by sound and other mechanical waves. A pulse, instead of a periodic vibration, produces a localised disturbance: it has duration and shape but need not have a single frequency. The harmonic model is useful both for simple tones and as a component in descriptions of more complex signals.
:::

## Reading space, time and phase

:::teorema{#parametri-onda titolo="Relating speed, wavelength and frequency"}
**Wavelength** $\lambda$ is the spatial period: the distance between successive crests or successive compressions at the same instant. During one period, an identifiable phase advances by one wavelength, so
$$
v=\dfrac{\lambda}{T}=\lambda f.
$$
Speed $v$ refers to the disturbance’s phase in the medium under consideration. For an ideal stretched string,
$$
v=\sqrt{\dfrac{F_T}{\mu_\ell}},
$$
where tension $F_T$ is in newtons and linear density $\mu_\ell$ in kilograms per metre. Greater tension increases the restoring force; greater linear density increases inertia. Their ratio has the dimensions of speed squared. Total string mass cannot replace $\mu_\ell$ unless divided by length.

At a fixed interface, with linear media and a steady periodic source, transmitted frequency remains equal to incident frequency. Changing medium can change $v$ and $\lambda$: wavelength adjusts through $\lambda=\dfrac{v}{f}$. A source doubling its frequency on the same ideal string instead halves $\lambda$ without doubling wave speed.
:::

:::definizione{#equazione-onda titolo="Equation of a travelling wave"}
A harmonic disturbance travelling towards $+x$ can be represented by
$$
y(x,t)=A\cos(kx-\omega t+\varphi),\qquad
k=\dfrac{2\pi}{\lambda},\qquad v=\dfrac{\omega}{k}.
$$
Wave number $k$ measures phase change per unit length. To follow a crest, hold the argument constant: $kx-\omega t+\varphi=C$, hence $x(t)=\dfrac{\omega}{k}t+\text{constant}$. This reasoning, rather than the sign of $y$, determines direction. With $k,\omega>0$, a plus sign between $kx$ and $\omega t$ instead gives negative phase velocity.

A photograph of the medium at fixed $t$ gives a spatial profile from which $A$ and $\lambda$ can be read. A sensor signal at fixed $x$ gives a temporal graph from which $A$ and $T$ can be read. A single photograph does not determine frequency without wave speed or some time information. The slope of a profile $y(x)$ is not particle velocity: that requires a derivative with respect to time at a fixed position.

![Two profiles one quarter-period apart and the time record of a fixed point.](/figure/fisica-semestre-filtro/onde-meccaniche/profiles-en.svg)
:::

:::esempio{titolo="Ultrasound wavelength"}
For example, a homogeneous model with $v=1540\,\mathrm{m/s}$ and $f=2.0\,\mathrm{MHz}$ gives $\lambda=0.77\,\mathrm{mm}$. The medium’s value is given, not universal. A frequency of millions of cycles per second requires converting megahertz before dividing: using the number $2$ directly would produce a wavelength one million times too large.
:::

## Superposition, phase and interference

:::teorema{#interferenza titolo="Adding disturbances in a linear medium"}
In the linear regime, the total disturbance is the algebraic sum of contributions at the same position and time. In a medium that is also nondispersive, two pulses can pass through each other and continue with their original shapes afterwards. Cancellation during overlap does not mean the two pulses have been permanently destroyed.

For two harmonic contributions with the same frequency and a stable phase difference $\Delta\varphi$, the resulting amplitude satisfies
$$
A_R^2=A_1^2+A_2^2+2A_1A_2\cos\Delta\varphi.
$$
In phase, $A_R=A_1+A_2$; in antiphase, $A_R=|A_1-A_2|$. Cancellation therefore also requires equal amplitudes. With a quarter-cycle phase difference and equal amplitudes $A$, the result is $\sqrt2A$: amplitudes cannot always be added as positive numbers.

![Sum of two equal-amplitude sinusoids for three phase differences: zero, pi over two and pi.](/figure/fisica-semestre-filtro/onde-meccaniche/interference-en.svg)

If two sources are initially in phase and their path lengths differ by $\Delta\ell$, the propagation phase difference has magnitude $\dfrac{2\pi\Delta\ell}{\lambda}$. Integer multiples of $\lambda$ give a maximum; odd multiples of $\dfrac{\lambda}{2}$ give a minimum. These conditions must be adjusted when sources already have a phase difference or reflection introduces phase reversals. Equal paths do not guarantee a maximum if emitters vibrate in antiphase.

**Coherence** requires the phase relation to remain sufficiently stable over the observation. For incoherent sources the cross term averages to zero: under appropriate conditions, mean intensities add. Coherent sources require adding disturbances first. Comparisons of local intensities assume travelling contributions in the same direction and medium; the net intensity of a standing field cannot automatically be obtained by squaring local displacement.
:::

:::osservazione{titolo="Nodes of a standing wave"}
Two equal waves travelling in opposite directions can form a standing wave, $y=2A\cos(kx)\cos(\omega t)$. Its nodes remain fixed and are $\dfrac{\lambda}{2}$ apart: the pattern oscillates without translating. This comparison helps distinguish actual propagation from a merely sinusoidal time dependence. It applies superposition rather than introducing a new kind of particle motion.
:::

## Energy, power and spatial distribution

:::definizione{#intensita titolo="From energy transfer to intensity"}
A medium particle gains kinetic energy and the deformed medium stores potential energy. Interactions with neighbours transfer energy through a section. If $\Delta E$ crosses it in $\Delta t$, mean power is $P=\dfrac{\Delta E}{\Delta t}$. For uniform flow across area $S$ perpendicular to propagation,
$$
I=\dfrac{P}{S}.
$$
Intensity is measured in $\mathrm{W/m^2}$, power in watts and energy in joules. Specifying area is essential: the same power concentrated over a smaller section produces greater intensity. An inclined surface requires its area projected perpendicular to the flow; a nonuniform beam requires integrating intensity over area.

For a transverse sinusoid on an ideal string,
$$
P_{\mathrm m}=\dfrac12\mu_\ell v\omega^2A^2.
$$
The factor $\dfrac{1}{2}$ comes from the time average of a squared sinusoidal function. At fixed medium and frequency, power is proportional to $A^2$; at fixed medium and displacement amplitude, it is proportional to $f^2$. Amplitude ratios alone are insufficient if frequency or medium also changes. The string formula gives power: it should not be called intensity without an area appropriate to the problem.
:::

:::teorema{#inverso-quadrato titolo="Spherical propagation without absorption"}
An isotropic point source distributes power equally in all directions. In steady operation, without absorption, obstacles or other sources, the same power crosses concentric spheres:
$$
I(r)=\dfrac{P}{4\pi r^2},\qquad
\dfrac{I_2}{I_1}=\left(\dfrac{r_1}{r_2}\right)^2.
$$
Doubling $r$ quadruples area and reduces intensity to one quarter. Total power has not decreased: the surface over which it is distributed has changed. In the same medium, pressure amplitude of a travelling component then varies as $\dfrac{1}{r}$, whereas intensity varies as $\dfrac{1}{r^2}$.

![Relative intensity versus relative distance for an ideal spherical source.](/figure/fisica-semestre-filtro/onde-meccaniche/spreading-en.svg)

A collimated beam does not automatically occupy entire spheres; an extended source viewed at close range is not equivalent to a point. A decrease faster than $\dfrac{1}{r^2}$ may involve absorption or geometry, rather than a failure of energy conservation. Absorbed energy can become the medium’s internal energy. Experimental comparisons therefore require stating assumptions before applying the distance law.
:::

## Sound, pressure and echoes

:::definizione{#suono titolo="Acoustic propagation in material media"}
In a fluid, sound consists of small pressure and density variations accompanied by longitudinal particle motion. Acoustic pressure $p'$ is the departure from equilibrium pressure: a rarefaction has $p'<0$ without requiring negative absolute pressure. Compressibility supplies the elastic response and density supplies inertia. For an ideal fluid,
$$
v=\sqrt{\dfrac{B}{\rho}},
$$
where $B$ is the bulk modulus appropriate to the process. Ordinary sound in a gas uses the adiabatic modulus: rapid compressions cannot thermally equilibrate with their surroundings. Density alone does not determine speed because elastic response also changes.

In air near $20\,{}^\circ\mathrm C$, $343\,\mathrm{m/s}$ is often used; soft-tissue models frequently use $1540\,\mathrm{m/s}$. Temperature, composition and the medium’s state matter. Solids can support longitudinal and transverse modes with different speeds: no single value applies to every material and mode.

For a sinusoidal plane travelling wave, longitudinal displacement and pressure differ in spatial phase. If $\xi=A\cos(kx-\omega t)$, compression is related to the displacement gradient:
$$
p'=-B\dfrac{\partial\xi}{\partial x}
=BkA\sin(kx-\omega t).
$$
A region is compressed when neighbouring particles approach one another, not when each particle reaches maximum displacement. Particle velocity $u=\dfrac{\partial\xi}{\partial t}$ is instead in phase with pressure for a wave travelling towards $+x$.

![Normalised displacement and pressure at the same instant: pressure maxima do not coincide with displacement maxima.](/figure/fisica-semestre-filtro/onde-meccaniche/sound-phase-en.svg)

Frequency contributes to perceived pitch; intensity, spectrum and ear response contribute to perceived loudness. Two sounds with equal intensity but different frequencies need not sound equally loud. Conventional boundaries near $20\,\mathrm{Hz}$ and $20\,\mathrm{kHz}$ define the nominal audible range: infrasound and ultrasound are classified by frequency, not intensity.

An echo travels twice the distance to the reflector. For a straight path, homogeneous medium and stationary reflector,
$$
d=\dfrac{v\Delta t}{2}.
$$
Any instrumental delays are subtracted before using time of flight. With $v=1540\,\mathrm{m/s}$ and $\Delta t=40\,\mu\mathrm s$, the result is $d=30.8\,\mathrm{mm}$. The method links a time measurement to distance; using an inappropriate speed produces a proportional error in estimated distance.

![Outward and return paths between transducer and reflector, with two pulses separated in time.](/figure/fisica-semestre-filtro/onde-meccaniche/echo-en.svg)
:::

## Sound levels and a logarithmic scale

:::definizione{#decibel titolo="Sound intensity level"}
To compare intensities spanning many orders of magnitude, use
$$
L_I=10\log_{10}\left(\dfrac{I}{I_0}\right)\,\mathrm{dB},
\qquad I_0=10^{-12}\,\mathrm{W/m^2}.
$$
The logarithm acts on a dimensionless ratio. A level of $0\,\mathrm{dB}$ means $I=I_0$, not absence of sound; negative levels correspond to intensities below the reference. The reference is not a universal hearing threshold for every frequency and person.

![Equal increases in level correspond to equal multiplicative factors in intensity.](/figure/fisica-semestre-filtro/onde-meccaniche/decibels-en.svg)

Let $\ell=\dfrac{L_I}{\mathrm{dB}}$ be the numerical level in decibels. Inverting the formula gives
$$
I=I_0\,10^{\dfrac{\ell}{10}},\qquad
\Delta\ell=10\log_{10}\left(\dfrac{I_2}{I_1}\right).
$$
An increase of $10\,\mathrm{dB}$ multiplies intensity by ten, whereas doubling gives approximately $3.01\,\mathrm{dB}$. For ideal spherical propagation, doubling distance gives $10\log_{10}(\dfrac{1}{4})\simeq-6.02$: the level falls by approximately six decibels.

For incoherent travelling contributions in the same medium and direction, intensities are added first. Two contributions of $60\,\mathrm{dB}$ give approximately $63.01\,\mathrm{dB}$, not $120\,\mathrm{dB}$. If contributions are coherent, equal, in phase and travelling in the same direction in the same medium, doubled amplitude can instead quadruple local intensity and add $6.02\,\mathrm{dB}$ in level. Phase relation and geometry must be specified before choosing how to add them.

For a single plane travelling wave, one can also use $I=\dfrac{p_{\mathrm{rms}}^2}{\rho v}$, with $p_{\mathrm{rms}}=\dfrac{p_{\max}}{\sqrt2}$ for a sinusoid. In the same medium this gives $\Delta\ell=20\log_{10}(\dfrac{p_{\mathrm{rms},2}}{p_{\mathrm{rms},1}})$. The factor twenty comes from squared pressure. It must not be applied directly to an intensity ratio or an arbitrary standing field.
:::

## Doppler effect and the role of the medium

:::osservazione{#doppler titolo="Counting encountered wavefronts"}
The Doppler effect concerns recorded frequency when source or receiver moves relative to the medium. Its explanation starts with the number of fronts encountered per second. For a stationary source, crest spacing in the medium remains $\lambda=\dfrac{v}{f}$. An observer moving towards the source at speed $u$ meets crests at relative speed $v+u$, so
$$
f_{\mathrm{oss}}=f\dfrac{v+u}{v}.
$$
For a receding observer, use $v-u$. These expressions assume a stationary medium, motion along the line joining source and observer, and $u<v$. Propagation speed in the medium has not become $v+u$: the rate at which the receiver crosses wavefronts has changed.

A moving source instead produces crests from different positions. When it approaches a stationary receiver at speed $u_s<v$, it advances by $u_sT$ during one period, leaving ahead of itself
$$
\lambda_{\mathrm{front}}=(v-u_s)T,
\qquad f_{\mathrm{oss}}=f\dfrac{v}{v-u_s}.
$$
Behind the source, spacing is $(v+u_s)T$. Each front still travels at sound speed relative to the medium. Moving source and moving observer are not exactly interchangeable: at the same approach speed their formulas differ, although they agree to first order when speeds are very small compared with $v$.

![Circular fronts emitted at equal time intervals by an advancing source: closer together ahead and further apart behind.](/figure/fisica-semestre-filtro/onde-meccaniche/doppler-en.svg)

Reflection from moving structures combines two stages: the structure receives the wave as a moving observer and returns it as a moving source. For small $\dfrac{u}{v}$ and known geometry, the shift is related to the velocity component along the beam; perpendicular motion does not produce the same effect as longitudinal motion. This is the qualitative basis of ultrasound Doppler. Frequency alone, without medium speed and geometry, does not identify a complete velocity vector.
:::
