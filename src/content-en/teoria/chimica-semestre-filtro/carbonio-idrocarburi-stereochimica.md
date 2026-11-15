---
titolo: "Carbon, hydrocarbons and stereochemistry"
sommario: "From three-dimensional structure to reactivity: names, configurations, intermediates, substitutions, eliminations and aromaticity, with the conditions behind each model."
---

## Carbon bonding and representations

:::definizione{#ibridazione titolo="Geometry and σ and π bonds"}
Molecular shape depends on bond directions. A neutral carbon with its ordinary valence completes four bonds when multiplicity is counted: four single bonds, one double and two single bonds, two double bonds, or one triple and one single bond. In the hybridization model, four directions correspond to $sp^3$ and tetrahedral geometry; three to $sp^2$ and trigonal planar geometry; two to $sp$ and linear geometry. The ideal angles are respectively $109.5^\circ$, $120^\circ$ and $180^\circ$.

A single C–C bond is a $\sigma$ bond, with overlap along the internuclear axis. A double bond contains one $\sigma$ and one $\pi$ bond; a triple bond contains one $\sigma$ and two $\pi$ bonds. Unhybridized $p$ orbitals form $\pi$ bonds through sideways overlap. This explains restricted rotation around a double bond: rotating one end changes that overlap.

In ethene, $\mathrm{CH_2{=}CH_2}$, the four C–H bonds and the C–C contribution give five $\sigma$ bonds, plus one $\pi$ bond. Hybridization describes an individual atom; a molecule containing an alkene and a saturated chain includes both $sp^2$ and $sp^3$ carbons.

![Planar ethene with five sigma bonds and linear ethyne with two pi bonds](/figure/chimica-semestre-filtro/carbonio-idrocarburi-stereochimica/legami-en.svg)
:::

:::osservazione{#rappresentazioni titolo="From molecular formula to spatial structure"}
A molecular formula counts atoms. A structural formula specifies their connectivity and bond types. In a skeletal formula, every unlabelled vertex and line end represents a carbon; carbon-bound hydrogens are added mentally to satisfy the expected valence. Heteroatoms and charges must be shown. A segment with unlabelled ends therefore represents two carbons, rather than a single atom.

A solid wedge represents a bond towards the observer; a hashed wedge represents a bond behind the plane; an ordinary line represents a bond in the plane. These symbols add configurational information that a condensed formula may leave unspecified. A formula lacking wedges does not by itself establish that the sample is racemic.

![Tetrahedral carbon with OH and COOH in the plane, CH3 on a solid wedge and H on a hashed wedge](/figure/chimica-semestre-filtro/carbonio-idrocarburi-stereochimica/cunei-en.svg)
:::

## Names, connectivity and unsaturation

:::definizione{#nomenclatura titolo="Compound classes and IUPAC names"}
**Hydrocarbons** contain only carbon and hydrogen. Saturated acyclic alkanes follow $\mathrm{C_nH_{2n+2}}$; saturated monocyclic cycloalkanes follow $\mathrm{C_nH_{2n}}$. An acyclic alkene with one double bond also follows the latter formula. Composition can therefore indicate an unsaturation without identifying its type. In a heterocycle, at least one ring atom is a heteroatom: oxygen outside an all-carbon ring does not make the ring heterocyclic.

For branched alkanes, a longest parent chain is selected and the possible numberings are compared at the first differing locant. In $\mathrm{CH_3CH(CH_3)CH_2CH_2CH_3}$, the chain contains five carbons and the methyl group occupies C2, giving 2-methylpentane. The branch carbon also counts towards the molecular formula, $\mathrm{C_6H_{14}}$. Prefixes such as di- and tri- specify repeated substituents; these multiplying prefixes are disregarded in the usual alphabetical ordering of simple substituents.

In the acyclic alkene examples considered here, the parent chain includes the double bond and is numbered to give it the lower locant. $\mathrm{CH_2{=}CHCH(CH_3)CH_3}$ is 3-methylbut-1-ene: the unsaturation locant takes priority over the branch locant. In complete names, any $E/Z$ or $R/S$ descriptors add spatial information.

For a neutral hydrocarbon with ordinary valences, the degree of unsaturation is
$$I=\dfrac{2C+2-H}{2}.$$
Each ring or double bond contributes one; each triple bond contributes two. For $\mathrm{C_4H_8}$ the result is one, compatible with a ring or a double bond. The formula checks a drawing, while identification requires further information.

![Numbered skeleton of 2-methylpentane, showing five parent-chain carbons and a methyl group at C2](/figure/chimica-semestre-filtro/carbonio-idrocarburi-stereochimica/nomenclatura-en.svg)
:::

## Conformations, chirality and double bonds

:::definizione{#stereoisomeri titolo="Relationships between structures"}
Butane and 2-methylpropane have formula $\mathrm{C_4H_{10}}$ but different connections: they are constitutional isomers. **Stereoisomers** preserve connectivity and differ in spatial arrangement. Rotation around a single bond produces conformations, such as staggered and eclipsed ethane; in the usual classification, these conformations are not isolable configurations at ordinary temperature.

Two enantiomers are nonsuperposable mirror images. A tetrahedral carbon attached to four different groups is a stereogenic centre; butan-2-ol contains one, whereas propan-2-ol has two identical methyl groups. Chirality is a property of the whole molecule: some chiral molecules lack such carbons, and some molecules with several stereogenic centres are overall achiral.

Diastereoisomers are stereoisomers that do not form an enantiomeric pair. **Epimers** differ in configuration at just one of several centres; D-glucose and D-mannose are C2 epimers. $E/Z$ isomers are normally diastereoisomers even when they lack tetrahedral stereogenic centres.

For $n$ independent centres, $2^n$ is an upper limit on configurations. In 2,3-dichlorobutane, symmetry makes the descriptions $(2R,3S)$ and $(2S,3R)$ identical: this **meso** form is achiral. The $(2R,3R)$ and $(2S,3S)$ forms are enantiomers, giving three stereoisomers overall. A meso compound is a single species, whereas a racemate is a mixture of enantiomers.

![Fischer projections of 2,3-dichlorobutane: the RR and SS pair and the meso RS form](/figure/chimica-semestre-filtro/carbonio-idrocarburi-stereochimica/meso-en.svg)
:::

:::definizione{#isomeria-ez titolo="Priorities at the two alkene carbons"}
An alkene admits $E/Z$ descriptors when each double-bond carbon bears two different substituents. CIP priorities are assigned separately at the two carbons. If the two higher-priority groups are on the same side, the configuration is $Z$; if they are on opposite sides, it is $E$. In but-2-ene, methyl outranks hydrogen at both ends, so cis corresponds to $Z$ and trans to $E$.

The cis–$Z$ correspondence is not universal: cis/trans compares groups identified as identical, whereas $E/Z$ compares priorities. Propene lacks this isomerism because one double-bond carbon bears two hydrogens. Even a drawing with groups on opposite sides of the page can therefore lack an $E/Z$ configuration.

![Z and E forms of but-2-ene, highlighting the two higher-priority methyl groups](/figure/chimica-semestre-filtro/carbonio-idrocarburi-stereochimica/ez-en.svg)
:::

## R/S assignment, Fischer projections and optical rotation

:::osservazione{#cip-fischer titolo="Conventions applied to structure"}
CIP rules first compare atomic numbers of atoms directly attached to the centre: bromine, oxygen, carbon and hydrogen rank Br, O, C, H. Ties are resolved by comparing atoms in the next layer, listed in descending order, until the first difference. Ethyl outranks methyl because the comparison is $(\mathrm C,\mathrm H,\mathrm H)$ against $(\mathrm H,\mathrm H,\mathrm H)$. Heavier isotopes receive higher priority; multiple bonds require formal duplicate atoms, without adding real atoms to the molecule.

With priority group 4 pointing away, a clockwise $1\to2\to3$ path gives $R$, while an anticlockwise path gives $S$. If group 4 points towards the observer, the observed sense is reversed. In a **Fischer projection**, horizontal bonds point forwards and vertical bonds point backwards. A $180^\circ$ in-plane rotation preserves configuration; a $90^\circ$ rotation, followed by reinterpretation as a Fischer projection, changes it. Exchanging one pair of groups inverts a centre; two exchanges preserve it.

In a glyceraldehyde Fischer projection with CHO at the top and $\mathrm{CH_2OH}$ at the bottom, OH on the right identifies the D series and OH on the left the L series. For monosaccharides, the convention refers to the stereogenic centre furthest from the carbonyl in the standard representation. D/L expresses a configurational relationship; R/S requires CIP comparison at each centre. Their correspondence must be established for the molecule concerned.

![Fischer projections of R D-glyceraldehyde and S L-glyceraldehyde, with horizontal bonds forwards and vertical bonds backwards](/figure/chimica-semestre-filtro/carbonio-idrocarburi-stereochimica/fischer-en.svg)
:::

:::definizione{#rotazione-ottica titolo="Optical measurement and enantiomeric composition"}
Observed rotation $\alpha$ depends on substance, solvent, temperature, wavelength, concentration and optical path length. With $\ell$ in decimetres and $c$ in grams per millilitre, the definition is
$$[\alpha]_{\lambda}^{T}=\dfrac{\alpha}{\ell c}.$$
The concentration convention must be stated: a value expressed per $100\,\mathrm{mL}$ requires the corresponding conversion. A $+$ sign denotes dextrorotation and a $-$ sign levorotation. Neither $R/S$ nor D/L predicts that sign, which is measured experimentally.

Pure enantiomers have opposite rotations under identical achiral conditions. An equimolar racemate has cancelling contributions; an achiral compound can also give zero rotation. A single zero measurement therefore does not automatically distinguish these situations.

For a mixture containing only two enantiomers, enantiomeric excess is $ee=|x_R-x_S|\cdot100\%$. A mixture containing $75\%$ R and $25\%$ S has $ee=50\%$. In the linear additive model, at equal total concentration, its rotation is half that of pure R. Inferring composition from rotation requires that model, a pure reference measured under the same conditions and absence of other optically active contributions.
:::

## Electrons, intermediates and reactivity

:::definizione{#intermedi titolo="Homolysis, heterolysis and stabilization"}
In homolysis each fragment retains one bonding electron, producing radicals. In heterolysis the pair remains on one fragment; a neutral substrate can thus produce a cation and an anion, as when an alkyl halide separates into a carbocation and halide. A simple alkyl carbocation has an electron-deficient, generally planar carbon; a carbanion bears an electron pair and a negative charge on carbon.

Among comparable alkyl carbocations, hyperconjugation and electron-donating inductive effects usually stabilize tertiary more than secondary and primary structures. Resonance can change the comparison: an allylic carbocation distributes charge over several atoms. Carbanion stability depends on resonance, electron-withdrawing groups and the $s$ character of the orbital containing the pair; the carbocation ordering cannot automatically be transferred to these species. With other effects held comparable, greater $s$ character stabilizes negative charge: a carbanion with its pair in an $sp$ orbital is favoured over its $sp^2$ and $sp^3$ analogues.

In radical chlorination of methane, photochemical initiation is $\mathrm{Cl_2}\xrightarrow{h\nu}2\mathrm{Cl}^{\boldsymbol{\cdot}}$. The two propagation steps are
$$
\begin{aligned}
\mathrm{Cl}^{\boldsymbol{\cdot}}+\mathrm{CH_4}&\longrightarrow\mathrm{HCl}+\mathrm{CH_3}^{\boldsymbol{\cdot}},\\
\mathrm{CH_3}^{\boldsymbol{\cdot}}+\mathrm{Cl_2}&\longrightarrow\mathrm{CH_3Cl}+\mathrm{Cl}^{\boldsymbol{\cdot}}.
\end{aligned}
$$
The radical is regenerated, sustaining the chain. Termination consumes two radicals, for example by forming ethane from two methyl radicals. Monosubstitution is not guaranteed: the chlorinated product can react further, giving a mixture.
:::

:::osservazione{#effetti-elettronici titolo="Polarization, resonance and reagents"}
The inductive effect transmits polarization through $\sigma$ bonds and weakens with distance. Resonance represents delocalization using several contributing structures with the same nuclear arrangement. These are not molecules alternating in time: they describe a single electronic structure. In allylic intermediates, the $\pi$ bond and adjacent orbital allow delocalization.

![Two contributing structures of the allylic carbocation, with fixed nuclei and charge distributed over terminal carbons](/figure/chimica-semestre-filtro/carbonio-idrocarburi-stereochimica/risonanza-en.svg)

A nucleophile donates an electron pair to an electrophile. Water, amines and thiolates can act as nucleophiles; polarized carbons, for example in carbonyls or alkyl halides, can be electrophiles. A proton is an electrophile, although its reaction is described as proton transfer.

Basicity concerns a protonation equilibrium; nucleophilicity concerns the rate of attack on a specified electrophile. Solvent and steric hindrance affect these properties differently: a bulky base can remove a proton effectively while attacking a shielded carbon poorly. Electron-flow arrows start at the supplying pair or bond and end at the electrons' new destination.
:::

## Alkyl halides: substitution and elimination

:::osservazione{#sostituzioni titolo="SN2 and SN1: kinetics and stereochemistry"}
In an alkyl halide the halogen is attached to a saturated carbon. A halogen attached directly to an aromatic or vinylic carbon belongs to a different context and does not automatically follow the models below.

**SN2** is concerted: new-bond formation and old-bond cleavage occur in one step, with attack from the side opposite the leaving group. In the bimolecular model, $v=k[\mathrm{RX}][\mathrm{Nu^-}]$. Unhindered methyl and primary substrates facilitate access; a tertiary centre obstructs it. A polar aprotic solvent can enhance the reactivity of many anionic nucleophiles, with other conditions held fixed.

The leaving group takes the bond electron pair. For comparable alkyl halides, iodide is generally better than fluoride: I⁻ is a weaker base and C–I is weaker than C–F. This trend does not automatically transfer to aromatic substitutions.

The spatial arrangement at the reacting centre is inverted. The product's R/S descriptor must be recalculated because the incoming substituent can change priorities. SN2 does not pass through a free carbocation and does not predict its rearrangements.

**SN1** involves ionization followed by nucleophilic attack; in the model with rate-limiting ionization, $v=k[\mathrm{RX}]$. Carbocation stability, leaving-group ability and an ionizing solvent are determining factors. A planar carbocation permits attack on two faces; both enantiomers may form, but ion pairs and shielding prevent an assumption of an exact racemate in every case. Hydride or alkyl shifts can rearrange the intermediate.

![Schematic energy profiles: one maximum for SN2 and two maxima separated by an intermediate for SN1](/figure/chimica-semestre-filtro/carbonio-idrocarburi-stereochimica/meccanismi-en.svg)
:::

:::osservazione{#eliminazioni titolo="E2, E1 and the choice of conditions"}
Elimination forms a double bond by removing a leaving group and a hydrogen from adjacent carbons. **E2** is concerted and, in the simple model, follows $v=k[\mathrm{RX}][\mathrm B]$. Antiperiplanar alignment of the C–H and C–X bonds favours the required overlap. In chair cyclohexanes this condition often requires trans-diaxial geometry: an appropriate beta hydrogen must be available in an accessible conformation.

**E1** passes through a carbocation and often competes with SN1. A strong base can favour E2; temperature, solvent, substrate and steric hindrance modify competition with substitution. With unhindered bases, the more substituted alkene is often favoured, following Zaitsev orientation; a bulky base can increase the less substituted product. These are conditional trends, not a product selection deducible from the substrate name alone.
:::

## Alkanes and cycloalkanes: shape and properties

:::osservazione{#alcani-cicloalcani titolo="Interactions, conformations and oxidation"}
C–C and C–H bonds make hydrocarbons weakly polar. Water does not effectively stabilize their surface through hydrogen bonding, so alkane solubility is low. Increasing chain length within unbranched series increases polarizability and dispersion interactions, tending to raise boiling points. Among comparable isomers, branching often lowers boiling point; melting point also depends on crystal packing and does not automatically follow the same trend.

Single-bond rotation encounters torsional barriers. Staggered ethane is more stable than eclipsed ethane. Cycloalkane strain includes angular, torsional and steric contributions. Cyclopropane angles differ greatly from the tetrahedral ideal. The cyclohexane chair reduces angular and torsional strain; chair inversion exchanges axial and equatorial positions while preserving the above/below-ring orientation. A bulky substituent often favours the equatorial position because this reduces 1,3-diaxial interactions.

In complete combustion with sufficient oxygen, carbon forms $\mathrm{CO_2}$ and hydrogen forms $\mathrm{H_2O}$:
$$\mathrm{C_3H_8}+5\,\mathrm{O_2}\longrightarrow3\,\mathrm{CO_2}+4\,\mathrm{H_2O}.$$
Lipid hydrocarbon chains contribute to membrane organization and energy reserves. Their biological oxidation proceeds through successive enzymatic reactions under conditions different from combustion in a flame.
:::

## Alkenes and conjugated dienes

:::osservazione{#alcheni-dieni titolo="Electrophilic addition and delocalization"}
An alkene $\pi$ bond can donate electrons to an electrophile. In ionic HBr addition to propene without peroxides, protonation producing a secondary carbocation is favoured over production of a primary carbocation. Subsequent bromide attack predominantly gives 2-bromopropane. Markovnikov orientation is thus explained through the intermediates of this pathway.

Under suitable radical conditions, HBr with peroxides can give the opposite orientation. This exception does not automatically extend to HCl and HI. Electrophilic addition can also permit rearrangements when a carbocation is involved. Bromine addition through a bromonium intermediate instead typically gives anti addition through attack from the opposite side.

A conjugated diene contains double bonds separated by one single bond, as in $\mathrm{CH_2{=}CH{-}CH{=}CH_2}$. The consecutive $p$ orbitals permit delocalization; two double bonds separated by an $sp^3$ carbon are isolated. Addition to a conjugated diene can produce 1,2 and 1,4 products through an allylic intermediate. In the classical HBr/buta-1,3-diene comparison, the kinetic product may predominate at short times and low temperature, whereas equilibration may favour the more stable product: the outcome depends on the stated conditions.

Simple alkenes are weakly polar and poorly soluble in water; size and shape modulate dispersion interactions and packing. A cis configuration in a lipid chain changes its direction and alters packing. Assigning the same effect to every double bond would be incorrect because position and configuration change its geometry.
:::

## Aromaticity, heterocycles and electrophilic substitution

:::definizione{#aromaticita titolo="Cyclic conjugation and Hückel's rule"}
In Hückel's model for a simple monocyclic ring, a cyclic, planar, continuously conjugated structure with $4n+2$ $\pi$ electrons is aromatic, where $n$ is a nonnegative integer. Benzene has six $\pi$ electrons, equivalent bonds and stabilization through delocalization. Its two Kekulé formulas represent the same molecule rather than two distinguishable isomers.

A planar, continuously conjugated ring with $4n$ $\pi$ electrons is antiaromatic in this model. Without planarity or continuous conjugation, the compound is nonaromatic. Cyclooctatetraene avoids planarity: its eight $\pi$ electrons alone do not make its real geometry antiaromatic. In the cyclopentadienyl anion, the charged atom's electron pair participates in the system, bringing the total to six.

![Benzene and pyrimidine rings, each with six pi electrons and pyrimidine nitrogens at positions 1 and 3](/figure/chimica-semestre-filtro/carbonio-idrocarburi-stereochimica/aromatici-en.svg)

Pyrimidine is a six-membered aromatic heterocycle with nitrogens at positions 1 and 3. Their pyridine-like lone pairs do not add extra pairs to the six-$\pi$-electron count. Purines have two fused rings and an aromatic system with ten $\pi$ electrons; in polycyclic systems, monocyclic counting must not be applied mechanically to each drawn hexagon. Purines and pyrimidines occur in nucleic-acid bases.
:::

:::osservazione{#sostituzione-aromatica titolo="Orientation, rate and biological context"}
Relative to a benzene substituent at C1, ortho, meta and para denote 1,2; 1,3 and 1,4 positions. In electrophilic aromatic substitution, attack forms a cationic intermediate that temporarily loses aromaticity. Subsequent proton loss restores it. Permanent addition to the ring would instead lose aromatic stabilization.

Methylbenzene is commonly called toluene; chlorobenzene and nitrobenzene are named after the substituent. Benzene is weakly polar and poorly soluble in water; a nitrogen-containing heterocycle can have different interactions and solubility, so aromaticity does not imply identical physical properties.

Methyl activates and predominantly directs ortho/para; nitro deactivates and predominantly directs meta. Halogens are the exception to a simple association between deactivation and meta direction: they withdraw inductively, but resonance donation relatively favours ortho/para intermediates. Comparing the rate with benzene and selecting the position are therefore distinct questions. With several substituents, electronic and steric effects must be considered together.

Toxicity depends on structure and metabolism as well as exposure. Benzene metabolites can damage bone marrow; some polycyclic hydrocarbons, such as benzo[a]pyrene, can be bioactivated into species forming DNA adducts. These examples do not assign identical toxicity to all aromatic substances, including the nitrogenous bases required for life.
:::
