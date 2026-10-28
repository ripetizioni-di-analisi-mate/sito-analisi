---
titolo: Electric potential and electrostatic energy
sommario: Why the electrostatic field is conservative, how potential energy and potential are defined, how the potential of point charges and continuous distributions is computed, how the field is obtained from the potential and how conservation of energy describes the motion of charges.
---

## Work done by the electric force

Throughout the topic the source charges are at rest in an inertial reference frame, and the field they produce is called electrostatic.

:::richiamo{titolo="Line integral of a vector field"}
For a regular curve $\gamma$ from $A$ to $B$ and a continuous vector field $\vec{F}$, the line integral $\displaystyle\int_\gamma \vec{F} \cdot d\vec{\ell}$ is the limit of the sums $\sum_i \vec{F}(P_i) \cdot \Delta\vec{\ell}_i$ over the small pieces into which the curve is divided. If the curve is closed the integral is written $\displaystyle\oint_\gamma \vec{F} \cdot d\vec{\ell}$ and is called the **circulation**. See the topic on curves and line integrals in Mathematical Analysis 2.
:::

:::definizione{#lavoro-forza-elettrica titolo="Work done by the electric force"}
A test charge $q_0$ moves along a curve $\gamma$ from $A$ to $B$ in an electrostatic field $\vec{E}$, and the force $\vec{F} = q_0 \vec{E}$ acts on it. The **work** done by the electric force is
$$
W_{A \to B} = \int_\gamma q_0\, \vec{E} \cdot d\vec{\ell} = q_0 \int_\gamma \vec{E} \cdot d\vec{\ell} .
$$
In this subject work is denoted by $W$, because the letter $L$ is reserved for inductance. The work is proportional to $q_0$, so the ratio $\dfrac{W_{A \to B}}{q_0}$ depends only on the field and on the curve. In a uniform field and along a segment $\vec{s}$ the definition reduces to $W = q_0\, \vec{E} \cdot \vec{s}$; for example, a proton that moves $2.0\,\mathrm{cm}$ in the direction of a uniform field of $5.0 \cdot 10^3\,\mathrm{N/C}$ receives the work $1.60 \cdot 10^{-19} \cdot 5.0 \cdot 10^3 \cdot 0.020\,\mathrm{J} = 1.6 \cdot 10^{-17}\,\mathrm{J}$.
:::

::::teorema{#lavoro-campo-carica-puntiforme titolo="Work in the field of a point charge"}
Let $Q$ be a point charge at rest and let $q_0$ be a test charge that goes from a point $A$, at distance $r_A$ from $Q$, to a point $B$, at distance $r_B$, along any curve. The work done by the electric force is
$$
W_{A \to B} = k Q q_0 \left( \frac{1}{r_A} - \frac{1}{r_B} \right) .
$$
The work depends only on the initial and final distances, so it is the same for all curves joining $A$ and $B$. If the charges have the same sign and $q_0$ moves away from $Q$, the work is positive, because the repulsive force has its radial component in the same direction as the displacement. For example, with $Q = 4.0\,\mathrm{nC}$, $q_0 = 1.0\,\mathrm{nC}$, $r_A = 2.0\,\mathrm{cm}$ and $r_B = 6.0\,\mathrm{cm}$ one obtains $W = 8.99 \cdot 10^9 \cdot 4.0 \cdot 10^{-18} \cdot (50 - 16.7)\,\mathrm{J} \approx 1.2 \cdot 10^{-6}\,\mathrm{J}$.

::grafico{assi=0 uguale=1 curve="(1.5+2*t-0.5*sin(pi*t))*cos(0.2618+0.8727*t+0.5*sin(pi*t)),(1.5+2*t-0.5*sin(pi*t))*sin(0.2618+0.8727*t+0.5*sin(pi*t)),0,1;3.5*cos(t),3.5*sin(t),0.2618,1.1345" linee="1.449,0.388 3.381,0.906" punti="0,0,pieno,+Q;1.449,0.388,pieno,A;1.479,3.172,pieno,B" etichette="0.35,2.3,γ₁;3.4,2.3,γ₂" xmin=-0.6 xmax=4.4 ymin=-0.5 ymax=4.4 legenda=0 titolo="Two curves from $A$ to $B$ in the field of $Q$: along $\gamma_2$ the radial segment gives all the work and the circular arc gives none, and along $\gamma_1$ the same work is obtained"}

:::dimostrazione
The field of $Q$ is $\vec{E} = \dfrac{kQ}{r^2}\,\hat{r}$, as seen in the topic on the electric field. An infinitesimal displacement $d\vec{\ell}$ along the curve is decomposed into a part along $\hat{r}$, of signed length $dr$, and a part perpendicular to $\hat{r}$. The field is radial, so the perpendicular part gives no contribution and $\vec{E} \cdot d\vec{\ell} = \dfrac{kQ}{r^2}\,dr$. Therefore
$$
W_{A \to B} = q_0 \int_{r_A}^{r_B} \frac{kQ}{r^2}\,dr = k Q q_0 \left[ -\frac{1}{r} \right]_{r_A}^{r_B} = k Q q_0 \left( \frac{1}{r_A} - \frac{1}{r_B} \right) .
$$
The result contains only $r_A$ and $r_B$, so it does not depend on the curve.
:::
::::

## Conservative electrostatic field

::::teorema{#circuitazione-campo-elettrostatico titolo="Circulation of the electrostatic field"}
The electrostatic field $\vec{E}$ produced by any system of charges at rest is **conservative**: the work done by the electric force on a test charge between two points $A$ and $B$ is the same for all curves joining them. Equivalently, the circulation of $\vec{E}$ along every closed curve $\gamma$ is zero,
$$
\oint_\gamma \vec{E} \cdot d\vec{\ell} = 0 .
$$
The electric potential energy and the potential are based on this property. A charge that travels along a closed curve and returns to its starting point receives zero total work from the electrostatic field; for this reason, a generator is needed to make a current flow in a closed circuit, as seen in the topic on electric current and direct-current circuits.

:::dimostrazione
For a single point charge one applies the **work in the field of a point charge**. On a closed curve the initial point and the final point coincide, so $r_A = r_B$ and the work is zero. For a system of charges $Q_1, \dots, Q_n$ the field is the sum of the fields $\vec{E}_i$ of the individual charges, by the superposition principle, and the line integral is linear, therefore
$$
\oint_\gamma \vec{E} \cdot d\vec{\ell} = \sum_{i=1}^{n} \oint_\gamma \vec{E}_i \cdot d\vec{\ell} = 0 .
$$
For a continuous distribution the argument is the same, with an integral over the charge in place of the sum. Finally, if $\gamma_1$ and $\gamma_2$ are two curves from $A$ to $B$, the closed curve formed by $\gamma_1$ and by $\gamma_2$ traversed backward has zero circulation; so the integrals of $\vec{E}$ along $\gamma_1$ and along $\gamma_2$ are equal.
:::
::::

:::richiamo{titolo="Stokes' theorem"}
If $S$ is an oriented surface with boundary $\partial S$ oriented consistently and $\vec{F}$ is a field of class $C^1$, then $\displaystyle\oint_{\partial S} \vec{F} \cdot d\vec{\ell} = \iint_S (\nabla \times \vec{F}) \cdot \hat{n}\,dA$. See the topic on surfaces, flux and the theorems of Gauss and Stokes in Mathematical Analysis 2.
:::

:::osservazione{#forma-locale-circuitazione titolo="Local form of zero circulation"}
By Stokes' theorem the circulation of $\vec{E}$ along the boundary of a surface is the flux of the curl of $\vec{E}$ through the surface. The circulation is zero along *every* closed curve, so the flux of the curl is zero through every surface, and therefore
$$
\nabla \times \vec{E} = \vec{0}
$$
at every point. The relation holds for fields produced by charges at rest. In the presence of time-varying magnetic fields the circulation of the electric field is nonzero; see the topic on electromagnetic induction.
:::

## Electric potential energy

:::definizione{#energia-potenziale-elettrica titolo="Electric potential energy"}
Since the electrostatic field is conservative, a charge $q_0$ placed in an electrostatic field is assigned a **potential energy** $U$, a function of position, such that for every pair of points
$$
W_{A \to B} = U_A - U_B = -\Delta U .
$$
The potential energy is defined up to an additive constant, which is fixed by choosing the point where $U = 0$; for charges contained in a bounded region one usually chooses $U = 0$ at infinite distance. It is measured in joules. When the field does positive work the potential energy decreases, as happens for the weight of a body moving down (see the topic on work and energy).
:::

::::teorema{#energia-potenziale-due-cariche titolo="Potential energy of two point charges"}
Two point charges $q_1$ and $q_2$ at distance $r$ have the potential energy, chosen to be zero at infinite distance,
$$
U(r) = \frac{k\, q_1 q_2}{r} .
$$
The sign of $U$ is the sign of the product $q_1 q_2$.

- If the charges have the same sign, $U > 0$ and $U$ decreases as $r$ increases; positive external work is needed to bring the charges closer.
- If the charges have opposite signs, $U < 0$ and $U$ increases toward $0$ as $r$ increases; the system is bound, and the external work $\dfrac{k\,|q_1 q_2|}{r}$ is needed to separate the charges to infinite distance.

For example, in the hydrogen atom the electron and the proton are about $5.3 \cdot 10^{-11}\,\mathrm{m}$ apart, and the potential energy is $U = -\dfrac{8.99 \cdot 10^9 \cdot (1.60 \cdot 10^{-19})^2}{5.3 \cdot 10^{-11}}\,\mathrm{J} \approx -4.3 \cdot 10^{-18}\,\mathrm{J}$.

::grafico{f="1/x;-1/x" xmin=0 xmax=5 ymin=-3 ymax=3 nomi="r,U" legenda="q_1 q_2 > 0;q_1 q_2 < 0" titolo="Potential energy of two charges as a function of distance: positive and decreasing for charges of the same sign, negative and increasing toward $0$ for charges of opposite sign"}

:::dimostrazione
Keep $q_1$ fixed and consider $q_2$ as the test charge. By the work in the field of a point charge, when $q_2$ goes from distance $r$ to infinite distance the field of $q_1$ does the work $W_{r \to \infty} = k q_1 q_2 \left( \dfrac{1}{r} - 0 \right)$. By the definition of potential energy $W_{r \to \infty} = U(r) - U(\infty) = U(r)$, so $U(r) = \dfrac{k q_1 q_2}{r}$.
:::
::::

## Electric potential and potential difference

:::definizione{#potenziale-elettrico titolo="Electric potential"}
The **electric potential** at a point $P$ is the potential energy per unit charge of a test charge $q_0$ placed at $P$,
$$
V(P) = \frac{U(P)}{q_0} .
$$
The potential depends only on the source charges and on the position of $P$, and it is measured in **volts**, $1\,\mathrm{V} = 1\,\mathrm{J/C}$. The potential difference between $B$ and $A$ is $\Delta V = V_B - V_A$, and the work done by the field on a charge $q$ going from $A$ to $B$ is
$$
W_{A \to B} = -q\, \Delta V = q\,(V_A - V_B) .
$$
A positive charge left free moves toward lower potentials and a negative charge toward higher potentials; in both cases its potential energy decreases. For example, a charge of $3.0\,\mu\mathrm{C}$ that goes from a point at $120\,\mathrm{V}$ to a point at $20\,\mathrm{V}$ receives from the field the work $3.0 \cdot 10^{-6} \cdot 100\,\mathrm{J} = 3.0 \cdot 10^{-4}\,\mathrm{J}$.
:::

::::teorema{#differenza-di-potenziale-e-campo titolo="Potential difference and field"}
In an electrostatic field $\vec{E}$, for every curve $\gamma$ from $A$ to $B$
$$
V_B - V_A = -\int_\gamma \vec{E} \cdot d\vec{\ell} .
$$
The potential is therefore obtained from the field with a line integral, computed along the most convenient curve; with the reference at infinity one has $V(P) = \displaystyle\int_P^{\infty} \vec{E} \cdot d\vec{\ell}$. The formula also shows that the field can be measured in volts per meter, and indeed $1\,\mathrm{V/m} = 1\,\mathrm{J/(C \cdot m)} = 1\,\mathrm{N/C}$.

:::dimostrazione
By the definition of the work done by the electric force $W_{A \to B} = q_0 \displaystyle\int_\gamma \vec{E} \cdot d\vec{\ell}$, and by the definition of potential $W_{A \to B} = q_0\,(V_A - V_B)$. Equating the two expressions and dividing by $q_0$ gives the claim. The result does not depend on $\gamma$, because the circulation of the electrostatic field is zero.
:::
::::

::::teorema{#potenziale-campo-uniforme titolo="Potential difference in a uniform field"}
In a uniform field $\vec{E}$, for any two points $A$ and $B$
$$
V_B - V_A = -\vec{E} \cdot \overrightarrow{AB} = -E\, d ,
$$
where $d$ is the projection of the displacement from $A$ to $B$ onto the direction of $\vec{E}$, positive if in the same direction as the field. The potential decreases linearly along the field lines and remains constant in the directions perpendicular to the field. For example, between two flat parallel plates a distance $d = 5.0\,\mathrm{mm}$ apart with a potential difference of $200\,\mathrm{V}$ the field, uniform if edge effects are negligible, is $E = \dfrac{\Delta V}{d} = 4.0 \cdot 10^4\,\mathrm{V/m}$.

::grafico{assi=0 uguale=1 linee="0,0 0,4.5;6,0 6,4.5" vettori="0.4,0.4,1.6,0.4;0.4,2.2,1.6,2.2,E;0.4,4,1.6,4;4.3,0.4,5.5,0.4;4.3,4,5.5,4" segmenti="1.5,1.2,4.5,3.4;1.5,1.2,4.5,1.2;4.5,1.2,4.5,3.4" punti="1.5,1.2,pieno,A;4.5,3.4,pieno,B" etichette="3,0.85,d;-0.35,2.25,+;6.3,2.25,−" xmin=-0.6 xmax=6.6 ymin=-0.3 ymax=4.8 titolo="In the uniform field between two plates only the projection $d$ of the displacement $\overrightarrow{AB}$ onto the direction of the field matters, and $V_B - V_A = -E d$"}

:::dimostrazione
Choose as the curve the segment from $A$ to $B$. The field is constant, so it comes out of the integral and
$$
\int_{AB} \vec{E} \cdot d\vec{\ell} = \vec{E} \cdot \int_{AB} d\vec{\ell} = \vec{E} \cdot \overrightarrow{AB} = E\, d ,
$$
because the dot product is the magnitude of $\vec{E}$ times the projection of $\overrightarrow{AB}$ onto the direction of the field. The claim follows from the theorem on potential difference and field.
:::
::::

:::definizione{#elettronvolt titolo="Electronvolt"}
The **electronvolt** is the work that the field does on a charge $e$ when it crosses a potential difference of $1\,\mathrm{V}$ toward lower potentials,
$$
1\,\mathrm{eV} = 1.60 \cdot 10^{-19}\,\mathrm{C} \cdot 1\,\mathrm{V} = 1.60 \cdot 10^{-19}\,\mathrm{J} .
$$
The electronvolt is a unit of energy, while the volt is the unit of potential. It is used for the energies of electrons, ions and nuclei, which in joules are very small numbers: an electron accelerated from rest through a potential difference of $2.0\,\mathrm{kV}$ acquires the kinetic energy $2.0\,\mathrm{keV} = 3.2 \cdot 10^{-16}\,\mathrm{J}$, and the potential energy of the hydrogen atom is about $-27\,\mathrm{eV}$.
:::

## Potential of point charges

::::teorema{#potenziale-carica-puntiforme titolo="Potential of a point charge"}
The potential of a point charge $Q$ at distance $r$, with $V = 0$ at infinite distance, is
$$
V(r) = \frac{kQ}{r} .
$$
The potential has the sign of $Q$ and its absolute value decreases as $\dfrac{1}{r}$, more slowly than the magnitude of the field, which decreases as $\dfrac{1}{r^2}$. For example, at $30\,\mathrm{cm}$ from a charge of $2.0\,\mathrm{nC}$ the potential is $V = \dfrac{8.99 \cdot 10^9 \cdot 2.0 \cdot 10^{-9}}{0.30}\,\mathrm{V} \approx 60\,\mathrm{V}$.

:::dimostrazione
By the potential energy of two point charges, a test charge $q_0$ at distance $r$ from $Q$ has potential energy $U = \dfrac{kQq_0}{r}$. By the definition of potential one divides by $q_0$ and obtains $V = \dfrac{kQ}{r}$.
:::
::::

::::teorema{#sovrapposizione-potenziale titolo="Potential of a system of charges"}
The potential produced at a point $P$ by the point charges $Q_1, \dots, Q_n$, at distances $r_1, \dots, r_n$ from $P$, is the sum of the potentials of the individual charges,
$$
V(P) = \sum_{i=1}^{n} \frac{k Q_i}{r_i} .
$$
The sum is a sum of scalars, so it does not require decomposing vectors into components, and for this reason the potential is easier to compute than the field. At the midpoint between two charges $+q$ and $-q$ the potential is zero, because the two terms are opposite, while the field is nonzero, because the two fields have the same direction. The potential at a point measures the external work per unit charge needed to bring a charge there slowly from infinity, the field measures the force per unit charge at that point.

:::dimostrazione
By the superposition principle the field is $\vec{E} = \sum_i \vec{E}_i$. By the potential difference and field, with the reference at infinity,
$$
V(P) = \int_P^{\infty} \vec{E} \cdot d\vec{\ell} = \sum_{i=1}^{n} \int_P^{\infty} \vec{E}_i \cdot d\vec{\ell} = \sum_{i=1}^{n} \frac{k Q_i}{r_i} ,
$$
where the last step uses the potential of a point charge for each term.
:::
::::

::::teorema{#potenziale-dipolo titolo="Potential of a dipole at large distance"}
A dipole is formed by the charges $+q$ and $-q$ at distance $d$, with dipole moment $\vec{p}$ of magnitude $p = qd$, directed from the negative to the positive charge. At a point $P$ at distance $r$ from the center of the dipole, with $r$ much greater than $d$, and such that the segment from the center to $P$ makes the angle $\theta$ with $\vec{p}$, the potential is
$$
V \approx \frac{k\, p \cos\theta}{r^2} .
$$
The potential is zero on the plane perpendicular to the dipole through its center, where $\theta = 90^\circ$, and it decreases as $\dfrac{1}{r^2}$, faster than that of a point charge, because at large distance the contributions of the two charges almost cancel.

::grafico{assi=0 uguale=1 linee="-1.13,-0.59 -1.23,-0.57 -1.32,-0.53 -1.40,-0.48 -1.47,-0.41 -1.53,-0.34 -1.57,-0.26 -1.61,-0.17 -1.63,-0.06 -1.63,0.06 -1.61,0.17 -1.57,0.27 -1.52,0.35 -1.46,0.42 -1.39,0.48 -1.32,0.53 -1.22,0.57 -1.12,0.59 -0.99,0.59 -0.88,0.57 -0.79,0.54 -0.71,0.49 -0.64,0.43 -0.58,0.36 -0.53,0.27 -0.49,0.18 -0.47,0.07 -0.47,-0.04 -0.49,-0.16 -0.52,-0.25 -0.57,-0.34 -0.62,-0.41 -0.69,-0.47 -0.77,-0.53 -0.86,-0.57 -0.96,-0.59 -1.09,-0.60 -1.13,-0.59;-1.24,-0.96 -1.40,-0.93 -1.55,-0.87 -1.67,-0.80 -1.78,-0.71 -1.88,-0.60 -1.96,-0.48 -2.02,-0.34 -2.06,-0.19 -2.08,-0.01 -2.07,0.17 -2.03,0.33 -1.96,0.47 -1.89,0.59 -1.79,0.70 -1.68,0.79 -1.56,0.87 -1.42,0.92 -1.25,0.96 -1.06,0.96 -0.90,0.93 -0.76,0.87 -0.64,0.79 -0.53,0.69 -0.44,0.58 -0.37,0.45 -0.32,0.31 -0.29,0.14 -0.28,-0.05 -0.30,-0.23 -0.34,-0.38 -0.41,-0.52 -0.49,-0.64 -0.58,-0.74 -0.69,-0.83 -0.83,-0.90 -0.98,-0.95 -1.16,-0.96 -1.24,-0.96;-1.47,-1.47 -1.72,-1.43 -1.94,-1.35 -2.13,-1.24 -2.30,-1.10 -2.44,-0.95 -2.56,-0.77 -2.66,-0.57 -2.73,-0.34 -2.77,-0.07 -2.75,0.22 -2.70,0.46 -2.61,0.68 -2.50,0.87 -2.37,1.03 -2.21,1.18 -2.03,1.30 -1.83,1.39 -1.59,1.46 -1.31,1.47 -1.06,1.43 -0.84,1.34 -0.66,1.23 -0.50,1.08 -0.38,0.91 -0.27,0.71 -0.20,0.48 -0.16,0.23 -0.15,-0.06 -0.17,-0.33 -0.23,-0.58 -0.31,-0.79 -0.42,-0.98 -0.56,-1.14 -0.73,-1.28 -0.92,-1.38 -1.15,-1.45 -1.43,-1.47 -1.47,-1.47;1.30,-1.47 1.58,-1.46 1.82,-1.40 2.03,-1.30 2.21,-1.18 2.36,-1.04 2.50,-0.87 2.61,-0.68 2.70,-0.47 2.75,-0.23 2.77,0.06 2.73,0.33 2.66,0.56 2.57,0.76 2.45,0.94 2.30,1.10 2.14,1.23 1.95,1.34 1.73,1.42 1.47,1.47 1.20,1.46 0.96,1.40 0.76,1.30 0.59,1.17 0.44,1.01 0.33,0.83 0.24,0.62 0.18,0.38 0.15,0.11 0.15,-0.18 0.19,-0.44 0.26,-0.67 0.36,-0.88 0.48,-1.06 0.63,-1.21 0.81,-1.33 1.02,-1.42 1.27,-1.47 1.30,-1.47;1.07,-0.96 1.26,-0.96 1.43,-0.92 1.57,-0.86 1.69,-0.78 1.80,-0.69 1.89,-0.58 1.97,-0.46 2.03,-0.32 2.07,-0.16 2.08,0.02 2.06,0.20 2.02,0.35 1.95,0.49 1.87,0.61 1.78,0.71 1.67,0.80 1.54,0.88 1.40,0.93 1.23,0.96 1.04,0.96 0.88,0.92 0.74,0.86 0.62,0.78 0.52,0.68 0.43,0.56 0.36,0.43 0.31,0.28 0.28,0.11 0.28,-0.08 0.30,-0.25 0.35,-0.40 0.42,-0.54 0.50,-0.66 0.60,-0.76 0.71,-0.84 0.85,-0.91 1.00,-0.95 1.07,-0.96;0.96,-0.59 1.09,-0.60 1.20,-0.58 1.30,-0.54 1.38,-0.49 1.45,-0.43 1.51,-0.37 1.56,-0.29 1.60,-0.20 1.63,-0.09 1.63,0.03 1.62,0.14 1.58,0.24 1.54,0.32 1.48,0.40 1.42,0.46 1.34,0.52 1.25,0.56 1.15,0.59 1.03,0.60 0.91,0.58 0.82,0.55 0.73,0.50 0.66,0.45 0.60,0.38 0.55,0.30 0.50,0.21 0.48,0.11 0.47,-0.01 0.48,-0.12 0.51,-0.22 0.55,-0.31 0.61,-0.39 0.67,-0.46 0.74,-0.51 0.83,-0.55 0.93,-0.59 0.96,-0.59" segmenti="0,-3,0,3" punti="1,0,pieno;-1,0,pieno" etichette="0.15,2.6,V = 0;0.85,0.18,+q;-1.2,0.18,−q" xmin=-4.5 xmax=4.5 ymin=-3 ymax=3 titolo="Equipotential lines of a dipole in the plane containing it: closed curves around each charge, with opposite potentials at symmetric positions, and the plane of symmetry at zero potential"}

:::dimostrazione
Let $r_+$ and $r_-$ be the distances of $P$ from the charges $+q$ and $-q$. By the potential of a system of charges
$$
V = kq \left( \frac{1}{r_+} - \frac{1}{r_-} \right) = kq\, \frac{r_- - r_+}{r_+\, r_-} .
$$
If $r$ is much greater than $d$, the segments from $P$ to the two charges are almost parallel; the difference $r_- - r_+$ is approximately the projection of the segment of length $d$ onto the direction of $P$, that is, $d\cos\theta$, and the product $r_+ r_-$ is approximately $r^2$. Substituting gives $V \approx \dfrac{kqd\cos\theta}{r^2} = \dfrac{kp\cos\theta}{r^2}$.
:::
::::

## Potential of continuous distributions

:::osservazione{#potenziale-distribuzione-continua titolo="Potential of a continuous distribution"}
The distribution is divided into charge elements $dq$, each small enough to be considered pointlike; the element at distance $r$ from $P$ gives the contribution $\dfrac{k\,dq}{r}$, and by the potential of a system of charges the total potential is the sum of the contributions, which in the limit becomes
$$
V(P) = k \int \frac{dq}{r} ,
$$
with $dq = \lambda\, d\ell$ for a line distribution, $dq = \sigma\, dA$ for a surface distribution and $dq = \rho\, d\tau$ for a volume distribution, where $d\tau$ is the volume element. The integrand is a scalar, so the computation of components needed for the field is avoided; for multiple integrals, see the topic on double and triple integrals in Mathematical Analysis 2. The formula assumes $V = 0$ at infinity, and therefore it applies to distributions contained in a bounded region.
:::

::::teorema{#potenziale-anello titolo="Potential of a ring on its axis"}
A thin ring of radius $R$ carries the charge $Q$ distributed uniformly. At a point $P$ on the axis of the ring at distance $x$ from the center the potential is
$$
V(x) = \frac{kQ}{\sqrt{R^2 + x^2}} .
$$
The potential is maximum at the center, where it equals $\dfrac{kQ}{R}$, and for $x$ much greater than $R$ it tends to $\dfrac{kQ}{|x|}$, the potential of a point charge. For example, for $R = 5.0\,\mathrm{cm}$ and $Q = 10\,\mathrm{nC}$ the potential at the center is $\dfrac{8.99 \cdot 10^9 \cdot 1.0 \cdot 10^{-8}}{0.050}\,\mathrm{V} \approx 1.8\,\mathrm{kV}$.

::grafico{assi=0 uguale=1 curve="0.35*cos(t),2*sin(t),0,6.29" linee="-1,0 5.6,0" segmenti="0,2,4,0;0,0,0,2" punti="0,2,pieno,dq;4,0,pieno,P;0,0,pieno" etichette="-0.45,1,R;2,-0.35,x;2.25,1.35,r" xmin=-1.2 xmax=5.8 ymin=-2.4 ymax=2.6 titolo="Every element $dq$ of the ring is at the same distance $r = \sqrt{R^2 + x^2}$ from $P$, so the potential at $P$ is $\dfrac{kQ}{r}$"}

:::dimostrazione
By the potential of a continuous distribution $V = k \displaystyle\int \frac{dq}{r}$. Every element $dq$ of the ring is at the same distance $r = \sqrt{R^2 + x^2}$ from $P$, by the Pythagorean theorem in the right triangle with legs $R$ and $x$. The denominator is constant and comes out of the integral, therefore
$$
V = \frac{k}{\sqrt{R^2 + x^2}} \int dq = \frac{kQ}{\sqrt{R^2 + x^2}} .
$$
:::
::::

::::teorema{#potenziale-disco titolo="Potential of a disk on its axis"}
A thin disk of radius $R$ carries a charge distributed uniformly with surface density $\sigma$. At a point on the axis of the disk at distance $x > 0$ from the center the potential is
$$
V(x) = \frac{\sigma}{2\varepsilon_0} \left( \sqrt{R^2 + x^2} - x \right) .
$$
At the center of the disk the potential equals $\dfrac{\sigma R}{2\varepsilon_0}$. For $x$ much greater than $R$ one has $\sqrt{R^2 + x^2} - x = \dfrac{R^2}{\sqrt{R^2 + x^2} + x} \approx \dfrac{R^2}{2x}$, so $V \approx \dfrac{\sigma \pi R^2}{4\pi\varepsilon_0\, x} = \dfrac{kQ}{x}$, with $Q = \sigma \pi R^2$ the charge of the disk, as for a point charge.

:::dimostrazione
The disk is divided into concentric rings of radius $s$ and width $ds$; the ring has area $2\pi s\, ds$ and charge $dq = 2\pi\sigma s\, ds$. By the potential of a ring on its axis its contribution is $\dfrac{k\, dq}{\sqrt{s^2 + x^2}}$, so
$$
\begin{aligned}
V &= \int_0^R \frac{2\pi k \sigma\, s}{\sqrt{s^2 + x^2}}\, ds \\[6pt]
&= 2\pi k \sigma \left[ \sqrt{s^2 + x^2} \right]_0^R \\[6pt]
&= \frac{\sigma}{2\varepsilon_0} \left( \sqrt{R^2 + x^2} - x \right) ,
\end{aligned}
$$
where $2\pi k = \dfrac{2\pi}{4\pi\varepsilon_0} = \dfrac{1}{2\varepsilon_0}$ and $\sqrt{x^2} = x$ for $x > 0$ have been used.
:::
::::

:::richiamo{titolo="Field of a spherically symmetric distribution"}
For a charge $Q$ distributed with spherical symmetry in a sphere of radius $R$, the field is radial and, at distance $r$ from the center, equals $E = \dfrac{kQ}{r^2}$ for $r \geq R$. Inside, for $r < R$, the field is zero if the charge lies on a thin spherical shell and equals $E = \dfrac{kQ\,r}{R^3}$ if the charge is distributed uniformly throughout the volume (see the topic on electric flux and Gauss's law).
:::

::::teorema{#potenziale-sfera titolo="Potential of a charged sphere"}
A charge $Q$ is distributed with spherical symmetry in a sphere of radius $R$. Outside, for $r \geq R$, the potential is that of a point charge placed at the center, $V(r) = \dfrac{kQ}{r}$. Inside:

- for a thin spherical shell the potential is constant, $V(r) = \dfrac{kQ}{R}$;
- for a sphere uniformly charged throughout its volume
$$
V(r) = \frac{kQ\,(3R^2 - r^2)}{2R^3} .
$$

In the second case the potential at the center is $\dfrac{3}{2}$ of the potential at the surface. In both cases $V$ is continuous at $r = R$, while the field of the shell is discontinuous at the surface.

::grafico{f="x<1 ? (3-x^2)/2 : 1/x;x<1 ? x : 1/x^2" segmenti="1,0,1,1.5" etichette="1.05,1.62,R" xmin=0 xmax=4 ymin=0 ymax=1.8 nomi="r,V  E" legenda="V(r);E(r)" titolo="Potential and field of a uniformly charged sphere, with $R = 1$ and $\dfrac{kQ}{R} = 1$ and the field in units of $\dfrac{kQ}{R^2}$: the potential has a maximum at the center, where the field is zero"}

:::dimostrazione
The field is radial, so one integrates along a radius and, by the potential difference and field, $V(r) = \displaystyle\int_r^{\infty} E(s)\, ds$. For $r \geq R$ one has $V(r) = \displaystyle\int_r^{\infty} \frac{kQ}{s^2}\, ds = \frac{kQ}{r}$. For $r < R$ the integral is split at $r = R$:
$$
V(r) = V(R) + \int_r^R E(s)\, ds = \frac{kQ}{R} + \int_r^R E(s)\, ds .
$$
For the shell the interior field is zero, so $V(r) = \dfrac{kQ}{R}$. For the uniformly charged sphere
$$
V(r) = \frac{kQ}{R} + \frac{kQ}{R^3} \cdot \frac{R^2 - r^2}{2} = \frac{kQ\,(3R^2 - r^2)}{2R^3} .
$$
:::
::::

::::teorema{#potenziale-filo-infinito titolo="Potential difference in the field of an infinite wire"}
An infinite straight wire carries a charge distributed uniformly with linear density $\lambda$. For two points at distances $r_A$ and $r_B$ from the wire
$$
V_B - V_A = \frac{\lambda}{2\pi\varepsilon_0} \ln \frac{r_A}{r_B} .
$$
The potential cannot be set to zero at infinity, because for $r_B \to +\infty$ the logarithm diverges; the charge of the wire indeed extends to infinity. One then chooses $V = 0$ at a finite distance $r_0$, and obtains $V(r) = \dfrac{\lambda}{2\pi\varepsilon_0} \ln \dfrac{r_0}{r}$. For $\lambda = 10\,\mathrm{nC/m}$ the difference between the potential at $1.0\,\mathrm{cm}$ and that at $10\,\mathrm{cm}$ from the wire is $2k\lambda \ln 10 \approx 4.1 \cdot 10^2\,\mathrm{V}$.

:::dimostrazione
By Gauss's law the field of the wire is radial and equals $E = \dfrac{\lambda}{2\pi\varepsilon_0\, r}$ (see the topic on electric flux and Gauss's law). Integrating along a radius, by the potential difference and field
$$
V_B - V_A = -\int_{r_A}^{r_B} \frac{\lambda}{2\pi\varepsilon_0\, r}\, dr = -\frac{\lambda}{2\pi\varepsilon_0} \ln \frac{r_B}{r_A} = \frac{\lambda}{2\pi\varepsilon_0} \ln \frac{r_A}{r_B} .
$$
:::
::::

## Equipotential surfaces

:::definizione{#superfici-equipotenziali titolo="Equipotential surfaces"}
An **equipotential surface** is the set of points where the potential has an assigned value $V_0$, that is, the surface with equation $V(x, y, z) = V_0$. For a point charge the equipotential surfaces are spheres concentric with the charge, for a uniform field they are planes perpendicular to the field. The work done by the field on a charge moving between two points of the same equipotential surface is zero, because $W = -q\,\Delta V$ and $\Delta V = 0$.

::grafico{assi=0 uguale=1 curve="cos(t),sin(t),0,6.29;1.5*cos(t),1.5*sin(t),0,6.29;3*cos(t),3*sin(t),0,6.29" vettori="0.3,0,3.7,0;0,0.3,0,3.7;-0.3,0,-3.7,0;0,-0.3,0,-3.7;0.21,0.21,2.62,2.62,E;-0.21,0.21,-2.62,2.62;-0.21,-0.21,-2.62,-2.62;0.21,-0.21,2.62,-2.62" punti="0,0,pieno,+Q" etichette="0.68,-1.02,V₁;0.62,-1.66,V₂;2.98,-1.1,V₃" xmin=-4 xmax=4 ymin=-4 ymax=4 legenda=0 titolo="Equipotential surfaces of a positive charge with equal potential steps, $V_1 = 3V_3$ and $V_2 = 2V_3$: the spheres spread apart where the field is weaker, and the field lines cross them perpendicularly"}

:::

::::teorema{#campo-perpendicolare-equipotenziali titolo="Field and equipotential surfaces"}
At every point the electrostatic field is perpendicular to the equipotential surface through that point and is directed toward decreasing potentials. If two nearby equipotential surfaces differ by $\Delta V$ and are a distance $\Delta s$ apart, the magnitude of the field between them is approximately
$$
E \approx \frac{|\Delta V|}{\Delta s} .
$$
The field is therefore stronger where the equipotential surfaces with equal potential steps are closer together. Field lines and equipotential surfaces are drawn together: once one family is known, the other is drawn perpendicular to it.

:::dimostrazione
By the potential difference and field, an infinitesimal displacement $d\vec{\ell}$ produces the change $dV = -\vec{E} \cdot d\vec{\ell}$. If $d\vec{\ell}$ is tangent to the equipotential surface, $dV = 0$ and therefore $\vec{E} \cdot d\vec{\ell} = 0$; the field is perpendicular to every tangent direction, that is, to the surface. If $d\vec{\ell}$ is in the same direction as $\vec{E}$, $dV = -E\, d\ell < 0$, therefore the potential decreases in the direction of the field. Finally, along the normal the two surfaces are a distance $\Delta s$ apart and $|\Delta V| \approx E\, \Delta s$, from which the estimate of the magnitude follows.
:::
::::

## Field as the gradient of the potential

:::richiamo{titolo="Gradient"}
The gradient of a differentiable function $f(x, y, z)$ is the vector $\nabla f = \left( \dfrac{\partial f}{\partial x}, \dfrac{\partial f}{\partial y}, \dfrac{\partial f}{\partial z} \right)$, and the differential of $f$ is $df = \nabla f \cdot d\vec{r}$. The gradient is perpendicular to the level sets of $f$ and points toward increasing values. See the topic on differential calculus in several variables in Mathematical Analysis 2.
:::

::::teorema{#campo-gradiente-potenziale titolo="Field as the gradient of the potential"}
If the potential $V$ is differentiable, the electrostatic field is
$$
\vec{E} = -\nabla V , \qquad \text{that is} \qquad E_x = -\frac{\partial V}{\partial x} , \quad E_y = -\frac{\partial V}{\partial y} , \quad E_z = -\frac{\partial V}{\partial z} .
$$
If $V$ depends only on the distance $r$ from a center, the field is radial with component $E_r = -\dfrac{dV}{dr}$. The theorem makes it possible to compute first the potential, which is a sum of scalars, and then the field with a differentiation. For example, from the potential of a ring on its axis one obtains
$$
E_x = -\frac{d}{dx}\, \frac{kQ}{\sqrt{R^2 + x^2}} = \frac{kQ\, x}{(R^2 + x^2)^{\frac{3}{2}}} ,
$$
which is the field of the ring derived by integration in the topic on the electric field.

:::dimostrazione
By the potential difference and field, applied to an infinitesimal displacement $d\vec{r}$, the change in the potential is $dV = -\vec{E} \cdot d\vec{r}$. On the other hand $V$ is differentiable, so $dV = \nabla V \cdot d\vec{r}$. Equating gives $(\vec{E} + \nabla V) \cdot d\vec{r} = 0$ for every $d\vec{r}$, and a vector whose dot product with every vector is zero is the zero vector; therefore $\vec{E} = -\nabla V$.
:::
::::

:::esempio{titolo="Field from a given potential"}
In a region free of charges the potential is $V(x, y) = a\,(x^2 - y^2)$ with $a = 40\,\mathrm{V/m^2}$. By the field as the gradient of the potential
$$
E_x = -\frac{\partial V}{\partial x} = -2ax , \qquad E_y = -\frac{\partial V}{\partial y} = 2ay .
$$
At the point with coordinates $(1.0\,\mathrm{m},\ 0.50\,\mathrm{m})$ one has $\vec{E} = (-80\,\hat{\imath} + 40\,\hat{\jmath})\,\mathrm{V/m}$, with magnitude $\sqrt{80^2 + 40^2}\,\mathrm{V/m} \approx 89\,\mathrm{V/m}$. The equipotential lines $x^2 - y^2 = \text{constant}$ are hyperbolas, and the field is perpendicular to them at every point.
:::

## Energy of a system of charges

::::teorema{#energia-sistema-cariche titolo="Electrostatic energy of a system of charges"}
The electrostatic potential energy of a system of point charges $q_1, \dots, q_n$, with $r_{ij}$ the distance between $q_i$ and $q_j$, is the sum of the contributions of all pairs, each counted once:
$$
U = \sum_{i < j} \frac{k\, q_i q_j}{r_{ij}} .
$$
The number $U$ is the external work needed to assemble the system by bringing the charges one at a time from infinity, with negligible speed; $-U$ is the external work needed to separate them again to infinite distances. For example, for the charges $+q$, $+q$, $-q$ at the vertices of an equilateral triangle of side $a$ there are three pairs and $U = \dfrac{kq^2}{a}(1 - 1 - 1) = -\dfrac{kq^2}{a}$; with $q = 1.0\,\mu\mathrm{C}$ and $a = 3.0\,\mathrm{cm}$ one obtains $U \approx -0.30\,\mathrm{J}$.

::grafico{assi=0 uguale=1 linee="0,0 4,0 2,3.464 0,0" punti="0,0,pieno,q₁;4,0,pieno,q₂;2,3.464,pieno,q₃" etichette="1.9,-0.4,r₁₂;0.55,1.85,r₁₃;3.05,1.85,r₂₃" xmin=-0.8 xmax=4.8 ymin=-0.8 ymax=4 titolo="Three charges and the three distances $r_{12}$, $r_{13}$, $r_{23}$: the energy of the system has one term for each pair"}

:::dimostrazione
Bring $q_1$ from infinity to its position: there are no other charges, so there is no field and the external work is zero. Then bring $q_2$: the charge moves in the field of $q_1$, and the external work, opposite to the work done by the field because the kinetic energy remains zero, is $q_2 V_1 = \dfrac{k q_1 q_2}{r_{12}}$, where $V_1$ is the potential of $q_1$ at the final position of $q_2$. The charge $q_3$ moves in the field of $q_1$ and $q_2$, so by the potential of a system of charges the external work is $q_3 \left( \dfrac{k q_1}{r_{13}} + \dfrac{k q_2}{r_{23}} \right)$. Continuing, the charge $q_j$ contributes one term for each charge $q_i$ with $i < j$ already present, and the sum of all the works is the claim.
:::
::::

:::osservazione{#energia-come-somma-potenziali titolo="Energy as a sum of charges times potentials"}
If $V_i$ is the potential at the position of $q_i$ produced by all the *other* charges, the energy of the system can be written
$$
U = \frac{1}{2} \sum_{i=1}^{n} q_i V_i .
$$
Indeed the sum $\sum_i q_i V_i$ contains each pair twice, once as $q_i \dfrac{k q_j}{r_{ij}}$ and once as $q_j \dfrac{k q_i}{r_{ij}}$, and the factor $\dfrac{1}{2}$ counts it only once. For a continuous distribution the system is assembled by adding charge little by little. For a spherical shell of radius $R$ that already carries the charge $q$, the potential at the surface is $\dfrac{kq}{R}$, and bringing the charge $dq$ from infinity requires the work $\dfrac{kq}{R}\,dq$; therefore the energy of a shell with charge $Q$ is
$$
U = \int_0^Q \frac{kq}{R}\, dq = \frac{kQ^2}{2R} = \frac{1}{2} Q V .
$$
For the energy stored in capacitors and in the electric field, see the topic on conductors, capacitors and dielectrics.
:::

## Motion of charges and conservation of energy

:::richiamo{titolo="Work-energy theorem"}
The total work of the forces acting on a point mass $m$ that goes from $A$ to $B$ equals the change in its kinetic energy, $W_{\text{tot}} = \dfrac{1}{2} m v_B^2 - \dfrac{1}{2} m v_A^2$ (see the topic on work and energy).
:::

::::teorema{#conservazione-energia-cariche titolo="Conservation of energy for a charge in an electrostatic field"}
Consider a particle of mass $m$ and charge $q$ subject only to the force of an electrostatic field, with negligible weight. Then the sum of the kinetic energy and the electric potential energy is conserved: for two points $A$ and $B$ of the trajectory
$$
\frac{1}{2} m v_A^2 + q V_A = \frac{1}{2} m v_B^2 + q V_B .
$$
A particle that starts from rest and crosses a potential difference of absolute value $|\Delta V|$, in the direction in which its potential energy decreases, reaches the speed
$$
v = \sqrt{\frac{2\, |q|\, |\Delta V|}{m}} .
$$
For example, an electron accelerated from rest through $100\,\mathrm{V}$ reaches $v = \sqrt{\dfrac{2 \cdot 1.60 \cdot 10^{-19} \cdot 100}{9.11 \cdot 10^{-31}}}\,\mathrm{m/s} \approx 5.9 \cdot 10^6\,\mathrm{m/s}$. The weight of the electron, about $9 \cdot 10^{-30}\,\mathrm{N}$, is negligible compared with electric forces such as $eE \approx 1.6 \cdot 10^{-17}\,\mathrm{N}$ in a field of only $100\,\mathrm{V/m}$.

:::dimostrazione
By the work-energy theorem the work done by the electric force, which is the only force, equals the change in kinetic energy, $W_{A \to B} = \dfrac{1}{2} m v_B^2 - \dfrac{1}{2} m v_A^2$. By the definition of potential $W_{A \to B} = q\,(V_A - V_B)$. Equating the two expressions and rearranging gives the claim. With $v_A = 0$ one has $\dfrac{1}{2} m v_B^2 = q\,(V_A - V_B) = |q|\,|\Delta V|$, from which the formula for the speed follows.
:::
::::

:::osservazione{#distanza-minima-avvicinamento titolo="Distance of closest approach"}
A particle of charge $q$ and kinetic energy $K_0$, very far from a fixed charge $Q$ of the same sign, moves toward $Q$ along the line joining them. The force is repulsive, so the particle slows down until it stops at the **distance of closest approach** $r_{\min}$ and then turns back. By conservation of energy, with $V = 0$ at infinity,
$$
K_0 = \frac{k\, q Q}{r_{\min}} \quad\Longrightarrow\quad r_{\min} = \frac{k\, q Q}{K_0} .
$$
For an alpha particle, of charge $2e$, with $K_0 = 5.0\,\mathrm{MeV}$, directed toward a gold nucleus of charge $79e$ considered at rest because it is much more massive, one obtains $r_{\min} = \dfrac{8.99 \cdot 10^9 \cdot 158 \cdot (1.60 \cdot 10^{-19})^2}{5.0 \cdot 10^6 \cdot 1.60 \cdot 10^{-19}}\,\mathrm{m} \approx 4.5 \cdot 10^{-14}\,\mathrm{m}$.

::grafico{f="2/x;1" punti="2,1,pieno" segmenti="2,0,2,1" etichette="2.4,0.2,r min;5.3,1.15,K₀" xmin=0 xmax=6 ymin=0 ymax=3 nomi="r,U" legenda="U(r) = \dfrac{kqQ}{r};K_0" titolo="The particle can be only where $U(r) \leq K_0$: the line with ordinate $K_0$ meets the potential energy curve at the turning point $r_{\min}$"}

:::
