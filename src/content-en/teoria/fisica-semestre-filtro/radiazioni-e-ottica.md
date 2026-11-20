---
titolo: Radiation, radioactivity and optics
sommario: Fields and photons, spectrum and attenuation, decay probability and activity, ionization and dose, refraction and images formed by thin lenses.
---

## Fields that transport energy

:::osservazione{titolo="Fields and propagation"}
Light, radio waves and X-rays are **electromagnetic waves**. Unlike sound they need no medium and propagate even in a vacuum, like sunlight reaching the Earth. What oscillates is an electric field and a magnetic field. An electromagnetic wave carries energy and gives it up to the matter it meets. It is described in two ways, both necessary: as a wave, to study its propagation, and as a set of energy packets called photons, to study exchanges of energy with atoms.
:::

:::definizione{#onde-em titolo="Plane electromagnetic wave"}
In an electromagnetic wave the electric field $\mathbf E$ and the magnetic field $\mathbf B$ oscillate in directions perpendicular to each other, and both are perpendicular to the direction in which the wave advances. The wave is therefore transverse. The two fields oscillate together: they are greatest at the same instants and zero at the same instants. In a vacuum all electromagnetic waves travel at the same speed, the **speed of light** $c$. As for every wave, the speed is the product of wavelength and frequency:
$$
c=\lambda_0\nu,\qquad T=\dfrac1\nu,\qquad c\simeq3.00\cdot10^8\,\mathrm{m/s}.
$$
In this chapter frequency is written with the Greek letter $\nu$ (nu), because the letter $f$ later denotes the focal length of lenses. The symbol $\lambda_0$ is the wavelength in a vacuum. Frequency and wavelength are inversely proportional. A green light with $\lambda_0=500\,\mathrm{nm}=5.00\cdot10^{-7}\,\mathrm m$ has frequency $\nu=\dfrac{c}{\lambda_0}=\dfrac{3.00\cdot10^8}{5.00\cdot10^{-7}}=6.0\cdot10^{14}\,\mathrm{Hz}$.
:::

:::osservazione{titolo="Intensity and interpretation of fields"}
The **intensity** $I$ of a wave is the power crossing a surface perpendicular to the direction of propagation, divided by the area of the surface, $I=\dfrac PS$. It is measured in $\mathrm{W/m^2}$. It is linked to the amplitude $E_0$ of the electric field, that is, its maximum value, in volts per metre:
$$
I=\dfrac12\varepsilon_0cE_0^2,\qquad
\varepsilon_0\simeq8.85\cdot10^{-12}\,\mathrm{F/m}.
$$
Intensity is proportional to the square of the amplitude, so with double the amplitude it is four times larger. A laser of power $1.0\,\mathrm{mW}$ with a beam of area $1.0\,\mathrm{mm^2}=1.0\cdot10^{-6}\,\mathrm{m^2}$ has intensity $\dfrac{1.0\cdot10^{-3}}{1.0\cdot10^{-6}}=1000\,\mathrm{W/m^2}$. If the same power is spread over twice the area, the intensity halves.

![Electric and magnetic components in phase along the propagation direction.](/figure/fisica-semestre-filtro/radiazioni-e-ottica/em-wave-en.svg)

In a transparent material, such as water or glass, light is slower than in a vacuum. The ratio of the two speeds is the **refractive index** $n$ of the material, so the speed in the material is $v=\dfrac cn$. The index is 1 in a vacuum, almost 1 in air, $1.33$ in water and about $1.5$ in glass. It depends slightly on the colour of the light.
:::

## Reading the electromagnetic spectrum

:::osservazione{titolo="Ordering radiation"}
Electromagnetic waves differ from one another in frequency. The set of all possible frequencies is called the **electromagnetic spectrum**. Going from radio waves to gamma rays three quantities change together: frequency increases, wavelength decreases and the energy of each photon increases.
:::

:::osservazione{#spettro titolo="Spectral regions and scales"}
The spectrum is divided into seven regions. In order of increasing frequency they are radio waves, microwaves, infrared, visible light, ultraviolet, X-rays and gamma rays. The table gives a typical wavelength for each region. The boundaries between regions are not sharp.

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
**Visible light** occupies a very small part of the spectrum, between about $400\,\mathrm{nm}$ (violet) and $700\,\mathrm{nm}$ (red). Violet therefore has a higher frequency than red.

X-rays and gamma rays are distinguished by their origin. **X-rays** are produced by electrons, for example when fast electrons are slowed down by a metal. **Gamma rays** are emitted by the nuclei of atoms. In general gamma rays have a higher frequency, but the frequency ranges of the two types partly overlap.

Each region interacts with matter differently, and medicine uses different regions for different purposes. Radio waves are used in magnetic resonance imaging, infrared measures skin temperature, visible light is used in endoscopy and X-rays in radiography, because they pass through soft tissue and are stopped to a greater extent by bone.
:::

## Photons: individual energy and the beam budget

:::osservazione{titolo="From quanta to power"}
An electromagnetic wave exchanges energy with matter in definite amounts, called **photons**. A beam of light of a single colour consists of photons all having the same energy. The energy of a photon depends only on frequency. The power of the beam also depends on how many photons arrive each second.
:::

:::definizione{#fotoni titolo="Photon energy and photon number"}
$$
E_\gamma=h\nu=\dfrac{hc}{\lambda_0},\qquad
h\simeq6.626\cdot10^{-34}\,\mathrm{J\,s}.
$$
This formula gives the energy $E_\gamma$ of a photon. The energy is proportional to frequency, and the constant $h$ is the **Planck constant**. Photon energies are tiny and are expressed in electronvolts, with $1\,\mathrm{eV}\simeq1.602\cdot10^{-19}\,\mathrm J$. With the energy in electronvolts and the wavelength in nanometres the formula becomes more convenient. Dividing the power $P$ of the beam by the energy of one photon gives the number of photons emitted each second, $\dot N_\gamma$, and multiplying by the time gives the total number $N_\gamma$:
$$
E_\gamma\,(\mathrm{eV})\simeq\dfrac{1240}{\lambda_0\,(\mathrm{nm})},\qquad
\dot N_\gamma=\dfrac P{E_\gamma},\qquad
N_\gamma=\dfrac{P\Delta t}{E_\gamma}
$$
The last two formulas hold if the power stays constant during the time $\Delta t$.
:::

:::osservazione{titolo="Comparing energies and photon rates"}
A photon of green light, with $\lambda_0=500\,\mathrm{nm}$, has energy $\dfrac{1240}{500}=2.48\,\mathrm{eV}$, that is, $2.48\cdot1.602\cdot10^{-19}\simeq3.97\cdot10^{-19}\,\mathrm J$. A $1.0\,\mathrm{mW}$ green laser therefore emits $\dfrac{1.0\cdot10^{-3}}{3.97\cdot10^{-19}}\simeq2.5\cdot10^{15}$ photons per second. Two rules follow from the formulas.

- If the power doubles and the colour stays the same, the number of photons per second doubles. The energy of each photon does not change.
- If the wavelength halves and the power stays the same, the energy of each photon doubles and the number of photons per second halves.

![Photon energy versus wavelength in vacuum, with a three-electronvolt threshold.](/figure/fisica-semestre-filtro/radiazioni-e-ottica/photon-energy-en.svg)

When light passes from air into a transparent material, the frequency stays the same. The energy of the photons, $h\nu$, therefore stays the same too. The speed and the wavelength change, and the wavelength in the material becomes $\dfrac{\lambda_0}{n}$. In the formula $E_\gamma=\dfrac{hc}{\lambda_0}$ the wavelength in a vacuum is always used.

Light made of several colours, such as white light, contains photons of different energies. The photon count is carried out separately for each colour.
:::

## Attenuation: fractions, exponentials and absorbance

:::osservazione{titolo="Meaning of fractional loss"}
A beam of radiation passing through a material weakens, because part of the photons is absorbed or deflected. This phenomenon is called **attenuation**. Each layer of material of the same thickness removes from the beam the same fraction of the intensity reaching it, and not the same amount. If the first centimetre lets half the beam through, the second lets through half of that half, that is, a quarter of the total. A quantity decreasing in this way follows an exponential law.
:::

:::teorema{#attenuazione titolo="Attenuation and the Beer–Lambert law"}
For a beam of a single colour passing through a thickness $x$ of a homogeneous material, intensity decreases according to the following law, in which $I_0$ is the initial intensity:
$$
\dfrac{dI}{dx}=-\mu I,\qquad I(x)=I_0e^{-\mu x},\qquad
\mathcal T=\dfrac I{I_0},\qquad x_{1/2}=\dfrac{\ln2}{\mu}.
$$
The constant $\mu$ is the **attenuation coefficient** of the material. It is measured in $\mathrm{m^{-1}}$ or $\mathrm{cm^{-1}}$ and is larger in materials that stop radiation more. The **transmittance** $\mathcal T$ is the fraction of the intensity passing through the material. The **half-value thickness** $x_{1/2}$ is the thickness that halves the intensity. For X-rays lead has a much smaller half-value thickness than water, and for this reason it is used for shielding.
:::

:::osservazione{titolo="From transmission data to concentration"}
Each half-value thickness halves the intensity. After two half-value thicknesses $\dfrac12\cdot\dfrac12=\dfrac14$ of the intensity remains, and after three $\dfrac18$ remains. A material with $\mu=0.20\,\mathrm{cm^{-1}}$ has a half-value thickness of $\dfrac{\ln2}{0.20}\simeq3.5\,\mathrm{cm}$. A $10\,\mathrm{cm}$ layer lets through the fraction $e^{-0.20\cdot10}=e^{-2}\simeq0.14$, that is, 14%. The coefficient is obtained from an intensity measurement with $\mu=\dfrac{\ln\!\left(\dfrac{I_0}{I}\right)}{x}$, where the logarithm is the natural one.

![Exponential transmission and its natural-logarithm representation.](/figure/fisica-semestre-filtro/radiazioni-e-ottica/attenuation-en.svg)

The same law is used in the laboratory to measure the concentration of a dissolved substance, with an instrument called a spectrophotometer. A beam of light is passed through the solution and the amount emerging is measured. The quantity used is the **absorbance** $\mathcal A$, defined with the base-10 logarithm. The **Beer-Lambert law** states that absorbance is proportional to concentration:
$$
\mathcal A=\log_{10}\dfrac{I_0}{I}=-\log_{10}\mathcal T
=\varepsilon c_s\ell.
$$
In the formula $c_s$ is the concentration of the substance, in $\mathrm{mol/L}$, $\ell$ is the length of the light path in the solution, in centimetres, and $\varepsilon$ is the molar absorption coefficient, which depends on the substance and on the colour of the light. Absorbance is a pure number. An absorbance of 1 means that $\dfrac{1}{10}$ of the light passes, that is, 10%. An absorbance of 2 means that $\dfrac{1}{100}$ passes, that is, 1%.

Since absorbance and concentration are proportional, a solution with double the absorbance has double the concentration. In practice the absorbance of the solvent alone in its container, called the blank, is measured first and subtracted. If light passes through two filters one after the other, the transmittances multiply and the absorbances add. Two filters each letting 10% through let 1% through together. The law holds for light of a single colour and for solutions that are not too concentrated.
:::

## What changes in nuclear decay

:::osservazione{titolo="Counting protons and nucleons"}
The nucleus of an atom is made of protons and neutrons, together called **nucleons**. Some nuclei are unstable: they spontaneously transform into another nucleus and emit radiation. This phenomenon is called **radioactivity**, or radioactive decay. Unlike a chemical reaction, which concerns electrons, a decay changes the nucleus and can transform one element into another.
:::

:::definizione{#decadimenti titolo="Nuclides, isotopes and transformations"}
A nucleus is written ${}^{A}_{Z}X$, where $X$ is the symbol of the element. The **atomic number** $Z$ is the number of protons and determines which element it is. The **mass number** $A$ is the total number of nucleons, so the neutrons number $A-Z$. Two **isotopes** are nuclei of the same element, that is, with the same $Z$, with a different number of neutrons, that is, with different $A$. Carbon-12 and carbon-14 are isotopes: the first is stable and the second is radioactive. There are four types of decay.

| Emission | Change in daughter nucleus | Essential balance |
| --- | --- | --- |
| Alpha | $A-4$, $Z-2$ | a ${}^{4}_{2}\mathrm{He}$ nucleus is emitted |
| Beta minus | unchanged $A$, $Z+1$ | $n\to p+e^-+\bar\nu_e$ |
| Beta plus | unchanged $A$, $Z-1$ | $p\to n+e^++\nu_e$ within the nucleus |
| Gamma | unchanged $A$ and $Z$ | the nucleus reaches a lower energy state |
:::

:::osservazione{titolo="Nuclear balances and rest mass"}
The table is read as follows.

- In **alpha** decay the nucleus emits an alpha particle, that is, a helium nucleus made of two protons and two neutrons. It therefore loses 4 nucleons, 2 of them protons.
- In **beta minus** decay a neutron of the nucleus turns into a proton, and an electron and an antineutrino are emitted. The number of nucleons stays the same and the protons increase by one. The emitted electron is created in the nucleus at the moment of the transformation and is not one of the electrons surrounding the nucleus.
- In **beta plus** decay a proton of the nucleus turns into a neutron, and a positron, that is, an electron with positive charge, and a neutrino are emitted. The protons decrease by one.
- In **gamma** decay the nucleus passes from a state with more energy to one with less energy and emits a gamma photon. The numbers of protons and neutrons do not change.

In every decay the total number of nucleons and the total charge are conserved. With these two rules the nucleus produced is found.

![Mass-number and atomic-number balance in an alpha and beta-minus chain, with a separate gamma transition.](/figure/fisica-semestre-filtro/radiazioni-e-ottica/nuclear-decays-en.svg)

Uranium-238, ${}^{238}_{92}\mathrm U$, for example, emits an alpha particle. The nucleus produced has $A=238-4=234$ and $Z=92-2=90$. The element with $Z=90$ is thorium, so the product is ${}^{234}_{90}\mathrm{Th}$. Thorium-234 then undergoes beta minus decay: $A$ stays 234 and $Z$ becomes 91. A second beta minus decay brings $Z$ to 92, which is uranium again, with $A=234$. The result is therefore uranium-234, an isotope of the starting uranium.

Alpha and beta particles have mass. Gamma radiation is an electromagnetic wave, that is, it is made of photons. The nucleus produced by a decay is often radioactive too, and the decays continue in a series, called a decay chain, down to a stable nucleus.
:::

## Half-life and probability: the exponential law

:::osservazione{titolo="Statistical decay predictions"}
The decay of a single nucleus is a random event: it is not possible to predict when it will happen. Every nucleus of a given type has the same probability of decaying in the next second, whatever time has already passed. A nucleus does not age. Over a large number of nuclei, however, the fraction decaying in a given time is predicted accurately. The time in which half the nuclei decay is called the **half-life** and is written $T_{1/2}$. Iodine-131, used in medicine, has a half-life of 8 days. Carbon-14 has a half-life of 5730 years.
:::

:::teorema{#decadimento-esponenziale titolo="Survival of an isolated radionuclide"}
If there are $N_0$ nuclei at the initial instant, after a time $t$ on average there remain:
$$
N(t)=N_0e^{-\lambda_d t}=N_0\,2^{-\dfrac{t}{T_{1/2}}},\qquad
T_{1/2}=\dfrac{\ln2}{\lambda_d}.
$$
The **decay constant** $\lambda_d$ is the probability that a nucleus decays in a unit of time. It is measured in $\mathrm{s^{-1}}$ and must not be confused with wavelength, which has a similar symbol. It is linked to the half-life by the second formula: a nucleus with a short half-life has a large decay constant. The two forms of the law are equivalent, and the one with the power of 2 is more convenient when the time is a multiple of the half-life. For a single nucleus the same expressions give the probabilities:
$$
P(\text{surviving until }t)=e^{-\lambda_d t},\qquad
P(\text{decaying by }t)=1-e^{-\lambda_d t}.
$$
:::

:::osservazione{titolo="Means, fluctuations and model limits"}
At each half-life the number of nuclei still present at that moment halves. After one half-life $\dfrac12$ of the initial nuclei remains, after two $\dfrac14$ and after three $\dfrac18$, while $\dfrac78$ have decayed. A sample of iodine-131 after 24 days, that is, three half-lives, contains one eighth of the initial nuclei. If the time is not a multiple of the half-life the formula is used. After one and a half half-lives the fraction $2^{-1.5}\simeq0.35$ remains.

![Mean surviving population and two possible discrete realizations for a small sample.](/figure/fisica-semestre-filtro/radiazioni-e-ottica/decay-statistics-en.svg)

The law gives the average value. In the figure the smooth curve is the average, and the stepped lines are two possible real behaviours of a small sample. From 100 nuclei, after one half-life, on average 50 remain, and in a single experiment for example 47 or 54 remain. With an enormous number of nuclei, as in a real sample, these differences are negligible. A nucleus that has already survived three half-lives still has probability $\dfrac12$ of surviving another half-life.

To find the time needed for a fraction $r$ of the nuclei to remain, the law is inverted, $t=-\dfrac{\ln r}{\lambda_d}$. In an organism a radioactive substance also decreases because it is eliminated, for example in urine. The amount present in the body then decreases faster than decay alone predicts.
:::

## Activity and detector counts

:::osservazione{titolo="Comparing radioactive samples"}
To describe how radioactive a sample is, the number of nuclei is not enough. What matters is the number of decays occurring each second, called **activity**. Two samples with the same number of nuclei have different activities if the half-lives are different: the one with the shorter half-life decays faster and has a higher activity.
:::

:::definizione{#attivita titolo="Mean decays per second"}
$$
\mathscr A(t)=-\dfrac{dN}{dt}=\lambda_dN(t)
=\mathscr A_0e^{-\lambda_d t},\qquad 1\,\mathrm{Bq}=1\,\mathrm{s^{-1}}.
$$
Activity $\mathscr A$ is the product of the decay constant and the number of nuclei present. It is measured in **becquerels**, and $1\,\mathrm{Bq}$ is one decay per second. Since it is proportional to the number of nuclei, activity decreases over time with the same exponential law and halves at each half-life. A sample of iodine-131 with an activity of $400\,\mathrm{MBq}$ has after 16 days, that is, two half-lives, an activity of $100\,\mathrm{MBq}$.
:::

:::osservazione{titolo="Populations, detectors and emitted energy"}
From the definition, substituting $\lambda_d=\dfrac{\ln2}{T_{1/2}}$, one obtains the number of nuclei corresponding to a given activity, $N=\dfrac{\mathscr A\,T_{1/2}}{\ln2}$. Two comparisons follow. For equal activity, the sample with the longer half-life contains more nuclei. For equal number of nuclei, the sample with the longer half-life has a lower activity.

![Activity-versus-population lines for two half-lives, showing equal activity at different populations.](/figure/fisica-semestre-filtro/radiazioni-e-ottica/activity-en.svg)

Activity is measured with a **detector**, which counts the radiation reaching it. The detector does not count all decays, for three reasons. Only a fraction $b$ of the decays emits the radiation the instrument detects. Only a fraction $\eta$ of this radiation, called the **efficiency**, reaches the instrument and is recorded. In addition the instrument records some counts even without a sample, due to the natural radioactivity of the environment, called the **background** $R_f$. The counts per second measured are therefore:
$$
R_{\mathrm{mis}}=\eta b\mathscr A+R_f.
$$
To obtain the activity from the measurement the background is first subtracted and then the result is divided by $\eta b$. A detector, for example, records 1300 counts in one minute, with a background of 100 counts per minute, efficiency $\eta=0.10$ and $b=1$. The counts due to the sample are $1300-100=1200$ per minute, that is, $\dfrac{1200}{60}=20$ per second. The activity is $\dfrac{20}{0.10}=200\,\mathrm{Bq}$.

The number of decays occurring in a time $t$ is $N_0-N(t)$. If $t$ is much shorter than the half-life the activity stays almost constant, and the number of decays is to a good approximation $\mathscr A_0t$. Activity indicates how many decays occur and not how much energy is emitted. Two samples with the same activity emit different energies if their radiations have different energies.
:::

## Ionization, deposited energy and dose

:::osservazione{titolo="Comparing photons with targets"}
**Ionisation** is the removal of an electron from an atom or a molecule. For each atom a minimum energy is needed, called the ionisation energy, of a few electronvolts. A photon ionises an atom only if its energy $h\nu$ is at least equal to this minimum energy. A photon with less energy does not ionise, and a larger number of photons of the same type does not change the result, because the energy of each stays the same.
:::

:::definizione{#ionizzazione titolo="Individual energy and absorbed dose"}
For this reason radiation falls into two groups.

- **Non-ionising radiation** has photons with too little energy to ionise. It comprises radio waves, microwaves, infrared and visible light.
- **Ionising radiation** has enough energy. It comprises X-rays, gamma rays and the higher-frequency ultraviolet, as well as alpha and beta particles.

Ionising radiation breaks chemical bonds and damages the molecules of cells, including DNA. The amount of radiation received by a material is measured by the **absorbed dose** $D$, that is, the energy the radiation gives up to the material divided by the mass of the material:
$$
D=\dfrac{E_{\mathrm{ass}}}{m},\qquad 1\,\mathrm{Gy}=1\,\mathrm{J/kg}.
$$
Dose is measured in **grays** (Gy). Only the energy absorbed by the material counts, and not the energy passing through without being absorbed. A tissue of mass $0.50\,\mathrm{kg}$ absorbing $1.0\,\mathrm J$ receives a dose of $\dfrac{1.0}{0.50}=2.0\,\mathrm{Gy}$.
:::

:::osservazione{titolo="From thresholds to energy deposition"}
An atom, for example, has an ionisation energy of $10\,\mathrm{eV}$. A photon has this energy if its wavelength is $\lambda_0=\dfrac{1240}{10}=124\,\mathrm{nm}$. A photon with a shorter wavelength has more energy. A $100\,\mathrm{nm}$ photon, with energy $12.4\,\mathrm{eV}$, therefore ionises the atom. A $200\,\mathrm{nm}$ photon, with energy $6.2\,\mathrm{eV}$, does not ionise it.

Alpha and beta particles ionise the atoms they meet along their path. Alpha particles give up all their energy over a very short distance and are stopped by a sheet of paper. Beta particles are stopped by a few millimetres of aluminium. Gamma rays are far more penetrating. Non-ionising radiation still has effects: microwaves and infrared heat tissues.

The three quantities of this part of the chapter answer three different questions. **Activity**, in becquerels, says how many decays occur each second in the source. **Photon energy**, in electronvolts, says whether the radiation is ionising. **Dose**, in grays, says how much energy has been absorbed per kilogram of tissue. Biological damage also depends on the type of radiation and on the tissue affected.
:::

## Reflection, refraction and total internal reflection

:::osservazione{titolo="The normal as a reference"}
**Geometrical optics** describes light with **rays**, that is, straight lines indicating the direction in which light advances. When a ray reaches the surface separating two transparent materials, for example air and water, part of the light goes back (**reflection**) and part enters the second material changing direction (**refraction**). All angles are measured relative to the **normal**, that is, the line perpendicular to the surface at the point where the ray arrives, and not relative to the surface.
:::

:::teorema{#snell titolo="Interface laws"}
The arriving (incident) ray, the reflected ray and the refracted ray lie in the same plane, together with the normal. If $\theta_i$ is the angle of incidence, $\theta_r$ the angle of reflection and $\theta_t$ the angle of refraction, the **law of reflection** and **Snell's law** for refraction hold:
$$
\theta_r=\theta_i,\qquad n_1\sin\theta_i=n_2\sin\theta_t,
\qquad v_i=\dfrac c{n_i}.
$$
The first law says that the angle of reflection equals the angle of incidence. In the second, $n_1$ and $n_2$ are the refractive indices of the two materials. The following rule results.

- If light passes into a material with a higher index, for example from air to glass, the ray bends towards the normal.
- If it passes into a material with a lower index, for example from glass to air, the ray bends away from the normal.

A ray arriving along the normal continues straight on. In the passage the frequency of the light stays the same, and the speed and wavelength change.
:::

:::osservazione{titolo="Angles, interfaces and guiding light"}
![Incident, reflected and refracted rays with angles measured from the normal.](/figure/fisica-semestre-filtro/radiazioni-e-ottica/snell-en.svg)

A ray passes from air ($n_1=1$) to glass ($n_2=1.5$) with angle of incidence $\theta_i=30^\circ$. From Snell's law, $1\cdot\sin30^\circ=1.5\cdot\sin\theta_t$, so $\sin\theta_t=\dfrac{0.5}{1.5}=\dfrac13$ and $\theta_t\simeq19.5^\circ$. The angle is smaller than the angle of incidence, because the ray enters a material with a higher index.

In the opposite passage, from a material with a higher index to one with a lower index, the angle of refraction is larger than the angle of incidence. As the angle of incidence increases, the angle of refraction reaches $90^\circ$, and the refracted ray runs along the surface. The angle of incidence at which this happens is the **critical angle** $\theta_c$. Setting $\theta_t=90^\circ$ in Snell's law gives:
$$
\theta_c=\arcsin\dfrac{n_2}{n_1}.
$$
For angles of incidence greater than the critical angle the refracted ray does not exist, and all the light is reflected. This phenomenon is called **total internal reflection**. It occurs only when light goes from a material with a higher index towards one with a lower index. From glass ($n_1=1.5$) to air the critical angle is $\arcsin\dfrac{1}{1.5}\simeq41.8^\circ$.

![Three incidences from glass to air: transmission, the critical angle and total internal reflection.](/figure/fisica-semestre-filtro/radiazioni-e-ottica/total-reflection-en.svg)

**Optical fibres** work by total internal reflection. A fibre is a thin glass thread made of a central part and a cladding with a lower refractive index. Light entering the central part strikes the wall at an angle greater than the critical angle, is totally reflected and continues in a zigzag along the fibre, even if the fibre is curved. The **endoscope** uses bundles of optical fibres to carry light inside the body and bring the image back out.
:::

## Thin lenses: image position, orientation and size

:::osservazione{titolo="Assumptions of the optical model"}
A **lens** is a transparent object with curved surfaces, which deflects rays by refraction. A **converging** lens, thicker at the centre than at the edges, brings to a point the rays arriving parallel to its axis. That point is the **focus**, and its distance from the lens is the **focal length** $f$. A **diverging** lens, thinner at the centre, spreads the rays apart. The following formulas hold for a thin lens, that is, one whose thickness is small compared with the distances involved, and for rays close to the axis.
:::

:::teorema{#lenti titolo="Sign convention and conjugate points"}
An object lies at distance $p$ from the lens. The lens forms an image of it at distance $q$. The **thin lens equation** links the three distances, and the **magnification** $M$ is the ratio of the image height $h_i$ to the object height $h_o$:
$$
\dfrac1f=\dfrac1p+\dfrac1q,\qquad
q=\dfrac{fp}{p-f},\qquad M=\dfrac{h_i}{h_o}=-\dfrac qp.
$$
The signs have a precise meaning.

- $f$ is positive for a converging lens and negative for a diverging one.
- $q$ is positive if the image forms on the side opposite the object. The image is **real**: the rays actually pass through it and it can be caught on a screen.
- $q$ is negative if the image forms on the same side as the object. The image is **virtual**: it is seen by looking through the lens and cannot be caught on a screen.
- $M$ is negative if the image is inverted and positive if it is upright. The image is magnified if $|M|>1$ and reduced if $|M|<1$.

The **power** of a lens is $\mathcal D=\dfrac1f$, with $f$ in metres. It is measured in **dioptres**. A lens with $f=0.50\,\mathrm m$ has a power of 2 dioptres. It is the quantity shown on spectacle prescriptions.
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

The image is constructed on the drawing with three rays starting from the tip of the object.

1. The ray parallel to the axis, after the lens, passes through the focus on the other side.
2. The ray passing through the centre of the lens continues straight on.
3. The ray passing through the focus on the object side, after the lens, emerges parallel to the axis.

The three rays meet at the tip of the image. With $f=10\,\mathrm{cm}$ and $p=30\,\mathrm{cm}$ the equation gives $\dfrac1q=\dfrac1{10}-\dfrac1{30}=\dfrac{2}{30}$, so $q=15\,\mathrm{cm}$. The magnification is $M=-\dfrac{15}{30}=-\dfrac12$. The image is real, inverted and half as tall as the object. This is the case of the eye and the camera.

![Diverging rays and backward extensions locate an upright virtual image.](/figure/fisica-semestre-filtro/radiazioni-e-ottica/lens-virtual-en.svg)

With the same lens and the object closer than the focus, $p=6\,\mathrm{cm}$, the equation gives $\dfrac1q=\dfrac1{10}-\dfrac16=-\dfrac{4}{60}$, so $q=-15\,\mathrm{cm}$. The magnification is $M=-\dfrac{-15}{6}=2.5$. The minus sign of $q$ indicates that the image is virtual and lies on the same side as the object. After the lens the rays spread apart, and only their backward extensions meet. The image is upright and magnified two and a half times. This is the case of the magnifying glass. When the object is very close to the focus, $p-f$ is small and a small change in $p$ changes $q$ greatly.
:::
