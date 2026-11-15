---
titolo: "Cell cycle, meiosis and cell death"
sommario: "Checkpoints, cyclins and CDKs, Rb and p53, mitosis, meiosis, stem cells and apoptotic pathways, explained through experiments and chromosome counts."
---

## Cell-cycle phases and checkpoints

:::definizione{#ciclo titolo="G1, S, G2 and M phase"}
The **cell cycle** coordinates growth, DNA duplication and division. In G1 the cell responds to conditions and signals; in S it replicates its DNA; in G2 it completes preparations for division; M phase includes mitosis and cytokinesis. G1, S and G2 together constitute interphase. Some cells enter G0, a state outside the proliferative cycle that may be reversible or highly stable, depending on cell type.

Checkpoints coordinate transitions with DNA integrity, completion of replication and chromosome attachment to the spindle. If a requirement is not met, progression can be delayed to allow repair. These controls reduce the risk of transmitting errors; their disruption can promote genomic instability.

A dividing cell must first copy its information and then deliver a complete copy to each daughter. **Growth, replication and division are different processes**: a cell can enlarge without duplicating DNA, or replicate DNA without completing cytokinesis. Identifying a phase therefore requires measurements suited to the process being examined.

A diploid human somatic cell in G1 normally contains 46 chromosomes, each with one DNA molecule. After S phase it still has 46 chromosomes, but each consists of two sister chromatids: there are now 92 DNA molecules. Chromosome counts follow centromeric units that have not yet separated; DNA molecule counts follow chromatids. The symbol $n$ denotes the chromosome number in one set, while $C$ denotes the DNA content of one unreplicated haploid set. DNA replication changes $2n,2C$ to $2n,4C$ without making the cell tetraploid.

![Cell-cycle phases and DNA content](/figure/biologia-semestre-filtro/ciclo-cellulare/ciclo-en.svg)

**Reading an experiment.** Fluorescence proportional to DNA content distinguishes cells with $2C$, intermediate amounts and $4C$. These are compatible with G1 or G0, S phase, and G2 or mitosis before cellular separation, respectively. DNA content alone cannot distinguish G0 from G1 or G2 from M. Additional markers are needed, such as a pulse of a thymidine analogue to detect DNA synthesis or observation of condensed chromosomes.
:::

:::definizione{#cicline-cdk titolo="Activation of cell-cycle kinases"}
**CDKs** are kinases whose activity depends on binding cyclins and on additional regulation. Different cyclin concentrations vary through synthesis and degradation. Activating or inhibitory phosphorylation and inhibitory proteins such as p21 modify the activity of the complexes.

In the animal-cell model, cyclin D–CDK4/6 contributes to G1 progression; cyclin E–CDK2 to the G1/S transition; cyclin A associated with CDKs supports S and G2; cyclin B–CDK1 promotes mitotic entry. The complexes act within networks with feedback, so the presence of a cyclin alone does not prove that all its targets are active.

The term kinase describes the action: transferring a phosphate group to target proteins. A cyclin helps activate its CDK and select when and on which targets it acts. Phosphorylation may change a target's location, interactions or activity; it does not always activate it. CDKs are themselves regulated by phosphorylation: Cdc25 removes inhibitory phosphates, whereas Wee1 helps add them in the control of CDK1.

**Distinguishing abundance from activity.** Two samples can contain the same amount of cyclin B yet display different CDK1 activities if one retains inhibitory phosphorylation. Measuring cyclin alone is insufficient to predict mitotic entry. Similarly, degrading a cyclin switches off its complex without requiring destruction of the CDK. Rapid activation and selective degradation order events: the cell must not initiate another round of replication while separating its chromosomes.
:::

## The restriction point and DNA damage

:::definizione{#rb-e2f titolo="Growth factors and entry into S phase"}
In the classical model, **Rb** limits E2F transcription-factor activity and expression of genes required for S phase. Growth factors promote cyclin D–CDK4/6 activity; Rb phosphorylation, together with further cell-cycle regulation, reduces the brake on E2F and promotes the replication programme.

The **restriction point** is a G1 transition after which a cell can continue towards replication even if certain external mitogenic signals decline. It is distinct from DNA-damage checkpoints: a cell committed to proliferation must still coordinate its cycle with genome integrity.

Follow the direction of the interactions to understand the circuit. Rb acting as a brake restrains E2F; functionally disabling that brake increases expression of replication-related genes. Rb phosphorylation ultimately promotes the cycle by reducing inhibition, not by turning Rb into a polymerase. This is a teaching model of the network: Rb modifications are progressive and context-dependent.

![Mitogenic signals and the Rb brake](/figure/biologia-semestre-filtro/ciclo-cellulare/rb-en.svg)

**Worked reasoning.** Growth factors are withdrawn from two populations synchronised at different points in G1. The population that has not passed the restriction point may arrest; the other may complete the cycle already initiated. The result does not show that growth factors are unnecessary. It shows that dependence on their signals changes over time. Subsequent DNA damage may still trigger arrest: proliferative commitment and integrity surveillance are distinct controls.
:::

:::definizione{#p53-tumori titolo="Arrest, repair and transformation"}
DNA damage can stabilise **p53**, which changes the expression of genes involved in arrest, repair, senescence or apoptosis. Its targets include p21, an inhibitor of cyclin–CDK complexes. The response depends on the type, duration and severity of damage and on the cell's state.

A proto-oncogene can become an oncogene through alterations that increase or deregulate its action. **Tumour-suppressor genes**, including RB1 and TP53, restrain proliferation or support genome integrity and controlled death. Loss of both copies matters for many tumour suppressors, but dominant-negative effects and haploinsufficiency also occur. Some oncogenic viruses produce proteins that disrupt these controls: for example, high-risk HPV E6 and E7 interfere with the p53 and Rb pathways, respectively.

Reconstruct the damage response from signal to effect. Damage signalling promotes p53 accumulation; p53 can increase p21; p21 limits CDK-complex activity; progression slows. This provides time for repair networks to act. p53 is a transcription factor, not the enzyme that directly reseals every DNA break. Temporary arrest, stable senescence and apoptosis are different outcomes.

The oncogene/tumour-suppressor distinction concerns the **mechanism**, not just a gene's name. A continuously active proliferative signal can result from gain of function; loss of a brake can result from loss of function. The two-hit model helps explain many tumour suppressors but does not classify every variant by a single rule. Nor does one alteration alone prove that a cell is already cancerous: transformation and clonal selection involve several cellular properties.
:::

## Mitotic entry and the spindle

:::definizione{#mitosi-fuso titolo="Condensation and chromosome attachment"}
During **prophase**, chromosomes condense and the spindle develops. In many animal cells, nuclear-envelope breakdown during prometaphase gives spindle microtubules access to chromosomes; lamin phosphorylation contributes to nuclear-lamina disassembly. The endoplasmic reticulum, Golgi and other organelles reorganise for distribution to daughter cells.

**Kinetochore microtubules** connect chromosomes to the spindle; interpolar microtubules overlap in its central region; astral microtubules interact with the cortex and help position and orient the spindle. NDC80 is a kinetochore complex involved in microtubule binding. Kinesins, dyneins and tubulin dynamics produce and coordinate movements.

In metaphase, chromosomes align with sister kinetochores attached to opposite poles. The spindle checkpoint delays anaphase when attachments are absent or inappropriate. Alignment is useful evidence, but correct biorientation is the mechanical requirement for segregation.

Condensins promote compact chromosome organisation, whereas cohesins maintain the connection between sister chromatids: these complexes have different tasks. A kinetochore is a protein assembly built on the centromeric region, not the entire centromere. NDC80 helps connect it to microtubule ends; microtubule growth and depolymerisation cooperate with motors in chromosome movement.

![Mitotic spindle and three microtubule classes](/figure/biologia-semestre-filtro/ciclo-cellulare/fuso-en.svg)

A chromosome visually located on the metaphase plate can still have an incorrect attachment. **Position and connection are different observations.** An unattached kinetochore maintains spindle-checkpoint activity, inhibiting effective APC/C–Cdc20 activation. Correction of unstable attachments and checkpoint signalling cooperate, but the system is not infallible: some errors escape and cause abnormal segregation. Mitosis normally also distributes organelles and cytoplasmic components, without requiring the same one-for-one counting rule used for chromosomes.
:::

## Anaphase and cytokinesis

:::definizione{#apc-citodieresi titolo="APC/C, separase and the contractile ring"}
When checkpoint conditions permit, **APC/C**, a ubiquitin ligase, promotes degradation of securin and selected mitotic cyclins. Removing securin permits separase activity; separase cleaves a cohesin subunit, allowing sister chromatids to separate. Cyclin B degradation promotes mitotic exit.

In anaphase, daughter chromosomes move apart; in telophase, nuclei reorganise. Animal-cell **cytokinesis** uses an actin–myosin ring to constrict the division furrow. Chromosome segregation and cytoplasmic separation are coordinated but distinct processes. An asymmetric division may distribute different determinants or place daughters in different environments.

Distinguish three consecutive actions. APC/C **adds a ubiquitin signal** to selected substrates; the proteasome degrades tagged securin; separase, released from its inhibitor, **cleaves a cohesin subunit**. APC/C does not directly cut DNA and is not the protease that cleaves cohesin. Destruction of securin and cyclin B coordinates two different outcomes: sister separation and reduced mitotic activity.

![The APC/C, securin, separase and cohesin sequence](/figure/biologia-semestre-filtro/ciclo-cellulare/apc-en.svg)

**A blocking experiment.** If securin is made non-degradable while retaining separase binding, the spindle may form and chromosomes may align, but sister cohesion is not removed normally. By contrast, blocking the contractile ring after normal segregation can produce two nuclei in one cytoplasm. These outcomes distinguish chromosome control from cytokinesis. During anaphase, whole-cell chromosome counts change when sister centromeres separate. Always specify whether a count concerns the entire cell or the complement destined for each pole.
:::

## Meiosis and variation

:::definizione{#meiosi titolo="One replication and two divisions"}
**Meiosis** comprises one S phase followed by two divisions. Homologues separate in meiosis I; sister chromatids separate in meiosis II. During prophase I, homologues pair and crossing over exchanges segments between non-sister chromatids. Chiasmata, together with cohesion, contribute to correct homologue segregation.

Homologue separation reduces ploidy; sister separation in the second division is not preceded by another replication. With C denoting the DNA content of an unreplicated haploid set, a diploid cell progresses from $2n,2C$ in G1 to $2n,4C$ after S; each cell is $n,2C$ after division I and $n,1C$ after division II.

Homologue assortment and recombination increase gamete variation. Nondisjunction in meiosis I or II can generate gametes with extra or missing chromosomes. If one pair fails to separate in meiosis I and meiosis II proceeds normally, all products are aneuploid for that chromosome. If the error affects only one division II, the model yields two normal and two abnormal products.

Prophase I is divided into leptotene, zygotene, pachytene, diplotene and diakinesis. Homologue pairing is supported by the synaptonemal complex; recombination initiated during prophase produces exchanges whose mechanical consequence is visible as chiasmata when homologues begin to separate. A bivalent contains two duplicated homologous chromosomes and therefore four chromatids: a tetrad does not mean four independent chromosomes.

![Chromosome sets and DNA content during meiosis](/figure/biologia-semestre-filtro/ciclo-cellulare/meiosi-en.svg)

In meiosis I, sister kinetochores are oriented towards the same pole, while homologues attach to opposite poles. Arm cohesion is removed to permit homologue separation; centromeric cohesion is protected, partly through shugoshin, until the second division. In meiosis II, sisters can therefore biorient and separate. This different behaviour explains why division I is reductional and division II equational.

For a species with $2n=6$, each cell after division I contains three duplicated chromosomes, not six single-chromatid chromosomes. After division II it still contains three, now unduplicated. Ignoring crossing over, assortment of three pairs allows up to $2^3=8$ maternal/paternal combinations among gametes across many meioses. A single meiosis produces at most four products: possible combinations must not be confused with gametes produced by one event.
:::

## Gametogenesis and stem cells

:::definizione{#gametogenesi titolo="Human spermatogenesis and oogenesis"}
In **spermatogenesis**, a primary spermatocyte can produce four haploid spermatids, which mature into sperm. In oogenesis, cytoplasmic distribution is asymmetric, producing a large egg cell and polar bodies. Human primary oocytes begin meiosis before birth and arrest in prophase I; the secondary oocyte arrests in metaphase II and normally completes division following activation associated with fertilisation.

Arrests and timing therefore differ between male and female gametogenesis. The number of products able to contribute to development does not simply equal the theoretical number of nuclei generated by two divisions.

In adult men, proliferating spermatogonia maintain the germ line; primary spermatocytes enter meiosis, secondary spermatocytes have separated homologues, and spermatids have completed division II. Spermiogenesis remodels spermatids but is not a third meiotic division. The cell normally ovulated in women is a secondary oocyte in metaphase II, still with duplicated chromosomes: haploid does not necessarily mean $1C$.

The prolonged oocyte arrest and the need to preserve chromosome connections help explain segregation vulnerability without reducing all aneuploidies to one cause. Numerical problems must specify whether all meiotic products or only functional gametes are counted; oogenesis concentrates almost all the cytoplasm in one cell.
:::

:::definizione{#staminali titolo="Self-renewal and differentiation potential"}
A **stem cell** can self-renew and generate differentiated progeny. Self-renewal maintains the stem-cell compartment; differentiation produces cells with specialised functions. Symmetric and asymmetric divisions can both contribute to this balance, also in response to the niche.

Differentiation potential describes the range of cell types a cell can generate. Pluripotent cells can produce derivatives of all three embryonic germ layers, whereas multipotent cells have a narrower range. A progenitor may proliferate and differentiate without retaining the same long-term self-renewal capacity as a stem cell.

Observing a cell divide once does not establish stemness. Both continued production of cells with the same capacity and generation of differentiated progeny must be demonstrated over time. A population can also self-renew through balanced symmetric divisions: each individual division need not produce exactly one stem cell and one differentiated cell.

![Symmetric and asymmetric divisions](/figure/biologia-semestre-filtro/ciclo-cellulare/staminali-en.svg)

The niche provides contacts, signals and conditions that influence cell fate. Moving one daughter outside the niche can promote differentiation even if both daughters received the same DNA. Potential and proliferation rate remain different properties: a stem cell can be quiescent; a progenitor can divide rapidly yet exhaust its capacity over time.
:::

## Apoptosis and necrosis

:::definizione{#apoptosi-necrosi titolo="Morphology and caspases"}
During **apoptosis**, a cell activates a programme that can include chromatin condensation, fragmentation and formation of apoptotic bodies. The plasma membrane initially retains its integrity and fragments can be engulfed. Necrosis typically involves swelling, loss of integrity and release of cellular contents, potentially promoting inflammation. Regulated forms of death with necrotic morphology also exist: regulated does not automatically mean apoptotic.

**Caspases** are proteases activated from precursors. Initiators such as caspases 8 and 9 activate executioners such as 3 and 7, which cleave substrates responsible for many cellular changes. Efficient apoptotic-cell clearance limits content release; if clearance fails, secondary necrosis can occur.

External exposure of phosphatidylserine can promote recognition by phagocytes. In an experiment, annexin V detects this exposure, while a dye unable to cross an intact membrane helps assess permeability. An annexin-V-positive, dye-negative cell is compatible with early apoptosis in the appropriate context. Double positivity alone does not reliably distinguish late apoptosis from death involving primary loss of integrity: timing, controls and other indicators are needed.

Executioner caspases cleave cytoskeletal proteins, lamins and other substrates. DNA fragmentation also depends on nucleases activated downstream of the cascade: caspases are proteases, not nucleases. Assigning a death mechanism is therefore more reliable when morphology, markers and perturbations are combined rather than relying on one stain.
:::

## Apoptotic pathways

:::definizione{#vie-apoptotiche titolo="Intrinsic and extrinsic pathways"}
In the **intrinsic** pathway, stress and damage can activate BCL2-family proteins that promote mitochondrial outer membrane permeabilisation, or MOMP. BAX and BAK participate in permeabilisation; BCL2 and BCL-XL can oppose it. BH3-only proteins regulate the balance through interactions with pro- and anti-apoptotic family members.

Cytochrome c released into the cytosol promotes **apoptosome** assembly with APAF1 and appropriate nucleotides; this complex recruits and activates procaspase 9. Executioner activation and cellular dismantling follow.

In the **extrinsic** pathway, ligands of death receptors such as Fas promote assemblies containing adaptors and initiator procaspases, including caspase 8. In several contexts, BID cleavage links the extrinsic pathway to the mitochondrial pathway. The pathways converge on executioner caspases; the link through BID can amplify the death-receptor response, with outcomes modulated by inhibitors and cell state.

Cytochrome c location matters: in the intermembrane space it participates in electron transport; in the cytosol it can contribute to apoptosis. MOMP affects the mitochondrial **outer** membrane and must not be confused with normal ATP synthesis across the inner membrane. APAF1 and procaspase 9 must be available for cytochrome c release to lead to functional apoptosome assembly.

![Two apoptotic pathways and their convergence](/figure/biologia-semestre-filtro/ciclo-cellulare/apoptosi-en.svg)

In the Fas model, the adaptor FADD promotes assembly of the signalling complex that activates caspase 8. A cell may additionally require mitochondrial amplification through BID, so blocking BAX/BAK need not have the same effect in every cell type stimulated through a death receptor. Problems state whether this dependency is included in the model. A caspase inhibitor may reduce certain signs of apoptosis without proving that every damaged cell has recovered lasting survival.
:::
