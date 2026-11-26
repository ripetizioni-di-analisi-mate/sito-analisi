---
titolo: The Bohr atom, matter waves, and the uncertainty principle
sommario: How line spectra and Rutherford’s experiment led to the Bohr model, how the orbital radii and energy levels of hydrogen are derived, what de Broglie matter waves are, what Heisenberg’s uncertainty principle states, and how the energy levels of a particle in a box are calculated.
---

## Atomic spectra and the Rydberg formula

:::definizione{#spettro-emissione-assorbimento titolo="Emission and absorption spectra"}
Light emitted by a low-density gas excited by an electric discharge or by heating can be separated into its component wavelengths with a prism or a diffraction grating. This produces an **emission line spectrum**, a set of separate bright lines, each with a definite wavelength. If white light, which contains all wavelengths, instead passes through the same gas while it is cool, dark lines appear in the continuous spectrum. This is the **absorption spectrum**, and its dark lines occur at the same wavelengths as the emission lines.

Each chemical element has its own set of lines, so its spectrum can identify the elements present in a gas, even in a distant star. For example, hydrogen emits four visible lines, with wavelengths $656\,\mathrm{nm}$ (red), $486\,\mathrm{nm}$ (blue), and $434\,\mathrm{nm}$ and $410\,\mathrm{nm}$ (violet).

::grafico{assi=0 uguale=1 poligoni="3.4,0 7.2,0 7.2,1 3.4,1" linee="6.563,0 6.563,1;4.861,0 4.861,1;4.341,0 4.341,1;4.102,0 4.102,1;4,0 4,-0.12;5,0 5,-0.12;6,0 6,-0.12;7,0 7,-0.12" segmenti="3.646,0,3.646,1" etichette="6.45,1.2,Hα;4.75,1.2,Hβ;4.25,1.2,Hγ;3.95,1.45,Hδ;3.45,1.2,limit;3.7,-0.42,400 nm;4.7,-0.42,500 nm;5.7,-0.42,600 nm;6.7,-0.42,700 nm" xmin=3.2 xmax=7.4 ymin=-0.7 ymax=1.7 titolo="Lines of the hydrogen Balmer series at $656.3\,\mathrm{nm}$, $486.1\,\mathrm{nm}$, $434.1\,\mathrm{nm}$, and $410.2\,\mathrm{nm}$. The lines become more closely spaced near the series limit at $364.6\,\mathrm{nm}$ (dashed line)"}

:::

:::teorema{#formula-di-rydberg titolo="Rydberg formula"}
The wavelengths $\lambda$ of the lines in the hydrogen spectrum satisfy the relation
$$
\frac{1}{\lambda} = R_H \left( \frac{1}{n_f^2} - \frac{1}{n_i^2} \right) ,
$$
where $n_f$ and $n_i$ are positive integers with $n_i > n_f \geq 1$, and $R_H = 1.097 \cdot 10^{7}\,\mathrm{m^{-1}}$ is the **Rydberg constant**. This empirical law was found by looking for a pattern in the measured values. It can be derived from the Bohr model.

The visible lines are obtained with $n_f = 2$ and belong to the **Balmer series**. For example, with $n_i = 3$ we obtain
$$
\frac{1}{\lambda} = 1.097 \cdot 10^{7} \left( \frac{1}{4} - \frac{1}{9} \right) \mathrm{m^{-1}} = 1.524 \cdot 10^{6}\,\mathrm{m^{-1}} ,
\qquad
\lambda = 656.3\,\mathrm{nm} ,
$$
which is the red $\mathrm{H}_\alpha$ line.
:::

:::osservazione{#serie-spettrali titolo="Spectral series of hydrogen"}
Lines with the same value of $n_f$ form a **series**.

- For $n_f = 1$, we obtain the Lyman series in the ultraviolet. Its first line, with $n_i = 2$, has $\lambda = 121.5\,\mathrm{nm}$.
- For $n_f = 2$, we obtain the Balmer series in the visible and near-ultraviolet regions.
- For $n_f = 3$, we obtain the Paschen series in the infrared. Its first line, with $n_i = 4$, has $\lambda = 1875\,\mathrm{nm}$.

As $n_i$ increases, the term $\dfrac{1}{n_i^2}$ approaches $0$, so the lines in a series approach a limiting wavelength $\lambda_\infty = \dfrac{n_f^2}{R_H}$. For the Balmer series, the limit is $\lambda_\infty = \dfrac{4}{1.097 \cdot 10^{7}}\,\mathrm{m} = 364.6\,\mathrm{nm}$.
:::

## From the Thomson model to Rutherford’s nucleus

:::osservazione{#modello-di-thomson titolo="Thomson’s atomic model"}
After the discovery of the electron, Thomson proposed that the atom was a sphere of uniformly distributed positive charge, with a radius of about $10^{-10}\,\mathrm{m}$ and electrons embedded inside it. The atom is neutral, so the total positive charge equals the magnitude of the charge of the electrons. In this model, the positive charge is spread throughout the atom’s volume. The electric field inside is therefore weak, and a fast charged particle would pass through with very little deflection.
:::

:::osservazione{#esperimento-di-rutherford titolo="Rutherford’s experiment"}
In the experiment of Geiger, Marsden, and Rutherford, a beam of $\alpha$ particles, which are helium nuclei with charge $+2e$ and kinetic energies of a few $\mathrm{MeV}$, strikes a very thin gold foil. A fluorescent screen records the direction in which the particles emerge. The measurements show that almost all particles pass straight through, but some are deflected through large angles and a tiny fraction travel back toward the source.

Thomson’s model cannot explain large deflections because its electric field is too weak. Rutherford concluded that the positive charge and nearly all the mass of an atom are concentrated in a very small central region, the **nucleus**. The electrons occupy the nearly empty space around it. An $\alpha$ particle passing close to the nucleus experiences a strong electric repulsion and is deflected along one branch of a hyperbola.

::grafico{assi=0 uguale=1 linee="-7.5,0.25 -4.84,0.25 -2.62,0.26 -1.65,0.28 -1.25,0.30 -0.95,0.36 -0.82,0.47 -0.85,0.68 -1.01,0.98 -1.36,1.54 -1.77,2.18 -2.22,2.86 -2.69,3.56 -3.17,4.28;-7.5,0.8 -4.84,0.81 -2.61,0.84 -1.62,0.89 -1.19,0.95 -0.81,1.06 -0.5,1.25 -0.22,1.53 0.05,1.88 0.45,2.5 0.86,3.18 1.28,3.9 1.56,4.4;-7.5,2 -4.84,2.01 -2.85,2.06 -1.77,2.13 -1.0,2.22 -0.26,2.38 0.47,2.61 1.21,2.89 1.97,3.21 2.74,3.56 3.53,3.92 4.32,4.29 4.86,4.54;-7.5,-2 -4.84,-2.01 -2.85,-2.06 -1.77,-2.13 -1.0,-2.22 -0.26,-2.38 0.47,-2.61 1.21,-2.89 1.97,-3.21 2.74,-3.56 3.53,-3.92 4.32,-4.29 4.86,-4.54" vettori="-7.5,-3.6,-5.5,-3.6,α" punti="0,0,pieno,nucleus" xmin=-8 xmax=6 ymin=-4.8 ymax=4.8 titolo="Paths of $\alpha$ particles repelled by a nucleus. The closer the particle passes to the nucleus, the greater the deflection angle"}

:::

:::richiamo{titolo="Electric potential energy of two point charges"}
Two point charges $q_1$ and $q_2$ a distance $r$ apart in a vacuum have electric potential energy $U = \dfrac{1}{4\pi\varepsilon_0} \dfrac{q_1 q_2}{r}$, with $\dfrac{1}{4\pi\varepsilon_0} = 8.99 \cdot 10^{9}\,\mathrm{N\cdot m^2/C^2}$. They attract or repel each other with a force of magnitude $F = \dfrac{1}{4\pi\varepsilon_0} \dfrac{|q_1 q_2|}{r^2}$ (Coulomb’s law).
:::

:::esempio{titolo="Estimating the size of the nucleus"}
An $\alpha$ particle with kinetic energy $K = 5.0\,\mathrm{MeV}$ moves directly toward a gold nucleus of charge $Ze$ with $Z = 79$. The nucleus is much heavier than the particle and is treated as stationary. The particle slows down, comes to rest at its closest distance $d$, and turns back. By conservation of energy, the initial kinetic energy equals the electric potential energy at the turning point, so
$$
K = \frac{1}{4\pi\varepsilon_0} \frac{2e \cdot Ze}{d}
\qquad \Longrightarrow \qquad
d = \frac{1}{4\pi\varepsilon_0} \frac{2 Z e^2}{K} = 8.99 \cdot 10^{9} \cdot \frac{2 \cdot 79 \cdot \left( 1.60 \cdot 10^{-19} \right)^2}{5.0 \cdot 1.60 \cdot 10^{-13}}\,\mathrm{m} \approx 4.5 \cdot 10^{-14}\,\mathrm{m} ,
$$
where $1\,\mathrm{MeV} = 1.60 \cdot 10^{-13}\,\mathrm{J}$. The particle comes within $4.5 \cdot 10^{-14}\,\mathrm{m}$ without touching the nucleus. The gold nucleus must therefore have a radius smaller than this distance, which is already about one two-thousandth of the atomic radius.
:::

:::osservazione{#instabilita-modello-planetario titolo="Instability of the planetary model"}
In Rutherford’s model, electrons orbit the nucleus under the attractive Coulomb force, just as planets orbit the Sun. An electron in circular motion has centripetal acceleration, and classical electromagnetism predicts that an accelerated charge emits electromagnetic waves, as discussed in the chapter on Maxwell’s equations. The electron should therefore lose energy continuously, spiral inward, and fall into the nucleus in a time of order $10^{-11}\,\mathrm{s}$, emitting a continuous spectrum as it falls. Atoms are stable and emit line spectra, so the classical planetary model conflicts with experiment.
:::

## Bohr model of the hydrogen atom

:::teorema{#postulati-di-bohr titolo="Bohr’s postulates"}
In 1913, Bohr described the hydrogen atom, consisting of one proton and one electron, using three postulates.

1. The electron moves in circular orbits around the nucleus under the Coulomb force. Only certain orbits, called **stationary states**, are allowed. In these states the electron does *not* radiate and its energy remains constant.
2. The allowed orbits are those for which the product of mass, speed, and radius is an integer multiple of $\dfrac{h}{2\pi}$, that is, $m_e v r = n \dfrac{h}{2\pi}$ with $n = 1, 2, 3, \ldots$. The positive integer $n$ is called the **principal quantum number**.
3. The atom emits or absorbs radiation only when the electron moves from one allowed orbit to another. If the electron moves from an energy level $E_i$ to a lower level $E_f$, the atom emits a photon of frequency $f$ such that $h f = E_i - E_f$.

Bohr chose these postulates to explain the stability of atoms and their line spectra. Their predictions can be tested against measurements. The second postulate fixes the radii and energies of the orbits. The third relates those energies to the frequencies of the spectral lines. For example, an electron dropping between two levels that differ by $1.89\,\mathrm{eV}$ emits a photon of frequency $f = \dfrac{1.89 \cdot 1.60 \cdot 10^{-19}}{6.63 \cdot 10^{-34}}\,\mathrm{Hz} \approx 4.56 \cdot 10^{14}\,\mathrm{Hz}$.
:::

:::richiamo{titolo="Uniform circular motion"}
An object of mass $m$ moving on a circle of radius $r$ with constant speed $v$ has centripetal acceleration $a = \dfrac{v^2}{r}$, directed toward the center. By Newton’s second law, the net force on the object points toward the center and has magnitude $F = \dfrac{m v^2}{r}$.
:::

::::teorema{#raggi-orbite-bohr titolo="Radii and speeds of Bohr orbits"}
In the Bohr model, the radius and speed for an orbit of quantum number $n$ are
$$
r_n = n^2 r_1 ,
\qquad
r_1 = \frac{\varepsilon_0 h^2}{\pi m_e e^2} \approx 5.3 \cdot 10^{-11}\,\mathrm{m} ,
\qquad
v_n = \frac{e^2}{2 \varepsilon_0 h\, n} = \frac{v_1}{n} ,
\qquad
v_1 \approx 2.2 \cdot 10^{6}\,\mathrm{m/s} .
$$
The radius $r_1$ of the smallest orbit is called the **Bohr radius**. Its value agrees with atomic dimensions obtained by other methods. The radii increase as the squares of the positive integers, so $r_2 = 4 r_1 \approx 2.1 \cdot 10^{-10}\,\mathrm{m}$ and $r_3 = 9 r_1 \approx 4.8 \cdot 10^{-10}\,\mathrm{m}$. The speed $v_1$ is approximately $\dfrac{1}{137}$ of the speed of light, so $v \ll c$ and the use of classical mechanics is justified.

::grafico{assi=0 uguale=1 curve="0.5*cos(t),0.5*sin(t),0,6.29;2*cos(t),2*sin(t),0,6.29;4.5*cos(t),4.5*sin(t),0,6.29" vettori="0,4.5,0,2.1,hf" punti="0,0,pieno" etichette="0.35,0.55,n = 1;1.5,1.75,n = 2;3.3,3.35,n = 3" xmin=-5 xmax=5 ymin=-5 ymax=5 legenda=0 titolo="The first three Bohr orbits have radii $r_1$, $4 r_1$, and $9 r_1$. The arrow indicates a transition from orbit $n = 3$ to orbit $n = 2$ in which a photon is emitted"}

:::dimostrazione
Combine the equation of circular motion, with the Coulomb force providing the centripetal force, and the condition imposed by the second postulate. The force exerted by the proton on the electron has magnitude $\dfrac{1}{4\pi\varepsilon_0} \dfrac{e^2}{r^2}$ and points toward the proton, so
$$
\begin{cases}
\dfrac{1}{4\pi\varepsilon_0} \dfrac{e^2}{r^2} = \dfrac{m_e v^2}{r} \\[12pt]
m_e v r = n \dfrac{h}{2\pi}
\end{cases}
$$
Multiplying the first equation by $r$ gives $m_e v^2 = \dfrac{e^2}{4\pi\varepsilon_0 r}$. The second equation gives $v = \dfrac{n h}{2\pi m_e r}$, and substitution yields
$$
m_e \cdot \frac{n^2 h^2}{4\pi^2 m_e^2 r^2} = \frac{e^2}{4\pi\varepsilon_0 r}
\qquad \Longrightarrow \qquad
\frac{n^2 h^2}{\pi m_e r} = \frac{e^2}{\varepsilon_0} ,
$$
where both sides have been multiplied by $4\pi r$. Solving for $r$ gives
$$
r_n = \frac{\varepsilon_0 h^2}{\pi m_e e^2}\, n^2 .
$$
Finally, $v_n = \dfrac{n h}{2\pi m_e r_n} = \dfrac{n h}{2\pi m_e} \cdot \dfrac{\pi m_e e^2}{\varepsilon_0 h^2 n^2} = \dfrac{e^2}{2 \varepsilon_0 h\, n}$. Substituting the values of the constants gives
$$
r_1 = \frac{8.85 \cdot 10^{-12} \cdot \left( 6.63 \cdot 10^{-34} \right)^2}{\pi \cdot 9.11 \cdot 10^{-31} \cdot \left( 1.60 \cdot 10^{-19} \right)^2}\,\mathrm{m} \approx 5.3 \cdot 10^{-11}\,\mathrm{m} ,
\qquad
v_1 = \frac{\left( 1.60 \cdot 10^{-19} \right)^2}{2 \cdot 8.85 \cdot 10^{-12} \cdot 6.63 \cdot 10^{-34}}\,\mathrm{m/s} \approx 2.2 \cdot 10^{6}\,\mathrm{m/s} .
$$
:::
::::

::::teorema{#livelli-energia-idrogeno titolo="Energy levels of the hydrogen atom"}
In the Bohr model, the total energy of an electron in an orbit with quantum number $n$ is
$$
E_n = -\frac{m_e e^4}{8 \varepsilon_0^2 h^2} \cdot \frac{1}{n^2} = -\frac{13.6\,\mathrm{eV}}{n^2} .
$$
Energy can take only these values, called **energy levels**, so the energy is said to be **quantized**. The lowest level, $E_1 = -13.6\,\mathrm{eV}$, is the **ground state**. The others are excited states. The energy is negative because the electron is bound to the proton. Zero corresponds to an electron at rest infinitely far away. For example, $E_2 = -\dfrac{13.6}{4}\,\mathrm{eV} = -3.40\,\mathrm{eV}$ and $E_3 = -\dfrac{13.6}{9}\,\mathrm{eV} \approx -1.51\,\mathrm{eV}$. The derivation also gives $K_n = -E_n$ and $U_n = 2 E_n$ for the kinetic and potential energies. In the ground state, $K_1 = 13.6\,\mathrm{eV}$ and $U_1 = -27.2\,\mathrm{eV}$.

:::dimostrazione
The total energy is the sum of the electron’s kinetic energy and the electric potential energy of the proton–electron system, whose charges are $+e$ and $-e$:
$$
E = \frac{1}{2} m_e v^2 - \frac{1}{4\pi\varepsilon_0} \frac{e^2}{r} .
$$
The equation of circular motion used in deriving the orbital radii gives $m_e v^2 = \dfrac{e^2}{4\pi\varepsilon_0 r}$. The kinetic energy is therefore $K = \dfrac{1}{2} \cdot \dfrac{e^2}{4\pi\varepsilon_0 r}$, half the magnitude of the potential energy. Hence
$$
E = \frac{e^2}{8\pi\varepsilon_0 r} - \frac{e^2}{4\pi\varepsilon_0 r} = -\frac{e^2}{8\pi\varepsilon_0 r} .
$$
It follows that $K = -E$ and $U = 2E$. Substituting the radius $r_n = \dfrac{\varepsilon_0 h^2 n^2}{\pi m_e e^2}$ gives
$$
E_n = -\frac{e^2}{8\pi\varepsilon_0} \cdot \frac{\pi m_e e^2}{\varepsilon_0 h^2 n^2} = -\frac{m_e e^4}{8 \varepsilon_0^2 h^2 n^2} .
$$
Substituting the values of the constants gives $\dfrac{m_e e^4}{8 \varepsilon_0^2 h^2} \approx 2.17 \cdot 10^{-18}\,\mathrm{J}$, or approximately $13.5\,\mathrm{eV}$. Using more digits for the constants gives $13.6\,\mathrm{eV}$, which is also the measured value. The small difference thus results entirely from rounding the constants to three significant figures. We use $13.6\,\mathrm{eV}$ in calculations.
:::
::::

## Transitions, spectral lines, and ionization

:::teorema{#transizioni-righe-spettrali titolo="Photon emission and absorption in transitions"}
When the electron moves from one energy level to another, it undergoes a **transition**. By Bohr’s third postulate and the expression for hydrogen’s energy levels, the atom emits a photon when the electron drops from level $n_i$ to level $n_f < n_i$. The photon has energy
$$
E_{\text{photon}} = h f = \frac{h c}{\lambda} = E_{n_i} - E_{n_f} = 13.6\,\mathrm{eV} \left( \frac{1}{n_f^2} - \frac{1}{n_i^2} \right) .
$$
Conversely, the atom absorbs a photon only if its energy equals the difference between two levels, in which case the electron moves to the higher level. This is why the absorption lines coincide with the emission lines.

In the transition from $n_i = 3$ to $n_f = 2$, the emitted photon has energy $13.6 \left( \dfrac{1}{4} - \dfrac{1}{9} \right) \mathrm{eV} \approx 1.89\,\mathrm{eV}$ and wavelength
$$
\lambda = \frac{h c}{E_{\text{photon}}} = \frac{6.63 \cdot 10^{-34} \cdot 3.00 \cdot 10^{8}}{1.89 \cdot 1.60 \cdot 10^{-19}}\,\mathrm{m} \approx 658\,\mathrm{nm} ,
$$
which agrees to within $0.3\%$ with the measured wavelength of the $\mathrm{H}_\alpha$ line, $656.3\,\mathrm{nm}$.

::grafico{assi=0 linee="1,-13.6 9,-13.6;1,-3.4 9,-3.4;1,-1.51 9,-1.51;1,-0.85 9,-0.85;1,-0.544 9,-0.544;1,0 9,0" unicolore=1 vettori="2,-3.4,2,-13.6;3,-1.51,3,-13.6;4,-0.85,4,-13.6;6,-1.51,6,-3.4;7,-0.85,7,-3.4;8,-0.544,8,-3.4" etichette="4.4,-8.5,Lyman;6.1,-4.6,Balmer;9.2,-13.8,n = 1   −13.6 eV;9.2,-3.6,n = 2   −3.40 eV;9.2,-1.75,n = 3   −1.51 eV;9.2,-0.95,n = 4;9.2,0.25,E = 0" xmin=0 xmax=12.5 ymin=-14.5 ymax=1 titolo="Energy levels of the hydrogen atom. Transitions ending at $n = 1$ form the Lyman series, and those ending at $n = 2$ form the Balmer series"}

:::

:::definizione{#energia-di-ionizzazione titolo="Ionization energy"}
The **ionization energy** of an atom is the minimum energy that must be supplied to the electron to remove it to an infinite distance, that is, to take it from its current level to energy $E = 0$. For a hydrogen atom in its ground state, this energy is
$$
E_{\text{ion}} = 0 - E_1 = 13.6\,\mathrm{eV} ,
$$
in agreement with the measured value. From level $n$ the ionization energy is $\dfrac{13.6\,\mathrm{eV}}{n^2}$. From level $n = 2$ it is $3.40\,\mathrm{eV}$, which corresponds to a photon of wavelength $\lambda = \dfrac{h c}{3.40\,\mathrm{eV}} \approx 366\,\mathrm{nm}$, close to the limit of the Balmer series. If the supplied energy exceeds the ionization energy, the difference becomes kinetic energy of the freed electron.
:::

::::teorema{#formula-rydberg-ricavata titolo="Deriving the Rydberg formula from the Bohr model"}
The Bohr model gives the Rydberg formula, with the constant
$$
R_H = \frac{m_e e^4}{8 \varepsilon_0^2 h^3 c} .
$$
Using rounded values for the constants gives $R_H \approx 1.09 \cdot 10^{7}\,\mathrm{m^{-1}}$, in agreement with the measured value $1.097 \cdot 10^{7}\,\mathrm{m^{-1}}$. As with the energy levels, the difference is due to rounding the constants, and the measured value is used in calculations. This agreement, obtained from $m_e$, $e$, $\varepsilon_0$, $h$, and $c$ alone, was the chief experimental confirmation of the model. The model also explains the numbers $n_i$ and $n_f$ as the quantum numbers of the initial and final levels.

:::dimostrazione
In a transition from $n_i$ to $n_f < n_i$, the emitted photon has energy $\dfrac{h c}{\lambda} = E_{n_i} - E_{n_f}$. The expression for the energy levels gives
$$
\frac{h c}{\lambda} = -\frac{m_e e^4}{8 \varepsilon_0^2 h^2 n_i^2} + \frac{m_e e^4}{8 \varepsilon_0^2 h^2 n_f^2} = \frac{m_e e^4}{8 \varepsilon_0^2 h^2} \left( \frac{1}{n_f^2} - \frac{1}{n_i^2} \right) .
$$
Dividing both sides by $h c$ gives
$$
\frac{1}{\lambda} = \frac{m_e e^4}{8 \varepsilon_0^2 h^3 c} \left( \frac{1}{n_f^2} - \frac{1}{n_i^2} \right) ,
$$
which is the Rydberg formula with the constant given above.
:::
::::

:::osservazione{#esperimento-franck-hertz titolo="Franck–Hertz experiment"}
In 1914, Franck and Hertz accelerated electrons through a tube containing mercury vapor and measured the current reaching the collecting electrode as they varied the accelerating voltage. The current increases with voltage but drops sharply each time the voltage increases by about $4.9\,\mathrm{V}$. An electron with kinetic energy below $4.9\,\mathrm{eV}$ collides with mercury atoms without losing energy. When its energy reaches $4.9\,\mathrm{eV}$, it transfers this energy to an atom, raising it to its first excited state. At the same time, the vapor emits ultraviolet radiation of wavelength
$$
\lambda = \frac{h c}{4.9\,\mathrm{eV}} = \frac{6.63 \cdot 10^{-34} \cdot 3.00 \cdot 10^{8}}{4.9 \cdot 1.60 \cdot 10^{-19}}\,\mathrm{m} \approx 254\,\mathrm{nm} ,
$$
emitted by atoms returning to the ground state. Without using light to excite the atoms, the experiment confirms that they absorb energy only in discrete amounts.
:::

## Matter waves

:::richiamo{titolo="Energy and momentum of a photon"}
A photon of frequency $f$ and wavelength $\lambda$ has energy $E = h f$ and momentum of magnitude $p = \dfrac{h}{\lambda}$. See the chapter on blackbody radiation, the photoelectric effect, and the Compton effect.
:::

:::teorema{#ipotesi-di-de-broglie titolo="De Broglie’s hypothesis"}
In 1924, de Broglie proposed that wave–particle duality also applies to material particles. A particle with momentum of magnitude $p$ is associated with a wave, called a **matter wave**, of wavelength
$$
\lambda = \frac{h}{p} .
$$
The Davisson–Germer experiment confirmed this hypothesis. At speeds much smaller than $c$, $p = m v$. The de Broglie wavelength determines whether wave effects are observable. Such effects appear when the particle interacts with objects whose dimensions are comparable to $\lambda$. For an electron moving at speed $v = 1.0 \cdot 10^{6}\,\mathrm{m/s}$, we obtain
$$
\lambda = \frac{h}{m_e v} = \frac{6.63 \cdot 10^{-34}}{9.11 \cdot 10^{-31} \cdot 1.0 \cdot 10^{6}}\,\mathrm{m} \approx 7.3 \cdot 10^{-10}\,\mathrm{m} ,
$$
which is of the order of the distance between atoms in a crystal.
:::

:::esempio{titolo="Accelerated electrons and macroscopic objects"}
An electron initially at rest is accelerated through a potential difference $V = 100\,\mathrm{V}$. It gains kinetic energy $K = eV$, and since $K = \dfrac{p^2}{2 m_e}$ its momentum is $p = \sqrt{2 m_e e V}$. Thus
$$
\lambda = \frac{h}{\sqrt{2 m_e e V}} = \frac{6.63 \cdot 10^{-34}}{\sqrt{2 \cdot 9.11 \cdot 10^{-31} \cdot 1.60 \cdot 10^{-19} \cdot 100}}\,\mathrm{m} \approx 1.23 \cdot 10^{-10}\,\mathrm{m} = 0.123\,\mathrm{nm} .
$$
For a tennis ball of mass $0.15\,\mathrm{kg}$ traveling at $30\,\mathrm{m/s}$, however,
$$
\lambda = \frac{6.63 \cdot 10^{-34}}{0.15 \cdot 30}\,\mathrm{m} \approx 1.5 \cdot 10^{-34}\,\mathrm{m} ,
$$
a value far smaller than the dimensions of any object with which the ball can interact. This is why wave effects are not observed for macroscopic objects.
:::

::::teorema{#onde-stazionarie-bohr titolo="Bohr orbits and standing waves"}
The condition in Bohr’s second postulate, $m_e v r = n \dfrac{h}{2\pi}$, is equivalent to requiring that the circumference of the orbit contain an integer number of de Broglie wavelengths of the electron:
$$
2\pi r_n = n \lambda_n .
$$
The wave associated with the electron matches up with itself after one full turn without destructive interference. It forms a **standing wave**, like that on a vibrating string closed into a ring. The allowed orbits are therefore those on which the electron wave is a standing wave. For example, on orbit $n = 1$ we have $\lambda_1 = 2\pi r_1 \approx 2\pi \cdot 5.3 \cdot 10^{-11}\,\mathrm{m} \approx 3.3 \cdot 10^{-10}\,\mathrm{m}$.

::grafico{assi=0 uguale=1 curve="(3+0.45*sin(4*t))*cos(t),(3+0.45*sin(4*t))*sin(t),0,6.29;3*cos(t),3*sin(t),0,6.29" punti="0,0,pieno" xmin=-4 xmax=4 ymin=-4 ymax=4 legenda="\text{de Broglie wave};\text{orbit } r_4" titolo="Standing wave on orbit $n = 4$. The circumference contains exactly four de Broglie wavelengths"}

:::dimostrazione
By de Broglie’s hypothesis, an electron of speed $v_n$ has wavelength $\lambda_n = \dfrac{h}{m_e v_n}$ because $v_n \ll c$. The condition $2\pi r_n = n \lambda_n$ therefore becomes
$$
2\pi r_n = n \frac{h}{m_e v_n} .
$$
Multiplying both sides by $\dfrac{m_e v_n}{2\pi}$ gives $m_e v_n r_n = n \dfrac{h}{2\pi}$, the condition in the second postulate. The same steps can be taken in reverse, so the two conditions are equivalent.
:::
::::

:::richiamo{titolo="Diffraction grating"}
If a plane wave of wavelength $\lambda$ is normally incident on a row of equally spaced slits or scattering centers, with spacing $d$ between neighbors, the scattered waves interfere constructively in directions making an angle $\theta$ with the normal such that
$$
d \sin\theta = k \lambda , \qquad k = 1, 2, \ldots
$$
:::

:::osservazione{#esperimento-davisson-germer titolo="Davisson–Germer experiment"}
In 1927, Davisson and Germer directed a beam of electrons accelerated through a voltage of $54\,\mathrm{V}$ normally onto the surface of a nickel crystal and measured how many electrons were scattered in different directions. They observed a sharp maximum at an angle $\theta = 50^\circ$ to the surface normal. The surface atoms form rows with spacing $d = 0.215\,\mathrm{nm}$ and act as a diffraction grating. The first maximum therefore corresponds to
$$
\lambda = d \sin\theta = 0.215 \cdot \sin 50^\circ\,\mathrm{nm} \approx 0.165\,\mathrm{nm} .
$$
The de Broglie wavelength of the electrons accelerated through $54\,\mathrm{eV}$ is
$$
\lambda = \frac{h}{\sqrt{2 m_e e V}} = \frac{6.63 \cdot 10^{-34}}{\sqrt{2 \cdot 9.11 \cdot 10^{-31} \cdot 1.60 \cdot 10^{-19} \cdot 54}}\,\mathrm{m} \approx 0.167\,\mathrm{nm} ,
$$
in agreement with the measured value. Electrons therefore produce a diffraction pattern, as waves do. This confirmed de Broglie’s hypothesis experimentally. Electron diffraction underlies the electron microscope, which resolves much smaller details than can be seen with light because it uses much shorter wavelengths.

::grafico{assi=0 uguale=1 unicolore=1 linee="-1,0 7,0" vettori="2,4,2,0.15;4,4,4,0.15;2,0,4.45,2.06;4,0,6.45,2.06" segmenti="2,0.15,2,3.2;4,0,3.17,0.985" punti="0,0,pieno;2,0,pieno;4,0,pieno;6,0,pieno" etichette="2.2,2.7,θ;2.9,-0.45,d;2.55,0.12,d sin θ;1.2,3.5,e⁻" xmin=-1.5 xmax=7.5 ymin=-1.2 ymax=4.4 titolo="Electrons normally incident on a row of atoms spaced $d$ apart. Waves scattered by neighboring atoms at angle $\theta$ have a path difference $d \sin\theta$"}

:::

## Uncertainty principle

:::teorema{#indeterminazione-posizione titolo="Uncertainty principle for position and momentum"}
The position $x$ of a particle and the component $p_x$ of its momentum in the same direction cannot both be measured with arbitrary precision. If $\Delta x$ and $\Delta p_x$ are the uncertainties in these two quantities, then
$$
\Delta x \cdot \Delta p_x \geq \frac{h}{4\pi} .
$$
This is **Heisenberg’s uncertainty principle** (1927), a principle of quantum mechanics consistent with all experimental tests. The uncertainty is a property of nature related to the wave character of particles and persists even with ideal instruments. The bound applies to the product of the two uncertainties, so the smaller $\Delta x$ becomes, the larger $\Delta p_x$ must be.

An electron in an atom is confined to a region roughly $\Delta x = 1.0 \cdot 10^{-10}\,\mathrm{m}$ across. Then
$$
\Delta p_x \geq \frac{6.63 \cdot 10^{-34}}{4\pi \cdot 1.0 \cdot 10^{-10}}\,\mathrm{kg\cdot m/s} \approx 5.3 \cdot 10^{-25}\,\mathrm{kg\cdot m/s} ,
\qquad
\Delta v_x = \frac{\Delta p_x}{m_e} \geq 5.8 \cdot 10^{5}\,\mathrm{m/s} .
$$
The minimum uncertainty in this component of velocity is about one-quarter of the speed $v_1 \approx 2.2 \cdot 10^{6}\,\mathrm{m/s}$ in the Bohr orbit. Thus an electron in an atom does not follow a precise trajectory, and quantum mechanics replaces Bohr orbits with a probabilistic description.
:::

:::esempio{titolo="The uncertainty principle for a macroscopic object"}
A grain of mass $m = 1.0 \cdot 10^{-3}\,\mathrm{kg}$ has a position known with uncertainty $\Delta x = 1.0\,\mu\mathrm{m}$. The minimum uncertainty in its velocity is
$$
\Delta v_x = \frac{h}{4\pi\, m\, \Delta x} = \frac{6.63 \cdot 10^{-34}}{4\pi \cdot 1.0 \cdot 10^{-3} \cdot 1.0 \cdot 10^{-6}}\,\mathrm{m/s} \approx 5.3 \cdot 10^{-26}\,\mathrm{m/s} ,
$$
far below the precision of any measurement. For macroscopic objects, the uncertainty principle has negligible effects, and classical mechanics describes their motion to an excellent approximation.
:::

:::teorema{#indeterminazione-energia-tempo titolo="Uncertainty principle for energy and time"}
If a system remains in a state for a time interval $\Delta t$, its energy in that state has an uncertainty $\Delta E$ satisfying
$$
\Delta E \cdot \Delta t \geq \frac{h}{4\pi} .
$$
This quantum-mechanical relation is also confirmed by experiment. An excited atom remains in that state for a finite mean time before the electron drops to a lower level. Its energy therefore has an uncertainty, and its spectral lines have a small frequency width. By contrast, the ground state lasts indefinitely and has a sharply defined energy.

An excited state with a mean lifetime $\Delta t = 1.0 \cdot 10^{-8}\,\mathrm{s}$ has an energy uncertainty
$$
\Delta E \geq \frac{6.63 \cdot 10^{-34}}{4\pi \cdot 1.0 \cdot 10^{-8}}\,\mathrm{J} \approx 5.3 \cdot 10^{-27}\,\mathrm{J} \approx 3.3 \cdot 10^{-8}\,\mathrm{eV} ,
$$
that is very small compared with the differences between levels, which are a few $\mathrm{eV}$. Hydrogen lines therefore appear narrow.
:::

## Wave function and probability interpretation

:::definizione{#funzione-d-onda titolo="Wave function"}
In quantum mechanics, the state of a particle moving along a straight line is described by a function $\psi(x)$ called the **wave function**. The square of its absolute value is related to the probability of finding the particle. The probability that a position measurement will find the particle in a small interval of width $\Delta x$ around point $x$ is
$$
P = |\psi(x)|^2 \, \Delta x .
$$
This is the **probability interpretation** proposed by Born in 1926. The particle is certain to be somewhere, so the probabilities over the entire axis add up to $1$. The particle is never found where $\psi = 0$, and it is found most often where $|\psi|^2$ is greatest. Quantum mechanics predicts how frequently different results occur when the measurement is repeated many times. The result of a single measurement is random. For example, if an interval of width $\Delta x = 0.010\,\mathrm{nm}$ around a point has $|\psi|^2 = 2.0\,\mathrm{nm^{-1}}$, the probability of finding the particle there is $2.0 \cdot 0.010 = 0.020$, or $2\%$.
:::

:::osservazione{#doppia-fenditura-elettroni titolo="Electrons passing through a double slit"}
When a very weak electron beam passes through two nearby slits, each electron leaves a single spot on the screen, as a particle would. After many electrons arrive, the spots form bright and dark fringes, as in an optical interference pattern. The density of the spots follows $|\psi|^2$, where $\psi$ is the sum of the waves coming from the two slits. The arrival position of an individual electron is random, while the distribution of many arrivals can be predicted precisely.
:::

## Particle in a box and quantum tunneling

:::richiamo{titolo="Standing waves on a string with fixed ends"}
On a string of length $L$ with fixed ends, standing waves have nodes at both ends. The allowed wavelengths are those for which the string contains an integer number of half-wavelengths: $L = n \dfrac{\lambda}{2}$, with $n = 1, 2, 3, \ldots$
:::

::::teorema{#particella-in-una-scatola titolo="Energy levels of a particle in a box"}
A particle of mass $m$ moves along a straight line between two impenetrable walls separated by $L$. The length $L$ is called the width of the box. Inside, the potential energy is zero and the speed is much smaller than $c$. The particle’s energy can then take only the values
$$
E_n = \frac{n^2 h^2}{8 m L^2} , \qquad n = 1, 2, 3, \ldots
$$
and the wave function at level $n$ is $\psi_n(x) = A \sin\left( \dfrac{n \pi x}{L} \right)$ for $0 \leq x \leq L$, with $A$ constant. Here too the energy is **quantized**, because the particle is confined to a finite region. The lowest energy, $E_1 = \dfrac{h^2}{8 m L^2}$, is nonzero, so the particle cannot be at rest in the box. This agrees with the uncertainty principle: with $\Delta x \leq L$, the momentum cannot be known exactly.

For an electron in a box of width $L = 0.50\,\mathrm{nm}$, comparable in size to an atom, we have
$$
E_1 = \frac{\left( 6.63 \cdot 10^{-34} \right)^2}{8 \cdot 9.11 \cdot 10^{-31} \cdot \left( 0.50 \cdot 10^{-9} \right)^2}\,\mathrm{J} \approx 2.4 \cdot 10^{-19}\,\mathrm{J} \approx 1.5\,\mathrm{eV} ,
$$
followed by $E_2 = 4 E_1 \approx 6.0\,\mathrm{eV}$ and $E_3 = 9 E_1 \approx 13.6\,\mathrm{eV}$, values of the same order of magnitude as atomic energies.

::grafico{f="x<0||x>4?NaN:sin(pi*x/4);x<0||x>4?NaN:sin(pi*x/2)" linee="0,-1.4 0,1.4;4,-1.4 4,1.4" xmin=-1 xmax=5 ymin=-1.5 ymax=1.5 nomi="x,ψ" legenda="\psi_1;\psi_2" titolo="Wave functions of levels $n = 1$ and $n = 2$ in a box of width $L$ (here $L = 4$ units). The box contains one and two half-wavelengths, respectively"}

:::dimostrazione
The particle cannot be found outside the box, so the wave function is zero there. The wave function varies continuously, so it also vanishes at the walls, at $x = 0$ and $x = L$. The particle’s de Broglie wave is therefore a standing wave with nodes at the ends, like a wave on a fixed string, and the box contains an integer number of half-wavelengths:
$$
L = n \frac{\lambda_n}{2}
\qquad \Longrightarrow \qquad
\lambda_n = \frac{2L}{n} .
$$
The value $n = 0$ is excluded because it would give a wave function that is zero everywhere, implying there is no particle. By de Broglie’s hypothesis, the magnitude of the momentum is $p_n = \dfrac{h}{\lambda_n} = \dfrac{n h}{2L}$. The potential energy is zero, so all the energy is kinetic and, since $v \ll c$,
$$
E_n = \frac{p_n^2}{2m} = \frac{n^2 h^2}{4 L^2} \cdot \frac{1}{2m} = \frac{n^2 h^2}{8 m L^2} .
$$
The function $A \sin\left( \dfrac{n\pi x}{L} \right)$ vanishes at $x = 0$ and $x = L$ because $\sin(n\pi) = 0$, and has wavelength $\dfrac{2\pi}{\frac{n\pi}{L}} = \dfrac{2L}{n} = \lambda_n$.
:::
::::

:::esempio{titolo="Where the particle can be found in the box"}
At level $n = 2$, the probability density for finding the particle is proportional to $|\psi_2(x)|^2 = A^2 \sin^2\left( \dfrac{2\pi x}{L} \right)$. This function is greatest at $x = \dfrac{L}{4}$ and $x = \dfrac{3L}{4}$ and vanishes at the center of the box, at $x = \dfrac{L}{2}$. A classical particle bouncing between the walls at constant speed would instead be equally likely to be found at any position. When $n$ is very large, the maxima of $|\psi_n|^2$ are very closely spaced, and the probability averaged over a small but not microscopic interval becomes uniform, as in the classical case.

::grafico{f="x<0||x>4?NaN:sin(pi*x/2)^2;x<0||x>4?NaN:sin(pi*x/4)^2" linee="0,0 0,1.4;4,0 4,1.4" xmin=-1 xmax=5 ymin=-0.5 ymax=1.5 nomi="x,P" legenda="|\psi_2|^2;|\psi_1|^2" titolo="Probability density $|\psi|^2$ in levels $n = 2$ and $n = 1$ of a box of width $L = 4$ units. In level $n = 2$ the particle is never found at the center"}

:::

:::osservazione{#effetto-tunnel titolo="Quantum tunneling"}
Consider a particle encountering a barrier, a region where the potential energy $U$ is greater than its total energy $E$. In classical mechanics the particle cannot enter the barrier because its kinetic energy $E - U$ would be negative, so it is always reflected. In quantum mechanics the wave function inside the barrier is nonzero and decreases exponentially. If the barrier is thin enough, the wave function is still nonzero on the other side. There is therefore a small but nonzero probability that the particle passes through the barrier. This phenomenon is called **quantum tunneling**.

The transmission probability decreases very rapidly as the barrier becomes thicker, as the difference $U - E$ increases, or as the particle’s mass increases. Tunneling is therefore significant only for microscopic particles and barriers of atomic thickness. It accounts for $\alpha$ decay of nuclei, in which the $\alpha$ particle escapes the nucleus despite having less energy than the electric potential barrier, and for the operation of the scanning tunneling microscope, which measures the current of electrons crossing the small vacuum gap between a tip and a surface.

::grafico{f="x<0?cos(4*x+0.3588):(x<=1?0.9363*exp(-1.5*x):0.2231*cos(4*(x-1)+0.3588))" poligoni="0,0 1,0 1,1.2 0,1.2" xmin=-3 xmax=4 ymin=-1.5 ymax=1.5 nomi="x,ψ" legenda="\psi" titolo="Qualitative shape of the wave function of a particle encountering a barrier (shaded box). The wave function decays exponentially in the barrier, and a wave of smaller amplitude remains beyond it"}

:::
