---
titolo: "Acids, bases, buffers and oxidation–reduction reactions"
sommario: "Acid–base equilibria, pH calculations, biological buffers, redox balancing and electrochemical potentials."
---

:::osservazione{titolo="Composition and transformations"}
Adding a few drops of acid to two solutions that initially have the same pH can produce very different changes. One contains only water and a small amount of solute; the other contains a buffer pair. The initial pH describes hydronium activity, but does not tell us how much substance remains available to react. We also need the composition, amounts and conditions of the system.

This chapter distinguishes two kinds of change: proton transfer in acid–base equilibria and electron transfer in redox reactions. Some reactions involve both, but the two balances remain distinct. Start a problem by identifying the species present, carry out any stoichiometric reaction, and only then choose the equilibrium to solve. Compare the result with the predicted direction of change: adding a strong base to the closed buffer model considered here should not lower its pH.
:::

## Definitions of acids and bases

:::definizione{#acidi-basi titolo="Arrhenius and Brønsted–Lowry"}
In water, an **Arrhenius acid** increases the concentration of hydronium ions $\mathrm{H_3O^+}$, while a base increases the concentration of hydroxide ions $\mathrm{OH^-}$. Hydrochloric acid, for example, transfers a proton to water, whereas dissolved sodium hydroxide releases hydroxide ions.

In the **Brønsted–Lowry** model an acid donates a proton and a base accepts one. The reaction therefore involves two conjugate acid–base pairs:
$$
\mathrm{HA+B\rightleftharpoons A^-+BH^+}.
$$
$\mathrm{HA}$ and $\mathrm{A^-}$ differ by one proton; the same is true of $\mathrm{BH^+}$ and $\mathrm B$. In $\mathrm{NH_3+H_2O\rightleftharpoons NH_4^++OH^-}$, ammonia is the base and water is the acid.
:::

:::definizione{#lewis-anfoliti titolo="Lewis acids and bases; amphiprotic species"}
A **Lewis acid** accepts an electron pair to form a bond; a Lewis base supplies the pair. In $\mathrm{BF_3+NH_3\rightarrow F_3B\!\leftarrow\!NH_3}$, boron accepts the lone pair on nitrogen. This definition includes reactions without proton transfer.

An **amphiprotic** species can either donate or accept a proton. The ion $\mathrm{H_2PO_4^-}$ can become $\mathrm{HPO_4^{2-}}$ by donating a proton, or $\mathrm{H_3PO_4}$ by accepting one. Water can also behave in both ways.
:::

:::esempio{titolo="Recognising conjugate pairs"}
To recognise a conjugate pair, compare formulas and charges. Removing $\mathrm{H^+}$ removes one hydrogen and lowers the charge by one unit; removing a neutral hydrogen atom would be a different transformation. Species are not a conjugate pair merely because they occur on opposite sides of a reaction arrow. In proton transfer between ammonia and water, $\mathrm{NH_3}$ and $\mathrm{OH^-}$ are two bases, not a conjugate pair.

![Transfers of one proton between the four phosphate forms](/figure/chimica-semestre-filtro/acidi-basi-redox/coppie-en.svg)

The sequence shows possible changes in composition, without implying that the four species have equal abundances at a given pH.
:::

## Water autoprotolysis and pH

:::definizione{#kw-ph titolo="The ion product of water and the pH scale"}
Two water molecules can exchange a proton:
$$
\mathrm{2H_2O\rightleftharpoons H_3O^++OH^-}.
$$
The ion product is $K_w=a_{\mathrm{H_3O^+}}a_{\mathrm{OH^-}}$, where $a$ denotes activity, a dimensionless quantity describing effective concentration. In dilute solutions, $a_i$ is approximated by $\dfrac{[i]}{c^\circ}$, with $c^\circ=1\,\mathrm{mol\,L^{-1}}$.

**pH** is $-\log_{10}a_{\mathrm{H_3O^+}}$; pOH is defined in the same way for $\mathrm{OH^-}$. Therefore
$$
\mathrm{pH+pOH}=pK_w.
$$
At $25\,^\circ\mathrm C$, $K_w\simeq10^{-14}$ and $pK_w\simeq14$. In the dilute ideal model used here, a neutral solution has equal hydronium and hydroxide activities, so its pH is $\dfrac{pK_w}{2}$. Neutrality at $7$ refers to this temperature. A hydronium concentration of $10^{-3}\,\mathrm{mol\,L^{-1}}$ gives $\mathrm{pH}=3$ in the dilute approximation.
:::

:::osservazione{#indicatori titolo="Acid–base indicators"}
An indicator is a conjugate pair whose two forms have different colours. For $\mathrm{HIn\rightleftharpoons H^++In^-}$, the ratio of the forms depends on pH and the indicator's $pK_a$. The colour change usually spans approximately two pH units centred on $pK_a$. A titration indicator should change colour within the steep part of the curve near equivalence.
:::

:::osservazione{titolo="Reading the pH scale"}
The scale is logarithmic: moving from pH $4$ to pH $3$ means increasing proton activity tenfold, not adding a fixed amount of acid. In particular, averaging two pH values does not give the pH of a mixture. First combine the amounts of the species and account for their reactions. The familiar interval $0$–$14$ is not a universal mathematical limit of the pH definition.

![pH of a very dilute strong acid, including water autoprotolysis](/figure/chimica-semestre-filtro/acidi-basi-redox/diluizione-en.svg)

The graph assumes an ideal solution at $25\,^\circ\mathrm C$. As the acid becomes extremely dilute, pH approaches $7$ from the acidic side; the prediction $-\log C$ alone becomes inadequate.
:::

## Strong and weak acids and bases

:::definizione{#ka-kb titolo="Dissociation constants and acid–base strength"}
For a monoprotic acid $\mathrm{HA}$ in water,
$$
\mathrm{HA+H_2O\rightleftharpoons H_3O^++A^-},
\qquad K_a=\dfrac{a_{\mathrm{H_3O^+}}a_{\mathrm{A^-}}}{a_{\mathrm{HA}}}.
$$
For a base $\mathrm B$, $K_b=\dfrac{a_{\mathrm{BH^+}}a_{\mathrm{OH^-}}}{a_{\mathrm B}}$. Define $pK_a=-\log_{10}K_a$ and $pK_b=-\log_{10}K_b$. Under otherwise identical conditions, a larger $K_a$ corresponds to more extensive acid dissociation. For a conjugate pair, $K_aK_b=K_w$, hence $pK_a+pK_b=pK_w$.

A strong acid such as HCl reacts almost completely with water in dilute aqueous solution. A weak acid such as acetic acid reaches equilibrium with a fraction remaining undissociated. Strength concerns the equilibrium; concentration concerns the amount of substance per unit volume.
:::

:::osservazione{#calcolo-ph titolo="Calculating pH and checking approximations"}
For a strong monoprotic acid of analytical concentration $C$ sufficiently greater than $10^{-7}\,\mathrm{mol\,L^{-1}}$ at $25\,^\circ\mathrm C$, use $[\mathrm{H_3O^+}]\simeq C$. For a strong base, count the hydroxide ions released per formula unit: $\mathrm{Ca(OH)_2}$, for example, supplies two $\mathrm{OH^-}$ ions.

For a weak monoprotic acid, neglect autoprotolysis and approximate activities by reduced concentrations. Setting $x=[\mathrm{H_3O^+}]$ gives, with concentrations expressed numerically in $\mathrm{mol\,L^{-1}}$,
$$
K_a=\dfrac{x^2}{C-x},
\qquad x=\dfrac{-K_a+\sqrt{K_a^2+4K_aC}}{2}.
$$
This customary numerical notation leaves the standard concentration implicit. If $x$ is small compared with $C$, use $x\simeq\sqrt{K_aC}$. For $C=0.010$ and $K_a=1.8\cdot10^{-5}$, the equation gives $x=4.15\cdot10^{-4}$ and $\mathrm{pH}=3.38$. For a weak base, apply the same equation to $x=[\mathrm{OH^-}]$, then obtain pH from pOH.

When the strong acid concentration is comparable to hydronium concentration in water, autoprotolysis must be included. A strong monoprotic acid of concentration $C$ satisfies $h=C+\dfrac{K_w}{h}$ in the ideal model, where $h$ is the numerical hydronium concentration.
:::

:::osservazione{titolo="Checking the neglected dissociation"}
Check the approximations after calculating. For the acetic acid example, $\dfrac{x}{C}\simeq0.0415$: about $4.15\%$ is dissociated. The square-root approximation provides a good estimate, while the quadratic equation retains the consumption of acid in the denominator. If instead $K_a=10^{-3}$ and $C=0.010$, about $27\%$ is dissociated: replacing $C-x$ with $C$ is unjustified. Calling an acid “weak” is not enough to choose a formula.

At very low concentrations, or when several species react at once, the general approach combines material balance, electroneutrality and equilibrium constants. Simplified formulas follow from these constraints; they are not alternative rules that may violate charge conservation.
:::

## Polyprotic acids, neutralisation and salts

:::definizione{#poliprotici titolo="Successive dissociations and amphiprotic species"}
A **polyprotic acid** can donate more than one proton in distinct steps. For a diprotic acid,
$$
\mathrm{H_2A\rightleftharpoons H^++HA^-},\qquad
\mathrm{HA^-\rightleftharpoons H^++A^{2-}},
$$
the constants are $K_{a1}$ and $K_{a2}$. Each step has its own constant and must be considered separately. If $K_{a1}\gg K_{a2}$, the first step may dominate pH in a solution containing only the acid; the small amount predicted from the second step checks this assumption. Polyprotic bases accept protons successively: $\mathrm{CO_3^{2-}}$ can form $\mathrm{HCO_3^-}$ and then $\mathrm{H_2CO_3}$.

For a salt of the amphiprotic species $\mathrm{HA^-}$, when concentration is high enough for water to be negligible and the adjacent steps are well separated,
$$
\mathrm{pH}\simeq\dfrac{pK_{a1}+pK_{a2}}{2}.
$$
For bicarbonate with $pK_{a1}=6.37$ and $pK_{a2}=10.33$, this gives $\mathrm{pH}\simeq8.35$. The first constant is apparent here: the acidic component includes $\mathrm{CO_2(aq)}$ and $\mathrm{H_2CO_3}$, rather than the latter species alone.
:::

:::osservazione{#neutralizzazione-sali titolo="Neutralisation, equivalence and hydrolysis"}
Neutralisation follows $\mathrm{H_3O^++OH^-\rightarrow2H_2O}$. First compare the reacting mole amounts; then divide any excess by the total volume. Equivalence corresponds to the stoichiometric ratio between acid and base.

Salts release ions that may react with water. Acetate, the conjugate base of a weak acid, follows $\mathrm{CH_3COO^-+H_2O\rightleftharpoons CH_3COOH+OH^-}$; its basic constant is $\dfrac{K_w}{K_a}$. Ammonium is an acid with $K_a=\dfrac{K_w}{K_b(\mathrm{NH_3})}$. Sodium acetate solution is therefore basic, whereas ammonium chloride solution is acidic. NaCl is approximately neutral in the dilute model because hydrolysis of its ions is negligible.

At equivalence in a weak-acid/strong-base titration, the conjugate-base salt remains, so pH is basic at $25\,^\circ\mathrm C$. If both ions of a salt react with water, the outcome depends on the constants of both equilibria.
:::

:::esempio{titolo="Following a titration"}
Titrating HA with a strong base passes through different chemical situations. Initially the weak acid predominates; before equivalence HA and its conjugate base coexist; at equivalence the salt predominates; beyond equivalence excess added hydroxide dominates. Applying Henderson–Hasselbalch after one component is exhausted gives a meaningless ratio. At half-equivalence, the stoichiometric amounts of HA and $\mathrm{A^-}$ are equal; at equivalence, the initial acid amount equals the added strong-base amount.

![Weak-acid titration curve distinguishing half-equivalence from equivalence](/figure/chimica-semestre-filtro/acidi-basi-redox/titolazione-en.svg)

The graph solves the balances for an ideal model at $25\,^\circ\mathrm C$: $25\,\mathrm{mL}$ of $0.10\,\mathrm{mol\,L^{-1}}$ HA, $pK_a=4.76$, titrated with NaOH of the same concentration. Equivalence at $25\,\mathrm{mL}$ is basic because $\mathrm{A^-}$ undergoes hydrolysis.
:::

## Buffers and buffer capacity

:::definizione{#tamponi titolo="A buffer pair and Henderson–Hasselbalch"}
A **buffer solution** contains appreciable amounts of a weak acid and its conjugate base, or a weak base and its conjugate acid. The conjugate base consumes a small addition of strong acid; the weak acid consumes a small addition of strong base.

Rearranging the definition of $K_a$ gives
$$
\mathrm{pH}=pK_a+\log_{10}\dfrac{a_{\mathrm{A^-}}}{a_{\mathrm{HA}}}
\simeq pK_a+\log_{10}\dfrac{[\mathrm{A^-}]}{[\mathrm{HA}]}.
$$
The equilibrium-concentration form requires activities approximated by reduced concentrations. Replacing these with amounts from a stoichiometric balance additionally requires that subsequent re-equilibration changes them only slightly. For components in the same solution, volume cancels and the mole ratio can be used after updating the amounts for any reaction with added acid or base. With $0.030\,\mathrm{mol}$ of acetate and $0.020\,\mathrm{mol}$ of acetic acid, assuming $pK_a=4.76$, the result is $\mathrm{pH}=4.94$.
:::

:::esempio{titolo="Ammonia and ammonium buffer"}
A buffer pair can also be described starting from a weak base. For ammonia and ammonium at $25\,^\circ\mathrm C$, with $K_b=1.80\cdot10^{-5}$, use
$$
\mathrm{pOH}=pK_b+\log_{10}\dfrac{[\mathrm{NH_4^+}]}{[\mathrm{NH_3}]}.
$$
If the ideal-model concentrations are approximately $0.020\,\mathrm{mol\,L^{-1}}$ ammonium and $0.010\,\mathrm{mol\,L^{-1}}$ ammonia, the results are $\mathrm{pOH}\simeq4.745+\log_{10}2=5.046$ and $\mathrm{pH}\simeq8.95$, using $pK_w=14.00$. The pOH formula uses conjugate acid/base as its ratio. Ammonia consumes added acid, while ammonium can neutralise added base.
:::

:::osservazione{#capacita-tampone titolo="How effectively a buffer resists change"}
The base-to-acid ratio determines pH, whereas the total amount determines how much added reagent can be absorbed. **Buffer capacity** measures the moles of strong acid or base per litre required for a unit change in pH under the stated conditions.

For a closed monoprotic pair at fixed total concentration, the contribution of that pair to buffer capacity is greatest near $\mathrm{pH}=pK_a$. The interval $pK_a\pm1$ corresponds to base-to-acid ratios from $0.1$ to $10$. Buffers with the same ratio but total concentrations of $0.10$ and $0.010\,\mathrm{mol\,L^{-1}}$ have approximately the same pH; the more concentrated buffer withstands a larger addition before a large change.
:::

:::osservazione{titolo="Dilution and buffer capacity"}
Moderate dilution approximately preserves the base-to-acid ratio and therefore pH, but reduces capacity per litre. The total number of moles in the same vessel remains unchanged if only solvent is added: distinguish a volume-based property from the total amount. Extreme dilution, changing activity coefficients and the contribution of water can invalidate simple ratio invariance.

![Mole balance of acid and conjugate base before and after adding strong acid](/figure/chimica-semestre-filtro/acidi-basi-redox/tampone-en.svg)

In the illustrated case, $5\,\mathrm{mmol}$ of HCl convert acetate into acetic acid. The total pair remains $50\,\mathrm{mmol}$, while the ratio governing pH changes.
:::

## Buffer systems in biological fluids

:::osservazione{#tamponi-biologici titolo="Bicarbonate, phosphate and proteins"}
In the bicarbonate system, equilibria connect dissolved $\mathrm{CO_2}$, $\mathrm{H_2CO_3}$ and $\mathrm{HCO_3^-}$. Blood is an open system: it exchanges $\mathrm{CO_2}$ with the lungs, while bicarbonate and proton balance involves the kidneys. A model at $37\,^\circ\mathrm C$ uses
$$
\mathrm{pH}\simeq6.1+\log_{10}
\dfrac{[\mathrm{HCO_3^-}]}{\alpha p_{\mathrm{CO_2}}},
\qquad \alpha\simeq0.030\,\dfrac{\mathrm{mmol}}{\mathrm{L\,mmHg}}.
$$
Bicarbonate concentration is expressed in $\mathrm{mmol\,L^{-1}}$ and pressure in $\mathrm{mmHg}$. The apparent $pK$ incorporates equilibrium with dissolved $\mathrm{CO_2}$. With $24\,\mathrm{mmol\,L^{-1}}$ and $40\,\mathrm{mmHg}$, the model gives $\mathrm{pH}\simeq7.40$.

The phosphate pair $\mathrm{H_2PO_4^-/HPO_4^{2-}}$ exchanges one proton and is especially relevant in intracellular compartments and urine. Proteins contain ionisable groups, including side-chain groups; haemoglobin contributes to blood buffering. Chemical buffering is distinct from the physiological processes that restore component amounts.

Acidosis describes a process tending to lower pH; alkalosis describes a process tending to raise it. Their direction is interpreted through the equilibria and exchanges of the system.
:::

:::esempio{titolo="Variables in the bicarbonate model"}
In the bicarbonate model, doubling $\mathrm{CO_2}$ pressure while holding bicarbonate fixed doubles the denominator and lowers pH by $\log_{10}2\simeq0.30$. This comparison helps interpret the variables; it does not automatically describe an organism's response, where other processes may change concentrations at the same time. A chemical buffer and physiological acid–base regulation are different levels of description.
:::

## Solubility and acid–base equilibrium

:::osservazione{#solubilita-ph titolo="Protonation and dissolution of salts"}
Dissolution of a sparingly soluble salt and protonation of its anions are coupled equilibria. For calcium oxalate,
$$
\mathrm{CaC_2O_4(s)\rightleftharpoons Ca^{2+}+C_2O_4^{2-}},
\qquad K_{ps}=a_{\mathrm{Ca^{2+}}}a_{\mathrm{C_2O_4^{2-}}}.
$$
Adding acid favours $\mathrm{C_2O_4^{2-}+H^+\rightleftharpoons HC_2O_4^-}$. Lower free-oxalate activity allows more solid to dissolve. Calcium phosphates are also sensitive to protonation of phosphate.

In the uric-acid/urate system, lowering pH increases the fraction of neutral uric acid; its low solubility may favour precipitation. Sodium urate behaviour also depends on temperature, ionic activities and solution composition. The salt's name alone therefore does not determine how solubility varies with pH. These equilibria illustrate the chemistry of deposits and stones.
:::

:::osservazione{titolo="Free species and total concentration"}
The solubility product does not contain the sum of all analytical forms of oxalate: it contains the free ion in the specified dissolution reaction. A measurement of “total oxalate” requires distinguishing protonated and free fractions before calculating the ion product. Temperature and the solid phase must be defined; a different crystal form or the presence of complexing agents introduces further equilibria.

![Dissolution equilibrium coupled to protonation of free oxalate](/figure/chimica-semestre-filtro/acidi-basi-redox/solubilita-en.svg)
:::

## Oxidation, reduction and balancing

:::definizione{#redox titolo="Electron transfer and redox agents"}
**Oxidation** corresponds to losing electrons and increasing oxidation number; reduction corresponds to gaining electrons. The reducing agent donates electrons and is oxidised; the oxidising agent accepts them and is reduced.
$$
\mathrm{Zn\rightarrow Zn^{2+}+2e^-},\qquad
\mathrm{Cu^{2+}+2e^-\rightarrow Cu}.
$$
In the zinc/copper(II) reaction, zinc is therefore the reducing agent and copper(II) ions are the oxidising agent. The total numbers of electrons donated and accepted must match.
:::

:::osservazione{#bilanciamento-redox titolo="The half-reaction method"}
In acidic medium, balance atoms other than hydrogen and oxygen, then oxygen using water, hydrogen using protons, and charge using electrons. Multiply the half-reactions until their electron counts agree, then add them. For permanganate and iron(II),
$$
\begin{aligned}
\mathrm{MnO_4^-+8H^++5e^-}&\mathrm{\rightarrow Mn^{2+}+4H_2O},\\
\mathrm{5Fe^{2+}}&\mathrm{\rightarrow5Fe^{3+}+5e^-},\\
\mathrm{MnO_4^-+8H^++5Fe^{2+}}&\mathrm{\rightarrow Mn^{2+}+4H_2O+5Fe^{3+}}.
\end{aligned}
$$
The total charge is $+17$ on each side. In basic medium, one approach is to complete the acidic balancing and add as many hydroxide ions to both sides as there are protons. Protons and hydroxide form water, which is cancelled where it occurs on both sides.
:::

:::osservazione{titolo="Checking atoms and charge"}
Half-reaction electrons are bookkeeping devices: they must cancel completely in the overall equation. An equation may balance every atom yet have different total charges on its sides; it is still incomplete. Acidic or basic conditions determine which species are used to balance hydrogen and oxygen, and may also influence the actual product obtained from a reagent.

![Five iron oxidations balance the reduction of one permanganate ion](/figure/chimica-semestre-filtro/acidi-basi-redox/redox-en.svg)
:::

## Electrochemical cells, energy and potential

:::definizione{#celle-potenziali titolo="Anode, cathode and standard potentials"}
A **galvanic cell** carries out a spontaneous redox reaction by separating the half-reactions into compartments connected by an external circuit and an ionic connection. Oxidation occurs at the anode and reduction at the cathode. In a galvanic cell the anode is negative and the cathode positive. Electrons travel externally from anode to cathode, while the salt bridge maintains electroneutrality.

Tabulated potentials are written as reduction potentials relative to a reference electrode. Standard potential $E^\circ$ refers to unit activities, gases at standard pressure and a stated temperature; a pure solid has unit activity. For the complete reaction,
$$
E^\circ=E^\circ_{\mathrm{red,c}}-E^\circ_{\mathrm{red,a}}.
$$
Subscripts $c$ and $a$ denote cathode and anode; both values are reduction potentials. Using $E^\circ(\mathrm{Cu^{2+}/Cu})=0.34\,\mathrm V$ and $E^\circ(\mathrm{Zn^{2+}/Zn})=-0.76\,\mathrm V$ gives $1.10\,\mathrm V$. Multiplying a half-reaction to balance electrons leaves its potential unchanged.
:::

:::esempio{titolo="Electrodes and conduction in a cell"}
An electrode's name depends on its reaction, not its electrical sign: oxidation at the anode and reduction at the cathode also hold in an electrolytic cell, where an external power source drives the change and the signs differ. In the zinc–copper cell, the salt bridge is not a route for electrons: it provides ionic conduction. Charge accumulation would quickly stop the process if the compartments were joined only by a wire.

![Zinc–copper cell: electrons in the wire and ions in the salt bridge](/figure/chimica-semestre-filtro/acidi-basi-redox/pila-en.svg)
:::

:::osservazione{#nernst-gibbs titolo="The Nernst equation and electrical work"}
Under actual conditions, potential depends on the dimensionless reaction quotient $Q$:
$$
E=E^\circ-\dfrac{RT}{nF}\ln Q.
$$
$R$ is the gas constant, $T$ absolute temperature, $n$ the number of electrons transferred per reaction, and $F\simeq96485\,\mathrm{C\,mol^{-1}}$ the Faraday constant. At $25\,^\circ\mathrm C$,
$$
E=E^\circ-\dfrac{0.05916\,\mathrm V}{n}\log_{10}Q.
$$
For $\mathrm{Zn+Cu^{2+}\rightarrow Zn^{2+}+Cu}$, $Q=\dfrac{a_{\mathrm{Zn^{2+}}}}{a_{\mathrm{Cu^{2+}}}}$. If $Q=100$, the potential is $1.041\,\mathrm V$.

The reaction Gibbs energy is $\Delta_rG=-nFE$, and under standard conditions $\Delta_rG^\circ=-nFE^\circ$. Thus $E>0$ corresponds to a spontaneous reaction in the written direction. At constant temperature and pressure, when electrical work is the only non-expansion work, the maximum electrical work delivered reversibly per mole of reaction is $-\Delta_rG$. At equilibrium $E=0$ and $Q=K$, giving $\ln K=\dfrac{nFE^\circ}{RT}$. A transformed biochemical standard potential, often denoted by a prime, refers to specified conditions such as fixed pH $7$; distinguish it from the chemical standard potential with unit proton activity.
:::

:::osservazione{titolo="Potential and actual conditions"}
Potential is intensive. Doubling an equation doubles both the electron count and Gibbs energy change, but leaves $-\dfrac{\Delta_rG}{nF}$ unchanged. This is why potentials are not multiplied by stoichiometric coefficients. Furthermore, $E^\circ>0$ describes standard conditions: a sufficiently large quotient at another composition can make $E$ negative. The favoured direction depends on the actual conditions.

![Dependence of zinc–copper cell potential on the logarithm of the reaction quotient](/figure/chimica-semestre-filtro/acidi-basi-redox/nernst-en.svg)
:::

## Oxygen, respiration and radical species

:::osservazione{#ossigeno-respirazione titolo="Oxygen as an electron acceptor"}
In cellular respiration, oxygen accepts electrons at the end of the transport chain and is reduced to water. Written in acidic medium, the half-reaction is
$$
\mathrm{O_2+4H^++4e^-\rightarrow2H_2O}.
$$
The idealised overall balance for glucose oxidation is $\mathrm{C_6H_{12}O_6+6O_2\rightarrow6CO_2+6H_2O}$. Carbon is oxidised and oxygen is reduced. Part of the available Gibbs energy is conserved through coupling to ATP synthesis; the fraction depends on conditions and the coupled processes.

The oxygen/water potential also depends on pH. Taking $E^\circ=1.229\,\mathrm V$ at $25\,^\circ\mathrm C$, unit water activity and standard oxygen pressure, Nernst gives $E=1.229-0.05916\,\mathrm{pH}$ in volts. At pH $7$, the result is approximately $0.815\,\mathrm V$.
:::

:::osservazione{#fenton-haber-weiss titolo="Fenton chemistry and the Haber–Weiss balance"}
Partial reduction of oxygen can produce superoxide $\mathrm{O_2^{\bullet-}}$ and hydrogen peroxide $\mathrm{H_2O_2}$. In the radical model of the Fenton reaction,
$$
\mathrm{Fe^{2+}+H_2O_2\rightarrow Fe^{3+}+OH^-+{}^\bullet OH}.
$$
Iron(II) is oxidised and peroxide participates in forming the highly reactive hydroxyl radical. Superoxide can reduce iron(III) to iron(II):
$$
\mathrm{Fe^{3+}+O_2^{\bullet-}\rightarrow Fe^{2+}+O_2}.
$$
Adding these equations gives the balance commonly called **Haber–Weiss**,
$$
\mathrm{O_2^{\bullet-}+H_2O_2\rightarrow O_2+OH^-+{}^\bullet OH}.
$$
This balance describes a metal-mediated cycle; the direct reaction between superoxide and peroxide is slow. Iron speciation and the chemical environment influence intermediates and rates. The model illustrates why an overall feasible transformation also needs a kinetically accessible pathway.
:::

:::osservazione{titolo="Distinguishing radicals and ions"}
A dot beside a symbol denotes an unpaired electron. $\mathrm{OH^-}$ and ${}^\bullet\mathrm{OH}$ are not interchangeable: their charge and electronic structure differ. Hydrogen peroxide is a reactive oxygen species, but is not itself a radical in its usual structure. A test in which a chelator reduces oxidation of a molecule suggests a role for metal availability; alone it neither identifies every intermediate nor proves that all chelators have the same effect.

![Iron recycling in the radical Fenton model and the catalysed Haber–Weiss balance](/figure/chimica-semestre-filtro/acidi-basi-redox/fenton-en.svg)
:::
