---
titolo: "Genome, chromatin and epigenetics"
sommario: "From chromosome counts to nucleosomes: genome organisation, accessibility, epigenetic memory and mobile sequences."
---

## Chromosomes, chromatids and DNA content

:::definizione{#cromosomi titolo="A chromosome before and after replication"}
A eukaryotic **chromosome** is a long, linear, double-helical molecule of DNA (deoxyribonucleic acid) wrapped around proteins. The number of chromosomes is fixed for each species, and a human cell has 46. The appearance of a chromosome changes with DNA replication.

- **Before** replication the chromosome contains a single DNA molecule.
- **After** replication it contains two identical DNA molecules, called **sister chromatids**, joined together at a region called the centromere. This is the X shape seen in photographs. It still counts as one chromosome, as long as the two chromatids stay joined.

The two strands of the double helix are not the two chromatids. Each chromatid is a complete double helix.

The cells of the body are **diploid**, that is, they have two copies of each chromosome, one received from the mother and one from the father. The two copies are called **homologous chromosomes**. Two homologues carry the same genes at the same positions, called **loci** (singular locus). The versions of a gene, called **alleles**, are however often different on the two homologues. Two sister chromatids, by contrast, are identical copies of each other.

Two symbols are used for counting. The symbol $n$ denotes the number of chromosomes in one set, that is, a complete series with one copy of each type. In humans $n=23$, and a diploid cell has $2n=46$ chromosomes. The symbol $C$ denotes the amount of DNA in one unreplicated set. Over the life of a cell the counts are as follows.

| Moment | Chromosomes | DNA molecules | Amount of DNA |
|---|---|---|---|
| Before replication (G1 phase) | 46 | 46 | $2C$ |
| After replication (G2 phase) | 46 | 92 | $4C$ |

Replication therefore doubles the DNA molecules and leaves the number of chromosomes unchanged. The cell remains diploid, because there are still 23 pairs of homologues. During division the sister chromatids separate, and from that moment each counts as a chromosome.

![An unreplicated chromosome and the same chromosome after duplication](/figure/biologia-semestre-filtro/genoma-cromatina/cromosoma-en.svg)
:::

:::esempio{titolo="Interpreting a DNA measurement"}
A species has $2n=8$. Before replication one of its cells has 8 chromosomes, each with one DNA molecule, so 8 molecules. After replication it still has 8 chromosomes, each with two chromatids, so $8\cdot 2=16$ molecules. A dye that binds DNA gives a signal proportional to the amount of DNA. If the signal before replication is 100, afterwards it is 200. The doubling of the signal shows that the DNA has doubled and not that the chromosomes have become 16. To know the number of chromosomes, the chromosomes must be counted under the microscope.
:::

## Centromeres and telomeres

:::definizione{#centromeri-telomeri titolo="Regions that allow chromosomes to be maintained"}
A chromosome is preserved from one division to the next thanks to three types of region, each with a task.

- **Origins of replication** are the points where DNA copying begins. Each eukaryotic chromosome has many.
- The **centromere** is the region on which the **kinetochore** assembles, a protein complex to which the spindle microtubules attach. During division the microtubules pull the chromosomes towards the two daughter cells. A chromosome fragment without a centromere is copied, but it is not distributed correctly and is usually lost.
- **Telomeres** are the two ends of the chromosome.

In human centromeres the DNA consists of short sequences repeated a great many times, called alpha-satellite. What identifies the centromere, however, is a protein. In centromeric nucleosomes histone H3 is replaced by a variant, **CENP-A**, and the kinetochore assembles where CENP-A is present. There are in fact working centromeres, called neocentromeres, in regions without alpha-satellite sequences.

In **telomeres** the DNA is a short sequence repeated thousands of times, which in humans is TTAGGG. A group of proteins called **shelterin** binds these repeats. The cell repairs DNA breaks by joining free ends together. Shelterin covers the natural end of the chromosome and prevents it from being treated as a break. Without this protection two chromosomes are joined to each other end to end.

At each replication telomeres shorten a little, for a reason explained in the unit on replication. **Telomerase** is the enzyme that lengthens them again. It contains a molecule of RNA (ribonucleic acid) that it uses as a template to add new TTAGGG repeats, so it is a reverse transcriptase. It is active in germ cells and stem cells, and little or not at all in most other cells. Shelterin and telomerase therefore have different tasks: the first protects the end, the second lengthens it.
:::

:::esempio{titolo="Two alterations with different consequences"}
Two defective chromosomes are compared. The first has normal telomeres and a kinetochore that does not work. Microtubules cannot attach, so during division the chromosome is not distributed correctly and one daughter cell is left without it. The second has a normal kinetochore and telomeres without shelterin. It is distributed correctly, but its ends are treated as breaks, so the cell stops or joins the chromosome to another. In both cases the genome is altered, for two different reasons. The centromere serves distribution and the telomere serves protection of the ends.
:::

## DNA associated with histones

:::definizione{#nucleosomi titolo="Nucleosome, octamer and linker DNA"}
The DNA of a human cell, stretched out, is about two metres long, and the nucleus has a diameter of a few thousandths of a millimetre. The DNA fits in the nucleus because it is wrapped around proteins called **histones**. DNA and proteins together are called **chromatin**.

The unit of chromatin is the **nucleosome**. It consists of a core of eight histones, called an **octamer**, around which the DNA makes almost two turns, for a length of about 147 base pairs. The octamer contains two copies of each of the four histones H2A, H2B, H3 and H4. DNA is negatively charged, because of its phosphate groups, and histones are rich in positively charged amino acids (lysine and arginine), so the two molecules attract each other.

The stretch of DNA joining one nucleosome to the next is called the **linker**. Under the electron microscope extended chromatin looks like a string of beads, in which the beads are the nucleosomes and the string is the linker. A fifth histone, **H1**, is not part of the octamer. It binds where the DNA enters and leaves the nucleosome and brings nucleosomes closer together. From each histone of the octamer a flexible end protrudes, called a **tail**, to which the cell adds chemical groups.

These numbers give an estimate of how many nucleosomes there are in a stretch of DNA. If the wrapped DNA measures 147 base pairs and the linker measures 53 on average, each nucleosome with its linker occupies $147+53=200$ base pairs. A stretch of 2000 base pairs therefore contains $\dfrac{2000}{200}=10$ nucleosomes. The value of 200 is an average, because linker length changes from one region to another.

![Histone octamer, wrapped DNA and linker with H1](/figure/biologia-semestre-filtro/genoma-cromatina/nucleosoma-en.svg)
:::

:::esempio{titolo="Why nuclease digestion produces a ladder"}
A **nuclease** is an enzyme that cuts DNA. In chromatin it easily cuts the linker, which is exposed, and cuts the DNA wrapped on the octamer, which is protected, with difficulty. Chromatin is treated with a nuclease for a short time, so that only some linkers are cut. The fragments obtained contain one, two or three nucleosomes, so they measure about 200, 400 and 600 base pairs. Separated by length on a gel they form bands at regular distances, like the rungs of a ladder. The distance between two bands, 200 base pairs, is the length of one nucleosome with its linker. If the treatment lasts a long time the nuclease consumes all the linkers and only the protected DNA remains, about 147 base pairs.
:::

:::osservazione{titolo="An average retains local variability"}
The value of 200 base pairs is the average over all the nucleosomes in the sample. In some regions the linker is shorter than 53 base pairs, in others it is longer, and some stretches have no nucleosomes. The ladder of bands therefore describes the average spacing and not the position of each nucleosome. To know whether a nucleosome covers a precise point of the DNA, for example the start of a gene, a measurement made at that point is needed.
:::

## Three-dimensional organisation and accessibility

:::osservazione{#compattazione titolo="Loops and dynamic organisation"}
Nucleosomes are the first level of DNA folding. Above this level chromatin forms **loops**, that is, folded stretches that bring into contact two points far apart along the sequence. A loop, for example, brings a regulatory sequence thousands of base pairs away close to a gene. In the nucleus of a cell that is not dividing each chromosome occupies its own region, called a chromosome territory.

Two ring-shaped protein complexes, of the **SMC** family, organise the loops.

- **Cohesins** form the loops in the non-dividing cell. After replication they also hold the two sister chromatids together.
- **Condensins** compact the chromosomes at the start of division and give them the shape visible under the microscope.

During division the chromosome is much more compact and contains exactly the same DNA. Many books show an intermediate stage, the **30 nm fibre**, in which nucleosomes are stacked regularly. This fibre is observed in the test tube. In cells chromatin mostly has an irregular folding, so the scheme of successive levels is a simplified model.
:::

:::definizione{#eucromatina-eterocromatina titolo="Local chromatin states"}
The chromatin of a nucleus is found in two states.

- **Euchromatin** is loosely packed. Its DNA is accessible to proteins, and most active genes are found here.
- **Heterochromatin** is tightly packed. Its DNA is poorly accessible and the genes it contains are generally switched off.

The state of chromatin is a condition that makes transcription possible and does not by itself start it. A gene in euchromatin is transcribed only if the proteins that activate it, the transcription factors, are present.

Heterochromatin is of two types. **Constitutive** heterochromatin is compact in all cells and at all times. It is found in regions rich in repeated sequences, such as those around centromeres. **Facultative** heterochromatin is compact only in some cell types or at some stages of development. The main example is the inactive X chromosome. Female mammals have two X chromosomes, and in each cell one of the two is compacted and almost completely switched off. Some genes on this chromosome nevertheless remain active.

![The same sequence with different nucleosome positions and promoter accessibility](/figure/biologia-semestre-filtro/genoma-cromatina/accessibilita-en.svg)
:::

:::definizione{#rimodellamento titolo="Moving a nucleosome using ATP"}
A nucleosome covering a sequence prevents other proteins from binding to it. The cell moves nucleosomes with **chromatin remodelling complexes**, enzymes that consume ATP (adenosine triphosphate, the molecule that supplies energy to cellular reactions). A remodelling complex slides the nucleosome along the DNA, removes it or replaces one of its histones. Depending on the case, a regulatory sequence is uncovered or covered.

A transcription factor, for example, has to bind a sequence covered by a nucleosome. The remodelling complex moves the nucleosome by a few tens of base pairs, the sequence is left uncovered and the factor binds. In this process the DNA sequence does not change. Only the position of the nucleosome changes. To show that the movement depends on the complex, a version of the complex unable to hydrolyse ATP is used in the laboratory. With this version the nucleosome stays in place.
:::

## Modifications and epigenetic memory

:::definizione{#epigenetica titolo="Regulatory states without a sequence change"}
All the cells of a person have the same DNA, yet a liver cell and a neuron use different genes. When a liver cell divides, moreover, the daughter cells are still liver cells. **Epigenetics** studies the information that determines which genes are active and that passes to daughter cells without the DNA sequence changing. This information consists of chemical groups added to DNA or to histones, called **epigenetic modifications**.

The first modification is **DNA methylation**, that is, the addition of a methyl group ($\mathrm{CH_3}$) to the base cytosine. In humans it concerns cytosines followed by a guanine, in the pairs called **CpG**, where C and G stand for cytosine and guanine and p stands for the phosphate group that joins them. The sequence stays the same, because a methylated cytosine still pairs with guanine. When the CpGs of the **promoter** of a gene, that is, the region where transcription starts, are methylated, the gene is generally switched off. Specific proteins recognise methylated cytosines and compact the chromatin.

Methylation passes to daughter cells by the following mechanism. In a CpG both strands carry a methylated C, because opposite CG there is GC. With replication each new double helix receives one old strand, methylated, and one new strand, unmethylated. The enzyme **DNMT1** (DNA methyltransferase 1) recognises sites methylated on only one strand and adds the methyl to the new strand. The two daughter cells therefore have the same methylated CpGs as the mother cell.

![Maintenance methylation after replication: parental site, hemimethylation and restoration](/figure/biologia-semestre-filtro/genoma-cromatina/metilazione-en.svg)

The second class of modifications concerns histone tails. The two main ones are acetylation and methylation.

**Acetylation** is the addition of an acetyl group to the amino acid lysine. Lysine is positively charged and the acetyl cancels the charge, so the acetylated histone attracts DNA less and the chromatin is more open. Acetylation is associated with active genes. **HAT** enzymes (histone acetyltransferases) add the acetyl and **HDAC** enzymes (histone deacetylases) remove it. A drug that inhibits HDACs therefore increases acetylation.

**Histone methylation** has different effects depending on which lysine is methylated. It is written with an abbreviation read from left to right: histone, amino acid, position and number of methyls. **H3K4me3** is histone H3 with three methyls on the lysine (K) at position 4, and it is found on the promoters of active genes. **H3K9me3** is histone H3 with three methyls on the lysine at position 9, and it is found in heterochromatin. The word "methylation" alone therefore does not say whether a gene is active or switched off.
:::

:::esempio{titolo="Separating association from causation"}
The same gene is studied in two cell cultures. In culture A the promoter is not methylated and the gene produces a lot of RNA. In culture B the promoter is methylated and the gene produces little RNA. The two data show that methylation and low expression appear together. They do not show which of the two is the cause. It is possible that methylation switches the gene off, and it is possible that the gene switches off for another reason and is methylated afterwards. To distinguish the two cases, the hypothesised cause is acted upon. Methylation is removed from the promoter in culture B, without changing anything else, and the RNA is measured. If the RNA increases, methylation was the cause of the low expression.
:::


:::esempio{titolo="Accessibility data and histone abundance"}
Histone acetylation is measured in two samples. The signal is 120 in the first sample and 60 in the second. The second sample, however, contains half the histones of the first. The signal is therefore divided by the amount of histones. Taking the amount in the first sample as 2 and that in the second as 1 gives $\dfrac{120}{2}=60$ and $\dfrac{60}{1}=60$. Each histone is therefore acetylated to the same extent in the two samples, and the lower signal depends only on the smaller number of histones. A signal must always be referred to the amount of material on which it is measured. This operation is called normalisation.

The same holds for accessibility measured with a nuclease. A sample that is cut more generally has more open chromatin. Before concluding this, it is checked that the two samples contain the same amount of DNA.
:::

## Genes, families and non-coding DNA

:::definizione{#sequenze-genoma titolo="Genome composition"}
The **genome** is all the DNA of an organism. In humans it comprises the nuclear genome, about 3 billion base pairs distributed over 23 chromosomes, and the small mitochondrial genome. A **gene** is a stretch of DNA containing the instructions for a product, that is, a protein or an RNA. There are about 20,000 protein-coding genes. The parts of these genes actually translated into protein are only 1–2% of the genome. The rest comprises four types of sequence.

- **Introns**, stretches inside genes that are transcribed and then removed from the RNA.
- **Regulatory sequences**, such as promoters, which determine when a gene is active.
- Genes for **non-coding RNAs**, such as rRNA (ribosomal RNA) and tRNA (transfer RNA).
- **Repeated sequences**, which occupy about half the genome.

A sequence that does not code for protein therefore often has a function. A promoter and an rRNA gene, for example, do not code for proteins and are indispensable.

A **single-copy sequence** appears at only one locus in the genome. A diploid cell nevertheless has two copies of it, one on each homologous chromosome.

A **gene family** is a group of similar genes that derive from a single ancestral gene. In the course of evolution the gene was copied several times (duplication), and the copies then accumulated differences. Genes of the same species that derive from a duplication are called **paralogues**. The classic example is the globin genes, the proteins of haemoglobin. Humans have several, active at different times: some in the embryo, others in the fetus, others in the adult. Two paralogues occupy two different loci. Two alleles, by contrast, are variants of the same locus.

The genes for rRNAs are present in hundreds of identical copies, arranged one after another, because the cell needs large amounts of ribosomes. A **pseudogene** is a copy of a gene that has accumulated mutations and no longer produces the original protein. Some pseudogenes are nevertheless transcribed into RNA.
:::

:::esempio{titolo="Duplication followed by divergence"}
A gene active in the liver is duplicated, and the genome now contains two identical copies at two different loci. The first copy continues to perform the original function. The second is no longer indispensable, so the mutations that accumulate in it do not harm the organism. A mutation in its regulatory region makes it active in the kidney and no longer in the liver. After many generations the species has two similar genes, one active in the liver and one in the kidney, with slightly different proteins. By this route new genes arise from existing genes. The relatedness of two genes is recognised from the similarity of their sequences.
:::

## Repeats and mobile elements

:::definizione{#ripetizioni titolo="Tandem arrays and dispersed copies"}
Repeated sequences fall into two groups according to how the copies are arranged.

In **tandem** repeats the copies follow one another. The sequence CACACACA, for example, contains four consecutive copies of the unit CA. If the unit is very short, from 1 to 6 bases, the repeat is called a **microsatellite**. If it is longer, a few tens of bases, it is called a **minisatellite**. The number of copies at a given locus changes from person to person. One person has, for example, 12 copies on one chromosome and 15 on the homologue. Measuring the length of many microsatellites gives a profile that differs for each individual, and this is the principle of the DNA tests used to identify people.

In **interspersed** repeats the copies are scattered at distant points of the genome. Almost all derive from **mobile elements**, that is, sequences able to insert a copy of themselves at another point of the genome. The main classes are **LINEs** (long interspersed elements), **SINEs** (short interspersed elements) and endogenous retroviruses. Most of the copies present today in the human genome have accumulated mutations and are no longer able to move.

![Adjacent repeats and copies separated by unrelated DNA](/figure/biologia-semestre-filtro/genoma-cromatina/ripetizioni-en.svg)
:::

:::definizione{#elementi-mobili titolo="DNA intermediates and RNA intermediates"}
A **transposable element** (or transposon) is a DNA sequence that moves or copies itself to another point of the genome. There are two mechanisms.

- **DNA transposons** move by the mechanism called "cut and paste". An enzyme cuts the element out of its position and inserts it elsewhere. The number of copies stays the same.
- **Retrotransposons** multiply by the mechanism called "copy and paste", in three steps. The element is transcribed into RNA, a reverse transcriptase copies the RNA into DNA, and the new DNA inserts at another point. The original element stays in place, so the copies increase with each cycle. For this reason retrotransposons occupy such a large part of the genome today.

An element is **autonomous** if it encodes the enzymes needed for its own movement. Complete **LINE-1** elements are autonomous, because they encode their own reverse transcriptase. The human genome contains about 500,000 copies, almost all incomplete and inactive. SINEs, including **Alu** sequences, are short and encode no enzymes, so they are **non-autonomous**. They multiply by using the enzymes produced by LINE-1 elements.

**Endogenous retroviruses** are remnants of retroviruses that in the past infected the germ cells of an ancestor and were then passed on to descendants as part of the genome. Almost all have lost the ability to produce viruses.

The effect of a new insertion depends on where it lands. If it lands in an exon, that is, in a coding part of a gene, it interrupts the protein sequence. If it lands in a regulatory region it changes the amount of protein produced. If it lands in a region with no function it has no effect, and this is the most frequent case.

![Retrotransposition with the original DNA copy retained and a new insertion](/figure/biologia-semestre-filtro/genoma-cromatina/retrotrasposizione-en.svg)
:::

:::esempio{titolo="Element expression and a new insertion"}
In a sample of cells LINE-1 RNA has increased. The datum shows that the element is transcribed more. It does not show that new copies have appeared in the genome, because transcription is only the first of the three steps. Copying of the RNA into DNA and insertion are still needed. To demonstrate a new insertion, the DNA is searched for the junction between the element and the sequence next to it. If that junction did not exist in the starting cells, the copy is new.

A new insertion that occurred in a cell of the body (somatic cell) passes only to the cells derived from that cell. The organism then contains cells with slightly different genomes, and this condition is called **mosaicism**. The insertion passes to the offspring only if it occurred in a germ cell, that is, a cell that gives rise to gametes.
:::
