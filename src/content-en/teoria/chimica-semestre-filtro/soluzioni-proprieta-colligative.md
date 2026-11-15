---
titolo: "Solutions and colligative properties"
sommario: "Mixtures, concentrations, dissolved gases, colligative properties and water movement across membranes, with applications to biological fluids."
---

## Mixtures, phases and solutions

:::definizione{#miscele titolo="Homogeneous and heterogeneous mixtures"}
A **mixture** contains several substances. It is *homogeneous* when composition and intensive properties are uniform at the observation scale; it then has one phase. A *heterogeneous* mixture has several distinguishable phases separated by interfaces.

A **solution** is a homogeneous mixture whose solvent provides the dispersion medium and whose solutes are distributed at molecular or ionic level. Air is a gaseous solution, salt water is a liquid solution and some metal alloys form solid solutions. The solvent determines the solution's physical state; identifying it does not depend only on the amounts of the components.

For example, completely dissolving a small amount of sodium chloride in water produces one liquid phase. Adding salt beyond its solubility produces a saturated solution and a solid phase, making the system heterogeneous.
:::

:::definizione{#dispersioni titolo="Suspensions, colloids and aerosols"}
In a **suspension**, dispersed particles are large enough to settle under the stated conditions; filtration can separate them from the medium. In a **colloid**, the dispersed phase has intermediate dimensions, approximately one nanometre to one micrometre, and a large interfacial area with the medium. These limits are conventional. Light scattering and Brownian motion help distinguish a colloid from a molecular solution.

Milk is a colloidal emulsion of lipid droplets in water; whole blood contains cells suspended in plasma, which in turn contains dissolved salts and colloidal proteins. An **aerosol** is a dispersion of liquid droplets or solid particles in a gas, such as fog or smoke. Classification helps select a mixture model before applying a solution law.
:::

Substance count is not phase count. In saline, cations, anions and water share one phase; in whole blood, cells and plasma cannot be treated as one molecular solution. Even a clear appearance is evidence to interpret rather than a definition: observation at different scales, settling and light scattering supply complementary information.

![Solution with dispersed molecules, colloid with aggregates and settled suspension](/figure/chimica-semestre-filtro/soluzioni-proprieta-colligative/miscele-en.svg)

## Water, dissolution and electrolytes

:::definizione{#solubilita titolo="Solvation and solubility"}
Water molecules are polar and form hydrogen bonds. During dissolution, solute–solute and solvent–solvent interactions are partly replaced by solute–solvent interactions. **Hydration** is solvation by water. Ions are surrounded by water molecules oriented according to charge; glucose and ethanol hydrogen-bond with the solvent.

**Solubility** is the maximum amount of solute that can remain dissolved in equilibrium with a solute phase at specified temperature and pressure. A saturated solution has reached that equilibrium. Solubility depends on substance identity and temperature; gas solubility also depends appreciably on pressure. Increasing temperature can increase or decrease a solid's solubility, whereas many gases become less soluble in water.

Non-polar molecular regions have low affinity for water. Amphipathic molecules, with polar and non-polar parts, can aggregate into micelles or membranes; a lipid dispersion therefore requires a different model from an ideal molecular solute.
:::

:::definizione{#elettroliti titolo="Dissociation and particle number"}
An **electrolyte** produces ions in solution and allows electrical conduction. A strong electrolyte is almost completely dissociated or ionised under the stated conditions; a weak electrolyte is only partly ionised. A non-electrolyte such as glucose remains mainly molecular.
$$
\mathrm{NaCl}\longrightarrow\mathrm{Na^+}+\mathrm{Cl^-},\qquad
\mathrm{CaCl_2}\longrightarrow\mathrm{Ca^{2+}}+2\mathrm{Cl^-}.
$$
In the ideal limit, one mole of sodium chloride produces two moles of particles and one mole of calcium chloride produces three. Sodium, potassium, calcium, chloride and bicarbonate contribute to the ionic composition of biological fluids. Salt concentration and individual-ion concentration are different quantities; $0.10\,\mathrm{mol\,L^{-1}}$ of $\mathrm{CaCl_2}$ ideally gives $0.10\,\mathrm{mol\,L^{-1}}$ calcium and $0.20\,\mathrm{mol\,L^{-1}}$ chloride.
:::

Cation hydration favours the partially negative oxygen pointing towards the ion; anion hydration favours the partially positive hydrogens. These interactions are dynamic. High solubility does not imply a strong electrolyte: glucose interacts favourably with water without producing an ion pair. ‘Strong’ describes ionisation extent, whereas ‘concentrated’ describes amount per unit of solution.

![One glucose molecule and the particles produced by NaCl and CaCl2 in the ideal limit](/figure/chimica-semestre-filtro/soluzioni-proprieta-colligative/particelle-en.svg)

## Expressing concentration

:::definizione{#concentrazioni titolo="Percentages, molarity and molality"}
**Concentration** expresses how much solute is present in a specified amount of solution or solvent. With $m$ for mass, $V$ for volume and $n$ for amount in moles, the following definitions are used.

| Expression | Definition | Meaning of a value of 5 |
| --- | --- | --- |
| Mass percentage | $100\dfrac{m_{s}}{m_{\mathrm{tot}}}$ | 5 g solute in 100 g solution |
| Mass–volume percentage | Grams of solute in 100 mL solution | 5 g solute in a final volume of 100 mL |
| Volume percentage | $100\dfrac{V_{s}}{V_{\mathrm{tot}}}$ | 5 mL liquid component per final 100 mL |
| Molarity $c$ | $\dfrac{n_{s}}{V_{\mathrm{tot}}}$ | $5\,\mathrm{mol\,L^{-1}}$ |
| Molality $b$ | $\dfrac{n_{s}}{m_{w}}$ | $5\,\mathrm{mol\,kg^{-1}}$ solvent |

Mass–volume percentage specifies units because a mass-to-volume ratio is not dimensionless. Molarity uses the *final solution volume*; molality uses the mass of *solvent alone*. For example, $0.10\,\mathrm{mol}$ in $0.50\,\mathrm L$ solution gives $c=0.20\,\mathrm{mol\,L^{-1}}$; the same amount in $0.50\,\mathrm{kg}$ water gives $b=0.20\,\mathrm{mol\,kg^{-1}}$.

Molarity changes when thermal expansion changes volume. Molality depends on masses and is therefore useful in relations involving temperature changes. Converting mass percentage to molarity also requires solution density and solute molar mass.
:::

Before inserting numbers, identify the denominator: whole solution, solvent or total moles. Then convert grams into moles and millilitres into litres where needed. A percentage without its convention is incomplete. If a solution is ten percent solute by mass, one litre contains one hundred grams of solute only in the additional case where that litre of solution weighs one kilogram.

![Molarity using final volume and molality using water mass alone](/figure/chimica-semestre-filtro/soluzioni-proprieta-colligative/denominatori-en.svg)

:::definizione{#frazione-molare titolo="Mole fraction"}
Component $j$'s **mole fraction** is its amount divided by the total amount in the mixture:
$$
x_j=\dfrac{n_j}{\sum_k n_k},\qquad \sum_jx_j=1.
$$
It is dimensionless. A solution containing $1\,\mathrm{mol}$ ethanol and $5\,\mathrm{mol}$ water has ethanol fraction $\dfrac16$ and water fraction $\dfrac56$. Mole fractions are used for gas partial pressures and ideal-solution vapour pressures.
:::

## Dilutions, equivalents and real solutions

:::osservazione{#diluizioni titolo="Solute balance in dilution"}
During dilution without reactions or losses, solute amount remains constant. If $c_1,V_1$ describe the aliquot and $c_2,V_2$ describe the final solution,
$$
c_1V_1=c_2V_2.
$$
To obtain $100\,\mathrm{mL}$ of $0.20\,\mathrm{mol\,L^{-1}}$ solution from a $1.0\,\mathrm{mol\,L^{-1}}$ stock, take $20\,\mathrm{mL}$ of stock and bring it to a final volume of $100\,\mathrm{mL}$. Added solvent volume does not necessarily equal the volume difference, because real volumes need not be additive.

Mixing solutions of the same solute without reaction requires adding their solute amounts. Final volume must be measured or declared additive within the chosen approximation.
:::

Final mixing concentration is not generally the arithmetic mean of the two concentrations. Each aliquot must be weighted by its volume and total moles divided by actual final volume. If solute reacts, precipitates or is lost, a balance for the relevant species is needed: matter conservation does not guarantee that all initial moles remain in the same dissolved form.

![Dilution retaining four particles before and after: volume increases, solute amount does not](/figure/chimica-semestre-filtro/soluzioni-proprieta-colligative/diluizione-en.svg)

:::definizione{#equivalenti titolo="Chemical equivalents and ionic charge"}
An **equivalent** expresses an amount capable of transferring one mole of protons, one mole of electrons or one mole of charges, according to the stated process. If $z$ is the number of equivalents per mole in that process, then $n_{\mathrm{eq}}=z n$. Equivalent concentration is therefore $c_{\mathrm{eq}}=zc$.

For ionic charge, $1\,\mathrm{mmol}$ of $\mathrm{Ca^{2+}}$ corresponds to $2\,\mathrm{mEq}$; thus $2.5\,\mathrm{mmol\,L^{-1}}$ corresponds to $5.0\,\mathrm{mEq\,L^{-1}}$. For a polyprotic acid, however, the multiplier depends on the number of protons participating in the specified reaction; the neutralisation endpoint must therefore be stated.

Ionic-charge equivalents use charge magnitude: cation and anion equivalents are compared separately to check electroneutrality. In the conversion of iron(III) into iron(II), however, each ion gains one electron, so the redox multiplier is one rather than three. Here z denotes equivalents per mole; it must not be confused with the equivalence factor defined as its reciprocal in other nomenclatures.
:::

:::definizione{#attivita titolo="Activity and activity coefficient"}
Interactions in real solutions make equilibria depend on effective relative quantities called **activities**. In the molarity-based convention,
$$
a_j=\gamma_j\dfrac{c_j}{c^\circ},\qquad c^\circ=1\,\mathrm{mol\,L^{-1}}.
$$
Activity $a_j$ and coefficient $\gamma_j$ are dimensionless. The ideal dilute limit corresponds to $\gamma_j\simeq1$. If $c_j=0.050\,\mathrm{mol\,L^{-1}}$ and $\gamma_j=0.80$, then $a_j=0.040$.

The intracellular environment contains many solutes and macromolecules; electrostatic interactions, ion association and molecular crowding can make concentration alone insufficient. Activity coefficients depend on composition and temperature. Individual-ion coefficients are conventional quantities; mean ionic activities of electrolytes are experimentally accessible.

The thermodynamic relation is $\mu_j=\mu_j^\circ+RT\ln a_j$: activity describes composition’s contribution to chemical potential relative to a standard state. It is not a new amount of matter. Two samples can contain equal moles per litre but have different activities if their interactions with the rest of the mixture differ.
:::

## Gas mixtures and dissolved gases

:::definizione{#dalton titolo="Partial pressures and Dalton's law"}
In an ideal gas mixture, **partial pressure** $p_j$ is the pressure a component would exert alone in the same volume at the same temperature. **Dalton's law** gives
$$
p_{\mathrm{tot}}=\sum_jp_j,\qquad p_j=x_jp_{\mathrm{tot}}.
$$
Dry air contains approximately $78\%$ nitrogen, $21\%$ oxygen and smaller amounts of argon and carbon dioxide. At $1\,\mathrm{atm}$, oxygen partial pressure is therefore approximately $0.21\,\mathrm{atm}$.

In humid air, water vapour contributes part of total pressure. If oxygen fraction among dry gases alone is known, $p_{\mathrm{O_2}}=x_{\mathrm{O_2,dry}}(p_{\mathrm{tot}}-p_{\mathrm{H_2O}})$. Expired air generally contains less oxygen, more carbon dioxide and more water vapour than inspired air; exact percentages depend on physiological and measurement conditions.
:::

:::definizione{#henry titolo="Gas solubility and Henry's law"}
For a sparingly soluble gas that does not react appreciably with solvent, in dilute solution at equilibrium, **Henry's law** in the convention used here is
$$
c=k_Hp.
$$
$c$ is dissolved gas concentration, $p$ is its partial pressure above the liquid and $k_H$ depends on gas, solvent and temperature. If $c$ is in $\mathrm{mol\,L^{-1}}$ and $p$ in atmospheres, $k_H$ is in $\mathrm{mol\,L^{-1}\,atm^{-1}}$. Reciprocal conventions also exist, so the constant's definition must always be read together with its units.

Doubling partial pressure at constant temperature doubles equilibrium concentration within the law's validity range. For oxygen carried in blood, physically dissolved and haemoglobin-bound fractions are distinguished; the formula directly describes only the former. For carbon dioxide, reactions with water and buffers require additional equilibria.
:::

In the reciprocal convention $p=k'_Hc$, using the same units, $k'_H=1/k_H$. A larger constant therefore indicates greater solubility in the first convention and lower solubility in the second. Total pressure is another distinction: adding inert gas at constant volume and temperature raises total pressure but not the partial pressure of a pre-existing gas if its mole amount stays unchanged.

![Equilibrium concentration proportional to partial pressure at constant temperature](/figure/chimica-semestre-filtro/soluzioni-proprieta-colligative/henry-en.svg)

## Solution vapour pressure

:::definizione{#raoult titolo="Raoult's law"}
A **colligative property**, within the ideal dilute-solution model, depends on dissolved particle number. For an ideal solution, **Raoult's law** relates volatile component $j$'s partial pressure to its liquid mole fraction:
$$
p_j=x_jp_j^\ast.
$$
$p_j^\ast$ is pure-component vapour pressure at the same temperature. For non-volatile solute and a single volatile solvent, $p=x_{w}p^\ast$, hence
$$
\Delta p=p^\ast-p=x_{s}p^\ast.
$$
A non-volatile solute reduces solvent mole fraction and therefore vapour pressure. For example, $x_{w}=0.98$ gives $p=0.98p^\ast$. If both components are volatile, their contributions are added; vapour composition can differ from liquid composition.
:::

The lowering should not be explained as a simple solute barrier covering the surface. Mixing changes solvent chemical potential and hence equilibrium with vapour. A real solution uses solvent activity rather than mole fraction alone. A mixture with two volatile components also requires distinguishing liquid fractions from vapour fractions, which can be obtained using Dalton's law.

![Solvent relative vapour pressure equal to its mole fraction in the ideal model](/figure/chimica-semestre-filtro/soluzioni-proprieta-colligative/raoult-en.svg)

## Boiling and freezing

:::definizione{#ebullioscopia-crioscopia titolo="Boiling-point elevation and freezing-point depression"}
A non-volatile solute in an ideal dilute solution produces **boiling-point elevation** and **freezing-point depression**. For an undissociated solute,
$$
\Delta T_b=K_b b,\qquad \Delta T_f=K_f b.
$$
$b$ is solute molality; $K_b$ and $K_f$ depend on solvent. Positive values $\Delta T_b$ and $\Delta T_f$ specify how much boiling temperature rises and freezing temperature falls relative to pure solvent at the same pressure.

For water near atmospheric pressure, use $K_b=0.512\,\mathrm{K\,kg\,mol^{-1}}$ and $K_f=1.86\,\mathrm{K\,kg\,mol^{-1}}$. A glucose solution at $0.10\,\mathrm{mol\,kg^{-1}}$ ideally gives $\Delta T_b=0.0512\,\mathrm K$ and $\Delta T_f=0.186\,\mathrm K$. Temperature increments have the same numerical value in kelvin and Celsius degrees.

Temperature comparison requires the same external pressure. Solute lowers vapour pressure, so more heating is needed to reach boiling. Cryoscopy assumes pure solvent crystallises; appreciable solute in the solid phase would require another model. At equal particle molality, the ideal model predicts equal changes even for substances with different molar masses.
:::

:::definizione{#vant-hoff titolo="The van’t Hoff factor"}
The **van’t Hoff factor** $i$ compares effective osmotically active particle number with the solute formula units introduced. For ideal complete dissociation, $i=1$ for glucose, $i=2$ for $\mathrm{NaCl}$ and $i=3$ for $\mathrm{CaCl_2}$.
$$
\Delta T_b=iK_b b,\qquad \Delta T_f=iK_f b.
$$
For an electrolyte producing $\nu$ ions with dissociation fraction $\alpha$, the ideal model gives $i=1+\alpha(\nu-1)$. Ionic interactions and association can make experimental values differ from the stoichiometric limit. Therefore problems specify $i$; it must not be applied a second time if total particle concentration has already been calculated.
:::

## Diffusion, osmosis and osmotic concentration

:::definizione{#diffusione titolo="Diffusion and Fick's first law"}
**Diffusion** is net transport caused by a concentration gradient in an ideal-solution model without other chemical-potential contributions. Along one coordinate $x$, Fick's first law is
$$
J=-D\dfrac{\mathrm dc}{\mathrm dx}.
$$
$J$ is amount flux per area and time; $D$ is diffusion coefficient. With $c$ in $\mathrm{mol\,m^{-3}}$ and $x$ in metres, $J$ is in $\mathrm{mol\,m^{-2}\,s^{-1}}$ and $D$ in $\mathrm{m^2\,s^{-1}}$. The minus sign denotes net transport towards lower concentration. Across area $A$, molar transfer rate is $JA$.

A membrane can pass some solutes while hindering others. Ion transport can also depend on the electric field, so a concentration gradient alone describes only part of the process.
:::

:::definizione{#osmosi titolo="Osmosis and osmotic pressure"}
**Osmosis** is net solvent movement across a selectively permeable membrane caused by a difference in solvent chemical potential. If the membrane passes water and retains solute, in the ideal dilute limit at equal temperature and pressure on both sides water moves towards the compartment with a higher concentration of retained particles.

**Osmotic pressure** $\pi$ is the excess hydrostatic pressure required to stop osmosis relative to pure solvent. For an ideal dilute solution,
$$
\pi=icRT=c_{\mathrm{osm}}RT.
$$
$T$ is absolute temperature and $R$ the gas constant; the units of $R$ must be chosen consistently. With $c$ in $\mathrm{mol\,L^{-1}}$ and $R=0.082057\,\mathrm{L\,atm\,mol^{-1}\,K^{-1}}$, pressure is in atmospheres. For two ideal dilute solutions at equal temperature, a membrane retaining all solutes permits comparison through $\Delta\pi=RT\Delta c_{\mathrm{osm}}$.
:::

Osmotic pressure is a comparison pressure, not necessarily a cell's actual hydrostatic pressure. Two compartments can reach zero net flow at different concentrations if a hydrostatic difference balances the osmotic contribution. Water molecules continue crossing both ways at equilibrium; net transfer vanishes. Sufficient external pressure can also reverse the flow, the principle of reverse osmosis.

![Initial water flow towards more retained particles at equal initial pressures](/figure/chimica-semestre-filtro/soluzioni-proprieta-colligative/osmosi-en.svg)

:::definizione{#osmolarita titolo="Osmolarity and osmolality"}
**Osmolarity** is the amount of osmotically active particles per litre of solution; **osmolality** uses kilograms of solvent instead. In the ideal limit,
$$
c_{\mathrm{osm}}=\sum_j i_jc_j,\qquad b_{\mathrm{osm}}=\sum_j i_jb_j.
$$
Units are $\mathrm{Osm\,L^{-1}}$ and $\mathrm{Osm\,kg^{-1}}$ respectively. For example, $0.10\,\mathrm{mol\,L^{-1}}$ of $\mathrm{NaCl}$ with $i=2$ gives $0.20\,\mathrm{Osm\,L^{-1}}$. In a mixture, each solute contributes its own particle number. Osmolarity and osmolality can have similar numerical values in very dilute liquids, but their definitions remain distinct.
:::

## Tonicity and biological fluids

:::definizione{#tonicita titolo="Isotonic, hypotonic and hypertonic solutions"}
**Tonicity** describes a solution's sustained effect on cell volume relative to a specified membrane and observation period. It depends mainly on solutes that remain effectively separated by that membrane. An *isotonic* solution maintains cell volume under the stated conditions; a *hypotonic* solution favours water entry and increased volume, whereas a *hypertonic* solution favours water loss and decreased volume.

Equal total osmolarity instead defines **isoosmolarity**. A permeating solute contributes to measured osmolarity and can then distribute between compartments; it does not necessarily sustain a lasting osmotic difference. For example, an isoosmotic urea solution can be hypotonic to a urea-permeable cell.

Excessive water entry can cause red-cell haemolysis, whereas a hypertonic medium can cause shrinkage. Oedema is fluid accumulation in interstitial spaces; hydrostatic pressures, plasma proteins, capillary permeability and lymphatic drainage all contribute to its development. A simple total-osmolarity comparison therefore does not describe every exchange between plasma and interstitium.
:::

In a model with a large external reservoir, conserved non-permeating intracellular solutes and negligible hydrostatic difference, volume can be estimated by equating final effective concentrations. This neglects non-osmotic cell volume and active transport. These assumptions have limits for real cells: initial volume change can be followed by permeation, metabolism or regulation, so the observation timescale must always be stated.

![Cell responses to retained solutes and permeating urea: equal totals do not imply equal tonicity](/figure/chimica-semestre-filtro/soluzioni-proprieta-colligative/tonicita-en.svg)

:::esempio{#fisiologica-glucosata titolo="Saline and glucose solutions"}
A $\mathrm{NaCl}$ solution at $0.9\%$ mass–volume contains $9.0\,\mathrm{g\,L^{-1}}$. With molar mass $58.5\,\mathrm{g\,mol^{-1}}$,
$$
c=\dfrac{9.0}{58.5}\,\mathrm{mol\,L^{-1}}
\simeq0.154\,\mathrm{mol\,L^{-1}},\qquad
c_{\mathrm{osm,id}}\simeq2c=0.308\,\mathrm{Osm\,L^{-1}}.
$$
So-called physiological saline is approximately isotonic to many cells, although its full composition differs from plasma. Ionic interactions affect real osmotic properties.

A $5\%$ mass–volume glucose solution, assuming anhydrous glucose with molar mass $180\,\mathrm{g\,mol^{-1}}$, contains $50\,\mathrm{g\,L^{-1}}$ and therefore approximately $0.278\,\mathrm{Osm\,L^{-1}}$ in the ideal model. Glucose can enter cells and be metabolised, so its time-dependent effect depends on transport and metabolism. Initial osmotic concentration does not establish persistent tonicity. These examples illustrate chemical properties and membrane models.
:::
