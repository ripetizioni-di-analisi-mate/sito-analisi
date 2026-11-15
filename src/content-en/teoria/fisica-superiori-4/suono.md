---
titolo: Sound, resonance and the Doppler effect
sommario: Pressure waves, decibel levels, echoes, beats, pipe resonances and the Doppler effect in a medium.
---

## Sound propagation

:::definizione{#suono titolo="Sound wave"}
**Sound** in air is a longitudinal mechanical wave. As a loudspeaker cone moves forward, it compresses the nearby air. As it moves back, the local pressure falls. The succession of compressions and rarefactions travels through the medium while each air particle oscillates back and forth about its equilibrium position.

The **period** $T$ is the interval between successive pressure maxima measured by the same microphone. The frequency $f$ is the number of cycles per second, so $f=\dfrac{1}{T}$. The **wavelength** $\lambda$ is the distance between two consecutive maxima observed at the same instant. In one period the disturbance travels one wavelength, so
$$
u=\frac{\lambda}{T}=\lambda f.
$$

Sound requires a material medium. Its speed $u$ depends on the medium and its state. In problems, $340\,\mathrm{m/s}$ is often used for air. A tone of frequency $680\,\mathrm{Hz}$ in this medium has $\lambda=\dfrac{340}{680}\,\mathrm m=0.50\,\mathrm m$.
:::

:::esempio{titolo="Reading a pressure profile"}
The graph shows the pressure variation along one direction at a single instant. The marked maxima are at $x=0.125\,\mathrm m$ and $x=0.625\,\mathrm m$, so $\lambda=0.50\,\mathrm m$. This is a spatial graph because the horizontal coordinate is $x$. Finding the period also requires knowing $u$ or recording pressure as a function of time at a fixed point.

::grafico{f="sin(4*pi*x)" xmin=0 xmax=1 ymin=-1.3 ymax=1.4 nomi="x,Δp (Pa)" punti="0.125,1,pieno;0.625,1,pieno" segmenti="0.125,0,0.125,1;0.625,0,0.625,1" legenda="\Delta p(x)" titolo="Instantaneous profile. Two consecutive maxima are $0.50\,\mathrm m$ apart."}
:::

:::osservazione
At a stationary interface, oscillations in the two media have the same frequency set by the source. The relation $\lambda=\dfrac{u}{f}$ means that wavelength changes in the same ratio as $u$. If $u_2=3u_1$, then $\lambda_2=3\lambda_1$. The common frequency ensures that, at the boundary, the compression cycle in the second medium repeats with the period of the first.
:::

## Pitch, timbre and amplitude

:::definizione{#caratteri-suono titolo="Characteristics of sound"}
The **pitch** of a periodic sound is related to its fundamental frequency $f_1$. A higher frequency corresponds to a higher pitch. **Timbre** depends in part on the harmonic content and on how the vibration begins and decays.

A pure tone contains a single frequency. A complex periodic sound can contain components at frequencies $f_1$, $2f_1$, $3f_1$ and so on. With $f_1=200\,\mathrm{Hz}$, the second and third harmonics occur at $400\,\mathrm{Hz}$ and $600\,\mathrm{Hz}$.
:::

:::esempio{titolo="Same note, different spectra"}
Two instruments have a fundamental frequency of $200\,\mathrm{Hz}$. The fundamental dominates in the first instrument. In the second, the $400\,\mathrm{Hz}$ component has a comparable amplitude. The sounds have the same fundamental and different harmonic content, so their timbres can distinguish them. Raising the note by an octave doubles the fundamental to $400\,\mathrm{Hz}$ and scales the harmonic frequencies by the same factor.
:::

:::osservazione
Pressure amplitude is a physical quantity measured in pascals. Perceived loudness also depends on frequency and the response of the ear. A level in decibels measures an intensity ratio relative to a fixed reference.
:::

## Intensity and point sources

:::definizione{#intensita titolo="Power per unit area"}
**Sound intensity** $I$ is the average power passing through a surface perpendicular to the direction of propagation divided by its area. It is measured in $\mathrm{W/m^2}$. For an isotropic point source in a free field with no absorption, the same power $P$ passes through every sphere centered on the source. Since a sphere of radius $r$ has area $4\pi r^2$,
$$
I=\frac{P}{4\pi r^2}.
$$

Intensity is uniform over the sphere because the source is isotropic. Doubling the distance quadruples the area, so the same power is spread over four times the area. The intensity therefore falls to one quarter. In a room, reflections from the walls can alter this dependence on distance.
:::

:::esempio{titolo="Intensity at two distances"}
For $P=1.0\,\mathrm W$ and $r=2.0\,\mathrm m$,
$$
I_2=\frac{1.0}{4\pi\cdot 2.0^2}\,\mathrm{W/m^2}
\simeq 1.99\cdot 10^{-2}\,\mathrm{W/m^2}.
$$
At $4.0\,\mathrm m$ the intensity is $\dfrac{I_2}{4}\simeq 4.97\cdot10^{-3}\,\mathrm{W/m^2}$. The curve shows the ratio to the value at $1\,\mathrm m$, so the marked values are dimensionless.

::grafico{f="1/x^2" xmin=0.85 xmax=5 ymin=0 ymax=1.3 nomi="r,I/I₁" punti="1,1,pieno;2,0.25,pieno;4,0.0625,pieno" legenda="I(r)/I_1" titolo="In a free field, $I_1$ is the intensity at $1\,\mathrm m$. At $2\,\mathrm m$ and $4\,\mathrm m$ it is $\dfrac{I_1}{4}$ and $\dfrac{I_1}{16}$, respectively."}
:::

:::osservazione
For a traveling harmonic wave in the same medium, $I$ is proportional to the square of the pressure amplitude. Doubling the amplitude therefore quadruples the intensity. This relation compares two amplitudes. The law $\dfrac{P}{4\pi r^2}$ describes how intensity changes with distance at fixed power.
:::

## Sound intensity level in decibels

:::definizione{#decibel titolo="Logarithmic intensity scale"}
The **sound intensity level** $\beta$ compares the measured intensity $I$ with the reference intensity $I_0=10^{-12}\,\mathrm{W/m^2}$.
$$
\beta=10\log_{10}\!\left(\frac{I}{I_0}\right)\,\mathrm{dB}.
$$
The ratio inside the logarithm is dimensionless. For $I=10^{-6}\,\mathrm{W/m^2}$, $\dfrac{I}{I_0}=10^6$, so $\beta=60\,\mathrm{dB}$. To recover the intensity, first divide the numerical value of the level in decibels by $10$, then raise $10$ to that power.
$$
I=I_0\,10^{\frac{\beta}{10\,\mathrm{dB}}}.
$$
:::

::::teorema{#confronto-livelli titolo="Difference between levels"}
When subtracting two levels measured against the same $I_0$, the reference cancels.
$$
\beta_2-\beta_1=10\log_{10}\!\left(\frac{I_2}{I_1}\right)\,\mathrm{dB}.
$$
A factor of $10$ in intensity adds $10\,\mathrm{dB}$. A factor of $2$ adds about $3.01\,\mathrm{dB}$. For an ideal point source, doubling the distance gives $\dfrac{I_2}{I_1}=\dfrac14$, so the level falls by about $6.02\,\mathrm{dB}$.

:::dimostrazione
The difference of the two logarithms is the logarithm of their quotient. Since $\dfrac{I_2/I_0}{I_1/I_0}=\dfrac{I_2}{I_1}$, the result depends only on the intensity ratio.
:::
::::

:::esempio{titolo="Two independent sources"}
A microphone measures $50\,\mathrm{dB}$ with the first source on and $60\,\mathrm{dB}$ with the second on. For independent sources, the average intensities add. The $10\,\mathrm{dB}$ difference gives $I_1=\dfrac{I_2}{10}$, so $I_{\mathrm{tot}}=1.1I_2$. Add the contribution of the factor $1.1$ to the higher level to obtain the total level.
$$
\beta_{\mathrm{tot}}=60\,\mathrm{dB}+10\log_{10}(1.1)\,\mathrm{dB}\simeq60.4\,\mathrm{dB}.
$$
The weaker source contributes little because its intensity at the microphone is one tenth of the other one.
:::

:::attenzione
For coherent sources with a fixed phase relationship, the disturbances must be added before calculating the intensity. Two waves of equal amplitude arriving in opposite phase can yield zero intensity at a point. Intensity doubles for two independent contributions of equal average intensity.
:::

## Echoes and beats

:::teorema{#eco titolo="Round-trip time"}
In an echo measurement with the source and receiver at the same point, the pulse travels the distance $d$ to the wall twice. If the sound speed is constant,
$$
\Delta t=\frac{2d}{u},\qquad d=\frac{u\Delta t}{2}.
$$
With $\Delta t=0.40\,\mathrm s$ and $u=340\,\mathrm{m/s}$ the whole path is $136\,\mathrm m$, so the wall is $68\,\mathrm m$ away. If two microphones on the same ray from the source record the same direct wavefront, their arrival-time difference corresponds to one-way travel.
:::

:::definizione{#battimenti titolo="Closely spaced frequencies"}
**Beats** are periodic amplitude maxima and minima produced by two tones of close frequencies and comparable amplitudes. If the frequencies are $f_1$ and $f_2$, the rate of the intensity maxima is
$$
f_b=|f_1-f_2|.
$$
The two oscillations reinforce each other when they are in phase. Since each accumulates $f_i$ cycles per second, the difference in the numbers of cycles changes by $|f_1-f_2|$ each second. Whenever this difference changes by one full cycle, the oscillations are in phase again and a maximum recurs.

With $f_1=440\,\mathrm{Hz}$ and $f_2=444\,\mathrm{Hz}$ there are four maxima per second. Two consecutive maxima are $\dfrac14\,\mathrm s$ apart. The perceived pitch is near the mean frequency, $442\,\mathrm{Hz}$.
:::

:::esempio{titolo="Envelope maxima"}
The graph adds two oscillations at $9\,\mathrm{Hz}$ and $10\,\mathrm{Hz}$. The amplitude is greatest at $t=0$, $1\,\mathrm s$ and $2\,\mathrm s$. The rapid oscillations between maxima correspond to the tone, while the $1\,\mathrm s$ interval between maxima is the beat period.

::grafico{f="cos(18*pi*x)+cos(20*pi*x);2*abs(cos(pi*x));-2*abs(cos(pi*x))" xmin=0 xmax=2 ymin=-2.3 ymax=2.5 nomi="t,Δp (Pa)" legenda="\Delta p(t);+2\lvert\cos(\pi t)\rvert;-2\lvert\cos(\pi t)\rvert" titolo="Successive envelope maxima are $1\,\mathrm s$ apart."}
:::

## Resonance in pipes

:::teorema{#tubi titolo="Open pipes and pipes closed at one end"}
Resonance occurs when the driving frequency is close to one of the natural frequencies of the pipe. Reflections at the two ends produce a standing wave. The points that stay still are **displacement nodes**, and the points of maximum amplitude are **displacement antinodes**.

In an ideal uniform pipe, the end conditions are as follows.

- At a closed end the wall prevents longitudinal air motion, so there is a displacement node and a pressure antinode.
- At an open end the pressure stays close to the outside air pressure, so there is a pressure node and a displacement antinode.

For a pipe of length $L$ open at both ends, the minimum distance between two antinodes is $\dfrac{\lambda}{2}$. Successive modes add further half wavelengths, so $L=\dfrac{n\lambda_n}{2}$ and the frequencies are
$$
f_n=\frac{nu}{2L},\qquad n=1,2,3,\ldots
$$
For a pipe closed at one end and open at the other, the first mode contains a quarter wavelength from the node to the antinode. Each subsequent mode adds a half wavelength. It follows that $L=\dfrac{(2n-1)\lambda_n}{4}$, so
$$
f_n=\frac{(2n-1)u}{4L},\qquad n=1,2,3,\ldots
$$
Here $n$ counts the allowed modes in increasing order. The second mode is the third harmonic because its frequency is three times the fundamental. End corrections and losses are neglected.
:::

:::esempio{titolo="Modes of a 0.85 m pipe"}
With $L=0.85\,\mathrm m$ and $u=340\,\mathrm{m/s}$, the pipe open at both ends has a fundamental frequency of $200\,\mathrm{Hz}$. Closing one end imposes a zero-displacement condition. The fundamental wavelength changes from $\lambda=2L$ to $\lambda=4L$ and the frequency changes from $200\,\mathrm{Hz}$ to $100\,\mathrm{Hz}$. The next mode contains three quarters of a wavelength, so its frequency is $300\,\mathrm{Hz}$.

::grafico{curve="t,cos(pi*t/0.85),0,0.85;t,sin(pi*t/1.7),0,0.85;t,sin(3*pi*t/1.7),0,0.85" xmin=-0.03 xmax=0.92 ymin=-1.35 ymax=1.35 nomi="x,s/sₘₐₓ" segmenti="0.85,-1.13,0.85,1.13" legenda="\text{Open, mode 1};\text{Closed, mode 1};\text{Closed, mode 2}" titolo="Displacement profiles between $x=0$ and $x=0.85\,\mathrm m$. The closed pipe has a node at $x=0$ and an antinode at the open end."}
:::

## Doppler effect

::::teorema{#doppler titolo="Source and observer moving relative to the medium"}
The **Doppler effect** is calculated by comparing the spacing of successive emitted wavefronts with the speed at which they reach the observer. Let $f$ be the emitted frequency, $u$ the speed of sound and $f'$ the received frequency. For motion along the line joining the source and observer, in still air and at subsonic speeds,
$$
f'=f\frac{u+v_o}{u-v_s}.
$$
Take $v_o>0$ if the observer moves toward the source and $v_s>0$ if the source moves toward the observer. Velocities are measured relative to the air. The corresponding component is negative when either moves away.

:::dimostrazione
During one emission period $T=\dfrac1f$, the first wavefront moves $uT$ while the source moves $v_sT$ toward the observer. The next wavefront is emitted farther forward, so the spacing is $\lambda'=(u-v_s)T$. If the observer moves toward the wavefronts, their encounter speed is $u+v_o$. The number of fronts received per second is $\dfrac{u+v_o}{\lambda'}$, which gives the formula.
:::
::::

:::esempio{titolo="Same approach speed"}
With $f=600\,\mathrm{Hz}$ and $u=340\,\mathrm{m/s}$, a source moving at $20\,\mathrm{m/s}$ toward a stationary observer gives
$$
f'=600\frac{340}{340-20}\,\mathrm{Hz}=637.5\,\mathrm{Hz}.
$$
If the source is stationary and the observer has the same approach speed, the wavefront spacing stays at the emitted wavelength. The observer encounters the fronts faster, so
$$
f'=600\frac{340+20}{340}\,\mathrm{Hz}\simeq635.3\,\mathrm{Hz}.
$$
In both cases the received frequency is higher than the emitted frequency. The results differ because source motion changes the wavefront spacing, while observer motion changes how rapidly the observer crosses them.
:::

:::esempio{titolo="Finding speed and direction"}
A source emits at $500\,\mathrm{Hz}$ and a stationary observer receives $450\,\mathrm{Hz}$ in air with $u=340\,\mathrm{m/s}$. Setting $v_o=0$ and solving for $v_s$ gives
$$
v_s=u\left(1-\frac{f}{f'}\right)
=340\left(1-\frac{500}{450}\right)\,\mathrm{m/s}
\simeq-37.8\,\mathrm{m/s}.
$$
The negative sign means the source is moving away. As a check, $u-v_s>u$, so the formula must give $f'<f$.
:::

## Comparing measurements

:::osservazione{#misure titolo="What to measure"}
For an echo, compare the times when a pulse is emitted and received. For beats, measure the interval between two envelope maxima. For resonance, vary the driving frequency and find the frequencies at which the pipe responds with a larger amplitude. For the Doppler effect, compare the emitted and received frequencies while at least one object is moving relative to the air.
:::

:::esempio{titolo="Microphone distance and microphone motion"}
A fixed $500\,\mathrm{Hz}$ tone in air with $u=340\,\mathrm{m/s}$ has a wavelength of $0.68\,\mathrm m$. With two stationary microphones at different distances from the isotropic loudspeaker, the farther microphone receives the signal later and measures a lower intensity, but records the same frequency. A microphone moving toward the loudspeaker crosses more fronts per second than a stationary one and measures a higher frequency.
:::
