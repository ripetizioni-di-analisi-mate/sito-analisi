---
titolo: Radiation, radioactivity and optics
sommario: Fields and photons, spectrum and attenuation, decay probability and activity, ionization and dose, refraction and images formed by thin lenses.
---

## Fields that transport energy

:::osservazione{titolo="Fields and propagation"}
Light reaches Earth across almost empty space: its propagation does not require a material medium such as the one needed for sound. The disturbance consists of varying electric and magnetic fields that can transfer energy to matter. The wave description determines propagation and intensity; the quantum description explains energy exchange in individual events.
:::

:::definizione{#onde-em titolo="Plane electromagnetic wave"}
In a progressive plane wave in vacuum, $\mathbf E$ and $\mathbf B$ are perpendicular to one another and to the direction of propagation. They oscillate in phase: maxima, minima and zeros of their respective components occur together. The vector product $\mathbf E\times\mathbf B$ gives the direction of energy transport. Their amplitudes satisfy $E_0=cB_0$.
$$
c=\lambda_0\nu,\qquad T=\dfrac1\nu,\qquad c\simeq3.00\cdot10^8\,\mathrm{m/s}.
$$
Here $\nu$ is frequency, $T$ is period and $\lambda_0$ is wavelength in vacuum. We use $\nu$ to distinguish frequency from the focal length $f$.
:::

:::osservazione{titolo="Intensity and interpretation of fields"}
The amplitude $E_0$ is measured in volts per metre; it is not an energy. Average intensity $I$ is the power crossing a surface perpendicular to propagation divided by its area. For a uniform beam, $I=\dfrac{P}{S}$; for a sinusoidal plane wave in vacuum,
$$
I=\dfrac12\varepsilon_0cE_0^2,\qquad
\varepsilon_0\simeq8.85\cdot10^{-12}\,\mathrm{F/m}.
$$
Doubling the amplitude therefore quadruples intensity, at fixed frequency and medium conditions. Doubling only the illuminated area at fixed power instead halves average intensity. These are two different physical changes.

![Electric and magnetic components in phase along the propagation direction.](/figure/fisica-semestre-filtro/radiazioni-e-ottica/em-wave-en.svg)

The two plots represent components along perpendicular directions, not two parallel fields. In a transparent medium, use the phase velocity $v=\dfrac{c}{n}$ and the relation $v=\lambda\nu$. The index $n$ can depend on frequency: specifying the colour of the light matters when this dependence is relevant.
:::

## Reading the electromagnetic spectrum

:::osservazione{titolo="Ordering radiation"}
A radio signal and an X ray belong to the same family of waves but interact with matter in very different ways. To order the spectrum, choose one variable: as frequency increases, wavelength in vacuum decreases and energy per photon increases. The total power of a source does not determine its spectral region.
:::

:::osservazione{#spettro titolo="Spectral regions and scales"}
The usual sequence in increasing frequency is radio, microwave, infrared, visible, ultraviolet, X rays and gamma rays. The table gives representative examples, not rigid boundaries.

| Region | Example wavelength in vacuum | Physical connection |
| --- | --- | --- |
| Radio | $3\,\mathrm m$ | a $100\,\mathrm{MHz}$ signal |
| Microwave | $3\,\mathrm{cm}$ | dielectric interactions |
| Infrared | $10\,\mathrm{\mu m}$ | thermal emission and molecular vibrations |
| Visible | $600\,\mathrm{nm}$ | detection by the eye and optical instruments |
| Ultraviolet | $100\,\mathrm{nm}$ | electronic excitation and possible ionization |
| X rays | $0.1\,\mathrm{nm}$ | different attenuation in different materials |
| Gamma rays | $0.001\,\mathrm{nm}$ | possible nuclear emission |
:::

:::osservazione{titolo="Spectral boundaries and interaction mechanisms"}
Visible light spans approximately $400$ to $700\,\mathrm{nm}$; visual sensitivity has no sharp mathematical boundary. Violet has higher frequency than red. A very intense red beam can carry more total energy than a weak violet beam while its individual photons remain less energetic.

X rays can arise from electronic processes, such as electron braking or transitions of inner electrons; many gamma rays arise from nuclear transitions. Their energies can overlap. Thus the claim that every gamma ray is more energetic than every X ray does not follow from the classification. Radio and microwave terminology also involves conventional boundaries that often overlap in technical usage.

In biomedical applications, the spectrum helps identify the mechanism being observed: optical transmission, molecular absorption and X-ray attenuation do not measure the same sample property. The word “radiation” alone specifies neither the energy of each quantum nor how much the material absorbs.
:::

## Photons: individual energy and the beam budget

:::osservazione{titolo="From quanta to power"}
An ideal monochromatic source emits quanta with the same energy. Power describes how rapidly energy is emitted; determining the number of emitted photons first requires the energy of one photon.
:::

:::definizione{#fotoni titolo="Photon energy and photon number"}
$$
E_\gamma=h\nu=\dfrac{hc}{\lambda_0},\qquad
h\simeq6.626\cdot10^{-34}\,\mathrm{J\,s}.
$$
Using $1\,\mathrm{eV}\simeq1.602\cdot10^{-19}\,\mathrm J$ gives the practical relation
$$
E_\gamma\,(\mathrm{eV})\simeq\dfrac{1240}{\lambda_0\,(\mathrm{nm})},\qquad
\dot N_\gamma=\dfrac P{E_\gamma},\qquad
N_\gamma=\dfrac{P\Delta t}{E_\gamma}
$$
for constant power over the interval $\Delta t$. Photon number is a count, whereas $\dot N_\gamma$ is a rate in $\mathrm{s^{-1}}$.
:::

:::osservazione{titolo="Comparing energies and photon rates"}
At $500\,\mathrm{nm}$ each photon carries approximately $2.48\,\mathrm{eV}$. To convert this value to joules, multiply by the energy corresponding to one electronvolt. A beam with twice the power at the same wavelength has twice as many photons per second, without doubling the energy of each photon. Conversely, at equal power, halving wavelength doubles individual energy and halves the number of photons per second.

![Photon energy versus wavelength in vacuum, with a three-electronvolt threshold.](/figure/fisica-semestre-filtro/radiazioni-e-ottica/photon-energy-en.svg)

The graph is a hyperbola: subtracting the same amount from wavelength does not always produce the same energy increase. When light enters a stationary transparent medium, frequency remains unchanged, so $h\nu$ remains unchanged. Wavelength in the medium becomes shorter because speed decreases. Substituting this new wavelength into $\dfrac{hc}{\lambda}$ while still using the vacuum speed would incorrectly predict a higher energy: the formula containing $c$ requires $\lambda_0$.

For a polychromatic beam, a generic “average wavelength” is insufficient: calculate the budget for the individual components and then add the respective energies or counts.
:::

## Attenuation: fractions, exponentials and absorbance

:::osservazione{titolo="Meaning of fractional loss"}
A homogeneous layer does not necessarily subtract the same power per centimetre. In the exponential model, equal thicknesses remove the same **fraction** of the beam reaching them. The second layer already receives less radiation than the first.
:::

:::teorema{#attenuazione titolo="Attenuation and the Beer–Lambert law"}
For a monochromatic collimated beam, a homogeneous material and a constant coefficient,
$$
\dfrac{dI}{dx}=-\mu I,\qquad I(x)=I_0e^{-\mu x},\qquad
\mathcal T=\dfrac I{I_0},\qquad x_{1/2}=\dfrac{\ln2}{\mu}.
$$
The linear coefficient $\mu$ has units inverse to those of thickness $x$. The half-value thickness $x_{1/2}$ halves direct-beam intensity. Attenuation may include absorption and scattering out of the beam; it does not automatically mean that all the removed energy is deposited in the sample.
:::

:::osservazione{titolo="From transmission data to concentration"}
Two half-value thicknesses transmit one quarter, and three transmit one eighth. To infer $\mu$ from measurements, use $\mu=\dfrac{\ln\!\left(\dfrac{I_0}{I}\right)}{x}$: this is a natural logarithm. A straight line in a plot of $\ln(\dfrac{I}{I_0})$ against $x$ has slope $-\mu$, whereas an ordinary plot of $I$ against $x$ is curved.

![Exponential transmission and its natural-logarithm representation.](/figure/fisica-semestre-filtro/radiazioni-e-ottica/attenuation-en.svg)

Spectrophotometry defines decadic absorbance as
$$
\mathcal A=\log_{10}\dfrac{I_0}{I}=-\log_{10}\mathcal T
=\varepsilon c_s\ell.
$$
Here $c_s$ is the concentration of the absorbing species, $\ell$ is optical path length and $\varepsilon$ is the molar absorption coefficient at the chosen wavelength. With $c_s$ in $\mathrm{mol/L}$ and $\ell$ in centimetres, $\varepsilon$ is expressed in $\mathrm{L\,mol^{-1}\,cm^{-1}}$. Absorbance is dimensionless: $\mathcal A=1$ means $10\%$ transmission, not $1\%$ absorption.

Linearity requires the chemical species and its coefficient to remain unchanged, with negligible scattering and a sufficiently narrow spectral bandwidth. Compare the sample with a suitable blank to separate solvent and container contributions. In laboratory spectrophotometric assays, calibration thus connects measured absorbance to the concentration of the species responsible for the signal. For two independent filters, transmittances multiply and absorbances add. In a polychromatic beam, components may be attenuated differently: the transmitted spectrum changes, and one constant $\mu$ may fail to describe all thicknesses.
:::

## What changes in nuclear decay

:::osservazione{titolo="Counting protons and nucleons"}
Nuclear transformation is not an ordinary chemical reaction: it can change the identity of the element. To determine the product, count protons and nucleons without confusing mass number with the exact nuclear mass.
:::

:::definizione{#decadimenti titolo="Nuclides, isotopes and transformations"}
In ${}^{A}_{Z}X$, $Z$ counts protons and $A$ counts protons plus neutrons; the neutron number is $A-Z$. Two isotopes of the same element have the same $Z$ but different $A$. Being isotopes does not imply that both are radioactive: stability depends on the nuclide.

| Emission | Change in daughter nucleus | Essential balance |
| --- | --- | --- |
| Alpha | $A-4$, $Z-2$ | a ${}^{4}_{2}\mathrm{He}$ nucleus is emitted |
| Beta minus | unchanged $A$, $Z+1$ | $n\to p+e^-+\bar\nu_e$ |
| Beta plus | unchanged $A$, $Z-1$ | $p\to n+e^++\nu_e$ within the nucleus |
| Gamma | unchanged $A$ and $Z$ | the nucleus reaches a lower energy state |
:::

:::osservazione{titolo="Nuclear balances and rest mass"}
In beta-minus decay, the electron is not simply removed from the electron cloud: it is emitted in the nuclear transformation together with the antineutrino. Beta-plus decay concerns an energetically allowed nuclear transformation; it does not claim that a free proton can spontaneously decay in this way. Neutrinos and antineutrinos enter the energy balance and the conservation of physical quantities.

![Mass-number and atomic-number balance in an alpha and beta-minus chain, with a separate gamma transition.](/figure/fisica-semestre-filtro/radiazioni-e-ottica/nuclear-decays-en.svg)

For example, ${}^{238}_{92}\mathrm U$ emits an alpha particle and becomes ${}^{234}_{90}\mathrm{Th}$: $238=234+4$ and $92=90+2$. A subsequent beta-minus decay preserves $234$ and increases atomic number to $91$. After two beta-minus decays, the nucleus is uranium again, but its mass number is $234$, unlike the starting isotope.

A gamma transition reduces nuclear internal energy and therefore also its rest mass by the amount corresponding to the released energy, while the **mass number** $A$ remains unchanged. Alpha and beta radiation consist of massive particles; gamma radiation is electromagnetic. Emissions can occur in the same decay chain: knowing only the original radionuclide does not justify ignoring radioactive daughters.
:::

## Half-life and probability: the exponential law

:::osservazione{titolo="Statistical decay predictions"}
A nucleus that has survived for a long time is not necessarily “nearing its deadline”. In the exponential decay model, probability per unit time remains constant. A large ensemble permits an accurate prediction of the average surviving fraction, while the time of an individual event remains unpredictable.
:::

:::teorema{#decadimento-esponenziale titolo="Survival of an isolated radionuclide"}
With no additional production, physical separation or feeding from precursors,
$$
N(t)=N_0e^{-\lambda_d t}=N_0\,2^{-\dfrac{t}{T_{1/2}}},\qquad
T_{1/2}=\dfrac{\ln2}{\lambda_d}.
$$
$N(t)$ denotes the mean number not yet decayed. The constant $\lambda_d$ has units of inverse time; it is not wavelength. For a nucleus initially present,
$$
P(\text{surviving until }t)=e^{-\lambda_d t},\qquad
P(\text{decaying by }t)=1-e^{-\lambda_d t}.
$$
:::

:::osservazione{titolo="Means, fluctuations and model limits"}
After three half-lives the surviving fraction is $\dfrac{1}{8}$ and the decayed fraction is $\dfrac{7}{8}$. Do not subtract half the initial population at every interval: halve the number still present. For a noninteger number of half-lives, such as $1.5T_{1/2}$, use the power $2^{-1.5}$; linear interpolation does not describe the law.

![Mean surviving population and two possible discrete realizations for a small sample.](/figure/fisica-semestre-filtro/radiazioni-e-ottica/decay-statistics-en.svg)

The smooth curve is a mean; the step traces are two possible samples of independent nuclei. Starting with one hundred nuclei, fifty survivors are expected after one half-life, but every experiment is not required to return exactly fifty. A nucleus that has already survived three half-lives still has probability $\dfrac{1}{2}$ of surviving the next half-life in this model.

To infer an interval from the remaining fraction $r$, solve $t=-\dfrac{\ln r}{\lambda_d}$. Loss of a sample through transport or biological elimination can reduce the measured quantity without being nuclear decay. If a daughter nucleus is continuously produced by a parent, its population does not generally follow a simple decreasing exponential based only on its own initial value.
:::

## Activity and detector counts

:::osservazione{titolo="Comparing radioactive samples"}
Two samples containing equal numbers of nuclei can have very different decay rates. The sample with the shorter half-life loses a larger fraction of its nuclei per unit time and therefore has greater initial activity.
:::

:::definizione{#attivita titolo="Mean decays per second"}
$$
\mathscr A(t)=-\dfrac{dN}{dt}=\lambda_dN(t)
=\mathscr A_0e^{-\lambda_d t},\qquad 1\,\mathrm{Bq}=1\,\mathrm{s^{-1}}.
$$
Activity $\mathscr A$ counts nuclear transformations per unit time. The becquerel is not a power unit and does not measure the total number of nuclei. For an isolated radionuclide, activity and population halve over the same interval.
:::

:::osservazione{titolo="Populations, detectors and emitted energy"}
At equal activity, a radionuclide with a tenfold longer half-life requires ten times as many nuclei: $N=\dfrac{\mathscr A T_{1/2}}{\ln2}$. At equal initial population, however, activity is inversely proportional to half-life. These are different comparisons.

![Activity-versus-population lines for two half-lives, showing equal activity at different populations.](/figure/fisica-semestre-filtro/radiazioni-e-ottica/activity-en.svg)

A detector does not necessarily record every decay. If a particular emission occurs with probability $b$ per decay, is recorded with efficiency $\eta$, and the background rate is $R_f$, then a model without dead-time losses gives
$$
R_{\mathrm{mis}}=\eta b\mathscr A+R_f.
$$
Here efficiency includes geometry and the probability of recording the emission under consideration. Subtract background first, then divide by $\eta b$. A count accumulated over one minute must be divided by sixty before comparison with activity in becquerels. The model assumes virtually constant activity during that measurement; observed counts fluctuate around the expected value.

Over a long interval, the mean number of decays is $N_0-N(t)$, or the time integral of activity. Replacing it by $\mathscr A_0t$ is an approximation valid only when activity changes little. To infer radiative power, the emitted energies and probabilities of the different channels are also needed: equal becquerel values do not guarantee equal energy per second.
:::

## Ionization, deposited energy and dose

:::osservazione{titolo="Comparing photons with targets"}
Ionization removes an electron from an atom or molecule. In a single-photon process, the available energy is $h\nu$: compare it with the energy required for the target. Increasing photon number does not increase the energy of each photon.
:::

:::definizione{#ionizzazione titolo="Individual energy and absorbed dose"}
Radio, microwaves and infrared are examples of nonionizing radiation; X rays and gamma rays have energies capable of ionizing ordinary matter. Within ultraviolet, the specific energy and target matter: one conclusion does not cover all wavelengths and all atoms.

The average absorbed dose in a mass $m$ is
$$
D=\dfrac{E_{\mathrm{ass}}}{m},\qquad 1\,\mathrm{Gy}=1\,\mathrm{J/kg}.
$$
Use the energy actually deposited in the selected mass, not all the energy emitted by the source.
:::

:::osservazione{titolo="From thresholds to energy deposition"}
If a target has a $10\,\mathrm{eV}$ threshold, the corresponding maximum wavelength in vacuum is approximately $124\,\mathrm{nm}$. A $100\,\mathrm{nm}$ photon exceeds the threshold; a $200\,\mathrm{nm}$ photon does not. This comparison establishes energetic possibility, not a guarantee that every incident photon is absorbed. The reasoning concerns single-photon events and does not automatically extend to multiphoton processes at high intensities.

Alpha and beta particles also ionize along their paths through interactions with matter. Particle type, the distribution of deposited energy and material properties matter in addition to total energy. Intense nonionizing radiation can heat a sample: “nonionizing” does not mean “without effects”.

Three questions therefore require three different quantities: how many decays occur per second requires activity; how much energy each photon carries requires frequency; how much energy remains per kilogram requires dose. Moving from source properties to dose also requires time, emissions, geometry and absorbed fraction. Average dose describes a physical energy budget and does not by itself determine a specific biological effect.
:::

## Reflection, refraction and total internal reflection

:::osservazione{titolo="The normal as a reference"}
A ray represents the local propagation direction in geometrical optics. At an interface, draw the normal first: using the angle to the surface instead of the angle to the normal exchanges sine and cosine and can reverse a prediction.
:::

:::teorema{#snell titolo="Interface laws"}
For transparent isotropic media with a stationary interface, the incident, reflected and refracted rays and the normal lie in one plane:
$$
\theta_r=\theta_i,\qquad n_1\sin\theta_i=n_2\sin\theta_t,
\qquad v_i=\dfrac c{n_i}.
$$
Angles are measured from the normal. Frequency remains unchanged, whereas $\lambda_i=\dfrac{\lambda_0}{n_i}$. If $n_2>n_1$, the transmitted ray bends towards the normal; at normal incidence its direction does not change even though its speed changes.
:::

:::osservazione{titolo="Angles, interfaces and guiding light"}
![Incident, reflected and refracted rays with angles measured from the normal.](/figure/fisica-semestre-filtro/radiazioni-e-ottica/snell-en.svg)

For light passing from air, approximated by $n_1=1$, into glass with $n_2=1.5$ at $\theta_i=30^\circ$, one obtains $\sin\theta_t=\dfrac{1}{3}$ and hence $\theta_t\simeq19.5^\circ$. The smaller angle agrees with entry into the higher-index medium. The law does not require all energy to be transmitted: some can be reflected.

When $n_1>n_2$, the transmitted angle increases more rapidly than the incident angle. At the limit,
$$
\theta_c=\arcsin\dfrac{n_2}{n_1}.
$$
For $\theta_i=\theta_c$, the refracted ray is grazing; for $\theta_i>\theta_c$, total internal reflection occurs in the ray model. If the ratio required by Snell exceeds one, do not seek an “arcsine greater than ninety degrees”: no propagating transmitted ray of that kind exists.

![Three incidences from glass to air: transmission, the critical angle and total internal reflection.](/figure/fisica-semestre-filtro/radiazioni-e-ottica/total-reflection-en.svg)

Guiding light in a fibre uses a core with a higher index than its cladding and suitable angles. Changing the external material changes the critical angle. Optical fibres can deliver light to the region viewed in endoscopic instruments: guiding requires appropriate index contrast and geometrical conditions. Beyond the critical angle, the wave description includes an evanescent field near the interface: absence of a transmitted ray does not mean the field is identically zero everywhere in the second medium.
:::

## Thin lenses: image position, orientation and size

:::osservazione{titolo="Assumptions of the optical model"}
A converging lens brings initially parallel rays together at its image focus. The conjugate-point formula describes the image of an object at finite distance, assuming a lens thin compared with the distances and paraxial rays close to the axis and at small angles. Real imaging systems have aberrations that the model does not describe.
:::

:::teorema{#lenti titolo="Sign convention and conjugate points"}
In air, take $f>0$ for a converging lens, $p>0$ for a real object, $q>0$ for a real image on the opposite side from the object, and $q<0$ for a virtual image on the object side:
$$
\dfrac1f=\dfrac1p+\dfrac1q,\qquad
q=\dfrac{fp}{p-f},\qquad M=\dfrac{h_i}{h_o}=-\dfrac qp.
$$
The sign of $M$ distinguishes upright and inverted images; its magnitude compares heights. Optical power is $\mathcal D=\dfrac1f$ with $f$ in metres, expressed in dioptres, or $\mathrm{m^{-1}}$. It is distinct from dose $D$.
:::

:::osservazione{titolo="Constructing real and virtual images"}
| Object position | Image position and nature |
| --- | --- |
| $p>2f$ | $f<q<2f$, real, inverted, diminished |
| $p=2f$ | $q=2f$, real, inverted, equal height magnitude |
| $f<p<2f$ | $q>2f$, real, inverted, enlarged |
| $p=f$ | parallel emerging rays, no image at a finite distance |
| $0<p<f$ | $q<0$, virtual, upright, enlarged |

![Three principal rays form a real inverted image for an object beyond twice the focal length.](/figure/fisica-semestre-filtro/radiazioni-e-ottica/lens-real-en.svg)

A ray parallel to the axis emerges through the rear focus; a ray through the optical centre is undeviated in the thin-lens model; a ray whose incident line passes through the front focus emerges parallel. All three must identify the same image. With $f=10\,\mathrm{cm}$ and $p=30\,\mathrm{cm}$, one finds $q=15\,\mathrm{cm}$ and $M=-\dfrac{1}{2}$: a screen placed there can receive the inverted image.

![Diverging rays and backward extensions locate an upright virtual image.](/figure/fisica-semestre-filtro/radiazioni-e-ottica/lens-virtual-en.svg)

With the same lens and $p=6\,\mathrm{cm}$, however, $q=-15\,\mathrm{cm}$ and $M=2.5$. Emerging rays diverge; only their backward extensions intersect. A screen at the virtual position does not receive a converging beam from the lens. The negative sign is not an “impossible” distance: it specifies the image side. Near $p=f$, a small change in $p$ causes a large change in $q$: inspect the denominator before rounding to avoid large errors.
:::
