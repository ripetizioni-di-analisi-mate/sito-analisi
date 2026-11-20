---
titolo: "Cell adhesion, communication and signalling"
sommario: "From junctions to cellular responses: extracellular matrix, receptors, second messengers, vision, and EGF and insulin pathways, with explained experimental cases."
---

## Extracellular matrix and tissue properties

:::definizione{#matrice titolo="Components, organisation and remodelling"}
The **extracellular matrix** is the material that fills the space between the cells of a tissue. It is a network of proteins and sugars produced by the cells themselves and released outside. The mechanical properties of a tissue depend largely on its matrix. A tendon, for example, resists when it is pulled, while the cartilage of a knee resists when it is compressed. There are three main components.

- **Collagen** forms fibres that resist tension. It is abundant in tendons.
- **Elastin** forms elastic fibres, which stretch and return to their initial length. It is abundant in arteries and lungs.
- **Proteoglycans** are proteins bearing long sugar chains, the glycosaminoglycans, rich in negative charges. The charges attract positive ions and water, so proteoglycans form a water-filled gel that resists compression. They are abundant in cartilage.

Two other proteins connect cells to the matrix. **Fibronectin** binds on one side to matrix fibres and on the other to receptors on the cell surface, the integrins. **Laminin** is the main component of the **basal lamina**, a thin layer of matrix on which epithelia rest. The basal lamina also contains type IV collagen and proteoglycans.

The matrix changes over time. Cells deposit new components and degrade old ones, and these processes together are called **remodelling**. Degradation is carried out by enzymes called **matrix metalloproteinases** (MMPs), kept in check by specific inhibitors. Remodelling allows cells to move through the tissue during development and wound repair. Both excesses are harmful. Excessive deposition stiffens the tissue, as in fibrosis. Excessive degradation weakens it.

![Collagen, proteoglycans and fibronectin have different functions in the matrix.](/figure/biologia-semestre-filtro/segnalazione-cellulare/matrice-en.svg)
:::

:::esempio{titolo="Interpreting a change in the matrix"}
In a cartilage sample the proteoglycans have decreased, while the collagen fibres are still intact. Proteoglycans are the component that holds water, so the cartilage contains less water and resists compression less. Collagen is the component that resists tension and it is intact, so resistance to tension is still preserved. The two properties depend on different components and are lost independently.
:::

## Matrix adhesion and force transmission

:::definizione{#integrine titolo="Integrins, the cytoskeleton and mechanotransduction"}
**Integrins** are the proteins with which a cell attaches to the extracellular matrix. They span the plasma membrane and are made of two chains, one alpha and one beta. The outer part binds a matrix protein, such as fibronectin or laminin. The inner part binds, through adaptor proteins, to the cytoskeleton. The integrin is therefore a bridge between the matrix, outside, and the cytoskeleton, inside. There are two types of attachment.

- In **focal adhesions** the integrin is connected to actin filaments. The adaptors are talin and vinculin.
- In **hemidesmosomes** the integrin α6β4 is connected to intermediate filaments through plectin, and outside it binds the laminin of the basal lamina. Hemidesmosomes fix epithelia to the basal lamina.

An integrin has two forms, a bent one that binds the matrix weakly and an extended one that binds it strongly. The switch from one form to the other carries information in both directions.

- **Inside-out**. Talin binds the inner part of the integrin and brings it into the extended form, so the cell decides when to adhere.
- **Outside-in**. The integrin bound to the matrix activates enzymes inside the cell, including the kinase FAK. These signals regulate the migration, survival and division of the cell.

**Mechanotransduction** is the conversion of a mechanical force into a chemical signal. Actin filaments, pulled by myosin, put the adhesion proteins under tension. Under tension talin stretches and uncovers sites to which vinculin binds, so the adhesion is reinforced. On a stiff surface tension is high, on a soft surface it is low. For this reason the same cell behaves differently on surfaces of different stiffness, even if they carry the same matrix protein.

![Connection between matrix, integrin, adaptor proteins and actin.](/figure/biologia-semestre-filtro/segnalazione-cellulare/adesione-en.svg)
:::

:::esempio{titolo="Separating recognition from anchoring"}
A cell has integrins that bind fibronectin normally, but its talin cannot connect to the integrin. Two things are measured. The first is how many integrins are bound to fibronectin, and the value is normal. The second is the force with which the cell pulls on the surface, and the value is very low. Binding to the matrix therefore works, while the connection between integrin and actin, which is the task of talin, is missing. Counting the bound integrins would not have been enough to reveal the defect, because adhesion requires two distinct steps: binding outside and anchoring inside.
:::

## Cell recognition and junctions

:::definizione{#giunzioni titolo="Barriers, anchoring structures and intercellular channels"}
In an epithelium, such as the one lining the intestine, cells are joined to one another by structures called **junctions**. The proteins that hold two neighbouring cells together are mainly the **cadherins**. A cadherin spans the membrane and, outside, binds an identical cadherin on the neighbouring cell. The bond requires calcium ions. If calcium is removed from the medium, the cadherins detach and the cells separate. Other adhesion molecules, such as the CAMs of the immunoglobulin family, do not require calcium.

There are five types of junction. Each has a characteristic function and connection.

- **Adherens junctions** join two cells with cadherins connected to actin filaments. The connection is made by proteins called catenins.
- **Desmosomes** join two cells with special cadherins (desmogleins and desmocollins) connected to intermediate filaments. They give mechanical strength and are numerous in skin and heart.
- **Hemidesmosomes** join a cell to the basal lamina with integrins connected to intermediate filaments.
- **Tight junctions** seal the space between two cells with the proteins claudin and occludin. They prevent substances from passing between one cell and the next (paracellular route) and separate the apical part of the membrane, facing the lumen, from the basolateral part.
- **Gap junctions** are channels connecting the cytoplasm of two cells. Each cell supplies half a channel, called a connexon, made of six proteins called connexins.

Ions and small molecules, up to about 1000 daltons, pass through gap junctions. Proteins are too large to pass. In the heart, for example, these junctions let ions pass from one cell to the next, so the electrical signal spreads and the cells contract together. In the laboratory a small dye is injected into one cell. If the dye appears in neighbouring cells, the cells are connected by gap junctions.

![Different junctions connect actin, intermediate filaments or cytoplasms.](/figure/biologia-semestre-filtro/segnalazione-cellulare/giunzioni-en.svg)
:::

:::esempio{titolo="Two measurements in the same epithelium"}
Two measurements are made on a layer of epithelial cells before and after a treatment. In the first, a tracer is placed in the liquid above the cells and the amount reaching the other side, through the spaces between one cell and the next, is measured. After the treatment more passes through. In the second, a dye is injected into one cell and the amount reaching neighbouring cells is measured. After the treatment the value is unchanged. The first measurement concerns the space between cells, sealed by tight junctions, so the treatment has weakened these junctions. The second concerns passage from cytoplasm to cytoplasm, so gap junctions still work. Before concluding, it is checked that the cells have not died, because a hole in the layer would also let the tracer through.
:::

## Modes and logic of communication

:::definizione{#comunicazione titolo="Distance, receptors and response selectivity"}
Cells communicate by means of molecules called **signals**. One cell produces the signal and another, the **target cell**, receives it with a protein called a **receptor**. The molecule that binds a receptor is also called a **ligand**. The modes of communication are distinguished by the route the signal travels.

- **Contact-dependent**. The signal stays attached to the membrane of the cell that produces it, so it acts only on a cell touching it.
- **Paracrine**. The signal diffuses in the fluid between cells and acts on nearby cells.
- **Autocrine**. The signal acts on the same cell that produced it.
- **Endocrine**. The signal is a **hormone**, which travels in the blood and reaches distant cells. Insulin produced by the pancreas, for example, acts on muscle and liver.
- **Synaptic**. A neuron releases a **neurotransmitter** at a **synapse**, the narrow space that separates it from the next cell.

This classification concerns only the route. The speed and duration of the response depend on what happens inside the target cell. A response that uses proteins already present starts within seconds. A response that requires genes to be activated and new proteins to be produced starts after minutes or hours and lasts longer.

A cell responds to a signal only if it has the corresponding receptor. Two cells with the same receptor, moreover, give different responses if they contain different proteins downstream of the receptor. Acetylcholine, for example, makes skeletal muscle contract and slows the heartbeat. The strength of the response depends on the concentration of the signal and on the number of receptors. When almost all receptors are occupied, adding more signal changes the response little.
:::

:::definizione{#trasduzione titolo="Amplification, specificity and termination"}
**Signal transduction** is the series of steps that, inside the cell, links the activated receptor to the final response. The set of steps is called a **signalling pathway**. At each step one protein activates another, often by adding a phosphate group to it. Some pathways also produce small molecules that diffuse through the cell, called **second messengers**. The first messenger is the signal that arrived from outside.

A signalling pathway **amplifies** the signal. One activated receptor activates many molecules of the first enzyme, each of which activates many molecules of the next. If at each step one molecule activates ten, after three steps the active molecules number $10\cdot 10\cdot 10=1000$. A few occupied receptors are therefore enough to produce a large response.

The proteins of a pathway are often held close together by a **scaffold protein**, which binds them together. In this way each one meets its own target and not the proteins of other pathways.

Every pathway also has a **switch-off** system, which stops the response when the signal ends.

- **Phosphatases** remove the phosphate groups added by kinases.
- **Phosphodiesterases** degrade the second messengers cAMP (cyclic AMP) and cGMP (cyclic GMP).
- Pumps and exchangers move calcium ions back out of the cytosol.

A phosphorylation activates some proteins and inactivates others. To predict the effect of a drug on a pathway it is therefore necessary to know, for each step, whether it is an activation or an inhibition.

![A cascade connects recognition, transduction and response, with mechanisms for signal termination.](/figure/biologia-semestre-filtro/segnalazione-cellulare/cascata-en.svg)
:::

:::esempio{titolo="Ordering the components of a pathway"}
In a pathway three proteins act in a row: A activates B and B activates C. The order is verified with two tests. In the first, A is blocked, and the activity of C disappears, so A is needed for the activation of C. In the second, still with A blocked, a form of B modified to be always active is introduced into the cell. The activity of C reappears. B therefore activates C without needing A, which shows that B acts after A in the pathway, that is, **downstream** of A. If B acted before A, blocking A would have stopped the signal even with B active. The conclusion holds if the active form of B does not switch on C through another pathway, and this is checked with a separate test.
:::

## Intracellular receptors and ligand-gated channels

:::definizione{#recettori-intracellulari titolo="Gene regulation and the NO–cGMP pathway"}
Receptors are found in two locations. Most lie on the plasma membrane and receive signals that do not cross it. Some lie inside the cell and receive small hydrophobic signals, which cross the bilayer.

**Steroid hormones**, such as cortisol and oestrogens, derive from cholesterol and cross the membrane. In the cell they bind an **intracellular receptor**. The receptor with the hormone bound enters the nucleus, or is already there, and binds specific sequences of DNA (deoxyribonucleic acid), where it activates or represses the transcription of particular genes. The receptor is therefore a transcription factor activated by the hormone. The response requires the production of new RNA (ribonucleic acid) and new proteins, so it appears after tens of minutes or hours.

**Nitric oxide** (NO) is a gas that crosses membranes. Its receptor is a cytosolic enzyme, **soluble guanylate cyclase**. NO binds the enzyme and activates it, and the enzyme converts GTP (guanosine triphosphate) into **cGMP** (cyclic GMP), a second messenger. In the muscle cells of the blood vessel wall cGMP activates the kinase PKG (protein kinase G), which makes the muscle relax, so the vessel dilates. NO is destroyed within seconds, so it acts only on cells near the one that produces it. This example shows that an intracellular receptor does not always act on genes.
:::

:::definizione{#recettori-canale titolo="Ligand binding and electrical change"}
A **ligand-gated channel** is a membrane protein that is both a receptor and an ion channel. The channel is closed at rest and opens when the ligand binds. Ions cross it down their electrochemical gradient and change the membrane potential. The classic example is the **nicotinic acetylcholine receptor**, found on the muscle cell at the point of contact with the nerve. When acetylcholine binds, the channel opens and lets positive ions through. Mainly Na⁺ enters, because the inside of the cell is negative. The inside becomes less negative, that is, the membrane depolarises, and this starts contraction.

In a ligand-gated channel the binding of the ligand opens the channel directly, with no intermediate steps. The response is therefore the fastest of all receptor types and appears within milliseconds. A receptor of this kind is also called **ionotropic**. A receptor that opens a channel indirectly, through a signalling pathway, is called **metabotropic** and is slower.
:::

## G proteins and second messengers

:::definizione{#proteine-g titolo="The GDP–GTP cycle and coupling to GPCRs"}
A **G protein** is a protein that works as a switch. It binds a guanine nucleotide and has two states: it is **off** when it binds GDP (guanosine diphosphate) and **on** when it binds GTP (guanosine triphosphate), which has one more phosphate group. Two types of protein move it from one state to the other.

- A **GEF** (guanine nucleotide exchange factor) switches it on. It makes GDP come off, and a GTP, which is abundant in the cytosol, binds in its place. GDP is therefore replaced by a whole GTP and does not receive an extra phosphate.
- A **GAP** (GTPase-activating protein) switches it off. It speeds up the hydrolysis of the bound GTP, which becomes GDP.

G proteins are of two types. **Monomeric** ones consist of a single chain. Examples are Ras, described below, and Ran, which regulates transport into the nucleus. **Heterotrimeric** ones consist of three different subunits, α, β and γ, and the α subunit is the one that binds the nucleotide.

Heterotrimeric G proteins work with **GPCRs** (G protein-coupled receptors), membrane receptors that span the bilayer seven times. Adrenaline, glucagon and many neurotransmitters act on receptors of this type. The sequence is as follows.

1. The ligand binds the GPCR, which changes shape.
2. The activated receptor acts as a GEF on the G protein: the α subunit releases GDP and binds GTP.
3. The α subunit with GTP separates from the βγ pair. Both parts regulate enzymes or channels in the membrane.
4. The α subunit hydrolyses GTP to GDP, rejoins βγ and the signal stops.

There are three main families of α subunit, which act on different enzymes.

- **Gs** activates **adenylyl cyclase**, an enzyme that converts ATP (adenosine triphosphate, the molecule that supplies energy to cellular reactions) into **cAMP** (cyclic AMP). cAMP is a second messenger and activates the kinase **PKA** (protein kinase A). PKA consists of regulatory subunits and catalytic subunits. cAMP binds the regulatory ones, which release the active catalytic ones.
- **Gi** inhibits adenylyl cyclase, so it lowers cAMP.
- **Gq** activates **phospholipase C**, which produces the second messengers IP3 and DAG described in the next box.

The effect of a ligand therefore depends on the type of G protein to which its receptor is coupled. Adrenaline, for example, raises cAMP in cells where its receptor is coupled to Gs.

![The G-protein cycle and the Gs–cAMP–PKA pathway.](/figure/biologia-semestre-filtro/segnalazione-cellulare/gpcr-en.svg)
:::

:::definizione{#secondi-messaggeri titolo="Phosphoinositides, calcium and compartments"}
A **second messenger** is a small molecule, or an ion, whose concentration in the cell changes rapidly when a receptor is activated. The main ones are cAMP, cGMP, IP3, DAG and calcium ions (Ca²⁺).

**Phospholipase C** (PLC) produces two second messengers in a single reaction. It cuts a phospholipid of the plasma membrane, **PIP2**, into two parts with different fates.

- **IP3** is the head of the phospholipid. It is soluble, diffuses through the cytosol and binds a ligand-gated channel on the membrane of the endoplasmic reticulum. The channel opens and the calcium ions stored in the reticulum flow out into the cytosol.
- **DAG** is the part with the two tails. It stays in the plasma membrane and, together with calcium, activates the kinase **PKC**.

**Calcium** is itself a second messenger. At rest its concentration in the cytosol is about ten thousand times lower than outside the cell and in the reticulum, so the opening of a few channels is enough to raise it greatly. In the cytosol calcium binds a protein, **calmodulin**, and the complex activates several enzymes. The signal ends when calcium is removed from the cytosol. The SERCA pump returns it to the reticulum, and other pumps and exchangers in the plasma membrane move it outside.

The concentration of a second messenger depends at every moment on two rates, the rate at which it is produced and the rate at which it is removed. cAMP and cGMP are removed by **phosphodiesterases**. A drug that inhibits a phosphodiesterase therefore makes the signal last longer. The drug has an effect only if the second messenger is being produced, because the phosphodiesterase acts on molecules already present.

![PIP2 generates soluble IP3 and membrane-bound DAG; IP3 promotes calcium release.](/figure/biologia-semestre-filtro/segnalazione-cellulare/plc-en.svg)
:::

## Desensitisation and phototransduction

:::definizione{#desensitizzazione titolo="Reduced responsiveness and the light signal"}
**Desensitisation** is the decrease in a cell's response to a signal that stays present for a long time. It protects the cell from excessive stimulation. For GPCRs it takes place in three steps.

1. A kinase called **GRK** adds phosphate groups to the activated receptor.
2. A protein called **arrestin** binds the phosphorylated receptor and prevents it from activating the G protein.
3. The receptor is taken into the cell by endocytosis. From there it returns to the membrane or is degraded in lysosomes.

The response therefore decreases even though the ligand is still present.

**Phototransduction** is the conversion of light into a nerve signal. In the rods of the retina, the cells of vision in dim light, the receptor is **rhodopsin**. Rhodopsin is a GPCR containing a small light-sensitive molecule, **retinal**. The pathway has one peculiarity: light makes the second messenger decrease. The sequence is as follows.

1. Light changes the shape of retinal, from 11-cis to all-trans, and rhodopsin is activated.
2. Rhodopsin activates a G protein, **transducin**.
3. Transducin activates a phosphodiesterase, **PDE6**, which degrades cGMP.
4. cGMP decreases. The rod membrane contains channels for positive ions kept open by cGMP, so these channels close.
5. Positive ions no longer enter, while K⁺ keeps leaving. The inside becomes more negative, that is, the membrane **hyperpolarises**.
6. The rod releases less neurotransmitter (glutamate).

In the dark the opposite happens. cGMP is high, the channels are open, the membrane is depolarised and the rod releases glutamate continuously. The rod therefore signals light by a decrease in the glutamate released.

After the flash of light the cell returns to the dark state. Rhodopsin is switched off, transducin hydrolyses its GTP and guanylate cyclase produces new cGMP. With the channels closed, calcium in the rod also decreases, and this decrease stimulates cGMP synthesis. It is one of the mechanisms by which the eye adapts to bright light.

![Light lowers cGMP, closes channels and hyperpolarises the rod cell.](/figure/biologia-semestre-filtro/segnalazione-cellulare/visione-en.svg)
:::

## Receptor tyrosine kinases, growth and metabolism

:::definizione{#rtk-ras titolo="EGF, Ras and the MAPK cascade"}
**Receptor tyrosine kinases** (RTKs) are membrane receptors that have, in the part inside the cell, a kinase activity. This kinase adds phosphate groups to the amino acid tyrosine. They are the receptors of many **growth factors**, that is, signals that stimulate cells to grow and divide, such as EGF (epidermal growth factor). Activation takes place in three steps.

1. The ligand binds and two receptor molecules come together (dimerisation).
2. Each receptor phosphorylates the tyrosines of the other.
3. The phosphorylated tyrosines become attachment points for cytosolic proteins, which are thereby recruited beneath the membrane.

In the case of EGF the signal continues along the **Ras–MAPK** pathway. The adaptor Grb2 binds the phosphorylated tyrosines and brings the protein SOS with it. SOS is a GEF and switches on the monomeric G protein **Ras**, making it exchange GDP for GTP. Ras-GTP activates a row of three kinases, each of which phosphorylates the next: **Raf**, then **MEK**, then **ERK**. ERK enters the nucleus and activates transcription factors that stimulate cell division.

This pathway explains the origin of many tumours. A **proto-oncogene** is a normal gene whose protein stimulates cell growth or division when the signal arrives. The Ras gene is a proto-oncogene. A mutation that makes the protein always active turns the proto-oncogene into an **oncogene**. In about a quarter of human tumours Ras has a mutation that prevents it from hydrolysing GTP. The protein stays on and the pathway stimulates division even in the absence of the growth factor. The oncogene therefore acts by gain of function. **Tumour suppressor** genes, covered in the unit on the cell cycle, contribute to tumours in the opposite way, that is, when they lose their function. A tumour generally develops when several alterations of these two types add up.
:::

:::definizione{#insulina-pi3k titolo="Insulin, PIP3 and glucose transport"}
**Insulin** is the hormone the pancreas releases after a meal, when blood glucose rises. It makes glucose enter muscle and adipose tissue cells. Its receptor is an RTK made of two halves already joined before the hormone arrives. The main pathway is the **PI3K–Akt** pathway, in five steps.

1. Insulin binds and the receptor phosphorylates a cytosolic protein, called **IRS**.
2. Phosphorylated IRS recruits the enzyme **PI3K** beneath the membrane.
3. PI3K adds a phosphate to the membrane phospholipid PIP2 and converts it into **PIP3**.
4. PIP3 stays in the membrane and acts as an attachment point for the kinase **Akt**, which recognises it with a part called the PH domain. At the membrane Akt is phosphorylated by other kinases and becomes active.
5. Active Akt makes vesicles containing the glucose transporter **GLUT4** move to the plasma membrane.

At rest most GLUT4 lies in vesicles inside the cell. After the insulin signal the vesicles fuse with the plasma membrane, the exposed transporters increase and glucose enters faster. The response uses transporters already built, so it appears within minutes. The signal is switched off by the phosphatase **PTEN**, which removes a phosphate from PIP3 and returns it to PIP2. The PTEN gene is a tumour suppressor. Insulin also activates the Ras–MAPK pathway, which regulates growth.

Two molecules with similar abbreviations, IP3 and PIP3, both derive from PIP2 and have different roles.

- **IP3** is obtained when phospholipase C *cuts* PIP2. It is soluble, diffuses through the cytosol and releases calcium from the reticulum.
- **PIP3** is obtained when PI3K *adds a phosphate* to PIP2. It is a lipid, stays in the membrane and recruits Akt.

![Comparison of the Ras–MAPK and PI3K–Akt branches of receptor signalling.](/figure/biologia-semestre-filtro/segnalazione-cellulare/rtk-en.svg)
:::
