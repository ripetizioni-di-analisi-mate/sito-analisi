---
titolo: "Atoms, bonds, states of matter and thermodynamics"
sommario: "Atomic structure, amount of substance, molecular geometry and polarity, properties of matter and the energy of chemical processes."
---

## Atoms, isotopes and nuclei

Losing an electron and changing the number of neutrons affect different properties. Comparing an atom, an ion and an isotope separates these two changes.

:::definizione{#atomo-isotopi titolo="Atomic number and mass number"}
An **atom** contains a nucleus of protons and neutrons surrounded by electrons. A proton has charge $+e$, an electron has charge $-e$, and a neutron is electrically neutral. A proton or neutron has a mass of approximately $1\,\mathrm{u}$, whereas an electron has a much smaller mass. The **atomic number** $Z$ counts protons and identifies the element. The **mass number** $A$ counts protons and neutrons, so the neutron number is $A-Z$.

The notation ${}^{A}_{Z}\mathrm{X}$ specifies the element and isotope. For example, ${}^{23}_{11}\mathrm{Na}$ contains 11 protons and 12 neutrons. A neutral atom contains $Z$ electrons; the $\mathrm{Na^+}$ ion contains 10 because its positive charge results from losing one electron.

![Comparison of magnesium 24, magnesium 25 and magnesium 24 ion: protons, neutrons and electrons](/figure/chimica-semestre-filtro/atomo-legami-termodinamica/isotopi-en.svg)
:::

:::definizione{#isotopi-rmn titolo="Isotopes and nuclear spin"}
**Isotopes** are atoms of the same element with different neutron numbers. ${}^{12}\mathrm C$ and ${}^{13}\mathrm C$ both have 6 protons but respectively 6 and 7 neutrons. The mean atomic mass of a sample is calculated from isotope masses and their abundance fractions by number of atoms, expressed as numbers between 0 and 1.

Some nuclei possess intrinsic angular momentum, called *spin*, and a magnetic moment. A magnetic field separates their energy states; radiation at an appropriate radiofrequency can induce transitions between these states. This is the basis of nuclear magnetic resonance. The ${}^{1}\mathrm H$ proton, abundant in water, is the nucleus most widely used in magnetic resonance imaging. An isotope can be stable and possess nuclear spin, so the phenomenon does not require radioactivity. The ${}^{1}\mathrm H$ nucleus has spin $I=\dfrac12$, whereas ${}^{12}\mathrm C$ has $I=0$. For a given nucleus, the energy separation $\Delta E=h\nu$ increases with magnetic field strength, so its resonance radiofrequency also changes. The detected signal depends on state populations and the return towards equilibrium after the pulse; field gradients encode position.
:::

## Orbitals, configurations and the periodic table

:::definizione{#numeri-quantici titolo="Quantum numbers and orbitals"}
An **orbital** is a function describing an electronic state; its squared modulus allows localisation probabilities to be calculated. It does not represent an electron trajectory. The state is characterised by the following quantum numbers.

| Number | Allowed values | Meaning |
| --- | --- | --- |
| $n$ | $1,2,3,\ldots$ | principal level |
| $l$ | $0,1,\ldots,n-1$ | subshell; $0=s$, $1=p$, $2=d$, $3=f$ |
| $m_l$ | $-l,-l+1,\ldots,l$ | orbital within the subshell |
| $m_s$ | $+\dfrac12$ or $-\dfrac12$ | electron spin projection |

A subshell with quantum number $l$ has $2l+1$ orbitals. A $p$ subshell therefore has 3 orbitals and can contain 6 electrons. A $2d$ orbital is not allowed because, for $n=2$, the only allowed $l$ values are 0 and 1.
:::

:::osservazione{#configurazioni titolo="Pauli, Hund and electron configurations"}
The **Pauli exclusion principle** allows at most two electrons in one orbital, with opposite spins. **Hund’s rule** states that, within a set of equal-energy orbitals, electrons occupy different orbitals with parallel spins before pairing. For elements in the first periods, building the lowest-energy state generally follows the order $1s,2s,2p,3s,3p,4s,3d,4p$; subshell energies depend on occupancy, and exceptions occur.

Carbon has configuration $1s^2\,2s^2\,2p^2$ and two unpaired electrons in the description of the isolated atom. Oxygen has configuration $1s^2\,2s^2\,2p^4$ and two unpaired electrons. For the main-group elements considered here, electrons in the outermost level are the *valence electrons*. Sodium, $[\mathrm{Ne}]\,3s^1$, loses its $3s$ electron when forming $\mathrm{Na^+}$, whose configuration is $[\mathrm{Ne}]$.

| Element | Outer configuration of the neutral atom | Valence electrons |
| --- | --- | --- |
| H | $1s^1$ | $1$ |
| C | $2s^2\,2p^2$ | $4$ |
| N | $2s^2\,2p^3$ | $5$ |
| O | $2s^2\,2p^4$ | $6$ |
| P | $3s^2\,3p^3$ | $5$ |
| S | $3s^2\,3p^4$ | $6$ |

![Occupancy of the three 2p orbitals in nitrogen and oxygen according to Pauli and Hund](/figure/chimica-semestre-filtro/atomo-legami-termodinamica/orbitali-en.svg)
:::

:::osservazione{#proprieta-periodiche titolo="Periodic properties"}
Across a period from left to right, nuclear attraction for valence electrons generally increases. Atomic radius therefore tends to decrease, whereas ionisation energy and electronegativity tend to increase. Down a group, the number of occupied levels increases and radius tends to increase. Atomic volume qualitatively follows atomic size, although it depends on the definition and physical state of the material.

**Ionisation energy** is the energy required to remove an electron from a gaseous species. In the IUPAC convention, **electron affinity** is the energy released when a neutral gaseous species gains an electron: exothermic attachment gives a positive affinity. If the energy change $\Delta E$ for the same process is reported instead, it is negative. Comparing data therefore requires checking the convention. Electronegativity measures a bonded atom’s tendency to attract bonding electrons. Periodic trends have exceptions and do not replace data for the element. Oxygen is more electronegative than carbon, so the $\mathrm{C-O}$ bond has electron density displaced towards O.
:::

## Masses, moles and particle numbers

:::definizione{#mole-masse titolo="Amount of substance and molar mass"}
The atomic mass unit $\mathrm u$ is one twelfth of the mass of a free neutral ${}^{12}\mathrm C$ atom in its ground state. Molecular mass is obtained by adding the masses of the atoms in a molecule. Relative molecular mass $M_r$ is molecular mass divided by $\mathrm u$ and is therefore dimensionless. An ionic solid has a formula-unit mass because its lattice does not consist of discrete molecules.

One **mole** contains exactly $6.02214076\cdot10^{23}$ specified entities. The Avogadro constant is $N_A=6.02214076\cdot10^{23}\,\mathrm{mol^{-1}}$. If $n$ is amount of substance, $m$ mass, $M$ molar mass and $N$ the entity count,
$$
n=\dfrac{m}{M},\qquad N=nN_A.
$$
Molar mass has units $\mathrm{g\,mol^{-1}}$ when mass is in grams. Using the approximate masses $\mathrm H=1.008\,\mathrm u$ and $\mathrm O=16.00\,\mathrm u$, water has molecular mass $18.016\,\mathrm u$ and molar mass approximately $18.016\,\mathrm{g\,mol^{-1}}$. One mole of water contains one mole of oxygen atoms and two moles of hydrogen atoms.
:::

:::esempio{titolo="From mass to molecules"}
Using $M=18.016\,\mathrm{g\,mol^{-1}}$, a $9.008\,\mathrm g$ water sample contains
$$
n=\dfrac{9.008}{18.016}\,\mathrm{mol}=0.5000\,\mathrm{mol},
\qquad N\simeq3.011\cdot10^{23}\text{ molecules}.
$$
The hydrogen atom count is twice the molecule count because each molecule contains two H atoms.

![One mole of water corresponds to two moles of hydrogen atoms and one mole of oxygen atoms](/figure/chimica-semestre-filtro/atomo-legami-termodinamica/entita-en.svg)
:::

## Chemical bonds and electronic structures

:::definizione{#legami titolo="Ionic, covalent and metallic bonding"}
A **covalent bond** involves shared electron density between atoms. In a nonpolar covalent bond, such as $\mathrm{H-H}$, equivalent atoms share electrons symmetrically. In a polar covalent bond, such as $\mathrm{O-H}$, different electronegativities produce partial charges $\delta^+$ and $\delta^-$.

An **ionic bond** is the electrostatic attraction contributing to the stability of a collection of cations and anions. In sodium chloride, the ratio of $\mathrm{Na^+}$ to $\mathrm{Cl^-}$ is 1:1, and the solid forms an extended lattice. In metallic bonding, valence electrons are delocalised over many centres, a condition associated with electrical conduction in metals.

In a coordinate covalent bond, the shared pair initially comes from one partner. For example, ammonia donates nitrogen’s lone pair to $\mathrm{H^+}$, forming $\mathrm{NH_4^+}$. Once formed, the ammonium ion’s four N-H bonds are equivalent.
:::

:::osservazione{#lewis-ottetto titolo="Lewis structures and the octet rule"}
A Lewis structure represents valence electrons as bonding pairs and lone pairs. For second-period elements, the **octet rule** describes many stable structures with eight electrons around an atom. Hydrogen instead completes a level with two electrons. The rule has limits, including odd-electron species and boron compounds with incomplete octets.

In $\mathrm{NH_3}$, nitrogen uses three of its five valence electrons in three bonds and retains a lone pair. In $\mathrm{CO_2}$, the structure $\mathrm{O=C=O}$ assigns an octet to every atom. When several Lewis structures differ only in electron placement, resonance describes a delocalised electron distribution; the individual formulas represent the same species. To build a formula, first count valence electrons, adding one for each negative charge and subtracting one for each positive charge. After placing bonds, distribute lone pairs and check octets and total charge. In $\mathrm{NH_4^+}$ there are $5+4-1=8$ electrons: four bonding pairs and no lone pair on nitrogen.
:::

:::definizione{#sigma-pi titolo="Orbital overlap and sigma and pi bonds"}
Atomic orbital overlap allows bonding orbitals of lower energy and antibonding orbitals of higher energy to be described. A **sigma** bond, $\sigma$, has electron density along the internuclear axis. A **pi** bond, $\pi$, results from sideways overlap of orbitals and has a nodal plane containing that axis.

A single bond is normally one $\sigma$ bond, a double bond contains one $\sigma$ and one $\pi$, and a triple bond contains one $\sigma$ and two $\pi$. A C=C double bond restricts rotation because unrestricted rotation would reduce sideways overlap. Bond distance is the equilibrium separation between nuclei; dissociation energy is the energy needed to break the bond under specified conditions. For the same bonded atoms, multiple bonds tend to be shorter and stronger than single bonds.

In the molecular orbital model, bond order is $\dfrac{n_b-n_a}{2}$, where $n_b$ and $n_a$ count bonding and antibonding electrons. In $\mathrm{H_2}$, two electrons occupy the bonding orbital and the order is one. Occupying an antibonding orbital reduces net bonding. In a reaction, breaking bonds requires energy and forming them releases energy; the outcome depends on the overall balance.

![Potential energy of a diatomic molecule: minimum at equilibrium separation and dissociation of the nuclei](/figure/chimica-semestre-filtro/atomo-legami-termodinamica/energia-legame-en.svg)
:::

## Geometry, polarity and intermolecular interactions

:::definizione{#geometria-ibridazione titolo="Electron domains and hybridisation"}
In the VSEPR model, electron-density regions around an atom arrange themselves to reduce repulsions. Each bond, including a multiple bond, counts as one domain; each lone pair is another. Molecular geometry describes atom positions and must be distinguished from the arrangement of all domains.

| Domains | Domain arrangement | Hybridisation in the localised model | Example |
| --- | --- | --- | --- |
| 2 | linear, $180^\circ$ | $sp$ | C in $\mathrm{CO_2}$ |
| 3 | trigonal planar, approximately $120^\circ$ | $sp^2$ | C in a carbonyl group |
| 4 | tetrahedral, approximately $109.5^\circ$ | $sp^3$ | C in $\mathrm{CH_4}$ |

Hybridisation combines atomic orbitals to describe bond directions; it is a model of electronic structure. Nitrogen in $\mathrm{NH_3}$ has four domains but only three bonded atoms, giving a trigonal pyramidal molecule. In water, four domains include two bonds and two lone pairs, giving a bent molecule. Different repulsions change the angles from the ideal tetrahedral value.

![Linear CO2 with opposing bond dipoles compared with bent water and its resultant dipole](/figure/chimica-semestre-filtro/atomo-legami-termodinamica/geometria-en.svg)
:::

:::definizione{#polarita-interazioni titolo="Molecular dipoles and intermolecular forces"}
The molecular dipole moment is the vector sum of contributions from charge distribution. $\mathrm{CO_2}$ contains polar bonds, but its symmetrical linear structure cancels the resultant moment. Water’s bent geometry gives a nonzero resultant moment.

**Van der Waals forces** include interactions between permanent dipoles, between permanent and induced dipoles, and London dispersion forces. The latter arise from fluctuations in electron density and also occur in nonpolar molecules. Hydrogen bonding involves an H bonded to an electronegative atom and an acceptor site with available electron density; common biological examples mainly involve O and N. Water can form a hydrogen-bond network contributing to its solvent properties and liquid cohesion.

An **ion–dipole interaction** is attraction between an ion and a polar molecule’s dipole. During hydration of $\mathrm{Na^+}$, the oxygen end of water points towards the cation; around $\mathrm{Cl^-}$, the hydrogen ends point towards the ion. These interactions contribute to salt dissolution.

The **hydrophobic interaction** describes the tendency of nonpolar surfaces to associate in water. Association changes solvent organisation and can reduce the overall Gibbs energy. It is not a new covalent bond between the surfaces. Membrane formation and protein folding also depend on this effect.
:::

## Oxidation states and inorganic nomenclature

:::definizione{#ossidazione-nomenclatura titolo="Oxidation states and formulas"}
An **oxidation state** is the hypothetical charge assigned to an atom by allocating each bond’s electrons to the more electronegative atom; electrons in bonds between identical atoms are divided equally. Formal charge in Lewis structures instead divides every bond’s electrons equally. Carbon in $\mathrm{CO_2}$ has oxidation state $+4$, whereas its formal charge in $\mathrm{O=C=O}$ is zero. Oxidation states sum to zero in a neutral species and to the charge of a polyatomic ion. An element in its elemental form has oxidation state zero; oxygen is generally $-2$, but is $-1$ in peroxides. Hydrogen is generally $+1$ in compounds with nonmetals and $-1$ in metal hydrides.

For $\mathrm{H_3PO_4}$, calling the phosphorus oxidation state $x$,
$$
3(+1)+x+4(-2)=0,\qquad x=+5.
$$
Oxidation states distinguish species such as iron(II) and iron(III) and help balance redox reactions.
:::

:::osservazione{#classi-inorganiche titolo="Oxides, hydroxides, acids and salts"}
In **oxides**, oxygen is combined with another element, as in $\mathrm{CO_2}$, carbon dioxide, and $\mathrm{Fe_2O_3}$, iron(III) oxide. **Peroxides** contain an O-O group with oxygen at $-1$, as in $\mathrm{H_2O_2}$, hydrogen peroxide. Hydroxides contain the $\mathrm{OH^-}$ ion, as in $\mathrm{NaOH}$, sodium hydroxide.

Acids can be binary, such as $\mathrm{HCl}$, called hydrochloric acid in aqueous solution, or contain oxygen, such as $\mathrm{H_2SO_4}$, sulfuric acid, and $\mathrm{H_3PO_4}$, phosphoric acid. Biologically relevant bases also include $\mathrm{NH_3}$, which accepts a proton to form $\mathrm{NH_4^+}$ despite having no OH in its formula.

Salts contain cations and anions in ratios satisfying electroneutrality. $\mathrm{CaCl_2}$ is calcium chloride, $\mathrm{NaHCO_3}$ is sodium hydrogencarbonate, and $\mathrm{Ca_3(PO_4)_2}$ is calcium phosphate. Ions such as $\mathrm{HCO_3^-}$, $\mathrm{SO_4^{2-}}$, $\mathrm{PO_4^{3-}}$ and $\mathrm{NH_4^+}$ are groups of atoms with an overall charge; that charge determines the subscripts in a salt formula. For example, two $\mathrm{NH_4^+}$ ions balance one $\mathrm{SO_4^{2-}}$, so ammonium sulfate is $\mathrm{(NH_4)_2SO_4}$.

| Formula | Name used | Oxoacid anion |
| --- | --- | --- |
| $\mathrm{HNO_2}$ | nitrous acid | nitrite, $\mathrm{NO_2^-}$ |
| $\mathrm{HNO_3}$ | nitric acid | nitrate, $\mathrm{NO_3^-}$ |
| $\mathrm{H_2SO_3}$ | sulfurous acid | sulfite, $\mathrm{SO_3^{2-}}$ |
| $\mathrm{H_2SO_4}$ | sulfuric acid | sulfate, $\mathrm{SO_4^{2-}}$ |
| $\mathrm{H_3PO_4}$ | phosphoric acid | phosphate, $\mathrm{PO_4^{3-}}$ |

These accepted traditional names coexist with systematic nomenclature. In binary molecular compounds, prefixes count atoms: $\mathrm{CO}$ is carbon monoxide and $\mathrm{CO_2}$ carbon dioxide. In Stock nomenclature, the Roman numeral in iron(III) instead gives iron’s oxidation state, not its atom count.

![Lewis formulas of hydrogen peroxide and ammonium ion, showing lone pairs and charge](/figure/chimica-semestre-filtro/atomo-legami-termodinamica/lewis-en.svg)
:::

## Solids, gases and speed distributions

:::osservazione{#solidi titolo="Types of solids"}
In solids, particles remain around defined mean positions while undergoing thermal motion. In ionic solids such as NaCl, stability mainly results from interactions between ions. Molecular solids such as ice and solid CO2 contain recognisable molecules held together by intermolecular interactions. Covalent solids such as diamond have an extended covalent network; in metals, electron delocalisation permits charge transport. Graphite shows that structure and properties can differ even for the same element: its layers and delocalised electrons give properties different from diamond’s.
:::

:::definizione{#gas-ideali titolo="Absolute temperature and gas laws"}
Absolute temperature $T$, expressed in kelvin, is obtained from Celsius temperature using $T=t+273.15$. An **ideal gas** is a model whose particles have negligible volume and negligible interactions between collisions. It better describes sufficiently dilute gases far from condensation. Its equation of state is
$$
pV=nRT.
$$
Pressure $p$ is absolute, $V$ is volume, and $R$ is the gas constant. One may use $R=8.314\,\mathrm{J\,mol^{-1}K^{-1}}$ with pascals and cubic metres, or $R=0.082057\,\mathrm{L\,atm\,mol^{-1}K^{-1}}$ with litres and atmospheres.

For a fixed amount of gas, Boyle’s law gives $pV=\text{constant}$ at constant temperature. Charles’s law gives $\dfrac VT=\text{constant}$ at constant pressure. Gay-Lussac’s law gives $\dfrac pT=\text{constant}$ at constant volume. Increased thoracic volume can therefore be related to decreased gas pressure when an isothermal approximation is appropriate; actual breathing also involves matter entering and leaving.
:::

:::osservazione{#cinetica-gas titolo="Kinetic theory and the Maxwell–Boltzmann distribution"}
Gas pressure results from particles colliding with the walls. In the classical regime of an ideal gas, mean translational kinetic energy per particle is $\dfrac32 k_BT$, where $k_B$ is the Boltzmann constant; it therefore depends on absolute temperature. Particles have different speeds, described at equilibrium by the Maxwell–Boltzmann distribution.

The root-mean-square speed is
$$
v_{\mathrm{rms}}=\sqrt{\dfrac{3RT}{M}},
$$
where molar mass $M$ must be in $\mathrm{kg\,mol^{-1}}$ when $R$ is in SI units. As $T$ increases, the distribution broadens and characteristic speeds increase; at the same temperature, lighter particles have greater characteristic speeds. For example, the root-mean-square speed ratio of $\mathrm{H_2}$ to $\mathrm{O_2}$ at the same temperature is approximately $\sqrt{\dfrac{32}{2}}=4$. Their mean translational energy is nevertheless equal because higher speed compensates for lower mass. Root-mean-square speed differs from mean speed and the most probable speed.

![Normalised speed distributions for ideal nitrogen at 300 and 600 kelvin](/figure/chimica-semestre-filtro/atomo-legami-termodinamica/maxwell-en.svg)
:::

## Liquids and phase changes

:::definizione{#liquidi-fasi titolo="Evaporation, vapour pressure and surface tension"}
In a liquid, particles remain close but can move past each other. **Evaporation** is passage into the gas phase from the surface and also occurs below the boiling temperature. Escaping particles remove energy, so sweat evaporation contributes to heat transfer from the body to its surroundings. The heat required to vaporise an amount of substance at a specified temperature is related to its enthalpy of vaporisation.

In a closed vessel, vapour can reach dynamic equilibrium with the liquid. **Vapour pressure** is the vapour’s pressure at this equilibrium and rises with temperature. Boiling occurs when vapour pressure equals external pressure, allowing vapour bubbles to form within the liquid. Lower external pressure lowers the boiling temperature.

Surface tension is the reversible work per unit increase in interfacial area at constant temperature and under the other specified conditions; it can be expressed in $\mathrm{J\,m^{-2}}$ or $\mathrm{N\,m^{-1}}$. Cohesive interactions explain a droplet’s tendency to reduce its area. Adding surfactants modifies the interface and reduces surface tension.
:::

:::osservazione{#diagrammi-fase titolo="Phase diagrams of water and carbon dioxide"}
A pressure–temperature diagram distinguishes stability regions of the solid, liquid and gas phases. Two phases are at equilibrium along coexistence curves; three coexist at the triple point. The liquid–vapour curve ends at the critical point, beyond which the distinction between liquid and gas disappears.

Near ordinary conditions, ice is less dense than liquid water. Water’s melting curve therefore has a negative slope: increasing pressure favours liquid and lowers the melting temperature. For CO2, the melting curve has a positive slope under usual conditions. At atmospheric pressure, solid CO2 sublimes because pressure is below its triple-point pressure, approximately $5.2\,\mathrm{bar}$. Liquid CO2 requires pressures above the triple-point pressure and temperatures within the liquid region. Water, by contrast, has a stable liquid phase at atmospheric pressure.

![Qualitative pressure–temperature diagrams for water and CO2, showing triple points and different melting-curve slopes](/figure/chimica-semestre-filtro/atomo-legami-termodinamica/fasi-en.svg)
:::

## Energy, entropy and open systems

:::definizione{#energia-entalpia titolo="First law and enthalpy"}
An **open** system exchanges matter and energy with its surroundings; a closed system exchanges energy but not matter; an isolated system exchanges neither. An organism is an open system. For a closed system, neglecting changes in macroscopic kinetic and potential energy, the first law is
$$
\Delta U=q+w.
$$
$U$ is internal energy, $q$ is heat absorbed by the system, and $w$ is work received. For expansion against constant external pressure, $w=-p_{\mathrm{ext}}\Delta V$. An open-system balance must also include energy carried by incoming and outgoing matter.

**Enthalpy** is $H=U+pV$ and is a state function, so its change depends on initial and final states. For a closed system at constant pressure with only expansion work, exchanged heat is $q_p=\Delta H$. An exothermic change has $\Delta H<0$ and releases heat; an endothermic change has $\Delta H>0$ and absorbs it. Heat and work depend on the path; $U$ and $H$ depend on the state. Comparing reaction enthalpies also requires considering quantities and physical states of substances. Melting and vaporisation normally require heat, whereas freezing and condensation release it.
:::

:::definizione{#entropia-gibbs titolo="Entropy and Gibbs energy"}
**Entropy** $S$ describes the number of microscopic states compatible with macroscopic conditions and the dispersal of energy. The second law requires $\Delta S_{\mathrm{tot}}\ge0$ for system and surroundings considered together; the inequality is strict for an irreversible process. One system’s entropy can decrease if its surroundings gain enough entropy to compensate. For a reversible phase change at coexistence temperature $T$, the change is $\Delta S=\dfrac{\Delta H}{T}$. During melting, absorbed energy permits a greater multiplicity of accessible configurations.

Gibbs energy is $G=H-TS$. For a constant-temperature transformation,
$$
\Delta G=\Delta H-T\Delta S.
$$
In a closed system at constant temperature and pressure with only expansion work, the sign of $\Delta G$ provides a spontaneity criterion: $\Delta G<0$ indicates a thermodynamically favoured direction, $\Delta G=0$ equilibrium, and $\Delta G>0$ an unfavoured direction. Its sign does not determine the rate. An exergonic transformation has $\Delta G<0$; an endergonic transformation has $\Delta G>0$. Calculations require consistent units, for example enthalpy in joules and entropy in joules per kelvin.

For a reaction, the Gibbs change per extent of reaction is evaluated at the current composition; its value can change as reactants and products change. Biological open systems sustain matter and energy flows. Flows can alter the total Gibbs energy contained within the system, so it need not decrease as in a closed system under the preceding conditions. A reaction with positive Gibbs change can be coupled to one with a sufficiently negative change to make their sum negative. A mechanism must link their extents in the specified stoichiometric ratio: simply having both reactions in the same vessel is insufficient. A steady state with constant concentrations can therefore sustain reactions and flows, whereas equilibrium has no net driving force for the reaction.
:::

:::esempio{titolo="Enthalpy and entropy in the spontaneity criterion"}
A transformation has $\Delta H=20\,\mathrm{kJ\,mol^{-1}}$ and $\Delta S=100\,\mathrm{J\,mol^{-1}K^{-1}}$. Treating these changes as constant over the range considered, at $300\,\mathrm K$,
$$
\Delta G=20000-300\cdot100=-10000\,\mathrm{J\,mol^{-1}}.
$$
The transformation is endothermic and exergonic at that temperature because the $T\Delta S$ contribution exceeds $\Delta H$.

![Gibbs energy equal to 20 minus 0.100 times T in kilojoules per mole: sign change at 200 kelvin](/figure/chimica-semestre-filtro/atomo-legami-termodinamica/gibbs-en.svg)
:::
