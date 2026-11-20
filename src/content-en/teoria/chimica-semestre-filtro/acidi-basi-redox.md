---
titolo: "Acids, bases, buffers and oxidation–reduction reactions"
sommario: "Acid–base equilibria, pH calculations, biological buffers, redox balancing and electrochemical potentials."
---

:::osservazione{titolo="Composition and transformations"}
Acids and bases are among the most common substances: gastric juice is acidic, blood is slightly basic and every cell works only within a narrow range of acidity. This chapter deals with two kinds of reaction. In **acid-base** reactions one substance gives an $\mathrm{H^+}$ ion (a proton) to another. In **oxidation-reduction** (or redox) reactions one substance gives electrons to another.

The first part explains what acids and bases are, how acidity is measured with pH and how **buffers** work, that is, solutions that keep the pH almost constant even when an acid or a base is added. The second part explains how a redox reaction is recognised and balanced and how a redox reaction produces electric current in a cell. In the problems of this chapter the procedure is always the same: the substances present are identified, any complete reaction between acid and base is carried out, and only then is the equilibrium calculated.
:::

## Definitions of acids and bases

:::definizione{#acidi-basi titolo="Arrhenius and Brønsted–Lowry"}
There are three definitions of acid and base, each more general than the last.

According to **Arrhenius** an acid is a substance that releases $\mathrm{H^+}$ ions in water and a base is a substance that releases hydroxide ions $\mathrm{OH^-}$ in water. Hydrochloric acid HCl is an acid and sodium hydroxide NaOH is a base. In water the $\mathrm{H^+}$ ion does not stay free: it binds at once to a water molecule and forms the **hydronium** ion $\mathrm{H_3O^+}$. The notations $\mathrm{H^+}$ and $\mathrm{H_3O^+}$ therefore denote the same thing.

According to **Brønsted and Lowry** an acid is a substance that gives up a proton and a base is a substance that gains it. This definition also holds outside water and explains why ammonia is a base even though it contains no OH. In every acid-base reaction an acid gives the proton to a base.
$$
\mathrm{HA+B\rightleftharpoons A^-+BH^+}.
$$
When the acid $\mathrm{HA}$ gives up the proton it becomes $\mathrm{A^-}$, which in turn can regain it and is therefore a base. $\mathrm{HA}$ and $\mathrm{A^-}$ form a **conjugate pair**, that is, two substances that differ by a single proton. In the same way $\mathrm{BH^+}$ and $\mathrm B$ form the second pair. For example, in the reaction $\mathrm{NH_3+H_2O\rightleftharpoons NH_4^++OH^-}$ ammonia gains a proton and is the base; water gives it up and is the acid. The conjugate pairs are $\mathrm{NH_4^+/NH_3}$ and $\mathrm{H_2O/OH^-}$.
:::

:::definizione{#lewis-anfoliti titolo="Lewis acids and bases; amphiprotic species"}
According to **Lewis** an acid is a substance that accepts a pair of electrons and a base is a substance that donates it. A bond forms between the two. For example, in $\mathrm{BF_3+NH_3\rightarrow F_3B\!\leftarrow\!NH_3}$ the nitrogen of ammonia donates its lone pair to boron, which has only six electrons. Ammonia is the Lewis base and $\mathrm{BF_3}$ is the Lewis acid. This definition also covers reactions in which no proton moves.

An **amphiprotic** (or amphoteric) substance can behave either as an acid or as a base, depending on the substance it reacts with. The ion $\mathrm{H_2PO_4^-}$ can give up a proton and become $\mathrm{HPO_4^{2-}}$, or gain one and become $\mathrm{H_3PO_4}$. Water is also amphiprotic: it gives a proton to ammonia and gains one from HCl.
:::

:::esempio{titolo="Recognising conjugate pairs"}
To find the conjugate base of an acid, an $\mathrm{H^+}$ is removed from the formula: one hydrogen atom disappears and the charge decreases by one unit. From $\mathrm{H_2PO_4^-}$ one gets $\mathrm{HPO_4^{2-}}$. To find the conjugate acid of a base, an $\mathrm{H^+}$ is added: from $\mathrm{NH_3}$ one gets $\mathrm{NH_4^+}$. The two substances of a conjugate pair always differ by one proton and nothing else. In the reaction between ammonia and water, $\mathrm{NH_3}$ and $\mathrm{OH^-}$ do not form a conjugate pair, because they are the two bases of the two pairs.

![Transfers of one proton between the four phosphate forms](/figure/chimica-semestre-filtro/acidi-basi-redox/coppie-en.svg)

The figure shows the four forms of phosphate, from $\mathrm{H_3PO_4}$ to $\mathrm{PO_4^{3-}}$. Each step corresponds to the loss or gain of one proton. Which form prevails in a solution depends on the pH.
:::

## Water autoprotolysis and pH

:::definizione{#kw-ph titolo="The ion product of water and the pH scale"}
Pure water contains a very small amount of ions, because every so often a water molecule gives a proton to another. This reaction is called the **autoprotolysis** (or self-ionisation) of water.
$$
\mathrm{2H_2O\rightleftharpoons H_3O^++OH^-}.
$$
The constant of this equilibrium is the **ion product of water**, $K_w=a_{\mathrm{H_3O^+}}a_{\mathrm{OH^-}}$. The symbol $a$ denotes the activity, which in dilute solutions coincides with the numerical value of the concentration in $\mathrm{mol\,L^{-1}}$: $a_i\simeq\dfrac{[i]}{c^\circ}$, with $c^\circ=1\,\mathrm{mol\,L^{-1}}$. In practice $K_w=[\mathrm{H_3O^+}][\mathrm{OH^-}]$. At $25\,^\circ\mathrm C$ it is $10^{-14}$. In every aqueous solution the product of the two concentrations has this value, so if one increases the other decreases.

The concentrations of $\mathrm{H_3O^+}$ are very small numbers, awkward to use. This is why the **pH** is used, defined as $-\log_{10}a_{\mathrm{H_3O^+}}$, that is, in practice $\mathrm{pH}=-\log_{10}[\mathrm{H_3O^+}]$. In the same way $\mathrm{pOH}=-\log_{10}[\mathrm{OH^-}]$ and $pK_w=-\log_{10}K_w$. From the ion product it follows that
$$
\mathrm{pH+pOH}=pK_w.
$$
At $25\,^\circ\mathrm C$ one has $pK_w=14$, so $\mathrm{pH}+\mathrm{pOH}=14$. Three cases are distinguished.

- **Neutral** solution: $[\mathrm{H_3O^+}]=[\mathrm{OH^-}]=10^{-7}\,\mathrm{mol\,L^{-1}}$ and $\mathrm{pH}=7$.
- **Acidic** solution: $[\mathrm{H_3O^+}]>10^{-7}\,\mathrm{mol\,L^{-1}}$ and $\mathrm{pH}<7$.
- **Basic** solution: $[\mathrm{H_3O^+}]<10^{-7}\,\mathrm{mol\,L^{-1}}$ and $\mathrm{pH}>7$.

For example, a solution with $[\mathrm{H_3O^+}]=10^{-3}\,\mathrm{mol\,L^{-1}}$ has $\mathrm{pH}=3$ and $\mathrm{pOH}=11$. The value 7 for neutrality holds at $25\,^\circ\mathrm C$; at different temperatures $K_w$ changes and the pH of a neutral solution is $\dfrac{pK_w}{2}$.
:::

:::osservazione{#indicatori titolo="Acid–base indicators"}
An **indicator** is a substance that changes colour according to the pH. It is a weak acid, written HIn, whose conjugate base $\mathrm{In^-}$ has a different colour: $\mathrm{HIn\rightleftharpoons H^++In^-}$. In an acidic environment HIn prevails and its colour is seen; in a basic environment $\mathrm{In^-}$ prevails. The change from one colour to the other takes place over a range of about two pH units around the $pK_a$ of the indicator, called the transition range. In a titration an indicator is chosen whose transition range includes the pH of the equivalence point.
:::

:::osservazione{titolo="Reading the pH scale"}
The pH scale is logarithmic, so each pH unit corresponds to a factor of 10 in the concentration of $\mathrm{H_3O^+}$. A solution at pH 3 is ten times more acidic than one at pH 4 and a hundred times more acidic than one at pH 5. For the same reason the pH of a mixture of two solutions is not the average of the two pH values: the total moles of $\mathrm{H_3O^+}$ are calculated first, taking any reactions into account, and then the pH. The most common pH values lie between 0 and 14; very concentrated solutions of strong acids or bases have values outside this range.

![pH of a very dilute strong acid, including water autoprotolysis](/figure/chimica-semestre-filtro/acidi-basi-redox/diluizione-en.svg)

The figure shows the pH of an increasingly dilute strong acid, at $25\,^\circ\mathrm C$. As long as the acid is concentrated enough the pH is $-\log_{10}C$, where $C$ is the concentration of the acid. When the acid is very dilute the $\mathrm{H_3O^+}$ ions produced by water also count, and the pH approaches 7 while staying below 7. A $10^{-8}\,\mathrm{mol\,L^{-1}}$ solution of HCl therefore has a pH slightly below 7, and not 8.
:::

## Strong and weak acids and bases

:::definizione{#ka-kb titolo="Dissociation constants and acid–base strength"}
The **strength** of an acid shows how much the acid dissociates in water, that is, what fraction of its molecules gives up the proton. It is measured by the **acid dissociation constant** $K_a$, which is the equilibrium constant of the reaction between the acid and water. For an acid HA with a single proton (monoprotic) it is written
$$
\mathrm{HA+H_2O\rightleftharpoons H_3O^++A^-},
\qquad K_a=\dfrac{a_{\mathrm{H_3O^+}}a_{\mathrm{A^-}}}{a_{\mathrm{HA}}}.
$$
The larger $K_a$, the more the acid is dissociated and the stronger it is. For convenience $pK_a=-\log_{10}K_a$ is used: a stronger acid has a smaller $pK_a$. For a base B, which reacts with water according to $\mathrm{B+H_2O\rightleftharpoons BH^++OH^-}$, $K_b=\dfrac{a_{\mathrm{BH^+}}a_{\mathrm{OH^-}}}{a_{\mathrm B}}$ and $pK_b=-\log_{10}K_b$ are defined in the same way. For an acid and its conjugate base $K_aK_b=K_w$ holds, that is, $pK_a+pK_b=14$ at $25\,^\circ\mathrm C$. As a consequence a stronger acid has a weaker conjugate base.

A **strong acid** is completely dissociated in water: all its molecules give up the proton. HCl, $\mathrm{HNO_3}$ and $\mathrm{H_2SO_4}$ are strong acids. A **weak acid** is only partly dissociated and most of its molecules stay whole. Acetic acid, with $K_a=1.8\cdot10^{-5}$, is a weak acid. The same holds for bases: NaOH is a strong base and ammonia is a weak base. Strength is a different property from concentration, which shows how much substance is dissolved in one litre: a solution can contain a very dilute strong acid or a very concentrated weak acid.
:::

:::osservazione{#calcolo-ph titolo="Calculating pH and checking approximations"}
The calculation of pH depends on the kind of acid or base.

**Strong acid**. It is completely dissociated, so the concentration of $\mathrm{H_3O^+}$ equals the concentration $C$ of the acid: $[\mathrm{H_3O^+}]\simeq C$ and $\mathrm{pH}=-\log_{10}C$. A $0.010\,\mathrm{mol\,L^{-1}}$ solution of HCl has $\mathrm{pH}=2$.

**Strong base**. The concentration of $\mathrm{OH^-}$ equals the concentration of the base multiplied by the number of hydroxide ions in the formula; $\mathrm{Ca(OH)_2}$ releases two. The pOH is calculated and then $\mathrm{pH}=14-\mathrm{pOH}$. A $0.010\,\mathrm{mol\,L^{-1}}$ solution of NaOH has $\mathrm{pOH}=2$ and $\mathrm{pH}=12$.

**Weak acid**. It is only partly dissociated, so the equilibrium is used. The concentration of acid that dissociates is called $x$. At equilibrium $[\mathrm{H_3O^+}]=[\mathrm{A^-}]=x$ and $[\mathrm{HA}]=C-x$. Substituting into the expression of $K_a$, with concentrations in $\mathrm{mol\,L^{-1}}$, gives
$$
K_a=\dfrac{x^2}{C-x},
\qquad x=\dfrac{-K_a+\sqrt{K_a^2+4K_aC}}{2}.
$$
The second formula is the solution of the quadratic equation. If the acid is only slightly dissociated, $x$ is much smaller than $C$, one can write $C-x\simeq C$ and the formula becomes $x\simeq\sqrt{K_aC}$. For example, for acetic acid with $C=0.010$ and $K_a=1.8\cdot10^{-5}$ the approximate formula gives $x=\sqrt{1.8\cdot10^{-7}}=4.2\cdot10^{-4}$ and the exact one gives $x=4.15\cdot10^{-4}$, so $\mathrm{pH}=3.38$.

**Weak base**. One proceeds in the same way with $K_b$ in place of $K_a$: $x$ is the concentration of $\mathrm{OH^-}$, from which the pOH and then the pH are obtained.

These formulas neglect the ions produced by the autoprotolysis of water, and are valid when the concentration of the acid is much greater than $10^{-7}\,\mathrm{mol\,L^{-1}}$. For a very dilute strong acid water is also taken into account by solving the equation $h=C+\dfrac{K_w}{h}$, where $h$ is the concentration of $\mathrm{H_3O^+}$.
:::

:::osservazione{titolo="Checking the neglected dissociation"}
The approximation $x\simeq\sqrt{K_aC}$ is valid if the dissociated fraction of the acid, $\dfrac{x}{C}$, is small; a value below 5% is usually accepted. The check is made after the calculation. For the acetic acid of the example $\dfrac{x}{C}\simeq0.0415$, that is, about 4%, so the approximation is acceptable. For an acid with $K_a=10^{-3}$ at the same concentration $C=0.010$ the dissociated fraction is about 27%, so the quadratic equation is used.

In more complex cases, for example with very low concentrations or with several acids and bases together, the pH is calculated by combining three kinds of equations into a system: the equilibrium constants, the mass balance (the total amount of each substance is conserved) and electroneutrality (the sum of the positive charges equals that of the negative charges). The formulas used so far are special cases of this system.
:::

## Polyprotic acids, neutralisation and salts

:::definizione{#poliprotici titolo="Successive dissociations and amphiprotic species"}
A **polyprotic acid** has more than one proton to give up. Carbonic acid $\mathrm{H_2CO_3}$ has two (diprotic) and phosphoric acid $\mathrm{H_3PO_4}$ has three (triprotic). The protons are given up one at a time, in successive steps, each with its own constant. For a diprotic acid $\mathrm{H_2A}$ the steps are
$$
\mathrm{H_2A\rightleftharpoons H^++HA^-},\qquad
\mathrm{HA^-\rightleftharpoons H^++A^{2-}},
$$
The constants of the two steps are written $K_{a1}$ and $K_{a2}$. The second is always much smaller than the first, because it is harder to remove a proton from an ion that is already negative. For this reason, in calculating the pH of a solution of the acid, it is usually enough to consider the first step. A polyprotic base gains protons in several steps: the carbonate ion $\mathrm{CO_3^{2-}}$ first becomes $\mathrm{HCO_3^-}$ and then $\mathrm{H_2CO_3}$.

The intermediate form $\mathrm{HA^-}$ is amphiprotic, because it can give up a proton or gain one. The pH of a solution of one of its salts, for example sodium bicarbonate, is about the average of the two $pK_a$ values and depends little on the concentration.
$$
\mathrm{pH}\simeq\dfrac{pK_{a1}+pK_{a2}}{2}.
$$
For example, for bicarbonate $pK_{a1}=6.37$ and $pK_{a2}=10.33$, so $\mathrm{pH}\simeq\dfrac{6.37+10.33}{2}=8.35$, and a solution of sodium bicarbonate is slightly basic. The value of $pK_{a1}$ used here takes into account the fact that in water carbonic acid is in equilibrium with dissolved $\mathrm{CO_2}$.
:::

:::osservazione{#neutralizzazione-sali titolo="Neutralisation, equivalence and hydrolysis"}
**Neutralisation** is the reaction between an acid and a base. The $\mathrm{H_3O^+}$ ions of the acid and the $\mathrm{OH^-}$ ions of the base combine and form water: $\mathrm{H_3O^++OH^-\rightarrow2H_2O}$. The calculation is carried out in two steps. The moles of acid and of base are compared to establish which of the two is in excess; then the excess is divided by the total volume and the pH is calculated. For example, mixing $50\,\mathrm{mL}$ of $0.10\,\mathrm{mol\,L^{-1}}$ HCl ($5.0\,\mathrm{mmol}$) with $30\,\mathrm{mL}$ of $0.10\,\mathrm{mol\,L^{-1}}$ NaOH ($3.0\,\mathrm{mmol}$) leaves $2.0\,\mathrm{mmol}$ of acid in $80\,\mathrm{mL}$, that is, $0.025\,\mathrm{mol\,L^{-1}}$, and $\mathrm{pH}=1.6$. The **equivalence point** is reached when the moles of base added are exactly those required by the acid.

Neutralisation gives a salt. A solution of a salt is not always neutral, because its ions can react with water; this reaction is called **hydrolysis**. Three cases are distinguished.

- The anion of a weak acid is a base. The acetate ion reacts with water according to $\mathrm{CH_3COO^-+H_2O\rightleftharpoons CH_3COOH+OH^-}$, with constant $K_b=\dfrac{K_w}{K_a}$. A solution of sodium acetate is therefore basic.
- The cation of a weak base is an acid. The ammonium ion has $K_a=\dfrac{K_w}{K_b(\mathrm{NH_3})}$. A solution of ammonium chloride is therefore acidic.
- Ions that derive from strong acids and bases, such as $\mathrm{Na^+}$ and $\mathrm{Cl^-}$, do not react with water. A solution of NaCl is neutral.

As a consequence the pH at the equivalence point depends on the acid and base used. If a strong acid is neutralised by a strong base, the pH at equivalence is 7. If a weak acid is neutralised by a strong base, at equivalence the solution contains the conjugate base of the acid and the pH is greater than 7. If both ions of the salt react with water, as in ammonium acetate, the pH depends on which of the two equilibria has the larger constant.
:::

:::esempio{titolo="Following a titration"}
A **titration** is a measurement in which a base of known concentration is added little by little to a solution of an acid (or vice versa), up to the equivalence point. The amount of acid is obtained from the volume of base used. During the titration of a weak acid HA with a strong base the solution goes through four situations, and in each of them the pH is calculated differently.

1. **At the start** only the weak acid is present. The pH is calculated with $K_a$.
2. **Before equivalence** part of HA has been turned into $\mathrm{A^-}$. The solution contains both substances and is a buffer; the pH is calculated with the Henderson-Hasselbalch equation, presented in the next section. Halfway (*half-equivalence*) the amounts of HA and $\mathrm{A^-}$ are equal and $\mathrm{pH}=pK_a$.
3. **At equivalence** all HA has become $\mathrm{A^-}$. The pH is calculated from the hydrolysis of $\mathrm{A^-}$ and is basic.
4. **After equivalence** the pH is determined by the excess strong base.

![Weak-acid titration curve distinguishing half-equivalence from equivalence](/figure/chimica-semestre-filtro/acidi-basi-redox/titolazione-en.svg)

The figure shows the titration curve of $25\,\mathrm{mL}$ of a $0.10\,\mathrm{mol\,L^{-1}}$ weak acid with $pK_a=4.76$, titrated with NaOH of the same concentration, at $25\,^\circ\mathrm C$. The equivalence point lies at $25\,\mathrm{mL}$ of base added and half-equivalence at $12.5\,\mathrm{mL}$. Around half-equivalence the pH changes little; near equivalence it rises sharply.
:::

## Buffers and buffer capacity

:::definizione{#tamponi titolo="A buffer pair and Henderson–Hasselbalch"}
A **buffer solution** is a solution whose pH changes little when a small amount of acid or base is added. It contains a weak acid and its conjugate base in similar amounts, for example acetic acid and sodium acetate, or a weak base and its conjugate acid, for example ammonia and ammonium chloride. The buffer works because it contains one substance for each kind of addition.

- If a strong acid is added, the conjugate base $\mathrm{A^-}$ takes its protons and becomes HA.
- If a strong base is added, the weak acid HA gives it protons and becomes $\mathrm{A^-}$.

In both cases the strong acid or base is replaced by a weak substance, and the pH changes only slightly.

The pH of a buffer is calculated with the **Henderson-Hasselbalch equation**, which is obtained from the expression of $K_a$ by taking logarithms.
$$
\mathrm{pH}=pK_a+\log_{10}\dfrac{a_{\mathrm{A^-}}}{a_{\mathrm{HA}}}
\simeq pK_a+\log_{10}\dfrac{[\mathrm{A^-}]}{[\mathrm{HA}]}.
$$
In this formula $[\mathrm{A^-}]$ is the concentration of the conjugate base and $[\mathrm{HA}]$ that of the acid. The pH depends on the *ratio* between the two. If the concentrations are equal the logarithm is zero and $\mathrm{pH}=pK_a$. Since acid and base are in the same solution, the ratio of the moles can be used in place of the concentrations. For example, a buffer with $0.030\,\mathrm{mol}$ of acetate and $0.020\,\mathrm{mol}$ of acetic acid ($pK_a=4.76$) has $\mathrm{pH}=4.76+\log_{10}\dfrac{0.030}{0.020}=4.94$.

If a strong acid or base is added to the buffer, the moles are updated first and then the formula is applied. Adding $0.005\,\mathrm{mol}$ of HCl to the buffer of the example, acetate falls to $0.025\,\mathrm{mol}$ and acetic acid rises to $0.025\,\mathrm{mol}$, so $\mathrm{pH}=4.76$. The same amount of HCl in one litre of pure water would take the pH from 7 to $2.3$.
:::

:::esempio{titolo="Ammonia and ammonium buffer"}
A buffer can also be prepared with a weak base and its conjugate acid. For the ammonia/ammonium pair it is convenient to use the constant $K_b$ of ammonia, which at $25\,^\circ\mathrm C$ is $1.80\cdot10^{-5}$, and to calculate the pOH first with the formula below.
$$
\mathrm{pOH}=pK_b+\log_{10}\dfrac{[\mathrm{NH_4^+}]}{[\mathrm{NH_3}]}.
$$
In this formula the conjugate acid $\mathrm{NH_4^+}$ is in the numerator and the base $\mathrm{NH_3}$ in the denominator. For example, with $0.020\,\mathrm{mol\,L^{-1}}$ of ammonium and $0.010\,\mathrm{mol\,L^{-1}}$ of ammonia one has $pK_b=4.745$ and $\mathrm{pOH}=4.745+\log_{10}2=5.046$, so $\mathrm{pH}=14.00-5.046\simeq8.95$. In this buffer ammonia neutralises an added acid and the ammonium ion neutralises an added base.
:::

:::osservazione{#capacita-tampone titolo="How effectively a buffer resists change"}
In a buffer the ratio between base and acid determines the pH, while the total amount of the two substances determines how much acid or base the buffer can neutralise. The **buffer capacity** is the number of moles of strong acid or base that must be added to one litre of buffer to change the pH by one unit.

The capacity is greatest when acid and conjugate base have the same concentration, that is, at $\mathrm{pH}=pK_a$. A buffer is effective in the range $pK_a\pm1$, in which the ratio between base and acid lies between $0.1$ and $10$. To prepare a buffer at a certain pH one therefore chooses a pair with $pK_a$ close to that value. At the same ratio, a more concentrated buffer has the same pH and a larger capacity: a $0.10\,\mathrm{mol\,L^{-1}}$ buffer neutralises ten times more acid than a $0.010\,\mathrm{mol\,L^{-1}}$ one.
:::

:::osservazione{titolo="Dilution and buffer capacity"}
If a buffer is diluted with water, the concentrations of acid and base decrease in the same proportion. Their ratio stays the same, so the pH does not change; the capacity per litre, on the other hand, decreases. The total moles contained in the vessel stay the same. With very strong dilutions the pH also begins to move towards 7.

![Mole balance of acid and conjugate base before and after adding strong acid](/figure/chimica-semestre-filtro/acidi-basi-redox/tampone-en.svg)

The figure shows a buffer with a total of $50\,\mathrm{mmol}$ of acetic acid and acetate to which $5\,\mathrm{mmol}$ of HCl are added. The added acid turns $5\,\mathrm{mmol}$ of acetate into acetic acid. The total stays at $50\,\mathrm{mmol}$, while the ratio between the two substances changes, and the pH with it.
:::

## Buffer systems in biological fluids

:::osservazione{#tamponi-biologici titolo="Bicarbonate, phosphate and proteins"}
The pH of blood is kept between $7.35$ and $7.45$ by several buffers. The most important is the **bicarbonate system**. The carbon dioxide produced by cells dissolves in blood and reacts with water: $\mathrm{CO_2+H_2O\rightleftharpoons H_2CO_3\rightleftharpoons H^++HCO_3^-}$. The acid of the pair is dissolved $\mathrm{CO_2}$ and the base is the bicarbonate ion. This buffer is particularly effective because blood is an open system: the lungs eliminate $\mathrm{CO_2}$ and the kidneys regulate bicarbonate, so the two substances are continuously brought back to their normal values. The pH is calculated with the Henderson-Hasselbalch equation written for this pair, at $37\,^\circ\mathrm C$.
$$
\mathrm{pH}\simeq6.1+\log_{10}
\dfrac{[\mathrm{HCO_3^-}]}{\alpha p_{\mathrm{CO_2}}},
\qquad \alpha\simeq0.030\,\dfrac{\mathrm{mmol}}{\mathrm{L\,mmHg}}.
$$
In this formula $[\mathrm{HCO_3^-}]$ is the concentration of bicarbonate in $\mathrm{mmol\,L^{-1}}$ and $p_{\mathrm{CO_2}}$ is the partial pressure of $\mathrm{CO_2}$ in $\mathrm{mmHg}$. The product $\alpha\,p_{\mathrm{CO_2}}$ is the concentration of dissolved $\mathrm{CO_2}$, obtained from Henry's law. The number $6.1$ is the $pK_a$ of the pair under these conditions. With the normal values, $24\,\mathrm{mmol\,L^{-1}}$ and $40\,\mathrm{mmHg}$, one gets $\mathrm{pH}=6.1+\log_{10}\dfrac{24}{0.030\cdot40}=6.1+\log_{10}20\simeq7.40$.

The body has two other buffers. The **phosphate buffer** consists of the pair $\mathrm{H_2PO_4^-/HPO_4^{2-}}$, with $pK_a$ close to 7, and is important inside cells and in urine. **Proteins** contain groups that can give up or gain protons, especially in the side chains of amino acids; in blood the most important buffering protein is haemoglobin. A buffer limits the change in pH at the moment of the addition. The return of the amounts to normal values is the work of the lungs and kidneys.

**Acidosis** is a condition in which the pH of blood falls below $7.35$ and **alkalosis** a condition in which it rises above $7.45$. They are called *respiratory* if the cause is a change in $\mathrm{CO_2}$ and *metabolic* if the cause is a change in bicarbonate.
:::

:::esempio{titolo="Variables in the bicarbonate model"}
The formula makes it possible to predict the effect of a change. If $p_{\mathrm{CO_2}}$ doubles and bicarbonate stays constant, the denominator doubles and the pH decreases by $\log_{10}2\simeq0.30$: from $7.40$ it falls to $7.10$. This is what happens when breathing is insufficient and $\mathrm{CO_2}$ accumulates (respiratory acidosis). In the body the kidneys respond by retaining bicarbonate, and over time the pH partly rises again; the formula describes the immediate chemical effect.
:::

## Solubility and acid–base equilibrium

:::osservazione{#solubilita-ph titolo="Protonation and dissolution of salts"}
The solubility of many sparingly soluble salts depends on the pH. This happens when the anion of the salt is the conjugate base of a weak acid, because in an acidic environment the anion gains a proton. An example is calcium oxalate, whose solubility equilibrium is
$$
\mathrm{CaC_2O_4(s)\rightleftharpoons Ca^{2+}+C_2O_4^{2-}},
\qquad K_{ps}=a_{\mathrm{Ca^{2+}}}a_{\mathrm{C_2O_4^{2-}}}.
$$
If an acid is added, the oxalate ion gains a proton: $\mathrm{C_2O_4^{2-}+H^+\rightleftharpoons HC_2O_4^-}$. The concentration of free oxalate decreases and, by Le Chatelier's principle, more solid dissolves. Calcium oxalate is therefore more soluble in an acidic environment. The same holds for calcium phosphates, which form bones and tooth enamel: the acids produced by bacteria in the mouth dissolve the enamel and cause tooth decay.

Uric acid behaves in the opposite way. Its neutral form, which prevails at acidic pH, is sparingly soluble, whereas the urate anion, which prevails at higher pH, is more soluble. A low pH therefore favours the precipitation of uric acid. In general an acidic environment increases the solubility of salts whose anion is a base, and decreases the solubility of weak acids that are sparingly soluble in their neutral form.
:::

:::osservazione{titolo="Free species and total concentration"}
The solubility product contains only the free oxalate ion $\mathrm{C_2O_4^{2-}}$, and not the protonated form $\mathrm{HC_2O_4^-}$. A laboratory analysis usually measures total oxalate, that is, the sum of the two forms. To calculate the ion product one first obtains, from the pH, what fraction of the total is in the free form.

![Dissolution equilibrium coupled to protonation of free oxalate](/figure/chimica-semestre-filtro/acidi-basi-redox/solubilita-en.svg)
:::

## Oxidation, reduction and balancing

:::definizione{#redox titolo="Electron transfer and redox agents"}
An **oxidation-reduction** (or redox) reaction is a reaction in which some electrons pass from one substance to another. Two processes take place in it together.

- **Oxidation** is the loss of electrons. The oxidation number of the atom increases.
- **Reduction** is the gain of electrons. The oxidation number of the atom decreases.

The substance that gives up electrons is oxidised and is called the **reducing agent**, because it causes the other to be reduced. The substance that gains electrons is reduced and is called the **oxidising agent**. Every redox reaction can be split into two **half-reactions**, one of oxidation and one of reduction. The two below describe the reaction between zinc metal and copper ions.
$$
\mathrm{Zn\rightarrow Zn^{2+}+2e^-},\qquad
\mathrm{Cu^{2+}+2e^-\rightarrow Cu}.
$$
Zinc gives up two electrons and goes from oxidation number 0 to $+2$: it is oxidised and is the reducing agent. The copper(II) ion gains two electrons and goes from $+2$ to 0: it is reduced and is the oxidising agent. Adding the two half-reactions gives $\mathrm{Zn+Cu^{2+}\rightarrow Zn^{2+}+Cu}$. The electrons given up in an oxidation are always as many as those gained in the reduction.
:::

:::osservazione{#bilanciamento-redox titolo="The half-reaction method"}
A redox reaction is balanced with the **half-reaction method**. In an acidic environment there are six steps.

1. The two half-reactions are written separately.
2. In each, the atoms other than hydrogen and oxygen are balanced.
3. Oxygen is balanced by adding $\mathrm{H_2O}$ molecules.
4. Hydrogen is balanced by adding $\mathrm{H^+}$ ions.
5. The charge is balanced by adding electrons.
6. The half-reactions are multiplied so that the electrons given up equal those gained, and are added together.

For example, the permanganate ion $\mathrm{MnO_4^-}$ oxidises iron(II). Manganese gains 5 electrons and each iron ion gives up 1, so the iron half-reaction has to be multiplied by 5.
$$
\begin{aligned}
\mathrm{MnO_4^-+8H^++5e^-}&\mathrm{\rightarrow Mn^{2+}+4H_2O},\\
\mathrm{5Fe^{2+}}&\mathrm{\rightarrow5Fe^{3+}+5e^-},\\
\mathrm{MnO_4^-+8H^++5Fe^{2+}}&\mathrm{\rightarrow Mn^{2+}+4H_2O+5Fe^{3+}}.
\end{aligned}
$$
In the final equation the electrons no longer appear, because the 5 given up by iron are the 5 gained by manganese. As a check the charge is verified: on the left $-1+8+5\cdot2=+17$ and on the right $+2+5\cdot3=+17$. In a basic environment one first balances as in an acidic environment; then as many $\mathrm{OH^-}$ ions as there are $\mathrm{H^+}$ are added to both sides. The $\mathrm{H^+}$ and $\mathrm{OH^-}$ on the same side form water, and the water molecules present on both sides cancel.
:::

:::osservazione{titolo="Checking atoms and charge"}
A redox equation is balanced when both the atoms of each element and the total charge are equal on the two sides. It can happen that the atoms are balanced and the charge is not; in this case the electrons exchanged have not been evened out. The choice between acidic and basic environment establishes whether to use $\mathrm{H^+}$ or $\mathrm{OH^-}$ in the balancing, and can also change the products: permanganate is reduced to $\mathrm{Mn^{2+}}$ in an acidic environment and to $\mathrm{MnO_2}$ in a neutral or basic environment.

![Five iron oxidations balance the reduction of one permanganate ion](/figure/chimica-semestre-filtro/acidi-basi-redox/redox-en.svg)
:::

## Electrochemical cells, energy and potential

:::definizione{#celle-potenziali titolo="Anode, cathode and standard potentials"}
A **galvanic cell**, or battery, is a device that obtains electric current from a spontaneous redox reaction. The two half-reactions take place in two separate vessels, so the electrons are forced to pass from one to the other through an external wire. A metal strip, the **electrode**, is immersed in each vessel.

- The **anode** is the electrode where oxidation takes place. Electrons are released here, so in a galvanic cell it is the negative pole.
- The **cathode** is the electrode where reduction takes place. Electrons arrive here, so in a galvanic cell it is the positive pole.

The electrons pass through the wire from the anode to the cathode. The two vessels are also connected by a **salt bridge**, a tube containing a solution of a salt: its ions pass into the two vessels and compensate the charges that form there.

Each half-reaction has a **standard reduction potential** $E^\circ$, measured in volts, which shows how easily the substance gains electrons. It is measured relative to the hydrogen electrode, which is assigned the value zero, under standard conditions: concentrations of $1\,\mathrm{mol\,L^{-1}}$ and gases at a pressure of $1\,\mathrm{bar}$. Of two pairs, the one with the higher potential is reduced and acts as cathode; the other is oxidised and acts as anode. The potential difference of the cell is
$$
E^\circ=E^\circ_{\mathrm{red,c}}-E^\circ_{\mathrm{red,a}}.
$$
The subscripts $c$ and $a$ denote the cathode and the anode, and the reduction potentials of both are used, just as they appear in the table. For example, $E^\circ(\mathrm{Cu^{2+}/Cu})=0.34\,\mathrm V$ and $E^\circ(\mathrm{Zn^{2+}/Zn})=-0.76\,\mathrm V$. Copper has the higher potential, so it is the cathode, and the cell has $E^\circ=0.34-(-0.76)=1.10\,\mathrm V$. If a half-reaction is multiplied by a number to even out the electrons, its potential does not change.
:::

:::esempio{titolo="Electrodes and conduction in a cell"}
In the zinc-copper cell (Daniell cell) zinc is the anode: the strip is consumed and releases $\mathrm{Zn^{2+}}$ ions. Copper is the cathode: the $\mathrm{Cu^{2+}}$ ions of the solution are deposited on the strip as copper metal. Electrons pass through the wire and ions pass through the salt bridge. Without the bridge the cell would stop at once, because positive charges would accumulate in the zinc vessel and negative charges in the copper vessel.

In an **electrolytic cell** the opposite happens: an external generator supplies energy and drives a non-spontaneous reaction (electrolysis). Here too oxidation takes place at the anode and reduction at the cathode, but the signs of the poles are reversed: the anode is positive and the cathode is negative.

![Zinc–copper cell: electrons in the wire and ions in the salt bridge](/figure/chimica-semestre-filtro/acidi-basi-redox/pila-en.svg)
:::

:::osservazione{#nernst-gibbs titolo="The Nernst equation and electrical work"}
Standard potentials hold when all concentrations are $1\,\mathrm{mol\,L^{-1}}$. With different concentrations the potential of the cell changes. The **Nernst equation** gives the potential $E$ as a function of the reaction quotient $Q$.
$$
E=E^\circ-\dfrac{RT}{nF}\ln Q.
$$
In this formula $R$ is the gas constant, $T$ the absolute temperature, $n$ the number of electrons exchanged in the reaction and $F\simeq96485\,\mathrm{C\,mol^{-1}}$ the **Faraday constant**, that is, the charge of one mole of electrons. At $25\,^\circ\mathrm C$, changing to the base-10 logarithm, the formula becomes
$$
E=E^\circ-\dfrac{0.05916\,\mathrm V}{n}\log_{10}Q.
$$
For example, in the cell $\mathrm{Zn+Cu^{2+}\rightarrow Zn^{2+}+Cu}$ $n=2$ electrons are exchanged and $Q=\dfrac{a_{\mathrm{Zn^{2+}}}}{a_{\mathrm{Cu^{2+}}}}$, that is, the ratio between the concentrations of the two ions; the solid metals do not appear. If $Q=100$, the potential is $E=1.10-\dfrac{0.05916}{2}\cdot2=1.041\,\mathrm V$. While the cell is working, zinc ions increase and copper ions decrease, so $Q$ grows and the potential falls.

The potential is linked to the free energy of the reaction by $\Delta_rG=-nFE$, and under standard conditions by $\Delta_rG^\circ=-nFE^\circ$. If $E>0$ then $\Delta_rG<0$ and the reaction is spontaneous in the direction written. The value $-\Delta_rG$ is the maximum electrical work the cell can supply for each mole of reaction. When the cell is flat the reaction has reached equilibrium: $E=0$ and $Q=K$. The Nernst equation then gives the equilibrium constant, $\ln K=\dfrac{nFE^\circ}{RT}$.

In biochemistry the standard potential $E^{\circ\prime}$ is used, referred to pH 7 instead of an $\mathrm{H^+}$ concentration of $1\,\mathrm{mol\,L^{-1}}$, because in cells the pH is close to 7.
:::

:::osservazione{titolo="Potential and actual conditions"}
The potential does not depend on the amount of substance that reacts. If the equation is multiplied by 2, the electrons $n$ double and $\Delta_rG$ doubles, but the ratio $-\dfrac{\Delta_rG}{nF}$ stays the same. This is why potentials are not multiplied by the coefficients. A value $E^\circ>0$ shows that the reaction is spontaneous under standard conditions. Under different conditions what counts is the value of $E$ given by the Nernst equation, which for very large $Q$ can become negative; in that case the reverse reaction is spontaneous.

![Dependence of zinc–copper cell potential on the logarithm of the reaction quotient](/figure/chimica-semestre-filtro/acidi-basi-redox/nernst-en.svg)
:::

## Oxygen, respiration and radical species

:::osservazione{#ossigeno-respirazione titolo="Oxygen as an electron acceptor"}
In **cellular respiration** the electrons removed from food molecules pass from one molecule to another along the electron transport chain, in the mitochondria. The last substance to receive them is oxygen, which is reduced to water.
$$
\mathrm{O_2+4H^++4e^-\rightarrow2H_2O}.
$$
The overall reaction of the oxidation of glucose is $\mathrm{C_6H_{12}O_6+6O_2\rightarrow6CO_2+6H_2O}$. The carbon of glucose is oxidised to $\mathrm{CO_2}$ and oxygen is reduced to water. It is the same reaction as the combustion of glucose, but in the cell it takes place in many steps, and part of the energy released is used to produce ATP (adenosine triphosphate, the molecule that supplies energy to cellular reactions) instead of all being lost as heat.

The potential of the oxygen/water pair depends on the pH, because $\mathrm{H^+}$ ions appear in the half-reaction. Under standard conditions, that is, at pH 0, it is $E^\circ=1.229\,\mathrm V$ at $25\,^\circ\mathrm C$. Applying the Nernst equation gives $E=1.229-0.05916\,\mathrm{pH}$ in volts. At pH 7 the potential is about $0.815\,\mathrm V$. This is a high value, so oxygen is a strong oxidising agent even under the conditions of the cell.
:::

:::osservazione{#fenton-haber-weiss titolo="Fenton chemistry and the Haber–Weiss balance"}
Oxygen is reduced to water by gaining four electrons. If it gains fewer, very reactive substances form, called **reactive oxygen species**. With one electron the superoxide ion $\mathrm{O_2^{\bullet-}}$ forms and with two hydrogen peroxide $\mathrm{H_2O_2}$. A **radical** is a substance with an unpaired electron, shown by a dot in the formula. In the **Fenton reaction** iron(II) reacts with hydrogen peroxide.
$$
\mathrm{Fe^{2+}+H_2O_2\rightarrow Fe^{3+}+OH^-+{}^\bullet OH}.
$$
Iron(II) gives up one electron and becomes iron(III). The peroxide splits into a hydroxide ion $\mathrm{OH^-}$ and a **hydroxyl radical** ${}^\bullet\mathrm{OH}$, which is one of the most reactive substances present in cells and damages DNA (deoxyribonucleic acid), proteins and lipids. Superoxide then brings iron(III) back to iron(II).
$$
\mathrm{Fe^{3+}+O_2^{\bullet-}\rightarrow Fe^{2+}+O_2}.
$$
Iron(II) is available again for another Fenton reaction, so iron acts as a catalyst. Adding the two reactions, iron cancels and the overall reaction is obtained, called the **Haber-Weiss** reaction.
$$
\mathrm{O_2^{\bullet-}+H_2O_2\rightarrow O_2+OH^-+{}^\bullet OH}.
$$
Without iron the direct reaction between superoxide and peroxide is very slow. This is why in cells free iron is kept at extremely low concentrations, bound to proteins such as ferritin and transferrin. It is another case in which a favoured reaction takes place at an appreciable rate only in the presence of a catalyst.
:::

:::osservazione{titolo="Distinguishing radicals and ions"}
The dot in the formula shows an unpaired electron. The hydroxide ion $\mathrm{OH^-}$ and the hydroxyl radical ${}^\bullet\mathrm{OH}$ are two different substances: the first has a negative charge and all its electrons paired, the second is neutral and has an unpaired electron. Hydrogen peroxide is a reactive oxygen species without being a radical, because it has no unpaired electrons. A **chelator** is a molecule that binds a metal ion. If in an experiment the addition of an iron chelator reduces oxidative damage, the result shows that free iron takes part in the reaction.

![Iron recycling in the radical Fenton model and the catalysed Haber–Weiss balance](/figure/chimica-semestre-filtro/acidi-basi-redox/fenton-en.svg)
:::
