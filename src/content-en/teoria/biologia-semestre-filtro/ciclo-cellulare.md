---
titolo: "Cell cycle, meiosis and cell death"
sommario: "Checkpoints, cyclins and CDKs, Rb and p53, mitosis, meiosis, stem cells and apoptotic pathways, explained through experiments and chromosome counts."
---

## Cell-cycle phases and checkpoints

:::definizione{#ciclo titolo="G1, S, G2 and M phase"}
The **cell cycle** is the series of events from the birth of a cell to its division into two daughter cells. It has four phases, always in the same order.

1. **G1**. The cell grows and, according to the signals it receives, determines whether to divide.
2. **S** (synthesis). The cell replicates its DNA (deoxyribonucleic acid).
3. **G2**. The cell checks that all the DNA has been copied and prepares for division.
4. **M**. The cell divides. This phase includes **mitosis**, that is, division of the nucleus, and **cytokinesis**, that is, division of the cytoplasm.

The first three phases together are called **interphase**. A cell that does not divide leaves the cycle and enters a state called **G0**. Some cells stay there permanently, such as neurons. Others re-enter the cycle when they receive a stimulus, such as liver cells after an injury.

The passage from one phase to the next is monitored by **checkpoints**. At each one the cell verifies a condition and, if it is not met, stops until the problem is solved. The three main ones are as follows.

- At the **G1/S** transition the cell verifies that the DNA is intact and that growth signals are present.
- At the **G2/M** transition it verifies that replication is complete and that the DNA is not damaged.
- During **mitosis** it verifies that all chromosomes are attached to the spindle.

If a checkpoint does not work, errors pass to the daughter cells and accumulate.

Growth, replication and division are three distinct processes. A cell increases in volume without replicating its DNA, or replicates its DNA without dividing. To know which phase a cell is in, the process of interest is therefore measured.

During the cycle the amount of DNA changes, while the number of chromosomes stays the same. The symbols used are $n$, the number of chromosomes in one set, and $C$, the amount of DNA in one unreplicated set. A human cell in G1 has 46 chromosomes, each with one DNA molecule, and is written $2n,2C$. After S phase it still has 46 chromosomes, each made of two sister chromatids, so 92 DNA molecules, and is written $2n,4C$. Replication doubles the DNA and leaves the cell diploid.

![Cell-cycle phases and DNA content](/figure/biologia-semestre-filtro/ciclo-cellulare/ciclo-en.svg)

**Reading an experiment.** The cells of a culture are stained with a fluorescent substance that binds DNA, and the fluorescence of each cell is measured. The cells fall into three groups. Those with fluorescence $2C$ are in G1 or G0. Those with fluorescence $4C$ are in G2 or in mitosis. Those with intermediate values are in S phase, because they have copied only part of their DNA. Measuring DNA does not distinguish G1 from G0, nor G2 from M. Other observations are needed for that, for example the presence of condensed chromosomes, which indicates mitosis.
:::

:::definizione{#cicline-cdk titolo="Activation of cell-cycle kinases"}
The cell cycle advances thanks to a family of enzymes, the **CDKs** (cyclin-dependent kinases). A kinase is an enzyme that adds a phosphate group to other proteins. A CDK alone is inactive. It becomes active when it binds a protein called a **cyclin**. CDKs are present in constant amount throughout the cycle. Cyclins, by contrast, are produced and then destroyed in each cycle, each at a precise phase, and take their name from this. Each phase therefore has its own active cyclin-CDK complex.

| Complex | When it acts |
|---|---|
| Cyclin D with CDK4 or CDK6 | progression through G1 |
| Cyclin E with CDK2 | transition from G1 to S |
| Cyclin A with CDK2 | S phase |
| Cyclin B with CDK1 | entry into mitosis |

The active complex phosphorylates the proteins that carry out the events of that phase. When the cyclin is degraded the CDK becomes inactive again and the phase ends.

Binding to the cyclin is necessary, but CDK activity is also regulated in two other ways.

- **Phosphorylation of the CDK itself.** The kinase Wee1 adds to CDK1 a phosphate that inhibits it. The phosphatase Cdc25 removes it, and only then is the cyclin B-CDK1 complex activated and the cell enters mitosis.
- **Inhibitors.** Proteins such as **p21** bind the cyclin-CDK complex and block it.

The amount of cyclin and the activity of the CDK are therefore two different things. Two cells with the same amount of cyclin B, for example, differ in CDK1 activity if in one of them CDK1 still carries the inhibitory phosphate. The first enters mitosis and the second stays in G2.
:::

## The restriction point and DNA damage

:::definizione{#rb-e2f titolo="Growth factors and entry into S phase"}
An animal cell divides only if it receives from outside signals called **growth factors** (or mitogens). Their effect passes through two proteins, Rb and E2F.

- **E2F** is a transcription factor. It activates the genes needed for S phase, for example those of the replication enzymes.
- **Rb** (retinoblastoma protein) binds E2F and keeps it inactive. It is therefore a brake on entry into S phase.

The brake is released by the following sequence.

1. Growth factors raise cyclin D.
2. Cyclin D activates CDK4 and CDK6, which phosphorylate Rb.
3. Phosphorylated Rb detaches from E2F.
4. Free E2F activates the S-phase genes, and the cell begins to replicate its DNA.

Phosphorylation in this case inactivates a protein, Rb. The cell advances through the cycle because a brake is released.

The **restriction point** is the moment in G1 after which the cell completes the cycle even if growth factors are withdrawn. Before that point, if growth factors are missing, the cell stops and enters G0. The restriction point concerns external signals. The control of DNA damage is a separate system and stays active afterwards too.

![Mitogenic signals and the Rb brake](/figure/biologia-semestre-filtro/ciclo-cellulare/rb-en.svg)

**Worked example.** Growth factors are withdrawn from two groups of cells in G1. The first group is at the start of G1 and has not yet passed the restriction point. Rb has not yet been phosphorylated, so E2F stays blocked and the cells stop. The second group is at the end of G1 and has already passed the restriction point. Rb is already phosphorylated and E2F is free, so the cells enter S phase and complete the cycle. Growth factors are therefore needed up to the restriction point and not beyond. If the DNA of these cells is damaged, the cycle stops anyway, through the control described in the next box.
:::

:::definizione{#p53-tumori titolo="Arrest, repair and transformation"}
When DNA is damaged the cell stops the cycle, so as not to copy and pass on the error. The central protein of this response is **p53**, a transcription factor. In a healthy cell p53 is continuously degraded and its amount is low. The response to damage has four steps.

1. The damage blocks the degradation of p53, which accumulates.
2. p53 activates the gene for **p21**.
3. p21 binds the cyclin-CDK complexes and blocks them, so the cycle stops.
4. During the arrest the repair enzymes repair the DNA.

p53 does not repair DNA: it activates the genes that stop the cycle. Depending on the severity of the damage there are three outcomes. If the damage is repaired, the cell resumes the cycle. If the damage persists, the cell permanently stops dividing (senescence). If the damage is very severe, p53 activates the genes of **apoptosis** and the cell dies.

A tumour arises when cells divide without control. The genes involved fall into two classes.

- An **oncogene** derives from a normal gene, called a proto-oncogene, that stimulates division. The mutation makes the protein too active (gain of function). Mutation of only one of the two copies of the gene is enough. An example is Ras.
- A **tumour suppressor** is a gene that restrains division or makes damaged cells die. It contributes to the tumour when it stops working (loss of function). In general both copies must be inactivated, because a single working copy is enough to restrain division. Examples are *RB1*, the gene for Rb, and *TP53*, the gene for p53.

The *TP53* gene is mutated in about half of human tumours. Some viruses cause tumours by inactivating these same proteins. High-risk papillomavirus (HPV), responsible for cervical cancer, produces two proteins: E6 causes p53 to be degraded and E7 blocks Rb.

A single mutation is not enough to form a tumour. A tumour develops when several alterations accumulate in the same cell and its descendants, usually in oncogenes and tumour suppressors together.
:::

## Mitotic entry and the spindle

:::definizione{#mitosi-fuso titolo="Condensation and chromosome attachment"}
**Mitosis** is the division of the nucleus. It distributes the replicated chromosomes so that each daughter cell receives one copy of every chromosome. At the start of mitosis each chromosome consists of two sister chromatids. Two protein complexes prepare them.

- **Cohesins** hold the two sister chromatids together.
- **Condensins** compact each chromosome, which becomes short, thick and visible under the microscope.

The chromosomes are moved by the **mitotic spindle**, a structure of microtubules originating from the two poles of the cell. At each pole there is a centrosome. Spindle microtubules are of three types.

- **Kinetochore** microtubules attach to the chromosomes.
- **Interpolar** microtubules start from the two poles and overlap at the centre of the cell. They push the poles apart.
- **Astral** microtubules run from the poles towards the membrane and keep the spindle in the correct position.

Microtubules attach to the chromosome at the **kinetochore**, a protein complex assembled on the centromere. Each chromatid has its own kinetochore, so a replicated chromosome has two, facing in opposite directions. The centromere is the DNA region, the kinetochore is the protein structure built on it. One kinetochore protein, NDC80, forms the direct link with the microtubule.

Mitosis is divided into five phases.

1. **Prophase**. The chromosomes condense and the spindle begins to form.
2. **Prometaphase**. The nuclear envelope breaks down, because the lamins supporting it are phosphorylated. Microtubules reach the chromosomes and attach to the kinetochores.
3. **Metaphase**. All chromosomes are aligned at the centre of the cell, on the metaphase plate. The two kinetochores of each chromosome are attached to opposite poles.
4. **Anaphase**. The sister chromatids separate and move towards the two poles.
5. **Telophase**. A nuclear envelope re-forms around each group of chromosomes and the chromosomes decondense.

![Mitotic spindle and three microtubule classes](/figure/biologia-semestre-filtro/ciclo-cellulare/fuso-en.svg)

Correct separation requires the two kinetochores of each chromosome to be attached to opposite poles. This arrangement is called **biorientation**. The **spindle checkpoint** verifies it. As long as even a single kinetochore has no microtubules, that kinetochore produces a signal that blocks the start of anaphase. When all kinetochores are attached the signal stops and anaphase begins.

A chromosome lying at the centre of the cell is not necessarily attached correctly. It may have, for example, both kinetochores attached to the same pole. The cell corrects many of these attachments, but not all. A wrong attachment that escapes the control sends two chromatids to the same daughter cell, and the two daughter cells have one chromosome too many and one too few.
:::

## Anaphase and cytokinesis

:::definizione{#apc-citodieresi titolo="APC/C, separase and the contractile ring"}
At the start of anaphase the sister chromatids, held together by cohesins, all separate at the same moment. The command comes from a protein complex called **APC/C** (anaphase-promoting complex). APC/C is a ubiquitin ligase, that is, an enzyme that attaches ubiquitin to other proteins and thereby sends them for degradation in the proteasome. When the spindle checkpoint is satisfied, APC/C becomes active and separation takes place in four steps.

1. APC/C attaches ubiquitin to **securin**.
2. The proteasome degrades securin. Securin was bound to an enzyme, **separase**, and kept it inactive.
3. Separase, now free, cuts the cohesins.
4. The sister chromatids are no longer joined and the microtubules pull them towards opposite poles.

In this sequence each protein has a single task. APC/C tags, the proteasome degrades and separase cuts. APC/C does not cut cohesins and does not act on DNA.

APC/C has a second target, **cyclin B**. Once cyclin B is degraded, CDK1 becomes inactive again and the cell exits mitosis. The chromosomes decondense and the nuclear envelope re-forms.

**Cytokinesis** is the division of the cytoplasm and begins at the end of anaphase. In animal cells a **contractile ring** of actin and myosin forms beneath the membrane at the middle of the cell. The ring tightens and forms an ever deeper furrow, until the cell divides in two. Mitosis and cytokinesis are distinct processes and are usually coordinated.

![The APC/C, securin, separase and cohesin sequence](/figure/biologia-semestre-filtro/ciclo-cellulare/apc-en.svg)

**Blocking experiment.** Two experiments show that chromosome separation and division of the cytoplasm are independent. In the first a modified securin is used, which the proteasome cannot degrade. Separase stays blocked and cohesins are not cut. The spindle forms and the chromosomes align, but the sister chromatids do not separate. In the second the contractile ring is blocked with a drug that acts on actin. The chromosomes separate normally and two nuclei form, but the cytoplasm does not divide. The result is a single cell with two nuclei.

In counting, anaphase requires care. As soon as the sister chromatids separate, each counts as a chromosome. A human cell in anaphase therefore contains 92 chromosomes, 46 heading to each pole, until cytokinesis divides it.
:::

## Meiosis and variation

:::definizione{#meiosi titolo="One replication and two divisions"}
**Meiosis** is the division that produces gametes. It starts from a diploid cell and gives four haploid cells, each with a single chromosome of every pair. At fertilisation two haploid gametes join and the diploid number is restored. Meiosis comprises a single DNA replication followed by two divisions.

- In **meiosis I** the homologous chromosomes separate. Each daughter cell receives one chromosome of every pair, still made of two sister chromatids. The number of chromosomes is halved, and for this reason the division is called reductional.
- In **meiosis II** the sister chromatids separate, as in a mitosis. The number of chromosomes stays the same, and the division is called equational. Between the two divisions the DNA is not replicated.

The count of chromosomes and DNA, for a human cell, is as follows.

| Moment | Chromosomes and DNA | In humans |
|---|---|---|
| Before replication | $2n,2C$ | 46 chromosomes, 46 molecules |
| After replication | $2n,4C$ | 46 chromosomes, 92 molecules |
| After meiosis I, in each cell | $n,2C$ | 23 chromosomes, 46 molecules |
| After meiosis II, in each cell | $n,1C$ | 23 chromosomes, 23 molecules |

The longest part of meiosis is **prophase I**, in which two events take place that do not exist in mitosis.

- **Pairing**. The two homologues of each pair line up along their whole length, held together by a protein structure called the **synaptonemal complex**. The pair of paired homologues is called a **bivalent** or tetrad. It contains two chromosomes and therefore four chromatids.
- **Crossing over**. One chromatid of one homologue and one chromatid of the other break at the same point and exchange the corresponding stretches. The exchange points remain visible as crossings between the two homologues, called **chiasmata**. Chiasmata hold the homologues together until anaphase I, and this allows them to be separated correctly.

Prophase I is subdivided into five stages, which in order are leptotene, zygotene, pachytene, diplotene and diakinesis. Pairing is completed in zygotene, crossing over occurs in pachytene and chiasmata become visible in diplotene.

![Chromosome sets and DNA content during meiosis](/figure/biologia-semestre-filtro/ciclo-cellulare/meiosi-en.svg)

The two divisions differ in the way chromosomes attach to the spindle. In meiosis I the two sister kinetochores of a chromosome attach to the same pole, and the two homologues of a bivalent attach to opposite poles. At anaphase I separase cuts the cohesins along the chromosome arms, so the homologues separate. The cohesins at the centromere are protected by a protein called **shugoshin**, and the sister chromatids stay joined. In meiosis II the protection is removed. The sister kinetochores attach to opposite poles, separase cuts the centromeric cohesins and the chromatids separate.

Meiosis produces gametes that are all different from one another for two reasons.

- **Independent assortment**. At metaphase I each bivalent orients at random, and the orientation of one pair does not depend on that of the others. Each gamete therefore receives a random combination of chromosomes of maternal and paternal origin. With $n$ pairs the possible combinations number $2^n$. With 3 pairs there are $2^3=8$, and in humans, with 23 pairs, there are $2^{23}$, that is, more than 8 million.
- **Crossing over**. Each chromosome that reaches the gamete is a mosaic of maternal and paternal stretches.

The number $2^n$ counts the combinations possible over many meioses. A single meiosis produces four cells. In a species with $2n=6$, for example, after meiosis I each cell has 3 chromosomes made of two chromatids, and after meiosis II each cell has 3 chromosomes made of a single chromatid.

If two chromosomes fail to separate in one of the two divisions (nondisjunction), gametes with one chromosome too many or too few are formed. An error in meiosis I gives four abnormal gametes. An error in only one of the two cells in meiosis II gives two normal gametes and two abnormal ones.
:::

## Gametogenesis and stem cells

:::definizione{#gametogenesi titolo="Human spermatogenesis and oogenesis"}
**Gametogenesis** is the formation of gametes. In the two sexes it uses the same meiosis, with different timing and results.

**Spermatogenesis** takes place in the testes, continuously from puberty onwards. There are four stages.

1. **Spermatogonia** are diploid cells that divide by mitosis and maintain the reserve.
2. A spermatogonium becomes a **primary spermatocyte** and enters meiosis I.
3. Meiosis I gives two **secondary spermatocytes**, haploid, with chromosomes still made of two chromatids.
4. Meiosis II gives four **spermatids**, haploid.

The spermatids then turn into spermatozoa through a maturation process called spermiogenesis, in which the cell changes shape and does not divide. One primary spermatocyte therefore yields four spermatozoa.

**Oogenesis** takes place in the ovaries and differs in two respects.

- The divisions are **asymmetric**. At each division almost all the cytoplasm stays in one cell, and the other is a very small cell, called a **polar body**, which degenerates. One primary oocyte therefore yields a single egg cell.
- Meiosis **stops twice**. Primary oocytes begin meiosis in the fetus, before birth, and stop in prophase I. They stay like this for years. From puberty, in each cycle, one oocyte completes meiosis I and becomes a **secondary oocyte**, which stops again in metaphase II. The cell released at ovulation is this secondary oocyte. Meiosis II is completed only if fertilisation occurs.

The secondary oocyte is haploid ($n$) and its chromosomes still have two chromatids, so its DNA is $2C$ and not $1C$. A haploid cell does not necessarily have the minimum amount of DNA.

An oocyte stays arrested in prophase I for up to forty years, with the homologues held together by cohesins. As time passes the cohesins deteriorate and separation errors become more frequent. This is one of the reasons why the risk of trisomies, such as Down syndrome, increases with the mother's age.
:::

:::definizione{#staminali titolo="Self-renewal and differentiation potential"}
A **stem cell** is an unspecialised cell that has two capacities together.

- **Self-renewal**. By dividing it produces more stem cells, so the reserve is not exhausted.
- **Differentiation**. It produces cells that specialise into one or more cell types.

The stem cells of the bone marrow, for example, produce billions of blood cells every day and remain present throughout life.

The **potency** of a stem cell is the number of cell types it is able to produce.

- A **totipotent** cell produces all the cell types of the organism and also the extra-embryonic tissues, such as the placenta. The zygote is totipotent.
- A **pluripotent** cell produces all the cell types of the organism. Embryonic stem cells are pluripotent.
- A **multipotent** cell produces only the cell types of one tissue. Bone marrow stem cells produce blood cells.

A **progenitor cell** is a descendant of the stem cell. It divides rapidly, but only a limited number of times, then all its descendants differentiate. It therefore has no lasting self-renewal.

A stem cell divides in two ways. In an **asymmetric** division it produces one stem cell and one cell that differentiates. In a **symmetric** division it produces two stem cells or two cells that differentiate. The reserve stays constant if, over the whole population, the two types of symmetric division balance out. To show that a cell is a stem cell its descendants are followed over time, and it is verified that stem cells remain among them and differentiated cells appear.

![Symmetric and asymmetric divisions](/figure/biologia-semestre-filtro/ciclo-cellulare/staminali-en.svg)

Stem cells live in a particular environment of the tissue, called the **niche**. The neighbouring cells and the matrix of the niche supply the signals that keep the cell in the stem state. After a division, the daughter cell that stays in the niche remains a stem cell and the one that leaves it differentiates, even though the two cells have the same DNA.

Potency and rate of division are distinct properties. Many stem cells divide rarely and spend long periods at rest. Progenitor cells divide rapidly.
:::

## Apoptosis and necrosis

:::definizione{#apoptosi-necrosi titolo="Morphology and caspases"}
A cell dies in two main ways, with different consequences for the tissue.

**Apoptosis** is a programmed death, which the cell itself carries out in an orderly way. The cell shrinks, the chromatin condenses, the DNA is cut into fragments and the cell divides into small membrane-bound vesicles, the **apoptotic bodies**. The membrane stays intact throughout the process, so the content of the cell is not dispersed. Macrophages engulf the apoptotic bodies and there is no inflammation. Apoptosis removes cells that are no longer needed or are damaged. In the embryo, for example, it removes the cells between the fingers of the hand.

**Necrosis** is an accidental death, caused by severe damage such as lack of oxygen. The cell swells, the membrane ruptures and the content spills into the tissue, where it causes **inflammation**.

Apoptosis is carried out by enzymes called **caspases**. They are proteases, that is, enzymes that cut other proteins. In the healthy cell they are present in an inactive form, called procaspases, and are activated in a cascade.

- **Initiator** caspases (caspase 8 and caspase 9) are activated first, by the death signal.
- **Executioner** caspases (caspase 3 and caspase 7) are activated by the initiators. They cut hundreds of the cell's proteins, including those of the cytoskeleton and the nuclear lamins.

Caspases cut proteins and not DNA. The DNA is fragmented by a nuclease, which the caspases activate.

In the laboratory a cell in apoptosis is recognised by a change in the membrane. Phosphatidylserine, a phospholipid that normally lies on the inner leaflet of the membrane, moves to the outer leaflet. It is also the signal that macrophages recognise. Two stains are used together.

- **Annexin V** binds phosphatidylserine exposed on the outside.
- **Propidium iodide** enters only cells with a ruptured membrane.

A cell positive for annexin V and negative for propidium iodide is in the early phase of apoptosis, because it exposes phosphatidylserine and its membrane is still intact. A cell positive for both has a ruptured membrane. It is in late apoptosis or in necrosis, and the two stains alone do not distinguish the two cases.
:::

## Apoptotic pathways

:::definizione{#vie-apoptotiche titolo="Intrinsic and extrinsic pathways"}
Apoptosis is started by two pathways, according to the origin of the signal.

The **intrinsic** (mitochondrial) pathway starts from inside the cell, in response to DNA damage or another stress. It is controlled by the proteins of the **BCL2 family**, which fall into three groups.

- The **pro-apoptotic** proteins BAX and BAK form pores in the outer membrane of the mitochondrion.
- The **anti-apoptotic** proteins BCL2 and BCL-XL bind BAX and BAK and keep them inactive.
- **BH3-only** proteins are the damage sensors. When activated they block the anti-apoptotic proteins and release BAX and BAK.

The pathway continues in four steps.

1. BAX and BAK form pores in the outer membrane of the mitochondrion. This event is denoted by the abbreviation **MOMP** (mitochondrial outer membrane permeabilisation).
2. Through the pores **cytochrome c**, a protein that normally lies in the intermembrane space and takes part in the respiratory chain, leaves for the cytosol.
3. In the cytosol cytochrome c binds the protein APAF1. Several copies of this complex join into a wheel-shaped structure, the **apoptosome**.
4. The apoptosome activates caspase 9, which activates the executioner caspases.

Cytochrome c therefore has two functions, according to where it is: in the mitochondrion it serves respiration, in the cytosol it starts apoptosis. The pores concern the outer membrane of the mitochondrion. The inner membrane, where ATP (adenosine triphosphate, the molecule that supplies energy to cellular reactions) is produced, is not perforated.

The **extrinsic** pathway starts from outside the cell. Another cell, for example a lymphocyte, displays a death signal that binds a **death receptor** on the target cell. The best-known pair consists of the Fas receptor and its ligand.

![Two apoptotic pathways and their convergence](/figure/biologia-semestre-filtro/ciclo-cellulare/apoptosi-en.svg)

The extrinsic pathway has three steps.

1. The ligand binds the Fas receptor.
2. The inner part of the receptor recruits an adaptor protein, FADD, which in turn recruits procaspase 8.
3. Caspase 8 is activated and activates the executioner caspases.

The two pathways therefore reach the same executioner caspases, 3 and 7. They are also connected to each other. Caspase 8 cuts a BH3-only protein called **BID**, and cut BID activates BAX and BAK. In this way a signal arriving from outside also starts the mitochondrial pathway, which reinforces it. In some cell types this reinforcement is indispensable for the cell to die, in others caspase 8 alone is sufficient.

A drug that inhibits caspases blocks the signs of apoptosis. The treated cell is not necessarily saved, however, because the damage that had started the process is still present.
:::
