---
titolo: "Carbon, hydrocarbons and stereochemistry"
sommario: "From three-dimensional structure to reactivity: names, configurations, intermediates, substitutions, eliminations and aromaticity, with the conditions behind each model."
---

## Carbon bonding and representations

:::definizione{#ibridazione titolo="Geometry and σ and π bonds"}
Organic chemistry studies the compounds of carbon. Carbon has four valence electrons and always forms four bonds: four single, or one double and two single, or two double, or one triple and one single. It can bond to other carbon atoms and form chains and rings, and this is why its compounds number in the millions.

The arrangement of the bonds around a carbon atom depends on the number of atoms it is bonded to, and is described by **hybridisation**.

- Carbon bonded to four atoms: $sp^3$ hybridisation, tetrahedral geometry, angles of $109.5^\circ$. Example: methane $\mathrm{CH_4}$.
- Carbon bonded to three atoms (one double bond): $sp^2$ hybridisation, trigonal planar geometry, angles of $120^\circ$. Example: ethene $\mathrm{CH_2{=}CH_2}$.
- Carbon bonded to two atoms (one triple bond or two double bonds): $sp$ hybridisation, linear geometry, angles of $180^\circ$. Example: ethyne $\mathrm{HC{\equiv}CH}$.

Covalent bonds are of two kinds. The $\sigma$ (sigma) bond forms by overlap of two orbitals along the line joining the nuclei. The $\pi$ (pi) bond forms by sideways overlap of two parallel $p$ orbitals, above and below that line. A C–C single bond is a $\sigma$ bond; a double bond consists of one $\sigma$ and one $\pi$; a triple bond of one $\sigma$ and two $\pi$. Around a single bond the two atoms rotate freely. Around a double bond rotation is prevented, because it would make the $p$ orbitals lose their parallel arrangement and break the $\pi$ bond.

For example, in ethene $\mathrm{CH_2{=}CH_2}$ there are four C–H bonds and the $\sigma$ bond between the two carbons, five $\sigma$ bonds in all, plus one $\pi$ bond. Hybridisation refers to the single atom and not to the molecule: in propene $\mathrm{CH_2{=}CH{-}CH_3}$ the two carbons of the double bond are $sp^2$ and the carbon of the $\mathrm{CH_3}$ group is $sp^3$.

![Planar ethene with five sigma bonds and linear ethyne with two pi bonds](/figure/chimica-semestre-filtro/carbonio-idrocarburi-stereochimica/legami-en.svg)
:::

:::osservazione{#rappresentazioni titolo="From molecular formula to spatial structure"}
An organic molecule is represented by formulas that give progressively more complete information.

- The **molecular formula** shows only which atoms are present and how many. Example: $\mathrm{C_4H_{10}}$.
- The **structural formula** also shows which atoms are bonded to each other and with what bond. The *condensed* version is written on one line: $\mathrm{CH_3CH_2CH_2CH_3}$.
- The **skeletal formula** is a zigzag line drawing. Each vertex and each end of the line is a carbon atom. The hydrogens bonded to carbons are not drawn: each carbon carries as many as are needed to reach four bonds. Other atoms (O, N, Cl and so on) and charges are always written. A single dash therefore represents two carbons, that is, ethane.

Three kinds of stroke are used to show the arrangement in space. A plain line is a bond lying in the plane of the page. A **solid wedge** is a bond coming towards the viewer. A **dashed wedge** is a bond going away behind the page. A formula without wedges gives no information about the arrangement in space.

![Tetrahedral carbon with OH and COOH in the plane, CH3 on a solid wedge and H on a hashed wedge](/figure/chimica-semestre-filtro/carbonio-idrocarburi-stereochimica/cunei-en.svg)
:::

## Names, connectivity and unsaturation

:::definizione{#nomenclatura titolo="Compound classes and IUPAC names"}
**Hydrocarbons** are the compounds made only of carbon and hydrogen. They are divided into families.

- **Alkanes** have only single bonds and are called *saturated*. Open-chain alkanes have the formula $\mathrm{C_nH_{2n+2}}$: methane $\mathrm{CH_4}$, ethane $\mathrm{C_2H_6}$, propane $\mathrm{C_3H_8}$, butane $\mathrm{C_4H_{10}}$.
- **Cycloalkanes** are alkanes closed into a ring and have the formula $\mathrm{C_nH_{2n}}$. Example: cyclohexane $\mathrm{C_6H_{12}}$.
- **Alkenes** contain a C=C double bond. With a single double bond the formula is $\mathrm{C_nH_{2n}}$, the same as cycloalkanes.
- **Alkynes** contain a triple bond.
- **Aromatic hydrocarbons** contain a ring like that of benzene.

A **heterocycle** is a ring in which at least one atom is different from carbon, for example nitrogen or oxygen. The atom must be part of the ring: a ring of carbons only with an oxygen attached outside is not a heterocycle.

The IUPAC name of a branched alkane, that is, the name assigned with the rules of the International Union of Pure and Applied Chemistry, is built in four steps.

1. The longest chain of carbons is found, called the main chain. Its number of carbons gives the base name: meth- (1), eth- (2), prop- (3), but- (4), pent- (5), hex- (6), with the ending *-ane*.
2. The carbons of the chain are numbered starting from the end nearest to the first branch.
3. Each branch takes the name of the corresponding group (methyl $\mathrm{CH_3}$, ethyl $\mathrm{C_2H_5}$), preceded by the number of the carbon it is attached to.
4. If the same group appears several times the prefixes di-, tri-, tetra- are used. Different groups are listed in alphabetical order, without counting these prefixes.

For example, in $\mathrm{CH_3CH(CH_3)CH_2CH_2CH_3}$ the longest chain has five carbons (pentane) and a methyl group is attached to carbon 2. The name is 2-methylpentane and the molecular formula, counting the carbon of the methyl as well, is $\mathrm{C_6H_{14}}$.

For alkenes the ending is *-ene*. The main chain is the one that contains the double bond, and it is numbered so that the double bond has the lowest possible number; the number refers to the first of the two carbons of the double bond. For example, $\mathrm{CH_2{=}CHCH(CH_3)CH_3}$ is 3-methylbut-1-ene: the chain has four carbons, the double bond starts at carbon 1 and the methyl is on carbon 3. The double bond takes precedence over branches in the choice of numbering. When needed, the full name also includes the symbols $E/Z$ or $R/S$, which describe the arrangement in space and are explained in the following sections.

The **degree of unsaturation** $I$ shows how many rings and multiple bonds there are in a molecule. For a hydrocarbon with $C$ carbon atoms and $H$ hydrogen atoms it is calculated with the formula below.
$$I=\dfrac{2C+2-H}{2}.$$
Each ring and each double bond count 1; each triple bond counts 2. An alkane has $I=0$. For example, for $\mathrm{C_4H_8}$ one gets $I=\dfrac{2\cdot4+2-8}{2}=1$, so the molecule contains one double bond or one ring: it can be a butene or cyclobutane. The degree of unsaturation does not distinguish between these possibilities; it makes it possible to check whether a drawn structure is compatible with the formula.

![Numbered skeleton of 2-methylpentane, showing five parent-chain carbons and a methyl group at C2](/figure/chimica-semestre-filtro/carbonio-idrocarburi-stereochimica/nomenclatura-en.svg)
:::

## Conformations, chirality and double bonds

:::definizione{#stereoisomeri titolo="Relationships between structures"}
**Isomers** are different compounds that have the same molecular formula. They are divided into two large groups.

**Constitutional isomers** (or structural isomers) have their atoms bonded in a different order. Butane $\mathrm{CH_3CH_2CH_2CH_3}$ and 2-methylpropane $\mathrm{CH(CH_3)_3}$ both have the formula $\mathrm{C_4H_{10}}$, but the first has a straight chain and the second a branched chain.

**Stereoisomers** have their atoms bonded in the same order and differ only in the arrangement in space.

**Conformations**, on the other hand, are the different shapes the same molecule takes by rotating around single bonds. In ethane, for example, the hydrogens of the two carbons can be aligned (*eclipsed* conformation) or alternating (*staggered* conformation). Conformations turn into one another continuously at room temperature, so they are not isomers that can be separated.

A molecule is **chiral** if it cannot be superimposed on its own mirror image, like the right hand and the left hand. The two forms, mirror images of each other, are called **enantiomers**. The most common cause of chirality is a **stereogenic centre** (or chiral carbon), that is, a carbon bonded to four groups that are all different. Butan-2-ol $\mathrm{CH_3CH(OH)CH_2CH_3}$ has one: carbon 2 is bonded to H, OH, $\mathrm{CH_3}$ and $\mathrm{CH_2CH_3}$. Propan-2-ol $\mathrm{CH_3CH(OH)CH_3}$ has none, because the central carbon carries two identical methyl groups. Chirality is a property of the whole molecule. A molecule with several stereogenic centres can be non-chiral overall, like the meso form described in this same box.

**Diastereomers** are stereoisomers that are not mirror images of each other. Unlike enantiomers they have different physical properties, for example a different melting point. **Epimers** are diastereomers that differ in the arrangement of a single stereogenic centre: D-glucose and D-mannose differ only at carbon 2. The $E/Z$ isomers of double bonds, described in the next box, are also diastereomers.

A molecule with $n$ stereogenic centres has at most $2^n$ stereoisomers. The number is smaller when the molecule has an internal symmetry. 2,3-Dichlorobutane has two stereogenic centres, so at most four stereoisomers. The forms $(2R,3R)$ and $(2S,3S)$ are a pair of enantiomers. The forms $(2R,3S)$ and $(2S,3R)$ are instead the same molecule, because the two halves are mirror images of each other. This form is called **meso**: it has stereogenic centres and is non-chiral overall. The stereoisomers are therefore three. A meso compound is a single substance; a **racemate** is instead a mixture of two enantiomers in equal parts.

![Fischer projections of 2,3-dichlorobutane: the RR and SS pair and the meso RS form](/figure/chimica-semestre-filtro/carbonio-idrocarburi-stereochimica/meso-en.svg)
:::

:::definizione{#isomeria-ez titolo="Priorities at the two alkene carbons"}
There is no rotation around a double bond, so the groups attached to the two carbons stay on one side or the other. If each of the two carbons carries two different groups, there are two stereoisomers, distinguished by the symbols $E$ and $Z$. The assignment is made in two steps.

1. On each carbon of the double bond one establishes which of the two groups has priority, according to the CIP rules (named after the chemists Cahn, Ingold and Prelog): the atom with the higher atomic number has priority.
2. If the two priority groups are on the same side of the double bond, the isomer is $Z$ (from the German *zusammen*, together). If they are on opposite sides, it is $E$ (*entgegen*, opposite).

In but-2-ene $\mathrm{CH_3CH{=}CHCH_3}$ each carbon of the double bond carries a methyl and a hydrogen, and the methyl has priority. In the $Z$ isomer the two methyls are on the same side; in the $E$ isomer they are on opposite sides.

The terms *cis* and *trans* mean the same thing in simple cases: cis when two identical groups are on the same side, trans when they are on opposite sides. In but-2-ene cis coincides with $Z$ and trans with $E$. The coincidence does not always hold, because cis/trans compares identical groups whereas $E/Z$ compares priorities. If one of the two carbons carries two identical groups, the isomerism does not exist: propene $\mathrm{CH_2{=}CHCH_3}$ has two hydrogens on the first carbon and has no $E/Z$ isomers.

![Z and E forms of but-2-ene, highlighting the two higher-priority methyl groups](/figure/chimica-semestre-filtro/carbonio-idrocarburi-stereochimica/ez-en.svg)
:::

## R/S assignment, Fischer projections and optical rotation

:::osservazione{#cip-fischer titolo="Conventions applied to structure"}
The arrangement of the groups around a stereogenic centre is shown by the letters $R$ and $S$. To assign them the four groups are ranked by priority with the **CIP rules** (Cahn, Ingold and Prelog).

1. One looks at the atom directly bonded to the centre: the one with the higher atomic number has higher priority. Among bromine, oxygen, carbon and hydrogen the order is Br, O, C, H.
2. If two atoms are the same, the atoms bonded to each of them are compared, until a difference is found. An ethyl $\mathrm{CH_2CH_3}$ precedes a methyl $\mathrm{CH_3}$, because its first carbon is bonded to $(\mathrm C,\mathrm H,\mathrm H)$ whereas that of the methyl is bonded to $(\mathrm H,\mathrm H,\mathrm H)$.
3. A double or triple bond is counted as if the atom were bonded two or three times to the same atom. Among isotopes the one of greater mass has priority.

Once the priorities from 1 (the highest) to 4 are established, the molecule is viewed so that group 4 points away from the viewer. One then goes from group 1 to 2 to 3: if the path is clockwise the configuration is $R$; if it is anticlockwise it is $S$. If in the drawing group 4 points towards the viewer, the direction read is reversed.

The **Fischer projection** is a way of drawing a stereogenic centre as a cross. The centre is the crossing point; the two horizontal bonds come towards the viewer and the two vertical ones go away. With this drawing three rules hold: rotating the figure by $180^\circ$ in the plane does not change the molecule; rotating it by $90^\circ$ turns it into the enantiomer; swapping two groups inverts the configuration, and swapping another two brings it back to the initial one.

For sugars and amino acids the letters **D** and **L** are also used, defined starting from glyceraldehyde. In the Fischer projection with the CHO group at the top and $\mathrm{CH_2OH}$ at the bottom, glyceraldehyde with the OH on the right is the D form and the one with the OH on the left is the L form. In a sugar with several stereogenic centres one looks at the centre farthest from the carbonyl group, that is, the second-to-last carbon at the bottom: OH on the right indicates the D series. The two systems are independent: D/L is read from the Fischer drawing, whereas R/S is obtained with the CIP rules for each centre. D-Glyceraldehyde is $R$, but in other molecules a D configuration can correspond to $S$.

![Fischer projections of R D-glyceraldehyde and S L-glyceraldehyde, with horizontal bonds forwards and vertical bonds backwards](/figure/chimica-semestre-filtro/carbonio-idrocarburi-stereochimica/fischer-en.svg)
:::

:::definizione{#rotazione-ottica titolo="Optical measurement and enantiomeric composition"}
Two enantiomers have the same physical properties, except one: they rotate the plane of polarised light in opposite directions. This property is called **optical activity** and is measured with a polarimeter. The measured angle $\alpha$ depends on the substance, on the concentration $c$ and on the length $\ell$ of the tube containing the solution. To compare different substances the **specific rotation** is used, obtained by dividing the angle by the length and by the concentration.
$$[\alpha]_{\lambda}^{T}=\dfrac{\alpha}{\ell c}.$$
In this formula $\ell$ is in decimetres and $c$ in grams per millilitre; the symbols $T$ and $\lambda$ are a reminder that the value depends on the temperature and on the wavelength of the light used, as well as on the solvent. A substance that rotates the plane clockwise is called *dextrorotatory* and is marked $(+)$; one that rotates it anticlockwise is called *laevorotatory* and is marked $(-)$. The sign is obtained only from the measurement: there is no link between the sign and the letters $R/S$ or D/L.

Two pure enantiomers have specific rotations equal in value and opposite in sign. A racemate, which contains them in equal parts, does not rotate light, because the two effects cancel. A non-chiral substance does not rotate light either. A zero rotation is therefore compatible with both cases.

A mixture in which one enantiomer prevails over the other rotates light less than the pure enantiomer. The **enantiomeric excess** measures by how much one prevails: $ee=|x_R-x_S|\cdot100\%$, where $x_R$ and $x_S$ are the fractions of the two enantiomers. For example, a mixture with $75\%$ R and $25\%$ S has $ee=50\%$, and its rotation is half that of the pure R enantiomer at the same concentration. Conversely, the enantiomeric excess is obtained from the measured rotation, if the value of the pure enantiomer under the same conditions is known.
:::

## Electrons, intermediates and reactivity

:::definizione{#intermedi titolo="Homolysis, heterolysis and stabilization"}
In an organic reaction some bonds break and others form. A covalent bond breaks in two ways.

- In **homolytic** cleavage (homolysis) each of the two atoms keeps one of the two electrons of the bond. Two **radicals** form, that is, two fragments with an unpaired electron.
- In **heterolytic** cleavage (heterolysis) one of the two atoms keeps both electrons. Two ions form: a cation and an anion.

Heterolytic cleavage of a bond to carbon gives two kinds of **intermediates**, that is, unstable species that form during the reaction and react at once. A **carbocation** is a carbon with three bonds and a positive charge; it has only six electrons and is planar. A **carbanion** is a carbon with three bonds, a lone pair and a negative charge.

The stability of a carbocation depends on how many alkyl groups are bonded to the positive carbon. Alkyl groups donate electron density and reduce the positive charge. The order of stability is: tertiary (three alkyl groups) > secondary (two) > primary (one) > methyl. A carbocation is even more stable if the charge can be spread over several atoms by resonance, as in the allyl carbocation, in which the positive carbon is next to a double bond.

For carbanions the order is different, because the charge is negative. A carbanion is stabilised by resonance and by nearby groups that attract electrons. It is also more stable if the lone pair is in an orbital with more $s$ character, that is, closer to the nucleus: a carbanion on an $sp$ carbon is more stable than one on an $sp^2$ carbon, which in turn is more stable than one on an $sp^3$ carbon.

An example of a radical reaction is the chlorination of methane, which takes place in light and proceeds in three phases. In **initiation** light breaks the chlorine molecule into two radicals: $\mathrm{Cl_2}\xrightarrow{h\nu}2\mathrm{Cl}^{\boldsymbol{\cdot}}$. In **propagation** two reactions take place in sequence.
$$
\begin{aligned}
\mathrm{Cl}^{\boldsymbol{\cdot}}+\mathrm{CH_4}&\longrightarrow\mathrm{HCl}+\mathrm{CH_3}^{\boldsymbol{\cdot}},\\
\mathrm{CH_3}^{\boldsymbol{\cdot}}+\mathrm{Cl_2}&\longrightarrow\mathrm{CH_3Cl}+\mathrm{Cl}^{\boldsymbol{\cdot}}.
\end{aligned}
$$
In the first reaction the chlorine radical removes a hydrogen from methane and forms a methyl radical. In the second the methyl radical reacts with a chlorine molecule, forms chloromethane and regenerates a chlorine radical, which starts the cycle again. This is why it is called a *chain reaction*: a single initial radical transforms many molecules. In **termination** two radicals combine and the chain stops; for example, two methyl radicals form ethane. The chloromethane formed can react again in the same way, so a mixture of products with one, two, three or four chlorine atoms is obtained.
:::

:::osservazione{#effetti-elettronici titolo="Polarization, resonance and reagents"}
Two effects shift the electrons within a molecule and determine its reactivity.

The **inductive effect** is the shift of the electrons of $\sigma$ bonds towards a more electronegative atom. A chlorine atom, for example, attracts the electrons of the carbon it is bonded to and makes it partially positive. The effect weakens rapidly on moving away along the chain.

**Resonance** is the spreading of $\pi$ electrons or lone pairs over several atoms. It is represented by drawing several formulas, called *resonance structures*, which differ only in the position of the electrons. The real molecule is a single one and is intermediate between the resonance structures; the resonance structures are not different molecules that turn into one another. In the allyl carbocation of the figure the positive charge is shared between the two carbons at the ends.

![Two contributing structures of the allylic carbocation, with fixed nuclei and charge distributed over terminal carbons](/figure/chimica-semestre-filtro/carbonio-idrocarburi-stereochimica/risonanza-en.svg)

Organic reagents are classified according to their electrons.

- A **nucleophile** is an electron-rich species, which donates a pair to form a new bond. It has a lone pair or a negative charge. Examples: $\mathrm{OH^-}$, water, amines, thiolates $\mathrm{RS^-}$.
- An **electrophile** is an electron-poor species, which accepts the pair. It has a positive charge, full or partial. Examples: the carbon of a carbonyl group $\mathrm{C{=}O}$ and the carbon bonded to a halogen.

Most organic reactions are the attack of a nucleophile on an electrophile. The $\mathrm{H^+}$ ion is also an electrophile; the reaction with it is an acid-base reaction.

*Basicity* and *nucleophilicity* are similar but distinct properties. A base donates its pair to a proton, and basicity is measured by an equilibrium constant. A nucleophile donates its pair to a carbon, and nucleophilicity is measured by the rate of the reaction. A very bulky species can be a strong base and a poor nucleophile, because it easily reaches a small proton but not a carbon surrounded by other groups.

Mechanisms are drawn with **curved arrows**. Each arrow represents the movement of a pair of electrons: it starts from the lone pair or bond that supplies the electrons and ends where the new bond forms.
:::

## Alkyl halides: substitution and elimination

:::osservazione{#sostituzioni titolo="SN2 and SN1: kinetics and stereochemistry"}
An **alkyl halide** is a compound in which a halogen atom (F, Cl, Br, I), written X, is bonded to an $sp^3$ carbon. The carbon is partially positive, so it is an electrophile. Alkyl halides give two kinds of reaction: **substitution**, in which a nucleophile takes the place of the halogen, and **elimination**, in which a double bond forms. The halogen that leaves is the **leaving group**. These reactions do not apply to halogens bonded to a carbon of a double bond or of an aromatic ring.

Nucleophilic substitution takes place by two mechanisms, called SN2 and SN1. In the two abbreviations S stands for substitution and N for nucleophilic.

In **SN2** everything happens in a single step. The nucleophile attacks the carbon from the side opposite the halogen, and while the new bond forms the bond to the halogen breaks. Two species take part in the step, so the rate depends on both: $v=k[\mathrm{RX}][\mathrm{Nu^-}]$. The number 2 in the name shows that the step is bimolecular. The reaction is faster the less hindered the carbon is: it is fast with methyl and primary halides, slower with secondary ones, and does not take place with tertiary ones. It is favoured by a strong nucleophile and by a polar aprotic solvent, such as acetone, which does not form hydrogen bonds with the nucleophile and leaves it more reactive.

The reaction is easier if the leaving group is stable once it has left, that is, if it is a weak base. Among the halogens the order is $\mathrm{I^-}>\mathrm{Br^-}>\mathrm{Cl^-}>\mathrm{F^-}$: iodide is the best leaving group, also because the C–I bond is the weakest, and fluoride is the worst.

Since the nucleophile enters from the side opposite the halogen, the three groups remaining on the carbon end up on the opposite side from before. This effect is called **inversion of configuration**. To find the letter $R$ or $S$ of the product the CIP rules are applied again, because the new group can have a different priority from that of the halogen. No carbocation forms in SN2.

In **SN1** the reaction takes place in two steps. In the first, slow step the halogen leaves on its own and a carbocation forms. In the second, fast step the nucleophile attacks the carbocation. The rate is determined by the first step, in which only the halide takes part: $v=k[\mathrm{RX}]$, and it does not depend on the concentration of the nucleophile. The number 1 shows that the slow step is unimolecular. The reaction is faster the more stable the carbocation is: it is fast with tertiary halides and does not take place with primary ones. It is favoured by a polar protic solvent, such as water or an alcohol, which stabilises the ions.

The carbocation is planar, so the nucleophile can attack it from both faces. If the carbon is a stereogenic centre both enantiomers form, in almost equal amounts (*racemisation*). In addition the carbocation can *rearrange*: a hydrogen or an alkyl group moves from a neighbouring carbon and forms a more stable carbocation, and the product then has a different skeleton from the one expected.

![Schematic energy profiles: one maximum for SN2 and two maxima separated by an intermediate for SN1](/figure/chimica-semestre-filtro/carbonio-idrocarburi-stereochimica/meccanismi-en.svg)
:::

:::osservazione{#eliminazioni titolo="E2, E1 and the choice of conditions"}
In **elimination** the alkyl halide loses the halogen and a hydrogen bonded to the neighbouring carbon (called the $\beta$ hydrogen), and a double bond forms between the two carbons. The product is an alkene. Elimination also has two mechanisms.

In **E2** everything happens in a single step: a base removes the $\beta$ hydrogen while the halogen leaves. The rate depends on both species: $v=k[\mathrm{RX}][\mathrm B]$. For the reaction to take place, the hydrogen and the halogen must be on opposite sides of the C–C bond, in the arrangement called *antiperiplanar*. In a cyclohexane ring this requires both to be in axial positions.

In **E1** a carbocation forms first, as in SN1, and then a base removes the $\beta$ hydrogen. This is why E1 and SN1 often occur together.

Substitution and elimination compete. Three conditions steer the outcome.

- A strong base favours E2.
- A high temperature favours elimination over substitution.
- A tertiary halide does not give SN2; with a strong base it gives E2, and in a protic solvent without a strong base it gives SN1 and E1.

When two different alkenes can form, the one with more alkyl groups on the carbons of the double bond, which is the more stable, usually prevails (**Zaitsev's rule**). With a very bulky base the less substituted alkene prevails instead, because the base reaches the less hindered hydrogen more easily.
:::

## Alkanes and cycloalkanes: shape and properties

:::osservazione{#alcani-cicloalcani titolo="Interactions, conformations and oxidation"}
Alkanes contain only C–C and C–H bonds, which are only slightly polar. Their molecules attract each other only through London dispersion forces. Three properties follow.

- They are insoluble in water, because they do not form hydrogen bonds with it.
- The boiling point increases with the length of the chain, because larger molecules attract each other more. Methane, ethane, propane and butane are gases; from pentane onwards straight-chain alkanes are liquids.
- For the same formula, a branched alkane boils at a lower temperature than a straight-chain one, because its molecules are more compact and have less contact surface.

Rotation around a single bond is possible but not entirely free. In ethane the staggered conformation, with alternating hydrogens, is more stable than the eclipsed one, in which the hydrogens of the two carbons are aligned and their electrons repel each other.

In cycloalkanes ring closure can force the bond angles to values different from $109.5^\circ$. This distortion is called **ring strain**. Cyclopropane, with angles of $60^\circ$, has strong strain and is very reactive. Cyclohexane is not flat: it takes the **chair** conformation, in which all the angles are close to $109.5^\circ$ and the strain is almost zero. In the chair each carbon has two positions for its substituents: an **axial** one, perpendicular to the ring, and an **equatorial** one, pointing outwards. The chair can flip into the other chair, and in this change axial positions become equatorial and vice versa. A large substituent prefers the equatorial position, where it has more room.

Alkanes are not very reactive. Their most important reaction is **combustion**: with enough oxygen all the carbon becomes $\mathrm{CO_2}$ and all the hydrogen becomes $\mathrm{H_2O}$, and a lot of energy is released. For propane the reaction is the following.
$$\mathrm{C_3H_8}+5\,\mathrm{O_2}\longrightarrow3\,\mathrm{CO_2}+4\,\mathrm{H_2O}.$$
Long hydrocarbon chains are the main part of fats and membrane lipids. Since they are rich in C–H bonds, their oxidation releases a lot of energy, and this is why fats are the energy reserve of the body. In cells oxidation takes place in stages, through a series of reactions catalysed by enzymes.
:::

## Alkenes and conjugated dienes

:::osservazione{#alcheni-dieni titolo="Electrophilic addition and delocalization"}
**Alkenes** contain a C=C double bond. The electrons of the $\pi$ bond are far from the nuclei and loosely held, so the double bond behaves as a nucleophile and reacts with electrophiles. The typical reaction is **electrophilic addition**: the $\pi$ bond breaks and each of the two carbons forms a new single bond.

In the addition of HBr to propene $\mathrm{CH_3CH{=}CH_2}$ the reaction takes place in two steps. In the first the $\mathrm{H^+}$ ion bonds to one of the two carbons and a carbocation forms on the other. In the second the bromide ion bonds to the carbocation. The hydrogen bonds to the terminal carbon, because in this way a secondary carbocation forms, more stable than a primary one. The main product is therefore 2-bromopropane. This behaviour is summed up by **Markovnikov's rule**: the hydrogen bonds to the carbon of the double bond that already has more hydrogens.

Three special cases are known.

- In the presence of peroxides, HBr adds by a radical mechanism and the orientation is the opposite: 1-bromopropane forms. This holds only for HBr.
- Since a carbocation forms, the rearrangements already described for SN1 are possible.
- In the addition of bromine $\mathrm{Br_2}$ no carbocation forms but a *bromonium* ion, a three-membered ring that includes the bromine. The second bromine atom attacks from the opposite side, so the two bromine atoms bond on opposite sides of the double bond (*anti* addition).

A **diene** contains two double bonds. If the two double bonds are separated by a single bond only, as in buta-1,3-diene $\mathrm{CH_2{=}CH{-}CH{=}CH_2}$, the diene is called **conjugated**: the four $p$ orbitals are adjacent and the $\pi$ electrons are spread over all four carbons. This makes the molecule more stable. If there is an $sp^3$ carbon between the two double bonds, the double bonds are *isolated* and behave like two independent alkenes.

The addition of HBr to a conjugated diene gives two products. The carbocation that forms is allylic and has its positive charge shared between two carbons; bromide can bond to either. The **1,2-addition** product, in which H and Br are on neighbouring carbons, and the **1,4-addition** product, in which they are at the two ends and the double bond has moved to the centre, are obtained. At low temperature the 1,2 product prevails, which forms faster (*kinetic* product). At higher temperature the 1,4 product prevails, which is more stable (*thermodynamic* product).

Like alkanes, alkenes are only slightly polar and insoluble in water. The configuration of the double bond changes their shape. In natural unsaturated fatty acids the double bonds are almost always cis: the chain has a bend and the molecules cannot pack in an orderly way next to one another. This is why vegetable oils, rich in unsaturated fatty acids, are liquid, whereas saturated fats are solid. A trans double bond, on the other hand, leaves the chain almost straight.
:::

## Aromaticity, heterocycles and electrophilic substitution

:::definizione{#aromaticita titolo="Cyclic conjugation and Hückel's rule"}
**Benzene** $\mathrm{C_6H_6}$ is a flat ring of six $sp^2$ carbons, drawn with three double bonds alternating with three single bonds. In reality the six C–C bonds are all the same, of a length intermediate between a single and a double bond, because the six $\pi$ electrons are spread over the whole ring. The two formulas with the double bonds in swapped positions (Kekulé formulas) are two resonance structures of the same molecule. This spreading makes benzene much more stable than an ordinary alkene; the property is called **aromaticity**.

**Hückel's rule** establishes when a ring is aromatic. Four conditions are needed: the molecule is cyclic; it is planar; every atom of the ring has a $p$ orbital, that is, the conjugation is continuous; the number of $\pi$ electrons is $4n+2$, with $n$ an integer (2, 6, 10, 14 and so on). Benzene has 6 $\pi$ electrons, so $n=1$.

A planar and fully conjugated ring with $4n$ $\pi$ electrons (4, 8, 12) is **antiaromatic**, that is, particularly unstable. If planarity or continuous conjugation is missing, the ring is simply **non-aromatic**. Cyclooctatetraene has 8 $\pi$ electrons, but it is not planar and behaves like an ordinary alkene: it is non-aromatic. In the cyclopentadienyl anion the lone pair of the negative carbon is part of the $\pi$ system, which thus has 6 electrons, and the anion is aromatic.

![Benzene and pyrimidine rings, each with six pi electrons and pyrimidine nitrogens at positions 1 and 3](/figure/chimica-semestre-filtro/carbonio-idrocarburi-stereochimica/aromatici-en.svg)

Many heterocycles are also aromatic. **Pyrimidine** is a six-membered ring with two nitrogens in positions 1 and 3, and has 6 $\pi$ electrons like benzene. The lone pair of each nitrogen is in an orbital in the plane of the ring, pointing outwards, and is not part of the 6 $\pi$ electrons. **Purine** consists of two fused rings, one six-membered and one five-membered, with four nitrogens and 10 $\pi$ electrons in all. The nitrogenous bases of DNA (deoxyribonucleic acid) and RNA (ribonucleic acid) derive from these two rings: cytosine, thymine and uracil are pyrimidines; adenine and guanine are purines.
:::

:::osservazione{#sostituzione-aromatica titolo="Orientation, rate and biological context"}
On a benzene ring with one substituent, the other positions are named with three prefixes: **ortho** is the adjacent position (1,2), **meta** the next one (1,3) and **para** the opposite one (1,4).

The typical reaction of benzene is **electrophilic aromatic substitution**: an electrophile takes the place of a hydrogen of the ring. It takes place in two steps. In the first the electrophile bonds to a carbon of the ring and a carbocation forms, which is no longer aromatic. In the second the same carbon loses the $\mathrm{H^+}$ ion and the ring becomes aromatic again. Benzene does not give the addition reactions of alkenes, because an addition would destroy the aromaticity.

Some benzene derivatives have a common name: methylbenzene is called toluene. Others are named after the substituent, such as chlorobenzene and nitrobenzene. Benzene is non-polar and insoluble in water. An aromatic heterocycle with nitrogen atoms, such as pyrimidine, is instead polar and more soluble, because the nitrogens form hydrogen bonds with water.

A substituent already present on the ring has two effects on the next substitution: it changes the rate of the reaction and decides at which position the new group enters.

- Groups that donate electrons to the ring, such as methyl $\mathrm{CH_3}$ and the OH and $\mathrm{NH_2}$ groups, are **activating**: the reaction is faster than with benzene. They direct the new group to ortho and para.
- Groups that withdraw electrons from the ring, such as the nitro group $\mathrm{NO_2}$ and the carbonyl group, are **deactivating**: the reaction is slower. They direct the new group to meta.
- Halogens are an exception: they are deactivating, because they withdraw electrons by the inductive effect, and they direct to ortho and para, because their lone pairs stabilise the intermediate carbocation by resonance.

Some aromatic compounds are toxic. Benzene is converted by the liver into substances that damage the bone marrow. Some hydrocarbons with several fused rings, such as the benzo[a]pyrene present in smoke, are converted by the body into molecules that bind to DNA and can cause tumours. Toxicity depends on the individual substance and on how it is transformed in the body: other aromatic compounds, such as the nitrogenous bases and some amino acids, are indispensable to life.
:::
