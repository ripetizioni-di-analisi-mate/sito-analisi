---
titolo: "Replication, gene expression and proteins"
sommario: "How DNA is copied and used to produce RNA and proteins, with error control and regulation of gene expression."
---

## Copying DNA while preserving information

:::definizione{#replicazione titolo="Complementarity and semiconservative replication"}
**Replication** is the copying of DNA. It takes place before every cell division, so that each of the two daughter cells receives a complete genome. It is based on the complementarity of the bases. Opposite an A there is always a T and opposite a G there is always a C, so the sequence of one strand determines that of the other. The two strands of the double helix separate, and each acts as a **template** for building a new strand. Two double helices are obtained, each made of one old strand and one new strand. For this reason replication is called **semiconservative**: half of each daughter molecule is conserved.

The enzyme that builds the new strand is **DNA polymerase**. Its operation follows three rules.

- It adds one nucleotide at a time, choosing the one complementary to the template base.
- It attaches each nucleotide to the 3′ end of the growing chain. The new strand therefore always grows in the **5′ → 3′** direction, while the template is read in the 3′ → 5′ direction.
- It only extends a chain that has already been started. It cannot join the first two nucleotides.

Nucleotides enter the reaction with three phosphate groups (dATP, dGTP, dCTP, dTTP). When a nucleotide joins the chain it loses two phosphates, and this reaction supplies the energy to form the bond.

Since DNA polymerase cannot start a chain, a **primer** is needed. This is a short stretch of RNA complementary to the template, built by an enzyme called **primase**. The polymerase starts from the 3′ end of the primer and continues with DNA.

Replication begins at precise points on the DNA, the **origins of replication**. At each origin the double helix opens and two **replication forks** form, which advance in opposite directions. For this reason replication is called bidirectional. The circular chromosome of the bacterium *Escherichia coli* has a single origin. Eukaryotic chromosomes are much longer and have thousands, so many regions are copied at the same time.

In eukaryotic cells each stretch of DNA is copied only once per cycle. The control is based on two separate moments. Before S phase a protein complex, **ORC**, recognises the origins and loads onto them the **MCM** helicases, the enzymes that will open the double helix. The helicases stay inactive. In S phase they are activated and replication starts. During S phase new helicases cannot be loaded, so an origin that has already fired does not start again.
:::

:::esempio{titolo="Following the parental strands"}
A double helix has both strands labelled, for example with a heavy isotope of nitrogen. The cell is transferred to a medium without label, so all strands built from that moment are unlabelled. After the first replication there are 2 molecules, and each has one labelled strand and one new strand. After the second replication there are 4 molecules. The labelled strands are still the two initial ones, so 2 molecules contain one each and the other 2 consist only of new strands. The fraction of molecules with a labelled strand is $\dfrac{2}{4}=\dfrac{1}{2}$. At each replication the number of molecules doubles, while the labelled strands remain two. After the third replication the fraction is therefore $\dfrac{2}{8}=\dfrac{1}{4}$.

![Two rounds of semiconservative replication](/figure/biologia-semestre-filtro/flusso-informazione/semiconservativa-en.svg)
:::

:::definizione{#forcella titolo="The fork, Okazaki fragments and fidelity"}
The **replication fork** is the point where the double helix opens and the two strands are copied. Several proteins work together there.

- **Helicase** separates the two strands, breaking the hydrogen bonds between the bases.
- **SSB proteins** bind the single strands and prevent them from pairing again.
- **Topoisomerase** acts ahead of the fork. Opening the helix overwinds the DNA further ahead. Topoisomerase cuts the DNA, lets it rotate and reseals it, removing the tension.
- The **sliding clamp** is a ring that encircles the DNA and holds the polymerase on the template, so that the polymerase adds thousands of nucleotides without detaching.

The two template strands are antiparallel and the polymerase works only in the 5′ → 3′ direction. At the fork the two new strands are therefore built in different ways.

- The **leading** strand grows in the same direction in which the fork advances. It is built continuously, from a single primer.
- The **lagging** strand would have to grow in the direction opposite to fork movement. It is built in pieces, called **Okazaki fragments**. Each time the fork opens a new stretch of template, primase builds a primer and the polymerase synthesises a fragment moving away from the fork, until it reaches the previous fragment.

Which of the two strands is leading and which is lagging depends on the fork. At the other fork of the same origin, which advances in the opposite direction, the roles of the two templates are swapped.

![Strand directions at a replication fork](/figure/biologia-semestre-filtro/flusso-informazione/forcella-en.svg)

At the end the lagging strand consists of separate DNA fragments, each with an RNA primer at its start. Three operations turn them into a continuous strand.

1. The RNA primers are removed. In bacteria this is done by DNA polymerase I, in eukaryotes by the enzymes RNase H and FEN1.
2. A DNA polymerase fills the space left by the primer with DNA.
3. **DNA ligase** forms the last phosphodiester bond between one fragment and the next.

Ligase joins only two adjacent nucleotides. If nucleotides are missing between two fragments, a polymerase must act first.

Replication is very accurate, with about one error per billion nucleotides copied. Two successive controls produce this accuracy.

- **Proofreading** is carried out by the polymerase itself. When the polymerase adds a wrong nucleotide, its 3′ → 5′ exonuclease activity removes it from the end just built, and synthesis resumes. This activity proceeds backwards, that is, in the direction opposite to synthesis.
- **Mismatch repair** acts after the fork has passed. It recognises wrong base pairs that escaped the first control and replaces the stretch of new strand containing them.
:::

## Completing chromosome ends

:::definizione{#telomerasi titolo="Telomeres, telomerase and proliferation"}
In a linear chromosome the ends are not copied completely. The reason lies in the lagging strand. When the last primer, the one closest to the end, is removed, a gap is left. No polymerase fills it, because beyond that gap there is no 3′ end to extend. At each replication the chromosome therefore loses a short stretch at each end. This fact is called the **end-replication problem**.

The ends of chromosomes, the **telomeres**, are made of a short sequence repeated thousands of times, which in humans is TTAGGG, and contain no genes. At each division part of these repeats is lost and the genes remain intact.

**Telomerase** is the enzyme that lengthens telomeres again. It contains a small RNA with the sequence complementary to the repeat, and uses it as a template to add new repeats to the 3′ end of the chromosome. Because it synthesises DNA from an RNA template, it is a reverse transcriptase. Once this strand has been lengthened, primase and DNA polymerase build the complementary strand. A short single-stranded stretch nevertheless remains at the end.

Telomerase is active in germ cells and stem cells. In most cells of the body it is almost absent, so telomeres shorten with each division. When they become too short the cell treats them as damaged DNA and permanently stops dividing. This state is called **replicative senescence** and limits the number of divisions of a normal cell. About 90% of tumours reactivate telomerase, and in this way tumour cells divide without limit. Telomerase alone is not enough to form a tumour, because other alterations are also needed.
:::

## Organisation of a gene

:::definizione{#gene titolo="Functional products, exons and regulatory regions"}
A **gene** is a stretch of DNA containing the instructions for building a product. The product is a protein or an RNA that functions as such, for example a tRNA. The information of a protein-coding gene is used in two stages. In **transcription** the gene is copied into a molecule of messenger RNA (mRNA). In **translation** ribosomes read the mRNA and build the protein. The two stages together are called **gene expression**.

A gene does not consist only of the part that is copied. In front of it lies the **promoter**, the sequence to which the enzyme of transcription binds. The promoter determines where transcription starts and in which direction it proceeds. Other regulatory sequences, near or far, determine how often the gene is transcribed.

Two types of component are distinguished in regulation.

- A **cis** element is a DNA sequence, such as a promoter. It regulates only the gene lying on its own DNA molecule.
- A **trans** factor is a molecule, usually a protein, produced by another gene. It moves through the cell and regulates all genes carrying the sequence it binds.

This distinction is useful in experiments with two copies of the same gene. A mutation in a cis sequence alters only the copy that contains it. A mutation in a trans factor is compensated by the normal protein produced by the other copy.

In bacteria a single mRNA often contains the instructions for several proteins, one after another, and is called **polycistronic**. In eukaryotes each mRNA generally contains the instructions for a single protein.

Eukaryotic genes are interrupted. Along the gene **exons**, stretches that remain in the final mRNA, alternate with **introns**, stretches that are transcribed and then removed. The final mRNA has three parts.

- The **5′ UTR** (untranslated region) runs from the start of the mRNA to the start codon.
- The **coding region** runs from the start codon to the stop codon. It is the only part translated into protein.
- The **3′ UTR** runs from the stop codon to the end of the mRNA.

The two UTRs are part of the exons and are not translated. An exon therefore does not coincide with a coding part, and the number of exons does not indicate the length of the protein.
:::

## Transcription and control of initiation

:::definizione{#trascrizione-lac titolo="The template strand and the lac operon"}
In **transcription** an enzyme, **RNA polymerase**, builds an RNA molecule by copying a stretch of DNA. In that stretch the double helix opens and only one of the two strands is used as a template. RNA polymerase follows the same direction rules as DNA polymerase: it reads the template 3′ → 5′ and extends the RNA 5′ → 3′. Unlike DNA polymerase it starts a chain without needing a primer. The two DNA strands have different names.

- The **template strand** is the one the polymerase reads. The RNA is complementary to it.
- The **coding strand** is the other one. It has the same sequence as the RNA, with T in place of U.

If the coding strand is 5′-ATGGCA-3′, for example, the RNA is 5′-AUGGCA-3′. Along the same chromosome some genes use one strand as template and other genes use the other.

In bacteria RNA polymerase recognises the promoter with the help of a protein, the **sigma factor**. Bacteria have no nucleus, so ribosomes begin translating an mRNA while the polymerase is still building it.

The **lac operon** of *Escherichia coli* is the classic example of transcriptional regulation. An **operon** is a group of neighbouring genes transcribed together into a single mRNA from one promoter. The lac operon contains the genes of the enzymes needed to use the sugar lactose. Producing them costs energy, so the bacterium produces them only when lactose is present and glucose, the sugar it prefers, is absent. Two proteins control the operon.

- The **LacI repressor** responds to lactose. Without lactose it binds a sequence next to the promoter, the **operator**, and blocks RNA polymerase. When lactose is present, a molecule derived from it, allolactose, binds the repressor and detaches it from the operator. Allolactose is called the **inducer**.
- The **CAP activator** responds to glucose. When glucose is scarce, cAMP rises in the cell and binds CAP. The CAP-cAMP complex binds near the promoter and helps RNA polymerase attach.

Transcription is high only if the repressor is off and the activator is bound. The four cases are as follows.

| Lactose | Glucose | Repressor | CAP-cAMP | Transcription |
|---|---|---|---|---|
| absent | present | bound | absent | off |
| absent | absent | bound | bound | off |
| present | present | off | absent | low |
| present | absent | off | bound | high |

![Two controls on the lac operon](/figure/biologia-semestre-filtro/flusso-informazione/lac-en.svg)

Mutations of the operon are interpreted by identifying which binding is altered. The three components are of different kinds: the operator is a DNA sequence, LacI is a protein and allolactose is a small molecule. Two mutations are considered.

- A LacI mutation that prevents it from binding allolactose leaves the repressor always attached to the operator. The operon stays off even with lactose. LacI is a trans factor, so the mutant repressor switches off all the copies of the operon present in the cell.
- An operator mutation that prevents LacI from binding leaves the operon always free of the repressor. The operator is a cis element, so the effect concerns only the copy of the operon carrying the mutation.
:::

:::definizione{#trascrizione-eucariotica titolo="Nuclear polymerases and transcription factors"}
Eukaryotes have three RNA polymerases in the nucleus, each for one class of RNA.

- **RNA polymerase I** transcribes the genes of the major rRNAs.
- **RNA polymerase II** transcribes all protein-coding genes, so it produces mRNAs.
- **RNA polymerase III** transcribes the genes of tRNAs and of the smallest rRNA, 5S.

RNA polymerase II does not recognise the promoter on its own. It needs proteins called **transcription factors**, which are of two types.

- **General factors** are needed for all genes. They assemble on the promoter together with the polymerase and form the initiation complex. One of them, **TBP**, recognises a sequence present in many promoters, the **TATA box**.
- **Specific factors** bind regulatory sequences belonging to particular genes and determine in which cells and at which times the gene is active. A regulatory sequence that increases transcription is called an **enhancer**, one that reduces it is called a **silencer**.

An enhancer often lies thousands of base pairs from the gene it regulates. It acts because the DNA folds into a loop and brings the enhancer, with its bound proteins, into contact with the promoter. All this requires chromatin to be open at those points, as described in the unit on genome and chromatin.

After initiation polymerase II travels along the gene and extends the RNA. The polymerase has a long tail, called the **CTD**, which is phosphorylated along the way. The enzymes that modify the RNA while it is being produced bind the phosphorylated tail. At the end of the gene the RNA is cut at a precise point, the polyadenylation site. The polymerase continues for a further stretch and then detaches from the DNA. The end of the mRNA is therefore set by the cut and not by the point where the polymerase stops.

The amount of a protein in a cell does not depend only on the transcription of its gene. It also depends on how long the mRNA lasts, on how many times it is translated and on the rate at which the protein is degraded. If the amount of a protein increases, to attribute the increase to transcription the newly produced RNA is measured, and not only the protein.
:::

## RNA processing and lifespan

:::definizione{#maturazione-rna titolo="The cap, splicing and polyadenylation"}
In eukaryotes the newly transcribed RNA, called **pre-mRNA**, is not ready to be translated. In the nucleus it undergoes three modifications, together called **processing**. Only mature mRNA leaves the nucleus.

1. **5′ cap**. A modified guanine nucleotide is added to the 5′ end, linked the opposite way round from the others. The cap protects the mRNA from degradation and is the point where the ribosome attaches at the start of translation.
2. **Poly-A tail**. The RNA is cut at the 3′ end and an enzyme, poly-A polymerase, adds about 200 adenine nucleotides. The tail is not written in the DNA: it is added by the enzyme without a template. It too protects the mRNA from degradation.
3. **Splicing**. The introns are cut out and the exons are joined together.

Splicing is carried out by the **spliceosome**, a complex made of proteins and small RNAs called **snRNAs**. The snRNAs recognise, by base pairing, the sequences that mark the start and the end of each intron. The intron is cut at one end and folded back on itself to form a loop (lariat), then it is cut at the other end and the two exons are joined. The cutting reactions are catalysed by the snRNAs and not by the proteins. The spliceosome is therefore an example of a **ribozyme**, that is, an RNA with enzyme activity.

![Exon skipping and isoform formation](/figure/biologia-semestre-filtro/flusso-informazione/splicing-en.svg)

In **alternative splicing** the same pre-mRNA is processed in different ways, and a single gene yields different mRNAs and therefore different proteins. A gene with exons 1, 2, 3 and 4, for example, gives an mRNA with all four exons in one tissue and an mRNA with exons 1, 2 and 4 in another tissue. The choice depends on regulatory proteins present in that tissue. Thanks to alternative splicing the roughly 20,000 human genes produce many more than 20,000 proteins.

When an exon is skipped its length matters. The mRNA is read in groups of three nucleotides. If the skipped exon has a number of nucleotides that is a multiple of 3, the protein lacks a few amino acids and the rest is unchanged. If the number is not a multiple of 3, all the following groups are shifted and the protein changes completely from that point on.

**RNA editing** is a different process. An enzyme chemically changes a single base of the RNA after transcription, for example a C into a U. A codon of the mRNA thus differs from the one written in the DNA.
:::

:::definizione{#regolazione-rna titolo="Turnover, small RNAs and structural RNAs"}
The amount of an mRNA in the cell depends on two rates, the rate at which it is produced and the rate at which it is degraded. The lifetime of an mRNA is measured by its **half-life**, that is, the time in which its amount halves when production is stopped. An mRNA has, for example, a half-life of 20 minutes. Transcription is blocked. After 20 minutes $\dfrac{1}{2}$ remains. After another 20 minutes it halves again, so after 40 minutes $\dfrac{1}{2}\cdot\dfrac{1}{2}=\dfrac{1}{4}$ remains.

The degradation of an mRNA starts from its two protections. The poly-A tail is shortened (deadenylation) and the cap is removed (decapping). At that point exonucleases, enzymes that break down a nucleic acid starting from one end, consume the mRNA.

**miRNAs** (microRNAs) regulate the lifetime and translation of mRNAs. They are RNAs of about 22 nucleotides, produced by the cell. A miRNA associates with a protein, **Argonaute**, and guides the complex to mRNAs containing a sequence complementary to its own, usually in the 3′ UTR. In animals the pairing is generally partial. The target mRNA is translated less and degraded faster, so the corresponding protein decreases. A single miRNA regulates many different mRNAs.

**RNA interference** (RNAi) uses the same mechanism. A double-stranded RNA is cut by the enzyme **Dicer** into short fragments, called **siRNAs**. One strand of the siRNA binds Argonaute and guides it to the mRNA with a perfectly complementary sequence. In this case Argonaute cuts the mRNA, which is then destroyed. In the laboratory a siRNA is introduced into the cell to switch off a chosen gene.

The other RNAs are processed too. rRNA precursors are cut and modified in the nucleolus, where they are also joined to proteins to form the two ribosomal subunits. tRNA precursors are trimmed at their ends and some of their bases are modified. Every tRNA ends at its 3′ end with the sequence **CCA**, to which the amino acid attaches. Ribosomal subunits are built in the nucleolus, while translation takes place in the cytoplasm.
:::

## From codon to amino acid

:::definizione{#codice-genetico titolo="The code, reading frame and tRNAs"}
A protein is a sequence of amino acids and an mRNA is a sequence of nucleotides. The **genetic code** is the rule that matches the two sequences. The mRNA is read in groups of three nucleotides, called **codons**, and each codon specifies one amino acid. With four bases the possible codons number $4\cdot 4\cdot 4=64$. Of these, 61 specify an amino acid and 3 are **stop codons** (UAA, UAG, UGA), which mark the end of the protein. The codon AUG specifies the amino acid methionine and is also the **start codon**. The code has three properties.

- It is **degenerate**. There are 20 amino acids and 61 codons specifying them, so almost every amino acid corresponds to several codons. Leucine, for example, has six.
- It is **unambiguous**. Each codon specifies only one amino acid.
- It is **nearly universal**. It is the same in almost all organisms. The exceptions are a few cases, including mitochondria, where some codons have a different meaning.

Reading starts from the start codon and proceeds three by three. The way the sequence is divided into codons is called the **reading frame**. The sequence AUGGCAUAA, read from the first nucleotide, gives the codons AUG, GCA and UAA.

The match between codon and amino acid is made by **tRNAs**. A tRNA carries an amino acid at one end and has, in another region, three bases called the **anticodon**. The anticodon pairs with the complementary codon of the mRNA, in antiparallel orientation. The anticodon 3′-UAC-5′ pairs with the codon 5′-AUG-3′. There are fewer than 61 tRNAs, because the third base of the codon allows a less strict pairing, called **wobble**. One tRNA therefore recognises several codons that differ only in the third base and specify the same amino acid.

Each tRNA receives its amino acid from an enzyme, the **aminoacyl-tRNA synthetase**. There is one for each amino acid. It recognises both the amino acid and the tRNAs corresponding to it and joins them with consumption of ATP. The accuracy of translation depends on this step, because the ribosome checks only the pairing between codon and anticodon and not the amino acid carried. If the wrong amino acid is attached to a tRNA in the laboratory, the ribosome inserts it into the protein anyway.
:::

## Building the polypeptide chain

:::definizione{#traduzione titolo="Initiation, elongation and termination"}
**Translation** is the building of a protein according to the sequence of an mRNA. It is carried out by the **ribosome**, made of two subunits, a small one and a large one, composed of rRNA and proteins. The ribosome has three sites where tRNAs sit.

- The **A site** receives the tRNA arriving with a new amino acid.
- The **P site** holds the tRNA to which the growing chain is attached.
- The **E site** is the exit, from which the now empty tRNA leaves the ribosome.

Translation has three phases. In **initiation** the ribosome finds the start codon. In eukaryotes the small subunit binds the cap and slides along the mRNA to the first suitable AUG. In bacteria it binds a sequence of the mRNA lying just before the AUG. A special tRNA, the initiator tRNA, carries methionine and sits on the AUG in the P site. Then the large subunit joins.

In **elongation** a cycle of three steps is repeated, once for each amino acid.

1. A tRNA with its amino acid enters the A site, if its anticodon is complementary to the codon found there.
2. The chain attached to the tRNA in the P site is transferred onto the amino acid in the A site, with the formation of a **peptide bond**. This reaction is catalysed by the rRNA of the large subunit.
3. The ribosome advances by one codon (translocation). The tRNA with the chain moves from the A site to the P site, and the empty tRNA moves from the P site to the E site and leaves. The A site is free again.

Entry of the tRNA and translocation require proteins called elongation factors and consume GTP.

![E, P and A sites during elongation](/figure/biologia-semestre-filtro/flusso-informazione/ribosoma-en.svg)

**Termination** takes place when a stop codon arrives in the A site. No tRNA recognises it. In its place a protein enters, the **release factor**, which detaches the chain from the last tRNA. The protein is free and the ribosome separates from the mRNA.

The ribosome reads the mRNA in the 5′ → 3′ direction. The protein grows from the amino-terminal end (N-terminus) towards the carboxy-terminal end (C-terminus), so the first amino acid inserted is the N-terminal one.

The number of amino acids is obtained from the length of the coding region. The stop codon occupies three nucleotides and corresponds to no amino acid. A coding region of 300 nucleotides, counted from the first nucleotide of the AUG to the last of the stop codon, contains $\dfrac{300}{3}=100$ codons. One is the stop, so the protein has $100-1=99$ amino acids.

A single mRNA is translated by many ribosomes at the same time, one behind another. The assembly is called a **polysome**. Each ribosome builds one copy of the protein.
:::

## Maintaining functional proteins

:::definizione{#proteostasi titolo="Folding, modifications and degradation"}
A newly built chain of amino acids is not yet a working protein. It has to fold into the correct shape. In the cytoplasm, which is crowded with other molecules, a chain that is not yet folded tends to stick to other chains and form useless clumps, called aggregates. **Chaperones** are proteins that prevent this. They bind the chain, keep it isolated while it folds and, if folding fails, allow it to try again. Many consume ATP. After folding many proteins receive modifications, such as phosphorylation or the addition of sugars, or are cut at a precise point. A protein present in normal amount is therefore inactive if one of these stages has not taken place.

**Proteostasis** is the balance between the proteins the cell produces and those it removes. Damaged, misfolded or no longer needed proteins are removed by the **ubiquitin-proteasome** system, in two stages.

1. The protein to be removed is tagged with a chain of molecules of **ubiquitin**, a small protein. Tagging requires three enzymes in succession. E1 activates ubiquitin, E2 carries it and E3 recognises the target protein and has ubiquitin attached to it.
2. The **proteasome**, a large cylinder-shaped complex, recognises the ubiquitin chain, unfolds the protein with consumption of ATP and cuts it into short fragments (peptides). The ubiquitins are detached and reused.

![Protein fates and quality control](/figure/biologia-semestre-filtro/flusso-informazione/proteostasi-en.svg)

Ubiquitin does not always signal degradation. The meaning depends on how the ubiquitins are linked to one another. A chain in which each ubiquitin is linked to lysine 48 of the previous one (K48 chain) sends the protein to the proteasome. A single ubiquitin, or chains of another type, regulate protein transport, signalling or DNA repair. A protein similar to ubiquitin, **SUMO**, changes the location or the interactions of a protein and does not cause its degradation. Aggregates and organelles, which are too large for the proteasome, are removed by autophagy in lysosomes.

An experiment shows how these notions are used. A culture is treated with a drug that blocks the proteasome, and the amount of a protein increases. The protein was therefore being degraded by the proteasome, and now it accumulates. The datum concerns the removal of the protein. To find out whether its production has also changed, the RNA of the gene is measured.
:::
