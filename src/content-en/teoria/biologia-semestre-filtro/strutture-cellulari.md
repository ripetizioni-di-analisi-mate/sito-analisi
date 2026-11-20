---
titolo: "Membranes, organelles, trafficking and cytoskeleton"
sommario: "From membrane selectivity to protein targeting: transport, energy, degradation and cellular movement explained through mechanisms and experiments."
---

## Membranes and compartments

:::definizione{#membrane titolo="Bilayer, fluidity and asymmetry"}
A **biological membrane** is a thin sheet, made of lipids and proteins, that separates two watery environments. The plasma membrane separates the inside of the cell from the outside, and internal membranes enclose the organelles. Its basis is a **phospholipid bilayer**. Each phospholipid has a polar head, attracted to water, and two hydrophobic tails. In the bilayer the heads lie on the two faces, in contact with water, and the tails lie inside.

The hydrophobic interior decides what crosses the membrane. A small nonpolar molecule, such as oxygen or carbon dioxide, crosses it easily. An ion, such as Na⁺, is surrounded by water molecules and does not enter a hydrophobic environment, so it does not pass. For this reason the membrane is a **selective barrier** and the cell maintains internal concentrations different from the external ones. Substances that do not cross the bilayer pass through proteins embedded in the membrane. Other membrane proteins serve to adhere to other cells and to receive signals.

The **fluid mosaic** model describes the membrane as a two-dimensional liquid. Lipids and proteins move sideways in the plane of the membrane, while passage from one face to the other is rare. Fluidity depends on composition.

- Fatty acid tails that are short, or that have double bonds bending them (unsaturated), pack poorly together, so the membrane is more fluid.
- Long saturated tails pack well, so the membrane is more rigid.
- Cholesterol dampens the variations. At high temperature it restrains the movement of phospholipids, at low temperature it prevents them from packing tightly.

Some proteins do not move freely, because they are anchored to the cytoskeleton or to junctions between cells.

The two halves of the bilayer are called **leaflets** and have different compositions. This difference is called asymmetry. Enzymes called **flippases** maintain it by moving specific lipids from one leaflet to the other with consumption of ATP (adenosine triphosphate, the molecule that supplies energy to cellular reactions). **Scramblases**, when activated, redistribute them between the two leaflets. Phosphatidylserine, for example, normally lies on the leaflet facing the cytosol. When a cell dies by apoptosis, phosphatidylserine appears on the outer leaflet, and macrophages recognise it as a signal to remove the cell. Sugars attached to proteins (glycoproteins) and to lipids (glycolipids) face only the outside of the cell. Together they form the **glycocalyx**, a layer that protects the surface and takes part in recognition and adhesion between cells.

![Polar heads, hydrophobic tails and a transmembrane protein](/figure/biologia-semestre-filtro/strutture-cellulari/membrana-en.svg)
:::

:::esempio{titolo="Tracking a fluorescent protein"}
In a living cell the membrane proteins are labelled with a fluorescent substance. A laser permanently switches off the fluorescence in a small area of the membrane, which becomes dark. In the following seconds the fluorescence in that area is measured. If the area becomes bright again, proteins that are still fluorescent have entered from neighbouring regions, so the proteins move sideways in the membrane. If the fluorescence returns only in part, a fraction of the proteins is immobile, for example because it is anchored to the cytoskeleton. This experiment is called **FRAP** (fluorescence recovery after photobleaching). It measures lateral movement and gives no information about passage from one leaflet to the other.
:::

## Transport, water and electricity

:::definizione{#trasporti titolo="Gradients, channels and carriers"}
A dissolved substance moves spontaneously from the region where it is more concentrated to the one where it is less concentrated. The difference in concentration between the two sides of a membrane is called the **concentration gradient**. For an ion, charge also matters. The inside of the cell is negative relative to the outside, so a positive ion is attracted inwards and a negative one is repelled. The sum of the two effects, concentration and charge, is called the **electrochemical gradient** and sets the direction in which the ion moves spontaneously.

**Passive** transport goes down the gradient and consumes no energy. It has two forms.

- In **simple diffusion** the substance crosses the bilayer directly. This is the case for oxygen and carbon dioxide.
- In **facilitated diffusion** the substance passes through a protein. A **channel** is a pore that lets one type of ion through. A **transporter** binds the substance on one side, changes shape and releases it on the other side.

Transporters are limited in number. When all of them are occupied, the transport rate no longer increases, even if the concentration of the substance rises. This behaviour is called **saturation**.

**Active** transport moves a substance against its gradient and requires energy. It has two forms.

- In **primary** active transport a protein, called a **pump**, uses ATP directly. In each cycle the sodium-potassium pump (Na⁺/K⁺-ATPase) consumes one ATP, moves three Na⁺ out and moves two K⁺ in. In each cycle, therefore, one more positive charge leaves than enters.
- In **secondary** active transport the energy comes from the gradient of another ion. The pump keeps Na⁺ more concentrated outside than inside. The Na⁺-glucose cotransporter lets Na⁺ flow back in down its gradient and at the same time brings glucose in against its gradient. ATP is consumed by the pump, which rebuilds the sodium gradient.

**ABC proteins** are a family of membrane proteins that bind ATP. Most are pumps. The exception is **CFTR**, the protein altered in cystic fibrosis, which is a channel for negative ions, mainly chloride and bicarbonate. In CFTR, phosphorylation and ATP binding serve to open the channel. Once it is open, ions cross it down their own electrochemical gradient, so the transport is passive.

![Sodium-potassium pump and glucose cotransport](/figure/biologia-semestre-filtro/strutture-cellulari/trasporto-en.svg)
:::

:::definizione{#osmosi-potenziali titolo="Tonicity and membrane potential"}
**Osmosis** is the passage of water across a membrane that lets water through and holds back solutes. Water moves towards the side where solutes are more concentrated, and the movement tends to make the two concentrations equal. The total concentration of solutes is called osmolarity and is measured in mOsm/L. Water crosses the membrane partly directly and mostly through channels called **aquaporins**, which let water through and not ions.

**Tonicity** describes the effect of a solution on the volume of a cell immersed in it. Only solutes that do not cross the membrane are considered.

- In an **isotonic** solution the cell volume does not change.
- In a **hypotonic** solution, less concentrated than the inside, water enters and the cell swells.
- In a **hypertonic** solution, more concentrated than the inside, water leaves and the cell shrinks.

The final volume is calculated with a simple model. If the amount of solute inside the cell stays constant, the product of concentration and volume stays constant, so $C_iV_i=C_fV_f$. A cell at $300\,\mathrm{mOsm/L}$ is immersed in a $200\,\mathrm{mOsm/L}$ solution of solutes that do not enter. Water enters until the internal concentration falls to $200\,\mathrm{mOsm/L}$, so $V_f=\dfrac{300}{200}V_i=1.5\,V_i$. The volume increases by half. The model holds for an ideal cell. A real cell regulates its volume and, if it swells too much, it bursts (lysis).

A solute that crosses the membrane does not count towards tonicity. A $300\,\mathrm{mOsm/L}$ urea solution has the same osmolarity as the cell, but urea enters the cell and water follows it, so the cell swells.

The **membrane potential** is the difference in electric charge between the inside and the outside of the cell. At rest the inside is negative, about $-70\,\mathrm{mV}$ in a neuron. The potential has two origins. The sodium-potassium pump keeps K⁺ concentrated inside and Na⁺ concentrated outside. At rest mainly K⁺ channels are open, so a little K⁺ leaves down its gradient and leaves an excess of negative charges inside. The ions that move are a tiny fraction of the total.

In a neuron the potential changes rapidly during the **action potential**, in two phases.

1. Voltage-sensitive Na⁺ channels open. Na⁺ enters and the inside becomes positive. This phase is **depolarisation**.
2. The Na⁺ channels inactivate and K⁺ channels open. K⁺ leaves and the inside becomes negative again. This phase is **repolarisation**.

The rapid changes therefore depend on channels. The pump works slowly and maintains over time the gradients that the channels exploit.
:::

## Nucleus and targeting

:::definizione{#nucleo-ran titolo="Nuclear pores and Ran directionality"}
The **nucleus** contains the DNA (deoxyribonucleic acid) of the cell. It is bounded by the **nuclear envelope**, made of two membranes. The outer membrane is continuous with the endoplasmic reticulum. The two membranes join around the **nuclear pores**, large complexes of proteins called nucleoporins, which are the only passages between nucleus and cytosol. Small molecules cross the pore by diffusion. Large molecules, such as proteins and RNA (ribonucleic acid), cross it only when accompanied by a transport receptor.

Inside the nucleus lies the **nucleolus**, a region without a membrane where the cell produces ribosomal RNAs and begins to assemble the ribosomal subunits.

A protein enters the nucleus if its sequence contains a **nuclear localisation signal (NLS)**, that is, a short stretch of amino acids. The receptor that recognises the NLS is called an **importin**. The direction of transport is set by a small protein, **Ran**, which exists in two forms: bound to GTP (Ran-GTP) or to GDP (Ran-GDP). GTP (guanosine triphosphate) is a molecule similar to ATP, and GDP (guanosine diphosphate) is GTP that has lost one phosphate group. The nucleus contains the enzyme RanGEF, which loads Ran with GTP, so Ran-GTP prevails in the nucleus. The cytosol contains the enzyme RanGAP, which makes Ran hydrolyse GTP, so Ran-GDP prevails in the cytosol. Import takes place in three steps.

1. In the cytosol the importin binds the protein carrying the NLS.
2. The complex crosses the pore.
3. In the nucleus Ran-GTP binds the importin, which releases the protein.

Export works as a mirror image. The protein to be exported has a **nuclear export signal (NES)**, recognised by a receptor called an **exportin**. In the nucleus the exportin binds the protein only together with Ran-GTP. The complex crosses the pore and in the cytosol GTP is hydrolysed, so the complex comes apart and the protein is released. Importins and exportins then return and are reused. The NLS is not cut off after entry. At the end of cell division, when the nucleus re-forms, the same protein re-enters thanks to the same signal.

The cell regulates entry into the nucleus by hiding or exposing the signal. The transcription factor NF-κB, for example, stays in the cytosol because it is bound to an inhibitor, IκB, which covers its NLS. A stimulus causes IκB to be degraded, the NLS becomes accessible and NF-κB enters the nucleus. Most mRNAs (messenger RNAs) leave the nucleus with a different receptor (NXF1-NXT1), which does not depend on Ran.

![Ran-dependent nuclear import and export](/figure/biologia-semestre-filtro/strutture-cellulari/ran-en.svg)
:::

:::esempio{titolo="Necessity and sufficiency of a signal"}
A large fluorescent protein with no signals stays in the cytosol. An NLS is added to its sequence and the protein accumulates in the nucleus. The NLS alone is therefore enough to bring a protein into the nucleus, that is, it is a **sufficient** signal. To find out whether the NLS of a natural nuclear protein is also **necessary**, the opposite test is carried out. The NLS is altered by a mutation and the protein is observed to see whether it stays in the cytosol. It is also checked that the mutant protein is still correctly folded, because a misfolded protein too might stay out of the nucleus, for a reason other than loss of the signal.
:::

## Mitochondria: energy and import

:::definizione{#mitocondri titolo="From glucose breakdown to the proton gradient"}
The **mitochondrion** is the organelle that produces most of the cell's ATP. It has two membranes, which enclose two spaces.

- The **outer membrane** contains wide channels, the porins, and lets small molecules through.
- The **intermembrane space** is the space between the two membranes.
- The **inner membrane** is folded into **cristae** and is impermeable to ions, including protons (H⁺).
- The **matrix** is the innermost space.

The breakdown of glucose begins in the cytosol with **glycolysis**, which converts one molecule of glucose into two of pyruvate and produces two ATP. Pyruvate enters the matrix and is converted into acetyl-CoA, which enters the **Krebs cycle** (tricarboxylic acid cycle). The cycle completes the breakdown to carbon dioxide. In these stages the electrons removed from glucose are loaded onto two electron carrier molecules, NADH (nicotinamide adenine dinucleotide) and FADH₂ (flavin adenine dinucleotide).

ATP is then formed in the inner membrane, in two steps.

1. NADH and FADH₂ give their electrons to the **respiratory chain**, a series of four protein complexes numbered I to IV. The electrons pass from one complex to the next and finally bind oxygen, which becomes water. The energy released is used by complexes I, III and IV to move protons from the matrix to the intermembrane space. Complex II transfers electrons without moving protons.
2. Protons accumulate in the intermembrane space and form a **proton gradient**. They return to the matrix through **ATP synthase**, an enzyme of the inner membrane that uses this flow to join ADP (adenosine diphosphate, that is, ATP with one phosphate group fewer) and phosphate into ATP.

The two steps together are called **oxidative phosphorylation**. Two types of substance alter it in different ways.

- An **uncoupler** makes the inner membrane permeable to protons. Protons return without passing through ATP synthase, so less ATP is produced. The respiratory chain keeps working, and in fact speeds up, and oxygen consumption increases.
- A **chain inhibitor**, such as cyanide, blocks the passage of electrons. Oxygen consumption and ATP production fall together.

The complete breakdown of one glucose molecule in the presence of oxygen yields about 30–32 molecules of ATP. Without oxygen only glycolysis remains, with two ATP. In this case pyruvate is converted into lactate. The reaction produces no ATP and serves to regenerate NAD⁺, that is, NADH that has given up its electrons, which glycolysis needs in order to continue.

The mitochondrion has its own DNA. In humans it encodes 13 proteins of oxidative phosphorylation and the RNAs needed to synthesise them in the mitochondrion. All other mitochondrial proteins are encoded by nuclear genes.

![Mitochondrial compartments and directions of proton movement](/figure/biologia-semestre-filtro/strutture-cellulari/mitocondrio-en.svg)
:::

:::definizione{#importazione-mitocondriale titolo="Signals, translocases and dynamics"}
The mitochondrial proteins encoded by the nucleus are built by cytosolic ribosomes and then imported. A protein destined for the matrix has at the start of its chain (amino-terminal end) a stretch of positively charged amino acids, called a **presequence**, which acts as a signal. Import takes place in four steps.

1. Proteins called **chaperones** keep the chain extended in the cytosol, because a folded chain does not pass.
2. The chain crosses the outer membrane through the **TOM** complex.
3. It crosses the inner membrane through the **TIM23** complex. The matrix is negative relative to the intermembrane space, so the positive presequence is drawn inwards. Matrix chaperones complete entry by consuming ATP.
4. In the matrix an enzyme cuts off the presequence and the protein folds.

A protein destined for the intermembrane space has, after the presequence, a second signal that stops it in the inner membrane. A cut then releases the protein into the intermembrane space.

Proteins destined for the mitochondrial membranes use other complexes, after passing through TOM.

- **TIM22** inserts into the inner membrane the carriers that span it several times.
- **SAM** inserts beta-barrel proteins, such as porins, into the outer membrane.
- **OXA** inserts into the inner membrane the proteins arriving from the matrix, including those encoded by mitochondrial DNA.

Almost all imported proteins pass through TOM, so a TOM defect affects almost all mitochondrial proteins. A defect in one of the other complexes affects only the group of proteins that uses it.

The mitochondria of a cell form a network that changes continuously. In **fusion** two mitochondria join: mitofusins join the outer membranes and OPA1 the inner ones. In **fission** one mitochondrion divides in two through the action of the protein DRP1. Fission serves to distribute mitochondria and to isolate a damaged part, which is then removed by a process called **mitophagy**.
:::

## Peroxisomes and targeting signals

:::definizione{#perossisomi titolo="Oxidation reactions and PTS import"}
**Peroxisomes** are small organelles with a single membrane, without DNA or ribosomes. All their proteins are built in the cytosol and then imported. They mainly carry out oxidation reactions. They break down, for example, very-long-chain fatty acids and take part in the synthesis of plasmalogens, lipids abundant in the sheath of nerves. These oxidations produce hydrogen peroxide ($\mathrm{H_2O_2}$), which is toxic. A peroxisomal enzyme, **catalase**, converts it into water and oxygen.

A protein enters the peroxisome if it has a signal called a **PTS** (peroxisomal targeting signal). There are two types.

- **PTS1** consists of the last three amino acids of the chain (carboxy-terminal end), often serine, lysine and leucine, abbreviated SKL. It is recognised by the receptor **PEX5**.
- **PTS2** lies near the start of the chain. It is recognised by the receptor **PEX7**.

The receptor accompanies the protein to the peroxisomal membrane, the protein enters and the receptor returns to the cytosol with consumption of ATP. The proteins that carry out these steps are called **peroxins** and their genes are denoted by the abbreviation PEX. Unlike the mitochondrion, the peroxisome imports proteins that are already folded.

New peroxisomes form by growth and division of existing ones. Part of their membrane comes from the endoplasmic reticulum.

PTS1 works only if it lies at the very end of the chain. If further amino acids are added after the SKL sequence, PEX5 no longer recognises it and the protein stays in the cytosol. Mutations in PEX genes cause the diseases of the **Zellweger spectrum**. In these diseases peroxisomes do not import their own proteins, so all their functions are missing together.
:::

## Reticulum, Golgi and maturation

:::definizione{#reticolo-golgi titolo="Entry into the secretory pathway and quality control"}
The **secretory pathway** is the route followed by proteins destined for the outside of the cell, the plasma membrane or the lysosomes. The stages are endoplasmic reticulum, Golgi apparatus and final destination. The **endoplasmic reticulum** is a network of membranes enclosing an internal space, called the **lumen**. The rough reticulum carries ribosomes on its surface. The smooth reticulum has none and produces lipids, stores calcium ions and, in the liver, neutralises toxic substances.

A protein of the secretory pathway enters the reticulum while it is being built, in four steps.

1. Synthesis begins on a free ribosome in the cytosol. The first amino acids of the chain form a hydrophobic **signal sequence**.
2. A particle called **SRP** (signal recognition particle) binds the signal sequence and brings the ribosome to the reticulum membrane.
3. The ribosome docks onto a channel in the membrane, the **translocon**, and the growing chain passes into the lumen.
4. An enzyme cuts off the signal sequence.

A membrane protein contains other hydrophobic stretches, which stop the passage and remain inserted in the bilayer. The number and position of these stretches determine which parts of the protein face the lumen and which face the cytosol.

This orientation is preserved all the way to the destination. A protein travels from the reticulum to the Golgi, and from the Golgi to the plasma membrane, inside vesicles. When a vesicle fuses with the plasma membrane its interior opens to the outside of the cell. The part of a protein that faced the lumen in the reticulum therefore ends up facing the outside. For this reason the sugars of glycoproteins, added in the lumen, lie on the outer face of the plasma membrane.

In the lumen of the reticulum the protein folds and is modified. Disulfide bridges form, that is, bonds between two cysteine amino acids, and **N-glycosylation** begins, that is, the addition of sugar chains. The reticulum also performs **quality control**. The chaperones calnexin and calreticulin retain glycoproteins until they are correctly folded. A protein that fails to fold is returned to the cytosol and degraded by the proteasome. This route is called **ERAD** (ER-associated degradation). If misfolded proteins accumulate, the cell activates a response called the **UPR** (unfolded protein response), which reduces the synthesis of new proteins and increases the production of chaperones.

Cystic fibrosis shows the effect of this control. The most common mutation, ΔF508, removes one amino acid from the CFTR channel. The mutant channel folds badly, is retained in the reticulum and degraded, so very little of it reaches the plasma membrane.

The **Golgi apparatus** is a stack of flattened cisternae. Proteins enter at the **cis** side, facing the reticulum, and are modified as they pass from one cisterna to the next. At the opposite side, the **trans-Golgi network**, they are sorted to their destination. Secretion has two modes. In **constitutive** secretion vesicles fuse with the plasma membrane continuously. In **regulated** secretion vesicles accumulate and fuse only after a signal, often a rise in calcium ions in the cytosol. This is the case for insulin and neurotransmitters.

![Secretory pathway and preservation of luminal orientation](/figure/biologia-semestre-filtro/strutture-cellulari/secretoria-en.svg)
:::

## Trafficking, endocytosis and degradation

:::definizione{#traffico-vescicolare titolo="Cargo selection and fusion"}
The compartments of the secretory pathway exchange material by means of **vesicles**, small membrane spheres that pinch off from one compartment (budding) and fuse with another. A vesicle forms when a protein **coat** assembles on the cytosolic face of the membrane. The coat curves the membrane and, through adaptor proteins, collects the molecules to be transported, called **cargo**. There are three coats, and each serves one route.

- **COPII** coats the vesicles going from the reticulum to the Golgi.
- **COPI** coats the vesicles returning from the Golgi to the reticulum and those moving between Golgi cisternae.
- **Clathrin** coats the vesicles of endocytosis, which leave from the plasma membrane, and some of those leaving from the trans-Golgi network.

After pinching off, the coat disassembles, and the naked vesicle reaches the destination membrane. Fusion with the right membrane depends on two groups of proteins.

- **Rab** proteins occur in different forms on different compartments. Together with tethering proteins they allow the vesicle to recognise the target membrane.
- **SNARE** proteins lie partly on the vesicle and partly on the target membrane. They wind around one another, bring the two membranes together and cause them to fuse.

After fusion the SNAREs stay wound together. The enzyme **NSF**, with the help of SNAP proteins, separates them by consuming ATP and makes them usable again.

Proteins that work in the lumen of the reticulum have a four-amino-acid signal, **KDEL**, at the end of their chain. When one of them ends up by mistake in a vesicle bound for the Golgi, a Golgi receptor recognises the signal and sends it back to the reticulum in a COPI vesicle. Throughout this traffic the content of a vesicle never comes into contact with the cytosol. The lumen of the reticulum, the lumen of the Golgi, the inside of vesicles and the outside of the cell are therefore equivalent spaces.
:::

:::definizione{#endocitosi-autofagia titolo="Recycling, lysosomes and autophagy"}
In **endocytosis** the cell brings external material inside, enclosing it in vesicles that form from the plasma membrane. In **receptor-mediated** endocytosis a membrane protein, the receptor, binds a specific substance and concentrates it in the vesicle. The vesicles fuse with the **early endosome**, a compartment whose interior is slightly acidic. The acidity detaches many substances from their receptor. From here receptor and substance follow different routes, as three examples show.

- **LDL** (low-density lipoproteins), particles that carry cholesterol in the blood, detach from the receptor. The receptor returns to the plasma membrane (recycling) and the LDL continue to the lysosomes, where they are broken down.
- **Transferrin**, a protein that carries iron, releases the iron in the endosome and returns to the surface together with its receptor.
- The **EGF receptor** (EGF is the epidermal growth factor), once activated is sent to the lysosomes and degraded together with EGF. In this way the cell reduces the number of receptors and therefore the signal.

**Lysosomes** are the organelles of degradation. They contain enzymes called hydrolases, active at acidic pH. A pump in their membrane, the **V-ATPase**, moves protons inside and keeps the pH close to 5. Hydrolases are produced in the reticulum. In the Golgi they receive a tag, **mannose-6-phosphate**, and a receptor that recognises this tag sends them to the endosomes and from there to the lysosomes. If a hydrolase is missing, or does not receive the tag, the substance it should degrade accumulates in the lysosomes. This is the origin of lysosomal storage diseases.

Two other processes use vesicles. In **transcytosis** a substance enters on one side of a cell and is released on the opposite side. In **phagocytosis** a cell, for example a macrophage, engulfs a large particle such as a bacterium, extending its membrane around it by means of actin filaments.

**Autophagy** is the degradation, in lysosomes, of components of the cell itself. In the main form, **macroautophagy**, a double membrane wraps a portion of cytoplasm and forms an **autophagosome**, which fuses with a lysosome. **Mitophagy** is the selective autophagy of damaged mitochondria, which are flagged by the proteins PINK1 and Parkin. There are also microautophagy, in which the lysosome directly engulfs small portions of cytoplasm, and chaperone-mediated autophagy, in which single proteins cross the lysosomal membrane.

An increase in the number of autophagosomes in a cell has two possible explanations. Either more of them are formed, or their fusion with lysosomes is blocked and they accumulate. To distinguish the two cases, degradation in lysosomes is blocked with a drug and the number of autophagosomes is observed to see whether it increases further.

![Distinct fates of receptor, cargo and cytoplasmic material](/figure/biologia-semestre-filtro/strutture-cellulari/endocitosi-en.svg)
:::

## Cytoskeleton, forces and movement

:::definizione{#microtubuli titolo="Polarity, dynamic instability and motors"}
The **cytoskeleton** is a network of protein filaments that gives the cell its shape, makes it move and transports material inside it. The filaments are of three types: microtubules, actin filaments and intermediate filaments.

**Microtubules** are hollow tubes made of a protein, tubulin, whose units are pairs (dimers) of alpha-tubulin and beta-tubulin. The dimers all line up in the same direction, so the two ends of the microtubule are different. The **plus** end (+) grows and shrinks rapidly. The **minus** end (−) is anchored to the **centrosome**, the structure near the nucleus from which microtubules originate in animal cells. Here a protein complex, γ-TuRC, acts as the base for the growth of each microtubule.

A microtubule alternates phases of growth and phases of shrinkage. This behaviour is called **dynamic instability**. Dimers add to the plus end bound to GTP, and shortly afterwards the GTP is hydrolysed to GDP. As long as addition is fast, the end carries a cap of GTP-tubulin that stabilises it. If the cap is lost, the microtubule shrinks rapidly. The switch from growth to shrinkage is called catastrophe, the opposite switch is called rescue.

Microtubules act as tracks for **motor proteins**, which walk along the filament consuming ATP and carry vesicles and organelles.

- **Kinesins** generally move towards the plus end, that is, towards the periphery of the cell.
- **Dynein** moves towards the minus end, that is, towards the centre.

The **cilia** and **flagella** of eukaryotes are projections of the cell supported by a bundle of microtubules, the **axoneme**. In motile cilia and flagella the axoneme has nine pairs of microtubules arranged in a circle and two microtubules in the centre (9+2 structure). Dyneins make one pair slide on its neighbour. Because the pairs are linked together, the sliding becomes bending and the cilium bends. Primary cilia, present as a single copy on many cells, generally lack the central pair (9+0 structure), are immotile and receive signals from the environment.
:::

:::definizione{#actina-intermedi titolo="Actin networks and mechanical resistance"}
**Actin filaments** (microfilaments) are the thinnest filaments of the cytoskeleton. They are made of actin units bound to ATP and, like microtubules, have two different ends. They are concentrated beneath the plasma membrane, where they set the shape of the cell and produce its movements. Two groups of proteins organise the filaments in different ways.

- The **Arp2/3** complex starts a new filament from the side of an existing one. The result is a branched network, which pushes forward the edge of a moving cell.
- **Formins** elongate straight, unbranched filaments.

**Myosins** are the motor proteins of actin. They consume ATP to slide along the filaments. In muscle the unit that contracts is the **sarcomere**, bounded by two Z lines. Myosin pulls the actin filaments towards the centre of the sarcomere, so the two Z lines move closer and the muscle shortens. The filaments slide over one another and their length stays unchanged.

Three small proteins, **Rho**, **Rac** and **Cdc42**, coordinate actin in moving cells. A neutrophil, for example, is a white blood cell that moves towards the site of an infection by following a chemical signal (chemotaxis). Its movement on a surface repeats in three phases: the cell extends its front edge, adheres to the surface and retracts its rear.

In muscle the protein **dystrophin** links actin filaments to the plasma membrane and, through it, to the external matrix. When dystrophin is missing, as in Duchenne muscular dystrophy, the membrane tears during contractions.

**Intermediate filaments** are the strongest and serve to withstand mechanical forces. Examples are the **keratins** of epithelial cells and the **lamins**, which form a supporting network beneath the nuclear envelope. Unlike the other two types of filament they have two identical ends, so no motor protein travels along them. In diseases where a keratin is defective the skin blisters at the slightest rubbing, because the cells break.

![Comparison of actin, microtubules and intermediate filaments](/figure/biologia-semestre-filtro/strutture-cellulari/citoscheletro-en.svg)
:::
