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

:::esempio{titolo="Range of audible frequencies"}
The human ear perceives sounds from about $20\,\mathrm{Hz}$ to about $20\,000\,\mathrm{Hz}$. In air, with $u=340\,\mathrm{m/s}$, the corresponding wavelengths are
$$
\lambda_{\max}=\frac{340}{20}\,\mathrm m=17\,\mathrm m,\qquad
\lambda_{\min}=\frac{340}{20\,000}\,\mathrm m=0.017\,\mathrm m.
$$
Audible wavelengths therefore range from $1.7\,\mathrm{cm}$ to $17\,\mathrm m$, because at a fixed speed $\lambda$ is inversely proportional to $f$.
:::

:::attenzione
A graph of $\Delta p$ against $x$ gives lengths, not durations. If two maxima are $0.50\,\mathrm m$ apart, that number is a wavelength and is read in meters. The period is obtained from $T=\dfrac{\lambda}{u}=\dfrac{0.50}{340}\,\mathrm s\simeq1.47\,\mathrm{ms}$.
:::

## Pitch, timbre and amplitude

:::definizione{#caratteri-suono titolo="Characteristics of sound"}
The **pitch** of a periodic sound is related to its fundamental frequency $f_1$. A higher frequency corresponds to a higher pitch. **Timbre** depends in part on the harmonic content and on how the vibration begins and decays.

A pure tone contains a single frequency. A complex periodic sound can contain components at frequencies $f_1$, $2f_1$, $3f_1$ and so on. With $f_1=200\,\mathrm{Hz}$, the second and third harmonics occur at $400\,\mathrm{Hz}$ and $600\,\mathrm{Hz}$.
:::

:::esempio{titolo="Same note, different spectra"}
Two instruments have a fundamental frequency of $200\,\mathrm{Hz}$. The fundamental dominates in the first instrument. In the second, the $400\,\mathrm{Hz}$ component has a comparable amplitude. The sounds have the same fundamental and different harmonic content, so their timbres can distinguish them. Raising the note by an octave doubles the fundamental to $400\,\mathrm{Hz}$ and scales the harmonic frequencies by the same factor.
:::

:::esempio{titolo="Waveform with a second harmonic"}
A $200\,\mathrm{Hz}$ tone and a $400\,\mathrm{Hz}$ tone with half the amplitude are added. The period of the sum is $5\,\mathrm{ms}$, the same as that of the fundamental. After $5\,\mathrm{ms}$ the first component has completed one cycle and the second has completed two, so the signal repeats. The pitch remains that of $200\,\mathrm{Hz}$ and the shape of the signal changes, that is, the timbre.

::grafico{f="sin(2*pi*x/5);sin(2*pi*x/5)+0.5*sin(4*pi*x/5)" xmin=0 xmax=10 ymin=-1.9 ymax=1.9 nomi="t,Δp" legenda="f_1;f_1+f_2" titolo="Pressure as a function of $t$ (in ms). The $200\,\mathrm{Hz}$ fundamental alone and with the $400\,\mathrm{Hz}$ second harmonic: the period is $5\,\mathrm{ms}$ in both cases."}
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

:::osservazione{titolo="Same power through different spheres"}
Between two concentric spheres no energy is absorbed, so the power $P$ that passes through the sphere of radius $r$ also passes through the sphere of radius $2r$. The areas are $4\pi r^2$ and $16\pi r^2$, so $I_1=\dfrac{P}{4\pi r^2}$ and $I_2=\dfrac{P}{16\pi r^2}=\dfrac{I_1}{4}$.

::grafico{curve="cos(t),sin(t),0,6.2832;2*cos(t),2*sin(t),0,6.2832" assi=0 uguale=1 xmin=-2.6 xmax=2.6 ymin=-2.4 ymax=2.4 punti="0,0,pieno,S" vettori="0,0,0.71,0.71,r;0,0,-1.41,1.41,2r" unicolore=1 titolo="The spheres of radius $r$ and $2r$ are crossed by the same power $P$. Their areas are $4\pi r^2$ and $16\pi r^2$."}
:::

:::esempio{titolo="Power of a source from one measurement"}
At $10\,\mathrm m$ from an isotropic source, in a free field, a microphone measures $I=2.0\cdot10^{-6}\,\mathrm{W/m^2}$. The sphere of radius $10\,\mathrm m$ has area $4\pi\cdot10^2\,\mathrm{m^2}$, so
$$
P=I\cdot4\pi r^2=2.0\cdot10^{-6}\cdot4\pi\cdot10^2\,\mathrm W\simeq2.5\cdot10^{-3}\,\mathrm W.
$$
The source emits about $2.5\,\mathrm{mW}$.
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
The difference of the two logarithms is the logarithm of their quotient. Since $\dfrac{\frac{I_2}{I_0}}{\frac{I_1}{I_0}}=\dfrac{I_2}{I_1}$, the result depends only on the intensity ratio.
:::
::::

:::esempio{titolo="Extreme levels of the scale"}
If $I=I_0$ the ratio is $1$ and $\beta=10\log_{10}1=0\,\mathrm{dB}$, so the zero level corresponds to the reference intensity. If $I=1\,\mathrm{W/m^2}$ the ratio is $\dfrac{1}{10^{-12}}=10^{12}$ and $\beta=10\cdot12\,\mathrm{dB}=120\,\mathrm{dB}$. A range of twelve orders of magnitude in intensity therefore occupies $120$ units on the decibel scale.
:::

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

:::attenzione
Decibel levels do not add. Two independent sources that each produce $60\,\mathrm{dB}$ have total intensity $2I$, so the level is $60\,\mathrm{dB}+10\log_{10}2\,\mathrm{dB}\simeq63.0\,\mathrm{dB}$, not $120\,\mathrm{dB}$.
:::

:::richiamo{titolo="Logarithm of a product"}
For $a>0$ and $b>0$ we have $\log_{10}(ab)=\log_{10}a+\log_{10}b$.
:::

::::teorema{#sorgenti-uguali titolo="Level of N identical sources"}
Let there be $N$ independent sources, each of which alone produces the level $\beta_1$ at the point considered. The overall level is
$$
\beta_N=\beta_1+10\log_{10}N\,\mathrm{dB}.
$$
With $N=10$ the level increases by $10\,\mathrm{dB}$, with $N=100$ by $20\,\mathrm{dB}$. Ten people each speaking at $60\,\mathrm{dB}$ therefore produce $70\,\mathrm{dB}$.

:::dimostrazione
The sources are independent, so the average intensities add and $I_N=N I_1$. The overall level is then $\beta_N=10\log_{10}\dfrac{N I_1}{I_0}$. Applying the logarithm of a product with $a=N$ and $b=\dfrac{I_1}{I_0}$, both positive, we obtain
$$
\beta_N=10\log_{10}N+10\log_{10}\frac{I_1}{I_0}=\beta_1+10\log_{10}N.
$$
:::
::::

::::teorema{#livello-distanza titolo="Level at a different distance from the source"}
For an isotropic point source in a free field, if the level at distance $r_1$ is $\beta_1$, the level at distance $r_2$ is
$$
\beta_2=\beta_1-20\log_{10}\frac{r_2}{r_1}\,\mathrm{dB}.
$$
Each doubling of the distance lowers the level by $20\log_{10}2\simeq6.02\,\mathrm{dB}$. The formula allows us to predict the level at any distance when it is known at a given distance.

:::dimostrazione
From the intensity formula, $\dfrac{I_2}{I_1}=\dfrac{\frac{P}{4\pi r_2^2}}{\frac{P}{4\pi r_1^2}}=\left(\dfrac{r_1}{r_2}\right)^2$. The difference between the levels is therefore $\beta_2-\beta_1=10\log_{10}\left(\dfrac{r_1}{r_2}\right)^2\,\mathrm{dB}$. The logarithm of a power is the exponent times the logarithm of the base, so $\beta_2-\beta_1=20\log_{10}\dfrac{r_1}{r_2}\,\mathrm{dB}$. Since $\log_{10}\dfrac{r_1}{r_2}=-\log_{10}\dfrac{r_2}{r_1}$, we obtain the formula.
:::
::::

:::esempio{titolo="Level at increasing distances"}
A microphone $1\,\mathrm m$ from a point source measures $90\,\mathrm{dB}$. At $8\,\mathrm m$ the level is
$$
\beta_8=90\,\mathrm{dB}-20\log_{10}8\,\mathrm{dB}\simeq(90-18.06)\,\mathrm{dB}\simeq71.9\,\mathrm{dB}.
$$
The same calculation gives $83.98\,\mathrm{dB}$ at $2\,\mathrm m$ and $77.96\,\mathrm{dB}$ at $4\,\mathrm m$.

::grafico{f="90-20*log(x)/log(10)" xmin=0.8 xmax=9 ymin=65 ymax=95 nomi="r,β" punti="1,90,pieno;2,83.98,pieno;4,77.96,pieno;8,71.94,pieno" legenda="\beta(r)" titolo="Level $\beta$ (in dB) at distance $r$ (in m) from a point source that gives $90\,\mathrm{dB}$ at $1\,\mathrm m$. Each doubling of the distance removes about $6\,\mathrm{dB}$."}
:::

## Echoes and beats

:::teorema{#eco titolo="Round-trip time"}
In an echo measurement with the source and receiver at the same point, the pulse travels the distance $d$ to the wall twice. If the sound speed is constant,
$$
\Delta t=\frac{2d}{u},\qquad d=\frac{u\Delta t}{2}.
$$
With $\Delta t=0.40\,\mathrm s$ and $u=340\,\mathrm{m/s}$ the whole path is $136\,\mathrm m$, so the wall is $68\,\mathrm m$ away. If two microphones on the same ray from the source record the same direct wavefront, their arrival-time difference corresponds to one-way travel.
:::

:::osservazione{titolo="When an echo is distinct"}
The human ear perceives two short sounds as separate if they arrive at least about $0.1\,\mathrm s$ apart. With $u=340\,\mathrm{m/s}$, the echo is therefore distinct from the direct sound if $\Delta t=\dfrac{2d}{u}\ge0.1\,\mathrm s$, that is, if $d\ge\dfrac{340\cdot0.1}{2}\,\mathrm m=17\,\mathrm m$. For a closer wall the reflected sound adds to the direct sound and is perceived as a prolongation.
:::

:::esempio{titolo="Position of the pulse over time"}
A wall is $68\,\mathrm m$ away and the pulse leaves $x=0$ at time $t=0$. Up to the wall the position increases with speed $340\,\mathrm{m/s}$, so it reaches the wall after $\dfrac{68}{340}\,\mathrm s=0.20\,\mathrm s$. After the reflection the position decreases at the same rate and returns to $x=0$ after another $0.20\,\mathrm s$, that is, at $\Delta t=0.40\,\mathrm s$.

::grafico{f="68-abs(68-340*x)" xmin=0 xmax=0.4 ymin=-10 ymax=90 nomi="t,x" asintoti="y=68" punti="0.2,68,pieno,P;0.4,0,pieno" segmenti="0.2,0,0.2,68" legenda="x(t)" titolo="Position $x$ (in m) of the pulse at time $t$ (in s). The wall $P$ is at $68\,\mathrm m$ and the pulse returns to $x=0$ at $t=0.40\,\mathrm s$."}
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

:::richiamo{titolo="Sum-to-product formula for the cosine"}
For every pair of angles $\alpha$ and $\beta$ we have $\cos\alpha+\cos\beta=2\cos\dfrac{\alpha-\beta}{2}\cos\dfrac{\alpha+\beta}{2}$.
:::

::::teorema{#inviluppo-battimenti titolo="Envelope of two close tones"}
Two tones of equal amplitude $A$ and frequencies $f_1$ and $f_2$ give, at a fixed point, the pressure
$$
\Delta p(t)=A\cos(2\pi f_1t)+A\cos(2\pi f_2t)=2A\cos\bigl(\pi(f_1-f_2)t\bigr)\cos\bigl(\pi(f_1+f_2)t\bigr).
$$
The second cosine oscillates at the mean frequency $\dfrac{f_1+f_2}{2}$ and the factor $2A\left|\cos\bigl(\pi(f_1-f_2)t\bigr)\right|$ is its amplitude, which has $|f_1-f_2|$ maxima per second. With $f_1=440\,\mathrm{Hz}$ and $f_2=444\,\mathrm{Hz}$ the amplitude is $2A|\cos(4\pi t)|$, zero at $t=\dfrac18\,\mathrm s$ and maximum every $\dfrac14\,\mathrm s$.

:::dimostrazione
The sum-to-product formula is applied with $\alpha=2\pi f_1t$ and $\beta=2\pi f_2t$, which gives the stated equality. Since $|f_1-f_2|$ is small compared with $\dfrac{f_1+f_2}{2}$, the first factor varies slowly compared with the second and determines its amplitude. The argument $\pi|f_1-f_2|t$ increases by $\pi$ when $t$ increases by $\dfrac{1}{|f_1-f_2|}$, and the absolute value of the cosine has period $\pi$ in its argument. The amplitude therefore repeats with period $\dfrac{1}{|f_1-f_2|}$, that is, the rate of the maxima is $|f_1-f_2|$.
:::
::::

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

:::esempio{titolo="Pipe length for a given note"}
A pipe open at both ends must have fundamental frequency $440\,\mathrm{Hz}$. The formula with $n=1$ gives $L=\dfrac{u}{2f_1}=\dfrac{340}{2\cdot440}\,\mathrm m\simeq0.386\,\mathrm m$. With one end closed, instead, $L=\dfrac{u}{4f_1}=\dfrac{340}{4\cdot440}\,\mathrm m\simeq0.193\,\mathrm m$, that is, half as much.
:::

:::attenzione
In a closed pipe the frequency $2f_1$ is not a natural frequency. With $f_1=100\,\mathrm{Hz}$ the resonances are $100\,\mathrm{Hz}$, $300\,\mathrm{Hz}$, $500\,\mathrm{Hz}$, and a tone at $200\,\mathrm{Hz}$ falls between the first two without satisfying the condition $L=\dfrac{(2n-1)\lambda}{4}$.
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

:::osservazione{titolo="Wavefronts ahead of and behind the source"}
In one period $T$ each wavefront advances $uT$ and the source advances $v_sT$. With $v_s=\dfrac{u}{4}$ the spacing between consecutive fronts is $\left(u-\dfrac{u}{4}\right)T=\dfrac{3}{4}uT$ ahead of the source and $\left(u+\dfrac{u}{4}\right)T=\dfrac{5}{4}uT$ behind it. A stationary observer ahead receives the more closely spaced fronts, so at a frequency higher than $f$. Behind the source the observer receives them more widely spaced, so at a lower frequency.

::grafico{curve="3.6*cos(t),3.6*sin(t),0,3.1416;0.3+2.4*cos(t),2.4*sin(t),0,3.1416;0.6+1.2*cos(t),1.2*sin(t),0,3.1416" assi=0 uguale=1 xmin=-3.8 xmax=3.8 ymin=-0.8 ymax=3.8 punti="0.9,0,pieno" vettori="0.9,0,1.7,0" etichette="0.72,-0.5,S;0.2,0.4,v = u/4" unicolore=1 titolo="Wavefronts emitted at intervals $T$ by a source $S$ moving to the right with $v_s=\dfrac{u}{4}$ (upper half-plane). Ahead the fronts are $\dfrac{3}{4}uT$ apart, behind $\dfrac{5}{4}uT$."}
:::

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

:::esempio{titolo="Observer moving away"}
A stationary source emits $1000\,\mathrm{Hz}$ and an observer moves away at $15\,\mathrm{m/s}$, so $v_o=-15\,\mathrm{m/s}$ and $v_s=0$. The wavelength is $\lambda=\dfrac{340}{1000}\,\mathrm m=0.34\,\mathrm m$ and the wavefronts reach the observer with relative speed $340-15=325\,\mathrm{m/s}$. The observer receives $\dfrac{325}{0.34}\simeq956$ per second, a value that coincides with
$$
f'=1000\,\frac{340-15}{340}\,\mathrm{Hz}\simeq955.9\,\mathrm{Hz}.
$$
:::

:::attenzione
The motion of the source changes the received wavelength, while the speed of the wavefronts in air remains $u$. With $f=600\,\mathrm{Hz}$ and $v_s=\dfrac{u}{4}$ we have $\lambda=0.567\,\mathrm m$ and $\lambda'=\dfrac{3}{4}\lambda=0.425\,\mathrm m$, so $f'=\dfrac{u}{\lambda'}=800\,\mathrm{Hz}$. The product $f'\lambda'=340\,\mathrm{m/s}$ is still $u$.
:::

## Comparing measurements

:::osservazione{#misure titolo="What to measure"}
For an echo, compare the times when a pulse is emitted and received. For beats, measure the interval between two envelope maxima. For resonance, vary the driving frequency and find the frequencies at which the pipe responds with a larger amplitude. For the Doppler effect, compare the emitted and received frequencies while at least one object is moving relative to the air.
:::

:::esempio{titolo="Microphone distance and microphone motion"}
A fixed $500\,\mathrm{Hz}$ tone in air with $u=340\,\mathrm{m/s}$ has a wavelength of $0.68\,\mathrm m$. With two stationary microphones at different distances from the isotropic loudspeaker, the farther microphone receives the signal later and measures a lower intensity, but records the same frequency. A microphone moving toward the loudspeaker crosses more fronts per second than a stationary one and measures a higher frequency.
:::
