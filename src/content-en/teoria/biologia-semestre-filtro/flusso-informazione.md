---
titolo: "Replication, gene expression and proteins"
sommario: "How DNA is copied and used to produce RNA and proteins, with error control and regulation of gene expression."
---

## Copying DNA while preserving information

:::definizione{#replicazione titolo="Complementarity and semiconservative replication"}
Before division, a cell must provide each daughter cell with a copy of its genetic material. The two DNA strands contain complementary information: an adenine specifies a thymine on the opposite strand, and a guanine specifies a cytosine. Separating the strands therefore provides two templates. **Semiconservative replication** produces two double helices, each containing one parental strand and one new strand. The term describes the composition of the daughter molecules, whereas *bidirectional* describes the movement of the forks.

DNA polymerase adds a nucleotide to the 3′-OH group of the last sugar in the growing chain. The new strand therefore extends in the **5′ → 3′** direction, while the template is read in the 3′ → 5′ direction. A template, deoxyribonucleoside triphosphates and an end to extend are required. Incorporation releases pyrophosphate; its subsequent hydrolysis favours the reaction. The template sequence determines which nucleotide is incorporated through base pairing.

Replicative polymerase requires a primer. Primase can initiate a short RNA chain; in eukaryotes, the primase–DNA polymerase alpha complex also adds a short stretch of DNA. Once a 3′-OH end is available, replicative polymerases continue elongation. In the *Escherichia coli* model, the circular chromosome has one main origin of replication. The long nuclear chromosomes of eukaryotes use many origins, activated in a regulated manner during S phase. This allows different regions to be copied in parallel.

In eukaryotes, ORC and other proteins allow MCM helicases to be loaded at origins during preparation for replication. Subsequent activation in S phase initiates the forks. Separating loading from activation, and preventing fresh loading in the same cycle, helps ensure that a region is copied once per cell cycle. An origin is therefore a site of regulated initiation-complex assembly.
:::

:::esempio{titolo="Following the parental strands"}
A double helix contains two labelled strands. After one cycle in a medium without the label, both daughter molecules contain one labelled strand and one new strand. After a second cycle, four molecules are obtained: two each retain one of the initial strands, and two contain only strands synthesised in the new medium. The fraction of hybrid molecules is therefore $\dfrac{2}{4}=\dfrac{1}{2}$. Labelling follows the strands; the total number of double helices doubles with each complete cycle.

![Two rounds of semiconservative replication](/figure/biologia-semestre-filtro/flusso-informazione/semiconservativa-en.svg)
:::

:::definizione{#forcella titolo="The fork, Okazaki fragments and fidelity"}
**Helicase** opens the double helix, while single-stranded DNA-binding proteins limit reannealing of the exposed regions. Opening generates torsional stress in the DNA that remains wound. Topoisomerases relieve this stress through controlled transient breaks followed by resealing; some also help separate interlinked molecules. The sliding clamp keeps polymerase associated with the template and increases processivity, the number of nucleotides incorporated before dissociation.

The two templates are antiparallel, but all new chains grow 5′ → 3′. At a given fork, the **leading** strand can be synthesised in the direction in which the opening advances. The **lagging** strand is built as Okazaki fragments, each initiated near the fork and extended in the direction opposite to fork movement. Each fragment requires a new primer. Leading and lagging describe a strand's behaviour *relative to a particular fork*: at the opposite fork, the template that permits continuous synthesis changes.

![Strand directions at a replication fork](/figure/biologia-semestre-filtro/flusso-informazione/forcella-en.svg)

The primers are removed and replaced with DNA. DNA polymerase I contributes in bacteria; in eukaryotes, RNase H and FEN1 participate, among other enzymes. After gap filling, a discontinuity remains in the sugar-phosphate backbone. Ligase forms the missing phosphodiester bond between adjacent ends. A stretch with missing nucleotides must first be filled by a polymerase.

Many replicative polymerases possess 3′ → 5′ exonuclease **proofreading** activity. When an incorrect base is incorporated, the end can be transferred to the editing site, the nucleotide removed and synthesis resumed. The removal direction is opposite to the synthesis direction. Mismatch repair systems act subsequently and further increase fidelity. These controls reduce the probability of error without making it zero.
:::

## Completing chromosome ends

:::definizione{#telomerasi titolo="Telomeres, telomerase and proliferation"}
A linear chromosome presents a problem at its ends. Removal of the last primer on the lagging strand may leave no suitable 3′-OH end from which to fill the terminal region. Ordinary replicative polymerases can therefore leave a shorter copy. Telomeres include repeated sequences and proteins that protect the ends and distinguish their structure from an internal DNA break.

**Telomerase** contains a protein component with reverse transcriptase activity and an RNA that provides the template. It extends the 3′ end of the guanine-rich telomeric strand by adding DNA repeats. Conventional primase and polymerases can then synthesise the complementary strand. The enzyme thus addresses part of the problem by providing additional template; the mature telomeric end nevertheless retains a single-stranded overhang.

Telomerase activity is low in many human somatic cells. Critically short or unprotected telomeres can activate a damage response and contribute to **replicative senescence**. Senescence can also be induced by other forms of stress. Many tumour cells maintain their telomeres through telomerase; others use alternative recombination-based mechanisms. Telomerase activation alone does not describe all the alterations required for tumour transformation.
:::

## Organisation of a gene

:::definizione{#gene titolo="Functional products, exons and regulatory regions"}
A **gene** is a DNA region whose expression contributes to a functional product, either RNA or protein. A gene producing a tRNA, for example, reaches its functional endpoint at the RNA level. In protein-coding genes, transcription produces an RNA that can be processed and then translated. The promoter helps establish where transcription begins and in which orientation; other regulatory elements modify its efficiency.

A **cis-acting** element is a DNA sequence that regulates a physically linked region. A **trans-acting** factor is a diffusible molecule, often a protein, capable of recognising target elements. An operator mutation directly affects the DNA copy containing it; a functional repressor protein can instead reach several compatible copies. This distinction helps interpret experiments involving two copies of a regulatory system.

Many bacterial mRNAs are polycistronic: they contain several coding regions translated into distinct proteins. Nuclear eukaryotic mRNAs are generally monocistronic. A eukaryotic gene can contain **exons**, present in mature RNA, and introns, removed by splicing. The 5′ UTR and 3′ UTR are transcribed and retained in the mature messenger but lie respectively before the start codon and after the stop codon of the coding region. An exon can therefore contain untranslated sequences. Exon number alone does not determine protein length.
:::

## Transcription and control of initiation

:::definizione{#trascrizione-lac titolo="The template strand and the lac operon"}
During **transcription**, RNA polymerase synthesises RNA 5′ → 3′ using a DNA strand read 3′ → 5′. It can initiate without a primer. Across the same transcribed segment, the coding strand has the same sequence as the primary transcript, with T replaced by U, when both are written 5′ → 3′. The template strand is complementary. Different genes can use opposite strands of the same DNA molecule.

In bacteria, a sigma factor contributes to promoter recognition. Initiation is followed by elongation and termination. The absence of a nuclear envelope allows translation of some bacterial mRNAs to begin while transcription is still in progress.

In the **lac operon**, the genes needed to use lactose are regulated by two signals. In the absence of inducer, the LacI repressor binds the operator and hinders transcription. Allolactose, derived from lactose, binds LacI and lowers its affinity for the operator. When glucose is scarce, the cAMP signal increases and the CAP-cAMP complex favours RNA polymerase recruitment. In the classical model, expression is high when lactose is available and glucose is scarce; when both are present it is low, because removing repression does not provide the same positive activation.

![Two controls on the lac operon](/figure/biologia-semestre-filtro/flusso-informazione/lac-en.svg)

The operator is DNA, LacI is a protein, and allolactose is a small molecule. A mutation preventing LacI from binding the inducer can maintain repression even in the presence of lactose. An operator mutation preventing LacI binding instead removes that control only from the linked copy. These are different mechanisms, distinguished by considering which interaction is altered.
:::

:::definizione{#trascrizione-eucariotica titolo="Nuclear polymerases and transcription factors"}
In eukaryotes, the nuclear RNA polymerases perform different tasks. **Polymerase I** produces the precursor of the major rRNAs, excluding 5S. **Polymerase II** produces mRNA precursors and several non-coding RNAs. Polymerase III produces tRNAs and 5S rRNA, among other products. These differences help connect a selective perturbation to the RNA classes directly affected.

General transcription factors organise the polymerase II preinitiation complex. TBP recognises the TATA box in promoters that contain it; many promoters operate with a different organisation. Specific factors recognise proximal elements, enhancers or silencers and recruit cofactors. DNA folding can bring an enhancer close to its target promoter. Chromatin accessibility influences these encounters and connects transcription to the mechanisms described in the genome and chromatin chapter.

After preinitiation-complex assembly, local DNA opening and synthesis of the first nucleotides allow initiation. During elongation, modifications of the polymerase II CTD tail coordinate recruitment of RNA-processing factors. For many genes, RNA cleavage at the polyadenylation site precedes polymerase termination farther downstream; degradation of the residual transcript, including by XRN2, contributes to dissociation. The point at which mature messenger ends can therefore differ from where polymerase leaves DNA.

Steroid hormone receptors can regulate transcription in response to their ligand. However, a change in protein abundance can also result from mRNA stability, translation efficiency or protein degradation. Attributing an effect to transcription requires suitable measurements, such as nascent RNA production, beyond the amount of the final protein alone.
:::

## RNA processing and lifespan

:::definizione{#maturazione-rna titolo="The cap, splicing and polyadenylation"}
Eukaryotic pre-mRNA is modified as it is produced and after transcription. The **5′ cap** contains a modified guanosine joined by a 5′–5′ linkage; it contributes to end protection, processing and messenger recognition during translation initiation. At the 3′ end, a specific cleavage precedes addition of the poly-A tail by poly-A polymerase. The tail is therefore added enzymatically: its length does not result from transcription of a long T sequence in the template. Exceptions exist, such as several replication-dependent histone mRNAs, which undergo different 3′ processing.

**Splicing** joins exons while removing introns. The spliceosome contains snRNAs and proteins; recognition of the splice sites and branch point leads to two transesterification reactions. The intron is initially released as a looped structure, or lariat, while adjacent exons are joined. The snRNAs help organise the catalytic centre. This illustrates how RNA can have a catalytic function: a catalytic RNA is called a ribozyme.

![Exon skipping and isoform formation](/figure/biologia-semestre-filtro/flusso-informazione/splicing-en.svg)

In **alternative splicing**, the same transcription unit can produce mature RNAs with different combinations of exons or splice sites. The outcome depends on sequence signals and regulatory factors, which are often tissue-specific. If a coding exon is skipped, the reading frame is preserved only when the junction maintains the grouping into triplets. Editing instead modifies RNA nucleotides; it can change a codon without altering the corresponding DNA. Splicing and editing therefore act differently on the sequence of the mature product.
:::

:::definizione{#regolazione-rna titolo="Turnover, small RNAs and structural RNAs"}
mRNA abundance depends on both synthesis and removal. If synthesis stops and each equal time interval removes the same fraction of molecules, decay can be described by a **half-life**, the time required to halve the amount. With a half-life of 20 minutes, $\dfrac{1}{4}$ of the initial amount remains after 40 minutes. This conclusion requires no new synthesis and constant degradation conditions.

Deadenylation and decapping can facilitate exonuclease access. In silencing complexes, **miRNAs** guide recognition of target RNAs. In metazoans, many pairings are partial and promote translational repression and messenger destabilisation. Extensive complementarity can allow cleavage by a catalytically competent Argonaute. The presence of a miRNA therefore does not automatically imply immediate cleavage of every target.

In **RNA interference**, small RNAs can arise from processing double-stranded precursors, often by Dicer, and be loaded into Argonaute-containing complexes. A guide strand directs recognition. Extensively complementary siRNAs can promote target cleavage in systems with catalytically active Argonaute. UTR sites can also recruit proteins controlling messenger localisation, lifespan and translation: an untranslated sequence can therefore have a specific regulatory function.

rRNAs and tRNAs also require maturation. In the nucleolus, rRNA precursors are cleaved and modified and participate in ribosomal subunit assembly. tRNAs undergo end processing, base modifications and, in some cases, intron removal. The CCA sequence at the 3′ end accepts the amino acid; it can be encoded or added by an enzyme, depending on the system. The nucleolus produces and assembles ribosomal components, whereas translation of nuclear and cytosolic proteins takes place on cytoplasmic ribosomes.
:::

## From codon to amino acid

:::definizione{#codice-genetico titolo="The code, reading frame and tRNAs"}
The ribosome reads mRNA in groups of three nucleotides called **codons**. In the standard code, 61 triplets specify amino acids and three are stop signals. The code is degenerate because different codons can specify the same amino acid; in the standard context, a triplet nevertheless has a defined meaning. The code is nearly universal: some systems, including mitochondria, use variants. Exercises must therefore specify the code and, where relevant, the start of the reading frame.

A tRNA anticodon pairs with a codon in an antiparallel orientation. The codon 5′-AUG-3′ recognises the anticodon 3′-UAC-5′, which becomes 5′-CAU-3′ when written in the 5′ → 3′ direction. *Wobble* allows some less restrictive pairings at the third codon position, so a tRNA may recognise several synonymous codons. It does not permit arbitrary pairing at all three positions.

**Aminoacyl-tRNA synthetases** recognise the amino acid and the appropriate tRNAs, then attach the amino acid to the tRNA 3′ end while consuming ATP, converted to AMP and pyrophosphate. Many have editing mechanisms that eliminate incorrectly charged products. The ribosome mainly checks codon-anticodon pairing: if a tRNA is artificially charged with the wrong amino acid, it can incorporate that amino acid at the codon recognised by its anticodon. Accuracy therefore depends on both charging and messenger decoding.
:::

## Building the polypeptide chain

:::definizione{#traduzione titolo="Initiation, elongation and termination"}
Initiation brings together mRNA, ribosomal subunits, factors and initiator tRNA. In the cap-dependent eukaryotic model, the small subunit scans the messenger to an AUG in a favourable context. The initiator tRNA occupies the P site. In many bacterial mRNAs, a ribosome-binding sequence helps position the start codon. The two mechanisms therefore require different signals.

During elongation, an aminoacyl-tRNA enters the **A site**. The chain on the tRNA in the **P site** is transferred to the amino acid at the A site, forming a peptide bond. Translocation moves the ribosome by one codon: the tRNA carrying the chain moves from A to P, and the uncharged one proceeds towards the E site, from which it exits. Elongation factors and GTP participate in selection and translocation. The peptidyl-transferase centre of the large subunit consists mainly of rRNA.

![E, P and A sites during elongation](/figure/biologia-semestre-filtro/flusso-informazione/ribosoma-en.svg)

mRNA is read 5′ → 3′, and the protein grows from its amino N-terminus towards its carboxyl C-terminus. At the stop codon, a release factor promotes hydrolysis of the bond between the polypeptide and tRNA. The stop codon therefore occupies three nucleotides without adding an amino acid. A region containing 300 nucleotides from the first nucleotide of the start codon to the last nucleotide of the stop codon comprises 100 codons and produces 99 amino acids in the standard model without recoding. Several ribosomes can translate the same mRNA simultaneously, forming a polysome; each synthesises its own chain.
:::

## Maintaining functional proteins

:::definizione{#proteostasi titolo="Folding, modifications and degradation"}
The amino acid sequence permits interactions that favour folding, but the crowded cellular environment can promote inappropriate aggregation. **Chaperones** assist folding by limiting these interactions and allowing further attempts; many use ATP. Proteins may also undergo cleavage, phosphorylation, acetylation, glycosylation or other modifications regulating their activity and localisation. A protein produced in normal amounts can therefore have reduced activity because of defective maturation.

**Proteostasis** includes the balance between synthesis, folding, transport and degradation. In the ubiquitin-proteasome pathway, E1 activates ubiquitin, E2 carries it, and an E3 ligase contributes to substrate recognition and transfer. Some polyubiquitin chains, such as K48-linked chains, can promote recognition by the proteasome. The substrate is unfolded and degraded into peptides; ubiquitin is recovered. ATPase activity helps process the substrate.

![Protein fates and quality control](/figure/biologia-semestre-filtro/flusso-informazione/proteostasi-en.svg)

The meaning of ubiquitination depends on the signal's structure: other forms participate in trafficking, signalling and DNA repair. SUMOylation uses a ubiquitin-like protein and changes interactions or localisation without automatically being equivalent to proteasomal degradation. Large aggregates and organelles can be removed through autophagy and lysosomes, described in the cellular structures chapter. An increase in protein amount after proteasome inhibition indicates a change in its removal; concluding that transcription increased also requires measurement of RNA production.
:::
