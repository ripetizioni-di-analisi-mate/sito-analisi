---
titolo: "Chemical reactions, kinetics and equilibrium"
sommario: "Conservation, rates and reaction direction: balances, mechanisms, catalysis, activities, equilibria and precipitation, with experiments and biomedical models."
---

## Balancing a transformation and predicting amounts

:::definizione{#bilanciamento titolo="Atoms, charge and energy"}
In ethanol combustion, carbon becomes carbon dioxide and hydrogen becomes water. Counting each element's atoms establishes how many molecules participate. Carbon and hydrogen are balanced first, followed by oxygen:
$$
\mathrm{C_2H_5OH}+3\mathrm{O_2}\longrightarrow2\mathrm{CO_2}+3\mathrm{H_2O}.
$$
Coefficients specify ratios of amounts of substance; subscripts belong to a species' formula. Changing a water subscript would produce a different substance. **Balancing** conserves atoms and total charge. In the ionic equation
$$
\mathrm{Ca^{2+}}+\mathrm{CO_3^{2-}}\longrightarrow\mathrm{CaCO_3(s)}
$$
the charges sum to zero on both sides. Spectator ions, unchanged on both sides of the complete equation, can be cancelled to obtain the net ionic equation.

Mass conservation concerns all substances involved. A solution in an open vessel may lose mass when it releases a gas that leaves the vessel. Energy is also conserved when system and surroundings are considered: an exothermic reaction transfers energy to the surroundings and changes the system's energy. Balancing matter alone determines neither the heat exchanged nor the reaction rate.
:::

:::definizione{#stechiometria titolo="Extent, limiting reactant and yield"}
For $a\mathrm A+b\mathrm B\longrightarrow c\mathrm C$, the extent $\xi$ measures reaction progress in moles:
$$
\Delta n_A=-a\xi,\qquad\Delta n_B=-b\xi,\qquad\Delta n_C=c\xi.
$$
Each available reactant imposes a limit. If the transformation can proceed to completion,
$$
\xi_{\max}=\min\left\{\dfrac{n_{A,0}}{a},\dfrac{n_{B,0}}{b}\right\}.
$$
The **limiting reactant** first exhausts its supply relative to the required ratio. To compare masses, first calculate $n=\dfrac{m}{M}$, where $M$ is molar mass. The reactant with the smaller mass may be in excess when molar masses and coefficients differ.

With $3\,\mathrm{mol}$ of hydrogen and $1\,\mathrm{mol}$ of oxygen, the reaction $2\mathrm{H_2}+\mathrm{O_2}\longrightarrow2\mathrm{H_2O}$ has $\xi_{\max}=1\,\mathrm{mol}$. It can form $2\,\mathrm{mol}$ of water, leaving $1\,\mathrm{mol}$ of hydrogen. This is a theoretical amount: unfavourable equilibrium, side reactions or recovery losses may reduce isolated product. Percentage yield is $\dfrac{n_{\mathrm{isolated}}}{n_{\mathrm{theoretical}}}\cdot100\%$ for the same pure product. An apparent yield above one hundred percent suggests checking purity, residual water and initial data.

![Three moles of hydrogen and one of oxygen form at most two moles of water, leaving one mole of hydrogen.](/figure/chimica-semestre-filtro/reazioni-cinetica-equilibrio/bilancio-en.svg)
:::

## Measuring rates and reconstructing a rate law

:::definizione{#velocita titolo="Species change and normalised reaction rate"}
Concentration measurements repeated over time describe kinetics. In a homogeneous mixture at constant volume, with a single reaction $a\mathrm A+b\mathrm B\longrightarrow c\mathrm C$, the normalised rate is
$$
v=-\dfrac{1}{a}\dfrac{d[A]}{dt}=-\dfrac{1}{b}\dfrac{d[B]}{dt}=\dfrac{1}{c}\dfrac{d[C]}{dt}.
$$
Dividing by coefficients gives the same value regardless of the species observed. An average rate uses finite concentration and time changes; an instantaneous rate is the tangent's slope. A usual unit is $\mathrm{mol\,L^{-1}\,s^{-1}}$.

For $2\mathrm{H_2O_2}\longrightarrow2\mathrm{H_2O}+\mathrm{O_2}$, oxygen formation at $0.010\,\mathrm{mol\,L^{-1}\,s^{-1}}$ corresponds to peroxide consumption at twice that rate. If volume changes, dilution alone also changes concentration: this contribution must be separated from chemical change, or extent can be used with the rate $\dfrac{1}{V}\dfrac{d\xi}{dt}$.
:::

:::definizione{#ordine titolo="Experimental order and elementary steps"}
An observed law may be $v=k[A]^\alpha[B]^\beta$. The exponents are **partial orders**; their sum is the overall order. They are obtained by varying one concentration at a time while maintaining temperature and other conditions. If doubling $[A]$ quadruples the rate, then $2^\alpha=4$ and $\alpha=2$. When one species is in large excess, its concentration may remain almost constant: in $v=k[A][B]$, the product $k[B]$ becomes an observed constant and kinetics appears first order in A.

Orders may be zero, fractional or negative within the experimental range studied. A negative order expresses a decreasing rate as that species increases, consistent with an inhibitory effect. The units of $k$ follow from the law: for overall order $n$, they are $\mathrm{(mol\,L^{-1})^{1-n}\,s^{-1}}$.

**Molecularity** counts the reacting entities in one elementary event. It is a positive integer: one for a unimolecular step, two for a bimolecular step. For the elementary step $\mathrm A+\mathrm B\longrightarrow\mathrm P$, the dependence is $k[A][B]$. An overall reaction can instead include intermediates, successive steps and pre-equilibria; its coefficients alone do not determine orders. An intermediate is produced in one step and consumed in another, so it cancels from the overall balance. Even a fast step may influence the observed rate if it determines the concentration of the intermediate reacting in the next step.
:::

:::osservazione{#leggi-integrate titolo="How concentration changes over time"}
The following integrated laws describe A disappearance with constant $k$, constant volume and no appreciable reverse contribution:

| Disappearance law | Integrated relation | Half-life |
| --- | --- | --- |
| $-\dfrac{d[A]}{dt}=k$ | $[A]=[A]_0-kt$ | $\dfrac{[A]_0}{2k}$ |
| $-\dfrac{d[A]}{dt}=k[A]$ | $\ln\dfrac{[A]}{[A]_0}=-kt$ | $\dfrac{\ln2}{k}$ |
| $-\dfrac{d[A]}{dt}=k[A]^2$ | $\dfrac{1}{[A]}=\dfrac{1}{[A]_0}+kt$ | $\dfrac{1}{k[A]_0}$ |

First-order kinetics removes the same *fraction* in equal intervals; zero-order kinetics removes the same *amount per volume*. The zero-order law ceases to describe the system before it predicts negative concentrations. Plots of $[A]$, $\ln\dfrac{[A]}{[A]_0}$ or $\dfrac{1}{[A]}$ against time allow models to be compared while accounting for measurement error. The table uses the coefficient in the disappearance law: for a species with stoichiometric coefficient two, it may differ from the coefficient in the normalised reaction rate.

The graph compares models with the same initial concentration and initial disappearance rate $v_0$. Normalised time is $\tau=\dfrac{v_0t}{[A]_0}$, so differences between curves show how rate changes during consumption.

![Normalised concentration curves: linear decrease for zero order, exponential for first order and hyperbolic for second order, with equal initial slopes.](/figure/chimica-semestre-filtro/reazioni-cinetica-equilibrio/cinetiche-en.svg)
:::

## Barriers, temperature and catalysis

:::definizione{#arrhenius titolo="Effective collisions and transition states"}
Increasing concentration may increase encounter frequency; transformation also requires suitable orientation and energetic conditions. In heterogeneous reactions, accessible solid surface matters: a powder and a block of equal mass can react at different rates. Temperature changes energy distributions and rate constants.

The Arrhenius law relates the constant to absolute temperature:
$$
k=Ae^{-\dfrac{E_a}{RT}},\qquad
\ln\dfrac{k_2}{k_1}=-\dfrac{E_a}{R}\left(\dfrac{1}{T_2}-\dfrac{1}{T_1}\right).
$$
$A$ is the pre-exponential factor; $R=8.314\,\mathrm{J\,mol^{-1}\,K^{-1}}$. The second expression assumes approximately constant $A$ and $E_a$. For $E_a>0$, heating increases $k$. In a plot of $\ln k$ against $\dfrac{1}{T}$, the slope is $-\dfrac{E_a}{R}$, so a more negative slope indicates greater temperature sensitivity. Energies expressed in kilojoules must be converted when this value of $R$ is used. A logarithmic plot of $k$ uses its numerical value in a fixed unit: changing that unit shifts the intercept, not the slope.

The **transition state** corresponds to the maximum-free-energy region along a step in the pathway. An intermediate instead occupies a local minimum and may have a measurable lifetime. The barrier $\Delta G^\ddagger$ is measured from the starting level to the relevant maximum. Arrhenius activation energy and the free-energy barrier have different definitions; neither generally equals the Gibbs-energy change between reactants and products. A favourable transformation may therefore be slow.

**Transition-state theory** relates rate to the population of activated configurations in a special statistical equilibrium with reactants and their passage towards products. A greater free-energy barrier lowers this population. The activated complex is not an isolable intermediate located at a minimum.
:::

:::definizione{#catalisi titolo="Alternative pathways and enzymes"}
A catalyst participates in mechanism steps and is regenerated in the overall balance. The catalysed pathway has more favourable kinetic barriers and allows equilibrium to be reached sooner. At unchanged temperature, it preserves the transformation's standard free energy and $K$. The reverse process is also accelerated consistently with the same equilibrium ratio.

Enzymes are biological catalysts, predominantly proteins; catalytic RNAs also exist. Substrate recognition and transition-state stabilisation contribute to selectivity. When almost all active sites are occupied, increasing substrate has progressively smaller effects on rate: observed order may change with the concentration range. Adding active enzyme can increase catalytic capacity. Raising temperature may instead accelerate chemical steps while reducing functional enzyme through structural alteration.

Coupling to another reaction, such as ATP hydrolysis, changes the overall transformation's balance because it adds reactants and products. Catalysis alone preserves the balance of the reaction considered.

![Two free-energy profiles have identical starting and final levels but different barriers; the catalysed pathway preserves the reactant–product energy difference.](/figure/chimica-semestre-filtro/reazioni-cinetica-equilibrio/barriere-en.svg)
:::

## Recognising equilibrium and writing its constant

:::definizione{#equilibrio titolo="Dynamic equilibrium and steady state"}
In a closed system, composition may become constant while transformations continue in both directions. At **chemical equilibrium**, forward and reverse rates balance and there is no net extent change. Reactant and product concentrations may differ. Isotope labelling can reveal microscopic exchange even when macroscopic composition remains constant.

A transformation is described as practically irreversible when its reverse process is negligible over the observed times and conditions. A single arrow does not itself establish physical impossibility of the reverse process.

In a **steady state**, production, consumption and flows across boundaries balance. A supplied cell may maintain a constant metabolite concentration while producing and consuming it with a continuous net flux. Stable concentration alone does not identify equilibrium; information about the processes maintaining it is required.

![Comparison of a reversible reaction with equal opposing rates and an open system maintained constant by input and consumption.](/figure/chimica-semestre-filtro/reazioni-cinetica-equilibrio/stazionario-en.svg)
:::

:::definizione{#costante-equilibrio titolo="Activities and standard states"}
For $a\mathrm A+b\mathrm B\rightleftharpoons c\mathrm C+d\mathrm D$, the equilibrium ratio is
$$
K=\dfrac{a_C^c a_D^d}{a_A^a a_B^b}.
$$
This is the **law of mass action at equilibrium**: reaction coefficients become activity exponents. Using coefficients in this thermodynamic relation does not justify using them as orders in an overall rate law.

Activities $a_i$ are dimensionless. In solution, one may write $a_i=\gamma_i\dfrac{[i]}{c^\circ}$, where $\gamma_i$ corrects non-ideality and $c^\circ=1\,\mathrm{mol\,L^{-1}}$. The dilute ideal model assumes $\gamma_i\simeq1$. Ideal gases use $a_i=\dfrac{p_i}{p^\circ}$ with $p^\circ=1\,\mathrm{bar}$. Pure solids and liquids have unit activity in the usual model referenced to the pure phase.

A pure solid present therefore does not appear as a variable concentration in $K$. Adding more may change surface area and the rate of approaching equilibrium while preserving the same saturated composition. This conclusion requires the solid phase to be present: if all solid dissolves before saturation, the dissolution equilibrium equality cannot be imposed.

Introductory forms $K_c$ and $K_p$ often use concentrations or pressures without explicit normalisation. Connecting them to free energy requires a dimensionless constant and consistent standard states. Ideal solubility calculations will use numerical concentration values in $\mathrm{mol\,L^{-1}}$, with division by $c^\circ$ understood.
:::

## Determining direction using Q and free energy

:::definizione{#quoziente-gibbs titolo="Current composition and equilibrium composition"}
The **reaction quotient** $Q$ uses the same expression as the constant, inserting current activities. For a transformation at fixed temperature and pressure,
$$
\Delta_rG=\Delta_rG^\circ+RT\ln Q,
$$
$$
\Delta_rG^\circ=-RT\ln K,\qquad
\Delta_rG=RT\ln\dfrac{Q}{K}.
$$
$\Delta_rG$ is the derivative of free energy with respect to reaction extent under the specified conditions. Comparison determines the initially favoured direction: $Q<K$ gives $\Delta_rG<0$ and forward progress; $Q>K$ favours reverse progress; $Q=K$ gives zero reaction Gibbs energy for the reaction considered.

For $\mathrm A\rightleftharpoons\mathrm B$ with $K=4$, an ideal mixture with $[A]=0.80\,\mathrm{mol\,L^{-1}}$ and $[B]=0.20\,\mathrm{mol\,L^{-1}}$ has $Q=0.25$. Conversion towards B increases the ratio to four. Starting instead from $Q=20$ produces A even though $K>1$. The constant indicates relative preference in the standard reference; actual direction also depends on composition.

Final concentrations require a balance: for $\mathrm A\rightleftharpoons\mathrm B$, $[A]=[A]_0-x$ and $[B]=[B]_0+x$ at constant volume. Substitute into $K$ and select a solution compatible with non-negative concentrations. Different coefficients also imply different changes. Direction alone does not specify the amount transformed, and $K$ does not specify the time required.

![Sign of delta G divided by RT against the logarithm of Q over K: negative towards products, zero at equilibrium and positive towards reactants.](/figure/chimica-semestre-filtro/reazioni-cinetica-equilibrio/quoziente-en.svg)
:::

## Changing concentration, pressure and temperature

:::osservazione{#le-chatelier titolo="Equilibrium shifts with explicit constraints"}
Le Chatelier's principle describes compositional change towards a new equilibrium after a perturbation. Comparing $Q$ and $K$ makes the reasoning quantitative. At constant temperature, adding a reactant immediately changes $Q$; composition subsequently changes through reaction. $K$ retains its value at the given temperature.

For an ideal gas mixture, multiplying every partial pressure by $\lambda$ multiplies $Q$ by $\lambda^{\Delta\nu}$, where $\Delta\nu$ is the stoichiometric number of gaseous product moles minus gaseous reactant moles. Compression therefore favours the side with fewer gaseous moles. If $\Delta\nu=0$, this uniform perturbation leaves $Q$ unchanged.

Adding an inert gas requires the constraint to be specified. At constant volume and temperature, $p_i=\dfrac{n_iRT}{V}$ remains unchanged for every reacting species: total pressure increases while $Q$ does not change. At constant total pressure and temperature, the vessel expands and partial pressures decrease; if $\Delta\nu\ne0$, equilibrium may shift. These conclusions assume ideal gases and no interactions or reactions involving the inert gas.

Temperature instead changes the constant. Over a range where standard enthalpy $\Delta_rH^\circ$ is approximately constant,
$$
\ln\dfrac{K_2}{K_1}=-\dfrac{\Delta_rH^\circ}{R}\left(\dfrac{1}{T_2}-\dfrac{1}{T_1}\right).
$$
For the endothermic direction, heating increases $K$; for the exothermic direction, it decreases it. A faster reaction when heated may accompany a lower equilibrium yield for an exothermic synthesis. Arrhenius describes rate, whereas this relation describes equilibrium composition.

![For N2O4 in equilibrium with two NO2, compression increases Q, inert gas at constant volume leaves Q unchanged and inert gas at constant pressure lowers Q.](/figure/chimica-semestre-filtro/reazioni-cinetica-equilibrio/gas-inerte-en.svg)
:::

## Connecting several reactions

:::osservazione{#equilibri-multipli titolo="Constants and simultaneous balances"}
Standard free energies add when chemical equations are added. Their relation to $\ln K$ yields three rules:

| Operation on the equation | New constant |
| --- | --- |
| Reversal | $\dfrac{1}{K}$ |
| Coefficients multiplied by $n$ | $K^n$ |
| Addition of two equations | $K_1K_2$ |

For $\mathrm A\rightleftharpoons\mathrm B$ with $K_1=3$ and $\mathrm B\rightleftharpoons\mathrm C$ with $K_2=5$, the overall reaction $\mathrm A\rightleftharpoons\mathrm C$ has $K=15$. The C-to-A ratio depends on both transformations. A catalyst for the second reaction changes relaxation time while preserving this product of constants.

The rules require the same temperature, matching chemical species and consistent standard states. Biochemical coupling also requires a mechanism that actually connects the transformations; adding two equations on paper does not guarantee physical coupling. Simultaneous equilibria require all relations together with matter and charge balances. An element's total amount may be distributed among free ion, complexes and protonated species: indiscriminately replacing free activity with the total changes the quotient.

![The constants for A to B and B to C multiply to give the constant for A to C; the reverse reaction has the reciprocal constant.](/figure/chimica-semestre-filtro/reazioni-cinetica-equilibrio/costanti-en.svg)
:::

## Dissolution, precipitation and biological systems

:::definizione{#prodotto-solubilita titolo="Solubility, saturation and nucleation"}
A sparingly soluble salt can leave a measurable ion concentration in solution. For a defined solid phase,
$$
\mathrm{MX(s)}\rightleftharpoons\mathrm{M^+(aq)}+\mathrm{X^-(aq)},\qquad
K_{\mathrm{ps}}=a_{M^+}a_{X^-}.
$$
In pure water, with ideality and no other equilibria, molar solubility $s$ gives $[M^+]=[X^-]=s$. Numerical values normalised to $c^\circ$ yield $K_{\mathrm{ps}}\simeq s^2$. For $\mathrm{MX_2}$ instead, $[M^{2+}]=s$ and $[X^-]=2s$, so $K_{\mathrm{ps}}\simeq4s^3$. Constants for salts with different stoichiometries cannot automatically be ranked as molar solubilities.

The current ion product $Q_{\mathrm{ps}}$ distinguishes three situations. Below $K_{\mathrm{ps}}$, more solid can dissolve if present; equality means saturation; above $K_{\mathrm{ps}}$, precipitation is thermodynamically favoured. A supersaturated solution may remain temporarily clear because forming a crystal nucleus requires crossing a barrier. Adding a small crystal may shorten the time before precipitate appears without changing the constant.

When solutions are mixed, the initial ion product is calculated after dilution into the total volume, before appreciable precipitation. Any precipitated amount then requires a balance and residual equilibrium concentrations.

![Three comparisons between ion product and solubility product: possible dissolution, saturation and favoured precipitation with a possible nucleation delay.](/figure/chimica-semestre-filtro/reazioni-cinetica-equilibrio/solubilita-en.svg)
:::

:::osservazione{#ione-comune titolo="Free species, common ions and biomedical relevance"}
If a solution already contains X, dissolving MX reaches saturation with less salt added. In the ideal model, denoting the initial common-ion concentration by $c_0$,
$$
K_{\mathrm{ps}}\simeq s(c_0+s),\qquad
s\simeq\dfrac{K_{\mathrm{ps}}}{c_0}\quad\text{if }s\ll c_0.
$$
After calculation, check that $\dfrac{s}{c_0}$ is small. $K_{\mathrm{ps}}$ remains unchanged at constant temperature; solubility changes under the new conditions. Strong complexation or a substantial change in activity coefficients may require a more complete model.

Calcium oxalate involves the activities of free calcium and free oxalate. Binding calcium in a complex or protonating oxalate reduces one activity and may favour dissolution of the phase considered. Predicting the result also requires the equilibria determining these free fractions. Total calcium alone does not measure the ion product.

Urate and uric acid require species and solids to be distinguished. A simplified monosodium-urate equilibrium involves sodium and urate anion; neutral uric acid can form a different solid phase. Lowering pH increases the protonated fraction and may favour uric-acid crystals in urine even as free urate anion decreases. There is therefore no universal prediction obtained by using the same solubility product for both solids. Kidney-stone formation depends on composition, activities, volume, pH and crystallisation kinetics; the thermodynamic model identifies the tendency relative to a specified phase.
:::
