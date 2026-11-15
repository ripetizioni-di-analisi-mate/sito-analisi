---
titolo: "Genome, chromatin and epigenetics"
sommario: "From chromosome counts to nucleosomes: genome organisation, accessibility, epigenetic memory and mobile sequences."
---

## Chromosomes, chromatids and DNA content

:::definizione{#cromosomi titolo="A chromosome before and after replication"}
A cell must preserve its DNA, make selected regions accessible and distribute a copy to its daughter cells. A **eukaryotic chromosome** is a unit of DNA organisation involving associated proteins. Before replication it contains one linear, double-stranded DNA molecule; after replication it contains two sister chromatids, each with its own DNA molecule. The two complementary strands of a double helix therefore belong to the same chromatid.

Maternal and paternal homologous chromosomes carry the same types of genes at corresponding loci, but may carry different alleles. Sister chromatids arise from replication of the same chromosome. A diploid organism has two sets of homologues. We use $n$ for the chromosome number in one set and $C$ for the nuclear DNA content of one unreplicated haploid set.

A normal human somatic cell in G1 contains 46 chromosomes, 46 DNA molecules and a DNA content of $2C$. After S phase and before sister separation it still contains 46 chromosomes, each duplicated, and 92 DNA molecules; its DNA content is $4C$. Ploidy remains $2n$, because replication copies the molecules without adding a new set of homologues. When sisters separate at anaphase, each becomes an independent chromosome. A count must therefore specify whether it refers to the whole cell or to one future daughter nucleus.

![An unreplicated chromosome and the same chromosome after duplication](/figure/biologia-semestre-filtro/genoma-cromatina/cromosoma-en.svg)
:::

:::esempio{titolo="Interpreting a DNA measurement"}
In a species with $2n=8$, a G1 cell has 8 chromosomes and 8 DNA molecules. After complete replication it has 8 chromosomes and 16 molecules. If a dye binds DNA in proportion to its amount, the signal ideally rises from 100 to 200 units. This doubling indicates increased DNA content; inferring a change in ploidy requires information about the chromosome sets. The same measurement may be consistent with different cellular states.
:::

## Centromeres and telomeres

:::definizione{#centromeri-telomeri titolo="Regions that allow chromosomes to be maintained"}
To be maintained through cell divisions, a linear chromosome must be replicated, segregated and protected at its ends. **Replication origins** are regions where DNA synthesis starts; eukaryotic chromosomes have many of them. The **centromere** is the region where the kinetochore assembles, the protein complex that interacts with spindle microtubules. A fragment lacking a functional centromere may replicate yet be distributed irregularly, because it lacks the normal attachment site for the spindle.

Alpha-satellite repeats are common in human centromeres. The histone variant CENP-A replaces H3 in some centromeric nucleosomes and contributes to the identity of the site. Repetitive sequence and centromere function must be distinguished: functional centromeric regions called neocentromeres can form at positions lacking the usual alpha-satellite block. Chromatin organisation therefore contributes to function alongside the DNA sequence.

**Telomeres** contain repeated sequences and proteins that protect chromosome ends. In humans the characteristic repeat is TTAGGG; the shelterin complex helps prevent a natural chromosome end from being treated as a break that should be joined to another end. Loss of protection can trigger damage responses and chromosome fusions even when telomeric sequence is still present.

Telomerase contains a protein component with reverse transcriptase activity and an RNA used as a template. It extends telomeric DNA, contributing to its maintenance in cells where it is active. Protection and elongation are related but distinguishable functions: shelterin protects the end, whereas telomerase adds sequence. The end-replication problem is developed in the chapter on the flow of genetic information.
:::

:::esempio{titolo="Two alterations with different consequences"}
A chromosome with protected telomeres but a defective kinetochore primarily has a segregation problem. A chromosome with a functioning kinetochore but unprotected telomeres may instead activate a damage response or fuse with another chromosome. The fact that both alterations destabilise the genome does not make the two structures interchangeable.
:::

## DNA associated with histones

:::definizione{#nucleosomi titolo="Nucleosome, octamer and linker DNA"}
Nuclear DNA associates with proteins to form **chromatin**. In a nucleosome, about 147 base pairs of DNA wrap around an octamer, a complex of eight histone proteins. There are two copies each of H2A, H2B, H3 and H4. DNA phosphate groups carry negative charges; many histone lysines and arginines carry positive charges, contributing to interactions that stabilise the association.

The DNA connecting two nucleosome core particles is called *linker DNA*. Histone H1 associates near the DNA entry and exit sites of the nucleosome and with the linker. H1 contributes to stabilisation and compaction, but does not belong to the octamer. Histone tails are protein regions that extend from the nucleosome and can undergo covalent modification.

The **nucleosome repeat length** includes the wrapped DNA and the average linker. If a model uses 147 wrapped base pairs and a 53-base-pair linker, one repeat contains $147+53=200$ base pairs. In 2,000 base pairs ideally organised into complete repeats, the estimated number of nucleosomes is $\dfrac{2000}{200}=10$. Assuming complete repeats avoids ambiguity at the ends of the segment. In real chromatin, linker length and nucleosome occupancy vary along the genome.

![Histone octamer, wrapped DNA and linker with H1](/figure/biologia-semestre-filtro/genoma-cromatina/nucleosoma-en.svg)
:::

:::esempio{titolo="Why nuclease digestion produces a ladder"}
A nuclease cuts accessible DNA between particles more readily. Partial digestion can therefore produce fragments corresponding to one, two or three nucleosome repeats. If the bands are approximately 200, 400 and 600 base pairs, the average spacing is about 200. More extensive digestion may leave the protected core of about 147 base pairs. The two values therefore describe different measurements, both consistent with the same model.
:::

:::osservazione{titolo="An average retains local variability"}
An average repeat length of 200 bp does not mean that every linker in the sample measures 53 bp. Some particles may have shorter linkers and others longer ones; the average summarises the sample without describing every location. Regions temporarily lacking nucleosomes also contribute to the distribution of accessibility. Determining a particle's position near a promoter therefore requires a local measurement, whereas a fragment ladder mainly provides information about average periodic organisation. This distinction allows numerical models to be used without assigning absolute uniformity to real chromatin.
:::

## Three-dimensional organisation and accessibility

:::osservazione{#compattazione titolo="Loops and dynamic organisation"}
Wrapping around nucleosomes is an initial level of organisation. Chromatin also forms contacts and loops, bringing together regions that are far apart along the sequence. Interphase chromosomes occupy partially distinct nuclear territories and have organisations that vary over time. A short distance in space may therefore correspond to a much greater distance along the DNA.

**Cohesins** participate in sister-chromatid cohesion and in organising interphase chromatin contacts. **Condensins** contribute to the formation and organisation of mitotic chromosomes. These SMC-family complexes have partly different functions. Increased compaction in mitosis facilitates distribution of the replicated material and does not require the removal of DNA segments.

The regular 30-nm fibre belongs to classical models of nucleosome folding and can be observed under certain conditions. Studies of chromatin within cells also reveal irregular, heterogeneous structures. An obligatory succession of progressively thicker fibres therefore does not universally describe every genomic region. A compaction diagram is useful when it distinguishes a simplified model from observed structures.
:::

:::definizione{#eucromatina-eterocromatina titolo="Local chromatin states"}
**Euchromatin** is generally more accessible and less condensed; **heterochromatin** is more compact and often associated with reduced transcription. These properties describe trends. An accessible promoter still requires appropriate transcription factors and signals to produce RNA.

Constitutive heterochromatin affects stably compact regions, often rich in repeats, such as many pericentromeric regions. Facultative heterochromatin changes with cell type or development; much of the inactive X chromosome is an example. Some genes on the inactive X escape silencing, so its condensation does not imply that every gene is inactive.

![The same sequence with different nucleosome positions and promoter accessibility](/figure/biologia-semestre-filtro/genoma-cromatina/accessibilita-en.svg)
:::

:::definizione{#rimodellamento titolo="Moving a nucleosome using ATP"}
**ATP-dependent chromatin-remodelling complexes** use ATP hydrolysis to change interactions between DNA and histones. They can reposition nucleosomes, remove them or promote exchanges of histone components. The outcome depends on the site and the complex: a regulatory site may become more accessible or may become covered.

If a nucleosome occupies a site recognised by a factor, repositioning may allow that factor to bind. To attribute the effect to remodelling, one might compare an active protein with a variant lacking ATPase activity. A change in position with an unchanged DNA sequence demonstrates chromatin reorganisation. The sequence alone therefore does not describe every condition determining access.
:::

## Modifications and epigenetic memory

:::definizione{#epigenetica titolo="Regulatory states without a sequence change"}
**Epigenetics** studies regulatory states of the genome that can be maintained through cell divisions without depending on a change in DNA sequence. The presence of a chemical modification at a single time point does not by itself demonstrate heritable memory. Stability is investigated by following the state in descendant cells, distinguishing maintenance from continuous external induction.

In humans, DNA methylation mainly affects cytosines in CpG dinucleotides. Methylation of many CpG-rich promoters is associated with repression, partly through proteins that recognise methylated cytosines. Its meaning depends on context: methylation in other regions, such as a gene body, is not automatically interpreted in the same way.

After replication, a site previously methylated on both strands initially has one methylated parental strand and one new, unmodified strand. Maintenance systems involving DNMT1 and associated proteins allow the pattern to be restored. This relationship between old and new strands explains how regulatory information can persist while the base sequence is copied.

![Maintenance methylation after replication: parental site, hemimethylation and restoration](/figure/biologia-semestre-filtro/genoma-cromatina/metilazione-en.svg)

Acetylation of histone lysines reduces their positive charge and creates sites recognised by proteins with specific domains. It is often associated with accessible chromatin. Acetyltransferases add acetyl groups and deacetylases remove them. A deacetylase inhibitor may increase acetylation without guaranteeing activation of every gene, because expression requires additional conditions.

Histone methylation can be associated with activation or repression depending on the residue and its methylation state. H3K4me3 denotes trimethylation of lysine 4 on histone H3 and is often present near active promoters. H3K9me3 is frequently associated with heterochromatin. These names specify a position: the word “methylation” alone identifies neither the substrate nor the effect.
:::

:::esempio{titolo="Separating association from causation"}
In two cultures with the same gene, culture A has an accessible promoter and abundant RNA; B has a methylated promoter and little RNA. The data support an association, but do not by themselves establish which event happened first. A targeted intervention that changes methylation, with controls for sequence changes and indirect effects, can strengthen a causal hypothesis. Measuring nascent RNA also helps distinguish transcription from differences in the stability of RNA already produced.
:::


:::esempio{titolo="Accessibility data and histone abundance"}
Two samples have histone-acetylation signals of 120 and 60 units. However, the second sample also contains half as many histones as the first. Before concluding that each nucleosome is less acetylated, the signal is related to substrate abundance. If both signals halve, the ratio may remain constant. A global measurement therefore combines particle abundance and modification frequency. Normalisation requires an appropriate reference and comparable measurement conditions.

Similar reasoning applies to accessibility. Greater nuclease sensitivity may reflect DNA exposure, but differences in enzyme-recognised sequence or sample abundance must be controlled. The experiment thus connects an observable measurement to a chromatin property through stated assumptions.
:::

## Genes, families and non-coding DNA

:::definizione{#sequenze-genoma titolo="Genome composition"}
The **genome** comprises the genetic DNA; in humans, nuclear and mitochondrial genomes are distinguished. Within the nuclear genome, protein-coding sequences coexist with introns, regulatory regions, genes for non-coding RNAs and several classes of repeats. The fraction directly encoding protein sequences is small compared with the total. “Not protein-coding” does not imply “without function”: a promoter or an rRNA gene provides a specific counterexample.

A **single-copy sequence** occupies one locus per reference haploid set, unlike repeated sequences. A diploid cell can therefore contain two allelic copies on homologous chromosomes: “single” does not mean one molecule in the whole cell and does not necessarily imply protein coding.

A **gene family** contains evolutionarily related genes, often produced by duplication followed by divergence. Copies may retain similar activities or acquire different expression patterns and functions. Globin genes show different regulation during development. Genes related through duplication are called **paralogues**. Two genes in the same family occupy distinct loci; two alleles are variants of the same locus.

Genes for the major rRNAs occur in repeated units that support high ribosomal RNA production. A pseudogene derives from a gene-like sequence but has lost the ability to produce the original functional product; some pseudogenes may nevertheless be transcribed or have regulatory roles. Evolutionary classification and current function therefore require distinct criteria.
:::

:::esempio{titolo="Duplication followed by divergence"}
A duplication produces two initially similar loci. If one copy retains the original expression profile while the other accumulates regulatory changes, their products may be present in different tissues. This outcome explains how functional diversity can increase without requiring every new gene to emerge from an entirely unrelated sequence. Similarity suggests relatedness, to be tested by sequence comparisons and evolutionary reconstruction.
:::

## Repeats and mobile elements

:::definizione{#ripetizioni titolo="Tandem arrays and dispersed copies"}
In **tandem repeats**, units are adjacent. The sequence CACACACA contains four consecutive CA units. Microsatellites and minisatellites differ mainly in repeat-unit length, with thresholds that may vary between classifications. The number of units can differ between alleles; fragments of different lengths may therefore be measured in one individual's genotype.

**Interspersed repeats** occur at distant loci. Many derive from mobile elements, including LINEs, SINEs and endogenous retroviruses. “Tandem” describes the relative positions of copies; “mobile” describes the capacity for, or origin from, an insertion mechanism. A repeated sequence is therefore not necessarily able to move today.

![Adjacent repeats and copies separated by unrelated DNA](/figure/biologia-semestre-filtro/genoma-cromatina/ripetizioni-en.svg)
:::

:::definizione{#elementi-mobili titolo="DNA intermediates and RNA intermediates"}
**Transposable elements** can generate new insertions. DNA transposons use a DNA intermediate; some families operate through excision and insertion. Retrotransposons are instead transcribed into RNA, which is reverse-transcribed into DNA. A new copy can insert while the original sequence remains at its original site. Copy number can therefore increase.

An element is autonomous if it encodes the activities required for its own mobilisation in an appropriate cellular context. Some full-length LINE-1 copies are autonomous; many genomic copies are instead truncated or inactive. SINEs, such as Alu, do not encode a complete apparatus and can use proteins produced by other elements, particularly LINE-1. A non-autonomous element can therefore be mobile when supplied with the missing activities.

Endogenous retroviruses derive from germline integrations transmitted to descendants; many copies have lost the capacity to produce infectious particles. An insertion into an exon may disrupt a coding sequence, whereas a regulatory insertion may alter expression. The effect depends on the site, orientation and context; the presence of a new insertion does not automatically establish disease.

![Retrotransposition with the original DNA copy retained and a new insertion](/figure/biologia-semestre-filtro/genoma-cromatina/retrotrasposizione-en.svg)
:::

:::esempio{titolo="Element expression and a new insertion"}
An increase in LINE-1 RNA indicates that more transcripts are present in the sample, but does not demonstrate completed retrotransposition. The pathway also requires functional protein production, formation of a DNA copy and insertion. To document a new insertion, one searches for junctions between the element and sequences at the new locus that were absent from the initial sample. This measurement distinguishes increased expression alone from a stable change in genomic sequence.

If the event affects a somatic cell, its descendants may form a clone differing from other cells in the organism. Transmission through gametes instead requires germline involvement. Mobility, mosaicism and inheritance between generations therefore describe related but separable aspects.
:::
