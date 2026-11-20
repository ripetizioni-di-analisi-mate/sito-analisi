---
titolo: "Atoms, bonds, states of matter and thermodynamics"
sommario: "Atomic structure, amount of substance, molecular geometry and polarity, properties of matter and the energy of chemical processes."
---

## Atoms, isotopes and nuclei

All matter is made of atoms. This section describes the three particles that make up an atom and explains what changes when the number of electrons varies (the result is an ion) or the number of neutrons varies (the result is an isotope).

:::definizione{#atomo-isotopi titolo="Atomic number and mass number"}
An **atom** consists of a very small central **nucleus** and of **electrons** that move around the nucleus. The nucleus contains two kinds of particles, **protons** and **neutrons**.

- The proton has a positive electric charge, written $+e$.
- The electron has a negative charge $-e$, equal in size to that of the proton and opposite in sign.
- The neutron has no charge.

The proton and the neutron have about the same mass, roughly $1\,\mathrm{u}$ (atomic mass unit). The electron has a mass about 1800 times smaller, so almost all the mass of the atom is in the nucleus.

The **atomic number** $Z$ is the number of protons. All atoms of the same element have the same $Z$: every atom with 6 protons is a carbon atom. The **mass number** $A$ is the sum of protons and neutrons, so the number of neutrons is $A-Z$.

The notation ${}^{A}_{Z}\mathrm{X}$ denotes an atom of element X with mass number $A$, written at the top, and atomic number $Z$, written at the bottom. For example, ${}^{23}_{11}\mathrm{Na}$ is a sodium atom with 11 protons and $23-11=12$ neutrons. A neutral atom has as many electrons as protons, so neutral sodium has 11 electrons. An **ion** is an atom that has lost or gained electrons and therefore carries an electric charge. The ion $\mathrm{Na^+}$ has lost one electron, so it has 11 protons and 10 electrons and its charge is $+1$.

![Comparison of magnesium 24, magnesium 25 and magnesium 24 ion: protons, neutrons and electrons](/figure/chimica-semestre-filtro/atomo-legami-termodinamica/isotopi-en.svg)
:::

:::definizione{#isotopi-rmn titolo="Isotopes and nuclear spin"}
**Isotopes** are atoms of the same element that have a different number of neutrons. They therefore have the same $Z$ and a different $A$. For example, ${}^{12}\mathrm C$ and ${}^{13}\mathrm C$ are two isotopes of carbon: both have 6 protons, the first has 6 neutrons and the second has 7. The isotopes of an element have almost the same chemical properties, because these depend on the electrons, and they have different masses.

In nature an element is usually a mixture of isotopes. The **average atomic mass** shown in the periodic table is calculated by multiplying the mass of each isotope by its abundance (the fraction of atoms of that kind, a number between 0 and 1) and adding the results. For chlorine, which is about 76% ${}^{35}\mathrm{Cl}$ and about 24% ${}^{37}\mathrm{Cl}$, the result is $0.76\cdot35+0.24\cdot37\simeq35.5\,\mathrm u$.

Some nuclei behave like tiny magnets. This property is called **nuclear spin** and is denoted by the number $I$. The nucleus of hydrogen ${}^{1}\mathrm H$, which is a single proton, has $I=\dfrac12$. The nucleus of ${}^{12}\mathrm C$ has $I=0$ and does not have this property.

Nuclear spin is the basis of **nuclear magnetic resonance**, which works in three steps.

1. The sample is placed in a strong magnetic field. The nuclei with spin settle into two states of different energy.
2. A radio wave is sent in. If the energy of the wave equals the energy difference $\Delta E$ between the two states, the nuclei absorb it and move to the higher-energy state. The relation $\Delta E=h\nu$ holds, where $h$ is the Planck constant and $\nu$ is the frequency of the radio wave.
3. When the wave is switched off, the nuclei return to the initial state and emit a signal, which the instrument records.

The difference $\Delta E$ grows with the strength of the magnetic field, so the absorbed frequency also grows with the field. Magnetic resonance imaging in medicine records the signal of the ${}^{1}\mathrm H$ nuclei of water, which is very abundant in tissues. The magnetic field is made slightly different from point to point (field gradient), so nuclei in different positions absorb different frequencies and an image is reconstructed from the signal. The ${}^{1}\mathrm H$ nucleus is stable, so the examination uses no radioactive substances.
:::

## Orbitals, configurations and the periodic table

:::definizione{#numeri-quantici titolo="Quantum numbers and orbitals"}
An **orbital** is the region of space around the nucleus where an electron is most likely to be found. In mathematical terms it is a function, and the square of its modulus gives the probability of finding the electron at each point. What is known about the electron is the probability of finding it in a region; its trajectory is not defined. Each electron of an atom is described by four numbers, called **quantum numbers**.

| Number | Allowed values | Meaning |
| --- | --- | --- |
| $n$ | $1,2,3,\ldots$ | principal level |
| $l$ | $0,1,\ldots,n-1$ | subshell; $0=s$, $1=p$, $2=d$, $3=f$ |
| $m_l$ | $-l,-l+1,\ldots,l$ | orbital within the subshell |
| $m_s$ | $+\dfrac12$ or $-\dfrac12$ | electron spin projection |

The table shows how many electrons each sublevel can hold. A sublevel with number $l$ contains $2l+1$ orbitals and each orbital holds at most 2 electrons. An $s$ sublevel ($l=0$) therefore has 1 orbital and at most 2 electrons; a $p$ sublevel ($l=1$) has 3 orbitals and 6 electrons; a $d$ sublevel ($l=2$) has 5 orbitals and 10 electrons. The $2d$ orbital does not exist, because for $n=2$ the number $l$ can only be 0 or 1.
:::

:::osservazione{#configurazioni titolo="Pauli, Hund and electron configurations"}
The **electron configuration** shows how the electrons of an atom are distributed among the orbitals. It is built with three rules.

1. Electrons first occupy the orbitals of lowest energy. The filling order for the first elements is $1s,2s,2p,3s,3p,4s,3d,4p$.
2. **Pauli principle**: an orbital holds at most two electrons, and the two have opposite spin.
3. **Hund's rule**: in orbitals of equal energy, such as the three $p$ orbitals, electrons first go one per orbital with the same spin, and only afterwards do they pair up.

The notation $2p^4$ means that the $2p$ sublevel contains 4 electrons. Some elements, such as chromium and copper, are exceptions to the filling order.

Carbon has 6 electrons and configuration $1s^2\,2s^2\,2p^2$. By Hund's rule the two $2p$ electrons occupy two different orbitals, so carbon has two unpaired electrons. Oxygen has 8 electrons and configuration $1s^2\,2s^2\,2p^4$: of the four $2p$ electrons, two are paired in the same orbital and two remain unpaired.

The **valence electrons** are the electrons of the outermost level. They are the ones that take part in chemical bonds. Sodium has configuration $[\mathrm{Ne}]\,3s^1$, where $[\mathrm{Ne}]$ stands for the 10 inner electrons, arranged as in neon. Its only valence electron is the $3s$ electron. Sodium loses it easily and becomes the ion $\mathrm{Na^+}$, with configuration $[\mathrm{Ne}]$.

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
In the periodic table the elements are arranged in order of increasing atomic number. The rows are called **periods** and the columns **groups**. The elements of the same group have the same number of valence electrons and therefore have similar chemical properties. Three properties change in a regular way across the table.

- **Atomic radius**. Along a period, from left to right, the protons in the nucleus increase while the electrons are added to the same level. The nucleus therefore attracts the outer electrons more strongly and the radius decreases. Going down a group one level is added at each row, so the radius increases.
- **Ionisation energy**. It is the energy needed to remove an electron from an atom in the gas state. It increases along a period, because the electrons are attracted more strongly, and decreases going down a group.
- **Electronegativity**. It measures how strongly an atom attracts the electrons of a bond towards itself. It increases along a period and decreases going down a group. Fluorine is the most electronegative element.

There are some exceptions to these trends.

The **electron affinity** is the energy released when a neutral atom in the gas state gains an electron. Chlorine, for example, releases energy when it becomes $\mathrm{Cl^-}$, so it has a positive electron affinity. Some tables report instead the energy change $\Delta E$ of the same process, which for chlorine is negative because energy is given off. The number is the same and the sign changes, so in a table one checks which convention is used.

Electronegativity makes it possible to predict how the electrons are distributed in a bond. Oxygen is more electronegative than carbon, so in the $\mathrm{C-O}$ bond the electrons are shifted towards oxygen.
:::

## Masses, moles and particle numbers

:::definizione{#mole-masse titolo="Amount of substance and molar mass"}
Atoms are too small to be weighed one at a time, so chemistry uses two tools: a unit of mass suited to atoms and a unit for counting large numbers of particles.

The **atomic mass unit** $\mathrm u$ is one twelfth of the mass of an atom of ${}^{12}\mathrm C$. It is about $1.66\cdot10^{-24}\,\mathrm g$. The **molecular mass** is the sum of the masses of the atoms that form the molecule. The relative molecular mass $M_r$ is the same value written without units, that is, the ratio between the mass of the molecule and $\mathrm u$. Ionic compounds such as NaCl are not made of separate molecules, so for them the mass of the formula unit is used, that is, the sum of the masses of the ions written in the formula.

The **mole** is the unit used to count particles. One mole contains exactly $6.02214076\cdot10^{23}$ particles (atoms, molecules or ions, depending on the case). This number is the **Avogadro constant**, $N_A=6.02214076\cdot10^{23}\,\mathrm{mol^{-1}}$. The **molar mass** $M$ is the mass of one mole of substance. The two formulas below connect the mass $m$ of the sample, the number of moles $n$ and the number of particles $N$.
$$
n=\dfrac{m}{M},\qquad N=nN_A.
$$
The molar mass is measured in $\mathrm{g\,mol^{-1}}$ and has the same numerical value as the molecular mass expressed in $\mathrm u$. For water $\mathrm{H_2O}$, with $\mathrm H=1.008\,\mathrm u$ and $\mathrm O=16.00\,\mathrm u$, the molecular mass is $2\cdot1.008+16.00=18.016\,\mathrm u$, so the molar mass is $18.016\,\mathrm{g\,mol^{-1}}$ and one mole of water has a mass of about 18 grams. Each molecule contains two hydrogen atoms and one oxygen atom, so one mole of water contains two moles of hydrogen atoms and one mole of oxygen atoms.
:::

:::esempio{titolo="From mass to molecules"}
The question is how many molecules a sample of $9.008\,\mathrm g$ of water contains. The mass is divided by the molar mass $M=18.016\,\mathrm{g\,mol^{-1}}$, which gives the number of moles; the result is then multiplied by the Avogadro constant.
$$
n=\dfrac{9.008}{18.016}\,\mathrm{mol}=0.5000\,\mathrm{mol},
\qquad N\simeq3.011\cdot10^{23}\text{ molecules}.
$$
The sample contains half a mole of water, that is, about $3.011\cdot10^{23}$ molecules. Each molecule contains two hydrogen atoms, so the hydrogen atoms are twice as many, about $6.022\cdot10^{23}$.

![One mole of water corresponds to two moles of hydrogen atoms and one mole of oxygen atoms](/figure/chimica-semestre-filtro/atomo-legami-termodinamica/entita-en.svg)
:::

## Chemical bonds and electronic structures

:::definizione{#legami titolo="Ionic, covalent and metallic bonding"}
A **chemical bond** is the force that holds two atoms together. There are three main kinds of bond: covalent, ionic and metallic.

In a **covalent bond** two atoms share one or more pairs of electrons. If the two atoms are identical, as in $\mathrm{H-H}$, the electrons are shared equally and the bond is called *non-polar* (or homopolar). If the two atoms have different electronegativity, as in $\mathrm{O-H}$, the electrons stay closer to the more electronegative atom and the bond is called *polar* (or heteropolar). Oxygen then acquires a small negative charge, written $\delta^-$, and hydrogen a small positive charge $\delta^+$.

In an **ionic bond** one atom gives one or more electrons to another atom. A positive ion (*cation*) and a negative ion (*anion*) form, and they attract each other because they have opposite charges. In sodium chloride, sodium gives one electron to chlorine and $\mathrm{Na^+}$ and $\mathrm{Cl^-}$ form in a 1:1 ratio. The ions are arranged in an ordered lattice that extends throughout the crystal.

In a **metallic bond** the valence electrons do not stay bound to a single atom and move freely among all the atoms of the metal. This is why metals conduct electric current.

A **coordinate covalent bond** (or dative bond) is a covalent bond in which both electrons of the shared pair come from the same atom. For example, the nitrogen of ammonia $\mathrm{NH_3}$ has a pair of electrons not engaged in bonds and shares it with an $\mathrm{H^+}$ ion, which has no electrons. The ammonium ion $\mathrm{NH_4^+}$ forms. Once formed, this bond is identical to the other three N-H bonds.
:::

:::osservazione{#lewis-ottetto titolo="Lewis structures and the octet rule"}
A **Lewis structure** is a drawing of the molecule that shows only the valence electrons. A dash between two atoms represents a shared pair of electrons (bonding pair). Two dots on an atom represent an unshared pair of electrons, called a **lone pair**.

The **octet rule** states that an atom tends to form bonds until it has eight electrons in its outer level, like a noble gas. It works well for carbon, nitrogen, oxygen and fluorine. Hydrogen stops at two electrons. The rule has exceptions: boron in $\mathrm{BF_3}$ has only six electrons, and molecules with an odd number of electrons, such as NO, cannot satisfy it.

A Lewis structure is built in three steps.

1. The valence electrons of all the atoms are counted. One electron is added for each negative charge and one is removed for each positive charge.
2. The atoms are connected with single bonds.
3. The remaining electrons are placed as lone pairs or as multiple bonds, until every atom has an octet (hydrogen two electrons).

In $\mathrm{NH_3}$ nitrogen has 5 valence electrons: it uses three for the three bonds with the hydrogens and is left with one lone pair. In $\mathrm{CO_2}$ the structure is $\mathrm{O=C=O}$, with two double bonds, and each atom has eight electrons. In $\mathrm{NH_4^+}$ the electrons are $5+4-1=8$, that is, four bonding pairs, and no lone pair remains on nitrogen.

For some molecules several Lewis structures can be drawn that differ only in the position of the electrons. This is called **resonance**: the real molecule is a single one and its electrons are spread over several atoms (*delocalised* electrons). The different formulas are ways of representing the same molecule.
:::

:::definizione{#sigma-pi titolo="Orbital overlap and sigma and pi bonds"}
A covalent bond forms when an orbital of one atom overlaps an orbital of the other atom. Two kinds of bond are distinguished according to how the overlap occurs.

- In a **sigma** bond ($\sigma$) the orbitals overlap head-on, along the line joining the two nuclei. The electrons are located between the two nuclei.
- In a **pi** bond ($\pi$) two parallel $p$ orbitals overlap sideways. The electrons are located above and below the line joining the nuclei.

A single bond is a $\sigma$ bond. A double bond consists of one $\sigma$ and one $\pi$. A triple bond consists of one $\sigma$ and two $\pi$. Around a single bond the two atoms can rotate. Around a $\mathrm{C=C}$ double bond rotation is prevented, because on rotating the two $p$ orbitals would no longer be parallel and the $\pi$ bond would break.

Two quantities describe a bond. The **bond length** is the distance between the two nuclei. The **bond energy** (or dissociation energy) is the energy needed to break the bond. Between the same two atoms, a double bond is shorter and stronger than a single one, and a triple bond is shorter and stronger than a double one.

When two atomic orbitals combine, two orbitals of the molecule form. One has lower energy and is called a *bonding* orbital, because the electrons that occupy it hold the two atoms together. The other has higher energy and is called *antibonding*, because the electrons that occupy it weaken the bond. The **bond order** is $\dfrac{n_b-n_a}{2}$, where $n_b$ is the number of electrons in bonding orbitals and $n_a$ the number in antibonding orbitals. Order 1 corresponds to a single bond, 2 to a double bond, 3 to a triple bond. In $\mathrm{H_2}$ the two electrons occupy the bonding orbital, so the order is $\dfrac{2-0}{2}=1$.

In a chemical reaction some bonds break and others form. Breaking a bond requires energy and forming one releases it. The reaction releases energy if the energy released by the new bonds exceeds the energy spent to break the old ones.

![Potential energy of a diatomic molecule: minimum at equilibrium separation and dissociation of the nuclei](/figure/chimica-semestre-filtro/atomo-legami-termodinamica/energia-legame-en.svg)
:::

## Geometry, polarity and intermolecular interactions

:::definizione{#geometria-ibridazione titolo="Electron domains and hybridisation"}
The shape of a molecule is predicted with the **VSEPR** model. The idea is that the electron pairs around an atom repel each other, because they all have negative charge, and therefore arrange themselves as far apart as possible.

The **electron domains** of the central atom are counted. Each bond counts as one domain, even if it is double or triple, and each lone pair counts as one domain. The number of domains determines their arrangement in space, shown in the table. The shape of the molecule is given by the positions of the atoms only, so it differs from the arrangement of the domains when lone pairs are present.

| Domains | Domain arrangement | Hybridisation in the localised model | Example |
| --- | --- | --- | --- |
| 2 | linear, $180^\circ$ | $sp$ | C in $\mathrm{CO_2}$ |
| 3 | trigonal planar, approximately $120^\circ$ | $sp^2$ | C in a carbonyl group |
| 4 | tetrahedral, approximately $109.5^\circ$ | $sp^3$ | C in $\mathrm{CH_4}$ |

**Hybridisation** is the model that describes the orbitals used by the atom to form bonds in these directions. One $s$ orbital and three $p$ orbitals combine into four identical orbitals, called $sp^3$, pointing towards the vertices of a tetrahedron. In the same way three $sp^2$ orbitals or two $sp$ orbitals are obtained.

Three molecules with four domains have different shapes.

- In $\mathrm{CH_4}$ the four domains are four bonds, so the molecule is tetrahedral, with angles of $109.5^\circ$.
- In $\mathrm{NH_3}$ the domains are three bonds and one lone pair, so the four atoms form a pyramid with a triangular base. The angle between the bonds is about $107^\circ$.
- In $\mathrm{H_2O}$ the domains are two bonds and two lone pairs, so the three atoms form a V (bent molecule). The angle between the bonds is about $104.5^\circ$.

The angles of ammonia and water are slightly smaller than $109.5^\circ$ because a lone pair repels more strongly than a bonding pair and pushes the bonds closer together.

![Linear CO2 with opposing bond dipoles compared with bent water and its resultant dipole](/figure/chimica-semestre-filtro/atomo-legami-termodinamica/geometria-en.svg)
:::

:::definizione{#polarita-interazioni titolo="Molecular dipoles and intermolecular forces"}
A molecule is **polar** if it has one part with a partial positive charge and one part with a partial negative charge. The quantity that measures this separation of charge is the **dipole moment**. Each polar bond has its own dipole, represented by an arrow pointing towards the more electronegative atom. The dipole moment of the molecule is the sum of these arrows, so it also depends on the shape of the molecule.

In $\mathrm{CO_2}$ the two $\mathrm{C=O}$ bonds are polar, but the molecule is linear and the two arrows are equal and opposite. Their sum is zero and the molecule is non-polar. In water the two O-H bonds form an angle, so the two arrows do not cancel and the molecule is polar.

**Intermolecular forces** are the attractions between different molecules. They are much weaker than covalent bonds and determine, for example, the temperature at which a substance boils. In order of increasing strength, three kinds are distinguished.

- **London dispersion forces**. The electrons of a molecule shift continuously, so for an instant the molecule has a small dipole, which induces one in the neighbouring molecule. They act between all molecules, including non-polar ones, and grow with the size of the molecule.
- **Dipole-dipole forces**. The positive part of a polar molecule attracts the negative part of another.
- **Hydrogen bond**. A hydrogen atom bonded to a very electronegative atom (N, O or F) is attracted by the lone pair of another N, O or F atom. It is the strongest of the three.

The first two, together with the attractions between a permanent dipole and an induced one, are known as **van der Waals forces**. Each water molecule forms up to four hydrogen bonds with neighbouring molecules. This network explains why water boils at a high temperature for such a small molecule and why it dissolves polar substances well.

The **ion-dipole** interaction is the attraction between an ion and a polar molecule. When NaCl dissolves in water, each ion is surrounded by water molecules. Around $\mathrm{Na^+}$ the molecules turn their oxygen, which has a partial negative charge, towards the ion. Around $\mathrm{Cl^-}$ they turn their hydrogens, which have a partial positive charge. These attractions make up for the energy spent to separate the ions of the lattice, and this is why many salts dissolve in water.

The **hydrophobic interaction** is the tendency of non-polar molecules, or of the non-polar parts of a molecule, to come together when they are in water. The water molecules around a non-polar surface are forced into a more ordered arrangement. When the non-polar parts come together, the surface in contact with water decreases, fewer water molecules are constrained and the free energy of the system falls. No covalent bond forms between the non-polar parts. Oil droplets in water merge for this reason. The same effect drives the formation of cell membranes and the folding of proteins.
:::

## Oxidation states and inorganic nomenclature

:::definizione{#ossidazione-nomenclatura titolo="Oxidation states and formulas"}
The **oxidation number** of an atom in a compound is the charge the atom would have if the electrons of each bond were assigned entirely to the more electronegative atom. It is used to recognise which atom gives up electrons and which gains them in a reaction. It is calculated with a few rules.

- In an element in the free state ($\mathrm{O_2}$, Fe, $\mathrm{H_2}$) it is 0.
- In an ion made of a single atom it equals the charge: $+1$ in $\mathrm{Na^+}$, $-1$ in $\mathrm{Cl^-}$.
- Oxygen is $-2$. Peroxides, such as $\mathrm{H_2O_2}$, are an exception: there it is $-1$.
- Hydrogen is $+1$ in compounds with non-metals and $-1$ in metal hydrides, such as NaH.
- The sum of the oxidation numbers is 0 in a neutral molecule and equals the charge in an ion.

The oxidation number differs from the **formal charge** of Lewis structures, which is calculated by splitting the electrons of each bond in half. For the carbon of $\mathrm{CO_2}$ the oxidation number is $+4$ and the formal charge is 0.

For $\mathrm{H_3PO_4}$, calling the phosphorus oxidation state $x$,
$$
3(+1)+x+4(-2)=0,\qquad x=+5.
$$
Phosphorus in phosphoric acid therefore has oxidation number $+5$. The same element can have different oxidation numbers in different compounds: iron is $+2$ in $\mathrm{FeCl_2}$ and $+3$ in $\mathrm{FeCl_3}$. In names the value is shown with a Roman numeral, iron(II) and iron(III). Oxidation numbers are used to balance redox reactions.
:::

:::osservazione{#classi-inorganiche titolo="Oxides, hydroxides, acids and salts"}
Inorganic compounds fall into a few classes, recognisable from the formula.

- **Oxides**: compounds of oxygen with another element. Examples: $\mathrm{CO_2}$, carbon dioxide; $\mathrm{Fe_2O_3}$, iron(III) oxide.
- **Peroxides**: they contain two oxygen atoms bonded to each other, each with oxidation number $-1$. Example: $\mathrm{H_2O_2}$, hydrogen peroxide.
- **Hydroxides**: they contain the ion $\mathrm{OH^-}$ and are bases. Example: $\mathrm{NaOH}$, sodium hydroxide.

- **Acids**: in water they give up $\mathrm{H^+}$ ions. Binary acids consist of hydrogen and a non-metal, such as $\mathrm{HCl}$, hydrochloric acid. Oxoacids also contain oxygen, such as $\mathrm{H_2SO_4}$, sulfuric acid, and $\mathrm{H_3PO_4}$, phosphoric acid.
- **Bases without OH**: ammonia $\mathrm{NH_3}$ is a base because it gains an $\mathrm{H^+}$ and becomes $\mathrm{NH_4^+}$, even though OH does not appear in its formula.

- **Salts**: they consist of cations and anions, and the sum of the charges is zero. Examples: $\mathrm{CaCl_2}$, calcium chloride; $\mathrm{NaHCO_3}$, sodium hydrogencarbonate (bicarbonate); $\mathrm{Ca_3(PO_4)_2}$, calcium phosphate.

Some ions consist of several atoms bonded together and carry an overall charge. They are the **polyatomic ions**, such as $\mathrm{HCO_3^-}$, $\mathrm{SO_4^{2-}}$, $\mathrm{PO_4^{3-}}$ and $\mathrm{NH_4^+}$. To write the formula of a salt, the subscripts are chosen so that the positive and negative charges balance. The ion $\mathrm{SO_4^{2-}}$ has two negative charges and the ion $\mathrm{NH_4^+}$ one positive charge, so two ammonium ions are needed for each sulfate and the formula of ammonium sulfate is $\mathrm{(NH_4)_2SO_4}$.

The names of oxoacids and their anions follow a rule. The acid with less oxygen has the suffix *-ous* and its anion *-ite*; the acid with more oxygen has the suffix *-ic* and its anion *-ate*.

| Formula | Name used | Oxoacid anion |
| --- | --- | --- |
| $\mathrm{HNO_2}$ | nitrous acid | nitrite, $\mathrm{NO_2^-}$ |
| $\mathrm{HNO_3}$ | nitric acid | nitrate, $\mathrm{NO_3^-}$ |
| $\mathrm{H_2SO_3}$ | sulfurous acid | sulfite, $\mathrm{SO_3^{2-}}$ |
| $\mathrm{H_2SO_4}$ | sulfuric acid | sulfate, $\mathrm{SO_4^{2-}}$ |
| $\mathrm{H_3PO_4}$ | phosphoric acid | phosphate, $\mathrm{PO_4^{3-}}$ |

Alongside these traditional names there are two systems of nomenclature. In the first, used for compounds of two non-metals, a prefix gives the number of atoms: $\mathrm{CO}$ is carbon monoxide and $\mathrm{CO_2}$ is carbon dioxide. In the second, Stock nomenclature, a Roman numeral in brackets gives the oxidation number of the metal: in iron(III) oxide iron has oxidation number $+3$. The Roman numeral does not say how many iron atoms there are in the formula.

![Lewis formulas of hydrogen peroxide and ammonium ion, showing lone pairs and charge](/figure/chimica-semestre-filtro/atomo-legami-termodinamica/lewis-en.svg)
:::

## Solids, gases and speed distributions

:::osservazione{#solidi titolo="Types of solids"}
In a solid the particles occupy fixed positions and can only vibrate around them. Solids are classified according to the particles that form them and the force that holds them together.

- **Ionic solids**, such as NaCl. They consist of positive and negative ions that attract each other. They are hard, brittle and melt at high temperatures.
- **Molecular solids**, such as ice and solid $\mathrm{CO_2}$ (dry ice). They consist of molecules held together by intermolecular forces, which are weak, so they melt at low temperatures.
- **Covalent solids**, such as diamond. All the atoms are joined by covalent bonds in a single network. They are very hard and melt at extremely high temperatures.
- **Metallic solids**, such as copper. The valence electrons move freely among the atoms, so these solids conduct electricity and heat.

The same element can form different solids. Diamond and graphite are both pure carbon. In diamond each atom is bonded to four others, and the solid is extremely hard and an insulator. In graphite the atoms form flat layers that slide over one another, with electrons free to move along the layers, so graphite is soft and conducts electricity.
:::

:::definizione{#gas-ideali titolo="Absolute temperature and gas laws"}
In a gas the particles are far apart and move freely throughout the container. The state of a gas is described by four quantities: the pressure $p$, the volume $V$, the amount of gas $n$ in moles and the temperature $T$.

In the gas laws temperature is expressed in **kelvin** (absolute temperature). It is obtained by adding $273.15$ to the temperature $t$ in degrees Celsius, that is, $T=t+273.15$. For example, $25\,^\circ\mathrm C$ corresponds to $298.15\,\mathrm K$.

An **ideal gas** is a simplified model in which the particles have negligible volume and neither attract nor repel each other. Real gases behave in a very similar way when the pressure is low and the temperature is far from the one at which the gas becomes liquid. The four quantities of an ideal gas are linked by the **equation of state**.
$$
pV=nRT.
$$
$R$ is the **gas constant**. Its value depends on the units chosen: $R=8.314\,\mathrm{J\,mol^{-1}K^{-1}}$ if the pressure is in pascals and the volume in cubic metres; $R=0.082057\,\mathrm{L\,atm\,mol^{-1}K^{-1}}$ if the pressure is in atmospheres and the volume in litres. The pressure $p$ is the absolute pressure. For example, one mole of gas at $273.15\,\mathrm K$ and $1\,\mathrm{atm}$ occupies $V=\dfrac{nRT}{p}=\dfrac{1\cdot0.082057\cdot273.15}{1}\simeq22.4\,\mathrm L$.

Three laws follow from the equation of state, valid for a fixed amount of gas. In each of them one quantity stays constant.

- **Boyle's law** (constant temperature): $pV=\text{constant}$. If the volume doubles, the pressure halves.
- **Charles's law** (constant pressure): $\dfrac VT=\text{constant}$. If the absolute temperature doubles, the volume doubles.
- **Gay-Lussac's law** (constant volume): $\dfrac pT=\text{constant}$. If the absolute temperature doubles, the pressure doubles.

Boyle's law describes the start of inhalation. The chest expands, the volume of the lungs increases and the pressure of the air inside them falls below the external pressure. Air then enters the lungs until the two pressures are equal again.
:::

:::osservazione{#cinetica-gas titolo="Kinetic theory and the Maxwell–Boltzmann distribution"}
**Kinetic theory** explains the properties of a gas through the motion of its particles. The particles move in all directions and hit the walls of the container; pressure is the effect of these collisions. Temperature measures the energy of motion of the particles: the average kinetic energy of a particle is $\dfrac32 k_BT$, where $k_B$ is the Boltzmann constant and $T$ the absolute temperature. At a higher temperature the particles move faster on average.

The particles of a gas do not all have the same speed. Some are slow, many have intermediate speeds and a few are very fast. The curve that shows how many particles have each speed is called the **Maxwell-Boltzmann distribution**.

The root-mean-square speed is
$$
v_{\mathrm{rms}}=\sqrt{\dfrac{3RT}{M}},
$$
In this formula $R$ is the gas constant, $T$ the absolute temperature and $M$ the molar mass, which must be expressed in $\mathrm{kg\,mol^{-1}}$ when $R=8.314\,\mathrm{J\,mol^{-1}K^{-1}}$ is used. The root-mean-square speed is a typical value of the speed of the particles. It differs little from the mean speed and from the most probable speed, which corresponds to the maximum of the curve.

Two facts can be read from the formula.

- If the temperature increases, the speeds increase and the curve spreads to the right.
- At the same temperature lighter particles are faster. The molar mass of $\mathrm{H_2}$ is $2\,\mathrm{g\,mol^{-1}}$ and that of $\mathrm{O_2}$ is $32\,\mathrm{g\,mol^{-1}}$, so hydrogen molecules are $\sqrt{\dfrac{32}{2}}=4$ times faster than oxygen molecules.

The average kinetic energy, on the other hand, is the same for the two gases, because it depends only on the temperature.

![Normalised speed distributions for ideal nitrogen at 300 and 600 kelvin](/figure/chimica-semestre-filtro/atomo-legami-termodinamica/maxwell-en.svg)
:::

## Liquids and phase changes

:::definizione{#liquidi-fasi titolo="Evaporation, vapour pressure and surface tension"}
In a liquid the particles are in contact with each other, as in a solid, and can slide past one another. This is why a liquid has its own volume and takes the shape of the container.

**Evaporation** is the change from the liquid state to the gas state that takes place at the surface of the liquid, at any temperature. The particles that leave the liquid are the fastest ones, that is, those with enough energy to overcome the attraction of their neighbours. The slower particles remain in the liquid, so the liquid cools. This is why evaporating sweat removes heat from the skin. The heat needed to evaporate one mole of liquid is called the **enthalpy of vaporisation**.

In a closed container the evaporated particles stay above the liquid and some of them re-enter it. After a certain time the number of particles evaporating each second equals the number re-entering, that is, an equilibrium has been reached. The pressure of the vapour in this condition is called the **vapour pressure** of the liquid. It increases with temperature, because at a higher temperature more particles have the energy to evaporate.

**Boiling** occurs when the vapour pressure becomes equal to the external pressure. From that moment vapour bubbles also form inside the liquid. Water boils at $100\,^\circ\mathrm C$ at a pressure of $1\,\mathrm{atm}$. High in the mountains the external pressure is lower, so water boils at a lower temperature.

**Surface tension** is the energy needed to increase the surface area of a liquid by one unit. It is measured in $\mathrm{J\,m^{-2}}$, a unit equivalent to $\mathrm{N\,m^{-1}}$. It arises because a particle inside the liquid is attracted by its neighbours in all directions, whereas a particle at the surface is attracted only inwards. The liquid therefore tends to have the smallest possible surface, and this is why drops are spherical. **Surfactants**, such as soaps, settle on the surface of water and lower its surface tension.
:::

:::osservazione{#diagrammi-fase titolo="Phase diagrams of water and carbon dioxide"}
A **phase diagram** is a graph with temperature on the horizontal axis and pressure on the vertical axis. It shows in which state (solid, liquid or gas) a substance is found for each pair of values of temperature and pressure. The graph is divided into three regions, one for each state, and contains three elements.

- The **curves** that separate two regions. On a curve the two states are present together, in equilibrium. Crossing a curve corresponds to a change of state.
- The **triple point**, where the three curves meet. At that temperature and that pressure solid, liquid and gas are present together.
- The **critical point**, where the curve between liquid and gas ends. Beyond this point liquid and gas can no longer be distinguished.

The diagrams of water and carbon dioxide differ in two respects.

The first is the slope of the curve between solid and liquid. Ice is less dense than liquid water, and indeed it floats. An increase in pressure favours the denser state, that is, the liquid, so under pressure ice melts at a lower temperature and the curve leans to the left. In $\mathrm{CO_2}$, as in almost all substances, the solid is denser than the liquid and the curve leans to the right.

The second is the pressure of the triple point. For $\mathrm{CO_2}$ it is about $5.2\,\mathrm{bar}$, more than atmospheric pressure. At atmospheric pressure liquid $\mathrm{CO_2}$ does not exist and the solid (dry ice) changes directly into gas. This change is called **sublimation**. To obtain liquid $\mathrm{CO_2}$ a pressure greater than $5.2\,\mathrm{bar}$ is needed. The triple point of water, on the other hand, lies at a pressure much lower than atmospheric pressure, so liquid water exists under ordinary conditions.

![Qualitative pressure–temperature diagrams for water and CO2, showing triple points and different melting-curve slopes](/figure/chimica-semestre-filtro/atomo-legami-termodinamica/fasi-en.svg)
:::

## Energy, entropy and open systems

:::definizione{#energia-entalpia titolo="First law and enthalpy"}
Thermodynamics studies exchanges of energy. The part of the universe under study is called the **system** and everything else the **surroundings**. Three kinds of system are distinguished.

- An **open** system exchanges both matter and energy with the surroundings. A living organism is an open system.
- A **closed** system exchanges energy and not matter. A stoppered bottle is an example.
- An **isolated** system exchanges neither matter nor energy. An ideal vacuum flask is an isolated system.

The **internal energy** $U$ is the total energy of the particles of the system. The **first law of thermodynamics** states that energy is conserved: the internal energy of a closed system changes only if the system exchanges heat or work with the surroundings.
$$
\Delta U=q+w.
$$
$\Delta U$ is the change in internal energy, $q$ is the heat and $w$ is the work. Heat and work are positive when the system receives them and negative when it gives them up. For example, if a system receives $100\,\mathrm J$ of heat and does $40\,\mathrm J$ of work on the surroundings, then $q=+100\,\mathrm J$, $w=-40\,\mathrm J$ and $\Delta U=60\,\mathrm J$. A gas that expands against a constant external pressure $p_{\mathrm{ext}}$ does work, and $w=-p_{\mathrm{ext}}\Delta V$, where $\Delta V$ is the increase in volume. In an open system the energy carried by the matter that enters and leaves is also counted.

The **enthalpy** $H$ is defined by $H=U+pV$. It is useful because most reactions take place at constant pressure, and under this condition the heat exchanged equals the change in enthalpy, that is, $q_p=\Delta H$.

- An **exothermic** process gives heat to the surroundings and has $\Delta H<0$. Examples: a combustion, condensation, solidification.
- An **endothermic** process absorbs heat from the surroundings and has $\Delta H>0$. Examples: melting and vaporisation.

$U$ and $H$ are **state functions**, that is, their change depends only on the initial and final states. Heat and work, on the other hand, also depend on how the process takes place. The value of $\Delta H$ of a reaction refers to precise amounts of substances in a precise physical state, so it is always accompanied by these data.
:::

:::definizione{#entropia-gibbs titolo="Entropy and Gibbs energy"}
The **entropy** $S$ measures the number of ways in which the particles and the energy of a system can be arranged. A system with many possible arrangements has high entropy. A gas has more entropy than a liquid and a liquid more than a solid, because the particles have progressively more freedom of movement. In the melting of ice, for example, entropy increases.

The **second law of thermodynamics** states that in every spontaneous process the total entropy, that is, that of the system plus that of the surroundings, increases: $\Delta S_{\mathrm{tot}}\ge0$, with the equals sign only for a reversible process. The entropy of the system alone can decrease, provided that of the surroundings increases by more. When water freezes its entropy decreases, and the heat given off increases the entropy of the surroundings.

In a change of state that takes place at the equilibrium temperature $T$, the change in entropy is $\Delta S=\dfrac{\Delta H}{T}$.

Calculating the entropy of the surroundings is inconvenient. The **Gibbs free energy**, $G=H-TS$, makes it possible to establish whether a process is spontaneous using only quantities of the system. At constant temperature its change is
$$
\Delta G=\Delta H-T\Delta S.
$$
In this formula $\Delta H$ is the change in enthalpy, $T$ the absolute temperature and $\Delta S$ the change in entropy of the system. At constant temperature and pressure the sign of $\Delta G$ shows the direction of the process.

- $\Delta G<0$: the process is spontaneous and is called **exergonic**.
- $\Delta G=0$: the system is at equilibrium.
- $\Delta G>0$: the process is not spontaneous and is called **endergonic**. The reverse process is spontaneous.

A spontaneous process can be very slow, because $\Delta G$ gives no information about the rate. In the calculation the units must be the same: if $\Delta H$ is in kilojoules and $\Delta S$ in joules per kelvin, one of the two values has to be converted.

The value of $\Delta G$ of a reaction depends on the concentrations of reactants and products present at that moment, so it changes as the reaction proceeds and becomes zero at equilibrium.

In cells many necessary reactions have $\Delta G>0$. They take place because they are **coupled** to a reaction with a very negative $\Delta G$, usually the hydrolysis of ATP. The sum of the two changes is negative and the overall process is spontaneous. Coupling requires a mechanism that links the two reactions, generally an enzyme that makes them occur together. Two reactions that take place separately in the same solution do not influence each other in this way.

An organism is an open system: it continuously receives matter and energy with food and eliminates waste products. In this way it keeps concentrations constant, at values far from equilibrium. This condition is called a **steady state**. At equilibrium, on the other hand, no reaction proceeds in one direction more than in the other.
:::

:::esempio{titolo="Enthalpy and entropy in the spontaneity criterion"}
A process has $\Delta H=20\,\mathrm{kJ\,mol^{-1}}$ and $\Delta S=100\,\mathrm{J\,mol^{-1}K^{-1}}$. The question is whether it is spontaneous at $300\,\mathrm K$. The enthalpy is converted into joules, $20\,\mathrm{kJ}=20000\,\mathrm J$, and the formula $\Delta G=\Delta H-T\Delta S$ is applied.
$$
\Delta G=20000-300\cdot100=-10000\,\mathrm{J\,mol^{-1}}.
$$
The result is negative, so at $300\,\mathrm K$ the process is spontaneous, even though it is endothermic. The term $T\Delta S=30000\,\mathrm{J\,mol^{-1}}$ in fact exceeds $\Delta H$. At lower temperatures $T\Delta S$ is smaller: below $\dfrac{20000}{100}=200\,\mathrm K$ one has $\Delta G>0$ and the process is no longer spontaneous.

![Gibbs energy equal to 20 minus 0.100 times T in kilojoules per mole: sign change at 200 kelvin](/figure/chimica-semestre-filtro/atomo-legami-termodinamica/gibbs-en.svg)
:::
