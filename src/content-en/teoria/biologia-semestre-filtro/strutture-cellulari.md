---
titolo: "Membranes, organelles, trafficking and cytoskeleton"
sommario: "From membrane selectivity to protein targeting: transport, energy, degradation and cellular movement explained through mechanisms and experiments."
---

## Membranes and compartments

:::definizione{#membrane titolo="Bilayer, fluidity and asymmetry"}
A cell can maintain internal concentrations different from those outside because the **biological membrane** provides a selective barrier. Phospholipids have polar heads in contact with water and hydrophobic tails pointing towards the interior of the bilayer. Proteins embedded in the membrane enable exchange, adhesion and signal reception. A small nonpolar molecule, such as oxygen, crosses the bilayer more readily than an ion, which would have to lose part of its hydration shell and enter a hydrophobic environment.

The **fluid mosaic** model describes components capable of lateral movement. This movement is influenced by attachments to the cytoskeleton, junctions and lipid domains. Other conditions being equal, shorter tails and cis double bonds hinder packing and increase fluidity. Cholesterol restricts some movements at high temperatures and hinders ordered packing at low temperatures; its effect therefore depends on the conditions.

The two leaflets have different compositions. ATP-dependent flippases can maintain a selective distribution of lipids; activated scramblases allow redistribution between leaflets. Phosphatidylserine is normally enriched on the cytosolic side of the plasma membrane. Its exposure on the outside can contribute to recognition of apoptotic cells. The carbohydrates of glycoproteins and glycolipids face the extracellular side and form the glycocalyx. This hydrated layer protects the surface and participates in cell recognition and adhesion.

![Polar heads, hydrophobic tails and a transmembrane protein](/figure/biologia-semestre-filtro/strutture-cellulari/membrana-en.svg)
:::

:::esempio{titolo="Tracking a fluorescent protein"}
A small membrane region containing fluorescent proteins is bleached with a laser. If fluorescence returns through lateral entry of unbleached molecules, a mobile fraction exists. Incomplete recovery can indicate an immobilized fraction. This experiment, called FRAP, measures lateral mobility under the observed conditions; recovery alone does not demonstrate that proteins cross the bilayer from one leaflet to the other.
:::

## Transport, water and electricity

:::definizione{#trasporti titolo="Gradients, channels and carriers"}
The spontaneous direction of transport depends on the difference in chemical potential and, for ions, on the electrical difference as well. A cation is favoured towards a region at a more negative potential, while concentration may favour the opposite direction. The **electrochemical gradient** combines these contributions.

Simple diffusion crosses the bilayer. Facilitated diffusion involves proteins: a channel provides a selective pathway, whereas a carrier alternately exposes its binding site to the two sides. A finite supply of carriers produces saturation as substrate concentration increases. Both forms of diffusion are passive because they follow the gradient of the transported species.

A pump couples transport against a gradient to an energy source. Na⁺/K⁺-ATPase expels three Na⁺ and brings in two K⁺ for each ATP hydrolysed. The cycle therefore transfers one net positive charge outwards. A Na⁺-glucose cotransporter uses favourable sodium movement to accumulate glucose: this is secondary active transport, indirectly supported by the pump maintaining the sodium gradient.

ABC proteins possess ATP-binding domains, but the family includes different functions. **CFTR** is an anion channel, mainly for chloride and bicarbonate, whose opening is regulated by phosphorylation and ATP. Anions pass through the channel down their own electrochemical gradient. ATP consumption during regulation does not make that flow a pump against the gradient.

![Sodium-potassium pump and glucose cotransport](/figure/biologia-semestre-filtro/strutture-cellulari/trasporto-en.svg)
:::

:::definizione{#osmosi-potenziali titolo="Tonicity and membrane potential"}
**Osmosis** is the net movement of water across a selectively permeable membrane. In the absence of an initial pressure difference, water tends towards the compartment with the higher effective concentration of nonpenetrating solutes. Aquaporins increase water permeability without transporting ions along with it.

Tonicity expresses the effect of a solution on cell volume and requires knowledge of solute permeability. An iso-osmotic solution of a solute that enters the cell readily can cause swelling. For an ideal cell with a constant amount of nonpenetrating solute, neglecting other volumes and pressures, equilibrium obeys $C_iV_i=C_fV_f$. If a very large bath of nonpenetrating solutes changes from $300$ to $200\,\mathrm{mOsm/L}$, the predicted volume becomes $V_f=\dfrac{300}{200}V_i=1.5V_i$. A real cell may regulate its volume or lyse, so the model has specific conditions.

Membrane potential requires separation of a small fraction of the total charges. Pumps and carriers maintain ionic gradients; selective channel permeability contributes to the instantaneous potential. In the classical neuronal model, rapid opening of voltage-gated Na⁺ channels causes depolarization; their inactivation and increased K⁺ permeability favour repolarization. The pump maintains gradients over time, whereas rapid changes depend mainly on channels.
:::

## Nucleus and targeting

:::definizione{#nucleo-ran titolo="Nuclear pores and Ran directionality"}
The nucleus contains the genome and is bounded by two membranes, connected at the pores; the outer membrane is continuous with the endoplasmic reticulum. Nucleoporins form a selective barrier. Small molecules can diffuse, while many macromolecules use receptors that interact with the pore. The nucleolus is a membrane-free compartment where rRNA is produced and processed and ribosomal subunit assembly begins. Other nuclear condensates concentrate RNA processing and regulatory factors through dynamic associations, without forming organelles bounded by a bilayer.

An **NLS**, or nuclear localization signal, enables recognition by importins. In the cytosol, importin binds the cargo; after passage through the pore, Ran-GTP favours its release into the nucleus. Chromatin-associated RanGEF maintains abundant nuclear Ran-GTP. In the cytosol, RanGAP stimulates GTP hydrolysis. This distribution creates different binding conditions on the two sides.

In Ran-dependent export, an NES signal is recognized by an exportin. Cargo, exportin and Ran-GTP associate in the nucleus; hydrolysis in the cytosol favours dissociation. Receptors return and are reused. The NLS often remains in the protein and can be used again after cell division.

Localization can be regulated. IκB degradation makes NF-κB available for import; SREBP1 processing releases a fragment that reaches the nucleus. Many steroid receptors change their distribution and activity in response to a ligand. Export of most mRNAs uses the NXF1-NXT1 complex and remodelling of ribonucleoprotein particles: it must be distinguished from classical Ran-dependent export.

![Ran-dependent nuclear import and export](/figure/biologia-semestre-filtro/strutture-cellulari/ran-en.svg)
:::

:::esempio{titolo="Necessity and sufficiency of a signal"}
A large fluorescent protein remains in the cytosol; adding a functional NLS makes it accumulate in the nucleus. If size and other conditions are controlled, the result supports that signal being sufficient for import of the construct. To test its necessity in the natural protein, its NLS is mutated and protein stability and folding are checked. Loss of import and general loss of structure have different meanings.
:::

## Mitochondria: energy and import

:::definizione{#mitocondri titolo="From glucose breakdown to the proton gradient"}
A mitochondrion comprises an outer membrane, intermembrane space, an inner membrane folded into cristae, and a matrix. The outer membrane contains porins; the inner membrane is highly selective and maintains the proton gradient. Glycolysis occurs in the cytosol. Pyruvate enters the mitochondrion and can be converted to acetyl-CoA in the matrix, where most of the tricarboxylic acid cycle takes place.

NADH and FADH₂ transfer reducing equivalents to the respiratory chain. Complexes I, III and IV contribute to proton transfer from the matrix to the intermembrane space; complex II transfers electrons without pumping protons. Oxygen is the final electron acceptor and is reduced to water. Proton return to the matrix through **ATP synthase** can power ADP phosphorylation.

An uncoupler makes it easier for protons to return through an alternative pathway. The gradient decreases and ATP production per oxygen consumed falls; when substrates and oxygen are available, respiratory consumption may increase. A chain inhibitor instead directly impedes electron transfer. Distinguishing these mechanisms allows an experiment to be interpreted.

Complete aerobic oxidation of one glucose is often estimated to yield about 30–32 ATP in eukaryotic cells. Reducing-equivalent shuttles, transport and the degree of coupling modify the balance. Glycolysis directly produces two net ATP; conversion of pyruvate to lactate regenerates NAD⁺ without adding ATP. Human mitochondrial DNA encodes some oxidative phosphorylation proteins and RNAs needed for local translation; most mitochondrial proteins come from nuclear genes.

![Mitochondrial compartments and directions of proton movement](/figure/biologia-semestre-filtro/strutture-cellulari/mitocondrio-en.svg)
:::

:::definizione{#importazione-mitocondriale titolo="Signals, translocases and dynamics"}
Many proteins destined for the matrix are synthesized on cytosolic ribosomes with an amino-terminal presequence. Chaperones keep the chain suitable for translocation. TOM enables passage through the outer membrane and TIM23 participates in transfer across the inner one. The electrical potential across the inner membrane favours import of positively charged presequences; matrix chaperones use ATP. The presequence is often removed after entry. Some precursors destined for the intermembrane space also have a signal that stops transfer at the inner membrane; cleavage can then release the domain into the intermembrane space. Destination therefore also depends on signals following the first one.

Mitochondrial destinations require different pathways. TIM22 inserts several multipass carriers into the inner membrane; SAM promotes assembly of outer-membrane beta-barrel proteins; OXA inserts proteins into the inner membrane from the matrix side, including locally synthesized subunits. A general TOM defect can therefore affect many cargoes, whereas a defect in a later pathway can be more selective.

Fusion and fission modify the mitochondrial network. Mitofusins participate in outer-membrane fusion, OPA1 in inner-membrane fusion and DRP1 in fission. These events contribute to mitochondrial distribution and quality control. A damaged fragment can be separated and directed to mitophagy, connecting dynamics with degradation.
:::

## Peroxisomes and targeting signals

:::definizione{#perossisomi titolo="Oxidation reactions and PTS import"}
**Peroxisomes** have a single membrane and contain neither DNA nor ribosomes. They import proteins produced in the cytosol and participate, among other functions, in very-long-chain fatty acid breakdown and plasmalogen synthesis. Several oxidases produce hydrogen peroxide; catalase helps transform it, limiting its accumulation.

Many peroxisomal matrix proteins expose a PTS1 signal at their carboxy terminus, often represented by the sequence SKL. PEX5 recognizes PTS1; PEX7 participates in the PTS2 pathway. Other peroxins enable docking, import and receptor recycling, which requires ATP. Peroxisomes can also import already folded proteins, unlike many mitochondrial translocation pathways.

Biogenesis includes membrane-protein insertion, cargo import, growth and division. Membrane precursors derived from the reticulum can also contribute; the organelle forms through coordinated processes despite lacking a genome.

The signal must remain accessible. Adding a long tail after a carboxy-terminal PTS1 may impair recognition. Defects in different PEX genes can cause Zellweger spectrum disorders; the biological connection is loss of several peroxisomal functions following a biogenesis defect. Peroxisomes and mitochondria share some metabolic substrates but have distinct compartments, import machinery and energetic mechanisms.
:::

## Reticulum, Golgi and maturation

:::definizione{#reticolo-golgi titolo="Entry into the secretory pathway and quality control"}
Synthesis of a protein destined for secretion begins on a cytosolic ribosome. When a hydrophobic signal sequence emerges, **SRP** can bind it and target the complex to its receptor on the reticulum. The ribosome associates with the translocon and the chain enters the lumen during synthesis. Many amino-terminal signal sequences are removed; other hydrophobic sequences act as internal signals or stop-transfer sequences and determine membrane protein topology.

The luminal portion retains its orientation during vesicular transport. When a vesicle fuses with the plasma membrane, that portion becomes extracellular. This explains why sugars added to glycoproteins in the reticulum or Golgi lumen appear on the outer surface. Smooth reticulum participates in lipid synthesis, calcium handling and, in specialized cells, detoxification.

Folding, disulfide-bond formation and the start of N-glycosylation occur in the lumen. Calnexin and calreticulin participate in glycoprotein quality control. An incompletely assembled immunoglobulin can be retained until folding is complete. Persistently defective proteins can be retrotranslocated and degraded by the proteasome through **ERAD**. Accumulation of misfolded cargo activates the UPR, which can reduce synthesis and increase the reticulum's quality-control capacity.

The ΔF508 variant of CFTR illustrates how a folding defect can reduce the amount of channel reaching the surface. The Golgi receives cargo at its cis side, modifies proteins and lipids, and sorts them at the trans-Golgi network. Constitutive secretion continuously supplies membrane and the external environment; regulated secretion stores cargo in vesicles that fuse after a stimulus, often associated with increased cytosolic Ca²⁺.

![Secretory pathway and preservation of luminal orientation](/figure/biologia-semestre-filtro/strutture-cellulari/secretoria-en.svg)
:::

## Trafficking, endocytosis and degradation

:::definizione{#traffico-vescicolare titolo="Cargo selection and fusion"}
Budding must select cargo and deform the membrane. **COPII** participates in exit from the reticulum; COPI in retrieval to the reticulum and traffic within the Golgi. Clathrin participates in endocytosis and certain routes from the trans-Golgi. Coats and adaptors concentrate specific components; the coat is generally removed before fusion.

Rab proteins and tethering factors contribute to recognition of the target compartment. SNARE pairing brings membranes close together and promotes fusion. After fusion, the ATPase NSF, recruited by SNAP proteins, hydrolyses ATP to disassemble SNARE complexes and allow their reuse. Characteristic phosphoinositides recruit other trafficking proteins. Specificity therefore results from several coordinated recognition events.

A soluble reticulum-resident protein can escape towards the Golgi and be retrieved using its KDEL signal. Its stable presence in the reticulum also depends on this retrieval. Vesicular transport preserves topological equivalence of lumens: a soluble protein transferred from the reticulum to the Golgi remains separated from the cytosol.
:::

:::definizione{#endocitosi-autofagia titolo="Recycling, lysosomes and autophagy"}
Endocytosis internalizes external material and membrane. Receptors allow specific cargo to be concentrated; fluid-phase endocytosis samples the liquid. In the early endosome, acidification can favour separation of receptor and cargo. In the classical LDL pathway, the receptor recycles while cargo reaches degradative compartments. Transferrin and its receptor recycle after iron release; activated EGF receptors can be directed to multivesicular bodies and lysosomes, reducing signalling.

Many lysosomal hydrolases receive a mannose-6-phosphate signal in the Golgi. Recognition of this signal enables delivery to endosomes; V-ATPase acidifies the lumen and supports hydrolase activity. Enzyme or sorting defects can cause substrate accumulation. In transcytosis, cargo crosses a polarized cell in vesicles between different surfaces. Phagocytosis uses actin remodelling to engulf large particles.

In **macroautophagy**, a double-membrane autophagosome encloses cytoplasmic material and delivers it to the lysosomal system. Microautophagy involves remodelling of the degradative compartment's membrane; chaperone-mediated autophagy transfers specific proteins across the lysosomal membrane. Mitophagy selectively removes mitochondria and can involve PINK1 and Parkin. An increase in autophagosomes can result from greater formation or blocked degradation; distinguishing these hypotheses requires measuring flux through the entire pathway.

![Distinct fates of receptor, cargo and cytoplasmic material](/figure/biologia-semestre-filtro/strutture-cellulari/endocitosi-en.svg)
:::

## Cytoskeleton, forces and movement

:::definizione{#microtubuli titolo="Polarity, dynamic instability and motors"}
**Microtubules** are polarized polymers of alpha/beta-tubulin dimers. Nucleation can occur on gamma-TuRC complexes; the centrosome organizes many microtubules in animal cells. The two ends have different properties. Loss of a stabilizing cap rich in GTP-tubulin favours catastrophe, the transition from growth to shortening; rescue is the opposite transition.

Many kinesins move towards the plus end, while cytoplasmic dynein moves towards the minus end. Microtubule orientation therefore allows cargo direction to be predicted when the motor involved is known. ATP powers the mechanical cycle; MAP proteins regulate stability and interactions.

In motile cilia and eukaryotic flagella, the axoneme often contains nine peripheral doublets and two central microtubules. Axonemal dyneins generate relative sliding, converted into bending by constraints between doublets. Primary cilia generally have a nine-plus-zero organization and sensory functions; exceptions exist, so counting alone does not describe every ciliary structure.
:::

:::definizione{#actina-intermedi titolo="Actin networks and mechanical resistance"}
Actin forms polarized filaments whose dynamics are influenced by ATP binding and hydrolysis. Arp2/3 promotes branched networks suited to protrusions at the cell edge; formins favour elongation of unbranched filaments. Different myosins convert ATP into movement or tension on actin. In the sarcomere, relative sliding decreases the distance between Z lines while filament lengths remain substantially constant.

Rho, Rac and Cdc42 coordinate contractility, protrusions and polarity. In the model of chemotaxis on an adhesive surface, a neutrophil combines front advancement, substrate adhesion and rear retraction. In confined three-dimensional environments, it can use migration modes less dependent on integrin-mediated adhesion. Dystrophin helps transmit forces from the actin system towards muscle membrane complexes and the matrix; damage to that connection makes the membrane more vulnerable during contraction.

**Intermediate filaments**, such as keratins and lamins, increase resistance to deformation. Antiparallel association of subunits contributes to apolar assembly. They do not provide a track for kinesins, dyneins or myosins. Lamins support the nuclear envelope; LINC complexes connect nuclear structures and the cytoskeleton across that envelope. The three networks interact, but the predominant function of each helps interpret the phenotype of a selective defect.

![Comparison of actin, microtubules and intermediate filaments](/figure/biologia-semestre-filtro/strutture-cellulari/citoscheletro-en.svg)
:::
