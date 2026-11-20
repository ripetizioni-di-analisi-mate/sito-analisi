---
titolo: "Mechanical waves and acoustics"
sommario: "From oscillation to propagation: phase, interference, energy, intensity and decibels, sound speed, echoes and the Doppler effect."
---

## From an oscillator to a wave source

:::osservazione{titolo="Local motion and propagation"}
One end of a stretched string is made to vibrate. The first stretch of string moves up and down and drags the neighbouring stretch, which drags the next. A deformation, called a **wave**, thus advances along the string. There are two distinct motions in the phenomenon. Each point of the string oscillates about its rest position and does not move along the string. The wave, by contrast, advances along the string with its own speed. The chapter first describes the oscillation of a point and then the advance of the wave.
:::

:::definizione{#armonico titolo="Period, frequency and harmonic motion"}
A motion is **periodic** if it repeats identically at regular time intervals. Three quantities describe it.

- The **period** $T$ is the duration of one complete oscillation. It is measured in seconds.
- The **frequency** $f=\dfrac1T$ is the number of oscillations in one second. It is measured in hertz, $1\,\mathrm{Hz}=1\,\mathrm{s^{-1}}$. A heart beating 60 times a minute has $T=1\,\mathrm{s}$ and $f=1\,\mathrm{Hz}$.
- The **angular frequency** $\omega=2\pi f$ is the frequency expressed in radians per second.

The simplest periodic motion is **simple harmonic motion**, in which position varies in time like a cosine. It is the motion of a mass attached to a spring. Position, velocity and acceleration are:
$$
x(t)=A\cos(\omega t+\varphi),\qquad
v_x(t)=-A\omega\sin(\omega t+\varphi),
$$
$$
a_x(t)=-\omega^2x(t).
$$
The **amplitude** $A$ is the maximum distance from the equilibrium position. The **initial phase** $\varphi$ determines where the body is at time $t=0$. The last formula says that the acceleration is proportional to the displacement and opposite in sense, so it always points towards the equilibrium position.

During an oscillation the body passes through two extreme situations.

- At the **extremes** ($x=\pm A$) the body is at rest for an instant. The velocity is zero and the acceleration has its maximum value, $a_{\max}=A\omega^2$.
- At the **equilibrium position** ($x=0$) the velocity has its maximum value, $v_{\max}=A\omega$, and the acceleration is zero.

![Normalised position, velocity and acceleration over one period, showing their different phases.](/figure/fisica-semestre-filtro/onde-meccaniche/oscillator-en.svg)
:::

:::teorema{titolo="Mass–spring oscillator"}
A mass $m$ is attached to a spring of spring constant $K$. The spring exerts the force $-Kx$, so by Newton’s second law $ma=-Kx$, that is, $a=-\dfrac Km x$. Comparing with $a=-\omega^2x$ gives $\omega^2=\dfrac Km$. The motion is therefore harmonic, with:
$$
\omega=\sqrt{\dfrac{K}{m}},\qquad
T=2\pi\sqrt{\dfrac{m}{K}},\qquad
E=\dfrac12KA^2.
$$
The period increases with mass and decreases with the stiffness of the spring. It does not depend on amplitude: a wide oscillation and a small one last the same time. A mass of $0.50\,\mathrm{kg}$ on a spring with $K=200\,\mathrm{N/m}$ has $T=2\pi\sqrt{\dfrac{0.50}{200}}\simeq0.31\,\mathrm{s}$. The energy $E$ of the oscillator, by contrast, depends on the square of the amplitude, so with double the amplitude it is four times larger. In this chapter the spring constant is written with a capital $K$, because lower-case $k$ later denotes the wavenumber. The model neglects friction, which in a real oscillator gradually reduces the amplitude.

If the spring is vertical, the weight of the mass stretches it by $\dfrac{mg}{K}$ and shifts the equilibrium position. Oscillations about the new equilibrium position have the same period.
:::

## Propagation and motion of the medium

:::definizione{#onda titolo="What propagates in a mechanical wave"}
A **mechanical wave** is a disturbance that propagates in a material medium, such as a string, water or air. Each part of the medium, displaced from its rest position, displaces the neighbouring part and is pulled back by elastic forces.

A wave carries energy and not matter. The particles of the medium oscillate about their own position and return to it. A cork on a lake, as a wave passes, rises and falls and stays where it is.

Waves are distinguished according to the direction in which the particles oscillate relative to the direction in which the wave advances.

- In a **transverse** wave the particles oscillate perpendicular to the direction of propagation. An example is the wave on a string.
- In a **longitudinal** wave the particles oscillate along the direction of propagation. An example is sound, in which zones where the air is more compressed alternate with zones where it is more rarefied.

Only longitudinal waves propagate in liquids and gases. Both types propagate in solids.

![Comparison between transverse string oscillation and longitudinal displacements of medium particles.](/figure/fisica-semestre-filtro/onde-meccaniche/modes-en.svg)

Mechanical waves need a medium, so sound does not propagate in a vacuum. A short isolated disturbance, such as a flick given to the string, is called a **pulse**. A disturbance that repeats regularly is a periodic wave, and the simplest is the harmonic wave, in which each point of the medium performs simple harmonic motion.
:::

## Reading space, time and phase

:::teorema{#parametri-onda titolo="Relating speed, wavelength and frequency"}
A periodic wave repeats in time and also in space. The **wavelength** $\lambda$ is the distance between two consecutive crests, that is, between two consecutive points of the medium in the same condition. In one period $T$ each point completes one oscillation and the wave advances by one wavelength. The speed of the wave is therefore:
$$
v=\dfrac{\lambda}{T}=\lambda f.
$$
The speed $v$ depends only on the medium. On a stretched string it is:
$$
v=\sqrt{\dfrac{F_T}{\mu_\ell}},
$$
In the formula $F_T$ is the tension of the string, in newtons, and $\mu_\ell$ is its mass per unit length, in $\mathrm{kg/m}$, obtained by dividing the mass of the string by its length. The wave is faster on a tighter string and slower on a heavier one. On a string with $F_T=100\,\mathrm{N}$ and $\mu_\ell=0.010\,\mathrm{kg/m}$ the speed is $\sqrt{\dfrac{100}{0.010}}=100\,\mathrm{m/s}$.

The three quantities depend on different things. Frequency is set by the source. Speed is set by the medium. Wavelength follows from the other two, $\lambda=\dfrac vf$. Two rules follow.

- If the source doubles the frequency, in the same medium the speed stays the same and the wavelength halves.
- If the wave passes from one medium to another, the frequency stays the same. The speed changes and, in the same proportion, so does the wavelength.
:::

:::definizione{#equazione-onda titolo="Equation of a travelling wave"}
A harmonic wave advancing in the positive sense of the $x$ axis is described by a function of position $x$ and time $t$, which gives the displacement $y$ of each point of the medium at each instant:
$$
y(x,t)=A\cos(kx-\omega t+\varphi),\qquad
k=\dfrac{2\pi}{\lambda},\qquad v=\dfrac{\omega}{k}.
$$
The **wavenumber** $k$ is for space what the angular frequency $\omega$ is for time. The argument of the cosine, $kx-\omega t+\varphi$, is called the **phase**. The sign between $kx$ and $\omega t$ indicates the direction of propagation. With the minus sign the wave advances towards positive $x$, because as $t$ increases the same phase is found at a point with larger $x$. With the plus sign the wave advances towards negative $x$.

The function is read in two ways.

- Fixing the instant $t$ gives a snapshot of the wave, that is, the displacement as a function of position. Amplitude and wavelength are read from it.
- Fixing the position $x$ gives the motion of a single point over time. Amplitude and period are read from it.

Frequency cannot be obtained from the snapshot alone. The speed of the wave is also needed, and then $f=\dfrac{v}{\lambda}$.

![Two profiles one quarter-period apart and the time record of a fixed point.](/figure/fisica-semestre-filtro/onde-meccaniche/profiles-en.svg)
:::

:::esempio{titolo="Ultrasound wavelength"}
Ultrasound scanning uses ultrasound of frequency $f=2.0\,\mathrm{MHz}$. In soft tissue sound travels at about $v=1540\,\mathrm{m/s}$. The frequency is converted, $2.0\,\mathrm{MHz}=2.0\cdot10^6\,\mathrm{Hz}$, and one calculates $\lambda=\dfrac{v}{f}=\dfrac{1540}{2.0\cdot10^6}=7.7\cdot10^{-4}\,\mathrm{m}=0.77\,\mathrm{mm}$. The wavelength indicates the size of the smallest details the image can distinguish. For this reason a higher frequency gives a more detailed image.
:::

## Superposition, phase and interference

:::teorema{#interferenza titolo="Adding disturbances in a linear medium"}
When two waves meet at the same point, the resulting displacement is the sum of the two displacements. This is the **superposition principle**. After meeting, each wave continues unchanged, as if the other had not been there. The effect of the sum is called **interference**.

For two harmonic waves of the same frequency the result depends on the **phase difference** $\Delta\varphi$, that is, on how far one wave is shifted relative to the other. The resulting amplitude $A_R$ is given by:
$$
A_R^2=A_1^2+A_2^2+2A_1A_2\cos\Delta\varphi.
$$
The two extreme cases are as follows.

- **Constructive interference.** The waves are in phase ($\Delta\varphi=0$): the crests of one coincide with the crests of the other. The amplitudes add, $A_R=A_1+A_2$.
- **Destructive interference.** The waves are in antiphase ($\Delta\varphi=\pi$): the crests of one coincide with the troughs of the other. The amplitudes subtract, $A_R=|A_1-A_2|$. If the two amplitudes are equal the result is zero.

For intermediate values the formula is used. With equal amplitudes $A$ and $\Delta\varphi=\dfrac{\pi}{2}$ the cosine is zero and $A_R=\sqrt{A^2+A^2}=\sqrt2\,A$.

![Sum of two equal-amplitude sinusoids for three phase differences: zero, pi over two and pi.](/figure/fisica-semestre-filtro/onde-meccaniche/interference-en.svg)

The phase difference often arises from a path difference. Two identical sources, vibrating in phase, emit waves that reach a point after travelling different distances. If $\Delta\ell$ is the difference between the two distances, two rules hold.

- If $\Delta\ell$ is a whole multiple of the wavelength ($0$, $\lambda$, $2\lambda$, …) the waves arrive in phase and interference is constructive.
- If $\Delta\ell$ is an odd multiple of half a wavelength ($\dfrac{\lambda}{2}$, $\dfrac{3\lambda}{2}$, …) the waves arrive in antiphase and interference is destructive.

Interference is observed only if the two sources are **coherent**, that is, if their phase difference stays constant over time. Two independent sources, such as two people talking, are not coherent. In that case the intensities of the two waves add and not the amplitudes.
:::

:::osservazione{titolo="Nodes of a standing wave"}
Two identical waves travelling in opposite directions, such as a wave on a string and its reflection at the fixed end, superpose and form a **standing wave**, $y=2A\cos(kx)\cos(\omega t)$. In a standing wave the shape does not advance. Some points, called **nodes**, always stay at rest. Halfway between two nodes are the points oscillating with maximum amplitude, called **antinodes**. Two consecutive nodes are half a wavelength apart. This is what happens in the strings of a guitar.
:::

## Energy, power and spatial distribution

:::definizione{#intensita titolo="From energy transfer to intensity"}
A wave carries energy. The **power** $P$ of the wave is the energy crossing a surface in one second, $P=\dfrac{\Delta E}{\Delta t}$, and is measured in watts. The **intensity** $I$ is the power crossing a surface perpendicular to the direction of propagation, divided by the area $S$ of the surface:
$$
I=\dfrac{P}{S}.
$$
Intensity is measured in $\mathrm{W/m^2}$. The same power concentrated on a smaller area gives a larger intensity. An ultrasound beam of power $0.10\,\mathrm{W}$ over an area of $2.0\,\mathrm{cm^2}=2.0\cdot10^{-4}\,\mathrm{m^2}$ has intensity $\dfrac{0.10}{2.0\cdot10^{-4}}=500\,\mathrm{W/m^2}$.

For a harmonic wave on a string the mean power is:
$$
P_{\mathrm m}=\dfrac12\mu_\ell v\omega^2A^2.
$$
The important result is that power, and therefore intensity, is proportional to the square of the amplitude. This holds for all waves. A wave with double the amplitude carries four times as much energy. For equal amplitude the power is also proportional to the square of the frequency.
:::

:::teorema{#inverso-quadrato titolo="Spherical propagation without absorption"}
A small source emitting equally in all directions produces a spherical wave. At distance $r$ from the source the power $P$ is spread over a sphere of area $4\pi r^2$. If the medium absorbs no energy, the intensity is:
$$
I(r)=\dfrac{P}{4\pi r^2},\qquad
\dfrac{I_2}{I_1}=\left(\dfrac{r_1}{r_2}\right)^2.
$$
This is the **inverse-square law**. At double the distance the area of the sphere is four times larger, so the intensity is one quarter. At three times the distance it is one ninth. The total power is the same: it is spread over a larger surface. Since intensity is proportional to the square of the amplitude, the amplitude decreases as $\dfrac1r$.

![Relative intensity versus relative distance for an ideal spherical source.](/figure/fisica-semestre-filtro/onde-meccaniche/spreading-en.svg)

The law holds for a source small compared with the distance, emitting in all directions, in a medium that does not absorb. A narrow beam, such as that of an ultrasound probe, does not spread over a sphere, so its intensity decreases more slowly with distance. In an absorbing medium, such as tissue, intensity decreases faster, and the absorbed energy heats the medium.
:::

## Sound, pressure and echoes

:::definizione{#suono titolo="Acoustic propagation in material media"}
**Sound** is a longitudinal wave propagating in a gas, a liquid or a solid. In air it is a succession of zones where pressure is slightly above normal (compressions) and zones where it is slightly below (rarefactions). The difference between the pressure at a point and normal pressure is called the **acoustic pressure** $p'$. It is positive in compressions and negative in rarefactions, and is tiny compared with atmospheric pressure. The speed of sound in a fluid is:
$$
v=\sqrt{\dfrac{B}{\rho}},
$$
In the formula $\rho$ is the density and $B$ is the **bulk modulus**, which measures how much the medium resists compression. Sound is faster in media that are hard to compress. For this reason it is faster in liquids and solids than in gases, even though they are denser.

| Medium | Speed of sound |
| --- | --- |
| Air at $20\,^\circ\mathrm{C}$ | $343\,\mathrm{m/s}$ |
| Water | about $1480\,\mathrm{m/s}$ |
| Soft tissue | about $1540\,\mathrm{m/s}$ |

In air the speed increases with temperature.

In a sound wave each air particle oscillates back and forth along the direction of propagation. If the displacement of the particles is $\xi=A\cos(kx-\omega t)$, the acoustic pressure is:
$$
p'=-B\dfrac{\partial\xi}{\partial x}
=BkA\sin(kx-\omega t).
$$
The displacement is a cosine and the pressure is a sine, so the two are shifted by a quarter of a wavelength. Pressure is greatest at the points where displacement is zero. The reason is that the air is compressed where the particles on either side have moved closer, and at that point the central particle has not moved.

![Normalised displacement and pressure at the same instant: pressure maxima do not coincide with displacement maxima.](/figure/fisica-semestre-filtro/onde-meccaniche/sound-phase-en.svg)

The physical characteristics of sound correspond to what is perceived.

- **Frequency** determines the pitch of the sound. A high-frequency sound is high-pitched, a low-frequency one is low-pitched.
- **Intensity** determines loudness. The sensation also depends on frequency, because the ear is most sensitive between 1000 and 4000 Hz.

The human ear perceives sounds of frequency between about $20\,\mathrm{Hz}$ and $20\,\mathrm{kHz}$. Below $20\,\mathrm{Hz}$ one speaks of **infrasound** and above $20\,\mathrm{kHz}$ of **ultrasound**.

An **echo** is a sound that returns to the source after being reflected by an obstacle. The sound travels the distance $d$ between source and obstacle twice, out and back, so $2d=v\,\Delta t$, where $\Delta t$ is the time between emission and return:
$$
d=\dfrac{v\Delta t}{2}.
$$
Ultrasound scanning works this way. The probe emits a pulse of ultrasound and measures how long the echo of each structure takes to return. With $v=1540\,\mathrm{m/s}$, an echo returning after $\Delta t=40\,\mu\mathrm{s}=40\cdot10^{-6}\,\mathrm{s}$ comes from a depth $d=\dfrac{1540\cdot40\cdot10^{-6}}{2}=0.0308\,\mathrm{m}=30.8\,\mathrm{mm}$.

![Outward and return paths between transducer and reflector, with two pulses separated in time.](/figure/fisica-semestre-filtro/onde-meccaniche/echo-en.svg)
:::

## Sound levels and a logarithmic scale

:::definizione{#decibel titolo="Sound intensity level"}
The ear perceives very different intensities. The faintest audible sound has an intensity of about $10^{-12}\,\mathrm{W/m^2}$ and the one causing pain about $1\,\mathrm{W/m^2}$, a million million times larger. To express such different values with convenient numbers a logarithmic scale is used, the **sound intensity level** $L_I$, measured in **decibels** (dB):
$$
L_I=10\log_{10}\left(\dfrac{I}{I_0}\right)\,\mathrm{dB},
\qquad I_0=10^{-12}\,\mathrm{W/m^2}.
$$
The reference intensity $I_0$ is that of the faintest audible sound. A sound with $I=I_0$ has level $10\log_{10}1=0\,\mathrm{dB}$, so $0\,\mathrm{dB}$ does not mean absence of sound. A sound with $I=10^{-6}\,\mathrm{W/m^2}$, such as a conversation, has level $10\log_{10}\dfrac{10^{-6}}{10^{-12}}=10\cdot6=60\,\mathrm{dB}$. Pain appears at around $120\,\mathrm{dB}$.

![Equal increases in level correspond to equal multiplicative factors in intensity.](/figure/fisica-semestre-filtro/onde-meccaniche/decibels-en.svg)

The intensity is obtained from the level with the inverse formula. Writing $\ell$ for the number of decibels:
$$
I=I_0\,10^{\dfrac{\ell}{10}},\qquad
\Delta\ell=10\log_{10}\left(\dfrac{I_2}{I_1}\right).
$$
The second formula gives the difference in level between two sounds. On a logarithmic scale a multiplication of the intensity corresponds to an addition to the level.

- An intensity 10 times larger gives $10\log_{10}10=10\,\mathrm{dB}$ more. An intensity 100 times larger gives $20\,\mathrm{dB}$ more.
- Double the intensity gives $10\log_{10}2\simeq3\,\mathrm{dB}$ more.
- Doubling the distance from a spherical source makes the intensity one quarter, and the level falls by $10\log_{10}4\simeq6\,\mathrm{dB}$.

The levels of two sources do not add. The intensities add. Two instruments each producing $60\,\mathrm{dB}$ give together double the intensity, so a level of $60+3=63\,\mathrm{dB}$, and not $120\,\mathrm{dB}$.

The intensity of a sound wave is proportional to the square of the acoustic pressure, $I=\dfrac{p_{\mathrm{rms}}^2}{\rho v}$, where $p_{\mathrm{rms}}=\dfrac{p_{\max}}{\sqrt2}$ is the effective (root-mean-square) value of the pressure. If two pressures are compared, the factor 20 therefore appears in the level formula in place of 10: $\Delta\ell=20\log_{10}\left(\dfrac{p_{\mathrm{rms},2}}{p_{\mathrm{rms},1}}\right)$. An acoustic pressure 10 times larger corresponds to $20\,\mathrm{dB}$ more.
:::

## Doppler effect and the role of the medium

:::osservazione{#doppler titolo="Counting encountered wavefronts"}
The **Doppler effect** is the change in perceived frequency when the source of the sound and the listener move relative to each other. An ambulance siren sounds higher-pitched while approaching and lower-pitched while receding. The general rule is that the perceived frequency increases when source and observer approach and decreases when they move apart.

Consider first an observer moving with speed $u$ towards a stationary source. The wave crests are $\lambda=\dfrac vf$ apart and travel at speed $v$. The observer moves towards them, so meets them at speed $v+u$ and receives more of them each second:
$$
f_{\mathrm{oss}}=f\dfrac{v+u}{v}.
$$
If the observer moves away, $v-u$ is used and the frequency decreases. The speed of sound in air is always $v$.

Consider next a source moving with speed $u_s$ towards a stationary observer. Between the emission of one crest and the next a period $T$ passes, during which the source advances by $u_sT$. In front of the source the crests are therefore closer together, that is, the wavelength is shorter, and the perceived frequency is higher:
$$
\lambda_{\mathrm{front}}=(v-u_s)T,
\qquad f_{\mathrm{oss}}=f\dfrac{v}{v-u_s}.
$$
Behind the source the crests are further apart, the wavelength is $(v+u_s)T$ and the perceived frequency is $f\dfrac{v}{v+u_s}$. An ambulance with a $1000\,\mathrm{Hz}$ siren approaching at $30\,\mathrm{m/s}$, with $v=343\,\mathrm{m/s}$, is perceived at $1000\cdot\dfrac{343}{343-30}\simeq1096\,\mathrm{Hz}$. After it has passed it is perceived at $1000\cdot\dfrac{343}{343+30}\simeq920\,\mathrm{Hz}$. The formulas for the two cases, moving observer and moving source, are different, and give almost equal results when the speeds are much lower than the speed of sound.

![Circular fronts emitted at equal time intervals by an advancing source: closer together ahead and further apart behind.](/figure/fisica-semestre-filtro/onde-meccaniche/doppler-en.svg)

In medicine the Doppler effect is used to measure blood velocity (**Doppler ultrasound**). The probe sends ultrasound, which is reflected by moving red blood cells and returns to the probe with a different frequency. The effect occurs twice: the cell receives the wave as a moving observer and sends it back as a moving source. From the change in frequency the instrument calculates the blood velocity. Only the component of the velocity along the beam direction is measured, so a vessel perpendicular to the beam gives no change in frequency.
:::
