---
titolo: "Mutations, inheritance and traits"
sommario: "From a change in DNA to phenotype: repair, crosses, probability, genetic maps, chromosome abnormalities and reasoned pedigree analysis."
---

## Changes in DNA and their consequences

:::definizione{#mutazioni titolo="Sequence, product and cell lineage"}
A **mutation** is a permanent change in the DNA sequence. Once it has occurred, it is copied at every replication and passes to all daughter cells. Three types are distinguished according to what happens to the sequence.

- A **substitution** changes one base into another.
- An **insertion** adds one or more nucleotides.
- A **deletion** removes one or more nucleotides.

The effect of a mutation is assessed on three levels: the DNA sequence, the protein produced and the characteristic of the organism.

A substitution in the coding part of a gene changes one codon. Depending on the new codon there are three cases. The starting point, for example, is the codon GAA, which specifies the amino acid glutamate.

- **Synonymous** (silent) mutation. The new codon specifies the same amino acid, and the protein does not change. GAA becomes GAG, which still specifies glutamate. This is possible because the code is degenerate.
- **Missense** mutation. The new codon specifies a different amino acid. GAA becomes GUA, which specifies valine. The protein has one amino acid changed.
- **Nonsense** mutation. The new codon is a stop codon. GAA becomes UAA. Translation stops at that point and the protein is shorter.

A synonymous mutation leaves the protein unchanged, but in some cases it alters splicing or the lifetime of the mRNA. For this reason the classification describes the sequence and does not guarantee the absence of effects.

Insertions and deletions have an effect that depends on the number of nucleotides. The ribosome reads the mRNA in groups of three, starting from the start codon. If a number of nucleotides that is not a multiple of 3 is added or removed, all the following groups are shifted. This mutation is called a **frameshift**. All the amino acids after that point change, and a stop codon usually appears soon. In the sequence AUG GCA UUC, for example, deletion of the G of the second codon gives AUG CAU UC…, so the second codon becomes CAU and all the following ones change. A deletion of three nucleotides, by contrast, removes a single amino acid and leaves the following codons unchanged.

![Reading frame before and after deletion of one base](/figure/biologia-semestre-filtro/genetica-mutazioni/cornice-en.svg)

A mutation outside the coding part has other effects. In the promoter it changes the amount of mRNA produced, and therefore the amount of protein. In the sequences marking the boundaries between exons and introns it alters splicing, and an exon is skipped or an intron remains in the mRNA.

Some diseases are caused by **triplet expansions**. At one point of the gene a triplet is repeated several times in a row, and the number of repeats rises above a threshold. In Huntington's disease, for example, the triplet CAG is repeated more than 36 times. The number of repeats tends to increase from one generation to the next, and with more repeats the disease appears earlier and is more severe. This phenomenon is called **anticipation**.

Finally, the cell in which the mutation occurs matters.

- A **somatic** mutation occurs in a cell of the body. It passes only to the cells derived from that cell and not to the offspring. The organism then contains cells with different DNA, and this condition is called mosaicism.
- A **germline** mutation occurs in a cell that produces gametes. It can be passed on to the offspring, who carry it in all their cells.
:::

## Damage, repair and genome stability

:::definizione{#riparazione titolo="Identify the problem before the pathway"}
The DNA of every cell undergoes thousands of chemical alterations each day, called **damage**. Damage is not yet a mutation. It becomes a mutation if it is not repaired before replication, because in that case the polymerase copies the error into the new strand. The cell has several repair systems, each suited to one type of damage. Three of them act on a single strand and use the other, intact strand as a template to rebuild the sequence.

- **Mismatch repair** corrects replication errors that escaped the proofreading of the polymerase, that is, wrong base pairs and short extra or missing stretches.
- **Base excision repair** (BER) repairs a single altered base, for example an oxidised one. An enzyme called a glycosylase detaches the damaged base from the sugar. Other enzymes cut the strand at that point, a polymerase inserts the correct nucleotide and ligase reseals.
- **Nucleotide excision repair** (NER) repairs damage that distorts the double helix. The main example is thymine dimers, that is, two neighbouring thymines fused together by ultraviolet rays. A stretch of about 30 nucleotides containing the damage is cut out and removed. A polymerase fills the gap and ligase reseals.

![Types of lesion and repair pathways](/figure/biologia-semestre-filtro/genetica-mutazioni/riparazione-en.svg)

The most serious damage is the **double-strand break**, in which both strands break and the chromosome splits into two pieces. There is no intact strand to use as a template. The cell has two repair routes.

- **Homologous recombination** uses as a template the identical copy present on the sister chromatid, and rebuilds the sequence without errors. The sister chromatid exists only after replication, so this route works in S and G2 phases.
- **Non-homologous end joining** (NHEJ) rejoins the two ends directly, without a template. It works in every phase of the cycle. Often, before being joined, the ends are trimmed or filled in by a few nucleotides, so small deletions or insertions remain at the junction.

A defect in a repair route makes the corresponding type of damage accumulate. People with xeroderma pigmentosum lack nucleotide excision repair, so the thymine dimers produced by sunlight are not removed and the frequency of skin tumours is very high. People with Lynch syndrome lack mismatch repair, so replication errors accumulate and the risk of colon cancer increases.
:::

## Alleles and segregation

:::definizione{#alleli titolo="Locus, genotype and phenotype"}
Genetics studies how characteristics pass from parents to offspring. It uses five basic terms.

- A **locus** is the position of a gene on a chromosome.
- An **allele** is one of the versions of that gene. The alleles of a gene differ in DNA sequence.
- The **genotype** is the pair of alleles an individual has at a locus. A diploid organism has two copies of each chromosome, so two alleles for each gene.
- The **phenotype** is the characteristic that is observed, such as the colour of a flower or the presence of a disease.
- An individual is **homozygous** if the two alleles are the same and **heterozygous** if they are different.

A pea gene, for example, controls flower colour and has two alleles, written A (purple flower) and a (white flower). There are three possible genotypes: AA and aa, homozygous, and Aa, heterozygous.

An allele is **dominant** if it determines the phenotype even when present in a single copy, that is, in the heterozygote. An allele is **recessive** if it determines the phenotype only when present in two copies. In the pea the Aa plant has purple flowers, so A is dominant and a is recessive. By convention the dominant allele is written with a capital letter. Dominant does not mean more frequent or more advantageous. Many rare diseases are due to dominant alleles.

Dominance is explained by the amount and type of protein produced.

- An allele that produces no working protein is generally recessive. In the heterozygote the other allele produces half the normal amount, which is usually enough.
- An allele is dominant if the altered protein also damages the normal one. This happens in proteins made of several joined chains, when one defective chain makes the whole complex inactive. This effect is called **dominant negative**.
- An allele is also dominant if the protein acquires a new activity or is always active. This effect is called **gain of function**.

When an individual carries two different mutations in the same gene, their arrangement matters. If they lie one on each homologous chromosome (in trans), both copies of the gene are altered. This condition is called **compound heterozygosity** and, for a recessive disease, it causes the disease. If both lie on the same chromosome (in cis), the other copy of the gene is normal.
:::

:::definizione{#mendel titolo="From gametes to probabilities"}
Gametes (sperm and egg cells) are formed by meiosis and are haploid, that is, they contain a single allele for each gene. Mendel's **law of segregation** states that the two alleles of an individual separate into the gametes, and each gamete receives one of them with equal probability. An Aa individual therefore produces half its gametes with A and half with a, that is, each type with probability $\dfrac12$.

At fertilisation a gamete from the father joins a gamete from the mother, and the two draws are independent. Probabilities are calculated with two rules.

- The probabilities of two independent events that must both occur are **multiplied**.
- The probabilities of two alternative ways of obtaining the same result are **added**.

In the cross Aa × Aa the AA child receives A from the father and A from the mother, so $P(\mathrm{AA})=\dfrac12\cdot\dfrac12=\dfrac14$. In the same way $P(\mathrm{aa})=\dfrac14$. The Aa child is obtained in two ways, A from the father and a from the mother or a from the father and A from the mother, so $P(\mathrm{Aa})=\dfrac14+\dfrac14=\dfrac12$. The **Punnett square** in the figure summarises the same calculation: the gametes of the two parents are on the sides and the genotypes of the offspring are in the cells.

![Punnett square for two heterozygotes](/figure/biologia-semestre-filtro/genetica-mutazioni/punnett-en.svg)

If A is dominant, AA and Aa offspring have the same phenotype, the dominant one. Its probability is $\dfrac14+\dfrac12=\dfrac34$, and that of the recessive phenotype (aa) is $\dfrac14$. This is Mendel's 3 to 1 ratio.

A frequent problem asks for the probability that a child with the dominant phenotype is heterozygous. Knowing that the child has the dominant phenotype excludes the genotype aa. What remains is AA, with probability $\dfrac14$, and Aa, with probability $\dfrac12$. Out of a total of $\dfrac34$, the share belonging to Aa is, writing D for the dominant phenotype:

$$
P(\mathrm{Aa}\mid D)=\frac{P(\mathrm{Aa})}{P(D)}
=\frac{\frac12}{\frac34}=\frac23.
$$

The child with the dominant phenotype is therefore heterozygous in 2 cases out of 3.

The **law of independent assortment** concerns two genes together. If the two genes lie on different chromosomes, the alleles of one are distributed into the gametes independently of those of the other. The probability is then calculated for each gene and the results are multiplied. In the cross AaBb × AaBb, for example, the probability of an aaBb child is $P(\mathrm{aa})\cdot P(\mathrm{Bb})=\dfrac14\cdot\dfrac12=\dfrac18$.

These probabilities hold for each single child and do not depend on the children already born. An Aa × Aa couple with three children of dominant phenotype still has probability $\dfrac14$ of having a fourth child who is aa. Ratios such as 3 to 1 are observed only over a large number of offspring.
:::

## Dominance and interactions between genes

:::definizione{#dominanza-ab0 titolo="Multiple alleles and the ABO system"}
In the dominance described so far, called complete, the heterozygote has the same phenotype as one homozygote. There are two other cases.

- In **incomplete dominance** the heterozygote has an intermediate phenotype. In the snapdragon the cross between a red-flowered plant and a white-flowered plant gives pink-flowered plants.
- In **codominance** the heterozygote shows both phenotypes together.

In these two cases, in the cross between two heterozygotes the genotypes still have probabilities $\dfrac14$, $\dfrac12$ and $\dfrac14$. Because the heterozygote can be told apart, there are three phenotypes in the ratio 1 to 2 to 1.

The **ABO blood group** system combines dominance, codominance and **multiple alleles**, that is, a gene with more than two alleles in the population. The gene has three alleles, $I^A$, $I^B$ and $i$. The allele $I^A$ makes a molecule called antigen A appear on red blood cells, the allele $I^B$ antigen B, and the allele $i$ neither. $I^A$ and $I^B$ are codominant with each other and both dominant over $i$. Each person has two of the three alleles.

| Genotype | Blood group |
|---|---|
| $I^AI^A$ or $I^Ai$ | A |
| $I^BI^B$ or $I^Bi$ | B |
| $I^AI^B$ | AB |
| $ii$ | O |

A group A parent and a group B parent, for example, have a group O child. The child is $ii$, so it received an $i$ allele from each parent. The parents are therefore $I^Ai$ and $I^Bi$. Their children have the four groups AB, A, B and O with probability $\dfrac14$ each. A group AB parent, by contrast, does not have the $i$ allele and has no group O children.
:::

:::definizione{#epistasi-pleiotropia titolo="One pathway, several loci"}
So far each gene controlled a single characteristic. There are two more complex situations.

In **pleiotropy** a single gene influences several characteristics. In cystic fibrosis, for example, the mutation of a single gene alters the lungs, the pancreas and the sweat glands.

In **epistasis** two genes influence the same characteristic, and the genotype of one gene masks the effect of the other. The classic example is coat colour in some animals. Gene A is needed to produce pigment: with at least one A allele the pigment is present, with aa it is missing. Gene B determines the colour of the pigment: with at least one B allele it is black, with bb it is brown. An aa animal is white whatever its genotype for B, because without pigment there is no colour to determine.

In the cross AaBb × AaBb, with the two genes on different chromosomes, the probabilities are calculated by multiplying.

- Black (at least one A and at least one B): $\dfrac34\cdot\dfrac34=\dfrac9{16}$.
- Brown (at least one A and bb): $\dfrac34\cdot\dfrac14=\dfrac3{16}$.
- White (aa, with any B): $\dfrac14\cdot 1=\dfrac4{16}$.

The ratio of phenotypes is 9 to 3 to 4, in place of the 9 to 3 to 3 to 1 obtained with two genes controlling different characteristics. The sum is $\dfrac{9+3+4}{16}=1$.

![Grouping of classes in recessive epistasis](/figure/biologia-semestre-filtro/genetica-mutazioni/epistasi-en.svg)

In the figure the underscore stands for any allele. The notation A_B_ therefore includes AABB, AaBB, AABb and AaBb, and the notation aa__ includes aaBB, aaBb and aabb. Epistasis changes the way genotypes are grouped into phenotypes. The alleles of the two genes are still distributed into the gametes independently.
:::

## Linkage, crossing over and maps

:::definizione{#associazione titolo="From chromosome phase to recombinants"}
Independent assortment holds for genes lying on different chromosomes. Two genes lying on the same chromosome are said to be **linked**, and their alleles tend to pass together into the same gamete, because they travel on the same DNA molecule.

For two linked genes writing the genotype AaBb is not enough. It must be stated which alleles lie on the same chromosome, and this information is called **phase**. It is written with a slash separating the two homologous chromosomes.

- In AB/ab one chromosome carries A and B, and the homologue carries a and b.
- In Ab/aB one chromosome carries A and b, and the homologue carries a and B.

Gametes that receive an unchanged chromosome are called **parental**. For AB/ab they are AB and ab.

The alleles of two linked genes are separated by **crossing over**. At the start of meiosis the two homologous chromosomes pair and exchange corresponding stretches. If the exchange occurs in the stretch between the two genes, chromosomes with new combinations of alleles are formed. Gametes that receive them are called **recombinant**. For AB/ab they are Ab and aB.

![Coupling phase and gamete classes with 20 percent recombination](/figure/biologia-semestre-filtro/genetica-mutazioni/linkage-en.svg)

The **recombination frequency**, written $r$, is the fraction of recombinant gametes out of the total. It is measured with a testcross, in which the AB/ab individual is crossed with an ab/ab individual. The latter produces only ab gametes, so the phenotype of each child directly reveals which gamete it received from the other parent. The recombinant offspring are counted and divided by the total offspring:

$$
r=\frac{R}{N}.
$$

In the formula $R$ is the number of recombinant offspring and $N$ the total number of offspring. If 200 out of 1000 offspring are recombinant, $r=\dfrac{200}{1000}=0.20$, that is, 20%. The two types of recombinant are equally frequent, and the same holds for the two parental types. The four classes of gamete therefore have the following frequencies.

- Ab and aB (recombinant): $\dfrac{r}{2}=0.10$ each.
- AB and ab (parental): $\dfrac{1-r}{2}=0.40$ each.

The further apart two genes are on the chromosome, the more likely it is that a crossover falls between them, so $r$ is larger. The recombination frequency therefore measures the distance between genes. The unit is the **centimorgan** (cM), and 1 cM corresponds to 1% recombination. Two genes with $r=0.20$ are about 20 cM apart. A map built with these distances is called a genetic map.

The recombination frequency does not exceed 50%. With $r=0.50$ the four classes of gamete all have frequency $0.25$, as for two genes on different chromosomes. Two genes very far apart on the same chromosome therefore behave like independent genes. For large distances, moreover, $r$ underestimates the distance, because two crossovers in the same stretch return the alleles to the parental combination and are not counted.
:::

## Penetrance, environment and parental origin

:::definizione{#penetranza-imprinting titolo="A genotype present and a trait observed"}
The same genotype does not always produce the same phenotype. Two measures describe this variability.

- **Penetrance** is the fraction of individuals with a given genotype who show the corresponding phenotype. If 80 people out of 100 who carry a disease allele are ill, penetrance is $\dfrac{80}{100}=80\%$. Penetrance is complete if it is 100% and incomplete if it is lower.
- **Expressivity** is the degree to which the phenotype is shown in those who show it. Two people with the same allele have, for example, a mild form and a severe form of the same disease.

Penetrance enters calculations as an extra factor. One parent is heterozygous for a dominant disease allele with 80% penetrance, and the other parent does not have it. The child receives the allele with probability $\dfrac12$. If it receives it, it becomes ill with probability $0.80$. The probability that the child is ill is therefore $\dfrac12\cdot 0.80=0.40$.

Many characteristics, such as height or blood pressure, are **polygenic**, that is, they depend on many genes together and also on the environment. They vary continuously in the population and do not follow Mendel's ratios.

**Genomic imprinting** is an exception to the rule that the two alleles of a gene work in the same way. For about a hundred human genes only the allele received from one parent is active, and the other is switched off by an epigenetic mark (DNA methylation). In some of these genes the allele of maternal origin is switched off, in others the one of paternal origin. The mark is erased and rewritten in each generation, during gamete formation, according to the sex of the individual producing them. An allele that a woman received from her father, for example, carried the paternal mark. When the woman passes it to a child, the allele carries the maternal mark.

![Parental origin and the expressed allele in an imprinting model](/figure/biologia-semestre-filtro/genetica-mutazioni/imprinting-en.svg)

In an imprinted gene the effect of a mutation depends on which parent transmits it. Consider a gene in which the maternal allele is switched off and only the paternal one is active. A mutation that inactivates the gene, if it comes from the father, hits the only active copy, and the child is left without the protein. The same mutation, if it comes from the mother, hits the copy that is already switched off and has no effect. Imprinting concerns nuclear genes and is a different phenomenon from the inheritance of mitochondria, described below.
:::

## Chromosome number and structure

:::definizione{#cariotipo titolo="Karyotype and observational resolution"}
The **karyotype** is the set of chromosomes of a cell, arranged by size and shape. It is obtained by photographing under the microscope the chromosomes of a dividing cell. The normal human karyotype has 46 chromosomes: 22 pairs of **autosomes**, the same in both sexes, and one pair of **sex chromosomes**, XX in females and XY in males. In the dividing cell each chromosome consists of two sister chromatids, so there are 46 chromosomes and 92 DNA molecules.

Alterations in chromosome **number** are of two types.

- In **polyploidy** the cell has more than two complete sets, for example three ($3n$, triploidy).
- In **aneuploidy** there is a single chromosome too many or too few. One extra chromosome is a **trisomy**, one missing is a **monosomy**. Down syndrome is trisomy of chromosome 21, and the person has 47 chromosomes.

Aneuploidy arises from an error of meiosis called **nondisjunction**, in which two chromosomes that should have separated go to the same cell. The consequences depend on the division in which it occurs.

- In **meiosis I** the two homologues fail to separate. All four gametes are abnormal: two have an extra chromosome and two have one missing.
- In **meiosis II** the two sister chromatids fail to separate in one of the two cells. Two gametes are normal, one has an extra chromosome and one has one missing.

Alterations in **structure** concern a stretch of chromosome.

- A **deletion** is the loss of a stretch. The genes of that stretch remain in a single copy.
- A **duplication** is the repetition of a stretch. The genes of that stretch are present in three copies.
- An **inversion** is a stretch rotated by 180 degrees. It is called pericentric if the stretch includes the centromere and paracentric if it does not.
- A **translocation** is the transfer of a stretch to another chromosome. If the two chromosomes exchange stretches without loss of material, the translocation is **balanced**.

A carrier of an inversion or a balanced translocation has all genes in the normal number and is usually healthy. During meiosis, however, the carrier also produces gametes with extra or missing stretches, so there is a greater risk of miscarriage and of children with abnormalities. Direct harm occurs only if the breakpoint falls inside a gene.

The karyotype shows large alterations, that is, those involving at least a few million base pairs. A single-base mutation does not change the appearance of the chromosome and is detected only by reading the DNA sequence. A normal karyotype therefore rules out large chromosomal abnormalities and not mutations of single genes.
:::

## Deductions from pedigrees

:::definizione{#pedigree titolo="Transmission and model assumptions"}
A **pedigree** is the diagram of a family in which those who show a characteristic, usually a disease, are marked. Squares are males and circles are females. A filled symbol indicates an affected person and an empty symbol an unaffected person. A horizontal line joins two parents and the children descend from it. The **mode of inheritance** of the disease is worked out from the pedigree, by comparing what is observed with what each model predicts.

![Pedigree compatible with autosomal recessive transmission](/figure/biologia-semestre-filtro/genetica-mutazioni/pedigree-en.svg)

The main models are recognised by the following signs.

**Autosomal recessive.** The disease appears only in those who have two altered alleles (aa). The typical sign is an affected child with two healthy parents. Both parents are heterozygous (Aa) and are called **healthy carriers**. Each of their children has probability $\dfrac14$ of being affected. A healthy sibling of an affected person is a carrier with probability $\dfrac23$, as calculated above. The disease affects males and females equally and often skips generations.

**Autosomal dominant.** One altered allele is enough. Each affected person generally has an affected parent, and the disease appears in all generations. An affected heterozygous person (Aa) with a healthy partner (aa) has each child affected with probability $\dfrac12$. If penetrance is incomplete, a person with the allele appears healthy and the disease seems to skip a generation.

**X-linked recessive.** The gene lies on the X chromosome. A male has a single X, so one altered allele is enough to make him affected. A female has two X chromosomes and is affected only with two altered alleles. With one altered allele she is a healthy carrier. There are three signs.

- Those affected are almost all males.
- An affected father does not pass the disease to his sons, because he gives sons the Y chromosome. He passes the altered X to all his daughters, who are carriers.
- A carrier mother has each son affected with probability $\dfrac12$ and each daughter a carrier with probability $\dfrac12$.

If the sex of the unborn child is not known, the probability that a carrier mother and a healthy father have a child who is male and affected is $\dfrac12\cdot\dfrac12=\dfrac14$.

**X-linked dominant.** An affected father has all daughters affected and no sons affected. An affected heterozygous mother has each child, male or female, affected with probability $\dfrac12$.

**Y-linked.** The characteristic passes from father to all sons and never appears in females.

**Mitochondrial.** The gene lies in the DNA of mitochondria, which an embryo receives only from the egg cell. An affected mother passes the disease to all her children, male and female. An affected father passes it to none. Each cell contains hundreds of mitochondria, and often only part of them carries the mutation. This mixture is called **heteroplasmy**. The proportion of mutant mitochondria changes from one child to another and from one tissue to another, so the severity of the disease is very variable.

A pedigree with few people is often compatible with more than one model. In that case the pedigree allows some models to be ruled out, and choosing among the remaining ones requires other data, for example DNA analysis.
:::
