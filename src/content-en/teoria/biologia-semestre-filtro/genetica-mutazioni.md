---
titolo: "Mutations, inheritance and traits"
sommario: "From a change in DNA to phenotype: repair, crosses, probability, genetic maps, chromosome abnormalities and reasoned pedigree analysis."
---

## Changes in DNA and their consequences

:::definizione{#mutazioni titolo="Sequence, product and cell lineage"}
A **mutation** is a stable change in the DNA sequence. Its effect is described by comparing three levels: the altered sequence, the gene product and the observable trait. A substitution changes one base; an insertion adds nucleotides; a deletion removes them. The position of the variant determines which steps may be affected.

Within a translated sequence, a substitution may be synonymous if it preserves the amino acid, missense if it changes it, or nonsense if it introduces a premature stop. The degeneracy of the code explains why different codons can specify the same amino acid. The term *synonymous* describes this level: a synonymous variant may still affect splicing or RNA stability. Sequence classification alone therefore leaves the functional assessment open.

The ribosome reads consecutive triplets in the frame established at translation initiation. An insertion or deletion within the translated region causes a **frameshift** when its length is not a multiple of three. From that point onward, the grouping of nucleotides changes and a stop may appear. A three-base deletion preserves the downstream frame; it may still remove an indispensable amino acid. If it spans the boundary between two codons, it may also change an amino acid near the junction.

![Reading frame before and after deletion of one base](/figure/biologia-semestre-filtro/genetica-mutazioni/cornice-en.svg)

Promoter variants can alter the amount of transcript; splice-site variants can change the exons present in mature RNA. A repeat expansion can alter the protein, regulation or RNA toxicity, depending on the locus. Some repeat-expansion disorders show anticipation: in successive generations the trait may appear earlier or become more severe, in relation to repeat instability.

A somatic variant spreads to the descendants of that cell and can produce mosaicism. Transmission to the next generation instead requires involvement of the germ line. Its effect on health depends on function, dosage, tissue and environment: the number of changed bases alone does not measure severity.
:::

## Damage, repair and genome stability

:::definizione{#riparazione titolo="Identify the problem before the pathway"}
**DNA damage** is a chemical or structural alteration, such as an oxidized base or a break. It may be removed before it becomes a heritable sequence change. Polymerase proofreading corrects many errors during synthesis; mismatch repair recognizes mismatched pairs and small slippage errors that escape this first correction.

In base excision repair, a glycosylase recognizes an altered base and breaks its bond to the sugar. Other enzymes process the base-free site, synthesize the missing tract using the opposite strand and seal the interruption. Nucleotide excision repair removes a short tract around a helix-distorting lesion, such as many UV photoproducts. In both cases, complementarity supplies the information needed to rewrite the tract.

![Types of lesion and repair pathways](/figure/biologia-semestre-filtro/genetica-mutazioni/riparazione-en.svg)

A double-strand break interrupts both strands. Homologous recombination can use the sister chromatid as a template; its availability after replication makes this pathway particularly suitable in S and G2 phases. End joining can reconnect ends without an extended homologous template. If the ends require processing, the product may contain insertions or deletions. Joining compatible ends can also restore the sequence exactly.

Interpreting an experiment requires separating the initial lesion from the observed outcome. A UV-exposed cell with reduced nucleotide excision retains more photoproducts, whereas a mismatch repair defect favors persistence of pairing errors. No pathway guarantees that every event is corrected without consequences; genome stability results from several coordinated safeguards.
:::

## Alleles and segregation

:::definizione{#alleli titolo="Locus, genotype and phenotype"}
A **locus** is a position or region in the genome; alleles are its variants. In a diploid organism, an autosomal locus normally has two copies, one on each homologous chromosome. A genotype with two identical alleles is homozygous; one with different alleles is heterozygous. The set of alleles considered constitutes the genotype, whereas the phenotype is the trait observed under the specified conditions.

Two different variants of the same gene may lie on the two homologous copies, *in trans*, or on the same copy, *in cis*. In compound heterozygosity, the two variants are in trans. This distinction matters for a recessive function: two impaired copies and just one impaired copy can produce different outcomes. Determining variant phase requires additional family or molecular data.

Dominance concerns the heterozygote's phenotype. A dominant allele may be rare or common; the uppercase letter used in exercises does not express frequency, benefit or severity. The relationship can differ with the level observed, such as enzyme activity or an organismal trait. One intact copy may supply enough product, making loss of function recessive. A mutant product interfering with the normal product can instead exert a dominant-negative effect, for example within a subunit complex. A gain-of-function variant may confer activity under conditions where the ordinary protein is inactive.
:::

:::definizione{#mendel titolo="From gametes to probabilities"}
Allelic copies segregate during meiosis. In the Mendelian model, an Aa individual produces A and a gametes with probability $\dfrac12$ each. With random fertilization, the two parents' gametes combine independently. In the Aa × Aa cross, the probability of AA is therefore $\dfrac12\cdot\dfrac12=\dfrac14$. Aa arises in two mutually exclusive ways, maternal A with paternal a or maternal a with paternal A; their probabilities add to $\dfrac12$.

![Punnett square for two heterozygotes](/figure/biologia-semestre-filtro/genetica-mutazioni/punnett-en.svg)

With complete dominance and complete penetrance, AA and Aa share the dominant phenotype, whose probability is $\dfrac34$. If a child is already known to have the dominant phenotype, aa is excluded and the remaining outcomes are renormalized. Denoting that phenotype by D:

$$
P(\mathrm{Aa}\mid D)=\frac{P(\mathrm{Aa})}{P(D)}
=\frac{\frac12}{\frac34}=\frac23.
$$

For independently assorting loci, the probabilities for the individual loci are multiplied. In AaBb × AaBb, $P(\mathrm{aaBb})=\dfrac14\cdot\dfrac12=\dfrac18$. Ratios describe expectations across many observations. A family with four children can have four identical genotypes; each new fertilization retains the model's probabilities, independently of previous children.
:::

## Dominance and interactions between genes

:::definizione{#dominanza-ab0 titolo="Multiple alleles and the ABO system"}
With **incomplete dominance**, the heterozygote has an intermediate value for the trait considered. With codominance, both allelic contributions are recognizable. The one-to-two-to-one genotypic ratio of a cross between heterozygotes still holds; what changes is the grouping of genotypes into phenotypic classes.

In the classical ABO model, $I^A$ and $I^B$ produce activities that determine different antigens, whereas $i$ is recessive to both. $I^AI^B$ gives group AB; $I^Ai$ gives group A; $I^Bi$ gives group B; $ii$ gives group O. The problems here assume ordinary antigen expression, without rare phenotypes such as Bombay.

A group A parent and a group B parent can have a group O child if both transmit i. The parental genotypes are therefore $I^Ai$ and $I^Bi$; the four combinations AB, A, B and O have equal probabilities. An AB parent, in contrast, produces $I^A$ or $I^B$ gametes and cannot supply i in the stated model. Three alleles in the population remain compatible with two copies per diploid individual.
:::

:::definizione{#epistasi-pleiotropia titolo="One pathway, several loci"}
**Pleiotropy** occurs when one gene influences several traits. Epistasis concerns interaction between loci: the genotype at one locus modifies another locus's phenotypic effect. Deriving a ratio requires knowing the functional relationship.

Consider a pathway in which A enables production of a colored precursor and B changes its color. Genotype aa blocks production of the precursor regardless of B. With independent loci and complete dominance within each locus, AaBb × AaBb yields $\dfrac9{16}$ A_B_, $\dfrac3{16}$ A_bb and $\dfrac4{16}$ aa__. Their sum is one and the phenotypic ratio is nine to three to four.

![Grouping of classes in recessive epistasis](/figure/biologia-semestre-filtro/genetica-mutazioni/epistasi-en.svg)

An underscore means that the other allele may have any compatible value. The aa__ group combines aaBB, aaBb and aabb because they all block the same step. Independent assortment of alleles still holds when the gene products interact.
:::

## Linkage, crossing over and maps

:::definizione{#associazione titolo="From chromosome phase to recombinants"}
Loci on the same chromosome may be **linked**: some allele combinations are transmitted together more often than independence predicts. Phase specifies which alleles lie on the same homolog. In AB/ab, the parental combinations are AB and ab; in Ab/aB, they are Ab and aB. The notation AaBb alone omits this information.

Crossing over takes place between nonsister chromatids of paired homologs during prophase I. A single exchange in the interval between the two loci changes two of the four chromatids. Which product is recognized as recombinant therefore depends on the exchange position and the initial phase.

![Coupling phase and gamete classes with 20 percent recombination](/figure/biologia-semestre-filtro/genetica-mutazioni/linkage-en.svg)

In the AB/ab × ab/ab testcross, the recessive parent produces only ab gametes. The offspring genotype therefore identifies the double heterozygote's gamete. With recombination frequency $r=0{,}20$, in a model with equally viable reciprocal classes, each recombinant class has probability $\dfrac r2=0{,}10$ and each parental class has probability $\dfrac{1-r}{2}=0{,}40$.

$$
r=\frac{R}{N}.
$$

Here R counts recombinants and N counts all observed offspring. With complete linkage, in a model with no recombination in the interval, AB/ab produces only AB and ab. With incomplete linkage, Ab and aB also appear, with a combined frequency below 50%. The classification concerns the behavior of the two markers in the meioses considered.

For short intervals, 1% recombination corresponds approximately to one centimorgan. Multiple exchanges may restore the parental combination between the outer markers, so a two-locus count underestimates long distances. The model's maximum expected frequency is 50%; a value near this limit is compatible both with different chromosomes and with distant loci on the same chromosome. Physical distances in bases require different information from recombination maps.
:::

## Penetrance, environment and parental origin

:::definizione{#penetranza-imprinting titolo="A genotype present and a trait observed"}
**Penetrance** is the proportion of individuals with a defined genotype who show a defined phenotype, at the age and under the conditions considered. If 80 of 100 carriers show the trait, observed penetrance is 80%. Expressivity describes the degree and form of the trait in those who express it. The same penetrance may accompany highly variable expressivity.

For a heterozygote with an autosomal dominant variant, the probability of transmitting the variant to a child remains $\dfrac12$ in the Mendelian model. If the child's genotype has 80% penetrance, the partner is a noncarrier and the phenotype is absent in noncarriers, the probability of manifestation is $\dfrac12\cdot0{,}80=0{,}40$. The penetrance factor concerns expression after inheritance of the variant.

Polygenic traits depend on several loci, often together with environmental factors. A continuous distribution, for example of a measured value, does not imply one unique Mendelian ratio. Even for a monogenic trait, age, modifier genes and environment can alter expression.

In **genomic imprinting**, expression depends on an allele's maternal or paternal origin. Epigenetic marks are erased and re-established in the germ line according to the sex of the individual producing the gametes. A variant transmitted by a woman therefore has maternal origin in her child, even when that woman inherited it from her father.

![Parental origin and the expressed allele in an imprinting model](/figure/biologia-semestre-filtro/genetica-mutazioni/imprinting-en.svg)

In a model with a silenced maternal allele, an inactivating variant in the paternal copy may impair function because it affects the expressed copy. The same gene follows the opposite model if the paternal copy is silenced. The assumption must therefore identify the active copy. Mitochondrial inheritance and imprinting describe distinct mechanisms.
:::

## Chromosome number and structure

:::definizione{#cariotipo titolo="Karyotype and observational resolution"}
A **karyotype** describes chromosome number and morphology. A typical human somatic cell has 46 chromosomes. After S phase, each comprises two joined sister chromatids; before their separation, the count remains 46 chromosomes, whereas there are 92 nuclear DNA molecules. Homologs have the same loci; sisters result from replication of one copy.

Euploidy concerns whole multiples of the haploid set; polyploidy includes more than two complete sets. Aneuploidy instead involves an excess or deficit of individual chromosomes. Free trisomy 21 contains three chromosomes 21 and usually 47 chromosomes in total. Trisomy describes the dosage of the material considered: translocation forms require a description of the rearrangement and may have a different total number.

Nondisjunction is a failure of separation. In meiosis I it concerns homologs; in meiosis II, sister chromatids. A single event in meiosis I produces four aneuploid products for the affected chromosome. With a single event in one of the two meiosis II cells, two products remain normal, one has an extra copy and one lacks a copy.

A chromosomal insertion introduces a segment at a new position; dosage depends on whether the segment was moved or copied. A paracentric inversion excludes the centromere, whereas a pericentric inversion includes it. Banding compares band order, making many sufficiently large rearrangements recognizable.

A deletion reduces a segment's dosage, a duplication increases it, and an inversion changes its orientation. A translocation transfers material between chromosomes; a balanced rearrangement has no net imbalance detectable at the resolution considered. Gene disruption, position effects and production of unbalanced gametes remain possible.

Banding karyotypes detect sufficiently large abnormalities. A single-base substitution may leave the chromosome image unchanged; studying it requires sequence analysis. A normal result must therefore be interpreted together with the type of alteration the method can observe.
:::

## Deductions from pedigrees

:::definizione{#pedigree titolo="Transmission and model assumptions"}
A **pedigree** records family relationships, sex and phenotype. Squares and circles denote males and females, respectively, in the convention used; shading marks the defined trait. Interpretation compares the data with explicit models of penetrance, allele frequency and possible new mutations.

![Pedigree compatible with autosomal recessive transmission](/figure/biologia-semestre-filtro/genetica-mutazioni/pedigree-en.svg)

With autosomal recessive inheritance and complete penetrance, two unaffected parents with an aa child are both Aa if new mutations are excluded. An unaffected sibling has a $\dfrac23$ probability of being a carrier. With autosomal dominant inheritance, an Aa parent and an aa parent produce half their offspring with the variant; with incomplete penetrance, a carrier may also appear unaffected.

In the X-linked model, a father transmits X to his daughters and Y to his sons. A father with an X variant therefore transmits it to all daughters and to no sons through his own X. For a heterozygous carrier mother of an X-linked recessive trait and an unaffected father, half the sons are expected to be affected. A probability referring to a pregnancy of unknown sex also requires the $\dfrac12$ sex factor if the two sexes are assumed equally likely.

For an X-linked dominant trait with complete penetrance, an affected father and a noncarrier mother have all daughters affected and all sons unaffected. A heterozygous mother can instead transmit the variant to half the children of each sex. These are sex-conditional probabilities, obtained by following each parent's chromosome separately. Absence of father-to-son transmission is consistent with X linkage, but alone does not demonstrate that model in a small family.

A Y-linked trait follows the male line. Mitochondrial DNA is typically transmitted by the mother; the mixture of normal and variant molecules, called heteroplasmy, may differ among tissues and children. Crossing functional thresholds contributes to variation in manifestation. A small pedigree may fit several models: familial recurrence suggests hypotheses, whereas demonstration requires further evidence.
:::
