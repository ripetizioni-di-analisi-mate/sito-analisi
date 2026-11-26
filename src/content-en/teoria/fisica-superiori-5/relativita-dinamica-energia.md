---
titolo: "Special relativity: dynamics and energy"
sommario: How to express a particle's momentum and energy in relativity, why mass is equivalent to energy, how energy and momentum are conserved in collisions, decays, and pair production, how much energy nuclear fission and fusion release, and what the equivalence principle of general relativity states.
---

## Relativistic momentum

:::richiamo{titolo="Lorentz factor"}
For a speed $v$ with $0 \leq v < c$, define $\beta = \dfrac{v}{c}$ and $\gamma = \dfrac{1}{\sqrt{1 - \frac{v^2}{c^2}}} = \dfrac{1}{\sqrt{1 - \beta^2}}$. The number $\gamma$ equals $1$ when $v = 0$, is greater than $1$ when $v > 0$, and approaches $+\infty$ as $v \to c$. See the chapter on space and time in special relativity.
:::

:::definizione{#quantita-di-moto-relativistica titolo="Relativistic momentum"}
Throughout this chapter, $m$ denotes the **mass** of a particle measured when it is at rest, also called its rest mass. Mass is a property of the particle and has the same value in every reference frame. A particle of mass $m$ moving with velocity $\vec{v}$ has **relativistic momentum**
$$
\vec{p} = \gamma\, m\, \vec{v} ,
\qquad
p = \gamma\, m\, v = \frac{m v}{\sqrt{1 - \dfrac{v^2}{c^2}}} .
$$
At speeds small compared with $c$, we have $\gamma \approx 1$ and recover the classical momentum $m v$. At speeds close to $c$, relativistic momentum is much greater than $m v$. For example, for an electron with $v = 0.80\,c = 2.40 \cdot 10^{8}\,\mathrm{m/s}$, we have $\gamma = \dfrac{5}{3} \approx 1.67$, so
$$
p = \frac{5}{3} \cdot 9.11 \cdot 10^{-31} \cdot 2.40 \cdot 10^{8}\,\mathrm{kg\cdot m/s} \approx 3.64 \cdot 10^{-22}\,\mathrm{kg\cdot m/s} ,
$$
whereas $m v \approx 2.19 \cdot 10^{-22}\,\mathrm{kg\cdot m/s}$.

::grafico{f="x/sqrt(1-x^2);x" asintoti="x=1" xmin=0 xmax=1.2 ymin=0 ymax=6 nomi="β,p" legenda="\gamma\beta;\beta" titolo="Momentum in units of $mc$ as a function of $\beta$. The relativistic momentum $\gamma m v$ agrees with $m v$ for small $\beta$ and approaches $+\infty$ as $\beta \to 1$"}

:::

:::osservazione{#perche-gamma-mv titolo="Why the expression for momentum changes"}
In classical mechanics the total momentum of an isolated system is conserved in every inertial frame. If velocities are calculated using relativistic velocity addition, the sum of the quantities $m v$ before and after a collision can be the same in one frame and different in another. The quantity $\gamma m v$ is conserved in every inertial frame, as Einstein's first postulate requires, so this is the momentum used in special relativity.
:::

:::attenzione
Some books call the product $\gamma m$ "relativistic mass" and say that mass increases with speed. Here, the mass $m$ is always the rest mass, which is independent of speed. An electron has mass $9.11 \cdot 10^{-31}\,\mathrm{kg}$ both at rest and at $0.80\,c$. It is the factor $\gamma$ in momentum and energy that increases with speed.
:::

:::osservazione{#secondo-principio-relativistico titolo="Newton's second law in relativity"}
Newton's second law remains valid when expressed in terms of relativistic momentum. In this form, the average force on a particle during the interval $\Delta t$ is
$$
\vec{F} = \frac{\Delta \vec{p}}{\Delta t} .
$$
The form $\vec{F} = m \vec{a}$ applies only when $v \ll c$. For example, if an electron starts at rest and experiences for $10\,\mathrm{ns}$ a constant force of $1.6 \cdot 10^{-13}\,\mathrm{N}$, its final momentum is $p = F\,\Delta t = 1.6 \cdot 10^{-21}\,\mathrm{kg\cdot m/s}$, as in classical mechanics. The corresponding speed is found from the energy–momentum relation.
:::

## Total energy and rest energy

:::definizione{#energia-totale titolo="Total energy and rest energy"}
The **total energy** of a particle of mass $m$ moving at speed $v$ is
$$
E = \gamma\, m c^2 .
$$
At $v = 0$ we have $\gamma = 1$, and the total energy reduces to the **rest energy**
$$
E_0 = m c^2 ,
$$
which the particle has even when it is at rest. Since $\gamma > 1$ for $v > 0$, the total energy of a moving particle is greater than its rest energy. For example, a proton has rest energy
$$
E_0 = 1.67 \cdot 10^{-27} \cdot \left( 3.00 \cdot 10^{8} \right)^2\,\mathrm{J} \approx 1.50 \cdot 10^{-10}\,\mathrm{J} ,
$$
and at $v = 0.60\,c$, where $\gamma = 1.25$, it has total energy $E = 1.25 \cdot 1.50 \cdot 10^{-10}\,\mathrm{J} \approx 1.88 \cdot 10^{-10}\,\mathrm{J}$.
:::

:::teorema{#equivalenza-massa-energia titolo="Mass–energy equivalence"}
Each mass $m$ corresponds to a rest energy $E_0 = m c^2$, and vice versa. If a system at rest transfers energy $\Delta E$ to its surroundings, for example as radiation or heat, its mass decreases by
$$
\Delta m = \frac{\Delta E}{c^2} .
$$
This result of Einstein's is accepted here without proof and is confirmed by measurements in nuclear and particle physics. The factor $c^2 = 9.00 \cdot 10^{16}\,\mathrm{m^2/s^2}$ is very large, so even a small mass corresponds to an enormous amount of energy. For example, $1\,\mathrm{g}$ of matter corresponds to an energy of $10^{-3} \cdot 9.00 \cdot 10^{16}\,\mathrm{J} = 9.0 \cdot 10^{13}\,\mathrm{J}$, the energy a $1\,\mathrm{GW}$ power plant generates in $9.0 \cdot 10^{4}\,\mathrm{s}$, or about $25$ hours. In chemical and thermal processes, by contrast, the change in mass is too small to measure.
:::

## Relativistic kinetic energy

:::definizione{#energia-cinetica-relativistica titolo="Relativistic kinetic energy"}
The **kinetic energy** $K$ of a particle is the difference between its total energy and its rest energy:
$$
K = E - E_0 = (\gamma - 1)\, m c^2 .
$$
Let $W$ denote the work done by the net force on the particle. The work–energy theorem $W = \Delta K$ remains valid with this expression for $K$. If a particle of charge $q$ starts at rest and moves through a potential difference $\Delta V$, the electric force does work $|q|\,\Delta V$, so $K = |q|\,\Delta V$ and $\gamma = 1 + \dfrac{K}{m c^2}$. For a proton at $v = 0.60\,c$ we have $K = 0.25 \cdot 1.50 \cdot 10^{-10}\,\mathrm{J} \approx 3.8 \cdot 10^{-11}\,\mathrm{J}$, whereas the classical formula gives $\dfrac{1}{2} m v^2 = \dfrac{1}{2} \cdot 0.36\, m c^2 \approx 2.7 \cdot 10^{-11}\,\mathrm{J}$, which is $28\%$ less.
:::

:::richiamo{titolo="Linear approximation using the differential"}
If $f$ is differentiable at $x_0$, then for small $h$ we have $f(x_0 + h) \approx f(x_0) + f'(x_0)\,h$. The error divided by $h$ approaches $0$ as $h \to 0$. See the chapter on derivatives in fifth-year high school mathematics.
:::

::::teorema{#limite-classico-energia-cinetica titolo="Classical limit of kinetic energy"}
For $v \ll c$ the relativistic kinetic energy is approximated by the classical kinetic energy:
$$
K = (\gamma - 1)\, m c^2 \approx \frac{1}{2} m v^2 .
$$
Classical mechanics is therefore the limiting case of relativity for speeds small compared with $c$. Its formulas can be used as long as $\beta$ is small. For an electron with $v = 0.10\,c$, the relativistic formula gives $K \approx 2.574\,\mathrm{keV}$ and the classical formula gives $2.555\,\mathrm{keV}$, a difference of less than $1\%$.

:::dimostrazione
We approximate $\gamma$ using the differential. Set $x = \dfrac{v^2}{c^2}$, which is small because $v \ll c$, so that $\gamma = (1 - x)^{-\frac{1}{2}}$. Consider the function $f(x) = (1 - x)^{-\frac{1}{2}}$. By the chain rule its derivative is
$$
f'(x) = -\frac{1}{2}\,(1 - x)^{-\frac{3}{2}} \cdot (-1) = \frac{1}{2}\,(1 - x)^{-\frac{3}{2}} ,
$$
so $f(0) = 1$ and $f'(0) = \dfrac{1}{2}$. Using the **linear approximation** at $x_0 = 0$ gives, for small $x$,
$$
(1 - x)^{-\frac{1}{2}} \approx 1 + \frac{x}{2} .
$$
Substituting $x = \dfrac{v^2}{c^2}$ gives $\gamma \approx 1 + \dfrac{v^2}{2 c^2}$, so $\gamma - 1 \approx \dfrac{v^2}{2 c^2}$ and
$$
K = (\gamma - 1)\, m c^2 \approx \frac{v^2}{2 c^2}\, m c^2 = \frac{1}{2} m v^2 .
$$
:::
::::

::grafico{f="1/sqrt(1-x^2)-1;x^2/2" asintoti="x=1" xmin=0 xmax=1.2 ymin=0 ymax=4 nomi="β,K" legenda="\gamma - 1;\dfrac{\beta^2}{2}" titolo="Kinetic energy in units of $mc^2$. The relativistic expression $(\gamma - 1)\,mc^2$ and the classical expression $\dfrac{1}{2} m v^2$ nearly coincide for $\beta < 0.3$ and diverge from each other at higher speeds"}

## Units in particle physics

:::definizione{#elettronvolt-mev titolo="The electronvolt, the MeV, and derived units"}
The **electronvolt** is the kinetic energy gained by a particle with charge $e$ when it moves through a potential difference of $1\,\mathrm{V}$:
$$
1\,\mathrm{eV} = 1.60 \cdot 10^{-19}\,\mathrm{J} ,
\qquad
1\,\mathrm{keV} = 10^{3}\,\mathrm{eV} ,
\qquad
1\,\mathrm{MeV} = 10^{6}\,\mathrm{eV} = 1.60 \cdot 10^{-13}\,\mathrm{J} .
$$
Energy divided by $c^2$ has units of mass, as the relation $E_0 = m c^2$ shows. Energy divided by $c$ has units of momentum because $\mathrm{J}/(\mathrm{m/s}) = \mathrm{kg\cdot m/s}$. This gives the following units of mass and momentum:
$$
1\,\mathrm{MeV}/c^2 = \frac{1.60 \cdot 10^{-13}}{\left( 3.00 \cdot 10^{8} \right)^2}\,\mathrm{kg} \approx 1.78 \cdot 10^{-30}\,\mathrm{kg} ,
\qquad
1\,\mathrm{MeV}/c = \frac{1.60 \cdot 10^{-13}}{3.00 \cdot 10^{8}}\,\mathrm{kg\cdot m/s} \approx 5.33 \cdot 10^{-22}\,\mathrm{kg\cdot m/s} .
$$
These units allow the formulas to be used without converting energy to joules. For example, a particle of mass $938\,\mathrm{MeV}/c^2$ has rest energy $938\,\mathrm{MeV}$. Using more precise values of the constants gives $m_e c^2 = 0.511\,\mathrm{MeV}$ for the electron and $m_p c^2 = 938\,\mathrm{MeV}$ for the proton. With the rounded values $m_e = 9.11 \cdot 10^{-31}\,\mathrm{kg}$ and $c = 3.00 \cdot 10^{8}\,\mathrm{m/s}$, we obtain $0.512\,\mathrm{MeV}$.
:::

:::esempio{titolo="Energy of a proton in MeV"}
A proton travels at $v = 0.60\,c$, so $\gamma = 1.25$. With $m_p c^2 = 938\,\mathrm{MeV}$ we obtain
$$
E = 1.25 \cdot 938\,\mathrm{MeV} \approx 1.17 \cdot 10^{3}\,\mathrm{MeV} ,
\qquad
K = 0.25 \cdot 938\,\mathrm{MeV} \approx 235\,\mathrm{MeV} ,
$$
and the momentum is $p = \gamma\, m\, v = \gamma \beta\, m c = 1.25 \cdot 0.60 \cdot 938\,\mathrm{MeV}/c \approx 704\,\mathrm{MeV}/c$. Dividing the values in joules from the definition of total energy by $1.60 \cdot 10^{-13}\,\mathrm{J/MeV}$ gives approximately the same values in $\mathrm{MeV}$.
:::

## Energy and momentum

::::teorema{#relazione-energia-quantita-di-moto titolo="Energy–momentum relation"}
For a particle of mass $m$, total energy $E$, and momentum magnitude $p$, we have
$$
E^2 = p^2 c^2 + m^2 c^4 .
$$
This relation connects $E$ and $p$ without requiring the speed. The three quantities $E$, $pc$, and $m c^2$ are all measured in $\mathrm{MeV}$ and form a right triangle with hypotenuse $E$. For example, a proton with $K = 500\,\mathrm{MeV}$ has $E = 938 + 500 = 1438\,\mathrm{MeV}$, so
$$
p c = \sqrt{E^2 - m^2 c^4} = \sqrt{1438^2 - 938^2}\,\mathrm{MeV} \approx 1.09 \cdot 10^{3}\,\mathrm{MeV} ,
$$
that is, $p \approx 1.09 \cdot 10^{3}\,\mathrm{MeV}/c$.

::grafico{assi=0 uguale=1 linee="0,0 3.127,0 3.127,3.633 0,0;2.927,0 2.927,0.2 3.127,0.2" etichette="1.3,-0.4,mc² = 938 MeV;3.3,1.75,pc ≈ 1090 MeV;0.55,2.15,E = 1438 MeV" xmin=-0.5 xmax=5.5 ymin=-0.8 ymax=4 legenda=0 titolo="The quantities $mc^2$, $pc$, and $E$ for a proton with $K = 500\,\mathrm{MeV}$ form a right triangle because $E^2 = p^2 c^2 + m^2 c^4$"}

:::dimostrazione
Calculate $E^2 - p^2 c^2$ using the definitions $E = \gamma m c^2$ and $p = \gamma m v$:
$$
\begin{aligned}
E^2 - p^2 c^2 &= \gamma^2 m^2 c^4 - \gamma^2 m^2 v^2 c^2 \\[6pt]
&= \gamma^2 m^2 c^4 \left( 1 - \frac{v^2}{c^2} \right) .
\end{aligned}
$$
From the definition of the Lorentz factor, $\gamma^2 = \dfrac{1}{1 - \frac{v^2}{c^2}}$, so $\gamma^2 \left( 1 - \dfrac{v^2}{c^2} \right) = 1$. Thus $E^2 - p^2 c^2 = m^2 c^4$. Moving $p^2 c^2$ to the right-hand side gives the stated relation.
:::
::::

:::osservazione{#velocita-da-energia titolo="Speed from energy and momentum"}
Dividing $p = \gamma m v$ by $E = \gamma m c^2$ cancels the factor $\gamma m$ and gives
$$
\frac{p}{E} = \frac{v}{c^2} ,
\qquad \text{that is} \qquad
\beta = \frac{v}{c} = \frac{p c}{E} .
$$
The formula gives the speed when $E$ and $pc$ are known. For the proton with $K = 500\,\mathrm{MeV}$, we have $\beta = \dfrac{1090}{1438} \approx 0.758$. For the electron subjected to the constant force in the example on Newton's second law in relativity, $p = 1.6 \cdot 10^{-21}\,\mathrm{kg\cdot m/s}$ and $m c = 2.73 \cdot 10^{-22}\,\mathrm{kg\cdot m/s}$, so $\dfrac{p}{mc} \approx 5.85$ and
$$
\beta = \frac{p c}{\sqrt{p^2 c^2 + m^2 c^4}} = \frac{5.85}{\sqrt{5.85^2 + 1}} \approx 0.986 .
$$
The classical formula $v = \dfrac{p}{m}$ would give $1.76 \cdot 10^{9}\,\mathrm{m/s}$, a value greater than $c$.
:::

::::teorema{#particelle-massa-nulla titolo="Massless particles"}
The energy and momentum of a massless particle are related by
$$
E = p c ,
$$
and it moves at speed $c$ in every inertial reference frame. The best-known massless particle is the **photon**, a quantum of electromagnetic energy, discussed in the chapter on blackbody radiation, the photoelectric effect, and the Compton effect. For example, a visible-light photon with energy $E = 2.0\,\mathrm{eV}$ has momentum
$$
p = \frac{E}{c} = \frac{2.0 \cdot 1.60 \cdot 10^{-19}}{3.00 \cdot 10^{8}}\,\mathrm{kg\cdot m/s} \approx 1.1 \cdot 10^{-27}\,\mathrm{kg\cdot m/s} .
$$

:::dimostrazione
Setting $m = 0$ in the energy–momentum relation gives $E^2 = p^2 c^2$. Since $E$ and $p$ are positive, $E = pc$. The formula for speed in terms of energy and momentum then gives $\beta = \dfrac{p c}{E} = 1$, that is, $v = c$.
:::
::::

## The speed of light as a limiting speed

::::teorema{#velocita-limite titolo="The speed of light as a limiting speed"}
A particle of mass $m > 0$ has a speed below $c$ however much energy it receives. Bringing it ever closer to $c$ requires kinetic energy that increases without bound because
$$
\lim_{v \to c^-} (\gamma - 1)\, m c^2 = +\infty .
$$
For example, to accelerate a proton from rest to $0.90\,c$, $0.99\,c$, and $0.999\,c$ requires the respective kinetic energies
$$
K \approx 1.21 \cdot 10^{3}\,\mathrm{MeV} ,
\qquad
K \approx 5.71 \cdot 10^{3}\,\mathrm{MeV} ,
\qquad
K \approx 2.00 \cdot 10^{4}\,\mathrm{MeV} ,
$$
with $\gamma \approx 2.29$, $7.09$, and $22.4$. Each additional digit $9$ in the speed requires more than three times as much energy.

:::dimostrazione
As $v \to c^-$, the radicand $1 - \dfrac{v^2}{c^2}$ approaches $0$ from above, so $\sqrt{1 - \dfrac{v^2}{c^2}} \to 0^+$ and $\gamma \to +\infty$. Since $m c^2$ is a positive constant, $K = (\gamma - 1)\, m c^2$ also tends to $+\infty$. A particle that receives a finite energy $K$ therefore has a finite $\gamma = 1 + \dfrac{K}{m c^2}$, and thus $v < c$.
:::
::::

:::osservazione{#acceleratori titolo="Speed and energy in accelerators"}
In particle accelerators, protons and electrons acquire kinetic energies much greater than their rest energy, but their speed remains below $c$. An electron with $K = 4.50\,\mathrm{MeV}$ has $\gamma = 1 + \dfrac{4.50}{0.511} \approx 9.81$ and $\beta = \sqrt{1 - \dfrac{1}{\gamma^2}} \approx 0.995$. Doubling its energy increases its speed by less than $0.5\%$. Thus, at high energies, an increase in energy primarily increases $\gamma$ and hence momentum, while the speed remains very close to $c$.
:::

## Conservation of energy and momentum

:::teorema{#conservazione-energia-quantita-di-moto titolo="Conservation of total energy and momentum"}
In an isolated system of particles, the total energy $\sum E = \sum \gamma m c^2$ and total momentum $\sum \vec{p} = \sum \gamma m \vec{v}$ are conserved in every inertial reference frame. This is an experimental law that holds in all observed collisions and decays, even when the particles change into different particles. To solve a problem, equate the total energy before and after the process and do the same for each component of momentum. The total energies include rest energies, so conservation accounts for the conversion of kinetic energy into mass and vice versa.
:::

:::attenzione
In relativity, the sum of the individual particle masses is not conserved. Suppose a nucleus initially at rest has mass $M$ and splits into two fragments of masses $m_1$ and $m_2$ that move apart. Energy conservation gives $M c^2 = \gamma_1 m_1 c^2 + \gamma_2 m_2 c^2$. Since $\gamma_1 > 1$ and $\gamma_2 > 1$, it follows that $m_1 + m_2 < M$. The difference in mass accounts for the kinetic energy of the fragments.
:::

:::esempio{#urto-anelastico-relativistico titolo="Perfectly inelastic collision"}
Two identical bodies of mass $m$ move toward each other along a straight line with velocities $0.60\,c$ and $-0.60\,c$ and stick together after the collision. The total momentum is zero, so the final body is at rest and its total energy equals its rest energy $M c^2$. With $\gamma = 1.25$, conservation of energy gives
$$
M c^2 = 2 \gamma m c^2
\qquad \Longrightarrow \qquad
M = 2 \cdot 1.25\, m = 2.5\, m .
$$
The final mass is greater than $2m$. The initial kinetic energy $2 (\gamma - 1)\, m c^2 = 0.50\, m c^2$ equals the increase in rest energy, $(M - 2m)\, c^2 = 0.50\, m c^2$.
:::

::::teorema{#decadimento-due-corpi titolo="Two-body decay of a particle at rest"}
A particle of mass $M$ initially at rest decays into two particles of masses $m_1$ and $m_2$, with $M > m_1 + m_2$. The two particles then move in opposite directions with momenta of equal magnitude $p$, and the total energy of the first is
$$
E_1 = \frac{M^2 + m_1^2 - m_2^2}{2M}\, c^2 ,
$$
while the expression for the second is obtained by interchanging $m_1$ and $m_2$. The energies of both particles are therefore determined by the masses alone. For example, a pion initially at rest, with rest energy $139.6\,\mathrm{MeV}$, decays into a muon with $105.7\,\mathrm{MeV}$ and a neutrino of negligible mass. The muon has energy
$$
E_1 = \frac{139.6^2 + 105.7^2}{2 \cdot 139.6}\,\mathrm{MeV} \approx 109.8\,\mathrm{MeV} ,
$$
corresponding to a kinetic energy of $109.8 - 105.7 = 4.1\,\mathrm{MeV}$.

::grafico{assi=0 uguale=1 vettori="0,0,2.6,0,p₁;0,0,-2.6,0,p₂" punti="0,0,pieno" etichette="-0.25,0.35,M;2.75,0.3,m₁;-3.1,0.3,m₂" xmin=-3.6 xmax=3.6 ymin=-0.8 ymax=1 legenda=0 titolo="The particle of mass $M$ at rest decays into two particles with opposite momenta, $\vec{p}_1 = -\vec{p}_2$"}

:::dimostrazione
The momentum before the decay is zero, so after the decay $\vec{p}_1 + \vec{p}_2 = \vec{0}$. The two momenta therefore point in opposite directions and have the same magnitude $p$. The total energy before the decay is $M c^2$, so
$$
E_1 + E_2 = M c^2 .
$$
Write the **energy–momentum relation** for the two particles, $E_1^2 = p^2 c^2 + m_1^2 c^4$ and $E_2^2 = p^2 c^2 + m_2^2 c^4$, and subtract the second equation from the first. The term $p^2 c^2$ cancels, giving
$$
E_1^2 - E_2^2 = \left( m_1^2 - m_2^2 \right) c^4 .
$$
The left-hand side is a difference of squares equal to $(E_1 - E_2)(E_1 + E_2) = (E_1 - E_2)\, M c^2$. Dividing by $M c^2$ gives $E_1 - E_2 = \dfrac{m_1^2 - m_2^2}{M}\, c^2$. Adding this equation to $E_1 + E_2 = M c^2$ gives
$$
2 E_1 = M c^2 + \frac{m_1^2 - m_2^2}{M}\, c^2 = \frac{M^2 + m_1^2 - m_2^2}{M}\, c^2 ,
$$
and dividing by $2$ gives the stated result. The condition $M > m_1 + m_2$ is necessary because the total energy of each particle is at least its rest energy, so $M c^2 = E_1 + E_2 \geq (m_1 + m_2)\, c^2$.
:::
::::

## Pair production and annihilation

:::definizione{#antiparticella titolo="Antiparticles"}
Every particle has an **antiparticle** of the same mass and opposite electric charge. The antiparticle of the electron is the **positron**, with mass $m_e$ and charge $+e$. A particle and its antiparticle can be created together from energy in pair production, or they can annihilate and produce photons. In both processes the total charge is conserved because the pair, like the photons, has zero net charge. For example, the rest energy of an electron–positron pair is $2\, m_e c^2 = 1.022\,\mathrm{MeV}$.
:::

:::esempio{#annichilazione titolo="Annihilation of an electron and a positron at rest"}
An electron and a positron, both at rest, annihilate. The initial momentum is zero and the initial energy is $2\, m_e c^2 = 1.022\,\mathrm{MeV}$. A single photon would have nonzero momentum $p = \dfrac{E}{c}$, so momentum would not be conserved. Two photons are therefore produced with opposite momenta. Their energies are equal because $E = pc$:
$$
E_\gamma = m_e c^2 = 0.511\,\mathrm{MeV} .
$$
Positron emission tomography (PET), a medical imaging technique, relies on detecting these two photons emitted in opposite directions.
:::

:::osservazione{#creazione-di-coppie titolo="Pair production by a photon"}
A photon of sufficient energy can produce an electron–positron pair as it passes near a nucleus. An isolated photon in a vacuum cannot do this. Each particle of the pair satisfies $E_i = \sqrt{p_i^2 c^2 + m_e^2 c^4} > p_i c$, so the total energy of the pair is greater than $(p_1 + p_2)\, c$, which in turn is at least as large as the magnitude of the total momentum times $c$. The energy of the photon is exactly $pc$, so energy and momentum cannot both be conserved. A nearby nucleus absorbs some of the momentum and, because of its large mass, acquires negligible kinetic energy. The minimum photon energy in this approximation is therefore the rest energy of the pair, $1.022\,\mathrm{MeV}$. A photon of energy $3.00\,\mathrm{MeV}$ produces a pair with total kinetic energy $3.00 - 1.022 \approx 1.98\,\mathrm{MeV}$.

::grafico{assi=0 uguale=1 curve="t,0.15*sin(6*t),-4,-0.35" vettori="0,0,2.6,1.3,e⁻;0,0,2.6,-1.1,e⁺" punti="0,0,pieno" etichette="-0.6,-0.5,nucleus;-3.6,0.45,photon" xmin=-4.3 xmax=3.6 ymin=-1.6 ymax=1.8 legenda=0 titolo="A photon passing near a nucleus produces an electron and a positron. The nucleus takes up some of the momentum"}

:::

## Nuclear binding energy

:::definizione{#unita-di-massa-atomica titolo="Atomic mass unit"}
Nuclear and atomic masses are measured in **atomic mass units**, each equal to one-twelfth the mass of a carbon-12 atom:
$$
1\,\mathrm{u} = 1.6605 \cdot 10^{-27}\,\mathrm{kg} .
$$
Using more precise values of the constants, the corresponding rest energy is $1\,\mathrm{u} \cdot c^2 = 931.5\,\mathrm{MeV}$, so a mass difference of $0.001\,\mathrm{u}$ is equivalent to $0.9315\,\mathrm{MeV}$. A proton has mass $m_p = 1.007276\,\mathrm{u}$ and a neutron has mass $m_n = 1.008665\,\mathrm{u}$. A nucleus with $Z$ protons and $N$ neutrons has **mass number** $A = Z + N$. Protons and neutrons are collectively called **nucleons**.
:::

:::definizione{#difetto-di-massa titolo="Mass defect and binding energy"}
The **mass defect** of a nucleus with $Z$ protons, $N$ neutrons, and mass $m_{\text{nucleus}}$ is
$$
\Delta m = Z\, m_p + N\, m_n - m_{\text{nucleus}} .
$$
A nucleus has less mass than the sum of the masses of its separate nucleons, so $\Delta m > 0$. The **binding energy** $B = \Delta m\, c^2$ is the energy that must be supplied to separate the nucleus into its individual nucleons. It is also the energy released when the nucleus forms from the nucleons. For a helium-4 nucleus with $2$ protons, $2$ neutrons, and mass $4.001506\,\mathrm{u}$, we have
$$
\begin{aligned}
\Delta m &= (2 \cdot 1.007276 + 2 \cdot 1.008665 - 4.001506)\,\mathrm{u} = 0.030376\,\mathrm{u} , \\[6pt]
B &= 0.030376 \cdot 931.5\,\mathrm{MeV} \approx 28.3\,\mathrm{MeV} .
\end{aligned}
$$
:::

:::osservazione{#masse-atomiche titolo="Calculations using atomic masses"}
Tables usually give the masses of neutral atoms, including their electrons. When calculating binding energy from these masses, use the mass of a hydrogen atom, $m_{\text{H}} = 1.007825\,\mathrm{u}$, in place of the proton mass. The $Z$ electrons are then counted once in $Z\, m_{\text{H}}$ and once in the atomic mass, so their masses cancel. The same cancellation occurs in nuclear reactions when the atoms have the same total number of electrons before and after. The binding energies of the electrons, a few $\mathrm{eV}$ or $\mathrm{keV}$, are negligible compared with nuclear energies.
:::

:::definizione{#energia-di-legame-per-nucleone titolo="Binding energy per nucleon"}
The **binding energy per nucleon** is the ratio $\dfrac{B}{A}$ of binding energy to mass number. The larger the ratio, the more stable the nucleus. For helium-4, $\dfrac{B}{A} = \dfrac{28.3}{4}\,\mathrm{MeV} \approx 7.07\,\mathrm{MeV}$. As $A$ increases, this ratio rises rapidly for light nuclei, reaches a maximum of about $8.8\,\mathrm{MeV}$ near iron-56, then decreases slowly for heavy nuclei to about $7.6\,\mathrm{MeV}$ for uranium-235. Energy is therefore released both when two light nuclei combine in **fusion** and when a heavy nucleus splits into two medium-mass nuclei in **fission**, because in both cases the nucleons end up in nuclei with greater binding energy per nucleon.

::grafico{linee="2,1.11 4,7.07 6,5.33 12,7.68 16,7.98 20,8.03 28,8.45 40,8.55 56,8.79 62,8.79 84,8.72 120,8.51 138,8.39 208,7.87 235,7.59" punti="4,7.07,pieno;56,8.79,pieno;235,7.59,pieno" etichette="15,6.2,⁴He;50,9.3,⁵⁶Fe;220,8.15,²³⁵U" vettori="20,4,70,4,fusion;230,4,150,4,fission" xmin=0 xmax=250 ymin=0 ymax=10 nomi="A,MeV" legenda=0 titolo="Binding energy per nucleon $\dfrac{B}{A}$, in MeV, for selected nuclei as a function of mass number $A$. Fusion of light nuclei and fission of heavy nuclei both move toward the maximum near iron"}

:::

:::esempio{#fissione-fusione titolo="Energy released in fission and fusion"}
In the fission reaction $\,^{235}\mathrm{U} + n \to {}^{141}\mathrm{Ba} + {}^{92}\mathrm{Kr} + 3n$, the atomic masses are $m(^{235}\mathrm{U}) = 235.043930\,\mathrm{u}$, $m(^{141}\mathrm{Ba}) = 140.914411\,\mathrm{u}$, and $m(^{92}\mathrm{Kr}) = 91.926156\,\mathrm{u}$. The total mass of the atoms and neutrons is $236.052595\,\mathrm{u}$ before the reaction and $235.866562\,\mathrm{u}$ afterward. The mass decreases by $0.186033\,\mathrm{u}$, so the energy released is
$$
Q = 0.186033 \cdot 931.5\,\mathrm{MeV} \approx 173\,\mathrm{MeV} ,
$$
about $0.73\,\mathrm{MeV}$ for each of the $236$ initial nucleons. For the fusion reaction $\,^{2}\mathrm{H} + {}^{3}\mathrm{H} \to {}^{4}\mathrm{He} + n$, using atomic masses $m(^{2}\mathrm{H}) = 2.014102\,\mathrm{u}$, $m(^{3}\mathrm{H}) = 3.016049\,\mathrm{u}$, and $m(^{4}\mathrm{He}) = 4.002603\,\mathrm{u}$, the mass decreases by $0.018883\,\mathrm{u}$ and the energy released is $17.6\,\mathrm{MeV}$, or about $3.5\,\mathrm{MeV}$ per nucleon. The released energy appears as kinetic energy of the products. A single fission releases more energy, while fusion releases more energy per unit mass of fuel.
:::

## A brief introduction to general relativity

:::teorema{#principio-di-equivalenza titolo="Equivalence principle"}
In a sufficiently small region of space and over a sufficiently short time, the effects of a uniform gravitational field are indistinguishable from those of a frame with constant acceleration. Einstein used this postulate as the starting point for **general relativity**, the theory of gravity that extends special relativity to accelerated frames. For example, in a closed cabin far from any mass and accelerating upward at $a = 9.81\,\mathrm{m/s^2}$, a released object moves toward the floor just as it would on Earth. In a cabin in free fall in Earth's gravitational field, objects float as they would far from any mass.
:::

:::osservazione{#deflessione-della-luce titolo="Deflection of light"}
In a cabin accelerating upward, a light ray that enters horizontally through one wall hits the opposite wall at a lower point because the cabin has risen in the meantime. To an observer inside the cabin, the ray follows a curved path. By the equivalence principle, light must also bend in a gravitational field. General relativity predicts that starlight passing just above the Sun's surface is deflected by $1.75$ arcseconds. During the total eclipse of 1919, the positions of stars near the edge of the eclipsed Sun were measured and compared with the positions of the same stars photographed at night, far from the Sun in the sky. The measured displacement agreed with the prediction of general relativity.

::grafico{assi=0 uguale=1 poligoni="0.800,0.000 0.773,0.207 0.693,0.400 0.566,0.566 0.400,0.693 0.207,0.773 0.000,0.800 -0.207,0.773 -0.400,0.693 -0.566,0.566 -0.693,0.400 -0.773,0.207 -0.800,0.000 -0.773,-0.207 -0.693,-0.400 -0.566,-0.566 -0.400,-0.693 -0.207,-0.773 0.000,-0.800 0.207,-0.773 0.400,-0.693 0.566,-0.566 0.693,-0.400 0.773,-0.207" curve="t,1.2-0.1*(t+sqrt(t^2+1)),-6,6" segmenti="6,-0.01,-6,2.38" punti="-6,1.19,pieno;-6,2.38,vuoto;6,-0.01,pieno" etichette="-6.1,0.75,star;-6.4,2.75,apparent position;5.6,-0.45,Earth;-0.3,-0.15,Sun" xmin=-7 xmax=7 ymin=-1.2 ymax=3.2 legenda=0 titolo="Light from a star bends as it passes near the Sun. From Earth, the star appears in the direction of the arriving ray, displaced from its true position (angle greatly exaggerated)"}

:::

:::osservazione{#dilatazione-gravitazionale titolo="Gravitational time dilation and GPS"}
General relativity predicts that a clock lower in a gravitational field runs more slowly than an identical clock higher up. Near Earth's surface, for a height difference $h$ small compared with Earth's radius, the higher clock runs faster by the fraction $\dfrac{g h}{c^2}$. For $h = 1000\,\mathrm{m}$ this fraction is $\dfrac{9.81 \cdot 1000}{9.00 \cdot 10^{16}} \approx 1.1 \cdot 10^{-13}$. The clocks on GPS satellites, at an altitude of about $20\,200\,\mathrm{km}$, gain about $45\,\mu\mathrm{s}$ per day relative to clocks on the ground because of gravity. Special-relativistic time dilation due to the satellites' speed of about $3.9\,\mathrm{km/s}$ causes their clocks to lose about $7\,\mu\mathrm{s}$ per day. The net effect is a gain of about $38\,\mu\mathrm{s}$ per day, which the system corrects. Without the correction, light would travel $3.00 \cdot 10^{8} \cdot 38 \cdot 10^{-6}\,\mathrm{m} \approx 11\,\mathrm{km}$ during that time difference, so the error in the calculated positions would grow by about $11\,\mathrm{km}$ per day.
:::
