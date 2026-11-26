---
titolo: Blackbody radiation, the photoelectric effect, and the Compton effect
sommario: How hot objects emit radiation and why Planck introduced energy quanta to explain it, how Einstein used photons to explain the photoelectric effect, and how the Compton effect shows that photons also carry momentum.
---

## Thermal radiation and blackbodies

:::definizione{#radiazione-termica titolo="Thermal radiation"}
Every object at a temperature above absolute zero emits electromagnetic waves produced by the thermal motion of its constituent charges. This emission is called **thermal radiation**. It contains all wavelengths at different intensities, and the emitted power increases with temperature. At room temperature, an object emits almost entirely in the infrared, which the eye cannot see. An iron wire heated above $800\,^\circ\mathrm{C}$ glows red. At higher temperatures it glows yellow and then white because an increasing fraction of the radiation falls within the visible spectrum. For electromagnetic waves, see the chapter on Maxwell’s equations and electromagnetic waves.
:::

:::definizione{#corpo-nero titolo="Blackbody"}
An object that absorbs *all* radiation incident on it, at every wavelength, is called a **blackbody**. A cavity with opaque walls and a small hole provides a good model. Radiation entering the hole reflects many times from the walls, which absorb part of it at each reflection. The probability that it escapes through the hole again is therefore negligible. The hole thus acts as a perfectly absorbing surface.

When the walls are at temperature $T$, thermal radiation from the cavity emerges through the hole. Experiments show that the distribution of this radiation over wavelength depends *only* on temperature, regardless of the material or shape of the cavity. This makes a blackbody the simplest case to study. The Sun, other stars, and a light bulb filament emit radiation that approximates blackbody radiation.

::grafico{assi=0 uguale=1 linee="0,1.3 0,0 4,0 4,3 0,3 0,1.7;0,1.5 2.2,0 4,1.9 1.4,3 0.4,2.2" vettori="-1.6,1.5,-0.1,1.5,light" etichette="-0.45,1.05,hole" xmin=-2 xmax=4.6 ymin=-0.5 ymax=3.5 titolo="Blackbody model. Radiation entering the hole is reflected and partly absorbed each time it strikes a wall. The probability that it escapes through the hole again is negligible"}

:::

:::definizione{#intensita-spettrale titolo="Spectral intensity"}
The power emitted by a blackbody is distributed over a range of wavelengths. The **spectral intensity** $I(\lambda)$ is the power emitted per unit surface area per unit wavelength interval near $\lambda$. Its graph as a function of $\lambda$ is called the blackbody curve. The area under the curve is the total power emitted per unit surface area.

The measured curves all have the same general shape. The intensity is nearly zero at very short wavelengths, rises to a maximum, and then decreases slowly. As the temperature increases, the curve rises at every point and its peak shifts to shorter wavelengths. For example, at $5000\,\mathrm{K}$ the peak lies at $580\,\mathrm{nm}$, in the visible spectrum. At $4000\,\mathrm{K}$ it lies at $725\,\mathrm{nm}$, at the edge of the infrared, and the area under the curve is smaller by a factor of about $2.4$.

::grafico{f="100/(x^5*(exp(2.88/x)-1));100/(x^5*(exp(3.6/x)-1))" punti="0.58,10.7,pieno;0.725,3.51,pieno" segmenti="0.58,0,0.58,10.7;0.725,0,0.725,3.51" xmin=-0.2 xmax=3.2 ymin=-0.5 ymax=12 nomi="λ,I" legenda="T = 5000\,\mathrm{K};T = 4000\,\mathrm{K}" titolo="Blackbody curves at two temperatures, with $\lambda$ in micrometers and $I$ in arbitrary units. At the higher temperature the curve lies higher and peaks at a shorter wavelength"}

:::

## The Stefan–Boltzmann and Wien laws

:::teorema{#legge-stefan-boltzmann titolo="Stefan–Boltzmann law"}
A blackbody of surface area $A$ at absolute temperature $T$ emits power
$$
P = \sigma A T^4 ,
\qquad
\sigma = 5.67 \cdot 10^{-8}\,\mathrm{W/(m^2\cdot K^4)} ,
$$
where $\sigma$ is the **Stefan–Boltzmann constant**. This is an empirical law. The power is proportional to the fourth power of temperature, so doubling the temperature increases the emitted power by a factor of $2^4 = 16$. The law allows us to calculate a star’s power output from its surface temperature.

The Sun has radius $R = 6.96 \cdot 10^{8}\,\mathrm{m}$ and surface temperature $T = 5800\,\mathrm{K}$. Its surface area is $4\pi R^2$, so its emitted power is
$$
P = 5.67 \cdot 10^{-8} \cdot 4\pi \cdot \left( 6.96 \cdot 10^{8} \right)^2 \cdot 5800^4\,\mathrm{W} \approx 3.9 \cdot 10^{26}\,\mathrm{W} .
$$
:::

:::esempio{#potenza-corpo-umano titolo="Radiation emitted by the human body"}
In the infrared the human body emits almost like a blackbody. For a surface area of $1.8\,\mathrm{m^2}$ and a temperature of $310\,\mathrm{K}$, the emitted power is
$$
P = 5.67 \cdot 10^{-8} \cdot 1.8 \cdot 310^4\,\mathrm{W} \approx 9.4 \cdot 10^{2}\,\mathrm{W} .
$$
The body also absorbs radiation from the walls of the room. If the walls are at $293\,\mathrm{K}$, the absorbed power is $5.67 \cdot 10^{-8} \cdot 1.8 \cdot 293^4\,\mathrm{W} \approx 7.5 \cdot 10^{2}\,\mathrm{W}$. The net power lost by radiation is therefore the difference, about $1.9 \cdot 10^{2}\,\mathrm{W}$.
:::

:::teorema{#legge-di-wien titolo="Wien’s displacement law"}
The wavelength $\lambda_{\max}$ at which the blackbody curve peaks is inversely proportional to the absolute temperature:
$$
\lambda_{\max}\, T = 2.90 \cdot 10^{-3}\,\mathrm{m\cdot K} .
$$
This is an empirical law. It explains why an object changes color from red to white as it heats up, and it allows us to measure the temperature of a distant object from the color of its light. The human body, at $310\,\mathrm{K}$, has its emission peak at
$$
\lambda_{\max} = \frac{2.90 \cdot 10^{-3}}{310}\,\mathrm{m} \approx 9.4 \cdot 10^{-6}\,\mathrm{m} = 9.4\,\mu\mathrm{m} ,
$$
in the infrared. Thermal cameras operate in this wavelength range.
:::

:::esempio{#temperatura-del-sole titolo="Surface temperature of the Sun"}
The spectrum of sunlight peaks near $\lambda_{\max} = 500\,\mathrm{nm}$. Treating the Sun as a blackbody, **Wien’s law** gives
$$
T = \frac{2.90 \cdot 10^{-3}\,\mathrm{m\cdot K}}{5.00 \cdot 10^{-7}\,\mathrm{m}} = 5.80 \cdot 10^{3}\,\mathrm{K} .
$$
This is the temperature used to calculate the Sun’s power output with the Stefan–Boltzmann law. A red star with a peak at $725\,\mathrm{nm}$ has temperature $4.0 \cdot 10^{3}\,\mathrm{K}$, and a blue star with a peak at $290\,\mathrm{nm}$ has temperature $1.0 \cdot 10^{4}\,\mathrm{K}$.
:::

## Planck’s hypothesis

:::osservazione{#problema-corpo-nero titolo="The blackbody curve and classical physics"}
In the late nineteenth century, physicists tried to derive the shape of the blackbody curve using Maxwell’s electromagnetism and thermodynamics. The classical calculation (the Rayleigh–Jeans law) assigns the same average energy, proportional to $T$, to every mode of oscillation of the waves in the cavity. The number of modes increases without bound as the wavelength decreases, so the classical curve grows as $\dfrac{1}{\lambda^4}$ for $\lambda \to 0$. Classical theory describes long wavelengths well, but predicts infinite intensity in the ultraviolet limit and infinite total power, whereas the measured curve approaches zero. This discrepancy became known as the *ultraviolet catastrophe*.

::grafico{f="100/(x^5*(exp(2.88/x)-1));100/(2.88*x^4)" xmin=-0.2 xmax=3.2 ymin=-0.5 ymax=12 nomi="λ,I" legenda="\text{experimental curve};\text{classical prediction}" titolo="Blackbody at $5000\,\mathrm{K}$, with $\lambda$ in micrometers. The classical prediction agrees with the experimental curve at large $\lambda$ and grows without bound at small $\lambda$"}

:::

:::teorema{#ipotesi-di-planck titolo="Planck’s hypothesis"}
In 1900, Planck proposed that charges in the cavity walls oscillating at frequency $f$ can have only the energies
$$
E = n h f ,
\qquad
n = 0, 1, 2, 3, \dots
$$
where $h$ is a new constant, now called **Planck’s constant**:
$$
h = 6.63 \cdot 10^{-34}\,\mathrm{J\cdot s} .
$$
This is a postulate. An oscillator’s energy therefore changes in steps, and the smallest amount $hf$ that it can emit or absorb is called a **quantum of energy**. With this hypothesis Planck derived a formula that agrees with the experimental curves at every temperature. For an oscillator of frequency $f = 5.00 \cdot 10^{14}\,\mathrm{Hz}$, corresponding to visible light, one quantum is
$$
hf = 6.63 \cdot 10^{-34} \cdot 5.00 \cdot 10^{14}\,\mathrm{J} \approx 3.3 \cdot 10^{-19}\,\mathrm{J} .
$$

::grafico{assi=0 uguale=1 linee="0,0 3,0;0,1 3,1;0,2 3,2;0,3 3,3;0,4 3,4" vettori="1.5,1,1.5,2;2.3,3,2.3,2" etichette="3.2,0,E = 0;3.2,1,E = hf;3.2,2,E = 2hf;3.2,3,E = 3hf;3.2,4,E = 4hf;0.55,1.5,absorbs;1.45,2.5,emits" xmin=-0.5 xmax=5 ymin=-0.5 ymax=4.5 titolo="Allowed energies of an oscillator of frequency $f$ according to Planck. The energy changes only in steps, and the gap between adjacent levels is one quantum $hf$"}

:::

:::osservazione{#perche-planck-funziona titolo="Why quanta explain the curve"}
Short wavelengths correspond to high frequencies and therefore to large quanta $hf$. When one quantum is much larger than the typical energy of thermal motion, nearly all oscillators of that frequency remain in the state $n = 0$ and emit almost no radiation. This explains why the curve approaches zero for $\lambda \to 0$. At long wavelengths the quantum is small, the energy steps are imperceptible, and the classical prediction is recovered.

Planck’s formula for the spectral intensity is
$$
I(\lambda) = \frac{2\pi h c^2}{\lambda^5} \cdot \frac{1}{e^{\frac{hc}{\lambda k T}} - 1} ,
$$
where $k = 1.38 \cdot 10^{-23}\,\mathrm{J/K}$ is Boltzmann’s constant. Finding the maximum and evaluating an integral yield Wien’s law and the Stefan–Boltzmann law, respectively, with the experimentally observed values of the constants.
:::

:::esempio{#quanti-oggetti-macroscopici titolo="Quanta in everyday objects"}
A pendulum oscillating at frequency $f = 1.0\,\mathrm{Hz}$ with energy $E = 0.050\,\mathrm{J}$ can change its energy only in steps of $hf = 6.63 \cdot 10^{-34}\,\mathrm{J}$. The quantum number of its state is
$$
n = \frac{E}{hf} = \frac{0.050}{6.63 \cdot 10^{-34}} \approx 7.5 \cdot 10^{31} .
$$
A change of one quantum alters the energy by about one part in $10^{32}$, too small to detect in any measurement. Energy therefore appears continuous in macroscopic objects. Of the oscillators considered here, only the atomic ones show discernible energy steps, at frequencies of $10^{14}$ or $10^{15}\,\mathrm{Hz}$.
:::

## Experimental features of the photoelectric effect

:::definizione{#effetto-fotoelettrico titolo="Photoelectric effect"}
The **photoelectric effect** is the emission of electrons from a metal exposed to electromagnetic radiation. The emitted electrons are called photoelectrons. For example, a negatively charged zinc plate connected to an electroscope discharges under ultraviolet illumination because it loses electrons. Under visible light, even at high intensity, it stays charged.
:::

:::definizione{#fotocella titolo="Photocell and stopping potential"}
The effect can be studied with a **photocell**, an evacuated glass tube containing two metal electrodes. Light strikes the cathode, which emits electrons, and the anode collects them. An adjustable power supply maintains a voltage $V$ between the anode and cathode, and an ammeter measures the current $I$ due to the electrons reaching the anode.

If the anode is at a higher potential than the cathode ($V > 0$), the electric field accelerates the electrons toward the anode. Once $V$ is large enough, the anode collects them all. The current then reaches its maximum, called the **saturation current**. Reversing the polarity ($V < 0$) makes the field slow the electrons down, and only those with enough kinetic energy reach the anode. The **stopping potential** $V_0$ is the magnitude of the retarding voltage that reduces the current to zero.

::grafico{assi=0 uguale=1 curve="2.5+2.4*cos(t),1+1.3*sin(t),0,6.29;3.4+0.25*cos(t),-1.2+0.25*sin(t),0,6.29" linee="1,0.2 1,1.8;4,0.2 4,1.8;1,0.2 1,-1.2 2.4,-1.2;2.6,-1.2 3.15,-1.2;3.65,-1.2 4,-1.2 4,0.2;2.4,-0.9 2.4,-1.5;2.6,-1.05 2.6,-1.35" vettori="-0.6,2.8,0.9,1.5,light;1.2,1,3.8,1,e⁻" etichette="-0.45,1.0,cathode;5.45,1.0,anode;2.5,-1.75,V;3.4,-1.65,A" xmin=-1.2 xmax=6.2 ymin=-2.1 ymax=3.1 legenda=0 titolo="Photocell. Light strikes the cathode and the emitted electrons move toward the anode. The power supply sets the voltage $V$ between the anode and cathode, and the ammeter measures the current"}

An electron that leaves the cathode with kinetic energy $K$ and crosses a retarding voltage $|V|$ loses energy $e|V|$, so it reaches the anode if $K \ge e|V|$. The current falls to zero when the voltage stops even the fastest electrons. The stopping potential therefore measures the maximum kinetic energy of the photoelectrons:
$$
e V_0 = K_{\max} .
$$
For example, if $V_0 = 0.80\,\mathrm{V}$, the fastest electrons have kinetic energy $K_{\max} = 0.80\,\mathrm{eV} = 1.28 \cdot 10^{-19}\,\mathrm{J}$.
:::

:::osservazione{#osservazioni-fotoelettrico titolo="Experimental observations"}
Experiments with photocells, repeated with different metals and with light of different frequencies and intensities, give the following results.

- Each metal has a **threshold frequency** $f_0$. Light below $f_0$ causes no electron emission, however intense it is. Above $f_0$, emission occurs even with very weak light.
- The maximum kinetic energy of the photoelectrons, measured using the stopping potential, increases linearly with frequency and does *not* depend on light intensity.
- Light intensity changes only the number of electrons emitted per second, and the saturation current is proportional to the intensity.
- Emission is immediate. Electrons leave the metal within $10^{-9}\,\mathrm{s}$ of the arrival of the light, even when the light is very weak.

::grafico{f="max(0,4*(1-exp(-(x+1.2)/0.5)));max(0,2*(1-exp(-(x+1.2)/0.5)))" punti="-1.2,0,pieno,−V₀" xmin=-2 xmax=4 ymin=-0.5 ymax=5 nomi="V,I" legenda="\text{higher light intensity};\text{lower light intensity}" titolo="Current $I$ versus voltage $V$ between the anode and cathode, for light of the same frequency at two intensities. The saturation current is proportional to intensity, but the stopping potential $V_0$ is the same"}

:::

:::osservazione{#contrasto-teoria-ondulatoria titolo="Disagreement with classical wave theory"}
According to Maxwell’s theory, light is a wave that carries energy continuously, and its intensity is proportional to the square of the electric field amplitude. A more intense wave exerts larger forces on electrons and should therefore produce faster electrons. A wave of any frequency should also eject electrons if its intensity is high enough. The observations contradict both predictions.

The emission time also disagrees with classical wave theory. Consider light of intensity $1.0 \cdot 10^{-2}\,\mathrm{W/m^2}$ striking a metal that requires $2.3\,\mathrm{eV} = 3.7 \cdot 10^{-19}\,\mathrm{J}$ to free an electron. If an electron collects the energy incident on an area comparable to that of an atom, $\pi \left( 1.0 \cdot 10^{-10}\,\mathrm{m} \right)^2 \approx 3.1 \cdot 10^{-20}\,\mathrm{m^2}$, it receives power $3.1 \cdot 10^{-22}\,\mathrm{W}$ and accumulates the required energy in
$$
\Delta t = \frac{3.7 \cdot 10^{-19}\,\mathrm{J}}{3.1 \cdot 10^{-22}\,\mathrm{W}} \approx 1.2 \cdot 10^{3}\,\mathrm{s} ,
$$
or about 20 minutes. The observed emission is immediate.
:::

## Photons and Einstein’s equation

:::teorema{#fotone titolo="Einstein’s photon hypothesis"}
In 1905, Einstein proposed that light of frequency $f$ consists of packets of energy, later called **photons**, each with energy
$$
E = h f = \frac{h c}{\lambda} .
$$
This postulate extends Planck’s hypothesis to radiation itself. Even as radiation travels, its energy is quantized, and a photon is absorbed or emitted as a whole. In a light beam the intensity is proportional to the number of photons passing through a unit area in one second. A green-light photon with $\lambda = 500\,\mathrm{nm}$ has energy
$$
E = \frac{6.63 \cdot 10^{-34} \cdot 3.00 \cdot 10^{8}}{5.00 \cdot 10^{-7}}\,\mathrm{J} \approx 3.98 \cdot 10^{-19}\,\mathrm{J} \approx 2.49\,\mathrm{eV} ,
$$
and a laser emitting power $1.0\,\mathrm{mW}$ at $650\,\mathrm{nm}$ emits $\dfrac{1.0 \cdot 10^{-3}}{3.06 \cdot 10^{-19}} \approx 3.3 \cdot 10^{15}$ photons per second.
:::

:::osservazione{#energia-fotone-ev titolo="Photon energy in electronvolts"}
Calculations involving photons often use the product $hc = 6.63 \cdot 10^{-34} \cdot 3.00 \cdot 10^{8}\,\mathrm{J\cdot m} = 1.99 \cdot 10^{-25}\,\mathrm{J\cdot m}$. Dividing by $1.60 \cdot 10^{-19}\,\mathrm{J/eV}$ and converting to nanometers gives $hc \approx 1.24 \cdot 10^{3}\,\mathrm{eV\cdot nm}$, so
$$
E\,(\text{in eV}) \approx \frac{1240}{\lambda\,(\text{in nm})} .
$$
Visible light photons, with wavelengths between $380\,\mathrm{nm}$ and $750\,\mathrm{nm}$, therefore have energies between about $3.3\,\mathrm{eV}$ and $1.7\,\mathrm{eV}$.
:::

:::definizione{#lavoro-di-estrazione titolo="Work function"}
Conduction electrons are free to move within a metal but are held back at its surface. The **work function** $W_0$ is the minimum energy that must be supplied to an electron to remove it from the metal. Its value depends on the metal and is usually given in electronvolts. Typical values are $2.1\,\mathrm{eV}$ for cesium, $2.3\,\mathrm{eV}$ for sodium, $2.9\,\mathrm{eV}$ for calcium, $4.3\,\mathrm{eV}$ for zinc, and $4.7\,\mathrm{eV}$ for copper. The least tightly bound electrons require exactly $W_0$. The others require more energy.
:::

:::teorema{#equazione-di-einstein titolo="Einstein’s photoelectric equation"}
When a photon of frequency $f$ is absorbed by an electron in a metal of work function $W_0$, the maximum kinetic energy of the emitted electron is
$$
K_{\max} = h f - W_0 .
$$
The equation follows from the photon hypothesis and conservation of energy. The electron receives the entire energy $hf$ of the photon and uses at least $W_0$ to escape the metal, leaving at most the kinetic energy $hf - W_0$. The least tightly bound electrons reach this value. If a sodium plate ($W_0 = 2.30\,\mathrm{eV}$) is illuminated with light of wavelength $400\,\mathrm{nm}$, the photons have energy $\dfrac{hc}{\lambda} \approx 3.11\,\mathrm{eV}$, so $K_{\max} \approx 3.11\,\mathrm{eV} - 2.30\,\mathrm{eV} = 0.81\,\mathrm{eV}$ and the stopping potential is $V_0 \approx 0.81\,\mathrm{V}$.
:::

:::definizione{#frequenza-di-soglia titolo="Threshold frequency and wavelength"}
An electron is emitted only if $K_{\max} \ge 0$, or equivalently if $hf \ge W_0$. A metal’s **threshold frequency** is therefore
$$
f_0 = \frac{W_0}{h} ,
$$
and its corresponding **threshold wavelength** is $\lambda_0 = \dfrac{c}{f_0} = \dfrac{hc}{W_0}$. The photoelectric effect occurs for $f \ge f_0$, equivalently for $\lambda \le \lambda_0$. For sodium,
$$
f_0 = \frac{2.30 \cdot 1.60 \cdot 10^{-19}}{6.63 \cdot 10^{-34}}\,\mathrm{Hz} \approx 5.55 \cdot 10^{14}\,\mathrm{Hz} ,
\qquad
\lambda_0 = \frac{3.00 \cdot 10^{8}}{5.55 \cdot 10^{14}}\,\mathrm{m} \approx 540\,\mathrm{nm} ,
$$
so blue and violet light eject electrons from sodium, whereas yellow and red light do not. For zinc, with $W_0 = 4.3\,\mathrm{eV}$, the threshold is $\lambda_0 \approx 290\,\mathrm{nm}$, in the ultraviolet, as in the electroscope experiment.
:::

:::osservazione{#spiegazione-osservazioni titolo="How the photon hypothesis explains the observations"}
- Each electron absorbs just one photon. If $hf < W_0$, no photon has enough energy. Increasing intensity increases the number of photons without changing the energy of each one, so there is no emission below the threshold frequency.
- The maximum kinetic energy $hf - W_0$ depends on the frequency and not on the number of photons, so it is independent of intensity.
- The number of electrons emitted per second is proportional to the number of photons arriving per second, so the saturation current is proportional to intensity.
- A photon transfers its energy to an electron in a single event, so emission begins as soon as the first photon arrives.
:::

:::attenzione{#intensita-ed-energia}
Light intensity and photon energy are different quantities. Doubling the intensity does not double the kinetic energy of the photoelectrons. For example, light of wavelength $400\,\mathrm{nm}$ incident on sodium gives $K_{\max} \approx 0.81\,\mathrm{eV}$ at any intensity. Doubling the intensity only doubles the saturation current. To increase $K_{\max}$, the frequency must increase.
:::

## Stopping potential and measurement of Planck’s constant

::::teorema{#potenziale-arresto-frequenza titolo="Stopping potential as a function of frequency"}
For a metal of work function $W_0$ illuminated by light of frequency $f \ge f_0$, the stopping potential is
$$
V_0 = \frac{h}{e}\, f - \frac{W_0}{e} .
$$
The graph of $V_0$ against $f$ is therefore a straight line with slope $\dfrac{h}{e}$, crossing the frequency axis at the threshold frequency $f_0$. The slope is the same for all metals and equals $\dfrac{6.63 \cdot 10^{-34}}{1.60 \cdot 10^{-19}}\,\mathrm{V\cdot s} \approx 4.14 \cdot 10^{-15}\,\mathrm{V\cdot s}$. Only the threshold frequency changes. The graph therefore provides a way to measure $h$.

::grafico{f="(x>=5.55?0.4144*x-2.30:NaN);(x>=10.38?0.4144*x-4.30:NaN)" segmenti="0,-2.3,5.55,0;0,-4.3,10.38,0" punti="5.55,0,pieno;10.38,0,pieno" etichette="5.2,0.45,f₀;10.1,0.45,f₀" xmin=-0.5 xmax=16.5 ymin=-5 ymax=5 nomi="f,V₀" legenda="\text{sodium};\text{zinc}" titolo="Stopping potential $V_0$ in volts versus frequency $f$ in units of $10^{14}\,\mathrm{Hz}$ for sodium and zinc. The lines have the same slope $\dfrac{h}{e}$ and cross the frequency axis at the respective threshold frequencies. The dashed extension crosses the $V_0$-axis at $-\dfrac{W_0}{e}$"}

:::dimostrazione
The stopping potential and maximum kinetic energy are related by $e V_0 = K_{\max}$. By **Einstein’s equation**, $K_{\max} = hf - W_0$, so
$$
e V_0 = h f - W_0 .
$$
Dividing both sides by $e$ gives $V_0 = \dfrac{h}{e}\, f - \dfrac{W_0}{e}$. Setting $V_0 = 0$ yields $f = \dfrac{W_0}{h} = f_0$, so the line crosses the frequency axis at the threshold frequency.
:::
::::

:::esempio{#misura-di-h titolo="Measuring h from two points on the line"}
Between 1914 and 1916, Millikan measured the stopping potential of several metals at different frequencies. His data lay on parallel straight lines, whose slope gave a value of $h$ in agreement with Planck’s, confirming Einstein’s equation. Suppose measurements on a metal give $V_1 = 0.60\,\mathrm{V}$ at $f_1 = 7.0 \cdot 10^{14}\,\mathrm{Hz}$ and $V_2 = 1.84\,\mathrm{V}$ at $f_2 = 1.00 \cdot 10^{15}\,\mathrm{Hz}$. The slope of the line is $\dfrac{h}{e}$, so
$$
h = e\, \frac{V_2 - V_1}{f_2 - f_1} = 1.60 \cdot 10^{-19} \cdot \frac{1.84 - 0.60}{3.0 \cdot 10^{14}}\,\mathrm{J\cdot s} \approx 6.6 \cdot 10^{-34}\,\mathrm{J\cdot s} .
$$
The work function can be obtained from one point on the line: $\dfrac{W_0}{e} = \dfrac{h}{e}\, f_1 - V_1 \approx 2.89\,\mathrm{V} - 0.60\,\mathrm{V} \approx 2.3\,\mathrm{V}$, so $W_0 \approx 2.3\,\mathrm{eV}$, the value for sodium.
:::

## Photon momentum

:::richiamo{titolo="Energy and momentum in relativity"}
A particle of mass $m$, total energy $E$, and momentum $p$ satisfies $E^2 = p^2 c^2 + m^2 c^4$. For a particle of zero mass, this relation becomes $E = pc$. See the chapter on dynamics and energy in special relativity.
:::

::::teorema{#quantita-di-moto-fotone titolo="Photon momentum"}
A photon of wavelength $\lambda$ has momentum of magnitude
$$
p = \frac{h}{\lambda} = \frac{h f}{c} ,
$$
pointing in the direction in which the light travels. The photon travels at speed $c$, which a particle of nonzero mass cannot reach. The photon therefore has zero mass. Visible light photons have very small momenta. For example, at $500\,\mathrm{nm}$,
$$
p = \frac{6.63 \cdot 10^{-34}}{5.00 \cdot 10^{-7}}\,\mathrm{kg\cdot m/s} \approx 1.33 \cdot 10^{-27}\,\mathrm{kg\cdot m/s} .
$$
This momentum gives rise to radiation pressure, discussed in the chapter on Maxwell’s equations and electromagnetic waves. A surface that absorbs $N$ photons per second experiences an average force $N p$.

:::dimostrazione
A photon has zero mass, so the energy–momentum relation gives $E = pc$. The energy of the photon is $E = hf$, hence
$$
p = \frac{E}{c} = \frac{h f}{c} .
$$
Since $c = \lambda f$, we have $\dfrac{f}{c} = \dfrac{1}{\lambda}$ and therefore $p = \dfrac{h}{\lambda}$.
:::
::::

## The Compton effect

:::osservazione{#esperimento-compton titolo="Compton’s experiment"}
In 1923, Compton directed a beam of X-rays of known wavelength $\lambda$ onto a block of graphite and measured the wavelength of the radiation scattered at various angles $\theta$ to the beam. In addition to radiation of the original wavelength $\lambda$, he found radiation of wavelength $\lambda' > \lambda$. The difference $\lambda' - \lambda$ increases with the scattering angle and is independent of the target material. In classical wave theory, the electrons in the target oscillate at the frequency of the incident wave and emit radiation at that same frequency, leaving the wavelength shift unexplained. Compton explained it as a collision between a photon and a free electron, using conservation of energy and momentum.
:::

:::richiamo{titolo="Conservation of energy and momentum in relativity"}
In an isolated system, total energy and the momentum vector are conserved. An electron of mass $m_e$ at rest has energy $m_e c^2$. After the collision, if its momentum has magnitude $p_e$, its energy $E_e$ satisfies $E_e^2 = p_e^2 c^2 + m_e^2 c^4$. See the chapter on dynamics and energy in special relativity.
:::

::::teorema{#formula-compton titolo="Compton scattering formula"}
A photon of wavelength $\lambda$ collides with a free electron initially at rest and is scattered at an angle $\theta$ to its original direction. The wavelength $\lambda'$ of the scattered photon satisfies
$$
\Delta\lambda = \lambda' - \lambda = \frac{h}{m_e c}\,(1 - \cos\theta) .
$$
The wavelength shift depends only on the scattering angle. It is zero for $\theta = 0^\circ$, equals $\dfrac{h}{m_e c}$ for $\theta = 90^\circ$, and reaches its maximum value $\dfrac{2h}{m_e c}$ for $\theta = 180^\circ$, when the photon is scattered straight back. The scattered photon has a longer wavelength and therefore less energy. The energy lost by the photon becomes kinetic energy of the electron.

::grafico{assi=0 uguale=1 vettori="-3,0,-0.12,0,λ;0,0,1.92,1.61,λ′;0,0,1.64,-1.15,e⁻" segmenti="0,0,2.8,0" curve="0.8*cos(t),0.8*sin(t),0,0.698;0.6*cos(t),0.6*sin(t),-0.611,0" punti="0,0,pieno" etichette="1.0,0.35,θ;0.85,-0.25,φ" xmin=-3.3 xmax=3 ymin=-1.6 ymax=2 legenda=0 titolo="Compton effect. The photon of wavelength $\lambda$ strikes the stationary electron. The photon scatters at angle $\theta$ with wavelength $\lambda'$, and the electron recoils at angle $\varphi$ on the other side of the initial direction"}

:::dimostrazione
We write down the two conservation laws and eliminate the electron quantities, which are not measured. Let $p = \dfrac{h}{\lambda}$ and $p' = \dfrac{h}{\lambda'}$ be the magnitudes of the photon’s momentum before and after the collision. Its initial and final energies are $pc$ and $p'c$.

**Conservation of energy** gives $pc + m_e c^2 = p'c + E_e$, so the electron’s energy after the collision is
$$
E_e = c\,(p - p') + m_e c^2 .
$$
Take the $x$-axis along the incident photon’s direction and the $y$-axis in the plane of the collision, positive on the scattered photon’s side. **Conservation of momentum** gives $\vec{p} = \vec{p}\,' + \vec{p}_e$, or $\vec{p}_e = \vec{p} - \vec{p}\,'$. In components,
$$
p_{e,x} = p - p' \cos\theta ,
\qquad
p_{e,y} = -p' \sin\theta ,
$$
and the squared magnitude is
$$
\begin{aligned}
p_e^2 &= (p - p' \cos\theta)^2 + (p' \sin\theta)^2 \\[6pt]
&= p^2 - 2 p p' \cos\theta + p'^2 \cos^2\theta + p'^2 \sin^2\theta \\[6pt]
&= p^2 + p'^2 - 2 p p' \cos\theta ,
\end{aligned}
$$
because $\cos^2\theta + \sin^2\theta = 1$. Now substitute $E_e$ and $p_e^2$ into the relation $E_e^2 = p_e^2 c^2 + m_e^2 c^4$:
$$
\left[ c\,(p - p') + m_e c^2 \right]^2 = c^2 \left( p^2 + p'^2 - 2 p p' \cos\theta \right) + m_e^2 c^4 .
$$
Expanding the square on the left gives
$$
c^2 \left( p^2 - 2 p p' + p'^2 \right) + 2 m_e c^3 (p - p') + m_e^2 c^4 = c^2 \left( p^2 + p'^2 - 2 p p' \cos\theta \right) + m_e^2 c^4 .
$$
The terms $c^2 p^2$, $c^2 p'^2$, and $m_e^2 c^4$ appear on both sides and cancel, leaving
$$
-2 c^2 p p' + 2 m_e c^3 (p - p') = -2 c^2 p p' \cos\theta .
$$
Moving $-2c^2 pp'$ to the right and dividing by $2c^2$ gives
$$
m_e c\,(p - p') = p p' (1 - \cos\theta) .
$$
Divide both sides by $m_e c\, p p'$. Since $\dfrac{p - p'}{p p'} = \dfrac{1}{p'} - \dfrac{1}{p}$, this gives
$$
\frac{1}{p'} - \frac{1}{p} = \frac{1 - \cos\theta}{m_e c} .
$$
Finally, $\dfrac{1}{p} = \dfrac{\lambda}{h}$ and $\dfrac{1}{p'} = \dfrac{\lambda'}{h}$, so $\dfrac{\lambda' - \lambda}{h} = \dfrac{1 - \cos\theta}{m_e c}$. Multiplying by $h$ gives the Compton scattering formula.
:::
::::

:::definizione{#lunghezza-onda-compton titolo="Compton wavelength"}
The constant in the Compton scattering formula is called the electron’s **Compton wavelength**:
$$
\lambda_C = \frac{h}{m_e c} = \frac{6.63 \cdot 10^{-34}}{9.11 \cdot 10^{-31} \cdot 3.00 \cdot 10^{8}}\,\mathrm{m} \approx 2.43 \cdot 10^{-12}\,\mathrm{m} = 2.43\,\mathrm{pm} .
$$
It is the wavelength shift of a photon scattered at $90^\circ$, and the formula can be written as $\Delta\lambda = \lambda_C (1 - \cos\theta)$. For X-rays with $\lambda = 50.0\,\mathrm{pm}$ scattered at $90^\circ$, we have $\lambda' = 52.4\,\mathrm{pm}$. The photon’s energy changes from $\dfrac{hc}{\lambda} \approx 24.9\,\mathrm{keV}$ to $\dfrac{hc}{\lambda'} \approx 23.7\,\mathrm{keV}$, and the electron gains kinetic energy $hc \left( \dfrac{1}{\lambda} - \dfrac{1}{\lambda'} \right) \approx 1.15\,\mathrm{keV}$.
:::

:::osservazione{#compton-e-luce-visibile titolo="Why the experiment uses X-rays"}
The shift $\Delta\lambda$ is independent of $\lambda$ and is at most $2\lambda_C \approx 4.85\,\mathrm{pm}$. For visible light with $\lambda = 500\,\mathrm{nm}$, the relative shift is at most $\dfrac{4.85 \cdot 10^{-12}}{5.00 \cdot 10^{-7}} \approx 9.7 \cdot 10^{-6}$, too small to measure with the spectrometers available at the time. For X-rays with wavelengths of a few tens of picometers, the relative shift is several percent and can readily be measured. X-ray photon energies of tens of keV also greatly exceed the binding energies of the outer electrons in graphite atoms, so these electrons can be treated as free and initially at rest.

Radiation scattered at the original wavelength $\lambda$ comes from more tightly bound electrons. The photon effectively strikes the whole atom. The atomic mass, about $2 \cdot 10^{4}$ times larger, takes the place of $m_e$, making $\Delta\lambda$ negligible.
:::

## Wave–particle duality

:::osservazione{#dualismo-onda-corpuscolo titolo="Wave–particle duality of light"}
Interference and diffraction of light are explained by electromagnetic waves and cannot be explained by a classical particle model. The photoelectric and Compton effects, in turn, are explained by photons, which carry energy $hf$ and momentum $\dfrac{h}{\lambda}$ and exchange these quantities with electrons like particles in a collision. Light therefore exhibits both wave-like and particle-like behavior. Which behavior is observed depends on the experiment. This is called **wave–particle duality**.

The relations $E = hf$ and $p = \dfrac{h}{\lambda}$ connect the two descriptions. The quantities on the left describe a particle, while those on the right describe a wave. Planck’s constant sets the scale at which particle-like behavior becomes apparent. For example, a light beam of $1.0\,\mathrm{mW}$ carries about $10^{15}$ photons per second, which is why light appears to be a continuous wave in everyday life.
:::

:::esempio{#interferenza-fotoni titolo="Interference with very few photons"}
In a double-slit experiment, the light intensity is reduced until, on average, only one photon arrives at a time. A detector that records individual arrivals replaces the screen. Each photon is detected at a single point, like a particle. After thousands of arrivals, however, the points form the interference fringes predicted by wave theory. The wave therefore determines the probability that a photon arrives at each point. The same duality applies to electrons and other particles, as discussed in the chapter on the Bohr atom, matter waves, and the uncertainty principle.
:::
